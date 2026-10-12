---
id: found.lagrange-multipliers
title: Lagrange multipliers
kind: method
level: core
summary: If a $C^1$ function has a local extremum, among the points of the common zero set of $m < n$ constraints, at a point where the $m$ constraint gradients are linearly independent, then its gradient there is a unique linear combination of them; this gives the standard recipe for constrained extrema together with the points at which the recipe can miss them.
prereqs: [found.implicit-inverse-function, found.taylor-several-variables, found.compactness]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Problem 11-11, p. 301 (multipliers for a function restricted to an embedded submanifold, with a local defining function); §5, p. 107 (regular level set, defining map, local defining function)"
    pages: "107, 301"
    role: the statement with its regularity hypothesis, and the definition that supplies that hypothesis
  - work: rhb-2006
    loc: "§5.9, pp. 167–171: the method for two variables, Eqs. (5.27)–(5.28), p. 168; two constraints, Eq. (5.31), p. 169; the worked case $f = x^3+y^3+z^3$ on a sphere, pp. 170–171, where dividing by a possibly zero variable loses solutions"
    pages: "167-171"
    role: the recipe in the form physicists use, the plus-sign convention $f + \lambda g$, and the warning about lost solutions
  - work: arfken-2013
    loc: "§22.3, pp. 1107–1109: constrained minima/maxima and the method of Lagrangian multipliers, Eqs. (22.63)–(22.66), p. 1108, and the $n$-variable, $k$-constraint form (22.67), p. 1109"
    pages: "1107-1109"
    role: the elimination argument behind the multiplier, the minus-sign convention, and the comparison with substituting the constraint
  - work: gelfand-fomin-1963
    loc: "§12.1, Thm 1 and its proof, pp. 43–45 (isoperimetric problem: the hypothesis that the extremal is not an extremal of the constraint functional)"
    pages: "43-45"
    role: the non-degeneracy hypothesis in the analogous variational theorem, cited for comparison
  - work: evans-2010
    loc: "§8.4.1, Thm 2 and proof, pp. 460–462 (Lagrange multiplier for a constrained minimiser, obtained from the implicit function theorem applied to $j(\\tau,\\sigma)$; step 3, p. 462, for the degenerate case)"
    pages: "460-462"
    role: the implicit-function-theorem route to the multiplier, in the function-space setting
---

:::definition[Constraint set, regular point, Lagrangian]{provenance=adapted src="lee-2013:§5, p. 107 and Problem 11-11, p. 301; rhb-2006:§5.9, pp. 168–169"}
Let $U \subseteq \mathbb{R}^n$ be open, let $1 \le m < n$, and let $g = (g_1, \dots, g_m) : U \to \mathbb{R}^m$ be of class $C^1$.

- The **constraint set** is the level set $M = \{x \in U : g(x) = 0\}$. (A constraint written $g_i(x) = c_i$ is brought to this form by replacing $g_i$ with $g_i - c_i$, which changes no derivative.)
- A point $x_* \in M$ is a **regular point of the constraint** if the $m \times n$ Jacobian matrix $J_g(x_*)$ has rank $m$; equivalently, if the gradients $\nabla g_1(x_*), \dots, \nabla g_m(x_*)$ are linearly independent. If every point of $M$ is regular, $M$ is a **regular level set** of $g$ and $g$ is a **defining function** for it.
- The **tangent space** to $M$ at a regular point $x_*$ is
  $$
  T_{x_*}M = \ker J_g(x_*) = \bigl\{ v \in \mathbb{R}^n : \nabla g_i(x_*) \cdot v = 0 \text{ for } i = 1, \dots, m \bigr\},
  $$
  a subspace of dimension $n - m$; its orthogonal complement, the **normal space**, is spanned by the $\nabla g_i(x_*)$.
- $f : U \to \mathbb{R}$ has a **local minimum on $M$** at $x_* \in M$ if there is $r > 0$ with $f(x) \ge f(x_*)$ for every $x \in M \cap B_r(x_*)$; a local maximum on $M$ reverses the inequality, and a **local extremum on $M$** is either. Only the values of $f$ on $M$ are compared, so $x_*$ need not be a critical point of $f$ on $U$.
- The **Lagrangian** of the problem is the function on $U \times \mathbb{R}^m$
  $$
  L(x, \lambda) = f(x) - \sum_{i=1}^{m} \lambda_i\, g_i(x),
  $$
  and $\lambda_1, \dots, \lambda_m$ are its **Lagrange multipliers** (also called undetermined multipliers).
:::

:::statement[First-order necessary condition]{provenance=adapted src="lee-2013:Problem 11-11, p. 301; rhb-2006:§5.9, Eqs. (5.27)–(5.28), p. 168 and Eq. (5.31), p. 169; arfken-2013:§22.3, Eq. (22.67), p. 1109"}
Let $U \subseteq \mathbb{R}^n$ be open, let $1 \le m < n$, let $f : U \to \mathbb{R}$ and $g = (g_1, \dots, g_m) : U \to \mathbb{R}^m$ be of class $C^1$, and let $M = \{x \in U : g(x) = 0\}$.

Suppose $f$ has a local extremum on $M$ at a point $x_* \in M$ which is a **regular point of the constraint**, that is $\operatorname{rank} J_g(x_*) = m$. Then there is exactly one $\lambda = (\lambda_1, \dots, \lambda_m) \in \mathbb{R}^m$ with

$$
\nabla f(x_*) = \sum_{i=1}^{m} \lambda_i\, \nabla g_i(x_*),
$$

equivalently $\nabla_x L(x_*, \lambda) = 0$. Since $\nabla_\lambda L(x_*,\lambda) = -g(x_*) = 0$ holds automatically for $x_* \in M$, the pair $(x_*, \lambda)$ is a critical point of $L$ on $U \times \mathbb{R}^m$, and the $n + m$ equations

$$
\frac{\partial f}{\partial x_j}(x) - \sum_{i=1}^{m} \lambda_i \frac{\partial g_i}{\partial x_j}(x) = 0 \quad (j = 1, \dots, n), \qquad g_i(x) = 0 \quad (i = 1, \dots, m)
$$

in the $n + m$ unknowns $(x, \lambda)$ hold at $(x_*, \lambda)$. Geometrically, $\nabla f(x_*)$ lies in the normal space of $M$ at $x_*$, that is $\nabla f(x_*) \cdot v = 0$ for every $v \in T_{x_*}M$: the derivative of $f$ vanishes in every direction tangent to the constraint set. The condition is **necessary only**: a solution of the displayed system need be neither a maximum nor a minimum of $f$ on $M$.
:::

:::idea[First-order necessary condition]{provenance=adapted src="arfken-2013:§22.3, Eqs. (22.63)–(22.66), p. 1108"}
Regularity says that $m$ of the $n$ coordinates can be eliminated. Call those $m$ coordinates $y$ and the remaining $n-m$ of them $u$, chosen so that $\partial g/\partial y$ is invertible; the implicit function theorem then presents $M$ near $x_*$ as the graph $y = h(u)$ of a $C^1$ map, and $f$ restricted to $M$ becomes an ordinary unconstrained function $F(u) = f(u,h(u))$ of the free variables, whose gradient must vanish. The chain rule turns that into one relation between the $u$- and the $y$-derivatives of $f$ and of $g$. Define $\lambda$ from the $y$-block alone, which is where $\partial g/\partial y$ can be inverted; the relation then says precisely that the $u$-block matches as well, and the two blocks together are $\nabla f(x_*) = \sum_i\lambda_i\nabla g_i(x_*)$.
:::

:::proof[First-order necessary condition]{provenance=adapted src="arfken-2013:§22.3, Eqs. (22.63)–(22.66), p. 1108; evans-2010:§8.4.1, proof of Thm 2, pp. 460–462"}
1. *Split the coordinates.* $J_g(x_*)$ is $m\times n$ of rank $m$, so $m$ of its columns are linearly independent. Relabel the coordinates of $\mathbb{R}^n$ so that these are the last $m$, writing $x = (u,y)$ with $u\in\mathbb{R}^{n-m}$ and $y\in\mathbb{R}^m$, and $x_* = (u_*,y_*)$. A relabelling permutes the entries of every gradient in the same way, so a conclusion of the form $\nabla f = \sum_i\lambda_i\nabla g_i$ is unaffected by it. By construction $\partial g/\partial y\,(x_*)$ is an invertible $m\times m$ matrix.
2. *Eliminate $y$.* Apply the :ref[implicit function theorem]{to=found.implicit-inverse-function} to $g$ at $(u_*,y_*)$ with level $c = 0$: there are open sets $V_0\ni u_*$ and $W_0 \ni y_*$ with $V_0\times W_0\subseteq U$, and a $C^1$ map $h : V_0\to W_0$ with $h(u_*) = y_*$, such that for $(u,y)\in V_0\times W_0$
   $$
   g(u,y) = 0 \iff y = h(u) .
   $$
3. *The restricted problem is unconstrained.* Put $F(u) = f\bigl(u, h(u)\bigr)$, a $C^1$ function on $V_0$. Let $r>0$ be the radius in the hypothesis that $x_*$ is a local extremum of $f$ on $M$, and shrink $V_0$ so that $(u,h(u)) \in B_r(x_*)$ for every $u\in V_0$, which is possible because $u\mapsto (u,h(u))$ is continuous and maps $u_*$ to $x_*$. Each such point lies in $M$ by step 2, so $F(u)\ge F(u_*)$ for all $u\in V_0$ in the minimum case and $F(u)\le F(u_*)$ in the maximum case. Hence $u_*$ is an unconstrained local extremum of $F$ at an interior point of its domain, so $\nabla F(u_*) = 0$: each partial derivative is the derivative of a one-variable differentiable function with an interior local extremum, and so vanishes.
4. *What the chain rule makes of that.* Differentiating $F = f\circ(u\mapsto(u,h(u)))$ at $u_*$ with the :ref[chain rule]{to=found.partial-derivatives-chain-rule} gives, as an identity between $1\times(n-m)$ row vectors,
   $$
   0 \;=\; \frac{\partial f}{\partial u}(x_*) + \frac{\partial f}{\partial y}(x_*)\, Dh(u_*) .
   $$
5. *What the implicit function theorem gives for $Dh$.* Its derivative formula, applied to $g$, reads
   $$
   Dh(u_*) = -\left[\frac{\partial g}{\partial y}(x_*)\right]^{-1}\frac{\partial g}{\partial u}(x_*) .
   $$
6. *Define the multipliers, then check both blocks.* Put
   $$
   \lambda^{\mathsf T} \;=\; \frac{\partial f}{\partial y}(x_*)\left[\frac{\partial g}{\partial y}(x_*)\right]^{-1} \;\in\; \mathbb{R}^{1\times m},
   $$
   which is Arfken's $\lambda = (\partial f/\partial z)\big/(\partial g/\partial z)$ with a matrix inverse in place of the division. The $y$-block then holds by construction,
   $$
   \frac{\partial f}{\partial y}(x_*) = \lambda^{\mathsf T}\frac{\partial g}{\partial y}(x_*) ,
   $$
   and substituting step 5 into step 4 gives the $u$-block:
   $$
   \frac{\partial f}{\partial u}(x_*) = -\frac{\partial f}{\partial y}(x_*)Dh(u_*) = \frac{\partial f}{\partial y}(x_*)\left[\frac{\partial g}{\partial y}(x_*)\right]^{-1}\frac{\partial g}{\partial u}(x_*) = \lambda^{\mathsf T}\frac{\partial g}{\partial u}(x_*) .
   $$
   Together the two blocks say $Df(x_*) = \lambda^{\mathsf T}J_g(x_*)$, that is $\nabla f(x_*) = \sum_{i=1}^m \lambda_i\nabla g_i(x_*)$; undoing the relabelling of step 1 states it in the original coordinates.
7. *Uniqueness, and the other forms of the conclusion.* If $\sum_i \lambda_i\nabla g_i(x_*) = \sum_i\mu_i\nabla g_i(x_*)$ then $\sum_i(\lambda_i-\mu_i)\nabla g_i(x_*) = 0$, and the rank hypothesis makes those gradients linearly independent, so $\mu = \lambda$: the multiplier is unique. For $v\in T_{x_*}M = \ker J_g(x_*)$ we get $\nabla f(x_*)\cdot v = \lambda^{\mathsf T}J_g(x_*)v = 0$, the geometric form. And $\nabla_xL(x_*,\lambda) = \nabla f(x_*) - \sum_i\lambda_i\nabla g_i(x_*) = 0$ while $\nabla_\lambda L(x_*,\lambda) = -g(x_*) = 0$ because $x_* \in M$, so $(x_*,\lambda)$ is a critical point of $L$ on $U\times\mathbb{R}^m$. $\square$

Arfken carries out exactly this elimination for $n = 3$, $m = 1$, and his Eq. (22.65) is step 6 in that case; Evans's Thm 2 follows the same implicit-function route in a function space. The $m$-constraint bookkeeping and the relabelling of step 1 are ours.
:::

:::note{provenance=original}
**What it means.** On the constraint set only $n - m$ of the $n$ coordinates can be moved freely, so the right first-order condition is not that $\nabla f$ vanish but that it have no component along the directions one is still allowed to move in — and those are exactly the directions perpendicular to all the constraint gradients. The multipliers are the coefficients that express the leftover, normal part of $\nabla f$. The reason the regularity hypothesis is needed, and the reason the result is true, is the :ref[implicit function theorem]{to=found.implicit-inverse-function}: where the constraint gradients are independent, $m$ of the variables can be eliminated as $C^1$ functions of the other $n-m$, turning the problem into an unconstrained one in $n-m$ free variables.
:::

:::method[Constrained extrema by multipliers]{provenance=adapted src="rhb-2006:§5.9, pp. 168–171; arfken-2013:§22.3, pp. 1107–1109"}
To find the extrema of a $C^1$ function $f$ on $M = \{x \in U : g(x) = 0\}$, with $g$ of class $C^1$ and $m < n$ constraints:

1. **Write the constraints as equalities with zero on the right**, $g_i(x) = 0$, and count: $n$ variables, $m$ constraints, $m < n$.
2. **Form the Lagrangian** $L(x,\lambda) = f(x) - \sum_i \lambda_i g_i(x)$.
3. **Solve the $n+m$ stationarity equations** $\partial L/\partial x_j = 0$ for $j \le n$ together with $g_i(x) = 0$ for $i \le m$, in the $n+m$ unknowns $x_1, \dots, x_n, \lambda_1, \dots, \lambda_m$. Keep every branch: never divide by a quantity that could vanish without treating that case separately — the step at which Riley, Hobson and Bence's worked sphere problem would lose solutions.
4. **List separately every point of $M$ where $\operatorname{rank} J_g < m$.** The theorem says nothing at such points, so they are extra candidates and must be examined on their own.

**How it fails.** Step 3 finds only regular candidates, so skipping step 4 can miss the answer outright (see the remark). The equations locate maxima, minima and saddle points alike — Arfken makes this point on p. 1109 — so they only produce candidates; and on a non-compact $M$, or when $f$ is unbounded on $M$, there may be no extremum at all although step 3 has solutions. The alternative of substituting the constraint to eliminate a variable, which Arfken contrasts the method with, is equally valid whenever the elimination can actually be carried out; multipliers are preferred when it cannot be, or when the symmetry of the variables should be kept.
:::

:::method[Deciding which candidates are extrema]{provenance=original}
The multiplier equations do not say which candidates are extrema. Let $C \subseteq M$ be the set of candidates produced by steps 3 and 4 above.

5. **If $M$ is compact** (closed and bounded) and $f$ is continuous on $M$, then $f$ attains a maximum and a minimum on $M$, and by the theorem each is attained at a point of $C$. So the largest and the smallest value of $f$ on $C$ are the maximum and the minimum of $f$ on $M$; when $C$ is finite this is a comparison of finitely many numbers, and when it is not, it is the easier problem of extremising $f$ on $C$. No second-order test is needed. The multipliers may be discarded once $x_*$ is known.
6. **Otherwise test a candidate directly.** With $f$ and $g$ of class $C^2$, $x_*$ a regular point, $\lambda$ the multiplier belonging to $x_*$, and
   $$
   H \;=\; H_f(x_*) - \sum_{i=1}^{m} \lambda_i\, H_{g_i}(x_*)
   $$
   the Hessian of $x \mapsto L(x,\lambda)$ at $x_*$: if $h^{\mathsf T} H h > 0$ for every non-zero $h \in T_{x_*}M$ then $x_*$ is a strict local minimum of $f$ on $M$, and if $h^{\mathsf T} H h < 0$ for every such $h$ then a strict local maximum. $H$ need only be definite on the tangent space, not on all of $\mathbb{R}^n$; if it is indefinite on the tangent space, $x_*$ is neither.
:::

:::idea[Why steps 5 and 6 work]{provenance=original}
Step 5 needs no calculus. On a compact constraint set a continuous $f$ attains its largest and smallest values somewhere, and wherever that is, either the theorem applies there or the rank condition fails there — so the point is already on the candidate list, and comparing values on the list is the whole of the matter. Step 6 is the unconstrained second-derivative test in disguise: parametrise $M$ near $x_*$ by the free variables, and the Hessian of $f$ pulled back to those parameters turns out to be exactly $H$ restricted to the tangent space, because the first-order condition annihilates the terms that involve the curvature of the parametrisation. That is what the Hessian of the Lagrangian, rather than of $f$, is for.
:::

:::proof[The tests of steps 5 and 6]{provenance=original}
**Step 5.** Let $M$ be compact and $f$ continuous on $M$. If $M = \varnothing$ there is nothing to extremise, so assume $M \neq \varnothing$. By the extreme value theorem (:ref[compactness]{to=found.compactness}), which is stated there for a non-empty compact space, $f$ attains a maximum at some $\hat x\in M$ and a minimum at some $\check x\in M$. Now $\hat x$ is in particular a local maximum of $f$ on $M$, so:

- if $\operatorname{rank}J_g(\hat x) = m$, the first-order condition applies at $\hat x$ and produces a $\lambda$ solving the $n+m$ equations, so $\hat x$ is among the solutions found in step 3;
- otherwise $\operatorname{rank}J_g(\hat x) < m$ and $\hat x$ is listed by step 4.

Either way $\hat x \in C$, and the same for $\check x$. Hence $\max_M f = \max_C f$ and $\min_M f = \min_C f$, and these are attained at points of $C$ — which is what step 5 asserts, with no second-order information used. $\square$

**Step 6.** Let $f, g$ be of class $C^2$, let $x_*\in M$ be a regular point with multiplier $\lambda$, and let $H = H_f(x_*) - \sum_i\lambda_iH_{g_i}(x_*)$.

1. *A $C^2$ parametrisation of $M$ near $x_*$.* Repeat steps 1 and 2 of the previous proof; since $g$ is now $C^2$, the implicit function theorem returns an $h$ of class $C^2$. Put $\phi(u) = (u, h(u))$ for $u\in V_0$: a $C^2$ map whose image is $M\cap(V_0\times W_0)$, and a homeomorphism onto that set, its inverse being the restriction of the projection $(u,y)\mapsto u$. Write $P = D\phi(u_*)$, an $n\times(n-m)$ matrix whose top block is $I_{n-m}$, so $\operatorname{rank}P = n-m$.
2. *Its image is the tangent space.* Differentiating $g(\phi(u)) = 0$ at $u_*$ gives $J_g(x_*)P = 0$, so the image of $P$ lies in $T_{x_*}M = \ker J_g(x_*)$; both spaces have dimension $n-m$, so they coincide.
3. *The pulled-back Hessian is $H$ on the tangent space.* Put $F = f\circ\phi$ and $G_i = g_i\circ\phi$, all of class $C^2$ on $V_0$. Two applications of the chain rule give, for $\alpha,\beta \le n-m$,
   $$
   \frac{\partial^2 F}{\partial u_\alpha \partial u_\beta}(u_*) = \bigl(P^{\mathsf T}H_f(x_*)P\bigr)_{\alpha\beta} + \sum_{j=1}^{n}\frac{\partial f}{\partial x_j}(x_*)\,\frac{\partial^2\phi_j}{\partial u_\alpha\partial u_\beta}(u_*),
   $$
   and the same formula with each $g_i$ in place of $f$ — whose left-hand side is $0$, because $G_i$ vanishes identically on $V_0$. Multiplying the $g_i$ identity by $\lambda_i$, summing over $i$ and subtracting from the $f$ identity,
   $$
   H_F(u_*) = P^{\mathsf T}HP + \sum_{j=1}^{n}\left(\frac{\partial f}{\partial x_j}(x_*) - \sum_{i=1}^{m}\lambda_i\frac{\partial g_i}{\partial x_j}(x_*)\right)H_{\phi_j}(u_*) = P^{\mathsf T}HP ,
   $$
   since each bracket is a component of $\nabla f(x_*) - \sum_i\lambda_i\nabla g_i(x_*)$, which vanishes by the first-order condition. This is where the multiplier earns its keep: it is exactly what makes the second derivatives of the parametrisation drop out.
4. *And $u_*$ is a critical point of $F$.* $\nabla F(u_*) = P^{\mathsf T}\nabla f(x_*) = 0$, because the columns of $P$ lie in $T_{x_*}M$ and $\nabla f(x_*)$ is orthogonal to that space, by the geometric form of the first-order condition.
5. *Conclude.* Suppose $h^{\mathsf T}Hh>0$ for every non-zero $h\in T_{x_*}M$. For $w \ne 0$ in $\mathbb{R}^{n-m}$ we have $Pw\ne0$ and $Pw\in T_{x_*}M$, so $w^{\mathsf T}H_F(u_*)w = (Pw)^{\mathsf T}H(Pw)>0$: the matrix $H_F(u_*)$ is positive definite. By part 1 of the classification in :ref[Taylor expansion and critical points in several variables]{to=found.taylor-several-variables}, $u_*$ is a strict local minimum of $F$: there is $\rho>0$ with $F(u)>F(u_*)$ for $0<\lvert u-u_*\rvert<\rho$. Because $\phi$ is a homeomorphism onto $M\cap(V_0\times W_0)$, every point of $M$ close enough to $x_*$ is $\phi(u)$ for exactly one $u$ with $\lvert u - u_*\rvert<\rho$, and $x\ne x_*$ corresponds to $u\ne u_*$; hence $f(x)>f(x_*)$ for all such $x\ne x_*$, which is a strict local minimum of $f$ on $M$. The maximum case is this one applied to $-f$, whose multiplier is $-\lambda$ and whose matrix is $-H$. Finally, if $H$ is indefinite on $T_{x_*}M$ then $H_F(u_*)$ is indefinite, so by part 3 of the same classification every neighbourhood of $u_*$ contains points where $F$ exceeds $F(u_*)$ and points where it is smaller; transporting these through $\phi$ shows $x_*$ is neither a local minimum nor a local maximum of $f$ on $M$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *The rank condition cannot be dropped.* Minimise $f(x,y) = x$ subject to $g(x,y) = y^2 - x^3 = 0$ on $U = \mathbb{R}^2$. The constraint set is the cuspidal curve $y^2 = x^3$, which forces $x \ge 0$, so the minimum of $f$ on $M$ is at the origin. But $\nabla g(0,0) = (-3x^2,2y)\big|_{(0,0)} = (0,0)$ has rank $0$, and $\nabla f(0,0) = (1,0) \ne \lambda(0,0)$ for any $\lambda$: the multiplier equation has no solution at the true minimiser, which step 3 misses and only step 4 finds.
- *Uniqueness of $\lambda$ comes from the same hypothesis:* linear independence of the $\nabla g_i(x_*)$ is exactly what makes the coefficients in $\nabla f(x_*) = \sum_i \lambda_i \nabla g_i(x_*)$ unique.
- *Necessary, not sufficient.* For $f(x,y) = y$ with $g(x,y) = y - x^3 = 0$, $\nabla g = (-3x^2,1)$ never vanishes, so every point of $M$ is regular, and $(0,1) = \lambda(-3x^2,1)$ gives $\lambda = 1$, $x = 0$. But $f$ on $M$ is $x \mapsto x^3$, with no local extremum at $x = 0$. The system cannot tell maxima, minima and neither apart; that is what steps 5 and 6 are for.
- *$m < n$ is needed for the problem to be non-trivial.* With $m = n$ and the rank condition, $g$ is a local diffeomorphism near $x_*$ by the :ref[inverse function theorem]{to=found.implicit-inverse-function}, so $M$ is locally the single point $x_*$; with $m > n$ the rank condition is unsatisfiable.
- *Equality constraints only.* For inequality constraints $g_i(x) \le 0$ the first-order conditions carry sign restrictions on the multipliers and a complementarity condition, and are not covered here.
- *Sign conventions.* We write $L = f - \sum_i \lambda_i g_i$, which is Arfken's convention: his Eqs. (22.66)–(22.67), pp. 1108–1109, read $\partial f/\partial x_i - \sum_j \lambda_j\,\partial g_j/\partial x_i = 0$. Riley, Hobson and Bence use the opposite sign — $f + \lambda g$ in Eqs. (5.27)–(5.28), $f + \lambda g + \mu h$ in (5.31) — which replaces each $\lambda_i$ by $-\lambda_i$ and changes nothing about the solutions $x_*$. The sign matters when the multiplier itself is interpreted, as a sensitivity or as a physical quantity such as a force or a chemical potential: with our convention, and under hypotheses making the optimal point and multiplier differentiable in the constraint levels $c$, $\lambda_i$ is $\partial/\partial c_i$ of the constrained optimal value of $f$.
- *The analogous hypothesis in the variational setting.* Gelfand and Fomin's isoperimetric theorem (Thm 1, §12.1, p. 43) assumes that the extremal of $J$ is *not* an extremal of the constraint functional $K$ before producing $\lambda$; their footnote names the analogy with the finite-dimensional method, and that hypothesis is the infinite-dimensional counterpart of $\operatorname{rank}J_g(x_*) = m$. Evans's Theorem 2 (§8.4.1, p. 460) carries no such hypothesis: it assumes only that $u$ minimises $I$ over the admissible class. Non-degeneracy of the constraint enters there only inside the proof, as the case assumption (13) under which the implicit function theorem is applied, and step 3 (p. 462) treats the opposite case and finds the conclusion holds trivially, for any $\lambda$. In our finite-dimensional statement the regularity hypothesis cannot be dispensed with that way, as the cuspidal curve above shows.
- *Smoothness class in the sources.* Lee's Problem 11-11 states the result for a smooth function on a smooth manifold with a smooth local defining function — his name for a map whose zero set is the constraint set and whose differential is surjective there, so his regularity hypothesis contains ours. The version above is for $C^1$ data on an open subset of $\mathbb{R}^n$, which is what the implicit function theorem route needs and the generality the physics texts use.
:::

:::example[Two constraints on a sphere, and a non-compact constraint set]{provenance=original}
**(a) The highest point of a tilted great circle.** Maximise and minimise $f(x,y,z) = z$ on
$$
M = \bigl\{ (x,y,z) : g_1 = x^2+y^2+z^2-1 = 0, \;\; g_2 = x+y+z = 0 \bigr\},
$$
the great circle cut from the unit sphere by a plane through the origin. Here $n = 3$, $m = 2$.

*Step 4 first: every point is regular.* $\nabla g_1 = 2(x,y,z)$ and $\nabla g_2 = (1,1,1)$ are linearly dependent only if $(x,y,z)$ is a multiple of $(1,1,1)$; on $M$ the plane equation then forces $3x = 0$, hence $(x,y,z) = (0,0,0)$, which is not on the sphere. So $\operatorname{rank}J_g = 2$ at every point of $M$ and step 4 contributes no candidates.

*Step 3.* With $L = z - \lambda_1(x^2+y^2+z^2-1) - \lambda_2(x+y+z)$ the stationarity equations are
$$
0 = 2\lambda_1 x + \lambda_2, \qquad 0 = 2\lambda_1 y + \lambda_2, \qquad 1 = 2\lambda_1 z + \lambda_2 ,
$$
together with the two constraints. Subtracting the first two gives $2\lambda_1(x-y) = 0$. If $\lambda_1 = 0$ the first equation gives $\lambda_2 = 0$ and the third then reads $1 = 0$; so $\lambda_1 \ne 0$ and $x = y$. The plane gives $z = -2x$, and the sphere $2x^2 + 4x^2 = 1$, so $x = \pm 1/\sqrt6$. The two candidates are
$$
\Bigl(\tfrac{1}{\sqrt6}, \tfrac{1}{\sqrt6}, -\tfrac{2}{\sqrt6}\Bigr) \quad\text{and}\quad \Bigl(-\tfrac{1}{\sqrt6},-\tfrac{1}{\sqrt6}, \tfrac{2}{\sqrt6}\Bigr).
$$
Their multipliers follow from the first and third equations: $1 = 2\lambda_1(z-x)$, and for the second point $z - x = 3/\sqrt6$, so $\lambda_1 = 1/\sqrt6$ and $\lambda_2 = -2\lambda_1x = 1/3$.

*Step 5.* $M$ is closed (an intersection of two level sets of continuous functions) and bounded (it lies on the unit sphere), hence compact, and $f$ is continuous, so the maximum and the minimum of $f$ on $M$ are attained and lie among the two candidates. Comparing the two values of $z$,
$$
\max_M z = \frac{2}{\sqrt6} = \sqrt{\tfrac23} \approx 0.8165, \qquad \min_M z = -\frac{2}{\sqrt6} \approx -0.8165 ,
$$
with no second-order test needed. *Independent check:* on $M$, $x + y = -z$ and $x^2+y^2 = 1-z^2$, while $x^2+y^2 \ge (x+y)^2/2$ always; so $1 - z^2 \ge z^2/2$, that is $z^2 \le 2/3$, with equality when $x = y$ — exactly the bound just found.

**(b) A non-compact constraint set, where step 6 is needed.** Minimise $f(x,y) = x+y$ on $M = \{xy = 1,\; x>0\}$, taking $U = \{(x,y) : x > 0\}$ and $g = xy - 1$. Then $\nabla g = (y,x)$, which is non-zero on $M$, so every point is regular and step 4 is empty. Step 3: $(1,1) = \lambda(y,x)$ gives $y = x = 1/\lambda$, and $xy = 1$ with $x>0$ gives $x = y = 1$, $\lambda = 1$; the single candidate is $(1,1)$ with $f = 2$. $M$ is closed but unbounded, so step 5 does not apply. Step 6:
$$
H = H_f(1,1) - \lambda H_g(1,1) = \begin{pmatrix}0&0\\0&0\end{pmatrix} - 1\cdot\begin{pmatrix}0&1\\1&0\end{pmatrix} = \begin{pmatrix}0&-1\\-1&0\end{pmatrix},
$$
and $T_{(1,1)}M = \ker\begin{pmatrix}1&1\end{pmatrix} = \operatorname{span}\{(1,-1)^{\mathsf T}\}$. For $h = t(1,-1)^{\mathsf T}$ with $t \ne 0$,
$$
h^{\mathsf T}Hh = t^2\,(1,-1)\begin{pmatrix}0&-1\\-1&0\end{pmatrix}\begin{pmatrix}1\\-1\end{pmatrix} = t^2\,(1,-1)\begin{pmatrix}1\\-1\end{pmatrix} = 2t^2 > 0,
$$
so $(1,1)$ is a strict local minimum of $f$ on $M$. Note that $H$ itself is indefinite on $\mathbb{R}^2$ (its eigenvalues are $\pm1$): definiteness on the tangent line is all that is required, and all that holds. *Check:* for $x>0$, $x + 1/x \ge 2$ by $(\sqrt x - 1/\sqrt x)^2 \ge 0$, with equality only at $x=1$, so $(1,1)$ is in fact the global minimiser and $\min_M f = 2$.
:::

:::application[The Boltzmann distribution as a constrained maximum of entropy]{provenance=original}
A system with $n \ge 3$ accessible microstates of energies $E_1,\dots,E_n$, not all equal, is described by probabilities $p = (p_1,\dots,p_n)$. Gibbs's variational principle takes the equilibrium distribution to be the one maximising the entropy
$$
S(p) = -k\sum_{i=1}^{n} p_i\ln p_i
$$
on the open set $U = \{p : p_i>0 \text{ for all } i\}$, subject to the two constraints
$$
g_1(p) = \sum_i p_i - 1 = 0, \qquad g_2(p) = \sum_i p_iE_i - \bar U = 0 ,
$$
normalisation and a prescribed mean energy $\bar U$. Here $m = 2 < n$.

*Regularity.* $\nabla g_1 = (1,\dots,1)$ and $\nabla g_2 = (E_1,\dots,E_n)$ are linearly independent precisely because the energies are not all equal, so every point of $M$ is a regular point and the first-order condition applies at any maximiser.

*The multiplier equations.* $\partial S/\partial p_i = -k(\ln p_i + 1)$, so $\nabla S = \lambda_1\nabla g_1 + \lambda_2\nabla g_2$ reads
$$
-k(\ln p_i + 1) = \lambda_1 + \lambda_2 E_i \qquad (i = 1,\dots,n),
$$
that is $p_i = e^{-1-\lambda_1/k}\,e^{-\beta E_i}$ with $\beta = \lambda_2/k$. The factor in front is the same for every $i$, so imposing $g_1 = 0$ fixes it and gives the **Boltzmann distribution**
$$
p_i = \frac{e^{-\beta E_i}}{Z}, \qquad Z = \sum_{j=1}^{n} e^{-\beta E_j} ,
$$
with $\beta$ then determined by $g_2 = 0$, that is by $-\partial(\ln Z)/\partial\beta = \bar U$. Two features of the method are doing real work here. The multipliers are not nuisances to be eliminated but the answer: $\lambda_2 = k\beta$ is, by the sensitivity reading of the multiplier noted in the remark above, the derivative of the maximal entropy with respect to the mean energy, which thermodynamics calls $1/T$ — so $\beta = 1/(kT)$, and the temperature *is* the multiplier conjugate to the energy constraint. And the single candidate produced is the maximiser: $S$ is strictly concave on $U$ (each $-p\ln p$ is), while $M$ is the intersection of $U$ with an affine subspace and so convex, and a critical point of a strictly concave function on a convex set is its unique maximiser.

*A worked instance.* Take three equally spaced levels $E_i = (i-1)\epsilon$ for $i = 1,2,3$ and $\bar U = 0.8\,\epsilon$. With $w = e^{-\beta\epsilon}$ the constraint $g_2 = 0$ becomes
$$
\frac{w + 2w^2}{1 + w + w^2} = \frac45 \;\Longleftrightarrow\; 6w^2 + w - 4 = 0 \;\Longrightarrow\; w = \frac{\sqrt{97}-1}{12} \approx 0.7374048 ,
$$
taking the positive root. Then $\beta\epsilon = -\ln w \approx 0.3046183$, so $kT \approx 3.2828\,\epsilon$; $Z = 1+w+w^2 \approx 2.2811707$ and
$$
p \approx (0.4383714,\; 0.3232572,\; 0.2383714), \qquad S/k \approx 1.0683834 .
$$
The mean energy checks: $0.3232572 + 2(0.2383714) = 0.8000000$. And $S/k$ sits just below $\ln 3 \approx 1.0986123$, the entropy of the uniform distribution, which is the unconstrained maximum — the energy constraint costs a little entropy, as it must.
:::
