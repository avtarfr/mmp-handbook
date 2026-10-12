---
id: pde.wave-three-dimensions
title: The wave equation in three dimensions
kind: theorem
level: core
summary: Shows that the spherical means of a solution of the wave equation satisfy the Euler-Poisson-Darboux equation, turns that into a half-line problem in one dimension to derive Kirchhoff's formula for the Cauchy problem in three dimensions, reads off Huygens' principle, and descends to the two-dimensional Poisson formula, where Huygens' principle fails.
prereqs: [pde.dalembert, vcalc.divergence-theorem, vcalc.surface-integrals, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§9.2, the solution formula Eq. (3), p. 234, and its proof by spherical means, Eq. (4)–(14), pp. 235–238 (including the divergence-theorem derivation of Eq. (5) and the substitution $v=r\\bar u$); Huygens's principle and its consequences, p. 235; 'Solution in two dimensions', Eq. (15)–(19), pp. 238–239, and the failure of Huygens's principle with the $t^{-1}$ decay of the ripples; p. 240, Huygens's principle holding only in odd dimensions $\\ge 3$; §2.2, p. 41, the sharper form of causality in three dimensions"
    pages: "41, 234-240"
    role: Kirchhoff's formula with the wave speed $c$; the spherical-means proof route and the divergence-theorem derivation of the radial equation; Huygens's principle; the method of descent and Poisson's two-dimensional formula; the dimensions in which Huygens's principle holds
  - work: evans-2010
    loc: "§2.4.1b, the spherical means Eq. (12)–(13) and Lemma 1 (Euler–Poisson–Darboux equation) Eq. (14) with its proof, pp. 67–68; §2.4.1c, 'Solution for n=3', Eq. (17)–(22) (Kirchhoff's formula), p. 69, and 'Solution for n=2', Eq. (23)–(27) (Poisson's formula by the method of descent), pp. 70–71; Theorem 2 (Solution of wave equation in odd dimensions), with $g\\in C^{m+1}$, $h \\in C^m$ and $m=(n+1)/2$, and Remarks (i)–(iii), pp. 73–74; §2.4.1e, 'Solution for even n', p. 75, where the descent from $n+1$ requires $m=(n+2)/2$ instead"
    pages: "67-75"
    role: the notation and definition of spherical means; the statement of the Euler–Poisson–Darboux equation; the expanded form of Kirchhoff's formula; the smoothness hypotheses under which the formula is a solution; the loss-of-derivatives remark; the descent computation in two dimensions
  - work: stein-shakarchi-2003
    loc: "Ch. 6, §3.2, the spherical mean $M_t(f)$ Eq. (5) and Theorem 3.6, pp. 189–192; the Huygens principle and the backward and forward light cones, pp. 192–193; finite speed of propagation, p. 194; §3.3, Theorem 3.7 and the two-dimensional means $\\widetilde M_t$, p. 194"
    pages: "189-194"
    role: the solution written as $\\partial_t(tM_t f) + tM_t g$; the light-cone formulation of Huygens's principle; the statement that data supported in a ball of radius $\\delta$ give a solution supported in the ball of radius $|t|+\\delta$; the two-dimensional means and the descent theorem
---

:::definition[Spherical means]{provenance=adapted src="evans-2010:§2.4.1b, Eq. (12)–(13), p. 67; strauss-2008:§9.2, Eq. (4), p. 236; stein-shakarchi-2003:Ch. 6 §3.2, Eq. (5), p. 189"}
Let $\omega_n$ be the surface area of the unit sphere of $\mathbb{R}^n$, so $\omega_2 = 2\pi$ and $\omega_3 = 4\pi$. For a continuous $f$ on $\mathbb{R}^n$, $x \in \mathbb{R}^n$ and $r > 0$, the **spherical mean** of $f$ on the sphere of centre $x$ and radius $r$ is

$$
\mathcal{M}_r f(x) \;=\; \frac{1}{\omega_n r^{\,n-1}}\int_{|y-x| = r} f(y)\, dS(y)
\;=\; \frac{1}{\omega_n}\int_{|z|=1} f(x + rz)\, dS(z),
$$

the second expression following by the substitution $y = x+rz$. The two are equal because $\omega_n r^{n-1}$ is the area of the sphere $\partial B(x,r)$, so $\mathcal{M}_rf(x)$ is the average value of $f$ there; $\mathcal{M}_rf(x)\to f(x)$ as $r \to 0^+$ by continuity.

For a solution $u$ of the wave equation and for data $\varphi, \psi$ we write

$$
U(x; r,t) = \mathcal{M}_r u(\cdot,t)(x), \qquad G(x;r) = \mathcal{M}_r\varphi(x), \qquad H(x;r) = \mathcal{M}_r\psi(x) ,
$$

and regard $x$ as fixed, so that $U$ is a function of the radius $r$ and the time $t$. Evans uses this notation, writing the average with a barred integral sign; Strauss writes $\bar u(r,t)$ for the mean of $u$ about the origin; Stein and Shakarchi write $M_t(f)(x)$, taking the radius equal to the time (they set $c=1$).

The point of the definition is that $u(x,t) = \lim_{r\to 0^+} U(x;r,t)$: if we can find $U$, we can recover $u$.
:::

:::statement[The Euler-Poisson-Darboux equation]{provenance=adapted src="evans-2010:§2.4.1b, Lemma 1 and Eq. (14), p. 67"}
Let $n \ge 2$ and let $u \in C^2(\mathbb{R}^n\times[0,\infty))$ solve

$$
u_{tt} = c^2\Delta u \ \text{ in } \mathbb{R}^n\times(0,\infty), \qquad
u = \varphi,\ u_t = \psi \ \text{ on } \mathbb{R}^n\times\{t=0\} .
$$

Fix $x$. Then for $r>0$ and $t>0$,

$$
U_{tt} = c^2\Bigl(U_{rr} + \frac{n-1}{r}\,U_r\Bigr),
\qquad U(x;r,0) = G(x;r), \quad U_t(x;r,0) = H(x;r) .
\tag{EPD}
$$

The differential operator on the right is the radial part of the Laplacian, as Evans notes: a function of $|x|$ alone has $\Delta = \partial_r^2 + \frac{n-1}{r}\partial_r$. Evans states the lemma for $c=1$ and for $u \in C^m$ with $m \ge 2$, concluding in addition that $U \in C^m(\overline{\mathbb{R}_+}\times[0,\infty))$ — a regularity statement up to $r=0$. We use it below in two ways: through the limits $U \to u$ and $rU \to 0$ as $r\to0^+$, and through the smoothness of $\widetilde G(r) = rG(x;r)$ and $\widetilde H(r)=rH(x;r)$ up to $r=0$, since the half-line formula applied in Step 3 of the Kirchhoff proof needs $\widetilde G \in C^2$ and $\widetilde H \in C^1$ on $[0,\infty)$.
:::

:::idea{provenance=original}
Averaging a function over a sphere destroys all of its angular structure, so after averaging the Laplacian can only act radially. The cleanest way to see what is left is not to compute $\Delta$ in polar coordinates but to integrate the equation over the solid ball and use the divergence theorem: the integral of $\Delta u$ over $B(x,r)$ equals the flux of $\nabla u$ out of $\partial B(x,r)$, and that flux is nothing but $r$-derivative of the mean, up to the area factor. One differentiation in $r$ then converts the integrated identity into a differential equation. The whole calculation is one application of the divergence theorem and two of differentiation under the integral sign.
:::

:::proof{provenance=adapted src="strauss-2008:§9.2, the alternative proof of Eq. (5), p. 236; evans-2010:§2.4.1b, proof of Lemma 1, p. 68"}
Fix $x$ and write $U(r,t)$ for $U(x;r,t)$.

**Step 1 (differentiating in $r$ averages the normal derivative).** Write $U(r,t) = \omega_n^{-1}\int_{|z|=1}u(x+rz,t)\,dS(z)$. The integrand and its first and second derivatives in the parameters $(r,t)$ are continuous on a compact neighbourhood of any $(r,t)$ with $r>0$, times the unit sphere, because $u \in C^2$. That licenses differentiating under the integral sign. The theorem of :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} is stated for an integral over a real interval $[a,b]$; here the integration is over the unit sphere, so we use its proof rather than its statement. The proof transfers verbatim, since all it uses about $[a,b]$ is that the integration set has finite total measure (here $\omega_n$) and that the parameter derivative is uniformly continuous on a compact product; we appeal to it in this form here and again in Step 3. It gives

$$
U_r(r,t) = \frac{1}{\omega_n}\int_{|z|=1}\nabla u(x+rz,t)\cdot z\; dS(z)
= \mathcal{M}_r\Bigl(\frac{\partial u}{\partial n}\Bigr)(x),
$$

because at the point $y = x+rz$ of $\partial B(x,r)$ the outward unit normal is exactly $z = (y-x)/r$. Multiplying by the area,

$$
\oint_{\partial B(x,r)} \frac{\partial u}{\partial n}\; dS = \omega_n r^{\,n-1}\, U_r(r,t) .
\tag{1}
$$

**Step 2 (the divergence theorem).** $\nabla u(\cdot,t)$ is $C^1$ on the closed ball, so the :ref[divergence theorem]{to=vcalc.divergence-theorem} applies to it:

$$
\int_{B(x,r)} \Delta u\; dy = \oint_{\partial B(x,r)}\frac{\partial u}{\partial n}\; dS = \omega_n r^{\,n-1} U_r .
\tag{2}
$$

**Step 3 (the left-hand side in terms of $U$).** Since $u$ solves the equation, $\Delta u = c^{-2}u_{tt}$. Slicing the ball into spheres and using the same interchange of differentiation and integration as in Step 1, now in the parameter $t$ (so that the mean of $u_{tt}$ is $U_{tt}$),

$$
\int_{B(x,r)}\Delta u\; dy = \frac{1}{c^2}\int_0^r\Bigl(\oint_{\partial B(x,\varrho)} u_{tt}\; dS\Bigr) d\varrho
= \frac{\omega_n}{c^2}\int_0^r \varrho^{\,n-1}\,U_{tt}(\varrho,t)\; d\varrho .
\tag{3}
$$

**Step 4 (differentiate in $r$).** Comparing (2) and (3) and cancelling $\omega_n$,

$$
r^{\,n-1}U_r(r,t) = \frac{1}{c^2}\int_0^r \varrho^{\,n-1}U_{tt}(\varrho,t)\, d\varrho .
$$

The integrand is continuous in $\varrho$, so the right-hand side is differentiable in $r$ with derivative $c^{-2}r^{n-1}U_{tt}$. Differentiating the left-hand side,

$$
r^{\,n-1}U_{rr} + (n-1)r^{\,n-2}U_r = \frac{1}{c^2}r^{\,n-1}U_{tt} .
$$

Dividing by $r^{n-1}$, which is legitimate for $r>0$, gives (EPD). The initial conditions are the means of the initial conditions, by the definition of $G$ and $H$. $\square$
:::

:::statement[Kirchhoff's formula]{provenance=adapted src="strauss-2008:§9.2, Eq. (3), p. 234; evans-2010:§2.4.1c, Eq. (21)–(22), p. 69, and Thm 2 with $n=3$, p. 73; stein-shakarchi-2003:Ch. 6, Thm 3.6, p. 191"}
Let $n = 3$. If $u \in C^2(\mathbb{R}^3\times[0,\infty))$ solves $u_{tt} = c^2\Delta u$ with $u = \varphi$, $u_t = \psi$ at $t=0$, then for $t>0$

$$
u(x,t) \;=\; \frac{\partial}{\partial t}\Bigl[\,t\,\mathcal{M}_{ct}\varphi(x)\,\Bigr] \;+\; t\,\mathcal{M}_{ct}\psi(x)
\;=\; \frac{\partial}{\partial t}\left[\frac{1}{4\pi c^2 t}\oint_{S}\varphi\, dS\right] + \frac{1}{4\pi c^2 t}\oint_{S}\psi\, dS ,
\tag{K}
$$

where $S$ is the sphere of centre $x$ and radius $ct$. This is Strauss's Eq. (3), which he attributes to Poisson although it is known as Kirchhoff's formula. Stein and Shakarchi write it as $\partial_t(tM_t\varphi) + tM_t\psi$ with $c=1$. Carrying out the $t$-derivative gives Evans's equivalent form, an average over the single sphere $\partial B(x,ct)$:

$$
u(x,t) = \mathcal{M}_{ct}\Bigl[\, t\,\psi(y) + \varphi(y) + \nabla\varphi(y)\cdot(y-x)\,\Bigr](x) .
\tag{K$'$}
$$

**Existence.** Conversely, if $\varphi \in C^3(\mathbb{R}^3)$ and $\psi \in C^2(\mathbb{R}^3)$ and $u$ is *defined* by (K), then $u \in C^2(\mathbb{R}^3\times[0,\infty))$, it solves $u_{tt}=c^2\Delta u$ for $t>0$, and $u \to \varphi$, $u_t \to \psi$ as $t\to 0^+$. These are the hypotheses of Evans's Theorem 2 specialised to $n=3$ (he requires $g \in C^{m+1}$, $h \in C^m$ with $m = (n+1)/2$, so $m=2$ here), and they are *more* than the $\varphi\in C^2$, $\psi\in C^1$ that suffice in one dimension. The two halves together say that (K) *is* the solution: the first half is already the uniqueness assertion, since it shows that any $C^2$ solution of the Cauchy problem must equal the right-hand side of (K); the second says that under the stronger hypotheses on the data that right-hand side is a solution.
:::

:::idea{provenance=original}
In three dimensions, and only in odd dimensions, the Euler-Poisson-Darboux equation can be turned back into the one-dimensional wave equation. The trick is to look not at the mean $U$ but at $rU$: the factor $r$ absorbs the awkward first-order term $\frac{2}{r}U_r$ exactly. Since $rU \to 0$ as $r\to 0$, the new unknown satisfies the one-dimensional wave equation on the half-line $r>0$ with a *homogeneous Dirichlet condition at the origin* — the reflection problem already solved in :ref[d'Alembert's formula]{to=pde.dalembert}. Writing down its solution and then dividing by $r$ and letting $r\to0$ recovers $u(x,t)$ itself, because the limit of $rU/r$ is $U$. Only the behaviour of the half-line formula near the boundary $r=0$ is used, which is why the answer involves a single sphere of radius $ct$ and no interior data at all.
:::

:::proof{provenance=adapted src="strauss-2008:§9.2, Eq. (8)–(14), pp. 237–238; evans-2010:§2.4.1c, Eq. (17)–(22), p. 69"}
Fix $x$ and set

$$
\widetilde U(r,t) = r\,U(x;r,t), \qquad \widetilde G(r) = r\,G(x;r), \qquad \widetilde H(r) = r\,H(x;r) .
$$

**Step 1 ($\widetilde U$ solves the one-dimensional wave equation).** For $r > 0$, using (EPD) with $n=3$,

$$
\widetilde U_{tt} = r\,U_{tt} = c^2\Bigl(r\,U_{rr} + 2U_r\Bigr) = c^2\bigl(U + rU_r\bigr)_r = c^2\,\widetilde U_{rr} ,
$$

the middle step because $(U + rU_r)_r = U_r + U_r + rU_{rr}$. At $t=0$, $\widetilde U = \widetilde G$ and $\widetilde U_t = \widetilde H$.

**Step 2 (the boundary condition).** $U$ is bounded near $r = 0$, since it is an average of the continuous function $u(\cdot,t)$ over a small sphere and tends to $u(x,t)$. Hence $\widetilde U(0,t) = \lim_{r\to0^+} rU = 0$ for every $t$. So $\widetilde U$ solves the Dirichlet problem for the one-dimensional wave equation on the half-line $r>0$, with data $\widetilde G, \widetilde H$ — which satisfy the compatibility conditions $\widetilde G(0)=\widetilde H(0)=0$ for the same reason.

**Step 3 (the half-line formula).** The reflection method of :ref[d'Alembert's formula]{to=pde.dalembert} *constructs* a solution of the half-line Dirichlet problem with data $\widetilde G, \widetilde H$ and gives it by the two-case formula; what we need is that our $\widetilde U$ is that solution, which requires knowing the half-line problem has only one $C^2$ solution. (Evans, p. 69, and Strauss, p. 237, pass over this point.) It does, and the reason is short: reflect the uniqueness we already have on the whole line. If $w$ is a $C^2$ function on $\{r\ge0\}\times[0,\infty)$ with $w_{tt}=c^2w_{rr}$ for $r>0$, $w(0,t)=0$, and zero initial data, let $W$ be its odd extension in $r$. Then $W$ is $C^2$ across $r=0$: among $W$ and its derivatives of order at most two, the odd functions of $r$ are $W$, $W_t$, $W_{rr}$ and $W_{tt}$, and all four vanish at $r=0$ — $w(0,t)\equiv 0$ gives $w = w_t = w_{tt} = 0$ there, and the equation then gives $c^2w_{rr}(0,t) = w_{tt}(0,t) = 0$ — so they are continuous across $r=0$, while the even ones, $W_r$ and $W_{rt}$, match from the two sides automatically. So $W$ is a $C^2$ solution on the whole line with zero data, hence $W\equiv0$ by the uniqueness half of d'Alembert's theorem, and $w\equiv0$. Applying this to the difference of two solutions gives uniqueness.

Therefore, in the region $0 < r < ct$ where the backward characteristic from $(r,t)$ meets the boundary,

$$
\widetilde U(r,t) = \frac12\Bigl[\widetilde G(ct+r) - \widetilde G(ct-r)\Bigr] + \frac{1}{2c}\int_{ct-r}^{ct+r}\widetilde H(s)\, ds .
$$

**Step 4 (let $r\to0$).** Since $\widetilde U(0,t)=0$,

$$
u(x,t) = \lim_{r\to0^+} U(x;r,t) = \lim_{r\to0^+}\frac{\widetilde U(r,t) - \widetilde U(0,t)}{r} = \widetilde U_r(0,t) .
$$

Differentiating the two terms of Step 3 in $r$ and setting $r=0$: the first gives $\tfrac12[\widetilde G'(ct+r) + \widetilde G'(ct-r)] \to \widetilde G'(ct)$, and the second, differentiating the integral with respect to each of its two endpoints, gives $\tfrac{1}{2c}[\widetilde H(ct+r)+\widetilde H(ct-r)] \to \tfrac1c\widetilde H(ct)$. Hence

$$
u(x,t) = \widetilde G'(ct) + \frac1c \widetilde H(ct) .
$$

**Step 5 (unwinding the tildes).** By definition $\tfrac1c\widetilde H(ct) = \tfrac1c\, ct\, H(x;ct) = t\,\mathcal{M}_{ct}\psi(x)$, the second term of (K). For the first, $\widetilde G'(s) = \frac{d}{ds}[sG(x;s)]$ evaluated at $s = ct$, and by the chain rule $\frac{\partial}{\partial t}\bigl[t\,G(x;ct)\bigr] = G(x;ct) + ct\,G_s(x;ct) = \bigl[sG(x;s)\bigr]'\big|_{s=ct}$, which is the same number. This is the first term of (K). Writing the means as integrals over $S = \partial B(x,ct)$, whose area is $4\pi c^2t^2$, gives the second display of (K).

**Step 6 ((K$'$) from (K)).** In the form $\mathcal{M}_{ct}\varphi(x) = \omega_3^{-1}\int_{|z|=1}\varphi(x+ctz)dS(z)$,

$$
\frac{\partial}{\partial t}\bigl[t\,\mathcal{M}_{ct}\varphi(x)\bigr]
= \mathcal{M}_{ct}\varphi(x) + \frac{t}{\omega_3}\int_{|z|=1} c\,\nabla\varphi(x+ctz)\cdot z\; dS(z),
$$

and in the second term $ct\,z = y - x$ at the point $y = x+ctz$, so the integrand is $\nabla\varphi(y)\cdot(y-x)$ averaged over $\partial B(x,ct)$. Adding the $\psi$ term gives (K$'$). The existence half of the statement is Evans's Theorem 2, whose proof we do not repeat. $\square$
:::

:::note[Huygens' principle]{provenance=adapted src="strauss-2008:§9.2, p. 235, and §2.2, p. 41; evans-2010:§2.4.1d, Remark (i), p. 74; stein-shakarchi-2003:Ch. 6 §3.2, pp. 192–194"}
Read (K$'$) backwards. The number $u(x,t)$ is built from the values of $\psi$, $\varphi$ and $\nabla\varphi$ on the **sphere** $|y-x| = ct$ alone — Evans makes this remark explicitly — and not from the ball it bounds. Equivalently, the data at a point $x_1$ of the initial plane influence the solution only on the *surface* of the light cone $|x - x_1| = ct$ emanating from it. This is **Huygens' principle**, and Strauss draws the two consequences:

- a signal in three dimensions travels at exactly the speed $c$, neither faster nor slower. Sharp images and undistorted sound follow. Separate an ear from a source by a distance $d$: the single delay $d/c$ then relates what arrives to what was emitted, and nothing emitted at any other moment is superposed on it;
- the causality principle of :ref[d'Alembert's formula]{to=pde.dalembert}, which in one dimension only bounds the speed by $c$, is in three dimensions an exact statement about arrival times.

Stein and Shakarchi phrase the same thing with backward and forward light cones, and add the finite-speed corollary in the form we use below: when both data vanish outside $|y - x_0| \le \delta$, so does the solution at time $t$ outside the concentric ball whose radius is $\delta$ enlarged by $|t|$ (they take $c=1$). Huygens' principle is a feature of odd dimensions: Strauss records that signals propagate sharply exactly in dimensions $n = 3, 5, 7,\dots$, so that three is the smallest dimension in which they do.
:::

:::statement[Poisson's formula in two dimensions]{provenance=adapted src="strauss-2008:§9.2, Eq. (19), p. 239; evans-2010:§2.4.1c, Eq. (27), p. 71; stein-shakarchi-2003:Ch. 6, Thm 3.7, p. 194"}
Let $n=2$, let $D = \{y \in \mathbb{R}^2 : |y - x| \le ct\}$ be the closed disc of radius $ct$ about $x$, and let $u \in C^2(\mathbb{R}^2\times[0,\infty))$ solve $u_{tt}=c^2\Delta u$ in $\mathbb{R}^2\times(0,\infty)$ with $u = \varphi$, $u_t = \psi$ at $t=0$. (The regularity class is the one Evans states, p. 70; the proof needs it in order to apply (K) to the lifted function $\bar u$, which inherits it.) Then

$$
u(x,t) = \frac{\partial}{\partial t}\left[\frac{1}{2\pi c}\int_{D} \frac{\varphi(y)}{\sqrt{c^2t^2 - |y-x|^2}}\; dy\right]
 + \frac{1}{2\pi c}\int_{D}\frac{\psi(y)}{\sqrt{c^2t^2 - |y-x|^2}}\; dy .
\tag{P}
$$

This is Strauss's Eq. (19). Evans's Eq. (27), with $c=1$, is the same formula with the $t$-derivative carried out,

$$
u(x,t) = \frac{1}{2}\,\frac{1}{\pi t^2}\int_{B(x,t)}\frac{t\varphi(y) + t^2\psi(y) + t\,\nabla\varphi(y)\cdot(y-x)}{\bigl(t^2 - |y-x|^2\bigr)^{1/2}}\; dy ,
$$

and Stein and Shakarchi write it as $\partial_t\bigl(t\widetilde M_t\varphi\bigr) + t\widetilde M_t\psi$ with their disc means $\widetilde M_t$. The singularity of the integrand at the rim $|y-x| = ct$ is integrable, since $\int_0^{R}\varrho\,d\varrho/\sqrt{R^2-\varrho^2} = R$ is finite.

**Huygens' principle fails here.** The value $u(x,t)$ depends on the data over the whole disc, not just its rim. Strauss's image is a pebble dropped on a pond: a water bug at distance $\delta$ first feels the wave at $t = \delta/c$, and then keeps feeling ripples for ever, which die away like $t^{-1}$.
:::

:::idea{provenance=original}
A function of two variables is also a function of three that happens not to depend on the third. So a two-dimensional Cauchy problem *is* a three-dimensional one with data constant along the $y_3$-axis, and Kirchhoff's formula already solves it. All that is left is bookkeeping: an average over a sphere of radius $ct$ in $\mathbb{R}^3$, of a function that does not depend on $y_3$, is an integral over the disc of radius $ct$ in $\mathbb{R}^2$, counted twice because the sphere has two hemispheres over that disc, and weighted by the surface element of a hemisphere, which is what produces the factor $(c^2t^2 - |y-x|^2)^{-1/2}$. Evans calls this the method of descent.
:::

:::proof{provenance=adapted src="strauss-2008:§9.2, Eq. (15)–(19), pp. 238–239; evans-2010:§2.4.1c, Eq. (23)–(27), pp. 70–71"}
**Step 1 (lift to three dimensions).** Given $\varphi,\psi$ on $\mathbb{R}^2$ define $\bar\varphi(y_1,y_2,y_3) = \varphi(y_1,y_2)$ and $\bar\psi$ likewise, and $\bar u(y_1,y_2,y_3,t) = u(y_1,y_2,t)$. Since $\partial^2_{y_3}\bar u = 0$, the three-dimensional Laplacian of $\bar u$ equals the two-dimensional Laplacian of $u$, so $\bar u$ solves the three-dimensional problem with data $\bar\varphi, \bar\psi$. Writing $\bar x = (x_1,x_2,0)$, Kirchhoff's formula (K) gives $u(x,t) = \bar u(\bar x, t)$ in terms of means over the sphere $\partial\bar B(\bar x, ct) \subset \mathbb{R}^3$.

**Step 2 (a sphere average becomes a disc integral).** The part of $\partial \bar B(\bar x, ct)$ with $y_3 \ge 0$ is the graph $y_3 = \gamma(y) = \sqrt{c^2t^2 - |y-x|^2}$ over the disc $D$, and the part with $y_3 \le 0$ is the graph of $-\gamma$. By the graph formula for the surface element (:ref[surface integrals]{to=vcalc.surface-integrals}), $dS = \sqrt{1 + |\nabla\gamma|^2}\, dy$, and

$$
\nabla\gamma = \frac{-(y-x)}{\sqrt{c^2t^2-|y-x|^2}}
\quad\Longrightarrow\quad
\sqrt{1+|\nabla\gamma|^2} = \sqrt{\frac{c^2t^2 - |y-x|^2 + |y-x|^2}{c^2t^2-|y-x|^2}} = \frac{ct}{\sqrt{c^2t^2-|y-x|^2}} .
$$

Since $\bar\varphi$ takes the same value at $(y,\gamma(y))$ and $(y,-\gamma(y))$, the two hemispheres contribute equally, and the sphere has area $4\pi c^2t^2$, so

$$
\mathcal{M}_{ct}\bar\varphi(\bar x) = \frac{1}{4\pi c^2t^2}\cdot 2\int_D \varphi(y)\,\frac{ct\; dy}{\sqrt{c^2t^2-|y-x|^2}}
= \frac{1}{2\pi c t}\int_D \frac{\varphi(y)}{\sqrt{c^2t^2-|y-x|^2}}\; dy .
$$

**Step 3 (substitute).** The same identity holds with $\psi$ in place of $\varphi$. Putting both into (K),

$$
u(x,t) = \frac{\partial}{\partial t}\Bigl[t\cdot\frac{1}{2\pi ct}\int_D\frac{\varphi}{\sqrt{c^2t^2-|y-x|^2}}dy\Bigr]
 + t\cdot\frac{1}{2\pi ct}\int_D\frac{\psi}{\sqrt{c^2t^2-|y-x|^2}}dy ,
$$

and the factors of $t$ cancel inside both brackets, giving (P). $\square$
:::

:::remark[Where the hypotheses are used, and how the dimensions differ]{provenance=original}
- *$u \in C^2$ and the divergence theorem.* The derivation of (EPD) differentiates under the integral sign twice and uses the divergence theorem on a ball; both need $u(\cdot,t)$ to be $C^2$ up to the sphere, which is why the lemma is stated for $C^2$ (Evans, for $C^m$ with $m\ge2$).
- *Loss of derivatives.* Compare the hypotheses: $\varphi \in C^2$, $\psi\in C^1$ in one dimension, but $\varphi\in C^3$, $\psi\in C^2$ for $n=3$, and more still as $n$ grows — Evans's Theorem 2 (p. 73) asks for $\varphi \in C^{m+1}$, $\psi \in C^m$ with $m=(n+1)/2$ in odd dimensions $n\ge3$, and his descent for even $n$ (p. 75) needs $m = (n+2)/2$. The reason is visible in (K$'$): the formula contains $\nabla\varphi$, which d'Alembert's does not. Evans draws the moral that for $n>1$ a solution need not stay as smooth as its initial displacement, because irregularities in $\varphi$ can focus at a later time; he adds that the energy norm of :ref[energy and uniqueness]{to=pde.wave-energy} does not deteriorate, which is one reason that norm, and not the supremum norm, is the right measure of size for the wave equation.
- *Where $n=3$ is special.* Step 1 of the Kirchhoff proof works only because $n-1 = 2$, which is exactly what the single factor $r$ absorbs. For general odd $n = 2k+1$ the same job is done by the operator $\bigl(r^{-1}\partial_r\bigr)^{k-1}r^{2k-1}$, which is Evans's route to the formula in all odd dimensions; for even $n$ no such transformation exists, and one descends from $n+1$ instead.
- *The two formulas compared.* In (K$'$) the data enter through a sphere of radius $ct$, a set of measure zero in space; in (P) through a solid disc. That single difference is Huygens' principle and its failure. It has a sharp consequence. Suppose $\varphi \equiv 0$ and $\psi \ge 0$ is continuous, not identically zero, and supported in the ball $|y - x_0| \le a$. Fix $x$ with $|x - x_0| = d > a$. In three dimensions, (K) gives $u(x,t) = t\,\mathcal{M}_{ct}\psi(x)$, which vanishes for every $t$ with $ct > d + a$, because the sphere of radius $ct$ about $x$ then lies entirely outside the support of $\psi$: the signal passes and is **over**. In two dimensions, (P) gives a positive integrand on a set of positive measure as soon as $ct > d+a$, so $u(x,t) > 0$ for **all** later times; and since $ct\big/\sqrt{c^2t^2 - |y-x|^2} \to 1$ uniformly for $y$ in the support as $t\to\infty$ (the quotient is $\bigl(1 - |y-x|^2/c^2t^2\bigr)^{-1/2}$ and $|y-x|$ is bounded there),
 $$
 \lim_{t\to\infty} t\,u(x,t) = \frac{1}{2\pi c^2}\int_{\mathbb{R}^2}\psi(y)\, dy ,
 $$
 the $t^{-1}$ decay that Strauss reports. The limit is positive, so the tail never ends.
- *Backwards in time.* The equation is reversible, and (K) and (P) continue to hold for $t<0$ **unaltered**, provided the sphere $S$ of (K) and the disc $D$ of (P) are read at radius $c|t|$, which is what they mean for negative $t$; the explicit factors of $t$ and the derivative $\partial/\partial t$ stay exactly as written. It is *not* correct to substitute $|t|$ for every $t$: that returns $u(x,|t|)$ rather than $u(x,t)$, and the two differ whenever $u$ is not even in $t$. The second example below is the counterexample: with $\varphi\equiv0$, $\psi(y)=|y|^2$ and $c=1$ the solution is $u(x,t)=t|x|^2+t^3$, so $u(x,-1) = -|x|^2-1$, whereas replacing $t$ by $|t|$ throughout gives $+|x|^2+1$. Stein and Shakarchi accordingly state the support property with $|t|$: the radius, not the formula, is what carries the absolute value.
:::

:::example[Kirchhoff's formula on polynomial data]{provenance=original}
Take $n=3$, any $c>0$, and

$$
\varphi(y) = y_1y_2, \qquad \psi(y) = y_3^2 ,
$$

both polynomials, hence $C^\infty$, so the existence hypotheses hold.

1. *The means.* Over $\partial B(x,r)$, write $y = x + rz$ with $|z|=1$. The average of $z_i$ is $0$ by symmetry, and the average of $z_iz_j$ is $\tfrac13\delta_{ij}$: it vanishes for $i\neq j$ because $z_i z_j$ is odd under $z_i \mapsto -z_i$, and the three diagonal averages are equal and sum to the average of $|z|^2 = 1$. Hence
 $$
 \mathcal{M}_r\varphi(x) = x_1x_2 + \tfrac{r^2}{3}\delta_{12} = x_1x_2, \qquad
 \mathcal{M}_r\psi(x) = x_3^2 + \tfrac{r^2}{3}.
 $$
2. *Apply (K)* with $r = ct$:
 $$
 u(x,t) = \frac{\partial}{\partial t}\bigl[t\,x_1x_2\bigr] + t\Bigl(x_3^2 + \frac{c^2t^2}{3}\Bigr)
 = x_1x_2 + t\,x_3^2 + \frac{c^2t^3}{3}.
 $$
3. *Check it.* $u_{tt} = 2c^2 t$, while $\Delta u = \partial_1^2(x_1x_2) + \partial_2^2(x_1x_2) + \partial_3^2(tx_3^2) = 0 + 0 + 2t$, so $u_{tt} = c^2\Delta u$. At $t=0$, $u = x_1x_2 = \varphi$ and $u_t = x_3^2 + c^2t^2\big|_{t=0} = \psi$. All three conditions hold exactly.
4. *Check (K$'$) too.* The extra term there is the mean of $\nabla\varphi(y)\cdot(y-x) = y_2(y_1-x_1) + y_1(y_2-x_2)$, whose average is $2x_1x_2 - x_1x_2 - x_2x_1 = 0$ by part 1, so (K$'$) returns the same $u$ — as it must.
5. *A number.* At $x = (0.4,\,-1.1,\,2.3)$, $c = 1.7$, $t = 0.9$:
 $u = (0.4)(-1.1) + 0.9(2.3)^2 + (1.7)^2(0.9)^3/3 = -0.44 + 4.761 + 0.70227 = 5.02327$.
 Evaluating the two spherical means of (K) by Gauss-Legendre quadrature on the sphere of radius $ct = 1.53$ reproduces $5.0232700$.
:::

:::example[The same data in three and in two dimensions]{provenance=original}
Now take $\varphi \equiv 0$ and $\psi(y) = |y|^2$, and compute in both dimensions.

1. *Three dimensions.* $\mathcal{M}_r\psi(x) = |x|^2 + r^2$, since $|x+rz|^2 = |x|^2 + 2r\,x\cdot z + r^2$ and the middle term averages to zero. So (K) gives
 $$
 u_3(x,t) = t\bigl(|x|^2 + c^2t^2\bigr) = t|x|^2 + c^2t^3 .
 $$
 Check: $u_{3,tt} = 6c^2t$ and $\Delta_3(t|x|^2) = 6t$, so $u_{3,tt} = c^2\Delta u_3$.
2. *Two dimensions.* By (P), with $z = y - x$ and $R = ct$,
 $$
 u_2(x,t) = \frac{1}{2\pi c}\int_{|z|\le R}\frac{|x|^2 + 2x\cdot z + |z|^2}{\sqrt{R^2 - |z|^2}}\, dz .
 $$
 The middle term integrates to zero by the symmetry $z \mapsto -z$. For the other two, in plane polars with $|z| = \varrho = R\sin\theta$,
 $$
 \int_{|z|\le R}\frac{dz}{\sqrt{R^2-\varrho^2}} = 2\pi\!\int_0^R\!\frac{\varrho\,d\varrho}{\sqrt{R^2-\varrho^2}} = 2\pi R,
 \qquad
 \int_{|z|\le R}\frac{|z|^2\,dz}{\sqrt{R^2-\varrho^2}} = 2\pi\!\int_0^{\pi/2}\! R^3\sin^3\theta\, d\theta = \frac{4\pi R^3}{3},
 $$
 using $\int_0^{\pi/2}\sin^3 = 2/3$. Hence
 $$
 u_2(x,t) = \frac{1}{2\pi c}\Bigl(2\pi R\,|x|^2 + \frac{4\pi R^3}{3}\Bigr) = t|x|^2 + \frac{2}{3}c^2t^3 ,
 $$
 using $R = ct$. Check: $u_{2,tt} = 4c^2t$ and $\Delta_2(t|x|^2) = 4t$, so this too solves its own equation with the right data.
3. *Compare.* Identical data, and the same leading term $t|x|^2$, but the correction is $c^2t^3$ in three dimensions and $\tfrac23 c^2t^3$ in two. The formulas are genuinely different operators, not two notations for one.
4. *A number, checked by quadrature.* At $x = (0.7,-0.5)$, $c = 1.3$, $t = 0.8$: $u_2 = 0.8(0.74) + \tfrac23(1.69)(0.512) = 0.592 + 0.576853 = 1.168853$, and numerical integration of (P) gives $1.1688533$. The three-dimensional value at $x = (0.7,-0.5,0)$ with the same $c,t$ is $0.592 + 1.69(0.512) = 1.457280$, reproduced by quadrature on the sphere to seven figures.
5. *The tail, with numbers.* Let $c=1$, $\varphi\equiv0$ and $\psi(y) = (1-|y|^2)^3$ for $|y|\le1$, zero outside — a $C^2$ bump, non-negative, supported in the unit ball. Observe the point $|x| = 5$. The front arrives at $t = 4$ in both dimensions. In three dimensions $u(x,t) = t\,\mathcal{M}_t\psi(x) = 0$ for every $t > 6$: the sphere of radius $t$ about $x$ has left the support, and nothing is left to hear. In two dimensions $\int_{\mathbb{R}^2}\psi = 2\pi\int_0^1(1-\varrho^2)^3\varrho\, d\varrho = \pi/4$, so
 $$
 t\,u(x,t) \longrightarrow \frac{1}{2\pi}\cdot\frac{\pi}{4} = \frac18 = 0.125 .
 $$
 Numerically, $u(x,20) = 6.4569\times10^{-3}$ (so $tu = 0.12914$) and $u(x,1000) = 1.25002\times10^{-4}$ (so $tu = 0.125002$): the signal is still arriving at $t = 1000$, when the three-dimensional one has been silent for a thousand time units.
:::

:::application{provenance=adapted src="strauss-2008:§9.2, p. 235 and p. 239; evans-2010:§2.4.2, Eq. (44), p. 79"}
**Why we can see and hear.** Huygens' principle is the mathematical reason that optical images are sharp and that recorded sound is intelligible: in three dimensions every point of a source contributes to the field at a receiver at exactly one instant, so the signal arrives undistorted apart from the $1/r$ spreading of the amplitude. Strauss's counterfactual is worth keeping in mind: in two dimensions every view and every sound would be mixed with the echoes of all earlier ones.

**Retarded potentials and radiation.** For the inhomogeneous equation $u_{tt}-\Delta u = f$ in three dimensions, the same spherical-mean machinery produces Evans's retarded-potential solution $u(x,t) = \frac{1}{4\pi}\int_{B(x,t)} f(y, t-|y-x|)\,|y-x|^{-1}dy$: each source element acts at the receiver after the travel-time delay $|y-x|/c$. That formula, with $c$ restored, is the retarded solution of Maxwell's equations used throughout antenna theory and radiation physics; see :ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}.

**Where two dimensions really occur.** The two-dimensional formula is the right one for genuinely planar waves: ripples on a shallow pond, flexural waves in a plate, and shallow-water tsunami models. It predicts the long decaying tail behind the front, which is observed, and which makes the deconvolution of a seismic or sonar record a harder problem than in three dimensions.

**Imaging.** Kirchhoff's formula is also run backwards. If one knows $u$ on a surface for all times, the integrals over spheres of radius $ct$ can be inverted to recover the initial data — this is the mathematics of photoacoustic and thermoacoustic tomography, and it is the wave-equation cousin of the :ref[Radon transform]{to=pde.radon-transform}.
:::
