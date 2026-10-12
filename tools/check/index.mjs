// All automated checks for units.
//
//   node tools/check/index.mjs [--fixtures] [--record] [--no-compile] [unit-id ...]
//
// Errors fail a unit: schema/provenance, prerequisite graph, KaTeX, LaTeX compile, overlap with the
// source books, inline quotations that are over-long or unattributed. Citation-page mismatches are warnings. With --record, each checked unit's result is
// written to the verification ledger against its current content hash.

import { loadCatalog } from '../lib/catalog.mjs';
import { recordChecks, updateLedger } from '../lib/ledger.mjs';
import { renderUnitBody } from '../lib/render.mjs';
import { checkGraph } from './graph.mjs';
import { checkOverlap, formatOverlap, formatOverlapWarnings } from './overlap.mjs';
import { checkCitations } from './citations.mjs';
import { checkQuotes } from './quotes.mjs';
import { compileUnits } from '../latex/build.mjs';

const args = process.argv.slice(2);
const fixtures = args.includes('--fixtures');
const only = args.filter((a) => !a.startsWith('--'));
const catalog = loadCatalog({ fixtures });
const units = [...catalog.units.values()].filter((u) => only.length === 0 || only.includes(u.id));
for (const id of only) if (!catalog.units.has(id)) console.error(`unknown unit ${id}`);

const failures = new Map(units.map((u) => [u.id, []]));
const global = [];
const fail = (u, msg) => failures.get(u.id)?.push(msg);

// Schema / provenance: errors are per file. A file that does not parse has no unit at all.
const byRel = new Map([...catalog.units.values()].map((u) => [u.rel, u]));
for (const { file, msg } of catalog.errors) {
  const u = byRel.get(file);
  if (u && failures.has(u.id)) fail(u, `schema: ${msg}`);
  else if (!u) global.push(`${file}: ${msg}`);
}

// Graph.
const graph = checkGraph(catalog.units, catalog.map);
for (const msg of graph.errors) {
  const u = units.find((x) => msg.startsWith(`${x.rel}:`) || msg.includes(` ${x.id} `) || msg.includes(`${x.id} ->`));
  if (u) fail(u, `graph: ${msg}`);
  else global.push(`graph: ${msg}`);
}

// KaTeX.
const ctx = { works: catalog.works, bibUrl: () => '#', unitUrl: () => '#', unitTitle: (id) => catalog.units.get(id)?.title ?? null };
for (const u of units) for (const m of renderUnitBody(u, ctx).errors) fail(u, m);

// LaTeX.
if (!args.includes('--no-compile')) {
  const compiled = await compileUnits(units, catalog);
  for (const [id, errs] of compiled) for (const m of errs) fail(catalog.units.get(id), `latex: ${m}`);
}

// Overlap with the source books.
const overlap = checkOverlap(units, { log: (m) => console.error(m) });
const similar = [];
for (const [id, r] of overlap) {
  for (const line of formatOverlap(id, r)) fail(catalog.units.get(id), `overlap: ${line}`);
  similar.push(...formatOverlapWarnings(id, r));
}

// Inline quotations that are verbatim from a cited work: over-long, or in a block claiming no
// source. The policy allowed these in prose long before anything enforced them.
for (const [id, msgs] of checkQuotes(units, { log: (m) => console.error(m) }))
  for (const m of msgs) fail(catalog.units.get(id), `quote: ${m}`);

// Citations (warnings).
const planned = graph.warnings.filter((w) => w.endsWith('has no unit file yet'));
const warnings = [
  ...similar,
  ...checkCitations(units),
  ...graph.warnings.filter((w) => !planned.includes(w)),
  ...(planned.length ? [`map: ${planned.length} planned unit(s) not written yet`] : []),
];

let bad = 0;
for (const u of units) {
  const f = failures.get(u.id);
  if (f.length) {
    bad++;
    console.log(`FAIL ${u.id}`);
    f.forEach((m) => console.log(`     ${m}`));
  } else console.log(`ok   ${u.id}`);
}
// When specific units are checked, problems elsewhere (for example another section's file that a
// parallel drafter is still writing) are reported but do not fail these units.
if (only.length) {
  warnings.push(...global.map((m) => `elsewhere: ${m}`));
  global.length = 0;
}
global.forEach((m) => console.log(`FAIL ${m}`));
warnings.forEach((m) => console.log(`warn ${m}`));

if (args.includes('--record')) {
  updateLedger(catalog.config.ledgerFile, (ledger) => {
    for (const u of units) recordChecks(ledger, u, failures.get(u.id).length === 0, failures.get(u.id));
  });
  console.log(`recorded ${units.length} result(s) in ${catalog.config.ledgerFile.replace(process.cwd() + '/', '')}`);
}

console.log(`\n${units.length - bad}/${units.length} unit(s) pass${global.length ? `, ${global.length} other error(s)` : ''}${warnings.length ? `, ${warnings.length} warning(s)` : ''}`);
process.exit(bad || global.length ? 1 : 0);
