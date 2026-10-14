---
id: dyn.period-doubling
title: Period doubling and universality
kind: theorem
level: core
summary: States Feigenbaum's universality -- that every smooth one-parameter family of unimodal maps with a quadratic maximum reaches chaos through an infinite cascade of period doublings whose parameter spacings shrink by the same factor $\delta = 4.6692$ and whose cycles shrink by the same factor $\alpha = -2.5029$ -- explains it by renormalisation, carries out an approximate renormalisation in closed form to get $\delta \approx 1 + \sqrt{17}$, and treats intermittency, the other way a periodic window ends.
prereqs: [dyn.one-dimensional-maps, dyn.one-dimensional-bifurcations]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§10.2, pp. 353-356 (the numerical cascade for the logistic map, the table of bifurcation values $r_1 = 3$, $r_2 = 3.449$, ..., $r_\\infty = 3.569946$, the geometric convergence with factor $4.669$, the orbit diagram and the periodic windows); §10.4, pp. 361-366 (the period-3 window, the tangent bifurcation at $1+\\sqrt8 = 3.8284\\ldots$ due to Myrberg, intermittency and its channel mechanism, the intermittency route to chaos, and the period-doubling cascade inside each window); §10.6, pp. 369-379 (unimodal maps, the U-sequence of Metropolis, Stein and Stein, quantitative universality, the definitions of $\\delta$ and of $\\alpha$ through $d_n$, the experimental table of measured $\\delta$ values, and why one-dimensional maps describe highly dissipative flows); §10.7, pp. 379-387 (the superstable parameter values $R_n$, the renormalisation picture, the Feigenbaum functional equation $g(x) = \\alpha g(g(x/\\alpha))$ with $\\alpha = 1/g(1)$ and the power series $1 + c_1x^2 + c_2x^4 + \\cdots$, and the approximate renormalisation 'for pedestrians' modified from May and Oster (1980) and Helleman (1980), giving $\\mu^* = \\tfrac12(-3+\\sqrt{17})$, $\\delta \\approx 1 + \\sqrt{17}$ and $\\alpha \\approx -2.24$)"
    pages: "353-356, 361-366, 369-387"
    role: the cascade and its numbers; the statement of qualitative and quantitative universality and the values of $\delta$ and $\alpha$; the functional equation; the whole route of the approximate renormalisation; intermittency and the tangent bifurcation; the experimental tests
  - work: hirsch-smale-devaney-2013
    loc: "§15.2, pp. 334-337 (the Bifurcation Criterion and its implicit-function-theorem proof; the argument that a fixed point of a one-dimensional map can change type only where the derivative is $+1$ or $-1$; the period-doubling bifurcation of $x^2+c$ at $c = -3/4$, with the $2$-cycle attracting for $-5/4 < c < -3/4$); §15.3, pp. 337-339 (the logistic map's period-doubling at $\\lambda = 3$ and the absence of further cycles up to about $\\lambda = 3.4$)"
    pages: "334-339"
    role: the fact that $\pm1$ are the only possible multipliers at a bifurcation, with proof; the normal-form example $x^2 + c$ and its period-doubling value
---

:::definition[Cascades, the Feigenbaum constants, intermittency]{provenance=adapted src="strogatz-1994:§10.2, pp. 353-355, §10.4, pp. 363-364, §10.6, pp. 370, 373, and §10.7, p. 380; hirsch-smale-devaney-2013:§15.2, pp. 336-337"}
Let $f(x, r)$ be a smooth one-parameter family of maps of an interval into itself.

- A map is **unimodal** on $[0,1]$ if it is smooth, vanishes at both endpoints, and has a single interior maximum. The maximum is **quadratic** if $f''$ is non-zero there; write $x_m$ for its location. The logistic map $rx(1-x)$ and the sine map $r\sin\pi x$ are the standard examples.
- A cycle undergoes a **flip** (or **period-doubling**) **bifurcation** at $r = r_0$ if its multiplier passes through $-1$ there. By :ref[the multiplier criterion]{to=dyn.one-dimensional-maps}, this and passage through $+1$ are the only ways a cycle can change stability, so these are the only parameter values at which a bifurcation of cycles can occur.
- A **period-doubling cascade** is an infinite sequence of flip bifurcations in which a $2^{n}$-cycle loses stability and a $2^{n+1}$-cycle takes over. Write $r_n$ for the parameter at which the $2^n$-cycle is born, and $r_\infty = \lim_n r_n$ for the **accumulation point** of the cascade.
- A cycle is **superstable** if its multiplier is $0$. Because a superstable cycle of a unimodal map must contain the critical point $x_m$, the superstable parameter values are easy to find numerically; write $R_n$ for the value at which the $2^n$-cycle is superstable. Then $r_n < R_n < r_{n+1}$, so the $R_n$ and the $r_n$ accumulate at the same point.
- The **Feigenbaum constants** are

  $$
  \delta = \lim_{n\to\infty}\frac{r_n - r_{n-1}}{r_{n+1} - r_n}, \qquad
  \alpha = \lim_{n\to\infty}\frac{d_n}{d_{n+1}},
  $$

  where $d_n$ is the signed distance from $x_m$ to the nearest other point of the $2^n$-cycle, measured at $r = R_n$. The same limits are obtained with $R_n$ in place of $r_n$ in the first.
- **Intermittency** is long stretches of nearly periodic motion interrupted at unpredictable times by short chaotic bursts. The kind considered here, **type I**, occurs just outside a periodic window, where a stable and an unstable cycle have just annihilated in a tangent (saddle-node) bifurcation.
:::

:::statement[Feigenbaum universality]{provenance=adapted src="strogatz-1994:§10.6, pp. 370, 373-374, and §10.7, pp. 383-384"}
Consider families of unimodal maps undergoing a period-doubling route to chaos.

1. **Qualitative universality (the U-sequence).** Metropolis, Stein and Stein proved that for all families $x_{n+1} = r f(x_n)$ with $f$ unimodal and $f(0) = f(1) = 0$ -- the precise conditions are in their paper -- the *order* in which stable cycles appear as $r$ increases does not depend on $f$. Up to period $6$ that order is

   $$
   1,\ 2,\ 2^2,\ 6,\ 5,\ 3,\ 2\cdot3,\ 5,\ 6,\ 4,\ 6,\ 5,\ 6 .
   $$

   Only the shape of $f$ matters, not its algebraic form; the parameter values at which the cycles appear are *not* universal.
2. **Quantitative universality.** For every such family whose maximum is quadratic, the limits $\delta$ and $\alpha$ exist and take the same values,

   $$
   \delta = 4.669\ldots, \qquad \alpha = -2.5029\ldots,
   $$

   independent of the family. The negative sign of $\alpha$ records that the nearest cycle point lies alternately above and below $x_m$. A maximum of a different order -- quartic, say -- gives a different pair of constants.
3. **The functional equation.** The mechanism is renormalisation. With the origin of $x$ moved to $x_m$, the rescaled iterates converge,

   $$
   g_i(x) = \lim_{n\to\infty}\alpha^n f^{(2^n)}\!\Bigl(\frac{x}{\alpha^n},\ R_{n+i}\Bigr),
   $$

   to universal functions $g_i$ independent of $f$. At the accumulation point of the cascade no shift of parameter is needed, and the limit $g = g_\infty$ satisfies

   $$
   g(x) = \alpha\, g\bigl(g(x/\alpha)\bigr), \qquad g'(0) = 0, \quad g(0) = 1 ,
   $$

   from which $\alpha = 1/g(1)$. No closed form for $g$ is known; a power series $g(x) = 1 + c_1x^2 + c_2x^4 + \cdots$ substituted into the functional equation and truncated at seven terms gave Feigenbaum $c_1 = -1.5276$, $c_2 = 0.1048$ and $\alpha = -2.5029$. The corresponding account of $\delta$ requires the spectrum of the linearisation of the renormalisation operator on a space of functions, which is beyond what we develop here; neither Strogatz nor Hirsch, Smale and Devaney proves it, and neither do we.
:::

:::statement[An approximate renormalisation that can be done in closed form]{label="Lemma" provenance=adapted src="strogatz-1994:§10.7, pp. 384-387"}
Near a flip bifurcation every smooth family looks, after translating $x$ and $\mu$ and rescaling $x$, like

$$
f_\mu(x) = -(1+\mu)x + x^2 ,
$$

whose fixed point at $x = 0$ has multiplier $-(1+\mu)$ and so flips at $\mu = 0$. For this family:

1. For $\mu > 0$ there is a $2$-cycle $\{p, q\}$ with $p + q = \mu$ and $pq = -\mu$, namely $p, q = \tfrac12\bigl(\mu \pm \sqrt{\mu^2+4\mu}\bigr)$.
2. Writing $x = p + \eta$ and discarding terms of order $\eta^3$, the second iterate obeys

   $$
   \eta_{n+1} = \bigl(1 - 4\mu - \mu^2\bigr)\eta_n + C(\mu)\,\eta_n^2,
   \qquad
   C(\mu) = \mu^2 + 4\mu - 3\sqrt{\mu^2+4\mu} .
   $$

3. Rescaling by $\tilde x = C(\mu)\eta$ puts this back into the original form with the **renormalised parameter**

   $$
   \bar\mu = T(\mu) = \mu^2 + 4\mu - 2 .
   $$

4. Consequently the parameter $\mu_k$ at which a $2^k$-cycle is born satisfies $T(\mu_{k+1}) = \mu_k$ with $\mu_1 = 0$; the sequence increases to the fixed point

   $$
   \mu^* = \tfrac12\bigl(-3 + \sqrt{17}\bigr) = 0.5615528 ,
   $$

   which is the accumulation point of the cascade in this approximation, and the convergence is geometric with ratio

   $$
   T'(\mu^*) = 2\mu^* + 4 = 1 + \sqrt{17} = 5.1231 ,
   $$

   the approximation's value of $\delta$. The rescaling factor at the accumulation point,

   $$
   C(\mu^*) = \frac{1+\sqrt{17}}{2} - 3\sqrt{\frac{1+\sqrt{17}}{2}} = -2.2399 ,
   $$

   is the approximation's value of $\alpha$. Both are within about $10\%$ of the true constants.
:::

:::idea{provenance=original}
The orbit diagram of a unimodal map repeats itself: each branch of the figtree, magnified in the $x$ direction and stretched in the $r$ direction, looks like the whole tree. The reason is that the second iterate of the map, restricted to a small interval around the critical point and with the parameter shifted to the next superstable value, is again a unimodal map with a quadratic maximum -- an inverted and shrunken copy of the original. So one step of the cascade for $f$ is one step of the cascade for $f^2$, which is the same problem over again. The whole of the cascade therefore comes from iterating a single operation on maps: take the second iterate, rescale $x$ by a factor $\alpha$, and shift the parameter. The constants are the properties of that operation at its fixed point -- $\alpha$ is the rescaling the fixed point demands, and $\delta$ is the rate at which the parameter shift converges, so they cannot depend on the family one started with. The Lemma carries out exactly this programme with the smallest possible model of a map, a quadratic kept only to second order, where every step can be done by hand.
:::

:::proof{provenance=adapted src="strogatz-1994:§10.7, pp. 384-387"}
We prove the Lemma. Throughout, $S = \sqrt{\mu^2 + 4\mu}$ and $a = -(1+\mu)$, so that $f_\mu(x) = ax + x^2$. Assume $\mu > 0$, so $S$ is real and positive.

1. *The $2$-cycle.* A $2$-cycle $\{p,q\}$ satisfies $f(p) = q$ and $f(q) = p$. Subtracting the two equations,

   $$
   p - q = a(q - p) + q^2 - p^2 = (q-p)\bigl[a + (p+q)\bigr],
   $$

   and since $p \ne q$ we may divide by $p - q$ to get $-1 = a + (p+q)$, that is $p + q = -1 - a = \mu$. Adding the two equations instead,

   $$
   p + q = a(p+q) + p^2 + q^2 = a\mu + \mu^2 - 2pq ,
   $$

   so $\mu = -(1+\mu)\mu + \mu^2 - 2pq = -\mu - 2pq$, giving $pq = -\mu$. Hence $p$ and $q$ are the roots of $t^2 - \mu t - \mu = 0$, which are real and distinct for $\mu > 0$. Take $p$ to be the root with the $+$ sign.

2. *The second iterate near $p$.* Put $x = p + \eta$. Then

   $$
   f(p + \eta) = a(p+\eta) + (p+\eta)^2 = \underbrace{ap + p^2}_{=\,q} + (a + 2p)\eta + \eta^2 ,
   $$

   so $f(p+\eta) = q + u$ with $u = (a+2p)\eta + \eta^2$, and applying $f$ again,

   $$
   f^2(p+\eta) = aq + q^2 + (a+2q)u + u^2 = p + (a+2q)(a+2p)\,\eta + \bigl[(a+2q) + (a+2p)^2\bigr]\eta^2 + O(\eta^3),
   $$

   where the $\eta^2$ terms come from $(a+2q)\eta^2$ and from the leading part of $u^2$. Now $2p = \mu + S$ and $2q = \mu - S$, and $a = -1-\mu$, so

   $$
   a + 2p = -1 + S, \qquad a + 2q = -1 - S .
   $$

   Hence the coefficient of $\eta$ is $(-1-S)(-1+S) = 1 - S^2 = 1 - 4\mu - \mu^2$, and the coefficient of $\eta^2$ is

   $$
   C = (-1 - S) + (-1 + S)^2 = -1 - S + 1 - 2S + S^2 = S^2 - 3S = \mu^2 + 4\mu - 3\sqrt{\mu^2+4\mu},
   $$

   which is part 2. (That the linear coefficient is the multiplier of the $2$-cycle is the chain-rule product formula of :ref[One-dimensional maps]{to=dyn.one-dimensional-maps}; here it has been obtained directly.)

3. *Rescaling.* Multiply the recursion of part 2 by $C$ and set $\tilde\eta = C\eta$:

   $$
   \tilde\eta_{n+1} = \bigl(1 - 4\mu - \mu^2\bigr)\tilde\eta_n + \tilde\eta_n^2 .
   $$

   This has exactly the algebraic form $-(1+\bar\mu)\tilde\eta + \tilde\eta^2$ of the original map, provided we define $\bar\mu$ by $-(1+\bar\mu) = 1 - 4\mu - \mu^2$, that is $\bar\mu = \mu^2 + 4\mu - 2 = T(\mu)$.

4. *Iterating the renormalisation.* The renormalised map describes the dynamics of $f^2$ near $p$, so the renormalised family flips -- at $\bar\mu = 0$ -- precisely when the $2$-cycle of the original family doubles into a $4$-cycle. More generally, the renormalised family gives birth to a $2^k$-cycle exactly when the original gives birth to a $2^{k+1}$-cycle. Therefore

   $$
   T(\mu_{k+1}) = \mu_k , \qquad \mu_1 = 0 .
   $$

   Solving for the forward iteration, $T(\mu) = \mu_{k}$ means $(\mu+2)^2 = 6 + \mu_k$, and the relevant root is

   $$
   \mu_{k+1} = -2 + \sqrt{6 + \mu_k} .
   $$

   The map $\mu \mapsto -2 + \sqrt{6+\mu}$ is increasing, is a contraction on $[0, 1]$ (its derivative there is $\tfrac12(6+\mu)^{-1/2} \le \tfrac12\cdot6^{-1/2} < 1$), and maps $[0,1]$ into itself since it sends $0$ to $0.4495$ and $1$ to $0.6458$. So the sequence converges monotonically to the unique fixed point in $[0,1]$, which satisfies $\mu = \mu^2 + 4\mu - 2$, that is $\mu^2 + 3\mu - 2 = 0$, with positive root $\mu^* = \tfrac12(-3 + \sqrt{17}) = 0.5615528$.

   For the rate: $\mu_k - \mu^* = T(\mu_{k+1}) - T(\mu^*)$, so by the mean value theorem $\mu_k - \mu^* = T'(c_k)(\mu_{k+1} - \mu^*)$ with $c_k$ between $\mu_{k+1}$ and $\mu^*$, hence $c_k \to \mu^*$ and

   $$
   \frac{\mu_k - \mu^*}{\mu_{k+1} - \mu^*} = T'(c_k) \longrightarrow T'(\mu^*) = 2\mu^* + 4 = 1 + \sqrt{17} = 5.1231 .
   $$

   The constant $\delta$ was defined by the spacings rather than by the distances to $\mu^*$, but the two give the same number. Write $e_k = \mu_k - \mu^*$ and $\rho_k = e_{k-1}/e_k$, so $\rho_k \to T'(\mu^*)$ by the display above. Then

   $$
   \frac{\mu_k - \mu_{k-1}}{\mu_{k+1} - \mu_k}
   = \frac{e_k - e_{k-1}}{e_{k+1} - e_k}
   = \frac{\rho_{k+1} - \rho_k\rho_{k+1}}{1 - \rho_{k+1}}
   \longrightarrow \frac{T'(\mu^*) - T'(\mu^*)^2}{1 - T'(\mu^*)} = T'(\mu^*),
   $$

   on dividing numerator and denominator by $e_{k+1}$. So the spacings shrink by the same factor $1+\sqrt{17}$, which is the approximation's $\delta$. Finally, $C$ was the factor by which $\eta$ had to be rescaled at each renormalisation, which is the role played by $\alpha$; evaluating at the fixed point, with $\mu^{*2} + 4\mu^* = \mu^* + 2 = \tfrac12(1+\sqrt{17})$,

   $$
   C(\mu^*) = \frac{1+\sqrt{17}}{2} - 3\sqrt{\frac{1+\sqrt{17}}{2}} = 2.5615528 - 4.8014557 = -2.2399027 . \qquad\square
   $$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *A quadratic maximum* is what fixes the values of the constants. In the Lemma this enters at the very first line: the model map was truncated after $x^2$, and it is the $x^2$ term that supplied $C$ and hence $\alpha$. A map whose maximum is quartic renormalises to a different fixed function and has its own pair of constants. This is also the sense in which $g$ is universal: the argument $x/\alpha^n$ shrinks to zero, so only the behaviour of $f$ in a vanishing neighbourhood of the maximum survives, and all that survives of that is the order of the maximum.
- *Unimodality* is what makes the renormalised map a map of the same kind, with one critical point in the interval being magnified. A map with two humps can renormalise to something else, and the U-sequence does not apply to it.
- *Where the Lemma is only an approximation.* Two things were discarded: the $O(\eta^3)$ terms at each renormalisation, and the dependence of the family on $\mu$ beyond linear order. Both are genuinely present, and the price is the $10\%$ error in $\delta$ and $\alpha$. What survives exactly is the *structure*: that there is a renormalisation operation at all, that it has a fixed point, and that the constants are a derivative and a scale factor at that fixed point. The exact theory replaces the one-parameter map $T$ by an operator on a space of functions; its fixed point is $g$, and $\delta$ is the one eigenvalue of modulus greater than $1$ of its linearisation.
- *What the cascade does not require.* Nothing above needs the map to be the logistic map, or even to have a formula. It needs a family of maps of an interval with one quadratic maximum. That is why the same constants appear in flows: if a flow is dissipative enough that its return map is nearly one-dimensional and unimodal -- as it is for the Rossler system, and apparently for convection in mercury -- the theory applies to the flow.
- *The constants are limits.* The ratios approach $\delta$ and $\alpha$ only in the limit, and the early ratios are noticeably off, as the computation below shows. An experiment that resolves four doublings is measuring something still several percent from $\delta$, which is one reason measured values cluster near $4.4$ rather than $4.669$.
:::

:::remark[Intermittency: the other way a window ends]{provenance=adapted src="strogatz-1994:§10.4, pp. 361-365"}
A periodic window in the orbit diagram begins with a tangent bifurcation and ends with a cascade. For the logistic map's period-$3$ window, which begins at $r = 1 + \sqrt8 = 3.8284271\ldots$ -- a value due to Myrberg and, as Strogatz notes, surprisingly hard to derive -- the graph of $f^3$ becomes tangent to the diagonal at three points simultaneously, creating a stable and an unstable $3$-cycle there. Raising $r$ further, the stable $3$-cycle period-doubles through its own cascade, with the same $\delta$, and a miniature copy of the whole orbit diagram appears inside the window.

Lowering $r$ below $1+\sqrt8$ instead produces intermittency. The three tangency points become three narrow channels between the graph of $f^3$ and the diagonal. An orbit that enters a channel takes many iterations to squeeze through it, and while it does, $f^3(x_n) \approx x_n$, so the motion looks like the $3$-cycle that no longer exists. On leaving the channel the orbit wanders chaotically until it falls into a channel again, at an unpredictable time.

*How long the laminar phase lasts.* Near the tangency the third iterate is, to leading order, $f^3(x) \approx x + a(x - x_c)^2 + c\,\epsilon$ with $a, c > 0$ and $\epsilon = r_c - r$. Treating $n$ as continuous, $dx/dn \approx a(x-x_c)^2 + c\epsilon$, so the number of iterations to cross the channel is

$$
n \approx \int_{-\infty}^{\infty}\frac{ds}{as^2 + c\epsilon} = \frac{\pi}{\sqrt{ac\,\epsilon}} \propto \epsilon^{-1/2} .
$$

So the laminar stretches lengthen without bound as the window is approached, and the bursts become rarer; moving away from the window they become more frequent until the motion is fully chaotic. This progression is the intermittency route to chaos, and it has been observed in lasers, in fluids and in chemical reactions. The $\epsilon^{-1/2}$ law is checked numerically below.
:::

:::method[Measuring $\delta$]{provenance=adapted src="strogatz-1994:§10.7, pp. 380-381, and §10.6, pp. 374-376"}
In a simulation, do not chase the bifurcation values $r_n$: they are the parameters at which a multiplier passes through $-1$, which is hard to localise because nothing visible happens at the cycle itself. Use the superstable values $R_n$ instead, and exploit the fact that a superstable cycle contains the critical point $x_m$.

1. Locate $x_m$, the critical point of the family.
2. For each $n$, solve $f^{(2^n)}(x_m, r) = x_m$ for $r$. This is one scalar equation in one unknown and is solved by bisection or by a secant method.
3. Bracket the root: the next $R_n$ lies close to $R_{n-1} + (R_{n-1} - R_{n-2})/\delta$, so use that as the prediction and search a small interval around it, taking the root nearest the prediction -- the equation has many other roots, belonging to cycles of other periods.
4. Work in extended precision. Each level needs about $\log_{10}\delta \approx 0.67$ more decimal digits in $r$ than the last, and $2^n$ iterations of the map amplify rounding error, so double precision runs out near $n = 9$ or $10$.
5. Form the ratios $(R_n - R_{n-1})/(R_{n+1} - R_n)$ and extrapolate; the accumulation point follows from $R_\infty \approx R_n + (R_n - R_{n-1})/(\delta - 1)$.

In an experiment, step 1 is unavailable, so one measures the $r_n$ directly from time series and accepts a few percent of error. Strogatz tabulates the results: $4.3 \pm 0.8$ from convection in water (Giglio and others, 1981), $4.4 \pm 0.1$ from convection in mercury (Libchaber and others, 1982, over four doublings), $4.5 \pm 0.6$ and $4.3 \pm 0.1$ from diode circuits, $4.7 \pm 0.3$ from a transistor circuit, and $4.5 \pm 0.3$ from a simulated Josephson junction. Since each further doubling needs about a fivefold improvement in the resolution of the control parameter, and noise blurs high-period orbits, about five doublings is the practical limit.
:::

:::example[The logistic cascade, computed]{provenance=original}
We carried out the method above for $f(x,r) = rx(1-x)$, with $x_m = \tfrac12$, in $60$-digit arithmetic. Solving $f^{(2^n)}(\tfrac12, r) = \tfrac12$ gives the superstable parameters

$$
\begin{array}{llll}
R_0 = 2 & R_1 = 3.236067977499790 & R_2 = 3.498561699327702 & R_3 = 3.554640862768825 \\
R_4 = 3.566667379856269 & R_5 = 3.569243531637110 & R_6 = 3.569795293749945 & R_7 = 3.569913465422349 \\
R_8 = 3.569938774233305 & R_9 = 3.569944194608065 & &
\end{array}
$$

The first two are exact: $R_0 = 2$ because $f(\tfrac12) = r/4 = \tfrac12$, and $R_1 = 1 + \sqrt5 = 3.2360679774997897$, as computed in :ref[One-dimensional maps]{to=dyn.one-dimensional-maps}.

*The constant $\delta$.* The successive ratios $(R_n - R_{n-1})/(R_{n+1} - R_n)$ are

$$
4.70894,\quad 4.68077,\quad 4.66296,\quad 4.66840,\quad 4.66895,\quad 4.66916,\quad 4.66919,\quad 4.669199 ,
$$

for $n = 1, \dots, 8$. They settle on $4.66920$, against the accepted $\delta = 4.6692016$. Note that the first ratio is off by nearly $1\%$ and the third actually overshoots: the convergence is not monotone, which is worth knowing before reading much into an experiment that resolves four doublings.

*The accumulation point.* Extrapolating, $R_\infty \approx R_9 + (R_9 - R_8)/(\delta - 1) = 3.5699456719$, in agreement with the value $3.569946$ that Strogatz obtains from the $r_n$.

*The constant $\alpha$.* At each $R_n$ we took $d_n$ to be the displacement from $x_m = \tfrac12$ to the point of the $2^n$-cycle half a period away, having checked for every $n \le 8$ that this is indeed the nearest cycle point to $x_m$. The values alternate in sign:

$$
d_1 = 0.3090170,\quad d_2 = -0.1164018,\quad d_3 = 0.0459752,\quad d_4 = -0.0183262,\quad d_5 = 0.0073184,
$$

and so on down to $d_8 = -4.666897\times10^{-4}$. The ratios $d_n/d_{n+1}$ are

$$
-2.65474,\quad -2.53184,\quad -2.50872,\quad -2.50411,\quad -2.50316,\quad -2.50296,\quad -2.50292 ,
$$

converging to $-2.50292$ against the accepted $\alpha = -2.5029079$. The sign alternation predicted in the statement is visible in the $d_n$ themselves.

*Comparison with the Lemma.* The approximate renormalisation gave $\delta \approx 1 + \sqrt{17} = 5.1231$ (high by $9.7\%$), $\alpha \approx -2.2399$ (low in magnitude by $10.5\%$), and an accumulation point at $\mu^* = 0.5616$, which corresponds to $r = 3 + \mu^* = 3.5616$ for the logistic map since $\mu = 0$ was placed at the first flip, $r = 3$. The true value is $3.5699$: an error of $0.2\%$, far better than the error in $\delta$, which is what one expects from a calculation that approximates the renormalisation map $T$ well near its fixed point but its derivative there less well.
:::

:::example[Intermittency near the period-3 window, measured]{provenance=original}
Set $r = r_c - \epsilon$ with $r_c = 1 + \sqrt8 = 3.8284271$, iterate $f^3$ for $4\times10^6$ steps after discarding a transient of $10^4$, and call a step **laminar** when $|f^3(x) - x| < 10^{-2}$. The mean length $L$ of a run of consecutive laminar steps, in iterations of $f^3$, came out as

$$
\begin{array}{lllll}
\epsilon = 10^{-3}: & L = 4.70 & \quad & L\sqrt\epsilon = 0.1486 \\
\epsilon = 3\times10^{-4}: & L = 8.87 & & L\sqrt\epsilon = 0.1537 \\
\epsilon = 10^{-4}: & L = 15.43 & & L\sqrt\epsilon = 0.1543 \\
\epsilon = 3\times10^{-5}: & L = 28.25 & & L\sqrt\epsilon = 0.1547 \\
\epsilon = 10^{-5}: & L = 48.57 & & L\sqrt\epsilon = 0.1536
\end{array}
$$

Across the whole table a hundredfold decrease in $\epsilon$ multiplies $L$ by $48.57/4.70 = 10.33$, against the predicted $10$; over the last four rows, where $\epsilon$ falls by a factor $30$, it multiplies $L$ by $48.57/8.87 = 5.476$, against the predicted $\sqrt{30} = 5.477$. The product $L\sqrt\epsilon$ is constant to within $1\%$ over the last four rows, which is the $\epsilon^{-1/2}$ law. (The value of the constant $0.154$ is not universal: it depends on the threshold $10^{-2}$ chosen to call a step laminar, and on $a$ and $c$, which are properties of this particular map at this particular tangency. The exponent is what the argument predicts.)
:::

:::application{provenance=original}
Feigenbaum's constants are the reason a one-dimensional toy map is taken seriously as a model of a laboratory system. A convecting layer of mercury has an enormous number of degrees of freedom and nothing in its equations resembles $rx(1-x)$; yet if the dissipation is strong enough that the attractor is barely more than two-dimensional, the return map of the flow is nearly one-dimensional and unimodal, and the ratio of successive bifurcation intervals must then be $4.669$. That is a parameter-free prediction about a real fluid, and it is why Libchaber's group went to the trouble of stabilising the roll structure with a magnetic field: increasing the damping is exactly what pushes a system into the regime where the theory applies.

The practical uses follow from that. Observing a few period doublings with roughly the right ratio in a measured signal -- from a laser, a chemical reactor, a cardiac preparation, a nonlinear circuit -- is evidence that the irregularity to come is low-dimensional chaos rather than noise or high-dimensional turbulence, and therefore that a model with two or three active variables may be worth building. Conversely, when the ratios come out wrong, the one-dimensional picture is the wrong picture. Where the behaviour is unwanted, the cascade also says where to intervene: since the route is a sequence of flips, keeping a multiplier away from $-1$ -- by adding damping, or by small feedback corrections applied once per cycle -- suppresses the whole cascade at its first step.

Intermittency plays the same diagnostic role for the other common route. Nearly periodic behaviour interrupted by irregular bursts, with the burst rate growing as a control parameter is moved, points to a saddle-node bifurcation of cycles rather than to a cascade; and the $\epsilon^{-1/2}$ law for the laminar lengths gives a quantitative test and, if it holds, a way of locating the critical parameter from data taken away from it.
:::
