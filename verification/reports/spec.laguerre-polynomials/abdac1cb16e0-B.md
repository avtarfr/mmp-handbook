VERDICT: PASS
UNIT: spec.laguerre-polynomials
VERIFIER: B

## Findings
1. [minor] frontmatter, arfken-2013 `pages: "889-898"` (line 16) and the example's Step 5 (line 337): the
   example quotes $\langle r\rangle=\tfrac{a_{0}}{2}[3N^{2}-L(L+1)]$ and $\langle r^{-1}\rangle=1/(N^{2}a_{0})$
   as Arfken, Weber and Harris's. They are correct, but they are the ANS. to Exercise 18.3.8, which is printed
   on p. 899 — one page past the declared range. The exercise's *statement* and the normalised radial function
   are on p. 898, which is what the `loc` field describes. Fix: extend the range to 889–899 and say in `loc`
   that the two expectation values are the answers given on p. 899.
2. [minor] statement, item 7 (line 105): the displayed equation for $\Phi^{k}_{n}=\mathrm{e}^{-x/2}x^{(k+1)/2}L^{k}_{n}$
   is Arfken, Weber and Harris (18.74)–(18.75), p. 895, but the block's `src` lists only (18.73), which is the
   equation for $\varphi^{k}_{n}$ in the display above it. Both equations check out and both are named in the
   frontmatter `loc` and in the method block's `src`, so nothing is unsupported; the statement block's `src`
   should name (18.74)–(18.75) as well, since item 7 is the one item not proved below.
3. [minor] definition (line 42): "the explicit sum of item 1 becomes a series in $\Gamma$'s". It does not
   become a series: for real $\nu>-1$ it is still the same finite sum of $n+1$ terms, with $(n+k)!$ and
   $(k+m)!$ read as $\Gamma(n+\nu+1)$ and $\Gamma(\nu+m+1)$. Fix: "sum" for "series".
4. [minor] example, "Reading the numbers" (line 344): "The two facts together are the whole story of why
   $\langle r\rangle$ is a poor predictor of chemical behaviour and $\langle 1/r\rangle$ is a good one." The
   two expectation values are right and the degeneracy point is right, but "the whole story" is an unsupported
   editorial claim in an `original` block, and chemical behaviour is not determined by either moment alone.
   Fix: soften to what the computation actually shows (the $L$-independence of $\langle 1/r\rangle$ and the
   $L$-dependence of $\langle r\rangle$), or drop the sentence.
5. [minor] statement, item 5 (line 95): "x=\infty an irregular one" is right, but both Riley, Hobson and
   Bence (p. 617, p. 621) say "essential singularity" for the same point. A half-sentence noting that the two
   names are the same thing would save a reader comparing the two texts; not an error.

## Checked
- Automated checks: `node tools/check/index.mjs --record` — `ok spec.laguerre-polynomials`, no FAIL line and
  no warning naming this unit (the 58 warnings are repository-wide map-ordering notices). `npm run check`
  reported no `resembles` passage for this unit.
- Counterexample search: item 1 at $m=n$ and $m=0$ (degree and value at origin are exactly as claimed);
  item 2 at $k=0$; item 4 at $n=0$ with $L^{k}_{-1}\equiv0$ (all three of the first relations do hold there,
  as the parenthesis claims, verified for $k\le2$); item 6 with $m\neq n$ across upper indices (the unit
  correctly never claims orthogonality across different $k$); item 6 at $k\le-1$ (the integral diverges, as
  the remark says: $\int_{0}^{1}x^{-1}\mathrm{e}^{-x}\,\mathrm{d}x=\infty$); the Frobenius recurrence of the
  remark at $\nu$ non-integral (does not terminate, ratio $\to 1/m$, $\mathrm{e}^{x}$ growth). I could not
  break any statement in the unit.
- Calculations (sympy, exact, script at lag.py; everything below recomputed from the Rodrigues
  formula alone, not from the unit's series):
  - item 1's sum reproduces the Rodrigues definition for all $n\le4$, $k\le3$;
  - the tabulated $L^{k}_{1}=k+1-x$, $L^{k}_{2}=\tfrac12[x^{2}-2(k+2)x+(k+1)(k+2)]$ and
    $L_{1},L_{2},L_{3}$ are all correct ($L_{3}=\tfrac16(-x^{3}+9x^{2}-18x+6)$);
  - item 2 verified for $n\le3$, $1\le k\le3$;
  - item 3 verified to $O(h^{3})$ for $k=0,1,2$;
  - item 4: all four relations verified for $k\le2$, $n\le4$, including the $n=0$ cases;
  - item 5 verified for $k\le3$, $n\le4$;
  - item 6 verified for $k\le2$, $m,n\le2$: the value is $(n+k)!/n!$ on the diagonal and $0$ off it;
  - item 7: both ODEs verified for $k\le3$, $n\le3$ — the $\varphi$ equation is Arfken (18.73) and the
    $\Phi$ equation is Arfken (18.75), and at $k=0$ the first reduces to Arfken (18.57);
  - example: $R_{21}=C r\mathrm{e}^{-r/2a_{0}}$ with $C=1/(2\sqrt6\,a_{0}^{5/2})$ gives
    $\int_{0}^{\infty}R_{21}^{2}r^{2}\mathrm{d}r=1$, $\langle r\rangle=5a_{0}$, $\langle 1/r\rangle=1/(4a_{0})$ —
    all three reproduced exactly, as are the arithmetic steps $24C^{2}a_{0}^{5}=1$, $120/24=5$ and $6/24=1/4$;
  - the general radial function of Step 5 was built independently for every $(N,L)$ with $N\le4$: it is
    normalised, and gives $\langle r\rangle=\tfrac{a_{0}}{2}[3N^{2}-L(L+1)]$ and
    $\langle r^{-1}\rangle=1/(N^{2}a_{0})$ in every case, including the quoted check $\langle r\rangle=\tfrac{27}{2}a_{0}$
    at $N=3,L=0$ and $\langle r\rangle=6a_{0}$ for 2s;
  - the node-count claim of the conventions remark: $L^{3}_{3}$ has exactly 3 roots in $(0,\infty)$
    ($2.141,5.316,10.543$) and $L^{5}_{5}$ exactly 5 ($2.511,\dots,20.320$), while $L^{3}_{0}=L^{5}_{0}=1$ has
    none — so "three nodes for 2p, five for 3d, against none" is right;
  - the two conversion formulas of the conventions remark, $L^{k}_{n}=(-1)^{k}\mathcal{L}^{k}_{n+k}$ and
    $\mathcal{L}^{k}_{n}(0)=(-1)^{k}\binom{n}{n-k}$, follow from item 2 and were checked by hand;
  - the proofs were recomputed line by line: the Leibniz expansion and index change $m=n-r$ in item 1; the
    double-sum exchange, the binomial series $\sum_{j}\binom{j+p}{j}h^{j}=(1-h)^{-(p+1)}$ and the cancellation
    of $(m+k)!$ in item 3; the $h$- and $x$-derivative identities, the telescoping sum and the coefficient
    identity $\tfrac{n}{(n-m)!}-\tfrac{1}{(n-1-m)!}=\tfrac{m}{(n-m)!}$ in item 4; the first-order identity
    $xv'=(n+k-x)v$, its $(n+1)$-fold Leibniz derivative $(\dagger)$, the two displayed expressions for
    $v^{(n+1)}$ and $v^{(n+2)}$ and the exact cancellation of the $(k-1-x)$ and $(1-k+x)$ brackets in item 5;
    the boundary power $x^{k+1+j}$ and the surviving constant $(-1)^{n}$ in item 6. Every step is correct and
    nothing is asserted without justification.
  - the method's matching formulas: $x=\alpha r$ turns $u''+(-\tfrac{\alpha^{2}}{4}+\tfrac{\beta}{r}-\tfrac{\gamma}{r^{2}})u=0$
    into the normal form, $k=\sqrt{4\gamma+1}$ and $n=\tfrac12(2\beta/\alpha-k-1)$ follow, and for the Coulomb
    case $\gamma=L(L+1)$ gives $k=2L+1$ and $\alpha=2/(Na_{0})$, as the example says.
- Citations: arfken-2013 pp. 889–898 — (18.44) the ODE, (18.45) the weight $\mathrm{e}^{-x}$, (18.46) and
  (18.72) the two Rodrigues formulas (the latter is literally the unit's definition), (18.47)–(18.49) the
  Schlaefli-contour generating function, (18.51)–(18.52) the $k=0$ recurrences, Table 18.2 (matches our
  $L_{1},L_{2},L_{3}$), (18.53) the series, (18.54) $L_{n}(0)=1$, (18.55) orthonormality, (18.56)–(18.57) the
  Laguerre functions, (18.58) the derivative definition = our item 2, footnote 4 on the rival convention
  (its content is exactly what our conventions remark reports), (18.59) the series, (18.60) Weber's
  generating function, (18.61)–(18.63) which give our item-4 relations three and four, (18.64)
  $L^{k}_{n}(0)=\binom{n+k}{n}$, (18.66) the three-term recurrence, (18.69) the associated equation, (18.70)
  the weight $x^{k}\mathrm{e}^{-x}$, (18.71) the normalisation $(n+k)!/n!$ together with the explicit sentence
  that each $k$ gives a *new* orthogonal set (which our remark attributes to them), (18.73)–(18.75) item 7,
  and Example 18.3.1 with (18.76)–(18.84), including the sentence that non-integral $n$ makes the solution
  diverge like $x^{k}\mathrm{e}^{x}$ and the sentence that the bound states alone are not complete. All
  matched; see finding 1 for the one page that falls outside the declared range.
  rhb-2006 pp. 617–624 — (18.107) with real $\nu$, the indicial equation $\sigma^{2}=0$ and the recurrence
  $a_{m+1}=\frac{m-\nu}{(m+1)^{2}}a_{m}$ (identical to the one in our remark), (18.110)–(18.112),
  the Sturm-Liouville reading, (18.113), (18.114)–(18.117), (18.118)–(18.121), the footnote § on the rival
  convention with $L^{m}_{n}=(-1)^{m}\mathcal{L}^{m}_{n+m}$, (18.122)–(18.125) and $L^{m}_{n}(0)=(n+m)!/(n!m!)$.
  All matched. hassani-2013 — Proposition 8.2.1(b) on p. 245 gives $w=x^{\nu}\mathrm{e}^{-x}$, $\nu>-1$, as the
  degree-one case, exactly as the unit's `role` says; §8.4.2 pp. 249–250 gives $K_{n}=n!$, the Rodrigues
  formula (8.16) that is our definition, the leading coefficient $(-1)^{n}/n!$, $h_{n}=\Gamma(n+\nu+1)/n!$ and
  the three-term recurrence in the same form as item 4; Table 8.2 p. 258 gives the generating function of
  item 3; Problem 8.32 p. 263 gives $L^{\nu}_{n}(0)=\Gamma(n+\nu+1)/[n!\Gamma(\nu+1)]$, exactly as quoted
  twice in the unit. kreyszig-1978 pp. 184–185 — the Gram-Schmidt construction from $t^{n}\mathrm{e}^{-t/2}$,
  (10a) $\mathrm{e}^{-t/2}L_{n}(t)$, the totality statement in $L^{2}[0,+\infty)$, (10b)–(10c) and the ODE (11).
  Matched, and the unit is careful to say it records totality on Kreyszig's authority without proving it.
- Provenance: the definition, statement, proof, conventions remark and method are `adapted` with citations
  that I checked individually. Closest passages compared: (i) the item-6 proof against rhb-2006 (18.113)/(18.122),
  pp. 619 and 623 — same integration-by-parts route, but Riley, Hobson and Bence compress it to four lines and
  assert that the boundary terms vanish, where the unit identifies the surviving power $x^{k+1+j}$ and uses it
  again in the hypotheses remark; wording entirely independent; (ii) the item-5 proof against rhb-2006 p. 621
  and arfken-2013 (18.67)–(18.69) — our route (differentiate $xv'=(n+k-x)v$ exactly $n+1$ times) is *not*
  theirs (Riley, Hobson and Bence differentiate Laguerre's equation $m$ times; Arfken, Weber and Harris go
  through the generating function), so this block does more than adapt; (iii) the conventions remark against
  Arfken footnote 4 and Riley, Hobson and Bence footnote § — the remark reports the same content in our own
  words and adds the node-count consequence, which is ours and is correct. The `original` blocks (idea,
  hypotheses remark, example, application) contain no book's proof route; the example is our own computation
  and is checked against the book only at the end. No close paraphrase found.
- Style: idea before the proofs and it describes the proofs that follow; no "clearly"/"obviously"; a fully
  worked example with checkable numbers; hypotheses named at the step that uses them, and the dedicated
  remark is accurate (in particular the $k>-1$ discussion and the "different weight for every $k$" point).
