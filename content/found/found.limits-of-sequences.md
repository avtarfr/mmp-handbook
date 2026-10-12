---
id: found.limits-of-sequences
title: Limits of sequences and completeness
kind: definition
level: core
summary: "The definitions of a convergent sequence, a Cauchy sequence and a complete space, together with the three facts about real sequences used everywhere later: the Cauchy criterion, monotone convergence, and the existence of limsup and liminf."
prereqs: []
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§1.4, Def. 1.4-1 and Lemma 1.4-2 (pp. 25–26), Def. 1.4-3 and Thm 1.4-4 (p. 28); App. A1.6 (pp. 619–620) and A1.7, Cauchy convergence theorem (p. 621)"
    pages: "25-28, 619-621"
    role: definitions of convergence, Cauchy sequence and completeness; supremum and infimum; the Cauchy criterion for real and complex sequences
  - work: reed-simon-1980
    loc: "§I.2, pp. 4–8 (metric space, convergence, Cauchy sequence, completeness)"
    pages: "4-8"
    role: metric-space formulation; the rationals as an incomplete space
  - work: folland-1999
    loc: "§0.5 The extended real number system, pp. 10–11"
    pages: "10-11"
    role: completeness of the reals as the least-upper-bound property; limsup and liminf of a sequence and the criterion for convergence
---

:::note{provenance=original}
**What it means.** Convergence asks for a limit to be named; the Cauchy condition asks only that the terms crowd together, which is something you can check without knowing the answer. Completeness is the statement that in this space the second test never lies, and it is what makes $\mathbb{R}$ usable for analysis. Monotone convergence is the cheapest way to produce a limit (bound a monotone quantity and you are done), and $\limsup$ and $\liminf$ are the fallback when a sequence need not converge: they always exist, so one can argue with them and only afterwards show that they agree.
:::

:::definition[Convergent sequence]{provenance=adapted src="kreyszig-1978:§1.4, Def. 1.4-1 and Lemma 1.4-2, pp. 25–26; reed-simon-1980:§I.2, p. 5"}
Let $(X, d)$ be a metric space and let $(x_n)_{n \in \mathbb{N}}$ be a sequence of points of $X$. The sequence **converges** to $x \in X$ when $d(x_n, x) \to 0$; written out, each $\varepsilon > 0$ has an index $N \in \mathbb{N}$, which may depend on $\varepsilon$, such that $d(x_n, x) < \varepsilon$ at every $n > N$. Such an $x$ is unique if it exists, and is called the **limit**, written $x_n \to x$ or $\lim_{n\to\infty} x_n = x$. A sequence with no limit in $X$ is **divergent**. Throughout, $\mathbb{R}$ and $\mathbb{C}$ carry the metric $d(x,y) = \lvert x - y\rvert$, for which this is the notion of convergence used in calculus.
:::

:::definition[Cauchy sequence, complete space]{provenance=adapted src="kreyszig-1978:§1.4, Def. 1.4-3, p. 28; reed-simon-1980:§I.2, pp. 5–8"}
Call $(x_n)$ in $(X,d)$ a **Cauchy** sequence when its terms eventually crowd together: each $\varepsilon > 0$ admits an index $N$ beyond which $d(x_m, x_n) < \varepsilon$ holds for every pair $m, n > N$. Only the terms enter this condition; no candidate limit is mentioned.

Every convergent sequence is Cauchy, since $d(x_n,x) < \varepsilon/2$ for $n > N$ gives $d(x_m,x_n) \le d(x_m,x) + d(x,x_n) < \varepsilon$ for $m,n > N$. The space $(X,d)$ is **complete** when the converse holds throughout it, so that each of its Cauchy sequences has a limit lying in $X$.
:::

:::definition[Supremum, monotone sequences, limsup and liminf]{provenance=adapted src="kreyszig-1978:App. A1.6, pp. 619–620; folland-1999:§0.5, pp. 10–11"}
A non-empty set $E \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup E \in \mathbb{R}$, and one bounded below has a greatest lower bound $\inf E$; this **least-upper-bound property** is the order-theoretic form of the completeness of $\mathbb{R}$. In the extended reals $\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}$ every subset has a supremum and an infimum, with $\sup E = +\infty$ when $E$ is unbounded above and $\inf E = -\infty$ when it is unbounded below.

A real sequence $(x_n)$ is **bounded** if $\{x_n : n \in \mathbb{N}\}$ is bounded above and below, **non-decreasing** if $x_n \le x_{n+1}$ for every $n$, and **non-increasing** if $x_{n+1} \le x_n$ for every $n$; it is **monotone** if it is one of these. Its **limit superior** and **limit inferior** are

$$
\limsup_{n\to\infty} x_n = \inf_{k \ge 1} \ \sup_{n \ge k} x_n , \qquad
\liminf_{n\to\infty} x_n = \sup_{k \ge 1} \ \inf_{n \ge k} x_n ,
$$

both computed in $\overline{\mathbb{R}}$. They exist for every real sequence, since $k \mapsto \sup_{n \ge k} x_n$ is non-increasing and $k \mapsto \inf_{n \ge k} x_n$ is non-decreasing.
:::

:::statement[Cauchy criterion in $\mathbb{R}$ and $\mathbb{C}$]{provenance=adapted src="kreyszig-1978:§1.4, Thm 1.4-4, p. 28 and App. A1.7, Cauchy convergence theorem, p. 621"}
A real sequence has a limit precisely when it is Cauchy, and the same holds for a complex sequence: $\lvert x_m - x_n \rvert$ can be forced below any prescribed $\varepsilon > 0$ for all large $m$ and $n$ exactly when the sequence converges. Equivalently, $\mathbb{R}$ and $\mathbb{C}$ with $d(x,y) = \lvert x-y \rvert$ are complete metric spaces.
:::

:::idea[Cauchy criterion]{provenance=original}
The condition does two jobs. It confines the sequence: once all late terms are within $1$ of each other they are within $1$ of one fixed term, so the sequence is bounded. Boundedness, through the least-upper-bound property, produces a point approached by infinitely many terms — the Bolzano–Weierstrass theorem, which we prove here by halving an interval repeatedly, since the map carries it in no unit that precedes this one. The Cauchy condition then does its second job: a term far out is close to the terms of that subsequence, which are close to the point, so the whole sequence converges. The complex case reduces to the real one by taking real and imaginary parts.
:::

:::proof[Cauchy criterion]{provenance=adapted src="kreyszig-1978:App. A1.7, p. 621, with App. A1.6, pp. 619–620"}
Necessity is the implication recorded with the definition above, which used only the triangle inequality. We prove sufficiency, first for a real Cauchy sequence $(x_n)$.

**Step 1: a Cauchy sequence is bounded.** Take $\varepsilon = 1$ in the Cauchy condition: some $N$ has $\lvert x_m - x_n\rvert < 1$ for all $m, n > N$. Holding $n = N+1$ fixed, $\lvert x_m \rvert \le \lvert x_{N+1}\rvert + 1$ for every $m > N$. The remaining indices $1, \dots, N$ are finite in number, so

$$
C = \max\bigl\{ \lvert x_1\rvert, \dots, \lvert x_N\rvert, \ \lvert x_{N+1}\rvert + 1 \bigr\}
$$

is a real number and $\lvert x_n \rvert \le C$ for every $n$.

**Step 2 (lemma: Bolzano–Weierstrass on the line).** *A real sequence with $\lvert x_n\rvert \le C$ for all $n$ has a subsequence converging to a point of $[-C, C]$.* Set $[a_0, b_0] = [-C, C]$, an interval containing $x_n$ for infinitely many $n$ — indeed for all of them. Given an interval $[a_k, b_k]$ with that property, cut it at its midpoint: the indices $n$ with $x_n \in [a_k,b_k]$ split between the two closed halves, and two finite sets cannot have an infinite union, so at least one half contains $x_n$ for infinitely many $n$. Name it $[a_{k+1}, b_{k+1}]$. By construction $a_k \le a_{k+1} \le b_{k+1} \le b_k$ and $b_k - a_k = 2^{1-k}C$.

The set $\{a_k : k \ge 0\}$ is non-empty and bounded above by $b_0$, so the least-upper-bound property gives $\alpha = \sup_k a_k \in \mathbb{R}$. Each $b_k$ is itself an upper bound of that set, because $a_j \le a_k \le b_k$ for $j \le k$ and $a_j \le b_j \le b_k$ for $j \ge k$; hence $\alpha \le b_k$, and $a_k \le \alpha$ by definition, so $\alpha \in [a_k, b_k]$ for every $k$, and in particular $\alpha \in [-C,C]$.

Choose indices $n_1 < n_2 < \cdots$ with $x_{n_k} \in [a_k, b_k]$, which is possible because each of these intervals holds $x_n$ for infinitely many $n$, so an index larger than those already chosen is always available. Both $x_{n_k}$ and $\alpha$ lie in $[a_k, b_k]$, whence

$$
\lvert x_{n_k} - \alpha \rvert \ \le \ b_k - a_k \ = \ 2^{1-k} C \ \longrightarrow \ 0 ,
$$

so $x_{n_k} \to \alpha$. This proves the lemma.

**Step 3: from the subsequence to the sequence.** Let $\alpha$ be the limit just produced and let $\varepsilon > 0$. The Cauchy condition supplies an $N$ with $\lvert x_m - x_n\rvert < \varepsilon/2$ for all $m, n > N$, and $x_{n_k} \to \alpha$ supplies one index $n_k > N$ with $\lvert x_{n_k} - \alpha\rvert < \varepsilon/2$. For every $m > N$ the triangle inequality gives

$$
\lvert x_m - \alpha\rvert \ \le \ \lvert x_m - x_{n_k}\rvert + \lvert x_{n_k} - \alpha\rvert \ < \ \varepsilon .
$$

So $x_m \to \alpha$, and the real case is settled.

**Step 4: the complex case.** Let $(z_n)$ be Cauchy in $\mathbb{C}$ and write $z_n = p_n + i q_n$ with $p_n, q_n$ real. Since $\lvert p_m - p_n\rvert \le \lvert z_m - z_n\rvert$ and $\lvert q_m - q_n \rvert \le \lvert z_m - z_n\rvert$, both real sequences are Cauchy, so by Steps 1–3 they converge, say $p_n \to p$ and $q_n \to q$. Then $\lvert z_n - (p + iq)\rvert \le \lvert p_n - p\rvert + \lvert q_n - q\rvert \to 0$, so $z_n \to p + iq$.

Convergent sequences are Cauchy in any metric space, so both implications hold in $\mathbb{R}$ and in $\mathbb{C}$, and each is therefore complete. $\square$
:::

:::statement[Monotone convergence]{provenance=original}
Let $(x_n)$ be a non-decreasing sequence of real numbers and $S = \{x_n : n \in \mathbb{N}\}$.

1. If $S$ is bounded above, then $(x_n)$ converges and $\lim_{n\to\infty} x_n = \sup S$.
2. If $S$ is not bounded above, then for every $M \in \mathbb{R}$ there is an $N$ with $x_n > M$ for all $n > N$; one writes $x_n \to +\infty$ and the sequence is divergent.

For a non-increasing sequence the mirror statements hold, with $\inf S$ in place of $\sup S$ and $-\infty$ in place of $+\infty$. In every case $\lim_{n\to\infty} x_n = \sup_n x_n$ for non-decreasing and $\inf_n x_n$ for non-increasing sequences, as a limit in $\overline{\mathbb{R}}$.
:::

:::idea[Monotone convergence]{provenance=original}
A non-decreasing sequence has nowhere to go but up towards its supremum. The least-upper-bound property names that supremum $L$, and "least" means that nothing below $L$ bounds the sequence, so some term already exceeds $L - \varepsilon$; monotonicity then holds every later term in the thin strip between $L-\varepsilon$ and $L$. If there is no upper bound, the same remark applied to an arbitrary level $M$ shows that the terms pass $M$ and never return.
:::

:::proof[Monotone convergence]{provenance=original}
Let $(x_n)$ be non-decreasing and put $S = \{x_n : n \in \mathbb{N}\}$, a non-empty subset of $\mathbb{R}$.

1. **Bounded above.** The least-upper-bound property gives $L = \sup S \in \mathbb{R}$. Fix $\varepsilon > 0$. Because $L$ is the *least* upper bound, $L - \varepsilon$ is not an upper bound, so $x_N > L - \varepsilon$ for at least one index $N$. For $n > N$, monotonicity gives $x_n \ge x_N > L - \varepsilon$, while $x_n \le L$ because $L$ bounds $S$. Hence $\lvert x_n - L\rvert < \varepsilon$ for all $n > N$. As $\varepsilon > 0$ was arbitrary, $x_n \to L = \sup S$.

2. **Not bounded above.** Let $M \in \mathbb{R}$. Then $M$ fails to be an upper bound of $S$, so $x_N > M$ for some $N$, and monotonicity gives $x_n \ge x_N > M$ for all $n > N$. That is the assertion $x_n \to +\infty$. Such a sequence has no real limit, because a convergent sequence is bounded: all but finitely many of its terms lie within $1$ of the limit, and the finitely many others have a largest absolute value.

3. **Non-increasing sequences.** If $(x_n)$ is non-increasing then $(-x_n)$ is non-decreasing, and $\sup\{-x_n : n\} = -\inf\{x_n : n\}$; since $-x_n \to \ell$ is equivalent to $x_n \to -\ell$, parts 1 and 2 applied to $(-x_n)$ give the mirror statements, with $\inf S$ in place of $\sup S$ and $-\infty$ in place of $+\infty$. $\square$
:::

:::statement[Convergence through limsup and liminf]{provenance=adapted src="folland-1999:§0.5, p. 11"}
Every real sequence satisfies $\liminf_{n} x_n \le \limsup_{n} x_n$ in $\overline{\mathbb{R}}$. The sequence converges to a real limit if and only if

$$
\liminf_{n\to\infty} x_n = \limsup_{n\to\infty} x_n \quad\text{and this common value is finite,}
$$

and then it is the limit.
:::

:::idea[Convergence through limsup and liminf]{provenance=original}
Only the monotonicity of the two auxiliary sequences $a_k = \sup_{n \ge k} x_n$ and $b_k = \inf_{n \ge k} x_n$ is needed. The inequality $\liminf \le \limsup$ comes from comparing $b_j$ with $a_k$ at the later of the two indices, where one is an infimum and the other a supremum of the same tail. If the sequence converges, every late term sits in an interval of width $2\varepsilon$ about the limit, and so therefore do $a_k$ and $b_k$. Conversely, if the two numbers agree at a finite value $x$, then one tail supremum lies below $x + \varepsilon$ and one tail infimum above $x - \varepsilon$, and together they squeeze all late terms to within $\varepsilon$ of $x$.
:::

:::proof[Convergence through limsup and liminf]{provenance=original}
Write $a_k = \sup_{n \ge k} x_n$ and $b_k = \inf_{n \ge k} x_n$, computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; thus $\limsup_n x_n = \inf_k a_k$ and $\liminf_n x_n = \sup_k b_k$ by definition.

**The inequality.** Fix indices $j$ and $k$ and let $l = \max(j,k)$. Then $b_j \le b_l$, because the infimum over the smaller tail $\{x_n : n \ge l\}$ can only be larger; $b_l \le a_l$, because that tail is non-empty; and $a_l \le a_k$, because the supremum over a smaller tail can only be smaller. So $b_j \le a_k$ for every pair $j, k$. Taking the supremum over $j$ gives $\liminf_n x_n \le a_k$ for each $k$, and then the infimum over $k$ gives $\liminf_n x_n \le \limsup_n x_n$.

**Convergence forces equality at a finite value.** Suppose $x_n \to x \in \mathbb{R}$ and let $\varepsilon > 0$. Some $N$ has $x - \varepsilon \le x_n \le x + \varepsilon$ for all $n > N$. For $k > N$ the whole tail $\{x_n : n \ge k\}$ lies in $[x-\varepsilon, x+\varepsilon]$, so $a_k \le x + \varepsilon$ and $b_k \ge x - \varepsilon$. Hence $\limsup_n x_n \le a_k \le x+\varepsilon$ and $\liminf_n x_n \ge b_k \ge x - \varepsilon$, which with the inequality already proved gives

$$
x - \varepsilon \ \le \ \liminf_{n\to\infty} x_n \ \le \ \limsup_{n\to\infty} x_n \ \le \ x + \varepsilon .
$$

Since $\varepsilon > 0$ was arbitrary, both are equal to $x$, and in particular both are finite.

**Equality at a finite value forces convergence.** Suppose $\liminf_n x_n = \limsup_n x_n = x$ with $x \in \mathbb{R}$, and let $\varepsilon > 0$. From $\inf_k a_k = x < x + \varepsilon$ there is a $K_1$ with $a_{K_1} < x + \varepsilon$, so $x_n < x + \varepsilon$ for all $n \ge K_1$. From $\sup_k b_k = x > x - \varepsilon$ there is a $K_2$ with $b_{K_2} > x - \varepsilon$, so $x_n > x - \varepsilon$ for all $n \ge K_2$. With $N = \max(K_1, K_2)$ we get $\lvert x_n - x\rvert < \varepsilon$ for all $n \ge N$. Hence $x_n \to x$, the limit being the common value. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="reed-simon-1980:§I.2, p. 8; kreyszig-1978:App. A1.7, p. 621"}
- **Completeness is a property of the space, not of the sequence.** Take $X = \mathbb{Q}$ with $d(x,y) = \lvert x-y \rvert$ and a sequence of rationals converging in $\mathbb{R}$ to an irrational number: it is Cauchy in $\mathbb{Q}$ and has no limit in $\mathbb{Q}$. So "Cauchy implies convergent" does not follow from the metric axioms; for $\mathbb{R}$ it is a theorem, resting on the least-upper-bound property through the Bolzano–Weierstrass theorem (see :ref[Compactness]{to=found.compactness}).
- **Monotone convergence needs the bound.** $x_n = n$ is non-decreasing with no real limit. It also needs the least-upper-bound property, and not merely monotonicity and boundedness: the non-decreasing rational sequence of $n$-digit decimal truncations of $\sqrt{2}$ is bounded above by $2$ and has no limit in $\mathbb{Q}$.
- **$\limsup$ and $\liminf$ need no hypotheses, but may be infinite.** Equality of the two alone is not convergence: for $x_n = n$ both equal $+\infty$. Finiteness is what the criterion above adds.
- **Boundedness is necessary but not sufficient for convergence**, as $x_n = (-1)^n$ shows, with $\liminf = -1$ and $\limsup = 1$.
:::

:::example[A convergent sequence that no monotonicity argument reaches]{provenance=original}
Define $x_1 = 1$ and $x_{n+1} = 1/(1 + x_n)$. The first terms are

$$
1, \quad \tfrac12, \quad \tfrac23, \quad \tfrac35, \quad \tfrac58, \quad \tfrac{8}{13}, \quad \tfrac{13}{21}, \quad \dots
$$

— consecutive ratios of Fibonacci numbers — and they fall and rise alternately, so monotone convergence has nothing to say. The Cauchy criterion does.

1. **Every term lies in $[\tfrac12, 1]$.** True for $x_1 = 1$. If $x_n \in [\tfrac12, 1]$ then $1 + x_n \in [\tfrac32, 2]$, so $x_{n+1} = 1/(1+x_n) \in [\tfrac12, \tfrac23] \subset [\tfrac12, 1]$. Induction does the rest.

2. **Consecutive differences shrink by a factor $\tfrac49$.** For $n \ge 2$,
   $$
   x_{n+1} - x_n = \frac{1}{1+x_n} - \frac{1}{1+x_{n-1}} = \frac{x_{n-1} - x_n}{(1+x_n)(1+x_{n-1})} ,
   $$
   and by step 1 both factors in the denominator are at least $\tfrac32$, so $\lvert x_{n+1} - x_n\rvert \le \tfrac49 \lvert x_n - x_{n-1}\rvert$. Since $\lvert x_2 - x_1\rvert = \tfrac12$, induction gives
   $$
   \lvert x_{k+1} - x_k \rvert \ \le \ \tfrac12 \left(\tfrac49\right)^{k-1} \qquad (k \ge 1) .
   $$

3. **The sequence is Cauchy.** For $m > n \ge 1$, inserting the intermediate terms and using the triangle inequality and step 2,
   $$
   \lvert x_m - x_n \rvert \ \le \ \sum_{k=n}^{m-1} \lvert x_{k+1} - x_k \rvert \ \le \ \tfrac12 \sum_{k=n}^{\infty} \left(\tfrac49\right)^{k-1} = \frac{9}{10}\left(\tfrac49\right)^{n-1} ,
   $$
   the last step being the sum of a geometric series with ratio $\tfrac49$. The right-hand side does not depend on $m$ and tends to $0$, so given $\varepsilon > 0$ any $n$ with $\tfrac{9}{10}(4/9)^{n-1} < \varepsilon$ serves as the required index. By the Cauchy criterion the sequence converges; call the limit $L$, and $L \in [\tfrac12, 1]$ by step 1.

4. **Identify $L$.** The map $t \mapsto 1/(1+t)$ is continuous at $L$, so $x_{n+1} = 1/(1+x_n) \to 1/(1+L)$; but $x_{n+1} \to L$ as well, and limits are unique, so $L(1+L) = 1$. Of the two roots of $L^2 + L - 1 = 0$ only one is positive, so
   $$
   L = \frac{\sqrt5 - 1}{2} = 0.6180339887\ldots
   $$

5. **Check.** $x_{10} = 55/89 = 0.6179775280\ldots$, which differs from $L$ by $5.6 \times 10^{-5}$, comfortably inside the bound $\tfrac{9}{10}(4/9)^{9} = 6.1 \times 10^{-4}$ that step 3 gives for $\lvert x_m - x_{10}\rvert$.
:::

:::example[A bounded sequence with $\liminf \neq \limsup$]{provenance=original}
Let $x_n = (-1)^n\bigl(1 + \tfrac1n\bigr)$, so that

$$
x_1 = -2, \quad x_2 = \tfrac32, \quad x_3 = -\tfrac43, \quad x_4 = \tfrac54, \quad x_5 = -\tfrac65, \quad x_6 = \tfrac76, \ \dots
$$

Every term satisfies $\lvert x_n \rvert \le 2$, so the sequence is bounded.

Fix $k$ and let $e(k)$ be the smallest even integer $\ge k$. Among the terms with $n \ge k$ the positive ones are $1 + 1/n$ for even $n$, which decrease as $n$ grows, and the negative ones are below $0$; so the largest is the one at $n = e(k)$ and

$$
a_k = \sup_{n \ge k} x_n = 1 + \frac{1}{e(k)} .
$$

Since $e(k) \to \infty$ and every $a_k > 1$, we get $\limsup_n x_n = \inf_k a_k = 1$. The same argument with the smallest odd integer $o(k) \ge k$ gives $b_k = \inf_{n \ge k} x_n = -\bigl(1 + 1/o(k)\bigr)$ and $\liminf_n x_n = \sup_k b_k = -1$.

For example $a_5 = 1 + \tfrac16 = \tfrac76$ (the supremum is attained at $n = 6$) and $b_5 = -\tfrac65$ (attained at $n = 5$). The two limits are finite but unequal, so by the criterion above the sequence does not converge, which the subsequences confirm: $x_{2m} \to 1$ and $x_{2m+1} \to -1$.
:::

:::application[Solving Kepler's equation by iteration]{provenance=original}
A body on an elliptical orbit of eccentricity $e \in [0,1)$ has its position fixed by the eccentric anomaly $E$, which solves **Kepler's equation**

$$
E - e \sin E = M ,
$$

where the mean anomaly $M$ grows linearly in time. There is no elementary formula for $E$, and the oldest numerical method is the fixed-point iteration

$$
E_0 = M , \qquad E_{k+1} = M + e \sin E_k .
$$

The iteration map has derivative $e\cos E$, of either sign, so depending on $M$ the iterates may climb steadily towards the root or oscillate about it; monotonicity is not available in general, and the limit is not known in advance either, so there is nothing to compare the terms against. What is available is the increment between successive terms, and that is exactly what the Cauchy criterion asks for. By the mean value theorem applied to $\sin$,

$$
\lvert E_{k+1} - E_k \rvert = e \,\lvert \sin E_k - \sin E_{k-1}\rvert \le e \,\lvert E_k - E_{k-1}\rvert ,
$$

because $\lvert \cos \rvert \le 1$; hence $\lvert E_{k+1} - E_k\rvert \le e^{k} \lvert E_1 - E_0\rvert$ and, summing the geometric series as in the example above, $\lvert E_m - E_n \rvert \le e^{n}\lvert E_1 - E_0\rvert/(1-e)$ for $m > n$. The eccentricity being below $1$ is precisely what makes this tend to $0$: the iteration is Cauchy, the completeness of $\mathbb{R}$ supplies a limit $E$, and continuity of $\sin$ turns the recursion into $E = M + e \sin E$ in the limit.

With $e = 0.2$ and $M = 1$ (radians), $\lvert E_1 - E_0\rvert = e\sin 1 = 0.1682942$, so the bound predicts $\lvert E - E_8\rvert \le 0.2^{8}\times 0.1682942/0.8 = 5.4\times10^{-7}$. The iteration gives $E = 1.1853242039$, with $E - e\sin E - M$ below $10^{-14}$. For comets, with $e$ close to $1$, the factor $e^n$ decays too slowly and the same completeness argument, while still valid, is useless in practice; Newton's method is used instead.
:::
