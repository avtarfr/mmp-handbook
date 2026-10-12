---
id: complex.branch-cut-integrals
title: Integrals around branch cuts
kind: method
level: core
summary: For an integrand containing a fractional power or a logarithm, a keyhole contour hugging the cut converts the integral into a residue sum, because the two edges of the cut carry values of the multivalued factor differing by a known constant; a dogbone contour does the same for a cut joining two branch points.
prereqs: [complex.residue-theorem, complex.branch-points-cuts, complex.contour-integrals, complex.cauchy-theorem, complex.cauchy-integral-formula]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§24.13.3, integrals of multivalued functions, Fig. 24.16 and the worked integral $\\int_0^{\\infty} dx/[(x+a)^3 x^{1/2}]$, pp. 866-867"
    pages: "866-867"
    role: the keyhole (cut-plane) contour; the mechanism by which the two straight edges fail to cancel; the small- and large-circle estimates
  - work: arfken-2013
    loc: "§11.8, Avoidance of Branch Points and Exploiting Branch Cuts, Examples 11.8.7-11.8.9, Eqs. (11.109)-(11.119), pp. 532-537; and §11.6, Example 11.6.4, the phase table for $(z^2-1)^{1/2}$, p. 503"
    pages: "503, 532-537"
    role: the rule that the branch must be followed continuously round the contour; the $\\int_0^{\\infty} x^p/(x^2+1)\\,dx$ keyhole computation; the device of inserting a logarithm; the phase bookkeeping for a two-branch-point factor
  - work: ahlfors-1979
    loc: "Ch. 4, §5.3, case 4, the contour for $\\int_0^{\\infty} x^{\\alpha}R(x)\\,dx$ and its convergence conditions, p. 159"
    pages: "159"
    role: the convergence conditions on the exponent and on the rational factor; the alternative substitution $x=t^2$
  - work: hassani-2013
    loc: "§12.2, Example 12.2.5 ($\\int_0^{\\infty}x^{-a}dx/(x+1)$ on the branch $0<\\theta<2\\pi$) and Example 12.2.6 ($\\int_0^{\\infty}\\ln x\\,dx/(x^2+a^2)$), pp. 370-371"
    pages: "370-371"
    role: cross-check of the keyhole bookkeeping for a fractional power, and of a logarithm-on-a-cut computation carried out on the principal branch $-\\pi<\\theta<\\pi$ with a two-ray contour rather than a keyhole
---

:::note{provenance=original}
**What it means.** A fractional power or a logarithm is not single-valued, so there is no contour integral to apply the residue theorem to until a branch has been chosen and a cut drawn. Far from being an obstacle, the cut is the mechanism. Run the contour along both sides of it: the integrand takes two different values on the two edges, differing by a factor $e^{2\pi i p}$ for $z^{p}$ or by an additive $2\pi i$ for $\log z$, so the two straight pieces do not cancel. What survives is a known multiple of the integral you wanted, and the residue theorem supplies its value.

Two shapes cover most cases: a **keyhole**, for a cut running from a branch point at the origin out to infinity, and a **dogbone**, for a cut joining two branch points, as in $(z^2-1)^{1/2}$.
:::

:::definition[Keyhole and dogbone contours]{provenance=adapted src="rhb-2006:§24.13.3, Fig. 24.16, p. 866; arfken-2013:§11.8, Fig. 11.26, p. 535"}
**Keyhole.** Suppose the integrand has a single branch point at $z=0$ and the branch is fixed by taking $\arg z \in (0, 2\pi)$, so that the cut is the positive real axis. For $0 < \rho < R$ the **keyhole contour** $K_{\rho,R}$ consists of

- the segment just above the cut, from $\rho$ to $R$ (where $\arg z = 0^{+}$);
- the large circle $\lvert z\rvert = R$, counterclockwise, from $\arg z = 0^+$ to $\arg z = 2\pi^-$;
- the segment just below the cut, from $R$ back to $\rho$ (where $\arg z = 2\pi^{-}$);
- the small circle $\lvert z\rvert = \rho$, clockwise, closing the contour.

**The two segments are a limit, and that is how they are to be read.** The branch is undefined *on* the cut, so a contour with a piece lying on the positive real axis is not literally a contour in the domain of the integrand. What is meant is a limit. For small $\delta > 0$ let $K_{\rho,R}^{\delta}$ be the honest closed contour made of the ray segment $\arg z = \delta$, $\rho\le\lvert z\rvert\le R$, outwards; the circular arc $\lvert z\rvert = R$ from $\arg z = \delta$ to $\arg z = 2\pi - \delta$ counterclockwise; the ray segment $\arg z = 2\pi-\delta$ inwards; and the arc $\lvert z\rvert = \rho$ from $2\pi-\delta$ back to $\delta$ clockwise. This lies entirely in the cut plane $\{0<\arg z<2\pi\}$, where the integrand is single-valued and analytic apart from its poles, so the residue theorem applies to it for each $\delta$.

Letting $\delta \to 0^{+}$ is legitimate because the branch extends continuously to each edge of the cut. The integrand has finitely many poles and none on the cut, so their arguments avoid $0$ and $2\pi$: choose $\delta_0 > 0$ smaller than the argument of every pole and smaller than $2\pi$ minus it. Then $(r,\alpha) \mapsto f(re^{i\alpha})$ is continuous on each of the compact sets $[\rho,R] \times [0,\delta_0]$ and $[\rho,R] \times [2\pi-\delta_0, 2\pi]$ once the two edge values of the jump statement below are assigned at $\alpha = 0$ and $\alpha = 2\pi$, hence uniformly continuous on each. (It need not be continuous on all of $[\rho,R]\times[0,2\pi]$, since a pole lies in between.) So the two ray integrals converge to the integrals of those edge values along $[\rho,R]$, the two arc integrals converge to the arc integrals taken over the full angle, and the residue sum does not move at all, since no pole is crossed for small $\delta$. We write $K_{\rho,R}$ for the limiting contour and use the edge values directly, which is what every computation below does.

$K_{\rho,R}$ is a positively oriented simple closed contour in the closed cut plane, and it encloses every singularity of the integrand with $\rho < \lvert z\rvert < R$ other than those on the cut itself.

**Dogbone.** Suppose instead the multivalued factor is single-valued off a finite segment $[\alpha,\beta] \subset \mathbb{R}$ -- the standard case being $(z^2-1)^{1/2}$ with $[\alpha,\beta] = [-1,1]$. The **dogbone contour** $D_{\varepsilon}$ is the positively oriented boundary of an $\varepsilon$-neighbourhood of the segment: along the underside from $\alpha$ to $\beta$, round $\beta$, back along the top side from $\beta$ to $\alpha$, round $\alpha$. It encloses the cut and nothing else.
:::

:::statement[The jump across the cut]{provenance=adapted src="arfken-2013:§11.8, Eq. (11.114) and the discussion of $z^p$ on segment $B$, p. 535; arfken-2013:§11.6, Example 11.6.4 and Table 11.1, p. 503"}
Fix the branch of $z^{p}$ ($p \in \mathbb{R}$) and of $\log z$ by $\arg z \in (0,2\pi)$, that is, $z^{p} = \lvert z\rvert^{p} e^{ip\arg z}$ and $\log z = \ln\lvert z\rvert + i\arg z$. Fix $x > 0$ and approach the point $x$ of the cut along the circle of radius $x$, writing $z = x e^{i\alpha}$ with $\alpha \in (0,2\pi)$. Then

$$
\lim_{\alpha \to 0^{+}} \bigl(x e^{i\alpha}\bigr)^{p} = x^{p} ,
\qquad
\lim_{\alpha \to 2\pi^{-}} \bigl(x e^{i\alpha}\bigr)^{p} = x^{p}\,e^{2\pi i p} ,
$$

$$
\lim_{\alpha\to0^{+}}\log\bigl(x e^{i\alpha}\bigr) = \ln x ,
\qquad
\lim_{\alpha\to2\pi^{-}}\log\bigl(x e^{i\alpha}\bigr) = \ln x + 2\pi i .
$$

(The two one-sided limits are the boundary values of the branch on the upper and lower edge of the cut; nothing depends on approaching along a circle rather than, say, vertically, since the branch is continuous up to each edge.)

Arfken stresses the rule that governs all such bookkeeping: on each part of the contour one must use the value of the multivalued factor reached *continuously* along the contour from the starting value, never a value that would require crossing the cut or an extra circuit of the branch point. For a pole at $z_0 = \lvert z_0\rvert e^{i\theta_0}$ with $\theta_0 \in (0,2\pi)$, the residue must therefore be computed with $z_0^{p} = \lvert z_0\rvert^{p}e^{ip\theta_0}$ -- for instance $(-1)^{p}$ read as $e^{i\pi p}$ and $(-i)^{p}$ as $e^{3i\pi p/2}$, not $e^{-i\pi p/2}$.

For $(z^2-1)^{1/2}$ with cut $[-1,1]$ and the branch normalised by $w(z)/z \to 1$ as $z\to\infty$, the corresponding boundary values on the cut are

$$
w(x + i0) \;=\; +i\sqrt{1-x^{2}} ,
\qquad
w(x - i0) \;=\; -i\sqrt{1-x^{2}} ,
\qquad -1 < x < 1 ,
$$

and $w(x) = -\sqrt{x^{2}-1}$ for real $x < -1$, $w(x) = +\sqrt{x^{2}-1}$ for real $x > 1$.
:::

:::statement[Convergence conditions]{provenance=adapted src="ahlfors-1979:Ch. 4, §5.3, case 4, p. 159"}
Ahlfors treats $\int_0^{\infty} x^{\alpha} R(x)\, dx$ for real $\alpha$ and rational $R$, observing that one may as well take $\alpha$ in the open interval $(0,1)$. His stated requirements for convergence are two: at infinity $R$ must vanish to order two or more, and at the origin $R$ may have no singularity worse than a simple pole. He also records a different route to the same integral. Putting $x = t^{2}$ rewrites it as $2\int_0^{\infty} t^{2\alpha+1}R(t^{2})\, dt$, and for the factor $z^{2\alpha}$ one may then take the branch whose argument runs from $-\pi\alpha$ to $3\pi\alpha$, which is analytic once the negative imaginary axis is removed; the contour is then two segments along the real axis closed by a large and a small semicircle in the upper half-plane.
:::

:::method[Keyhole recipe]{provenance=adapted src="rhb-2006:§24.13.3, pp. 866-867; arfken-2013:§11.8, Examples 11.8.8-11.8.9, pp. 535-537"}
1. **Name the branch and draw the cut** so that the cut lies along the range of integration (:ref[]{to=complex.branch-points-cuts}). For $\int_0^\infty$ this means $\arg z \in (0,2\pi)$ with the cut on the positive real axis.
2. **Check the two circles vanish.** Estimate $\lvert z f(z)\rvert$ as $\lvert z\rvert \to 0$ and as $\lvert z\rvert\to\infty$; both must tend to $0$, by the $ML$ estimate (:ref[]{to=complex.contour-integrals}). A logarithm is harmless at the origin: on $\lvert z\rvert = \rho$ one has $\lvert\log z\rvert \le \lvert\ln\rho\rvert + 2\pi$, so a factor $\log z$ against an otherwise bounded integrand gives $\lvert z f(z)\rvert = O(\rho\lvert\ln\rho\rvert) \to 0$. (:cite[Hassani]{work=hassani-2013 loc="§12.2, p. 371"} states only that the circle contributions tend to zero, without the estimate; the estimate is ours.)
3. **Write down both straight edges** using the jump above. For a factor $z^{p}$ the lower edge returns $-e^{2\pi i p}$ times the wanted integral $I$, so the two edges together give $(1 - e^{2\pi i p})\,I$. For a factor $\log z$ they give $-2\pi i\,\tilde I$, where $\tilde I$ is the integral of the *rest* of the integrand -- the logarithms cancel and a new integral appears.
4. **Sum the residues at all poles off the cut** and multiply by $2\pi i$ (:ref[]{to=complex.residue-theorem}), computing every multivalued factor with $\arg \in (0,2\pi)$.
5. **Solve the resulting linear equation** for $I$.
6. **Check.** $I$ must be real and of the right sign; numerical quadrature decides.

**Arfken's two tricks.** (i) If the integrand has a logarithm you do not want, note that the logarithms cancel between the edges and leave behind the integral of the rest: a logarithm can be *inserted* on purpose to make an otherwise cancelling pair of edges non-cancelling (Example 11.8.9, pp. 536-537). (ii) If the integrand has a logarithm you do want, use a contour that avoids the branch point and draw the cut outside the contour (Example 11.8.7, pp. 532-534).
:::

:::method[Dogbone recipe]{provenance=original}
1. **Normalise the branch** of the two-branch-point factor by its behaviour at infinity, e.g. $w(z) = (z^2-1)^{1/2} \sim z$, and record the boundary values on the cut (statement above).
2. **Compute the two edges of the dogbone.** With the values $\pm i\sqrt{1-x^2}$ the two edges *add* rather than cancel, giving a known multiple of the wanted real integral. The small circles at $\alpha$ and $\beta$ contribute nothing when the singularity there is weaker than $\lvert z-\alpha\rvert^{-1}$, which an inverse square root is.
3. **Blow the dogbone up to a large circle.** The difference between the integral over $\lvert z\rvert = R$ and the integral over the dogbone is $2\pi i$ times the sum of residues at the poles lying between them (:ref[]{to=complex.residue-theorem}).
4. **Estimate the large circle.** If the integrand is $O(\lvert z\rvert^{-2})$ its contribution tends to $0$; if it is $O(\lvert z\rvert^{-1})$ the circle contributes $2\pi i$ times the coefficient of $1/z$ in the expansion of the integrand at infinity, and that term must be kept. Beware the convention: in the usual one the residue at infinity is *minus* that coefficient, $\operatorname{Res}_{z=\infty}f = -a_{-1}$, so the circle contributes $-2\pi i\operatorname{Res}_{z=\infty}f$. We write the coefficient rather than the named residue, to keep the sign unambiguous.
5. **Solve for the integral** and check numerically.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The cut must lie along the range of integration (keyhole).** Choosing $\arg z\in(-\pi,\pi)$ instead puts the cut on the negative axis, the two edges of the contour then lie where there is nothing to integrate, and the method produces no information about $\int_0^\infty$.
- **$p$ non-integral.** If $p$ is an integer, $e^{2\pi i p} = 1$, the factor $(1-e^{2\pi ip})$ vanishes and the keyhole gives $0 = 0$. The method needs the integrand to be genuinely multivalued; this is why Arfken's trick (i) inserts a logarithm when the natural integrand is single-valued.
- **Both circles must vanish, and this bounds $p$ from both sides.** For $\int_0^\infty x^{p-1}/(x+a)\,dx$ the small circle needs $p > 0$ and the large circle needs $p < 1$; outside $0<p<1$ the real integral itself diverges at one end or the other.
- **Phases at the poles are the usual source of error.** Arfken calls using $e^{-i\pi/2}$ in place of $e^{3i\pi/2}$ for $(-i)^{p}$ "a serious mistake" (p. 535), and his phase table for $(z^2-1)^{1/2}$ (p. 503) exists for the same reason: a pole's argument must be the one the contour actually reaches.
- **No pole on the cut.** A pole on the cut is a pole on the contour and needs an indented contour and a principal value (:ref[]{to=complex.principal-value-integrals}).
- **Encircling both branch points can restore single-valuedness.** Arfken's Example 11.6.4 (p. 503) shows that a loop around both branch points of $(z^2-1)^{1/2}$ returns the original value, because each factor contributes a sign change. That is precisely why the dogbone, which encircles both, lives in a region where $w$ is single-valued, and why the outward deformation in step 3 is legitimate.
:::

:::example[Keyhole with a fractional power]{provenance=original}
Evaluate

$$
I \;=\; \int_0^{\infty}\frac{x^{-1/3}}{x+2}\, dx .
$$

**Step 1: branch.** Take $f(z) = z^{-1/3}/(z+2)$ with $\arg z \in (0,2\pi)$, so $z^{-1/3} = \lvert z\rvert^{-1/3}e^{-i\arg z/3}$ and the cut is the positive real axis. Here $p = -1/3$ in the notation of the jump statement.

**Step 2: circles.** On $\lvert z\rvert = \rho$, $\lvert z f(z)\rvert \le \rho\cdot\rho^{-1/3}/(2-\rho) \sim \rho^{2/3}/2 \to 0$. On $\lvert z\rvert = R$, $\lvert z f(z)\rvert \le R\cdot R^{-1/3}/(R-2) \sim R^{-1/3}\to0$. Both circles drop out.

**Step 3: edges.** Above the cut $z^{-1/3} = x^{-1/3}$; below it $z^{-1/3} = x^{-1/3}e^{-2\pi i/3}$. The upper edge runs from $0$ to $\infty$ and the lower from $\infty$ to $0$, so

$$
\oint_{K} f\,dz \;=\; \int_0^{\infty}\frac{x^{-1/3}}{x+2}dx \;-\; e^{-2\pi i/3}\int_0^{\infty}\frac{x^{-1/3}}{x+2}dx
\;=\; \bigl(1 - e^{-2\pi i/3}\bigr)\, I .
$$

**Step 4: residue.** The only pole off the cut is $z = -2$, which in this branch is $2e^{i\pi}$, so $z^{-1/3} = 2^{-1/3}e^{-i\pi/3}$ there and

$$
\operatorname*{Res}_{z=-2} f \;=\; 2^{-1/3}e^{-i\pi/3} .
$$

**Step 5: solve.** Factor the prefactor symmetrically:

$$
1 - e^{-2\pi i/3} \;=\; e^{-i\pi/3}\bigl(e^{i\pi/3} - e^{-i\pi/3}\bigr) \;=\; e^{-i\pi/3}\cdot 2i\sin\frac{\pi}{3} .
$$

Hence

$$
I \;=\; \frac{2\pi i\, 2^{-1/3}e^{-i\pi/3}}{e^{-i\pi/3}\cdot 2i\sin(\pi/3)}
\;=\; \frac{\pi\,2^{-1/3}}{\sin(\pi/3)}
\;=\; \frac{\pi\,2^{-1/3}}{\sqrt3/2}
\;=\; \frac{2\pi}{\sqrt3\;2^{1/3}} .
$$

The cancellation of $e^{-i\pi/3}$ is the signal that the phases were tracked consistently; a wrong phase at the pole leaves a complex answer.

**Step 6: check.** $2^{-1/3} = 0.7937005$ and $\sin(\pi/3) = 0.8660254$, so $I = \pi\cdot0.7937005/0.8660254 = 2.8792270$. Numerical quadrature of the original integral returns $2.8792270$. The general formula this reproduces is $\int_0^\infty x^{p-1}(x+a)^{-1}dx = \pi a^{p-1}/\sin p\pi$ for $0<p<1$: here $p = 2/3$, $a=2$, and $\sin(2\pi/3) = \sin(\pi/3)$.
:::

:::example[Keyhole with a square root and two poles]{provenance=original}
Evaluate

$$
J \;=\; \int_0^{\infty}\frac{\sqrt{x}}{x^{2}+9}\, dx .
$$

**Branch and circles.** Take $f(z) = z^{1/2}/(z^{2}+9)$ with $\arg z\in(0,2\pi)$, so $p = 1/2$. Small circle: $\lvert zf\rvert\sim\rho^{3/2}/9\to0$. Large circle: $\lvert z f\rvert\sim R^{-1/2}\to0$. The real integral converges for the same reasons: like $\sqrt x$ at $0$ and like $x^{-3/2}$ at infinity.

**Edges.** Below the cut $z^{1/2} = x^{1/2}e^{i\pi} = -x^{1/2}$, so

$$
\oint_K f\, dz \;=\; J \;-\; e^{i\pi} J \;=\; 2J .
$$

(The edges *add* here, since $e^{2\pi i p} = e^{i\pi} = -1$.)

**Residues.** The poles are $z = 3i = 3e^{i\pi/2}$ and $z = -3i = 3e^{3i\pi/2}$ -- the second written with $\arg = 3\pi/2$, as the branch requires. Both are simple, and $\operatorname{Res} = z^{1/2}/(2z) = 1/(2z^{1/2})$, or directly $z^{1/2}/(2z)$:

$$
\operatorname*{Res}_{z=3e^{i\pi/2}} f \;=\; \frac{\sqrt3\,e^{i\pi/4}}{6\,e^{i\pi/2}} \;=\; \frac{\sqrt3}{6}\,e^{-i\pi/4},
\qquad
\operatorname*{Res}_{z=3e^{3i\pi/2}} f \;=\; \frac{\sqrt3\,e^{3i\pi/4}}{6\,e^{3i\pi/2}} \;=\; \frac{\sqrt3}{6}\,e^{-3i\pi/4} .
$$

Their sum is $\dfrac{\sqrt3}{6}\bigl(e^{-i\pi/4}+e^{-3i\pi/4}\bigr) = \dfrac{\sqrt3}{6}\cdot\bigl(-i\sqrt2\bigr) = \dfrac{-i\sqrt6}{6}$, using $e^{-i\pi/4}+e^{-3i\pi/4} = \tfrac{1-i}{\sqrt2}+\tfrac{-1-i}{\sqrt2} = -i\sqrt2$.

**Solve.**

$$
2J \;=\; 2\pi i\cdot\frac{-i\sqrt6}{6} \;=\; \frac{2\pi\sqrt6}{6} ,
\qquad
J \;=\; \frac{\pi\sqrt6}{6} .
$$

**Check.** $\pi\sqrt6/6 = 1.2825498$; numerical quadrature gives $1.2825498$. Had the second pole been assigned $\arg = -\pi/2$ instead of $3\pi/2$, its residue would have had the phase $e^{+i\pi/4}$ and the two residues would have summed to $\sqrt3\cdot\sqrt2/6$, real, giving a purely imaginary $J$ -- the error Arfken warns about, immediately visible.
:::

:::example[Dogbone across a two-branch-point cut]{provenance=original}
Evaluate

$$
L \;=\; \int_{-1}^{1}\frac{dx}{(x+2)\sqrt{1-x^{2}}} .
$$

**Step 1: the branch.** Let $w(z) = (z^{2}-1)^{1/2}$ with the branch cut $[-1,1]$ and $w(z)/z \to 1$ as $z\to\infty$; concretely, $w(z) = \lvert z-1\rvert^{1/2}\lvert z+1\rvert^{1/2}e^{i(\theta_1+\theta_2)/2}$ with $\theta_1 = \arg(z-1)$ and $\theta_2 = \arg(z+1)$ both taken in $(0,2\pi)$. *Where the formula is analytic to start with.* The factor $\lvert z-1\rvert^{1/2}e^{i\theta_1/2}$ is a branch of $(z-1)^{1/2}$; it is analytic wherever $\theta_1$ is continuous, and the determination of $\arg$ with values in $(0,2\pi)$ is continuous off the positive real axis of its own argument, i.e. off the ray $[1,\infty)$ in $z$. Likewise $\lvert z+1\rvert^{1/2}e^{i\theta_2/2}$ is analytic off $[-1,\infty)$. Their product is $w$, so $w$ is analytic on $\mathbb{C}\setminus[-1,\infty)$ to begin with. The next paragraphs remove the two unwanted rays.

*The ray $(1,\infty)$: continuity.* There both arguments jump by $2\pi$, so the half-sum jumps by $2\pi$ and $e^{i(\theta_1+\theta_2)/2}$ is unchanged: $w$ is continuous across $(1,\infty)$.

*The ray $(1,\infty)$: analyticity, by Morera.* Continuity is not yet analyticity, and steps 3-4 need analyticity, so finish the argument. Let $x_0 > 1$ and let $U$ be an open disc about $x_0$ with $\overline U \subset \{\operatorname{Re}z > 1\}$. On $U$ the function $w$ is continuous, by the previous paragraph, and analytic off the real diameter $U\cap\mathbb{R}$, by the paragraph before that. Let $\gamma$ be a closed contour in $U$. Rather than perturb it, split it. Cut $\gamma$ at its crossings of the diameter $U \cap \mathbb{R}$; each resulting arc lies in the closed upper half-disc or in the closed lower half-disc. Group the arcs accordingly and close each group by running along the diameter between consecutive crossings. Every added diameter segment is traversed once in each direction, once as part of the upper group and once as part of the lower, so the added contributions cancel in the sum and
$$
\oint_\gamma w\,dz = \sum_{\text{upper}} \oint w\,dz \;+\; \sum_{\text{lower}} \oint w\,dz .
$$
Each closed contour on the right lies in a closed half-disc on which $w$ is continuous and is analytic in the interior, so each of those integrals vanishes by Cauchy's theorem (:ref[]{to=complex.cauchy-theorem}) applied on a slightly shrunken half-disc and passing to the limit, using the uniform continuity of $w$ on the compact $\overline U$. Hence $\oint_\gamma w\,dz = 0$ for every closed contour in $U$, and a continuous function with that property is analytic, by Morera's theorem (part 4 of the consequences in :ref[]{to=complex.cauchy-integral-formula}). So $w$ is analytic at $x_0$, and the ray $(1,\infty)$ is not part of the cut.

*The ray $(-\infty,-1)$.* Nothing jumps there at all: the determination of $\arg$ in $(0,2\pi)$ is discontinuous only on the positive real axis of its argument, and for real $x<-1$ both $x-1$ and $x+1$ are negative, so $\theta_1$ and $\theta_2$ are already continuous (both equal to $\pi$) in a neighbourhood. Thus $w$ is analytic there by the first paragraph's reasoning applied to a disc about such a point, which meets neither $[1,\infty)$ nor $[-1,\infty)$.

*The segment $(-1,1)$.* Only $\theta_2$ jumps, the half-sum jumps by $\pi$, and $w$ changes sign. So the cut is exactly $[-1,1]$.

*Normalisation.* Checking at $z = iR$: $\theta_1,\theta_2 \to \pi/2$, so $w(iR) \to R\,e^{i\pi/2} = iR$, that is $w(z)/z \to 1$ along the positive imaginary axis. Step 4 needs this **uniformly in direction**, and one line upgrades it. Since $w^{2} = z^{2}-1$ identically, $(w(z)/z)^{2} = 1 - z^{-2}$, so for $\lvert z\rvert \ge 2$

$$
\Bigl\lvert \bigl(w(z)/z\bigr)^{2} - 1\Bigr\rvert \;=\; \frac{1}{\lvert z\rvert^{2}} \;\le\; \frac14 ,
\qquad\text{hence}\qquad
\bigl\lvert w(z)/z\bigr\rvert \;\ge\; \sqrt{3}/2 .
$$

Write $u = w(z)/z$. From the displayed bound, $\operatorname{Re}(u^{2}) \ge 1 - \tfrac14 > 0$ for $\lvert z\rvert\ge2$, so $u^{2}$ lies in the open right half-plane, which forces $\arg u$ into $(-\tfrac\pi4,\tfrac\pi4)$ or into $(\tfrac{3\pi}4,\tfrac{5\pi}4)$ -- two disjoint sectors. Now $u$ is continuous on $\{\lvert z\rvert\ge2\}$, which is connected, since $w$ is analytic off $[-1,1]$; and at $z = 2i$ the value of $u$ is close to $+1$, hence in the first sector. A continuous function on a connected set cannot jump between two disjoint sectors, so $\arg u \in (-\tfrac\pi4,\tfrac\pi4)$ throughout $\lvert z\rvert\ge2$. Combined with $\lvert u\rvert\ge\sqrt3/2$ this gives $\operatorname{Re}u \ge (\sqrt3/2)\cos(\pi/4) > \tfrac12$, so $\lvert u+1\rvert \ge \operatorname{Re}(u+1) > 1$ and

$$
\left\lvert \frac{w(z)}{z} - 1 \right\rvert
\;=\; \frac{\bigl\lvert (w/z)^{2} - 1\bigr\rvert}{\lvert w/z + 1\rvert}
\;\le\; \frac{1}{\lvert z\rvert^{2}}
\qquad (\lvert z\rvert \ge 2) ,
$$

which is uniform in $\arg z$. In particular $\lvert w(z)\rvert \ge \tfrac{\sqrt3}{2}\lvert z\rvert$ for $\lvert z\rvert\ge2$, which is the bound step 4 uses.

*Boundary values on the cut.* They are

$$
w(x+i0) = i\sqrt{1-x^{2}}, \qquad w(x-i0) = -i\sqrt{1-x^{2}} \qquad (-1<x<1),
$$

since there $\theta_1 = \pi$, $\theta_2 = 0^{+}$ above and $\theta_2 = 2\pi^{-}$ below; and at the real point $z = -2$, where $\theta_1=\theta_2=\pi$, we get $w(-2) = \sqrt{3}\,e^{i\pi} = -\sqrt3$.

**Step 2: the two edges.** Set $f(z) = 1/\bigl((z+2)\,w(z)\bigr)$ and let $D_\varepsilon$ be the dogbone around $[-1,1]$, positively oriented: underside left to right, then topside right to left. Using $1/(-i) = i$ and $1/i = -i$,

$$
\oint_{D_\varepsilon} f\,dz
\;=\; \int_{-1}^{1}\frac{dx}{(x+2)(-i\sqrt{1-x^2})} \;+\; \int_{1}^{-1}\frac{dx}{(x+2)(i\sqrt{1-x^2})}
\;=\; i L + i L \;=\; 2iL .
$$

The two small arcs at $\pm1$ contribute nothing: there $\lvert f\rvert = O(\varepsilon^{-1/2})$ while the arc length is $O(\varepsilon)$, so their contribution is $O(\varepsilon^{1/2})$.

**Step 3: inflate to a large circle.** The function $f$ is analytic outside the cut except for the simple pole at $z=-2$. Between $D_\varepsilon$ and the circle $\lvert z\rvert = R$ (with $R>2$) lies exactly that pole, so

$$
\oint_{\lvert z\rvert = R} f\, dz \;-\; \oint_{D_\varepsilon} f\, dz \;=\; 2\pi i \operatorname*{Res}_{z=-2} f .
$$

**Step 4: the large circle vanishes.** By the uniform bound of Step 1, $\lvert w(z)\rvert \ge \tfrac{\sqrt3}{2}R$ at every point of $\lvert z\rvert = R \ge 4$, while $\lvert z+2\rvert \ge R-2$. So $\lvert f\rvert \le 2/\bigl(\sqrt3\,R(R-2)\bigr)$ everywhere on the circle, and the $ML$ estimate (:ref[]{to=complex.contour-integrals}) gives

$$
\left\lvert \oint_{\lvert z\rvert=R} f\,dz \right\rvert \;\le\; 2\pi R\cdot\frac{2}{\sqrt3\,R(R-2)} \;=\; \frac{4\pi}{\sqrt3\,(R-2)} \;\longrightarrow\; 0 .
$$

**Step 5: residue and answer.**

$$
\operatorname*{Res}_{z=-2} f \;=\; \frac{1}{w(-2)} \;=\; -\frac{1}{\sqrt3} ,
$$

so $0 - 2iL = 2\pi i\,(-1/\sqrt3)$ and

$$
L \;=\; \frac{\pi}{\sqrt3} .
$$

**Check.** $\pi/\sqrt3 = 1.8137994$; numerical quadrature of $L$ gives $1.8137994$. The sign of $w(-2)$ was the only delicate point: taking $w(-2) = +\sqrt3$ would give $L = -\pi/\sqrt3$, negative, which is impossible for a positive integrand. More generally the same computation gives $\int_{-1}^{1}dx/\bigl((x+c)\sqrt{1-x^2}\bigr) = \pi/\sqrt{c^{2}-1}$ for $c>1$, which at $c=2$ is $\pi/\sqrt3$.
:::

:::application[Spectral functions, aerofoils and dispersion integrals]{provenance=original}
- **Band edges and square-root cuts.** The density of states of a one-dimensional band, or the free propagator of a particle with a continuum threshold, carries a factor $(E^2-\Delta^2)^{-1/2}$ whose branch points are the band edges. Integrals of such quantities against a smooth weight are dogbone integrals. The weight in the formula computed above is $(1-x^2)^{-1/2}$, which normalised is the **arcsine** (Chebyshev) density $\mu(x) = 1/\bigl(\pi\sqrt{1-x^2}\bigr)$, and that is exactly the density of states of the one-dimensional nearest-neighbour tight-binding chain, $\rho(E) = 1/\bigl(\pi\sqrt{4t^2-E^2}\bigr)$, with half-bandwidth scaled to $1$. So our result is the Stieltjes (Hilbert) transform of the one-dimensional band's density of states:

  $$
  \int_{-1}^{1}\frac{\mu(x)}{c-x}\,dx \;=\; \frac{1}{\sqrt{c^{2}-1}} \qquad (c>1),
  $$

  which is $1/\pi$ times the integral computed above, since $\mu$ is even. This is the local Green's function of the chain outside the band, and the inverse square root at the band edge is the one-dimensional van Hove singularity.

  It is worth being explicit about what this is *not*, because the two weights are easy to confuse. The **Wigner semicircle** is the different density $\rho_{\rm sc}(x) = \tfrac{2}{\pi}\sqrt{1-x^{2}}$, with the square root in the numerator; its Stieltjes transform is

  $$
  \int_{-1}^{1}\frac{\rho_{\rm sc}(x)}{c-x}\,dx \;=\; 2\bigl(c - \sqrt{c^{2}-1}\bigr) ,
  $$

  which at $c=2$ equals $0.535898$, against $1/\sqrt3 = 0.577350$ for the arcsine law and $\pi/\sqrt3 = 1.813799$ for the un-normalised integral above. No rescaling of the variable turns one weight into the other -- $(1-x^2)^{-1/2}$ and $(1-x^2)^{+1/2}$ are different functions -- so the semicircle law, the Bethe-lattice Green's function and the self-consistency condition of the coherent-potential approximation belong to the second formula, not the first. Both are dogbone integrals: put $w(z) = (z^2-1)^{1/2}$ in the denominator for the arcsine case and in the numerator for the semicircular one, and the same contour evaluates each.
- **Thin-aerofoil and crack problems.** In two-dimensional potential flow and in linear fracture mechanics, the unknown is recovered from an integral equation whose kernel is $1/\bigl((x-\xi)\sqrt{1-\xi^2}\bigr)$ on the chord or the crack. Two qualifications matter, and both are about the hypotheses of this unit.

  First, the inverse-square-root edge behaviour is the physically correct singularity at a crack tip and at an aerofoil's *leading* edge, but not at a sharp *trailing* edge: there the Kutta condition requires the vorticity to vanish, so the thin-aerofoil solution carries a factor $\sqrt{(1-\xi)/(1+\xi)}$, singular at the leading edge and zero at the trailing one, rather than the symmetric $(1-\xi^2)^{-1/2}$.

  Second, the Glauert integrals of thin-aerofoil theory are **principal values**: the pole $\xi = x$ sits on the cut, with $x$ in the chord, which is precisely the case the dogbone recipe excludes (see the remark on poles on the cut) and which belongs to :ref[]{to=complex.principal-value-integrals}. The dogbone computed above is the off-cut case $c > 1$; the principal-value case is reached from it by letting $c$ approach the cut from one side and taking the real part, which is how the Glauert results are recovered. The dogbone supplies the analytic function; the limit onto the cut supplies the aerofoil formula.
- **Sum rules with fractional powers.** Integrals $\int_0^{\infty}x^{p-1}f(x)\,dx$ with non-integral $p$ arise as Mellin transforms, in the theory of anomalous diffusion and in renormalisation-group matching. The keyhole evaluation is the standard tool, and the factor $(1-e^{2\pi ip})^{-1} \propto 1/\sin(\pi p)$ in the answer -- with poles at integer $p$ -- is exactly the structure that reappears as the $\Gamma$-function poles of a Mellin transform.
- **Dispersion integrals.** A response function with a branch cut along a continuum (rather than isolated poles) has its real and imaginary parts linked by an integral over that cut; deforming a contour onto the two edges of the cut is how such a relation is derived, and the jump across the cut, $f(x+i0)-f(x-i0) = 2i\operatorname{Im}f(x+i0)$, is precisely the discontinuity computed in the dogbone recipe.
:::
