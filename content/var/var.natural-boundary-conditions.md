---
id: var.natural-boundary-conditions
title: Free endpoints and natural boundary conditions
kind: theorem
level: core
summary: When an endpoint value is not prescribed, a stationary curve must satisfy an extra boundary condition, F_{y'} = 0 at a free end and the transversality condition when the endpoint slides along a given curve, so the problem still has as many conditions as constants.
prereqs: [var.euler-lagrange-equation, found.implicit-inverse-function, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §6, Eqs. (26)–(29), pp. 25–26; Ch. 3, §13 basic formula (5), pp. 54–56, and §14 transversality conditions, pp. 59–61"
    pages: "25-26, 54-56, 59-61"
    role: natural boundary conditions; statement of the transversality condition and its reduction to orthogonality
  - work: rhb-2006
    loc: "§22.3.4, Eqs. (22.15)–(22.20), pp. 782–784"
    pages: "782-784"
    role: first-order bookkeeping of the endpoint displacement
  - work: stakgold-holst-2011
    loc: "§0.5, Remarks after the proof, p. 33"
    pages: "33"
    role: the terms essential and natural boundary condition
---

:::statement{provenance=adapted src="gelfand-fomin-1963:§6, p. 26 and §14, p. 60"}
Let $F(x, y, p)$ have continuous first partial derivatives and let $J[y] = \int F(x, y, y')\,dx$.

1. **Free end values (natural boundary conditions).** Let $y \in C^1[a,b]$, and let the admissible variations be

   $$
   \mathcal{H} = \bigl\{\,h \in C^1[a,b] : h(a) = 0\,\bigr\}
   $$

   when $y(a) = A$ is prescribed and $y(b)$ is free, and $\mathcal{H} = C^1[a,b]$ when both end values are free. If $\delta J[y; h] = 0$ for every $h \in \mathcal{H}$, then $y$ satisfies the Euler-Lagrange equation on $[a,b]$ and

   $$
   F_{y'}\bigl(b, y(b), y'(b)\bigr) = 0 ;
   $$

   in the second case also $F_{y'}\bigl(a, y(a), y'(a)\bigr) = 0$.
2. **End sliding on a curve (transversality condition).** Let $x_1 > a$ and $\delta > 0$, let $F$ have continuous first partial derivatives on $[a, x_1 + \delta]\times\mathbb{R}\times\mathbb{R}$, and let $\psi$ be $C^1$ on a neighbourhood of $x_1$. Let $y \in C^1[a, x_1]$ satisfy $y(a) = A$ and $y(x_1) = \psi(x_1)$, let $\tilde y \in C^1[a, x_1 + \delta]$ be an extension of $y$, and assume $y'(x_1) \ne \psi'(x_1)$, so the curve is not tangent to the target curve $Y = \psi(X)$. For $h \in C^1[a, x_1+\delta]$ with $h(a) = 0$ and $|\varepsilon|$ small, the varied curve $\tilde y + \varepsilon h$ meets the target at a unique abscissa $s(\varepsilon)$ near $x_1$, with $s(0) = x_1$ (Step 1 of the proof), so its restriction to $[a, s(\varepsilon)]$ is an admissible competitor; write

   $$
   \varphi_h(\varepsilon) = \int_a^{s(\varepsilon)} F\bigl(x, \tilde y + \varepsilon h, \tilde y' + \varepsilon h'\bigr)\,dx .
   $$

   Suppose $y$ is **stationary** in the sense that $\varphi_h'(0) = 0$ for every such $h$. Then $y$ is an extremal on $[a, x_1]$ and

   $$
   \Bigl[F + \bigl(\psi' - y'\bigr)F_{y'}\Bigr]_{x = x_1} = 0 .
   $$

   For integrands $F = f(x, y)\sqrt{1 + p^2}$ with $f \ne 0$, this reduces to $y'(x_1)\,\psi'(x_1) = -1$: the extremal meets the target curve at a right angle.
:::

:::idea{provenance=original}
Allowing more competitors gives more information. The variations that vanish at both ends still give the Euler-Lagrange equation. Once that equation holds, the first variation reduces to the boundary terms. A variation that does not vanish at a free end then forces the coefficient of $h$ there to vanish. When the end slides along a curve, moving the end changes both the integration range and the end value. The two first-order effects must cancel, and the resulting condition is transversality.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:§6, pp. 25–26 and §§13–14, pp. 55–60; rhb-2006:pp. 782–784"}
**Part 1.** In both cases the variations with $h(a) = h(b) = 0$ belong to $\mathcal{H}$, so by :ref[the Euler-Lagrange theorem]{to=var.euler-lagrange-equation} the function $Q(x) = F_{y'}(x, y, y')$ is $C^1$ and $Q' = F_y$. For any $h \in \mathcal{H}$ we may now integrate by parts and use $Q' = F_y$:

$$
0 = \delta J[y;h] = \int_a^b \bigl(F_y\,h + Q\,h'\bigr)\,dx = \int_a^b\bigl(F_y - Q'\bigr)\,h\,dx + Q(b)\,h(b) - Q(a)\,h(a) = Q(b)\,h(b) - Q(a)\,h(a) .
$$

If $y(a) = A$ is prescribed, every $h \in \mathcal{H}$ has $h(a) = 0$, and the choice $h(x) = (x - a)/(b - a)$, which lies in $\mathcal{H}$ and has $h(b) = 1$, gives $Q(b) = 0$. If both end values are free, then $\mathcal{H} = C^1[a,b]$: the same $h$ still gives $Q(b) = 0$, and $h(x) = (b - x)/(b - a)$, now admissible because no condition at $a$ is imposed, gives $Q(a) = 0$.

**Part 2.** Fix the extension $\tilde y \in C^1[a, x_1+\delta]$ of the hypothesis.

*Step 1 (a family of admissible curves).* Take any $h \in C^1[a, x_1 + \delta]$ with $h(a) = 0$. We want to know where the curve $\tilde y + \varepsilon h$ meets the target. Let $G(s, \varepsilon) = \tilde y(s) + \varepsilon h(s) - \psi(s)$. Then $G(x_1, 0) = 0$ and $\partial G/\partial s\,(x_1, 0) = y'(x_1) - \psi'(x_1) \ne 0$ by the non-tangency assumption. The :ref[implicit function theorem]{to=found.implicit-inverse-function} gives a $C^1$ function $s(\varepsilon)$ with $s(0) = x_1$ and $G(s(\varepsilon), \varepsilon) = 0$, unique near $x_1$, and

$$
s'(0) = -\frac{\partial G/\partial\varepsilon}{\partial G/\partial s}\Big|_{(x_1, 0)} = \frac{h(x_1)}{\psi'(x_1) - y'(x_1)} .
$$

So $\tilde y + \varepsilon h$ restricted to $[a, s(\varepsilon)]$ is admissible, and it tends to $y$ as $\varepsilon \to 0$.

*Step 2 (differentiate).* The integrand of $\varphi_h$ is $C^1$ in $(x, \varepsilon)$, because $F$ is $C^1$ on $[a, x_1+\delta]\times\mathbb{R}\times\mathbb{R}$, and the upper limit $s$ is $C^1$ by Step 1. So by the :ref[Leibniz rule]{to=found.differentiation-under-integral} with a variable upper limit $\varphi_h$ is differentiable at $0$, and the stationarity hypothesis gives

$$
0 = \varphi_h'(0) = F\bigl(x_1, y, y'\bigr)\,s'(0) + \int_a^{x_1}\bigl(F_y\,h + F_{y'}\,h'\bigr)\,dx .
$$

*Step 3 (Euler-Lagrange equation).* Let $k \in C^1[a, x_1]$ with $k(a) = k(x_1) = 0$, and extend it to $h \in C^1[a, x_1 + \delta]$ by its tangent line at $x_1$, $h(x) = k'(x_1)(x - x_1)$ for $x > x_1$; this $h$ is $C^1$ because $k(x_1) = 0$, and $h(a) = 0$. Since $h(x_1) = 0$ we have $s'(0) = 0$ by the formula of Step 1, so Step 2 leaves $\int_a^{x_1}(F_y\,k + F_{y'}\,k')\,dx = 0$. These are exactly the variations with fixed ends on $[a, x_1]$, so by :ref[the Euler-Lagrange theorem]{to=var.euler-lagrange-equation} $y$ is an extremal on $[a, x_1]$ and $Q = F_{y'}(x, y, y')$ is $C^1$ there with $Q' = F_y$.

*Step 4 (boundary terms).* For general $h$, integrate by parts as in Part 1. The integral reduces to $F_{y'}(x_1)\,h(x_1)$, and Step 2 becomes

$$
0 = h(x_1)\Bigl[\frac{F}{\psi' - y'} + F_{y'}\Bigr]_{x = x_1} .
$$

Choose $h$ with $h(x_1) \ne 0$ and multiply by $\psi' - y' \ne 0$ to get the transversality condition.

*Step 5 (orthogonality).* For $F = f\sqrt{1 + p^2}$ we have $F_{y'} = f\,p/\sqrt{1 + p^2}$, so

$$
F + (\psi' - p)F_{y'} = \frac{f}{\sqrt{1 + p^2}}\Bigl(1 + p^2 + \psi' p - p^2\Bigr) = \frac{f\,(1 + p\,\psi')}{\sqrt{1 + p^2}} .
$$

Since $f \ne 0$, this vanishes exactly when $p\,\psi' = -1$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Counting conditions.* A second-order Euler-Lagrange equation has two free constants. In Part 1 the lost condition $y(b) = B$ is replaced by $F_{y'} = 0$. In Part 2 there is a third unknown, $x_1$, and two conditions at that end, $y(x_1) = \psi(x_1)$ and transversality. Conditions imposed on the admissible class, such as $y(a) = A$, are called **essential**. Conditions that come out of stationarity, such as $F_{y'}(b) = 0$, are called **natural**. A minimiser satisfies the natural conditions automatically, which is why finite-element codes never impose them explicitly.
- *Non-tangency* $y'(x_1) \ne \psi'(x_1)$ is used in Step 1 of Part 2 to apply the implicit function theorem. Without it, the end of a varied curve need not move smoothly along the target.
- *Stationarity, not a weak extremum, in Part 2.* The competitors there are defined on intervals $[a, s(\varepsilon)]$ with different right endpoints, so the $C^1$-norm notion of a weak local extremum, which compares functions on one fixed interval, does not apply to them. Gelfand and Fomin measure the distance between two curves with different end abscissae by the $C^1$ distance of extensions to a common interval plus the Euclidean distances between the two pairs of endpoints :cite[]{work=gelfand-fomin-1963 loc="§13, Eq. (3), p. 54"}. In that distance each family of Step 1 converges to $y$, because $s(\varepsilon) \to x_1$ and $\tilde y + \varepsilon h \to \tilde y$ in $C^1[a, x_1 + \delta]$. Hence a curve that minimises or maximises $J$ among the admissible curves within some such distance of it makes every $\varphi_h$ have a local extremum at $\varepsilon = 0$, and $\varphi_h'(0) = 0$ follows because $\varphi_h$ is differentiable there (Step 2). Part 2 assumes only this stationarity, which is all the proof uses.
- *Special targets.* For a vertical line $x = b$ the endpoint cannot move horizontally, and Part 1 applies with $F_{y'} = 0$. For a horizontal target $\psi = \text{const}$ the condition reads $F - y'F_{y'} = 0$.
- The same bookkeeping gives the natural conditions for :ref[higher derivatives]{to=var.several-functions-higher-derivatives} and for :ref[several independent variables]{to=var.several-independent-variables}. In the latter case $F_p\cdot\nu = 0$ on the free part of the boundary.
:::

:::example[A free right end]{provenance=original}
Minimise $J[u] = \int_0^1\bigl(\tfrac12 u'^2 - u\bigr)\,dx$ with $u(0) = 0$ and $u(1)$ free.

1. *Euler-Lagrange equation:* $F_u = -1$ and $F_{u'} = u'$, so $u'' = -1$.
2. *Natural condition:* $F_{u'}(1) = u'(1) = 0$.
3. *Solve:* $u = -\tfrac12 x^2 + \alpha x + \beta$, with $\beta = 0$ from $u(0) = 0$ and $\alpha = 1$ from $u'(1) = 0$. So $u = x - \tfrac12 x^2$, with $u(1) = \tfrac12$.
4. *Value:* $J[u] = \int_0^1\bigl(\tfrac12(1 - x)^2 - x + \tfrac12 x^2\bigr)dx = \tfrac16 - \tfrac12 + \tfrac16 = -\tfrac16$. The best straight line $u = ax$ has $J = a^2/2 - a/2$, minimised at $a = \tfrac12$ with $J = -\tfrac18 > -\tfrac16$, consistent with $u$ being the minimiser.

Physically, $u$ is the deflection of a string fixed at $x = 0$, attached at $x = 1$ to a ring sliding freely on a vertical rod, and loaded uniformly. At the free end the string must leave the rod horizontally.
:::

:::example[Shortest distance to a parabola]{provenance=original}
Find the shortest graph from $P = (0, 3)$ to the parabola $Y = X^2$.

1. *Functional and extremals.* $J = \int_0^{x_1}\sqrt{1 + y'^2}\,dx$ with $y(0) = 3$ and $y(x_1) = x_1^2$. As shown in :ref[the Euler-Lagrange unit]{to=var.euler-lagrange-equation}, the extremals are straight lines.
2. *Transversality.* Here $f = 1$, so the line must meet the parabola at a right angle. A line from $(0, 3)$ to $(t, t^2)$ has direction $(t, t^2 - 3)$ and the parabola has tangent $(1, 2t)$. Orthogonality gives $t + 2t(t^2 - 3) = t\,(2t^2 - 5) = 0$.
3. *Candidates.* The root $t = 0$ gives a vertical segment, which is not a graph $y(x)$, so the theorem does not apply to it; it is in fact the longest of the stationary segments. The root $t = \sqrt{5/2}$ gives the foot point $(1.5811, 2.5)$; the root $t = -\sqrt{5/2}$ has $x_1 < 0 = a$, so it falls outside the set-up $J = \int_a^{x_1}$ with $x_1 > a$, and it is the mirror image of the first solution, found by running the same computation to the left. At the foot point the line has slope $-0.5/1.5811 = -0.31623$ and the parabola has slope $3.1623$, whose product is $-1$.
4. *Distance:* $\sqrt{5/2 + (5/2 - 3)^2} = \sqrt{11}/2 \approx 1.6583$, shorter than the vertical distance $3$.
:::

:::example[Freeing an end lowers the minimum]{provenance=original}
Minimise $J[y] = \int_0^1\bigl(y'^2 + y^2\bigr)\,dx$ with $y(0) = 1$, first with $y(1)$ free and then with $y(1) = 0$ imposed.

1. *Equations.* $F_y = 2y$ and $F_{y'} = 2y'$, so the Euler-Lagrange equation is $y'' = y$ in both problems; $F_{y'y'} = 2 \ne 0$, so the extremals are $C^2$.
2. *Free end.* The natural condition is $F_{y'}(1) = 2y'(1) = 0$. With $y = \alpha\cosh x + \beta\sinh x$, the conditions $y(0) = 1$ and $y'(1) = 0$ give $y = \cosh(1 - x)/\cosh 1$.
3. *Its value.* Integrating by parts and using $y'' = y$, $J[y] = [y\,y']_0^1 = y(1)y'(1) - y(0)y'(0) = \tanh 1 = 0.76159$. It is the global minimum: for admissible $y + h$ (so $h(0) = 0$, $h(1)$ unrestricted) the cross term is $2[y'h]_0^1 - 2\int_0^1(y'' - y)h\,dx = 0$, because $y'(1) = 0$ and $h(0) = 0$, so $J[y+h] - J[y] = \int_0^1(h'^2 + h^2)\,dx \ge 0$.
4. *Fixed end.* Imposing $y(1) = 0$ instead gives $y = \sinh(1 - x)/\sinh 1$ and, by the same boundary-term computation, $J = -y(0)y'(0) = \coth 1 = 1.31304$.
5. *Comparison.* The free-end minimum is the smaller, as it must be: its competitors include all the curves of the fixed-end problem. The natural condition $y'(1) = 0$ is what the free-end minimiser does of its own accord instead of meeting a prescribed value.
:::

:::application{provenance=original}
Natural boundary conditions are the free-edge conditions of continuum mechanics. A cantilever beam with energy $\int\bigl(\tfrac{EI}{2}w''^2 - qw\bigr)$ is clamped at one end ($w = w' = 0$, essential) and free at the other. There stationarity yields $w'' = 0$ (no bending moment) and $w''' = 0$ (no shear force). For a membrane or a heat-conducting body with a free or insulated edge, the natural condition is $\partial u/\partial\nu = 0$. In optimal control and in optics, transversality conditions fix the free terminal time or position: a ray leaving a point and ending on a mirror surface of its choice must meet that surface at right angles.
:::
