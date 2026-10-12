// Print the extracted text of book pages, addressed by PRINTED page number (as cited in units).
// For drafting and verification only; this text must never be pasted into a unit or a report.
//
//   node tools/corpus/pages.mjs <work-id> <pages>        e.g.  stein-shakarchi-2003 79-80
//   node tools/corpus/pages.mjs <work-id> --find "<text>" list printed pages mentioning the text

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { CORPUS, worksById } from '../lib/works.mjs';
import { loadOffsets, printedToPdf, pdfToPrinted, expandPages } from '../lib/pages.mjs';

const [work, ...rest] = process.argv.slice(2);
const works = worksById();
if (!work || !works.has(work)) {
  console.error(`usage: pages.mjs <work-id> <pages> | --find "<text>"\nworks: ${[...works.keys()].join(', ')}`);
  process.exit(2);
}
const offsets = loadOffsets();
const dir = join(CORPUS, work);
const pdfFile = (p) => join(dir, `p${String(p).padStart(4, '0')}.txt`);

if (rest[0] === '--find') {
  const norm = (t) => t.toLowerCase().replace(/[’‘]/g, "'").replace(/-\s*\n\s*/g, '').replace(/\s+/g, ' ');
  const needle = norm(rest.slice(1).join(' '));
  const hits = readdirSync(dir)
    .filter((f) => /^p\d{4}\.txt$/.test(f))
    .sort()
    .filter((f) => norm(readFileSync(join(dir, f), 'utf8')).includes(needle))
    .map((f) => {
      const pdf = Number(f.slice(1, 5));
      const printed = pdfToPrinted(offsets, work, pdf);
      return printed ? `p. ${printed}` : `pdf ${pdf} (unnumbered)`;
    });
  console.log(hits.length ? hits.join('\n') : 'no matches');
} else {
  for (const printed of expandPages(rest.join(','))) {
    const pdf = printedToPdf(offsets, work, printed);
    console.log(`\n===== ${works.get(work).short}, printed p. ${printed}${pdf ? ` (pdf ${pdf})` : ' (not found)'} =====`);
    if (pdf && existsSync(pdfFile(pdf))) console.log(readFileSync(pdfFile(pdf), 'utf8'));
  }
}
