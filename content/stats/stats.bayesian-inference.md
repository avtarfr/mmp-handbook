---
id: stats.bayesian-inference
title: Bayesian inference
kind: method
level: core
summary: Turns Bayes' theorem into a method of parameter estimation - prior, likelihood, evidence, posterior - proves that the posterior updates sequentially and that the beta and normal families are conjugate, defines the credible interval and sets it against the confidence interval, and works a detector efficiency to a posterior mean of $9/14 = 0.643$ with a 95% credible interval $[0.386, 0.861]$.
prereqs: [prob.probability-spaces, stats.maximum-likelihood, stats.confidence-intervals, stats.estimators, prob.random-variables, spec.beta-function]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§30.2.3 Bayes' theorem, eqs. (30.26)-(30.29), pp. 1132-1133: the theorem in the forms used here, including the version with a partition in the denominator; §31.5.5 The Bayesian interpretation of the likelihood function, pp. 1264-1268: the identification $P(x|a,H) = L(x;a)$ of the likelihood with the sampling density; eq. (31.81), Bayes' theorem written as $P(a|x,H) = P(x|a,H)P(a|H)/P(x|H)$; the naming of $P(a|H)$ as the prior probability representing the state of knowledge before the data, of $P(x|a,H)$ as the likelihood that modifies it, of $P(x|H)$ as the evidence that normalises it, and of $P(a|x,H)$ as the posterior probability, together with the remark that the posterior as a whole is the answer to a parameter-estimation problem; eq. (31.82), the proportionality $P(a|x,H) \\propto P(x|a,H)P(a|H)$ obtained by dropping the evidence, and the instruction to normalise empirically by $\\int P(a|x,H)\\,d^m a = 1$; the discussion of what a prior should reflect, including physical range restrictions and the uniform or very broad prior used to express ignorance; eq. (31.83), $P(a|x,H) \\propto L(x;a)$ under a uniform prior, and the consequent reading of the maximum-likelihood estimate as the maximiser of the posterior; eq. (31.84), the Bayesian confidence interval $\\Pr(a_- \\le a < a_+|x,H) = \\int_{a_-}^{a_+} L\\,da = 1-\\alpha-\\beta$ with the central choice $\\alpha=\\beta$ and the alternative choice $L(x;a_-) = L(x;a_+)$; the comparison of the two kinds of interval, in which a frequentist reads the Bayesian interval as an approximation to the classical one and a Bayesian reads it as the more meaningful, the classical interval being defined by coverage over many repeated samples of size $N$ and the Bayesian interval by the probability that $a$ lies in it given the single sample obtained; eq. (31.85), the curvature estimate $\\hat\\sigma_{\\hat a} = [-\\partial^2\\ln L/\\partial a^2|_{\\hat a}]^{-1/2}$, exact for a Gaussian likelihood and used as a measure of the standard error otherwise; eqs. (31.86) and (31.36), the multi-parameter version $(V^{-1})_{ij} = -\\partial^2\\ln L/\\partial a_i\\partial a_j|_{\\hat a}$ whose expectation is the Fisher matrix; the constant-$L$ confidence region in several dimensions; §31.5.4, pp. 1263-1264 and the worked example on p. 1267: the ten telephone-call intervals with $\\hat\\tau = \\bar x = 3.77$, the likelihood $L(x;\\tau) = \\tau^{-N}\\exp(-\\sum_i x_i/\\tau)$, the curvature error $\\hat\\sigma_{\\hat\\tau} = \\hat\\tau/\\sqrt N = 1.19$, the classical 68% central interval $[2.86, 5.46]$ obtained from the sampling distribution (31.80), and the Bayesian 68% central interval $[3.16, 6.20]$ obtained from the normalised likelihood"
    pages: "1132-1133, 1263-1268"
    role: the entire Bayesian vocabulary and the parameter form of Bayes' theorem; the uniform-prior identification of the posterior with the likelihood and of the posterior maximiser with the maximum-likelihood estimate; the definition of the credible interval and its two standard choices; the curvature standard error and its link to the Fisher matrix; and the numerical comparison of a classical with a Bayesian interval on the same data
  - work: grimmett-stirzaker-2020
    loc: "§6.14 Markov chain Monte Carlo, Example (1) 'Bayesian inference', p. 330: a prior mass function $\\pi(\\theta)$ postulated on a discrete set $\\Theta$ of possible values, data $x$ collected, the posterior mass function $\\pi(\\theta|x) = f(x|\\theta)\\pi(\\theta)/\\sum_{\\psi} f(x|\\psi)\\pi(\\psi)$, the requirement to compute posterior characteristics $\\mathbb{E}(g(\\theta)|x) = \\sum_\\theta g(\\theta)\\pi(\\theta|x)$, and the observation that such sums can be hard to compute, which is the motivation given there for Markov chain Monte Carlo"
    pages: "330"
    role: the discrete form of the posterior with an explicit summed denominator, and the point that the quantity actually wanted is a posterior expectation, whose computation is what drives the use of Markov chain Monte Carlo
---

:::note[The change of question]{provenance=adapted src="rhb-2006:§31.5.5, the remark that the posterior taken as a whole is what a parameter-estimation problem has to deliver, p. 1265"}
Frequentist inference keeps the parameter fixed and lets the data vary: it asks how a *procedure* behaves over hypothetical repetitions of the experiment, and reports intervals that cover the truth at a stated rate. Bayesian inference keeps the data fixed - they are what was actually observed - and puts the distribution on the parameter instead. It asks what is now believed about the parameter, given these data and what was believed beforehand.

The price is that "what was believed beforehand" has to be written down as a probability distribution. The return is that every question is answered by one object, the posterior distribution, and answered in the form people instinctively want: a probability that the parameter lies in a range. Riley, Hobson and Bence make the point sharply: on the Bayesian view what a parameter-estimation problem has to deliver is the whole posterior function, and every number one goes on to quote - an estimate, an error bar, an interval - is only a summary of it.
:::

:::definition[Prior, likelihood, evidence, posterior]{provenance=adapted src="rhb-2006:§31.5.5, eqs. (31.81)-(31.83) with the naming of the four factors, pp. 1264-1265; grimmett-stirzaker-2020:§6.14, Example (1), p. 330"}
Fix a model $H$: a family of distributions for the data $x$ indexed by parameters $a = (a_1,\dots,a_m)$. The sampling density $P(x \mid a, H)$, read as a function of $a$ with $x$ held at its observed value, is the **likelihood** $L(x; a)$ of :ref[]{to=stats.maximum-likelihood}. Bayes' theorem, proved for events in :ref[]{to=prob.probability-spaces} and applied here to densities, gives

$$
P(a \mid x, H) \;=\; \frac{P(x \mid a, H)\,P(a \mid H)}{P(x \mid H)} .
$$

The four factors have names:

- $P(a \mid H)$ is the **prior**, the distribution of the parameters before these data were analysed;
- $P(x \mid a, H) = L(x;a)$ is the **likelihood**, through which the data act;
- $P(x \mid H) = \int L(x;a)\,P(a\mid H)\,d^{m}a$ is the **evidence** (or marginal likelihood), which normalises the result;
- $P(a \mid x, H)$ is the **posterior**, the distribution of the parameters after the data.

Because the evidence does not depend on $a$, it is usually left out and restored at the end by normalisation:

$$
P(a \mid x, H) \;\propto\; L(x; a)\,P(a \mid H) ,
\qquad \int P(a \mid x, H)\,d^{m}a = 1 .
$$

For a parameter taking values in a countable set $\Theta$ the integral is a sum, and Grimmett and Stirzaker write the posterior mass function with its denominator displayed, $\pi(\theta \mid x) = f(x\mid\theta)\pi(\theta)\big/\sum_{\psi\in\Theta} f(x\mid\psi)\pi(\psi)$; what is usually wanted from it is a posterior expectation $\mathbb{E}(g(\theta)\mid x) = \sum_\theta g(\theta)\pi(\theta\mid x)$.

A prior should encode whatever was known beforehand, including hard physical restrictions - a mass is positive, an efficiency lies in $[0,1]$. When little is known, Riley, Hobson and Bence indicate it with a uniform or very broad prior; then $P(a\mid H)$ is constant and the posterior is proportional to the likelihood alone.
:::

:::definition[Credible interval]{provenance=adapted src="rhb-2006:§31.5.5, eq. (31.84) with the central and equal-ordinate choices, p. 1266"}
Let $a$ be a single parameter with posterior density $\pi(a \mid x)$. A **credible interval** at level $1 - \alpha - \beta$ is an interval $[a_-, a_+]$ with

$$
\int_{a_-}^{a_+} \pi(a \mid x)\,da \;=\; 1 - \alpha - \beta ,
$$

that is, an interval the parameter lies in with the stated posterior probability. Two standard choices pin down the endpoints:

- the **central** interval, with equal tail probabilities $\alpha = \beta$;
- the interval with **equal posterior density at the endpoints**, $\pi(a_-\mid x) = \pi(a_+ \mid x)$, which for a unimodal posterior is the shortest interval of its level and consists of the most probable values.

Riley, Hobson and Bence give both, under the name *Bayesian confidence interval*; we use the now-standard term credible interval to keep it distinct from the confidence interval of :ref[]{to=stats.confidence-intervals}, which is a different object with a different meaning. In several dimensions the analogue is a region bounded by a surface of constant posterior density.
:::

:::definition[Conjugate family]{provenance=original}
A family $\mathcal{F}$ of prior distributions is **conjugate** to a likelihood $L(x;\theta)$ if, whenever the prior belongs to $\mathcal{F}$, the posterior does too: updating moves the parameters of the prior without leaving the family. The practical content is that the integral defining the evidence is done once, in general, rather than numerically for every data set. The term is not used by any of our sources; the two instances below are proved from scratch.
:::

:::statement[Properties of the posterior]{provenance=adapted src="rhb-2006:§31.5.5, eqs. (31.82)-(31.83), (31.85) and (31.86), pp. 1265-1268"}
Let $\pi(a)$ be a prior and $L(x;a)$ a likelihood, with posterior $\pi(a\mid x) \propto L(x;a)\pi(a)$.

1. **Sequential updating.** If data arrive in two batches $x_1$ and $x_2$ that are independent given $a$, then
$$
\pi(a \mid x_1, x_2) \;\propto\; L(x_2; a)\,\pi(a\mid x_1) :
$$
the posterior after the first batch, used as the prior for the second, gives the same answer as analysing both batches at once. The order of the batches is irrelevant.

2. **Flat prior.** If $\pi$ is constant over the region where $L$ is appreciable, then $\pi(a\mid x) \propto L(x;a)$: the posterior is the normalised likelihood, and its maximiser is the maximum-likelihood estimate $\hat a_{\mathrm{ML}}$. A Bayesian therefore reads the maximum-likelihood estimate as the posterior mode under a uniform prior.

3. **Curvature error.** Riley, Hobson and Bence use
$$
\hat\sigma_{\hat a} = \left[-\left.\frac{\partial^{2}\ln L}{\partial a^{2}}\right|_{a = \hat a}\right]^{-1/2}
$$
as an estimate of the standard error. If $L$ is Gaussian in $a$ this is exactly its standard deviation, and the one-sigma limits are then the $68.3\%$ central credible interval; the formula is used as a measure of the error even when $L$ is not Gaussian. For several parameters the same curvature gives $(V^{-1})_{ij} = -\partial^{2}\ln L/\partial a_i \partial a_j$ at $\hat a$, whose expectation is the Fisher matrix of :ref[]{to=stats.estimators}.
:::

:::statement[Two conjugate families]{provenance=original}
**1. Beta prior, binomial data.** Let $\theta \in (0,1)$ be an unknown success probability, let the data be $k$ successes in $n$ independent trials, and let the prior be $\mathrm{Beta}(\alpha_0, \beta_0)$, with density proportional to $\theta^{\alpha_0-1}(1-\theta)^{\beta_0-1}$. (The subscripted $\alpha_0, \beta_0 > 0$ are the parameters of the beta distribution; they have nothing to do with the tail probabilities $\alpha, \beta$ of a credible interval.) Then the posterior is

$$
\mathrm{Beta}\bigl(\alpha_0 + k,\; \beta_0 + n - k\bigr) ,
$$

with mean, and hence posterior expectation of $\theta$,

$$
\mathbb{E}[\theta \mid k] = \frac{\alpha_0+k}{\alpha_0+\beta_0+n}
= w\,\frac{\alpha_0}{\alpha_0+\beta_0} + (1-w)\,\frac{k}{n} ,
\qquad w = \frac{\alpha_0+\beta_0}{\alpha_0+\beta_0+n} ,
$$

a weighted average of the prior mean and the observed frequency $k/n$, which is the maximum-likelihood estimate. The prior acts as $\alpha_0$ imagined successes and $\beta_0$ imagined failures, and its weight $w$ falls like $1/n$.

**2. Normal prior, normal data of known variance.** Let $x_1,\dots,x_n$ be independent $N(\theta, \sigma^{2})$ with $\sigma^{2}$ known, and let the prior be $\theta \sim N(\mu_0, \tau^{2})$. Then the posterior is normal,

$$
\theta \mid x \;\sim\; N\!\left(\mu_n, \frac{1}{P_n}\right) ,
\qquad
P_n = \frac{1}{\tau^{2}} + \frac{n}{\sigma^{2}} ,
\qquad
\mu_n = \frac{\tau^{-2}\mu_0 + (n/\sigma^{2})\,\overline x}{P_n} .
$$

In words: **precisions add**, and the posterior mean is the average of the prior mean and the sample mean weighted by their precisions. As $n \to \infty$ the data term dominates, $\mu_n \to \overline x$ and the posterior width tends to $\sigma/\sqrt n$, the frequentist standard error.
:::

:::idea{provenance=original}
Everything here follows from one line, $\text{posterior} \propto \text{likelihood} \times \text{prior}$, plus the discipline of never normalising until the end. Sequential updating is that line applied twice, with the factorisation of the likelihood over independent batches doing all the work. Conjugacy is the observation that for some pairs the product has the same algebraic shape as the prior: a beta density times a binomial likelihood is $\theta^{\text{something}}(1-\theta)^{\text{something}}$ again, and a Gaussian times a Gaussian is a Gaussian, because the exponents are quadratics and quadratics add. In the Gaussian case the addition is cleanest in terms of the coefficient of $\theta^{2}$, which is the precision; that is why the rule is "precisions add" and not anything about variances.
:::

:::proof[Sequential updating and the two conjugacies]{provenance=original}
**1. Sequential updating.** Conditional independence of the batches means $L(x_1,x_2; a) = L(x_1;a)L(x_2;a)$. Hence

$$
\pi(a \mid x_1,x_2) \;\propto\; L(x_1;a)L(x_2;a)\,\pi(a)
\;=\; L(x_2;a)\,\bigl[L(x_1;a)\pi(a)\bigr]
\;\propto\; L(x_2;a)\,\pi(a\mid x_1) ,
$$

the last step because $\pi(a\mid x_1) \propto L(x_1;a)\pi(a)$, the omitted factor being a constant in $a$. Both ends of the chain are probability densities in $a$, and two densities that are proportional are equal, since each is the other divided by its total mass, which is one. The product $L(x_1;a)L(x_2;a)$ is symmetric in the two batches, so the order of processing cannot matter. $\square$

**2. Beta and binomial.** The likelihood of $k$ successes in $n$ trials is $\binom{n}{k}\theta^{k}(1-\theta)^{n-k}$, and the binomial coefficient is a constant in $\theta$ and may be dropped. Multiplying by the prior,

$$
\pi(\theta \mid k) \;\propto\; \theta^{k}(1-\theta)^{n-k}\cdot\theta^{\alpha_0-1}(1-\theta)^{\beta_0-1}
\;=\; \theta^{(\alpha_0+k)-1}(1-\theta)^{(\beta_0+n-k)-1} .
$$

This is the kernel of a $\mathrm{Beta}(\alpha_0+k, \beta_0+n-k)$ density. Since a density is determined by its kernel together with the requirement that it integrate to one, and since the beta integral of :ref[]{to=spec.beta-function} supplies the constant,

$$
\int_0^1 \theta^{p-1}(1-\theta)^{q-1}\,d\theta = B(p,q) = \frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)} ,
$$

the posterior is exactly that beta distribution - which is also where the hypothesis $\alpha_0, \beta_0 > 0$ is used, since otherwise the integral diverges. Its mean is $p/(p+q)$ with $p = \alpha_0+k$ and $q = \beta_0+n-k$, as tabulated in :ref[]{to=prob.random-variables}, giving $(\alpha_0+k)/(\alpha_0+\beta_0+n)$. The weighted-average form follows by splitting the numerator:

$$
\frac{\alpha_0+k}{\alpha_0+\beta_0+n}
= \frac{\alpha_0+\beta_0}{\alpha_0+\beta_0+n}\cdot\frac{\alpha_0}{\alpha_0+\beta_0}
+ \frac{n}{\alpha_0+\beta_0+n}\cdot\frac{k}{n} . \qquad\square
$$

**3. Normal and normal.** Keep only the factors depending on $\theta$. The likelihood is

$$
L \;\propto\; \exp\left[-\frac{1}{2\sigma^{2}}\sum_{i=1}^{n}(x_i-\theta)^{2}\right] ,
\qquad
\sum_{i=1}^{n}(x_i-\theta)^{2} = \sum_{i=1}^{n}(x_i-\overline x)^{2} + n(\theta - \overline x)^{2} ,
$$

the identity being the expansion about $\overline x$ whose cross term vanishes. The first sum is free of $\theta$ and joins the constant. Writing $p_0 = 1/\tau^{2}$ and $p_1 = n/\sigma^{2}$, the posterior is therefore

$$
\pi(\theta\mid x) \;\propto\; \exp\left[-\tfrac12\Bigl(p_0(\theta-\mu_0)^{2} + p_1(\theta-\overline x)^{2}\Bigr)\right] .
$$

The bracket is a quadratic in $\theta$ with leading coefficient $p_0+p_1 = P_n$. Completing the square,

$$
p_0(\theta-\mu_0)^{2} + p_1(\theta-\overline x)^{2}
= P_n\left(\theta - \frac{p_0\mu_0+p_1\overline x}{P_n}\right)^{2} + \frac{p_0p_1}{P_n}(\mu_0-\overline x)^{2} ,
$$

which is checked by expanding both sides: the $\theta^{2}$ coefficients are $P_n$, the $\theta$ coefficients are $-2(p_0\mu_0+p_1\overline x)$, and the constants agree because $p_0\mu_0^{2}+p_1\overline x^{2} - (p_0\mu_0+p_1\overline x)^{2}/P_n = p_0p_1(\mu_0-\overline x)^{2}/P_n$. The second term is free of $\theta$, so

$$
\pi(\theta\mid x) \;\propto\; \exp\left[-\frac{P_n}{2}(\theta-\mu_n)^{2}\right] ,
\qquad \mu_n = \frac{p_0\mu_0+p_1\overline x}{P_n} ,
$$

which is the kernel of $N(\mu_n, 1/P_n)$; normalisation supplies the constant. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Conditional independence**, in sequential updating. If the two batches are dependent given $a$ - the same systematic affecting both runs, say - the likelihood does not factorise and feeding the first posterior in as a prior double-counts the shared information, producing a posterior that is too narrow.

**A proper posterior.** The prior may be improper (a constant on an unbounded range is not a probability density) provided the *posterior* is normalisable, and that has to be checked. For Riley, Hobson and Bence's exponential model, $L(x;\tau) = \tau^{-N}\exp(-s/\tau)$ with $s = \sum_i x_i$, a flat prior on $\tau \in (0,\infty)$ gives

$$
\int_0^\infty \tau^{-N}e^{-s/\tau}\,d\tau = s^{1-N}\,\Gamma(N-1) ,
$$

by the substitution $u = s/\tau$, which is finite only for $N \ge 2$. With a single observation the posterior does not exist, and any "estimate" read off it is an artefact of truncating the range.

**A flat prior is not a neutral prior.** Flatness is not preserved by reparametrisation: if $\pi(\theta)$ is constant and $\phi = 1/\theta$, then $\pi(\phi) = \pi(\theta)|d\theta/d\phi| \propto \phi^{-2}$, which is far from flat. A uniform prior on a decay time is an informative, decreasing prior on the decay rate. "No prior information" is therefore not a well-defined state, and a paper that uses a flat prior must say flat *in what variable*.

**The model is a hypothesis too.** Everything above is conditional on $H$. The posterior describes the best parameter values *within* the assumed family and says nothing about whether the family is right; a badly wrong model yields a sharp, confident and useless posterior. Model checking is a separate step, for which the goodness-of-fit test of :ref[]{to=stats.hypothesis-testing} is the frequentist tool and the evidence $P(x\mid H)$, compared between models, the Bayesian one.

**Prior sensitivity.** The normal-normal result quantifies how fast the prior stops mattering: its weight is $\tau^{-2}$ against the data's $n/\sigma^{2}$, so it is negligible once $n \gg \sigma^{2}/\tau^{2}$. For a parameter the data barely constrain - a nuisance direction in a many-parameter fit - that never happens, and the posterior in that direction is whatever the prior was. Reporting results under two or three different priors is the standard check.
:::

:::remark[Credible intervals against confidence intervals]{provenance=adapted src="rhb-2006:§31.5.5, the comparison of the two kinds of interval, pp. 1266-1268, with the worked exponential example on pp. 1263-1264 and 1267"}
The two constructions produce similar numbers and assert different things.

- A **confidence interval** at level $1-\alpha$ is a random interval; the level is the long-run fraction of repeated samples of the same size whose interval would contain the fixed true value.
- A **credible interval** at level $1-\alpha$ is a fixed interval computed from the one sample obtained; the level is the posterior probability that the parameter lies in it.

Riley, Hobson and Bence make the contrast on a single data set: for ten observed intervals between telephone calls, modelled as exponential with mean $\tau$, the maximum-likelihood estimate is $\hat\tau = 3.77$ and the curvature error is $\hat\tau/\sqrt{N} = 1.19$, while the classical $68\%$ central interval computed from the exact sampling distribution of $\hat\tau$ is $[2.86, 5.46]$ and the Bayesian $68\%$ central interval computed from the normalised likelihood is $[3.16, 6.20]$. Neither matches the symmetric $3.77 \pm 1.19$, because the relevant distributions are skewed, and the two intervals do not match each other. They record that a frequentist regards the Bayesian interval as an approximation to the classical one, and a Bayesian regards it as the more meaningful of the two.

The disagreement shrinks with sample size. As the data come to dominate the prior, the posterior approaches a normal centred at the maximum-likelihood estimate with variance given by the inverse curvature of $\ln L$ - whose expectation is the inverse Fisher information - and that is also the large-sample sampling distribution of the estimator established in :ref[]{to=stats.maximum-likelihood}. The two intervals then coincide numerically while continuing to mean different things, which is why in large-sample work the choice of school is often a matter of vocabulary. In small samples, in problems with physical boundaries (a mass near zero, an efficiency near one) and in problems with many nuisance parameters, the two can differ a great deal.
:::

:::method[A Bayesian analysis]{provenance=original}
1. **Write the model.** Specify $P(x\mid a, H)$ completely; as a function of $a$ at the observed $x$ this is the likelihood.
2. **Choose the prior.** Impose hard physical constraints first (positivity, normalisation, a range). Say in which variable any flat prior is flat. If a conjugate family exists and can represent what is actually known, use it; the update is then arithmetic.
3. **Multiply and normalise.** Form $L(x;a)\pi(a)$, recognise it if possible, otherwise normalise numerically. In more than two or three parameters, sample the posterior with Markov chain Monte Carlo rather than evaluating it on a grid.
4. **Summarise.** Quote the posterior mean or mode as the estimate, the posterior standard deviation as the error bar, and a credible interval at a stated level - central or highest-density, and say which. For several parameters, integrate out the ones not being reported; marginalising is the Bayesian treatment of nuisance parameters.
5. **Check.** Repeat with a different prior to show the conclusion is driven by the data, and test the model itself separately.
:::

:::example[A detector efficiency, and a repeated calibration]{provenance=original}
**Part 1: beta-binomial.** A new photon counter is tested with ten identical single-photon pulses and registers seven of them. Its efficiency $\theta$ is to be estimated. Previous counters of this design have had efficiencies scattered broadly around one half, which we encode as a $\mathrm{Beta}(2,2)$ prior: a smooth bump on $(0,1)$ with mean $1/2$, carrying as much weight as two imagined successes and two imagined failures.

By the conjugacy statement with $\alpha_0 = \beta_0 = 2$, $n = 10$ and $k = 7$, the posterior is

$$
\mathrm{Beta}(2+7,\; 2+3) = \mathrm{Beta}(9,5) .
$$

Its summaries follow from the beta formulas in :ref[]{to=prob.random-variables}:

$$
\text{mean} = \frac{9}{14} = 0.6429 ,
\qquad
\text{mode} = \frac{9-1}{9+5-2} = \frac{8}{12} = 0.6667 ,
$$

$$
\text{s.d.} = \sqrt{\frac{9\cdot 5}{14^{2}\cdot 15}} = \sqrt{\frac{45}{2940}} = 0.1237 .
$$

The maximum-likelihood estimate is $k/n = 0.700$; the posterior mean is pulled towards the prior mean $0.5$, by the weight $w = 4/14 = 0.286$ of the statement: $0.286\times 0.5 + 0.714\times 0.7 = 0.643$, as computed. The $95\%$ central credible interval, from the quantiles of $\mathrm{Beta}(9,5)$, is

$$
[\,0.3857,\; 0.8614\,] ,
$$

and the posterior probability that the counter beats fifty per cent efficiency is

$$
\Pr(\theta > \tfrac12 \mid k=7) = \frac{7099}{8192} = 0.8666 ,
$$

a statement of exactly the kind a confidence interval is not allowed to make. Ten pulses are few: the interval is half the unit interval wide. Had the prior been flat, $\mathrm{Beta}(1,1)$, the posterior would be $\mathrm{Beta}(8,4)$ with mean $2/3 = 0.6667$ and interval $[0.3903,\; 0.8907]$ - a visible but not decisive shift, which is the honest report of how much the prior is doing here.

**Part 2: normal-normal.** A spectral line position is known from an earlier experiment to be $\theta = 5.00 \pm 0.20$ (arbitrary units), which we take as the prior $N(5.00, 0.20^{2})$. Nine new readings of known instrumental standard deviation $\sigma = 0.30$ have mean $\overline x = 5.30$. The precisions are

$$
p_0 = \frac{1}{0.20^{2}} = 25 ,
\qquad
p_1 = \frac{9}{0.30^{2}} = 100 ,
\qquad
P_9 = 125 ,
$$

so the posterior standard deviation is $1/\sqrt{125} = 0.0894$ and the posterior mean is

$$
\mu_9 = \frac{25(5.00) + 100(5.30)}{125} = \frac{655}{125} = 5.240 .
$$

The $95\%$ central credible interval is $5.240 \pm 1.95996 \times 0.0894 = [\,5.065,\; 5.415\,]$. For comparison, the frequentist $95\%$ confidence interval from the new data alone is $5.300 \pm 1.95996 \times 0.30/3 = [\,5.104,\; 5.496\,]$. The Bayesian interval is shifted towards the earlier measurement and is narrower, $0.351$ against $0.392$, because it uses both experiments; the whole of that difference is the information in the prior, and nothing else. Note also that by sequential updating the same answer would have come from analysing the two experiments jointly in either order.
:::

:::application[Where posteriors are the working object]{provenance=original}
**Cosmology and astrophysics.** Parameters of a cosmological model are quoted as posterior means with credible intervals, obtained by sampling a posterior over a dozen or more parameters; positivity and physical ranges enter as priors, and nuisance parameters for instrumental systematics are marginalised away rather than fitted and forgotten. Comparing the evidence $P(x\mid H)$ between models is how an extra parameter is judged to be warranted.

**Sequential estimation and filtering.** The Kalman filter of :ref[]{to=stats.kalman-filter} is the normal-normal update of this unit run once per observation, with a forecast step in between; "precisions add" is its measurement update. Operational weather forecasting does the same on a state space of $10^{8}$ variables, where the posterior is represented by an ensemble - see :ref[]{to=stats.data-assimilation}.

**Computation.** Beyond two or three parameters the posterior cannot be tabulated, and the integrals wanted from it are posterior expectations. Grimmett and Stirzaker introduce Markov chain Monte Carlo with exactly this example: build a chain whose stationary distribution is the posterior and average along its path. The convergence theory is that of :ref[]{to=prob.markov-chain-convergence}, and the sampling machinery that of :ref[]{to=num.monte-carlo}.

**Few counts and hard boundaries.** When an experiment records three events where two were expected, or measures a quantity known to be non-negative and obtains a negative point estimate, frequentist intervals become awkward and can even be empty. A prior supported on the physical range removes the difficulty by construction, which is why upper limits on masses, rates and cross-sections are so often reported as credible rather than confidence limits - with the prior stated, since the answer depends on it.
:::
