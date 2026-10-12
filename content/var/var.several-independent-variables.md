---
id: var.several-independent-variables
title: Several independent variables
kind: theorem
level: core
summary: A function of several variables that makes a multiple-integral functional stationary under fixed boundary values satisfies a second-order partial differential equation in divergence form, which gives the minimal-surface equation and the field equations of a Lagrangian density.
prereqs: [var.euler-lagrange-equation, vcalc.divergence-theorem]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 1, §5, Lemma and Eqs. (20)–(25), pp. 22–24"
    pages: "22-24"
    role: statement, multi-dimensional fundamental lemma, minimal surfaces and mean curvature
  - work: evans-2010
    loc: "§8.1.2, Eqs. (4)–(10) and Examples 1–4, pp. 428–431"
    pages: "428-431"
    role: divergence-form equation; Dirichlet principle; minimal surface equation
  - work: strauss-2008
    loc: "§14.3, Examples 2–3 and Eqs. (5)–(8), pp. 397–400"
    pages: "397-400"
    role: the vibrating string as a stationary action; minimal surface equation
  - work: arfken-2013
    loc: "§22.2, Eqs. (22.48)–(22.53) and Example 22.2.3, pp. 1100–1102"
    pages: "1100-1102"
    role: several dependent and independent variables; Laplace's equation
  - work: docarmo-2016
    loc: "§3-5B, Proposition 1 and Eq. (12), pp. 200–202"
    pages: "200-202"
    role: first variation of area equals minus twice the mean curvature
---

:::statement{provenance=adapted src="gelfand-fomin-1963:§5, pp. 22–24; evans-2010:§8.1.2, Eq. (9), p. 429"}
Let $\Omega \subset \mathbb{R}^n$ be a bounded open set whose boundary is regular enough for the :ref[divergence theorem]{to=vcalc.divergence-theorem} (for example piecewise $C^1$). Let $F(x, u, p)$, with $x \in \overline\Omega$, $u \in \mathbb{R}$, $p = (p_1, \dots, p_n) \in \mathbb{R}^n$, have continuous second partial derivatives, and consider

$$
J[u] = \int_\Omega F\bigl(x, u(x), \nabla u(x)\bigr)\,dx , \qquad u = g \ \text{on } \partial\Omega .
$$

If $u \in C^2(\overline\Omega)$ is stationary, that is, $\frac{d}{d\varepsilon}J[u + \varepsilon h]\big|_{\varepsilon=0} = 0$ for every $h \in C^1(\overline\Omega)$ with $h = 0$ on $\partial\Omega$, then

$$
F_u\bigl(x, u, \nabla u\bigr) - \sum_{i=1}^n \frac{\partial}{\partial x_i}\Bigl[F_{p_i}\bigl(x, u, \nabla u\bigr)\Bigr] = 0 \qquad\text{in } \Omega .
$$

The derivative $\partial/\partial x_i$ is the total one: it acts on $x_i$ both directly and through $u$ and $\nabla u$. For several unknown fields $u_1, \dots, u_N$ and $F(x, u_1, \dots, u_N, \nabla u_1, \dots, \nabla u_N)$, the same holds for each field:

$$
\frac{\partial F}{\partial u_\alpha} - \sum_{i=1}^n \frac{\partial}{\partial x_i}\frac{\partial F}{\partial(\partial_i u_\alpha)} = 0, \qquad \alpha = 1, \dots, N .
$$
:::

:::idea{provenance=original}
The argument is the one-variable argument with the divergence theorem in place of integration by parts. The first variation is $\int (F_u h + F_p\cdot\nabla h)$. The second term is the integral of $\operatorname{div}(h F_p)$ minus $h\operatorname{div}F_p$, and the divergence part becomes a boundary integral that vanishes because $h = 0$ there. What remains is $\int(F_u - \operatorname{div}F_p)\,h$, and a ball-shaped bump function shows that the bracket must be zero.
:::

:::proof{provenance=adapted src="evans-2010:pp. 428–429; gelfand-fomin-1963:pp. 22–24"}
**Step 1 (first variation).** Fix an admissible $h$. On the compact set $\overline\Omega \times [-1, 1]$ the function $\varepsilon \mapsto F(x, u + \varepsilon h, \nabla u + \varepsilon\nabla h)$ has a derivative in $\varepsilon$ that is continuous in $(x, \varepsilon)$. The argument of :ref[the first variation]{to=var.functionals-first-variation} (mean value theorem plus uniform continuity) therefore gives

$$
0 = \delta J[u; h] = \int_\Omega \Bigl(F_u\,h + \sum_{i=1}^n F_{p_i}\,\frac{\partial h}{\partial x_i}\Bigr)\,dx ,
$$

with $F_u$, $F_{p_i}$ evaluated at $(x, u(x), \nabla u(x))$.

**Step 2 (divergence theorem).** Let $V(x)$ be the vector field with components $V_i = F_{p_i}(x, u, \nabla u)$. Because $F$ is $C^2$ and $u$ is $C^2$, $V$ is $C^1$ on $\overline\Omega$. The product rule gives $\operatorname{div}(hV) = \nabla h\cdot V + h\operatorname{div}V$, and the divergence theorem gives $\int_\Omega \operatorname{div}(hV)\,dx = \int_{\partial\Omega} h\,V\cdot\nu\,dS = 0$, since $h = 0$ on $\partial\Omega$. Hence

$$
\int_\Omega \nabla h\cdot V\,dx = -\int_\Omega h\operatorname{div}V\,dx, \qquad\text{so}\qquad \int_\Omega \bigl(F_u - \operatorname{div}V\bigr)\,h\,dx = 0 .
$$

**Step 3 (fundamental lemma in $\Omega$).** The function $G = F_u - \operatorname{div}V$ is continuous. Suppose $G(x_0) > 0$ at some $x_0 \in \Omega$ (otherwise replace $G$ by $-G$). Then $G > 0$ on a closed ball $\overline{B} = \{|x - x_0| \le r\} \subset \Omega$. Let $h(x) = (r^2 - |x - x_0|^2)^2$ on $\overline B$ and $h = 0$ elsewhere. This $h$ is $C^1$, because both $h$ and its gradient $-4(r^2 - |x - x_0|^2)(x - x_0)$ vanish on the sphere $|x - x_0| = r$. It also vanishes on $\partial\Omega$ and is positive inside $B$. Then $\int_\Omega G h\,dx > 0$, a contradiction. So $G \equiv 0$ in $\Omega$, which is the stated equation.

**Several fields.** Vary one field $u_\alpha$ at a time, keeping the others fixed, and repeat Steps 1 to 3. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *$u \in C^2$ and $F \in C^2$* are used in Step 2, to make $V = F_p(x, u, \nabla u)$ continuously differentiable so that the divergence theorem applies. In several variables there is no du Bois-Reymond shortcut. Proving that a minimiser in a larger class (a Sobolev space) is smooth is a deep matter. For uniformly convex $F$ it is the De Giorgi-Nash-Moser theory, and it can fail for systems.
- *The boundary condition $h = 0$ on $\partial\Omega$* kills the boundary integral in Step 2. If $u$ is not prescribed on part of the boundary, stationarity also forces $V\cdot\nu = F_p\cdot\nu = 0$ there, the multi-dimensional :ref[natural boundary condition]{to=var.natural-boundary-conditions}. For the Dirichlet integral below it is the Neumann condition $\partial u/\partial\nu = 0$.
- *Stationary, not minimal.* The theorem uses only $\delta J = 0$, so it applies equally to actions such as $\iint(\rho u_t^2 - T u_x^2)\,dx\,dt$, whose solutions are saddle points. The Euler-Lagrange equation of that action is the wave equation $\rho u_{tt} = T u_{xx}$.
:::

:::example[Minimal surfaces]{provenance=adapted src="gelfand-fomin-1963:Example, p. 24; evans-2010:Example 4, pp. 430–431"}
A soap film spanning a wire whose projection bounds $\Omega \subset \mathbb{R}^2$, written as a height function $u(x,y)$, has area $\int_\Omega \sqrt{1 + u_x^2 + u_y^2}\,dx\,dy$. With $F = \sqrt{1 + |p|^2}$ we have $F_u = 0$ and $F_{p} = p/\sqrt{1 + |p|^2}$. The stationarity condition, called the **minimal surface equation**, therefore reads

$$
\operatorname{div}\frac{\nabla u}{\sqrt{1 + |\nabla u|^2}} = 0
\quad\Longleftrightarrow\quad
(1 + u_y^2)\,u_{xx} - 2u_xu_y\,u_{xy} + (1 + u_x^2)\,u_{yy} = 0 .
$$

The second form follows from the first by carrying out the divergence and clearing the factor $(1 + |\nabla u|^2)^{-3/2}$. Geometrically, its left side equals $2(1 + |\nabla u|^2)^{3/2}H$, where $H$ is the mean curvature; a stationary film is therefore a surface with $H = 0$ everywhere (see :ref[surface curvature]{to=geom.surface-curvature}).

*Check on Scherk's surface* $u = \ln(\cos y/\cos x)$ on $|x|, |y| < \pi/2$. We have $u_x = \tan x$, $u_y = -\tan y$, $u_{xx} = \sec^2 x$, $u_{yy} = -\sec^2 y$ and $u_{xy} = 0$. Then

$$
(1 + \tan^2 y)\sec^2 x + (1 + \tan^2 x)(-\sec^2 y) = \sec^2 y\sec^2 x - \sec^2 x\sec^2 y = 0 ,
$$

so the equation holds exactly.
:::

:::example[Poisson's equation on the disc]{provenance=original}
Minimise $J[u] = \int_D \bigl(\tfrac12|\nabla u|^2 - u\bigr)\,dx\,dy$ over the unit disc $D$ with $u = 0$ on the circle.

1. *Equation.* $F = \tfrac12|p|^2 - u$, so $F_u = -1$ and $F_p = p$. The Euler-Lagrange equation $-1 - \operatorname{div}\nabla u = 0$ is $-\Delta u = 1$.
2. *Solution.* The radial function $u = (1 - r^2)/4$ has $\Delta u = u_{rr} + u_r/r = -\tfrac12 - \tfrac12 = -1$ and vanishes at $r = 1$.
3. *Value.* Multiply $-\Delta u = 1$ by $u$ and use Green's identity (the divergence theorem with $u = 0$ on the boundary): $\int_D |\nabla u|^2 = \int_D u$. So $J[u] = -\tfrac12\int_D u = -\tfrac12\cdot 2\pi\int_0^1 \tfrac{1 - r^2}{4}\,r\,dr = -\tfrac{\pi}{16} \approx -0.19635$.
4. *A trial function.* Among $v = c\cos(\pi r/2)$, the energy is a quadratic in $c$. Its minimum is at $c = 32(\pi - 2)/\bigl(\pi^2(\pi^2 + 4)\bigr) \approx 0.26687$ (compare $u(0) = 0.25$), with value $J \approx -0.19395$. This lies above $-\pi/16$, as it must, since $u$ is the minimiser. Indeed $J[u + h] - J[u] = \tfrac12\int_D|\nabla h|^2 \ge 0$.
:::

:::application{provenance=original}
In field theory a Lagrangian density $\mathcal L(\phi, \partial_\mu\phi)$ on space-time gives the field equations $\partial\mathcal L/\partial\phi - \sum_\mu \partial_\mu\bigl(\partial\mathcal L/\partial(\partial_\mu\phi)\bigr) = 0$. For $\mathcal L = \tfrac12\phi_t^2 - \tfrac12|\nabla\phi|^2 - \tfrac12 m^2\phi^2$ this is the Klein-Gordon equation $\phi_{tt} - \Delta\phi + m^2\phi = 0$. Maxwell's equations and the equations of linear elasticity arise the same way from their densities. In engineering, writing a boundary value problem as the minimisation of an energy is the starting point of the finite element method, and the equation in this unit is what that energy minimisation solves. In image processing, total-variation denoising minimises $\int\bigl(|\nabla u| + \tfrac{\mu}{2}(u - f)^2\bigr)$, whose Euler-Lagrange equation is a nonlinear diffusion equation.
:::
