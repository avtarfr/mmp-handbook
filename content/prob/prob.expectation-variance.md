---
id: prob.expectation-variance
title: Expectation, variance and covariance
kind: definition
level: core
summary: Defines the expectation of a random variable and the three derived numbers that summarise a distribution and the link between two of them, proves the rules that make expectation linear and variance quadratic, and establishes the Cauchy-Schwarz bound that confines the correlation coefficient to the interval from minus one to one.
prereqs: [prob.random-variables]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "$\\S$3.3, pp. 53-57: the averaging heuristic leading to Definition (3.3.1) of the mean with its absolute-convergence proviso; Lemma (3.3.3), the change of variable formula that the authors note is 'called by some' the law of the unconscious statistician, with Example (3.3.4) checking it against a direct computation; Definition (3.3.5) of the $k$th moment $m_k=\\mathbb{E}(X^k)$ and the $k$th central moment $\\sigma_k$, and the derivation $\\sigma_2=m_2-m_1^2$; Theorem (3.3.8), the three properties making $\\mathbb{E}$ a positive linear operator with $\\mathbb{E}(1)=1$, with its proof via indicators of $A_x\\cap B_y$; Lemma (3.3.9), $\\mathbb{E}(XY)=\\mathbb{E}(X)\\mathbb{E}(Y)$ for independent $X,Y$, and the remark that this is not true in general; Definition (3.3.10) of uncorrelated; Theorem (3.3.11), $\\operatorname{var}(aX)=a^2\\operatorname{var}(X)$ and additivity of variance for uncorrelated variables, with the proof expanding the square; Example (3.3.12), a mass function $f(k)=Ak^{-2}$ with no mean. $\\S$3.6, pp. 67-70: the joint mass function, Lemma (3.6.6), the two-variable form of the law of the unconscious statistician; Definition (3.6.7) of covariance and of the correlation coefficient $\\rho$, with the expansion $\\operatorname{cov}(X,Y)=\\mathbb{E}(XY)-\\mathbb{E}X\\,\\mathbb{E}Y$ and the remark that covariance alone has no interpretable scale; Lemma (3.6.8), $|\\rho|\\le1$ with equality exactly when $\\mathbb{P}(aX+bY=c)=1$, deduced from Theorem (3.6.9), the Cauchy-Schwarz inequality, whose proof treats $\\mathbb{E}((aX-bY)^2)\\ge0$ as a quadratic in $a$ with non-positive discriminant. $\\S$4.3, pp. 103-104: Definition (4.3.1) of the mean of a continuous variable, the unifying Stieltjes notation $\\mathbb{E}X=\\int x\\,dF_X(x)$, Theorem (4.3.3), the continuous change of variable formula, Lemma (4.3.4), $\\mathbb{E}X=\\int_0^\\infty[1-F(x)]\\,dx$ for non-negative $X$ with the proof by exchanging the order of integration, and eq. (4.3.6) defining the moments of a continuous variable by the same formula as in the discrete case. Also: the Cauchy density and the remark that it has no moments, p. 108; and $\\mathbb{E}(aX+bY)=a\\mathbb{E}X+b\\mathbb{E}Y$ for jointly continuous variables, p. 112"
    pages: "53-57, 67-70, 103-104, 108, 112"
    role: the definitions of mean, moments, central moments, variance, covariance and correlation in the form we give them; the law of the unconscious statistician in one and two variables and its name; the proof route for linearity, for the product rule under independence, for the behaviour of variance under scaling and addition, and for the Cauchy-Schwarz inequality and the resulting bound on $\\rho$ with its equality case; the tail formula for the mean of a non-negative variable; and the examples of distributions with no mean
  - work: rhb-2006
    loc: "$\\S$30.5, pp. 1143-1147: eq. (30.45) defining $E[g(X)]$ by a sum or an integral with the proviso that the series converge absolutely or the integral exist, and the three consequent properties $E[a]=a$, $E[ag(X)]=aE[g(X)]$ and additivity; $\\S$30.5.1, the mean (30.46) and the alternative notations $\\mu$ and $\\bar x$; $\\S$30.5.2, mode and median, with the quartiles and percentiles defined through $F$; $\\S$30.5.3, the variance (30.48) with the properties $V[a]=0$ and $V[aX+b]=a^2V[X]$, and the standard deviation as its positive square root; $\\S$30.5.4, the $k$th moment (30.50) and the identity (30.51) $V[X]=E[X^2]-\\mu^2$; $\\S$30.12, pp. 1199-1202: the expectation of a function of two variables, the means (30.131) and variances (30.132) read off a joint distribution, the worked proof that independence gives $E[XY]=E[X]E[Y]$, Definition (30.133) of the covariance and (30.134) of the correlation, the expansion (30.135), the statement that independence implies zero correlation but not conversely, the observation that any joint density symmetric in $x$ about $\\mu_X$ has zero correlation, and the computation showing $\\operatorname{Corr}=a/|a|$ when $Y=aX+b$"
    pages: "1143-1147, 1199-1202"
    role: the applied formulation of expectation as a sum or integral against the distribution, the names and notation used in the physical sciences, the standard-deviation vocabulary, the explicit statement that uncorrelated does not imply independent together with the symmetry criterion that generates counterexamples, and the sign convention $\\operatorname{Corr}=\\pm1$ for an increasing or decreasing linear relation
  - work: arfken-2013
    loc: "$\\S$23.2, pp. 1137-1143: eqs. (23.20)-(23.21) defining the mean of a discrete and of a continuous random variable, with the argument at (23.22) that the arithmetic mean is the value minimising the sum of squared deviations while the median minimises the sum of absolute deviations; eq. (23.23) for the standard deviation of a data set and the expansion giving (23.24), $\\sigma^2=\\langle x^2\\rangle-\\langle x\\rangle^2$; eq. (23.25), the pairwise-difference form $\\sum_{i<k}(x_i-x_k)^2=n^2\\sigma^2$; eqs. (23.26)-(23.28), the variance of a general distribution and the same identity in that generality; the linear-change rule $\\langle Y\\rangle=a\\langle X\\rangle+b$, $\\sigma^2(Y)=a^2\\sigma^2(X)$ with its proof; eq. (23.31), the central moments; eqs. (23.34)-(23.35), means and variances from a joint density; eq. (23.36), the covariance, with the factorisation argument showing it vanishes for independent variables; and the proof on p. 1143 that $|\\operatorname{cov}(X,Y)|\\le\\sigma(X)\\sigma(Y)$ by requiring the quadratic form $Q=\\langle[a(X-\\langle X\\rangle)+c(Y-\\langle Y\\rangle)]^2\\rangle\\ge0$ to have non-positive discriminant, together with the theorem that the correlation is $\\pm1$ if and only if $\\mathbb{P}(Y=aX+b)=1$"
    pages: "1137-1143"
    role: the data-analysis motivation for the mean and the standard deviation, including the least-squares characterisation we quote; the quadratic-form proof of the Cauchy-Schwarz bound, which we follow in preference to the one-variable version because it displays the two free coefficients; and the statement of the equality case
  - work: folland-1999
    loc: "$\\S$10.1, pp. 314-315: the dictionary entry identifying the integral $\\int f\\,d\\mu$ with the expectation $\\mathbb{E}(X)$ and $\\mathcal{L}^p$ membership with having a finite $p$th moment; the definitions of the variance $\\sigma^2(X)$ and standard deviation $\\sigma(X)$, the statement that $\\sigma^2(X)=\\infty$ when $X\\notin L^2$, and the observation that $\\mathbb{E}[(X-a)^2]$ is a quadratic in $a$ minimised at $a=\\mathbb{E}(X)$, whence $\\sigma^2(X)=\\mathbb{E}(X^2)-\\mathbb{E}(X)^2$; Proposition 10.1 and the formulas $\\mathbb{E}(X)=\\int t\\,d\\mathbb{P}_X(t)$, $\\sigma^2(X)=\\int(t-\\mathbb{E}X)^2d\\mathbb{P}_X(t)$ and $\\mathbb{E}(X+Y)=\\int(t+s)\\,d\\mathbb{P}_{(X,Y)}(t,s)$, with the remark that all probabilistically relevant properties are expressible through joint distributions"
    pages: "314-315"
    role: the identification of expectation with the Lebesgue integral, which is what makes the discrete and continuous definitions two cases of one; the existence condition $X\\in L^2$ for the variance; and the characterisation of the mean as the minimiser of mean squared deviation
---

:::note[Four numbers]{provenance=original}
A distribution function contains everything, and is therefore hard to compare, hard to communicate and hard to estimate from data. In practice a distribution is summarised by a few numbers: where it sits, how wide it is, and — for two variables at once — how much one moves with the other.

The first is the expectation, the centre of mass of the distribution. The second is the variance, its moment of inertia about that centre. The third, covariance, is the mixed second moment of a pair, and the fourth, correlation, is the covariance rescaled so that it lies in $[-1,1]$ and can be quoted without units. The rescaling is not cosmetic: a covariance of $10^{-6}$ may mean total dependence or none at all, depending on the units of the two variables, and a correlation of $-0.9$ means the same thing whatever they are measured in.

Everything in this unit follows from two facts: expectation is linear, and $\mathbb{E}(Z^2) \ge 0$.
:::

:::definition[Expectation]{provenance=adapted src="grimmett-stirzaker-2020:Definition (3.3.1), p. 53, Definition (4.3.1) and the unifying notation on p. 103; rhb-2006:eqs. (30.45)-(30.46), p. 1143; folland-1999:§10.1, pp. 314-315"}
Let $X$ be a random variable on $(\Omega, \mathcal{F}, \mathbb{P})$, in the sense of :ref[Random variables and distributions]{to=prob.random-variables}.

If $X$ is **discrete** with mass function $f$, its **expectation** (mean, expected value) is
$$
\mathbb{E}(X) \; = \; \sum_{x} x\,f(x) ,
$$
the sum running over the countably many $x$ with $f(x) > 0$, **provided the sum converges absolutely**. If $X$ is **continuous** with density $f$,
$$
\mathbb{E}(X) \; = \; \int_{-\infty}^{\infty} x\,f(x)\,dx ,
$$
provided $\int \lvert x \rvert f(x)\,dx < \infty$. When the stated condition fails, $X$ has no mean.

Both are instances of one definition. The distribution $\mathbb{P}_X$ of $X$ is a measure on $\mathbb{R}$, and
$$
\mathbb{E}(X) \; = \; \int_{\mathbb{R}} t \; d\mathbb{P}_X(t) \; = \; \int_{\Omega} X \, d\mathbb{P} ,
$$
a Lebesgue integral (:ref[The Lebesgue integral]{to=measure.lebesgue-integral}); expectation *is* integration, and in Folland's dictionary the two words name the same operation. Grimmett and Stirzaker write this uniformly as $\mathbb{E}(X) = \int x \, dF_X(x)$, which also covers variables that are neither discrete nor continuous. We write $\mu$ or $\mu_X$ for $\mathbb{E}(X)$ where it is convenient, and omit the parentheses as $\mathbb{E}X$.

**Moments.** For a positive integer $k$, the **$k$th moment** of $X$ is $m_k = \mathbb{E}(X^{k})$ and the **$k$th central moment** is $\sigma_k = \mathbb{E}\bigl( (X - m_1)^{k} \bigr)$, each defined when the corresponding expectation exists.
:::

:::definition[Variance, covariance, correlation]{provenance=adapted src="grimmett-stirzaker-2020:Definition (3.3.5) and the computation of $\\sigma_2$, p. 54, Definition (3.3.10), p. 56, and Definition (3.6.7), p. 68; rhb-2006:eq. (30.48) and §30.5.3, p. 1146, and eqs. (30.133)-(30.134), p. 1200; arfken-2013:eqs. (23.26)-(23.27) and (23.36), pp. 1139, 1142; folland-1999:§10.1, p. 314"}
Let $X$ and $Y$ be random variables with finite second moments, that is $\mathbb{E}(X^{2}) < \infty$ and $\mathbb{E}(Y^{2}) < \infty$; equivalently $X, Y \in L^{2}$, in the language of :ref[$L^p$ spaces]{to=measure.lp-spaces}. Write $\mu_X = \mathbb{E}X$ and $\mu_Y = \mathbb{E}Y$.

The **variance** of $X$ is its second central moment,
$$
\operatorname{var}(X) \; = \; \mathbb{E}\bigl( (X - \mu_X)^{2} \bigr) \; \ge \; 0 ,
$$
and the **standard deviation** is $\sigma_X = \sqrt{\operatorname{var}(X)}$, which carries the same units as $X$. A variance is never negative.

The **covariance** of $X$ and $Y$ is their mixed central second moment,
$$
\operatorname{cov}(X,Y) \; = \; \mathbb{E}\bigl( (X - \mu_X)(Y - \mu_Y) \bigr) ,
$$
so that $\operatorname{cov}(X,X) = \operatorname{var}(X)$: covariance generalises variance. $X$ and $Y$ are **uncorrelated** when $\operatorname{cov}(X,Y) = 0$, equivalently when $\mathbb{E}(XY) = \mathbb{E}(X)\mathbb{E}(Y)$.

When $\sigma_X$ and $\sigma_Y$ are both non-zero, the **correlation coefficient** is
$$
\rho(X,Y) \; = \; \frac{\operatorname{cov}(X,Y)}{\sigma_X \, \sigma_Y} ,
$$
a dimensionless number. If $\rho > 0$ the variables are positively correlated, if $\rho < 0$ negatively correlated, and if $\rho = 0$ uncorrelated.
:::

:::statement[The rules]{provenance=adapted src="grimmett-stirzaker-2020:Lemma (3.3.3), p. 54, Theorems (3.3.8) and (3.3.11) and Lemma (3.3.9), pp. 55-56, Lemma (3.6.6), p. 68, Lemma (3.6.8) and Theorem (3.6.9), p. 69, Theorem (4.3.3) and Lemma (4.3.4), pp. 103-104; rhb-2006:the properties (i)-(iii) on p. 1144, eq. (30.51), p. 1147, and eq. (30.135), p. 1201; arfken-2013:property 2 on p. 1139 and the theorem on p. 1143"}
Let $X$ and $Y$ be random variables and $a, b, c \in \mathbb{R}$; each statement is asserted whenever the expectations it names exist.

1. **Law of the unconscious statistician.** For $g : \mathbb{R} \to \mathbb{R}$,
   $$
   \mathbb{E}\bigl( g(X) \bigr) = \sum_{x} g(x) f(x) \quad \text{(discrete)} , \qquad
   \mathbb{E}\bigl( g(X) \bigr) = \int_{-\infty}^{\infty} g(x) f(x)\,dx \quad \text{(continuous)} ,
   $$
   provided the sum converges absolutely or the integral exists. The density of $g(X)$ is never needed. For two variables with joint mass function or density $f_{X,Y}$ and $g:\mathbb{R}^{2}\to\mathbb{R}$, the same formula holds with $f_{X,Y}$ in place of $f$ and a double sum or integral. Grimmett and Stirzaker call this the change of variable formula and record that it is also known by the longer name used here.
2. **Positive linear operator.** $\mathbb{E}(1) = 1$; if $X \ge 0$ then $\mathbb{E}(X) \ge 0$; and
   $$
   \mathbb{E}(aX + bY) = a\,\mathbb{E}(X) + b\,\mathbb{E}(Y) .
   $$
   No independence is required. In particular $\mathbb{E}(a) = a$ for a constant $a$.
3. **Products under independence.** If $X$ and $Y$ are independent then $\mathbb{E}(XY) = \mathbb{E}(X)\mathbb{E}(Y)$, so independent variables are uncorrelated. The converse is false; see the remark.
4. **Computing formulas.**
   $$
   \operatorname{var}(X) = \mathbb{E}(X^{2}) - \bigl( \mathbb{E}X \bigr)^{2} , \qquad
   \operatorname{cov}(X,Y) = \mathbb{E}(XY) - \mathbb{E}(X)\mathbb{E}(Y) .
   $$
5. **Behaviour under a linear change.** $\operatorname{var}(a) = 0$ for a constant, and
   $$
   \operatorname{var}(aX + b) = a^{2}\operatorname{var}(X) , \qquad
   \operatorname{cov}(aX + b, cY + d) = ac \operatorname{cov}(X,Y) , \qquad
   \rho(aX+b, cY+d) = \operatorname{sgn}(ac)\,\rho(X,Y)
   $$
   for $a, c \neq 0$. Variance is quadratic and blind to shifts; correlation is invariant up to the sign of the scalings.
6. **Variance of a sum.** $\operatorname{var}(X + Y) = \operatorname{var}(X) + \operatorname{var}(Y) + 2\operatorname{cov}(X,Y)$, which reduces to $\operatorname{var}(X) + \operatorname{var}(Y)$ when $X$ and $Y$ are uncorrelated — in particular when they are independent.
7. **Cauchy-Schwarz, and the range of $\rho$.** $\bigl( \mathbb{E}(XY) \bigr)^{2} \le \mathbb{E}(X^{2})\,\mathbb{E}(Y^{2})$, with equality if and only if $\mathbb{P}(aX = bY) = 1$ for some real $a, b$ not both zero. Consequently
   $$
   \lvert \operatorname{cov}(X,Y) \rvert \le \sigma_X \sigma_Y , \qquad \text{so} \qquad -1 \le \rho(X,Y) \le 1 ,
   $$
   and $\lvert \rho(X,Y) \rvert = 1$ holds exactly when $\mathbb{P}(aX + bY = c) = 1$ for some $a,b,c$ with $a, b$ not both zero: that is, exactly when $Y$ is almost surely an affine function of $X$. The sign of $\rho$ is then the sign of the slope.
8. **The mean minimises mean squared error.** $a \mapsto \mathbb{E}\bigl( (X-a)^{2} \bigr)$ is a quadratic in $a$ with its minimum at $a = \mathbb{E}(X)$, and the minimum value is $\operatorname{var}(X)$.
9. **Tail formula.** If $X \ge 0$ with distribution function $F$, then $\mathbb{E}(X) = \int_{0}^{\infty} \bigl[ 1 - F(x) \bigr]\,dx$.
:::

:::idea[Linearity, then one square]{provenance=original}
Only two mechanisms are at work.

*Linearity* comes from the fact that a sum is integrated term by term; in the discrete case one writes both variables as combinations of indicators of the joint events $\{X = x\} \cap \{Y = y\}$ and reorganises a double sum. Everything about means follows, and so does the computing formula for the variance: expand $(X - \mu)^{2}$ and apply linearity to the three terms, two of which collapse because $\mathbb{E}(X) = \mu$ is a constant. Rules 4, 5, 6 and 8 are this expansion carried out in slightly different arrangements.

*Positivity of a square* does the rest. The quantity $\mathbb{E}\bigl( (aU + cV)^{2} \bigr)$ is non-negative for every pair of real coefficients, and expanding it gives a quadratic form in $(a,c)$ whose coefficients are $\mathbb{E}(U^{2})$, $\mathbb{E}(UV)$ and $\mathbb{E}(V^{2})$. A quadratic that never goes negative has non-positive discriminant, and that inequality is Cauchy-Schwarz. Applying it to the centred variables $U = X - \mu_X$, $V = Y - \mu_Y$ bounds the covariance by the product of the standard deviations, which is what confines $\rho$ to $[-1,1]$. Equality forces the quadratic to have a real root, that is, to vanish for some $(a,c) \neq (0,0)$; and a non-negative random variable with zero mean is zero almost surely, so $aU + cV = 0$ with probability one. That is the linear relation in the equality case.

Independence enters only in rule 3, and only through the factorisation of the joint mass function or density, which turns a double sum into a product of single sums.
:::

:::proof[The rules]{provenance=adapted src="grimmett-stirzaker-2020:the proofs of Theorems (3.3.8) and (3.3.11), Lemma (3.3.9), pp. 55-56, Theorem (3.6.9), p. 69, and Lemma (4.3.4), p. 104; arfken-2013:the quadratic-form argument on p. 1143; rhb-2006:the expansion (30.135), p. 1201, and the proof that independence gives $E[XY]=E[X]E[Y]$, p. 1200"}
We give the discrete case where the two cases differ only by replacing sums with integrals.

**Rule 1 (law of the unconscious statistician).** Let $Y = g(X)$ and let $y$ run over the values of $Y$. Grouping the values of $X$ by the value they are sent to,
$$
\mathbb{E}(Y) = \sum_{y} y \, \mathbb{P}(Y = y) = \sum_{y} y \sum_{x \,:\, g(x) = y} f(x) = \sum_{y} \; \sum_{x \,:\, g(x)=y} g(x) f(x) = \sum_{x} g(x) f(x) ,
$$
the regrouping being legitimate because the double sum converges absolutely. In the continuous case the corresponding statement for $g \ge 0$ follows from rule 9 applied to $g(X)$ together with an exchange of the order of integration, and the general case follows by splitting $g = g^{+} - g^{-}$ into positive and negative parts.

**Rule 2 (linearity).** Put $A_x = \{X = x\}$ and $B_y = \{Y = y\}$. The events $A_x \cap B_y$ are disjoint and exhaust $\Omega$, and on $A_x \cap B_y$ the variable $aX + bY$ takes the value $ax + by$. Hence by rule 1 applied to the pair,
$$
\mathbb{E}(aX + bY) = \sum_{x,y} (ax + by)\,\mathbb{P}(A_x \cap B_y)
= a \sum_{x} x \sum_{y} \mathbb{P}(A_x \cap B_y) + b \sum_{y} y \sum_{x} \mathbb{P}(A_x \cap B_y) .
$$
The inner sums are the marginals: $\sum_y \mathbb{P}(A_x \cap B_y) = \mathbb{P}(A_x)$, since the $B_y$ partition $\Omega$, and similarly in the other order. This is $a\mathbb{E}(X) + b\mathbb{E}(Y)$. Positivity and $\mathbb{E}(1)=1$ are immediate from the definition.

**Rule 3 (products).** Independence of $X$ and $Y$ means $\mathbb{P}(A_x \cap B_y) = \mathbb{P}(A_x)\mathbb{P}(B_y)$ for all $x,y$, so the double sum factorises:
$$
\mathbb{E}(XY) = \sum_{x,y} x y \,\mathbb{P}(A_x)\mathbb{P}(B_y) = \Bigl( \sum_x x\,\mathbb{P}(A_x) \Bigr) \Bigl( \sum_y y\,\mathbb{P}(B_y) \Bigr) = \mathbb{E}(X)\mathbb{E}(Y) .
$$
This is the only step in the whole unit that uses independence.

**Rule 4 (computing formulas).** By linearity, with $\mu = \mathbb{E}X$ a constant,
$$
\mathbb{E}\bigl( (X-\mu)^{2} \bigr) = \mathbb{E}(X^{2}) - 2\mu\,\mathbb{E}(X) + \mu^{2} = \mathbb{E}(X^{2}) - \mu^{2} .
$$
The same expansion on $(X - \mu_X)(Y - \mu_Y)$ gives $\mathbb{E}(XY) - \mu_X \mathbb{E}(Y) - \mu_Y \mathbb{E}(X) + \mu_X\mu_Y = \mathbb{E}(XY) - \mu_X\mu_Y$.

**Rule 5 (linear change).** $\mathbb{E}(aX+b) = a\mu_X + b$ by linearity, so $(aX+b) - \mathbb{E}(aX+b) = a(X - \mu_X)$: the shift cancels. Squaring and taking expectations gives $\operatorname{var}(aX+b) = a^{2}\operatorname{var}(X)$, and multiplying the two centred variables gives the covariance rule. Since $\sigma_{aX+b} = \lvert a \rvert \sigma_X$, dividing yields $\rho(aX+b, cY+d) = ac\,\rho(X,Y)/(\lvert a\rvert \lvert c\rvert) = \operatorname{sgn}(ac)\rho(X,Y)$.

**Rule 6 (variance of a sum).** Centre both variables and expand the square:
$$
\operatorname{var}(X+Y) = \mathbb{E}\bigl( [(X-\mu_X) + (Y-\mu_Y)]^{2} \bigr) = \operatorname{var}(X) + 2\operatorname{cov}(X,Y) + \operatorname{var}(Y) ,
$$
by linearity applied to the three terms.

**Rule 7 (Cauchy-Schwarz).** Take any $U, V$ in $L^{2}$ and any real coefficients $a, c$. Since $(aU + cV)^{2} \ge 0$ pointwise, positivity and linearity of $\mathbb{E}$ give
$$
Q(a,c) \; = \; a^{2}\,\mathbb{E}(U^{2}) + 2ac\,\mathbb{E}(UV) + c^{2}\,\mathbb{E}(V^{2}) \; \ge \; 0 \qquad \text{for all } a, c .
$$
Suppose first $\mathbb{E}(U^{2}) > 0$. Fixing $c = 1$ makes $Q$ a quadratic in $a$ with positive leading coefficient that is never negative, so its discriminant is non-positive:
$$
4\bigl( \mathbb{E}(UV) \bigr)^{2} - 4\,\mathbb{E}(U^{2})\mathbb{E}(V^{2}) \le 0 ,
$$
which is the inequality. If instead $\mathbb{E}(U^{2}) = 0$ then $U = 0$ almost surely, both sides vanish, and the equality case holds with $(a,c) = (1,0)$.

For the equality case, suppose $\mathbb{E}(U^2)>0$ and the discriminant is zero. Then the quadratic has a real root $a_0$, so $\mathbb{E}\bigl( (a_0 U + V)^{2} \bigr) = 0$. A non-negative random variable with zero expectation is zero almost surely, so $\mathbb{P}(a_0 U + V = 0) = 1$. Conversely a linear relation makes $Q$ vanish at that point, forcing the discriminant to zero.

**The bound on $\rho$.** Apply the inequality to the centred variables $U = X - \mu_X$ and $V = Y - \mu_Y$: then $\mathbb{E}(UV) = \operatorname{cov}(X,Y)$, $\mathbb{E}(U^{2}) = \operatorname{var}(X)$ and $\mathbb{E}(V^{2}) = \operatorname{var}(Y)$, so $\operatorname{cov}(X,Y)^{2} \le \operatorname{var}(X)\operatorname{var}(Y)$ and dividing by $\sigma_X^{2}\sigma_Y^{2} > 0$ gives $\rho^{2} \le 1$. Equality holds exactly when $a_0(X - \mu_X) + (Y - \mu_Y) = 0$ almost surely, that is when $\mathbb{P}(aX + bY = c) = 1$ for suitable constants; solving for $Y$ shows $Y = -a_0 X + (\mu_Y + a_0\mu_X)$ almost surely, an affine function of $X$ with slope $-a_0$, and rule 5 gives $\rho = \operatorname{sgn}(-a_0)$.

**Rule 8 (the mean minimises).** By rule 4 applied to $X - a$,
$$
\mathbb{E}\bigl( (X-a)^{2} \bigr) = \operatorname{var}(X - a) + \bigl( \mathbb{E}(X-a) \bigr)^{2} = \operatorname{var}(X) + (\mu_X - a)^{2} ,
$$
a quadratic in $a$ minimised at $a = \mu_X$ with value $\operatorname{var}(X)$.

**Rule 9 (tail formula).** For $X \ge 0$ with density $f$,
$$
\int_{0}^{\infty}\bigl[ 1 - F(x) \bigr] dx = \int_{0}^{\infty} \mathbb{P}(X > x)\,dx = \int_{x=0}^{\infty} \int_{y=x}^{\infty} f(y)\,dy\,dx
= \int_{y=0}^{\infty} \int_{x=0}^{y} dx \, f(y)\,dy = \int_{0}^{\infty} y f(y)\,dy = \mathbb{E}(X) ,
$$
the exchange of the order of integration being legitimate by Tonelli's theorem (:ref[Fubini and Tonelli]{to=measure.fubini-tonelli}) because the integrand is non-negative. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="grimmett-stirzaker-2020:the absolute-convergence proviso in Definition (3.3.1) and Example (3.3.12), pp. 53, 57, the remark after Theorem (3.3.8), p. 56, and the Cauchy density, p. 108; rhb-2006:the statement that uncorrelated does not imply independent and the symmetry criterion, p. 1201; folland-1999:§10.1, p. 314"}
**Absolute convergence, not convergence.** The mean of a discrete variable is a sum over an unordered set, so it must not depend on the order of summation; this is why absolute convergence is demanded rather than convergence. Grimmett and Stirzaker's example $f(k) = Ak^{-2}$ for $k = \pm1, \pm2, \dots$ has $\sum_k \lvert k \rvert f(k) = A\sum_{k \ne 0}\lvert k\rvert^{-1} = \infty$, so no mean exists even though the distribution is symmetric and one is tempted to call its mean zero. The Cauchy density $1/[\pi(1+x^{2})]$ is the continuous counterpart: symmetric, and with no mean at all.

**Finite second moment, for everything after the definition of the mean.** Variance, covariance, correlation and the Cauchy-Schwarz inequality all need $X, Y \in L^{2}$. Folland states the convention that $\sigma^{2}(X) = \infty$ when $X \notin L^{2}$. If $\operatorname{var}(X) = \infty$ then rule 6 is vacuous and $\rho$ is undefined; the first place this bites is the :ref[central limit theorem]{to=prob.central-limit-theorem}, whose finite-variance hypothesis cannot be dropped.

**Non-degeneracy, for the correlation coefficient.** $\rho$ requires $\sigma_X, \sigma_Y > 0$. A constant random variable is uncorrelated with everything and has no correlation coefficient with anything.

**Independence is used only in rule 3, and only in one direction.** Uncorrelated does not imply independent. Let $X$ be uniform on $\{-1, 0, 1\}$ and set $Y = X^{2}$. Then $\mathbb{E}X = 0$ and $\mathbb{E}(XY) = \mathbb{E}(X^{3}) = \tfrac13(-1 + 0 + 1) = 0$, so $\operatorname{cov}(X,Y) = 0 - 0 \cdot \mathbb{E}Y = 0$ and the two are uncorrelated. They are as dependent as they could be — $Y$ is a function of $X$ — and indeed
$$
\mathbb{P}(X = 0,\, Y = 1) = 0 \neq \tfrac13 \cdot \tfrac23 = \mathbb{P}(X=0)\,\mathbb{P}(Y=1) .
$$
What has happened is that correlation measures only the *linear* part of a dependence, and the dependence here is purely quadratic. Riley, Hobson and Bence give the general reason: any joint distribution symmetric in $x$ about $\mu_X$ has zero correlation, whatever else it does. The one important case in which uncorrelated does imply independent is the joint normal, treated in :ref[The multivariate normal distribution]{to=prob.multivariate-normal}.

**Rule 6 needs only uncorrelatedness, not independence,** which is why variances of sums are so widely usable: pairwise uncorrelated errors suffice, and nothing about higher-order dependence matters.

**The exchange of integrals in rule 9** needs the integrand to be non-negative, which is why that rule is stated for $X \ge 0$. For a general $X$ the correct version splits into positive and negative parts and both must converge.
:::

:::method[Computing a variance or covariance without losing it to rounding]{provenance=original}
1. **Centre first if you can.** Work with $U = X - m$ for any convenient constant $m$ near the mean; by rule 5, $\operatorname{var}(X) = \operatorname{var}(U)$ and $\operatorname{cov}(X,Y) = \operatorname{cov}(U, Y - m')$, so shifting is free and costs no accuracy.
2. **Then use whichever of the two formulas is cheaper.** $\mathbb{E}(U^{2}) - (\mathbb{E}U)^{2}$ needs one pass over the distribution; $\mathbb{E}((U - \mu_U)^{2})$ needs the mean first, hence two. With exact arithmetic they agree.
3. **Beware the difference of two large numbers.** When $\sigma_X \ll \lvert \mu_X \rvert$ the formula $\mathbb{E}(X^{2}) - (\mathbb{E}X)^{2}$ subtracts two nearly equal quantities and loses most of its significant digits; this is precisely what step 1 prevents, and it is the reason numerical libraries subtract a provisional mean before accumulating squares.
4. **For a function of $X$, do not find its distribution.** Apply rule 1 directly: $\mathbb{E}(g(X)) = \sum_x g(x)f(x)$ or $\int g(x)f(x)\,dx$. Deriving the density of $g(X)$ first, by the methods of :ref[Joint distributions and transformations]{to=prob.joint-distributions}, is extra work and extra opportunity for error.
5. **For a linear combination, use rules 2, 5 and 6** rather than constructing the distribution of the combination: $\operatorname{var}(\sum_i a_i X_i) = \sum_i a_i^{2}\operatorname{var}(X_i) + 2\sum_{i<j}a_i a_j \operatorname{cov}(X_i, X_j)$.
6. **Check the answer.** A variance must be non-negative; a correlation must lie in $[-1,1]$; and $\operatorname{var}(X+Y)$ computed from rule 6 must agree with a direct computation from the distribution of $X+Y$. Each of these catches a different arithmetic slip.
:::

:::example[Two detector channels: a complete calculation]{provenance=original}
Two photon-counting channels $A$ and $B$ view the same weak source through a beam splitter. In a fixed $1\,\mathrm{ms}$ gate, let $X$ be the number of counts in channel $A$, taking values $0, 1, 2$, and $Y$ the number in channel $B$, taking values $0, 1$. Calibration gives the joint mass function (all entries in twentieths):

| $20\,f(x,y)$ | $y=0$ | $y=1$ | $20\,f_X(x)$ |
|---|---|---|---|
| $x=0$ | $4$ | $1$ | $5$ |
| $x=1$ | $3$ | $5$ | $8$ |
| $x=2$ | $2$ | $5$ | $7$ |
| $20\,f_Y(y)$ | $9$ | $11$ | $20$ |

The six entries sum to $20$, so $f$ is a mass function; the margins are the row and column sums.

**Means.** By the definition applied to the marginals,
$$
\mathbb{E}(X) = \frac{0 \cdot 5 + 1 \cdot 8 + 2 \cdot 7}{20} = \frac{22}{20} = 1.1 , \qquad
\mathbb{E}(Y) = \frac{0 \cdot 9 + 1 \cdot 11}{20} = \frac{11}{20} = 0.55 .
$$

**Second moments and variances.** $\mathbb{E}(X^{2}) = (0 + 1\cdot 8 + 4 \cdot 7)/20 = 36/20 = 1.8$, and since $Y$ takes only the values $0$ and $1$, $\mathbb{E}(Y^{2}) = \mathbb{E}(Y) = 0.55$. Rule 4 gives
$$
\operatorname{var}(X) = 1.8 - 1.1^{2} = 1.8 - 1.21 = 0.59 , \qquad
\operatorname{var}(Y) = 0.55 - 0.55^{2} = 0.2475 ,
$$
so $\sigma_X = \sqrt{0.59} = 0.768115$ and $\sigma_Y = \sqrt{0.2475} = 0.497494$.

**Covariance.** Only the cells with $x \ge 1$ and $y = 1$ contribute to $\mathbb{E}(XY)$:
$$
\mathbb{E}(XY) = \frac{1 \cdot 1 \cdot 5 + 2 \cdot 1 \cdot 5}{20} = \frac{15}{20} = 0.75 ,
$$
and therefore
$$
\operatorname{cov}(X,Y) = 0.75 - (1.1)(0.55) = 0.75 - 0.605 = 0.145 = \tfrac{29}{200} .
$$
It is positive, as it should be for two channels fed by the same source.

**Correlation.**
$$
\rho(X,Y) = \frac{0.145}{(0.768115)(0.497494)} = \frac{0.145}{0.382132} = 0.379450 ,
$$
comfortably inside $[-1,1]$, as rule 7 demands. The two channels are moderately, not strongly, coupled: a little over a third of the way to a deterministic linear relation.

**Check by rule 6.** The predicted variance of the total count $S = X + Y$ is
$$
\operatorname{var}(S) = 0.59 + 0.2475 + 2(0.145) = 1.1275 .
$$
Computing it directly, $S$ takes the values $0,1,2,3$ with probabilities $4/20$, $4/20$, $7/20$, $5/20$, so $\mathbb{E}(S) = (0 + 4 + 14 + 15)/20 = 33/20 = 1.65$ — which equals $1.1 + 0.55$, as linearity requires — and $\mathbb{E}(S^{2}) = (0 + 4 + 28 + 45)/20 = 77/20 = 3.85$, giving $\operatorname{var}(S) = 3.85 - 1.65^{2} = 3.85 - 2.7225 = 1.1275$. The two agree exactly.

**What would independence have given?** Under independence the covariance would vanish, so $\operatorname{var}(S)$ would be $0.8375$ rather than $1.1275$: the positive coupling inflates the variance of the total by $35\%$. Treating correlated channels as independent is the standard way to underestimate an error bar.

**The best linear predictor.** The slope of the least-squares line predicting $Y$ from $X$ is $\operatorname{cov}(X,Y)/\operatorname{var}(X) = 0.145/0.59 = 29/118 = 0.245763$, and the residual variance is $\operatorname{var}(Y)(1 - \rho^{2}) = 0.2475\,(1 - 0.143982) = 0.211864$. Knowing $X$ removes about $14.4\%$ of the variance of $Y$; the exact conditional prediction, which does better, is the subject of :ref[Conditional expectation]{to=prob.conditional-expectation}.
:::

:::application[Where the second moment is the answer]{provenance=original}
**Error bars and propagation.** The standard deviation of an estimate is its error bar, and rules 5 and 6 are the whole of linear error propagation: for $Z = \sum_i a_i X_i$,
$$
\sigma_Z^{2} = \sum_i a_i^{2}\sigma_i^{2} + 2\sum_{i<j}a_i a_j \operatorname{cov}(X_i, X_j) .
$$
The cross terms are the part routinely and wrongly dropped; see :ref[Error propagation]{to=stats.error-propagation}. For a non-linear $Z = g(X_1,\dots,X_n)$ the same formula is applied to the first-order Taylor expansion, with $a_i = \partial g/\partial x_i$ evaluated at the means.

**Why averaging helps, and exactly how much.** If $X_1, \dots, X_n$ are uncorrelated with common variance $\sigma^{2}$, rules 5 and 6 give $\operatorname{var}(\bar X) = \sigma^{2}/n$, so the standard error falls like $n^{-1/2}$. This single calculation is the quantitative content of :ref[Laws of large numbers]{to=prob.law-of-large-numbers} at finite $n$, the basis of the $n^{-1/2}$ convergence rate of Monte Carlo integration, and the reason correlated samples — from a Markov chain, say — buy less than their number suggests: the cross terms in rule 6 do not vanish, and the effective sample size is smaller.

**Fluctuations in statistical mechanics.** In the canonical ensemble the energy $E$ is a random variable with $\mathbb{E}(E) = -\partial \ln Z/\partial\beta$ and $\operatorname{var}(E) = \partial^{2}\ln Z/\partial\beta^{2}$, where $\beta = 1/k_{B}T$. Differentiating the mean with respect to temperature gives
$$
C_V = \frac{\partial \mathbb{E}(E)}{\partial T} = \frac{\operatorname{var}(E)}{k_{B}T^{2}} ,
$$
so a heat capacity is literally a variance. The same identity in other variables relates the isothermal compressibility to particle-number fluctuations and the magnetic susceptibility to magnetisation fluctuations; it is the elementary form of the fluctuation-dissipation theorem, and it is why a response function diverges at a critical point, where fluctuations do.

**Regression and least squares.** The slope of the best linear predictor of $Y$ from $X$ is $\operatorname{cov}(X,Y)/\operatorname{var}(X)$ and the fraction of variance it explains is $\rho^{2}$; see :ref[Least-squares regression]{to=stats.least-squares-regression}. Arfken's observation that the mean is the minimiser of the sum of squared deviations, which is rule 8, is the one-parameter case of the same principle.

**Covariance matrices.** For a vector of variables the covariances form a symmetric positive semi-definite matrix, and the Cauchy-Schwarz inequality of rule 7 is exactly the statement that its $2 \times 2$ minors are non-negative. Diagonalising it is principal component analysis (:ref[EOF and principal component analysis]{to=stats.eof-pca}); propagating it through a linear dynamical model is the :ref[Kalman filter]{to=stats.kalman-filter}; and its role as the parameter of a Gaussian is the subject of :ref[The multivariate normal distribution]{to=prob.multivariate-normal}.

**Tail bounds.** The variance is what converts into a probability statement through Chebyshev's inequality, $\mathbb{P}(\lvert X - \mu\rvert \ge k\sigma) \le k^{-2}$; see :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}. That one line is why a standard deviation is a useful summary and not merely a conventional one.
:::
