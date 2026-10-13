---
id: pde.conservation-laws-shocks
title: Conservation laws and shocks
kind: method
level: advanced
summary: Shows how a scalar conservation law in one space dimension loses its classical solution at a computable breaking time, gives the weak formulation that lets the solution be continued past it, derives and proves the Rankine-Hugoniot speed of the resulting jump and the entropy condition that picks out the physical one, and carries a Burgers ramp through from the data to a checked shock position.
prereqs: [pde.first-order-characteristics, found.implicit-inverse-function]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§3.4, Eq. (1), p. 130 (the initial-value problem for a scalar conservation law); §3.4.1a, Eqs. (2)–(4) and the definition of an integral solution, pp. 131–132, and Eqs. (10)–(12) with the jump notation, p. 133 (the Rankine-Hugoniot condition and the route to it); Example 1, Eqs. (13)–(14), p. 134 (Burgers' equation); §3.4.1b, Eqs. (16)–(19), pp. 135–137 (non-uniqueness of integral solutions, the entropy inequalities, the definition of a shock, uniform convexity and the equivalent form $u_l > u_r$); §3.4.3b, Definition and Theorem 3, p. 143 (entropy solutions and their uniqueness); §3.4.4, Theorem 4, Eqs. (53)–(56), pp. 147–148 (Riemann's problem, the shock and the rarefaction fan $G(x/t)$ with $G = (F')^{-1}$)"
    pages: "130-138, 143, 147-148"
    role: the divergence form and the flux; the integral (weak) solution with the initial data carried in the identity; the statement and derivation route of the Rankine-Hugoniot condition; the entropy inequalities and the definition of a shock; uniform convexity and the equivalent entropy form; uniqueness of entropy solutions; the two building blocks of Riemann's problem
  - work: strauss-2008
    loc: "§14.1, Eqs. (1), (13) and (14), the three lettered principles $(\\alpha)$, $(\\beta)$, $(\\gamma)$ derived for Burgers' equation inside Example 3 on p. 382, and their general-flux form $(x-z)/t = dx/dt = a(u(x,t)) = a(\\varphi(z))$ on p. 385, with Figures 1–4, pp. 380–385 (characteristics of $u_t + a(u)u_x = 0$ are straight lines, the implicit solution $x - z = t\\,a(\\varphi(z))$, the criterion for the characteristics not to cross, and the breaking picture); Eq. (15) and the derivation leading to the Rankine-Hugoniot formula (17), pp. 386–387; the entropy criterion (18) and the completed definition of a shock wave, pp. 388–389"
    pages: "380-389"
    role: the quasilinear form $u_t + a(u)u_x = 0$ and its straight characteristics; the implicit formula for the classical solution and the condition under which the characteristics never meet; the weak formulation with test functions in the open half-plane; the Rankine-Hugoniot formula written as a difference quotient of the flux; the entropy criterion and the statement that a shock wave must satisfy both conditions
---

:::definition[Scalar conservation laws, flux, and Burgers' equation]{provenance=adapted src="evans-2010:§3.4, Eq. (1), p. 130, and Example 1, Eq. (13), p. 134; strauss-2008:§14.1, Eq. (1), p. 380, the three lettered principles $(\alpha)$, $(\beta)$, $(\gamma)$ of Example 3, p. 382, Eq. (13), p. 384, and the general-flux slope with Eq. (14), p. 385"}
A **scalar conservation law** in one space dimension is an equation in divergence form

$$
u_t + \bigl(F(u)\bigr)_x = 0 , \qquad x \in \mathbb{R}, \ t > 0 ,
\tag{1}
$$

for an unknown $u = u(x,t)$ and a given **flux function** $F : \mathbb{R} \to \mathbb{R}$. We always pair (1) with initial data

$$
u(x,0) = g(x) , \qquad x \in \mathbb{R} .
\tag{2}
$$

Equation (1) is Evans's Eq. (1); the name records the physics, since $u$ is a density whose total amount changes only through the flux $F(u)$ at the ends of an interval.

Wherever $u$ is $C^1$ the chain rule turns (1) into the quasilinear equation

$$
u_t + a(u)\,u_x = 0 , \qquad a := F' ,
\tag{3}
$$

which is Strauss's Eq. (1). We call $a(u)$ the **characteristic speed**. The two forms are equivalent for smooth $u$ and they are not equivalent for discontinuous $u$: only (1) survives the passage to weak solutions below, because only (1) says what is conserved. This is why the flux, and not just the speed, has to be named.

**Burgers' equation** is the case $F(u) = u^2/2$, so $a(u) = u$:

$$
u_t + \Bigl(\tfrac{1}{2}u^2\Bigr)_x = 0 \quad\text{equivalently}\quad u_t + u\,u_x = 0 .
\tag{4}
$$

Following Evans we call $F$ **uniformly convex** when $F'' \ge \theta$ for some constant $\theta > 0$; Burgers' flux has $F'' = 1$, so it qualifies. Under uniform convexity $a = F'$ is strictly increasing, a fact used repeatedly below.

Equation (3) is the quasilinear equation of :ref[first-order equations and characteristics]{to=pde.first-order-characteristics} with $(a,b,c) = (a(u), 1, 0)$ in the variables $(x,t)$. Its characteristic equations are therefore $\dot x = a(z)$, $\dot t = 1$, $\dot z = 0$, and from them come the three facts that organise everything here: $u$ is constant along each projected characteristic, each projected characteristic is consequently a straight line, and the slope $dx/dt$ of that line is the characteristic speed $a(u)$ carried on it. Strauss sets out the three facts as the lettered principles $(\alpha)$, $(\beta)$, $(\gamma)$ on p. 382, but he derives them there inside his Example 3, which is Burgers' equation, $a(u) = u$; his third principle therefore equates the slope with $u$ itself, an identification special to $a = \mathrm{id}$ and not available for a general flux. The general-flux version is his p. 385, where the line through $(x,t)$ and $(z,0)$ has slope $(x-z)/t = a(u(x,t)) = a(\varphi(z))$, and it is the version used throughout this unit. The line through $(y,0)$ is

$$
x = y + t\,a\bigl(g(y)\bigr) , \qquad u = g(y) \quad\text{on it.}
\tag{5}
$$

Inverting (5) for $y$ gives $u(x,t) = g(y(x,t))$, which is Strauss's implicit solution (14). The data curve $\{t=0\}$ is never characteristic, since the coefficient of $u_t$ is $1 \ne 0$, so the only obstruction to this construction is that two lines (5) may meet.
:::

:::statement[Breaking: how long the classical solution lasts]{provenance=adapted src="strauss-2008:§14.1, Eq. (14) and the crossing criterion $a(\varphi(z)) \le a(\varphi(w))$ for $z \le w$, pp. 383–385"}
Assume $F \in C^2(\mathbb{R})$ and $g \in C^1(\mathbb{R})$ with $g$, $g'$, $a \circ g$ and $(a\circ g)'$ all bounded, where $a = F'$. Put

$$
m := \inf_{y \in \mathbb{R}} \, (a \circ g)'(y) = \inf_{y\in\mathbb{R}} a'\bigl(g(y)\bigr) g'(y) .
$$

1. **No crossing.** If $m \ge 0$ then for each $t > 0$ the map $y \mapsto y + t\,a(g(y))$ is a strictly increasing bijection of $\mathbb{R}$ onto itself, and (5) defines a bounded $C^1$ solution of (1)–(2) on the whole half-plane $t > 0$. Strauss's criterion for this, that $a(g(\cdot))$ be nondecreasing, is exactly $m \ge 0$; he calls the resulting solution an expansive or rarefaction wave.
2. **Breaking.** If $m < 0$, set the **breaking time**

   $$
   t_* := -\frac{1}{m} \;=\; \frac{1}{\,\bigl|\inf_y (a\circ g)'(y)\bigr|\,} \;>\; 0 .
   $$

   Then (5) defines a bounded $C^1$ solution on the strip $0 \le t < t_*$, and it is the only bounded $C^1$ solution there. If the infimum is attained at some $y_*$, then

   $$
   \sup_{x \in \mathbb{R}} |u_x(x,t)| \longrightarrow \infty \qquad\text{as } t \uparrow t_* ,
   $$

   so no bounded $C^1$ solution exists on any strip $0 \le t < T$ with $T > t_*$, while $\sup_x|u(x,t)| = \sup_x |g|$ for every $t < t_*$.

The quantity that blows up is the slope, not the solution. The derivation of the explicit number $t_*$ from Strauss's implicit formula is carried out in the proof below; Strauss states only the sign criterion that separates case 1 from case 2 and describes the breaking in case 2 geometrically, as the crest of the wave overtaking its foot.
:::

:::idea{provenance=original}
Read (5) backwards. At time $t$ the characteristic that started at $y$ has arrived at $x = y + t\,a(g(y))$, so the whole initial line has been stretched by the map $y \mapsto x$, and the stretching factor is $1 + t\,(a\circ g)'(y)$. The solution is obtained by undoing that map, which is possible exactly while the factor stays positive. Since $u$ keeps the value $g(y)$ along the characteristic, its slope is the initial slope divided by the stretching factor; where the factor shrinks to zero the graph of $u$ has been compressed to a vertical tangent. The first time this happens is the first zero of $1 + t\,(a\circ g)'(y)$ over all $y$, and that is $-1/m$.
:::

:::proof{provenance=adapted src="strauss-2008:§14.1, pp. 383–385"}
Write $\alpha := a \circ g$, which is $C^1$ and bounded with bounded derivative, and define

$$
\Phi(y,t) := y + t\,\alpha(y) .
$$

**Step 1 (the stretching factor).** $\partial_y \Phi(y,t) = 1 + t\,\alpha'(y)$. If $m \ge 0$ this is at least $1$ for all $t > 0$; if $m < 0$ and $0 \le t < t_* = -1/m$ it is at least $1 + t\,m > 0$. In either case, on the stated range of $t$ the function $y \mapsto \Phi(y,t)$ is strictly increasing.

**Step 2 (it is onto).** $\alpha$ is bounded, say $|\alpha| \le M$, so $\Phi(y,t) \ge y - tM \to \infty$ and $\Phi(y,t) \le y + tM \to -\infty$ as $y \to \pm\infty$. A continuous strictly increasing function with these limits is a bijection of $\mathbb{R}$ onto $\mathbb{R}$. Hence for each $t$ in range and each $x$ there is exactly one root $y = y(x,t)$ of $\Phi(y,t) = x$.

**Step 3 (the root is a $C^1$ function of $(x,t)$).** The map $(y,t) \mapsto (\Phi(y,t), t)$ is $C^1$ with Jacobian determinant $\partial_y\Phi = 1 + t\alpha'(y) \ne 0$ at every point of the strip. By :ref[the inverse function theorem]{to=found.implicit-inverse-function} it has a $C^1$ inverse near every point, and by Step 2 the inverse is globally single-valued; so $y(x,t)$ is $C^1$ on the strip.

**Step 4 (the formula solves the problem).** Put $u(x,t) := g(y(x,t))$, a $C^1$ function bounded by $\sup|g|$. Differentiating the identity $g(y) = u(\Phi(y,t), t)$ in $y$ and then in $t$, at fixed $t$ and fixed $y$ respectively,

$$
g'(y) = u_x \cdot \bigl(1 + t\alpha'(y)\bigr), \qquad
0 = u_x\,\alpha(y) + u_t .
$$

The second identity is $u_t + a(g(y))\,u_x = 0$, and $g(y) = u$ at that point, so $u_t + a(u)u_x = 0$, which is (3) and hence (1) for a $C^1$ function. Setting $t = 0$ in $\Phi$ gives $y(x,0) = x$ and so $u(x,0) = g(x)$. Every value taken by $u$ is a value of $g$, which gives the bound $\sup_x|u(\cdot,t)| = \sup|g|$.

**Step 5 (the slope blows up at $t_*$).** From the first identity of Step 4,

$$
u_x\bigl(\Phi(y,t),t\bigr) = \frac{g'(y)}{1 + t\,\alpha'(y)} .
\tag{6}
$$

Suppose $m < 0$ is attained at $y_*$, so $\alpha'(y_*) = a'(g(y_*))g'(y_*) = m$. A product is negative only if both factors are nonzero, so $g'(y_*) \ne 0$. Evaluating (6) at $y_*$ gives $|u_x| = |g'(y_*)|/(1 + t m)$, whose denominator decreases to $0$ as $t \uparrow t_* = -1/m$. Hence $\sup_x|u_x(\cdot,t)| \to \infty$. A $C^1$ solution on a strip reaching beyond $t_*$ would, by the uniqueness of Step 6, agree with $u$ below $t_*$ and so have unbounded derivative on a compact set, which is impossible.

**Step 6 (uniqueness).** Let $\tilde u$ be a bounded $C^1$ solution on the strip. Fix a point $(x,t)$ in the strip and solve $\dot\xi(\tau) = a(\tilde u(\xi(\tau),\tau))$ backwards from $\xi(t) = x$. The right-hand side is $C^1$ in $\xi$, hence locally Lipschitz, so the solution is unique, and it is bounded because $\tilde u$ is bounded and $a$ is continuous; therefore it continues down to $\tau = 0$. Along it, $\frac{d}{d\tau}\tilde u(\xi,\tau) = \tilde u_t + a(\tilde u)\tilde u_x = 0$, so $\tilde u$ keeps the value $g(\xi(0))$ and $\dot\xi$ keeps the value $a(g(\xi(0)))$. Integrating, $x = \xi(0) + t\,a(g(\xi(0)))$, so $\xi(0)$ is a root of $\Phi(\cdot,t) = x$; by Step 2 it is the root $y(x,t)$, and $\tilde u(x,t) = g(y(x,t)) = u(x,t)$. This is the backward-characteristic argument of :ref[first-order equations and characteristics]{to=pde.first-order-characteristics}, run globally on the strip rather than near one point. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *$F \in C^2$ and $g \in C^1$* are used in Step 3, to make $\alpha = F' \circ g$ continuously differentiable so that the inverse function theorem applies, and in Step 6, to make $a(\tilde u)$ locally Lipschitz so that the backward characteristic is unique. With $F$ merely $C^1$ the map $\Phi$ need not be differentiable in $y$ and the breaking time is not defined by the formula above.
- *Boundedness of $\alpha$* is used only in Step 2, and only to get surjectivity. Without it the characteristics may fail to cover the half-plane, so the formula would define a solution on a smaller region even before any crossing.
- *The infimum being attained* is used only in Step 5. If it is approached but not attained the solution still ceases to be $C^1$ at $t_*$, but the blow-up is then at spatial infinity rather than at a point.
- *$m < 0$ is not an accident.* If $F$ is uniformly convex, $a' = F'' > 0$, so $m < 0$ as soon as $g$ is strictly decreasing anywhere. Thus for Burgers' equation any initial profile with a descending part breaks in finite time, no matter how smooth or how small. This is the characteristic difference from the linear transport equation, where $a$ is constant, $\alpha' \equiv 0$ and $t_* = \infty$.
- *What the theorem does not say.* It says nothing about $t \ge t_*$. The solution does not become multivalued — a function cannot — but the construction (5) does: past $t_*$ it assigns several values to the same point, which is the folded profile Strauss draws as a breaking wave. Continuing past $t_*$ therefore needs a notion of solution that does not mention $u_x$ at all.
:::

:::definition[Integral solutions]{provenance=adapted src="evans-2010:§3.4.1a, Eqs. (2)–(4) and the definition of an integral solution, pp. 131–132; strauss-2008:§14.1, Eq. (15), p. 386"}
Call $v : \mathbb{R}\times[0,\infty) \to \mathbb{R}$ a **test function** if it is smooth and vanishes outside a bounded set. Multiply (1) by $v$, integrate over the half-plane and move both derivatives onto $v$: the $x$-integration by parts has no boundary term because $v$ has compact support, and the $t$-integration by parts leaves the boundary term at $t = 0$, where $u = g$. The result is an identity that contains no derivative of $u$, and this is taken as the definition.

A function $u \in L^\infty(\mathbb{R}\times(0,\infty))$ is an **integral solution** (a weak solution) of (1)–(2) if

$$
\int_0^\infty\!\!\int_{-\infty}^{\infty} \bigl( u\,v_t + F(u)\,v_x \bigr)\,dx\,dt \;+\; \int_{-\infty}^{\infty} g(x)\,v(x,0)\,dx \;=\; 0
\tag{7}
$$

for every test function $v$. This is Evans's Eq. (4) and his definition. Note where the flux enters: it is $F(u)$, not $a(u)u_x$, that is differentiated, so (7) makes sense for a merely bounded $u$, and a smooth integral solution is a classical solution — reverse the integrations by parts and use that $v$ is arbitrary.

**Two conventions.** Strauss's Eq. (15) is (7) without the data term: his test functions live in the open half-plane, so his identity constrains $u$ only for $t>0$ and the initial condition is imposed separately. Evans's (7) carries the initial data inside the identity. We follow Evans, so that "integral solution" below always means a solution of the initial-value problem; when only the first integral in (7) vanishes we say $u$ solves (1) weakly in the open half-plane. The two agree for a $u$ that attains $g$ continuously as $t \downarrow 0$, and the results quoted from Strauss are unaffected, because the jump conditions he derives are local in $t > 0$.
:::

:::statement[The Rankine-Hugoniot condition]{provenance=adapted src="evans-2010:§3.4.1a, Eqs. (10)–(12) with the jump notation, pp. 132–133; strauss-2008:§14.1, Eq. (17), p. 387"}
Let $V \subset \mathbb{R}\times(0,\infty)$ be open and let $C = \{(x,t) : x = s(t)\}$ be a $C^1$ curve dividing $V$ into a left part $V_l$ and a right part $V_r$. Suppose $u$ is a bounded integral solution of (1) which, together with its first derivatives, is uniformly continuous on $V_l$ and on $V_r$ separately. Write

$$
u_l(t) := \lim_{x \uparrow s(t)} u(x,t), \qquad u_r(t) := \lim_{x \downarrow s(t)} u(x,t),
$$

and use the jump brackets $[\,u\,] := u_l - u_r$, $[\,F(u)\,] := F(u_l) - F(u_r)$, and $\sigma := \dot s$ for the speed of the curve. Then

1. $u$ is a classical solution of (1) in $V_l$ and in $V_r$; and
2. at every point of $C$,

   $$
   [\,F(u)\,] \;=\; \sigma\,[\,u\,] ,
   \qquad\text{equivalently}\qquad
   \sigma \;=\; \frac{F(u_l) - F(u_r)}{u_l - u_r} \ \ \text{ when } u_l \ne u_r .
   \tag{8}
   $$

This is the **Rankine-Hugoniot condition**. It is Evans's Eq. (12); Strauss's Eq. (17) is the same equation written as a difference quotient, with his $u^-$ and $u^+$ for the limits from the left and from the right, so that his $u^- = u_l$ and $u^+ = u_r$ and his $s(t)$ is our $\sigma$. The three quantities $u_l$, $u_r$ and $\sigma$ may each vary along $C$; what (8) fixes is the relation between them at each point. Nothing in (8) requires $F$ to be convex.

Note what the condition is a statement about: the flux, not the characteristic speed. Replacing $F$ by a different flux with the same $F'$ on the two states would change nothing in (3) but would change $\sigma$ — one more reason the conservation form (1) is the primitive object.
:::

:::idea{provenance=original}
A weak solution satisfies the conservation law in its book-keeping form: for any fixed interval, the amount of $u$ inside changes at a rate equal to the flux in at the left end minus the flux out at the right end. Freeze an interval straddling the jump. The rate of change splits into two pieces: the smooth evolution on each side of the jump, which is accounted for by the fluxes at the two ends and at the jump, and the sweeping of the discontinuity across the interval, which transfers an amount $\sigma\,[\,u\,]$ per unit time from the right state to the left state. For the book-keeping to balance, that transfer must equal the mismatch $[\,F(u)\,]$ in the flux across the jump. Writing that out is the whole proof.
:::

:::proof{provenance=adapted src="evans-2010:§3.4.1a, pp. 131–133"}
**Step 1 (the equation holds classically off $C$).** Let $v$ be a test function supported in $V_l$. Then only the first integral in (7) survives, and since $u$ is $C^1$ there we may integrate by parts back again with no boundary terms, getting $\int\!\!\int_{V_l} (u_t + F(u)_x) v \,dx\,dt = 0$. The integrand's first factor is continuous on $V_l$ and $v$ is arbitrary, so $u_t + F(u)_x = 0$ throughout $V_l$. The same argument applies in $V_r$. This is part 1.

**Step 2 (the control-volume identity).** Fix $a < b$ and $0 < t_1 < t_2$ with the closed rectangle $R = [a,b]\times[t_1,t_2]$ contained in $V$, and with the vertical sides $x = a$ and $x = b$ not meeting $C$. We claim

$$
\int_a^b u(x,t_2)\,dx - \int_a^b u(x,t_1)\,dx
= \int_{t_1}^{t_2} \Bigl[\, F\bigl(u(a,t)\bigr) - F\bigl(u(b,t)\bigr) \,\Bigr]\,dt .
\tag{9}
$$

To see it, take $v(x,t) = \chi_\varepsilon(x)\,\theta_\varepsilon(t)$ in (7), where $\chi_\varepsilon$ is smooth, equal to $1$ on $[a+\varepsilon, b-\varepsilon]$, equal to $0$ outside $[a,b]$, and monotone on each of the two transition intervals, and $\theta_\varepsilon$ is built the same way from $[t_1,t_2]$. Since $R \subset V$ and $t_1>0$, this $v$ is a test function and the data term in (7) is absent. Now $\theta_\varepsilon'$ integrates to $+1$ over the first transition and to $-1$ over the second, and $u$ is bounded and continuous in $t$ at each fixed $x$ off $C$; so the first double integral in (7) tends to $\int_a^b u(x,t_1)dx - \int_a^b u(x,t_2)dx$. Likewise $\chi_\varepsilon'$ concentrates at $a$ with total mass $+1$ and at $b$ with total mass $-1$, and $x \mapsto F(u(x,t))$ is continuous near $x = a$ and $x = b$ because those lines avoid $C$; so the second double integral tends to $\int_{t_1}^{t_2}[F(u(a,t)) - F(u(b,t))]\,dt$. Both passages are dominated by the bound on $u$ and the continuity of $F$ on a bounded set. Adding gives (9).

**Step 3 (differentiate in time).** Fix $t$ with $t_1 < t < t_2$. Dividing (9) by $t_2 - t_1$ and letting $t_2 \downarrow t_1 = t$, both sides have limits and

$$
\frac{d}{dt}\int_a^b u(x,t)\,dx \;=\; F\bigl(u(a,t)\bigr) - F\bigl(u(b,t)\bigr) .
\tag{10}
$$

**Step 4 (split the interval at the jump).** Assume $a < s(t) < b$. Then

$$
\int_a^b u\,dx = \int_a^{s(t)} u\,dx + \int_{s(t)}^{b} u\,dx ,
$$

and each piece may be differentiated by the Leibniz rule, legitimately because $u$ and $u_t$ extend continuously to the closure of each side and $s$ is $C^1$:

$$
\frac{d}{dt}\int_a^b u\,dx
= \sigma\,u_l - \sigma\,u_r + \int_a^{s(t)} u_t\,dx + \int_{s(t)}^{b} u_t\,dx .
$$

By Step 1, $u_t = -F(u)_x$ on each side separately, so the two integrals evaluate to $-[F(u_l) - F(u(a,t))]$ and $-[F(u(b,t)) - F(u_r)]$. Hence

$$
\frac{d}{dt}\int_a^b u\,dx = \sigma\bigl(u_l - u_r\bigr) - F(u_l) + F(u_r) + F\bigl(u(a,t)\bigr) - F\bigl(u(b,t)\bigr) .
$$

**Step 5 (compare).** Subtracting (10) from this leaves $0 = \sigma(u_l - u_r) - F(u_l) + F(u_r)$, which is (8). The point $t$ was arbitrary. $\square$
:::

:::statement[The entropy condition and the definition of a shock]{provenance=adapted src="evans-2010:§3.4.1b, Eqs. (16)–(19), pp. 135–137, and §3.4.3b, Definition and Thm 3, p. 143; strauss-2008:§14.1, Eq. (18), pp. 388–389"}
Integral solutions are not unique: for one two-state problem for Burgers' equation Evans exhibits two, a discontinuous one whose jump he checks against (8) and a continuous one with no jump at all. A further condition is therefore needed to single out the physical solution.

**Entropy inequalities.** Along a curve of discontinuity of a piecewise-smooth integral solution, Evans requires

$$
F'(u_l) \;>\; \sigma \;>\; F'(u_r) .
\tag{11}
$$

These are the **entropy inequalities**, so named by analogy with the thermodynamic requirement that entropy not decrease. A curve of discontinuity is called a **shock** when both (8) and (11) hold on it. Strauss's criterion (18) is the same pair of inequalities written with $a = F'$ and his left and right limits, and he too declares the definition of a shock wave complete only once both conditions are imposed.

**Why these inequalities.** The characteristic through a point of $C$ carries the speed $F'(u_l)$ on the left and $F'(u_r)$ on the right. Condition (11) says both characteristics run *into* the curve as $t$ increases, so that going backwards in time from any point one never crosses a discontinuity; Evans obtains (11) exactly by imposing that backward-tracing property. Physically, as Strauss puts it, the wave behind the shock is overtaking the wave in front of it.

**The convex case.** If in addition $F$ is uniformly convex, then $F'$ is strictly increasing and (11) is equivalent to the single inequality

$$
u_l \;>\; u_r
\tag{12}
$$

along the shock curve. For Burgers' equation ($F' = \mathrm{id}$) condition (11) reads $u_l > \sigma > u_r$, and (8) gives $\sigma = (u_l+u_r)/2$, the average of the two states; the inequalities are then automatic once $u_l > u_r$.

**Uniqueness.** Evans turns the pointwise inequality into a condition that a merely bounded function can satisfy: $u \in L^\infty$ is an **entropy solution** of (1)–(2) if it satisfies (7) for every test function and, for some constant $C \ge 0$,

$$
u(x+z,t) - u(x,t) \;\le\; C\Bigl(1 + \frac{1}{t}\Bigr) z
\qquad \text{for a.e. } x,z \in \mathbb{R},\ t>0,\ z>0 .
\tag{13}
$$

His Theorem 3 states that if $F$ is convex and smooth, then there is at most one entropy solution of (1)–(2), up to a set of measure zero. Condition (13) is a one-sided bound on how fast $u$ may increase in $x$; at a jump it forces $u_l \ge u_r$, which is (12).

**Riemann's problem.** For $F$ uniformly convex and $C^2$, with $G := (F')^{-1}$, Evans's Theorem 4 gives the entropy solution for the two-state data $g = u_l$ for $x<0$, $g = u_r$ for $x>0$:

$$
u_l > u_r : \qquad u(x,t) = \begin{cases} u_l, & x/t < \sigma, \\ u_r, & x/t > \sigma,\end{cases}
\tag{14a}
$$

$$
u_l < u_r : \qquad u(x,t) = \begin{cases} u_l, & x/t < F'(u_l), \\ G(x/t), & F'(u_l) < x/t < F'(u_r), \\ u_r, & x/t > F'(u_r), \end{cases}
\tag{14b}
$$

with $\sigma$ given by (8). The first is a shock of constant speed, the second a **rarefaction wave**. The two formulas (14a) and (14b) are the building blocks out of which the solution past a breaking time is assembled.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Piecewise smoothness with uniformly continuous one-sided limits* is used in Steps 1 and 4 of the Rankine-Hugoniot proof: Step 1 needs $u$ to be $C^1$ in the interior of each side, and Step 4 needs $u$ and $u_t$ to extend continuously up to $C$ from each side so that the Leibniz rule may be applied. Without it a bounded integral solution can have a much wilder discontinuity set and (8) has nothing to be about.
- *The vertical sides of the rectangle avoiding $C$* is used only in Step 2, to make $x\mapsto F(u(x,t))$ continuous where $\chi'_\varepsilon$ concentrates. Any $a,b$ with $a < s(t) < b$ on the time interval considered will do.
- *The divergence form* is used throughout, and which divergence form matters. Multiplying $u_t + uu_x = 0$ by $2u$ turns it into $(u^2)_t + \bigl(\tfrac23 u^3\bigr)_x = 0$, a conservation law for $w = u^2$ with flux $\tfrac23 w^{3/2}$. The two laws have exactly the same $C^1$ solutions, but not the same jump speeds. For the states $u_l = 3$, $u_r = 1$ the first gives $\sigma = \tfrac12(u_l+u_r) = 2$, while the second gives $\bigl(\tfrac23\bigr)(27-1)/(9-1) = \tfrac{13}{6}$. Only one of the two can be the physically correct front, and which one is settled by which quantity is actually conserved, not by the differential equation. A conservation law is specified by its flux.
- *Convexity is needed for (12) but not for (8) or (11).* The general inequalities (11) are the ones to use for a nonconvex or concave flux; the traffic-flow model in the application below has $F'' < 0$, and there (11) forces $u_l < u_r$, the opposite of (12).
- *Why a non-entropic jump has to be rejected.* This is Evans's Example 2 (p. 135) with different states: take Burgers' equation with $u_l = 1$ and $u_r = 3$ in place of his $0$ and $1$; the arithmetic below is ours. The jump $u = 1$ for $x < 2t$, $u = 3$ for $x > 2t$ satisfies (8), since $(F(1)-F(3))/(1-3) = (\tfrac12 - \tfrac92)/(-2) = 2$, and it is an integral solution. But $F'(u_l) = 1 < 2$, so (11) fails at once. The entropy solution is instead the rarefaction of (14b): $u = 1$ for $x < t$, $u = x/t$ for $t < x < 3t$, $u = 3$ for $x > 3t$. Both have the same initial data, so without (11) the initial-value problem would not determine the solution. Observe that the characteristics *leave* the rejected jump on both sides, so the state behind it is not determined by the data at all — that is precisely what the backward-tracing requirement forbids.
:::

:::method[Solving a scalar conservation law through a shock]{provenance=adapted src="evans-2010:§3.4.1, pp. 131–138, and §3.4.4, Thm 4, pp. 147–148; strauss-2008:§14.1, pp. 383–389"}
Given $u_t + F(u)_x = 0$ with $u(x,0) = g(x)$:

1. **Put the equation in divergence form** and identify $F$ and $a = F'$. If the equation is handed to you as $u_t + a(u)u_x = 0$, choose $F$ with $F' = a$; the constant of integration does not matter, but the choice of which quantity is conserved does.
2. **Draw the characteristics.** Each is the line $x = y + t\,a(g(y))$ carrying the constant value $g(y)$.
3. **Find the breaking time.** Compute $m = \inf_y (a\circ g)'(y)$. If $m \ge 0$ the classical solution is global and step 4 onwards is unnecessary. Otherwise $t_* = -1/m$, and the classical solution is given implicitly by $u = g(y)$, $x = y + t\,a(g(y))$ for $t < t_*$.
4. **Insert the right wave at each jump of the data** using (14a)–(14b): where the data jumps so that the characteristics converge, a shock; where they diverge, a rarefaction fan $u = G(x/t)$ centred at the jump, with $G = (F')^{-1}$.
5. **Start the shock.** At $t = t_*$ the characteristics first cross; take the crossing point as the initial point of the shock curve $x = s(t)$.
6. **Propagate the shock.** Read off $u_l(t)$ and $u_r(t)$ as the limits of the solution already constructed on either side of $s(t)$, and integrate the ordinary differential equation

   $$
   \dot s = \frac{F(u_l) - F(u_r)}{u_l - u_r} , \qquad s(t_*) = \text{the crossing point} .
   $$

   When both states are constant this is a straight line; when one side is a fan it is a genuine ordinary differential equation in $s$ and $t$.
7. **Check the entropy inequalities** $F'(u_l) > \dot s > F'(u_r)$ at each time. If they fail, the jump you inserted is not a shock and step 4 was done wrongly.
8. **Stop and restart at interactions.** The construction is valid until the shock meets another shock, the edge of a fan, or a new breaking point; at such a time recompute $u_l$, $u_r$ and go back to step 6.
9. **Verify.** Check the control-volume identity (9) on an interval containing the shock: the amount of $u$ in $[a,b]$ must change at the rate $F(u(a,t)) - F(u(b,t))$. This catches an error in $F$, in $\sigma$ or in the solution on either side.
:::

:::example[A Burgers ramp: breaking, shock and a conserved count]{provenance=original}
Solve Burgers' equation $u_t + \bigl(\tfrac12 u^2\bigr)_x = 0$ with

$$
g(x) = \begin{cases} 3, & x \le 0,\\ 3 - 2x, & 0 \le x \le 1,\\ 1, & x \ge 1.\end{cases}
$$

Here $F(u) = u^2/2$ and $a(u) = F'(u) = u$, so $a \circ g = g$. The data are continuous and piecewise $C^1$ but not $C^1$, because of the corners at $x = 0$ and $x = 1$, so the hypotheses of the breaking statement are not literally met. The corners cause no trouble: the characteristic speeds match across them, so the lines (5) still fill the strip without gaps, and the construction goes through on each piece separately. The price is that what comes out is $C^1$ only off the two characteristics $x = 3t$ and $x = 1+t$ carried by the corners, and merely Lipschitz across those two lines; we call it the **piecewise-classical** solution. The breaking time is unaffected, since the stretching factor $1 + t\,g'(y)$ is computed piece by piece, and no number below depends on the distinction.

**1. Characteristics.** The line from $(y,0)$ is $x = y + t\,g(y)$, carrying the value $g(y)$. So

- for $y \le 0$: $x = y + 3t$, speed $3$;
- for $0 \le y \le 1$: $x = y + t(3-2y) = y(1-2t) + 3t$, speed $3-2y$;
- for $y \ge 1$: $x = y + t$, speed $1$.

**2. Breaking time.** $(a\circ g)' = g'$ equals $0$ outside $(0,1)$ and $-2$ inside it, so $m = -2$ and

$$
t_* = -\frac1m = \frac12 .
$$

**3. Where the crossing happens.** At $t = \tfrac12$ the middle family collapses: $x = y(1-2t) + 3t$ becomes $x = \tfrac32$ for *every* $y \in [0,1]$. All the characteristics carrying the values between $1$ and $3$ arrive at the single point $(x,t) = \bigl(\tfrac32, \tfrac12\bigr)$.

**4. The piecewise-classical solution for $t < \tfrac12$.** Inverting $x = y(1-2t)+3t$ gives $y = (x-3t)/(1-2t)$ and hence $u = 3 - 2y = (3-2x)/(1-2t)$. Altogether

$$
u(x,t) = \begin{cases} 3, & x \le 3t,\\[2pt] \dfrac{3-2x}{1-2t}, & 3t \le x \le 1+t,\\[4pt] 1, & x \ge 1+t,\end{cases}
\qquad 0 \le t < \tfrac12 .
$$

The two branch points agree with the ends of the middle family, and the formula is continuous across them: at $x = 3t$ it gives $(3-6t)/(1-2t) = 3$ and at $x = 1+t$ it gives $(1-2t)/(1-2t) = 1$. A check at an interior point: at $x = 1$, $t = \tfrac14$ the formula gives

$$
u\bigl(1,\tfrac14\bigr) = \frac{3-2}{1-\tfrac12} = 2 ,
$$

and indeed the characteristic through $(1,\tfrac14)$ started at $y = (1 - \tfrac34)/\tfrac12 = \tfrac12$, where $g = 3 - 1 = 2$. The slope at that point is $u_x = -2/(1-2t) = -4$, which does run to $-\infty$ as $t \uparrow \tfrac12$, as Step 5 of the proof predicts.

**5. The shock.** For $t > \tfrac12$ the states on the two sides of the crossing point are the constants $u_l = 3$ and $u_r = 1$. By (8),

$$
\sigma = \frac{F(3) - F(1)}{3-1} = \frac{\tfrac92 - \tfrac12}{2} = 2 ,
$$

constant, so the shock curve is the straight line through $(\tfrac32,\tfrac12)$ of slope $dx/dt = 2$:

$$
s(t) = \tfrac32 + 2\bigl(t - \tfrac12\bigr) = 2t + \tfrac12 .
$$

**6. Entropy.** $F'(u_l) = 3$, $F'(u_r) = 1$, and $3 > 2 > 1$: the inequalities (11) hold, so this is a genuine shock. (Equivalently, $u_l = 3 > 1 = u_r$, since $F$ is uniformly convex with $F''=1$.) The solution for $t \ge \tfrac12$ is therefore

$$
u(x,t) = \begin{cases} 3, & x < 2t + \tfrac12,\\ 1, & x > 2t + \tfrac12. \end{cases}
$$

Nothing further happens: the characteristics on the left have speed $3 > 2$ and on the right speed $1 < 2$, so both run into the shock for all later times and no new interaction occurs.

**7. A checkable number.** At $t = 3$ the shock sits at

$$
s(3) = 2\cdot 3 + \tfrac12 = 6.5 .
$$

Verify this against the conservation identity (9) on the fixed interval $[-10, 10]$, which contains the shock for all $0 \le t \le 3$ (at $t=3$ it is at $6.5 < 10$) and whose ends sit in the constant states. Write $N(t) := \int_{-10}^{10} \bigl(u(x,t) - 1\bigr)\,dx$; since the constant $1$ contributes nothing to the right-hand side of (9) beyond a cancelling pair, (9) gives

$$
N(t) - N(0) = \int_0^t \bigl[F(u(-10,\tau)) - F(u(10,\tau))\bigr]\,d\tau = t\bigl(F(3) - F(1)\bigr) = 4t .
$$

Now compute both sides directly. At $t=0$,

$$
N(0) = \int_{-10}^{0} 2\,dx + \int_0^1 \bigl(2 - 2x\bigr)\,dx + 0 = 20 + 1 = 21 .
$$

At $t = 3$ the profile takes the value $u - 1 = 2$ on $[-10, 6.5)$ and $0$ beyond, so

$$
N(3) = 2\cdot\bigl(6.5 - (-10)\bigr) = 33 .
$$

The difference is $33 - 21 = 12 = 4 \cdot 3$, exactly as required. Had the shock been placed anywhere other than $x = 6.5$ at $t=3$, the count would have been wrong: the Rankine-Hugoniot speed is precisely the speed that keeps the books balanced.
:::

:::application{provenance=original}
**Traffic.** The Lighthill-Whitham-Richards model treats the density $\rho(x,t)$ of vehicles on a single lane as a conserved quantity whose flux is $F(\rho) = v_m\rho\,(1 - \rho/\rho_m)$: drivers choose the speed $v_m(1-\rho/\rho_m)$, full speed on an empty road and zero at the jam density $\rho_m$. Here $F'' = -2v_m/\rho_m < 0$, so the flux is concave, not convex, and the entropy inequalities must be used in the general form (11).

Take $v_m = 100\ \mathrm{km/h}$ and $\rho_m = 180$ vehicles per km, and let traffic of density $\rho_0 = 36$ per km run into a standing queue at $\rho = \rho_m$ behind a red light. The queue's tail is a jump with $\rho_l = 36$ upstream and $\rho_r = 180$ downstream, and (8) gives

$$
\sigma = \frac{F(36) - F(180)}{36 - 180} = \frac{2880 - 0}{-144} = -20\ \mathrm{km/h} :
$$

the back of the queue travels *upstream* at $20\ \mathrm{km/h}$ while every car in it moves forwards or stands still. The entropy check is $F'(36) = 60 > -20 > -100 = F'(180)$, so this is a shock. Over three minutes the tail retreats $1\ \mathrm{km}$, so the queue grows by $180$ vehicles; and indeed $144$ cars arrive in that time at $2880$ per hour, while $36$ were already on that kilometre of road. The two counts agree, which is the control-volume check of step 9 of the method. When the light turns green the jump runs the other way, $\rho_l = \rho_m > \rho_r$, the characteristics diverge, and (14b) supplies a rarefaction fan instead: this is why a queue dissolves gradually from the front while it builds abruptly at the back.

**Gas dynamics.** The equations of compressible flow are a system of conservation laws for mass, momentum and energy, and the jump relations across a shock front — the original Rankine-Hugoniot conditions, from which the name here is borrowed — are the system version of (8), one equation per conserved quantity. They are what determines the pressure, density and temperature behind a blast wave or a bow shock from the conditions ahead of it and the shock speed, without any knowledge of the internal structure of the front. The entropy inequalities are, in that setting, the statement that the thermodynamic entropy of a fluid element increases as it crosses the front, which is where the name comes from; a jump violating them would be a rarefaction shock, never observed.

**River and glacier waves, and why the front steepens.** Any model in which the propagation speed increases with the amplitude produces the same phenomenon: a flood wave in a channel steepens at its front and decays at its back, and a wave on a glacier or a dune field does the same. The breaking-time formula of this unit gives the time scale on which that steepening is complete, and the Rankine-Hugoniot speed gives the velocity of the resulting front — which, note, is neither the speed of the material behind it nor that in front of it, but a weighted mean determined by the flux.

**Numerics.** The reason finite-difference schemes for these equations are written in conservative form, as updates of cell averages by numerical fluxes at cell faces, is Step 2 above: a scheme that discretises $u_t + a(u)u_x = 0$ rather than $u_t + F(u)_x = 0$ satisfies no discrete analogue of (9), and will converge to a jump travelling at the wrong speed, even as the mesh is refined. The entropy condition plays the matching role of excluding the spurious stationary jumps such a scheme can otherwise admit. See :ref[finite differences]{to=num.finite-differences} for the discretisations and :ref[von Neumann stability analysis]{to=num.von-neumann-stability} for the separate question of stability, which is a condition on the time step, not on the form of the scheme.
:::
