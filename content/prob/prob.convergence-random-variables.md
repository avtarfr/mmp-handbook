---
id: prob.convergence-random-variables
title: Convergence of random variables
kind: definition
level: core
summary: Defines the four modes in which a sequence of random variables can converge, proves the implications between them, shows by explicit counterexamples that no others hold, and gives the two Borel-Cantelli lemmas, which are the standard tool for deciding almost-sure convergence.
prereqs: [prob.random-variables, prob.expectation-variance, prob.probability-inequalities]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§7.2 Modes of convergence, pp. 352-358: Definition (7.2.1) of the four modes with the remarks (a)-(d) on notation and the definition of almost sure Cauchy convergence (p. 353), Example (7.2.2), the implication chart of Theorem (7.2.3) and the partial converses of Theorem (7.2.4), Lemma (7.2.5) and its proof, Lemma (7.2.6) with the counterexamples (7.2.8) and (7.2.9), Markov's inequality (7.2.7), Lemma (7.2.10) with the counterexample (7.2.11), Lemma (7.2.12), and Theorem (7.2.13) (an almost surely convergent subsequence); §7.3, the Borel-Cantelli lemmas (7.3.10) with their proof and Example (7.3.11), pp. 364-365"
    pages: "352-358, 364-365"
    role: the definitions of all four modes and their notation; the full implication chart and its proof route (Markov's inequality for mean to probability, the tail-set characterisation for almost sure convergence); the partial converses under boundedness and under a summable tail; both Borel-Cantelli lemmas with the $1-x \le e^{-x}$ proof of the second; the structure of the counterexamples that show no further implications hold; the existence of an almost surely convergent subsequence
  - work: folland-1999
    loc: "§10.2, Theorem 10.10 (the Borel-Cantelli lemma, both parts) with its proof via $\\limsup A_n = \\bigcap_k \\bigcup_{n \\ge k} A_n$, p. 321; §10.1, Exercise 9 (convergence in probability implies vague convergence of distributions), p. 320"
    pages: "320-321"
    role: the measure-theoretic form of the Borel-Cantelli lemmas and the identification of the set where convergence fails as a limit superior of events; the statement that convergence in probability implies vague convergence of the distributions
---

:::note[Why there are four answers]{provenance=original}
A random variable is a function on a sample space, so a sequence of them can converge in any of the senses available to a sequence of functions: pointwise, in an integral norm, or not at all while its distribution still settles down. Probability adds one twist — sets of probability zero may be ignored — and removes one option, because pointwise convergence everywhere on the sample space is almost never the right demand.

The four modes defined below are not interchangeable, and which one a theorem delivers matters in practice. "The simulation converges" means one thing if a single long run is guaranteed to settle (almost sure convergence) and quite another if only the chance of a large error at step $n$ goes to zero (convergence in probability): the second permits arbitrarily large errors to recur forever. The example below is a sequence that converges in probability and in mean yet settles down at no point of the sample space at all.
:::

:::definition[The four modes of convergence]{provenance=adapted src="grimmett-stirzaker-2020:§7.2, Definition (7.2.1) with remarks (a)-(d), pp. 352-353"}
Let $X, X_1, X_2, \dots$ be random variables on a probability space $(\Omega, \mathcal{F}, \mathbb{P})$, and let $F_n$ and $F$ be the distribution functions of $X_n$ and $X$.

1. **Almost surely**, written $X_n \xrightarrow{\mathrm{a.s.}} X$: the set $\{\omega \in \Omega : X_n(\omega) \to X(\omega) \text{ as } n \to \infty\}$ is an event of probability $1$. The same mode is also written $X_n \to X$ almost everywhere, or with probability $1$.
2. **In $r$th mean**, written $X_n \xrightarrow{r} X$, for $r \ge 1$: $\mathbb{E}\lvert X_n^{r}\rvert < \infty$ for every $n$, and
   $$
   \mathbb{E}\bigl(\lvert X_n - X\rvert^{r}\bigr) \to 0 \qquad \text{as } n \to \infty .
   $$
   The cases $r = 1$ ("in mean") and $r = 2$ ("in mean square") have their own names and notation.
3. **In probability**, written $X_n \xrightarrow{\mathrm{P}} X$:
   $$
   \mathbb{P}\bigl(\lvert X_n - X\rvert > \epsilon\bigr) \to 0 \qquad \text{as } n \to \infty, \text{ for every } \epsilon > 0 .
   $$
4. **In distribution**, written $X_n \xrightarrow{\mathrm{D}} X$: $F_n(x) \to F(x)$ as $n \to \infty$ at every $x$ at which $F$ is continuous. This mode is also called weak convergence, or convergence in law.

Three observations about the definitions, before any theorem.

- Modes 1-3 involve the sample space; mode 4 involves only the distribution functions, so it carries no information about dependence between the $X_n$, and indeed no information about $X$ beyond its distribution. Grimmett and Stirzaker note that many authors therefore avoid writing $X_n \xrightarrow{\mathrm{D}} X$ at all; if $X'$ has the same distribution as $X$ then $X_n \xrightarrow{\mathrm{D}} X'$ equally.
- The exclusion of the discontinuity points of $F$ in mode 4 is not a technicality to be wished away. Let $X_n$ be the constant $1/n$ and $Y_n$ the constant $-1/n$. Both should converge to the constant $0$, and their distribution functions are step functions jumping at $1/n$ and at $-1/n$ respectively. At $x = 0$ the first gives $F_n(0) = 0 \to 0$ while the limit distribution function has $F(0) = 1$; the second gives $F_n(0) = 1 \to 1 = F(0)$. Demanding convergence at $x = 0$ would admit one sequence and reject the other.
- Mode 1 can be stated without naming the limit. The sequence is **almost surely Cauchy convergent** if $\mathbb{P}\bigl(\{\omega : \lvert X_m(\omega) - X_n(\omega)\rvert \to 0 \text{ as } m,n\to\infty\}\bigr) = 1$; since a real sequence converges exactly when it is Cauchy, this holds precisely when the $X_n$ converge almost surely.
:::

:::definition[Tail events and the limit superior of a sequence of events]{provenance=adapted src="grimmett-stirzaker-2020:§7.3, the definition preceding Theorem (7.3.10), p. 364; folland-1999:§10.2, p. 321"}
Let $A_1, A_2, \dots$ be events. The event that **infinitely many of the $A_n$ occur**, written $\{A_n \text{ i.o.}\}$, is

$$
\limsup_{n\to\infty} A_n \ = \ \bigcap_{n \ge 1} \ \bigcup_{m \ge n} A_m .
$$

An $\omega$ belongs to it exactly when, for every $n$, some $A_m$ with $m \ge n$ contains $\omega$ — that is, when $\omega$ lies in $A_m$ for infinitely many $m$.

These events are what almost sure convergence is really about. Put $A_n(\epsilon) = \{\lvert X_n - X\rvert > \epsilon\}$ and $B_m(\epsilon) = \bigcup_{n \ge m} A_n(\epsilon)$. Then $X_n(\omega) \to X(\omega)$ fails at $\omega$ precisely when $\omega$ lies in $\limsup_n A_n(\epsilon)$ for some $\epsilon > 0$.
:::

:::statement[The implications between the modes, and partial converses]{provenance=adapted src="grimmett-stirzaker-2020:§7.2, Theorems (7.2.3) and (7.2.4), p. 354, and Lemma (7.2.12), p. 357"}
Let $r > s \ge 1$. The following implications hold, and no others hold in general:

$$
\bigl(X_n \xrightarrow{\mathrm{a.s.}} X\bigr) \ \Longrightarrow \ \bigl(X_n \xrightarrow{\mathrm{P}} X\bigr) \ \Longrightarrow \ \bigl(X_n \xrightarrow{\mathrm{D}} X\bigr) ,
\qquad
\bigl(X_n \xrightarrow{r} X\bigr) \ \Longrightarrow \ \bigl(X_n \xrightarrow{s} X\bigr) \ \Longrightarrow \ \bigl(X_n \xrightarrow{1} X\bigr) \ \Longrightarrow \ \bigl(X_n \xrightarrow{\mathrm{P}} X\bigr) .
$$

So convergence almost surely and convergence in $r$th mean each imply convergence in probability, which implies convergence in distribution; convergence in distribution is the weakest of the four. Almost sure convergence and convergence in $r$th mean are incomparable: neither implies the other.

Three partial converses, each buying back an implication with an extra hypothesis:

1. If $X_n \xrightarrow{\mathrm{D}} c$ for a constant $c$, then $X_n \xrightarrow{\mathrm{P}} c$.
2. Suppose $X_n \xrightarrow{\mathrm{P}} X$, and suppose there is one constant $k$ with $\mathbb{P}(\lvert X_n\rvert \le k) = 1$ at every $n$. Then $X_n \xrightarrow{r} X$ for every $r \ge 1$.
3. If $P_n(\epsilon) = \mathbb{P}(\lvert X_n - X\rvert > \epsilon)$ satisfies $\sum_n P_n(\epsilon) < \infty$ for every $\epsilon > 0$, then $X_n \xrightarrow{\mathrm{a.s.}} X$.

Finally, convergence in probability always contains almost sure convergence along a subsequence: if $X_n \xrightarrow{\mathrm{P}} X$ then there is a deterministic increasing sequence of integers $n_1 < n_2 < \cdots$ with $X_{n_i} \xrightarrow{\mathrm{a.s.}} X$ as $i \to \infty$.
:::

:::statement[The Borel-Cantelli lemmas]{provenance=adapted src="grimmett-stirzaker-2020:§7.3, Theorem (7.3.10), p. 364; folland-1999:§10.2, Theorem 10.10, p. 321"}
Let $A_1, A_2, \dots$ be events, and write $A = \limsup_n A_n$ for the event on which infinitely many of them occur.

1. **First lemma.** If $\sum_n \mathbb{P}(A_n) < \infty$ then $\mathbb{P}(A) = 0$.
2. **Second lemma.** If $\sum_n \mathbb{P}(A_n) = \infty$ *and* the $A_n$ are independent, then $\mathbb{P}(A) = 1$.

The independence hypothesis in the second lemma cannot be dropped. Take any single event $E$ with $0 < \mathbb{P}(E) < 1$ and set $A_n = E$ for every $n$. Then $\sum_n \mathbb{P}(A_n) = \infty$, but $A = E$, so $\mathbb{P}(A) = \mathbb{P}(E) < 1$.

Together the two lemmas say that for independent events the probability that infinitely many occur is either $0$ or $1$, according to whether $\sum_n \mathbb{P}(A_n)$ converges or diverges. This is the simplest instance of a zero-one law.
:::

:::idea{provenance=original}
Three of the four implications are one short argument each, and knowing which argument goes with which implication is most of the subject.

*In mean to in probability* is Markov's inequality and nothing else: a small average of $\lvert X_n - X\rvert$ forces a small probability of a large value, because $\mathbb{P}(\lvert X_n - X\rvert > \epsilon) \le \mathbb{E}\lvert X_n - X\rvert/\epsilon$. The hierarchy among the $r$th means is the same move at a different exponent, plus the fact that the $L^r$ norms are increasing in $r$ on a probability space.

*Almost surely to in probability* is a statement about tail sets. Failure of almost sure convergence means some $\limsup_n A_n(\epsilon)$ has positive probability, and $A_n(\epsilon)$ sits inside $B_n(\epsilon) = \bigcup_{m \ge n} A_m(\epsilon)$, whose probabilities decrease to the probability of that limit superior. So if the limit superior is null for every $\epsilon$, the individual $A_n(\epsilon)$ are asymptotically null too — and the converse fails exactly because a decreasing sequence of unions can stay large while its terms shrink.

*In probability to in distribution* is a sandwich. The event $\{X_n \le x\}$ differs from $\{X \le x\}$ only on the event that $X_n$ and $X$ are far apart or that $X$ lies within $\epsilon$ of $x$, so $F(x-\epsilon) - \mathbb{P}(\lvert X_n - X\rvert > \epsilon) \le F_n(x) \le F(x+\epsilon) + \mathbb{P}(\lvert X_n - X\rvert > \epsilon)$. Letting $n \to \infty$ and then $\epsilon \downarrow 0$ pins $F_n(x)$ to $F(x)$ wherever $F$ is continuous — and only there, which is exactly why continuity points appear in the definition.

The Borel-Cantelli lemmas are the two directions of a single idea. One way, $\mathbb{P}(A) \le \sum_{m \ge n}\mathbb{P}(A_m)$ for every $n$, and a convergent series has small tails. The other way, independence turns the probability that *no* $A_m$ with $m \ge n$ occurs into a product $\prod(1 - \mathbb{P}(A_m))$, and $1 - x \le e^{-x}$ converts that product into the exponential of minus a divergent series, which is zero.
:::

:::proof[The implications and the partial converses]{provenance=adapted src="grimmett-stirzaker-2020:§7.2, proofs of Lemmas (7.2.5), (7.2.6) and (7.2.10) and of Theorems (7.2.4) and (7.2.13), pp. 355-358"}
**Step 1: in $r$th mean implies in $s$th mean for $r > s \ge 1$.** On a probability space the $L^p$ norms increase with $p$: for any random variable $Y$ and $r > s \ge 1$,
$$
\bigl(\mathbb{E}\lvert Y\rvert^{s}\bigr)^{1/s} \ \le \ \bigl(\mathbb{E}\lvert Y\rvert^{r}\bigr)^{1/r} ,
$$
which is Hölder's inequality applied to $\lvert Y\rvert^s \cdot 1$ with exponents $r/s$ and its conjugate (see :ref[$L^p$ spaces]{to=measure.lp-spaces}). Applying it to $Y = X_n - X$ shows that the $s$th mean distance is dominated by the $r$th, so the latter tending to zero forces the former.

**Step 2: in first mean implies in probability.** Apply :ref[Markov's inequality]{to=prob.probability-inequalities} to $\lvert X_n - X\rvert$ at level $\epsilon > 0$:
$$
\mathbb{P}\bigl(\lvert X_n - X\rvert > \epsilon\bigr) \ \le \ \frac{\mathbb{E}\lvert X_n - X\rvert}{\epsilon} \ \longrightarrow \ 0 .
$$
Together with step 1 this gives the whole lower chain.

**Step 3: almost sure convergence, stated through tail sets.** Fix $\epsilon > 0$ and recall $A_n(\epsilon) = \{\lvert X_n - X\rvert > \epsilon\}$, $B_m(\epsilon) = \bigcup_{n \ge m} A_n(\epsilon)$, and $A(\epsilon) = \limsup_n A_n(\epsilon) = \bigcap_m B_m(\epsilon)$. We claim:

*(a)* $X_n \xrightarrow{\mathrm{a.s.}} X$ if and only if $\mathbb{P}(B_m(\epsilon)) \to 0$ as $m \to \infty$ for every $\epsilon > 0$.

Let $C = \{\omega : X_n(\omega) \to X(\omega)\}$. For a fixed $\omega$, convergence holds exactly when $\omega$ fails to lie in $A(\epsilon)$ for every $\epsilon > 0$. Hence $\mathbb{P}(C) = 1$ forces $\mathbb{P}(A(\epsilon)) = 0$ for all $\epsilon$. Conversely suppose $\mathbb{P}(A(\epsilon)) = 0$ for all $\epsilon > 0$. The sets $A(\epsilon)$ shrink as $\epsilon$ grows, so the union over all $\epsilon > 0$ equals the countable union over $\epsilon = 1/k$, and
$$
\mathbb{P}(C^{c}) = \mathbb{P}\Bigl( \bigcup_{k \ge 1} A(1/k) \Bigr) \ \le \ \sum_{k \ge 1} \mathbb{P}\bigl(A(1/k)\bigr) = 0 .
$$
Restricting to a countable set of $\epsilon$'s is the only subtle point, and it is what makes the union measurable. Finally $\{B_m(\epsilon)\}_{m \ge 1}$ is a decreasing sequence of events with intersection $A(\epsilon)$, so by continuity of $\mathbb{P}$ along monotone sequences, $\mathbb{P}(A(\epsilon)) = 0$ if and only if $\mathbb{P}(B_m(\epsilon)) \to 0$.

**Step 4: almost surely implies in probability.** $A_n(\epsilon) \subseteq B_n(\epsilon)$, so $\mathbb{P}(\lvert X_n - X\rvert > \epsilon) \le \mathbb{P}(B_n(\epsilon)) \to 0$ by step 3.

**Step 5: a summable tail gives almost sure convergence (partial converse 3).** From the definition of $B_m(\epsilon)$ as a countable union,
$$
\mathbb{P}\bigl(B_m(\epsilon)\bigr) \ \le \ \sum_{n \ge m} \mathbb{P}\bigl(A_n(\epsilon)\bigr) ,
$$
which is the tail of a convergent series and so tends to zero as $m \to \infty$. Step 3(a) then gives almost sure convergence. (This is the first Borel-Cantelli lemma in disguise, applied to $A_n(\epsilon)$.)

**Step 6: in probability implies in distribution.** Let $\epsilon > 0$. Split the event $\{X_n \le x\}$ according to whether $X$ exceeds $x + \epsilon$:
$$
F_n(x) = \mathbb{P}(X_n \le x,\ X \le x+\epsilon) + \mathbb{P}(X_n \le x,\ X > x+\epsilon) \ \le \ F(x+\epsilon) + \mathbb{P}\bigl(\lvert X_n - X\rvert > \epsilon\bigr) ,
$$
because on the second event $X - X_n > \epsilon$. The same split with the roles exchanged gives
$$
F(x-\epsilon) = \mathbb{P}(X \le x-\epsilon,\ X_n \le x) + \mathbb{P}(X \le x - \epsilon,\ X_n > x) \ \le \ F_n(x) + \mathbb{P}\bigl(\lvert X_n - X\rvert > \epsilon\bigr) .
$$
Letting $n \to \infty$ and using convergence in probability,
$$
F(x-\epsilon) \ \le \ \liminf_{n} F_n(x) \ \le \ \limsup_{n} F_n(x) \ \le \ F(x+\epsilon) \qquad \text{for every } \epsilon > 0 .
$$
If $F$ is continuous at $x$ then $F(x \mp \epsilon) \to F(x)$ as $\epsilon \downarrow 0$ and the two bounds close. At a discontinuity they do not, and no conclusion follows — which is precisely the content of the second remark after the definitions.

**Step 7: the partial converses 1 and 2.**
For (1), let $X_n \xrightarrow{\mathrm{D}} c$. Then for $\epsilon > 0$, $\mathbb{P}(\lvert X_n - c\rvert > \epsilon) = \mathbb{P}(X_n < c - \epsilon) + \mathbb{P}(X_n > c+\epsilon)$, and both terms tend to zero because the limiting distribution function is continuous at $c \pm \epsilon$ and equals $0$ and $1$ there.

For (2), suppose $X_n \xrightarrow{\mathrm{P}} X$ and $\lvert X_n\rvert \le k$ almost surely for all $n$. First, $\lvert X\rvert \le k$ almost surely: for every $\epsilon > 0$, $\mathbb{P}(\lvert X\rvert \le k+\epsilon) \ge \lim_n \mathbb{P}(\lvert X_n \rvert \le k, \lvert X_n - X\rvert \le \epsilon) = 1$. Hence $\lvert X_n - X\rvert \le 2k$ almost surely, and with $A_n(\epsilon)$ as above,
$$
\lvert X_n - X\rvert^{r} \ \le \ \epsilon^{r}\,\mathbf{1}_{A_n(\epsilon)^{c}} + (2k)^{r}\,\mathbf{1}_{A_n(\epsilon)}
\qquad\text{almost surely.}
$$
Taking expectations, $\mathbb{E}(\lvert X_n - X\rvert^{r}) \le \epsilon^{r} + \bigl[(2k)^{r} - \epsilon^{r}\bigr]\mathbb{P}(A_n(\epsilon)) \to \epsilon^{r}$ as $n \to \infty$. Letting $\epsilon \downarrow 0$ gives convergence in $r$th mean. The uniform bound $k$ is used twice: to make $X$ bounded and to cap the contribution of the bad event.

**Step 8: an almost surely convergent subsequence.** Let $X_n \xrightarrow{\mathrm{P}} X$. For each $i \ge 1$ choose $n_i$, increasing in $i$, with $\mathbb{P}(\lvert X_{n_i} - X\rvert > 1/i) \le 1/i^{2}$, which is possible because for each fixed level the probabilities tend to zero. Fix $\epsilon > 0$. For $i > 1/\epsilon$ we have $1/i < \epsilon$, so $\mathbb{P}(\lvert X_{n_i} - X\rvert > \epsilon) \le \mathbb{P}(\lvert X_{n_i} - X\rvert > 1/i) \le 1/i^2$, and $\sum_{i} 1/i^{2} < \infty$. Step 5 applied to the subsequence gives $X_{n_i} \xrightarrow{\mathrm{a.s.}} X$. $\square$
:::

:::proof[The Borel-Cantelli lemmas]{provenance=adapted src="grimmett-stirzaker-2020:§7.3, proof of Theorem (7.3.10), pp. 364-365; folland-1999:§10.2, proof of Theorem 10.10, p. 321"}
Write $A = \bigcap_{n} \bigcup_{m \ge n} A_m$.

**First lemma.** For every $n$, $A \subseteq \bigcup_{m \ge n} A_m$, so
$$
\mathbb{P}(A) \ \le \ \sum_{m \ge n} \mathbb{P}(A_m) .
$$
If $\sum_m \mathbb{P}(A_m)$ converges, the right-hand side is the $n$th tail of a convergent series and tends to $0$ as $n \to \infty$. Since $\mathbb{P}(A)$ does not depend on $n$, $\mathbb{P}(A) = 0$. No independence is used, and none is available: the only tool is countable subadditivity.

**Second lemma.** Complementing the definition of $A$ gives $A^{c} = \bigcup_{n} \bigcap_{m \ge n} A_m^{c}$, so it suffices to show $\mathbb{P}\bigl(\bigcap_{m \ge n} A_m^{c}\bigr) = 0$ for every $n$. Fix $n$. The complements $A_m^{c}$ are independent because the $A_m$ are, so for every $K \ge n$,
$$
\mathbb{P}\Bigl( \bigcap_{m = n}^{K} A_m^{c} \Bigr) = \prod_{m=n}^{K}\bigl(1 - \mathbb{P}(A_m)\bigr) \ \le \ \prod_{m=n}^{K} e^{-\mathbb{P}(A_m)} = \exp\Bigl(-\sum_{m=n}^{K}\mathbb{P}(A_m)\Bigr) ,
$$
using $1 - x \le e^{-x}$, valid for $x \ge 0$. Because $\sum_m \mathbb{P}(A_m) = \infty$, the partial sums $\sum_{m=n}^{K}\mathbb{P}(A_m)$ diverge as $K \to \infty$, so the right-hand side tends to $0$. The events $\bigcap_{m=n}^{K}A_m^{c}$ decrease in $K$ with intersection $\bigcap_{m \ge n}A_m^{c}$, so by continuity of $\mathbb{P}$ that intersection is null. Taking the countable union over $n$ gives $\mathbb{P}(A^{c}) = 0$. $\square$
:::

:::remark[Where each hypothesis is used, and why no further implication holds]{provenance=adapted src="grimmett-stirzaker-2020:§7.2, Example (7.2.2), the counterexamples (7.2.8), (7.2.9) and (7.2.11), and Lemma (7.2.12), pp. 353-357"}
Every arrow in the chart has a counterexample for its reverse. Four suffice, and each is built to break exactly one thing.

**1. In distribution but in no other mode.** Let $X$ be $0$ or $1$ with probability $\tfrac12$ each, set $X_n = X$ for every $n$, and let $Y = 1 - X$. Then $Y$ has the same distribution as $X$, so $X_n \xrightarrow{\mathrm{D}} Y$ trivially. But $\lvert X_n - Y\rvert = 1$ always, so there is no convergence to $Y$ in probability, in mean or almost surely. This shows at a stroke that convergence in distribution says nothing about the sample space, and that the limit in mode 4 is determined only up to distribution.

**2. Almost surely and in probability, but not in any mean.** Let the $X_n$ be independent with
$$
\mathbb{P}(X_n = e^{n}) = \frac{1}{n^{2}} , \qquad \mathbb{P}(X_n = 0) = 1 - \frac{1}{n^{2}} .
$$
Then $\sum_n \mathbb{P}(X_n \ne 0) = \sum_n n^{-2} = \pi^{2}/6 < \infty$, so by the first Borel-Cantelli lemma only finitely many $X_n$ are non-zero, almost surely; hence $X_n \to 0$ almost surely and so in probability. But $\mathbb{E}\lvert X_n\rvert = e^{n}/n^{2} \to \infty$, so there is no convergence in mean of any order. A rare event with a huge value is invisible to modes 1, 3 and 4 and dominates mode 2.

**3. In every mean and in probability, but not almost surely.** Let the $X_n$ be independent with
$$
\mathbb{P}(X_n = 1) = \frac1n , \qquad \mathbb{P}(X_n = 0) = 1 - \frac1n .
$$
Then $\mathbb{E}(\lvert X_n\rvert^{r}) = 1/n \to 0$ for every $r \ge 1$, so $X_n \xrightarrow{r} 0$ and hence $X_n \xrightarrow{\mathrm{P}} 0$. But $\sum_n \mathbb{P}(X_n = 1) = \sum_n 1/n = \infty$ and the events are independent, so by the *second* Borel-Cantelli lemma $X_n = 1$ for infinitely many $n$, almost surely; the sequence therefore converges almost nowhere. This is where the independence hypothesis of the second lemma earns its keep: without it the conclusion would not follow. The worked example below is a sequence with the same kind of marginal behaviour but with strongly dependent events, for which the lemmas decide nothing and the failure of almost sure convergence has to be shown by hand.

**4. In $s$th mean but not in $r$th mean, for $r > s$.** Let $X_n$ take the value $n$ with probability $n^{-3/2}$ and $0$ otherwise. Then
$$
\mathbb{E}\lvert X_n\rvert = n \cdot n^{-3/2} = n^{-1/2} \to 0 , \qquad \mathbb{E}\bigl(\lvert X_n\rvert^{2}\bigr) = n^{2}\cdot n^{-3/2} = n^{1/2} \to \infty ,
$$
so $X_n \xrightarrow{1} 0$ while convergence in mean square fails. The exponent $-3/2$ is chosen to sit strictly between $-1$ and $-2$; the general recipe is a mass $n^{-(r+s)/2}$ at the value $n$, which separates the $s$th mean from the $r$th.

**Where the hypotheses enter the partial converses.** In converse 2 the bound $k$ must be *uniform in $n$*: if $\lvert X_n\rvert \le k_n$ with $k_n \to \infty$, example 2 above satisfies the hypothesis with $k_n = e^n$ and the conclusion fails. In converse 3, summability of the tail probabilities is strictly stronger than their tending to zero: in example 3 they tend to zero like $1/n$ and are not summable, and the conclusion fails. In converse 1 the limit must be a *constant*: example 1 has a non-constant limit in distribution and no convergence in probability.

**What is still true in general.** By step 8 of the proof, convergence in probability always yields an almost surely convergent subsequence — so in example 3 one can extract, say, $n_i = i^{2}$, along which $\sum_i 1/i^{2} < \infty$ and convergence is almost sure. The failure of almost sure convergence is a failure of the whole sequence, never of every subsequence.
:::

:::example[A sequence that converges in probability and in mean but at no single point]{provenance=original}
Take $\Omega = (0,1]$ with $\mathcal{F}$ the Borel sets and $\mathbb{P}$ Lebesgue measure, so that $\mathbb{P}\bigl((a,b]\bigr) = b-a$. Define a sequence of indicator random variables by sweeping a shrinking window across $\Omega$ again and again. Arrange the index $n = 1, 2, 3, \dots$ into consecutive **blocks**, with block $k$ containing exactly $k$ indices, and let the $j$th member of block $k$ be

$$
X_n = \mathbf{1}_{I_{k,j}} , \qquad I_{k,j} = \left( \frac{j-1}{k},\ \frac{j}{k} \right] , \qquad j = 1,\dots,k .
$$

Within block $k$ the intervals $I_{k,1},\dots,I_{k,k}$ tile $(0,1]$ exactly once, each of length $1/k$.

**Locating a given index.** Blocks $1$ through $K$ use $1 + 2 + \cdots + K = K(K+1)/2$ indices. For $K = 13$ that is $91$ and for $K = 14$ it is $105$, so index $n = 100$ lies in block $k = 14$, as its $100 - 91 = 9$th member. Hence
$$
X_{100} = \mathbf{1}_{(8/14,\ 9/14]} = \mathbf{1}_{(4/7,\ 9/14]} .
$$

**Convergence in mean and in probability.** For the $j$th member of block $k$,
$$
\mathbb{E}\bigl(\lvert X_n\rvert^{r}\bigr) = \mathbb{P}(I_{k,j}) = \frac1k \qquad \text{for every } r \ge 1 ,
$$
since $X_n$ is an indicator, so $\lvert X_n\rvert^r = X_n$. At $n = 100$ this is $1/14 = 0.071429$. As $n \to \infty$ the block index $k$ also tends to infinity — indeed $k \sim \sqrt{2n}$, so $k = 14$ at $n = 100$ against $\sqrt{200} = 14.14$ — hence $\mathbb{E}(\lvert X_n\rvert^r) \to 0$ and $X_n \xrightarrow{r} 0$ for every $r \ge 1$. By step 2 of the proof, $X_n \xrightarrow{\mathrm{P}} 0$ as well, with $\mathbb{P}(X_n > \epsilon) = 1/k$ for any $0 < \epsilon < 1$.

**Failure of almost sure convergence — everywhere.** Fix any $\omega \in (0,1]$. In each block $k$ exactly one of the $k$ intervals contains $\omega$, so exactly one index $n$ in each block has $X_n(\omega) = 1$ and the other $k-1$ have $X_n(\omega) = 0$. Therefore
$$
\limsup_{n \to \infty} X_n(\omega) = 1 , \qquad \liminf_{n \to \infty} X_n(\omega) = 0 \quad (\text{for } k \ge 2) ,
$$
and the sequence $X_n(\omega)$ fails to converge for **every** $\omega$. So the set on which convergence holds is empty, of probability $0$, and almost sure convergence fails as badly as it possibly can while convergence in mean of every order holds.

**Why Borel-Cantelli does not decide this one.** Let $A_n = \{X_n = 1\} = I_{k,j}$. Then
$$
\sum_{n=1}^{\infty} \mathbb{P}(A_n) = \sum_{k=1}^{\infty} \sum_{j=1}^{k} \frac1k = \sum_{k=1}^{\infty} 1 = \infty ,
$$
so the first lemma does not apply; and the $A_n$ within one block are disjoint, hence very far from independent, so the second lemma does not apply either. The direct argument above supplies what the lemmas cannot. This is the normal situation: the lemmas are decisive for independent events and only suggestive otherwise.

**Numbers to check.** At $n = 100$: block $k = 14$, position $j = 9$, $X_{100} = \mathbf{1}_{(0.571429,\ 0.642857]}$, $\mathbb{E}(X_{100}) = \mathbb{P}(X_{100} = 1) = 1/14 = 0.0714286$. At $n = 5050 = 100\cdot101/2$: this is the last index of block $100$, so $X_{5050} = \mathbf{1}_{(0.99,\ 1]}$ and $\mathbb{E}(X_{5050}) = 0.01$. Fifty times as many steps have cut the mean error by a factor of just over seven: the convergence is slow, of order $n^{-1/2}$, which is another reason to keep the modes distinct — the mode tells you nothing about the rate.
:::

:::application[Simulation, estimators and the ergodic theorems]{provenance=original}
**Which guarantee a simulation has.** A Monte Carlo estimator $\hat\mu_n$ built from $n$ samples is a sequence of random variables, and the mode of convergence is the difference between two engineering promises. Convergence in probability says: for a long enough run, a bad answer is unlikely. Almost sure convergence says: *this* run, continued, will settle down. The worked example shows the gap is not academic — there are sequences for which every single run fails to settle while the probability of a large error at step $n$ goes to zero. The strong law of large numbers (see :ref[Laws of large numbers]{to=prob.law-of-large-numbers}) is valuable precisely because it delivers the stronger mode.

**Consistency of estimators.** In statistics an estimator is called consistent when it converges in probability to the quantity it estimates, and strongly consistent when the convergence is almost sure; the vocabulary of :ref[Estimators]{to=stats.estimators} is this unit's modes 3 and 1. Mode 2, convergence in mean square, is what underlies the usual decomposition of mean squared error into variance plus squared bias, and converse 2 above is the standard reason one may pass from consistency to mean-square consistency for a bounded estimator.

**Where the limit distribution is all you want.** Mode 4 is weak, but for the purpose it is designed for it is exactly right: an error bar, a $p$-value or a confidence interval is a statement about a distribution, and the theorem that supplies it — :ref[The central limit theorem]{to=prob.central-limit-theorem} — can only deliver convergence in distribution, since the standardised sum does not converge in any stronger mode. Partial converse 1 is what lets a limit in distribution be upgraded when the limit happens to be deterministic, and that is the usual route from a limit law to a law of large numbers.

**Borel-Cantelli as a recurrence test.** In the theory of Markov chains, a state $i$ is recurrent exactly when the events $A_n = \{X_n = i\}$ occur infinitely often with probability $1$. The first Borel-Cantelli lemma therefore gives one half of the standard criterion immediately: if $\sum_n p_{ii}(n) < \infty$ then $i$ is visited only finitely often, so $i$ is transient. The converse needs a different argument, because the $A_n$ are not independent — see :ref[Discrete-time Markov chains]{to=prob.markov-chains}. The same pair of lemmas is the standard tool for deciding whether a random series converges, whether a random walk returns to the origin, and whether the fluctuations of a noisy signal exceed a threshold infinitely often.
:::
