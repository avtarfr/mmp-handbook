---
id: var.isoperimetric-problems
title: Isoperimetric problems
kind: method
level: core
summary: To make one integral stationary while another integral is held fixed, add a constant Lagrange multiplier times the constraint integrand and solve the Euler-Lagrange equation of the sum; this gives the circular arc of Dido's problem and the catenary of a hanging chain.
prereqs: [var.euler-lagrange-equation, found.lagrange-multipliers]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 2, §12.1, Thm 1 and its proof, pp. 42–45; several constraints, Eq. (35), pp. 45–46; Example 1, p. 49"
    pages: "42-46, 49"
    role: statement of the multiplier rule with the non-degeneracy hypothesis; the compensating-variation idea of the proof; the arc of a circle as extremal
  - work: rhb-2006
    loc: "§22.4, pp. 785–787"
    pages: "785-787"
    role: the method K = I + lambda J and the suspended rope
  - work: arfken-2013
    loc: "§22.4, Eqs. (22.72)–(22.75), pp. 1111–1112"
    pages: "1111-1112"
    role: constant multipliers for integral constraints
---

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 2, §12.1, Thm 1, p. 43"}
Let $F(x, y, p)$ and $G(x, y, p)$ have continuous first partial derivatives. Among $y \in C^1[a,b]$ with $y(a) = A$, $y(b) = B$ and

$$
K[y] = \int_a^b G(x, y, y')\,dx = \ell ,
$$

suppose $y$ gives a weak local extremum of $J[y] = \int_a^b F(x, y, y')\,dx$. Assume that $y$ is **not an extremal of $K$**, that is, $\delta K[y; h_2] \ne 0$ for some $h_2 \in C^1_0[a,b]$. Then there is a constant $\lambda$ such that $y$ is an extremal of $J + \lambda K$:

$$
\frac{d}{dx}\bigl(F + \lambda G\bigr)_{y'} = \bigl(F + \lambda G\bigr)_y \qquad\text{on } [a,b] .
$$

With several constraints $K_j[y] = \ell_j$ ($j = 1, \dots, k$), the same conclusion holds for $F + \sum_j\lambda_j G_j$, provided the linear map $h \mapsto \bigl(\delta K_1[y;h], \dots, \delta K_k[y;h]\bigr)$ from $C^1_0[a,b]$ onto $\mathbb{R}^k$ is surjective.
:::

:::idea{provenance=original}
A variation in an arbitrary direction $h_1$ would usually spoil the constraint. We repair it with a second, fixed direction $h_2$ that does change $K$. In the two-parameter family $y + s h_1 + t h_2$, the condition $K = \ell$ cuts out a curve through the origin of the $(s,t)$-plane. Along that curve $J$ has an extremum at the origin. This is an ordinary two-variable problem with one constraint, and the finite-dimensional Lagrange multiplier rule gives a multiplier. The multiplier comes out as a ratio computed from $h_2$ alone, so it is the same for every $h_1$.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:proof of Thm 1, pp. 43–45"}
**Step 1 (two-parameter family).** Fix $h_2$ as in the hypothesis and let $h_1 \in C^1_0[a,b]$ be arbitrary. Define

$$
\Phi(s,t) = J[y + s h_1 + t h_2], \qquad \Psi(s,t) = K[y + s h_1 + t h_2] .
$$

The argument of :ref[the first variation]{to=var.functionals-first-variation}, applied along each coordinate direction, shows that $\Phi$ and $\Psi$ have partial derivatives in $s$ and $t$ given by integrals with continuous integrands; these depend continuously on $(s, t)$, so $\Phi, \Psi$ are $C^1$ near $(0,0)$. At the origin,

$$
\Phi_s = \delta J[y; h_1],\quad \Phi_t = \delta J[y; h_2],\quad \Psi_s = \delta K[y; h_1],\quad \Psi_t = \delta K[y; h_2] \ne 0 .
$$

**Step 2 (finite-dimensional extremum).** For $(s, t)$ near the origin with $\Psi(s,t) = \ell$, the function $y + s h_1 + t h_2$ has the right end values, satisfies the constraint and lies within $|s|\,\|h_1\|_1 + |t|\,\|h_2\|_1$ of $y$ in the $C^1$ norm. So $\Phi$ restricted to the level set $\{\Psi = \ell\}$ has a local extremum at $(0, 0)$, and $\nabla\Psi(0,0) \ne 0$ because $\Psi_t \ne 0$.

**Step 3 (multiplier).** By the :ref[Lagrange multiplier rule]{to=found.lagrange-multipliers} there is $\mu$ with $\nabla\Phi(0,0) = \mu\,\nabla\Psi(0,0)$. The $t$-component gives $\mu = \delta J[y;h_2]/\delta K[y;h_2]$, which does not depend on $h_1$. Put $\lambda = -\mu$. The $s$-component then reads

$$
\delta J[y; h_1] + \lambda\,\delta K[y; h_1] = 0 \qquad\text{for every } h_1 \in C^1_0[a,b] .
$$

**Step 4 (Euler-Lagrange equation).** The left side is the first variation of the functional with integrand $F + \lambda G$, which has continuous first derivatives. So $y$ is stationary for it, and :ref[the Euler-Lagrange theorem]{to=var.euler-lagrange-equation} gives the equation. $\square$

For $k$ constraints the same proof works with $k$ repairing directions $h_2, \dots, h_{k+1}$ chosen so that the $k \times k$ matrix $\bigl(\delta K_j[y; h_{i+1}]\bigr)$ is invertible, which is possible by the surjectivity hypothesis. We do not write it out.
:::

:::method{provenance=adapted src="rhb-2006:§22.4, pp. 785–786; gelfand-fomin-1963:p. 45"}
To make $J[y] = \int_a^b F\,dx$ stationary subject to $y(a) = A$, $y(b) = B$, $\int_a^b G\,dx = \ell$:

1. Form $F^* = F + \lambda G$ with an unknown constant $\lambda$.
2. Write the Euler-Lagrange equation of $F^*$. If $F^*$ has no $x$, use the :ref[Beltrami first integral]{to=var.first-integrals-beltrami} $F^* - y'F^*_{y'} = C$.
3. Solve. The general solution contains two constants of integration and $\lambda$.
4. Determine all three from the two end conditions and the constraint $\int G\,dx = \ell$.
5. Check the non-degeneracy hypothesis (the solution must not also be an extremal of $K$), and compare values of $J$ among the candidates.

The multiplier usually has a physical meaning: with the convention $F + \lambda G$, the number $-\lambda$ is the rate of change of the optimal value of $J$ with respect to $\ell$. In the examples below it is a radius and a tension.
:::

:::example[Dido's problem]{provenance=adapted src="gelfand-fomin-1963:Example 1, p. 49"}
A rope of length $\ell = 2.5$ is tied to the points $(\pm 1, 0)$ on a straight shore. Which curve $y(x) \ge 0$ encloses the largest area with the shore?

1. *Set-up.* Maximise $J = \int_{-1}^1 y\,dx$ subject to $K = \int_{-1}^1\sqrt{1 + y'^2}\,dx = 2.5$ and $y(\pm 1) = 0$. So $F^* = y + \lambda\sqrt{1 + y'^2}$.
2. *Equation.* $F^*_y = 1$ and $F^*_{y'} = \lambda y'/\sqrt{1 + y'^2}$, so $\frac{d}{dx}\bigl(\lambda y'/\sqrt{1 + y'^2}\bigr) = 1$. Integrating, $\lambda y'/\sqrt{1 + y'^2} = x - x_0$.
3. *Solve.* Solving for $y'$ and integrating once more gives $(x - x_0)^2 + (y - y_0)^2 = \lambda^2$: an arc of a circle of radius $|\lambda|$. Symmetry of the end conditions gives $x_0 = 0$.
4. *Constants.* Let the arc subtend the angle $2\alpha$ at its centre $(0, y_0)$, with radius $r$. The chord gives $r\sin\alpha = 1$ and the length gives $2r\alpha = 2.5$. Hence $\sin\alpha/\alpha = 0.8$, so $\alpha = 1.13110$ and $r = 1.10512$. The centre lies at depth $r\cos\alpha = 0.47041$ below the shore, and the arc rises $0.63471$ above it.
5. *Area.* A circular segment has area $\tfrac12 r^2(2\alpha - \sin 2\alpha) = 0.91099$. For comparison, the parabola $y = k(1 - x^2)$ of the same length has $k = 0.67406$ and area $\tfrac43 k = 0.89875$, which is smaller.
6. *Non-degeneracy.* The arc is not a straight segment, so it is not an extremal of length, and the theorem applies. For $\ell > \pi$ the optimal arc would exceed a semicircle and could not be written as a graph over the shore; a parametric formulation is needed then.
:::

:::example[The hanging chain]{provenance=adapted src="rhb-2006:pp. 786–787"}
A uniform chain of length $3$ hangs from the points $(\pm 1, 0)$, with $y$ measured upward. Its shape minimises the potential energy, proportional to $\int y\,ds$, at fixed length.

1. *Set-up.* $J = \int_{-1}^1 y\sqrt{1 + y'^2}\,dx$, $K = \int_{-1}^1\sqrt{1 + y'^2}\,dx = 3$, $y(\pm 1) = 0$. So $F^* = (y + \lambda)\sqrt{1 + y'^2}$.
2. *First integral.* $F^*$ has no $x$, and $F^* - y'F^*_{y'} = (y + \lambda)/\sqrt{1 + y'^2} = c$.
3. *Solve.* This is the equation of the :ref[minimal surface of revolution]{to=var.first-integrals-beltrami} for $Y = y + \lambda$, so $y + \lambda = c\cosh\bigl((x - x_0)/c\bigr)$. Symmetry gives $x_0 = 0$.
4. *Constants.* The length is $\int_{-1}^1\cosh(x/c)\,dx = 2c\sinh(1/c) = 3$, so $c = 0.61647$. The end condition gives $\lambda = c\cosh(1/c) = 1.62174$.
5. *Shape.* The lowest point is $y(0) = c - \lambda = -1.00527$, so the chain sags $1.0053$ below its supports. The multiplier $\lambda$ is the height of the supports above the "directrix" $y = -\lambda$. Physically, the tension at a point at height $y$ equals the weight per unit length times $y + \lambda$.
:::

:::remark{provenance=original}
**Where the hypotheses are used.** The non-degeneracy assumption $\delta K[y; h_2] \ne 0$ is used in Step 2 to make $\nabla\Psi \ne 0$, so that the finite-dimensional multiplier rule applies. It cannot be dropped. Take $K[y] = \int_0^1\sqrt{1 + y'^2}\,dx = 1$ with $y(0) = y(1) = 0$. The only admissible curve is $y = 0$, which is therefore an extremum of $J = \int_0^1 y\,dx$. But the Euler-Lagrange equation of $y + \lambda\sqrt{1 + y'^2}$ along $y = 0$ reads $0 = 1$, false for every $\lambda$. Here $y = 0$ is an extremal of $K$ (a straight line), so the theorem does not apply. In such degenerate cases one can only assert the weaker rule that $\lambda_0 F + \lambda G$ is stationary for some $(\lambda_0, \lambda) \ne (0, 0)$.
:::

:::application{provenance=original}
In statistical mechanics and information theory, maximising the entropy $-\int f\ln f\,dx$ of a probability density subject to $\int f\,dx = 1$ and $\int x^2 f\,dx = \sigma^2$ gives $-\ln f - 1 + \lambda_0 + \lambda_1 x^2 = 0$ (no derivatives appear, so the Euler-Lagrange equation is algebraic). Hence $f$ is a Gaussian, with $\lambda_1 = -1/(2\sigma^2)$ and $\lambda_0 - 1$ the logarithm of the normalising constant. With an energy constraint in place of the variance this gives the Boltzmann distribution, where the multiplier is $-1/(k_BT)$. Minimising $\int p\,y'^2 + q\,y^2$ subject to $\int w\,y^2 = 1$ gives a Sturm-Liouville equation whose multiplier is an eigenvalue (see :ref[variational eigenvalues]{to=var.variational-eigenvalues}). This is also how a normalised quantum ground state is computed.
:::
