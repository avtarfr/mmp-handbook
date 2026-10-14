# Authoring and publishing units

## Where things live

| Path | What |
|---|---|
| `content/map.yaml` | The topic map: part → chapter → section → unit specs (title, kind, scope, prerequisites, keywords). Every unit must be placed here. |
| `content/candidates.yaml` | Generated: likely source pages for every unit in the map. |
| `content/<part>/<unit-id>.md` | One file per unit; the file name is the unit id. |
| `content/_fixtures/` | Test units, never published. Build them with `--fixtures`. |
| `bibliography/works.yaml` | The library: one record per book, for the exact edition held. |
| `bibliography/page-offsets.yaml` | Generated: printed page ↔ PDF page for every book. |
| `verification/ledger.json` | Which exact content of each unit passed the checks and both verifiers. |
| `verification/reports/` | The verifiers' reports. |
| `resources/`, `.cache/` | The source PDFs and the text extracted from them. **Local only: never committed or deployed.** |

## A unit file

```md
---
id: fourier.series.parseval          # dotted, lowercase; must match the file name
title: Parseval's identity
kind: theorem                        # overview | definition | theorem | method | example | application | table
level: core                          # core | advanced
summary: One sentence on what the reader gets.
prereqs: [fourier.series.bessel-inequality]
provenance: adapted                  # original if every block is original, otherwise adapted
sources:
  - work: stein-shakarchi-2003       # an id from bibliography/works.yaml
    loc: "Ch. 3, §1, Thm 1.3, pp. 79–80"   # human-readable locator
    pages: "79-80"                   # printed pages, machine-checked
    role: statement; proof route
---

:::statement{provenance=adapted src="stein-shakarchi-2003:Ch. 3, Thm 1.3, p. 80"}
...
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:pp. 79–80"}
...
:::

:::example{provenance=original}
...
:::
```

Rules (checked by `npm run check`):

- The body is made only of `:::block` directives. Allowed blocks: `definition`, `statement`, `idea`, `proof`, `method`, `example`, `application`, `remark`, `note`, `quote`. There are no exercises. The role-specific briefs for writing and reviewing a unit are in `docs/contributing/`.
- Every block has `provenance=original|adapted|quoted`.
- `adapted` and `quoted` blocks have `src="work-id:locator"` (several separated by `;`), and each work is also listed in the frontmatter `sources`.
- Verbatim text appears only in `:::quote{provenance=quoted ...}` blocks of at most 60 words.
- A block title goes in brackets: `:::statement[Bessel's inequality]{provenance=...}`.
- A block's heading can be changed with `label="Lemma"`.
- Cross-reference another unit with `:ref[text]{to=unit.id}` (empty text uses the unit's title).
- Cite inline with `:cite[optional text]{work=work-id loc="p. 12"}`.

## Commands

| Command | What it does |
|---|---|
| `node tools/map.mjs validate` | Check the topic map: ids, kinds, prerequisites exist, no cycles. |
| `node tools/map.mjs chapters` / `spec <part>/<chapter>` | List chapters; print a chapter's unit specs with candidate source pages. |
| `node tools/map.mjs candidates` | Regenerate `content/candidates.yaml` by searching the corpus for each unit's keywords. |
| `npm run corpus` | Extract the text of every book into `.cache/corpus/` (OCR for scans) and recompute page offsets. Run after adding a book. |
| `npm run check [-- --fixtures] [-- unit-id ...]` | Schema, provenance, graph, KaTeX, LaTeX, verbatim and paraphrase checks, plus citation-page warnings. `-- --record` writes the results to the ledger. |
| `npm run ledger -- status` | Publication status of every unit. |
| `npm run ledger -- report-path <id> <A\|B>` | Where a verifier writes its report (the path contains the hash of the reviewed text). |
| `npm run ledger -- verdict <id> <A\|B>` | Record the verdict stated in that report. |
| `npm run ledger -- release <id>` | Clear a needs-human hold (only after a human has reviewed the unit). |
| `npm run pdf [-- --fixtures] [-- --public]` | Chapter and part PDFs into `dist/pdf/`. |
| `npm run site` | Development site (all units, with status badges) into `dist/site/`. |
| `npm run build` | Public site: only verified units, with their PDFs. |
| `npm run dev` | Build the fixtures and serve them at http://localhost:4321/. |
| `npm test` | Tests for the safeguards and an end-to-end browser test. |

## The publication gate

A unit appears on the public site only when its **current** content (by SHA-256) has:

1. passed `npm run check -- --record`, and
2. a `pass` verdict from **both** verifiers, A and B, recorded against that same content.

Any edit to the file invalidates the record, so the unit goes back through the gate. If the verifiers fail a unit twice (two rounds), it is **held** (`needs-human`). The hold survives further edits until a person reviews the unit and runs `ledger release`.

## Adding a book

1. Put the PDF in `resources/`.
2. Add a record to `bibliography/works.yaml`: exact edition, `text: text` if the PDF has a text layer, `ocr` if it is a scan.
3. Run `npm run corpus`.
4. Check its line in `bibliography/page-offsets.yaml`: the printed page numbers should line up with the book's.
