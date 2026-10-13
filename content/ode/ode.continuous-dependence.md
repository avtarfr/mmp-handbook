---
id: ode.continuous-dependence
title: Dependence on initial data and Gronwall's inequality
kind: theorem
level: advanced
summary: Gronwall's inequality turns the self-referential integral bound satisfied by the gap between two solutions into an explicit exponential, giving the separation estimate $|Y(t)-Z(t)| \le |Y(t_0)-Z(t_0)|e^{K(t-t_0)}$, continuity of the flow in the initial point and in parameters, an error bound for a perturbed vector field, and the fact that a solution on a bounded maximal interval leaves every compact subset of its domain.
prereqs: [ode.existence-uniqueness, found.compactness]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "Ch. 17: §17.3 Continuous Dependence on Initial Conditions, pp. 394-397 (the separation theorem on p. 394, the corollary on continuity of the flow on p. 395, Gronwall's Inequality and its proof on pp. 395-396, and the Continuous Dependence on Parameters theorem with the $a'=0$ augmentation trick on p. 397); §17.4 Extending Solutions, pp. 397-401 (the maximal interval of agreement, the blow-up example $x'=1+x^2$, the theorem that a solution with $\\beta<\\infty$ leaves every compact set and its proof, the lemma that a locally Lipschitz field is Lipschitz on a compact set, and the theorem that nearby initial data give solutions on the same closed interval); §17.5, p. 402 (Lipschitz in $X$ for a nonautonomous field, and the bound $(\\varepsilon/K)(\\exp(K|t|)-1)$ for solutions of two nearby equations). Also §7.2-§7.3, pp. 146-147, where the escape theorem is stated for closed and bounded sets and the closed-interval continuous-dependence theorem (our part 3), with its corollary on continuity of the flow, is stated for $F$ defined on all of $\\mathbb{R}^n$"
    pages: "146-147, 394-402"
    role: every hypothesis and conclusion of the four statements here; Gronwall's inequality and the logarithmic-derivative proof route; the compactness lemma; the escape-from-compact-sets argument; the augmentation trick for parameters
  - work: hassani-2013
    loc: "§14.2, pp. 420-421: Definition 14.2.3 (Lipschitz condition on a domain $D \\subset \\mathbb{R}^2$) and Theorem 14.2.4 (Uniqueness), which states the separation bound in the two-sided scalar form $|f(x)-g(x)| \\le e^{L|x-a|}|f(a)-g(a)|$; Example 14.2.5 ($dy/dx = e^y$), where the interval of definition moves with the initial value"
    pages: "420-421"
    role: the two-sided scalar form of the separation estimate, and the observation that the maximal interval depends on the initial value
  - work: strogatz-1994
    loc: "§9.3, pp. 320-322: exponential divergence of nearby trajectories on the Lorenz attractor, the empirical law $\\lVert\\delta(t)\\rVert \\sim \\lVert\\delta_0\\rVert e^{\\lambda t}$ with $\\lambda \\approx 0.9$, and the qualifications attached to calling $\\lambda$ a Liapunov exponent"
    pages: "320-322"
    role: the measured separation rate used in the application, and the fact that the exponential growth saturates at the diameter of the attractor
---

:::definition[Lipschitz constants, maximal intervals, and the flow]{provenance=adapted src="hirsch-smale-devaney-2013:§17.2, p. 394, §17.4, pp. 397-398, and §17.5, p. 402"}
Throughout, $|\cdot|$ is the Euclidean norm on $\mathbb{R}^n$ and $O$ is an open subset of $\mathbb{R}^n$ (of $\mathbb{R}\times\mathbb{R}^n$ where a nonautonomous field is meant).

A map $F : O \to \mathbb{R}^n$ **has Lipschitz constant $K$** on $O$ if

$$
\bigl| F(X) - F(Y) \bigr| \le K\,|X - Y| \qquad \text{for all } X, Y \in O ,
$$

and is **locally Lipschitz** if every point of $O$ has a neighbourhood on which $F$ has some Lipschitz constant. A $C^1$ map is locally Lipschitz. For a nonautonomous field $F : O \to \mathbb{R}^n$ with $O \subseteq \mathbb{R}\times\mathbb{R}^n$, "$F$ is **Lipschitz in $X$** with constant $K$" means

$$
\bigl| F(t, X_1) - F(t, X_2) \bigr| \le K\,|X_1 - X_2| \qquad \text{for all } (t, X_1), (t, X_2) \in O ,
$$

with no requirement on how $F$ varies with $t$ beyond continuity.

Let $F : O \to \mathbb{R}^n$ be $C^1$ and fix $X_0 \in O$. Two solutions of $X' = F(X)$ that agree at one time agree on the whole intersection of their domains: the set where they agree is nonempty, closed by continuity, and open by the local uniqueness theorem of :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}, hence is all of the (connected) common interval. Consequently the solutions with $X(0) = X_0$ can be glued into one, and there is a largest open interval

$$
J(X_0) = \bigl(\alpha(X_0),\ \beta(X_0)\bigr) \ni 0
$$

carrying a solution with that initial value; this is the **maximal interval of existence**, and the solution on it is the **maximal solution**. The **flow** of the system is

$$
\phi(t, X) = \text{the value at time } t \text{ of the maximal solution with } \phi(0, X) = X ,
$$

defined for $X \in O$ and $t \in J(X)$.
:::

:::statement[Gronwall's inequality]{provenance=adapted src="hirsch-smale-devaney-2013:§17.3, p. 395"}
Let $u : [0, \alpha] \to \mathbb{R}$ be continuous and nonnegative, and let $C \ge 0$ and $K \ge 0$ be constants such that

$$
u(t) \ \le \ C + \int_0^{t} K\,u(s)\,ds \qquad \text{for all } t \in [0, \alpha] .
$$

Then

$$
u(t) \ \le \ C e^{Kt} \qquad \text{for all } t \in [0, \alpha] .
$$
:::

:::statement[Dependence on initial data, on the field, and the shape of the maximal interval]{provenance=adapted src="hirsch-smale-devaney-2013:§17.3, pp. 394, 397, §17.4, pp. 398, 400, and §17.5, p. 402"}
Let $O \subseteq \mathbb{R}^n$ be open.

1. **(Separation bound.)** Suppose $F : O \to \mathbb{R}^n$ has Lipschitz constant $K$ on $O$. Suppose further that each of $Y$ and $Z$ solves $X' = F(X)$ throughout the interval $[t_0, t_1]$, taking its values in $O$. Then
   $$
   \bigl| Y(t) - Z(t) \bigr| \ \le \ \bigl| Y(t_0) - Z(t_0) \bigr|\, e^{K(t - t_0)} \qquad \text{for all } t \in [t_0, t_1] .
   $$

2. **(A bounded maximal interval forces escape.)** Suppose $F : O \to \mathbb{R}^n$ is $C^1$, and let $Y$ solve $X' = F(X)$ on its maximal interval $J = (\alpha, \beta)$, whose right endpoint is assumed finite, $\beta < \infty$. Then $Y$ leaves every compact subset of $O$, and does so arbitrarily late: for every compact $C \subset O$ and every $\gamma \in (\alpha, \beta)$ there is a $t \in [\gamma, \beta)$ with $Y(t) \notin C$. In particular no compact subset of $O$ holds the whole track.

3. **(Continuous dependence on the initial point, uniformly on a closed interval.)** Suppose $F : O \to \mathbb{R}^n$ is $C^1$, and suppose $Y$ solves $X' = F(X)$ at every point of a closed interval $[t_0, t_1]$, with $Y(t_0) = Y_0$. Some neighbourhood $U \subseteq \mathbb{R}^n$ of $Y_0$ and some constant $K$ then have this property: each $Z_0 \in U$ is the initial value, at time $t_0$, of a unique solution $Z$ that also survives to $t_1$, and
   $$
   \bigl| Y(t) - Z(t) \bigr| \ \le \ \bigl| Y_0 - Z_0 \bigr|\, e^{K(t - t_0)} \qquad \text{for all } t \in [t_0, t_1] .
   $$
   In particular the flow $\phi(t, X)$ of a $C^1$ field is a continuous function of $X$.

4. **(Dependence on the field and on parameters.)** Let $O \subseteq \mathbb{R}\times\mathbb{R}^n$ be open and contain $(0, X_0)$, and let $F, G : O \to \mathbb{R}^n$ be $C^1$ in $X$ and continuous in $t$, with
   $$
   \bigl| F(t, X) - G(t, X) \bigr| < \varepsilon \qquad \text{for all } (t, X) \in O .
   $$
   Write $K > 0$ for a constant with respect to which $F$ is Lipschitz in its second argument. Suppose $X(t)$ solves $X' = F(t, X)$ and $Y(t)$ solves $Y' = G(t, Y)$, both throughout an interval $J$ that contains the origin, and both passing through $X_0$ there: $X(0) = X_0 = Y(0)$. Then
   $$
   \bigl| X(t) - Y(t) \bigr| \ \le \ \frac{\varepsilon}{K}\Bigl( e^{K|t|} - 1 \Bigr) \qquad \text{for all } t \in J .
   $$
   Separately, if $X' = F_a(X)$ is a system whose field is continuously differentiable in $X$ and in the parameter $a$ jointly, then its flow is continuous in $a$ as well as in $X$.

Hirsch, Smale and Devaney state part 4 with the factor $\varepsilon/K$ and do not say that $K$ is positive; since that quotient needs it, we carry $K > 0$ in the hypotheses. They also state part 1 with $\exp(K(t - t_0))$, that is, forward in time from $t_0$; see the remark below for the two-sided form.

Part 2 is printed there in the weaker form of its last sentence: given any compact $C \subset O$, *some* $t \in (\alpha, \beta)$ has $Y(t) \notin C$, with no $\gamma$ in the statement. We state the one-sided version because that is what the proof below — which is their proof — actually delivers, the track being used only on $[\gamma, \beta)$, and because the weaker version is not enough for part 3, whose proof needs the escape to happen after $t_0$. Hirsch, Smale and Devaney's own proof of part 3 invokes the theorem in the same one-sided way; the gap between their statement and their use of it is logged in `verification/discrepancies.md`.
:::

:::idea{provenance=original}
The gap between two solutions satisfies no equation anyone can solve, but it does satisfy an inequality about itself: subtracting the two integral equations and using the Lipschitz condition shows that the gap at time $t$ is at most its initial size plus $K$ times the integral of the gap up to $t$. Gronwall's inequality says that a nonnegative function trapped by such a self-referential bound can do no better than the solution of the corresponding *equation*, which is the exponential $Ce^{Kt}$. That single step yields every quantitative statement here.

The rest is bookkeeping. A perturbation of the field contributes an extra term $\varepsilon t$, which is absorbed by applying Gronwall to the shifted function $u + \varepsilon/K$ instead of to $u$. A parameter becomes an extra coordinate once the equation $a' = 0$ is appended, so dependence on parameters is dependence on initial data for a larger system. And the escape statement is a compactness argument with no inequalities in it at all: a solution confined to a compact set over the last stretch of its interval moves at bounded speed there, so it has a limit at the end of a finite maximal interval, and that limit is an interior point from which the solution can be continued — which contradicts maximality.
:::

:::proof[Gronwall's inequality]{provenance=adapted src="hirsch-smale-devaney-2013:§17.3, pp. 395-396"}
**The case $C > 0$.** Put

$$
U(t) = C + \int_0^{t} K\,u(s)\,ds \qquad (0 \le t \le \alpha) .
$$

Since $u$ is continuous, the fundamental theorem of calculus makes $U$ differentiable with $U'(t) = K u(t)$, and $U' \ge 0$ because $K \ge 0$ and $u \ge 0$. Hence $U$ is nondecreasing, so $U(t) \ge U(0) = C > 0$ on the whole interval; in particular $U$ never vanishes and $\log U$ is defined. The hypothesis is exactly $u \le U$.

Divide: for every $t$,

$$
\frac{U'(t)}{U(t)} = \frac{K\,u(t)}{U(t)} \le K ,
$$

where the inequality uses $u(t) \le U(t)$ together with $K \ge 0$ and $U(t) > 0$. The left-hand side is $(\log U)'(t)$, so integrating from $0$ to $t$ gives $\log U(t) - \log C \le Kt$. Exponentiating, $U(t) \le Ce^{Kt}$, and therefore $u(t) \le U(t) \le Ce^{Kt}$.

**The case $C = 0$.** For any $c > 0$ the hypothesis still holds with $C$ replaced by $c$, because $0 \le c$. The case already proved gives $u(t) \le c e^{Kt}$ for every $c > 0$; letting $c \downarrow 0$ gives $u(t) \le 0$, hence $u \equiv 0$, which is the asserted bound. $\square$
:::

:::proof[Part 1: the separation bound]{provenance=adapted src="hirsch-smale-devaney-2013:§17.3, p. 396"}
Write $v(t) = |Y(t) - Z(t)|$, a continuous nonnegative function on $[t_0, t_1]$. Both solutions satisfy the integral form of the equation (:ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}, step 0 of its proof), so subtracting,

$$
Y(t) - Z(t) = Y(t_0) - Z(t_0) + \int_{t_0}^{t} \Bigl[ F\bigl(Y(s)\bigr) - F\bigl(Z(s)\bigr) \Bigr]\, ds .
$$

Take norms. The triangle inequality for integrals and then the Lipschitz hypothesis on $F$ — legitimate because $Y(s)$ and $Z(s)$ lie in $O$ for every $s$, which is where $K$ is a Lipschitz constant — give

$$
v(t) \ \le \ v(t_0) + \int_{t_0}^{t} K\,v(s)\,ds \qquad (t_0 \le t \le t_1) .
$$

Now translate the clock so that Gronwall's inequality applies in the form stated. Set $u(\tau) = v(t_0 + \tau)$ for $\tau \in [0, t_1 - t_0]$; substituting $s = t_0 + \sigma$ in the integral turns the display into

$$
u(\tau) \ \le \ v(t_0) + \int_0^{\tau} K\,u(\sigma)\,d\sigma .
$$

This is the hypothesis of Gronwall's inequality with $C = v(t_0) \ge 0$, so $u(\tau) \le v(t_0)e^{K\tau}$. Reading $\tau = t - t_0$ gives the claim. $\square$
:::

:::proof[Part 2: a bounded maximal interval forces escape]{provenance=adapted src="hirsch-smale-devaney-2013:§17.4, pp. 398-399"}
Suppose the conclusion fails for some compact $C \subset O$ and some $\gamma \in (\alpha, \beta)$: that is, $Y(t) \in C$ for every $t \in [\gamma, \beta)$. We derive a contradiction with the maximality of $J = (\alpha, \beta)$. Only the late part of the track is assumed confined; what $Y$ does on $(\alpha, \gamma)$ plays no role below.

**The solution has bounded speed.** $F$ is continuous and $C$ is compact, so $M = \max_{X \in C} |F(X)|$ is finite and attained (:ref[Compactness]{to=found.compactness}). For $\gamma \le s \le t < \beta$ the track lies in $C$, so

$$
\bigl| Y(t) - Y(s) \bigr| = \left| \int_s^{t} F\bigl(Y(\sigma)\bigr)\, d\sigma \right| \le M\,(t - s) .
$$

So $Y$ is Lipschitz, hence uniformly continuous, on $[\gamma, \beta)$. Here the finiteness of $\beta$ matters: the interval has an endpoint to approach.

**It therefore has a limit at $\beta$.** Given $\eta > 0$, the display shows $|Y(t) - Y(s)| < \eta$ whenever $s, t$ are within $\eta/(M+1)$ of $\beta$, so $Y(t)$ satisfies the Cauchy criterion as $t \to \beta^-$. As $\mathbb{R}^n$ is complete the limit exists; call it $Y(\beta)$. Since $C$ is closed and contains $Y(t)$ for every $t \in [\gamma, \beta)$, the limit lies in $C$, hence in $O$.

**The extension still solves the equation.** On $[\gamma, \beta)$ the solution satisfies

$$
Y(t) = Y(\gamma) + \int_{\gamma}^{t} F\bigl(Y(s)\bigr)\, ds .
$$

The integrand is continuous on $[\gamma, \beta)$ and bounded there by $M$, so the integral converges as $t \to \beta^-$ and the identity passes to the limit:
$Y(\beta) = Y(\gamma) + \int_{\gamma}^{\beta} F(Y(s))\,ds$. The extended $Y : [\gamma, \beta] \to C$ is thus continuous and satisfies the integral equation on the closed interval, so by the fundamental theorem of calculus it is differentiable with $Y'(t) = F(Y(t))$ there, the derivative at $\beta$ being the left-hand one.

**Maximality is contradicted.** $Y(\beta)$ is a point of the open set $O$, so the local existence theorem (:ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}) supplies a solution $W$ on some $[\beta, \delta]$ with $\delta > \beta$ and $W(\beta) = Y(\beta)$. Splice: the function equal to $Y$ on $(\alpha, \beta]$ and to $W$ on $[\beta, \delta]$ is continuous, and at $\beta$ its left and right derivatives both equal $F(Y(\beta))$, so it is differentiable there and solves the equation on $(\alpha, \delta]$. That is a solution on an interval strictly larger than $J$, contradicting the assumption that $J$ is maximal. $\square$
:::

:::proof[Part 3: continuous dependence on the initial point]{provenance=adapted src="hirsch-smale-devaney-2013:§17.4, pp. 400-401"}
**A lemma: a locally Lipschitz field is Lipschitz on a compact set.** Let $F$ be locally Lipschitz on $O$ and let $C \subset O$ be compact. If no Lipschitz constant worked on $C$, then for each $m \in \mathbb{N}$ there would be points $X_m, Y_m \in C$ with

$$
\bigl| F(X_m) - F(Y_m) \bigr| > m\,|X_m - Y_m| .
$$

In particular $X_m \ne Y_m$, since otherwise the right side is $0$ and so is the left. Let $M = \max_C |F|$, finite by compactness. The display gives $|X_m - Y_m| < 2M/m \to 0$. Passing to a subsequence (compactness of $C$), we may assume $X_m \to X^*\in C$, and then $Y_m \to X^*$ as well. Because $F$ is locally Lipschitz there are a neighbourhood $O'$ of $X^*$ and a constant $K'$ with $|F(X) - F(Y)| \le K'|X - Y|$ on $O'$; for all large $m$ both $X_m$ and $Y_m$ lie in $O'$, so $|F(X_m) - F(Y_m)| \le K'|X_m - Y_m|$. Taking $m > K'$ contradicts the display, because $|X_m - Y_m| > 0$. So $F|_C$ has a Lipschitz constant.

**A compact tube around the given solution.** The track $\Gamma = \{\,Y(t) : t_0 \le t \le t_1\,\}$ is the continuous image of a compact interval, hence compact, and $\Gamma \subset O$. Some $r > 0$ has the property that every point within distance $r$ of $\Gamma$ lies in $O$: were there no such $r$, we could pick $X_m \notin O$ with $\operatorname{dist}(X_m, \Gamma) \le 1/m$; these lie in a bounded set, so a subsequence converges, necessarily to a point of the closed set $\Gamma$. But the complement of $O$ is closed, so the limit would lie outside $O$ while lying in $\Gamma \subset O$ — impossible. Fix such an $r$, put $\epsilon = r/2$, and set

$$
C = \bigl\{\, X \in \mathbb{R}^n : \operatorname{dist}(X, \Gamma) \le 2\epsilon \,\bigr\} \subseteq O ,
\qquad
W = \bigl\{\, X \in \mathbb{R}^n : \operatorname{dist}(X, \Gamma) < 2\epsilon \,\bigr\} .
$$

The set $C$ is closed and bounded, hence compact, and $W$ is open because $X \mapsto \operatorname{dist}(X, \Gamma)$ is continuous; thus $\Gamma \subset W \subseteq C \subseteq O$. Since $F$ is $C^1$ it is locally Lipschitz, so by the lemma $F$ has a Lipschitz constant $K$ on $C$, hence also on the open set $W$ — which is the shape part 1 asks for, since part 1 is stated for an open set. This $K$ depends on the whole track, not only on $Y_0$.

**Choice of the neighbourhood.** Pick $\delta > 0$ with

$$
\delta \le \tfrac{1}{2}\epsilon \qquad\text{and}\qquad \delta\, e^{K(t_1 - t_0)} \le \tfrac{1}{2}\epsilon ,
$$

and take for $U$ the open ball centred at $Y_0$ whose radius is $\delta$; since $Y_0 \in \Gamma$ and $\delta < 2\epsilon$, we have $U \subseteq W \subseteq O$. Fix $Z_0 \in U$ and let $Z$ be the maximal solution with $Z(t_0) = Z_0$, defined on $[t_0, \beta)$ to the right, where $(\alpha_Z, \beta)$ is its maximal interval.

**Bootstrap: $Z$ stays in the tube.** Write $I = [t_0, t_1] \cap [t_0, \beta)$ for the part of $[t_0, t_1]$ on which both solutions are defined; it is $[t_0, t_1]$ if $\beta > t_1$, and $[t_0, \beta)$ otherwise. Let

$$
S = \bigl\{\, \tau \in I \ :\ |Z(t) - Y(t)| \le \epsilon \text{ for all } t \in [t_0, \tau] \,\bigr\} ,
\qquad T = \sup S .
$$

The set $S$ contains $t_0$, because $|Z(t_0) - Y(t_0)| = |Z_0 - Y_0| < \delta \le \epsilon$, so $T$ is well defined; and $S$ is an interval with left endpoint $t_0$, since its defining condition at $\tau$ implies the same condition at every smaller $\tau$.

Let $t \in [t_0, T)$. Some $\tau \in S$ satisfies $t \le \tau$, so the gap is at most $\epsilon$ at every point of $[t_0, t]$. Then both solutions take their values in $W$ throughout $[t_0, t]$: $Y(s) \in \Gamma$, and $\operatorname{dist}(Z(s), \Gamma) \le |Z(s) - Y(s)| \le \epsilon < 2\epsilon$. So part 1 applies on the closed interval $[t_0, t]$ with the open set $W$ in place of $O$ and with the Lipschitz constant $K$, and it gives

$$
\bigl| Z(s) - Y(s) \bigr| \le |Z_0 - Y_0|\, e^{K(s - t_0)} < \delta\, e^{K(t_1 - t_0)} \le \tfrac{1}{2}\epsilon
\qquad (t_0 \le s \le t) ,
$$

the middle step using $|Z_0 - Y_0| < \delta$ together with $s - t_0 \le t_1 - t_0$ and $K \ge 0$.

The gap is therefore at most $\tfrac{1}{2}\epsilon$ on $[t_0, T)$, and also at $t_0$ itself, where it equals $|Z_0 - Y_0| < \delta \le \tfrac{1}{2}\epsilon$ (this covers the case $T = t_0$, where the previous display says nothing). By continuity it is then at most $\tfrac{1}{2}\epsilon$ at $T$ as well whenever $T \in I$. Suppose $T$ were not the right endpoint of $I$. Then $T \in I$, the gap at $T$ is at most $\tfrac{1}{2}\epsilon < \epsilon$, and by continuity the gap stays below $\epsilon$ on $[t_0, T + h]$ for some small $h > 0$ with $T + h \in I$; that puts $T + h$ in $S$ and contradicts $T = \sup S$. So $S$ exhausts $I$, and

$$
\bigl| Z(t) - Y(t) \bigr| \le |Z_0 - Y_0|\, e^{K(t - t_0)} \le \tfrac{1}{2}\epsilon ,
\qquad Z(t) \in W \subseteq C ,
$$

at every $t \in I$.

**$Z$ survives to $t_1$.** Suppose $\beta \le t_1$. Then $\beta < \infty$, $I = [t_0, \beta)$, and the bootstrap has just put $Z(t)$ in the compact set $C \subset O$ for every $t \in [t_0, \beta)$. Now $t_0$ lies in the maximal interval $(\alpha_Z, \beta)$ of $Z$, so part 2, applied to $Z$ with this compact set and with $\gamma = t_0$, produces a $t \in [t_0, \beta)$ with $Z(t) \notin C$ — a contradiction. This is the step that needs the one-sided form of part 2: the bootstrap controls $Z$ only after $t_0$, and nothing at all is known about its track before $t_0$, which may well leave every compact subset of $O$ backwards in time. Therefore $\beta > t_1$, so $Z$ is defined on all of $[t_0, t_1]$, it is unique there by :ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}, and the estimate above holds on $[t_0, t_1]$ in the stated form $|Y(t) - Z(t)| \le |Y_0 - Z_0|e^{K(t-t_0)}$.

**Continuity of the flow in $X$.** Given $X$ and $t \in J(X)$, apply what has just been proved to the solution $Y = \phi(\cdot, X)$ on the closed interval with endpoints $0$ and $t$. For $Z_0 \in U$ we get $\phi(t, Z_0)$ defined and

$$
\bigl| \phi(t, Z_0) - \phi(t, X) \bigr| \le |Z_0 - X|\, e^{K|t|} ,
$$

whose right-hand side tends to $0$ as $Z_0 \to X$. So $\phi$ is continuous in its second argument. $\square$
:::

:::proof[Part 4: dependence on the field and on parameters]{provenance=adapted src="hirsch-smale-devaney-2013:§17.3, p. 397, and §17.5, p. 402"}
**Forward time.** Take $t \in J$ with $t \ge 0$. Both solutions satisfy their integral equations and start at the same point $X_0$, so that term cancels on subtraction:

$$
X(t) - Y(t) = \int_0^{t} \Bigl[ F\bigl(s, X(s)\bigr) - G\bigl(s, Y(s)\bigr) \Bigr] ds .
$$

Insert and remove $F(s, Y(s))$ inside the bracket, so that one difference compares $F$ with itself at two points and the other compares the two fields at one point:

$$
\bigl| X(t) - Y(t) \bigr| \ \le \ \int_0^{t} \bigl| F(s, X(s)) - F(s, Y(s)) \bigr| ds \ + \ \int_0^{t} \bigl| F(s, Y(s)) - G(s, Y(s)) \bigr| ds .
$$

The first integrand is at most $K|X(s) - Y(s)|$ by the hypothesis that $F$ is Lipschitz in $X$ with constant $K$; the second is at most $\varepsilon$ by the hypothesis $|F - G| < \varepsilon$ on $O$. Writing $w(t) = |X(t) - Y(t)|$,

$$
w(t) \ \le \ \varepsilon t + \int_0^{t} K\,w(s)\,ds .
$$

The inhomogeneous term $\varepsilon t$ is not constant, so Gronwall's inequality does not apply to $w$ directly. Apply it instead to the shifted function $u = w + \varepsilon/K$, which is continuous and nonnegative. Substituting $w = u - \varepsilon/K$ on both sides,

$$
u(t) - \frac{\varepsilon}{K} \ \le \ \varepsilon t + \int_0^{t} K\,u(s)\,ds - \int_0^{t} \varepsilon\,ds = \varepsilon t + \int_0^{t} K\,u(s)\,ds - \varepsilon t ,
$$

and the two copies of $\varepsilon t$ cancel. This is exactly the hypothesis of Gronwall's inequality for $u$ with $C = \varepsilon/K$, so $u(t) \le (\varepsilon/K)e^{Kt}$, that is

$$
w(t) \ \le \ \frac{\varepsilon}{K}\bigl(e^{Kt} - 1\bigr) \qquad (t \ge 0) .
$$

The cancellation is where $K > 0$ is used: the shift $\varepsilon/K$ has to be a finite number.

**Backward time.** Reverse the clock. Put $\tilde X(\tau) = X(-\tau)$, $\tilde Y(\tau) = Y(-\tau)$, $\tilde F(\tau, W) = -F(-\tau, W)$ and $\tilde G(\tau, W) = -G(-\tau, W)$. By the chain rule $\tilde X' = \tilde F(\tau, \tilde X)$ and $\tilde Y' = \tilde G(\tau, \tilde Y)$, the two new fields again differ by less than $\varepsilon$, and $\tilde F$ again has Lipschitz constant $K$ in its second argument, since negation changes neither a difference's norm nor the fields' separation. The forward case applied to the tilded system gives the bound for $t \le 0$ with $|t|$ in place of $t$, which is the statement.

**Parameters.** Let $F(X, a)$ be $C^1$ in $X$ and $a$ jointly, with $a$ ranging over an open $A \subseteq \mathbb{R}^m$, and consider on the open set $O \times A \subseteq \mathbb{R}^{n+m}$ the augmented autonomous system

$$
X' = F(X, a) , \qquad a' = 0 .
$$

Its right-hand side is $C^1$, so part 3 applies to it. Its solutions are precisely the pairs $t \mapsto (\phi_a(t, X), a)$, where $\phi_a$ is the flow of the original system at parameter value $a$: the second equation freezes $a$, and the first is then the original equation. The initial point of such a solution is $(X, a)$. Hence part 3 says that $(X, a) \mapsto (\phi_a(t, X), a)$ is continuous, that is, $\phi_a(t, X)$ is continuous in $X$ and $a$ together. A parameter has been turned into an initial condition. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The Lipschitz condition carries part 1 alone.** It is the only property of $F$ used, and nothing weaker will do. For $F(x) = 3x^{2/3}$ on $\mathbb{R}$, which is continuous but not Lipschitz near $0$, the initial-value problem $x' = F(x)$, $x(0) = 0$ has both $x \equiv 0$ and $x(t) = t^3$ as solutions (:ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}). Their initial separation is $0$ and their separation at $t = 1$ is $1$, so no bound of the form $|Y_0 - Z_0|e^{Kt}$ can hold for any $K$. Continuous dependence is not a bonus attached to existence; it is attached to *uniqueness*.
- **$u \ge 0$ and $K \ge 0$ in Gronwall.** Nonnegativity of $u$ gives $U' \ge 0$, hence $U \ge C > 0$, which is what licenses dividing by $U$ and taking the logarithm. Nonnegativity of $K$ is what turns $u \le U$ into $Ku/U \le K$. With $K < 0$ the conclusion is false: take $\alpha = 1$, $u \equiv 1$, $C = 2$ and $K = -1$. The hypothesis reads $1 \le 2 - t$, true on $[0,1]$, while the asserted conclusion $1 \le 2e^{-t}$ fails for $t > \log 2 \approx 0.693$.
- **$\beta < \infty$ in part 2.** Drop it and the conclusion fails outright. The equation $x' = 0$ on $O = \mathbb{R}$ has the solution $x \equiv 1$ on the maximal interval $(-\infty, \infty)$, whose entire track $\{1\}$ sits inside the compact set $[0, 2] \subset O$: this solution leaves no compact set at any time, late or early. Finiteness of $\beta$ enters the proof at the bounded-speed step, where it is what turns the estimate $|Y(t) - Y(s)| \le M(t-s)$ into the Cauchy criterion as $t \to \beta^-$, and so produces the limit point from which the solution is continued.
- **Compactness, not boundedness, in part 2.** "Leaves every compact subset of $O$" is weaker than "blows up". On $O = (0, \infty)$ the equation $x' = -1$ with $x(0) = 1$ has maximal interval $(-\infty, 1)$ and the solution $x(t) = 1 - t$, which stays bounded as $t \to \beta^- = 1^-$ (on the whole maximal interval it is unbounded, since $x \to +\infty$ as $t \to -\infty$; what matters is the approach to the finite endpoint); it escapes every compact $C \subset O$ by running into the boundary point $0$, which is missing from $O$. Only when $O = \mathbb{R}^n$ does part 2 force $|Y(t)| \to \infty$ along a sequence.
- **The closed interval in part 3.** The interval $[t_0, t_1]$ must lie inside the maximal interval of the given solution $Y$, endpoints included. If $t_1$ is the blow-up time itself, no neighbourhood $U$ works: in the example below, $Y_0 = 1$ for $y' = y^2$ blows up at $t = 1$, and every neighbourhood of $1$ contains initial values $z_0 > 1$ whose solutions blow up at $1/z_0 < 1$.
- **$K$ is global in part 1 but manufactured in part 3.** Part 1 assumes a Lipschitz constant on all of $O$, which few interesting fields have. Part 3 assumes only $C^1$ and builds $K$ on a compact tube around the track of $Y$; this is why both $U$ and $K$ there depend on the entire solution $Y|_{[t_0,t_1]}$, not just on $Y_0$, and why the estimate degrades as $t_1$ grows.
:::

:::remark[Two-sided form, and the scalar statement]{provenance=adapted src="hassani-2013:§14.2, Theorem 14.2.4, pp. 420-421"}
Part 1 as stated runs forward from $t_0$. The same bound holds backward, by the time reversal used in the proof of part 4: $X \mapsto -F(X)$ has the same Lipschitz constant. Hassani states the scalar case in that two-sided form at once: if $f$ and $g$ both solve $y' = F(x, y)$ in a domain $D$ on which $F$ satisfies a Lipschitz condition with constant $L$, then

$$
\bigl| f(x) - g(x) \bigr| \le e^{L|x - a|}\,\bigl| f(a) - g(a) \bigr| ,
$$

from which he reads off that at most one solution curve passes through a given point of $D$ — uniqueness as the special case $f(a) = g(a)$ of continuous dependence. Our part 1 and his theorem are the same statement, written for a system and for a scalar equation respectively.

Hassani also notes, with the example $dy/dx = e^y$, that under continuity alone the interval on which a solution is defined moves with the initial value; that is the phenomenon parts 2 and 3 are built to handle, and it persists under the Lipschitz hypothesis, as the worked example here shows.
:::

:::method[Turning a Lipschitz constant into a stability estimate]{provenance=original}
To bound how far two solutions of nearby problems can drift apart over a time $T$:

1. **Write both as integral equations and subtract.** The initial values appear as a constant term, the fields inside an integral.
2. **Name a region both solutions are known to stay in** over $[t_0, t_0 + T]$: a tube of radius $\epsilon$ around a track you already know, an invariant region supplied by the physics, or a sublevel set of a conserved quantity. Everything after this is conditional on that confinement, which the bootstrap in part 3 is the general way to justify.
3. **Compute a Lipschitz constant $K$ on that region.** For $C^1$ fields on a convex region the mean value inequality gives $K = \sup \lVert DF \rVert$, the supremum of the operator norm of the Jacobian. Use the smallest region that works: $K$ sits in an exponent, so a loose $K$ is expensive.
4. **Bound the mismatch of the data.** Collect the initial-value gap $|Y_0 - Z_0|$ and, if the fields differ, a uniform bound $\varepsilon$ on $|F - G|$ over the region.
5. **Apply Gronwall.** With $v = |Y - Z|$ you will have $v(t) \le v(t_0) + \varepsilon (t - t_0) + \int_{t_0}^{t} K v$. If $\varepsilon = 0$, read off $v(t) \le v(t_0)e^{K(t-t_0)}$. Otherwise apply Gronwall to $v + \varepsilon/K$ as in the proof of part 4, giving
   $$
   v(t) \ \le \ \Bigl( v(t_0) + \frac{\varepsilon}{K} \Bigr) e^{K(t - t_0)} - \frac{\varepsilon}{K} .
   $$
6. **Invert for the design question.** To hold $v \le \eta$ out to time $T$ with $\varepsilon = 0$, start within $\eta e^{-KT}$; to hold it with $v(t_0) = 0$, keep the field error below $\eta K/(e^{KT} - 1)$.
:::

:::example[A blow-up equation: how much slack is in the bound]{provenance=original}
**(a) Two initial values.** Take $n = 1$, $O = \mathbb{R}$ and $F(y) = y^2$, which is $C^1$ and so locally Lipschitz, but has no Lipschitz constant on all of $\mathbb{R}$. Separating variables gives the maximal solutions

$$
Y(t) = \frac{1}{1 - t} \quad \bigl(Y(0) = 1\bigr) , \qquad Z(t) = \frac{11}{10 - 11\,t} \quad \Bigl(Z(0) = \tfrac{11}{10}\Bigr) .
$$

Both check directly: $Y' = (1-t)^{-2} = Y^2$ and $Z' = 121(10 - 11t)^{-2} = Z^2$. Their maximal intervals are $(-\infty, 1)$ and $(-\infty, \tfrac{10}{11})$, so the right endpoint $\beta(y_0) = 1/y_0$ moves with the initial value, and each solution leaves every compact subset of $\mathbb{R}$ as $t$ approaches it — part 2 in the simplest possible instance.

Fix the window $[t_0, t_1] = [0, \tfrac{2}{5}]$ and the open interval $O' = (-2, 2)$, on which part 1 will be applied in place of $O$. Both solutions increase on this window, and

$$
Y\bigl(\tfrac{2}{5}\bigr) = \frac{1}{1 - 2/5} = \frac{5}{3} , \qquad Z\bigl(\tfrac{2}{5}\bigr) = \frac{11}{10 - 22/5} = \frac{55}{28} ,
$$

both smaller than $2$, so both tracks lie in $[1, \tfrac{55}{28}] \subset O'$ — the containment part 1 needs, and the reason for taking $O'$ open rather than the closed interval $[-2,2]$. On $O'$ the field has Lipschitz constant $4$: for $y, z \in O'$,

$$
\bigl| y^2 - z^2 \bigr| = |y + z|\,|y - z| \le 4\,|y - z| , \qquad\text{so}\qquad K = 4 .
$$

Part 1 therefore predicts, with $|Y(0) - Z(0)| = \tfrac{1}{10}$,

$$
\bigl| Y(t) - Z(t) \bigr| \ \le \ \tfrac{1}{10}\,e^{4t} , \qquad\text{so at } t = \tfrac{2}{5}: \quad \tfrac{1}{10}\,e^{8/5} = 0.495303\ldots
$$

The true gap is

$$
Z\bigl(\tfrac{2}{5}\bigr) - Y\bigl(\tfrac{2}{5}\bigr) = \frac{55}{28} - \frac{5}{3} = \frac{165 - 140}{84} = \frac{25}{84} = 0.297619\ldots
$$

The bound holds, and is about $1.66$ times the truth: the worst case allowed by the Lipschitz constant is attained only by a field that pushes the two solutions apart at the maximal rate everywhere, which $y^2$ does only at the top of the range.

**(b) A perturbed field.** Now take $F(x) = -x$ and $G(x) = -x + \tfrac{1}{100}$ on $O = \mathbb{R}\times\mathbb{R}$, both starting from $X(0) = Y(0) = 1$. Here $F$ is Lipschitz in $x$ with $K = 1$, and $|F - G| = \tfrac{1}{100}$ identically. Part 4 asks for the strict bound $|F - G| < \varepsilon$, so apply it with $\varepsilon = \tfrac{1}{100} + \eta$ for arbitrary $\eta > 0$ and let $\eta \downarrow 0$; the conclusion is continuous in $\varepsilon$, so it holds with $\varepsilon = \tfrac{1}{100}$. The exact solutions are

$$
X(t) = e^{-t} , \qquad Y(t) = \tfrac{1}{100} + \tfrac{99}{100}\,e^{-t} ,
$$

the second because $Y' = -\tfrac{99}{100}e^{-t} = -Y + \tfrac{1}{100}$ and $Y(0) = 1$. Their gap is $Y(t) - X(t) = \tfrac{1}{100}(1 - e^{-t})$, so at $t = 1$

$$
\bigl| X(1) - Y(1) \bigr| = \tfrac{1}{100}\bigl(1 - e^{-1}\bigr) = 0.0063212\ldots ,
$$

while part 4 allows

$$
\frac{\varepsilon}{K}\bigl( e^{K} - 1 \bigr) = \tfrac{1}{100}(e - 1) = 0.0171828\ldots
$$

The ratio of the two is $(1 - e^{-1})/(e - 1) = e^{-1} = 0.367879\ldots$ exactly. The slack has a clear cause: the bound assumes the perturbation always pushes away from the unperturbed solution, whereas here the field $-x$ is contracting and pulls the two trajectories back together.
:::

:::application[Predictability horizons and the cost of a long integration]{provenance=adapted src="strogatz-1994:§9.3, pp. 320-322"}
Gronwall's inequality is the reason "the solution depends continuously on the data" is a usable engineering statement rather than a reassurance. It says that the damage done by an uncertain initial state is at worst exponential in time with rate the Lipschitz constant, and it says so with a computable constant.

**Reading the estimate as a forecast horizon.** Suppose the state of a system is known to within $\delta$ and a prediction is useful while the error stays below $\eta$. Part 1 guarantees usefulness for a time at least

$$
T = \frac{1}{K}\,\log\frac{\eta}{\delta} .
$$

The dependence on $\delta$ is logarithmic. Reducing the initial uncertainty by a factor of $1000$ — a very expensive improvement in instrumentation — buys only $\log(1000)/K$ extra units of time. This is the quantitative content of the complaint that better measurements do not buy proportionally better forecasts.

**When the bound is sharp.** For most systems the estimate is pessimistic, as in part (a) of the example above. Chaotic systems are exactly the ones where something like it is attained. On the Lorenz attractor, numerical experiment shows that a separation vector of initial length $\lVert \delta_0 \rVert$ grows as $\lVert \delta(t) \rVert \approx \lVert \delta_0 \rVert e^{\lambda t}$ with $\lambda \approx 0.9$ :cite[Strogatz, §9.3]{work=strogatz-1994 loc="pp. 320-322"}, the rate now measured rather than bounded. Taking $\lambda$ in place of $K$ and asking for $10^{6}$-fold initial accuracy to be spent down to order-one error gives a horizon of only $\log(10^6)/0.9 \approx 15.4$ time units. Strogatz is careful that the growth is not exactly exponential and must saturate once the separation reaches the diameter of the attractor, so the exponential law describes an initial transient; see :ref[Lyapunov exponents and sensitive dependence]{to=dyn.lyapunov-exponents} and :ref[The Lorenz equations]{to=dyn.lorenz-equations}.

**Model error and numerical error.** Part 4 is the same statement for an uncertainty in the equations rather than in the state. A solver integrates not $X' = F(t, X)$ but a perturbed field $G$ differing from $F$ by rounding, by a truncated force model, or by interpolation of tabulated coefficients; if $|F - G| \le \varepsilon$ over the region visited, the trajectories can differ by no more than $(\varepsilon/K)(e^{KT} - 1)$ over a time $T$. That is the characteristic shape of a global error bound for a one-step method, where $\varepsilon$ plays the role of the local error per unit step (:ref[Integrators for ODEs]{to=num.ode-integrators}). Its exponential growth in $T$, with no way to improve the exponent without improving $K$, is why long integrations of chaotic systems are reported as statistics over an ensemble rather than as single trajectories.

**Why parameter continuity matters separately.** Part 4's second half says that a model's output varies continuously with its parameters. Without it, fitting a parameter to data would be meaningless: the fitting procedure assumes that a small change in the parameter produces a small change in the predicted trajectory over the observation window, which is exactly the augmented-system statement proved above.
:::
