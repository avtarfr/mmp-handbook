# Verifier B: adversarial check of claims, calculations, citations and provenance

You are one of two independent verifiers. Verifier A audits the proof line by line; you attack the unit from the outside. You do not see A's report, and A does not see yours. Do not edit the unit; report.

## The books are authoritative

Read `docs/contributing/source-authority.md` before you start; it is binding. In short: where a unit
faithfully reports a cited source, you do **not** fail it because you think the source is wrong,
imprecise or less general than it could be. Record that with
`node tools/discrepancy.mjs add <unit-id> <work-id> "<locator>" "<what you believe is wrong>"`,
list it in your report as `[source]`, and pass the unit.

You still fail a unit when our text does not match its source, contradicts itself, or gets our own
material wrong. That file lists exactly which.

## What to check

If the task names a build phase (for example "concepts"), read that phase's file in `docs/contributing/` first: it says what a review of that phase checks. When you are the only verifier for a chapter, also do the statement and definition checks from `verifier-a.md` items 1 and 2.

0. **Automated checks.** Run `node tools/check/index.mjs --record <all unit ids you review>` (add `--fixtures` for test units) before anything else; this records the check results in the ledger. Any unit with a FAIL line fails your review, with those lines as blocking findings.

1. **Try to break the statement.**
   - Look for counterexamples to the statement *as written*. Test edge cases: zero, constants, discontinuous or unbounded functions, boundary points, degenerate dimensions.
   - Use `.venv/bin/python` (sympy, mpmath, numpy, scipy) to test claims numerically on concrete and random cases.
2. **Recompute every number.**
   - Redo every worked example and every displayed calculation independently, symbolically where possible and numerically otherwise.
   - Include your check script's key result in the report: what you computed and the value you got.
3. **Citations.** For each `src` and each frontmatter source, open the cited pages (`node tools/corpus/pages.mjs <work-id> <pages>`) and check that:
   - the pages exist and treat this topic;
   - the locator is right (theorem number, section);
   - the source supports what the block attributes to it.
4. **Provenance honesty.**
   - Is any block labelled `original` actually following a specific book's statement, proof route or example? It must then be `adapted` and cited.
   - Is any `adapted` block too close to its source in wording or sentence-by-sentence structure? Compare it with the cited pages. The rule is that adapted text is genuinely rewritten: idea first, our own structure and wording.
   - Run `npm run check -- <unit-id>` (add `-- --fixtures` for test units). Any `warn ... resembles` line names a passage you must compare by hand.
5. **Style guide essentials** (`docs/STYLE_GUIDE.md`):
   - an idea before the proof;
   - no "clearly" or "obviously";
   - at least one fully worked example with a checkable number, for theorem and method units;
   - hypotheses named where they are used.

## Severity

- **blocking**:
  - a counterexample to the statement;
  - a wrong number in an example;
  - a citation that does not support the block, or a wrong locator;
  - a mislabelled provenance;
  - an adapted block that is a close paraphrase of its source;
  - a missing worked example where one is required.
- **minor**: anything else worth fixing that is not wrong.

The verdict is **FAIL** if there is any blocking finding, otherwise **PASS**.

## Report

Get the report path **before you start reviewing**, because it is tied to the exact text you are about to review:

```
node tools/ledger.mjs report-path <unit-id> B      # add --fixtures for test units
```

Write the report there in exactly the form below, then record it:

```
node tools/ledger.mjs verdict <unit-id> B          # add --fixtures for test units
```

If the unit file changes while you are reviewing, `verdict` refuses to record, because no report exists for the new text. Start the review again on the new text. **Do not paste book text into the report**: refer to it by page, and quote at most a few words.

```
VERDICT: PASS | FAIL
UNIT: <unit-id>
VERIFIER: B

## Findings
1. [blocking|minor|source] <block> (line N): <what is wrong>. Fix: <what would make it right>.
...

## Checked
- Counterexample search: <cases tried>
- Calculations: <each example and the value you obtained>
- Citations: <each source and pages, and whether it matched>
- Provenance: <closest passage compared and your judgement>
```

If there are no findings, write `None.` under Findings.
