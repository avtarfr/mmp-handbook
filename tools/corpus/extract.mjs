// Extract per-page text from every book in bibliography/works.yaml into .cache/corpus/<id>/pNNNN.txt.
// Text PDFs use pdftotext; image scans (text: ocr) are rasterised with pdftoppm and read by tesseract.
// Pages already extracted are skipped, so the (slow) OCR runs once.
//
//   node tools/corpus/extract.mjs [work-id ...] [--jobs N]

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { availableParallelism } from 'node:os';
import { loadWorks, RESOURCES, CORPUS } from '../lib/works.mjs';

const run = promisify(execFile);
const args = process.argv.slice(2);
const jobsFlag = args.indexOf('--jobs');
const JOBS = jobsFlag >= 0 ? Number(args[jobsFlag + 1]) : Math.max(1, availableParallelism() - 2);
const only = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--jobs');

const pageFile = (dir, p) => join(dir, `p${String(p).padStart(4, '0')}.txt`);

async function pageCount(pdf) {
  const { stdout } = await run('pdfinfo', [pdf]);
  return Number(/^Pages:\s+(\d+)/m.exec(stdout)[1]);
}

async function textPage(pdf, p) {
  const { stdout } = await run('pdftotext', ['-f', String(p), '-l', String(p), '-layout', pdf, '-'], {
    maxBuffer: 1 << 26,
  });
  return stdout;
}

async function ocrPage(pdf, p) {
  // pdftoppm writes the PNG to stdout, tesseract reads stdin: nothing touches disk but the result.
  const { stdout } = await run(
    'sh',
    ['-c', `pdftoppm -f ${p} -l ${p} -r 300 -gray -png "$0" | tesseract stdin stdout --psm 3 2>/dev/null`, pdf],
    { maxBuffer: 1 << 26, env: { ...process.env, OMP_THREAD_LIMIT: '1' } },
  );
  return stdout;
}

async function pool(items, n, fn) {
  let next = 0;
  const workers = Array.from({ length: n }, async () => {
    while (next < items.length) await fn(items[next++]);
  });
  await Promise.all(workers);
}

const works = loadWorks().filter((w) => only.length === 0 || only.includes(w.id));
for (const w of works) {
  const pdf = join(RESOURCES, w.file);
  if (!existsSync(pdf)) {
    console.warn(`skip ${w.id}: ${w.file} not found`);
    continue;
  }
  const dir = join(CORPUS, w.id);
  mkdirSync(dir, { recursive: true });
  const n = await pageCount(pdf);
  const todo = Array.from({ length: n }, (_, i) => i + 1).filter((p) => !existsSync(pageFile(dir, p)));
  const extract = w.text === 'ocr' ? ocrPage : textPage;
  const t0 = Date.now();
  let done = 0;
  await pool(todo, w.text === 'ocr' ? JOBS : 4, async (p) => {
    writeFileSync(pageFile(dir, p), await extract(pdf, p));
    if (++done % 100 === 0) console.log(`  ${w.id}: ${done}/${todo.length}`);
  });
  console.log(`${w.id}: ${n} pages (${todo.length} new, ${w.text}) in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
}
