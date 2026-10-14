---
id: stats.periodogram
title: The periodogram and spectral estimation
kind: method
level: core
summary: Defines the periodogram of a finite record as the squared modulus of its discrete Fourier transform, shows that it is exactly the transform of the sample autocovariance and that its expectation is the true spectral density smoothed by the Fejer kernel of the data window, computes its distribution for Gaussian white noise to show that it never becomes consistent however long the record, and sets out the two repairs — tapering against leakage and segment averaging against variance.
prereqs: [fourier.dft-fft, prob.stationary-processes, fourier.fejer-theorem, prob.multivariate-normal, prob.expectation-variance, stats.sampling-distributions]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§9.3, pp. 438-444: the autocovariance $c(t)$ of a weakly stationary process and Theorem (9.3.2) that it is non-negative definite; the discrete-time spectral representation (9.3.11)-(9.3.14) on $(-\\pi,\\pi]$; Theorem (9.3.15) with the inversion formula (9.3.16) $f(\\lambda) = (2\\pi)^{-1}\\sum_n \\rho(n)\\mathrm{e}^{-in\\lambda}$ and the sufficient condition (9.3.18) that $\\sum_n\\lvert\\rho(n)\\rvert<\\infty$; Example (9.3.19), discrete white noise, whose autocorrelation is $\\rho(n)=\\delta_{n0}$ and whose spectral density is uniform on $[-\\pi,\\pi]$. §9.7, Problem 7(a), p. 468: the moving average process $X_n = Z_n + \\alpha Z_{n-1}$ built from uncorrelated $Z_n$ of zero mean and unit variance, whose spectral density function is asked for"
    pages: "438-444, 468"
    role: the spectral density of a discrete-time stationary process, in the normalisation this handbook uses; the inversion formula and its summability hypothesis, which is the identity the periodogram is a sample version of; white noise as the flat-spectrum example; and the moving-average process whose spectrum the worked example computes and then estimates
  - work: rhb-2006
    loc: "§13.4, Exercise 13.10, p. 462: $N$ samples $f_n$ of an analogue signal taken at spacing $\\tau$ from $t=0$, the discrete transform $F_k = (2\\pi)^{-1/2}\\sum_{n<N} f_n\\mathrm{e}^{-2\\pi nki/N}$, the claim that $\\tilde f(2\\pi k/(N\\tau)) \\approx F_k\\tau$ estimates the true frequency spectrum at the discrete points $2\\pi k/(N\\tau)$, the worked case of eight samples of a unit pulse at spacing $\\tau = 0.25$, and the observation that the estimate agrees well for $k<4$ and badly for larger $k$"
    pages: "462"
    role: the statement that a finite sample transformed by the DFT is only an estimate of the true frequency spectrum, together with the sampling-interval factor that converts between the two, and the explicit warning that the estimate degrades towards the top of the frequency range
  - work: arfken-2013
    loc: "§19.1, Exercise 19.1.2, p. 945: writing the Fourier coefficients as $a_n = \\alpha_n\\cos\\theta_n$, $b_n = \\alpha_n\\sin\\theta_n$, the note that the numbers $\\alpha_n^2 = a_n^2+b_n^2$ as a function of $n$ are called the power spectrum, and that their importance is their invariance under a shift of the phase $\\theta_n$. §20.6, pp. 1003-1007: discrete orthogonality of the exponentials, Eq. (20.120), and its trigonometric form in Exercise 20.6.1 with the three cases $0$, $N/2$ and $N$; Example 20.6.1, p. 1006, in which $\\cos 3x$ sampled at four points is indistinguishable from $\\cos x$, and the definition of aliasing that follows it; Exercise 20.6.3(a) and its note, p. 1007, that a real sample has a Hermitian-symmetric transform, $F_p = F^*_{N-p}$"
    pages: "945, 1003-1007"
    role: the name and the defining property of the power spectrum — that squaring discards the phase; the discrete orthogonality sums $\\sum_k\\cos^2 = \\sum_k\\sin^2 = N/2$ and $\\sum_k\\cos\\sin = 0$ that the variance computation needs, with their exceptional cases at the ends of the frequency range; aliasing; and the Hermitian symmetry that halves the number of independent values
  - work: stakgold-holst-2011
    loc: "§2.3, Exercise 2.3.6, p. 144: the Fejer kernel in the normalisation $F_n(x) = \\sin^2(nx/2)/\\bigl(2\\pi n\\sin^2(x/2)\\bigr)$, presented as a delta sequence"
    pages: "144"
    role: the closed form and normalisation of the Fejer kernel used here, the one with unit integral against $dx$ rather than $dx/2\\pi$
---

:::note[Conventions, and two densities that differ by a factor]{provenance=original}
:ref[]{to=prob.stationary-processes} defines the spectral density of a discrete-time stationary process through its **autocorrelation** $\rho(n) = c(n)/c(0)$, so that the density
$$
f(\lambda) = \frac{1}{2\pi}\sum_{n\in\mathbb{Z}}\rho(n)\,\mathrm{e}^{-in\lambda}, \qquad \lambda\in(-\pi,\pi],
$$
is a probability density: it integrates to one. In data analysis one wants the spectrum in the units of the data, so throughout this unit we use the **power spectral density**
$$
g(\lambda) \;=\; c(0)\,f(\lambda) \;=\; \frac{1}{2\pi}\sum_{n\in\mathbb{Z}}c(n)\,\mathrm{e}^{-in\lambda},
\qquad\text{so that}\qquad
c(n) = \int_{-\pi}^{\pi}\mathrm{e}^{in\lambda}g(\lambda)\,d\lambda
\quad\text{and}\quad
\int_{-\pi}^{\pi}g = c(0) = \operatorname{var}X_t .
$$
The two differ only by the constant factor $c(0)$, and the summability hypothesis is the same one, :cite[Grimmett and Stirzaker's]{work=grimmett-stirzaker-2020 loc="(9.3.18), p. 442"} condition $\sum_n\lvert\rho(n)\rvert<\infty$. Every formula below can be read in either normalisation by inserting or removing one factor of $\operatorname{var}X_t$; mixing them silently is the commonest unit error in this subject.

Time is measured in sampling intervals, so the frequency variable $\lambda$ is in radians per sample and the Nyquist frequency is $\lambda = \pi$. For data sampled every $\Delta$ seconds, the physical angular frequency is $\omega = \lambda/\Delta$ and the density per unit $\omega$ is $\Delta\,g(\omega\Delta)$; this is the factor :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Exercise 13.10(a), p. 462"} carry as $\tau$ in their Exercise 13.10.
:::

:::definition[Fourier frequencies, the periodogram, tapers]{provenance=adapted src="arfken-2013:§19.1, Exercise 19.1.2, p. 945; rhb-2006:§13.4, Exercise 13.10, p. 462"}
Let $x_0, x_1, \dots, x_{N-1}$ be a finite record. The **Fourier frequencies** are
$$
\lambda_j = \frac{2\pi j}{N}, \qquad j = 0, 1, \dots, N-1 ,
$$
the frequencies for which the record contains a whole number of cycles. Values of $j$ above $N/2$ are read as the negative frequencies $\lambda_j - 2\pi$, so the $\lambda_j$ fill $(-\pi,\pi]$.

The **discrete Fourier sum** of the record is
$$
J_N(\lambda) \;=\; \sum_{t=0}^{N-1} x_t\,\mathrm{e}^{-i\lambda t} ,
$$
which at $\lambda = \lambda_j$ is $N$ times the discrete Fourier transform $\hat x(j)$ of :ref[]{to=fourier.dft-fft}, whose convention carries the factor $1/N$ in front. The **periodogram** is
$$
I_N(\lambda) \;=\; \frac{1}{2\pi N}\,\bigl\lvert J_N(\lambda)\bigr\rvert^{2} .
$$
Squaring discards the phase: this is the property :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 19.1.2, p. 945"} single out when they call $a_n^2+b_n^2$ the power spectrum and note its invariance under a phase shift. The $2\pi$ and the $N$ are chosen so that $I_N$ estimates $g$ and not a multiple of it; several other normalisations are in use.

A **taper** (or data window) is a sequence of weights $w_0,\dots,w_{N-1}$, not all zero, applied before transforming. The **tapered periodogram** is
$$
I^{w}_N(\lambda) \;=\; \frac{1}{2\pi\sum_{t}w_t^{2}}\;\Bigl\lvert \sum_{t=0}^{N-1} w_t\,x_t\,\mathrm{e}^{-i\lambda t}\Bigr\rvert^{2} ,
$$
the denominator being what keeps the scale right; $w_t \equiv 1$ gives $I_N$ back. Its **spectral window** is
$$
\Phi^{w}_N(\theta) \;=\; \frac{1}{2\pi\sum_{t}w_t^{2}}\;\Bigl\lvert \sum_{t=0}^{N-1} w_t\,\mathrm{e}^{-i\theta t}\Bigr\rvert^{2} ,
$$
a non-negative even function of $\theta$ with $\int_{-\pi}^{\pi}\Phi^{w}_N = 1$. For $w_t\equiv1$ the geometric sum gives the closed form
$$
\Phi_N(\theta) \;=\; \frac{1}{2\pi N}\,\frac{\sin^{2}(N\theta/2)}{\sin^{2}(\theta/2)} ,
$$
which is the Fejer kernel of :ref[]{to=fourier.fejer-theorem} in the normalisation :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 2.3.6, p. 144"} use.

Finally, the **sample autocovariance** of the record at lag $h$, $\lvert h\rvert \le N-1$, is
$$
\hat c(h) \;=\; \frac{1}{N}\sum_{t=0}^{N-1-\lvert h\rvert}(x_t - \bar x)\,(x_{t+\lvert h\rvert} - \bar x),
\qquad \bar x = \frac1N\sum_t x_t .
$$
Note the divisor $N$, not $N - \lvert h\rvert$: the reason is part 1 below.
:::

:::statement[What the periodogram is, and what it is not]{provenance=original}
Let $X_0,\dots,X_{N-1}$ be a stretch of a real weakly stationary process with autocovariance $c$ and power spectral density $g$, and let $I_N$, $I^w_N$, $\Phi^w_N$ and $\hat c$ be as defined above.

**1. It is exactly the transform of the sample autocovariance, and it carries all of the mean square of the record.** At every Fourier frequency $\lambda_j$ with $j \ne 0$,
$$
I_N(\lambda_j) \;=\; \frac{1}{2\pi}\sum_{h=-(N-1)}^{N-1}\hat c(h)\,\mathrm{e}^{-ih\lambda_j} ,
$$
and summing over the grid,
$$
\frac{2\pi}{N}\sum_{j=0}^{N-1} I_N(\lambda_j) \;=\; \frac1N\sum_{t=0}^{N-1}x_t^{2} .
$$
So the periodogram is the finite-sample copy of the inversion formula $g(\lambda) = (2\pi)^{-1}\sum_n c(n)\mathrm{e}^{-in\lambda}$, and it partitions the mean square of the record over the frequency grid. The divisor $N$ in $\hat c$ is what makes the first identity exact; with $N - \lvert h\rvert$ it fails, and the right-hand side need not even be non-negative.

**2. Its expectation is the true density smoothed by the spectral window.** If $\sum_n\lvert c(n)\rvert < \infty$ and $\mathbb{E}X_t = 0$, then for every $\lambda$
$$
\mathbb{E}\,I^{w}_N(\lambda) \;=\; \int_{-\pi}^{\pi}\Phi^{w}_N(\lambda - \mu)\,g(\mu)\,d\mu ,
$$
and in the untapered case this is
$$
\mathbb{E}\,I_N(\lambda) \;=\; \frac{1}{2\pi}\sum_{\lvert h\rvert < N}\Bigl(1 - \frac{\lvert h\rvert}{N}\Bigr)c(h)\,\mathrm{e}^{-ih\lambda}
\;\xrightarrow[N\to\infty]{}\; g(\lambda) ,
$$
the convergence being uniform in $\lambda$. The periodogram is therefore **asymptotically unbiased** but biased at any finite $N$, and the bias has two distinguishable parts: the main lobe of $\Phi^w_N$ blurs sharp features (limited **resolution**), and the sidelobes of $\Phi^w_N$ transport power from strong frequencies to distant weak ones (**leakage**). Among tapers that are heaviest at the centre the main lobe is narrowest with no taper at all: for $w_t\equiv1$ the full width of the main lobe of $\Phi_N$ between its first zeros is exactly $4\pi/N$, and every taper that lowers the sidelobes widens it — to $8\pi/N$ for the Hann taper of the method below. Narrow main lobe and low sidelobes pull against each other: for $w_t\equiv1$ the first sidelobe of $\Phi_N$ sits about $1.43$ frequency bins from the centre at about $4.7\%$ of the peak, that is $-13.3$ decibels, and a taper buys a lower figure than that with a wider main lobe.

**3. It is not consistent.** Let $X_t$ be independent $N(0,\sigma^2)$, so that $g \equiv \sigma^2/2\pi$. Then for each Fourier frequency $\lambda_j$ with $0 < j < N/2$,
$$
\frac{I_N(\lambda_j)}{g} \;\sim\; \tfrac12\chi^{2}_{2} ,
\qquad\text{equivalently}\qquad
I_N(\lambda_j) \sim \text{Exponential with mean } g ,
$$
and these variables are independent for different such $j$; at the two self-conjugate frequencies $\lambda = 0$ and (for even $N$) $\lambda = \pi$ one gets $I_N/g \sim \chi^2_1$ instead. Consequently
$$
\mathbb{E}\,I_N(\lambda_j) = g, \qquad \operatorname{var}I_N(\lambda_j) = g^{2}, \qquad
\frac{\text{standard deviation}}{\text{mean}} = 1 \quad\text{for every }N .
$$
Lengthening the record adds more frequencies; it does not improve any of them. A raw periodogram of a long record is a dense forest of spikes whose individual heights are no better determined than those from a short one.

**4. Averaging is the repair.** Split the record into $K$ segments of length $M = N/K$, form the tapered periodogram of each, and average:
$$
\bar I(\lambda) \;=\; \frac1K\sum_{k=1}^{K} I^{w,(k)}_M(\lambda) .
$$
For Gaussian white noise and non-overlapping segments the $K$ terms are independent, and each has mean exactly $g$ whatever the taper, so $\mathbb{E}\,\bar I = g$. The law, however, depends on the taper. Write the condition
$$
\textbf{(T)}\qquad \sum_{t=0}^{M-1} w_t^{2}\,\mathrm{e}^{-2i\lambda_j t} \;=\; 0 .
$$
At an interior Fourier frequency $\lambda_j$ of the segment grid, $0 < j < M/2$, at which **(T)** holds,
$$
\frac{\bar I(\lambda_j)}{g} \;\sim\; \frac{\chi^{2}_{2K}}{2K},
\qquad
\mathbb{E}\,\bar I = g, \qquad \frac{\text{standard deviation}}{\text{mean}} = \frac{1}{\sqrt{K}} .
$$
For $w_t\equiv1$ condition **(T)** holds at every interior $\lambda_j$, so the untapered statement is exact across the grid. For a general taper it can fail, and where it fails the mean is still exactly $g$ but the chi-squared law and the figure $K^{-1/2}$ are only approximations. The failures are few and sit at the two ends of the band: for the Hann taper of the method below, with $M$ even, the only interior exceptions are $j = 1$ and $j = M/2-1$, where the relative standard deviation is $\sqrt{37}/(6\sqrt{K}\,) = 1.0138\,K^{-1/2}$ instead of $K^{-1/2}$.
The price is resolution: the frequency grid is now spaced $2\pi/M$ instead of $2\pi/N$, and the main lobe is $K$ times wider. This trade — variance down by $K$, resolution down by $K$ — is the whole of the design problem. Welch's method is this procedure with a taper on each segment and the segments overlapped by half their length, which recovers part of the data that the tapers suppress at the cost of making the segments no longer independent.
:::

:::idea{provenance=original}
The periodogram is a squared Fourier sum, so everything about it follows from writing the square as a double sum over pairs of times and collecting terms by their separation.

Do that to the data and you get the sample autocovariance: that is part 1, and it is an identity, with no probability in it. Do the same to the expectation and the pair $(s,t)$ contributes $c(s-t)$, which depends only on $h = s-t$ by stationarity; there are $N - \lvert h\rvert$ pairs at separation $h$, so the triangular factor $1 - \lvert h\rvert/N$ appears, and that factor is precisely what converts the exact inversion sum into a convolution with the Fejer kernel. The record length enters only through the width of that kernel, which is why the bias disappears as $N$ grows.

The variance does not, and the reason is a counting argument. A record of length $N$ gives $N$ numbers, the periodogram evaluates them at about $N/2$ frequencies, and each value is built out of just two of them — the sine and cosine amplitudes at that frequency. The amount of data behind each estimate is two numbers however long the record is, and two numbers cannot have small relative error. That is part 3, and it also tells us the only possible cure: pool neighbouring or repeated estimates until the count is large. Part 4 pools repetitions in time; smoothing the periodogram across adjacent frequencies pools neighbours and does the same arithmetic.
:::

:::proof[Parts 1-4]{provenance=adapted src="arfken-2013:§20.6, Eq. (20.120) and Exercises 20.6.1 and 20.6.3(a), pp. 1004-1007; grimmett-stirzaker-2020:§9.3, the discrete-time spectral representation and the inversion formula (9.3.16), pp. 441-442"}
**Part 1.** Fix $j \ne 0$. Then $\sum_{t=0}^{N-1}\mathrm{e}^{-i\lambda_j t} = 0$ by the discrete orthogonality relation of :ref[]{to=fourier.dft-fft}, so replacing $x_t$ by $y_t = x_t - \bar x$ changes $J_N(\lambda_j)$ by $-\bar x\sum_t\mathrm{e}^{-i\lambda_j t} = 0$, that is, not at all. Expanding the modulus squared as a double sum,
$$
\bigl\lvert J_N(\lambda_j)\bigr\rvert^{2} = \sum_{s=0}^{N-1}\sum_{t=0}^{N-1} y_sy_t\,\mathrm{e}^{-i(s-t)\lambda_j} .
$$
Group the pairs by $h = s - t$, which runs over $-(N-1),\dots,N-1$; for fixed $h \ge 0$ the admissible $t$ are $0,\dots,N-1-h$, and the inner sum is $\sum_t y_{t+h}y_t = N\hat c(h)$ by the definition of $\hat c$, with the divisor $N$ cancelling. For $h<0$ the same with $\lvert h\rvert$, since $\hat c(-h) = \hat c(h)$. Hence $\lvert J_N(\lambda_j)\rvert^2 = N\sum_{\lvert h\rvert<N}\hat c(h)\mathrm{e}^{-ih\lambda_j}$, and dividing by $2\pi N$ gives the identity. Had we divided by $N - \lvert h\rvert$ in the definition of $\hat c$, the cancellation would not occur and each lag would be reweighted by $N/(N-\lvert h\rvert)$.

For the sum rule, the discrete Parseval identity of :ref[]{to=fourier.dft-fft}, written for $J_N(\lambda_j) = N\hat x(j)$, reads $\sum_{j}\lvert J_N(\lambda_j)\rvert^2 = N\sum_t\lvert x_t\rvert^2$. Dividing by $2\pi N$ and then multiplying by $2\pi/N$ gives the stated form.

**Part 2.** Write $m_t = w_t\mathrm{e}^{-i\lambda t}$. Since $\mathbb{E}X_t = 0$,
$$
\mathbb{E}\Bigl\lvert\sum_t w_tX_t\mathrm{e}^{-i\lambda t}\Bigr\rvert^{2}
= \sum_{s}\sum_{t} w_sw_t\,\mathbb{E}(X_sX_t)\,\mathrm{e}^{-i(s-t)\lambda}
= \sum_{s}\sum_{t} w_sw_t\,c(s-t)\,\mathrm{e}^{-i(s-t)\lambda} ,
$$
using stationarity in the last step to write $\mathbb{E}(X_sX_t) = c(s-t)$. Absolute summability of $c$ lets us substitute the spectral representation $c(s-t) = \int_{-\pi}^{\pi}\mathrm{e}^{i(s-t)\mu}g(\mu)\,d\mu$ of :ref[]{to=prob.stationary-processes} and exchange the finite double sum with the integral:
$$
= \int_{-\pi}^{\pi}\Bigl(\sum_{s}\sum_{t}w_sw_t\,\mathrm{e}^{i(s-t)(\mu-\lambda)}\Bigr)g(\mu)\,d\mu
= \int_{-\pi}^{\pi}\Bigl\lvert\sum_t w_t\,\mathrm{e}^{it(\mu-\lambda)}\Bigr\rvert^{2}g(\mu)\,d\mu ,
$$
the bracket having factorised into a sum times its own conjugate because $w$ is real. Dividing by $2\pi\sum_tw_t^2$ turns the integrand into $\Phi^w_N(\mu-\lambda)g(\mu)$, and $\Phi^w_N$ is even, which gives the stated form. That $\int\Phi^w_N = 1$ is the same computation with $g$ replaced by the constant $1/2\pi$ and $c$ by $\delta_{h0}$, or directly from orthogonality of the exponentials.

For the untapered case set $w_t\equiv1$ in the double sum and group by $h = s-t$ as in part 1: the number of pairs with $s - t = h$ is $N - \lvert h\rvert$, so
$$
\mathbb{E}\,I_N(\lambda) = \frac{1}{2\pi N}\sum_{\lvert h\rvert<N}(N - \lvert h\rvert)\,c(h)\mathrm{e}^{-ih\lambda}
= \frac{1}{2\pi}\sum_{\lvert h\rvert<N}\Bigl(1-\frac{\lvert h\rvert}{N}\Bigr)c(h)\mathrm{e}^{-ih\lambda} .
$$
Subtracting this from $g(\lambda) = (2\pi)^{-1}\sum_{h}c(h)\mathrm{e}^{-ih\lambda}$ and taking absolute values,
$$
\bigl\lvert\mathbb{E}I_N(\lambda) - g(\lambda)\bigr\rvert
\;\le\; \frac{1}{2\pi}\sum_{\lvert h\rvert<N}\frac{\lvert h\rvert}{N}\lvert c(h)\rvert + \frac{1}{2\pi}\sum_{\lvert h\rvert\ge N}\lvert c(h)\rvert ,
$$
with no $\lambda$ on the right. The second sum is the tail of a convergent series and goes to $0$. For the first, fix $\varepsilon>0$, choose $H$ with $\sum_{\lvert h\rvert\ge H}\lvert c(h)\rvert<\varepsilon$, and split at $H$: the part with $\lvert h\rvert<H$ is at most $(H/N)\sum_h\lvert c(h)\rvert \to 0$, and the part with $\lvert h\rvert \ge H$ is at most $\varepsilon$ because $\lvert h\rvert/N \le 1$. Hence the bound is eventually below $2\varepsilon/2\pi$, which is uniform convergence. The closed form of $\Phi_N$ is the geometric sum $\sum_{t<N}\mathrm{e}^{-i\theta t} = \mathrm{e}^{-i(N-1)\theta/2}\sin(N\theta/2)/\sin(\theta/2)$, whose modulus squared is $\sin^2(N\theta/2)/\sin^2(\theta/2)$; the sidelobe figures are the local maxima of that function, which for large $N$ occur near $\theta = 2\pi\cdot1.43/N$ at $4.7\%$ of the central value $N^2$.

**Part 3.** Write $J_N(\lambda_j) = A_j - iB_j$ with
$$
A_j = \sum_{t=0}^{N-1}X_t\cos(\lambda_j t), \qquad B_j = \sum_{t=0}^{N-1}X_t\sin(\lambda_j t) .
$$
Both are linear combinations of the independent Gaussians $X_t$, so the whole family $\{A_j, B_j\}$ is jointly Gaussian with mean zero (:ref[]{to=prob.multivariate-normal}), and its law is fixed by the covariances. With $0<j<N/2$ and $0<k<N/2$, independence of the $X_t$ gives
$$
\operatorname{cov}(A_j,A_k) = \sigma^2\sum_t\cos(\lambda_jt)\cos(\lambda_kt), \qquad
\operatorname{cov}(A_j,B_k) = \sigma^2\sum_t\cos(\lambda_jt)\sin(\lambda_kt),
$$
and similarly for $\operatorname{cov}(B_j,B_k)$. These are the discrete trigonometric orthogonality sums of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 20.6.1, p. 1007"}: the cosine-sine sum vanishes always, and the cosine-cosine and sine-sine sums vanish for $j\ne k$ and equal $N/2$ for $j = k$ in the stated range, the exceptional values $N$ and $0$ occurring only at $j = 0$ and $j = N/2$.

So $A_j$ and $B_j$ are independent $N(0,\sigma^2N/2)$ variables, independent also of $A_k, B_k$ for $k \ne j$ — for jointly Gaussian variables zero covariance is independence. Therefore
$$
\frac{A_j^2+B_j^2}{\sigma^2N/2}\;\sim\;\chi^2_2 ,
\qquad
I_N(\lambda_j) = \frac{A_j^2+B_j^2}{2\pi N} = \frac{\sigma^2}{4\pi}\cdot\frac{A_j^2+B_j^2}{\sigma^2N/2} \;\sim\; \frac{\sigma^2}{4\pi}\chi^2_2 ,
$$
by the definition of the chi-squared distribution as a sum of squares of independent standard normals (:ref[]{to=stats.sampling-distributions}). Since $g = \sigma^2/2\pi$ here, this is $I_N/g \sim \tfrac12\chi^2_2$. A $\chi^2_2$ variable has mean $2$ and variance $4$, so $\mathbb{E}I_N = g$ and $\operatorname{var}I_N = (g/2)^2\cdot4 = g^2$; and $\tfrac12\chi^2_2$ is the exponential distribution of mean $1$, because the chi-squared density with two degrees of freedom is $\tfrac12\mathrm{e}^{-u/2}$.

At $j=0$, $B_0 = 0$ and $A_0 = \sum_tX_t \sim N(0,N\sigma^2)$, so $I_N(0) = A_0^2/(2\pi N) \sim (\sigma^2/2\pi)\chi^2_1$; the same happens at $j = N/2$ for even $N$, where $\sin(\pi t) = 0$. This is the Hermitian symmetry $F_p = F^*_{N-p}$ of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 20.6.3(a), p. 1007"} seen from the probabilistic side: a real record of length $N$ has only $N$ independent real numbers in its transform, two at each of the $\lfloor (N-1)/2\rfloor$ interior frequencies and one at each self-conjugate end.

**Part 4.** The $K$ segments are disjoint blocks of independent variables, hence independent, so it is enough to find the law of one tapered segment periodogram. Repeat the decomposition of part 3 with the taper carried along: for a single segment $X_0,\dots,X_{M-1}$ put
$$
A_j = \sum_{t=0}^{M-1}w_tX_t\cos(\lambda_jt), \quad
B_j = \sum_{t=0}^{M-1}w_tX_t\sin(\lambda_jt), \quad
I^{w}_M(\lambda_j) = \frac{A_j^{2}+B_j^{2}}{2\pi\sum_tw_t^{2}} ,
$$
with $\lambda_j = 2\pi j/M$. The pair $(A_j,B_j)$ is centred Gaussian, and independence of the $X_t$ gives
$$
\operatorname{var}A_j = \sigma^2\!\sum_t w_t^2\cos^2(\lambda_jt), \quad
\operatorname{var}B_j = \sigma^2\!\sum_t w_t^2\sin^2(\lambda_jt), \quad
\operatorname{cov}(A_j,B_j) = \sigma^2\!\sum_t w_t^2\cos(\lambda_jt)\sin(\lambda_jt) .
$$
Adding the first two, $\operatorname{var}A_j + \operatorname{var}B_j = \sigma^2\sum_tw_t^2$ for every taper and every $j$, so
$$
\mathbb{E}\,I^{w}_M(\lambda_j) = \frac{\sigma^2\sum_tw_t^2}{2\pi\sum_tw_t^2} = \frac{\sigma^2}{2\pi} = g
$$
exactly: the mean never depends on the taper. The *difference*, on the other hand, does. By the double-angle identities,
$$
\operatorname{var}A_j - \operatorname{var}B_j = \sigma^2\sum_t w_t^2\cos(2\lambda_jt),
\qquad
2\operatorname{cov}(A_j,B_j) = \sigma^2\sum_t w_t^2\sin(2\lambda_jt) ,
$$
and these are the real and imaginary parts of $\sigma^2\sum_tw_t^2\mathrm{e}^{-2i\lambda_jt}$ up to a sign. So $A_j$ and $B_j$ are uncorrelated with the *same* variance $\tfrac12\sigma^2\sum_tw_t^2$ precisely when condition **(T)** holds. For $w_t\equiv1$ the two sums are $\sum_t\cos(2\lambda_jt)$ and $\sum_t\sin(2\lambda_jt)$, which vanish unless $2\lambda_j$ is $0$ modulo $2\pi$, that is unless $2j \equiv 0 \pmod M$; for $0<j<M/2$ we have $0 < 2j < M$, so **(T)** holds at every interior frequency and part 3 is recovered.

Where **(T)** holds, $A_j$ and $B_j$ are independent $N(0,\tfrac12\sigma^2\sum_tw_t^2)$ — zero covariance is independence for a jointly Gaussian pair — so $(A_j^2+B_j^2)\big/\bigl(\tfrac12\sigma^2\sum_tw_t^2\bigr)\sim\chi^2_2$ and $I^w_M(\lambda_j)\sim(\sigma^2/4\pi)\chi^2_2 = \tfrac12 g\chi^2_2$, as in part 3. A sum of $K$ independent $\chi^2_2$ variables is $\chi^2_{2K}$, so $K\bar I/g\sim\tfrac12\chi^2_{2K}$, that is $\bar I/g \sim \chi^2_{2K}/(2K)$. Its mean is $2K/(2K)=1$ and its variance is $4K/(2K)^2 = 1/K$, giving relative standard deviation $K^{-1/2}$.

Where **(T)** fails, let $\Sigma$ be the covariance matrix of $(A_j,B_j)$ and $\sigma_1^2\ge\sigma_2^2$ its eigenvalues. Rotating the plane by an orthogonal matrix leaves $A_j^2+B_j^2$ unchanged and diagonalises $\Sigma$, so $A_j^2+B_j^2$ has the law of $\sigma_1^2Z_1^2+\sigma_2^2Z_2^2$ with $Z_1,Z_2$ independent standard normal. Hence its mean is $\sigma_1^2+\sigma_2^2 = \operatorname{tr}\Sigma = \sigma^2\sum_tw_t^2$, confirming the mean once more, while its variance is $2\sigma_1^4+2\sigma_2^4$, so the relative standard deviation of one segment is
$$
\frac{\sqrt{2(\sigma_1^4+\sigma_2^4)}}{\sigma_1^2+\sigma_2^2} \;\ge\; 1 ,
$$
with equality only when $\sigma_1 = \sigma_2$, that is only under **(T)**; and a weighted sum of two chi-squares with unequal weights is not a multiple of $\chi^2_2$. Averaging $K$ independent segments divides this ratio by $\sqrt K$.

For the Hann taper $w_t = \tfrac12(1-\cos(2\pi t/M))$ one has $w_t^2 = \tfrac18\bigl(3 - 4\cos(2\pi t/M) + \cos(4\pi t/M)\bigr)$, a trigonometric polynomial carrying only the frequencies $0,\pm2\pi/M,\pm4\pi/M$. By discrete orthogonality, $\sum_tw_t^2\mathrm{e}^{-2i\lambda_jt}$ therefore vanishes unless $2\lambda_j$ is one of those frequencies modulo $2\pi$, that is unless $2j\equiv0,\pm1,\pm2\pmod M$; for even $M$ and $0<j<M/2$ the only solutions are $j=1$ and $j=M/2-1$. At those two, $\sum_tw_t^2 = 3M/8$ and $\sum_tw_t^2\cos(2\lambda_jt) = M/16$ with the sine sum zero, so $\sigma_1^2 = \tfrac{7}{32}\sigma^2M$ and $\sigma_2^2 = \tfrac{5}{32}\sigma^2M$ and the ratio above is $\sqrt{2(7^2+5^2)}/(7+5) = \sqrt{148}/12 = \sqrt{37}/6 = 1.0138$, independently of $M$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Stationarity is used once, in part 2**, to replace $\mathbb{E}(X_sX_t)$ by a function of $s-t$. Nothing else needs it: part 1 is an algebraic identity about numbers. This is why a periodogram of a record with a trend in it is not wrong so much as meaningless — the trend is a huge low-frequency feature whose sidelobes contaminate the whole spectrum, and no amount of averaging removes it. Detrend first.
- **Zero mean is assumed in part 2** and matters for the same reason. Adding a constant $\mu$ to every $x_t$ adds $\mu^2\Phi_N(\lambda)$ to the *expectation* of the periodogram — the cross term between the constant and the process averages to zero — and $\mu^2\Phi_N$ is, by the definition of $\Phi_N$, a copy of the whole spectral window, peak and sidelobes alike, centred on zero frequency. That is a term of size $\mu^2N/2\pi$ at $\lambda=0$ with sidelobes stretching across the band. Subtracting $\bar x$ removes it exactly; part 1 is stated for $j\ne0$ because that is where subtracting the mean leaves $J_N$ unchanged, and the mean-removed periodogram is identically zero at $j=0$.
- **Absolute summability of $c$ is used twice in part 2**: to justify exchanging the double sum with the integral, and to make the tail estimate that gives uniform convergence. It is a sufficient condition, not a necessary one — :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="(9.3.18), p. 442"} say so where they state it — and it excludes in particular every process with a spectral atom, such as a deterministic sinusoid of random phase, whose spectral distribution has a jump and no density. For those the periodogram does something different and better: at the matching Fourier frequency its value grows linearly in $N$, which is how a line is detected rather than estimated. But an atom is not the only obstruction, and the summability is genuinely stronger than having a density: it also fails for processes whose spectral measure is absolutely continuous and whose autocovariance merely decays too slowly, the long-memory spectra with a singularity at the origin. The density $g(\lambda) = \log 2 - \log\lvert 2\sin(\lambda/2)\rvert$ is non-negative, with minimum $g(\pi)=0$, and integrable, with total mass $2\pi\log2 = 4.35517$, so it carries no atom whatever; yet its autocovariances are $c(n) = \pi/\lvert n\rvert$ for $n\ne0$, and $\sum_n\lvert c(n)\rvert$ diverges harmonically. More generally $c(n)\sim\lvert n\rvert^{-\alpha}$ with $0<\alpha\le1$ goes with an integrable $\lvert\lambda\rvert^{\alpha-1}$ singularity of $g$ at $\lambda=0$ and is never summable. Part 2 therefore says nothing about exactly the case in which periodogram bias is worst — a spectrum that climbs without bound at low frequency, where the window's sidelobes have an unbounded feature to draw power from.
- **Gaussianity is used only in part 3**, to pass from uncorrelated to independent and to name the law. Without it, $\mathbb{E}I_N$ and $\operatorname{var}I_N$ are unchanged to leading order but the distribution is not chi-squared at finite $N$. The qualitative conclusion — relative error of order one, not shrinking with $N$ — is not special to the Gaussian case.
- **Whiteness is used in part 3** to make the covariance sums collapse to the orthogonality relations. The corresponding statement for a general Gaussian stationary process with a continuous, strictly positive spectral density is that $I_N(\lambda_j)/g(\lambda_j) \to \tfrac12\chi^2_2$ in distribution, independently across fixed distinct frequencies; we state this without proof, and use only the white-noise case, which is exact at every $N$ and is also the case that matters for setting detection thresholds.
- **Condition (T) is what part 4 needs of the taper**, and only for the distributional claim: the mean $\mathbb{E}\bar I = g$ holds for every taper at every frequency, because it depends on $\sum_tw_t^2$ alone. What **(T)** buys is that the cosine and sine amplitudes be uncorrelated *and of equal variance*, which is what makes the two of them a $\chi^2_2$ rather than a weighted sum of two $\chi^2_1$s. Dropping it costs little in practice — for the Hann taper it fails at two frequencies out of $M/2$, and inflates the standard deviation there by $1.4\%$ — but the law is then not exactly chi-squared, and the error bars of step 8 are correspondingly approximate at those frequencies.
- **Independence of segments is used in part 4**, both to add the chi-squared variables and to divide the variance by $K$. Welch's overlapped segments are not independent, so the effective count of degrees of freedom is not $2K$ and has to be worked out for the particular taper and overlap; quoting $2K$ for overlapped segments is a genuine, if usually small, misstatement of the error bars.
- **Equispaced samples are assumed everywhere.** For a gapped or irregular record the exponentials are no longer orthogonal, $\Phi_N$ acquires large sidelobes at the gap frequencies, and the clean statements above all fail.
:::

:::method[Estimating a spectrum from a record]{provenance=original}
1. **Check the sampling.** Frequencies above $\pi/\Delta$ cannot be represented and appear folded back onto lower ones; this is the aliasing of :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Example 20.6.1, p. 1006"} Example 20.6.1 and of :ref[]{to=fourier.sampling-theorem}. Aliasing is a property of the measurement, not of the analysis, and must be prevented by an anti-alias filter (:ref[]{to=stats.linear-filters}) before sampling, not after.
2. **Remove the mean, then any trend**, by least squares (:ref[]{to=stats.least-squares-regression}); remove a known periodic cycle too if it is not the object of study. Record how many parameters you removed.
3. **Choose the trade-off.** Decide the frequency resolution $\delta\lambda$ you need; that fixes the segment length $M \approx 2\pi/\delta\lambda$, and then $K = \lfloor N/M\rfloor$ segments fix the relative error $K^{-1/2}$. Doing this consciously, in this order, is the entire design.
4. **Taper each segment.** A Hann taper $w_t = \tfrac12\bigl(1-\cos(2\pi t/M)\bigr)$ is the default: it lowers the first sidelobe from the $-13.3$ decibels of the untapered window to about $-31.5$ decibels, at the cost of a main lobe twice as wide. Use no taper only when the spectrum is known to be nearly flat, and a more aggressive taper when a strong line sits near a weak feature.
5. **Transform and square.** Compute $\sum_t w_tx_t\mathrm{e}^{-i\lambda_jt}$ by the FFT (:ref[]{to=fourier.dft-fft}), take the squared modulus, divide by $2\pi\sum_tw_t^2$.
6. **Average the segments** and, if more smoothness is wanted, additionally average over adjacent frequencies; $L$ neighbouring bins multiply the degrees of freedom by about $L$ and widen the resolution by the same factor.
7. **Check the scale.** Verify $\frac{2\pi}{M}\sum_j\bar I(\lambda_j) \approx$ the sample variance of the record. If it does not, a factor of $2\pi$, of $N$, or of $\Delta$ is wrong. Convert to physical units at the very end: density per unit angular frequency is $\Delta\bar I$, per unit ordinary frequency $2\pi\Delta\bar I$.
8. **Put error bars on, and compare with a null.** With $\nu$ degrees of freedom the interval $[\nu\bar I/q_{1-\alpha/2},\ \nu\bar I/q_{\alpha/2}]$, with $q_p$ the $p$-quantile of $\chi^2_\nu$, covers $g(\lambda)$ with probability $1-\alpha$ (:ref[]{to=stats.confidence-intervals}); plot it on a logarithmic axis, where its width is the same at every frequency. A peak counts as detected only against a stated null spectrum, usually the red-noise spectrum of :ref[]{to=stats.autoregressive-models} rather than a flat one, and only after allowing for the number of frequencies searched (:ref[]{to=stats.hypothesis-testing}).
:::

:::example[A line, its leakage, and the bias of a smooth spectrum]{provenance=original}
**Part A: a line exactly on the grid.** Take $N = 8$ and $x_t = 3 + 2\cos(\pi t/2)$ for $t = 0,\dots,7$, that is the record $(5,3,1,3,5,3,1,3)$. Its mean is $3$; subtracting it leaves $y_t = (2,0,-2,0,2,0,-2,0)$. The frequency $\pi/2$ is $\lambda_2 = 2\pi\cdot2/8$, a Fourier frequency, so write $y_t = \mathrm{e}^{i\lambda_2 t} + \mathrm{e}^{-i\lambda_2t}$. Then
$$
J_8(\lambda_2) = \sum_{t=0}^{7}\bigl(\mathrm{e}^{i\lambda_2t}+\mathrm{e}^{-i\lambda_2t}\bigr)\mathrm{e}^{-i\lambda_2t} = 8 + 0 = 8 ,
$$
the second sum vanishing by orthogonality, and likewise $J_8(\lambda_6) = 8$ while $J_8(\lambda_j) = 0$ for every other $j$. Hence
$$
I_8(\lambda_2) = I_8(\lambda_6) = \frac{8^2}{2\pi\cdot8} = \frac{4}{\pi} = 1.27324 ,
$$
and zero elsewhere. Check with part 1: $\frac{2\pi}{8}\bigl(2\cdot\frac4\pi\bigr) = 2$, and the mean square of $y$ is $(4+4+4+4)/8 = 2$. The two agree. Note what happens if the mean is *not* removed: $J_8(0) = 24$, so $I_8(0) = 576/(16\pi) = 11.459$, nine times the signal peak, sitting where no signal is.

**Part B: the same line half a bin off, with and without a taper.** Now take $N = 16$ and $x_t = \cos(2\pi\cdot3.5\,t/16)$, a frequency exactly between $\lambda_3$ and $\lambda_4$. The record no longer contains a whole number of cycles, so no single $J_{16}(\lambda_j)$ captures it. Computing the sixteen values gives, for the untapered periodogram,
$$
I_{16}(\lambda_3) = 0.25121, \quad I_{16}(\lambda_4) = 0.27130, \quad I_{16}(\lambda_2) = 0.02892, \quad I_{16}(\lambda_5) = 0.03538, \ \dots
$$
with total $\sum_jI_{16}(\lambda_j) = 4/\pi = 1.27324$. The two bins flanking the true frequency hold
$$
\frac{2(0.25121+0.27130)}{1.27324} = 82.08\%
$$
of the power (the factor $2$ counts the mirror bins $\lambda_{12},\lambda_{13}$), the nearest four hold $92.18\%$, and the remaining $7.8\%$ is spread over the rest of the spectrum. That residue is leakage, and it is what a weak feature elsewhere in the spectrum has to compete with. Repeating with the Hann taper $w_t = \tfrac12(1-\cos(2\pi t/16))$ gives $96.14\%$ in the two nearest bins and $99.93\%$ in the nearest four: leakage falls by more than two orders of magnitude. The taper concentrates the peak *better* here, which is a feature of the half-bin offset: it is the offset that excites the untapered sidelobes maximally, and those sidelobes, $18$ decibels above the Hann ones, carry away more than the wider Hann main lobe does. The price of the taper is paid not here but in resolution, because the main lobe is twice as wide, $8\pi/N$ against $4\pi/N$: two lines between one and two bins apart, which the untapered window still shows as two peaks, the Hann window merges into one.

**Part C: the bias on a smooth spectrum.** Let $X_n = Z_n + \theta Z_{n-1}$ with the $Z_n$ uncorrelated of mean $0$ and variance $\sigma^2$. This is the moving average process of :cite[Grimmett and Stirzaker's]{work=grimmett-stirzaker-2020 loc="§9.7, Problem 7(a), p. 468"} Problem 7 in §9.7, who write the coefficient $\alpha$ for our $\theta$ and take the $Z_n$ to have unit variance; we keep a general $\sigma^2$, which only multiplies everything below. Its autocovariance is $c(0) = (1+\theta^2)\sigma^2$, $c(\pm1) = \theta\sigma^2$ and $c(h) = 0$ for $\lvert h\rvert\ge2$, so by the inversion formula
$$
g(\lambda) = \frac{\sigma^2}{2\pi}\bigl(1 + \theta^2 + 2\theta\cos\lambda\bigr) .
$$
Because only the lags $0$ and $\pm1$ are present, part 2 gives the expectation of the untapered periodogram in closed form at every $N$:
$$
\mathbb{E}\,I_N(\lambda) = \frac{\sigma^2}{2\pi}\Bigl(1+\theta^2 + 2\theta\Bigl(1-\frac1N\Bigr)\cos\lambda\Bigr)
= g(\lambda) - \frac{\theta\sigma^2\cos\lambda}{\pi N} .
$$
Put $\theta = \tfrac12$, $\sigma^2 = 1$, $N = 8$. At $\lambda = 0$ the truth is $g(0) = 2.25/2\pi = 0.358099$ and the expectation is $2.125/2\pi = 0.338204$, low by $5.56\%$. At $\lambda = \pi$ the truth is $g(\pi) = 0.25/2\pi = 0.039789$ and the expectation is $0.375/2\pi = 0.059683$, **high by exactly $50\%$**. The absolute bias is the same at both ends, $0.019894 = 1/(16\pi)$; it is the relative bias that explodes where the spectrum is small, which is the general rule and the reason spectra are plotted on a logarithmic axis. At $\lambda = \pi/2$, where $\cos\lambda = 0$, the periodogram is exactly unbiased at every $N$.
:::

:::application{provenance=original}
**Detecting periodicity against a coloured background.** The periodogram of a palaeoclimate record is how the Milankovitch periods near $19$, $23$, $41$ and $100$ thousand years were established; the periodogram of a stellar light curve is how a pulsation mode is identified. In both cases the finding is not the peak but the peak's height relative to a fitted null spectrum and to the number of frequencies searched. Part 3 is the reason this must be done carefully: a raw periodogram of pure red noise produces, at each of $N/2$ frequencies independently, an exponential variable, so the largest of them exceeds its mean by a factor $\ln(N/2)$ as a matter of course — about $6$ for a record of a thousand points. Peaks of that size are the null hypothesis, not evidence against it.

**Instrument noise characterisation.** The specification of an amplifier, an accelerometer or a gravitational-wave detector is quoted as an amplitude spectral density, $\sqrt{g(\lambda)}$ in units of signal per root hertz, and is measured by exactly the Welch procedure of part 4: minutes of data, split into hundreds of overlapping tapered segments, averaged. Here the smooth broadband shape is the quantity of interest and resolution is worth little, so $K$ is taken as large as the record allows. The narrow lines that stick out of such a spectrum — mains hum and its harmonics, mechanical resonances — are diagnosed by the opposite choice, one long untapered transform.

**Turbulence and the inertial range.** Measuring the exponent in a power-law spectrum $g(\lambda)\propto\lambda^{-5/3}$ is a case where leakage, not variance, is the enemy: the spectrum spans many decades, so the sidelobes of the untapered window at the energetic large scales sit above the true signal at the small scales and flatten the measured slope. Part 2 quantifies this, and the remedy is the taper of step 4 rather than more averaging.
:::
