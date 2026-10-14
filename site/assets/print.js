// Print view: assemble the selected units into one document, then let Paged.js paginate it
// (cover, contents with page numbers, running heads, references limited to what is cited).
//
// URL parameters: u = comma-separated unit ids, l = layers to include (proofs,examples,applications),
// t = title. Without u, the reader's basket is used.
window.PagedConfig = { auto: false };

(async () => {
  const body = document.body;
  const base = body.dataset.base;
  const status = document.getElementById('print-status');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const params = new URLSearchParams(location.search);
  let ids = (params.get('u') || '').split(',').filter(Boolean);
  if (!ids.length) {
    try {
      ids = JSON.parse(localStorage.getItem('mmp-basket')) || [];
    } catch {}
  }
  const layers = new Set(['core', ...(params.has('l') ? params.get('l').split(',').filter(Boolean) : ['proofs', 'examples', 'applications'])]);
  const title = params.get('t') || 'Handbook extract';

  const catalog = await (await fetch(body.dataset.catalog)).json();
  const byId = new Map(catalog.units.map((u) => [u.id, u]));
  const units = ids.filter((id) => byId.has(id)).map((id) => byId.get(id)).sort((a, b) => a.order - b.order);
  if (!units.length) {
    status.innerHTML = `Nothing to print. <a href="${base}basket/">Go to the basket</a>.`;
    return;
  }

  const fragments = await Promise.all(units.map((u) => fetch(`${base}fragments/${u.id}.html`).then((r) => r.text())));

  // Group by chapter, then section, in handbook order.
  const chapters = [];
  units.forEach((u, i) => {
    if (chapters.at(-1)?.key !== `${u.part}/${u.chapter}`) chapters.push({ key: `${u.part}/${u.chapter}`, title: u.chapterTitle, sections: [] });
    const ch = chapters.at(-1);
    if (ch.sections.at(-1)?.id !== u.section) ch.sections.push({ id: u.section, title: u.sectionTitle, items: [] });
    ch.sections.at(-1).items.push({ u, html: fragments[i] });
  });

  const works = [...new Set(units.flatMap((u) => u.works))]
    .map((id) => ({ id, ...catalog.works[id] }))
    .filter((w) => w.html)
    .sort((a, b) => a.short.localeCompare(b.short));
  const date = new Date().toISOString().slice(0, 10);
  const layerNames = { proofs: 'proofs', examples: 'examples and exercises', applications: 'applications' };
  const omitted = Object.keys(layerNames).filter((l) => !layers.has(l));

  const doc = document.createElement('div');
  doc.id = 'document';
  doc.innerHTML = `
<section class="cover">
  <p class="cover-series">Mathematical Methods Handbook</p>
  <h1 class="cover-title">${esc(title)}</h1>
  <p class="cover-meta">${units.length} unit${units.length === 1 ? '' : 's'}${omitted.length ? `, without ${omitted.map((l) => layerNames[l]).join(' or ')}` : ''}</p>
  <p class="cover-date">${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
  <div class="cover-legend">
    <p>Each block drawn from a cited work ends with its source (<i>Adapted from</i> &hellip;), and a quotation is
    set in quotation marks with its page; a block with neither is original to the handbook. The works cited
    are listed under References.</p>
    <p>Text licensed under CC BY-SA 4.0 (creativecommons.org/licenses/by-sa/4.0), except quotations,
    which remain under their original copyright. Reviewed, not guaranteed: check what matters against
    the cited page.</p>
  </div>
</section>
<nav class="toc">
  <h2>Contents</h2>
  <ol>${chapters
    .map(
      (c, ci) => `<li class="toc-chapter"><a href="#ch-${esc(c.key.replace('/', '--'))}"><span class="toc-num">${ci + 1}</span><span class="toc-text">${esc(c.title)}</span><span class="toc-dots"></span></a><ol>${c.sections
        .map((s, si) => s.items.map(({ u }, ui) => `<li><a href="#u-${esc(u.id.replaceAll('.', '_'))}"><span class="toc-num">${ci + 1}.${si + 1}.${ui + 1}</span><span class="toc-text">${esc(u.title)}</span><span class="toc-dots"></span></a></li>`).join(''))
        .join('')}</ol></li>`,
    )
    .join('')}${works.length ? '<li class="toc-chapter"><a href="#references"><span class="toc-num"></span><span class="toc-text">References</span><span class="toc-dots"></span></a></li>' : ''}</ol>
</nav>
${chapters
  .map(
    (c, ci) => `<section class="print-chapter" id="ch-${esc(c.key.replace('/', '--'))}" data-chapter="${ci + 1}"><p class="chapter-kicker">Chapter ${ci + 1}</p><h1 class="chapter-title">${esc(c.title)}</h1>${c.sections
      .map((s, si) => `<h2 class="section-title"><span class="num">${ci + 1}.${si + 1}</span>${esc(s.title)}</h2>${s.items.map((x, ui) => x.html.replace('<h3', `<h3 data-num="${ci + 1}.${si + 1}.${ui + 1}"`)).join('')}`)
      .join('')}</section>`,
  )
  .join('')}
${works.length ? `<section class="references" id="references"><h1 class="chapter-title">References</h1><ol>${works.map((w) => `<li id="bib-${esc(w.id)}">${w.html}</li>`).join('')}</ol></section>` : ''}`;

  // Drop layers the reader excluded, plus interactive bits that mean nothing on paper.
  doc.querySelectorAll('.block').forEach((b) => {
    if (!layers.has(b.dataset.layer)) b.remove();
  });
  doc.querySelectorAll('.basket-toggle').forEach((n) => n.remove());

  // Typeset like a LaTeX document: the three amsthm styles keyed on each block's label, one counter
  // per chapter shared by everything numbered (Definition 2.1, Theorem 2.2, ...), run-in heads, and a
  // block's source moved to its end, where a reader finishes with it.
  const PLAIN = new Set(['Theorem', 'Proposition', 'Lemma', 'Corollary', 'Theorem (stated without proof)']);
  const REMARK = new Set(['Proof', 'Idea of the proof', 'Note', 'Remark']);
  doc.querySelectorAll('.print-chapter').forEach((ch) => {
    let n = 0;
    ch.querySelectorAll('h3[data-num]').forEach((h) => {
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = h.dataset.num;
      h.prepend(num);
    });
    ch.querySelectorAll('.block').forEach((b) => {
      const label = b.querySelector('.block-label');
      const name = label?.textContent.trim() || '';
      const style = PLAIN.has(name) ? 'thm-plain' : REMARK.has(name) || b.classList.contains('block-proof') ? 'thm-remark' : 'thm-definition';
      b.classList.add(style);
      if (style !== 'thm-remark' && label && !b.classList.contains('block-quote')) {
        n += 1;
        label.textContent = `${name} ${ch.dataset.chapter}.${n}`;
      }
      const src = b.querySelector('.block-src');
      if (src) b.appendChild(src);
      b.querySelectorAll('.badge').forEach((x) => x.remove());
    });
  });
  doc.querySelectorAll('.unit-kind, .unit-badges').forEach((n) => n.remove());
  // Computer Modern has no non-breaking hyphen (U+2011); a plain one keeps the text in one face.
  const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT);
  for (let t; (t = walker.nextNode());) {
    if (t.parentElement.closest('.katex, code, pre')) continue;
    if (t.data.includes('\u2011')) t.data = t.data.replaceAll('\u2011', '-');
    // Straight double quotes become typographic ones, as LaTeX's `` and '' would give: opening
    // after a space, an opening bracket or the start of the text node, closing otherwise.
    if (t.data.includes('"')) t.data = t.data.replace(/(^|[\s(\[{\u2014\u2013-])"/g, '$1\u201c').replace(/"/g, '\u201d');
  }
  doc.querySelectorAll('.status').forEach((n) => n.remove());
  // Links inside the document point at in-document anchors; everything else becomes plain text.
  const local = new Set([...doc.querySelectorAll('[id]')].map((n) => n.id));
  doc.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    const hash = href.includes('#') ? href.slice(href.indexOf('#') + 1) : null;
    if (hash && local.has(hash)) a.setAttribute('href', `#${hash}`);
    else a.replaceWith(...a.childNodes);
  });
  doc.querySelectorAll('.unit-head h3 a').forEach((a) => a.replaceWith(...a.childNodes));

  status.textContent = 'Laying out pages…';
  body.appendChild(doc);

  // LaTeX conventions that need the laid-out text, so they run once the document is in the page and
  // before Paged.js paginates it.
  // (1) Text that resumes after a display without starting a new sentence continues the paragraph,
  //     so it is not indented: "... write  A = {...}  for the open annulus ...".
  doc.querySelectorAll('.block p').forEach((para) => {
    // Display maths is a bare .katex-display between paragraphs.
    const afterDisplay = para.previousElementSibling?.matches('.katex-display');
    if (afterDisplay && /^[a-z,;.)]/.test(para.textContent.trim())) para.classList.add('cont');
  });
  // (2) A short inline formula and the punctuation after it become one unbreakable box, so a line
  //     never starts with a comma. Only formulas narrower than a third of the text width: a longer
  //     one must keep its own break points or it could run into the margin.
  const textWidth = doc.querySelector('.block')?.getBoundingClientRect().width || 600;
  doc.querySelectorAll('.katex').forEach((k) => {
    if (k.closest('.katex-display')) return;
    const next = k.nextSibling;
    if (!next || next.nodeType !== 3 || !/^[.,;:!?)]/.test(next.data)) return;
    if (k.getClientRects().length !== 1 || k.getBoundingClientRect().width > textWidth / 3) return;
    const m = next.data.match(/^[.,;:!?)]+/)[0];
    next.data = next.data.slice(m.length);
    const box = document.createElement('span');
    box.className = 'math-glue';
    k.replaceWith(box);
    box.append(k, m);
  });

  await new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = `${base}assets/paged.polyfill.min.js`;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  status.remove();
  const flow = await window.PagedPolyfill.preview();

  // Added after pagination so Paged.js leaves these rules alone: preview chrome on screen, nothing on paper.
  const chrome = document.createElement('style');
  chrome.textContent = `
@media screen {
  body { background: #e8e6e2; }
  .pagedjs_pages { padding-top: 3rem; }
  .pagedjs_page { background: #fff; margin: 10mm auto; box-shadow: 0 1px 6px rgba(0, 0, 0, 0.18); }
  .print-bar { position: fixed; top: 0; left: 0; right: 0; display: flex; gap: 1rem; align-items: center; justify-content: center;
    padding: 0.5rem 16px; background: #1d1f21; color: #fff; font: 0.9rem system-ui, sans-serif; z-index: 10; }
  .print-bar button { font: inherit; padding: 0.3rem 0.8rem; border: 0; border-radius: 4px; background: #5e733b; color: #fff; cursor: pointer; }
  .print-bar a { color: #cfd8e6; }
}
@media print { .print-bar { display: none !important; } }`;
  document.head.appendChild(chrome);
  const bar = document.createElement('div');
  bar.className = 'print-bar';
  bar.innerHTML = `<span>${flow.total} pages</span><button type="button">Print / Save as PDF</button><a href="${base}basket/">Back to basket</a>`;
  bar.querySelector('button').addEventListener('click', () => window.print());
  document.body.appendChild(bar);
  document.body.dataset.ready = String(flow.total);
})().catch((err) => {
  const s = document.getElementById('print-status');
  if (s) s.textContent = `Could not build the print view: ${err.message}`;
  console.error(err);
});
