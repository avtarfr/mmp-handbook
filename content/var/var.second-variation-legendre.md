---
id: var.second-variation-legendre
title: The second variation and Legendre's condition
kind: theorem
level: core
summary: At a weak minimum of a functional the second variation is nonnegative in every direction, which forces F_{y'y'} >= 0 at every point of the curve (Legendre's condition); the unit also writes the second variation in the form used for sufficient conditions.
prereqs: [var.euler-lagrange-equation, found.differentiation-under-integral, found.taylor-theorem]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 5, §24 (Thm 1, p. 99), §25 (formulas (9)–(11), Lemma and Legendre's theorem, pp. 101–103), and the counterexample discussion on p. 104"
    pages: "99-104"
    role: second variation of the simplest functional, its integrated-by-parts form, localized-bump proof of Legendre's condition
  - work: evans-2010
    loc: "§8.1.3 (Second variation), pp. 431–432"
    pages: "431-432"
    role: second variation as the second derivative along a line; rescaled oscillating test function
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §§24–25, pp. 99–101; evans-2010:§8.1.3, p. 431"}
Let $F(x, y, z)$ be a real function on $[a, b] \times \mathbb{R} \times \mathbb{R}$ with continuous partial derivatives up to order two, and consider

$$
J[y] = \int_a^b F\bigl(x, y(x), y'(x)\bigr)\, dx
$$

on the **admissible curves** $y \in C^1[a, b]$ with $y(a) = A$, $y(b) = B$. The **variations** are the functions in

$$
H = \{\, h \in C^1[a, b] : h(a) = h(b) = 0 \,\},
\qquad
\|h\|_1 = \max_{[a,b]} |h| + \max_{[a,b]} |h'| .
$$

An admissible $y$ is a **weak minimum** of $J$ if there is $r > 0$ with $J[\hat y] \ge J[y]$ for every admissible $\hat y$ with $\|\hat y - y\|_1 < r$. "Weak" means that a competitor must be close to $y$ in both value and slope.

Throughout, $F_{y'y'}$ denotes $\partial^2 F / \partial z^2$ evaluated at $(x, y(x), y'(x))$, and similarly $F_{yy'}$ and $F_{yy}$. The **second variation** of $J$ at $y$ in the direction $h \in H$ is

$$
\delta^2 J[y; h] = \frac{d^2}{d\varepsilon^2} J[y + \varepsilon h] \Big|_{\varepsilon = 0}
= \int_a^b \bigl( F_{yy}\, h^2 + 2F_{yy'}\, h h' + F_{y'y'}\, h'^2 \bigr)\, dx .
$$

*Convention.* Gelfand and Fomin define the second variation as the quadratic part of the increment $J[y+h] - J[y]$, which is **half** of ours, so their coefficients $P$ and $Q$ are half of the ones below. Evans uses the second derivative, as we do.
:::

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §24 Thm 1, p. 99, and §25, formula (10) and Legendre's theorem, pp. 102–103"}
Let $F$ have continuous second partial derivatives and let $y$ be admissible.

1. *(Second-order necessary condition.)* If $y$ is a weak minimum of $J$, then $\delta^2 J[y; h] \ge 0$ for every $h \in H$.
2. *(Legendre's condition.)* If $y$ is a weak minimum of $J$, then
   $$
   F_{y'y'}\bigl(x, y(x), y'(x)\bigr) \ge 0 \qquad \text{for every } x \in [a, b].
   $$
   For a weak maximum the inequality is reversed.
3. *(Integrated form.)* If in addition $F$ has continuous third partial derivatives and $y \in C^2[a, b]$, then for every $h \in H$
   $$
   \delta^2 J[y; h] = \int_a^b \bigl( P\, h'^2 + Q\, h^2 \bigr)\, dx,
   \qquad
   P = F_{y'y'}, \quad Q = F_{yy} - \frac{d}{dx} F_{yy'} .
   $$
:::

:::idea{provenance=original}
Along the straight line $\varepsilon \mapsto y + \varepsilon h$ in function space, $J$ becomes an ordinary function of one variable with a minimum at $\varepsilon = 0$, so its second derivative there cannot be negative. For Legendre's condition we pick a direction $h$ concentrated near one point: a bump of height $\delta$ and width $\delta$. Its slope stays of size one while the bump itself is of size $\delta$, so the three terms of $\delta^2 J$ scale like $\delta$, $\delta^2$ and $\delta^3$. The $h'^2$ term wins, and its sign is the sign of $F_{y'y'}$ at that point.
:::

:::proof{provenance=adapted src="evans-2010:§8.1.3, pp. 431–432; gelfand-fomin-1963:Ch. 5, §25, Lemma, p. 103"}
**Part 1.** Fix $h \in H$, $h \ne 0$, and put $\varphi(\varepsilon) = J[y + \varepsilon h]$.

1. *$\varphi$ is twice continuously differentiable.* The integrand $F(x, y + \varepsilon h, y' + \varepsilon h')$ has first and second $\varepsilon$-derivatives that are continuous in $(x, \varepsilon)$ on $[a, b] \times [-1, 1]$, because $F$ has continuous second derivatives and $y, y', h, h'$ are continuous. So :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} applies twice, and $\varphi''(0)$ is the integral displayed in the definition.
2. *$\varphi$ has a local minimum at $0$.* For $|\varepsilon| < r / \|h\|_1$ the curve $y + \varepsilon h$ is admissible (it has the right end values because $h(a) = h(b) = 0$) and lies within $r$ of $y$ in the norm $\|\cdot\|_1$. The weak-minimum hypothesis gives $\varphi(\varepsilon) \ge \varphi(0)$.
3. *Conclusion.* A local minimum forces $\varphi'(0) = 0$. If $\varphi''(0)$ were negative, then by :ref[Taylor's theorem]{to=found.taylor-theorem} with the Lagrange remainder, $\varphi(\varepsilon) = \varphi(0) + \tfrac12 \varphi''(\theta\varepsilon)\, \varepsilon^2$ for some $\theta \in (0,1)$, and continuity of $\varphi''$ would make this smaller than $\varphi(0)$ for small $\varepsilon \ne 0$. Hence $\delta^2 J[y; h] = \varphi''(0) \ge 0$.

**Part 2.** Write $P = F_{y'y'}$, $R = F_{yy'}$ and $S = F_{yy}$ along the curve; these are continuous on $[a, b]$. Let $M = \max_{[a,b]} (|R| + |S|)$. Suppose, for a contradiction, that $P(x_0) < 0$ for some $x_0 \in [a, b]$.

1. *A short interval where $P$ is negative.* By continuity of $P$ there are $\beta > 0$, an interior point $x_1 \in (a, b)$ and $\delta_0 > 0$ with $[x_1 - \delta_0, x_1 + \delta_0] \subset (a, b)$ and $P \le -\beta$ on that interval. (If $x_0$ is an endpoint, move slightly inside; $P$ is still negative there.)
2. *A rescaled bump.* Let $g(s) = (1 - s^2)^2$ for $|s| \le 1$ and $g(s) = 0$ otherwise. Then $g \in C^1(\mathbb{R})$, because $g$ and $g'$ both vanish at $s = \pm 1$. For $0 < \delta \le \delta_0$ put
   $$
   h_\delta(x) = \delta\, g\!\left( \frac{x - x_1}{\delta} \right),
   \qquad
   h_\delta'(x) = g'\!\left( \frac{x - x_1}{\delta} \right).
   $$
   So $h_\delta \in H$, with support in $[x_1 - \delta, x_1 + \delta]$.
3. *Size of the three terms.* Substitute $x = x_1 + \delta s$, so $dx = \delta\, ds$. With $G_1 = \int_{-1}^{1} g'(s)^2\, ds = \tfrac{256}{105}$ and the constant $G_2 = \int_{-1}^{1} \bigl( 2|g g'| + g^2 \bigr)\, ds$,
   $$
   \int_a^b P\, h_\delta'^2\, dx = \delta \int_{-1}^{1} P(x_1 + \delta s)\, g'(s)^2\, ds \le -\beta G_1\, \delta ,
   $$
   because $P \le -\beta$ on the support. Since $\delta \le 1$ may be assumed, $\delta^3 \le \delta^2$ and
   $$
   \left| \int_a^b \bigl( 2R\, h_\delta h_\delta' + S\, h_\delta^2 \bigr)\, dx \right|
   \le M \bigl( 2\delta^2 \textstyle\int |g g'|\, ds + \delta^3 \int g^2\, ds \bigr)
   \le M G_2\, \delta^2 .
   $$
4. *Contradiction.* Adding, $\delta^2 J[y; h_\delta] \le \delta\, (-\beta G_1 + M G_2\, \delta)$, which is negative once $\delta < \beta G_1 / (M G_2)$ (any $\delta$ works if $M = 0$). This contradicts Part 1. Hence $P \ge 0$ on $[a, b]$. For a weak maximum, apply this to $-J$, whose minimum it is.

**Part 3.** If $F$ has continuous third derivatives and $y \in C^2$, the chain rule makes $R(x) = F_{yy'}(x, y(x), y'(x))$ continuously differentiable. Since $2hh' = (h^2)'$ and $h(a) = h(b) = 0$, integration by parts gives
$$
\int_a^b 2R\, h h'\, dx = \bigl[ R\, h^2 \bigr]_a^b - \int_a^b R'\, h^2\, dx = - \int_a^b R'\, h^2\, dx .
$$
Substituting this into $\delta^2 J$ gives $\int_a^b \bigl( P h'^2 + (S - R') h^2 \bigr)\, dx$, which is the claimed form with $Q = S - R'$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Second derivatives of $F$ continuous:* this makes $\varphi$ twice differentiable (Part 1, step 1) and $P$ continuous, so that a negative value at one point persists on an interval (Part 2, step 1). Part 2 never integrates by parts, so it needs no third derivatives; only Part 3 does.
- *Weak minimum:* used only in Part 1, step 2, for the small multiples $\varepsilon h$ of one fixed direction. The bumps $h_\delta$ are not small in $\|\cdot\|_1$, since their slopes stay of size one, but they are never compared with $y$ directly; only $\varepsilon h_\delta$ for small $\varepsilon$ is.
- *Fixed endpoints:* $h(a) = h(b) = 0$ keeps $y + \varepsilon h$ admissible and removes the boundary term in Part 3.

**Necessary, not sufficient.** Even the strict inequality $F_{y'y'} > 0$ does not make an extremal a minimum. Take $J[y] = \int_0^{2\pi} (y'^2 - y^2)\, dx$ with $y(0) = y(2\pi) = 0$. Here $F_{y'y'} = 2 > 0$ and $y \equiv 0$ is an extremal, yet $h = \sin(x/2)$ gives

$$
\delta^2 J[0; h] = 2\int_0^{2\pi} \Bigl( \tfrac14 \cos^2 \tfrac{x}{2} - \sin^2 \tfrac{x}{2} \Bigr)\, dx = 2\Bigl( \frac{\pi}{4} - \pi \Bigr) = -\frac{3\pi}{2} < 0 .
$$

Legendre's condition is a statement about single points, so it cannot detect that the interval is too long. That global information is what :ref[Jacobi's condition]{to=var.jacobi-conjugate-points} supplies.
:::

:::example{provenance=original}
**A double-well integrand.** Let $J[y] = \int_0^1 (y'^2 - 1)^2\, dx$ with $y(0) = 0$ and $y(1) = \tfrac12$.

*The extremal.* $F = (z^2 - 1)^2$ depends only on the slope, so the Euler–Lagrange equation says $F_z(y')$ is constant. The straight line $y_0(x) = x/2$ satisfies it and the boundary conditions, and $J[y_0] = (\tfrac14 - 1)^2 = \tfrac{9}{16}$.

*Legendre's test.* $F_{zz} = 12 z^2 - 4$, which at $z = \tfrac12$ equals $3 - 4 = -1 < 0$. So $y_0$ is **not** a weak minimum. (Legendre's condition holds only for slopes with $|z| \ge 1/\sqrt3$.)

*A direct check.* Take $h = \sin \pi x \in H$ and put $u = \varepsilon \pi \cos \pi x$, so $(y_0 + \varepsilon h)' = \tfrac12 + u$ and the integrand is

$$
\bigl( u^2 + u - \tfrac34 \bigr)^2 = u^4 + 2u^3 - \tfrac12 u^2 - \tfrac32 u + \tfrac{9}{16}.
$$

Over $[0, 1]$ the averages of $\cos \pi x$ and $\cos^3 \pi x$ are $0$, that of $\cos^2 \pi x$ is $\tfrac12$ and that of $\cos^4 \pi x$ is $\tfrac38$. Therefore

$$
J[y_0 + \varepsilon h] = \frac{9}{16} - \frac{\pi^2}{4}\, \varepsilon^2 + \frac{3\pi^4}{8}\, \varepsilon^4 .
$$

The second derivative at $\varepsilon = 0$ is $-\pi^2/2$, which agrees with the formula $\int_0^1 F_{y'y'} h'^2\, dx = -\pi^2 \int_0^1 \cos^2 \pi x\, dx = -\pi^2/2$. The perturbed curve beats the line whenever $0 < |\varepsilon| < \sqrt6/(3\pi) \approx 0.2599$. For instance $\varepsilon = 0.1$ gives $J \approx 0.5625 - 0.02467 + 0.00365 = 0.54148 < 0.5625$.
:::

:::application{provenance=original}
- **Mechanics.** For a Lagrangian $L = \tfrac12 m \dot q^2 - V(q)$ one has $L_{\dot q \dot q} = m > 0$. So the action can never have a maximum at a nontrivial motion: Legendre's condition for a maximum fails at every point. A true path is either a minimum or a saddle of the action, and which one it is depends on the length of the time interval (see :ref[conjugate points]{to=var.jacobi-conjugate-points}).
- **Materials and phase transitions.** Energies like the double well $(y'^2 - 1)^2$ model materials with two preferred strains, as in martensitic transformations. Where the imposed average strain lies in the region in which Legendre's condition fails, the material lowers its energy by forming fine mixtures of the two preferred strains (microstructure) instead of deforming uniformly. In several variables the same test becomes the Legendre–Hadamard (strong ellipticity) condition of elasticity; the scalar case is derived in :cite[Evans]{work=evans-2010 loc="§8.1.3, p. 432"}.
:::
