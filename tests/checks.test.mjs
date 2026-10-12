// Tests for the safeguards: overlap detection, schema/provenance rules, the prerequisite graph and
// the verification ledger. Units copied from book text are generated in a temp dir at test time
// and never written into the repository.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { parseUnit, contentConfig, loadUnits, loadMap } from '../tools/lib/units.mjs';
import { checkOverlap } from '../tools/check/overlap.mjs';
import { checkGraph } from '../tools/check/graph.mjs';
import { recordChecks, recordVerdict, releaseHold, unitStatus, MAX_ROUNDS } from '../tools/lib/ledger.mjs';
import { CORPUS } from '../tools/lib/works.mjs';

const dir = mkdtempSync(join(tmpdir(), 'mmp-units-'));
let n = 0;
function unitFile(body, fm = {}) {
  const id = fm.id ?? `tmp.unit-${++n}`;
  const front = { title: 'Temporary unit', kind: 'theorem', provenance: 'original', sources: [], ...fm, id };
  const yaml = Object.entries(front)
    .map(([k, v]) => `${k}: ${typeof v === 'string' ? JSON.stringify(v) : JSON.stringify(v)}`)
    .join('\n');
  const file = join(dir, `${id}.md`);
  writeFileSync(file, `---\n${yaml}\n---\n\n${body}\n`);
  return file;
}
const parse = (body, fm) => parseUnit(unitFile(body, fm));

// A run of ordinary prose (no math-heavy lines) from a corpus page.
function proseFrom(work, minWords = 70) {
  const files = readdirSync(join(CORPUS, work)).sort();
  for (const f of files.slice(Math.floor(files.length / 3))) {
    const lines = readFileSync(join(CORPUS, work, f), 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.split(/\s+/).length >= 8 && /^[A-Za-z ,.;:'()-]+$/.test(l));
    const text = lines.join(' ');
    if (text.split(/\s+/).length >= minWords) return text.split(/\s+/).slice(0, minWords).join(' ');
  }
  throw new Error(`no prose found in ${work}`);
}

const overlapOf = (file) => checkOverlap([parseUnit(file).unit]).values().next().value;

test('verbatim text from a typeset book fails the overlap check', () => {
  const r = overlapOf(unitFile(`:::remark{provenance=original}\n${proseFrom('stein-shakarchi-2003')}\n:::`));
  assert.equal(r.pass, false);
  assert.ok(r.blocks[0].findings.some((f) => f.type === 'verbatim' && f.work === 'stein-shakarchi-2003'));
});

test('verbatim text from an OCR-scanned book fails the overlap check', () => {
  const r = overlapOf(unitFile(`:::remark{provenance=original}\n${proseFrom('strogatz-1994')}\n:::`));
  assert.equal(r.pass, false);
  assert.ok(r.blocks[0].findings.some((f) => f.work === 'strogatz-1994'));
});

test('light rewording (every fifth word changed) is still caught as close paraphrase', () => {
  const words = proseFrom('rhb-2006', 90).split(' ');
  const reworded = words.map((w, i) => (i % 5 === 4 ? 'zork' : w)).join(' ');
  const r = overlapOf(unitFile(`:::remark{provenance=original}\n${reworded}\n:::`));
  assert.equal(r.pass, false);
  assert.ok(r.blocks[0].findings.every((f) => f.type !== 'verbatim'), 'no 8-word run should survive this rewording');
  assert.ok(r.blocks[0].findings.some((f) => f.type === 'paraphrase' && f.work === 'rhb-2006'));
});

test('a short cited quotation is exempt, a long one is not', () => {
  const fm = { provenance: 'adapted', sources: [{ work: 'arfken-2013', loc: 'p. 1', role: 'quotation' }] };
  const short = proseFrom('arfken-2013', 30);
  const ok = overlapOf(unitFile(`:::quote{provenance=quoted src="arfken-2013:p. 1"}\n${short}\n:::`, fm));
  assert.equal(ok.pass, true);
  const long = proseFrom('arfken-2013', 80);
  const bad = overlapOf(unitFile(`:::quote{provenance=quoted src="arfken-2013:p. 1"}\n${long}\n:::`, fm));
  assert.equal(bad.pass, false);
});

test('the original fixtures pass the overlap check', () => {
  const { units } = loadUnits(contentConfig({ fixtures: true }));
  for (const [, r] of checkOverlap([...units.values()])) assert.equal(r.pass, true);
});

test('schema: provenance rules are enforced', () => {
  const cases = [
    [':::proof\nNo provenance.\n:::', /needs provenance/],
    [':::proof{provenance=adapted}\nNo source.\n:::', /no src/],
    [':::proof{provenance=original src="arfken-2013:p. 3"}\nx\n:::', /names a src/],
    [':::proof{provenance=quoted src="arfken-2013:p. 3"}\nx\n:::', /only in :::quote/],
    ['Loose paragraph outside any block.', /outside a block/],
    [':::lemma{provenance=original}\nx\n:::', /unknown block/],
  ];
  for (const [body, re] of cases) {
    const { errors } = parse(body, { provenance: 'adapted', sources: [{ work: 'arfken-2013', loc: 'p. 3', role: 'x' }] });
    assert.ok(errors.some((e) => re.test(e)), `expected ${re} for ${JSON.stringify(body)}, got ${JSON.stringify(errors)}`);
  }
  const unknownWork = parse(':::proof{provenance=adapted src="nobody-1999:p. 1"}\nx\n:::', { provenance: 'adapted', sources: [{ work: 'nobody-1999', loc: 'p. 1', role: 'x' }] });
  assert.ok(unknownWork.errors.some((e) => /unknown work/.test(e)));
  const mislabelled = parse(':::proof{provenance=adapted src="arfken-2013:p. 3"}\nx\n:::', { provenance: 'original' });
  assert.ok(mislabelled.errors.some((e) => /must also be listed|marked provenance: original/.test(e)));
  const clean = parse(':::proof{provenance=original}\nAll our own words.\n:::');
  assert.deepEqual(clean.errors, []);
});

test('graph: unknown prerequisites and cycles are errors', () => {
  const a = parseUnit(unitFile(':::remark{provenance=original}\nA.\n:::', { id: 'tmp.a', prereqs: ['tmp.b'] })).unit;
  const b = parseUnit(unitFile(':::remark{provenance=original}\nB.\n:::', { id: 'tmp.b', prereqs: ['tmp.a'] })).unit;
  const c = parseUnit(unitFile(':::remark{provenance=original}\nC.\n:::', { id: 'tmp.c', prereqs: ['tmp.missing'] })).unit;
  const units = new Map([a, b, c].map((u) => [u.id, u]));
  const map = { parts: [{ id: 'p', chapters: [{ id: 'c', sections: [{ id: 's', units: ['tmp.a', 'tmp.b', 'tmp.c'] }] }] }] };
  const { errors } = checkGraph(units, map);
  assert.ok(errors.some((e) => /cycle/.test(e)));
  assert.ok(errors.some((e) => /unknown prerequisite tmp.missing/.test(e)));
  assert.deepEqual(checkGraph(loadUnits(contentConfig({ fixtures: true })).units, loadMap(contentConfig({ fixtures: true }))).errors, []);
});

test('ledger: publication needs checks plus both verifiers, and any edit resets it', () => {
  const ledger = {};
  const u = { id: 'tmp.l', hash: 'h1' };
  assert.equal(unitStatus(ledger, u), 'draft');
  recordChecks(ledger, u, true);
  recordVerdict(ledger, u, 'A', 'pass', 'r');
  assert.equal(unitStatus(ledger, u), 'draft');
  recordVerdict(ledger, u, 'B', 'pass', 'r');
  assert.equal(unitStatus(ledger, u), 'verified');
  const edited = { id: 'tmp.l', hash: 'h2' };
  assert.equal(unitStatus(ledger, edited), 'draft');
});

test('ledger: repeated failed rounds hold the unit for a human, even after edits, until released', () => {
  const ledger = {};
  for (const hash of Array.from({ length: MAX_ROUNDS }, (_, i) => `h${i + 1}`)) {
    const u = { id: 'tmp.h', hash };
    recordChecks(ledger, u, true);
    recordVerdict(ledger, u, 'A', 'pass', 'r');
    recordVerdict(ledger, u, 'B', 'fail', 'r');
  }
  const later = { id: 'tmp.h', hash: 'final' };
  recordChecks(ledger, later, true);
  assert.equal(unitStatus(ledger, later), 'needs-human');
  releaseHold(ledger, later);
  assert.equal(unitStatus(ledger, later), 'draft');
});

// --- inline quotations ---------------------------------------------------------------------
// The policy allows a short attributed quotation inside an ordinary block but puts anything longer
// in a :::quote block, and never lets an `original` block carry copied wording. These assertions
// exist because the obvious implementation -- "find quotation marks" -- fires on scare quotes and
// on quotations of our own prose, which makes it worthless. The check must key on the corpus.
test('inline quotations: caught only when the words are really in a book', async (t) => {
  const { checkQuotes } = await import('../tools/check/quotes.mjs');
  const { tokens } = await import('../tools/lib/text.mjs');
  const para = (v) => ({ type: 'paragraph', children: [{ type: 'text', value: v }] });
  const unit = (provenance, body) => ({ id: 'q.test', blocks: [{ name: 'remark', provenance, node: para(body) }] });
  const msgs = (u) => checkQuotes([u]).get('q.test') || [];

  // A real contiguous word-run of a real book. Tokens are contiguous and punctuation-free, so
  // joining them reproduces wording the shingle index must contain.
  const book = tokens(proseFrom('strauss-2008', 120));
  const longRun = book.slice(0, 80).join(' ');
  const shortRun = book.slice(0, 12).join(' ');

  await t.test('over-long inline quotation fails', () => {
    assert.match(msgs(unit('adapted', `Strauss writes "${longRun}" here.`)).join(' '), /belongs in a :::quote block/);
  });
  await t.test('verbatim wording in an original block fails', () => {
    assert.match(msgs(unit('original', `As it goes, "${shortRun}" and so on.`)).join(' '), /provenance=original but quotes/);
  });
  await t.test('a short attributed quotation in an adapted block passes', () => {
    assert.deepEqual(msgs(unit('adapted', `Strauss calls it "${shortRun}" exactly.`)), []);
  });
  await t.test('scare quotes that are in no book pass', () => {
    assert.deepEqual(msgs(unit('original', 'We call this a "suitably nice function" at times, loosely speaking.')), []);
  });
});
