// mdast -> LaTeX for handbook units. Mirrors tools/lib/render.mjs so the PDF and the website show
// the same blocks, labels, provenance badges and citations.

import { BLOCKS, parseSrc } from '../lib/units.mjs';
import { BADGE, KIND_LABEL } from '../lib/render.mjs';

const TEXT_MAP = {
  '\\': '\\textbackslash{}',
  '{': '\\{',
  '}': '\\}',
  $: '\\$',
  '&': '\\&',
  '#': '\\#',
  '^': '\\textasciicircum{}',
  _: '\\_',
  '%': '\\%',
  '~': '\\textasciitilde{}',
  '§': '$\\S$',
  '·': '$\\cdot$',
  '…': '\\dots{}',
  '“': '``',
  '”': "''",
  '‘': '`',
  '’': "'",
  '–': '--',
  '—': '---',
  ' ': '~',
  '−': '$-$',
  '×': '$\\times$',
  '≤': '$\\le$',
  '≥': '$\\ge$',
  '→': '$\\to$',
};

export const escapeTex = (s) => String(s).replace(/[\\{}$&#^_%~§·…“”‘’–—\u00a0−×≤≥→]/g, (c) => TEXT_MAP[c]);

export const texId = (s) => String(s).replace(/[^A-Za-z0-9.:-]/g, '-');

// ctx: { works: Map, unitInDoc(id) -> bool, unitTitle(id) -> string|null }
export function citeTex(ctx, srcs) {
  return srcs
    .map((s) => {
      const w = ctx.works.get(s.work);
      const label = `\\hyperlink{bib:${texId(s.work)}}{${escapeTex(w ? w.short : s.work)}}`;
      return s.loc ? `${label}, ${escapeTex(s.loc)}` : label;
    })
    .join('; ');
}

export function serialize(node, ctx, unit) {
  const kids = (n) => (n.children || []).map((c) => serialize(c, ctx, unit)).join('');
  switch (node.type) {
    case 'root':
      return kids(node);
    case 'yaml':
      return '';
    case 'paragraph':
      return `${kids(node)}\n\n`;
    case 'text':
      return escapeTex(node.value);
    case 'emphasis':
      return `\\emph{${kids(node)}}`;
    case 'strong':
      return `\\textbf{${kids(node)}}`;
    case 'delete':
      return kids(node);
    case 'inlineMath':
      return `$${node.value}$`;
    case 'math':
      return `\\[\n${node.value}\n\\]\n\n`;
    case 'inlineCode':
      return `\\texttt{${escapeTex(node.value)}}`;
    case 'code':
      return `\\begin{verbatim}\n${node.value}\n\\end{verbatim}\n\n`;
    case 'break':
      return '\\\\\n';
    case 'thematicBreak':
      return '\\medskip\\noindent\\rule{\\linewidth}{0.4pt}\\medskip\n\n';
    case 'heading':
      return `\\paragraph*{${kids(node)}}\n`;
    case 'blockquote':
      return `\\begin{quote}\n${kids(node)}\\end{quote}\n\n`;
    case 'list': {
      const env = node.ordered ? 'enumerate' : 'itemize';
      return `\\begin{${env}}\n${node.children.map((li) => `\\item ${kids(li).trim()}\n`).join('')}\\end{${env}}\n\n`;
    }
    case 'link':
      return `\\href{${node.url.replace(/[%#]/g, (c) => `\\${c}`)}}{${kids(node)}}`;
    case 'table': {
      const cols = node.children[0]?.children.length || 1;
      const rows = node.children.map((row) => row.children.map((cell) => kids(cell)).join(' & ') + ' \\\\');
      return `\\begin{center}\\begin{tabular}{${'l'.repeat(cols)}}\n\\toprule\n${rows[0]}\n\\midrule\n${rows.slice(1).join('\n')}\n\\bottomrule\n\\end{tabular}\\end{center}\n\n`;
    }
    case 'textDirective':
    case 'leafDirective':
      if (node.name === 'ref') {
        const target = node.attributes.to;
        const text = node.children.length ? kids(node) : escapeTex(ctx.unitTitle(target) ?? target);
        return ctx.unitInDoc(target) ? `\\hyperref[unit:${texId(target)}]{${text}}` : text;
      }
      if (node.name === 'cite') {
        const label = node.children.length ? `${kids(node)} ` : '';
        return `${label}(${citeTex(ctx, [{ work: node.attributes.work, loc: node.attributes.loc || '' }])})`;
      }
      return kids(node);
    case 'containerDirective': {
      if (!BLOCKS[node.name]) return kids(node);
      const attrs = node.attributes || {};
      const children = [...node.children];
      const title = children[0]?.data?.directiveLabel ? kids(children.shift()) : '';
      const label = attrs.label || (node.name === 'statement' ? KIND_LABEL[unit.kind] || 'Theorem' : BLOCKS[node.name].label);
      const srcs = parseSrc(attrs.src);
      const srcLine = srcs.length ? `${attrs.provenance === 'quoted' ? 'Quoted from' : 'Adapted from'} ${citeTex(ctx, srcs)}` : '';
      const body = children.map((c) => serialize(c, ctx, unit)).join('');
      return `\\begin{hbblock}{${node.name}}{${escapeTex(label)}}{${title}}{${BADGE[attrs.provenance]}}{${srcLine}}\n${body.trim()}\n\\end{hbblock}\n\n`;
    }
    default:
      return kids(node);
  }
}
