---
id: dyn.lyapunov-exponents
title: Lyapunov exponents and sensitive dependence
kind: definition
level: core
summary: Defines the exponential rates at which an infinitesimal ball of initial conditions is stretched and squeezed along a trajectory, for both flows and maps, proves that the exponents sum to the time-averaged divergence and that a bounded non-equilibrium trajectory of a flow always carries a zero exponent, and turns the largest exponent into the predictability horizon $t \approx \lambda^{-1}\ln(a/\|\delta_0\|)$ -- checked against a direct simulation of the Lorenz system.
prereqs: [dyn.lorenz-equations, dyn.one-dimensional-maps, dyn.linearization, linalg.svd, ode.continuous-dependence]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§9.3, Exponential Divergence of Nearby Trajectories, pp. 320-322: the separation vector $\\delta(t)$, the observed law $\\|\\delta(t)\\| \\sim \\|\\delta_0\\|e^{\\lambda t}$ with $\\lambda \\approx 0.9$ for the Lorenz attractor, the three qualifications (wiggles, saturation, and the fact that there are $n$ exponents, defined through the principal axes of an infinitesimal ellipsoid, of which $\\lambda$ is the largest and which must be averaged over the trajectory); pp. 322-323: the predictability horizon $t_{\\text{horizon}} \\sim \\lambda^{-1}\\ln(a/\\|\\delta_0\\|)$ and Example 9.3.1 on the futility of improving $\\|\\delta_0\\|$; pp. 323-325: the working definition of chaos as aperiodic long-term behaviour in a deterministic system with sensitive dependence, Example 9.3.2 ($\\dot x = x$ is not chaotic), and the definition of a strange attractor; §10.5, pp. 366-369: the Lyapunov exponent of a one-dimensional map as $\\lim n^{-1}\\sum \\ln|f'(x_i)|$, Example 10.5.1 (a stable $p$-cycle has $\\lambda < 0$, a superstable one $\\lambda = -\\infty$), Example 10.5.2 (the tent map has $\\lambda = \\ln r$), and Example 10.5.3 (the numerical scheme and the graph of $\\lambda$ against $r$ for the logistic map)"
    pages: "320-325, 366-369"
    role: the definition of the exponents for flows and for maps; the largest exponent and its qualifications; the predictability horizon; the working definition of chaos; the value $\lambda \approx 0.9$ for the Lorenz attractor; the tent map and stable-cycle results; the numerical recipe
  - work: hirsch-smale-devaney-2013
    loc: "§14.1, pp. 307-308 (two Lorenz solutions started at $(0,2,0)$ and $(0,2.01,0)$ stay together and then separate, which is named sensitive dependence); §15.4, pp. 340-344 (sensitive dependence defined by a sensitivity constant $\\beta$ with no reference to a rate, the three-part definition of a chaotic map, the tent map, and the semi-conjugacy $h(x) = \\tfrac12(1 - \\cos 2\\pi x)$ between the tent map and $4x(1-x)$); §14.5, p. 326 (the remark that some definitions of chaos use positive Liapunov exponents and others do not)"
    pages: "307-308, 326, 340-344"
    role: the topological definition of sensitive dependence, used here as the contrast to the metric one; the semi-conjugacy that explains the value $\ln 2$ for the logistic map at $r = 4$; the observation that definitions of chaos differ on whether a positive exponent is required
---

:::definition[Separation, Lyapunov exponents, sensitive dependence]{provenance=adapted src="strogatz-1994:§9.3, pp. 321-322, 324-325, and §10.5, pp. 366-367; hirsch-smale-devaney-2013:§15.4, p. 340"}
**For a flow.** Let $\dot X = F(X)$ with $F \in C^1$ on $\mathbb{R}^n$, let $X(t)$ be a solution, and let $\delta(t)$ be the separation of an infinitesimally close solution. Solutions depend differentiably on their initial data (:ref[continuous dependence]{to=ode.continuous-dependence}), and to first order $\delta$ obeys the **variational equation**

$$
\dot\delta = DF\bigl(X(t)\bigr)\,\delta ,
$$

whose fundamental matrix $\Phi(t)$ (the solution with $\Phi(0) = I$) carries an initial separation $\delta_0$ to $\Phi(t)\delta_0$. The image of the unit sphere under $\Phi(t)$ is an ellipsoid; by :ref[the singular value decomposition]{to=linalg.svd} its principal semi-axes are the singular values $s_1(t) \ge s_2(t) \ge \dots \ge s_n(t) > 0$ of $\Phi(t)$. The **Lyapunov exponents** of the trajectory are

$$
\lambda_k = \lim_{t\to\infty} \frac1t \ln s_k(t), \qquad k = 1, \dots, n,
$$

whenever the limits exist. They are listed in decreasing order, and $\lambda_1$ is **the largest Lyapunov exponent**, usually written simply $\lambda$. Since $\|\Phi(t)\delta_0\| \le s_1(t)\|\delta_0\|$ for every $\delta_0$, with equality for the best-aligned one, $\lambda_1$ is the fastest exponential rate at which any separation can grow; it is also the rate at which a separation chosen without regard to the geometry is observed to grow, and one writes $\|\delta(t)\| \sim \|\delta_0\|e^{\lambda_1 t}$.

**For a map.** For $x_{n+1} = f(x_n)$ with $f \in C^1$ on an interval, $(f^n)'(x_0) = \prod_{i<n} f'(x_i)$ by the chain rule (see :ref[One-dimensional maps]{to=dyn.one-dimensional-maps}), so there is a single exponent

$$
\lambda(x_0) = \lim_{n\to\infty} \frac1n \ln\bigl|(f^n)'(x_0)\bigr| = \lim_{n\to\infty}\frac1n\sum_{i=0}^{n-1}\ln\bigl|f'(x_i)\bigr| ,
$$

when the limit exists.

**Sensitive dependence and chaos.** A system shows **sensitive dependence on initial conditions** in the metric sense used here if $\lambda_1 > 0$: nearby trajectories separate exponentially fast on average. Following Strogatz, **chaos** is aperiodic long-term behaviour in a deterministic system that shows sensitive dependence, where "aperiodic" means that trajectories which approach no fixed point, periodic orbit or quasiperiodic orbit occur for a non-negligible set of initial conditions, and "deterministic" means that the irregularity comes from the nonlinearity and not from noise in the equations. A **strange attractor** is an attractor on which the motion is chaotic in this sense.
:::

:::statement[What the exponents must satisfy]{provenance=original}
Let $F \in C^1$ and let $X(t)$ be a solution of $\dot X = F(X)$ for which all $n$ limits above exist.

1. **The exponents sum to the averaged divergence.**

   $$
   \sum_{k=1}^n \lambda_k = \lim_{t\to\infty}\frac1t\int_0^t \nabla\cdot F\bigl(X(s)\bigr)\,ds ,
   $$

   whenever the right-hand limit exists. In particular, if $\nabla\cdot F$ is the constant $-k$, as for :ref[the Lorenz equations]{to=dyn.lorenz-equations}, then $\sum_k \lambda_k = -k$ exactly.
2. **The flow direction is neutral.** If the forward orbit $\{X(t) : t \ge 0\}$ is bounded and $\inf_{t\ge0}|F(X(t))| > 0$, then the direction along the flow neither grows nor decays exponentially:

   $$
   \lim_{t\to\infty}\frac1t\ln\bigl|\Phi(t)F(X(0))\bigr| = 0 .
   $$

   In particular $\lambda_n \le 0 \le \lambda_1$.
3. **A stable cycle of a map has a negative exponent.** If $x_0$ lies on a $p$-cycle of a map $f$ with multiplier $\mu$, then $\lambda(x_0) = p^{-1}\ln|\mu|$. So $\lambda < 0$ for a stable cycle, $\lambda > 0$ for an unstable one, and $\lambda = -\infty$ for a superstable one.
4. **Predictability horizon.** Suppose the largest exponent is $\lambda > 0$ and the initial state is known only to within $\|\delta_0\|$. If predictions are useful while the error stays below a tolerance $a$, they cease to be useful after a time of order

   $$
   t_{\text{horizon}} \approx \frac1\lambda\,\ln\frac{a}{\|\delta_0\|} .
   $$

   The dependence on $\|\delta_0\|$ is logarithmic: reducing the initial uncertainty by a factor $10^6$ buys only $6\ln 10/\lambda \approx 13.8/\lambda$ extra time.
:::

:::idea{provenance=original}
All four parts come from one observation: $\ln$ turns the multiplicative growth of lengths, areas and volumes into something additive, which can then be averaged. The product of all the semi-axes is $|\det\Phi|$, and Liouville's formula says that $\det\Phi$ grows at the instantaneous rate $\operatorname{tr}DF = \nabla\cdot F$; taking logarithms and dividing by $t$ gives part 1. Part 2 holds because the velocity vector itself solves the variational equation, so the flow direction neither grows nor decays beyond bounded factors. Part 3 is the chain-rule product again: along a cycle the same $p$ factors repeat forever, so the average of the logarithms is the logarithm of the multiplier divided by $p$. Part 4 is just solving $\|\delta_0\|e^{\lambda t} = a$.
:::

:::proof{provenance=original}
1. *Sum of the exponents.* The determinant of $\Phi$ obeys Liouville's formula: differentiating $\det\Phi$ and using $\dot\Phi = DF(X(t))\Phi$ gives

   $$
   \frac{d}{dt}\det\Phi(t) = \operatorname{tr}\bigl[DF(X(t))\bigr]\,\det\Phi(t) = \nabla\cdot F\bigl(X(t)\bigr)\,\det\Phi(t),
   $$

   so, since $\det\Phi(0) = 1$,

   $$
   \det\Phi(t) = \exp\int_0^t \nabla\cdot F\bigl(X(s)\bigr)\,ds .
   $$

   On the other hand $|\det\Phi(t)| = \prod_{k=1}^n s_k(t)$, because the singular values are the semi-axes of the image of the unit ball and the determinant is the volume ratio. Taking logarithms,

   $$
   \sum_{k=1}^n \ln s_k(t) = \int_0^t \nabla\cdot F\bigl(X(s)\bigr)\,ds .
   $$

   Divide by $t$ and let $t \to \infty$. The left side tends to $\sum_k \lambda_k$ by hypothesis, so the right side converges too and the two limits agree. If $\nabla\cdot F \equiv -k$ the integral is $-kt$ and the average is $-k$ for every $t$.

2. *The zero exponent.* Differentiating $\dot X = F(X)$ with respect to $t$ gives $\frac{d}{dt}F(X(t)) = DF(X(t))\,F(X(t))$, so $v(t) = F(X(t))$ solves the variational equation; hence $v(t) = \Phi(t)v(0)$. By hypothesis there are constants $0 < m \le M < \infty$ with $m \le |v(t)| \le M$ for all $t \ge 0$: the lower bound is the hypothesis $\inf|F(X(t))| > 0$, and the upper bound holds because $F$ is continuous and the orbit is bounded, so it lies in a compact set on which $|F|$ is bounded. Therefore

   $$
   \frac{\ln m - \ln|v(0)|}{t} \;\le\; \frac1t\ln\frac{|\Phi(t)v(0)|}{|v(0)|} \;\le\; \frac{\ln M - \ln|v(0)|}{t} ,
   $$

   and both bounds tend to $0$. So the growth rate of the particular direction $v(0)$ is $0$. Since $s_n(t)|v(0)| \le |\Phi(t)v(0)| \le s_1(t)|v(0)|$ for every $t$, taking logarithms, dividing by $t$ and letting $t \to \infty$ gives $\lambda_n \le 0 \le \lambda_1$.

3. *Cycles of a map.* Let $x_0, \dots, x_{p-1}$ be the cycle. The sequence $\ln|f'(x_i)|$ is periodic with period $p$, so for $n = mp$,

   $$
   \frac1n\sum_{i=0}^{n-1}\ln|f'(x_i)| = \frac{m}{mp}\sum_{i=0}^{p-1}\ln|f'(x_i)| = \frac1p\ln\Bigl|\prod_{i=0}^{p-1}f'(x_i)\Bigr| = \frac1p\ln|\mu| ,
   $$

   using the chain-rule product formula for the multiplier $\mu$. For general $n$ the partial sum differs from this by at most $p$ bounded terms, which vanish after division by $n$. Stability means $|\mu| < 1$, hence $\ln|\mu| < 0$; instability means $|\mu| > 1$, hence $\ln|\mu| > 0$; superstability means $\mu = 0$, and then some factor $f'(x_i)$ is zero, so every partial sum past that index is $-\infty$.

4. *Horizon.* With $\|\delta(t)\| \approx \|\delta_0\|e^{\lambda t}$, the error first reaches $a$ when $\lambda t = \ln(a/\|\delta_0\|)$. Replacing $\|\delta_0\|$ by $\|\delta_0\|/10^6$ increases the right-hand side by $\ln 10^6 = 6\ln 10 = 13.8155$, hence $t$ by $13.8155/\lambda$. $\square$
:::

:::remark[Where the hypotheses are used, and what the definition does not say]{provenance=original}
- *Existence of the limits* is assumed throughout and is not automatic. It is a theorem of ergodic theory that the limits exist for almost every initial condition with respect to an invariant measure, but nothing in our sources proves it, and we do not use it. In part 1 the hypothesis is used twice: the left-hand limit must exist for the identity to say anything, and it then forces the right-hand one.
- *Boundedness and $\inf|F| > 0$ in part 2.* Both are needed. The first fails for $\dot x = x$, whose single exponent is $+1$ and which has no neutral direction; the second fails at an equilibrium, where the orbit is a point and the exponents are the real parts of the eigenvalues, none of which need vanish.
- *From a neutral direction to a zero exponent.* Part 2 says the flow direction grows at rate $0$; it does not by itself say that $0$ appears in the list $\lambda_1, \dots, \lambda_n$. That step needs the theorem of ergodic theory, mentioned above and not assumed here, which says that the growth rate of almost every direction is one of the $\lambda_k$ and that the directions with each rate form a subspace. Granting it, the flow direction contributes a zero exponent. We therefore use part 2 as a numerical check -- a computed spectrum for a flow on a bounded aperiodic orbit that does not contain a zero is wrong -- rather than as a statement about the spectrum.
- *A positive exponent is not by itself chaos.* The system $\dot x = x$ has $\lambda = 1 > 0$ but its trajectories run off to infinity and never return, so its long-term behaviour is not aperiodic in the required sense. The definition of chaos needs the aperiodicity clause as well, and that clause is what confines the motion to an attractor.
- *Two kinds of sensitive dependence.* The definition above is metric: it asserts an exponential *rate*. Hirsch, Smale and Devaney instead call a map on an interval sensitive if there is one constant $\beta$ such that every point has points arbitrarily nearby whose orbits eventually get $\beta$ apart; no rate is mentioned, and their definition of a chaotic map adds density of periodic points and transitivity rather than a positive exponent. They note explicitly that definitions of chaos differ on this point. The two notions agree on the standard examples but are not the same condition, and we use the metric one because it is the one that produces a number.
- *The exponent is an average, so local behaviour deviates.* The graph of $\ln\|\delta(t)\|$ against $t$ is not a straight line; it wobbles because the stretching varies over the attractor, and it flattens once $\|\delta\|$ reaches the diameter of the attractor, beyond which the linearised description is void. The horizon formula is therefore an order-of-magnitude statement and is only meaningful for $a$ well below that diameter.
- *$\lambda$ depends on the trajectory,* so a numerical value must be averaged over a long orbit or over many starting points. For a map, Strogatz records that one and the same value comes out of every seed whose orbit is captured by a given attractor.
:::

:::method[Computing the exponents]{provenance=adapted src="strogatz-1994:§10.5, Example 10.5.3, p. 368"}
**For a one-dimensional map.** Fix the parameter. Iterate from an arbitrary seed for a few hundred steps to shed the transient. Then iterate $N$ further times, accumulating $\sum \ln|f'(x_i)|$ as you go -- only the current $x$ need be stored -- and divide by $N$. Repeat for the next parameter value. Plotting the result against the parameter gives a curve that is negative below the onset of chaos, touches zero at each period-doubling, and is positive in the chaotic range except for downward spikes at the periodic windows.

**For a flow, all $n$ exponents.** Integrate the state $X$ and an $n\times n$ matrix $Q$ together, $Q$ obeying $\dot Q = DF(X)Q$ and starting at $Q = I$. Every $\tau$ units of time, factor $Q = \tilde Q R$ by the Gram-Schmidt (QR) process with the signs fixed so that $R$ has positive diagonal; add $\ln R_{kk}$ to a running total $S_k$; replace $Q$ by $\tilde Q$ and continue. After total time $T$, the estimate is $\lambda_k \approx S_k/T$. The periodic re-orthonormalisation is what stops every column from collapsing onto the fastest-growing direction and overflowing, and the diagonal of $R$ records exactly the growth of the $k$-dimensional volume spanned by the first $k$ columns relative to the $(k-1)$-dimensional one.

**Two checks to run every time.** The sum of the computed exponents must equal the time-averaged divergence (part 1); and for a flow on a bounded aperiodic orbit, one exponent must come out at zero, since the flow direction is neutral (part 2). If either fails, $\tau$ is too long, the integrator tolerance too loose, or the transient too short.
:::

:::example[Three systems, computed]{provenance=original}
*The tent map.* For $f(x) = r\min(x,\,1-x)$ -- that is, $f(x) = rx$ on $[0,\tfrac12]$ and $f(x) = r(1-x)$ on $[\tfrac12, 1]$, with $0 < r \le 2$ -- we have $|f'| = r$ at every point where the derivative exists. So every term of the sum is $\ln r$ and $\lambda = \ln r$ for every seed whose orbit avoids the kink, with no computation at all. The map is chaotic for $r > 1$ and not for $r < 1$, and the threshold $\lambda = 0$ sits exactly at $r = 1$.

*The logistic map, where the answer is known in closed form.* At $r = 3.2$ the attractor is the $2$-cycle computed in :ref[One-dimensional maps]{to=dyn.one-dimensional-maps}, with multiplier $\mu = 4 + 2r - r^2 = 0.16$. By part 3,

$$
\lambda = \tfrac12\ln 0.16 = -0.9162907319 .
$$

Running the method above from the seed $x_0 = 0.1$ with $N = 2\times10^5$ iterations after a transient of $10^3$ returns $-0.9162907319$, agreeing to all ten figures shown (the two values differ by $3\times10^{-12}$), and the seed $x_0 = 0.37$ returns the same. This is the easy case: once the orbit is on the cycle the average is exact.

*The logistic map in the chaotic range.* At $r = 3.9$ there is no closed form. Averaging $\ln|3.9 - 7.8x_n|$ over $2\times10^6$ iterations, for $40$ random seeds after a transient of $2000$, gives

$$
\lambda = 0.4960 \pm 0.0003 ,
$$

the quoted uncertainty being the spread over seeds (the extreme values were $0.49534$ and $0.49649$). The exponent is positive, so the aperiodic orbits seen at this parameter really do separate exponentially. (At $r = 4$ the same average returns $0.693147$, which is $\ln 2$ to six figures; the reason is that $4x(1-x)$ is semi-conjugate to the tent map with $r = 2$ through $h(x) = \tfrac12(1 - \cos 2\pi x)$, and the tent map has $\lambda = \ln 2$. Direct iteration exactly at $r = 4$ is numerically delicate, because rounding can drop an orbit onto a spurious cycle; one of four seeds we tried did so and returned a visibly wrong $1.108$.)

*The Lorenz attractor.* Take $\sigma = 10$, $b = 8/3$, $r = 28$. Integrating the state together with a $3\times3$ matrix by fourth-order Runge-Kutta with step $0.005$, discarding $100$ time units of transient, re-orthonormalising every $\tau = 0.5$ and averaging over $T = 4000$ time units gives

$$
\lambda_1 = 0.9067, \qquad \lambda_2 = -0.00034, \qquad \lambda_3 = -14.5730 .
$$

Both checks pass. The middle exponent is zero to within $3\times10^{-4}$, the neutral direction of part 2. And the sum is $-13.666660$, against the exact value $-(\sigma + 1 + b) = -41/3 = -13.666667$ from part 1, an agreement to six decimal places. The drift of $\lambda_1$ over the second half of the run was about $\pm 0.002$, so the honest statement is $\lambda_1 = 0.906 \pm 0.002$; Strogatz quotes $0.9$.

*The horizon, measured.* With $\lambda_1 = 0.906$, part 4 predicts that an initial uncertainty of $10^{-6}$ grows to $1$ -- about one fiftieth of the diameter of the attractor, which our simulation measured as roughly $58$ -- after

$$
t_{\text{horizon}} \approx \frac{\ln 10^{6}}{0.906} = \frac{13.8155}{0.906} = 15.25 \text{ time units} .
$$

To test this we took $200$ points spaced along one long trajectory on the attractor, displaced each by $10^{-6}$ in a random direction, integrated both copies, and recorded when their separation first reached $1$. The mean was

$$
t = 14.24 \pm 0.14 ,
$$

within about $7\%$ of the prediction. The formula is an estimate, not an identity: the spread of individual times was large, because the stretching rate varies around the attractor, and $15.25$ is what one gets by pretending it does not.
:::

:::application{provenance=original}
The exponent converts a qualitative worry into a budget. In numerical weather prediction the largest exponent of the atmosphere corresponds to an error-doubling time of a day or two, so the horizon formula says that a hundredfold improvement in the initial analysis -- an enormous investment in observations -- buys roughly $\ln 100 \approx 4.6$ doubling times, about a week. This is the quantitative content of Lorenz's original remark about weather, and it is why operational forecasting moved from single runs to ensembles: once the horizon is reached the useful output is a distribution, not a trajectory.

The same arithmetic governs long integrations in celestial mechanics and molecular dynamics. Positive exponents in the solar system (with Lyapunov times of a few million years for the inner planets) mean that individual orbits computed over longer spans are not predictions of where a planet will be, although statistical properties of the ensemble remain meaningful; in molecular dynamics the exponents are so large that no trajectory is reproducible beyond picoseconds, which is why only time averages are reported.

In the laboratory the exponent is used as a diagnostic. Estimating $\lambda_1$ from a measured time series distinguishes deterministic chaos from noise, since a noisy periodic signal has $\lambda_1 \le 0$ while a chaotic one does not, and the spectrum of exponents bounds how many degrees of freedom are active: the number of non-negative exponents is a lower bound on the dimension of the attractor, which in turn constrains how low-dimensional a model is allowed to be. The fractional dimension that goes with this picture is the subject of :ref[Fractals and dimension]{to=dyn.fractals}.
:::
