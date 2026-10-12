// One formatting of works.yaml records, shared by the website and the LaTeX output.

const joinAuthors = (a) => (a.length <= 2 ? a.join(' and ') : `${a.slice(0, -1).join(', ')}, and ${a.at(-1)}`);

// Returns segments [{text, italic?}] so each renderer can apply its own markup.
export function workSegments(w) {
  const segs = [{ text: `${joinAuthors(w.authors)} (${w.year}). ` }, { text: w.title, italic: true }, { text: '. ' }];
  const tail = [w.series, w.edition, `${w.place ? `${w.place}: ` : ''}${w.publisher}`, w.isbn ? `ISBN ${w.isbn}` : null].filter(Boolean);
  segs.push({ text: `${tail.join('. ')}.` });
  if (w.note) segs.push({ text: ` Note: ${w.note.trim()}` });
  return segs;
}

// Works cited by a set of units, in bibliography order (authors' surname, then year).
export function citedWorks(units, works) {
  const ids = new Set();
  for (const u of units) for (const s of u.sources) ids.add(s.work);
  return [...ids]
    .map((id) => works.get(id))
    .filter(Boolean)
    .sort((a, b) => a.short.localeCompare(b.short));
}
