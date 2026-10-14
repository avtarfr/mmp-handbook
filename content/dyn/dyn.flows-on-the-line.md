---
id: dyn.flows-on-the-line
title: Flows on the line
kind: method
level: core
summary: Shows how to read the long-time behaviour of an autonomous equation $\dot x = f(x)$ off the graph of $f$ — fixed points, the sign of $f'$ at each one as a decay or growth rate, and the theorem that every solution is monotone, so that nothing on the line can oscillate.
prereqs: [ode.existence-uniqueness, found.taylor-theorem, found.limits-of-sequences]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "ch. 2: §2.1 A geometric way of thinking, pp. 16-17 (the vector field on the line, the fluid picture, fixed points as stagnation points, filled and open circles for stable and unstable); §2.2 Fixed points and stability, pp. 18-20 (phase fluid, phase point, trajectory, phase portrait, local versus global stability, Example 2.2.1 for $\\dot x = x^2-1$); §2.4 Linear stability analysis, pp. 24-26 (the linearisation $\\dot\\eta = \\eta f'(x^\\ast)$, growth or decay according to the sign of $f'(x^\\ast)$, the characteristic time scale $1/\\lvert f'(x^\\ast)\\rvert$, and Example 2.4.3 with the four equations $-x^3$, $x^3$, $x^2$, $0$ for the degenerate case); §2.6 Impossibility of oscillations, pp. 28-29 (trajectories increase or decrease monotonically, no periodic solutions, the overdamped mechanical analogue); §2.7 Potentials, pp. 30-31 (the potential $f = -dV/dx$, $dV/dt = -(dV/dx)^2 \\le 0$, minima stable and maxima unstable)"
    pages: "15-31"
    role: the phase-line picture and its vocabulary; the classification of fixed points by the sign of $f'$; the characteristic time scale; the four degenerate examples; the statement that one-dimensional flows cannot oscillate and the overdamped and potential readings of that fact
  - work: hirsch-smale-devaney-2013
    loc: "§1.1 The simplest example, pp. 1-4 (equilibrium point, source and sink, the phase line, the bifurcation at $a=0$ in $x'=ax$); §1.2 The logistic population model, pp. 4-7 (the derivative test $f_a'(0)>0$, $f_a'(1)<0$ and the phase line for $x'=x-x^3$); §8.4 Stability, pp. 174-175 (the $\\varepsilon$-$\\delta$ definitions of stable, asymptotically stable and unstable equilibria, and the theorem that an equilibrium whose linearisation has all eigenvalues with negative real part is asymptotically stable)"
    pages: "1-9, 174-175"
    role: the precise definitions of stable, asymptotically stable and unstable used in the statement; the derivative test in the form of a theorem about eigenvalues of the linearisation; the terms source and sink
---

:::note[What a one-dimensional flow can and cannot do]{provenance=original}
An autonomous equation in one unknown,

$$
\dot x = f(x) ,
$$

is the smallest nonlinear problem there is, and almost none of them can be solved in closed form. They do not need to be. The whole qualitative story — which states the system settles into, from which starting values, how fast, and which solutions run away to infinity — can be read off the graph of $f$ without integrating anything, and this unit says how.

The reason the reading is so complete is a restriction that will not survive into two dimensions: a solution of $\dot x = f(x)$ is a monotone function of $t$. It cannot overshoot, it cannot ring, and it cannot repeat. Everything either approaches a zero of $f$ or leaves every bounded set. Oscillation needs either a second dimension, which is the subject of :ref[Classification of linear planar systems]{to=dyn.linear-planar-classification} and what follows it, or a phase space that closes on itself, which is :ref[Flows on the circle]{to=dyn.flows-on-the-circle}.
:::

:::definition[The phase line]{provenance=adapted src="strogatz-1994:§2.1, pp. 16-17, and §2.2, pp. 18-19; hirsch-smale-devaney-2013:§1.1, pp. 2-3"}
Let $I \subseteq \mathbb{R}$ be an open interval and let $f : I \to \mathbb{R}$ be continuously differentiable. The equation

$$
\dot x = f(x) , \qquad x(0) = x_0 \in I ,
$$

is called a **one-dimensional** or **first-order system**. It is *autonomous*: the right-hand side does not contain $t$, so the rule of motion at a point of $I$ is the same at every instant. By :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness} the initial-value problem has exactly one solution on some time interval around $t = 0$, and we write $x(t)$ for it and $(t_-, t_+)$ for the largest interval on which it is defined.

The geometric reading is to regard $I$ not as an axis along which graphs of solutions are drawn, but as the space in which the motion happens — the **phase line**. A number $x \in I$ is a *state*; $f(x)$ is the velocity assigned to that state; the assignment $x \mapsto f(x)$ is a **vector field on the line**. A solution $x(t)$ is then the position at time $t$ of a point carried by that field, and its image in $I$ is its **trajectory**. The picture of $I$ with the trajectories marked, arrows pointing right where $f > 0$ and left where $f < 0$, is the **phase portrait**. Strogatz's way of holding the picture in mind is to imagine a fluid filling the line and moving with local velocity $f$, a solution being a speck carried along by it.

A **fixed point** (equivalently, an **equilibrium point**) is a zero of $f$: a number $x^\ast \in I$ with $f(x^\ast) = 0$. The constant function $x(t) \equiv x^\ast$ is then a solution, and in the fluid picture $x^\ast$ is a place where the fluid is at rest. We adopt Hirsch, Smale and Devaney's definitions of what it means for such a point to be stable. The fixed point $x^\ast$ is

- **stable** if every neighbourhood $O$ of $x^\ast$ contains a neighbourhood $O_1$ of $x^\ast$ such that every solution starting in $O_1$ is defined for all $t > 0$ and stays in $O$ for all $t > 0$;
- **asymptotically stable** (a **sink**, or an *attractor*) if in addition $O_1$ can be chosen so that every solution starting in it satisfies $x(t) \to x^\ast$ as $t \to \infty$;
- **unstable** (a **source**, or a *repeller*, when the flow leaves on both sides) if it is not stable.

In phase portraits a sink is drawn as a filled circle and a source as an open one; a fixed point attracting on one side and repelling on the other is drawn half filled and called **half-stable**.
:::

:::statement[Linear stability: the sign of $f'$ at a fixed point]{provenance=adapted src="strogatz-1994:§2.4, pp. 24-25; hirsch-smale-devaney-2013:§1.2, pp. 6-7, and §8.4, p. 175"}
Let $f$ be continuously differentiable on an open interval $I$ and let $f(x^\ast) = 0$ for some $x^\ast \in I$. Write $\lambda = f'(x^\ast)$.

1. **If $\lambda < 0$, then $x^\ast$ is asymptotically stable.** Quantitatively: for every $\varepsilon \in (0, -\lambda)$ there is a $\delta > 0$ such that every solution with $\lvert x_0 - x^\ast\rvert \le \delta$ exists for all $t \ge 0$ and obeys
   $$
   \bigl\lvert x(t) - x^\ast \bigr\rvert \ \le \ \bigl\lvert x_0 - x^\ast \bigr\rvert \, e^{(\lambda + \varepsilon) t} \qquad (t \ge 0) .
   $$
2. **If $\lambda > 0$, then $x^\ast$ is unstable.** Quantitatively: for every $\varepsilon \in (0, \lambda)$ there is a $\delta > 0$ such that any solution starting with $0 < \lvert x_0 - x^\ast\rvert \le \delta$ obeys $\lvert x(t) - x^\ast\rvert \ge \lvert x_0 - x^\ast\rvert e^{(\lambda - \varepsilon)t}$ for as long as it stays within $\delta$ of $x^\ast$, and therefore leaves that neighbourhood in finite time.
3. **If $\lambda = 0$, no conclusion follows.** All four possibilities occur: $x^\ast = 0$ is asymptotically stable for $\dot x = -x^3$, unstable for $\dot x = x^3$, half-stable for $\dot x = x^2$, and stable but not asymptotically stable for $\dot x = 0$.

The number $\lvert \lambda\rvert$ is a rate and its reciprocal $1/\lvert\lambda\rvert$ is the **characteristic time** of the fixed point: the time in which a small deviation from $x^\ast$ changes by a factor $e$.

Strogatz states the criterion in the form that the perturbation $\eta = x - x^\ast$ obeys $\dot\eta \approx \lambda\eta$ and so grows or decays exponentially at rate $\lambda$, and identifies $1/\lvert\lambda\rvert$ as the time scale, without the $\varepsilon$ that parts 1 and 2 carry here (pp. 24-25); the $\varepsilon$ is the price of turning the approximation into an inequality valid for the nonlinear equation, and the proof below pays it. Part 1 is also the one-dimensional case of Hirsch, Smale and Devaney's theorem that an equilibrium whose linearisation has every eigenvalue of negative real part is asymptotically stable (p. 175), the single eigenvalue here being $\lambda$.
:::

:::idea[Why the sign of $f'$ decides]{provenance=original}
Near $x^\ast$ the graph of $f$ is a line of slope $\lambda$ through the zero, bent by an amount that is small compared with the deviation itself. A line of negative slope through $x^\ast$ points towards $x^\ast$ on both sides, and a line of positive slope points away. The only work is to show that the bending cannot overturn the verdict, and the trick is not to track the position but its square: $\frac{d}{dt}(x-x^\ast)^2$ is $(x - x^\ast)^2$ times a coefficient that the mean value theorem exhibits as an average of $f'$ over the segment from $x^\ast$ to $x$, and continuity of $f'$ pins that average within $\varepsilon$ of $\lambda$. The differential inequality then integrates to the stated exponential bound, with no linearisation and no neglected terms.
:::

:::proof[Linear stability]{provenance=original}
Write $u(t) = x(t) - x^\ast$, so $u(0) = u_0 = x_0 - x^\ast$ and $\dot u = f(x^\ast + u)$.

**Step 1: an exact factorisation of the right-hand side.** Since $f$ is continuously differentiable and $f(x^\ast) = 0$, the fundamental theorem of calculus applied to $s \mapsto f(x^\ast + su)$ on $[0,1]$ gives

$$
f(x^\ast + u) \;=\; f(x^\ast + u) - f(x^\ast) \;=\; u \int_0^1 f'(x^\ast + su)\,ds \;=:\; u\, c(u) ,
$$

valid for every $u$ with $x^\ast + u \in I$. This is exact, not an approximation; $c$ is continuous and $c(0) = f'(x^\ast) = \lambda$. (It is the integral form of the first-order Taylor expansion of :ref[Taylor's theorem]{to=found.taylor-theorem}, arranged so that the remainder is absorbed into the coefficient rather than left over.)

**Step 2: choosing the neighbourhood.** Let $\varepsilon > 0$. Because $f'$ is continuous at $x^\ast$, there is $\delta > 0$ with $[x^\ast-\delta, x^\ast+\delta] \subset I$ and

$$
\lvert f'(y) - \lambda\rvert < \varepsilon \qquad \text{whenever } \lvert y - x^\ast\rvert \le \delta .
$$

If $\lvert u \rvert \le \delta$ then every point $x^\ast + su$ with $s \in [0,1]$ also lies within $\delta$ of $x^\ast$, so averaging the displayed bound over $s$ gives

$$
\lambda - \varepsilon \ < \ c(u) \ < \ \lambda + \varepsilon \qquad \text{for } \lvert u\rvert \le \delta .
\tag{$\ast$}
$$

**Step 3: the differential inequality.** Put $w(t) = u(t)^2$. Wherever the solution satisfies $\lvert u(t)\rvert \le \delta$,

$$
\dot w = 2u\dot u = 2u^2 c(u) = 2\,c(u)\,w ,
$$

so by $(\ast)$, $2(\lambda - \varepsilon) w \le \dot w \le 2(\lambda+\varepsilon)w$. Multiplying the right-hand inequality by the positive factor $e^{-2(\lambda+\varepsilon)t}$ turns it into $\frac{d}{dt}\bigl[e^{-2(\lambda+\varepsilon)t} w(t)\bigr] \le 0$, so $e^{-2(\lambda+\varepsilon)t}w(t)$ is non-increasing and

$$
w(t) \ \le \ w(0)\, e^{2(\lambda+\varepsilon)t} , \qquad\text{that is}\qquad \lvert u(t)\rvert \ \le \ \lvert u_0\rvert\, e^{(\lambda+\varepsilon)t} .
\tag{$\dagger$}
$$

The same manipulation with the left-hand inequality gives $\lvert u(t)\rvert \ge \lvert u_0\rvert e^{(\lambda-\varepsilon)t}$.

**Step 4: part 1.** Suppose $\lambda < 0$ and let $0 < \varepsilon < -\lambda$, so $\lambda + \varepsilon < 0$; take $\delta$ from step 2 and $\lvert u_0\rvert \le \delta$. As long as the solution stays in $[x^\ast-\delta, x^\ast+\delta]$, bound $(\dagger)$ holds and gives $\lvert u(t)\rvert \le \lvert u_0\rvert \le \delta$, so the solution cannot reach the boundary of that interval; since it also stays in a compact subset of $I$, it does not blow up and is defined for all $t \ge 0$. Hence $(\dagger)$ holds for all $t \ge 0$, and as $\lambda + \varepsilon < 0$ it forces $x(t) \to x^\ast$. Both parts of the definition of asymptotic stability are met, with $O_1 = (x^\ast-\delta, x^\ast+\delta)$ serving for any given $O$ once $\delta$ is shrunk to fit inside $O$.

**Step 5: part 2.** Suppose $\lambda > 0$ and let $0 < \varepsilon < \lambda$, so $\lambda - \varepsilon > 0$; take $\delta$ from step 2 and $0 < \lvert u_0\rvert \le \delta$. While the solution remains in $[x^\ast-\delta, x^\ast+\delta]$ we have $\lvert u(t)\rvert \ge \lvert u_0\rvert e^{(\lambda-\varepsilon)t}$, whose right-hand side exceeds $\delta$ once $t > (\lambda-\varepsilon)^{-1}\log(\delta/\lvert u_0\rvert)$. So the solution leaves the interval by that time. Since this happens for starting values arbitrarily close to $x^\ast$, no neighbourhood $O_1$ of the kind required for stability exists when $O = (x^\ast-\delta, x^\ast+\delta)$.

**Step 6: part 3.** Each of the four equations has $f(0) = f'(0) = 0$. For $\dot x = -x^3$ separation of variables gives $x(t)^{-2} = x_0^{-2} + 2t$ for $x_0 \neq 0$, so $\lvert x(t)\rvert = \lvert x_0\rvert (1 + 2x_0^2 t)^{-1/2} \to 0$: asymptotically stable, but decaying like $t^{-1/2}$ rather than exponentially. For $\dot x = x^3$ the same computation gives $x(t)^{-2} = x_0^{-2} - 2t$, so $\lvert x(t)\rvert \to \infty$ as $t \uparrow 1/(2x_0^2)$: unstable, indeed blowing up in finite time. For $\dot x = x^2$ the field points right on both sides, so the origin attracts from the left and repels on the right: half-stable, hence not stable. For $\dot x = 0$ every point is a fixed point, so solutions neither approach nor leave: stable, not asymptotically stable. $\square$
:::

:::statement[Monotonicity, and the impossibility of oscillation]{provenance=adapted src="strogatz-1994:§2.6, pp. 28-29"}
Let $f$ be continuously differentiable on an open interval $I$ and let $x(t)$ solve $\dot x = f(x)$ on its maximal interval $(t_-, t_+)$.

1. **No crossing.** If $x(t_1) = x^\ast$ for some $t_1$ and some fixed point $x^\ast$, then $x(t) \equiv x^\ast$. Equivalently, a non-constant solution never attains the value of a fixed point, at any finite time.
2. **Monotonicity.** $x$ is either strictly increasing on all of $(t_-,t_+)$, or strictly decreasing on all of it, or constant, according to the sign of $f(x_0)$.
3. **No periodic solutions.** The only periodic solutions of $\dot x = f(x)$ are the constant ones. In particular there are no oscillations: no overshoot, no ringing, no sustained cycle.
4. **The only two fates.** As $t \uparrow t_+$, either $x(t)$ tends to a fixed point of $f$, or it leaves every compact subinterval of $I$. If $I = \mathbb{R}$ and $x$ is bounded above (for increasing $x$) or below (for decreasing $x$), then $t_+ = \infty$ and $x(t)$ converges to a fixed point.

Strogatz states 2, 3 and (for $I = \mathbb{R}$) 4 and attributes them to the topology of the line: a point moving monotonically along a line never returns to where it started (pp. 28-29).
:::

:::idea[Why nothing on a line can oscillate]{provenance=original}
To turn around, a solution must pass through an instant at which its velocity is zero — and its velocity is $f$ evaluated at its own position, so at that instant it is sitting on a fixed point. But a fixed point already carries a solution, the constant one, and uniqueness allows only one solution through a given state. So a solution that touches a fixed point *is* that constant solution and never moved at all. A moving solution therefore never changes the sign of its velocity: it is monotone, and a monotone function that is not constant cannot return to an earlier value.

The last part is the monotone convergence theorem plus one observation: a monotone solution that converges must be slowing to a stop, and the only places where the velocity vanishes are the fixed points.
:::

:::proof[Monotonicity and its consequences]{provenance=original}
**Part 1.** Suppose $f(x^\ast) = 0$ and $x(t_1) = x^\ast$. The constant function $y(t) \equiv x^\ast$ solves $\dot y = f(y)$ with $y(t_1) = x^\ast$. Since $f$ is continuously differentiable it is locally Lipschitz, so by :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness} the initial-value problem posed at time $t_1$ with value $x^\ast$ has only one solution, and two solutions that agree at one time agree on their whole common interval. Hence $x \equiv x^\ast$.

**Part 2.** Set $g(t) = \dot x(t) = f(x(t))$, a continuous function of $t$. Suppose $g$ took both a strictly positive and a strictly negative value, say $g(t_a) > 0 > g(t_b)$ with $t_a < t_b$. By the intermediate value theorem there is $t_c \in (t_a,t_b)$ with $g(t_c) = 0$, that is, $f(x(t_c)) = 0$, so $x(t_c)$ is a fixed point. By part 1, $x$ is then constant and $g \equiv 0$, contradicting $g(t_a) > 0$. So $g$ does not change sign.

If $g$ is nowhere zero it has one strict sign throughout, and $x$ is strictly monotone. If $g(t_c) = 0$ for some $t_c$, part 1 makes $x$ constant. In either case the sign is that of $g(0) = f(x_0)$.

**Part 3.** Let $x$ be periodic with period $T > 0$, so $x(t+T) = x(t)$ for all $t$. Then $x$ is defined for all $t$ and $x(T) = x(0)$, which is incompatible with strict monotonicity. By part 2, $x$ is constant.

**Part 4.** Suppose $x$ is increasing (the decreasing case is the same with the inequalities reversed, or follows by applying this one to $-x$, which solves $\dot y = -f(-y)$). Let $J \subset I$ be a compact subinterval, and suppose $x(t) \in J$ for all $t \in [0, t_+)$. Then $x$ is increasing and bounded above by $\max J$, so by the monotone convergence theorem $L = \lim_{t \uparrow t_+} x(t)$ exists and lies in $J \subset I$. If $t_+$ were finite the solution would extend past $t_+$ from the state $L \in I$, contradicting maximality; so $t_+ = \infty$.

It remains to show $f(L) = 0$. Suppose instead $f(L) = m \neq 0$. Since $x$ increases to $L$ we have $m \ge 0$, for if $m < 0$ then $f < 0$ on a neighbourhood of $L$ by continuity, and $x$ entering that neighbourhood would have to decrease. So $m > 0$. By continuity of $f$ there is $\sigma > 0$ with $f(y) > m/2$ for $\lvert y - L\rvert \le \sigma$, and there is $t_0$ with $L - \sigma < x(t) < L$ for $t \ge t_0$. Then $\dot x(t) > m/2$ for all $t \ge t_0$, so $x(t) > x(t_0) + (m/2)(t - t_0) \to \infty$, contradicting $x < L$. Hence $f(L) = 0$ and $x(t) \to L$, a fixed point.

If no compact subinterval contains the trajectory for all time, then by definition $x$ leaves every compact subinterval of $I$; when $I = \mathbb{R}$ and $x$ is increasing this means $x(t) \to \infty$ (possibly in finite time, as for $\dot x = 1 + x^2$). $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="strogatz-1994:§2.4, Example 2.4.3, pp. 25-26, and §2.5, Example 2.5.1, p. 27"}
- **Autonomy** — that $f$ does not depend on $t$ — is used everywhere, and is the whole reason a one-dimensional phase space is available. It is needed in part 1 of the monotonicity proof (a constant function is a solution only because $f(x^\ast) = 0$ holds at all times), and it is what makes the velocity a function of position alone, so that the graph of $f$ is a complete description. The non-autonomous equation $\dot x = -x\cos t$ has the oscillating solutions $x_0 e^{-\sin t}$, so part 3 fails at once without it.
- **Uniqueness**, which continuous differentiability of $f$ supplies, is used exactly once, in part 1 of the monotonicity proof, and everything after it rests on that. Dropping it costs the no-crossing statement: for $\dot x = 3x^{2/3}$, which has a continuous but non-Lipschitz right-hand side at the origin, the function equal to $0$ for $t \le 0$ and to $t^3$ for $t > 0$ is a solution that sits on the fixed point $x^\ast = 0$ for all negative time and then leaves it. (Monotonicity happens to survive in that particular example because $f \ge 0$ there, but the argument above no longer delivers it.) The related non-uniqueness example $\dot x = x^{1/3}$ is in :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}.
- **$f(x^\ast) = 0$** in the stability theorem is what makes the factorisation of step 1 possible; without it the right-hand side has a non-zero constant term and there is no fixed point to be stable.
- **$f' $ continuous at $x^\ast$**, not merely the existence of $f'(x^\ast)$, is used in step 2 to make $(\ast)$ hold on a whole interval rather than at the single point $x^\ast$. The exponential bound is a statement about an interval and needs an interval's worth of control.
- **$\lambda \neq 0$** is essential and not a technicality: part 3 of the statement exhibits four equations with the same linearisation $\dot\eta = 0$ and four different answers. When $\lambda = 0$, fall back on the sign of $f$ on each side of $x^\ast$, which always settles the question; the four equations listed there realise the four possible sign patterns, namely $(+,-)$ for $-x^3$, $(-,+)$ for $x^3$, $(+,+)$ for $x^2$, and $f$ vanishing identically. The degenerate case is not a curiosity: it is precisely where bifurcations happen, which is the subject of :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations}.
- **Boundedness** in part 4 cannot be dropped. $\dot x = 1 + x^2$ with $x_0 = 0$ has the solution $\tan t$, which reaches infinity at $t = \pi/2$: the solution is monotone and has no fixed point to converge to, and $t_+$ is finite.
:::

:::method[Reading a one-dimensional flow off the graph of $f$]{provenance=adapted src="strogatz-1994:§2.2, pp. 18-19, and §2.4, pp. 24-25; hirsch-smale-devaney-2013:§1.2, pp. 6-7"}
Given $\dot x = f(x)$ with $f$ continuously differentiable on an interval $I$:

1. **Find the fixed points.** Solve $f(x) = 0$ on $I$. If the equation cannot be solved in closed form, split $f$ into two pieces whose graphs you know, $f = g - h$, and locate the intersections of $y = g(x)$ and $y = h(x)$ instead; the fixed points are the $x$-coordinates of the intersections.
2. **Mark the sign of $f$ on each interval between consecutive fixed points.** One test value per interval is enough, because $f$ is continuous and vanishes only at the fixed points. Draw a rightward arrow where $f > 0$ and a leftward arrow where $f < 0$. This is the phase portrait, and it already determines the fate of every initial condition: the flow carries $x_0$ towards the first fixed point in the direction of its arrow, or out of $I$ if there is none.
3. **Classify each fixed point by the arrows on its two sides:** in-in is a sink, out-out a source, and in-out or out-in is half-stable.
4. **Get the rates.** Compute $\lambda = f'(x^\ast)$ at each fixed point. Negative $\lambda$ confirms a sink, positive a source, and the magnitude gives the characteristic time $1/\lvert\lambda\rvert$. If $\lambda = 0$ the arrows of step 2 still give the classification; only the rate is lost, and the approach is then slower than any exponential.
5. **Sketch $x$ against $t$ if required.** The curve is monotone, with slope $f(x)$; it is concave up where the phase point is speeding up (that is, where $f f' > 0$) and concave down where it is slowing down, and it approaches a horizontal asymptote at each sink.
6. **Get exact times when you need them.** Because the equation is separable, the time to travel from $a$ to $b$ with no fixed point in between is
   $$
   t(a \to b) = \int_a^b \frac{dx}{f(x)} ,
   $$
   which is finite precisely when $f$ does not vanish on the closed interval between the two. Its divergence at a fixed point is the analytic form of part 1 of the theorem above.
:::

:::example[A quadratic flow: classification, rates and an exact transit time]{provenance=original}
Take

$$
\dot x = f(x) = -x^2 + 6x - 8 = -(x-2)(x-4) , \qquad x \in \mathbb{R} .
$$

**Step 1: fixed points.** $f(x) = 0$ at $x^\ast = 2$ and $x^\ast = 4$.

**Step 2: signs.** $f(0) = -8 < 0$, $f(3) = 1 > 0$, $f(5) = -3 < 0$. So the flow is leftward on $(-\infty,2)$, rightward on $(2,4)$ and leftward on $(4,\infty)$.

**Step 3: classification.** The arrows point away from $2$ on both sides and towards $4$ on both sides: $x^\ast = 2$ is a source, $x^\ast = 4$ is a sink.

**Step 4: rates.** $f'(x) = -2x + 6$, so

$$
\lambda_2 = f'(2) = 2 > 0 , \qquad \lambda_4 = f'(4) = -2 < 0 ,
$$

confirming step 3 and giving both characteristic times as $1/\lvert\lambda\rvert = 0.5$. Every solution starting with $x_0 > 2$ converges to $4$; every solution with $x_0 < 2$ decreases, and since $f < 0$ and $\lvert f\rvert$ grows quadratically there, it reaches $-\infty$ in finite time. The solution from $x_0 = 2$ is the constant $2$.

**Step 5: an exact transit time.** Start at $x_0 = 3$ and ask how long the phase point takes to reach $x = 3.9$. There is no fixed point in $[3, 3.9]$, so step 6 of the method applies. Partial fractions give

$$
\frac{1}{(x-2)(4-x)} = \frac{1}{2}\left(\frac{1}{x-2} + \frac{1}{4-x}\right) ,
$$

because $(x-2) + (4-x) = 2$. Hence

$$
t = \int_3^{3.9} \frac{dx}{(x-2)(4-x)} = \frac{1}{2}\Bigl[\log(x-2) - \log(4-x)\Bigr]_3^{3.9} = \frac{1}{2}\log\frac{x-2}{4-x}\bigg|_3^{3.9} .
$$

At $x = 3$ the bracket is $\tfrac12\log 1 = 0$; at $x = 3.9$ it is $\tfrac12\log(1.9/0.1) = \tfrac12\log 19$. So

$$
\boxed{\;t \;=\; \tfrac{1}{2}\log 19 \;=\; 1.4722194895832202\ldots\;}
$$

**Step 6: check it two ways.** Numerically integrating $\dot x = -(x-2)(x-4)$ from $x(0) = 3$ with an adaptive solver gives $x(1.47221948958) = 3.8999999999994$, agreeing to twelve figures. And the linear estimate near the sink predicts a deviation decaying as $e^{-2t}$, so shrinking the deviation from $1$ (at $x=3$) to $0.1$ (at $x=3.9$) should take about $\tfrac12\log 10 = 1.1513$. The true time is $28\%$ longer, because the deviation starts at $1$, which is not small compared with the distance $2$ between the fixed points, and the flow there is slower than the linearisation at $x^\ast = 4$ suggests. The linear rate is a statement about the final approach, not about the whole journey.
:::

:::application[Overdamped motion, gradient flow and the potential]{provenance=adapted src="strogatz-1994:§2.6, pp. 29-30, and §2.7, pp. 30-31"}
The physical setting in which one-dimensional flows arise exactly, rather than as a caricature, is **overdamped motion**: a particle of mass $m$ in a force field $F(x)$, moving through a medium that exerts a drag $-b\dot x$, obeys

$$
m\ddot x = F(x) - b\dot x .
$$

When the drag dominates the inertia the $m\ddot x$ term may be dropped and what is left is first order,

$$
\dot x = f(x) , \qquad f = F/b .
$$

Strogatz's picture is a bead in a vat of honey. (The neglect is not uniformly valid: it fails during a brief initial transient in which the inertial and damping terms are comparable, and only after that does the first-order description take over — a singular limit, treated in :ref[Boundary layers and matched asymptotics]{to=asym.boundary-layers}.)

In this reading, part 3 of the monotonicity theorem is a physical statement with no mystery in it: a mass whose inertia has been thrown away cannot overshoot, so it cannot oscillate. Damped oscillation needs the inertia, and undamped oscillation needs the inertia and no damping; both live in the two-dimensional phase plane of :ref[The damped and driven harmonic oscillator]{to=ode.harmonic-oscillator}, not on a line.

The same content is packaged as a **potential**. Define $V$ by

$$
f(x) = -\frac{dV}{dx} , \qquad \text{so} \qquad V(x) = -\int^x f(s)\,ds
$$

up to an additive constant; every one-dimensional flow has one, because every continuous function has an antiderivative. Along any solution the chain rule gives

$$
\frac{d}{dt} V\bigl(x(t)\bigr) = V'(x)\,\dot x = -f(x)\cdot f(x) = -\bigl[f(x)\bigr]^2 \ \le\ 0 ,
$$

with equality exactly at the fixed points. So $V$ never increases along a trajectory: the system always runs downhill, and the fixed points are the critical points of $V$, with local minima the sinks and local maxima the sources. This is the statement that every flow on the line is a **gradient flow**, and it gives a second reason why nothing can cycle — a cycle would have to return $V$ to its starting value, which a strictly decreasing quantity forbids. It is also the point of contact with equilibrium thermodynamics and Landau theory, where $V$ is a free energy and the stable states of the system are its minima; the bifurcations of :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations} are then the changes in the shape of that free-energy landscape as a control parameter is turned. For the quadratic example above, $V(x) = \tfrac13 x^3 - 3x^2 + 8x$, with a local maximum at $x = 2$ (value $V = 20/3$) and a local minimum at $x = 4$ (value $V = 16/3$), exactly matching the source and the sink found there.

The defining relation $f = -dV/dx$ no longer has a single-valued solution once the phase space is a circle and $f$ has no zeros, which is how :ref[Flows on the circle]{to=dyn.flows-on-the-circle} escapes this unit's conclusions and manages to oscillate.
:::
