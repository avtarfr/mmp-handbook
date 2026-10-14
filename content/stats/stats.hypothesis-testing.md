---
id: stats.hypothesis-testing
title: Hypothesis testing
kind: method
level: core
summary: Sets up null and alternative hypotheses, rejection regions, significance, power and the $p$-value, proves the Neyman-Pearson lemma, derives Student's $t$-test as a generalised likelihood-ratio test and gives the chi-squared goodness-of-fit test, with eight dark-current readings giving $t = 3.000$ and $p = 0.0199$ and five count bins giving $\chi^{2} = 4.625$ on four degrees of freedom.
prereqs: [stats.confidence-intervals, stats.sampling-distributions, stats.maximum-likelihood, stats.least-squares-regression, prob.central-limit-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.7.1 Simple and composite hypotheses, p. 1278: the null hypothesis $H_0$ specifying $P(x|H_0)$, the distinction between simple and composite hypotheses, the alternative $H_1$ as the complement of $H_0$ within an assumed hypothesis space, and the Gaussian illustrations $H_0: \\mu = 0$ against $H_1: \\mu \\neq 0$ and against $H_1: \\mu = 1$; §31.7.2 Statistical tests, pp. 1278-1280: the test statistic $t(x)$, its sampling distribution $P(t|H_0)$, the one-tailed rejection region (31.106) of probability $\\alpha$, the two-tailed variant, rejection and acceptance at significance level $\\alpha$, the error of the first kind, the error of the second kind with $\\beta = \\Pr(t < t_{\\mathrm{crit}}|H_1)$, and the naming of $1-\\beta$ as the power; §31.7.3 The Neyman-Pearson test, p. 1280: the lemma, quoted there without proof, that for a given $\\alpha$ the highest-power rejection region is given by the inequality (31.107) on $P(t|H_0)/P(t|H_1)$, the best scalar statistic (31.108) $t(x) = P(x|H_0)/P(x|H_1)$ with rejection region $t < t_{\\mathrm{crit}}$, the invariance of the test under monotonically increasing $f(t)$ and the reversal under decreasing $g(t)$, and the remark that both densities are rarely known explicitly; §31.7.4 The generalised likelihood-ratio test, pp. 1282-1284: the subspace $S$ of the parameter space $A$, the statistic (31.109) $t(x) = L(x;\\hat a_S)/L(x;\\hat a)$ lying in $[0,1]$, the simple-null special case (31.110), the rejection region $t < t_{\\mathrm{crit}}$, the reduction to Neyman-Pearson when $H_1$ is simple too, the worked Gaussian example with $v = -2\\ln t = N\\bar x^2$ following $\\chi^2$ of order 1, and the statement (not proved there) that for $H_0$ fixing $R$ of the $M$ parameters the quantity $-2\\ln t$ follows approximately a chi-squared distribution of order $R$ when $N$ is large; §31.7.5 Student's $t$-test, pp. 1284-1288: the hypotheses $H_0: \\mu = \\mu_0$ and $H_1: \\mu \\neq \\mu_0$ with $\\sigma^2$ unknown, the likelihood, the maximisers $\\mu = \\bar x$, $\\sigma^2 = s^2$ in $A$ and $\\sigma_c^2 = N^{-1}\\sum_i (x_i-\\mu_0)^2$ in $S$, the ratio (31.112), the identity $\\sum_i (x_i-\\mu_0)^2 = N(\\bar x - \\mu_0)^2 + \\sum_i (x_i - \\bar x)^2$, the resulting $\\lambda = [1+t^2/(N-1)]^{-N/2}$ with $t$ defined by (31.113), the two-tailed rejection region (31.114), the equivalent form (31.115), the $t$ density (31.118) with $N-1$ degrees of freedom and table 31.3 of its critical points; §31.7.6, eq. (31.122) and the following paragraph, p. 1292: $u = Ns^2/\\sigma_0^2 \\sim \\chi^2_{N-1}$ and the equal-area two-tailed rejection region; §31.7.7 Goodness of fit in least-squares problems, pp. 1296-1298: the hypotheses that the model is or is not correct, the least-squares $\\chi^2(a)$, the argument that $M$ linear constraints leave $\\chi^2(\\hat a)$ distributed as chi-squared with $N-M$ degrees of freedom with mean $N-M$ and variance $2(N-M)$, the expected range $(N-M)\\pm\\sqrt{2(N-M)}$, the readings of a very small and of a large value, the one-tailed rejection region (31.127), the worked straight-line example giving $\\chi^2 = 11.5$ against $k = 15.51$ at $n = 8$, and the closing warning that the analysis is valid only for models linear in the parameters; §30.9.4, eqs. (30.122)-(30.124), p. 1193: $\\chi^2_n$ as a sum of squared standardised Gaussians with mean $n$ and variance $2n$, and the reduction of the order by one for each linear constraint; table 31.2, p. 1244: percentage points of $\\chi^2_n$; table 31.3, p. 1288: critical points of Student's $t$"
    pages: "1193, 1244, 1278-1288, 1292, 1296-1298"
    role: the entire frequentist framework of this unit - hypotheses, test statistic, rejection region, the two kinds of error, significance and power; the statement of the Neyman-Pearson lemma and of the generalised likelihood-ratio test with its large-sample chi-squared law; the derivation of Student's $t$-test as a generalised likelihood-ratio test; the chi-squared goodness-of-fit test with its degrees-of-freedom count and the linearity hypothesis
  - work: arfken-2013
    loc: "§23.7 Statistics, subsection 'The $\\chi^2$ Distribution', pp. 1170-1173: the definition (23.99) of $\\chi^2 = \\sum_j [(u_j - u(t_j;a))/\\sigma_j]^2$ as the weighted sum of squared deviations to be minimised, the remark that it weights precise points more heavily, the two assumptions (that each standardised deviation is a standard normal variable and that (23.100) holds), the density (23.101) of the chi-squared distribution, the moment generating function (23.102) and the moments (23.103)-(23.104) giving mean $n$ and variance $2n$, and table 23.2, whose entries are the values exceeded with a given probability; Example 23.7.2, pp. 1173-1174: a weighted straight-line fit to three points giving $\\chi^2 = 4.533$ on two degrees of freedom, with the reading that this is well above the mean of the distribution and corresponds to a tail probability slightly above 0.1; the opening of §23.7, p. 1165: the definition of a statistical hypothesis as any assumption about an unknown probability distribution"
    pages: "1165, 1170-1174"
    role: the chi-squared statistic in the weighted-fit form used by physicists, its moments, and the practice of reading a fit by comparing $\chi^2$ with its expected value and its tail probability; the naming of a statistical hypothesis
---

:::note[What a test is, and what it is not]{provenance=original}
An interval estimate reports a range. A test answers a question with two allowed answers. The machinery is the same - a statistic, its sampling distribution, a tail probability - but the logic is deliberately asymmetric, and reading a test as though it were symmetric is the commonest misuse of statistics in the physical sciences.

The asymmetry is this. One hypothesis, the null, is specific enough to pin down the distribution of the data, so the behaviour of any statistic *under the null* can be computed. The test then asks a single question: is what we saw unremarkable under the null? If it is not, the null is rejected. If it is, nothing whatever has been proved - the data are merely consistent with the null, as they may also be with a hundred other hypotheses that were never considered. Arfken, Weber and Harris define a statistical hypothesis as any assumption about an unknown probability distribution, and that is all a null hypothesis ever is: an assumption put up to be knocked down.
:::

:::definition[Hypotheses, test statistic, rejection region, significance and power]{provenance=adapted src="rhb-2006:§31.7.1, p. 1278, and §31.7.2, pp. 1278-1280"}
A **hypothesis** about data $x$ specifies, in whole or in part, the distribution from which $x$ was drawn. It is **simple** if it determines that distribution uniquely, and **composite** if it fixes the functional form but leaves one or more parameters free. The hypothesis to be tested is the **null hypothesis** $H_0$, and the **alternative** $H_1$ is its complement within a hypothesis space fixed in advance, so that rejecting one is accepting the other. For a normal sample of known variance, $H_0 : \mu = 0$ is simple and the alternative $H_1 : \mu \neq 0$ is composite; if it were known beforehand that $\mu$ is either $0$ or $1$, then $H_1 : \mu = 1$ would be simple as well.

Take $H_0$ simple. A **test statistic** is a scalar function $t(x)$ of the data; since $H_0$ fixes the distribution of $x$, the sampling distribution $P(t \mid H_0)$ can in principle be computed. A **rejection region** (or critical region) is a set of values of $t$ carrying probability $\alpha$ under $H_0$:

$$
\Pr\bigl(t \in \mathcal{R} \mid H_0\bigr) = \alpha .
$$

It is **one-tailed** if it is of the form $t > t_{\mathrm{crit}}$ or $t < t_{\mathrm{crit}}$, and **two-tailed** if it consists of both extremes. If the observed $t$ falls in $\mathcal{R}$, then $H_0$ is **rejected at significance level $\alpha$**; otherwise it is accepted at that level. The complement of $\mathcal{R}$ is the **acceptance region**.

Two things can go wrong.

- An **error of the first kind** is rejecting $H_0$ when it is true. Its probability is $\alpha$, by construction; the significance level *is* the first-kind error rate.
- An **error of the second kind** is accepting $H_0$ when it is false. Its probability is $\beta = \Pr(t \notin \mathcal{R} \mid H_1)$, which can only be computed when $H_1$ is simple enough to determine $P(t \mid H_1)$. The quantity $1 - \beta$ is the **power** of the test: the probability of rejecting $H_0$ when the particular alternative is true.

Choosing $\alpha$ small makes false alarms rare and misses common. The two rates trade off against each other at fixed sample size, and only more data improves both.
:::

:::definition[The $p$-value]{provenance=original}
None of our sources uses the term, so we define it here in terms of theirs. Suppose the rejection region is the upper tail $t > t_{\mathrm{crit}}$, with $t_{\mathrm{crit}}$ a decreasing function of $\alpha$. Let $t_{\mathrm{obs}}$ be the observed value. The **$p$-value** is

$$
p \;=\; \Pr\bigl(t \ge t_{\mathrm{obs}} \mid H_0\bigr) ,
$$

the probability, computed under the null, of a result at least as extreme as the one obtained. For a two-tailed region symmetric about zero the definition reads $p = \Pr(|t| \ge |t_{\mathrm{obs}}| \mid H_0)$.

Its meaning is a matter of bookkeeping: $H_0$ is rejected at level $\alpha$ precisely when $p \le \alpha$, so $p$ is the smallest significance level at which the data reject the null. Reporting $p$ therefore reports the outcome of the test at *every* level at once, which is why it is preferred to the bare verdict "rejected at 5%". It is emphatically **not** the probability that $H_0$ is true: that number does not exist until a prior is supplied, as in :ref[]{to=stats.bayesian-inference}.
:::

:::statement[The Neyman-Pearson lemma]{provenance=adapted src="rhb-2006:§31.7.3, eqs. (31.107)-(31.108), p. 1280"}
Let $H_0$ and $H_1$ both be simple, with densities $P_0$ and $P_1$ for the data $x$. Fix a constant $c > 0$ and let

$$
\mathcal{R}_c \;=\; \bigl\{\, x : P_0(x) < c\,P_1(x) \,\bigr\} ,
$$

and suppose $c$ is chosen so that $\Pr(x \in \mathcal{R}_c \mid H_0) = \alpha$ and the boundary set $\{P_0 = cP_1\}$ has probability zero under both hypotheses. Then $\mathcal{R}_c$ has the greatest power among all rejection regions of size at most $\alpha$: for every region $\mathcal{R}'$ with $\Pr(\mathcal{R}' \mid H_0) \le \alpha$,

$$
\Pr\bigl(\mathcal{R}_c \mid H_1\bigr) \;\ge\; \Pr\bigl(\mathcal{R}' \mid H_1\bigr) .
$$

Equivalently, the best scalar test statistic is the **likelihood ratio**

$$
\Lambda(x) \;=\; \frac{P_0(x)}{P_1(x)} ,
$$

with rejection region $\Lambda < \Lambda_{\mathrm{crit}}$. Any monotonically increasing function $u = f(\Lambda)$ serves equally well, with region $u < f(\Lambda_{\mathrm{crit}})$; any monotonically decreasing $v = g(\Lambda)$ serves with the region reversed, $v > g(\Lambda_{\mathrm{crit}})$. This is the form in which the lemma is used, because a monotone rewriting usually turns $\Lambda$ into a statistic whose distribution is tabulated.

Riley, Hobson and Bence state the lemma without proof and give the best statistic as $\Lambda$ with rejection region $\Lambda < \Lambda_{\mathrm{crit}}$, which is the version above and the one used in all their worked examples. Their accompanying inequality (31.107) is printed with the ratio $P(t|H_0)/P(t|H_1)$ *greater* than a constant in the rejection region; we follow their (31.108), and the difference is recorded in the handbook's list of source discrepancies.
:::

:::statement[The generalised likelihood-ratio test]{provenance=adapted src="rhb-2006:§31.7.4, eqs. (31.109)-(31.110) and the large-sample statement on p. 1284, pp. 1282-1284; rhb-2006:§31.7.5, eqs. (31.112)-(31.114), pp. 1284-1285"}
Let the data be drawn from a population $P(x \mid a)$ of known functional form depending on parameters $a = (a_1, \dots, a_M)$, with likelihood $L(x; a)$ as in :ref[]{to=stats.maximum-likelihood}. Let $H_0$ assert that $a$ lies in a subspace $S$ of the full parameter space $A$, and $H_1$ that it does not. Write $\hat a$ for the maximum-likelihood estimate over $A$ and $\hat a_S$ for the maximiser over $S$ alone. The **generalised likelihood ratio** is

$$
\lambda(x) \;=\; \frac{L(x; \hat a_S)}{L(x; \hat a)} .
$$

1. $\lambda$ depends only on the data, and $0 \le \lambda \le 1$, since $S \subseteq A$. The rejection region is $\lambda < \lambda_{\mathrm{crit}}$: a value near $1$ says the restricted model fits nearly as well as the free one, a small value says it does not. When $H_1$ is also simple, $\lambda$ reduces to the Neyman-Pearson ratio.
2. **Large-sample law (Wilks).** If $H_0$ fixes $R$ of the $M$ parameters at given values, $R \le M$, then for large sample size $N$ the quantity $-2\ln\lambda$ follows approximately a chi-squared distribution of order $R$. Riley, Hobson and Bence state this without proof.
3. **Student's $t$-test.** For a sample of size $N$ from $N(\mu, \sigma^{2})$ with both parameters unknown, and $H_0 : \mu = \mu_0$ against $H_1 : \mu \neq \mu_0$ with $\sigma^{2}$ free under both,

$$
\lambda \;=\; \left(1 + \frac{t^{2}}{N-1}\right)^{-N/2} ,
\qquad
t \;=\; \frac{\overline x - \mu_0}{S/\sqrt N} ,
\qquad
S^{2} = \frac{1}{N-1}\sum_{i}(x_i - \overline x)^{2} ,
$$

and $t \sim t(N-1)$ under $H_0$. Since $\lambda$ is a decreasing function of $t^{2}$, the rejection region $\lambda < \lambda_{\mathrm{crit}}$ is the two-tailed region $|t| > t_{\mathrm{crit}}$, with $t_{\mathrm{crit}} = t_{N-1,\,1-\alpha/2}$ for significance $\alpha$.
:::

:::idea{provenance=original}
The Neyman-Pearson lemma is a budgeting argument. A rejection region is a set of outcomes bought with a budget $\alpha$ of null-hypothesis probability; the aim is to buy as much alternative-hypothesis probability as the budget allows. An outcome $x$ costs $P_0(x)$ and pays $P_1(x)$, so the outcomes worth buying are those with the best pay-to-cost ratio - and buying everything down to a fixed exchange rate $c$, which is exactly the region $P_0 < cP_1$, is optimal. The proof below is this argument with the regions compared term by term.

The generalised ratio extends the idea to the usual situation in which the alternative is a whole family: compare the best fit the null allows with the best fit possible, and reject when restricting the model costs too much likelihood. Student's $t$-test is nothing but this comparison for a normal sample, rearranged until the statistic is one whose distribution is in a table.
:::

:::proof[The lemma, and the $t$-test as a special case]{provenance=original}
**1. The Neyman-Pearson lemma.** Let $\mathcal{R} = \mathcal{R}_c$ and let $\mathcal{R}'$ be any region with $\Pr(\mathcal{R}' \mid H_0) \le \alpha$. Write $\Pr_j(\cdot)$ for probability computed with the density $P_j$. Splitting each region into its common and exclusive parts, $\mathcal{R} = (\mathcal{R}\cap\mathcal{R}') \cup (\mathcal{R}\setminus\mathcal{R}')$ and likewise for $\mathcal{R}'$, the shared piece cancels from every difference, so

$$
\Pr\nolimits_1(\mathcal{R}) - \Pr\nolimits_1(\mathcal{R}')
= \Pr\nolimits_1(\mathcal{R}\setminus\mathcal{R}') - \Pr\nolimits_1(\mathcal{R}'\setminus\mathcal{R}) .
$$

On $\mathcal{R}\setminus\mathcal{R}'$ we are inside $\mathcal{R}$, where **the defining inequality** $P_0 < cP_1$ holds, so $P_1 > P_0/c$ pointwise and therefore

$$
\Pr\nolimits_1(\mathcal{R}\setminus\mathcal{R}') \;\ge\; \frac1c \Pr\nolimits_0(\mathcal{R}\setminus\mathcal{R}') .
$$

On $\mathcal{R}'\setminus\mathcal{R}$ we are outside $\mathcal{R}$, where $P_0 \ge cP_1$, so $P_1 \le P_0/c$ and

$$
\Pr\nolimits_1(\mathcal{R}'\setminus\mathcal{R}) \;\le\; \frac1c \Pr\nolimits_0(\mathcal{R}'\setminus\mathcal{R}) .
$$

Subtracting the second from the first and reversing the cancellation of the shared piece,

$$
\Pr\nolimits_1(\mathcal{R}) - \Pr\nolimits_1(\mathcal{R}')
\;\ge\; \frac1c\Bigl[\Pr\nolimits_0(\mathcal{R}) - \Pr\nolimits_0(\mathcal{R}')\Bigr]
\;=\; \frac{1}{c}\bigl[\alpha - \Pr\nolimits_0(\mathcal{R}')\bigr] \;\ge\; 0 ,
$$

the last step because $c > 0$ and $\Pr_0(\mathcal{R}') \le \alpha$ by hypothesis. That is the claim. The reformulation in terms of $\Lambda$ is immediate: $\mathcal{R}_c = \{\Lambda < c\}$. A monotonically increasing $f$ preserves the ordering of $\Lambda$ and so maps this set to $\{f(\Lambda) < f(c)\}$, which is the same set of outcomes; a decreasing $g$ reverses it.

**2. The $t$-test is a generalised likelihood-ratio test.** For a normal sample the likelihood is

$$
L(x; \mu, \sigma^{2}) = (2\pi\sigma^{2})^{-N/2}\exp\left[-\frac{1}{2\sigma^{2}}\sum_{i=1}^{N}(x_i-\mu)^{2}\right] .
$$

Over the whole parameter space the maximisers are $\hat\mu = \overline x$ and $\hat\sigma^{2} = N^{-1}\sum_i (x_i-\overline x)^{2}$, as computed in :ref[]{to=stats.maximum-likelihood}. Over the subspace $\mu = \mu_0$ only $\sigma^{2}$ is free, and the same calculation with $\overline x$ replaced by the fixed $\mu_0$ gives $\hat\sigma_S^{2} = N^{-1}\sum_i (x_i - \mu_0)^{2}$. At either maximiser the exponent evaluates to $-N/2$, because the fitted variance is exactly the mean squared residual; so the exponentials cancel in the ratio and

$$
\lambda = \left(\frac{\hat\sigma_S^{2}}{\hat\sigma^{2}}\right)^{-N/2}
= \left[\frac{\sum_i (x_i-\mu_0)^{2}}{\sum_i (x_i-\overline x)^{2}}\right]^{-N/2} .
$$

Now expand about the sample mean: writing $x_i - \mu_0 = (x_i - \overline x) + (\overline x - \mu_0)$ and squaring, the cross term is $2(\overline x - \mu_0)\sum_i (x_i-\overline x) = 0$, so

$$
\sum_i (x_i-\mu_0)^{2} = \sum_i (x_i-\overline x)^{2} + N(\overline x - \mu_0)^{2} .
$$

Dividing through by $\sum_i (x_i - \overline x)^{2} = (N-1)S^{2}$ turns the bracket into $1 + N(\overline x-\mu_0)^{2}/[(N-1)S^{2}]$, and the second term is $t^{2}/(N-1)$ with $t$ as defined. Hence $\lambda = [1+t^{2}/(N-1)]^{-N/2}$. The map $t^{2} \mapsto \lambda$ is strictly decreasing, so $\lambda < \lambda_{\mathrm{crit}}$ is the same event as $t^{2} > c$, that is $|t| > t_{\mathrm{crit}}$. Finally, under $H_0$ the statistic $t$ is exactly the pivot of :ref[]{to=stats.confidence-intervals}, distributed as $t(N-1)$ by :ref[]{to=stats.sampling-distributions}. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Both hypotheses simple, in the lemma.** The proof compares two fixed densities pointwise. If $H_1$ is composite, $P_1$ is not defined, the power is a function of the alternative rather than a number, and no region is best against all alternatives at once. (A test that is best against every alternative in a family does sometimes exist - for a one-sided normal mean, for instance - but that is a theorem about the family, not a consequence of the lemma.)

**The boundary has probability zero.** If $\Pr(\Lambda = c) > 0$ - which happens for discrete data, where the attainable sizes form a finite set - no region has size exactly $\alpha$, and the optimal test must randomise on the boundary. For continuous data the assumption is automatic.

**$H_0$ simple, in the definition of the test.** Everything rests on being able to compute $P(t \mid H_0)$. A composite null leaves that distribution undetermined; the usual repairs are to maximise the $p$-value over the null (conservative) or to eliminate the nuisance parameter, which is precisely what the $t$-test does with $\sigma$.

**Normality and independence, in the $t$-test.** Normality enters twice: in writing the likelihood, and in the claim $t \sim t(N-1)$, which needs the independence of $\overline X$ and $S^{2}$ special to the normal law. Independence of the observations enters in factorising the likelihood. For a large sample the central limit theorem makes the test approximately valid for any parent of finite variance; for a small sample from a heavy-tailed parent it is not valid at all.

**Large $N$, in the Wilks approximation.** The chi-squared law for $-2\ln\lambda$ is asymptotic. The worked example below shows how rough it can be: at $N = 8$ it returns $p = 0.0101$ where the exact $t$ calculation gives $0.0199$, too small by a factor of two, and too small is the dangerous direction.

**Linearity in the parameters, in the goodness-of-fit test.** The count of degrees of freedom as $N-M$ comes from the fitted parameters imposing $M$ *linear* constraints on the standardised residuals, which is Riley, Hobson and Bence's constraint-counting rule applied to the normal equations. For a model non-linear in its parameters the constraints are non-linear and the chi-squared law is only approximate; those authors note that the test is used anyway when the non-linearity is mild.

**The region is fixed before the data are seen.** Every probability above is computed over hypothetical repetitions with the rejection region held fixed. Choosing the region, the tail, or the number of data points after looking at the data destroys the meaning of $\alpha$, and nothing in the mathematics detects that this has happened.
:::

:::remark[Reading the verdict honestly]{provenance=original}
**"Accept $H_0$" means "no evidence against $H_0$".** A test has power against some alternatives and almost none against others; failing to reject a constant-rate hypothesis with four degrees of freedom says little about a 2% drift. A non-rejection should always be accompanied by the power of the test against an alternative the experiment actually cares about, or by the confidence interval, which displays the whole set of values not rejected.

**A $p$-value is not a posterior probability.** $p = 0.02$ does not mean $H_0$ has probability $0.02$; it means that data as extreme as these arise two times in a hundred when $H_0$ holds. Small $p$-values are produced not only by a false null but also by an incorrect error model, by correlated data treated as independent, and by stopping the experiment when the answer looked good.

**Many tests, many false alarms.** Twenty independent tests at the 5% level produce on average one rejection when every null is true. A search over a hundred bins, a hundred frequencies or a hundred candidate predictors must correct the threshold accordingly; the particle physicists' five-sigma convention, $p \approx 6 \times 10^{-7}$, is in large part such a correction.

**Statistical significance is not size.** With enough data, any effect at all - including an instrumental offset of no physical interest - becomes significant. Report the estimate and its interval alongside the test, and say whether the size of the effect matters.
:::

:::method[Running a test]{provenance=original}
1. State $H_0$ precisely enough to determine the distribution of the data, and say what the alternative is. Decide one-tailed or two-tailed from the alternative, not from the data.
2. Choose the statistic. If both hypotheses are simple, the likelihood ratio is optimal by the lemma; otherwise use the generalised ratio $\lambda$, and rewrite it monotonically into a tabulated statistic if one exists.
3. Obtain $P(t \mid H_0)$: exactly where possible (normal, $t$, $\chi^{2}$, $F$ from :ref[]{to=stats.sampling-distributions}), by the Wilks approximation for large samples, or by simulating the null.
4. Fix the significance level $\alpha$ and hence the rejection region, **before** computing the statistic.
5. Compute the statistic from the data and report the $p$-value as well as the verdict.
6. If the null is not rejected, state the power against an alternative of interest, or quote the confidence interval instead.
:::

:::method[The chi-squared goodness-of-fit test]{provenance=adapted src="rhb-2006:§31.7.7, the construction of the test and eq. (31.127), pp. 1296-1298; rhb-2006:§30.9.4, eq. (30.124) and the constraint-counting rule, p. 1193; arfken-2013:§23.7, eq. (23.99) and the moments (23.103)-(23.104), pp. 1170-1172"}
This tests $H_0 :$ "the model is correct" against the vague alternative that it is not, so no likelihood ratio is available; instead the residuals themselves are the statistic.

1. **Fit.** With measurements $y_i$ at known $x_i$, independent and normally distributed about the model value $f(x_i; a)$ with known standard deviations $\sigma_i$, estimate the $M$ parameters by minimising

$$
\chi^{2}(a) \;=\; \sum_{i=1}^{N}\left[\frac{y_i - f(x_i; a)}{\sigma_i}\right]^{2} ,
$$

as in :ref[]{to=stats.least-squares-regression}. Arfken, Weber and Harris emphasise that the weights $1/\sigma_i^{2}$ are what make each term a squared standard normal variable, and so make the sum a chi-squared variable.
2. **Count the degrees of freedom.** If $f$ is linear in $a$, the $M$ normal equations are $M$ linear constraints on the $N$ standardised residuals, so by the constraint-counting rule the minimum value $\chi^{2}(\hat a)$ is distributed as $\chi^{2}(N-M)$. Hence $\mathbb{E}[\chi^{2}(\hat a)] = N-M$ and $\operatorname{var}[\chi^{2}(\hat a)] = 2(N-M)$.
3. **Compare.** A value in the range $(N-M) \pm \sqrt{2(N-M)}$ is unremarkable. Equivalently the **reduced chi-squared** $\chi^{2}/(N-M)$ should be near $1$.
4. **Test.** For significance $\alpha$ take the one-tailed region $\chi^{2}(\hat a) > k$, with $k$ the $1-\alpha$ quantile of $\chi^{2}(N-M)$, tabulated in table 31.2 of Riley, Hobson and Bence and table 23.2 of Arfken, Weber and Harris. A large value says the model is wrong, or the quoted $\sigma_i$ are too small. A conspicuously *small* value is also a signal: either too many adjustable parameters are soaking up the scatter, or the error bars have been overstated.
5. **Counts in bins.** When the data are counts $n_i$ in $k$ bins with expected counts $e_i$ predicted by the model, the Poisson law of :ref[]{to=prob.random-variables} makes the variance of each count equal to its mean, so $\sigma_i^{2} = e_i$ and the statistic becomes

$$
\chi^{2} \;=\; \sum_{i=1}^{k}\frac{(n_i - e_i)^{2}}{e_i} .
$$

Each count must be large enough for the normal approximation to the Poisson distribution to hold - a working rule is $e_i \gtrsim 5$ - and the degrees of freedom are $k - 1 - m$, one subtracted because the predicted total is matched to the observed total and $m$ more for parameters estimated from the same data. This binned form is our own assembly of the two cited ingredients, not a formula taken from either book.
:::

:::example[Eight dark-current readings: a $t$-test, its $p$-value and its power]{provenance=original}
A photodiode's dark current is measured on eight separate occasions, giving (in pA)

$$
12.9,\; 11.8,\; 13.4,\; 12.2,\; 13.1,\; 12.5,\; 12.0,\; 12.9 .
$$

The manufacturer specifies $12.0$ pA. Test $H_0 : \mu = 12.0$ against $H_1 : \mu \neq 12.0$ at the 5% level, treating the readings as independent and normal with unknown variance.

**Step 1: the statistic.** The eight values sum to $100.8$, so $\overline x = 12.600$. The deviations are

$$
0.3,\; -0.8,\; 0.8,\; -0.4,\; 0.5,\; -0.1,\; -0.6,\; 0.3 ,
$$

summing to zero, with squares summing to

$$
\sum_i (x_i-\overline x)^{2} = 0.09+0.64+0.64+0.16+0.25+0.01+0.36+0.09 = 2.24 .
$$

Hence $S^{2} = 2.24/7 = 0.32$, $S = 0.565685$, and the standard error is $S/\sqrt 8 = \sqrt{0.32/8} = \sqrt{0.04} = 0.200$ exactly. Therefore

$$
t = \frac{12.600 - 12.000}{0.200} = 3.000 .
$$

**Step 2: the verdict.** With $N - 1 = 7$ degrees of freedom and $\alpha = 0.05$, the two-tailed critical value is $t_{7,0.975} = 2.3646$. Since $|t| = 3.000 > 2.3646$, reject $H_0$ at the 5% level. At the 1% level the critical value is $t_{7,0.995} = 3.4995$, and $H_0$ would not be rejected; the $p$-value therefore lies between $0.01$ and $0.05$, and numerically

$$
p = 2\Pr\bigl(t(7) \ge 3.000\bigr) = 0.0199 .
$$

**Step 3: the same test as a likelihood ratio.** By item 3 of the statement above,

$$
\lambda = \left(1 + \frac{9}{7}\right)^{-4} = \left(\frac{16}{7}\right)^{-4} = \frac{2401}{65536} = 0.036636 ,
$$

so $-2\ln\lambda = 8\ln(16/7) = 6.6134$. The null fixes $R = 1$ of the two parameters, so the Wilks approximation compares this with $\chi^{2}(1)$, whose upper tail at $6.6134$ is $0.0101$. The exact answer is $0.0199$: at $N = 8$ the asymptotic law overstates the evidence by a factor of two, and the exact $t$ calculation is the one to use.

**Step 4: the power.** Suppose the quantity of interest is a dark current of $12.5$ pA or more, and treat $\sigma = 0.5657$ as known so that the normal one-tailed test applies. The 5% rejection region is $\overline x > 12.0 + 1.64485 \times 0.200 = 12.3290$. Under $\mu = 12.5$ the sample mean is $N(12.5, 0.200^{2})$, so

$$
1 - \beta = \Pr\left(Z > \frac{12.3290 - 12.5}{0.200}\right) = \Pr(Z > -0.8551) = \Phi(0.8551) = 0.804 .
$$

The test misses a true $12.5$ pA diode about one time in five. That is the number to quote when a test fails to reject.
:::

:::example[Five count bins: a goodness-of-fit test]{provenance=original}
A scintillator counts cosmic-ray muons in five consecutive ten-minute intervals, recording

$$
91,\; 72,\; 85,\; 68,\; 84 ,
$$

a total of $400$ counts. Test the hypothesis that the rate is constant over the fifty minutes, at the 5% level.

**Step 1: the expected counts.** The rate itself is not predicted, only its constancy, so the expectation in each bin is the observed total shared equally: $e_i = 400/5 = 80$ for each $i$. Each $e_i$ is comfortably above $5$, so the binned form of the statistic applies.

**Step 2: the statistic.** The residuals are $11, -8, 5, -12, 4$, which sum to zero because the total was matched. Their squares are $121, 64, 25, 144, 16$, summing to $370$, so

$$
\chi^{2} = \frac{370}{80} = 4.625 .
$$

**Step 3: the degrees of freedom and the verdict.** There are $k = 5$ bins, one constraint from matching the total and no further fitted parameters, so $k - 1 = 4$ degrees of freedom. The reduced chi-squared is $4.625/4 = 1.156$, and the expected range is $4 \pm \sqrt 8 = 4 \pm 2.83$, which contains $4.625$ comfortably. The 5% critical value is $\chi^{2}_{4,0.95} = 9.488$; since $4.625 < 9.488$, the hypothesis of a constant rate is not rejected. The $p$-value is

$$
p = \Pr\bigl(\chi^{2}(4) \ge 4.625\bigr) = 0.328 .
$$

**Step 4: what has and has not been shown.** The data are consistent with a constant rate. They are also consistent with a slow drift: the largest count is in the first bin and the smallest in the fourth, and a dedicated test against a linear trend - one parameter, one degree of freedom - would have more power against that specific alternative than this omnibus test, which spreads its four degrees of freedom over every possible departure from flatness.
:::

:::application[Where tests are used, and where they are abused]{provenance=original}
**Discovery claims.** A new particle, an exoplanet transit or a gravitational-wave event is announced as the rejection of a background-only null hypothesis. The test statistic is almost always a likelihood ratio, justified by the lemma above, and the threshold is set far beyond the conventional 5% precisely because the search ranges over many masses, periods or templates.

**Instrument and model validation.** The reduced chi-squared of a calibration fit is the routine health check of an experiment: near $1$, the model and the error bars are both credible; much above $1$, one of them is wrong; much below $1$, the error bars have been inflated or the model over-parametrised. Arfken, Weber and Harris read their three-point fit exactly this way, reporting $\chi^{2} = 4.533$ against an expectation of $2$ and a tail probability just above $0.1$.

**Comparing two samples.** Asking whether two materials, two detectors or two model runs differ in mean is a $t$-test; whether they differ in spread is the $F$-test built on the variance ratio of :ref[]{to=stats.sampling-distributions}. In climate work the same machinery, applied to a detection-and-attribution fingerprint, is how a forced signal is distinguished from internal variability.

**Model selection in fitting.** Adding a parameter to a fit always lowers $\chi^{2}$; the question is whether it lowers it by more than the one degree of freedom it costs. The generalised likelihood-ratio test with $R = 1$, compared against $\chi^{2}(1)$, is the standard answer, and the usual reason a spectral line or an extra exponential component is or is not claimed.
:::
