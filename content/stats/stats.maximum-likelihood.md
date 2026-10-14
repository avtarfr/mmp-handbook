---
id: stats.maximum-likelihood
title: Maximum likelihood
kind: method
level: core
summary: Defines the likelihood and the maximum-likelihood estimator, proves that maximum likelihood commutes with reparametrisation and that any efficient estimator must be a function of it, states the large-sample normal form of the likelihood with its curvature error bar, and locates a lighthouse from fifteen Cauchy-distributed flashes at $1.163 \pm 0.184$ km where the sample mean gives $-0.64$ km.
prereqs: [stats.estimators, stats.sampling-distributions, prob.probability-spaces, prob.joint-distributions, prob.characteristic-functions, prob.probability-inequalities, prob.central-limit-theorem, found.taylor-several-variables]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§31.5, pp. 1255-1256: the hypothesis $H$ that the sample has a given functional form, the definition $P(x|a,H) = L(x;a)$ of the likelihood function, and the illustration of how the likelihood narrows as the sample grows; §31.5.1, eqs. (31.68)-(31.71), pp. 1257-1258: the maximum-likelihood estimator as the maximiser of $L$, the stationarity equations in $L$ and in $\\ln L$ with the remark that they have the same solutions, the catalogue of likelihood shapes (a unique stationary point, several stationary points, a maximum at an end-point of the allowed range), and the warning to check that a stationary point is a maximum; pp. 1258-1260: the ML estimators for independent measurements of unequal known variance, giving the inverse-variance weighted mean (31.72), for correlated measurements with known covariance matrix, and for a Gaussian with both mean and width unknown, eqs. (31.73)-(31.74), where the ML width is the uncorrected sample standard deviation; §31.5.2, pp. 1261: the transformation property $\\hat{\\alpha(a)} = \\alpha(\\hat a)$, the resulting bias of ML estimators, and the example $E[\\hat\\tau] = \\tau$ but $E[\\hat\\lambda] = N\\lambda/(N-1)$, eq. (31.76); §31.5.3, p. 1262: Fisher's inequality applied to $L$, and the proof that if an efficient estimator exists then it is a function of the ML estimator, via the equality condition $\\partial \\ln L/\\partial a = c[\\hat a_{\\text{eff}} - \\alpha(a)]$ in the Schwarz inequality; §31.5.4, eq. (31.78), p. 1263: the standard error on an ML estimate and its estimated form; §31.5.5, eq. (31.85), p. 1266, and eq. (31.86), p. 1268: the curvature estimate $\\hat\\sigma_{\\hat a} = [-\\partial^2\\ln L/\\partial a^2]^{-1/2}$ at the maximum and its matrix generalisation; §31.5.6, pp. 1269-1270: the large-$N$ Gaussian form $L = L_{\\max}\\exp[-\\tfrac12 Q(a,\\hat a)]$ with $Q = (a-\\hat a)^T V^{-1}(a-\\hat a)$, the statements that ML estimators are asymptotically consistent and asymptotically minimum-variance, and that $V^{-1} \\to F$; §31.5.7, eq. (31.88), p. 1270: the extended likelihood for a Poisson-distributed sample size"
    pages: "1255-1263, 1266, 1268-1270"
    role: the definition of the likelihood and of the ML estimator, the stationarity equations, the invariance property and the bias it causes, the efficiency theorem, the curvature standard error, and the large-sample normal form stated here
  - work: grimmett-stirzaker-2020
    loc: "§4.4, paragraph (4.4.7), p. 108: the Cauchy density $1/[\\pi(1+x^2)]$, with the remark that it has no moments; §7.4, Example (7.4.10), p. 373: for independent standard Cauchy variables the average $n^{-1}S_n$ has characteristic function $e^{-|t|}$ and so is itself standard Cauchy for every $n$"
    pages: "108, 373"
    role: the two properties of the Cauchy distribution on which the worked example turns - no mean, and a sample mean that does not improve with sample size
---

:::note[What this unit is for]{provenance=original}
:ref[]{to=stats.estimators} says how to judge a rule for turning data into a number but not where such a rule should come from. Maximum likelihood is the answer that works almost always: write down the probability of having obtained the data you actually obtained, regard it as a function of the unknown parameters, and take the parameters that make it largest.

The method is worth its name for four reasons, all of them below. It is automatic - no cleverness is needed once the model is written down. It is invariant: estimating a rate and estimating a lifetime give consistent answers. It is asymptotically as good as any method can be, in the precise sense of the Cramer-Rao bound. And it produces its own error bar, from the curvature of the log-likelihood at the peak, with no separate calculation.
:::

:::definition[Likelihood, log-likelihood, and the ML estimator]{provenance=adapted src="rhb-2006:§31.5, the definition of the likelihood function, p. 1255, and §31.5.1, eqs. (31.68)-(31.69), pp. 1257-1258"}
Adopt a hypothesis $H$ that the data $x = (x_1,\dots,x_n)$ were drawn from a joint density of a specified functional form, known except for the values of $M$ parameters $a = (a_1,\dots,a_M)$. The **likelihood function** is that density read as a function of the parameters with the data held fixed:

$$
L(x; a) \;=\; P(x \mid a, H) .
$$

Riley, Hobson and Bence make the conditioning on $H$ explicit, as here, because the likelihood is only ever defined relative to an assumed model. When the sample is independent the likelihood factorises,

$$
L(x;a) \;=\; \prod_{i=1}^{n} p(x_i \mid a) ,
$$

but the definition does not require independence, nor that the $x_i$ be drawn from a common law.

The **log-likelihood** is $\ell(a) = \ln L(x;a)$. A **maximum-likelihood estimator** (ML estimator) $\hat a$ is a value of the parameters at which $L(x;a)$ attains its largest value over the allowed parameter range. Since $\ln$ is strictly increasing, $L$ and $\ell$ have the same maximisers and the same stationary points, and for a product likelihood $\ell$ is a sum, so one works with $\ell$.

If the maximum lies at an interior stationary point, $\hat a$ solves the $M$ **likelihood equations**

$$
\left.\frac{\partial \ell}{\partial a_i}\right|_{a=\hat a} \;=\; 0 ,
\qquad i = 1,\dots,M .
$$

The left-hand side is the score of :ref[]{to=stats.estimators}, so the likelihood equations say: *choose the parameters that make the observed data score zero*. Riley, Hobson and Bence emphasise that this is a necessary condition only. They list the shapes that occur in practice - a single interior stationary point, several stationary points of which one is the global maximum, and a maximum sitting at an end-point of the allowed range, with or without stationary points elsewhere - and insist that one verify that a solution found is in fact a maximum.
:::

:::statement[Three properties of maximum likelihood]{provenance=adapted src="rhb-2006:§31.5.2, the invariance property and eq. (31.76), p. 1261, §31.5.3, the efficiency theorem, p. 1262, and §31.5.6, the large-sample form and its consequences, pp. 1269-1270"}
Let $\hat a$ be an ML estimator of $a$ under the hypothesis $H$.

**1. Invariance under reparametrisation.** For any function $\alpha$ of the parameters, the ML estimator of $\alpha(a)$ is

$$
\widehat{\alpha(a)} \;=\; \alpha(\hat a) .
$$

One therefore never has to decide whether to estimate a rate or its reciprocal. The price is that **ML estimators are in general biased**: if $\hat a$ is unbiased for $a$ and $\alpha$ is strictly convex (or strictly concave) and non-affine, then $\alpha(\hat a)$ is biased upwards (respectively downwards) for $\alpha(a)$, by Jensen's inequality (:ref[]{to=prob.probability-inequalities}). Riley, Hobson and Bence give the case of a sample from the density $\tau^{-1}e^{-x/\tau}$ on $(0,\infty)$: the ML estimators are $\hat\tau = \bar x$ and $\hat\lambda = 1/\bar x$ for $\lambda = 1/\tau$, with

$$
\mathbb{E}[\hat\tau] = \tau , \qquad \mathbb{E}[\hat\lambda] = \frac{n}{n-1}\lambda ,
$$

so the second is biased although the first is not. They note that the bias of an ML estimator always vanishes as $n\to\infty$.

**2. If an efficient estimator exists, it is a function of the ML estimator.** Suppose some estimator $\hat a_{\mathrm{eff}}$ attains the Cramer-Rao bound of :ref[]{to=stats.estimators} with $P$ replaced by $L$. Then $\hat a_{\mathrm{eff}}$ is a function of $\hat a$. Maximum likelihood therefore never misses an efficient estimator that exists.

**3. Large-sample form.** In the limit $n \to \infty$ the likelihood tends to a multivariate Gaussian in the parameters, centred on the ML estimate:

$$
L(x;a) \;\longrightarrow\; L_{\max}\exp\left[-\tfrac12 Q(a,\hat a)\right] ,
\qquad
Q(a,\hat a) = (a-\hat a)^{\mathsf T} V^{-1} (a - \hat a) ,
$$

$$
\bigl(V^{-1}\bigr)_{ij} \;=\; \left.-\frac{\partial^{2}\ell}{\partial a_i \partial a_j}\right|_{a=\hat a} ,
$$

and in that limit $V^{-1}$ tends to the Fisher matrix $F$. Riley, Hobson and Bence draw from this the two statements that ML estimators are **asymptotically consistent** and **asymptotically minimum-variance**, attributing the Gaussian shape to the central limit theorem of :ref[]{to=prob.central-limit-theorem}; they also note that the corresponding statement for the sampling distribution $P(\hat a \mid a)$ holds, with the roles of $a$ and $\hat a$ exchanged, so that in this limit the two ways of setting an error bar agree.

For one parameter, the last display is the **curvature standard error**

$$
\hat\sigma_{\hat a} \;=\; \left[\left.-\frac{\partial^{2}\ell}{\partial a^{2}}\right|_{a=\hat a}\right]^{-1/2} ,
$$

which Riley, Hobson and Bence justify from the Bayesian reading of the likelihood (:ref[]{to=stats.bayesian-inference}) and recommend as a measure of the error even when $L$ is not Gaussian.
:::

:::idea{provenance=original}
All three properties are statements about the *shape* of one function of the parameters.

Invariance is the observation that a change of parameter relabels the horizontal axis of the graph of $L$ but does not move its peak: the highest point of a curve is still the highest point after the axis is stretched. Nothing is assumed about the stretch except that it is a well-defined map.

The efficiency statement is the equality case of the Cauchy-Schwarz step in the Cramer-Rao proof. Equality forces the score to be proportional to $\hat a_{\mathrm{eff}}$ minus its mean. But the ML estimator is where the score vanishes, so wherever the score vanishes that bracket vanishes too - which pins $\hat a_{\mathrm{eff}}$ to the ML estimate.

The large-sample form is Taylor's theorem plus the law of large numbers. For an independent sample $\ell$ is a sum of $n$ terms, so its second derivative is a sum of $n$ terms and grows like $n$, while the cubic term in the expansion about the peak grows like $n$ as well but is multiplied by a displacement of order $n^{-1/2}$ and so is smaller by $n^{-1/2}$. Expanding about the maximum, the linear term is absent by stationarity and the quadratic term survives: a parabola in $\ell$, a Gaussian in $L$, with width set by the curvature.
:::

:::proof[Invariance, and the efficiency theorem]{provenance=adapted src="rhb-2006:§31.5.2, p. 1261, and §31.5.3, p. 1262"}
**Invariance.** Let $\alpha$ map the parameter space into some set $A$, and define the induced likelihood of a value $\alpha_0 \in A$ as the largest likelihood available among parameters carrying that value,

$$
L^{*}(\alpha_0) \;=\; \sup\{\, L(x;a) : \alpha(a) = \alpha_0 \,\} .
$$

This is the only definition available when $\alpha$ is not injective, and it reduces to $L(x;\alpha^{-1}(\alpha_0))$ when it is. Now $\sup_{\alpha_0 \in A} L^{*}(\alpha_0) = \sup_a L(x;a) = L(x;\hat a)$, because every $a$ is counted exactly once on the left, under $\alpha_0 = \alpha(a)$. The supremum on the left is therefore attained at $\alpha_0 = \alpha(\hat a)$, which says $\widehat{\alpha(a)} = \alpha(\hat a)$. No smoothness, monotonicity or invertibility of $\alpha$ was used.

**Bias is not preserved.** Suppose $\mathbb{E}[\hat a] = a$ and $\alpha$ is strictly convex and non-affine. Jensen's inequality gives $\mathbb{E}[\alpha(\hat a)] > \alpha(\mathbb{E}[\hat a]) = \alpha(a)$ whenever $\hat a$ is not degenerate, so $\alpha(\hat a)$ is biased upwards; applying the same argument to $-\alpha$ gives a downward bias when $\alpha$ is strictly concave and non-affine. This is why invariance and unbiasedness cannot both be demanded of an estimation rule.

**Efficiency.** Apply the Cramer-Rao inequality of :ref[]{to=stats.estimators} with $P(x\mid a)$ taken to be $L(x;a)$, which is legitimate under $H$ because they are the same function. Suppose $\hat a_{\mathrm{eff}}$ attains the bound. Then Step 5 of that proof holds with equality, and equality in Cauchy-Schwarz requires the two entries to be proportional:

$$
\frac{\partial \ell}{\partial a} \;=\; c(a)\,\bigl[\hat a_{\mathrm{eff}}(x) - \alpha(a)\bigr]
\qquad\text{for almost every } x,
$$

with $\alpha(a) = \mathbb{E}[\hat a_{\mathrm{eff}}]$ and $c(a) \ne 0$ independent of $x$. Evaluate both sides at $a = \hat a$, where the left-hand side vanishes by the likelihood equation. Since $c(\hat a)\neq 0$,

$$
\hat a_{\mathrm{eff}}(x) \;=\; \alpha(\hat a) ,
$$

so $\hat a_{\mathrm{eff}}$ is the function $\alpha$ of the ML estimator - and, by the invariance property just proved, is itself the ML estimator of $\alpha(a)$. $\square$

The large-sample statement 3 is quoted from Riley, Hobson and Bence, who derive it from the central limit theorem rather than proving it; the conditions under which it holds are discussed in the remark.
:::

:::remark[Where the hypotheses are used, and where they fail]{provenance=original}
**The model $H$.** Everything is conditional on the assumed functional form. If $H$ is wrong, the ML estimator converges to the parameter value whose model law is closest to the truth in an information sense, not to anything one wanted; and the curvature error bar, which measures only how sharply the *assumed* model discriminates, is then an understatement. Checking $H$ is the business of :ref[]{to=stats.hypothesis-testing}, not of this unit.

**Interior maximum, and differentiability.** The likelihood equations are necessary only where the maximum is interior and $\ell$ is differentiable. The :cite[catalogue of likelihood shapes]{work=rhb-2006 loc="§31.5.1, Fig. 31.6, p. 1257"} is a list of the ways this can fail, and each occurs in practice. For a sample from the uniform density on $(0,\theta)$ the likelihood is $\theta^{-n}$ for $\theta \ge \max_i x_i$ and zero below, so it is strictly decreasing wherever it is positive: the ML estimator is $\hat\theta = \max_i x_i$, at the end-point of the allowed range, and the derivative is never zero. The worked example below has three stationary points, two of them spurious.

**The regularity behind statement 3.** The large-sample Gaussian form needs the conditions already used for the Cramer-Rao bound - support not depending on the parameters, differentiation under the integral sign, finite non-zero information - together with an interior true value and a third derivative of $\ell$ under control, so that the Taylor expansion can be truncated after the quadratic term. The :cite[statement of the large-sample form]{work=rhb-2006 loc="§31.5.6, pp. 1269-1270"} does not list these; they are what is being used. The uniform example again shows what is lost: there $n(\theta - \hat\theta)/\theta$ converges to an exponential distribution, not a Gaussian, and the error shrinks like $1/n$ rather than $1/\sqrt n$, which is faster than the regular rate rather than slower.

**Asymptotic, not finite-sample.** Statement 3 says nothing at any fixed $n$. The example in this unit has $n = 15$, and the curvature error bar $0.184$ and the asymptotic bound $0.183$ agree there to one part in a hundred; that agreement is empirical, not guaranteed.

**Two readings of the error bar.** The curvature formula for $\hat\sigma_{\hat a}$ uses the *observed* second derivative at the peak, which depends on the data; the Cramer-Rao bound uses its *expectation* over samples, the Fisher information. The two coincide in the limit and often differ at finite $n$. The :cite[curvature form]{work=rhb-2006 loc="§31.5.5, eq. (31.85), p. 1266"} is reached through the Bayesian identification of the normalised likelihood with a posterior under a flat prior, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§31.5.5, p. 1266"} are explicit that a frequentist regards the resulting interval as an approximation to the one in :ref[]{to=stats.confidence-intervals}.
:::

:::method[Maximum likelihood in practice]{provenance=original}
1. **State the model.** Write the density of one observation, $p(x\mid a)$, with every parameter named and its allowed range given.
2. **Form the log-likelihood.** For an independent sample, $\ell(a) = \sum_{i=1}^{n}\ln p(x_i\mid a)$. Drop any additive term free of $a$; it shifts $\ell$ without moving the maximum.
3. **Differentiate and solve.** Set $\partial\ell/\partial a_i = 0$ for each $i$. If the equations are algebraic, solve them. If not, solve numerically by Newton's method on the score, as in :ref[]{to=num.root-finding}, starting from a crude estimate (a sample mean, a median, a method-of-moments value).
4. **Confirm it is the global maximum.** Check that the Hessian $\partial^{2}\ell/\partial a_i \partial a_j$ is negative definite at the solution, and scan $\ell$ across the whole allowed range: multiple stationary points are common, and the maximum may sit at an end-point where no derivative vanishes.
5. **Error bars.** Invert the negative Hessian at the peak: $V = [-\partial^{2}\ell/\partial a_i\partial a_j]^{-1}$, whose diagonal square roots are the standard errors and whose off-diagonal entries are the covariances. Equivalently, for one parameter, find where $\ell$ has fallen by $\tfrac12$ from its peak; for a parabola these agree exactly, and the drop-by-$\tfrac12$ rule is the better of the two when the peak is skew.
6. **Reparametrise freely.** If the quantity wanted is $\alpha(a)$, report $\alpha(\hat a)$. Its error bar follows by :ref[]{to=stats.error-propagation}, $\sigma_{\alpha} = \lvert\alpha'(\hat a)\rvert\,\sigma_{\hat a}$, to first order - or, better, by repeating step 5 in the new parameter.
7. **Report the bias if it matters.** ML estimators are biased at finite $n$ by an amount of order $1/n$. Quote it when it is comparable with the standard error, which happens when $n$ is small or the parametrisation strongly curved.
:::

:::example[Locating a lighthouse from fifteen flashes]{provenance=original}
A beacon lies somewhere on a straight line parallel to a long, straight shore, at a perpendicular distance $\gamma = 0.50$ km known from a chart, but at an unknown position $\mu$ along it. It emits flashes at instants when its beam points in a direction uniformly distributed over all angles. A detector records the position $x$ at which each flash strikes the shore. If $\phi$ is the angle of the beam from the perpendicular, uniform on $(-\pi/2,\pi/2)$, then $x = \mu + \gamma\tan\phi$, and the change of variables of :ref[]{to=prob.joint-distributions} gives the Cauchy density

$$
p(x\mid\mu) \;=\; \frac{1}{\pi}\,\frac{\gamma}{\gamma^{2} + (x-\mu)^{2}} ,
\qquad x \in \mathbb{R} .
$$

Fifteen flashes are recorded, at the positions (in km, in the order observed)

$$
1.41,\ \ 2.69,\ \ 1.79,\ \ 0.62,\ \ 0.84,\ \ 2.39,\ \ -29.02,\ \ 1.99,\ \ 1.88,\ \ 1.15,\ \ 0.84,\ \ 0.78,\ \ 0.72,\ \ 1.11,\ \ 1.21 .
$$

**The sample mean is useless.** Its value is $\bar x = -0.64$ km, dragged far from the cluster by the seventh flash, which went out nearly parallel to the shore. This is not bad luck to be averaged away. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.4, paragraph (4.4.7), p. 108"} record that the Cauchy law has no moments, and :cite[compute]{work=grimmett-stirzaker-2020 loc="§7.4, Example (7.4.10), p. 373"} the characteristic function of the average of $n$ independent *standard* Cauchy variables to be $e^{-|t|}$, the characteristic function of one of them (:ref[]{to=prob.characteristic-functions}); writing $x_i = \mu + \gamma z_i$ with $z_i$ standard carries that statement to the density here, since $\bar x = \mu + \gamma \bar z$. The sampling distribution of $\bar x$ is therefore the *same* for $n=15$ as for $n=1$: taking more data does not improve it at all. The sample median, $1.15$ km, is far better behaved.

**The likelihood.** Dropping terms free of $\mu$,

$$
\ell(\mu) \;=\; -\sum_{i=1}^{15}\ln\bigl[\gamma^{2} + (x_i-\mu)^{2}\bigr] ,
\qquad
\frac{d\ell}{d\mu} \;=\; \sum_{i=1}^{15}\frac{2\,(x_i-\mu)}{\gamma^{2}+(x_i-\mu)^{2}} .
$$

Each term of the score is a bounded, odd function of $x_i - \mu$, peaking at $\lvert x_i-\mu\rvert = \gamma$ and decaying beyond: a distant point exerts *less* pull than a near one, which is exactly why the method is not fooled by the outlier.

**Solving.** The score is not algebraic in $\mu$; solve it numerically. Scanning the range covered by the data, it has **three** roots, at

$$
\mu = -28.897,\qquad \mu = -27.116,\qquad \mu = 1.1628 ,
$$

with log-likelihoods (in the convention above, with the constant dropped) $-94.168$, $-95.152$ and $+2.173$. The first two are the spurious pair that the lone far point manufactures - the case Riley, Hobson and Bence illustrate as several stationary points - and the global maximum is

$$
\hat\mu \;=\; 1.1628\ \text{km} .
$$

**Error bar from the curvature.** Differentiating the score,

$$
-\frac{d^{2}\ell}{d\mu^{2}} \;=\; \sum_{i=1}^{15} \frac{2\bigl[\gamma^{2}-(x_i-\mu)^{2}\bigr]}{\bigl[\gamma^{2}+(x_i-\mu)^{2}\bigr]^{2}} ,
$$

which evaluated at $\hat\mu$ gives $29.586\ \mathrm{km}^{-2}$. Hence

$$
\hat\sigma_{\hat\mu} \;=\; (29.586)^{-1/2} \;=\; 0.1838\ \text{km},
\qquad\text{so}\qquad \mu = 1.163 \pm 0.184\ \text{km} .
$$

As a cross-check, the Fisher information of one observation for a Cauchy location parameter is

$$
i(\mu) = \int_{-\infty}^{\infty}\left[\frac{2(x-\mu)}{\gamma^{2}+(x-\mu)^{2}}\right]^{2} p(x\mid\mu)\,dx = \frac{1}{2\gamma^{2}} ,
$$

so the Cramer-Rao bound is $2\gamma^{2}/n = 2(0.25)/15 = 0.03333\ \mathrm{km}^{2}$, a standard error of $0.1826$ km. Observed curvature and expected information agree to $0.7\%$ here. The interval over which $\ell$ falls by $\tfrac12$ from its peak is $[0.986, 1.359]$, that is $1.163^{+0.196}_{-0.177}$: very nearly symmetric, so the Gaussian approximation is doing no harm at $n=15$.

**How good is the median?** The sample median of a Cauchy sample is asymptotically normal about $\mu$ with standard deviation $\pi\gamma/(2\sqrt n) = 0.2028$ km, so its efficiency in the sense of :ref[]{to=stats.estimators} is

$$
e \;=\; \frac{2\gamma^{2}/n}{\pi^{2}\gamma^{2}/(4n)} \;=\; \frac{8}{\pi^{2}} \;=\; 0.811 .
$$

Robust, simple, and only $19\%$ short of optimal - but the ML estimate is what the data actually support, and it costs one short numerical solve.

**Invariance in use.** Suppose the quantity wanted is the bearing of the beacon from the detector's origin, $\theta = \arctan(\mu/\gamma)$. By the invariance property, $\hat\theta = \arctan(1.1628/0.50) = 1.1647$ rad $= 66.73^{\circ}$, and to first order $\sigma_\theta = \gamma\,\sigma_{\hat\mu}/(\gamma^{2}+\hat\mu^{2}) = 0.50\times 0.1838/1.6021 = 0.0574$ rad $= 3.29^{\circ}$. No new maximisation was needed.

The numbers to check are $\hat\mu = 1.1628$, $-d^{2}\ell/d\mu^{2} = 29.586$ and $\hat\sigma_{\hat\mu} = 0.1838$.
:::

:::application[Fitting models to data in the physical sciences]{provenance=original}
**Weighted averages.** The commonest use of the method is also the simplest. For $n$ independent measurements $x_i$ of one quantity $\mu$, each Gaussian with its own known standard deviation $\sigma_i$, the log-likelihood is $-\tfrac12\sum_i (x_i-\mu)^{2}/\sigma_i^{2}$ up to constants, and the likelihood equation gives the inverse-variance weighted mean

$$
\hat\mu \;=\; \frac{\sum_i x_i/\sigma_i^{2}}{\sum_i 1/\sigma_i^{2}} ,
\qquad
\hat\sigma_{\hat\mu} = \Bigl(\textstyle\sum_i \sigma_i^{-2}\Bigr)^{-1/2} ,
$$

which is how every table of world-average physical constants is constructed (:cite[]{work=rhb-2006 loc="§31.5.1, eq. (31.72), p. 1259"}). When the measurements are correlated with known covariance matrix $N$, the same calculation gives $\hat\mu = (\mathbb{1}^{\mathsf T} N^{-1} x)/(\mathbb{1}^{\mathsf T} N^{-1}\mathbb{1})$, reducing to the above when $N$ is diagonal (:cite[]{work=rhb-2006 loc="§31.5.1, pp. 1259-1260"}).

**Least squares.** When the model is a curve $f(x;a)$ observed with Gaussian noise, $\ell = -\tfrac12\chi^{2}(a)$ exactly, so maximising the likelihood *is* minimising $\chi^{2}$. That specialisation, together with its matrix solution and its goodness-of-fit test, is :ref[]{to=stats.least-squares-regression}.

**Counting experiments.** When the number of events is itself random, the :cite[extended likelihood]{work=rhb-2006 loc="§31.5.7, eq. (31.88), p. 1270"} multiplies the usual product by a Poisson factor $\lambda^{n}e^{-\lambda}/n!$ for the observed count; this is the standard tool for fitting a signal peak over a background in a particle-physics spectrum, where both the shape and the normalisation carry information.

**Beyond the Gaussian world.** The example of this unit is the pattern for heavy-tailed data generally: in astronomy, in finance and in geophysics, a model whose likelihood penalises far points only logarithmically gives an estimator that is automatically robust, with no explicit outlier rejection. The same likelihood machinery underlies image deconvolution, survival analysis and phylogenetic inference, and, read through Bayes' theorem as in :ref[]{to=stats.bayesian-inference}, it is the bridge to the posterior distributions used throughout modern data analysis.
:::
