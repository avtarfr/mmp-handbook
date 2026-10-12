// Copyright safeguard: compare every unit's prose (math stripped) against the text of ALL books.
//
//   * verbatim runs: word sequences of 8+ words that also occur in a book. Sequences found in 3+
//     different books are stock phrases and ignored. A run of RUN_FAIL+ words, or RUN_TOTAL_FAIL+
//     shared words in one block, fails the unit; shorter isolated runs are usually the standard
//     wording of a definition or theorem and are warnings for Verifier B to judge.
//   * close paraphrase: each block is aligned word by word against the pages it cites and the pages
//     sharing the most rare words with it (tools/lib/paraphrase.mjs). An alignment score of
//     PARAPHRASE_FAIL or more fails the block; PARAPHRASE_WARN or more is a warning that names the
//     passage, which Verifier B must then compare by hand.
//   * quotations (:::quote) are exempt from both, but are limited to QUOTE_MAX_WORDS words.
//
//   node tools/check/overlap.mjs [--fixtures] [unit-id ...]

import { loadIndex } from '../lib/overlap-index.mjs';
import { tokens, shingleHash } from '../lib/text.mjs';
import { loadOffsets, pageLabel, printedToPdf, expandPages } from '../lib/pages.mjs';
import { closestPassage } from '../lib/paraphrase.mjs';
import { contentConfig, loadUnits } from '../lib/units.mjs';

export const RUN_N = 8;
export const RUN_FAIL = 12;
export const RUN_TOTAL_FAIL = 20;
export const COMMON_WORKS = 3;
export const PARAPHRASE_FAIL = 0.35;
export const PARAPHRASE_WARN = 0.25;
export const PARAPHRASE_MIN_WORDS = 20;
export const QUOTE_MAX_WORDS = 60;

const SKIP = new Set(['math', 'inlineMath', 'code', 'inlineCode']);

// Prose of one block as a token stream.
export function blockText(node) {
  const parts = [];
  const walk = (n) => {
    if (SKIP.has(n.type)) {
      parts.push(' ');
      return;
    }
    if (n.type === 'text') parts.push(n.value);
    if (n.children) {
      n.children.forEach(walk);
      if (['paragraph', 'listItem', 'heading', 'tableCell'].includes(n.type)) parts.push('\n');
    }
  };
  walk(node);
  return parts.join('');
}

const distinctWorks = (hits) => new Set(hits.map((h) => h.work)).size;

export function checkBlock(words, idx8, offsets, cited = []) {
  const findings = [];
  const warnings = [];

  // Verbatim runs of RUN_N+ words.
  const runs = [];
  const hitAt = [];
  for (let i = 0; i + RUN_N <= words.length; i++) {
    const hits = idx8.lookup(shingleHash(words, i, RUN_N));
    hitAt[i] = hits.length && distinctWorks(hits) < COMMON_WORKS ? hits : null;
  }
  for (let i = 0; i < hitAt.length; i++) {
    if (!hitAt[i]) continue;
    let j = i;
    while (j + 1 < hitAt.length && hitAt[j + 1]) j++;
    const where = hitAt[i][0];
    runs.push({
      type: 'verbatim',
      words: j - i + RUN_N,
      text: words.slice(i, j + RUN_N).join(' '),
      work: where.work,
      page: pageLabel(offsets, where.work, where.page),
    });
    i = j;
  }
  const shared = runs.reduce((a, r) => a + r.words, 0);
  if (runs.some((r) => r.words >= RUN_FAIL) || shared >= RUN_TOTAL_FAIL) findings.push(...runs);
  else warnings.push(...runs);

  // Close paraphrase: word-by-word alignment against the most likely source pages.
  if (words.length >= PARAPHRASE_MIN_WORDS) {
    const best = closestPassage(words, cited);
    if (best.work) {
      const finding = { score: Math.round(best.score * 100) / 100, work: best.work, page: pageLabel(offsets, best.work, best.page) };
      if (best.score >= PARAPHRASE_FAIL) findings.push({ type: 'paraphrase', ...finding });
      else if (best.score >= PARAPHRASE_WARN) warnings.push({ type: 'similar', ...finding });
      findings.closest = finding;
    }
  }
  findings.warnings = warnings;
  return findings;
}

// Check units; returns Map<unitId, {pass, blocks: [{name, line, findings}]}>.
export function checkOverlap(units, { log = () => {} } = {}) {
  const idx8 = loadIndex(RUN_N, { log });
  const offsets = loadOffsets();
  const results = new Map();
  for (const unit of units) {
    const blocks = [];
    const cited = unit.sources.flatMap((s) =>
      s.pages ? expandPages(s.pages).map((p) => ({ work: s.work, pdfPage: printedToPdf(offsets, s.work, p) })).filter((c) => c.pdfPage) : [],
    );
    for (const b of unit.blocks) {
      const line = b.node.position?.start.line;
      const words = tokens(blockText(b.node));
      if (b.name === 'quote') {
        const n = blockText(b.node).split(/\s+/).filter(Boolean).length;
        if (n > QUOTE_MAX_WORDS) blocks.push({ name: b.name, line, findings: [{ type: 'quote-too-long', words: n }] });
        continue;
      }
      const findings = checkBlock(words, idx8, offsets, cited);
      blocks.push({ name: b.name, line, findings, warnings: findings.warnings || [], closest: findings.closest });
    }
    // Overlap is checked in the title too (a copied heading is still copied).
    const title = checkBlock(tokens(unit.title), idx8, offsets);
    const titleFindings = title.filter((f) => f.type === 'verbatim');
    if (titleFindings.length || title.warnings.length) blocks.push({ name: 'title', line: 1, findings: titleFindings, warnings: title.warnings });
    results.set(unit.id, { pass: blocks.every((b) => b.findings.length === 0), blocks });
  }
  return results;
}

export function formatOverlap(id, result) {
  const lines = [];
  for (const b of result.blocks) {
    for (const f of b.findings) {
      const at = `${id} :::${b.name} (line ${b.line})`;
      if (f.type === 'verbatim') lines.push(`${at}: ${f.words}-word run also in ${f.work} ${f.page}: "${f.text}"`);
      else if (f.type === 'paraphrase') lines.push(`${at}: close paraphrase of ${f.work} ${f.page} (alignment ${Math.round(f.score * 100)}%)`);
      else if (f.type === 'quote-too-long') lines.push(`${at}: quotation is ${f.words} words (max ${QUOTE_MAX_WORDS})`);
    }
  }
  return lines;
}

export function formatOverlapWarnings(id, result) {
  return result.blocks.flatMap((b) =>
    (b.warnings || []).map((w) =>
      w.type === 'verbatim'
        ? `${id} :::${b.name} (line ${b.line}): ${w.words}-word run shared with ${w.work} ${w.page}: "${w.text}"; a verifier must judge whether this is standard wording`
        : `${id} :::${b.name} (line ${b.line}): resembles ${w.work} ${w.page} (alignment ${Math.round(w.score * 100)}%); a verifier must compare them`,
    ),
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const config = contentConfig({ fixtures: args.includes('--fixtures') });
  const only = args.filter((a) => !a.startsWith('--'));
  const { units } = loadUnits(config);
  const selected = [...units.values()].filter((u) => only.length === 0 || only.includes(u.id));
  const results = checkOverlap(selected, { log: (m) => console.error(m) });
  let failed = 0;
  for (const [id, r] of results) {
    const lines = formatOverlap(id, r);
    const closest = Math.max(0, ...r.blocks.map((b) => b.closest?.score ?? 0));
    formatOverlapWarnings(id, r).forEach((l) => console.log(`warn ${l}`));
    if (lines.length) {
      failed++;
      lines.forEach((l) => console.log(`FAIL ${l}`));
    } else console.log(`ok   ${id} (closest book passage: alignment ${Math.round(closest * 100)}%)`);
  }
  process.exit(failed ? 1 : 0);
}
