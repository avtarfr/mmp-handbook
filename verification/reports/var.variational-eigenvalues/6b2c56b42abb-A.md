VERDICT: PASS
UNIT: var.variational-eigenvalues
VERIFIER: A

## Findings
1. [minor] statement, Part 3 (line 51): the max-min reformulation is labelled "stated without proof", but it follows in two lines from what is proved: for any v_1, ..., v_{n-1}, some nonzero u in span{φ_1, ..., φ_n} is w-orthogonal to all v_k, and step 7 gives R[u] ≤ λ_n; attainment at v_k = φ_k is Part 2. Fix: add these two sentences as a step 8 and drop "stated without proof".
2. [minor] example (line 104): π²/2 = 4.9348..., so "4.935 ≤ λ_1" is rounded the wrong way for a lower bound (true, since λ_1 ≈ 6.548, but it does not follow from ½π² ≤ λ_1). Fix: write 4.934.
3. [minor] remark, Boundary conditions (line 82): "If a trial function violates them, the bound fails" overstates it; a function not vanishing at the ends can still have R ≥ λ_1. Fix: "the bound can fail", and say "function" rather than "trial function", since such a function is by definition not a trial function.
4. [minor] application, Vibrations (line 119): the denominator of Rayleigh's ratio is the mass-weighted mean square displacement ∫ w u², not a kinetic energy (the ratio of potential to kinetic energy at their maxima is 1). Fix: "the ratio of potential energy to ∫ w u² (kinetic energy divided by ω²)". Similarly in the quantum bullet, (ψ, Hψ) should be read as the energy form D[ψ] when ψ is only piecewise C^1.

## Checked
Re-derived step 1 (piecewise integration by parts, cancellation of interior boundary terms), the κ-shift, the expansion of D_κ[u − u_N], the limit passages using Parseval in steps 4–5 (including the gap inequality and the conclusion u = c_n φ_n), and the dimension count and compactness argument in steps 6–7; compared with Strauss pp. 300–315 (the unit's version is stronger: no existence assumption, piecewise C^1 trial functions) and checked the Robin boundary-term sign against the unit's own convention. Numerically checked the example: λ_1 ≈ 6.548395 and λ_2 ≈ 26.464937 by shooting, R[sin πx] = 2π²/3, R[sin 2πx] = 8π²/3, and that sin 2πx is not w-orthogonal to φ_1; checked the q = −100 counterexample (λ_1 = −99 vs −198).
