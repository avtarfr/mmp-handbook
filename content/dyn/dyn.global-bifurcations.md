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
    loc: "ch. 16 Homoclinic phenomena, §16.3 The double scroll attractor, pp. 375-377, and §16.4 Homoclinic bifurcations, pp. 377-380: a three-dimensional vector field with a pair of homoclinic solutions $\\zeta^\\pm$ at the origin, the Poincare map $\\Phi$ on a cylinder $C$ around them and the attractor $A = \\bigcap_n \\overline{\\Phi^n(C)}$ of zero volume; and the perturbation that breaks the homoclinic connections by translating $\\zeta^+ \\cap C$ a distance $\\varepsilon$, under which the infinitely many fixed points of $\\Phi_0^\\pm$ collapse to finitely many for $\\varepsilon \\neq 0$, so that the family passes through infinitely many bifurcations and unfolds infinitely many horseshoe maps"
    pages: "375-380"
    role: the statement, used in the remark, that a homoclinic bifurcation in three dimensions is an entirely different object from the planar one - infinitely many periodic orbits are created or destroyed rather than a single cycle
---

:::definition[Local and global bifurcations of cycles]{provenance=adapted src="strogatz-1994:§8.4, pp. 260-263"}
Let $\dot x = f(x,\mu)$ be a smooth family of vector fields on an open subset of the plane, depending on a real parameter $\mu$. A **bifurcation of cycles** at $\mu = \mu_c$ is a change, as $\mu$ crosses $\mu_c$, in the number or stability of the closed orbits of the family.

The bifurcation is **local** if everything that happens is visible in an arbitrarily small neighbourhood of a single fixed point: the Hopf bifurcation of :ref[]{to=dyn.hopf-bifurcation} is local, because the cycle it creates shrinks onto the fixed point as $\mu \to \mu_c$, and the eigenvalues of the Jacobian at that one point announce it. The bifurcation is **global** if it is not: the cycle involved stays a finite distance across at the bifurcation, so no amount of magnification around any one point reveals it, and no linearization detects it. Strogatz lists four common ways a planar limit cycle is created or destroyed; one is the Hopf bifurcation, and the other three are global. They are:

- **Saddle-node (fold) bifurcation of cycles.** Two limit cycles, one stable and one unstable, approach each other, merge into a single half-stable cycle at $\mu_c$, and annihilate. Read on a cross-section this is a saddle-node bifurcation of fixed points of the return map, which is where the name comes from. No fixed point of the flow takes part.
- **Infinite-period bifurcation.** A fixed point of the flow appears *on* the cycle. The cycle develops a bottleneck - a short arc along which the speed drops towards zero - and the period grows without bound; at $\mu_c$ the orbit is no longer periodic, having become a fixed point together with a pair of trajectories connecting it to itself. Past $\mu_c$ the fixed point splits into two.
- **Homoclinic (saddle-loop) bifurcation.** The cycle swells until it touches a saddle point lying outside it. At $\mu_c$ the cycle has become a **homoclinic orbit** of that saddle, a trajectory that approaches the same fixed point as $t \to +\infty$ and as $t \to -\infty$ (:ref[]{to=dyn.conservative-reversible}). Past $\mu_c$ the saddle connection breaks: the branch of the unstable manifold that used to close up now misses the stable manifold on one side, and no closed orbit remains nearby. The period again diverges, so this too is an infinite-period bifurcation in the literal sense; the names *homoclinic* and *saddle-loop* are used to keep the two cases apart.

Below, $\mu$ always stands for a dimensionless quantity measuring how far the parameter sits from its bifurcation value, with $0 < \mu \ll 1$.
:::

:::statement[Three prototypes]{provenance=adapted src="strogatz-1994:§8.4, pp. 261-263"}
**(a) Saddle-node of cycles.** For $\omega \neq 0$ and $b \in \mathbb{R}$, let

$$
\dot r = \mu r + r^3 - r^5 , \qquad \dot\theta = \omega + b r^2 .
$$

This is the subcritical Hopf family of :ref[]{to=dyn.hopf-bifurcation}, now examined away from $\mu = 0$. For $-\tfrac14 < \mu < 0$ it has two limit cycles, of radii $r_\pm = \bigl(\tfrac12(1 \pm \sqrt{1+4\mu})\bigr)^{1/2}$, the outer one stable and the inner one unstable, and the origin is also stable. As $\mu \downarrow -\tfrac14$ the two radii merge at

$$
r_c \;=\; 1/\sqrt2 \;=\; 0.7071067\ldots ,
$$

leaving a single half-stable cycle, and for $\mu < -\tfrac14$ there is no cycle at all. The origin is a stable spiral throughout and takes no part. At the bifurcation the cycle has amplitude $r_c$ and period $2\pi/\lvert\omega + b/2\rvert$, both $O(1)$.

**(b) Infinite-period.** For $\mu > 0$ let

$$
\dot r = r\,(1 - r^2) , \qquad \dot\theta = \mu - \sin\theta .
$$

The radial and angular equations are uncoupled. Every trajectory except the origin approaches the unit circle, which is invariant. On it the angular equation is the nonuniform oscillator of :ref[]{to=dyn.flows-on-the-circle}. For $\mu > 1$ the circle is a limit cycle, traversed with period

$$
T(\mu) \;=\; \int_0^{2\pi}\frac{d\theta}{\mu - \sin\theta} \;=\; \frac{2\pi}{\sqrt{\mu^2-1}} \;\sim\; \frac{\pi\sqrt2}{\sqrt{\mu-1}} \quad (\mu \downarrow 1) .
$$

At $\mu = 1$ a half-stable fixed point is born on the circle at $\theta = \pi/2$, and for $\mu < 1$ it splits into a saddle and a stable node. The amplitude is exactly $1$ throughout; only the period diverges.

**(c) Homoclinic.** Let $x_s$ be a hyperbolic saddle of $f(\,\cdot\,,\mu)$ with eigenvalues $\lambda_u > 0 > -\lambda_s$, depending smoothly on $\mu$, and suppose that at $\mu = \mu_c$ one branch of its unstable manifold coincides with one branch of its stable manifold, forming a homoclinic loop $\Gamma$, and that the two manifolds separate at a nonzero rate as $\mu$ moves off $\mu_c$. Then for $\mu$ on one side of $\mu_c$ there is a limit cycle near $\Gamma$ and on the other side there is none, and as $\mu \to \mu_c$ from the side where it exists its period satisfies

$$
T(\mu) \;=\; \frac{1}{\lambda_u}\,\ln\frac{1}{\lvert \mu - \mu_c\rvert} \;+\; O(1) .
$$

Its amplitude tends to the diameter of $\Gamma$, which is $O(1)$.

**The scaling table.** Writing $\mu$ for the dimensionless distance from the bifurcation, the generic laws for bifurcations of cycles in the plane are, as Strogatz tabulates them:

| bifurcation | amplitude of the cycle | period |
|---|---|---|
| supercritical Hopf | $O(\mu^{1/2})$ | $O(1)$ |
| saddle-node of cycles | $O(1)$ | $O(1)$ |
| infinite-period | $O(1)$ | $O(\mu^{-1/2})$ |
| homoclinic | $O(1)$ | $O(\ln\mu)$ |

Strogatz states the homoclinic row without derivation, referring to the literature; the proof below supplies the estimate. The $O(\ln \mu)$ entry means a divergence of that order as $\mu \to 0$, that is, growth like $\ln(1/\mu)$.
:::

:::idea{provenance=original}
Each prototype is a two-dimensional problem with a one-dimensional bottleneck, and in each case the bifurcation happens in the one dimension that matters.

For (a) the radial equation is a flow on a half-line, uncoupled from the angle, so a collision of limit cycles *is* a collision of fixed points on that line. For (b) the angular equation is a flow on a circle, and the cycle's period is the time to go once around; a saddle-node on that circle makes the integrand blow up non-integrably at one point, and the familiar square-root law of the saddle-node bottleneck gives the rate. For (c) the slow region is a neighbourhood of the saddle, where the flow is linear to leading order; the time to pass a hyperbolic saddle at distance $d$ from its stable manifold is $\lambda_u^{-1}\ln(1/d)$, and $d$ itself shrinks linearly as the parameter approaches its bifurcation value. In all three the amplitude stays $O(1)$ simply because the cycle at the bifurcation is a curve of finite size, which is exactly what makes the bifurcation global.
:::

:::proof[(a) Saddle-node of cycles]{provenance=adapted src="strogatz-1994:§8.4, pp. 261-262"}
Because $\dot r$ does not involve $\theta$, every circle $r = \text{const}$ on which $\dot r$ vanishes is an invariant closed orbit, and conversely a closed orbit must have $r$ constant, since $r(t)$ is monotone whenever $\dot r \neq 0$. So the closed orbits are exactly the positive zeros of

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
Put the saddle at the origin and choose coordinates $(u,s)$ along its unstable and stable eigendirections. Since the saddle is hyperbolic, there are a neighbourhood $N$ of it and a $C^1$ change of coordinates in which the flow is its linearization,

$$
\dot u = \lambda_u u , \qquad \dot s = -\lambda_s s ,
$$

by :ref[]{to=dyn.linearization}; shrink $N$ to the square $\lvert u\rvert, \lvert s\rvert \le \delta$ with $\delta$ fixed and independent of $\mu$.

**Step 1: the time to cross the square.** A trajectory entering $N$ through the top edge at the point $(u_0,\delta)$, with $0 < u_0 \le \delta$, has $u(t) = u_0 e^{\lambda_u t}$, so it leaves through the side edge $u = \delta$ at the time

$$
t_N \;=\; \frac{1}{\lambda_u}\,\ln\frac{\delta}{u_0} .
$$

(It leaves through the side, not the bottom, because $s(t) = \delta e^{-\lambda_s t}$ never reaches $0$.) This is the only part of the circuit that is slow, and it is slow precisely because the velocity vanishes at the saddle.

**Step 2: the rest of the circuit takes a bounded time.** Outside $N$ the loop $\Gamma$ is a compact arc on which $f$ does not vanish, so the speed has a positive minimum there; the time to traverse a tubular neighbourhood of that arc, from the exit edge $u = \delta$ back to the entry edge $s = \delta$, is bounded above and below by constants depending on $\delta$ and on $f$ but not on $\mu$. Call that transit time $t_\Gamma(\mu) = O(1)$; it depends continuously on $\mu$.

**Step 3: the entry point shrinks linearly in the parameter.** Following the unstable manifold forward from the saddle once around the loop produces a point on the top edge of $N$; its $u$-coordinate $u_0(\mu)$ is the splitting between the unstable manifold and the stable manifold measured on that edge. At $\mu = \mu_c$ the manifolds coincide, so $u_0(\mu_c) = 0$, and the transversality assumed in the statement says exactly that $u_0'(\mu_c) \neq 0$. Hence

$$
u_0(\mu) \;=\; c\,(\mu - \mu_c) + O\bigl((\mu-\mu_c)^2\bigr) , \qquad c \neq 0 .
$$

A periodic orbit near $\Gamma$ must re-enter $N$ at a point of the top edge at distance comparable to $u_0$ from the stable manifold - it is pinned between the invariant manifolds - so its entry coordinate is $u_0(\mu)$ up to a bounded factor.

**Step 4: add the two times.** The period of the cycle is $T(\mu) = t_N + t_\Gamma(\mu)$, so

$$
T(\mu) \;=\; \frac{1}{\lambda_u}\ln\frac{\delta}{\lvert c\rvert\,\lvert\mu-\mu_c\rvert} + O(1)
\;=\; \frac{1}{\lambda_u}\,\ln\frac{1}{\lvert\mu-\mu_c\rvert} \;+\; O(1) ,
$$

since $\ln(\delta/\lvert c\rvert)$ and $t_\Gamma$ are bounded. Only the coefficient $1/\lambda_u$ of the logarithm is determined; the additive constant depends on the whole loop. $\square$
:::

:::remark[Where the hypotheses are used, and when the table fails]{provenance=adapted src="strogatz-1994:§8.4, Example 8.4.1 and the closing remarks, pp. 264-265; hirsch-smale-devaney-2013:§16.4, pp. 377-380"}
**Hyperbolicity and transversality in (c).** The coefficient $1/\lambda_u$ comes from linearizing at the saddle, so it needs $\lambda_u > 0$ strictly: at a non-hyperbolic fixed point the passage time is a power of the distance rather than a logarithm, which is exactly case (b). Transversality, $u_0'(\mu_c) \neq 0$, is what makes the splitting linear in $\mu - \mu_c$; without it the logarithm acquires a different multiple, since $\ln\lvert\mu-\mu_c\rvert^k = k\ln\lvert\mu-\mu_c\rvert$. Note also that only the *unstable* eigenvalue appears. The stable one decides which side of $\mu_c$ carries the cycle and whether it is stable, and it matters a great deal in dimension three, where the comparison of $\lambda_u$ with $\lambda_s$ separates a tame homoclinic bifurcation from one that creates infinitely many periodic orbits.

**Genericity.** The table reports the *generic* laws, and a symmetry or a coincidence can defeat them. Strogatz's instance is the van der Pol oscillator $\ddot x + \epsilon(x^2-1)\dot x + x = 0$: its eigenvalues cross the imaginary axis at $\epsilon = 0$, yet the cycle appears with amplitude $2$ rather than $O(\epsilon^{1/2})$, because the nonlinear term is multiplied by the same $\epsilon$ that drives the crossing and so vanishes with it. Setting $u = \epsilon^{1/2}x$ removes the coincidence and the amplitude of the cycle in $u$ is $2\epsilon^{1/2}$, obeying the Hopf law after all. The lesson is that a bifurcation diagnosed from a scaling law should first be checked for a degeneracy of this kind.

**Dimension.** All four laws persist in higher dimensions, but the list stops being exhaustive, and the homoclinic case changes character completely. In the plane, breaking a saddle loop destroys one cycle. In three dimensions a homoclinic orbit can have a return map with infinitely many fixed points, and breaking the connection unfolds infinitely many horseshoes, so that the family passes through infinitely many bifurcations as the parameter crosses $\mu_c$; Hirsch, Smale and Devaney exhibit this for a perturbation of the double-scroll system. The planar analysis above is protected from any of that by the Poincare-Bendixson theorem (:ref[]{to=dyn.poincare-bendixson}).

**Why local tests miss these.** In each of (a), (b) and (c) the Jacobian at every fixed point of the family varies smoothly and, in case (a), does nothing at all at $\mu_c$. An eigenvalue test run at the fixed points therefore reports nothing. What changes is the global arrangement of invariant manifolds, and detecting it requires following trajectories over $O(1)$ distances: numerically, by continuing the cycle or by tracking the unstable manifold of the saddle, which is the practical criterion Strogatz uses.
:::

:::method[Telling the four apart from measurements]{provenance=adapted src="strogatz-1994:§8.4, pp. 260-265"}
Suppose an experiment or a simulation shows a stable oscillation that disappears as a control parameter $p$ is varied, and you want to know which bifurcation did it.

1. **Record amplitude and period** as functions of $p$ as close to the transition $p_c$ as the data allow, and plot both against $\mu = \lvert p - p_c \rvert$ on logarithmic axes. Treat $p_c$ as a fitted parameter, not a measured one: it is usually the largest source of error.
2. **Does the amplitude vanish?** If it falls like $\mu^{1/2}$, the bifurcation is a supercritical Hopf and is local; confirm by checking that the oscillation becomes sinusoidal and that a fixed point survives at its centre.
3. **If the amplitude stays finite, look at the period.** A finite period means a saddle-node of cycles; an $O(1)$ jump in the oscillation's basin, and hysteresis on reversing $p$, confirm it. A diverging period means one of the two infinite-period cases.
4. **Separate the two divergences.** Fit $T$ against $\mu^{-1/2}$ and against $\ln(1/\mu)$. A power-law divergence is the infinite-period case; a logarithmic one is homoclinic. The waveform distinguishes them too: at an infinite-period bifurcation the trajectory stalls at one point of an otherwise unchanged orbit, while at a homoclinic bifurcation it stalls at a saddle that sits at a corner of the orbit.
5. **Extract a number from the logarithm.** If the divergence is logarithmic, the slope of $T$ against $\ln(1/\mu)$ is $1/\lambda_u$, the reciprocal of the unstable eigenvalue of the saddle - a quantity of the model that the fit measures directly.
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

**Which side carries the cycle.** For $\alpha$ slightly larger than $6/7$ the integral is positive, so the unstable manifold returns at a higher level of $H$ than it left and falls outside the stable manifold. Meanwhile the fixed point $(1,0)$ has Jacobian $\begin{pmatrix}0 & 1\\ -1 & \epsilon(\alpha-1)\end{pmatrix}$, with determinant $1$ and trace $\epsilon(\alpha-1) < 0$ for $\alpha < 1$: a stable spiral. An outward-going unstable manifold and an inward-attracting fixed point must be separated by a closed orbit, so an **unstable** limit cycle exists for $\tfrac67 < \alpha < 1$. It is destroyed at $\alpha = 6/7$ by the homoclinic bifurcation and at $\alpha = 1$ by a subcritical Hopf bifurcation, where the trace changes sign.

**The predicted period scaling.** At $\epsilon = 0.1$ and $\alpha = 6/7$ the Jacobian at the origin is $\begin{pmatrix}0&1\\1&\epsilon\alpha\end{pmatrix}$, whose eigenvalues solve $\lambda^2 - \tfrac{3}{35}\lambda - 1 = 0$; numerically $\lambda_u = 1.0437751$ and $-\lambda_s = -0.9580608$. So the proof above predicts that the period of the cycle grows as $0.9580608\,\ln\bigl(1/(\alpha - \alpha_c)\bigr) + O(1)$.

**Check against the full system.** We located $\alpha_c(\epsilon)$ numerically by integrating the unstable manifold forward and the stable manifold backward from $10^{-10}$ along the respective eigendirections (DOP853, relative tolerance $10^{-13}$), recording the $x$-coordinate at which each first meets the line $y = 0$, and solving for the $\alpha$ that makes the two coincide:

| $\epsilon$ | $\alpha_c$ (numerical) | $\alpha_c - 6/7$ | $(\alpha_c - 6/7)/\epsilon^2$ |
|---|---|---|---|
| $0.10$ | $0.8572178176$ | $7.4960\times10^{-5}$ | $0.0074960$ |
| $0.05$ | $0.8571615988$ | $1.8742\times10^{-5}$ | $0.0074967$ |
| $0.02$ | $0.8571458559$ | $2.9988\times10^{-6}$ | $0.0074969$ |
| $0.01$ | $0.8571436068$ | $7.4966\times10^{-7}$ | $0.0074966$ |

The last column is constant to five digits, so $\alpha_c(\epsilon) = \tfrac67 + 0.0074966\,\epsilon^2 + O(\epsilon^3)$: the energy balance gets the bifurcation value right with an error of order $\epsilon^2$, one order better than the $O(\epsilon)$ accuracy the derivation guarantees. We record the extra order as an observation about this family and do not account for it; the derivation above claims only the leading term.
:::

:::example[Reading a period off an infinite-period bifurcation]{provenance=original}
Take prototype (b) at $\mu = 1.01$, a distance $0.01$ past the bifurcation. The exact period is

$$
T \;=\; \frac{2\pi}{\sqrt{1.01^2 - 1}} \;=\; \frac{6.2831853}{\sqrt{0.0201}} \;=\; \frac{6.2831853}{0.14177447} \;=\; 44.318172 ,
$$

against $2\pi/\mu = 6.221968$, the time the same circle would take at the uniform angular speed $\mu$: the bottleneck slows the orbit down by a factor $7.124$, although its shape is exactly the same unit circle. The square-root law predicts

$$
\frac{\pi\sqrt2}{\sqrt{\mu-1}} \;=\; \frac{4.4428829}{0.1} \;=\; 44.428829 ,
$$

which overestimates the exact value by $0.25\%$ - the relative error being $O(\mu-1) = O(10^{-2})$, as the expansion in the proof says. Halving the distance, to $\mu = 1.005$, gives $T = 62.753423$, a factor $1.41598$ against $\sqrt2 = 1.414214$; that factor is the signature to look for in data: a period that doubles when the distance from the transition is divided by four, with the waveform developing a flat stretch but keeping its amplitude.
:::

:::application[Hysteresis in a driven pendulum, and two kinds of neuron]{provenance=adapted src="strogatz-1994:§8.5, pp. 265-272"}
A pendulum driven by a constant torque, and equally a Josephson junction driven by a constant current, obeys

$$
\phi'' + \alpha\phi' + \sin\phi \;=\; I
$$

on the cylinder, with $\alpha > 0$ the dimensionless damping and $I$ the dimensionless drive. For $I < 1$ there are two fixed points, a saddle and a sink - the pendulum can hang at rest with gravity balancing the torque - and they merge in a saddle-node at $I = 1$. For $I > 1$ no rest state exists and there is instead a unique stable cycle on which the pendulum whirls over the top. The interesting regime is weak damping, where the whirling cycle and the rest state coexist over a range of $I$, so that the state reached depends on the history of the drive: raising $I$ past one threshold makes the junction switch to the voltage-carrying whirling state, and lowering it again does not switch it back until a different, lower threshold. The two thresholds are exactly the bifurcations of this unit. At strong damping the cycle dies when a fixed point appears on it, an infinite-period bifurcation; at weak damping it dies earlier, by running into the saddle, a homoclinic bifurcation. Which of the two happens is what sets the width of the hysteresis loop, and hence the usable switching margin of the device.

The same distinction organises a textbook fact about nerve cells. A neuron that begins to fire at an arbitrarily low rate as the injected current is raised is one whose resting state loses stability through a fixed point disappearing from a cycle: the period diverges at threshold, so arbitrarily long interspike intervals are available. A neuron that begins to fire abruptly at a nonzero rate is one whose rest state loses stability through a Hopf bifurcation, where the period stays $O(1)$ and only the amplitude grows. Measuring the firing rate just above threshold therefore identifies the bifurcation, and with it which reduced model can reproduce the cell - exactly the inference the scaling table is for.
:::
