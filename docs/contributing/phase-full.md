# Adding proofs and examples to an existing unit

A unit written in the concepts phase has its definitions, statements, methods, notes and remarks.
This pass adds the layers that were deferred. **Keep what is there**; you are adding, not rewriting.

## What to add

| Block | Where | Content |
|---|---|---|
| `idea` | immediately before `proof` | Two to four sentences: what the proof does, before any detail. |
| `proof` | after the `statement` it proves | The steps, as `docs/STYLE_GUIDE.md` requires: one justified step per paragraph or list item, every hypothesis named where it is used, ending in `$\square$`. |
| `example` | after the proofs | At least one fully worked example with every step and a checkable final number. Theorem and method units must have one. |
| `application` | last | Where this is used in physics or the applied sciences, concretely. |

No `exercise` blocks, in this or any phase.

## What not to change

- Existing `definition`, `statement`, `method`, `note` and `remark` blocks: leave their wording alone
  unless a finding says otherwise. They have already been verified.
- The frontmatter `id`, `title`, `kind` and `level`.
- `summary`: adjust only if it is now wrong.

Add to `prereqs` and `sources` whatever the new blocks need, and nothing else.

## Proofs

- **Rewrite, do not transcribe.** Follow the source's strategy, then write the argument in your own
  structure and notation. The overlap check fails text that tracks a book's wording.
- Where a proof is long, state the lemmas you use and cite the units that hold them. If a step needs
  a result that is nowhere in the map, prove it inline as a lemma.
- A statement the handbook gives without proof (because it is beyond its scope) keeps a `note` saying
  so and citing where the proof is. Do not fake a proof of it.

## Examples

Invent your own, with your own set-up and numbers; do not reproduce a book's exercise or worked
example. Verify every number with `.venv/bin/python` (sympy, mpmath, numpy, scipy) and choose
examples whose answer is checkable in closed form or to several digits.
