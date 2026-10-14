---
id: stats.confidence-intervals
title: Confidence intervals
kind: method
level: core
summary: Builds interval estimates by the pivotal method, gives the exact normal-sample intervals for a mean (known and unknown variance) and for a variance, says precisely what the confidence level asserts and what it does not, and works nine speed-of-sound readings to $\mu \in [342.62, 344.18]\,\mathrm{m\,s^{-1}}$ and $\sigma \in [0.684, 1.940]\,\mathrm{m\,s^{-1}}$ at the 95% level.
prereqs: [stats.sampling-distributions, stats.estimators, prob.random-variables, prob.expectation-variance, prob.central-limit-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.3.4 Confidence limits on estimators, pp. 1235-1237: the construction of $\\hat a_\\alpha(a)$ and $\\hat a_\\beta(a)$ from the sampling distribution $P(\\hat a|a)$ by eqs. (31.25)-(31.26), the monotonicity assumption on $\\hat a_\\alpha$ and $\\hat a_\\beta$, the definition of $a_-$ and $a_+$ by $\\hat a_\\alpha(a_+) = \\hat a_{\\mathrm{obs}} = \\hat a_\\beta(a_-)$, eq. (31.27) $\\Pr(a_- < a < a_+) = 1-\\alpha-\\beta$, the naming of the confidence interval and of the lower and upper confidence limits, the solving equations (31.28)-(31.29), the one-sided variant, and the statement that $a_\\pm$ are random variables whose interval covers the true value in a fraction $1-\\alpha-\\beta$ of repeated samples; §31.3.5 Confidence limits for a Gaussian sampling distribution, pp. 1238-1239: the Gaussian sampling distribution (31.30), the inversion (31.31)-(31.32) $a_\\mp = \\hat a_{\\mathrm{obs}} \\mp \\sigma_{\\hat a}\\Phi^{-1}(1-\\beta\\ \\text{or}\\ 1-\\alpha)$, the identity $\\Phi^{-1}(\\alpha) = -\\Phi^{-1}(1-\\alpha)$, the central case $\\alpha=\\beta$, and the computation that quoting $a = \\hat a \\pm \\sigma_{\\hat a}$ is the $68.3\\%$ central interval; the remark that an estimated $\\hat\\sigma_{\\hat a}$ may be substituted when $\\sigma_{\\hat a}$ is unknown and that for a Gaussian population an exact interval for $\\mu$ at any $N$ follows from Student's $t$; §31.3.6, eqs. (31.38)-(31.39) and figure 31.4, pp. 1242-1243: the large-sample multivariate Gaussian $P(\\hat a|a)$, the quadratic form $Q(\\hat a,a) = (\\hat a - a)^{\\mathsf T}V^{-1}(\\hat a - a)$, its $\\chi^2_M$ distribution and the ellipsoidal confidence region $Q(a,\\hat a_{\\mathrm{obs}}) = c$; §31.7.5, eqs. (31.113), (31.115) and the paragraph after table 31.3, pp. 1285-1288: the statistic $t = (\\bar x - \\mu_0)/(s/\\sqrt{N-1})$, its equivalent form $(\\bar x - \\mu_0)/(\\hat\\sigma/\\sqrt N)$ with $\\hat\\sigma^2 = Ns^2/(N-1)$, the density (31.118) of Student's $t$ with $N-1$ degrees of freedom, table 31.3 of critical points of $C_n(t)$, and the inversion of the two-tailed $t$-test into the central confidence interval $\\bar x \\pm t_{\\mathrm{crit}} s/\\sqrt{N-1}$ with the numerical value $0.49 < \\mu < 1.73$; §31.7.6, eq. (31.122) and the paragraph following it, p. 1292: the sampling distribution of $s^2$, the result $u = Ns^2/\\sigma_0^2 \\sim \\chi^2_{N-1}$, the equal-area choice of the two tails and the remark that it does not give quite the best region; table 31.2, p. 1244: percentage points of $\\chi^2_n$"
    pages: "1235-1239, 1242-1244, 1285-1288, 1292"
    role: the general definition of a confidence interval and of the confidence level, with the construction from the sampling distribution and its monotonicity hypothesis; the Gaussian inversion and the identification of the one-sigma error bar with 68.3% confidence; the exact $t$ interval for the mean of a normal sample and the $\chi^2$ law of the sample variance from which we invert the interval for $\sigma^2$; the equal-tail convention; the multi-parameter confidence ellipsoid
  - work: arfken-2013
    loc: "§23.7 Statistics, subsection 'Confidence Intervals', pp. 1176-1178: the description of a confidence interval as the range containing a chosen fraction $p$ of the probability, usually written $x = x_0 \\pm dx$ with $(100p)\\%$ confidence; the naming of the pivotal method and the use of the $t$ distribution as the pivot for a normal variable of unknown variance; eq. (23.116) $Y = \\bar X - \\mu = T\\sqrt{S/n}/\\sqrt n$ with $S$ evaluated from the data; the symmetric range $P(-C_p < t < C_p) = p$ and eq. (23.117) $\\hat p = (1+p)/2$; table 23.3 of $t$ critical values; eq. (23.118) $\\mu = \\bar x - T\\sigma/\\sqrt n$; the instruction that $n$ data points call for the $t$ distribution with $n-1$ degrees of freedom and that $\\sigma$ be taken as the sample standard deviation of eq. (23.95); Example 23.7.3, which from six readings reports $\\mu = 5.885 \\pm 1.720$ at 90% and $\\mu = 5.885 \\pm 2.188$ at 95%, and the closing observations that a higher confidence level widens the interval and that the interval is itself sample-dependent; eq. (23.95), p. 1168: the sample standard deviation with divisor $n-1$"
    pages: "1168, 1176-1178"
    role: the pivotal method as the organising idea of the unit, the symmetric two-tailed calibration of the pivot, and the warnings that confidence intervals widen with the level demanded and vary from sample to sample; also the second form of the $t$ interval discussed in the remark on conventions
---

:::note[What an interval estimate is for]{provenance=original}
A point estimate answers the question "what is the value?" and is almost always wrong: a continuous parameter is hit with probability zero. An interval estimate answers the more honest question "what range is consistent with the data, and at what rate does a procedure of this kind succeed?" The machinery for producing such a range is the sampling distribution of :ref[]{to=stats.sampling-distributions}, used backwards. Forwards, it says where the estimator lands when the parameter is known; backwards, it says which parameter values would have made the observed estimate unremarkable.

Everything in this unit is a frequentist construction: the *interval* is random and the parameter is fixed. The rival construction, in which the parameter is given a distribution and the interval is read off it, is :ref[Bayesian inference]{to=stats.bayesian-inference}; the two agree numerically far more often than they agree in meaning.
:::

:::definition[Quantiles, and the notation used below]{provenance=original}
For a random variable with a continuous, strictly increasing distribution function $F$ and for $0 < p < 1$, the **$p$-quantile** is the unique number $q$ with $F(q) = p$. We write

$$
z_p = \Phi^{-1}(p), \qquad t_{\nu,p}, \qquad \chi^{2}_{\nu,p}
$$

for the $p$-quantiles of, respectively, the standard normal distribution, Student's $t$ on $\nu$ degrees of freedom and the chi-squared distribution on $\nu$ degrees of freedom, all three defined in :ref[]{to=stats.sampling-distributions}. Symmetry of the first two gives $z_{1-p} = -z_p$ and $t_{\nu,1-p} = -t_{\nu,p}$; the chi-squared distribution is not symmetric, and its two tails must be looked up separately. The numbers used below are $z_{0.975} = 1.95996$, $t_{8,0.975} = 2.30600$, $\chi^{2}_{8,0.025} = 2.17973$ and $\chi^{2}_{8,0.975} = 17.53455$. Riley, Hobson and Bence tabulate the last two families in their tables 31.3 and 31.2.
:::

:::definition[Confidence interval, confidence level, confidence limits]{provenance=adapted src="rhb-2006:§31.3.4, eqs. (31.25)-(31.29) and the naming paragraph, pp. 1235-1237"}
Let the data $x$ come from a population depending on one unknown parameter $a$, all other parameters being known, and let $\hat a$ be an estimator of $a$ with sampling distribution $P(\hat a \mid a)$. Fix two tail probabilities $\alpha, \beta \ge 0$ with $\alpha + \beta < 1$. For each value of $a$, Riley, Hobson and Bence define the two cut points $\hat a_\alpha(a)$ and $\hat a_\beta(a)$ by

$$
\Pr\bigl(\hat a < \hat a_\alpha(a) \mid a\bigr) = \alpha ,
\qquad
\Pr\bigl(\hat a > \hat a_\beta(a) \mid a\bigr) = \beta ,
$$

so that $\hat a$ falls between them with probability $1 - \alpha - \beta$. **Assume both cut points are increasing functions of $a$** - which is what "$\hat a$ estimates $a$" ought to mean, and which is needed for the next line. Then, given the observed value $\hat a_{\mathrm{obs}}$, the two equations

$$
\hat a_\alpha(a_+) = \hat a_{\mathrm{obs}} , \qquad \hat a_\beta(a_-) = \hat a_{\mathrm{obs}}
$$

have unique solutions $a_-$ and $a_+$, and they satisfy

$$
\Pr(a_- < a < a_+) \;=\; 1 - \alpha - \beta .
$$

The random interval $[a_-, a_+]$ is the **confidence interval** on $a$ at **confidence level** $1 - \alpha - \beta$ (usually quoted as a percentage); $a_-$ and $a_+$ are the **lower** and **upper confidence limits**. Taking $\alpha = \beta$ gives the **central** interval; taking $\beta = 0$, so that only $a_+$ is finite, gives a **one-sided** interval, which is what an upper or lower bound on a parameter means.

Arfken, Weber and Harris describe the same object less formally, as the range that contains a chosen fraction $p$ of the probability, reported in the form $x = x_0 \pm dx$ "with $(100p)\%$ confidence", and they name the technique used throughout this unit the **pivotal method**: relate the unknown to a quantity whose distribution is known and free of unknowns, and read the interval off that.
:::

:::statement[Exact intervals for a normal sample]{provenance=adapted src="rhb-2006:§31.3.5, eqs. (31.30)-(31.33), pp. 1238-1239; rhb-2006:§31.7.5, eqs. (31.113) and (31.115) and the inversion on p. 1288; rhb-2006:§31.7.6, eq. (31.122) and the equal-tail paragraph, p. 1292; arfken-2013:§23.7, eqs. (23.116)-(23.118) and table 23.3, pp. 1176-1177"}
Let $X_1, \dots, X_n$ be independent $N(\mu, \sigma^{2})$ variables, $n \ge 2$, with sample mean $\overline X$ and sample variance $S^{2} = (n-1)^{-1}\sum_i (X_i - \overline X)^{2}$. Fix $0 < \alpha < 1$.

**1. Mean, variance known.** The interval

$$
\left[\, \overline X - z_{1-\alpha/2}\frac{\sigma}{\sqrt n} \;,\; \overline X + z_{1-\alpha/2}\frac{\sigma}{\sqrt n} \,\right]
$$

covers $\mu$ with probability exactly $1 - \alpha$. More generally, with tails $\alpha$ and $\beta$, the limits are $\overline X - z_{1-\beta}\,\sigma/\sqrt n$ and $\overline X + z_{1-\alpha}\,\sigma/\sqrt n$.

**2. Mean, variance unknown.** The interval

$$
\left[\, \overline X - t_{n-1,\,1-\alpha/2}\frac{S}{\sqrt n} \;,\; \overline X + t_{n-1,\,1-\alpha/2}\frac{S}{\sqrt n} \,\right]
$$

covers $\mu$ with probability exactly $1 - \alpha$, for every $n \ge 2$ and every value of the unknown $\sigma$.

**3. Variance.** With $a = \chi^{2}_{n-1,\,\alpha/2}$ and $b = \chi^{2}_{n-1,\,1-\alpha/2}$, the interval

$$
\left[\, \frac{(n-1)S^{2}}{b} \;,\; \frac{(n-1)S^{2}}{a} \,\right]
$$

covers $\sigma^{2}$ with probability exactly $1 - \alpha$; taking square roots gives an interval for $\sigma$ of the same level.

**4. Large samples, any population.** If $\hat a$ is an estimator whose sampling distribution tends to $N(a, \sigma_{\hat a}^{2})$ as $n \to \infty$ - which the central limit theorem of :ref[]{to=prob.central-limit-theorem} makes the usual case - then $\hat a \pm z_{1-\alpha/2}\,\sigma_{\hat a}$ has asymptotic coverage $1 - \alpha$, and an estimate $\hat\sigma_{\hat a}$ may be substituted for $\sigma_{\hat a}$ when the latter is unknown.

In particular, since $z_{0.8413} = 1$, quoting a result as $\hat a \pm \sigma_{\hat a}$ - the physicist's one-sigma error bar - is the central confidence interval at level $1 - 2(1 - 0.8413) = 0.683$.
:::

:::idea{provenance=original}
All three exact intervals are one trick applied three times. Find a **pivot**: a function of the data and of the single unknown parameter whose distribution involves no unknowns at all. Then a probability statement about the pivot can be written down from a table, and because the pivot is monotone in the parameter the statement can be rearranged, with the parameter alone in the middle. The rearrangement is pure algebra; all the probability was spent in the first step.

For the mean with $\sigma$ known the pivot is $\sqrt n(\overline X - \mu)/\sigma$, standard normal. For the mean with $\sigma$ unknown, $\sigma$ is cancelled by dividing instead by $S$, and the pivot becomes Student's $t$ - this is exactly why the $t$ distribution was invented. For the variance the pivot is $(n-1)S^{2}/\sigma^{2}$, chi-squared; being a decreasing function of $\sigma^{2}$, it inverts with the two tails exchanged.
:::

:::proof[The three exact intervals]{provenance=adapted src="rhb-2006:§31.3.5, the inversion (31.31)-(31.32), p. 1238, and §31.7.5, the inversion of the two-tailed $t$-test, p. 1288; rhb-2006:§31.7.6, eq. (31.122) and the equal-tail paragraph, p. 1292, inverted here by the same route"}
Throughout we use the two facts proved in :ref[]{to=stats.sampling-distributions} for a normal sample: $\overline X \sim N(\mu, \sigma^{2}/n)$, and $\overline X$ and $S^{2}$ are independent with $(n-1)S^{2}/\sigma^{2} \sim \chi^{2}(n-1)$.

**1. Mean, variance known.** Standardising the sample mean,

$$
Z = \frac{\overline X - \mu}{\sigma/\sqrt n} \sim N(0,1) ,
$$

and $Z$ is a pivot: it contains the unknown $\mu$ and nothing else unknown. By the definition of the quantiles and the symmetry $z_{\alpha/2} = -z_{1-\alpha/2}$,

$$
\Pr\bigl(-z_{1-\alpha/2} \le Z \le z_{1-\alpha/2}\bigr) = 1 - \alpha .
$$

Multiplying through by $\sigma/\sqrt n > 0$ and subtracting $\overline X$ reverses the inequalities and gives, after a change of sign, the event $\overline X - z_{1-\alpha/2}\sigma/\sqrt n \le \mu \le \overline X + z_{1-\alpha/2}\sigma/\sqrt n$. The two events are the same event, so they have the same probability. The unequal-tail version is the same computation with $z_{1-\alpha}$ and $z_{1-\beta}$ in the two places.

**2. Mean, variance unknown.** Write

$$
T = \frac{\overline X - \mu}{S/\sqrt n}
= \frac{(\overline X - \mu)/(\sigma/\sqrt n)}{\sqrt{\bigl[(n-1)S^{2}/\sigma^{2}\bigr]/(n-1)}} ,
$$

where the second form is obtained by dividing numerator and denominator by $\sigma$. The numerator is $N(0,1)$ and the quantity in the square root is $\chi^{2}(n-1)/(n-1)$; **the independence of $\overline X$ and $S^{2}$** is what allows the definition of Student's $t$ to be applied, and it gives $T \sim t(n-1)$. Note that $\sigma$ has cancelled: $T$ is a pivot even though $\sigma$ is unknown. Now repeat step 1 with $t_{n-1,1-\alpha/2}$ in place of $z_{1-\alpha/2}$ and $S$ in place of $\sigma$.

**3. Variance.** Put $W = (n-1)S^{2}/\sigma^{2} \sim \chi^{2}(n-1)$, again a pivot. By the definition of $a$ and $b$ as the $\alpha/2$ and $1 - \alpha/2$ quantiles, the two tails each carry probability $\alpha/2$, so

$$
\Pr(a \le W \le b) = 1 - \alpha .
$$

Since $S^{2} > 0$ with probability one (the sample values are almost surely not all equal, because the normal distribution is continuous) and $a > 0$, each of the two inequalities may be solved for $\sigma^{2}$:

$$
a \le \frac{(n-1)S^{2}}{\sigma^{2}} \iff \sigma^{2} \le \frac{(n-1)S^{2}}{a} ,
\qquad
\frac{(n-1)S^{2}}{\sigma^{2}} \le b \iff \frac{(n-1)S^{2}}{b} \le \sigma^{2} .
$$

Taking the two together converts the event $\{a \le W \le b\}$ into the event that $\sigma^{2}$ lies in the stated interval, and the probability is unchanged. The map $\sigma \mapsto \sigma^{2}$ is increasing on $(0,\infty)$, so taking square roots of the endpoints gives an interval for $\sigma$ with the same coverage.

**4. Large samples.** By hypothesis $(\hat a - a)/\sigma_{\hat a}$ converges in distribution to $N(0,1)$, so the probability of the event in step 1 converges to $1 - \alpha$; the conclusion is asymptotic, not exact. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Monotonicity** of $\hat a_\alpha$ and $\hat a_\beta$ in $a$ is what makes $a_-$ and $a_+$ well defined in the general construction. Without it the set of parameter values consistent with the data need not be an interval at all, and the honest output of the procedure is that set rather than a pair of limits.

**Independence of $\overline X$ and $S^{2}$** is used once, in step 2, and it is special to the normal distribution: it is equivalent to normality for a sample of size $n \ge 2$ from a non-degenerate distribution with finite variance. If the parent is not normal, $T$ is not $t$-distributed and the interval is only approximate.

**Normality** is cheap for interval 2 and expensive for interval 3. For the mean, the central limit theorem rescues the construction: $\sqrt n(\overline X - \mu)/S$ tends to $N(0,1)$ for any parent with finite variance, and since $t_{\nu,p} \to z_p$ the $t$ interval is asymptotically correct whatever the parent. For the variance there is no such rescue. Applying the central limit theorem to the variables $(X_i - \mu)^{2}$ gives $\sqrt n\,(S^{2} - \sigma^{2}) \to N(0, \mu_4 - \sigma^{4})$, where $\mu_4$ is the fourth central moment of the parent, whereas the chi-squared calibration presumes the normal value $\mu_4 = 3\sigma^{4}$, that is an asymptotic variance $2\sigma^{4}$. For an exponential parent $\mu_4 = 9\sigma^{4}$, so the true standard deviation of $\sqrt n\,(S^{2} - \sigma^{2})$ is $\sqrt{8\sigma^{4}} = 2\sqrt{2}\,\sigma^{2}$ against the assumed $\sqrt{2}\,\sigma^{2}$: the interval is too short by a factor of two, and its coverage tends to

$$
2\Phi\!\left(\frac{1.95996}{2}\right) - 1 = 2(0.83645) - 1 = 0.6729 ,
$$

not $0.95$, **however large $n$ is**. A nominal 95% interval for a variance is worth little unless normality has been checked.

**Independence of the observations** is used in every step, through the sampling distributions. Positively correlated data - successive readings of a drifting instrument, or a time series - make $S^{2}$ underestimate the variance of $\overline X$, and all the intervals above come out too narrow. The repair is to replace $n$ by an effective sample size computed from the autocorrelation; see :ref[]{to=prob.stationary-processes}.

**One parameter at a time.** Intervals 2 and 3 are each exact for their own parameter; the rectangle formed by taking both at level $1-\alpha$ is *not* a $1-\alpha$ region for the pair $(\mu, \sigma^{2})$. For several parameters at once, Riley, Hobson and Bence construct a region bounded by the ellipsoid $Q(a, \hat a_{\mathrm{obs}}) = c$, where $Q(\hat a, a) = (\hat a - a)^{\mathsf T}V^{-1}(\hat a - a)$ is the quadratic form of the large-sample multivariate Gaussian and $c$ is the $1-\alpha$ quantile of $\chi^{2}_{M}$ for $M$ parameters.
:::

:::remark[What the confidence level says, and what it does not]{provenance=adapted src="rhb-2006:§31.3.4, the paragraph emphasising that $a_-$ and $a_+$ are random variables, p. 1237; arfken-2013:§23.7, the closing observations of Example 23.7.3, p. 1178"}
The probability statement is about the **interval**, not about the parameter. Riley, Hobson and Bence put the emphasis exactly there: $a_-$ and $a_+$ are random variables, and the content of "95% confidence" is that if a large number of samples of the same size were drawn and the interval computed each time, the true value would lie inside on 95% of those occasions. Once numbers are substituted, $[342.62, 344.18]$ either contains the true speed of sound or does not; there is no 95% left in it. A sentence of the form "there is a 95% probability that $\mu$ lies in this interval" is a statement about a *posterior* distribution for $\mu$, and needs the prior of :ref[]{to=stats.bayesian-inference} before it means anything.

Three practical corollaries, the first two of which Arfken, Weber and Harris stress:

- **A higher level buys a wider interval.** The level is chosen, not discovered; quoting the level without the interval, or the interval without the level, is meaningless.
- **The interval is itself sample-dependent.** Another sample from the same population gives different endpoints and a different width, the width varying because $S$ does.
- **Coverage is coverage under the assumed model.** A confidence interval answers for statistical fluctuation only. A miscalibrated instrument shifts every sample the same way, and no amount of data narrows that error; systematic uncertainties are estimated and reported separately.
:::

:::remark[Three ways the $t$ interval is written, and which we follow]{provenance=adapted src="rhb-2006:§31.7.5, eqs. (31.113) and (31.115) and the confidence interval displayed on p. 1288; arfken-2013:§23.7, eqs. (23.95), (23.116)-(23.118) and Example 23.7.3, pp. 1168, 1176-1178"}
The half-width of interval 2 is written differently by our two sources, because they use different symbols for the sample spread, and the reader who mixes them will get the wrong number.

- **This unit** uses $S^{2} = (n-1)^{-1}\sum_i(X_i-\overline X)^{2}$ and the half-width $t_{n-1,1-\alpha/2}\,S/\sqrt n$.
- **Riley, Hobson and Bence** use $s^{2} = n^{-1}\sum_i(X_i-\overline X)^{2}$, define $t = (\bar x - \mu_0)/\bigl(s/\sqrt{N-1}\bigr)$ in their eq. (31.113), and invert it into $\bar x \pm t_{\mathrm{crit}}\,s/\sqrt{N-1}$. Since $s/\sqrt{N-1} = S/\sqrt N$ identically, this is **the same interval as ours**, written in the other convention for the sample variance; their own eq. (31.115) says as much, giving $t = (\bar x - \mu_0)/(\hat\sigma/\sqrt N)$ with $\hat\sigma^{2} = Ns^{2}/(N-1) = S^{2}$.
- **Arfken, Weber and Harris** take $\sigma$ to be the sample standard deviation with divisor $n-1$, as in their eq. (23.95), and write the interval through eq. (23.118) as $\mu = \bar x - T\sigma/\sqrt n$. In their Example 23.7.3 the six readings are treated with $n = 5$, the number of degrees of freedom, in both the divisor of $\sigma^{2}$ and the $\sqrt n$ of the half-width, which yields $5.885 \pm 1.720$ at the 90% level. Our rule applied to their numbers divides by $\sqrt 6$ instead and gives $5.885 \pm 1.570$.

**We follow Riley, Hobson and Bence**: the degrees of freedom $n-1$ fix which $t$ distribution is used, and the sample size $n$ fixes the standard error $S/\sqrt n$. The difference is recorded in the handbook's list of source discrepancies and is not a defect of either book's statement of the $t$ density, on which they agree.
:::

:::method[Constructing an interval by the pivotal method]{provenance=original}
1. Write down the model and identify the single unknown parameter $\theta$ the interval is for; everything else must be known or eliminated.
2. Find a pivot $G(\text{data}, \theta)$ whose distribution is completely known - free of $\theta$ and of every nuisance parameter. For normal samples use the table in the statement above; otherwise the sampling distribution of :ref[]{to=stats.sampling-distributions} or the large-sample normal approximation of item 4 is the place to look.
3. Choose the level $1-\alpha$ and the split of the tails. Equal tails, $\alpha/2$ each, is the default; put the whole of $\alpha$ in one tail if what is wanted is a bound rather than a range.
4. Look up the two quantiles of the pivot's distribution and write the bracketing statement $\Pr(q_{\alpha/2} \le G \le q_{1-\alpha/2}) = 1-\alpha$.
5. Solve both inequalities for $\theta$, reversing them if the pivot decreases in $\theta$. The result is the interval.
6. Substitute the observed numbers, and report the level, the interval and the model assumed. Check the arithmetic by confirming that the point estimate lies inside.
:::

:::example[Nine readings of the speed of sound]{provenance=original}
A student measures the speed of sound in air at $20\,^\circ\mathrm{C}$ by timing a pulse over a fixed baseline, nine times, and obtains (in $\mathrm{m\,s^{-1}}$)

$$
342.6,\; 344.1,\; 343.2,\; 341.8,\; 345.0,\; 342.9,\; 343.7,\; 344.5,\; 342.8 .
$$

Take the readings to be independent and normally distributed about the true value $\mu$ with unknown standard deviation $\sigma$. Find 95% central confidence intervals for $\mu$ and for $\sigma$.

**Step 1: the summary statistics.** The nine values sum to $3090.6$, so

$$
\overline x = \frac{3090.6}{9} = 343.400 .
$$

The deviations $x_i - \overline x$ are

$$
-0.8,\; 0.7,\; -0.2,\; -1.6,\; 1.6,\; -0.5,\; 0.3,\; 1.1,\; -0.6 ,
$$

which sum to zero, as they must. Their squares sum to

$$
\sum_i (x_i - \overline x)^{2} = 0.64 + 0.49 + 0.04 + 2.56 + 2.56 + 0.25 + 0.09 + 1.21 + 0.36 = 8.20 ,
$$

so $s^{2} = 8.20/8 = 1.025$ and $s = 1.01242$. The standard error of the mean is $s/\sqrt 9 = 1.01242/3 = 0.337474$.

**Step 2: the interval for $\mu$.** Here $\sigma$ is unknown, so the pivot is $T = (\overline X - \mu)/(S/\sqrt 9) \sim t(8)$. With $\alpha = 0.05$ the quantile is $t_{8,0.975} = 2.30600$, and the half-width is

$$
2.30600 \times 0.337474 = 0.778217 .
$$

Hence the 95% central confidence interval for $\mu$ is

$$
343.400 \pm 0.778 = [\,342.622,\; 344.178\,]\ \mathrm{m\,s^{-1}} .
$$

**Step 3: the interval for $\sigma$.** The pivot is $W = 8S^{2}/\sigma^{2} \sim \chi^{2}(8)$, and the quantiles are $a = \chi^{2}_{8,0.025} = 2.17973$ and $b = \chi^{2}_{8,0.975} = 17.53455$. With $\sum_i (x_i - \overline x)^{2} = 8.20$,

$$
\frac{8.20}{17.53455} = 0.467648 ,
\qquad
\frac{8.20}{2.17973} = 3.761933 ,
$$

so the 95% interval for $\sigma^{2}$ is $[0.4676,\; 3.7619]\ \mathrm{m^{2}\,s^{-2}}$ and, on taking square roots,

$$
\sigma \in [\,0.684,\; 1.940\,]\ \mathrm{m\,s^{-1}} .
$$

**Step 4: read the answers.** The interval for $\mu$ is nearly symmetric about the estimate, as the $t$ distribution is symmetric; the interval for $\sigma$ is strongly asymmetric about $s = 1.012$, running from two thirds of it to nearly twice it. Nine readings pin a mean to a fraction of a metre per second and pin a standard deviation hardly at all - the familiar fact that variances need far more data than means. For comparison, had $\sigma = 1.000$ been known in advance, interval 1 would have given $343.400 \pm 1.95996/3 = 343.400 \pm 0.653$, narrower than the $t$ interval because nothing had to be spent estimating the spread. The accepted value $343.2\ \mathrm{m\,s^{-1}}$ at $20\,^\circ\mathrm{C}$ lies inside the interval for $\mu$.
:::

:::application[Error bars, tolerances and detection limits]{provenance=original}
**The error bar on a plot.** A point drawn as $y \pm \sigma_y$ is a 68.3% central confidence interval, by the calculation in the statement above. This is why error bars from different fields can be compared at all, and why a paper that draws two-sigma bars must say so: the same picture then means 95.4%.

**Tolerance and qualification.** A supplier of resistors claims a spread no worse than some $\sigma_{\max}$. The quantity under test is a variance, so the relevant object is interval 3, or rather its one-sided version: the upper confidence limit $\sqrt{(n-1)S^{2}/\chi^{2}_{n-1,\alpha}}$ is the number that may honestly be quoted as a bound on $\sigma$ at level $1-\alpha$. The strong asymmetry seen in the worked example is why qualification tests need large batches.

**Detection limits and upper bounds.** When an experiment sees no signal, the result is reported as a one-sided interval: the 90% or 95% upper confidence limit on the rate or cross-section. Half a century of particle-physics and astroparticle limits are exactly this construction, with the Poisson rather than the normal sampling distribution.

**Trends in geophysical records.** A fitted trend in a temperature or sea-level series is reported with a confidence interval obtained from the fit of :ref[]{to=stats.least-squares-regression}. Because the residuals of such a series are autocorrelated rather than independent, the effective sample size is much smaller than the number of months in the record, and an interval computed as if the data were independent is the standard way to overstate the significance of a trend.
:::
