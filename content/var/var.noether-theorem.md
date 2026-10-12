---
id: var.noether-theorem
title: Noether's theorem
kind: theorem
level: core
summary: If the action is unchanged by a one-parameter family of transformations of time and coordinates, an explicit combination of momenta and energy is conserved along every motion; time shifts, translations and rotations give conservation of energy, momentum and angular momentum.
prereqs: [var.hamilton-principle]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 4, §20 (invariance of a functional, Noether's theorem, Example 3), pp. 79–83; §22 (conservation laws), pp. 85–88"
    pages: "79-83,85-88"
    role: definition of invariance under a family of transformations; statement of the theorem; energy, momentum and angular momentum as consequences
  - work: evans-2010
    loc: "§8.6.1–8.6.2 (invariant variational problems, Noether's theorem, Example 3), pp. 481–485"
    pages: "481-485"
    role: proof route (differentiate the invariance identity in the parameter, then use the Euler–Lagrange equation)
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §20, Definition and eqs. (45)–(48), pp. 80–81"}
In this unit $L(t, q, v)$ is a $C^2$ Lagrangian on $\mathbb{R}\times G\times\mathbb{R}^n$, $G\subset\mathbb{R}^n$ open, and along a curve $q(t)$ we write

$$
p_i = \frac{\partial L}{\partial v_i}\bigl(t, q, \dot q\bigr), \qquad E = \sum_{i=1}^n \dot q_i\, p_i - L\bigl(t, q, \dot q\bigr)
$$

for the **momenta** and the **energy function**. For a mechanical Lagrangian $L = T - V$ with $T$ quadratic in the velocities, $E = T + V$.

A **one-parameter family of point transformations** is a pair of functions $\theta(\varepsilon, t, q) \in \mathbb{R}$ and $Q(\varepsilon, t, q) \in G$, of class $C^2$ in $(\varepsilon, t, q)$ for $|\varepsilon|$ small, that reduce to the identity at $\varepsilon = 0$: $\theta(0, t, q) = t$ and $Q(0, t, q) = q$. Its **generators** are

$$
\tau(t, q) = \frac{\partial \theta}{\partial \varepsilon}(0, t, q), \qquad \xi(t, q) = \frac{\partial Q}{\partial \varepsilon}(0, t, q) \in \mathbb{R}^n .
$$

Given a $C^2$ curve $q : [a, b] \to G$, put $s_\varepsilon(t) = \theta(\varepsilon, t, q(t))$. For small $|\varepsilon|$ its derivative is close to $1$ on $[a, b]$, so $s_\varepsilon$ is increasing and we may define the **transformed curve** $q^\ast_\varepsilon$ on $[s_\varepsilon(a), s_\varepsilon(b)]$ by $q^\ast_\varepsilon\bigl(s_\varepsilon(t)\bigr) = Q\bigl(\varepsilon, t, q(t)\bigr)$.

The action is **invariant** under the family if, for every $C^2$ curve $q$ in $G$, every interval $[a, b]$ in its domain and every sufficiently small $|\varepsilon|$,

$$
\int_{s_\varepsilon(a)}^{s_\varepsilon(b)} L\Bigl(s,\ q^\ast_\varepsilon(s),\ \frac{dq^\ast_\varepsilon}{ds}(s)\Bigr)\, ds = \int_a^b L\bigl(t, q(t), \dot q(t)\bigr)\, dt .
$$
:::

:::statement[Noether's theorem]{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §20, Theorem (Noether) and Remark, pp. 81–83"}
If the action of $L$ is invariant under a one-parameter family of point transformations with generators $\tau$ and $\xi$, then along every $C^2$ solution $q(t)$ of the Euler–Lagrange equations of $L$ the quantity

$$
I = \sum_{i=1}^n p_i\, \xi_i\bigl(t, q\bigr) - E\, \tau\bigl(t, q\bigr)
$$

is constant.
:::

:::idea{provenance=original}
Write the transformed action as an integral over the original time $t$ and differentiate it with respect to $\varepsilon$ at $\varepsilon = 0$. Invariance on every subinterval forces the integrand of that derivative to vanish at each instant. This gives a pointwise identity, valid on any curve, involving $L$, its partial derivatives and the generators. On a solution of the Euler–Lagrange equations, $\partial L/\partial q$ is $\dot p$ and $\partial L/\partial t$ is $-\dot E$, and the identity collapses to $\frac{d}{dt} I = 0$.
:::

:::proof{provenance=adapted src="evans-2010:§8.6.2, proof of Theorem 1, pp. 482–483; gelfand-fomin-1963:Ch. 4, §20, pp. 81–83"}
Fix a $C^2$ curve $q$ and an interval $[a, b]$. Dots denote derivatives along the curve. Write $\theta_\varepsilon(t) = \theta(\varepsilon, t, q(t))$ and $Q_\varepsilon(t) = Q(\varepsilon, t, q(t))$.

1. *Pull the transformed action back to $[a, b]$.* Substitute $s = \theta_\varepsilon(t)$, so $ds = \dot\theta_\varepsilon\, dt$. By the chain rule $\frac{dq^\ast_\varepsilon}{ds} = \dot Q_\varepsilon / \dot\theta_\varepsilon$. The invariance identity becomes

   $$
   \int_a^b \Lambda(\varepsilon, t)\, dt = \int_a^b L\bigl(t, q, \dot q\bigr)\, dt, \qquad
   \Lambda(\varepsilon, t) = L\Bigl(\theta_\varepsilon,\ Q_\varepsilon,\ \frac{\dot Q_\varepsilon}{\dot\theta_\varepsilon}\Bigr)\, \dot\theta_\varepsilon .
   $$

2. *Invariance on every subinterval gives a pointwise identity.* The left side does not depend on $\varepsilon$. Because $\theta$ and $Q$ are $C^2$ and $q$ is $C^2$, the functions $\dot\theta_\varepsilon = \theta_t + \theta_q\cdot\dot q$ and $\dot Q_\varepsilon$ are $C^1$ in $(\varepsilon, t)$, and so is $\Lambda$, since $L$ is $C^2$. Differentiating under the integral sign therefore gives $\int_a^b \partial_\varepsilon\Lambda(0, t)\, dt = 0$. This holds for every subinterval of the curve's domain, and $\partial_\varepsilon\Lambda(0, \cdot)$ is continuous, so $\partial_\varepsilon \Lambda(0, t) = 0$ for every $t$.
3. *Compute the derivative.* At $\varepsilon = 0$ we have $\theta_0 = t$, $Q_0 = q$, $\dot\theta_0 = 1$ and $\dot Q_0 = \dot q$. Their $\varepsilon$-derivatives are $\tau$, $\xi$, $\dot \tau$ and $\dot \xi$, where $\dot\tau = \frac{d}{dt}\tau(t, q(t))$; for the last two we exchanged $\partial_\varepsilon$ with $\frac{d}{dt}$, which is allowed because the mixed second derivatives of $\theta$ and $Q$ are continuous. The $\varepsilon$-derivative of the velocity slot $\dot Q_\varepsilon/\dot\theta_\varepsilon$ is $\dot\xi - \dot q\,\dot\tau$. Hence

   $$
   0 = \partial_\varepsilon\Lambda(0, t) = L_t\,\tau + L_q\cdot\xi + p\cdot\bigl(\dot\xi - \dot q\,\dot\tau\bigr) + L\,\dot\tau
     = L_t\,\tau + L_q\cdot\xi + p\cdot\dot\xi - E\,\dot\tau . \tag{$\ast$}
   $$

   So far $q$ was any $C^2$ curve.
4. *Use the Euler–Lagrange equations.* Now let $q$ solve them, so $L_q = \dot p$. Then the energy function satisfies $\dot E = -L_t$: differentiating $E = \dot q\cdot p - L$ gives

   $$
   \dot E = \ddot q\cdot p + \dot q\cdot\dot p - L_t - L_q\cdot\dot q - p\cdot\ddot q = \dot q\cdot\bigl(\dot p - L_q\bigr) - L_t = -L_t .
   $$

5. *Assemble.* Substituting $L_q = \dot p$ and $L_t = -\dot E$ in $(\ast)$,

   $$
   0 = -\dot E\,\tau + \dot p\cdot\xi + p\cdot\dot\xi - E\,\dot\tau = \frac{d}{dt}\bigl(p\cdot\xi - E\,\tau\bigr) = \frac{dI}{dt} . \qquad\square
   $$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Invariance on every subinterval* is what turns an integral identity into the pointwise identity $(\ast)$ in step 2. Invariance on a single interval would give only $\int_a^b \partial_\varepsilon\Lambda(0,t)\,dt = 0$.
- *The Euler–Lagrange equations* enter only in step 4. The identity $(\ast)$ holds on every curve; conservation of $I$ holds only on motions.
- *A failure of invariance.* The Lagrangian $L = \tfrac12 e^{\gamma t}\bigl(\dot q^2 - \omega^2 q^2\bigr)$, $\gamma > 0$, has Euler–Lagrange equation $\ddot q + \gamma\dot q + \omega^2 q = 0$, a damped oscillator. It depends on $t$ explicitly, so the action is not invariant under time shifts. Its energy function $E = \tfrac12 e^{\gamma t}(\dot q^2 + \omega^2 q^2)$ obeys $\dot E = -L_t = -\tfrac{\gamma}{2} e^{\gamma t}(\dot q^2 - \omega^2 q^2)$, which is not zero in general.
:::

:::remark[Symmetries up to a total derivative]{provenance=original}
The proof gives slightly more than the statement. Suppose that, instead of invariance, $\partial_\varepsilon \Lambda(0, t) = \frac{d}{dt}\Phi(t, q(t))$ for some $C^1$ function $\Phi$ and every $C^2$ curve. Then step 5 becomes $\frac{d}{dt}(I - \Phi) = 0$, so $I - \Phi$ is conserved. Galilean boosts are the standard case. For $N$ particles with masses $m_k$, total mass $M$ and a potential that depends only on the differences $r_k - r_l$, take $\theta = t$ and $Q_k = r_k + \varepsilon u t$ for a fixed vector $u$. Then $\xi_k = u t$, $\tau = 0$, and $\partial_\varepsilon\Lambda(0,t) = \sum_k m_k\dot r_k\cdot u = \frac{d}{dt}\bigl(M R\cdot u\bigr)$, where $R$ is the centre of mass. The conserved quantity is $u\cdot(P t - M R)$, where $P$ is the total momentum. Since $u$ is arbitrary, $R(t) = R(0) + P t/M$: the centre of mass moves uniformly.
:::

:::example[Energy, momentum and angular momentum]{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §20, Example 3, p. 83; gelfand-fomin-1963:Ch. 4, §22, items 1–3, pp. 86–88"}
Take $N$ particles with $q = (r_1, \dots, r_N)$ and $L = \sum_k \tfrac12 m_k|\dot r_k|^2 - V(t, r_1, \dots, r_N)$, so that $p = (m_1\dot r_1, \dots, m_N\dot r_N)$ and $E = T + V$.

1. *Time shifts:* $\theta = t + \varepsilon$, $Q = q$, so $\tau = 1$ and $\xi = 0$. Shifting a curve in time leaves its action unchanged for every curve exactly when $L$ does not depend on $t$, that is when $\partial V/\partial t = 0$. Then $I = -E$: **energy is conserved**.
2. *Translations:* $\theta = t$, $Q_k = r_k + \varepsilon e$ for all $k$, with $e$ a fixed vector. Velocities are unchanged, so the action is invariant if $V(t, r_1 + \varepsilon e, \dots, r_N + \varepsilon e) = V(t, r_1, \dots, r_N)$. Here $\xi_k = e$, $\tau = 0$ and $I = \sum_k p_k\cdot e$: **the component of total momentum along $e$ is conserved**.
3. *Rotations:* $\theta = t$, $Q_k = R_e(\varepsilon) r_k$, where $R_e(\varepsilon)$ is the rotation by angle $\varepsilon$ about the unit axis $e$. Rotations preserve lengths, so $T$ is unchanged, and the action is invariant if $V$ is unchanged by rotating all particles together. The generator is $\xi_k = e\times r_k$, and $I = \sum_k p_k\cdot(e\times r_k) = e\cdot\sum_k r_k\times p_k$: **the component of total angular momentum along $e$ is conserved**.
:::

:::example[A screw symmetry]{provenance=original}
Here the conserved quantity mixes angular and linear momentum, so it is not one of the familiar three. A particle of unit mass moves in $\mathbb{R}^3$ in the potential

$$
V(x, y, z) = \tfrac12 w^2, \qquad w = -x\sin(z/\kappa) + y\cos(z/\kappa), \qquad \kappa = 0.5 .
$$

The potential vanishes on the helicoid $w = 0$ and grows away from it, so the particle is confined near a twisted ribbon, like a bead in the groove of a screw.

*The symmetry.* Let $\theta = t$ and let $Q(\varepsilon, \cdot)$ rotate $(x, y)$ by angle $\varepsilon$ about the $z$-axis while shifting $z$ by $\kappa\varepsilon$. The direction $(\cos(z/\kappa), \sin(z/\kappa))$ turns by the same angle $\varepsilon$ as $(x, y)$, and $w$ is the component of $(x, y)$ perpendicular to it, so $w$ is unchanged. The kinetic energy is unchanged because the map is a rigid motion. So the action is invariant, with $\tau = 0$ and $\xi = (-y,\ x,\ \kappa)$.

*The conserved quantity.* Noether's theorem gives

$$
I = -y\,p_x + x\,p_y + \kappa\, p_z = \ell_z + \kappa\, p_z ,
$$

where $\ell_z = x p_y - y p_x$ is the $z$-component of angular momentum. As a direct check, Newton's law gives $\dot\ell_z = -(x V_y - y V_x)$ and $\dot p_z = -V_z$, so $\dot I = -\xi\cdot\nabla V$. This is minus the derivative of $V$ along the screw motion, which is $0$.

*Numbers.* Start at $(x, y, z) = (1, 0, 0)$, where $w = 0$, with velocity $(0,\ 0.5,\ 0.3)$. Then $\ell_z = 0.5$, $p_z = 0.3$ and

$$
I = 0.5 + 0.5\times 0.3 = 0.65 .
$$

Integrating the equations of motion numerically (relative tolerance $10^{-12}$) gives, at $t = 10$, $\ell_z \approx 0.661788$ and $p_z \approx -0.023576$. Neither is conserved separately ($\ell_z$ ranges over $[0.5, 0.677]$ on $0 \le t \le 10$), but $\ell_z + 0.5\,p_z = 0.650000$ to the accuracy of the integration. The energy $E = \tfrac12(0.5^2 + 0.3^2) = 0.17$ is also conserved, by item 1 of the previous example.
:::

:::application{provenance=original}
Noether's theorem is how conservation laws are found in practice: one lists the symmetries of the Lagrangian instead of hunting for first integrals. In the Kepler and other central-force problems, rotational symmetry gives angular momentum and hence planar orbits and Kepler's second law. In an axisymmetric magnetic-confinement device (an idealized tokamak), the invariance of a charged particle's Lagrangian under rotations about the symmetry axis conserves its canonical angular momentum about that axis, a mixture of mechanical momentum and the vector potential much as $I$ mixes $\ell_z$ and $p_z$ in the screw example, and this is what keeps the particle's orbit close to a magnetic surface. In field theory the same argument, applied to a Lagrangian density, turns space-time translations into conservation of energy and momentum densities (see :ref[Several independent variables]{to=var.several-independent-variables}). On the Hamiltonian side, a quantity is conserved exactly when its Poisson bracket with the Hamiltonian vanishes (see :ref[The canonical equations]{to=var.canonical-equations}).
:::
