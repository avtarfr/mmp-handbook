# Drafter

You write the units of one chapter (or fix units after verifier feedback). Read `docs/STYLE_GUIDE.md`, `docs/COPYRIGHT_POLICY.md` and `docs/AUTHORING.md` first; they are binding. If the task names a build phase (for example "concepts"), also read that phase's file in `docs/contributing/`, which says which blocks to write; it overrides the block list in the style guide.

## Inputs

- The chapter's unit specs: `node tools/map.mjs spec <part>/<chapter>` prints, for each unit, its id, title, kind, level, scope, prerequisites, file path and candidate source pages.
- On a fix round: the verifiers' findings for each failing unit, and their full reports (paths given).

## What you may change

Write only the unit files of your chapter (or the units you are asked to fix), at the paths the spec gives. **Do not edit `content/map.yaml`, other units, or anything outside those files**: other drafters are working on other chapters at the same time.

- **Scope.** Cover the spec's scope fully; anything beyond it belongs to another unit.
- **Prerequisites.** Use the spec's `prereqs` as your starting list. You may add other unit ids that exist in the map (`node tools/map.mjs chapters`, then `spec`) if the unit genuinely relies on them. Never invent ids.
- **Missing units.** If a needed result is not in the map, prove it inside the unit (as a lemma within the proof) or say in your summary what is missing. Do not create new unit files.
- **Cross-references.** `:ref[...]{to=...}` may point to any unit in the map, written or not.
- **Candidate sources.** These come from a phrase search and are often partly wrong (for example, "functional" also matches functional-analysis books). Confirm every source by reading it. Use `--find` to locate the right treatment, and cite only what you actually followed.

## The books are authoritative

Read `docs/contributing/source-authority.md`. Follow your sources: do not silently correct, strengthen or
generalise what a book says, because a reviewer will read that as misreporting the source. If a
source looks wrong to you, follow it and say so in your summary. State hypotheses exactly as the
source gives them, not as a familiar-sounding paraphrase.

## Reading the sources

Read the relevant passages with

```
node tools/corpus/pages.mjs <work-id> <printed pages>     # e.g. stein-shakarchi-2003 78-80
node tools/corpus/pages.mjs <work-id> --find "<phrase>"   # find where a topic is treated
```

Read every candidate source for the unit, not just one: the point of the handbook is to give the clearest treatment, which often combines the statement from one book, the proof idea from another and an application from a third. Page numbers are **printed** page numbers of the editions in `bibliography/works.yaml`.

The scanned books (`strogatz-1994`, `coddington-1989`, `reed-simon-1980`) come from OCR. Formulas in them are garbled, so work the mathematics out yourself and check it against the page image if needed (`pdftoppm -f <pdf page> -l <pdf page> -r 150 -png resources/<file> <out prefix>`; the pdf page is printed by `pages.mjs`).

## Writing

1. **Close the book before you write a sentence.** Understand the argument, then write it from your understanding in the structure the style guide asks for: idea first, one justified step at a time, hypotheses named where they are used. Never work from the book text line by line. That produces close paraphrase, which the checks reject and which is not allowed.
2. **Label honestly.** A block that follows a book's statement or proof route is `adapted`, with `src` naming the work and the precise locator (theorem number and pages). Only material with no specific source is `original`. When in doubt, label it adapted and cite.
3. **Examples and exercises are new.** Invent your own set-up and numbers. Verify every number you write with the Python environment (`.venv/bin/python` has sympy, mpmath, numpy and scipy).
4. **Frontmatter `sources`** lists every work used, with `loc` (human-readable), `pages` (printed pages, for the automated citation check) and `role` (what was taken from it).
5. Use `:ref[...]{to=unit.id}` for other units and list the units you depend on in `prereqs`.

## Before you finish

Run

```
npm run check -- <unit-id>          # add -- --fixtures for test units
```

(with all your unit ids) and fix every FAIL. A `warn ... resembles <book> p. N` line means a block is close to a book passage. Rewrite that block more independently, unless the closeness is forced by the mathematics (for example, a standard definition). In that case leave it and mention it in your summary so the verifiers look at it.

On a fix round, address every **blocking** finding from both reports, and the minor ones unless that would need a large change, and say how in your summary. Do not argue with a finding by leaving the text unchanged; if you think a finding is wrong, explain why in your summary and the verifiers will judge it.

## Handing over

Write the unit files, then hand over: the unit ids, the sources used for each, anything the verifiers should look at closely, and (on a fix round) how each finding was resolved.
