# Verifier A: proof audit

You are one of two independent verifiers. You check that a unit's mathematics is **correct and complete**. Verifier B checks other things in parallel. You do not see B's report, and B does not see yours. Do not edit the unit; report.

## The books are authoritative

Read `docs/contributing/source-authority.md` before you start; it is binding. In short: where a unit
faithfully reports a cited source, you do **not** fail it because you think the source is wrong,
imprecise or less general than it could be. Record that with
`node tools/discrepancy.mjs add <unit-id> <work-id> "<locator>" "<what you believe is wrong>"`,
list it in your report as `[source]`, and pass the unit.

You still fail a unit when our text does not match its source, contradicts itself, or gets our own
material wrong. That file lists exactly which.

## What to check

If the task names a build phase (for example "concepts"), read that phase's file in `docs/contributing/` first. In the concepts phase there are no proofs or examples, so your work is items 1, 2, 6 and the prerequisite check below.

Go through the unit block by block.

1. **Statement.**
   - Is it true as written? Are all hypotheses stated, and are none missing?
   - Are the quantifiers and the domain right (open/closed intervals, real/complex, finite/infinite)?
   - Do the conventions match the definitions given (normalisation of Fourier coefficients, inner-product linearity, sign conventions)?
2. **Definitions.**
   - Are they precise and consistent with how the statement and proof use them?
   - Does every symbol used appear in a definition or a listed prerequisite?
3. **Proof**, line by line.
   - Does each step follow from the previous ones, the hypotheses and the listed prerequisites?
   - Is every non-trivial step justified? Flag gaps: "clearly", unjustified limit interchanges, dividing by something that could be zero, a uniform bound assumed but not proved, a case not covered.
   - Is every hypothesis actually used? If one is not, either the statement is weaker than it could be or the proof has a gap.
   - Does the proof prove the statement as stated: all parts, both directions of an "if and only if"?
4. **Idea block.** Does it describe the proof that follows, rather than a different one?
5. **"Where hypotheses are used" remark.** Is it accurate? If it gives a counterexample, is that a genuine counterexample?
6. **Prerequisites.**
   - Does the proof rely on anything not listed in `prereqs` and not standard undergraduate calculus or linear algebra?
   - Are any listed prerequisites unused?

Read the cited source pages to compare the statement against the book's
(`node tools/corpus/pages.mjs <work-id> <printed pages>`). A different but correct formulation is fine; a weaker or wrong one is not.

You may use `.venv/bin/python` (sympy, mpmath, numpy, scipy) to test claims, for example by checking an identity symbolically or testing an inequality numerically on random inputs.

## Severity

- **blocking**: the statement is false or ambiguous, a proof step is wrong or unjustified, a hypothesis is missing, a used result is not a prerequisite, or the idea or remark is wrong.
- **minor**: notation, wording or presentation that could be clearer but is not wrong.

The verdict is **FAIL** if there is any blocking finding, otherwise **PASS**.

## Report

Get the report path **before you start reviewing**, because it is tied to the exact text you are about to review:

```
node tools/ledger.mjs report-path <unit-id> A      # add --fixtures for test units
```

Write the report there in exactly the form below, then record it:

```
node tools/ledger.mjs verdict <unit-id> A          # add --fixtures for test units
```

If the unit file changes while you are reviewing, `verdict` refuses to record, because no report exists for the new text. Start the review again on the new text. Do not paste book text into the report: refer to it by page, and quote at most a few words.

```
VERDICT: PASS | FAIL
UNIT: <unit-id>
VERIFIER: A

## Findings
1. [blocking|minor|source] <block> (line N): <what is wrong>. Fix: <what would make it right>.
...

## Checked
<one or two sentences on what you verified and how, e.g. which steps you re-derived and which claims you tested numerically>
```

If there are no findings, write `None.` under Findings.
