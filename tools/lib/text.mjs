// Text normalisation shared by the corpus index and the unit side of the overlap check, so that
// the two token streams are comparable. Single letters are dropped on both sides: in books they are
// usually inline variables (f, x, n) that the units write as $math$, which the unit side strips.

const LIGATURES = { 'ﬀ': 'ff', 'ﬁ': 'fi', 'ﬂ': 'fl', 'ﬃ': 'ffi', 'ﬄ': 'ffl', 'ﬅ': 'st', 'ﬆ': 'st' };

export function tokens(text) {
  const t = text
    .replace(/[ﬀ-ﬆ]/g, (c) => LIGATURES[c] || c)
    .replace(/([A-Za-z])[-‐‑]\s*\n\s*([a-z])/g, '$1$2') // re-join words hyphenated across lines
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  return (t.match(/[a-z]+/g) || []).filter((w) => w.length > 1);
}

// 44-bit shingle hash from two independent 32-bit FNV-style hashes; exact as a JS number.
export function shingleHash(words, start, n) {
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = start; i < start + n; i++) {
    const w = words[i];
    for (let j = 0; j < w.length; j++) {
      const c = w.charCodeAt(j);
      h1 = Math.imul(h1 ^ c, 0x01000193);
      h2 = Math.imul(h2 ^ c, 0x5bd1e995) ^ (h2 >>> 15);
    }
    h1 = Math.imul(h1 ^ 32, 0x01000193);
    h2 = Math.imul(h2 ^ 32, 0x5bd1e995) ^ (h2 >>> 15);
  }
  return (h1 >>> 0) * 4096 + ((h2 >>> 0) & 0xfff);
}
