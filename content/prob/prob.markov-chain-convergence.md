---
id: prob.markov-chain-convergence
title: Convergence of Markov chains
kind: theorem
level: core
summary: Proves by coupling that the n-step probabilities of an irreducible aperiodic chain converge to the reciprocal of the mean recurrence time, shows that a distribution in detailed balance with the transition matrix is automatically stationary and makes the chain reversible, and gives a geometric bound on the remaining total-variation distance in terms of the second-largest eigenvalue modulus.
prereqs: [prob.markov-chains, prob.convergence-random-variables, linalg.hermitian-spectral-theorem]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§6.4(B) Limit theorems: Example (6.4.19) (the period-2 obstruction), the Markov chain limit theorem (6.4.20) with its remarks (a)-(d) and its coupling proof including the coupling inequality (6.4.21) and the bounded-convergence step (6.4.22), pp. 259-262; §6.4(A), Theorem (6.4.3) and identity (6.4.11), pp. 254-257; §6.5 Reversibility: Theorem (6.5.1) (the time-reversal and its transition probabilities) with its proof, Definition (6.5.2) and the detailed balance equations (6.5.3), Theorem (6.5.4) with its proof, Example (6.5.5) (the Ehrenfest model), the global-versus-local balance picture, and Exercise (6.5.12) (the lazy chain), pp. 265-269; §6.6, Theorem (6.6.1) (Perron-Frobenius), the diagonalisation of P, and the bound on |p_ij(n) - pi_j| by c mu^n where mu is the second largest eigenvalue modulus, pp. 269-270; §6.14 Markov chain Monte Carlo: the McMC requirements (a), (b), the detailed balance equations (6.14.3), the Hastings acceptance probabilities (6.14.4)-(6.14.5), the Metropolis case (6.14.8), the remark on the mixing time M, and Theorem (6.14.9) with the eigenvector expansion (6.14.11) and the Cauchy-Schwarz step of its proof, pp. 330-334; §4.12, the total variation distance (4.12.7) with the footnote on the competing normalisation, and its supremum form (4.12.8), p. 145"
    pages: "145, 254-262, 265-270, 330-334"
    role: the statement, remarks and coupling proof of the limit theorem; the periodic counterexample and the behaviour in the periodic, null recurrent and transient cases; the time-reversal theorem, the definition of reversibility, the detailed balance equations and the theorem that detailed balance implies stationarity; the Ehrenfest model and the lazy-chain device; the spectral bound on the rate of convergence for a finite chain and the explicit reversible bound with its proof; the definition and normalisation of total variation distance; the Metropolis-Hastings construction used in the application
---

:::note[What is being proved, and what is not]{provenance=original}
:ref[Discrete-time Markov chains]{to=prob.markov-chains} produced a stationary distribution $\pi$ as a solution of the algebraic equation $\pi = \pi P$. Nothing there said that a chain started anywhere else ever approaches $\pi$. This unit supplies the missing analytic statement, identifies the extra hypothesis it needs (aperiodicity), and then asks the practical question that follows: *how long* must one wait.

Three things are proved. First, the limit theorem: $p_{ij}(n) \to 1/\mu_j$ for an irreducible aperiodic chain, with no positivity assumption, so that the transient and null recurrent cases are included as the statement $p_{ij}(n) \to 0$. Second, a sufficient condition, detailed balance, which both identifies $\pi$ cheaply and makes the chain reversible. Third, a geometric bound on the error, controlled by the second largest eigenvalue modulus of $P$.
:::

:::definition[Total variation distance, reversibility, detailed balance]{provenance=adapted src="grimmett-stirzaker-2020:§4.12, equations (4.12.7) and (4.12.8) with the footnote on normalisation, p. 145; grimmett-stirzaker-2020:§6.5, Definition (6.5.2) and the equations (6.5.3), pp. 265-266"}
Let $X$ be an irreducible homogeneous Markov chain on a countable state space $S$ with transition matrix $P = (p_{ij})$, and write $p_{i\cdot}(n)$ for the mass function $k \mapsto p_{ik}(n)$.

The **total variation distance** between two mass functions $f$ and $g$ on $S$ is

$$
d_{\mathrm{TV}}(f, g) \ = \ \sum_{k \in S} \lvert f_k - g_k \rvert
\ = \ 2 \sup_{A \subseteq S} \bigl\lvert \textstyle\sum_{k \in A} f_k - \sum_{k \in A} g_k \bigr\rvert .
$$

**Convention.** Grimmett and Stirzaker define $d_{\mathrm{TV}}$ without a factor of one half, and note in a footnote that some authors halve it; much of the mixing-time literature uses the halved version, for which the supremum form has no factor $2$ and the distance never exceeds $1$. We follow Grimmett and Stirzaker throughout this unit, so our $d_{\mathrm{TV}}$ lies in $[0,2]$. Halve every displayed bound to convert.

Suppose $X$ has stationary distribution $\pi$ and $X_0 \sim \pi$, so that $X_n \sim \pi$ for every $n$. For a finite horizon $N$, the **time-reversal** of $X$ is $Y_n = X_{N-n}$, $0 \le n \le N$. The chain is **reversible** if $Y$ has the same transition matrix as $X$, which (by the time-reversal statement below) is the same as requiring the **detailed balance equations**

$$
\pi_i\, p_{ij} \ = \ \pi_j\, p_{ji} \qquad \text{for all } i, j \in S .
$$

More generally, a transition matrix $P$ and a distribution $\lambda$ are said to be **in detailed balance** if $\lambda_i p_{ij} = \lambda_j p_{ji}$ for all $i, j$; an irreducible chain whose $P$ is in detailed balance with its stationary distribution is called **reversible in equilibrium**.
:::

:::statement[The Markov chain limit theorem]{provenance=adapted src="grimmett-stirzaker-2020:§6.4(B), Example (6.4.19) and Theorem (6.4.20) with remarks (a)-(d), pp. 259-260; grimmett-stirzaker-2020:§6.4(A), Theorem (6.4.3), p. 254"}
Let $X$ be a Markov chain on a countable state space $S$ which is **irreducible and aperiodic**, with transition matrix $P$ and mean recurrence times $\mu_j = \mathbb{E}_j(T_j)$. Then

$$
p_{ij}(n) \ \longrightarrow \ \frac{1}{\mu_j} \qquad \text{as } n \to \infty, \ \text{ for every } i, j \in S ,
$$

with the convention $1/\infty = 0$. Four consequences are worth separating.

1. When the chain is transient, or recurrent with every $\mu_j$ infinite, the limit is $p_{ij}(n) \to 0$ for all $i, j$: a limit exists, but it is not a probability distribution.
2. If the chain is positive recurrent then it has a unique stationary distribution $\pi$, with $\pi_j = 1/\mu_j$, and $p_{ij}(n) \to \pi_j$.
3. The limit does not depend on the starting state $i$. Hence for *any* initial distribution $\mu^{(0)}$,
   $$
   \mathbb{P}(X_n = j) = \sum_i \mu^{(0)}_i p_{ij}(n) \ \longrightarrow \ \frac{1}{\mu_j} ,
   $$
   so the chain forgets where it started.
4. Aperiodicity cannot be dropped, but it can be worked around. If $X$ is irreducible with period $d$, then $\{X_{nd} : n \ge 0\}$ is aperiodic and $p_{jj}(nd) \to d/\mu_j$.
:::

:::statement[Detailed balance, reversibility, and a cheap route to $\pi$]{provenance=adapted src="grimmett-stirzaker-2020:§6.5, Theorem (6.5.1), Definition (6.5.2) and Theorem (6.5.4), pp. 265-266"}
Let $X$ be irreducible and positive recurrent with stationary distribution $\pi$, and let $X_0 \sim \pi$.

**(a) The reversed chain is a chain.** $Y_n = X_{N-n}$ is a Markov chain, with transition probabilities

$$
\mathbb{P}(Y_{n+1} = j \mid Y_n = i) \ = \ \frac{\pi_j}{\pi_i}\, p_{ji} .
$$

In particular $X$ is reversible exactly when $\pi_i p_{ij} = \pi_j p_{ji}$ for all $i, j$.

**(b) Detailed balance implies stationarity.** Suppose an irreducible chain with transition matrix $P$ admits some distribution $\pi$ for which the balance relation $\pi_i p_{ij} = \pi_j p_{ji}$ holds at every pair of states $i, j \in S$. That $\pi$ is then stationary, and the chain is reversible in equilibrium.

This is the practical content: detailed balance is a system of *two-term* equations, one for each edge of the transition graph, whereas $\pi = \pi P$ couples every state to every other. When a guess satisfies detailed balance one has found $\pi$ with no linear algebra at all. The converse fails: a stationary distribution need not be in detailed balance with $P$, and a chain that is not reversible still has its $\pi$.
:::

:::statement[Geometric rate of convergence for a finite reversible chain]{provenance=adapted src="grimmett-stirzaker-2020:§6.6, Theorem (6.6.1) and the bound following it, pp. 269-270; grimmett-stirzaker-2020:§6.14, Theorem (6.14.9) and the expansion (6.14.11), pp. 333-334"}
Let $S$ be finite with $\lvert S \rvert = N$ and let $X$ be irreducible and aperiodic with transition matrix $P$ and stationary distribution $\pi$. By the Perron-Frobenius theorem the eigenvalues of $P$ may be listed as $\lambda_1 = 1, \lambda_2, \dots, \lambda_N$ with $\lvert \lambda_r \rvert < 1$ for $r \ge 2$; order them so that $\lambda_2$ has the largest modulus among these. The quantity $\lvert \lambda_2 \rvert$ is called the **second largest eigenvalue modulus**, or SLEM. If the eigenvalues are distinct, so that $P = B^{-1}\Lambda B$ is diagonalisable, then $P^{\,n} = B^{-1}\Lambda^n B$, every row of $P^{\,n}$ tends to $\pi$, and there is a constant $c < \infty$ with

$$
\lvert p_{ij}(n) - \pi_j \rvert \ \le \ c \,\lvert \lambda_2 \rvert^{\,n} \qquad \text{for all } i, j \text{ and all } n .
$$

Grimmett and Stirzaker state the bound in this diagonalisable setting; more generally, if $\lambda_2$ has multiplicity $m$ one must allow a polynomial factor, and the entries of $P^{\,n}$ approach their limits with an error of order $n^{m-1}\lvert \lambda_2\rvert^{\,n}$.

If in addition $X$ is **reversible in equilibrium**, the constant can be made explicit. Equip $\mathbb{R}^N$ with the inner product $\langle x, y \rangle = \sum_{i \in S} \pi_i x_i y_i$; reversibility makes $P$ self-adjoint for this inner product, so its eigenvalues are real and its right eigenvectors $v_1, \dots, v_N$ may be taken to form an orthonormal basis, with $v_1 \equiv \mathbf{1}$. Writing $v_r(i)$ for the $i$-th entry of $v_r$,

$$
\sum_{k \in S} \lvert p_{ik}(n) - \pi_k \rvert \ \le \ N \,\lvert \lambda_2 \rvert^{\,n} \, \sup\bigl\{ \lvert v_r(i) \rvert : r \in S \bigr\} ,
\qquad i \in S, \ n \ge 1 .
$$

The left-hand side is the total variation distance between $p_{i\cdot}(n)$ and $\pi$. So convergence is geometric at rate $\lvert \lambda_2 \rvert$, and the number of steps needed to bring the distance below a tolerance $\varepsilon$ grows like $\log(1/\varepsilon) / \log(1/\lvert\lambda_2\rvert)$. A chain with $\lvert \lambda_2 \rvert$ close to $1$ is said to be **slowly mixing**.
:::

:::idea{provenance=original}
The limit theorem is proved by **coupling**, which replaces an analytic estimate by a construction. Run two copies of the chain side by side and independently, one started at $i$ and one started at $j$. If the two copies ever occupy the same state at the same time, then from that moment on they have the same conditional law, because a chain's future depends on nothing but its present position and the matrix $P$. So the difference $p_{ik}(n) - p_{jk}(n)$ can only come from the event that they have not yet met, and it is enough to show that they meet almost surely. The pair is itself a Markov chain on $S \times S$, and it is irreducible exactly because the original chain is aperiodic: if $X$ had period $2$, the two copies started at even and odd distance could never be at the same place at the same time. That one sentence is where aperiodicity is used, and it is the only place.

Once the limit is known to be independent of the start, averaging over the start against $\pi$ identifies it as $\pi$ itself, because averaging a constant sequence changes nothing.

Detailed balance is a different kind of statement and needs no limit at all. It says that in equilibrium the probability flux from $i$ to $j$ matches the flux back, edge by edge. Stationarity only demands that the *total* flux into each node matches the total flux out. Local balance obviously implies global balance, and that one-line implication is the whole proof.
:::

:::proof[The limit theorem, by coupling]{provenance=adapted src="grimmett-stirzaker-2020:§6.4(B), proof of Theorem (6.4.20) including the coupling inequality (6.4.21) and the bounded convergence step (6.4.22), pp. 260-262"}
Assume first that $X$ is positive recurrent; the transient and null recurrent cases are dealt with at the end.

**Step 1: the coupled chain.** Let $X = \{X_n\}$ and $Y = \{Y_n\}$ be independent chains, each with state space $S$ and transition matrix $P$, and set $Z_n = (X_n, Y_n)$. Then $Z$ is a Markov chain on $S \times S$ with transition probabilities

$$
\mathbb{P}\bigl(Z_{n+1} = (k,l) \mid Z_n = (i,j)\bigr) = p_{ik}\,p_{jl} ,
$$

the product arising from the independence of the two copies.

**Step 2: $Z$ is irreducible — this is where aperiodicity enters.** For an irreducible aperiodic chain and any pair of states $a, b$ there is an $N(a,b)$ with $p_{ab}(n) > 0$ for all $n \ge N(a,b)$: the set $\{n : p_{aa}(n) > 0\}$ is closed under addition and has greatest common divisor $1$, so it contains every sufficiently large integer, and composing with one path from $a$ to $b$ shifts this to $b$. Hence for any $(i,j)$ and $(k,l)$ and all $n$ beyond the maximum of the two thresholds, $p_{ik}(n)\,p_{jl}(n) > 0$, so $Z$ can get from $(i,j)$ to $(k,l)$. Without aperiodicity this fails: for the chain on $\{1,2\}$ with $p_{12} = p_{21} = 1$, the pair started at $(1,2)$ visits only $(1,2)$ and $(2,1)$.

**Step 3: $Z$ is positive recurrent.** $X$ has a unique stationary distribution $\pi$. The product $\nu_{ij} = \pi_i \pi_j$ is a distribution on $S \times S$, and it is stationary for $Z$ because

$$
\sum_{i,j} \nu_{ij}\, p_{ik}p_{jl} = \Bigl(\sum_i \pi_i p_{ik}\Bigr)\Bigl(\sum_j \pi_j p_{jl}\Bigr) = \pi_k \pi_l = \nu_{kl} .
$$

Since $Z$ is irreducible and possesses a stationary distribution, it is positive recurrent.

**Step 4: the two copies meet.** Fix any $s \in S$, start the pair at $Z_0 = (i,j)$, and let

$$
T = \min\{n \ge 1 : Z_n = (s,s)\} .
$$

By recurrence of the irreducible chain $Z$, the state $(s,s)$ is reached from $(i,j)$ with probability one, so $\mathbb{P}(T < \infty) = 1$.

**Step 5: the coupling inequality.** Suppose $T \le n$. At time $T$ the two copies are both at $s$; from then on, their conditional distributions coincide, since each depends only on $P$ and on the common current position. Therefore, conditionally on $\{T \le n\}$, $X_n$ and $Y_n$ have the same law, and

$$
p_{ik}(n) = \mathbb{P}(X_n = k, T \le n) + \mathbb{P}(X_n = k, T > n)
= \mathbb{P}(Y_n = k, T \le n) + \mathbb{P}(X_n = k, T > n) .
$$

Bounding the first term by $\mathbb{P}(Y_n = k) = p_{jk}(n)$ and the second by $\mathbb{P}(T > n)$ gives $p_{ik}(n) \le p_{jk}(n) + \mathbb{P}(T > n)$, and the same argument with $i$ and $j$ exchanged gives

$$
\bigl\lvert p_{ik}(n) - p_{jk}(n) \bigr\rvert \ \le \ \mathbb{P}(T > n) \ \longrightarrow \ 0 ,
$$

since $T$ is almost surely finite. So if the limit of $p_{ik}(n)$ exists it cannot depend on $i$.

**Step 6: identifying the limit.** Average the last display against $\pi$ in the variable $i$. Since $\sum_i \pi_i p_{ik}(n) = \pi_k$ by stationarity,

$$
\lvert \pi_k - p_{jk}(n) \rvert \ = \ \Bigl\lvert \sum_i \pi_i \bigl( p_{ik}(n) - p_{jk}(n) \bigr) \Bigr\rvert
\ \le \ \sum_i \pi_i \bigl\lvert p_{ik}(n) - p_{jk}(n) \bigr\rvert .
$$

The summands are bounded by $1$ and tend to $0$. To pass to the limit on an infinite $S$, split the sum at a finite set $F$: the part over $F$ is a finite sum of terms tending to zero, and the part outside is at most $2\sum_{i \notin F}\pi_i$, which enlarging $F$ forces below any prescribed tolerance, because $\pi$ is a probability distribution. Hence $p_{jk}(n) \to \pi_k = 1/\mu_k$.

**Step 7: the remaining cases.** If $X$ is transient then $\sum_n p_{ij}(n) < \infty$ for all $i, j$, so $p_{ij}(n) \to 0 = 1/\mu_j$. If $X$ is null recurrent the coupled chain $Z$ cannot be positive recurrent: starting from $(i,i)$, the return time of $Z$ to $(i,i)$ is at least the return time of $X$ to $i$, whose mean is infinite. If $Z$ is transient then $p_{ij}(n)^2 = \mathbb{P}(Z_n = (j,j) \mid Z_0 = (i,i)) \to 0$ and we are done; if $Z$ is null recurrent, Step 5 still applies, and Grimmett and Stirzaker complete the argument by a diagonal-selection device which shows that a non-zero subsequential limit would produce a stationary distribution and so contradict null recurrence. $\square$
:::

:::proof[Reversal and detailed balance]{provenance=adapted src="grimmett-stirzaker-2020:§6.5, proofs of Theorem (6.5.1) and Theorem (6.5.4), pp. 265-266"}
**(a) The reversed chain.** Write a trajectory of $Y$ as a trajectory of $X$ read backwards. For states $i_0, \dots, i_{n+1}$,

$$
\mathbb{P}\bigl(Y_{n+1} = i_{n+1} \mid Y_n = i_n, \dots, Y_0 = i_0\bigr)
= \frac{\mathbb{P}(X_{N-n-1} = i_{n+1},\, X_{N-n} = i_n, \dots, X_N = i_0)}{\mathbb{P}(X_{N-n} = i_n, \dots, X_N = i_0)} .
$$

Because $X_0 \sim \pi$ and $\pi$ is stationary, every $X_m$ has distribution $\pi$, and the numerator is the product $\pi_{i_{n+1}} p_{i_{n+1} i_n} p_{i_n i_{n-1}} \cdots p_{i_1 i_0}$ while the denominator is $\pi_{i_n} p_{i_n i_{n-1}} \cdots p_{i_1 i_0}$. All the factors $p_{i_m i_{m-1}}$ with $m \le n$ cancel, leaving $\pi_{i_{n+1}} p_{i_{n+1} i_n}/\pi_{i_n}$. This depends on $i_n$ and $i_{n+1}$ only, which proves both that $Y$ is Markov and that its transition probabilities are $(\pi_j/\pi_i)p_{ji}$. Equality of these with $p_{ij}$ is exactly $\pi_i p_{ij} = \pi_j p_{ji}$.

**(b) Detailed balance implies stationarity.** Suppose $\pi$ is a distribution with $\pi_i p_{ij} = \pi_j p_{ji}$ for all $i, j$. Sum this over $i$, holding $j$ fixed:

$$
\sum_{i \in S} \pi_i p_{ij} \ = \ \sum_{i \in S} \pi_j p_{ji} \ = \ \pi_j \sum_{i \in S} p_{ji} \ = \ \pi_j ,
$$

the last step because $P$ is stochastic, so row $j$ sums to one. The left side is the $j$-th entry of $\pi P$; hence $\pi P = \pi$ and $\pi$ is stationary. Reversibility then follows from part (a). $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Aperiodicity** is used once, in Step 2, to make the coupled chain irreducible. Its necessity is visible in the simplest example: on $S = \{1,2\}$ with $p_{12} = p_{21} = 1$, the chain is irreducible and positive recurrent, $\pi = (\tfrac12, \tfrac12)$ is the unique stationary distribution, and yet $p_{11}(n)$ equals $1$ for even $n$ and $0$ for odd $n$. The Cesaro averages still converge to $\pi$, and part 4 of the limit theorem recovers the full statement along multiples of the period. A standard repair is to make the chain **lazy**: replace $P$ by $L = aP + (1-a)I$ with $0 < a < 1$. Then $L$ is irreducible and aperiodic, has the same stationary distribution, and is reversible whenever $P$ is.

**Irreducibility** is used in Step 4 (to reach $(s,s)$) and in Step 3 (uniqueness of $\pi$). Without it, different starting states can have genuinely different limits: a chain with two absorbing states converges to whichever one it is started in.

**Positivity of $\pi$ in Step 6** is where the chain's being a *probability* distribution matters. For a null recurrent chain there is still a stationary measure, but it has infinite total mass and cannot be used to average; that is why Step 7 needs a separate argument.

**Independence of the two copies** in Step 1 is a choice, not a necessity. The coupling only has to be a joint construction of two processes with the right marginals which meet quickly; cleverer, dependent couplings are how sharp mixing-time bounds are actually obtained.

**Reversibility** is not needed for the limit theorem at all; it is needed only for the explicit constant in the spectral bound, because it is what makes $P$ self-adjoint for the inner product $\langle x,y\rangle = \sum_i \pi_i x_i y_i$ and hence gives real eigenvalues and an orthonormal eigenbasis (see :ref[The spectral theorem for Hermitian operators]{to=linalg.hermitian-spectral-theorem}). An irreversible $P$ may have complex eigenvalues and may fail to be diagonalisable; the bound $c\lvert\lambda_2\rvert^n$ survives, with a polynomial correction $n^{m-1}$ when $\lambda_2$ has multiplicity $m$ in a Jordan block, but the constant $c$ is no longer explicit.

**Finiteness of $S$** is needed for the spectral statements only. The limit theorem itself holds on any countable $S$, and there the rate can be anything at all: an infinite chain may converge sub-geometrically.
:::

:::method[Getting a chain to converge to a prescribed $\pi$, and estimating how long it takes]{provenance=original}
Given a target distribution $\pi$ on a finite set $S$:

1. **Choose a proposal matrix** $H = (h_{ij})$ that is irreducible and easy to sample from; symmetry ($h_{ij} = h_{ji}$) is convenient but not required.
2. **Accept with the Hastings probability.** From state $i$, draw a proposal $j$ with probability $h_{ij}$ and accept it with probability
   $$
   a_{ij} = \min\left\{1, \ \frac{\pi_j h_{ji}}{\pi_i h_{ij}}\right\} ;
   $$
   on rejection stay at $i$. The resulting matrix is $p_{ij} = h_{ij}a_{ij}$ for $i \ne j$, with $p_{ii}$ whatever is left over. Only ratios $\pi_j/\pi_i$ are needed, so an unknown normalising constant in $\pi$ is irrelevant. When $H$ is symmetric this reduces to the Metropolis rule $a_{ij} = \min\{1, \pi_j/\pi_i\}$.
3. **Verify detailed balance**, which is immediate from the form of $a_{ij}$: for $i \neq j$, $\pi_i h_{ij} a_{ij} = \min\{\pi_i h_{ij}, \pi_j h_{ji}\}$, an expression symmetric in $i$ and $j$. By the statement above, $\pi$ is then stationary.
4. **Check aperiodicity.** If any proposal is ever rejected with positive probability then some $p_{ii} > 0$ and the chain is aperiodic. If not, make the chain lazy.
5. **Estimate the rate.** Compute, or bound, the SLEM $\lvert \lambda_2 \rvert$. The number of steps to reach total variation distance $\varepsilon$ is of order $\log(1/\varepsilon)/\log(1/\lvert\lambda_2\rvert)$, and the reversible bound above turns this into an inequality with explicit constants.
6. **Discard the burn-in.** Estimate $\sum_\theta g(\theta)\pi_\theta$ by $n^{-1}\sum_{r=M}^{M+n-1} g(X_r)$, with $M$ chosen large enough that the bound in step 5 is below the accuracy wanted.
:::

:::example[A lazy Ehrenfest chain: exact convergence against the spectral bound]{provenance=original}
A partition with a small hole separates two chambers, $A$ and $B$, which hold $m = 2$ gas molecules between them. A fair coin is tossed at each tick of a clock; heads leaves the configuration alone, while tails sends one molecule, chosen uniformly from the two, through the hole. Take $X_n$ to be chamber $A$'s occupancy at time $n$, so that $S = \{0,1,2\}$. From state $i$ the chosen molecule is in $A$ with probability $i/2$, so

$$
p_{i,i-1} = \tfrac12 \cdot \tfrac{i}{2}, \qquad p_{i,i+1} = \tfrac12\Bigl(1 - \tfrac{i}{2}\Bigr), \qquad p_{ii} = \tfrac12 ,
$$

that is

$$
P \ = \ \begin{pmatrix}
\tfrac12 & \tfrac12 & 0 \\[2pt]
\tfrac14 & \tfrac12 & \tfrac14 \\[2pt]
0 & \tfrac12 & \tfrac12
\end{pmatrix} .
$$

**Stationary distribution by detailed balance.** Rather than solve $\pi = \pi P$, look for $\pi$ with $\pi_i p_{i,i+1} = \pi_{i+1}p_{i+1,i}$; for a chain that only moves to neighbours these are the only non-trivial detailed balance equations. They read $\pi_0 \cdot \tfrac12 = \pi_1 \cdot \tfrac14$ and $\pi_1 \cdot \tfrac14 = \pi_2 \cdot \tfrac12$, giving $\pi_1 = 2\pi_0$ and $\pi_2 = \pi_0$. Normalising,

$$
\pi = \Bigl( \tfrac14, \ \tfrac12, \ \tfrac14 \Bigr) ,
$$

the binomial distribution $\binom{2}{i}2^{-2}$, as physical intuition demands. By the detailed balance theorem $\pi$ is stationary and the chain is reversible in equilibrium. The chain is irreducible and $p_{00} = \tfrac12 > 0$, so it is aperiodic, and the limit theorem applies: the mean recurrence times are $\mu_0 = \mu_2 = 4$ and $\mu_1 = 2$ ticks.

**Eigenvalues and eigenvectors.** One checks directly that

$$
P\begin{pmatrix}1\\1\\1\end{pmatrix} = 1 \cdot \begin{pmatrix}1\\1\\1\end{pmatrix}, \qquad
P\begin{pmatrix}1\\0\\-1\end{pmatrix} = \tfrac12\begin{pmatrix}1\\0\\-1\end{pmatrix}, \qquad
P\begin{pmatrix}1\\-1\\1\end{pmatrix} = 0 .
$$

For instance the middle one: the first row gives $\tfrac12 \cdot 1 + \tfrac12 \cdot 0 = \tfrac12$, the second $\tfrac14 \cdot 1 + \tfrac14 \cdot (-1) = 0$, the third $\tfrac12 \cdot 0 + \tfrac12 \cdot (-1) = -\tfrac12$. So the spectrum is $\{1, \tfrac12, 0\}$ and the SLEM is $\lvert \lambda_2 \rvert = \tfrac12$. Normalising in the inner product $\langle x,y\rangle = \sum_i \pi_i x_i y_i$: the first vector has $\langle v,v\rangle = \tfrac14 + \tfrac12 + \tfrac14 = 1$; the second has $\tfrac14 \cdot 1 + \tfrac12 \cdot 0 + \tfrac14 \cdot 1 = \tfrac12$, so $v_2 = \sqrt{2}\,(1,0,-1)$; the third has $\tfrac14 + \tfrac12 + \tfrac14 = 1$ already. They are mutually orthogonal, as reversibility guarantees.

**Exact $n$-step probabilities.** Expanding $p_{ik}(n) = \sum_r v_r(k)\pi_k \lambda_r^{\,n} v_r(i)$ from state $i = 0$:

$$
p_{00}(n) = \tfrac14\bigl(1 + 2 \cdot 2^{-n}\bigr) = \tfrac14 + 2^{-(n+1)} , \qquad
p_{01}(n) = \tfrac12 , \qquad
p_{02}(n) = \tfrac14 - 2^{-(n+1)} ,
$$

valid for $n \ge 1$. (Check at $n = 1$: $\tfrac14 + \tfrac14 = \tfrac12$, $\tfrac12$, $0$ — the first row of $P$.) Hence the exact total variation distance from the stationary distribution, started from the empty chamber, is

$$
d_{\mathrm{TV}}\bigl(p_{0\cdot}(n), \pi\bigr) = 2^{-(n+1)} + 0 + 2^{-(n+1)} = 2^{-n} .
$$

At $n = 5$ this equals $\tfrac{1}{32} = 0.03125$.

**Comparison with the bound.** The reversible bound gives, with $N = 3$, $\lvert\lambda_2\rvert = \tfrac12$ and $\sup_r \lvert v_r(0)\rvert = \max\{1, \sqrt2, 1\} = \sqrt2$,

$$
d_{\mathrm{TV}}\bigl(p_{0\cdot}(n), \pi\bigr) \ \le \ 3\sqrt{2}\, \cdot 2^{-n} ,
$$

which at $n = 5$ is $3\sqrt2/32 = 0.1326$. The bound holds, and overestimates the true distance by the factor $3\sqrt2 \approx 4.24$ — it gets the geometric rate exactly right and only the prefactor is loose. To force $d_{\mathrm{TV}} \le 10^{-3}$ the bound demands $n \ge \log_2(3\sqrt2 \times 10^{3}) = 12.05$, so $n = 13$; the truth is $n = 10$.
:::

:::application[Markov chain Monte Carlo and detailed balance in statistical physics]{provenance=original}
Every Monte Carlo simulation of a thermal system is an instance of this unit. One wants averages $\langle g \rangle = \sum_\theta g(\theta)\pi(\theta)$ over the Boltzmann distribution $\pi(\theta) = Z^{-1}\exp(-\beta E(\theta))$ on a configuration space far too large to enumerate, and the partition function $Z$ is unknown. The Metropolis recipe in the method above builds a chain whose stationary distribution is exactly $\pi$, using only the energy differences $E(\theta') - E(\theta)$, because the acceptance probability $\min\{1, e^{-\beta \Delta E}\}$ depends on $\pi$ only through ratios and $Z$ cancels. Detailed balance is the condition physicists impose on the update rule precisely because it guarantees, by the theorem above, that the Boltzmann weight is left invariant; it is a sufficient condition, imposed for convenience, not a law of nature, and schemes that are stationary without being reversible are also in use.

The limit theorem is then the statement that the simulation gives the right answer at all, and aperiodicity is the fine print: a deterministic sweep through the lattice in a model with no self-transitions can be periodic, which is one reason random site selection or a laziness parameter is standard.

The rate statement is where the physics gets hard. Near a continuous phase transition the SLEM of a local-update chain for the Ising model approaches $1$ as the system size grows, the relaxation time diverges as $L^{z}$ with a dynamical exponent $z \approx 2$ for Metropolis dynamics, and the simulation suffers **critical slowing down**. Cluster algorithms are designed to keep detailed balance while drastically reducing $\lvert \lambda_2 \rvert$. The eigenvalue $\lambda_2$ and its eigenvector also carry physical meaning away from criticality: they identify the slowest collective mode of the dynamics, which in a chain built from molecular dynamics (see :ref[Discrete-time Markov chains]{to=prob.markov-chains}) is the rate-limiting conformational change.

Finally, the same bound tells an experimentalist when an equilibration protocol is long enough. For the Ehrenfest model of the example, generalised to $m$ molecules, the SLEM of the lazy chain is $1 - 1/m$, so equilibration takes of order $m \log m$ ticks: the characteristic time grows only a little faster than the number of molecules, which is why gases equilibrate fast.
:::
