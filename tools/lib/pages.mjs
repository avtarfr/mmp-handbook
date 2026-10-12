// Printed page <-> PDF page conversion using bibliography/page-offsets.yaml.

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { ROOT } from './works.mjs';

export function loadOffsets() {
  const f = join(ROOT, 'bibliography', 'page-offsets.yaml');
  return existsSync(f) ? parse(readFileSync(f, 'utf8')) || {} : {};
}

export function pdfToPrinted(offsets, work, pdf) {
  const s = (offsets[work] || []).find((s) => pdf >= s.from && pdf <= s.to);
  const printed = s ? pdf - s.offset : null;
  return printed && printed > 0 ? printed : null;
}

export function printedToPdf(offsets, work, printed) {
  const segs = offsets[work] || [];
  for (const s of segs) {
    const pdf = printed + s.offset;
    if (pdf >= s.from && pdf <= s.to) return pdf;
  }
  return null;
}

// "79-80, 85" -> [79, 80, 85]
export function expandPages(spec) {
  const out = [];
  for (const part of String(spec).split(',')) {
    const [a, b] = part.trim().split('-').map(Number);
    for (let p = a; p <= (b || a); p++) out.push(p);
  }
  return out;
}

export const pageLabel = (offsets, work, pdf) => {
  const printed = pdfToPrinted(offsets, work, pdf);
  return printed ? `p. ${printed}` : `pdf p. ${pdf}`;
};
