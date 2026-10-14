---
id: stats.error-propagation
title: Propagation of uncertainty
kind: method
level: core
summary: Gives the first-order rule for the variance of a function of uncertain inputs, in the matrix form $V_Y = S V_X S^{\mathsf T}$ that keeps the correlations, says exactly when the rule is exact and when its neglected second-order terms matter, and works two examples ending in $g = 9.811 \pm 0.044\,\mathrm{m\,s^{-2}}$ and a predicted-value error of $0.134$ that the naive uncorrelated formula overstates by a factor of $3.2$.
prereqs: [prob.expectation-variance, found.taylor-several-variables, prob.joint-distributions]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§30.12.3 Covariance and correlation, pp. 1203-1205: eq. (30.136), $V[aX+bY+c] = a^2V[X]+b^2V[Y]+2ab\\,\\mathrm{Cov}[X,Y]$; the linearisation (30.137) of $f(X,Y)$ about $(\\mu_X,\\mu_Y)$; the two-variable propagation formula (30.138) with its cross term, and the remark that (30.138) is exact when $f$ is linear in $X$ and $Y$; the $n$-variable generalisation displayed after the definition (30.139) of the covariance matrix; the many-to-many formula (30.140), $\\mathrm{Cov}[Y_k,Y_l] \\approx \\sum_i\\sum_j (\\partial Y_k/\\partial X_i)(\\partial Y_l/\\partial X_j)\\,\\mathrm{Cov}[X_i,X_j]$, with the statement that it is exact for linear $Y_k$, and its matrix form (30.141) $V_Y = S V_X S^{\\mathsf T}$ with $S_{ki} = \\partial Y_k/\\partial X_i$; §31.6, eqs. (31.98)-(31.99), pp. 1274-1275, where (30.141) is applied to the least-squares estimators to give $V = S N S^{\\mathsf T} = (R^{\\mathsf T}N^{-1}R)^{-1}$"
    pages: "1203-1205, 1274-1275"
    role: the linearised formula in one, two and many variables; the covariance matrix and the matrix form of the transformation law; the statement of exactness in the linear case; the least-squares covariance matrix as the standard application
  - work: arfken-2013
    loc: "§23.7 Statistics, subsection 'Error Propagation', pp. 1165-1167: the expansion (23.87) of the sample average of $f$, $\\bar f = f(\\bar x) + \\tfrac12\\sigma^2 f''(\\bar x) + \\cdots$, and the observation that the leading answer is $f(\\bar x)$ with a second-order correction scaled by $f''(\\bar x)/2$; the one-variable spread (23.88), $\\sigma^2(f) \\approx [f'(\\bar x)]^2\\sigma^2$, and its symbolic form $f(\\bar x \\pm \\sigma) = f(\\bar x) \\pm f'(\\bar x)\\sigma$; the two-variable calculation (23.89)-(23.91) for independently measured $x_j$ and $y_k$, in which the cross term is dropped because it factorises into $\\sum_j u_j \\sum_k v_k = 0$, giving $\\sigma^2(f) = f_x^2\\sigma_x^2 + f_y^2\\sigma_y^2$; and Example 23.7.1, which recovers $\\sigma^2(\\bar x) = \\sigma^2/n$ by applying (23.91) to $\\bar x = (x_1+\\cdots+x_n)/n$; Exercise 23.7.1, p. 1178, asking for $[\\sigma(C)/C]^2 = [\\sigma(A)/A]^2 + [\\sigma(B)/B]^2$ for $C = AB$ and $C = A/B$"
    pages: "1165-1167, 1178"
    role: the second-order bias term, which is the quantitative statement of when linearisation fails; the sampling derivation of the one- and two-variable rules; the relative-error form for products and quotients
---

:::note[What the rule is and is not]{provenance=original}
A measurement is reported as $x \pm \sigma_x$, and what is wanted is almost never $x$ itself but some function of it: a period becomes a frequency, two lengths become an aspect ratio, counts and a live-time become a rate. Propagation of uncertainty answers the question "what is the error bar on the answer?" by one device only: replace the function by its tangent plane at the measured point, and use the exact formula for the variance of a linear combination.

Two consequences are worth stating before any algebra. First, because the device is linearisation, the rule is **exact** when the function is affine and **approximate** otherwise, with an error controlled by the curvature of the function over the width of the input distribution. Second, because the exact formula for the variance of a linear combination contains covariances, so does the propagation rule. Dropping them is the commonest error in practice, and this unit's second example shows it inflating an error bar by a factor of $3.2$.
:::

:::definition[Inputs, outputs and the covariance matrix]{provenance=adapted src="rhb-2006:§30.12.3, the definition (30.139) of the covariance matrix and the set-up preceding (30.140), pp. 1203-1205"}
Let $X = (X_1, \dots, X_n)$ be random variables with finite second moments, means $\mu_i = \mathbb{E}[X_i]$ and **covariance matrix** $V_X$, the symmetric $n \times n$ matrix with entries

$$
(V_X)_{ij} \;=\; \mathrm{Cov}[X_i, X_j] \;=\; \mathbb{E}\bigl[(X_i - \mu_i)(X_j - \mu_j)\bigr] .
$$

Its diagonal entries are the variances $\sigma_i^2 = V[X_i]$, and the **standard error** (the quoted error bar) on $X_i$ is $\sigma_i$. The **correlation matrix** has entries $\rho_{ij} = (V_X)_{ij}/(\sigma_i\sigma_j)$, with unit diagonal. Covariance, correlation and the variance of a linear combination are the subject of :ref[Expectation, variance and covariance]{to=prob.expectation-variance}; $V_X$ is symmetric and positive semi-definite because $t^{\mathsf T}V_X t = V\bigl[\sum_i t_iX_i\bigr] \ge 0$ for every real vector $t$.

Let $Y = (Y_1, \dots, Y_m)$ with $Y_k = f_k(X_1, \dots, X_n)$ for functions $f_k$ that are differentiable at $\mu = (\mu_1, \dots, \mu_n)$. The **sensitivity matrix** (Riley, Hobson and Bence write $S$) is the $m \times n$ Jacobian evaluated at the means,

$$
S_{ki} \;=\; \frac{\partial f_k}{\partial x_i}\bigg|_{x = \mu} .
$$

Throughout, "the error on $Y_k$" means $\sqrt{V[Y_k]}$, and "errors are independent" means $V_X$ is diagonal. In an experimental report the mean $\mu_i$ is not known and the measured value $x_i$ is used in its place; the remark below says what that substitution costs.
:::

:::statement[Linearised propagation of uncertainty]{provenance=adapted src="rhb-2006:§30.12.3, eqs. (30.136)-(30.141), pp. 1203-1205; arfken-2013:§23.7, eqs. (23.88) and (23.91), pp. 1166-1167"}
Assume:

- **(P1)** each $X_i$ has finite variance;
- **(P2)** each $f_k$ is differentiable at $\mu$, with sensitivity matrix $S$ as above;
- **(P3)** the distribution of $X$ is concentrated near $\mu$ in the sense made precise in the remark: the linearisation is a good approximation to $f_k$ over the region where $X$ has its probability.

Then, to first order,

$$
\mathbb{E}[Y_k] \;\approx\; f_k(\mu) , \qquad
\mathrm{Cov}[Y_k, Y_l] \;\approx\; \sum_{i=1}^{n}\sum_{j=1}^{n} S_{ki}\,S_{lj}\,(V_X)_{ij} ,
$$

which in matrix form is

$$
\boxed{\;V_Y \;=\; S\,V_X\,S^{\mathsf T} .\;}
$$

For a single output $Y = f(X_1, \dots, X_n)$ this reads

$$
V[Y] \;\approx\; \sum_{i=1}^{n}\left(\frac{\partial f}{\partial x_i}\right)^{\!2} V[X_i]
\;+\; \sum_{i \ne j} \frac{\partial f}{\partial x_i}\frac{\partial f}{\partial x_j}\,\mathrm{Cov}[X_i, X_j] ,
$$

all derivatives at $x = \mu$; for $n = 2$ this is the formula Riley, Hobson and Bence give as (30.138), and when the $X_i$ are uncorrelated the double sum vanishes and only the squared-derivative terms remain, which is Arfken, Weber and Harris's (23.91).

**Exactness.** If every $f_k$ is affine, $f_k(x) = c_k + \sum_i S_{ki}x_i$, then both relations hold with equality and no hypothesis beyond (P1) is needed. Riley, Hobson and Bence state this for (30.138) and for (30.140).
:::

:::idea{provenance=original}
A smooth function looks like its tangent plane on a small enough neighbourhood, and the variance of an affine function of random variables is a formula we already have exactly. So: expand $f_k$ to first order about the means, discard the remainder, and apply the exact formula. The constant term $f_k(\mu)$ carries no variance and drops out; the linear term contributes $\sum_i S_{ki}(X_i - \mu_i)$, whose covariance with the corresponding sum for $Y_l$ is a double sum of covariances weighted by sensitivities. That double sum is the matrix product $SV_XS^{\mathsf T}$. Everything else in this unit is about the discarded remainder: it vanishes identically when $f_k$ is affine, and otherwise its size is set by the second derivatives of $f_k$ times the variances of the inputs.
:::

:::proof{provenance=adapted src="rhb-2006:§30.12.3, the derivation of (30.138) from (30.136) and (30.137), and of (30.140) by the same route, pp. 1203-1205"}
**Step 1 (the exact affine case).** Let $Z = c + \sum_i a_iX_i$ and $W = d + \sum_j b_jX_j$ with real constants. Bilinearity of the covariance (:ref[]{to=prob.expectation-variance}) gives, with no approximation and using only (P1),

$$
\mathbb{E}[Z] = c + \sum_i a_i\mu_i , \qquad
\mathrm{Cov}[Z, W] = \sum_{i}\sum_{j} a_i b_j\,\mathrm{Cov}[X_i, X_j] . \tag{1}
$$

Taking $W = Z$ and $n = 2$ recovers $V[aX+bY+c] = a^2V[X] + b^2V[Y] + 2ab\,\mathrm{Cov}[X,Y]$, which is the identity Riley, Hobson and Bence use as their starting point.

**Step 2 (linearise).** By (P2), Taylor's theorem in several variables (:ref[]{to=found.taylor-several-variables}) gives

$$
f_k(X) \;=\; f_k(\mu) \;+\; \sum_{i=1}^{n} S_{ki}\,(X_i - \mu_i) \;+\; R_k(X) , \tag{2}
$$

where $R_k(X)/\lVert X - \mu\rVert \to 0$ as $X \to \mu$. Write $L_k$ for the affine part, so $Y_k = L_k + R_k$.

**Step 3 (discard the remainder).** Hypothesis (P3) is the assumption that $R_k$ may be neglected: we replace $Y_k$ by $L_k$. This is the only approximation in the argument, and it is where (P3) is used. If every $f_k$ is affine then $R_k \equiv 0$ identically and the step is exact.

**Step 4 (apply the exact formula).** Applying (1) to $L_k$ and $L_l$, whose coefficients are $a_i = S_{ki}$ and $b_j = S_{lj}$ and whose constants are $f_k(\mu) - \sum_i S_{ki}\mu_i$,

$$
\mathbb{E}[L_k] = f_k(\mu) , \qquad
\mathrm{Cov}[L_k, L_l] = \sum_{i}\sum_{j} S_{ki}S_{lj}\,\mathrm{Cov}[X_i, X_j] = \bigl(S V_X S^{\mathsf T}\bigr)_{kl} ,
$$

the last equality being the definition of the matrix product: $(SV_XS^{\mathsf T})_{kl} = \sum_i\sum_j S_{ki}(V_X)_{ij}(S^{\mathsf T})_{jl}$ and $(S^{\mathsf T})_{jl} = S_{lj}$.

**Step 5 (the single-output form).** Put $m = 1$, write $f$ for $f_1$ and split the double sum into its diagonal and off-diagonal parts, using $(V_X)_{ii} = V[X_i]$:

$$
V[Y] \;\approx\; \sum_i \left(\frac{\partial f}{\partial x_i}\right)^{\!2}V[X_i] \;+\; \sum_{i\ne j}\frac{\partial f}{\partial x_i}\frac{\partial f}{\partial x_j}\mathrm{Cov}[X_i,X_j] .
$$

The off-diagonal sum runs over ordered pairs, so each unordered pair $\{i,j\}$ appears twice and contributes $2\,\partial_if\,\partial_jf\,\mathrm{Cov}[X_i,X_j]$. $\square$

**Positive semi-definiteness is inherited.** For any real $t \in \mathbb{R}^m$, $t^{\mathsf T}V_Yt = (S^{\mathsf T}t)^{\mathsf T}V_X(S^{\mathsf T}t) \ge 0$, so $V_Y$ is again a legitimate covariance matrix. A propagation scheme that dropped the cross terms would not have this property, and can return a "variance" that is larger than the true one by an arbitrary factor, as the second example shows.
:::

:::remark[Where the hypotheses are used, and the size of what was thrown away]{provenance=original}
**(P1) is what makes the question well posed.** If an input has no finite variance, the output's error bar is not a number that exists, and the formula returns a finite answer for a quantity that is infinite. The standard trap is a ratio: if $X$ and $Y$ are independent $N(0,1)$ then $X/Y$ is Cauchy and has no variance at all (:ref[]{to=prob.random-variables}), yet the rule applied at any point with $\mu_Y \ne 0$ hands back a finite number. The practical version of this is a quotient whose denominator has a non-negligible chance of being near zero.

**(P2) is used only at the single point $\mu$.** The rule needs no smoothness away from the means — but it needs genuine differentiability there. A function with a kink at $\mu$, such as $f(x) = |x|$ at $\mu = 0$, has no tangent plane and the rule is meaningless: for $X \sim N(0, \sigma^2)$ the exact answer is $V[|X|] = (1 - 2/\pi)\sigma^2 \approx 0.363\,\sigma^2$, which no choice of derivative reproduces.

**(P3) is the real hypothesis, and it is quantitative.** Keeping the quadratic term of (2) for a single input gives the two corrections that linearisation discards:

$$
\mathbb{E}[Y] \;\approx\; f(\mu) + \tfrac12 f''(\mu)\,\sigma^2 , \qquad
V[Y] \;\approx\; f'(\mu)^2\sigma^2 + \tfrac12 f''(\mu)^2\sigma^4 ,
$$

the first of which is the correction $\tfrac12\sigma^2f''(\bar x)$ that Arfken, Weber and Harris exhibit in (23.87); in $n$ variables the bias is $\tfrac12\sum_{i,j}\partial_i\partial_jf\,(V_X)_{ij}$. The ratio of the neglected bias to the propagated error is $\tfrac12|f''|\sigma^2 \big/ |f'|\sigma = \tfrac12\sigma\,|f''/f'|$, so the linearisation is safe exactly when $\sigma$ is small compared with the scale $|f'/f''|$ on which the slope of $f$ changes — not merely small compared with $\mu$.

*A case where it fails, with exact numbers.* Let $X \sim N(1, 0.5^2)$ and $Y = X^2$. Exactly, $\mathbb{E}[Y] = \mu^2 + \sigma^2 = 1.25$ and $V[Y] = 4\mu^2\sigma^2 + 2\sigma^4 = 1.125$, so $Y = 1.25 \pm 1.0607$. Linearisation gives $f(\mu) = 1$ and $|f'(\mu)|\sigma = 1.0$: the error bar is only $6\%$ low, but the central value is $25\%$ low, and it is low *systematically* — averaging more experiments will not remove it. Curvature biases the answer before it spoils the error bar.

**Dropping the covariances is not conservative.** Correlations can either inflate or deflate the output variance, and which one happens depends on the signs of the sensitivities. For $Y = X_1 - X_2$ with equal variances $\sigma^2$ and correlation $\rho$, $V[Y] = 2\sigma^2(1-\rho)$, which for $\rho \to 1$ tends to zero: a difference of two strongly correlated measurements is far better determined than either. A shared calibration constant produces exactly this, which is why a ratio of two intensities from the same instrument can beat the error bar on each.

**Using $x$ in place of $\mu$.** The sensitivities must be evaluated at the unknown $\mu$ and in practice are evaluated at the measured $x$. The resulting error in $S$ is itself of first order in $X - \mu$, so it perturbs $V_Y$ at second order — the same order as the terms already discarded, and no worse.

**Relative errors for products.** If $Y = X_1^{p_1}\cdots X_n^{p_n}$ with uncorrelated positive inputs, then $\partial_i f/f = p_i/\mu_i$, and dividing the propagation formula by $f(\mu)^2$ gives

$$
\left(\frac{\sigma_Y}{Y}\right)^{\!2} \;\approx\; \sum_{i=1}^{n} p_i^2\left(\frac{\sigma_i}{\mu_i}\right)^{\!2} ,
$$

the rule that relative errors add in quadrature with the exponents as weights. The cases $C = AB$ and $C = A/B$ are Arfken, Weber and Harris's Exercise 23.7.1, and the two give the *same* relative error, since the sign of $p$ is squared away.
:::

:::method[Propagating uncertainty]{provenance=adapted src="rhb-2006:§30.12.3, the route from (30.137) to (30.141), pp. 1203-1205"}
1. **Write the output as an explicit function of the measured inputs**, $Y_k = f_k(x_1,\dots,x_n)$, and collect the inputs' error bars and correlations into the covariance matrix $V_X$. Any quantity measured by the same instrument, read from the same calibration curve, or fitted from the same data set is correlated with its companions until shown otherwise.
2. **Check for curvature and for zeros in denominators.** Compare each $\sigma_i$ with the scale $|f'/f''|$ in that variable (remark above). If they are comparable, or if a denominator can plausibly vanish, stop: linearisation is not applicable and the distribution of $Y$ must be obtained directly, by the change-of-variable formula of :ref[Joint distributions and transformations]{to=prob.joint-distributions} or by Monte Carlo.
3. **Differentiate at the measured point** to get $S_{ki} = \partial f_k/\partial x_i$, evaluated at $x$.
4. **Form $V_Y = SV_XS^{\mathsf T}$.** For one output this is the single-output formula; do not drop the cross terms. For several outputs keep the whole matrix, because the outputs are now correlated even if the inputs were not, and anything computed downstream from them will need those correlations.
5. **For a product or quotient of powers, use relative errors** and add $p_i^2(\sigma_i/\mu_i)^2$ in quadrature; it is faster and less error-prone than differentiating.
6. **Quote $Y_k = f_k(x) \pm \sqrt{(V_Y)_{kk}}$**, rounding the error to one or two significant figures and the value to the same decimal place. Keep the full $V_Y$ if the result will be used further.
7. **Sanity-check.** Each term of the sum is a contribution to the error budget; identify the dominant one. If one input dominates by an order of magnitude in variance, the others are irrelevant and improving them is wasted effort.
:::

:::example[A pendulum measurement of $g$, and which input limits it]{provenance=original}
A simple pendulum of length $L$ has small-oscillation period $T = 2\pi\sqrt{L/g}$, so

$$
g \;=\; \frac{4\pi^2 L}{T^2} .
$$

Measurements: $L = 1.000 \pm 0.002\ \mathrm{m}$ (a metre rule read to the nearest millimetre, with the uncertainty dominated by locating the centre of mass of the bob), and the period obtained by timing $20$ swings with a stopwatch, giving $T = 2.006 \pm 0.004\ \mathrm{s}$. The two are measured by different instruments and are taken to be uncorrelated.

**Step 1: central value.**

$$
g \;=\; \frac{4\pi^2 (1.000)}{(2.006)^2} \;=\; \frac{39.4784}{4.024036} \;=\; 9.8107\ \mathrm{m\,s^{-2}} .
$$

**Step 2: curvature check.** In $L$ the function is linear, so there is nothing to check. In $T$, $f \propto T^{-2}$ gives $|f'/f''| = T/3 = 0.6687\ \mathrm{s}$, against $\sigma_T = 0.004\ \mathrm{s}$. The ratio of the neglected bias to the propagated error is $\tfrac12\sigma_T|f''/f'| = 0.5 \times 0.004/0.6687 = 3.0\times10^{-3}$, three parts in a thousand of the error bar, so linearisation is amply safe; in absolute terms the bias is $\tfrac12 f''\sigma_T^2 = 3g\sigma_T^2/T^2 = 1.2\times10^{-4}\ \mathrm{m\,s^{-2}}$.

**Step 3: relative errors.** $g = 4\pi^2 L^{1}T^{-2}$ is a product of powers with $p_L = 1$ and $p_T = -2$, so by the rule of the remark

$$
\left(\frac{\sigma_g}{g}\right)^{\!2} \;=\; \left(\frac{\sigma_L}{L}\right)^{\!2} + 4\left(\frac{\sigma_T}{T}\right)^{\!2}
\;=\; (2.000\times10^{-3})^2 + 4\,(1.9940\times10^{-3})^2 .
$$

The two contributions are $4.000\times10^{-6}$ and $1.5904\times10^{-5}$: the timing term is $3.98$ times the length term, so the measurement is limited by the stopwatch: halving $\sigma_L$ would shrink $\sigma_g$ only from $4.461\times10^{-3}g$ to $4.111\times10^{-3}g$, an improvement of $7.8\%$, whereas halving $\sigma_T$ would nearly halve it.

**Step 4: the answer.** $\sigma_g/g = \sqrt{1.9904\times10^{-5}} = 4.4614\times10^{-3}$, hence $\sigma_g = 9.8107 \times 4.4614\times10^{-3} = 0.0438\ \mathrm{m\,s^{-2}}$, and

$$
g \;=\; 9.811 \pm 0.044\ \mathrm{m\,s^{-2}} .
$$

The standard value is $9.80665\ \mathrm{m\,s^{-2}}$, so the discrepancy is $+0.0041\ \mathrm{m\,s^{-2}}$, or $0.09$ standard errors: the measurement and the accepted value agree.

**Step 5: what to improve.** To halve $\sigma_g$ one must halve $\sigma_T$, which means timing $40$ swings instead of $20$ at the same reaction-time uncertainty; no improvement in the metre rule will do it.
:::

:::example[A correlated pair: predicting from a straight-line fit]{provenance=original}
Five measurements $y_i$ are made at $x_i = 1,2,3,4,5$, each with independent error $\sigma = 0.3$, and a straight line $y = c + mx$ is fitted by least squares (:ref[Least-squares fitting]{to=stats.least-squares-regression}). With design matrix $R$ whose rows are $(1, x_i)$ and $V_X = \sigma^2 I$, the formula $V = (R^{\mathsf T}N^{-1}R)^{-1}$ gives the covariance matrix of $(\hat c, \hat m)$:

$$
R^{\mathsf T}R = \begin{pmatrix} 5 & 15 \\ 15 & 55\end{pmatrix} ,
\qquad
(R^{\mathsf T}R)^{-1} = \frac{1}{50}\begin{pmatrix} 55 & -15 \\ -15 & 5\end{pmatrix} ,
$$

$$
V_{(\hat c,\hat m)} \;=\; \sigma^2 (R^{\mathsf T}R)^{-1} \;=\; \begin{pmatrix} 0.0990 & -0.0270 \\ -0.0270 & 0.0090 \end{pmatrix} .
$$

So $\sigma_{\hat c} = 0.3146$, $\sigma_{\hat m} = 0.0949$, and the correlation is $-0.0270/(0.3146\times0.0949) = -0.905$: slope and intercept are strongly *anti*-correlated, because a fit that is steeper must start lower to keep passing through the middle of the data.

**The predicted value at $x = 3$.** Put $Y = f(\hat c, \hat m) = \hat c + 3\hat m$, an affine function, so the rule is exact. The sensitivity row is $S = (1, \ 3)$ and

$$
V[Y] \;=\; S V S^{\mathsf T} \;=\; 0.0990 + 9(0.0090) + 2(3)(-0.0270) \;=\; 0.0990 + 0.0810 - 0.1620 \;=\; 0.0180 ,
$$

giving $\sigma_Y = \sqrt{0.0180} = 0.1342$.

**The check.** $x = 3$ is the mean of the $x_i$, and at the centroid a least-squares line is pinned by the sample mean of the $y_i$ alone, whose standard error is $\sigma/\sqrt{N} = 0.3/\sqrt{5} = 0.13416$. The propagated value agrees to all five figures, which it must, since both are exact statements about the same affine function.

**What dropping the cross term would have cost.** Keeping only the squared-derivative terms gives $0.0990 + 0.0810 = 0.1800$ and $\sigma_Y = 0.4243$ — too large by a factor of $3.16$. An error bar wrong by a factor of three in the safe direction is still wrong: it would hide a real disagreement with a prediction.

**The same calculation away from the centroid.** At $x = 6$, one unit beyond the data, $V[Y] = 0.0990 + 36(0.0090) + 12(-0.0270) = 0.0990$ and $\sigma_Y = 0.3146$. The cancellation is now only partial, and the extrapolated point is $2.3$ times less certain than the interpolated one — the quantitative form of the warning against extrapolating a fit.
:::

:::application[Error budgets, fitted parameters and filters]{provenance=original}
**The error budget of an experiment.** Writing out the terms of $\sum_i (\partial_i f)^2\sigma_i^2$ before any data are taken is how an experiment is designed: each term is one line of a budget, and the design effort goes where the budget is largest. The pendulum example is the elementary case; in a precision measurement the same table runs to dozens of lines and separates statistical from systematic entries, the latter being exactly the correlated contributions, since a systematic error is one shared between measurements and therefore carried by an off-diagonal entry of $V_X$.

**Fitted parameters and everything computed from them.** Riley, Hobson and Bence derive the least-squares covariance matrix $V = (R^{\mathsf T}N^{-1}R)^{-1}$ by applying $V_Y = SV_XS^{\mathsf T}$ to the estimator $\hat a = Sy$, a case in which the function is linear and the rule is therefore exact :cite[]{work=rhb-2006 loc="§31.6, eqs. (31.98)-(31.99), pp. 1274-1275"}. Any quantity derived from fitted parameters — a predicted value, a ratio of amplitudes, an extrapolated intercept — must then be propagated through the *full* matrix, as the second example does. This is also why fitting codes return a covariance matrix rather than a list of error bars, and why discarding the off-diagonal entries silently corrupts everything downstream. See :ref[Least-squares fitting]{to=stats.least-squares-regression} and :ref[Maximum likelihood]{to=stats.maximum-likelihood}, whose asymptotic covariance is the inverse Fisher matrix.

**Linear filters and data assimilation.** The forecast step of the :ref[Kalman filter]{to=stats.kalman-filter} is $V_Y = SV_XS^{\mathsf T} + Q$: the linear propagation law of this unit applied to the model's state-transition matrix, plus the model error. The extended Kalman filter is the same formula with $S$ the Jacobian of a non-linear model, which is to say it is this unit's approximation, with this unit's failure mode — in a chaotic system the curvature scale $|f'/f''|$ shrinks as the forecast lengthens, and the linearised covariance becomes untrustworthy long before the forecast does. The same structure appears in :ref[Optimal interpolation and variational data assimilation]{to=stats.data-assimilation}.

**Where the rule is abandoned.** When the curvature test of step 2 fails, the modern practice is to sample: draw inputs from their joint distribution, push each draw through $f$, and read off the spread of the outputs. That costs nothing in accuracy and is exact in the limit of many draws, and the formula of this unit survives as the thing one checks the sample against.
:::
