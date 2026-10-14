---
id: dyn.one-dimensional-maps
title: One-dimensional maps
kind: method
level: core
summary: Gives the working apparatus for a discrete-time system $x_{n+1} = f(x_n)$ on an interval -- orbits, fixed points, $p$-cycles, the multiplier and its chain-rule product formula, and the cobweb construction -- proves the sink/source criterion from the mean value theorem, and applies the recipe to the logistic map, where the fixed point loses stability at $r = 3$ and a $2$-cycle with multiplier $4 + 2r - r^2$ takes over.
prereqs: [dyn.flows-on-the-line, dyn.one-dimensional-bifurcations, found.limits-of-sequences]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "Ch. 15, §15.1 (orbits, seeds, fixed and periodic points, minimal period, graphical iteration, the sink/source proposition and its mean-value-theorem proof, and the three marginal examples $x + x^3$, $x - x^3$, $x + x^2$), pp. 329-334; §15.3 (the discrete logistic model, the fixed point $(\\lambda-1)/\\lambda$ and its stability range $1 < \\lambda \\le 3$), pp. 337-339"
    pages: "329-339"
    role: definitions of orbit, periodic point and minimal period; statement and proof route of the stability criterion; the marginal-case counterexamples; the logistic map as a population model
  - work: strogatz-1994
    loc: "§10.1 (linearisation of a map about a fixed point, the multiplier $\\lambda = f'(x^*)$, superstability, the cobweb construction), pp. 349-352; §10.2 (the logistic map $rx(1-x)$ on $[0,1]$, numerical period-doubling), pp. 353-356; §10.3, Examples 10.3.1-10.3.3 (fixed points of the logistic map, the transcritical bifurcation at $r=1$, the flip bifurcation at $r=3$, the $2$-cycle and its multiplier $4 + 2r - r^2$), pp. 357-361; §10.5, Example 10.5.1 (the multiplier of a $p$-cycle as a product of derivatives), p. 367"
    pages: "349-367"
    role: the multiplier and superstability; the cobweb recipe; the logistic map on $[0,1]$ and the algebra of its fixed points and $2$-cycle; the names flip bifurcation and transcritical bifurcation for maps
---

:::definition[Maps, orbits, cycles and the multiplier]{provenance=adapted src="hirsch-smale-devaney-2013:§15.1, pp. 329-331, 333; strogatz-1994:§10.1, pp. 349-350, 367"}
Let $I \subseteq \mathbb{R}$ be an interval and let $f : I \to I$ be continuously differentiable. The **map** is the rule

$$
x_{n+1} = f(x_n), \qquad n = 0, 1, 2, \dots,
$$

which replaces the continuous time of a differential equation by integer time. Much of the vocabulary carries over from :ref[flows on the line]{to=dyn.flows-on-the-line}, but the behaviour does not: a map on an interval can oscillate and can be chaotic, which a one-dimensional flow cannot. Because $f$ sends $I$ into itself, the recursion never leaves $I$; this invariance is part of the data, not an afterthought.

- Write $f^n$ for the $n$-fold composite $f \circ \dots \circ f$ (never for a power). The **orbit** of a starting value $x_0 \in I$, also called its **seed**, is the sequence $x_0, f(x_0), f^2(x_0), \dots$.
- $x^*$ is a **fixed point** if $f(x^*) = x^*$; its orbit is the constant sequence.
- $x_0$ is **periodic of period $p$** ($p \in \mathbb{N}$) if $f^p(x_0) = x_0$. The least such $p$ is the **minimal period**, and the set $\{x_0, f(x_0), \dots, f^{p-1}(x_0)\}$ of a point of minimal period $p$ is a **$p$-cycle**. A fixed point is a $1$-cycle.
- The **multiplier** of a $p$-cycle through $x_0$ is $\lambda = (f^p)'(x_0)$. For a fixed point this is $\lambda = f'(x^*)$.
- A fixed point $x^*$ is **attracting** (a **sink**) if it has a neighbourhood $U$ such that every orbit started in $U$ stays in $U$ and converges to $x^*$; it is **repelling** (a **source**) if, for some such $U$, every orbit started in $U$ other than $x^*$ itself eventually leaves $U$; and **neutral** if it is neither. A $p$-cycle is called a sink, a source or neutral according to which of these its points are as fixed points of $f^p$, a classification that makes sense because, as the next statement shows, all $p$ points have the same multiplier.
- A cycle with $\lambda = 0$ is called **superstable**.

The **cobweb** of a seed $x_0$ is the following drawing in the $(x, y)$ plane. Draw $y = f(x)$ and the diagonal $y = x$. From the point $(x_0, x_0)$ move vertically to $(x_0, x_1)$ on the graph, then horizontally to $(x_1, x_1)$ on the diagonal; repeat. The abscissae of the points reached on the diagonal are exactly $x_0, x_1, x_2, \dots$, so the staircase or spiral traced out is a picture of the orbit.
:::

:::statement[Stability of a cycle from its multiplier]{provenance=adapted src="hirsch-smale-devaney-2013:§15.1, Proposition, p. 332; strogatz-1994:§10.1, p. 350; strogatz-1994:§10.5, Example 10.5.1, p. 367"}
Let $f \in C^1(I)$ and let $x_0, x_1 = f(x_0), \dots, x_{p-1}$ be a $p$-cycle of $f$ in the interior of $I$. Then:

1. **(Chain-rule product.)** The multiplier is the product of the derivatives of $f$ around the cycle,

   $$
   \lambda = (f^p)'(x_0) = \prod_{k=0}^{p-1} f'(x_k),
   $$

   and this value is unchanged if $x_0$ is replaced by any other point $x_j$ of the cycle. So "the multiplier of the cycle" is well defined.
2. **(Sink.)** If $|\lambda| < 1$, the cycle is attracting. More precisely, for every $K$ with $|\lambda| < K < 1$ there is a $\delta > 0$ such that $|x - x_0| \le \delta$ implies $|f^{np}(x) - x_0| \le K^n |x - x_0|$ for all $n \ge 0$.
3. **(Source.)** If $|\lambda| > 1$, the cycle is repelling.
4. **(No conclusion at $|\lambda| = 1$.)** If $|\lambda| = 1$, the cycle may be attracting, repelling, or neither, and the derivative alone does not decide which.

If $\lambda > 0$ a nearby orbit approaches or leaves the fixed point from one side; if $\lambda < 0$ it alternates from side to side, which is what makes a cobweb spiral rather than climb.
:::

:::idea{provenance=original}
A $p$-cycle of $f$ is a fixed point of $f^p$, so the whole question reduces to fixed points, and for a fixed point the mean value theorem does everything: if $|f'| \le K < 1$ on a small interval around $x^*$, then $f$ moves every point of that interval at least a factor $K$ closer to $x^*$, so the interval is mapped into itself and the distance to $x^*$ falls geometrically. The product formula is the chain rule applied to a composite whose intermediate points are the points of the cycle; it is independent of the starting point because a cyclic shift does not change a product.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§15.1, proof of the Proposition, pp. 332-333"}
1. *The product formula.* Differentiating $f^p = f \circ f^{p-1}$ repeatedly by the chain rule and evaluating at $x_0$ gives

   $$
   (f^p)'(x_0) = f'\bigl(f^{p-1}(x_0)\bigr)\,f'\bigl(f^{p-2}(x_0)\bigr)\cdots f'(x_0) = \prod_{k=0}^{p-1} f'(x_k),
   $$

   because $f^k(x_0) = x_k$. Starting the cycle at $x_j$ instead permutes the factors cyclically, and a product of real numbers does not notice the order, so the value is the same.

2. *$|\lambda| < 1$ gives a sink.* Put $g = f^p$, so $g(x_0) = x_0$ and $g'(x_0) = \lambda$. Fix $K$ with $|\lambda| < K < 1$. Since $g$ is $C^1$ (a composite of $C^1$ maps) its derivative is continuous, so there is a $\delta > 0$ with $J = [x_0 - \delta, x_0 + \delta] \subset I$ and $|g'| \le K$ on $J$.

   Let $x \in J$. By the mean value theorem applied to $g$ on the interval between $x$ and $x_0$ there is a point $c$ strictly between them with

   $$
   g(x) - x_0 = g(x) - g(x_0) = g'(c)\,(x - x_0),
   $$

   and $c \in J$, so $|g(x) - x_0| \le K|x - x_0| \le K\delta < \delta$. Hence $g(J) \subseteq J$ and the estimate may be applied again. Induction gives $|g^n(x) - x_0| \le K^n|x - x_0|$, and $K^n \to 0$ because $0 < K < 1$. So $g^n(x) \to x_0$, which says that the subsequence $x, f^p(x), f^{2p}(x), \dots$ converges to $x_0$.

   The intermediate iterates are handled by continuity: $f^{np+j}(x) = f^j(g^n(x)) \to f^j(x_0) = x_j$ for each fixed $j \in \{0, \dots, p-1\}$, since $f^j$ is continuous. So the whole orbit of $x$ converges to the cycle.

3. *$|\lambda| > 1$ gives a source.* Now choose $K$ with $1 < K < |\lambda|$ and, by continuity of $g'$ again, a $\delta > 0$ with $|g'| \ge K$ on $J = [x_0 - \delta, x_0 + \delta]$. The same mean value theorem step, with the inequality reversed, gives $|g(x) - x_0| \ge K|x - x_0|$ for $x \in J$. As long as the iterates stay in $J$ we get $|g^n(x) - x_0| \ge K^n|x - x_0|$, and the right-hand side exceeds $\delta$ once $K^n > \delta/|x - x_0|$, which happens for some finite $n$ because $K > 1$ and $x \ne x_0$. So every orbit except the cycle leaves $J$.

4. *$|\lambda| = 1$ decides nothing.* It is enough to exhibit three maps with a fixed point at $0$ of multiplier $1$ and three different behaviours; this is the list in Hirsch, Smale and Devaney.

   - $f(x) = x - x^3$. For $0 < x < 1$ we have $0 < f(x) < x$, so the orbit decreases and is bounded below by $0$; its limit $L$ satisfies $L = L - L^3$, hence $L = 0$. By oddness the same holds for $-1 < x < 0$. So $0$ is a sink.
   - $f(x) = x + x^3$. For $x > 0$ the orbit increases, and it cannot converge to a finite limit $L$, since $L = L + L^3$ forces $L = 0$, which is below the starting point. So orbits leave every neighbourhood: $0$ is a source.
   - $f(x) = x + x^2$. For $x > 0$ the orbit increases and, by the same argument, escapes; for $-1 < x < 0$ we have $x < f(x) < 0$, so the orbit increases towards a limit $L \le 0$ with $L = L + L^2$, hence $L = 0$. The fixed point attracts from the left and repels from the right, so it is neither a sink nor a source. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Continuous differentiability* is used only through the continuity of $g' = (f^p)'$, which is what lets a bound on $|g'|$ at the single point $x_0$ be spread over a whole interval $J$. For a merely differentiable $f$ the argument has to be replaced by a direct estimate from the definition of the derivative; the conclusions still hold, but the proof above does not apply verbatim.
- *The cycle lies in the interior of $I$* so that a two-sided interval $J$ around $x_0$ is available. At an endpoint of $I$ one gets only the one-sided statement.
- *Strict inequality $|\lambda| \ne 1$* is what part 4 shows cannot be dropped: all three maps there have $f'(0) = 1$, and all three behave differently. The reason is that at $|\lambda| = 1$ the linear part neither contracts nor expands, so the sign and size of the first non-vanishing nonlinear term decide the outcome. This is exactly why bifurcations of maps occur at $\lambda = +1$ and $\lambda = -1$ and nowhere else.
- *$f$ maps $I$ into $I$.* Without this the iteration can simply leave the region where $f$ is defined, and "the orbit" stops existing. For the logistic map this is why $r$ is restricted to $0 \le r \le 4$ below.
:::

:::method[Analysing a one-dimensional map]{provenance=adapted src="strogatz-1994:§10.1, pp. 349-352, and §10.3, pp. 357-361; hirsch-smale-devaney-2013:§15.1, pp. 331-333"}
Given $x_{n+1} = f(x_n)$ with a parameter:

1. **Fix an invariant interval.** Find an interval $I$ with $f(I) \subseteq I$, and restrict the parameter so that this holds. Everything below is relative to $I$.
2. **Fixed points.** Solve $f(x) = x$. Graphically these are the crossings of $y = f(x)$ with the diagonal.
3. **Classify them.** Compute $\lambda = f'(x^*)$ and apply the statement above: sink for $|\lambda| < 1$, source for $|\lambda| > 1$, superstable for $\lambda = 0$, and inconclusive for $|\lambda| = 1$, where you must look at the nonlinear terms or draw a cobweb.
4. **Draw a cobweb** for one or two seeds. It shows at a glance what the linearisation cannot: which fixed point an orbit is captured by, whether the approach is monotone ($\lambda > 0$) or alternating ($\lambda < 0$), and whether orbits escape.
5. **Cycles of period $p$.** Solve $f^p(x) = x$. Every fixed point of $f$ solves this too, so divide those roots out first; the remaining roots come in groups of $p$, one group per $p$-cycle.
6. **Classify the cycle** by $\lambda = \prod_{k} f'(x_k)$, using the product formula rather than differentiating $f^p$ directly.
7. **Track the bifurcations.** Move the parameter and watch $\lambda$ at each cycle. A cycle can change stability only as $\lambda$ passes through $+1$ or $-1$. Passage through $+1$ is where cycles are created or destroyed in pairs or exchanged (saddle-node, transcritical, pitchfork, as for :ref[flows on the line]{to=dyn.one-dimensional-bifurcations}); passage through $-1$ is a **flip bifurcation**, at which the cycle keeps existing but its period doubles.
:::

:::example[Fixed points and the $2$-cycle of the logistic map]{provenance=adapted src="strogatz-1994:§10.2, pp. 353-355; strogatz-1994:§10.3, Examples 10.3.1-10.3.3, pp. 357-361"}
Take the logistic map

$$
f_r(x) = r\,x\,(1 - x),
$$

the standard test case for everything above, and run the recipe on it with the parameter kept general.

*Step 1: an invariant interval.* The graph is a downward parabola vanishing at $x = 0$ and $x = 1$, with apex at $x = \tfrac12$ of height $r/4$. Hence $f_r([0,1]) = [0, r/4]$, which is contained in $[0,1]$ precisely when $0 \le r \le 4$. Take $I = [0,1]$ and $r$ in that range.

*Step 2: fixed points.* $rx(1-x) = x$ holds at $x = 0$ and at $x^* = 1 - 1/r$; the second belongs to $I$ only once $r \ge 1$.

*Step 3: their multipliers.* Since $f_r'(x) = r(1 - 2x)$,

$$
f_r'(0) = r, \qquad f_r'(x^*) = r\Bigl(1 - 2 + \tfrac2r\Bigr) = 2 - r .
$$

So the origin is a sink for $r < 1$ and a source for $r > 1$, while $x^*$ is a sink exactly when $|2 - r| < 1$, that is on $1 < r < 3$. The two fixed points swap stability where they collide at $r = 1$ (a transcritical bifurcation), and at $r = 3$ the multiplier of $x^*$ arrives at $-1$, which by step 7 is a flip.

*Step 5: the $2$-cycle, without solving a quartic.* The equation $f_r^2(x) = x$ is a quartic whose roots include the two fixed points, and one route is to divide those out. It is quicker to work from the defining relations. Let $p \ne q$ be the two points of a $2$-cycle, so $q = f_r(p)$ and $p = f_r(q)$. Subtracting the relations,

$$
p - q = f_r(q) - f_r(p) = r(q - p) - r(q^2 - p^2) = r(q-p)\bigl[1 - (p+q)\bigr],
$$

and dividing by $q - p \ne 0$ leaves $-1 = r[1 - (p+q)]$, so the sum is pinned down:

$$
s := p + q = \frac{r+1}{r} .
$$

Adding the relations instead, and using $p^2 + q^2 = s^2 - 2pq$,

$$
s = r s - r\bigl(s^2 - 2pq\bigr), \qquad\text{so}\qquad 2r\,pq = s\,(1 - r + rs) = 2s ,
$$

because $rs = r+1$ makes the bracket equal to $2$. Hence $pq = s/r = (r+1)/r^2$. Knowing the sum and the product, $p$ and $q$ are the roots of $t^2 - st + pq = 0$, that is of

$$
r^2 t^2 - r(r+1)\,t + (r+1) = 0,
\qquad
p, q = \frac{r + 1 \pm \sqrt{(r-3)(r+1)}}{2r} ,
$$

whose discriminant is $s^2 - 4pq = (r+1)(r-3)/r^2$. For $r > 0$ this is positive exactly when $r > 3$: the $2$-cycle exists only beyond $r = 3$, born at the flip bifurcation, at the very parameter where the fixed point lost its stability.

*Step 6: the multiplier of the cycle.* The product formula needs only the two symmetric functions, so $p$ and $q$ never have to be evaluated:

$$
\lambda = f_r'(p)\,f_r'(q) = r^2 (1 - 2p)(1 - 2q) = r^2\bigl[1 - 2s + 4pq\bigr]
= r^2 - 2r(r+1) + 4(r+1) = 4 + 2r - r^2 .
$$

At $r = 3$ this gives $\lambda = 1$, as it must, since the cycle is just emerging from the fixed point there; $\lambda$ then decreases, and reaches $-1$ when $r^2 - 2r - 5 = 0$, that is at

$$
r = 1 + \sqrt6 = 3.449489\ldots
$$

So the $2$-cycle is a sink exactly for $3 < r < 1 + \sqrt6$, and at the right-hand end it flips in turn and a $4$-cycle appears. That is the first step of the cascade treated in :ref[Period doubling and universality]{to=dyn.period-doubling}.
:::

:::example[The logistic map at $r = 3.2$, in numbers]{provenance=original}
Fix $r = 3.2$ in the family above and put every step to the test.

*Both fixed points repel.* $x^* = 1 - 1/3.2 = 0.6875$ with multiplier $\lambda = 2 - 3.2 = -1.2$, and the origin has multiplier $3.2$; both exceed $1$ in absolute value, so no orbit other than the two constant ones can settle at a fixed point.

*The $2$-cycle.* The discriminant is $(r-3)(r+1) = (0.2)(4.2) = 0.84$, so

$$
p = \frac{4.2 + \sqrt{0.84}}{6.4} = 0.799455490\ldots, \qquad
q = \frac{4.2 - \sqrt{0.84}}{6.4} = 0.513044510\ldots,
$$

and its multiplier is $\lambda = 4 + 6.4 - 10.24 = 0.16$, comfortably inside $(-1,1)$. The cycle is therefore a sink, and because $\lambda > 0$ the iterates of $f^2$ approach each cycle point from one side rather than alternating about it.

*Check by iterating.* Take the seed $x_0 = 0.2$ and iterate $x_{n+1} = 3.2\,x_n(1 - x_n)$:

$$
\begin{aligned}
x_1 &= 0.512000000, & x_2 &= 0.799539200, & x_3 &= 0.512884057,\\
x_4 &= 0.799468803, & x_6 &= 0.799457619, & x_8 &= 0.799455831,\\
x_{12} &= 0.799455499, & x_{16} &= 0.799455491, & x_{20} &= 0.799455490 .
\end{aligned}
$$

The even iterates run to $p = 0.799455490467$ and the odd ones to $q = 0.513044509533$, and the error should shrink by the factor $\lambda = 0.16$ every two steps. It does: $x_4 - p = 1.3313 \times 10^{-5}$ and $x_6 - p = 2.1280 \times 10^{-6}$, a ratio of $0.15985$ against the predicted $0.16$. (All the numbers in this block were computed at $30$-digit precision and then rounded.)

*A superstable cycle nearby.* The $2$-cycle is superstable where its multiplier vanishes, $4 + 2r - r^2 = 0$, that is at

$$
r = 1 + \sqrt5 = 3.236067977\ldots
$$

By the product formula $\lambda = r^2(1-2p)(1-2q)$ can vanish only if one factor does, so one point of the cycle must be $x = \tfrac12$, the apex of the parabola. And indeed at this $r$,

$$
f\bigl(\tfrac12\bigr) = \frac{r}{4} = \frac{1 + \sqrt5}{4} = 0.809016994\ldots,
\qquad
f^2\bigl(\tfrac12\bigr) = r \cdot \frac r4 \cdot \Bigl(1 - \frac r4\Bigr) = \frac{r^2(4-r)}{16} = \frac12 ,
$$

exactly, because $r^2 = 2r + 4$ turns $r^2(4-r)$ into $(2r+4)(4-r) = 16 + 4r - 2r^2 = 16 + 4r - 2(2r+4) = 8$. This is what makes superstable parameters easy to locate numerically: a superstable cycle of a map with a single critical point always contains that critical point, so one solves $f_r^p(c) = c$ for $r$ with $c$ the critical point, instead of hunting for the cycle first.
:::

:::application{provenance=original}
Maps of an interval reach physics from two directions.

*As reductions of flows.* A continuous-time system is turned into a map by recording a trajectory only at selected moments: the crossings of a surface in phase space (:ref[Poincare maps]{to=dyn.poincare-maps}), or the successive maxima of one coordinate, as Lorenz did for :ref[his equations]{to=dyn.lorenz-equations}. A periodic orbit of the flow becomes a fixed point or a cycle of the map, and its multiplier is exactly what decides the orbit's stability, so the apparatus above is the standard tool for the stability of periodic solutions. Because the map inherits the dimension of the surface minus nothing, the reduction is only one-dimensional when the attractor of the flow is nearly two-dimensional, as it is for strongly dissipative systems.

*As models in their own right.* Discrete time is the natural setting wherever the state is updated once per cycle rather than continuously: non-overlapping generations in population biology, where $f_r(x) = rx(1-x)$ was popularised as the simplest model with a carrying capacity; sampled-data and switching circuits; impact and kick maps in mechanics, where a particle is struck once per revolution; and the period-to-period return of a driven oscillator. The same map also appears in numerical analysis: Newton's iteration for $g(x) = 0$ is the map $f(x) = x - g(x)/g'(x)$, and a simple root is a superstable fixed point of it, $f'(x) = g(x)g''(x)/g'(x)^2$ vanishing where $g$ does, which is the reason for the method's rapid convergence.
:::
