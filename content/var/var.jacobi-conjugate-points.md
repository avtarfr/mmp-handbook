---
id: var.jacobi-conjugate-points
title: Conjugate points and Jacobi's condition
kind: theorem
level: advanced
summary: Along an extremal with F_{y'y'} > 0, the second variation is positive definite exactly when the Jacobi equation has no conjugate point, which gives Jacobi's necessary condition and a set of sufficient conditions for a weak minimum.
prereqs: [var.second-variation-legendre, ode.sturm-liouville-theory, ode.continuous-dependence, ode.linear-ode-theory, found.taylor-theorem, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 5, §26 (definition of conjugate point, Thm 1 and the Lemma, pp. 105–108; Thms 2, 2', 3, pp. 109–111), §27 (Jacobi equation, Jacobi's necessary condition, conjugate points via neighbouring extremals, pp. 111–115), §28 (sufficient conditions, pp. 115–117)"
    pages: "105-117"
    role: definitions; completing the square with a solution of the Jacobi equation; sufficiency proof via a perturbed quadratic functional; neighbouring-extremal interpretation; sphere example
  - work: docarmo-2016
    loc: "Ch. 5, §5-9, Lemma 2 and Thm 2 (Jacobi), pp. 427–429"
    pages: "427-429"
    role: proof route for loss of positivity past an interior conjugate point (zero energy of the Jacobi solution, nonzero derivative at the conjugate point, cut-off plus a small perturbation), transposed from geodesics to a scalar functional
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §26, p. 106, and §27, Defs 1–2, p. 112"}
Let $J[y] = \int_a^b F(x, y, y')\, dx$ with $y(a) = A$, $y(b) = B$, where $F$ has continuous third partial derivatives, and let $y \in C^2[a, b]$ be an extremal. As in :ref[the second variation]{to=var.second-variation-legendre}, put

$$
P = F_{y'y'}, \qquad Q = F_{yy} - \frac{d}{dx} F_{yy'}
$$

along $y$, so that $\delta^2 J[y; h] = I[h]$ for $h \in H = \{ h \in C^1[a,b] : h(a) = h(b) = 0 \}$, where

$$
I[h] = \int_a^b \bigl( P\, h'^2 + Q\, h^2 \bigr)\, dx ,
\qquad
I[g, k] = \int_a^b \bigl( P\, g' k' + Q\, g k \bigr)\, dx .
$$

The same two integrals make sense, and define a symmetric bilinear form $I[g, k]$ with $I[h] = I[h, h]$, for all continuous, piecewise $C^1$ functions on $[a, b]$, since their derivatives are bounded with finitely many jumps. The proof of Part 2 uses $I$ on such functions.

Assume the **strengthened Legendre condition** $P > 0$ on $[a, b]$.

The **Jacobi equation** of $J$ along $y$ is the Euler–Lagrange equation of $I$:

$$
-(P u')' + Q u = 0 .
$$

We read it as the first-order linear system $u' = v / P$, $v' = Q u$ for the pair $(u, v) = (u, P u')$. Its coefficients are continuous because $P > 0$, so by the :ref[theory of linear equations]{to=ode.linear-ode-theory} each initial value $(u(x_0), v(x_0))$ has exactly one solution on all of $[a, b]$, and $u$ and $P u'$ are $C^1$. Let $u_a$ be the solution with $u_a(a) = 0$ and $u_a'(a) = 1$.

A point $c \in (a, b]$ is **conjugate to $a$** if $u_a(c) = 0$. Equivalently, some solution that is not identically zero vanishes at both $a$ and $c$, since every solution vanishing at $a$ is a multiple of $u_a$.
:::

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §26 Thms 1–3, pp. 106–111, §27 (Jacobi's necessary condition), p. 112, and §28 (Theorem), p. 116"}
Let $P, Q$ be continuous on $[a, b]$ with $P > 0$.

1. *(Strong positivity.)* If no point of $(a, b]$ is conjugate to $a$, there is $\alpha > 0$ with
   $$
   I[h] \ge \alpha^2 \int_a^b h'^2\, dx \qquad \text{for all } h \in H .
   $$
2. *(Loss of positivity.)* If $b$ is conjugate to $a$, then $I[u_a] = 0$ with $u_a \in H$, $u_a \ne 0$. If some $c \in (a, b)$ is conjugate to $a$, then $I[h] < 0$ for some $h \in H$.

   Together, 1 and 2 say: $I[h] > 0$ for all nonzero $h \in H$ **if and only if** no point of $(a, b]$ is conjugate to $a$.
3. *(Jacobi's necessary condition.)* If the extremal $y$ is a weak minimum of $J$ and $P > 0$ on $[a, b]$, then no point of the **open** interval $(a, b)$ is conjugate to $a$.
4. *(Sufficient conditions for a weak minimum.)* If $y \in C^2[a, b]$ is an extremal, $P > 0$ on $[a, b]$ and no point of $(a, b]$ is conjugate to $a$, then $y$ is a **strict weak minimum**: there is $r > 0$ such that $J[y + h] > J[y]$ for every nonzero $h \in H$ with $\|h\|_1 < r$.
:::

:::idea{provenance=original}
The sign of $I$ is settled by completing the square, an idea due to Legendre. If the Jacobi equation has a solution $u$ that stays positive on all of $[a, b]$, the integrand $P h'^2 + Q h^2$ equals $P\,(h' - h u'/u)^2$ plus an exact derivative, so $I \ge 0$, with equality only for $h = 0$. Such a $u$ exists precisely when $u_a$ does not vanish again, which is the no-conjugate-point condition. Conversely, if $u_a$ returns to zero at an interior point $c$, then $u_a$ cut off at $c$ gives $I = 0$ but has a corner at $c$. Because of the corner, a small perturbation near $c$ makes $I$ negative, and rounding off the corner afterwards keeps it negative. For sufficiency, a second variation bounded below by $\alpha^2 \int h'^2$ dominates the Taylor remainder of $J$ for nearby curves.
:::

:::proof[Part 1: strong positivity]{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §26 Thm 1 and footnote 9, pp. 106–108, and §28, pp. 116–117"}
1. *Picone's identity.* Let $\tilde P$ be continuous and positive, and let $u$ be a solution of $-(\tilde P u')' + Q u = 0$ (in the system sense) with $u > 0$ on $[a, b]$. For $h \in H$, expanding the derivative and using $(\tilde P u')' = Q u$,
   $$
   \Bigl( \frac{\tilde P u'}{u}\, h^2 \Bigr)' = Q h^2 + \frac{2 \tilde P u' h h'}{u} - \frac{\tilde P u'^2 h^2}{u^2},
   \qquad\text{so}\qquad
   \tilde P h'^2 + Q h^2 = \tilde P \Bigl( h' - \frac{u'}{u} h \Bigr)^2 + \Bigl( \frac{\tilde P u'}{u}\, h^2 \Bigr)' .
   $$
   Integrating over $[a, b]$, the exact derivative contributes nothing because $h(a) = h(b) = 0$. Hence $\int_a^b (\tilde P h'^2 + Q h^2)\, dx = \int_a^b \tilde P\, (h' - h u'/u)^2\, dx \ge 0$.
2. *A positive solution of the Jacobi equation.* Assume no point of $(a, b]$ is conjugate to $a$. Then $u_a > 0$ on $(a, b]$: it is positive just to the right of $a$ because $u_a'(a) = 1$, and by the intermediate value theorem it cannot become negative without a zero. Let $u_1$ be the solution with $u_1(a) = 1$, $(P u_1')(a) = 0$. By continuity choose $\eta > 0$ with $u_a' \ge \tfrac12$ and $u_1 \ge \tfrac12$ on $[a, a + \eta]$. Put $m = \min_{[a + \eta, b]} u_a > 0$, $K = \max_{[a,b]} |u_1| \ge 1$ and $\epsilon = m / (2K)$. Then $u = u_a + \epsilon u_1$ is positive on all of $[a, b]$: on $[a, a + \eta]$ because $u_a \ge 0$ and $\epsilon u_1 \ge \epsilon/2$, and on $[a + \eta, b]$ because $u \ge m - \epsilon K = m/2$.
3. *Perturbing $P$.* For $0 \le \alpha^2 \le \tfrac12 \min P$, let $u^{(\alpha)}$ be the solution of $-((P - \alpha^2) w')' + Q w = 0$ with the same initial data as $u$ at $a$: $w(a) = \epsilon$, $((P - \alpha^2) w')(a) = P(a)$. In system form the coefficients $1/(P - \alpha^2)$ and $Q$ depend continuously on $(x, \alpha)$. By :ref[continuous dependence on parameters]{to=ode.continuous-dependence}, $u^{(\alpha)} \to u^{(0)} = u$ uniformly on $[a, b]$ as $\alpha \to 0$. Since $\min u > 0$, there is $\alpha > 0$ with $u^{(\alpha)} > 0$ on $[a, b]$.
4. *Conclusion.* Step 1 with $\tilde P = P - \alpha^2 > 0$ and the solution $u^{(\alpha)}$ gives $\int_a^b \bigl( (P - \alpha^2) h'^2 + Q h^2 \bigr)\, dx \ge 0$, that is, $I[h] \ge \alpha^2 \int_a^b h'^2\, dx$. $\square$
:::

:::proof[Part 2: loss of positivity]{provenance=adapted src="docarmo-2016:§5-9, Lemma 2 and Thm 2, pp. 427–429"}
1. *The Jacobi solution has zero energy between its zeros.* Let $c \in (a, b]$ be conjugate to $a$. Since $P u_a'$ is $C^1$, integration by parts on $[a, c]$ gives
   $$
   \int_a^c \bigl( P u_a'^2 + Q u_a^2 \bigr)\, dx = \bigl[ P u_a' u_a \bigr]_a^c + \int_a^c u_a \bigl( -(P u_a')' + Q u_a \bigr)\, dx = 0 ,
   $$
   because $u_a(a) = u_a(c) = 0$ and $u_a$ solves the Jacobi equation. If $c = b$, then $u_a \in H$, $u_a \ne 0$ and $I[u_a] = 0$.
2. *Cutting off at an interior conjugate point.* Now let $c \in (a, b)$. Define $\hat h = u_a$ on $[a, c]$ and $\hat h = 0$ on $[c, b]$. It is continuous and $C^1$ on each piece, and $I[\hat h] = 0$ by step 1. Moreover $u_a'(c) \ne 0$: otherwise $(u_a, P u_a')$ would vanish at $c$, and uniqueness for the system would force $u_a \equiv 0$. So $\hat h$ has a genuine corner at $c$.
3. *Pushing below zero.* Take $w \in H$ with $w(c) = 1$, for instance a $C^1$ bump supported in $(a, b)$. Integrating by parts on $[a, c]$ exactly as in step 1,
   $$
   I[\hat h, w] = \int_a^c \bigl( P u_a' w' + Q u_a w \bigr)\, dx = \bigl[ P u_a' w \bigr]_a^c = P(c)\, u_a'(c) \ne 0 .
   $$
   For real $t$, bilinearity gives $I[\hat h - t w] = -2t\, P(c) u_a'(c) + t^2 I[w]$. Choosing $t$ small, with the sign of $P(c) u_a'(c)$, makes this negative. The function $g = \hat h - t w$ vanishes at $a$ and $b$ and is $C^1$ except at $c$.
4. *Rounding the corner (smoothing lemma).* Let $g$ be continuous on $[a, b]$, $C^1$ on $[a, c]$ and on $[c, b]$, with $g(a) = g(b) = 0$, and let $G = \sup |g'|$. For small $\delta > 0$ let $k_\delta = g'$ outside $(c - \delta, c + \delta)$ and let $k_\delta$ be linear on that interval, joining $g'(c - \delta)$ to $g'(c + \delta)$. Then $k_\delta$ is continuous, $|k_\delta| \le G$, and $k_\delta$ differs from $g'$ only on a set of length $2\delta$, so $\int_a^b |k_\delta - g'|\, dx \le 4G\delta$. Put
   $$
   g_\delta(x) = \int_a^x k_\delta\, dt - \frac{x - a}{b - a} \int_a^b k_\delta\, dt .
   $$
   Then $g_\delta \in H$. Since $\int_a^b g'\, dx = g(b) - g(a) = 0$, the correction term is at most $4G\delta$ in size, so $g_\delta \to g$ uniformly and $\int_a^b (g_\delta' - g')^2\, dx \to 0$ as $\delta \to 0$. Because $P$ and $Q$ are bounded, the Cauchy–Schwarz inequality applied to $I[g] - I[g_\delta] = I[g - g_\delta,\, g + g_\delta]$ shows $I[g_\delta] \to I[g] < 0$. So $I[g_\delta] < 0$ for small $\delta$, with $g_\delta \in H$. $\square$
:::

:::proof[Parts 3 and 4: Jacobi's condition and sufficiency]{provenance=adapted src="gelfand-fomin-1963:Ch. 5, §27, p. 112, and §28, pp. 116–117"}
**Part 3.** If $y$ is a weak minimum, :ref[the second-order necessary condition]{to=var.second-variation-legendre} gives $I[h] = \delta^2 J[y; h] \ge 0$ for every $h \in H$. A point of $(a, b)$ conjugate to $a$ would produce $h \in H$ with $I[h] < 0$ by Part 2. So there is none.

**Part 4.** Let $\alpha$ be as in Part 1, and fix a nonzero $h \in H$ with $\|h\|_1 \le \rho \le 1$, where $\rho$ is chosen below. Put $\varphi(t) = J[y + t h]$.

1. *Taylor expansion.* As in the second-variation unit, $\varphi$ is $C^2$ (we may :ref[differentiate under the integral]{to=found.differentiation-under-integral} twice), with $\varphi''(t)$ given by the second-variation integral at the curve $y + t h$. :ref[Taylor's formula]{to=found.taylor-theorem} with integral remainder gives
   $$
   J[y + h] - J[y] = \varphi'(0) + \int_0^1 (1 - t)\, \varphi''(t)\, dt
   = \tfrac12\, I[h] + \int_0^1 (1 - t) \bigl( \varphi''(t) - \varphi''(0) \bigr)\, dt .
   $$
   Here $\varphi'(0) = 0$ because $y$ is an extremal, and $\varphi''(0) = I[h]$.
2. *Controlling the remainder.* The second derivatives $F_{yy}, F_{yy'}, F_{y'y'}$ are uniformly continuous on the compact set $\{ (x, y(x) + s, y'(x) + \sigma) : x \in [a,b],\ |s|, |\sigma| \le 1 \}$. Let $\omega(\rho)$ be the largest change of any of them when $|s|, |\sigma| \le \rho$; then $\omega(\rho) \to 0$ as $\rho \to 0$. For $t \in [0, 1]$, $|\varphi''(t) - \varphi''(0)| \le \omega(\rho) \int_a^b (h^2 + 2|h h'| + h'^2)\, dx \le 2\omega(\rho) \int_a^b (h^2 + h'^2)\, dx$.
3. *A Poincaré inequality.* Since $h(a) = 0$, Cauchy–Schwarz gives $h(x)^2 = \bigl( \int_a^x h' \bigr)^2 \le (x - a) \int_a^b h'^2$, and integrating, $\int_a^b h^2 \le \tfrac12 (b - a)^2 \int_a^b h'^2$. With $C = 1 + \tfrac12 (b - a)^2$ and $\int_0^1 (1 - t)\, dt = \tfrac12$, steps 1 and 2 and Part 1 give
   $$
   J[y + h] - J[y] \ge \Bigl( \frac{\alpha^2}{2} - C\, \omega(\rho) \Bigr) \int_a^b h'^2\, dx .
   $$
4. *Conclusion.* Choose $\rho \le 1$ with $C\,\omega(\rho) < \alpha^2/2$. A nonzero $h \in H$ has $\int h'^2 > 0$ (otherwise $h$ would be constant, hence $0$), so $J[y + h] > J[y]$ whenever $0 < \|h\|_1 < \rho$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *$P > 0$ on the closed interval.* It turns the Jacobi equation into a regular linear system, so that $u_a$ exists and has isolated zeros with $u_a' \ne 0$ there (Part 2, step 2). It also makes the square in Picone's identity nonnegative, and it leaves room to subtract $\alpha^2$ (Part 1, step 3). Where $P$ vanishes the Jacobi equation is singular, and conjugate points need a separate analysis.
- *The endpoint $b$.* Sufficiency asks that $b$ itself not be conjugate; necessity only excludes the open interval. The gap is real. For $J[y] = \int_0^\pi (y'^2 - y^2)\, dx$ with $y(0) = y(\pi) = 0$, the Jacobi equation is $-2u'' - 2u = 0$, so $u_a = \sin x$ and $b = \pi$ is conjugate. Here $y \equiv 0$ is a minimum, because $J[h] = \tfrac12 I[h] = \int_0^\pi (h'^2 - h^2)\, dx \ge 0$ for $h \in H$. To see this, apply Picone's identity (Part 1, step 1) with $\tilde P = 1$ and $u = \sin x$ on $[\varepsilon, \pi - \varepsilon]$: the integral there is $\int (h' - h \cot x)^2\, dx \ge 0$ plus the boundary values of $h^2 \cot x$, and these tend to $0$ as $\varepsilon \to 0$ because $|h(x)| \le \max|h'| \cdot \min(x, \pi - x)$. (This is the statement that the lowest Dirichlet eigenvalue of $-u''$ on $[0, \pi]$ is $1$; see :ref[the variational characterization of eigenvalues]{to=var.variational-eigenvalues}.) The minimum is not a strict one: $J[\varepsilon \sin x] = 0 = J[0]$. On a longer interval $[0, \ell]$ with $\ell > \pi$, the conjugate point $\pi$ is interior, and indeed $J[\sin(\pi x/\ell)] = \tfrac{\ell}{2}\bigl( \pi^2/\ell^2 - 1 \bigr) < 0$.
- *Extremal.* Used only to remove $\varphi'(0)$ in Part 4.
- *Weak, not strong.* Part 4 compares $y$ only with curves whose slopes are close to $y'$. A minimum against all curves close in value alone (a strong minimum) needs further conditions, such as Weierstrass's condition, which this unit does not treat.

**Conjugate points and neighbouring extremals.** Suppose $y(x; s)$ is a smooth family of extremals through the point $(a, A)$, with $y(x; 0) = y(x)$. Differentiating the Euler–Lagrange equation in $s$ at $s = 0$ shows that $\partial_s y(x; 0)$ solves the Jacobi equation and vanishes at $a$. So a conjugate point is where extremals leaving $(a, A)$ with slightly different slopes come back, to first order, to meet $y$ :cite[]{work=gelfand-fomin-1963 loc="§27, pp. 112–115"}. A point $c$ is conjugate to $a$ exactly when $0$ is an eigenvalue of the :ref[Sturm–Liouville problem]{to=ode.sturm-liouville-theory} $-(P u')' + Q u = \mu u$ on $[a, c]$ with $u(a) = u(c) = 0$.
:::

:::example{provenance=original}
**When does a catenary minimize?** Take $F = y\sqrt{1 + y'^2}$. Up to a factor $2\pi$, $J$ is then the area of the surface swept out by rotating the curve about the $x$-axis (a soap film between two coaxial rings). Consider the arc of $y = \cosh x$ starting at $a = -1$.

*Extremal.* $F_y = \sqrt{1 + y'^2} = \cosh x$ and $F_{y'} = y y'/\sqrt{1 + y'^2} = \sinh x$, whose derivative is $\cosh x = F_y$. So $y = \cosh x$ satisfies the Euler–Lagrange equation.

*Coefficients.* Along the curve $1 + y'^2 = \cosh^2 x$, and

$$
P = \frac{y}{(1 + y'^2)^{3/2}} = \frac{1}{\cosh^2 x} > 0, \qquad
F_{yy} = 0, \qquad
F_{yy'} = \frac{y'}{\sqrt{1 + y'^2}} = \tanh x, \qquad
Q = -\frac{1}{\cosh^2 x}.
$$

So the Jacobi equation is $\bigl( h'/\cosh^2 x \bigr)' + h/\cosh^2 x = 0$.

*Two solutions from two families of catenaries.* Translating, $\cosh(x - d)$, and rescaling, $s \cosh(x/s)$, give families of extremals. Their $d$- and $s$-derivatives at $d = 0$, $s = 1$ suggest $h_1 = \sinh x$ and $h_2 = \cosh x - x \sinh x$. Direct substitution confirms both. For $h_1$: $h_1'/\cosh^2 x = 1/\cosh x$, whose derivative $-\tanh x/\cosh x$ cancels $h_1/\cosh^2 x = \tanh x/\cosh x$. For $h_2$: $h_2' = -x\cosh x$, and $(-x/\cosh x)' = -1/\cosh x + x \tanh x/\cosh x$ cancels $h_2/\cosh^2 x = 1/\cosh x - x\tanh x/\cosh x$. Their Wronskian is $h_1 h_2' - h_1' h_2 = -\cosh^2 x \ne 0$, so they are independent.

*The conjugate point.* The solution with $u(a) = 0$, $u'(a) = 1$ is

$$
u_a(x) = \frac{h_1(x)\, h_2(a) - h_2(x)\, h_1(a)}{\cosh^2 a},
$$

since the numerator has derivative $\cosh^2 a$ at $x = a$. For $a < 0$ we have $u_a(0) = -\sinh a/\cosh^2 a > 0$. For $x \ne 0$, dividing by $\sinh a \sinh x$ shows that $u_a(x) = 0$ exactly when

$$
\coth x - x = \coth a - a .
$$

The function $\coth t - t$ has derivative $-1/\sinh^2 t - 1 < 0$, so it is strictly decreasing on $(-\infty, 0)$ and on $(0, \infty)$. On $(a, 0)$ it stays below its value at $a$, so there is no zero there. On $(0, \infty)$ it falls from $+\infty$ to $-\infty$, so there is exactly one zero. For $a = -1$, $\coth(-1) + 1 \approx -0.313035$, and solving numerically gives the conjugate point $c \approx 1.433605$.

*Verdict.* Write $c = 1.433605\ldots$ for the conjugate point found above. By Part 4, the arc of $\cosh x$ over $[-1, b]$ is a strict weak minimum of the area when $b < c$. By Part 3, it is not even a weak minimum when $b > c$. As a check, the tangent to $\cosh x$ at $t$ meets the $x$-axis at $t - \coth t$. This is $0.313035$ both for $t = -1$ and for $t = c$, so the tangents at a point and at its conjugate point meet on the axis, a classical property of the catenary.
:::

:::application{provenance=original}
- **Least action is only stationary action.** For a harmonic oscillator, $L = \tfrac12 m(\dot q^2 - \omega^2 q^2)$, the Jacobi equation is the equation of motion itself, and $u_a = \sin(\omega(t - a))/\omega$. The first conjugate time is half a period, $\pi/\omega$. A true motion minimizes the action over a time interval shorter than $\pi/\omega$ but is a saddle over a longer one.
- **Geodesics.** On a sphere the point conjugate to $M$ along a great circle is the antipode of $M$ :cite[]{work=gelfand-fomin-1963 loc="§27, p. 115"}, so a great-circle arc longer than a half-circle is not even a local minimum of length. In optics and gravitational lensing, conjugate points are the foci and caustics where neighbouring rays cross.
- **Counting instabilities.** For an extremal with $P > 0$, the number of points conjugate to $a$ in $(a, b)$ equals the number of negative eigenvalues of the second variation (Morse index theorem, stated here without proof). Engineers use this to count unstable buckling modes, and physicists to count unstable fluctuation modes about a classical solution.
:::
