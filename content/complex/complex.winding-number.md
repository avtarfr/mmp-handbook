---
id: complex.winding-number
title: The winding number
kind: definition
level: core
summary: The index of a closed curve about a point is the integral of $dz/(z-a)$ divided by $2\pi i$; it is an integer, constant on each complementary region and zero far away, unchanged by continuous deformation, and it is the weight with which each point enters the general form of Cauchy's theorem.
prereqs: [complex.contour-integrals, found.connectedness-homotopy]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §2.1, Lemma 1, the definition of $n(\\gamma,a)$ and properties (i)-(ii), pp. 114-116; §4.1 chains and cycles, pp. 137-138; §4.2 Thm 14 and §4.3 Definition 2, pp. 139-141; §4.4 Thm 15 and Corollary 1 (the general Cauchy theorem), p. 141"
    pages: "114-116, 137-141"
    role: integrality of the index and its proof; local constancy and vanishing at infinity; cycles; homology; the general statement of Cauchy's theorem
  - work: ahlfors-1979
    loc: "Ch. 8, §1.5, Definition 2 (homotopy of arcs) and the discussion of homotopy classes, pp. 291-293"
    pages: "291-293"
    role: the definition of homotopy used in the invariance statement
---

:::note{provenance=original}
**What it means.** "The contour encircles the pole twice" is an intuitive statement that has to be made into a number before it can appear in a theorem. The number is the winding number, and it is nothing but the integral $\oint dz/(z-a)$ in disguise. Its three properties do all the work: it is always an integer, it only changes when the point crosses the curve, and it is blind to continuous deformations of the curve that avoid the point. Those properties are what turn Cauchy's theorem from a statement about discs into a statement about arbitrary regions and arbitrary closed curves.
:::

:::definition[Chains and cycles]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.1, pp. 137-138"}
A **chain** in an open set $\Omega$ is a formal integer combination $\gamma = \sum_j m_j \gamma_j$ of piecewise differentiable arcs $\gamma_j$ in $\Omega$, with the integral defined additively:

$$
\oint_{\gamma} f(z)\, dz \;=\; \sum_j m_j \int_{\gamma_j} f(z)\, dz .
$$

Two chains are regarded as the same when they give the same integral for every $f$; permuting, subdividing, fusing and reparametrising arcs, and cancelling an arc against its reverse, all leave a chain unchanged. A chain is a **cycle** if it can be written as a sum of closed curves, which happens exactly when in any representation the initial and terminal points of the constituent arcs match up in pairs.
:::

:::definition[Index of a point with respect to a cycle]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.1, p. 115"}
Take a point $a$ and a cycle $\gamma$ that avoids it. Then the number

$$
n(\gamma, a) \;=\; \frac{1}{2\pi i}\oint_{\gamma} \frac{dz}{z - a}
$$

is called the **index** of $a$ relative to $\gamma$, or its **winding number**. Two immediate consequences of the additivity of contour integrals: running the cycle backwards flips the sign, $n(-\gamma,a) = -n(\gamma,a)$, and the index adds over cycles, $n(\gamma_1+\gamma_2,a) = n(\gamma_1,a)+n(\gamma_2,a)$.
:::

:::statement[Basic properties of the index]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.1, Lemma 1 and properties (i)-(ii), pp. 115-116"}
Let $\gamma$ be a cycle and $a \notin \gamma$.

1. **Integrality.** $n(\gamma,a) \in \mathbb{Z}$.
2. **Local constancy.** As a function of $a$, the index is constant on each connected component of the complement $\mathbb{C}\setminus\gamma$.
3. **Vanishing at infinity.** The complement has exactly one unbounded component, and $n(\gamma, a) = 0$ there; in particular $n(\gamma,a) = 0$ whenever $\gamma$ lies inside a circle and $a$ lies outside it.
4. **Multiplicativity.** If $\gamma$ is a closed curve $t \mapsto \gamma(t)$ which is a pointwise product $\gamma(t) = u(t) v(t)$ of two closed curves avoiding $0$, then $n(\gamma, 0) = n(u,0) + n(v,0)$.
:::

:::statement[Homotopy invariance]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.5, Definition 2, p. 292; ahlfors-1979:Ch. 4, §2.1, property (ii), p. 116"}
Let $a \in \mathbb{C}$ and let $\gamma_0, \gamma_1 : [0,1] \to \mathbb{C}\setminus\{a\}$ be closed, piecewise differentiable curves that are homotopic in $\mathbb{C}\setminus\{a\}$ through closed curves: that is, there is a continuous $H : [0,1]\times[0,1] \to \mathbb{C}\setminus\{a\}$ with $H(t,0) = \gamma_0(t)$, $H(t,1) = \gamma_1(t)$ and $H(0,u) = H(1,u)$ for all $u$ (:ref[]{to=found.connectedness-homotopy}). Then

$$
n(\gamma_0, a) \;=\; n(\gamma_1, a) .
$$

In particular a closed curve that can be contracted to a point within $\mathbb{C}\setminus\{a\}$ has index $0$ about $a$.
:::

:::definition[Simple connectivity and homology]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.2, Definition 1 and Thm 14, pp. 139-140; ahlfors-1979:Ch. 4, §4.3, Definition 2, p. 141"}
Call a region $\Omega$ **simply connected** when the set $(\mathbb{C}\cup\{\infty\})\setminus\Omega$ -- the complement taken in the extended plane, so that the point at infinity is included -- is a connected set. Ahlfors's Thm 14 shows this is the same as requiring $n(\gamma, a) = 0$ for every cycle $\gamma$ in $\Omega$ and every $a \notin \Omega$.

A cycle $\gamma$ in an open set $\Omega$ is **homologous to zero** in $\Omega$, written $\gamma \sim 0 \pmod \Omega$, if

$$
n(\gamma, a) = 0 \qquad\text{for every } a \in \mathbb{C}\setminus\Omega .
$$

Write $\gamma_1 \sim \gamma_2$ for $\gamma_1 - \gamma_2 \sim 0$. Homologies may be added and subtracted, and $\gamma \sim 0 \pmod\Omega$ implies $\gamma \sim 0 \pmod{\Omega'}$ for every larger open set $\Omega' \supseteq \Omega$.

**A warning on terminology.** The definition adopted here is not the standard one, as Ahlfors himself points out (p. 139). Most texts define simple connectivity by contractibility of closed curves. For plane regions the two conditions agree; the version used here is restricted to two real dimensions, but it reaches the integration theorems with less work, which is why Ahlfors prefers it and why we follow him.
:::

:::statement[The general (homology) form of Cauchy's theorem]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.4, Thm 15 and Corollary 1, p. 141; ahlfors-1979:Ch. 4, §5.1, p. 149"}
Let $f$ be analytic on an open set $\Omega$.

1. **Cauchy's theorem.** If $\gamma$ is a cycle in $\Omega$ with $\gamma \sim 0 \pmod\Omega$, then
   $$
   \oint_{\gamma} f(z)\, dz \;=\; 0 .
   $$
2. **Corollary.** If $\Omega$ is simply connected, this holds for *every* cycle $\gamma$ in $\Omega$; equivalently, every analytic function on a simply connected region has a single-valued analytic antiderivative there.
3. **Cauchy's integral formula.** If $\gamma \sim 0 \pmod \Omega$ and $a \in \Omega$ is not on $\gamma$, then
   $$
   n(\gamma, a)\, f(a) \;=\; \frac{1}{2\pi i}\oint_{\gamma}\frac{f(z)}{z-a}\, dz .
   $$
:::

:::idea{provenance=original}
Integrality is the only point needing a real argument, and the argument is a trick: instead of trying to define $\arg(z-a)$ continuously along the curve, integrate first and exponentiate afterwards. Let $h(t)$ be the partial integral up to time $t$. Differentiating $e^{-h(t)}(\gamma(t) - a)$ gives zero, so this quantity is constant along the curve; since the curve closes, $e^{h(1)} = 1$, which says exactly that $h(1)$ is an integer multiple of $2\pi i$.

Local constancy is a one-line application of Cauchy's theorem to the function $(z-a)^{-1} - (z-b)^{-1}$, which has the single-valued antiderivative $\log\frac{z-a}{z-b}$ off the segment joining $a$ to $b$. Vanishing at infinity then follows by pushing $a$ out beyond a circle containing $\gamma$ and using the $M L$ estimate.

Homotopy invariance combines the two: a continuous deformation moves the index continuously, and an integer-valued continuous function of a real parameter is constant.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 4, §2.1, pp. 115-116"}
It is enough to prove parts 1-3 for a single closed curve, since both sides of each assertion are additive in the cycle. Let $\gamma : [0,1]\to\mathbb{C}$ be closed and piecewise differentiable with $\gamma(t) \ne a$ for all $t$.

**Part 1: integrality.** Define

$$
h(t) \;=\; \int_0^{t} \frac{\gamma'(s)}{\gamma(s) - a}\, ds ,
\qquad t\in[0,1] ,
$$

which is continuous on $[0,1]$ and satisfies $h'(t) = \gamma'(t)/(\gamma(t)-a)$ wherever $\gamma'$ is continuous, i.e. off a finite set. Consider

$$
\Phi(t) \;=\; e^{-h(t)}\bigl(\gamma(t) - a\bigr) .
$$

Away from that finite set,

$$
\Phi'(t) \;=\; e^{-h(t)}\Bigl( \gamma'(t) - h'(t)\bigl(\gamma(t)-a\bigr)\Bigr) \;=\; 0 ,
$$

by the formula for $h'$. Since $\Phi$ is continuous on $[0,1]$ and has vanishing derivative off finitely many points, it is constant. Hence

$$
e^{h(t)} \;=\; \frac{\gamma(t) - a}{\gamma(0) - a} ,
$$

using $h(0) = 0$. The curve is closed, $\gamma(1) = \gamma(0)$, so $e^{h(1)} = 1$ and therefore $h(1) \in 2\pi i\,\mathbb{Z}$. As $n(\gamma,a) = h(1)/2\pi i$, the index is an integer. (The naive argument -- that $\log\lvert z - a\rvert$ returns to its value and $\arg(z-a)$ changes by a multiple of $2\pi$ -- is not a proof until $\arg(z-a)$ has been given a single-valued meaning along $\gamma$, which is the difficulty this computation avoids.)

**Part 2: local constancy.** Any two points of the same component of $\mathbb{C}\setminus\gamma$ can be joined by a polygonal path missing $\gamma$, so it suffices to show $n(\gamma,a) = n(\gamma,b)$ whenever the straight segment $[a,b]$ does not meet $\gamma$. Off that segment the quotient $(z-a)/(z-b)$ is never zero and never a negative real number: if it were $\le 0$ then $z$ would lie on the segment between $a$ and $b$. Hence the principal branch of $\log\frac{z-a}{z-b}$ is single-valued and analytic on $\mathbb{C}\setminus[a,b]$, with derivative

$$
\frac{d}{dz}\log\frac{z-a}{z-b} \;=\; \frac{1}{z-a} - \frac{1}{z-b} .
$$

Since $\gamma$ is a closed curve in $\mathbb{C}\setminus[a,b]$ and the integrand is an exact differential there, the fundamental theorem for contour integrals (:ref[]{to=complex.contour-integrals}) gives

$$
\oint_\gamma\left(\frac{1}{z-a} - \frac{1}{z-b}\right) dz \;=\; 0 ,
$$

that is $n(\gamma,a) = n(\gamma,b)$.

**Part 3: vanishing at infinity.** As a point set $\gamma$ is compact, so it lies in some disc $\lvert z\rvert < \rho$; the set $\lvert z \rvert > \rho$ is connected and lies in the complement, so the complement has exactly one unbounded component. For $\lvert a\rvert > \rho$ the $ML$ estimate (:ref[]{to=complex.contour-integrals}) gives

$$
\lvert n(\gamma,a)\rvert \;\le\; \frac{1}{2\pi}\cdot\frac{L(\gamma)}{\lvert a\rvert - \rho} \;\xrightarrow[\ \lvert a\rvert\to\infty\ ]{}\; 0 ,
$$

where $L(\gamma)$ is the length of $\gamma$. An integer of modulus less than $1$ is $0$, so $n(\gamma,a) = 0$ for all sufficiently large $\lvert a \rvert$; by part 2 it is then $0$ throughout the unbounded component.

**Part 4: multiplicativity.** With $\gamma = uv$ pointwise, $\gamma' = u'v + uv'$ off finitely many points, so

$$
\frac{\gamma'}{\gamma} \;=\; \frac{u'v + uv'}{uv} \;=\; \frac{u'}{u} + \frac{v'}{v} ,
$$

and integrating over $[0,1]$ and dividing by $2\pi i$ gives $n(\gamma,0) = n(u,0)+n(v,0)$. $\square$
:::

:::proof[Homotopy invariance]{provenance=original}
Let $H$ be the homotopy of the statement. We first reduce to a uniform estimate. The image $K = H([0,1]^2)$ is compact and avoids $a$, so

$$
\epsilon \;=\; \min_{(t,u)} \lvert H(t,u) - a\rvert \;>\; 0 ,
$$

and $H$ is uniformly continuous, so there is $\eta > 0$ with $\lvert H(t,u) - H(t,u')\rvert < \epsilon/2$ whenever $\lvert u - u'\rvert < \eta$.

**Step 1: a comparison lemma.** *If $\sigma$ and $\tau$ are closed piecewise differentiable curves with $\lvert \sigma(t) - a\rvert \ge \delta$ and $\lvert \sigma(t) - \tau(t)\rvert < \delta$ for all $t$ and some $\delta>0$, then $n(\sigma,a) = n(\tau,a)$.*

Both curves avoid $a$, since $\lvert \tau - a\rvert \ge \lvert\sigma-a\rvert - \lvert\sigma-\tau\rvert > 0$. Put $w(t) = (\tau(t)-a)/(\sigma(t)-a)$, a closed piecewise differentiable curve. Then

$$
\lvert w(t) - 1\rvert \;=\; \frac{\lvert \tau(t)-\sigma(t)\rvert}{\lvert \sigma(t) - a\rvert} \;<\; \frac{\delta}{\delta} \;=\; 1 ,
$$

so $w$ lies in the open disc $\lvert w - 1\rvert < 1$, which does not contain $0$. Since the complement of that disc is connected and unbounded, $0$ lies in the unbounded component of $\mathbb{C}\setminus w$, so $n(w,0) = 0$ by part 3 of the basic properties. Writing $\tau(t)-a = \bigl(\sigma(t)-a\bigr)w(t)$ and applying multiplicativity (part 4) to the translated curves,

$$
n(\tau, a) \;=\; n(\sigma, a) + n(w, 0) \;=\; n(\sigma, a) .
$$

**Step 2: polygonal approximants.** The intermediate curves $H(\cdot,u)$ need not be piecewise differentiable, so replace each by a polygon. By uniform continuity of $H$ on the compact square, choose $N \in \mathbb{N}$ with

$$
\lvert H(t,u) - H(t',u)\rvert < \epsilon/16 \quad\text{whenever } \lvert t - t'\rvert \le 1/N ,
$$

and let $P_u$ be the closed polygon that passes through $H(k/N, u)$ for $k = 0,\dots,N$, parametrised affinely on each $[k/N, (k+1)/N]$. It is closed because $H(0,u) = H(1,u)$. For $t$ in that subinterval, $P_u(t)$ lies on the segment joining two points at distance less than $\epsilon/16$, hence within $\epsilon/16$ of $H(k/N,u)$, so

$$
\lvert P_u(t) - H(t,u)\rvert \;<\; \tfrac{\epsilon}{16} + \tfrac{\epsilon}{16} \;=\; \tfrac{\epsilon}{8} ,
\qquad\text{and therefore}\qquad
\lvert P_u(t) - a\rvert \;\ge\; \epsilon - \tfrac{\epsilon}{8} \;>\; \tfrac{\epsilon}{2} .
$$

**Step 3: step through the deformation.** By uniform continuity again, choose $m$ with $\lvert H(t,u) - H(t,u')\rvert < \epsilon/4$ whenever $\lvert u - u'\rvert \le 1/m$, and put $u_i = i/m$. For consecutive $i$,

$$
\lvert P_{u_i}(t) - P_{u_{i+1}}(t)\rvert
\;\le\; \tfrac{\epsilon}{8} + \lvert H(t,u_i) - H(t,u_{i+1})\rvert + \tfrac{\epsilon}{8}
\;<\; \tfrac{\epsilon}{8}+\tfrac{\epsilon}{4}+\tfrac{\epsilon}{8} \;=\; \tfrac{\epsilon}{2} .
$$

Step 1 with $\delta = \epsilon/2$ therefore gives $n(P_{u_i}, a) = n(P_{u_{i+1}},a)$ for every $i$, so all the $P_{u_i}$ have the same index.

**Step 4: the two ends.** Since $\lvert \gamma_0(t) - P_{u_0}(t)\rvert = \lvert H(t,0) - P_{0}(t)\rvert < \epsilon/8 < \epsilon/2$ and $\lvert \gamma_0(t)-a\rvert \ge \epsilon > \epsilon/2$, Step 1 gives $n(\gamma_0,a) = n(P_{u_0},a)$; likewise $n(\gamma_1,a) = n(P_{u_m},a)$. Combining with Step 3, $n(\gamma_0,a) = n(\gamma_1,a)$.

For the last sentence of the statement: a curve contractible in $\mathbb{C}\setminus\{a\}$ is homotopic there to a constant curve, whose index is $0$ because the integrand integrates over a degenerate path. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$a \notin \gamma$ is indispensable.** If $a$ lies on the curve the integral diverges and no index is defined. This is why the residue theorem requires the contour to miss the singularities, and why a pole on the contour must be handled separately (:ref[]{to=complex.principal-value-integrals}).
- **"Through closed curves" in the homotopy.** The deformation must keep the curve closed at every stage; otherwise the index can change. A homotopy of *arcs* with fixed endpoints is a different notion and does not apply to a cycle.
- **The homotopy must avoid $a$.** Deforming the unit circle to a point *through* the origin changes its index about $0$ from $1$ to $0$. Step 1 fails precisely because $\epsilon = 0$.
- **Homology is weaker than homotopy.** A cycle homologous to zero need not be null-homotopic. In the twice-punctured plane $\Omega = \mathbb{C}\setminus\{0,1\}$ the commutator cycle built from a loop around $0$ and a loop around $1$ has index $0$ about both punctures, so it is homologous to zero and Cauchy's theorem applies to it; it is not contractible in $\Omega$. This is why the integration theorems are stated with homology, which is exactly what they need: Ahlfors credits the observation to Emil Artin.
- **Simple connectivity is about the complement in the *extended* plane.** Ahlfors stresses this (p. 139): a parallel strip is simply connected, although its complement in the finite plane is disconnected, while the exterior of a circle is not, because its complement consists of a closed disc and the separate point $\infty$.
:::

:::example[Computing an index three ways]{provenance=original}
**(a) A clockwise ellipse.** Let $\gamma(t) = e^{it} + 2e^{-it}$ for $t \in [0,2\pi]$. Writing it in real terms, $\gamma(t) = 3\cos t - i\sin t$, so the image is the ellipse $(x/3)^2 + y^2 = 1$ traversed *clockwise* (at $t=0$ it is at $3$, and a moment later the imaginary part is negative). Hence $n(\gamma, a) = -1$ for every $a$ inside the ellipse and $0$ outside. Direct numerical integration confirms this: $n(\gamma,0) = -1.000000$, $n(\gamma,2) = -1.000000$ (the point $2$ is inside, since $(2/3)^2 < 1$), and $n(\gamma,4) = 0$ to twelve digits. The lesson is that the sign of the index is not decided by the sign in the exponent $e^{+it}$: the dominant term is $2e^{-it}$.

**(b) A doubly wound curve, by factorisation.** Let $\sigma(t) = e^{2it} + \tfrac12 e^{-it}$. Factor

$$
\sigma(t) \;=\; e^{2it}\Bigl(1 + \tfrac12 e^{-3it}\Bigr) \;=\; u(t)\,v(t),
\qquad u(t) = e^{2it},\quad v(t) = 1 + \tfrac12 e^{-3it} .
$$

Both factors are closed curves avoiding $0$: $\lvert v(t) - 1\rvert = \tfrac12$, so $v$ lies on a circle of radius $\tfrac12$ about $1$ and $0$ is in the unbounded component of its complement, giving $n(v,0) = 0$; and $n(u,0) = 2$ because $\oint u'/u\,dt = \int_0^{2\pi} 2i\,dt = 4\pi i$. By multiplicativity, $n(\sigma,0) = 2 + 0 = 2$. Numerically, $2.0000000$. For the point $a = 2$: $\lvert \sigma(t)\rvert \le 1 + \tfrac12 = \tfrac32 < 2$, so $2$ lies in the unbounded component of the complement and $n(\sigma,2) = 0$, again confirmed numerically.

**(c) A contour integral read backwards.** Take for $\gamma$ the positively oriented perimeter of the square whose four corners are $\pm 2 \pm 2i$, and put $a = 1 + i$. Rather than integrate, deform: $\gamma$ is homotopic in $\mathbb{C}\setminus\{a\}$ to the circle $\lvert z - a\rvert = 1/2$ traversed once counterclockwise, by the straight-line homotopy from the square to that circle, which stays in the region between them and so avoids $a$. Hence $n(\gamma, a) = 1$ by homotopy invariance, and

$$
\oint_{\gamma}\frac{e^{z}}{z - (1+i)}\,dz \;=\; 2\pi i\, e^{1+i}
$$

by the integral formula in part 3 above. Numerically $e^{1+i} = 1.4686939399 + 2.2873552872\,i$, so the right-hand side is $-14.3718771327 + 9.2280761840\,i$; integrating along the four sides of the square numerically returns the same ten digits.
:::

:::application[Topological charge and the Nyquist criterion]{provenance=original}
- **Vortices and topological charge.** In a superfluid, a superconductor or a liquid crystal, the order parameter is a complex field $\psi$. Around a closed loop on which $\psi \ne 0$, the phase must return to itself up to a multiple of $2\pi$, and the integer
  $$
  \frac{1}{2\pi i}\oint_{\mathcal{C}} \frac{\nabla\psi\cdot d\boldsymbol{\ell}}{\psi}
  $$
  is the winding number of the image curve about the origin: the **topological charge** of the vortices enclosed. Integrality is why circulation in a superfluid is quantised, and homotopy invariance is why the charge cannot change under any continuous evolution of the field that keeps $\psi \ne 0$ on the loop. A vortex can only be destroyed by letting $\psi$ pass through zero -- exactly the forbidden deformation of the remark above.
- **The Nyquist stability criterion.** For a feedback loop with open-loop transfer function $G(s)$, closed-loop stability is governed by the zeros of $1 + G(s)$ in the right half-plane. Taking $\gamma$ to be a large contour enclosing that half-plane, the number of encirclements of the point $-1$ by the image curve $G(\gamma)$ -- which is a winding number -- together with the known number of right-half-plane poles of $G$, decides stability (:ref[]{to=complex.argument-principle-rouche}). The engineering practice of "counting how many times the Nyquist plot encircles $-1$" is a computation of $n(G\circ\gamma, -1)$, and its robustness under small modelling errors is homotopy invariance.
- **Degree and root counting.** The winding number of $p(\gamma)$ about $0$, for $\gamma$ a large circle and $p$ a polynomial, equals $\deg p$; this is one route to the fundamental theorem of algebra and the basis of numerical algorithms that count roots in a prescribed region by integrating $p'/p$ along its boundary.
:::
