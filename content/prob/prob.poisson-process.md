---
id: prob.poisson-process
title: The Poisson process
kind: definition
level: core
summary: Gives the infinitesimal and interarrival definitions of the Poisson process and shows they describe the same process, derives the Poisson law of the counts and the exponential law of the gaps, proves the conditional property that fixes the number of points and leaves their positions an independent sample, and proves that superposing independent Poisson streams and independently thinning one both return Poisson processes with the obvious intensities.
prereqs: [prob.random-variables, prob.expectation-variance, prob.joint-distributions, prob.conditional-expectation, prob.generating-functions, prob.law-of-large-numbers]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§6.8(A) Birth processes and the Poisson process, pp. 276-281: Definition (6.8.1) in its three-case infinitesimal form, Theorem (6.8.2) with both of its solution methods (induction and the generating function), the arrival and interarrival times (6.8.7)-(6.8.9), Theorem (6.8.10) with its conditioning proof, the converse remark that the construction (6.8.9) from independent exponential gaps returns a Poisson process, and Theorem (6.8.11) on the conditional distribution of the arrival times; Example (6.8.28), p. 286, the characterization by stationary independent increments and unit jumps; Exercises (6.8.1) and (6.8.2), p. 287, superposition and thinning on the time axis; §6.13 Spatial Poisson processes, pp. 319-326: Definition (6.13.1) with the convention for $\\Lambda(A) = \\infty$ and the remark that it agrees with (6.8.1) when $d=1$, p. 319, Definition (6.13.4) of the non-homogeneous process with mean measure $\\Lambda$ and the Superposition theorem (6.13.5), p. 320, the dyadic-box coincidence argument and Lemma (6.13.6), p. 321, the conditional property (6.13.11) with its partition proof (13), pp. 323-324, the Colouring theorem (6.13.14) with its proof, p. 324, and the shot-noise sum over the points of a Poisson process, p. 326"
    pages: "276-282, 286-287, 319-326"
    role: both definitions of the process and the statement that they agree; the Poisson law of $N(t)$ and the two routes to it; the independence and exponential law of the interarrival times; the order-statistics property; the order-statistics proof by change of variables; the conditional property on a region and its partition proof; the statements and proofs of superposition and thinning, in the one-dimensional form as exercises and in the general form as the superposition and colouring theorems; the characterization by stationary independent increments
  - work: rhb-2006
    loc: "§30.8.2, pp. 1175-1176: the derivation of the Poisson distribution as the $n\\to\\infty$, $np\\to\\lambda$ limit of the binomial, and the alternative derivation from the differential recurrence (30.101) leading to (30.102); p. 1179, the sum of independent Poisson variables is Poisson with the summed parameters, with the worked arrival-rate example; §30.9.3, pp. 1190-1191: the exponential distribution (30.116) obtained as the law of the interval between successive events of a Poisson process, its mean $1/\\lambda$ and variance $1/\\lambda^2$, and the gamma density (30.118) for the waiting time to the $r$th event"
    pages: "1175-1176, 1179, 1190-1191"
    role: the binomial-limit picture of why the counts are Poisson; the additivity of independent Poisson variables used in the superposition proof; the physicists' route to the exponential gap law and to the gamma law of the $r$th arrival time, which the example below uses
---

:::note[Why this process and no other]{provenance=original}
A Poisson process is the mathematics of events that happen at a steady average rate and otherwise take no notice of one another: clicks on a Geiger counter, photons at a faint detector, calls at an exchange, raindrops on a tile. Three demands pin it down completely. Events are counted, never un-counted. In a short interval the chance of one event is proportional to the length of the interval, and the chance of two or more is smaller than that by an order. And what happens after a given time is unaffected by what happened before it.

Those three demands are stated below as the definition. Everything else in this unit is a consequence: the number of events in a window has a Poisson distribution, the gaps between events are independent and exponential, two independent streams merged give a third stream of the same kind, and a stream from which events are deleted by independent coin tosses is again of the same kind. The last two facts are what make the process so useful in practice, because real detectors miss particles and real signals are mixtures of sources.
:::

:::definition[The Poisson process, infinitesimally]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, Definition (6.8.1), p. 277"}
Let $\lambda > 0$. A **Poisson process with intensity** (or **rate**) $\lambda$ is a family $N = \{N(t) : t \ge 0\}$ of random variables taking values in $\{0, 1, 2, \dots\}$ such that:

1. $N(0) = 0$, and $N(s) \le N(t)$ whenever $s < t$;
2. for every $n \ge 0$, as $h \downarrow 0$,
   $$
   \mathbb{P}\bigl(N(t+h) = n+m \,\big|\, N(t) = n\bigr) =
   \begin{cases}
   \lambda h + o(h) , & m = 1 , \\[2pt]
   o(h) , & m > 1 , \\[2pt]
   1 - \lambda h + o(h) , & m = 0 ;
   \end{cases}
   $$
3. whenever $s < t$, the count $N(t) - N(s)$ of arrivals falling in $(s,t]$ is independent of everything the process did on $[0,s]$, the instants of those earlier arrivals included.

The three clauses are, in order: the process counts; it counts one at a time, at a rate that does not vary; and it has no memory. We call $N(t)$ the number of **arrivals** (or events, or counts) by time $t$. The **arrival times** and **interarrival times** are
$$
T_0 = 0 , \qquad T_n = \inf\{t : N(t) = n\} , \qquad U_n = T_{n+1} - T_n \quad (n \ge 0) ,
$$
so that $T_n = U_0 + U_1 + \cdots + U_{n-1}$ and, in the other direction, $N(t) = \max\{n : T_n \le t\}$. Each of the two descriptions therefore determines the other: to know the whole path of $N$ is to know the whole sequence $U_0, U_1, \dots$, and conversely. The second description is the one used in simulation, and it is the subject of part 2 of the statement below.
:::

:::definition[Poisson processes on a region]{provenance=adapted src="grimmett-stirzaker-2020:§6.13, Definitions (6.13.1) and (6.13.4) and the remark at (6.13.2), pp. 319-320"}
The time axis plays no special role, and for superposition and thinning it is cleaner to count points in sets. Let $d \ge 1$ and let $\lambda : \mathbb{R}^d \to \mathbb{R}$ be a non-negative measurable function whose integral
$$
\Lambda(A) \;=\; \int_A \lambda(x)\,dx , \qquad A \in \mathcal{B}^d ,
$$
over the Borel $\sigma$-field $\mathcal{B}^d$ of $\mathbb{R}^d$ is finite for every bounded $A$. A random countable subset $\Pi \subseteq \mathbb{R}^d$ is a **non-homogeneous Poisson process with intensity function** $\lambda$ if the counts $N(A) = \lvert \Pi \cap A\rvert$ satisfy:

1. $N(A)$ has the Poisson distribution with parameter $\Lambda(A)$, for every $A \in \mathcal{B}^d$, where a Poisson distribution of parameter $+\infty$ is to be read as the statement $\mathbb{P}(N(A) = \infty) = 1$. That convention is the one Grimmett and Stirzaker print on p. 319 for their constant-intensity definition; we carry it over to a varying intensity function, where they do not repeat it. It is needed because the hypothesis on $\lambda$ makes $\Lambda$ finite on bounded sets only: an unbounded $A$ may well have $\Lambda(A) = \infty$, and then $A$ holds infinitely many points almost surely;
2. $N(A_1), \dots, N(A_n)$ are independent whenever $A_1, \dots, A_n \in \mathcal{B}^d$ are disjoint.

$\Lambda$ is the **mean measure** of $\Pi$. The constant-intensity case $\lambda(x) \equiv \lambda$, in which $\Lambda(A) = \lambda\lvert A\rvert$ is $\lambda$ times the volume of $A$, is the **homogeneous** Poisson process. Grimmett and Stirzaker record that in the constant-intensity case with $d = 1$ the present definition and the previous one describe the same object: if $\Pi$ is a Poisson process on $\mathbb{R}$ with constant intensity $\lambda$ then $M(t) = N([0,t])$ satisfies the infinitesimal definition, and conversely every process satisfying the infinitesimal definition arises this way from some $\Pi$. For a genuinely varying intensity function no such comparison is available, since clause 2 of the infinitesimal definition fixes one rate $\lambda$ for all times.
:::

:::statement[The counts and the gaps]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, Theorem (6.8.2), p. 277, Theorem (6.8.10), p. 279, the converse remark and the calculation at the top of p. 280, and Theorem (6.8.11), p. 280"}
Let $N$ be a Poisson process with intensity $\lambda$, with arrival times $T_n$ and interarrival times $U_n$ as above.

1. **The counts are Poisson.** For each $t \ge 0$,
   $$
   \mathbb{P}\bigl(N(t) = j\bigr) = \frac{(\lambda t)^{j}}{j!}\,e^{-\lambda t} , \qquad j = 0, 1, 2, \dots ,
   $$
   so $\mathbb{E}N(t) = \operatorname{var}N(t) = \lambda t$.
2. **The gaps are independent and exponential.** The random variables $U_0, U_1, U_2, \dots$ are independent, each with the exponential distribution of parameter $\lambda$.
3. **The converse.** If $U_0, U_1, \dots$ are independent, each exponential with parameter $\lambda$, and $N$ is built from them by $T_n = \sum_{i<n} U_i$ and $N(t) = \max\{n : T_n \le t\}$, then $N$ is a Poisson process with intensity $\lambda$. Consequently $T_n$ has the gamma distribution $\Gamma(\lambda, n)$, with density $\lambda(\lambda x)^{n-1}e^{-\lambda x}/(n-1)!$ on $x > 0$, mean $n/\lambda$ and variance $n/\lambda^{2}$.
4. **Conditional uniformity.** Conditional on $\{N(t) = n\}$, the vector $(T_1, \dots, T_n)$ is distributed as the order statistics $V_{(1)} \le \cdots \le V_{(n)}$ of $n$ independent random variables $V_1, \dots, V_n$, each uniform on $[0, t]$.

Statements 1-3 say that the infinitesimal description and the exponential-gaps description are two presentations of one process; statement 4 says that, once the number of arrivals in a window is fixed, their positions carry no further structure.
:::

:::statement[The conditional property]{provenance=adapted src="grimmett-stirzaker-2020:§6.13, Theorem (6.13.11) and the remark following it, p. 323"}
Take $\Pi$ as in the region-based definition, with intensity function $\lambda$ and mean measure $\Lambda$, and fix a Borel set $A$ with $0 < \Lambda(A) < \infty$. Write
$$
Q(B) \;=\; \frac{\Lambda(B)}{\Lambda(A)} , \qquad B \subseteq A ,
$$
for the mean measure restricted to $A$ and normalized to total mass $1$; its density at a point $x$ of $A$ is $\lambda(x)/\Lambda(A)$. Given that $N(A) = n$, the configuration $\Pi \cap A$ is then an independent sample of size $n$ from $Q$. For a constant intensity $Q$ is uniform on $A$, so in that case one conditions on the number of points and gets $n$ positions thrown independently and uniformly into $A$.

Part 4 of the previous statement is the case $d = 1$, $A = [0,t]$, $\lambda$ constant, rewritten in terms of the arrival times; it is proved separately below, directly from parts 1 and 2, so that the one-dimensional theory does not lean on the region-based definition. The general form stated here is what the thinning proof needs, because there the intensity is allowed to vary with position.
:::

:::statement[Superposition and thinning]{provenance=adapted src="grimmett-stirzaker-2020:§6.13, Superposition theorem (6.13.5) and Colouring theorem (6.13.14), pp. 320 and 324, and §6.8, Exercises (6.8.1) and (6.8.2), p. 287"}
**Superposition.** Take two independent Poisson processes $\Pi'$ and $\Pi''$ on $\mathbb{R}^d$, with intensity functions $\lambda'$ and $\lambda''$ respectively. Their union $\Pi = \Pi' \cup \Pi''$ is then itself Poisson, with intensity function $\lambda' + \lambda''$. The same argument covers countably many independent processes with mean measures $\Lambda_i$, provided $\sum_i \Lambda_i(A) < \infty$ for every bounded $A$.

**Thinning (the colouring theorem).** Now take a single Poisson process $\Pi$ on $\mathbb{R}^d$ with intensity function $\lambda$. Give the point sitting at $x$ the colour green, with probability $\gamma(x)$, or else scarlet, with probability $\sigma(x) = 1-\gamma(x)$, and make that choice separately for each point, independently of every other choice. Writing $\Gamma$ for the green points and $\Sigma$ for the scarlet ones, the two sets $\Gamma$ and $\Sigma$ are **independent** Poisson processes, with intensity functions $\gamma(x)\lambda(x)$ and $\sigma(x)\lambda(x)$.

On the time axis these read: two independent Poisson streams of rates $\lambda$ and $\mu$ merge into a Poisson stream of rate $\lambda + \mu$; and if each arrival of a rate-$\lambda$ stream is retained with probability $p$, independently of the others, the retained arrivals form a Poisson stream of rate $\lambda p$, independent of the stream of discarded ones. Grimmett and Stirzaker set these two one-dimensional statements as exercises (flies and wasps landing on a plate; green insects in the soup) and prove the general versions as theorems.
:::

:::idea{provenance=adapted src="grimmett-stirzaker-2020:§6.8, the two solution methods for Theorem (6.8.2) and the proof of Theorem (6.8.10), pp. 277-279, and §6.13, the route of the proofs of (6.13.5) and (6.13.14), pp. 320 and 324; rhb-2006:§30.8.2, the binomial limit on p. 1175"}
**Why the counts are Poisson.** Condition on the state a short time earlier. Clause 2 of the definition says that in $(t, t+h]$ the process either stays put or moves up one, with probabilities $1 - \lambda h$ and $\lambda h$ to first order, whatever count it has reached by time $t$ — the clause is stated conditionally on that count, which is all this first argument needs of the hypotheses. That turns $p_j(t) = \mathbb{P}(N(t)=j)$ into a chain of differential equations, each coupling $p_j$ to $p_{j-1}$ only. Packing them into the generating function $G(s,t) = \mathbb{E}(s^{N(t)})$ collapses the chain to one first-order equation in $t$, whose solution $e^{\lambda t(s-1)}$ is recognisably the generating function of a Poisson variable with mean $\lambda t$. Riley, Hobson and Bence reach the same formula from the other direction, by cutting $[0,t]$ into $n$ slices each carrying one event with probability $p = \lambda t/n$ and letting $n \to \infty$; the binomial limit and the differential-equation route are two views of the same first-order bookkeeping.

**Why the gaps are exponential.** No arrival in $[0, t]$ is exactly the event $\{N(t) = 0\}$, whose probability is $e^{-\lambda t}$ by statement 1; so the first gap is exponential. For the later gaps, the point is that the event $\{U_0 = t_0\}$ is decided by what happens up to time $t_0$ while $\{U_1 > t\}$ is decided by what happens after it, and clause 3 makes these independent. Induction then peels off one gap at a time.

**Why superposition and thinning work.** Both are statements that a certain count is Poisson and that counts in disjoint sets are independent, so in both cases there are exactly two things to check. For superposition, the sum of two independent Poisson variables is Poisson with the summed parameters, and independence across disjoint sets is inherited from the two ingredients. For thinning, condition on the total count in a set: by the conditional property the points are then an independent sample from the normalized mean measure, so their colours are independent coin tosses and the counts of the two colours are jointly binomial; multiplying the binomial probability by the Poisson probability of the total makes the joint distribution factorise, and a product of two Poisson factors is exactly what independence of the two colours means.
:::

:::proof[1: the counts are Poisson]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, proof of Theorem (6.8.2), Method B, pp. 277-278; rhb-2006:§30.8.2, eqs. (30.101)-(30.102), p. 1176"}
Write $p_j(t) = \mathbb{P}(N(t) = j)$.

**Step 1: a differential-difference system.** Split the event $\{N(t+h) = j\}$ according to the value of $N(t)$, which produces the conditional probabilities $\mathbb{P}(N(t+h) = j \mid N(t) = i)$. Clause 2 of the definition is stated in exactly that conditional form, so it evaluates them directly, with no appeal to clause 3: $1 - \lambda h + o(h)$ for $j = i$, $\lambda h + o(h)$ for $j = i+1$, and $o(h)$ for $j > i+1$. Since $N$ is non-decreasing, no term with $i > j$ contributes. Hence, for $j \ge 1$,
$$
p_j(t+h) = \lambda h\, p_{j-1}(t) + (1 - \lambda h)\,p_j(t) + o(h) ,
$$
and for $j = 0$ the first term is absent, so $p_0(t+h) = (1 - \lambda h)p_0(t) + o(h)$. Subtracting $p_j(t)$, dividing by $h$ and letting $h \downarrow 0$ gives
$$
p_j'(t) = \lambda p_{j-1}(t) - \lambda p_j(t) \ (j \ge 1) , \qquad p_0'(t) = -\lambda p_0(t) ,
$$
with $p_j(0) = \delta_{j0}$ because $N(0) = 0$.

The limit just taken is one-sided, so what it delivers is the right-hand derivative of $p_j$, whereas step 2 differentiates in $t$ and solves an ordinary differential equation, which asks for the two-sided one. The gap closes because the error terms in clause 2 depend on the length $h$ of the window and not on where the window sits — the rate $\lambda$ is the same at all times, and this is the same reading of the clause that step 2 of the next proof uses. Granting that, the displayed relation holds with $t$ replaced by $t - h$ for any $t > 0$ and small $h > 0$:
$$
p_j(t) = \lambda h\, p_{j-1}(t-h) + (1-\lambda h)\,p_j(t-h) + o(h) .
$$
Read as it stands it gives $p_j(t) - p_j(t-h) \to 0$, so each $p_j$ is continuous from the left as well as from the right; divided by $h$ it then gives $\lambda p_{j-1}(t) - \lambda p_j(t)$ for the left-hand derivative too. So $p_j$ is differentiable on $(0,\infty)$ and right-differentiable at $0$, which is what step 2 uses.

**Step 2: collapse the system with a generating function.** Put $G(s,t) = \sum_{j \ge 0} p_j(t)s^{j} = \mathbb{E}\bigl(s^{N(t)}\bigr)$, which converges for $\lvert s\rvert \le 1$. Fix $r < 1$ and work on the disc $\lvert s\rvert \le r$. Multiply the $j$th equation of step 1 by $s^{j}$ and add over $j \ge 0$. Summing the left-hand sides gives $\partial G/\partial t$, and this is the one step that needs an argument, since it differentiates a power series term by term: the equations themselves bound the derivatives, $\lvert p_j'(t)\rvert \le \lambda\bigl(p_{j-1}(t) + p_j(t)\bigr) \le 2\lambda$ for every $j$ and every $t$, so on $\lvert s\rvert \le r$ the differentiated series is dominated term by term by the convergent numerical series $2\lambda\sum_j r^{j}$, with a bound independent of $t$. The differentiated series therefore converges uniformly in $t$, which is exactly the hypothesis that licenses $\sum_j p_j'(t)s^{j} = \partial G/\partial t$. On the right-hand sides, $\sum_{j\ge 1}\lambda p_{j-1}(t)s^{j}$ equals $\lambda s\,G(s,t)$ and $\sum_{j \ge 0}\lambda p_j(t)s^j$ equals $\lambda G(s,t)$, so
$$
\frac{\partial G}{\partial t} = \lambda(s-1)\,G , \qquad G(s,0) = 1 ,
$$
the boundary value being $1$ because $N(0) = 0$ almost surely. Since $r < 1$ was arbitrary, this holds for every $\lvert s \rvert < 1$.

**Step 3: solve and read off the distribution.** For fixed $s$ this is a linear first-order equation in $t$ with constant coefficient $\lambda(s-1)$, so $G(s,t) = e^{\lambda t (s-1)}$. Expanding the exponential,
$$
G(s,t) = e^{-\lambda t}\sum_{j=0}^{\infty}\frac{(\lambda t)^{j}}{j!}\,s^{j} ,
$$
and matching coefficients of $s^j$ against the definition of $G$ gives $p_j(t) = (\lambda t)^{j}e^{-\lambda t}/j!$. The mean and variance of a Poisson variable with parameter $\lambda t$ are both $\lambda t$ (see :ref[Generating functions]{to=prob.generating-functions}). $\square$

Grimmett and Stirzaker also record the slower route: solve $p_0' = -\lambda p_0$ to get $p_0(t) = e^{-\lambda t}$, feed it into the equation for $p_1$, and induct. Riley, Hobson and Bence derive the same system (their eq. (30.101)) from the switchboard picture and iterate it in that way.
:::

:::proof[2 and 3: the gaps, and the converse]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, proof of Theorem (6.8.10), p. 279, and the derivation at the top of p. 280; rhb-2006:§30.9.3, eqs. (30.116) and (30.118), pp. 1190-1191"}
**Step 1: the first gap.** The first arrival occurs after time $t$ exactly when there is no arrival in $[0,t]$, so by part 1,
$$
\mathbb{P}(U_0 > t) = \mathbb{P}\bigl(N(t) = 0\bigr) = e^{-\lambda t} , \qquad t \ge 0 ,
$$
which is the exponential law with parameter $\lambda$.

**Step 2: the second gap, given the first.** Condition on $U_0 = t_0$. By step 1 the conditioning event has probability zero, so what follows is a statement about conditional densities and the conditional probabilities computed from them, in the sense of :ref[Conditional expectation]{to=prob.conditional-expectation}: we evaluate $\mathbb{P}(U_1 > t \mid U_0 = t_0)$ as a function of $t_0$, and finding that it does not depend on $t_0$ is what independence of $U_0$ and $U_1$ means. The event $\{U_1 > t\}$ says that no arrival falls in $(t_0, t_0+t]$. The conditioning event is decided by the arrival pattern in $[0, t_0]$, and clause 3 of the definition makes the number of arrivals in $(t_0, t_0+t]$ independent of that pattern. Hence
$$
\mathbb{P}(U_1 > t \mid U_0 = t_0) = \mathbb{P}\bigl(\text{no arrival in } (t_0, t_0+t]\bigr) = e^{-\lambda t} ,
$$
the last equality because the right-hand probability does not depend on where the window sits: clause 2 refers only to the length $h$ of the window, so repeating step 1 on $(t_0, t_0+t]$ gives $e^{-\lambda t}$. The answer does not involve $t_0$, so $U_1$ is independent of $U_0$ and has the same law.

**Step 3: induction.** Suppose $U_0 = t_0, \dots, U_{n-1} = t_{n-1}$ — again a null event, and again read through the conditional densities of :ref[Conditional expectation]{to=prob.conditional-expectation} — and set $T = t_0 + \cdots + t_{n-1}$. Then $\{U_n > t\}$ is the event of no arrival in $(T, T+t]$, which by the same two reasons has probability $e^{-\lambda t}$ regardless of the conditioning values. So $U_n$ is exponential with parameter $\lambda$ and independent of $U_0, \dots, U_{n-1}$, which completes the induction. $\square$

**Step 4: the converse.** Suppose instead that we are given independent exponential gaps and define $N$ by $N(t) = \max\{n : T_n \le t\}$ with $T_n = \sum_{i<n}U_i$. Then $T_n$, a sum of $n$ independent exponential variables of parameter $\lambda$, has the gamma distribution $\Gamma(\lambda, n)$; this is the law Riley, Hobson and Bence obtain as their eq. (30.118) by asking for $r-1$ events in $[0,x]$ and one more in $[x, x+dx]$. The construction gives the identity
$$
\{N(t) \ge j\} = \{T_j \le t\} ,
$$
since having at least $j$ arrivals by time $t$ is precisely the $j$th arrival occurring by then, whence
$$
\mathbb{P}\bigl(N(t) = j\bigr) = \mathbb{P}(T_j \le t) - \mathbb{P}(T_{j+1}\le t) = \frac{(\lambda t)^{j}}{j!}e^{-\lambda t} ,
$$
by integrating the two gamma densities by parts.

**Step 5: the converse, clause 1.** $T_1 = U_0 > 0$ almost surely, so no arrival has occurred at time $0$ and $N(0) = 0$; and $\{n : T_n \le t\}$ grows with $t$, so $N$ is non-decreasing. That $N(t)$ is finite needs $T_n \to \infty$: by the strong law of large numbers (:ref[Laws of large numbers]{to=prob.law-of-large-numbers}) $T_n/n \to 1/\lambda$ almost surely, and $1/\lambda > 0$, so $T_n \to \infty$ and only finitely many arrivals fall in $[0,t]$.

**Step 6: the converse, the restart at a fixed time.** The one fact about the exponential law we need is that it forgets: for $u, v \ge 0$,
$$
\mathbb{P}(U > u+v \mid U > u) = \frac{e^{-\lambda(u+v)}}{e^{-\lambda u}} = e^{-\lambda v} ,
$$
so the unexpired part of a gap that has already lasted $u$ is again exponential with parameter $\lambda$. Now fix $t \ge 0$ and condition on the entire arrival pattern on $[0,t]$: on $N(t) = n$ and on $T_1 \in dt_1, \dots, T_n \in dt_n$ with $t_n \le t$. As at steps 2 and 3, this conditioning event has probability zero, and the $dt_k$ are the usual shorthand: the statement being proved is one about the conditional law of the gaps that follow time $t$ given the vector $(T_1, \dots, T_n)$ and the event $\{N(t) = n\}$, read through the conditional densities of :ref[Conditional expectation]{to=prob.conditional-expectation}, and its content is that this conditional law does not depend on $n$ or on the values $t_1, \dots, t_n$. Written in terms of the gaps, the conditioning event is
$$
\{U_0 \in dt_1\} \cap \{U_1 \in d(t_2-t_1)\} \cap \cdots \cap \{U_{n-1} \in d(t_n - t_{n-1})\} \cap \{U_n > t - t_n\} .
$$
It pins down $U_0, \dots, U_{n-1}$, constrains $U_n$ only through the one-sided event $\{U_n > t-t_n\}$, and says nothing whatever about $U_{n+1}, U_{n+2}, \dots$. Since the gaps are independent, two things follow: $U_{n+1}, U_{n+2}, \dots$ are untouched by the conditioning and remain independent exponentials of parameter $\lambda$; and, by the lack-of-memory calculation just made, the residual
$$
R = T_{n+1} - t = U_n - (t - t_n)
$$
is exponential with parameter $\lambda$ and independent of them. So, conditionally on the pattern on $[0,t]$, the sequence $R, U_{n+1}, U_{n+2}, \dots$ is a sequence of independent exponential variables of parameter $\lambda$.

**Step 7: the converse, clauses 3 and 2.** The arrivals after time $t$ are at $t + R$, $t + R + U_{n+1}$, and so on, so the shifted process $s \mapsto N(t+s) - N(t)$ is built from the sequence $R, U_{n+1}, \dots$ by exactly the recipe that built $N$ from $U_0, U_1, \dots$. By step 6 that sequence has the same law whatever the conditioning pattern was, so the shifted process has the law of $N$ and is independent of the arrival pattern on $[0,t]$. That is clause 3, and it also shows that the law of an increment depends only on the length of its window. Clause 2 follows: averaging over the patterns compatible with $N(t) = n$,
$$
\mathbb{P}\bigl(N(t+h) = n+m \mid N(t) = n\bigr) = \mathbb{P}\bigl(N(h) = m\bigr) = \frac{(\lambda h)^{m}}{m!}e^{-\lambda h} ,
$$
by step 4. Expanding the exponential gives $1 - \lambda h + o(h)$ for $m = 0$ and $\lambda h + o(h)$ for $m = 1$, while the whole tail $m \ge 2$ carries probability $1 - e^{-\lambda h} - \lambda h e^{-\lambda h} = \tfrac12(\lambda h)^{2} + O(h^{3}) = o(h)$. All three lines of clause 2 hold, so $N$ is a Poisson process with intensity $\lambda$. $\square$
:::

:::proof[4: conditional uniformity, and the conditional property on a region]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, proof of Theorem (6.8.11), pp. 280-281, and §6.13, proof of Theorem (6.13.11), the partition calculation (6.13.13), pp. 323-324"}
**Part 4: the arrival times, given their number.** Fix $n \ge 1$ and $t > 0$.

*Step 1: the joint density of the first $n$ arrival times.* By part 2 the gaps $U_0, \dots, U_{n-1}$ are independent exponentials of parameter $\lambda$, so their joint density is $\lambda^{n}e^{-\lambda(u_0+\cdots+u_{n-1})}$ on $(0,\infty)^{n}$. Now apply the multivariate density-transformation rule of :ref[Joint distributions and transformations]{to=prob.joint-distributions}: under a smooth bijective change of variables, the new density is the old one composed with the inverse map and divided by the modulus of the Jacobian determinant. The map $(u_0, \dots, u_{n-1}) \mapsto (t_1, \dots, t_n)$ given by $t_k = u_0 + \cdots + u_{k-1}$ is linear and triangular with $1$s on the diagonal, so its Jacobian determinant is $1$; it carries $(0,\infty)^n$ bijectively onto the ordered region $\{0 < t_1 < \cdots < t_n\}$, and it turns the sum in the exponent into $t_n$. Hence $T = (T_1, \dots, T_n)$ has density
$$
f_T(t_1, \dots, t_n) = \lambda^{n}e^{-\lambda t_n} \qquad \text{on } \{0 < t_1 < \cdots < t_n\} .
$$

*Step 2: impose the condition $N(t) = n$.* Let $C$ be a Borel subset of $\{0 < t_1 < \cdots < t_n \le t\}$. Given the values of $T$, the event $\{N(t) = n\}$ says precisely that the next gap outlasts the time remaining, $U_n > t - t_n$; and $U_n$ is independent of $U_0, \dots, U_{n-1}$, hence of $T$, so that event has conditional probability $e^{-\lambda(t-t_n)}$ given $T = (t_1, \dots, t_n)$. Integrating that conditional probability against the density of $T$, which is how a probability is recovered from a conditional probability given a continuous vector (:ref[Conditional expectation]{to=prob.conditional-expectation}),
$$
\mathbb{P}\bigl(N(t) = n, \ T \in C\bigr) = \int_C e^{-\lambda(t - t_n)}\,\lambda^{n}e^{-\lambda t_n}\,dt_1\cdots dt_n = \lambda^{n}e^{-\lambda t}\,\lvert C\rvert ,
$$
the two exponentials combining into one that no longer depends on the integration variables; $\lvert C\rvert$ is the volume of $C$ in $\mathbb{R}^{n}$.

*Step 3: divide by the probability of the condition.* By part 1, $\mathbb{P}(N(t) = n) = (\lambda t)^{n}e^{-\lambda t}/n!$, so
$$
\mathbb{P}\bigl(T \in C \mid N(t) = n\bigr) = \frac{\lambda^{n}e^{-\lambda t}\lvert C\rvert}{(\lambda t)^{n}e^{-\lambda t}/n!} = \int_C \frac{n!}{t^{n}}\,dt_1 \cdots dt_n .
$$
The conditional density of $T$ is the constant $n!/t^{n}$ on the ordered region, and $0$ off it. Note that $\lambda$ has disappeared.

*Step 4: recognize the answer.* Let $V_1, \dots, V_n$ be independent and uniform on $[0,t]$; their joint density is $t^{-n}$ on $[0,t]^{n}$. The ordered vector $(V_{(1)}, \dots, V_{(n)})$ lives on the ordered region, and each point of that region receives the mass of the $n!$ rearrangements of its coordinates, each contributing $t^{-n}$; so the order statistics have joint density $n!/t^{n}$ there. That is the density found in step 3, which proves part 4. $\square$

**The conditional property on a region.** Let $0 < \Lambda(A) < \infty$.

*Step 1: count over a partition.* Let $A_1, \dots, A_k$ be disjoint Borel sets with union $A$, and let $n_1 + \cdots + n_k = n$. The counts $N(A_i)$ are independent, each Poisson with parameter $\Lambda(A_i)$, and their sum is $N(A)$, which is Poisson with parameter $\Lambda(A) = \sum_i \Lambda(A_i)$. Dividing the joint mass function by that of the sum,
$$
\mathbb{P}\bigl(N(A_1) = n_1, \dots, N(A_k) = n_k \,\big|\, N(A) = n\bigr)
= \frac{\prod_i \Lambda(A_i)^{n_i}e^{-\Lambda(A_i)}/n_i!}{\Lambda(A)^{n}e^{-\Lambda(A)}/n!}
= \frac{n!}{n_1!\cdots n_k!}\prod_{i=1}^{k} Q(A_i)^{n_i} ,
$$
the exponential factors cancelling because the $\Lambda(A_i)$ add up to $\Lambda(A)$.

*Step 2: read the right-hand side.* It is the multinomial probability that $n$ points thrown into $A$ independently, each with law $Q$, land $n_1$ in $A_1$, ..., $n_k$ in $A_k$.

*Step 3: a classical input.* What remains is to pass from the partition probabilities of step 1 to the law of the whole configuration, and generating a $\sigma$-field is by itself not enough for that: two probability measures can agree on a generating family and differ on the $\sigma$-field it generates. The standard repair is to work with a family closed under finite intersections.

**Quoted classical input: Dynkin's $\pi$-$\lambda$ theorem.** Call a family $\mathcal{C}$ of events a **$\pi$-system** if $E, F \in \mathcal{C}$ implies $E \cap F \in \mathcal{C}$. Then (i) two probability measures that agree on a $\pi$-system agree on the $\sigma$-field it generates, and (ii) if $\mathcal{C}_1, \dots, \mathcal{C}_k$ are $\pi$-systems with $\mathbb{P}(E_1 \cap \cdots \cap E_k) = \prod_i \mathbb{P}(E_i)$ for every choice of $E_i \in \mathcal{C}_i$, then the $\sigma$-fields $\sigma(\mathcal{C}_1), \dots, \sigma(\mathcal{C}_k)$ are independent. This theorem is proved in no unit of this handbook and is not in the sources followed here; it is used, in both parts, as a quoted classical result, in the way the $\sigma$-field machinery of :ref[]{to=measure.sigma-algebras-measures} is used generally.

*Step 4: a $\pi$-system of count events.* For a Borel set $A$ write
$$
\mathcal{C}(A) \;=\; \Bigl\{\, \{N(B_1) = m_1\} \cap \cdots \cap \{N(B_r) = m_r\} \;:\; r \ge 1,\ B_1,\dots,B_r \subseteq A \text{ Borel},\ m_j \ge 0 \,\Bigr\} .
$$

(a) *It is a $\pi$-system*, by construction: an intersection of two finite intersections of events $\{N(B) = m\}$ is again a finite intersection of such events, and so is again in $\mathcal{C}(A)$ — including when it is empty, as for $\{N(B)=0\}\cap\{N(B)=1\}$.

Arbitrary Borel sets are used here, and not the cells of one partition, for a definite reason. The *cylinders* of step 1 — events $\{N(B_1)=n_1,\dots,N(B_r)=n_r\}$ in which $B_1,\dots,B_r$ are the cells of a single finite partition of $A$ — are the natural family to try, and it is tempting to argue that they are closed under intersection because two partitions have a common refinement. **That argument is wrong.** Take two partitions $\{B_1,B_2\}$ and $\{B_1',B_2'\}$ of $A$ in general position, so that all four refinement cells $B_j \cap B_k'$ carry positive mean measure. Then
$$
\{N(B_1)=1,\,N(B_2)=1\} \;\cap\; \{N(B_1')=1,\,N(B_2')=1\}
$$
is the union of exactly two cylinders over the refinement $\{B_j\cap B_k'\}$ — one point in $B_1\cap B_1'$ and one in $B_2\cap B_2'$, or one point in $B_1\cap B_2'$ and one in $B_2\cap B_1'$ — and both have positive probability, so the intersection is a union of two distinct refinement cylinders and is therefore not one of them. Passing to a common refinement makes the two generated $\sigma$-fields sit inside a third; it does not turn an intersection of cylinders into a cylinder. Rather than try to repair that route we avoid it: $\mathcal{C}(A)$ is closed under intersection by its very definition, and by (b) it generates the same $\sigma$-field.

(b) *It generates the $\sigma$-field of the configuration.* That $\sigma$-field is $\sigma\bigl(N(B) : B \subseteq A \text{ Borel}\bigr)$, and each $N(B)$ takes values in $\{0,1,2,\dots\}\cup\{\infty\}$, so it is generated by the events $\{N(B) = m\}$ alone, every one of which lies in $\mathcal{C}(A)$.

(c) *The two laws agree on $\mathcal{C}(A)$.* Fix $B_1,\dots,B_r \subseteq A$ and $m_1,\dots,m_r$, and let $\mathcal{P}$ be the finite Borel partition of $A$ that they generate: the nonempty sets $B_1^{\pm} \cap \cdots \cap B_r^{\pm}$, where $B_j^{+} = B_j$ and $B_j^{-} = A \setminus B_j$. Each $B_j$ is the union of the cells of $\mathcal{P}$ it contains, so $N(B_j) = \sum_{D \subseteq B_j} N(D)$. Under either law all $n$ points lie in $A$, so
$$
\bigcap_{j=1}^{r}\{N(B_j) = m_j\} \;=\; \biguplus\;\bigl\{ N(D) = n_D \text{ for all } D \in \mathcal{P} \bigr\} ,
$$
a **disjoint** union over the count vectors $(n_D)_{D\in\mathcal{P}}$ with $\sum_D n_D = n$ and $\sum_{D \subseteq B_j} n_D = m_j$ for each $j$. Every event in that union is of the step-1 form, and step 1 gives it the same probability under the conditioned process as under the independent $Q$-sample; summing the finitely many terms gives the same probability for the left-hand side.

By (a), (b), (c) and part (i) of the quoted theorem, the conditioned process and the independent $Q$-sample have the same law. $\square$

In the constant-intensity case $Q(B) = \lvert B\rvert/\lvert A\rvert$ is the uniform distribution on $A$, which for $d=1$ and $A = [0,t]$ returns part 4 once the sample is written in increasing order.
:::

:::proof[Superposition and thinning]{provenance=adapted src="grimmett-stirzaker-2020:§6.13, proof of the Superposition theorem (6.13.5), p. 320, and proof of the Colouring theorem (6.13.14), p. 324; rhb-2006:p. 1179, additivity of independent Poisson variables"}
**Superposition.** Fix $A \in \mathcal{B}^d$ and put $N'(A) = \lvert\Pi'\cap A\rvert$, $N''(A) = \lvert\Pi''\cap A\rvert$. These are independent, and Poisson with parameters $\Lambda'(A)$ and $\Lambda''(A)$.

*Step 1: the count in one set.* The sum of two independent Poisson variables is Poisson with the sum of the parameters — the generating functions multiply, $e^{\Lambda'(A)(s-1)}e^{\Lambda''(A)(s-1)} = e^{(\Lambda'(A)+\Lambda''(A))(s-1)}$ — so $S(A) = N'(A) + N''(A)$ is Poisson with parameter $\Lambda'(A)+\Lambda''(A) = \int_A(\lambda'+\lambda'')$. This is the fact Riley, Hobson and Bence state for sums of independent Poisson variables.

*Step 2: independence across disjoint sets.* If $A_1, A_2, \dots$ are disjoint then the families $\{N'(A_i)\}$ and $\{N''(A_i)\}$ each consist of independent variables, and the two families are independent of each other; so the sums $S(A_i)$ are independent.

*Step 3: the union really has $S(A)$ points.* $\lvert\Pi\cap A\rvert$ equals $S(A)$ unless some point of $\Pi'$ coincides with a point of $\Pi''$, in which case the union loses a point. Grimmett and Stirzaker show that almost surely no such coincidence occurs, by covering a bounded $A$ with the $O(2^{nd})$ dyadic boxes $B$ of side $2^{-n}$ that meet it and bounding the chance that one box holds a point of each. Since $\Pi'$ and $\Pi''$ are independent and $\mathbb{P}(N'(B)\ge1) \le \Lambda'(B)$, that chance is at most $\Lambda'(B)\Lambda''(B)$. It is the *sum* over the boxes that has to go to zero, and it does, because the sum factorises against its largest factor:
$$
\sum_{B} \Lambda'(B)\Lambda''(B) \;\le\; \Bigl(\max_{B}\Lambda''(B)\Bigr)\sum_{B}\Lambda'(B) \;=\; \Bigl(\max_{B}\Lambda''(B)\Bigr)\,\Lambda'(\widetilde A) ,
$$
where $\widetilde A$ is the union of the boxes. The second factor is a fixed finite number, while the first tends to $0$ as $n \to \infty$ by absolute continuity of the integral $\Lambda''(B) = \int_B \lambda''$ over sets of volume $2^{-nd} \to 0$. So the chance of a coincidence anywhere in $A$ is zero. They describe this step as technical and set it aside on a first reading. $\square$

**Thinning.** Fix $A$ with $\Lambda(A) < \infty$, and let $N_g$, $N_s$ count the green and scarlet points of $\Pi$ in $A$. If $\Lambda(A) = 0$ then $N(A)$ is Poisson with parameter $0$, so $N(A) = 0$ and $N_g = N_s = 0$ almost surely and the conclusion below holds trivially, with both colour parameters equal to $0$; so assume $0 < \Lambda(A) < \infty$, which is the range in which the conditional property was proved.

*Step 1: condition on the total.* Given $\lvert\Pi\cap A\rvert = n$, the conditional property proved above says these $n$ points are distributed as $n$ independent points of $A$, each drawn from the probability measure $Q(B) = \Lambda(B)/\Lambda(A)$. This is the general form of the property, with the intensity allowed to vary over $A$; the uniform special case of part 4 would not be enough here.

*Step 2: the colours are then independent coin tosses.* Because the points are independent and each is coloured independently of the others, the conditional probability that a given one is green is the position-averaged colouring probability
$$
\bar\gamma \;=\; \int_A \gamma(x)\,dQ \;=\; \frac{1}{\Lambda(A)}\int_A \gamma(x)\lambda(x)\,dx ,
$$
a single number, to be kept apart from the function $\gamma(\cdot)$ of the statement; write $\bar\sigma = \int_A \sigma(x)\,dQ = 1 - \bar\gamma$ for its scarlet counterpart. The colours of the $n$ points are independent, so, conditionally on the total being $n$,
$$
\mathbb{P}\bigl(N_g = g,\ N_s = s \,\big|\, N(A) = n\bigr) = \frac{n!}{g!\,s!}\,\bar\gamma^{\,g}\bar\sigma^{\,s} , \qquad g + s = n .
$$

*Step 3: multiply by the Poisson weight and watch it factorise.* With $n = g+s$,
$$
\mathbb{P}(N_g = g,\ N_s = s) = \frac{(g+s)!}{g!\,s!}\bar\gamma^{\,g}\bar\sigma^{\,s}\cdot\frac{\Lambda(A)^{g+s}e^{-\Lambda(A)}}{(g+s)!}
= \frac{\bigl(\bar\gamma\Lambda(A)\bigr)^{g}e^{-\bar\gamma\Lambda(A)}}{g!}\cdot\frac{\bigl(\bar\sigma\Lambda(A)\bigr)^{s}e^{-\bar\sigma\Lambda(A)}}{s!} ,
$$
using $\bar\gamma + \bar\sigma = 1$ to split $e^{-\Lambda(A)}$. The joint mass function is a product of two Poisson mass functions, so $N_g$ and $N_s$ are independent and Poisson, with parameters
$$
\bar\gamma\Lambda(A) = \int_A \gamma(x)\lambda(x)\,dx , \qquad \bar\sigma\Lambda(A) = \int_A \sigma(x)\lambda(x)\,dx ,
$$
which are the mean measures of the intensity functions $\gamma(x)\lambda(x)$ and $\sigma(x)\lambda(x)$ claimed in the statement.

*Step 4: disjoint sets.* Let $A_1, \dots, A_k$ be disjoint, each of finite mean measure. The first thing to establish is that the whole configurations $\Pi \cap A_1, \dots, \Pi \cap A_k$, and not merely the counts $N(A_1), \dots, N(A_k)$, are independent across $i$; clause 2 of the region-based definition says only the latter. The passage from the one to the other is the $\pi$-system argument set out at steps 3 and 4 of the proof of the conditional property above, and it is worth doing in full, because the obvious family of events is the wrong one.

Take for each $i$ the family $\mathcal{C}(A_i)$ of finite intersections $\{N(B_1) = m_1\} \cap \cdots \cap \{N(B_r) = m_r\}$ with $B_1, \dots, B_r$ **arbitrary** Borel subsets of $A_i$. By (a) and (b) of step 4 of the conditional-property proof, with $A_i$ in place of $A$, it is a $\pi$-system and it generates $\sigma(\Pi \cap A_i)$. The cylinders over the cells of one fixed finite partition of $A_i$ are *not* the family to use: as the two-partition example given there shows, an intersection of two of them is in general a union of refinement cylinders rather than a cylinder, so the common-refinement argument does not supply the $\pi$-system hypothesis and the quoted theorem would be applied without it.

Now fix $E_i \in \mathcal{C}(A_i)$ for each $i$, say $E_i = \{N(B_{i1}) = m_{i1}\} \cap \cdots \cap \{N(B_{ir_i}) = m_{ir_i}\}$, and let $\mathcal{P}_i$ be the finite Borel partition of the union $B_{i1} \cup \cdots \cup B_{ir_i}$ generated by those sets: the nonempty cells $B_{i1}^{\pm} \cap \cdots \cap B_{ir_i}^{\pm}$, where $B^{+} = B$ and $B^{-} = A_i \setminus B$, with the all-minus cell discarded. It is the partition of the union of the $B_{ij}$, and *not* of $A_i$, that is wanted here. In (c) of the conditional-property proof the partition was taken over the whole of $A$, and there the conditioning $\sum_D n_D = n$ held the leftover cell's count down; in the present step the total count over $A_i$ is not conditioned, so the leftover cell $A_i \setminus (B_{i1} \cup \cdots \cup B_{ir_i})$ would carry a count on which $E_i$ imposes no constraint whatever, and the decomposition below would run over infinitely many terms. Dropping that cell removes the difficulty. Each $B_{ij}$ is a union of cells of $\mathcal{P}_i$, so $N(B_{ij}) = \sum_{D \in \mathcal{P}_i,\, D \subseteq B_{ij}} N(D)$, and splitting $E_i$ over the values of the cell counts gives
$$
E_i \;=\; \biguplus_{c} c , \qquad c \;=\; \bigl\{ N(D) = n_D \text{ for all } D \in \mathcal{P}_i \bigr\} ,
$$
a **disjoint** union over the vectors $(n_D)_{D \in \mathcal{P}_i}$ of non-negative integers satisfying $\sum_{D \subseteq B_{ij}} n_D = m_{ij}$ for every $j \le r_i$. Every cell of $\mathcal{P}_i$ lies in at least one $B_{ij}$, by construction, so each $n_D$ is bounded by $\max_j m_{ij}$ and only finitely many vectors qualify: this union is genuinely finite. The cells of $\mathcal{P}_1, \dots, \mathcal{P}_k$ taken together are pairwise disjoint, because the $A_i$ are, so **clause 2** makes the whole collection of counts $\{N(D) : D \in \mathcal{P}_1 \cup \cdots \cup \mathcal{P}_k\}$ independent. Hence the probability of an intersection $c_1 \cap \cdots \cap c_k$ of one cylinder from each $E_i$ is $\prod_i \mathbb{P}(c_i)$, and expanding each $E_i$ and multiplying out,
$$
\mathbb{P}\Bigl(\bigcap_{i=1}^{k} E_i\Bigr) \;=\; \sum_{c_1,\dots,c_k} \prod_{i=1}^{k}\mathbb{P}(c_i) \;=\; \prod_{i=1}^{k}\ \sum_{c_i}\mathbb{P}(c_i) \;=\; \prod_{i=1}^{k}\mathbb{P}(E_i) ,
$$
where $c_i$ runs over the cylinders making up $E_i$; the middle step is the distributive law, legitimate because each $E_i$ is a union of finitely many cylinders, and the outer ones use that the cylinders making up a given $E_i$ are disjoint. So the $k$ $\pi$-systems are independent, and part (ii) of the quoted $\pi$-$\lambda$ theorem makes the $\sigma$-fields $\sigma(\Pi \cap A_1), \dots, \sigma(\Pi \cap A_k)$ independent. That is the independence of the configurations.

Now the colour of each point is decided by a toss made independently of every other toss and of all the positions. The pair $\bigl(N_g(A_i), N_s(A_i)\bigr)$ is a function of the configuration $\Pi \cap A_i$ and of the tosses attached to its points, so the *pairs* are independent of one another. That is more than independence of the green counts among themselves and of the scarlet counts among themselves, and it is what the statement needs: combined with step 3, which makes $N_g(A_i)$ and $N_s(A_i)$ independent within each pair, it says that the whole family $\{N_g(A_i)\} \cup \{N_s(A_i)\}$ is independent.

*Step 5: sets of infinite mean measure.* Clause 1 of the region-based definition quantifies over every Borel set, while steps 1-4 kept the mean measure finite on the sets in play; the sets with $\Lambda(A) = \infty$, on which the green or the scarlet mean measure may be finite or infinite, are reached from the bounded ones by exhaustion. Let $A$ be an arbitrary Borel set and put $A_m = A \cap \{x : \lvert x\rvert \le m\}$, so $\Lambda(A_m) < \infty$ because $\Lambda$ is finite on bounded sets, and $A_m \uparrow A$. Write $\Lambda_\gamma(B) = \int_B \gamma\lambda$. Then $N_g(A_m) \uparrow N_g(A)$ pointwise, and $\Lambda_\gamma(A_m) \uparrow \Lambda_\gamma(A)$ by monotone convergence. If $\Lambda_\gamma(A) < \infty$, the Poisson mass functions of parameter $\Lambda_\gamma(A_m)$ converge term by term to those of parameter $\Lambda_\gamma(A)$, so the laws of the $N_g(A_m)$ converge to the Poisson law of that parameter; an almost-sure limit has the limiting law, so $N_g(A)$ is Poisson with parameter $\Lambda_\gamma(A)$. If $\Lambda_\gamma(A) = \infty$, then for each fixed $k$,
$$
\mathbb{P}\bigl(N_g(A) \le k\bigr) \le \mathbb{P}\bigl(N_g(A_m) \le k\bigr) \longrightarrow 0 \qquad (m \to \infty) ,
$$
so $N_g(A) = \infty$ almost surely, which is clause 1 read with the infinite-parameter convention. The same argument serves for $N_s$. The independence statements of steps 3 and 4 survive the limit as well: disjoint Borel sets $A_1, \dots, A_k$ have disjoint bounded pieces $A_1 \cap \{\lvert x\rvert \le m\}, \dots, A_k \cap \{\lvert x\rvert \le m\}$, for which those steps apply, and independence is preserved under almost-sure limits. Hence $\Gamma$ and $\Sigma$ each satisfy both clauses of the region-based definition, with the intensity functions found in step 3, and the two processes are independent of each other. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="grimmett-stirzaker-2020:§6.8, Definition (6.8.15) and Theorem (6.8.17), pp. 281-282, and Example (6.8.28), p. 286, and §6.13, Definition (6.13.1) with the convention for an infinite mean measure, p. 319, Definition (6.13.4) and the Superposition theorem (6.13.5), p. 320, and the Colouring theorem (6.13.14), p. 324"}
**Clause 3 (independence of the future from the past) is what makes the gaps independent.** It is used twice, both times in the proof of part 2: at step 2 and at step 3, where in each case the conditioning event is a statement about the past and the event being evaluated is a statement about the future. Part 1 does not need it at all — clause 2 is itself stated conditionally on the present count, so it evaluates the conditional probabilities thrown up by splitting $\{N(t+h) = j\}$ over the value of $N(t)$ without any further hypothesis. In the converse it is not available and has to be recovered, which is the work of steps 6 and 7. Its region-based counterpart is clause 2 of the definition on a region, independence of the counts in disjoint sets, and that is what carries the independence through the superposition and thinning proofs.

What fails without it is step 2 of the proof of part 2, and with it the conclusion. Clauses 1 and 2 speak only about the next instant given the present count; neither says anything about how the increment after time $t$ depends on *when* the earlier arrivals occurred. The counting processes with unit jumps and no simultaneous arrivals are a far larger family than the Poisson processes — every renewal process whose gap distribution is continuous and not exponential belongs to it — and what picks the Poisson process out of that family is exactly the demand that the past be forgotten. Such a renewal process violates clause 2 as well, since its instantaneous arrival rate depends on how long the current gap has already run; that is the lack-of-memory property of step 6 read backwards, as a characterization of the exponential law. So it is not a counterexample in the strict sense, and we offer none: clauses 1 and 2 speak only about the next instant conditional on the current count, never about the arrival times behind that count, and whether they can be met while clause 3 fails is a question this unit does not settle. What the renewal family does establish is the weaker point the proofs need — the conclusions above are not consequences of the unit-jump structure of clause 1 alone, and clause 3 is genuinely used at the two places just listed.

**The constancy of $\lambda$ in clause 2 is what makes the gaps identically distributed.** If the rate is allowed to depend on the number of arrivals so far, $\lambda \mapsto \lambda_n$, the definition becomes that of a **birth process**, and the gaps are still independent but exponential with different parameters $\lambda_n$. Then the counts need not be Poisson, and worse can happen: Grimmett and Stirzaker's Theorem (6.8.17) says that such a process, with all its birth rates strictly positive, stays finite for all time if and only if $\sum_n \lambda_n^{-1} = \infty$, so for rapidly growing rates infinitely many arrivals occur in a bounded time. This is the point at which the Poisson process stops being the whole story and :ref[Continuous-time Markov chains]{to=prob.continuous-time-markov-chains} take over.

**The $o(h)$ in the second line of clause 2 forbids simultaneous arrivals**, and it is what makes $N$ increase by one at a time. Consider a process that jumps by $2$ whenever a Poisson process of rate $\lambda$ has an arrival. It satisfies clause 1 and clause 3, and it satisfies the $m = 0$ line of clause 2, since the chance of no jump in $(t, t+h]$ is $e^{-\lambda h} = 1 - \lambda h + o(h)$. It fails the other two lines, and in opposite directions: the chance of exactly one further arrival is $0$, not $\lambda h + o(h)$, and the chance of two is $\lambda h + o(h)$, not $o(h)$. The second failure is the one at issue here: the $o(h)$ line is by itself enough to rule the process out, whether or not the $m = 1$ line is also consulted. How much the clause buys can be read off :cite[Grimmett and Stirzaker's]{work=grimmett-stirzaker-2020 loc="§6.8, Example (6.8.28), p. 286"} Example (6.8.28). Suppose all that is known of a process $M$ is this: it starts at the origin; its paths never decrease and are right-continuous; every value it takes is a whole number; the increments it makes over disjoint time intervals are independent of one another, and the law of an increment depends on the interval only through its length; and it never moves up by more than one at a time. Those demands already force $M$ to be a Poisson process. Unit jumps together with stationary independent increments is therefore a characterization, not merely a convenient hypothesis.

**For the superposition theorem, independence of the two processes is essential, and the coincidence step is not decoration.** Superposing a Poisson process with a translated copy of itself gives a point set whose counts in disjoint sets are strongly dependent. The coincidence step is the one place where the fact that the mean measures have no atoms — guaranteed here by $\Lambda(A) = \int_A \lambda$, an integral of a function — is used; a "Poisson process" allowed to put positive mass on a single point would overlap its independent twin with positive probability, and the union would then have fewer points than the sum of the counts.

**For thinning, the colours must be chosen independently of one another and of the positions,** apart from the dependence on position allowed through $\gamma(x)$. Step 2 fails otherwise. A detector whose dead time makes it more likely to miss a particle shortly after recording one does *not* produce a Poisson stream of recorded particles, however nearly Poisson the incident stream is; the recorded counts are under-dispersed relative to the Poisson law, which is why $\operatorname{var}/\mathbb{E}$ is the standard diagnostic.

**Finiteness of $\Lambda$ on bounded sets** keeps the counts in bounded regions finite, and that is all it does. It does not keep $\Lambda(A)$ finite for unbounded $A$, which is why clause 1 of the region-based definition carries the convention Grimmett and Stirzaker state on p. 319 for a constant intensity: a Poisson distribution of infinite parameter means $\mathbb{P}(N(A) = \infty) = 1$. The process is still defined on such an $A$; it simply has infinitely many points there. Every result above that conditions on $N(A)$, the conditional property and the thinning proof included, assumes $\Lambda(A) < \infty$ explicitly for just this reason; the thinning conclusion is then carried to the sets of infinite mean measure by exhausting them with bounded ones, which is step 5 of that proof.
:::

:::method[Modelling a stream of events as a Poisson process]{provenance=original}
1. **Check the three clauses against the physics, not against the data.** Events must be countable and non-simultaneous; the instantaneous rate must not depend on the past (no dead time, no refractory period, no queueing feedback); and the rate must be constant in time. If the rate varies with time but nothing else fails, keep going with the non-homogeneous version, replacing $\lambda t$ by $\Lambda(A) = \int_A \lambda(x)\,dx$ everywhere below.
2. **Fix the intensity $\lambda$ in units of events per unit time.** If several independent sources contribute, add their rates: that is superposition.
3. **Apply any thinning.** If each event is recorded with probability $p$, independently of the others, replace $\lambda$ by $\lambda p$; the recorded stream is again Poisson, and is independent of the missed stream.
4. **Answer count questions with the Poisson law.** The number of events in a window of length $t$ is Poisson with parameter $\lambda t$; for a non-homogeneous process, with parameter $\Lambda$ of that window.
5. **Answer waiting-time questions with the gamma law.** The time to the $n$th event is $\Gamma(\lambda, n)$, with mean $n/\lambda$ and variance $n/\lambda^{2}$; for $n = 1$ this is the exponential law. Convert between the two languages with $\{N(t)\ge n\} = \{T_n \le t\}$, which turns any statement about waiting times into one about counts.
6. **Answer "where did they land" questions with conditional uniformity.** Given the number of events in a window, their positions are an independent uniform sample of that window.
7. **Test the model with the index of dispersion.** For Poisson counts, $\operatorname{var}N(t) = \mathbb{E}N(t)$. A sample variance well above the sample mean points to clustering (the rate itself fluctuates); well below it points to a dead time or some other inhibition.
:::

:::example[A two-source counting experiment with an imperfect detector]{provenance=original}
Two weak radioactive sources sit in front of one detector. Source $A$ emits particles towards the detector at a mean rate of $1.2\ \mathrm{s}^{-1}$, source $B$ at $0.8\ \mathrm{s}^{-1}$, and the two emission streams are independent Poisson processes. The detector registers each incident particle with probability $p = 0.6$, independently of everything else. Let $R$ be the process of registered counts.

**Step 1: superpose.** The incident particles form the union of two independent Poisson processes, so by the superposition theorem they form a Poisson process of rate
$$
\lambda_{\text{inc}} = 1.2 + 0.8 = 2.0\ \mathrm{s}^{-1} .
$$

**Step 2: thin.** Colour an incident particle "registered" with probability $0.6$ and "missed" with probability $0.4$, independently of the others. By the colouring theorem $R$ is a Poisson process of rate
$$
\lambda = p\,\lambda_{\text{inc}} = 0.6 \times 2.0 = 1.2\ \mathrm{s}^{-1} ,
$$
independent of the process of missed particles.

**Step 3: a count.** The number of registered counts in a $3\ \mathrm{s}$ window is Poisson with parameter $\lambda t = 1.2 \times 3 = 3.6$, so
$$
\mathbb{P}\bigl(R(3) = 2\bigr) = \frac{3.6^{2}}{2!}\,e^{-3.6} = 6.48\,e^{-3.6} = 0.17706 .
$$

**Step 4: a waiting time.** The time $T_5$ to the fifth registered count is $\Gamma(1.2, 5)$, with
$$
\mathbb{E}T_5 = \frac{5}{1.2} = 4.1667\ \mathrm{s} , \qquad \operatorname{sd}(T_5) = \frac{\sqrt5}{1.2} = 1.8634\ \mathrm{s} .
$$

**Step 5: a waiting time answered as a count.** What is the chance that we have to wait more than $4\ \mathrm{s}$ for the third registered count? Use $\{T_3 > 4\} = \{R(4) \le 2\}$. Here $R(4)$ is Poisson with parameter $1.2\times 4 = 4.8$, so
$$
\mathbb{P}(T_3 > 4) = e^{-4.8}\Bigl(1 + 4.8 + \tfrac{4.8^{2}}{2}\Bigr) = 17.32\,e^{-4.8} = 0.142539 .
$$
That is the number to check: $\mathbb{P}(T_3 > 4\ \mathrm{s}) = 0.1425$ to four decimal places.

**Step 6: a consistency check on the model.** The missed particles form an independent Poisson process of rate $0.4 \times 2.0 = 0.8\ \mathrm{s}^{-1}$, and superposing the registered and missed streams must return the incident stream: $1.2 + 0.8 = 2.0\ \mathrm{s}^{-1}$, as it does. Also, had we thinned first and superposed afterwards — thinning each source separately to rates $0.72$ and $0.48$ — we would have reached the same $\lambda = 1.2\ \mathrm{s}^{-1}$. The two operations commute, as they must, since both are read off from the intensity function alone.
:::

:::application[Shot noise, dead time, and counting statistics]{provenance=adapted src="grimmett-stirzaker-2020:§6.13, the shot-noise sum over the points of a Poisson process, p. 326"}
Every counting instrument in the physical sciences is calibrated against this process.

**Photon and particle counting.** A photomultiplier viewing a steady faint source, a Geiger counter beside a long-lived isotope, a cosmic-ray telescope: in each case the arrival stream is Poisson to good accuracy, and the characteristic consequence is that a measurement of $n$ counts carries an uncertainty of about $\sqrt n$, because $\operatorname{var}N(t) = \mathbb{E}N(t) = \lambda t$. The familiar rule that one must quadruple the integration time to halve the fractional error, $\sqrt{\lambda t}/(\lambda t) = (\lambda t)^{-1/2}$, is this identity and nothing more.

**Detector efficiency is thinning.** A detector of quantum efficiency $p$ turns an incident Poisson stream of rate $\lambda$ into a recorded Poisson stream of rate $p\lambda$. This is why photon-counting statistics are not degraded in *form* by an inefficient detector — only the rate falls, and the recorded counts remain Poisson. It is also why departures from Poisson statistics in recorded data are informative: they cannot have been manufactured by a memoryless loss mechanism, so they come either from the source (bunching, clustering, a varying rate) or from a detector with memory.

**Dead time is the standard failure of the model.** After each count, a real counter is insensitive for a short interval $\tau$. The retained events are then *not* an independent thinning, since whether a particle is recorded depends on how recently the last one was; the recorded process is a renewal process whose gaps are $\tau$ plus an exponential variable. Those gaps are less variable than exponential ones of the same mean, and the counts they produce are under-dispersed: $\operatorname{var}R(t)$ falls below $\mathbb{E}R(t)$. Measuring an index of dispersion below $1$ is the usual way to detect and then correct for dead time.

**Shot noise in a circuit.** If each arrival at rate $\lambda$ contributes a pulse $r(t - T_i)$ of fixed shape to a current, the total current is $I(t) = \sum_i r(t - T_i)$, a sum over the points of a Poisson process; Grimmett and Stirzaker call the one-dimensional version of such sums shot noise. The superposition theorem says that two independent sources of such pulses give a current of the same type with the rates added, which is why shot noise from independent channels adds in power rather than in amplitude.

**Spatial versions.** The region-based definition is used directly for the positions of impurities in a crystal, of stars in a survey field, or of raindrops on a surface. There the thinning theorem is the statement that a magnitude-limited sample from a Poisson field of stars is still a Poisson field, with intensity reduced by the detection probability at each position — the usual justification for modelling a flux-limited catalogue as a Poisson process with a position-dependent intensity.
:::
