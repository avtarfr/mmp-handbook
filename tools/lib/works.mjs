import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const RESOURCES = join(ROOT, 'resources');
export const CORPUS = join(ROOT, '.cache', 'corpus');

export function loadWorks() {
  const works = parse(readFileSync(join(ROOT, 'bibliography', 'works.yaml'), 'utf8'));
  const ids = new Set();
  for (const w of works) {
    if (ids.has(w.id)) throw new Error(`works.yaml: duplicate id ${w.id}`);
    ids.add(w.id);
  }
  return works;
}

export function worksById() {
  return new Map(loadWorks().map((w) => [w.id, w]));
}
