---
id: prob.stochastic-differential-equations
title: Stochastic differential equations
kind: method
level: core
summary: Gives a recipe for solving a linear stochastic differential equation with additive noise by an integrating factor, proves that its solution is Gaussian with an explicit mean, variance and autocovariance, applies this to the Ornstein-Uhlenbeck process and the Langevin equation, and explains how the Ito and Stratonovich readings of the same equation differ and how to convert between them.
prereqs: [prob.ito-calculus, prob.brownian-motion, prob.stationary-processes, prob.central-limit-theorem, ode.first-order-methods, ode.continuous-dependence]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§13.2 Brownian motion, pp. 579-580: the failure of the Wiener process as a model of the local motion of a physical particle (nowhere differentiable paths), the Ornstein-Uhlenbeck process as a model in which the *velocity* rather than the position performs the random walk, and the discrete Langevin equation $V_{n+1} = V_n + X_{n+1}$ with $\\mathbb{E}(X_{n+1}\\mid V_n) = -\\beta V_n$ (frictional effect) and $\\operatorname{var}(X_{n+1}\\mid V_n) = \\sigma^2$ (collision effect), together with the remark that the paths of the particle are obtained by integrating the velocity process; §13.3, the representations $U_1, U_2, U_3$ of the Ornstein-Uhlenbeck process on p. 603, Example (13.3.11), p. 584 (instantaneous mean $a(t,x) = -\\beta x$, instantaneous variance $b(t,x) = \\sigma^2$, and the forward equation); §13.7 Stochastic calculus, pp. 603-604: the partition sum $I_n = \\sum_j W_{\\theta_j}(W_{(j+1)\\delta} - W_{j\\delta})$, the Ito value (13.7.5) obtained from $\\theta_j = j\\delta$, the statement that other choices of $\\theta_j$ give other answers with $\\theta_j = (j+1)\\delta$ giving $\\tfrac12(W_t^2+t)$, the naming of the midpoint rule as the Stratonovich integral, and Exercises (13.7.3), (13.7.4) and (13.7.5); §13.8, the shorthand (13.8.9) for the integral equation (13.8.10), p. 608, and Exercise (13.8.5), p. 610 (integrating $dX_t = -\\beta X_t\\,dt + dW_t$); §13.9, the opening paragraph of p. 610 asserting that under rather weak conditions on $\\mu$, $\\sigma$ and $X_0$ the equation has a unique solution which is a Markov process with continuous sample paths, with the proof declared beyond scope, Theorem (13.9.2) (Ito's formula) and Example (13.9.9) (geometric Brownian motion), pp. 610-612; §13.12, Problem (13.12.3), p. 627 (the representation $U(t) = e^{-\\beta t}W(e^{2\\beta t}-1)$), Problem (13.12.4), p. 627 (the law $N(ue^{-\\beta t}, \\sigma^2(1-e^{-2\\beta t})/(2\\beta))$ of the Ornstein-Uhlenbeck process, its limit, its strong stationarity, and its characterisation as the only stationary Gaussian Markov process with continuous autocovariance function) and Problem (13.12.21), p. 629 (Tanaka's example: $dX = \\operatorname{sign}(X_t)\\,dW$ has solutions that are not pathwise unique but do have the finite-dimensional distributions of a Wiener process)"
    pages: "579-580, 584, 603-604, 608, 610-612, 627, 629"
    role: the shorthand and its meaning as an integral equation; the existence and uniqueness assertion, quoted exactly as the source makes it, and Tanaka's counterexample to pathwise uniqueness; the Ornstein-Uhlenbeck process, its instantaneous mean and variance, its law at time $t$, its stationary law and its characterisation; the Langevin equation in the discrete form in which the source introduces it, and the physical reading of the velocity process; the dependence of a stochastic integral on the evaluation point within each partition interval, and the naming of the midpoint rule as the Stratonovich integral
---

:::note[What an equation driven by noise can mean]{provenance=original}
A physicist writes $m\dot v = -\gamma v + \xi(t)$ and calls $\xi$ "white noise". Nothing in ordinary analysis supports this: the intended $\xi$ is the derivative of a Wiener process, and :ref[Brownian motion]{to=prob.brownian-motion} has nowhere differentiable paths. The repair is to multiply through by $dt$ and read the equation as an *integral* equation in which the noise appears only inside a stochastic integral, never differentiated.

Once that is done, a second question appears that has no analogue in ordinary differential equations: which stochastic integral? The Itô integral and the Stratonovich integral give different answers to the same written equation. This unit gives the method for the case that is solvable in closed form — linear drift and additive noise — and then says what the two readings are and how to pass between them.
:::

:::definition[Stochastic differential equations, and the two readings]{provenance=adapted src="grimmett-stirzaker-2020:§13.8, equations (13.8.9)-(13.8.10), p. 608, §13.9, equation (13.9.1), p. 610, and §13.7, pp. 603-604"}
Let $W$ be a standard Wiener process, with the filtration $\mathbf{F}$ built in :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus}. A **stochastic differential equation** (an **SDE**) is written

$$
dX_t = \mu(t, X_t)\,dt + \sigma(t, X_t)\,dW_t
\tag{1}
$$

and is shorthand for the integral equation

$$
X_t = X_0 + \int_0^t \mu(s,X_s)\,ds + \int_0^t \sigma(s,X_s)\,dW_s ,
\qquad t \ge 0 ,
\tag{2}
$$

in which the second integral is an Itô integral. A continuous adapted process $X$ satisfying (2) is called a **solution**, and is an Itô process, or diffusion, with infinitesimal mean $\mu$ and infinitesimal variance $\sigma^2$.

The last integral in (2) is the mean-square limit of sums $\sum_j \sigma(t_j, X_{t_j})(W_{t_{j+1}} - W_{t_j})$ in which the integrand is evaluated at the **left** endpoint of each partition interval. Evaluating instead at the midpoint produces a different limit, and that limit defines the **Stratonovich integral**, written $\int_0^t \sigma \circ dW$. An equation written with $\circ\,dW$ in place of $dW$,

$$
dX_t = \tilde\mu(t,X_t)\,dt + \sigma(t,X_t)\circ dW_t ,
\tag{3}
$$

is a **Stratonovich SDE**: a different equation, with different solutions, not a different notation for (1). The remark below gives the dictionary between them.

Throughout, **linear with additive noise** means the special case

$$
dX_t = \bigl(\alpha(t)X_t + \nu(t)\bigr)\,dt + \delta(t)\,dW_t ,
\tag{4}
$$

in which $\alpha, \nu, \delta$ are deterministic functions of $t$ alone. (The letter $\nu$ is used for the affine forcing because $\beta$ is reserved below for the relaxation rate of the Ornstein-Uhlenbeck process.) Because $\sigma = \delta$ does not depend on $x$, equations (1) and (3) coincide for (4) — the two readings differ only when the noise is multiplicative.
:::

:::statement[Existence and uniqueness: what the source asserts]{provenance=adapted src="grimmett-stirzaker-2020:§13.9, opening paragraph, p. 610, and §13.12, Problem (13.12.21), p. 629"}
Grimmett and Stirzaker assert the following about equation (1). Provided $\mu$, $\sigma$ and $X_0$ satisfy conditions that they describe as rather weak, there is exactly one solution; it is a Markov process, and its sample paths are continuous. They do not list the conditions, and they declare the proof beyond the scope of their book. We report the assertion in that form rather than substituting the Lipschitz and linear-growth hypotheses familiar from other accounts, which are not the hypotheses the source gives.

That some condition is needed is shown by their Problem (13.12.21), **Tanaka's example**. Let $\operatorname{sign}(x) = 1$ for $x > 0$ and $-1$ otherwise, and consider

$$
dX_t = \operatorname{sign}(X_t)\,dW_t , \qquad X_0 = 0 .
$$

The process $V_t = \int_0^t \operatorname{sign}(W_s)\,dW_s$ is itself a standard Wiener process and solves this equation; so does $-V$. (The source writes the same letter $W$ for the process used to build $V$ and for the process driving the equation; the driving process is the one reconstructed from $V$ itself, namely $\int_0^\cdot \operatorname{sign}(V_s)\,dV_s$, which is again a standard Wiener process. Nothing below depends on which reading is taken.) Solutions are therefore not unique path by path, although every solution has the finite-dimensional distributions of a Wiener process. The coefficient $\operatorname{sign}$ is bounded, measurable and non-zero, but discontinuous at the one point the process keeps returning to.

For the linear equation (4) there is no such difficulty, and the next statement settles existence, uniqueness and the law of the solution outright.
:::

:::statement[Linear SDE with additive noise: closed form and law]{provenance=original}
Let $\nu$ and $\delta$ be continuous real functions on $[0,\infty)$, let $\alpha$ be a *continuously differentiable* real function on $[0,\infty)$, let $X_0$ be a constant, and set

$$
\Phi_t = \exp\left(-\int_0^t \alpha(r)\,dr\right) .
$$

Then equation (4) has one and only one continuous adapted solution, namely

$$
X_t = \Phi_t^{-1}\left( X_0 + \int_0^t \Phi_s\,\nu(s)\,ds + \int_0^t \Phi_s\,\delta(s)\,dW_s \right) .
\tag{5}
$$

The solution is a Gaussian process, with the usual convention that a constant counts as normal with variance $0$ (if $\delta \equiv 0$ the equation has no noise and the solution is the deterministic function (5)), and

$$
\mathbb{E}(X_t) = \Phi_t^{-1}\left(X_0 + \int_0^t \Phi_s \nu(s)\,ds\right) ,
\qquad
\operatorname{var}(X_t) = \Phi_t^{-2}\int_0^t \Phi_s^2\,\delta(s)^2\,ds ,
\tag{6}
$$

and, for $s \le t$,

$$
\operatorname{cov}(X_s, X_t) = \Phi_s^{-1}\Phi_t^{-1}\int_0^{s} \Phi_u^2\,\delta(u)^2\,du .
\tag{7}
$$

**A random initial value.** Suppose instead that $X_0$ is a random variable with finite variance, independent of $W$. Then no process starting at $X_0$ is adapted to $\mathbf{F}$ at all, because $\mathcal{F}_0$ contains only the null events and their complements and so cannot carry a non-degenerate $X_0$. The filtration must be enlarged to $\mathbf{G}$, where $\mathcal{G}_t = \mathcal{F}_t \vee \sigma(X_0)$. This costs nothing: since $X_0$ is independent of $W$, the increments of $W$ after time $t$ are still independent of $\mathcal{G}_t$, so $W$ is a Wiener process for $\mathbf{G}$ too and the Itô integral in (5) is the same object as before. With "adapted" read as adapted to $\mathbf{G}$, formula (5) is again the unique continuous adapted solution, and (6) and (7) hold conditionally on $X_0$. Unconditionally, $\operatorname{var}(X_0)$ is added to the integral in each of (6) and (7):

$$
\operatorname{var}(X_t) = \Phi_t^{-2}\left(\operatorname{var}(X_0) + \int_0^t\Phi_s^2\delta(s)^2\,ds\right) ,
\qquad
\operatorname{cov}(X_s,X_t) = \Phi_s^{-1}\Phi_t^{-1}\left(\operatorname{var}(X_0) + \int_0^{s}\Phi_u^2\delta(u)^2\,du\right)
$$

for $s \le t$ (both follow from (5) and the independence of $X_0$ and $W$, which makes the two contributions uncorrelated), and $X$ is a Gaussian process whenever $X_0$ is normal.

This is our own statement; it is proved in full below, and the special case $\alpha \equiv -\beta$, $\nu \equiv 0$, $\delta \equiv \sigma$ recovers the law of the Ornstein-Uhlenbeck process that the source states in Problem (13.12.4).
:::

:::statement[The Ornstein-Uhlenbeck process]{provenance=adapted src="grimmett-stirzaker-2020:§13.3, Example (13.3.11), p. 584, the representations on p. 603, Exercise (13.8.5), p. 610, and §13.12, Problems (13.12.3) and (13.12.4), p. 627"}
Fix $\beta > 0$ and $\sigma > 0$. The **Ornstein-Uhlenbeck process** is the diffusion $V$ with instantaneous mean and variance

$$
a(t,x) = -\beta x , \qquad b(t,x) = \sigma^2 ,
$$

that is, the solution of

$$
dV_t = -\beta V_t\,dt + \sigma\,dW_t .
\tag{8}
$$

Items 1-4, and the two representations displayed in item 5, are what the source records; the covariance computation in item 5 and the identifications of $\sigma$ that it yields are ours.

1. **Law at time $t$.** If $V_0 = u$ then
   $$
   V_t \ \sim\ N\!\left(u e^{-\beta t},\ \frac{\sigma^2\bigl(1 - e^{-2\beta t}\bigr)}{2\beta}\right) .
   $$
2. **Limit law.** $V_t$ is asymptotically $N\bigl(0, \tfrac12\sigma^2/\beta\bigr)$ as $t \to \infty$.
3. **Stationarity.** If $V_0 \sim N\bigl(0, \tfrac12\sigma^2/\beta\bigr)$ then $V$ is strongly stationary; see :ref[Stationary processes and spectral densities]{to=prob.stationary-processes}.
4. **Characterisation.** Among processes that are at once Gaussian, Markov, stationary and equipped with an autocovariance function that is continuous, this one is the only one.
5. **Representations.** With $W$ standard, each of
   $$
   U_1(t) = e^{-\beta t}W\bigl(e^{2\beta t} - 1\bigr) , \qquad
   U_3(t) = W_t - \beta\int_0^t e^{-\beta(t-s)}W_s\,ds
   $$
   is an Ornstein-Uhlenbeck process, but not with the same $\sigma$; the source does not say which $\sigma$, and the rest of this item, which settles it, is ours. For $s \le t$, $\operatorname{cov}\bigl(U_1(s),U_1(t)\bigr) = e^{-\beta(s+t)}\min\bigl(e^{2\beta s}-1, e^{2\beta t}-1\bigr) = e^{-\beta(t-s)} - e^{-\beta(t+s)}$, which by (7) is the case $\sigma^2 = 2\beta$, $V_0 = 0$; $U_3$ is the case $\sigma = 1$, $V_0 = 0$, and is what integrating (8) with those values produces. Because these are built from $W$ by continuous operations, the sample paths of $V$ inherit continuity from those of $W$.
:::

:::idea{provenance=original}
**The integrating factor of ordinary linear theory still works, and Itô's formula says why nothing extra appears.** For the deterministic equation $\dot x = \alpha x + \nu$ one multiplies by the :ref[integrating factor]{to=ode.first-order-methods} $\Phi_t = e^{-\int\alpha}$, which turns the terms in $x$ and $\dot x$ into the derivative of the single product $\Phi x$. Here we must apply Itô's formula, not the product rule, to $\Phi_t X_t$. Itô's formula adds a term $\tfrac12 f_{xx}\sigma^2$; but $f(t,x) = \Phi_t x$ is *linear* in $x$, so $f_{xx} = 0$ and the correction is absent. That is the whole reason the classical recipe survives for additive noise, and the whole reason it fails for multiplicative noise.

**Once the equation is integrated, Gaussianity is free.** What is left on the right is a deterministic function plus an Itô integral of a *deterministic* integrand. Such an integral is, at each stage of its construction, a linear combination of independent normal increments of $W$, hence normal; and a mean-square limit of normals is normal. Its mean is zero and its variance is given by the Itô isometry, which here is an ordinary integral.

**For the Ornstein-Uhlenbeck process the two terms in (5) have a clean physical reading.** The factor $e^{-\beta t}$ damps the memory of the initial value; the stochastic integral accumulates kicks, each discounted by $e^{-\beta(t-s)}$ according to how long ago it arrived. The variance is a balance between the two, and settles at $\sigma^2/(2\beta)$: more noise raises it, more friction lowers it.
:::

:::proof[Of the linear statement]{provenance=original}
Write $\mathcal{F}_t$ for the filtration of $W$, and assume throughout that $X_0$ is constant. For a random $X_0$ independent of $W$, every step below is read with $\mathbf{F}$ replaced by the enlarged filtration $\mathbf{G}$ of the statement, which changes nothing in Steps 1-4 and 6, because $W$ is a Wiener process for $\mathbf{G}$ as well and the Itô integral of a deterministic integrand is built from the same increments; Step 5 is the one step that needs $X_0$ to be constant (or normal).

**Step 1: the integrating factor is smooth and deterministic.** $\alpha$ is continuously differentiable, so $t \mapsto \int_0^t\alpha$ is twice continuously differentiable and $\Phi$ is a positive, *twice* continuously differentiable, deterministic function with $\Phi'_t = -\alpha(t)\Phi_t$, $\Phi''_t = \bigl(\alpha(t)^2 - \alpha'(t)\bigr)\Phi_t$ and $\Phi_0 = 1$. The same holds for $\Phi^{-1}$, with $(\Phi^{-1})' = \alpha\Phi^{-1}$ and $(\Phi^{-1})'' = (\alpha^2+\alpha')\Phi^{-1}$. This is the only place $\alpha' $ is wanted, and the remark below says why it is wanted at all.

**Step 2: apply Itô's formula to the product.** Suppose $X$ solves (4) and put $f(t,x) = \Phi_t x$, so that $f_t = \Phi'_t x = -\alpha(t)\Phi_t x$, $f_x = \Phi_t$ and $f_{xx} = 0$. By Step 1 the function $f$ is twice continuously differentiable on $[0,\infty)\times\mathbb{R}$ — $f_{tt} = \Phi''_tx$ exists and is continuous because $\alpha \in C^1$, and $f_{tx} = \Phi'_t$, $f_{xx} = 0$ — so Itô's formula in the general form of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus}, which asks for exactly that, applies, with $\mu(t,x) = \alpha(t)x + \nu(t)$ and $\sigma(t,x) = \delta(t)$:

$$
d\bigl(\Phi_t X_t\bigr)
= \Bigl[\underbrace{\Phi_t\bigl(\alpha X_t + \nu\bigr)}_{f_x\mu} \underbrace{- \alpha\Phi_t X_t}_{f_t} + \underbrace{\tfrac12 \cdot 0 \cdot \delta^2}_{\frac12 f_{xx}\sigma^2}\Bigr]dt + \Phi_t\,\delta(t)\,dW_t
= \Phi_t\nu(t)\,dt + \Phi_t\delta(t)\,dW_t .
$$

The two terms containing $X_t$ cancel, which is what the factor was chosen for, and the Itô correction is zero because $f$ is linear in $x$.

**Step 3: integrate and solve.** In integrated form, $\Phi_tX_t - X_0 = \int_0^t\Phi_s\nu\,ds + \int_0^t\Phi_s\delta\,dW_s$. The Itô integral on the right is defined because $\Phi\delta$ is continuous and deterministic, so $\int_0^t \Phi_s^2\delta(s)^2\,ds < \infty$ and the admissibility condition of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} holds. Dividing by $\Phi_t > 0$ gives (5). Conversely — and this is a second application of Itô's formula, not Step 2 run backwards — set

$$
Y_t = X_0 + \int_0^t\Phi_s\nu(s)\,ds + \int_0^t\Phi_s\delta(s)\,dW_s ,
$$

a continuous adapted Itô process with $dY_t = \Phi_t\nu(t)\,dt + \Phi_t\delta(t)\,dW_t$, and apply Itô's formula to $g(t,y) = \Phi_t^{-1}y$ along $Y$, which is again twice continuously differentiable by Step 1. Again $g_{yy} = 0$, so there is no Itô correction, and since $\partial_t\bigl(\Phi_t^{-1}\bigr) = \alpha(t)\Phi_t^{-1}$,

$$
d\bigl(\Phi_t^{-1}Y_t\bigr)
= \alpha(t)\Phi_t^{-1}Y_t\,dt + \Phi_t^{-1}\bigl(\Phi_t\nu(t)\,dt + \Phi_t\delta(t)\,dW_t\bigr)
= \bigl(\alpha(t)X_t + \nu(t)\bigr)dt + \delta(t)\,dW_t ,
$$

where $X_t = \Phi_t^{-1}Y_t$ is exactly the process (5). So (5) is continuous, adapted and solves (4): a solution exists.

**Step 4: uniqueness.** Let $X$ and $\tilde X$ both solve (4) with the same $X_0$ and put $Z = X - \tilde X$. Subtracting the two copies of (2), the stochastic integrals cancel — they do not involve the solution, since $\delta$ does not depend on $x$ — and $Z_t = \int_0^t \alpha(s)Z_s\,ds$ for every $t$, pathwise, with $Z_0 = 0$. Fix $T$ and let $A = \max_{[0,T]}|\alpha|$, finite by continuity. Then $|Z_t| \le A\int_0^t|Z_s|\,ds$ on $[0,T]$. Both solutions are continuous, so $K = \max_{[0,T]}|Z|$ is finite, and feeding the bound into itself gives

$$
|Z_t| \le K\,\frac{(At)^n}{n!} , \qquad 0 \le t \le T ,
$$

for every $n \ge 0$: the case $n = 0$ is the definition of $K$, and if the bound holds for $n$ then $|Z_t| \le A\int_0^t K(As)^n/n!\,ds = K(At)^{n+1}/(n+1)!$. Letting $n \to \infty$ gives $Z_t = 0$. (This is the zero-constant case of Gronwall's inequality, which :ref[Dependence on initial data and Gronwall's inequality]{to=ode.continuous-dependence} proves in general; the iteration is spelled out here so that the step needs nothing beyond calculus.) Hence $Z \equiv 0$ on $[0,T]$ for every $T$.

**Step 5: the solution is Gaussian.** Only the term $M_t = \int_0^t\Phi_s\delta(s)\,dW_s$ is random. By construction it is the mean-square limit of the elementary sums $\sum_j c_j (W_{t_{j+1}} - W_{t_j})$ with *deterministic* coefficients $c_j$, and such a sum is a linear combination of independent normal variables, hence normal with mean $0$. Mean-square convergence implies convergence in distribution, and the normal family is closed under limits in distribution (move 3 of the method of :ref[Brownian motion]{to=prob.brownian-motion}), so $M_t$ is normal; its variance is $\lim_n v_n$, since mean-square convergence carries second moments with it. The same argument applied to a finite linear combination $\sum_k \lambda_k M_{t_k}$ shows every such combination is normal, which is to say that $(M_{t_1},\dots,M_{t_n})$ is multivariate normal; so $M$, and therefore $X$, is a Gaussian process.

**Step 6: mean, variance and autocovariance.** Taking expectations in (5), and using $\mathbb{E}(M_t) = 0$, gives the first half of (6). The Itô isometry gives

$$
\operatorname{var}(M_t) = \mathbb{E}\bigl(M_t^2\bigr) = \int_0^t \Phi_s^2\delta(s)^2\,ds ,
$$

and dividing by $\Phi_t^2$ gives the second half of (6). For $s \le t$, apply the bilinear form of the isometry to $\psi_1 = \Phi\delta\mathbf{1}_{(0,s]}$ and $\psi_2 = \Phi\delta\mathbf{1}_{(0,t]}$, whose pointwise product is $\Phi^2\delta^2\mathbf{1}_{(0,s]}$:

$$
\operatorname{cov}(M_s, M_t) = \mathbb{E}(M_sM_t) = \int_0^{s}\Phi_u^2\delta(u)^2\,du .
$$

Dividing by $\Phi_s\Phi_t$ gives (7). $\square$

**Deduction of the Ornstein-Uhlenbeck law.** Put $\alpha \equiv -\beta$, $\nu \equiv 0$, $\delta \equiv \sigma$ and $V_0 = u$. Then $\Phi_t = e^{\beta t}$, and (5) reads $V_t = ue^{-\beta t} + \sigma\int_0^te^{-\beta(t-s)}\,dW_s$. By (6) the mean is $ue^{-\beta t}$ and the variance is

$$
\sigma^2e^{-2\beta t}\int_0^te^{2\beta s}\,ds = \sigma^2 e^{-2\beta t}\cdot\frac{e^{2\beta t}-1}{2\beta} = \frac{\sigma^2\bigl(1-e^{-2\beta t}\bigr)}{2\beta} ,
$$

which is item 1 of the statement above. Letting $t \to \infty$ gives item 2, and (7) gives, for $s \le t$,
$$
\operatorname{cov}(V_s,V_t) = \frac{\sigma^2}{2\beta}\Bigl(e^{-\beta(t-s)} - e^{-\beta(t+s)}\Bigr)
\ \longrightarrow\ \frac{\sigma^2}{2\beta}e^{-\beta(t-s)}
$$
as $s,t \to \infty$ with $t - s$ fixed, which is the stationary autocovariance of item 3.
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Additive noise ($\delta$ independent of $x$) is used in Steps 2 and 4, and nowhere can it be dropped.** In Step 2 it is what makes $f_{xx}\sigma^2 = 0$; in Step 4 it is what makes the stochastic integrals cancel between two solutions. For multiplicative noise the integrating factor must itself be corrected: the equation $dS = S(\mu\,dt+\sigma\,dW)$ is solved not by $\exp(\mu t + \sigma W_t)$ but by $\exp\bigl((\mu-\tfrac12\sigma^2)t+\sigma W_t\bigr)$, as :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§13.9, Example (13.9.9), p. 612"} show. The missing $-\tfrac12\sigma^2 t$ is exactly the term that Step 2 was able to discard.

**Deterministic coefficients are used only in Step 5 — but Steps 1-2 have to be reread.** If $\alpha, \nu, \delta$ are adapted processes with suitable integrability then (5) is still the solution and uniqueness still holds, but the route to it changes: $\Phi_t = \exp(-\int_0^t\alpha)$ is then a continuous adapted process, not a deterministic function, so Step 1 gives it as a process of finite variation rather than a differentiable function, and Step 2 cannot apply Itô's formula to a deterministic $f$. One uses instead the product rule for a finite-variation factor times an Itô process, $d(\Phi_tX_t) = \Phi_t\,dX_t + X_t\,d\Phi_t$, in which there is no cross-variation term precisely because $\Phi$ has finite variation; the two terms in $X_t$ cancel as before. Step 4 goes through with $A = \max_{[0,T]}|\alpha|$ replaced by a pathwise bound. What does not survive is Step 5: $M_t$ is no longer a combination of normals, and nothing in (6)-(7) holds.

**Continuous differentiability of $\alpha$** is used in Step 1 only, and only to make $f(t,x) = \Phi_tx$ twice continuously differentiable in *both* variables, which is what the general Itô formula of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} demands. Continuity of $\alpha$ alone makes $\Phi$ merely $C^1$, so $f_{tt}$ need not exist; the conclusions are unchanged under that weaker hypothesis, but reaching them needs the $C^{1,2}$ form of Itô's formula (once continuously differentiable in $t$, twice in $x$), which this handbook does not state, so we assume $\alpha \in C^1$ rather than appeal to it. Mere continuity of $\alpha$ is all that Step 4 wants, where it bounds $|\alpha|$ on a compact interval and so makes the iterated bound converge; local integrability and a local bound would suffice there.

**$\int_0^t\Phi_s^2\delta(s)^2\,ds < \infty$** is the admissibility condition of the Itô integral, used in Step 3. Without it the stochastic integral in (5) need not exist and (6) is meaningless.

**$\beta > 0$ in the Ornstein-Uhlenbeck process** is what makes items 1-4 of that statement true. At $\beta = 0$ equation (8) is $dV = \sigma\,dW$, whose solution is a Wiener process: the variance $\sigma^2 t$ grows without bound, there is no limit law and no stationary version. For $\beta < 0$ the mean $ue^{-\beta t}$ and the variance $\sigma^2(e^{2|\beta|t}-1)/(2|\beta|)$ both diverge. Only a restoring drift produces a balance.

**The existence and uniqueness assertion for the general equation (1)** rests on conditions the source does not state. Tanaka's example above shows that the pathwise part of the conclusion genuinely fails for a discontinuous $\sigma$, so "rather weak" cannot be read as "none".
:::

:::remark[Ito versus Stratonovich]{provenance=original}
Partition $(0,t]$ into $n$ equal intervals with endpoints $t_j = jt/n$ and write $\Delta_j = W_{t_{j+1}}-W_{t_j}$. For the integrand $W$ itself, the three natural evaluation points give three different limits in mean square:

| evaluation point | limit of $\sum_j W_{\theta_j}\Delta_j$ |
|---|---|
| left, $\theta_j = t_j$ (Itô) | $\tfrac12\bigl(W_t^2 - t\bigr)$ |
| midpoint, $\theta_j = \tfrac12(t_j+t_{j+1})$ (Stratonovich) | $\tfrac12 W_t^2$ |
| right, $\theta_j = t_{j+1}$ | $\tfrac12\bigl(W_t^2 + t\bigr)$ |

The midpoint row is checked as follows. Split $\Delta_j = A_j + B_j$ into its halves, which are independent and each $N(0, t/(2n))$. Then $W_{\theta_j} = \tfrac12\bigl(W_{t_j}+W_{t_{j+1}}\bigr) + \tfrac12(A_j - B_j)$. The first part telescopes exactly:
$$
\sum_j \tfrac12\bigl(W_{t_j}+W_{t_{j+1}}\bigr)\bigl(W_{t_{j+1}}-W_{t_j}\bigr) = \tfrac12\sum_j\bigl(W_{t_{j+1}}^2 - W_{t_j}^2\bigr) = \tfrac12 W_t^2 .
$$
The second part contributes $\sum_j\tfrac12(A_j-B_j)(A_j+B_j) = \tfrac12\sum_j(A_j^2-B_j^2)$, a sum of $n$ independent mean-zero terms each of variance of order $(t/n)^2$, so of total variance of order $t^2/n \to 0$. Hence the midpoint limit is $\tfrac12W_t^2$ in mean square. *A note on the source:* the prose of :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§13.7, p. 604, the paragraph after (13.7.5)"} names the midpoint value as $W_t^2$; their own Exercise (13.7.3)(c) on the same page, which asks for the limit of $\sum_j\tfrac12(V_{j+1}+V_j)\Delta_j$, telescopes to $\tfrac12W_t^2$, and that is the value consistent with the two flanking entries of the table. We use $\tfrac12 W_t^2$.

**The dictionary.** Let $X$ solve $dX = \mu\,dt + \sigma(t,X)\,dW$ with $\sigma$ continuously differentiable in $x$, and let the integrand be $h(X_s)$ for a continuously differentiable $h$. Repeat the splitting above with $h(X_{\theta_j})$ in place of $W_{\theta_j}$. Expanding
$$
h(X_{\theta_j}) \approx h(X_{t_j}) + h'(X_{t_j})\bigl(X_{\theta_j}-X_{t_j}\bigr) ,
\qquad
X_{\theta_j}-X_{t_j} \approx \sigma(t_j, X_{t_j})\,A_j
$$
to leading order, the midpoint sum exceeds the left-endpoint sum by
$$
\sum_j \bigl(h'\sigma\bigr)(t_j,X_{t_j})\,A_j\bigl(A_j+B_j\bigr) ,
$$
whose conditional mean is $\sum_j(h'\sigma)(t_j,X_{t_j})\cdot\tfrac12\bigl(t/n\bigr)$, since $\mathbb{E}(A_j^2) = t/(2n)$ and $\mathbb{E}(A_jB_j) = 0$. In the limit this is $\tfrac12\int_0^t(h'\sigma)(s,X_s)\,ds$. So, formally,
$$
\int_0^t h(X_s)\circ dW_s \;=\; \int_0^t h(X_s)\,dW_s \;+\; \tfrac12\int_0^t \bigl(h'\sigma\bigr)(s,X_s)\,ds .
$$

Two checks and one consequence.

- The table above is the case $h(x) = x$ and $X = W$, so that $h' \equiv 1$ and $\sigma \equiv 1$. The correction is $\tfrac12\int_0^t ds = t/2$, which is exactly the gap $\tfrac12W_t^2 - \tfrac12(W_t^2-t)$ between the midpoint and left rows.
- If the integrand does not depend on the state then $h' \equiv 0$ and there is no correction at all. Additive noise is unambiguous.
- In the Stratonovich equation (3) the integrand *is* the diffusion coefficient, $h = \sigma$. So the correction is $\tfrac12\int_0^t(\sigma_x\sigma)(s,X_s)\,ds$, and (3) describes the same process as the Itô equation (1) with
  $$
  \mu = \tilde\mu + \tfrac12\,\sigma_x\sigma .
  $$

This derivation is formal — it discards remainders without estimating them — and is ours, not the source's; the source gives only the case tabulated above. Where it matters, verify the conversion against a case with a known answer.

**Which to use.** Three practical points. The Itô integral is a martingale and obeys the isometry, which is why every result in this unit is stated for it. The Stratonovich integral obeys the ordinary chain rule, which makes it the convenient one when a change of variables or a coordinate-free formulation is wanted. And when the noise is additive, $\sigma_x = 0$ and the two coincide — so the Langevin equation below, and every linear equation (4), is unambiguous.
:::

:::method[Solving a linear SDE with additive noise]{provenance=original}
To solve $dX_t = (\alpha(t)X_t+\nu(t))\,dt + \delta(t)\,dW_t$ with $X_0$ given:

1. **Check the form.** The diffusion coefficient $\delta$ must not depend on $X$. If it does, the method does not apply; try instead a substitution such as $Y = \log X$, remembering that Itô's formula, not the chain rule, governs the substitution.
2. **Build the integrating factor** $\Phi_t = \exp\bigl(-\int_0^t\alpha(r)\,dr\bigr)$, exactly as for the deterministic equation $\dot x = \alpha x + \nu$.
3. **Differentiate the product with Itô's formula**, not with the product rule. Confirm that $f(t,x) = \Phi_tx$ has $f_{xx} = 0$, so that the Itô correction vanishes and $d(\Phi_tX_t) = \Phi_t\nu\,dt + \Phi_t\delta\,dW_t$.
4. **Integrate and divide** to get (5).
5. **Read off the mean** by deleting the stochastic integral, whose expectation is zero.
6. **Read off the variance with the Itô isometry**: square the coefficient of $dW$ inside the integral, integrate it against $ds$, and divide by $\Phi_t^2$. For the autocovariance at two times, integrate only up to the earlier one, as in (7).
7. **Declare the law.** With deterministic coefficients and constant $X_0$, the answer is Gaussian, so steps 5 and 6 determine it completely; any probability is then a normal-tail evaluation.
8. **Sanity-check the limits.** As $t \to 0$ the mean should return $X_0$ and the variance should vanish; as $t \to \infty$ a stable equation ($\int^t\alpha \to -\infty$) should give a finite limiting variance.
:::

:::example[An Ornstein-Uhlenbeck process, with numbers]{provenance=original}
Take $\beta = \tfrac12$, $\sigma^2 = 3$ and $X_0 = 2$ in equation (8); the time unit is whatever makes the relaxation rate $\tfrac12$.

**Step 1: integrating factor.** $\alpha \equiv -\tfrac12$, so $\Phi_t = e^{t/2}$.

**Step 2: solve.** By (5) with $\nu \equiv 0$,
$$
X_t = 2e^{-t/2} + \sqrt3\int_0^t e^{-(t-s)/2}\,dW_s .
$$

**Step 3: mean.**
$$
\mathbb{E}(X_t) = 2e^{-t/2} , \qquad \text{so at } t = 4 : \quad 2e^{-2} = 0.270671 .
$$

**Step 4: variance by the isometry.**
$$
\operatorname{var}(X_t) = 3\int_0^te^{-(t-s)}\,ds = 3\bigl(1-e^{-t}\bigr) ,
\qquad \text{so at } t=4 : \quad 3\bigl(1-e^{-4}\bigr) = 2.945053 ,
$$
using $e^{-4} = 0.0183156$. The standard deviation is $\sqrt{2.945053} = 1.716116$.

**Step 5: check against the general formula.** Item 1 of the Ornstein-Uhlenbeck statement predicts variance $\sigma^2(1-e^{-2\beta t})/(2\beta) = 3(1-e^{-4})/1$, which agrees. The limiting variance is $\sigma^2/(2\beta) = 3$, and $2.945053$ is already short of it by only $1.83\%$: after four time units, that is two relaxation times, the process has nearly forgotten where it started.

**Step 6: a probability.** $X_4$ is normal, so
$$
\mathbb{P}(X_4 > 3) = 1 - \Phi\!\left(\frac{3 - 0.270671}{1.716116}\right) = 1 - \Phi(1.590411) = 0.055871 .
$$
In the stationary state the same question would give $1 - \Phi(3/\sqrt3) = 1-\Phi(1.732051) = 0.041632$; the process is still slightly displaced towards its starting value $2$, which raises the probability.

**Step 7: autocovariance.** By (7), $\operatorname{cov}(X_s,X_t) = \tfrac{3}{1}\bigl(e^{-(t-s)/2} - e^{-(t+s)/2}\bigr)$ for $s \le t$. At $s=4$, $t=6$ this is $3(e^{-1}-e^{-5}) = 1.083424$, and with $\operatorname{var}(X_6) = 3(1-e^{-6}) = 2.992564$ the correlation is
$$
\frac{1.083424}{\sqrt{2.945053 \times 2.992564}} = 0.364947 ,
$$
against the stationary value $e^{-\beta\cdot 2} = e^{-1} = 0.367879$. The correlation time, the lag at which the stationary correlation falls to $e^{-1}$, is $1/\beta = 2$ time units.
:::

:::application[The Langevin equation, equipartition and a colloidal bead]{provenance=adapted src="grimmett-stirzaker-2020:§13.2, pp. 579-580"}
Grimmett and Stirzaker introduce the Ornstein-Uhlenbeck process as a repair of the Wiener process as a model of Brownian motion. The objection is physical: a Wiener path is nowhere differentiable, so it is not a path a particle of non-zero mass can follow. Their remedy is to let the *velocity*, not the position, be the fluctuating variable, with the increment of velocity made of two parts, a frictional drift proportional to the current velocity and a random kick from collisions; this is what they call the Langevin equation. The position is then recovered by integrating the velocity, and so is continuously differentiable.

In continuum form, for a particle of mass $m$ in a fluid of drag coefficient $\gamma$,

$$
m\,dV_t = -\gamma V_t\,dt + c\,dW_t ,
\qquad\text{that is}\qquad
dV_t = -\frac{\gamma}{m}V_t\,dt + \frac{c}{m}\,dW_t ,
$$

which is (8) with $\beta = \gamma/m$ and $\sigma = c/m$. The noise is additive, so there is no Itô-Stratonovich ambiguity, and the method above applies unchanged. By item 2 of the Ornstein-Uhlenbeck statement the velocity settles to

$$
V_\infty \sim N\!\left(0, \frac{\sigma^2}{2\beta}\right) = N\!\left(0, \frac{c^2}{2\gamma m}\right) .
$$

**Fixing the noise strength (this part is ours, not the source's).** Thermal equilibrium at temperature $T$ requires equipartition, $\tfrac12 m\langle V^2\rangle = \tfrac12 k_BT$, so $\langle V^2\rangle = k_BT/m$. Comparing with the display above forces

$$
c^2 = 2\gamma k_B T .
$$

The strength of the random kicks is tied to the strength of the friction: the same molecular collisions cause both. This is the simplest **fluctuation-dissipation relation**, and it is a consequence of the Ornstein-Uhlenbeck variance formula plus one thermodynamic input.

**A number.** Take a silica sphere of radius $a = 0.5\,\mu\mathrm{m}$ and density $2200\,\mathrm{kg\,m^{-3}}$ in water at $T = 300\,\mathrm{K}$, with viscosity $\eta = 8.9\times10^{-4}\,\mathrm{Pa\,s}$. Then

$$
m = \tfrac43\pi a^3\rho = 1.152\times10^{-15}\,\mathrm{kg} ,
\qquad
\gamma = 6\pi\eta a = 8.388\times10^{-9}\,\mathrm{kg\,s^{-1}} ,
$$

by Stokes' law. The velocity relaxation time is

$$
\frac1\beta = \frac m\gamma = 1.373\times10^{-7}\,\mathrm{s} \approx 0.14\,\mu\mathrm{s} ,
$$

and the root-mean-square thermal velocity is

$$
\sqrt{\frac{k_BT}{m}} = \sqrt{\frac{1.380649\times10^{-23}\times 300}{1.152\times10^{-15}}}\ \mathrm{m\,s^{-1}} = 1.896\times10^{-3}\,\mathrm{m\,s^{-1}} \approx 1.9\,\mathrm{mm\,s^{-1}} .
$$

Both numbers explain why the Wiener process is nevertheless an excellent model of what a microscope sees. The velocity decorrelates in a tenth of a microsecond; on any observable timescale the position is the integral of an already-decorrelated velocity, which by :ref[The central limit theorem]{to=prob.central-limit-theorem} is approximately a Wiener process, with diffusion constant $k_BT/\gamma$. Resolving the ballistic regime below $0.14\,\mu\mathrm{s}$, and so seeing the Ornstein-Uhlenbeck velocity directly, needs an optical trap and nanosecond timing.

The evolution of the probability density of such a process is treated in :ref[The Fokker-Planck equation]{to=prob.fokker-planck}.
:::
