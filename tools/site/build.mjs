// Static site build.
//
//   node tools/site/build.mjs [--fixtures] [--public] [--out dist/site] [--base /]
//
// --public includes only units that passed the verification gate; without it every unit is shown
// with its status (a dev build). Chapter PDFs are copied in from dist/pdf if they have been built.

import { mkdirSync, writeFileSync, readFileSync, cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { ROOT } from '../lib/works.mjs';
import { loadCatalog } from '../lib/catalog.mjs';
import { renderUnitBody, renderInlineText, escapeHtml as e, BADGE, KIND_LABEL } from '../lib/render.mjs';
import { citedWorks, workSegments, sourceLocator } from '../lib/bib.mjs';
import { layout as baseLayout, provenanceLegend, SITE_TITLE, STATUS_LABEL } from './templates.mjs';

const args = process.argv.slice(2);
const opt = (name, dflt) => (args.includes(name) ? args[args.indexOf(name) + 1] : dflt);
const OUT = join(ROOT, opt('--out', join('dist', 'site')));
const BASE = opt('--base', '/');
const catalog = loadCatalog({ fixtures: args.includes('--fixtures'), publicOnly: args.includes('--public') });
const DEV = !catalog.publicOnly;
const PREVIEW = args.includes('--preview');
// Absolute address of the deployed site, for the link-preview tags that must be absolute.
const SITE_URL = (() => { const u = opt('--site-url', ''); return u && !u.endsWith('/') ? `${u}/` : u; })();
// Every page gets the preview banner from one place, so no call site can forget it.
const DESCRIPTION = `The mathematics physicists and applied scientists use, in ${catalog.includedUnits.length} short units: every theorem proved, every unit with a worked example and sources cited to the page. Tick the units you need and build a PDF of exactly those.`;
const layout = (opts) => baseLayout({ preview: PREVIEW, siteUrl: SITE_URL, ...opts, description: opts.description || DESCRIPTION });

// A file that does not parse cannot be published, but it must not stop the units that do. Only
// errors in files this build includes are fatal; the rest are warnings.
const included = new Set(catalog.includedUnits.map((u) => u.rel));
const fatal = catalog.errors.filter((x) => included.has(x.file));
const ignorable = catalog.errors.filter((x) => !included.has(x.file));
if (ignorable.length) console.error(`${ignorable.length} file(s) outside this build have errors (not published): ${[...new Set(ignorable.map((x) => x.file))].join(', ')}`);
// A local build is made WHILE units are being written, so a file caught half-finished must not stop
// it; it is dropped from this build and reported. A public build has no such excuse: everything it
// includes has been through the gate, so a parse error there is a real fault and stops the build.
const broken = new Set(fatal.map((x) => x.file));
if (fatal.length && DEV) {
  console.error(`${broken.size} file(s) do not parse and are excluded from this local build (being written?): ${[...broken].join(', ')}`);
  catalog.includedUnits = catalog.includedUnits.filter((u) => !broken.has(u.rel));
  for (const part of catalog.tree) {
    for (const ch of part.chapters) {
      for (const sec of ch.sections) sec.units = sec.units.filter((u) => !broken.has(u.rel));
      ch.sections = ch.sections.filter((sec) => sec.units.length);
    }
    part.chapters = part.chapters.filter((ch) => ch.sections.length);
  }
  catalog.tree = catalog.tree.filter((part) => part.chapters.length);
} else if (fatal.length) {
  fatal.forEach((x) => console.error(`${x.file}: ${x.msg}`));
  process.exit(1);
}

const chapterPath = (part, chapter) => `${part.id}/${chapter.id}/`;
// Dots in ids would read as CSS classes in selectors (Paged.js resolves anchors with querySelector).
const unitAnchor = (id) => `u-${id.replaceAll('.', '_')}`;
const unitUrl = new Map();
for (const { part, chapters } of catalog.tree)
  for (const c of chapters) for (const s of c.sections) for (const u of s.units) unitUrl.set(u.id, `${BASE}${chapterPath(part, c.chapter)}#${unitAnchor(u.id)}`);

const ctx = {
  works: catalog.works,
  bibUrl: (id) => `${BASE}bibliography/#bib-${id}`,
  unitUrl: (id) => unitUrl.get(id) ?? null,
  unitTitle: (id) => catalog.units.get(id)?.title ?? null,
};

const write = (rel, content) => {
  const f = join(OUT, rel);
  mkdirSync(join(f, '..'), { recursive: true });
  writeFileSync(f, content);
};

const workHtml = (w) => workSegments(w).map((s) => (s.italic ? `<i>${e(s.text)}</i>` : e(s.text))).join('');

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// ---- units --------------------------------------------------------------------------------
const rendered = new Map();
const buildErrors = [];
for (const u of catalog.includedUnits) {
  const { html, errors } = renderUnitBody(u, ctx);
  errors.forEach((m) => buildErrors.push(`${u.rel}: ${m}`));
  rendered.set(u.id, html);
}
if (buildErrors.length) {
  buildErrors.forEach((m) => console.error(m));
  process.exit(1);
}

function unitArticle(u) {
  const status = catalog.status.get(u.id);
  const prereqs = u.prereqs.length
    ? `<p class="unit-prereqs">Prerequisites: ${u.prereqs
        .map((p) => (unitUrl.has(p) ? `<a href="${unitUrl.get(p)}">${e(ctx.unitTitle(p) ?? p)}</a>` : `<span class="xref-missing" title="In preparation">${e(ctx.unitTitle(p) ?? p)}</span>`))
        .join(', ')}</p>`
    : '';
  const sources = u.sources.length
    ? `<footer class="unit-sources"><h4>Sources</h4><ul>${u.sources
        .map((s) => `<li><a href="${ctx.bibUrl(s.work)}">${e(catalog.works.get(s.work)?.short ?? s.work)}</a>, ${e(sourceLocator(s))}</li>`)
        .join('')}</ul></footer>`
    : '';
  return `<article class="unit${u.level === 'advanced' ? ' unit-advanced' : ''}" id="${unitAnchor(u.id)}" data-unit="${e(u.id)}">
<header class="unit-head">
  <p class="unit-kind">${e(KIND_LABEL[u.kind])}${u.level === 'advanced' ? ' · advanced' : ''}</p>
  <h3><a href="#${unitAnchor(u.id)}">${e(u.title)}</a></h3>
  <p class="unit-badges"><span class="badge badge-${u.provenance}">${BADGE[u.provenance]}</span>${DEV ? ` <span class="status status-${status}">${STATUS_LABEL[status]}</span>` : ''}</p>
  <label class="basket-toggle"><input type="checkbox" data-basket="${e(u.id)}"> Add to PDF</label>
</header>
${u.summary ? `<p class="unit-summary">${renderInlineText(u.summary)}</p>` : ''}
${prereqs}
<div class="unit-body">
${rendered.get(u.id)}
</div>
${sources}
</article>`;
}

// ---- chapter pages --------------------------------------------------------------------------
const pdfDir = join(ROOT, 'dist', 'pdf');
const hasPdfs = existsSync(pdfDir);
if (hasPdfs) cpSync(pdfDir, join(OUT, 'pdf'), { recursive: true });

const chapterList = [];
for (const { part, chapters } of catalog.tree) {
  for (const c of chapters) {
    const path = chapterPath(part, c.chapter);
    const pdfRel = `pdf/${part.id}/${c.chapter.id}.pdf`;
    const pdfLink = hasPdfs && existsSync(join(OUT, pdfRel)) ? `<a class="button" href="${BASE}${pdfRel}">Chapter PDF</a>` : '';
    const ids = c.sections.flatMap((s) => s.units.map((u) => u.id));
    chapterList.push({ part: part.id, chapter: c.chapter.id, title: c.chapter.title, url: `${BASE}${path}`, pdf: pdfLink ? `${BASE}${pdfRel}` : null });
    // The contents box at the top of a chapter is the one list a reader actually has in front of
    // them while reading, so it carries the same checkboxes as the main table of contents: a unit
    // can go in the basket from here without scrolling to it. Section rows tick everything beneath.
    const toc = c.sections
      .map((s) => `<li class="ctoc-section">
      <label class="toc-check"><input type="checkbox" data-basket-group="${e(s.units.map((u) => u.id).join(' '))}" aria-label="Add section ${e(s.section.title)} to PDF"></label>
      <a href="#s-${e(s.section.id)}">${e(s.section.title)}</a>
      <ul>${s.units.map((u) => `<li class="ctoc-unit">
        <label class="toc-check"><input type="checkbox" data-basket="${e(u.id)}" aria-label="Add ${e(u.title)} to PDF"></label>
        <a href="#${unitAnchor(u.id)}">${e(u.title)}</a>
      </li>`).join('')}</ul>
    </li>`)
      .join('');
    // Sections are <details> so a long chapter can be folded down to its headings while reading.
    // They open by default: the page must read straight through for anyone arriving at an anchor,
    // and basket.js reopens whichever one holds the target of a link.
    const sectionsHtml = c.sections
      .map((s) => `<details class="chapter-section" id="s-${e(s.section.id)}" open>
<summary><h2>${e(s.section.title)}</h2><span class="count">${s.units.length}</span></summary>
${s.units.map(unitArticle).join('\n')}
</details>`)
      .join('\n');
    const body = `<nav class="crumbs"><a href="${BASE}">Contents</a> › ${e(part.title)}</nav>
<h1>${e(c.chapter.title)}</h1>
${c.chapter.summary ? `<p class="lede">${e(c.chapter.summary)}</p>` : ''}
<p class="chapter-actions">${pdfLink}<button class="button" type="button" data-basket-add="${e(ids.join(' '))}">Add whole chapter to PDF basket</button><button class="button" type="button" data-sections="collapse">Collapse all sections</button></p>
<details class="chapter-toc" open><summary>In this chapter <span class="count">${ids.length}</span></summary><p class="sub">Tick a unit to add it to your PDF basket.</p><ol>${toc}</ol></details>
<div data-pagefind-body>
${sectionsHtml}
</div>`;
    write(`${path}index.html`, layout({ base: BASE, title: c.chapter.title, body, page: 'chapter', dev: DEV, path, description: c.chapter.summary ? `${c.chapter.summary} ${ids.length} units, each with a worked example and sources cited to the page.` : '' }));
  }
}

// ---- fragments and catalogue for the basket / print view -----------------------------------
const catalogJson = {
  generated: new Date().toISOString(),
  dev: DEV,
  chapters: chapterList,
  units: catalog.includedUnits.map((u) => {
    const pl = catalog.placements.get(u.id);
    return {
      id: u.id,
      title: u.title,
      kind: u.kind,
      level: u.level,
      provenance: u.provenance,
      status: catalog.status.get(u.id),
      part: pl.part.id,
      partTitle: pl.part.title,
      chapter: pl.chapter.id,
      chapterTitle: pl.chapter.title,
      section: pl.section.id,
      sectionTitle: pl.section.title,
      order: pl.order,
      url: unitUrl.get(u.id),
      prereqs: u.prereqs,
      works: [...new Set(u.sources.map((s) => s.work))],
      layers: [...new Set(u.blocks.map((b) => b.layer))],
    };
  }),
  works: Object.fromEntries(citedWorks(catalog.includedUnits, catalog.works).map((w) => [w.id, { short: w.short, html: workHtml(w) }])),
};
write('data/catalog.json', JSON.stringify(catalogJson));
for (const u of catalog.includedUnits) write(`fragments/${u.id}.html`, unitArticle(u));

// ---- contents: the whole handbook as one checkable outline ---------------------------------
// Readers choose what goes in their PDF here, without opening a chapter: every unit is a row with
// a checkbox, and parts, chapters and sections have one that ticks everything beneath them.
const KIND_SHORT = { overview: 'overview', definition: 'definition', theorem: 'theorem', method: 'method', example: 'example', application: 'application', table: 'table' };

function unitRow(part, chapter, u) {
  const status = catalog.status.get(u.id);
  return `<li class="toc-unit" data-kind="${e(u.kind)}" data-level="${e(u.level)}" data-text="${e(`${u.title} ${u.summary || ''}`.replace(/\$/g, '').toLowerCase())}">
  <label class="toc-check"><input type="checkbox" data-basket="${e(u.id)}" aria-label="Add ${e(u.title)} to PDF"></label>
  <a class="toc-title" href="${BASE}${chapterPath(part, chapter)}#${unitAnchor(u.id)}">${e(u.title)}</a>
  <span class="toc-tags"><span class="kind kind-${e(u.kind)}">${e(KIND_SHORT[u.kind] || u.kind)}</span>${u.level === 'advanced' ? '<span class="kind kind-advanced">advanced</span>' : ''}${DEV ? ` <span class="status status-${status}">${STATUS_LABEL[status]}</span>` : ''}</span>
  ${u.summary ? `<p class="toc-summary">${renderInlineText(u.summary)}</p>` : ''}
</li>`;
}

const tocBody = catalog.tree
  .map(({ part, chapters }) => {
    const partUnits = chapters.flatMap((c) => c.sections.flatMap((s) => s.units));
    const chapterHtml = chapters
      .map((c) => {
        const chapterUnits = c.sections.flatMap((s) => s.units);
        const sectionHtml = c.sections
          .map((s) => {
            const ids = s.units.map((u) => u.id).join(' ');
            const heading = c.sections.length > 1 || s.section.title !== c.chapter.title
              ? `<div class="toc-section-head"><label class="toc-check"><input type="checkbox" data-basket-group="${e(ids)}" aria-label="Add section ${e(s.section.title)}"></label><h4>${e(s.section.title)}</h4></div>`
              : '';
            return `<div class="toc-section">${heading}<ul class="toc-units">${s.units.map((u) => unitRow(part, c.chapter, u)).join('')}</ul></div>`;
          })
          .join('');
        return `<details class="toc-chapter" open>
  <summary>
    <label class="toc-check"><input type="checkbox" data-basket-group="${e(chapterUnits.map((u) => u.id).join(' '))}" aria-label="Add chapter ${e(c.chapter.title)}"></label>
    <span class="toc-fold" aria-hidden="true"></span>
    <a class="toc-chapter-title" href="${BASE}${chapterPath(part, c.chapter)}">${e(c.chapter.title)}</a>
    <span class="count">${chapterUnits.length}</span>
    <a class="toc-open" href="${BASE}${chapterPath(part, c.chapter)}" tabindex="-1" aria-hidden="true">read</a>
  </summary>
  ${c.chapter.summary ? `<p class="toc-chapter-summary">${e(c.chapter.summary)}</p>` : ''}
  ${sectionHtml}
</details>`;
      })
      .join('');
    return `<section class="toc-part" id="part-${e(part.id)}">
  <h2><label class="toc-check"><input type="checkbox" data-basket-group="${e(partUnits.map((u) => u.id).join(' '))}" aria-label="Add part ${e(part.title)}"></label>${e(part.title)} <span class="count">${partUnits.length}</span></h2>
  ${chapterHtml}
</section>`;
  })
  .join('\n');

const partNav = catalog.tree
  .map(({ part, chapters }) => `<a href="#part-${e(part.id)}">${e(part.title)} <span class="count">${chapters.flatMap((c) => c.sections.flatMap((s) => s.units)).length}</span></a>`)
  .join('');

write(
  'index.html',
  layout({
    base: BASE,
    title: SITE_TITLE, path: '',
    page: 'home',
    dev: DEV,
    head: `<link rel="stylesheet" href="${BASE}pagefind/pagefind-ui.css"><script src="${BASE}pagefind/pagefind-ui.js" defer></script>`,
    body: `<h1>${SITE_TITLE}</h1>
<p class="lede">The mathematics physicists and applied scientists use, in small units you can read on their own. Tick what you need anywhere in this table of contents and the site assembles it into a PDF, with only the books those units cite in its reference list.</p>
${catalog.includedUnits.length ? `
<div class="toc-controls">
  <label class="toc-filter-label" for="toc-filter">Find a unit</label>
  <input type="search" id="toc-filter" placeholder="a title or topic — try “residue”, “gram schmidt”" aria-describedby="toc-filter-help">
  <span class="toc-filter-count" hidden></span>
</div>
<p id="toc-filter-help" class="sub">Matches the titles and summaries of all ${catalog.includedUnits.length} units and narrows the contents below. Word order does not matter and small misspellings are forgiven.</p>` : ''}
<section class="find">
  <h2 class="small-head">Search the full text</h2>
  <p class="sub">Every word of every unit &mdash; definitions, statements, proofs and worked examples. Slower than the box above, and finds things no title mentions. Runs in your browser; nothing is sent anywhere.</p>
  <div id="search"></div>
</section>
${catalog.includedUnits.length ? `
<h2 class="small-head" id="contents">Contents</h2>
<p class="sub">All ${catalog.includedUnits.length} units. Tick any of them to build a PDF of exactly those.</p>
<nav class="toc-jump">${partNav}</nav>
<p class="toc-buttons">
  <button class="button" type="button" data-toc="expand">Expand all</button>
  <button class="button" type="button" data-toc="collapse">Collapse all</button>
</p>
${DEV ? inProgressPanel() : ''}
<div class="toc">${tocBody}</div>
<div class="toc-bar" hidden>
  <span class="toc-bar-count"></span>
  <a class="button primary" href="${BASE}basket/">Review and build PDF</a>
  <button class="button" type="button" data-basket-clear>Clear</button>
</div>` : '<p>No units have been published yet.</p>'}
<h2 class="small-head">How to read the labels</h2>
${provenanceLegend()}`,
  }),
);

// ---- bibliography ---------------------------------------------------------------------------
const citedBy = new Map();
for (const u of catalog.includedUnits) for (const s of u.sources) (citedBy.get(s.work) ?? citedBy.set(s.work, []).get(s.work)).push(u);
const allWorks = [...catalog.works.values()].sort((a, b) => a.short.localeCompare(b.short));
write(
  'bibliography/index.html',
  layout({
    base: BASE,
    title: 'Sources', path: 'bibliography/',
    page: 'bibliography',
    dev: DEV,
    body: `<h1>Sources</h1>
<p class="lede">The editions this handbook is written from. Page numbers in citations are the printed page numbers of these editions.</p>
<ol class="bibliography">${allWorks
      .map((w) => {
        const users = citedBy.get(w.id) || [];
        return `<li id="bib-${e(w.id)}"><p>${workHtml(w)}</p>${users.length ? `<p class="cited-by">Cited by: ${[...new Set(users)].map((u) => `<a href="${unitUrl.get(u.id)}">${e(u.title)}</a>`).join(', ')}</p>` : ''}</li>`;
      })
      .join('')}</ol>`,
  }),
);

// ---- what is in flight (development builds only) ----------------------------------------------
// The public build shows published units and nothing else, which is the whole point of the gate.
// A local build is for watching the work, so it also says what is written but not yet through the
// gate, and what the map still plans. Units being drafted right now have no file at all, so they
// can only be counted, not listed.
function inProgressPanel() {
  const rows = [];
  let planned = 0;
  for (const [id, place] of catalog.placements) {
    if (!catalog.units.has(id)) { planned++; continue; }
    const st = catalog.status.get(id);
    if (st === 'verified') continue;
    const e = catalog.ledger[id];
    const v = (k) => (e?.hash === catalog.units.get(id).hash && e.verifiers?.[k] ? e.verifiers[k].verdict : '—');
    rows.push({ id, st, title: catalog.units.get(id).title, chapter: `${place.part.id}/${place.chapter.id}`, a: v('A'), b: v('B'), rounds: e?.rounds ?? 0 });
  }
  rows.sort((a, b) => (a.st === b.st ? a.id.localeCompare(b.id) : a.st.localeCompare(b.st)));
  const n = (st) => rows.filter((r) => r.st === st).length;
  return `<section class="inflight">
  <h2 class="small-head">In progress <span class="count">local build &middot; not on the public site</span></h2>
  <p class="inflight-tiles">
    <span><b class="ok">${[...catalog.placements.keys()].filter((id) => catalog.status.get(id) === 'verified').length}</b> published</span>
    <span><b class="work">${n('draft')}</b> under review</span>
    <span><b class="hold">${n('needs-human')}</b> held for a person</span>
    <span><b>${planned}</b> planned, not written</span>
  </p>
  ${rows.length ? `<table class="inflight-table">
  <tr><th>Unit</th><th>Chapter</th><th>State</th><th>A</th><th>B</th><th>Rounds</th></tr>
  ${rows.map((r) => `<tr><td>${e(r.title)}<br><code>${e(r.id)}</code></td><td>${e(r.chapter)}</td><td><span class="status status-${r.st}">${STATUS_LABEL[r.st]}</span></td><td>${e(r.a)}</td><td>${e(r.b)}</td><td>${r.rounds}</td></tr>`).join('')}
  </table>` : '<p class="sub">Nothing is awaiting review.</p>'}
  ${broken.size ? `<p class="sub"><b class="hold">${broken.size}</b> file(s) are mid-write and excluded from this build: ${[...broken].map((f) => `<code>${e(f)}</code>`).join(', ')}</p>` : ''}
  <p class="sub">Units not yet started have no file and so cannot be listed here; they are only counted above.</p>
</section>`;
}

// ---- provenance policy page -----------------------------------------------------------------
const policyFile = join(ROOT, 'docs', 'COPYRIGHT_POLICY.md');
const policyHtml = existsSync(policyFile)
  ? String(unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).processSync(readFileSync(policyFile, 'utf8')))
  : '<h1>Provenance</h1>';
// The policy above states rules; this states what the build actually contains, counted at build
// time. A hand-written claim on a page people may rely on goes stale silently -- this cannot.
const provCounts = { original: 0, adapted: 0, quoted: 0 };
let figureBlocks = 0;
for (const u of catalog.includedUnits) {
  for (const b of u.blocks || []) {
    if (b.provenance in provCounts) provCounts[b.provenance]++;
    if (b.name === 'figure') figureBlocks++;
  }
}
const nUnits = catalog.includedUnits.length;
const nBlocks = provCounts.original + provCounts.adapted + provCounts.quoted;
const pct = (n) => (nBlocks ? Math.round((n / nBlocks) * 100) : 0);
const provenanceAudit = `<h2>What this build contains</h2>
<p>Counted from the ${nUnits} published unit(s) of this build, not asserted:</p>
<table class="prov-audit"><thead><tr><th>Label</th><th>Blocks</th><th>Share</th></tr></thead><tbody>
<tr><td><span class="badge badge-original">Original</span></td><td>${provCounts.original}</td><td>${pct(provCounts.original)}%</td></tr>
<tr><td><span class="badge badge-adapted">Adapted</span></td><td>${provCounts.adapted}</td><td>${pct(provCounts.adapted)}%</td></tr>
<tr><td><span class="badge badge-quoted">Quoted</span></td><td>${provCounts.quoted}</td><td>${pct(provCounts.quoted)}%</td></tr>
</tbody></table>
<p>Figures: ${figureBlocks}.</p>
${provCounts.quoted === 0
  ? `<p><strong>No block in this build is labelled Quoted.</strong> Short quotations from a cited work
     do appear inline inside Adapted blocks, always in quotation marks and cited to the page, where
     an author's own phrasing is the point. They are the exception, not the method.</p>`
  : `<p>The ${provCounts.quoted} Quoted block(s) are short cited excerpts, each at most 60 words; they remain under their original copyright and are not covered by our licence.</p>`}
<p>What the publication gate guarantees about this build, by construction rather than by assertion:
   every unit here was compared against the full text of all cited works, and none contains a run of
   twelve or more consecutive words shared with any of them, nor a block that tracks a source passage
   closely in order. A unit failing either check cannot reach this page.</p>
${figureBlocks === 0 ? '<p>It contains no figures.</p>' : ''}`;

write('provenance/index.html', layout({ base: BASE, title: 'Provenance and copyright', page: 'prose', dev: DEV, path: 'provenance/', description: 'How every block is labelled Original, Adapted or Quoted, the copyright rules each unit is checked against before it can be published, and a count of what this build contains.', body: `${provenanceLegend()}\n${policyHtml}\n${provenanceAudit}` }));

// ---- Privacy ---------------------------------------------------------------------------------
// Generated from docs/PRIVACY.md, like the copyright policy, so the page and the repository cannot
// disagree about what the site stores.
const privacyFile = join(ROOT, 'docs', 'PRIVACY.md');
const privacyHtml = existsSync(privacyFile)
  ? String(unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeStringify).processSync(readFileSync(privacyFile, 'utf8')))
  : '<h1>Privacy</h1>';
write('privacy/index.html', layout({ base: BASE, title: 'Privacy', page: 'prose', dev: DEV, path: 'privacy/', description: 'No analytics, no cookies and no third-party scripts: what the site keeps in your browser, and what it never sends anywhere.', body: privacyHtml }));

// ---- About -----------------------------------------------------------------------------------
write('about/index.html', layout({
  base: BASE,
  title: 'About', path: 'about/',
  page: 'prose',
  dev: DEV,
  body: `<h1>About this handbook</h1>
<p class="lede">The mathematics a physicist or applied scientist actually reaches for, written in
small self-contained units, so you can take the few you need instead of carrying a twelve-hundred-page
book.</p>

<h2>Why it is built this way</h2>
<p>Reference books are organised for the author's exposition, not for the reader's question. You want
the residue theorem and its hypotheses; you get a chapter. Here each unit is one definition, one
theorem with its proof, or one method, with its prerequisites named and linked. Tick the units you
want anywhere in the <a href="${BASE}">contents</a> and the site assembles a PDF of exactly those,
with a reference list containing only the books those units cite.</p>

<h2>How a unit is written</h2>
<p>Every unit is written from a library of nineteen textbooks and rewritten in our own words. Each
block carries a label &mdash; <span class="badge badge-original">Original</span>,
<span class="badge badge-adapted">Adapted</span> or <span class="badge badge-quoted">Quoted</span>
&mdash; and Adapted blocks name the work and pages they follow. This is enforced by software rather
than good intentions: a unit whose prose shares twelve consecutive words with any book in the
library, or whose argument tracks a source passage closely in order, cannot be published. The
details, and a count of what this build actually contains, are on the
<a href="${BASE}provenance/">provenance page</a>.</p>

<h2>How a unit gets published</h2>
<p>Nothing appears here because it was written. A unit is published only after independent reviewers
check its mathematics line by line &mdash; re-deriving proofs and recomputing the worked examples &mdash;
and confirm every citation against the page it names. Theorem-heavy chapters get two reviewers;
the rest get one. A unit that fails goes back and returns through the whole gate. Where a reviewer
disagrees with a cited book rather than with us, the book stands and the disagreement is recorded
separately, because a handbook that silently corrects its sources cannot be checked against them.</p>
<p>So the handbook is deliberately complete rather than provisionally complete: every unit the
topic map plans has been written and has passed the gate. Nothing is shown here that has not.</p>

<h2 id="corrections">Accuracy and corrections</h2>
<p>Review catches errors; it does not catch all of them. Every unit here has passed independent
review, and some will still contain mistakes &mdash; a wrong sign, a missing hypothesis, a page
cited wrongly. Use the handbook as you would any reference: for anything that matters, check it
against the cited page. That is what the citations are for.</p>
<p>Corrections are welcome. Open an issue on <a href="https://github.com/avtarfr/mmp-handbook/issues">GitHub</a>,
or write to the address on the <a href="${BASE}provenance/">provenance page</a>. A corrected unit goes
back through the same review before it is published again.</p>
<p>The text is provided as it is, without warranty of any kind, as its licence states (CC BY-SA 4.0,
section 5).</p>

<h2>Who maintains it</h2>
<p>The handbook is maintained by <a href="https://avtarfr.github.io/">Sumangalam Avtar Sharma</a>,
a mathematics student at IISER Pune.</p>

<h2>Licence</h2>
<p>The text is licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>
&mdash; use it, adapt it, credit it, share it alike. Quoted material and the cited books themselves are
not covered. The software that builds and checks the handbook is MIT.</p>`,
}));

// ---- 404 ------------------------------------------------------------------------------------
// GitHub Pages serves this for any missing path under the site, at that path, so every link in it
// must be absolute -- which the layout's are. Unit anchors moved by a renamed chapter are the likely
// cause, so it offers the unit finder rather than a bare apology.
write('404.html', layout({
  base: BASE,
  title: 'Page not found',
  page: 'prose',
  dev: DEV,
  description: DESCRIPTION,
  body: `<h1>Page not found</h1>
<p class="lede">Nothing lives at this address. If you followed a link to a unit, the unit is almost
certainly still here under a different chapter.</p>
<p><a class="button primary" href="${BASE}#contents">Find it in the contents</a> <a class="button" href="${BASE}">Go to the home page</a></p>`,
}));

// ---- basket and print view ------------------------------------------------------------------
write(
  'basket/index.html',
  layout({
    base: BASE,
    title: 'PDF basket', path: 'basket/',
    page: 'basket',
    dev: DEV,
    body: `<h1>PDF basket</h1>
<p class="lede">Units you tick anywhere on the site collect here. Choose what to include, then open the print view and save it as a PDF.</p>
<div id="basket-app" data-catalog="${BASE}data/catalog.json"><p>Loading…</p></div>
<script src="${BASE}assets/basket-page.js" defer></script>`,
  }),
);
write(
  'print/index.html',
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${SITE_TITLE}: custom PDF</title>
<link rel="stylesheet" href="${BASE}assets/katex/katex.min.css">
<link rel="stylesheet" href="${BASE}assets/print.css">
</head>
<body data-base="${BASE}" data-catalog="${BASE}data/catalog.json">
<div id="print-status">Assembling your PDF…</div>
<script src="${BASE}assets/print.js" defer></script>
</body>
</html>
`,
);

// ---- verification status (dev builds only) --------------------------------------------------
if (DEV) {
  const rows = [...catalog.units.values()]
    .sort((a, b) => (catalog.placements.get(a.id)?.order ?? 1e9) - (catalog.placements.get(b.id)?.order ?? 1e9))
    .map((u) => {
      const entry = catalog.ledger[u.id];
      const st = catalog.status.get(u.id);
      const v = (k) => (entry?.hash === u.hash && entry.verifiers?.[k] ? entry.verifiers[k].verdict : '–');
      const checks = entry?.hash === u.hash && entry.checks ? (entry.checks.pass ? 'pass' : 'fail') : '–';
      return `<tr><td><a href="${unitUrl.get(u.id) ?? '#'}">${e(u.id)}</a></td><td><span class="status status-${st}">${STATUS_LABEL[st]}</span></td><td>${checks}</td><td>${v('A')}</td><td>${v('B')}</td><td>${entry?.rounds ?? 0}</td></tr>`;
    })
    .join('');
  write(
    'status/index.html',
    layout({
      base: BASE,
      title: 'Verification status',
      page: 'status',
      dev: DEV,
      body: `<h1>Verification status</h1><p class="lede">A unit is published when its current text has passed the automated checks and both verifiers. Any edit resets it to draft.</p>
<table class="status-table"><thead><tr><th>Unit</th><th>Status</th><th>Checks</th><th>Verifier A</th><th>Verifier B</th><th>Failed rounds</th></tr></thead><tbody>${rows}</tbody></table>`,
    }),
  );
}

// ---- assets ---------------------------------------------------------------------------------
cpSync(join(ROOT, 'site', 'assets'), join(OUT, 'assets'), { recursive: true });
const katexDist = join(ROOT, 'node_modules', 'katex', 'dist');
mkdirSync(join(OUT, 'assets', 'katex'), { recursive: true });
cpSync(join(katexDist, 'katex.min.css'), join(OUT, 'assets', 'katex', 'katex.min.css'));
cpSync(join(katexDist, 'fonts'), join(OUT, 'assets', 'katex', 'fonts'), { recursive: true });
cpSync(join(ROOT, 'node_modules', 'pagedjs', 'dist', 'paged.polyfill.min.js'), join(OUT, 'assets', 'paged.polyfill.min.js'));

console.log(`site: ${catalog.includedUnits.length} unit(s) in ${chapterList.length} chapter(s) -> ${OUT.replace(ROOT + '/', '')} (${DEV ? 'dev' : 'public'} build)`);
