---
id: found.series-convergence-tests
title: Convergence tests for series
kind: method
level: core
summary: Partial sums, the vanishing-terms and Cauchy criteria, and the comparison, ratio, root, integral and alternating-series tests, each with the hypotheses it needs and the cases in which it decides nothing.
prereqs: [found.limits-of-sequences]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.1, comparison test (p. 3), Cauchy root test and d'Alembert ratio test (p. 4), Cauchy-Maclaurin integral test with the bounds (1.7) and (1.9) (pp. 5-6), Leibniz criterion for alternating series (pp. 11-12)"
    pages: "3-6, 11-12"
    role: statements of the five tests and the integral bounds on a tail; proof routes for the comparison, ratio, root, integral and Leibniz tests
  - work: rhb-2006
    loc: "§4.3.2, preliminary test, comparison test, d'Alembert ratio test (pp. 125-126), integral test and Cauchy root test (pp. 128-129), the p-series (pp. 129-130); §4.3.3 alternating series test (p. 130)"
    pages: "125-130"
    role: tail form of the comparison test, limit forms of the ratio and root tests, convergence of the p-series; the pairing argument for the alternating-series test and the integral-test route to the p-series
  - work: ahlfors-1979
    loc: "§2.2 Series, p. 35"
    pages: "35"
    role: Cauchy criterion for a series and the vanishing of its terms, with the route of their proof from the criterion for sequences
---

:::note{provenance=original}
**What it means.** Every test here is a comparison with a series whose behaviour is already known: the geometric series for the ratio and root tests, an integral for the integral test, and an explicit comparand for the comparison test. So the practical question is not "which test is strongest" but "which known series does mine resemble": geometric decay calls for the ratio or root test, power-law decay for comparison with a $p$-series, and anything on the boundary between them for the integral test.
:::

:::definition[Series, partial sums, tail]{provenance=adapted src="ahlfors-1979:§2.2, p. 35; arfken-2013:§1.1, p. 3"}
Let $(u_n)_{n \ge 1}$ be real or complex numbers, and write

$$
s_N = \sum_{n=1}^{N} u_n , \qquad N \in \mathbb{N} ,
$$

for the **partial sums**. The symbol $\sum_{n=1}^{\infty} u_n$ denotes the **series**, and every question about it is a question about the sequence $(s_N)$. The series **converges** to $S$ when $s_N \to S$, and $S$ is then its **sum**; otherwise the series **diverges**. For a convergent series the **tail** or **remainder** after $N$ terms is $R_N = S - s_N = \sum_{n > N} u_n$. Deleting, inserting or changing finitely many terms changes $S$ but not whether the series converges, so every test below may be applied from any index onwards.
:::

:::statement[Two criteria that need no extra hypotheses]{provenance=adapted src="ahlfors-1979:§2.2, p. 35; rhb-2006:§4.3.2, preliminary test, p. 125"}
Let $\sum_{n \ge 1} u_n$ be a series of real or complex terms.

1. **Cauchy criterion.** Convergence holds exactly when every block of consecutive terms far enough out is small: each $\varepsilon > 0$ admits an index $N$ with
   $$
   \Bigl\lvert \sum_{n=m+1}^{m+p} u_n \Bigr\rvert < \varepsilon \qquad \text{whenever } m \ge N \text{ and } p \ge 1 .
   $$
2. **Vanishing terms.** If the series converges then $u_n \to 0$. The converse is false, so $u_n \to 0$ is necessary and not sufficient; if $u_n \not\to 0$ the series diverges.
:::

:::idea[Two criteria that need no extra hypotheses]{provenance=original}
Both are the corresponding facts about the sequence $(s_N)$ in disguise. The Cauchy condition on partial sums is a condition on their differences, and a difference of two partial sums is exactly a block of consecutive terms. Taking the shortest block, of one term, turns that condition into the vanishing of the terms.
:::

:::proof[Two criteria that need no extra hypotheses]{provenance=adapted src="ahlfors-1979:§2.2, p. 35"}
1. **Cauchy criterion.** By definition the series converges exactly when the sequence $(s_N)$ converges, and by the :ref[Cauchy criterion for numerical sequences]{to=found.limits-of-sequences} that happens exactly when each $\varepsilon > 0$ has an index $K$ with $\lvert s_j - s_i \rvert < \varepsilon$ for all $i, j > K$. Every such pair with $i < j$ can be written as $i = m$, $j = m + p$ with $m \ge N := K+1$ and $p \ge 1$, and conversely; and
   $$
   s_{m+p} - s_m = \sum_{n=m+1}^{m+p} u_n .
   $$
   Pairs with $i = j$ contribute nothing and pairs with $i > j$ give the same modulus. So the displayed condition of part 1 is the Cauchy condition on $(s_N)$, which completes the equivalence.

2. **Vanishing terms.** Take $p = 1$ in part 1: convergence gives an $N$ with $\lvert u_{m+1}\rvert < \varepsilon$ for every $m \ge N$, which says $u_n \to 0$. (Equivalently, $u_n = s_n - s_{n-1} \to S - S = 0$.) The converse fails: the $p$-series with $p = 1$ has $u_n = 1/n \to 0$ and diverges, as the integral test proved below shows. Contrapositively, $u_n \not\to 0$ forces divergence. $\square$
:::

:::statement[Non-negative terms: bounded partial sums]{provenance=original}
If $u_n \ge 0$ for all $n$, the partial sums are non-decreasing, so by :ref[monotone convergence]{to=found.limits-of-sequences} the series converges if and only if its partial sums are bounded above, and then $\sum_{n\ge1} u_n = \sup_N s_N$. This is the fact behind every comparison below, and it is why a series of non-negative terms either converges or has $s_N \to +\infty$ and can never oscillate.
:::

:::idea[Non-negative terms]{provenance=original}
Adding a non-negative number cannot decrease a partial sum, so the partial sums are a monotone sequence, and for monotone sequences boundedness and convergence are the same thing.
:::

:::proof[Non-negative terms]{provenance=original}
Since $s_{N+1} - s_N = u_{N+1} \ge 0$ for every $N$, the sequence $(s_N)$ is non-decreasing. By :ref[monotone convergence]{to=found.limits-of-sequences} it converges if its terms are bounded above, with limit $\sup_N s_N$, and otherwise $s_N \to +\infty$. Convergence of the series is convergence of $(s_N)$, so the two conditions match, and the sum is $\sup_N s_N$.

Only these two behaviours are available: a non-decreasing sequence that is bounded above converges and one that is not tends to $+\infty$, so the partial sums of a series of non-negative terms cannot oscillate. $\square$
:::

:::statement[The five tests]{provenance=adapted src="arfken-2013:§1.1, pp. 3-6 and pp. 11-12; rhb-2006:§4.3.2-4.3.3, pp. 125-130"}
In each part, $N$ denotes an index from which the stated condition holds; nothing is assumed about the finitely many earlier terms.

1. **Comparison test.** Suppose $0 \le u_n \le v_n$ for all $n \ge N$. If $\sum v_n$ converges then $\sum u_n$ converges. Suppose instead $0 \le v_n \le u_n$ for all $n \ge N$. If $\sum v_n$ diverges then $\sum u_n$ diverges.

2. **Ratio test (d'Alembert).** Suppose $u_n > 0$ for all $n \ge N$. If there is a constant $r < 1$, independent of $n$, with $u_{n+1}/u_n \le r$ for all $n \ge N$, then $\sum u_n$ converges. If $u_{n+1}/u_n \ge 1$ for all $n \ge N$, then $\sum u_n$ diverges. In limit form, if $\rho = \lim_{n\to\infty} u_{n+1}/u_n$ exists, then $\sum u_n$ converges for $\rho < 1$, diverges for $\rho > 1$, and the test decides nothing for $\rho = 1$.

3. **Root test (Cauchy).** Suppose $u_n \ge 0$ for all $n \ge N$. If there is a constant $r < 1$, independent of $n$, with $u_n^{1/n} \le r$ for all $n \ge N$, then $\sum u_n$ converges. If $u_n^{1/n} \ge 1$ for all $n \ge N$, then $\sum u_n$ diverges. In limit form, if $\rho = \lim_{n\to\infty} u_n^{1/n}$ exists, then $\sum u_n$ converges for $\rho < 1$, diverges for $\rho > 1$, and the test decides nothing for $\rho = 1$.

4. **Integral test (Cauchy-Maclaurin).** Let $f$ be continuous, non-negative and non-increasing on $[1, \infty)$ and let $u_n = f(n)$. Then $\sum_{n \ge 1} u_n$ converges if and only if $\int_1^{\infty} f(x)\,dx$ is finite, and in that case, for every $N \ge 0$,
   $$
   \int_{N+1}^{\infty} f(x)\,dx \ \le \ \sum_{n > N} u_n \ \le \ \int_{N+1}^{\infty} f(x)\,dx + u_{N+1} .
   $$

5. **Alternating-series test (Leibniz).** Let $u_n \ge 0$ with $u_n \to 0$, and suppose $u_{n+1} \le u_n$ for all $n \ge N$. Then $\sum_{n \ge 1} (-1)^{n+1} u_n$ converges, its sum $S$ lies between any two consecutive partial sums $s_m$ and $s_{m+1}$ with $m \ge N$, and consequently
   $$
   \lvert S - s_m \rvert \le u_{m+1} ,
   $$
   with $S - s_m$ having the sign of the first omitted term $(-1)^{m}u_{m+1}$.

**Reference series.** The geometric series $\sum_{n \ge 0} r^n$ converges exactly for $\lvert r \rvert < 1$, and the $p$-series $\sum_{n \ge 1} n^{-p}$ converges exactly for $p > 1$; these are the standard comparands.
:::

:::idea[The five tests]{provenance=original}
Tests 1 to 4 all end at the same place: a series of non-negative terms whose partial sums have been bounded above, which converges by the statement just proved. What differs is the bound used — the comparand itself, a geometric series in the ratio and root tests, an integral in the integral test. The divergence halves are cheaper still: each either exhibits terms that do not tend to $0$, or pushes the partial sums past every level. The Leibniz test is of a different kind: there the partial sums of even and of odd index form two monotone sequences that close in on each other, and the gap between them is a single term.
:::

:::proof[Comparison test]{provenance=adapted src="arfken-2013:§1.1, p. 3; rhb-2006:§4.3.2, p. 125"}
Assume $0 \le u_n \le v_n$ for $n \ge N$ and that $\sum v_n$ converges. All terms $v_n$ with $n \ge N$ are non-negative, being at least the corresponding $u_n$, so the tail $V = \sum_{n \ge N} v_n$ is a finite number that dominates each of its own partial sums. Hence for every $M \ge N$

$$
\sum_{n=N}^{M} u_n \ \le \ \sum_{n=N}^{M} v_n \ \le \ V ,
$$

term by term in the first inequality. The partial sums of $\sum_{n \ge N} u_n$ are therefore bounded above, and its terms are non-negative, so it converges by the statement above. Restoring the finitely many terms $u_1, \dots, u_{N-1}$ changes the sum but not the convergence.

For the second half, suppose $0 \le v_n \le u_n$ for $n \ge N$ and that $\sum v_n$ diverges. If $\sum u_n$ converged, the first half — applied with the roles of the two series exchanged — would make $\sum v_n$ converge, a contradiction. So $\sum u_n$ diverges. $\square$
:::

:::proof[Ratio and root tests]{provenance=adapted src="arfken-2013:§1.1, p. 4; rhb-2006:§4.3.2, p. 126"}
Both tests compare with a geometric series, which is why both are silent when the decay is slower than geometric.

**Root test, convergence.** Raising $u_n^{1/n} \le r$ to the $n$-th power, which preserves the inequality between non-negative numbers, gives $u_n \le r^n$ for $n \ge N$. With $0 \le r < 1$ the series $\sum_n r^n$ converges, so the comparison test applies.

**Root test, divergence.** If $u_n^{1/n} \ge 1$ for $n \ge N$ then $u_n \ge 1$ for those $n$, so $u_n \not\to 0$ and the vanishing-terms criterion gives divergence.

**Ratio test, convergence.** The hypothesis $u_{n+1} \le r\, u_n$ for $n \ge N$, iterated $k$ times, gives $u_{N+k} \le u_N r^k$; the hypothesis $u_n > 0$ is what makes the ratios meaningful and the induction legitimate. Since $\sum_k u_N r^k = u_N/(1-r)$ converges for $0 \le r < 1$, the comparison test again gives convergence.

**Ratio test, divergence.** If $u_{n+1}/u_n \ge 1$ for $n \ge N$ then $u_n \ge u_N > 0$ for all $n \ge N$, so the terms cannot tend to $0$.

**Limit forms.** Suppose $\rho = \lim_n u_{n+1}/u_n$ exists and $\rho < 1$. Put $r = (1+\rho)/2$, so that $\rho < r < 1$; by the definition of the limit, applied with $\varepsilon = r - \rho$, there is an $N$ with $u_{n+1}/u_n < r$ for all $n \ge N$, and the convergent half applies with this constant $r$. If $\rho > 1$, the same definition with $\varepsilon = \rho - 1$ gives an $N$ with $u_{n+1}/u_n > 1$ for $n \ge N$, and the divergent half applies. The root test is identical with $u_n^{1/n}$ in place of $u_{n+1}/u_n$. The case $\rho = 1$ is left undecided, and the remark below shows that nothing better is possible. $\square$
:::

:::proof[Integral test and its tail bound]{provenance=adapted src="arfken-2013:§1.1, pp. 5-6, Eqs. (1.7) and (1.9)"}
**One interval at a time.** Fix an integer $n \ge 1$. For $x \in [n, n+1]$ the hypothesis that $f$ is non-increasing gives $f(n+1) \le f(x) \le f(n)$, and integrating these constants and $f$ over an interval of length $1$ gives

$$
u_{n+1} \ \le \ \int_n^{n+1} f(x)\,dx \ \le \ u_n ,
$$

the integral existing because $f$ is continuous.

**Summing.** Let $N \ge 0$ and $M > N$ be integers. Adding the last display over $n = N+1, \dots, M$ and using additivity of the integral,

$$
\sum_{n=N+2}^{M+1} u_n \ \le \ \int_{N+1}^{M+1} f(x)\,dx \ \le \ \sum_{n=N+1}^{M} u_n .
$$

**The equivalence.** Because $f \ge 0$, the numbers $I_M = \int_1^{M} f$ form a non-decreasing sequence, so $\int_1^{\infty} f = \lim_M I_M$ exists in $[0, +\infty]$ by monotone convergence. Take $N = 0$ above. If $\int_1^{\infty} f$ is finite, then $\sum_{n=2}^{M+1} u_n \le \int_1^{M+1} f \le \int_1^{\infty} f$ for every $M$: the partial sums are bounded, the terms are non-negative since $f \ge 0$, and the series converges. If $\int_1^{\infty} f = +\infty$, then $\sum_{n=1}^{M} u_n \ge \int_1^{M+1} f \to +\infty$ and the series diverges. The two cases are exclusive and exhaustive, which is the stated equivalence.

**The tail bound.** Assume convergence and let $M \to \infty$ in the summed display, at fixed $N \ge 0$; all three quantities increase to their limits, so

$$
\sum_{n > N+1} u_n \ \le \ \int_{N+1}^{\infty} f(x)\,dx \ \le \ \sum_{n > N} u_n .
$$

The right-hand inequality is the lower bound asserted in the statement. Adding $u_{N+1}$ to the left-hand one and using $\sum_{n>N} u_n = u_{N+1} + \sum_{n > N+1} u_n$ gives the upper bound. $\square$
:::

:::proof[Alternating-series test]{provenance=adapted src="arfken-2013:§1.1, pp. 11-12; rhb-2006:§4.3.3, p. 130"}
Write $s_m = \sum_{n=1}^{m} (-1)^{n+1} u_n$ and let $m \ge N$, so that the monotonicity hypothesis is available from index $m+1$ on.

**One step.** $s_{m+1} - s_m = (-1)^{m+2} u_{m+1} = (-1)^m u_{m+1}$, which is $\ge 0$ for even $m$ and $\le 0$ for odd $m$.

**Two steps.** $s_{m+2} - s_m = (-1)^{m}\bigl(u_{m+1} - u_{m+2}\bigr)$, and $u_{m+1} \ge u_{m+2}$ by monotonicity, so this is $\ge 0$ for even $m$ and $\le 0$ for odd $m$. Hence, from index $N$ onwards, the partial sums of even index form a non-decreasing sequence and those of odd index a non-increasing one.

**The two families interleave.** Let $m \ge N$ be even and $m' \ge N$ be odd, and pick an even $l \ge \max(m, m')$. Then $s_m \le s_l$ (even family, non-decreasing), $s_l \le s_{l+1}$ (one step from an even index), and $s_{l+1} \le s_{m'}$ (odd family, non-increasing, and $l + 1 > m'$). So every even-index partial sum is at most every odd-index one.

**Both families converge, to the same number.** The even family is non-decreasing and bounded above (by any odd-index sum), and the odd family is non-increasing and bounded below, so by monotone convergence both converge, say to $S_{\mathrm{e}} \le S_{\mathrm{o}}$. Along even $m$, $s_{m+1} - s_m = u_{m+1} \to 0$ by the hypothesis $u_n \to 0$, and the left-hand side tends to $S_{\mathrm{o}} - S_{\mathrm{e}}$; hence $S_{\mathrm{e}} = S_{\mathrm{o}} =: S$. Given $\varepsilon > 0$, each family is eventually within $\varepsilon$ of $S$, and the larger of the two thresholds serves all indices, so $s_m \to S$ and the series converges with sum $S$.

**Where $S$ sits.** For even $m \ge N$ the even family increases to $S$ and the odd family decreases to $S$, so $s_m \le S \le s_{m+1}$; for odd $m \ge N$ the same reading gives $s_{m+1} \le S \le s_m$. Either way $S$ lies between the two consecutive partial sums, whence

$$
\lvert S - s_m \rvert \ \le \ \lvert s_{m+1} - s_m \rvert \ = \ u_{m+1} ,
$$

and $S - s_m$ has the sign of $s_{m+1} - s_m = (-1)^m u_{m+1}$, which is the first omitted term. $\square$
:::

:::proof[The reference series]{provenance=adapted src="arfken-2013:§1.1, p. 3; rhb-2006:§4.3.2, pp. 128-129"}
**Geometric series.** For $r \neq 1$, multiplying $s_N = \sum_{n=0}^{N} r^n$ by $1 - r$ cancels all but two terms and gives $s_N = (1 - r^{N+1})/(1-r)$. If $\lvert r \rvert < 1$, write $\lvert r\rvert = 1/(1+h)$ with $h > 0$; then $(1+h)^{N+1} \ge 1 + (N+1)h \to \infty$, so $\lvert r \rvert^{N+1} \to 0$ and $s_N \to 1/(1-r)$. If $\lvert r \rvert \ge 1$ then $\lvert r^n \rvert \ge 1$ for every $n$, the terms do not tend to $0$, and the series diverges (this covers $r = 1$, where the partial sums are $N+1$).

**The $p$-series.** For $p \le 0$ we have $n^{-p} \ge 1$, so the terms do not vanish and the series diverges. For $p > 0$ the function $f(x) = x^{-p}$ is continuous, positive and non-increasing on $[1,\infty)$ with $f(n) = n^{-p}$, so the integral test applies to it:

$$
\int_1^{M} x^{-p}\,dx = \frac{M^{1-p} - 1}{1-p} \quad (p \neq 1), \qquad \int_1^{M} x^{-1}\,dx = \ln M .
$$

As $M \to \infty$ the first tends to $1/(p-1)$ when $p > 1$ and to $+\infty$ when $0 < p < 1$, and the second to $+\infty$. So the integral is finite exactly for $p > 1$, and so is the series. $\square$
:::

:::method[Deciding whether a series converges]{provenance=original}
1. **Check the terms.** If $u_n \not\to 0$, stop: the series diverges. This catches $\sum n/(n+1)$ and $\sum (-1)^n$ at once.
2. **Fix the sign.** If the terms have one sign from some index on, work with $\lvert u_n \rvert$ and go to step 3. If the signs alternate strictly, go to step 6. If the signs change irregularly, test $\sum \lvert u_n \rvert$ by steps 3-5: convergence there settles the question (see :ref[Absolute and conditional convergence]{to=found.absolute-convergence}), and divergence there does not.
3. **Compare.** Find the size of $u_n$ for large $n$ and compare with a geometric or $p$-series: if $u_n \le C n^{-p}$ with $p > 1$ for large $n$, the series converges; if $u_n \ge c/n$ with $c > 0$ for large $n$, it diverges. This is decisive whenever $u_n$ behaves like a power of $n$ times a bounded factor.
4. **Ratio or root.** If $u_n$ contains factorials or products, form $u_{n+1}/u_n$; if it contains an $n$-th power, form $u_n^{1/n}$. A limit $\rho < 1$ gives convergence and $\rho > 1$ divergence. These tests work by hidden comparison with a geometric series, so they are decisive exactly when the terms decay geometrically.
5. **Integrate.** If $u_n = f(n)$ for an $f$ that is continuous, non-negative and non-increasing on $[1,\infty)$, use the integral test. It settles the borderline cases that step 4 cannot, such as $\sum 1/(n \ln n)$, and its two-sided bound also gives a numerical estimate of the tail.
6. **Alternating terms.** For $\sum (-1)^{n+1} u_n$ with $u_n \ge 0$, check both Leibniz hypotheses: $u_n \to 0$ and $u_n$ eventually non-increasing. The error bound $\lvert S - s_m \rvert \le u_{m+1}$ comes free.
7. **If a test fails, nothing follows.** $\rho = 1$ in step 4, or a failed comparison, says only that this test is silent; return to step 3 with a sharper comparand, or to step 5.
:::

:::remark[Where the hypotheses are used, and sharper forms]{provenance=original}
- **Non-negativity in tests 1-4.** All four rest on bounded monotone partial sums, which needs the terms to have one sign. Applied to a series with mixed signs, they test $\sum \lvert u_n \rvert$ instead, which is a strictly stronger property.
- **The ratio test needs a constant $r < 1$, not just $u_{n+1}/u_n < 1$.** For the harmonic series $u_{n+1}/u_n = n/(n+1) < 1$ for every $n$, yet no fixed $r < 1$ dominates these ratios and the series diverges; the limit form gives $\rho = 1$, which decides nothing.
- **$\rho = 1$ is genuinely undecided.** $\sum n^{-2}$ converges and $\sum n^{-1}$ diverges, and both have $\rho = 1$ in the ratio and root tests.
- **Monotonicity in the integral test.** It is what makes $u_{n+1} \le \int_n^{n+1} f \le u_n$ hold, which is where the two-sided bound comes from. Without it, $f(n) = u_n$ constrains $f$ only at the integers and the integral can be made to converge or diverge at will.
- **Monotonicity in the Leibniz test cannot be dropped**, even though $u_n \to 0$: take $u_n = 1/n$ for odd $n$ and $u_n = 1/n^2$ for even $n$. Then $u_n \ge 0$ and $u_n \to 0$, but $\sum_{n\ge1} (-1)^{n+1} u_n = \sum_{\text{odd } n} 1/n - \sum_{\text{even } n} 1/n^2$ has partial sums tending to $+\infty$, because the first sum diverges and the second converges.
- **Sharper divergence halves.** The divergence conditions in tests 2 and 3 can be weakened, at the cost of departing from the form in which Arfken states them (pp. 4-5): if $u_n^{1/n} \ge 1$ for infinitely many $n$, then $u_n \ge 1$ infinitely often, so $u_n \not\to 0$ and the series already diverges. Likewise, the tests remain valid with $\limsup$ in place of $\lim$ on the convergent side and $\liminf$ on the divergent side, because the condition "$u_{n+1}/u_n \le r < 1$ for all large $n$" is exactly $\limsup_n u_{n+1}/u_n < 1$.
- **Comparison from an index onwards.** Arfken states the comparison test with $0 \le u_n \le a_n$ for all $n$ (p. 3); Riley, Hobson and Bence state it for $n$ greater than some fixed $N$ (p. 125). The second is the more general form and is the one stated above; the two agree because finitely many terms cannot affect convergence.
:::

:::example[The ratio test, and then the exact sum]{provenance=original}
Decide whether $\displaystyle\sum_{n \ge 1} \frac{n^3}{3^n}$ converges, and if so sum it.

**Step 1: convergence.** With $u_n = n^3 3^{-n} > 0$,

$$
\frac{u_{n+1}}{u_n} = \frac{(n+1)^3}{3\,n^3} = \frac{1}{3}\Bigl(1 + \frac1n\Bigr)^{3} ,
$$

which decreases as $n$ grows. At $n = 3$ its value is $\tfrac13(4/3)^3 = 64/81$, so

$$
\frac{u_{n+1}}{u_n} \ \le \ r = \frac{64}{81} < 1 \qquad \text{for all } n \ge 3 ,
$$

a constant bound as the ratio test requires, and the series converges. (The limit form gives $\rho = 1/3$, the same conclusion.) Note how the test is used. The ratio exceeds $1$ at $n = 1$ and $n = 2$ — its values there are $8/3$ and $9/8$ — and that costs nothing, because the hypothesis is only ever imposed from some index onwards. What the test does need is a single $r < 1$ above the ratio for all those $n$, which here is any number in $[64/81, 1)$.

**Step 2: the sum.** Put $S_k = \sum_{n \ge 1} n^k 3^{-n}$ for $k = 0, 1, 2, 3$; each converges by the computation above with $n^k$ in place of $n^3$. Multiplying a convergent series by $3$ and shifting the index by one (which only relabels the partial sums),

$$
3 S_k = \sum_{n \ge 1} \frac{n^k}{3^{\,n-1}} = \sum_{m \ge 0} \frac{(m+1)^k}{3^{\,m}} = 1 + \sum_{m \ge 1} \frac{(m+1)^k}{3^{\,m}} ,
$$

the last step splitting off the $m = 0$ term. Subtracting $S_k$, and using that convergent series may be subtracted termwise,

$$
2 S_k = 1 + \sum_{m \ge 1} \frac{(m+1)^k - m^k}{3^{\,m}} .
$$

Now take $k = 0, 1, 2, 3$ in turn. For $k = 0$ every bracket is $0$, so $2S_0 = 1$ and $S_0 = \tfrac12$, which is the geometric series $\sum_{m\ge1}3^{-m}$ as it should be. For $k=1$, $(m+1) - m = 1$, so $2S_1 = 1 + S_0 = \tfrac32$ and $S_1 = \tfrac34$. For $k = 2$, $(m+1)^2 - m^2 = 2m+1$, so $2S_2 = 1 + 2S_1 + S_0 = 1 + \tfrac32 + \tfrac12 = 3$ and $S_2 = \tfrac32$. For $k = 3$, $(m+1)^3 - m^3 = 3m^2 + 3m + 1$, so

$$
2 S_3 = 1 + 3 S_2 + 3 S_1 + S_0 = 1 + \tfrac92 + \tfrac94 + \tfrac12 = \frac{33}{4} ,
\qquad
\sum_{n \ge 1} \frac{n^3}{3^n} = S_3 = \frac{33}{8} = 4.125 .
$$

**Check.** The first twenty terms already give $4.1249986$, so the answer $4.125$ is right to the digits shown.
:::

:::example[A tail estimated with the integral test]{provenance=original}
The series $\sum_{n \ge 1} n^{-2}$ is a $p$-series with $p = 2 > 1$, so it converges. Suppose we have summed ten terms,

$$
s_{10} = \sum_{n=1}^{10} \frac{1}{n^2} = 1.5497677\ldots ,
$$

and want to know what is missing. Take $f(x) = x^{-2}$, which is continuous, positive and non-increasing on $[1,\infty)$ with $f(n) = n^{-2}$, and apply the two-sided bound of the integral test with $N = 10$. Since $\int_{11}^{\infty} x^{-2}\,dx = 1/11$ and $u_{11} = 1/121$,

$$
\frac{1}{11} \ \le \ \sum_{n > 10} \frac{1}{n^2} \ \le \ \frac{1}{11} + \frac{1}{121} ,
\qquad\text{that is}\qquad
0.0909091 \ \le \ R_{10} \ \le \ 0.0991736 .
$$

The bracket has width $u_{11} = 1/121$, so its midpoint $1/11 + 1/242 = 0.0950413$ estimates the tail with an error of at most $1/242 = 4.1\times10^{-3}$. Adding it to $s_{10}$ gives $1.6448090$ for the sum of the series.

**Check.** The exact tail is $R_{10} = 0.0951663\ldots$, inside the bracket as promised, and the midpoint rule missed it by only $1.2 \times 10^{-4}$. (The classical value of the whole series is $\pi^2/6 = 1.6449341\ldots$; it is not needed for the estimate and is quoted only to check it.) Ten terms plus one integral thus do the work of several thousand terms of the bare series, which is the practical value of the integral test's bound.
:::

:::application[Convergence of a partition function]{provenance=original}
In statistical mechanics the equilibrium properties of a system follow from its partition function, a sum over states whose convergence is a physical question, not a formality. For a quantum harmonic oscillator of angular frequency $\omega$ the energies are $E_n = \hbar\omega\,(n + \tfrac12)$ with $n = 0, 1, 2, \dots$, and at inverse temperature $\beta = 1/k_{\mathrm B}T$

$$
Z(\beta) = \sum_{n \ge 0} e^{-\beta E_n} = e^{-x/2}\sum_{n \ge 0} \bigl(e^{-x}\bigr)^{n} , \qquad x = \beta\hbar\omega .
$$

The ratio of consecutive terms is the constant $e^{-x}$, so the ratio test settles the matter at once: the sum converges for every $x > 0$ and diverges for $x \le 0$. Being geometric, it can then be evaluated:

$$
Z = \frac{e^{-x/2}}{1 - e^{-x}} = \frac{1}{e^{x/2} - e^{-x/2}} = \frac{1}{2\sinh(\beta\hbar\omega/2)} ,
$$

from which the mean energy follows as $\langle E\rangle = -\partial_\beta \ln Z = \tfrac12 \hbar\omega \coth(\beta\hbar\omega/2)$. At $\beta\hbar\omega = 0.7$, for instance, $Z = 1.3998163$.

Two features of the convergence are physics. First, the condition $x > 0$ says that the partition function of a system with infinitely many ever-higher levels exists only at positive temperature; the divergence at $\beta = 0$ is the statement that infinite temperature would populate infinitely many states equally. Second, the geometric decay means the sum converges at a rate set by $e^{-\beta\hbar\omega}$, and truncating it after $N$ terms leaves

$$
\sum_{n > N} e^{-\beta E_n} = \frac{e^{-\beta\hbar\omega(N + 3/2)}}{1 - e^{-\beta\hbar\omega}} ,
$$

a bound of the kind one needs for the anharmonic and rotational sums that have no closed form: there the comparison is made against this geometric series, and the number of levels to keep is read off from the required accuracy.
:::
