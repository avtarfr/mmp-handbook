---
id: var.functionals-first-variation
title: Functionals and the first variation
kind: definition
level: core
summary: Defines functionals on spaces of curves, the admissible variations and the first variation, proves that the first variation vanishes at an extremum, and proves the fundamental lemma that turns this into a pointwise equation.
prereqs: [found.taylor-theorem]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §§1–3: functionals pp. 1–2, the spaces C and D_1 and admissible curves pp. 6–8, Lemma 1 p. 9, weak and strong extrema and Thm 2 pp. 12–13"
    pages: "1-2, 6-9, 12-13"
    role: definitions of functional, weak extremum and admissible curves; statement of the fundamental lemma and of the necessary condition
  - work: evans-2010
    loc: "§8.1.2, pp. 428–429"
    pages: "428-429"
    role: first variation as the derivative of a one-parameter family
  - work: arfken-2013
    loc: "§22.1, pp. 1082–1084"
    pages: "1082-1084"
    role: variations y + alpha eta with fixed endpoints
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 1, §§1–3, pp. 1–2, 6–8, 12–13"}
A **functional** is a rule $J$ that assigns a real number $J[y]$ to each function $y$ in some class. The class used throughout this chapter is $C^1[a,b]$, the continuously differentiable real functions on a closed interval, with the norm

$$
\|y\|_1 = \max_{a\le x\le b}|y(x)| + \max_{a\le x\le b}|y'(x)| .
$$

The typical functional is an **integral functional**

$$
J[y] = \int_a^b F\bigl(x, y(x), y'(x)\bigr)\,dx ,
$$

where the **integrand** $F(x, y, p)$ is a given function of three real variables. We write $F_y$ and $F_{p}$ for its partial derivatives in the second and third slots; following custom, $F_p$ is also written $F_{y'}$.

- The **admissible functions** are the $y \in C^1[a,b]$ that satisfy the side conditions of the problem, for instance the fixed end values $y(a) = A$, $y(b) = B$. They do not form a vector space: the sum of two admissible functions has the wrong end values.
- An **admissible variation** (or direction) at $y$ is a function $h$ such that $y + \varepsilon h$ is admissible for all small $|\varepsilon|$. For fixed end values these are exactly the functions in

  $$
  C^1_0[a,b] = \{\,h \in C^1[a,b] : h(a) = h(b) = 0\,\}.
  $$

- The **first variation** of $J$ at $y$ in the direction $h$ is

  $$
  \delta J[y; h] = \frac{d}{d\varepsilon} J[y + \varepsilon h]\Big|_{\varepsilon = 0},
  $$

  whenever this derivative exists. The function $y$ is **stationary** if $\delta J[y;h] = 0$ for every admissible variation $h$.
- $J$ has a **weak local minimum** at an admissible $y$ if there is $r > 0$ with $J[\tilde y] \ge J[y]$ for every admissible $\tilde y$ with $\|\tilde y - y\|_1 < r$; a weak local maximum is defined in the same way. If the comparison is made with the smaller norm $\max|\tilde y - y|$ instead, the extremum is called **strong**. Every strong extremum is a weak one, so a necessary condition for weak extrema also holds for strong ones.
:::

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 1, Thm 2, p. 13 and Lemma 1, p. 9; evans-2010:§8.1.2, pp. 428–429"}
Let $F$ have continuous first partial derivatives on $[a,b]\times\mathbb{R}\times\mathbb{R}$, and let $y, h \in C^1[a,b]$.

1. **First variation of an integral functional.** The derivative $\delta J[y;h]$ exists and

   $$
   \delta J[y; h] = \int_a^b \Bigl( F_y\bigl(x, y, y'\bigr)\, h + F_{y'}\bigl(x, y, y'\bigr)\, h' \Bigr)\, dx .
   $$

   It is linear in $h$.
2. **Necessary condition.** If $J$ has a weak local extremum at an admissible $y$, then $\delta J[y; h] = 0$ for every admissible variation $h$.
3. **Fundamental lemma.** Let $k \ge 0$ be an integer and $g$ continuous on $[a,b]$. If
   $\int_a^b g\,h\,dx = 0$ for every $h \in C^k[a,b]$ with $h(a) = h(b) = 0$, then $g(x) = 0$ for all $x \in [a,b]$.
:::

:::idea{provenance=original}
Restricting $J$ to the straight line $\varepsilon \mapsto y + \varepsilon h$ in function space turns it into an ordinary function of one real variable. An extremum of $J$ is then an extremum of that function at $\varepsilon = 0$, so its derivative, the first variation, must vanish. The fundamental lemma says that a continuous function which integrates to zero against every test function must vanish identically: if it were positive somewhere, a test function concentrated there would detect it.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:Lemma 1, p. 9 and Thm 2, p. 13; evans-2010:pp. 428–429"}
*Part 1.* Write $\varphi(\varepsilon) = J[y + \varepsilon h]$ and fix $\varepsilon \ne 0$ with $|\varepsilon| \le 1$. For each $x$, the mean value theorem (the case $n = 0$ of :ref[Taylor's theorem]{to=found.taylor-theorem}) applied to $t \mapsto F(x, y + t h, y' + t h')$ on the interval between $0$ and $\varepsilon$ gives a $\theta = \theta(x) \in (0,1)$ with

$$
\frac{F(x, y + \varepsilon h, y' + \varepsilon h') - F(x, y, y')}{\varepsilon}
= F_y(x, y + \theta\varepsilon h, y' + \theta\varepsilon h')\,h + F_{y'}(x, y + \theta\varepsilon h, y' + \theta\varepsilon h')\,h' .
$$

All arguments $(x, y + s h, y' + s h')$ with $|s| \le 1$ lie in a compact box $K \subset [a,b]\times\mathbb{R}^2$, because $y, y', h, h'$ are bounded. $F_y$ and $F_{y'}$ are continuous, hence uniformly continuous on $K$. The arguments above differ from $(x, y, y')$ by at most $|\varepsilon|(|h| + |h'|) \le |\varepsilon|\,\|h\|_1$, so the right-hand side converges to $F_y h + F_{y'} h'$ uniformly in $x$ as $\varepsilon \to 0$. Uniform convergence lets us pass the limit through the integral, which gives the formula. Linearity in $h$ is visible in the formula.

*Part 2.* Suppose $y$ is a weak local minimum (for a maximum replace $J$ by $-J$) and let $h$ be an admissible variation. For small $|\varepsilon|$ the function $y + \varepsilon h$ is admissible, and $\|(y + \varepsilon h) - y\|_1 = |\varepsilon|\,\|h\|_1$ is below the radius $r$ of the definition. Hence $\varphi(\varepsilon) \ge \varphi(0)$ for all small $|\varepsilon|$: the real function $\varphi$ has an interior local minimum at $0$. Since $\varphi$ is differentiable at $0$ by part 1, $\varphi'(0) = 0$, that is, $\delta J[y; h] = 0$.

*Part 3.* Suppose, for a contradiction, that $g(x_0) \ne 0$ for some $x_0$; replacing $g$ by $-g$ we may take $g(x_0) > 0$. By continuity there is an interval $[c, d] \subset [a,b]$ with $c < d$ on which $g > g(x_0)/2$. Define

$$
h(x) = \begin{cases} \bigl((x - c)(d - x)\bigr)^{k+1}, & c \le x \le d,\\ 0, & \text{otherwise.} \end{cases}
$$

At $x = c$ the polynomial branch has a zero of order $k+1$, so it and its first $k$ derivatives vanish there, matching the zero branch; the same holds at $d$. So $h \in C^k[a,b]$, $h(a) = h(b) = 0$, and $h > 0$ on $(c, d)$. Then

$$
\int_a^b g\,h\,dx = \int_c^d g\,h\,dx \ge \frac{g(x_0)}{2}\int_c^d h\,dx > 0 ,
$$

contradicting the hypothesis. Hence $g \equiv 0$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Continuity of $F_y$, $F_{y'}$* is what makes the difference quotients converge uniformly in part 1. It is also why the problem is posed in $C^1$ with the norm $\|\cdot\|_1$: an integrand that depends on $y'$ needs $y'$ to be controlled. Arc length is an example. A zigzag curve can be uniformly within $\varepsilon$ of a straight segment yet be much longer, so arc length is not continuous for the max norm, although it is continuous for $\|\cdot\|_1$.
- *Admissibility of $y + \varepsilon h$* for small $\varepsilon$ of both signs is used in part 2. If only $\varepsilon \ge 0$ were allowed (a one-sided constraint such as $y \ge 0$ that is active somewhere), we would get only $\delta J[y; h] \ge 0$.
- *Continuity of $g$* is used in part 3 to make $g$ positive on a whole interval. Without it the lemma fails: the function equal to $1$ at $x = (a+b)/2$ and $0$ elsewhere integrates to zero against every $h$ but is not zero. For merely integrable $g$ the conclusion becomes "$g = 0$ except on a set that does not affect integrals".
- The class of test functions can be shrunk to $C^k$ functions vanishing near $a$ and $b$, or to infinitely differentiable ones, since the $h$ used in part 3 can be replaced by a smooth bump on $(c,d)$. The vanishing of $\delta J$ is a statement about *every* admissible direction; it says nothing about second-order behaviour, which decides between minimum, maximum and saddle (see :ref[the second variation]{to=var.second-variation-legendre}).
:::

:::example{provenance=original}
Take $J[y] = \int_0^1 \bigl(y'^2 + 2xy\bigr)\,dx$ on functions with $y(0) = 0$, $y(1) = 1$. Is $y_0(x) = x$ a candidate for a minimum?

Here $F = p^2 + 2xy$, so $F_y = 2x$ and $F_{y'} = 2y'$. For the admissible variation $h(x) = x(1 - x)$, which has $h' = 1 - 2x$, part 1 gives

$$
\delta J[y_0; h] = \int_0^1 \bigl(2x\cdot x(1-x) + 2\cdot 1\cdot(1 - 2x)\bigr)\,dx
= 2\Bigl(\frac13 - \frac14\Bigr) + 0 = \frac16 .
$$

As a check, expand directly: $(y_0 + \varepsilon h)' = 1 + \varepsilon(1 - 2x)$, so

$$
J[y_0 + \varepsilon h] = \int_0^1 \Bigl(1 + 2\varepsilon(1 - 2x) + \varepsilon^2(1 - 2x)^2 + 2x^2 + 2\varepsilon x^2(1 - x)\Bigr)dx
= \frac53 + \frac{\varepsilon}{6} + \frac{\varepsilon^2}{3},
$$

whose derivative at $\varepsilon = 0$ is $\frac16$, as computed. Since $\delta J[y_0; h] \ne 0$, part 2 says $y_0$ is not an extremum. Indeed $\varepsilon = -\frac14$ gives $J = \frac53 - \frac1{24} + \frac1{48} = \frac53 - \frac1{48} < J[y_0]$.
:::

:::application{provenance=original}
When the first variation can be written as $\delta J[y;h] = \int_a^b G(x)\,h(x)\,dx$ for a continuous $G$, physicists call $G(x)$ the **functional derivative** $\delta J/\delta y(x)$. It plays the role of the gradient. In density-functional theory the ground-state density makes the energy functional stationary under a particle-number constraint. In statistical field theory the mean field solves $\delta \mathcal F/\delta\phi(x) = 0$ for the free-energy functional $\mathcal F$. In data assimilation for weather prediction, the adjoint model computes the functional derivative of a misfit functional with respect to the initial state. In each case the fundamental lemma is what turns "$\delta J = 0$ for all $h$" into a pointwise equation.
:::
