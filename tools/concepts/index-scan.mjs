// Build a concept inventory from the books' own back-of-book indexes.
//
//   node tools/concepts/index-scan.mjs [--work <id>] [--sample <id>]
//
// Each index entry ("Bessel functions, 643-680") names a concept and says how many pages that book
// devotes to it. Merging the indexes of all the books gives: every concept the library covers, and,
// for each, which book treats it in most depth. Output: .cache/concepts/index.json
//
// Index pages are set in two (sometimes three) columns. pdftotext -layout keeps the columns side by
// side, so a page must be cut at its gutters before any line can be read. The gutter is found as a
// character position that is blank on nearly every line of the page.
//
// This reads only extracted text and writes only headwords and page counts, never book prose.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, CORPUS, loadWorks } from '../lib/works.mjs';
import { loadOffsets, pdfToPrinted } from '../lib/pages.mjs';

const OUT = join(ROOT, '.cache', 'concepts');
const PAGE_REF = String.raw`\d{1,4}(?:\s*[-–—]\s*\d{1,4})?(?:ff?\.?|n|f)?`;
const PAGES_ONLY = new RegExp(`^${PAGE_REF}(?:\\s*,\\s*${PAGE_REF})*\\.?$`);

// Split "Bessel functions, 643-680, 701" (or "Lebesgue measure 35, 144" with no comma) into the
// headword and its page list, at the EARLIEST point whose remainder is all page numbers, so that
// numbers never leak into the headword.
function splitEntry(line) {
  for (const m of line.matchAll(/[,\s]\s*(?=\d)/g)) {
    const i = m.index + m[0].length;
    const head = line.slice(0, i).replace(/[,\s]+$/, '').trim();
    const tail = line.slice(i).trim();
    if (head && /[A-Za-z]/.test(head) && PAGES_ONLY.test(tail)) return { head, tail };
  }
  return null;
}
const CROSS_REF = /\bsee\s+(also\s+)?/i;

// "643-680, 701" -> 39 pages referenced.
function countPages(spec) {
  let n = 0;
  for (const part of spec.split(',')) {
    const m = /^(\d{1,4})(?:\s*[-–—]\s*(\d{1,4}))?/.exec(part.trim());
    if (!m) continue;
    const a = Number(m[1]);
    const b = m[2] ? Number(m[2]) : a;
    n += b >= a && b - a < 120 ? b - a + 1 : 1;
  }
  return n;
}

// Character positions that are blank on (nearly) every non-empty line: the column gutters.
function columnRanges(lines) {
  const width = Math.max(...lines.map((l) => l.length), 0);
  if (width < 40) return [[0, width]];
  const filled = new Int32Array(width + 1);
  let rows = 0;
  for (const l of lines) {
    if (!l.trim()) continue;
    rows++;
    for (let i = 0; i < l.length; i++) if (l[i] !== ' ') filled[i]++;
  }
  if (rows < 6) return [[0, width]];
  // A gutter is a run of >=3 columns that are blank in >=97% of rows, away from the margins.
  const blank = (i) => filled[i] <= rows * 0.03;
  const cuts = [];
  for (let i = 8; i < width - 8; i++) {
    if (!blank(i)) continue;
    let j = i;
    while (j < width && blank(j)) j++;
    if (j - i >= 3) cuts.push([i, j]);
    i = j;
  }
  const ranges = [];
  let start = 0;
  for (const [a, b] of cuts) {
    if (a - start > 12) ranges.push([start, a]);
    start = b;
  }
  if (width - start > 12) ranges.push([start, width]);
  return ranges.length ? ranges : [[0, width]];
}

// Read one column of an index into entries, following wrapped lines and indented sub-entries.
function parseColumn(lines) {
  const entries = [];
  const indentOf = (s) => s.length - s.trimStart().length;
  const baseIndent = Math.min(...lines.filter((l) => l.trim()).map(indentOf), 99);
  let parent = null;
  let buf = '';
  let bufIndent = baseIndent;

  const record = (line, indent) => {
    if (!line || !/[A-Za-z]/.test(line)) return;
    if (CROSS_REF.test(line) && !/\d/.test(line.split(CROSS_REF)[0] || '')) return; // pure cross-reference
    const split = splitEntry(line);
    if (!split) {
      if (line.length <= 60 && !/\d\s*$/.test(line)) parent = line.replace(/:$/, '').trim();
      return;
    }
    const { head, tail } = split;
    if (head.length > 70) return;
    const sub = indent > baseIndent + 1 && parent;
    entries.push({ term: sub ? `${parent}: ${head}` : head, headword: sub ? parent : head, pages: countPages(tail) });
    if (!sub) parent = head;
  };

  const flush = () => {
    const line = buf.trim();
    buf = '';
    // Some indexes put several sub-entries on one line, separated by semicolons.
    const parts = line.split(';').map((p) => p.trim()).filter(Boolean);
    parts.forEach((part, i) => record(part, i === 0 ? bufIndent : baseIndent + 2));
  };

  for (const raw of lines) {
    if (!raw.trim()) continue;
    const indent = indentOf(raw);
    // A line that is only page numbers continues the entry above; otherwise it starts a new one.
    if (buf && !PAGES_ONLY.test(raw.trim()) && !/^[a-z(]/.test(raw.trim())) flush();
    if (!buf) bufIndent = indent;
    buf += (buf ? ' ' : '') + raw.trim();
    if (/[,;]$/.test(raw.trim())) continue; // entry continues on the next line
    if (PAGES_ONLY.test(raw.trim()) || /\d\s*$/.test(raw.trim())) flush();
  }
  flush();
  return entries;
}

// Index pages are dense with "words, page numbers" lines.
function indexScore(text) {
  const lines = text.split('\n').filter((l) => l.trim());
  if (lines.length < 8) return 0;
  let hits = 0;
  for (const line of lines) if (/[A-Za-z].*[,\s]\s*\d{1,4}(\s*[-–—]\s*\d{1,4})?[;,]?\s*$/.test(line.trimEnd())) hits++;
  return hits / lines.length;
}

export function scanWork(work, { sample = false } = {}) {
  const dir = join(CORPUS, work.id);
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir).filter((f) => /^p\d{4}\.txt$/.test(f)).sort();
  const texts = files.map((f) => readFileSync(join(dir, f), 'utf8'));
  const from = Math.floor(files.length * 0.6);
  // Find the longest run of index-like pages near the end of the book.
  const ok = texts.map((t, i) => i >= from && indexScore(t) >= 0.45);
  let best = { start: -1, len: 0 };
  let run = -1;
  for (let i = 0; i <= ok.length; i++) {
    if (ok[i]) {
      if (run < 0) run = i;
    } else if (run >= 0) {
      if (i - run > best.len) best = { start: run, len: i - run };
      run = -1;
    }
  }
  if (best.len < 2) return { work: work.id, pages: 0, entries: [] };
  const entries = [];
  // The running header ("Index   1199") spans the columns; left in place it is cut into fragments
  // that read as entries ("ndex equation types").
  const HEADER = /^\s*(\d{1,4}\s+)?(index|INDEX)\b.*$|^\s*.*\b(index|INDEX)\s+\d{1,4}\s*$|^\s*\d{1,4}\s*$/;
  for (let i = best.start; i < best.start + best.len; i++) {
    const lines = texts[i].split('\n').filter((l) => !HEADER.test(l));
    for (const [a, b] of columnRanges(lines)) entries.push(...parseColumn(lines.map((l) => l.slice(a, b).trimEnd())));
    if (sample && i === best.start + 1) {
      console.error(`--- ${work.id} sample page (columns: ${JSON.stringify(columnRanges(lines))})`);
      console.error(entries.slice(-12).map((e) => `    ${String(e.pages).padStart(3)}p  ${e.term}`).join('\n'));
    }
  }
  const offsets = loadOffsets();
  const printed = (i) => pdfToPrinted(offsets, work.id, i) ?? i;
  return { work: work.id, indexPages: `${printed(best.start + 1)}-${printed(best.start + best.len)}`, pages: best.len, entries };
}

// Index entries that are not concepts: cross-references, people, places, fragments.
const NOT_CONCEPT = /^(see\b|in:|of:|and\b|for\b|exercise|problem set|appendix|notation|preface|bibliograph|reference|acknowledg|chapter|section\b|figure|table of)/;
export function isConcept(key) {
  if (key.length < 4 || key.length > 60) return false;
  if (/^\d/.test(key) || NOT_CONCEPT.test(key)) return false;
  if (!/[a-z]{3}/.test(key)) return false;
  // A personal name cited in the text ("hadamard, j."), not a concept.
  if (/,\s*[a-z]\.?$/.test(key)) return false;
  return true;
}

const STOP = /^(the|a|an|of|for|in|on|and|to)\b/;
export function normalizeTerm(t) {
  let s = t
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[-–—]/g, ' ')
    .replace(/\(.*?\)/g, ' ')
    .replace(/[,.;:]+\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
  while (STOP.test(s)) s = s.replace(STOP, '').trim();
  s = s.replace(/\b(function|polynomial|equation|transform|matrix|matrice|space|operator|series|theorem|number|vector|group|integral|variable|coordinate|system|method|condition|point|value|set|form|field|process|distribution|expansion|problem|solution|property|relation|product|derivative|identity|inequality|mapping|map|rule|law|model|state|mode)s\b/g, '$1');
  s = s
    .replace(/\bmatrice\b/g, 'matrix')
    .replace(/\bindice\b/g, 'index')
    .replace(/'s\b/g, '') // bessel's equation -> bessel equation
    .replace(/\bdiﬀerential\b/g, 'differential');
  return s.replace(/\s+/g, ' ').trim();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const sample = args.includes('--sample') ? args[args.indexOf('--sample') + 1] : null;
  const only = args.includes('--work') ? args[args.indexOf('--work') + 1] : sample;
  const works = loadWorks().filter((w) => !only || w.id === only);
  const byConcept = new Map();
  const perWork = [];
  for (const w of works) {
    const r = scanWork(w, { sample: sample === w.id });
    if (!r) continue;
    perWork.push({ work: w.id, indexPages: r.indexPages, pages: r.pages, entries: r.entries.length });
    console.error(`${w.id.padEnd(26)} index pp. ${String(r.indexPages).padEnd(10)} ${String(r.entries.length).padStart(5)} entries`);
    // Aggregate by HEADWORD: a sub-entry's pages count towards its parent concept, which is what
    // makes the same concept comparable across books with different sub-entry habits.
    for (const e of r.entries) {
      const key = normalizeTerm(e.headword);
      if (!isConcept(key)) continue;
      if (!byConcept.has(key)) byConcept.set(key, { term: key, display: e.headword, works: {}, subs: new Set() });
      const c = byConcept.get(key);
      c.works[w.id] = (c.works[w.id] || 0) + e.pages;
      if (e.term !== e.headword) c.subs.add(normalizeTerm(e.term.slice(e.headword.length + 2)));
    }
  }
  if (sample) process.exit(0);
  const concepts = [...byConcept.values()]
    .map((c) => {
      const ranked = Object.entries(c.works).sort((a, b) => b[1] - a[1]);
      return {
        term: c.term,
        display: c.display,
        books: ranked.length,
        pages: ranked.reduce((a, [, n]) => a + n, 0),
        best: ranked[0][0],
        bestPages: ranked[0][1],
        works: Object.fromEntries(ranked),
        subs: [...c.subs].filter(Boolean).slice(0, 40),
      };
    })
    .sort((a, b) => b.pages - a.pages);
  mkdirSync(OUT, { recursive: true });
  writeFileSync(join(OUT, 'index.json'), JSON.stringify({ perWork, concepts }, null, 1));
  console.error(`\n${concepts.length} distinct concepts from ${perWork.length} indexes -> .cache/concepts/index.json`);
  console.error(`in 3+ books: ${concepts.filter((c) => c.books >= 3).length}; in 2: ${concepts.filter((c) => c.books === 2).length}; in 1: ${concepts.filter((c) => c.books === 1).length}`);
}
