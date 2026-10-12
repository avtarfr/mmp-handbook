VERDICT: PASS
UNIT: complex.branch-points-cuts
VERIFIER: A

## Findings
1. [minor] statement, part 1 (lines 44 and 53): the display gives $\operatorname{Arg} z \in
   (-\pi,\pi)$, whereas `complex.elementary-functions` *defines* $\operatorname{Arg}$ with range
   $(-\pi,\pi]$; the paragraph that follows says both ranges are in use here, and example item 3
   then uses the half-open one. Nothing in the unit computes with both at once, and the two agree
   on the cut plane, so no argument is affected — but one symbol with two ranges is avoidable. Fix:
   keep $\operatorname{Arg} z \in (-\pi,\pi]$ throughout and say that the principal branch is the
   *restriction* of $\ln$ to $\mathbb{C}\setminus(-\infty,0]$, which is what the next paragraph
   already explains in words.
2. [minor] definition (line 33): "continuation once around *some* sufficiently small circle about
   $z_*$" leaves open whether the condition is "some" or "every sufficiently small". For the cases
   treated the two readings coincide (every circle about $0$ changes the value of
   $\operatorname{Ln}$; no small circle about $z_* \ne 0$ does), so nothing downstream breaks. Fix:
   choose one, e.g. "every sufficiently small circle".
3. [minor] example, step 4 (line 149): "$F$ is analytic ... being a product of the polynomial $z-4$
   with a composition of analytic functions" uses the chain rule for complex derivatives, which is
   not among the rules listed in prereq `complex.cauchy-riemann` (sum, product, quotient only). Fix:
   add the chain rule there, or note here that it is proved exactly as in the real case.

## Checked
Verified proof part 1 in both halves: the continuation along $z(t) = r_0e^{i(\theta_0+t)}$ returns
the starting value plus $2\pi i$, so the order at $0$ is infinite; and for $z_* \ne 0$ I checked the
claim that a circle of radius $<|z_*|$ lies in a half-plane missing $0$ by computing
$\operatorname{Re}(w\bar z_*) \ge |z_*|^2 - |h||z_*| > 0$ on that disk. Re-derived the four partials
of $u = \log r$, $v = \operatorname{Arg}z$, confirmed they satisfy $u_x = v_y$, $u_y = -v_x$ and are
continuous off the cut, and that $u_x + iv_x = \bar z/|z|^2 = 1/z$. Checked part 2's counting: the
continued value is multiplied by $e^{2\pi i np}$, which is $1$ iff $np \in \mathbb{Z}$, first at
$n = q$ when $p = s/q$ is reduced; and that the "otherwise" case really is infinite order for both
irrational real $p$ and non-real $p$ (for non-real $p$ the moduli $e^{-2\pi k\operatorname{Im}p}$ are
distinct). Part 3's proof (ours, not Ahlfors's) is correct as written: $\varphi(t) - t$ is a
continuous map of an interval into $2\pi\mathbb{Z}$ hence constant, so $\varphi(2\pi)-\varphi(0) =
2\pi$ contradicts single-valuedness, and only continuity is used, so punctured disks and the
punctured plane are covered. Compared the statements with the printed sources via
`tools/corpus/pages.mjs`: Ahlfors p. 108 states exactly the annulus claim (he gets it from
$\oint dz/(z-a) = 2\pi i$, as the unit says); Ahlfors p. 46 for $\log w = \log|w| + i\arg w$ and the
value counts for $a^b$; Arfken Eqs. (11.55)–(11.56) and pp. 499–501 for continuation along a path,
infinite order at $0$, the cut from $0$ to $\infty$ "in any direction", the principal branch, and
the explicit statement that the two sides of a cut do not cancel; Arfken Example 11.2.3, p. 475 for
$d\ln z/dz = 1/z$ from the polar Cauchy-Riemann equations; Arfken Example 11.6.4, pp. 502–503 and
RHB pp. 836–837 for the loop test, the finite cut joining two branch points, and the alternative of
two cuts to infinity; Hassani Definition 12.2.1, p. 365 and §12.2.1, p. 366 for the one-circuit
definition, $\infty$ as a branch point of $\ln z$, the $f_n$ bookkeeping and the Riemann-sheet
picture. All of the worked example's claims tested numerically with numpy: on a grid of 29 124
points over $-8 \le \operatorname{Re}z \le 12$, $|\operatorname{Im}z| \le 6$ with $[1,4]$ excluded,
$\max|F(z) - \sqrt{z-1}\sqrt{z-4}| = 4.0\times10^{-15}$ and $\max|F^2 - (z-1)(z-4)| =
6.6\times10^{-14}$, confirming both the identity with the naive product and that $F$ is a branch;
$F(0) = -2$, $F(10) = 3\sqrt6 = 7.348469$; $m(2.5+i\varepsilon) = -1 - \tfrac43 i\varepsilon$
approaches $-1$ from below as claimed, and $F(2.5 \pm i\varepsilon) \to \pm 1.5i$, matching the
$\mp i\pi/2$ limits in the text. Checked the Möbius argument that $m$ carries $[1,4]$ onto
$(-\infty,0]\cup\{\infty\}$ and nothing else there, and the $\infty$ test $f = t^{-1}((1-t)(1-4t))^{
1/2}$. In the second example: $2e^{2\pi i/3} = -1+i\sqrt3$ with cube $8$; the branch points of
$\ln\frac{z-1}{z+1}$ and the sign of each loop; $Q_0(z) = \tfrac12\ln\frac{z+1}{z-1}$ is the
standard second-kind Legendre function cut on $[-1,1]$; and $\ln(-4) = 1.386294 + 3.141593i$ with
the lower limit $\log 4 - i\pi$.
