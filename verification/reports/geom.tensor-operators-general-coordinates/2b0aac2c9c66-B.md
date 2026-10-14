VERDICT: PASS
UNIT: geom.tensor-operators-general-coordinates
VERIFIER: B

## Findings

1. [minor] remark "Where the hypotheses are used", last bullet (line 125): "Riley,
   Hobson and Bence set $(\operatorname{curl} v)_{ij} = v_{i;j} - v_{j;i}$, so that the
   first index is the one being differentiated *against*". In $v_{i;j}$ the derivative is
   with respect to $u^j$, so in RHB's convention it is the *second* index that is the
   differentiation index — which is exactly what distinguishes it from the
   $\partial_i v_j - \partial_j v_i$ convention named in the next sentence. The displayed
   formulas are all correct; only this gloss reads the wrong way round. Fix: "so that the
   second index is the one differentiated with respect to" (or "the first index labels the
   component of $v$").
2. [minor] remark, first bullet (line 120): "For an indefinite metric, where $g<0$". An
   indefinite metric need not have negative determinant (signature $(-,-,+,+)$ gives
   $g>0$); what is meant is the Lorentzian case actually used in relativity. The
   substance — run the derivation with $|g|$ — is right. Fix: "For a Lorentzian metric,
   where $g<0$", or "for an indefinite metric, where $g$ may be negative".
3. [minor] application, second paragraph (line 219): the eigenvalues of the
   Laplace-Beltrami operator are the squares of the normal-mode frequencies (up to the
   wave speed), not the frequencies themselves. Fix: "whose eigenvalues fix the
   normal-mode frequencies of a drum of any shape".

## Checked

- **Automated checks.** `node tools/check/index.mjs --record` gives no FAIL line for this
  unit; `npm run check -- geom.tensor-operators-general-coordinates` prints `1/1 pass` with
  no `resembles` line. The remaining warnings are map-ordering and unwritten-unit warnings
  for other parts of the map.
- **Counterexample search.** Statement 2/3 tested for the hidden assumption that the chart
  is orthogonal: the worked chart has $g_{uv}=uv \neq 0$, and the Laplacian formula still
  reproduces the Cartesian answer (below), so the off-diagonal $g^{jk}$ are genuinely
  carried. Statement 4's orientation caveat tested directly: relabelling
  $u^1\leftrightarrow u^2$ in the fan chart gives $\det Dr = -u = -\sqrt g$ and the same
  contraction returns $+2v$ where the true coefficient of $e_v$ is $-2v$ — the sign does
  flip, as the remark says. Step 2's cancellation checked index by index; step 6's
  Christoffel cancellation needs only $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$, which the remark
  correctly flags as failing in a non-coordinate frame. Sign of the curl contraction
  verified by expanding $-\tfrac1{2\sqrt g}\epsilon^{ijk}(\operatorname{curl} v)_{jk}$ and
  by checking it reduces to $\partial_2v_3-\partial_3v_2$ in Cartesians.
- **Calculations** (sympy, exact; script kept locally). Fan chart $x=u$,
  $y=uv$, $z=w$: $Dr$ gives $[g_{ij}]=\begin{psmallmatrix}1+v^2&uv&0\\uv&u^2&0\\0&0&1\end{psmallmatrix}$,
  $g=u^2$, $\det Dr = u$, and $[g^{ij}]$ exactly as printed. Laplacian of $\phi=u^3v$:
  obtained $2uv$, matching the unit and matching $\nabla^2(x^2y)=2y$; at $u=2,v=3$ the
  value is $12$ — matches. Divergence of $F^u=u^2v,F^v=0,F^w=uw$: obtained $u(3v+1)$;
  Cartesian form of the field came out $(u^2v,u^2v^2,uw)=(xy,y^2,xz)$ with Cartesian
  divergence $3y+x$; at $u=2,v=3$ both give $20$ — matches. Curl of $(0,0,xy)$: covariant
  components $(0,0,u^2v)$, contravariant curl $(u,-2v,0)$, reassembled Cartesian vector
  $(u,-uv,0)=(x,-y,0)$ — matches, and equals $\nabla\times(0,0,xy)$. Terrain-following
  chart $z=h(\xi,\eta)+s$: computed $g=1$, the stated $[g^{ij}]$ reproduced entry by entry,
  and the displayed Laplacian minus the formula from statement 3 simplifies to exactly $0$.
  Inverse-matrix spot checks in the example text ($(1,1)$ entry $=1$, $(1,2)$ entry $=0$)
  reproduce.
- **Citations.** rhb-2006 §26.20, pp. 971-975: p. 971 opens the section; p. 972 carries the
  non-unit-basis warning and $v^i=\hat v^i/h_i$ with $g=h_1^2h_2^2h_3^2$, the gradient
  Eq. (26.91) and the contracted symbol Eq. (26.92) with its cancellation; p. 973 the
  determinant lemma Eqs. (26.93)-(26.96), $\Gamma^i{}_{ki}=\partial_k\sqrt g/\sqrt g$ and
  the divergence Eq. (26.97); p. 974 the Laplacian Eq. (26.98), its orthogonal
  specialisation, $(\operatorname{curl} v)_{ij}=v_{i;j}-v_{j;i}$ and the dual
  $(\nabla\times v)^i=-\tfrac1{2\sqrt g}\epsilon^{ijk}(\operatorname{curl} v)_{jk}$ with the
  minus sign exactly as the unit reports; p. 975 ends the section. Every locator correct.
  arfken-2013 §4.3, pp. 223-226: Eq. (4.64) gradient (p. 223), Eq. (4.65) divergence with
  $\Gamma^i{}_{ik}$ and its reduction Eq. (4.66), Eq. (4.67) determinant derivative
  (p. 224), Eqs. (4.69)-(4.70) compact divergence and Laplacian with the orthogonal
  comparison, Eq. (4.71) curl and the warning that the $V_i$ are coefficients of non-unit
  $\varepsilon^i$ (p. 225). All correct; Eq. (4.37) for the covariant basis is on p. 218 as
  the definition block's `src` says. lee-2013 p. 436: Problem 16-11 is the divergence and
  16-13 the geometric Laplacian with $\Delta u = -\operatorname{div}(\operatorname{grad} u)$
  and the bracketed remark that authors disagree about the sign — exactly what the `note`
  block reports, sign convention included. rhb-2006 §§26.14-26.15, pp. 955-958 do carry the
  reciprocal bases and the metric tensor as cited.
- **Provenance.** `adapted` blocks: the proof follows RHB's route (contract, determinant
  lemma, divergence, raise index, antisymmetrise) and says so. Compared sentence by
  sentence against pp. 972-974: the unit restructures into six numbered steps, states
  $\partial a/\partial a_{ij}=\Delta^{ij}$ and the inverse-cofactor relation in its own
  notation, and carries the hypotheses explicitly ($g>0$ used three times) where RHB does
  not. Not a close paraphrase; no `resembles` line was raised. The `original` labels on the
  remark, method, example and application are justified: the fan chart, the
  terrain-following computation and the finite-element paragraph have no counterpart in
  either source, and I verified the two charts' algebra independently rather than against a
  book.
- **Style.** Idea precedes proof; no "clearly"/"obviously"/"easy to see"; a fully worked
  example ending in checkable numbers (12, 20, and the Cartesian vector $(x,-y,0)$);
  hypotheses named at the steps that use them; no exercises.
