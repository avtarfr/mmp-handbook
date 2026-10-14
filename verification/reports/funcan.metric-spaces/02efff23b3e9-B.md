VERDICT: PASS
UNIT: funcan.metric-spaces
VERIFIER: B

## Findings

1. [minor] remark "Where the hypotheses are used", second bullet (line 160): "**(M4) carries parts 1–6 by itself.** ... Nothing else about $d$ is used" is contradicted by the unit's own proof, which names (M2) at the uniqueness step of part 1 ("$x=z$ by (M2)", line 107) and (M3) at part 2 ("(M4) and (M3) give", line 109) — and by the bullet immediately above it, which says "(M2) is what makes limits unique". Fix: say that (M4) is the only *inequality* used, the others entering only to close the argument ("$d=0 \Rightarrow$ equal", symmetry), or weaken to "every estimate above is one application of (M4)".

2. [minor] remark, fourth-from-last bullet (line 152): "Boundedness is what makes the sequence converge in $\mathbb{R}$ at all, and this is why part 8 says *bounded*". The unbounded open interval $(0,\infty)$ is also incomplete, so boundedness is not what an open interval needs in order to be incomplete; what is needed is one finite endpoint. Part 8 itself is true as written (the finding is about the explanation, not the claim). Fix: "this is why part 8 does not say *every* open interval: $\mathbb{R}$ is one, and is complete", and note that one finite endpoint suffices.

3. [minor] idea (line 101), labelled `provenance=original`: the second paragraph is Kreyszig's three-step completeness scheme (§1.5, p. 32) in prose — construct a candidate from scalar limits, check it lies in the space, check convergence in the metric. The unit does credit the scheme to Kreyszig in the `method` block, so nothing is uncredited, but the `idea` block is following a specific book's route and would be more honestly `adapted` with `src="kreyszig-1978:§1.5, p. 32"`.

4. [minor] statement part 3 (line 82), "a Cauchy sequence with a convergent subsequence converges": this is Kreyszig's Problem 2, p. 32, not one of the theorems listed in the frontmatter `loc`. The unit proves it itself, so there is no citation error; the `loc` could say so.

## Checked

- **Automated checks.** `node tools/check/index.mjs --record funcan.metric-spaces funcan.banach-fixed-point` → `2/2 unit(s) pass`, no FAIL line. One unit-level warning: `warn funcan.metric-spaces :::definition (line 32): 8-word run shared with hirsch-smale-devaney-2013 p. 346: "and if and only if the triangle inequality"`. Judged standard wording — that page states the metric axioms in the universal form ("$d(s,t)=0$ if and only if $s=t$ ... The triangle inequality:"), the book is not a source of this unit, and the run is an artifact of flattening a bulleted axiom list. No action. The remaining warnings in that run are map-ordering warnings about *other* units (e.g. green.neumann-series, pde.lax-milgram listing funcan.banach-fixed-point as a prerequisite that comes later in the map) and are not attributable to this unit.

- **Counterexample search.** Tried against the statement as written: a pseudometric (drop the "only if" of (M2)) against parts 1 and 4; $E=\varnothing$ in part 4; closedness relative to a subspace ($[\tfrac12,1)$ closed in $(0,1)$, not in $\mathbb{R}$) against part 5; $\mathbb{Q}$ closed in itself and incomplete, to test whether part 5 secretly needs ambient completeness in both directions (it does not, and the unit says so at line 115); $(0,\infty)$ as an unbounded incomplete open interval against part 8 (part 8 claims only the bounded case, so no counterexample); $\mathbb{R}\cong(0,1)$ against the "not topological" claim; constant and discontinuous functions against the $C[a,b]$ claims; $t_\ast$ at the endpoints $t=0,1$ in Example 1. No counterexample found.

- **Calculations** (`.venv/bin/python`, mpmath at 30 dps plus a $2\times10^6$-point grid):
  - $d_\infty(f_n,f_m)=(n/m)^{n/(m-n)}(1-n/m)$ checked against a brute-force maximum of $t^n-t^m$ on $[0,1]$ for $(n,m)=(1,2),(3,7),(4,8),(50,100),(2,5)$: agreement to 10 digits in every case; $(1,2)$ and $(4,8)$ and $(50,100)$ all give exactly $0.25$, confirming the "$\tfrac14$ for every $n$" claim at $m=2n$.
  - $d_\infty(f_3,f_7)=(3/7)^{3/4}(4/7)=0.302676959271$ — unit says $0.3026769\ldots$ ✓. $d_1(f_3,f_7)=0.125$ ✓.
  - $d_1(f_n,f_{2n})=n/((n+1)(2n+1))$: $0.0888889$ at $n=4$, $0.009706853$ at $n=50$ — unit says $0.0888889$ and $0.0097069$ ✓.
  - $\int_0^1\tanh(10t)\,\mathrm{d}t = 0.93068528215$ by quadrature $=\ln\cosh 10/10$ ✓, and $\ln\cosh 10 = 9.3068528215$ ✓.
  - $d_1(g_{10},\operatorname{sgn})=2(1-\ln\cosh10/10)=0.1386294357$; the asymptotic $2\ln2/10=0.1386294361$. Agreement to 8 decimals as claimed, difference $4.1\times10^{-10}$, consistent with "of order $e^{-20}$" ($e^{-20}=2.1\times10^{-9}$). At $n=50$: $0.0277258872$ — unit says $0.027725887$ ✓.
  - $d_1(g_{10},g_{20})=2[\ln\cosh20/20-\ln\cosh10/10]=0.0693147176438$; direct numerical quadrature of $\int_{-1}^{1}|\tanh10t-\tanh20t|\,\mathrm{d}t$ gives $0.0693147176438$, matching the unit's $0.0693147176$ ✓, and $\ln2/10=0.0693147181$ agrees to 9 decimals as claimed ✓.
  - $\tanh 2-\tanh 1 = 0.2024334241$ — unit says $0.2024334\ldots$ ✓.
  - Symbolic: $\ln\cosh n = n-\ln2+\ln(1+e^{-2n})$ verified, so the bracket is $\ln2(n^{-1}-m^{-1})$ with error of magnitude $<e^{-2n}$ and of the sign that keeps $d_1(g_n,g_m)<2\ln2/n$ — the inequality at line 140 is safe, not marginal.

- **Citations.** All five works opened at the cited pages.
  - kreyszig-1978 pp. 3–6: Def. 1.1-1 with (M1)–(M4) on p. 3 ✓; generalized triangle inequality, subspace and induced metric p. 4 ✓; Examples 1.1-2 ff. p. 5 ✓. Kreyszig writes (M4) as $d(x,y)\le d(x,z)+d(z,y)$ and the unit as $d(x,z)\le d(x,y)+d(y,z)$ — a relabelling of the interpolating point, same axiom.
  - kreyszig-1978 pp. 25–32: Def. 1.4-1 p. 25 ✓; Lemma 1.4-2 (a) boundedness and uniqueness, (b) $d(x_n,y_n)\to d(x,y)$, pp. 26–27 ✓; Def. 1.4-3 and Thm 1.4-4 p. 28 ✓; Thm 1.4-5 p. 29 ✓; Thms 1.4-6 and 1.4-7 p. 30 ✓; Thm 1.4-8 pp. 30–31 ✓; the three-step scheme (i)–(iii) p. 32 ✓.
  - kreyszig-1978 pp. 36–39: Example 1.5-5 and Thm 1.5-6 pp. 36–37 ✓; Example 1.5-7 ($\mathbb{Q}$) p. 37, 1.5-8 (polynomials in the max metric) pp. 37–38, 1.5-9 (continuous functions in the integral metric) pp. 38–39 ✓.
  - folland-1999 pp. 13–15: codomain $[0,\infty)$ with three axioms and $\rho_1,\rho_\infty$ on $C([0,1])$ p. 13 ✓; Prop. 0.22, Cauchy/complete subset, Prop. 0.24 p. 14 ✓; diameter, bounded, totally bounded, Thm 0.25 (a)(b)(c) p. 15 ✓. The note's description of Folland's packaging is accurate.
  - hassani-2013 pp. 8–10: Def. 1.3.1 with three conditions, the first combining nonnegativity with (M2), p. 8 ✓; the Minkowski/relativity caveat on the same page ✓; Example 1.3.2 items 3–5 (sphere chord and great circle; integral and max metrics) p. 9 ✓; Defs. 1.3.3, 1.3.4 p. 9 and Def. 1.3.5 with the alternating-harmonic Cauchy sequence in $\mathbb{Q}$ p. 10 ✓.
  - stakgold-holst-2011 pp. 234–242: axioms (4.3.1) and the "function of two variables" remark p. 234 ✓; convergence and series p. 235 ✓; Cauchy, "if a sequence converges it is fundamental", completeness, and "the importance of completeness ... to carry out limiting processes within the space" p. 236 ✓; the $\sum 1/k!$ argument pp. 237–238 ✓; Examples 1–5 pp. 238–239, Example 6 (arctangent, $L_2$ norm, not complete) pp. 239–240, Example 7 ($L_2(a,b)$ *as* the completion) p. 240, Example 8 (Hamming) p. 240 ✓; closure, density, boundedness, compactness pp. 240–241 ✓.
  - reed-simon-1980 pp. 5–9: p. 5 Example 3 gives $d_1=\max|f-g|$ and $d_2=\int|f-g|$ on $C[0,1]$, confirming the subscript convention the unit says it departs from, and states $d_2\le d_1$ ✓; the spike functions of Fig. 1.2 p. 5 with $d_1(g_n,g_m)=1$ on p. 8 ✓; Cauchy, completeness, $\mathbb{Q}$ p. 8, dense and isometry p. 9 ✓; the warning "$[\tfrac12,1)$ is closed in $(0,1)$" on p. 6, exactly as cited at line 161 ✓.

- **Provenance.** Closest passages compared by hand.
  - `proof[Part 7 for $C[a,b]$...]` vs Kreyszig Example 1.5-5 / Thm 1.5-6, pp. 36–37. Same three-step route (which the unit cites), but reordered — uniformity is promoted to its own step 2 and membership demoted to step 3, where Kreyszig interleaves them — and independently worded, with our own emphasis sentence on why the bound is $t$-independent. Correctly `adapted`; not a close paraphrase.
  - The incompleteness construction uses $\tanh(nt)$, which is neither Kreyszig's piecewise-linear ramp (p. 38) nor Stakgold and Holst's arctangent (p. 240); the pseudometric detour and the $d_2$ corollary are the unit's own. The route is cited, the execution is ours.
  - `definition[Metric space]` vs Kreyszig p. 3: the (M1)–(M4) labels are taken over deliberately and the unit says so. The automated `resembles` hit is against a non-source book and is the standard phrasing of the axioms (see above).
  - Blocks labelled `original` (idea, both examples, application): the two examples are our own computations; the application is our own. Only the idea block's second paragraph tracks a book's route (finding 3), and the credit is given elsewhere in the unit.

- **Style.** Blocks appear in guide order; `idea` precedes both proofs; no "clearly"/"obviously"/"easy to see" anywhere (grepped); both proofs end in $\square$; two fully worked examples ending in checkable numbers ($0.25$, $0.0888889$, $0.13862944$, $0.069314718$); hypotheses named at the steps that use them (lines 111, 115, 124, 150) and collected in the remark; no exercises.

- **Discrepancies recorded.** None. Nothing in the unit reports a source in a way I believe the source does not support, and I found no place where I think a cited book is wrong.
