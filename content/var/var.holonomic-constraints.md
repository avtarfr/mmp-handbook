---
id: var.holonomic-constraints
title: Pointwise constraints
kind: method
level: core
summary: To make an integral stationary over curves forced to lie on a surface g = 0, add to the integrand g times a multiplier that is a function of the independent variable; for arc length this shows that geodesics are the curves whose acceleration is normal to the surface, such as great circles on a sphere and helices on a cylinder.
prereqs: [var.several-functions-higher-derivatives, found.lagrange-multipliers, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 2, §12.2, Thm 2, Remarks 1–2 and Example 2, pp. 46–50; geodesics on the cylinder, p. 38"
    pages: "38, 46-50"
    role: statement of the multiplier rule for finite subsidiary conditions; the multiplier as a function of x; geodesics on a sphere as an example
  - work: arfken-2013
    loc: "§22.4, Eqs. (22.69)–(22.78), pp. 1111–1113"
    pages: "1111-1113"
    role: multiplier depending on the independent variable for holonomic constraints; constraint forces
  - work: docarmo-2016
    loc: "§4-4, Def. 8a and Examples 3–4, pp. 249–250"
    pages: "249-250"
    role: geodesics as curves whose normal is the surface normal; great circles and helices
---

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 2, §12.2, Thm 2, p. 46"}
Let $q = (q_1, \dots, q_n)$ be the unknown functions of $t \in [t_0, t_1]$, with $n \ge 2$. Let $F(t, q, p)$ be $C^2$ on an open set $U \subset \mathbb{R}\times\mathbb{R}^n\times\mathbb{R}^n$, and let $g(t, q)$ be $C^2$. Consider

$$
J[q] = \int_{t_0}^{t_1} F\bigl(t, q, q'\bigr)\,dt
$$

over $C^1$ curves with $(t, q, q') \in U$, prescribed $q(t_0)$, $q(t_1)$, and the **pointwise (holonomic) constraint**

$$
g\bigl(t, q(t)\bigr) = 0 \qquad\text{for every } t \in [t_0, t_1] .
$$

Suppose $q \in C^2[t_0, t_1]$ is a weak local extremum and that the gradient $\nabla_q g = (g_{q_1}, \dots, g_{q_n})$ does not vanish at any point $(t, q(t))$. Then there is a continuous function $\lambda(t)$ such that

$$
\frac{d}{dt}F_{q_i'} - F_{q_i} = \lambda(t)\,g_{q_i}\bigl(t, q(t)\bigr), \qquad i = 1, \dots, n ,
$$

that is, $q$ is an extremal of $\int\bigl(F + \lambda(t)\,g\bigr)\,dt$, treated as a functional of $q$ with $\lambda$ fixed. Explicitly, $\lambda = -\bigl(E\cdot\nabla_q g\bigr)/|\nabla_q g|^2$, where $E_i = F_{q_i} - \frac{d}{dt}F_{q_i'}$.
:::

:::idea{provenance=original}
Near any point of the curve, the constraint can be solved for one coordinate in terms of the others. That turns the problem locally into an unconstrained one in the remaining coordinates. Varying those coordinates freely shows that the vector $E$ of Euler-Lagrange expressions has no component along the surface: it is parallel to $\nabla_q g$ at every $t$. The proportionality factor is the multiplier. Unlike the isoperimetric case, there is one constraint for every $t$, so the multiplier is a function of $t$ rather than a single number.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:proof of Thm 2, pp. 46–48"}
Write $g_i = g_{q_i}(t, q(t))$ and $E_i(t) = F_{q_i} - \frac{d}{dt}F_{q_i'}$, evaluated along the curve. Because $F$ is $C^2$ and $q$ is $C^2$, each $F_{q_i'}(t, q, q')$ is $C^1$, so $E_i$ is continuous. It suffices to show that $E$ is parallel to $\nabla_q g$ at every $t$. Then $E = -\lambda\nabla_q g$ with $\lambda = -(E\cdot\nabla_q g)/|\nabla_q g|^2$, which is continuous because $\nabla_q g \ne 0$, and this is the claim.

**Step 1 (local solution of the constraint).** Fix $t_* \in [t_0, t_1]$ and choose $k$ with $g_k(t_*) \ne 0$. Write $\hat q$ for the coordinates other than $q_k$. By the :ref[implicit function theorem]{to=found.implicit-inverse-function}, there are a neighbourhood $N$ of $(t_*, \hat q(t_*))$, an interval $W \ni q_k(t_*)$ and a $C^2$ function $\phi$ on $N$ such that, for $(t, \hat q) \in N$ and $q_k \in W$, $g(t, q) = 0$ holds exactly when $q_k = \phi(t, \hat q)$. Moreover $\phi_{q_i} = -g_{q_i}/g_{q_k}$ for $i \ne k$. By continuity there is an interval $I \ni t_*$, open relative to $[t_0, t_1]$, on which $(t, \hat q(t)) \in N$ and $q_k(t) \in W$. On $I$, therefore, $q_k(t) = \phi(t, \hat q(t))$.

**Step 2 (admissible variations).** Fix $i \ne k$ and a $C^2$ function $\eta$ whose support is a compact subset of $I \cap (t_0, t_1)$. Define the varied curve to agree with $q$ outside $I$, and on $I$ to have $\hat q + \varepsilon\eta\,e_i$ in the $\hat q$-slots and $\phi(t, \hat q + \varepsilon\eta\,e_i)$ in the $k$-th slot. For small $|\varepsilon|$ this curve is $C^2$, lies on the surface, has the same endpoints, and tends to $q$ in the $C^1$ norm as $\varepsilon \to 0$. Its $k$-th component changes at first order by

$$
\zeta(t) = \phi_{q_i}\bigl(t, \hat q(t)\bigr)\,\eta(t) = -\frac{g_i}{g_k}\,\eta(t),
$$

a $C^1$ function with the same support as $\eta$.

**Step 3 (first variation).** The derivative of the integrand in $\varepsilon$ is continuous in $(t, \varepsilon)$, since $\phi$ is $C^2$. Differentiating under the integral sign, as in :ref[the case of several functions]{to=var.several-functions-higher-derivatives}, gives

$$
0 = \int\Bigl(F_{q_i}\,\eta + F_{q_i'}\,\eta' + F_{q_k}\,\zeta + F_{q_k'}\,\zeta'\Bigr)\,dt
= \int\bigl(E_i\,\eta + E_k\,\zeta\bigr)\,dt
= \int\Bigl(E_i - E_k\frac{g_i}{g_k}\Bigr)\eta\,dt .
$$

Here we integrated the $\eta'$ and $\zeta'$ terms by parts; the boundary terms vanish because $\eta$ and $\zeta$ vanish near the ends of their support. The bracket is continuous on $I$. By the :ref[fundamental lemma]{to=var.functionals-first-variation} on subintervals of $I$, $E_i\,g_k = E_k\,g_i$ on $I$, for every $i \ne k$, and trivially for $i = k$.

**Step 4 (conclusion).** On $I$, then, $E = (E_k/g_k)\,\nabla_q g$ is parallel to $\nabla_q g$. Since $t_*$ was arbitrary, this holds on all of $[t_0, t_1]$. $\square$
:::

:::method{provenance=original}
To make $\int F(t, q, q')\,dt$ stationary over curves on $g(t, q) = 0$ with fixed ends:

1. Form $F + \lambda(t)\,g(t, q)$ with an unknown *function* $\lambda$.
2. Write the $n$ Euler-Lagrange equations in $q$ (no equation for $\lambda$). Together with $g = 0$ these are $n + 1$ equations for $n + 1$ unknown functions.
3. Eliminate $\lambda$. Either take the components of the equations tangent to the surface, or solve one equation for $\lambda$ and substitute.
4. Fix the $2n$ constants of integration by the end conditions. Check that $\nabla_q g \ne 0$ along the solution.
5. Alternatively, parametrise the surface and solve an unconstrained problem in the parameters. That avoids $\lambda$ but loses its interpretation as a constraint force.

With several constraints $g_1 = \dots = g_m = 0$ ($m < n$) one uses $F + \sum_j\lambda_j(t)\,g_j$. The analogous theorem needs the gradients $\nabla_q g_j$ to be linearly independent along the curve; we state it without proof.
:::

:::example[Geodesics on a sphere]{provenance=adapted src="gelfand-fomin-1963:Example 2, pp. 49–50"}
Find the shortest curve on the unit sphere $g = x^2 + y^2 + z^2 - 1 = 0$ from $P = (1, 0, 0)$ to $Q = (\tfrac12, \tfrac12, \tfrac1{\sqrt2})$.

1. *Functional.* Length is $\int|r'(t)|\,dt$, with $F = |p|$, which is $C^2$ away from $p = 0$; so we work with regular curves. Length does not depend on the parametrisation, so we may parametrise the extremal by arc length $s$, making $|r'| = 1$.
2. *Equations.* $F_q = 0$ and $F_{p} = p/|p|$, so with $|r'| = 1$ the equations read $\frac{d}{ds}r' = \lambda\nabla g$, that is, $r'' = 2\lambda\,r$: the acceleration is normal to the sphere.
3. *Solve.* $\frac{d}{ds}(r\times r') = r'\times r' + r\times r'' = 0$, so $r\times r' = N$ is a constant vector. It is nonzero, since $r \perp r'$ (differentiate $|r|^2 = 1$) and $|r| = |r'| = 1$. Then $r\cdot N = 0$: the curve lies in the plane through the origin with normal $N$, so it is an arc of a great circle.
4. *Multiplier.* Differentiating $r\cdot r' = 0$ gives $1 + r\cdot r'' = 0$, and $r\cdot r'' = 2\lambda$, so $\lambda = -\tfrac12$ is constant.
5. *Numbers.* $P\cdot Q = \tfrac12$, so the shorter great-circle arc has length $\arccos\tfrac12 = \pi/3 \approx 1.0472$. Explicitly $r(s) = \cos s\,P + \sin s\,u$ with $u = (0, 1/\sqrt3, \sqrt2/\sqrt3)$, and $r(\pi/3) = Q$. The complementary arc, of length $5\pi/3 \approx 5.2360$, satisfies the same equations but is not the shortest: the method yields necessary conditions only.
:::

:::example[Geodesics on a cylinder]{provenance=adapted src="docarmo-2016:Example 4, pp. 249–250"}
On $g = x^2 + y^2 - 1 = 0$, write a unit-speed curve as $r(s) = (\cos\theta(s), \sin\theta(s), z(s))$.

1. *Equations.* As above, $r'' = \lambda\nabla g = 2\lambda(s)\,(\cos\theta, \sin\theta, 0)$. Computing directly,
   $r'' = \bigl(-\theta''\sin\theta - \theta'^2\cos\theta,\ \theta''\cos\theta - \theta'^2\sin\theta,\ z''\bigr)$.
2. *Tangential components.* The $z$-component gives $z'' = 0$. Dotting with $(-\sin\theta, \cos\theta, 0)$, which is tangent to the cylinder and orthogonal to the right side, gives $\theta'' = 0$. So $\theta$ and $z$ are linear in $s$: the geodesics are helices, including horizontal circles and vertical lines as limiting cases. The normal component gives $-\theta'^2 = 2\lambda$, so $\lambda = -\theta'^2/2$.
3. *Numbers.* From $(1, 0, 0)$ to $(-1, 0, \pi)$, $\theta$ may run from $0$ to $\pi$, to $-\pi$, to $3\pi$, and so on, while $z$ runs from $0$ to $\pi$. The lengths are $\sqrt{(\Delta\theta)^2 + \pi^2}$: $\pi\sqrt2 \approx 4.4429$ for $\Delta\theta = \pm\pi$ (two shortest helices) and $\pi\sqrt{10} \approx 9.9346$ for $\Delta\theta = 3\pi$. On the shortest ones, $\theta' = \pi/(\pi\sqrt2) = 1/\sqrt2$, so $\lambda = -\tfrac14$.
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *$\nabla_q g \ne 0$* is used in Step 1 to solve the constraint locally, and again to define $\lambda$. It cannot be dropped. The function $\tilde g = (x^2 + y^2 - 1)^2$ describes the same cylinder, but $\nabla\tilde g = 0$ on it. With $\tilde g$, the multiplier equations would say $r'' = 0$, which the shortest helices violate.
- *$C^2$ smoothness of $F$, $g$ and $q$* makes $E_i$ continuous and $\phi$ twice differentiable, as needed for differentiating under the integral and for the fundamental lemma.
- *Reparametrisation* in the examples relies on the length integrand being positively homogeneous of degree one in $p$. For other integrands the parameter cannot be changed freely.
- The conclusion for arc length, that the acceleration of a unit-speed geodesic is normal to the surface, is the standard characterisation of geodesics in differential geometry (see :ref[geodesics]{to=geom.geodesics}).
:::

:::application{provenance=original}
In mechanics, Hamilton's principle with a holonomic constraint gives equations of motion of the form $m\,\ddot r = -\nabla V + \lambda(t)\nabla g$ (see :ref[Hamilton's principle]{to=var.hamilton-principle}). The term $\lambda\nabla g$ is the force of constraint: the tension in a pendulum rod, or the normal force of a surface on a sliding particle. Computing $\lambda$ tells an engineer when a particle leaves a surface or how strong a rod must be. Constrained molecular-dynamics algorithms such as SHAKE and RATTLE fix bond lengths in exactly this way, by solving for the multipliers at every time step. In general relativity, geodesics of space-time are the extremals of the analogous length or action integral.
:::
