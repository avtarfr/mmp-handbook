// Topic-map tool.
//
//   node tools/map.mjs validate                 check ids, kinds, prerequisites and cycles in content/map.yaml
//   node tools/map.mjs stats                    units per part and level
//   node tools/map.mjs chapters                 list chapters (the drafting batches) as part/chapter
//   node tools/map.mjs spec <part>/<chapter>    the unit specs and candidate source pages for a chapter
//   node tools/map.mjs candidates               search the corpus for candidate pages -> content/candidates.yaml
//
// Candidate pages are found by phrase search over the extracted book text; they are starting points
// for the drafter, who confirms them by reading.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse, stringify } from 'yaml';
import { ROOT, CORPUS, loadWorks } from './lib/works.mjs';
import { contentConfig, loadMap, mapPlacements, KINDS } from './lib/units.mjs';
import { loadOffsets, pdfToPrinted } from './lib/pages.mjs';

const CANDIDATES_FILE = join(ROOT, 'content', 'candidates.yaml');
const map = loadMap(contentConfig());
const placements = mapPlacements(map);
const specs = [...placements.values()].map((p) => ({ ...p.spec, part: p.part.id, chapter: p.chapter.id, section: p.section.id }));

function validate() {
  const errors = [];
  const ids = new Set();
  const partIds = new Set();
  for (const part of map.parts || []) {
    if (partIds.has(part.id)) errors.push(`duplicate part id ${part.id}`);
    partIds.add(part.id);
    const chapterIds = new Set();
    for (const ch of part.chapters || []) {
      if (chapterIds.has(ch.id)) errors.push(`duplicate chapter id ${part.id}/${ch.id}`);
      chapterIds.add(ch.id);
      if (!ch.title || !ch.summary) errors.push(`${part.id}/${ch.id}: chapter needs title and summary`);
      for (const sec of ch.sections || []) {
        if (!sec.title) errors.push(`${part.id}/${ch.id}/${sec.id}: section needs a title`);
        for (const u of sec.units || []) {
          if (typeof u === 'string') {
            errors.push(`${u}: map entries must be full specs`);
            continue;
          }
          if (ids.has(u.id)) errors.push(`${u.id}: listed twice`);
          ids.add(u.id);
          if (!u.id.startsWith(`${part.id}.`)) errors.push(`${u.id}: id must start with "${part.id}."`);
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)+$/.test(u.id)) errors.push(`${u.id}: malformed id`);
          for (const k of ['title', 'kind', 'scope']) if (!u[k]) errors.push(`${u.id}: missing ${k}`);
          if (u.kind && !KINDS.includes(u.kind)) errors.push(`${u.id}: unknown kind ${u.kind}`);
          if (u.level && !['core', 'advanced'].includes(u.level)) errors.push(`${u.id}: unknown level ${u.level}`);
          if (!Array.isArray(u.prereqs)) errors.push(`${u.id}: prereqs must be a list`);
          if (!Array.isArray(u.keywords) || !u.keywords.length) errors.push(`${u.id}: needs keywords`);
          const extra = Object.keys(u).filter((k) => !['id', 'title', 'kind', 'level', 'scope', 'prereqs', 'keywords'].includes(k));
          if (extra.length) errors.push(`${u.id}: unknown fields ${extra.join(', ')}`);
        }
      }
    }
  }
  for (const s of specs) for (const p of s.prereqs || []) {
    if (!ids.has(p)) errors.push(`${s.id}: unknown prerequisite ${p}`);
    if (p === s.id) errors.push(`${s.id}: lists itself as a prerequisite`);
  }
  // Cycles.
  const byId = new Map(specs.map((s) => [s.id, s]));
  const state = new Map();
  const stack = [];
  const visit = (id) => {
    if (state.get(id) === 2) return;
    if (state.get(id) === 1) {
      errors.push(`prerequisite cycle: ${[...stack.slice(stack.indexOf(id)), id].join(' -> ')}`);
      return;
    }
    state.set(id, 1);
    stack.push(id);
    for (const p of byId.get(id)?.prereqs || []) if (byId.has(p)) visit(p);
    stack.pop();
    state.set(id, 2);
  };
  for (const s of specs) visit(s.id);
  return errors;
}

// Phrase search: for each unit, score pages by keyword phrases found; keep the best pages per book.
function candidates() {
  const offsets = loadOffsets();
  const norm = (t) =>
    t
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[ﬁ]/g, 'fi')
      .replace(/[ﬂ]/g, 'fl')
      .replace(/-\s*\n\s*/g, '')
      .replace(/\s+/g, ' ');
  const books = loadWorks()
    .filter((w) => existsSync(join(CORPUS, w.id)))
    .map((w) => ({
      id: w.id,
      pages: readdirSync(join(CORPUS, w.id))
        .filter((f) => /^p\d{4}\.txt$/.test(f))
        .sort()
        .map((f) => ({ pdf: Number(f.slice(1, 5)), text: norm(readFileSync(join(CORPUS, w.id, f), 'utf8')) })),
    }));
  const out = {};
  for (const s of specs) {
    const phrases = [...new Set([...(s.keywords || []), s.title].map((k) => norm(k).trim()))];
    const perBook = [];
    for (const b of books) {
      const scored = [];
      for (const p of b.pages) {
        let score = 0;
        phrases.forEach((ph, i) => {
          let n = 0;
          for (let k = p.text.indexOf(ph); k >= 0 && n < 5; k = p.text.indexOf(ph, k + ph.length)) n++;
          // The title phrase counts double: it usually names the topic exactly.
          score += n * (i === phrases.length - 1 ? 2 : 1);
        });
        if (score) scored.push({ pdf: p.pdf, score });
      }
      if (!scored.length) continue;
      // Ignore index and front-matter pages: only numbered main-text pages count.
      const main = scored.map((x) => ({ ...x, printed: pdfToPrinted(offsets, b.id, x.pdf) })).filter((x) => x.printed);
      if (!main.length) continue;
      main.sort((a, c) => c.score - a.score);
      const best = main.slice(0, 3).sort((a, c) => a.printed - c.printed);
      perBook.push({ work: b.id, score: main.slice(0, 3).reduce((a, x) => a + x.score, 0), pages: best.map((x) => x.printed).join(', ') });
    }
    perBook.sort((a, c) => c.score - a.score);
    out[s.id] = perBook.slice(0, 5).map(({ work, pages }) => ({ work, pages }));
  }
  writeFileSync(
    CANDIDATES_FILE,
    '# Generated by tools/map.mjs candidates: likely source pages (printed page numbers) for each unit.\n# Starting points only; the drafter confirms them by reading.\n' +
      stringify(out, { lineWidth: 0 }),
  );
  const empty = specs.filter((s) => !out[s.id].length).map((s) => s.id);
  console.log(`candidates for ${specs.length} units written to content/candidates.yaml; ${empty.length} with none: ${empty.join(', ')}`);
}

const args = process.argv.slice(2);
const [cmd, arg] = args;
if (cmd === 'validate') {
  const errors = validate();
  errors.forEach((e) => console.log(`FAIL ${e}`));
  console.log(errors.length ? `${errors.length} error(s)` : `map ok: ${specs.length} units`);
  process.exit(errors.length ? 1 : 0);
} else if (cmd === 'stats') {
  for (const part of map.parts) {
    const us = specs.filter((s) => s.part === part.id);
    console.log(`${part.id.padEnd(8)} ${String(us.length).padStart(3)} units (${us.filter((u) => u.level === 'advanced').length} advanced), ${part.chapters.length} chapters`);
  }
  console.log(`total    ${specs.length} units (${specs.filter((u) => u.level !== 'advanced').length} core)`);
} else if (cmd === 'chapters') {
  const coreOnly = args.includes('--core');
  for (const part of map.parts)
    for (const ch of part.chapters) {
      const us = specs.filter((s) => s.part === part.id && s.chapter === ch.id && (!coreOnly || s.level !== 'advanced'));
      if (us.length) console.log(`${part.id}/${ch.id}  (${us.length} unit${us.length === 1 ? '' : 's'})`);
    }
} else if (cmd === 'spec') {
  const [partId, chapterId] = (arg || '').split('/');
  const part = map.parts.find((p) => p.id === partId);
  const ch = part?.chapters.find((c) => c.id === chapterId);
  if (!ch) {
    console.error('usage: map.mjs spec <part>/<chapter>   (see: map.mjs chapters)');
    process.exit(2);
  }
  const cand = existsSync(CANDIDATES_FILE) ? parse(readFileSync(CANDIDATES_FILE, 'utf8')) : {};
  const units = specs.filter((s) => s.part === partId && s.chapter === chapterId);
  console.log(
    stringify({
      part: { id: part.id, title: part.title },
      chapter: { id: ch.id, title: ch.title, summary: ch.summary },
      units: units.map(({ part: _p, chapter: _c, ...u }) => ({ ...u, file: `content/${partId}/${u.id}.md`, candidate_sources: cand[u.id] || [] })),
    }, { lineWidth: 0 }),
  );
} else if (cmd === 'candidates') {
  candidates();
} else {
  console.error('usage: map.mjs validate | stats | chapters | spec <part>/<chapter> | candidates');
  process.exit(2);
}
