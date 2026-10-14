---
id: dyn.hopf-bifurcation
title: The Hopf bifurcation
kind: theorem
level: core
summary: "Describes the one way a planar fixed point can lose stability without colliding with another fixed point - a conjugate pair of eigenvalues crossing the imaginary axis - and separates the benign supercritical case, in which a small stable cycle of amplitude proportional to the square root of the distance past the threshold grows out of the fixed point, from the dangerous subcritical case, in which an unstable cycle shrinks onto the fixed point and the state jumps to a distant attractor."
prereqs: [dyn.poincare-bendixson, dyn.one-dimensional-bifurcations, dyn.linear-planar-classification, dyn.linearization, dyn.flows-on-the-line, dyn.conservative-reversible, ode.linear-systems, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§8.2 Hopf bifurcations, pp. 248-254: the question of all the ways a stable planar fixed point can lose stability as a parameter varies, and the two pictures for the pair of eigenvalues (pp. 248-249); the description of a supercritical Hopf bifurcation as a stable spiral turning into an unstable spiral surrounded by a small nearly elliptical limit cycle, and the remark that Hopf bifurcations occur in any dimension $n \\ge 2$ (p. 249); the model system $\\dot r = \\mu r - r^3$, $\\dot\\theta = \\omega + br^2$ with the roles of the three parameters, its phase portraits for $\\mu$ below, at and above zero, and the Cartesian form from which the Jacobian $\\begin{pmatrix}\\mu & -\\omega\\\\ \\omega & \\mu\\end{pmatrix}$ and the eigenvalues $\\mu \\pm i\\omega$ are read off (pp. 250-251); the two rules of thumb, that the cycle amplitude grows like $\\sqrt{\\mu-\\mu_c}$ and that the period is $2\\pi/\\operatorname{Im}\\lambda + O(\\mu-\\mu_c)$, together with the two artefacts of the model, the exactly circular cycle and the horizontal eigenvalue paths (p. 251); the subcritical model $\\dot r = \\mu r + r^3 - r^5$, its coexisting stable cycle, unstable cycle and stable origin for $\\mu < 0$, the unstable cycle tightening onto the origin as $\\mu \\to 0^-$, the jump to a distant attractor, the hysteresis, and the destruction of the large cycle at $\\mu = -1/4$ (pp. 251-252); the statement that linearization cannot distinguish the two cases, that an analytical criterion exists but is awkward, and the recommended numerical test (pp. 252-253); the degenerate Hopf bifurcation of $\\ddot x + \\mu\\dot x + \\sin x = 0$, where a band of closed orbits replaces any limit cycle because the system becomes conservative at $\\mu = 0$ (p. 253); and Example 8.2.1, in which $\\dot r = \\mu r + ry^2$ is used to exclude the supercritical and degenerate cases by elimination (pp. 253-254). §8.3, pp. 254-260: the chlorine dioxide-iodine-malonic acid reaction, its two-variable reduction $\\dot x = a - x - 4xy/(1+x^2)$, $\\dot y = bx(1 - y/(1+x^2))$, and Example 8.3.3 computing the period of the cycle near the bifurcation from the imaginary part of the eigenvalues"
    pages: "248-260"
    role: the definition and the vocabulary of supercritical, subcritical and degenerate Hopf bifurcations; the two model systems analysed in the statements and proofs below; the eigenvalue test; the two rules of thumb, reported as such; the warning that linearization does not settle the sub- or supercritical question and the numerical test recommended in its place; the chemical oscillator cited in the application
  - work: hirsch-smale-devaney-2013
    loc: "§8.5, pp. 181-182: the example $x' = ax - y - x(x^2+y^2)$, $y' = x + ay - y(x^2+y^2)$, its linearization with eigenvalues $a \\pm i$, the polar form $r' = ar - r^3$, $\\theta' = 1$, the sink for $a<0$, the periodic solution of radius $\\sqrt a$ and period $2\\pi$ for $a>0$ with all nonzero solutions spiralling onto it, and the statement that at a Hopf bifurcation no new equilibria arise but a periodic solution is born at the equilibrium as the parameter passes the bifurcation value. §12.4 A Hopf bifurcation, pp. 270-272: the circuit family $x' = y - f_\\mu(x)$, $y' = -x$ with $f_\\mu(x) = x^3 - \\mu x$ and $\\mu \\in [-1,1]$; the linearization $\\begin{pmatrix}\\mu & 1\\\\ -1 & 0\\end{pmatrix}$ with eigenvalues $\\frac12(\\mu \\pm \\sqrt{\\mu^2-4})$, giving a spiral sink for $-1 \\le \\mu < 0$ and a spiral source for $0 < \\mu \\le 1$; the fact that all solutions tend to the origin for $-1 \\le \\mu \\le 0$, including at $\\mu = 0$ where the linearization yields a centre; and the birth of a unique attracting periodic solution $\\gamma_\\mu$ shrinking to the origin as $\\mu \\to 0^+$"
    pages: "181-182, 270-272"
    role: the second, independently stated model system, and in particular the observation that at the bifurcation value itself the origin of the supercritical model is still asymptotically stable although its linearization is a centre; the circuit family, which shows a Hopf bifurcation arising in a system not presented in polar coordinates, and the language that no new equilibrium is created
---

:::definition[Hopf bifurcation, supercritical and subcritical]{provenance=adapted src="strogatz-1994:§8.2, pp. 248-249, 251-253; hirsch-smale-devaney-2013:§8.5, p. 182"}
Let $f(\,\cdot\,,\mu)$ be a family of vector fields on an open set of the plane, depending on a real parameter $\mu$, with $f$ and its first partial derivatives in $x$ continuous in $(x,\mu)$. Suppose the family has a branch of fixed points $x_\ast(\mu)$, continuous in $\mu$, and write

$$
J(\mu) \;=\; D_x f\bigl(x_\ast(\mu),\mu\bigr) , \qquad
\lambda_\pm(\mu) \;=\; \alpha(\mu) \pm i\,\omega(\mu)
$$

for the Jacobian there and its eigenvalues. The family has a **Hopf bifurcation** at $\mu = \mu_c$ when

1. the eigenvalues at $\mu_c$ are a nonzero purely imaginary pair: $\alpha(\mu_c) = 0$ and $\omega(\mu_c) \neq 0$, and
2. they cross the imaginary axis as $\mu$ passes $\mu_c$: $\alpha$ changes sign there, the usual sufficient condition being the **transversality condition** $\alpha'(\mu_c) \neq 0$.

Condition 1 is the only alternative to a zero eigenvalue. If a planar fixed point is stable, both eigenvalues lie in $\operatorname{Re}\lambda < 0$; since they are the roots of a real quadratic they are either both real or a conjugate pair; and to destabilise the fixed point one or both must reach the imaginary axis. A real eigenvalue reaching $0$ gives the saddle-node, transcritical and pitchfork bifurcations of :ref[]{to=dyn.one-dimensional-bifurcations}, all of which involve a collision of fixed points. Condition 1 is the other case, and in it **no new fixed point appears**: what is created or destroyed is a closed orbit.

The bifurcation is called

- **supercritical** when a *stable* limit cycle exists on the side of $\mu_c$ where $x_\ast$ is unstable, and shrinks to $x_\ast$ as $\mu \to \mu_c$ from that side;
- **subcritical** when an *unstable* limit cycle exists on the side where $x_\ast$ is stable, and shrinks onto $x_\ast$ as $\mu \to \mu_c$ from that side, so that past $\mu_c$ the state must leave the neighbourhood altogether;
- **degenerate** when conditions 1 and 2 hold but there is no limit cycle on either side.

"Limit cycle" means an isolated closed orbit, as in :ref[]{to=dyn.poincare-bendixson}. Nothing in the definition is special to the plane: Hopf bifurcations occur in any dimension $n \ge 2$, with the remaining $n-2$ eigenvalues staying off the imaginary axis. Everything below is planar.
:::

:::statement[The supercritical model]{provenance=adapted src="strogatz-1994:§8.2, pp. 249-251; hirsch-smale-devaney-2013:§8.5, pp. 181-182"}
Fix $\omega \neq 0$ and $b \in \mathbb{R}$, and consider, in polar coordinates on $\mathbb{R}^2 \setminus \{0\}$ together with the origin,

$$
\dot r = \mu r - r^3 , \qquad \dot\theta = \omega + b r^2 .
$$

In Cartesian coordinates this is the polynomial system

$$
\dot x = \mu x - \omega y - (x^2+y^2)(x + b y) , \qquad
\dot y = \omega x + \mu y + (x^2+y^2)(b x - y) ,
$$

which has the origin as a fixed point, with Jacobian there $\begin{pmatrix} \mu & -\omega \\ \omega & \mu\end{pmatrix}$ and eigenvalues $\mu \pm i\omega$. So $\alpha(\mu) = \mu$, $\omega(\mu) = \omega$, and conditions 1 and 2 of the definition hold at $\mu_c = 0$ with $\alpha'(0) = 1$.

Then:

- For $\mu \le 0$ the origin is the only fixed point; it is asymptotically stable and attracts every trajectory, and there is no closed orbit. This includes $\mu = 0$, where the linearization is a centre.
- For $\mu > 0$, **provided $\omega + b\mu \neq 0$**, the origin is again the only fixed point and is an unstable spiral, the circle $r = \sqrt\mu$ is a closed orbit, and every trajectory other than the origin spirals onto it. It is therefore a **stable limit cycle**, and the only closed orbit of the system; its amplitude is exactly $\sqrt\mu$ and its period is exactly $2\pi/\lvert\omega + b\mu\rvert$.

The hypothesis $\omega + b\mu \neq 0$ cannot be dropped, and its failure is not a bookkeeping nuisance. Suppose $b \neq 0$ and $\mu = -\omega/b > 0$. On the circle $r = \sqrt\mu$ both $\dot r = r(\mu - r^2)$ and $\dot\theta = \omega + br^2 = \omega + b\mu$ vanish, so the Cartesian field is identically zero there: the circle is a curve of fixed points, not a closed orbit, the origin is not the only fixed point, and $2\pi/\lvert\omega+b\mu\rvert$ is undefined. (With $\omega = 1$, $b = -1$, $\mu = 1$ this is the unit circle.) For fixed $b \neq 0$ this happens at the single parameter value $\mu = -\omega/b$, and only if that value is positive.

The bifurcation at $\mu = 0$ is supercritical. There is at most one exceptional $\mu$, and none at all when $b = 0$ or when $-\omega/b \le 0$; when there is one it sits a fixed positive distance from $0$. So for all sufficiently small $\mu > 0$ the second item applies and the small stable cycle is there.
:::

:::statement[The subcritical model]{provenance=adapted src="strogatz-1994:§8.2, pp. 251-252"}
With $\omega \neq 0$ and $b \in \mathbb{R}$ as before, consider

$$
\dot r = \mu r + r^3 - r^5 , \qquad \dot\theta = \omega + b r^2 ,
$$

whose Cartesian form again has the origin as a fixed point with Jacobian eigenvalues $\mu \pm i\omega$. Write $\rho = r^2$. As in the previous statement, assume

$$
\omega + b\,\rho \neq 0 \quad\text{for every root } \rho \ge 0 \text{ of } \rho^2 - \rho - \mu = 0 ;
$$

equivalently, if $b \neq 0$, that $-\omega/b$ is not such a root. A fixed point away from the origin needs $\dot r = 0$ and $\dot\theta = 0$ at once, which is exactly a root $\rho$ of that quadratic with $\omega + b\rho = 0$; so under this hypothesis the origin is the only fixed point, and the circles named below are genuine closed orbits with period $2\pi/\lvert\omega + b\rho\rvert$. Without it the offending circle consists entirely of fixed points, just as in the supercritical model. Then:

- For $-\tfrac14 < \mu < 0$ there are exactly two closed orbits, the circles of radii
$$
r_\pm \;=\; \Bigl(\tfrac{1 \pm \sqrt{1+4\mu}}{2}\Bigr)^{1/2} ,
$$
the inner one ($r_-$) unstable and the outer one ($r_+$) stable, and the origin is asymptotically stable. Three attracting or repelling objects coexist, and which one a trajectory meets depends on where it starts: inside $r_-$ it falls to the origin, outside it winds onto $r_+$.
- At $\mu = 0$ the inner cycle has shrunk to the origin: $r_- = 0$, $r_+ = 1$, and the origin is unstable (weakly, with $\dot r = r^3 - r^5 > 0$ for small $r>0$).
- For $\mu > 0$ the origin is an unstable spiral and the only closed orbit is $r_+ = \bigl(\tfrac{1+\sqrt{1+4\mu}}{2}\bigr)^{1/2} > 1$, which is stable.
- At $\mu = -\tfrac14$ the two cycles coalesce at $r = 1/\sqrt2 = 0.7071067\ldots$ and for $\mu < -\tfrac14$ there is no closed orbit at all.

The bifurcation at $\mu = 0$ is subcritical. The event at $\mu = -\tfrac14$ is not a Hopf bifurcation — the origin takes no part in it — but a saddle-node bifurcation of cycles, treated in :ref[]{to=dyn.global-bifurcations}.
:::

:::statement[A cycle is born whenever the cubic coefficient has the right sign]{provenance=original}
The two models are not special. Suppose that on $\{0 < r \le r_0\}$, for $\lvert\mu\rvert \le \mu_0$, a planar family has the polar form

$$
\dot r \;=\; \mu r + a r^3 + R(r,\theta,\mu) , \qquad
\dot\theta \;=\; \omega + \Theta(r,\theta,\mu) ,
$$

with the origin a fixed point for every $\mu$, where $\omega \neq 0$, $a < 0$, the functions $R,\Theta$ are continuous and $2\pi$-periodic in $\theta$, and for some constant $C$

$$
\lvert R(r,\theta,\mu)\rvert \le C r^4 , \qquad \lvert \Theta(r,\theta,\mu)\rvert \le C r
\qquad (0 \le r \le r_0,\ \lvert\mu\rvert \le \mu_0) .
$$

Put

$$
\mu_1 \;=\; \min\left\{\ \mu_0,\ \ \frac{\lvert a\rvert r_0^2}{2},\ \ \frac{\lvert a\rvert^3}{32\,C^2},\ \ \frac{\lvert a\rvert\,\omega^2}{2\,C^2}\ \right\} .
$$

Then:

1. For $-\mu_0 \le \mu \le 0$ the origin is asymptotically stable, and no closed orbit meets the disc $\{r \le r_1\}$, where $r_1 = \min\{r_0,\ \lvert a\rvert/(2C)\}$.
2. For $0 < \mu < \mu_1$ the compact annulus
$$
A_\mu \;=\; \left\{\ \sqrt{\frac{\mu}{2\lvert a\rvert}} \ \le\ r\ \le\ \sqrt{\frac{2\mu}{\lvert a\rvert}}\ \right\}
$$
is positively invariant and contains no fixed point, so by :ref[the Poincare-Bendixson theorem]{to=dyn.poincare-bendixson} it contains a closed orbit; every such orbit has all its radii between $\sqrt{\mu/(2\lvert a\rvert)}$ and $\sqrt{2\mu/\lvert a\rvert}$.

So the amplitude of the born cycle is pinned between two multiples of $\sqrt\mu$. The argument gives existence, not uniqueness: it does not by itself show the orbit is isolated, hence a limit cycle. For $a > 0$ the mirror-image argument (run time backwards) produces an unstable cycle for $-\mu_1 < \mu < 0$, which is the subcritical picture.
:::

:::statement[Two rules of thumb]{provenance=adapted src="strogatz-1994:§8.2, Rules of Thumb, p. 251"}
:cite[Strogatz]{work=strogatz-1994 loc="p. 251"} draws two generic consequences from the model above. He is careful to call them rules of thumb and not theorems, and they are reported here with that status.

**Period at onset.** Read off the imaginary part of the eigenvalue pair at $\mu = \mu_c$. At the instant the cycle is born this is its angular frequency exactly; a little past $\mu_c$ it is wrong by $O(\mu-\mu_c)$, so

$$
T \;=\; \frac{2\pi}{\operatorname{Im}\lambda(\mu_c)} \;+\; O(\mu-\mu_c) .
$$

**Amplitude just past onset.** No cycle of finite size appears from nowhere: the amplitude rises continuously out of zero, and near $\mu_c$ it is a constant times $\sqrt{\mu-\mu_c}$.

He also warns against reading two features of the model as general. Its cycle is an exact circle, whereas a cycle met in practice is elliptical near onset and distorts further as $\mu$ leaves $\mu_c$ — so the model is a faithful picture topologically, not geometrically. And here $\operatorname{Im}\lambda$ is the constant $\omega$, so the eigenvalue pair slides along horizontal lines; a typical pair follows a curved path and meets the imaginary axis at an angle.
:::

:::idea{provenance=original}
Everything turns on one observation: when the eigenvalues are $\pm i\omega$ with $\omega \neq 0$, the angular velocity near the fixed point is close to $\omega$ and in particular never zero, so trajectories *must* circulate. The radial motion is then a one-dimensional flow, $\dot r = \mu r + a r^3 + \cdots$, carried round and round.

That reduces the whole question to :ref[a bifurcation on the half-line]{to=dyn.one-dimensional-bifurcations}. The linear term $\mu r$ changes the stability of $r=0$ as $\mu$ crosses zero, and the first nonlinear term $a r^3$ decides what the trajectory does once $\mu r$ has pushed it away. If $a<0$ the cubic term fights the growth and the two balance at $r \approx \sqrt{\mu/\lvert a\rvert}$: a stable zero of the radial field, which in the plane is a stable cycle. If $a>0$ both terms push outwards for $\mu>0$ and nothing stops the trajectory nearby, while for $\mu<0$ they balance at an *unstable* zero: an unstable cycle, which collapses onto the origin as $\mu \uparrow 0$.

For the two models the radial equation is exact and this is a complete analysis. For a general family the higher-order terms are not zero, but they are $O(r^4)$, and at the radii of interest $r \sim \sqrt\mu$ that is $O(\mu^2)$ against the $O(\mu^{3/2})$ of the terms that matter — small enough that the inward and outward inequalities on two circles survive. That is the content of the third statement: not a change of coordinates, just two circles and a trapping region.
:::

:::proof[The supercritical model]{provenance=adapted src="strogatz-1994:§8.2, pp. 250-251; hirsch-smale-devaney-2013:§8.5, pp. 181-182"}
1. *Cartesian form and the linearization.* With $x = r\cos\theta$, $y = r\sin\theta$,
$$
\dot x = \dot r\cos\theta - r\dot\theta\sin\theta
= (\mu r - r^3)\cos\theta - r(\omega + br^2)\sin\theta
= \mu x - \omega y - (x^2+y^2)(x + by) ,
$$
using $r\cos\theta = x$, $r\sin\theta = y$ and $r^2 = x^2+y^2$; the computation for $\dot y$ is the same with $\dot y = \dot r\sin\theta + r\dot\theta\cos\theta$. Both right-hand sides are polynomials whose nonlinear parts are cubic, so they are differentiable at the origin and the Jacobian there is the matrix of the linear parts, $\begin{pmatrix}\mu & -\omega\\ \omega & \mu\end{pmatrix}$. Its characteristic polynomial is $(\lambda-\mu)^2 + \omega^2$, with roots $\mu \pm i\omega$. Since $\dot\theta = \omega + br^2 \ne 0$ for $r$ small, the origin is the only fixed point near it. Globally, a fixed point with $r>0$ would need $\dot r = 0$ and $\dot\theta = 0$ at the same place, that is $r^2 = \mu$ and $\omega + br^2 = 0$, hence $\omega + b\mu = 0$ — which **the hypothesis of the statement excludes**. So for $\mu>0$ with $\omega+b\mu \ne 0$, and for every $\mu \le 0$, the origin is the only fixed point in the plane.
2. *The radial flow decides.* Because $r$ obeys the autonomous one-dimensional equation $\dot r = h(r) := r(\mu - r^2)$, the analysis of :ref[flows on the line]{to=dyn.flows-on-the-line} applies to it verbatim on $r \ge 0$.
3. *$\mu \le 0$.* For $r>0$, $h(r) = r(\mu - r^2) < 0$, so $r(t)$ is strictly decreasing and bounded below by $0$; its limit $L \ge 0$ satisfies $h(L) = 0$ by continuity of $h$ (if $h(L)<0$ then $r$ would keep decreasing past $L$), and the only nonnegative zero is $L=0$. Hence every trajectory tends to the origin and no closed orbit exists, since on a closed orbit $r$ would have to return to its initial value. **At $\mu=0$ this uses the cubic term**: the linearization there is a centre and says nothing.
4. *$\mu > 0$, the cycle.* $h(r) = r(\mu-r^2)$ vanishes on $r>0$ only at $r = \sqrt\mu$. The set $r = \sqrt\mu$ is therefore invariant, and on it $\dot\theta = \omega + b\mu$, a constant that is nonzero **by the hypothesis $\omega + b\mu \ne 0$**; so $\theta$ advances by $2\pi$ in time $2\pi/\lvert\omega+b\mu\rvert$ and the circle is a closed orbit of exactly that period.
5. *$\mu>0$, stability and uniqueness.* $h>0$ on $(0,\sqrt\mu)$ and $h<0$ on $(\sqrt\mu,\infty)$, so $r(t) \to \sqrt\mu$ for every initial $r>0$, by the monotone argument of step 3 applied on each side. Hence every nonzero trajectory spirals onto the circle, which is consequently isolated among closed orbits — a limit cycle — and is the only closed orbit, because a closed orbit would need $r$ to be periodic, while $r$ is strictly monotone off $r=\sqrt\mu$. At the origin $h(r) = r(\mu - r^2) > 0$ for small $r>0$ and the eigenvalues are $\mu \pm i\omega$ with $\mu>0$: an unstable spiral. $\square$
:::

:::proof[The subcritical model]{provenance=adapted src="strogatz-1994:§8.2, pp. 251-252"}
Again the radial equation $\dot r = h(r) = r(\mu + r^2 - r^4)$ decides everything, and again $\dot\theta = \omega + br^2$ is nonzero for small $r$ and, **by the hypothesis of the statement**, at each of the cycle radii as well, so every invariant circle below really is an orbit.

1. *Where the cycles are.* For $r>0$, $h(r)=0$ exactly when $\rho = r^2$ solves $\rho^2 - \rho - \mu = 0$, that is $\rho = \tfrac12\bigl(1 \pm \sqrt{1+4\mu}\bigr)$. Both roots are real iff $\mu \ge -\tfrac14$, and both are positive iff in addition $\mu < 0$ (their product is $-\mu$ and their sum is $1$). For $\mu \ge 0$ the root with the minus sign is $\le 0$ and only $r_+$ survives. This gives the four cases listed.
2. *Their stability.* At a positive zero $r$ we have $\mu = r^4 - r^2$, so
$$
h'(r) = \mu + 3r^2 - 5r^4 = (r^4-r^2) + 3r^2 - 5r^4 = 2r^2\bigl(1 - 2r^2\bigr) .
$$
Thus $h'(r) > 0$ when $r^2 < \tfrac12$ and $h'(r) < 0$ when $r^2 > \tfrac12$. Since $r_-^2 = \tfrac12(1-\sqrt{1+4\mu}) < \tfrac12 < \tfrac12(1+\sqrt{1+4\mu}) = r_+^2$ whenever $\mu<0$ and $\sqrt{1+4\mu}>0$, the inner circle is a repelling zero of the radial field and the outer one an attracting zero: an unstable and a stable limit cycle respectively.
3. *The origin.* For $-\tfrac14<\mu<0$, $h(r) = r(\mu + r^2 - r^4) < 0$ for $0<r<r_-$ because $\mu + r^2 - r^4$ is negative between its roots... more directly, $\mu + \rho - \rho^2$ is a downward parabola in $\rho$ vanishing at $\rho = r_\pm^2$, hence negative for $0 \le \rho < r_-^2$. So the origin attracts the disc $r<r_-$. At $\mu=0$, $h(r) = r^3(1-r^2) > 0$ for $0<r<1$, so the origin repels, although only algebraically: the eigenvalues $\pm i\omega$ are on the axis and the linearization again says nothing. **This is the step where the destabilising sign of the cubic term is used.**
4. *The collision.* At $\mu = -\tfrac14$ the discriminant $1+4\mu$ vanishes, $r_- = r_+ = 1/\sqrt2$, and $h(r) = r(-\tfrac14 + r^2 - r^4) = -r(r^2-\tfrac12)^2 \le 0$ with equality only at $r = 1/\sqrt2$: a single half-stable cycle. For $\mu < -\tfrac14$ the parabola $\mu+\rho-\rho^2$ has no real root, so $h(r)<0$ for all $r>0$ and there is no closed orbit; the origin attracts everything. $\square$
:::

:::proof[A cycle is born whenever the cubic coefficient has the right sign]{provenance=original}
Write $\lvert a \rvert = -a > 0$ throughout.

1. *Part 1, $\mu \le 0$.* For $0 < r \le r_1 = \min\{r_0, \lvert a\rvert/(2C)\}$,
$$
\dot r \;\le\; \mu r - \lvert a\rvert r^3 + C r^4 \;=\; r\Bigl(\mu - \lvert a\rvert r^2 + C r^3\Bigr) \;\le\; r\Bigl(\mu - \tfrac12\lvert a\rvert r^2\Bigr) \;\le\; -\tfrac12\lvert a\rvert r^3 ,
$$
where the middle inequality uses $Cr^3 \le \tfrac12 \lvert a\rvert r^2$, which is exactly $r \le \lvert a\rvert/(2C)$, and the last uses $\mu \le 0$. So $r$ decreases strictly on $(0,r_1]$; the disc $\{r \le r_1\}$ is positively invariant and, by the argument of step 3 of the first proof, every trajectory in it tends to the origin. A closed orbit meeting the disc would have to stay in it (positive invariance) and have $r$ periodic, which strict decrease forbids.
2. *Part 2, the outer circle.* Let $0<\mu<\mu_1$ and $\rho_+ = \sqrt{2\mu/\lvert a\rvert}$. From $\mu \le \lvert a\rvert r_0^2/2$ we get $\rho_+ \le r_0$, so the hypotheses apply there. Since $\lvert a\rvert\rho_+^2 = 2\mu$,
$$
\dot r\big|_{r=\rho_+} \;\le\; \mu\rho_+ - \lvert a\rvert\rho_+^3 + C\rho_+^4 \;=\; \rho_+\bigl(\mu - 2\mu + C\rho_+^3\bigr) \;=\; \rho_+\bigl(-\mu + C\rho_+^3\bigr) .
$$
Now $C\rho_+^3 < \mu/2$: squaring, this is $C^2(2\mu/\lvert a\rvert)^3 < \mu^2/4$, that is $\mu < \lvert a\rvert^3/(32C^2)$, which is one of the four bounds defining $\mu_1$. Hence $\dot r \le -\tfrac12\mu\rho_+ < 0$ on the outer circle: the field points strictly inward.
3. *The inner circle.* Let $\rho_- = \sqrt{\mu/(2\lvert a\rvert)}$, so $\lvert a\rvert\rho_-^2 = \mu/2$. Then
$$
\dot r\big|_{r=\rho_-} \;\ge\; \mu\rho_- - \lvert a\rvert\rho_-^3 - C\rho_-^4 \;=\; \rho_-\bigl(\tfrac12\mu - C\rho_-^3\bigr) \;\ge\; \rho_-\bigl(\tfrac12\mu - C\rho_+^3\bigr) \;>\; 0 ,
$$
using $\rho_- < \rho_+$ and the bound of step 2 again. The field points strictly outward across the inner circle.
4. *No fixed point in the annulus.* On $A_\mu$ we have $r \le \rho_+$, so $\lvert\Theta\rvert \le C\rho_+ < \lvert\omega\rvert$ precisely when $C^2\cdot 2\mu/\lvert a\rvert < \omega^2$, that is $\mu < \lvert a\rvert\omega^2/(2C^2)$ — the last of the four bounds. Hence $\dot\theta = \omega + \Theta$ has the sign of $\omega$ and is nonzero, so the velocity field does not vanish anywhere on $A_\mu$. **This is the only place the hypothesis $\omega \neq 0$ is used, and it is indispensable: with $\omega = 0$ the annulus could contain fixed points and the next step would fail.**
5. *Conclusion.* $A_\mu$ is compact and connected; by steps 2 and 3 the field points strictly into it on both boundary circles, so it is positively invariant; by step 4 it contains no fixed point. The Poincare-Bendixson theorem, in the trapping-region form of :ref[]{to=dyn.poincare-bendixson}, gives a closed orbit inside it. Any closed orbit lying in $A_\mu$ has all its radii in $[\rho_-,\rho_+]$ by definition of $A_\mu$; and no closed orbit can cross either boundary circle, because the field is strictly transverse there. $\square$
:::

:::remark[Where the hypotheses are used, and what goes wrong without them]{provenance=original}
- **$\omega(\mu_c) \neq 0$.** Used in step 4 of the last proof to keep the annulus free of fixed points, and implicitly everywhere else to make "the radial equation plus rotation" an honest description. With $\omega(\mu_c) = 0$ the eigenvalue pair is $0,0$ and the bifurcation is of a different family altogether.
- **Transversality $\alpha'(\mu_c) \neq 0$.** Not used in any proof above, because the models have $\alpha(\mu) = \mu$ by construction. It is what guarantees that the eigenvalues really do cross rather than touch the axis; without it, $\alpha(\mu) = \mu^2$ say, the fixed point is unstable on both sides and no transition occurs.
- **The sign of the cubic coefficient, and why linearization cannot supply it.** The two models have the *same* linearization at the origin for every $\mu$ — eigenvalues $\mu \pm i\omega$ — and opposite behaviour. So no amount of eigenvalue computation decides whether a Hopf bifurcation is sub- or supercritical; the information lives in the cubic terms. :cite[Strogatz]{work=strogatz-1994 loc="p. 253"} reports that a closed-form criterion exists but is awkward enough that he sends the reader to the computer instead. The experiment has two halves, and both are needed. Push the parameter a little past $\mu_c$ and see what the trajectory settles onto: a cycle of *small* amplitude there is the supercritical signature, whereas a jump to something far away is not. Then bring the parameter back down: if the cycle shrinks away again and the fixed point is recovered at the values it had before, the first reading stands; if the two sweeps disagree over an interval, the bifurcation is subcritical. He is explicit that none of this proves anything — a numerical experiment is evidence and the numerics themselves need checking — and the worked example below is run in that spirit.
- **Degenerate case.** Conditions 1 and 2 can hold with no cycle on either side. Strogatz's example is the pendulum with damping of either sign, $\ddot x + \mu\dot x + \sin x = 0$, equivalently $\dot x = y$, $\dot y = -\sin x - \mu y$. At the origin the Jacobian is $\begin{pmatrix}0&1\\-1&-\mu\end{pmatrix}$ with trace $-\mu$ and determinant $1$, hence eigenvalues $\tfrac12(-\mu \pm \sqrt{\mu^2-4})$: a stable spiral for $0<\mu<2$, an unstable spiral for $-2<\mu<0$, and $\pm i$ at $\mu=0$. Both conditions hold. But at $\mu = 0$ the system is conservative, with $E = \tfrac12 y^2 + 1 - \cos x$, and by :ref[]{to=dyn.conservative-reversible} the origin is a nonlinear centre: a continuous band of closed orbits, none of them isolated, hence no limit cycle, and none for $\mu \neq 0$ either. The usual signature of degeneracy is exactly this, a system that becomes conservative at the bifurcation value.
- **Isolation is not proved.** The third statement produces a closed orbit in the annulus, not a limit cycle. Proving uniqueness needs more — a Poincare map, as in :ref[]{to=dyn.poincare-maps}, or a Dulac function, or the normal-form reduction that turns the $O(r^4)$ remainder into an $O(r^5)$ one. In the two models uniqueness came free because the radial field was exactly autonomous.
- **The bound $\lvert R\rvert \le Cr^4$ is a hypothesis, not a consequence.** A general smooth planar family with linear part $\begin{pmatrix}\mu&-\omega\\\omega&\mu\end{pmatrix}$ has $\dot r = \mu r + O(r^2)$, with a quadratic term that depends on $\theta$; it is only after a polynomial change of coordinates (the Poincare normal form) that the quadratic term and the $\theta$-dependence of the cubic term are removed, leaving $\dot r = \mu r + ar^3 + O(r^4)$. That reduction is not carried out here; the statement takes its output as a hypothesis and shows what follows from it.
:::

:::method[Detecting and classifying a Hopf bifurcation]{provenance=adapted src="strogatz-1994:§8.2, pp. 248-253, and §8.3, Example 8.3.3, p. 260"}
Given a planar family $\dot x = f(x,\mu)$:

1. **Find the branch of fixed points** $x_\ast(\mu)$. Solve $f = 0$ symbolically if possible; by :ref[the implicit function theorem]{to=found.implicit-inverse-function} the branch is as smooth as $f$ wherever $D_xf$ is invertible, which it is throughout a Hopf bifurcation (the eigenvalues are $\pm i\omega \neq 0$, so the determinant is $\omega^2 > 0$).
2. **Compute the trace and determinant** of $J(\mu) = D_xf(x_\ast(\mu),\mu)$, not the eigenvalues. For a $2\times2$ real matrix the eigenvalues are $\tfrac12\bigl(\tau \pm \sqrt{\tau^2-4\Delta}\bigr)$ with $\tau = \operatorname{tr}J$, $\Delta = \det J$, so
$$
\alpha = \tfrac12\tau , \qquad \omega = \tfrac12\sqrt{4\Delta - \tau^2} \quad\text{when } \tau^2 < 4\Delta .
$$
3. **Solve $\tau(\mu) = 0$** for candidate values $\mu_c$, and at each check $\Delta(\mu_c) > 0$. That is condition 1: then $\omega(\mu_c) = \sqrt{\Delta(\mu_c)} \neq 0$. (If $\Delta(\mu_c) \le 0$ the eigenvalues are real at $\mu_c$ and this is not a Hopf point.) See :ref[]{to=dyn.linear-planar-classification} for the trace-determinant picture: a Hopf bifurcation is the crossing of the positive $\Delta$-axis.
4. **Check transversality** by differentiating: $\alpha'(\mu_c) = \tfrac12\tau'(\mu_c) \neq 0$.
5. **Quote the period** as $T \approx 2\pi/\omega(\mu_c) = 2\pi/\sqrt{\Delta(\mu_c)}$, by rule of thumb 2.
6. **Decide sub- or supercritical numerically**, as in the remark: integrate at a few parameter values on the unstable side, measure the amplitude of whatever the trajectory settles onto, and test whether it goes to zero like $\sqrt{\mu-\mu_c}$. Equivalently, check whether $\text{(amplitude)}/\sqrt{\mu-\mu_c}$ tends to a finite nonzero constant. Then sweep back and look for hysteresis.
7. **Report the scaling, not just the threshold.** It is the pair (amplitude $\propto \sqrt{\mu-\mu_c}$, period $\to 2\pi/\sqrt{\Delta}$) that identifies the bifurcation as a Hopf event rather than one of the global bifurcations of :ref[]{to=dyn.global-bifurcations}, which have quite different scalings.
:::

:::example[Enrichment destabilises a predator-prey equilibrium]{provenance=original}
A predator $y$ feeds on a prey $x$ whose growth saturates at carrying capacity $K$, with a feeding rate that saturates at high prey density:

$$
\dot x \;=\; x\Bigl(1 - \frac{x}{K}\Bigr) - \frac{xy}{1+x} , \qquad
\dot y \;=\; y\Bigl(\frac{x}{1+x} - \frac12\Bigr) , \qquad x,y>0 .
$$

The parameter is $K$. Everything is dimensionless; the predator's death rate has been fixed at $\tfrac12$.

**Step 1: the coexistence equilibrium.** $\dot y = 0$ with $y>0$ needs $x/(1+x) = \tfrac12$, so $x_\ast = 1$ for every $K$. Then $\dot x = 0$ gives $1 - 1/K = y/2$, so

$$
x_\ast = 1 , \qquad y_\ast = 2\Bigl(1-\frac1K\Bigr) ,
$$

which is in the positive quadrant exactly when $K>1$.

**Step 2: trace and determinant.** Differentiating and substituting $x=1$, $y = y_\ast$,

$$
J(K) \;=\;
\begin{pmatrix}
1 - \dfrac{2x}{K} - \dfrac{y}{(1+x)^2} & -\dfrac{x}{1+x} \\[2mm]
\dfrac{y}{(1+x)^2} & \dfrac{x}{1+x}-\dfrac12
\end{pmatrix}_{(1,\,y_\ast)}
\;=\;
\begin{pmatrix} \dfrac{K-3}{2K} & -\dfrac12 \\[2mm] \dfrac{K-1}{2K} & 0 \end{pmatrix} ,
$$

so

$$
\tau(K) = \frac{K-3}{2K} , \qquad \Delta(K) = \frac{K-1}{4K} .
$$

**Step 3: the Hopf point.** $\tau = 0$ only at $K_c = 3$, and there $\Delta = 2/12 = 1/6 > 0$. The eigenvalues at $K_c$ are $\pm i\sqrt{1/6} = \pm\,0.4082483\,i$, purely imaginary and nonzero: condition 1 holds. For $K<3$ the trace is negative and the equilibrium is stable; for $K>3$ it is positive and the equilibrium is unstable. It is a *spiral* only when $\tau^2 < 4\Delta$, which here reads $(K-3)^2 < 4K(K-1)$, that is $3K^2 + 2K - 9 > 0$, that is $K > \tfrac13\bigl(2\sqrt7 - 1\bigr) = 1.4305$. So on $1 < K < 1.4305$ the equilibrium is a stable *node*, and only past $K = 1.4305$ does it spiral — comfortably below the bifurcation value, so the picture near $K=3$ is spiral on both sides.

**Step 4: transversality.** $\tau'(K) = \dfrac{3}{2K^2}$, so $\alpha'(3) = \tfrac12\tau'(3) = \tfrac{1}{12} > 0 \neq 0$. A genuine crossing.

**Step 5: the predicted period.** Rule of thumb 2 gives

$$
T \;\approx\; \frac{2\pi}{\sqrt{\Delta(3)}} \;=\; 2\pi\sqrt6 \;=\; 15.390598 .
$$

**Step 6: supercritical or subcritical?** Simply integrating and waiting is not enough this close to the threshold: the cycle attracts at a rate of order $\lvert\tau\rvert/2 \approx 1.7\times10^{-4}$ at $K = 3.002$, so a transient of length $10^4$ still leaves errors in the sixth decimal. Instead, locate the cycle exactly by shooting. Take the section $x = 1$, $\dot x>0$, which the field crosses at $y < y_\ast$, let $\Pi(y)$ be the value of $y$ at the next such crossing, and solve $\Pi(y) = y$ to machine precision (integration at $3\times10^{-14}$ relative, $10^{-16}$ absolute tolerance; the extrema of $x$ are located as roots of $\dot x = 0$ rather than by sampling). This gives the cycle's half-range $A = \tfrac12(x_{\max}-x_{\min})$ and its period $T$ directly:

| $K$ | $A$ | $A/\sqrt{K-3}$ | period $T$ |
|---|---|---|---|
| $3.002$ | $0.0632572$ | $1.414474$ | $15.396477$ |
| $3.005$ | $0.1000461$ | $1.414865$ | $15.405297$ |
| $3.010$ | $0.1415514$ | $1.415514$ | $15.420003$ |
| $3.020$ | $0.2003665$ | $1.416805$ | $15.449436$ |
| $3.050$ | $0.3176604$ | $1.420620$ | $15.537896$ |
| $3.100$ | $0.4511915$ | $1.426793$ | $15.685860$ |
| $3.200$ | $0.6433024$ | $1.438468$ | $15.983709$ |

(Recomputing the whole table with the tolerance relaxed to $10^{-12}$ reproduces every entry to nine decimals.) The third column decreases monotonically towards $1.41421\ldots = \sqrt2$ as $K \downarrow 3$, rather than growing or collapsing, so the amplitude behaves like $\sqrt2\,\sqrt{K-3}$: rule of thumb 1. And the cycle shrinks to nothing as $K \to 3^+$. Starting at $(x,y) = (1.05,\,y_\ast(K))$, a distance $0.05$ from the equilibrium, the trajectory returns to it for $K = 2.98$ and $K = 2.99$: the distance at $t = 5000$ is $9.3\times10^{-6}$ and $6.7\times10^{-4}$ respectively, and still falling, in both cases close to the linear prediction $0.05\,e^{\alpha t}$ with $\alpha = (K-3)/(4K)$. So there is no cycle on the stable side and no hysteresis. **The bifurcation is supercritical.**

**Step 7: check the period against the prediction.** The last column tends to $15.3906$, matching $2\pi\sqrt6 = 15.390598$ from step 5: at $K = 3.002$ the measured period is $15.396477$, which is $0.0382\%$ high. The discrepancy falls very nearly in proportion to $K-3$, as rule of thumb 2 says it should: it is $5.8789\times10^{-3}$ at $K = 3.002$ and $1.472978\times10^{-1}$ at $K = 3.05$, a ratio of $25.06$ for a parameter ratio of $25$.

**Reading.** The equilibrium is destroyed by *improving* the environment. Below $K=3$ predator and prey settle to a steady coexistence; above it they oscillate, with an amplitude that grows like $\sqrt{K-3}$, so that at $K = 3.5$ the prey already swings between $0.29$ and $2.37$. Enrich further and the minimum prey density keeps falling, which in a finite population means extinction. This is the paradox of enrichment, and the calculation above locates it exactly: at $K=3$, with a period of $2\pi\sqrt6$.
:::

:::example[A subcritical bifurcation, and the jump it causes]{provenance=original}
Take the subcritical model with $\omega = 1$, $b = 0$:

$$
\dot r = \mu r + r^3 - r^5 , \qquad \dot\theta = 1 .
$$

Sweep $\mu$ upwards from $-0.5$, starting each time from the state reached at the previous value.

- At $\mu = -0.5 < -\tfrac14$ the only invariant set is the origin and the system sits there.
- At $\mu = -0.2$ the cycles are at $r_- = 0.5257311$ and $r_+ = 0.8506508$ (from $r_\pm^2 = \tfrac12(1\pm\sqrt{0.2})$, with $\sqrt{0.2} = 0.4472136$). The state is still at the origin, inside $r_-$, so nothing happens — the system gives no warning that two cycles now exist a short distance away.
- At $\mu = 0^+$ the inner cycle reaches the origin and the state is thrown out to $r_+ = 1$: an $O(1)$ jump, from amplitude $0$ to amplitude $1$, triggered by an arbitrarily small change in $\mu$.
- Now sweep back down. At $\mu = -0.2$ the state stays on the outer cycle at $r = 0.8506508$, not at the origin: the two sweeps disagree over the whole interval $-\tfrac14 < \mu < 0$. The oscillation only stops at $\mu = -\tfrac14$, where the outer cycle collides with the inner one at $r = 1/\sqrt2 = 0.7071068$ and both vanish; the state then falls to the origin.

So the response curve is a hysteresis loop, $\tfrac14$ wide in $\mu$: sweeping up, the amplitude jumps from $0$ to $1$ at $\mu = 0$; sweeping down, it drops from $1/\sqrt2 = 0.7071068$ to $0$ at $\mu = -\tfrac14$. The two branches disagree over the whole interval $-\tfrac14 < \mu < 0$, and the amplitude at which the oscillation finally switches off, $0.7071068$, is larger than the amplitude at which it switched on, which was $0$. Compare the supercritical case, where the amplitude is a continuous single-valued function of $\mu$ and the two sweeps agree everywhere. In an engineering setting this is the whole difference between a vibration that announces itself by growing slowly and one that appears at full size without notice.
:::

:::application[Chemical clocks, nerve cells and flutter]{provenance=adapted src="strogatz-1994:§8.2, p. 252, and §8.3, pp. 254-260; hirsch-smale-devaney-2013:§12.4, pp. 270-272"}
**Oscillating reactions.** The two-variable reduction of the chlorine dioxide-iodine-malonic acid reaction,
$$
\dot x = a - x - \frac{4xy}{1+x^2} , \qquad \dot y = bx\Bigl(1 - \frac{y}{1+x^2}\Bigr) ,
$$
is Strogatz's worked case: the single fixed point loses stability through a Hopf bifurcation as the parameter $b$ is lowered past $b_c = 3a/5 - 25/a$, and the period of the resulting chemical clock is read off from $\operatorname{Im}\lambda$ exactly as in step 5 of the method, giving $T = 2\pi[(a^2+25)/(15a^2-625)]^{1/2}$, which tends to $2\pi/\sqrt{15}$ for large $a$; Strogatz quotes this limit as $\approx 1.63$, and the value is $1.62231\ldots$ The useful point for an experimenter is that the theory predicts the *period at onset* from the linearization alone, before anything is known about the amplitude.

**Circuits.** Hirsch, Smale and Devaney put a tunable resistor in a Lienard circuit, $\dot x = y - (x^3 - \mu x)$, $\dot y = -x$, where $\mu$ might be the resistor's temperature. The origin is the only equilibrium; its Jacobian $\begin{pmatrix}\mu & 1\\ -1 & 0\end{pmatrix}$ has eigenvalues $\tfrac12(\mu \pm \sqrt{\mu^2-4})$, a spiral sink for $-1 \le \mu<0$ and a spiral source for $0<\mu\le1$. For $\mu \le 0$ the resistor is passive and the circuit is dead: every solution decays to zero, including at $\mu = 0$ where the linearization is a centre. As $\mu$ becomes positive a unique attracting periodic solution appears and shrinks back to the origin as $\mu \to 0^+$. The circuit starts to oscillate of its own accord, and this is the mechanism behind every electronic oscillator; at $\mu = 1$ it is :ref[the van der Pol oscillator]{to=dyn.relaxation-averaging}.

**Why the sub- or supercritical distinction is the practical question.** Strogatz lists three places where the subcritical case appears: the firing of nerve cells, aeroelastic flutter and other vibrations of aircraft wings, and instabilities of fluid flows. In all three, what matters is not that an oscillation exists but that it arrives *at finite amplitude and without warning*, and that reversing the parameter does not switch it off — the hysteresis of the second worked example. A wing that flutters subcritically cannot be recovered by slowing down to the speed at which flutter began. Supercritical onset, by contrast, is announced by small oscillations whose amplitude grows like a square root, which is why an experimenter who measures that square-root law has evidence about the structure of the underlying model and not merely about where it becomes unstable.

**Ecology.** The worked example is the standard predator-prey model with a saturating functional response, and the Hopf bifurcation there is the paradox of enrichment: raising the prey's carrying capacity, which looks like an unambiguous improvement, converts a stable coexistence into a limit cycle whose troughs take the prey arbitrarily close to zero.
:::
