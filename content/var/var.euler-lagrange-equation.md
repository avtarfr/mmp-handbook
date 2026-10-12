---
id: var.euler-lagrange-equation
title: The Euler-Lagrange equation
kind: theorem
level: core
summary: A continuously differentiable curve with fixed endpoints that makes an integral functional stationary satisfies the Euler-Lagrange equation, and it is automatically twice differentiable near every point where F_{y'y'} != 0 along it.
prereqs: [var.functionals-first-variation, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §3.1 Lemmas 2 and 4, pp. 10–11; §4.1 Thm 1, pp. 14–15, and Thm 3 (regularity), pp. 17–18"
    pages: "10-11, 14-18"
    role: statement for C^1 extremals; proof route through the du Bois-Reymond lemma; regularity statement
  - work: arfken-2013
    loc: "§22.1, Eqs. (22.3)–(22.14), pp. 1083–1084, and Example 22.1.1, p. 1086"
    pages: "1083-1086"
    role: derivation by integrating by parts; the straight line as the planar geodesic
  - work: rhb-2006
    loc: "§22.1, pp. 776–777"
    pages: "776-777"
    role: the usual derivation, which integrates the h' term by parts (the route this unit avoids)
---

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 1, §4.1, Thm 1, p. 15 and Thm 3, p. 17"}
Let $F(x, y, p)$ have continuous first partial derivatives on $[a,b]\times\mathbb{R}\times\mathbb{R}$, and let

$$
J[y] = \int_a^b F\bigl(x, y(x), y'(x)\bigr)\,dx ,\qquad y \in C^1[a,b],\quad y(a) = A,\ y(b) = B .
$$

1. **Euler-Lagrange equation.** If $y$ is stationary for $J$, that is, $\delta J[y;h] = 0$ for every $h \in C^1[a,b]$ with $h(a) = h(b) = 0$ (in particular, if $y$ is a weak local extremum), then the function $x \mapsto F_{y'}\bigl(x, y(x), y'(x)\bigr)$ is continuously differentiable on $[a,b]$ and

   $$
   \frac{d}{dx}\, F_{y'}\bigl(x, y, y'\bigr) = F_y\bigl(x, y, y'\bigr), \qquad a \le x \le b .
   $$

2. **Regularity.** Suppose in addition that $F$ has continuous second partial derivatives, and let $x_0 \in [a,b]$ be a point with $F_{y'y'}\bigl(x_0, y(x_0), y'(x_0)\bigr) \ne 0$. Then there is a $\delta > 0$ such that $y$ is twice continuously differentiable on $[x_0 - \delta, x_0 + \delta]\cap[a,b]$ (a one-sided interval if $x_0$ is an endpoint), and on that interval the equation takes the second-order form

   $$
   F_{y'y'}\,y'' + F_{y'y}\,y' + F_{y'x} - F_y = 0 .
   $$

Solutions of the Euler-Lagrange equation are called **extremals**, whether or not they give an extremum.
:::

:::idea{provenance=original}
The first variation contains $h$ and $h'$. The textbook move is to integrate the $h'$ term by parts, but that needs $\frac{d}{dx}F_{y'}$, which we do not yet know exists. Instead we integrate the $h$ term by parts, so that only $h'$ remains. A continuous function that integrates to zero against every $h'$ must be constant. That constant relation shows that $F_{y'}$ along the curve is an antiderivative of $F_y$. Differentiability of $F_{y'}$ comes out of the proof rather than going in.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:Lemmas 2 and 4, pp. 10–11 and Thm 3, pp. 17–18"}
Along the given curve put $P(x) = F_y(x, y(x), y'(x))$ and $Q(x) = F_{y'}(x, y(x), y'(x))$. Both are continuous, because $F_y$, $F_{y'}$ are continuous and $y$, $y'$ are continuous.

**Step 1 (first variation).** By :ref[the first-variation formula]{to=var.functionals-first-variation},

$$
0 = \delta J[y; h] = \int_a^b \bigl(P\,h + Q\,h'\bigr)\,dx \qquad\text{for all } h \in C^1_0[a,b] .
$$

**Step 2 (move the derivative onto $h$).** Let $\Phi(x) = \int_a^x P(t)\,dt$, a $C^1$ function with $\Phi' = P$ by the fundamental theorem of calculus. Integrating by parts and using $h(a) = h(b) = 0$,

$$
\int_a^b P\,h\,dx = \bigl[\Phi h\bigr]_a^b - \int_a^b \Phi\,h'\,dx = -\int_a^b \Phi\,h'\,dx .
$$

So Step 1 becomes $\int_a^b (Q - \Phi)\,h'\,dx = 0$ for all $h \in C^1_0[a,b]$.

**Step 3 (lemma of du Bois-Reymond: such a function is constant).** Let $g = Q - \Phi$, which is continuous, and let $c = \frac{1}{b-a}\int_a^b g\,dx$ be its mean. The function $h_*(x) = \int_a^x \bigl(g(t) - c\bigr)\,dt$ is $C^1$, has $h_*(a) = 0$, and has $h_*(b) = 0$ by the choice of $c$; so it is an admissible test function, with $h_*' = g - c$. Using it,

$$
\int_a^b (g - c)^2\,dx = \int_a^b (g - c)\,h_*'\,dx = \int_a^b g\,h_*'\,dx - c\,\bigl(h_*(b) - h_*(a)\bigr) = 0 - 0 .
$$

A continuous non-negative function with zero integral vanishes identically, so $g \equiv c$.

**Step 4 (conclusion of part 1).** Hence $Q = \Phi + c$. The right side is $C^1$ with derivative $P$, so $Q$ is $C^1$ and $Q' = P$, which is the Euler-Lagrange equation.

**Step 5 (regularity at an interior point).** Now let $F$ have continuous second derivatives and $F_{y'y'} \ne 0$ at $(x_0, y(x_0), y'(x_0))$, and suppose first that $x_0 \in (a,b)$. Consider

$$
G(x, p) = F_{y'}\bigl(x, y(x), p\bigr) - Q(x), \qquad x \in (a,b),\ p \in \mathbb{R} .
$$

$G$ is $C^1$ in $(x,p)$ on the open set $(a,b)\times\mathbb{R}$, because $F_{y'}$ is $C^1$, $y$ is $C^1$, and $Q$ is $C^1$ by Step 4. We have $G(x_0, y'(x_0)) = 0$ and $\partial G/\partial p = F_{y'y'} \ne 0$ there. By the :ref[implicit function theorem]{to=found.implicit-inverse-function}, there are open intervals $U \ni x_0$, $U \subset (a,b)$, and $V \ni y'(x_0)$ and a $C^1$ function $\psi$ on $U$ such that, for $x \in U$, the only $p \in V$ with $G(x, p) = 0$ is $p = \psi(x)$. Since $y'$ is continuous, $y'(x) \in V$ for $x$ near $x_0$, and $G(x, y'(x)) = 0$ by definition of $Q$. Hence $y' = \psi$ near $x_0$, so $y'$ is $C^1$ there. Now that $y''$ exists, the chain rule expands $Q' = P$ into the displayed second-order form, which we may solve for $y''$:

$$
y'' = \frac{F_y - F_{y'x} - F_{y'y}\,y'}{F_{y'y'}} \tag{$\ast$}
$$

at every interior point where $F_{y'y'} \ne 0$ along the curve.

**Step 6 (regularity up to an endpoint).** Let $x_0 = a$; the case $x_0 = b$ is symmetric. The function $x \mapsto F_{y'y'}(x, y(x), y'(x))$ is continuous and nonzero at $a$, so it is nonzero on $[a, a+\delta]$ for some $\delta > 0$ with $a + \delta < b$, and the right-hand side $R(x)$ of $(\ast)$, built from the continuous functions $F_y$, $F_{y'x}$, $F_{y'y}$, $F_{y'y'}$ along the curve and $y'$, is continuous there. By Step 5, $y'$ is differentiable on $(a, a+\delta)$ with $y'' = R$. Since $y'$ is continuous on $[a, a+\delta]$, the mean value theorem gives, for each $x \in (a, a+\delta)$, a point $\xi_x \in (a,x)$ with $(y'(x) - y'(a))/(x - a) = y''(\xi_x) = R(\xi_x)$; letting $x \to a^+$ and using the continuity of $R$ at $a$, the right derivative of $y'$ at $a$ exists and equals $R(a)$. So $y'' = R$ on all of $[a, a+\delta]$ and is continuous there. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Only $y \in C^1$ is assumed.* The usual derivation integrates $Q\,h'$ by parts, which presupposes that $Q$ is differentiable, and in practice that $y \in C^2$. Steps 2 to 4 avoid this. The extra smoothness is then *proved* in Steps 5 and 6, but only where $F_{y'y'} \ne 0$.
- *$F_{y'y'} \ne 0$ cannot be dropped in Step 5.* Take $F = (p^2 - 4x^2)^2$ on $[-1, 1]$ with $y(-1) = -1$, $y(1) = 1$. Then $J \ge 0$, and $y(x) = x\,|x|$ satisfies $y' = 2|x|$, so $F = 0$ along it and it is a global minimum. Along this curve $F_{y'} = 4y'(y'^2 - 4x^2) = 0$ and $F_y = 0$, so the Euler-Lagrange equation holds, yet $y''$ jumps from $-2$ to $2$ at $x = 0$. Consistently, $F_{y'y'} = 4(3y'^2 - 4x^2) = 32x^2$ vanishes exactly there.
- *Strict convexity in the slope is not enough.* It does not imply $F_{y'y'} \ne 0$. Take $F = \frac14 p^4 - xp$ on $[-1,1]$ with $y(\pm 1) = \frac34$: $p \mapsto F$ is strictly convex, yet $F_{y'y'} = 3p^2$ vanishes at $p = 0$. Here $y = \frac34|x|^{4/3}$ has $y' = x^{1/3}$, so $F_{y'} = y'^3 - x = 0$ and $F_y = 0$: it is a $C^1$ extremal, and it minimises the integrand pointwise (for fixed $x$ the minimum of $\frac14p^4 - xp$ is at $p = x^{1/3}$), hence is the global minimum. But $y' = x^{1/3}$ is not differentiable at $0$.
- *Fixed endpoints* are used in Step 2 to drop the boundary term $[\Phi h]_a^b$ and in Step 3 to make $h_*$ admissible. If an endpoint is free, an extra boundary condition appears (see :ref[natural boundary conditions]{to=var.natural-boundary-conditions}).
- *The equation is necessary, not sufficient.* For $J[y] = \int_0^{2\pi}(y'^2 - y^2)\,dx$ with $y(0) = y(2\pi) = 0$, the function $y = 0$ is an extremal. But $J[\sin(x/2)] = -\frac{3\pi}{4} < 0$ and $J[\sin 2x] = 3\pi > 0$, so it is neither a minimum nor a maximum. Deciding between them is the job of :ref[the second variation]{to=var.second-variation-legendre}.
:::

:::example[Geodesics in the plane]{provenance=adapted src="arfken-2013:Example 22.1.1, p. 1086"}
The length of the graph of $y \in C^1[a,b]$ is $J[y] = \int_a^b \sqrt{1 + y'^2}\,dx$, so $F = \sqrt{1 + p^2}$, with $F_y = 0$ and $F_{y'} = p/\sqrt{1 + p^2}$.

1. *Euler-Lagrange equation.* It reads $\frac{d}{dx}\bigl(y'/\sqrt{1 + y'^2}\bigr) = 0$, so $y'/\sqrt{1 + y'^2} = k$ is constant, with $|k| < 1$.
2. *Solve.* The map $p \mapsto p/\sqrt{1+p^2}$ is strictly increasing, so $y' = k/\sqrt{1 - k^2} = m$ is constant and $y = mx + n$: the extremals are straight lines. With $y(a) = A$, $y(b) = B$ there is exactly one, with $m = (B - A)/(b - a)$.
3. *It is a minimum.* The function $p \mapsto \sqrt{1 + p^2}$ is convex, so it lies above its tangent at $m$: $\sqrt{1 + p^2} \ge \sqrt{1 + m^2} + \frac{m}{\sqrt{1 + m^2}}(p - m)$. Put $p = y'(x)$ for any admissible $y$ and integrate. Since $\int_a^b (y' - m)\,dx = (B - A) - m(b - a) = 0$, this gives $J[y] \ge (b - a)\sqrt{1 + m^2}$, which is the length of the segment.
4. *Numbers.* From $(0, 1)$ to $(3, 5)$: $m = \frac43$ and the minimal length is $3\sqrt{1 + 16/9} = 5$. The admissible competitor $y = 1 + \frac43 x + \frac12 x(3 - x)$ has length $5.3062$ (numerical quadrature), larger as it must be.
:::

:::example{provenance=original}
Minimise $J[y] = \int_0^1 \bigl(y'^2 + y^2\bigr)\,dx$ with $y(0) = 0$, $y(1) = 1$.

1. $F = p^2 + y^2$, so $F_{y'} = 2y'$, $F_y = 2y$, and $F_{y'y'} = 2 \ne 0$; by part 2 every extremal is $C^2$, and the equation is $y'' = y$.
2. The general solution is $y = \alpha\cosh x + \beta\sinh x$. The conditions give $\alpha = 0$ and $\beta = 1/\sinh 1$, so $y = \sinh x/\sinh 1$.
3. *Value.* Integrate $y'^2$ by parts and use $y'' = y$: $\int_0^1 (y'^2 + y^2)\,dx = [y\,y']_0^1 - \int_0^1 y\,(y'' - y)\,dx = y(1)\,y'(1) = \coth 1 \approx 1.3130$.
4. *Comparison.* The straight line $y = x$ gives $J = 1 + \frac13 \approx 1.3333$, slightly more. The extremal is in fact the global minimum: for admissible $y + h$, $J[y + h] - J[y] = \int_0^1 (h'^2 + h^2)\,dx \ge 0$, because the cross term $2\int_0^1 (y'h' + yh)\,dx$ is the first variation, which vanishes.
:::

:::application{provenance=original}
A string under tension $T$, with weight $w$ per unit length and small sag $y(x)$ between supports at equal height, has potential energy $\int_0^L \bigl(\tfrac{T}{2}y'^2 + w\,y\bigr)\,dx$ to leading order. The Euler-Lagrange equation $T y'' = w$ shows that the sag profile is a parabola, the familiar shallow-cable approximation used for power lines and suspension-bridge decks. The same equation, read as a statement about the action, gives Newton's law for a particle (see :ref[Hamilton's principle]{to=var.hamilton-principle}). Fermat's principle gives the equation of light rays in a stratified atmosphere, the basis of refraction corrections in astronomy and radio propagation.
:::
