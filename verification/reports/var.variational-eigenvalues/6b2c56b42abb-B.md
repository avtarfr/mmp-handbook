VERDICT: FAIL
UNIT: var.variational-eigenvalues
VERIFIER: B

## Findings
1. [blocking] statement (line 51), Part 3, "Equivalently, λ_n is the largest value … of the infimum of R over trial functions w-orthogonal to all v_k … (this form is stated here without proof)": the citation does not support this sentence. The block's src (strauss-2008 §11.1 Thms 1–2, pp. 301–303, and §11.2 Thm 1, pp. 307–308) and the frontmatter pages 300–315 contain only the minimum principles and the min-max principle. The max-min form is Strauss §11.6, Thm 2 (Maximin Principle), pp. 324–325, which is not cited anywhere in the unit. Because the claim is stated without proof, the reader depends on the citation for it. Fix: add "strauss-2008:§11.6 Thm 2 (maximin principle), pp. 324–325" to the statement block's src. Also extend the frontmatter Strauss `loc`/`pages` to cover p. 324–325 (e.g. pages "300-315, 324-325"). Strauss allows piecewise continuous y_k; restricting to continuous v_k as the unit does is still correct, because the maximum is attained at v_k = φ_k.
2. [minor] remark (line 87): the Robin sentence says only "at b". A reader might take it to mean that trial functions are free at both ends. Fix: optionally say "trial functions still vanish at a but need not satisfy any condition at b".

## Checked
- Automated checks: `node tools/check/index.mjs --record` gives `ok` for the unit. Its only warn line is the map-wide "313 planned unit(s) not written yet", which is expected in this pilot and does not concern this unit. `npm run check` shows no `resembles` warnings.
- Counterexample search:
  - Statement tested as written against the Dirichlet constant u = 1 (not a trial function, R = 0 < λ_1 = 1, as the remark says). It was also tested on q of either sign, where κ is needed and is supplied in step 2.
  - Comparison with w: -u'' - 100u = λwu on [0, π] gives λ_1 = -99 for w = 1 and λ_1 = 2(1 - 100) = -198 for w = ½. Confirmed.
  - Min-max sanity check by FEM with N = 400, p = 1 + ½ sin 3x, q = -5 + 10x², w = 1 + x on [0, 1]. λ_3 = 77.09. The max of R over 200 random 3-dim subspaces was never below λ_3.
  - Proof algebra: step 3 expansion, D_κ[u - u_N] = D_κ[u] - Σ(λ_n + κ)c_n², rechecked by bilinearity. The step 5 gap inequality forces Σ_{k>n} c_k² = 0, and Parseval applied to u - c_nφ_n gives 0. The piecewise-C¹ integration by parts in step 1 is valid because u and pφ_n' are continuous. The max-min form itself is true: any n-1 constraints leave a nonzero u in span{φ_1..φ_n} with R ≤ λ_n.
- Calculations (sympy/mpmath):
  - ∫_0^1 (π cos πx)² dx = π²/2, ∫_0^1 (1+x) sin²πx dx = 3/4, R[sin πx] = 2π²/3 = 6.579736.
  - ∫(2π cos 2πx)² = 2π², weighted norm 3/4, R[sin 2πx] = 8π²/3 = 26.318945.
  - Shooting with mpmath odefun: λ_1 = 6.5483953, λ_2 = 26.4649367. Both match the stated 6.5484 and 26.465.
  - Relative error 2π²/3 / λ_1 - 1 = 0.48%, matching the stated "0.5% high".
  - Bounds π²/2 = 4.9348 and π² = 9.8696 match 4.935 and 9.870.
  - The Robin boundary term -σu(b)² was rederived by integration by parts. It is consistent with Strauss p. 315 under σ = -a.
- Citations:
  - strauss-2008 pp. 300–315 (read in full). The trial functions and Rayleigh quotient are on p. 300. Thms 1 and 2 of §11.1 are on pp. 301–303. The minimax principle, Thm 1 of §11.2, is on pp. 307–308. The Neumann case, Thm 1 of §11.3, is on p. 310. The completeness proof with the energy identity for the remainder, Thm 2, is on pp. 311–313. The variable coefficients with p in C¹, q and m continuous and positive, and the m-inner product are on p. 314, and Robin/Neumann on p. 315. The definition, the proof src, the frontmatter roles and the inline :cite (p. 310, p. 315) all match. The exception is the max-min clause (finding 1), which is on pp. 324–325 and is uncited.
  - gelfand-fomin-1963 p. 198: §41.1, the Sturm-Liouville equation as the Euler equation of ∫(Py'² + Qy²) with ∫y² = 1. It supports the idea block.
  - rhb-2006 pp. 790–793: §22.6 shows that the stationary value of I/J equals the eigenvalue (pp. 791–792), and §22.7 expands the trial function in eigenfunctions to get a weighted average (p. 793). It supports the idea block and the role in the frontmatter.
- Provenance:
  - The proof was compared with Strauss pp. 311–313 and p. 308. The energy identity is reused, but in the reverse direction: it proves the minimum principle from completeness, where Strauss proves completeness from the minimum principle. The κ shift and the equality argument are our own. The min-max steps follow Strauss's route with different wording. It is adequately rewritten.
  - The idea block was compared with RHB p. 793 and GF p. 198. The wording and structure differ.
  - The example (density 1 + x) and the comparison counterexample do not appear in the cited pages, so `original` is fine.
- Style: the idea comes before the proof, and there is no "clearly" or "obviously". The remark names the hypotheses with the steps that use them. The worked example has checkable numbers, and the proof ends with □.
