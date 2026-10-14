---
id: num.symplectic-integrators
title: Symplectic integrators
kind: method
level: advanced
summary: Builds the Stormer-Verlet (leapfrog) step for a separable Hamiltonian as a sandwich of three shears, proves from $\Psi'^{\mathsf T}J\Psi' = J$ that it is symplectic for every step size, reversible and of order exactly $2$, shows that for the harmonic oscillator it conserves a shifted energy exactly so that $|H(z_n) - H(z_0)| \le \omega^2h^2\tilde H_0/(4 - \omega^2h^2)$ for all $n$, and confirms the bound numerically at $0.00125$ over $10^6$ steps against a steady fourth-order Runge-Kutta drift.
prereqs: [num.ode-integrators, var.canonical-equations, found.taylor-theorem, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§26.4: Def. 26.4.1 (nondegenerate 2-form, symplectic vector space, symplectic transformation), p. 801; Prop. 26.4.6 (the symplectic transformations of a symplectic vector space form a group under composition), p. 803; the criterion that a matrix $A$ is symplectic exactly when $A^{t}JA = J$, with $J$ the block matrix built from the $n \\times n$ identity, p. 804"
    pages: "801-804"
    role: the definition of a symplectic transformation, the matrix criterion $A^{\mathsf T}JA = J$ that is used here as the working definition of a symplectic map, and the group property of symplectic transformations under composition
  - work: lee-2013
    loc: "Ch. 22: Hamiltonian vector fields and their coordinate formula (22.9), pp. 574-575; Prop. 22.16(a) (a function is constant along every integral curve of its own Hamiltonian vector field), p. 575; symplectic vector fields and Prop. 22.17 (a vector field is symplectic exactly when it is locally Hamiltonian), pp. 575-576; Hamiltonian systems, Hamiltonian flows and Hamilton's equations (22.11), p. 576; Example 22.18 (the $n$-body problem, its potential energy and its Hamiltonian), pp. 576-577"
    pages: "574-577"
    role: Hamilton's equations as the system to be integrated; exact conservation of the Hamiltonian along the true flow; the fact that the flow of a Hamiltonian vector field leaves the symplectic form invariant, which is the structural property the integrator is built to imitate; the $n$-body problem as the setting of the application
---

:::definition[Hamiltonian systems, flow maps and symplectic maps]{provenance=adapted src="lee-2013:Ch. 22, Hamilton's equations (22.11) and Prop. 22.16(a), pp. 575-576; hassani-2013:§26.4, Def. 26.4.1, p. 801 and the matrix criterion $A^{t}JA = J$, p. 804"}
Work on the phase space $\mathbb{R}^{2n}$ with coordinates $z = (q, p)$, $q, p \in \mathbb{R}^{n}$, and write

$$
J \;=\; \begin{pmatrix} 0 & I_{n} \\ -I_{n} & 0 \end{pmatrix} ,
$$

$I_{n}$ being the identity. For a $C^{2}$ function $H$ on $\mathbb{R}^{2n}$, the **canonical equations** of :ref[]{to=var.canonical-equations} read

$$
\dot q \;=\; \frac{\partial H}{\partial p}, \qquad \dot p \;=\; -\,\frac{\partial H}{\partial q}, \qquad\text{that is}\qquad \dot z \;=\; J\,\nabla H(z) .
$$

Lee writes the same system in Darboux coordinates on a symplectic manifold; we stay on $\mathbb{R}^{2n}$, which is the case a program actually integrates, and leave the invariant picture to :ref[]{to=geom.symplectic-manifolds}. Write $\varphi_{t}$ for the **flow map**: $\varphi_{t}(z_{0})$ is the solution at time $t$ through $z_{0}$, defined for $t$ in the maximal interval given by :ref[]{to=ode.existence-uniqueness}. Two facts about $\varphi_{t}$ are the ones an integrator is asked to imitate. First, $H$ is constant along every trajectory, because $\tfrac{d}{dt}H(z) = \nabla H \cdot J \nabla H = 0$ by the antisymmetry of $J$; Lee states this as the fact that a function is constant along the integral curves of its own Hamiltonian vector field. Second, $\varphi_{t}$ preserves the symplectic structure: in Lee's language a Hamiltonian vector field is symplectic, so its flow leaves the $2$-form $\omega = \sum_{i} dq^{i} \wedge dp_{i}$ invariant.

In coordinates that second property is a condition on a Jacobian matrix. Call a $C^{1}$ map $\Psi : U \to \mathbb{R}^{2n}$, $U \subseteq \mathbb{R}^{2n}$ open, **symplectic** if

$$
\Psi'(z)^{\mathsf T}\, J\, \Psi'(z) \;=\; J \qquad\text{for every } z \in U ,
$$

where $\Psi'(z)$ is the $2n \times 2n$ Jacobian. This is Hassani's criterion for a matrix to represent a symplectic transformation, imposed pointwise on the derivative. Hassani also records that the symplectic transformations of a fixed symplectic vector space form a group; the only part of that we use is that a product of symplectic matrices is symplectic, which is proved in one line below.

A **separable Hamiltonian** is one of the form

$$
H(q, p) \;=\; \tfrac12\, p^{\mathsf T} M^{-1} p \;+\; V(q) ,
$$

with $M$ a **constant** symmetric positive definite mass matrix and $V$ the potential. Its canonical equations are $\dot q = M^{-1}p$ and $\dot p = F(q)$, where $F = -\nabla V$ is the force. Every mechanical system with a velocity-independent potential and coordinates in which the kinetic energy is a fixed quadratic form is of this type.

A one-step method with step $h$ for such a system is a map $\Psi_{h} : \mathbb{R}^{2n} \to \mathbb{R}^{2n}$ with $z_{n+1} = \Psi_{h}(z_{n})$, in the sense of :ref[]{to=num.ode-integrators}. It is a **symplectic integrator** if $\Psi_{h}$ is a symplectic map for every admissible $V$ and every $h$.
:::

:::definition[The Stormer-Verlet (leapfrog) step]{provenance=original}
Fix $h > 0$ and set $F = -\nabla V$. The **velocity Verlet** or **kick-drift-kick** step takes $z_{n} = (q_{n}, p_{n})$ to $z_{n+1} = (q_{n+1}, p_{n+1})$ by

$$
p_{n+1/2} \;=\; p_{n} + \tfrac{h}{2}\,F(q_{n}), \qquad
q_{n+1} \;=\; q_{n} + h\,M^{-1} p_{n+1/2}, \qquad
p_{n+1} \;=\; p_{n+1/2} + \tfrac{h}{2}\,F(q_{n+1}) .
$$

Only one new force evaluation is needed per step: $F(q_{n+1})$ closes the current step and opens the next. In terms of the two elementary maps

$$
K_{s}(q, p) \;=\; \bigl(q,\; p + s\,F(q)\bigr), \qquad
D_{s}(q, p) \;=\; \bigl(q + s\,M^{-1}p,\; p\bigr) ,
$$

the step is the sandwich

$$
\Psi_{h} \;=\; K_{h/2} \circ D_{h} \circ K_{h/2} .
$$

$K_{s}$ is the exact time-$s$ flow of the Hamiltonian $V(q)$ alone (which moves $p$ and leaves $q$ fixed), and $D_{s}$ the exact time-$s$ flow of $\tfrac12 p^{\mathsf T}M^{-1}p$ alone. The method is therefore a splitting: it integrates each half of $H$ exactly and interleaves the two.

Eliminating the momenta gives the form in which Stormer wrote the scheme, a three-term recurrence in the positions alone,

$$
q_{n+1} - 2q_{n} + q_{n-1} \;=\; h^{2} M^{-1} F(q_{n}) ,
$$

which holds exactly, not just to leading order, for the sequence $(q_{n})$ produced above. The name *leapfrog* comes from the staggered variant that stores the half-step momenta $p_{n+1/2}$ and advances positions and momenta alternately; it generates the same positions.

Dropping one of the two half kicks gives the first-order **symplectic Euler** step $p_{n+1} = p_{n} + hF(q_{n})$, $q_{n+1} = q_{n} + hM^{-1}p_{n+1}$, which is also symplectic by the argument below but is only of order $1$ and is not reversible.
:::

:::statement[What the leapfrog step preserves]{provenance=original}
Let $M$ be constant, symmetric and positive definite, and let $V \in C^{2}(\mathbb{R}^{n})$. Let $\Psi_{h}$ be the velocity Verlet step.

1. **Symplecticity.** $\Psi_{h}'(z)^{\mathsf T} J \Psi_{h}'(z) = J$ for every $z$ and every $h$, with no smallness condition on $h$. Consequently $\det \Psi_{h}'(z) = 1$, so $\Psi_{h}$ preserves Lebesgue measure on phase space exactly.
2. **Reversibility.** $\Psi_{-h} = \Psi_{h}^{-1}$, and with the momentum flip $\rho(q, p) = (q, -p)$ also $\rho \circ \Psi_{h} \circ \rho \circ \Psi_{h} = \mathrm{id}$.
3. **Order.** If in addition $V \in C^{4}$, the method has order exactly $2$. In one degree of freedom with $M = 1$ the local error is

$$
\varphi_{h}(z) - \Psi_{h}(z) \;=\; h^{3}\begin{pmatrix} -\tfrac{1}{6}\,p\,V''(q) \\[2pt] \tfrac{1}{12}\bigl(p^{2}V'''(q) - V'(q)V''(q)\bigr) \end{pmatrix} \;+\; O(h^{4}) .
$$

Hence, by the global-error theorem of :ref[]{to=num.ode-integrators}, the error after a fixed time is $O(h^{2})$.

4. **Energy for the harmonic oscillator.** Take $n = 1$, $M = 1$ and $V(q) = \tfrac12\omega^{2}q^{2}$, and put $\kappa = 1 - \tfrac14\omega^{2}h^{2}$. If $0 < \omega h < 2$, then the **shifted energy**

$$
\tilde H(q, p) \;=\; \tfrac12 p^{2} \;+\; \tfrac12\,\omega^{2}\kappa\, q^{2}
$$

is conserved *exactly* by the step, $\tilde H(z_{n}) = \tilde H(z_{0})$ for all $n$, and the true energy satisfies, for all $n \ge 0$,

$$
\bigl|H(z_{n}) - H(z_{0})\bigr| \;\le\; \frac{\omega^{2}h^{2}}{4 - \omega^{2}h^{2}}\; \tilde H(z_{0}) .
$$

The bound does not grow with $n$: the energy error oscillates forever inside a band of width $O(h^{2})$ and never drifts. If $\omega h > 2$ the iteration is unstable and $\lVert z_{n}\rVert \to \infty$ geometrically.
:::

:::idea{provenance=original}
Everything follows from the sandwich $\Psi_{h} = K_{h/2} \circ D_{h} \circ K_{h/2}$. Each factor is a *shear*: it changes one half of the coordinates by a function of the other half and leaves that other half alone. The Jacobian of a shear is a triangular block matrix whose off-diagonal block is either the Hessian of $V$ or the matrix $M^{-1}$ — and both are symmetric. Symmetry of that block is exactly the condition for a shear to be symplectic, and symplectic matrices are closed under multiplication, so the chain rule hands us the first claim for free, at any step size.

Reversibility is the palindrome: reading $K_{h/2} D_{h} K_{h/2}$ backwards with $h$ replaced by $-h$ inverts each factor in the right order. A method that is its own inverse under $h \mapsto -h$ cannot carry a leading error term of even degree in $h$: replacing $h$ by $-h$ multiplies that term by $(-1)^{p+1}$, while inverting the two maps multiplies it by $-1$, and the two operations give the same map, so $(-1)^{p+1} = -1$ and the order $p$ is even. A three-line expansion then shows the $h^{3}$ coefficient is not zero, pinning the order at $2$. Finally, for the harmonic oscillator the step is a $2 \times 2$ matrix with determinant $1$, and one looks for a quadratic form it preserves. There is one, it differs from $H$ by $O(h^{2})$, and when $\omega h < 2$ its level sets are ellipses — compact, so the iterates are trapped and the energy cannot wander.
:::

:::proof{provenance=original}
**Step 1: a shear with a symmetric block is symplectic.** Let $S, T$ be real $n \times n$ matrices and

$$
A = \begin{pmatrix} I & 0 \\ S & I\end{pmatrix}, \qquad B = \begin{pmatrix} I & T \\ 0 & I\end{pmatrix} .
$$

Multiplying out,

$$
A^{\mathsf T} J A = \begin{pmatrix} I & S^{\mathsf T} \\ 0 & I\end{pmatrix}\begin{pmatrix} S & I \\ -I & 0\end{pmatrix} = \begin{pmatrix} S - S^{\mathsf T} & I \\ -I & 0 \end{pmatrix}, \qquad
B^{\mathsf T} J B = \begin{pmatrix} 0 & I \\ -I & T^{\mathsf T} - T\end{pmatrix} .
$$

Each product therefore equals $J$ precisely when the off-diagonal block is its own transpose: $A$ is symplectic exactly when $S = S^{\mathsf T}$, and $B$ exactly when $T = T^{\mathsf T}$. Both matrices are block triangular with identity diagonal blocks, so $\det A = \det B = 1$.

**Step 2: products.** If $A^{\mathsf T}JA = J$ and $B^{\mathsf T}JB = J$ then $(AB)^{\mathsf T}J(AB) = B^{\mathsf T}(A^{\mathsf T}JA)B = B^{\mathsf T}JB = J$. (This is the group property Hassani records for symplectic transformations; only closure is needed here.)

**Step 3: the Jacobians of the three factors.** The kick $K_{s}$ has Jacobian

$$
K_{s}'(q,p) = \begin{pmatrix} I & 0 \\ s\,F'(q) & I \end{pmatrix} = \begin{pmatrix} I & 0 \\ -s\,\nabla^{2}V(q) & I \end{pmatrix} ,
$$

and the block $-s\nabla^{2}V(q)$ is symmetric because it is a multiple of a Hessian and $V \in C^{2}$, so mixed partials commute. The drift $D_{s}$ has Jacobian $\begin{pmatrix} I & sM^{-1} \\ 0 & I\end{pmatrix}$, whose block $sM^{-1}$ is symmetric because $M$ is symmetric and invertible. By Step 1 both Jacobians are symplectic with determinant $1$.

**Step 4: claim 1.** By the chain rule, $\Psi_{h}'(z) = K_{h/2}'(w_{2})\,D_{h}'(w_{1})\,K_{h/2}'(z)$, where $w_{1} = K_{h/2}(z)$ and $w_{2} = D_{h}(w_{1})$ are the intermediate points. Each factor is symplectic by Step 3, so the product is symplectic by Step 2, and $\det \Psi_{h}' = 1 \cdot 1 \cdot 1 = 1$. Preservation of Lebesgue measure is then the change-of-variables formula: $\lvert \Psi_{h}(E)\rvert = \int_{E} \lvert\det \Psi_{h}'\rvert \,dz = \lvert E \rvert$ for every measurable $E$. No bound on $h$ entered.

**Step 5: claim 2.** $K_{s}$ and $D_{s}$ are one-parameter groups: $K_{s}K_{s'} = K_{s+s'}$ because $F(q)$ is evaluated at a $q$ that the kick does not move, and $D_{s}D_{s'} = D_{s+s'}$ for the same reason with the roles exchanged. Hence $K_{-s} = K_{s}^{-1}$ and $D_{-s} = D_{s}^{-1}$, and

$$
\Psi_{-h} = K_{-h/2} \circ D_{-h} \circ K_{-h/2} = K_{h/2}^{-1} \circ D_{h}^{-1} \circ K_{h/2}^{-1} = \bigl(K_{h/2} \circ D_{h} \circ K_{h/2}\bigr)^{-1} = \Psi_{h}^{-1} .
$$

For the second identity, note $\rho K_{s} \rho = K_{-s}$ and $\rho D_{s}\rho = D_{-s}$ (flipping the momentum reverses the sign of each increment), so $\rho \Psi_{h}\rho = \Psi_{-h} = \Psi_{h}^{-1}$, which rearranges to $\rho\Psi_{h}\rho\Psi_{h} = \mathrm{id}$. This is the discrete version of the time-reversal symmetry discussed in :ref[]{to=dyn.conservative-reversible}.

**Step 6: a reversible method has even order.** Suppose the method has order exactly $p \ge 1$, so that $\varphi_{h}(z) - \Psi_{h}(z) = C(z)h^{p+1} + O(h^{p+2})$ with $C$ continuous and not identically zero. First, inverting both maps negates the leading error: putting $z = \Psi_{h}^{-1}(w)$ in $\Psi_{h}(z) = \varphi_{h}(z) - C(z)h^{p+1} + O(h^{p+2})$ gives $\varphi_{h}(z) = w + C(z)h^{p+1} + O(h^{p+2})$, and applying $\varphi_{h}^{-1}$, whose derivative is $I + O(h)$, yields

$$
\Psi_{h}^{-1}(w) \;=\; \varphi_{h}^{-1}(w) + C(w)h^{p+1} + O(h^{p+2}) ,
$$

where $C(z)$ could be replaced by $C(w)$ because $z = w + O(h)$ and $C$ is continuous. Second, $H$ is autonomous, so the flow is a group and $\varphi_{h}^{-1} = \varphi_{-h}$; by Step 5, $\Psi_{h}^{-1} = \Psi_{-h}$. Therefore the displayed identity says $\varphi_{-h} - \Psi_{-h} = -C h^{p+1} + O(h^{p+2})$. But the definition of the local error applied with step $-h$ says $\varphi_{-h} - \Psi_{-h} = C\,(-h)^{p+1} + O(h^{p+2})$. Comparing the two, $(-1)^{p+1} = -1$, so $p$ is even.

**Step 7: the $h^{3}$ coefficient.** Take $n = 1$, $M = 1$, $V \in C^{4}$. The scheme gives, with no truncation at all,

$$
q_{n+1} = q_{n} + hp_{n} - \tfrac{h^{2}}{2}V'(q_{n}), \qquad
p_{n+1} = p_{n} - \tfrac{h}{2}V'(q_{n}) - \tfrac{h}{2}V'(q_{n+1}) .
$$

Expanding $V'(q_{n+1})$ about $q_{n}$ with Taylor's theorem (:ref[]{to=found.taylor-theorem}) and writing $q, p$ for $q_{n}, p_{n}$,

$$
p_{n+1} = p - hV' - \tfrac{h^{2}}{2}\,pV'' + \tfrac{h^{3}}{4}\bigl(V'V'' - p^{2}V'''\bigr) + O(h^{4}) ,
$$

all derivatives at $q$. The exact solution is expanded by repeated differentiation of $\dot q = p$, $\dot p = -V'(q)$: $\dddot q = -V''p$ and $\ddot p = -V'' p$, $\dddot p = V'V'' - p^{2}V'''$, so

$$
q(h) = q + hp - \tfrac{h^{2}}{2}V' - \tfrac{h^{3}}{6}pV'' + O(h^{4}), \qquad
p(h) = p - hV' - \tfrac{h^{2}}{2}pV'' + \tfrac{h^{3}}{6}\bigl(V'V'' - p^{2}V'''\bigr) + O(h^{4}) .
$$

Subtracting gives the local error displayed in claim 3: the $h^{1}$ and $h^{2}$ terms cancel, and the $h^{3}$ terms are $-\tfrac16 pV''$ in the position and $\bigl(\tfrac16 - \tfrac14\bigr)(V'V'' - p^{2}V''') = \tfrac{1}{12}(p^{2}V''' - V'V'')$ in the momentum. This coefficient is not identically zero: already for $V(q) = \tfrac12\omega^{2}q^{2}$ and $p \neq 0$ the first component is $-\tfrac16 p\omega^{2} \neq 0$. A local error whose leading term is of order $h^{3}$ and does not vanish is, by the definition of order in :ref[]{to=num.ode-integrators}, a method of order exactly $2$. This is consistent with Step 6, which had already excluded every odd order.

**Step 8: claim 4.** With $V = \tfrac12\omega^{2}q^{2}$ the step is linear. Substituting $F(q) = -\omega^{2}q$ into the three substeps and writing $x = \omega^{2}h^{2}$,

$$
\begin{pmatrix} q_{n+1} \\ p_{n+1}\end{pmatrix} = R_{h}\begin{pmatrix} q_{n} \\ p_{n}\end{pmatrix}, \qquad
R_{h} = \begin{pmatrix} a & h \\ c & a \end{pmatrix}, \qquad a = 1 - \tfrac{x}{2}, \quad c = -\omega^{2}h\kappa, \quad \kappa = 1 - \tfrac{x}{4} .
$$

Two identities drive everything. First,

$$
a^{2} + \omega^{2}\kappa h^{2} = \Bigl(1 - \tfrac{x}{2}\Bigr)^{2} + x\Bigl(1 - \tfrac{x}{4}\Bigr) = 1 - x + \tfrac{x^{2}}{4} + x - \tfrac{x^{2}}{4} = 1 ,
$$

which is also the statement $\det R_{h} = a^{2} - hc = 1$. Second, $\operatorname{tr}R_{h} = 2a = 2 - x$.

Now expand $\tilde H(z_{n+1}) = \tfrac12(cq + ap)^{2} + \tfrac12\omega^{2}\kappa(aq + hp)^{2}$ and collect:

- the coefficient of $qp$ is $ca + \omega^{2}\kappa a h = a\bigl(-\omega^{2}h\kappa + \omega^{2}\kappa h\bigr) = 0$;
- the coefficient of $\tfrac12 p^{2}$ is $a^{2} + \omega^{2}\kappa h^{2} = 1$ by the first identity;
- the coefficient of $\tfrac12 q^{2}$ is $c^{2} + \omega^{2}\kappa a^{2} = \omega^{2}\kappa\bigl(\omega^{2}\kappa h^{2} + a^{2}\bigr) = \omega^{2}\kappa$, again by the first identity.

So $\tilde H(z_{n+1}) = \tfrac12 p_{n}^{2} + \tfrac12\omega^{2}\kappa q_{n}^{2} = \tilde H(z_{n})$: the shifted energy is conserved exactly, for every $h$.

Assume now $0 < \omega h < 2$, i.e. $x < 4$, i.e. $\kappa > 0$. Then $\tilde H$ is positive definite, so the level set $\{\tilde H = \tilde H_{0}\}$ is an ellipse and the iterates stay on it. The two energies differ by

$$
H(z) - \tilde H(z) \;=\; \tfrac12\omega^{2}(1 - \kappa)q^{2} \;=\; \tfrac18\,\omega^{4}h^{2}q^{2} \;\ge\; 0 ,
$$

and on the ellipse $\tfrac12\omega^{2}\kappa q^{2} \le \tilde H_{0}$, so $q^{2} \le 2\tilde H_{0}/(\omega^{2}\kappa)$ and

$$
0 \;\le\; H(z_{n}) - \tilde H_{0} \;\le\; \frac{\omega^{4}h^{2}}{8}\cdot\frac{2\tilde H_{0}}{\omega^{2}\kappa} \;=\; \frac{\omega^{2}h^{2}}{4\kappa}\,\tilde H_{0} \;=\; \frac{\omega^{2}h^{2}}{4 - \omega^{2}h^{2}}\,\tilde H_{0} .
$$

Both $H(z_{n})$ and $H(z_{0})$ lie in that interval of length $\omega^{2}h^{2}\tilde H_{0}/(4 - \omega^{2}h^{2})$, which gives the stated bound, uniformly in $n$.

If instead $\omega h > 2$ then $\lvert\operatorname{tr}R_{h}\rvert = x - 2 > 2$ while $\det R_{h} = 1$, so the eigenvalues are real and reciprocal, $\lambda$ and $1/\lambda$ with $\lvert\lambda\rvert > 1$; any initial condition with a component along the $\lambda$-eigenvector grows like $\lvert\lambda\rvert^{n}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$V \in C^{2}$** is used once, in Step 3, to make $\nabla^{2}V$ symmetric. That symmetry is the whole of symplecticity. If the kick uses a force field that is not a gradient — say $n = 2$ and $F(q) = (q_{2}, 0)$, so that the Jacobian block is $\tfrac{h}{2}\begin{pmatrix}0 & 1\\ 0 & 0\end{pmatrix}$ — then $S - S^{\mathsf T} \neq 0$ and Step 1 fails at the first factor. Of course such a system is not Hamiltonian to begin with; the point is that the integrator inherits the structure from the problem rather than creating it.
- **$M$ symmetric** is used in the same step for the drift. **$M$ constant** is what makes $D_{s}$ an exact flow and makes the drift explicit. A configuration-dependent mass matrix, which is what a Lagrangian in curvilinear coordinates produces, destroys both: the kinetic term then depends on $q$ as well as $p$, the split is no longer into two exactly solvable pieces, and velocity Verlet in the form above does not apply.
- **$V \in C^{4}$** is needed only for the order statement in claim 3, because the Taylor expansions in Step 7 go to third order. Symplecticity and reversibility need no extra smoothness.
- **$H$ autonomous** is used in Step 6, where $\varphi_{h}^{-1} = \varphi_{-h}$ is the group property of the flow. For a time-dependent Hamiltonian the parity argument has to be run on the extended system.
- **$\omega h < 2$** is the linear stability limit, and it is sharp: at $\omega h = 2$ the matrix $R_{h}$ has the double eigenvalue $-1$ and is not diagonalisable, so the amplitude grows linearly in $n$; beyond it, geometrically. Because leapfrog is explicit it has a bounded stability region, exactly as the explicit methods of :ref[]{to=num.stiffness} do, and it is a poor choice for a stiff problem. In a many-body system the relevant $\omega$ is the fastest vibration present, which is why a molecular-dynamics step is set by the stiffest bond.
- **Constant $h$** is essential to claim 4, since $\tilde H$ depends on $h$. Varying the step destroys the bounded energy error even though every individual step is still symplectic; the experiment is in the second example below. A *periodic* step pattern is harmless, because the composition over one period is again a single fixed symplectic map; what hurts is a step chosen from the current state or from an error estimate.
:::

:::remark[The shifted energy in general: backward error analysis]{provenance=original}
Claim 4 is the exactly solvable case of a general phenomenon. One asks for a modified Hamiltonian $\tilde H_{h}$ whose exact flow reproduces the numerical step. For velocity Verlet in one degree of freedom with $M = 1$ the first correction is

$$
\tilde H_{h}(q,p) \;=\; \tfrac12 p^{2} + V(q) \;+\; h^{2}\Bigl(\tfrac{1}{12}\,p^{2}V''(q) \;-\; \tfrac{1}{24}\,V'(q)^{2}\Bigr) \;+\; O(h^{4}) ,
$$

and we verified by symbolic expansion that the time-$h$ flow of this $\tilde H_{h}$ agrees with $\Psi_{h}$ through order $h^{3}$, which is one order beyond the method itself. For $V = \tfrac12\omega^{2}q^{2}$ the correction is $h^{2}\bigl(\tfrac{1}{12}\omega^{2}p^{2} - \tfrac{1}{24}\omega^{4}q^{2}\bigr)$, and expanding the product shows that $\tilde H_{h} = \bigl(1 + \tfrac16\omega^{2}h^{2}\bigr)\tilde H + O(h^{4})$, where $\tilde H$ is the exactly conserved form of claim 4: the two differ only by the normalisation that makes the flow run at the right speed, since the leapfrog rotation angle per step is $\theta = \arccos\bigl(1 - \tfrac12\omega^{2}h^{2}\bigr) = \omega h\bigl(1 + \tfrac{1}{24}\omega^{2}h^{2} + \cdots\bigr)$ rather than $\omega h$.

The series $H + h^{2}H_{2} + h^{4}H_{4} + \cdots$ does not converge in general. Truncating it at an $h$-dependent optimal order gives the statement that for an analytic Hamiltonian and numerical trajectories confined to a compact set, a symplectic method of order $p$ keeps $\lvert H(z_{n}) - H(z_{0})\rvert = O(h^{p})$ over times exponentially long in $1/h$. That result — backward error analysis, due to Benettin and Giorgilli and developed by Hairer, Lubich and Wanner — is not in any book in this handbook's library, so we state it only for orientation and prove nothing beyond the harmonic case of claim 4. The non-symplectic alternative has no such statement available: the energy error of a general method accumulates, and the examples below show it doing so linearly in $t$.
:::

:::method[Integrating a separable Hamiltonian system with leapfrog]{provenance=original}
1. **Put the problem in separable form.** Identify $q$, $p$, the constant symmetric positive definite $M$, and $V$ with $F = -\nabla V$. If the force you have is not a gradient, stop: leapfrog buys you nothing, and :ref[]{to=num.ode-integrators} applies instead.
2. **Fix the step from the fastest frequency.** Estimate the largest frequency $\omega_{\max}$ in the problem (for a potential well, $\omega_{\max}^{2}$ is the largest eigenvalue of $M^{-1}\nabla^{2}V$ over the region visited). The hard limit is $\omega_{\max}h < 2$; for a sensible phase error take $\omega_{\max}h \lesssim 0.1$, i.e. at least about sixty steps per period of the fastest mode.
3. **Initialise.** Compute $F_{0} = F(q_{0})$ once.
4. **Step**, reusing the force: $p \leftarrow p + \tfrac{h}{2}F$; $q \leftarrow q + hM^{-1}p$; $F \leftarrow F(q)$; $p \leftarrow p + \tfrac{h}{2}F$. The pair $(q, p)$ is synchronised at the end of every step, so output needs no interpolation.
5. **Do not vary $h$.** Keep it fixed for the whole run; if the problem demands adaptivity (a close encounter, say), accept that the long-time energy bound is gone, or switch to a method designed for it.
6. **Monitor $H$ as a diagnostic, not as a correction.** Plot $H(z_{n}) - H(z_{0})$. A bounded oscillation of size $O(h^{2})$ is the expected signature. A steady drift means either a coding error in the force (most often a force that is not the gradient of the potential being monitored) or a step size past the stability limit. Never rescale the velocities to force $H$ back: that is not a symplectic map and it throws away the property you chose the method for.
7. **Check the order** by halving $h$ on a short run with a known answer: the error should fall by a factor of $4$.
:::

:::example[The harmonic oscillator: the energy band, and what the alternatives do]{provenance=original}
Take $n = 1$, $M = 1$, $\omega = 1$, so $H = \tfrac12 p^{2} + \tfrac12 q^{2}$, with $q_{0} = 1$, $p_{0} = 0$ and $h = 0.1$. Then $H(z_{0}) = 0.5$, $\kappa = 1 - 0.01/4 = 0.9975$ and

$$
\tilde H(z_{0}) = \tfrac12(0)^{2} + \tfrac12(0.9975)(1)^{2} = 0.49875 .
$$

**One step by hand.** $p_{1/2} = 0 + 0.05\cdot(-1) = -0.05$; $q_{1} = 1 + 0.1\cdot(-0.05) = 0.995$; $p_{1} = -0.05 + 0.05\cdot(-0.995) = -0.09975$. Then

$$
H(z_{1}) = \tfrac12(0.09975)^{2} + \tfrac12(0.995)^{2} = 0.004975031\,25 + 0.495012\,5 = 0.499987\,531\,25 ,
$$

$$
\tilde H(z_{1}) = \tfrac12(0.0099500625) + \tfrac12(0.9975)(0.990025) = 0.004975031\,25 + 0.493774\,968\,75 = 0.49875 ,
$$

the shifted energy already back to its initial value to every digit, while the true energy has moved by $-1.2469 \times 10^{-5}$. A second step gives $q_{2} = 0.98005$, $p_{2} = -0.1985025$, $H(z_{2}) = 0.499950622503125$, $\tilde H(z_{2}) = 0.49875$.

**The predicted band.** Claim 4 gives

$$
\bigl|H(z_{n}) - H(z_{0})\bigr| \;\le\; \frac{0.01}{4 - 0.01}\times 0.49875 \;=\; \frac{0.0049875}{3.99} \;=\; 0.00125
$$

for every $n$. Running $10^{6}$ steps, to $t = 10^{5}$ (about $1.6 \times 10^{4}$ periods), the computed energy error stayed in $[-1.2499999999 \times 10^{-3},\, 9.83 \times 10^{-14}]$ — the lower end is the bound $-h^{2}/8 = -0.00125$ attained to ten digits, reached whenever the orbit passes $q \approx 0$ — and $\tilde H$ drifted by at most $1.14 \times 10^{-13}$, which is accumulated rounding and not method error.

**Order.** Integrating to $t = 10$ and comparing $q_{N}$ with $\cos 10 = -0.839071529\ldots$:

| $h$ | $\lvert q_{N} - \cos 10\rvert$ | ratio |
|---|---|---|
| $0.2$ | $9.225232\times10^{-3}$ | |
| $0.1$ | $2.276602\times10^{-3}$ | $4.052$ |
| $0.05$ | $5.673035\times10^{-4}$ | $4.013$ |
| $0.025$ | $1.417106\times10^{-4}$ | $4.003$ |
| $0.0125$ | $3.542044\times10^{-5}$ | $4.001$ |

The ratios converge to $4$, confirming order $2$.

**What the non-symplectic methods do.** For a linear system each classical method is multiplication by a fixed matrix, and claim 1 says the determinant measures how fast phase area is created or destroyed. With $A = \begin{pmatrix}0 & 1\\ -\omega^{2} & 0\end{pmatrix}$:

- Explicit Euler, $I + hA$, has $\det = 1 + \omega^{2}h^{2} = 1.01$. For $\omega = 1$ this matrix is exactly $\sqrt{1.01}$ times a rotation, so $H(z_{n}) = (1.01)^{n}H(z_{0})$ identically. At $n = 10^{4}$ that predicts a factor $1.01^{10^{4}} = 1.6358287111890 \times 10^{43}$; the computed run gave $H(z_{n})/H(z_{0}) = 1.6358287111889\times10^{43}$, agreeing to thirteen digits.
- Heun's method, $I + hA + \tfrac{h^{2}}{2}A^{2}$, has $\det = 1 + \tfrac14\omega^{4}h^{4} = 1.000025$: still expanding, if far more slowly.
- Classical fourth-order Runge-Kutta has $\det = 1 - \tfrac{1}{72}\omega^{6}h^{6} + \tfrac{1}{576}\omega^{8}h^{8} = 0.9999999861284722$, just below $1$, so it contracts phase area by a factor $0.98622$ over $10^{6}$ steps. The energy follows: the computed error was $-6.935\times10^{-5}$, $-6.931\times10^{-4}$ and $-6.888\times10^{-3}$ after $10^{4}$, $10^{5}$ and $10^{6}$ steps — a clean linear drift in $t$, ten times larger for each factor of ten in the run length, against leapfrog's fixed band of $1.25\times10^{-3}$ at the same step size.

**Varying the step.** Repeating the $10^{6}$-step leapfrog run but drawing each step independently and uniformly from $\{0.05, 0.1\}$, the energy error grew to $1.84\times10^{-4}$, $2.77\times10^{-3}$ and $5.41\times10^{-2}$ after $10^{4}$, $10^{5}$ and $10^{6}$ steps (one realisation), a maximum of $5.6\times10^{-2}$ over the run, against the fixed-step $1.25\times10^{-3}$ that never moved. Alternating the two step sizes deterministically, by contrast, kept the error at $9.4\times10^{-4}$: the two-step composition is itself one fixed symplectic map, and the argument of claim 4 applies to it.
:::

:::example[Kepler: a bounded energy error over two thousand orbits]{provenance=original}
Take the planar two-body problem in relative coordinates with $GM = 1$ and unit reduced mass: $M = I_{2}$ and $V(q) = -1/\lVert q\rVert$, so $F(q) = -q/\lVert q\rVert^{3}$. Start at perihelion of the orbit with semi-major axis $a = 1$ and eccentricity $e = 1/2$:

$$
q_{0} = (0.5,\, 0), \qquad p_{0} = \Bigl(0,\, \sqrt{\tfrac{1+e}{1-e}}\Bigr) = (0,\, 1.7320508075688772) .
$$

Then $H(z_{0}) = \tfrac12(3) - 1/0.5 = -0.5 = -1/(2a)$, the angular momentum is $L_{0} = q_{1}p_{2} - q_{2}p_{1} = 0.8660254037844386$, and the period is $2\pi a^{3/2} = 6.283185307179586$. Take $h = 0.01$, about $628$ steps per orbit, and run $2000$ orbits, that is $1\,256\,637$ steps.

**Leapfrog.** The energy error stayed in $[-1.86\times10^{-13},\; 1.359193\times10^{-4}]$. The maximum $1.359193\times10^{-4}$ was already reached inside the first $250$ orbits and was still exactly that value at $500$, $1000$ and $2000$ orbits: the error oscillates with the orbital phase (largest near perihelion, where the potential is steepest) and does not accumulate. The angular momentum was conserved to $7.18\times10^{-14}$, which is rounding. That last fact is exact, not accidental: in a central field $F(q) = -g(\lVert q\rVert)\,q$ is parallel to $q$, so a kick changes $L$ by $\tfrac{h}{2}(q_{1}F_{2} - q_{2}F_{1}) = 0$, and a drift changes it by $h(p_{1}p_{2} - p_{2}p_{1}) = 0$. Each of the three substeps conserves $L$ identically, so leapfrog does.

**Fourth-order Runge-Kutta at the same step.** The energy error was $-3.790447\times10^{-7}$, $-7.580583\times10^{-7}$, $-1.516216\times10^{-6}$ and $-3.032789\times10^{-6}$ at $250$, $500$, $1000$ and $2000$ orbits: it doubles every time the orbit count doubles, to four digits. At $2000$ orbits it is still about forty-five times smaller than leapfrog's oscillation, which is what one expects from a fourth-order method at $h = 0.01$. But it is a drift, not a band: extrapolating the straight line, it reaches $1.359\times10^{-4}$ at about

$$
2000 \times \frac{1.359193\times10^{-4}}{3.032789\times10^{-6}} \;\approx\; 9.0\times10^{4} \quad\text{orbits},
$$

and keeps going, while the leapfrog figure is the same at $10^{4}$ orbits as at $10^{9}$. Since the semi-major axis is $a = -1/(2H)$, a secular energy error is a secular error in the orbital period, which is the error that matters over long integrations; leapfrog does not make it.
:::

:::application{provenance=adapted src="lee-2013:Ch. 22, Example 22.18, pp. 576-577"}
Lee sets out the $n$-body problem as a Hamiltonian system: point masses $q_{1}, \dots, q_{n}$ in $\mathbb{R}^{3}$, conservative forces derived from a potential energy $V$, and the resulting Hamiltonian the sum of kinetic and potential energies. That is exactly the separable form above, with $M$ the diagonal matrix of masses, and it is the reason velocity Verlet is the integrator of molecular dynamics. A simulation of a protein in water runs $10^{8}$ to $10^{9}$ steps of $1$ or $2$ femtoseconds; the physical quantities wanted from it are thermodynamic averages, and these are wrong if the integrator heats or cools the system. A bounded energy error is therefore not an aesthetic preference but the condition under which the sampled ensemble means anything, and a thermostat can only be trusted on top of an integrator that is not itself pumping energy.

The same argument runs in three other places.

- **Solar system integration.** Long-term studies of planetary orbits over $10^{8}$ to $10^{9}$ years use symplectic maps that split the Hamiltonian into Keplerian and interaction parts in the spirit of the splitting above. The question asked — is the system stable, do the eccentricities wander — is precisely a question about secular behaviour, so an integrator with a drifting energy and hence a drifting semi-major axis answers it wrongly, as the Kepler example shows in miniature.
- **Hybrid Monte Carlo in lattice field theory.** A trajectory is generated by a leapfrog integration of a fictitious Hamiltonian system and then accepted with probability $\min\{1, e^{-\Delta H}\}$. Exact reversibility and exact volume preservation (claims 1 and 2, which hold at any $h$) are what make this acceptance test unbiased; the $O(h^{2})$ bound on $\Delta H$ is what keeps the acceptance rate high and lets the step size be chosen on cost grounds alone.
- **Accelerator physics.** Tracking a particle for $10^{8}$ turns of a storage ring to decide whether its motion stays bounded is a question about an invariant torus. A non-symplectic tracker slowly contracts or expands phase-space area, manufacturing damping or blow-up that the magnets do not produce.

The limits are as sharp as the virtues. Symplectic methods are for conservative, autonomous, non-stiff problems integrated at a fixed step. Add dissipation and there is no symplectic structure to preserve; add stiffness and the explicit step limit $\omega_{\max}h < 2$ bites, so the implicit methods of :ref[]{to=num.stiffness} are the right tool; add adaptivity and the long-time energy bound goes, as the first example shows.
:::
