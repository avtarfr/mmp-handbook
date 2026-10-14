// Chapter and part PDFs via pdflatex.
//
//   node tools/latex/build.mjs [--fixtures] [--public] [--out dist/pdf]
//
// Writes <out>/<part>/<chapter>.pdf and <out>/<part>.pdf. Also exports compileUnits() for the
// compile check, which builds each unit alone so errors point at the right file.

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdirSync, writeFileSync, readFileSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOT } from '../lib/works.mjs';
import { loadCatalog } from '../lib/catalog.mjs';
import { citedWorks, workSegments, sourceLocator } from '../lib/bib.mjs';
import { BADGE, KIND_LABEL } from '../lib/render.mjs';
import { serialize, escapeTex, texId } from './serialize.mjs';

const run = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const PREAMBLE = readFileSync(join(HERE, 'preamble.tex'), 'utf8');

function unitTex(unit, ctx) {
  const meta = [KIND_LABEL[unit.kind], unit.level === 'advanced' ? 'advanced' : null].filter(Boolean).join(' · ');
  const prereqs = unit.prereqs.length
    ? ` · Prerequisites: ${unit.prereqs.map((p) => (ctx.unitInDoc(p) ? `\\hyperref[unit:${texId(p)}]{${escapeTex(ctx.unitTitle(p) ?? p)}}` : escapeTex(ctx.unitTitle(p) ?? p))).join(', ')}`
    : '';
  let out = `\\hbunit{${texId(unit.id)}}{${escapeTex(unit.title)}}{${escapeTex(meta).replace('·', '$\\cdot$')}${prereqs.replace(/·/g, '$\\cdot$')}}{${BADGE[unit.provenance]}}\n`;
  if (unit.summary) out += `\\emph{${escapeTex(unit.summary)}}\n\n`;
  out += serialize(unit.tree, ctx, unit);
  if (unit.sources.length) {
    out += `{\\footnotesize\\textbf{Sources.} ${unit.sources
      .map((s) => `\\hyperlink{bib:${texId(s.work)}}{${escapeTex(ctx.works.get(s.work)?.short ?? s.work)}}, ${escapeTex(sourceLocator(s))}`)
      .join('; ')}.\\par}\n`;
  }
  return out + '\n';
}

function bibliographyTex(works) {
  if (!works.length) return '';
  const items = works.map(
    (w) => `\\item[] \\hypertarget{bib:${texId(w.id)}}{}${workSegments(w).map((s) => (s.italic ? `\\emph{${escapeTex(s.text)}}` : escapeTex(s.text))).join('')}`,
  );
  return `\\section*{References}\n\\addcontentsline{toc}{section}{References}\n\\begin{itemize}[leftmargin=1.5em,itemindent=-1.5em]\n${items.join('\n')}\n\\end{itemize}\n`;
}

const NOTICE = String.raw`\noindent\textbf{About this document.} Every block carries a provenance badge.
\hbbadge{Original} blocks were written for this handbook.
\hbbadge{Adapted} blocks are rewritten in our own words; the works they follow are cited at the block and listed under References.
\hbbadge{Quoted} blocks are short verbatim quotations with their source and page.

\medskip\noindent Text licensed under CC BY-SA 4.0 (\url{https://creativecommons.org/licenses/by-sa/4.0/}), except Quoted blocks, which remain under their original copyright.`;

// doc: { title, subtitle, chapters: [{ title, sections: [{ title, units }] }] }
export function documentTex(doc, catalog) {
  const all = doc.chapters.flatMap((c) => c.sections.flatMap((s) => s.units));
  const inDoc = new Set(all.map((u) => u.id));
  const ctx = {
    works: catalog.works,
    unitInDoc: (id) => inDoc.has(id),
    unitTitle: (id) => catalog.units.get(id)?.title ?? null,
  };
  const multi = doc.chapters.length > 1;
  let body = '';
  for (const ch of doc.chapters) {
    if (multi) body += `\\chapter{${escapeTex(ch.title)}}\n`;
    for (const sec of ch.sections) {
      body += `\\section{${escapeTex(sec.title)}}\n`;
      for (const u of sec.units) body += unitTex(u, ctx);
    }
  }
  return `${PREAMBLE}
\\hypersetup{pdftitle={${escapeTex(doc.title)}}}
\\begin{document}
\\begin{titlepage}
\\vspace*{30mm}
{\\small\\scshape ${escapeTex(doc.subtitle)}}\\par\\medskip
{\\Huge\\bfseries ${escapeTex(doc.title)}\\par}
\\vfill
${NOTICE}
\\end{titlepage}
\\tableofcontents
\\clearpage
${multi ? '' : `\\renewcommand{\\thesection}{\\arabic{section}}\\markboth{${escapeTex(doc.title)}}{}`}
${body}
${bibliographyTex(citedWorks(all, catalog.works))}
\\end{document}
`;
}

// Compile a .tex string; returns { ok, pdf, errors }.
export async function compileTex(tex, workDir, name) {
  mkdirSync(workDir, { recursive: true });
  const texFile = join(workDir, `${name}.tex`);
  writeFileSync(texFile, tex);
  const args = ['-interaction=nonstopmode', '-halt-on-error', '-file-line-error', `-output-directory=${workDir}`, texFile];
  let ok = true;
  for (let pass = 0; pass < 2 && ok; pass++) {
    try {
      await run('pdflatex', args, { cwd: workDir, maxBuffer: 1 << 26 });
    } catch {
      ok = false;
    }
  }
  const log = existsSync(join(workDir, `${name}.log`)) ? readFileSync(join(workDir, `${name}.log`), 'utf8') : '';
  const errors = ok ? [] : (log.match(/^.*:\d+: .*$|^! .*$/gm) || ['pdflatex failed (no error line in log)']).slice(0, 5);
  return { ok, pdf: join(workDir, `${name}.pdf`), errors };
}

// Compile each unit on its own (the compile check). Returns Map<unitId, errors[]>.
export async function compileUnits(units, catalog, { jobs = 6 } = {}) {
  const results = new Map();
  const queue = [...units];
  const tmp = join(ROOT, 'tmp', 'latex-check');
  await Promise.all(
    Array.from({ length: jobs }, async () => {
      while (queue.length) {
        const u = queue.shift();
        const tex = documentTex({ title: u.title, subtitle: 'Compile check', chapters: [{ title: u.title, sections: [{ title: u.title, units: [u] }] }] }, catalog);
        const r = await compileTex(tex, join(tmp, texId(u.id)), 'unit');
        results.set(u.id, r.errors);
      }
    }),
  );
  return results;
}

export async function buildPdfs(catalog, outDir) {
  const tmp = join(ROOT, 'tmp', 'latex');
  const built = [];
  const subtitle = catalog.fixtures ? 'Mathematical Methods Handbook · test fixtures' : 'Mathematical Methods Handbook';
  for (const { part, chapters } of catalog.tree) {
    const docs = chapters.map((c) => ({
      file: join(outDir, part.id, `${c.chapter.id}.pdf`),
      name: `${part.id}--${c.chapter.id}`,
      doc: { title: c.chapter.title, subtitle: `${subtitle} · ${part.title}`, chapters: [{ title: c.chapter.title, sections: c.sections.map((s) => ({ title: s.section.title, units: s.units })) }] },
    }));
    docs.push({
      file: join(outDir, `${part.id}.pdf`),
      name: `${part.id}`,
      doc: { title: part.title, subtitle, chapters: chapters.map((c) => ({ title: c.chapter.title, sections: c.sections.map((s) => ({ title: s.section.title, units: s.units })) })) },
    });
    for (const d of docs) {
      const r = await compileTex(documentTex(d.doc, catalog), join(tmp, d.name), 'doc');
      if (!r.ok) throw new Error(`LaTeX failed for ${d.name}:\n  ${r.errors.join('\n  ')}`);
      mkdirSync(dirname(d.file), { recursive: true });
      copyFileSync(r.pdf, d.file);
      built.push(d.file);
    }
  }
  return built;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const outIdx = args.indexOf('--out');
  const out = join(ROOT, outIdx >= 0 ? args[outIdx + 1] : join('dist', 'pdf'));
  const catalog = loadCatalog({ fixtures: args.includes('--fixtures'), publicOnly: args.includes('--public') });
  // A file that does not parse cannot be published, but it must not stop the units that do. Only
  // errors in files this build includes are fatal; the rest are warnings.
  const included = new Set(catalog.includedUnits.map((u) => u.rel));
  const fatal = catalog.errors.filter((x) => included.has(x.file));
  const ignorable = catalog.errors.filter((x) => !included.has(x.file));
  if (ignorable.length) console.error(`${ignorable.length} file(s) outside this build have errors (not published): ${[...new Set(ignorable.map((x) => x.file))].join(', ')}`);
  if (fatal.length) {
    fatal.forEach((x) => console.error(`${x.file}: ${x.msg}`));
    process.exit(1);
  }
  rmSync(out, { recursive: true, force: true });
  const files = await buildPdfs(catalog, out);
  files.forEach((f) => console.log(`wrote ${f.replace(ROOT + '/', '')}`));
}
