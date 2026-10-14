---
id: stats.sampling-distributions
title: Sampling distributions
kind: definition
level: core
summary: Defines a statistic and its sampling distribution, fixes the two rival conventions for the sample variance, and proves that for a normal sample the sample mean and the sample variance are independent with laws $N(\mu,\sigma^2/n)$ and $\sigma^2\chi^2(n-1)/(n-1)$, from which the Student $t$ and Fisher $F$ densities follow; worked on an eight-point sample giving $t=1.063$ and $\chi^2=5.731$.
prereqs: [prob.multivariate-normal, prob.expectation-variance, prob.joint-distributions, prob.central-limit-theorem, linalg.unitary-orthogonal-matrices, found.change-of-variables, spec.gamma-function, spec.beta-function]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§4.10 Distributions arising from the normal distribution, pp. 135-137: the sample mean $\\overline X$ and the sample variance $S^2 = (n-1)^{-1}\\sum(X_i-\\overline X)^2$ with the footnote recording the rival convention, Theorem (4.10.1) (for independent $N(\\mu,\\sigma^2)$ variables $\\overline X$ and $S^2$ are independent, $\\overline X$ is $N(\\mu,\\sigma^2/n)$ and $(n-1)S^2/\\sigma^2$ is $\\chi^2(n-1)$) with its orthogonal-rotation proof (2)-(4), the variables $U$ and $V$ free of $\\sigma$, the definition of $T = V/\\sqrt{U/(n-1)}$ and the derivation of the $t(r)$ density by the change of variables $s=u$, $t=v\\sqrt{r/u}$, the definition of $F = (U/r)/(V/s)$ with the properties $F^{-1}\\sim F(s,r)$ and $T^2 \\sim F(1,r)$, and the $F(r,s)$ density; §4.4, Example (4.4.6), p. 108: the gamma density $\\Gamma(\\lambda,t)$ and the chi-squared distribution $\\chi^2(d)$ as the case $\\lambda=\\tfrac12$, $t=\\tfrac12 d$; Example (4.4.8), p. 108: the beta function; §4.7, Example (4.7.1), p. 122: the square of an $N(0,1)$ variable is $\\Gamma(\\tfrac12,\\tfrac12)$, that is $\\chi^2(1)$; Exercise (4.10.1), p. 137: additivity of chi-squared; Exercise (4.10.2), p. 137: the mean of $t(r)$ and of $F(r,s)$; Exercise (4.10.3), p. 137: $t(1)$ is the Cauchy distribution"
    pages: "108, 122, 135-138"
    role: the whole mathematical core of this unit - the definitions of $\\chi^2$, $t$ and $F$, the joint theorem on $\\overline X$ and $S^2$, the rotation proof, and the two density calculations; also the $(n-1)$ convention for the sample variance followed here
  - work: rhb-2006
    loc: "§31.2.2, eqs. (31.6)-(31.8), pp. 1224-1225: the sample variance defined with $1/N$ and the computing form $s^2 = \\overline{x^2} - \\bar x^2$; §31.3, pp. 1229-1230: the population $P(x|a)$, the estimator $\\hat a(x)$ as a function of the sample, the sampling distribution defined by $P(\\hat a|a)\\,d\\hat a = P(x|a)\\,d^N x$, and the worked sampling distribution of $\\bar x$ for a Gaussian population; §31.3.6, eqs. (31.34)-(31.35), pp. 1239-1240: the geometric derivation of the joint sampling distribution of $\\bar x$ and $s$ by intersecting a hyperplane with a hypersphere, giving $dV = As^{N-2}\\,ds\\,d\\bar x$ and the factorisation $P(\\bar x, s|\\mu,\\sigma) = P(\\bar x|\\mu,\\sigma)P(s|\\sigma)$ with the normalising constants $C_1$ and $C_2$; §31.4.1, eq. (31.40), p. 1245: $E[\\bar x] = \\mu$, $V[\\bar x] = \\sigma^2/N$ for any parent population of finite variance; §30.9.4, eqs. (30.122)-(30.123), p. 1193: $\\chi_n^2 = \\sum (X_i-\\mu_i)^2/\\sigma_i^2$ as a $\\gamma(\\tfrac12,\\tfrac12 n)$ variate with mean $n$ and variance $2n$, and the reduction of the order by one for each linear constraint; §31.7.5, eqs. (31.113), (31.115), (31.118), pp. 1285-1286: Student's statistic $t = (\\bar x - \\mu_0)/(s/\\sqrt{N-1})$, its equivalent form $(\\bar x-\\mu_0)/(\\hat\\sigma/\\sqrt N)$, and the $t$ density with $N-1$ degrees of freedom; §31.7.6, eqs. (31.121)-(31.126), pp. 1292-1294: $u = Ns^2/\\sigma_0^2 \\sim \\chi^2_{N-1}$, the variance ratio $F$, and the $F$ density written through the beta function"
    pages: "1193, 1224-1225, 1229-1230, 1239-1240, 1245, 1285-1286, 1292-1294"
    role: the physicists' vocabulary (population, estimator, sampling distribution) and the $1/N$ convention for the sample variance, recorded here because it differs from the one we follow; the alternative geometric derivation of the joint law of $\\bar x$ and $s$; the chi-squared distribution with its moments and the constraint-counting rule; the physicists' form of the $t$ statistic and the variance-ratio form of $F$
  - work: arfken-2013
    loc: "§23.7, eqs. (23.93)-(23.95), p. 1168: the second-order argument that $\\overline{e^2} = s^2(1-1/n)$ and the resulting formula $s = [\\sum_j (x_j-\\bar x)^2/(n-1)]^{1/2}$, whose $n-1$ is said there to allow for the probable error in $\\bar x$ and is named Bessel's correction, together with the remark that the formula is undefined at $n=1$"
    pages: "1168"
    role: the name and the elementary justification of the divisor $n-1$
---

:::note[What this unit is for]{provenance=original}
Every number computed from data - a mean, a variance, a fitted slope - is a function of random variables and is therefore itself random. It has a distribution, and that distribution, not the number, is what licences any statement about the quantity being measured. The distribution of a statistic is called its **sampling distribution**, and the whole of :ref[estimation]{to=stats.estimators}, :ref[interval construction]{to=stats.confidence-intervals} and :ref[testing]{to=stats.hypothesis-testing} is bookkeeping on sampling distributions.

For one parent population - the normal - the sampling distributions of the two statistics a physicist computes first, the sample mean and the sample variance, are known exactly, for every sample size, in closed form. That is the content of this unit. Three named distributions appear: chi-squared for the sample variance, Student's $t$ for the mean divided by its own estimated error, and Fisher's $F$ for the ratio of two sample variances. Their appearance is not a coincidence of calculus; it comes from one geometric fact, that the standard normal law on $\mathbb{R}^n$ is invariant under rotations.
:::

:::definition[Sample, statistic, sampling distribution]{provenance=adapted src="rhb-2006:§31.3, the set-up on pp. 1229-1230; grimmett-stirzaker-2020:§4.10, the opening paragraph, p. 135"}
A **random sample of size $n$** from a distribution $F$ is a list $X_1, \dots, X_n$ of independent random variables each with distribution $F$. Riley, Hobson and Bence call $F$ the **population** and write it $P(x\mid a)$ when it is known up to a list $a = (a_1,\dots,a_m)$ of unknown parameters; independence then makes the joint density of the sample

$$
P(x \mid a) \;=\; \prod_{i=1}^{n} P(x_i \mid a) ,
\qquad x = (x_1,\dots,x_n) \in \mathbb{R}^{n} .
$$

A **statistic** is any function $T(X_1,\dots,X_n)$ of the sample alone - it may not involve the unknown $a$, because it has to be computable from the data. Being a function of random variables, $T$ is a random variable, and its distribution is the **sampling distribution** of $T$. Riley, Hobson and Bence specify it by the transformation rule $P(\hat a \mid a)\,d\hat a = P(x\mid a)\,d^{n}x$, where $d^{n}x$ is the volume between the surfaces $T(x) = \hat a$ and $T(x) = \hat a + d\hat a$; this is the change-of-variables formula of :ref[]{to=found.change-of-variables} written for one coordinate of the image. The sampling distribution depends on the parent $F$, on the function $T$ and on $n$, and in general on the true values $a$ as well - which is exactly why a statistic can carry information about $a$.
:::

:::definition[Sample mean and sample variance, and the two conventions]{provenance=adapted src="grimmett-stirzaker-2020:§4.10, the definitions of $\overline X$ and $S^2$ with the footnote, p. 135; rhb-2006:§31.2.2, eqs. (31.6)-(31.8), pp. 1224-1225; arfken-2013:§23.7, eqs. (23.94)-(23.95), p. 1168"}
For a sample $X_1,\dots,X_n$ the **sample mean** is

$$
\overline X \;=\; \frac1n \sum_{i=1}^{n} X_i ,
$$

on which all our sources agree. For the spread there are two conventions in the library, and they differ by a factor $n/(n-1)$:

$$
S^{2} \;=\; \frac{1}{n-1}\sum_{i=1}^{n}\bigl(X_i - \overline X\bigr)^{2}
\qquad\text{(Grimmett and Stirzaker)} ,
$$

$$
s^{2} \;=\; \frac{1}{n}\sum_{i=1}^{n}\bigl(X_i - \overline X\bigr)^{2}
\qquad\text{(Riley, Hobson and Bence)} .
$$

**This unit uses $S^{2}$, with the divisor $n-1$.** Grimmett and Stirzaker leave the reasons for this choice to statistics texts, note that with it $\mathbb{E}(S^{2}) = \sigma^{2}$ exactly, and record the rival convention in a footnote. Arfken, Weber and Harris reach the same divisor by a first-order argument: estimating the variance of $\bar x$ by $S^{2}/n$, the deviations $e_j = x_j - \bar x$ satisfy $\overline{e^{2}} = S^{2}(1 - 1/n)$ (their sample standard deviation $s$ is our $S$). The $n-1$ that results, they say, allows for the probable error in $\bar x$, and they call it **Bessel's correction**. In the language of the proof below, one degree of freedom has been spent on estimating the mean. Note that $S^{2}$ is undefined at $n = 1$, as it should be: one reading says nothing about spread. Both multiply out to the same sum of squared deviations, so the conversion between them is

$$
(n-1)\,S^{2} \;=\; n\,s^{2} \;=\; \sum_{i=1}^{n}\bigl(X_i-\overline X\bigr)^{2} ,
$$

and every formula below can be rewritten in the other convention by that identity. Riley, Hobson and Bence also give the computing form $s^{2} = \overline{x^{2}} - \bar x^{2}$, which needs one pass through the data instead of two.

Two facts hold for **any** parent population with finite mean $\mu$ and variance $\sigma^{2}$, normal or not, and are proved in :ref[]{to=prob.expectation-variance} from linearity and the additivity of variances over independent summands:

$$
\mathbb{E}\bigl(\overline X\bigr) = \mu , \qquad
\operatorname{var}\bigl(\overline X\bigr) = \frac{\sigma^{2}}{n} .
$$

Everything else below needs normality.
:::

:::definition[The chi-squared, $t$ and $F$ distributions]{provenance=adapted src="grimmett-stirzaker-2020:§4.4, Examples (4.4.6) and (4.4.8), p. 108, §4.7, Example (4.7.1), p. 122, and §4.10, the definitions of $t(r)$ and $F(r,s)$ with their densities, pp. 136-137; rhb-2006:§30.9.4, eqs. (30.122)-(30.123) and the moments, p. 1193"}
Let $d, r, s$ be positive integers.

**Chi-squared.** $X$ has the **chi-squared distribution with $d$ degrees of freedom**, written $\chi^{2}(d)$, if it is a gamma variate with parameters $\lambda = \tfrac12$ and $t = \tfrac12 d$, that is if it has density

$$
f(x) \;=\; \frac{1}{2^{d/2}\,\Gamma(d/2)}\, x^{d/2 - 1} e^{-x/2} ,
\qquad x > 0 ,
$$

with $\Gamma$ the gamma function of :ref[]{to=spec.gamma-function}. Its mean is $d$ and its variance $2d$. Equivalently, and this is the form used throughout statistics, $\chi^{2}(d)$ is the law of $Z_1^{2} + \cdots + Z_d^{2}$ for independent standard normal $Z_i$: the gamma moment generating function is multiplicative in the shape parameter, so a sum of independent $\chi^{2}(d_1)$ and $\chi^{2}(d_2)$ variates is $\chi^{2}(d_1+d_2)$, and one standard normal square is $\chi^{2}(1)$: for $y > 0$, $\Pr(Z^{2} \le y) = \Pr(-\sqrt y \le Z \le \sqrt y)$, whose derivative is $(2\pi y)^{-1/2}e^{-y/2}$, the density above with $d = 1$ (Grimmett and Stirzaker, Example (4.7.1), p. 122). Riley, Hobson and Bence write the same object as $\chi_n^{2} = \sum_i (X_i - \mu_i)^{2}/\sigma_i^{2}$ for independent $X_i \sim N(\mu_i, \sigma_i^{2})$, and state that if the $X_i$ are subject to $m$ independent linear constraints then the order drops to $n - m$. The theorem below is the leading instance of that rule.

**Student's $t$.** If $V \sim N(0,1)$ and $U \sim \chi^{2}(r)$ are **independent**, then

$$
T \;=\; \frac{V}{\sqrt{U/r}}
$$

has the **$t$ distribution with $r$ degrees of freedom**, written $t(r)$, with density

$$
f_T(t) \;=\; \frac{\Gamma\bigl(\tfrac12(r+1)\bigr)}{\sqrt{\pi r}\;\Gamma\bigl(\tfrac12 r\bigr)}
\left(1 + \frac{t^{2}}{r}\right)^{-\frac12 (r+1)} ,
\qquad -\infty < t < \infty .
$$

It is symmetric about $0$; $t(1)$ is the Cauchy distribution, which has no mean, and for $r \ge 2$ the mean is $0$. As $r \to \infty$ the density tends to $(2\pi)^{-1/2}e^{-t^{2}/2}$, since $(1+t^{2}/r)^{-r/2} \to e^{-t^{2}/2}$.

**Fisher's $F$.** If $U \sim \chi^{2}(r)$ and $V \sim \chi^{2}(s)$ are **independent**, then

$$
F \;=\; \frac{U/r}{V/s}
$$

has the **$F$ distribution with $r$ and $s$ degrees of freedom**, written $F(r,s)$, with density

$$
f_F(x) \;=\; \frac{r\,\Gamma\bigl(\tfrac12(r+s)\bigr)}{s\,\Gamma\bigl(\tfrac12 r\bigr)\Gamma\bigl(\tfrac12 s\bigr)}
\cdot \frac{(rx/s)^{\frac12 r - 1}}{\bigl[1 + (rx/s)\bigr]^{\frac12 (r+s)}} ,
\qquad x > 0 .
$$

Grimmett and Stirzaker note two consequences that are immediate from the definition: $F^{-1} \sim F(s,r)$, by exchanging the roles of $U$ and $V$; and $T^{2} \sim F(1,r)$ when $T \sim t(r)$, because $V^{2} \sim \chi^{2}(1)$. The mean of $F(r,s)$ is $s/(s-2)$ when $s > 2$. Riley, Hobson and Bence write the normalising factor through the beta function $B\bigl(\tfrac12 r, \tfrac12 s\bigr) = \Gamma(\tfrac12 r)\Gamma(\tfrac12 s)/\Gamma(\tfrac12(r+s))$ of :ref[]{to=spec.beta-function}; the two forms are the same.
:::

:::statement[The sampling distributions of a normal sample]{provenance=adapted src="grimmett-stirzaker-2020:§4.10, Theorem (4.10.1) and the discussion of $U$, $V$, $T$ and $F$ that follows it, pp. 135-137"}
Let $X_1, \dots, X_n$ be independent, each with the $N(\mu, \sigma^{2})$ distribution, $n \ge 2$, and let $\overline X$ and $S^{2}$ be the sample mean and the sample variance with divisor $n-1$. Then:

1. $\overline X$ and $S^{2}$ are **independent** random variables;
2. $\overline X \sim N\bigl(\mu,\ \sigma^{2}/n\bigr)$;
3. $(n-1)S^{2}/\sigma^{2} \sim \chi^{2}(n-1)$.

Consequently, writing

$$
U = \frac{(n-1)S^{2}}{\sigma^{2}} \sim \chi^{2}(n-1) ,
\qquad
V = \frac{\sqrt n\,(\overline X - \mu)}{\sigma} \sim N(0,1) ,
$$

neither of which depends on $\sigma$ once it is formed, the ratio

$$
T \;=\; \frac{V}{\sqrt{U/(n-1)}} \;=\; \frac{\overline X - \mu}{S/\sqrt n}
$$

has the $t(n-1)$ distribution. **The unknown $\sigma$ has cancelled**: $T$ is computable from the data and $\mu$ alone, and its distribution involves no unknown parameter.

If, further, $Y_1,\dots,Y_m$ is a second sample, independent of the first, drawn from $N(\nu, \sigma^{2})$ with the **same** variance, and $S_Y^{2}$ is its sample variance, then $(m-1)S_Y^{2}/\sigma^{2} \sim \chi^{2}(m-1)$ independently of $(n-1)S^{2}/\sigma^{2}$, so the variance ratio

$$
\frac{S_Y^{2}}{S^{2}} \;=\; \frac{\bigl[(m-1)S_Y^{2}/\sigma^{2}\bigr]/(m-1)}{\bigl[(n-1)S^{2}/\sigma^{2}\bigr]/(n-1)}
\ \sim\ F(m-1,\, n-1) ,
$$

again free of $\sigma$.
:::

:::idea{provenance=original}
Only one idea is needed, and it is geometric. Write $Y_i = (X_i-\mu)/\sigma$; then the vector $Y = (Y_1,\dots,Y_n)$ has density proportional to $\exp\bigl(-\tfrac12 \lVert y\rVert^{2}\bigr)$, which depends on $y$ only through its length. So the law of $Y$ is unchanged by any rotation of $\mathbb{R}^{n}$, and the coordinates of $Y$ in **any** orthonormal frame are again independent standard normals.

Now choose the frame to suit the question. Let the first axis be the diagonal direction $n^{-1/2}(1,1,\dots,1)$. The first coordinate in that frame is $Z_1 = \sqrt n\,\overline Y$, which carries the sample mean; the remaining $n-1$ coordinates are orthogonal to the diagonal, and because the length is preserved, the sum of their squares is $\lVert Y\rVert^{2} - Z_1^{2} = \sum_i (Y_i - \overline Y)^{2}$, which is the sample variance up to a factor. So the mean lives on one axis and the variance on the orthogonal complement of that axis: *independence of $\overline X$ and $S^{2}$ is the independence of coordinates in a rotated frame*, and the $n-1$ degrees of freedom are literally the dimension of the complement.

The $t$ and $F$ laws then cost nothing beyond a change of variables: $t$ is the law of a normal divided by the root of an independent chi-squared, $F$ the law of a ratio of two independent chi-squareds, and both densities come out of the standard two-variable transformation formula followed by one gamma integral.
:::

:::proof[Independence, and the three laws]{provenance=adapted src="grimmett-stirzaker-2020:§4.10, proof of Theorem (4.10.1), eqs. (2)-(4), p. 136, and the two density calculations, pp. 136-137"}
**Step 1: standardise.** Put $Y_i = (X_i - \mu)/\sigma$. Each $Y_i$ is $N(0,1)$ and they are independent, so the joint density of $Y = (Y_1,\dots,Y_n)$ is

$$
f(y) \;=\; (2\pi)^{-n/2}\exp\Bigl(-\tfrac12 \textstyle\sum_{i=1}^{n} y_i^{2}\Bigr)
\;=\; (2\pi)^{-n/2} e^{-\lVert y\rVert^{2}/2} .
$$

Also $\overline Y = (\overline X - \mu)/\sigma$ and

$$
\sum_{i=1}^{n}\bigl(Y_i - \overline Y\bigr)^{2} \;=\; \frac{1}{\sigma^{2}}\sum_{i=1}^{n}\bigl(X_i-\overline X\bigr)^{2} \;=\; \frac{(n-1)S^{2}}{\sigma^{2}} ,
$$

because the shift by $\mu$ cancels inside the bracket and the factor $\sigma$ comes out squared. So the theorem is a statement about a standard normal vector.

**Step 2: rotate.** Let $A$ be any real orthogonal $n\times n$ matrix and let $Z$ be the coordinates of $Y$ in the rotated frame, so that $Y_i = \sum_{j} Z_j a_{ji}$ and, because $A$ preserves lengths (:ref[]{to=linalg.unitary-orthogonal-matrices}), $\sum_i Y_i^{2} = \sum_i Z_i^{2}$. The Jacobian of an orthogonal map has modulus $1$, so by the change-of-variables formula the density of $Z$ is $(2\pi)^{-n/2}e^{-\lVert z\rVert^{2}/2}$: the same function. It factorises into $n$ standard normal densities, hence **$Z_1,\dots,Z_n$ are independent $N(0,1)$ variables**. This is the only place normality is used, and it is used essentially: no other law on $\mathbb{R}^{n}$ with independent identically distributed coordinates has a rotation-invariant density.

**Step 3: choose the rotation.** Take the first row of $A$ to be $n^{-1/2}(1,1,\dots,1)$, a unit vector, and complete it to an orthonormal basis of $\mathbb{R}^{n}$ (possible by Gram-Schmidt; the rows $2,\dots,n$ are then any orthonormal basis of the hyperplane $\sum_i y_i = 0$). With this choice

$$
Z_1 \;=\; \frac{1}{\sqrt n}\sum_{i=1}^{n} Y_i \;=\; \sqrt n\, \overline Y ,
$$

and $Z_1 \sim N(0,1)$ by Step 2 - which says exactly that $\overline Y \sim N(0,1/n)$, that is $\overline X \sim N(\mu, \sigma^{2}/n)$. That is conclusion 2.

**Step 4: identify the rest of the length.** Subtracting the first square from the total,

$$
\sum_{j=2}^{n} Z_j^{2}
\;=\; \sum_{i=1}^{n} Y_i^{2} - Z_1^{2}
\;=\; \sum_{i=1}^{n} Y_i^{2} - n\,\overline Y^{2}
\;=\; \sum_{i=1}^{n}\bigl(Y_i - \overline Y\bigr)^{2}
\;=\; \frac{(n-1)S^{2}}{\sigma^{2}} ,
$$

the third equality being the identity $\sum_i (Y_i-\overline Y)^{2} = \sum_i Y_i^{2} - n\overline Y^{2}$, got by expanding the square and using $\sum_i (Y_i - \overline Y) = 0$.

**Step 5: read off independence and the chi-squared law.** By Step 2 the variable $Z_1$ is independent of the block $(Z_2,\dots,Z_n)$. By Step 3, $\overline X$ is a function of $Z_1$ alone; by Step 4, $S^{2}$ is a function of $Z_2,\dots,Z_n$ alone. Functions of independent variables are independent, so $\overline X$ and $S^{2}$ are independent: conclusion 1. And by Step 4, $(n-1)S^{2}/\sigma^{2}$ is a sum of the squares of $n-1$ independent standard normal variables, hence $\chi^{2}(n-1)$ by the additivity of chi-squared recorded in the definition: conclusion 3. The order is $n-1$, not $n$, because one linear constraint has been imposed - the residuals $Y_i - \overline Y$ sum to zero and so lie in a hyperplane.

**Step 6: the $t$ density.** With $U$ and $V$ as in the statement and $r = n-1$, $U$ and $V$ are independent by conclusion 1, so their joint density is the product

$$
f(u,v) \;=\; \frac{(\tfrac12)^{r/2}}{\Gamma(\tfrac12 r)}\,u^{\frac12 r - 1}e^{-u/2}
\cdot \frac{1}{\sqrt{2\pi}}\, e^{-v^{2}/2} ,
\qquad u > 0 .
$$

Change variables to $(w,t)$ with $w = u$ and $t = v\sqrt{r/u}$, so $v = t\sqrt{w/r}$ and, at fixed $w$, $dv = \sqrt{w/r}\,dt$. The Jacobian is therefore $\sqrt{w/r}$ and

$$
f_{U,T}(w,t) \;=\; \sqrt{w/r}\; f\bigl(w,\, t\sqrt{w/r}\bigr)
\;=\; \frac{(\tfrac12)^{r/2}}{\Gamma(\tfrac12 r)\sqrt{2\pi r}}\;
w^{\frac12(r-1)}\exp\Bigl[-\frac{w}{2}\Bigl(1+\frac{t^{2}}{r}\Bigr)\Bigr] .
$$

Integrate out $w$ over $(0,\infty)$. Substituting $\xi = \tfrac{w}{2}(1+t^{2}/r)$ turns the integral into $\Gamma\bigl(\tfrac12(r+1)\bigr)$ times $\bigl[\tfrac12(1+t^{2}/r)\bigr]^{-\frac12(r+1)}$, by the definition of the gamma function. The powers of $\tfrac12$ do not quite cancel: $(\tfrac12)^{r/2}\,(\tfrac12)^{-\frac12(r+1)} = \sqrt2$, and this factor turns $\sqrt{2\pi r}$ into $\sqrt{\pi r}$, leaving

$$
f_T(t) \;=\; \frac{\Gamma\bigl(\tfrac12(r+1)\bigr)}{\sqrt{\pi r}\,\Gamma\bigl(\tfrac12 r\bigr)}\Bigl(1+\frac{t^{2}}{r}\Bigr)^{-\frac12(r+1)} ,
$$

the $t(r)$ density. Finally $T = V/\sqrt{U/(n-1)}$ equals $\sqrt n(\overline X-\mu)/\sigma$ divided by $S/\sigma$, and the $\sigma$'s cancel, giving $T = (\overline X - \mu)/(S/\sqrt n)$ as claimed.

**Step 7: the $F$ density.** Let $U\sim\chi^{2}(r)$ and $V\sim\chi^{2}(s)$ be independent and set $x = (U/r)/(V/s)$. The same two-variable device works: keep $w = V$ as the second coordinate, so $U = (r/s)\,x\,w$ with Jacobian $\partial U/\partial x = (r/s)w$, multiply the two gamma densities, and integrate $w$ out over $(0,\infty)$. The $w$-integral is again a gamma integral, of total order $\tfrac12(r+s)$, and after collecting constants one obtains

$$
f_F(x) \;=\; \frac{r\,\Gamma\bigl(\tfrac12(r+s)\bigr)}{s\,\Gamma\bigl(\tfrac12 r\bigr)\Gamma\bigl(\tfrac12 s\bigr)}
\cdot\frac{(rx/s)^{\frac12 r-1}}{\bigl[1+(rx/s)\bigr]^{\frac12(r+s)}} ,
\qquad x>0 .
$$

Applying this with $U = (m-1)S_Y^{2}/\sigma^{2}$ and $V = (n-1)S^{2}/\sigma^{2}$, which are independent because the two samples are, gives the last claim of the statement. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Normality.** Used once, in Step 2, and it is what the whole theorem rests on. Rotation invariance alone does not give independent coordinates (the uniform law on a disc is rotation-invariant, yet its two coordinates are dependent); the fact Step 2 rests on is narrower. A vector of independent standard normals has a rotation-invariant density, and among laws on $\mathbb{R}^{n}$ with independent, identically distributed coordinates and a density, only a centred normal has one. For any other parent law, $\overline X$ and $S^{2}$ are in general *dependent*. A two-point example makes this concrete: let $n=2$ and let each $X_i$ be $\pm 1$ with probability $\tfrac12$. Then $\overline X \in \{-1,0,1\}$ and $S^{2} = (X_1-X_2)^{2}/2 \in \{0,2\}$, and $S^{2} = 0$ holds exactly when $\overline X = \pm 1$. Knowing one determines the other, so they are as far from independent as possible, although $\mathbb{E}(S^{2}) = \sigma^{2} = 1$ still holds.

**Independence of the $X_i$.** Used in Step 1 to write the joint density as a product. Without it there is no rotation-invariant density to exploit. Correlated normal data can be brought back into the scheme by whitening - multiply by $\Sigma^{-1/2}$, with $\Sigma$ the covariance matrix, as in :ref[]{to=prob.multivariate-normal} - but then the statistic being computed is not the ordinary $S^{2}$.

**Common variance $\sigma^{2}$ for both samples**, in the $F$ statement. If the two populations had variances $\sigma_1^{2} \ne \sigma_2^{2}$, the ratio $S_Y^{2}/S^{2}$ would be $(\sigma_2^{2}/\sigma_1^{2})$ times an $F(m-1,n-1)$ variable, so its distribution would involve the unknown ratio and could not be used without further assumption. This is precisely why the ratio is informative about that ratio.

**$n \ge 2$.** For $n = 1$ there is no $S^{2}$, and the complement of the diagonal axis in $\mathbb{R}^{1}$ is $\{0\}$; the theorem degenerates correctly rather than failing.

**What survives without normality.** Only $\mathbb{E}(\overline X) = \mu$ and $\operatorname{var}(\overline X) = \sigma^{2}/n$, and - as a limit, not an identity - the approximate normality of $\overline X$ for large $n$ given by :ref[the central limit theorem]{to=prob.central-limit-theorem}. The exact $t$ and $F$ laws are properties of the normal family alone, though they are mildly robust in practice.

**A convention to watch.** Riley, Hobson and Bence define the sample variance with divisor $N$ and accordingly write Student's statistic as $t = (\bar x - \mu_0)/\bigl(s/\sqrt{N-1}\bigr)$, with $N-1$ under the root. Since $(N-1)S^{2} = Ns^{2}$, one has $s/\sqrt{N-1} = S/\sqrt N$, so their $t$ and ours are the *same number* computed from the same data; the degrees of freedom are $N-1$ in both. Only the intermediate symbol $s$ differs. The same substitution turns their $u = Ns^{2}/\sigma_0^{2} \sim \chi^{2}_{N-1}$ into our conclusion 3.
:::

:::method[Using the three distributions]{provenance=original}
Given a sample $x_1,\dots,x_n$ believed to come from a normal population:

1. Compute $\bar x = n^{-1}\sum_i x_i$ and the sum of squared deviations $Q = \sum_i (x_i - \bar x)^{2}$; then $S^{2} = Q/(n-1)$ and $S = \sqrt{S^{2}}$.
2. **If $\sigma$ is known**, use $\sqrt n\,(\bar x - \mu)/\sigma \sim N(0,1)$.
3. **If $\sigma$ is unknown**, use $t = (\bar x - \mu)/(S/\sqrt n) \sim t(n-1)$. This is the only change: the standard normal is replaced by $t$ with $n-1$ degrees of freedom, whose tails are heavier, the price of not knowing $\sigma$.
4. **For a statement about $\sigma^{2}$ itself**, use $U = (n-1)S^{2}/\sigma^{2} \sim \chi^{2}(n-1)$.
5. **To compare the spreads of two independent normal samples**, of sizes $n_1$ and $n_2$, use $F = S_2^{2}/S_1^{2} \sim F(n_2-1,\,n_1-1)$ under the hypothesis of equal variances. Since $F^{-1} \sim F(n_1-1,\,n_2-1)$, the ratio may be taken either way up, but the orientation must be fixed before the data are seen. For a one-sided question ("is sample 2 the noisier?") read the single tail on that side. For a two-sided question ("do the spreads differ?") the tail probability is twice the smaller of $\Pr(F > f)$ and $\Pr(F < f)$ at the observed value $f$. Putting whichever sample variance happens to be larger on top and then reading one upper tail undoubled roughly halves this figure, because the orientation has been chosen from the data.
6. Convert the resulting tail probability into an interval or a test with :ref[]{to=stats.confidence-intervals} or :ref[]{to=stats.hypothesis-testing}; this unit supplies the distributions, not the decisions.
:::

:::example[A calibration run: mean, variance and a variance ratio]{provenance=original}
A platinum resistance thermometer is held in a stirred water reference bath and read eight times. The readings, in degrees Celsius, are

$$
20.12,\quad 19.87,\quad 20.31,\quad 20.05,\quad 19.76,\quad 20.44,\quad 19.95,\quad 20.18 .
$$

Treat them as a random sample from $N(\mu,\sigma^{2})$.

**Sample mean.** The readings sum to $160.68$, so with $n=8$

$$
\bar x = \frac{160.68}{8} = 20.085\ ^{\circ}\mathrm{C}.
$$

**Sample variance.** The deviations from $20.085$ are $0.035,\,-0.215,\,0.225,\,-0.035,\,-0.325,\,0.355,\,-0.135,\,0.095$, and they sum to zero, as they must. Their squares sum to

$$
Q = \sum_{i=1}^{8}(x_i-\bar x)^{2} = 0.3582 ,
$$

so

$$
S^{2} = \frac{Q}{n-1} = \frac{0.3582}{7} = 0.05117\ (^{\circ}\mathrm{C})^{2} ,
\qquad S = 0.22621\ ^{\circ}\mathrm{C} .
$$

For comparison, the Riley-Hobson-Bence convention would give $s^{2} = Q/8 = 0.044775$ and $s = 0.21160$, smaller by the factor $\sqrt{7/8}$.

**Distance of the mean from a reference value.** The bath is believed to sit at $\mu_0 = 20.000\,^{\circ}\mathrm{C}$. Since $\sigma$ is unknown we use the $t$ statistic of step 3:

$$
t = \frac{\bar x - \mu_0}{S/\sqrt n} = \frac{20.085 - 20.000}{0.22621/\sqrt 8}
= \frac{0.085}{0.079977} = 1.0628 ,
$$

to be read against $t(7)$. The two-sided tail probability is $\Pr\bigl(\lvert T\rvert > 1.0628\bigr) = 0.3232$ for $T \sim t(7)$, so a departure at least this large happens in about a third of samples of this size even when the bath is exactly at $20\,^{\circ}\mathrm{C}$. Had $\sigma$ been treated as known and equal to $S$, the same ratio would have been read against $N(0,1)$, giving the smaller tail $0.2879$; the difference is the penalty for estimating $\sigma$ from seven degrees of freedom.

**A statement about the spread.** The manufacturer quotes a repeatability of $\sigma_0 = 0.25\,^{\circ}\mathrm{C}$. Under that value, step 4 gives

$$
U = \frac{(n-1)S^{2}}{\sigma_0^{2}} = \frac{0.3582}{0.0625} = 5.7312 ,
$$

a draw from $\chi^{2}(7)$, whose mean is $7$ and standard deviation $\sqrt{14} = 3.742$. The upper tail is $\Pr\bigl(\chi^{2}(7) > 5.7312\bigr) = 0.5715$: the observed scatter is entirely ordinary for the quoted repeatability.

**A second sample and the variance ratio.** The bath is re-read six times the next day, after the probe has been re-seated:

$$
20.31,\quad 19.62,\quad 20.55,\quad 19.88,\quad 20.44,\quad 19.70 ,
$$

with $\bar y = 120.50/6 = 20.0833$ and $\sum_j (y_j-\bar y)^{2} = 0.79933$, hence $S_Y^{2} = 0.79933/5 = 0.159867$. The question is two-sided - did the spread change between the days? - and we fix the orientation as day 2 over day 1:

$$
F = \frac{S_Y^{2}}{S^{2}} = \frac{0.159867}{0.051171} = 3.1241 ,
$$

a draw from $F(5,7)$ if the two days share one $\sigma$. The upper tail is $\Pr\bigl(F(5,7) > 3.1241\bigr) = 0.0848$ and the lower tail is $0.9152$, so by step 5 the two-sided tail probability is $2 \times 0.0848 = 0.1696$; for a two-sided test at the $5\%$ level the ratio would have to exceed the $97.5\%$ point of $F(5,7)$, which is $5.2852$. The second day is noisier, but not by more than the ratio of two sample variances of these sizes routinely produces. The single tail $0.0848$ would be the right figure only for the one-sided question "did re-seating make the probe noisier?", posed before the second day's readings were taken.

Every number above was computed to the digits shown; the three tail probabilities are $0.3232$, $0.5715$ and $0.1696$.
:::

:::application[Error bars, instrument qualification, and the analysis of variance]{provenance=original}
**Quoting an error bar.** The statement "$\bar x \pm S/\sqrt n$ with $n-1$ degrees of freedom" is the normal-sample result above, and it is what a laboratory writes down after repeating a measurement. The $\sqrt n$ is conclusion 2; the $n-1$ is conclusion 3; the fact that one may divide by the *estimated* $\sigma$ and still know the exact distribution is conclusion 1 together with the $t$ law. For $n$ of order ten the difference between the $t$ and normal tails is tens of percent, which is why small-sample work quotes degrees of freedom and not just a standard error.

**Qualifying an instrument.** A detector specification of the form "resolution better than $\sigma_0$" is checked by reading $(n-1)S^{2}/\sigma_0^{2}$ against $\chi^{2}(n-1)$, exactly as in the example. The same chi-squared appears, with $n-M$ in place of $n-1$, as the goodness-of-fit statistic of a :ref[least-squares fit]{to=stats.least-squares-regression} with $M$ fitted parameters: each fitted parameter is one more linear constraint on the residual vector, one more dimension removed from the orthogonal complement, in exactly the sense of Step 4.

**Comparing two populations.** The $F$ ratio is the engine of the analysis of variance, in which a total sum of squares is split into orthogonal pieces - between groups and within groups - whose expectations differ if and only if the group means differ. The splitting is the same rotation argument applied to a coarser partition of $\mathbb{R}^{n}$, and the independence of the pieces, which is what makes the ratio an $F$ variable, is again the independence of coordinates in a rotated frame.

**Spectral estimation.** A periodogram ordinate formed from Gaussian noise is a sum of two squared normals, hence $\sigma^{2}\chi^{2}(2)/2$ in distribution, which is why a raw :ref[periodogram]{to=stats.periodogram} has a $100\%$ relative error however long the record, and why averaging independent segments - adding degrees of freedom - is the only cure. The same counting gives the degrees of freedom of a smoothed spectral estimate.
:::
