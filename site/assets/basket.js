// Basket state shared by every page: the list of unit ids the reader wants in their PDF.
// Kept in localStorage; the site still works (without a basket) if storage is unavailable.
(() => {
  const KEY = 'mmp-basket';
  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch {
      return [];
    }
  };
  const write = (ids) => {
    try {
      localStorage.setItem(KEY, JSON.stringify([...new Set(ids)]));
    } catch {}
    sync();
    document.dispatchEvent(new CustomEvent('basketchange'));
  };

  const groupIds = (box) => box.dataset.basketGroup.split(' ').filter(Boolean);

  function sync() {
    const ids = new Set(read());
    document.querySelectorAll('input[data-basket]').forEach((box) => {
      box.checked = ids.has(box.dataset.basket);
    });
    // A group box (part, chapter or section) is checked when all of its units are, and shows the
    // indeterminate state when only some are.
    document.querySelectorAll('input[data-basket-group]').forEach((box) => {
      const group = groupIds(box);
      const chosen = group.filter((id) => ids.has(id)).length;
      box.checked = group.length > 0 && chosen === group.length;
      box.indeterminate = chosen > 0 && chosen < group.length;
    });
    document.querySelectorAll('.basket-count').forEach((el) => {
      el.textContent = ids.size;
      el.hidden = ids.size === 0;
    });
    const bar = document.querySelector('.toc-bar');
    if (bar) {
      bar.hidden = ids.size === 0;
      const n = bar.querySelector('.toc-bar-count');
      if (n) n.textContent = `${ids.size} unit${ids.size === 1 ? '' : 's'} selected`;
    }
  }

  window.mmpBasket = {
    get: read,
    set: write,
    add: (more) => write([...read(), ...more]),
    remove: (id) => write(read().filter((x) => x !== id)),
  };

  document.addEventListener('change', (ev) => {
    const box = ev.target.closest?.('input[data-basket]');
    if (box) {
      const id = box.dataset.basket;
      if (box.checked) window.mmpBasket.add([id]);
      else window.mmpBasket.remove(id);
      return;
    }
    const group = ev.target.closest?.('input[data-basket-group]');
    if (group) {
      const ids = groupIds(group);
      if (group.checked) window.mmpBasket.add(ids);
      else window.mmpBasket.set(read().filter((id) => !ids.includes(id)));
    }
  });
  document.addEventListener('click', (ev) => {
    const add = ev.target.closest?.('[data-basket-add]');
    if (add) window.mmpBasket.add(add.dataset.basketAdd.split(' ').filter(Boolean));
    if (ev.target.closest?.('[data-basket-clear]')) window.mmpBasket.set([]);
    const toc = ev.target.closest?.('[data-toc]');
    if (toc) document.querySelectorAll('details.toc-chapter').forEach((d) => (d.open = toc.dataset.toc === 'expand'));
    if (ev.target.closest?.('.theme-toggle')) {
      const root = document.documentElement;
      const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = dark ? 'light' : 'dark';
      try {
        localStorage.setItem('mmp-theme', root.dataset.theme);
      } catch {}
    }
  });
  window.addEventListener('storage', (ev) => ev.key === KEY && sync());

  // A checkbox inside <summary> would otherwise fold the chapter as well as tick the box. The
  // event has to be stopped before it reaches the summary, so this listener sits on the label
  // itself; a delegated one on document would fire too late.
  document.querySelectorAll('summary .toc-check').forEach((label) => {
    label.addEventListener('click', (ev) => ev.stopPropagation());
  });

  // Filter the table of contents as you type.
  const filter = document.getElementById('toc-filter');
  if (filter) {
    const apply = () => {
      const q = filter.value.trim().toLowerCase();
      let shown = 0;
      document.querySelectorAll('.toc-unit').forEach((li) => {
        const hit = !q || li.dataset.text.includes(q);
        li.hidden = !hit;
        if (hit) shown++;
      });
      document.querySelectorAll('.toc-section').forEach((sec) => {
        sec.hidden = ![...sec.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
      });
      document.querySelectorAll('details.toc-chapter').forEach((ch) => {
        const any = [...ch.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
        ch.hidden = !any;
        if (q && any) ch.open = true;
      });
      document.querySelectorAll('.toc-part').forEach((pt) => {
        pt.hidden = ![...pt.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
      });
      const count = document.querySelector('.toc-filter-count');
      if (count) {
        count.hidden = !q;
        count.textContent = `${shown} match${shown === 1 ? '' : 'es'}`;
      }
    };
    filter.addEventListener('input', apply);
  }

  if (window.PagefindUI && document.getElementById('search')) {
    new PagefindUI({ element: '#search', showSubResults: true, showImages: false });
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      if (window.PagefindUI && document.getElementById('search')) new PagefindUI({ element: '#search', showSubResults: true, showImages: false });
    });
  }
  sync();
})();
