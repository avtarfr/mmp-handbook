// End-to-end: build the fixture site, then drive it in headless Chromium.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawn } from 'node:child_process';
import { join } from 'node:path';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { chromium } from 'playwright';
import { contentConfig, loadMap } from '../tools/lib/units.mjs';

const ROOT = join(import.meta.dirname, '..');
const PORT = 4399;
const URL0 = `http://localhost:${PORT}/`;
let server;
let browser;

before(async () => {
  execFileSync('node', ['tools/latex/build.mjs', '--fixtures'], { cwd: ROOT, stdio: 'ignore' });
  execFileSync('node', ['tools/site/build.mjs', '--fixtures', '--out', 'dist/site-test'], { cwd: ROOT, stdio: 'ignore' });
  server = spawn('node', ['tools/site/serve.mjs', '--dir', 'dist/site-test', '--port', String(PORT)], { cwd: ROOT, stdio: 'ignore' });
  await new Promise((r) => setTimeout(r, 400));
  browser = await chromium.launch();
});
after(async () => {
  await browser?.close();
  server?.kill();
});

test('chapter page renders units, badges and math, and the basket works', async () => {
  const page = await browser.newPage();
  await page.goto(`${URL0}fixtures/series-and-fourier/`);
  const expected = loadMap(contentConfig({ fixtures: true })).parts[0].chapters[0].sections.flatMap((s) => s.units || []).length;
  assert.equal(await page.locator('article.unit').count(), expected);
  assert.equal(await page.locator('.katex-error').count(), 0);
  assert.ok((await page.locator('.katex').count()) > 10);
  // Every block shows a provenance badge.
  const blocks = await page.locator('.block').count();
  assert.equal(await page.locator('.block .block-head .badge').count(), blocks);
  // Adapted blocks name their source.
  assert.equal(await page.locator('.block.prov-adapted .block-src a.cite').count(), await page.locator('.block.prov-adapted').count());

  // The contents box at the top of the chapter ticks units too, and both boxes for a unit track
  // the one basket: ticking in the contents box must tick the one in the unit's own header.
  const inToc = page.locator('.chapter-toc input[data-basket="fixtures.parseval-identity"]');
  const inUnit = page.locator('article.unit input[data-basket="fixtures.parseval-identity"]');
  await inToc.check();
  assert.equal(await inUnit.isChecked(), true);
  assert.equal(await page.locator('.basket-count').first().textContent(), '1');

  // Sections fold away while reading, and a link into a folded one still opens it.
  await page.getByRole('button', { name: 'Collapse all sections' }).click();
  assert.equal(await page.locator('details.chapter-section[open]').count(), 0);
  await page.locator('.chapter-toc a[href="#u-fixtures_parseval-identity"]').click();
  await page.locator('#u-fixtures_parseval-identity').waitFor({ state: 'visible' });
  assert.ok((await page.locator('details.chapter-section[open]').count()) > 0);
  await page.goto(`${URL0}basket/`);
  // Parseval's prerequisites are offered in reading order, every unit after the ones it needs;
  // adding them leaves nothing missing.
  await page.locator('.prereq-panel[data-missing]').waitFor();
  const order = await page.locator('.reading-order li a').allTextContents();
  const at = (prefix) => order.findIndex((t) => t.startsWith(prefix));
  assert.ok(at("Bessel's inequality") >= 0 && at("Bessel's inequality") < at("Parseval's identity"), `reading order: ${order.join(' | ')}`);
  await page.locator('#add-missing').click();
  await page.locator('.prereq-panel[data-missing]').waitFor({ state: 'detached' });
  assert.equal(await page.locator('.ro-missing').count(), 0);
  assert.ok((await page.locator('.basket-list li').count()) >= 2);
  assert.ok(await page.locator('.basket-list a', { hasText: "Bessel's inequality" }).count());
  await page.close();
});

test('a chapter title opens the chapter; the fold arrow and checkbox do not', async () => {
  const page = await browser.newPage();
  await page.goto(URL0);
  const ch = page.locator('details.toc-chapter').first();

  // The arrow folds and nothing else: a click on it must not follow the title's link.
  await ch.locator('summary .toc-fold').click();
  assert.equal(await ch.evaluate((d) => d.open), false);
  assert.equal(new URL(page.url()).pathname, new URL(URL0).pathname);

  // The whole chapter title is the link, not just the small "read" at the end of the row.
  const href = await ch.locator('.toc-chapter-title').getAttribute('href');
  await ch.locator('.toc-chapter-title').click();
  await page.waitForLoadState();
  assert.equal(new URL(page.url()).pathname, href);
  await page.close();
});

test('print view paginates, resolves contents page numbers, filters layers and references', async () => {
  const page = await browser.newPage();
  const ids = 'fixtures.geometric-series,fixtures.bessel-inequality,fixtures.parseval-identity';
  await page.goto(`${URL0}print/?u=${ids}&l=proofs&t=Test%20extract`);
  await page.waitForSelector('body[data-ready]', { timeout: 30000 });
  const pages = Number(await page.getAttribute('body', 'data-ready'));
  assert.ok(pages >= 4, `expected at least 4 pages, got ${pages}`);

  // Examples were excluded; proofs kept.
  assert.equal(await page.locator('.pagedjs_pages .block-example').count(), 0);
  assert.ok((await page.locator('.pagedjs_pages .block-proof').count()) >= 3);

  // Contents entries carry resolved page numbers.
  const counters = await page.$$eval('.pagedjs_pages .toc a', (as) => as.map((a) => getComputedStyle(a, '::after').content));
  assert.ok(counters.length >= 4);
  for (const c of counters) assert.match(c, /\d/, `unresolved contents entry: ${c}`);

  // References list exactly the cited work.
  const refs = await page.$$eval('.pagedjs_pages .references li', (li) => li.map((x) => x.id));
  assert.deepEqual(refs, ['bib-stein-shakarchi-2003']);

  const out = join(mkdtempSync(join(tmpdir(), 'mmp-')), 'extract.pdf');
  const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
  writeFileSync(out, pdf);
  const info = execFileSync('pdfinfo', [out], { encoding: 'utf8' });
  assert.equal(Number(/Pages:\s+(\d+)/.exec(info)[1]), pages);
  await page.close();
});
