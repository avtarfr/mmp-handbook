---
id: prob.law-of-large-numbers
title: Laws of large numbers
kind: theorem
level: core
summary: Proves that the average of independent random variables converges in probability to the average of their means under a simple variance condition, states the strong law in the sharp form that almost sure convergence of the average of an i.i.d. sequence holds exactly when the mean is finite, and distinguishes what each version promises.
prereqs: [prob.expectation-variance, prob.probability-inequalities, prob.convergence-random-variables]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§7.4 Laws of large numbers, pp. 370-373: the general convergence problem (7.4.1), Example (7.4.2), Theorem (7.4.3) with its mean-square and almost sure proof, the condition (7.4.6), Theorem (7.4.7) with conditions (7.4.8) and (7.4.9) for the weak law, and Example (7.4.10) (the Cauchy distribution), with Exercise (7.4.1) (independent $X_n$ with $\\mathbb{P}(X_n = \\pm n) = 1/(2n\\log n)$, which obeys the weak law but not the strong one) and Exercise (7.4.5) (the truncation route to the weak law under $\\mathbb{E}|X_1| < \\infty$); §7.5 The strong law, Theorem (7.5.1), its opening reduction to non-negative summands, and the truncation and block structure of its proof, pp. 374-376; §5.10, Theorem (5.10.2) (the law of large numbers by characteristic functions) with its proof, p. 217, and Example (5.10.16) with Theorem (5.10.17) (recurrence of a mean-zero random walk, deduced from the law of large numbers), pp. 220-222; §2.2 Theorem (2.2.1) (Bernoulli's theorem) and the uniform statement (2.2.6) obtained from Bernstein's inequality, pp. 33-34"
    pages: "33-34, 217, 220-222, 370-376"
    role: the weak/strong terminology; the almost sure and mean square law under a finite second moment with the subsequence-plus-monotonicity proof route; the sharp strong law, its reduction to non-negative summands and its necessary and sufficient condition $\\mathbb{E}|X_1| < \\infty$; the necessary and sufficient condition for the weak law; the Cauchy counterexample and the discrete example of a sequence obeying the weak law but not the strong one; the recurrence of a mean-zero random walk as an application; the characteristic-function proof of convergence in distribution to the mean; the uniform-in-$n$ strengthening available from Bernstein's inequality
  - work: folland-1999
    loc: "§10.2 The law of large numbers, pp. 321-325: Theorem 10.9 (the Weak Law of Large Numbers, for independent $L^2$ variables with $n^{-2}\\sum_1^n \\sigma_j^2 \\to 0$) and its Chebyshev proof, Theorem 10.10 (Borel-Cantelli), Theorem 10.11 (Kolmogorov's inequality) with proof, Theorem 10.12 (Kolmogorov's Strong Law of Large Numbers, under $\\sum_1^\\infty n^{-2}\\sigma_n^2 < \\infty$), Theorem 10.13 (Khinchine's Strong Law of Large Numbers, for i.i.d. $L^1$ variables), Exercises 11 and 13 (p. 324) and Exercise 17 on the sample mean and sample variance (p. 325)"
    pages: "321-325"
    role: the weak law for independent but not identically distributed $L^2$ variables, which is the version proved here, together with its Chebyshev proof; Kolmogorov's inequality and the two strong laws stated in their own hypotheses; the remark that independence may be weakened to uncorrelatedness in the weak law; the sample-mean and sample-variance application
  - work: arfken-2013
    loc: "§23.2, eqs. (23.29)-(23.30) (the Chebyshev inequality in $k\\sigma$ form), p. 1140; §23.4, the Poisson limit of the binomial distribution, eqs. (23.53)-(23.55) and the remark that it is 'an example of the laws of large numbers', p. 1154; §23.5, the comparison of the Chebyshev bound with the exact normal tail, pp. 1156-1157"
    pages: "1140, 1154, 1156-1157"
    role: the inequality in the form in which the proof below uses it; the physicists' broader use of the phrase 'laws of large numbers' for limit theorems of this chapter, noted here so that the narrower technical meaning is not confused with it
---

:::note[Two different promises]{provenance=original}
Everyone knows that averages settle down. The mathematics has to say in what sense, and there are two answers that are genuinely different.

The **weak law** says that for large $n$ a big error is unlikely: the average converges *in probability*. The **strong law** says that the average of a single infinite run converges *almost surely*, so once you have fixed the sequence of outcomes there is a last time the average is ever far from the mean. The difference is exactly the gap set out in :ref[Convergence of random variables]{to=prob.convergence-random-variables}, and it is the difference between "a long simulation probably gives the right answer" and "this simulation, run long enough, gives the right answer".

The weak law is cheap: two lines from Chebyshov's inequality, and it needs only a variance condition. The strong law is expensive and in return is sharp — for independent, identically distributed summands, almost sure convergence of the average holds if and only if the mean exists.
:::

:::definition[Partial sums, and the weak and strong laws]{provenance=adapted src="grimmett-stirzaker-2020:§7.4, eq. (7.4.1) and the paragraph defining the two laws, p. 370"}
Let $X_1, X_2, \dots$ be random variables on a common probability space, with **partial sums**

$$
S_n = X_1 + X_2 + \cdots + X_n , \qquad n \ge 1 .
$$

The general question is for which real sequences $a = \{a_n\}$, $b = \{b_n\}$ and which random variable $S$ one has $S_n/b_n - a_n \to S$, in some specified mode. The laws of large numbers are the case $b_n = n$ with a constant limit.

The sequence $\{X_n\}$ is said to **obey the weak law of large numbers** when some constant $\mu$ satisfies

$$
\frac1n S_n \ \xrightarrow{\ \mathrm{P}\ } \ \mu ,
$$

and that it **obeys the strong law of large numbers** if the stronger conclusion

$$
\frac1n S_n \ \xrightarrow{\ \mathrm{a.s.}\ } \ \mu
$$

holds. Since almost sure convergence implies convergence in probability, the strong law implies the weak law; the names record which conclusion, not which hypothesis, is stronger. When the $X_n$ have finite means it costs nothing to assume $\mathbb{E}X_n = 0$, by replacing $X_n$ with $X_n - \mathbb{E}X_n$ and $S_n$ with $S_n - \mathbb{E}S_n$.

A word on usage. Physics texts sometimes apply the phrase "the laws of large numbers" to any limit theorem for large samples: Arfken, Weber and Harris call the Poisson limit of the binomial distribution, and the normal limit of the Poisson, examples of the laws of large numbers. That is a broader usage than the technical one defined here, which concerns only the convergence of $S_n/n$ to a constant. The normal limit of a standardised sum is a separate theorem, :ref[The central limit theorem]{to=prob.central-limit-theorem}.
:::

:::statement[The weak law of large numbers]{provenance=adapted src="folland-1999:§10.2, Theorem 10.9, p. 321"}
Let $X_1, X_2, \dots$ be **independent** random variables in $L^{2}$, with means $\mu_j = \mathbb{E}X_j$ and variances $\sigma_j^{2} = \operatorname{var}(X_j)$. If

$$
\frac{1}{n^{2}} \sum_{j=1}^{n} \sigma_j^{2} \ \longrightarrow \ 0 \qquad \text{as } n \to \infty ,
$$

then

$$
\frac1n \sum_{j=1}^{n} \bigl(X_j - \mu_j\bigr) \ \xrightarrow{\ \mathrm{P}\ } \ 0 \qquad \text{as } n \to \infty .
$$

Two cases to have in mind. If the $X_j$ are identically distributed with common mean $\mu$ and common finite variance $\sigma^{2}$, the hypothesis reads $\sigma^{2}/n \to 0$, which is automatic, and the conclusion is $n^{-1}S_n \xrightarrow{\mathrm{P}} \mu$. More generally the variances may grow, provided they grow more slowly than $n$ on average: $\sigma_j^2 \le Cj^{\alpha}$ with $\alpha < 1$ will do, since then $n^{-2}\sum_{j\le n}\sigma_j^2 = O(n^{\alpha - 1})$.
:::

:::statement[The strong law of large numbers]{provenance=adapted src="grimmett-stirzaker-2020:§7.5, Theorem (7.5.1), p. 374, and §7.4, Theorem (7.4.3), p. 370; folland-1999:§10.2, Theorems 10.12 and 10.13, pp. 322-323"}
Three statements, in increasing order of sharpness and of difficulty.

1. **Under a finite second moment** (Grimmett and Stirzaker, Theorem (7.4.3)). Let $X_1, X_2, \dots$ be independent and identically distributed with $\mathbb{E}(X_1^{2}) < \infty$ and $\mathbb{E}(X_1) = \mu$. Then
   $$
   \frac1n\sum_{i=1}^{n} X_i \ \longrightarrow \ \mu \qquad \text{almost surely and in mean square.}
   $$
2. **Kolmogorov's strong law** (Folland, Theorem 10.12). Let $X_1, X_2, \dots$ be independent $L^{2}$ random variables with means $\mu_n$ and variances $\sigma_n^{2}$ satisfying
   $$
   \sum_{n=1}^{\infty} \frac{\sigma_n^{2}}{n^{2}} \ < \ \infty .
   $$
   Then $n^{-1}\sum_{j=1}^{n}(X_j - \mu_j) \to 0$ almost surely. The summands need not be identically distributed; the hypothesis is strictly stronger than that of the weak law above.
3. **The sharp i.i.d. form** (Grimmett and Stirzaker, Theorem (7.5.1); Folland's Theorem 10.13, Khinchine's strong law, gives the sufficiency). Let $X_1, X_2, \dots$ be independent and identically distributed. Then
   $$
   \frac1n \sum_{i=1}^{n} X_i \ \longrightarrow \ \mu \quad \text{almost surely, for some constant } \mu
   \qquad\Longleftrightarrow\qquad
   \mathbb{E}\lvert X_1\rvert < \infty ,
   $$
   and in that case $\mu = \mathbb{E}X_1$. No assumption on the variance is needed, and none can be dispensed with on the left: a finite first moment is exactly the right hypothesis.

Statement 3 contains statements 1 and 2 in the identically distributed case, and is the version to quote. Statement 1 is included because its proof is short and instructive, and statement 2 because it is the one that applies when the summands are not identically distributed.

**The weak law is also sharp, and is genuinely weaker.** Grimmett and Stirzaker record (Theorem (7.4.7), proof omitted there) that an i.i.d. sequence with common distribution function $F$ satisfies $n^{-1}S_n \xrightarrow{\mathrm{P}} \mu$ for some constant $\mu$ if and only if
$$
n\,\mathbb{P}(\lvert X_1\rvert > n) \to 0
\quad\text{and}\quad
\mathbb{E}\bigl(X_1 \mathbf{1}_{\{\lvert X_1\rvert \le n\}}\bigr) \to \mu
\qquad \text{as } n \to \infty ,
$$
equivalently, if and only if the characteristic function $\varphi$ of $X_1$ is differentiable at $0$ with $\varphi'(0) = i\mu$. There are sequences satisfying this without $\mathbb{E}\lvert X_1\rvert < \infty$, and such a sequence obeys the weak law while failing the strong one; an example is any symmetric $X_1$ whose distribution function satisfies $1 - F(x) \sim 1/(x\log x)$ as $x \to \infty$.
:::

:::idea{provenance=original}
**The weak law is one application of Chebyshov's inequality.** The average of independent variables has variance $n^{-2}\sum_j \sigma_j^2$, because variances of independent variables add while the factor $1/n$ outside squares to $1/n^2$. Chebyshov's inequality converts that variance into a bound on the probability of a deviation, and the hypothesis is exactly the statement that the variance of the average tends to zero. Nothing else happens. That is why the weak law is cheap and why it needs a second moment that the sharp strong law does not.

**The strong law needs more because almost sure convergence is a statement about a whole sequence at once.** The device, in both proofs sketched below, is to control a sparse subsequence and then fill in the gaps by monotonicity. Chebyshov's inequality along the subsequence $n_i = i^{2}$ gives tail probabilities of order $i^{-2}$, which *are* summable, so the first Borel-Cantelli lemma gives almost sure convergence along that subsequence; for non-negative summands the partial sums are monotone, so a value of $n$ between $i^2$ and $(i+1)^2$ is squeezed between $S_{i^2}$ and $S_{(i+1)^2}$, and the ratio $i^2/(i+1)^2 \to 1$ closes the gap. A general summand is split into its positive and negative parts, to each of which this applies.

**Getting down to a first moment only** requires a second device: truncation. Replace $X_n$ by $Y_n = X_n \mathbf{1}_{\{X_n < n\}}$. The truncation changes only finitely many terms almost surely, because $\sum_n \mathbb{P}(X_n \ge n) \le \mathbb{E}(X_1) < \infty$ and the first Borel-Cantelli lemma applies; and the truncated variables, though not identically distributed, have variances small enough for a Kolmogorov-type argument along a geometric subsequence $\beta_k = \lfloor \alpha^{k}\rfloor$. That is where the finite first moment is spent, and it is spent exactly.
:::

:::proof[The weak law]{provenance=adapted src="folland-1999:§10.2, proof of Theorem 10.9, p. 321"}
Put $Z_n = n^{-1}\sum_{j=1}^{n}(X_j - \mu_j)$.

**Step 1: the mean of $Z_n$ is zero.** Each summand $X_j - \mu_j$ has mean zero, and expectation is linear, so $\mathbb{E}(Z_n) = 0$. Finiteness of the means is guaranteed by $X_j \in L^{2} \subset L^{1}$ on a probability space.

**Step 2: the variance of $Z_n$.** Variances of independent random variables add, and centring does not change a variance, so
$$
\operatorname{var}\Bigl(\sum_{j=1}^{n}(X_j - \mu_j)\Bigr) = \sum_{j=1}^{n} \sigma_j^{2} .
$$
Scaling by $1/n$ multiplies a variance by $1/n^{2}$, hence
$$
\operatorname{var}(Z_n) = \mathbb{E}(Z_n^{2}) = \frac{1}{n^{2}}\sum_{j=1}^{n}\sigma_j^{2} .
$$
This is the only place independence is used, and it is used only through the additivity of variances.

**Step 3: Chebyshov's inequality.** Fix $\epsilon > 0$. By :ref[Chebyshov's inequality]{to=prob.probability-inequalities} applied to the mean-zero variable $Z_n$,
$$
\mathbb{P}\bigl(\lvert Z_n\rvert \ge \epsilon\bigr) \ \le \ \frac{\operatorname{var}(Z_n)}{\epsilon^{2}} = \frac{1}{\epsilon^{2}}\cdot\frac{1}{n^{2}}\sum_{j=1}^{n}\sigma_j^{2} .
$$

**Step 4: pass to the limit.** By hypothesis the last factor tends to $0$ as $n \to \infty$, and $\epsilon$ is fixed, so the whole right-hand side tends to $0$. Since $\epsilon > 0$ was arbitrary, $Z_n \xrightarrow{\mathrm{P}} 0$. $\square$

**The identically distributed case, with a rate.** If the $X_j$ are i.i.d. with mean $\mu$ and variance $\sigma^{2}$ then $\operatorname{var}(Z_n) = \sigma^{2}/n$ and step 3 reads
$$
\mathbb{P}\Bigl( \Bigl\lvert \frac{S_n}{n} - \mu \Bigr\rvert \ge \epsilon \Bigr) \ \le \ \frac{\sigma^{2}}{n\epsilon^{2}} ,
$$
a bound that is not merely a limit statement: it is the explicit, distribution-free sample-size formula used in the example below.
:::

:::proof[The strong law under a finite second moment]{provenance=adapted src="grimmett-stirzaker-2020:§7.4, proof of Theorem (7.4.3), pp. 370-372"}
Let $X_1, X_2, \dots$ be i.i.d. with $\mathbb{E}(X_1^{2}) < \infty$ and $\mu = \mathbb{E}(X_1)$.

**Step 1: convergence in mean square.** As in the proof of the weak law,
$$
\mathbb{E}\Bigl[ \Bigl(\frac{S_n}{n} - \mu\Bigr)^{2}\Bigr] = \frac{1}{n^{2}}\operatorname{var}(S_n) = \frac{1}{n^{2}}\sum_{i=1}^{n}\operatorname{var}(X_i) = \frac{\operatorname{var}(X_1)}{n} \ \longrightarrow \ 0 ,
$$
using independence for the second equality and identical distribution for the third. The variance is finite because $\mathbb{E}(X_1^2) < \infty$. So $n^{-1}S_n \to \mu$ in mean square, and the hypothesis $\mathbb{E}(X_1^2)<\infty$ is necessary as well as sufficient for *this* conclusion.

**Step 2: almost sure convergence along the squares.** Apply Chebyshov's inequality to $S_{i^{2}}$, whose variance is $i^{2}\operatorname{var}(X_1)$:
$$
\mathbb{P}\Bigl( \frac{1}{i^{2}}\bigl\lvert S_{i^{2}} - i^{2}\mu \bigr\rvert > \epsilon \Bigr) \ \le \ \frac{\operatorname{var}(S_{i^{2}})}{i^{4}\epsilon^{2}} = \frac{\operatorname{var}(X_1)}{i^{2}\epsilon^{2}} .
$$
These bounds are summable over $i$, so by partial converse 3 of :ref[Convergence of random variables]{to=prob.convergence-random-variables} — equivalently by the first Borel-Cantelli lemma —
$$
\frac{1}{i^{2}} S_{i^{2}} \ \xrightarrow{\ \mathrm{a.s.}\ } \ \mu \qquad \text{as } i \to \infty .
$$
The choice of the squares is what makes the series converge: along the full sequence the bound is $\operatorname{var}(X_1)/(n\epsilon^2)$, which is not summable.

**Step 3: fill the gaps, for non-negative summands.** Suppose first $X_i \ge 0$, so $\{S_n\}$ is non-decreasing. For $i^{2} \le n \le (i+1)^{2}$,
$$
S_{i^{2}} \ \le \ S_n \ \le \ S_{(i+1)^{2}} ,
\qquad\text{hence}\qquad
\frac{1}{(i+1)^{2}}S_{i^{2}} \ \le \ \frac{S_n}{n} \ \le \ \frac{1}{i^{2}}S_{(i+1)^{2}} .
$$
As $n \to \infty$ the index $i$ does too. Writing the outer quantities as $\bigl(i^{2}/(i+1)^{2}\bigr)\cdot i^{-2}S_{i^{2}}$ and $\bigl((i+1)^{2}/i^{2}\bigr)\cdot (i+1)^{-2}S_{(i+1)^{2}}$ and using $i^{2}/(i+1)^{2} \to 1$ together with step 2, both bounds tend almost surely to $\mu$. Therefore $n^{-1}S_n \to \mu$ almost surely. Monotonicity of $S_n$, which needs $X_i \ge 0$, is what licenses the sandwich.

**Step 4: remove the sign restriction.** For general $X_i$ put
$$
X_i^{+} = \max\{X_i, 0\} , \qquad X_i^{-} = -\min\{X_i, 0\} ,
$$
so that $X_i = X_i^{+} - X_i^{-}$, both parts are non-negative, and $\mathbb{E}(X_i) = \mathbb{E}(X_i^{+}) - \mathbb{E}(X_i^{-})$. Since $X_i^{\pm} \le \lvert X_i\rvert$, both parts have finite second moment, and both sequences are i.i.d. Applying step 3 to each,
$$
\frac{S_n}{n} = \frac1n\sum_{i=1}^{n}X_i^{+} - \frac1n\sum_{i=1}^{n}X_i^{-} \ \xrightarrow{\ \mathrm{a.s.}\ } \ \mathbb{E}(X_1^{+}) - \mathbb{E}(X_1^{-}) = \mathbb{E}(X_1) = \mu ,
$$
the difference of two almost surely convergent sequences being almost surely convergent to the difference of the limits. $\square$

**What the sharp theorem costs.** The proof of statement 3, with only $\mathbb{E}\lvert X_1\rvert < \infty$, follows the same plan, and it begins with the same reduction as step 3 above: Grimmett and Stirzaker treat **non-negative** summands first, so that $\mathbb{E}\lvert X_1\rvert = \mathbb{E}(X_1) = \mu \ge 0$, and recover the general case at the end by splitting $X_i$ into $X_i^{+}$ and $X_i^{-}$ as in step 4. Everything below is said under that restriction. The squares $i^{2}$ are replaced by a geometric subsequence $\beta_k = \lfloor\alpha^{k}\rfloor$ with $\alpha > 1$, and $X_n$ by the truncation $Y_n = X_n\mathbf{1}_{\{X_n < n\}}$. The two Borel-Cantelli applications are: $\sum_n \mathbb{P}(X_n \ne Y_n) = \sum_n\mathbb{P}(X_1 \ge n) \le \mathbb{E}(X_1) < \infty$ — a bound that needs $X_1 \ge 0$, and is where the reduction earns its keep — so truncation is almost surely harmless; and $\sum_k \mathbb{P}\bigl(\beta_k^{-1}\lvert S'_{\beta_k} - \mathbb{E}S'_{\beta_k}\rvert > \epsilon\bigr) < \infty$, which rests on $\sum_i i^{-2}\mathbb{E}(Y_i^{2}) \le 2(\mathbb{E}(X_1) + 1) < \infty$. The sandwich in step 3 then yields $\alpha^{-1}\mu \le \liminf_m m^{-1}S'_m \le \limsup_m m^{-1}S'_m \le \alpha\mu$ almost surely for every $\alpha > 1$, and letting $\alpha \downarrow 1$ finishes. Folland's route to the same conclusion is different in its machinery: he proves Kolmogorov's inequality, $\mathbb{P}\bigl(\max_{k \le n}\lvert S_k\rvert > \epsilon\bigr) \le \epsilon^{-2}\sum_{1}^{n}\sigma_k^{2}$, which bounds the whole maximum rather than a single partial sum, deduces statement 2 from it over dyadic blocks $2^{k-1} < n \le 2^{k}$, and then obtains statement 3 from statement 2 by the same truncation.
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="folland-1999:§10.2, Exercises 11 and 13, p. 324; grimmett-stirzaker-2020:§7.4, Example (7.4.10) and the discussion after Theorem (7.4.7), pp. 372-373, and §2.2, eq. (2.2.6), p. 34"}
**Independence is used only through the additivity of variances.** In the proof of the weak law, step 2 is the sole appearance of independence. It therefore suffices that the summands be *uncorrelated*: Folland records as Exercise 13 that the weak law survives when independence is traded for the far milder demand $\mathbb{E}\bigl[(X_j - \mu_j)(X_k - \mu_k)\bigr] = 0$ whenever $j \ne k$. The strong-law proofs use independence more substantially, through Borel-Cantelli and (in Folland's route) through Kolmogorov's inequality.

**The variance condition in the weak law cannot simply be dropped.** It can, however, be traded for a truncation argument: Grimmett and Stirzaker's Exercise (7.4.5) derives the weak law for i.i.d. summands from $\mathbb{E}\lvert X_1\rvert < \infty$ alone, by truncating at $\delta n$ and applying Chebyshov's inequality to the truncated variables. So finite variance is a convenience for the proof given here, not a feature of the theorem.

**A finite mean cannot be dropped.** If $X_1, X_2, \dots$ are i.i.d. with the Cauchy density $1/\bigl(\pi(1+x^{2})\bigr)$, which has no mean, then the characteristic function of $U_n = n^{-1}S_n$ is
$$
\varphi_{U_n}(t) = \varphi(t/n)^{n} = \bigl(e^{-\lvert t\rvert/n}\bigr)^{n} = e^{-\lvert t\rvert} ,
$$
so $U_n$ has exactly the Cauchy distribution for every $n$. The average does not converge to anything: averaging a Cauchy sample is as noisy as taking one observation. Both laws fail, and the first condition of the weak-law criterion fails too, since $n\,\mathbb{P}(\lvert X_1\rvert > n) \to 2/\pi \ne 0$. This is a standing warning for heavy-tailed data in the physical sciences, where sample means of quantities with power-law tails of exponent $\le 1$ carry no information.

**The hypotheses of statement 2 are stronger than those of the weak law.** Folland's Exercise 11 asks for the implication: $\sum_n n^{-2}\sigma_n^{2} < \infty$ forces $n^{-2}\sum_{j \le n}\sigma_j^{2} \to 0$. So Kolmogorov's strong law has strictly more demanding hypotheses and a strictly stronger conclusion than the weak law proved above; neither statement subsumes the other by weakening one side only.

**The two laws really do differ.** By the criterion quoted in the statement, a symmetric distribution with $1 - F(x) \sim 1/(x\log x)$ obeys the weak law but has $\mathbb{E}\lvert X_1\rvert = \infty$, so by the sharp theorem it does not obey the strong law. A discrete example is Grimmett and Stirzaker's Exercise (7.4.1): independent $X_n$, $n \ge 2$, with $\mathbb{P}(X_n = \pm n) = 1/(2n\log n)$ and $\mathbb{P}(X_n = 0) = 1 - 1/(n\log n)$. Here $\sum_n \mathbb{P}(\lvert X_n\rvert = n) = \sum_n 1/(n\log n) = \infty$, and independence plus the second Borel-Cantelli lemma makes $\lvert X_n\rvert = n$ infinitely often almost surely.

**A sharper statement when the summands are bounded.** For indicators of independent events of common probability $p$, Bernstein's inequality (see :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}) gives $\mathbb{P}(\lvert n^{-1}S_n - p\rvert \ge \epsilon) \le 2e^{-n\epsilon^{2}/4}$, which is summable in $n$. Summing it from $m$ onwards and using Boole's inequality, Grimmett and Stirzaker deduce the uniform statement
$$
\mathbb{P}\Bigl( p - \epsilon \le \frac1n S_n \le p+\epsilon \ \text{ for all } n \ge m \Bigr) \ \longrightarrow \ 1 \qquad \text{as } m \to \infty ,
$$
which is almost sure convergence obtained directly, without truncation or subsequences. Whenever the summands are bounded, this exponential route is both shorter and quantitative.
:::

:::method[Using a law of large numbers in practice]{provenance=original}
1. **Check that the mean exists.** For i.i.d. data this is the whole hypothesis of the strong law. Heavy tails are the failure mode: if the tail of $\lvert X_1\rvert$ decays no faster than $x^{-1}$, stop — the sample mean is not estimating anything.
2. **Decide which conclusion you need.** For a statement about one long run, you need almost sure convergence, so quote statement 3. For a statement about the chance of error at a given sample size, the weak law's inequality $\mathbb{P}(\lvert \hat\mu_n - \mu\rvert \ge \epsilon) \le \sigma^{2}/(n\epsilon^{2})$ is what you want, because unlike the limit statements it carries a number.
3. **Size the sample from the inequality, not from the limit.** To get accuracy $\epsilon$ with confidence $1-\delta$, solve $\sigma^{2}/(n\epsilon^{2}) \le \delta$, that is $n \ge \sigma^{2}/(\delta\epsilon^{2})$. This holds for every distribution with variance $\sigma^2$.
4. **Expect that bound to be conservative, and say by how much.** It uses only two moments. If a normal approximation is defensible, :ref[The central limit theorem]{to=prob.central-limit-theorem} replaces $1/\delta$ by $z_{1-\delta/2}^{2}$, which for $\delta = 0.01$ is $2.576^{2} = 6.635$ instead of $100$ — a factor of about $15$ in the sample size. Quote the Chebyshov number when you must be distribution-free and the normal number when you need not be.
5. **If the summands are not identically distributed**, use the weak law in the form stated above with $n^{-2}\sum_j\sigma_j^{2}$, or Kolmogorov's strong law with $\sum_n \sigma_n^{2}/n^{2}$, and check the relevant series.
6. **If the summands are bounded**, prefer the exponential bound of step 4 of the previous remark: it gives a summable tail, hence almost sure convergence and a usable sample size in one stroke.
:::

:::example[How many Monte Carlo samples does an estimate of $\pi$ to within $0.01$ need?]{provenance=original}
Estimate $\pi$ by the classical hit-or-miss method. Draw independent pairs $(U_i, V_i)$ uniformly from the unit square $[0,1]^{2}$ and let

$$
X_i = \mathbf{1}\bigl\{U_i^{2} + V_i^{2} \le 1\bigr\} ,
$$

the indicator that the point falls inside the quarter disc. The $X_i$ are i.i.d. Bernoulli variables with

$$
\mu = \mathbb{E}(X_1) = \frac{\text{area of the quarter disc}}{\text{area of the square}} = \frac{\pi}{4} = 0.785398 ,
$$

so the estimator $\hat\pi_n = 4\,n^{-1}S_n$ has mean $\pi$. Since $X_1$ is bounded, every moment is finite and all three forms of the strong law apply: $\hat\pi_n \to \pi$ almost surely.

**Step 1: the variance of one sample.** For a Bernoulli variable, $\operatorname{var}(X_1) = \mu(1-\mu)$, so
$$
\sigma^{2} = \frac{\pi}{4}\Bigl(1 - \frac{\pi}{4}\Bigr) = 0.785398 \times 0.214602 = 0.168548 , \qquad \sigma = 0.410546 .
$$

**Step 2: the variance of the estimator.** The $X_i$ are independent, so by step 2 of the weak-law proof $\operatorname{var}(n^{-1}S_n) = \sigma^{2}/n$, and multiplying by $4$ multiplies the variance by $16$:
$$
\operatorname{var}(\hat\pi_n) = \frac{16\,\sigma^{2}}{n} = \frac{2.69677}{n} .
$$

**Step 3: the Chebyshov sample size.** We want $\mathbb{P}(\lvert\hat\pi_n - \pi\rvert \ge \epsilon) \le \delta$ with $\epsilon = 0.01$ and $\delta = 0.01$. An absolute error of $0.01$ in a quantity near $3.14$ is a relative error of about one part in three hundred; it pins down the second decimal place, not the third. (The third decimal, $\epsilon = 10^{-3}$, is priced in step 5, and costs a hundred times as much.) Chebyshov's inequality gives $\mathbb{P}(\lvert\hat\pi_n - \pi\rvert \ge \epsilon) \le 16\sigma^{2}/(n\epsilon^{2})$, so it is enough that
$$
n \ \ge \ \frac{16\sigma^{2}}{\delta\,\epsilon^{2}} = \frac{2.69677}{0.01 \times 10^{-4}} = 2.6968 \times 10^{6} .
$$
About **2.70 million** samples, guaranteed with no assumption whatever about the distribution beyond the variance just computed.

**Step 4: what the normal approximation would say.** Treating $\hat\pi_n$ as normal with standard deviation $4\sigma/\sqrt n$ and using the two-sided $99\%$ point $z = 2.57583$, the requirement $4\sigma z/\sqrt n \le \epsilon$ gives
$$
n \ \ge \ \Bigl(\frac{4 \times 0.410546 \times 2.57583}{0.01}\Bigr)^{2} = (422.998)^{2} = 1.78928 \times 10^{5} ,
$$
about **179 thousand** samples — a factor of $15.07$ fewer. That factor is exactly $\delta^{-1}/z^{2} = 100/6.635$, as predicted in step 4 of the method; it is the price of being distribution-free.

**Step 5: a sanity check on the rate.** Both numbers scale as $\epsilon^{-2}$: one more decimal place costs a hundred times the work. To get $\epsilon = 10^{-3}$ the Chebyshov figure becomes $2.70\times 10^{8}$. This $\sqrt{n}$ accuracy is the characteristic Monte Carlo rate and is set by the law of large numbers itself, not by the bound used to quantify it — which is why variance reduction, not more samples, is the practical route to precision.

**Step 6: what the strong law adds.** Nothing about the rate, and everything about the interpretation. The weak law and the numbers above describe a population of runs of length $n$. The strong law says that one run, extended indefinitely, has $\hat\pi_n \to \pi$ with probability $1$: there is a random but almost surely finite last time at which $\lvert \hat\pi_n - \pi\rvert$ exceeds $0.01$. Without the strong law one could not rule out a single run whose estimate re-excursions beyond $0.01$ at arbitrarily late times, which is exactly the behaviour of the sequence constructed in :ref[Convergence of random variables]{to=prob.convergence-random-variables}.
:::

:::application[Sample means, the equipartition of time, and why thermodynamics has sharp observables]{provenance=adapted src="folland-1999:§10.2, Exercise 17, p. 325 (the sample mean and sample variance, their unbiasedness and their almost sure limits); grimmett-stirzaker-2020:§5.10, Example (5.10.16) and Theorem (5.10.17), pp. 220-222 (recurrence of a mean-zero random walk from the law of large numbers)"}
**Statistics.** The sample mean $M_n = n^{-1}\sum_{j \le n} X_j$ and the sample variance $s_n^{2} = (n-1)^{-1}\sum_{j\le n}(X_j - M_n)^{2}$ of independent measurements of one quantity are unbiased, and both converge almost surely to $\mu$ and $\sigma^{2}$ by the strong law — the second by applying it to the sequence $X_j^{2}$ and combining limits. (This is Folland's Exercise 17, p. 325; the divisor $n-1$ rather than $n$ is what makes $s_n^2$ unbiased at finite $n$, and is irrelevant to the limit.) This is the theorem that makes the vocabulary of :ref[Estimators]{to=stats.estimators} meaningful: an estimator is useful because a law of large numbers applies to it.

**Monte Carlo integration.** To compute $I = \int_D f$, enclose $D$ in a region $R$ of known volume $V$, draw points $P_1, P_2, \dots$ uniformly in $R$, and average the values $g(P_i) = f(P_i)\mathbf{1}_{\{P_i \in D\}}$. A uniform point has density $1/V$ on $R$, so $\mathbb{E}\,g(P_1) = V^{-1}\int_D f = I/V$: the sample average converges almost surely to $I$ *divided* by the volume, and it is $V$ times the average that estimates $I$. The weak law's inequality says how fast. The $n^{-1/2}$ rate is independent of the dimension of $D$, which is the reason Monte Carlo methods beat grid-based quadrature in high dimensions despite their slow convergence in one.

**Statistical mechanics: why macroscopic observables are sharp.** A macroscopic sample contains of order $10^{23}$ molecules, and an extensive observable such as the total energy is a sum over them. If the molecular contributions are weakly enough correlated for the variance of the sum to be of order $N$ rather than $N^{2}$, the weak law gives relative fluctuations of order $N^{-1/2} \approx 3 \times 10^{-12}$ in the energy per particle. That is why temperature and pressure are *numbers* rather than distributions in thermodynamics: the law of large numbers has already collapsed the distribution. The condition "variance of the sum of order $N$" is exactly the hypothesis $n^{-2}\sum_j \sigma_j^{2} \to 0$ of the weak law stated above, and it is what fails at a critical point, where correlations become long-ranged, fluctuations become macroscopic and thermodynamic quantities stop being sharp.

**Ergodic theory.** The statement that a long time average along one trajectory equals a phase-space average is a law of large numbers for a dependent sequence. Birkhoff's ergodic theorem is its almost-sure form, and the i.i.d. strong law above is its simplest case. The practical reading is the same as in step 6 of the example: a single long molecular-dynamics run gives the right ensemble average, not merely one that is probably right.

**Recurrence of random walks.** Grimmett and Stirzaker use the law of large numbers to prove (Example (5.10.16) and Theorem (5.10.17), pp. 220-222) that a random walk on $\mathbb{Z}$ with independent identically distributed steps of mean $0$ is recurrent: because $\mathbb{P}(\lvert S_n\rvert \le n\epsilon) \to 1$, the walk spends a positive fraction of its time within $O(n\epsilon)$ of the origin, which forces the expected number of visits to the origin to diverge, and an infinite expected number of visits is incompatible with a positive probability of never returning. See :ref[Random walks]{to=prob.random-walks}.
:::
