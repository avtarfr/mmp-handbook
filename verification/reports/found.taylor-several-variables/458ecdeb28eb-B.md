VERDICT: PASS
UNIT: found.taylor-several-variables
VERIFIER: B

## Findings

1. [minor] frontmatter `prereqs` / `content/map.yaml` (line 7): `node tools/check/index.mjs` emits
   `warn ... prerequisite linalg.quadratic-forms comes after found.taylor-several-variables in the map`.
   The frontmatter is the correct side of this disagreement: the unit really does use
   `linalg.quadratic-forms` three times (the eigenvalue test for definiteness in the definition
   block, the Rayleigh bound `h^T H h >= lambda_1 |h|^2` in step 1 of the classification proof, and
   the principal-axes theorem in the part-5 constructions), and I confirmed all three are stated in
   that unit. What is stale is the map: `content/map.yaml` line 43 still lists
   `prereqs: [found.partial-derivatives-chain-rule, found.taylor-theorem]`, and the unit sits at
   line 43 while `linalg.quadratic-forms` sits at line 104. Not blocking: the dependency is declared
   where a reader sees it, and no cycle arises (`linalg.quadratic-forms` depends only on
   `linalg.hermitian-spectral-theorem`). Fix: add `linalg.quadratic-forms` to the map entry and move
   this unit after it, or move `linalg.quadratic-forms` earlier in the map.
   The other 18 warn lines are about units outside this review and nothing here causes them.

2. [minor] definition "Gradient, Hessian, critical point, definiteness" (line 30): the block is
   `adapted` from `rhb-2006` pp. 162-163, but its definition of *saddle point* - "a critical point
   that is neither a local minimum nor a local maximum" - is broader than the characterisation on
   the cited page, which says a saddle point is one where the function "increases in some directions
   away from the point but decreases in other directions" (p. 162). The two genuinely differ: for
   `f(x,y) = (y - x^2)(y - 2x^2)` I checked symbolically that `grad f(0) = 0`, `H_f(0) = diag(0,2)`,
   `f = -x^4/4` on `y = 3x^2/2` (so the origin is not a local minimum) and `f = m^2x^2 - 3mx^3 + 2x^4`
   along `y = mx` and `f = y^2` on `x = 0` (so `f > 0` along every ray near the origin, and the origin
   is not a local maximum either). That point is a saddle in the unit's sense and not in Riley,
   Hobson and Bence's. Nothing the unit asserts is wrong - every point it actually calls a saddle
   (part 3, and the `g` of the hypotheses remark) does decrease along a ray, as its proofs show - but
   the definition is not the cited page's. Fix: say in the block that the "neither-nor" form is ours
   and record RHB's directional phrasing, as the unit already does for the word "strict".

3. [minor] remark on provenance (line 126) vs statement "Classification of a critical point by the
   Hessian" (lines 138-139): the bullet "The word 'strict' in the classification" attributes the
   strengthening to "parts 1 and 2 of the next statement", but the two-variable list in the same
   statement also says "strict local minimum" and "strict local maximum", and RHB p. 164 says only
   "minima" and "maxima" there too. Fix: extend the bullet to cover the two-variable list.

4. [minor] application (line 291): the forward `:ref` to `linalg.normal-modes` is not in `prereqs`
   and carries no note that the pointer is forward, unlike the `found.lagrange-multipliers` pointer
   in the hypotheses remark, which says so explicitly. Fix: add the same half-sentence.

No `[source]` findings: I found nothing in `rhb-2006` or `lee-2013` that I believe to be wrong, so
nothing was recorded with `tools/discrepancy.mjs`.

## Checked

- Automated checks: `node tools/check/index.mjs --record found.taylor-several-variables
  found.implicit-inverse-function` -> `ok found.taylor-several-variables`, no FAIL line.
  `npm run check -- found.taylor-several-variables` -> no `resembles` line, so no overlap passage to
  compare by hand beyond the ones I chose below.

- Counterexample search.
  - Classification, parts 1-3, on 4000 random symmetric `3x3` Hessians with a random cubic
    perturbation (`f(h) = (1/2) h^T H h + C_{ijk}h_ih_jh_k`): probing along the extreme eigenvectors
    at scales down to `2^-29` of the eigenvalue margin, exactly as the proof does, gave **0**
    violations of "positive definite => strict local min", "negative definite => strict local max",
    "indefinite => points of both signs in every ball". (An undirected 400-direction random probe
    reported 3 apparent failures, all at `lambda_min ~ -0.004`, i.e. a narrow cone the sample missed;
    the directed probe clears them. Not findings.)
  - Mean-value form, `theta` strictly inside `(0,1)`: for `f = e^x sin 2y + x^3 y`, `a = (0.3, 0.2)`,
    `h = (0.11, -0.07)`, solving `f(a+h) - f(a) - grad f(a).h = (1/2) h^T H_f(a + theta h) h`
    numerically gives `theta = 0.33947`, in `(0,1)`.
  - Edge cases of the statements: `h = 0` in the mean-value form (both sides reduce to `f(a) = f(a)`,
    and the proof handles it first); `D = 0` in two variables cannot be indefinite, since the
    eigenvalues are `0` and `tr H` - the proof's step 5 says exactly this; `H = 0` and `H` singular
    semidefinite with `H != 0` are both covered by the part-5 constructions, which I checked have the
    stated gradient and Hessian (the quartic and cubic terms contribute nothing to either) and the
    stated behaviour on the subspaces named. `Phi_2` needs `n - p >= 1` and `Phi_3` needs `lambda_n = 0`,
    both guaranteed by `p <= n-1`.
  - `f` of class `C^2` but not `C^3`, and `U` non-convex: the `o(|h|^2)` proof uses only a ball about
    `a`, as its closing line claims, so neither breaks it.

- Calculations (all independently recomputed with sympy; values I obtained):
  - Example (a), `f = x^4 + y^4 - 4xy`: `solve(grad f) = {(-1,-1), (0,0), (1,1)}` - the unit's three
    points. `H(1,1) = [[12,-4],[-4,12]]`, eigenvalues `{8, 16}`, `det = 128`; `det H(0,0) = -16`;
    `f(1,1) = -2`. All as printed. The global bound: `4xy <= 2(x^2+y^2)` is `2(x-y)^2 >= 0`, and
    `x^4+y^4-2x^2-2y^2 = (x^2-1)^2 + (y^2-1)^2 - 2 >= -2` with equality only at `x = y = ±1`, so
    `min f = -2` - correct, and the equality analysis does pick out exactly the two minima.
  - Example (b), `f = x^2+y^2+z^2-2xyz`: `solve(grad f)` returns exactly the five points
    `(0,0,0), (1,1,1), (1,-1,-1), (-1,1,-1), (-1,-1,1)`. `H(1,1,1) = [[2,-2,-2],[-2,2,-2],[-2,-2,2]]`,
    eigenvalues `{-2 (once), 4 (twice)}`, `det = -32`; `f(1,1,1) = 1`; `H(0) = 2I` with `det = 8`.
    The `4I - 2J` identity checks out entry by entry, and `J` has eigenvalues `3, 0, 0`. The symmetry
    `(x,y,z) -> (-x,-y,z)` does fix `f` and does map `(1,1,1)` to `(-1,-1,1)`.
    `f(t,t,t) = 3t^2 - 2t^3 -> -infinity`, so the origin is not a global minimum, as stated.
  - Application: `grad V = (4x(x^2-1), 4y)` and `H_V = diag(12x^2-4, 4)` confirmed by sympy;
    `H_V(±1,0) = diag(8,4)`, `H_V(0,0) = diag(-4,4)`, `V(0,0) = 1`, `V(±1,0) = 0`, barrier `1`.
    Frequencies `sqrt(8 eps/(m a^2))` and `sqrt(4 eps/(m a^2))` are `sqrt(k/m)` with `k` read off
    `H_V` in units `eps/a^2` - right. Zero-mode counts (3 for an atom, 5 linear, 6 nonlinear, giving
    `3N-5` / `3N-6` vibrations) are right.
  - Remark's degenerate examples: `x^2 ± y^4` and `x^2` all have `H = diag(2,0)` at the origin;
    `(x^2+y^2)^2` and `x^3 - 3xy^2` both have gradient and Hessian `0` there (`v_xx = 6x`,
    `v_xy = -6y`, `v_yy = -6x`). All as claimed.
  - Lee's remainder at `k = 1`: `R_1(h) = sum_{j,k} h_j h_k int_0^1 (1-t) d^2f/dx_j dx_k (a+th) dt`
    is Eq. (C.9) with `1/k! = 1`, `int_0^1 (1-t) dt = 1/2` gives the claimed split, and for `n=1`,
    `f = x^2`, `a = 0` indeed `P_1 = 0` and `R_1(h) = h^2`. The "crude bound"
    `|h^T A h| <= n (max|A_jk|) |h|^2` and the Cauchy-Schwarz step `(sum|h_j|)^2 <= n sum h_j^2` are
    both right, as is the final `|f(a+h) - P(h)| <= (1/2) n omega(|h|) |h|^2`.

- Citations (each opened with `tools/corpus/pages.mjs`):
  - `rhb-2006` pp. 160-162: §5.7 begins on p. 160; Eq. (5.18) is the two-variable expansion on
    p. 160, Eq. (5.19) on p. 161, Eq. (5.20) the `n`-variable one on p. 162, each a formal series
    ending "+ ...", with no remainder - matching the unit's claim that RHB give no estimate. §5.8
    starts on p. 162. Locators right.
  - `rhb-2006` p. 164: the two-variable criteria are there, in exactly the form the unit's remark
    quotes ("minima if both `f_xx` and `f_yy` are positive and `f_xy^2 < f_xx f_yy`"), with the
    saddle case `f_xy^2 > f_xx f_yy`, equivalent to the unit's `D < 0`. The page says "minima" and
    "maxima", never "strict" - the unit reports this correctly. The page's own undetermined-case
    examples are `x^4+y^4` and `x^4+y^3`, not the unit's.
  - `rhb-2006` pp. 166-167: `M_ij = d^2f/dx_i dx_j`, Eq. (5.26) `Delta f = (1/2) Dx^T M Dx`, the
    orthonormal eigenbasis expansion and `Delta f = (1/2) sum_r lambda_r a_r^2`; the eigenvalue
    criteria and, verbatim in substance, "the test may fail if some or all of the eigenvalues are
    equal to zero and all the non-zero ones have the same sign" - which is what the unit's remark
    and part 5 attribute to p. 167. Locator right.
  - `lee-2013` p. 646: Prop. C.6 is equality of mixed partials for `C^2` maps, as cited.
  - `lee-2013` p. 648: Thm C.15 with Eqs. (C.7)-(C.9) is Taylor's theorem to order `k` for
    `f in C^{k+1}(U)` on a convex `W subset U` containing `a`, with the integral remainder. The
    unit's second paragraph of the expansion statement and its whole provenance remark report this
    accurately, including that the `k=1` hypothesis is exactly `f in C^2` and that `R_1` is not
    `o(|h|^2)`.
  - Internal references: `found.partial-derivatives-chain-rule` line 37 does fix the
    "rightmost index differentiated first" convention the definition block invokes;
    `found.taylor-theorem` does give the Lagrange form with `xi` between `a` and `x`, and its
    hypotheses remark (line 203) does carry the sharper version the proof's step 3 quotes - "it is
    enough that `f^(N)` be continuous on `J` and `f^(N+1)` exist at every interior point, and then
    `xi` may be taken strictly between" - which with `N=1` is word for word what the proof needs for
    `theta in (0,1)`; `linalg.quadratic-forms` does state the eigenvalue test for definiteness and
    semidefiniteness, the Rayleigh bounds and the principal-axes theorem.

- Provenance: the closest passage is the classification proof's step 1 and the idea "Why the Hessian
  decides" against `rhb-2006` pp. 166-167. RHB expand `Delta x` in the eigenbasis and read the signs
  off `sum_r lambda_r a_r^2`; the unit instead quotes the Rayleigh bound for the one inequality it
  needs and adds the remainder estimates that RHB do not have, and says so in the trailing paragraph.
  Not a close paraphrase - different notation, different decomposition, and extra content. The second
  closest is the `o(|h|^2)` proof against Lee's Thm C.15: the unit reaches the result from the
  mean-value form rather than from Lee's integral remainder, and the provenance remark sets out the
  difference. Of the `original` labels I checked the risky ones: the mean-value statement and the
  part-4/5 statement, idea and proof are in neither cited source (I read pp. 160-167 and 645-648), and
  the part-5 counterexamples (`x^2 ± y^4`, `x^2`, `(x^2+y^2)^2`, `x^3-3xy^2`) differ from RHB's
  (`x^4+y^4`, `x^4+y^3`, `x^3 e^{-x^2-y^2}`). Both worked examples and the application are the unit's
  own; neither appears on the cited pages.

- Style guide: idea blocks precede each proof; no "clearly", "obviously", "it is easy to see" or
  "trivially" anywhere (grep); two fully worked examples with checkable numbers (`-2` and the
  eigenvalues `-2, 4, 4`); hypotheses named where used - `C^2` is named at the two places it is used
  and the remark says so, the segment hypothesis is named in step 1 of the mean-value proof, and
  step 2 of the classification proof says explicitly where definiteness rather than semidefiniteness
  is needed. Block order follows `docs/contributing/phase-full.md`: ideas immediately before their proofs,
  examples after the proofs, application last.
