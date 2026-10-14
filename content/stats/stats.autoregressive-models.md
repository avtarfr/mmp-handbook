---
id: stats.autoregressive-models
title: Autoregressive models and red noise
kind: method
level: core
summary: Builds the AR(1) process from uncorrelated noise, derives its autocorrelation $\alpha^{|m|}$ and its power spectrum, obtains the Yule-Walker equations that fit an AR($p$) scheme to data, and uses the fitted AR(1) spectrum as the red-noise null against which a spectral peak is tested, with a worked twelve-point series whose apparent cycle survives a white-noise test and fails a red-noise one.
prereqs: [prob.stationary-processes, prob.expectation-variance, found.power-series]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§8.2, p. 410: the definition of a moving-average process $Y_n=\\sum_{i=0}^{r}\\alpha_iX_{n-i}$ and of an autoregressive scheme $Y_n=\\sum_{i=1}^{r}\\alpha_iY_{n-i}+Z_n$ with $\\{Z_n\\}$ uncorrelated of zero mean and constant finite variance, and the remark that such schemes are what a statistician fits to a time series; §9.2, Theorem (9.2.1) with the prediction equations (9.2.3), p. 436, and Example (9.2.5), p. 437: the AR(1) recursion $Y_n=\\alpha Y_{n-1}+Z_n$ with $\\lvert\\alpha\\rvert<1$, its stationarity, its autocovariance $c(m)=\\alpha^{\\lvert m\\rvert}/(1-\\alpha^{2})$ for unit-variance noise, the best linear $k$-step predictor $\\alpha^{k}Y_r$ and the prediction error $(1-\\alpha^{2k})/(1-\\alpha^{2})$; §9.3, Example (9.3.23), p. 444: the autocorrelation $\\rho(n)=\\alpha^{\\lvert n\\rvert}$, the spectral density $f_X(\\lambda)=(1-\\alpha^{2})/\\{2\\pi\\lvert 1-\\alpha e^{i\\lambda}\\rvert^{2}\\}=(1-\\alpha^{2})/\\{2\\pi(1-2\\alpha\\cos\\lambda+\\alpha^{2})\\}$ on $[-\\pi,\\pi]$, and the general AR($r$) scheme with the stationarity criterion $\\lvert\\theta_j\\rvert<1$ on the roots of $A(z)=z^{r}-\\alpha_1z^{r-1}-\\cdots-\\alpha_r$ together with the spectral density $f_Y(\\lambda)=1/\\{2\\pi\\sigma^{2}\\lvert A(e^{-i\\lambda})\\rvert^{2}\\}$, $\\sigma^{2}=\\operatorname{var}(Y_0)$"
    pages: "410, 436-437, 444"
    role: the definition of an autoregressive scheme; the AR(1) recursion with its stationarity condition, autocovariance, best linear predictor and prediction error; the AR(1) spectral density and the general AR($r$) stationarity criterion and spectral density, all of which we restate with the noise variance kept explicit and reprove by our own route
---

:::note[Why a null hypothesis has to be red]{provenance=original}
A geophysical record almost never looks like white noise. Yesterday's temperature anomaly, last month's sea level, last year's sunspot count all carry over into the next value, because the system has inertia: an ocean mixed layer, a reservoir, a population. Persistence alone, with no oscillator anywhere in the system, already produces a spectrum that rises towards low frequency — more power in the slow fluctuations than in the fast ones. Such a spectrum is called **red**, by analogy with light.

That is a nuisance, because it is also what a long-period cycle looks like. A peak in an estimated spectrum is evidence of a cycle only if it stands above what mere persistence would have produced, and to say how much is "above" one needs a quantitative null hypothesis. The AR(1) process supplies it with a single fitted number. This unit builds the process, computes its spectrum exactly, and shows how to fit it and test against it. The example below is a series whose apparent twelve-point cycle is comfortably significant against white noise and not significant at all against red noise; that reversal is the whole point of the method.
:::

:::definition[Autoregressive schemes]{provenance=adapted src="grimmett-stirzaker-2020:§8.2, the definition of an autoregressive scheme, p. 410, and §9.3, Example (9.3.23), p. 444"}
Let $\{Z_n : n \in \mathbb{Z}\}$ be uncorrelated real random variables with $\mathbb{E}(Z_n) = 0$ and $\operatorname{var}(Z_n) = \sigma_Z^{2}$, the same finite value for every $n$. Such a sequence is called **discrete white noise**, or the **innovations**.

A real sequence $\{X_n : n \in \mathbb{Z}\}$ is an **autoregressive scheme of order $p$**, written AR($p$), if

$$
X_n \;=\; \sum_{i=1}^{p}\alpha_i X_{n-i} \;+\; Z_n ,
\qquad n \in \mathbb{Z} ,
$$

for real constants $\alpha_1,\dots,\alpha_p$. The case $p = 1$,

$$
X_n \;=\; \alpha X_{n-1} + Z_n ,
$$

is the one this unit is mostly about. Grimmett and Stirzaker introduce these schemes, alongside moving averages $Y_n = \sum_{i=0}^{r}\alpha_i X_{n-i}$, as the two families a statistician fits to an observed series; they take $\sigma_Z^{2} = 1$ throughout, and we keep $\sigma_Z^{2}$ explicit, which multiplies every covariance below by $\sigma_Z^{2}$ and leaves every correlation and every normalised spectral density unchanged.

Two conventions. Frequency $\lambda$ runs over $(-\pi,\pi]$, one unit of $n$ being one sampling interval, as in :ref[Stationary processes and spectral densities]{to=prob.stationary-processes}; a frequency $\lambda$ corresponds to a period of $2\pi/\lambda$ sampling intervals, and $\lambda = \pi$ is the Nyquist frequency. And beside the normalised spectral density $f$ of that unit, with $\int_{-\pi}^{\pi} f = 1$, we use the unnormalised **power spectrum**

$$
P(\lambda) \;=\; \sum_{m=-\infty}^{\infty} c(m)\,e^{-im\lambda} \;=\; 2\pi c(0)\,f(\lambda) ,
\qquad
\frac{1}{2\pi}\int_{-\pi}^{\pi} P(\lambda)\,d\lambda \;=\; c(0) ,
$$

which is the discrete-time form of the physicists' $S(\omega)$ in the conventions table of that unit. $P$ is what a spectrum estimate is compared against, because it carries the units of variance.
:::

:::statement[The stationary AR(1) process, its correlations and its spectrum]{provenance=adapted src="grimmett-stirzaker-2020:§9.2, Example (9.2.5), p. 437, and §9.3, Example (9.3.23) including the general AR($r$) criterion, p. 444"}
Let $\lvert\alpha\rvert < 1$. Then:

1. **Existence and uniqueness.** The series $X_n = \sum_{k=0}^{\infty}\alpha^{k}Z_{n-k}$ converges in mean square, and the sequence so defined is the unique weakly stationary solution of $X_n = \alpha X_{n-1}+Z_n$.
2. **Moments.** $\mathbb{E}(X_n) = 0$ and
   $$
   c(m) \;=\; \operatorname{cov}(X_n, X_{n+m}) \;=\; \frac{\sigma_Z^{2}\,\alpha^{\lvert m\rvert}}{1-\alpha^{2}} ,
   \qquad
   \rho(m) \;=\; \alpha^{\lvert m\rvert} ,
   \qquad m \in \mathbb{Z} .
   $$
   In particular $c(0) = \sigma_Z^{2}/(1-\alpha^{2})$ and $\alpha = \rho(1)$.
3. **Spectrum.** The spectral density and power spectrum are
   $$
   f(\lambda) \;=\; \frac{1-\alpha^{2}}{2\pi\bigl(1 - 2\alpha\cos\lambda + \alpha^{2}\bigr)} ,
   \qquad
   P(\lambda) \;=\; \frac{\sigma_Z^{2}}{\bigl\lvert 1-\alpha e^{-i\lambda}\bigr\rvert^{2}} \;=\; \frac{\sigma_Z^{2}}{1-2\alpha\cos\lambda+\alpha^{2}} ,
   $$
   for $-\pi \le \lambda \le \pi$. For $0 < \alpha < 1$ the spectrum decreases monotonically from
   $$
   P(0) = \frac{\sigma_Z^{2}}{(1-\alpha)^{2}} = c(0)\,\frac{1+\alpha}{1-\alpha}
   \qquad\text{to}\qquad
   P(\pi) = \frac{\sigma_Z^{2}}{(1+\alpha)^{2}} = c(0)\,\frac{1-\alpha}{1+\alpha} ,
   $$
   a ratio of $\bigl((1+\alpha)/(1-\alpha)\bigr)^{2}$ between the two ends of the band: this is the **red** shape. For $-1<\alpha<0$ the same formula increases monotonically (a *blue* spectrum), and $\alpha = 0$ returns the flat spectrum $P \equiv \sigma_Z^{2}$ of white noise.
4. **Prediction.** The best linear predictor of $X_{r+k}$, $k\ge1$, from $X_r, X_{r-1},\dots,X_{r-s}$ is $\alpha^{k}X_r$, with mean squared error $\sigma_Z^{2}(1-\alpha^{2k})/(1-\alpha^{2})$. Only the most recent value is used, whatever $s$ is.

**General order.** Grimmett and Stirzaker state, for the AR($p$) scheme with unit-variance innovations, that $X$ is stationary if the complex roots $\theta_1,\dots,\theta_p$ of
$$
A(z) \;=\; z^{p} - \alpha_1 z^{p-1} - \cdots - \alpha_p
$$
all satisfy $\lvert\theta_j\rvert < 1$, and that the spectral density is then $f(\lambda) = 1/\bigl(2\pi\sigma^{2}\lvert A(e^{-i\lambda})\rvert^{2}\bigr)$ with $\sigma^{2} = \operatorname{var}(X_0)$. With a general innovation variance this reads
$$
P(\lambda) \;=\; \frac{\sigma_Z^{2}}{\bigl\lvert A(e^{-i\lambda})\bigr\rvert^{2}} \;=\; \frac{\sigma_Z^{2}}{\bigl\lvert 1 - \alpha_1e^{-i\lambda} - \cdots - \alpha_pe^{-ip\lambda}\bigr\rvert^{2}} ,
$$
the two forms of the denominator agreeing because $\lvert e^{-ip\lambda}\rvert = 1$ and because the $\alpha_i$ are real, so that conjugating the bracket leaves its modulus unchanged. Part 3 is the case $p=1$.
:::

:::statement[The Yule-Walker equations]{provenance=original label="Proposition"}
Let $\{X_n\}$ be a weakly stationary AR($p$) scheme with autocovariance function $c$, driven by innovations $\{Z_n\}$ that are uncorrelated with zero mean and variance $\sigma_Z^{2}$, and suppose each $Z_n$ is uncorrelated with every earlier value $X_{n-1}, X_{n-2},\dots$ of the process. Then

$$
c(j) \;=\; \sum_{i=1}^{p}\alpha_i\,c(j-i) , \qquad j = 1, 2, \dots, p ,
\tag{YW}
$$

and

$$
\sigma_Z^{2} \;=\; c(0) - \sum_{i=1}^{p}\alpha_i\,c(i) .
$$

Dividing (YW) by $c(0)$ gives the same system in the correlations, $\rho(j) = \sum_i \alpha_i\rho(j-i)$, which in matrix form is

$$
\begin{pmatrix}
\rho(0) & \rho(1) & \cdots & \rho(p-1)\\
\rho(1) & \rho(0) & \cdots & \rho(p-2)\\
\vdots & & \ddots & \vdots\\
\rho(p-1) & \rho(p-2) & \cdots & \rho(0)
\end{pmatrix}
\begin{pmatrix}\alpha_1\\ \alpha_2\\ \vdots\\ \alpha_p\end{pmatrix}
=
\begin{pmatrix}\rho(1)\\ \rho(2)\\ \vdots\\ \rho(p)\end{pmatrix} .
$$

The matrix is the symmetric Toeplitz matrix of correlations; it is non-singular whenever the first $p$ values of the process are not almost surely linearly dependent. For $p=1$ the system is the single equation $\alpha = \rho(1)$.

These are the **Yule-Walker equations**. The name is standard in the time-series literature but is not used by our source; what Grimmett and Stirzaker give, as their prediction equations (9.2.3), is the system $\sum_{i=0}^{s}a_i c(\lvert i-j\rvert) = c(k+j)$, $0\le j\le s$, satisfied by the coefficients of the best linear predictor of $X_{r+k}$ from $X_r,\dots,X_{r-s}$. Taking $k=1$ and $s=p-1$ there, and relabelling $a_{i-1}$ as $\alpha_i$, reproduces (YW) exactly. So the Yule-Walker system has two readings: it fits an AR($p$) model, and it finds the best one-step linear predictor from $p$ past values. They coincide because an AR($p$) scheme is precisely a process whose one-step prediction error is uncorrelated with the past.
:::

:::idea{provenance=original}
**Why the AR(1) process is a geometric smoothing of the noise.** Substituting the recursion into itself $k$ times gives $X_n = \alpha^{k}X_{n-k} + \sum_{j<k}\alpha^{j}Z_{n-j}$. If $\lvert\alpha\rvert<1$ the memory term $\alpha^{k}X_{n-k}$ dies away, and what is left is a geometrically weighted sum of all past shocks. Every statement about the process is then a geometric series: the variance is $\sigma_Z^{2}\sum\alpha^{2k}$, the lag-$m$ covariance is the same sum shifted, and the spectrum is the squared modulus of the geometric series $\sum\alpha^{k}e^{-ik\lambda} = (1-\alpha e^{-i\lambda})^{-1}$.

**Why the spectrum is red.** That last expression is largest when $\alpha e^{-i\lambda}$ points along the positive real axis, which for $\alpha>0$ happens at $\lambda = 0$, and smallest when it points the other way, at $\lambda=\pi$. Positive $\alpha$ therefore piles power at low frequency. Geometrically, $\lvert 1-\alpha e^{-i\lambda}\rvert$ is the distance from the point $\alpha e^{-i\lambda}$ on a circle of radius $\alpha$ to the point $1$, and that distance is smallest when the circle point is nearest $1$.

**Why the Yule-Walker equations are an orthogonality statement.** The defining feature of an AR($p$) scheme is that the residual $Z_n = X_n - \sum\alpha_iX_{n-i}$ carries no linear information about the past. Multiplying the recursion by a past value $X_{n-j}$ and taking expectations records exactly that: the residual term drops out, and what survives is a linear relation among covariances. This is the projection theorem of :ref[Conditional expectation]{to=prob.conditional-expectation} in coordinates, with "orthogonal" meaning "uncorrelated".

**Why red noise is the right null.** A test needs a null that is sceptical in the right direction. Against white noise, any persistent record shows a spuriously significant low-frequency peak, because the null underestimates the low-frequency power that persistence alone supplies. The AR(1) null absorbs persistence into one parameter, estimated from the same record, and asks whether a peak beats what that persistence would have delivered. It is the cheapest null that is not obviously wrong.
:::

:::proof[The AR(1) process: existence, moments and spectrum]{provenance=adapted src="grimmett-stirzaker-2020:§9.2, Example (9.2.5), p. 437, and §9.3, Example (9.3.23), p. 444"}
Throughout $\lvert\alpha\rvert<1$.

**Step 1: the series converges.** Put $S_K = \sum_{k=0}^{K}\alpha^{k}Z_{n-k}$. For $L > K$, the increments $S_L - S_K$ involve distinct, hence uncorrelated, innovations, so
$$
\mathbb{E}\bigl((S_L-S_K)^{2}\bigr) = \sigma_Z^{2}\sum_{k=K+1}^{L}\alpha^{2k} \;\le\; \sigma_Z^{2}\,\frac{\alpha^{2(K+1)}}{1-\alpha^{2}} \;\xrightarrow[K\to\infty]{}\; 0 ,
$$
using $\lvert\alpha\rvert<1$ to sum the geometric series. So $\{S_K\}$ is Cauchy in mean square and converges to a limit $X_n$ with $\mathbb{E}(X_n)=0$.

**Step 2: it solves the recursion.** Splitting off the $k=0$ term, $S_K = Z_n + \alpha\sum_{k=0}^{K-1}\alpha^{k}Z_{n-1-k}$. Letting $K\to\infty$ in mean square gives $X_n = Z_n + \alpha X_{n-1}$.

**Step 3: the covariances.** For $m \ge 0$, the products $Z_{n-j}Z_{n+m-k}$ have zero expectation unless $n-j = n+m-k$, that is $k = j+m$; the surviving terms contribute $\sigma_Z^{2}$ each. Hence
$$
c(m) = \mathbb{E}(X_nX_{n+m}) = \sum_{j,k\ge0}\alpha^{j+k}\,\mathbb{E}(Z_{n-j}Z_{n+m-k}) = \sigma_Z^{2}\sum_{j\ge0}\alpha^{\,j}\alpha^{\,j+m} = \frac{\sigma_Z^{2}\alpha^{m}}{1-\alpha^{2}} .
$$
This does not depend on $n$, so the process is weakly stationary; and $c(-m)=c(m)$ because the process is real, giving $c(m) = \sigma_Z^{2}\alpha^{\lvert m\rvert}/(1-\alpha^{2})$ and $\rho(m)=\alpha^{\lvert m\rvert}$.

**Step 4: uniqueness.** Let $Y$ be any weakly stationary solution and set $D_n = Y_n - X_n$. Subtracting the two recursions gives $D_n = \alpha D_{n-1}$, hence $D_n = \alpha^{k}D_{n-k}$ for every $k\ge1$. Both $X$ and $Y$ are stationary, so $\mathbb{E}(D_n^{2})$ is a constant $\delta$ independent of $n$, and $\delta = \alpha^{2k}\delta$ for all $k$. Since $\lvert\alpha\rvert<1$, letting $k\to\infty$ forces $\delta = 0$, so $Y_n = X_n$ almost surely.

**Step 5: the spectrum.** Since $\sum_m\lvert\rho(m)\rvert = 1 + 2\sum_{m\ge1}\lvert\alpha\rvert^{m} < \infty$, the proposition on absolutely summable autocorrelations in :ref[Stationary processes and spectral densities]{to=prob.stationary-processes} applies, and $P(\lambda) = \sum_m c(m)e^{-im\lambda}$. Split the sum at $m=0$ and sum two geometric series:
$$
\frac{P(\lambda)}{c(0)} = 1 + \sum_{m\ge1}\alpha^{m}e^{-im\lambda} + \sum_{m\ge1}\alpha^{m}e^{im\lambda}
= 1 + \frac{\alpha e^{-i\lambda}}{1-\alpha e^{-i\lambda}} + \frac{\alpha e^{i\lambda}}{1-\alpha e^{i\lambda}} .
$$
Put the three terms over the common denominator $\lvert 1-\alpha e^{-i\lambda}\rvert^{2} = 1-2\alpha\cos\lambda+\alpha^{2}$. The two numerators from the fractions are $\alpha e^{-i\lambda}(1-\alpha e^{i\lambda}) + \alpha e^{i\lambda}(1-\alpha e^{-i\lambda}) = 2\alpha\cos\lambda - 2\alpha^{2}$, so
$$
\frac{P(\lambda)}{c(0)} = \frac{\bigl(1-2\alpha\cos\lambda+\alpha^{2}\bigr) + \bigl(2\alpha\cos\lambda-2\alpha^{2}\bigr)}{1-2\alpha\cos\lambda+\alpha^{2}} = \frac{1-\alpha^{2}}{1-2\alpha\cos\lambda+\alpha^{2}} .
$$
Multiplying by $c(0) = \sigma_Z^{2}/(1-\alpha^{2})$ gives $P(\lambda) = \sigma_Z^{2}/(1-2\alpha\cos\lambda+\alpha^{2})$, and dividing $P$ by $2\pi c(0)$ gives $f$. Monotonicity in $\lambda$ on $[0,\pi]$ is immediate, since $\cos\lambda$ decreases there and the denominator is $1+\alpha^{2}-2\alpha\cos\lambda$.

**Step 6: prediction.** By Grimmett and Stirzaker's Theorem (9.2.1) the coefficients $a_0,\dots,a_s$ of the best linear predictor of $X_{r+k}$ satisfy $\sum_{i}a_ic(\lvert i-j\rvert) = c(k+j)$ for $0\le j\le s$. Try $a_0 = \alpha^{k}$ and $a_i = 0$ otherwise: the left side becomes $\alpha^{k}c(j) = \sigma_Z^{2}\alpha^{k+j}/(1-\alpha^{2})$, which is $c(k+j)$ because $k+j\ge0$. So the trial solves the system and $\widehat X_{r+k} = \alpha^{k}X_r$. Its error is
$$
\operatorname{var}(X_{r+k} - \alpha^{k}X_r) = c(0) - 2\alpha^{k}c(k) + \alpha^{2k}c(0) = \frac{\sigma_Z^{2}}{1-\alpha^{2}}\bigl(1 - 2\alpha^{2k} + \alpha^{2k}\bigr) = \frac{\sigma_Z^{2}\bigl(1-\alpha^{2k}\bigr)}{1-\alpha^{2}} . \qquad\square
$$
:::

:::proof[The Yule-Walker equations]{provenance=original}
Assume the hypotheses of the proposition, so $\mathbb{E}(X_n) = 0$ and $c(j) = \mathbb{E}(X_nX_{n+j})$.

**Step 1: multiply by a past value.** Fix $j$ with $1\le j\le p$. Multiply $X_n = \sum_{i=1}^{p}\alpha_iX_{n-i} + Z_n$ by $X_{n-j}$ and take expectations:
$$
\mathbb{E}(X_nX_{n-j}) = \sum_{i=1}^{p}\alpha_i\,\mathbb{E}(X_{n-i}X_{n-j}) + \mathbb{E}(Z_nX_{n-j}) .
$$

**Step 2: kill the noise term.** Here the hypothesis that $Z_n$ is uncorrelated with $X_{n-1},X_{n-2},\dots$ is used: since $j\ge1$ and both factors have zero mean, $\mathbb{E}(Z_nX_{n-j}) = 0$.

**Step 3: read off the covariances.** By stationarity $\mathbb{E}(X_nX_{n-j}) = c(-j) = c(j)$ and $\mathbb{E}(X_{n-i}X_{n-j}) = c(j-i)$, which gives (YW).

**Step 4: the variance equation.** Now take $j=0$, that is multiply by $X_n$ itself:
$$
c(0) = \sum_{i=1}^{p}\alpha_i c(i) + \mathbb{E}(Z_nX_n) .
$$
Substituting the recursion once more inside the last expectation,
$$
\mathbb{E}(Z_nX_n) = \sum_{i=1}^{p}\alpha_i\,\mathbb{E}(Z_nX_{n-i}) + \mathbb{E}(Z_n^{2}) = 0 + \sigma_Z^{2} ,
$$
again by step 2 and by $\operatorname{var}(Z_n)=\sigma_Z^{2}$. Rearranging gives the stated expression for $\sigma_Z^{2}$. $\square$

For $p=1$ the two equations are $c(1) = \alpha c(0)$ and $\sigma_Z^{2} = c(0)-\alpha c(1) = c(0)(1-\alpha^{2})$, consistent with part 2 of the statement above.
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**$\lvert\alpha\rvert<1$** is used in step 1 (convergence), step 4 (uniqueness) and step 5 (summing the series) of the first proof, and it cannot be dropped.

- At $\alpha = 1$ the recursion is a random walk (:ref[Random walks]{to=prob.random-walks}). It has no stationary solution: starting from $X_0 = 0$, $\operatorname{var}(X_n) = n\sigma_Z^{2}$ grows without bound. Formally the spectrum $\sigma_Z^{2}/(2-2\cos\lambda) \sim \sigma_Z^{2}/\lambda^{2}$ diverges at the origin and is not integrable, which is the frequency-domain image of the infinite variance. A red-noise test is therefore meaningless on an undifferenced random walk, and a fitted $\hat\alpha$ very close to $1$ is a warning that one is looking at a trend rather than at a stationary process.
- At $\lvert\alpha\rvert>1$ the backwards series diverges, but there is still a stationary solution, the *non-causal* one $X_n = -\sum_{k\ge1}\alpha^{-k}Z_{n+k}$ built from future innovations; substituting it into the recursion verifies it directly. Its autocorrelation is $\alpha^{-\lvert m\rvert}$, the same as that of an AR(1) with parameter $1/\alpha$. So correlations alone cannot distinguish $\alpha$ from $1/\alpha$, and the condition $\lvert\alpha\rvert<1$ is what picks the one solution that depends only on the past. This paragraph is our own observation, not something our source states.

**Uncorrelated innovations with constant variance** are used in step 3 of the first proof (only matching indices survive) and in step 2 of the second (the noise term vanishes). If the innovations are themselves correlated, (YW) acquires extra terms and fitting an AR($p$) by Yule-Walker returns biased coefficients; the usual symptom is that the residuals of the fit are not white, which is why a residual autocorrelation check belongs in the recipe below.

**$Z_n$ uncorrelated with the *past* of $X$, not with all of it.** This is automatic for the causal solution of step 1, since $X_{n-j}$ is built from $Z_{n-j},Z_{n-j-1},\dots$. It is false for the non-causal solution above, and that is exactly why Yule-Walker estimation always returns a causal model.

**Uncorrelated is weaker than independent.** Nothing above uses independence or normality, so the autocovariance and spectrum hold for any white-noise innovations. The red-noise *test* below is a different matter: its distributional statement needs the process to be Gaussian, and the chi-squared law for a periodogram ordinate is in any case only asymptotic in the record length.

**Conventions to check before comparing numbers.** Three are easy to get wrong. Some authors write the AR(1) recursion with a minus sign, $X_n + \phi X_{n-1} = Z_n$, which flips the sign of the correlation. Some define the spectrum over $[0,\pi]$ only, doubling it. And the "lag-1 autocorrelation" quoted with a record is sometimes computed dividing by $N$ and sometimes by $N-m$; the two differ by a factor $1-m/N$, which matters at the long lags and is why the $N$ divisor, used below, is preferred — it is the one that always yields a non-negative definite estimated covariance sequence.
:::

:::method[Fitting an AR(1) null and testing a spectral peak against it]{provenance=original}
Given a record $x_1,\dots,x_N$ sampled at equal intervals:

1. **Remove the mean, and any trend you do not want tested.** Put $\bar x = N^{-1}\sum_n x_n$ and $d_n = x_n - \bar x$. A linear trend left in the record inflates the lowest frequencies and will inflate $\hat\alpha$ with them; if a trend is physically expected, fit and subtract it first, and say so.
2. **Estimate the autocovariances** at lags $0$ and $1$:
   $$
   \hat c_0 = \frac1N\sum_{n=1}^{N}d_n^{2} ,
   \qquad
   \hat c_1 = \frac1N\sum_{n=1}^{N-1}d_nd_{n+1} .
   $$
3. **Solve Yule-Walker.** For $p=1$ this is just $\hat\alpha = \hat c_1/\hat c_0$, and the innovation variance is $\hat\sigma_Z^{2} = \hat c_0\bigl(1-\hat\alpha^{2}\bigr)$. For order $p$, solve the Toeplitz system of the proposition, for example by the Levinson-Durbin recursion.
4. **Check the fit.** Require $\lvert\hat\alpha\rvert<1$ (for order $p$, that the roots of $A$ lie inside the unit circle). Compare $\hat\rho(2)$ with $\hat\alpha^{2}$: a serious mismatch means AR(1) is the wrong null and a higher order, or a different model, is needed.
5. **Form the null spectrum.**
   $$
   P_{\text{null}}(\lambda) \;=\; \frac{\hat\sigma_Z^{2}}{1 - 2\hat\alpha\cos\lambda + \hat\alpha^{2}} ,
   \qquad \lambda \in [0,\pi] .
   $$
6. **Compute the spectral estimate on the same scale.** At the Fourier frequencies $\lambda_j = 2\pi j/N$ use the periodogram
   $$
   I(\lambda_j) \;=\; \frac1N\Bigl\lvert\sum_{n=1}^{N}d_n e^{-i\lambda_j n}\Bigr\rvert^{2} ,
   $$
   whose properties, and whose smoothed and windowed variants, are the subject of :ref[The periodogram and spectral estimation]{to=stats.periodogram}. The normalisation is fixed by Parseval: $N^{-1}\sum_{j=0}^{N-1}I(\lambda_j) = \hat c_0$, the same total variance that $\frac{1}{2\pi}\int P$ carries.
7. **Set the threshold.** For a Gaussian stationary process, and $\lambda_j$ neither $0$ nor $\pi$, the ratio $2I(\lambda_j)/P(\lambda_j)$ is approximately $\chi^{2}$ with two degrees of freedom. A one-sided test at level $q$ therefore rejects the null when
   $$
   I(\lambda_j) \;>\; \tfrac12\,\chi^{2}_{2,\,q}\;P_{\text{null}}(\lambda_j) ,
   \qquad
   \tfrac12\chi^{2}_{2,\,0.95} = 2.995732 ,
   \quad
   \tfrac12\chi^{2}_{2,\,0.99} = 4.605170 .
   $$
   (If the estimate is a smoothed or Welch-averaged one with $\nu$ effective degrees of freedom, replace this factor by $\chi^{2}_{\nu,q}/\nu$; see :ref[Hypothesis testing]{to=stats.hypothesis-testing} for the vocabulary.)
8. **Allow for multiple testing.** You are usually scanning all $\lfloor N/2\rfloor$ frequencies at once, so at the nominal $5\%$ level about one ordinate in twenty will exceed the threshold under the null. Either nominate the frequency of interest in advance, or apply a correction: the probability that *no* ordinate among $M$ roughly independent ones exceeds the level-$q$ threshold is about $q^{M}$, so testing at $q = 0.95^{1/M}$ controls the chance of any false peak at $5\%$.
9. **Quote the effective sample size.** For other statistics computed from the same record, persistence costs degrees of freedom. Since $\sum_{m}\rho(m) = (1+\alpha)/(1-\alpha)$ for AR(1), the variance of the sample mean is approximately $\hat c_0(1+\hat\alpha)/\{N(1-\hat\alpha)\}$, so the record is worth
   $$
   N_{\text{eff}} \;=\; N\,\frac{1-\hat\alpha}{1+\hat\alpha}
   $$
   independent observations. Report it: it is usually smaller than people expect.
:::

:::example[A twelve-point record: significant against white noise, not against red]{provenance=original}
A twelve-year index, one value per year, reads

$$
x = (11,\,10,\,13,\,13,\,13,\,10,\,7,\,8,\,6,\,9,\,9,\,11) .
$$

The eye sees a cycle: high for the first five years, low for the next four, recovering at the end — one oscillation in twelve years. Is it real?

**Step 1: mean and deviations.** The twelve values sum to $120$, so $\bar x = 10$ exactly and
$$
d = (1,\,0,\,3,\,3,\,3,\,0,\,-3,\,-2,\,-4,\,-1,\,-1,\,1) ,
\qquad \sum_n d_n = 0 .
$$

**Step 2: autocovariances.** Summing squares, $\sum d_n^{2} = 1+0+9+9+9+0+9+4+16+1+1+1 = 60$, and summing the eleven lagged products,
$$
\sum_{n=1}^{11} d_nd_{n+1} = 0+0+9+9+0+0+6+8+4+1-1 = 36 .
$$
Hence $\hat c_0 = 60/12 = 5$ and $\hat c_1 = 36/12 = 3$.

**Step 3: the fitted AR(1).**
$$
\hat\alpha = \frac{\hat c_1}{\hat c_0} = \frac{3}{5} = 0.6 ,
\qquad
\hat\sigma_Z^{2} = \hat c_0\bigl(1-\hat\alpha^{2}\bigr) = 5\times 0.64 = 3.2 .
$$
A check on the order: an AR(1) predicts $\rho(2) = \alpha^{2} = 0.36$, while the lag-2 sample correlation is $\hat c_2/\hat c_0$ with $\sum_{n=1}^{10}d_nd_{n+2} = 3+0+9+0-9+0+12+2+4-1 = 20$, giving $\hat c_2 = 20/12 = 5/3$ and $\hat\rho(2) = (5/3)/5 = 1/3 = 0.3333$. That is within a few hundredths of $0.36$, so AR(1) is an acceptable null.

**Step 4: the null spectrum.** With $\hat\alpha = 0.6$,
$$
P_{\text{null}}(\lambda) = \frac{3.2}{1.36 - 1.2\cos\lambda} ,
\qquad
P_{\text{null}}(0) = \frac{3.2}{0.16} = 20 ,
\qquad
P_{\text{null}}(\pi) = \frac{3.2}{2.56} = 1.25 .
$$
The spectrum is red by a factor $16 = (1.6/0.4)^{2}$ across the band, as part 3 of the statement predicts.

**Step 5: the periodogram at the frequency of interest.** The suspected cycle has period $12$, which is $j=1$, $\lambda_1 = \pi/6$. Computing the two sums,
$$
\sum_{n=1}^{12} d_n\cos(n\pi/6) = 0 ,
\qquad
\sum_{n=1}^{12} d_n\sin(n\pi/6) = 11 + 3\sqrt3 ,
$$
the first vanishing by an exact cancellation. Hence
$$
I(\lambda_1) = \frac{\bigl(11+3\sqrt3\bigr)^{2}}{12} = \frac{37}{3} + \frac{11\sqrt3}{2} = 21.859613 .
$$
As an arithmetic check, the twelve periodogram ordinates average to $\hat c_0$: $N^{-1}\sum_j I(\lambda_j) = 5$, which they do.

**Step 6: the two tests.**

*Against white noise.* The white null has $P_{\text{white}}\equiv\hat c_0 = 5$ at every frequency, so the $95\%$ threshold is $2.995732\times 5 = 14.978661$. Since $21.859613 > 14.978661$, the peak is significant at $5\%$: on a white-noise null one would announce a twelve-year cycle.

*Against red noise.* Here
$$
P_{\text{null}}(\pi/6) = \frac{3.2}{1.36 - 0.6\sqrt3} = 9.976010 ,
$$
so the $95\%$ threshold is $2.995732\times 9.976010 = 29.885456$. Now $21.859613 < 29.885456$: **the peak is not significant.** Its ratio to the null is $21.859613/9.976010 = 2.191$, which under the null would be exceeded with probability $e^{-2.191} = 0.112$ — about one chance in nine, before any correction for having scanned the five interior frequencies of a twelve-point record.

**Step 7: the effective sample size.** Finally,
$$
N_{\text{eff}} = N\,\frac{1-\hat\alpha}{1+\hat\alpha} = 12\times\frac{0.4}{1.6} = 3 .
$$
Twelve years of this index carry the information of three independent observations. That single number explains the whole result: one is not going to establish a cycle from three effective points, and the red-noise test is the formal statement of that intuition.
:::

:::application[Where red-noise tests are used]{provenance=original}
**Climate variability.** Almost every climate index — the North Atlantic Oscillation, the Southern Oscillation Index, a basin-mean sea surface temperature, a borehole temperature profile — is first characterised by its lag-1 autocorrelation and its AR(1) spectrum, and claims of periodicity in them are tested against that spectrum rather than against white noise. The physical justification is Hasselmann's model of climate variability: a slow component (the ocean mixed layer) integrates fast weather forcing, and the resulting first-order stochastic equation is exactly the continuous-time limit of AR(1), the Ornstein-Uhlenbeck process of :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations}, whose spectrum is the Lorentzian that the discrete formula above approximates for $\lambda\ll1$. So the null is not an arbitrary convenience: it is the spectrum of a system with one reservoir and no oscillator, which is the simplest hypothesis a claimed climate cycle has to beat.

**Degrees of freedom in correlation and trend tests.** The step-9 figure $N_{\text{eff}} = N(1-\alpha)/(1+\alpha)$ is used far more often than the spectral test. A correlation between two autocorrelated records, or the significance of a fitted trend, must be assessed with $N_{\text{eff}}$ in place of $N$; using $N$ is the commonest way to manufacture a significant result from two unrelated red series. For $\alpha = 0.9$ the factor is $1/19$, so a century of monthly data can be worth only a handful of independent numbers.

**Instrument and detector noise.** Amplifier drift, detector dark current and laser frequency noise all show spectra rising at low frequency, and an AR(1) fit gives a quick corner frequency: the spectrum of the fitted process falls to half its zero-frequency value at
$$
\cos\lambda_{1/2} \;=\; \frac{1+\alpha^{2}-2(1-\alpha)^{2}}{2\alpha} ,
$$
which for $\alpha$ near $1$ gives $\lambda_{1/2}\approx 1-\alpha$ (at $\alpha = 0.9$ the exact value is $0.105430$ against the estimate $0.1$), an inverse correlation time in units of the sampling interval. Deciding how long to integrate before a reference measurement is, in effect, choosing a sampling rate against that corner.

**Prefiltering and prewhitening.** Part 4 of the statement says the best one-step linear predictor of an AR(1) is $\alpha X_{n-1}$, so the residual series $x_n - \hat\alpha x_{n-1}$ is an estimate of the innovations and should be white. "Prewhitening" a record this way before a spectral analysis makes the null flat and the test easier to read, at the cost of also flattening any genuine low-frequency signal; the transfer function $1-\hat\alpha e^{-i\lambda}$ that does it is a high-pass filter in the sense of :ref[Linear filters]{to=stats.linear-filters}. Whether to prewhiten, or to test against a red null without filtering, is a question of which distortion you prefer; the two are algebraically the same test when the null is correct.

**Model selection in econometrics and geophysics.** The Yule-Walker equations are the entry point to the whole ARMA apparatus: fit increasing $p$, watch the estimated innovation variance $\hat\sigma_Z^{2}$ stop falling, and penalise the extra parameters with an information criterion. For many physical records $p=1$ is enough, which is why the AR(1) null is the default and not merely the first case.
:::
