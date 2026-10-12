VERDICT: PASS
UNIT: linalg.quadratic-forms
VERIFIER: B

Phase: concepts (docs/contributing/phase-concepts.md). No proof or example blocks are expected or present;
the absence of a worked example is not scored against this method unit in this phase. As sole
verifier for this chapter I also ran the statement and definition checks of verifier-a.md items 1-2,
and I ran the `method` block on test cases as phase-concepts item 3 requires.

## Findings
1. [minor] method step 5 (line 113): "The set is unbounded in the direction $u_k$ precisely when
   $\lambda_k = 0$" is ambiguous, and one of its two natural readings is false. If "unbounded in the
   direction $u_k$" means that the set contains points with $|x_k'|$ arbitrarily large, the claim
   fails whenever $q \ge 1$: for $A = \operatorname{diag}(1,-1)$, $c = 1$, the level set is
   $\{(\cosh t, \sinh t)\} \cup \{(-\cosh t, \sinh t)\}$, so $x_1'$ runs to $\infty$ although
   $\lambda_1 = +1 \ne 0$ (computed: $x_1' = \cosh 8 \approx 1490.48$). The intended reading must be
   "the set contains a whole line in the direction $u_k$", i.e. is invariant under translation along
   $u_k$, which is exactly the $\lambda_k = 0$ condition — $Q(x + s u_k) = Q(x) + 2s\lambda_k x_k' +
   \lambda_k s^2$ is constant in $s$ iff $\lambda_k = 0$ — and which is how the "Principal axes"
   statement describes the cylinder case. Fix: say "invariant under translation along $u_k$ (so it
   contains the whole line $x + \mathbb{R}u_k$ through each of its points) precisely when
   $\lambda_k = 0$".
2. [minor] statement "Eigenvalue test for definiteness" (lines 55-57), `src="hassani-2013:§6.4,
   Cor 6.4.10, p. 181"`: the cited corollary covers only the strict case ("A hermitian operator is
   positive if and only if all its eigenvalues are positive"). The block's semidefinite half and the
   $\operatorname{tr}A > 0$, $\det A > 0$ consequence are not on p. 181. They are true and they *are*
   in the unit's own source list — rhb-2006 p. 290 states both the positive-definite and the
   positive-semi-definite eigenvalue criteria — so this is an attribution gap, not a wrong claim.
   Fix: add `rhb-2006:§8.17, p. 290` to this block's `src`, or mark the semidefinite half and the
   trace/determinant corollary as the unit's own, as the unit scrupulously does in its
   "Sylvester's criterion for Hermitian $A$" remark.
3. [minor] `node tools/check/index.mjs` emits
   `content/found/found.taylor-several-variables.md: prerequisite linalg.quadratic-forms comes after
   found.taylor-several-variables in the map` (and the same for `found.gaussian-integrals`). The
   defect is in the map ordering / those units' prereq lists, not in this unit's text, so it does not
   bear on the verdict; flagged so an editor can decide whether to move this unit earlier in
   content/map.yaml.

## Checked
- Counterexample search (statements as written):
  - Definition block: the symmetrisation argument ($x^{\mathsf T}Bx$ equals its own transpose
    $-x^{\mathsf T}Bx$, hence $0$) and the reality of a Hermitian form
    ($\overline{H(x)} = x^\dagger A^\dagger x = H(x)$) are both correct. The definiteness list is
    complete and consistent with the way the later statements use it; "indefinite" is defined by
    taking both signs, which is the complement of semidefinite-of-either-sign, as the later
    trichotomy requires. Leading principal minor and principal minor are both defined, and the
    distinction is what the semidefiniteness remark later turns on — no symbol left undefined.
  - "Principal axes": non-emptiness of $L$ iff some $\lambda_k > 0$ is correct (if $L \ne \emptyset$
    then $\sum_k \lambda_k x_k'^2 = 1 > 0$ forces a positive $\lambda_k$; conversely the axis point
    $t = \pm\lambda_k^{-1/2}$ lies on $L$). Note the justification the unit gives establishes the
    axis-line statement and the "if" direction; the "only if" needs the sum, so the reasoning sketch
    is shorter than the claim — the claim itself is right, and in this phase no proof is required.
    The three cases are exhaustive and disjoint given $p \ge 1$. Degenerate cases checked by hand:
    $n = 2$ with $(p,q,z) = (1,0,1)$ gives two parallel lines, correctly a "cylinder" over a
    $0$-dimensional cross-section; $(p,q,z)=(1,1,0)$ gives a hyperbola, as stated; $A = 0$ gives
    $L = \emptyset$, correctly excluded by the non-emptiness hypothesis.
  - "Eigenvalue test": correct, including the semidefinite half.
  - "Sylvester's criterion": correct, and the negative-definite corollary follows from
    $D_k(-A) = (-1)^kD_k(A)$, which I verified symbolically.
  - "Rayleigh bounds": $\lambda_1 \le \mathcal{R}(x) \le \lambda_n$ held on 2000 random Hermitian
    matrices of sizes 1-5 with random complex trial vectors (no violation beyond $10^{-9}$). The
    equality clause "exactly for $x \in E_{\lambda_1}\setminus\{0\}$" is right because the weights
    $|x_k'|^2/\|x\|^2$ are a probability vector and a weighted average equals the minimum only when
    all weight sits on minimising indices — the remark about degenerate $\lambda_1$ needing the whole
    eigenspace is therefore correct and necessary.
  - "Stationary values of the quotient": correct; the stationary condition $Ax = \mathcal{R}(x)x$ and
    the equivalent constrained formulation on the unit sphere agree, and the Hermitian hypothesis is
    where $(\Delta x^\dagger)Ax = x^\dagger A\,\Delta x$ is used.
  - "Courant-Fischer min-max": verified numerically on a random $4\times4$ complex Hermitian matrix
    with eigenvalues $(-2.899559, -1.806738, -0.487911, 1.345480)$ ascending. Random-subspace search
    (4000 subspaces per $k$) approached each $\lambda_k$ from the correct side in every case
    (min-max from above: $-2.816939, -1.744480, -0.487345, 1.345480$; max-min from below:
    $-2.899559, -1.807367, -0.576888, 1.193229$), and at the subspaces the unit names,
    $V = \operatorname{span}\{u_1,\dots,u_k\}$ and $W = \operatorname{span}\{u_k,\dots,u_n\}$, both
    outer extrema are attained *exactly* ($|{\cdot} - \lambda_k| < 10^{-10}$ for all $k$). The
    ordering convention matches the ascending order declared in the block, and the $k=1$, $k=n$ cases
    do reduce to the Rayleigh bounds. The remark that the formula swaps its two halves under the
    descending convention is correct.
  - Hypotheses: every statement that needs it says "Hermitian (in particular real symmetric)", and
    the method block closes by saying the recipe needs $A$ Hermitian throughout. Sylvester's
    criterion is correctly stated for real symmetric $A$ only, with the Hermitian extension
    separated into a remark and explicitly not attributed to the source.
- Calculations (every displayed number recomputed symbolically with sympy):
  - Conventions remark: $A = \begin{pmatrix}1&2\\2&-1\end{pmatrix}$ has eigenvalues
    $\{-\sqrt5, +\sqrt5\}$ — matches "$\pm\sqrt5$"; $\tilde A = \begin{pmatrix}2&4\\4&-2\end{pmatrix}$
    has eigenvalues $\{-2\sqrt5, +2\sqrt5\}$ — matches "$\pm2\sqrt5$".
  - The same remark's claim that our $A$ is *half* the Hessian: $x^{\mathsf T}Ax$ expands to
    $x_1^2 + 4x_1x_2 - x_2^2$ (matches the polynomial used in method step 1) and its Hessian is
    $\begin{pmatrix}2&4\\4&-2\end{pmatrix} = 2A$. Correct, including the direction of the factor,
    which is the trap the remark is about.
  - Traps remark: $A = \operatorname{diag}(0,-1)$ has $D_1 = 0$, $D_2 = 0$ (both computed $0$) and
    eigenvalues $(-1, 0)$, so it is not positive semidefinite — the counterexample works.
    $\operatorname{diag}(-1,-1)$ has determinant exactly $1.0$ — the second counterexample works.
  - Method step 1's halving rule reproduces $A$ from the polynomial: coefficient of $x_1x_2$ is $4$,
    $a_{12}=a_{21}=2$. Verified.
- Method block run on test cases (phase-concepts item 3):
  - Step 2's trichotomy is the strongest claim in the recipe and it is correct. I generated 200000
    random real symmetric matrices of sizes 1-4, kept the cases with every leading principal minor
    bounded away from zero, and compared the recipe's verdict with the true eigenvalue signs:
    **0 failures**. (The claim follows from Jacobi's theorem: with all $D_k \ne 0$ the number of
    negative eigenvalues is the number of sign changes in $1, D_1, \dots, D_n$, which is $0$ for the
    all-positive pattern, $n$ for the alternating one, and strictly between otherwise — hence both
    signs present, hence indefinite.) The "criterion is silent when some $D_k = 0$" escape is
    necessary and correctly placed, as finding-free trap remark 1 confirms.
  - Steps 3-4: on the random cases above, $S^{\mathsf T}AS$ reproduced $\operatorname{diag}(\lambda_k)$
    and $x' = S^{\mathsf T}x$ reproduced $\sum_k\lambda_kx_k'^2$ to machine precision.
  - Step 5: the non-emptiness test, the axis distance $(c/\lambda_k)^{1/2}$ and the $c^{1/2}$ scaling
    all check out; the one clause I take issue with is finding 1.
  - Step 6: $\mathcal{R}(x)$ is an upper bound for $\lambda_1$ and a lower bound for $\lambda_n$ —
    confirmed by the 2000-case Rayleigh run above; the direction of each bound is stated correctly.
- Citations:
  - rhb-2006 pp. 288-292: matched throughout. p. 288 has §8.17 with Eqs (8.105)-(8.109), including
    the "is a quadratic form with non-symmetric $M$ more general?" argument the unit's definition
    block adapts; p. 289 has Eqs (8.110)-(8.111), the orthogonal reduction to
    $\lambda_1x_1'^2+\dots+\lambda_Nx_N'^2$ with "no cross-terms"; p. 290 has Eq. (8.112), the
    Hermitian form and its reality, and the positive-definite / positive-semi-definite eigenvalue
    criteria; pp. 290-291 have §8.17.1 with Eqs (8.113)-(8.116) and the summary that the stationary
    unit vectors are eigenvectors with stationary value the eigenvalue, followed on p. 291 by the
    quotient $\lambda(x) = x^{\mathsf T}Ax/x^{\mathsf T}x$ that the Rayleigh-quotient definition cites;
    p. 292 has §8.17.2 on quadratic surfaces, with the principal axes along the eigenvectors and the
    squares of the principal radii equal to $\lambda_i^{-1}$, which supports the unit's semi-axis
    $\lambda_k^{-1/2}$. Every locator is right.
  - gelfand-fomin-1963 p. 127 (§30): matched. The page states, in these terms, that a quadratic form
    "is positive definite if and only if the descending principal minors ... are all positive" and
    names it the Sylvester criterion — exactly the role claimed in the frontmatter, and the
    "descending" language is the source's own.
  - hassani-2013 p. 181 (§6.4, Cor 6.4.10): matched — the page carries "Corollary 6.4.10 A hermitian
    operator is positive if and only if all its eigen-values are positive", immediately after
    Cor 6.4.9. The automated `never mention quadra/forms/raylei/quotie` warning on this citation is a
    **false positive**: the keyword probe uses the unit's topic words, while the cited claim is about
    positive Hermitian operators. See finding 2 for the one part of the block the page does not reach.
- Provenance:
  - `npm run check -- linalg.quadratic-forms`: no `resembles` line.
  - Closest passages compared by hand: (i) the definition block against rhb pp. 288-290 — the unit
    compresses RHB's five-equation symmetrisation argument into a single clause, reverses the
    presentation (states the convention and then justifies it), and adds the definiteness list and
    the two minor definitions, none of which are in RHB; genuinely rewritten. (ii) "Stationary values"
    against rhb p. 291 — this is the closest call. RHB's summary sentence ("those column matrices $x$
    of unit magnitude that make $Q$ stationary are eigenvectors of $A$, and the stationary value of
    $Q$ is then equal to the corresponding eigenvalue") and the unit's second sentence carry the same
    two clauses, but the vocabulary is changed throughout (sphere $x^\dagger x = 1$ and critical
    points, rather than column matrices of unit magnitude and stationary values) and the unit leads
    with its own Rayleigh-quotient formulation $Ax = \mathcal{R}(x)x$, which is RHB's later
    $\lambda(x)$ result. I judge it sufficiently rewritten. (iii) "Sylvester's criterion" against
    gelfand-fomin p. 127 — the equivalence is phrased in the opposite direction and the
    negative-definite corollary is the unit's own; rewritten. (iv) the `method` block has no
    counterpart in RHB at all (RHB gives no recipe), and the `original` blocks (Rayleigh bounds,
    Courant-Fischer, note, traps) contain nothing I could locate in any cited source. The `original`
    and `adapted` labels are honest in both directions.
- Automated checks: `node tools/check/index.mjs --record` reports `ok` for this unit, no FAIL line.
  Warn lines judged: the hassani p. 181 keyword warning is a false positive (verified above);
  the `found.taylor-several-variables` / `found.gaussian-integrals` prerequisite-order warnings are
  finding 3; `map: 309 planned unit(s) not written yet` is expected at this stage of the build.
- Prerequisites and cross-references: prereqs `linalg.hermitian-spectral-theorem` (used by
  "Principal axes" and every Hermitian statement) and `linalg.determinants` (used by the minors and
  Sylvester) are exactly what the statements and definitions need. The single `:ref` target
  (`linalg.hermitian-spectral-theorem`) exists in content/map.yaml and is written.
