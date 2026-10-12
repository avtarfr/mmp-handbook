# Style guide

How units are written. The audience is a working physicist or applied scientist (a climate scientist, an engineer, a graduate student) who wants one piece of mathematics, correctly stated and properly justified, without reading a whole book.

## Units

- **One idea per unit.** A unit is one definition, one theorem with its proof, one method, or one worked application. If a unit needs two statements, it is two units linked by a prerequisite.
- **Self-contained given its prerequisites.** A reader who knows the units listed in `prereqs` must be able to follow it. Name every prerequisite you rely on; do not rely on anything else except standard undergraduate calculus and linear algebra.
- **Size.** Aim for one to three printed pages. Long proofs are split into lemmas, each its own unit.
- **Summary.** One sentence, saying what the unit gives the reader, not what it "discusses".

## Block order

Use the blocks that apply, in this order:

1. `definition`: the objects involved.
2. `statement`: the result, with every hypothesis stated. No hidden assumptions ("nice function", "suitably smooth") unless the definition of that phrase is given.
3. `idea`: two to four sentences on why it is true, before any detail.
4. `proof`: the steps.
5. `remark` with **where the hypotheses are used**: which step needs which assumption, and what fails without it (ideally with a counterexample).
6. `method`: for techniques, a numbered recipe a reader can follow.
7. `example`: at least one fully worked example with every step and a checkable final number.
8. `application`: where this appears in physics or the applied sciences.

There are **no exercises** in this handbook: it is a reference, not a course.

Write every unit complete the first time: all of the blocks above that apply, proofs and worked
examples included. Some early units were written in two passes, concepts first and proofs and
examples later; that cost more than writing a unit once, and is not how anything is written now.

## Proofs

Textbook proofs are often criticised for being terse, for hiding the idea, and for doing steps in the order they were discovered rather than the order that explains them. Ours should not be:

- **Idea first.** The `idea` block says what the proof does before the `proof` block does it.
- **One step per paragraph or list item**, each with its justification ("by orthonormality", "by the triangle inequality", "since $f$ is continuous on a compact set").
- **No "clearly", "obviously", "it is easy to see".** If it is easy, say why in a few words; if it is not, prove it.
- **Name the hypothesis at the step that uses it.**
- **End proofs with $\square$.**
- **Rewrite, do not transcribe.** When a proof follows a book, change the structure as well as the words: reorder the argument to put the idea first, split it differently, use our notation. Then cite the book for the approach. The automated overlap check fails text that follows a book's wording word by word.

## Notation

- Fourier coefficients $\hat f(n)$; inner products $(f, g)$, linear in the first slot; norms $\|f\|$.
- Vectors in bold only in vector-calculus units ($\mathbf{F}$); abstract vectors plain.
- $\mathbb{N} = \{1, 2, \dots\}$, $\mathbb{Z}$, $\mathbb{R}$, $\mathbb{C}$.
- State the convention whenever it differs between fields (e.g. the sign and $2\pi$ in the Fourier transform, physicists' vs mathematicians' spherical harmonics), and say which books use which.

## Mathematics in Markdown

- Inline math `$...$`, display math in `$$` blocks on their own lines.
- Put long expressions in display math. Inline math cannot wrap well on a phone.
- Use only commands that both KaTeX and LaTeX (amsmath, amssymb, mathtools) understand. The checks compile every unit both ways.

## Voice

Plain, direct and precise. "We" for the joint reader-and-author voice in proofs. Short sentences. American or British spelling is fine, but be consistent within a unit.
