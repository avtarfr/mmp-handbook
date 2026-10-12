VERDICT: FAIL
UNIT: found.termwise-operations
VERIFIER: B

## Findings
1. [blocking] unit as a whole: this pass is the full phase (`docs/contributing/phase-full.md`), but the unit
   file is unchanged from the concept pass — it contains only `note`, two `statement` blocks and one
   `remark`. There is no `example` block. The unit is `kind: theorem`, and both the style guide
   (Block order, item 7) and `verifier-b.md` require at least one fully worked example with a
   checkable final number for a theorem unit. Fix: add an `example` after the statements that
   integrates or differentiates a specific uniformly convergent series term by term and ends in a
   number checkable in closed form (e.g. integrate a Fourier or geometric-type series over an
   explicit interval and compare with the closed-form sum).
2. [blocking] both `statement` blocks: no `proof` block is present for either term-by-term
   integration or term-by-term differentiation, and no `idea` block precedes them. `phase-full.md`
   requires an `idea` of two to four sentences immediately before each `proof`, and a `proof` after
   the statement it proves, one justified step per paragraph, hypotheses named where used, ending in
   $\square$. Fix: prove the integration theorem from the $(b-a)\sup$ estimate already displayed in
   the statement (naming uniform convergence at the step that bounds the sup, and continuity at the
   step that makes the integrals exist), and prove the differentiation theorem by integrating the
   uniformly convergent series $\sum u_n'$ and applying the integration theorem, naming hypothesis 3
   where it is used.
3. [blocking] unit as a whole: no `application` block. `phase-full.md` requires one last, saying
   concretely where this is used in physics or the applied sciences. Fix: the natural one is already
   half-written in the sources — termwise integration of a uniformly convergent Fourier series to
   extract its coefficients (Stakgold and Holst, p. 128), or termwise differentiation of a
   separated-variable solution of the heat equation.
4. [minor] `statement[Term-by-term integration]` (lines 28-44): the `src` is
   `arfken-2013:§1.2, p. 24, property 2 and Eq. (1.38)`, but p. 24 states only the series form
   (property 2). Part 1, the sequence form with the $(b-a)\sup$ estimate, and the closing sentence
   extending the conclusion to every $[\alpha,\beta] \subseteq [a,b]$ uniformly in $\alpha,\beta$,
   are not on that page. Both are standard and both are true (I checked the subinterval claim: the
   same estimate gives $\lvert\int_\alpha^\beta (S_N - S)\rvert \le (b-a)\sup_{[a,b]}\lvert S_N - S\rvert$,
   a bound independent of $\alpha,\beta$). Fix: cite a source for the sequence form, or mark these
   two additions as ours.

## Checked
- Counterexample search: tested the two statements against the hypotheses that are meant to carry
  them. Integration: pointwise-only convergence ($f_n = 2nx e^{-nx^2}$ on $[0,1]$), infinite interval
  ($g_n = e^{-x/n}/n$ on $[0,\infty)$), both already in the remark and both genuine. Differentiation:
  dropped hypothesis 3 ($f_n = \sin(nx)/n$), constants, and the degenerate case $a = b$ (the
  integration statement survives it trivially; "$a < b$ finite" excludes it anyway). Discontinuous
  terms break only the existence of the integrals, which is what the statement says continuity is
  for. No counterexample to either statement as written.
- Calculations (sympy, `.venv/bin/python`):
  - $\int_0^1 2nx e^{-nx^2}dx = 1 - e^{-n}$ — matches line 65 exactly, and $\to 1$.
  - $f_n(1/\sqrt{2n}) = \sqrt{2n}\,e^{-1/2}$ — matches line 67 ($\sqrt2\sqrt n e^{-1/2}$), so
    $\sup_{[0,1]}\lvert f_n\rvert \to \infty$ and the convergence is indeed not uniform.
  - $\int_0^\infty e^{-x/n}/n\,dx = 1$ for every $n$, and $\sup_{x\ge0}e^{-x/n}/n = 1/n$ — matches
    line 68.
  - $\sin(n\pi)/n$ derivative at $x=\pi$: $\cos(n\pi) = (-1)^n$ — matches line 69.
  - Line 70's strengthened form (convergence at one point plus uniform convergence of $\sum u_n'$)
    verified by hand: $\sum_{n\le N}u_n(x) = \sum_{n\le N}u_n(x_0) + \int_{x_0}^x \sum_{n\le N}u_n'$,
    both terms converge and the integral converges uniformly in $x$ on the finite interval, so
    $\sum u_n$ converges uniformly and $S' = \sum u_n'$. True as stated.
- Citations:
  - arfken-2013 p. 24 — exists, is exactly "Properties of Uniformly Convergent Series", gives
    property 2 with Eq. (1.38) and property 3 with Eq. (1.39) and its two extra conditions
    ($du_n/dx$ continuous, $\sum du_n/dx$ uniformly convergent). The differentiation statement's
    hypotheses 1-3 match the page, including the preamble's uniform convergence of $\sum u_n$. The
    page also says termwise integration "requires only continuity of the individual terms", which is
    what line 43 reports. Locator right. Caveat in finding 4 for part 1 of the integration block.
  - rhb-2006 p. 131 — item (v) reads that term-by-term differentiation or integration does not in
    general give a series with the same convergence properties; this is the warning cited on line 71.
    Locator (item (v)) right. p. 135 item (iii) is the power-series exception, as cited.
  - stakgold-holst-2011 p. 112 — has both halves of what line 69 attributes to it: $\sin kx \to 0$
    distributionally, and the contrast that classically termwise differentiation needs severe
    restrictions. p. 128 — supports the frontmatter role: the series is assumed uniformly convergent
    on $[-\pi,\pi]$, multiplied by $e^{-imx}$ and integrated term by term to get Eq. (2.3.7). Both
    locators right.
- Provenance: `npm run check` reports no `resembles` or shared-run warning for this unit. I compared
  the two `statement` blocks with Arfken p. 24 by hand: Arfken's three numbered properties are
  reorganised into two statements with explicit quantifiers, the hypothesis list is restructured, the
  $(b-a)\sup$ estimate is added, and none of Arfken's sentences survives. `adapted` is the right
  label and the rewriting is genuine. The `note` and `remark` are labelled `original`; the four
  counterexamples in the remark are standard but constructed and written here, and the remark names
  Arfken, Stakgold-Holst and RHB where it reports their statements rather than ours, which is the
  honest arrangement. No mislabelling found.
