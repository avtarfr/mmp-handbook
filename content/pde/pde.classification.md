---
id: pde.classification
title: Classification of second-order equations
kind: definition
level: core
summary: Defines elliptic, parabolic and hyperbolic second-order equations by the sign of the discriminant (and, in many variables, by the eigenvalue signs of the coefficient matrix), identifies the type with the number of real characteristic directions, reduces the two-variable constant-coefficient equation to Laplace, wave or heat canonical form, and states what well-posedness in Hadamard's sense asks for.
prereqs: [found.partial-derivatives-chain-rule, linalg.quadratic-forms, linalg.hermitian-spectral-theorem]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§1.5, pp. 25–27 (well-posedness: existence, uniqueness, stability; the Laplace Cauchy-problem counterexample on p. 27); §1.6, Thm 1, pp. 28–29 (reduction to canonical form and its proof by completing the square), Example 1, p. 29 (the discriminant test), pp. 29–31 (the n-variable definition by eigenvalue signs) and Example 2, p. 31 (variable coefficients)"
    pages: "25-31"
    role: definition of well-posedness; the canonical-form theorem and the route of its proof; the n-variable classification followed here; the instability example
  - work: stakgold-holst-2011
    loc: "§8.1, Eqs. (8.1.13)–(8.1.15) and the three-case discussion, pp. 465–466, with Remarks 1–3, p. 466; §8.3 introduction, pp. 489–490"
    pages: "465-466, 489-490"
    role: characteristic directions obtained from the Cauchy data by a determinant condition; type defined pointwise by the number of real characteristic directions; which problems are well posed for which type
  - work: hassani-2013
    loc: "Definition 21.1.2 and Theorem 21.1.3, p. 638; Example 21.1.6, pp. 641–642 (the determinant of the three-by-three Cauchy system and Eq. (21.7)); the classification by the signs of the diagonal coefficients, p. 641"
    pages: "638, 641-642"
    role: characteristic hypersurface as one on which the top-order derivatives are not determined by the data; the alternative many-variable classification, which differs from the one followed here
  - work: arfken-2013
    loc: "§9.3, Eqs. (9.11)–(9.22), pp. 409–411, including the discriminant $b^2 - ac$, the characteristic slope (9.22), the change of variables (9.20) with Exercise 9.3.1, and the table of the four named equations on p. 411"
    pages: "409-411"
    role: the $a u_{xx} + 2b u_{xy} + c u_{yy}$ convention, the factorisation picture, the slope of the characteristics and the classification of the four standard equations of physics
  - work: evans-2010
    loc: "§1.1, Definitions (i)–(iv), p. 2 (linear, semilinear, quasilinear, fully nonlinear); §1.2, pp. 3–5 (the named equations); §7.1.1, Definition and Remark, p. 350 (uniform parabolicity and uniform ellipticity in the spatial variable)"
    pages: "2-5, 350"
    role: the orders-of-nonlinearity vocabulary; the uniform-ellipticity form of the definition used in the modern theory
  - work: rhb-2006
    loc: "§20.6.2, Eqs. (20.43)–(20.45), pp. 701–703"
    pages: "701-703"
    role: the alternative $A u_{xx} + B u_{xy} + C u_{yy}$ convention with discriminant $B^2 - 4AC$
---

:::definition[The equation, and how nonlinear it is]{provenance=adapted src="evans-2010:§1.1, Definitions (i)–(iv), p. 2; arfken-2013:§9.3, Eq. (9.17), p. 410"}
Throughout, $u$ is the unknown and subscripts denote partial derivatives. A partial differential equation of order $k$ is **linear** if it is a sum of the derivatives of $u$ of order at most $k$ with coefficients depending on the independent variables alone, equal to a given function of those variables; **semilinear** if its order-$k$ terms have that form and the remaining terms may depend on $u$ and its lower derivatives; **quasilinear** if the coefficients of the order-$k$ derivatives may depend on $u$ and its derivatives of order up to $k-1$; and **fully nonlinear** if it depends nonlinearly on the derivatives of order $k$ themselves.

Classification concerns the order-$k$ terms only, so the whole hierarchy up to quasilinear is covered by one computation. For second order in two variables we write

$$
a(x,y)\,u_{xx} + 2b(x,y)\,u_{xy} + c(x,y)\,u_{yy} = F\!\left(x, y, u, u_x, u_y\right),
\tag{1}
$$

with $a, b, c$ real and not all zero at the point under discussion. The factor $2$ on the mixed term is a convention; it makes the second-order part the quadratic form of the symmetric matrix $\begin{pmatrix} a & b \\ b & c\end{pmatrix}$. The **discriminant** of (1) at a point is

$$
\delta = b^2 - ac .
$$

Riley, Hobson and Bence instead write $A u_{xx} + B u_{xy} + C u_{yy}$, so that their discriminant is $B^2 - 4AC$; the two agree because $B = 2b$, and all statements below are unchanged if $\delta$ is replaced by $B^2 - 4AC$.
:::

:::definition[Elliptic, parabolic, hyperbolic]{provenance=adapted src="stakgold-holst-2011:§8.1, pp. 465–466; strauss-2008:§1.6, Thm 1 and Example 1, pp. 28–29"}
Equation (1) is called, **at the point** $P$,

- **elliptic** if $\delta < 0$ at $P$,
- **parabolic** if $\delta = 0$ at $P$,
- **hyperbolic** if $\delta > 0$ at $P$.

It is called elliptic (parabolic, hyperbolic) on a region if it is so at each of its points. The names come from the conic $a\xi^2 + 2b\xi\eta + c\eta^2 = \text{const}$, which is an ellipse, a parabola or a hyperbola in the same three cases.

The prototypes, with $(x,y)$ read as $(x,t)$ where a time appears, are Laplace's equation $u_{xx} + u_{yy} = 0$ ($\delta = -1$, elliptic), the wave equation $u_{tt} - c^2 u_{xx} = 0$ ($\delta = c^2 > 0$, hyperbolic) and the diffusion equation $u_t - k u_{xx} = 0$ ($\delta = 0$, parabolic, since there is no $u_{tt}$ term and no mixed term).
:::

:::statement[The type counts the real characteristic directions]{provenance=adapted src="stakgold-holst-2011:§8.1, Eqs. (8.1.14)–(8.1.15) and the three cases, pp. 465–466; hassani-2013:Example 21.1.6, Eq. (21.7), pp. 641–642"}
Let $\Gamma$ be a smooth curve in the $x$–$y$ plane, let $P \in \Gamma$, and suppose that $u$ and both of its first derivatives are prescribed along $\Gamma$ (**Cauchy data**). Call $\Gamma$ **characteristic at $P$** if these data together with equation (1) fail to determine all three second derivatives $u_{xx}, u_{xy}, u_{yy}$ at $P$. Then $\Gamma$ is characteristic at $P$ if and only if its direction $(dx, dy)$ there satisfies

$$
a\,dy^2 - 2b\,dx\,dy + c\,dx^2 = 0 .
\tag{2}
$$

Consequently, if $a(P) \ne 0$, the characteristic directions at $P$ are the solutions of

$$
\frac{dy}{dx} = \frac{b \pm \sqrt{b^2 - ac}}{a} ,
\tag{3}
$$

and there are two of them when $\delta > 0$, one when $\delta = 0$, and none (in the reals) when $\delta < 0$. A curve characteristic at each of its points is a **characteristic curve**; where the equation is hyperbolic, integrating the two branches of (3) gives two families of characteristic curves, and where it is parabolic, one family.
:::

:::idea{provenance=original}
Cauchy data on $\Gamma$ give $u_x$ and $u_y$ along $\Gamma$, so differentiating those two functions along $\Gamma$ gives two linear relations among the three second derivatives at $P$. The equation itself gives a third. Three linear equations in three unknowns are solvable exactly when their determinant does not vanish, and that determinant is the quadratic form in $(dx, dy)$ appearing in (2). So the characteristic directions are the null directions of that form, and how many there are is decided by the sign of its discriminant.
:::

:::proof{provenance=adapted src="hassani-2013:Example 21.1.6, pp. 641–642; stakgold-holst-2011:Eq. (8.1.14), p. 466"}
Write $p = u_x$ and $q = u_y$, both known on $\Gamma$ by hypothesis, and let $(dx, dy)$ be a tangent direction to $\Gamma$ at $P$.

**Step 1 (two relations from the data).** Moving along $\Gamma$ by the infinitesimal step $(dx, dy)$ changes $p$ and $q$ by amounts the data already know. Since $p$ and $q$ are differentiable, the chain rule gives

$$
dp = u_{xx}\,dx + u_{xy}\,dy, \qquad dq = u_{xy}\,dx + u_{yy}\,dy ,
$$

with $dp, dq$ computable from the prescribed $p, q$ along $\Gamma$.

**Step 2 (one relation from the equation).** Evaluating (1) at $P$ and using that $u, u_x, u_y$ are known there, the right-hand side $F$ is a known number $-\!f$, so

$$
a\,u_{xx} + 2b\,u_{xy} + c\,u_{yy} = -f .
$$

**Step 3 (solve or not).** Steps 1 and 2 are three linear equations for $(u_{xx}, u_{xy}, u_{yy})$ with coefficient matrix

$$
M = \begin{pmatrix} dx & dy & 0 \\ 0 & dx & dy \\ a & 2b & c \end{pmatrix},
\qquad
\det M = c\,dx^2 - 2b\,dx\,dy + a\,dy^2 .
$$

(The determinant is computed by expanding along the first row.) The system has a unique solution precisely when $\det M \ne 0$, so by the definition of "characteristic at $P$", $\Gamma$ is characteristic at $P$ exactly when $\det M = 0$, which is (2).

**Step 4 (count the directions).** A direction is fixed up to scale, so put $m = dy/dx$ when $dx \ne 0$. Dividing (2) by $dx^2$ gives $a m^2 - 2bm + c = 0$. If $a \ne 0$ this is a genuine quadratic with discriminant $4(b^2 - ac) = 4\delta$, whence the formula (3) and the count two, one or none according to $\delta > 0$, $\delta = 0$, $\delta < 0$. If $a = 0$ then $\delta = -ac + b^2 = b^2 \ge 0$, so the elliptic case cannot occur, and (2) becomes $dy\,(-2b\,dx + c\,dy) = 0$: the direction $dy = 0$ is characteristic, and it is the only one when $b = 0$ (then $\delta = 0$), while a second direction $dy/dx = 2b/c$ appears when $b \ne 0$ and $c \ne 0$ (then $\delta = b^2 > 0$). The count is as stated in both cases. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what the count means.**

- *Cauchy data, not just $u$.* Step 1 needs $u_x$ and $u_y$ along $\Gamma$. If only $u$ is given, there is one relation instead of two and the argument says nothing; the Dirichlet problem is not a Cauchy problem.
- *Three unknowns, three equations.* The determinant condition is what makes the classification a statement about the *second-order coefficients only*. The lower-order terms enter only through the known number $f$ in Step 3, which is why $F$ may depend on $u, u_x, u_y$ in any way at all, linearly or not.
- *Quasilinear equations.* If $a, b, c$ depend on $u, u_x, u_y$ as well as on $x, y$, the argument still works at a point once a solution is fixed there, because those arguments are known from the data. The type can then differ from solution to solution.
- *Why "none" is not the same as "harmless".* The absence of real characteristics means no direction is singled out for propagation, which is why elliptic equations have no wave-like behaviour. It does **not** mean the Cauchy problem for an elliptic equation is solvable; the example below shows it is not.
:::

:::statement[Reduction to canonical form]{provenance=adapted src="strauss-2008:§1.6, Thm 1, pp. 28–29"}
Write the two-variable linear equation with six real constant coefficients as

$$
a_{11}u_{xx} + 2a_{12}u_{xy} + a_{22}u_{yy} + a_1 u_x + a_2 u_y + a_0 u = 0 ,
\tag{4}
$$

whose discriminant is $\delta = a_{12}^2 - a_{11}a_{22}$, and exclude the degenerate case in which $a_{11}, a_{12}, a_{22}$ all vanish. Then some invertible linear change of the independent variables, $(x,y) \mapsto (\xi,\eta)$, turns the second-order part of (4) into exactly

$$
u_{\xi\xi} + u_{\eta\eta} \quad (\delta < 0), \qquad
u_{\xi\xi} - u_{\eta\eta} \quad (\delta > 0), \qquad
u_{\xi\xi} \quad (\delta = 0) ,
$$

up to an overall nonzero factor, while the terms of order one and zero remain terms of order one and zero. Strauss records this as the reduction of (4) to $u_{xx} + u_{yy} + \cdots = 0$, $u_{xx} - u_{yy} + \cdots = 0$ or $u_{xx} + \cdots = 0$, with the dots standing for the lower-order terms, and calls these the elliptic, hyperbolic and parabolic cases respectively. So each of Laplace's equation, the wave equation and the one-dimensional diffusion equation is not merely an instance of its class but a normal form for the whole class.
:::

:::idea{provenance=original}
The second-order part is a quadratic form in the two differentiation operators. Completing the square turns it into $(\partial_x + a_{12}\partial_y)^2$ plus a multiple of $\partial_y^2$, and the sign of that multiple is the sign of $-\delta$. A linear change of variables can be chosen so that the squared operator becomes $\partial_\xi$ and the leftover $\partial_y$ becomes $\partial_\eta$, which is exactly the three canonical forms. The only work beyond the square is arranging $a_{11} \ne 0$ first, which costs at most a swap of the variables or one preliminary rotation.
:::

:::proof{provenance=adapted src="strauss-2008:§1.6, proof of Thm 1, Eqs. (2)–(4), p. 29"}
Linear changes of variable act on the second-order coefficient matrix $A = \begin{pmatrix} a_{11} & a_{12} \\ a_{12} & a_{22}\end{pmatrix}$ by $A \mapsto BAB^{\mathsf T}$, so they multiply $\det A = a_{11}a_{22} - a_{12}^2 = -\delta$ by $(\det B)^2 > 0$ and cannot change the sign of $\delta$. Hence the three cases are mutually exclusive and preserved, and we may normalise freely.

**Step 1 (make $a_{11} = 1$).** Suppose first that some diagonal coefficient is nonzero. If $a_{11} = 0$ and $a_{22} \ne 0$, interchange $x$ and $y$; this is linear and leaves $a_{12}$ and $\delta$ unchanged. So assume $a_{11} \ne 0$ and divide the whole equation by $a_{11}$: the new coefficients are $1$, $a_{12}/a_{11}$, $a_{22}/a_{11}$, and the new discriminant is $\delta/a_{11}^2$, of the same sign. Rename them $1, a_{12}, a_{22}$, so now $\delta = a_{12}^2 - a_{22}$.

**Step 2 (complete the square).** With $\partial_x, \partial_y$ written as operators,

$$
\partial_x^2 + 2a_{12}\partial_x\partial_y + a_{22}\partial_y^2
= \bigl(\partial_x + a_{12}\partial_y\bigr)^2 + \bigl(a_{22} - a_{12}^2\bigr)\partial_y^2
= \bigl(\partial_x + a_{12}\partial_y\bigr)^2 - \delta\,\partial_y^2 ,
$$

as expanding the square confirms. The constant-coefficient operators commute, so no ordering question arises.

**Step 3 (the elliptic case $\delta < 0$).** Put $\beta = \sqrt{-\delta} = (a_{22} - a_{12}^2)^{1/2} > 0$ and change variables by

$$
x = \xi, \qquad y = a_{12}\,\xi + \beta\,\eta ,
$$

which is invertible since $\beta \ne 0$. By the chain rule, $\partial_\xi = \partial_x + a_{12}\partial_y$ and $\partial_\eta = \beta\,\partial_y$. Substituting into Step 2 turns the second-order part into $\partial_\xi^2 + \beta^2 \partial_y^2 = \partial_\xi^2 + \partial_\eta^2$, Laplace's operator. The first-order and zeroth-order terms become first-order and zeroth-order terms in $\xi, \eta$, because the transformation is linear.

**Step 4 (the hyperbolic case $\delta > 0$ with $a_{11} \ne 0$).** Now put $\beta = \sqrt{\delta} > 0$ and use the *same* change of variables $x = \xi$, $y = a_{12}\xi + \beta\eta$. Step 2 becomes $\partial_\xi^2 - \beta^2\partial_y^2 = \partial_\xi^2 - \partial_\eta^2$, the wave operator.

**Step 5 (the parabolic case $\delta = 0$).** Here Step 2 leaves only $(\partial_x + a_{12}\partial_y)^2$. Take $x = \xi$, $y = a_{12}\xi + \eta$, so that $\partial_\xi = \partial_x + a_{12}\partial_y$ and $\partial_\eta = \partial_y$; the second-order part is $\partial_\xi^2$, and the remaining terms are of order $1$ or $0$. This is case 3.

**Step 6 (both diagonal coefficients zero).** If $a_{11} = a_{22} = 0$ then $\delta = a_{12}^2$, and the excluded case $a_{11} = a_{12} = a_{22} = 0$ aside, $a_{12} \ne 0$, so $\delta > 0$: the equation must be hyperbolic, and Step 1 is unavailable. Take $x = \xi + \eta$, $y = \xi - \eta$, so $\partial_\xi = \partial_x + \partial_y$ and $\partial_\eta = \partial_x - \partial_y$, whence

$$
\partial_\xi^2 - \partial_\eta^2 = (\partial_x + \partial_y)^2 - (\partial_x - \partial_y)^2 = 4\,\partial_x\partial_y .
$$

So $2a_{12}u_{xy} = \tfrac{a_{12}}{2}\bigl(u_{\xi\xi} - u_{\eta\eta}\bigr)$, and dividing by $a_{12}/2$ gives case 2. $\square$
:::

:::remark{provenance=original}
**What the reduction does and does not give.** Steps 3 to 5 use a *single* linear map, so for constant coefficients one change of variables works on the whole plane. If $a, b, c$ vary with $x$ and $y$, the same algebra works at each point separately, so the type is still well defined pointwise, but the transformation then varies from point to point and one must integrate (3) to produce coordinates; the canonical form is achieved only locally, and only where the type does not change. Arfken reaches the same conclusion by the explicit substitution $\xi = c^{1/2}x - c^{-1/2}by$, $\eta = c^{-1/2}y$, which requires $c > 0$, and obtains $L = (ac - b^2)\partial_\xi^2 + \partial_\eta^2$; the coefficient $ac - b^2 = -\delta$ again carries the sign that decides the type.
:::

:::definition[Many variables]{provenance=adapted src="strauss-2008:§1.6, pp. 29–31"}
For $n$ variables $x_1, \dots, x_n$ and a linear equation

$$
\sum_{i,j=1}^{n} a_{ij}\,u_{x_i x_j} + \sum_{i=1}^{n} a_i\,u_{x_i} + a_0 u = 0
\tag{5}
$$

with real constants and $a_{ij} = a_{ji}$, let $d_1, \dots, d_n$ be the eigenvalues of $A = (a_{ij})$. A linear change of variables $\xi = Bx$ sends $A$ to $BAB^{\mathsf T}$, and by the spectral theorem for real symmetric matrices there is a rotation $B$ making this diagonal; a further change of scale replaces each nonzero diagonal entry by $\pm 1$. Equation (5) is called

- **elliptic** if $d_1, \dots, d_n$ are either all positive or all negative — equivalently, if $A$ or $-A$ is positive definite;
- **hyperbolic** if $0$ is not among them and the sign pattern is $n-1$ of one sign against a single one of the other;
- **ultrahyperbolic** if $0$ is not among them and each sign occurs two or more times;
- **parabolic** if $0$ occurs exactly once among them and one sign accounts for the remaining $n-1$.

With $x_n = t$, Laplace's and Poisson's equations are elliptic, the wave and Klein-Gordon equations are hyperbolic, and the diffusion equation is parabolic. Ultrahyperbolic equations occur rarely in physics and are not pursued here. For variable coefficients the same test is applied at each point, and the type may differ from region to region.
:::

:::remark{provenance=adapted src="hassani-2013:p. 641; evans-2010:§7.1.1, Definition and Remark, p. 350"}
**Two things worth keeping straight.**

*The classification is a statement about a signature.* Diagonalising $A$ by $A \mapsto BAB^{\mathsf T}$ does not preserve the eigenvalues, only how many are positive, negative and zero; that is Sylvester's law of inertia (see :ref[quadratic forms]{to=linalg.quadratic-forms}). The four cases above are phrased only in terms of those counts, so they are invariant under every invertible linear change of variables, which is what makes the type a property of the equation.

*Sources differ on "parabolic".* Hassani, writing the equation with $(A_{jk})$ already diagonal as $\sum_j a_j u_{x_jx_j} + F = 0$, calls it elliptic at $x_0$ if all $a_j(x_0)$ are nonzero with the same sign, hyperbolic if all are nonzero with exactly one of opposite sign, ultrahyperbolic if all are nonzero but with at least two of each sign, and **parabolic if at least one $a_j(x_0)$ vanishes**. That is weaker than the definition used here, which is Strauss's: it also calls parabolic, for instance, an equation whose coefficient matrix has one zero eigenvalue and both signs among the rest. This unit follows Strauss throughout; readers comparing with Hassani should check which convention a given statement needs. The two agree on all of the standard equations of physics listed above.

A third formulation, standard in the modern theory, replaces signs by a uniform bound: Evans calls $\partial_t + L$ with $Lu = -\sum a_{ij}(x,t)u_{x_ix_j} + \sum b_i u_{x_i} + cu$ *uniformly parabolic* if there is a constant $\theta > 0$ with $\sum_{i,j} a_{ij}(x,t)\xi_i\xi_j \ge \theta|\xi|^2$ for all $(x,t)$ in the region and all $\xi \in \mathbb{R}^n$, so that $L$ is uniformly elliptic in $x$ at each fixed time. This is the pointwise condition "all eigenvalues positive" made quantitative and uniform, which is what the estimates of the modern theory need.
:::

:::definition[Well-posedness in Hadamard's sense]{provenance=adapted src="strauss-2008:§1.5, pp. 25–26"}
A problem consisting of a partial differential equation in a domain together with initial and/or boundary conditions is **well posed** if

1. **existence**: there is at least one solution satisfying all the conditions;
2. **uniqueness**: there is at most one;
3. **stability**: the solution depends on the data in a stable way, in that a small change in the data produces only a small change in the solution.

Condition 3 presupposes a notion of nearness, that is, a norm or metric on the data and on the solutions, and a problem can be well posed for one choice and ill posed for another; which choice is intended must always be said. Too few auxiliary conditions and the problem is *underdetermined*, with many solutions; too many and it is *overdetermined*, with none. Stability is not a mathematical luxury: measured data carry errors, and a problem that magnifies them without bound cannot be solved from measurements at all.
:::

:::example[Cauchy data for Laplace's equation: no stability]{provenance=adapted src="strauss-2008:§1.5, Eq. (2), p. 27"}
Take Laplace's equation $u_{xx} + u_{yy} = 0$ in the upper half-plane $D = \{-\infty < x < \infty,\ y > 0\}$, and prescribe both $u$ and $u_y$ on the boundary $y = 0$. Laplace's equation is elliptic, so by the statement above it has **no** real characteristics anywhere, and the obstruction of a characteristic initial curve is absent. Nevertheless the problem is not well posed. For $n = 1, 2, 3, \dots$ put

$$
u_n(x,y) = \frac{1}{n}\,e^{-\sqrt{n}}\,\sin(nx)\,\sinh(ny) .
$$

1. *Each $u_n$ is a solution.* Differentiating, $\partial_x^2 u_n = -n^2 u_n$ and $\partial_y^2 u_n = +n^2 u_n$, so $u_{n,xx} + u_{n,yy} = 0$ in $D$.
2. *The data go to zero.* On $y = 0$, $\sinh 0 = 0$ gives $u_n(x,0) = 0$, and $\partial_y u_n(x,y) = e^{-\sqrt n}\sin(nx)\cosh(ny)$ gives $\partial_y u_n(x,0) = e^{-\sqrt n}\sin(nx)$. Hence $\sup_x |u_n(x,0)| = 0$ and $\sup_x|\partial_y u_n(x,0)| = e^{-\sqrt n} \to 0$ as $n \to \infty$, and the same is true of every derivative of the data in $x$, since differentiating $k$ times multiplies the bound by $n^k$ and $n^k e^{-\sqrt n} \to 0$.
3. *The solutions do not.* Fix any $y_0 > 0$. Since $\sinh(ny_0) \ge \tfrac12 e^{ny_0 - \log 2}$ for $n y_0 \ge 1$, at the points $x = \pi/(2n)$ we get

   $$
   \bigl|u_n\bigl(\tfrac{\pi}{2n}, y_0\bigr)\bigr| = \frac{e^{-\sqrt n}\sinh(ny_0)}{n} \ \ge\ \frac{e^{\,n y_0 - \sqrt n}}{4n} \longrightarrow \infty .
   $$

   (The inequality for $\sinh$ holds because $\sinh z \ge e^z/4$ as soon as $e^{2z} \ge 2$, hence for $z \ge 1$.) For $y_0 = 1$ and $n = 25$ the bound reads $e^{20}/100 \approx 4.9 \times 10^6$, and the exact value is $e^{-5}\sinh 25/25 \approx 9.70 \times 10^6$, while the data are of size $e^{-5} \approx 6.7\times 10^{-3}$.
4. *Conclusion.* Data arbitrarily close to zero, whose own solution is $u \equiv 0$, produce solutions that are arbitrarily large at every interior height. Stability fails in the supremum norm, so the Cauchy problem for Laplace's equation is ill posed. Compare this with the hyperbolic case, where Cauchy data on a non-characteristic curve do give a unique, stably dependent solution; and note that for elliptic equations it is the *boundary* value problem, with $u$ or $\partial u/\partial n$ given on a closed boundary, that is well posed instead.
:::

:::example{provenance=original}
**(a) Classify and reduce $3u_{xx} + 10u_{xy} + 3u_{yy} = 0$.**

1. *Read off the coefficients in the convention of (1).* $a = 3$, $2b = 10$ so $b = 5$, and $c = 3$. Then $\delta = b^2 - ac = 25 - 9 = 16 > 0$: hyperbolic in the whole plane.
2. *Characteristics.* By (3), $dy/dx = (5 \pm 4)/3$, that is $3$ or $\tfrac13$. Integrating, the two families are $y - 3x = \text{const}$ and $3y - x = \text{const}$.
3. *Canonical form.* Divide by $a_{11} = 3$ to get $u_{xx} + \tfrac{10}{3}u_{xy} + u_{yy} = 0$, so $a_{12} = \tfrac53$, $a_{22} = 1$ and $\delta' = \tfrac{25}{9} - 1 = \tfrac{16}{9}$, with $\beta = \sqrt{\delta'} = \tfrac43$. Step 4 of the proof prescribes $x = \xi$, $y = \tfrac53\xi + \tfrac43\eta$, that is $\xi = x$, $\eta = \tfrac{3y - 5x}{4}$. Substituting gives $3u_{xx} + 10u_{xy} + 3u_{yy} = 3\bigl(u_{\xi\xi} - u_{\eta\eta}\bigr)$, so the equation becomes the wave equation $u_{\xi\xi} - u_{\eta\eta} = 0$.
4. *Check against the factorisation.* The operator factors as $3\partial_x^2 + 10\partial_x\partial_y + 3\partial_y^2 = (3\partial_x + \partial_y)(\partial_x + 3\partial_y)$, so $u = f(x - 3y) + g(3x - y)$ solves it for all twice-differentiable $f, g$; direct substitution confirms this. The level sets of $x - 3y$ have slope $\tfrac13$ and those of $3x - y$ have slope $3$: the arbitrary functions travel along the characteristics found in step 2, as they must.

**(b) An equation of mixed type.** Take the equation of Tricomi type

$$
u_{xx} + y\,u_{yy} = 0 ,
$$

for which $a = 1$, $b = 0$ and $c = y$, so that

$$
\delta = b^2 - ac = -y .
$$

1. *Type.* The equation is hyperbolic in the open half-plane $y < 0$, parabolic on the line $y = 0$, and elliptic in $y > 0$ — for every $x$. One equation thus carries both behaviours, separated by a line on which it degenerates.
2. *Characteristics where they exist.* Equation (2) reads $dy^2 + y\,dx^2 = 0$, so for $y < 0$ the two real slopes are $dy/dx = \pm\sqrt{-y}$, which is also what (3) gives since $a = 1$. Separating variables, $dy/\sqrt{-y} = \pm\,dx$ integrates to $-2\sqrt{-y} = \pm x + \text{const}$, so the two families of characteristic curves are

   $$
   x \pm 2\sqrt{-y} = \text{const} \qquad (y < 0) ,
   $$

   two families of parabolas $y = -\tfrac14(x - \text{const})^2$ tangent to the line $y = 0$ from below. Differentiating this parabola gives $dy/dx = (\text{const} - x)/2 = \pm\sqrt{-y}$, confirming the slopes.
3. *What happens at the degeneracy.* The two slopes $\pm\sqrt{-y}$ coalesce as $y \to 0^-$, so the two families merge into the single family $dy = 0$ predicted on the parabolic line, and every characteristic is tangent to that line. A problem posed across $y = 0$ needs data appropriate to a hyperbolic equation below it and to an elliptic one above it; no single prescription serves both, which is what makes equations of mixed type hard.
:::

:::application{provenance=original}
**Steady compressible flow, and why the type changes at Mach 1.** The linearised potential equation for steady two-dimensional flow past a thin body at free-stream Mach number $M_\infty$ is

$$
(1 - M_\infty^2)\,\phi_{xx} + \phi_{yy} = 0 ,
$$

with $\phi$ the perturbation potential and $x$ along the flow. Here $a = 1 - M_\infty^2$, $b = 0$, $c = 1$, so $\delta = M_\infty^2 - 1$. Subsonic flow ($M_\infty < 1$) is elliptic: there are no characteristics, every point of the flow feels every part of the body, and the computation needs data on a closed boundary around the whole field. Supersonic flow ($M_\infty > 1$) is hyperbolic, with characteristic slopes $dy/dx = \mp 1/\sqrt{M_\infty^2 - 1}$ from (3); these are the Mach lines, inclined at the Mach angle $\mu = \arctan\bigl(1/\sqrt{M_\infty^2-1}\bigr)$, and disturbances travel only along them, which is why a supersonic body influences only the wedge downstream of it. At $M_\infty = 1$ the equation is parabolic and both descriptions break down; transonic flow is modelled instead by equations of mixed type, whose coefficients change sign inside the domain, exactly as in part (b) of the example above.

The same classification governs practical choices elsewhere. It decides which data a solver must be given — Cauchy data on a non-characteristic surface for hyperbolic problems (seismic wave propagation, electromagnetics in the time domain), boundary data on a closed surface for elliptic ones (electrostatics, steady heat conduction, incompressible pressure fields) — and which are hopeless: running diffusion backwards in time, or recovering a source from potential measurements on a surface, are precisely the ill-posed problems whose instability the Laplace example above exhibits, and they are attacked in practice only by regularisation, which deliberately replaces the problem by a nearby well-posed one.
:::
