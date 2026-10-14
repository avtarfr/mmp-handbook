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
    const secs = ev.target.closest?.('[data-sections]');
    if (secs) {
      const collapsing = secs.dataset.sections === 'collapse';
      document.querySelectorAll('details.chapter-section').forEach((d) => (d.open = !collapsing));
      secs.dataset.sections = collapsing ? 'expand' : 'collapse';
      secs.textContent = collapsing ? 'Expand all sections' : 'Collapse all sections';
    }
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
  // Same for a link inside a <summary>: the chapter title and the "read" link both open the
  // chapter, and without this the click folds the chapter on the way out.
  document.querySelectorAll('summary .toc-check, summary a').forEach((el) => {
    el.addEventListener('click', (ev) => ev.stopPropagation());
  });

  // Filter the table of contents as you type.
  //
  // Plain substring matching was too brittle for a list of 360 mathematical titles: it wants the
  // words in the right order and every letter right, so "schmidt gram" and "orthoganal" both found
  // nothing. This matcher splits the query into words, requires every one of them to match
  // somewhere in the row, and lets a word match either as a substring or within a small edit
  // distance of one of the row's words -- one edit for a short word, two for a long one, none at
  // all for a word of three letters or fewer, where every typo is also some other real word.
  const words = (s) => s.toLowerCase().split(/[^a-z0-9]+/i).filter(Boolean);
  const slack = (n) => (n <= 3 ? 0 : n <= 7 ? 1 : 2);

  // Edit distance, abandoned as soon as it cannot come in under `max`. Two rows of the matrix are
  // enough, and the length check rejects most candidates before any work happens. Swapping two
  // adjacent letters counts as one edit, not two: "lapalce" for "laplace" is the typo people
  // actually make, and plain Levenshtein scores it the same as two unrelated mistakes.
  function within(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return false;
    let prev2 = null;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const row = [i];
      let best = i;
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        row[j] = Math.min(row[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          row[j] = Math.min(row[j], prev2[j - 2] + 1);
        }
        if (row[j] < best) best = row[j];
      }
      if (best > max) return false; // no path through this row can still finish within budget
      prev2 = prev;
      prev = row;
    }
    return prev[b.length] <= max;
  }

  const matches = (text, rowWords, terms) =>
    terms.every((t) => text.includes(t) || rowWords.some((w) => within(t, w, slack(t.length))));

  const filter = document.getElementById('toc-filter');
  if (filter) {
    // Which chapters the reader had open before filtering, so clearing the box puts the list back
    // as they left it rather than leaving everything the search happened to touch hanging open.
    let restore = null;
    const apply = () => {
      const terms = words(filter.value);
      const units = document.querySelectorAll('.toc-unit');
      if (!terms.length && restore) {
        document.querySelectorAll('details.toc-chapter').forEach((ch, i) => (ch.open = restore[i]));
        restore = null;
      } else if (terms.length && !restore) {
        restore = [...document.querySelectorAll('details.toc-chapter')].map((ch) => ch.open);
      }
      let shown = 0;
      units.forEach((li) => {
        if (!li._words) li._words = words(li.dataset.text);
        const hit = !terms.length || matches(li.dataset.text, li._words, terms);
        li.hidden = !hit;
        if (hit) shown++;
      });
      document.querySelectorAll('.toc-section').forEach((sec) => {
        sec.hidden = ![...sec.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
      });
      document.querySelectorAll('details.toc-chapter').forEach((ch) => {
        const any = [...ch.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
        ch.hidden = !any;
        if (terms.length && any) ch.open = true;
      });
      document.querySelectorAll('.toc-part').forEach((pt) => {
        pt.hidden = ![...pt.querySelectorAll('.toc-unit')].some((li) => !li.hidden);
      });
      const count = document.querySelector('.toc-filter-count');
      if (count) {
        count.hidden = !terms.length;
        count.textContent = shown ? `${shown} of ${units.length}` : 'nothing matches';
        count.classList.toggle('empty', terms.length > 0 && shown === 0);
      }
    };
    filter.addEventListener('input', apply);
    // Escape clears the box rather than only blurring it, which is what the key does in every
    // other search field and what a reader who has filtered down to nothing will reach for.
    filter.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && filter.value) {
        filter.value = '';
        apply();
        ev.preventDefault();
      }
    });
  }

  // A link into a collapsed section would otherwise scroll to nothing. Open whatever holds the
  // anchor, on load and on every later hash change.
  const revealHash = () => {
    if (!location.hash || location.hash.length < 2) return;
    let el;
    try {
      el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch {
      return;
    }
    if (!el) return;
    for (let d = el.closest('details'); d; d = d.parentElement?.closest('details')) d.open = true;
    el.scrollIntoView();
  };
  window.addEventListener('hashchange', revealHash);
  revealHash();

  // Printing a chapter page from the browser must print all of it, whatever is folded on screen.
  const printed = [];
  window.addEventListener('beforeprint', () => {
    document.querySelectorAll('details').forEach((d) => {
      if (!d.open) {
        printed.push(d);
        d.open = true;
      }
    });
  });
  window.addEventListener('afterprint', () => {
    printed.splice(0).forEach((d) => (d.open = false));
  });

  // Pagefind's default wording ("Search", "3 results for X") says nothing about what is being
  // searched or what a result is, which on a page that also has a contents filter is the whole
  // question. These strings answer it.
  const PAGEFIND = {
    element: '#search',
    showSubResults: true,
    showImages: false,
    excerptLength: 25,
    translations: {
      placeholder: 'Search inside every unit…',
      clear_search: 'Clear',
      load_more: 'Show more chapters',
      search_label: 'Search the full text of the handbook',
      filters_label: 'Filters',
      zero_results: 'No unit contains [SEARCH_TERM]. Try fewer words, or the contents filter below for titles.',
      many_results: '[COUNT] chapters contain [SEARCH_TERM]',
      one_result: 'One chapter contains [SEARCH_TERM]',
      alt_search: 'No unit contains [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead.',
      search_suggestion: 'No unit contains [SEARCH_TERM]. Try one of these instead:',
      searching: 'Searching for [SEARCH_TERM]…',
    },
  };
  const startSearch = () => {
    if (window.PagefindUI && document.getElementById('search')) new PagefindUI(PAGEFIND);
  };
  if (window.PagefindUI) startSearch();
  else window.addEventListener('DOMContentLoaded', startSearch);
  sync();
})();
