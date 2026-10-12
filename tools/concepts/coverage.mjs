// Compare the concept inventory from the books' indexes with the topic map.
//
//   node tools/concepts/coverage.mjs [--min-books 2] [--top 120]
//
// A concept counts as covered when its words appear in the title, scope or keywords of some unit of
// content/map.yaml. What is left is what the library treats but the map does not yet mention: the
// candidate gaps for review. Writes .cache/concepts/gaps.json.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT } from '../lib/works.mjs';
import { contentConfig, loadMap, mapPlacements } from '../lib/units.mjs';
import { normalizeTerm } from './index-scan.mjs';

const args = process.argv.slice(2);
const opt = (n, d) => (args.includes(n) ? Number(args[args.indexOf(n) + 1]) : d);
const MIN_BOOKS = opt('--min-books', 2);
const TOP = opt('--top', 120);

const { concepts } = JSON.parse(readFileSync(join(ROOT, '.cache', 'concepts', 'index.json'), 'utf8'));
const specs = [...mapPlacements(loadMap(contentConfig())).values()].map((p) => p.spec);

// Index the map by word, so a concept can be matched against the units that mention its words.
const GENERIC = new Set(
  'equation function theory problem method general form space point value set number system property relation problems analysis coefficient coefficients operator transform process principle condition conditions basic elementary'.split(' '),
);
const map = loadMap(contentConfig());
const unitWords = specs.map((s) => ({
  spec: s,
  words: new Set(normalizeTerm([s.title, s.scope, (s.keywords || []).join(' '), s.id.replace(/[.-]/g, ' ')].join(' ')).split(' ')),
}));
// Part and chapter titles count as coverage too: "calculus of variations" is a whole part, so no
// single unit mentions all of its words.
for (const part of map.parts || []) {
  unitWords.push({ spec: { id: `part:${part.id}` }, words: new Set(normalizeTerm(part.title).split(' ')) });
  for (const ch of part.chapters || []) {
    unitWords.push({ spec: { id: `chapter:${part.id}/${ch.id}` }, words: new Set(normalizeTerm(`${ch.title} ${ch.summary || ''}`).split(' ')) });
  }
}

function matchUnits(term) {
  const words = term.split(' ').filter((w) => w.length >= 3 && !GENERIC.has(w));
  if (!words.length) return [];
  // All the distinctive words, or most of them when there are several: "clebsch gordan
  // coefficients" should match the Clebsch-Gordan unit even though it never says "coefficients".
  const need = words.length >= 3 ? Math.ceil(words.length * 0.67) : words.length;
  return unitWords
    .map((u) => ({ id: u.spec.id, hits: words.filter((w) => u.words.has(w)).length }))
    .filter((u) => u.hits >= need)
    .map((u) => u.id);
}

const rows = concepts
  .filter((c) => c.books >= MIN_BOOKS && c.pages >= 8)
  .map((c) => ({ ...c, units: matchUnits(c.term) }));

const covered = rows.filter((r) => r.units.length);
const gaps = rows.filter((r) => !r.units.length).sort((a, b) => b.pages - a.pages);

writeFileSync(join(ROOT, '.cache', 'concepts', 'gaps.json'), JSON.stringify({ minBooks: MIN_BOOKS, covered: covered.length, gaps }, null, 1));
console.log(`concepts in >=${MIN_BOOKS} books with >=8 pages: ${rows.length}`);
console.log(`  covered by the map: ${covered.length}`);
console.log(`  not matched:        ${gaps.length}   -> .cache/concepts/gaps.json\n`);
console.log(`Top ${Math.min(TOP, gaps.length)} unmatched, by pages across books:`);
for (const g of gaps.slice(0, TOP)) {
  console.log(`  ${String(g.pages).padStart(4)}p ${String(g.books)}bk  ${g.term.padEnd(42)} best: ${g.best}`);
}
