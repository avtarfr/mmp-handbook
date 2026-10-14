---
id: geom.flows-integral-curves
title: Flows and integral curves
kind: theorem
level: advanced
summary: Shows that a smooth vector field on a manifold has a unique maximal integral curve through each point, that these assemble into a single smooth flow whose time-$t$ maps are diffeomorphisms obeying the group law, and that differentiating a second vector field along this flow returns the Lie bracket.
prereqs: [geom.tangent-vectors, ode.existence-uniqueness, geom.smooth-manifolds, ode.continuous-dependence]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 9: integral curves and the coordinate system (9.1), Prop. 9.2, pp. 206–207; the rescaling and translation lemmas 9.3–9.4 and naturality Prop. 9.6, p. 208; global flows and the group laws (9.2)–(9.3), p. 209; the infinitesimal generator, Prop. 9.7, p. 210; the non-complete examples 9.9–9.10 and the definition of a flow domain, p. 211; Prop. 9.11 and the Fundamental Theorem on Flows 9.12, pp. 212–214; completeness, the uniform time lemma 9.15 and Thm 9.16, pp. 215–216; the Lie derivative, eq. (9.16), Lemma 9.36 and Thm 9.38, pp. 228–230; Cor. 9.39, p. 230; commuting flows and Thm 9.44, p. 233; the Fundamental Theorem for Autonomous ODEs, Thm D.1(c) (Smoothness), p. 664"
    pages: "206-216, 228-230, 233, 664"
    role: the definitions of integral curve, flow domain, flow, infinitesimal generator and completeness; the statement and proof route of the fundamental theorem on flows; the examples of incomplete vector fields; the smooth dependence of the local solution on its initial point; the definition of the Lie derivative of a vector field and the theorem identifying it with the Lie bracket; the criterion for two flows to commute
  - work: hassani-2013
    loc: "§28.4: the Lie algebra of vector fields and Thm 28.4.4, p. 879; Definition 28.4.5 of an integral curve and the coordinate system (28.19) with existence Thm 28.4.6, pp. 879–880; the flow as a one-parameter group, eqs. (28.20)–(28.23) and the notation $F_t = \\exp(tX)$, p. 881; Prop. 28.4.13 and $L_X Y = [X, Y]$, eq. (28.31), p. 886"
    pages: "879-881, 886"
    role: the streamline picture of a vector field, the statement of local existence and uniqueness of integral curves, the one-parameter group identities and the $\exp(tX)$ notation for a flow, and the properties of the Lie derivative as a derivation on tensor fields
  - work: hirsch-smale-devaney-2013
    loc: "§7.2 The Existence and Uniqueness Theorem, pp. 142–146 (the $C^1$ existence and uniqueness theorem, p. 144; the maximal interval on which two solutions agree, and the blow-up example $x' = 1 + x^2$, p. 146); §7.2–§7.3, pp. 146–147 (the theorem that a solution on a maximal interval with finite right endpoint leaves every closed and bounded set, and continuous dependence on initial conditions with its corollary that the flow is continuous in the initial point); §17.3 Continuous Dependence on Initial Conditions, pp. 394–397; §17.4 Extending Solutions, pp. 397–401 (the maximal time domain, and the theorem that a solution with $\\beta < \\infty$ leaves every compact subset of $O$)"
    pages: "142-147, 394-401"
    role: the $C^1$ form of the local existence and uniqueness theorem for an autonomous system on an open subset of $\mathbb{R}^n$, the argument that uniqueness propagates to the whole interval on which two solutions are both defined, the maximal time domain of a solution, and the continuity of the flow of such a system in its initial point
---

:::definition[Integral curves, flows and completeness]{provenance=adapted src="lee-2013:pp. 206–207, 209, 211–212; hassani-2013:Definition 28.4.5, p. 879 and eqs. (28.20)–(28.21), p. 881"}
Let $M$ be a smooth manifold and $V$ a smooth vector field on $M$ (:ref[tangent vectors and vector fields]{to=geom.tangent-vectors}).

- An **integral curve** of $V$ is a differentiable curve $\gamma : J \to M$, $J \subset \mathbb{R}$ an interval, with
  $$
  \gamma'(t) = V_{\gamma(t)} \qquad \text{for all } t \in J .
  $$
  If $0 \in J$, the point $\gamma(0)$ is the **starting point**. In a chart, writing $\gamma^i$ for the coordinates of $\gamma$ and $V = V^i\,\partial/\partial x^i$, this is the autonomous first-order system
  $$
  \dot\gamma^i(t) = V^i\bigl(\gamma^1(t), \dots, \gamma^n(t)\bigr), \qquad i = 1, \dots, n .
  $$
  Hassani's streamline picture is the right one: $V$ is a velocity field and the integral curves are the paths of the particles it carries.
- A **flow domain** for $M$ is an open set $\mathcal{D} \subset \mathbb{R} \times M$ such that for each $p \in M$ the slice $\mathcal{D}^{(p)} = \{t : (t, p) \in \mathcal{D}\}$ is an open interval containing $0$.
- A **flow** on $M$ is a continuous map $\theta : \mathcal{D} \to M$ on a flow domain obeying the **group laws**
  $$
  \theta(0, p) = p, \qquad \theta\bigl(t, \theta(s, p)\bigr) = \theta(t + s, p)
  $$
  whenever $s \in \mathcal{D}^{(p)}$, $t \in \mathcal{D}^{(\theta(s,p))}$ and $s + t \in \mathcal{D}^{(p)}$. We write $\theta_t(p) = \theta^{(p)}(t) = \theta(t, p)$ and set $M_t = \{p : (t, p) \in \mathcal{D}\}$. When $\mathcal{D} = \mathbb{R} \times M$, $\theta$ is a **global flow**, equivalently a (left) action of the additive group $\mathbb{R}$ on $M$; the group laws then read $\theta_t \circ \theta_s = \theta_{t+s}$, $\theta_0 = \mathrm{Id}_M$, and $\{\theta_t\}_{t\in\mathbb{R}}$ is a **one-parameter group of transformations**.
- A flow is a **smooth flow** when it is smooth, and not merely continuous, as a map $\mathcal{D} \to M$. The **infinitesimal generator** of a smooth flow $\theta$ is the vector field $V_p = \theta^{(p)\prime}(0)$.
- A smooth vector field is called **complete** when every one of its maximal integral curves has the whole of $\mathbb{R}$ as its domain; equivalently, when the flow it generates is a global one.
- A **maximal** integral curve is one that is not the restriction of an integral curve on a strictly larger open interval; a **maximal flow** admits no extension to a larger flow domain.

Hassani writes the flow of $X$ as $F_t = \exp(tX)$, which turns the group laws into $\exp(tX)\exp(sX) = \exp((t+s)X)$ and $\exp(0X) = \mathrm{Id}$; :ref[the exponential map]{to=geom.exponential-map} explains why that notation is not an accident.
:::

:::statement[Fundamental theorem on flows]{provenance=adapted src="lee-2013:Thm 9.12, pp. 212–213; lee-2013:Thm 9.16 and Cor. 9.17, p. 216; lee-2013:Thm 9.38, p. 229; hassani-2013:Thm 28.4.6, p. 880 and eq. (28.31), p. 886"}
Throughout, $M$ is a smooth manifold carrying a smooth vector field $V$.

1. **One flow, and only one.** Among all flows on $M$ there is exactly one that is smooth, is maximal, and has $V$ for its infinitesimal generator. Write it $\theta$, on the flow domain $\mathcal{D}$.
2. **Its $t$-slices are the integral curves.** Through each point $p$ of $M$ runs one and only one maximal integral curve with starting point $p$; it is $t \mapsto \theta(t,p)$, defined precisely on the interval $\mathcal{D}^{(p)}$.
3. **Along an orbit the domains are translates.** Take $s \in \mathcal{D}^{(p)}$ and set $q = \theta_s(p)$. Then $\mathcal{D}^{(q)}$ is obtained from $\mathcal{D}^{(p)}$ by subtracting $s$: $\mathcal{D}^{(q)} = \{t - s : t \in \mathcal{D}^{(p)}\}$. So all points of one orbit have domains of the same length.
4. **Each time slice is a diffeomorphism.** Fix $t \in \mathbb{R}$. The set $M_t$ of points that survive to time $t$ is an open subset of $M$; the map $\theta_t$ carries it bijectively onto $M_{-t}$; and $\theta_t$, $\theta_{-t}$ are mutually inverse diffeomorphisms between these two open sets.
5. **Compact support forces completeness.** Should $V$ vanish outside a compact set — in particular should $M$ itself be compact — then $\mathcal{D} = \mathbb{R}\times M$ and $V$ is complete.
6. **Differentiating a second field along the flow.** Let $W$ be any smooth vector field on $M$. The **Lie derivative**
   $$
   (\mathcal{L}_VW)_p = \frac{d}{dt}\Big|_{t=0}\; d(\theta_{-t})_{\theta_t(p)}\bigl(W_{\theta_t(p)}\bigr)
   = \lim_{t\to 0}\frac{d(\theta_{-t})_{\theta_t(p)}\bigl(W_{\theta_t(p)}\bigr) - W_p}{t}
   $$
   exists at every $p$, defines a smooth vector field, and equals the Lie bracket:
   $$
   \mathcal{L}_VW = [V, W].
   $$
   Consequently $\mathcal{L}_VW = -\mathcal{L}_WV$ and $\mathcal{L}_V(gW) = (Vg)W + g\,\mathcal{L}_VW$ for $g \in C^\infty(M)$.
:::

:::idea{provenance=original}
In a chart the equation $\gamma' = V_\gamma$ is an autonomous ODE system with a smooth right-hand side, so the Picard–Lindelöf theorem gives a solution through each point and forbids two solutions from separating once they meet. Two global facts follow from that local statement by soft arguments. Uniqueness is a connectedness argument: the set where two integral curves on a common interval agree is non-empty, closed by continuity and open by local uniqueness. The group law is the observation that the equation does not mention $t$ explicitly, so a time-shifted integral curve is again one; following the flow for time $s$ and then for time $t$ therefore lands where following it for time $s+t$ does. The one remaining point, that the maximal domain $\mathcal{D}$ is open and $\theta$ is smooth on it, is proved by walking along an integral curve and patching the local solutions supplied by the ODE theorem. For the last part, expanding the flow to first order in $t$ turns the difference quotient into $V^k\partial_kW^i - W^k\partial_kV^i$, which is the bracket.
:::

:::proof{provenance=adapted src="lee-2013:proof of Thm 9.12, pp. 213–214; lee-2013:Thm D.1(c), p. 664; lee-2013:Lemma 9.4 and Prop. 9.6, p. 208; lee-2013:Lemma 9.15 and Thm 9.16, pp. 215–216; hirsch-smale-devaney-2013:§7.2, pp. 144, 146 and §17.4, pp. 397–398"}
*Local existence.* Around any $p$ choose a chart. In it the condition on $\gamma$ is the autonomous system above with smooth right-hand side, hence locally Lipschitz, so :ref[the Picard–Lindelöf theorem]{to=ode.existence-uniqueness} gives $\varepsilon > 0$ and a solution on $(-\varepsilon, \varepsilon)$ with $\gamma(0) = p$. Smoothness of $V$ also makes the solution smooth in $t$, and :ref[continuous dependence on initial data]{to=ode.continuous-dependence} makes it depend continuously on the starting point. More than that is true and is what the rest of the proof needs: shrinking $J_0 \ni 0$ and the neighbourhood $U_0$ of $p$ if necessary, the map $(t, x) \mapsto \gamma_x(t)$ sending a starting point $x \in U_0$ to the solution through it is *smooth* on $J_0 \times U_0$. That is the smoothness half of the fundamental theorem for autonomous ODEs, which ODE texts usually leave out and which we take from Lee’s Thm D.1(c), p. 664.

*Two integral curves that meet once agree.* Let $\gamma, \tilde\gamma : J \to M$ be integral curves on a common interval with $\gamma(t_0) = \tilde\gamma(t_0)$, and let $S = \{t \in J : \gamma(t) = \tilde\gamma(t)\}$.
- $S \ne \varnothing$, since $t_0 \in S$.
- $S$ is closed in $J$: it is the preimage of the diagonal, which is closed because $M$ is Hausdorff, under the continuous map $t \mapsto (\gamma(t), \tilde\gamma(t))$.
- $S$ is open in $J$: if $t_1 \in S$, work in a chart around $\gamma(t_1)$; both curves solve the same ODE with the same value at $t_1$, so the uniqueness half of Picard–Lindelöf makes them agree on an interval around $t_1$.

Since $J$ is connected, $S = J$.

*The maximal integral curve.* Define $\mathcal{D}^{(p)}$ by taking every open interval around $0$ that carries an integral curve starting at $p$, and forming their union; set $\theta^{(p)}(t)$ equal to the value at $t$ shared by all those curves; the previous paragraph makes this well defined, and by construction no integral curve starting at $p$ has a larger domain. Put $\mathcal{D} = \{(t,p) : t \in \mathcal{D}^{(p)}\}$ and $\theta(t,p) = \theta^{(p)}(t)$. This proves part 2 once $\theta$ is known to be a flow.

*The group laws and part 3.* Because the system is autonomous, if $\gamma$ is an integral curve then so is $t \mapsto \gamma(t + s)$ (the *translation lemma*): its velocity at $t$ is the velocity of $\gamma$ at $t+s$, which is $V$ at the same point. Fix $p$ and $s \in \mathcal{D}^{(p)}$, and set $q = \theta_s(p)$. The curve $\sigma(t) = \theta^{(p)}(t+s)$, defined for $t \in \mathcal{D}^{(p)} - s$, is therefore an integral curve starting at $q$, so by uniqueness it agrees with $\theta^{(q)}$ where both are defined, and maximality of $\theta^{(q)}$ gives $\mathcal{D}^{(p)} - s \subset \mathcal{D}^{(q)}$; this is the second group law, and $\theta(0,p) = p$ is the definition. Since $0 \in \mathcal{D}^{(p)}$, the inclusion gives $-s \in \mathcal{D}^{(q)}$ and $\theta^{(q)}(-s) = p$. Running the same argument with $(-s, q)$ in place of $(s,p)$ gives $\mathcal{D}^{(q)} + s \subset \mathcal{D}^{(p)}$, so the two intervals agree: part 3.

*$\mathcal{D}$ is open and $\theta$ is smooth (sketch of Lee's argument).* Call a pair $(t,p) \in \mathcal{D}$ *tame* when some product $J \times U \subset \mathcal{D}$, with $J$ an interval holding both $0$ and $t$ and $U$ a neighbourhood of $p$, lies in the region where $\theta$ is already known to be defined and smooth; let $W$ collect the tame pairs. Then $W$ is open and $\theta|_W$ is smooth, so it suffices that $W = \mathcal{D}$. If not, pick $(\tau, p_0) \in \mathcal{D}\setminus W$, say with $\tau > 0$, and let $t_0 = \inf\{t : (t, p_0) \notin W\}$. The ODE theorem applied in a chart around $p_0$ puts a whole product neighbourhood of $(0, p_0)$ into $W$, so $t_0 > 0$; applied in a chart around $q_0 = \theta^{(p_0)}(t_0)$ it gives $\varepsilon > 0$ and a neighbourhood $U_0$ of $q_0$ with $(-\varepsilon,\varepsilon)\times U_0 \subset W$. Choosing $t_1 < t_0$ with $t_1 + \varepsilon > t_0$ and $\theta^{(p_0)}(t_1) \in U_0$, the two smooth formulas $\theta_t$ (for $t$ near and below $t_1$) and $\theta_{t - t_1}\circ\theta_{t_1}$ (for $t$ near $t_0$) agree where they overlap, by the group law, and together define $\theta$ smoothly past $t_0$ — contradicting the choice of $t_0$.

*Part 4.* $M_t$ is a slice of the open set $\mathcal{D}$, hence open. If $p \in M_t$, part 3 with $s = t$ gives $\mathcal{D}^{(\theta_t(p))} = \mathcal{D}^{(p)} - t \ni -t$, so $\theta_t(p) \in M_{-t}$; and the group law gives $\theta_{-t}\circ\theta_t = \mathrm{Id}$ on $M_t$ and $\theta_t \circ \theta_{-t} = \mathrm{Id}$ on $M_{-t}$. Both maps are smooth, so each is a diffeomorphism.

*Part 5 (completeness).* First, a *uniform time lemma*: if there is $\varepsilon > 0$ with $(-\varepsilon, \varepsilon) \subset \mathcal{D}^{(p)}$ for every $p$, then $V$ is complete. Indeed, suppose $b = \sup\mathcal{D}^{(p)} < \infty$; pick $t_0 \in (b - \varepsilon, b)$ and $q = \theta^{(p)}(t_0)$. By the hypothesis $\theta^{(q)}$ is defined on $(-\varepsilon, \varepsilon)$, and by the group law $\theta^{(q)}(t - t_0) = \theta^{(p)}(t)$ wherever both are defined, so the two formulas splice to an integral curve starting at $p$ on $(-\varepsilon, t_0 + \varepsilon)$, whose right endpoint exceeds $b$ — contradicting maximality. Now let $K = \operatorname{supp}V$ be compact. Each $p \in K$ has a neighbourhood $U_p$ and $\varepsilon_p > 0$ with $(-\varepsilon_p, \varepsilon_p) \times U_p \subset \mathcal{D}$; finitely many $U_{p_1}, \dots, U_{p_k}$ cover $K$, and $\varepsilon = \min_j \varepsilon_{p_j}$ works for every starting point in $K$. A point outside $K$ has $V = 0$ there, and the constant curve is its integral curve, defined on all of $\mathbb{R}$. The uniform time lemma applies.

*Part 6 (the Lie derivative is the bracket).* The existence and smoothness come from the formula below, which exhibits the quantity as the $t$-derivative, at $t = 0$, of a smooth function of $(t, x)$ — so the resulting coefficients are smooth in $x$ as well, and $\mathcal{L}_VW$ is a smooth vector field. Fix $p$ and a chart $x^i$ around $p$; for $t$ small, $\theta_t(p)$ stays in the chart. Write $\theta^i(t,x)$ for the components of the flow and set
$$
A(t)^i{}_j = \frac{\partial\theta^i(-t, y)}{\partial y^j}\bigg|_{y = \theta_t(p)}, \qquad w(t)^j = W^j\bigl(\theta_t(p)\bigr),
$$
so that the vector being differentiated is $A(t)^i{}_j\,w(t)^j\,\partial/\partial x^i|_p$, since the matrix of $d(\theta_{-t})$ in coordinates is the Jacobian of $\theta_{-t}$. Both $A$ and $w$ are smooth in $t$, so the derivative at $t = 0$ exists and the product rule gives
$$
(\mathcal{L}_VW)^i_p = \dot A(0)^i{}_j\,W^j(p) + \dot w(0)^i ,
$$
because $A(0) = I$ by $\theta_0 = \mathrm{Id}$.
- $\dot w(0)^i = V^k(p)\,\partial_kW^i(p)$, by the chain rule and $\partial_t\theta^k(0,p) = V^k(p)$.
- For $\dot A(0)$, note that $\theta^i(0, y) = y^i$, so $\partial\theta^i(0,y)/\partial y^j = \delta^i_j$ is constant in $y$; hence the motion of the evaluation point contributes nothing at $t=0$, and
  $$
  \dot A(0)^i{}_j = \frac{\partial}{\partial t}\bigg|_{t=0}\frac{\partial\theta^i(-t,y)}{\partial y^j}\bigg|_{y=p} = \frac{\partial}{\partial y^j}\bigg|_{y=p}\frac{\partial\theta^i(-t,y)}{\partial t}\bigg|_{t=0} = -\,\partial_jV^i(p),
  $$
  the exchange of the two derivatives being legitimate because $\theta$ is smooth in $(t,y)$ jointly.

Therefore $(\mathcal{L}_VW)^i_p = V^k\partial_kW^i - W^j\partial_jV^i$ at $p$, which is the coordinate expression of $[V,W]$. The two listed consequences follow from antisymmetry of the bracket and from its derivation property in the second slot. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="lee-2013:Examples 9.9–9.10, p. 211; lee-2013:Thm 9.16, p. 216; lee-2013:Thm 9.38, p. 229; lee-2013:commuting flows and Thm 9.44, pp. 232–233"}
- *Smoothness of $V$ is used twice.* It makes the right-hand side of the ODE locally Lipschitz, which is what uniqueness needs; a merely continuous field still has integral curves but may have several through a point, as $\dot x = x^{2/3}$ shows (:ref[existence and uniqueness]{to=ode.existence-uniqueness}), and then no flow exists, because $\theta_t$ would not be well defined. It is also what makes $\theta$ jointly smooth in $(t, p)$, without which $d(\theta_{-t})$ in part 6 would not be differentiable in $t$.
- *Nothing forces completeness.* On $M = \mathbb{R}^2\setminus\{0\}$ the field $\partial/\partial x$ is as smooth as can be, yet the integral curve starting at $(-1, 0)$ runs into the missing origin and stops at $t = 1$: the obstruction is a hole in $M$. Lee’s second example, transplanted from the plane to the line: on $M = \mathbb{R}$ the field $x^2\,\partial/\partial x$ has the integral curve $t \mapsto 1/(1-t)$ from $x = 1$, which escapes to infinity in finite time, the obstruction now being growth of $V$ rather than a hole. (Lee states it on $M = \mathbb{R}^2$ with the field $x^2\,\partial/\partial x$ and the curve $t \mapsto (1/(1-t), 0)$ from $(1,0)$; the second coordinate is inert.) Compact support removes both, which is why part 5 is true; a flow that is only local is exactly why $\mathcal{D}$, rather than $\mathbb{R}\times M$, appears throughout.
- *Why the Lie derivative needs a vector field, not a tangent vector.* The naive difference $W_{\gamma(t)} - W_p$ is meaningless because the two vectors live in different tangent spaces. Part 4 is what repairs this: $\theta_{-t}$ is a diffeomorphism near $\theta_t(p)$, so $d(\theta_{-t})$ transports $W_{\theta_t(p)}$ back to $T_pM$ before the subtraction. That the answer is antisymmetric in $V$ and $W$ — not obvious from the definition, which treats them very differently — is the content of $\mathcal{L}_VW = [V, W]$.
- *Flows do not in general commute.* $\mathcal{L}_VW = [V,W]$ is the infinitesimal statement of this: the flows of $V$ and $W$ commute precisely when their bracket vanishes (Lee, Thm 9.44, p. 233). For incomplete fields “commute” has to be read in the local sense Lee defines on pp. 232–233: whenever one of $\theta_t\circ\psi_s(p)$, $\psi_s\circ\theta_t(p)$ is defined for all $(s,t)$ in a rectangle $J \times K$ around the origin, both are and they agree.
:::

:::method[Finding the flow and the maximal domains]{provenance=original}
1. Write $V$ in a convenient chart and read off the system $\dot x^i = V^i(x)$.
2. Solve it with a general initial condition $x(0) = p$. The solution $\theta_t(p)$, as a function of $(t, p)$, *is* the flow.
3. For each $p$, find the largest open interval around $t = 0$ on which the solution stays in $M$ and stays finite. That interval is $\mathcal{D}^{(p)}$, and the union of $\{p\}\times\mathcal{D}^{(p)}$ is the flow domain.
4. Check the answer against the group law $\theta_t\circ\theta_s = \theta_{t+s}$ and against $\partial_t\theta_t(p)|_{t=0} = V_p$.
5. To differentiate another field along the flow, you do **not** need the flow: compute $[V, W]^i = V^k\partial_kW^i - W^k\partial_kV^i$ in any chart.
:::

:::example[An incomplete flow on the line, with its exact domain]{provenance=adapted src="hirsch-smale-devaney-2013:§7.2, p. 146"}
The equation and its solution family are the standard blow-up example of Hirsch, Smale and Devaney (p. 146), which :ref[existence and uniqueness]{to=ode.existence-uniqueness} also reports; what is ours here is the flow written as a function of its starting point, the exact maximal domains and the numbers.

Let $M = \mathbb{R}$ and $V = (1 + x^2)\,d/dx$, a smooth and nowhere-vanishing field. The system is $\dot x = 1 + x^2$, which separates:
$$
\int\frac{dx}{1+x^2} = \int dt \quad\Longrightarrow\quad \arctan x(t) = t + \arctan x_0 ,
$$
so
$$
\theta_t(x_0) = \tan\bigl(t + \arctan x_0\bigr).
$$
*Check.* $\theta_0(x_0) = x_0$; and $\frac{d}{dt}\tan u = \sec^2 u = 1 + \tan^2 u = 1 + \theta_t(x_0)^2$, as required. The group law holds because $\arctan\theta_s(x_0) = s + \arctan x_0$, so applying the formula again adds $t$ to the same angle.

*Maximal domain.* The solution exists exactly while $t + \arctan x_0$ stays in $(-\pi/2, \pi/2)$, so
$$
\mathcal{D}^{(x_0)} = \Bigl(-\tfrac{\pi}{2} - \arctan x_0,\; \tfrac{\pi}{2} - \arctan x_0\Bigr),
$$
an interval of length $\pi$ for every starting point — consistent with part 3 of the theorem, which says the domains of different points on one orbit are translates of each other. Starting at $x_0 = 1$ gives $\arctan x_0 = \pi/4$ and
$$
\mathcal{D}^{(1)} = \bigl(-3\pi/4,\; \pi/4\bigr) = (-2.356194\ldots,\; 0.785398\ldots),
$$
and for instance $\theta_{0.5}(1) = \tan(0.5 + \pi/4) = 3.408223\ldots$, while $\theta_t(1) \to +\infty$ as $t \uparrow \pi/4$. So $V$ is not complete, and $M_t = \varnothing$ for $|t| \ge \pi$: no single diffeomorphism $\theta_t$ moves the whole line for such $t$.
:::

:::example[A Lie derivative computed twice]{provenance=original}
On $M = \mathbb{R}^2$ take
$$
V = x\,\frac{\partial}{\partial x} + 2y\,\frac{\partial}{\partial y}, \qquad W = y\,\frac{\partial}{\partial x}.
$$
*The flow of $V$.* The system $\dot x = x$, $\dot y = 2y$ gives $\theta_t(x, y) = (e^tx,\, e^{2t}y)$, defined for all $t$: $V$ is complete and $\{\theta_t\}$ is a one-parameter group of linear diffeomorphisms.

*By the definition.* $\theta_{-t}$ is linear, so $d(\theta_{-t})$ is the matrix $\operatorname{diag}(e^{-t}, e^{-2t})$ at every point. At $p = (x,y)$, the field $W$ evaluated at $\theta_t(p) = (e^tx, e^{2t}y)$ is $e^{2t}y\,\partial/\partial x$, and transporting it back,
$$
d(\theta_{-t})_{\theta_t(p)}\bigl(W_{\theta_t(p)}\bigr) = e^{-t}\cdot e^{2t}y\,\frac{\partial}{\partial x}\bigg|_p = e^{t}\,y\,\frac{\partial}{\partial x}\bigg|_p = e^tW_p .
$$
Differentiating at $t = 0$ gives $\mathcal{L}_VW = y\,\partial/\partial x = W$.

*By the bracket.* With $V = (x, 2y)$ and $W = (y, 0)$,
$$
[V,W]^1 = V^k\partial_kW^1 - W^k\partial_kV^1 = (x\partial_x + 2y\partial_y)(y) - (y\partial_x)(x) = 2y - y = y,
$$
$$
[V,W]^2 = (x\partial_x + 2y\partial_y)(0) - (y\partial_x)(2y) = 0 - 0 = 0 ,
$$
so $[V,W] = y\,\partial/\partial x = W$. The two routes agree, as part 6 requires.

*Numbers.* Take $p = (1, 3)$ and $t = \ln 2$. Then $\theta_t(p) = (2, 12)$ and $W_{\theta_t(p)} = 12\,\partial/\partial x$. Transporting back multiplies the $x$-component by $e^{-t} = 1/2$, giving $6\,\partial/\partial x$ in $T_pM$ — which is $e^{\ln 2}\,W_p = 2\cdot 3\,\partial/\partial x$, as the formula $e^tW_p$ predicts. Its $t$-derivative at $t=0$ is $3\,\partial/\partial x = (\mathcal{L}_VW)_p$. Because the transported field is exactly $e^tW_p$, the whole family stays parallel to $W_p$: $W$ is an eigenvector of the flow's action with eigenvalue $e^t$.
:::

:::application{provenance=original}
A flow is the time evolution of an autonomous system, and the theorem is the statement that such evolution is well defined, reversible and smooth in the initial data for as long as it lasts. In Hamiltonian mechanics the Hamiltonian vector field of $H$ has a flow whose time-$t$ maps are canonical transformations preserving phase-space volume (:ref[the canonical equations]{to=var.canonical-equations} and :ref[symplectic manifolds]{to=geom.symplectic-manifolds}); the group law $\theta_t\circ\theta_s = \theta_{t+s}$ is the statement that the dynamics has no preferred origin of time. In fluid mechanics, $\theta_t$ is the map from a fluid parcel's initial to its current position, so the Lagrangian and Eulerian descriptions are related exactly by the flow, and $\mathcal{L}_V$ is the rate of change seen by an observer carried along with the fluid. Incompleteness is not a technicality: it is the blow-up of a solution in finite time, which is the behaviour the example above displays and which the $\dot x = 1 + x^2$ model shares with the simplest nonlinear reaction equations. One-parameter groups of diffeomorphisms are the geometric form of a continuous symmetry, so a symmetry of a Lagrangian is a flow under which it is invariant, and Noether's theorem (:ref[Noether's theorem]{to=var.noether-theorem}) converts each such flow into a conserved quantity; when the flow preserves a metric its generator is a Killing field (:ref[Killing vector fields]{to=geom.killing-vectors}).
:::
