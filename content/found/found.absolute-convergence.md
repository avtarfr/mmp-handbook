---
id: found.absolute-convergence
title: Absolute and conditional convergence
kind: theorem
level: core
summary: A series whose absolute values converge is convergent and its sum is unchanged by any rearrangement; a convergent series of real terms that is not absolutely convergent can be rearranged to any sum whatever, and the Cauchy product of two absolutely convergent series converges to the product of their sums.
prereqs: [found.limits-of-sequences, found.series-convergence-tests]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.1, absolute and conditional convergence (p. 13), operations on series (p. 14), rearrangement of the alternating harmonic series and Riemann's theorem (pp. 14-15), square of a conditionally convergent series (p. 15)"
    pages: "13-15"
    role: definitions; invariance of the sum under reordering; Riemann's theorem; the alternating selection of positive and negative terms used in its proof; the divergent Cauchy product of a conditionally convergent series with itself
  - work: rhb-2006
    loc: "§4.3.1, absolute and conditional convergence and Riemann's theorem (p. 124); §4.4(iv), the Cauchy product (p. 131)"
    pages: "124, 131"
    role: definitions; statement of Riemann's theorem; statement of the Cauchy product theorem
  - work: ahlfors-1979
    loc: "§2.2, pp. 35-37 (contraction argument for absolute convergence; Exercises 3 and 6, p. 37)"
    pages: "35-37"
    role: absolute convergence implies convergence, by the contraction argument followed in the proof; rearrangement invariance; the product formula under absolute convergence of only one factor
  - work: hassani-2013
    loc: "§10.6.1, p. 319"
    pages: "319"
    role: absolute convergence for complex series
---

:::note{provenance=original}
**What it means.** Absolute convergence is the licence to treat an infinite sum like a finite one: reorder it, split it, multiply it by another such sum. Conditional convergence gives you a number and nothing else, and for a real series Riemann's theorem says exactly how little: the number itself is an artefact of the order in which you added the terms. In practice, before reordering a sum, multiplying two sums or exchanging a sum with another limit, establish absolute convergence; that is what the tests of the previous unit are for.
:::

:::definition[Absolute and conditional convergence]{provenance=adapted src="arfken-2013:§1.1, p. 13; rhb-2006:§4.3.1, p. 124; hassani-2013:§10.6.1, p. 319"}
Let $\sum_{n \ge 0} a_n$ be a series of real or complex terms. It is **absolutely convergent** if $\sum_{n \ge 0} \lvert a_n \rvert$ converges. It is **conditionally convergent** if it converges but $\sum_{n \ge 0} \lvert a_n \rvert$ does not.

Because $\sum \lvert a_n \rvert$ has non-negative terms, the comparison, ratio, root and integral tests of :ref[Convergence tests for series]{to=found.series-convergence-tests} are tests for absolute convergence.
:::

:::definition[Rearrangement and Cauchy product]{provenance=adapted src="rhb-2006:§4.4(iv), p. 131; arfken-2013:§1.1, p. 14"}
A **rearrangement** of $\sum_{n \ge 0} a_n$ is the series $\sum_{n \ge 0} a_{\sigma(n)}$ for a bijection $\sigma : \mathbb{N}_0 \to \mathbb{N}_0$, where $\mathbb{N}_0 = \{0, 1, 2, \dots\}$.

The **Cauchy product** of $\sum_{n \ge 0} a_n$ and $\sum_{n \ge 0} b_n$ is the series $\sum_{n \ge 0} c_n$ with

$$
c_n = \sum_{k=0}^{n} a_k \, b_{n-k} ,
$$

that is, the series obtained by collecting the products $a_k b_l$ with $k + l = n$. It is the series one gets by multiplying two power series term by term and gathering equal powers.
:::

:::statement[Absolute convergence implies convergence]{provenance=adapted src="ahlfors-1979:§2.2, p. 35; hassani-2013:§10.6.1, p. 319"}
If $\sum_{n \ge 0} \lvert a_n \rvert$ converges, with $a_n$ real or complex, then $\sum_{n \ge 0} a_n$ converges. The converse fails, so absolute convergence is strictly stronger than convergence.
:::

:::idea[Absolute convergence implies convergence]{provenance=original}
Neither series' sum is known, so the only usable test is the Cauchy criterion, which asks about blocks of consecutive terms rather than about a limit. A block of the given series is dominated in modulus by the corresponding block of the series of absolute values, so smallness of the second kind of block is inherited by the first.
:::

:::proof[Absolute convergence implies convergence]{provenance=adapted src="ahlfors-1979:§2.2, p. 35"}
Let $\varepsilon > 0$. Since $\sum_{n \ge 0}\lvert a_n\rvert$ converges, the :ref[Cauchy criterion for a series]{to=found.series-convergence-tests} provides an index $N$ with

$$
\sum_{n=m+1}^{m+p} \lvert a_n \rvert < \varepsilon \qquad \text{for all } m \ge N, \ p \ge 1 ,
$$

the modulus signs outside the sum being unnecessary because the terms are non-negative. The triangle inequality for a finite sum then gives

$$
\Bigl\lvert \sum_{n=m+1}^{m+p} a_n \Bigr\rvert \ \le \ \sum_{n=m+1}^{m+p} \lvert a_n\rvert \ < \ \varepsilon
$$

for the same $m$ and $p$. That is the Cauchy criterion for $\sum_{n\ge0}a_n$, which therefore converges. In Ahlfors's phrasing, the partial sums of $\sum a_n$ are a *contraction* of those of $\sum \lvert a_n\rvert$: they move no further apart, so they inherit the Cauchy property.

The converse fails: $\sum_{n \ge 1}(-1)^{n-1}/n$ converges by the Leibniz test while $\sum_{n\ge1}1/n$ diverges, so absolute convergence is strictly stronger. $\square$
:::

:::statement[Bound on the sum]{provenance=original}
If $\sum_{n \ge 0} a_n$ is absolutely convergent, with $a_n$ real or complex, then

$$
\Bigl\lvert \sum_{n=0}^{\infty} a_n \Bigr\rvert \ \le \ \sum_{n=0}^{\infty} \lvert a_n \rvert ,
$$

with equality if and only if there is a constant $\lambda \in \mathbb{C}$ with $\lvert \lambda \rvert = 1$ such that $\lambda a_n = \lvert a_n \rvert$ for every $n$; that is, if and only if all the non-zero terms have the same argument. For real terms this says that the terms are all $\ge 0$ or all $\le 0$.

The bound is the triangle inequality for the partial sums carried to the limit on both sides. It is not printed on either of the pages cited for the previous statement, so it is stated here as the handbook's own.
:::

:::idea[Bound on the sum]{provenance=original}
The inequality is the triangle inequality for each partial sum, kept through the limit because a non-strict inequality survives it. For the equality case, rotate the whole series by the unit number $\lambda$ that makes its sum real and positive. Then $\sum \operatorname{Re}(\lambda a_n)$ and $\sum \lvert a_n\rvert$ have the same value, while the terms of the first never exceed those of the second; a series of non-negative terms with sum zero has every term zero, so the two agree term by term, and a complex number whose real part equals its modulus is non-negative.
:::

:::proof[Bound on the sum]{provenance=original}
Write $s_N = \sum_{n=0}^{N}a_n$, $S = \sum_{n=0}^{\infty}a_n$ — which exists by the statement just proved — and $T = \sum_{n=0}^{\infty}\lvert a_n\rvert$.

**The inequality.** The triangle inequality for finite sums gives $\lvert s_N\rvert \le \sum_{n=0}^{N}\lvert a_n\rvert \le T$, the second step because the partial sums of a series of non-negative terms never exceed its sum. The modulus is continuous, so $\lvert s_N \rvert \to \lvert S\rvert$, and a non-strict inequality is preserved in the limit: $\lvert S \rvert \le T$.

**Equality implies a common argument.** Suppose $\lvert S\rvert = T$.

*The degenerate case.* If $T = 0$, then the partial sums of $\sum\lvert a_n\rvert$ are non-decreasing with limit $0$, so each is both $\ge 0$ and $\le 0$, hence $0$; so every $\lvert a_n\rvert = 0$ and $\lambda = 1$ satisfies $\lambda a_n = \lvert a_n\rvert$ for every $n$.

*The main case.* If $T > 0$ then $S \neq 0$, and we may set $\lambda = \overline{S}/\lvert S\rvert$, so that $\lvert \lambda \rvert = 1$ and $\lambda S = \lvert S\rvert = T$. Multiplying a convergent series by a constant and taking real parts termwise are both limits of the corresponding operations on partial sums, so

$$
\sum_{n=0}^{\infty} \operatorname{Re}(\lambda a_n) = \operatorname{Re}(\lambda S) = T .
$$

Each term satisfies $\operatorname{Re}(\lambda a_n) \le \lvert \lambda a_n\rvert = \lvert a_n\rvert$, so the series $\sum_{n}\bigl(\lvert a_n\rvert - \operatorname{Re}(\lambda a_n)\bigr)$ has non-negative terms, and its sum is $T - T = 0$. By the degenerate case's argument every term vanishes:

$$
\operatorname{Re}(\lambda a_n) = \lvert a_n \rvert = \lvert \lambda a_n \rvert \qquad \text{for every } n .
$$

A complex number $z$ with $\operatorname{Re} z = \lvert z \rvert$ satisfies $(\operatorname{Im} z)^2 = \lvert z\rvert^2 - (\operatorname{Re} z)^2 = 0$, so it is real and equal to its own modulus, hence $\ge 0$. Applied to $z = \lambda a_n$ this gives $\lambda a_n = \lvert \lambda a_n \rvert = \lvert a_n\rvert$ for every $n$, which is the asserted condition.

**A common argument implies equality.** Conversely, if $\lvert \lambda\rvert = 1$ and $\lambda a_n = \lvert a_n\rvert$ for every $n$, then summing gives $\lambda S = T$, so $\lvert S\rvert = \lvert \lambda S\rvert = T$.

**Reading the condition.** $\lambda a_n = \lvert a_n\rvert$ with $\lvert \lambda\rvert = 1$ says $a_n = \overline{\lambda}\,\lvert a_n\rvert$, so every non-zero term has argument $-\arg\lambda$: the non-zero terms share an argument. If the terms are real and some $a_n \neq 0$, then $\lambda = \lvert a_n\rvert/a_n = \pm 1$, and the condition says that all terms are $\ge 0$ (for $\lambda = 1$) or all $\le 0$ (for $\lambda = -1$). $\square$
:::

:::statement[Rearrangement of an absolutely convergent series]{provenance=adapted src="ahlfors-1979:§2.2, Exercise 3, p. 37; arfken-2013:§1.1, p. 14"}
Let $\sum_{n \ge 0} a_n$ be absolutely convergent with sum $S$. Then for every bijection $\sigma$ of $\mathbb{N}_0$ the rearranged series $\sum_{n \ge 0} a_{\sigma(n)}$ is again absolutely convergent and its sum is $S$. So the order of summation is immaterial once absolute convergence is known.
:::

:::idea[Rearrangement of an absolutely convergent series]{provenance=original}
Absolute convergence means that all but finitely many terms together contribute less than $\varepsilon$ in total. Once a partial sum of the rearranged series is long enough to contain all of those finitely many terms, whatever else it contains is drawn from the negligible remainder. So both the original sum and every long enough rearranged partial sum sit within $\varepsilon$ of the same finite sum, and hence within $2\varepsilon$ of each other.
:::

:::proof[Rearrangement of an absolutely convergent series]{provenance=original}
Let $S = \sum_{n\ge0}a_n$, let $T = \sum_{n\ge0}\lvert a_n\rvert$, let $\sigma$ be a bijection of $\mathbb{N}_0$, and let $\varepsilon > 0$.

**A negligible tail.** The partial sums of $\sum\lvert a_n\rvert$ increase to $T$, so there is an $N$ with $\sum_{n > N}\lvert a_n\rvert = T - \sum_{n=0}^{N}\lvert a_n \rvert < \varepsilon$.

**An index after which nothing is missing.** Each of the finitely many integers $0, 1, \dots, N$ has exactly one $\sigma$-preimage, because $\sigma$ is a bijection. Put $M = \max\{\sigma^{-1}(0), \dots, \sigma^{-1}(N)\}$. For every $m \ge M$ the list $\sigma(0), \dots, \sigma(m)$ contains $0, \dots, N$, and its entries are distinct.

**Comparison of partial sums.** For $m \ge M$ the difference
$$
\sum_{j=0}^{m} a_{\sigma(j)} - \sum_{n=0}^{N} a_n
$$
is a sum of finitely many distinct terms $a_n$, all with $n > N$; by the triangle inequality its modulus is at most $\sum_{n>N}\lvert a_n\rvert < \varepsilon$. The original series satisfies the same kind of bound: by the statement proved above, applied to the series $\sum_{n>N}a_n$,
$$
\Bigl\lvert S - \sum_{n=0}^{N}a_n \Bigr\rvert = \Bigl\lvert \sum_{n>N}a_n\Bigr\rvert \le \sum_{n>N}\lvert a_n\rvert < \varepsilon .
$$
Adding the two estimates, $\bigl\lvert \sum_{j\le m} a_{\sigma(j)} - S\bigr\rvert < 2\varepsilon$ for every $m \ge M$. Since $\varepsilon > 0$ was arbitrary, $\sum_{j \ge 0}a_{\sigma(j)}$ converges with sum $S$.

**The rearrangement is again absolutely convergent.** Every partial sum $\sum_{j \le m}\lvert a_{\sigma(j)}\rvert$ consists of finitely many distinct terms of the non-negative series $\sum\lvert a_n\rvert$, so it is at most $T$. Non-negative terms and bounded partial sums give convergence, and the argument just given — applied to $\sum \lvert a_n\rvert$ in place of $\sum a_n$ — shows that the sum is again $T$. $\square$
:::

:::statement[Riemann's rearrangement theorem]{provenance=adapted src="rhb-2006:§4.3.1, p. 124; arfken-2013:§1.1, p. 15"}
Let $\sum_{n \ge 0} a_n$ be a series of **real** terms that converges but is not absolutely convergent. Then:

1. for every $L \in \mathbb{R}$ there is a bijection $\sigma$ of $\mathbb{N}_0$ with $\sum_{n \ge 0} a_{\sigma(n)} = L$;
2. there are bijections for which the partial sums tend to $+\infty$, and others for which they tend to $-\infty$;
3. there are bijections for which the partial sums oscillate and have no limit in $\overline{\mathbb{R}}$.

So for a conditionally convergent series the sum is a property of the ordering and not of the set of terms alone.
:::

:::idea[Riemann's rearrangement theorem]{provenance=original}
Split the terms into the non-negative ones and the negative ones. Neither list can have a finite total: if both did, the series would converge absolutely, and if one did, the other would too. So each list is an unlimited supply of material of one sign, and the terms are individually small because the series converges. Drawing on the two lists in turn, taking from each only as much as is needed to overshoot a target and then to undershoot it, steers the partial sums wherever one pleases: towards a chosen number, to infinity, or back and forth between two levels.
:::

:::proof[Riemann's rearrangement theorem]{provenance=adapted src="arfken-2013:§1.1, Example 1.1.9, pp. 14-15"}
Throughout, $\sum a_n$ converges, so $a_n \to 0$, and $\sum \lvert a_n\rvert$ diverges.

**Lemma: the two signs separately diverge.** Put $a_n^{+} = \max(a_n, 0)$ and $a_n^{-} = \max(-a_n, 0)$, both non-negative, with $a_n = a_n^{+} - a_n^{-}$ and $\lvert a_n\rvert = a_n^{+} + a_n^{-}$. Since $a_n^{+} = a_n + a_n^{-}$ and $\sum a_n$ converges, the series $\sum a_n^{+}$ and $\sum a_n^{-}$ converge or diverge together. They cannot both converge, for then $\sum \lvert a_n \rvert = \sum(a_n^{+} + a_n^{-})$ would converge. So both diverge, and because their terms are non-negative their partial sums tend to $+\infty$.

**The two lists.** List the terms $a_n \ge 0$, in their original order, as $p_1, p_2, \dots$, and the moduli of the terms $a_n < 0$, in their original order, as $q_1, q_2, \dots$. Each list is infinite: if, say, only finitely many terms were negative, $\sum a_n^{-}$ would be a finite sum. Deleting the zero entries changes nothing, so $\sum_k p_k = \sum_n a_n^{+} = +\infty$ and $\sum_k q_k = \sum_n a_n^{-} = +\infty$, while $p_k \to 0$ and $q_k \to 0$ because $a_n \to 0$. Every term of the original series occupies exactly one position in exactly one list, so any prescription that consumes both lists in order, each entry once and all of them eventually, defines a bijection $\sigma$ of $\mathbb{N}_0$, that is, a rearrangement.

**Part 1: an arbitrary real limit $L$.** Build the rearrangement in stages, each of which takes at least one entry from its list and then continues until a target is crossed. Stage 1 ascends: add $p_1, p_2, \dots$ in order until the running total has reached $L$ or more, which happens after finitely many entries because $\sum p_k = +\infty$. Stage 2 descends: add $-q_1, -q_2, \dots$ in order until the total has fallen below $L$, which happens because $\sum q_k = +\infty$. Stage 3 resumes with the next unused $p$, and so on. The stages alternate forever and each uses at least one entry, so both lists are consumed in order and the prescription is a rearrangement.

Let $v_k$ be the total at the end of stage $k$ and $t_k$ the last entry it used. Each stage adds entries of one sign, so the partial sums occurring inside stage $k$ lie between $v_{k-1}$ and $v_k$.

From stage 2 onwards each stage starts on the far side of $L$ from the direction it moves: an ascending stage starts below $L$, because the preceding descending stage ended there, and a descending stage starts at or above $L$. Such a stage therefore ends just after its first crossing of $L$: for an ascending one, $L \le v_k \le L + \lvert t_k\rvert$, since one entry earlier the total was still below $L$; for a descending one, $L - \lvert t_k\rvert \le v_k < L$. So $\lvert v_k - L\rvert \le \lvert t_k\rvert$ for every $k \ge 2$.

As $k$ grows both lists advance without bound, so $\lvert t_k \rvert \to 0$ because $p_k \to 0$ and $q_k \to 0$. Every partial sum occurring in stage $k$, for $k \ge 3$, therefore differs from $L$ by at most $\max(\lvert t_{k-1}\rvert, \lvert t_k\rvert)$, which tends to $0$; the finitely many partial sums of the first two stages are irrelevant to a limit. Hence the rearranged series converges to $L$.

**Part 2: divergence to $\pm\infty$.** For $+\infty$, let stage $k$ take unused entries $p$ in order — at least one — until the total exceeds $k$, and then exactly one unused entry $-q$. Each stage terminates and uses entries of both lists, so this is again a rearrangement. Write $q_{j_k}$ for the single negative entry of stage $k$. The total at the end of stage $k$ exceeds $k - q_{j_k}$, and inside stage $k+1$ the total only grows until that stage's final entry; so every partial sum from the end of stage $k$ onwards is at least $k - \sup_{j \ge j_k}q_j$. Since $q_j \to 0$, this bound tends to $+\infty$ with $k$, and so do the partial sums. Exchanging the roles of the two lists gives $-\infty$.

**Part 3: oscillation.** Alternate two targets: take unused $p$'s — at least one — until the total exceeds $1$, then unused $q$'s until it falls below $0$, and repeat forever. As before this is a rearrangement. The partial sums exceed $1$ infinitely often and fall below $0$ infinitely often, so they have no limit. They are also bounded: an ascending stage starts at or below $0$ and stops within one entry of $1$, and a descending stage starts at most at $1 + P$ and stops within one entry of $0$, so every partial sum lies in $[-Q,\, 1+P]$, where $P = \sup_k p_k$ and $Q = \sup_k q_k$ are finite because both lists tend to $0$. So the partial sums do not tend to $+\infty$ or $-\infty$ either, and have no limit in $\overline{\mathbb{R}}$. $\square$
:::

:::statement[Cauchy product]{provenance=adapted src="rhb-2006:§4.4(iv), p. 131; arfken-2013:§1.1, p. 14"}
Let $\sum_{n \ge 0} a_n$ and $\sum_{n \ge 0} b_n$ be absolutely convergent, with sums $A$ and $B$. Then their Cauchy product $\sum_{n \ge 0} c_n$, $c_n = \sum_{k=0}^n a_k b_{n-k}$, is absolutely convergent and

$$
\sum_{n=0}^{\infty} c_n = A \, B .
$$

The same holds for the terms $a_k b_l$ summed in any other order, since the product series converges absolutely.
:::

:::idea[Cauchy product]{provenance=original}
Think of all the products $a_k b_l$ as a single infinite list. Absolute convergence of the factors bounds the sum of their moduli by $\bigl(\sum\lvert a_k\rvert\bigr)\bigl(\sum\lvert b_l\rvert\bigr)$, so that list is an absolutely convergent series and, by the rearrangement theorem, has a sum independent of the order chosen. Two orders are then read off: along expanding squares, where the partial sums are $A_N B_N$; and along diagonals, where they are the partial sums of the Cauchy product. Both must give the same number.
:::

:::proof[Cauchy product]{provenance=original}
Write $\alpha = \sum_{k \ge 0}\lvert a_k\rvert$ and $\beta = \sum_{l\ge0}\lvert b_l\rvert$, both finite, and $A_N = \sum_{k=0}^{N}a_k$, $B_N = \sum_{l=0}^{N}b_l$.

**Step 1: the products form one absolutely convergent series.** Fix any bijection $j \mapsto (k_j, l_j)$ from $\mathbb{N}_0$ onto $\mathbb{N}_0 \times \mathbb{N}_0$ and consider the series $\sum_{j \ge 0} a_{k_j}b_{l_j}$. Given $J$, let $K$ be the largest of the numbers $k_0, l_0, \dots, k_J, l_J$. The pairs $(k_j, l_j)$ with $j \le J$ are distinct and all lie in the square $\{0,\dots,K\}^2$, so

$$
\sum_{j=0}^{J} \lvert a_{k_j}\rvert\,\lvert b_{l_j}\rvert \ \le \ \Bigl(\sum_{k=0}^{K}\lvert a_k\rvert\Bigr)\Bigl(\sum_{l=0}^{K}\lvert b_l\rvert\Bigr) \ \le \ \alpha\beta ,
$$

the first inequality because every product on the left appears exactly once among the non-negative products obtained by expanding the brackets. Non-negative terms with bounded partial sums converge, so $\sum_j a_{k_j}b_{l_j}$ is absolutely convergent; call its sum $T$. Two enumerations of $\mathbb{N}_0\times\mathbb{N}_0$ differ by a bijection of $\mathbb{N}_0$, so by the rearrangement theorem $T$ does not depend on which one was chosen.

**Step 2: enumerate by squares to get $AB$.** List first the pair $(0,0)$, then the pairs with $\max(k,l) = 1$, then those with $\max(k,l) = 2$, and so on, in any fixed order inside each block. The partial sum at the end of the block $\max(k,l) = N$ runs over all pairs in $\{0,\dots,N\}^2$, so it equals $A_N B_N$. These are partial sums of a convergent series with sum $T$, so $A_N B_N \to T$; but $A_N \to A$ and $B_N \to B$, so $A_N B_N \to AB$. Hence $T = AB$.

**Step 3: enumerate by diagonals to get the Cauchy product.** List instead the pairs with $k + l = 0$, then those with $k+l = 1$, and so on. The partial sum at the end of the block $k+l = N$ runs over all pairs with $k + l \le N$, so it equals $\sum_{n=0}^{N}c_n$. Again these are partial sums of a series with sum $T$, so $\sum_{n=0}^{N}c_n \to T = AB$.

**Step 4: the product series converges absolutely.** By the triangle inequality $\lvert c_n\rvert \le \sum_{k+l=n}\lvert a_k\rvert\lvert b_l\rvert$, and summing over $n \le N$ gives $\sum_{n=0}^{N}\lvert c_n\rvert \le \alpha\beta$ by the bound of Step 1. Non-negative terms with bounded partial sums converge.

So $\sum_n c_n$ is absolutely convergent with sum $AB$, and Step 1 is the final sentence of the statement: the products $a_kb_l$ summed in any order give the same $T = AB$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="arfken-2013:§1.1, Examples 1.1.9 and 1.1.10, pp. 14-15; rhb-2006:§4.3.1, p. 124; ahlfors-1979:§2.2, Exercise 6, p. 37"}
- **Both rearrangement results need their hypothesis, and the two are complementary.** The alternating harmonic series $\sum_{n \ge 1} (-1)^{n-1}/n$ converges by the Leibniz test and diverges in absolute value; Arfken exhibits a reordering of it (taking positive terms until the partial sum reaches $3/2$, then negative terms until it falls below, and repeating) whose partial sums converge to $3/2$ instead of to $\ln 2$ (p. 15).
- **The Cauchy product needs more than convergence of the factors.** Take $a_n = (-1)^n/\sqrt{n+1}$, so that $\sum_{n \ge 0} a_n$ converges conditionally. Its Cauchy product with itself has
  $$
  c_n = (-1)^n \sum_{k=0}^{n} \frac{1}{\sqrt{(k+1)(n-k+1)}} ,
  $$
  and the sum on the right is a Riemann sum for $\int_0^1 \dfrac{dt}{\sqrt{t(1-t)}} = \pi$, so $\lvert c_n \rvert \to \pi$. The terms do not tend to $0$, so the product series diverges, as Arfken's Example 1.1.10 (p. 15) observes.
- **Only one factor need be absolutely convergent.** If $\sum a_n$ converges absolutely to $A$ and $\sum b_n$ converges to $B$, the Cauchy product still converges to $AB$; this is Mertens' theorem, and Ahlfors sets it as Exercise 6 (p. 37), asking for a proof arranged so that the second factor need only converge. The conclusion is then weaker: the product series converges to $AB$ but need not converge absolutely.
- **The restriction to real terms in Riemann's theorem is ours, not the books'.** Both cited sources state the theorem for any conditionally convergent series and attach no condition to the terms. Arfken draws it as a moral from the rearranged alternating harmonic series: a suitable reordering can send such a series to any value one likes, or make it diverge (p. 15). Riley, Hobson and Bence list the three possible behaviours — an arbitrary limit, divergence, finite or infinite oscillation — two sentences after saying that the terms of a series may be complex (p. 124). Read as printed over $\mathbb{C}$, that is false: if $a_n = i\,(-1)^{n}/(n+1)$, the series converges and is not absolutely convergent, yet every term is purely imaginary, so every convergent rearrangement has a purely imaginary sum and no real $L \neq 0$ is attainable. Part 1 above is therefore restricted to real terms, which is where both books' examples live; the two printed statements are logged in `verification/discrepancies.md`.
- **What replaces part 1 for complex terms.** A theorem of Levy and Steinitz: the sums attainable by convergent rearrangements of a convergent complex series form a translate of a linear subspace of $\mathbb{C}$. A single point is exactly the absolutely convergent case, since in finite dimensions unconditional convergence forces absolute convergence; so for a series that converges but not absolutely the set of attainable sums is a line or the whole of $\mathbb{C}$. Over $\mathbb{R}$ the only proper subspace is $\{0\}$, and the theorem collapses to Riemann's.
- **Terminology.** "Conditionally convergent" here means convergent but not absolutely convergent, following Arfken (p. 13) and Riley, Hobson and Bence (p. 124). Some texts use the phrase for any convergent series whose convergence depends on the arrangement of its terms, which for real series is the same class.
:::

:::example[Rearranging a conditionally convergent series halves it]{provenance=original}
The alternating harmonic series $\sum_{n\ge1}(-1)^{n-1}/n$ converges by the Leibniz test, and $\sum 1/n$ diverges, so it is conditionally convergent and the rearrangement theorem does not apply to it. Call its sum $\Lambda$. Rearrange it by taking one positive term and then two negative ones, over and over:

$$
1 - \frac12 - \frac14 \; + \; \frac13 - \frac16 - \frac18 \; + \; \frac15 - \frac{1}{10} - \frac{1}{12} \; + \cdots
$$

Every odd reciprocal appears once, in its original order, and every even reciprocal appears once with a minus sign, in its original order, so this is a genuine rearrangement.

**Step 1: the $k$-th group.** It is
$$
g_k = \frac{1}{2k-1} - \frac{1}{4k-2} - \frac{1}{4k} .
$$
Since $\dfrac{1}{2k-1} - \dfrac{1}{4k-2} = \dfrac{1}{2(2k-1)} = \dfrac{1}{4k-2}$, this simplifies to
$$
g_k = \frac{1}{4k-2} - \frac{1}{4k} = \frac12\left(\frac{1}{2k-1} - \frac{1}{2k}\right) .
$$

**Step 2: sum the groups.** The bracket is a consecutive pair of terms of the original series, so adding $g_1, \dots, g_K$ gives exactly half the $2K$-th partial sum of the original series:
$$
\sum_{k=1}^{K} g_k = \frac12 \sum_{n=1}^{2K} \frac{(-1)^{n-1}}{n} \ \longrightarrow \ \frac{\Lambda}{2} .
$$

**Step 3: fill in the partial sums between group boundaries.** A partial sum of the rearranged series differs from the nearest group boundary by at most two of its terms, each of modulus at most $1/(4k-2) \to 0$, so the whole rearranged series converges to $\Lambda/2$.

**Check.** With $\Lambda = \ln 2 = 0.6931472$ (quoted only as a reference value), the rearranged sum should be $0.3465736$. Adding the first $200\,000$ groups gives $0.3465730$, and the remaining tail is about $1/(8K) = 6\times10^{-7}$, which accounts for the difference.

The same terms, reordered, sum to half as much. Riemann's theorem says that $\Lambda/2$ is nothing special: some rearrangement of these terms converges to each real number.
:::

:::example[A Cauchy product evaluated]{provenance=original}
Take $a_n = 2^{-n}$ and $b_n = 3^{-n}$ for $n \ge 0$. Both series have positive terms and converge, hence converge absolutely, with
$$
A = \sum_{n\ge0}2^{-n} = 2 , \qquad B = \sum_{n\ge0}3^{-n} = \frac32 .
$$

**The product terms.** Summing a finite geometric series with ratio $3/2$,
$$
c_n = \sum_{k=0}^{n} \frac{1}{2^{k}}\,\frac{1}{3^{\,n-k}} = \frac{1}{3^{n}}\sum_{k=0}^{n}\Bigl(\frac32\Bigr)^{k} = \frac{1}{3^{n}} \cdot \frac{(3/2)^{n+1}-1}{1/2} = \frac{3}{2^{n}} - \frac{2}{3^{n}} .
$$
The first values are $c_0 = 1$, $c_1 = 5/6$, $c_2 = 19/36$, $c_3 = 65/216$, which agree with the definition computed directly.

**The sum.** Both geometric series again,
$$
\sum_{n\ge0}c_n = 3\sum_{n\ge0}2^{-n} - 2\sum_{n\ge0}3^{-n} = 3\cdot 2 - 2\cdot\frac32 = 3 = A\,B ,
$$
as the theorem predicts, and the convergence is absolute because $c_n > 0$ (indeed $3/2^n > 2/3^n$ for every $n \ge 0$).
:::

:::example[When the triangle-inequality bound is attained]{provenance=original}
Let $a_n = e^{i\pi/4}2^{-n}$ for $n \ge 0$. Then $\sum_{n\ge0}\lvert a_n\rvert = \sum 2^{-n} = 2$ and $\sum_{n\ge0}a_n = 2e^{i\pi/4}$, whose modulus is also $2$: the bound is an equality. The equality condition is satisfied with $\lambda = e^{-i\pi/4}$, since $\lambda a_n = 2^{-n} = \lvert a_n\rvert$ for every $n$ — all the terms share the argument $\pi/4$.

Reverse the sign of one term, say replace $a_1$ by $-a_1$. The series of moduli is unchanged, so the right-hand side is still $2$, while the sum loses $2a_1 = e^{i\pi/4}$ and becomes $e^{i\pi/4}$, of modulus $1$. Now no unit $\lambda$ can satisfy $\lambda a_n = \lvert a_n\rvert$ for both $n = 0$ and $n = 1$, because those two terms have arguments differing by $\pi$; and indeed $1 < 2$ strictly.
:::

:::application[Lattice sums in a crystal: the order of summation is a physical choice]{provenance=original}
The electrostatic energy of an ion in a cubic ionic crystal such as sodium chloride is a sum over all other sites of the lattice. Measuring distances in units of the nearest-neighbour spacing $d$ and putting the reference ion at the origin, the Coulomb energy per ion is $-M e^2/(4\pi\varepsilon_0 d)$ with

$$
M = -\sum_{(i,j,k) \neq (0,0,0)} \frac{(-1)^{\,i+j+k}}{\sqrt{i^2+j^2+k^2}} ,
$$

the **Madelung constant**, the alternating sign being the alternation of cation and anion along each axis.

**This series is not absolutely convergent.** The number of lattice sites inside the cube of half-side $N$ is $(2N+1)^3 - 1$, and their typical distance from the origin is of order $N$, so the sum of the moduli over that cube grows like a constant times $N^2$: numerically it is $286$ at $N = 5$, $3999$ at $N = 20$ and $8854$ at $N = 30$, close to $9.8\,N^2$. The series of moduli therefore diverges, and by the theorems of this unit nothing protects the sum from the order in which it is taken.

**And the order matters in practice.** Summing over expanding cubes without further care gives the partial values $1.680$, $1.701$, $1.713$, $1.719$ at $N = 8, 12, 16, 20$: still more than one per cent from the answer after $69\,000$ sites, because each cube's surface carries a net charge whose potential falls off only slowly. Evjen's remedy is to weight a site on the surface of the cube by the fraction of its charge lying inside, which makes every grouping charge-neutral; the same sites then give $1.747500$ at $N=5$ and $1.7475652$ at $N = 16$, agreeing with the accepted value $M = 1.747565$ to six decimal places. Ewald's method achieves the same end differently, by splitting each point charge into a screened short-range part summed in real space and a smooth part summed in reciprocal space.

The mathematics is exactly Riemann's theorem seen from the laboratory: a conditionally convergent lattice sum has no value until a summation scheme is named, and the schemes that work are those whose groupings are neutral, so that the terms being gathered decay fast enough to make the gathered series absolutely convergent. Every molecular-dynamics code that computes Coulomb energies under periodic boundary conditions carries an Ewald sum or a descendant of it for this reason.
:::
