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
  const write = (ids, why) => {
    const before = read();
    const after = [...new Set(ids)];
    try {
      localStorage.setItem(KEY, JSON.stringify(after));
    } catch {}
    sync();
    document.dispatchEvent(new CustomEvent('basketchange'));
    if (why !== false) announce(before, after, why);
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
    renderCart(ids);
  }

  window.mmpBasket = {
    get: read,
    set: (ids, why) => write(ids, why),
    add: (more, why) => write([...read(), ...more], why),
    remove: (id, why) => write(read().filter((x) => x !== id), why),
    refresh: () => sync(),
  };

  // What a checkbox stands for, in words, from its accessible name: "Add chapter Fourier series"
  // becomes "Fourier series".
  const nameOf = (el) => (el.getAttribute('aria-label') || '').replace(/^Add (part|chapter|section) /, '').replace(/^Add /, '').replace(/ to PDF$/, '');

  document.addEventListener('change', (ev) => {
    const box = ev.target.closest?.('input[data-basket]');
    if (box) {
      const id = box.dataset.basket;
      if (box.checked) window.mmpBasket.add([id], nameOf(box));
      else window.mmpBasket.remove(id, nameOf(box));
      return;
    }
    const group = ev.target.closest?.('input[data-basket-group]');
    if (group) {
      const ids = groupIds(group);
      if (group.checked) window.mmpBasket.add(ids, nameOf(group));
      else window.mmpBasket.set(read().filter((id) => !ids.includes(id)), nameOf(group));
    }
  });
  document.addEventListener('click', (ev) => {
    const add = ev.target.closest?.('[data-basket-add]');
    if (add) window.mmpBasket.add(add.dataset.basketAdd.split(' ').filter(Boolean), document.querySelector('main h1')?.textContent.trim());
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
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try {
        localStorage.setItem('mmp-theme', root.dataset.theme);
      } catch {}
      labelTheme();
    }
  });
  window.addEventListener('storage', (ev) => ev.key === KEY && sync());

  // The theme button names the theme it switches to, as on the author's site.
  function isDark() {
    const t = document.documentElement.dataset.theme;
    return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function labelTheme() {
    const target = isDark() ? 'Light' : 'Dark';
    document.querySelectorAll('.theme-toggle').forEach((b) => {
      const l = b.querySelector('.theme-toggle-label');
      if (l) l.textContent = target;
      b.setAttribute('aria-label', `Switch to ${target.toLowerCase()} theme`);
    });
  }
  labelTheme();
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', labelTheme);

  // A checkbox inside <summary> would otherwise fold the chapter as well as tick the box. The
  // event has to be stopped before it reaches the summary, so this listener sits on the label
  // itself; a delegated one on document would fire too late.
  // Same for a link inside a <summary>: the chapter title and the "read" link both open the
  // chapter, and without this the click folds the chapter on the way out.
  document.querySelectorAll('summary .toc-check, summary a').forEach((el) => {
    el.addEventListener('click', (ev) => ev.stopPropagation());
  });

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

  // Mark the paragraphs whose inline maths would push the page past the window (see .math-wide
  // in the stylesheet). Measured, not guessed. A formula that only overhangs the text column into
  // the empty margin is left alone: on a wide screen it is fully visible as it is, and a
  // scrollbar there would be a regression. Re-measured when the width changes, so rotating a
  // phone is handled.
  const markWide = () => {
    document.querySelectorAll('.math-wide').forEach((el) => el.classList.remove('math-wide'));
    const edge = document.documentElement.clientWidth;
    document.querySelectorAll('.unit p, .unit li, .unit td, .toc-summary').forEach((el) => {
      if (el.scrollWidth <= el.clientWidth + 1 || !el.querySelector('.katex')) return;
      if (el.getBoundingClientRect().left + el.scrollWidth > edge - 8) el.classList.add('math-wide');
    });
  };
  let lastWidth = innerWidth;
  markWide();
  // Inside a folded section everything measures zero, so measure again whenever one opens.
  document.addEventListener('toggle', (ev) => { if (ev.target.open) markWide(); }, true);
  window.addEventListener('resize', () => {
    if (innerWidth !== lastWidth) {
      lastWidth = innerWidth;
      markWide();
    }
  });

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


  // ---- toast and floating basket --------------------------------------------------------------------
  // Ticking a chapter quietly ticks every unit in it; without feedback that is easy to miss. Each
  // change raises a short toast saying what happened, with Undo, and while the basket is not empty a
  // small floating basket shows how many units it holds and opens into a list of them.
  const onBasketPage = document.body.classList.contains('page-basket');
  let toastTimer;
  let undo = null;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.hidden = true;
  document.body.appendChild(toast);
  const showToast = (html, prev) => {
    undo = prev;
    toast.innerHTML = `<span class="toast-text">${html}</span>${prev ? '<button type="button" class="toast-undo">Undo</button>' : ''}${onBasketPage ? '' : `<a class="toast-view" href="${document.body.dataset.base}basket/">View basket</a>`}`;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('on'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(hideToast, 4500);
  };
  const hideToast = () => {
    toast.classList.remove('on');
    setTimeout(() => { if (!toast.classList.contains('on')) toast.hidden = true; }, 250);
  };
  toast.addEventListener('mouseenter', () => clearTimeout(toastTimer));
  toast.addEventListener('mouseleave', () => { toastTimer = setTimeout(hideToast, 2500); });
  toast.addEventListener('click', (ev) => {
    if (ev.target.closest('.toast-undo') && undo) {
      write(undo, false);
      undo = null;
      hideToast();
    }
  });
  const escHtml = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  function announce(before, after, why) {
    const b = new Set(before);
    const a = new Set(after);
    const added = after.filter((id) => !b.has(id)).length;
    const removed = before.filter((id) => !a.has(id)).length;
    if (!added && !removed) return;
    const name = why ? ` <em>${escHtml(why)}</em>` : '';
    const n = (k) => `${k} unit${k === 1 ? '' : 's'}`;
    let msg;
    if (!after.length) msg = 'Basket emptied';
    else if (added && !removed) msg = added === 1 && why ? `Added${name} to your PDF` : `Added ${n(added)}${why ? ` from${name}` : ''} to your PDF`;
    else if (removed && !added) msg = removed === 1 && why ? `Removed${name}` : `Removed ${n(removed)}${why ? ` of${name}` : ''}`;
    else msg = `Basket updated: +${added}, −${removed}`;
    showToast(`${msg} · <strong>${after.length}</strong> in basket`, before);
  }

  // The floating basket. Titles come from the catalogue, fetched the first time it is opened.
  let catalog = null;
  const loadCatalog = () => (catalog ??= fetch(`${document.body.dataset.base}data/catalog.json`).then((r) => r.json()).catch(() => ({ units: [] })));
  const cart = document.createElement('div');
  cart.className = 'cart';
  cart.hidden = true;
  cart.innerHTML = `<button type="button" class="cart-button" aria-expanded="false" aria-controls="cart-panel"><span class="cart-icon" aria-hidden="true"></span><span class="cart-label">PDF basket</span><span class="cart-n">0</span></button>
    <div class="cart-panel" id="cart-panel" hidden></div>`;
  if (!onBasketPage && !document.body.classList.contains('page-print')) document.body.appendChild(cart);
  const cartButton = cart.querySelector('.cart-button');
  const cartPanel = cart.querySelector('.cart-panel');
  async function fillCart() {
    const ids = read();
    const data = await loadCatalog();
    const byId = new Map((data.units || []).map((u) => [u.id, u]));
    const list = ids.map((id) => byId.get(id)).filter(Boolean).sort((x, y) => x.order - y.order);
    const groups = [];
    for (const u of list) {
      if (groups.at(-1)?.title !== u.chapterTitle) groups.push({ title: u.chapterTitle, units: [] });
      groups.at(-1).units.push(u);
    }
    const SHOW = 12;
    let shown = 0;
    cartPanel.innerHTML = `<p class="cart-head"><strong>${list.length}</strong> unit${list.length === 1 ? '' : 's'} in your PDF</p>
      <div class="cart-list">${groups.map((g) => {
        const rows = g.units.filter(() => shown++ < SHOW);
        return rows.length ? `<p class="cart-chapter">${escHtml(g.title)}</p><ul>${rows.map((u) => `<li><a href="${u.url}">${escHtml(u.title)}</a><button type="button" data-cart-remove="${escHtml(u.id)}" aria-label="Remove ${escHtml(u.title)}">×</button></li>`).join('')}</ul>` : '';
      }).join('')}${list.length > SHOW ? `<p class="cart-more">and ${list.length - SHOW} more</p>` : ''}</div>
      <p class="cart-actions"><a class="button primary" href="${document.body.dataset.base}basket/">Review and build PDF</a><button type="button" class="button" data-basket-clear>Empty</button></p>`;
  }
  const setCart = (on) => {
    if (on) hideToast(); // the open basket already shows what the toast would say
    cartPanel.hidden = !on;
    cartButton.setAttribute('aria-expanded', String(on));
    if (on) fillCart();
  };
  cartButton.addEventListener('click', () => setCart(cartPanel.hidden));
  cartPanel.addEventListener('click', (ev) => {
    const rm = ev.target.closest('[data-cart-remove]');
    if (rm) window.mmpBasket.remove(rm.dataset.cartRemove, rm.getAttribute('aria-label').replace(/^Remove /, ''));
  });
  document.addEventListener('click', (ev) => { if (!cartPanel.hidden && !ev.target.closest('.cart')) setCart(false); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !cartPanel.hidden) { setCart(false); cartButton.focus(); } });
  function renderCart(ids) {
    const n = ids.size;
    const wasHidden = cart.hidden;
    cart.hidden = n === 0;
    cart.querySelector('.cart-n').textContent = n;
    if (n === 0) setCart(false);
    else if (!cartPanel.hidden) fillCart();
    if (wasHidden && n) { cart.classList.remove('pop'); requestAnimationFrame(() => cart.classList.add('pop')); }
  }

  sync();
})();
