// Citation sanity check (warnings only): every source entry with `pages` should point at pages that
// exist in the held edition and that mention at least one key term of the unit. Catches typos in
// page numbers and citations to the wrong book; it cannot prove a citation is apt.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CORPUS } from '../lib/works.mjs';
import { tokens } from '../lib/text.mjs';
import { loadOffsets, printedToPdf, expandPages } from '../lib/pages.mjs';
import { blockText } from './overlap.mjs';

const STOP = new Set(
  'about above after again against among because before being below between both could during each every from further having into itself might other ourselves over same should some such than that their them then there these they this those through under until very what when where which while whom with would your theorem lemma proof example method definition formula identity equation function functions'.split(' '),
);

export function keyTerms(unit) {
  const fromTitle = tokens(unit.title).filter((w) => w.length >= 5 && !STOP.has(w));
  if (fromTitle.length) return [...new Set(fromTitle.map((w) => w.slice(0, 6)))];
  const body = tokens(unit.blocks.map((b) => blockText(b.node)).join(' ')).filter((w) => w.length >= 7 && !STOP.has(w));
  return [...new Set(body.map((w) => w.slice(0, 6)))].slice(0, 5);
}

export function checkCitations(units) {
  const offsets = loadOffsets();
  const warnings = [];
  for (const u of units) {
    const terms = keyTerms(u);
    for (const s of u.sources) {
      if (!s.pages) {
        warnings.push(`${u.id}: source ${s.work} has no "pages", so it cannot be checked`);
        continue;
      }
      const texts = [];
      for (const printed of expandPages(s.pages)) {
        const pdf = printedToPdf(offsets, s.work, printed);
        if (pdf === null) {
          warnings.push(`${u.id}: ${s.work} p. ${printed} is outside the held edition's numbered pages`);
          continue;
        }
        for (const p of [pdf - 1, pdf, pdf + 1]) {
          const f = join(CORPUS, s.work, `p${String(p).padStart(4, '0')}.txt`);
          if (existsSync(f)) texts.push(readFileSync(f, 'utf8'));
        }
      }
      if (!texts.length) continue;
      const words = new Set(tokens(texts.join('\n')).map((w) => w.slice(0, 6)));
      if (terms.length && !terms.some((t) => words.has(t))) {
        warnings.push(`${u.id}: ${s.work} pp. ${s.pages} never mention ${terms.join('/')}; check the page numbers`);
      }
    }
  }
  return warnings;
}
