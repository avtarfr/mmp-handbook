---
id: pde.heat-maximum-principle
title: Maximum principle for the heat equation
kind: theorem
level: core
summary: A solution of the heat equation in a bounded space-time cylinder takes its largest and smallest values on the initial slice or the lateral boundary, which gives uniqueness and a quantitative stability bound for the initial-boundary-value problem without solving it.
prereqs: [pde.classification, pde.boundary-condition-types]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§8.2, parabolic domain and parabolic boundary (Fig. 8.8), p. 483; Thm 8.2.1 with its Lemma, pp. 484–485; Thms 8.2.2–8.2.5, pp. 485–486"
    pages: "483-486"
    role: the version followed (differential inequality on a parabolic domain in n dimensions); comparison, uniqueness and continuous dependence on the data
  - work: strauss-2008
    loc: "§2.3, Maximum Principle and its proof, pp. 42–44; uniqueness, p. 44; stability in the uniform sense, Eq. (6), p. 45"
    pages: "42-45"
    role: the one-dimensional statement on a rectangle; the auxiliary function $u + \varepsilon x^2$; uniqueness for the Dirichlet problem
  - work: evans-2010
    loc: "§2.3.2, definitions of the parabolic cylinder $U_T$ and parabolic boundary $\\Gamma_T$, pp. 49–50; §2.3.3, Thm 4, pp. 52–53; Thm 5, p. 55; Thm 6, pp. 55–56"
    pages: "49-56"
    role: the parabolic cylinder and parabolic boundary; the strong maximum principle and the growth condition for the Cauchy problem, both quoted in notes
---

:::definition[Parabolic cylinder and parabolic boundary]{provenance=adapted src="evans-2010:§2.3.2, pp. 49–50; stakgold-holst-2011:§8.2, Fig. 8.8, p. 483"}
Let $U \subset \mathbb{R}^n$ be open and bounded and let $T > 0$. The **parabolic cylinder** is

$$
\Omega = U \times (0, T] ,
$$

which contains its top face $U \times \{t = T\}$ but no part of the lateral surface. Its closure is $\overline{\Omega} = \overline{U}\times[0,T]$, and the **parabolic boundary** is what the closure adds:

$$
\Gamma = \overline{\Omega} \setminus \Omega = \bigl(\overline{U}\times\{t=0\}\bigr) \cup \bigl(\partial U \times (0,T]\bigr) ,
$$

the bottom together with the lateral sides. :cite[Evans]{work=evans-2010 loc="pp. 49–50"} writes $U_T$ and $\Gamma_T$ for these and stresses that $U_T$ includes the top. For $n = 1$ and $U = (0,\ell)$ the picture is a rectangle in the $(x,t)$ plane whose parabolic boundary is its bottom edge and its two vertical edges, the top edge excluded; this is the setting of :cite[Strauss]{work=strauss-2008 loc="§2.3, p. 42"}.

A function $u$ is a **subsolution** of the heat equation with diffusivity $k > 0$ on $\Omega$ if $u$ is continuous on $\overline{\Omega}$, has continuous $u_t$ and second spatial derivatives in $\Omega$ (the derivative in $t$ at $t = T$ being the left derivative), and satisfies

$$
u_t - k\,\Delta u \le 0 \qquad\text{in } \Omega .
$$

Physically $u_t - k\Delta u$ is the rate at which heat is being supplied, so a subsolution is one with no interior source.
:::

:::statement[Weak maximum principle]{provenance=adapted src="stakgold-holst-2011:§8.2, Thm 8.2.1, p. 484; strauss-2008:§2.3, p. 42"}
Let $U \subset \mathbb{R}^n$ be open and bounded, $T > 0$, $k > 0$, and let $u$ be a subsolution of the heat equation on $\Omega = U\times(0,T]$. If $u \le M$ on the parabolic boundary $\Gamma$, then $u \le M$ on all of $\overline{\Omega}$. Equivalently,

$$
\max_{\overline{\Omega}}\, u = \max_{\Gamma}\, u .
$$

Applying this to $-u$: if $u_t - k\Delta u \ge 0$ in $\Omega$ and $u \ge m$ on $\Gamma$, then $u \ge m$ on $\overline{\Omega}$.
:::

:::note{provenance=adapted src="stakgold-holst-2011:§8.2, Thm 8.2.1, p. 484; strauss-2008:§2.3, p. 42; evans-2010:§2.3.3, Thm 4, pp. 52–53"}
The three sources state this result with different generality, and the version above is the one followed from :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 8.2.1, p. 484"}: a differential *inequality*, in $n$ space dimensions, on a parabolic domain. Their constant is $k = 1$; the diffusivity is carried along here, which changes nothing in the argument. :cite[Strauss]{work=strauss-2008 loc="p. 42"} states the *equation* case in one dimension on a rectangle, with the diffusivity $k$. :cite[Evans]{work=evans-2010 loc="Thm 4, pp. 52–53"} proves the sharper *strong* maximum principle, also for the equation: if a solution attains its maximum over $\overline{U_T}$ at a point $(x_0,t_0)$ of $U_T$ and $U$ is connected, then $u$ is constant on $\overline{U_{t_0}}$, that is, at all earlier times. Strauss remarks that the strong version is considerably harder to prove and refers the reader to Protter and Weinberger :cite{work=strauss-2008 loc="p. 43"}; Evans derives it from a mean-value property over "heat balls" :cite{work=evans-2010 loc="Thm 3, p. 50"}. Nothing below uses the strong form.
:::

:::idea{provenance=original}
At an interior maximum of a function of $x$ alone, calculus gives $\Delta u \le 0$; at an interior maximum in $t$, $u_t = 0$. Together these say $u_t - k\Delta u \ge 0$, which just fails to contradict $u_t - k\Delta u \le 0$: the inequality is not strict, so the maximum could sit inside. The repair is to add a small bump that makes the inequality strict, $v = u + \varepsilon|x|^2$, whose Laplacian is larger than $u$'s by the fixed amount $2n\varepsilon$. For $v$ the contradiction is real, so $v$ has no interior maximum; then let $\varepsilon \to 0$. The top face needs separate attention, because a maximum there is one-sided in $t$ and gives only $u_t \ge 0$ — which is still the wrong sign for the contradiction, so the argument survives.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§8.2, Lemma and Thm 8.2.1, pp. 484–485; strauss-2008:§2.3, pp. 43–44"}
**Step 1: a strict subsolution has no maximum in $\Omega$.** Suppose $v$ is continuous on $\overline{\Omega}$, has the required derivatives in $\Omega$, and satisfies the strict inequality $v_t - k\Delta v < 0$ there. Assume, for contradiction, that $v$ attains its maximum over the compact set $\overline{\Omega}$ at a point $P = (x_0, t_0) \in \Omega$, so that $x_0 \in U$ and $0 < t_0 \le T$.

- *Space.* Since $U$ is open, $x_0$ is an interior maximum of the function $x \mapsto v(x, t_0)$ on $U$. Hence for each $i$ the function of one variable $s \mapsto v(x_0 + s e_i, t_0)$ has an interior maximum at $s = 0$, so its second derivative there is $\le 0$: that is, $\partial^2 v/\partial x_i^2 \le 0$ at $P$. Summing, $\Delta v(P) \le 0$.
- *Time.* If $t_0 < T$, then $t \mapsto v(x_0, t)$ has an interior maximum at $t_0$, so $v_t(P) = 0$. If $t_0 = T$, the maximum is one-sided: $v(x_0, T) \ge v(x_0, T - \delta)$ for small $\delta > 0$, so the difference quotients $\bigl(v(x_0,T) - v(x_0, T-\delta)\bigr)/\delta$ are $\ge 0$ and their limit, the left derivative $v_t(P)$, satisfies $v_t(P) \ge 0$.

In both cases $v_t(P) \ge 0 \ge k\,\Delta v(P)$, using $k > 0$ in the second inequality, so $v_t(P) - k\Delta v(P) \ge 0$. This contradicts the strict inequality. Hence the maximum of $v$ over $\overline{\Omega}$ is attained only on $\Gamma$.

**Step 2: from $\le$ to $<$.** Let $u$ be as in the statement and let $\varepsilon > 0$. Because $U$ is bounded, there is $a > 0$ with $|x| \le a$ for all $x \in \overline{U}$. Put

$$
v(x,t) = u(x,t) + \varepsilon |x|^2 .
$$

Then $v_t = u_t$, while $\Delta|x|^2 = 2n$, so $\Delta v = \Delta u + 2n\varepsilon$ and

$$
v_t - k\,\Delta v = \bigl(u_t - k\,\Delta u\bigr) - 2nk\varepsilon \le -2nk\varepsilon < 0 ,
$$

where the first inequality is the hypothesis on $u$ and the second needs $k > 0$ and $\varepsilon > 0$. So Step 1 applies to $v$.

**Step 3: conclusion.** For any $(x,t) \in \overline{\Omega}$,

$$
u(x,t) \ \le\ v(x,t) \ \le\ \max_{\Gamma} v \ \le\ \max_{\Gamma} u + \varepsilon a^2 \ \le\ M + \varepsilon a^2 ,
$$

the first step because $\varepsilon|x|^2 \ge 0$, the second by Step 2 and Step 1, the third because $|x| \le a$ on $\Gamma$, the fourth by hypothesis. The left-hand side does not depend on $\varepsilon$, so letting $\varepsilon \to 0^+$ gives $u(x,t) \le M$. Since $\Gamma \subset \overline\Omega$, taking $M = \max_\Gamma u$ gives the displayed equality of maxima. $\square$
:::

:::statement[Comparison, uniqueness and stability]{provenance=adapted src="stakgold-holst-2011:§8.2, Thms 8.2.2–8.2.5, pp. 485–486; strauss-2008:§2.3, uniqueness p. 44 and Eq. (6) p. 45"}
Let $U$, $T$, $k$, $\Omega$, $\Gamma$ be as above, and let all functions named be continuous on $\overline{\Omega}$ with continuous $u_t$ and second spatial derivatives in $\Omega$.

1. **Two-sided bound.** If $u_t = k\Delta u$ in $\Omega$ and $m \le u \le M$ on $\Gamma$, then $m \le u \le M$ throughout $\overline{\Omega}$.
2. **Comparison.** If $u_t - k\Delta u \le v_t - k\Delta v$ in $\Omega$ and $u \le v$ on $\Gamma$, then $u \le v$ throughout $\overline{\Omega}$.
3. **Uniqueness.** For given $f$ on $\Omega$ and $g$ on $\Gamma$ there is at most one $u$ with
   $$
   u_t - k\,\Delta u = f \ \text{ in } \Omega, \qquad u = g \ \text{ on } \Gamma .
   $$
4. **Stability.** Let $u_1, u_2$ satisfy $\partial_t u_i - k\Delta u_i = f_i$ in $\Omega$, and suppose
   $$
   |f_1 - f_2| \le \alpha \ \text{ in } \Omega, \qquad |u_1 - u_2| \le \beta \ \text{ on } \Gamma .
   $$
   Then $|u_1 - u_2| \le \alpha T + \beta$ throughout $\overline{\Omega}$. In particular, for the same source ($\alpha = 0$) the solution never departs from its data by more than the data departed: $\max_{\overline\Omega}|u_1 - u_2| \le \max_{\Gamma}|u_1-u_2|$.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§8.2, proofs of Thms 8.2.3–8.2.5, pp. 485–486"}
Each part reduces to the maximum principle applied to a suitable combination.

1. The principle gives $u \le M$; applied to $-u$, which satisfies $(-u)_t - k\Delta(-u) = 0 \le 0$ and $-u \le -m$ on $\Gamma$, it gives $-u \le -m$, that is, $u \ge m$.
2. Let $w = u - v$. Then $w_t - k\Delta w \le 0$ in $\Omega$ by hypothesis, so $w$ is a subsolution, and $w \le 0$ on $\Gamma$. The principle with $M = 0$ gives $w \le 0$ on $\overline\Omega$.
3. If $u_1$ and $u_2$ both solve the problem, then each of the hypotheses of part 2 holds with $(u,v) = (u_1,u_2)$ and also with $(u,v) = (u_2,u_1)$, since the two differential expressions are equal and the two boundary functions are equal. Hence $u_1 \le u_2$ and $u_2 \le u_1$.
4. Let $w = u_1 - u_2$, so that $w_t - k\Delta w = f_1 - f_2$ in $\Omega$ and $|w| \le \beta$ on $\Gamma$. Put
   $$
   z(x,t) = w(x,t) - \alpha t - \beta .
   $$
   Then $z_t - k\Delta z = (f_1 - f_2) - \alpha \le 0$ in $\Omega$, using the bound on $f_1 - f_2$; and on $\Gamma$ we have $z \le \beta - \alpha t - \beta \le 0$, using $|w|\le\beta$ and $\alpha, t \ge 0$. By the maximum principle $z \le 0$ on $\overline\Omega$, that is, $w \le \alpha t + \beta \le \alpha T + \beta$. Repeating the argument with $-w$ in place of $w$ (which satisfies the same two bounds) gives $-w \le \alpha T + \beta$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *$U$ bounded* is used twice: to know that the continuous function $u$ attains a maximum on the compact set $\overline\Omega$ at all, and in Step 3 to bound $\varepsilon|x|^2$ by $\varepsilon a^2$ uniformly. On an unbounded domain the conclusion is false without a growth restriction; see the note below.
- *$k > 0$* enters in Step 1 (to turn $\Delta v \le 0$ into $k\Delta v \le 0$) and in Step 2 (to make $-2nk\varepsilon$ negative). It cannot be dropped: for the backward equation $u_t = -k u_{xx}$ on $0 \le x \le 1$, the function $u(x,t) = e^{\pi^2 k t}\sin \pi x$ is a solution which vanishes on the two lateral sides and has $u \le 1$ at $t=0$, yet $u(\tfrac12, T) = e^{\pi^2 k T}$, which exceeds every bound as $T$ grows. The example also shows why $\Gamma$ must contain the *bottom* and not the top: for the backward equation the natural data sit on the top.
- *The top face belongs to $\Omega$, not to $\Gamma$.* This is the only delicate point of Step 1, and it works because a one-sided maximum in $t$ gives $v_t \ge 0$, which has the same sign as the two-sided conclusion $v_t = 0$ needs. Consequently the principle, applied for every $T$, bounds the solution for all time by its initial and lateral data.
- *Only an inequality is assumed.* Nothing in the proof uses $u_t = k\Delta u$. This is what makes the comparison and stability statements cheap: each is obtained by feeding an explicitly built subsolution, such as $w - \alpha t - \beta$, into the same theorem.
- *The conclusion does not say the maximum is attained **only** on $\Gamma$.* A solution with constant data is constant, and its maximum is attained everywhere. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Remark, p. 485"} note that constant initial and boundary values up to the time of an interior extremum are the only way this can happen; that sharper statement is the strong maximum principle.
:::

:::note{provenance=adapted src="evans-2010:§2.3.3, Thm 6, pp. 55–56"}
On the whole space the principle needs a growth hypothesis. Evans proves that if $u$ is continuous on $\mathbb{R}^n\times[0,T]$, solves the heat equation (with $k=1$) in $\mathbb{R}^n\times(0,T)$, equals $g$ at $t=0$, and satisfies

$$
u(x,t) \le A\,e^{a|x|^2} \qquad (x\in\mathbb{R}^n,\ 0 \le t \le T)
$$

for some constants $A, a > 0$, then $\sup_{\mathbb{R}^n\times[0,T]} u = \sup_{\mathbb{R}^n} g$; uniqueness for the Cauchy problem follows for solutions obeying the two-sided version of that bound :cite{work=evans-2010 loc="Thms 6 and 7, pp. 55–56"}. The proof compares $u$ with the explicit solutions $\mu(T+\varepsilon-t)^{-n/2}e^{|x-y|^2/4(T+\varepsilon-t)}$ on large balls, and the restriction $4aT < 1$ it needs is removed by stepping through short time intervals. The solution built in :ref[the heat kernel]{to=pde.heat-kernel} is bounded, hence covered.
:::

:::example[A decaying mode on top of a steady state]{provenance=original}
Take $n = 1$, $U = (0,1)$, $k = 1$, and

$$
u(x,t) = x + \tfrac12\, e^{-\pi^2 t}\sin(\pi x) .
$$

*It is a solution.* $u_t = -\tfrac{\pi^2}{2}e^{-\pi^2t}\sin\pi x$ and $u_{xx} = -\tfrac{\pi^2}{2}e^{-\pi^2 t}\sin \pi x$, since $x$ is annihilated by $\partial_{xx}$; so $u_t = u_{xx}$ everywhere, and $u$ is continuous on $\overline\Omega$ for any $T$.

*Its data.* On the lateral sides $u(0,t) = 0$ and $u(1,t) = 1$; on the bottom $u(x,0) = x + \tfrac12\sin\pi x$.

*The maximum over $\Gamma$.* The bottom profile has derivative $1 + \tfrac{\pi}{2}\cos\pi x$, which vanishes where $\cos \pi x = -2/\pi$, that is at
$$
x_* = \tfrac1\pi\arccos(-2/\pi) = 0.7196679\ldots,
$$
and there $\sin \pi x_* = \sqrt{1 - 4/\pi^2}$, so the bottom maximum is
$$
M = x_* + \tfrac12\sqrt{1 - 4/\pi^2} = 1.1052568\ldots
$$
The lateral values $0$ and $1$ are smaller, so $\max_\Gamma u = M = 1.10526$ and $\min_\Gamma u = 0$.

*The theorem's prediction, checked.* Part 1 says $0 \le u \le 1.10526$ in the whole rectangle, for every $T$. Directly: $u \ge 0$ because both terms are non-negative on $[0,1]$, and $\max_x u(x,t)$ decreases from $1.10526$ at $t = 0$ to $1.04163$ at $t = 0.02$. Beyond $t_* = \pi^{-2}\ln(\pi/2) = 0.045755\ldots$ it equals exactly $1$, attained at the end $x = 1$: indeed $u_x = 1 + \tfrac{\pi}{2}e^{-\pi^2t}\cos \pi x \ge 1 - \tfrac{\pi}{2}e^{-\pi^2 t}$, which is non-negative precisely for $t \ge t_*$, so from then on $u$ increases in $x$. The maximum over the closed rectangle is therefore attained only at $t = 0$, as the strong principle would also predict. Note that $u$ is *not* monotone in $x$ at early times, and its maximum over $\Gamma$ is attained at an interior point of the bottom edge: the principle locates the maximum on the parabolic boundary, not at a corner.

*Stability in numbers.* Let $\tilde u$ solve the same equation with the initial profile changed by at most $\beta = 10^{-2}$ and the same lateral data. Part 4 with $\alpha = 0$ gives $|u - \tilde u| \le 10^{-2}$ for all $x$ and all $t$, with no computation of $\tilde u$. If instead a source of size at most $\alpha = 0.1$ is switched on, then over $T = 2$ the two solutions can differ by at most $\alpha T + \beta = 0.21$.

*What fails for the backward equation.* The function $v(x,t) = e^{\pi^2 t}\sin \pi x$ solves $v_t = -v_{xx}$ with $v = 0$ on both lateral sides and $v \le 1$ at $t = 0$; but $v(\tfrac12, 0.1) = e^{0.1\pi^2} = 2.6831$, nearly three times the bound its parabolic data would suggest. Running diffusion backwards is a different business, and the principle genuinely needs $k > 0$.
:::

:::application{provenance=original}
**Bounds before solutions.** The principle is the cheapest tool in the subject: it bounds a solution using only the data, with no formula, no series and no mesh. If a reactor wall starts between $20^\circ$ and $300^\circ\mathrm{C}$ and its two faces are held in that range, the interior stays in that range for ever, whatever the geometry. If a diffusing concentration is non-negative initially and at the boundary, and there are no sinks, it stays non-negative — which is what makes a concentration a concentration. For a model with a source $f$, part 4 converts an uncertainty $\alpha$ in the source and $\beta$ in the data into the guaranteed error bar $\alpha T + \beta$ on the answer, a model-validation statement that holds before any numerics.

**Comparison with explicit barriers.** Part 2 is used by choosing $v$ to be something one can write down. To show that a temperature in a cooled body decays at least exponentially, compare it with a multiple of the slowest decaying mode; to bound a reaction-diffusion solution, compare it with the solution of the ordinary differential equation obtained by deleting the Laplacian, which is a subsolution or supersolution according to the sign of the reaction term (see :ref[advection, diffusion and reaction]{to=pde.advection-diffusion}).

**Numerical schemes that cannot overshoot.** Discretise $u_t = k u_{xx}$ on a grid $x_j = j\,\Delta x$, $t_n = n\,\Delta t$ by the explicit scheme
$$
U_j^{n+1} = \lambda\,U_{j-1}^{n} + (1 - 2\lambda)\,U_j^{n} + \lambda\,U_{j+1}^{n},
\qquad \lambda = \frac{k\,\Delta t}{\Delta x^2} .
$$
The three weights sum to $1$, and they are all non-negative exactly when $\lambda \le \tfrac12$. In that case each new value is a weighted average of three old ones, so $\min_j U^n_j \le U^{n+1}_j \le \max_j U^n_j$: the scheme obeys a discrete maximum principle and can never manufacture a temperature outside the range of the data. For $\lambda > \tfrac12$ the middle weight is negative and the computed solution oscillates with growing amplitude. This is the same threshold that von Neumann's Fourier analysis of the scheme produces, reached here without any Fourier analysis. For copper, $k \approx 1.1\,\mathrm{cm^2/s}$, a $1\,\mathrm{mm}$ grid forces $\Delta t \le \Delta x^2/2k = 4.5\times10^{-3}\,\mathrm{s}$. See :ref[finite differences]{to=num.finite-differences} and :ref[von Neumann stability]{to=num.von-neumann-stability}.

**Uniqueness as a licence.** Part 3 is what allows the separation-of-variables series, the Green's-function integral and the finite-element approximation to be called "the" solution and compared with each other: any two of them that satisfy the same initial and boundary conditions must agree (see :ref[diffusion in bounded domains]{to=pde.heat-bounded-domains}).
:::
