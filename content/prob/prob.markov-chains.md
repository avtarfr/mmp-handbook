---
id: prob.markov-chains
title: Discrete-time Markov chains
kind: definition
level: core
summary: Sets up a chain on a countable state space through its transition matrix, derives the Chapman-Kolmogorov equations that make the n-step probabilities matrix powers, classifies states by recurrence, mean recurrence time and period, and characterises the stationary distribution as the left eigenvector of the transition matrix with eigenvalue one.
prereqs: [prob.conditional-expectation, prob.generating-functions, linalg.eigenvalues-eigenvectors]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§6.1 Markov processes: Definition (6.1.1) of the Markov property, the equivalent forms (6.1.2) and (6.1.3), Definition (6.1.4) of homogeneity and the transition matrix, Theorem (6.1.5) (stochastic matrices), Definition (6.1.6) of the n-step matrix, Theorem (6.1.7) (Chapman-Kolmogorov) with its proof, and Lemma (6.1.8), pp. 239-242; §6.2 Classification of states: Definition (6.2.1) (recurrent and transient), the first-passage probabilities (6.2.2), Theorem (6.2.3) and Corollary (6.2.4) with their proofs, Corollary (6.2.5), Definition (6.2.7) (mean recurrence time), Definition (6.2.8) (null and positive), Theorem (6.2.9), Definition (6.2.10) (period) and Definition (6.2.11) (ergodic state), pp. 246-249; §6.3 Classification of chains: Definition (6.3.1) (communication and intercommunication), Theorem (6.3.2) (class properties) with its proof, and Lemma (6.3.5) (finite state spaces), pp. 250-252; §6.4 Stationary distributions: Definition (6.4.1), the iteration (6.4.2), Theorem (6.4.3) with its identity (6.4.11) relating stationary probabilities to mean recurrence times, and the footnote recording that a stationary distribution is a left eigenvector, pp. 254-258; §6.6 Chains with finitely many states: Theorem (6.6.1) (Perron-Frobenius) and the diagonalisation of P that follows it, p. 269"
    pages: "239-242, 246-252, 254-258, 269"
    role: the definitions of the Markov property, homogeneity, the transition matrix and the n-step matrix; the statement and proof route of the Chapman-Kolmogorov equations and of the evolution lemma for the distribution of the chain; the whole classification apparatus (recurrence, first-passage generating functions, the summability criterion, mean recurrence time, nullity, period, communication, irreducibility, closed classes); the definition of a stationary distribution and the existence-and-uniqueness theorem with the formula for the mean recurrence time; the Perron-Frobenius statement used to read off convergence from eigenvalues
---

:::note[What a Markov chain buys you]{provenance=original}
A random process is in general an unmanageable object: the joint law of $X_0, X_1, \dots, X_n$ needs a number for every path. A Markov chain is the case in which that joint law collapses into a single matrix of one-step probabilities, because the chain's memory of its past is entirely contained in where it is now. Everything in this unit is a consequence of that collapse: $n$-step probabilities become matrix powers, long-run behaviour becomes a statement about eigenvalues, and the equilibrium of the chain becomes a left eigenvector.

The limit theorem that says the chain actually converges to that equilibrium is the subject of :ref[Convergence of Markov chains]{to=prob.markov-chain-convergence}; the walk on $\mathbb{Z}^d$, the canonical example with an infinite state space, is treated in :ref[Random walks]{to=prob.random-walks}. Here we fix the objects and the bookkeeping.
:::

:::definition[The Markov property, transition matrices and $n$-step probabilities]{provenance=adapted src="grimmett-stirzaker-2020:§6.1, Definitions (6.1.1), (6.1.4) and (6.1.6), and Theorem (6.1.5), pp. 239-241"}
Let $S$ be a countable set, the **state space**, whose elements we may and do take to be integers. A sequence $X = \{X_n : n \ge 0\}$ of random variables taking values in $S$, defined on a probability space $(\Omega, \mathcal{F}, \mathbb{P})$, is a **Markov chain** if

$$
\mathbb{P}\bigl(X_n = s \mid X_0 = x_0, \ X_1 = x_1, \ \dots, \ X_{n-1} = x_{n-1}\bigr)
\ = \ \mathbb{P}\bigl(X_n = s \mid X_{n-1} = x_{n-1}\bigr)
$$

for every $n \ge 1$ and all states $s, x_1, \dots, x_{n-1}$ for which the conditioning event has positive probability. Grimmett and Stirzaker record two equivalent forms: one may condition on the values at any finite increasing set of past epochs $n_1 < n_2 < \dots < n_k \le n$ and only the last one survives, and one may ask for $X_{m+n}$ given $X_0, \dots, X_m$ and only $X_m$ survives. The conditional probabilities here are those of :ref[Conditional expectation]{to=prob.conditional-expectation}, taken with respect to the discrete conditioning events.

The chain is **homogeneous** if $\mathbb{P}(X_{n+1} = j \mid X_n = i)$ does not depend on $n$. Its **transition matrix** is then $P = (p_{ij})_{i,j \in S}$ with

$$
p_{ij} = \mathbb{P}(X_{n+1} = j \mid X_n = i) .
$$

Every chain in this unit is homogeneous. The matrix $P$ is **stochastic**: its entries are non-negative and each of its rows sums to $1$, since from state $i$ the chain must go somewhere. Conversely every stochastic matrix is the transition matrix of some chain.

The **$n$-step transition probabilities** are $p_{ij}(n) = \mathbb{P}(X_{m+n} = j \mid X_m = i)$, which by homogeneity and the Chapman-Kolmogorov statement below do not depend on $m$; we write $P_n$ for the matrix $(p_{ij}(n))$ and set $p_{ij}(0) = \delta_{ij}$. Finally, write $\mu^{(n)}_i = \mathbb{P}(X_n = i)$ and let $\mu^{(n)}$ be the **row** vector of these numbers.

A warning on conventions: $p_{ij}$ is the probability of a jump **from** $i$ **to** $j$, so that probability mass is propagated by multiplying a row vector on the right by $P$. Some older texts, and much of the physics literature on master equations, use the transposed convention in which the transition matrix acts on column vectors from the left. Grimmett and Stirzaker note that the transposed convention was formerly in use and warn the reader about it. We use the row convention throughout the handbook.
:::

:::statement[Chapman-Kolmogorov: $n$-step probabilities are matrix powers]{provenance=adapted src="grimmett-stirzaker-2020:§6.1, Theorem (6.1.7) and Lemma (6.1.8), pp. 241-242"}
Let $X$ be a homogeneous Markov chain with transition matrix $P$. Then for all states $i, j$ and all integers $n, r \ge 0$,

$$
p_{ij}(n + r) \ = \ \sum_{k \in S} p_{ik}(n)\, p_{kj}(r) ,
$$

the **Chapman-Kolmogorov equations**. In matrix form $P_{n+r} = P_n P_r$, and therefore

$$
P_n = P^{\,n} , \qquad n \ge 0 .
$$

Moreover the distribution of the chain evolves by $\mu^{(m+n)} = \mu^{(m)} P^{\,n}$, and in particular

$$
\mu^{(n)} = \mu^{(0)} P^{\,n} .
$$

Thus the law of the whole process is determined by the pair $(\mu^{(0)}, P)$.
:::

:::definition[Recurrence, mean recurrence time, period, irreducibility]{provenance=adapted src="grimmett-stirzaker-2020:§6.2, Definitions (6.2.1), (6.2.7), (6.2.8), (6.2.10), (6.2.11) and the first-passage probabilities (6.2.2), pp. 246-249; grimmett-stirzaker-2020:§6.3, Definition (6.3.1) and Theorem (6.3.2), pp. 250-251"}
Write $\mathbb{P}_i$ for $\mathbb{P}(\,\cdot \mid X_0 = i)$ and $\mathbb{E}_i$ for the corresponding expectation, and let

$$
T_j = \min\{n \ge 1 : X_n = j\}
$$

be the **first passage time** to $j$, with $T_j = \infty$ if the chain never visits $j$ after time $0$. Put $f_{ij}(n) = \mathbb{P}_i(T_j = n)$ and $f_{ij} = \sum_{n \ge 1} f_{ij}(n) = \mathbb{P}_i(T_j < \infty)$.

- State $i$ is **recurrent** (Grimmett and Stirzaker also write *persistent*) if $f_{ii} = 1$, that is, if return to $i$ from $i$ is certain; otherwise $f_{ii} < 1$ and $i$ is **transient**.
- The **mean recurrence time** of $i$ is $\mu_i = \mathbb{E}_i(T_i) = \sum_n n f_{ii}(n)$ when $i$ is recurrent, and $\mu_i = \infty$ when $i$ is transient. A recurrent state is **positive** (or non-null) if $\mu_i < \infty$ and **null** if $\mu_i = \infty$; a recurrent state can be null, so certainty of return does not imply a finite expected return time.
- The **period** of $i$ is $d(i) = \gcd\{n \ge 1 : p_{ii}(n) > 0\}$. The state is **aperiodic** if $d(i) = 1$ and periodic otherwise. A state that is recurrent, positive and aperiodic is called **ergodic**.

Say $i$ **leads to** $j$, written $i \to j$, if $p_{ij}(m) > 0$ for some $m \ge 0$, and that $i$ and $j$ **intercommunicate**, $i \leftrightarrow j$, if each leads to the other. Intercommunication is an equivalence relation, and intercommunicating states share their period, their transience or recurrence, and their nullity or positivity. The chain is **irreducible** if $S$ is a single equivalence class.

Grimmett and Stirzaker record the following for a finite state space $S$, with no irreducibility assumed: some state of the chain must be recurrent, and nullity is impossible, every recurrent state being positive. Combining this with the class properties, every state of a *finite irreducible* chain is positive recurrent.
:::

:::statement[When a state is recurrent, and the stationary distribution]{provenance=adapted src="grimmett-stirzaker-2020:§6.2, Theorem (6.2.3) and Corollary (6.2.4), pp. 247-248; grimmett-stirzaker-2020:§6.4, Definition (6.4.1) and Theorem (6.4.3) with equation (6.4.11), pp. 254-257; grimmett-stirzaker-2020:§6.6, Theorem (6.6.1), p. 269"}
**(a) A summability criterion.** Define the generating functions $P_{ij}(s) = \sum_{n \ge 0} s^n p_{ij}(n)$ and $F_{ij}(s) = \sum_{n \ge 0} s^n f_{ij}(n)$ for $\lvert s \rvert < 1$, with $f_{ij}(0) = 0$. Then

$$
P_{ii}(s) = 1 + F_{ii}(s) P_{ii}(s) , \qquad P_{ij}(s) = F_{ij}(s) P_{jj}(s) \ \ (i \ne j) .
$$

Consequently state $j$ is recurrent if and only if $\sum_n p_{jj}(n) = \infty$. If $j$ is recurrent then $\sum_n p_{ij}(n) = \infty$ for every $i$ with $f_{ij} > 0$; if $j$ is transient then $\sum_n p_{ij}(n) < \infty$, and hence $p_{ij}(n) \to 0$, for every $i$.

**(b) Stationary distributions.** A row vector $\pi = (\pi_j : j \in S)$ is a **stationary distribution** of the chain if $\pi_j \ge 0$, $\sum_j \pi_j = 1$, and

$$
\pi = \pi P , \qquad \text{that is} \qquad \pi_j = \sum_{i \in S} \pi_i p_{ij} \ \text{ for all } j .
$$

Iterating gives $\pi P^{\,n} = \pi$ for all $n$, so a chain started with $X_0 \sim \pi$ has $X_n \sim \pi$ for every $n$. Note that $\pi$ is a **left** eigenvector of $P$ with eigenvalue $1$, not a right one.

**(c) Existence and uniqueness.** A stationary distribution exists for an irreducible chain exactly when every one of its states is positive recurrent. In that case $\pi$ is unique and

$$
\pi_i = \frac{1}{\mu_i} \qquad \text{for every } i \in S ,
$$

where $\mu_i$ is the mean recurrence time. No assumption of aperiodicity is needed for this.

**(d) The finite case.** If $S$ is finite with $N = \lvert S \rvert$ and the chain is irreducible with period $d$, the Perron-Frobenius theorem says that $\lambda_1 = 1$ is an eigenvalue of $P$; that the $d$ complex $d$-th roots of unity are eigenvalues; that the remaining eigenvalues $\lambda_{d+1}, \dots, \lambda_N$ satisfy $\lvert \lambda_r \rvert < 1$; and that there is a unique $\pi$ with $\pi P = \pi$, all of whose entries are strictly positive.
:::

:::idea{provenance=original}
Two ideas carry the whole unit.

The first is that conditioning on where the chain is at an intermediate time decomposes a long journey into two independent-looking short ones. Summing over the intermediate state is exactly a matrix product, which is why $P_n = P^n$ and why the long-run questions turn into linear algebra.

The second is that a *renewal* happens at every return to a fixed state $k$: by the Markov property the chain starts afresh there, so the excursions between consecutive visits to $k$ are independent and identically distributed. The time between visits has mean $\mu_k$, so in a long run of $n$ steps the chain makes about $n/\mu_k$ visits to $k$, and the fraction of time spent at $k$ is about $1/\mu_k$. That heuristic is the content of $\pi_k = 1/\mu_k$, and it also explains the summability criterion: $\sum_n p_{kk}(n)$ is the expected number of visits to $k$, which is infinite exactly when return is certain and the visits never stop.
:::

:::proof[Chapman-Kolmogorov, the evolution of $\mu^{(n)}$, and the summability criterion]{provenance=adapted src="grimmett-stirzaker-2020:§6.1, proofs of Theorem (6.1.7) and Lemma (6.1.8), pp. 241-242; grimmett-stirzaker-2020:§6.2, proofs of Theorem (6.2.3) and Corollary (6.2.4), pp. 247-248"}
**Chapman-Kolmogorov.** Fix $i, j$ and $m, n, r \ge 0$. Partition the event $\{X_{m+n+r} = j\}$ according to the state occupied at the intermediate epoch $m+n$:

$$
\mathbb{P}(X_{m+n+r} = j \mid X_m = i) \ = \ \sum_{k \in S} \mathbb{P}(X_{m+n+r} = j, \ X_{m+n} = k \mid X_m = i) ,
$$

which is legitimate because $S$ is countable and the events are disjoint. Each summand factorises as

$$
\mathbb{P}(X_{m+n+r} = j \mid X_{m+n} = k,\, X_m = i)\ \mathbb{P}(X_{m+n} = k \mid X_m = i) ,
$$

by the elementary identity $\mathbb{P}(A \cap B \mid C) = \mathbb{P}(A \mid B \cap C)\,\mathbb{P}(B \mid C)$. The Markov property, in the form that allows conditioning on any finite set of past epochs, lets us drop the condition $X_m = i$ from the first factor; homogeneity then identifies the two factors as $p_{kj}(r)$ and $p_{ik}(n)$. This is the displayed equation, and in matrix language $P_{n+r} = P_n P_r$. Taking $r = 1$ and inducting on $n$ gives $P_n = P^{\,n}$, and in particular the right-hand side does not depend on the starting epoch $m$.

**Evolution of the distribution.** Condition on $X_m$:

$$
\mu^{(m+n)}_j = \mathbb{P}(X_{m+n} = j) = \sum_{i \in S} \mathbb{P}(X_{m+n} = j \mid X_m = i)\, \mathbb{P}(X_m = i) = \sum_i \mu^{(m)}_i p_{ij}(n) ,
$$

which is the $j$-th entry of the row vector $\mu^{(m)} P^{\,n}$. Setting $m = 0$ gives $\mu^{(n)} = \mu^{(0)} P^{\,n}$. $\square$

**The summability criterion.** Fix $i$ and $j$. Decompose a visit to $j$ at time $m \ge 1$ according to the time $r$ of the *first* visit to $j$. These $m$ possibilities are disjoint and exhaust the event, so by the Markov property applied at the first-passage time,

$$
p_{ij}(m) \ = \ \sum_{r=1}^{m} f_{ij}(r)\, p_{jj}(m - r) , \qquad m \ge 1 .
$$

The right-hand side is a convolution. Multiplying by $s^m$ and summing over $m \ge 1$, and recalling $p_{ij}(0) = \delta_{ij}$, turns it into the product of generating functions (see :ref[Generating functions]{to=prob.generating-functions}):

$$
P_{ij}(s) - \delta_{ij} = F_{ij}(s) P_{jj}(s) ,
$$

which is both displayed identities at once. Taking $i = j$ and solving,

$$
P_{jj}(s) = \frac{1}{1 - F_{jj}(s)} \qquad (\lvert s \rvert < 1) .
$$

Now let $s \uparrow 1$. Both $P_{jj}$ and $F_{jj}$ have non-negative coefficients, so Abel's theorem lets us pass to the limit termwise: $F_{jj}(s) \to f_{jj}$ and $P_{jj}(s) \to \sum_n p_{jj}(n)$, the two limits being finite or infinite together with the sums. Hence $\sum_n p_{jj}(n) = \infty$ precisely when $f_{jj} = 1$, that is, precisely when $j$ is recurrent. The statements for $i \ne j$ follow from $P_{ij}(s) = F_{ij}(s) P_{jj}(s)$ by letting $s \uparrow 1$ again: the left side blows up iff $P_{jj}$ does and $f_{ij} = F_{ij}(1) > 0$. $\square$
:::

:::remark[Where each hypothesis is used]{provenance=original}
**Countability of $S$.** It enters at the first line of the Chapman-Kolmogorov proof, where the event is split into a countable disjoint union and summed. For an uncountable state space the sum must be replaced by an integral against a transition kernel, and the result is the same equation in integral form.

**Homogeneity.** Used only to identify $\mathbb{P}(X_{m+n+r} = j \mid X_{m+n} = k)$ with $p_{kj}(r)$. Without it the Chapman-Kolmogorov equations still hold in the form $P(m, m+n+r) = P(m, m+n) P(m+n, m+n+r)$, but the matrices depend on the epoch and are no longer powers of a single $P$, so the eigenvalue analysis is lost.

**The Markov property.** Used exactly once in each proof: to delete the condition $X_m = i$ in Chapman-Kolmogorov, and to restart the chain at the first passage time in the convolution identity. If it fails, the convolution identity fails and the generating-function criterion with it.

**Irreducibility in part (c).** Without it the conclusion is false in both directions. The two-state chain with $p_{11} = p_{22} = 1$ is positive recurrent in every state yet has infinitely many stationary distributions, namely every $\pi = (a, 1-a)$; so uniqueness genuinely needs irreducibility. And a chain with an absorbing state $0$ reachable from a transient part has a stationary distribution concentrated on $0$ while other states are transient, so "has a stationary distribution" does not by itself make every state positive recurrent.

**Positive recurrence in part (c).** Null recurrence is not an exotic pathology: the symmetric simple random walk on $\mathbb{Z}$ is irreducible and recurrent, every $\mu_i$ is infinite, and it has no stationary *distribution* at all, only the stationary measure $x_i \equiv 1$, which cannot be normalised (see :ref[Random walks]{to=prob.random-walks}). This is where the finiteness of $S$ does real work: by the lemma above, a finite irreducible chain cannot be null recurrent, so it always has exactly one $\pi$.

**Aperiodicity.** Deliberately *not* assumed anywhere in this unit. The chain on $\{1,2\}$ with $p_{12} = p_{21} = 1$ is irreducible and positive recurrent, has the unique stationary distribution $\pi = (\tfrac12, \tfrac12)$, and yet $p_{11}(n)$ alternates between $1$ and $0$ and converges to nothing. Stationarity is an algebraic statement; convergence to $\pi$ is a separate analytic statement that does need aperiodicity, and it is proved in :ref[Convergence of Markov chains]{to=prob.markov-chain-convergence}.
:::

:::method[Analysing a chain given its transition matrix]{provenance=original}
1. **Write $P$ down and check it is stochastic.** Every row must sum to $1$. An arithmetic slip here invalidates everything after it.
2. **Draw the directed graph** with an arrow $i \to j$ whenever $p_{ij} > 0$, and find its communicating classes. The chain is irreducible exactly when the graph is strongly connected.
3. **Classify.** For a finite irreducible chain, stop: all states are positive recurrent (lemma above). Otherwise identify the closed recurrent classes and the transient states; from a transient state the chain eventually enters one of the closed classes and stays there, so analyse each closed class as a chain in its own right.
4. **Find the period** of one state in each class; all states in a class share it. In practice: if $p_{ii} > 0$ for some $i$ in the class, the class is aperiodic. Otherwise take the gcd of the lengths of the cycles through $i$ in the graph.
5. **Solve $\pi P = \pi$ with $\sum_j \pi_j = 1$.** Because $P$ is stochastic, the all-ones column vector satisfies $P\mathbf{1} = \mathbf{1}$, so $P - I$ is singular and the $N$ equations $\pi(P - I) = 0$ are linearly dependent. Discard any one of them and append the normalisation $\sum_j \pi_j = 1$ in its place.
6. **Read off the mean recurrence times** as $\mu_i = 1/\pi_i$.
7. **For $n$-step probabilities**, diagonalise $P$ if you can: with $P = B^{-1} \Lambda B$ one has $P^{\,n} = B^{-1} \Lambda^n B$, and the eigenvalues other than $1$ control how fast $p_{ij}(n)$ settles down. If $P$ is not diagonalisable, use its Jordan form (:ref[Jordan normal form]{to=linalg.jordan-form}); the extra polynomial factors $n^{k}$ do not change which terms decay.
:::

:::example[A three-state chain: classification, stationary distribution, and a three-step probability]{provenance=original}
A turbulence monitor samples a flow once per minute and records which of three regimes it is in: $1$ = laminar, $2$ = intermittent, $3$ = fully turbulent. The record is modelled as a homogeneous Markov chain with

$$
P \ = \ \begin{pmatrix}
\tfrac12 & \tfrac12 & 0 \\[2pt]
\tfrac13 & \tfrac13 & \tfrac13 \\[2pt]
0 & \tfrac14 & \tfrac34
\end{pmatrix} .
$$

**Step 1: $P$ is stochastic.** The row sums are $\tfrac12 + \tfrac12 = 1$, $\tfrac13 \cdot 3 = 1$ and $\tfrac14 + \tfrac34 = 1$.

**Step 2: irreducibility.** The arrows are $1 \to 2$, $2 \to 1$, $2 \to 3$, $3 \to 2$, together with the loops at $1$, $2$ and $3$. So $1 \leftrightarrow 2 \leftrightarrow 3$ and the chain is irreducible. The state space is finite, so every state is positive recurrent.

**Step 3: aperiodicity.** $p_{11} = \tfrac12 > 0$, so $d(1) = 1$; by the class property all three states are aperiodic, hence all three are ergodic.

**Step 4: the stationary distribution.** Solve $\pi P = \pi$, that is

$$
\begin{aligned}
\tfrac12 \pi_1 + \tfrac13 \pi_2 &= \pi_1 , \\
\tfrac12 \pi_1 + \tfrac13 \pi_2 + \tfrac14 \pi_3 &= \pi_2 , \\
\tfrac13 \pi_2 + \tfrac34 \pi_3 &= \pi_3 .
\end{aligned}
$$

The first equation gives $\tfrac13 \pi_2 = \tfrac12 \pi_1$, so $\pi_2 = \tfrac32 \pi_1$. The third gives $\tfrac13 \pi_2 = \tfrac14 \pi_3$, so $\pi_3 = \tfrac43 \pi_2 = 2 \pi_1$. The second equation is then automatically satisfied, as it must be. Normalising, $\pi_1(1 + \tfrac32 + 2) = 1$, so $\pi_1 = \tfrac29$ and

$$
\pi \ = \ \Bigl( \tfrac29, \ \tfrac13, \ \tfrac49 \Bigr) .
$$

A check: $\pi P$ has first entry $\tfrac29 \cdot \tfrac12 + \tfrac13 \cdot \tfrac13 = \tfrac19 + \tfrac19 = \tfrac29$. Correct.

**Step 5: mean recurrence times.** By part (c) of the statement, $\mu_i = 1/\pi_i$, so

$$
\mu_1 = \tfrac92 = 4.5 , \qquad \mu_2 = 3 , \qquad \mu_3 = \tfrac94 = 2.25 \ \text{minutes}.
$$

The monitor returns to full turbulence on average every $2.25$ minutes, and to laminar flow every $4.5$ minutes.

**Step 6: a three-step probability by Chapman-Kolmogorov.** First square $P$. Its top row is

$$
\begin{aligned}
p_{11}(2) &= p_{11}p_{11} + p_{12}p_{21} = \tfrac12 \cdot \tfrac12 + \tfrac12 \cdot \tfrac13 = \tfrac14 + \tfrac16 = \tfrac{5}{12}, \\
p_{12}(2) &= p_{11}p_{12} + p_{12}p_{22} = \tfrac12 \cdot \tfrac12 + \tfrac12 \cdot \tfrac13 = \tfrac{5}{12}, \\
p_{13}(2) &= p_{12}p_{23} = \tfrac12 \cdot \tfrac13 = \tfrac16 .
\end{aligned}
$$

These sum to $1$, as they must. Now apply Chapman-Kolmogorov with $n = 2$, $r = 1$:

$$
p_{13}(3) = \sum_{k=1}^{3} p_{1k}(2)\, p_{k3}
= \tfrac{5}{12}\cdot 0 + \tfrac{5}{12}\cdot \tfrac13 + \tfrac16 \cdot \tfrac34
= \tfrac{5}{36} + \tfrac18
= \tfrac{10}{72} + \tfrac{9}{72}
= \boxed{\tfrac{19}{72}} \approx 0.2639 .
$$

So a flow observed laminar now is fully turbulent three minutes later with probability $19/72$. For comparison, the stationary value is $\pi_3 = 4/9 \approx 0.4444$: three steps is not yet long enough to forget the laminar start. The eigenvalues of $P$ are $1$ and $\tfrac{7 \pm \sqrt{73}}{24}$, numerically $0.64767$ and $-0.06433$; the largest of these in modulus is $0.64767$, and since $0.64767^{\,n}$ falls below $0.01$ only at $n = 11$, the chain needs of order ten minutes to settle. Direct computation confirms this: $p_{13}(8) = 0.42387$ and $p_{13}(20) = 0.44433$, against $\pi_3 = 0.44444$.
:::

:::application[Kinetic Monte Carlo and Markov state models]{provenance=original}
Discrete-time chains are the standard coarse-graining of a complicated continuous dynamics onto a manageable set of labels.

In **Markov state models** of molecular dynamics one partitions the configuration space of a protein into a few hundred metastable sets, runs many short molecular-dynamics trajectories, and estimates $p_{ij}$ as the observed fraction of trajectories that are in set $j$ a lag time $\tau$ after being in set $i$. The payoff is exactly the content of this unit: the stationary vector $\pi$ gives the equilibrium populations of the conformations (and hence their free-energy differences, $\Delta F_{ij} = -k_{\mathrm{B}} T \log(\pi_j/\pi_i)$), the mean recurrence times $1/\pi_i$ give residence statistics, and the eigenvalues of $P$ other than $1$ give the relaxation timescales $-\tau/\log \lvert \lambda_r \rvert$ of the slow conformational transitions, all from short simulations that individually never see a full folding event.

In **lattice models of surface growth and radiation damage**, kinetic Monte Carlo evolves an adatom configuration by hopping moves; recording the configuration after each sweep gives a chain whose stationary distribution is the equilibrium ensemble. Whether such a chain actually relaxes to $\pi$, and how fast, is the subject of :ref[Convergence of Markov chains]{to=prob.markov-chain-convergence}; the design principle that makes $\pi$ come out right in the first place is detailed balance, treated there.

The same bookkeeping, with $S$ the set of web pages and $P$ the hyperlink matrix smoothed by a small uniform term, is the PageRank computation: the ranking vector is the left eigenvector $\pi$ of $P$ with eigenvalue $1$, computed by the power iteration $\mu^{(n)} = \mu^{(0)} P^{\,n}$ of the evolution lemma.
:::
