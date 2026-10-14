# Mathematical Methods Handbook

A website-book of the mathematics physicists and applied scientists use. It is split into small units you can read on their own, select, and download as a PDF.

The text is written from a library of 19 textbooks, with Arfken, Weber & Harris, *Mathematical Methods for Physicists* (7th ed.) as the spine. Every block of every unit is labelled **Original** (written here), **Adapted** (our wording, citing the book and pages it follows) or **Quoted** (short excerpt, cited). Software checks every unit against the full text of all the books before it can be published. See [docs/COPYRIGHT_POLICY.md](docs/COPYRIGHT_POLICY.md).

## Setup

Needs Node 22+, poppler-utils (`pdftotext`, `pdftoppm`), tesseract, and TeX Live with pdflatex.

```sh
npm install
npx playwright install chromium        # for the browser tests
python3 -m venv .venv && .venv/bin/pip install -r requirements-verify.txt   # verifiers' calculations
```

Put the source PDFs in `resources/` (named as in `bibliography/works.yaml`). Then extract their text and page numbering once:

```sh
npm run corpus
```

`resources/` and `.cache/` stay local: they are gitignored, and a pre-commit hook refuses to commit them. Enable the hook in a fresh clone with `git config core.hooksPath .githooks`.

## Everyday commands

```sh
npm run check                  # all checks on all units (add -- --fixtures for the test units)
npm run dev                    # build the test units and serve them at http://localhost:4321/
npm run site && npm run serve  # development site with every unit and its status
npm run build                  # public site: verified units only, plus chapter PDFs
npm test                       # safeguard tests and end-to-end browser test
```

## How it fits together

| Path | Role |
|---|---|
| `content/map.yaml`, `content/**/*.md` | The topic map and the units: Markdown with `:::block{provenance=...}` directives |
| `bibliography/` | The exact editions held, and generated printed-to-PDF page offsets |
| `tools/corpus/` | Text extraction and OCR, page offsets, `pages.mjs` for reading cited pages |
| `tools/check/` | Schema and provenance, prerequisite graph, verbatim and paraphrase overlap, citations |
| `tools/latex/` | Markdown to LaTeX: chapter and part PDFs |
| `tools/site/`, `site/assets/` | Static site generator, PDF basket, Paged.js print view |
| `tools/ledger.mjs`, `verification/` | The publication gate's ledger and verifier reports |
| `docs/` | Copyright policy, privacy policy, style guide and authoring guide |
| `content/map.yaml`, `tools/map.mjs` | Topic map with unit specs; validation, candidate source pages, per-chapter specs |

## Licence

The handbook's text is licensed under CC BY-SA 4.0; Quoted blocks and the cited books are not
covered. The software in `tools/`, `site/` and `tests/` is MIT. See
[LICENSE.md](LICENSE.md), [LICENSES/CC-BY-SA-4.0.txt](LICENSES/CC-BY-SA-4.0.txt) and
[LICENSES/MIT.txt](LICENSES/MIT.txt).

Start with [docs/AUTHORING.md](docs/AUTHORING.md), which covers writing a unit and taking it through the publication gate.
