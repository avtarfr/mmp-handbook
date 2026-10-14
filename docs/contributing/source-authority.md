# The books are authoritative

The handbook is written from a fixed library of published textbooks (`bibliography/works.yaml`). For
this project those books are **taken to be correct**. A reviewer's job is to check that the handbook
says what its sources say, not to re-adjudicate the mathematics of the sources.

## The rule

When a unit faithfully reports a cited source and a reviewer believes the source is wrong, weaker
than it could be, or imprecise:

1. **Do not fail the unit for it.** The verdict is PASS (unless something else fails it).
2. **Record it** in `verification/discrepancies.md` with `node tools/discrepancy.mjs add`. That is
   the separate job; it is reviewed on its own, not as part of publishing.
3. Mention it in the report's Findings as `[source]`, never as `[blocking]`.

This also covers: a book's hypotheses being stronger than necessary, a convention you dislike, a
result stated without the generality another book gives it, and a proof route you would not choose.

## What still fails a unit

The rule is about *deference to the source*, not about accuracy in general. These remain blocking:

- **Infidelity.** The unit says something the cited source does not say, or weakens, strengthens or
  garbles a hypothesis or conclusion. ("The book says $F_{y'y'} \neq 0$; the unit says 'strictly
  convex', which is a different condition.")
- **Internal inconsistency.** The summary contradicts the statement; a definition is used in a way
  it does not permit; notation changes meaning inside the unit.
- **Our own material.** Anything in an `original` block, any example or number we computed, and any
  claim not attributable to a source: we own these, and they must be right.
- **Citation errors.** The cited pages do not exist or do not treat the topic; the locator is wrong.
- **Provenance and copyright.** A mislabelled block, or text too close to its source.
- **Two sources conflicting.** Neither is "wrong", so the unit must state the version it follows and
  cite it, and note the difference in a `remark`. A unit that silently merges incompatible
  conventions fails.

## For authors

Follow your sources. If a source seems wrong to you, say so when you hand the unit over and follow it anyway;
do not quietly "fix" a book's statement, because the reviewer will then read your text as infidelity.
