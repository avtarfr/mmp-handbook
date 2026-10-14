# Phase 1: concepts

The handbook is built in phases. This phase writes only the **concepts** of every unit; later phases add worked examples, then proofs, then the remaining material, each as its own toggle on the site and in the PDFs. There are **no exercises** in this handbook, in any phase.

## Blocks to write in this phase

| Block | Use |
|---|---|
| `definition` | Every object the unit introduces or relies on, precisely. |
| `statement` | The result, with every hypothesis. Theorem units must have one. Name each result precisely (what is assumed, what is concluded, the exact conditions for equality or uniqueness). |
| `method` | For method units: a numbered recipe a reader can follow, with the conditions under which it works and how it fails. |
| `note` | **What it means.** One to three sentences: what the result or object says in plain terms and when you reach for it. This is the unit's short intuition. |
| `remark` | Where the hypotheses are used and what fails without them, with a counterexample if there is a standard one. Conventions that differ between fields, and which books use which. |
| `table` content | For table units, the table itself, in a `definition` or `note` block, as a Markdown table. |

## Blocks NOT to write in this phase

- `proof`, `idea`: proofs are phase 3. The `statement` must be correct and complete without one. Where the statement is deep, the `note` may say in one sentence which technique proves it, and the source (`sources` in the frontmatter) points the reader to where the proof is.
- `example`: worked examples are phase 2.
- `application`: remaining material, phase 4.
- `exercise`: never. Not allowed in any phase.

Because of that, a concept unit is short: usually 150 to 450 words plus formulas.

## The failure that matters most: a loosely stated hypothesis

In this phase the statement *is* the product, so an imprecise hypothesis is a wrong unit, not a stylistic flaw. Pilot units failed review for exactly this. Write the condition the theorem actually needs, not a familiar-sounding paraphrase of it:

- "strictly convex in $y'$" is **not** the same as "$F_{y'y'} \neq 0$" ($F = y'^4/4 - xy'$ is strictly convex yet has $F_{y'y'} = 0$ at $y' = 0$).
- "smooth" is not "$C^2$"; "integrable" is not "bounded"; "small" is not "$|x| < \delta$ for some $\delta$ depending only on ...".
- Quantify every symbol you introduce, and say where it ranges.
- The one-line `summary` in the frontmatter must agree with the `statement`. A summary that overstates the theorem fails the unit.

If two books state a result under different hypotheses, state the weaker (more general) one you can justify, and note the difference in a `remark`.

## Quality bar (unchanged)

- Everything stated must be **true**, with its hypotheses complete. A concept unit has no proof to catch a wrong statement, so reviewers will try to break it.
- Sources: each `statement` and `definition` that follows a book is `adapted`, cites the work and printed pages, and is written in your own words and structure. Standard definitions often have standard wording; that is fine for a short definition, but do not copy sentences. Frontmatter `sources` lists every work used, with printed pages.
- A unit that follows no particular source is `original`.
- Cross-reference the units that supply a proof or example later with `:ref[...]{to=...}` only to other concept units that exist in the map; do not promise content that is not written yet.
- Prerequisites: list only units this unit's *statements and definitions* use.

## Reviewing a concept unit

There are no proofs or examples to audit, so a review checks:

1. each statement: is it true as written, are all hypotheses present, are the quantifiers and domains right, do conventions match the definitions? Search for counterexamples, including degenerate and boundary cases.
2. each definition: precise, consistent with how the statements use it, no symbol left undefined.
3. each `method`: does the recipe give correct results? Run it on a test case (use `.venv/bin/python`).
4. any numbers or formulas in `table` content: recompute.
5. citations: the pages exist and support what is attributed; provenance labels are honest and adapted blocks are genuinely reworded.

Verdict rules are as in `verifier-a.md` and `verifier-b.md`: any blocking finding fails the unit.

**One reviewer or two.** Chapters where at least 40% of the units are theorems get both verifiers, A and B. Other chapters (mostly definitions, methods and tables) get Verifier B only, who also does the statement-and-definition check above. Verifier A is skipped there.
