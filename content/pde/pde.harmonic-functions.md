---
id: pde.harmonic-functions
title: Harmonic functions
kind: theorem
level: core
summary: Shows that a harmonic function equals its average over every sphere and every ball lying in its domain, that the converse holds for $C^2$ functions, that consequently it attains its maximum and minimum only on the boundary unless it is constant, and that the Dirichlet problem for Poisson's equation therefore has at most one solution, which depends continuously on its data.
prereqs: [vcalc.green-identities, vcalc.divergence-theorem]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§2.2.2, Theorem 2 (mean-value formulas) and Theorem 3 (converse), pp. 25–26; §2.2.3a, Theorem 4 (strong maximum principle) with the hypothesis $u \\in C^2(U)\\cap C(\\overline U)$, and Theorem 5 (uniqueness) for $-\\Delta u = f$ in $U$, $u = g$ on $\\partial U$, pp. 26–27"
    pages: "25-27"
    role: the mean value property in $\mathbb{R}^n$ and its proof by differentiating the spherical average; the converse; the strong maximum principle and its proof from the ball average; the uniqueness theorem
  - work: strauss-2008
    loc: "§6.1, pp. 152–156: Laplace's and Poisson's equations and the four physical settings, the maximum principle for a connected bounded open set in two or three dimensions, the proof of the boundary bound by perturbing $u$ to $u + \\varepsilon|\\mathbf{x}|^2$, and uniqueness of the Dirichlet problem deduced from it; §7.1, pp. 180–181, the mean value property in three dimensions obtained from Green's first identity with $v \\equiv 1$"
    pages: "152-156, 180-181"
    role: the $\varepsilon|\mathbf{x}|^2$ proof of the weak maximum principle, the deduction of Dirichlet uniqueness, the derivation of the mean value property from Green's identity, and the list of applications
  - work: stakgold-holst-2011
    loc: "§1.3, pp. 72–75: the weak and strong maximum principles for $-u'' \\le 0$, the statement of the weak versions in higher dimensions for a bounded domain $\\Omega$ with boundary $\\Gamma$, and the three consequences — uniqueness, comparison, and continuous dependence on the data with the constant $\\|v\\|_\\infty$ where $-\\Delta v = 1$, $v|_\\Gamma = 0$; §8.3, pp. 495–496, the mean value theorem on balls and the strong maximum principle proved from it by a chain of balls"
    pages: "72-75, 495-496"
    role: the comparison principle and the continuous-dependence estimate with its sharp constant; the chain-of-balls form of the strong maximum principle
  - work: ahlfors-1979
    loc: "§4.6.1–6.2, pp. 162–166: harmonic functions in a plane region defined as continuous with continuous first and second partials and $\\Delta u = 0$; the radial harmonic functions $a\\log r + b$; Theorem 19 on $\\int_\\gamma (u_1 *du_2 - u_2 *du_1) = 0$; the mean-value property derived from it with $u_1 = \\log r$; Theorem 21, that a nonconstant harmonic function has neither a maximum nor a minimum in its region of definition"
    pages: "162-166"
    role: the two-dimensional picture, the radial harmonic functions, and the maximum principle in the form Ahlfors states it
---

:::definition[Harmonic and Poisson]{provenance=adapted src="strauss-2008:§6.1, p. 152; ahlfors-1979:§4.6.1, p. 162; evans-2010:§2.2, p. 25"}
Let $U \subseteq \mathbb{R}^n$ be open. A function $u : U \to \mathbb{R}$ is **harmonic** in $U$ if $u \in C^2(U)$ and

$$
\nabla^2 u \;=\; \sum_{i=1}^n \frac{\partial^2 u}{\partial x_i^2} \;=\; 0 \qquad \text{at every point of } U .
$$

The equation $\nabla^2 u = 0$ is **Laplace's equation**; the inhomogeneous equation $\nabla^2 u = f$ with $f$ given is **Poisson's equation**. Ahlfors, working in the plane, builds the continuity of $u$ and of its first and second partial derivatives into the definition and remarks that the regularity demanded can be relaxed; Strauss calls a solution of Laplace's equation a harmonic function without naming a smoothness class.

Two pieces of notation are used throughout. $B(x,r)$ is the open ball of radius $r$ about $x$ and $\partial B(x,r)$ its bounding sphere. If $\alpha(n)$ denotes the volume of the unit ball of $\mathbb{R}^n$, then

$$
\lvert B(x,r)\rvert = \alpha(n)\, r^n, \qquad
\lvert \partial B(x,r)\rvert = n\,\alpha(n)\, r^{n-1} ,
$$

so that $\alpha(2) = \pi$, $\alpha(3) = \tfrac{4}{3}\pi$, and the two sphere areas are $2\pi r$ and $4\pi r^2$. We write $\partial u/\partial n = \hat{\mathbf{n}}\cdot\nabla u$ for the outward normal derivative, as in :ref[Green's identities]{to=vcalc.green-identities}.

**Signs.** Evans writes Poisson's equation as $-\Delta u = f$, so that the operator $-\Delta$ is the non-negative one; Strauss and Ahlfors write $\Delta u = f$ and $\Delta u = 0$. We use $\nabla^2$ for the Laplacian and put the sign where the source we are following puts it, saying each time which it is.
:::

:::statement[Mean value property]{provenance=adapted src="evans-2010:§2.2.2, Thm 2, p. 25; strauss-2008:§7.1, Eq. (6), p. 181"}
A harmonic function carries no information at the centre of a ball that is not already carried, on average, by its values on the surrounding sphere. Precisely: let $U \subseteq \mathbb{R}^n$ be open, let $u$ be harmonic in $U$, and let $x$ and $r > 0$ be such that the ball $B(x,r)$ and its boundary sphere lie in $U$. Then

$$
u(x) \;=\; \frac{1}{\lvert \partial B(x,r)\rvert}\int_{\partial B(x,r)} u \; dS
\;=\; \frac{1}{\lvert B(x,r)\rvert}\int_{B(x,r)} u \; dV . \tag{MV}
$$

In particular, the right-hand sides do not depend on $r$. Evans states the two equalities together in $\mathbb{R}^n$ for $u \in C^2(U)$ and "each ball $B(x,r) \subseteq U$"; we read that as including the boundary sphere, which the surface integral needs. Strauss derives the spherical form in three dimensions only, and remarks that the same idea works in $n$ dimensions.
:::

:::statement[Converse]{provenance=adapted src="evans-2010:§2.2.2, Thm 3, p. 26"}
Let $U \subseteq \mathbb{R}^n$ be open and let $u \in C^2(U)$ satisfy the first equality of (MV) for every ball $B(x,r) \subseteq U$. Then $u$ is harmonic in $U$.
:::

:::idea{provenance=original}
Write $\phi(r)$ for the average of $u$ over the sphere $\partial B(x,r)$ and watch it as $r$ grows. Rescaling the integral to the fixed unit sphere lets us differentiate in $r$ under the integral sign, and the derivative that comes out is exactly the average of the normal derivative $\partial u/\partial n$ over the sphere. By Green's first identity with $v \equiv 1$, that integral equals the integral of $\nabla^2 u$ over the ball, which is zero. So $\phi$ is constant in $r$; and as $r \to 0^+$ the average over a shrinking sphere tends to $u(x)$ by continuity. That gives the sphere form of (MV), and the ball form follows by integrating the sphere form in $r$.

The converse is the same computation read backwards. The identity $\phi'(r) = \frac{r}{n}\times(\text{average of } \nabla^2 u \text{ over } B(x,r))$ holds for every $C^2$ function, harmonic or not. If the averages are constant in $r$ then $\phi' \equiv 0$, so the average of $\nabla^2 u$ over every ball vanishes; a continuous function whose average over every ball vanishes is identically zero.
:::

:::proof{provenance=adapted src="evans-2010:§2.2.2, pp. 25–26; strauss-2008:§7.1, pp. 180–181"}
**Step 1 (the spherical average, rescaled).** Fix $x$ with $B(x,R) \subseteq U$ and for $0 < r < R$ put

$$
\phi(r) \;=\; \frac{1}{\lvert\partial B(x,r)\rvert}\int_{\partial B(x,r)} u(y)\; dS(y) .
$$

Substituting $y = x + rz$ maps $\partial B(x,r)$ onto the unit sphere $\partial B(0,1)$ and scales the surface element by $r^{n-1}$, so, since $\lvert\partial B(x,r)\rvert = n\alpha(n)r^{n-1}$,

$$
\phi(r) \;=\; \frac{1}{n\alpha(n)}\int_{\partial B(0,1)} u(x + rz)\; dS(z) . \tag{1}
$$

The domain of integration in (1) no longer depends on $r$.

**Step 2 (differentiate).** The integrand of (1) is $C^1$ in $(r,z)$ on $[0,R)\times\partial B(0,1)$, because $u \in C^2$, and the unit sphere is compact; so we may differentiate under the integral sign:

$$
\phi'(r) \;=\; \frac{1}{n\alpha(n)}\int_{\partial B(0,1)} \nabla u(x+rz)\cdot z\; dS(z) .
$$

Undoing the substitution, $z = (y-x)/r$ is the outward unit normal to $\partial B(x,r)$ at $y$, and $dS(z) = r^{-(n-1)}dS(y)$, so

$$
\phi'(r) \;=\; \frac{1}{n\alpha(n)r^{n-1}}\int_{\partial B(x,r)} \nabla u(y)\cdot\frac{y-x}{r}\; dS(y)
\;=\; \frac{1}{\lvert\partial B(x,r)\rvert}\int_{\partial B(x,r)} \frac{\partial u}{\partial n}\; dS . \tag{2}
$$

The derivative of the spherical average is the average of the normal derivative.

**Step 3 (use Green's identity).** The ball $B(x,r)$ has a smooth boundary and $u \in C^2$ on its closure, so part 2 of :ref[Green's identities]{to=vcalc.green-identities} — the case $v \equiv 1$ — applies and turns (2) into

$$
\phi'(r) \;=\; \frac{1}{n\alpha(n)r^{n-1}}\int_{B(x,r)} \nabla^2 u\; dV
\;=\; \frac{r}{n}\cdot\frac{1}{\lvert B(x,r)\rvert}\int_{B(x,r)} \nabla^2 u\; dV , \tag{3}
$$

using $\lvert B(x,r)\rvert = \alpha(n)r^n$ in the second form. Note that (3) has used nothing about $u$ beyond $u \in C^2$.

**Step 4 (harmonicity).** Now let $u$ be harmonic. Then the integrand in (3) vanishes, so $\phi'(r) = 0$ for all $0 < r < R$ and $\phi$ is constant there.

**Step 5 (the limit at the centre).** Let $\varepsilon > 0$. Since $u$ is continuous at $x$, there is $\delta > 0$ with $\lvert u(y) - u(x)\rvert < \varepsilon$ for $\lvert y - x\rvert < \delta$. For $r < \delta$, averaging this inequality over $\partial B(x,r)$ gives $\lvert \phi(r) - u(x)\rvert \le \varepsilon$, because an average of $u(x)$ is $u(x)$. Hence $\phi(r) \to u(x)$ as $r \to 0^+$, and by Step 4 the constant value of $\phi$ is $u(x)$. This is the first equality of (MV).

**Step 6 (from spheres to the ball).** Integrating in polar coordinates about $x$ and inserting the sphere result,

$$
\int_{B(x,r)} u\; dV = \int_0^r\left(\int_{\partial B(x,s)} u\; dS\right) ds
= \int_0^r u(x)\, n\alpha(n)s^{n-1}\, ds = u(x)\,\alpha(n)r^n = u(x)\,\lvert B(x,r)\rvert ,
$$

which is the second equality of (MV).

**Step 7 (the converse).** Let $u \in C^2(U)$ satisfy the sphere equality for every ball in $U$. Then $\phi$ is constant on $(0,R)$ for every admissible $R$, so $\phi' \equiv 0$, and (3) — which needed only $u \in C^2$ — says that

$$
\int_{B(x,r)} \nabla^2 u\; dV = 0 \qquad\text{for every } B(x,r)\subseteq U .
$$

Suppose $\nabla^2u(x_0) \ne 0$ for some $x_0 \in U$; replacing $u$ by $-u$ if necessary, assume $\nabla^2 u(x_0) > 0$. Since $\nabla^2 u$ is continuous, it stays above $\tfrac12\nabla^2u(x_0) > 0$ on some ball $B(x_0,\rho) \subseteq U$, whose integral is then strictly positive. That contradicts the display. Hence $\nabla^2 u \equiv 0$ on $U$. $\square$
:::

:::remark{provenance=original}
Ahlfors reaches the plane case of (MV) by a route with no divergence theorem in it. His Theorem 19 says that $\int_\gamma (u_1\,{*}du_2 - u_2\,{*}du_1) = 0$ for harmonic $u_1, u_2$ and any cycle $\gamma$ homologous to zero, where ${*}du = -u_y\,dx + u_x\,dy$ is the conjugate differential; it is proved by reducing to a rectangle, where single-valued conjugate functions exist and Cauchy's theorem applies. Taking $u_1 = \log r$ and $u_2 = u$ on a punctured disc, with $\gamma$ the difference of two concentric circles, shows that

$$
\int_{\lvert z\rvert = r} u \; d\theta - \log r \int_{\lvert z\rvert = r} r\,\frac{\partial u}{\partial r}\; d\theta
$$

is independent of $r$, and taking $u_1 = 1$ shows that the second integral vanishes on its own. So the first integral alone is independent of $r$, which is the mean value property. The conclusion is the same as Step 5's; the hypotheses differ in that Ahlfors's argument is about a region in the plane and is sensitive to the topology of $\gamma$, whereas the argument above is dimension-free.
:::

:::statement[Weak and strong maximum principle]{provenance=adapted src="evans-2010:§2.2.3a, Thm 4, p. 26; strauss-2008:§6.1, pp. 154–155; stakgold-holst-2011:§1.3, p. 73 and §8.3, pp. 495–496; ahlfors-1979:§4.6.2, Thm 21, p. 166"}
Let $U \subseteq \mathbb{R}^n$ be open and **bounded**, and let $u \in C^2(U)\cap C(\overline U)$ be harmonic in $U$. Then:

1. **Weak maximum principle.**
   $$
   \max_{\overline U} u = \max_{\partial U} u, \qquad \min_{\overline U} u = \min_{\partial U} u .
   $$
2. **Strong maximum principle.** If in addition $U$ is connected and $u(x_0) = \max_{\overline U} u$ for some $x_0 \in U$, then $u$ is constant on $U$.

Part 2 applied to $-u$ gives the same statement for an interior minimum. Equivalently: a nonconstant harmonic function on a connected bounded $U$ attains its maximum and its minimum on $\partial U$ and at no interior point.

The sources state this with different scaffolding. Evans assumes $U$ open and bounded and proves part 2 first, deducing part 1 from it. Strauss states it for a connected bounded open set in two or three dimensions, with the interior conclusion included, and proves the boundary bound of part 1 by the device below. Stakgold and Holst give the weak version for a bounded domain $\Omega$ with boundary $\Gamma$ and a continuous $u$, in the form: if $-\nabla^2 u \le 0$ in $\Omega$ then $\max u$ is on $\Gamma$, if $-\nabla^2 u \ge 0$ then $\min u$ is on $\Gamma$, and if $\nabla^2 u = 0$ then both are — so for them the harmonic case is the overlap of two one-sided principles for subsolutions and supersolutions. Ahlfors states it as Theorem 21 without a boundedness hypothesis, for a harmonic function on a plane region: if it is not constant it attains no maximum value and no minimum value at any point where it is harmonic, and the extrema over a closed bounded subset are therefore attained on that subset's boundary.
:::

:::idea{provenance=original}
There are two proofs, and they are worth having both because they need different things.

The first proves only part 1, and needs no mean value property. At an interior maximum of a $C^2$ function each second pure derivative is $\le 0$, so the Laplacian is $\le 0$ there. That nearly contradicts $\nabla^2 u = 0$, but not quite, since $\le 0$ allows $= 0$. The repair is to tilt $u$ by a small multiple of $\lvert x\rvert^2$, whose Laplacian is the positive constant $2n$: the tilted function has strictly positive Laplacian, so it has no interior maximum at all, and letting the tilt go to zero transfers the boundary bound to $u$.

The second proves part 2 from the ball form of (MV). If $u$ reaches its global maximum $M$ at an interior point, then $M$ is also the average of $u$ over a small ball around that point; but $u \le M$ there, and a function $\le M$ whose average is $M$ must equal $M$ throughout. So the set where $u = M$ swallows a whole ball around each of its points: it is open. It is also closed in $U$, being a level set of a continuous function, and connectedness then forces it to be all of $U$.
:::

:::proof[Part 1, by perturbing with $\varepsilon\lvert x\rvert^2$]{provenance=adapted src="strauss-2008:§6.1, p. 155; stakgold-holst-2011:§1.3, pp. 72–73"}
**Step 1 (no interior maximum for a strict supersolution).** Let $w \in C^2(U)$ satisfy $\nabla^2 w > 0$ at every point of $U$. If $w$ had a local maximum at $x_1 \in U$, then each function $t \mapsto w(x_1 + t e_i)$ would have a local maximum at $t = 0$, so $\partial^2 w/\partial x_i^2 (x_1) \le 0$ by the second-derivative test, for each $i$. Summing over $i$ gives $\nabla^2 w(x_1) \le 0$, contradicting the hypothesis. So $w$ has no local maximum in $U$.

**Step 2 (the tilted function).** For $\varepsilon > 0$ set $v_\varepsilon(x) = u(x) + \varepsilon\lvert x\rvert^2$. Since $\nabla^2\lvert x\rvert^2 = 2n$ and $u$ is harmonic,

$$
\nabla^2 v_\varepsilon = 0 + 2n\varepsilon > 0 \qquad\text{in } U ,
$$

so Step 1 applies to $v_\varepsilon$: it has no local maximum in the open set $U$.

**Step 3 (where the maximum is).** Here boundedness of $U$ and continuity of $u$ on $\overline U$ are used: $\overline U$ is compact and $v_\varepsilon$ is continuous on it, so $v_\varepsilon$ attains a maximum on $\overline U$. By Step 2 that maximum is not attained in $U$, hence it is attained at some point of $\partial U$.

**Step 4 (remove the tilt).** Let $L = \max_{y\in\partial U}\lvert y\rvert$, finite because $U$ is bounded. For every $x \in \overline U$,

$$
u(x) \;\le\; v_\varepsilon(x) \;\le\; \max_{\partial U} v_\varepsilon \;=\; \max_{y \in \partial U}\bigl(u(y) + \varepsilon\lvert y\rvert^2\bigr) \;\le\; \max_{\partial U} u \;+\; \varepsilon L^2 ,
$$

the first inequality because $\varepsilon\lvert x\rvert^2 \ge 0$. The left and right ends do not depend on $\varepsilon$ except through the last term, so letting $\varepsilon \to 0^+$ gives $u(x) \le \max_{\partial U} u$ for all $x \in \overline U$. Since $\partial U \subseteq \overline U$, the reverse inequality is automatic, and the two maxima are equal.

**Step 5 (the minimum).** Apply Steps 1–4 to $-u$, which is harmonic as well, and use $\min_{\partial U} u = -\max_{\partial U}(-u)$. $\square$
:::

:::proof[Part 2, from the ball mean value property]{provenance=adapted src="evans-2010:§2.2.3a, p. 26; stakgold-holst-2011:§8.3, pp. 495–496"}
**Step 1 (set-up).** Let $M = \max_{\overline U} u$, which exists because $\overline U$ is compact and $u \in C(\overline U)$, and let

$$
E = \{\, x \in U : u(x) = M \,\} ,
$$

assumed nonempty: $x_0 \in E$.

**Step 2 ($E$ is open).** Let $x \in E$ and let $r$ be any radius with $0 < r < \operatorname{dist}(x,\partial U)$, so that $B(x,r) \subseteq U$. The ball form of (MV) gives

$$
M = u(x) = \frac{1}{\lvert B(x,r)\rvert}\int_{B(x,r)} u\; dV .
$$

Hence $\int_{B(x,r)} (M - u)\, dV = 0$. The integrand is continuous and non-negative, since $M$ is the maximum of $u$ over all of $\overline U$. A continuous non-negative function with vanishing integral vanishes identically: if $M - u(y) > 0$ at some $y \in B(x,r)$, it would exceed half that value on a small ball about $y$ and the integral would be positive. So $u \equiv M$ on $B(x,r)$, and therefore $B(x,r) \subseteq E$. Thus $E$ is open.

**Step 3 ($E$ is closed in $U$).** $E = u^{-1}(\{M\}) \cap U$ and $u$ is continuous, so $E$ is the intersection of $U$ with a closed set: it is relatively closed in $U$.

**Step 4 (connectedness).** $U$ is connected, and $E$ is a nonempty subset of $U$ that is both open and relatively closed. The only such subset is $U$ itself, for otherwise $U = E \cup (U\setminus E)$ would split $U$ into two disjoint nonempty relatively open pieces. Hence $E = U$ and $u \equiv M$ on $U$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Boundedness of $U$, in Steps 3 and 4 of the first proof.* It is what makes $\overline U$ compact and $L$ finite. Both conclusions genuinely fail on an unbounded domain: on the half-plane $U = \{(x,y) : y > 0\}$ the function $u = y$ is harmonic and vanishes on $\partial U$, so $\max_{\partial U} u = 0$ while $u$ is unbounded above on $U$. Ahlfors's Theorem 21 avoids the issue by asserting only the local statement — no interior extremum — and then drawing the boundary conclusion on a *closed bounded* set.
- *Continuity on $\overline U$.* Without it there is nothing to maximize on the boundary. On the punctured disc $U = \{0 < \lvert \mathbf{x}\rvert < 1\} \subset \mathbb{R}^2$ the function $u = \log(1/\lvert\mathbf{x}\rvert)$ is harmonic in $U$ and zero on the outer boundary circle, but it has no continuous extension to the boundary point $\mathbf{0}$, and its supremum over $U$ is $+\infty$.
- *Connectedness, in Step 4 of the second proof only.* If $U$ is the union of two disjoint open balls, $u = 0$ on one and $u = 1$ on the other is harmonic on $U$, continuous on $\overline U$, and attains its maximum at every interior point of the second ball without being constant on $U$. Part 1 survives: each component has its own boundary. This is why Evans attaches connectedness to part 2 and not to part 1.
- *$u \in C^2$, in Step 1 of the first proof.* The second-derivative test needs the pure second derivatives to exist. (By Evans's smoothness theorem, a continuous function with the mean value property is automatically $C^\infty$ inside $U$, so for harmonic functions this costs nothing in the interior; see :ref[Poisson's integral formula]{to=pde.poisson-integral-formula}.)
- *Which proof proves what.* The first proof never uses the mean value property and gives only part 1; it is the one Strauss and Stakgold–Holst give, and it extends at once to subsolutions, $\nabla^2 u \ge 0$, since Step 2 only needs $\nabla^2 v_\varepsilon > 0$. The second proof uses (MV) and gives the sharper part 2 but says nothing about subsolutions directly. Strauss states the interior conclusion with the weak proof and defers the interior argument to his §6.3; Stakgold and Holst likewise prove the weak version in their §1.3 and the strong version only in §8.3, after the mean value theorem is available.
:::

:::statement[Uniqueness, comparison and stability for the Dirichlet problem]{provenance=adapted src="evans-2010:§2.2.3a, Thm 5, p. 27; strauss-2008:§6.1, pp. 155–156; stakgold-holst-2011:§1.3, pp. 73–74"}
Let $\Omega \subset \mathbb{R}^n$ be a bounded domain with boundary $\Gamma$, let $f \in C(\Omega)$ and $h \in C(\Gamma)$, and consider

$$
-\nabla^2 u = f \ \text{ in } \Omega, \qquad u = h \ \text{ on } \Gamma . \tag{D}
$$

Solutions are required to lie in $C^2(\Omega)\cap C(\overline\Omega)$.

1. **Uniqueness.** Problem (D) has at most one solution.
2. **Comparison.** If $u_1$ solves (D) with data $(f_1,h_1)$, $u_2$ solves it with data $(f_2,h_2)$, and $f_1 \ge f_2$ in $\Omega$ together with $h_1 \ge h_2$ on $\Gamma$, then $u_1 \ge u_2$ in $\Omega$.
3. **Continuous dependence on the data.** Let $v$ solve $-\nabla^2 v = 1$ in $\Omega$, $v = 0$ on $\Gamma$. Then every solution of (D) obeys
   $$
   \lVert u\rVert_\infty \;\le\; \lVert v\rVert_\infty \,\lVert f\rVert_\infty \;+\; \lVert h\rVert_{\infty,\Gamma} ,
   $$
   where $\lVert\cdot\rVert_\infty$ is the supremum over $\overline\Omega$ and $\lVert h\rVert_{\infty,\Gamma} = \sup_\Gamma\lvert h\rvert$. In particular the solution map is continuous from the supremum norm on the data to the supremum norm on the solution.

Stakgold and Holst prove 2 and 3 from the weak maximum principle alone, state 3 first for $h = 0$ (with the general case as their Exercise 1.3.2(a)), and observe that no constant smaller than $\lVert v\rVert_\infty$ works in 3, because taking $f \equiv 1$ makes it an equality. Evans states 1 for $f \in C(U)$, $g \in C(\partial U)$ and solutions in $C^2(U)\cap C(\overline U)$; Strauss states and proves 1 for the form $\nabla^2 u = f$.
:::

:::idea{provenance=original}
All three parts are the weak maximum principle applied to a difference. Subtracting two solutions of (D) kills the source and the boundary data, leaving a harmonic function with zero boundary values; the maximum principle squeezes it between $0$ and $0$. For comparison, the difference is not harmonic but a subsolution, $-\nabla^2 w \le 0$, with $w \ge 0$ on $\Gamma$, and the one-sided principle still puts its maximum on the boundary. For the bound, the function $v$ is used as a *barrier*: $\lVert f\rVert_\infty v \pm$ (the boundary bound) dominates $u$ by comparison, and evaluating the barrier gives the estimate.
:::

:::proof{provenance=adapted src="evans-2010:§2.2.3a, p. 27; strauss-2008:§6.1, pp. 155–156; stakgold-holst-2011:§1.3, pp. 73–74"}
**Step 1 (uniqueness).** Let $u_1, u_2$ both solve (D) and put $w = u_1 - u_2$. By linearity $-\nabla^2 w = f - f = 0$ in $\Omega$ and $w = h - h = 0$ on $\Gamma$, and $w \in C^2(\Omega)\cap C(\overline\Omega)$. Part 1 of the maximum principle, applied to the bounded domain $\Omega$, gives

$$
\max_{\overline\Omega} w = \max_\Gamma w = 0, \qquad \min_{\overline\Omega} w = \min_\Gamma w = 0 ,
$$

so $0 \le w \le 0$: $w \equiv 0$ and $u_1 = u_2$.

**Step 2 (a one-sided principle for subsolutions).** Let $w \in C^2(\Omega)\cap C(\overline\Omega)$ satisfy $-\nabla^2 w \le 0$ in $\Omega$, that is $\nabla^2 w \ge 0$. The proof of part 1 of the maximum principle goes through unchanged: $v_\varepsilon = w + \varepsilon\lvert x\rvert^2$ has $\nabla^2 v_\varepsilon \ge 2n\varepsilon > 0$, so Steps 1–4 there give $\max_{\overline\Omega} w = \max_\Gamma w$. (Only the upper bound survives; a subsolution may well take its minimum inside.)

**Step 3 (comparison).** Put $w = u_1 - u_2$. Then $-\nabla^2 w = f_1 - f_2 \ge 0$ in $\Omega$. Careful with the sign: this says $\nabla^2 w \le 0$, so it is $-w$ that is a subsolution in the sense of Step 2. Applying Step 2 to $-w$,

$$
\max_{\overline\Omega}(-w) = \max_\Gamma (-w) = \max_\Gamma (h_2 - h_1) \le 0 ,
$$

because $h_1 \ge h_2$ on $\Gamma$. Hence $-w \le 0$, i.e. $u_1 \ge u_2$ throughout $\overline\Omega$.

**Step 4 (the barrier).** Let $u$ solve (D), set $F = \lVert f\rVert_\infty$ and $H = \lVert h\rVert_{\infty,\Gamma}$, and let $v$ be as in part 3. Consider

$$
w_\pm = F\,v \pm u + H .
$$

Then $-\nabla^2 w_\pm = F \pm f$ in $\Omega$, which is $\ge 0$ since $\lvert f\rvert \le F$; and on $\Gamma$, $w_\pm = 0 \pm h + H \ge 0$ since $\lvert h\rvert \le H$. So $w_\pm$ is a nonnegative-data supersolution, and comparison against the zero solution — Step 3 with $(f_2,h_2) = (0,0)$, $u_2 \equiv 0$ — gives $w_\pm \ge 0$ in $\Omega$. Reading the two signs,

$$
-\,F v - H \;\le\; u \;\le\; F v + H \qquad\text{in } \overline\Omega .
$$

**Step 5 (evaluate).** Note that $v \ge 0$ by Step 3 (its data $1 \ge 0$ and $0 \ge 0$ dominate the zero data), so $\lvert F v + H\rvert \le F\lVert v\rVert_\infty + H$. Taking the supremum of Step 4 over $\overline\Omega$,

$$
\lVert u\rVert_\infty \;\le\; \lVert v\rVert_\infty\,\lVert f\rVert_\infty + \lVert h\rVert_{\infty,\Gamma} ,
$$

which is part 3. If two data sets $(f_1,h_1)$ and $(f_2,h_2)$ are given, applying this to the difference of the solutions — which solves (D) with data $(f_1-f_2, h_1-h_2)$ — bounds $\lVert u_1-u_2\rVert_\infty$ by $\lVert v\rVert_\infty\lVert f_1-f_2\rVert_\infty + \lVert h_1-h_2\rVert_{\infty,\Gamma}$: the solution depends continuously on the data. $\square$
:::

:::remark{provenance=original}
Uniqueness has two independent proofs in this handbook, and they assume different things. The one above uses the maximum principle and needs only $u \in C^2(\Omega)\cap C(\overline\Omega)$, with no regularity of $\Gamma$ and no derivatives of $u$ on the boundary. The energy proof in :ref[Green's identities]{to=vcalc.green-identities} puts $v = u$ in Green's first identity and needs $u \in C^2(\overline\Omega)$ and a piecewise $C^1$ boundary, because it integrates by parts; in exchange it handles the Neumann and Robin conditions, which the maximum principle does not. Strauss gives both, the maximum-principle proof in his §6.1 and the energy proof in his §7.1; Stakgold and Holst give both as well, in their §1.3 and §8.3.
:::

:::example[The mean value property tested in two and three dimensions]{provenance=original}
**(a) A plane polynomial.** The function

$$
u(x,y) = x^3 - 3xy^2
$$

is harmonic on $\mathbb{R}^2$: $u_{xx} = 6x$ and $u_{yy} = -6x$. (It is $\operatorname{Re}(x+iy)^3$, so harmonicity is also Strauss's third example.) Take the centre $(x_0,y_0) = (1,2)$, where $u = 1 - 3\cdot 1\cdot 4 = -11$. Parametrize the circle of radius $r$ about it by $(1 + r\cos\theta,\; 2 + r\sin\theta)$ and expand:

$$
\frac{1}{2\pi}\int_0^{2\pi} u\,d\theta = \frac{1}{2\pi}\int_0^{2\pi}\Bigl[(1+r\cos\theta)^3 - 3(1+r\cos\theta)(2+r\sin\theta)^2\Bigr] d\theta .
$$

Every term with an odd total power of $\cos\theta$ or $\sin\theta$ averages to zero, and $\langle\cos^2\theta\rangle = \langle\sin^2\theta\rangle = \tfrac12$, $\langle\cos\theta\sin\theta\rangle = 0$. The surviving terms are

$$
1 + 3\cdot 1\cdot r^2\langle\cos^2\theta\rangle \;-\;3\bigl[\,1\cdot 4 + 1\cdot r^2\langle\sin^2\theta\rangle + 0\,\bigr]
= 1 + \tfrac32 r^2 - 12 - \tfrac32 r^2 = -11 ,
$$

independent of $r$, as (MV) requires. The two $r^2$ terms cancel because $u_{xx} + u_{yy} = 0$: indeed for any $C^2$ function the $O(r^2)$ term of the circular average is $\tfrac14 r^2\,\nabla^2u(x_0,y_0)$, which is the two-dimensional case of (3). Numerically the average is $-11.000000$ for $r = 0.5$, $1$ and $3$, and the average over the solid disc of radius $2$ is also $-11.000000$.

**(b) Newton's theorem in three dimensions.** Let $\mathbf{a} = (0,0,2)$ and

$$
u(\mathbf{x}) = \frac{1}{\lvert\mathbf{x}-\mathbf{a}\rvert} ,
$$

the Coulomb potential of a unit point source at $\mathbf{a}$. It is harmonic on $\mathbb{R}^3\setminus\{\mathbf{a}\}$ (see :ref[the fundamental solution]{to=pde.laplace-fundamental-solution}), hence on a neighbourhood of the closed unit ball, which does not contain $\mathbf{a}$. So (MV) applies with $x = \mathbf{0}$, $r = 1$ and predicts that the average of $u$ over the unit sphere is $u(\mathbf{0}) = 1/\lvert\mathbf{a}\rvert = \tfrac12$. Checking directly, with $\theta$ the angle from the $z$-axis and $dS = \sin\theta\,d\theta\,d\varphi$ on the unit sphere,

$$
\frac{1}{4\pi}\oint_{\partial B(0,1)}\frac{dS}{\lvert\mathbf{x}-\mathbf{a}\rvert}
= \frac12\int_0^\pi \frac{\sin\theta\, d\theta}{\sqrt{1 + 4 - 4\cos\theta}}
= \frac12\int_{-1}^{1}\frac{dt}{\sqrt{5-4t}}
= \frac12\left[-\tfrac12\sqrt{5-4t}\right]_{-1}^{1}
= \frac12\cdot\frac{3-1}{2} = \frac12 ,
$$

using $t = \cos\theta$. This is Newton's theorem: a sphere of uniform surface density attracts an external point exactly as if its mass were concentrated at its centre, read here in the reciprocal direction. Note that the mean value property says nothing when the singularity is *inside* the sphere, and indeed for $\lvert\mathbf{a}\rvert < 1$ the same integral gives $1$, not $1/\lvert\mathbf{a}\rvert$.
:::

:::example[The stability constant for the unit disc is sharp]{provenance=original}
Take $\Omega$ to be the unit disc in $\mathbb{R}^2$ and compute the barrier $v$ of part 3 explicitly. We need $-\nabla^2 v = 1$ with $v = 0$ on $r = 1$. Looking for a radial solution and using $\nabla^2 v = v'' + v'/r$ for radial functions in the plane,

$$
v(r) = \frac{1 - r^2}{4} \quad\Longrightarrow\quad v'' + \frac{v'}{r} = -\frac12 - \frac12 = -1 ,
$$

and $v(1) = 0$. So $\lVert v\rVert_\infty = v(0) = \tfrac14$, and part 3 reads

$$
\lVert u\rVert_\infty \;\le\; \tfrac14\lVert f\rVert_\infty + \lVert h\rVert_{\infty,\Gamma}
$$

for every solution of $-\nabla^2 u = f$ in the unit disc with $u = h$ on its boundary.

*The constant $\tfrac14$ cannot be reduced.* Take $f \equiv 8$ and $h \equiv 0$. Then $u = 2(1-r^2)$ solves the problem, since $\nabla^2 u = -8$ and $u(1) = 0$, and $\lVert u\rVert_\infty = u(0) = 2$, while the bound gives $\tfrac14\cdot 8 + 0 = 2$ exactly. This is the sharpness remark of Stakgold and Holst, which they make for $f \equiv 1$.

*A case with both terms active.* Take $f \equiv 8$ and $h = 3\cos\theta$ on the boundary circle, i.e. $h = 3x$. Since $3x$ is harmonic and equals $3\cos\theta$ on $r=1$, the solution is

$$
u = 2(1-r^2) + 3x ,
$$

whose supremum over the closed disc is attained where $2(1-x^2-y^2)+3x$ is largest: setting the gradient to zero gives $y = 0$ and $-4x + 3 = 0$, so $x = \tfrac34$ and $\lVert u\rVert_\infty = 2(1 - \tfrac9{16}) + \tfrac94 = \tfrac78 + \tfrac94 = \tfrac{25}{8} = 3.125$. The bound gives $\tfrac14\cdot 8 + 3 = 5$. The estimate holds with room to spare, as it must: the two extreme cases that make each term sharp cannot be arranged at the same place.
:::

:::application{provenance=original}
**Electrostatics and the shielding of fields.** Strauss's first example is Maxwell's equations in a charge-free region: $\nabla\times\mathbf{E} = 0$ gives $\mathbf{E} = -\nabla\phi$, and $\nabla\cdot\mathbf{E} = 4\pi\rho$ (Gaussian units) then gives $\nabla^2\phi = -4\pi\rho$, so the potential is harmonic wherever the charge density vanishes. The maximum principle is then a physical statement with teeth: inside a charge-free cavity the potential can have no interior maximum or minimum, so a charged particle cannot sit in stable electrostatic equilibrium in free space. That is Earnshaw's theorem, and it is why electrostatic traps for ions must be time-dependent. The same argument shows that a conductor held at a single potential encloses a cavity at exactly that potential — a Faraday cage — since the boundary data are constant and uniqueness forces the constant solution.

**Steady flow and steady temperature.** For an incompressible irrotational flow, Strauss's second example, the velocity potential is harmonic, and the maximum principle says the extremes of the potential sit on the boundary. For steady heat conduction with no sources the temperature is harmonic, and the weak maximum principle says that the hottest and coldest points of a body in steady state are on its surface: a result that is obvious physically and would be hard to prove without it. The comparison principle is the formal version of the statement that raising the temperature anywhere on the boundary, or adding heat anywhere inside, raises the temperature everywhere.

**Error control for numerical solvers.** Part 3 of the uniqueness statement is what makes a discretized Poisson solver trustworthy. Five-point finite-difference and piecewise-linear finite-element discretizations of $-\nabla^2$ satisfy a discrete maximum principle, and the discrete analogue of the barrier estimate — with $\lVert v\rVert_\infty = \tfrac14$ on the unit disc, as computed above — converts a bound on the residual $f$ into a bound on the error in the computed solution, in the supremum norm and with no reference to derivatives of the exact solution. The mean value property is the statement that the exact solution is the fixed point of the averaging operator, which is precisely what the five-point stencil discretizes; Strauss's fourth example makes the probabilistic version of this explicit, with $u$ the probability that a Brownian particle started at a point leaves the region through a chosen piece of its boundary, and that interpretation is the basis of Monte Carlo (walk-on-spheres) solvers for the Dirichlet problem.

**Harmonic functions as the real parts of analytic functions.** In the plane, Strauss's and Ahlfors's third setting, an analytic function splits into a harmonic real part and a harmonic imaginary part, so the maximum principle for harmonic functions and the maximum modulus principle for analytic functions are the same theorem seen twice. Ahlfors notes the direction that is less often used: the maximum principle for an analytic $f$ with no zeros follows from the harmonic one applied to $\log\lvert f\rvert$.
:::
