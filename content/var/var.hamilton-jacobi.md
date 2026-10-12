---
id: var.hamilton-jacobi
title: The Hamilton-Jacobi equation
kind: theorem
level: advanced
summary: The action, viewed as a function of the endpoint, solves the first-order Hamilton–Jacobi equation; conversely, a complete integral of that equation produces all solutions of the canonical equations by differentiation and elimination alone (Jacobi's theorem).
prereqs: [var.canonical-equations, found.implicit-inverse-function, found.differentiation-under-integral, pde.first-order-characteristics, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: gelfand-fomin-1963
    loc: "Ch. 4, §23 (geodetic distance, Hamilton–Jacobi equation, Theorems 1 and 2 with Proof 1), pp. 88–93"
    pages: "88-93"
    role: the action as a function of the endpoint and its partial derivatives; statement of the Hamilton–Jacobi equation; route of the proof of Jacobi's theorem
  - work: evans-2010
    loc: "§3.2.5, Example 6 (characteristics for the Hamilton–Jacobi equation), pp. 109–110; §3.3.1, p. 111"
    pages: "109-111"
    role: the canonical equations as the characteristic system of the Hamilton–Jacobi equation
---

:::definition{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §23, eqs. (65)–(72) and Theorem 2, pp. 88–92"}
Let $H(t, q, p)$ be a $C^2$ function on an open phase domain $W \subset \mathbb{R}\times\mathbb{R}^n\times\mathbb{R}^n$, for example the Hamiltonian of a Lagrangian $L$ satisfying the regularity hypothesis (R) of :ref[The canonical equations]{to=var.canonical-equations}. Write $\nabla S = (\partial S/\partial q_1, \dots, \partial S/\partial q_n)$.

- The **Hamilton–Jacobi equation** is the first-order partial differential equation

  $$
  \frac{\partial S}{\partial t} + H\bigl(t, q, \nabla S\bigr) = 0
  $$

  for a $C^1$ function $S(t, q)$ on an open set $D \subset \mathbb{R}\times\mathbb{R}^n$ with $(t, q, \nabla S(t, q)) \in W$ for all $(t, q) \in D$.
- A **complete integral** is a family of solutions $S(t, q, \alpha)$, with parameters $\alpha$ in an open set $A \subset \mathbb{R}^n$, such that $S$ is $C^2$ in all $2n + 1$ variables on an open set $\mathcal{D} \subset \mathbb{R}\times\mathbb{R}^n\times A$ and the mixed Hessian is nonsingular:

  $$
  \det\Bigl(\frac{\partial^2 S}{\partial q_i\,\partial\alpha_j}\Bigr) \ne 0 \quad\text{on } \mathcal{D}.
  $$

- **Action as a function of the endpoint.** Fix a starting event $(t_0, q_0)$. A **field of extremals from $(t_0, q_0)$** is a $C^2$ map $(t, a) \mapsto \mathsf{Q}(t, a)$ on $[t_0, t_1)\times A$, $A \subset \mathbb{R}^n$ open, such that each $\mathsf{Q}(\cdot, a)$ solves the Euler–Lagrange equations of $L$ with $\mathsf{Q}(t_0, a) = q_0$, and $\Psi(t, a) = (t, \mathsf{Q}(t, a))$ is injective on $(t_0, t_1)\times A$ with $\det \mathsf{Q}_a \ne 0$ there. By the :ref[inverse function theorem]{to=found.implicit-inverse-function} $D = \Psi\bigl((t_0, t_1)\times A\bigr)$ is open and $\Psi^{-1}$ is $C^1$, so every $(t, q) \in D$ is reached by exactly one extremal of the field, with label $a(t, q)$. The **action function** is

  $$
  S(t, q) = \int_{t_0}^{t} L\bigl(s,\ \mathsf{Q}(s, a),\ \partial_s\mathsf{Q}(s, a)\bigr)\, ds, \qquad a = a(t, q).
  $$
:::

:::statement{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §23, eqs. (69)–(72), p. 90, and Theorem 2 (Jacobi), pp. 91–93"}
**(a) The action solves the Hamilton–Jacobi equation.** Let $L$ be $C^2$ and satisfy (R), with Hamiltonian $H$, and let $S$ be the action function of a field of extremals from $(t_0, q_0)$. Then $S$ is $C^1$ on $D$,

$$
\nabla S(t, q) = L_v\bigl(t, q, \partial_t\mathsf{Q}(t, a)\bigr) \quad (\text{the momentum of the extremal arriving at } (t, q)), \qquad \frac{\partial S}{\partial t} = -H\bigl(t, q, \nabla S\bigr).
$$

**(b) Characteristics.** Let $S \in C^2(D)$ solve the Hamilton–Jacobi equation. If a $C^1$ curve $q(t)$ in $D$ satisfies $\dot q = H_p\bigl(t, q, \nabla S(t, q)\bigr)$, then $q(t)$ together with $p(t) = \nabla S(t, q(t))$ solves the canonical equations, and $\frac{d}{dt}S(t, q(t)) = p\cdot\dot q - H$.

**(c) Jacobi's theorem.** Let $S(t, q, \alpha)$ be a complete integral, and fix $\alpha \in A$ and $\beta \in \mathbb{R}^n$.

1. If a $C^1$ curve $q(t)$, with $(t, q(t), \alpha) \in \mathcal{D}$, satisfies the $n$ equations
   $$
   \frac{\partial S}{\partial \alpha_j}\bigl(t, q(t), \alpha\bigr) = \beta_j \qquad (j = 1, \dots, n),
   $$
   then $q(t)$ and $p(t) = \nabla S\bigl(t, q(t), \alpha\bigr)$ solve the canonical equations.
2. Every solution of the canonical equations whose value at some time $t_\ast$ satisfies $p(t_\ast) = \nabla S(t_\ast, q(t_\ast), \alpha_\ast)$ for some $\alpha_\ast$ with $(t_\ast, q(t_\ast), \alpha_\ast) \in \mathcal{D}$ is, near $t_\ast$, of the form in 1, with $\alpha = \alpha_\ast$ and $\beta = \partial_\alpha S(t_\ast, q(t_\ast), \alpha_\ast)$.

So the $2n$ constants $(\alpha, \beta)$ give a $2n$-parameter family of motions, obtained without integrating the canonical equations; by 2 this family contains every motion whose momentum at some time $t_\ast$ equals $\nabla S(t_\ast, q(t_\ast), \alpha)$ for some admissible $\alpha$.
:::

:::idea{provenance=original}
For (a), vary the endpoint of the extremal. Because the path is an extremal, the change in action comes only from the endpoint, through the momentum: moving the endpoint by $\delta q$ at fixed time changes $S$ by $p\cdot\delta q$, and waiting a time $\delta t$ changes it by $(L - p\cdot\dot q)\,\delta t = -H\,\delta t$. For (b), a solution $S$ assigns a momentum $\nabla S$ to every point; moving along the velocity field $H_p$ and differentiating the equation in $q$ shows that this momentum evolves by $\dot p = -H_q$. So the canonical equations are the characteristic equations of the Hamilton–Jacobi equation. For (c), the quantities $\partial S/\partial\alpha_j$ do not change along such characteristics, because the equation holds for every $\alpha$. Fixing their values pins down the curve.
:::

:::proof{provenance=adapted src="gelfand-fomin-1963:Ch. 4, §23, pp. 89–93"}
*Part (a).* Put $\sigma(t, a) = \int_{t_0}^t L\bigl(s, \mathsf{Q}, \partial_s\mathsf{Q}\bigr)\, ds$ on $[t_0, t_1)\times A$ and $P(t, a) = L_v\bigl(t, \mathsf{Q}, \partial_t\mathsf{Q}\bigr)$, the momentum along the extremal with label $a$.

1. *Derivatives of $\sigma$.* By the fundamental theorem of calculus, $\partial_t\sigma = L\bigl(t, \mathsf{Q}, \partial_t\mathsf{Q}\bigr)$. The integrand is $C^1$ in $a$ because $L$ is $C^2$ and $\mathsf{Q}$ is $C^2$, so we may :ref[differentiate under the integral sign]{to=found.differentiation-under-integral}:

   $$
   \frac{\partial\sigma}{\partial a_j} = \int_{t_0}^t \Bigl( L_q\cdot \partial_{a_j}\mathsf{Q} + L_v\cdot \partial_s\partial_{a_j}\mathsf{Q} \Bigr)\, ds ,
   $$

   where we used $\partial_{a_j}\partial_s\mathsf{Q} = \partial_s\partial_{a_j}\mathsf{Q}$ ($\mathsf{Q}$ is $C^2$).
2. *Use that each curve is an extremal.* Along $\mathsf{Q}(\cdot, a)$ the Euler–Lagrange equation gives $L_q = \partial_s P$. The integrand is therefore $\partial_s\bigl(P\cdot\partial_{a_j}\mathsf{Q}\bigr)$, and

   $$
   \frac{\partial\sigma}{\partial a_j}(t, a) = P(t, a)\cdot\partial_{a_j}\mathsf{Q}(t, a) - P(t_0, a)\cdot\partial_{a_j}\mathsf{Q}(t_0, a) = P(t, a)\cdot\partial_{a_j}\mathsf{Q}(t, a),
   $$

   because every extremal of the field starts at $q_0$, so $\mathsf{Q}(t_0, a)$ does not depend on $a$ and $\partial_{a_j}\mathsf{Q}(t_0, a) = 0$.
3. *Transfer to $S$.* On $(t_0, t_1)\times A$ we have $S\bigl(t, \mathsf{Q}(t, a)\bigr) = \sigma(t, a)$, and $S = \sigma\circ\Psi^{-1}$ is $C^1$. The chain rule gives

   $$
   \nabla S\cdot\partial_{a_j}\mathsf{Q} = \partial_{a_j}\sigma = P\cdot\partial_{a_j}\mathsf{Q} \quad (j = 1, \dots, n), \qquad \partial_t S + \nabla S\cdot\partial_t\mathsf{Q} = \partial_t\sigma = L .
   $$

   The vectors $\partial_{a_j}\mathsf{Q}$ form the invertible matrix $\mathsf{Q}_a$, so the first set of equations forces $\nabla S = P$. The second then gives $\partial_t S = L - P\cdot\partial_t\mathsf{Q}$. By (R), $\partial_t\mathsf{Q} = \hat v(t, q, P)$, so the right side is $-H(t, q, P) = -H(t, q, \nabla S)$.

*Part (b).* Let $p(t) = \nabla S(t, q(t))$; it is $C^1$ because $S$ is $C^2$.

4. Differentiating along the curve, $\dot p_i = \partial_t\partial_{q_i}S + \sum_k \partial_{q_k}\partial_{q_i}S\;\dot q_k$.
5. Differentiating the Hamilton–Jacobi equation with respect to $q_i$ (allowed since $S$ is $C^2$ and $H$ is $C^1$), with $H$ and its derivatives evaluated at $(t, q, \nabla S)$:

   $$
   \partial_{q_i}\partial_t S + H_{q_i} + \sum_k H_{p_k}\,\partial_{q_i}\partial_{q_k}S = 0 .
   $$

6. Mixed partials of $S$ commute, and $\dot q_k = H_{p_k}$ by hypothesis. Subtracting the two lines gives $\dot p_i = -H_{q_i}$. Together with $\dot q = H_p$ these are the canonical equations. Finally $\frac{d}{dt}S(t, q(t)) = \partial_t S + \nabla S\cdot\dot q = -H + p\cdot\dot q$.

*Part (c).* All derivatives of $H$ are evaluated at $(t, q, \nabla S(t, q, \alpha))$.

7. *Differentiate the equation in the parameters.* For each fixed $\alpha$ the function $S(\cdot, \cdot, \alpha)$ solves the Hamilton–Jacobi equation, so the identity holds on $\mathcal{D}$ and may be differentiated in $\alpha_j$:

   $$
   \partial_{\alpha_j}\partial_t S + \sum_k H_{p_k}\,\partial_{\alpha_j}\partial_{q_k} S = 0 .
   $$

8. *Differentiate the defining relations along the curve.* Since $\partial_{\alpha_j}S(t, q(t), \alpha) = \beta_j$ is constant in $t$,

   $$
   \partial_t\partial_{\alpha_j}S + \sum_k \partial_{q_k}\partial_{\alpha_j}S\;\dot q_k = 0 .
   $$

9. *Use the nondegeneracy.* Subtracting step 7 from step 8, and exchanging mixed partials of the $C^2$ function $S$,

   $$
   \sum_k \frac{\partial^2 S}{\partial q_k\,\partial\alpha_j}\,\bigl(\dot q_k - H_{p_k}\bigr) = 0 \qquad (j = 1, \dots, n).
   $$

   The matrix is nonsingular, so $\dot q = H_p\bigl(t, q, \nabla S(t, q, \alpha)\bigr)$. Part (b), applied to $S(\cdot, \cdot, \alpha)$, now shows that $(q, p)$ solves the canonical equations. This proves 1.
10. *Every solution arises this way.* Let $(\bar q, \bar p)$ be a solution with $\bar p(t_\ast) = \nabla S(t_\ast, q_\ast, \alpha_\ast)$, where $q_\ast = \bar q(t_\ast)$, and set $\beta = \partial_\alpha S(t_\ast, q_\ast, \alpha_\ast)$. The map $q \mapsto \partial_\alpha S(t, q, \alpha_\ast)$ has invertible Jacobian (the transpose of the mixed Hessian), so by the :ref[implicit function theorem]{to=found.implicit-inverse-function} the equations $\partial_\alpha S(t, q, \alpha_\ast) = \beta$ define a $C^1$ curve $q(t)$ near $t_\ast$ with $q(t_\ast) = q_\ast$. By 1, it gives a solution $(q, p)$ of the canonical equations with $p(t_\ast) = \nabla S(t_\ast, q_\ast, \alpha_\ast) = \bar p(t_\ast)$. The right-hand side of the canonical equations is $C^1$ because $H$ is $C^2$, so by :ref[uniqueness of solutions]{to=ode.existence-uniqueness} the two solutions coincide near $t_\ast$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *The field condition in (a)*, that each $(t, q)$ is reached by exactly one extremal of the family with $\det\mathsf{Q}_a \ne 0$, is used in step 3 to solve for $\nabla S$. It fails where neighbouring extremals cross. For the oscillator $H = p^2/2m + \tfrac12 m\omega^2 q^2$ with $q_0 = 0$, $t_0 = 0$, the extremals $\mathsf{Q}(t, a) = (a/\omega)\sin\omega t$ form a field for $0 < t < \pi/\omega$, and the action function is $S = \tfrac12 m\omega\, q^2\cot\omega t$, which solves the Hamilton–Jacobi equation there. At $t = \pi/\omega$ every extremal returns to $q = 0$ and $S$ blows up. These crossing points are the conjugate points of :ref[Conjugate points and Jacobi's condition]{to=var.jacobi-conjugate-points}.
- *The fixed starting point* is used in step 2. If the extremals started from different points, a boundary term at $t_0$ would remain.
- *The nondegeneracy $\det(\partial^2 S/\partial q\,\partial\alpha) \ne 0$* is used in step 9 to cancel the matrix, and in step 10 for the implicit function theorem. A family of solutions with fewer than $n$ effective parameters, such as $S$ not depending on some $\alpha_j$, gives too few equations to determine $q(t)$.
- *$C^2$ regularity of $S$* is used in step 6 and step 9, where mixed partial derivatives of $S$ are exchanged, and in step 7, where the Hamilton–Jacobi equation is differentiated in $\alpha$. (Step 1 exchanges mixed partials of the field map $\mathsf{Q}$, which is $C^2$ by hypothesis; $S$ plays no part there.) Under the hypotheses of (a) the action function is in fact $C^2$, so (b) applies to it directly: $\nabla S = L_v\bigl(t, q, \partial_t\mathsf{Q}\circ\Psi^{-1}\bigr)$ is $C^1$, because $L$ is $C^2$, $\partial_t\mathsf{Q}$ is $C^1$ and $\Psi^{-1}$ is $C^1$; and then $\partial_t S = -H(t, q, \nabla S)$ is $C^1$ because $H$ is $C^2$.
:::

:::remark[Relation to the method of characteristics]{provenance=adapted src="evans-2010:§3.2.5, Example 6, pp. 109–110"}
When $H$ is linear in $p$, say $H = b(t, q)\cdot p + c(t, q)$, the Hamilton–Jacobi equation is the linear equation $S_t + b\cdot\nabla S = -c$ treated in :ref[First-order equations and characteristics]{to=pde.first-order-characteristics}. Its characteristic curves solve $\dot q = b = H_p$, and along them $S$ changes at the rate $-c = p\cdot H_p - H$. Part (b) is exactly this, extended to a general nonlinear $H$. The new feature is that the characteristic speed $H_p$ depends on the unknown slope $\nabla S$, so the slope must be carried along the characteristic too, and it evolves by $\dot p = -H_q$. In this sense the canonical equations are the characteristic system of the Hamilton–Jacobi equation, and conversely a solution of the PDE can be built by solving the canonical equations.
:::

:::example[Vertical throw]{provenance=original}
A ball of mass $m$ moves vertically in uniform gravity $\gamma$, so $H(q, p) = p^2/2m + m\gamma q$, with $q$ the height.

*Action function (part (a)).* The extremals from $(t_0, q_0) = (0, 0)$ are $\mathsf{Q}(t, a) = a t - \tfrac12\gamma t^2$, and for $t > 0$ the label of the extremal through $(t, q)$ is $a = (q + \tfrac12\gamma t^2)/t$. Integrating $L = \tfrac12 m\dot{\mathsf{Q}}^2 - m\gamma\mathsf{Q}$ along it gives

$$
S(t, q) = \frac{m q^2}{2t} - \frac{m\gamma q t}{2} - \frac{m\gamma^2 t^3}{24}.
$$

Then $\nabla S = m q/t - m\gamma t/2 = m(a - \gamma t)$, which is the momentum $m\dot{\mathsf{Q}}$ at time $t$. A direct computation gives $S_t + (S_q)^2/2m + m\gamma q = 0$, as part (a) asserts.

*A complete integral (part (c)).* Try a solution affine in $q$, $S = (\alpha - m\gamma t)\,q + f(t)$. Then $S_q = \alpha - m\gamma t$, and the equation becomes $f'(t) + (\alpha - m\gamma t)^2/2m = 0$, so

$$
S(t, q, \alpha) = (\alpha - m\gamma t)\, q + \frac{(\alpha - m\gamma t)^3}{6 m^2\gamma}, \qquad \frac{\partial^2 S}{\partial q\,\partial\alpha} = 1 \ne 0 .
$$

Jacobi's theorem gives the motion by differentiation alone:

$$
\beta = \frac{\partial S}{\partial\alpha} = q + \frac{(\alpha - m\gamma t)^2}{2m^2\gamma}
\quad\Longrightarrow\quad
q(t) = \beta - \frac{(\alpha - m\gamma t)^2}{2m^2\gamma}, \qquad p(t) = \frac{\partial S}{\partial q} = \alpha - m\gamma t .
$$

So $\alpha$ is the momentum at $t = 0$ and $\beta$ is the height at which $p = 0$, the top of the flight.

*Numbers.* Take $m = 2\ \mathrm{kg}$ and $\gamma = 9.8\ \mathrm{m/s^2}$, and throw the ball upward from $q(0) = 1\ \mathrm{m}$ at $4.9\ \mathrm{m/s}$. Then $\alpha = 9.8\ \mathrm{kg\,m/s}$ and

$$
\beta = 1 + \frac{9.8^2}{2\cdot 2^2\cdot 9.8} = 1 + 1.225 = 2.225\ \mathrm{m}.
$$

The top is reached when $p = 0$, at $t = \alpha/(m\gamma) = 0.5\ \mathrm{s}$. At $t = 1\ \mathrm{s}$ the formulas give $q = 2.225 - 1.225 = 1\ \mathrm{m}$ and $p = -9.8\ \mathrm{kg\,m/s}$: the ball is back at its starting height, moving down at its launch speed, as energy conservation requires.
:::

:::application{provenance=original}
In geometrical optics the Hamilton–Jacobi equation becomes the eikonal equation $|\nabla S| = n(x)$ for the optical path length $S$; its level sets are wavefronts and its characteristics are light rays, which is how ray tracing and wavefront propagation are related. In quantum mechanics, inserting $\psi = e^{iS/\hbar}$ into the Schrödinger equation and keeping the leading order in $\hbar$ gives the Hamilton–Jacobi equation, the starting point of the WKB approximation. In celestial mechanics, finding a complete integral by separating variables (for example $S = -Et + W(q)$ when $H$ does not depend on $t$) is the classical route to the Kepler orbits and to action–angle variables. In optimal control, the value function of a control problem satisfies a Hamilton–Jacobi–Bellman equation of the same form.
:::
