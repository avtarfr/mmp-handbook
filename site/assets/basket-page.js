// Basket page: review the selection, pull in missing prerequisites, pick layers, open the print view.
(async () => {
  const app = document.getElementById('basket-app');
  const base = document.body.dataset.base;
  const LAYERS = [
    ['proofs', 'Proofs and proof ideas'],
    ['examples', 'Worked examples and exercises'],
    ['applications', 'Applications'],
  ];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const load = (k, d) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? d;
    } catch {
      return d;
    }
  };
  const save = (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch {}
  };

  let catalog;
  try {
    catalog = await (await fetch(app.dataset.catalog)).json();
  } catch {
    app.innerHTML = '<p>Could not load the unit catalogue.</p>';
    return;
  }
  const byId = new Map(catalog.units.map((u) => [u.id, u]));

  function missingPrereqs(ids) {
    const have = new Set(ids);
    const out = new Set();
    const walk = (id) => {
      for (const p of byId.get(id)?.prereqs || []) {
        if (!have.has(p) && !out.has(p) && byId.has(p)) {
          out.add(p);
          walk(p);
        }
      }
    };
    ids.forEach(walk);
    return [...out].sort((a, b) => byId.get(a).order - byId.get(b).order);
  }

  // Reading order for a set of units: every unit after the units it lists as prerequisites, ties
  // broken by the handbook's own order (Kahn's algorithm with the handbook order as priority).
  // The map is acyclic -- tools/check/graph.mjs fails a cycle -- but a defect there must not hang the
  // page, so anything left over is appended in handbook order.
  function readingOrder(ids) {
    const set = new Set(ids);
    const needs = new Map(ids.map((id) => [id, (byId.get(id).prereqs || []).filter((p) => set.has(p))]));
    const users = new Map(ids.map((id) => [id, []]));
    for (const [id, ps] of needs) for (const p of ps) users.get(p).push(id);
    const indeg = new Map(ids.map((id) => [id, needs.get(id).length]));
    const ready = ids.filter((id) => indeg.get(id) === 0);
    const out = [];
    const byOrder = (a, b) => byId.get(a).order - byId.get(b).order;
    while (ready.length) {
      ready.sort(byOrder);
      const id = ready.shift();
      out.push(id);
      for (const u of users.get(id)) {
        indeg.set(u, indeg.get(u) - 1);
        if (indeg.get(u) === 0) ready.push(u);
      }
    }
    const left = ids.filter((id) => !out.includes(id)).sort(byOrder);
    return { order: [...out, ...left], needs, users };
  }

  // Direct prerequisites only, by default: following them all the way down reaches the foundations
  // of the handbook (three complex-analysis units need 67 others transitively), which is true but
  // not useful. The full closure is one click away.
  let deep = false;
  function missingDirect(ids) {
    const have = new Set(ids);
    const out = new Set();
    for (const id of ids) for (const p of byId.get(id)?.prereqs || []) if (!have.has(p) && byId.has(p)) out.add(p);
    return [...out];
  }

  function prereqPanel(ids, missing, everything) {
    const all = [...ids, ...missing];
    const { order, needs, users } = readingOrder(all);
    const inBasket = new Set(ids);
    const title = (id) => esc(byId.get(id).title);
    const head = missing.length
      ? `${missing.length} prerequisite${missing.length === 1 ? '' : 's'} missing`
      : 'Prerequisites: all in your basket';
    return `<details class="prereq-panel" ${missing.length ? 'data-missing' : ''}>
  <summary><span>${head}</span><span class="prereq-sub">reading order</span></summary>
  <p class="sub">${missing.length
    ? 'Units your selection relies on that are not in it yet, placed where they belong. Read from the top: every unit comes after the ones it needs.'
    : 'Everything your selection relies on is already in it. Read from the top: every unit comes after the ones it needs.'}</p>
  <p class="prereq-actions">${missing.length ? `<button class="button primary" type="button" id="add-missing">Add ${missing.length === 1 ? 'it' : `all ${missing.length}`}</button>` : ''}
  ${everything.length > missing.length || deep ? `<label class="prereq-deep"><input type="checkbox" id="prereq-deep" ${deep ? 'checked' : ''}> Include what those depend on too${deep ? '' : ` (${everything.length - missing.length} more)`}</label>` : ''}</p>
  <ol class="reading-order">${order
    .map((id) => {
      const missingHere = !inBasket.has(id);
      const req = needs.get(id);
      const by = users.get(id).filter((u) => inBasket.has(u));
      return `<li class="${missingHere ? 'ro-missing' : 'ro-have'}">
      <span class="ro-dot" aria-hidden="true"></span>
      <div class="ro-body">
        <a href="${byId.get(id).url}">${title(id)}</a>
        ${missingHere ? `<button class="ro-add" type="button" data-add="${esc(id)}" aria-label="Add ${title(id)} to the basket">Add</button>` : ''}
        ${req.length ? `<span class="ro-needs">needs ${req.map(title).join(', ')}</span>` : ''}
        ${missingHere && by.length ? `<span class="ro-needs">needed by ${by.map(title).join(', ')}</span>` : ''}
      </div>
    </li>`;
    })
    .join('')}</ol>
</details>`;
  }

  function render() {
    const ids = window.mmpBasket.get().filter((id) => byId.has(id));
    const layers = load('mmp-layers', { proofs: true, examples: true, applications: true });
    const title = load('mmp-pdf-title', 'My handbook extract');
    if (!ids.length) {
      app.innerHTML = `<p>Your basket is empty. Tick <em>Add to PDF</em> on any unit, or add a whole chapter from its page.</p><p><a href="${base}">Browse the contents</a></p>`;
      return;
    }
    const units = ids.map((id) => byId.get(id)).sort((a, b) => a.order - b.order);
    const groups = [];
    for (const u of units) {
      const key = `${u.part}/${u.chapter}`;
      if (groups.at(-1)?.key !== key) groups.push({ key, title: u.chapterTitle, units: [] });
      groups.at(-1).units.push(u);
    }
    const allMissing = missingPrereqs(ids);
    const missing = deep ? allMissing : missingDirect(ids);
    const params = new URLSearchParams({ u: units.map((u) => u.id).join(','), l: LAYERS.filter(([k]) => layers[k]).map(([k]) => k).join(','), t: title });

    const wasOpen = app.querySelector('.prereq-panel')?.open;
    app.innerHTML = `<div class="basket-layout"><div class="basket-main">
${groups
  .map(
    (g) => `<div class="basket-group"><h3>${esc(g.title)}</h3><ul class="basket-list">${g.units
      .map((u) => `<li><span><a href="${u.url}">${esc(u.title)}</a></span><button type="button" data-remove="${esc(u.id)}">Remove</button></li>`)
      .join('')}</ul></div>`,
  )
  .join('')}
<div class="panel">
  <label>PDF title <input type="text" id="pdf-title" value="${esc(title)}"></label>
  <p><strong>Include</strong> (statements, definitions and methods are always included)</p>
  ${LAYERS.map(([k, label]) => `<label><input type="checkbox" data-layer="${k}" ${layers[k] ? 'checked' : ''}> ${label}</label>`).join('')}
</div>
<p class="chapter-actions">
  <a class="button primary" id="open-print" href="${base}print/?${params}">Open print view</a>
  <button class="button" type="button" id="clear">Empty basket</button>
</p>
<p class="cited-by">The print view lays out pages in your browser. Use your browser's Print command and choose “Save as PDF”.</p>
</div>
<aside class="basket-side">${prereqPanel(ids, missing, allMissing)}</aside></div>`;
    // Open by default where there is room beside the list, or when something is missing; folded on a
    // phone when nothing needs doing. A reader's own choice survives re-rendering.
    const panel = app.querySelector('.prereq-panel');
    panel.open = wasOpen ?? (missing.length > 0 || matchMedia('(min-width: 1000px)').matches);

    app.querySelector('#add-missing')?.addEventListener('click', () => window.mmpBasket.add(missing, 'missing prerequisites'));
    app.querySelector('#prereq-deep')?.addEventListener('change', (ev) => { deep = ev.target.checked; render(); });
    app.querySelectorAll('[data-add]').forEach((b) => b.addEventListener('click', () => window.mmpBasket.add([b.dataset.add], byId.get(b.dataset.add).title)));
    app.querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => window.mmpBasket.remove(b.dataset.remove, byId.get(b.dataset.remove).title)));
    app.querySelector('#clear').addEventListener('click', () => window.mmpBasket.set([]));
    app.querySelectorAll('[data-layer]').forEach((b) =>
      b.addEventListener('change', () => {
        save('mmp-layers', { ...layers, [b.dataset.layer]: b.checked });
        render();
      }),
    );
    app.querySelector('#pdf-title').addEventListener('change', (ev) => {
      save('mmp-pdf-title', ev.target.value || 'My handbook extract');
      render();
    });
  }

  document.addEventListener('basketchange', render);
  render();
})();
