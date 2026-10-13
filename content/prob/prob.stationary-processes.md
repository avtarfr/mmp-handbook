---
id: prob.stationary-processes
title: Stationary processes and spectral densities
kind: theorem
level: advanced
summary: Defines strong and weak stationarity and the autocovariance function, proves that an autocorrelation function is non-negative definite and therefore, when continuous at the origin, is the characteristic function of a distribution on the frequency axis, and identifies that distribution's density as the spectral density of the process.
prereqs: [prob.expectation-variance, prob.characteristic-functions, fourier.fourier-series, fourier.fourier-transform, fourier.fourier-inversion]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§8.2 Stationary processes, pp. 407-409: Definition (8.2.1) of strong stationarity, Definition (8.2.2) of weak stationarity with the autocovariance (8.2.3), the remark that neither notion contains the other, Example (8.2.4) (a Markov chain started in its stationary distribution is strongly stationary) and Example (8.2.5) (a random sinusoid that is weakly but not strongly stationary); §9.1, Definitions (9.1.1)-(9.1.3), pp. 433-434, the covariance, variance and orthogonality of complex-valued random variables; §9.3 Autocovariances and spectra, pp. 438-444: the autocovariance of a complex-valued stationary process and the constancy (9.3.1) of its variance, Theorem (9.3.2) that $c(-t)=\\overline{c(t)}$ and that $c$ is non-negative definite, with its proof, Definition (9.3.3) of the autocorrelation function, the spectral theorem for autocorrelation functions (9.3.4) with its proof by uniform continuity and Bochner's theorem, the reading (9.3.6)-(9.3.8) of the representation as a mixture of oscillations, Definition (9.3.9) of the spectral distribution and density functions, Definition (9.3.10) of the spectrum, the discrete-time representations (9.3.11)-(9.3.14), Theorem (9.3.15) with the inversion formulae (9.3.16)-(9.3.17) and the sufficient condition (9.3.18), and Examples (9.3.19), (9.3.20), (9.3.21) and (9.3.23); §5.7, Theorem (5.7.3) and the statement of Bochner's theorem, p. 204; §9.6, Theorem (9.6.1), p. 464, the converse construction of a stationary process from a non-negative definite $c$"
    pages: "204, 407-409, 433-434, 438-444, 464"
    role: "every definition and every theorem stated and proved here, in the generality of complex-valued processes - the two notions of stationarity and their relation; the properties of the autocovariance; the spectral theorem for autocorrelation functions and its proof route through uniform continuity and Bochner's theorem; the spectral distribution function, the spectral density and the spectrum; the discrete-time representation on $(-\\pi,\\pi]$ and the inversion formula as the book states it; the characterisation of autocovariance functions"
  - work: rhb-2006
    loc: "§13.1.8 Correlation functions and energy spectra, pp. 449-451: the cross-correlation (13.40), the relation (13.41), the Wiener-Kinchin theorem (13.42) with its proof by substitution in the double integral, the auto-correlation (13.43), the identification of $\\sqrt{2\\pi}\\lvert\\hat f(k)\\rvert^2$ as the energy spectrum of $f$, and the deduction of the multiplication theorem (13.45) and Parseval's theorem (13.46)"
    pages: "449-451"
    role: the deterministic theorem of the same name, for the Fourier transform of the cross-correlation of two square-integrable functions, recorded here so that the two results carrying the name Wiener-Kinchin are not confused; the energy-spectrum language used in the application
---

:::note[What a spectral density is for]{provenance=original}
A stationary process has no preferred instant: the statistics you measure do not depend on when you start the clock. That single invariance has a surprisingly rigid consequence. The correlation between the process now and the process a lag $t$ later is a function $c(t)$ of the lag alone, and $c$ cannot be an arbitrary function: it must be the Fourier transform of a positive measure.

That measure is the **spectral distribution** of the process, and where it has a density, that density is the **spectral density**. It answers the question an experimentalist actually asks of a noisy signal — how much of the variance sits at each frequency — and it is the object a spectrum analyser estimates. The theorem below, usually named after Wiener and Khinchin, is the statement that the question always has an answer and that the answer is determined by the autocorrelation function alone.

Three warnings before we start. First, there is a second, purely deterministic theorem of the same name, about the Fourier transform of the correlation of two square-integrable functions; it is stated in the remark below so that the two are not confused. Second, several incompatible normalisations of the spectral density are in use; the conversion table is also in the remark. Third, the second name is a transliteration from Russian and is spelt differently by our two sources — Khinchin by Grimmett and Stirzaker, Kinchin by Riley, Hobson and Bence, Khintchine elsewhere again. We write it as the source we are reporting writes it, so both spellings appear below; they are the same man and, where the theorems differ, the difference is in the theorems and not in the name.
:::

:::definition[Stationarity]{provenance=adapted src="grimmett-stirzaker-2020:§8.2, Definitions (8.2.1) and (8.2.2) with (8.2.3) and the discussion after them, pp. 407-408, with Example (8.2.5), p. 408, and §9.1, Definitions (9.1.1)-(9.1.3), p. 434"}
Let $X = \{X(t)\}$ be a random process, with $t$ ranging over $[0,\infty)$, over $\mathbb{R}$, or over the integers.

$X$ is **strongly stationary** if, for every $n$, all times $t_1, \dots, t_n$ and every $h > 0$, the families
$$
\bigl(X(t_1), \dots, X(t_n)\bigr) \qquad\text{and}\qquad \bigl(X(t_1+h), \dots, X(t_n+h)\bigr)
$$
have the same joint distribution. In particular $X(t)$ then has the same distribution for every $t$.

$X$ is **weakly stationary** — the alternative names are *second-order stationary* and *covariance stationary* — when, for every $t_1$, every $t_2$ and every $h > 0$,
$$
\mathbb{E}\bigl(X(t_1)\bigr) = \mathbb{E}\bigl(X(t_2)\bigr)
\qquad\text{and}\qquad
\operatorname{cov}\bigl(X(t_1), X(t_2)\bigr) = \operatorname{cov}\bigl(X(t_1+h), X(t_2+h)\bigr) .
$$
Equivalently, the mean is constant and the autocovariance $c(t, t+h) = \operatorname{cov}(X(t), X(t+h))$ depends only on $h$.

Neither notion contains the other. A strongly stationary process without a finite second moment need not be weakly stationary, and Grimmett and Stirzaker's Example (8.2.5) — $X_n = A\cos(\lambda n) + B\sin(\lambda n)$, where $\lambda \in [0,\pi]$ is fixed and $A$, $B$ are uncorrelated with mean $0$ and variance $1$ — is weakly stationary but, without further conditions on the joint law of $A$ and $B$, not strongly so. Following them, we read "stationary", unqualified, as "weakly stationary" from here on, because weak stationarity is both the easier hypothesis to verify and the one the spectral theory needs.

We allow $X$ to take values in $\mathbb{C}$, which costs nothing and is the natural setting. For complex-valued random variables the covariance is defined with a conjugate in the second slot,
$$
\operatorname{cov}(C_1, C_2) = \mathbb{E}\Bigl[(C_1 - \mathbb{E}C_1)\overline{(C_2 - \mathbb{E}C_2)}\Bigr] ,
\qquad
\operatorname{var}(C) = \operatorname{cov}(C,C) = \mathbb{E}\bigl(\lvert C - \mathbb{E}C\rvert^{2}\bigr) ,
$$
so that $\operatorname{cov}$ is not symmetric: $\operatorname{cov}(C_2, C_1) = \overline{\operatorname{cov}(C_1, C_2)}$. Two complex variables with zero covariance are called **orthogonal** rather than uncorrelated.
:::

:::definition[Autocovariance, autocorrelation, spectral distribution and density]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, the opening of the section with (9.3.1), Definition (9.3.3), Definition (9.3.9) and Definition (9.3.10), pp. 438-441"}
Let $X = \{X(t) : -\infty < t < \infty\}$ be a weakly stationary complex-valued process. Its **autocovariance function** is
$$
c(t) \;=\; \operatorname{cov}\bigl(X(s), X(s+t)\bigr) ,
$$
which by stationarity does not depend on $s$. Taking $t = 0$ shows that the variance is the same at every time: $\operatorname{var}(X(t)) = c(0)$. Replacing $X$ by $X - \mathbb{E}X(0)$ changes nothing in $c$, so we may and do assume $\mathbb{E}X(t) = 0$ whenever it is convenient.

If $c(0) > 0$, the **autocorrelation function** is the normalised autocovariance
$$
\rho(t) \;=\; \frac{c(t)}{c(0)} \;=\; \frac{\operatorname{cov}(X(0), X(t))}{\sqrt{\operatorname{var}(X(0))\operatorname{var}(X(t))}} ,
$$
the correlation between the process and its own value a lag $t$ later. Note $\rho(0) = 1$.

If $\rho$ admits a representation
$$
\rho(t) \;=\; \int_{-\infty}^{\infty} e^{it\lambda}\,dF(\lambda)
$$
with $F$ a distribution function, then $F$ is the **spectral distribution function** of $X$, and where $F$ has a density, that density $f = F'$ is the **spectral density function**. The **spectrum** of $X$ is the set of real $\lambda$ with $F(\lambda+\epsilon) - F(\lambda-\epsilon) > 0$ for every $\epsilon > 0$: the frequencies that actually carry weight.

The reading of this is that $\rho$ is a mixture of pure oscillations $e^{it\lambda}$, the weight attached to frequencies in $[\lambda, \lambda+d\lambda]$ being $dF(\lambda)$; equivalently, $\rho(t) = \mathbb{E}(e^{it\Lambda})$ for a random frequency $\Lambda$ with distribution function $F$. Because $\rho$ is normalised, so is $F$: the spectral distribution describes how the *fraction* of the variance is shared out among frequencies. The variance itself carried by a band $B$ of frequencies is $c(0)\int_B dF$, and where $F$ has a density $f$ the variance per unit frequency — the quantity a spectrum analyser plots — is $c(0)f(\lambda)$.
:::

:::statement[The autocovariance function is Hermitian and non-negative definite]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, Theorem (9.3.2), p. 438, and §9.6, Theorem (9.6.1), p. 464"}
Let $X$ be weakly stationary with autocovariance function $c$. Then

1. $c(-t) = \overline{c(t)}$ for all $t$; and
2. $c$ is **non-negative definite**: for all real $t_1, \dots, t_n$ and all complex $z_1, \dots, z_n$,
   $$
   \sum_{j,k} c(t_k - t_j)\,z_j\overline{z_k} \;\ge\; 0 .
   $$

These two properties characterise autocovariance functions. For a real-valued function $c : \mathbb{R}\to\mathbb{R}$ with $c(-t) = c(t)$ and $c$ non-negative definite, Grimmett and Stirzaker construct a real-valued **strongly** stationary process with autocovariance $c$, by declaring its finite-dimensional distributions to be multivariate normal with zero means and covariance matrix $\bigl(c(t_k - t_j)\bigr)$ and appealing to the Kolmogorov consistency conditions. So nothing is lost and nothing is gained by asking which functions can be autocovariances: exactly these.
:::

:::statement[The spectral theorem for autocorrelation functions]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, Theorem (9.3.4), equations (9.3.11)-(9.3.14) and Theorem (9.3.15) with (9.3.16)-(9.3.18), pp. 439-442"}
**Continuous time.** Let $X = \{X(t) : -\infty < t < \infty\}$ be a weakly stationary process with strictly positive variance and autocorrelation function $\rho$. Suppose $\rho$ is continuous at the single point $t = 0$. Then there is a distribution function $F$ whose characteristic function is $\rho$:
$$
\rho(t) \;=\; \int_{-\infty}^{\infty} e^{it\lambda}\,dF(\lambda) , \qquad t \in \mathbb{R} .
$$
This is the result usually named after Wiener and Khinchin. The distribution function $F$ is unique, by the uniqueness theorem for characteristic functions.

**Discrete time.** If $X = \{X_n\}$ is indexed by the integers, $\rho$ is defined only on $\mathbb{Z}$ and cannot be a characteristic function until its domain is extended; the theorem survives in the form
$$
\rho(n) \;=\; \int_{(-\pi,\pi]} e^{in\lambda}\,d\widetilde F(\lambda) , \qquad n \in \mathbb{Z} ,
$$
for a distribution function $\widetilde F$ with $\widetilde F(-\pi) = 0$ and $\widetilde F(\pi) = 1$; no continuity hypothesis is appropriate here. The restriction to one period is possible because $e^{in\lambda}$ is unchanged by $\lambda \mapsto \lambda + 2\pi$: if $\rho$ on $\mathbb{Z}$ is represented by any distribution on the whole of $\mathbb{R}$, the mass of that distribution may be folded into $(-\pi,\pi]$ by shifting it through multiples of $2\pi$, and the integrals at integer $n$ are unchanged. If moreover $X$ is real-valued then $\rho(n) = \rho(-n)$ and the representation may be taken in the real symmetric form
$$
\rho(n) \;=\; \int_{[-\pi,\pi]} \cos(n\lambda)\,dG(\lambda)
$$
for a distribution function $G$ of a symmetric distribution on $[-\pi,\pi]$; and conversely, a function $\rho$ with $\rho(0)=1$ admitting such a representation is the autocorrelation function of some real-valued stationary sequence.

**Inversion.** Grimmett and Stirzaker's Theorem (9.3.15) states: if the function $\widetilde F$ above is differentiable with derivative $f$, then
$$
f(\lambda) \;=\; \frac{1}{2\pi}\sum_{n=-\infty}^{\infty} e^{-in\lambda}\rho(n)
$$
and they attach to this the qualification that it holds wherever $f$ is itself differentiable. For a real-valued sequence the formula may be written $f(\lambda) = (2\pi)^{-1}\sum_n \rho(n)\cos(n\lambda)$. They record $\sum_{n}\lvert\rho(n)\rvert < \infty$ as a sufficient, but not necessary, condition for the spectral density to exist.
:::

:::statement[A clean sufficient condition in discrete time]{provenance=adapted label="Proposition" src="grimmett-stirzaker-2020:§9.3, the inversion formula (9.3.16) and the sufficient condition (9.3.18), p. 442"}
Let $X = \{X_n : n \in \mathbb{Z}\}$ be weakly stationary with $c(0) > 0$ and autocorrelation function $\rho$, and suppose
$$
\sum_{n=-\infty}^{\infty}\lvert\rho(n)\rvert \;<\; \infty .
$$
Then the series
$$
f(\lambda) \;=\; \frac{1}{2\pi}\sum_{n=-\infty}^{\infty}\rho(n)\,e^{-in\lambda}
$$
converges absolutely and uniformly on $(-\pi,\pi]$, its sum $f$ is continuous and non-negative, and it is the spectral density of $X$:
$$
\rho(n) \;=\; \int_{-\pi}^{\pi} e^{in\lambda}f(\lambda)\,d\lambda , \qquad n \in \mathbb{Z} , \qquad \int_{-\pi}^{\pi}f(\lambda)\,d\lambda = 1 .
$$
The formula and the summability hypothesis are Grimmett and Stirzaker's (9.3.16) and (9.3.18); what is ours is the packaging of the two into one statement with the conclusions that make it usable — convergence, continuity, non-negativity and the normalisation — and the proof below, which reaches them without Bochner's theorem and without the differentiability hypothesis their Theorem (9.3.15) carries. This is the version used in practice.
:::

:::idea{provenance=original}
**Why a correlation function must be a Fourier transform.** The variance of any linear combination $Z = \sum_j z_jX(t_j)$ is non-negative, and expanding that variance writes it as the double sum $\sum_{j,k}c(t_k-t_j)z_j\overline{z_k}$. So non-negative definiteness of $c$ is not an extra assumption: it is the statement that variances are non-negative, rewritten. Bochner's theorem says that this property, together with continuity and the normalisation $\rho(0)=1$, is exactly what characterises characteristic functions. The spectral theorem is therefore Bochner's theorem applied to $\rho$, and the only work is to check that $\rho$ is continuous everywhere, not merely at the origin.

**Why continuity at one point gives continuity everywhere.** The increment $c(t+h)-c(t)$ is an expectation of $X(0)$ against the increment $X(t+h)-X(t)$. The Cauchy-Schwarz inequality bounds it by the product of two root-mean-squares, and stationarity makes the second of them $\sqrt{2c(0) - c(h) - c(-h)}$, a quantity that involves $h$ alone. So the modulus of continuity of $c$ at a general $t$ is controlled by its behaviour at $0$ — uniformly in $t$. A function that is non-negative definite and continuous at the origin is automatically uniformly continuous.

**Why the discrete-time statement lives on an interval.** Sampling at integer times cannot distinguish a frequency $\lambda$ from $\lambda + 2\pi$: the two oscillations agree at every integer. The spectral mass at all these frequencies is therefore indistinguishable and may be piled up at one representative in $(-\pi, \pi]$. That is aliasing, and it is the reason a sampled signal has a spectrum only up to the Nyquist frequency.

**Why absolute summability is enough, and why it gives non-negativity for free.** With $\sum_n\lvert\rho(n)\rvert<\infty$ the Fourier series for $f$ converges uniformly, so it may be integrated term by term against $e^{in\lambda}$, and orthogonality returns $\rho(n)$. Non-negativity of the sum is less obvious, but it comes from the same source as non-negative definiteness: the Cesàro means of the series are, up to a constant, the expected squared modulus of $\sum_{n\le N}X_ne^{in\lambda}$, which cannot be negative.
:::

:::proof[Hermitian symmetry and non-negative definiteness]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, proof of Theorem (9.3.2), p. 439"}
**Part 1.** By stationarity we may compute $c(-t)$ at the time $s = t$:
$$
c(-t) = \operatorname{cov}\bigl(X(t), X(0)\bigr) = \overline{\operatorname{cov}\bigl(X(0), X(t)\bigr)} = \overline{c(t)} ,
$$
the middle step being the antisymmetry $\operatorname{cov}(C_2,C_1) = \overline{\operatorname{cov}(C_1,C_2)}$ of the complex covariance.

**Part 2.** Fix $t_1,\dots,t_n$ and $z_1,\dots,z_n$ and set $Z = \sum_j z_jX(t_j)$. Covariance is linear in its first slot and conjugate-linear in its second, so
$$
\operatorname{var}(Z) = \operatorname{cov}(Z,Z) = \sum_{j,k}\operatorname{cov}\bigl(z_jX(t_j),\, z_kX(t_k)\bigr) = \sum_{j,k} z_j\overline{z_k}\,\operatorname{cov}\bigl(X(t_j), X(t_k)\bigr) = \sum_{j,k}c(t_k-t_j)z_j\overline{z_k} ,
$$
where the last step uses stationarity in the form $\operatorname{cov}(X(t_j),X(t_k)) = c(t_k - t_j)$. A variance is non-negative, so the double sum is non-negative. $\square$

Since $\rho = c/c(0)$ and $c(0) = \operatorname{var}(X(0)) > 0$, the function $\rho$ inherits both properties and satisfies $\rho(0) = 1$.
:::

:::proof[The spectral theorem]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, proof of Theorem (9.3.4), p. 439, and §5.7, Theorem (5.7.3) and the statement of Bochner's theorem, p. 204"}
Assume, as we may, that $\mathbb{E}X(t) = 0$, so that $c(t) = \mathbb{E}\bigl(X(0)\overline{X(t)}\bigr)$.

**Step 1: an estimate for the increments of $c$.** For real $t$ and $h$,
$$
c(t+h) - c(t) = \mathbb{E}\Bigl[X(0)\,\overline{\bigl(X(t+h) - X(t)\bigr)}\Bigr] ,
$$
by linearity of the expectation. Taking moduli inside and applying the Cauchy-Schwarz inequality,
$$
\bigl\lvert c(t+h) - c(t)\bigr\rvert
\;\le\; \mathbb{E}\Bigl[\lvert X(0)\rvert\,\bigl\lvert X(t+h)-X(t)\bigr\rvert\Bigr]
\;\le\; \sqrt{\mathbb{E}\bigl(\lvert X(0)\rvert^{2}\bigr)\;\mathbb{E}\bigl(\lvert X(t+h)-X(t)\rvert^{2}\bigr)} .
$$

**Step 2: evaluate the second factor by stationarity.** Expand the square and use $\mathbb{E}\lvert X(u)\rvert^{2} = c(0)$, valid for every $u$, together with $\operatorname{cov}(X(t),X(t+h)) = c(h)$ and $\operatorname{cov}(X(t+h),X(t)) = c(-h)$:
$$
\mathbb{E}\bigl(\lvert X(t+h) - X(t)\rvert^{2}\bigr) = 2c(0) - c(h) - c(-h) .
$$
Only $h$ survives on the right. Therefore
$$
\bigl\lvert c(t+h) - c(t)\bigr\rvert \;\le\; \sqrt{c(0)\bigl(2c(0) - c(h) - c(-h)\bigr)} \qquad\text{for all } t .
$$

**Step 3: continuity at $0$ upgrades to uniform continuity.** By hypothesis $\rho$, and therefore $c = c(0)\rho$, is continuous at $0$, so $c(h)\to c(0)$ and $c(-h) = \overline{c(h)}\to c(0)$ as $h \to 0$. The bound of step 2 therefore tends to $0$ as $h\to 0$, uniformly in $t$. So $c$ is uniformly continuous on $\mathbb{R}$, and so is $\rho = c/c(0)$.

**Step 4: apply Bochner's theorem.** By the previous proof, $\rho$ is non-negative definite in the form $\sum_{j,k}\rho(t_k-t_j)z_j\overline{z_k}\ge 0$; replacing each $z_j$ by $\overline{z_j}$ and exchanging the names of the summation indices turns this into $\sum_{j,k}\rho(t_j-t_k)z_j\overline{z_k}\ge0$, which is the form in which Bochner's condition is stated. We also have $\rho(0) = 1$ and $\lvert\rho(t)\rvert\le 1$, the latter by the Cauchy-Schwarz inequality, and uniform continuity from step 3. Bochner's theorem — quoted by Grimmett and Stirzaker without proof, as the converse half of their Theorem (5.7.3) — says that any function carrying those three properties arises as the characteristic function of a distribution function $F$. That is the assertion:
$$
\rho(t) = \int_{-\infty}^{\infty}e^{it\lambda}\,dF(\lambda) . \qquad\square
$$
Uniqueness of $F$ is the uniqueness theorem for characteristic functions (see :ref[Characteristic functions]{to=prob.characteristic-functions}).
:::

:::proof[The proposition in discrete time]{provenance=original}
Assume $\mathbb{E}X_n = 0$ and $\sum_n\lvert\rho(n)\rvert < \infty$.

**Step 1: convergence and continuity.** Each term of $\sum_n \rho(n)e^{-in\lambda}$ has modulus $\lvert\rho(n)\rvert$, so by the Weierstrass test the series converges absolutely and uniformly in $\lambda$. A uniform limit of continuous functions is continuous, so $f$ is continuous on $(-\pi,\pi]$, and $2\pi f$ is bounded by $\sum_n\lvert\rho(n)\rvert$.

**Step 2: the coefficients come back.** Uniform convergence permits term-by-term integration, so for each $m \in \mathbb{Z}$
$$
\int_{-\pi}^{\pi}e^{im\lambda}f(\lambda)\,d\lambda = \frac{1}{2\pi}\sum_{n}\rho(n)\int_{-\pi}^{\pi}e^{i(m-n)\lambda}\,d\lambda = \rho(m) ,
$$
because $\int_{-\pi}^{\pi}e^{ik\lambda}d\lambda$ equals $2\pi$ when $k = 0$ and $0$ otherwise: this is the orthogonality of the exponentials over one period that underlies :ref[Fourier series]{to=fourier.fourier-series}, and the display says that $\rho(-m)$, read the other way round, is the $m$th Fourier coefficient of $2\pi f$. Taking $m = 0$ gives $\int_{-\pi}^{\pi}f = \rho(0) = 1$.

**Step 3: non-negativity, through a Cesàro mean.** For $N \ge 1$ and $\lambda$ fixed, put $Z_N = \sum_{n=1}^{N}X_ne^{in\lambda}$ and consider
$$
S_N(\lambda) \;=\; \frac{1}{2\pi N\,c(0)}\,\mathbb{E}\bigl(\lvert Z_N\rvert^{2}\bigr) \;\ge\; 0 .
$$
Expanding the square,
$$
\mathbb{E}\bigl(\lvert Z_N\rvert^{2}\bigr) = \sum_{n=1}^{N}\sum_{m=1}^{N}e^{i(n-m)\lambda}\,\mathbb{E}\bigl(X_n\overline{X_m}\bigr) = \sum_{n,m}e^{i(n-m)\lambda}c(m-n) ,
$$
using $\mathbb{E}(X_n\overline{X_m}) = \operatorname{cov}(X_n,X_m) = c(m-n)$. The summand depends on $n$ and $m$ only through $k = m-n$, and for each $k$ with $\lvert k\rvert < N$ there are exactly $N - \lvert k\rvert$ pairs, so
$$
S_N(\lambda) = \frac{1}{2\pi}\sum_{\lvert k\rvert < N}\Bigl(1 - \frac{\lvert k\rvert}{N}\Bigr)\rho(k)\,e^{-ik\lambda} .
$$

**Step 4: let $N \to \infty$.** Each term converges to $\rho(k)e^{-ik\lambda}/2\pi$, and the terms are dominated in modulus by $\lvert\rho(k)\rvert/2\pi$, which is summable; so by dominated convergence for series, $S_N(\lambda)\to f(\lambda)$. A limit of non-negative numbers is non-negative, so $f(\lambda)\ge 0$ for every $\lambda$.

**Step 5: identify $f$ as the spectral density.** By steps 1-4, $f$ is a continuous probability density on $(-\pi,\pi]$, and by step 2 the distribution function $\widetilde F(\lambda) = \int_{-\pi}^{\lambda}f$ satisfies $\rho(n) = \int_{(-\pi,\pi]}e^{in\lambda}d\widetilde F(\lambda)$ for all $n$. This is the discrete-time spectral representation, and $\widetilde F$ is unique, so $f$ is the spectral density. $\square$
:::

:::remark[Where the hypotheses are used, conventions, and the other Wiener-Kinchin theorem]{provenance=adapted src="grimmett-stirzaker-2020:§9.3, Theorem (9.3.4) and the discussion of (9.3.11)-(9.3.14) and (9.3.18), pp. 439-442, and Examples (9.3.19) and (9.3.20), p. 442; rhb-2006:§13.1.8, eqs. (13.40)-(13.43) and the energy spectrum, pp. 449-450"}
**Strict positivity of the variance** is needed only to divide by $c(0)$. A process that is almost surely constant has $c \equiv 0$ and no autocorrelation function; there is nothing to normalise and no spectral distribution.

**Continuity of $\rho$ at the origin** is used exactly once, in step 3 of the proof, and it is not a technicality. Two different objects go by the name "white noise" in continuous time, and only the first of them is a process of the kind defined above; it is worth keeping them apart, because the hypothesis fails for one and the definition fails for the other.

*A process with orthogonal values.* Take $c(0) = \sigma^{2} > 0$ and $c(t) = 0$ for every $t \ne 0$. This $c$ is non-negative definite — for distinct times the double sum of the statement above collapses to $\sigma^{2}\sum_j\lvert z_j\rvert^{2}$ — so by the characterisation quoted there it really is the autocovariance of a process, and that process satisfies the definition of weak stationarity given here: the mean is constant and the covariance depends on the lag alone. What fails is the hypothesis, and with it the conclusion. Its $\rho$ is $1$ at the origin and $0$ elsewhere, no characteristic function jumps like that, and so this process has no spectral distribution at all — not an unusual one, none. Nor does a formal transform rescue it: $\rho$ vanishes off a single point, so $\int\rho(t)e^{-i\lambda t}\,dt = 0$, which is not a density. The lesson is that weak stationarity by itself buys nothing; the spectral theory begins at the hypothesis of continuity.

*The white noise of physics.* The delta-correlated object $c(t) = \sigma^{2}\delta(t)$ is a different thing and is not covered by the definitions above at all, because $c(0)$ is infinite: it has no variance, so it is not a second-order process and has no autocorrelation function to be continuous or discontinuous. It is this object, not the one in the previous paragraph, that carries the flat spectrum $S(\omega) = \sigma^{2}$ of infinite total mass; the infinite mass is precisely the infinite variance, seen in the frequency domain. White noise in this sense has to be handled as a generalised process, as the formal derivative of Brownian motion — which is what :ref[Brownian motion]{to=prob.brownian-motion} and :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} do instead. In the laboratory neither idealisation is met: a real noise source is flat only up to some bandwidth, beyond which $S$ rolls off and the total variance is finite.

**Only weak stationarity is used anywhere above.** The spectral theory never looks beyond the mean and the covariance. This is the practical reason for preferring the weaker hypothesis: to fit a spectrum one needs to assume only that the first two moments are time-invariant, not that the whole law is.

**In discrete time the spectral distribution is unique only on one period.** The representation on $\mathbb{R}$ is not unique, since $e^{in\lambda}$ is $2\pi$-periodic in $\lambda$; uniqueness is restored by folding all the mass into $(-\pi,\pi]$. A sampled process therefore cannot tell a frequency from its aliases, and a spectral density estimated from samples at spacing $\Delta$ is defined only for $\lvert\omega\rvert \le \pi/\Delta$.

**Absolute summability is sufficient but not necessary** for a spectral density to exist. Grimmett and Stirzaker say so explicitly at their (9.3.18). Their Example (9.3.20) shows the opposite extreme: for $X_n \equiv Y$ with $\operatorname{var}Y = 1$, one has $\rho(n) = 1$ for all $n$, which is not summable; the spectral distribution is the unit mass at $\lambda = 0$ and there is no density. Their Example (9.3.19), discrete white noise with $\rho(n) = \delta_{n0}$, is the other extreme: the spectral density is the uniform density on $[-\pi,\pi]$, and the spectrum is all of $[-\pi,\pi]$.

**The hypothesis of the inversion theorem, as printed.** Grimmett and Stirzaker's Theorem (9.3.15) assumes that $\widetilde F$ is differentiable with derivative $f$, and then asserts the inversion formula "at every point $\lambda$ at which $f$ is differentiable". We state it exactly as they do. The proposition above avoids the question by assuming absolute summability outright, which yields a continuous $f$ and the formula at every $\lambda$.

**Conventions.** Three normalisations are in common use, and they differ by factors of $2\pi$ and by whether the variance is divided out.

| Object | Definition here | Relation |
|---|---|---|
| Spectral density $f$ (as above) | $\rho(t) = \int e^{it\lambda}f(\lambda)\,d\lambda$ | $\int f = 1$ |
| Power spectral density $S$ (physics) | $S(\omega) = \int_{-\infty}^{\infty}c(t)e^{-i\omega t}\,dt$ | $S = 2\pi c(0)f$, and $\frac{1}{2\pi}\int S(\omega)\,d\omega = c(0)$ |
| One-sided spectrum (engineering) | $S_{+}(\omega) = 2S(\omega)$ for $\omega > 0$, $S_{+}(0) = S(0)$ | defined for real processes only |

In the handbook's Fourier convention, $\hat g(k) = \int g(t)e^{-ikt}\,dt$ with the $2\pi$ on the inverse transform (see :ref[The Fourier transform]{to=fourier.fourier-transform}), the first two lines read $f = \hat\rho/2\pi$ and $S = \hat c$. Always check which of these a quoted "spectral density" means before comparing numbers.

**The other theorem of the same name.** (On the spelling, see the third warning in the opening note: Riley, Hobson and Bence write Kinchin where Grimmett and Stirzaker write Khinchin, and we follow whichever source is being reported.) Riley, Hobson and Bence prove, and call the Wiener-Kinchin theorem, a purely deterministic statement: for square-integrable $f$ and $g$ with cross-correlation $C(z) = \int\overline{f(x)}g(x+z)\,dx$, one has $\hat C(k) = \sqrt{2\pi}\,\overline{\hat f(k)}\,\hat g(k)$ in their symmetric convention; specialising to $g = f$ makes the transform of the autocorrelation proportional to $\lvert\hat f(k)\rvert^{2}$, which they call the energy spectrum of $f$. No probability appears, and no stationarity: the two results are different theorems sharing a name and a shape. The probabilistic one above concerns an ensemble average that exists because the process is stationary; the deterministic one concerns a single square-integrable function, which a stationary process's sample path is not. The bridge between them, which is what makes the shared name defensible, is that a time average of $\lvert\int_{-T}^{T}X(t)e^{-i\omega t}dt\rvert^{2}/2T$ estimates $S(\omega)$ — the content of the periodogram, treated in :ref[The periodogram]{to=stats.periodogram}.
:::

:::method[Finding the spectral density of a stationary process]{provenance=original}
1. **Check weak stationarity.** Confirm that the mean is constant and that $\operatorname{cov}(X(s),X(s+t))$ does not depend on $s$. If the process is defined by a recursion or a differential equation driven by noise, this is usually a condition on the coefficients: for an autoregression $X_n = \sum_{j=1}^{r}\alpha_jX_{n-j} + Z_n$ the condition is that the roots of $z^{r} - \alpha_1z^{r-1} - \cdots - \alpha_r$ all lie inside the unit circle.
2. **Compute the autocovariance $c(t)$,** then $\rho(t) = c(t)/c(0)$. For a process built linearly from orthogonal noise, expand the product $\mathbb{E}(X_n\overline{X_{n+m}})$ and discard every term in which two different noise variables meet.
3. **Check continuity at $t = 0$** in continuous time; in discrete time there is nothing to check.
4. **Transform.** In discrete time, if $\sum\lvert\rho(n)\rvert<\infty$, use $f(\lambda) = (2\pi)^{-1}\sum_n\rho(n)e^{-in\lambda}$ on $(-\pi,\pi]$; for a real process this is $(2\pi)^{-1}\bigl(1 + 2\sum_{n\ge1}\rho(n)\cos n\lambda\bigr)$. In continuous time use $f(\lambda) = (2\pi)^{-1}\int\rho(t)e^{-it\lambda}\,dt$ when $\rho$ is integrable, which is :ref[Fourier inversion]{to=fourier.fourier-inversion} applied to the representation $\rho(t) = \int e^{it\lambda}f(\lambda)\,d\lambda$; otherwise recognise $\rho$ as a known characteristic function and read off its distribution, which is often quicker than inverting an integral.
5. **Check the answer three ways.** $f$ must be non-negative; $\int f$ must be $1$; and $f$ must be symmetric under $\lambda\mapsto-\lambda$ if the process is real.
6. **Convert to the convention you need** using the table in the remark, and record which one you used.
7. **Read off what you wanted.** The fraction of the variance carried by a frequency band $B$ is $\int_Bf$; a spectral density with a sharp peak at $\lambda_0$ means a quasi-periodic component of period $2\pi/\lambda_0$; a spectral density that is flat near $\lambda=0$ and rolls off at $\lambda_c$ means a correlation time of order $1/\lambda_c$.
:::

:::example[A moving average of order two]{provenance=original}
Let $\{Z_n : n \in \mathbb{Z}\}$ be orthogonal random variables, each of mean $0$ and variance $1$. Define a real-valued process by
$$
X_n \;=\; Z_n + \tfrac12 Z_{n-1} - \tfrac14 Z_{n-2} , \qquad n \in \mathbb{Z} .
$$
Write $a_0 = 1$, $a_1 = \tfrac12$, $a_2 = -\tfrac14$ and $a_k = 0$ otherwise.

**Step 1: stationarity and the autocovariance.** Each $X_n$ has mean $0$. Since $\mathbb{E}(Z_jZ_k) = \delta_{jk}$,
$$
c(m) = \mathbb{E}(X_nX_{n+m}) = \sum_{j,k}a_ja_k\,\mathbb{E}\bigl(Z_{n-j}Z_{n+m-k}\bigr) = \sum_{k}a_ka_{k+m} ,
$$
which does not depend on $n$; so $X$ is weakly stationary. Evaluating,
$$
c(0) = 1 + \tfrac14 + \tfrac1{16} = \tfrac{21}{16} , \qquad
c(1) = \tfrac12 + \tfrac12\!\cdot\!\bigl(-\tfrac14\bigr) = \tfrac38 , \qquad
c(2) = -\tfrac14 ,
$$
and $c(m) = 0$ for $\lvert m\rvert\ge3$, because then no two of the shifted index sets overlap. Hence
$$
\rho(1) = \frac{3/8}{21/16} = \frac27 , \qquad \rho(2) = \frac{-1/4}{21/16} = -\frac{4}{21} .
$$

**Step 2: the spectral density.** Only five terms of the series are non-zero, so absolute summability is immediate and the proposition applies. For a real process $\rho(-n)=\rho(n)$, so
$$
f(\lambda) = \frac{1}{2\pi}\Bigl(1 + 2\rho(1)\cos\lambda + 2\rho(2)\cos2\lambda\Bigr)
= \frac{1}{2\pi}\Bigl(1 + \tfrac47\cos\lambda - \tfrac{8}{21}\cos2\lambda\Bigr) ,
\qquad -\pi \le \lambda \le \pi .
$$

**Step 3: the three checks.** Symmetry in $\lambda$ is visible. The integral is $1$, since $\int_{-\pi}^{\pi}\cos(n\lambda)\,d\lambda = 0$ for $n = 1, 2$ and $\int_{-\pi}^{\pi}d\lambda = 2\pi$. For non-negativity, note the general identity for a moving average: with $A(z) = \sum_ka_kz^{k}$,
$$
\sum_m c(m)e^{-im\lambda} = \sum_{k,m}a_ka_{k+m}e^{-im\lambda} = \overline{A(e^{-i\lambda})}\,A(e^{-i\lambda}) = \bigl\lvert A(e^{-i\lambda})\bigr\rvert^{2} ,
$$
so that $f(\lambda) = \lvert A(e^{-i\lambda})\rvert^{2}/\bigl(2\pi c(0)\bigr) \ge 0$. Here $A(z) = 1 + \tfrac12z - \tfrac14z^{2}$. As a numerical check at $\lambda = 0$: the formula gives $f(0) = (1 + \tfrac47 - \tfrac8{21})/(2\pi) = \tfrac{25}{42\pi} = 0.1894702$, while $A(1) = \tfrac54$ gives $\lvert A(1)\rvert^{2}/(2\pi c(0)) = (25/16)/(2\pi\cdot 21/16) = 25/(42\pi)$, the same. At the other end, $f(\pi) = (1 - \tfrac47 - \tfrac8{21})/(2\pi) = 1/(42\pi) = 0.0075788$, which is the minimum of $f$ and is positive.

**Step 4: a number to check.** What fraction of the variance of $X$ lies at frequencies $\lvert\lambda\rvert\le\pi/2$, that is, in periods of four sampling intervals or longer? It is
$$
\int_{-\pi/2}^{\pi/2}f(\lambda)\,d\lambda
= \frac{1}{2\pi}\Bigl(\pi + \tfrac47\bigl[\sin\lambda\bigr]_{-\pi/2}^{\pi/2} - \tfrac8{21}\Bigl[\tfrac{\sin2\lambda}{2}\Bigr]_{-\pi/2}^{\pi/2}\Bigr)
= \frac{1}{2\pi}\Bigl(\pi + \tfrac87 - 0\Bigr) = \frac12 + \frac{4}{7\pi} .
$$
Numerically this is $0.681891$. The filter has tilted the flat spectrum of the input noise towards low frequencies: white noise would put exactly half the variance in this band, and the moving average has moved about $18$ per cent of the total into it. That is the signature of the positive coefficient on $Z_{n-1}$, which makes consecutive values of $X$ positively correlated, $\rho(1) = 2/7 > 0$.
:::

:::application[Noise spectra in the laboratory]{provenance=original}
**What a spectrum analyser measures.** Point an instrument at a fluctuating voltage, a photocurrent, a seismometer trace, or a sea-surface elevation record, and what comes back is an estimate of the power spectral density $S(\omega) = \int c(t)e^{-i\omega t}\,dt$. The theorem above is what guarantees that this is a well-posed thing to measure: provided the record is stationary and the correlation function is continuous at the origin, a non-negative $S$ exists and determines, and is determined by, the correlation function. The estimator itself is the periodogram (:ref[The periodogram]{to=stats.periodogram}), and the standard worry about it — that it is noisy however long the record, and must be smoothed — is a statistical matter, not a failure of the theorem.

**Lorentzian line shapes.** A process whose correlations decay exponentially, $c(t) = \sigma^{2}e^{-\lvert t\rvert/\tau}$, has $\rho(t) = e^{-\lvert t\rvert/\tau}$, the characteristic function of a Cauchy distribution scaled by $1/\tau$; its spectral density is therefore the Lorentzian
$$
f(\lambda) = \frac{1}{\pi}\,\frac{1/\tau}{(1/\tau)^{2} + \lambda^{2}} , \qquad\text{equivalently}\qquad S(\omega) = \frac{2\sigma^{2}\tau}{1 + \omega^{2}\tau^{2}} .
$$
This single formula is behind the shape of the pressure-broadened spectral line, the roll-off of the Ornstein-Uhlenbeck velocity spectrum (see :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations}), the noise spectrum of a single relaxing dipole, and the Lorentzian fitted to a dynamic light-scattering correlogram to extract a diffusion coefficient. The correlation time is read off as the inverse of the half-width: a spectrum flat up to $\omega \sim 1/\tau$ and falling as $\omega^{-2}$ beyond it.

**White noise and its colouring.** A flat spectral density means an autocorrelation concentrated at zero lag — no memory. Johnson-Nyquist noise in a resistor, and shot noise in a current, are white over the bandwidths usually of interest, and the linear circuit or detector that follows multiplies the spectral density by $\lvert H(\omega)\rvert^{2}$, the squared modulus of the transfer function. That multiplication rule is the continuous-time twin of the identity $f = \lvert A(e^{-i\lambda})\rvert^{2}/(2\pi c(0))$ verified in the example above, and it is the content of :ref[Linear filters]{to=stats.linear-filters}: filtering a stationary process reshapes its spectrum pointwise and does nothing else.

**Transport coefficients from correlation functions.** In statistical mechanics the zero-frequency value of a spectral density is a transport coefficient. For the velocity of a tagged particle in three dimensions, the Green-Kubo relation
$$
D = \frac13\int_0^{\infty}\bigl\langle v(0)\cdot v(t)\bigr\rangle\,dt
$$
expresses the diffusion coefficient as half the zero-frequency spectral density of the velocity, divided by three for the dimensions; the integral converges precisely because the velocity autocorrelation decays, which is the same condition that gives the velocity process a spectral density. Similar expressions give the shear viscosity from the stress autocorrelation and the thermal conductivity from the heat-flux autocorrelation. In every case the quantity actually computed in a molecular-dynamics run is the autocovariance function of a stationary process, and the transport coefficient is read off its transform.

**A caution about stationarity.** Climate records, financial series and detector baselines drift, and a drifting series is not stationary; its sample "spectrum" will show a spurious rise at low frequency, because a trend looks like an oscillation of period longer than the record. The usual remedies — removing a fitted trend, differencing, or working with increments — are all attempts to recover a process to which this theorem applies.
:::
