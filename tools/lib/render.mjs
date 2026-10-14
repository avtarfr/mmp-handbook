// Unit -> HTML. Blocks become <section class="block block-NAME prov-PROV"> with a header that
// shows the block label, its provenance badge and, for adapted/quoted blocks, the cited sources.

import { unified } from 'unified';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import katex from 'katex';
import { BLOCKS, parseSrc } from './units.mjs';

export const BADGE = { original: 'Original', adapted: 'Adapted', quoted: 'Quoted' };
export const KIND_LABEL = {
  overview: 'Overview',
  definition: 'Definition',
  theorem: 'Theorem',
  method: 'Method',
  example: 'Example',
  application: 'Application',
  table: 'Reference table',
};

// Plain text that may contain inline $math$ (frontmatter summaries, which are not Markdown).
// Rendered here so a summary reads as mathematics in the contents list, not as TeX source.
// Unit sources write a parenthetical dash as `--`, the plain-text convention; LaTeX turns it into a
// dash by itself, HTML does not. Only a dash standing between spaces is touched, and never inside
// code or mathematics, so `x--y`, a command-line flag and every formula are left exactly as written.
const DASH = /(\s)---?(?=\s)/g;
const typesetDashes = (s) => s.replace(DASH, '$1\u2014');
const SKIP_TAGS = new Set(['code', 'pre', 'math', 'annotation', 'script', 'style']);
function rehypeDashes() {
  const walk = (node) => {
    if (node.type === 'element') {
      if (SKIP_TAGS.has(node.tagName)) return;
      const cls = node.properties?.className || [];
      if (cls.some((c) => String(c).startsWith('katex'))) return;
    }
    if (node.type === 'text') node.value = typesetDashes(node.value);
    (node.children || []).forEach(walk);
  };
  return walk;
}

export function renderInlineText(text) {
  const out = [];
  let i = 0;
  for (const m of String(text).matchAll(/\$([^$]+)\$/g)) {
    out.push(escapeHtml(typesetDashes(String(text).slice(i, m.index))));
    try {
      out.push(katex.renderToString(m[1], { throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' }));
    } catch {
      out.push(escapeHtml(m[0]));
    }
    i = m.index + m[0].length;
  }
  out.push(escapeHtml(typesetDashes(String(text).slice(i))));
  return out.join('');
}

export const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Generic mdast node that remark-rehype turns into <tag class=...>children</tag>.
const el = (tag, className, children, props = {}) => ({
  type: 'hbElement',
  data: { hName: tag, hProperties: { ...(className ? { className } : {}), ...props } },
  children: children.map((c) => (typeof c === 'string' ? { type: 'text', value: c } : c)),
});

// ctx: { works: Map, bibUrl(workId), unitUrl(unitId) -> href|null, unitTitle(unitId) -> string|null }
export function citationNodes(ctx, srcs) {
  const out = [];
  srcs.forEach((s, i) => {
    if (i) out.push('; ');
    const w = ctx.works.get(s.work);
    out.push(el('a', ['cite'], [w ? w.short : s.work], { href: ctx.bibUrl(s.work) }));
    if (s.loc) out.push(`, ${s.loc}`);
  });
  return out;
}

function handbookPlugin(ctx, unit) {
  return (tree) => {
    tree.children = tree.children.filter((n) => n.type !== 'yaml');
    const walk = (node) => {
      if (node.type === 'containerDirective' && BLOCKS[node.name]) {
        const attrs = node.attributes || {};
        const prov = attrs.provenance;
        const title = node.children[0]?.data?.directiveLabel ? node.children.shift().children : null;
        const label = attrs.label || (node.name === 'statement' ? KIND_LABEL[unit.kind] || 'Theorem' : BLOCKS[node.name].label);
        const srcs = parseSrc(attrs.src);
        const head = [el('span', ['block-label'], [label])];
        if (title) head.push(el('span', ['block-title'], ['(', ...title, ')']));
        head.push(el('span', ['badge', `badge-${prov}`], [BADGE[prov]], { title: `Provenance: ${BADGE[prov]}` }));
        if (srcs.length) {
          head.push(el('span', ['block-src'], [prov === 'quoted' ? 'Quoted from ' : 'Adapted from ', ...citationNodes(ctx, srcs)]));
        }
        node.children.unshift(el('header', ['block-head'], head));
        node.data = {
          hName: node.name === 'quote' ? 'blockquote' : 'section',
          hProperties: {
            className: ['block', `block-${node.name}`, `prov-${prov}`],
            dataLayer: BLOCKS[node.name].layer,
            dataProvenance: prov,
          },
        };
      } else if (node.type === 'textDirective' && node.name === 'ref') {
        const target = node.attributes.to;
        const href = ctx.unitUrl(target);
        if (node.children.length === 0) node.children = [{ type: 'text', value: ctx.unitTitle(target) ?? target }];
        node.data = href
          ? { hName: 'a', hProperties: { href, className: ['xref'] } }
          : { hName: 'span', hProperties: { className: ['xref', 'xref-missing'], title: 'In preparation' } };
      } else if (node.type === 'textDirective' && node.name === 'cite') {
        const cite = el('span', ['cite-inline'], ['(', ...citationNodes(ctx, [{ work: node.attributes.work, loc: node.attributes.loc || '' }]), ')']);
        // Any label text the author gave is kept in front of the parenthetical citation.
        node.data = { hName: 'span' };
        node.children = [...node.children, ...(node.children.length ? [{ type: 'text', value: ' ' }] : []), cite];
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

const processor = (ctx, unit) =>
  unified()
    .use(handbookPlugin, ctx, unit)
    .use(remarkRehype)
    .use(rehypeKatex, { throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' })
    .use(rehypeDashes)
    .use(rehypeStringify);

// Render a unit body. Returns { html, errors }.
export function renderUnitBody(unit, ctx) {
  const p = processor(ctx, unit);
  const hast = p.runSync(structuredClone(unit.tree));
  const html = p.stringify(hast);
  // rehype-katex renders a failure as <span class="katex-error" title="...">: each one is a build error.
  const errors = [...html.matchAll(/class="katex-error"[^>]*title="([^"]*)"/g)].map((m) => `KaTeX: ${m[1]}`);
  return { html, errors };
}
