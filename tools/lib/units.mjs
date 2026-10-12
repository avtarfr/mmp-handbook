// Loading and validating handbook units.
//
// A unit is one Markdown file whose body consists only of container-directive blocks
// (:::definition, :::proof, ...). Every block carries a provenance attribute, and every
// adapted or quoted block names its sources. See docs/AUTHORING.md for the format.

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { parse as parseYaml } from 'yaml';
import { z } from 'zod';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkDirective from 'remark-directive';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import { ROOT, worksById } from './works.mjs';

export const PROVENANCE = ['original', 'adapted', 'quoted'];
export const KINDS = ['overview', 'definition', 'theorem', 'method', 'example', 'application', 'table'];

// Block name -> default heading and the print layer it belongs to.
export const BLOCKS = {
  definition: { label: 'Definition', layer: 'core' },
  statement: { label: 'Theorem', layer: 'core' },
  idea: { label: 'Idea of the proof', layer: 'proofs' },
  proof: { label: 'Proof', layer: 'proofs' },
  method: { label: 'Method', layer: 'core' },
  example: { label: 'Example', layer: 'examples' },
  exercise: { label: 'Exercise', layer: 'examples' },
  application: { label: 'Application', layer: 'applications' },
  remark: { label: 'Remark', layer: 'core' },
  note: { label: 'Note', layer: 'core' },
  quote: { label: 'Quotation', layer: 'core' },
};
export const LAYERS = ['core', 'proofs', 'examples', 'applications'];
export const INLINE_DIRECTIVES = ['ref', 'cite'];

const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\.[a-z0-9]+(?:-[a-z0-9]+)*)+$/;
const PAGES = /^\d+(?:-\d+)?(?:,\s*\d+(?:-\d+)?)*$/;

export const frontmatterSchema = z
  .object({
    id: z.string().regex(ID, 'id must be dotted lowercase segments, e.g. fourier.series.parseval'),
    title: z.string().min(1),
    kind: z.enum(KINDS),
    level: z.enum(['core', 'advanced']).default('core'),
    summary: z.string().optional(),
    prereqs: z.array(z.string().regex(ID)).default([]),
    provenance: z.enum(PROVENANCE),
    sources: z
      .array(
        z
          .object({
            work: z.string(),
            loc: z.string().min(1),
            pages: z.string().regex(PAGES, 'pages are printed page numbers, e.g. "79-80" or "12, 15-17"').optional(),
            role: z.string().min(1),
          })
          .strict(),
      )
      .default([]),
  })
  .strict();

export function contentConfig({ fixtures = false } = {}) {
  const root = fixtures ? join(ROOT, 'content', '_fixtures') : join(ROOT, 'content');
  return {
    fixtures,
    root,
    mapFile: join(root, 'map.yaml'),
    ledgerFile: fixtures ? join(root, 'ledger.json') : join(ROOT, 'verification', 'ledger.json'),
  };
}

export const parser = unified().use(remarkParse).use(remarkFrontmatter, ['yaml']).use(remarkDirective).use(remarkMath).use(remarkGfm);

function listMarkdown(dir, skipFixtures) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (skipFixtures && name === '_fixtures') continue;
      if (name === 'reports') continue; // verifier reports for the fixtures live beside them
      out.push(...listMarkdown(p, skipFixtures));
    } else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

export const hashSource = (src) => createHash('sha256').update(src.replace(/\r\n/g, '\n')).digest('hex');

// Parse `src="work-id:locator; other-id:locator"` into [{work, loc}].
export function parseSrc(src) {
  if (!src) return [];
  return src
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const i = s.indexOf(':');
      return i < 0 ? { work: s, loc: '' } : { work: s.slice(0, i).trim(), loc: s.slice(i + 1).trim() };
    });
}

// Parse one unit file. Returns { unit, errors }; unit is null if the file cannot be read at all.
export function parseUnit(file, works = worksById()) {
  const errors = [];
  const err = (msg, node) => errors.push(node?.position ? `${msg} (line ${node.position.start.line})` : msg);
  const source = readFileSync(file, 'utf8');
  const tree = parser.parse(source);

  const fmNode = tree.children[0]?.type === 'yaml' ? tree.children[0] : null;
  if (!fmNode) return { unit: null, errors: ['missing YAML frontmatter'] };
  let fm;
  try {
    fm = parseYaml(fmNode.value);
  } catch (e) {
    return { unit: null, errors: [`frontmatter is not valid YAML: ${e.message}`] };
  }
  const parsed = frontmatterSchema.safeParse(fm);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) err(`frontmatter ${issue.path.join('.') || '(root)'}: ${issue.message}`);
    return { unit: null, errors };
  }
  const meta = parsed.data;
  if (basename(file, '.md') !== meta.id) err(`file name must be ${meta.id}.md`);

  const sourceWorks = new Set();
  for (const s of meta.sources) {
    if (!works.has(s.work)) err(`frontmatter sources: unknown work "${s.work}" (not in bibliography/works.yaml)`);
    sourceWorks.add(s.work);
  }
  if (meta.provenance !== 'original' && meta.sources.length === 0) {
    err(`provenance "${meta.provenance}" requires at least one entry in sources`);
  }

  // Body: only container-directive blocks at the top level.
  const blocks = [];
  for (const node of tree.children.slice(1)) {
    if (node.type !== 'containerDirective') {
      err(`content outside a block (${node.type}); wrap it in a :::block with a provenance`, node);
      continue;
    }
    const spec = BLOCKS[node.name];
    if (!spec) {
      err(`unknown block :::${node.name} (allowed: ${Object.keys(BLOCKS).join(', ')})`, node);
      continue;
    }
    const attrs = node.attributes || {};
    const prov = attrs.provenance;
    if (!PROVENANCE.includes(prov)) {
      err(`:::${node.name} needs provenance=original|adapted|quoted`, node);
      continue;
    }
    const srcs = parseSrc(attrs.src);
    if (prov !== 'original' && srcs.length === 0) err(`:::${node.name} is ${prov} but has no src="work-id:locator"`, node);
    if (prov === 'original' && srcs.length) err(`:::${node.name} is original but names a src; use provenance=adapted`, node);
    if ((node.name === 'quote') !== (prov === 'quoted')) {
      err('verbatim text belongs only in :::quote blocks, and :::quote blocks must be provenance=quoted', node);
    }
    for (const s of srcs) {
      if (!works.has(s.work)) err(`:::${node.name} src: unknown work "${s.work}"`, node);
      else if (!sourceWorks.has(s.work)) err(`:::${node.name} src "${s.work}" must also be listed in frontmatter sources`, node);
      if (!s.loc) err(`:::${node.name} src "${s.work}" needs a locator, e.g. ${s.work}:pp. 79-80`, node);
    }
    blocks.push({ name: node.name, provenance: prov, srcs, layer: spec.layer, node });
  }
  if (blocks.length === 0) err('unit has no blocks');

  const strongest = blocks.some((b) => b.provenance !== 'original') ? 'adapted' : 'original';
  if (meta.provenance === 'original' && strongest !== 'original') {
    err('unit is marked provenance: original but contains adapted or quoted blocks');
  }
  if (meta.provenance !== 'original' && strongest === 'original') {
    err('unit is marked adapted/quoted but every block is original; mark it original');
  }

  // Inline directives: :ref[text]{to=unit.id} and :cite[text]{work=work-id loc="..."}.
  // (Not the #id shorthand: remark-directive would read the dots in a unit id as classes.)
  const refs = [];
  visit(tree, (node) => {
    if (node.type === 'textDirective' || node.type === 'leafDirective') {
      if (!INLINE_DIRECTIVES.includes(node.name)) {
        err(`unknown inline directive :${node.name}`, node);
        return;
      }
      const target = node.name === 'ref' ? node.attributes?.to : node.attributes?.work;
      if (!target) err(node.name === 'ref' ? ':ref needs a target: :ref[text]{to=unit.id}' : ':cite needs a work: :cite[text]{work=work-id loc="p. 12"}', node);
      else if (node.name === 'ref') refs.push(target);
      else if (!works.has(target)) err(`:cite target "${target}" is not in works.yaml`, node);
      else if (!sourceWorks.has(target)) err(`:cite "${target}" must also be listed in frontmatter sources`, node);
    }
  });

  return {
    unit: { ...meta, file, rel: relative(ROOT, file), source, hash: hashSource(source), tree, blocks, refs },
    errors,
  };
}

// Ids and content hashes only, without the Markdown pipeline. Parsing every unit properly costs
// about a quarter of a second each, which is fine for a build but far too slow for a page that
// refreshes every few seconds.
export function loadUnitHashes(config) {
  const out = new Map();
  if (!existsSync(config.root)) return out;
  for (const file of listMarkdown(config.root, !config.fixtures)) {
    const source = readFileSync(file, 'utf8');
    const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
    const id = m && /^id:\s*(\S+)/m.exec(m[1])?.[1];
    if (id) out.set(id, { id, hash: hashSource(source), file, rel: relative(ROOT, file) });
  }
  return out;
}

export function loadMap(config) {
  if (!existsSync(config.mapFile)) return { parts: [] };
  return parseYaml(readFileSync(config.mapFile, 'utf8')) || { parts: [] };
}

// A map entry is either a bare unit id or a spec {id, title, kind, level, scope, prereqs, keywords}.
export const entryId = (entry) => (typeof entry === 'string' ? entry : entry.id);
export const sectionIds = (section) => (section.units || []).map(entryId);

// Flatten the map into ordered placement records: unit id -> {part, chapter, section, order, spec}.
export function mapPlacements(map) {
  const placements = new Map();
  let order = 0;
  for (const part of map.parts || []) {
    for (const chapter of part.chapters || []) {
      for (const section of chapter.sections || []) {
        for (const entry of section.units || []) {
          const id = entryId(entry);
          const spec = typeof entry === 'string' ? { id } : entry;
          if (!placements.has(id)) placements.set(id, { part, chapter, section, order: order++, spec });
        }
      }
    }
  }
  return placements;
}

// Load every unit under the content root. Returns { units: Map<id, unit>, errors: [{file, msg}] }.
export function loadUnits(config) {
  const works = worksById();
  const units = new Map();
  const errors = [];
  if (!existsSync(config.root)) return { units, errors };
  for (const file of listMarkdown(config.root, !config.fixtures)) {
    const { unit, errors: es } = parseUnit(file, works);
    for (const msg of es) errors.push({ file: relative(ROOT, file), msg });
    if (!unit) continue;
    if (units.has(unit.id)) errors.push({ file: unit.rel, msg: `duplicate unit id ${unit.id} (also ${units.get(unit.id).rel})` });
    else units.set(unit.id, unit);
  }
  return { units, errors };
}
