---
id: dyn.conservative-reversible
title: Conservative and reversible systems
kind: method
level: core
summary: Gives two ways to certify that a centre predicted by linearization survives the nonlinear terms - a conserved quantity with a local minimum, or a time-reversal symmetry - together with the quadrature that turns the conserved quantity into periods, and shows how the level set through a saddle produces homoclinic and heteroclinic connections.
prereqs: [dyn.linearization, dyn.linear-planar-classification, ode.existence-uniqueness, found.taylor-several-variables, found.implicit-inverse-function, var.canonical-equations]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§6.5 Conservative Systems, pp. 159-163: the derivation of $E=\\frac12 m\\dot x^2+V(x)$ for $m\\ddot x=F(x)$ by multiplying by $\\dot x$; the definition of a conserved quantity as a real-valued continuous $E$ that is constant on trajectories and nonconstant on every open set, with the reason for the second clause; Example 6.5.1, that a conservative system has no attracting fixed point; Theorem 6.5.1 (nonlinear centres for conservative systems) with the ideas behind its proof and the two remarks that follow it, that the theorem holds at local maxima of $E$ and that the fixed point must be assumed isolated; the definition of a homoclinic orbit as a trajectory that approaches the same fixed point as $t\\to\\pm\\infty$ and the observation that it is not a periodic solution. §6.6 Reversible Systems, pp. 163-168: the invariance of $m\\ddot x=F(x)$ under $t\\to-t$; the definition of a reversible second-order system as one invariant under $t\\to-t$, $y\\to-y$, and the sufficient condition that $f$ be odd and $g$ even in $y$; Theorem 6.6.1 (nonlinear centres for reversible systems) with the ideas behind its proof and the author's statement that the step in which the trajectory is said to swirl around the origin lacks rigour; heteroclinic trajectories or saddle connections; the general definition of reversibility through an involution $R$ with $R^2=\\mathrm{id}$, invariance under $t\\to-t$, $x\\to R(x)$; Example 6.6.3, a reversible system that is not conservative because it has a stable node. §6.7 Pendulum, pp. 168-171: $\\ddot\\theta+\\sin\\theta=0$ treated as both reversible and conservative, its energy $\\frac12 v^2-\\cos\\theta$, the saddles at $(\\pm\\pi,0)$, librations, rotations, and the heteroclinic level $E=1$"
    pages: "159-171"
    role: the definitions of a conserved quantity, of a conservative system and of a reversible system; the three results proved below (no attracting fixed point, nonlinear centres at a local minimum of $E$, nonlinear centres in a reversible system) and the routes of their proofs; the vocabulary of homoclinic and heteroclinic orbits; the observation that reversibility is strictly weaker than the existence of a conserved quantity
  - work: hirsch-smale-devaney-2013
    loc: "§9.4 Hamiltonian Systems, pp. 206-209: the definition of a planar Hamiltonian system $x'=\\partial H/\\partial y$, $y'=-\\partial H/\\partial x$; the proposition that $H$ is constant along every solution, with its one-line proof; the remark that a Hamiltonian function is fixed only up to an additive constant; the observation that equilibria are the critical points of $H$ and that the phase portrait is obtained by plotting the level curves of $H$ and reading the direction from the vector field; the example $x'=y$, $y'=x-x^3$ with $H=\\frac14x^4-\\frac12x^2+\\frac12y^2+\\frac14$, its saddle at the origin, its centres at $(\\pm1,0)$ and its homoclinic solutions; and the proposition that the eigenvalues of the linearization at an equilibrium of a planar Hamiltonian system are $\\pm\\lambda$ or $\\pm i\\lambda$ with $\\lambda$ real. §13.2 Conservative Systems, pp. 280-281: the definition of a conservative force field $F=-\\operatorname{grad}U$ and of the associated system $X'=V$, $V'=-\\operatorname{grad}U(X)/m$; kinetic energy $\\frac12m|V|^2$, total energy $E=K+U$, the conservation-of-energy theorem with its proof; and the change of variable $Y=mV$ that puts the system in Hamiltonian form with $H=K+U$. §13.3 Central Force Fields, pp. 282-285: a central force field $F(X)=\\lambda(X)X$; the proposition that for a conservative force field centrality is equivalent to $F(X)=f(|X|)X$ and to $U(X)=g(|X|)$; the proposition that a particle in a central force field in $\\mathbb R^3$ stays in a fixed plane, so that the motion may be taken planar; the conservation of angular momentum and its polar form $\\ell=mr^2\\theta'$; and Kepler's equal-area law as the statement that $\\frac12r^2\\theta'$ is constant. §13.4, p. 286: the Newtonian central force system with potential $U=-1/|X|$"
    pages: "206-209, 280-286"
    role: the Hamiltonian formulation used in the remark on the two meanings of the word conservative and in the application; the proof that $H$ is a first integral; the constraint on the eigenvalues at an equilibrium of a planar Hamiltonian system, used in the application to identify the unstable circular orbit; the identification of the total energy as the Hamiltonian after passing to momentum; the reduction of central-force motion to a plane, the conservation of $\\ell=mr^2\\theta'$ and the inverse-square potential of the Kepler problem
---

:::definition[Conserved quantities, conservative systems, reversibility]{provenance=adapted src="strogatz-1994:§6.5, pp. 160-161, and §6.6, pp. 164, 166-167"}
Throughout, $f = (f_1,f_2)$ has continuous first partial derivatives on an open set $U \subseteq \mathbb{R}^2$, and the system under study is

$$
\dot x = f_1(x,y), \qquad \dot y = f_2(x,y) .
$$

By :ref[the existence and uniqueness theorem]{to=ode.existence-uniqueness} each point of $U$ lies on exactly one maximal solution, so the phase portrait is a partition of $U$ into orbits.

A **conserved quantity** for the system is a continuous real-valued function $E$ on $U$ that is constant along every solution and is **not** constant on any nonempty open subset of $U$. A system that has one is **conservative**. The second clause is what gives the notion content: without it the function $E \equiv 0$ would be conserved by every system whatsoever.

When $E$ is differentiable, "constant along every solution" is the single equation

$$
\nabla E \cdot f \;=\; \frac{\partial E}{\partial x} f_1 + \frac{\partial E}{\partial y} f_2 \;=\; 0
\qquad\text{on } U ,
$$

by the chain rule, so a conserved quantity is a function whose gradient is everywhere orthogonal to the field. Each orbit therefore lies inside one level set of $E$.

The prototype is a particle of mass $m$ on a line under a force $F$ depending on position alone, $m\ddot x = F(x)$. Writing $F = -V'$ for a potential $V$ and putting $y = \dot x$ gives the planar system $\dot x = y$, $m\dot y = -V'(x)$, and

$$
E(x,y) \;=\; \tfrac12 m y^2 + V(x)
$$

satisfies $\nabla E \cdot f = m y \cdot(-V'(x)/m) + V'(x)\,y = 0$. So $E$ is conserved, and it is nonconstant on every open set as long as $V$ is nonconstant on every interval.

A **reversal** is a map $R : U \to U$ with $R \circ R = \mathrm{id}$ (an involution). The system is **reversible with respect to $R$** if $t \mapsto R(\varphi(-t))$ is a solution whenever $t \mapsto \varphi(t)$ is; equivalently, by differentiating,

$$
f(R(p)) \;=\; -\,DR(p)\,f(p) \qquad (p \in U) .
$$

The case used most often is the reflection $R(x,y) = (x,-y)$ in the $x$-axis, for which the condition reads: $f_1$ is odd in $y$ and $f_2$ is even in $y$. Every system $\dot x = y$, $\dot y = F(x)/m$ coming from $m\ddot x = F(x)$ is reversible in this sense, which is the statement that a film of the motion run backwards still shows a possible motion.

An orbit $\gamma$ is **homoclinic** to a fixed point $p$ if the solution along it tends to $p$ both as $t \to +\infty$ and as $t \to -\infty$, and **heteroclinic** from $p$ to $q$ if it tends to $p$ as $t \to -\infty$ and to $q$ as $t \to +\infty$ with $p \neq q$. A heteroclinic orbit joining two saddles is also called a **saddle connection**. A homoclinic orbit is not a periodic orbit: it never arrives at $p$, since $p$ is a fixed point and solutions through a point are unique.
:::

:::statement[A conservative system has no attracting fixed point]{provenance=adapted src="strogatz-1994:§6.5, Example 6.5.1, p. 160"}
Suppose the system has a conserved quantity $E$. Then no fixed point $p$ is attracting; that is, there is no neighbourhood $W$ of $p$ such that every solution starting in $W$ tends to $p$ as $t \to \infty$.
:::

:::statement[Nonlinear centres in a conservative system]{provenance=adapted src="strogatz-1994:§6.5, Thm 6.5.1, p. 163"}
Let $f$ be continuously differentiable on $U \subseteq \mathbb{R}^2$, let $E$ be a conserved quantity for $\dot x = f(x)$, and let $p \in U$ be an **isolated** fixed point, meaning that some neighbourhood of $p$ contains no other fixed point. If $p$ is a local minimum of $E$, then every trajectory sufficiently close to $p$ is closed, so $p$ is a centre.

The same conclusion holds at a local maximum of $E$, since $-E$ is also a conserved quantity and turns maxima into minima.

**What is proved below.** Strogatz states the theorem for a conserved quantity $E$ that is merely continuous, and his argument rests on the assertion that the level sets of $E$ near a local extremum are closed curves, which he states and does not prove. The proof given below supplies that step, and therefore proves the theorem in full, under the extra hypothesis that **$E$ is twice continuously differentiable near $p$ with positive definite Hessian $D^2E(p)$** (which already forces $p$ to be an isolated local minimum). Everything in this unit's examples meets that hypothesis.
:::

:::statement[Nonlinear centres in a reversible system]{provenance=adapted src="strogatz-1994:§6.6, Thm 6.6.1, p. 164"}
Let $f$ be continuously differentiable near the origin, with $f(0) = 0$, and suppose that the system $\dot x = f(x)$ is reversible with respect to the reflection $R(x,y) = (x,-y)$. If the linearization $Df(0)$ has a pair of purely imaginary nonzero eigenvalues, so that the origin is a **linear centre** in the sense of :ref[the trace-determinant classification]{to=dyn.linear-planar-classification}, then every trajectory sufficiently close to the origin is closed, and the origin is a centre of the nonlinear system as well.
:::

:::idea{provenance=original}
All three results turn on the same observation: a conserved quantity or a symmetry forbids the kind of one-way drift that destroys a centre.

If $E$ is conserved, every trajectory is trapped inside a level set of $E$. Near a local minimum those level sets are small loops around $p$, and a loop carrying no fixed point has nowhere for a trajectory to stop, so the trajectory must run all the way round it. The same trapping rules out attraction: if every nearby trajectory converged to $p$, then $E$ would take the value $E(p)$ on a whole open set, which a conserved quantity is forbidden to do.

Reversibility works differently and uses no conserved quantity at all. It says that reflecting a trajectory in the $x$-axis and reversing its arrow produces another trajectory. A linear centre makes the angle around the origin increase steadily, so a trajectory leaving the positive $x$-axis arrives on the negative $x$-axis. Its mirror image is a second trajectory with the same two endpoints and the opposite arrow; uniqueness of solutions forces the two to be one and the same orbit, which is therefore closed.
:::

:::proof[No attracting fixed point]{provenance=adapted src="strogatz-1994:§6.5, Example 6.5.1, p. 160"}
Suppose $p$ were attracting, with $W$ a neighbourhood of $p$ all of whose solutions tend to $p$. Fix $q \in W$ and let $\varphi$ be the solution with $\varphi(0) = q$.

1. *$E$ is constant along $\varphi$*, by the definition of a conserved quantity; call that constant $E(q)$.
2. *The limit identifies the constant.* Since $\varphi(t) \to p$ and $E$ is continuous, $E(q) = \lim_{t\to\infty} E(\varphi(t)) = E(p)$. **Continuity of $E$ is used here and nowhere else.**
3. *Contradiction.* The point $q$ was an arbitrary point of $W$, so $E \equiv E(p)$ on $W$. A neighbourhood is a nonempty open set, and a conserved quantity is by definition nonconstant on every nonempty open set. $\square$
:::

:::proof[Nonlinear centres in a conservative system]{provenance=adapted src="strogatz-1994:§6.5, proof idea of Thm 6.5.1, p. 163"}
Write $c = E(p)$ and choose $r > 0 $ so small that the closed disc $\overline{B}_r(p)$ lies in $U$, contains no fixed point except $p$ (possible because $p$ is **isolated**) and satisfies $E \ge c$ on it (possible because $p$ is a **local minimum**).

1. *Trajectories are confined to level sets.* $E$ is constant along solutions, so the orbit through a point $q$ lies inside $L_q = \{x : E(x) = E(q)\}$.

2. *Near $p$ the relevant level sets are loops.* We use the following fact, which Strogatz states and does not prove: for all small $\varepsilon > 0$ the connected component of $\{E = c + \varepsilon\}$ that meets every neighbourhood of $p$ is a simple closed curve encircling $p$. The remark below proves exactly this when $E$ is twice continuously differentiable with a positive definite Hessian at $p$, together with the extra information that $\nabla E \neq 0$ on the loop; that is the case in every example in this unit, and we use that version from here on.

3. *The loop carries no fixed point.* By the choice of $r$ the only fixed point in the disc is $p$, and $p$ is not on the loop because $E(p) = c \neq c+\varepsilon$. **This is the step that needs $p$ to be isolated**: on a level set that passed through a second fixed point, a trajectory could approach that point and never return.

4. *A trajectory in the loop is the whole loop.* Let $\gamma$ be the loop, let $q \in \gamma$ and let $\varphi$ be the solution with $\varphi(0) = q$; its orbit $\mathcal O$ lies in $\gamma$ by step 1. Since $\nabla E \neq 0$ along $\gamma$, the implicit function theorem makes $\gamma$ a one-dimensional $C^1$ submanifold of the plane. In a chart of $\gamma$ near $\varphi(t)$ the curve $\varphi$ has derivative $\varphi'(t) = f(\varphi(t)) \neq 0$, tangent to $\gamma$ because $\gamma$ is a level set of $E$ and $\nabla E \cdot f = 0$; so by the inverse function theorem $\varphi$ carries a neighbourhood of $t$ homeomorphically onto a relatively open subarc of $\gamma$. Hence $\mathcal O$ is relatively open in $\gamma$, and so is every other orbit lying in $\gamma$, which makes the union $\gamma\setminus\mathcal O$ relatively open too. As $\gamma$ is connected and $\mathcal O \neq \emptyset$, we get $\mathcal O = \gamma$. (The same local picture is the :ref[flow box]{to=dyn.poincare-bendixson} used in the next unit.)

5. *Hence the orbit is periodic.* The solution $t \mapsto \varphi(t)$ through $q$ is a surjection $\mathbb{R} \to \gamma$ that is a local homeomorphism by step 4. If it were injective it would be a continuous bijection of $\mathbb{R}$ onto the compact set $\gamma$, and its inverse would be continuous because the map is a local homeomorphism; that is impossible, since $\mathbb{R}$ is not compact and compactness is preserved by homeomorphisms. So $\varphi(t_1) = \varphi(t_2)$ for some $t_1 < t_2$, and uniqueness of solutions makes $\varphi$ periodic with period $t_2 - t_1$.

Every point of a small enough punctured neighbourhood of $p$ lies on such a loop, so every trajectory sufficiently close to $p$ is closed. $\square$
:::

:::remark[The closed-contour step, proved]{provenance=original}
Suppose in addition that $E$ is twice continuously differentiable near $p$ and that its Hessian $H = D^2E(p)$ is positive definite; then $p$ is automatically an isolated local minimum of $E$. Write $x = p + \rho\,u(\theta)$ with $u(\theta) = (\cos\theta,\sin\theta)$ and $g(\rho,\theta) = E(p + \rho u(\theta)) - c$.

Because $\nabla E(p) = 0$ and $E \in C^2$, Taylor's theorem in :ref[several variables]{to=found.taylor-several-variables} gives $\nabla E(x) = H(x-p) + o(|x-p|)$, hence

$$
\frac{\partial g}{\partial \rho}(\rho,\theta) = \nabla E(p+\rho u)\cdot u = \rho\, \bigl(Hu\cdot u\bigr) + o(\rho) \;\ge\; \rho\bigl(\lambda_{\min} + o(1)\bigr),
$$

with $\lambda_{\min} > 0$ the smallest eigenvalue of $H$. So there is $\rho_0 > 0$ with $\partial g/\partial\rho > 0$ for $0 < \rho \le \rho_0$ and all $\theta$; in particular $\nabla E \neq 0$ on the punctured disc. For each $\theta$ the function $\rho \mapsto g(\rho,\theta)$ is therefore strictly increasing from $0$ to $g(\rho_0,\theta) \ge \tfrac12\lambda_{\min}\rho_0^2 =: 2\varepsilon_0 > 0$, so for every $\varepsilon \in (0,\varepsilon_0]$ there is exactly one radius $\rho(\theta)$ in $(0,\rho_0]$ with $g = \varepsilon$. The implicit function theorem (:ref[]{to=found.implicit-inverse-function}), applicable because $\partial g/\partial\rho \neq 0$, makes $\theta \mapsto \rho(\theta)$ continuously differentiable and $2\pi$-periodic. Its graph is a simple closed curve encircling $p$, and it is the whole of $\{E = c+\varepsilon\}$ inside the disc of radius $\rho_0$. $\square$
:::

:::proof[Nonlinear centres in a reversible system]{provenance=adapted src="strogatz-1994:§6.6, proof idea of Thm 6.6.1, pp. 164-165"}
Strogatz's route is to reflect a trajectory in the $x$-axis and glue it to the original; he notes that the step in which the trajectory is said to swirl round the origin is not made rigorous there. We follow the route and supply that step from the hypothesis of a **linear centre**.

1. *The angle increases.* Write $A = Df(0) = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$. In polar coordinates $r^2\dot\theta = x\dot y - y\dot x$, and expanding $f$ to first order,
$$
x\dot y - y\dot x = Q(x,y) + O(r^3), \qquad Q(x,y) = c\,x^2 + (d-a)\,xy - b\,y^2 .
$$
A linear centre has $\operatorname{tr}A = a + d = 0$ and $\det A = ad - bc > 0$, so $d = -a$ and $bc < -a^2$. The discriminant of the quadratic form $Q$ is then $(d-a)^2 + 4bc = 4a^2 + 4bc < 0$, so **$Q$ is definite**: there are $\mu > 0$ and a sign $\varepsilon = \pm1$ with $\varepsilon\,Q(x,y) \ge \mu r^2$ everywhere. Hence there is $r_0 > 0$ with
$$
\varepsilon\,\dot\theta \;=\; \frac{\varepsilon Q}{r^2} + O(r) \;\ge\; \tfrac12\mu \qquad (0 < r \le r_0),
$$
so the angle advances monotonically near the origin, counterclockwise if $\varepsilon = +1$ and clockwise if $\varepsilon = -1$.
**This is the only place the linear-centre hypothesis is used.** With $\operatorname{tr}A = 0$ the discriminant works out to $-4\det A$, so definiteness of $Q$ is exactly $\det A > 0$: the argument fails at a linear saddle, where $\det A < 0$, and the calculation of the discriminant fails outright at a linear spiral, where $\operatorname{tr}A \neq 0$.

2. *Staying small.* Since $f$ is $C^1$ and $f(0)=0$, there is $K$ with $|f(x)| \le K|x|$ for $|x| \le r_0$, so $|\dot r| \le K r$ and $r(t) \le r(0)e^{K|t|}$ as long as $r \le r_0$. Put $T_{\max} = 2\pi/\mu$. Since $|\dot\theta| \ge \mu/2$ while $r \le r_0$, a time $T_{\max}$ is enough for $\theta$ to move by $\pi$, and a time $2T_{\max}$ is enough for it to move by $2\pi$. Choose
$$
r_1 = r_0 e^{-KT_{\max}}, \qquad r_2 = r_1 e^{-2KT_{\max}} .
$$
A trajectory starting with $r \le r_1$ then has $r \le r_0$ for all $|t| \le T_{\max}$, and one starting with $r \le r_2$ has $r \le r_1 \le r_0$ for all $|t| \le 2T_{\max}$.

3. *From the positive to the negative $x$-axis.* Let $p = (x_0,0)$ with $0 < x_0 \le r_1$, and let $\varphi$ be the solution with $\varphi(0) = p$, so $\theta(0) = 0$. By steps 1 and 2 the angle increases at rate at least $\mu/2$ while $r$ stays below $r_0$, so there is a first time $T \in (0, T_{\max}]$ with $\theta(T) = \varepsilon\pi$: the solution has reached a point $q = (x_1,0)$ with $x_1 < 0$.

4. *Reflect.* Let $S(x,y) = (x,-y)$. **Reversibility** says that $u(t) := S\varphi(T-t)$ is again a solution. It satisfies $u(0) = S\varphi(T) = Sq = q$ (as $q$ is on the $x$-axis) and $u(T) = S\varphi(0) = Sp = p$.

5. *Glue by uniqueness.* The two solutions $u(t)$ and $\varphi(T+t)$ agree at $t = 0$, both being $q$, so by **uniqueness of solutions** they agree for all $t$. At $t = T$ this gives $\varphi(2T) = u(T) = p = \varphi(0)$, so $\varphi$ is periodic with period $2T$ and its orbit is closed.

6. *Every nearby trajectory.* Let $z$ satisfy $0 < |z| \le r_2 = r_1 e^{-2KT_{\max}}$. Run the flow backwards from $z$. By step 1 the angle moves at rate at least $\mu/2$ in modulus while $r \le r_0$, and in backward time it moves in the direction of decreasing $\varepsilon\theta$; starting from an arbitrary angle, $\varepsilon\theta$ must be decreased by at most $2\pi$ to reach the **positive** $x$-axis, which takes time at most $2T_{\max}$. **This is why the budget is $2T_{\max}$ and not $T_{\max}$**: a half-turn reaches the $x$-axis, but possibly its negative half, and the gluing of steps 3-5 starts on the positive half. By step 2 the trajectory keeps $r \le r_1$ throughout those $2T_{\max}$ units of backward time, so it arrives at a point $(x_0,0)$ with $0 < x_0 \le r_1$. By steps 3-5 the orbit through that point is closed, and $z$ lies on it. $\square$
:::

:::remark[Where each hypothesis is used, and what fails without it]{provenance=original}
- **$p$ isolated** (conservative theorem). Without it the level set through $p$ may carry other fixed points and the nearby orbits need not close up. Strogatz records this as the second of his two remarks on the theorem.
- **Local extremum of $E$** (conservative theorem). At a saddle point of $E$ the nearby level sets are hyperbola-like and unbounded, not loops; the system $\dot x = y$, $\dot y = x$ has the conserved quantity $E = \tfrac12(y^2-x^2)$, whose only critical point is a saddle of $E$ at the origin, and the origin is a saddle of the flow with no closed orbits near it.
- **Linear centre** (reversible theorem). Step 1 of its proof needs the quadratic form $Q$ to be definite, which is exactly $\operatorname{tr}Df(0) = 0$ together with $\det Df(0) > 0$. For a system reversible under a reflection, at a fixed point **on the symmetry axis** the trace vanishes by itself: for $R(x,y) = (x,-y)$ the function $f_1$ is odd in $y$, so $f_1 \equiv 0$ and hence $\partial f_1/\partial x = 0$ on the axis, while $f_2$ is even in $y$, so $\partial f_2/\partial y = 0$ there. The real content of the hypothesis is therefore $\det Df(0) > 0$, and dropping it destroys the conclusion: the second example below is reversible under $R(x,y) = (-x,y)$ and its fixed points $(0,\pm1)$ lie on the symmetry set $x = 0$, but there $\det Df = -2 < 0$ and they are saddles, with no closed orbit anywhere near them. Reversibility by itself does not even forbid attraction: that same example has an attracting node at $(-1,0)$.
- **$E$ nonconstant on open sets.** Drop it and the first theorem collapses: $E \equiv 0$ is then "conserved" by $\dot x = -x$, $\dot y = -y$, which has an attracting fixed point.
- **Two meanings of "conservative".** We follow Strogatz, for whom a conservative system is one with a conserved quantity. Hirsch, Smale and Devaney reserve the word for the Newtonian system $X' = V$, $V' = -\operatorname{grad}U(X)/m$ coming from a force field $F = -\operatorname{grad}U$, and treat the general case under the heading of Hamiltonian systems, $\dot x = \partial H/\partial y$, $\dot y = -\partial H/\partial x$, for which $H$ is a first integral. Every planar Hamiltonian system is conservative in Strogatz's sense as long as $H$ is nonconstant on open sets; the converse fails, because a conserved quantity need not generate the field. The two books agree on the mathematics and differ only in which class the word names.
- **Reversible is weaker than conservative.** A conservative system cannot have an attracting fixed point; a reversible one can, as the second example shows. What reversibility does force is a pairing: if $p$ is a fixed point then so is $R(p)$, and the two have mirror-image portraits with the arrows reversed, so an attracting fixed point off the symmetry set is always matched by a repelling one.
:::

:::method[Analysing a planar system by energy or by symmetry]{provenance=original}
1. **Look for a conserved quantity.** If the system is $\dot x = y$, $m\dot y = F(x)$, take $V(x) = -\int^x F$ and $E = \tfrac12 m y^2 + V(x)$. Otherwise test a candidate $E$ against $\nabla E \cdot f = 0$, or check whether the field is Hamiltonian, $f = (\partial H/\partial y, -\partial H/\partial x)$, which happens exactly when $\partial f_1/\partial x + \partial f_2/\partial y = 0$ on a simply connected domain.
2. **Look for a reversal.** Test the reflections $R(x,y) = (x,-y)$, $(-x,y)$ and $(-x,-y)$ against $f(R(p)) = -DR(p) f(p)$. For $R(x,y)=(x,-y)$ this is the parity test: $f_1$ odd in $y$, $f_2$ even in $y$.
3. **Find and linearize at the fixed points**, using :ref[the trace-determinant classification]{to=dyn.linear-planar-classification} and :ref[the linearization theorem]{to=dyn.linearization}. Saddles and nodes are settled by the linearization; a predicted centre is not.
4. **Promote the predicted centres.** Two certificates are available, and either suffices.
   - *Energy.* If a conserved quantity $E$ exists and the fixed point is an isolated local minimum or maximum of $E$, it is a centre. This needs no information about the linearization at all.
   - *Symmetry.* If the system is reversible, the fixed point lies on the symmetry set **and the linearization there is a centre**, it is a centre. The last clause cannot be dropped: the saddles $(0,\pm1)$ of the second example below lie on the symmetry set of a reversible system, and nothing near them is closed.
5. **Draw the level curves of $E$** and put arrows on them by evaluating $f$ at one convenient point of each; continuity fixes the rest.
6. **Read off the connections.** The level set through a saddle is the separatrix structure: a loop in it that returns to the same saddle is a homoclinic orbit, an arc joining two different saddles is a heteroclinic orbit.
7. **Get periods by quadrature.** For $\dot x = y$, $m\dot y = -V'(x)$ a closed orbit at energy $E$ runs between consecutive roots $x_-<x_+$ of $V(x) = E$, and $y = \pm\sqrt{2(E-V(x))/m}$ gives
$$
T(E) \;=\; 2\int_{x_-}^{x_+} \frac{\mathrm d x}{\sqrt{2\bigl(E - V(x)\bigr)/m}} .
$$
Near a nondegenerate minimum of $V$ this tends to the harmonic value $2\pi\sqrt{m/V''(x_\ast)}$.
:::

:::example[A cubic potential: centre, saddle, homoclinic loop, and two periods]{provenance=original}
Take $m = 1$ and

$$
\dot x = y, \qquad \dot y = x - x^2 .
$$

**Conserved quantity.** The force is $F(x) = x - x^2 = -V'(x)$ with $V(x) = -\tfrac12 x^2 + \tfrac13 x^3$, so

$$
E(x,y) = \tfrac12 y^2 - \tfrac12 x^2 + \tfrac13 x^3
$$

is conserved, and it is nonconstant on every open set because $V$ is a nonconstant polynomial. The system is also reversible under $(x,y) \mapsto (x,-y)$: $f_1 = y$ is odd in $y$ and $f_2 = x-x^2$ is even in $y$.

**Fixed points.** $y = 0$ and $x - x^2 = 0$ give $(0,0)$ and $(1,0)$. The Jacobian is $\begin{pmatrix}0 & 1\\ 1-2x & 0\end{pmatrix}$.

- At $(0,0)$: eigenvalues $\pm 1$, a saddle; $E(0,0) = 0$.
- At $(1,0)$: eigenvalues $\pm i$, a linear centre. Now $V''(x) = -1 + 2x$ and $V''(1) = 1 > 0$, so $V$ has a strict local minimum at $x=1$ and $E$ has a strict local minimum at $(1,0)$, with Hessian $\operatorname{diag}(1,1)$, which is positive definite. The fixed point is isolated. By the conservative-centre theorem, and again by the reversible-centre theorem, **$(1,0)$ is a nonlinear centre**, with $E(1,0) = -\tfrac12+\tfrac13 = -\tfrac16$.

**The homoclinic loop.** The saddle sits at level $E = 0$, whose equation is

$$
y^2 = x^2 - \tfrac23 x^3 = x^2\Bigl(1 - \tfrac{2x}{3}\Bigr).
$$

For $0 < x \le \tfrac32$ this defines a loop leaving the origin, reaching its rightmost point $(\tfrac32, 0)$ and returning; for $x<0$ it defines an unbounded branch. The loop carries no fixed point except the origin at its ends. On its lower half $y<0$, so $\dot x = y < 0$ and $x$ decreases monotonically to a limit $L \ge 0$; if $L>0$ the point would converge to $(L, y_L)$ with $y_L \neq 0$, contradicting $\dot x \to 0$, so $L = 0$. Hence the forward orbit tends to the saddle, and by the reflection symmetry so does the backward orbit: **the loop is a homoclinic orbit**. It is not periodic, because reaching the origin would take infinite time.

Its enclosed area is, by symmetry in $y$,

$$
A = 2\int_0^{3/2} x\sqrt{1 - \tfrac{2x}{3}}\;\mathrm d x
 = \frac92 \int_0^1 u\sqrt{1-u}\;\mathrm d u
 = \frac92\,B\bigl(2,\tfrac32\bigr) = \frac92\cdot\frac{4}{15} = \boxed{\tfrac{6}{5}} = 1.2 ,
$$

substituting $u = 2x/3$. (Numerical quadrature of the first integral returns $1.200000$.)

**Two periods.** Small oscillations about the centre have period $2\pi/\sqrt{V''(1)} = 2\pi \approx 6.283185$. For the closed orbit at energy $E = -0.1$, the turning points are the two roots of $\tfrac13x^3 - \tfrac12 x^2 + 0.1 = 0$ that bracket $x=1$, namely

$$
x_- = 0.5670689\ldots, \qquad x_+ = 1.3305409\ldots ,
$$

and the quadrature of step 7 gives

$$
T(-0.1) = 2\int_{x_-}^{x_+}\frac{\mathrm d x}{\sqrt{2\bigl(-0.1 - V(x)\bigr)}} = 6.7364788\ldots
$$

(computed to 25 digits with tanh-sinh quadrature, and confirmed to ten digits by integrating the system numerically from $(x_-,0)$ and timing the return). The orbit is $7.2\%$ slower than the harmonic estimate, which is the anharmonicity of the cubic well.
:::

:::example[Reversible but not conservative]{provenance=original}
Consider

$$
\dot x = x^2 + y^2 - 1, \qquad \dot y = xy .
$$

**Reversibility.** Take the reflection in the $y$-axis, $R(x,y) = (-x,y)$, an involution. Here $f_1$ is even in $x$ and $f_2$ is odd in $x$, which is exactly $f(R(p)) = -DR(p)f(p)$ with $DR = \operatorname{diag}(-1,1)$. Concretely, if $(x(t),y(t))$ is a solution then so is $(-x(-t), y(-t))$.

**Fixed points.** $xy = 0$ forces $x=0$ or $y=0$; with $x^2+y^2=1$ this gives the four points $(\pm1,0)$ and $(0,\pm1)$. The Jacobian is $\begin{pmatrix}2x & 2y\\ y & x\end{pmatrix}$:

| fixed point | Jacobian | eigenvalues | type |
|---|---|---|---|
| $(1,0)$ | $\operatorname{diag}(2,1)$ | $2,\;1$ | unstable node |
| $(-1,0)$ | $\operatorname{diag}(-2,-1)$ | $-2,\;-1$ | **stable node** |
| $(0,1)$ | $\begin{pmatrix}0&2\\1&0\end{pmatrix}$ | $\pm\sqrt2$ | saddle |
| $(0,-1)$ | $\begin{pmatrix}0&-2\\-1&0\end{pmatrix}$ | $\pm\sqrt2$ | saddle |

**Conclusion.** The point $(-1,0)$ has both eigenvalues negative, hence is attracting by :ref[the linearization theorem]{to=dyn.linearization}. A conservative system has no attracting fixed point, so **this system has no conserved quantity at all**: reversibility is strictly weaker than conservation. The reversal is visible in the table: $R$ exchanges $(1,0)$ with $(-1,0)$ and reverses the arrows, turning the unstable node into the stable one, and fixes each of the two saddles on the symmetry axis $x=0$.
:::

:::application[Radial motion in a central force, and why orbits are symmetric about their apsides]{provenance=adapted src="hirsch-smale-devaney-2013:§13.2, pp. 280-281, §13.3, pp. 282-285, §13.4, p. 286, and §9.4, Proposition, p. 208; strogatz-1994:§6.6, pp. 163-164"}
A particle of mass $m$ in the plane under a central potential $V(r)$ has, by :ref[the canonical equations]{to=var.canonical-equations}, the Hamiltonian

$$
H = \frac{p_r^2}{2m} + \frac{p_\theta^2}{2mr^2} + V(r),
$$

in which $\theta$ does not appear, so $p_\theta = m r^2\dot\theta = \ell$ is constant: this is the angular momentum whose conservation Hirsch, Smale and Devaney derive directly from centrality, together with the fact that the motion stays in a plane in the first place. Fixing $\ell$ reduces the radial motion to exactly the systems of this unit,

$$
\dot r = \frac{p_r}{m}, \qquad \dot p_r = -\,V_{\mathrm{eff}}'(r), \qquad
V_{\mathrm{eff}}(r) = V(r) + \frac{\ell^2}{2mr^2},
$$

a one-degree-of-freedom conservative system with conserved quantity $E = p_r^2/2m + V_{\mathrm{eff}}(r)$. Everything in this unit then reads off at once:

- A **circular orbit** is a fixed point of the radial system, that is, a critical point $r_\ast$ of $V_{\mathrm{eff}}$. The Jacobian there is $\begin{pmatrix}0 & 1/m\\ -V_{\mathrm{eff}}''(r_\ast) & 0\end{pmatrix}$, with eigenvalues $\lambda$ satisfying $\lambda^2 = -V_{\mathrm{eff}}''(r_\ast)/m$ — the two cases $\pm i\lambda$ and $\pm\lambda$ that Hirsch, Smale and Devaney's proposition allows at an equilibrium of a planar Hamiltonian system, and no others. The sign of $V_{\mathrm{eff}}''(r_\ast)$ decides which:
  - *Local minimum,* $V_{\mathrm{eff}}''(r_\ast) > 0$. Then $E = p_r^2/2m + V_{\mathrm{eff}}(r)$ has an isolated local minimum at $(r_\ast,0)$ and the centre theorem applies: nearby orbits oscillate periodically in $r$ between a pericentre and an apocentre, so the motion is **bounded and radially periodic**. This is the stability of nearly circular orbits.
  - *Local maximum,* $V_{\mathrm{eff}}''(r_\ast) < 0$. Then $(r_\ast,0)$ is **not** an extremum of $E$ but a saddle of it — $E$ increases in the $p_r$ direction and decreases in the $r$ direction — so neither the theorem nor its $-E$ form applies. The eigenvalues $\pm\sqrt{-V_{\mathrm{eff}}''(r_\ast)/m}$ are real and of opposite sign, and the circular orbit is an **unstable** one, a saddle of the radial flow.
- The **radial period** $T_r$ is the quadrature of step 7 with $V$ replaced by $V_{\mathrm{eff}}$. Over one radial period the angle advances by $\Delta\theta = \int_0^{T_r} \ell/(mr^2)\,\mathrm dt$, which is in general not $2\pi$; the orbit in the plane closes exactly when $\Delta\theta$ is a rational multiple of $2\pi$, and otherwise it precesses, filling an annulus densely.
- The radial system is reversible under $p_r \to -p_r$, $t \to -t$, since $V_{\mathrm{eff}}$ depends on $r$ only. The gluing argument of the reversible-centre proof is the statement that **the trajectory is symmetric about every apsis**: the outbound arc from pericentre to apocentre is the mirror image of the inbound arc. This is the standard apsidal symmetry of central-force orbits, and it is a consequence of the symmetry alone, not of any special form of $V$.
- Finally, a local maximum of $V_{\mathrm{eff}}$ is a saddle of the radial system, and the level set through it is a separatrix in the radial phase plane, exactly like the homoclinic loop of the worked example: inside it the particle oscillates in the well, outside it escapes or falls in. This happens for attractive potentials steeper than the inverse square — for $V = -k/r^3$, say, $V_{\mathrm{eff}} = -k/r^3 + \ell^2/(2mr^2)$ has its single critical point at $r_\ast = 3km/\ell^2$, where $V_{\mathrm{eff}}''(r_\ast) = -3k/r_\ast^5 < 0$: a maximum, hence an unstable circular orbit with a separatrix through it.
- The Kepler problem is **not** of that kind, and it is worth saying why. For $V = -k/r$ and $\ell \neq 0$,
$$
V_{\mathrm{eff}}(r) = -\frac{k}{r} + \frac{\ell^2}{2mr^2}, \qquad V_{\mathrm{eff}}'(r) = \frac{k}{r^2} - \frac{\ell^2}{mr^3},
$$
which vanishes at the single radius $r_\ast = \ell^2/(mk)$, where $V_{\mathrm{eff}}''(r_\ast) = k/r_\ast^3 > 0$. So $V_{\mathrm{eff}}$ has exactly one critical point, a minimum, and the radial system has **no saddle at all**: every circular Kepler orbit is stable. The familiar threshold $E = 0$ between bound ellipses and unbounded hyperbolas is not a critical level of $V_{\mathrm{eff}}$ but the non-critical limiting value $V_{\mathrm{eff}}(r) \to 0$ as $r \to \infty$; the parabolic orbit is the borderline case $E = 0$, on which the particle reaches infinity with zero speed.

The same picture is what makes a pendulum's phase portrait intelligible, with librations inside the separatrix and whirling motions outside it, and what underlies the magnetic-mirror confinement of charged particles, where the conserved magnetic moment turns the motion along a field line into one-dimensional motion in an effective potential well.
:::
