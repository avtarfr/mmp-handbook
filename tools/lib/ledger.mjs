// The verification ledger records, per unit, which exact content (by SHA-256) passed the automated
// checks and the two independent verifiers. A unit is published only when its current hash has a
// complete passing record, so any edit sends it back through the gate.

import { readFileSync, writeFileSync, existsSync, mkdirSync, rmdirSync, statSync, renameSync } from 'node:fs';
import { dirname } from 'node:path';

export const VERIFIERS = ['A', 'B'];
export const MAX_ROUNDS = 3;

export function readLedger(file) {
  return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : {};
}

export function writeLedger(file, ledger) {
  mkdirSync(dirname(file), { recursive: true });
  const sorted = Object.fromEntries(Object.entries(ledger).sort(([a], [b]) => a.localeCompare(b)));
  const tmp = `${file}.${process.pid}.tmp`;
  writeFileSync(tmp, JSON.stringify(sorted, null, 2) + '\n');
  renameSync(tmp, file);
}

// Read-modify-write the ledger under an exclusive lock, so reviews recorded at the same time
// cannot overwrite each other's entries. fn receives the freshly read ledger and mutates it.
export function updateLedger(file, fn) {
  mkdirSync(dirname(file), { recursive: true });
  const lock = `${file}.lock`;
  const deadline = Date.now() + 30000;
  for (;;) {
    try {
      mkdirSync(lock);
      break;
    } catch (e) {
      if (e.code !== 'EEXIST') throw e;
      // A lock older than a minute was left by a crashed process.
      if (Date.now() - statSync(lock, { throwIfNoEntry: false })?.mtimeMs > 60000) rmdirSync(lock, { recursive: true });
      if (Date.now() > deadline) throw new Error(`timed out waiting for ${lock}`);
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
    }
  }
  try {
    const ledger = readLedger(file);
    const result = fn(ledger);
    writeLedger(file, ledger);
    return result;
  } finally {
    rmdirSync(lock);
  }
}

// Entry for this exact content, starting a fresh record if the content changed.
function current(ledger, unit) {
  const prev = ledger[unit.id];
  if (prev?.hash === unit.hash) return prev;
  // A hold survives edits: only the user clears it (tools/ledger.mjs release <id>).
  const entry = {
    hash: unit.hash,
    checks: null,
    verifiers: {},
    // Which verifiers this unit needs. Chapters that are mostly definitions and tables are reviewed
    // by B alone, so requiring A as well would hold them unpublishable for ever.
    requires: prev?.requires ?? [...VERIFIERS],
    rounds: prev?.rounds ?? 0,
    hold: prev?.hold ?? false,
  };
  ledger[unit.id] = entry;
  return entry;
}

export function recordChecks(ledger, unit, pass, failures = []) {
  const e = current(ledger, unit);
  e.checks = { pass, at: new Date().toISOString(), ...(failures.length ? { failures } : {}) };
}

// Declare which verifiers must pass this unit (default: all of them).
export function setRequired(ledger, unit, verifiers) {
  const bad = verifiers.filter((v) => !VERIFIERS.includes(v));
  if (bad.length || !verifiers.length) throw new Error(`verifiers must be a non-empty subset of ${VERIFIERS.join(', ')}`);
  current(ledger, unit).requires = [...verifiers];
}

const requiredOf = (entry) => entry.requires ?? VERIFIERS;

export function recordVerdict(ledger, unit, verifier, verdict, report) {
  if (!VERIFIERS.includes(verifier)) throw new Error(`verifier must be one of ${VERIFIERS.join(', ')}`);
  if (!['pass', 'fail'].includes(verdict)) throw new Error('verdict must be pass or fail');
  const e = current(ledger, unit);
  e.verifiers[verifier] = { verdict, at: new Date().toISOString(), report };
  const req = requiredOf(e);
  const done = req.every((v) => e.verifiers[v]);
  if (done && req.some((v) => e.verifiers[v].verdict === 'fail')) {
    e.rounds += 1;
    if (e.rounds >= MAX_ROUNDS) e.hold = true;
  }
  if (done && req.every((v) => e.verifiers[v].verdict === 'pass')) e.rounds = 0;
}

export function releaseHold(ledger, unit) {
  const e = ledger[unit.id];
  if (e) Object.assign(e, { hold: false, rounds: 0 });
}

// draft | verified | needs-human
export function unitStatus(ledger, unit) {
  const e = ledger[unit.id];
  if (e?.hold) return 'needs-human';
  if (!e || e.hash !== unit.hash) return 'draft';
  const verified = e.checks?.pass && requiredOf(e).every((v) => e.verifiers[v]?.verdict === 'pass');
  return verified ? 'verified' : 'draft';
}
