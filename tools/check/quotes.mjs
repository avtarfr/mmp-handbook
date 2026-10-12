// Inline quotations: the rule that `docs/COPYRIGHT_POLICY.md` states in prose, enforced.
//
// The policy allows a short quotation inside an ordinary block, in quotation marks and cited to the
// page, where an author's own phrasing is the point; anything longer belongs in a `:::quote` block.
// Until now only the block form was enforced (`:::quote` <-> provenance=quoted in lib/units.mjs),
// so an inline quotation was governed by nothing but the author's judgement.
//
// The hard part is telling a quotation from a pair of quotation marks. Scare quotes, defined terms
// and quotations of our OWN words all look identical to a regex, and counting them produces a
// number with no meaning. So this check never fires on quotation marks alone: a span counts only
// when its words actually occur in one of the library's books, tested against the same 8-word
// shingle index the overlap check uses. That makes a hit evidence of real copied wording.
//
// Two things then fail a unit:
//   * an inline quotation longer than QUOTE_MAX_WORDS -- past that length it belongs in a
//     `:::quote` block, where the licence carve-out and the word cap already apply;
//   * a verbatim span inside an `original` block, which by definition claims no source. That is a
//     mislabelled provenance, and it is the case the gate most needs to catch.
//
//   node tools/check/quotes.mjs [--fixtures] [unit-id ...]

import { loadIndex } from '../lib/overlap-index.mjs';
import { tokens, shingleHash } from '../lib/text.mjs';
import { contentConfig, loadUnits } from '../lib/units.mjs';
import { blockText, RUN_N, QUOTE_MAX_WORDS } from './overlap.mjs';

// Straight and curly double quotes. Single quotes are left alone: they are apostrophes far more
// often than quotations, and the false-positive rate is not worth the handful they would add.
const QUOTED = /[“"]([^”"\n]{12,2000})[”"]/g;

export function quotedSpans(text) {
  const out = [];
  for (const m of text.matchAll(QUOTED)) {
    const words = tokens(m[1]);
    if (words.length >= RUN_N) out.push({ text: m[1].trim(), words });
  }
  return out;
}

// Does this span occur in a book? One shared 8-word shingle is enough: the span is already in
// quotation marks, so we are confirming a claim the text itself makes, not discovering one.
function inCorpus(words, idx8) {
  for (let i = 0; i + RUN_N <= words.length; i++) {
    const hits = idx8.lookup(shingleHash(words, i, RUN_N));
    if (hits && hits.length) return hits;
  }
  return null;
}

export function checkQuotes(units, { log = () => {} } = {}) {
  const idx8 = loadIndex(RUN_N, { log });
  const failures = new Map();
  const add = (id, msg) => failures.set(id, [...(failures.get(id) || []), msg]);

  for (const u of units) {
    for (const b of u.blocks || []) {
      if (b.name === 'quote') continue; // governed by the :::quote rules already
      for (const span of quotedSpans(blockText(b.node))) {
        if (!inCorpus(span.words, idx8)) continue;
        const short = span.text.length > 60 ? `${span.text.slice(0, 60)}…` : span.text;
        if (span.words.length > QUOTE_MAX_WORDS) {
          add(u.id, `:::${b.name} quotes ${span.words.length} words inline ("${short}"); over ${QUOTE_MAX_WORDS} belongs in a :::quote block`);
        }
        if (b.provenance === 'original') {
          add(u.id, `:::${b.name} is provenance=original but quotes a cited work verbatim ("${short}"); mark the block adapted or quoted and name the source`);
        }
      }
    }
  }
  return failures;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const fixtures = args.includes('--fixtures');
  const ids = args.filter((a) => !a.startsWith('--'));
  const { units } = loadUnits(contentConfig({ fixtures }));
  const chosen = ids.length ? ids.map((id) => units.get(id)).filter(Boolean) : [...units.values()];
  const out = checkQuotes(chosen, { log: (m) => console.error(m) });
  for (const [id, msgs] of out) for (const m of msgs) console.log(`FAIL ${id}: ${m}`);
  console.log(`${chosen.length - out.size}/${chosen.length} unit(s) pass`);
  process.exit(out.size ? 1 : 0);
}
