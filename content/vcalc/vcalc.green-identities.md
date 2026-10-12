---
id: vcalc.green-identities
title: Green's identities
kind: theorem
level: core
summary: Derives Green's first and second identities from the divergence theorem and uses the first to prove that the Dirichlet problem for Poisson's equation has at most one solution, that the Neumann problem has one up to an additive constant and only when its data satisfy the compatibility condition $\oint_S h\,dS = \int_V f\,dV$, and that the Robin problem with positive coefficient has at most one.
prereqs: [vcalc.divergence-theorem, vcalc.divergence-curl]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§7.1, pp. 179–180: the derivation of (G1) from $\\nabla\\cdot(v\\nabla u) = \\nabla v\\cdot\\nabla u + v\\Delta u$ and the divergence theorem, the case $v\\equiv 1$ (Eq. (2)), and the necessary condition (4) on the data of the Neumann problem; p. 182, Eq. (7), the energy proof of uniqueness for the Dirichlet problem, and the Neumann statement left as Exercise 2; p. 184, Exercise 3 (Robin uniqueness for $a > 0$); §7.2, Eq. (G2), p. 185, obtained by antisymmetrizing (G1), and the notion of a symmetric boundary condition"
    pages: "179-185"
    role: both identities, the route by which they are derived, the Neumann compatibility condition, and the energy argument for uniqueness
  - work: evans-2010
    loc: "Appendix §C.2, Theorem 3 (Green's formulas) parts (i)–(iii) with the hypothesis $u, v \\in C^2(\\overline U)$, $U$ bounded open with $C^1$ boundary, and its proof from the integration-by-parts formula (3), p. 667"
    pages: "667"
    role: the precise smoothness hypotheses, the three formulas in $\\mathbb{R}^n$, and the derivation from integration by parts
  - work: rhb-2006
    loc: "§11.8.1, Eqs. (11.19)–(11.20), p. 403: Green's first and second theorems, derived by applying the divergence theorem to $\\phi\\nabla\\psi$ and then interchanging $\\phi$ and $\\psi$; the note that the second is what the theory of Green's functions is built on"
    pages: "403"
    role: the same derivation in the physicists' notation, and the naming 'first' and 'second' theorem
  - work: arfken-2013
    loc: "§3.8, 'Green's Theorem', Eqs. (3.83)–(3.86), pp. 165–166 (the two product-rule identities, their difference, and the alternate form from one of them alone); §3.9, p. 178 (Green's theorem in the form (3.86) used to prove that a field with given divergence, curl and normal component is unique)"
    pages: "165-166, 178"
    role: the identities as a corollary of Gauss's theorem, and the uniqueness argument of potential theory that uses them
---

:::statement[Green's first and second identities]{provenance=adapted src="strauss-2008:§7.1, Eq. (G1), p. 180 and §7.2, Eq. (G2), p. 185; evans-2010:Appendix §C.2, Thm 3, p. 667; rhb-2006:§11.8.1, Eqs. (11.19)–(11.20), p. 403"}
Let $V \subseteq \mathbb{R}^3$ be a bounded domain whose boundary $S = \partial V$ is piecewise $C^1$, with unit outward normal $\hat{\mathbf{n}}$, and write

$$
\frac{\partial u}{\partial n} = \hat{\mathbf{n}}\cdot\nabla u
$$

for the outward normal derivative on $S$. Then:

1. **Green's first identity.** For $u \in C^2(\overline V)$ and $v \in C^1(\overline V)$,
   $$
   \oint_S v\,\frac{\partial u}{\partial n}\; dS \;=\; \int_V \nabla v\cdot\nabla u\; dV \;+\; \int_V v\,\nabla^2 u\; dV . \tag{G1}
   $$
2. **The case $v \equiv 1$.** For $u \in C^2(\overline V)$,
   $$
   \oint_S \frac{\partial u}{\partial n}\; dS = \int_V \nabla^2 u\; dV .
   $$
3. **Green's second identity.** For $u, v \in C^2(\overline V)$,
   $$
   \int_V \bigl( u\,\nabla^2 v - v\,\nabla^2 u \bigr)\; dV \;=\; \oint_S \left( u\,\frac{\partial v}{\partial n} - v\,\frac{\partial u}{\partial n} \right) dS . \tag{G2}
   $$

Evans states all three in $\mathbb{R}^n$ for a bounded open $U$ with $C^1$ boundary and $u, v \in C^2(\overline U)$; nothing in the statements or the proof is special to three dimensions. Strauss presents (G1) and (G2) without attaching smoothness conditions to $u$ and $v$ — his claim is that they hold whatever the solid region and whatever the two functions — because he obtains them formally from the product rule and the divergence theorem; the hypotheses above are what that derivation actually needs, and are Evans's.
:::

:::idea{provenance=original}
Both identities are the three-dimensional integration-by-parts formula, and they come from one line of algebra plus the divergence theorem. The product rule for the divergence of $v\nabla u$ splits it into a term with no derivative on $v$ and a term with one on each; integrating and converting the left side to a boundary integral gives (G1), with the boundary term playing the part of the $[\,uv\,]_a^b$ of one-variable integration by parts. The second identity is obtained for free: in (G1) the middle term $\int \nabla u\cdot\nabla v$ is symmetric in $u$ and $v$, so writing (G1) twice with the two functions exchanged and subtracting annihilates it, leaving a relation between the Laplacians inside and the data on the boundary.

That relation is what makes uniqueness proofs work. Setting $v = u$ in (G1) turns the boundary data of a harmonic function into the integral of $\lvert\nabla u\rvert^2$ — a quantity that is non-negative and vanishes only for a constant. So vanishing boundary data forces the solution to be constant, and the proof is three lines long.
:::

:::proof{provenance=adapted src="strauss-2008:§7.1, pp. 179–180 and §7.2, p. 185; rhb-2006:§11.8.1, p. 403; evans-2010:Appendix §C.2, p. 667"}
**Step 1 (the product rule).** For $u \in C^2$ and $v \in C^1$, differentiating $v\,\partial u/\partial x_i$ and summing over $i$,

$$
\nabla\cdot\bigl(v\,\nabla u\bigr) = \sum_i \frac{\partial}{\partial x_i}\left( v\,\frac{\partial u}{\partial x_i} \right) = \sum_i \frac{\partial v}{\partial x_i}\frac{\partial u}{\partial x_i} + v\sum_i\frac{\partial^2 u}{\partial x_i^2} = \nabla v\cdot\nabla u + v\,\nabla^2 u .
$$

**Step 2 (apply the divergence theorem).** The field $\mathbf{F} = v\nabla u$ is $C^1$ on $\overline V$, because $v \in C^1(\overline V)$ and $\nabla u \in C^1(\overline V)$; so the :ref[divergence theorem]{to=vcalc.divergence-theorem} applies to it:

$$
\int_V \nabla\cdot\bigl(v\nabla u\bigr)\; dV = \oint_S v\,\nabla u\cdot\hat{\mathbf{n}}\; dS = \oint_S v\,\frac{\partial u}{\partial n}\; dS ,
$$

the last equality being the definition of the normal derivative. Substituting Step 1 on the left gives (G1).

**Step 3 (the case $v \equiv 1$).** A constant is $C^1$ with $\nabla v = \mathbf{0}$, so the first term on the right of (G1) drops out and part 2 follows.

**Step 4 (antisymmetrize).** Let now $u, v \in C^2(\overline V)$, so that (G1) may be written both ways round:

$$
\oint_S v\,\frac{\partial u}{\partial n}\, dS = \int_V \nabla v\cdot\nabla u\; dV + \int_V v\,\nabla^2 u\; dV ,
\qquad
\oint_S u\,\frac{\partial v}{\partial n}\, dS = \int_V \nabla u\cdot\nabla v\; dV + \int_V u\,\nabla^2 v\; dV .
$$

The first term on each right-hand side is the same number, since the dot product is symmetric. Subtracting the first equation from the second therefore gives

$$
\oint_S \left( u\,\frac{\partial v}{\partial n} - v\,\frac{\partial u}{\partial n} \right) dS = \int_V \bigl( u\,\nabla^2 v - v\,\nabla^2 u \bigr)\; dV ,
$$

which is (G2). $\square$
:::

:::statement[Uniqueness for Laplace's and Poisson's equations]{provenance=adapted src="strauss-2008:§7.1, Eq. (4), p. 180 and Eq. (7), p. 182, with Exercises 2 and 3, p. 184"}
Let $V$ be a bounded *connected* domain with piecewise $C^1$ boundary $S$, and let $f$ on $\overline V$ and $h$ on $S$ be given continuous functions. All solutions below are required to be of class $C^2(\overline V)$.

1. **Dirichlet problem.** The problem $\nabla^2 u = f$ in $V$, $u = h$ on $S$, has at most one solution.
2. **Neumann problem.** For $\nabla^2 u = f$ in $V$, $\partial u/\partial n = h$ on $S$:
   - a solution exists only if the data satisfy the **compatibility condition**
     $$
     \oint_S h\; dS = \int_V f\; dV ;
     $$
   - and any two solutions differ by a constant. So the Neumann problem is not well-posed in the strict sense: existence fails for most data, and uniqueness fails by one constant. Strauss notes that when the compatibility condition does hold, a solution can be shown to exist.
3. **Robin problem.** If $a$ is continuous with $a > 0$ everywhere on $S$, the problem $\nabla^2 u = f$ in $V$, $\partial u/\partial n + a\,u = h$ on $S$, has at most one solution.
:::

:::proof{provenance=adapted src="strauss-2008:§7.1, p. 180, Eq. (4) and p. 182, Eq. (7)"}
Each part uses the same device: subtract two solutions, so that the difference $u$ solves the homogeneous problem, then put $v = u$ in (G1).

**Step 0 (the energy identity).** For $u \in C^2(\overline V)$ with $\nabla^2 u = 0$ in $V$, taking $v = u$ in (G1) and dropping the last term gives

$$
\oint_S u\,\frac{\partial u}{\partial n}\; dS = \int_V \lvert\nabla u\rvert^2\; dV . \tag{E}
$$

**Step 1 (a vanishing lemma).** If $\int_V \lvert\nabla u\rvert^2\, dV = 0$ then $\nabla u \equiv \mathbf{0}$ on $V$: the integrand is continuous and non-negative, so were it positive at a point it would exceed half that value on a ball around the point and the integral would be positive. Since $V$ is connected, a function with vanishing gradient on $V$ is constant there (integrate along a path, :ref[line integrals]{to=vcalc.line-integrals}), hence on $\overline V$ by continuity.

**Step 2 (Dirichlet).** Let $u_1, u_2$ both solve part 1 and put $u = u_1 - u_2$. Then $\nabla^2u = f - f = 0$ in $V$ and $u = h - h = 0$ on $S$. The left side of (E) vanishes because $u = 0$ at every point of $S$, so $\int_V\lvert\nabla u\rvert^2 = 0$; by Step 1, $u$ is a constant, and that constant is $0$ because $u$ vanishes on $S$. Hence $u_1 = u_2$.

**Step 3 (Neumann: the compatibility condition).** Suppose $u$ solves part 2. Part 2 of the identities, with $v \equiv 1$, gives directly

$$
\oint_S h\; dS = \oint_S \frac{\partial u}{\partial n}\; dS = \int_V \nabla^2 u\; dV = \int_V f\; dV .
$$

So data violating this equality admit no solution at all. (For $f \equiv 0$ the condition reads $\oint_S h\, dS = 0$: a steady temperature field cannot have a net heat flux through its boundary.)

**Step 4 (Neumann: uniqueness up to a constant).** With $u = u_1 - u_2$ as before, now $\nabla^2u = 0$ in $V$ and $\partial u/\partial n = 0$ on $S$, so the left side of (E) vanishes because the *normal derivative* vanishes on $S$. By Step 1, $u$ is constant; nothing fixes its value, and indeed $u_2 + c$ solves the same problem as $u_2$ for every constant $c$.

**Step 5 (Robin).** With $u = u_1 - u_2$ we have $\nabla^2u = 0$ in $V$ and $\partial u/\partial n = -a\,u$ on $S$. Substituting into (E),

$$
\int_V \lvert\nabla u\rvert^2\; dV = \oint_S u\,\frac{\partial u}{\partial n}\; dS = -\oint_S a\,u^2\; dS .
$$

The left side is $\ge 0$ and the right side is $\le 0$, since $a > 0$ and $u^2 \ge 0$; so both are $0$. From the left, $\nabla u \equiv \mathbf{0}$ and $u$ is a constant $c$ by Step 1. From the right, $\oint_S a\,c^2\, dS = 0$ with $a > 0$ on a surface of positive area forces $c = 0$. Hence $u_1 = u_2$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Connectedness of $V$, in Step 1 only.* On a disconnected $V$ the Dirichlet conclusion still holds, since $u$ vanishes on the boundary of each component; but the Neumann solution is then unique only up to an *independent* constant in each component.
- *$a > 0$ in the Robin problem, not $a \ge 0$.* With $a \equiv 0$ the Robin problem is the Neumann problem, and uniqueness genuinely fails by a constant: Step 5 breaks at its last sentence. With $a < 0$ somewhere, the two sides of Step 5 can both be nonzero and uniqueness can fail outright. Strauss poses the case $a > 0$ as Exercise 3.
- *$u \in C^2$ up to the boundary.* Both the divergence theorem in Step 2 of the first proof and the evaluation of $u$ or $\partial u/\partial n$ on $S$ require the solution and its first derivatives to extend continuously to $S$. Dropping this admits spurious "solutions": the harmonic function $u = \operatorname{Re}\bigl((1+z)/(1-z)\bigr)$ on the unit disc in the plane vanishes at almost every boundary point yet is not identically zero — it is unbounded near $z = 1$ and so not in $C^2(\overline V)$. The energy method does not see such functions, and the uniqueness statements are statements about the class $C^2(\overline V)$.
- *Only $v \in C^1$ is needed in (G1).* Step 2 of the first proof applies the divergence theorem to $v\nabla u$, which is $C^1$ as soon as $v$ is $C^1$ and $u$ is $C^2$. (G2), by contrast, differentiates both functions twice and needs both in $C^2$.
- *Nothing here needs $V$ simply connected.* The underlying divergence theorem does not, so the identities hold on a spherical shell, with the boundary integral taken over both spheres and $\hat{\mathbf{n}}$ pointing out of $V$ on each.
- *Symmetry of the boundary condition.* Strauss observes that each of the three classical boundary conditions makes the right-hand side of (G2) vanish for every pair $u, v$ satisfying it — he calls such a condition symmetric for $\nabla^2$. For the Dirichlet condition both terms vanish separately; for the Neumann condition likewise; for the Robin condition $\partial u/\partial n = -au$ the two terms become $-auv$ and $+avu$ and cancel. This is exactly the property that makes $\nabla^2$ self-adjoint on the corresponding function space, and hence the starting point for :ref[eigenfunction expansions]{to=ode.self-adjoint-operators}.
- *Notation.* Strauss writes the Laplacian $\Delta$ and warns against the physicists' $\nabla^2$; we use $\nabla^2$, as do Riley, Hobson and Bence and Arfken. Evans writes $D u$ for the gradient and $\nu$ for the outward normal. Only symbols differ.
:::

:::note{provenance=original}
**Moments on the unit sphere and ball,** used in the examples. Aligning the polar axis with the $x$-axis so that $x = r\cos\theta$, and using $\oint_{S^2} g(\cos\theta)\, dS = 2\pi\int_{-1}^{1} g(t)\, dt$ on the unit sphere,

$$
\oint_{S^2} x^{2m}\, dS = 2\pi\int_{-1}^{1} t^{2m}\, dt = \frac{4\pi}{2m+1},
\qquad
\int_{B} x^{2m}\, dV = \left(\int_0^1 r^{2m+2}\, dr\right)\frac{4\pi}{2m+1} = \frac{4\pi}{(2m+1)(2m+3)} ,
$$

where $B$ is the unit ball. In particular $\oint x^2\,dS = \tfrac{4\pi}{3}$, $\oint x^4\,dS = \tfrac{4\pi}{5}$, $\oint x^6\,dS = \tfrac{4\pi}{7}$, and $\int_B x^2\,dV = \tfrac{4\pi}{15}$, $\int_B x^4\,dV = \tfrac{4\pi}{35}$. Also, expanding $\oint (x^2+y^2+z^2)^2 dS = \oint 1\, dS = 4\pi$ into $3\oint x^4\, dS + 6\oint x^2y^2\, dS$ gives $\oint x^2y^2\, dS = \tfrac{4\pi}{15}$, and by symmetry the same for $\oint x^2z^2\, dS$.
:::

:::example[Green's first identity on the unit ball]{provenance=original}
Let $V = B$ be the unit ball, $S$ the unit sphere, and

$$
u = x^2 + y^2, \qquad v = x^2 .
$$

Both are polynomials, hence $C^\infty$ on $\overline V$, so (G1) applies.

1. *Ingredients.* $\nabla u = (2x, 2y, 0)$, $\nabla^2 u = 4$; $\nabla v = (2x, 0, 0)$; and $\nabla u\cdot\nabla v = 4x^2$. On $S$ the outward normal is $\hat{\mathbf{n}} = (x,y,z)$, so
   $$
   \frac{\partial u}{\partial n} = (2x,2y,0)\cdot(x,y,z) = 2(x^2+y^2) = 2(1 - z^2)
   $$
   using $x^2+y^2+z^2 = 1$ on $S$.
2. *Left side.* Using the moments above,
   $$
   \oint_S v\,\frac{\partial u}{\partial n}\, dS = \oint_S 2x^2\bigl(1 - z^2\bigr)\, dS = 2\oint_S x^2\, dS - 2\oint_S x^2z^2\, dS = 2\cdot\frac{4\pi}{3} - 2\cdot\frac{4\pi}{15} = \frac{32\pi}{15} .
   $$
3. *Right side, first term.* $\displaystyle\int_B \nabla u\cdot\nabla v\; dV = 4\int_B x^2\, dV = 4\cdot\frac{4\pi}{15} = \frac{16\pi}{15}$.
4. *Right side, second term.* $\displaystyle\int_B v\,\nabla^2u\; dV = 4\int_B x^2\, dV = \frac{16\pi}{15}$.
5. *Comparison.* $\tfrac{16\pi}{15} + \tfrac{16\pi}{15} = \tfrac{32\pi}{15}$, which is step 2. Numerically both sides are $6.70206$ to five decimal places. Note that all three terms are nonzero here, so this is a genuine test of the identity and not of a symmetry.
:::

:::example[Green's second identity on the unit ball]{provenance=original}
On the same ball take

$$
u = x^2, \qquad v = x^4 ,
$$

so that $\nabla^2 u = 2$ and $\nabla^2 v = 12x^2$.

1. *Volume side.*
   $$
   \int_B \bigl(u\,\nabla^2v - v\,\nabla^2u\bigr)\, dV = \int_B \bigl(12x^4 - 2x^4\bigr)\, dV = 10\int_B x^4\, dV = 10\cdot\frac{4\pi}{35} = \frac{8\pi}{7} .
   $$
2. *Normal derivatives on $S$.* With $\hat{\mathbf{n}} = (x,y,z)$ on the unit sphere,
   $$
   \frac{\partial v}{\partial n} = (4x^3,0,0)\cdot(x,y,z) = 4x^4, \qquad
   \frac{\partial u}{\partial n} = (2x,0,0)\cdot(x,y,z) = 2x^2 .
   $$
3. *Surface side.*
   $$
   \oint_S \left( u\,\frac{\partial v}{\partial n} - v\,\frac{\partial u}{\partial n} \right) dS = \oint_S \bigl(4x^6 - 2x^6\bigr)\, dS = 2\oint_S x^6\, dS = 2\cdot\frac{4\pi}{7} = \frac{8\pi}{7} .
   $$
4. *Comparison.* Both sides are $8\pi/7 = 3.59039$.
5. *A contrast with (G1).* Had we chosen $u = x^2$, $v = y^2$ here, both sides would have come out $0$ by the symmetry of the ball under exchanging $x$ and $y$ — true, but no test of anything. Breaking the symmetry, as above, is what makes the check informative; this is why (G2) is harder to test numerically than (G1).
:::

:::application{provenance=original}
Green's second identity is the engine of potential theory. Choosing $v$ to be the fundamental solution $-1/(4\pi\lvert\mathbf{x}-\mathbf{x}_0\rvert)$ of the Laplacian and cutting out a small ball around its singularity turns (G2) into a formula expressing the value of a harmonic function at an interior point as an integral of $u$ and $\partial u/\partial n$ over the boundary — Strauss's representation formula (§7.2). Replacing that fundamental solution by the Green's function of the region, which also vanishes on the boundary, removes the unknown $\partial u/\partial n$ and gives the solution of the Dirichlet problem purely in terms of its data; this is the subject of :ref[Green's functions for Laplace's equation]{to=green.laplace-green-functions} and :ref[the Poisson integral formula]{to=pde.poisson-integral-formula}. Riley, Hobson and Bence single out the second identity for exactly this reason.

Green's first identity is the engine of the variational and numerical theory. Read from right to left it says that, for $u$ vanishing on the boundary, $\int v\nabla^2 u = -\int \nabla v\cdot\nabla u$: a second-order operator has been traded for a symmetric first-order bilinear form. That trade defines the weak formulation of an elliptic problem, makes $-\nabla^2$ manifestly non-negative, and produces the stiffness matrix of :ref[the finite-element method]{to=num.finite-elements}; it is also what Strauss's Dirichlet principle rests on, which identifies the harmonic function with the minimizer of $\tfrac12\int\lvert\nabla w\rvert^2$ among functions with the given boundary values (compare :ref[the Rayleigh–Ritz method]{to=var.rayleigh-ritz}).

In physics the same identity is energy accounting. With $u = v = \phi$ the electrostatic potential and $\nabla^2\phi = -\rho/\varepsilon_0$, (G1) gives $\int \lvert\mathbf{E}\rvert^2 dV = \int \rho\phi\, dV/\varepsilon_0$ for a potential decaying at infinity, equating field energy with the work of assembling the charges — Arfken's Exercise 3.8.4. The Neumann compatibility condition $\oint_S h\, dS = \int_V f\, dV$ is the statement that a body in steady state cannot absorb heat on balance, and in a numerical solver a violated compatibility condition is the standard reason a Neumann solve fails to converge.
:::
