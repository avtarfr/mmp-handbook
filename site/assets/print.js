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
  <p class="cover-kicker">Mathematical Methods Handbook</p>
  <h1 class="cover-title">${esc(title)}</h1>
  <p class="cover-meta">${units.length} unit${units.length === 1 ? '' : 's'} · assembled ${date}${omitted.length ? ` · without ${omitted.map((l) => layerNames[l]).join(', ')}` : ''}</p>
  <div class="cover-legend">
    <p>Every block carries a provenance badge:</p>
    <p><span class="badge badge-original">Original</span> written for this handbook; <span class="badge badge-adapted">Adapted</span> rewritten in our own words from the cited work; <span class="badge badge-quoted">Quoted</span> short verbatim excerpt with page.</p>
    <p>Works cited are listed under References at the end.</p>
    <p>Text licensed under CC BY-SA 4.0 (creativecommons.org/licenses/by-sa/4.0), except Quoted blocks, which remain under their original copyright.</p>
  </div>
</section>
<nav class="toc">
  <h2>Contents</h2>
  <ol>${chapters
    .map(
      (c) => `<li class="toc-chapter"><a href="#ch-${esc(c.key.replace('/', '--'))}">${esc(c.title)}</a><ol>${c.sections
        .flatMap((s) => s.items)
        .map(({ u }) => `<li><a href="#u-${esc(u.id.replaceAll('.', '_'))}">${esc(u.title)}</a></li>`)
        .join('')}</ol></li>`,
    )
    .join('')}${works.length ? '<li class="toc-chapter"><a href="#references">References</a></li>' : ''}</ol>
</nav>
${chapters
  .map(
    (c) => `<section class="print-chapter" id="ch-${esc(c.key.replace('/', '--'))}"><h1 class="chapter-title">${esc(c.title)}</h1>${c.sections
      .map((s) => `<h2 class="section-title">${esc(s.title)}</h2>${s.items.map((x) => x.html).join('')}`)
      .join('')}</section>`,
  )
  .join('')}
${works.length ? `<section class="references" id="references"><h1 class="chapter-title">References</h1><ol>${works.map((w) => `<li id="bib-${esc(w.id)}">${w.html}</li>`).join('')}</ol></section>` : ''}`;

  // Drop layers the reader excluded, plus interactive bits that mean nothing on paper.
  doc.querySelectorAll('.block').forEach((b) => {
    if (!layers.has(b.dataset.layer)) b.remove();
  });
  doc.querySelectorAll('.basket-toggle').forEach((n) => n.remove());
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
  .print-bar button { font: inherit; padding: 0.3rem 0.8rem; border: 0; border-radius: 4px; background: #2457a6; color: #fff; cursor: pointer; }
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
