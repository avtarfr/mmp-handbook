---
id: prob.martingales
title: Martingales
kind: definition
level: core
summary: Defines filtrations, martingales, sub- and supermartingales and stopping times, proves that a stopped martingale is a martingale and then the optional stopping theorem in two usable forms, shows by the doubling strategy exactly which hypothesis fails when the conclusion does, and uses the theorem to compute the mean waiting time for a pattern in coin tosses.
prereqs: [prob.probability-spaces, prob.random-variables, prob.expectation-variance, prob.conditional-expectation, prob.probability-inequalities, prob.convergence-random-variables, measure.monotone-convergence-fatou, measure.dominated-convergence]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "Ch. 12 Martingales, pp. 533-568: Definition (12.1.1) (martingale with respect to a sequence) and Example (12.1.3) (the doubling strategy, with $\\mathbb{P}(T=n)=2^{-n}$ and an infinite mean loss before the win), pp. 533-534; the general conditional expectation (12.1.7), the definition of a filtration and of an adapted sequence, and Definitions (12.1.8) and (12.1.9) of martingale, submartingale and supermartingale, pp. 535-536; Definition (12.4.1) of a stopping time, the $\\sigma$-field $\\mathcal{F}_T$, Example (12.4.4) (first passage times) and Theorem (12.4.5) (a stopped submartingale is a submartingale) with its proof, pp. 550-551; the optional sampling theorem (12.4.11), p. 552; Exercise (12.4.4) (the bound $\\mathbb{E}(Y_0)/x$ for $\\mathbb{P}(\\max_{0\\le m\\le n} Y_m \\ge x)$, for a non-negative supermartingale), p. 553; §12.5, the optional stopping theorem (12.5.1) with its proof, Theorem (12.5.9) with its proof, Example (12.5.5) (a bounded harmonic function on an irreducible recurrent chain is constant) and Example (12.5.12) (Wald's equation, with the filtration $\\sigma(Y_1,\\dots,Y_n)$), pp. 554-556; §12.8, Example (12.8.7) (the likelihood ratio is a martingale under the null density), p. 568"
    pages: "533-536, 550-556, 568"
    role: every definition in this unit; the statement and proof route of the stopped-martingale theorem, including the one-sided bound $\mathbb{E}(Z_n^{+}) \le \sum_{t\le n}\mathbb{E}(Y_t^{+})$ used for the submartingale case; the optional sampling theorem quoted in part A; both forms of the optional stopping theorem and the structure of their proofs (the identity $Y_T = Y_{T\wedge n} + (Y_T-Y_n)\mathbf{1}_{\{T>n\}}$, and the domination of $|Y_{T\wedge n}|$ by $|Y_0|$ plus the sum of absolute increments); Wald's equation as a corollary; the doubling-strategy martingale used in the remark as the counterexample; the maximal bound for a non-negative supermartingale, the discrete Liouville theorem, and the likelihood-ratio martingale used in the application
---

:::note[What a martingale is for]{provenance=original}
A martingale is the mathematics of a fair game: whatever has happened so far, the expected change at the next step is zero. That single property is weaker than independence and weaker than the Markov property, and it is nonetheless enough to prove convergence theorems, concentration inequalities and - the subject of this unit - a rule for exchanging a random stopping time with an expectation.

The use is almost always the same. One wants a quantity attached to a random time: the chance of hitting one barrier before another, the mean number of steps until a pattern appears, the probability that a running statistic ever crosses a threshold. Direct computation means summing over all the ways the history could have gone. Instead one finds a martingale, argues that its mean cannot have changed by the time one stops, and reads off the answer from a single equation. The catch is that the mean *can* change: a gambler who can borrow without limit and who stops as soon as he is ahead is certain to end ahead. The theorems below say precisely which hypothesis that gambler violates.
:::

:::definition[Filtrations, martingales, and stopping times]{provenance=adapted src="grimmett-stirzaker-2020:Ch. 12, Definitions (12.1.1), (12.1.8) and (12.1.9), pp. 533-536, and Definition (12.4.1) with the construction of $\mathcal{F}_T$, p. 550"}
Throughout, $(\Omega,\mathcal{F},\mathbb{P})$ is a probability space and time runs over $n = 0,1,2,\dots$.

**Filtration, adapted.** A **filtration** is a family $F = \{\mathcal{F}_n : n \ge 0\}$ of sub-$\sigma$-fields of $\mathcal{F}$ that increases, $\mathcal{F}_n \subseteq \mathcal{F}_{n+1}$. Read $\mathcal{F}_n$ as everything an observer knows at time $n$. A sequence $Y = \{Y_n\}$ is **adapted** to $F$ if each $Y_n$ is $\mathcal{F}_n$-measurable, that is, if $Y_n$ is known at time $n$. The **natural filtration** of a sequence $X = \{X_n\}$ is $\mathcal{F}_n = \sigma(X_0, X_1,\dots,X_n)$.

**Martingale.** The adapted pair $(Y,F)$ is a **martingale** if, for every $n \ge 0$,
$$
\mathbb{E}\lvert Y_n \rvert < \infty , \qquad \mathbb{E}\bigl( Y_{n+1} \mid \mathcal{F}_n \bigr) = Y_n .
$$
Here $\mathbb{E}(\,\cdot \mid \mathcal{F}_n)$ is conditional expectation given a $\sigma$-field (:ref[Conditional expectation]{to=prob.conditional-expectation}); it is a random variable, and the identity, like every identity between conditional expectations in this unit, is asserted up to an event of probability zero. Taking expectations in the defining identity gives $\mathbb{E}(Y_n) = \mathbb{E}(Y_0)$ for every $n$: the mean of a martingale never moves.

When the filtration is the natural one of some observed sequence $X$, one says that $Y$ is a martingale with respect to $X$; the condition is then $\mathbb{E}(Y_{n+1} \mid X_0,\dots,X_n) = Y_n$. A finite family $\{Y_n : 0 \le n \le N\}$ satisfying the same conditions is also called a martingale.

**Submartingale, supermartingale.** The adapted pair $(Y,F)$ is a **submartingale** if $\mathbb{E}(Y_n^{+}) < \infty$ and $\mathbb{E}(Y_{n+1}\mid\mathcal{F}_n) \ge Y_n$ for all $n$, and a **supermartingale** if $\mathbb{E}(Y_n^{-}) < \infty$ and $\mathbb{E}(Y_{n+1}\mid\mathcal{F}_n) \le Y_n$ for all $n$, where $x^{+} = \max\{0,x\}$ and $x^{-} = -\min\{0,x\}$. Note that these moment conditions are one-sided, and so weaker than $\mathbb{E}\lvert Y_n\rvert<\infty$. A sequence is a martingale exactly when it is both; $Y$ is a submartingale exactly when $-Y$ is a supermartingale. The names are the opposite way round from what the inequalities suggest; they come from the theory of harmonic functions, where a subharmonic function lies below the harmonic one with the same boundary values.

**Stopping time.** A random variable $T$ with values in $\{0,1,2,\dots\}\cup\{\infty\}$ is a **stopping time** for $F$ if
$$
\{T = n\} \in \mathcal{F}_n \qquad \text{for every } n \ge 0 ,
$$
equivalently if $\{T \le n\} \in \mathcal{F}_n$ for every $n$, and hence also $\{T > n\} \in \mathcal{F}_n$. The content is that the decision to stop at time $n$ may use the first $n$ observations and nothing later. A stopping time is allowed to be infinite: "never" is a permitted value.

The standard example is a **first passage time**: if $X$ is adapted and $B \subseteq \mathbb{R}$, then $T_B = \min\{n : X_n \in B\}$ (with $T_B = \infty$ if $X$ never enters $B$) is a stopping time, since $\{T_B = n\}$ is decided by $X_0,\dots,X_n$. By contrast "the last time $X$ visits $B$" is not a stopping time: deciding it requires the whole future.

**The $\sigma$-field at a stopping time.** $\mathcal{F}_T$ is the collection of events $A$ with $A \cap \{T \le n\} \in \mathcal{F}_n$ for every $n$. It is a $\sigma$-field, and it is the information available at the random time $T$.

We write $a \wedge b = \min\{a,b\}$, so $Y_{T\wedge n}$ is the process watched until $T$ and then held fixed.
:::

:::statement[Stopping a martingale]{provenance=adapted src="grimmett-stirzaker-2020:§12.4, Theorem (12.4.5) and the optional sampling theorem (12.4.11), pp. 551-552, and §12.5, Theorems (12.5.1) and (12.5.9) with Example (12.5.12), pp. 554-556"}
Throughout this statement $T$ is a stopping time for the filtration $F$, and $(Y,F)$ is a martingale.

**A. The stopped process.** $Z_n = Y_{T \wedge n}$ defines a martingale $(Z,F)$; if $(Y,F)$ is only a submartingale, the same holds with "submartingale" in place of "martingale". In particular
$$
\mathbb{E}\bigl( Y_{T\wedge n} \bigr) \ = \ \mathbb{E}(Y_0) \qquad \text{for every finite } n .
$$
If moreover $\mathbb{P}(T \le N) = 1$ for some deterministic $N$, then $T\wedge N = T$ and so $\mathbb{E}(Y_T) = \mathbb{E}(Y_0)$: for a **bounded** stopping time no further hypothesis is needed. This last statement is the *optional sampling theorem*, and it has a sharper form that is where the $\sigma$-field $\mathcal{F}_T$ earns its place: if $T_1 \le T_2 \le \cdots$ are stopping times, each bounded by a deterministic constant, then the sampled pairs $(Y_{T_j}, \mathcal{F}_{T_j})$ again form a martingale. Watching a fair game at a sequence of bounded, non-anticipating times gives a fair game, with $\mathcal{F}_{T_j}$ as the information available at the $j$th observation. The boundedness is essential: with $Y$ the symmetric simple random walk and $T_1$ its first passage to level $1$, a single unbounded sampling time already gives $\mathbb{E}(Y_{T_1}) = 1 \ne 0 = \mathbb{E}(Y_0)$.

**B. Optional stopping theorem.** $\mathbb{E}(Y_T) = \mathbb{E}(Y_0)$ provided all three of
1. $\mathbb{P}(T<\infty) = 1$,
2. $\mathbb{E}\lvert Y_T\rvert < \infty$,
3. $\mathbb{E}\bigl( Y_n \mathbf{1}_{\{T>n\}} \bigr) \to 0$ as $n \to \infty$.

**C. A sufficient condition that is easier to check.** $\mathbb{E}(Y_T) = \mathbb{E}(Y_0)$ provided
1. $\mathbb{P}(T<\infty)=1$ and $\mathbb{E}(T) < \infty$, and
2. there is a constant $c$ with $\mathbb{E}\bigl( \lvert Y_{n+1}-Y_n \rvert \mid \mathcal{F}_n \bigr) \le c$ for all $n < T$.

**D. Wald's equation.** Let $X_1,X_2,\dots$ be independent and identically distributed with $\mathbb{E}\lvert X_1\rvert < \infty$ and mean $\mu$, let $S_n = X_1+\cdots+X_n$, and let $T$ be a stopping time with $\mathbb{E}(T)<\infty$ for the filtration $\mathcal{F}_n = \sigma(X_1,\dots,X_n)$. Then
$$
\mathbb{E}(S_T) \ = \ \mu\, \mathbb{E}(T) .
$$

Grimmett and Stirzaker state this with the filtration generated by the martingale $Y_n = S_n - n\mu$ rather than by the data, that is with $\sigma(Y_1,\dots,Y_n)$ in place of $\sigma(X_1,\dots,X_n)$. The two are the same $\sigma$-field: $Y_n$ is a function of $X_1,\dots,X_n$, and conversely $S_n = Y_n + n\mu$ and $X_n = S_n - S_{n-1}$ recover the data from the $Y$'s. So nothing turns on the choice, and we use the natural filtration of the data throughout.

Version C is the one used in practice: both of its hypotheses are statements about the step sizes and about $T$ alone, and neither mentions $Y_T$.
:::

:::idea{provenance=original}
**Stopping does not break fairness.** Between times $n$ and $n+1$ the stopped process either moves exactly as $Y$ does, on the event $\{T>n\}$, or does not move at all. Which of the two happens is decided by time $n$, because $T$ is a stopping time; so, conditionally on $\mathcal{F}_n$, the increment is either a fair increment or zero, and in both cases has conditional mean zero. Nothing is needed beyond the definition of a stopping time, which is exactly why this part is free.

**Why that is not yet the theorem.** Part A controls $Y$ at the time $T\wedge n$, not at $T$. The two differ only on the event $\{T>n\}$, whose probability tends to zero; but "the event is unlikely" is not "the contribution is small", because $Y_n$ may be huge precisely there. The one-line identity
$$
Y_T \ = \ Y_{T\wedge n} + \bigl(Y_T - Y_n\bigr)\mathbf{1}_{\{T>n\}}
$$
isolates the whole difficulty in the two terms $\mathbb{E}(Y_T \mathbf{1}_{\{T>n\}})$ and $\mathbb{E}(Y_n\mathbf{1}_{\{T>n\}})$. The first dies automatically under hypothesis 2, being the tail of a convergent sum; the second is hypothesis 3, and the examples show it is a genuine extra demand.

**Why bounded increments and a finite mean suffice.** Hypothesis 3 is awkward to verify, so one looks for a single dominating random variable. The total movement of the stopped process never exceeds the sum of all the increments up to $T$, so $\lvert Y_{T\wedge n}\rvert \le \lvert Y_0\rvert + \sum_{i\le T}\lvert Y_i - Y_{i-1}\rvert$. Bounding each conditional increment by $c$ and summing over $i$ with the weights $\mathbb{P}(T \ge i)$ turns the right-hand side into $c\,\mathbb{E}(T)$, which is finite. A dominated sequence may be passed to the limit, and that is version C.
:::

:::proof[A: the stopped process is a martingale]{provenance=adapted src="grimmett-stirzaker-2020:§12.4, proof of Theorem (12.4.5), p. 551"}
Let $Z_n = Y_{T\wedge n}$.

**Step 1: $Z_n$ is $\mathcal{F}_n$-measurable.** Split according to the value of $T$:
$$
Z_n \ = \ \sum_{t=0}^{n-1} Y_t \mathbf{1}_{\{T=t\}} + Y_n \mathbf{1}_{\{T \ge n\}} .
$$
Each $Y_t$ with $t \le n$ is $\mathcal{F}_n$-measurable because $Y$ is adapted and the filtration increases; each indicator is $\mathcal{F}_n$-measurable because $T$ is a stopping time, using $\{T \ge n\} = \{T \le n-1\}^{c}$. Hence so is the sum.

**Step 2: $Z_n$ satisfies the moment condition.** Here the two cases must be kept apart, because the definitions impose different moment conditions. If $Y$ is a martingale, the display shows $\lvert Z_n\rvert \le \sum_{t=0}^{n}\lvert Y_t\rvert$, a finite sum of integrable variables, so $\mathbb{E}\lvert Z_n\rvert<\infty$. If $Y$ is only a submartingale we may not assume $\mathbb{E}\lvert Y_t\rvert<\infty$ - a submartingale is required to satisfy only the one-sided condition $\mathbb{E}(Y_t^{+})<\infty$ - and the bound above is unavailable. But $Z_n$ equals one of $Y_0,\dots,Y_n$ pointwise, so $Z_n^{+} \le \sum_{t=0}^{n} Y_t^{+}$, whence
$$
\mathbb{E}\bigl( Z_n^{+} \bigr) \ \le \ \sum_{t=0}^{n} \mathbb{E}\bigl( Y_t^{+} \bigr) \ < \ \infty ,
$$
which is exactly the one-sided condition a submartingale must satisfy. This is the bound Grimmett and Stirzaker use, and it is the reason their theorem is stated for submartingales in the first place.

**Step 3: the increment.** Subtracting the displays for $n+1$ and $n$, every term cancels except on the event that $T$ has not yet occurred:
$$
Z_{n+1} - Z_n \ = \ \bigl( Y_{n+1} - Y_n \bigr)\, \mathbf{1}_{\{T > n\}} .
$$
The indicator is $\mathcal{F}_n$-measurable, so it may be taken outside the conditional expectation:
$$
\mathbb{E}\bigl( Z_{n+1} - Z_n \mid \mathcal{F}_n \bigr) \ = \ \mathbf{1}_{\{T>n\}}\, \mathbb{E}\bigl( Y_{n+1}-Y_n \mid \mathcal{F}_n \bigr) \ = \ 0 ,
$$
the last step by the martingale property of $Y$. (If $Y$ is only a submartingale the final bracket is non-negative, and since the indicator is non-negative the product is too, which gives the submartingale version.) Taking expectations in $\mathbb{E}(Z_{n+1}\mid\mathcal{F}_n) = Z_n$ gives $\mathbb{E}(Y_{T\wedge n}) = \mathbb{E}(Z_0) = \mathbb{E}(Y_0)$.

**Step 4: bounded stopping times.** If $\mathbb{P}(T\le N)=1$ then $Y_{T\wedge N} = Y_T$ almost surely, and step 3 at $n=N$ gives $\mathbb{E}(Y_T) = \mathbb{E}(Y_0)$. $\square$
:::

:::proof[B and C: the optional stopping theorem]{provenance=adapted src="grimmett-stirzaker-2020:§12.5, proofs of Theorems (12.5.1) and (12.5.9), pp. 554-556"}
**Part B.** Assume hypotheses 1-3. Because $\mathbb{P}(T<\infty)=1$, the variable $Y_T$ is defined almost surely, and splitting according to whether $T$ exceeds $n$,
$$
Y_T \ = \ Y_{T\wedge n} \ + \ \bigl( Y_T - Y_n \bigr)\mathbf{1}_{\{T>n\}} .
$$
Every term is integrable - $Y_T$ by hypothesis 2, $Y_n$ and $Y_{T\wedge n}$ by step 2 of the previous proof - so expectations may be taken term by term, and part A replaces $\mathbb{E}(Y_{T\wedge n})$ by $\mathbb{E}(Y_0)$:
$$
\mathbb{E}(Y_T) \ = \ \mathbb{E}(Y_0) + \mathbb{E}\bigl( Y_T\mathbf{1}_{\{T>n\}} \bigr) - \mathbb{E}\bigl( Y_n\mathbf{1}_{\{T>n\}} \bigr) .
$$
This holds for every $n$, so it holds in the limit. The third term tends to $0$: that is hypothesis 3. For the second, decompose over the value of $T$,
$$
\mathbb{E}\bigl( Y_T \mathbf{1}_{\{T>n\}} \bigr) \ = \ \sum_{k=n+1}^{\infty} \mathbb{E}\bigl( Y_T \mathbf{1}_{\{T=k\}}\bigr) ,
$$
which is the $n$th tail of the series $\sum_{k\ge0}\mathbb{E}(Y_T\mathbf{1}_{\{T=k\}})$. Hypothesis 2 makes that series absolutely convergent (its absolute terms sum to $\mathbb{E}\lvert Y_T\rvert$), and hypothesis 1 makes it sum to $\mathbb{E}(Y_T)$, so its tails tend to $0$. Letting $n\to\infty$ leaves $\mathbb{E}(Y_T)=\mathbb{E}(Y_0)$.

**Part C.** Now assume instead that $\mathbb{E}(T)<\infty$ and that the conditional increments are bounded by $c$ before $T$. Write $R_i = \lvert Y_i - Y_{i-1}\rvert$ for $i \ge 1$ and
$$
R \ = \ \sum_{i=1}^{T} R_i \ = \ \sum_{i=1}^{\infty} R_i \mathbf{1}_{\{T \ge i\}} .
$$

*Step 1: $R$ has finite mean.* The event $\{T\ge i\} = \{T\le i-1\}^{c}$ lies in $\mathcal{F}_{i-1}$, so the indicator comes outside the conditional expectation and hypothesis 2 applies on it:
$$
\mathbb{E}\bigl( R_i \mathbf{1}_{\{T\ge i\}} \mid \mathcal{F}_{i-1}\bigr) \ = \ \mathbf{1}_{\{T \ge i\}}\, \mathbb{E}\bigl( R_i \mid \mathcal{F}_{i-1}\bigr) \ \le \ c\,\mathbf{1}_{\{T\ge i\}} .
$$
Taking expectations and summing over $i$, with monotone convergence (:ref[Monotone convergence and Fatou's lemma]{to=measure.monotone-convergence-fatou}) to exchange the sum and the expectation of non-negative terms,
$$
\mathbb{E}(R) \ \le \ c\sum_{i\ge1} \mathbb{P}(T\ge i) \ = \ c\,\mathbb{E}(T) \ < \ \infty .
$$

*Step 2: domination.* For every $n$, the stopped process has moved from $Y_0$ by at most the total of the increments it has used, so $\lvert Y_{T\wedge n}\rvert \le \lvert Y_0\rvert + R$, and the dominating variable $\lvert Y_0\rvert + R$ is integrable and does not depend on $n$.

*Step 3: pass to the limit.* Since $\mathbb{E}(T)<\infty$ we have $T<\infty$ almost surely, so $Y_{T\wedge n}\to Y_T$ almost surely. Dominated convergence (:ref[Dominated convergence]{to=measure.dominated-convergence}) applies by step 2, so $\mathbb{E}(Y_{T\wedge n}) \to \mathbb{E}(Y_T)$, while part A says every term of that sequence equals $\mathbb{E}(Y_0)$. Hence $\mathbb{E}(Y_T)=\mathbb{E}(Y_0)$.

**Part D.** Put $Y_n = S_n - n\mu$ with $Y_0 = 0$ and $\mathcal{F}_n = \sigma(X_1,\dots,X_n)$. Then $\mathbb{E}(Y_{n+1}-Y_n\mid\mathcal{F}_n) = \mathbb{E}(X_{n+1}) - \mu = 0$ by independence, so $(Y,F)$ is a martingale; and
$$
\mathbb{E}\bigl(\lvert Y_{n+1}-Y_n\rvert \mid \mathcal{F}_n\bigr) \ = \ \mathbb{E}\lvert X_{n+1}-\mu\rvert \ = \ \mathbb{E}\lvert X_1 - \mu\rvert \ \le \ 2\,\mathbb{E}\lvert X_1\rvert \ < \ \infty ,
$$
a constant, so hypothesis C2 holds with that constant. With $\mathbb{E}(T)<\infty$, part C gives $\mathbb{E}(Y_T) = 0$, which is $\mathbb{E}(S_T) = \mu\,\mathbb{E}(T)$. $\square$
:::

:::remark[Where the hypotheses are used: the doubling strategy]{provenance=adapted src="grimmett-stirzaker-2020:§12.1, Example (12.1.3), pp. 533-534, and §12.4, the symmetric random walk stopped at level 1 as an instance of failed optional sampling, p. 552"}
One example breaks every version of the theorem at once, and it is worth tracking exactly which hypothesis it violates.

A gambler stakes $1$ on an even-money bet. After each loss he doubles: having lost the first $n$ plays, he stakes $2^{n}$ on play $n+1$. He stops at $T$, the first play he wins. Let $Y_n$ be his accumulated gain after $n$ plays, with $Y_0 = 0$.

- $(Y,F)$ *is* a martingale: before stopping, the next play adds $+2^{n}$ or $-2^{n}$ with probability $\tfrac12$ each, so the conditional mean increment is zero; after stopping it is zero outright.
- $T$ is a stopping time, $\mathbb{P}(T=n) = 2^{-n}$ for $n \ge 1$, so $\mathbb{P}(T<\infty)=1$ and even $\mathbb{E}(T) = \sum_n n2^{-n} = 2 < \infty$. Hypotheses B1 and C1 hold.
- $Y_T = 2^{T-1} - (1+2+\cdots+2^{T-2}) = 1$ with probability $1$, so $\mathbb{E}\lvert Y_T\rvert = 1 < \infty$ and hypothesis B2 holds.
- And yet $\mathbb{E}(Y_T) = 1 \ne 0 = \mathbb{E}(Y_0)$.

So hypothesis **B3 is what fails**, and it fails by exactly the right amount. On $\{T>n\}$ the gambler has lost $n$ times, so $Y_n = -(1+2+\cdots+2^{n-1}) = -(2^{n}-1)$ there, while $\mathbb{P}(T>n)=2^{-n}$. Hence
$$
\mathbb{E}\bigl( Y_n \mathbf{1}_{\{T>n\}}\bigr) \ = \ -\bigl(2^{n}-1\bigr)2^{-n} \ = \ -\bigl(1 - 2^{-n}\bigr) \ \longrightarrow \ -1 ,
$$
not $0$; substituting into the identity in the proof of part B gives $\mathbb{E}(Y_T) = 0 + 0 - (-1) = 1$, the right answer. A vanishingly unlikely event carrying an exponentially large debt contributes a finite amount in the limit, which is the whole phenomenon.

**Hypothesis C2 fails too, and only C2.** On $\{T>n\}$ the next stake is $2^{n}$, so $\mathbb{E}(\lvert Y_{n+1}-Y_n\rvert \mid \mathcal{F}_n) = 2^{n}$, which no constant $c$ bounds. Since C1 holds, this isolates the bounded-increment condition as the one doing the work in version C. The practical reading is familiar: the strategy is a certainty only for a gambler with unbounded credit, and Grimmett and Stirzaker note that his mean accumulated loss just before the winning play is infinite.

**A second counterexample, where C2 holds and C1 fails.** Let $Y$ be a symmetric simple random walk started at $0$ and let $T = \min\{n : Y_n = 1\}$ (:ref[Random walks]{to=prob.random-walks}). The walk is recurrent, so $T<\infty$ almost surely and B1 holds; $Y_T = 1$, so B2 holds; and the increments are bounded by $1$, so C2 holds with $c = 1$. Yet $\mathbb{E}(Y_T) = 1 \ne 0 = \mathbb{E}(Y_0)$. What fails is $\mathbb{E}(T)<\infty$, that is C1, and with it B3: since $Y_{T\wedge n}$ has mean $0$ and equals $1$ on $\{T\le n\}$, we get $\mathbb{E}(Y_n\mathbf{1}_{\{T>n\}}) = -\mathbb{P}(T\le n) \to -1$. Put beside the doubling strategy, where C1 held and C2 failed, this shows that neither of the two hypotheses of version C can be dropped in favour of the other.

**Condition B1 is of a different kind.** It is not traded against B2 and B3; it is what makes the conclusion *mean* anything, because if $\mathbb{P}(T=\infty)>0$ then $Y_T$ is undefined on an event of positive probability. The gap is not always repairable by a convention. Take $X_1,X_2,\dots$ independent with $\mathbb{P}(X_i=1) = p < \tfrac12$ and $\mathbb{P}(X_i=-1) = q = 1-p$, let $S_n = X_1+\cdots+X_n$ with $S_0=0$, and let $M_n = S_n - (p-q)n$, a martingale with $M_0 = 0$. Let $T$ be the first passage of $S$ to level $1$. This walk drifts downwards, and the first-passage probability is $\mathbb{P}(T<\infty) = p/q < 1$, so $\{T=\infty\}$ has probability $1 - p/q > 0$. Now $M$ is itself a random walk whose steps $X_i - (p-q)$ are bounded, non-degenerate and of mean zero, and such a walk oscillates: almost surely $\limsup_n M_n = +\infty$ and $\liminf_n M_n = -\infty$. Hence on $\{T=\infty\}$ the sequence $M_n$ has no limit, no value can be assigned to $M_T$ there by any limiting convention, and the statement $\mathbb{E}(M_T)=\mathbb{E}(M_0)$ cannot even be formulated, let alone rescued. B1 is a condition of well-posedness, while B2, B3, C1 and C2 are conditions that make a well-posed conclusion true.

**What is never needed.** Nothing in part A: for a *bounded* stopping time the conclusion is unconditional. Every counterexample must therefore use a stopping time that is unbounded, even if it is finite with probability one.
:::

:::method[Using optional stopping to compute a hitting quantity]{provenance=original}
To find a hitting probability, a mean hitting time, or the mean value of some functional at a random time:

1. **Name the filtration and the stopping time.** Usually $\mathcal{F}_n$ is generated by the observations up to time $n$, and $T$ is a first passage time, which is automatically a stopping time.
2. **Find a martingale whose value at $T$ encodes the answer.** For a hitting probability, look for a function $\psi$ of the state with $\mathbb{E}(\psi(X_{n+1})\mid\mathcal{F}_n) = \psi(X_n)$ - a harmonic function for the dynamics - so that $\psi(X_T)$ takes one known value on each possible stopping set. For a mean time, look for a compensated quantity such as $\psi(X_n) - \alpha n$, whose value at $T$ contains $T$ itself.
3. **Verify one sufficient condition.** Check $\mathbb{E}(T)<\infty$ and a uniform bound $c$ on the conditional absolute increments before $T$ (version C). The most common way to get $\mathbb{E}(T)<\infty$ is a geometric tail: exhibit $m$ and $\epsilon>0$ such that, from any history, the event occurs within the next $m$ steps with probability at least $\epsilon$; then $\mathbb{P}(T > km) \le (1-\epsilon)^{k}$ and so $\mathbb{E}(T)<\infty$.
4. **Write $\mathbb{E}(Y_T) = \mathbb{E}(Y_0)$ and expand the left side** over the possible values of $Y_T$. One martingale gives one linear equation; if there are two unknowns, find a second martingale.
5. **Sanity-check the answer** in a limiting or symmetric case where it is known independently, and - if the hypotheses were only sufficient - against a direct recursion.
:::

:::example[How long until HH appears?]{provenance=original}
A fair coin is tossed repeatedly, giving independent outcomes $C_1, C_2, \dots$, each equal to $\mathrm{H}$ or $\mathrm{T}$ with probability $\tfrac12$. Let
$$
T \ = \ \min\{ n \ge 2 : C_{n-1}=C_n=\mathrm{H} \}
$$
be the first time the block $\mathrm{HH}$ is complete. We compute $\mathbb{E}(T)$.

**Step 1: build the martingale.** Imagine a casino that pays fair odds: a stake of $s$ on a correctly guessed letter returns $2s$, and nothing otherwise. Before toss $k$, and only while the game is still running (that is, if $k \le T$), a new gambler $G_k$ arrives, stakes $1$ on "$C_k = \mathrm{H}$", and thereafter follows one rule: if she wins, she stakes her entire holding on the next letter of the pattern $\mathrm{HH}$; if she loses, she is broke and plays no more; if she has matched the whole pattern, she keeps her holding and retires.

Let $\mathcal{F}_n = \sigma(C_1,\dots,C_n)$, let $H_n$ be the total holding of all gamblers after toss $n$ (so $H_0=0$), and set
$$
Y_n \ = \ H_n - (T\wedge n) ,
$$
the gamblers' total wealth minus the total $1$ per gambler they have paid in.

$Y$ is a martingale. The event $\{T>n\}$ lies in $\mathcal{F}_n$, since $T$ is a first passage time and hence a stopping time, so the two cases may be treated separately. On $\{T \le n\}$ no new gambler arrives, no stake is placed and nothing is paid in, so $H_{n+1}=H_n$ and $T\wedge(n+1) = T\wedge n$: both terms of $Y$ are frozen and the increment is zero. On $\{T>n\}$ gambler $G_{n+1}$ adds $1$ to the holdings and $1$ to the amount paid in, retired gamblers' holdings are unchanged, and each active gambler's holding is doubled or wiped out with probability $\tfrac12$ each, so its conditional mean is unchanged. Hence
$$
\mathbb{E}\bigl( H_{n+1} - H_n \mid \mathcal{F}_n \bigr) \ = \ \mathbf{1}_{\{T>n\}} \ = \ \mathbb{E}\bigl( (T\wedge(n+1)) - (T\wedge n) \mid \mathcal{F}_n \bigr) ,
$$
the two displayed quantities being equal because $T\wedge(n+1) - T\wedge n$ is the indicator of $\{T>n\}$ outright. Subtracting, $\mathbb{E}(Y_{n+1}\mid\mathcal{F}_n)=Y_n$, with $Y_0 = 0$. (The unconditional identity $\mathbb{E}(H_{n+1}\mid\mathcal{F}_n) = H_n+1$ would be wrong: it holds only while the game is still running.)

**Step 2: check the hypotheses of version C.** At most two gamblers can hold anything at once (one who has matched $\mathrm{H}$, holding $2$, and one who has just matched $\mathrm{HH}$, holding $4$), so $0 \le H_n \le 6$ and $\lvert Y_{n+1}-Y_n\rvert \le 7$ always; condition C2 holds with $c = 7$. For C1, split the tosses into disjoint pairs: each pair is $\mathrm{HH}$ with probability $\tfrac14$ independently of the others, so $\mathbb{P}(T>2m) \le (3/4)^{m}$ and $\mathbb{E}(T)<\infty$. Also $\mathbb{E}\lvert Y_n\rvert \le 6+n<\infty$.

**Step 3: evaluate at $T$.** At the moment $\mathrm{HH}$ is complete, gambler $G_{T-1}$ guessed both letters and holds $2^{2}=4$; gambler $G_{T}$ guessed the first letter $\mathrm{H}$ correctly (it is the second $\mathrm{H}$ of the block) and holds $2^{1}=2$; every other gambler is broke. So $H_T = 4+2 = 6$, a constant, and $T\wedge T = T$. Optional stopping gives
$$
0 \ = \ \mathbb{E}(Y_0) \ = \ \mathbb{E}(Y_T) \ = \ \mathbb{E}(H_T) - \mathbb{E}(T) \ = \ 6 - \mathbb{E}(T) ,
$$
so
$$
\boxed{\ \mathbb{E}(T) = 6 \ }
$$

**Step 4: the same calculation for $\mathrm{HT}$.** Let $T'$ be the first completion of the block $\mathrm{HT}$. Now $G_{T'-1}$ has matched both letters and holds $4$, but $G_{T'}$ staked on "$C_{T'}=\mathrm{H}$" and the toss was $\mathrm{T}$, so she is broke: $H_{T'}=4$ and $\mathbb{E}(T')=4$. Two patterns of the same length have different mean waiting times, and the difference is caused entirely by whether the pattern overlaps itself - $\mathrm{HH}$ does, $\mathrm{HT}$ does not. Conditioning on the first step gives the same answers, but needs a separate recursion for each pattern; the martingale reads the answer straight off the overlap structure.

**Step 5: check against a direct recursion.** Track the length of the current match: let $e_0$ and $e_1$ be the mean remaining number of tosses when the current match has length $0$ and $1$. For $\mathrm{HH}$,
$$
e_0 = 1 + \tfrac12 e_1 + \tfrac12 e_0 , \qquad e_1 = 1 + \tfrac12\cdot 0 + \tfrac12 e_0 ,
$$
whose solution is $e_1 = 4$, $e_0 = 6$, confirming step 3. The corresponding pair for $\mathrm{HT}$ gives $e_0 = 4$.

**Step 6: a biased check.** If the coin shows $\mathrm{H}$ with probability $p$, fair odds return $s/p$ on a correct guess of $\mathrm{H}$ and $s/q$ on a correct guess of $\mathrm{T}$, where $q = 1-p$. The argument is unchanged, and the holdings at $T$ become $p^{-2}+p^{-1}$ for $\mathrm{HH}$ and $(pq)^{-1}$ for $\mathrm{HT}$, so
$$
\mathbb{E}(T_{\mathrm{HH}}) = \frac{1}{p^{2}}+\frac1p , \qquad \mathbb{E}(T_{\mathrm{HT}}) = \frac{1}{pq} .
$$
At $p=\tfrac12$ these give $6$ and $4$ as before. At $p=\tfrac13$ they give $9+3=12$ and $1/(\tfrac13\cdot\tfrac23) = 4.5$, and the recursion of step 5 with $p=\tfrac13$ returns $e_0 = 12$ and $e_0 = 4.5$ respectively. The ranking of the two patterns is not universal. At $p=\tfrac23$ the formulas give $\tfrac94+\tfrac32 = 3.75$ for $\mathrm{HH}$ against $1/(\tfrac23\cdot\tfrac13) = 4.5$ for $\mathrm{HT}$, so with a coin biased towards heads the self-overlapping pattern is the *faster* of the two.
:::

:::application[Anytime-valid testing, and fair games]{provenance=adapted src="grimmett-stirzaker-2020:§12.8, Example (12.8.7), p. 568, §12.4, Exercise (12.4.4), p. 553, and §12.5, Example (12.5.5), p. 555"}
**A non-negative martingale rarely gets large, ever.** Let $(Y,F)$ be a non-negative martingale with $\mathbb{E}(Y_0)=1$ and let $a>0$ (the interesting case being $a>1$). Put $T = \min\{n : Y_n \ge a\}$, a stopping time. By part A, $\mathbb{E}(Y_{T\wedge n}) = 1$ for every $n$; since $Y\ge0$ we may throw away the part of that expectation on $\{T>n\}$ and bound the rest below by $a$:
$$
1 \ = \ \mathbb{E}\bigl(Y_{T\wedge n}\bigr) \ \ge \ \mathbb{E}\bigl( Y_T \mathbf{1}_{\{T\le n\}}\bigr) \ \ge \ a\,\mathbb{P}(T \le n) .
$$
For each fixed $n$ the event $\{T \le n\}$ is $\{\max_{0\le m\le n} Y_m \ge a\}$, which is the form in which Grimmett and Stirzaker record the bound, with $\mathbb{E}(Y_0)/x$ on the right, for non-negative supermartingales. Letting $n\to\infty$ and using that $\{T\le n\}$ increases to $\{T<\infty\}$,
$$
\mathbb{P}\bigl( Y_n \ge a \ \text{for some } n \ge 0 \bigr) \ = \ \mathbb{P}(T<\infty) \ \le \ \frac1a .
$$
This is the martingale form of Markov's inequality (:ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}): it bounds the chance of ever reaching the level $a$, over all time, by what Markov's inequality would give at a single time.

The level must be *attained* on the left: the event $\{\sup_n Y_n \ge a\}$ is strictly larger, since a path may climb towards $a$ without ever reaching it, and the two probabilities can differ. (Take $Y_0=1$ and let $Y$ either jump to $0$ and stay there or survive, with the surviving value at time $n$ equal to $c_n = 2 - 2^{-n}$ and the survival probability from time $n$ chosen as $c_n/c_{n+1}$ to keep the mean at $1$. The total survival probability is $\prod_{n\ge0} c_n/c_{n+1} = c_0/\lim c_n = \tfrac12$, and on the survival event $Y_n < 2$ for every $n$ while $\sup_n Y_n = 2$; so with $a = 2$ we have $\mathbb{P}(T<\infty) = 0$ but $\mathbb{P}(\sup_n Y_n \ge 2) = \tfrac12$.) The supremum form of the bound is nevertheless true, by one extra line: for $0 < b < a$ the event $\{\sup_n Y_n \ge a\}$ is contained in $\{Y_n \ge b$ for some $n\}$, whose probability is at most $1/b$, and letting $b \uparrow a$ gives $\mathbb{P}(\sup_{n\ge0} Y_n \ge a) \le 1/a$ as well. The example above, with $\mathbb{P}(\sup_n Y_n \ge 2) = \tfrac12 = 1/a$, shows that this bound is attained.

**Why this matters for sequential experiments.** Suppose data $X_1,X_2,\dots$ arrive one at a time and are independent and identically distributed with density either $q$ (the null hypothesis) or $p$. Assume $q > 0$ wherever $p > 0$, so that the ratio $p/q$ is defined and finite at every point the data can reach under either hypothesis, and the set $\{q = 0\}$ is null under both. The likelihood ratio
$$
L_n \ = \ \prod_{i=1}^{n} \frac{p(X_i)}{q(X_i)} , \qquad L_0 = 1 ,
$$
is a martingale under the null, because the $X_i$ are independent and, almost surely under $q$,
$$
\mathbb{E}_q\left( \frac{p(X_{n+1})}{q(X_{n+1})} \,\Bigm|\, \mathcal{F}_n \right) = \int_{\{q>0\}} \frac{p(x)}{q(x)}\,q(x)\,dx = \int_{\{q>0\}} p(x)\,dx = 1 ,
$$
the cancellation being legitimate exactly because the integral runs over $\{q>0\}$, and the last equality holding because $p$ vanishes off that set.
It is also non-negative, so the bound above applies: if the rule is "reject the null the first time $L_n \ge 100$", then the probability of ever rejecting a true null is at most $0.01$ **no matter how long one watches, and no matter how the decision to stop is made**. This is the formal content of the modern "anytime-valid" or "safe" testing methods, and it is why they are immune to the usual objection to repeatedly peeking at accumulating data: a fixed-sample test loses its guarantee when the stopping rule is data-dependent, and a martingale test does not.

A concrete instance: to detect a unit shift in the mean of standard normal noise, $q = N(0,1)$ and $p = N(1,1)$, so $\log L_n = \sum_{i\le n} X_i - n/2$, and the rule "stop and reject when $\sum_{i\le n} X_i \ge n/2 + \log 100 = n/2 + 4.6052$" has false-alarm probability at most $0.01$ over an unlimited run. The same quantity, watched under $p$ instead, grows at rate $\tfrac12$ per observation, so the detection delay is about $9.2$ observations.

**Elsewhere.** Martingales are the natural language wherever a quantity is conserved in conditional mean. For a Markov chain with a bounded harmonic function $\psi$ (one satisfying $\sum_j p_{ij}\psi(j)=\psi(i)$), the sequence $\psi(X_n)$ is a martingale, and optional stopping at a first passage time shows that on an irreducible recurrent chain such a $\psi$ must be constant - the discrete Liouville theorem, which is Grimmett and Stirzaker's Example (12.5.5); see :ref[Discrete-time Markov chains]{to=prob.markov-chains}. In continuous time the Wiener process and its compensated square $W(t)^{2}-t$ are martingales, and the stochastic integral of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} is built so as to be one; the pricing of a financial derivative, and the "fluctuation-dissipation" bookkeeping of a driven physical system, are both statements that a suitably discounted quantity is a fair game.
:::
