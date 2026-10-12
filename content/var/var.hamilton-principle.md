---
id: var.hamilton-principle
title: Hamilton's principle
kind: application
level: core
summary: Newton's equations for particles moving in a potential are exactly the Euler–Lagrange equations of the action, the time integral of kinetic minus potential energy, and they keep this form in any generalized coordinates, including moving ones.
prereqs: [var.several-functions-higher-derivatives]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 4, §21 (principle of least action, Remarks 1–2), pp. 83–85; Ch. 7, §36.2 (least vs. stationary action), pp. 159–162"
    pages: "83-85,159-162"
    role: set-up and statement for a system of particles; the caveat that the action is stationary rather than least
  - work: arfken-2013
    loc: "§22.2, Hamilton's principle and Examples 22.2.1–22.2.2, pp. 1097–1099"
    pages: "1097-1099"
    role: formulation in generalized coordinates and the point that Lagrange's equations do not depend on the choice of coordinates
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §21, pp. 83–84; arfken-2013:§22.2, pp. 1097–1098"}
Consider $N$ point particles with masses $m_1, \dots, m_N > 0$ and positions $r_1, \dots, r_N \in \mathbb{R}^3$. Collect the positions into one **configuration vector** $x = (r_1, \dots, r_N) \in \mathbb{R}^{3N}$.

- The forces **come from a potential** if there is a $C^2$ function $V(t, x)$ on $\mathbb{R} \times G$, with $G \subset \mathbb{R}^{3N}$ open, such that the force on particle $k$ is $F_k = -\nabla_{r_k} V(t, x)$. Time dependence of $V$ is allowed.
- The **kinetic energy** is $T(\dot x) = \sum_{k} \tfrac12 m_k |\dot r_k|^2$ and the **Lagrangian** is $L(t, x, \dot x) = T(\dot x) - V(t, x)$.
- The **action** of a $C^2$ path $x : [t_0, t_1] \to G$ is the number

$$
\mathcal{S}[x] = \int_{t_0}^{t_1} L\bigl(t, x(t), \dot x(t)\bigr)\, dt .
$$

- A path $x$ is a **stationary path** of the action if $\frac{d}{d\varepsilon}\mathcal{S}[x + \varepsilon h]\big|_{\varepsilon = 0} = 0$ for every $C^2$ function $h : [t_0, t_1] \to \mathbb{R}^{3N}$ with $h(t_0) = h(t_1) = 0$.
- **Generalized coordinates** are given by a $C^2$ map $X : \mathbb{R} \times U \to G$, $U \subset \mathbb{R}^{3N}$ open, such that for each fixed $t$ the map $q \mapsto X(t, q)$ is injective and its Jacobian matrix $X_q = (\partial X_i / \partial q_j)$ is invertible. The coordinates may move with time (a rotating frame, for instance). A path $x(t) = X(t, q(t))$ has velocity $\dot x = X_t + X_q \dot q$, and its Lagrangian in the new coordinates is

$$
\tilde L(t, q, \dot q) = L\bigl(t,\ X(t, q),\ X_t(t, q) + X_q(t, q)\,\dot q\bigr).
$$
:::

:::statement[Hamilton's principle]{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §21, Theorem, pp. 84–85; arfken-2013:§22.2, eqs. (22.37)–(22.38), p. 1098"}
Let $V$ be $C^2$ and let $x : [t_0, t_1] \to G$ be a $C^2$ path. The following are equivalent.

1. $x$ obeys Newton's equations $m_k \ddot r_k = -\nabla_{r_k} V(t, x)$ for $k = 1, \dots, N$ and all $t \in [t_0, t_1]$.
2. $x$ is a stationary path of the action $\mathcal{S}$.
3. For one, and then for every, system of generalized coordinates with $x(t) = X(t, q(t))$ and $q$ of class $C^2$, Lagrange's equations hold:

$$
\frac{d}{dt}\frac{\partial \tilde L}{\partial \dot q_j} - \frac{\partial \tilde L}{\partial q_j} = 0 \qquad (j = 1, \dots, 3N).
$$
:::

:::idea{provenance=original}
In Cartesian coordinates the Euler–Lagrange system of $L = T - V$ is Newton's law term by term, so 1 and 2 are the same statement. For 3, a direct computation shows that the Euler–Lagrange expressions in the new coordinates are the old ones multiplied by the transposed Jacobian $X_q^{\mathsf T}$. An invertible matrix sends a vector to zero only if the vector is zero, so the equations hold in one system exactly when they hold in the other.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §21, pp. 84–85; arfken-2013:§22.2, p. 1098"}
Write $p_k = \partial L / \partial \dot r_k$ and define the **Euler–Lagrange expression** of $L$ along the path,

$$
E_x(t) = \frac{d}{dt} L_{\dot x}\bigl(t, x, \dot x\bigr) - L_x\bigl(t, x, \dot x\bigr) \in \mathbb{R}^{3N},
$$

and $E_q(t)$ in the same way for $\tilde L$ along $q$.

1. *Stationary paths are the solutions of $E_x = 0$.* Because $L$ is $C^2$, differentiating under the integral and integrating the $\dot h$ term by parts gives

   $$
   \frac{d}{d\varepsilon}\mathcal{S}[x + \varepsilon h]\Big|_{\varepsilon=0} = -\int_{t_0}^{t_1} E_x(t)\cdot h(t)\, dt ,
   $$

   with no boundary term because $h(t_0) = h(t_1) = 0$. If $E_x \equiv 0$ the right side vanishes for every $h$. Conversely, if it vanishes for every admissible $h$, then $E_x \equiv 0$ by :ref[the Euler–Lagrange system for several functions]{to=var.several-functions-higher-derivatives} (the fundamental lemma applied to one component at a time).
2. *$E_x = 0$ is Newton's law.* For $L = \sum_k \tfrac12 m_k|\dot r_k|^2 - V$ we have $\partial L/\partial \dot r_k = m_k \dot r_k$ and $\partial L / \partial r_k = -\nabla_{r_k} V$. The $r_k$-block of $E_x$ is therefore $m_k \ddot r_k + \nabla_{r_k} V$. This proves $1 \Leftrightarrow 2$.
3. *How the Euler–Lagrange expression transforms.* Let $x(t) = X(t, q(t))$. We claim

   $$
   E_q(t) = X_q\bigl(t, q(t)\bigr)^{\mathsf T}\, E_x(t), \qquad\text{i.e.}\qquad (E_q)_j = \sum_i \frac{\partial X_i}{\partial q_j}\,(E_x)_i .
   $$

   - Since $\dot x_i = \partial_t X_i + \sum_j (\partial X_i/\partial q_j)\, \dot q_j$, the velocity $\dot x_i$ depends on $\dot q_j$ with coefficient $\partial X_i / \partial q_j$. By the chain rule, $\partial \tilde L / \partial \dot q_j = \sum_i L_{\dot x_i}\, \partial X_i/\partial q_j$.
   - The velocity also depends on $q_j$: $\partial \dot x_i / \partial q_j = \partial_t \partial_{q_j} X_i + \sum_k \partial_{q_k}\partial_{q_j} X_i\, \dot q_k$. Because $X$ is $C^2$ its mixed partial derivatives commute, so this is the time derivative of $\partial X_i / \partial q_j$ along the path. Hence

     $$
     \frac{\partial \tilde L}{\partial q_j} = \sum_i \Bigl( L_{x_i}\, \frac{\partial X_i}{\partial q_j} + L_{\dot x_i}\, \frac{d}{dt}\frac{\partial X_i}{\partial q_j} \Bigr).
     $$

   - By the product rule, $\frac{d}{dt}\, \partial \tilde L/\partial \dot q_j = \sum_i \bigl( \frac{d}{dt} L_{\dot x_i}\bigr)\, \partial X_i/\partial q_j + \sum_i L_{\dot x_i}\, \frac{d}{dt}\, \partial X_i/\partial q_j$.
   - Subtracting the last two lines, the terms containing $\frac{d}{dt}\,\partial X_i/\partial q_j$ cancel and the claim remains.
4. *Conclusion.* The matrix $X_q$ is invertible by the definition of generalized coordinates, so $E_q(t) = 0$ if and only if $E_x(t) = 0$. Thus 3 holds in a given coordinate system exactly when 2 holds, and then it holds in every system. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Forces from a potential* are used in step 2, where $\partial L/\partial r_k$ must equal the force. Friction is not of this form, and $L = T - V$ cannot describe it.
- *$C^2$ regularity* of $V$ and of the path makes $E_x$ continuous, which the fundamental lemma needs in step 1. $C^2$ regularity of $X$ is what lets mixed partial derivatives be exchanged in step 3.
- *Invertibility of $X_q$* is used only in step 4. If there are fewer coordinates than $3N$, for example a pendulum described by one angle, then $X_q$ is a tall matrix and $E_q = X_q^{\mathsf T} E_x = 0$ says only that the vector $E_x$, the mass-weighted acceleration minus the applied force, is orthogonal to every direction the constraint allows. That is precisely the statement that the constraint force does no work in any allowed displacement (an *ideal* constraint). This is why Hamilton's principle, written in coordinates on the constraint surface, gives the correct motion of pendulums and rigid bodies; constraints of this kind are treated in :ref[Pointwise constraints]{to=var.holonomic-constraints}.
:::

:::remark[Stationary, not least]{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §21, Remark 2, p. 85; gelfand-fomin-1963:Ch. 7, §36.2, pp. 159–160"}
The older name "principle of least action" claims more than is true. Take a unit-mass oscillator, $L = \tfrac12(\dot q^2 - \omega^2 q^2)$, on $[0, T]$ with $q(0) = q(T) = 0$. The rest state $q \equiv 0$ solves Lagrange's equation and has action $0$. For the competitor $\varepsilon h$ with $h(t) = \sin(\pi t/T)$,

$$
\mathcal{S}[\varepsilon h] = \frac{\varepsilon^2}{2}\int_0^T \bigl(\dot h^2 - \omega^2 h^2\bigr)\, dt = \frac{\varepsilon^2 T}{4}\Bigl(\frac{\pi^2}{T^2} - \omega^2\Bigr),
$$

which is negative as soon as $T > \pi/\omega$. Over such long intervals the true motion is a stationary point of the action, not a minimum. The threshold $\pi/\omega$ is the first conjugate time, studied in :ref[Conjugate points and Jacobi's condition]{to=var.jacobi-conjugate-points}.
:::

:::example[A free particle seen from a rotating frame]{provenance=original}
A particle of mass $m$ moves in a plane with no forces ($V = 0$). Describe it in coordinates $q = (\xi, \eta)$ that rotate with constant angular velocity $\Omega$:

$$
x = R(\Omega t)\, q, \qquad R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}.
$$

*Lagrangian.* Since $\frac{d}{dt}R(\Omega t) = \Omega R(\Omega t) J$ with $J = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, we get $\dot x = R(\Omega t)(\dot q + \Omega J q)$. Rotations preserve length, so

$$
\tilde L = \frac m2\, |\dot q + \Omega J q|^2 = \frac m2\Bigl[(\dot \xi - \Omega \eta)^2 + (\dot\eta + \Omega \xi)^2\Bigr].
$$

*Lagrange's equations.* For $\xi$: $\partial\tilde L/\partial\dot\xi = m(\dot\xi - \Omega\eta)$ and $\partial \tilde L/\partial \xi = m\Omega(\dot\eta + \Omega\xi)$, so $m(\ddot \xi - \Omega\dot\eta) - m\Omega(\dot \eta + \Omega \xi) = 0$. Doing the same for $\eta$,

$$
\ddot \xi = 2\Omega\dot\eta + \Omega^2 \xi, \qquad \ddot \eta = -2\Omega\dot\xi + \Omega^2\eta .
$$

In vector form this reads $\ddot q = -2\Omega J\dot q + \Omega^2 q$: the term $\Omega^2 q$ is the centrifugal acceleration and $-2\Omega J \dot q = (2\Omega\dot\eta,\ -2\Omega\dot\xi)$ is the Coriolis acceleration. Both came out of the theorem, with no separate argument about non-inertial frames.

*A check with numbers.* Release the particle at rest *in the rotating frame* at $q(0) = (a, 0)$. In the inertial frame it starts at $(a, 0)$ with velocity $R(0)\,\Omega J q(0) = (0, a\Omega)$, so it moves on the straight line $x(t) = (a,\ a\Omega t)$. Hence

$$
q(t) = R(-\Omega t)\, x(t) = \bigl(a\cos\Omega t + a\Omega t \sin\Omega t,\ \ -a\sin\Omega t + a\Omega t\cos\Omega t\bigr).
$$

Substituting into the two equations above makes both residuals vanish identically. At $\Omega t = \pi/2$ the particle is at $q = (\pi a/2,\ -a)$, which for $a = 1$ is $(1.5708, -1)$: seen from the rotating frame, the particle has drifted outward and backward against the rotation.
:::

:::exercise[The elastic pendulum]{provenance=original}
*What it teaches: choosing generalized coordinates adapted to the forces.* A bob of mass $m$ hangs from a fixed point on a spring of stiffness $k$ and natural length $\ell_0$ and moves in a vertical plane under gravity $g$. Using polar coordinates $(r, \theta)$, with $\theta$ measured from the downward vertical, show that

$$
\tilde L = \frac m2\bigl(\dot r^2 + r^2\dot\theta^2\bigr) + mgr\cos\theta - \frac k2 (r - \ell_0)^2,
$$

derive $m\ddot r = mr\dot\theta^2 + mg\cos\theta - k(r - \ell_0)$ and $\frac{d}{dt}(mr^2\dot\theta) = -mgr\sin\theta$, and linearize about the hanging equilibrium. For $m = 0.5$, $k = 50$, $\ell_0 = 0.4$ and $g = 9.81$ (SI units) you should find $r_{\mathrm{eq}} = \ell_0 + mg/k = 0.4981$, a radial frequency $\sqrt{k/m} = 10$ and a swinging frequency $\sqrt{g/r_{\mathrm{eq}}} \approx 4.438$, in radians per second.
:::

:::application{provenance=original}
Hamilton's principle is the standard way to set up equations of motion in mechanics and engineering: one writes down $T$ and $V$ in whatever coordinates suit the problem (joint angles of a robot arm, Euler angles of a spacecraft, normal modes of a molecule) and reads off the equations, with constraint forces never appearing. In celestial mechanics and geophysical fluid dynamics, the rotating-frame Lagrangian of the example above is the starting point for the restricted three-body problem and for the Coriolis terms in atmosphere and ocean models. The same principle with a Lagrangian density gives field equations such as the wave equation (see :ref[Several independent variables]{to=var.several-independent-variables}), and the symmetries of $L$ give conservation laws through :ref[Noether's theorem]{to=var.noether-theorem}.
:::
