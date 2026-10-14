# Writing and reviewing units

The rules every unit is written and reviewed against. The general ones -- block structure, voice,
provenance labels, the copyright limits -- are in `docs/STYLE_GUIDE.md`, `docs/AUTHORING.md` and
`docs/COPYRIGHT_POLICY.md`. These files are the role-specific briefs that sit on top of them, and the
verification reports in `verification/reports/` cite them by name.

| File | For | Covers |
|---|---|---|
| `drafter.md` | authors | writing a chapter's units, reading the sources, handing over for review |
| `verifier-a.md` | reviewer A | the proof audit: statements, definitions, every proof step, prerequisites |
| `verifier-b.md` | reviewer B | counterexamples, recomputing every number, citations, provenance |
| `source-authority.md` | everyone | the cited books are taken as correct; what that does and does not excuse |
| `phase-concepts.md` | authors, reviewers | the first pass: definitions, statements, methods, notes and remarks |
| `phase-full.md` | authors, reviewers | the second pass: proofs, worked examples and applications |

**Two passes.** The handbook was first written concepts-only, so that every statement could be
reviewed before anything was built on it, and then completed with proofs, examples and applications.
Every published unit has been through both. The two phase files describe those passes; a report that
names a phase was written during it.

**One reviewer or two.** Chapters where at least 40% of the units are theorems are reviewed by both A
and B, independently, neither seeing the other's report. Other chapters -- mostly definitions,
methods and tables -- are reviewed by B alone, who then also does A's statement and definition checks.

A unit is published only when every required reviewer has passed the exact text that is published:
reports and verdicts are tied to a hash of the unit file, so any edit sends it back for review.
