// The "flag it and set it aside" log: things a reviewer believes are wrong or imprecise in a
// published source. These never block publication -- the cited books are authoritative; they are
// reviewed as a separate job.
//
//   node tools/discrepancy.mjs add <unit-id> <work-id> <locator> <note>
//   node tools/discrepancy.mjs list

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { ROOT, worksById } from './lib/works.mjs';

const FILE = join(ROOT, 'verification', 'discrepancies.md');
const [cmd, ...rest] = process.argv.slice(2);

if (cmd === 'add') {
  const [unit, work, locator, ...note] = rest;
  if (!unit || !work || !locator || !note.length) {
    console.error('usage: discrepancy.mjs add <unit-id> <work-id> <locator> <note...>');
    process.exit(2);
  }
  if (!worksById().has(work)) {
    console.error(`unknown work ${work}`);
    process.exit(2);
  }
  mkdirSync(dirname(FILE), { recursive: true });
  if (!existsSync(FILE)) {
    writeFileSync(FILE, '# Source discrepancies\n\nPossible errors or imprecisions in the cited books, found while reviewing. These do **not** block\npublication: the handbook follows its sources. Each entry is to\nbe checked on its own, against the book itself and any published errata.\n\n| Unit | Work | Where | Note |\n|---|---|---|---|\n');
  }
  const clean = (s) => String(s).replace(/\|/g, '\\|').replace(/\n+/g, ' ').trim();
  writeFileSync(FILE, readFileSync(FILE, 'utf8') + `| ${clean(unit)} | ${clean(work)} | ${clean(locator)} | ${clean(note.join(' '))} |\n`);
  console.log(`recorded against ${work} ${locator}`);
} else if (cmd === 'list') {
  console.log(existsSync(FILE) ? readFileSync(FILE, 'utf8') : 'no discrepancies recorded');
} else {
  console.error('usage: discrepancy.mjs add <unit-id> <work-id> <locator> <note...> | list');
  process.exit(2);
}
