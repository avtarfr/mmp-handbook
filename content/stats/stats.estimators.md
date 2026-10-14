---
id: stats.estimators
title: Estimators and their properties
kind: definition
level: core
summary: Defines bias, consistency, efficiency and the standard error of an estimator, introduces the score and the Fisher information of a sample, and proves the Cramer-Rao (Fisher) inequality bounding the variance of any estimator from below; worked on twelve Poisson counts, where the sample mean attains the bound $\hat\lambda = 6.833 \pm 0.755$ while the sample variance reaches only $6.3\%$ of it.
prereqs: [stats.sampling-distributions, prob.expectation-variance, prob.probability-inequalities, prob.convergence-random-variables, prob.central-limit-theorem, linalg.inner-product-spaces, linalg.quadratic-forms, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.3, pp. 1229-1230: the estimator $\\hat a(x)$ and its sampling distribution $P(\\hat a|a)$; §31.3.1, pp. 1230-1232: the definitions of consistency ($\\hat a \\to a$ as $N\\to\\infty$, equivalently $P(\\hat a|a)\\to\\delta(\\hat a - a)$), of the bias $b(a) = E[\\hat a]-a$ by eqs. (31.14)-(31.15), and of the variance (31.16) and the efficiency $e = V_{\\min}/V[\\hat a]$, with the remarks on the bias-efficiency trade-off, the best unbiased estimator, and the implication unbiased $+\\ V[\\hat a]\\to 0 \\Rightarrow$ consistent via the Bienayme-Chebyshev inequality; §31.3.2, eqs. (31.18)-(31.23), pp. 1232-1234: Fisher's inequality in both the $E[(\\partial\\ln P/\\partial a)^2]$ and the $E[-\\partial^2\\ln P/\\partial a^2]$ forms, and its proof from the normalisation identity, the differentiated bias relation, the subtraction of $\\alpha(a)$ times the first, and the Schwarz inequality for multiple integrals (31.22), together with the identity relating the two forms; §31.3.3, eq. (31.24) and the text to p. 1235: the standard error $\\sigma_{\\hat a} = (V[\\hat a])^{1/2}$, the estimated standard error $\\hat\\sigma_{\\hat a}$, and the root mean square error $\\epsilon_{\\hat a}^2 = V[\\hat a]+b(a)^2$; §31.3.5, eq. (31.36), p. 1241: the Fisher matrix $F_{ij} = E[-\\partial^2\\ln P/\\partial a_i\\partial a_j]$ as the inverse covariance matrix of efficient unbiased estimators; §31.4.1, eq. (31.40), p. 1245: $E[\\bar x]=\\mu$, $V[\\bar x]=\\sigma^2/N$, and the worked example on pp. 1232-1233 showing that $\\bar x$ attains the bound $\\sigma^2/N$ for a Gaussian population; §31.4.2, eqs. (31.43), (31.47)-(31.49), pp. 1246-1248: the bias $E[s^2] = (N-1)\\sigma^2/N$ of the sample variance with divisor $N$, Bessel's correction, and the variance $V[\\hat\\sigma^2] = N^{-1}[\\nu_4 - (N-3)\\nu_2^2/(N-1)]$ of the corrected estimator in terms of the central moments $\\nu_r$ of the parent"
    pages: "1229-1235, 1241, 1245-1248"
    role: every definition in this unit (estimator, sampling distribution, consistency, bias, efficiency, standard error, root mean square error), the statement and the proof route of the Cramer-Rao inequality, the Fisher matrix, and the variance formula for the corrected sample variance used in the example
---

:::note[What this unit is for]{provenance=original}
A measurement does not hand us a parameter; it hands us a sample, from which we compute a number and call that number our estimate. Several different numbers will usually be available for the same parameter - the mean and the median both estimate the centre of a symmetric law - and they are not equally good. This unit sets out the four things one asks of such a rule: does it converge to the truth, is it right on average, how much does it scatter, and how much scatter was unavoidable.

The last question has a sharp answer. The data carry a finite amount of information about the parameter, measurable as a single number, the Fisher information, and no estimator whatever can scatter less than that number allows. That is the Cramer-Rao inequality, and it converts "this estimator looks good" into "this estimator is within a known factor of the best possible". The distributions that the calculations below run on are those of :ref[]{to=stats.sampling-distributions}; the two standard recipes for building estimators are :ref[]{to=stats.maximum-likelihood} and :ref[]{to=stats.least-squares-regression}, and turning an estimate into a statement with a stated probability is the business of :ref[]{to=stats.confidence-intervals}.
:::

:::definition[Estimator, bias, consistency]{provenance=adapted src="rhb-2006:§31.3, pp. 1229-1230, and §31.3.1, eqs. (31.14)-(31.15), pp. 1230-1231"}
Let the sample $x = (x_1,\dots,x_n)$ be drawn from a population whose joint density $P(x\mid a)$ is known except for the value of a parameter $a$. (Riley, Hobson and Bence write $N$ for the sample size and allow $a$ to stand for a whole list $a_1,\dots,a_m$ of unknown parameters; we write $n$ for the sample size and treat one parameter at a time until the Fisher matrix below.)

An **estimator** of $a$ is a statistic $\hat a(x)$ - a function of the sample alone, in the sense of :ref[]{to=stats.sampling-distributions} - whose value is offered as an estimate of $a$. Being a function of random variables it is itself random, and its law is its **sampling distribution** $P(\hat a \mid a)$.

Its **expectation** and **variance** may be computed either over the sampling distribution or over the sample space,

$$
\mathbb{E}[\hat a] = \int \hat a\, P(\hat a\mid a)\,d\hat a = \int \hat a(x)\, P(x\mid a)\,d^{n}x ,
$$

$$
\operatorname{var}[\hat a] = \int \bigl(\hat a(x) - \mathbb{E}[\hat a]\bigr)^{2} P(x\mid a)\,d^{n}x ,
$$

the two integrals agreeing by the law of the unconscious statistician of :ref[]{to=prob.expectation-variance}.

The **bias** of $\hat a$ is

$$
b(a) \;=\; \mathbb{E}[\hat a] - a .
$$

It is a function of the true $a$ and of $n$, never of the observed data. If $b \equiv 0$ the estimator is **unbiased**.

The estimator is **consistent** when, as the sample is made larger and larger, it settles down on the parameter it is estimating. Riley, Hobson and Bence write the requirement as $\hat a \to a$ in the limit $n \to \infty$, and give alongside it the equivalent demand that the sampling distribution should collapse onto a point mass there, $P(\hat a \mid a) \to \delta(\hat a - a)$. In the vocabulary of :ref[]{to=prob.convergence-random-variables} the statement being made is convergence in probability: for every $\varepsilon > 0$, $\Pr(\lvert \hat a - a\rvert > \varepsilon) \to 0$, which is the sense in which the law of large numbers holds.
:::

:::definition[Standard error, mean squared error, efficiency]{provenance=adapted src="rhb-2006:§31.3.1, eq. (31.16) and the discussion of efficiency, pp. 1231-1232, and §31.3.3, eq. (31.24) and the root mean square error, pp. 1234-1235"}
The **standard error** on an estimate is the standard deviation of its sampling distribution,

$$
\sigma_{\hat a} \;=\; \bigl(\operatorname{var}[\hat a]\bigr)^{1/2} .
$$

It usually depends on the unknown $a$; one then substitutes the estimate into the formula and quotes the **estimated standard error** $\hat\sigma_{\hat a}$, writing the result as $a = \hat a \pm \hat\sigma_{\hat a}$.

For a biased estimator the spread about the *true* value is measured instead by the **root mean square error** $\epsilon_{\hat a}$, where

$$
\epsilon_{\hat a}^{2} \;=\; \mathbb{E}\bigl[(\hat a - a)^{2}\bigr] \;=\; \operatorname{var}[\hat a] + b(a)^{2} ,
$$

the decomposition following by adding and subtracting $\mathbb{E}[\hat a]$ inside the square, since the cross term has expectation zero. The two pieces are the statistical and the systematic part of the error.

Of two estimators of the same $a$, the one with the smaller variance is the more **efficient**. Writing $V_{\min}$ for the lower bound established below, the **efficiency** of $\hat a$ is

$$
e \;=\; \frac{V_{\min}}{\operatorname{var}[\hat a]} \;\in\; (0,1] ,
$$

and $\hat a$ is **efficient**, or **minimum-variance**, when $e = 1$. Among unbiased estimators the one of smallest variance is the **best unbiased estimator**. Riley, Hobson and Bence stress that no single estimator is optimal in all respects: there is a trade-off between bias and variance, and a slightly biased estimator with a small variance may well be preferred to an unbiased one with a large variance. The root mean square error is the quantity that weighs the two against each other.
:::

:::definition[Score and Fisher information]{provenance=adapted src="rhb-2006:§31.3.2, eqs. (31.18)-(31.23), pp. 1233-1234, and §31.3.5, eq. (31.36), p. 1241"}
Suppose $P(x \mid a) > 0$ on a region of sample space that does not depend on $a$, and that $P$ is twice differentiable in $a$ there. The **score** of the sample is the logarithmic derivative

$$
U(x,a) \;=\; \frac{\partial \ln P(x\mid a)}{\partial a} ,
$$

and the **Fisher information** carried by the sample about $a$ is

$$
I(a) \;=\; \mathbb{E}\bigl[U^{2}\bigr] \;=\; \int \left(\frac{\partial \ln P}{\partial a}\right)^{2} P(x\mid a)\, d^{n}x .
$$

Step 2 of the proof below shows that $\mathbb{E}[U] = 0$, so $I(a)$ is also the variance of the score, and Step 6 shows that under one further differentiation

$$
I(a) \;=\; \mathbb{E}\!\left[-\frac{\partial^{2}\ln P}{\partial a^{2}}\right] ,
$$

which is the form Riley, Hobson and Bence use: the information is the average curvature of the log-density at the true parameter. For several parameters $a_1,\dots,a_M$ the same construction gives the **Fisher matrix**

$$
F_{ij} \;=\; \mathbb{E}\!\left[-\frac{\partial^{2}\ln P}{\partial a_i\,\partial a_j}\right] ,
$$

a symmetric positive semi-definite matrix (a quadratic form in the sense of :ref[]{to=linalg.quadratic-forms}, since $v^{\mathsf T} F v = \mathbb{E}[(\sum_i v_i \partial_i \ln P)^{2}] \ge 0$). Riley, Hobson and Bence state that for unbiased efficient estimators the Fisher matrix is exactly the inverse of their covariance matrix, $(V^{-1})_{ij} = F_{ij}$, which is the many-parameter form of the bound proved below.

**Information adds over independent observations.** If the sample is independent with common one-observation density $p(x_i\mid a)$, then $\ln P = \sum_i \ln p(x_i\mid a)$, so the score is a sum of $n$ independent terms each of mean zero, and variances of independent summands add (:ref[]{to=prob.expectation-variance}). Hence

$$
I(a) \;=\; n\, i(a) , \qquad i(a) = \mathbb{E}\!\left[\left(\frac{\partial \ln p(x_1\mid a)}{\partial a}\right)^{2}\right] ,
$$

with $i(a)$ the information in a single observation. Every $1/n$ in the error bars below comes from this one line.
:::

:::statement[The Cramer-Rao inequality]{provenance=adapted src="rhb-2006:§31.3.1, eq. (31.17), p. 1232, and §31.3.2, eqs. (31.18) and (31.23), pp. 1233-1234"}
Let $\hat a(x)$ be any estimator of $a$ with bias $b(a) = \mathbb{E}[\hat a] - a$, and suppose that

1. the set where $P(x\mid a) > 0$ does not depend on $a$, and $P$ is differentiable in $a$ there;
2. the integrals $\int P\,d^{n}x$ and $\int \hat a\, P \,d^{n}x$ may be differentiated with respect to $a$ under the integral sign (:ref[]{to=found.differentiation-under-integral});
3. $0 < I(a) < \infty$ and $\operatorname{var}[\hat a] < \infty$.

Then

$$
\operatorname{var}[\hat a] \;\ge\; V_{\min} \;=\; \frac{\bigl(1 + b'(a)\bigr)^{2}}{I(a)}
\;=\; \frac{\bigl(1 + \partial b/\partial a\bigr)^{2}}{\mathbb{E}\bigl[(\partial \ln P/\partial a)^{2}\bigr]} ,
$$

and, if in addition $P$ is twice differentiable in $a$ and $\int P\,d^{n}x$ may be differentiated twice under the integral sign,

$$
\operatorname{var}[\hat a] \;\ge\; \frac{\bigl(1 + \partial b/\partial a\bigr)^{2}}{\mathbb{E}\bigl[-\partial^{2}\ln P/\partial a^{2}\bigr]} .
$$

In particular an **unbiased** estimator satisfies $\operatorname{var}[\hat a] \ge 1/I(a)$. Equality holds if and only if the score is an affine function of the estimator,

$$
\frac{\partial \ln P}{\partial a} \;=\; c(a)\,\bigl[\hat a(x) - \mathbb{E}[\hat a]\bigr]
$$

for almost every $x$, with $c(a)$ depending on $a$ but not on $x$.

Riley, Hobson and Bence call this **Fisher's inequality** and also give the name **Cramer-Rao inequality**; they write it with $P$ the population density of the whole sample, as here.
:::

:::idea{provenance=original}
Think of random variables with finite variance as vectors, with $(F,G) = \mathbb{E}[FG]$ as the inner product. Two vectors matter: the centred estimator $\hat a - \mathbb{E}[\hat a]$, whose length squared is the variance we want to bound below, and the score $U$, whose length squared is the information.

Differentiating the normalisation $\int P \,d^{n}x = 1$ says that the score has mean zero, so it is already centred. Differentiating $\int \hat a P\,d^{n}x = a + b(a)$ says that the inner product of the two vectors is fixed at $1 + b'(a)$, whatever the estimator. So we have two vectors with a prescribed inner product, and the Cauchy-Schwarz inequality of :ref[]{to=linalg.inner-product-spaces} immediately forbids either of them from being too short: $\lvert(\hat a - \mathbb{E}[\hat a], U)\rvert \le \lVert \hat a - \mathbb{E}[\hat a]\rVert\,\lVert U \rVert$ rearranges into exactly the bound. Equality in Cauchy-Schwarz means the two vectors are parallel, which is the condition stated for an efficient estimator.

So the content of the theorem is a triangle: the estimator must "overlap" the score by a fixed amount, the score has a fixed length, and therefore the estimator cannot be short. Nothing about the estimator enters except that it is an unbiased-up-to-$b$ function of the data.
:::

:::proof[The bound, and both forms of the information]{provenance=adapted src="rhb-2006:§31.3.2, the derivation of (31.19)-(31.23) and the identity between the two forms of the information, pp. 1233-1234"}
Write $\partial$ for $\partial/\partial a$ and suppress the arguments of $P$.

**Step 1: the two identities we shall need.** Everything comes from differentiating two integrals in $a$. Hypothesis 2 licenses taking $\partial$ inside, and hypothesis 1 guarantees that no boundary term appears, because the region of integration where $P>0$ is the same for every $a$.

**Step 2: the score has mean zero.** Differentiating $\int P \,d^{n}x = 1$,

$$
0 \;=\; \partial \!\int P\,d^{n}x \;=\; \int \partial P \, d^{n}x \;=\; \int (\partial \ln P)\, P\, d^{n}x \;=\; \mathbb{E}[U] ,
$$

where the third equality is the chain rule $\partial P = (\partial \ln P) P$, valid where $P>0$. Consequently $I(a) = \mathbb{E}[U^{2}] = \operatorname{var}[U]$.

**Step 3: the score overlaps the estimator by $1+b'$.** The definition of the bias gives $\int \hat a(x) P \,d^{n}x = a + b(a)$. Differentiating both sides, and using the chain rule again on the left ($\hat a$ does not depend on $a$),

$$
\int \hat a\, (\partial \ln P)\, P\, d^{n}x \;=\; 1 + b'(a) ,
\qquad\text{that is}\qquad
\mathbb{E}[\hat a\,U] \;=\; 1 + b'(a) .
$$

**Step 4: centre the estimator.** Multiply the identity of Step 2 by the constant $\mathbb{E}[\hat a]$ and subtract it from Step 3. Since $\mathbb{E}[\hat a]$ does not depend on $x$, this gives

$$
\mathbb{E}\bigl[(\hat a - \mathbb{E}[\hat a])\,U\bigr] \;=\; 1 + b'(a) .
$$

Subtracting any other constant would have produced a larger left-hand factor in the next step; subtracting the mean is what makes the bound sharp, and this is the point at which Riley, Hobson and Bence choose their free function $\alpha(a)$ to be $\mathbb{E}[\hat a]$.

**Step 5: Cauchy-Schwarz.** On the space of functions of $x$ with $\int (\cdot)^{2} P \,d^{n}x < \infty$, the pairing $(F,G) = \int FG\,P\,d^{n}x$ is an inner product, so by :ref[]{to=linalg.inner-product-spaces},

$$
\Bigl(\mathbb{E}\bigl[(\hat a - \mathbb{E}[\hat a])\,U\bigr]\Bigr)^{2}
\;\le\;
\mathbb{E}\bigl[(\hat a - \mathbb{E}[\hat a])^{2}\bigr]\;\mathbb{E}\bigl[U^{2}\bigr]
\;=\; \operatorname{var}[\hat a]\; I(a) .
$$

The left-hand side is $(1+b')^{2}$ by Step 4, and $I(a) > 0$ by hypothesis 3, so dividing gives

$$
\operatorname{var}[\hat a] \;\ge\; \frac{(1+b'(a))^{2}}{I(a)} ,
$$

which is the first form. Equality in Cauchy-Schwarz holds exactly when the two entries are proportional, $U = c(a)(\hat a - \mathbb{E}[\hat a])$, which is the stated equality condition.

**Step 6: the curvature form of the information.** Differentiate the identity $\int (\partial \ln P)\,P \,d^{n}x = 0$ of Step 2 once more in $a$, again taking the derivative inside:

$$
\int \bigl(\partial^{2}\ln P\bigr) P \,d^{n}x \;+\; \int \bigl(\partial \ln P\bigr)\,\partial P \,d^{n}x \;=\; 0 .
$$

In the second integral write $\partial P = (\partial \ln P)P$ once more; it becomes $\int (\partial\ln P)^{2} P\,d^{n}x = I(a)$. Hence

$$
I(a) \;=\; -\int \bigl(\partial^{2}\ln P\bigr)P\,d^{n}x \;=\; \mathbb{E}\!\left[-\frac{\partial^{2}\ln P}{\partial a^{2}}\right] ,
$$

and substituting this into the first form gives the second. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Fixed support (hypothesis 1).** Used in Steps 2, 3 and 6, where the derivative is taken inside the integral with no boundary term. It is not a formality. Let $x_1,\dots,x_n$ be uniform on $(0,a)$. Then $\ln p = -\ln a$ wherever $p>0$, so $\partial \ln p = -1/a$ and $i(a) = 1/a^{2}$, giving the apparent bound $a^{2}/n$ for an unbiased estimator. But $M = \max_i x_i$ has $\mathbb{E}[M] = na/(n+1)$, so $\hat a = (n+1)M/n$ is unbiased with

$$
\operatorname{var}[\hat a] = \frac{a^{2}}{n(n+2)} ,
$$

smaller than $a^{2}/n$ by a factor $n+2$. The inequality fails outright, because the region $\{0<x_i<a\}$ moves with $a$ and the differentiations of Steps 2 and 3 pick up boundary terms that were discarded.

**Differentiation under the integral (hypothesis 2).** Used at the same three places. :ref[]{to=found.differentiation-under-integral} gives the standard sufficient condition - continuity of $P$ and $\partial P$ - which holds for the exponential families met in practice.

**Finite, non-zero information (hypothesis 3).** $I(a) > 0$ is needed to divide in Step 5; if $I(a) = 0$ the data say nothing about $a$ and the bound reads $\operatorname{var} \ge \infty$ unless $b' = -1$. $I(a)<\infty$ and $\operatorname{var}[\hat a]<\infty$ are needed for Cauchy-Schwarz to be meaningful.

**Twice differentiable (for the second form only).** The curvature form is the one usually evaluated, because the second derivative of a log-likelihood is often free of the data or easy to average, but it is a corollary of the first form, not an independent statement.

**What the bound does not say.** It bounds the variance, not the mean squared error. A biased estimator may have variance below $1/I(a)$ - the factor $(1+b')^{2}$ is then smaller than one - and the example below exhibits one. It also does not assert that an estimator attaining the bound exists; it exists only when the score happens to be affine in some statistic, which is the exponential-family case.

**The limit in "consistent".** The definition reported above :cite[writes]{work=rhb-2006 loc="§31.3.1, p. 1231"} $\lim_{n\to\infty}\hat a = a$. Since $\hat a$ is a random variable this is not an ordinary limit, and the statement intended is the one made precise in :ref[]{to=prob.convergence-random-variables}: convergence in probability, equivalently the collapse of $P(\hat a\mid a)$ onto a point mass, which is the second form they give. The accompanying argument of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§31.3.1, p. 1232"} is sound in that reading: if $\hat a$ is unbiased and $\operatorname{var}[\hat a]\to 0$, then for any $\varepsilon>0$ Chebyshev's inequality of :ref[]{to=prob.probability-inequalities} gives $\Pr(\lvert\hat a - a\rvert>\varepsilon) \le \operatorname{var}[\hat a]/\varepsilon^{2}\to 0$. The converse fails: a consistent estimator need not be unbiased at any finite $n$.
:::

:::method[Assessing an estimator]{provenance=original}
Given a candidate $\hat a(x)$ and a parametric model $P(x\mid a)$:

1. **Bias.** Compute $\mathbb{E}[\hat a]$ and subtract $a$. For a sum or an average of sample values this needs only linearity of expectation; for a ratio or a square root it usually does not close in elementary form and one expands to order $1/n$.
2. **Variance.** Compute $\operatorname{var}[\hat a]$, if necessary in terms of the central moments $\nu_r$ of the parent. For the corrected sample variance $\hat\sigma^{2} = (n-1)^{-1}\sum_i (x_i-\bar x)^{2}$, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§31.4.2, eqs. (31.47)-(31.49), pp. 1247-1248"} give

$$
\operatorname{var}\bigl[\hat\sigma^{2}\bigr] \;=\; \frac{1}{n}\left(\nu_4 - \frac{n-3}{n-1}\,\nu_2^{2}\right) ,
$$

which needs the fourth central moment of the population, not just its variance.
3. **Consistency.** If the estimator is unbiased and its variance tends to zero, it is consistent, by Chebyshev. Otherwise check that both the bias and the variance tend to zero, which gives $\epsilon_{\hat a}\to 0$ and hence consistency by the same inequality.
4. **Information.** Write down $\ln P(x\mid a)$, differentiate twice in $a$, change sign and average: that is $I(a)$. For an independent sample use $I = n\,i$ and do the work on one observation.
5. **Efficiency.** Form $V_{\min} = (1+b')^{2}/I(a)$ and divide by the variance from step 2. If the score is proportional to $\hat a - \mathbb{E}[\hat a]$ the estimator is efficient and the division is unnecessary.
6. **Quote.** For an unbiased estimator quote $\hat a \pm \hat\sigma_{\hat a}$, substituting the estimate wherever the unknown $a$ appears in the variance formula. For a biased one quote $\hat a \pm \hat\epsilon_{\hat a}$, or state the bias separately as a systematic error.
:::

:::example[Twelve minutes of muon counts: three estimators of one rate]{provenance=original}
A scintillator telescope records cosmic-ray muons in twelve consecutive one-minute gates. The counts are

$$
7,\quad 4,\quad 9,\quad 6,\quad 5,\quad 11,\quad 8,\quad 6,\quad 3,\quad 7,\quad 10,\quad 6 ,
$$

with total $\sum_i x_i = 82$ and $n = 12$. Model them as independent Poisson variables of unknown mean $\lambda$, so that

$$
P(x\mid\lambda) \;=\; \prod_{i=1}^{12} \frac{\lambda^{x_i} e^{-\lambda}}{x_i!} ,
\qquad
\ln P \;=\; -n\lambda + \Bigl(\textstyle\sum_i x_i\Bigr)\ln\lambda - \textstyle\sum_i \ln (x_i!) .
$$

**The information.** Differentiating twice, $\partial^{2}\ln P/\partial\lambda^{2} = -\lambda^{-2}\sum_i x_i$, whose expectation is $-n\lambda/\lambda^{2}$. Hence

$$
I(\lambda) \;=\; \frac{n}{\lambda} , \qquad\text{so}\qquad V_{\min} = \frac{\lambda}{n} \ \text{ for any unbiased estimator.}
$$

**Estimator 1: the sample mean.** $\hat\lambda_1 = \bar x = 82/12 = 6.8333$. It is unbiased, since $\mathbb{E}[x_i]=\lambda$, and $\operatorname{var}[\bar x] = \lambda/n$ because a Poisson variable has variance equal to its mean. That is exactly $V_{\min}$, so $\hat\lambda_1$ is **efficient**, $e=1$. One can see this from the equality condition directly:

$$
\frac{\partial \ln P}{\partial\lambda} \;=\; -n + \frac{1}{\lambda}\sum_i x_i \;=\; \frac{n}{\lambda}\,\bigl(\bar x - \lambda\bigr) ,
$$

which is $c(\lambda)$ times $\hat\lambda_1 - \mathbb{E}[\hat\lambda_1]$ with $c(\lambda)=n/\lambda$. Substituting the estimate into the standard error $\sqrt{\lambda/n}$ gives

$$
\lambda \;=\; 6.833 \pm 0.755\ \text{counts per minute} .
$$

**Estimator 2: the sample variance.** A Poisson law has variance equal to its mean, so $\hat\lambda_2 = \hat\sigma^{2} = \frac{1}{11}\sum_i (x_i-\bar x)^{2}$ is also an unbiased estimator of $\lambda$. The deviations from $6.8333$ have squares summing to $\sum_i (x_i-\bar x)^{2} = 185/3 = 61.667$, so

$$
\hat\lambda_2 \;=\; \frac{61.667}{11} \;=\; 5.606 .
$$

Its variance follows from the formula in step 2 of the method with the Poisson central moments $\nu_2 = \lambda$ and $\nu_4 = \lambda + 3\lambda^{2}$:

$$
\operatorname{var}[\hat\lambda_2] = \frac{1}{n}\left(\lambda + 3\lambda^{2} - \frac{n-3}{n-1}\lambda^{2}\right)
= \frac{\lambda}{n} + \frac{2\lambda^{2}}{n-1} ,
$$

since $3 - (n-3)/(n-1) = 2n/(n-1)$. With $n=12$ and $\lambda \approx 6.8333$ this is $0.569 + 8.490 = 9.059$, a standard error of $3.010$ against $0.755$. The efficiency is

$$
e \;=\; \frac{\lambda/n}{\lambda/n + 2\lambda^{2}/(n-1)} \;=\; \frac{1}{1 + 2n\lambda/(n-1)} \;=\; \frac{1}{1 + 164/11} \;=\; 0.0629 .
$$

Both estimators are unbiased and both are consistent, but the second throws away about $94\%$ of the information. Estimating a Poisson rate from the scatter rather than from the total is a quantitatively bad idea, and the bound says so without any need to simulate.

**Estimator 3: a biased one that beats the unbiased bound.** Take $\hat\lambda_3 = \frac{1}{n+1}\sum_i x_i = 82/13 = 6.3077$. Then $\mathbb{E}[\hat\lambda_3] = n\lambda/(n+1)$, so

$$
b(\lambda) = -\frac{\lambda}{n+1} , \qquad b'(\lambda) = -\frac{1}{n+1} , \qquad 1 + b' = \frac{n}{n+1} ,
$$

and the bound becomes $V_{\min} = (n/(n+1))^{2}\lambda/n = n\lambda/(n+1)^{2}$. The actual variance is $\operatorname{var}[\hat\lambda_3] = n\lambda/(n+1)^{2}$ as well: this estimator is also efficient, and with $\lambda\approx 6.8333$ its variance is $0.485$, **below** the unbiased bound $0.569$. There is no contradiction, because it is biased. Comparing on the root mean square error,

$$
\epsilon^{2}[\hat\lambda_3] = \frac{n\lambda + \lambda^{2}}{(n+1)^{2}} = \frac{82 + 46.694}{169} = 0.762 ,
\qquad
\epsilon^{2}[\hat\lambda_1] = \frac{\lambda}{n} = 0.569 ,
$$

so here the shrunken estimator is worse overall. Solving $\epsilon^{2}[\hat\lambda_3] < \epsilon^{2}[\hat\lambda_1]$ gives $\lambda < (2n+1)/n = 2.083$: shrinking towards zero pays only when the rate is low. At $6.8$ counts per gate it does not.

The three numbers to check are $6.833$, $5.606$ and $6.308$, with efficiencies $1$, $0.0629$ and $1$.
:::

:::application[Error budgets, detector design, and Fisher forecasts]{provenance=original}
**Quoting a result.** Every "$\pm$" in an experimental paper is a standard error in the sense defined here, and the distinction between it and the root mean square error is the distinction between the statistical and the systematic parts of an error budget. A calibration offset that does not average away is a bias $b$; the inequality is silent about it, which is why systematics have to be controlled rather than beaten down with more data.

**Designing the measurement before taking it.** Because $I(a) = n\,i(a)$ and $V_{\min} = 1/I$, the Cramer-Rao bound predicts the achievable error bar from the model alone, before any data exist. Choosing between two experimental configurations then means comparing their one-observation informations $i(a)$: how many hours of beam time, how many pixels, what exposure. In cosmology this calculation is standard enough to have a name - a Fisher forecast - and it is the Fisher matrix $F_{ij}$, not the scalar, that is computed, its inverse giving the forecast covariance ellipse for the parameters, as in :ref[]{to=stats.confidence-intervals}.

**Resolution limits.** In signal processing the same bound fixes how precisely a time delay, a frequency or a direction of arrival can be recovered from noisy samples; for a pulse of bandwidth $B$ observed at signal-to-noise ratio $\rho$ the information about the arrival time scales as $B^{2}\rho^{2}$, which is why timing precision improves linearly with bandwidth. The bound is quoted as the target that a practical algorithm is measured against.

**Where the estimators come from.** This unit says how to judge an estimator but not how to find one. The two standard constructions are the subject of :ref[]{to=stats.maximum-likelihood}, whose estimators attain the bound asymptotically and exactly whenever any estimator does, and :ref[]{to=stats.least-squares-regression}, which is the same construction specialised to Gaussian errors. The propagation of the resulting standard errors through subsequent calculations is :ref[]{to=stats.error-propagation}.
:::
