VERDICT: FAIL
UNIT: funcan.spectral-theorem-general
VERIFIER: B

## Findings

1. [blocking] :::proof[Part A for bounded operators], Step 3 (line 142): wrong locator. The
   parenthetical says "The real form of the theorem, Folland's Thm 4.45, p. 139, would not do: he
   shows **on p. 140** that it fails for complex algebras not closed under conjugation." Thm 4.45 is
   indeed on p. 139, but the passage that shows the failure for complex algebras -- the remark that
   the theorem "as it stands, is false for complex-valued functions", with the worked counterexample
   that $\bar z$ is not a uniform limit of polynomials on the unit circle, sitting immediately before
   Thm 4.51 -- is on **p. 141**. Page 140 carries only the tail of the proof of Lemma 4.49 and the
   proof of Thm 4.45; it contains no complex-valued discussion at all. The same wrong locator is in
   the frontmatter `loc` for folland-1999 (line 15): "the remark on p. 140 that it fails for complex
   algebras without conjugation". Fix: change both occurrences to p. 141. (The claim itself is
   accurate and the surrounding locators -- Thm 4.45 p. 139, Thm 4.51 p. 141 -- are right.)

2. [minor] :::proof[Part A for bounded operators], Step 2 (line 140): "for a general bounded operator
   the norm exceeds the spectral radius". For a general bounded operator $r(B) \le \lVert B\rVert$,
   with equality for every normal operator, so "exceeds" overstates it. Fix: "the norm can exceed the
   spectral radius" or "the norm need not equal the spectral radius".

3. [minor] :::definition (line 40): the essential range is defined here for $\lambda \in \mathbb{C}$
   via $\mu(\{\lvert f-\lambda\rvert<\varepsilon\})>0$, while the cited source (Reed and Simon,
   p. 229, named in the block's `src` as "the essential range, p. 229") defines it for a *real-valued*
   $F$ and real $\lambda$, as $\mu(\{\lambda-\varepsilon<F<\lambda+\varepsilon\})>0$. Our version is a
   correct generalisation, reduces to theirs for real $f$, and is used consistently (Step 12 applies
   it only to real $f$); but the block does not say that it is stated here in greater generality than
   the page cited. Fix: a half-sentence noting the extension to complex $f$.

4. [source] Reed and Simon, §VIII.3, proof of Thm VIII.4, p. 261: in the displayed equality
   identifying $((A+i)^{-1})^{*}=(A-i)^{-1}$ the right-hand side is printed with the factors composed
   as $(A-i)^{-1}(A-i)\psi$, which presupposes $\psi \in \mathcal{D}(A)$; the order the manipulation
   produces, and the only one applicable to a general $\psi \in \mathcal{H}$, is
   $(A-i)(A-i)^{-1}\psi$. Step 9 writes the applicable order and says so in a parenthetical, which is
   the right treatment. Already recorded in verification/discrepancies.md (row for this unit);
   no new entry added. Not a defect of our text.

## Checked

- **Automated.** `node tools/check/index.mjs --record funcan.spectral-theorem-general`: `ok`, no FAIL
  line; 3 warnings touching this unit, all judged non-findings. (a) 8-word run with kreyszig-1978
  p. 130, "the inner product is linear in the first": Kreyszig p. 130 says "linear in the first
  factor"; this is the only way to state a convention and the unit's sentence ("slot", plus its own
  cross-reference) is not his. (b) 9-word run with lee-2013 p. 376, "such that if and only if and for
  every": pure connective words spanning two displayed conditions; an artifact. (c) "folland-1999
  pp. 139-141, 212, 217 never mention spectr": expected -- Folland is cited only for Stone-Weierstrass
  and for Riesz-Markov/regularity, which are tools, not spectral theory. I opened all five pages; see
  Citations. `npm run check -- funcan.spectral-theorem-general` produced no `resembles` line.

- **Counterexample search.** Part A: tested the converse clause -- $T_f$ on a finite measure space
  with $f$ real a.e. is self-adjoint (Step 8 is sound: $\{\lvert f\rvert\le n\}$ exhausts $M$ up to
  null, $\lVert\chi_n f\psi\rVert \le \lVert T_f^{*}\psi\rVert$, monotone convergence) and
  $T_f$ self-adjoint forces $f$ real a.e. (Step 11, via $\operatorname{Im}(T_f\chi_S,\chi_S)\ge
  \mu(S)/k>0$ on $S=\{\operatorname{Im}f\ge 1/k\}\cap\{\lvert f\rvert\le n\}$, legitimate because
  $\mu(S)<\infty$ makes $\chi_S$ an $L^2$ element of $\mathcal{D}(T_f)$). Part B, Step 12: checked
  both directions including domains -- for $\lambda$ outside the essential range,
  $T_{(f-\lambda)^{-1}}$ really does map $L^2$ into $\mathcal{D}(T_f)$, since
  $f(f-\lambda)^{-1}=1+\lambda(f-\lambda)^{-1}$ is bounded; for $\lambda$ inside, $\chi_{S_n}$ is in
  $L^2$ (finite $\mu$) and in $\mathcal{D}(T_f)$ ($f$ bounded on $S_n$), and
  $\lVert (T_f-\lambda)\varphi_n\rVert \le 1/n$. Degenerate cases: $K=\varnothing$ in Step 13a(i) is
  handled explicitly; $V=\mathbb{R}$ in Step 13a(ii) works with $\operatorname{dist}(x,\varnothing)
  =+\infty$; the constant polynomial in Step 1's "$\subseteq$" is handled separately using
  $\sigma(B)\ne\varnothing$. Step 13a (uniqueness) re-derived line by line: $\Phi(r)(A-i)\psi=\psi$
  from properties 1, 3, 4 and $x/(x-i)-i/(x-i)=1$; injectivity of $x\mapsto(x-i)^{-1}$ on
  $\mathbb{R}\cup\{\infty\}$ with $r(\infty)=0$; the Dynkin-style passage compact $\to$ open $\to$
  Borel $\to$ simple $\to$ bounded Borel. No gap found. Part D's two-vector identity is stated for
  $\varphi\in\mathcal{H}$ rather than $\varphi\in\mathcal{D}(A)$; this is what Reed and Simon's
  defining display on p. 263 gives, it is finite by Cauchy-Schwarz
  ($\lvert\int\lambda\,d(P_\lambda\psi,\varphi)\rvert\le\lVert A\psi\rVert\lVert\varphi\rVert$), and
  it is not a strengthening of the source.

- **Calculations** (`.venv/bin/python`, mpmath at 30 digits; every example value recomputed
  independently of the text):
  - $\operatorname{erf}(1)=0.842700792949714869\ldots$ and
    $\pi^{-1/2}\int_{-1}^{1}e^{-k^2}dk = 0.842700792949714869\ldots$ (identical) -- the unit's
    $0.842700792950\ldots$ is the correct 12-decimal rounding. **Matches.**
  - $\pi^{-1/2}\int_{\mathbb{R}}e^{ik}e^{-k^2}dk = 0.778800783071404868\ldots + 0i$ and
    $e^{-1/4}=0.778800783071404868\ldots$ **Matches** the unit's $0.778800783071\ldots$
  - Second route: $\pi^{-1/2}\int e^{-(x+1)^2/2}e^{-x^2/2}dx = 0.778800783071404868\ldots$, i.e. the
    same number by the translation argument. **Matches**; the completion of the square
    $-(x+\tfrac12)^2-\tfrac14$ is right.
  - $\int k^2\,d\mu_\psi = \pi^{-1/2}\int k^2 e^{-k^2}dk = 0.5$ and
    $\lVert A\psi\rVert^2=\pi^{-1/2}\int x^2 e^{-x^2}dx = 0.5$. **Both $\tfrac12$**, and the variance
    of $\pi^{-1/2}e^{-k^2}dk$ is indeed $\tfrac12$ with mean $0$.
  - $\hat\psi$ of $\pi^{-1/4}e^{-x^2/2}$ in the stated convention, sampled at $k=0.7$: numerical
    quadrature $0.5879093724421046407$ vs claimed $\pi^{-1/4}e^{-k^2/2}=0.5879093724421046413$.
    **Matches** to quadrature precision; total mass $\mu_\psi(\mathbb{R})=1=\lVert\psi\rVert^2$.
  - Step 7's series: $\sum_{n\ge1}4^{-n}=1/3<\infty$, so $\mu$ is finite as claimed.
  - Reweighting, Step 11: $\lvert e^{f^2/2}\rvert^2 e^{-f^2}=1$ for real $f$, so $V$ is unitary;
    $\tilde\mu(M)\le\mu(M)$; $c_p=\sup_{t\ge0}t^pe^{-t^2}<\infty$ for $1\le p<\infty$ (maximum at
    $t=\sqrt{p/2}$), so $\int\lvert f\rvert^p d\tilde\mu\le c_p\mu(M)$. Example Step 1's version:
    $\int\lvert V\varphi\rvert^2 d\tilde\mu=\int\pi^{1/2}e^{k^2}\lvert\varphi\rvert^2
    \pi^{-1/2}e^{-k^2}dk=\int\lvert\varphi\rvert^2dk$, and $\pi^{-1/2}\int e^{-k^2}dk=1$, so
    $\tilde\mu$ is a probability measure. **Both correct.**
  - Step 13a's bounds: $\lvert r\rvert=(x^2+1)^{-1/2}$, so $\lvert rh_n\rvert\le
    \lvert x\rvert/\sqrt{x^2+1}\le1$. **Correct.** Step 9's $\lVert(A\pm i)\psi\rVert^2=
    \lVert A\psi\rVert^2+\lVert\psi\rVert^2$: cross terms cancel by symmetry. **Correct.**
  - $e^{iA}$ with $A=-i\,d/dx$ is translation by $+1$ (not $-1$): multiplying $\hat\psi$ by $e^{ik}$
    and inverting gives $\psi(x+1)$, consistent with both displayed evaluations.

- **Citations.** Every page opened with `node tools/corpus/pages.mjs`.
  - reed-simon-1980 p. 192: Thm VI.6, $r(A)=\lVert A\rVert$ for self-adjoint $A$ on a Hilbert space.
    **Matches** Step 2's use.
  - p. 222: Thm VII.1, continuous functional calculus; p. 223: Lemma 1 ($\sigma(P(A))=P(\sigma(A))$)
    and Lemma 2 ($\lVert P(A)\rVert=\sup_{\sigma(A)}\lvert P\rvert$) with proofs, running to p. 224.
    **Matches** "pp. 222-224".
  - pp. 224-225: the positive functional $(\psi,f(A)\psi)$, Riesz-Markov (their Thm IV.14), the
    definition of $\mu_\psi$ as the spectral measure, Thm VII.2. **Matches.**
  - pp. 226-228: cyclic-vector definition (finite linear combinations of $\{A^n\psi\}$), Lemma 1
    (cyclic case) with proof, Lemma 2 (cyclic decomposition, "a simple Zornication"), Thm VII.3 and
    its Corollary -- which is exactly the $\lVert\varphi_n\rVert=2^{-n}$, $M=\bigcup\mathbb{R}$
    construction of Step 7 -- and the Dirac-notation remark. **All match.**
  - p. 229: essential-range definition (for real-valued $F$; see finding 3), the proposition
    $\sigma(T_F)=$ essential range, the proposition $\sigma(A)=\operatorname{supp}\{\mu_n\}$, and
    Example 4 ("the Fourier transform is one example of a spectral representation" for $i^{-1}d/dx$).
    **Matches** the application block's attribution.
  - pp. 230-231: Thm VII.4 and the $\sigma_{\mathrm{pp}}/\sigma_{\mathrm{ac}}/\sigma_{\mathrm{sing}}$
    decomposition. **Matches.** pp. 234-235: the four p.v.m. axioms, Thm VII.7, Thm VII.8. **Matches.**
    p. 237: Thm VII.12 (Weyl) and Thm VII.13 (Stone's formula). **Matches.**
  - p. 246: Problem 3 (normal operators, $\lVert P(A)\rVert$), Problem 4 (commuting self-adjoint
    $A_1,\dots,A_n$; parts (a)-(f): commuting spectral projections, rectangles, B.L.T. extension,
    Borel calculus, and the multiplication form), Problem 5 ("Let $A$ be a normal operator. Prove:
    (a) $A=B+iC$ with $B,C$ commuting self-adjoint; (b) There is a $U:\mathcal{H}\to L^2(M,d\mu)$ for
    some finite measure $\mu$ on some space $M$ and a bounded Borel function $F(m)$ (in general,
    complex valued) so that $(UAU^{-1}f)(m)=F(m)f(m)$"). The unit's quoted statement in Step 10 and
    its description of the intended route are **faithful, clause for clause**, including "finite
    measure" and "in general complex-valued", and the unit is explicit that it is quoted, not proved.
  - pp. 256-259: Thm VIII.3 (basic criterion, condition (c) $\operatorname{Ran}(T\pm i)=\mathcal{H}$)
    on p. 257; $T=i\,d/dx$ on $\{\varphi\in AC[0,1]:\varphi(0)=0=\varphi(1)\}$ on p. 258, closed and
    symmetric but not self-adjoint, with the circle $T_\alpha$, $\lvert\alpha\rvert=1$,
    $\varphi(0)=\alpha\varphi(1)$, of distinct self-adjoint extensions on p. 259. **Matches** the
    remark block (its added clause "with different spectra" is ours and is correct: the eigenvalues
    of $T_\alpha$ solve $e^{-i\lambda}=\bar\alpha$, so they move with $\alpha$).
  - pp. 259-263: Prop 1 (p. 259, multiplication operators self-adjoint, $\sigma(T_f)=$ essential
    range), Prop 2 (p. 260, cores, assuming $f\in L^p$ for $2\le p<\infty$), Thm VIII.4 (pp. 260-261,
    conditions (a) and (b) verbatim as the unit's conditions 1 and 2, with $\mu$ finite and $f$ real
    and finite a.e.), Thm VIII.5 (p. 262, "unique map" with (a)-(d) and the additional (e), (f) --
    the unit's part C reproduces all six correctly), the unbounded cyclic-vector definition
    $\{g(A)\psi: g\in C_\infty(\mathbb{R})\}$ dense (p. 262), the four p.v.m. axioms and
    (VIII.4)/(VIII.5) (p. 263), Thm VIII.6 (p. 263, one-to-one correspondence). **All match.**
  - p. 266: Proposition 3 and its proof, $d\mu=e^{-f^2}d\nu$, $Vg=e^{f^2/2}g$. **Matches** Step 11's
    integrability clause and part A's $L^p$ sentence, including the unit's point that Prop 2 needs it.
  - p. 37: Reed and Simon's inner product is conjugate-linear in the first slot. **Matches** the
    note block's convention discussion; their functional-calculus order $(\psi,h(A)\psi)$ is confirmed
    on p. 224.
  - folland-1999 p. 139: Thm 4.45, real Stone-Weierstrass. **Matches.** p. 140: Lemma 4.49's proof and
    the proof of Thm 4.45 only -- **does not** contain the complex-failure remark (finding 1).
    p. 141: the complex-failure remark with the $\bar z$ counterexample, and Thm 4.51, the complex
    Stone-Weierstrass theorem, stated exactly as the frontmatter paraphrases it. **Matches** except
    for the p. 140 locator. p. 212: Thm 7.2, Riesz representation for positive linear functionals on
    $C_c(X)$, unique Radon measure. **Matches.** p. 217: Thm 7.8, every Borel measure finite on
    compact sets on an LCH space whose open sets are $\sigma$-compact (second countable given as the
    example) is regular, hence Radon. **Matches** Step 4's uniqueness argument.
  - kreyszig-1978 pp. 494-495: Definition 9.7-1 with (7), (8a), (8b), (9) -- the four spectral-family
    conditions the note block lists, in the same order. **Matches.** p. 130: inner product linear in
    the first factor, confirming the note block's claim about Kreyszig's convention and the
    handbook's. pp. 505-506: Thm 9.9-1. **Matches.** pp. 556-557: Cayley transform
    $U=(T-iI)(T+iI)^{-1}$ (1), Lemma 10.6-1, Lemma 10.6-2 with (4) and "[1] is not an eigenvalue of
    $U$". **Matches**, including the unit's use of it. pp. 559-561: Thm 10.6-3 with (8),
    $(Tx,x)=\int\lambda\,dv(\lambda)$, $v(\lambda)=(F_\lambda x,x)$, $F_\lambda=E_{2\arctan\lambda}$,
    $(E_\theta)$ the spectral family of $-U$, part (a) of the proof establishing continuity of
    $(E_\theta)$ at $\pm\pi$ from Lemma 10.6-2, and the substitution $\theta=2\arctan\lambda$.
    **Matches the note block exactly, minus sign included.** pp. 563-567: Thm 10.7-2, Thm 10.7-3
    (no eigenvalues, $\sigma(T)=\mathbb{R}$) and the spectral family (6). **Matches.**

- **Provenance.** `:::idea` is `original`; it is a roadmap of the Reed-Simon route, but every other
  `:::idea` in content/funcan is also `original` and the citations sit on the proof blocks that
  execute the route -- consistent with chapter practice, not a mislabel. `:::example` is `original`:
  it shares only the universally standard observation that the Fourier transform diagonalises
  $-i\,d/dx$ with Reed and Simon's three-sentence Example 4, which the application block credits by
  name; the Gaussian state, the $\operatorname{erf}(1)$ projection, the second moment and the
  two-route evaluation of $(e^{iA}\psi,\psi)$ are our own and I could not find them in any cited page.
  `:::remark` and `:::method` are `original` and contain nothing traceable to a source beyond the
  explicitly `:cite`d self-adjoint-extension example.
  Closest passage compared: Step 2 against Reed and Simon's Lemma 2 proof, p. 223. Their proof is a
  bare four-line chain $\lVert P(A)\rVert^2=\lVert P(A)^{*}P(A)\rVert=\lVert(\bar PP)(A)\rVert=
  \sup_{\sigma((\bar PP)(A))}\lvert\nu\rvert=\sup_{\sigma(A)}\lvert P\rvert^2$. The unit's chain is
  necessarily the same -- it is the only proof -- but the surrounding prose is ours and it supplies
  the step they omit (why $\bar PP$ has real coefficients, hence why $(\bar PP)(A)$ is self-adjoint
  and Thm VI.6 applies). Step 1 against their Lemma 1, p. 223: same two directions, reworded,
  carrying a different letter, and filling their elided "since $(A-\lambda)$ has no inverse neither
  does $P(A)-P(\lambda)$" with the commuting-factors argument, plus the constant case they skip.
  Step 7 against their Corollary, p. 227: the $2^{-n}$ normalisation and disjoint-union construction
  are theirs, the block is `adapted` and cites that corollary, and the sentences are rewritten.
  Step 11's reweighting against their Proposition 3, p. 266: same substitution, our prose, with the
  $c_p$ bound they leave implicit written out. Step 13a has no counterpart in any cited source and is
  substantially our own work inside an `adapted` block, which is the safe direction. **Judgement: no
  passage is a close paraphrase; no block is mislabelled.**

- **Style.** Idea block precedes both proofs. No "clearly", "obviously" or "it is easy to see"
  ("trivially" appears once, on $\chi_\varnothing=0$, where it is literal and not in the banned list).
  Worked example with checkable numbers present and verified ($\operatorname{erf}(1)$, $e^{-1/4}$,
  $\tfrac12$ twice). Hypotheses named where used, and the remark block collects them (self-adjointness
  at Step 9, separability at Step 6, finiteness of $\mu$ at Step 7, boundedness of $h$ in part C).
  The two results the unit does not prove -- the bounded normal case and surjectivity in Thm VIII.6 --
  are each flagged in the text at the point of use, which is the right treatment.
