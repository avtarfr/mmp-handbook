# Licence

## Handbook text

The text of the Mathematical Methods Handbook is licensed under the
**Creative Commons Attribution-ShareAlike 4.0 International licence (CC BY-SA 4.0)**.
The full legal code is in [LICENSES/CC-BY-SA-4.0.txt](LICENSES/CC-BY-SA-4.0.txt) and at
<https://creativecommons.org/licenses/by-sa/4.0/legalcode>.

This covers:

- every unit in `content/` (statements, definitions, proofs, methods, examples, exercises, applications, remarks) and the topic map;
- the generated website and PDFs built from them;
- `docs/COPYRIGHT_POLICY.md`, `docs/STYLE_GUIDE.md` and `docs/AUTHORING.md`.

You may share and adapt this material for any purpose, provided you give appropriate credit ("Mathematical Methods Handbook"), link to the licence, indicate if changes were made, and distribute your contributions under the same licence.

## What the licence does not cover

- **Quoted blocks.** Blocks labelled *Quoted* are short excerpts from the cited works. They remain under their authors' and publishers' copyright and are reproduced only as cited quotations. They are not licensed under CC BY-SA.
- **The cited works.** Blocks labelled *Adapted* are our own wording, and the licence covers that wording. It grants no rights in the books they cite; each Adapted block names the work and pages it follows. The books themselves are not distributed with this project.
- **Bibliographic data.** Titles, author names, ISBNs and page references in `bibliography/` are factual references, not licensed content.
- **The software.** The code in `tools/`, `site/` and `tests/` is not covered by this
  licence. It is licensed separately under the **MIT licence**, whose text is in
  [LICENSES/MIT.txt](LICENSES/MIT.txt).

  Two licences, because they do different jobs. CC BY-SA 4.0 suits prose and keeps the handbook's
  text open under the same terms downstream; Creative Commons itself recommends against using CC
  licences for software. MIT lets anyone reuse the build and verification tooling — in particular
  the provenance gate in `tools/check/` — and its warranty disclaimer matters for a toolchain that
  makes copyright judgements: reusing these checks is no assurance that someone else's text clears
  copyright, and the disclaimer says so.
