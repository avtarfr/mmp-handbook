---
id: dyn.global-bifurcations
title: Global bifurcations of cycles
kind: definition
level: advanced
summary: "Names and analyses the three ways a planar limit cycle can be created or destroyed without shrinking into a fixed point - two cycles colliding, a fixed point appearing on the cycle, and the cycle swelling onto a saddle - and gives the amplitude and period scaling laws by which each can be told from the others in measured data."
prereqs: [dyn.hopf-bifurcation, dyn.poincare-bendixson, dyn.conservative-reversible, dyn.flows-on-the-circle, dyn.one-dimensional-bifurcations, dyn.flows-on-the-line, dyn.linear-planar-classification, dyn.linearization]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§8.4 Global bifurcations of cycles, pp. 260-265: the statement that there are four common ways limit cycles are created or destroyed in two-dimensional systems, that the three besides Hopf involve large regions of the phase plane rather than the neighbourhood of a fixed point, and that they are therefore called global and are harder to detect (pp. 260-261); the saddle-node or fold bifurcation of cycles, illustrated by the radial equation $\\dot r = \\mu r + r^3 - r^5$, $\\dot\\theta = \\omega + br^2$ of §8.2 read as a one-dimensional system undergoing a saddle-node of fixed points at $\\mu = -1/4$, with a half-stable cycle born at $\\mu_c$ splitting into a stable and an unstable cycle, the origin not participating, and the cycle having $O(1)$ amplitude at birth in contrast with the Hopf case (pp. 261-262); the infinite-period bifurcation in $\\dot r = r(1-r^2)$, $\\dot\\theta = \\mu - \\sin\\theta$, where the unit circle is approached monotonically, the motion is counterclockwise for $\\mu > 1$ and two invariant rays appear for $\\mu < 1$, the cycle develops a bottleneck at $\\theta = \\pi/2$ that becomes infinitely severe at $\\mu = 1$ when a fixed point appears on the circle and then splits into a saddle and a node, with amplitude staying $O(1)$ and period growing like $(\\mu-\\mu_c)^{-1/2}$ (p. 262); the homoclinic or saddle-loop bifurcation, in which part of a cycle moves closer and closer to a saddle until at the bifurcation the cycle touches the saddle and becomes a homoclinic orbit, illustrated numerically by $\\dot x = y$, $\\dot y = \\mu y + x - x^2 + xy$ with $\\mu_c \\approx -0.8645$, and the remark that the key is which way the unstable manifold of the saddle veers after it loops around (pp. 262-263); the table of generic scaling laws for the amplitude and period of the cycle in terms of a dimensionless distance $\\mu \\ll 1$ from the bifurcation - supercritical Hopf $O(\\mu^{1/2})$ and $O(1)$, saddle-node of cycles $O(1)$ and $O(1)$, infinite-period $O(1)$ and $O(\\mu^{-1/2})$, homoclinic $O(1)$ and $O(\\ln\\mu)$ - with the homoclinic period scaling attributed to an estimate of the time to pass a saddle and referred to Gaspard (1990) (p. 264); Example 8.4.1, in which the van der Pol oscillator $\\ddot x + \\epsilon\\dot x(x^2-1) + x = 0$ appears to violate the Hopf scaling because its cycle is born with amplitude $2$ rather than $O(\\epsilon^{1/2})$, the diagnosis that the bifurcation at $\\epsilon = 0$ is degenerate because the nonlinear term vanishes at the same parameter value as the eigenvalues cross, and the rescaling $u = \\epsilon^{1/2}x$ that restores the expected $\\epsilon^{1/2}$ growth (pp. 264-265); and the closing remarks that in higher dimensions the same scaling laws hold but the table is no longer exhaustive, that the homoclinic case becomes much subtler and often leaves chaos behind it, and that the practical use of the laws is to discriminate between candidate models from measured amplitudes and periods (p. 265). §8.5 Hysteresis in the driven pendulum and Josephson junction, pp. 265-272: the dimensionless equation $\\phi'' + \\alpha\\phi' + \\sin\\phi = I$ on the cylinder, its two fixed points for $I < 1$ coalescing in a saddle-node at $I = 1$, the existence of a unique stable whirling cycle for $I > 1$ by a Poincare-map argument, the coexistence of that cycle with a stable rest state for weak damping, and the resulting hysteresis, with the homoclinic and infinite-period bifurcations appearing as the two ways the cycle is destroyed as $I$ is lowered. §4.3 Nonuniform oscillator, pp. 96-101: the saddle-node ghost, the bottleneck, the normal form $\\dot x = r + x^2$ and the square-root scaling of the time spent in the bottleneck"
    pages: "96-101, 260-272"
    role: the classification into four bifurcations of cycles and the word global; the three prototype systems, which we analyse below; the scaling table, reported as the book gives it; the degenerate van der Pol example; the caveats about higher dimensions; and the Josephson junction of the application
  - work: hirsch-smale-devaney-2013
    loc: "§8.3 Saddles, pp. 168-169: the stable curve $W^s(0)$ and unstable curve $W^u(0)$ of a nonlinear planar saddle $\\dot x = \\lambda x + f_1$, $\\dot y = -\\mu y + f_2$ with $f_j/r \\to 0$, the Stable Curve Theorem giving a local stable curve $x = h^s(y)$ through the origin tangent to the stable eigendirection and invariant under the forward flow, with all other nearby solutions leaving a small disc, the remark that $h^s$ is in fact $C^\\infty$, and the companion Unstable Curve Theorem. ch. 16 Homoclinic phenomena, §16.3 The double scroll attractor, pp. 375-377, and §16.4 Homoclinic bifurcations, pp. 377-380: a three-dimensional vector field with a pair of homoclinic solutions $\\zeta^\\pm$ at the origin, the Poincare map $\\Phi$ on a cylinder $C$ around them and the attractor $A = \\bigcap_n \\overline{\\Phi^n(C)}$ of zero volume; and the perturbation that breaks the homoclinic connections by translating $\\zeta^+ \\cap C$ a distance $\\varepsilon$, under which the infinitely many fixed points of $\\Phi_0^\\pm$ collapse to finitely many for $\\varepsilon \\neq 0$, so that the family passes through infinitely many bifurcations and unfolds infinitely many horseshoe maps"
    pages: "168-169, 375-380"
    role: the local stable and unstable curves of a planar saddle and their smoothness, which the proof of (c) uses as its coordinate system; and the statement, used in the remark, that a homoclinic bifurcation in three dimensions is an entirely different object from the planar one - infinitely many periodic orbits are created or destroyed rather than a single cycle
---

:::definition[Local and global bifurcations of cycles]{provenance=adapted src="strogatz-1994:§8.4, pp. 260-263"}
Let $\dot x = f(x,\mu)$ be a smooth family of vector fields on an open subset of the plane, depending on a real parameter $\mu$. A **bifurcation of cycles** at $\mu = \mu_c$ is a change, as $\mu$ crosses $\mu_c$, in the number or stability of the closed orbits of the family.

The bifurcation is **local** if everything that happens is visible in an arbitrarily small neighbourhood of a single fixed point: the Hopf bifurcation of :ref[]{to=dyn.hopf-bifurcation} is local, because the cycle it creates shrinks onto the fixed point as $\mu \to \mu_c$, and the eigenvalues of the Jacobian at that one point announce it. The bifurcation is **global** if it is not: the cycle involved stays a finite distance across at the bifurcation, so no amount of magnification around any one point reveals it, and no linearization detects it. Strogatz lists four common ways a planar limit cycle is created or destroyed; one is the Hopf bifurcation, and the other three are global. They are:

- **Saddle-node (fold) bifurcation of cycles.** Two limit cycles, one stable and one unstable, approach each other, merge into a single half-stable cycle at $\mu_c$, and annihilate. Read on a cross-section this is a saddle-node bifurcation of fixed points of the return map, which is where the name comes from. No fixed point of the flow takes part.
- **Infinite-period bifurcation.** A fixed point of the flow appears *on* the cycle. The cycle develops a bottleneck - a short arc along which the speed drops towards zero - and the period grows without bound; at $\mu_c$ the orbit is no longer periodic, having become a fixed point together with the one trajectory that leaves it and returns to it, namely the rest of the former cycle. Past $\mu_c$ the fixed point splits into two, and the former cycle is then two fixed points joined by a *pair* of arcs, one running each way.
- **Homoclinic (saddle-loop) bifurcation.** The cycle swells until it touches a saddle point lying outside it. At $\mu_c$ the cycle has become a **homoclinic orbit** of that saddle, a trajectory that approaches the same fixed point as $t \to +\infty$ and as $t \to -\infty$ (:ref[]{to=dyn.conservative-reversible}). Past $\mu_c$ the saddle connection breaks: the branch of the unstable manifold that used to close up now misses the stable manifold on one side, and no closed orbit remains nearby. The period again diverges, so this too is an infinite-period bifurcation in the literal sense; the names *homoclinic* and *saddle-loop* are used to keep the two cases apart.

The letter $\mu$ is used below in two ways, and they should be kept apart. In the three prototype systems it is the system's own parameter and $\mu_c$ is its bifurcation value, so that $\mu_c = -\tfrac14$ in the first prototype and $\mu_c = 1$ in the second, and the distance from the bifurcation is $\lvert\mu-\mu_c\rvert$. In the scaling table, and there only, $\mu$ denotes that distance itself: a dimensionless quantity with $0 < \mu \ll 1$.
:::

:::statement[Three prototypes]{provenance=adapted src="strogatz-1994:§8.4, pp. 261-264"}
**(a) Saddle-node of cycles.** Let $\omega$ and $b$ be real numbers such that $\omega + b\rho \neq 0$ for every $\rho \in [0,1]$ (it is enough that $\omega \neq 0$ and that $b$ has the same sign as $\omega$, or that $\lvert b\rvert < \lvert\omega\rvert$), and let

$$
\dot r = \mu r + r^3 - r^5 , \qquad \dot\theta = \omega + b r^2 .
$$

This is the subcritical Hopf family of :ref[]{to=dyn.hopf-bifurcation}, now examined away from $\mu = 0$. For $-\tfrac14 < \mu < 0$ it has two limit cycles, of radii $r_\pm = \bigl(\tfrac12(1 \pm \sqrt{1+4\mu})\bigr)^{1/2}$, the outer one stable and the inner one unstable, and the origin is also stable. As $\mu \downarrow -\tfrac14$ the two radii merge at

$$
r_c \;=\; 1/\sqrt2 \;=\; 0.7071067\ldots ,
$$

leaving a single half-stable cycle, and for $\mu < -\tfrac14$ there is no cycle at all. The origin is a stable spiral throughout and takes no part. At the bifurcation the cycle has amplitude $r_c$ and period $2\pi/\lvert\omega + b/2\rvert$, both $O(1)$.

The condition on $\omega + b\rho$ is ours, not Strogatz's: he reads only the orders of magnitude off this example and needs nothing beyond $\omega \neq 0$. It cannot be dropped once a period is quoted. Taking $b = -2\omega$, for instance, makes $\dot\theta$ vanish on the circle $r^2 = \tfrac12$, which is then a circle of fixed points rather than a closed orbit, and $2\pi/\lvert\omega+b/2\rvert$ is not a period but a division by zero.

**(b) Infinite-period.** For $\mu > 0$ let

$$
\dot r = r\,(1 - r^2) , \qquad \dot\theta = \mu - \sin\theta .
$$

The radial and angular equations are uncoupled. Every trajectory except the origin approaches the unit circle, which is invariant. On it the angular equation is the nonuniform oscillator of :ref[]{to=dyn.flows-on-the-circle}. For $\mu > 1$ the circle is a limit cycle, traversed with period

$$
T(\mu) \;=\; \int_0^{2\pi}\frac{d\theta}{\mu - \sin\theta} \;=\; \frac{2\pi}{\sqrt{\mu^2-1}} \;\sim\; \frac{\pi\sqrt2}{\sqrt{\mu-1}} \quad (\mu \downarrow 1) .
$$

At $\mu = 1$ a half-stable fixed point is born on the circle at $\theta = \pi/2$, and for $\mu < 1$ it splits into a saddle and a stable node. The amplitude is exactly $1$ throughout; only the period diverges.

**(c) Homoclinic.** Let $f$ be smooth in $x$ and in $\mu$, let $p(\mu)$ be a hyperbolic saddle of $f(\,\cdot\,,\mu)$ with eigenvalues $\lambda_u > 0 > -\lambda_s$ depending smoothly on $\mu$, and suppose that at $\mu = \mu_c$ one branch of its unstable manifold coincides with one branch of its stable manifold, forming a homoclinic loop $\Gamma$. Fix a cross-section of $\Gamma$ near the saddle and let $u_0(\mu)$ be the signed separation of the two manifolds measured on it, counted positive when the returning branch of $W^{u}(p)$ lies on the interior side of the loop, so that $u_0(\mu_c) = 0$; assume the manifolds separate at a nonzero rate, $u_0'(\mu_c) \neq 0$. Write $\lambda_u$ and $\lambda_s$ for the two eigenvalues at $\mu = \mu_c$ and assume $\lambda_u \neq \lambda_s$.

Then there is at least one closed orbit near $\Gamma$ for $\mu$ on one side of $\mu_c$ and none on the other, and which side that is turns on the comparison of the two eigenvalues as well as on the sign of the separation: the orbits live where $u_0(\mu) > 0$ when $\lambda_u < \lambda_s$, and where $u_0(\mu) < 0$ when $\lambda_u > \lambda_s$. Every closed orbit near $\Gamma$ crosses the entry section the proof below works with at a distance from the invariant curve that that section crosses comparable to the separation of the two manifolds read on that same section; writing $\sigma(\mu) > 0$ for that separation, on the side of $\mu_c$ where the orbits exist, the crossing lies between $\sigma$ and $2\sigma$. The two cases differ in which section, which curve and which separation these are. When $\lambda_u < \lambda_s$ the section is the edge of the proof's small square that crosses the stable manifold, the distance is measured from the stable manifold, and $\sigma = u_0$. When $\lambda_u > \lambda_s$ the section is, after the proof's reversal of time, the edge that crosses the unstable manifold, the distance is measured from the unstable manifold, and $\sigma$ is the separation read on that edge, which Step 6 of the proof computes as $\tilde u_0 = -u_0/a + O(u_0^2)$ with $a > 0$: comparable in size to $\lvert u_0\rvert$ and positive where the orbits exist, but of the opposite sign to $u_0$, which is why the two cases carry the orbits on opposite sides of $\mu_c$. On another cross-section of the same branch the bracket holds up to a positive factor bounded away from $0$ and from $\infty$, but not on a section of the other branch: when $\lambda_u > \lambda_s$ the cycle crosses the incoming branch at a distance from $W^{s}$ of order $\lvert u_0\rvert^{\lambda_u/\lambda_s}$, which is far smaller than $\lvert u_0\rvert$. In either case all the closed orbits lie in an annulus that shrinks onto $\Gamma$ as $\mu \to \mu_c$. The set of them attracts a **one-sided** neighbourhood of $\Gamma$ if $\lambda_u < \lambda_s$, and repels one if $\lambda_u > \lambda_s$. *Attracts* means here that the forward orbit of every point of that neighbourhood converges to the set of closed orbits. The side in question is the interior of the loop, the quadrant $u>0$, $s>0$ in the coordinates of the proof below, in both cases; the proof controls the return map only there. It is not in general the side into which the returning branch of $W^{u}(p)$ enters: when $\lambda_u > \lambda_s$ that branch returns to the exterior, while the repelled neighbourhood is still the interior. Nothing is claimed about the other side, and nothing here distinguishes one closed orbit from another: a point beyond the stable manifold leaves along the second branch of $W^{u}(p)$, and whether it ever comes back depends on global structure that the hypotheses above do not fix - in a figure-eight configuration, where the other two branches also close up, such a point can be recaptured. As $\mu \to \mu_c$ from the side where they exist, the period of each of them satisfies

$$
\frac{T(\mu)}{\ln\bigl(1/\lvert\mu-\mu_c\rvert\bigr)} \;\longrightarrow\; \frac{1}{\min(\lambda_u,\lambda_s)} ,
\qquad\text{that is}\qquad
T(\mu) \;=\; \frac{1}{\min(\lambda_u,\lambda_s)}\,\ln\frac{1}{\lvert \mu - \mu_c\rvert}\,\bigl(1 + o(1)\bigr) .
$$

Their amplitudes tend to the diameter of $\Gamma$, which is $O(1)$. The crossing point on the section converges to $\Gamma$ by the above, and continuous dependence on initial conditions over the compact outside arc of Step 2, which is traversed in a bounded time, carries that convergence to the part of the orbit lying outside the square $N$ of the proof. Inside $N$ continuous dependence is of no use, since the transit time there diverges; what holds the orbit near $\Gamma$ inside $N$ is the size of the square itself, a side $\delta$ that may be fixed as small as one pleases before $\mu$ is brought to $\mu_c$.

Two words are deliberately absent. One is *unique*: the statement claims at least one closed orbit, not exactly one. The other is *limit cycle*, which means an isolated closed orbit. One short further argument, sketched at Step 4 of the proof, supplies both - uniqueness, isolation, and with them the stability or instability of the single cycle - by showing that the return map is a contraction; but it needs a $C^1$ linearization at the saddle, which this handbook does not prove and which the proof below therefore avoids. Everything asserted above, the period law included, is proved without it.

Three things about this coefficient. It is the reciprocal of the *smaller* of the two rates, so it is $1/\lambda_u$ exactly in the stable case; the minimum has to be there because reversing time exchanges $\lambda_u$ with $\lambda_s$ and interchanges the two cases while leaving every period unchanged. It is ours, not Strogatz's: his table records only the order $\ln(1/\mu)$ and refers the estimate to the literature. And the error term is $o(1)$ relative, rather than the $O(1)$ absolute error one often sees quoted, because the proof below uses only the invariant curves at the saddle; with a $C^1$ linearization there - which in the plane is a theorem of Hartman for $C^2$ fields, not something this handbook proves - the remainder is indeed $O(1)$.

**The scaling table.** Writing $\mu$ for the dimensionless distance from the bifurcation, the generic laws for bifurcations of cycles in the plane are, as Strogatz tabulates them:

| bifurcation | amplitude of the stable limit cycle | period |
|---|---|---|
| supercritical Hopf | $O(\mu^{1/2})$ | $O(1)$ |
| saddle-node of cycles | $O(1)$ | $O(1)$ |
| infinite-period | $O(1)$ | $O(\mu^{-1/2})$ |
| homoclinic | $O(1)$ | $O(\ln\mu)$ |

The heading of the amplitude column is Strogatz's and the restriction in it is not decorative: the laws are for the stable cycle, and part (c) shows that an unstable cycle obeys the logarithm with the other eigenvalue in it. Strogatz states the homoclinic row without derivation, referring to the literature; the proof below supplies the estimate. The $O(\ln \mu)$ entry means a divergence of that order as $\mu \to 0$, that is, growth like $\ln(1/\mu)$.
:::

:::idea{provenance=original}
Each prototype is a two-dimensional problem with a one-dimensional bottleneck, and in each case the bifurcation happens in the one dimension that matters.

For (a) the radial equation is a flow on a half-line, uncoupled from the angle, so a collision of limit cycles *is* a collision of fixed points on that line. For (b) the angular equation is a flow on a circle, and the cycle's period is the time to go once around; a saddle-node on that circle makes the integrand blow up non-integrably at one point, and the familiar square-root law of the saddle-node bottleneck gives the rate. For (c) the slow region is a neighbourhood of the saddle, where the flow is linear to leading order; the time to pass a hyperbolic saddle entering at distance $d$ from its stable manifold is $\lambda_u^{-1}\ln(1/d)$, and the splitting between the two invariant manifolds, which is what sets $d$, shrinks linearly as the parameter approaches its bifurcation value. Whether the cycle really enters at distance comparable to the splitting is a question about the return map, and the answer depends on which rate at the saddle is the larger: if the saddle contracts faster than it expands, the return map lands every point of the section beyond the splitting and overshoots it by at most half that point's own distance from the stable manifold, which traps every closed orbit between the splitting and twice the splitting, and the answer is yes, giving the coefficient $1/\lambda_u$; if not, one reads the same estimate backwards in time, which exchanges the two eigenvalues. Either way the coefficient belongs to the smaller eigenvalue. In all three the amplitude stays $O(1)$ simply because the cycle at the bifurcation is a curve of finite size, which is exactly what makes the bifurcation global.
:::

:::proof[(a) Saddle-node of cycles]{provenance=adapted src="strogatz-1994:§8.4, pp. 261-262"}
Because $\dot r$ does not involve $\theta$, every circle $r = \text{const}$ on which $\dot r$ vanishes is invariant, and it is a single closed orbit rather than a curve of fixed points because the hypothesis $\omega + b\rho \neq 0$ keeps $\dot\theta$ from vanishing anywhere on it. Conversely a closed orbit must have $r$ constant, since $r(t)$ is monotone whenever $\dot r \neq 0$. So the closed orbits are exactly the positive zeros of

$$
\dot r \;=\; r\,\bigl(\mu + r^2 - r^4\bigr) ,
$$

and their stability as cycles is the stability of those zeros for the one-dimensional flow (:ref[]{to=dyn.flows-on-the-line}). Substituting $\rho = r^2 > 0$, the positive zeros solve $\rho^2 - \rho - \mu = 0$, that is

$$
\rho_\pm \;=\; \frac{1 \pm \sqrt{1+4\mu}}{2} .
$$

For $-\tfrac14 < \mu < 0$ both roots are real and positive, giving two cycles; at $\mu = -\tfrac14$ the discriminant vanishes and they coincide at $\rho = \tfrac12$, so $r_c = 1/\sqrt2$; for $\mu < -\tfrac14$ there is no real root and no cycle. This is precisely the saddle-node normal form of :ref[]{to=dyn.one-dimensional-bifurcations} in the variable $\rho$, since $\mu + \rho - \rho^2 = (\mu + \tfrac14) - (\rho - \tfrac12)^2$ identically, which is the normal form with bifurcation parameter $\mu + \tfrac14$.

At $\mu = -\tfrac14$ the sign of $\dot r$ is negative on both sides of $r_c$, so the cycle is half-stable: attracting from outside, repelling from inside.

The origin plays no part: $\dot r \approx \mu r$ near $r = 0$, so it is a stable spiral for every $\mu < 0$, including at $\mu_c$. Finally the period of either cycle is $2\pi/\lvert\dot\theta\rvert = 2\pi/\lvert\omega + b\rho\rvert$, which at $\rho = \tfrac12$ is $2\pi/\lvert\omega + b/2\rvert$: finite and bounded away from $0$ and $\infty$ as $\mu \to \mu_c$. Hence both amplitude and period are $O(1)$. $\square$
:::

:::proof[(b) Infinite-period]{provenance=adapted src="strogatz-1994:§8.4, p. 262, and §4.3, pp. 98-100"}
The radial equation $\dot r = r(1-r^2)$ is independent of $\theta$, and on $r>0$ it has the single stable fixed point $r = 1$; so every trajectory other than the origin tends to the unit circle, which is invariant.

On that circle the dynamics is $\dot\theta = \mu - \sin\theta$, a flow on the circle. By the dichotomy of :ref[]{to=dyn.flows-on-the-circle}, if $\mu > 1$ then $\mu - \sin\theta > 0$ everywhere, the motion is periodic, and its period is the integral of $d\theta/\dot\theta$ once around, evaluated there as

$$
T(\mu) \;=\; \int_0^{2\pi}\frac{d\theta}{\mu-\sin\theta} \;=\; \frac{2\pi}{\sqrt{\mu^2-1}} .
$$

Every trajectory off the circle spirals onto it, so the circle is a limit cycle. If $\mu < 1$ the equation $\sin\theta = \mu$ has two solutions on the circle; both are fixed points of the full planar system, lying on the unit circle, one a saddle and one a stable node, and no closed orbit survives. At $\mu = 1$ the two merge at $\theta = \pi/2$.

For the rate, factor the square root: $\sqrt{\mu^2-1} = \sqrt{\mu-1}\,\sqrt{\mu+1}$, and $\sqrt{\mu+1} \to \sqrt2$ as $\mu \downarrow 1$, so

$$
T(\mu) \;=\; \frac{2\pi}{\sqrt{2}\,\sqrt{\mu-1}}\bigl(1 + O(\mu-1)\bigr) \;=\; \frac{\pi\sqrt2}{\sqrt{\mu-1}} + O\bigl((\mu-1)^{1/2}\bigr) .
$$

The exponent $-\tfrac12$ is not an accident of this example. Near $\theta = \pi/2$ write $\theta = \pi/2 + \psi$; then $\dot\theta = \mu - \cos\psi = (\mu-1) + \tfrac12\psi^2 + O(\psi^4)$, the saddle-node normal form, and the time to cross the bottleneck is $\int d\psi/\bigl((\mu-1)+\tfrac12\psi^2\bigr) = \pi\sqrt{2}/\sqrt{\mu-1}$ when taken over the whole line - the same square-root law that governs a saddle-node ghost in :ref[]{to=dyn.flows-on-the-circle}, and here it reproduces the leading term exactly. $\square$
:::

:::proof[(c) The logarithm at a homoclinic bifurcation]{provenance=original}
Put the saddle at the origin. The period of the cycle is the time for one circuit, and the circuit has a slow part, a passage close to the saddle, and a fast part, the rest of the loop. Everything is in getting the slow part right, and for that we need coordinates near the saddle.

We do not take them from :ref[]{to=dyn.linearization}. The Hartman-Grobman theorem stated there supplies a homeomorphism, and although it preserves the time parametrisation, and so would give the passage time, the argument below also measures the separation of two invariant manifolds in the original coordinates and differentiates it in $\mu$; a topological conjugacy, constructed afresh at each parameter value, carries no information of that kind. We therefore work with the invariant curves themselves.

**Step 0: coordinates in which the manifolds are the axes.** A hyperbolic planar saddle has a local stable curve and a local unstable curve through it, tangent to the two eigendirections, invariant under the flow, and for a smooth vector field they are smooth (:cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§8.3, the Stable Curve Theorem and the remarks following it, p. 169"}). That they also depend smoothly on a parameter is standard and is used here without proof. Take the two curves as coordinate axes: for each $\mu$ near $\mu_c$ there is a smooth change of coordinates near the saddle, depending smoothly on $\mu$, in which the unstable curve is the axis $\{s = 0\}$ and the stable curve is the axis $\{u = 0\}$, oriented so that the loop leaves along $u > 0$ and returns along $s > 0$. Each axis is invariant, so the $u$-component of the field vanishes where $u = 0$ and the $s$-component where $s = 0$, and a smooth function vanishing on a coordinate axis is that coordinate times a continuous factor. Hence

$$
\dot u \;=\; u\,A(u,s) , \qquad \dot s \;=\; -\,s\,B(u,s) ,
\qquad A(0,0) = \lambda_u , \quad B(0,0) = \lambda_s ,
$$

with $A$ and $B$ continuous. Fix a tolerance $\epsilon$ with $0 < 2\epsilon < \lvert\lambda_u - \lambda_s\rvert$ and $\epsilon < \min(\lambda_u,\lambda_s)$; the second constraint is what keeps $\lambda_u - \epsilon$ positive, so that the bound of Step 1 and the exponent $\nu_+ = (\lambda_s+\epsilon)/(\lambda_u-\epsilon)$ mean what they are meant to. Since $A$ and $B$ are continuous in $(u,s)$ and in $\mu$, one square

$$
N \;=\; \{\,\lvert u\rvert \le \delta,\ \lvert s\rvert \le \delta\,\}
$$

serves for all $\mu$ in some interval around $\mu_c$, with $\lvert A - \lambda_u\rvert \le \epsilon$ and $\lvert B - \lambda_s\rvert \le \epsilon$ on it. Both $\delta$ and the interval depend on $\epsilon$, but not on $\mu$; at the end we let $\epsilon \to 0$.

**Step 1: crossing the square.** Let a trajectory enter $N$ through the top edge at $(u_{\rm in},\delta)$ with $0 < u_{\rm in} \le \delta$. Then $u$ grows and $s$ decays, and $s$ stays positive because a decaying exponential never reaches $0$; so the trajectory leaves through the side edge $u = \delta$, at a time $t_N$ that the bounds on $A$ sandwich:

$$
\frac{1}{\lambda_u+\epsilon}\,\ln\frac{\delta}{u_{\rm in}}
\;\le\; t_N \;\le\;
\frac{1}{\lambda_u-\epsilon}\,\ln\frac{\delta}{u_{\rm in}} .
$$

This is the only slow part of the circuit, and it is slow precisely because the velocity vanishes at the saddle. The exit height is $s_{\rm out} = \delta\exp\bigl(-\int_0^{t_N}B\,dt\bigr)$, and putting the same bounds into the exponent gives

$$
\delta\Bigl(\frac{u_{\rm in}}{\delta}\Bigr)^{\nu_+}
\;\le\; s_{\rm out} \;\le\;
\delta\Bigl(\frac{u_{\rm in}}{\delta}\Bigr)^{\nu_-} ,
\qquad
\nu_- = \frac{\lambda_s-\epsilon}{\lambda_u+\epsilon} , \qquad
\nu_+ = \frac{\lambda_s+\epsilon}{\lambda_u-\epsilon} ,
$$

both exponents tending to $\nu = \lambda_s/\lambda_u$ as $\epsilon \to 0$. The map $u_{\rm in}\mapsto s_{\rm out}$ is increasing, since trajectories of a planar flow cannot cross.

**Step 2: the rest of the circuit takes a bounded time.** Outside $N$ the loop $\Gamma$ is a compact arc on which $f$ does not vanish, so the speed has a positive minimum there. The flow therefore carries a neighbourhood of the exit edge $u = \delta$ to the entry edge $s = \delta$ in a time $t_\Gamma$ bounded above and below by constants depending on $\delta$ and $f$ but neither on $\mu$ nor on the exit point, and the resulting transition map is a diffeomorphism between two transversals:

$$
u_{\rm in} \;=\; u_0(\mu) \;+\; a\,s_{\rm out} \;+\; O\bigl(s_{\rm out}^2\bigr) ,
$$

with $a$ positive and bounded away from $0$ and from $\infty$. Its value at $s_{\rm out} = 0$ is where the unstable curve comes back to the entry edge, which is the separation $u_0(\mu)$ of the two manifolds measured there.

**Step 3: the separation is linear in the parameter.** At $\mu = \mu_c$ the manifolds coincide, so $u_0(\mu_c) = 0$, and the transversality assumed in the statement says $u_0'(\mu_c) \neq 0$. Hence

$$
u_0(\mu) \;=\; c\,(\mu - \mu_c) + O\bigl((\mu-\mu_c)^2\bigr) , \qquad c \neq 0 .
$$

Only $\ln\lvert u_0\rvert$ enters below, so the constant $c$, and equally the bounded distortion that the change of coordinates of Step 0 applies to any such separation, contribute $O(1)$ and may be ignored.

Which cross-section the separation is read on does not matter either, and this is worth saying once because the statement fixes a section in advance while the proof has measured $u_0$ on the entry edge $s = \delta$ of a square chosen only in Step 0. Between any two cross-sections of $\Gamma$ near the saddle the flow furnishes a transition map that is a diffeomorphism, depends smoothly on $\mu$, preserves orientation, and carries the point where the stable curve meets the first section to the point where it meets the second. A separation measured on the first section is therefore the separation measured on the second times a positive factor, smooth in $\mu$ and bounded away from $0$ and $\infty$. Hence the vanishing at $\mu_c$, the *sign* of $u_0$ - which, together with the comparison of the two eigenvalues (Step 6), is what decides the side of $\mu_c$ on which the cycle lives - and the non-degeneracy $u_0'(\mu_c) \neq 0$ all transfer unchanged from one section to any other.

**Step 4: where the cycle enters, from the return map.** A closed orbit near $\Gamma$ meets the top edge in a fixed point of the return map $R = (\text{Step 2}) \circ (\text{Step 1})$, and by those two steps $R$ is continuous and increasing with

$$
u_0(\mu) + a_-\delta\Bigl(\frac{u}{\delta}\Bigr)^{\nu_+}
\;\le\; R(u) \;\le\;
u_0(\mu) + a_+\delta\Bigl(\frac{u}{\delta}\Bigr)^{\nu_-}
$$

for constants $0 < a_- \le a_+$ independent of $\mu$.

Suppose first that $\lambda_u < \lambda_s$. The choice $2\epsilon < \lambda_s - \lambda_u$ makes $\nu_- > 1$, so the nonlinear term is small compared with its argument: there is $u_1 > 0$ with $a_+\delta(u/\delta)^{\nu_-} \le u/2$ for $0 < u \le u_1$. Take the side of $\mu_c$ on which $b := u_0(\mu) > 0$, and let $\mu$ be close enough to $\mu_c$ that $2b \le u_1$. Then $R(b) \ge b$ and $R(2b) \le b + b = 2b$, so by the intermediate value theorem $R$ has a fixed point $u_*$ with

$$
u_0(\mu) \;\le\; u_* \;\le\; 2\,u_0(\mu) :
$$

a cycle exists. The same inequality shows that *every* fixed point in $(0,u_1]$ lies in $[u_0, 2u_0]$, since $R(u) \ge u_0$ always and $R(u) \le u_0 + u/2 < u$ once $u > 2u_0$: whatever closed orbits sit near $\Gamma$, they all enter the square at a distance comparable to the separation of the manifolds. That they enter it at all, in that interval, is worth a line: a closed orbit confined to a tube of radius $r \ll \delta$ about $\Gamma$ must cross the entry edge, since $\Gamma$ crosses it transversally at $(0,\delta)$ and meets it nowhere else, and must cross it at some $u$ with $\lvert u\rvert < r$; it cannot cross at $u = 0$, a point of the stable curve, whose orbit tends to the saddle and is not closed, nor at $u < 0$, for there $\lvert u\rvert$ grows and the trajectory leaves $N$ through the edge $u = -\delta$, following the *other* branch of the unstable curve. Shrink $\delta$ once more, if need be, so that $\Gamma$ meets $N$ only in the two positive semi-axes; that edge is then a compact set disjoint from $\Gamma$, hence at a positive distance from it, and a tube thinner than that distance cannot contain the trajectory. Taking $r$ smaller than both that distance and $u_1$ puts the crossing in $(0,u_1]$, where the two bounds apply. That is the step that cannot be taken on trust, and it is where the comparison of the two eigenvalues enters.

The same two inequalities make $R$ map $(0,u_1]$ into itself, and $R$ is increasing, so the iterates of any point of that interval are monotone and converge to a fixed point: the closed orbits near $\Gamma$, confined to the thin annulus just described, attract as a set every trajectory that meets the entry edge in $(0,u_1]$, whether it meets it inside that annulus or outside it. Those points include a whole one-sided neighbourhood of $\Gamma$, namely the interior side - which in this case, $u_0 > 0$, is also the side into which the unstable curve returns. For a point lying close enough to the arc of $\Gamma$ outside $N$, on its interior side, is carried to the entry edge at a small positive $u$ by the transition map of Step 2; and a point of $N$ on the interior side has $u > 0$ and $s > 0$, so it leaves through the exit edge $u = \delta$ and is then carried to the entry edge in the same way. Making the neighbourhood thin enough puts every one of those landing points in $(0,u_1]$. That is the one-sided attraction asserted in (c), and it is exactly as much as these bounds give. They do not give isolation. An increasing continuous self-map of an interval may have a repelling fixed point, with $R(u) < u$ just below it and $R(u) > u$ just above, and the two bounds $u_0 \le R(u) \le u_0 + u/2$ do not forbid such a configuration inside $[u_0, 2u_0]$; nor do they forbid a whole interval of fixed points there. Uniqueness is nevertheless true, and with it isolation and the stability of the single cycle, but it needs an ingredient we have avoided: with a $C^1$ linearization at the saddle one computes $R'(u) = O(u^{\nu-1}) \to 0$, so that $R$ is a contraction on $(0,u_1]$ and has one fixed point, attracting. The period estimate of Step 5 uses none of this - only $u_* \in [u_0, 2u_0]$, which is established above for every fixed point. On the other side of $\mu_c$, where $u_0 < 0$, the upper bound gives $R(u) \le u_0 + u/2 < u$ for every $0 < u \le u_1$, so there is no fixed point and no cycle.

**Step 5: add the two times.** With $T(\mu) = t_N + t_\Gamma$, where $t_\Gamma$ depends on the exit point as well as on $\mu$ and only its uniform two-sided bound from Step 2 is used, Steps 3 and 4 give $\ln(\delta/u_*) = \ln\bigl(1/\lvert\mu-\mu_c\rvert\bigr) + O(1)$, and Steps 1 and 2 then give

$$
\frac{1}{\lambda_u+\epsilon}\,\ln\frac{1}{\lvert\mu-\mu_c\rvert} + O(1)
\;\le\; T(\mu) \;\le\;
\frac{1}{\lambda_u-\epsilon}\,\ln\frac{1}{\lvert\mu-\mu_c\rvert} + O(1) ,
$$

with $O(1)$ terms that depend on $\epsilon$ but not on $\mu$. Dividing by $\ln\bigl(1/\lvert\mu-\mu_c\rvert\bigr)$ and letting $\mu \to \mu_c$ confines the limit of $T(\mu)/\ln(1/\lvert\mu-\mu_c\rvert)$ to $[1/(\lambda_u+\epsilon),\,1/(\lambda_u-\epsilon)]$; since $\epsilon$ was any sufficiently small positive number, the limit is $1/\lambda_u$. This is the case $\lambda_u < \lambda_s$, where $\min(\lambda_u,\lambda_s) = \lambda_u$.

**Step 6: the other case, by reversing time.** Let $\lambda_u > \lambda_s$ and run Steps 0-5 for the reversed field $-f$. Reversing time exchanges the stable and the unstable curve of the saddle, hence exchanges the two eigenvalues, so the reversed family has unstable rate $\lambda_s$ and stable rate $\lambda_u$ and falls under the case just treated. It has the same loop at the same $\mu_c$, and a separation of the same order - though not the same separation, since reversing time changes the edge the gap is read on and the curve it is read from. That edge is now $u = \delta$, which has become the entry edge of the square, and it is joined to $s = \delta$ only by the global map $\Psi(s_{\rm out}) = u_0 + a\,s_{\rm out} + O(s_{\rm out}^2)$ of Step 2, with $a > 0$; this is not a pair of sections to which the section-independence of Step 3 applies, because $\Psi$ does not carry the crossing of one curve to the crossing of the same curve. The reversed unstable curve is the old stable curve, which meets $s = \delta$ at $u = 0$, so the reversed separation is $\tilde u_0 = \Psi^{-1}(0) = -u_0/a + O(u_0^2)$: the magnitude is comparable and the vanishing at $\mu_c$ and the non-degeneracy survive, but the **sign reverses**. That is why the cycle lives on the opposite side of $\mu_c$ in the two cases. What Step 3 supplies is then applied to $\tilde u_0$: it vanishes at $\mu_c$ and does so linearly, so $\lvert\tilde u_0\rvert$ is comparable to $\lvert\mu-\mu_c\rvert$, which is all Step 5 reads from it. Closed orbits and their periods are untouched by reversing time, while attraction becomes repulsion. Hence the set of closed orbits repels the one-sided neighbourhood of $\Gamma$ instead of attracting it, and

$$
\frac{T(\mu)}{\ln\bigl(1/\lvert\mu-\mu_c\rvert\bigr)} \;\longrightarrow\; \frac{1}{\lambda_s} \;=\; \frac{1}{\min(\lambda_u,\lambda_s)} .
$$

The two cases together are the statement. What is determined is the coefficient of the logarithm, and only in the limit: the argument leaves open an amount that is $o\bigl(\ln(1/\lvert\mu-\mu_c\rvert)\bigr)$, because the rates $A$ and $B$ were controlled only to within $\epsilon$. With an exactly linear flow on $N$ the same steps give $u_* = u_0(\mu)\bigl(1+O(u_0^{\nu-1})\bigr)$ and leave open a bounded amount instead, depending on the whole loop through $t_\Gamma$, $\delta$ and $c$. $\square$
:::

:::remark[Where the hypotheses are used, and when the table fails]{provenance=adapted src="strogatz-1994:§8.4, Example 8.4.1 and the closing remarks, pp. 264-265; hirsch-smale-devaney-2013:§16.4, pp. 377-380"}
**Hyperbolicity and transversality in (c).** The coefficient comes from the linear part at the saddle, so it needs the eigenvalues to be nonzero: at a non-hyperbolic fixed point the passage time is a power of the distance rather than a logarithm, which is exactly case (b). Transversality, $u_0'(\mu_c) \neq 0$, is what makes the separation linear in $\mu - \mu_c$; without it the logarithm acquires a different multiple, since $\ln\lvert\mu-\mu_c\rvert^k = k\ln\lvert\mu-\mu_c\rvert$.

**Both eigenvalues matter, and three different things depend on them.** It is tempting to say that only the unstable eigenvalue appears, since it alone sets the passage time, but that is wrong: the passage time is measured from an entry point, and the entry point is set by the return map, whose exponent is the ratio $\nu = \lambda_s/\lambda_u$. If $\nu > 1$ the return map obeys $u_0 \le R(u) \le u_0 + u/2$ near the saddle, which is enough to confine its fixed points to $[u_0,2u_0]$ without any claim that it contracts: the cycle enters at a distance comparable to the separation of the manifolds, and the coefficient is $1/\lambda_u$; if $\nu < 1$ it does not, and reading the circuit backwards in time gives $1/\lambda_s$ instead. So the sign of the *saddle quantity* $\lambda_u - \lambda_s$ decides both which eigenvalue appears in the period and whether the cycle is stable or unstable, while the question of which side of $\mu_c$ carries the cycle is settled by the sign of $u_0'(\mu_c)$, the direction in which the manifolds separate (Step 3 of the proof), **together with** the sign of $\lambda_u - \lambda_s$: for a fixed $\operatorname{sign} u_0'(\mu_c)$ the cycle sits on one side of $\mu_c$ when $\lambda_u < \lambda_s$ and on the other when $\lambda_u > \lambda_s$, because reversing time reverses the sign of the separation (Step 6). So the saddle quantity decides three things, this among them. The same comparison of $\lambda_u$ with $\lambda_s$ matters a great deal more in dimension three, where it separates a tame homoclinic bifurcation from one that creates infinitely many periodic orbits.

**Genericity.** The table reports the *generic* laws, and a symmetry or a coincidence can defeat them. Strogatz's instance is the van der Pol oscillator $\ddot x + \epsilon(x^2-1)\dot x + x = 0$: its eigenvalues cross the imaginary axis at $\epsilon = 0$, yet the cycle appears with amplitude $2$ rather than $O(\epsilon^{1/2})$, because the nonlinear term is multiplied by the same $\epsilon$ that drives the crossing and so vanishes with it. Setting $u = \epsilon^{1/2}x$ removes the coincidence and the amplitude of the cycle in $u$ is $2\epsilon^{1/2}$, obeying the Hopf law after all. The lesson is that a bifurcation diagnosed from a scaling law should first be checked for a degeneracy of this kind.

**Dimension.** All four laws persist in higher dimensions, but the list stops being exhaustive, and the homoclinic case changes character completely. In the plane, breaking a saddle loop destroys one cycle. In three dimensions a homoclinic orbit can have a return map with infinitely many fixed points, and breaking the connection unfolds infinitely many horseshoes, so that the family passes through infinitely many bifurcations as the parameter crosses $\mu_c$; Hirsch, Smale and Devaney exhibit this for a perturbation of the double-scroll system. The planar analysis above is protected from any of that by the Poincare-Bendixson theorem (:ref[]{to=dyn.poincare-bendixson}).

**Why local tests miss these.** In (a) and (c) the Jacobian at every fixed point of the family passes through $\mu_c$ without doing anything: in (a) the only fixed point is the origin, a stable spiral throughout, and in (c) the saddle stays a hyperbolic saddle with eigenvalues depending smoothly on $\mu$. An eigenvalue test run at the fixed points therefore reports nothing at all. Case (b) is the exception, and it is instructive: there a fixed point with a zero eigenvalue is born at $\mu_c$, so a purely local scan does flag that parameter value - as a saddle-node bifurcation of fixed points. What the scan cannot report is that the new fixed point was born *on* a closed orbit and has destroyed it, nor that the period was diverging as $\mu \downarrow \mu_c$; those are facts about a curve of $O(1)$ size, invisible to any computation carried out at the fixed points alone. What changes is the global arrangement of invariant manifolds, and detecting it requires following trajectories over $O(1)$ distances: numerically, by continuing the cycle or by tracking the unstable manifold of the saddle, which is the practical criterion Strogatz uses.
:::

:::method[Telling the four apart from measurements]{provenance=adapted src="strogatz-1994:§8.4, pp. 260-265"}
Suppose an experiment or a simulation shows a stable oscillation that disappears as a control parameter $p$ is varied, and you want to know which bifurcation did it.

1. **Record amplitude and period** as functions of $p$ as close to the transition $p_c$ as the data allow, and plot both against $\mu = \lvert p - p_c \rvert$ on logarithmic axes. Treat $p_c$ as a fitted parameter, not a measured one: it is usually the largest source of error.
2. **Does the amplitude vanish?** If it falls like $\mu^{1/2}$, the bifurcation is a supercritical Hopf and is local; confirm by checking that the oscillation becomes sinusoidal and that a fixed point survives at its centre.
3. **If the amplitude stays finite, look at the period.** A finite period means a saddle-node of cycles; an $O(1)$ jump in the oscillation's basin, and hysteresis on reversing $p$, confirm it. A diverging period means one of the two infinite-period cases.
4. **Separate the two divergences.** Fit $T$ against $\mu^{-1/2}$ and against $\ln(1/\mu)$. A power-law divergence is the infinite-period case; a logarithmic one is homoclinic. The waveform distinguishes them too: at an infinite-period bifurcation the trajectory stalls at one point of an otherwise unchanged orbit, while at a homoclinic bifurcation it stalls at a saddle that sits at a corner of the orbit.
5. **Extract a number from the logarithm.** If the divergence is logarithmic, the slope of $T$ against $\ln(1/\mu)$ is $1/\min(\lambda_u,\lambda_s)$, the reciprocal of the smaller of the two rates at the saddle - a quantity of the model that the fit measures directly. For an oscillation seen in data the cycle is the stable one, so the slope is $1/\lambda_u$ and measures the unstable eigenvalue; an unstable cycle, which has to be found by continuation or by integrating backwards in time, gives $1/\lambda_s$ instead. Checking the measured slope against both eigenvalues of a candidate model is a sharper test of the model than the logarithm alone.
6. **Check for degeneracy** before trusting a fit, by asking whether a symmetry or a shared parameter makes a nonlinear coefficient vanish at $p_c$, as in the van der Pol case of the remark.
:::

:::example[A homoclinic bifurcation located exactly by energy balance]{provenance=original}
Consider the family

$$
\dot x = y , \qquad \dot y = x - x^2 + \epsilon\,y\,(\alpha - x) ,
$$

with $0 < \epsilon \ll 1$ and $\alpha$ the bifurcation parameter. We locate its homoclinic bifurcation in closed form.

**The unperturbed system.** At $\epsilon = 0$ the system is $\ddot x = x - x^2$, conservative with

$$
H(x,y) \;=\; \tfrac12 y^2 - \tfrac12 x^2 + \tfrac13 x^3 .
$$

Its fixed points are a saddle at $(0,0)$ (eigenvalues $\pm1$) and a centre at $(1,0)$, with $H = 0$ and $H = -\tfrac16$ respectively. The level set $H = 0$ contains a homoclinic loop $\Gamma$ to the saddle, closing at $x = \tfrac32$, where indeed $H(\tfrac32,0) = -\tfrac98 + \tfrac98 = 0$. On $\Gamma$,

$$
x(t) \;=\; \tfrac32\,\operatorname{sech}^2\!\bigl(\tfrac t2\bigr) ,
\qquad
y(t) \;=\; \dot x(t) \;=\; -\tfrac32\,\operatorname{sech}^2\!\bigl(\tfrac t2\bigr)\tanh\!\bigl(\tfrac t2\bigr) ,
$$

which one checks by differentiating twice: $\ddot x = x - x^2$ holds identically.

**The balance condition.** Along a solution of the perturbed system,

$$
\frac{dH}{dt} \;=\; y\dot y + (x^2 - x)\dot x \;=\; y\bigl[x - x^2 + \epsilon y(\alpha-x)\bigr] + (x^2-x)y \;=\; \epsilon\,y^2\,(\alpha - x) .
$$

The loop survives the perturbation only if $H$ returns to its starting value after one circuit. To leading order in $\epsilon$ we may evaluate the integral along the *unperturbed* loop, giving the condition

$$
\Delta H \;=\; \epsilon \int_{-\infty}^{\infty} y(t)^2\,\bigl(\alpha - x(t)\bigr)\,dt \;=\; 0 ,
\qquad\text{i.e.}\qquad
\alpha \;=\; \frac{\displaystyle\int_{-\infty}^{\infty} x\,y^2\,dt}{\displaystyle\int_{-\infty}^{\infty} y^2\,dt} .
$$

**The two integrals.** Put $v = t/2$, so $dt = 2\,dv$, and substitute $\sigma = \tanh v$, $d\sigma = \operatorname{sech}^2 v\,dv$, $\operatorname{sech}^2 v = 1 - \sigma^2$:

$$
\int y^2\,dt \;=\; \tfrac94\cdot 2\int_{-\infty}^{\infty}\!\operatorname{sech}^4 v\,\tanh^2 v\;dv
\;=\; \tfrac92\int_{-1}^{1}\!\sigma^2(1-\sigma^2)\,d\sigma
\;=\; \tfrac92\cdot\tfrac4{15} \;=\; \tfrac65 ,
$$

$$
\int x\,y^2\,dt \;=\; \tfrac32\cdot\tfrac94\cdot 2\int_{-\infty}^{\infty}\!\operatorname{sech}^6 v\,\tanh^2 v\;dv
\;=\; \tfrac{27}{4}\int_{-1}^{1}\!\sigma^2(1-\sigma^2)^2\,d\sigma
\;=\; \tfrac{27}{4}\cdot\tfrac{16}{105} \;=\; \tfrac{36}{35} ,
$$

using $\int_{-1}^1 \sigma^2(1-\sigma^2)\,d\sigma = 2(\tfrac13-\tfrac15) = \tfrac4{15}$ and $\int_{-1}^1 \sigma^2(1-\sigma^2)^2 d\sigma = 2(\tfrac13-\tfrac25+\tfrac17) = \tfrac{16}{105}$. Hence

$$
\boxed{\;\alpha_c \;=\; \frac{36/35}{6/5} \;=\; \frac{6}{7} \;=\; 0.857142857\ldots\;}
$$

**Which side carries the cycle.** For $\alpha$ slightly larger than $6/7$ the integral is positive, so to leading order in $\epsilon$ the unstable manifold returns at a higher level of $H$ than it left and falls outside the stable manifold. Meanwhile the fixed point $(1,0)$ has Jacobian $\begin{pmatrix}0 & 1\\ -1 & \epsilon(\alpha-1)\end{pmatrix}$, with determinant $1$ and trace $\epsilon(\alpha-1) < 0$ for $\alpha < 1$: a stable spiral. An outward-going unstable manifold and an inward-attracting fixed point must be separated by a closed orbit, so an **unstable** limit cycle exists for $\alpha_c(\epsilon) < \alpha < 1$, where $\alpha_c(\epsilon)$ is the exact bifurcation value of the family, equal to $6/7$ to leading order in $\epsilon$ and located numerically below: at $\epsilon = 0.1$, for instance, $\alpha_c = 0.8572178$, so there is no cycle in $6/7 < \alpha < 0.8572178$. The cycle is destroyed at $\alpha = \alpha_c(\epsilon)$ by the homoclinic bifurcation and at $\alpha = 1$ by a subcritical Hopf bifurcation, where the trace changes sign. Being unstable, it is the case $\lambda_u > \lambda_s$ of part (c), as the eigenvalues below confirm.

**The predicted period scaling.** At $\epsilon = 0.1$ and $\alpha = 6/7$ the Jacobian at the origin is $\begin{pmatrix}0&1\\1&\epsilon\alpha\end{pmatrix}$, whose eigenvalues solve $\lambda^2 - \tfrac{3}{35}\lambda - 1 = 0$; numerically $\lambda_u = 1.0437751$ and $-\lambda_s = -0.9580608$. The saddle quantity is the trace, $\lambda_u - \lambda_s = \epsilon\alpha = 3/35 = 0.0857143 > 0$, so this is the case $\lambda_u > \lambda_s$ of the statement - which is only to be expected, since the cycle here has already been identified as the unstable one. The coefficient of the logarithm is therefore

$$
\frac{1}{\min(\lambda_u,\lambda_s)} \;=\; \frac{1}{\lambda_s} \;=\; 1.0437751 ,
$$

and *not* $1/\lambda_u = 0.9580608$; the two differ by $9\%$. They are easy to confuse in this family, because $\det J = -1$ at the saddle forces $\lambda_u\lambda_s = 1$, so that $1/\lambda_s$ and $1/\lambda_u$ are the two eigenvalues over again.

**Check against the full system.** We located $\alpha_c(\epsilon)$ numerically by integrating the unstable manifold forward and the stable manifold backward from $10^{-10}$ along the respective eigendirections (DOP853, relative tolerance $10^{-13}$), recording the $x$-coordinate at which each first meets the line $y = 0$, and solving for the $\alpha$ that makes the two coincide:

| $\epsilon$ | $\alpha_c$ (numerical) | $\alpha_c - 6/7$ | $(\alpha_c - 6/7)/\epsilon^2$ |
|---|---|---|---|
| $0.10$ | $0.8572178176$ | $7.4960\times10^{-5}$ | $0.0074960$ |
| $0.05$ | $0.8571615988$ | $1.8742\times10^{-5}$ | $0.0074967$ |
| $0.02$ | $0.8571458559$ | $2.9987\times10^{-6}$ | $0.0074968$ |
| $0.01$ | $0.8571436068$ | $7.4969\times10^{-7}$ | $0.0074969$ |

The last two columns are formed from $\alpha_c$ at full working precision, not from the ten decimals printed in the second: rounding $\alpha_c$ at the tenth decimal would already disturb the fifth figure of the ratio, since at $\epsilon = 0.01$ that ratio magnifies an error in $\alpha_c$ by $\epsilon^{-2} = 10^4$. The last column is constant to three significant figures, and to four from $\epsilon = 0.05$ down, still creeping upwards in the fifth, consistent with a limit near $0.0074969$, so the most that should be read off it is

$$
\alpha_c(\epsilon) \;=\; \tfrac67 \;+\; 0.007497\,\epsilon^2 \;+\; O(\epsilon^3) .
$$

The energy balance therefore gets the bifurcation value right with an error of order $\epsilon^2$, one order better than the $O(\epsilon)$ accuracy the derivation guarantees. We record the extra order as an observation about this family and do not account for it; the derivation above claims only the leading term.

**Measuring the coefficient of the logarithm.** The cycle is unstable, so we integrate the system backwards in time, where it attracts, start from $(1.1,0)$ at $\alpha = \alpha_c(\epsilon) + d$, discard the transient and time the return to the section $y = 0$, $x > 1$ (DOP853, relative tolerance $10^{-13}$). Two members of the family are worth doing. At $\epsilon = 0.1$ the saddle sits at $\alpha_c = 0.8572178176$, where $\lambda_u = 1.0437790$ and $\lambda_s = 0.9580572$, so the predicted slope of $T$ against $\ln(1/d)$ is $1/\lambda_s = 1.0437790$. The second member is $\epsilon = 1$, far outside the perturbative regime that produced $6/7$, but within reach of the same shooting, which gives $\alpha_c = 0.8645452474$. That number is worth pausing on: $(x,y,t)\mapsto(x,-y,-t)$ turns this member of the family into $\dot x = y$, $\dot y = \mu y + x - x^2 + xy$ with $\mu = -\alpha$, whose homoclinic bifurcation :cite[Strogatz]{work=strogatz-1994 loc="§8.4, p. 263"} locates numerically at $\mu_c \approx -0.8645$, so the shooting reproduces his value and we may trust it here. At this $\alpha_c$ the saddle has $\lambda_u = 1.5217035$ and $\lambda_s = 0.6571582$, so the prediction is $1/\lambda_s = 1.5217035$ against the alternative $1/\lambda_u = 0.6571582$: a factor $2.32$ apart. The slope column is the increment of $T$ divided by $\ln 10$.

| $d$ | $T$ at $\epsilon = 0.1$ | slope | $T$ at $\epsilon = 1$ | slope |
|---|---|---|---|---|
| $10^{-2}$ | $9.966954$ | - | $10.250481$ | - |
| $10^{-3}$ | $12.773439$ | $1.218841$ | $13.728902$ | $1.510659$ |
| $10^{-4}$ | $15.412528$ | $1.146142$ | $17.227064$ | $1.519232$ |
| $10^{-5}$ | $17.969326$ | $1.110403$ | $20.730098$ | $1.521348$ |
| $10^{-6}$ | $20.47992$ | $1.09034$ | $24.23385$ | $1.52166$ |
| $10^{-7}$ | $22.9616$ | $1.07779$ | $27.7377$ | $1.52170$ |
| $10^{-8}$ | $25.4239$ | $1.06934$ | $31.2416$ | $1.5217$ |

The last three rows are quoted to fewer figures than the others, because at small $d$ the measured time inherits the uncertainty of $\alpha_c$: an error $\delta$ in $\alpha_c$ is an error $\delta$ in the true distance from the bifurcation, and so moves $T$ by about $\delta/(\lambda_s d)$. The shooting pins $\alpha_c$ down to some $10^{-12}$, which at $d = 10^{-8}$ is $1.5\times10^{-4}$ in $T$ and $6\times10^{-5}$ in the slope - the last digit printed in that row may be off by a unit or two - while at $d \ge 10^{-5}$ it is below $10^{-6}$ and all six decimals stand. The $\epsilon = 1$ column settles on $1.5217$, which is $1/\lambda_s = 1.5217035$ to the five figures the shooting supports, and is nowhere near $1/\lambda_u = 0.6571582$. The $\epsilon = 0.1$ column converges much more slowly - the two rates there are nearly equal, and the relative error in the cycle's entry point decays only like $d^{\lambda_u/\lambda_s-1} = d^{0.0895}$ - but it falls monotonically towards $1.0437790$, its distance from that value shrinking by a factor of roughly $0.7$ per decade of $d$ across the range shown, and every entry in it stays well above the wrong candidate $0.9580572$. The reciprocal of the smaller eigenvalue is what the data measure.
:::

:::example[Reading a period off an infinite-period bifurcation]{provenance=original}
Take prototype (b) at $\mu = 1.01$, a distance $0.01$ past the bifurcation. The exact period is

$$
T \;=\; \frac{2\pi}{\sqrt{1.01^2 - 1}} \;=\; \frac{6.2831853}{\sqrt{0.0201}} \;=\; \frac{6.2831853}{0.14177447} \;=\; 44.318172 ,
$$

against $2\pi/\mu = 6.2209756$, the time the same circle would take at the uniform angular speed $\mu$: the bottleneck slows the orbit down by a factor $7.124$, although its shape is exactly the same unit circle. The square-root law predicts

$$
\frac{\pi\sqrt2}{\sqrt{\mu-1}} \;=\; \frac{4.4428829}{0.1} \;=\; 44.428829 ,
$$

which overestimates the exact value by $0.25\%$ - the relative error being $O(\mu-1) = O(10^{-2})$, as the expansion in the proof says. Halving the distance, to $\mu = 1.005$, gives $T = 62.753460$, a factor $1.41598$ against $\sqrt2 = 1.414214$; that factor is the signature to look for in data: a period that doubles when the distance from the transition is divided by four, with the waveform developing a flat stretch but keeping its amplitude.
:::

:::application[Hysteresis in a driven pendulum, and two kinds of neuron]{provenance=adapted src="strogatz-1994:§8.5, pp. 265-272"}
A pendulum driven by a constant torque, and equally a Josephson junction driven by a constant current, obeys

$$
\phi'' + \alpha\phi' + \sin\phi \;=\; I
$$

on the cylinder, with $\alpha > 0$ the dimensionless damping and $I$ the dimensionless drive. For $I < 1$ there are two fixed points, a saddle and a sink - the pendulum can hang at rest with gravity balancing the torque - and they merge in a saddle-node at $I = 1$. For $I > 1$ no rest state exists and there is instead a unique stable cycle on which the pendulum whirls over the top. The interesting regime is weak damping, where the whirling cycle and the rest state coexist over a range of $I$, so that the state reached depends on the history of the drive: raising $I$ past one threshold makes the junction switch to the voltage-carrying whirling state, and lowering it again does not switch it back until a different, lower threshold. Only the lower threshold belongs to this unit. The upper one is the saddle-node bifurcation of *fixed points* at $I = 1$, which destroys the rest state and which Strogatz lists separately from the two bifurcations of cycles. Which bifurcation of cycles supplies the lower threshold is decided by the damping. At strong damping the cycle is destroyed as soon as a fixed point appears on it, which happens at $I = 1$ itself: an infinite-period bifurcation, and no hysteresis at all, because the two thresholds then coincide. At weak damping the cycle instead survives below $I = 1$ and is destroyed later, at a lower drive $I_c < 1$, by running into the saddle: a homoclinic bifurcation, with the junction bistable throughout $I_c < I < 1$. :cite[Strogatz]{work=strogatz-1994 loc="§8.5, p. 272"} reports from Guckenheimer and Holmes, who obtain it by Melnikov's method, that the curve $I_c(\alpha)$ is tangent to the line $I = 4\alpha/\pi$ as $\alpha \to 0$. So the bistable range is at its widest at the weakest damping, where it is nearly the whole of $0 < I < 1$, and it narrows as $\alpha$ grows until the homoclinic curve reaches $I = 1$ and the infinite-period scenario takes over. That width is the usable switching margin of the device.

The same distinction organises a textbook fact about nerve cells. Strogatz's section is about the pendulum and the junction and says nothing about neurons; what follows is our own reading of the scaling table, and we give it because it is the clearest everyday instance of the table being used as a diagnostic. A neuron that begins to fire at an arbitrarily low rate as the injected current is raised is one whose resting state loses stability through a fixed point disappearing from a cycle: the period diverges at threshold, so arbitrarily long interspike intervals are available. A neuron that begins to fire abruptly at a nonzero rate is one whose rest state loses stability through a Hopf bifurcation, where the period stays $O(1)$ and only the amplitude grows. Measuring the firing rate just above threshold therefore identifies the bifurcation, and with it which reduced model can reproduce the cell - exactly the inference the scaling table is for.
:::
