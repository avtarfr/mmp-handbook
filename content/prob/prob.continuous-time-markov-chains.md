---
id: prob.continuous-time-markov-chains
title: Continuous-time Markov chains
kind: definition
level: core
summary: Defines a continuous-time Markov chain through its transition semigroup and its generator, shows that the chain is an exponential holding time in each state followed by a jump governed by a discrete chain, derives the Kolmogorov forward and backward equations and the solution by a matrix exponential, and gives the stationary condition and the birth-death criterion.
prereqs: [prob.markov-chains, prob.poisson-process, ode.linear-systems, linalg.matrix-exponential]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§6.9 Continuous-time Markov chains, pp. 288-296: Definitions (6.9.1)-(6.9.3) of the Markov property, the chain and the transition probabilities, Theorem (6.9.4) that $\\{P_t\\}$ is a stochastic semigroup, the extended and strong Markov properties (6.9.5), Theorem (6.9.6) that the first holding time is exponential with parameter $g_i\\in[0,\\infty)$, the jump matrix $Y$ and the generator (6.9.7)-(6.9.10), Theorem (6.9.11) that the destination is independent of the holding time, the construction (6.9.12) from holding times and jump chain, the minimal process (6.9.13) and Proposition (6.9.14) that its semigroup property survives, Exercise (6.9.11), p. 296, asking for the short-time form of $P_h$ on a finite state space, Example (6.9.16) for the birth process, Theorem (6.9.17) giving three sufficient conditions for non-explosion, Example (6.9.18) with $P_t=e^{\\lambda t(Y-I)}$, Definition (6.9.19) and Theorem (6.9.20) on irreducibility, and Exercise (6.9.6) on mean hitting times; §6.10 Kolmogorov equations and the limit theorem, pp. 297-305: the derivation of the forward equation (6.10.1)-(6.10.2) and of the backward equation (6.10.3) for finite $S$, the solution (6.10.4)-(6.10.5) as $P_t=e^{tG}$, Example (6.10.6), Theorem (6.10.7) on the minimal non-negative solution for countable $S$ with the proof of part (a), Definition (6.10.13) of a stationary measure and distribution, the evolution (6.10.14) of the distribution of $X(t)$, Theorem (6.10.15) and Lemma (6.10.16) relating $\\pi G=0$ to stationarity, and the limit theorem (6.10.22) with Lemma (6.10.23); §6.11 Birth-death processes and imbedding, pp. 306-310: the generator of a birth-death process, the conditions (2), the measure (3), the summability conditions (4)-(6), Theorem (6.11.7), Example (6.11.12) and Theorem (6.11.14) for simple death with immigration, and Example (6.11.15) with Theorem (6.11.16) for the simple birth-death process; Exercise (6.9.3), p. 296, the queue with Poisson arrivals and exponential service"
    pages: "288-310"
    role: "every definition and theorem stated here - the semigroup and its Chapman-Kolmogorov property; the exponential holding time, the jump chain and the generator; the extended and strong Markov properties; the short-time expansion $P_h = I + hG + o(h)$, which the book states as (6.9.9) and sets as an exercise; the forward and backward equations and the matrix-exponential solution in the finite case; minimality and explosion in the countable case; the characterisation of stationary distributions by $\\pi G=0$ and the limit theorem without an aperiodicity hypothesis; the birth-death generator, its stationary measure and the two summability conditions; the queueing example used in the application"
  - work: rhb-2006
    loc: "§30.8.2, pp. 1175-1176: the differential recurrence (30.101) for the probabilities $P_x(t)$ of a counting process, obtained by conditioning on a short interval, and its solution (30.102)"
    pages: "1175-1176"
    role: the elementary short-interval conditioning argument, in the one-state-per-count case, that the forward equation generalises
---

:::note[What changes when time becomes continuous]{provenance=original}
A discrete-time chain is run by one matrix: the transition matrix $P$, with $P^{n}$ giving the $n$-step probabilities (:ref[Discrete-time Markov chains]{to=prob.markov-chains}). In continuous time there is no smallest step, so there is no single matrix to iterate. There is instead a whole family $\{P_t : t \ge 0\}$, one matrix per elapsed time, and the family multiplies: $P_{s+t} = P_sP_t$. A family of matrices that multiplies like that is governed by its derivative at $t = 0$, and that derivative is the **generator** $G$. Everything in this unit is an unpacking of the slogan $P_t = e^{tG}$ and of the places where it needs care.

The generator also has a direct probabilistic reading, and it is worth having both pictures from the start. Off the diagonal, $g_{ij}$ is the rate at which the chain jumps from $i$ to $j$. On the diagonal, $-g_{ii}$ is the total rate of leaving $i$, which is the parameter of the exponential time the chain waits there. So a continuous-time chain is a discrete-time chain (where it goes) run on an exponential clock (when it goes): a map of where it can go, together with a speed for each place.
:::

:::definition[The chain, its semigroup and its generator]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, Definitions (6.9.1), (6.9.2), (6.9.3) and the display (6.9.7), pp. 288-290"}
Let $S$ be a countable set, which we take to be a set of integers. A family $X = \{X(t) : t \ge 0\}$ of random variables with values in $S$ **satisfies the Markov property** if
$$
\mathbb{P}\bigl(X(t_n) = j \mid X(t_1) = i_1, \dots, X(t_{n-1}) = i_{n-1}\bigr) = \mathbb{P}\bigl(X(t_n) = j \mid X(t_{n-1}) = i_{n-1}\bigr)
$$
for all states and all increasing sequences $t_1 < t_2 < \cdots < t_n$ of times. A sample path of $X$ is **right-continuous** if for each $t$ it is constant on some interval $[t, t+\epsilon)$; equivalently, since $S$ is discrete, the paths are step functions. We call $X$ a **continuous-time Markov chain** when both hold: its paths are right-continuous, and the Markov property is satisfied.

Its **transition probabilities** are $p_{ij}(s,t) = \mathbb{P}(X(t) = j \mid X(s) = i)$ for $s \le t$, and $X$ is **homogeneous** if these depend only on $t - s$; we assume homogeneity throughout and write $p_{ij}(t)$, and $P_t$ for the matrix $\bigl(p_{ij}(t)\bigr)$. The family $\{P_t : t \ge 0\}$ is the **transition semigroup** of the chain.

Suppose $X(0) = i$, and write $U_0 = \inf\{t : X(t) \ne i\}$ for the instant at which the chain first moves away from $i$; right-continuity forces $U_0 > 0$. Write $g_i \in [0,\infty)$ for the parameter of the exponential distribution of $U_0$ (that it is exponential is part 3 of the statement below), and define the **jump matrix** $Y = (y_{ij})$ by $y_{ij} = \delta_{ij}$ if $g_i = 0$, and by
$$
y_{ij} = \mathbb{P}_i\bigl(X(U_0) = j\bigr) \quad\text{if } g_i > 0 .
$$
The **generator** of the chain is the matrix $G = (g_{ij} : i,j \in S)$ with
$$
g_{ij} = \begin{cases} g_i\,y_{ij} , & j \ne i , \\[2pt] -g_i , & j = i .\end{cases}
$$
Since $Y$ has row sums $1$, $G$ has row sums $0$: $\sum_{j} g_{ij} = 0$ for every $i$, equivalently $\sum_{j \ne i} g_{ij} = g_i$. More generally, any matrix with non-negative off-diagonal entries and row sums $0$ is called a **generator** on $S$. The off-diagonal entries are rates, in the sense that for $j \ne i$
$$
\mathbb{P}\bigl(X(t+h) = j \mid X(t) = i\bigr) = g_{ij}h + o(h) ,
$$
together with $p_{ii}(h) = 1 + g_{ii}h + o(h)$ on the diagonal. Grimmett and Stirzaker state this as their equation (6.9.9), set the finite case as an exercise, and warn that it must be handled carefully when $S$ is infinite; it is part 1 of the Kolmogorov statement below and is proved there, since everything in that statement rests on it.

Let $T_m$ be the instant of the $m$th move ($T_0 = 0$), put $U_m = T_{m+1} - T_m$, and set $T_\infty = \lim_mT_m$. We call the $U_m$ the **holding times**. The successive values taken by $X$ form a discrete-time chain $Y = \{Y_n\}$, governed by the matrix $Y$; this is the **jump chain**. Following the source, the single letter $Y$ carries both meanings — the matrix $Y = (y_{ij})$ and the chain $Y = \{Y_n\}$ it runs — and we keep that economy here; the subscripts tell the two apart. The chain **explodes from $i$** if $\mathbb{P}_i(T_\infty < \infty) > 0$, and one says explosion occurs if it explodes from some state. When explosion is possible one adjoins a state $\infty$ to $S$ and sets $X(t) = \infty$ for $t \ge T_\infty$; the process so defined is the **minimal process**, because it runs as a chain in $S$ for the shortest possible time.
:::

:::statement[The architecture of a continuous-time chain]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, Theorem (6.9.4), p. 289, Theorem (6.9.5) and Theorem (6.9.6), p. 290, Theorem (6.9.11), p. 291, the construction (6.9.12) and Proposition (6.9.14), p. 292, and Theorem (6.9.17), p. 293"}
Let $X$ be a homogeneous continuous-time Markov chain with state space $S$.

1. **The Markov property extends.** Fix $t > 0$. Conditioning on $\{X(t) = j\}$ together with any event decided by the chain strictly before $t$ assigns any event decided strictly after $t$ the same probability as conditioning on $\{X(t)=j\}$ alone: this is the **extended Markov property**. In its **strong** form, for a stopping time $T$ and conditional on $\{T < T_\infty\} \cap \{X(T) = i\}$, the shifted process $X^{*}(u) = X(T+u)$ is again a continuous-time Markov chain with the transition probabilities of $X$, started at $i$ and independent of $\{X(s) : s < T\}$. Grimmett and Stirzaker state both and omit the proof, referring to Norris; we do the same, and flag below the three places where the extended form rather than the bare Markov property is what is being used.
2. **The semigroup property.** $P_0 = I$; each $P_t$ has non-negative entries and row sums $1$; and the Chapman-Kolmogorov equations hold,
   $$
   P_{s+t} = P_sP_t , \qquad s, t \ge 0 .
   $$
   (For the minimal process built from a generator this still holds, because the chain can reach the adjoined state $\infty$ but cannot come back.)
3. **Holding times are exponential.** Started at $X(0) = i$, the variable $U_0$ defined above is exponentially distributed, with some parameter $g_i \in [0,\infty)$, and is a stopping time. The value $g_i = 0$ means $\mathbb{P}_i(U_0 = \infty) = 1$, that is, $i$ is absorbing; the value $g_i = \infty$ is impossible, because right-continuity forces $\mathbb{P}_i(U_0 > 0) = 1$.
4. **Destination and duration are independent, and the chain restarts.** If $g_i > 0$ then $X(U_0)$ is independent of $U_0$, and, conditional on $X(U_0) = j$, the shifted process $X^{*}(s) = X(U_0 + s)$ is again a chain of the same kind, carrying the transition probabilities of $X$, begun at $j$, and independent both of $U_0$ and of the starting state $i$.
5. **The chain is exactly this description.** Conversely, given the two ingredients of the construction — a transition matrix $Y$ with $y_{ii} = 0$, together with non-negative constants $g_i$, which is the same data as a generator matrix $G$ in the sense defined above — the recipe "sit in $Y_0$ for an exponential time of parameter $g_{Y_0}$, jump to $Y_1$, sit for an exponential time of parameter $g_{Y_1}$, and so on" defines a process, which is a Markov chain provided it does not exhaust $S$ in finite time.
6. **Sufficient conditions for non-explosion.** The chain does not explode from $i$ if any one of the following holds: $S$ is finite; $\sup_j g_j < \infty$; or $i$ is recurrent for the jump chain $Y$. None of these is necessary: a pure birth process with rates $\lambda_n = n$, started from a state $i \ge 1$, has an infinite state space, unbounded rates and a transient jump chain, yet it never explodes, because $\sum_{n \ge 1} n^{-1}$ diverges. (Started from $0$ it is a different matter, since $\lambda_0 = 0$ makes $0$ absorbing, and then condition (c) holds there anyway.)

The chain is **irreducible** if for every pair $i,j$ there is some $t > 0$ with $p_{ij}(t) > 0$; in that case $p_{ij}(t) > 0$ for *all* $t > 0$, a dichotomy with no analogue in discrete time, where periodicity makes some $n$-step probabilities vanish.
:::

:::statement[The Kolmogorov equations]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, equation (6.9.9), p. 291 and Exercise (6.9.11), p. 296, and §6.10, equations (6.10.1)-(6.10.5), pp. 297-298, and Theorem (6.10.7), p. 299"}
Let $X$ be a chain as above, with generator $G$ and semigroup $\{P_t\}$, and let $P_t'$ denote the matrix whose entries are the derivatives $p_{ij}'(t)$.

1. **The short-time expansion.** If $S$ is finite then, as $h \downarrow 0$,
   $$
   p_{ij}(h) = g_{ij}h + o(h) \ \ (j \ne i) , \qquad p_{ii}(h) = 1 + g_{ii}h + o(h) ,
   $$
   the error terms being uniform in $i$ and $j$; in matrix form $P_h = I + hG + o(h)$, so that $G = P_0'$ is the derivative of the semigroup at the origin. This is the statement that makes the generator a matrix of rates, and everything below depends on it.
2. **Finite state space.** If $S$ is finite then $\{P_t\}$ satisfies the **forward equation**
   $$
   P_t' = P_t G , \qquad t \ge 0 ,
   $$
   and the **backward equation**
   $$
   P_t' = G P_t , \qquad t \ge 0 ,
   $$
   both subject to $P_0 = I$. Each is a finite system of first-order linear differential equations with constant coefficients, so each has a unique solution, namely
   $$
   P_t \;=\; \sum_{n=0}^{\infty}\frac{t^{n}}{n!}G^{n} \;=\; e^{tG} .
   $$
3. **Countable state space.** If $S$ is countable and $X$ is the minimal chain with generator $G$, then, among all non-negative solutions of the backward system with $P_0 = I$, the family $\{P_t\}$ is the smallest; and the same is true for the forward system. ("Minimal" means $p_{ij}(t) \le \pi_{ij}(t)$ for any other non-negative solution $\{\Pi_t\}$ with the same boundary condition.) Any solution carrying that boundary value has row sums at most $1$, that is $\sum_j p_{ij}(t)\le 1$. When explosion does not occur the row sums equal $1$, and then $\{P_t\}$ is the *unique* solution of either system.

Both equations come from the same two-step decomposition $P_{t+h} = P_tP_h = P_hP_t$; the forward equation conditions on the state at time $t$ and looks at the last short interval, the backward equation conditions on the state at time $h$ and looks at the first.
:::

:::statement[Stationary distributions, the limit theorem, and birth-death chains]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, the definitions (6.9.21) of recurrence and transience and of positive recurrence, with Theorem (6.9.22), p. 295, §6.10, Definition (6.10.13), equation (6.10.14), Theorem (6.10.15) and Theorem (6.10.22), pp. 301-304, and §6.11, conditions (2), equation (3), conditions (4) and (6) and Theorem (6.11.7), pp. 307-308"}
**Evolution of the distribution.** If $X(0)$ has distribution $\mu^{(0)}$, written as a row vector, then $X(t)$ has distribution $\mu^{(t)} = \mu^{(0)}P_t$.

**Recurrence.** Grimmett and Stirzaker call a state $i$ **recurrent** for $X$ when $\mathbb{P}_i(\{t : X(t) = i\}\text{ is unbounded}) = 1$, and **transient** when that probability is $0$; when $g_i > 0$, the state $i$ is recurrent for $X$ precisely when the jump chain is recurrent at $i$, and transient for $X$ precisely when the jump chain is transient there. A recurrent $i$ is **positive recurrent** if either $S = \{i\}$ or the first return time $R_i = \inf\{t > U_0 : X(t) = i\}$ has finite mean $m_i = \mathbb{E}_i(R_i)$.

**Stationarity.** For an irreducible, non-explosive $X$, a measure $\pi$ is a **stationary measure** if $\pi = \pi P_t$ for all $t \ge 0$, and a **stationary distribution** if moreover $\sum_j \pi_j = 1$. Now let $X$ be irreducible with $\lvert S\rvert \ge 2$.

1. Should one state be positive recurrent, a stationary distribution $\pi$ exists and is unique, it is the only distribution satisfying $\pi G = 0$, and every state is then positive recurrent too.
2. Suppose instead that $X$ does not explode and that $\pi G = 0$ for some distribution $\pi$. Then every state is positive recurrent, $\pi$ is stationary, and $\pi_k = 1/(m_kg_k)$.

So the infinite system $\pi = \pi P_t$, one equation for every $t$, reduces to the single linear system $\pi G = 0$.

**The limit theorem.** Assume once more that $X$ is irreducible and does not explode. Where a stationary distribution $\pi$ exists, it is unique and $p_{ij}(t)\to\pi_j$ as $t\to\infty$ for every pair $i,j$. Where none exists, $p_{ij}(t)\to 0$ for every pair. **No aperiodicity hypothesis appears**, in contrast with the discrete-time theorem of :ref[Convergence of Markov chains]{to=prob.markov-chain-convergence}.

**Birth-death chains.** A **birth-death process** is a chain on $\{0,1,2,\dots\}$ whose generator has $g_{n,n+1} = \lambda_n$, $g_{n,n-1} = \mu_n$, $g_{nn} = -(\lambda_n+\mu_n)$ and all other off-diagonal entries zero, where $\lambda_i \ge 0$, $\mu_i \ge 0$ and $\mu_0 = 0$. Assume
$$
\lambda_i > 0 \ (i \ge 0), \qquad \mu_i > 0 \ (i \ge 1), \qquad \mu_0 = 0 ,
$$
so that the chain is irreducible. Then:

1. the measure
   $$
   x_n = \frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}\,x_0 , \qquad n \ge 1 ,
   $$
   satisfies $xG = 0$;
2. a *distribution* $\pi$ with $\pi G = 0$ exists if and only if
   $$
   \sum_{n=0}^{\infty}\frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n} < \infty
   $$
   (the $n = 0$ term being read as $1$), and then $x_0$ is the reciprocal of that sum;
3. that $\pi$ is a *stationary* distribution of $X$ if, in addition,
   $$
   \sum_{n=0}^{\infty}\frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}\,(\lambda_n + \mu_n) < \infty .
   $$

The extra condition 3 is not idle: Grimmett and Stirzaker exhibit rates for which $\pi G = 0$ has a normalisable solution while the chain is transient, and therefore explosive.
:::

:::idea{provenance=original}
**Why there is a generator at all.** The semigroup property $P_{s+t} = P_sP_t$ with $P_0 = I$ is the matrix version of the functional equation $f(s+t) = f(s)f(t)$, whose solutions are exponentials. Differentiating the semigroup property at $t=0$ produces a single matrix $G = P_0'$, and the same differentiation at a general $t$ turns the family into a differential equation driven by $G$. Which side $G$ appears on depends on which of the two factorisations $P_{t+h} = P_tP_h$ or $P_{t+h}=P_hP_t$ one differentiates, and that is the only difference between the forward and the backward equations.

**Why the holding times are exponential.** Starting afresh in state $i$ at time $s$, given that the chain has not yet left $i$, is the same as starting in $i$ at time $0$. The conditioning event $\{U_0 > s\}$ is a statement about the whole of $[0,s]$ and not just about $X(s)$, so what is used here is the extended Markov property of part 1 of the architecture statement, together with homogeneity; the same remark applies to part 4 of that statement, which needs the strong form at the stopping time $U_0$. So $Q(t) = \mathbb{P}_i(U_0 > t)$ satisfies $Q(s+t) = Q(s)Q(t)$, the same functional equation again, now for a scalar; with $Q(0) = 1$, and its only right-continuous solutions are $Q(t) = e^{-g_it}$ for some $g_i \in [0,\infty)$.

**Why $\pi G = 0$ replaces $\pi P = \pi$.** Stationarity should mean that the distribution does not move, so $\frac{d}{dt}\bigl(\pi P_t\bigr) = 0$. By the backward equation this derivative is $\pi GP_t$, and since $P_0 = I$ it vanishes for every $t$ exactly when $\pi G = 0$ — one linear system in place of a continuum of them.

**Why the birth-death measure is a product.** A birth-death generator is tridiagonal, so the equation $xG = 0$ links only consecutive components and can be unwound one step at a time; what comes out is the detailed-balance relation $x_n\lambda_n = x_{n+1}\mu_{n+1}$ — the mean rate of upward crossings of the gap between $n$ and $n+1$ must equal the rate of downward crossings — and iterating that relation gives the product formula.

**Where the care is needed.** Every step above interchanges a limit with a sum. For finite $S$ the sums are finite and nothing can go wrong. For infinite $S$ the chain may run through infinitely many states in finite time, and then the forward and backward systems may have many solutions; the transition probabilities of the chain are the smallest of them.
:::

:::proof[The forward and backward equations, and the matrix exponential]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, equation (6.9.9) and Exercise (6.9.11), pp. 291 and 296, and §6.10, the derivation of (6.10.1)-(6.10.5), pp. 297-298; rhb-2006:§30.8.2, eq. (30.101), p. 1176"}
Take $S$ finite, and fix $i, j \in S$. Write $g = \max_{k \in S}g_k$, which is finite because $S$ is finite.

**Step 1: the short-time expansion, part 1 of the statement.** Start the chain at $i$. By parts 3, 4 and 5 of the architecture statement the chain sits at $i$ for an exponential time $U_0$ of parameter $g_i$, moves to a state $j \ne i$ with probability $y_{ij}$, and then restarts there; so all three probabilities below can be computed from the holding times and the jump chain.

*(a) Two moves in a short time are unlikely, and this is where finiteness enters first.* Conditional on the jump chain, $U_0$ and $U_1$ are independent exponential variables with parameters $g_i$ and $g_{Y_1}$, both at most $g$; since $\mathbb{P}(U > t) = e^{-g_{\bullet}t} \ge e^{-gt}$ for each of them, the pair is stochastically larger than a pair of independent exponential variables of parameter $g$. The sum of the latter has the gamma law $\Gamma(g,2)$ (:ref[The Poisson process]{to=prob.poisson-process}, part 3), so
$$
\mathbb{P}_i(T_2 \le h) \;\le\; 1 - e^{-gh} - ghe^{-gh} \;=\; \tfrac12 g^{2}h^{2} + O(h^{3}) \;=\; O(h^{2}) ,
$$
with a bound depending only on $g$, hence uniform over the states.

*(b) The diagonal entry.* Either the chain has not moved by time $h$, which has probability $e^{-g_ih}$, or it has moved at least once. If it has moved and is nevertheless at $i$ at time $h$, it has moved at least twice: the first move cannot end at $i$, because right-continuity makes the path a step function and $U_0$ is the first instant at which the value differs from $i$. So $p_{ii}(h)$ differs from $e^{-g_ih}$ by at most $\mathbb{P}_i(T_2 \le h) = O(h^{2})$, and since $e^{-g_ih} = 1 - g_ih + O(h^{2})$ and $g_{ii} = -g_i$,
$$
p_{ii}(h) = 1 + g_{ii}h + O(h^{2}) .
$$

*(c) The off-diagonal entries.* Fix $j \ne i$ and split $\{X(h) = j\}$ by the number of moves made by time $h$. The part with two or more moves contributes at most $O(h^{2})$ by (a). The part with exactly one move requires that move to occur at some instant $s \le h$, to land on $j$, and to be followed by no further move in the remaining time $h - s$; integrating over $s$, and using the independence of destination from duration and the restart at $j$,
$$
\mathbb{P}_i\bigl(X(h) = j,\ T_1 \le h < T_2\bigr) = y_{ij}\int_0^{h}g_ie^{-g_is}\,e^{-g_j(h-s)}\,ds .
$$
The two exponentials together lie between $e^{-gh}$ and $1$, so the integral lies between $g_ihe^{-gh}$ and $g_ih$, and therefore equals $g_ih + O(h^{2})$. Multiplying by $y_{ij}$ and recalling $g_{ij} = g_iy_{ij}$,
$$
p_{ij}(h) = g_{ij}h + O(h^{2}) .
$$
All the error bounds are controlled by the single constant $g$, so they are uniform in $i$ and $j$, which is what the next two steps need. $\square$

**Step 2: condition on where the chain is at time $t$.** By the Chapman-Kolmogorov equations,
$$
p_{ij}(t+h) = \sum_{k \in S} p_{ik}(t)\,p_{kj}(h) .
$$

**Step 3: expand the short-time factor.** Step 1 gives $p_{kj}(h) = g_{kj}h + o(h)$ for $k \ne j$ and $p_{jj}(h) = 1 + g_{jj}h + o(h)$. Substituting,
$$
p_{ij}(t+h) = p_{ij}(t)\bigl(1 + g_{jj}h\bigr) + h\sum_{k \ne j}p_{ik}(t)g_{kj} + o(h)
= p_{ij}(t) + h\sum_{k\in S}p_{ik}(t)g_{kj} + o(h) .
$$
The $o(h)$ terms may be collected into one because there are finitely many of them, each bounded by the uniform error of step 1. This is the second place finiteness is used, and it is exactly the step Grimmett and Stirzaker flag as needing justification when $S$ is infinite, where the sum is infinite and a limit is being taken through it.

**Step 4: divide and let $h \downarrow 0$.** We obtain
$$
p_{ij}'(t) = \sum_{k\in S}p_{ik}(t)g_{kj} = (P_tG)_{ij} ,
$$
which is the forward equation $P_t' = P_tG$. Conditioning instead on the state at time $h$, that is writing $p_{ij}(t+h) = \sum_k p_{ik}(h)p_{kj}(t)$ and expanding the first factor in the same way, gives the backward equation $P_t' = GP_t$. In both cases $P_0 = I$ because $p_{ij}(0) = \delta_{ij}$.

**Step 5: solve.** Each system is a linear constant-coefficient system of $\lvert S\rvert^{2}$ scalar equations, so by the existence and uniqueness theorem for :ref[linear systems]{to=ode.linear-systems} it has exactly one solution with the given value at $t=0$. Define $E_t = \sum_{n\ge 0}t^{n}G^{n}/n!$, the :ref[matrix exponential]{to=linalg.matrix-exponential} of $tG$; the series converges for every $t$ because $\lVert G^{n}\rVert \le \lVert G\rVert^{n}$ in any submultiplicative norm. Differentiating term by term, which is legitimate because the differentiated series converges uniformly on compact $t$-intervals by the same bound,
$$
\frac{d}{dt}E_t = \sum_{n\ge 1}\frac{t^{n-1}}{(n-1)!}G^{n} = E_tG = GE_t ,
$$
the last equality because $G$ commutes with every power of itself. Also $E_0 = I$. So $E_t$ solves both systems with the right boundary value, and by uniqueness
$$
P_t = e^{tG} . \qquad\square
$$

**Step 6: what survives when $S$ is infinite.** Steps 1 and 3 break, and with them uniqueness. Grimmett and Stirzaker's Theorem (6.10.7) salvages the following: the transition semigroup of the minimal chain is still a non-negative solution of both systems, and it is the smallest one. Their proof of the backward half starts from the decomposition
$$
p_{ij}(t) = \delta_{ij}e^{-g_it} + \sum_{k \ne i}\int_0^{t}g_ie^{-g_is}y_{ik}\,p_{kj}(t-s)\,ds ,
$$
obtained by splitting according to whether the first jump happens after $t$ or at some time $s \le t$; substituting $u = t-s$, exchanging sum and integral by Fubini's theorem, and differentiating recovers $p_{ij}'(t) = \sum_k g_{ik}p_{kj}(t)$. Minimality then follows by showing, by induction on $n$, that any non-negative solution dominates $\mathbb{P}_i(X(t)=j,\ T_n > t)$, and letting $n \to \infty$.
:::

:::proof[The stationary measure of a birth-death chain]{provenance=adapted src="grimmett-stirzaker-2020:§6.11, the derivation of (3) from (2) and the footnote on detailed balance, p. 307, with the discussion of condition (6) and Example (6.11.8), p. 308"}
Let $G$ be a birth-death generator satisfying $\lambda_i > 0$ for $i \ge 0$, $\mu_i > 0$ for $i \ge 1$ and $\mu_0 = 0$, and let $x$ be a measure with $xG = 0$. Reading off the columns of $G$, the equation $xG = 0$ is
$$
-\lambda_0x_0 + \mu_1x_1 = 0 , \qquad
\lambda_{n-1}x_{n-1} - (\lambda_n+\mu_n)x_n + \mu_{n+1}x_{n+1} = 0 \quad (n \ge 1) .
$$

**Step 1: recognise a telescoping quantity.** Define $D_n = \lambda_nx_n - \mu_{n+1}x_{n+1}$ for $n \ge 0$. The $n$th equation above says precisely $D_{n-1} = D_n$ for $n \ge 1$, and the $n = 0$ equation says $D_0 = 0$. Hence $D_n = 0$ for every $n$:
$$
\lambda_nx_n = \mu_{n+1}x_{n+1} , \qquad n \ge 0 .
$$
This is the detailed-balance relation; it holds here not by assumption but because the generator is tridiagonal, so that the only way probability can cross the gap between $\{0,\dots,n\}$ and $\{n+1,n+2,\dots\}$ is by a single step.

**Step 2: unwind it.** Since $\mu_{n+1} > 0$ we may divide, and induction on $n$ gives
$$
x_n = \frac{\lambda_{n-1}}{\mu_n}x_{n-1} = \frac{\lambda_0\lambda_1\cdots\lambda_{n-1}}{\mu_1\mu_2\cdots\mu_n}\,x_0 , \qquad n \ge 1 .
$$
Conversely this $x$ satisfies both displayed equations, as substituting back shows, so it is the general solution of $xG = 0$ up to the scalar $x_0$.

**Step 3: normalise.** $x$ can be scaled to a distribution exactly when $\sum_n x_n < \infty$, which with $x_0 = 1$ is the summability condition of the statement; and then $x_0$ is the reciprocal of the sum. $\square$

**Why the second condition is needed for stationarity.** Having a normalisable solution of $\pi G = 0$ is not the same as having a stationary distribution, because part 2 of the stationarity statement also requires the chain to be non-explosive. The route Grimmett and Stirzaker take is to pass to the jump chain: the measure $\nu_n = x_ng_n = x_n(\lambda_n+\mu_n)$ is stationary for the jump chain $Y$, and if it is summable then $Y$ is recurrent, whence $X$ is recurrent and so non-explosive. That summability is the second condition. Their Example (6.11.8), with $\lambda_i = \lambda g_i$ and $\mu_i = \mu g_i$ where $\lambda + \mu = 1$, taking $g_n = 2^{n}$ and $\lambda/\mu \in (1,2)$, satisfies the first condition but not the second; there the jump chain is transient, so $X$ is transient, and since a normalisable $\pi$ with $\pi G = 0$ exists, $X$ must be explosive.
:::

:::remark[Where the hypotheses are used, and the master equation]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, Theorem (6.9.6) and the footnote on (6.9.9), pp. 290-291, Theorem (6.9.17), p. 293, and Example (6.9.16), p. 293, and §6.10, equations (6.10.1)-(6.10.3) and Theorem (6.10.22), pp. 297-298 and 304"}
**Right-continuity is used in three places.** It makes the jump times $T_m$ well defined, so that the holding times, the jump chain and the construction of part 5 of the architecture statement all make sense. It forces $\mathbb{P}_i(U_0 > 0) = 1$ and hence $g_i < \infty$ in part 3 of that statement, which we take from Grimmett and Stirzaker rather than prove: if the paths were not right-continuous the chain could leave $i$ immediately, $U_0$ would be $0$ almost surely, and $g_i$ would be $\infty$. And it is what makes the path a step function, so that the first move out of $i$ cannot end at $i$ — the fact used in step 1(b) of the proof to show that leaving $i$ and returning within a window of length $h$ costs $O(h^{2})$. Grimmett and Stirzaker adopt right-continuity precisely to avoid the measure-theoretic complications of the general theory, and note that without it one must look elsewhere for a treatment.

**Finiteness of $S$ is used twice in the proof.** In step 1 it bounds the jump rates, $g = \max_kg_k < \infty$, which is what makes two moves in a window of length $h$ cost $O(h^{2})$ and makes the errors in the short-time expansion uniform over the states. In step 3 it makes the sum over $k$ finite, so that finitely many uniform $o(h)$ terms can be collected into one and the limit taken through the sum. Everything downstream of those steps — uniqueness of the solution, $P_t = e^{tG}$, the equivalence of the forward and backward systems — is conditional on it. For infinite $S$ the two systems can have different solution sets, and the chain supplies the minimal one.

**Explosion is the obstruction, and it is real.** For a birth process with rates $\lambda_n$, Grimmett and Stirzaker's criterion is that the chain is non-explosive if and only if $\sum_n\lambda_n^{-1} = \infty$. So birth rates $\lambda_n = (1+n)^{2}$ give a population that becomes infinite in finite time with positive probability, and then $\sum_j p_{ij}(t) < 1$, the deficit being the probability of having escaped to infinity by time $t$. The three sufficient conditions in part 6 of the architecture statement are the ones worth checking in practice, and the first — $S$ finite — covers most applications.

**Irreducibility and non-explosion are both needed in the limit theorem,** and nothing else is. Aperiodicity, which the discrete-time theorem cannot do without, has no analogue here: by the dichotomy noted above, an irreducible continuous-time chain has $p_{ij}(t) > 0$ for every $t > 0$, so there is no parity obstruction for a limit to overcome. A chain that merely satisfies $\pi G = 0$ with $\pi$ a distribution, but explodes, is not covered, and the birth-death example above shows the conclusion can then fail.

**The master equation.** Physicists usually meet the forward equation not as a matrix identity but as a balance of gains against losses. Let $\mu_j(t) = \mathbb{P}(X(t) = j)$. Multiplying $P_t' = P_tG$ on the left by the initial distribution gives $\frac{d}{dt}\mu(t) = \mu(t)G$, that is $\mu_j'(t) = \sum_i \mu_i(t)g_{ij}$. Splitting off the diagonal term and using $g_{jj} = -\sum_{k \ne j}g_{jk}$,
$$
\frac{d\mu_j}{dt} \;=\; \underbrace{\sum_{i \ne j}\mu_i(t)\,g_{ij}}_{\text{flow into } j} \;-\; \underbrace{\mu_j(t)\sum_{k \ne j}g_{jk}}_{\text{flow out of } j} .
$$
This gain-loss form is what is called the master equation of the process; the rates $g_{ij}$ are then usually written $W(i \to j)$ or $W_{ji}$. Stationarity, $\pi G = 0$, says that the two flows balance for every state when summed over the other states; detailed balance, $\pi_ig_{ij} = \pi_jg_{ji}$ for each pair, is the strictly stronger statement that they balance pair by pair, and for a birth-death chain the two coincide, because the only pairs joined by a direct transition are neighbours and step 1 of the proof above showed that the neighbour balances then hold automatically. Note also that the diagonal of $G$ carries no information beyond the off-diagonal entries: it is fixed by the row-sum condition, which is why a master equation is specified by its rates alone.
:::

:::method[Setting up and solving a continuous-time chain]{provenance=original}
1. **List the states and the transitions.** For each ordered pair $i \ne j$ of states between which a single event can carry the system, write down the rate $g_{ij}$ at which that event occurs when the system is in $i$. Rates, not probabilities: $g_{ij}$ has dimensions of inverse time.
2. **Assemble the generator.** Put the $g_{ij}$ off the diagonal, zeros where no direct transition exists, and fill the diagonal with $g_{ii} = -\sum_{j\ne i}g_{ij}$ so that every row sums to zero. Check that every off-diagonal entry is non-negative; a sign error here is the commonest mistake.
3. **Read off the holding times and the jump chain if you want the sample paths.** The chain stays in $i$ for an exponential time of mean $1/g_i$ with $g_i = -g_{ii}$, and then moves to $j$ with probability $y_{ij} = g_{ij}/g_i$. This is also the recipe for simulating the chain.
4. **Check for explosion if $S$ is infinite.** If $S$ is finite, or $\sup_ig_i < \infty$, or the jump chain is recurrent, there is nothing to do. Otherwise the transition probabilities are the minimal solution of the Kolmogorov equations and may not sum to $1$.
5. **For the equilibrium behaviour, solve the linear system $\pi G = 0$ together with $\sum_j\pi_j = 1$.** For a birth-death chain do not solve it as a system: use the product formula, then normalise. If the chain is irreducible and non-explosive and the system has a solution, that solution is the unique stationary distribution and $p_{ij}(t)\to\pi_j$.
6. **For the time dependence with $S$ finite, exponentiate.** If $G$ has a full set of eigenvectors, diagonalise $G = B\Lambda B^{-1}$; then $P_t = Be^{t\Lambda}B^{-1}$. A generator need not be diagonalisable, and when it is defective there are two standard ways on: put $G$ in Jordan form, which replaces $e^{t\theta}$ by $e^{t\theta}$ times a polynomial in $t$ of degree one less than the block size, or invert the Laplace transform, $P_t = \mathcal{L}^{-1}\bigl[(\sigma I - G)^{-1}\bigr]$, which needs no eigenvectors at all (:ref[The matrix exponential]{to=linalg.matrix-exponential}). Either way the spectrum is the same, and it always contains the eigenvalue $0$, since $G$ has row sums $0$ and therefore the right eigenvector $(1,1,\dots,1)^{\mathsf T}$. For a finite irreducible generator the eigenvalue $0$ is simple and all the other eigenvalues have negative real parts, and the slowest of them, $-\lvert\operatorname{Re}\theta\rvert$ with $\theta$ the non-zero eigenvalue closest to the imaginary axis, sets the relaxation time $1/\lvert\operatorname{Re}\theta\rvert$ towards equilibrium.
7. **For an infinite $S$ with structure, use generating functions.** Multiply the master equation for $\mu_n(t)$ by $s^{n}$ and sum, turning the infinite system into one partial differential equation for $G(s,t) = \sum_n\mu_n(t)s^{n}$, exactly as for the Poisson process in :ref[The Poisson process]{to=prob.poisson-process}.
:::

:::example[Two instruments, two technicians]{provenance=original}
A laboratory runs two identical instruments. Each working instrument fails at rate $\varphi = \tfrac12$ per hour; each failed instrument is repaired at rate $r = \tfrac32$ per hour, and there are two technicians, so repairs proceed in parallel. All four clocks are independent and exponential. Let $X(t) \in \{0,1,2\}$ be the number of failed instruments.

**Step 1: the generator.** From state $0$ (both working) either instrument may fail, so the total failure rate is $2\varphi = 1$. From state $1$ the one working instrument fails at rate $\varphi = \tfrac12$ and the one failed instrument is repaired at rate $r = \tfrac32$. From state $2$ both repairs are under way, at total rate $2r = 3$. This is a birth-death chain with $\lambda_0 = 1$, $\lambda_1 = \tfrac12$, $\mu_1 = \tfrac32$, $\mu_2 = 3$, so
$$
G = \begin{pmatrix} -1 & 1 & 0 \\[2pt] \tfrac32 & -2 & \tfrac12 \\[2pt] 0 & 3 & -3 \end{pmatrix} ,
$$
whose rows sum to $0$ and whose off-diagonal entries are non-negative.

**Step 2: the stationary distribution, by the product formula.** The birth-death recursion $x_n = (\lambda_{n-1}/\mu_n)x_{n-1}$ terminates here after two steps, since the state space is finite:
$$
x_0 = 1 , \qquad x_1 = \frac{\lambda_0}{\mu_1} = \frac{1}{3/2} = \frac23 , \qquad x_2 = \frac{\lambda_0\lambda_1}{\mu_1\mu_2} = \frac{1\cdot\frac12}{\frac32\cdot 3} = \frac19 .
$$
The total is $1 + \tfrac23 + \tfrac19 = \tfrac{16}{9}$, so
$$
\pi = \Bigl(\tfrac{9}{16},\ \tfrac{6}{16},\ \tfrac{1}{16}\Bigr) = (0.5625,\ 0.375,\ 0.0625) .
$$
Check: $\pi G = \bigl(-\tfrac{9}{16}+\tfrac32\cdot\tfrac{6}{16},\ \tfrac{9}{16}-2\cdot\tfrac{6}{16}+3\cdot\tfrac{1}{16},\ \tfrac12\cdot\tfrac{6}{16}-3\cdot\tfrac{1}{16}\bigr) = (0,0,0)$.

**Step 3: the time dependence.** The eigenvalues of $G$ are $0$, $-2$ and $-4$ (their sum is the trace, $-6$). Diagonalising and exponentiating,
$$
p_{00}(t) = \frac{9}{16} + \frac38 e^{-2t} + \frac{1}{16}e^{-4t} ,
\qquad
p_{02}(t) = \frac{1}{16}\bigl(1 - e^{-2t}\bigr)^{2} .
$$
At $t = 1$ hour, starting from both instruments working,
$$
p_{00}(1) = 0.5625 + 0.375\,e^{-2} + 0.0625\,e^{-4} = 0.6143954586 ,
$$
and $p_{02}(1) = \tfrac{1}{16}(1-e^{-2})^{2} = 0.04672782$. As $t\to\infty$ these tend to $\tfrac{9}{16}$ and $\tfrac{1}{16}$, as the limit theorem requires. The slowest non-zero eigenvalue is $-2$, so the relaxation time is $\tfrac12$ hour.

**Step 4: an independent check.** Because the two instruments never interact — each has its own clock and its own technician — $X(t)$ is the sum of two independent two-state chains. A single instrument has generator $\bigl(\begin{smallmatrix}-1/2 & 1/2\\ 3/2 & -3/2\end{smallmatrix}\bigr)$, hence stays up with probability $\tfrac34 + \tfrac14e^{-2t}$ and has stationary up-probability $\tfrac34$. Therefore $X(t)$ should be binomial, and indeed
$$
\Bigl(\tfrac34 + \tfrac14e^{-2t}\Bigr)^{2} = \frac{9}{16} + \frac38e^{-2t} + \frac{1}{16}e^{-4t} = p_{00}(t) ,
$$
while $\pi$ is the binomial distribution with two trials and success probability $\tfrac14$: $(\tfrac9{16},\tfrac6{16},\tfrac1{16})$. The eigenvalues $0,-2,-4$ are $0$ and $-2$ from one factor added to $0$ and $-2$ from the other.

**Step 5: a number the laboratory cares about.** In equilibrium both instruments are down a fraction $\pi_2 = \tfrac{1}{16}$ of the time, that is $24/16 = 1.5$ hours per day. The mean number down is $2\times\tfrac14 = 0.5$. Finally, the mean time to reach the state "both down" starting from "both up" solves the hitting-time system $1 + \sum_k g_{jk}m_k = 0$ for $j \notin\{2\}$, with $m_2 = 0$; this is the system of :cite[Grimmett and Stirzaker's Exercise (6.9.6)]{work=grimmett-stirzaker-2020 loc="Exercise (6.9.6), p. 296"}, whose minimal non-negative solution gives the mean hitting times. Here it reads
$$
1 - m_0 + m_1 = 0 , \qquad 1 + \tfrac32m_0 - 2m_1 = 0 ,
$$
whose solution is $m_1 = 5$ and $m_0 = 6$. Starting from a fully working laboratory, the expected wait until both instruments are simultaneously down is exactly $6$ hours.
:::

:::application[Master equations in physics, chemistry and queueing]{provenance=adapted src="grimmett-stirzaker-2020:§6.9, Exercise (6.9.3), p. 296, and §6.11, Example (6.11.12) and Theorem (6.11.14), pp. 308-309, Example (6.11.15) with Theorem (6.11.16), pp. 309-310, and Corollary (6.11.18), p. 310"}
**Rate equations for populations of states.** Whenever a physical system occupies one of a discrete set of configurations and hops between them at rates fixed by the configuration alone, its probability distribution obeys a master equation, and the system is a continuous-time Markov chain. Nuclear decay chains, the populations of atomic levels under incoherent pumping and spontaneous emission, the open and closed states of an ion channel, and the conformations of a macromolecule are all of this kind. In each case the physics supplies the generator, the equilibrium populations follow from $\pi G = 0$, and the relaxation rates are the non-zero eigenvalues of $G$. Where the rates satisfy detailed balance with respect to a Boltzmann distribution, $g_{ij}e^{-\beta E_i} = g_{ji}e^{-\beta E_j}$, that Boltzmann distribution is automatically stationary — which is how a kinetic model is made thermodynamically consistent.

**Chemical kinetics with small numbers of molecules.** In a well-stirred vessel containing few copies of each species, the state is the vector of molecule counts and each reaction channel contributes a transition at a rate proportional to the number of available reactant combinations. The resulting master equation is the chemical master equation; the deterministic rate law is its large-volume limit. A single species that is produced at constant rate $\lambda$ and destroyed independently per molecule at rate $\mu$ is exactly a birth-death chain with $\lambda_n = \lambda$ and $\mu_n = n\mu$, and Grimmett and Stirzaker's Theorem (6.11.14) gives the equilibrium: the molecule number is Poisson with mean $\rho = \lambda/\mu$. The fluctuation is therefore $\sqrt\rho$, so the relative noise in a species held at a copy number of a hundred is about ten per cent — the basic reason that stochastic effects matter in gene expression.

**Population growth and extinction.** The simple birth-death chain with $\lambda_n = n\lambda$ and $\mu_n = n\mu$ models a population in which individuals reproduce and die independently. Its generating function is computed in Grimmett and Stirzaker's Theorem (6.11.16); differentiating that generating function gives the mean population $\mathbb{E}_I(X(t)) = Ie^{(\lambda-\mu)t}$, which they display just after the theorem rather than inside it, and their Corollary (6.11.18) gives an extinction probability tending to $1$ if $\lambda \le \mu$ and to $(\mu/\lambda)^{I}$ if $\lambda > \mu$ — the continuous-time counterpart of the extinction criterion for branching processes.

**Queues.** Jobs arriving at a processor in the manner of a Poisson process of rate $\lambda$, each requiring an independent exponential service time of rate $\mu$, make the number in the system a birth-death chain with $\lambda_n = \lambda$ for all $n$ and $\mu_n = \mu$ for $n \ge 1$. The product formula gives $x_n = (\lambda/\mu)^{n}$, which is summable exactly when $\lambda < \mu$; Grimmett and Stirzaker set this as Exercise (6.9.3), with the conclusion that a stationary distribution exists if and only if $\lambda < \mu$, in which case $\pi_n = (1-\rho)\rho^{n}$ with $\rho = \lambda/\mu$. The mean number in the system is then $\rho/(1-\rho)$, which blows up as the arrival rate approaches the service rate: the familiar fact that a server loaded to ninety per cent of capacity carries, on average, nine jobs rather than one.
:::
