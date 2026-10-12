// Verification ledger CLI.
//
//   node tools/ledger.mjs status [--fixtures]
//   node tools/ledger.mjs require <A|B|A,B> <unit-id...>           which verifiers a unit needs (default both)
//   node tools/ledger.mjs stale                                     held units whose current text now passes everything
//   node tools/ledger.mjs report-path <unit-id> <A|B> [--fixtures]   where a verifier writes its report
//   node tools/ledger.mjs verdict <unit-id> <A|B> [--fixtures]       record the verdict in that report
//   node tools/ledger.mjs import <unit-id> <A|B> <report-file>     file a review returned in a reply, then run verdict
//   node tools/ledger.mjs release <unit-id> [--fixtures]             (people only) clear a needs-human hold
//
// The report path contains the hash of the unit's current text, and the verdict is read from the
// report's own "VERDICT:" line. A verdict therefore always belongs to the exact text that was
// reviewed: if the unit changed after review, there is no report for its current text to record.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { ROOT } from './lib/works.mjs';
import { contentConfig, loadUnits } from './lib/units.mjs';
import { readLedger, updateLedger, recordVerdict, releaseHold, unitStatus, setRequired, VERIFIERS } from './lib/ledger.mjs';

const args = process.argv.slice(2);
const fixtures = args.includes('--fixtures');
const [cmd, ...rest] = args.filter((a) => a !== '--fixtures');
const config = contentConfig({ fixtures });
const { units } = loadUnits(config);
const ledger = readLedger(config.ledgerFile);
const die = (msg) => {
  console.error(msg);
  process.exit(2);
};
const unit = (id) => units.get(id) ?? die(`unknown unit ${id}`);
const verifierArg = (v) => (VERIFIERS.includes(v) ? v : die(`verifier must be one of ${VERIFIERS.join(', ')}`));
const reportsRoot = fixtures ? join(config.root, 'reports') : join(ROOT, 'verification', 'reports');
const reportPath = (u, v) => join(reportsRoot, u.id, `${u.hash.slice(0, 12)}-${v}.md`);

if (cmd === 'status') {
  for (const u of units.values()) {
    const e = ledger[u.id];
    const same = e?.hash === u.hash;
    const v = (k) => (same && e.verifiers?.[k] ? e.verifiers[k].verdict : '-');
    console.log(`${unitStatus(ledger, u).padEnd(12)} ${u.id.padEnd(40)} checks:${same && e.checks ? (e.checks.pass ? 'pass' : 'fail') : '-'} A:${v('A')} B:${v('B')} rounds:${e?.rounds ?? 0}`);
  }
} else if (cmd === 'report-path') {
  const u = unit(rest[0]);
  const p = reportPath(u, verifierArg(rest[1]));
  mkdirSync(join(p, '..'), { recursive: true });
  console.log(p);
} else if (cmd === 'verdict') {
  const u = unit(rest[0]);
  const v = verifierArg(rest[1]);
  const p = reportPath(u, v);
  if (!existsSync(p)) die(`no report at ${relative(ROOT, p)}: either it was not written, or the unit changed after it was reviewed`);
  const text = readFileSync(p, 'utf8');
  const m = /^VERDICT:\s*(PASS|FAIL)\s*$/m.exec(text);
  if (!m) die(`${relative(ROOT, p)} has no "VERDICT: PASS" or "VERDICT: FAIL" line`);
  if (!new RegExp(`^VERIFIER:\\s*${v}\\s*$`, 'm').test(text)) die(`${relative(ROOT, p)} is not marked "VERIFIER: ${v}"`);
  const verdict = m[1].toLowerCase();
  const status = updateLedger(config.ledgerFile, (l) => {
    recordVerdict(l, u, v, verdict, relative(ROOT, p));
    return unitStatus(l, u);
  });
  console.log(`${u.id}: verifier ${v} ${verdict}; status now ${status}`);
} else if (cmd === 'require') {
  // require <A|B|A,B> <unit-id...>: which verifiers must pass these units before they publish.
  const verifiers = (rest[0] || '').split(',').map((v) => v.trim().toUpperCase()).filter(Boolean);
  const ids = rest.slice(1);
  if (!verifiers.length || !ids.length) die('usage: ledger.mjs require <A|B|A,B> <unit-id...>');
  updateLedger(config.ledgerFile, (l) => {
    for (const id of ids) setRequired(l, unit(id), verifiers);
  });
  console.log(`${ids.length} unit(s) now require verifier(s) ${verifiers.join(' and ')}`);
} else if (cmd === 'stale') {
  // A hold that the gate has since satisfied: the unit's current text passed the checks and both
  // verifiers, but the hold was set by earlier failures and survives edits by design. Listing them
  // separately keeps a genuine disagreement ("a verifier still fails this") distinct from a leftover.
  for (const u of units.values()) {
    const e = ledger[u.id];
    if (!e?.hold || e.hash !== u.hash) continue;
    const clean = e.checks?.pass && (e.requires ?? VERIFIERS).every((v) => e.verifiers?.[v]?.verdict === 'pass');
    if (clean) console.log(`${u.id}`);
  }
} else if (cmd === 'import') {
  // import <unit-id> <A|B> <report-file>: file the text of a review that a verifier returned in its
  // reply instead of saving it. Only valid while the unit still has the text that was reviewed:
  // pass the caller must check that the unit file is unchanged since the review.
  const u = unit(rest[0]);
  const v = verifierArg(rest[1]);
  const src = rest[2] ?? die('usage: ledger.mjs import <unit-id> <A|B> <report-file>');
  const text = readFileSync(src, 'utf8');
  if (!/^VERDICT:\s*(PASS|FAIL)\s*$/m.test(text)) die('the report has no VERDICT line');
  const p = reportPath(u, v);
  mkdirSync(join(p, '..'), { recursive: true });
  writeFileSync(p, text);
  console.log(`filed ${relative(ROOT, p)}`);
} else if (cmd === 'release') {
  const u = unit(rest[0]);
  const status = updateLedger(config.ledgerFile, (l) => {
    releaseHold(l, u);
    return unitStatus(l, u);
  });
  console.log(`${u.id}: hold released; status now ${status}`);
} else {
  die('usage: ledger.mjs status | report-path <id> <A|B> | verdict <id> <A|B> | release <id>   [--fixtures]');
}
