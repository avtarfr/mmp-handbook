---
id: var.canonical-equations
title: The canonical equations
kind: theorem
level: core
summary: When velocities can be solved for in terms of momenta, the Legendre transformation turns the n second-order Euler–Lagrange equations into Hamilton's 2n first-order canonical equations, and first integrals are then recognized by a vanishing Poisson bracket.
prereqs: [var.hamilton-principle, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 4, §16 (canonical form of the Euler equations), pp. 67–70; §17 (first integrals, Poisson bracket), pp. 70–71; §18.1 (Legendre transformation, Young's inequality), pp. 71–75"
    pages: "67-75"
    role: canonical variables and Hamiltonian; statement of the canonical system; first integrals and the Poisson-bracket criterion; Legendre transformation as an involution
  - work: evans-2010
    loc: "§3.3.1(b), Theorem 2 (derivation of Hamilton's ODE), pp. 114–115; §3.3.2(a), Theorem 3 (convex duality), pp. 116–118"
    pages: "114-118"
    role: proof route for the partial derivatives of H (chain rule with the defining relation for the momentum); convex duality of L and H
  - work: lee-2013
    loc: "Ch. 22, Poisson brackets, eq. (22.16) and Prop. 22.21, pp. 578–580"
    pages: "578-580"
    role: sign convention of the Poisson bracket; conserved quantities as functions Poisson-commuting with H
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §16, pp. 67–69; evans-2010:§3.3.1(b), eq. (9) and Definition, p. 114"}
Let $L(t, q, v)$ be a $C^2$ function on an open set $\Omega \subset \mathbb{R}\times\mathbb{R}^n\times\mathbb{R}^n$; $v$ is the slot into which the velocity $\dot q$ is substituted.

- The **canonical momentum** belonging to $(t, q, v)$ is $p = L_v(t, q, v) = (\partial L/\partial v_1, \dots, \partial L/\partial v_n)$.
- **Regularity hypothesis (R).** There is an open set $W \subset \mathbb{R}\times\mathbb{R}^n\times\mathbb{R}^n$ (the **phase domain**) and a $C^1$ map $\hat v : W \to \mathbb{R}^n$ such that $(t, q, v) \mapsto (t, q, L_v(t, q, v))$ is a bijection from $\Omega$ onto $W$ with inverse $(t, q, p) \mapsto (t, q, \hat v(t, q, p))$. In words: the velocity can be recovered from the momentum, smoothly.
- The **Hamiltonian** is the function on $W$

  $$
  H(t, q, p) = p\cdot \hat v(t, q, p) - L\bigl(t, q, \hat v(t, q, p)\bigr).
  $$

  Passing from $(t, q, v, L)$ to $(t, q, p, H)$ is the **Legendre transformation** in the velocity variables.
- The **canonical equations** (Hamilton's equations) for a curve $(q(t), p(t))$ in the phase domain are

  $$
  \dot q_i = \frac{\partial H}{\partial p_i}(t, q, p), \qquad \dot p_i = -\frac{\partial H}{\partial q_i}(t, q, p) \qquad (i = 1, \dots, n).
  $$

- The **Poisson bracket** of $C^1$ functions $f, g$ on $W$ is $\{f, g\} = \sum_i \bigl(\partial_{q_i} f\, \partial_{p_i} g - \partial_{p_i} f\, \partial_{q_i} g\bigr)$. Gelfand–Fomin and Lee use this sign; some physics texts use the opposite one.
- A **first integral** of the canonical equations is a $C^1$ function $f(t, q, p)$ on $W$ that is constant along every solution.
:::

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §16, eq. (11), p. 70; gelfand-fomin-1963:Ch. 4, §17, eq. (13), p. 71; evans-2010:§3.3.1(b), Theorem 2, p. 114"}
Assume $L$ is $C^2$ on $\Omega$ and satisfies (R). Then:

1. $H$ is $C^2$ on $W$, and for $(t, q, p) \in W$, with $\hat v = \hat v(t, q, p)$,

   $$
   H_p = \hat v, \qquad H_q = -L_q(t, q, \hat v), \qquad H_t = -L_t(t, q, \hat v).
   $$

2. A $C^2$ curve $q(t)$ with $(t, q, \dot q) \in \Omega$ solves the Euler–Lagrange equations $\frac{d}{dt}L_v - L_q = 0$ if and only if $(q(t), p(t))$, with $p(t) = L_v(t, q, \dot q)$, solves the canonical equations. Conversely, if a $C^1$ curve $(q, p)$ in $W$ solves the canonical equations, then $q$ is $C^2$, $p = L_v(t, q, \dot q)$, and $q$ solves the Euler–Lagrange equations.
3. Along every solution of the canonical equations, $\frac{d}{dt}H(t, q, p) = H_t(t, q, p)$. In particular, if $L$ does not depend on $t$, then $H$ is a first integral.
4. A $C^1$ function $f(t, q, p)$ satisfies $\frac{d}{dt}f = f_t + \{f, H\}$ along every solution. Hence $f$ is a first integral if and only if $f_t + \{f, H\} = 0$ at every point of $W$. If $H$ does not depend on $q_k$, then $p_k$ is a first integral.
:::

:::idea{provenance=original}
The defining relation $p = L_v$ makes the Hamiltonian insensitive, to first order, to how the velocity $\hat v$ moves when $(t, q, p)$ changes. Every term in which $\hat v$ is differentiated has the factor $p - L_v$, which is zero. So the partial derivatives of $H$ are read off as if $\hat v$ were constant. With these formulas, the definition of $p$ becomes the first canonical equation and the Euler–Lagrange equation becomes the second. The time derivative of any function along a solution is then a chain-rule computation, which is where the Poisson bracket comes from.
:::

:::proof{provenance=adapted src="evans-2010:§3.3.1(b), proof of Theorem 2, pp. 114–115; gelfand-fomin-1963:Ch. 4, §16–17, pp. 69–71"}
1. *Derivatives of $H$.* By (R), $L_v(t, q, \hat v(t, q, p)) = p$ on $W$. Differentiate $H = p\cdot\hat v - L(t, q, \hat v)$ by the chain rule, with $\hat v$ evaluated at $(t, q, p)$:

   $$
   H_{p_i} = \hat v_i + \sum_k \bigl(p_k - L_{v_k}\bigr)\,\partial_{p_i}\hat v_k = \hat v_i ,
   $$

   $$
   H_{q_i} = -L_{q_i} + \sum_k \bigl(p_k - L_{v_k}\bigr)\,\partial_{q_i}\hat v_k = -L_{q_i},
   \qquad
   H_t = -L_t + \sum_k \bigl(p_k - L_{v_k}\bigr)\,\partial_t\hat v_k = -L_t .
   $$

   Each bracket vanishes by (R). The right-hand sides $\hat v$, $-L_q(t, q, \hat v)$ and $-L_t(t, q, \hat v)$ are $C^1$, because $L$ is $C^2$ and $\hat v$ is $C^1$, so $H$ is $C^2$.
2. *Euler–Lagrange implies canonical.* Let $q$ be a $C^2$ solution and $p = L_v(t, q, \dot q)$. By (R), $\dot q = \hat v(t, q, p)$, so part 1 gives $\dot q = H_p(t, q, p)$. The Euler–Lagrange equation says $\dot p = L_q(t, q, \dot q)$, and by part 1 again $L_q(t, q, \hat v) = -H_q(t, q, p)$. So $\dot p = -H_q$.
3. *Canonical implies Euler–Lagrange.* Let $(q, p)$ be a $C^1$ solution in $W$. Then $\dot q = H_p = \hat v(t, q, p)$, so by (R) $p = L_v(t, q, \dot q)$. Since $\hat v$ is $C^1$ and $q$, $p$ are $C^1$, $\dot q$ is $C^1$, so $q$ is $C^2$. Finally $\frac{d}{dt}L_v(t, q, \dot q) = \dot p = -H_q = L_q(t, q, \dot q)$, which is the Euler–Lagrange equation.
4. *Time derivative of a function along a solution.* For $f \in C^1(W)$ and a solution $(q, p)$, the chain rule and the canonical equations give

   $$
   \frac{d}{dt}f = f_t + \sum_i\bigl(f_{q_i}\dot q_i + f_{p_i}\dot p_i\bigr) = f_t + \sum_i\bigl(f_{q_i}H_{p_i} - f_{p_i}H_{q_i}\bigr) = f_t + \{f, H\}.
   $$

   - With $f = H$ the bracket $\{H, H\}$ is zero by antisymmetry, so $\frac{d}{dt}H = H_t$. If $L$ does not depend on $t$, then $H_t = -L_t = 0$ by part 1. This proves statement 3.
   - If $f_t + \{f, H\} = 0$ on $W$, then $f$ is constant along every solution. Conversely, suppose $f$ is a first integral and let $(t_0, q_0, p_0) \in W$. Since $H$ is $C^2$, the right-hand side of the canonical equations is $C^1$, hence locally Lipschitz, and by :ref[the existence and uniqueness theorem]{to=ode.existence-uniqueness} there is a solution through $(q_0, p_0)$ at time $t_0$. Along it $f$ is constant, so $f_t + \{f, H\} = 0$ at $(t_0, q_0, p_0)$.
   - If $H$ does not depend on $q_k$, the second canonical equation reads $\dot p_k = 0$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Hypothesis (R)* is used in every step: it makes $H$ well defined and it is the cancellation $p - L_v = 0$ in part 1. By the inverse function theorem, (R) holds near any point where $\det\bigl(\partial^2 L/\partial v_i\partial v_j\bigr) \ne 0$, so the canonical equations always exist locally there. It fails for Lagrangians that are linear in the velocities, where $p = L_v$ does not involve $v$ at all, and for the length Lagrangian $L = |v|$ of a parametrized curve, where every $v$ in the same direction gives the same $p = v/|v|$ and $p\cdot v - L$ is identically $0$.
- *$C^2$ regularity of $L$* makes $H$ of class $C^2$, which is what part 4 needs to apply the existence theorem. Without existence of a solution through each point, a first integral need not satisfy $f_t + \{f, H\} = 0$ at points no solution visits.
:::

:::remark[The Legendre transformation as convex duality]{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §18.1, eqs. (14)–(18), (23), pp. 72–75; evans-2010:§3.3.2(a), Theorem 3, pp. 116–117"}
Part 1 shows that the construction can be run backwards. The "velocity" belonging to $H$ is $H_p = \hat v$, and $\hat v\cdot p - H = L(t, q, \hat v)$. So applying the same recipe to $H$ returns $L$: the transformation is its own inverse. Write $\Omega_{t,q} = \{v : (t, q, v) \in \Omega\}$. If moreover each $\Omega_{t,q}$ is convex and $\partial^2L/\partial v^2$ is positive definite there, then for fixed $(t, q, p)$ the function $v \mapsto p\cdot v - L(t, q, v)$ is concave on $\Omega_{t,q}$ with a critical point at $\hat v$, so

$$
H(t, q, p) = \max_{v \in \Omega_{t,q}}\bigl(p\cdot v - L(t, q, v)\bigr), \qquad\text{hence}\qquad p\cdot v \le L(t, q, v) + H(t, q, p)
$$

for all $v \in \Omega_{t,q}$ (Young's inequality). Evans takes the supremum of $p\cdot v - L$ as the definition of $H$, which also makes sense when $L$ is convex but not differentiable.
:::

:::example[The quadratic Lagrangian]{provenance=original}
Most Lagrangians of mechanics have the form

$$
L = \tfrac12\, v\cdot M(t, q)\, v + A(t, q)\cdot v - V(t, q),
$$

with $M$ a symmetric positive definite matrix. Then $p = Mv + A$, so (R) holds on all of phase space with $\hat v = M^{-1}(p - A)$. Substituting,

$$
H = (p - A)\cdot M^{-1}(p - A) - \tfrac12 (p - A)\cdot M^{-1}(p - A) + V = \tfrac12 (p - A)\cdot M^{-1}(p - A) + V .
$$

For a charged particle, $A$ is the charge times the magnetic vector potential. In a rotating frame, $A$ comes from the frame's rotation, as below.
:::

:::example[A free particle in a rotating frame]{provenance=original}
In :ref[Hamilton's principle]{to=var.hamilton-principle} a free particle of mass $m$ seen from axes rotating at angular velocity $\Omega$ has

$$
\tilde L = \frac m2\,|\dot q + \Omega J q|^2, \qquad J = \begin{pmatrix} 0 & -1\\ 1 & 0\end{pmatrix}, \qquad q = (\xi, \eta).
$$

*Legendre transformation.* This is the quadratic case with $M = mI$, $A = m\Omega Jq$ and $V = -\tfrac{m}{2}\Omega^2|q|^2$, because $|\dot q + \Omega Jq|^2 = |\dot q|^2 + 2\Omega\,\dot q\cdot Jq + \Omega^2|q|^2$. So $p = m(\dot q + \Omega J q)$ and

$$
H = \frac{|p - m\Omega Jq|^2}{2m} - \frac m2\,\Omega^2|q|^2 = \frac{|p|^2}{2m} - \Omega\,\ell, \qquad \ell = \xi p_\eta - \eta p_\xi ,
$$

using $p\cdot Jq = \ell$ and $|Jq| = |q|$.

*Canonical equations.* $\dot\xi = p_\xi/m + \Omega\eta$, $\dot\eta = p_\eta/m - \Omega\xi$, $\dot p_\xi = \Omega p_\eta$, $\dot p_\eta = -\Omega p_\xi$.

*First integrals.* $H$ does not depend on $t$, so it is conserved, although the coordinate change to the rotating frame depends on time. Moreover $\{\ell, |p|^2\} = p_\eta\cdot 2p_\xi - p_\xi\cdot 2p_\eta = 0$ and $\{\ell, \ell\} = 0$, so $\{\ell, H\} = 0$: $\ell$ is conserved, and therefore so is $|p|^2 = 2m(H + \Omega\ell)$.

*Check with numbers.* Take $m = \Omega = 1$ and the motion $q(t) = (\cos t + t\sin t,\ -\sin t + t\cos t)$ found in the Hamilton's-principle example. At $t = 0$: $q = (1, 0)$, $\dot q = (0, 0)$, $p = (0, 1)$, so $\ell = 1$ and $H = \tfrac12 - 1 = -\tfrac12$. At $t = \pi/2$: $q = (\pi/2, -1)$, $\dot q = (t\cos t,\ -t\sin t) = (0, -\pi/2)$, so $p = \dot q + Jq = (0, -\pi/2) + (1, \pi/2) = (1, 0)$. Then $\ell = \tfrac{\pi}{2}\cdot 0 - (-1)\cdot 1 = 1$ and $H = \tfrac12 - 1 = -\tfrac12$, as predicted. The value $-\tfrac12$ is the inertial energy $\tfrac12$ minus $\Omega$ times the inertial angular momentum $1$.
:::

:::application{provenance=original}
The canonical equations are the form in which mechanics is studied as a dynamical system: phase space $(q, p)$ carries a volume preserved by the flow (Liouville's theorem), which underlies equilibrium statistical mechanics, and the Poisson bracket $\{f, H\}$ becomes the commutator in the passage to quantum mechanics. Numerically, long-time simulations in celestial mechanics and molecular dynamics use integrators that respect the canonical structure (see :ref[Symplectic integrators]{to=num.symplectic-integrators}). The rotating-frame Hamiltonian $H = |p|^2/2m - \Omega\ell + V$ is the setting of the restricted three-body problem, where its conservation is known as the Jacobi integral.
:::
