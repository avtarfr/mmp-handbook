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

  await page.locator('input[data-basket="fixtures.parseval-identity"]').check();
  assert.equal(await page.locator('.basket-count').first().textContent(), '1');
  await page.goto(`${URL0}basket/`);
  // Parseval's prerequisites are suggested; adding them leaves nothing missing.
  await page.getByText(/prerequisite units? (is|are) not in your basket/).waitFor();
  await page.getByRole('button', { name: 'Add them' }).click();
  await page.getByRole('button', { name: 'Add them' }).waitFor({ state: 'detached' });
  assert.ok((await page.locator('.basket-list li').count()) >= 2);
  assert.ok(await page.locator('.basket-list a', { hasText: "Bessel's inequality" }).count());
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
