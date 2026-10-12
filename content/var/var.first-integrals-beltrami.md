---
id: var.first-integrals-beltrami
title: First integrals and the Beltrami identity
kind: method
level: core
summary: When the integrand does not involve the unknown function or the independent variable, the second-order Euler-Lagrange equation reduces to a first-order equation, which solves the brachistochrone and the minimal surface of revolution in closed form.
prereqs: [var.euler-lagrange-equation]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §4.2, Cases 1–3 and Example 2, pp. 18–21; cycloid as brachistochrone, p. 26"
    pages: "18-21, 26"
    role: the reduced cases and the catenary as extremal of the surface-area functional
  - work: rhb-2006
    loc: "§22.2.1–22.2.2, Eqs. (22.6) and (22.8), pp. 777–779; cycloid solution, pp. 784–785"
    pages: "777-779, 784-785"
    role: derivation of the first integral by multiplying by y'; cycloid parametrisation
  - work: arfken-2013
    loc: "§22.1, Eqs. (22.19)–(22.21) and Example 22.1.3, pp. 1088–1092"
    pages: "1088-1092"
    role: the soap-film problem, its two catenary branches and the discontinuous solution
  - work: docarmo-2016
    loc: "§5-4, Exercise 4c and Exercise 5a, pp. 361–362"
    pages: "361-362"
    role: the identity y'F_{y'} - F = const and surfaces of revolution of least area
---

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 1, §4.2, pp. 18–19; rhb-2006:§22.2, pp. 777–779"}
Let $F(x, y, p)$ have continuous first partial derivatives, and let $y$ be an extremal of $J[y] = \int_a^b F(x, y, y')\,dx$, that is, $\frac{d}{dx}F_{y'} = F_y$ along $y$.

1. **No $y$ in the integrand.** If $F = F(x, p)$, then $F_{y'}\bigl(x, y'(x)\bigr) = C$ for a constant $C$.
2. **No $x$ in the integrand (Beltrami identity).** If the extremal $y$ is $C^2$, then $F - y'F_{y'}$ is differentiable along $y$ and

   $$
   \frac{d}{dx}\Bigl(F - y'F_{y'}\Bigr) = F_x - y'\Bigl(\frac{d}{dx}F_{y'} - F_y\Bigr) = F_x ,
   $$

   the last step because $y$ is an extremal. Hence if $F = F(y, p)$ carries no explicit $x$, then $F(y, y') - y'\,F_{y'}(y, y') = C$ for a constant $C$. Both hypotheses are needed: the identity differentiates $y'$ and $F_{y'}$ along the curve, and for a $C^2$ curve that is not an extremal the derivative $\frac{d}{dx}F_{y'}$ need not exist when $F$ is merely $C^1$. For instance $F = \tfrac23|p|^{3/2}$ has continuous first partial derivatives, but along $y = x^2/2$ it gives $F_{y'} = \mathrm{sgn}(x)\sqrt{|x|}$, which is not differentiable at $0$.
3. **No $y'$ in the integrand.** If $F = F(x, y)$, the Euler-Lagrange equation is the algebraic relation $F_y(x, y) = 0$, which has no free constants and in general cannot meet two prescribed end values.

The constant $C$ in cases 1 and 2 is called a **first integral** of the Euler-Lagrange equation.
:::

:::proof{provenance=adapted src="rhb-2006:§22.2.2, p. 779"}
Case 1: $F_y = 0$, so the Euler-Lagrange equation says that $F_{y'}$ has zero derivative on $[a,b]$; it is therefore constant. Case 3 is the Euler-Lagrange equation with $F_{y'} = 0$.

Case 2: since $y$ is $C^2$, the chain rule gives $\frac{d}{dx}F(x, y, y') = F_x + F_y\,y' + F_{y'}\,y''$. By the product rule, $\frac{d}{dx}\bigl(y'F_{y'}\bigr) = y''F_{y'} + y'\frac{d}{dx}F_{y'}$; the last derivative exists because $y$ is an extremal, which by :ref[the Euler-Lagrange theorem]{to=var.euler-lagrange-equation} makes $F_{y'}$ along the curve a $C^1$ function of $x$ with derivative $F_y$. Subtracting, the $y''F_{y'}$ terms cancel and the identity follows. If $F_x = 0$ and $y$ is an extremal, the right-hand side is zero, so $F - y'F_{y'}$ is constant. $\square$
:::

:::method{provenance=original}
To solve $J[y] = \int_a^b F\,dx \to$ stationary, $y(a) = A$, $y(b) = B$:

1. Check which variable is missing from $F$. If $y$ is missing, use $F_{y'} = C$. If $x$ is missing, use $F - y'F_{y'} = C$. To use the Beltrami identity you need the extremal to be $C^2$: if $F$ has continuous second partial derivatives and $F_{y'y'} \ne 0$ along the expected solution, the :ref[regularity part]{to=var.euler-lagrange-equation} of the Euler-Lagrange theorem supplies that smoothness.
2. Solve the first-order equation for $y'$ and separate variables. A substitution adapted to the square roots that appear (a trigonometric or hyperbolic one) usually makes the integral elementary. Parametric solutions $x(\theta)$, $y(\theta)$ are acceptable.
3. Fix the remaining constant and $C$ from the two end conditions. Expect zero, one or several solutions; the end conditions are not an initial value problem.
4. Discard spurious solutions. The Beltrami identity is implied by the Euler-Lagrange equation but not conversely: by the identity, a $C^2$ solution of $F - y'F_{y'} = C$ satisfies $y'\,(F_y - \frac{d}{dx}F_{y'}) = 0$, so the Euler-Lagrange equation follows at every point where $y' \ne 0$, while at a point with $y'= 0$ the identity says nothing about it. So a solution of the first-order equation with $y' \ne 0$ throughout is an extremal; curves with $y' = 0$ somewhere — constant solutions in particular — must be checked in the full equation.
5. Compare the values of $J$ among the surviving extremals and with any limiting configurations (curves that leave the admissible class), since the equation is only a necessary condition.
:::

:::example[The brachistochrone]{provenance=adapted src="rhb-2006:pp. 784–785; gelfand-fomin-1963:p. 26"}
A bead slides without friction from rest at the origin to the point $B$ that lies $2$ m to the side and $1$ m below, along a wire $y = y(x)$. Here $y$ is measured *downward* and $g = 9.81\ \mathrm{m\,s^{-2}}$. Which wire is fastest?

1. *Functional.* Energy conservation gives speed $v = \sqrt{2gy}$, and $dt = ds/v$, so

   $$
   T[y] = \int_0^2 \sqrt{\frac{1 + y'^2}{2g\,y}}\;dx ,\qquad y(0) = 0,\ y(2) = 1 .
   $$

   The integrand is singular at $y = 0$. On every subinterval $[\delta, 2]$ where $y > 0$ it is smooth, and a fastest curve is also fastest between any two of its own points, so it is an extremal there.
2. *First integral.* $x$ is missing. With $F = \sqrt{(1 + p^2)/(2gy)}$ we have $F_{pp} = (2gy)^{-1/2}(1 + p^2)^{-3/2} > 0$ wherever $y > 0$, so by step 1 of the method the extremal is $C^2$ there and the Beltrami identity applies. Since $F - pF_p = 1/\sqrt{2gy(1 + p^2)}$, it gives $y\,(1 + y'^2) = 2R$ for a constant $R > 0$.
3. *Solve.* Substitute $y = R(1 - \cos\theta)$. Then $1 + y'^2 = 2/(1 - \cos\theta)$, so $y'^2 = \cot^2(\theta/2)$. Take $dy/dx = \cot(\theta/2)$, positive while the bead descends. Then $dx = dy\,\tan(\theta/2) = 2R\sin^2(\theta/2)\,d\theta$, and with $x = 0$ at $\theta = 0$,

   $$
   x = R(\theta - \sin\theta), \qquad y = R(1 - \cos\theta):
   $$

   an inverted cycloid, generated by a circle of radius $R$ rolling along the horizontal through the start.
4. *End condition.* At $B$ the ratio $x/y = (\theta - \sin\theta)/(1 - \cos\theta)$ must equal $2$. Solving numerically gives $\theta_1 = 3.5084$, and then $R = 1/(1 - \cos\theta_1) = 0.51720$ m. Since $\theta_1 > \pi$, the bead passes the cycloid's lowest point, $2R = 1.0344$ m deep at $x = \pi R = 1.6248$ m, and climbs the last $3.4$ cm to $B$.
5. *Travel time.* Along the cycloid $ds = 2R\sin(\theta/2)\,d\theta$ and $v = 2\sqrt{gR}\,\sin(\theta/2)$, so $dt = \sqrt{R/g}\,d\theta$ and

   $$
   T = \theta_1\sqrt{R/g} = 3.5084\sqrt{0.51720/9.81} = 0.8056\ \mathrm{s}.
   $$

   The straight chute has length $\sqrt5$ m and acceleration $g/\sqrt5$, so it takes $\sqrt{2\cdot 5/g} = 1.0096$ s, about $25\%$ longer.
:::

:::example[Minimal surface of revolution]{provenance=adapted src="gelfand-fomin-1963:Example 2, pp. 20–21; arfken-2013:Example 22.1.3, pp. 1088–1092"}
A soap film spans two coaxial rings of radius $1$ placed at $x = \pm 0.4$. Rotating $y(x) > 0$ about the $x$-axis gives the area

$$
A[y] = 2\pi\int_{-0.4}^{0.4} y\sqrt{1 + y'^2}\,dx ,\qquad y(\pm 0.4) = 1 .
$$

1. *First integral.* $F = y\sqrt{1 + p^2}$ has no $x$, and $F - pF_p = y/\sqrt{1 + p^2}$. So $y/\sqrt{1 + y'^2} = c$ with $0 < c \le y$. Also $F_{pp} = y(1 + p^2)^{-3/2} > 0$, so extremals are $C^2$.
2. *Solve.* $y' = \pm\sqrt{y^2/c^2 - 1}$. Separating variables with $y = c\cosh u$ gives $y = c\cosh\bigl((x - x_0)/c\bigr)$, a catenary.
3. *Spurious solution.* The constant $y = c$ also satisfies step 1 (the cylinder), but the full Euler-Lagrange equation $\frac{d}{dx}\bigl(yy'/\sqrt{1 + y'^2}\bigr) = \sqrt{1 + y'^2}$ fails there: the left side is $0$ and the right side is $1$. So the cylinder is not stationary, as step 4 of the method warns.
4. *End conditions.* Equal end values force $x_0 = 0$, and then $c\cosh(0.4/c) = 1$. This equation has two roots, $c = 0.91074$ and $c = 0.15796$.
5. *Areas.* Since $\sqrt{1 + y'^2} = \cosh(x/c)$, we have $A = 2\pi c\int_{-0.4}^{0.4}\cosh^2(x/c)\,dx = \pi c\bigl(0.8 + c\sinh(0.8/c)\bigr)$. The shallow catenary gives $A = 4.8838$; the deep one gives $A = 6.6013$.
6. *Comparison.* If the film breaks into two flat discs, its area is $2\pi = 6.2832$. That configuration is not the graph of a $C^1$ function, but it is a limit of admissible ones. The shallow catenoid beats it; the deep one does not, and it is not even a local minimum. Numerically, $c\cosh(d/c) = 1$ has a solution only if the half-separation is $d \le 0.6627$. Beyond that there is no catenoid, and the film snaps to the two discs.
:::

:::remark{provenance=original}
**Where the hypotheses are used.** The Beltrami identity differentiates $F(y, y')$ and $y'F_{y'}$ along the curve, so it needs two things: $y \in C^2$, and the existence of $\frac{d}{dx}F_{y'}$ along the curve. The second is automatic along an extremal but can fail for a general $C^2$ curve when $F$ has only continuous first partials, as the example in case 2 shows; assuming $F \in C^2$ also removes the difficulty. The first-integral relation itself makes sense for $C^1$ curves, but deriving it this way does not. Case 1 needs only the Euler-Lagrange equation. Each first integral reflects a symmetry: no $y$ means invariance under $y \mapsto y + \text{const}$, and no $x$ means invariance under $x \mapsto x + \text{const}$. This is the one-dimensional form of :ref[Noether's theorem]{to=var.noether-theorem}.
:::

:::application{provenance=original}
In mechanics, with time as the independent variable, a Lagrangian with no explicit time dependence has the Beltrami first integral $\dot q\,L_{\dot q} - L$, the energy. A Lagrangian with no explicit $q$ conserves the momentum $L_{\dot q}$. In optics a medium stratified in the $x$-direction, with refractive index $n(x)$ constant on the planes $x = \text{const}$, gives travel time proportional to $\int n(x)\sqrt{1 + y'^2}\,dx$, with no $y$. Case 1 then gives $n(x)\,y'/\sqrt{1 + y'^2} = C$, that is, $n(x)\sin\phi = C$, where $\phi$ is the angle between the ray and the normal to the layers. This is Snell's law, used in seismic ray tracing and in atmospheric refraction models.
:::
