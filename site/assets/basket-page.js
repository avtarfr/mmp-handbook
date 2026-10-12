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
    const missing = missingPrereqs(ids);
    const params = new URLSearchParams({ u: units.map((u) => u.id).join(','), l: LAYERS.filter(([k]) => layers[k]).map(([k]) => k).join(','), t: title });

    app.innerHTML = `
${missing.length ? `<div class="panel"><strong>${missing.length} prerequisite unit${missing.length === 1 ? ' is' : 's are'} not in your basket:</strong>
  <ul>${missing.map((id) => `<li><a href="${byId.get(id).url}">${esc(byId.get(id).title)}</a></li>`).join('')}</ul>
  <button class="button" type="button" id="add-missing">Add them</button></div>` : ''}
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
<p class="cited-by">The print view lays out pages in your browser. Use your browser's Print command and choose “Save as PDF”.</p>`;

    app.querySelector('#add-missing')?.addEventListener('click', () => window.mmpBasket.add(missing));
    app.querySelectorAll('[data-remove]').forEach((b) => b.addEventListener('click', () => window.mmpBasket.remove(b.dataset.remove)));
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
