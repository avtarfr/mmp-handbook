---
id: prob.random-walks
title: Random walks
kind: theorem
level: core
summary: "Solves the gambler's ruin problem for a simple random walk between two absorbing barriers, and proves Polya's trichotomy: the symmetric nearest-neighbour walk returns to its starting point with probability one on the line and on the plane, but not in space, where the return probability is about 0.34."
prereqs: [prob.markov-chains, prob.generating-functions, prob.characteristic-functions]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§3.9 Simple random walk: the construction (3.9.1)-(3.9.2), Lemmas (3.9.3), (3.9.4) and (3.9.5) (spatial and temporal homogeneity, the Markov property), Example (3.9.6) with the difference equation (3.9.7) and its solution, and Example (3.9.6) continued with the duration equation (3.9.8) and its solution (3.9.9), pp. 77-80; §5.3 Random walk: Theorem (5.3.1) (the generating functions $P_0$ and $F_0$) with its proof, equation (5.3.3) and Corollary (5.3.4), pp. 183-185; Problem (5.12.5) (Stirling asymptotics for $p_0(2n)$ and recurrence iff $p=\\tfrac12$) and Problem (5.12.6) (the symmetric walk in two dimensions and the return probability one), p. 231; §6.2, Corollary (6.2.4) (the summability criterion for recurrence), Definition (6.2.10) (period) and Example (6.2.12) (the states of the simple random walk), pp. 248-249; Problem (6.15.9) (the symmetric walk in three dimensions, the multinomial identity for $\\mathbb{P}(\\mathbf{X}_{2n} = 0)$, and transience of the origin by Stirling's formula), p. 340"
    pages: "77-80, 183-185, 231, 248-249, 340"
    role: the definition of simple random walk and its homogeneity and Markov properties; the conditioning route to the gambler's ruin difference equation and the closed forms for the ruin probability and the mean duration; the generating-function identity and the return probability $1 - |p-q|$ in one dimension; the summability criterion for recurrence and the classification of the states of the walk; the counting identities and the Stirling route to recurrence in two dimensions and transience in three
  - work: rhb-2006
    loc: "§30.6 Functions of random variables, the worked general one-dimensional random walk, the Fourier representation (30.64) of the density of the total displacement, and the characteristic function $C(k)$ of a single step, p. 1155"
    pages: "1155"
    role: the characteristic-function (Fourier) representation of the distribution of the displacement after n independent steps, used here for the lattice Green function and for the general-step walk in the application
---

:::definition[Simple random walk, on the line and on the lattice]{provenance=adapted src="grimmett-stirzaker-2020:§3.9, equations (3.9.1)-(3.9.2) and Lemmas (3.9.3)-(3.9.5), pp. 77-79; grimmett-stirzaker-2020:Problem (6.15.9), p. 340"}
Let $X_1, X_2, \dots$ be independent, all carrying the same two-point law, which puts mass $p$ on the value $+1$ and mass $q = 1 - p$ on the value $-1$, with $0 < p < 1$. The **simple random walk** started at $a \in \mathbb{Z}$ is the sequence

$$
S_0 = a , \qquad S_n = a + \sum_{i=1}^{n} X_i \quad (n \ge 1) .
$$

The walk is **symmetric** if $p = q = \tfrac12$. It is spatially homogeneous ($\mathbb{P}(S_n = j \mid S_0 = a)$ depends only on $j - a$), temporally homogeneous, and has the Markov property, so it is a Markov chain on $\mathbb{Z}$ in the sense of :ref[Discrete-time Markov chains]{to=prob.markov-chains}, with transition probabilities $p_{i,i+1} = p$, $p_{i,i-1} = q$ and all others zero.

Two variants are needed below.

**Absorbing barriers.** Fix an integer $N \ge 1$ and restrict to the state space $\{0, 1, \dots, N\}$, declaring $0$ and $N$ to be **absorbing**: $p_{00} = p_{NN} = 1$. In gambling language, a player holding $k$ units stakes one unit on each of a sequence of independent bets won with probability $p$, and stops on reaching $0$ (ruin) or $N$ (the target).

**The lattice walk in $d$ dimensions.** Let $\mathbf{S}_0 = \mathbf{0}$ and $\mathbf{S}_n = \sum_{i \le n}\boldsymbol{\epsilon}_i$, where the steps $\boldsymbol{\epsilon}_i$ are independent and uniform on the $2d$ unit vectors $\pm \mathbf{e}_1, \dots, \pm \mathbf{e}_d$ of $\mathbb{Z}^d$, each with probability $1/(2d)$. For $d = 1$ this is the symmetric walk above.

**Occupation and first-return probabilities.** Whichever of these unrestricted walks is under discussion — the walk on $\mathbb{Z}$ with parameter $p$, started at $a = 0$, or the symmetric lattice walk in $d$ dimensions — we write

$$
p_0(n) = \mathbb{P}(\text{walk is at the origin at time } n) ,
\qquad
f_0(n) = \mathbb{P}(\text{the first return to the origin occurs at time } n) ,
$$

with $p_0(0) = 1$ and $f_0(0) = 0$. In every case a single step changes the parity of the sum of the coordinates, so $p_0(n) = 0$ for odd $n$ and every state has period $2$.

The walk is called **recurrent** if it returns to its starting point with probability one and **transient** otherwise; by spatial homogeneity this does not depend on the starting point, and it is the recurrence of the origin as a state of the chain.
:::

:::statement[Gambler's ruin]{provenance=adapted src="grimmett-stirzaker-2020:§3.9, Example (3.9.6), the difference equations (3.9.7) and (3.9.8) and their solutions, including (3.9.9), pp. 79-80; grimmett-stirzaker-2020:Exercise (3.9.1), p. 80"}
Take the walk of the definition, confined as described to the states $0, 1, \dots, N$ and absorbed at whichever end it reaches first, and start it from $k$, where $0 \le k \le N$. Write $\mathbb{P}_k$ and $\mathbb{E}_k$ for probabilities and expectations of the walk so started, write $p_k$ for the chance that it finishes at $0$ rather than at $N$ (the **ruin probability**, indexed by the starting state; it has nothing to do with the occupation probabilities $p_0(n)$ of the definition, which are indexed by time, and the clash of the two at $p_0 = p_0(0) = 1$ is a coincidence of values), write $D_k$ for the mean number of steps it makes before stopping, and put $\rho = q/p$. Then

$$
p_k \ = \
\begin{cases}
\dfrac{\rho^{\,k} - \rho^{\,N}}{1 - \rho^{\,N}} , & p \ne \tfrac12 , \\[10pt]
1 - \dfrac{k}{N} , & p = \tfrac12 ,
\end{cases}
\qquad\qquad
D_k \ = \
\begin{cases}
\dfrac{1}{q - p}\left( k - N\,\dfrac{1 - \rho^{\,k}}{1 - \rho^{\,N}} \right) , & p \ne \tfrac12 , \\[10pt]
k\,(N - k) , & p = \tfrac12 .
\end{cases}
$$

Absorption is certain, and the time $T$ it takes has a geometric tail: writing $\delta = \min(p, q)^N > 0$,

$$
\mathbb{P}_k(T > mN) \ \le \ (1 - \delta)^m \qquad (m = 0, 1, 2, \dots) .
$$

In particular $\mathbb{P}_k(T < \infty) = 1$ and every moment of $T$ is finite, so $D_k = \mathbb{E}_k(T)$ is the finite number displayed above, and $1 - p_k$ is the probability of reaching the upper barrier $N$.
:::

:::statement[Polya's trichotomy: recurrence in one and two dimensions, transience in three]{provenance=adapted src="grimmett-stirzaker-2020:§5.3, Theorem (5.3.1) and Corollary (5.3.4), pp. 183-185; grimmett-stirzaker-2020:§6.2, Corollary (6.2.4) and Example (6.2.12), pp. 248-249; grimmett-stirzaker-2020:Problems (5.12.5), (5.12.6), p. 231, and Problem (6.15.9), p. 340"}
**(a) The criterion, specialised to the walk.** By the summability criterion of :ref[Discrete-time Markov chains]{to=prob.markov-chains}, a state $j$ is recurrent exactly when $\sum_n p_{jj}(n) = \infty$. Here $p_0(n) = 0$ at odd $n$, so the lattice walk is recurrent exactly when

$$
\sum_{n \ge 0} p_0(2n) = \infty ,
$$

and this sum is the expected number of visits the walk makes to the origin.

**(b) One dimension, general $p$.** For the simple random walk on $\mathbb{Z}$, the generating functions $P_0(s) = \sum_n s^n p_0(n)$ and $F_0(s) = \sum_n s^n f_0(n)$ of the occupation and first-return probabilities satisfy

$$
P_0(s) = 1 + P_0(s)F_0(s), \qquad P_0(s) = (1 - 4pqs^2)^{-1/2}, \qquad F_0(s) = 1 - (1 - 4pqs^2)^{1/2} ,
$$

so that the chance of a return to the origin ever occurring is

$$
F_0(1) = 1 - \lvert p - q \rvert .
$$

Recurrence therefore holds precisely at $p = \tfrac12$, and there the mean time until the walk first comes back diverges: the symmetric walk on $\mathbb{Z}$ is **null recurrent**, and every state has period $2$. For $p \neq \tfrac12$ every state is transient. Equivalently, $p_0(2n) \sim (4pq)^n/\sqrt{\pi n}$, which is summable precisely when $4pq < 1$, that is when $p \neq \tfrac12$.

**(c) Two dimensions.** For the symmetric walk on $\mathbb{Z}^2$,

$$
p_0(2n) \ = \ \left[ \binom{2n}{n} 4^{-n} \right]^2 \ \sim \ \frac{1}{\pi n} ,
$$

so $\sum_n p_0(2n) = \infty$ and the walk is recurrent: it returns to the origin with probability one.

**(d) Three dimensions.** For the symmetric walk on $\mathbb{Z}^3$,

$$
p_0(2n) \ = \ \binom{2n}{n} 2^{-2n} \sum_{i+j+k=n} \left( \frac{n!}{3^{\,n}\, i!\,j!\,k!} \right)^{2}
\ \le \ \frac{C}{n^{3/2}}
$$

for a finite constant $C$, so $\sum_n p_0(2n) < \infty$ and the walk is **transient**.
:::

:::idea{provenance=original}
Both halves of the unit come from the Markov property, used in two different ways.

For gambler's ruin, condition on the first bet. The walk started at $k$ is, after one step, a walk started at $k+1$ or at $k-1$, with no memory of how it got there. So the unknown $p_k$ satisfies a linear second-order difference equation in $k$ — the discrete analogue of Laplace's equation — with boundary values $1$ at $0$ and $0$ at $N$. Its characteristic equation $p\theta^2 - \theta + q = 0$ has the roots $1$ and $q/p$. When $p \ne q$ the two roots are distinct and the powers $1^k$ and $(q/p)^k$ span the solutions; in the symmetric case the root $1$ is repeated, the second solution is $k$ rather than a second power, and the general solution reads $A_1 + A_2 k$. The expected duration satisfies the same equation with an inhomogeneous term $1$, because one step has been used up.

For recurrence, condition instead on the time of first return. That turns the sequence $p_0(n)$ into the convolution of itself with the first-return sequence, and convolution is multiplication of generating functions, which inverts to $P_0 = 1/(1 - F_0)$. Letting $s \uparrow 1$ converts the question "is return certain?" into the question "is $\sum_n p_0(n)$ infinite?" — a question about the *size* of the walk, not its combinatorics. And the size is set by the central limit scaling: after $n$ steps the walk is spread over a region of diameter $\sqrt{n}$ in each direction, so the chance of being at any one named site, the origin included, is of order $n^{-d/2}$. The series $\sum n^{-d/2}$ diverges for $d = 1, 2$ and converges for $d \ge 3$. Everything below is this one-line dimension count made exact.
:::

:::proof[Gambler's ruin]{provenance=adapted src="grimmett-stirzaker-2020:§3.9, Example (3.9.6) and the solution of (3.9.7) and (3.9.8), pp. 79-80"}
**Absorption is certain and $D_k$ is finite.** This has to come first, because the difference equations below are solved in the real numbers, which presupposes that their solutions are finite; the recursions themselves are also satisfied by $D \equiv \infty$. Let $T$ be the absorption time and $\delta = \min(p,q)^N$. Whatever the walk has done so far, if it is not yet absorbed it sits at some $i$ with $0 < i < N$, and if its next $N$ steps are all $+1$ it reaches $N$ after $N - i < N$ of them and is absorbed. That block of steps has probability $p^N \ge \delta$, and the steps are independent of the past, so from any position not yet absorbed the chance of absorption within the next $N$ steps is at least $\delta$. Iterating over $m$ disjoint blocks of $N$ steps gives $\mathbb{P}_k(T > mN) \le (1-\delta)^m$. Hence $\mathbb{P}_k(T = \infty) = 0$, and summing the tail,

$$
D_k = \mathbb{E}_k(T) = \sum_{n \ge 0}\mathbb{P}_k(T > n) \ \le \ N\sum_{m \ge 0}(1-\delta)^m = \frac{N}{\delta} \ < \ \infty .
$$

(The same bound makes every moment of $T$ finite, which is the content of Exercise (3.9.1) of the source.) Since absorption is certain, $p_k$ and $1 - p_k$ are the probabilities of the two alternatives, finishing at $0$ and finishing at $N$.

**The difference equation.** Let $1 \le k \le N-1$ and condition on the first step. With probability $p$ the walk moves to $k+1$, and by the Markov property and temporal homogeneity it is then absorbed at $0$ with probability $p_{k+1}$; with probability $q$ it moves to $k-1$ and is absorbed at $0$ with probability $p_{k-1}$. Hence

$$
p_k = p\,p_{k+1} + q\,p_{k-1} , \qquad 1 \le k \le N-1 ,
$$

with $p_0 = 1$ and $p_N = 0$ because those states are absorbing.

**Solving it.** Substituting the trial solution $p_k = \theta^{\,k}$ and dividing by $\theta^{\,k-1}$ gives the characteristic equation $p\theta^2 - \theta + q = 0$, whose roots are $\theta = 1$ and $\theta = q/p = \rho$, since $p + q = 1$.

*Case $p \ne \tfrac12$.* The roots are distinct, so the general solution is $p_k = A_1 + A_2\rho^{\,k}$. The boundary conditions give $A_1 + A_2 = 1$ and $A_1 + A_2\rho^{\,N} = 0$, so $A_2 = 1/(1 - \rho^{\,N})$ and $A_1 = -\rho^{\,N}/(1-\rho^{\,N})$, which is the stated formula.

*Case $p = \tfrac12$.* The root $\theta = 1$ is repeated, so the general solution is $p_k = A_1 + A_2 k$, and the boundary conditions give $A_1 = 1$, $A_2 = -1/N$.

**The duration.** Condition on the first step again, this time keeping track of the step taken. From $k$, one step is spent and the walk then needs $D_{k\pm1}$ further steps on average, so

$$
D_k = p\,(1 + D_{k+1}) + q\,(1 + D_{k-1}) = 1 + p D_{k+1} + q D_{k-1} , \qquad 1 \le k \le N-1 ,
$$

with $D_0 = D_N = 0$. This is the same homogeneous equation with the constant forcing term $1$, so the general solution is a particular solution plus $A_1 + A_2\rho^{\,k}$ (or $A_1 + A_2 k$ when $p = \tfrac12$).

*Case $p \ne \tfrac12$.* Try the particular solution $D_k = ck$. Then $ck = 1 + cp(k+1) + cq(k-1) = 1 + ck + c(p - q)$, so $c = 1/(q-p)$. Imposing $D_0 = D_N = 0$ on $D_k = k/(q-p) + A_1 + A_2\rho^{\,k}$ gives $A_1 + A_2 = 0$ and $N/(q-p) + A_1 + A_2\rho^{\,N} = 0$, so $A_2 = -A_1$ and $A_1 (1 - \rho^{\,N}) = -N/(q-p)$. Substituting back,

$$
D_k = \frac{1}{q-p}\left( k - N\,\frac{1 - \rho^{\,k}}{1 - \rho^{\,N}} \right) .
$$

*Case $p = \tfrac12$.* Now $p - q = 0$, so a linear particular solution cannot work; try $D_k = ck^2$, giving $ck^2 = 1 + \tfrac{c}{2}[(k+1)^2 + (k-1)^2] = 1 + ck^2 + c$, so $c = -1$. With $D_k = -k^2 + A_1 + A_2 k$ and $D_0 = D_N = 0$ we get $A_1 = 0$ and $A_2 = N$, that is $D_k = k(N-k)$.

Both solutions are legitimate because the tail bound at the head of the proof has already made $p_k$ and $D_k$ finite. $\square$
:::

:::proof[Recurrence in one and two dimensions, transience in three]{provenance=adapted src="grimmett-stirzaker-2020:§5.3, Theorem (5.3.1) and Corollary (5.3.4), pp. 183-185; grimmett-stirzaker-2020:§6.2, Corollary (6.2.4), p. 248; grimmett-stirzaker-2020:Problems (5.12.5), (5.12.6), p. 231, and Problem (6.15.9), p. 340"}
**The criterion.** This part is taken over from the prerequisite rather than reproved: the renewal decomposition and its generating-function consequence are established for a general chain in :ref[Discrete-time Markov chains]{to=prob.markov-chains}, and we record only what they say for the walk. Splitting a visit to the origin at time $n \ge 1$ according to the time $r$ of the *first* return gives $n$ disjoint possibilities that exhaust the event. On each of them the walk starts afresh at the origin at time $r$ — note that $\{\text{first return at } r\}$ is not an event about the state at a single time but a condition on the whole path up to $r$, so the Markov property is applied at the fixed time $r$ to each such path separately and the contributions are then summed — and therefore

$$
p_0(n) = \sum_{r=1}^{n} f_0(r)\, p_0(n-r) .
$$

Multiplying by $s^n$, summing over $n \ge 1$ and using $p_0(0) = 1$ turns this convolution into $P_0(s) = 1 + F_0(s)P_0(s)$, that is $P_0(s) = 1/(1 - F_0(s))$ for $\lvert s \rvert < 1$; letting $s \uparrow 1$ termwise, which Abel's theorem permits because all coefficients are non-negative,

$$
\sum_{n \ge 0} p_0(n) = \frac{1}{1 - f} , \qquad f := \sum_{n \ge 1} f_0(n) = \mathbb{P}(\text{ever return}) ,
$$

read with the convention $1/0 = \infty$: if $f = 1$ then $F_0(s) \uparrow 1$ and $P_0(s) = 1/(1 - F_0(s)) \uparrow \infty$, so the left-hand side, a series of non-negative terms, diverges. So the sum is infinite exactly when $f = 1$, which is part (a); the left-hand side is also the expected number of visits to the origin. What is left to do, and what the rest of the proof does, is to compute $p_0(n)$ in each dimension.

**(b) One dimension.** The walk is at the origin at time $n$ only if $n = 2m$ is even and exactly $m$ of the steps were $+1$, so

$$
p_0(2m) = \binom{2m}{m}(pq)^m .
$$

The generating function of $\binom{2m}{m}x^m$ is $(1-4x)^{-1/2}$, so $P_0(s) = (1 - 4pqs^2)^{-1/2}$ and therefore $F_0(s) = 1 - 1/P_0(s) = 1 - (1-4pqs^2)^{1/2}$. At $s = 1$,

$$
f = F_0(1) = 1 - \sqrt{1 - 4pq} = 1 - \sqrt{(p+q)^2 - 4pq} = 1 - \lvert p - q\rvert ,
$$

using $p + q = 1$. Hence $f = 1$ if and only if $p = q = \tfrac12$. When $p = \tfrac12$, $F_0(s) = 1 - (1-s^2)^{1/2}$ and $F_0'(s) = s(1-s^2)^{-1/2} \to \infty$ as $s \uparrow 1$, so the mean return time is infinite and the walk is null recurrent. The same conclusion follows from the criterion: Stirling's formula $m! \sim m^{m+1/2}e^{-m}\sqrt{2\pi}$ gives $\binom{2m}{m} \sim 4^m/\sqrt{\pi m}$ and hence

$$
p_0(2m) \sim \frac{(4pq)^m}{\sqrt{\pi m}} ,
$$

which sums to $\infty$ iff $4pq = 1$, that is iff $p = \tfrac12$.

**(c) Two dimensions.** The walk is at the origin at time $2n$ exactly when, for some $k$, it made $k$ steps east, $k$ west, $n-k$ north and $n-k$ south. The number of orderings is the multinomial coefficient, and each of the $4^{2n}$ step sequences is equally likely, so

$$
p_0(2n) = 4^{-2n}\sum_{k=0}^{n}\frac{(2n)!}{k!\,k!\,(n-k)!\,(n-k)!} .
$$

Factor the summand as $\binom{2n}{n}\binom{n}{k}^2$, which is an identity between factorials:

$$
\binom{2n}{n}\binom{n}{k}^2 = \frac{(2n)!}{n!\,n!}\cdot\left(\frac{n!}{k!\,(n-k)!}\right)^2 = \frac{(2n)!}{k!^2\,(n-k)!^2} .
$$

By Vandermonde's identity $\sum_{k=0}^n \binom{n}{k}^2 = \binom{2n}{n}$, so the sum collapses and

$$
p_0(2n) = 4^{-2n}\binom{2n}{n}^{2} = \left[\binom{2n}{n}4^{-n}\right]^{2} \sim \left(\frac{1}{\sqrt{\pi n}}\right)^{2} = \frac{1}{\pi n} ,
$$

again by Stirling. Since $\sum_n 1/(\pi n)$ diverges, the criterion gives recurrence, and the return probability is $1$.

**(d) Three dimensions.** Now the walk is at the origin at time $2n$ exactly when, for some $i, j, k \ge 0$ with $i + j + k = n$, it made $i$ steps along each of $\pm\mathbf{e}_1$, $j$ along each of $\pm\mathbf{e}_2$ and $k$ along each of $\pm\mathbf{e}_3$. There are $6^{2n}$ equally likely step sequences, so

$$
p_0(2n) = 6^{-2n}\sum_{i+j+k=n}\frac{(2n)!}{(i!\,j!\,k!)^{2}}
= \binom{2n}{n}2^{-2n}\sum_{i+j+k=n}\left(\frac{n!}{3^{\,n}\,i!\,j!\,k!}\right)^{2} ,
$$

where the second form follows by writing $6^{-2n} = 4^{-n}9^{-n}$ and $(2n)!/(i!j!k!)^2 = \binom{2n}{n}\,(n!/(i!j!k!))^2$. The rewriting is the point: the numbers $w_{ijk} = n!/(3^n i!\,j!\,k!)$ are non-negative and sum to $1$, because $\sum_{i+j+k=n} n!/(i!j!k!) = 3^n$ by the multinomial theorem. Therefore

$$
\sum_{i+j+k=n} w_{ijk}^{2} \ \le \ \Bigl(\max_{i+j+k=n} w_{ijk}\Bigr)\sum_{i+j+k=n} w_{ijk} \ = \ \max_{i+j+k=n} w_{ijk} .
$$

The multinomial coefficient $n!/(i!j!k!)$ is largest when the three parts are as equal as possible, since replacing a pair $(i, j)$ with $i \ge j+2$ by $(i-1, j+1)$ multiplies it by $i/(j+1) > 1$. So the maximum is attained at the nearest-to-equal split, whose parts differ from $n/3$ by less than $1$. For $n$ divisible by $3$ that split is $(n/3, n/3, n/3)$, and Stirling applied to $n!/((n/3)!)^3$ gives

$$
\max_{i+j+k=n} \frac{n!}{i!\,j!\,k!} \ \sim \ \frac{3^{\,n+3/2}}{2\pi n} ,
\qquad\text{so}\qquad
\max_{i+j+k=n} w_{ijk} \ \sim \ \frac{3\sqrt3}{2\pi n} .
$$

For the other two residues each part is $n/3 + O(1)$, which changes the Stirling estimate by a factor $1 + O(1/n)$ only, so the same asymptotic holds for every $n$; numerically the maximum is in fact slightly smaller off the divisible case, $n\max_{i+j+k=n} w_{ijk}$ being $0.8158$ at $n = 121$ and $0.8224$ at $n = 120$, both below the limiting value $3\sqrt3/(2\pi) = 0.8270$.

Combining this with $\binom{2n}{n}2^{-2n} \sim 1/\sqrt{\pi n}$ gives

$$
p_0(2n) \ \le \ \frac{C}{n^{3/2}}\bigl(1 + o(1)\bigr), \qquad C = \frac{3\sqrt3}{2\pi\sqrt{\pi}} = 0.4666 .
$$

The series $\sum_n n^{-3/2}$ converges, so $\sum_n p_0(2n) < \infty$ and the origin is transient. By spatial homogeneity every state is transient. $\square$
:::

:::remark[Where the hypotheses are used, and how sharp the conclusions are]{provenance=original}
**Symmetry in parts (c) and (d).** Only the symmetric walk is treated there, and for good reason: a lattice walk with any non-zero mean drift is transient in every dimension, because the strong law of large numbers of :ref[Laws of large numbers]{to=prob.law-of-large-numbers} already pushes $\mathbf{S}_n/n$ away from the origin. Recurrence in $d = 1, 2$ is a statement about the borderline case of zero drift.

**Independence of the steps.** Used in the counting: every sequence of $2n$ steps has the same probability. For a self-avoiding walk, or any walk with memory, none of the formulas survive, and even the two-dimensional case becomes a hard open problem.

**Finiteness of $N$ in gambler's ruin.** Letting $N \to \infty$ at fixed $k$ in the ruin formula recovers the one-barrier answer: for $p > \tfrac12$ we have $\rho < 1$, so $p_k \to \rho^{\,k} < 1$ and the player survives forever with positive probability, while for $p \le \tfrac12$ we get $p_k \to 1$ and ruin is certain. The mean duration does not follow that pattern, and the three cases must be kept apart. For $p < \tfrac12$ we have $\rho > 1$, so in $D_k$ the ratio $N(1-\rho^{\,k})/(1-\rho^{\,N})$ has a numerator linear in $N$ and a denominator geometric in $N$ and therefore tends to $0$, leaving

$$
D_k \ \longrightarrow \ \frac{k}{q-p} \qquad (p < \tfrac12) :
$$

ruin is certain *and* quick (at $p = \tfrac25$, $k = 5$ the limit is $25$ steps, and the finite-$N$ values $19.18$, $24.80$, $25.00$ at $N = 10, 20, 50$ climb to it). At $p = \tfrac12$, by contrast, $D_k = k(N-k) \to \infty$: ruin is certain while the expected time to it is infinite, so there "ruin is certain" and "ruin happens quickly" come apart. That single case is the null recurrence of part (b) seen from another side; at $p < \tfrac12$ the walk is transient, not null recurrent, and the analogy does not apply to it. (For $p > \tfrac12$ also $D_k \to \infty$, but for the opposite reason: in the limit absorption at $0$ is not certain at all.)

**Higher dimensions.** The cited treatment stops at $d = 3$, and what follows is our own extension. The central limit scaling of the idea block can be made local: after $2n$ steps of the symmetric walk on $\mathbb{Z}^d$ each coordinate has variance $2n/d$, the coordinates are uncorrelated, and the Gaussian density at the origin is $(4\pi n/d)^{-d/2}$, which has to be shared between the two parity classes of sites, giving

$$
p_0(2n) \ \sim \ 2\left(\frac{d}{4\pi n}\right)^{d/2} .
$$

For $d = 1, 2, 3$ this returns $1/\sqrt{\pi n}$, $1/(\pi n)$ and $0.2333\,n^{-3/2}$, the values computed above, and for every $d \ge 3$ it makes $\sum_n p_0(2n)$ converge: all the higher-dimensional walks are transient too, with the exponent $d/2$ in place of $3/2$.

**The exponent versus the constant.** The estimate in (d) is an upper bound, not an asymptotic. Its constant $C = 0.4666$ is exactly twice the true asymptotic constant $3\sqrt3/(4\pi\sqrt\pi) = 0.2333$, because bounding one factor $w_{ijk}$ by its maximum throws away a factor $2$ in the limit: a direct computation of the exact multinomial sum gives $p_0(80) = 9.136\times10^{-4}$ against the bound $C\cdot 40^{-3/2} = 1.844\times10^{-3}$. Transience needs only the exponent $3/2$, so the slack costs nothing.

**How transient is three-dimensional space?** The criterion gives the return probability exactly: $f = 1 - 1/G$ with $G = \sum_{n\ge0}p_0(n)$ the expected number of visits. By the Fourier inversion formula for a lattice-valued sum (see :ref[Characteristic functions]{to=prob.characteristic-functions}, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.6, eq. (30.64), p. 1155"} for the same representation of the displacement of a general multi-step walk), $p_0(n) = (2\pi)^{-3}\int_{[-\pi,\pi]^3}\varphi(\mathbf{k})^n \, d^3k$ with single-step characteristic function $\varphi(\mathbf{k}) = \tfrac13(\cos k_1 + \cos k_2 + \cos k_3)$, so summing the geometric series gives

$$
G = \frac{1}{(2\pi)^3}\int_{[-\pi,\pi]^3}\frac{d^3 k}{1 - \tfrac13(\cos k_1 + \cos k_2 + \cos k_3)} .
$$

Numerical integration gives $G = 1.51639$ and hence $f = 0.34054$: a walker on the cubic lattice comes back to where it started about one time in three, and otherwise never. The partial sums of the exact series agree: $\sum_{n=1}^{40} p_0(2n) = 0.44330$, and estimating the remainder from the true asymptotic constant $C' = 3\sqrt3/(4\pi\sqrt\pi) = 0.2333$ of the previous paragraph,

$$
\sum_{n > 40} p_0(2n) \ \approx \ \int_{40}^{\infty} \frac{C'}{n^{3/2}}\,dn = \frac{2C'}{\sqrt{40}} = 0.0738 ,
$$

which brings the total to $0.5171$ against the exact $G - 1 = 0.51639$.

**Periodicity.** Every state of the lattice walk has period $2$, so the limit theorem of :ref[Convergence of Markov chains]{to=prob.markov-chain-convergence} applies only along even times — and in any case its conclusion here is the uninformative $p_0(2n) \to 0$, since the walk is null recurrent or transient and has no stationary distribution.
:::

:::method[First-passage and absorption problems by conditioning on the first step]{provenance=original}
The gambler's ruin calculation is a template. For a Markov chain on a finite or semi-infinite set of integers with nearest-neighbour steps:

1. **Name the unknown as a function of the starting state**, $h_k$, and make sure it is a quantity to which the Markov property applies: an absorption probability, an expected hitting time, an expected reward collected before absorption.
2. **Condition on the first step.** Each possible first step leads to a state from which the chain starts afresh, so $h_k = \sum_j p_{kj}\,h_j$ for an absorption probability, and $h_k = 1 + \sum_j p_{kj}\,h_j$ for an expected time (the $1$ being the step just taken).
3. **Write the boundary conditions** at the absorbing states: $h = 1$ or $0$ for a probability, $h = 0$ for a hitting time.
4. **Solve the difference equation.** Substitute $h_k = \theta^{\,k}$ into the homogeneous part to get the characteristic polynomial; distinct roots $\theta_1 \ne \theta_2$ give $A_1\theta_1^{\,k} + A_2\theta_2^{\,k}$, a repeated root $\theta$ gives $(A_1 + A_2 k)\theta^{\,k}$. For an inhomogeneous equation add a particular solution, raising the degree of the polynomial trial by one each time it is annihilated by the homogeneous operator.
5. **Fix the constants from the boundary conditions, then sanity-check the limits**: the symmetric case, the $N \to \infty$ case, and the cases $k = 0$ and $k = N$ should all give the obvious answers.
:::

:::example[A bounded betting run at the roulette wheel]{provenance=original}
A player arrives at a European roulette table with $20$ chips and decides to bet one chip on red on each spin, stopping when he reaches $50$ chips or loses everything. A European wheel has $37$ pockets, of which $18$ are red, so

$$
p = \tfrac{18}{37}, \qquad q = \tfrac{19}{37}, \qquad \rho = \frac{q}{p} = \frac{19}{18} = 1.0\overline{5} .
$$

Here $k = 20$ and $N = 50$.

**Ruin probability.** We need $\rho^{20}$ and $\rho^{50}$. From $\log \rho = \log(19/18) = 0.0540672$, we get $20\log\rho = 1.0813444$ and $50\log\rho = 2.7033611$, so

$$
\rho^{20} = e^{1.0813444} = 2.948641 , \qquad \rho^{50} = e^{2.7033611} = 14.929828 .
$$

Hence

$$
p_{20} = \frac{\rho^{20} - \rho^{50}}{1 - \rho^{50}} = \frac{2.948641 - 14.929828}{1 - 14.929828} = \frac{-11.981187}{-13.929828} = 0.860110 .
$$

So the player is ruined with probability $0.8601$, and reaches $50$ chips with probability $0.1399$.

**Expected length of the session.**

$$
D_{20} = \frac{1}{q-p}\left(20 - 50\,\frac{1 - \rho^{20}}{1-\rho^{50}}\right) .
$$

Now $q - p = 1/37$, so $1/(q-p) = 37$, and

$$
\frac{1-\rho^{20}}{1-\rho^{50}} = \frac{1 - 2.948641}{1 - 14.929828} = \frac{-1.948641}{-13.929828} = 0.139890 .
$$

Therefore

$$
D_{20} = 37\,\bigl(20 - 50 \times 0.139890\bigr) = 37 \times \bigl(20 - 6.99450\bigr) = 37 \times 13.00550 = 481.204 .
$$

(The exact rational value is $481.2038$, so the six-figure intermediate quantities have cost nothing.) The session lasts about $481$ spins on average.

**The fair game for comparison.** Had the wheel had no zero, $p = q = \tfrac12$ would give

$$
p_{20} = 1 - \tfrac{20}{50} = 0.6 , \qquad D_{20} = 20 \times 30 = 600 .
$$

The single green pocket, a house edge of $1/37 = 2.7\%$ per spin, raises the chance of ruin from $0.600$ to $0.860$ and shortens the expected session from $600$ spins to $481$. A useful way to see where the money goes: the expected loss is $q - p = 37^{-1}$ chips per spin, so over $481.204$ spins the player expects to lose $481.204/37 = 13.0055$ chips. Independently, the expected final holding is $0 \times 0.860110 + 50 \times 0.139890 = 6.9945$ chips, which is $20 - 13.0055$. The two calculations agree to five figures, which checks the ruin probability and the mean duration against each other.
:::

:::application[Diffusion, polymers, and why chemistry is different in two dimensions]{provenance=original}
**Dimension decides whether diffusing particles find each other.** Polya's trichotomy is the reason a diffusion-limited reaction behaves differently on a surface and in a bulk fluid. Two reactants performing independent lattice walks meet exactly when their difference walk, itself a random walk, visits the origin. In three dimensions the difference walk is transient, so a pair that fails to react on a first encounter is likely never to meet again, and the reaction rate is governed by fresh encounters: this is the classical Smoluchowski regime, with a rate constant that settles to a finite value. In two dimensions — a lipid membrane, an adsorbed layer, a thin film — the difference walk is recurrent, so a pair that has once come close will come close again and again, the same partners re-collide many times, and the effective rate constant acquires a logarithmic dependence on time and on system size. Membrane biochemistry and surface catalysis are quantitatively different from bulk chemistry for exactly this reason, and it is a statement about $\sum n^{-d/2}$.

The same trichotomy controls **exciton trapping and defect capture** in crystals: a randomly walking excitation in a three-dimensional lattice has a positive chance of escaping a trap forever, while in a one- or two-dimensional conductor capture is certain and only the time matters.

**Polymer physics** uses the walk as the model of an ideal chain: the positions of the monomers of a flexible polymer in a theta solvent are a random walk with $n$ the degree of polymerisation, giving the end-to-end distance $\sqrt{\langle \lvert \mathbf{S}_n\rvert^2\rangle} = \sqrt{n}\,\ell$ for step length $\ell$. The characteristic-function representation of the displacement after $n$ independent steps of arbitrary length, used above for the lattice Green function and worked out for a general step density by :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.6, eq. (30.64), p. 1155"}, is precisely the tool used in the polymer literature to get the distribution of the end-to-end vector for a general segment distribution. What the excluded-volume interaction acts on is not recurrence but the number of **self-contacts**, and the two have different thresholds. The ideal chain in space is transient by part (d) — it comes back to its first monomer only with probability $0.3405$ — and yet it touches itself without limit, because there are many pairs of monomers and each pair has its own chance of coinciding. The expected number of coincident pairs is $\sum_{m \ge 1}(n + 1 - 2m)\,p_0(2m)$, there being $n+1-2m$ pairs of monomers $2m$ apart along the chain, and since $\sum_m p_0(2m) = G - 1$ converges this grows linearly in $n$ with slope $G - 1 = 0.5164$: it is $5.80$ at $n = 20$, $39.9$ at $n = 100$ and $476$ at $n = 1000$, that is $0.29$, $0.40$ and $0.48$ contacts per monomer, climbing towards $0.5164$. Whether forbidding those contacts changes the exponent is settled by a different count, Flory's: the order of $n^2$ monomer pairs each interact with strength $v$ while confined to the volume $R^d = n^{d/2}$ that the ideal chain occupies, so the dimensionless interaction parameter is

$$
z \ \sim \ \frac{v\,n^2}{R^{\,d}} \ = \ v\,n^{(4-d)/2} ,
$$

which grows with $n$ for $d < 4$, is marginal at $d = 4$ and dies away above. So the swollen exponent $\nu$ in $\lvert\mathbf{S}_n\rvert \sim n^{\nu}$ replaces the ideal $\tfrac12$ for $d < 4$ ($\nu = \tfrac34$ in two dimensions, $\nu \approx 0.588$ in three), while at $d = 4$ the ideal value survives up to logarithmic corrections. Both questions are governed by the same family of sums $\sum n^{-d/2}$, but they weight it differently and their thresholds differ: $d = 2$ for return to the origin, $d = 4$ for excluded volume.

**Gambler's ruin** is the first-passage problem for an absorbing boundary, and reappears whenever a fluctuating quantity is watched against two thresholds: the survival of a small population against extinction and a carrying capacity, the sequential probability ratio test in statistics, the voltage of an integrate-and-fire neuron between reset and threshold, and the risk of ruin of an insurer. The formulas above are the discrete, two-barrier ancestors of the exit-time problems for diffusions solved in :ref[The Fokker-Planck equation]{to=prob.fokker-planck}, and the scaling limit that connects them is :ref[Brownian motion]{to=prob.brownian-motion}.
:::
