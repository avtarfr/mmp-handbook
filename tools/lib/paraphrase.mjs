// Close-paraphrase detection by local sequence alignment.
//
// Exact n-gram matching misses text whose words were swapped one at a time while its order was
// kept. Here each block is aligned (Smith-Waterman: +8 match, -4 mismatch, -4 to skip a block word,
// -B_GAP to skip a book word) against candidate
// book pages; the best alignment score divided by the best possible (8 x block length) measures how
// much of the block follows a book passage word by word, in order. Skipping book words is cheap
// (books interleave inline math that units keep in $...$), skipping our own words is not.
//
// Candidate pages: the pages the unit cites, plus the pages sharing the most rare words with the block.

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { loadWorks, CORPUS } from './works.mjs';
import { tokens } from './text.mjs';

const MAX_DF = 300; // words on more pages than this are too common to locate a passage
const CANDIDATES = 6;
export let B_GAP = Number(process.env.MMP_B_GAP || 1);

let state = null;

function load() {
  if (state) return state;
  const works = loadWorks();
  const pages = []; // [{work, page}]
  const postings = new Map(); // word -> page indices
  for (const w of works) {
    const dir = join(CORPUS, w.id);
    if (!existsSync(dir)) continue;
    for (const f of readdirSync(dir).filter((x) => /^p\d{4}\.txt$/.test(x)).sort()) {
      const pi = pages.length;
      pages.push({ work: w.id, page: Number(f.slice(1, 5)) });
      for (const word of new Set(tokens(readFileSync(join(dir, f), 'utf8')))) {
        if (word.length < 4) continue;
        const list = postings.get(word);
        if (!list) postings.set(word, [pi]);
        else if (list.length <= MAX_DF) list.push(pi);
      }
    }
  }
  const pageIndex = new Map(pages.map((p, i) => [`${p.work}:${p.page}`, i]));
  state = { pages, postings, pageIndex, tokenCache: new Map() };
  return state;
}

function pageTokens(work, page) {
  const { tokenCache } = load();
  const key = `${work}:${page}`;
  if (!tokenCache.has(key)) {
    const f = join(CORPUS, work, `p${String(page).padStart(4, '0')}.txt`);
    tokenCache.set(key, existsSync(f) ? tokens(readFileSync(f, 'utf8')) : []);
  }
  return tokenCache.get(key);
}

// Best local alignment score of a against b (token arrays).
export function alignScore(a, b) {
  if (!a.length || !b.length) return 0;
  const ids = new Map();
  const id = (w) => ids.get(w) ?? (ids.set(w, ids.size), ids.size - 1);
  const A = Int32Array.from(a, id);
  const B = Int32Array.from(b, id);
  let prev = new Int32Array(B.length + 1);
  let cur = new Int32Array(B.length + 1);
  let best = 0;
  for (let i = 1; i <= A.length; i++) {
    cur[0] = 0;
    const ai = A[i - 1];
    for (let j = 1; j <= B.length; j++) {
      const diag = prev[j - 1] + (ai === B[j - 1] ? 8 : -4);
      const v = Math.max(0, diag, prev[j] - 4, cur[j - 1] - B_GAP);
      cur[j] = v;
      if (v > best) best = v;
    }
    [prev, cur] = [cur, prev];
  }
  return best;
}

// words: the block's tokens. cited: [{work, pdfPage}] pages the unit cites.
// Returns { score, work, page } for the closest passage found (page is a PDF page).
export function closestPassage(words, cited = []) {
  const { pages, postings, pageIndex } = load();
  const scores = new Map();
  for (const w of new Set(words)) {
    const list = postings.get(w);
    if (!list || list.length > MAX_DF) continue;
    const weight = Math.log(pages.length / list.length);
    for (const pi of list) scores.set(pi, (scores.get(pi) || 0) + weight);
  }
  const ranked = [...scores].sort((x, y) => y[1] - x[1]).slice(0, CANDIDATES).map(([pi]) => pages[pi]);
  const candidates = [...ranked, ...cited.map((c) => ({ work: c.work, page: c.pdfPage }))];
  let best = { score: 0, work: null, page: null };
  const seen = new Set();
  for (const { work, page } of candidates) {
    const key = `${work}:${page}`;
    if (seen.has(key) || !pageIndex.has(key)) continue;
    seen.add(key);
    // Align against the page with its neighbours, so passages crossing a page break are found.
    const window = [...pageTokens(work, page - 1), ...pageTokens(work, page), ...pageTokens(work, page + 1)];
    const score = alignScore(words, window) / (8 * words.length);
    if (score > best.score) best = { score, work, page };
  }
  return best;
}
