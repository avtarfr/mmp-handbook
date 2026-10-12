// Sorted shingle index over the whole corpus: for word-n-grams of a fixed n, every (hash, work, page)
// occurrence, sorted by hash for binary search. Cached in .cache/overlap/ and rebuilt automatically
// when the corpus changes. Holds hashes and page numbers only, no text.

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { loadWorks, CORPUS, ROOT } from './works.mjs';
import { tokens, shingleHash } from './text.mjs';

const DIR = join(ROOT, '.cache', 'overlap');

function corpusState(works) {
  return works.map((w) => {
    const dir = join(CORPUS, w.id);
    return [w.id, existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.txt')).length : 0];
  });
}

function build(works, n) {
  const keys = [];
  const locs = [];
  works.forEach((w, wi) => {
    const dir = join(CORPUS, w.id);
    if (!existsSync(dir)) return;
    const files = readdirSync(dir).filter((f) => /^p\d{4}\.txt$/.test(f)).sort();
    const pageTokens = files.map((f) => tokens(readFileSync(join(dir, f), 'utf8')));
    pageTokens.forEach((toks, pi) => {
      // Extend into the next page so shingles spanning a page break are indexed too.
      const words = toks.concat((pageTokens[pi + 1] || []).slice(0, n - 1));
      const page = Number(files[pi].slice(1, 5));
      for (let i = 0; i + n <= words.length; i++) {
        if (i >= toks.length) break;
        keys.push(shingleHash(words, i, n));
        locs.push((wi << 14) | page);
      }
    });
  });
  const order = Uint32Array.from({ length: keys.length }, (_, i) => i).sort((a, b) => keys[a] - keys[b]);
  return {
    keys: Float64Array.from(order, (i) => keys[i]),
    locs: Uint32Array.from(order, (i) => locs[i]),
  };
}

export function loadIndex(n, { log = () => {} } = {}) {
  const works = loadWorks();
  const state = JSON.stringify(corpusState(works));
  mkdirSync(DIR, { recursive: true });
  const meta = join(DIR, `n${n}.json`);
  const bin = join(DIR, `n${n}.bin`);
  let index;
  if (existsSync(meta) && existsSync(bin) && readFileSync(meta, 'utf8') === state) {
    const buf = readFileSync(bin);
    const count = buf.readUInt32LE(0);
    const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    index = { keys: new Float64Array(ab, 8, count), locs: new Uint32Array(ab, 8 + count * 8, count) };
  } else {
    log(`building ${n}-gram corpus index...`);
    index = build(works, n);
    const head = Buffer.alloc(8);
    head.writeUInt32LE(index.keys.length, 0);
    writeFileSync(bin, Buffer.concat([head, Buffer.from(index.keys.buffer), Buffer.from(index.locs.buffer)]));
    writeFileSync(meta, state);
  }
  return {
    n,
    works,
    size: index.keys.length,
    // All occurrences of a shingle hash: [{work, page}] (page = PDF page).
    lookup(key) {
      const { keys, locs } = index;
      let lo = 0;
      let hi = keys.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (keys[mid] < key) lo = mid + 1;
        else hi = mid;
      }
      const out = [];
      for (let i = lo; i < keys.length && keys[i] === key; i++) out.push({ work: works[locs[i] >>> 14].id, page: locs[i] & 0x3fff });
      return out;
    },
  };
}
