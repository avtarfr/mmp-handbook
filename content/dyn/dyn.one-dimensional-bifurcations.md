---
id: dyn.one-dimensional-bifurcations
title: Bifurcations in one dimension
kind: theorem
level: core
summary: Proves that a fixed point of $\dot x = f_a(x)$ can only be created, destroyed or change stability where $f_a'$ vanishes, gives the saddle-node theorem with the four derivative conditions that produce it, lists the normal forms of the saddle-node, transcritical and pitchfork bifurcations, and works through an imperfect pitchfork whose hysteresis loop has exactly computable corners.
prereqs: [dyn.flows-on-the-line, found.implicit-inverse-function, found.taylor-several-variables]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "§8.5 Bifurcations, pp. 175-179: the set-up $X' = F_a(X)$ with $F_a$ depending on $a$ in a $C^\\infty$ fashion and the statement that bifurcations for first-order equations occur only where $f_a'(x_0) = 0$ (pp. 175-176); the example $x' = x^2 + a$ and the three-part description of a saddle-node bifurcation (p. 176); the Saddle-Node Bifurcation theorem with hypotheses $f_{a_0}(x_0) = 0$, $f_{a_0}'(x_0) = 0$, $f_{a_0}''(x_0) \\neq 0$, $\\partial f_a/\\partial a\\,(x_0) \\neq 0$, and its proof by the implicit function theorem (pp. 176-178); the genericity discussion and the bifurcation diagram (Figure 8.6, p. 178); the pitchfork example $x' = x^3 - ax$ (Figure 8.7, pp. 178-179). Also §1.3 Constant harvesting and bifurcations, pp. 7-9: $x' = x(1-x) - h$, the collision of the two equilibria at $h = 1/4$, the bifurcation diagram, and the exchange example $x' = x^2 - ax$"
    pages: "7-9, 175-179"
    role: the definition of a bifurcation for a one-parameter family; the non-hyperbolicity necessary condition; the saddle-node theorem, its four hypotheses, its conclusion and its proof route by the implicit function theorem; the genericity argument for why the saddle-node is the typical case
  - work: strogatz-1994
    loc: "ch. 3: §3.1 Saddle-node bifurcation, pp. 45-50, including the prototypes $\\dot x = r + x^2$ and $\\dot x = r - x^2$, the bifurcation diagram, Example 3.1.2 ($\\dot x = r - x - e^{-x}$, bifurcating at $r_c = 1$, $x = 0$), and the normal-form expansion $\\dot x = a(r - r_c) + b(x-x^\\ast)^2 + \\cdots$ with $a = \\partial f/\\partial r$ and $b = \\tfrac12\\,\\partial^2 f/\\partial x^2$ at the bifurcation point (pp. 49-50); §3.2 Transcritical bifurcation, pp. 50-52, the normal form $\\dot x = rx - x^2$ and the exchange of stabilities; §3.3 Laser threshold, pp. 53-55, the model $\\dot n = (GN_0 - k)n - \\alpha G n^2$ and the threshold $N_0 = k/G$; §3.4 Pitchfork bifurcation, pp. 55-60, the supercritical normal form $\\dot x = rx - x^3$ and its potential $V = -\\tfrac12 rx^2 + \\tfrac14 x^4$, the subcritical form $\\dot x = rx + x^3$ with finite-time blow-up, the stabilised form $\\dot x = rx + x^3 - x^5$ and the bistable range $r_s < r < 0$ with jumps and hysteresis; §3.6 Imperfect bifurcations and catastrophes, pp. 69-72, the family $\\dot x = h + rx - x^3$, the saddle-node curves $h = \\pm h_c(r)$ with $h_c(r) = \\tfrac{2r}{3}\\sqrt{r/3}$, the cusp point at the origin of the $(r,h)$ plane, the stability diagram and the cusp catastrophe surface"
    pages: "44-75"
    role: the names, prototypes and normal forms of the three bifurcations; the exchange of stabilities; the Taylor derivation of the saddle-node normal form; critical slowing down; the imperfect pitchfork, the formula for $h_c(r)$, the cusp point, and the description of hysteresis
  - work: strauss-2008
    loc: "§14.4 Bifurcation theory, pp. 401-403: the definition of a bifurcation as a fork in a path of solutions depending on a parameter, and Example 1, the compressed rod $u'' + \\lambda\\sin u = 0$ on $[0,l]$ with $u'(0) = u'(l) = 0$, whose linearisation has eigenvalues $\\lambda_n = n^2\\pi^2/l^2$ and whose first branch is a pitchfork at $\\lambda = \\pi^2/l^2$, with the two buckled states stable and the trivial and higher states unstable"
    pages: "401-403"
    role: the buckling rod as a pitchfork bifurcation in a boundary-value problem, used in the application to show the same picture outside one dimension
---

:::note[What changes when a parameter is turned]{provenance=original}
On the line the dynamics is poor — by :ref[Flows on the line]{to=dyn.flows-on-the-line}, every solution runs monotonically to a fixed point or off to infinity. What makes one-dimensional systems worth a chapter is what happens to that picture when the equation itself is moved: a family $\dot x = f_a(x)$, with $a$ a load, a growth rate, a pump strength, a harvesting quota. Almost always a small change of $a$ moves the fixed points slightly and changes nothing qualitative. At isolated values of $a$ it does something else: fixed points appear out of nowhere, collide and annihilate, or swap their stability, and the system's long-term state changes discontinuously. Those values are the bifurcation points, and the short list of ways it can happen in one dimension is the content of this unit.

The list is short for a reason that the first theorem below makes precise. Nothing can happen where $f_a'(x^\ast) \neq 0$, because the implicit function theorem pins the fixed point down and :ref[Flows on the line]{to=dyn.flows-on-the-line} fixes its type from the sign of $f_a'$. So every bifurcation lives at a degenerate fixed point, and the possibilities are classified by which derivative is the first not to vanish.
:::

:::definition[Families, bifurcations and their diagrams]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, p. 175, and §1.1, p. 4; strogatz-1994:§3.0, p. 44, and §3.6, pp. 70-71"}
Let $f : I \times J \to \mathbb{R}$ be smooth, where $I \subseteq \mathbb{R}$ is an interval of states and $J \subseteq \mathbb{R}$ an interval of parameter values. Writing $f_a(x) = f(x,a)$, the **one-parameter family**

$$
\dot x = f_a(x) , \qquad a \in J ,
$$

is a differential equation for each fixed $a$. Throughout, a prime denotes $d/dx$, so $f_a'(x) = \partial f/\partial x\,(x,a)$, and derivatives with respect to the parameter are written $\partial f/\partial a$. A fixed point $x^\ast$ of $f_a$ is called **hyperbolic** if $f_a'(x^\ast) \neq 0$ and **degenerate** (or non-hyperbolic) otherwise.

A **bifurcation** occurs at $a = a_0$ if the qualitative structure of the flow changes there: in every neighbourhood of $a_0$ there are parameter values whose phase portraits are not equivalent, the differences in practice being the number of fixed points, their stability types, or both. The value $a_0$ is a **bifurcation point**. Strauss's one-line description is that a bifurcation is a fork in a road of solutions that depends on a parameter.

Two pictures carry the information.

- The **bifurcation diagram** plots the fixed points $x^\ast$ vertically against the parameter $a$ horizontally, drawing the locus $\{(a,x) : f_a(x) = 0\}$ with solid curves where the fixed point is stable and broken curves where it is unstable. A vertical slice at $a$ is the phase line of $f_a$.
- When there are two parameters, the **stability diagram** partitions the parameter plane into the regions on which the number of fixed points is constant, the boundaries between regions being the parameter values at which bifurcations happen.
:::

:::statement[Hyperbolic fixed points persist]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, p. 176"}
Let $f$ be $C^1$ on $I \times J$, let $f_{a_0}(x_0) = 0$ and suppose

$$
f_{a_0}'(x_0) \ \neq\ 0 .
$$

Then there are open intervals $I_0 \ni x_0$ and $J_0 \ni a_0$ and a $C^1$ function $p : J_0 \to I_0$ with $p(a_0) = x_0$ such that, for each $a \in J_0$, the *only* zero of $f_a$ in $I_0$ is $p(a)$. Moreover $f_a'(p(a))$ has the same sign as $f_{a_0}'(x_0)$ throughout $J_0$, so the single fixed point in $I_0$ keeps its type: a sink stays a sink and a source stays a source.

Consequently **a bifurcation of $\dot x = f_a(x)$ at $a = a_0$ requires a degenerate fixed point**: it can only occur at a point $x_0$ with $f_{a_0}(x_0) = 0$ *and* $f_{a_0}'(x_0) = 0$.
:::

:::idea[Persistence]{provenance=original}
Fixed points are the zeros of $f_a$, and a zero at which the graph crosses the axis transversally cannot be removed by a small deformation of the graph: it can only slide. The implicit function theorem is exactly the statement that it slides smoothly, and continuity of $f'$ then says the crossing stays a crossing of the same sense.
:::

:::proof[Persistence]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, p. 176"}
Apply :ref[the implicit function theorem]{to=found.implicit-inverse-function} to $F(x,a) = f(x,a)$ at $(x_0,a_0)$. We have $F(x_0,a_0) = 0$ and $\partial F/\partial x\,(x_0,a_0) = f_{a_0}'(x_0) \neq 0$, which is the hypothesis the theorem needs to solve for $x$ in terms of $a$. It therefore supplies open intervals $I_0 \ni x_0$, $J_0 \ni a_0$ and a $C^1$ map $p : J_0 \to I_0$ with $p(a_0) = x_0$, such that for $(x,a) \in I_0 \times J_0$ the equation $F(x,a) = 0$ holds exactly when $x = p(a)$. That is the uniqueness assertion.

For the sign, note that $(a) \mapsto f_a'(p(a))$ is continuous on $J_0$, being a composition of the continuous $\partial F/\partial x$ with the continuous $a \mapsto (p(a),a)$, and it is non-zero at $a_0$. Shrinking $J_0$ so that it stays non-zero — possible by continuity — it keeps the sign it has at $a_0$, since a continuous real function that changes sign on an interval must vanish somewhere by the intermediate value theorem. By the linear stability criterion of :ref[Flows on the line]{to=dyn.flows-on-the-line} the type of $p(a)$ is read off that sign, so the type does not change.

The consequence follows by contraposition: if $f_{a_0}'(x_0) \neq 0$ at every zero $x_0$ of $f_{a_0}$, then near each of them nothing changes as $a$ varies near $a_0$, so no bifurcation occurs there. $\square$
:::

:::statement[The saddle-node bifurcation]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, Theorem (Saddle-Node Bifurcation) and the three-part description preceding it, pp. 176-177"}
**Definition (Hirsch, Smale and Devaney, p. 176).** The family $\dot x = f_a(x)$ undergoes a **saddle-node bifurcation** at $a = a_0$ when a window $I \times J$ can be chosen — $I$ an interval of states containing the point where the collision happens, $J$ an interval of parameter values containing $a_0$ — in which the count of fixed points is

$$
\#\{x \in I : f_a(x) = 0\} \;=\; \begin{cases} 2, & a \in J \text{ on one side of } a_0, \\ 1, & a = a_0, \\ 0, & a \in J \text{ on the other side.}\end{cases}
$$

(Hirsch, Smale and Devaney tabulate the three counts with two equilibria for $a < a_0$ and none for $a > a_0$, and then add that the two sides may be exchanged; since the theorem's hypotheses do not say which orientation occurs, the definition above allows either.)

**Theorem.** Suppose $\dot x = f_a(x)$ is a first-order differential equation, with $f$ smooth in $x$ and $a$ jointly, for which

$$
\text{(i) } f_{a_0}(x_0) = 0, \quad \text{(ii) } f_{a_0}'(x_0) = 0, \quad \text{(iii) } f_{a_0}''(x_0) \neq 0, \quad \text{(iv) } \frac{\partial f_a}{\partial a}(x_0) \neq 0 \text{ at } a = a_0 .
$$

Then the equation undergoes a saddle-node bifurcation at $a = a_0$.

The two equilibria that exist on one side of $a_0$ are one sink and one source: they are the two branches of a curve with a vertical tangent at $(a_0,x_0)$ in the bifurcation diagram, and they collide and annihilate as $a$ passes through $a_0$. The name is borrowed from the planar version, in which the colliding points are a saddle and a node; on a line there is nothing deserving the word saddle, as Strogatz notes (p. 47), and the bifurcation also goes by *fold*, *turning-point* and *blue sky*.
:::

:::idea[Saddle-node]{provenance=original}
Hypothesis (ii) is the obstruction to solving $f_a(x) = 0$ for $x$ in terms of $a$, which is why the picture is interesting at all. Hypothesis (iv) says we may solve the other way round, for $a$ in terms of $x$: the set of fixed points near $(x_0,a_0)$ is the graph of a function $a = a(x)$, drawn sideways in the bifurcation diagram. Differentiating that relation twice turns the remaining two hypotheses into statements about the shape of this graph — (ii) makes it horizontal at $x_0$, (iii) makes it curve — so it is a parabola-like arc with a strict extremum at $x_0$. A horizontal line $a = \text{const}$ meets such an arc twice on the curved side, once at the extremum, and not at all beyond it. Counting intersections is counting fixed points, and that is the three-case conclusion.
:::

:::proof[Saddle-node]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, pp. 177-178"}
Write $G(x,a) = f(x,a)$, so that fixed points of $f_a$ are the solutions of $G = 0$.

**Step 1: invert the roles of $x$ and $a$.** By (i), $G(x_0,a_0) = 0$, and by (iv),

$$
\frac{\partial G}{\partial a}(x_0,a_0) = \frac{\partial f_a}{\partial a}(x_0)\bigg|_{a=a_0} \neq 0 .
$$

This is the hypothesis :ref[the implicit function theorem]{to=found.implicit-inverse-function} needs in order to solve for the *second* variable. It gives open intervals $I \ni x_0$ and $J \ni a_0$ and a smooth $a : I \to J$ with $a(x_0) = a_0$ such that, for $(x,\alpha) \in I \times J$,

$$
G(x,\alpha) = 0 \iff \alpha = a(x) .
\tag{1}
$$

So inside the window $I \times J$ the fixed points of $f_\alpha$ are exactly the preimages $a^{-1}(\alpha)$, and the theorem is now a question about the shape of the single function $a$.

**Step 2: the curve is horizontal at $x_0$.** Differentiate the identity $G(x,a(x)) \equiv 0$ once with respect to $x$:

$$
\frac{\partial G}{\partial x} + \frac{\partial G}{\partial a}\,a'(x) = 0 ,
\tag{2}
$$

all partials evaluated at $(x,a(x))$. At $x = x_0$ the first term is $f_{a_0}'(x_0) = 0$ by (ii), and $\partial G/\partial a \neq 0$ by step 1, so

$$
a'(x_0) = 0 .
$$

**Step 3: the curve is strictly curved at $x_0$.** Differentiate (2) again, remembering that both partials are evaluated along the curve, so each contributes two terms by the chain rule:

$$
\frac{\partial^2 G}{\partial x^2} + 2\,\frac{\partial^2 G}{\partial x \,\partial a}\,a'(x) + \frac{\partial^2 G}{\partial a^2}\,\bigl(a'(x)\bigr)^2 + \frac{\partial G}{\partial a}\,a''(x) = 0 .
$$

Evaluate at $x = x_0$ and use $a'(x_0) = 0$ from step 2: the middle two terms drop out, leaving

$$
a''(x_0) = -\,\frac{\partial^2 G/\partial x^2\,(x_0,a_0)}{\partial G/\partial a\,(x_0,a_0)} = -\,\frac{f_{a_0}''(x_0)}{\partial f_a/\partial a\,(x_0)} \ \neq\ 0
$$

by (iii) and (iv). (Hirsch, Smale and Devaney reach the same value at $x_0$ by differentiating the quotient $a'(x) = -(\partial G/\partial x)/(\partial G/\partial a)$ obtained from (2); p. 177.)

**Step 4: count the intersections.** By steps 2 and 3, $a$ has a critical point at $x_0$ with non-zero second derivative, so by the second-derivative test it is a strict local extremum — a strict local minimum if $a''(x_0) > 0$, a strict local maximum if $a''(x_0) < 0$. Take the minimum case; reversing the sign of the parameter axis converts the maximum case into it, and that exchange of the two sides is the second orientation allowed by the definition. Shrink $I$ to $(x_0 - \rho, x_0 + \rho)$ on which $a'$ is negative for $x < x_0$ and positive for $x > x_0$ — possible because $a''$ is continuous and positive at $x_0$, so $a'$ increases strictly near $x_0$ and vanishes only there. Then $a$ decreases strictly on $(x_0-\rho, x_0]$ and increases strictly on $[x_0, x_0+\rho)$. Put $\mu = \min\{\lim_{x \downarrow x_0-\rho} a(x), \lim_{x \uparrow x_0+\rho} a(x)\}$ and let $\alpha$ range over $(a_0, \mu)$. For such $\alpha$ the equation $a(x) = \alpha$ is solved exactly once on each of the two monotone pieces, hence twice in $I$; at $\alpha = a_0$ only $x = x_0$ solves it; and for $\alpha < a_0$ nothing does, since $a \ge a_0$ throughout $I$. By (1) these solutions are the fixed points of $f_\alpha$ lying in $I$, so the counts are $2$, $1$, $0$ as $\alpha$ moves up through $a_0$ — the definition's pattern, with its two sides exchanged.

**Step 5: the two fixed points are a sink and a source.** For $\alpha$ slightly above $a_0$ let $x_- < x_0 < x_+$ be the two fixed points. By (2), $f_\alpha'(x_\pm) = \partial G/\partial x = -a'(x_\pm)\,\partial G/\partial a$, and $a'(x_-) < 0 < a'(x_+)$ by the monotonicity in step 4 while $\partial G/\partial a$ keeps one sign near $(x_0,a_0)$. So $f_\alpha'(x_-)$ and $f_\alpha'(x_+)$ have opposite signs, and the stability criterion of :ref[Flows on the line]{to=dyn.flows-on-the-line} makes one of them a sink and the other a source. $\square$
:::

:::statement[The three normal forms]{provenance=adapted src="strogatz-1994:§3.1, pp. 45-49, §3.2, pp. 50-51, and §3.4, pp. 55-59"}
The following four families are the prototypes, or **normal forms**, of the bifurcations named. In each, $r$ is the parameter and the bifurcation is at $r = 0$.

1. **Saddle-node**, $\dot x = r + x^2$. For $r < 0$ there are two fixed points $x^\ast = \pm\sqrt{-r}$, with $-\sqrt{-r}$ a sink and $+\sqrt{-r}$ a source; at $r = 0$ they merge into the half-stable point $x^\ast = 0$; for $r > 0$ there are none and every solution runs to $+\infty$. (Strogatz's other prototype $\dot x = r - x^2$ is the same picture reflected, with $+\sqrt{r}$ a sink and $-\sqrt{r}$ a source for $r > 0$.)
2. **Transcritical**, $\dot x = rx - x^2$. There are fixed points $x^\ast = 0$ and $x^\ast = r$ for every $r$, and $f'(0) = r$ while $f'(r) = -r$. So for $r < 0$ the origin is a sink and $x^\ast = r$ a source; for $r > 0$ the origin is a source and $x^\ast = r$ a sink. The two points do not disappear at $r = 0$; they pass through each other and swap type, which is called an **exchange of stabilities**.
3. **Supercritical pitchfork**, $\dot x = rx - x^3$. The origin is a fixed point for all $r$, with $f'(0) = r$: a sink for $r < 0$ and a source for $r > 0$. For $r > 0$ two further fixed points $x^\ast = \pm\sqrt{r}$ exist, both sinks since $f'(\pm\sqrt r) = -2r < 0$. One branch becomes three, hence the name. The equation is unchanged by $x \mapsto -x$, and the pair of new fixed points is symmetric under that reflection while each one individually is not: a **broken symmetry**.
4. **Subcritical pitchfork**, $\dot x = rx + x^3$. Again the origin is a sink for $r < 0$ and a source for $r > 0$, but now the extra fixed points $x^\ast = \pm\sqrt{-r}$ exist for $r < 0$ and are *sources*, since $f'(\pm\sqrt{-r}) = -2r > 0$. For $r > 0$ nothing bounds the motion and $x(t)$ reaches infinity in finite time from every $x_0 \neq 0$.

**Why "normal form".** Let $f(x,r)$ be smooth and suppose a saddle-node bifurcation occurs at $(x^\ast, r_c)$, so $f(x^\ast,r_c) = 0$ and $\partial f/\partial x\,(x^\ast,r_c) = 0$. Expanding by :ref[Taylor's theorem in several variables]{to=found.taylor-several-variables} about that point and discarding the terms of order $(r-r_c)^2$ and $(x - x^\ast)^3$ and higher,

$$
\dot x \;=\; \underbrace{f(x^\ast,r_c)}_{=\,0} \;+\; (x - x^\ast)\underbrace{\frac{\partial f}{\partial x}}_{=\,0} \;+\; (r-r_c)\frac{\partial f}{\partial r} \;+\; \tfrac12 (x-x^\ast)^2 \frac{\partial^2 f}{\partial x^2} \;+\;\cdots \;=\; \alpha\,(r - r_c) + \beta\,(x-x^\ast)^2 + \cdots ,
$$

all derivatives evaluated at $(x^\ast,r_c)$, with $\alpha = \partial f/\partial r$ and $\beta = \tfrac12\,\partial^2 f/\partial x^2$. Those are exactly the quantities that hypotheses (iv) and (iii) of the saddle-node theorem require to be non-zero, and rescaling $x$ and $r$ then turns the displayed equation into $\dot x = \pm 1 \cdot r + x^2$. Strogatz presents this expansion as the reason the prototypes deserve the name (pp. 49-50), and notes that a complete theory of normal forms does more than this, producing a change of variable that makes the reduction exact rather than approximate (p. 52).
:::

:::remark[Where the hypotheses are used, and what the degenerate cases are for]{provenance=adapted src="hirsch-smale-devaney-2013:§8.5, pp. 177-178; strogatz-1994:§3.2, p. 50, and §3.4, pp. 55-56"}
- **(i) $f_{a_0}(x_0) = 0$** is what puts a fixed point at $(x_0,a_0)$ for anything to happen to.
- **(ii) $f_{a_0}'(x_0) = 0$** is used in step 2, and it is also the content of the persistence theorem: without it there is no bifurcation at all, just a fixed point sliding smoothly.
- **(iii) $f_{a_0}''(x_0) \neq 0$** is used only in step 3, to make the curve of fixed points genuinely curved. Drop it and the conclusion fails: for $\dot x = a + x^3$ the fixed point $x^\ast = -a^{1/3}$ exists and is unique for every $a$, so there is never more than one and no saddle-node occurs, although (i), (ii) and (iv) all hold at $(0,0)$.
- **(iv) $\partial f_a/\partial a\,(x_0) \neq 0$** is used in step 1 and in step 5, and it is what the transcritical and pitchfork families violate. For $\dot x = rx - x^2$ and $\dot x = rx - x^3$ at $(x_0,r_c) = (0,0)$ we have $\partial f/\partial r = x$, which vanishes at $x_0 = 0$. So those two bifurcations are consistent with the theorem; they simply are not covered by it.
- **Why the saddle-node is nevertheless the typical case.** Hirsch, Smale and Devaney's genericity argument (pp. 177-178): a bifurcation forces the two equalities (i) and (ii), which is already two conditions; having imposed them, the next derivatives $f''$ and $\partial f/\partial a$ will in general be non-zero, and those are exactly (iii) and (iv). Vanishing of either is an extra coincidence, and a coincidence needs a reason.
- **The reasons, in practice, are two.** A *constraint* — a fixed point that must exist for every parameter value, like the zero-population state of a growth model or the zero-amplitude state of an oscillator — forces $f(x_0,a) = 0$ for all $a$, hence $\partial f/\partial a\,(x_0) = 0$, and the generic bifurcation of such a family is transcritical (Strogatz, p. 50). A *symmetry* $f_a(-x) = -f_a(x)$, as in a system with a left-right symmetry, forces all even-order $x$-derivatives at $x_0 = 0$ to vanish, killing $f''$ as well, and the generic bifurcation is then a pitchfork (Strogatz, pp. 55-56). The three normal forms are therefore not three unrelated accidents: they are the generic case, the generic case with one fixed point pinned, and the generic case with a reflection symmetry.
- **What breaks a pitchfork.** Because the pitchfork needs an exact symmetry, it is destroyed by any imperfection that breaks it. The example below does this explicitly, and what is left is a pair of saddle-node bifurcations — the generic case reasserting itself.
- **Critical slowing down.** At the bifurcation point the linearisation vanishes, $f_r'(x^\ast) = 0$, so the stability criterion of :ref[Flows on the line]{to=dyn.flows-on-the-line} gives no rate and the approach to the fixed point is not exponential. For $\dot x = -x^3$, which is the supercritical pitchfork at $r = 0$, the decay is like $t^{-1/2}$. Physicists call the resulting divergence of the relaxation time near a bifurcation critical slowing down (Strogatz, p. 56).
:::

:::method[Locating and identifying a bifurcation]{provenance=adapted src="strogatz-1994:§3.1, Example 3.1.2, pp. 47-48, and §3.4, Example 3.4.1, pp. 57-58; hirsch-smale-devaney-2013:§8.5, pp. 176-178"}
Given $\dot x = f(x,a)$:

1. **Find the candidate points.** Solve the pair of equations
   $$
   f(x,a) = 0 , \qquad \frac{\partial f}{\partial x}(x,a) = 0
   $$
   simultaneously. By the persistence theorem these are the only places a bifurcation can occur. Geometrically, the second equation says the graph of $f_a$ is tangent to the $x$-axis.
2. **If the fixed points cannot be found in closed form, split and intersect.** Write $f(x,a) = g(x,a) - h(x)$ with the two graphs known, and read fixed points off their intersections and the flow direction off which graph is higher; the bifurcation is where the graphs become tangent, which is the pair of conditions $g = h$, $\partial g/\partial x = h'$.
3. **If the parameter enters more simply than the state does, solve for the parameter.** The locus $f(x,a) = 0$ is often the graph of a function $a = a(x)$ even where it is not the graph of $x = x(a)$; tabulating $(x, a(x))$ plots the whole bifurcation diagram with no root-finding at all. This is both the computational shortcut and the proof route of the saddle-node theorem.
4. **Test the four conditions** (i)-(iv) at each candidate $(x_0,a_0)$. All four satisfied: saddle-node, and the bifurcation diagram has a vertical tangent there.
5. **If (iv) fails, look for the reason.** Check whether $x_0$ is a fixed point for all $a$ (expect transcritical: confirm by checking $\partial^2 f/\partial x^2 \neq 0$ and $\partial^2 f/\partial x\partial a \neq 0$ at the point) or whether $f_a$ is odd in $x - x_0$ (expect pitchfork: the sign of $\partial^3 f/\partial x^3$ then distinguishes supercritical, negative, from subcritical, positive).
6. **Reduce to a normal form** by translating the bifurcation point to the origin, $u = x - x_0$ and $s = a - a_0$, and expanding. The leading terms identify the type; the coefficients give the scale of the new fixed points, for instance $u^\ast \approx \pm\sqrt{-\alpha s/\beta}$ for the saddle-node form $\dot u = \alpha s + \beta u^2$.
7. **Draw the diagram** and mark each branch stable or unstable using the sign of $f_a'$ along it. With two parameters, draw the stability diagram in the parameter plane as well, its boundaries being the curves found in step 1 with $x$ eliminated.
:::

:::example[An imperfect pitchfork and its hysteresis loop]{provenance=original}
Take the two-parameter family

$$
\dot x = f(x,h) = h + rx - x^3
$$

with $r$ held fixed at $r = 3$ and the **imperfection parameter** $h$ as the control:

$$
\dot x = h + 3x - x^3 .
$$

At $h = 0$ this is the supercritical pitchfork at $r = 3 > 0$, with a source at $x^\ast = 0$ ($f' = 3$) and sinks at $x^\ast = \pm\sqrt3$ ($f' = 3 - 9 = -6$). Any $h \neq 0$ destroys the symmetry $x \mapsto -x$ and so, by the last remark, must destroy the pitchfork. Here is what replaces it.

**Step 1: the candidate points.** Step 1 of the method asks for the simultaneous solutions of

$$
h + 3x - x^3 = 0 , \qquad \frac{\partial f}{\partial x} = 3 - 3x^2 = 0 .
$$

The second gives $x_0 = \pm 1$, and substituting into the first gives $h_0 = x_0^3 - 3x_0 = \mp 2$. So there are exactly two candidates,

$$
(x_0, h_0) = (-1, \,2) \qquad\text{and}\qquad (x_0,h_0) = (1,\,-2) .
$$

(These agree with Strogatz's general formula $h_c(r) = \tfrac{2r}{3}\sqrt{r/3}$ for the critical imperfection, which at $r = 3$ gives $h_c = 2\cdot 1 = 2$.)

**Step 2: test the four conditions at $(-1,2)$.** With $f(x,h) = h + 3x - x^3$:

$$
f(-1,2) = 2 - 3 + 1 = 0 ,\quad f'(-1) = 3 - 3 = 0 ,\quad f''(-1) = -6x\big|_{x=-1} = 6 \neq 0 ,\quad \frac{\partial f}{\partial h} = 1 \neq 0 .
$$

All four hold, so the saddle-node theorem applies: a saddle-node bifurcation at $h = 2$. The same four hold at $(1,-2)$, with $f''(1) = -6$.

**Step 3: the normal form.** Put $u = x + 1$ and $s = h - 2$ and expand exactly:

$$
\dot u = (2+s) + 3(-1+u) - (-1+u)^3 = (2+s) + (-3+3u) - (-1 + 3u - 3u^2 + u^3) = s + 3u^2 - u^3 .
$$

To leading order $\dot u = s + 3u^2$, the saddle-node normal form with $\alpha = 1$ and $\beta = 3$. These match the formulas of the preceding statement: $\alpha = \partial f/\partial h = 1$ and $\beta = \tfrac12 f''(-1) = \tfrac12\cdot 6 = 3$. The two fixed points for $s < 0$ sit at $u^\ast \approx \pm\sqrt{-s/3}$.

**Step 4: the fixed points at the two critical values, exactly.** At $h = 2$,

$$
2 + 3x - x^3 = -\bigl(x^3 - 3x - 2\bigr) = -(x+1)^2 (x - 2) ,
$$

so the fixed points are the double root $x = -1$ and the simple root $x = 2$. At $h = -2$, replacing $x$ by $-x$ gives $-2 + 3x - x^3 = -(x-1)^2(x+2)$: a double root at $x = 1$ and a simple root at $x = -2$. These are exact, not numerical.

**Step 5: the hysteresis loop.** Sweep $h$ slowly upwards from $h = -3$, with the state always at whichever sink it currently occupies.

- At $h = -3$ the cubic $x^3 - 3x + 3$ has discriminant $-4(-3)^3 - 27\cdot 3^2 = 108 - 243 = -135 < 0$, so there is a single real root, $x^\ast = -2.10380340\ldots$, and it is the only fixed point. The state sits there.
- At $h = -2$ a second, half-stable, fixed point is born at $x = 1$; just above $h = -2$ it splits into a source and a sink, but the state stays on the lower sink, which it has been tracking continuously.
- Through the whole range $-2 < h < 2$ there are three fixed points and the state remains on the lower branch, which at $h = 0$ is $x = -\sqrt3$.
- At $h = 2$ the lower sink collides with the source at $x = -1$ and both vanish. The state, left with no local equilibrium, is carried by the flow to the only fixed point remaining, $x = 2$. It **jumps** from $x = -1$ to $x = 2$, a discontinuous change of amplitude $3$ in response to an arbitrarily small change in $h$.
- Now sweep $h$ back down. The state stays on the upper branch past $h = 2$, past $h = 0$ (where the upper branch is $x = +\sqrt3$), and all the way to $h = -2$, where that branch collides with the source at $x = 1$ and disappears. The state then jumps down from $x = 1$ to $x = -2$, again by $3$.

The sweep up and the sweep down therefore follow different paths: the response depends on the history, not only on the present value of $h$. The loop's two corners are at

$$
\boxed{\;(h,x) = (2,-1) \to (2,2) \quad\text{and}\quad (h,x) = (-2,1) \to (-2,-2) ,\;}
$$

so the hysteresis loop has width $\Delta h = 4$ in the control parameter and jump height $\Delta x = 3$ at each end.

**Step 6: check.** Each jump must start at a double root and end at the remaining simple root of the same cubic, and the factorisations in step 4 confirm both: $-(x+1)^2(x-2)$ at $h = 2$ and $-(x-1)^2(x+2)$ at $h = -2$. The two cubics are related by $x \mapsto -x$, $h \mapsto -h$, which is the residual symmetry of the family and explains why the two jumps have the same height. The normal-form prediction of step 3 can also be checked against the exact roots: at $s = -0.03$ it gives $u^\ast = \pm\sqrt{0.03/3} = \pm 0.1000$, so $x^\ast \approx -1.1000$ and $-0.9000$, while the exact roots of $1.97 + 3x - x^3 = 0$ near $-1$ are $-1.09840$ and $-0.89826$ — right to three figures, with the error coming from the discarded $-u^3$. (The third root, $1.99666$, is the far branch that the two colliding points will jump to.)

**Step 7: the stability diagram.** Letting $r$ vary again, the same calculation gives tangency at $x_0 = \pm\sqrt{r/3}$ and hence $h = \pm h_c(r)$ with $h_c(r) = \tfrac{2r}{3}\sqrt{r/3}$, defined for $r > 0$. The two curves bound a wedge in the $(r,h)$ plane inside which there are three fixed points and outside which there is one; they meet tangentially at the origin, which is Strogatz's **cusp point** (p. 70), and the surface of fixed points above the $(r,h)$ plane is the cusp catastrophe surface, whose fold is what the state falls off when it jumps.
:::

:::application[Thresholds, buckling and the catastrophe picture]{provenance=adapted src="strogatz-1994:§3.3, pp. 53-55, §3.4, p. 55, and §3.6, pp. 72-73; strauss-2008:§14.4, Example 1, pp. 402-403"}
**A transcritical bifurcation: the laser threshold.** Strogatz's simplified laser model (after Haken) tracks the number $n(t)$ of photons in the cavity. Stimulated emission creates photons through chance encounters between a photon and an excited atom, so the gain is proportional to the product $nN$, where $N$ counts the excited atoms; loss through the end mirrors is proportional to $n$ alone:

$$
\dot n = G n N - k n .
$$

Emission de-excites the atoms, so if the pump holds $N_0$ atoms excited in the absence of lasing, the actual number is $N = N_0 - \alpha n$. Substituting,

$$
\dot n = (G N_0 - k)\,n - \alpha G\, n^2 ,
$$

which is the transcritical normal form with $r = GN_0 - k$ (and the quadratic coefficient $\alpha G$, removable by rescaling $n$). The state $n^\ast = 0$ exists for every pump strength — no photons is always an equilibrium, the constraint that forces the transcritical case — and it is a sink while $N_0 < k/G$: the device is a lamp. At $N_0 = k/G$ the origin loses stability to the branch

$$
n^\ast = \frac{G N_0 - k}{\alpha G} ,
$$

which is positive and stable beyond the threshold: the device lases. The threshold is not a property of any one atom but of the collective equation, and it is an exchange of stabilities between two branches that cross.

**A pitchfork: buckling.** Load a vertical column with a weight $\lambda$. For small $\lambda$ the straight configuration is stable; past a critical load it goes unstable and the column buckles, left or right with equal probability. The governing equation has the left-right symmetry that forces a pitchfork, and the two buckled states are the symmetry-broken pair. Strauss works the corresponding boundary-value problem, $u'' + \lambda \sin u = 0$ on $[0,l]$ with $u'(0) = u'(l) = 0$ for the bending angle $u(x)$, and reports that linearising $\sin u \approx u$ gives the eigenvalues $\lambda_n = n^2\pi^2/l^2$, that the nonlinear problem bends each of these vertical lines into a branch leaning to the right, and that the first branch, at $\lambda = \pi^2/l^2$, is a pitchfork whose two buckled states are the stable ones while the trivial state and the higher branches are unstable (pp. 402-403). The dynamical variable there is a function rather than a number, so this is not literally a one-dimensional flow; the point is that the normal forms of this unit describe the bifurcation anyway, which is what makes them worth classifying.

**Why hysteresis matters.** The worked example above is the generic fate of a symmetric system with an imperfection, and its behaviour is the one engineers and physicists have to design around. The response to a slowly swept control is smooth and reversible as long as the state stays on one sheet of the fixed-point surface; at the fold it falls to the other sheet, discontinuously and irreversibly, and recovering the original state requires sweeping the control well past its original value. Strogatz's examples are a bead on a tilted wire and the outbreak of a forest pest; the Josephson junction of :ref[Flows on the circle]{to=dyn.flows-on-the-circle} shows the same loop in its current-voltage curve once its capacitance is restored. The term *catastrophe* for the jump, and the cusp surface that organises the whole picture, come from this geometry (pp. 72-73). In the language of :ref[Flows on the line]{to=dyn.flows-on-the-line}, the potential $V$ with $f = -V'$ develops a second well as the parameter is turned; the state sits in whichever well it is in until that well disappears, and only then does it find the other.
:::
