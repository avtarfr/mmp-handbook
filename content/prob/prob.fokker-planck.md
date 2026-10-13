---
id: prob.fokker-planck
title: The Fokker-Planck equation
kind: theorem
level: core
summary: States the forward (Fokker-Planck) and backward Kolmogorov equations satisfied by the transition density of a one-dimensional diffusion, derives each from Ito's formula - the forward equation by testing against compactly supported functions and integrating by parts, the backward equation from the martingale property of the conditional expectation - and gives the zero-flux recipe for the stationary density, which produces the Boltzmann distribution.
prereqs: [prob.stochastic-differential-equations, pde.heat-kernel, prob.ito-calculus]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§13.3 Diffusion processes, pp. 581-585: the transition density (13.3.3) of the Wiener process and its explicit Gaussian form (13.3.4), the forward and backward diffusion equations (13.3.5) and (13.3.6) for the Wiener process with the explanation that the first comes from conditioning $W(t+h)$ on $W(t)$ and the second from conditioning $W(t)$ on $W(s+h)$, the three conditions defining a diffusion through its instantaneous mean $a(t,x)$ and instantaneous variance $b(t,x)$ (a continuity condition $\\mathbb{P}(|D(t+h)-D(t)| > \\epsilon \\mid D(t)=x) = o(h)$ and the two moment conditions), the forward equation (13.3.7) and the backward equation (13.3.8) with the referral to Feller (1971), pp. 332-335, for the further technical conditions, the remark that $a$ and $b$ determine the transition density completely, and Examples (13.3.9) (Wiener process), (13.3.10) (Wiener process with drift), (13.3.11) (Ornstein-Uhlenbeck) and (13.3.12) (Feller's branching diffusion) with its forward equation (13.3.13); §13.8, Theorem (13.8.11), p. 608 (a stochastic integral of an admissible integrand is a martingale); §13.9, Theorem (13.9.2) (Ito's formula), p. 610; §13.12, Problem (13.12.4), p. 627 (the law of the Ornstein-Uhlenbeck process) and Problem (13.12.24), p. 629 (a function solves the heat equation if and only if the associated process has zero drift)"
    pages: "581-585, 608, 610, 627, 629"
    role: the definition of a diffusion by its instantaneous mean and variance; the statements of the forward and backward equations, with their hypotheses and the deferral of the remaining technical conditions; the Wiener process, the Wiener process with drift and the Ornstein-Uhlenbeck process as worked instances; Ito's formula and the martingale property of the stochastic integral, which are the two ingredients of the derivation given here; the zero-drift characterisation used in the proof of the backward equation
  - work: evans-2010
    loc: "§1.2, the catalogue of linear partial differential equations, p. 4: item 7, Kolmogorov's equation $u_t - \\sum_{i,j} a^{ij}u_{x_ix_j} + \\sum_i b^iu_{x_i} = 0$, and item 8, the Fokker-Planck equation $u_t - \\sum_{i,j}(a^{ij}u)_{x_ix_j} - \\sum_i (b^iu)_{x_i} = 0$; §7.1, pp. 349-350: the divergence and nondivergence forms (2) and (3) of a second-order operator, the definition of uniform parabolicity (4) by $\\sum_{i,j} a^{ij}(x,t)\\xi_i\\xi_j \\ge \\theta|\\xi|^2$, the reading of the second-order term as diffusion, the first-order term as transport and the zeroth-order term as creation or depletion, and the statement that the Fokker-Planck and Kolmogorov equations of diffusion theory are second-order parabolic equations"
    pages: "4, 349-350"
    role: the $n$-dimensional form of the two equations and the names used for them in the partial-differential-equations literature; the sign and normalisation convention of that literature, which differs from the probabilists' and is reconciled in a remark; the parabolicity condition, which is what the non-degeneracy of the diffusion coefficient amounts to
---

:::definition[Diffusions, transition densities, and the two operators]{provenance=adapted src="grimmett-stirzaker-2020:§13.3, pp. 581 and 583"}
Let $D = \{D(t) : t \ge 0\}$ be a process with almost surely continuous sample paths. Suppose there are functions $a(t,x)$ and $b(t,x)$ such that, for every $\epsilon > 0$,

$$
\mathbb{P}\bigl(|D(t+h) - D(t)| > \epsilon \;\big|\; D(t) = x\bigr) = o(h) ,
\tag{1}
$$
$$
\mathbb{E}\bigl(D(t+h) - D(t) \;\big|\; D(t) = x\bigr) = a(t,x)\,h + o(h) ,
\tag{2}
$$
$$
\mathbb{E}\bigl([D(t+h) - D(t)]^2 \;\big|\; D(t) = x\bigr) = b(t,x)\,h + o(h) .
\tag{3}
$$

Then $a$ is the **instantaneous mean**, or **drift**, and $b$ the **instantaneous variance** of $D$. For $s \le t$ the **transition density** is

$$
f(t,y \mid s,x) = \frac{\partial}{\partial y}\,\mathbb{P}\bigl(D(t) \le y \;\big|\; D(s) = x\bigr) ,
$$

a function of four variables: the pair $(t,y)$ is **forward** data, the pair $(s,x)$ **backward** data.

A solution of the stochastic differential equation $dX_t = \mu(t,X_t)\,dt + \sigma(t,X_t)\,dW_t$ of :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations} is such a process, with $a = \mu$ and $b = \sigma^2$; conditions (2) and (3) are the infinitesimal mean and variance of the increment read off from that equation. Condition (1) is not read off in the same way, but it holds as soon as $\mu$ and $\sigma$ are bounded, say by $K$. Split the increment as $X_{t+h}-X_t = A_h + M_h$ with $A_h = \int_t^{t+h}\mu\,dr$ and $M_h = \int_t^{t+h}\sigma\,dW$. The drift part is bounded pathwise, $|A_h| \le Kh$, so $A_h^4 \le K^4h^4$. For the Itô part, apply Itô's formula to $y \mapsto y^4$ along $M$: $M_h^4 = 4\int_0^h M_r^3\sigma\,dW + 6\int_0^hM_r^2\sigma^2\,dr$. The stochastic integral has mean zero, and the isometry gives $\mathbb{E}(M_r^2) \le K^2r$, so $\mathbb{E}(M_h^4) \le 6K^2\int_0^hK^2r\,dr = 3K^4h^2$. Since $(u+v)^4 \le 8(u^4+v^4)$, this gives $\mathbb{E}\bigl([X_{t+h}-X_t]^4 \mid X_t = x\bigr) = O(h^2)$, and Markov's inequality applied to the fourth power gives $\mathbb{P}(|X_{t+h}-X_t| > \epsilon \mid X_t = x) \le O(h^2)/\epsilon^4 = o(h)$. Associated with $(a,b)$ is the second-order differential operator

$$
(\mathcal{L}_t\,g)(x) = a(t,x)\,g'(x) + \tfrac12\,b(t,x)\,g''(x) ,
\tag{4}
$$

called the **generator**, and its formal adjoint

$$
(\mathcal{L}^{*}_t\,p)(y) = -\frac{\partial}{\partial y}\bigl[a(t,y)\,p(y)\bigr] + \frac12\frac{\partial^2}{\partial y^2}\bigl[b(t,y)\,p(y)\bigr] .
\tag{5}
$$

"Formal adjoint" means that $\int (\mathcal{L}_tg)\,p\,dy = \int g\,(\mathcal{L}^*_tp)\,dy$ for $g$ smooth and compactly supported — integration by parts, twice, with no boundary terms. The discrete-state analogue of this pair is the generator of a continuous-time chain and its transpose; see :ref[Continuous-time Markov chains]{to=prob.continuous-time-markov-chains}.
:::

:::statement[The forward and backward Kolmogorov equations]{provenance=adapted src="grimmett-stirzaker-2020:§13.3, equations (13.3.7) and (13.3.8) with the surrounding hypotheses, pp. 583-584"}
Let $D$ be a diffusion satisfying (1), (2) and (3), and suppose in addition that $D$ has the **Markov property**, so that the conditional law of $D(t)$ given the whole history up to time $s$ depends on that history only through $D(s)$; let $f(t,y\mid s,x)$ be its transition density. The Markov property is a hypothesis of both equations, not a by-product: it is what makes $f$ a function of the four variables alone, it is the route by which the source reaches (6) and (7), and it is used in Step B2 of the proof below. Subject to further technical conditions, for which Grimmett and Stirzaker refer to Feller (1971), pp. 332-335, and which they do not reproduce, $f$ satisfies the following two partial differential equations.

**Forward equation (Fokker-Planck).** A note on the name before the equation: Grimmett and Stirzaker call (6) simply the forward equation, and the words "Fokker-Planck" do not appear in their chapter on diffusions. The name is the one used in physics and in the partial-differential-equations literature, where :cite[Evans]{work=evans-2010 loc="§1.2, items 7 and 8, p. 4"} lists it as a standard linear equation alongside Kolmogorov's equation; both names are used here, for the same equation. In the forward variables, with $(s,x)$ held fixed,

$$
\frac{\partial f}{\partial t} = -\frac{\partial}{\partial y}\bigl[a(t,y)\,f\bigr] + \frac12\frac{\partial^2}{\partial y^2}\bigl[b(t,y)\,f\bigr] ,
\qquad\text{that is}\qquad
\partial_t f = \mathcal{L}^*_t f .
\tag{6}
$$

**Backward equation.** In the backward variables, with $(t,y)$ held fixed,

$$
\frac{\partial f}{\partial s} = -a(s,x)\,\frac{\partial f}{\partial x} - \frac12\,b(s,x)\,\frac{\partial^2 f}{\partial x^2} ,
\qquad\text{that is}\qquad
\partial_s f = -\mathcal{L}_s f .
\tag{7}
$$

Two consequences are worth stating separately.

1. **The pair $(a,b)$ determines everything.** The source emphasises that no further information about the distribution of an increment is needed: once the instantaneous mean and variance are known, the transition density is pinned down (subject to boundary conditions, which the source does not specify at this point). This is convenient in applications, where $a$ and $b$ are usually what the physical description supplies.
2. **The density of the process itself obeys (6).** Fix the initial state, write $p(t,y) = f(t,y\mid 0,x_0)$; then $p$ solves (6) with initial condition the point mass at $x_0$. More generally, if $D(0)$ has density $p_0$, then $p(t,\cdot) = \int f(t,\cdot\mid 0,x)p_0(x)\,dx$ solves (6) with $p(0,\cdot) = p_0$, by linearity.

**Three instances, as the source gives them.** With $a \equiv 0$, $b \equiv \sigma^2$ the process is a Wiener process and (6) is the heat equation $\partial_t f = \tfrac12\sigma^2\partial_y^2 f$, whose solution is the Gaussian transition density; see :ref[The heat kernel]{to=pde.heat-kernel}. With $a \equiv m$, $b \equiv \sigma^2$ it is a Wiener process with drift, $D(t) = \sigma W(t) + mt$. With $a(t,x) = -\beta x$, $b \equiv \sigma^2$ it is the Ornstein-Uhlenbeck process and the forward equation reads $\partial_t f = \beta\,\partial_y(yf) + \tfrac12\sigma^2\partial^2_yf$.
:::

:::idea{provenance=original}
**The two equations answer two different questions, and that is the whole content of the words "forward" and "backward".** The forward equation propagates a *distribution*: given where the process is now, where will the probability be later? The backward equation propagates an *observable*: given a payoff to be collected at a fixed future time, what is its expected value as a function of where and when you start? The first acts on densities and uses $\mathcal{L}^*$; the second acts on functions of the state and uses $\mathcal{L}$. They are adjoint because total probability is conserved.

**Both come out of Itô's formula, in one line each, once the right thing is differentiated.** Apply Itô's formula to $g(X_t)$ for a smooth compactly supported $g$ and take expectations. The stochastic integral drops out, because it is a martingale with mean zero, and what remains says
$$
\frac{d}{dt}\,\mathbb{E}\,g(X_t) = \mathbb{E}\bigl[(\mathcal{L}_tg)(X_t)\bigr] .
$$
Written out with the density this is $\int g\,\partial_tp = \int(\mathcal{L}_tg)\,p$. Move the derivatives off $g$ and onto $p$ by integrating by parts — which is legitimate precisely because $g$ has compact support — and the identity becomes $\int g\,\partial_t p = \int g\,\mathcal{L}^*_tp$ for every test function $g$. Two functions with the same integral against every test function are equal, and that is the forward equation.

**The backward equation is the statement that a conditional expectation of a fixed future quantity is a martingale.** Freeze a terminal time $t$ and a payoff $g$, and let $u(s,x)$ be the expected payoff started from $x$ at time $s$. By the tower property and the Markov property, $u(s,X_s)$ is a martingale in $s$. Apply Itô's formula to it: a martingale that is also an Itô process can have no $dt$ term, so its drift $u_s + \mathcal{L}_su$ must vanish identically. That is (7), tested against $g$.
:::

:::proof[Of the forward and backward equations]{provenance=adapted src="grimmett-stirzaker-2020:§13.9, Theorem (13.9.2), p. 610, §13.8, Theorem (13.8.11), p. 608, and §13.12, Problem (13.12.24), p. 629"}
We derive (6) and (7) for a diffusion given as the solution of $dX_t = a(t,X_t)\,dt + \sigma(t,X_t)\,dW_t$ with $b = \sigma^2$. Grimmett and Stirzaker instead obtain the equations directly from the Markov property and the moment conditions (1)-(3), deferring the technical conditions to Feller; the route below buys concreteness by assuming more, and we list the assumptions rather than hide them.

**Standing assumptions.** $a$ and $\sigma$ are continuous and bounded, with bounded continuous first and second derivatives in $x$; $X_t$ has a density $p(t,\cdot)$ for each $t > 0$, jointly continuously differentiable once in $t$ and twice in $y$, together with $a p$ and $bp$; differentiation under the integral sign in $t$ is permitted; the equation has, for every starting point $(s_0,x_0)$, a solution on $[s_0,\infty)$ with $X_{s_0} = x_0$, and that solution is a Markov process with transition density $f$; and the function $u$ of Part B below is twice continuously differentiable on $[0,t]\times\mathbb{R}$, with bounded derivatives — twice in $s$ as well as twice in $x$, because Step B3 applies the general Itô formula of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} to $u(v,X_v)$ and that formula asks for a $C^2$ function of the pair $(s,x)$; the weaker $C^{1,2}$ regularity that the equation itself delivers would do, but this handbook states Itô's formula only in the $C^2$ form. These are the sort of conditions Feller's list supplies; none of them is proved here.

---

**Part A: the forward equation.**

**Step A1: apply Itô's formula to a test function.** Let $g \in C_c^\infty(\mathbb{R})$, that is, smooth with compact support, and set $Y_t = g(X_t)$. Since $g$ does not depend on $t$, Itô's formula gives

$$
g(X_t) = g(X_0) + \int_0^t \Bigl[a(r,X_r)g'(X_r) + \tfrac12 b(r,X_r)g''(X_r)\Bigr]dr + \int_0^t \sigma(r,X_r)g'(X_r)\,dW_r .
$$

**Step A2: the stochastic integral has mean zero.** Its integrand $\sigma(r,X_r)g'(X_r)$ is adapted and bounded, because $\sigma$ is bounded by assumption and $g'$ is continuous with compact support; so $\int_0^t\mathbb{E}\bigl[(\sigma g')^2\bigr]dr < \infty$ and the integrand is admissible. By the martingale property of the Itô integral, the last term has expectation $0$ for every $t$.

**Step A3: take expectations and differentiate in $t$.** Take expectations in Step A1 and interchange $\mathbb{E}$ with $\int_0^t dr$. The interchange is Fubini's theorem, licensed because the integrand $(\mathcal{L}_rg)(X_r)$ is bounded — $a$ and $b$ are bounded by the standing assumptions and $g'$, $g''$ are continuous with compact support — and the region $[0,t]\times\Omega$ has finite measure. Writing $\mathcal{L}_r$ for the generator (4),

$$
\mathbb{E}\,g(X_t) = \mathbb{E}\,g(X_0) + \int_0^t \mathbb{E}\bigl[(\mathcal{L}_rg)(X_r)\bigr]\,dr .
$$

The integrand is bounded and continuous in $r$, so the right-hand side is differentiable in $t$ and

$$
\frac{d}{dt}\,\mathbb{E}\,g(X_t) = \mathbb{E}\bigl[(\mathcal{L}_tg)(X_t)\bigr] .
\tag{8}
$$

**Step A4: write (8) with the density.** By the definition of $p$, equation (8) says

$$
\int_{-\infty}^{\infty} g(y)\,\frac{\partial p}{\partial t}(t,y)\,dy
= \int_{-\infty}^{\infty}\Bigl[a(t,y)g'(y) + \tfrac12 b(t,y)g''(y)\Bigr]\,p(t,y)\,dy ,
$$

differentiation under the integral sign on the left being permitted by assumption.

**Step A5: move the derivatives onto $p$.** Integrate the first term on the right by parts once and the second twice. The support of $g$ is compact, so every boundary term vanishes, and we get

$$
\int g(y)\,\partial_t p\,dy
= \int g(y)\left[-\frac{\partial}{\partial y}\bigl(a(t,y)p\bigr) + \frac12\frac{\partial^2}{\partial y^2}\bigl(b(t,y)p\bigr)\right]dy
= \int g(y)\,\bigl(\mathcal{L}^*_tp\bigr)(y)\,dy .
$$

**Step A6: remove the test function.** The difference $h = \partial_tp - \mathcal{L}^*_tp$ is continuous and satisfies $\int gh = 0$ for every $g \in C_c^\infty$. If $h(y_0) \ne 0$ for some $y_0$, then by continuity $h$ keeps its sign on an interval around $y_0$, and choosing a non-negative $g$ supported in that interval and positive at $y_0$ makes $\int gh \ne 0$, a contradiction. Hence $h \equiv 0$, which is (6). Applying the argument to the conditional law given $X_s = x$ gives the same equation for $f(t,y\mid s,x)$.

---

**Part B: the backward equation.**

**Step B1: the conditional expectation of a terminal payoff.** Fix $t$ and $g \in C^\infty_c(\mathbb{R})$ and put, for $0 \le s \le t$ and **every** $x \in \mathbb{R}$,

$$
u(s,x) = \mathbb{E}\bigl(g(X_t) \mid X_s = x\bigr) = \int g(y)\,f(t,y\mid s,x)\,dy .
$$

This defines $u$ at every point of $[0,t]\times\mathbb{R}$, because the transition density is given for every starting point, not only for the points one particular trajectory visits.

**Step B2: fix a starting point and run the diffusion from it.** Fix $(s_0,x_0)$ with $0 \le s_0 < t$, and let $X$ be the solution on $[s_0,t]$ with the deterministic initial value $X_{s_0} = x_0$, which the standing assumptions provide. Put $M_v = u(v,X_v)$ for $v \in [s_0,t]$. By the Markov property, $\mathbb{E}(g(X_t)\mid\mathcal{F}_v) = u(v,X_v)$, so for $r \le v$ the tower property gives
$$
\mathbb{E}\bigl(M_v\mid\mathcal{F}_r\bigr) = \mathbb{E}\bigl(\mathbb{E}(g(X_t)\mid\mathcal{F}_v)\mid\mathcal{F}_r\bigr) = \mathbb{E}\bigl(g(X_t)\mid\mathcal{F}_r\bigr) = M_r ,
$$
that is, $M$ is a martingale on $[s_0,t]$.

**Step B3: compute its drift with Itô's formula.** On $[s_0,t]$,

$$
dM_v = \Bigl[u_s(v,X_v) + a(v,X_v)u_x(v,X_v) + \tfrac12 b(v,X_v)u_{xx}(v,X_v)\Bigr]dv + \sigma(v,X_v)u_x(v,X_v)\,dW_v .
$$

Write $\alpha_v$ for the bracket; by the standing assumptions it is bounded, and it is continuous in $v$ along almost every path.

**Step B4: the drift vanishes at the starting point.** The stochastic integral in Step B3 has a bounded adapted integrand, so it is a martingale and has mean zero. Taking expectations in Step B3 between $s_0$ and $s$, and using $\mathbb{E}M_s = \mathbb{E}M_{s_0} = u(s_0,x_0)$,
$$
\mathbb{E}\left(\frac{1}{s-s_0}\int_{s_0}^{s}\alpha_v\,dv\right) = 0 ,
\qquad s_0 < s \le t .
$$
Now let $s \downarrow s_0$. Along almost every path the average inside tends to $\alpha_{s_0}$, because $v \mapsto \alpha_v$ is continuous at $v = s_0$; and $X_{s_0} = x_0$ is deterministic, so that limit is the *number* $\bigl(u_s + au_x + \tfrac12 bu_{xx}\bigr)(s_0,x_0)$. The averages are bounded uniformly, so bounded convergence lets the limit pass through the expectation. (The source states this zero-drift criterion for the special case of the heat equation in its Problem (13.12.24).)

**Step B5: identify the equation.** Step B4 says
$$
u_s(s_0,x_0) + a(s_0,x_0)u_x(s_0,x_0) + \tfrac12 b(s_0,x_0)u_{xx}(s_0,x_0) = 0 .
$$
The point $(s_0,x_0)$ was fixed before the process was started and was arbitrary in $[0,t)\times\mathbb{R}$ — this is why Step B2 starts the diffusion afresh from each point instead of following one trajectory, which would deliver the identity only where the law of $X_{s_0}$ lives. So the identity holds at every $(s,x)$ with $s < t$, and at $s = t$ by continuity in $s$.

**Step B6: remove the test function.** Substituting $u(s,x) = \int g(y)f(t,y\mid s,x)\,dy$ and differentiating under the integral sign,

$$
\int g(y)\left[\frac{\partial f}{\partial s} + a(s,x)\frac{\partial f}{\partial x} + \tfrac12 b(s,x)\frac{\partial^2f}{\partial x^2}\right]dy = 0
$$

for every $g \in C_c^\infty$. By the argument of Step A6 the bracket vanishes, which is (7). $\square$
:::

:::remark[Where the hypotheses are used, and two conventions]{provenance=original}
**Compact support of the test function is used three times, in Steps A2, A3 and A5.** In A2 and A3 it is one half of the boundedness of $g$ and its first two derivatives, which is what makes the integrand of the stochastic integral admissible and what licenses the Fubini interchange. In A5 it is what kills the boundary terms of the integration by parts, and that is the use that shapes the statement. On a bounded interval with reflecting or absorbing barriers the boundary terms do not vanish, and (6) must be supplemented by boundary conditions; Grimmett and Stirzaker note at this point that they avoid specifying boundary conditions. Zero flux at the ends is the reflecting condition, $f = 0$ at the ends the absorbing one.

**Boundedness of $\sigma$ and the compact support of $g'$ are used in Step A2** to put the integrand in the admissible class, so that the stochastic integral is a martingale and not merely a local martingale. Without this the mean of the last term in Step A1 need not be zero, and (8) fails.

**The continuity of the drift $\alpha$ at the starting time is used in Step B4.** The zero-drift conclusion is read off from a limit of averages over $[s_0,s]$ as $s \downarrow s_0$, so $v \mapsto \alpha_v$ must be right-continuous at $v = s_0$; it is, because $u$ has continuous derivatives, $a$ and $b$ are continuous, and $X$ has continuous paths. For merely measurable coefficients one gets the identity only for almost every $s$, which is enough for (7) to hold almost everywhere but not pointwise.

**Starting the process afresh from each fixed point is what lets Step B5 reach every $x$.** Had we followed one trajectory, Step B4 would give the identity at the random points $(r,X_r)$, that is, on the support of the law of $X_r$, and continuity would extend it only to the closure of that support. Nothing here makes that support the whole line — the next paragraph points out that $b$ may vanish, and then the law of $X_r$ can be confined to part of the line. Fixing $(s_0,x_0)$ in advance avoids the question.

**Non-degeneracy of $b$ is not needed for the derivation but is needed for the equations to behave like diffusion equations.** In the language of :ref[The heat kernel]{to=pde.heat-kernel} and of :cite[Evans]{work=evans-2010 loc="§7.1, equations (2)-(4), pp. 349-350"}, the operator $\partial_t - \mathcal{L}$ is uniformly parabolic exactly when $\tfrac12 b(t,x) \ge \theta > 0$ for some constant $\theta$. Where $b$ vanishes the equation degenerates: for Feller's branching diffusion, $a(t,x) = \alpha x$ and $b(t,x) = \beta x$ (Example (13.3.12) of the source, which calls the two constants $a$ and $b$; those letters are already spoken for here, as the instantaneous mean and variance, so we write $\alpha$ and $\beta$ for them), $b$ vanishes at the origin, which is exactly the absorbing state of the branching process, and no smoothing occurs there.

**Two sign conventions, and the dictionary between them.** The partial-differential-equations literature writes the same pair of equations with different letters and a different sign. :cite[Evans]{work=evans-2010 loc="§1.2, items 7 and 8, p. 4"} lists, among the standard linear equations, Kolmogorov's equation
$$
u_t - \sum_{i,j} a^{ij}u_{x_ix_j} + \sum_i b^iu_{x_i} = 0
$$
and the Fokker-Planck equation
$$
u_t - \sum_{i,j}\bigl(a^{ij}u\bigr)_{x_ix_j} - \sum_i\bigl(b^iu\bigr)_{x_i} = 0 .
$$
In one dimension these become $u_t = a\,u_{xx} - b\,u_x$ and $u_t = (au)_{xx} + (bu)_x$. Comparing the second with (6) gives the dictionary

$$
a^{\text{Evans}} = \tfrac12\,b^{\text{G\&S}} , \qquad b^{\text{Evans}} = -\,a^{\text{G\&S}} ,
$$

so that Evans's first-order coefficient is the *negative* of the probabilists' drift, and his second-order coefficient is *half* the instantaneous variance. With that substitution his Kolmogorov equation is (7) run forward in time, $\tau = -s$. The two sources agree; only the normalisation differs. Everything in this unit follows the probabilists' convention of (6) and (7). The $n$-dimensional forms are Evans's as displayed, with $a^{ij} = \tfrac12\sigma\sigma^{\mathsf T}$ built from the diffusion matrix.
:::

:::method[Finding a stationary density]{provenance=original}
Suppose $a$ and $b$ do not depend on $t$ and $b > 0$. A **stationary density** is a probability density $p_\infty$ with $\mathcal{L}^*p_\infty = 0$; a process started from it has the same law at every time.

1. **Write the forward equation as a conservation law.** Define the **probability flux**
   $$
   J(y) = a(y)p(y) - \tfrac12\frac{d}{dy}\bigl[b(y)p(y)\bigr] ,
   $$
   so that (6) reads $\partial_tp = -\partial_yJ$. A stationary density therefore has $J$ constant in $y$.
2. **Set the constant to zero** when the state space is the whole line, $p$ is to be integrable, and
   $$
   a(y)p(y) \to 0 \quad\text{and}\quad b(y)p(y) \to 0 \qquad (y \to \pm\infty) .
   $$
   Suppose $J \equiv c$. Then $\tfrac12(bp)' = ap - J = ap - c \to -c$, so a non-zero $c$ would force $bp$ to grow linearly, contradicting $bp \to 0$. Hence $c = 0$. (On a finite interval with a current driven through it, keep the constant; that is the non-equilibrium case.)

   The decay hypothesis, not boundedness of $a$ and $b$, is what the argument needs. When $a$ and $b$ *are* bounded it is automatic, since an integrable $p$ with integrable derivative has limits at $\pm\infty$ and those limits must be $0$. When they are not — the Ornstein-Uhlenbeck drift $a(y) = -\beta y$ of step 5 is unbounded — it has to be checked on the candidate density produced by step 3, and there it holds, because that density decays like a Gaussian and so kills any polynomial factor.
3. **Solve the first-order equation $J \equiv 0$.** Put $q = bp$. Then $\tfrac12 q' = (a/b)\,q$, a separable linear equation, so
   $$
   q(y) = C\exp\left(\int^y \frac{2a(z)}{b(z)}\,dz\right) ,
   \qquad\text{hence}\qquad
   p_\infty(y) = \frac{C}{b(y)}\exp\left(\int^y\frac{2a(z)}{b(z)}\,dz\right) .
   \tag{9}
   $$
4. **Normalise.** Fix $C$ by $\int p_\infty = 1$. If the integral diverges there is no stationary density, and that is the correct answer: a Wiener process with or without drift has none.
5. **Check against a known case.** For the Ornstein-Uhlenbeck process, $a = -\beta y$ and $b = \sigma^2$, the exponent is $-\beta y^2/\sigma^2$ and (9) gives a centred normal density of variance $\sigma^2/(2\beta)$, matching the limit law quoted in the statement above.
6. **Recognise the Boltzmann form.** Whenever $b \equiv 2\kappa$ is constant and $a = -V'$ is a gradient, (9) collapses to
   $$
   p_\infty(y) = \frac1Z\,e^{-V(y)/\kappa} ,
   $$
   with $Z$ the normalising constant. The letter $\kappa$ is used here, not $D$, because $D$ already names the process. The next block identifies $\kappa$ with $k_BT$ divided by the friction, and the exponent with the Boltzmann factor.
:::

:::example[A Wiener process with drift, from the equation]{provenance=original}
Take $a \equiv m$ and $b \equiv \sigma^2$, both constant, with $D(0) = 0$. We solve the forward equation rather than quoting the process.

**Step 1: the equation.** By (6), with $a$ and $b$ constant the derivatives pass through:
$$
\frac{\partial p}{\partial t} = -m\,\frac{\partial p}{\partial y} + \frac{\sigma^2}{2}\,\frac{\partial^2 p}{\partial y^2} ,
\qquad p(0,\cdot) = \delta_0 .
$$

**Step 2: remove the drift by moving with it.** Put $z = y - mt$ and $\tilde p(t,z) = p(t,z+mt)$. By the chain rule $\partial_t\tilde p = \partial_tp + m\,\partial_yp$, so the first-order term cancels and
$$
\frac{\partial\tilde p}{\partial t} = \frac{\sigma^2}{2}\frac{\partial^2\tilde p}{\partial z^2} ,
$$
the heat equation with diffusivity $\kappa = \sigma^2/2$.

**Step 3: quote the heat kernel.** By :ref[The heat kernel]{to=pde.heat-kernel}, the solution from a point mass at the origin is $\tilde p(t,z) = (4\pi\kappa t)^{-1/2}e^{-z^2/(4\kappa t)}$. With $\kappa = \sigma^2/2$ this is $(2\pi\sigma^2t)^{-1/2}\exp\bigl(-z^2/(2\sigma^2t)\bigr)$.

**Step 4: transform back.**
$$
p(t,y) = \frac{1}{\sqrt{2\pi\sigma^2t}}\exp\left(-\frac{(y-mt)^2}{2\sigma^2 t}\right) ,
$$
that is, $D(t) \sim N(mt,\ \sigma^2t)$ — which is the law of $\sigma W(t) + mt$, as the source records in its Example (13.3.10). Substituting this $p$ back into the equation of Step 1 confirms it. Writing $u = y - mt$, one finds $\partial_yp = -p\,u/(\sigma^2t)$ and $\partial_y^2p = p\bigl[u^2/(\sigma^4t^2) - 1/(\sigma^2t)\bigr]$, while differentiating in $t$ (remembering that $u$ depends on $t$) gives the same thing: both sides equal
$$
p\left[\frac{mu}{\sigma^2 t} + \frac{u^2}{2\sigma^2t^2} - \frac{1}{2t}\right] .
$$

**Step 5: no stationary density.** Run the method: $a/b = m/\sigma^2$ is constant, so (9) gives $p_\infty \propto e^{2my/\sigma^2}$, which is not integrable for any $m$, including $m = 0$. There is no stationary density, as there should not be: the process wanders off.

**Step 6: a number.** Take $m = 0.8$ and $\sigma^2 = 0.25$ in their respective units. At $t = 4$ the mean is $mt = 3.2$ and the variance is $\sigma^2t = 1.0$, so
$$
\mathbb{P}\bigl(D(4) > 5\bigr) = 1 - \Phi\!\left(\frac{5 - 3.2}{1.0}\right) = 1 - \Phi(1.8) = 0.035930 .
$$
:::

:::application[Boltzmann statistics and a bistable colloid]{provenance=original}
An overdamped particle at position $X$ in a potential $U$, in a fluid of friction coefficient $\gamma$ at temperature $T$, obeys the Smoluchowski equation: the drift is the force divided by the friction and the diffusion constant is $\kappa = k_BT/\gamma$, so

$$
dX_t = -\frac{U'(X_t)}{\gamma}\,dt + \sqrt{2\kappa}\,dW_t ,
\qquad
a(y) = -\frac{U'(y)}{\gamma} ,\quad b(y) = 2\kappa .
$$

The forward equation is $\partial_tp = \partial_y\bigl[(U'/\gamma)p + \kappa\,\partial_yp\bigr]$, whose bracket is minus the flux: the first term is the drift down the potential, the second is Fick diffusion. Step 6 of the method applies with $V = U/\gamma$ and gives

$$
p_\infty(y) = \frac1Z\exp\left(-\frac{U(y)}{\gamma \kappa}\right) = \frac1Z\exp\left(-\frac{U(y)}{k_BT}\right) ,
$$

the Boltzmann distribution, once $\kappa = k_BT/\gamma$ is inserted. This is worth pausing on: equilibrium statistical mechanics is here a one-line consequence of the stationary Fokker-Planck equation plus the Einstein relation between diffusion and mobility. It is also a consistency check on that relation — any other choice of $\kappa$ would give the wrong equilibrium.

**A bistable trap, with numbers.** A colloidal bead in a double optical trap sees, in reduced units, the potential

$$
U(y) = y^4 - 2y^2 ,
$$

with minima at $y = \pm1$ of depth $U(\pm1) = -1$ and a barrier at $y = 0$ of height $1$. Take $\gamma\kappa = k_BT = 0.25$, that is a barrier of four times the thermal energy. Then $p_\infty(y) = Z^{-1}e^{-4(y^4-2y^2)}$ with, by numerical quadrature, $Z = 51.7502$.

- **Barrier suppression.** $\dfrac{p_\infty(0)}{p_\infty(1)} = e^{-[U(0)-U(1)]/(\gamma\kappa)} = e^{-4} = 0.018316$: the bead is found at the barrier about one fiftieth as often as at a minimum.
- **Occupation of the barrier region.** $\mathbb{P}\bigl(|X| < 0.5\bigr) = Z^{-1}\int_{-0.5}^{0.5}e^{-4(y^4-2y^2)}\,dy = 0.041655$, so the bead spends about $4\%$ of its time within half a unit of the barrier top, and the rest in the two wells.
- **Mean square displacement.** $\mathbb{E}\bigl(X^2\bigr) = 0.917671$ in the stationary state, close to the $1$ it would be if the bead sat exactly in one well or the other.
- **Symmetry.** $\mathbb{P}(X > 0) = \tfrac12$ exactly, by the evenness of $U$.

The last point is the one to be careful with in practice. The stationary density is symmetric, but a single experimental run of finite length is not: the bead sits in one well for a long time, hops, and sits in the other. The time between hops grows like $e^{\Delta U/(k_BT)}$ — Kramers' law, which the stationary density alone does not give, since it is a statement about first passage rather than about the equilibrium distribution. With the barrier only four thermal units high the hops are frequent enough to see; at ten thermal units they are not, and the measured histogram over any feasible run would be one well, not two.
:::
