---
id: stats.linear-filters
title: Linear filters
kind: method
level: core
summary: Shows that a linear time-invariant operation on a signal is a convolution, that complex exponentials pass through it unchanged except for multiplication by its transfer function, and that it multiplies the power spectral density of a stationary process by the squared gain; then turns those facts into a design recipe for moving averages and for low-pass, high-pass and band-pass filters, with the Gibbs ripple and the causality constraint that limit what can be built.
prereqs: [fourier.convolution-theorem, fourier.fourier-transform, fourier.fourier-inversion, fourier.dft-fft, fourier.parseval-mean-square, fourier.gibbs-phenomenon, fourier.fejer-theorem, prob.stationary-processes]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§20.5 Signal-processing applications, pp. 997-1002: the resolution (20.100)-(20.101) of a pulse into its angular-frequency components in the scaling with the whole $1/2\\pi$ on the synthesis integral; the linear-response assumption and Eq. (20.102), $g_\\omega(t) = \\varphi(\\omega)f_\\omega(t)$, defining the transfer function $\\varphi$, with the box-and-wires diagram of Fig. 20.8; Eq. (20.103) for the output of a general input; the recognition of (20.103) as a transform of a product and the resulting convolution (20.104) with the transform $\\Phi$ of $\\varphi$; the causality requirement (20.105) that $\\Phi(t-t')=0$ for $t'>t$, the truncated form (20.106), and the reality of $\\Phi$; Example 20.5.1 and Eqs. (20.107)-(20.109), the high-pass $RC$ filter with $\\varphi(\\omega) = i\\omega RC/(1+i\\omega RC)$ obtained from Kirchhoff's loop equation with complex amplitudes, together with its two limits; Eqs. (20.110)-(20.113), the separation of $\\varphi = u + iv$ into an even real and an odd imaginary part and the interdependence that causality forces between them; and Exercises 20.5.1-20.5.4 with Figs. 20.10-20.12, the companion low-pass circuit, a band-pass circuit, and the question of when a cascade's transfer function is the product of the individual ones"
    pages: "997-1002"
    role: the whole continuous-time framework used here - the definition of the transfer function through the response to a single frequency, the derivation of the convolution form from it, the causality condition on the impulse response and its consequence for the real and imaginary parts of the transfer function, the $RC$ circuit worked by Kirchhoff's equation in complex amplitudes, and the cascade rule
  - work: grimmett-stirzaker-2020
    loc: "§9.7, Problem 2, p. 468: for a stationary sequence $\\{Y_k\\}$ of variance $\\sigma_Y^2$ and the filtered sequence $X_n = \\sum_{k=0}^{r}a_kY_{n-k}$, the spectral density $f_X(\\lambda) = (\\sigma_Y^2/\\sigma_X^2)f_Y(\\lambda)\\lvert G_a(\\mathrm{e}^{i\\lambda})\\rvert^2$ with $G_a(z) = \\sum_{k=0}^{r}a_kz^k$ and $\\sigma_X^2 = \\operatorname{var}(X_1)$, and the exponential-smoothing case $r=\\infty$, $a_k = \\mu^k(1-\\mu)$ with $0<\\mu<1$; §9.7, Problem 7, p. 468, the moving average $X_n = Z_n+\\alpha Z_{n-1}$ and its $r$-term generalisation built from uncorrelated $Z_n$ of zero mean and unit variance; §9.3, pp. 438-442, the autocovariance and autocorrelation of a weakly stationary sequence, the discrete-time spectral representation on $(-\\pi,\\pi]$ and the inversion formula (9.3.16) with the summability condition (9.3.18)"
    pages: "438-442, 468"
    role: the spectral transfer theorem for a filtered stationary sequence, stated in the normalised form in which the ratio of variances appears; exponential smoothing and the finite moving average as the two standard examples; and the spectral representation of the autocovariance that the proof substitutes into
  - work: rhb-2006
    loc: "§13.4, Exercise 13.12, p. 462: a function $x(t)$ sampled at spacing $T$ and fed, as the train $\\sum_n x(nT)\\delta(t-nT)$, into a filter whose response to a unit delta input is the triangle through $(0,0)$, $(T,1/T)$ and $(2T,0)$ and zero elsewhere; the output taken to be the convolution of input with response; and the resulting output written, via the convolution theorem, as an integral containing $\\operatorname{sinc}^2(\\omega T/2)$. §13.4, Exercise 13.15, p. 463: a linear amplifier whose output is the convolution of its input with its response function, specified by the transform $\\widetilde K(\\omega) = i\\omega/[\\sqrt{2\\pi}(\\alpha+i\\omega)^2]$"
    pages: "462-463"
    role: two worked instances of the same picture in the physicists' idiom - a filter specified by its response to a delta input, the output as a convolution, and the transfer function obtained by transforming; in particular the triangular response whose transfer function is the square of a sinc, which is the interpolation filter discussed in the method
---

:::definition[Filters, impulse response, transfer function]{provenance=adapted src="arfken-2013:§20.5, Eqs. (20.100)-(20.106), pp. 997-999"}
A **filter** is a map $L$ taking an input signal to an output signal which is

- **linear**: $L(\alpha x_1 + \beta x_2) = \alpha Lx_1 + \beta Lx_2$, and
- **time-invariant**: delaying the input by any amount delays the output by the same amount and changes nothing else.

In continuous time the input is $x:\mathbb{R}\to\mathbb{C}$ and the output is
$$
y(t) \;=\; (\Phi * x)(t) \;=\; \int_{-\infty}^{\infty}\Phi(t-t')\,x(t')\,dt' ,
$$
with $\Phi$ the **impulse response**, the output produced by a unit impulse at the origin. Its Fourier transform
$$
\varphi(\omega) \;=\; \int_{-\infty}^{\infty}\Phi(t)\,\mathrm{e}^{-i\omega t}\,dt
$$
is the **transfer function**; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.5, Eq. (20.102), p. 998"} introduce it the other way round, as the factor by which the device multiplies a pure input frequency, and draw it as a labelled box between an input and an output wire.

In discrete time the input is a sequence $(x_n)$ and the filter is given by its **weights** $(a_k)_{k\in\mathbb{Z}}$,
$$
y_n \;=\; \sum_{k\in\mathbb{Z}} a_k\,x_{n-k} ,
$$
assumed throughout to satisfy $\sum_k\lvert a_k\rvert<\infty$. Its transfer function is the $2\pi$-periodic function
$$
A(\lambda) \;=\; \sum_{k\in\mathbb{Z}} a_k\,\mathrm{e}^{-ik\lambda}, \qquad \lambda\in(-\pi,\pi] ,
$$
whose modulus $\lvert A(\lambda)\rvert$ is the **gain** and whose argument $-\arg A(\lambda)$ is the **phase lag** at frequency $\lambda$. The **power gain** is $\lvert A\rvert^2$, and a frequency at which the power gain is half its maximum is a **half-power point**.

A filter is **causal** when the output at $t$ uses no input from after $t$: $\Phi(t) = 0$ for $t<0$, or $a_k = 0$ for $k<0$. It is **finite** (FIR) when only finitely many $a_k$ are non-zero, and **recursive** (IIR) when $y_n$ is computed from earlier outputs as well as inputs; the autoregressive schemes of :ref[]{to=stats.autoregressive-models} are the standard recursive filters, and are not treated here.

Three special cases name themselves. A filter is a **low-pass** when $\lvert A\rvert$ is near $1$ for small $\lvert\lambda\rvert$ and near $0$ near $\lambda = \pi$, a **high-pass** when the roles are exchanged, and a **band-pass** when $\lvert A\rvert$ is near $1$ only on an interval $0<\lambda_1<\lvert\lambda\rvert<\lambda_2<\pi$. A **moving average** is a low-pass filter with non-negative weights summing to $1$.
:::

:::statement[What a filter does to a signal and to a spectrum]{provenance=adapted src="arfken-2013:§20.5, Eqs. (20.102)-(20.106) and (20.110)-(20.113), pp. 998-1001; grimmett-stirzaker-2020:§9.7, Problem 2, p. 468"}
Let $L$ be a filter as above.

**1. Complex exponentials are its eigenfunctions.** In discrete time, feeding $x_n = \mathrm{e}^{in\lambda}$ into the filter gives
$$
y_n \;=\; A(\lambda)\,\mathrm{e}^{in\lambda} ,
$$
and in continuous time $x(t) = \mathrm{e}^{i\omega t}$ gives $y(t) = \varphi(\omega)\mathrm{e}^{i\omega t}$. A filter changes the amplitude and the phase of each frequency and nothing else; it creates no new frequency. This is the assumption :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.5, Eq. (20.102), p. 998"} make explicitly as the definition of a linear response, listing its three parts: same frequency out as in, output proportional to input, and no interference between frequencies present at once.

**2. Equivalently, the transform multiplies.** $\widehat{Lx}(\omega) = \varphi(\omega)\hat x(\omega)$, by the convolution theorem (:ref[]{to=fourier.convolution-theorem}). Running the identification backwards recovers the convolution: because the output $\frac{1}{2\pi}\int\varphi(\omega)\hat x(\omega)\mathrm{e}^{i\omega t}d\omega$ is the inverse transform of a product, it is a convolution, which is how Arfken, Weber and Harris reach their Eq. (20.104). For a cascade of two filters the transfer functions multiply, $\varphi = \varphi_2\varphi_1$, and the impulse responses convolve.

**3. Real weights make the gain even and the phase odd; symmetric weights make the phase zero.** If every $a_k$ is real then $A(-\lambda) = \overline{A(\lambda)}$, so $\lvert A\rvert$ is even and $\arg A$ is odd, and a real input gives a real output. If in addition $a_{-k} = a_k$, then
$$
A(\lambda) = a_0 + 2\sum_{k\ge1}a_k\cos k\lambda
$$
is real, so the filter delays nothing: the only phase it can apply is a sign, $0$ where $A>0$ and $\pi$ where $A<0$. A symmetric filter is never causal, apart from the trivial multiple of the identity, and a causal filter is never zero-phase; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.5, Eqs. (20.110)-(20.113), pp. 1000-1001"} show the continuous-time form of the obstruction, that causality ties the real and imaginary parts of $\varphi$ together through the relation
$$
\int_0^{\infty}u(\omega)\cos\omega t\,d\omega = -\int_0^{\infty}v(\omega)\sin\omega t\,d\omega \qquad (t>0),
\qquad \varphi = u+iv .
$$
A filter run forwards and then backwards over a stored record has transfer function $\lvert A\rvert^2$, which is real and non-negative: that is how zero phase is obtained in practice from a causal design.

**4. Spectral transfer.** Let $X = \{X_n\}$ be real, weakly stationary, with autocovariance $c_X$ and power spectral density $g_X(\lambda) = (2\pi)^{-1}\sum_n c_X(n)\mathrm{e}^{-in\lambda}$, and let $Y_n = \sum_k a_kX_{n-k}$ with real weights and $\sum_k\lvert a_k\rvert<\infty$. Then $Y$ is weakly stationary, with
$$
c_Y(m) \;=\; \sum_{j}\sum_{k} a_ja_k\,c_X(m-k+j)
\qquad\text{and}\qquad
\boxed{\;g_Y(\lambda) \;=\; \bigl\lvert A(\lambda)\bigr\rvert^{2}\,g_X(\lambda)\;}
$$
for every $\lambda\in(-\pi,\pi]$. In particular, for white noise input of variance $\sigma^2$, where $g_X \equiv \sigma^2/2\pi$,
$$
g_Y(\lambda) = \frac{\sigma^2}{2\pi}\lvert A(\lambda)\rvert^{2},
\qquad
\operatorname{var}Y_n = \sigma^{2}\sum_k a_k^{2} .
$$

:cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§9.7, Problem 2, p. 468"} state this as Problem 2 of §9.7, for a one-sided finite filter $X_n = \sum_{k=0}^{r}a_kY_{n-k}$ and in terms of the normalised spectral density of the autocorrelation function, in which form a ratio of variances appears:
$$
f_{\text{out}}(\lambda) = \frac{\sigma_{\text{in}}^2}{\sigma_{\text{out}}^2}\,f_{\text{in}}(\lambda)\,\bigl\lvert G_a(\mathrm{e}^{i\lambda})\bigr\rvert^{2},
\qquad G_a(z) = \sum_{k=0}^{r}a_kz^{k} .
$$
Multiplying both sides by $\sigma^2_{\text{out}}$ turns their statement into the boxed one, since $g = \sigma^2f$ and $\lvert G_a(\mathrm{e}^{i\lambda})\rvert = \lvert A(\lambda)\rvert$ for real weights. The boxed form is the one used below.
:::

:::idea{provenance=original}
A filter commutes with time shifts, and the complex exponentials are exactly the signals that a time shift multiplies by a constant. So in the basis of exponentials the filter must be diagonal, and the number sitting on the diagonal at frequency $\lambda$ is the transfer function. Everything in the statement is a restatement of that one sentence: the convolution form is the diagonal operator written in the time domain, the cascade rule is that diagonal matrices commute and multiply entrywise, and the spectral transfer is the same diagonalisation applied to the second moments rather than to the signal.

For part 4 the only extra ingredient is that the autocovariance is itself a superposition of exponentials, $c_X(h) = \int\mathrm{e}^{ih\lambda}g_X(\lambda)d\lambda$. Expanding $c_Y$ as a double sum over the weights and substituting that representation lets the two sums be done separately, one producing $\sum_ja_j\mathrm{e}^{ij\lambda}$ and the other its complex conjugate; their product is $\lvert A\rvert^2$. The squaring is not an accident of the algebra: covariance is quadratic in the signal, so a filter that halves an amplitude quarters the power at that frequency.
:::

:::proof[Parts 1-4]{provenance=adapted src="arfken-2013:§20.5, pp. 998-999; grimmett-stirzaker-2020:§9.7, Problem 2, p. 468"}
**Part 1.** Substitute $x_n = \mathrm{e}^{in\lambda}$ into the definition:
$$
y_n = \sum_k a_k\,\mathrm{e}^{i(n-k)\lambda} = \Bigl(\sum_k a_k\mathrm{e}^{-ik\lambda}\Bigr)\mathrm{e}^{in\lambda} = A(\lambda)\,\mathrm{e}^{in\lambda} ,
$$
the factorisation being legitimate because $\mathrm{e}^{i(n-k)\lambda} = \mathrm{e}^{in\lambda}\mathrm{e}^{-ik\lambda}$ and the series converges absolutely, by the hypothesis $\sum_k\lvert a_k\rvert<\infty$ and $\lvert\mathrm{e}^{-ik\lambda}\rvert = 1$. The continuous-time computation is the same with an integral: $\int\Phi(t-t')\mathrm{e}^{i\omega t'}dt' = \mathrm{e}^{i\omega t}\int\Phi(u)\mathrm{e}^{-i\omega u}du$ after the substitution $u = t-t'$.

**Part 2.** The identity $\widehat{\Phi*x} = \hat\Phi\hat x = \varphi\hat x$ is the convolution theorem of :ref[]{to=fourier.convolution-theorem}, which needs only $\Phi, x\in L^1(\mathbb{R})$. For the cascade, apply it twice: $\widehat{L_2L_1x} = \varphi_2\widehat{L_1x} = \varphi_2\varphi_1\hat x$, and by uniqueness of the transform (:ref[]{to=fourier.fourier-inversion}) the composite filter is the one with transfer function $\varphi_2\varphi_1$, whose impulse response is $\Phi_2*\Phi_1$.

**Part 3.** If the $a_k$ are real then $\overline{A(\lambda)} = \sum_k a_k\mathrm{e}^{ik\lambda} = A(-\lambda)$, from which $\lvert A(-\lambda)\rvert = \lvert A(\lambda)\rvert$ and $\arg A(-\lambda) = -\arg A(\lambda)$. If moreover $a_{-k} = a_k$, pair the terms $k$ and $-k$:
$$
A(\lambda) = a_0 + \sum_{k\ge1}a_k\bigl(\mathrm{e}^{-ik\lambda}+\mathrm{e}^{ik\lambda}\bigr) = a_0 + 2\sum_{k\ge1}a_k\cos k\lambda ,
$$
a real number. A real $A$ has argument $0$ or $\pi$, which is the claim. Symmetry forces $a_{-k} = a_k \ne 0$ for some $k>0$ unless the filter is a multiple of the identity, so a symmetric filter is not causal. For the forward-backward trick, running the filter backwards over a stored record applies the weights $a_{-k}$, whose transfer function is $\sum_ka_{-k}\mathrm{e}^{-ik\lambda} = \overline{A(\lambda)}$ for real weights, and by the cascade rule the two passes compose to $A\overline{A} = \lvert A\rvert^2$. The causality relations are :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="§20.5, Eqs. (20.111)-(20.113), pp. 1000-1001"} Eqs. (20.111)-(20.113), obtained by splitting $\varphi(\omega) = \int_0^{\infty}\Phi(t)\mathrm{e}^{-i\omega t}dt$ into real and imaginary parts, observing that the first is even and the second odd in $\omega$, and inverting each as a cosine and as a sine transform of the same $\Phi$.

**Part 4.** $Y_n$ has constant mean $\mathbb{E}Y_n = (\sum_ka_k)\mathbb{E}X_0$, finite because $\sum_k\lvert a_k\rvert<\infty$. Take $\mathbb{E}X_n = 0$ without loss of generality, by subtracting the mean from both sides. Then
$$
c_Y(m) = \mathbb{E}\bigl(Y_nY_{n+m}\bigr)
= \mathbb{E}\Bigl(\sum_ja_jX_{n-j}\sum_ka_kX_{n+m-k}\Bigr)
= \sum_j\sum_k a_ja_k\,c_X\bigl(m-k+j\bigr) ,
$$
where the expectation has been taken inside the double sum — justified because $\sum_{j,k}\lvert a_ja_k\rvert\,\mathbb{E}\lvert X_{n-j}X_{n+m-k}\rvert \le c_X(0)\bigl(\sum_k\lvert a_k\rvert\bigr)^2 <\infty$ by the Cauchy-Schwarz inequality applied to each term — and stationarity of $X$ has been used to write $\mathbb{E}(X_{n-j}X_{n+m-k}) = c_X((n+m-k)-(n-j))$. The right-hand side depends on $m$ alone, so $Y$ is weakly stationary.

Now substitute the spectral representation $c_X(h) = \int_{-\pi}^{\pi}\mathrm{e}^{ih\lambda}g_X(\lambda)\,d\lambda$ of :ref[]{to=prob.stationary-processes} and exchange the sums with the integral, which is permitted because $\sum_{j,k}\lvert a_ja_k\rvert\int\lvert g_X\rvert = c_X(0)(\sum\lvert a_k\rvert)^2<\infty$ and $g_X\ge0$:
$$
c_Y(m) = \int_{-\pi}^{\pi}\mathrm{e}^{im\lambda}\Bigl(\sum_j a_j\mathrm{e}^{ij\lambda}\Bigr)\Bigl(\sum_k a_k\mathrm{e}^{-ik\lambda}\Bigr)g_X(\lambda)\,d\lambda
= \int_{-\pi}^{\pi}\mathrm{e}^{im\lambda}\,\bigl\lvert A(\lambda)\bigr\rvert^{2}g_X(\lambda)\,d\lambda ,
$$
the last step because for real weights $\sum_ja_j\mathrm{e}^{ij\lambda} = \overline{A(\lambda)}$ while $\sum_ka_k\mathrm{e}^{-ik\lambda} = A(\lambda)$. So $c_Y$ is the Fourier coefficient sequence of the function $\lvert A\rvert^2g_X$, which is non-negative and integrable; by the uniqueness of the spectral distribution (:ref[]{to=prob.stationary-processes}) this function is the power spectral density of $Y$, which is the boxed identity.

For the white-noise specialisation, $g_X = \sigma^2/2\pi$ is constant, so $g_Y = \sigma^2\lvert A\rvert^2/2\pi$ and
$$
\operatorname{var}Y_n = c_Y(0) = \int_{-\pi}^{\pi}\frac{\sigma^2}{2\pi}\lvert A(\lambda)\rvert^2\,d\lambda = \sigma^2\sum_k a_k^2 ,
$$
the last equality being Parseval's identity for the Fourier series $A$ (:ref[]{to=fourier.parseval-mean-square}); it also follows directly from the double sum with $c_X(h) = \sigma^2\delta_{h0}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Absolute summability of the weights** is used three times: to factor the series in part 1, to take the expectation inside the double sum in part 4, and to make $A$ a continuous function. It fails for the one filter everybody wants. The ideal low-pass, $A(\lambda) = 1$ for $\lvert\lambda\rvert\le\lambda_c$ and $0$ beyond, has weights $a_0 = \lambda_c/\pi$ and $a_k = \sin(k\lambda_c)/(\pi k)$, which decay like $1/k$ and are not absolutely summable. Truncating them to $\lvert k\rvert\le K$ gives a filter whose gain overshoots to about $1.09$ just inside the passband and dips to about $-0.09$ just inside the stopband, **however large $K$ is**: this is the Gibbs phenomenon of :ref[]{to=fourier.gibbs-phenomenon}, and a negative gain in what was supposed to be a stopband is a real defect, not a cosmetic one. Multiplying the truncated weights by a taper (the Bartlett weights $1-\lvert k\rvert/K$ give the Fejer means of :ref[]{to=fourier.fejer-theorem}) removes the overshoot entirely, at the price of a transition band about twice as wide. A brick wall is not available at any finite cost.
- **Time invariance is what makes exponentials eigenfunctions**, and it is the hypothesis quietly violated whenever the weights are allowed to depend on position — an edge-preserving or adaptive smoother is not a filter in this sense and none of part 1 to part 4 applies to it.
- **Stationarity of the input is used only in part 4**, where it turns $\mathbb{E}(X_sX_t)$ into a function of $s-t$. Parts 1 to 3 are statements about one signal and need no probability at all.
- **Real weights are used in part 3 and part 4.** For complex weights the correct general statement is :cite[Grimmett and Stirzaker's]{work=grimmett-stirzaker-2020 loc="§9.7, Problem 2, p. 468"}, with $\lvert G_a(\mathrm{e}^{i\lambda})\rvert^2 = \lvert\sum_ka_k\mathrm{e}^{ik\lambda}\rvert^2$, which is $\lvert A(-\lambda)\rvert^2$ and not $\lvert A(\lambda)\rvert^2$. The two agree for real weights, which is every filter applied to real data, and the discrepancy is traceable to the conjugate in the definition of the covariance of complex random variables.
- **A filter cannot create power where there is none.** Since $g_Y = \lvert A\rvert^2g_X$ pointwise, $g_X(\lambda) = 0$ forces $g_Y(\lambda) = 0$. In particular no filter can undo aliasing: once two frequencies have been folded onto one by sampling, no operation on the samples separates them, which is why the anti-alias filter of :ref[]{to=fourier.sampling-theorem} must be analogue and must act before the sampler.
- **Deconvolution is division, and division is unstable.** Inverting a filter means multiplying by $1/A(\lambda)$, which is unbounded wherever $A$ is small — and a low-pass filter is designed to make $A$ small. The inverse of a three-point running mean does not exist as a bounded filter at all, because $A(2\pi/3) = 0$ exactly. This is the ill-posedness already noted in :ref[]{to=fourier.convolution-theorem}.
- **Smoothing manufactures autocorrelation.** White noise through any filter comes out correlated, with $\rho_Y(m) = \sum_ka_ka_{k+m}\big/\sum_ka_k^2$; for both three-point filters of the example below this is $2/3$ at lag $1$. A smoothed series therefore has far fewer independent values than it has points, and any test applied to it afterwards must use the reduced count, not $N$.
- **Causality is a constraint, not a property of the mathematics.** Part 3 says a zero-phase filter needs future values. That is unavailable in real time and perfectly available when post-processing a stored record, which is why real-time and offline filtering are different design problems with different answers.
:::

:::method[Designing and applying a filter]{provenance=adapted src="arfken-2013:§20.5, Eq. (20.102) and Exercises 20.5.3-20.5.4, pp. 998, 1002; rhb-2006:§13.4, Exercise 13.12, p. 462"}
1. **Write down the gain you want**, as a function $\lvert A_{\text{target}}(\lambda)\rvert$ on $[0,\pi]$: where it should be $1$, where it should be $0$, and how wide a transition you will tolerate between them. This is a specification, not yet a filter, and the width of the transition is the quantity that will cost you coefficients.
2. **Decide the phase.** Zero phase (symmetric weights, offline) or causal (one-sided weights, real time). If zero phase is wanted from a causal design, plan to run the filter forwards and then backwards, which squares the gain, so specify $\sqrt{\lvert A_{\text{target}}\rvert}$ for the single pass.
3. **Invert the Fourier series.** The weights are $a_k = \frac{1}{2\pi}\int_{-\pi}^{\pi}A_{\text{target}}(\lambda)\mathrm{e}^{ik\lambda}\,d\lambda$. For a low-pass with cutoff $\lambda_c$ this gives $a_k = \sin(k\lambda_c)/(\pi k)$; for a high-pass, subtract a low-pass from the identity, $a_k^{\text{hp}} = \delta_{k0}-a_k^{\text{lp}}$; for a band-pass with edges $\lambda_1<\lambda_2$, subtract two low-passes, $a_k = a_k^{(\lambda_2)}-a_k^{(\lambda_1)}$. Cascading two filters multiplies their transfer functions, which is the other way to build a band-pass, and is what :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercises 20.5.3-20.5.4 and Fig. 20.12, p. 1002"} ask for in Exercises 20.5.3 and 20.5.4 — with the warning that a physical cascade only multiplies if the second stage does not load the first.
4. **Truncate and taper.** Keep $\lvert k\rvert\le K$ and multiply by a taper such as $1-\lvert k\rvert/(K+1)$, or use a smooth target in step 1 instead of a brick wall. Without this step, see the Gibbs remark above.
5. **Renormalise.** For a low-pass, divide by $\sum_ka_k$ so that $A(0) = 1$ exactly and constants pass untouched; for a high-pass or band-pass, check instead that $\sum_ka_k = 0$ exactly, so that a constant is annihilated and no trend leaks through.
6. **Plot the realised gain** $A(\lambda) = a_0+2\sum_{k\ge1}a_k\cos k\lambda$ before using the filter, on a logarithmic scale, and read off the actual half-power point and the stopband level. The realised gain, not the target, is what the data will see.
7. **Apply it, and deal with the ends.** A filter of half-width $K$ loses $K$ points at each end of a finite record. Either accept the loss, or state what you padded with; padding with zeros is equivalent to multiplying the record by a rectangular window and brings back the leakage of :ref[]{to=stats.periodogram}.
8. **Check against the spectrum.** Verify that the periodogram of the output is the periodogram of the input times $\lvert A\rvert^2$, to within the sampling error of :ref[]{to=stats.periodogram}, and that the variance ratio is $\sum_ka_k^2$ for a white input. For an analogue filter the corresponding check is on the impulse response: :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§13.4, Exercise 13.12, p. 462"} Exercise 13.12 is the model case, where a response shaped as a triangle of base $2T$ — two rectangles convolved — has for its transfer function the square of a sinc, decaying like $\omega^{-2}$ because the response is continuous but has a corner.
:::

:::example[Two three-point smoothers, and an $RC$ low-pass]{provenance=original}
**Part A: gains.** Consider the three-point running mean $a = (\tfrac13,\tfrac13,\tfrac13)$ and the binomial smoother $a = (\tfrac14,\tfrac12,\tfrac14)$, both symmetric about $k=0$. By part 3,
$$
A_{\text{mean}}(\lambda) = \tfrac13\bigl(1+2\cos\lambda\bigr),
\qquad
A_{121}(\lambda) = \tfrac12\bigl(1+\cos\lambda\bigr) = \cos^{2}\tfrac{\lambda}{2} .
$$
Both have $A(0) = 1$. But $A_{\text{mean}}$ vanishes at $\cos\lambda = -\tfrac12$, that is at $\lambda = 2\pi/3$, and is **negative** beyond: at the Nyquist frequency $A_{\text{mean}}(\pi) = \tfrac13(1-2) = -\tfrac13$. The running mean therefore inverts every oscillation faster than three samples per cycle, while $A_{121}\ge0$ everywhere and decreases monotonically to $A_{121}(\pi) = 0$. The half-power point of the binomial smoother solves $\cos^4(\lambda/2) = \tfrac12$, giving
$$
\lambda_{1/2} = 2\arccos\bigl(2^{-1/4}\bigr) = 1.14372\ \text{rad} = 0.36406\,\pi .
$$

**Part B: the sign reversal, seen in integers.** Take the seven-point record
$$
x_t = t + (-1)^{t}, \qquad t = 0,\dots,6, \qquad\text{that is}\qquad x = (1,0,3,2,5,4,7) ,
$$
a straight line with a Nyquist-frequency wobble of unit amplitude on top. Both filters pass the line exactly, because both have $\sum_ka_k = 1$ and $\sum_kka_k = 0$ by symmetry. The wobble is $\mathrm{e}^{i\pi t}$, so by part 1 it comes out multiplied by $A(\pi)$.

For the binomial smoother, $A_{121}(\pi) = 0$ and the wobble should vanish completely. Computing $y_t = (x_{t-1}+2x_t+x_{t+1})/4$ for $t = 1,\dots,5$:
$$
\tfrac{1+0+3}{4} = 1,\quad
\tfrac{0+6+2}{4} = 2,\quad
\tfrac{3+4+5}{4} = 3,\quad
\tfrac{2+10+4}{4} = 4,\quad
\tfrac{5+8+7}{4} = 5 ,
$$
exactly $(1,2,3,4,5)$ — the line, with the wobble gone.

For the running mean, $A_{\text{mean}}(\pi) = -\tfrac13$, so the wobble should survive at a third of its amplitude and with its sign flipped. Computing $y_t = (x_{t-1}+x_t+x_{t+1})/3$:
$$
\tfrac43,\quad \tfrac53,\quad \tfrac{10}{3},\quad \tfrac{11}{3},\quad \tfrac{16}{3} ,
$$
whose residuals about the line $(1,2,3,4,5)$ are $+\tfrac13,-\tfrac13,+\tfrac13,-\tfrac13,+\tfrac13$. The prediction is $A_{\text{mean}}(\pi)\cdot(-1)^t = -\tfrac13(-1)^t$, which at $t=1,2,3,4,5$ is $+\tfrac13,-\tfrac13,+\tfrac13,-\tfrac13,+\tfrac13$. The two agree exactly, including the sign.

**Part C: variance reduction on white noise.** By part 4, $\operatorname{var}Y/\operatorname{var}X = \sum_ka_k^2$, which is $3\cdot\tfrac19 = \tfrac13 = 0.3333$ for the running mean and $\tfrac1{16}+\tfrac14+\tfrac1{16} = \tfrac38 = 0.3750$ for the binomial smoother. The cross-check through the spectrum is Parseval: for the binomial filter,
$$
\frac{1}{2\pi}\int_{-\pi}^{\pi}\cos^{4}\tfrac{\lambda}{2}\,d\lambda = \frac38 ,
$$
since the mean value of $\cos^4$ over a whole period is $3/8$. So the running mean removes slightly more variance — and pays for it by reversing the sign of the highest frequencies. That is the trade the two filters illustrate, and it is why the binomial weights, not the equal weights, are the default three-point smoother.

**Part D: the continuous analogue.** A resistance $R$ in series with a capacitance $C$ to ground, with the output read across the capacitor, is the low-pass companion of the circuit in :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Example 20.5.1 and Exercise 20.5.1, pp. 999-1001"} Example 20.5.1. Driving it at a single frequency, with $V_{\text{in}}\mathrm{e}^{i\omega t}$, $V_{\text{out}}\mathrm{e}^{i\omega t}$ and $I\mathrm{e}^{i\omega t}$ the complex amplitudes, Kirchhoff's loop equation and its derivative give
$$
V_{\text{in}}\mathrm{e}^{i\omega t} = RI\mathrm{e}^{i\omega t} + \frac1C\int\! I\mathrm{e}^{i\omega t}dt
\;\Longrightarrow\;
i\omega V_{\text{in}} = i\omega RI + \frac{I}{C}
\;\Longrightarrow\;
I = \frac{i\omega C\,V_{\text{in}}}{1+i\omega RC} .
$$
The output is the capacitor voltage $V_{\text{out}} = I/(i\omega C)$, so
$$
\varphi(\omega) = \frac{V_{\text{out}}}{V_{\text{in}}} = \frac{1}{1+i\omega RC},
\qquad
\lvert\varphi(\omega)\rvert = \frac{1}{\sqrt{1+(\omega RC)^2}},
\qquad
\arg\varphi(\omega) = -\arctan(\omega RC) .
$$
The power gain is $1/2$ exactly at $\omega = 1/(RC)$, and $\lvert\varphi\rvert$ falls like $1/(\omega RC)$ above it — a roll-off of six decibels per octave. The impulse response is the causal exponential $\Phi(t) = (RC)^{-1}\mathrm{e}^{-t/RC}$ for $t>0$ and $0$ for $t<0$, since
$$
\int_0^{\infty}\frac{1}{RC}\mathrm{e}^{-t/RC}\mathrm{e}^{-i\omega t}\,dt = \frac{1}{RC}\cdot\frac{1}{(1/RC)+i\omega} = \frac{1}{1+i\omega RC} ,
$$
which both confirms the transfer function and shows the filter is causal, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.5, Eqs. (20.105)-(20.106), p. 999"} require of any physical device. With $R = 1\,\mathrm{k}\Omega$ and $C = 1\,\mu\mathrm{F}$ the half-power point is at $\omega = 10^{3}\,\mathrm{s}^{-1}$, that is at an ordinary frequency of $159.15\ \mathrm{Hz}$.
:::

:::application{provenance=original}
**Anti-aliasing, and why it must be analogue.** Every digitiser is preceded by a low-pass filter with its cutoff below the Nyquist frequency of the sampler. Part 4 says why no digital alternative exists: filtering after sampling multiplies the already-folded spectrum by $\lvert A\rvert^2$ and cannot unfold it. The $RC$ section of the example is the cheapest such filter, and its six decibels per octave is usually not enough; cascading $n$ sections gives $6n$ decibels per octave, with the transfer functions multiplying as in part 2.

**Climate and geophysical time series.** A monthly series is routinely passed through a low-pass before the decadal signal is examined, and through a band-pass to isolate, say, the two-to-seven-year band in which El Nino lives. Both the remarks above bite here. The negative side lobes of a badly designed filter put spurious anticorrelations into the output; and because smoothing manufactures autocorrelation, a significance test applied to a filtered series using the raw number of months will reject the null far too often. The standard practice of quoting an effective sample size $N\big/\bigl(1+2\sum_{m\ge1}\rho_Y(m)\bigr)$ is a direct consequence of part 4.

**Matched filtering.** When the signal shape $s$ is known and the noise is white, the filter maximising the output signal-to-noise ratio at the arrival time is the time-reverse of the signal, $a_k = s_{-k}$, with transfer function $\overline{\hat s}$. The output is then the cross-correlation of data with template, and the detection statistic is its peak. This is how a gravitational-wave chirp, a radar return or a seismic arrival is pulled out of noise; for coloured noise of density $g$, the weights are those of $\overline{\hat s}/g$, which is a filter that whitens first and then matches.

**Instrument response and its removal.** A seismometer, a thermometer in a housing and an amplifier each impose their own $\varphi(\omega)$ on what they measure, and recovering the true input means dividing by it. Part 2 makes this division trivial in principle; the deconvolution remark makes it delicate in practice, and the standard compromise is to divide only over the band where $\lvert\varphi\rvert$ is comfortably above the noise and to taper to zero outside it.
:::
