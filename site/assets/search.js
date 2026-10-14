// One search box for the contents page, with one dropdown in three parts:
//
//   1. a definition: the opening of the Definition block that best matches the query, so that
//      "bessel" (or "vessel", or "bessel*") shows what a Bessel function is before anything else;
//   2. units, ranked by how well their titles and summaries match;
//   3. the full text, through Pagefind, at the level of single units.
//
// Parts 1 and 2 are computed here, from the contents list already on the page and a small index of
// definition titles; part 3 loads Pagefind's index in chunks, on demand. Nothing leaves the site.
(() => {
  const input = document.getElementById('q');
  const panel = document.getElementById('q-results');
  if (!input || !panel) return;
  const base = document.body.dataset.base;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // ---- matching ---------------------------------------------------------------------------------
  // Words of a query or a text. Anything that is not a letter or digit separates words, so a
  // trailing wildcard ("bessel*") is simply ignored: every term already matches as a prefix.
  const words = (s) => String(s).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').split(/[^a-z0-9]+/).filter(Boolean);
  const slack = (n) => (n <= 3 ? 0 : n <= 7 ? 1 : 2);

  // Edit distance with adjacent transpositions, abandoned as soon as it cannot come in under max.
  function distance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return Infinity;
    let prev2 = null;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const row = [i];
      let best = i;
      for (let j = 1; j <= b.length; j++) {
        row[j] = Math.min(row[j - 1] + 1, prev[j] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) row[j] = Math.min(row[j], prev2[j - 2] + 1);
        if (row[j] < best) best = row[j];
      }
      if (best > max) return Infinity;
      prev2 = prev;
      prev = row;
    }
    return prev[b.length] <= max ? prev[b.length] : Infinity;
  }

  // How well one query term matches a list of words: exact word, then prefix, then inside a word,
  // then a near miss. 0 means no match.
  function termScore(t, ws) {
    // A plural matches its singular almost as well as itself: "residues" finds "residue".
    if (t.length >= 5 && t.endsWith('s')) {
      const one = termScore(t.slice(0, -1), ws);
      if (one >= 0.8) return Math.max(one * 0.95, termScoreRaw(t, ws));
    }
    return termScoreRaw(t, ws);
  }
  function termScoreRaw(t, ws) {
    let best = 0;
    for (const w of ws) {
      if (w === t) return 1;
      if (w.startsWith(t)) best = Math.max(best, 0.85);
      else if (t.length >= 3 && w.includes(t)) best = Math.max(best, 0.6);
      else if (best < 0.5) {
        const d = distance(t, w.slice(0, Math.max(t.length, Math.min(w.length, t.length + 2))), slack(t.length));
        if (d !== Infinity) best = Math.max(best, d === 0 ? 0.8 : 0.55 - 0.1 * d);
      }
    }
    return best;
  }

  const LEADING = new Set(['the', 'a', 'an']);

  // The contents list on this page is the unit index: titles, summaries, kinds and chapters.
  const units = [...document.querySelectorAll('.toc-unit')].map((li, order) => {
    const a = li.querySelector('.toc-title');
    const title = a.textContent.trim();
    return {
      id: li.querySelector('input[data-basket]').dataset.basket,
      title,
      url: a.getAttribute('href'),
      kind: li.dataset.kind,
      advanced: li.dataset.level === 'advanced',
      chapter: li.closest('details.toc-chapter')?.querySelector('.toc-chapter-title')?.textContent.trim() || '',
      summary: li.querySelector('.toc-summary')?.innerHTML || '',
      tw: words(title),
      sw: words(li.dataset.text || ''),
      order,
    };
  });
  const byId = new Map(units.map((u) => [u.id, u]));

  // Rank units. Every term must match somewhere; a term found in the title counts for far more than
  // one found only in the summary. If no unit matches every term, the units matching most of them
  // are offered instead, and the list says so.
  function rankUnits(terms) {
    const scored = [];
    for (const u of units) {
      let score = 0;
      let hit = 0;
      let inTitle = 0;
      for (const t of terms) {
        const ts = termScore(t, u.tw);
        const ss = ts ? 0 : termScore(t, u.sw);
        if (ts) inTitle++;
        if (ts || ss) hit++;
        score += ts * 3 + ss;
      }
      if (!hit) continue;
      if (inTitle === terms.length) score += 2 + 1 / u.tw.length; // whole query in the title
      const lead = termScore(terms[0], u.tw.filter((w) => !LEADING.has(w)).slice(0, 1)); // ...and the title starts with it
      score += lead >= 0.8 ? 1 : lead ? 0.6 : 0;
      if (u.kind === 'definition') score += 0.3;
      scored.push({ u, score, all: hit === terms.length, titleAll: inTitle === terms.length });
    }
    const all = scored.filter((x) => x.all);
    const list = (all.length ? all : scored).sort((a, b) => b.score - a.score || a.u.order - b.u.order);
    return { list, partial: !all.length && scored.length > 0 };
  }

  // ---- definitions --------------------------------------------------------------------------------
  let defs = null; // the index, once loaded
  let defsLoading = null;
  const loadDefs = () => (defsLoading ??= fetch(`${base}data/definitions.json`).then((r) => r.json()).then((list) => {
    // A block's own title can name the idea differently from its unit (the Gamma function is
    // defined in a block titled "Euler's integral"), so both titles are matched.
    defs = list.map((d) => ({ ...d, bw: words(d.t || ''), w: words(`${d.t || ''} ${byId.get(d.u)?.title || ''}`) }));
  }).catch(() => { defs = []; }));
  const previews = new Map();
  const loadPreview = (f) => {
    if (!previews.has(f)) previews.set(f, fetch(`${base}data/${f}`).then((r) => (r.ok ? r.text() : '')).catch(() => ''));
    return previews.get(f);
  };

  // The definition to show: one whose own title contains every term, preferring a definition unit
  // and, among equals, the unit ranked highest for the query. Nothing is shown for a weak match.
  function pickDefinition(terms, ranked) {
    if (!defs?.length) return null;
    // First choice: the unit ranked top, when the whole query is in its title. The card then agrees
    // with the list beneath it. Among its Definition blocks, the one whose own title fits best.
    const top = ranked[0];
    if (top?.titleAll) {
      const own = defs.filter((d) => d.u === top.u.id);
      if (own.length) {
        const fit = (d) => terms.reduce((a, t) => a + termScore(t, d.bw), 0);
        return own.reduce((a, d) => (fit(d) > fit(a) ? d : a), own[0]);
      }
    }
    const rank = new Map(ranked.map((x, i) => [x.u.id, i]));
    let best = null;
    for (const d of defs) {
      if (!byId.has(d.u)) continue;
      let s = 0;
      for (const t of terms) {
        const ts = termScore(t, d.w);
        if (!ts) { s = -1; break; }
        s += ts;
      }
      if (s < terms.length * 0.45) continue;
      const u = byId.get(d.u);
      const inBlockTitle = terms.every((t) => termScore(t, d.bw) >= 0.8);
      s += (u.kind === 'definition' ? 0.5 : 0) + (inBlockTitle ? 0.5 : 0) + 1 / (1 + d.w.length) - (rank.get(d.u) ?? 50) * 0.15;
      if (!best || s > best.s) best = { d, s };
    }
    return best?.d || null;
  }

  // ---- full text (Pagefind) ---------------------------------------------------------------------
  let pf = null;
  const pagefind = () => (pf ??= import(`${base}pagefind/pagefind.js`).then(async (m) => {
    await m.options({ baseUrl: base, excerptLength: 18 });
    m.init();
    return m;
  }));

  async function fullText(q) {
    const m = await pagefind();
    const r = await m.debouncedSearch(q, {}, 220);
    if (r === null) return null; // a newer keystroke superseded this one
    const pages = await Promise.all(r.results.slice(0, 8).map((x) => x.data()));
    const hits = [];
    for (const p of pages) {
      // Unit titles carry ids, so Pagefind reports which unit of the chapter each hit is in.
      const subs = (p.sub_results || []).filter((s) => /#u-[^#]+-t$/.test(s.url)).slice(0, 2);
      for (const s of subs.length ? subs : [p]) hits.push({ url: s.url, title: s.title, chapter: p.meta?.title?.replace(/ · .*$/, '') || '', excerpt: s.excerpt });
      if (hits.length >= 6) break;
    }
    return hits.slice(0, 6);
  }

  // ---- rendering ----------------------------------------------------------------------------------
  const mark = (text, terms) => {
    let html = esc(text);
    for (const t of [...terms].sort((a, b) => b.length - a.length)) {
      if (t.length < 2) continue;
      html = html.replace(new RegExp(`(^|[^\\w>])(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*)`, 'gi'), '$1<mark>$2</mark>');
    }
    return html;
  };
  const KIND = { definition: 'definition', theorem: 'theorem', method: 'method', example: 'example', application: 'application', table: 'table', overview: 'overview' };

  let seq = 0;
  let active = -1;
  const options = () => [...panel.querySelectorAll('[role="option"]')];
  function setActive(i) {
    const opts = options();
    if (!opts.length) return;
    active = (i + opts.length) % opts.length;
    opts.forEach((o, k) => o.setAttribute('aria-selected', String(k === active)));
    input.setAttribute('aria-activedescendant', opts[active].id);
    opts[active].scrollIntoView({ block: 'nearest' });
  }
  function open(on) {
    panel.hidden = !on;
    input.setAttribute('aria-expanded', String(on));
    if (!on) {
      active = -1;
      input.removeAttribute('aria-activedescendant');
    }
  }

  async function run() {
    const q = input.value.trim();
    const terms = [...new Set(words(q))];
    const mine = ++seq;
    if (!terms.length) {
      open(false);
      panel.innerHTML = '';
      return;
    }
    await loadDefs();
    if (mine !== seq) return;
    const { list, partial } = rankUnits(terms);
    const top = list.slice(0, 8);
    const def = pickDefinition(terms, list);
    let n = 0;
    const opt = () => `q-opt-${n++}`;

    const unitHtml = top.length
      ? `<div class="sr-group"><p class="sr-head">${partial ? 'Closest units <span>no unit matches every word</span>' : `Units <span>${list.length} match${list.length === 1 ? '' : 'es'}</span>`}</p>${top
          .map(({ u }) => `<div class="sr-row"><a class="sr-item" role="option" id="${opt()}" href="${esc(u.url)}">
              <span class="sr-title">${mark(u.title, terms)}</span>
              <span class="sr-meta"><span class="kind kind-${esc(u.kind)}">${KIND[u.kind] || esc(u.kind)}</span>${u.advanced ? '<span class="kind kind-advanced">advanced</span>' : ''}<span class="sr-chapter">${esc(u.chapter)}</span></span>
            </a><label class="sr-pdf" title="Add to PDF basket"><input type="checkbox" data-basket="${esc(u.id)}" aria-label="Add ${esc(u.title)} to PDF"> PDF</label></div>`)
          .join('')}</div>`
      : '';
    const defHtml = def
      ? `<div class="sr-group sr-def"><p class="sr-head">Definition</p><a class="sr-item sr-defcard" role="option" id="${opt()}" href="${esc(byId.get(def.u).url)}">
          <span class="sr-title">${def.h || esc(def.t || byId.get(def.u).title)}</span>
          <span class="sr-defbody" data-def="${esc(def.f)}"><span class="sr-loading">Loading…</span></span>
          <span class="sr-meta"><span class="sr-chapter">from <em>${esc(byId.get(def.u).title)}</em></span><span class="sr-open">Open the unit →</span></span>
        </a></div>`
      : '';
    panel.innerHTML = `${defHtml}${unitHtml}<div class="sr-group sr-text"><p class="sr-head">In the text <span class="sr-searching">searching…</span></p></div>
      <p class="sr-foot"><kbd>↑</kbd><kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close</p>`;
    window.mmpBasket?.refresh?.();
    open(true);
    setActive(0);

    if (def) {
      loadPreview(def.f).then((html) => {
        const slot = panel.querySelector(`[data-def="${CSS.escape(def.f)}"]`);
        if (!slot || mine !== seq) return;
        // Links inside the preview would nest inside the card's own link; keep their text only.
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        tmp.querySelectorAll('a').forEach((a) => a.replaceWith(...a.childNodes));
        slot.innerHTML = tmp.innerHTML || '';
        if (def.more) slot.classList.add('sr-clipped');
      });
    }

    let hits;
    try {
      hits = await fullText(q);
    } catch {
      hits = [];
    }
    if (hits === null || mine !== seq) return;
    const group = panel.querySelector('.sr-text');
    if (!group) return;
    group.innerHTML = `<p class="sr-head">In the text <span>${hits.length ? 'where the words occur' : 'no matches'}</span></p>${hits
      .map((h) => `<a class="sr-item sr-hit" role="option" id="${opt()}" href="${esc(h.url)}">
          <span class="sr-title">${esc(h.title)}</span>
          <span class="sr-excerpt">${h.excerpt || ''}</span>
          <span class="sr-meta"><span class="sr-chapter">${esc(h.chapter)}</span></span>
        </a>`)
      .join('')}`;
    if (active < 0) setActive(0);
  }

  // ---- wiring -------------------------------------------------------------------------------------
  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(run, 60);
  });
  let quiet = false; // set while Escape hands focus back, so the list stays closed
  input.addEventListener('focus', () => {
    loadDefs();
    if (!quiet && input.value.trim() && panel.innerHTML) open(true);
    quiet = false;
  });
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown') { ev.preventDefault(); if (panel.hidden) run(); else setActive(active + 1); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); setActive(active - 1); }
    else if (ev.key === 'Enter') {
      const o = options()[active < 0 ? 0 : active];
      if (o) { ev.preventDefault(); o.click(); }
    } else if (ev.key === 'Escape') {
      if (!panel.hidden) { ev.preventDefault(); open(false); }
      else if (input.value) { input.value = ''; run(); }
    }
  });
  panel.addEventListener('mousemove', (ev) => {
    const o = ev.target.closest('[role="option"]');
    if (o) { const i = options().indexOf(o); if (i !== active) setActive(i); }
  });
  // Choosing a result closes the list; ticking its PDF box does not.
  panel.addEventListener('click', (ev) => {
    if (ev.target.closest('[role="option"]')) open(false);
  });
  document.addEventListener('click', (ev) => {
    if (!ev.target.closest('.search')) open(false);
  });
  // Escape closes the list wherever focus is inside it (on a result's PDF box, say), and returns
  // focus to the box.
  panel.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') { ev.preventDefault(); open(false); quiet = true; input.focus(); }
  });
  // "/" focuses the box from anywhere on the page, as on most documentation sites.
  document.addEventListener('keydown', (ev) => {
    if (ev.key !== '/' || ev.ctrlKey || ev.metaKey || ev.altKey) return;
    const t = ev.target;
    if (t.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    ev.preventDefault();
    input.focus();
    input.select();
  });
})();
