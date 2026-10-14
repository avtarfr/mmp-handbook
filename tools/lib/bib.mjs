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

// The locator a reader sees for one of a unit's sources: section numbers and pages, nothing else.
//
// A source entry also carries `loc` and `role`, free-text notes on what was taken from where. They
// exist for the verifiers, who must check a unit against exactly the passages it draws on, and
// they are deliberately thorough -- some walk through a book section by section. That is the right
// record for review and the wrong thing to publish: a reader needs a citation, and a detailed
// précis of a book's sections is the book's structure in other words. So the notes stay in the
// unit file and only this is rendered.
//
// Section numbers are read out of `loc` (it is the only place they are recorded); pages come from
// the structured `pages` field, which every source has.
export function sourceLocator(s) {
  const secs = [];
  for (const m of String(s.loc || '').matchAll(/§\s?\d+(?:\.\d+)*(?:\s?[-–]\s?\d+(?:\.\d+)*)?|\b(?:Ch\.|Chapter)\s?\d+|\bAppendix\s[A-Z]\b/g)) {
    const ref = m[0].replace(/^Chapter\s?/, 'Ch. ').replace(/\s?[-–]\s?/, '–').replace(/^§\s/, '§');
    if (!secs.includes(ref)) secs.push(ref);
  }
  const pages = String(s.pages ?? '').trim().replace(/(\d)\s*-\s*(\d)/g, '$1–$2');
  const parts = [];
  if (secs.length) parts.push(secs.length > 6 ? `${secs.slice(0, 6).join(', ')} and others` : secs.join(', '));
  if (pages) parts.push(`${/[–,]/.test(pages) ? 'pp.' : 'p.'} ${pages}`);
  return parts.join(', ');
}
