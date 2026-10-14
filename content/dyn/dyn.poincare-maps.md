---
id: dyn.poincare-maps
title: Poincare maps
kind: method
level: core
summary: Replaces a closed orbit of a flow by a fixed point of the first-return map on a transverse surface, shows that this map is well defined and continuously differentiable near the orbit, identifies the eigenvalues of its linearisation with the nontrivial Floquet multipliers of the orbit -- so that they decide its stability and their product is $\exp\int_0^T \nabla\cdot f$ -- and works the machinery through two systems whose return maps can be written down.
prereqs: [dyn.poincare-bendixson, dyn.one-dimensional-maps, ode.floquet-theory, ode.continuous-dependence, found.implicit-inverse-function, linalg.jordan-form]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§8.7 (the surface of section, the Poincare map as the map from one intersection to the next, a fixed point of $P$ as a closed orbit of the flow, the cobweb used to iterate a one-dimensional return map, the linearised Poincare map $DP(x^*)$, the criterion that the orbit is linearly stable exactly when all eigenvalues of $DP$ lie inside the unit circle, and the names characteristic and Floquet multiplier together with the remark that the trivial multiplier $1$ along the orbit has been discarded), pp. 278-283"
    pages: "278-283"
    role: definition of the section and the return map; the linearised return map and the multiplier criterion; the convention that the multipliers are the nontrivial ones
  - work: hirsch-smale-devaney-2013
    loc: "§10.2 (local sections, flow boxes, and the proposition that the time of first arrival at a section is a continuously differentiable function of the starting point, proved by the implicit function theorem), pp. 216-218; §10.3 (the first-return map on a local section at a point of a closed orbit, its definition and smoothness near that point, the planar proposition that $|P'(X_0)| < 1$ forces asymptotic stability, and the warning that $P$ is almost never available in closed form), pp. 218-220"
    pages: "216-220"
    role: existence and smoothness of the return map; the planar stability proposition; the observation that a section is useful even when $P$ cannot be computed
---

:::definition[Surface of section, return map, multipliers]{provenance=adapted src="strogatz-1994:§8.7, pp. 278-281; hirsch-smale-devaney-2013:§10.2, p. 217, and §10.3, p. 219"}
Let $f$ be continuously differentiable on an open set $U \subseteq \mathbb{R}^n$ and let $\phi_t$ be the flow of $\dot x = f(x)$ (:ref[]{to=ode.existence-uniqueness}).

A **surface of section** is a set $S \subseteq U$ of dimension $n-1$ that the flow crosses cleanly. Concretely we take

$$
S \;=\; \{\, x \in W : g(x) = 0 \,\}, \qquad W \subseteq U \text{ open},
$$

where $g : W \to \mathbb{R}$ is continuously differentiable and

$$
\nabla g(x) \cdot f(x) \;\neq\; 0 \qquad\text{for every } x \in S .
$$

This last condition is **transversality**: the velocity never lies in the tangent plane $\ker \nabla g(x)$ of $S$, so no trajectory grazes $S$ or runs along it, and all trajectories pierce $S$ in the same direction, the one in which $g$ increases. For $n = 2$ this is the local section already used in :ref[the Poincare-Bendixson theorem]{to=dyn.poincare-bendixson}, where $g(x) = (x - x_0)\cdot f(x_0)$ and $S$ is a short straight segment.

Fix $x \in S$. If there is a smallest $t > 0$ with $\phi_t(x) \in S$, write $\tau(x)$ for it -- the **return time** -- and set

$$
P(x) \;=\; \phi_{\tau(x)}(x) .
$$

The map $P$, defined on the set of points of $S$ that do return, is the **Poincare map**, or **first-return map**, of $S$. It turns the continuous time of the flow into the integer time of a map of the $(n-1)$-dimensional set $S$ into itself, so the whole apparatus of :ref[one-dimensional maps]{to=dyn.one-dimensional-maps} and its higher-dimensional analogue applies to it.

The point of the construction is the dictionary it sets up. A closed orbit $\gamma$ of least period $T$ that meets $S$ at $x^*$ and nowhere else in one circuit gives $P(x^*) = x^*$ with $\tau(x^*) = T$; conversely a fixed point of $P$ is a point whose trajectory returns to itself, hence a closed orbit. A $p$-cycle of $P$ is a closed orbit that threads $S$ $p$ times before closing up.

Let $\gamma$ be such a closed orbit and $x^*$ its intersection with $S$. The derivative $DP(x^*)$, restricted to the tangent plane $T_{x^*}S = \ker\nabla g(x^*)$, is the **linearised Poincare map**: an $(n-1)\times(n-1)$ matrix once a basis of that plane is fixed. Its eigenvalues $\lambda_1, \dots, \lambda_{n-1}$ are the **characteristic multipliers**, or **Floquet multipliers**, of $\gamma$. The name is the one used for the eigenvalues of the monodromy matrix of the $T$-periodic variational equation $\dot v = Df(\gamma(t))v$ (:ref[]{to=ode.floquet-theory}); the statement below shows that the two lists agree once the monodromy matrix's unavoidable eigenvalue $1$ -- the **trivial multiplier**, belonging to displacements along the orbit, which are time shifts and not real perturbations -- is deleted. Strogatz records the same convention.

A time-periodic system $\dot x = F(x,t)$ with $F(x, t+T) = F(x,t)$ is covered by this: adjoin $\dot\theta = 1$ on $\mathbb{R}^n \times \mathbb{R}/T\mathbb{Z}$ and take $S = \{\theta = 0\}$, which is transverse because $\nabla\theta \cdot (F,1) = 1$. Every point returns, with $\tau \equiv T$, and $P$ is the **stroboscopic map**: photograph the state once per drive period.
:::

:::statement[The return map exists, is smooth, and decides stability]{provenance=adapted src="hirsch-smale-devaney-2013:§10.2, Proposition, p. 217, and §10.3, p. 219; strogatz-1994:§8.7, pp. 281-282"}
Let $f \in C^1(U)$, let $\gamma$ be a closed orbit of least period $T > 0$, let $x^* \in \gamma$, and let $S$ be a surface of section containing $x^*$, as above.

1. **(Well defined and $C^1$.)** There is a relatively open neighbourhood $V$ of $x^*$ in $S$ and a continuously differentiable $\tau : V \to \mathbb{R}$ with $\tau(x^*) = T$ such that $\phi_{\tau(x)}(x) \in S$ for every $x \in V$, and $\tau(x)$ is the *first* positive return time for $x$ close enough to $x^*$. Hence $P(x) = \phi_{\tau(x)}(x)$ is continuously differentiable on a neighbourhood of $x^*$ in $S$, with $P(x^*) = x^*$.
2. **(Attracting case.)** If every eigenvalue of $DP(x^*)$ satisfies $|\lambda_j| < 1$, then $\gamma$ is **asymptotically orbitally stable**: there is a neighbourhood $N$ of $\gamma$ in $U$ such that every trajectory starting in $N$ stays in $N$ and its distance to $\gamma$ tends to $0$.
3. **(Repelling case in the plane.)** For $n = 2$, $DP(x^*)$ is the single number $P'(x^*)$, and the criterion is exactly the sink/source criterion for a fixed point of a map on an interval (:ref[]{to=dyn.one-dimensional-maps}): $|P'(x^*)| < 1$ gives an attracting closed orbit, $|P'(x^*)| > 1$ a repelling one, and $|P'(x^*)| = 1$ settles nothing.
4. **(Borderline.)** If $\max_j|\lambda_j| = 1$ the linearisation does not decide the stability of $\gamma$; this is where closed orbits bifurcate.
:::

:::statement[The multipliers, and what their product must be]{label="Theorem" provenance=original}
In the setting above, let $\Phi(t)$ be the matrix solution of the variational equation along $\gamma$,

$$
\dot\Phi = Df\bigl(\gamma(t)\bigr)\,\Phi, \qquad \Phi(0) = I ,
$$

with $\gamma(0) = x^*$, so that $M = \Phi(T)$ is the monodromy matrix of $\gamma$ (:ref[]{to=ode.floquet-theory}). Then:

1. **(The two lists of multipliers agree.)** The characteristic polynomial of $M$ factors as

   $$
   \det(\mu I - M) \;=\; (\mu - 1)\,\det\bigl(\mu I - DP(x^*)\bigr) .
   $$

   So the eigenvalues of $M$ are $1$ together with the eigenvalues $\lambda_1, \dots, \lambda_{n-1}$ of the linearised Poincare map, counted with multiplicity.
2. **(No choice matters.)** Consequently $\lambda_1, \dots, \lambda_{n-1}$ depend only on the orbit $\gamma$: not on the surface of section, not on the point of $\gamma$ at which it is placed, and not on the coordinates used on $S$.
3. **(Their product is fixed by the divergence.)**

   $$
   \prod_{j=1}^{n-1}\lambda_j \;=\; \det DP(x^*) \;=\; \exp\int_0^T \nabla\cdot f\bigl(\gamma(t)\bigr)\,dt .
   $$

   In particular, in the plane there is only one multiplier and it is *given* by this formula, with no linearised map to compute; and in a system of constant divergence $-k$ the product of the multipliers is $e^{-kT}$, so at least one multiplier has modulus below $1$ whenever $k > 0$.
:::

:::idea{provenance=original}
Everything rests on one observation: hitting $S$ is a scalar equation, $g(\phi_t(x)) = 0$, and transversality says that its $t$-derivative does not vanish at the solution we already know. The implicit function theorem therefore solves it for $t$ as a smooth function of the starting point, and that function is the return time.

Once $P$ is differentiable, stability is the fixed-point question for a map, and a map whose derivative has spectral radius below $1$ contracts in a suitably weighted norm -- which is what the Jordan form provides.

For the multipliers, differentiate the definition $P(x) = \phi_{\tau(x)}(x)$ by the product rule. The first term is $\Phi(T)$ acting on the perturbation; the second is a multiple of the velocity $f(x^*)$, because wobbling the return time only slides the point along its own trajectory. So in the splitting $\mathbb{R}^n = \mathbb{R}f(x^*)\oplus T_{x^*}S$ the monodromy matrix is block triangular with the blocks $1$ and $DP(x^*)$, and both the factorisation of the characteristic polynomial and the determinant formula fall out, the latter combined with Liouville's formula for $\det\Phi$.
:::

:::proof[Part 1: existence and smoothness of the return map]{provenance=adapted src="hirsch-smale-devaney-2013:§10.2, proof of the Proposition, p. 218"}
Define $G(x,t) = g(\phi_t(x))$ on a neighbourhood of $(x^*, T)$ in $U\times\mathbb{R}$. The flow is continuously differentiable in both arguments, by :ref[smooth dependence on initial data]{to=ode.continuous-dependence}, and so is $g$; hence $G$ is continuously differentiable.

- *The equation holds at the known point.* $G(x^*,T) = g(\phi_T(x^*)) = g(x^*) = 0$, because $x^*$ has period $T$ and lies on $S$.
- *The $t$-derivative is nonzero there.* By the chain rule and $\frac{d}{dt}\phi_t(x) = f(\phi_t(x))$,

  $$
  \frac{\partial G}{\partial t}(x^*,T) \;=\; \nabla g\bigl(\phi_T(x^*)\bigr)\cdot f\bigl(\phi_T(x^*)\bigr) \;=\; \nabla g(x^*)\cdot f(x^*) \;\neq\; 0 ,
  $$

  which is exactly the **transversality hypothesis** at $x^*$. This is the only place it is used, and without it the argument stops here.

By :ref[the implicit function theorem]{to=found.implicit-inverse-function} there are a neighbourhood $V_0$ of $x^*$ in $U$ and a continuously differentiable $\tau : V_0 \to \mathbb{R}$ with $\tau(x^*) = T$ and $G(x,\tau(x)) \equiv 0$, that is, $\phi_{\tau(x)}(x) \in S$. Put $V = V_0 \cap S$.

It remains to check that $\tau(x)$ is the *first* return, not a later one. Two facts combine. First, trajectories leave $S$ immediately: since $\frac{d}{dt}g(\phi_t(x)) = \nabla g\cdot f \neq 0$ on $S$ and this quantity is continuous, there is $\sigma > 0$ and a neighbourhood of $x^*$ on which $t \mapsto g(\phi_t(x))$ is strictly monotone for $|t| \le \sigma$; so no point near $x^*$ meets $S$ at a time in $(0,\sigma]$. Second, on the compact time interval $[\sigma, T-\sigma]$ the orbit of $x^*$ stays at a positive distance $d$ from $S$, because it does not meet $S$ there and both sets are closed in the relevant compacta; by continuity of $(x,t)\mapsto\phi_t(x)$ on the compact set $\{x^*\}\times[\sigma,T-\sigma]$, every $x$ close enough to $x^*$ keeps its orbit within $d/2$ of that of $x^*$ on $[\sigma,T-\sigma]$ and so also misses $S$ there. Shrinking $V$ to the intersection of these neighbourhoods, $\tau(x)$ is the first positive return time, and $P = \phi_{\tau(\cdot)}(\cdot)$ is continuously differentiable on $V$ as a composite of continuously differentiable maps. $\square$
:::

:::proof[Parts 2-4: stability]{provenance=adapted src="hirsch-smale-devaney-2013:§10.3, p. 219; strogatz-1994:§8.7, pp. 281-282"}
*An adapted norm.* Write $A = DP(x^*)$, acting on the $(n-1)$-dimensional space $E = T_{x^*}S$, and let $\rho(A) = \max_j|\lambda_j|$ be its spectral radius. We use: *for every $\rho > \rho(A)$ there is a norm $\|\cdot\|_*$ on $E$ with $\|Av\|_* \le \rho\|v\|_*$ for all $v$.* To see this, put $A$ in :ref[Jordan form]{to=linalg.jordan-form}, $A = Q J Q^{-1}$, and rescale the basis vectors of each Jordan block by successive powers of $\delta = \rho - \rho(A) > 0$; in the rescaled basis the superdiagonal entries become $\delta$ instead of $1$, and the resulting matrix has every row sum of moduli at most $\rho(A)+\delta = \rho$, so the induced maximum norm of $A$ is at most $\rho$. (For complex eigenvalues work over $\mathbb{C}$ and take the real part of the resulting norm; the bound is unchanged.)

*Part 2.* Suppose $\rho(A) < 1$ and fix $\rho$ with $\rho(A) < \rho < 1$; take $\|\cdot\|_*$ as above and set $\rho' = (1+\rho)/2 < 1$. Since $P$ is continuously differentiable at $x^*$,

$$
P(x) - x^* \;=\; A\,(x - x^*) + o\bigl(\|x - x^*\|_*\bigr) ,
$$

so there is $\delta > 0$ such that $\|P(x) - x^*\|_* \le \rho' \|x - x^*\|_*$ whenever $\|x-x^*\|_* \le \delta$ and $x \in S$. The ball $B = \{x \in S: \|x - x^*\|_* \le \delta\}$ is therefore mapped into itself, and by induction

$$
\|P^k(x) - x^*\|_* \;\le\; (\rho')^k\,\|x - x^*\|_* \longrightarrow 0 .
$$

So $x^*$ attracts every point of $B$ under $P$, geometrically.

This is a statement about the discrete times at which a trajectory crosses $S$; the continuous-time statement follows from it. The return times $\tau$ are continuous and $\tau(x^*) = T$, so after shrinking $\delta$ we may assume $T/2 \le \tau \le 2T$ on $B$. Every trajectory starting at a point $x \in B$ therefore consists of the arcs $\{\phi_t(P^k(x)) : 0 \le t \le \tau(P^k(x))\}$, $k = 0,1,2,\dots$, laid end to end. Each arc starts within $(\rho')^k\delta$ of $x^*$ and lasts at most $2T$; by continuous dependence on initial data over the *bounded* time interval $[0,2T]$, for every $\varepsilon > 0$ there is $\eta > 0$ such that starting within $\eta$ of $x^*$ keeps the whole arc within $\varepsilon$ of the corresponding arc of $\gamma$, hence within $\varepsilon$ of $\gamma$. Since $(\rho')^k\delta \to 0$, all but finitely many arcs are within $\varepsilon$ of $\gamma$, and the finitely many early ones are within $\varepsilon$ too once $\delta$ is chosen below the $\eta$ belonging to $\varepsilon$. Thus the trajectory stays in the $\varepsilon$-neighbourhood $N$ of $\gamma$ and its distance to $\gamma$ tends to $0$.

Finally, a point of $N$ not on $S$ flows to $S$ in time at most $2T$ provided $N$ is thin enough, by the flow-box argument of part 1 applied around each point of $\gamma$ and compactness of $\gamma$; so the conclusion covers a full neighbourhood of $\gamma$ and not merely of $x^*$.

*Part 3.* For $n = 2$ the section is a segment, $E$ is one-dimensional and $A$ is the number $P'(x^*)$. Part 2 gives the attracting case. For $|P'(x^*)| > 1$, the source half of the multiplier criterion of :ref[One-dimensional maps]{to=dyn.one-dimensional-maps} says that every orbit of $P$ other than $x^*$ itself leaves a fixed neighbourhood of $x^*$ in $S$; since points of $S$ near $x^*$ are points near $\gamma$, $\gamma$ is not stable.

*Part 4.* The logistic examples recorded in :ref[One-dimensional maps]{to=dyn.one-dimensional-maps} already show, for $n = 2$, that a multiplier of modulus $1$ is compatible with an attracting, a repelling and a one-sided closed orbit, so no criterion phrased in $DP(x^*)$ alone can decide. $\square$
:::

:::proof[The multiplier theorem]{provenance=original}
Write $v = f(x^*)$, which is nonzero because $\gamma$ is a nonconstant periodic orbit, and $E = T_{x^*}S = \ker\nabla g(x^*)$. Transversality says $\nabla g(x^*)\cdot v \neq 0$, that is, $v \notin E$; since $\dim E = n-1$, this gives the direct sum

$$
\mathbb{R}^n \;=\; \mathbb{R}v \,\oplus\, E .
$$

*The monodromy matrix fixes the flow direction.* Differentiating $\dot\gamma = f(\gamma)$ in $t$ shows that $t\mapsto f(\gamma(t))$ solves the variational equation; it equals $v$ at $t=0$, so $\Phi(t)v = f(\gamma(t))$ and in particular

$$
Mv \;=\; \Phi(T)v \;=\; f(\gamma(T)) \;=\; f(x^*) \;=\; v .
$$

*The monodromy matrix on $E$.* Let $w \in E$, and differentiate $P(x) = \phi_{\tau(x)}(x)$ at $x^*$ in the direction $w$ by the chain rule, using $\tau(x^*) = T$ and $\partial_t\phi_t(x^*)|_{t=T} = f(x^*) = v$:

$$
DP(x^*)\,w \;=\; \underbrace{D_x\phi_T(x^*)}_{=\;\Phi(T)\;=\;M}\,w \;+\; v\,\bigl(D\tau(x^*)w\bigr) .
$$

(The identity $D_x\phi_T(x^*) = \Phi(T)$ is the definition of the variational equation: the derivative of the flow with respect to its initial point solves it with the identity as initial value.) Writing $c(w) = D\tau(x^*)w$, a linear functional on $E$, this rearranges to

$$
M w \;=\; -c(w)\,v \;+\; DP(x^*)\,w , \qquad w \in E .
$$

*Reading off the matrix.* In a basis consisting of $v$ followed by a basis of $E$, the two displays say that $M$ has the block form

$$
M \;=\; \begin{pmatrix} 1 & -c \\ 0 & DP(x^*)\end{pmatrix} ,
$$

upper block triangular, because $Mv = v$ has no $E$-component and $Mw$ has $E$-component $DP(x^*)w$. The characteristic polynomial of a block triangular matrix is the product of those of its diagonal blocks, which is part 1; taking determinants gives $\det M = \det DP(x^*)$.

*Part 2.* By Floquet theory (:ref[]{to=ode.floquet-theory}) the eigenvalues of the monodromy matrix of a periodic linear system are unchanged if the fundamental matrix is normalised at a different time: replacing the base point $\gamma(0)$ by $\gamma(s)$ replaces $M$ by a matrix similar to it. The eigenvalues of $M$ are therefore an attribute of $\gamma$ alone. Part 1 identifies the eigenvalues of $DP(x^*)$ as those of $M$ with one copy of $1$ removed, and nothing in that list refers to $S$ or to the coordinates on it. Hence the $\lambda_j$ are attributes of $\gamma$ alone. (That one copy of $1$ is removed and not more is the content of the factorisation: if $1$ happens to be an eigenvalue of $DP(x^*)$ as well, then $M$ has $1$ as an eigenvalue of algebraic multiplicity at least two, and the trivial multiplier is still a single factor $\mu - 1$.)

*Part 3.* Liouville's formula for the variational equation -- derived in :ref[Lyapunov exponents]{to=dyn.lyapunov-exponents} -- gives

$$
\det\Phi(t) \;=\; \exp\int_0^t \operatorname{tr}Df\bigl(\gamma(s)\bigr)\,ds \;=\; \exp\int_0^t \nabla\cdot f\bigl(\gamma(s)\bigr)\,ds ,
$$

since the trace of the Jacobian is the divergence. At $t = T$ the left side is $\det M = \det DP(x^*) = \prod_j \lambda_j$. For $n = 2$ the product is a single multiplier. If $\nabla\cdot f \equiv -k$ then the product is $e^{-kT}$, which for $k>0$ is less than $1$ in modulus, so not all $|\lambda_j|$ can be $\ge 1$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Transversality* is used exactly twice, and both uses are essential. It makes $\partial_t G \neq 0$, which is what the implicit function theorem needs to produce the return time; and it makes $f(x^*) \notin T_{x^*}S$, which is what splits $\mathbb{R}^n$ into the flow direction and the section and so block-triangularises $M$. A section tangent to the flow at some point gives no return map near that point: trajectories can touch it and turn back, so "the next crossing" is not even locally well defined.
- *$f(x^*) \neq 0$*, that is, the orbit is a genuine closed orbit and not an equilibrium. Without it $v = 0$, the splitting collapses, and there is no trivial multiplier to remove.
- *Least period $T$.* If $T$ is taken as a multiple $kT_0$ of the least period, the orbit crosses $S$ $k$ times in a circuit, $x^*$ is a $k$-cycle of $P$ rather than a fixed point, and the multipliers come out as $k$-th powers. The statements above are for a section crossed once per circuit.
- *$C^1$ and no more.* Only continuous differentiability of $f$ and $g$ is used; $P$ is then $C^1$, which is all the stability argument needs. If $f$ is $C^r$ so is $P$, by the same implicit function theorem.
- *What part 2 does not say.* It gives attraction when all $|\lambda_j| < 1$. The converse at the nonlinear level -- that some $|\lambda_j| > 1$ forces instability -- is true but needs an invariant-manifold argument that we do not give; what is immediate is the linear statement, that the recursion $v_{k+1} = DP(x^*)v_k$ then has geometrically growing solutions. In the plane there is no gap, because part 3 reduces the question to a map of an interval, where both directions are proved.
- *Orbital, not pointwise.* Even for a strongly attracting limit cycle, a nearby trajectory does not converge to $\gamma(t)$ for the same $t$; it converges to the *set* $\gamma$, generally with a persistent phase lag. That is why the trivial multiplier is $1$ and not something smaller: a phase shift is neither damped nor amplified.
:::

:::method[Using a section]{provenance=adapted src="strogatz-1994:§8.7, pp. 278-283; hirsch-smale-devaney-2013:§10.3, pp. 219-220"}
To study a suspected closed orbit of $\dot x = f(x)$:

1. **Choose the section.** Pick a hypersurface $S = \{g = 0\}$ that the orbit must cross and check $\nabla g\cdot f \neq 0$ on the part of $S$ you will use. Natural choices: a half-plane $\{\theta = \theta_0\}$ for a system that circulates; the set where one coordinate is at a maximum, $\{\dot z = 0,\ \ddot z<0\}$; and, for a $T$-periodic forcing, the stroboscopic section $\{t \equiv 0 \bmod T\}$, which is transverse automatically.
2. **Integrate to the next crossing.** From $x \in S$, integrate $\dot x = f(x)$ until $g$ changes sign, then locate the crossing time accurately by solving $g(\phi_t(x)) = 0$ -- for instance by Newton's method on $t$, whose derivative $\nabla g\cdot f$ is the transversality quantity and so is nonzero. This evaluates $P(x)$.
3. **Find the fixed point.** Solve $P(x) = x$ on $S$, numerically if need be; $n-1$ equations in $n-1$ unknowns. Each solution is a closed orbit.
4. **Get $DP$.** Either integrate the variational equation $\dot\Phi = Df(\phi_t(x))\Phi$ alongside the trajectory and project, or difference $P$: form $[P(x^*+h e_i) - P(x^*-h e_i)]/2h$ for a basis $e_i$ of $T_{x^*}S$.
5. **Read off the stability** from the eigenvalues of $DP(x^*)$: attracting if all lie strictly inside the unit circle, bifurcating when one reaches it. A multiplier leaving through $+1$ signals a saddle-node or pitchfork of cycles, through $-1$ a period doubling of the cycle, and a complex pair crossing together a torus (Neimark-Sacker) bifurcation.
6. **Check the determinant.** Compare $\prod_j\lambda_j$ with $\exp\int_0^T\nabla\cdot f\,dt$ computed along the orbit. For a system of constant divergence this is a one-line check that catches most integration errors; in the plane it replaces step 4 entirely.
:::

:::example[A return map in closed form, and its multiplier two ways]{provenance=original}
On the punctured plane $U = \mathbb{R}^2\setminus\{0\}$, in polar coordinates, take

$$
\dot r \;=\; -\,r\ln r, \qquad \dot\theta \;=\; 1 .
$$

The field is continuously differentiable on $U$ (it is not defined at the origin, which is why the origin is excluded). Take $S$ to be the positive $x$-axis, $g(x,y) = y$ restricted to $x>0$; then $\nabla g\cdot f = \dot y = \dot r\sin\theta + r\dot\theta\cos\theta = r > 0$ on $S$, so $S$ is transverse and every trajectory returns to it after exactly $\tau \equiv 2\pi$, since $\dot\theta = 1$.

*The return map.* Substituting $u = \ln r$ turns the radial equation into $\dot u = -u$, so $u(t) = u_0e^{-t}$ and $r(t) = r_0^{\,e^{-t}}$. Therefore, with $\kappa = e^{-2\pi}$,

$$
P(r) \;=\; r^{\,\kappa}, \qquad \kappa \;=\; e^{-2\pi} \;=\; 0.00186744273\ldots
$$

*The closed orbit.* $P(r) = r$ forces $r^{\kappa-1} = 1$, hence $r = 1$: the unit circle is the only closed orbit, and it has period $T = 2\pi$.

*The multiplier, from the map.* $P'(r) = \kappa r^{\kappa-1}$, so

$$
\lambda \;=\; P'(1) \;=\; \kappa \;=\; e^{-2\pi} \;=\; 0.00186744273 .
$$

Since $0 < \lambda < 1$, the circle is an attracting limit cycle, approached monotonically from each side.

*The multiplier, from the divergence.* The divergence in polar coordinates is $\nabla\cdot f = r^{-1}\partial_r(rF_r) + r^{-1}\partial_\theta F_\theta$ with $F_r = -r\ln r$ and $F_\theta = r\dot\theta = r$, so

$$
\nabla\cdot f \;=\; \frac1r\,\frac{d}{dr}\bigl(-r^2\ln r\bigr) \;=\; -2\ln r - 1 ,
$$

which equals $-1$ on the orbit $r=1$. Part 3 of the multiplier theorem then predicts

$$
\lambda \;=\; \exp\int_0^{2\pi}(-1)\,dt \;=\; e^{-2\pi} ,
$$

the same number, obtained without knowing $P$. This is the check of step 6, passed exactly.

*Iterating the map.* The cobweb recipe of :ref[One-dimensional maps]{to=dyn.one-dimensional-maps} applies to $P$ verbatim. Because $\ln P(r) = \kappa\ln r$, the logarithms of the successive crossings are exactly geometric, $\ln r_k = \kappa^k\ln r_0$. From $r_0 = 3$:

$$
r_1 = 1.0020537015,\quad r_2 = 1.0000038312,\quad r_3 = 1.0000000072,\quad r_4 = 1.0000000000134 ,
$$

each excess over $1$ being about $\kappa = 1.87\times10^{-3}$ times the previous one, as the multiplier says. Integrating the Cartesian form of the system numerically from $(3,0)$ over $[0,2\pi]$ returns $(1.00205370150, -7\times10^{-13})$, agreeing with $r_1$ to eleven digits and confirming the return time.
:::

:::example[A forced oscillator: the multiplier without the orbit]{provenance=original}
Now a case where the closed orbit cannot be written down but the multiplier can. Consider the $2\pi$-periodically forced equation

$$
\dot x \;=\; (1 + \cos t)\,x \;-\; x^3 , \qquad x > 0 ,
$$

a logistic-type growth whose growth rate is modulated once per period. Use the stroboscopic section $S = \{t \equiv 0 \bmod 2\pi\}$, on which the return time is $\tau \equiv T = 2\pi$.

*Finding the fixed point.* The equation is a Bernoulli equation: $u = x^{-2}$ obeys the *linear* equation

$$
\dot u \;=\; -2(1+\cos t)\,u + 2 ,
$$

whose integrating factor is $e^{\mu(t)}$ with $\mu(t) = 2t + 2\sin t$. Since $\mu(2\pi) = 4\pi$ and $\mu(0)=0$,

$$
u(2\pi) \;=\; e^{-4\pi}u(0) + K, \qquad K = e^{-4\pi}\!\!\int_0^{2\pi}\!\! 2\,e^{2s+2\sin s}\,ds \;=\; 0.52781657316 .
$$

So in the variable $u$ the stroboscopic map is the affine map $u \mapsto e^{-4\pi}u + K$, with the unique fixed point

$$
u^* \;=\; \frac{K}{1 - e^{-4\pi}} \;=\; 0.52781841384 ,
\qquad
x^* \;=\; (u^*)^{-1/2} \;=\; 1.37644141493 .
$$

There is therefore exactly one $2\pi$-periodic solution with $x>0$, and it passes through $x = 1.37644141493$ at $t = 0$.

*The multiplier.* The map $x\mapsto u = x^{-2}$ is a diffeomorphism of $(0,\infty)$, so it conjugates the stroboscopic map in $x$ to the affine map in $u$, and a multiplier is unchanged by a smooth change of variable. Hence

$$
\lambda \;=\; e^{-4\pi} \;=\; 3.4873423562\times10^{-6} ,
$$

far inside the unit circle: the periodic solution is violently attracting, which is why a numerical integration from almost any positive initial value looks periodic after one cycle.

*Three checks.* (i) Integrating the original equation from $x(0) = 1.37644141493$ over one period returns $1.3764414149302$, reproducing the starting value to thirteen digits. (ii) Integrating the variational equation $\dot v = \bigl[(1+\cos t) - 3x(t)^2\bigr]v$ along that solution with $v(0)=1$ gives $v(2\pi) = 3.48734235622\times10^{-6}$, matching $e^{-4\pi}$ to eleven digits -- this is the divergence formula of part 3, since for the one-dimensional nonautonomous equation the bracket *is* the divergence. (iii) The periodic solution oscillates between $0.51956$ and $1.39773$ over the cycle, so the forcing is far from a small perturbation, yet the multiplier is exactly $e^{-4\pi}$: the two $e^{-2\pi}$-sized factors come from the mean growth rate $1$ and the mean of $-3x^2$ along the orbit, and the modulation $\cos t$ averages away.
:::

:::application{provenance=original}
A surface of section is the standard way to see a flow of three or more dimensions, because it trades one dimension of picture for one of integer time.

*In mechanics.* For a Hamiltonian system of two degrees of freedom the energy surface is three-dimensional, and a section of it is a two-dimensional picture in which a periodic orbit is a point, a quasiperiodic orbit an invariant curve, and a chaotic orbit a scatter of dots. This is the construction behind every Poincare-section plot of the Henon-Heiles system or of the restricted three-body problem; the multipliers of a periodic orbit come in reciprocal pairs there, because :ref[a Hamiltonian flow has zero divergence]{to=var.canonical-equations} and part 3 forces the product to be $1$.

*In forced oscillators and circuits.* The stroboscopic map turns a driven system into a map, and the bifurcations of the driven response are bifurcations of its fixed points: a multiplier leaving through $-1$ is the period doubling that halves the observed frequency, and a cascade of these is the route to chaos described in :ref[Period doubling and universality]{to=dyn.period-doubling}. The same reduction applied to a strongly dissipative flow, where all but one multiplier are tiny, is what makes a *one-dimensional* map a faithful model of a three-dimensional flow -- the justification for studying the logistic map at all, and the step Lorenz took when he plotted successive maxima of $z$ for :ref[his equations]{to=dyn.lorenz-equations}.

*In experiment and in numerics.* Shaft-angle triggers in rotating machinery, the once-per-orbit crossings recorded in accelerator physics, and the fixed-step sampling of an experimental time series are all Poincare sections taken by the apparatus rather than by the analyst; the measured return map is then fitted directly. On the numerical side, steps 2-5 of the method are exactly how a periodic-orbit solver works: Newton's method on $P(x)-x$, with the Jacobian supplied by the variational equation, converges quadratically to closed orbits that a plain time integration would take thousands of periods to reveal -- or would never reveal at all, if the orbit is unstable.
:::
