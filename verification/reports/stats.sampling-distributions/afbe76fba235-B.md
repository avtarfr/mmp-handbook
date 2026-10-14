VERDICT: PASS
UNIT: stats.sampling-distributions
VERIFIER: B

## Findings
1. [minor] frontmatter, arfken-2013 source (line 19): the loc calls Arfken's argument "the second-order argument", while the body (line 60) calls it "a first-order argument". Arfken p. 1168 says the approximation alpha^2 ~ s^2/n is "good to first order", so the body is right and the loc is inconsistent with it. Fix: in the loc, write "the first-order argument" (or "the argument from (23.93)").
2. [minor] proof, Step 7 (line 228): the F density is only sketched ("after collecting constants one obtains"). Grimmett and Stirzaker also leave it as an exercise, and the density is correct (checked below). Fix (optional): show the w-integral and its constant in one displayed line, as Step 6 does for t.

## Checked
- Automated checks: `node tools/check/index.mjs --record` gives "ok" for this unit, with no FAIL lines. Warn lines: definition (line 78) shares 8-word runs with rhb-2006 p. 1297 ("the chi squared distribution with ... degrees of freedom") and grimmett-stirzaker-2020 p. 137 ("the F distribution with r and s degrees of freedom, written"). These are the standard names of the distributions and are acceptable. The prerequisite-order warns concern other units.
- Counterexample search: the theorem was simulated with N(3,4) samples of size n=5 and 200000 replicates. corr(Xbar, S^2) = 0.0008. A KS test of (n-1)S^2/sigma^2 against chi2(4) gave p = 0.40 and 0.49 over two seeds; the p = 0.006 from a first run with seed 1 did not reproduce. Checked n=1 (S^2 undefined, which the unit excludes with n >= 2). Checked the two-point +-1 example of the remark: S^2 is in {0,2}, S^2 = 0 exactly when Xbar = +-1, and E S^2 = 1 = sigma^2, all correct. Checked the unequal-variance remark: S_Y^2/S^2 = (sigma_2^2/sigma_1^2) F(m-1,n-1), correct. The claim that among iid-coordinate laws with a density only the centred normal is rotation-invariant is Maxwell's theorem, correctly stated. The claim that t vs normal tails differ by "tens of percent" at n ~ 10: P(|T_9|>2) = 0.0766 vs 0.0455, correct.
- Calculations (scipy/sympy):
  - Sample 1: sum 160.68, mean 20.085, deviations as listed, Q = 0.3582, S^2 = 0.0511714, S = 0.226211, s^2 = 0.044775, s = 0.211601, s/S = sqrt(7/8) = 0.935414.
  - t statistic: SE = 0.0799777, t = 1.062797, two-sided p for t(7) = 0.323158, normal p = 0.287874.
  - Chi-squared: U = 5.7312, P(chi2_7 > U) = 0.571463, sqrt(14) = 3.741657.
  - Sample 2: sum 120.50, mean 20.08333, Q_Y = 0.799333, S_Y^2 = 0.159867. F = 3.124139, upper tail 0.084810, lower tail 0.915190, two-sided 0.169620, 97.5% point of F(5,7) = 5.285237.
  - Every printed figure agrees.
  - Densities: the t(r) formula matches scipy for r = 1, 3, 7 (max error 6e-17), and t(1) equals the Cauchy density. The F(r,s) formula matches scipy for (5,7), (1,3), (3,10) (max error 2e-15), and the mean by quadrature equals s/(s-2).
  - Step 6: the Jacobian sqrt(w/r) is correct, the exponent of w is (r-1)/2, and the factor (1/2)^{r/2}(1/2)^{-(r+1)/2} = sqrt 2 is correct.
  - Step 7: the Jacobian (r/s)w is correct.
- Citations:
  - grimmett-stirzaker-2020 pp. 135-137: S^2 with divisor n-1 and the footnote, Thm (4.10.1), the rotation proof (2)-(4), U, V, T, the t density with s = u, t = v sqrt(r/u), the F definition with properties (a), (b), the F density, and Exercises 4.10.1-3. All present, and the locators are right.
  - grimmett-stirzaker-2020 p. 108: Example (4.4.6) chi2(d) as Gamma(1/2, d/2), and (4.4.8) the beta function, match.
  - grimmett-stirzaker-2020 p. 122: Example (4.7.1), X^2 is Gamma(1/2,1/2) = chi2(1), matches.
  - rhb-2006 p. 1193: (30.122)-(30.123) and the linear-constraint rule, match.
  - rhb-2006 pp. 1224-1225: (31.6)-(31.8), the 1/N convention and the computing form, match.
  - rhb-2006 pp. 1229-1230: the sampling distribution P(a^|a) and the Gaussian x-bar example, match.
  - rhb-2006 pp. 1239-1240: (31.34)-(31.35), the hyperplane/hypersphere argument, match.
  - rhb-2006 p. 1245: (31.40), matches.
  - rhb-2006 pp. 1285-1286: (31.113), (31.115), (31.118), match.
  - rhb-2006 pp. 1292-1294: u = Ns^2/sigma0^2 ~ chi2_{N-1}, F (31.123), and the density (31.126), match.
  - arfken-2013 p. 1168: (23.94)-(23.95), the probable error in x-bar, Bessel's correction and the n = 1 remark, match. The body's "first-order" is faithful; see finding 1 for the loc.
- Provenance:
  - Proof vs GS p. 136: the same rotation route, which is cited, but rewritten into seven labelled steps with added justification (Jacobian, Gram-Schmidt completion, the constraint count). It is not a close paraphrase.
  - Step 6 vs GS p. 137: the same computation, with the gamma integral and the constants worked out in our own words.
  - The definitions are rewritten.
  - The "original" blocks are the note, idea, remark, method, example and application. They are our own exposition, and the worked example is our own data.
  - The idea block describes the cited proof's geometry but in our own framing; acceptable.
- Style: idea before proof; no "clearly"/"obviously" found; a fully worked example with checkable numbers is present; hypotheses are named where used (remark).
