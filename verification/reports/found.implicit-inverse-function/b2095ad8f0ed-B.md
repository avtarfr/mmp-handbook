VERDICT: PASS
UNIT: found.implicit-inverse-function
VERIFIER: B

## Findings

1. [minor] frontmatter `prereqs` / `content/map.yaml` (line 7): `node tools/check/index.mjs` emits
   `warn ... prerequisite found.connectedness-homotopy comes after found.implicit-inverse-function in
   the map`. The frontmatter is the correct side: step 4 of the inverse-function proof really does
   use that unit, naming items 1, 2 and 4 of its "Properties of connected spaces", and I confirmed
   all three are there (intervals are the connected subsets of the line; connectedness transports
   through a continuous map; connected sets sharing a point glue). What is stale is the map:
   `content/map.yaml` line 44 still lists `prereqs: [found.partial-derivatives-chain-rule]`, and this
   unit sits at line 44 while `found.connectedness-homotopy` sits at line 67. Not blocking - the
   dependency is declared where a reader sees it, and no cycle arises, since
   `found.connectedness-homotopy` depends only on `found.continuity-homeomorphism`. Fix: add the two
   missing prereqs to the map entry and move `found.connectedness-homotopy` before this unit; or, if
   the map order is fixed, prove inline that a ball is connected and that the homeomorphism carries
   that over, which is all step 4 needs, and drop the prereq. The same applies to
   `found.limits-of-sequences`, which is in the frontmatter and used (the Cauchy criterion in step 3)
   but missing from the map entry - it at least precedes this unit, so it raises no warn line.
   The other 18 warn lines concern units outside this review.

2. [minor] statement "Implicit function theorem" (line 146): "Of this, Lee's Thm C.40 supplies the
   two neighbourhoods, the `C^k` map `g` and the equality of the level set with its graph." I read
   Thm C.40 on p. 661: it is stated for a **smooth** `Phi` and supplies a **smooth** `F`. Only
   `k = infinity` is Lee's; the finite-`k` version is the unit's own, obtained by carrying the class
   through from the unit's own `C^k` inverse function theorem (step 2 of the proof does exactly
   this). The generalisation *is* disclosed, in the hypotheses remark's bullet "Smoothness class in
   the sources" (line 200), so the unit does not mislead a reader who gets that far; it is the
   attribution sentence in the statement that overstates Thm C.40. The same holds for "Local
   diffeomorphism and openness", whose src is Cor. C.36, also smooth-only (p. 660), and which that
   remark bullet does not mention at all. Fix: write something like "Lee's Thm C.40, stated for a
   smooth `Phi`, supplies the two neighbourhoods and the equality of the level set with its graph;
   tracking a finite class `C^k`, the uniqueness of `g`, the refinement of `V_0` and the derivative
   formula are ours", and add Cor. C.36 to the remark bullet.

3. [minor] definition "Diffeomorphism and regular point" (line 29): "by the second statement below
   this agrees with the definition above, with `Omega' = G(Omega)`." The second statement (local
   diffeomorphism and openness, part 2) gives only one direction - Folland's conditions imply a
   `C^k` diffeomorphism in the first sense. The converse, that a `C^k` diffeomorphism has invertible
   derivative at every point, comes from the chain rule, which is part 2 of the inverse function
   theorem on the previous page of the unit (and is Lee's Prop. C.4). Fix: cite both directions.

No `[source]` findings: I found nothing in `lee-2013`, `folland-1999` or `arfken-2013` that I believe
to be wrong, so nothing was recorded with `tools/discrepancy.mjs`.

## Checked

- Automated checks: `node tools/check/index.mjs --record found.taylor-several-variables
  found.implicit-inverse-function` -> `ok found.implicit-inverse-function`, no FAIL line.
  `npm run check -- found.implicit-inverse-function` -> no `resembles` line.

- Counterexample search.
  - The `C^1`-cannot-be-weakened example in the remark, which is the one claim in the unit whose
    argument is long and entirely ours, I tested numerically for `j = 3, 10, 50`. With
    `l = 1/((2j+1)pi)` and `r = 1/(2 pi j)`: `f'(l) = 3.0` and `f'(r) = -1.0` exactly, in every case;
    the maximum of `f` over `[l,r]` is attained strictly inside (e.g. for `j=3`, at `0.050508` with
    value `0.054656`, against `f(l) = 0.045473` and `f(r) = 0.053052`); and for `v` halfway between
    `max{f(l),f(r)}` and that maximum there are exactly two sign changes of `f - v` in `[l,r]`
    (for `j=3`, near `0.049045` and `0.052195`). So `f` takes the same value twice in every
    neighbourhood of `0` although `Df(0) = 1` is invertible - the conclusion the remark draws.
  - Edge cases of the statements: `k = 1` (the proof's step 1 says explicitly that this is where
    continuity rather than mere existence of the derivative is used, and step 6's induction
    terminates correctly at `G in C^1`); `k = infinity` (step 6 gives `C^j` for all finite `j`);
    `Phi` with `partial Phi / partial y` invertible only along the graph and not on a product
    neighbourhood - the statement is careful to claim only the former and step 7 proves exactly that;
    `y' = y` in step 5 (excluded, and `x' != x` follows from injectivity of `G`, as stated);
    `h = 0`-type degeneracies do not arise here. I could not break any statement.
  - Verified the two non-invertibility claims: `F(x,y) = (e^x cos y, e^x sin y)` has
    `det J_F = e^{2x} != 0` everywhere and `F(x, y+2pi) = F(x,y)`, so a non-vanishing Jacobian on a
    connected open set does not give global injectivity; `F(x,y) = (x^2-y^2, xy)` has
    `F(-x,-y) = F(x,y)`. Both as the unit says.
  - Checked the proof's own inequalities by hand: `|d phi_j/dx_k| <= 1/(2n)` gives
    `|phi_j(x')-phi_j(x)| <= (1/(2 sqrt n))|x'-x|` and then, squaring and summing `n` components,
    `|phi(x')-phi(x)| <= (1/2)|x'-x|`; the same two inequalities give `|D phi(x) v| <= (1/2)|v|`,
    which is what step 5 needs for invertibility of `DF` on the closed ball. The identity displayed
    in step 5 is an algebraic identity (I expanded both sides using `y'-y = F(x')-F(x)`). The
    coordinate-wise completeness argument in step 3 is right, since `|x_m - x| <= sum_j |(x_m)_j -
    x_j|`, and the claim that boundedness of `K` plays no part there is correct.

- Calculations (independently recomputed; values I obtained):
  - Example (a). `Phi((1,(1,1))) = (0,0)` - both components are `1+1-2`.
    `partial Phi / partial y (a,b) = [[3,1],[1,2]]`, `det = 5`. Its inverse is
    `(1/5)[[2,-1],[-1,3]]`, and `-[partial Phi/partial y]^{-1} partial Phi/partial x` with
    `partial Phi/partial x = (-2,-2)^T` gives `Dg(1) = (2/5, 4/5)^T` symbolically, i.e. `0.4` and
    `0.8`. Numerical check: solving `y_1^3+y_2 = 2.02`, `y_1+y_2^2 = 2.02` from `(1,1)` gives
    `y = (1.00399355, 1.00797146)`, so the difference quotients over the step `0.01` are
    `0.39935453` and `0.79714553` - the unit's `(1.0039935, 1.0079715)` and `0.39935`, `0.79715`,
    correctly rounded, and consistent with first-order accuracy over a step of `0.01`.
  - Example (b). `F(2,1) = (3,2)`; `J_F(2,1) = [[4,-2],[1,2]]` with `det = 10 = 2(4)+2(1)`;
    `J_F^{-1} = [[1/5,1/5],[-1/10,2/5]] = [[0.2,0.2],[-0.1,0.4]]`, and `det J_G = 1/10`.
    Numerical check: solving `F(x,y) = (3.1, 2)` from `(2,1)` gives `(2.01997925, 0.99010918)`, so
    the increments over `0.1` are `0.19979254` and `-0.09890821` - the unit's `(2.019979, 0.990109)`
    and `0.19979`, `-0.09891`, against the first column `(0.2, -0.1)`. Both match.
  - Application. For `Phi = (p + a/V^2)(V-b) - RT`, sympy gives `Phi_p = V-b`, `Phi_T = -R` and
    `Phi_V = p - a/V^2 + 2ab/V^3` - exactly the three the unit prints. Hence
    `(dp/dT)_V = -Phi_T/Phi_p = R/(V-b)`. The cyclic product
    `(-Phi_V/Phi_p)(-Phi_T/Phi_V)(-Phi_p/Phi_T) = -1` identically, and the reciprocal relation is the
    `n=1` case of `det J_G = 1/det J_F`. Solving `dp/dV = 0` and `d^2p/dV^2 = 0` for the van der
    Waals `p(V,T)` returns the unique solution `V_c = 3b`, `T_c = 8a/(27Rb)`, whence
    `p_c = a/(27b^2)` and `p_c V_c/(R T_c) = 3/8` - all four numbers as printed. The claim that
    `Phi_V = 0` is both the first critical-point condition (since `Phi_p = V-b != 0`) and the failure
    of the hypothesis under which `V` is a function of `p` at fixed `T` is right, as is the sign
    bookkeeping in the metastable region (`(dp/dV)_T < 0` with `Phi_p > 0` gives `Phi_V > 0`).
  - Remark. `g'(x) = 1/(5 g(x)^4 + 1)` follows from `-Phi_x/Phi_y` with `Phi_x = -1`,
    `Phi_y = 5y^4+1 >= 1`, and the global-bijection argument for `y^5+y` is correct (derivative
    `>= 1`, so strictly increasing, and unbounded both ways). For `Phi = x^2+y^2-1`,
    `partial Phi/partial y = 2y` fails exactly at `(±1,0)` where `partial Phi/partial x = 2x` does
    not. The derivative values `f'(x) = 1 + 4x sin(1/x) - 2cos(1/x)` and `f'(0) = 1` are right.

- Citations (each opened with `tools/corpus/pages.mjs`):
  - `lee-2013` p. 645: the diffeomorphism definition is there, and Prop. C.4 gives
    `DF(a)^{-1} = D(F^{-1})(F(a))` - the derivative formula for the inverse, as the frontmatter says,
    and indeed the only such formula Lee supplies. Locator right.
  - `lee-2013` p. 657: Thm C.34 (Inverse Function Theorem), with "connected neighborhoods `U_0`,
    `V_0`", which is what licenses the unit's "and `Omega_0` may be taken connected"; and Lemma C.35
    (Contraction Lemma) on the same page. Locators right.
  - `lee-2013` pp. 657-660: the proof. It normalises in two stages (`F_1`, then
    `F_2 = DF_1(0)^{-1} o F_1`), sets `H(x) = x - F(x)`, quotes Prop. C.29 for the Lipschitz estimate
    (C.15), derives (C.16) and (C.17), takes `V_0 = B_{delta/2}(0)`, `U_0 = B_delta(0) cap
    F^{-1}(V_0)`, gets continuity of the inverse from (C.17), notes `U_0` is connected because `V_0`
    is, proves differentiability from the displayed identity, and inducts with Cramer's rule. Every
    element the unit's trailing paragraph attributes to Lee is there, and the three differences it
    claims (one-step normalisation, `(1)` derived on the spot, the contraction instance proved in
    place, finite class tracked) are real differences.
  - `lee-2013` p. 660: Cor. C.36, parts (a) open map and (b) injective => diffeomorphism, with the
    proof the unit's two parts follow. Locator right. Lee's examples on that page are polar and
    spherical coordinates, not the unit's.
  - `lee-2013` pp. 661-662: Thm C.40 with its proof - the map `Psi(x,y) = (x, Phi(x,y))`, its
    block-lower-triangular derivative, `U_0 = V x W` shrunk to a product, `Psi^{-1} = (A,B)` with
    `A(x,y) = x`, `V_0 = {x in V : (x,c) in Y_0}`, `F(x) = B(x,c)`, and both inclusions of the graph.
    Steps 1-5 of the unit are this route, as it says; and Thm C.40 states none of the uniqueness, the
    refinement of `V_0` or the derivative formula, so the unit's claim that steps 6-8 are ours is
    correct. See finding 2 on the smoothness class.
  - `folland-1999` p. 74: the `C^1` diffeomorphism definition ("`G` is injective and `D_x G` is
    invertible for all `x`") and the sentence "the inverse function theorem guarantees that `G^{-1}`
    ... is also a `C^1` diffeomorphism and that `D_x(G^{-1}) = [D_{G^{-1}(x)}G]^{-1}`", used for
    Thm 2.47 on the same page. Exactly what the frontmatter and the definition block claim.
  - `arfken-2013` p. 73: §1.10 does introduce `J = partial(x,y)/partial(u,v)` for a double integral.
    `arfken-2013` pp. 229-230: Eq. (4.74) is on p. 229 and Eq. (4.75), `J^{-1} = partial(u_1,u_2,
    ...)/partial(x_1,x_2,...)`, is on p. 230, with the proof `det(A)det(B) = 1` at Eq. (4.76). The
    unit's remark cites Eq. (4.75), p. 230 - right page - and the relation is, as the unit says, the
    `det J_G = 1/det J_F` identity. (Arfken calls the *matrix* Eq. (4.73) and reserves "the Jacobian"
    for the determinant Eq. (4.74); the frontmatter's phrase "Eqs. (4.74)-(4.75) ... Jacobian matrix
    and determinant" is a shade loose, since the matrix proper is (4.73), but (4.74) displays that
    matrix inside the determinant bars and (4.73) lies on the same cited page. Not worth a finding.)
  - Internal references: `found.limits-of-sequences` does state the Cauchy criterion in `R` and `C`;
    `found.connectedness-homotopy`'s "Properties of connected spaces" does carry items 1, 2 and 4 in
    the form step 4 uses them; `found.partial-derivatives-chain-rule` supplies the chain rule used in
    the normalisation, part 2 and step 8. The forward reference to `funcan.banach-fixed-point` is
    flagged as forward in the text and the one instance needed is proved in place, so it is not a
    hidden dependency.

- Provenance: the closest passage is the inverse-function proof against Lee pp. 658-660, which I
  compared line by line. The step sequence is Lee's and is credited as such in the trailing
  paragraph, but the writing is not: the unit uses `phi` for Lee's `H`, derives the half-contraction
  bound from the fundamental theorem of calculus plus Cauchy-Schwarz instead of quoting a Lipschitz
  proposition, proves the contraction instance (including a coordinate-wise completeness argument
  that Lee does not have, since he cites a complete-metric-space example), establishes invertibility
  of `DF` on the ball from the same bound rather than by shrinking `U` at the start as Lee does, gets
  connectedness of `Omega_0` through three named items of our own connectedness unit rather than in
  one clause, and tracks a finite differentiability class through step 6. Sentence structure, symbols
  and the order of several sub-arguments all differ; this is a rewrite of a credited route, not a
  close paraphrase. Second closest: the implicit-function proof against Lee pp. 661-662 - same
  verdict, and it adds three steps Lee does not have. Of the `original` labels, the idea for the
  local-diffeomorphism corollary, the note, the remark, both worked examples and the application are
  in none of the cited pages (I read 645, 657-662 and 74): Lee's examples there are polar and
  spherical coordinates, Folland p. 74 has no example, and neither has `x + 2x^2 sin(1/x)`, the
  complex exponential, `y^5+y-x` or the van der Waals material.

- Style guide: idea blocks precede each of the three proofs; no "clearly", "obviously", "it is easy
  to see" or "trivially" anywhere (grep); two fully worked examples with checkable numbers
  (`Dg(1) = (0.4, 0.8)` against `(0.39935, 0.79715)`, and `DG(3,2)`'s first column `(0.2,-0.1)`
  against `(0.19979, -0.09891)`); hypotheses named where used - step 1 of the inverse-function proof
  says where `C^1` rather than differentiability is needed, step 1 of the implicit proof says the
  invertibility hypothesis is used there and only there, step 7 says where it is used again, and the
  trailing line of the corollary's proof says injectivity is used only in part 2. Block order
  follows `docs/contributing/phase-full.md`: ideas immediately before their proofs, examples after the
  proofs, application last.
