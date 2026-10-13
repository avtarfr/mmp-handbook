---
id: fourier.sampling-theorem
title: The sampling theorem
kind: theorem
level: core
summary: Proves that a function whose Fourier transform vanishes outside $[-a,a]$ is recovered exactly from its values at the points $k/2a$ by a sum of shifted sinc functions, identifies $2a$ as the Nyquist rate below which distinct frequencies become indistinguishable, and shows what the same series returns when the function is not band-limited.
prereqs: [fourier.fourier-series, fourier.parseval-mean-square, fourier.fourier-transform, fourier.fourier-inversion, fourier.plancherel, fourier.poisson-summation, found.differentiation-under-integral, complex.analytic-continuation, measure.lp-spaces, funcan.orthonormal-bases]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.4 (Band-Limited Functions), Whittaker's cardinal function (2.4.9) and the fact that it interpolates the data, the exactness of the trapezoidal rule for it, the definition of an $\\Omega$-band-limited signal as one with $\\phi^{\\wedge}(\\omega)=0$ for $\\lvert\\omega\\rvert\\ge\\Omega$, the derivation of the sampling formula (2.4.10)–(2.4.10a) by expanding $\\phi^{\\wedge}$ in a Fourier series on $\\lvert\\omega\\rvert<\\Omega$, and the Poisson-formula route via (2.3.27), pp. 147–148"
    pages: "147-148"
    role: the proof route we follow (Fourier series of the transform on the band, then term-by-term inversion), the cardinal-function formulation, the statement in angular frequency with spacing $h=\\pi/\\Omega$, and the exactness of the trapezoidal rule on band-limited functions
  - work: folland-1999
    loc: "§8.3, Exercise 15, p. 255: the normalised $\\operatorname{sinc}x=\\sin(\\pi x)/(\\pi x)$, the transform pair $\\widehat{\\chi_{[-a,a]}}(x)=2a\\operatorname{sinc}2ax$, the space $\\mathcal{H}_a=\\{f\\in L^2:\\hat f(\\xi)=0 \\text{ a.e. for }\\lvert\\xi\\rvert>a\\}$ with the orthonormal basis $\\{\\sqrt{2a}\\operatorname{sinc}(2ax-k)\\}$, and the sampling theorem with uniform and $L^2$ convergence; the Poisson summation formula, Theorem 8.32, p. 254"
    pages: "254-255"
    role: the $L^2$ statement of the theorem with its two modes of convergence, the orthonormal basis of shifted sincs that explains why the coefficients are the samples, the normalised sinc convention, and the periodisation identity used for the second route
  - work: strauss-2008
    loc: "§12.3, Exercise 6, p. 348: a continuous $f$ whose transform satisfies $F(k)=0$ for $\\lvert k\\rvert>\\pi$ is called band-limited and satisfies $f(x)=\\sum_n f(n)\\sin[\\pi(x-n)]/[\\pi(x-n)]$, with the hint that $f(n)$ is the $n$th Fourier coefficient of $F$ on $[-\\pi,\\pi]$, and the check on $F=\\chi_{(-\\pi,\\pi)}$"
    pages: "348"
    role: the statement in the normalisation where the samples fall at the integers, and confirmation that the intended proof is the Fourier-coefficient argument we give
  - work: rhb-2006
    loc: "§13.4, Exercise 13.4, p. 460: the unnormalised sinc, defined there as $\\sin x/x$, in the transform of a triangular pulse"
    pages: "460"
    role: a second book using the unnormalised sinc, named in the warning on conventions
---

:::definition[Band-limited functions, bandwidth and the sinc]{provenance=adapted src="folland-1999:§8.3, Exercise 15, p. 255; stakgold-holst-2011:§2.4, p. 147"}
We use the Fourier transform in the convention that puts the $2\pi$ in the exponent,

$$
\hat f(\xi)=\int_{-\infty}^{\infty}f(x)\,\mathrm{e}^{-2\pi\mathrm{i}x\xi}\,\mathrm{d}x ,
$$

so that the inversion formula carries no constant at all. This is Folland's convention and the one in which the sampling theorem is cleanest, but it is **local to this unit** and is not the handbook's default: :ref[the Fourier transform]{to=fourier.fourier-transform} defines $\hat f(k)=\int f(x)e^{-ikx}\,dx$, whose inversion formula carries $\tfrac{1}{2\pi}$. The dictionary is $\xi\mapsto2\pi\xi$: the $\hat f(\xi)$ of this unit is the $\hat f(2\pi\xi)$ of that one. Read through that dictionary, the inversion formula of :ref[]{to=fourier.fourier-inversion} and Plancherel's identity of :ref[]{to=fourier.plancherel} lose their constants, which is what every step below uses. The translation to the angular-frequency convention $\omega=2\pi\xi$ is given at the end of the statement.

The **normalised sinc** is

$$
\operatorname{sinc}x=\frac{\sin \pi x}{\pi x}\quad(x\ne0),\qquad \operatorname{sinc}0=1 ,
$$

Folland's definition. It is continuous, even, equal to $1$ at $x=0$ and to $0$ at every other integer, and it is the transform pair of an interval: $\widehat{\chi_{[-a,a]}}(x)=2a\operatorname{sinc}2ax$. **Warning on conventions:** Stakgold and Holst, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.4, Exercise 13.4, p. 460"}, write $\operatorname{sinc}x=\sin x/x$ without the $\pi$, so their sampling formula reads $\operatorname{sinc}\Omega(x-x_k)$ where ours reads $\operatorname{sinc}(2ax-k)$. Every statement below uses the normalised one.

For $a>0$ let

$$
\mathcal{H}_a=\bigl\{f\in L^{2}(\mathbb{R}) : \hat f(\xi)=0 \ \text{ for almost every }\lvert\xi\rvert>a\bigr\} .
$$

A member of $\mathcal{H}_a$ is **band-limited**, and in the language of signal analysis, which Folland adopts, its **bandwidth** is $2a$ — the full width of the band, counting negative frequencies. The spacing $h=1/(2a)$ is the **Nyquist spacing**: it is the reciprocal of the bandwidth, which is how Folland puts it on his p. 255. The corresponding rate $1/h=2a$ samples per unit of $x$ is the **Nyquist rate**; numerically it equals the bandwidth $2a$, and it is twice the highest frequency $a$ present. Rate and spacing are reciprocal to one another, so only one of the two can be the reciprocal of the bandwidth, and it is the spacing.

Stakgold and Holst state the same condition in angular frequency: $\phi$ is **$\Omega$-band-limited** when $\hat\phi(\omega)=0$ for $\lvert\omega\rvert\ge\Omega$, and $\Omega$ is called the bandwidth. Their $\Omega$ is our $2\pi a$, and their sample spacing $\pi/\Omega$ is our $1/(2a)$.

**Warning on the word *bandwidth*.** The two books use it for two different numbers, and we keep both because we cite both. Folland's bandwidth is the *two-sided* width $2a$ in cycles per unit of $x$; Stakgold and Holst's bandwidth is the *one-sided* cut-off $\Omega=2\pi a$ in radians per unit of $x$. Their ratio is $\Omega/(2a)=\pi$: one factor $2\pi$ from the change of frequency unit, one factor $\tfrac12$ from counting one side of the band instead of two. In this unit "bandwidth" unqualified always means Folland's $2a$; wherever Stakgold and Holst's $\Omega$ is meant it is written $\Omega$.
:::

:::statement[Shannon sampling theorem]{provenance=adapted src="folland-1999:§8.3, Exercise 15b–c, p. 255; stakgold-holst-2011:§2.4, Eqs. (2.4.10)–(2.4.10a), p. 148; strauss-2008:§12.3, Exercise 6, p. 348"}
Let $a>0$.

**1.** $\mathcal{H}_a$ is a Hilbert space, and the functions

$$
s_k(x)=\sqrt{2a}\,\operatorname{sinc}(2ax-k),\qquad k\in\mathbb{Z},
$$

form an orthonormal basis of it.

**2. (Sampling theorem.)** Every $f\in\mathcal{H}_a$ agrees almost everywhere with a function in $C_0(\mathbb{R})$ — continuous and tending to $0$ at $\pm\infty$ — and, taking that continuous version,

$$
f(x)\;=\;\sum_{k=-\infty}^{\infty} f\!\left(\frac{k}{2a}\right)\operatorname{sinc}(2ax-k)
\qquad\text{for every }x\in\mathbb{R},
$$

the series converging both uniformly on $\mathbb{R}$ and in $L^{2}(\mathbb{R})$. In words: a signal of bandwidth $2a$ is determined by its values on a lattice of spacing $1/2a$, the reciprocal of the bandwidth.

**3. (Energy.)** $\displaystyle \sum_{k\in\mathbb{Z}}\Bigl\lvert f\bigl(\tfrac{k}{2a}\bigr)\Bigr\rvert^{2}=2a\,\lVert f\rVert_{2}^{2}$, so the samples are square-summable and carry exactly the energy of the signal.

**4. (Aliasing.)** Suppose $f\in L^{1}\cap L^{2}$ does *not* lie in $\mathcal{H}_a$ — either because it is not band-limited at all, or because its band is wider than $[-a,a]$. Suppose moreover that $\hat f\in L^{1}(\mathbb{R})$ and that the periodised series $\sum_{m}\hat f(\xi+2am)$ converges absolutely and uniformly on $[-a,a]$, and take for $f$ the continuous representative

$$
f(x)=\int_{-\infty}^{\infty}\hat f(\xi)\,\mathrm{e}^{2\pi\mathrm{i}x\xi}\,\mathrm{d}\xi ,
$$

which exists because $\hat f\in L^{1}$ and which makes the individual samples $f(k/2a)$ meaningful numbers rather than values of an equivalence class. Then the series of part 2, built from those samples, does not reproduce $f$. It reproduces the function $f_{\mathrm{al}}$ with

$$
\hat f_{\mathrm{al}}(\xi)=\chi_{[-a,a]}(\xi)\sum_{m\in\mathbb{Z}}\hat f(\xi+2am) ,
$$

the spectrum of $f$ folded into the band $[-a,a]$ in strips of width $2a$. Content at frequency $\xi_0$ with $\lvert\xi_0\rvert>a$ is reported at the frequency $\xi_0-2am$ that lies in the band: this is **aliasing**, and the discrete version of the same statement is part 6 of :ref[]{to=fourier.dft-fft}.

In Stakgold and Holst's angular-frequency notation, part 2 is their Eq. (2.4.10a): an $\Omega$-band-limited $\phi$ satisfies $\phi(x)=\sum_k\phi(x_k)\operatorname{sinc}[\Omega(x-x_k)]$ with $x_k=k\pi/\Omega$ and their unnormalised sinc. Strauss states the case $\Omega=\pi$, in which the samples fall at the integers.
:::

:::idea{provenance=original}
The hypothesis is that $\hat f$ lives on a bounded interval. A function on a bounded interval has a Fourier series, so $\hat f$ has one — and the Fourier coefficients of $\hat f$ on $[-a,a]$ are, by the inversion formula read backwards, the values of $f$ at the lattice points $k/2a$ — up to the factor $1/(2a)$ and a reflection of the index, as Step 2 works out. So the samples are not an arbitrary list of numbers: they are a complete set of coefficients for $\hat f$, and therefore determine $\hat f$, and therefore determine $f$.

To get the interpolation formula, transform the series back. Each exponential $\mathrm{e}^{-\pi\mathrm{i}k\xi/a}$, cut off to the band, inverts to a shifted sinc, because the transform of an interval is a sinc. That is the whole proof: a Fourier series in the frequency variable becomes a sinc series in the space variable.

The shape of the result is also forced by the first statement. The sincs $s_k$ are an orthonormal basis of $\mathcal{H}_a$, so $f=\sum_k(f,s_k)s_k$ for *some* coefficients; the content of the theorem is that the coefficient $(f,s_k)$ is nothing but the sample $f(k/2a)$ divided by $\sqrt{2a}$.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.4, the derivation of (2.4.10a), p. 148; folland-1999:§8.3, Exercise 15, p. 255"}
Throughout, $g=\hat f$, which by hypothesis is supported in $[-a,a]$ and lies in $L^{2}[-a,a]$.

**Step 1: $f$ is continuous and bounded.** By the Cauchy–Schwarz inequality on an interval of finite length,

$$
\int_{-a}^{a}\lvert g\rvert \;\le\; \sqrt{2a}\,\lVert g\rVert_{2}<\infty ,
$$

so $g\in L^{1}(\mathbb{R})$ as well as $L^{2}$. The inversion theorem of :ref[]{to=fourier.fourier-inversion} is *not* what justifies the next line: every version of it assumes $f\in L^{1}$, and a band-limited $f$ need not be integrable — $g=\chi_{[-1/2,1/2]}$ gives $f=\operatorname{sinc}$, which is not. The $L^{2}$ theory is in :ref[]{to=fourier.plancherel} instead, and it is enough. Its part 3 extends the transform to a unitary map of $L^{2}(\mathbb{R})$ onto itself, so the inverse map $\mathcal{F}^{-1}$ is defined on all of $L^{2}$ and $f=\mathcal{F}^{-1}g$, by the definition $g=\hat f$. On the overlap $L^{1}\cap L^{2}$ — where $g$ lies, by the display above — that extension is still given by the defining integral rather than by a limit in the mean, as the definition block of the same unit records; and in the convention local to this unit the inverse transform is the transform followed by a reflection, $(\mathcal{F}^{-1}g)(x)=(\mathcal{F}g)(-x)$, so the same is true of it. Hence, for almost every $x$,

$$
f(x)=\int_{-a}^{a}g(\xi)\,\mathrm{e}^{2\pi\mathrm{i}x\xi}\,\mathrm{d}\xi .
$$

The right-hand side is continuous in $x$ by dominated convergence and tends to $0$ at $\pm\infty$ by the Riemann–Lebesgue lemma, which for an $L^{1}$ function is the statement $\mathcal{F}(L^{1})\subset C_0$ of :ref[]{to=fourier.fourier-transform}; so it is the $C_0$ representative promised in part 2. From now on $f$ *is* that integral. Note for later that this formula is a bounded linear map: writing $(Tg)(x)$ for the integral,

$$
\lvert (Tg)(x)\rvert\le\int_{-a}^{a}\lvert g\rvert\le\sqrt{2a}\,\lVert g\rVert_{L^{2}[-a,a]}
\qquad\text{for every }x ,
$$

again by Cauchy–Schwarz. So convergence of functions in $L^{2}[-a,a]$ forces *uniform* convergence of their images under $T$. This is the only analytic point in the proof, and it is where the boundedness of the band is used.

**Step 2: the Fourier coefficients of $g$ are the samples of $f$.** Regard $g$ as a function on the interval $[-a,a]$, of length $2a$, and expand it in the Fourier series of :ref[]{to=fourier.fourier-series} with period $L=2a$:

$$
g(\xi)=\sum_{k\in\mathbb{Z}}c_k\,\mathrm{e}^{2\pi\mathrm{i}k\xi/(2a)}
=\sum_{k\in\mathbb{Z}}c_k\,\mathrm{e}^{\pi\mathrm{i}k\xi/a},
\qquad
c_k=\frac{1}{2a}\int_{-a}^{a}g(\xi)\,\mathrm{e}^{-\pi\mathrm{i}k\xi/a}\,\mathrm{d}\xi ,
$$

the series converging in $L^{2}[-a,a]$ because the normalised exponentials $\{(2a)^{-1/2}\mathrm{e}^{\pi\mathrm{i}k\xi/a}\}$ are not merely orthonormal there but complete: that is the mean-square convergence of :ref[]{to=fourier.parseval-mean-square}, and it is the only fact about Fourier series this proof needs. Compare the integral for $c_k$ with the inversion formula of Step 1 evaluated at $x=-k/(2a)$: the exponents match, since $2\pi\mathrm{i}x\xi=-\pi\mathrm{i}k\xi/a$ there. Hence

$$
c_k=\frac{1}{2a}\,f\!\left(-\frac{k}{2a}\right) .
$$

The samples of $f$ have appeared without being asked for; this is the heart of the matter.

**Step 3: the transform of one term.** For real $u$,

$$
\int_{-a}^{a}\mathrm{e}^{2\pi\mathrm{i}\xi u}\,\mathrm{d}\xi
=\frac{\mathrm{e}^{2\pi\mathrm{i}au}-\mathrm{e}^{-2\pi\mathrm{i}au}}{2\pi\mathrm{i}u}
=\frac{\sin 2\pi a u}{\pi u}
=2a\operatorname{sinc}(2au) ,
$$

valid at $u=0$ too, where both sides equal $2a$. This is Folland's pair $\widehat{\chi_{[-a,a]}}=2a\operatorname{sinc}2a\,\cdot$ read as an inverse transform. Applying $T$ to the $k$th term of Step 2, with $u=x+k/(2a)$,

$$
T\Bigl(c_k\mathrm{e}^{\pi\mathrm{i}k\xi/a}\Bigr)(x)
=c_k\int_{-a}^{a}\mathrm{e}^{2\pi\mathrm{i}\xi\left(x+\frac{k}{2a}\right)}\mathrm{d}\xi
=c_k\cdot 2a\operatorname{sinc}(2ax+k)
=f\!\left(-\frac{k}{2a}\right)\operatorname{sinc}(2ax+k) .
$$

**Step 4: pass to the limit.** The partial sums $g_K=\sum_{\lvert k\rvert\le K}c_k\mathrm{e}^{\pi\mathrm{i}k\xi/a}$ converge to $g$ in $L^{2}[-a,a]$ by Step 2. By the bound in Step 1, $Tg_K\to Tg=f$ **uniformly** on $\mathbb{R}$. By Step 3,

$$
(Tg_K)(x)=\sum_{\lvert k\rvert\le K}f\!\left(-\frac{k}{2a}\right)\operatorname{sinc}(2ax+k)
=\sum_{\lvert k\rvert\le K}f\!\left(\frac{k}{2a}\right)\operatorname{sinc}(2ax-k) ,
$$

relabelling $k\mapsto-k$, which is legitimate because the sum is symmetric and finite. Letting $K\to\infty$ gives part 2 with uniform convergence. For the $L^{2}$ convergence, Plancherel's theorem (:ref[]{to=fourier.plancherel}), in the convention local to this unit — where the transform is unitary, the $(2\pi)^{-1/2}$ of that unit having been absorbed by the dictionary — gives $\lVert f-Tg_K\rVert_{L^{2}(\mathbb{R})}=\lVert g-g_K\rVert_{L^{2}[-a,a]}\to0$, since the transform of $Tg_K$ is $g_K$ extended by zero.

**Step 5: the orthonormal basis.** Applying $T$ to the function $\frac{1}{2a}\mathrm{e}^{-\pi\mathrm{i}k\xi/a}$ and using Step 3's integral with $u=x-k/(2a)$ shows that the transform of $x\mapsto\operatorname{sinc}(2ax-k)$ is $\frac{1}{2a}\mathrm{e}^{-\pi\mathrm{i}k\xi/a}\chi_{[-a,a]}(\xi)$. These lie in $\mathcal{H}_a$, and by Plancherel

$$
(s_k,s_l)=2a\int_{-a}^{a}\frac{1}{4a^{2}}\,\mathrm{e}^{-\pi\mathrm{i}(k-l)\xi/a}\,\mathrm{d}\xi=\delta_{kl} ,
$$

using Step 3's integral with $u=(l-k)/(2a)$, which is $2a\operatorname{sinc}(l-k)=2a\delta_{kl}$. They are complete in $\mathcal{H}_a$ because their transforms are, up to the constant $(2a)^{-1/2}$, the exponential basis of $L^{2}[-a,a]$, and the transform maps $\mathcal{H}_a$ onto $L^{2}[-a,a]$ unitarily. Since $\mathcal{H}_a$ is the preimage under the unitary transform of the closed subspace of $L^2$ of functions vanishing off $[-a,a]$, it is closed in $L^{2}(\mathbb{R})$, hence a Hilbert space.

**Step 6: the energy identity.** Expanding $f$ in the orthonormal basis of Step 5 (:ref[]{to=funcan.orthonormal-bases}), $f=\sum_k(f,s_k)s_k$; comparing with part 2, $(f,s_k)=f(k/2a)/\sqrt{2a}$. Parseval's identity along that basis then reads $\lVert f\rVert_{2}^{2}=\sum_k\lvert f(k/2a)\rvert^{2}/(2a)$, which is part 3.

**Step 7: aliasing.** Drop the band-limitation and assume instead the hypotheses of part 4. Since $f\in L^{1}$, $\hat f$ is continuous and bounded, so each term of $P(\xi)=\sum_{m}\hat f(\xi+2am)$, the periodisation of $\hat f$ with period $2a$, is continuous; by hypothesis the series converges uniformly on $[-a,a]$, so $P$ is continuous and bounded there and in particular lies in $L^{2}[-a,a]$. Uniform convergence also lets the series be integrated term by term against the bounded factor $\mathrm{e}^{-\pi\mathrm{i}k\xi/a}$, and the resulting strips reassemble into one integral over $\mathbb{R}$, absolutely convergent because $\hat f\in L^{1}(\mathbb{R})$:

$$
\frac{1}{2a}\int_{-a}^{a}P(\xi)\mathrm{e}^{-\pi\mathrm{i}k\xi/a}\,\mathrm{d}\xi
=\frac{1}{2a}\sum_{m}\int_{-a}^{a}\hat f(\xi+2am)\mathrm{e}^{-\pi\mathrm{i}k\xi/a}\,\mathrm{d}\xi
=\frac{1}{2a}\int_{-\infty}^{\infty}\hat f(\xi)\mathrm{e}^{-\pi\mathrm{i}k\xi/a}\,\mathrm{d}\xi ,
$$

the exponential being unchanged by the shift $\xi\mapsto\xi+2am$ because $\mathrm{e}^{-\pi\mathrm{i}k(2am)/a}=\mathrm{e}^{-2\pi\mathrm{i}km}=1$. The last integral is the inversion integral of part 4 at the point $-k/(2a)$ — again $\hat f\in L^{1}$ is what makes it an honest absolutely convergent integral and its value the sample of the continuous representative — so the coefficient equals $\frac1{2a}f(-k/2a)$. (This chain is exactly the Poisson summation formula of :ref[]{to=fourier.poisson-summation} applied to $\hat f$.) So $P$ has on $[-a,a]$ exactly the coefficients $c_k=\tfrac1{2a}f(-k/2a)$ that Step 2 produced, and running Steps 3 and 4 with $P$ in place of $g$ shows that the sinc series converges to the function whose transform is $P\chi_{[-a,a]}$. That is part 4; and when $f$ *is* band-limited, $P=\hat f$ on the band and nothing changes, which is the second, Poisson-summation route to part 2 that Stakgold and Holst mention. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Boundedness of the band.** Used twice, both times in Step 1: to get $\hat f\in L^{1}$, which makes $f$ continuous so that pointwise samples mean anything at all, and to get the bound $\lvert Tg(x)\rvert\le\sqrt{2a}\lVert g\rVert_2$ that upgrades $L^{2}$ convergence of the Fourier series to uniform convergence of the sinc series. For $f\in L^{2}$ alone, "the value of $f$ at $k/2a$" is not even defined, since $f$ is an equivalence class.
- **Sampling at or above the Nyquist rate.** Step 2 expands $\hat f$ with period exactly $2a$. Sampling more slowly, at spacing $h>1/2a$, amounts to using a period $1/h<2a$, which does not cover the support of $\hat f$; the strips then overlap and part 4 takes over. Sampling faster is harmless: if $f\in\mathcal{H}_a$ then $f\in\mathcal{H}_{a'}$ for every $a'>a$, and the theorem applies with the finer lattice.
- **The strictness at the band edge.** Part 2 says nothing about a function whose spectrum has an atom exactly at $\pm a$ — in $L^{2}$ a single point is a null set, so such a function is simply not distinguished. The reason engineers insist on sampling strictly faster than the Nyquist rate is visible in the classical counterexample $f(x)=\sin(2\pi a x)$: every sample $f(k/2a)=\sin\pi k$ is zero, yet $f\neq0$. This is not a counterexample to the theorem as stated, because $\sin$ is not in $L^{2}(\mathbb{R})$; but it is why Stakgold and Holst define $\Omega$-band-limited with the *closed* condition $\hat\phi(\omega)=0$ for $\lvert\omega\rvert\ge\Omega$, which excludes it, and why in practice one oversamples.
- **Convergence is absolute but slow.** By part 3 the samples lie in $\ell^{2}$, and for each fixed $x$ one also has $\sum_k\lvert\operatorname{sinc}(2ax-k)\rvert^{2}=1$. This is part 3 applied to one particular signal, not Step 5, which proves only orthonormality: fix $x$ and put $u(y)=\operatorname{sinc}\bigl(2a(y-x)\bigr)$, which by Step 3 with $u$-variable $y-x$ equals $\frac1{2a}\int_{-a}^{a}\mathrm{e}^{-2\pi\mathrm{i}x\xi}\mathrm{e}^{2\pi\mathrm{i}y\xi}\,\mathrm{d}\xi$ and so lies in $\mathcal{H}_a$ with transform $\frac1{2a}\mathrm{e}^{-2\pi\mathrm{i}x\xi}\chi_{[-a,a]}(\xi)$; Plancherel gives $\lVert u\rVert_2^{2}=2a/(2a)^{2}=1/(2a)$, so part 3 applied to $u$ reads $\sum_k\lvert u(k/2a)\rvert^{2}=2a\lVert u\rVert_2^{2}=1$; and $u(k/2a)=\operatorname{sinc}(k-2ax)=\operatorname{sinc}(2ax-k)$, the sinc being even. Then Cauchy–Schwarz makes the series absolutely convergent at every point. But $\operatorname{sinc}$ decays only like $1/\lvert k\rvert$, so truncating at $\lvert k\rvert\le K$ leaves an error controlled only by the $\ell^{2}$ tail of the samples. Reconstruction from a short record is correspondingly poor near the ends of the record, which is why practical interpolators use a windowed or tapered kernel rather than the bare sinc.
- **No band-limited signal has compact support.** If $f\in\mathcal{H}_a$ then Step 1's formula makes sense for complex $x$: the integrand is continuous on the compact set $[-a,a]$ and entire in $x$, so differentiation under the integral sign (:ref[]{to=found.differentiation-under-integral}) shows $f$ extends to an entire function. An entire function vanishing on an interval vanishes identically, by the identity theorem (:ref[]{to=complex.analytic-continuation}). So a non-zero signal cannot be both band-limited and time-limited, and every real measurement — which is time-limited — is strictly speaking undersampled. The theorem is an idealisation, and the practical question is always how much aliasing one is willing to tolerate.
- **What part 4 needs.** Two things, and the same hypothesis buys both. First, $\hat f\in L^{1}(\mathbb{R})$: this makes the inversion integral $f(x)=\int\hat f(\xi)\mathrm{e}^{2\pi\mathrm{i}x\xi}\,\mathrm{d}\xi$ absolutely convergent, hence gives a continuous representative of $f$ whose individual samples $f(k/2a)$ are defined — without it the statement has no subject, by the first bullet above — and it is what makes the unfolded integral in Step 7 legitimate. Second, absolute and uniform convergence of the periodised series on $[-a,a]$: this is what licenses the term-by-term integration there, and it puts $P$ in $L^{2}[-a,a]$ so that Steps 3 and 4 may be rerun. Decay of $\hat f$ faster than $\lvert\xi\rvert^{-1}$ — say $\lvert\hat f(\xi)\rvert\le C(1+\lvert\xi\rvert)^{-1-\varepsilon}$ — gives both at once, by comparison with $\sum_m\lvert m\rvert^{-1-\varepsilon}$; a compactly supported $\hat f$, as in the example, gives them trivially, the periodised series then having only finitely many non-zero terms on the band. Without any decay the folded series can diverge and nothing can be said.
:::

:::method[Sampling and reconstructing a signal]{provenance=adapted src="stakgold-holst-2011:§2.4, pp. 147–148"}
1. **Find the highest frequency** $\nu_{\max}$ present, in cycles per unit of $x$. If the signal is not band-limited — and no real signal is — choose the frequency above which its content is negligible for the purpose at hand.
2. **Band-limit it physically, before sampling.** Pass the signal through a low-pass (anti-alias) filter with cut-off at $\nu_{\max}$. This step cannot be postponed: once the samples are taken, the out-of-band content has already been folded into the band and no processing can separate it from the genuine content there, by part 4.
3. **Sample at a rate at or above $2\nu_{\max}$.** The Nyquist rate $2\nu_{\max}$ is the theoretical minimum, and it is attained rather than merely approached — part 2 holds at the rate $2a$ itself; because no filter cuts off abruptly, practice uses $10$–$20\%$ more. The sample spacing is $h=1/(2\nu_{\max})$ at the Nyquist rate.
4. **Reconstruct** with $f(x)=\sum_k f(kh)\operatorname{sinc}\bigl((x-kh)/h\bigr)$, which is part 2 written with $h=1/2a$. In software this is done by zero-padding the discrete transform and transforming back, which is the same sum computed with the FFT of :ref[]{to=fourier.dft-fft}; in hardware it is done by holding each sample and low-pass filtering, which approximates the sinc kernel.
5. **Check the energy.** The identity of part 3, $h\sum_k\lvert f(kh)\rvert^{2}=\lVert f\rVert_{2}^{2}$, is a cheap test that the sampling rate and scaling are consistent.
6. **If the rate is fixed and too low**, predict the alias rather than be surprised by it: content at $\nu$ is reported at the $\nu'$ with $\nu-\nu'$ an integer multiple of $1/h$ and $\lvert\nu'\rvert<1/(2h)$, and that $\nu'$ is unique. The strict inequality matters: if $\nu$ is an odd multiple of the Nyquist frequency $1/(2h)$ then both $\nu'=+1/(2h)$ and $\nu'=-1/(2h)$ satisfy the congruence, the two cannot be told apart by the samples, and the pair of frequencies is reported as one — the degenerate band-edge case of part 4, which part 6 of :ref[]{to=fourier.dft-fft} shows in its discrete form. Away from that edge the fold is unambiguous: a sinusoid just above the Nyquist frequency appears just below it, running backwards — the wagon-wheel effect.
7. **For quadrature, use the trapezoidal rule.** On a band-limited function the trapezoidal rule is not an approximation but an identity: $\int f=h\sum_k f(kh)$. Poisson summation (:ref[]{to=fourier.poisson-summation}) gives $h\sum_k f(kh)=\sum_m\hat f(m/h)$, and every term with $m\ne0$ vanishes as soon as $1/h>a$, so the identity holds for every $h<1/a$ — twice as coarse as the Nyquist spacing $1/(2a)$, because quadrature needs only the value $\hat f(0)$ and not the whole band. Stakgold and Holst state it in their notation as $0<\lambda\le2\pi/\Omega$, that is $h\le1/a$ with the non-strict inequality their closed band condition $\hat\phi(\omega)=0$ for $\lvert\omega\rvert\ge\Omega$ allows. The example below verifies the identity at the Nyquist spacing $1/(2a)$, twice as fine as the quadrature bound requires.
:::

:::example[A root-raised-cosine pulse, and a carrier that lies about its frequency]{provenance=original}
**(a) Exact reconstruction.** Let $\hat f(\xi)=\cos(\pi\xi/2)$ for $\lvert\xi\rvert\le1$ and $0$ outside, so $f\in\mathcal{H}_1$: the bandwidth is $2$, the Nyquist spacing is $h=\tfrac12$. (This spectrum is the square root of the raised cosine $\tfrac12[1+\cos\pi\xi]$, whence the name used in the application; the root and the full raised cosine behave quite differently at the sampling instants, as noted there.) The pulse itself is

$$
f(x)=\int_{-1}^{1}\cos\frac{\pi\xi}{2}\,\mathrm{e}^{2\pi\mathrm{i}x\xi}\,\mathrm{d}\xi
=\int_{0}^{1}\Bigl[\cos\Bigl(\tfrac\pi2+2\pi x\Bigr)\xi+\cos\Bigl(\tfrac\pi2-2\pi x\Bigr)\xi\Bigr]\mathrm{d}\xi ,
$$

using evenness of $\hat f$ and the product formula for cosines. Each integral is elementary:

$$
f(x)=\frac{\sin\bigl(\tfrac\pi2+2\pi x\bigr)}{\tfrac\pi2+2\pi x}+\frac{\sin\bigl(\tfrac\pi2-2\pi x\bigr)}{\tfrac\pi2-2\pi x}
=\cos 2\pi x\left[\frac{1}{\tfrac\pi2+2\pi x}+\frac{1}{\tfrac\pi2-2\pi x}\right]
=\frac{4\cos 2\pi x}{\pi\bigl(1-16x^{2}\bigr)} ,
$$

since $\sin(\tfrac\pi2\pm\theta)=\cos\theta$ and $\frac1{A+B}+\frac1{A-B}=\frac{2A}{A^{2}-B^{2}}$ with $A=\pi/2$, $B=2\pi x$. (At $x=\pm\tfrac14$ both numerator and denominator vanish; l'Hopital's rule gives the removable value $f(\pm\tfrac14)=1$, which also follows directly from $\int_{-1}^{1}\cos^{2}(\pi\xi/2)\,\mathrm{d}\xi=1$.)

*The samples.* At $x_k=k/2$,

$$
f\!\left(\frac k2\right)=\frac{4\cos\pi k}{\pi(1-4k^{2})}=\frac{4(-1)^{k}}{\pi\bigl(1-4k^{2}\bigr)} ,
$$

that is $1.273240$ at $k=0$, then $0.424413$, $-0.084883$, $0.036378$, $-0.020210$ for $k=1,2,3,4$ and the mirror images at negative $k$. They decay like $k^{-2}$, so the series converges respectably.

*Reconstruct at $x=\tfrac18$.* The exact value is

$$
f\!\left(\tfrac18\right)=\frac{4\cos(\pi/4)}{\pi\bigl(1-\tfrac14\bigr)}=\frac{4\cdot\tfrac{\sqrt2}{2}}{\tfrac{3\pi}{4}}=\frac{8\sqrt2}{3\pi}=1.200422 .
$$

The sampling series at this point is $\sum_k f(k/2)\operatorname{sinc}(\tfrac14-k)$, and since $\operatorname{sinc}(\tfrac14-k)=(-1)^{k}\sin(\pi/4)/[\pi(\tfrac14-k)]$ the terms combine to

$$
\sum_{k}\frac{2\sqrt2}{\pi^{2}\,\bigl(1-4k^{2}\bigr)\bigl(\tfrac14-k\bigr)} ,
$$

the two factors $(-1)^k$ cancelling. Summing symmetrically:

| $\lvert k\rvert\le K$ | $1$ | $2$ | $3$ | $4$ | $6$ | $10$ |
|---|---|---|---|---|---|---|
| partial sum | $1.197266$ | $1.199692$ | $1.200150$ | $1.200293$ | $1.200379$ | $1.200411$ |

against the exact $1.200422$: the error falls from $3.2\times10^{-3}$ to $1.0\times10^{-5}$, and the series is converging to the right number.

*The trapezoidal check of step 7.* Here $\int_{-\infty}^{\infty}f=\hat f(0)=\cos 0=1$, while

$$
h\sum_k f\!\left(\frac k2\right)=\frac12\cdot\frac4\pi\sum_{k\in\mathbb{Z}}\frac{(-1)^{k}}{1-4k^{2}}
=\frac2\pi\left[1+2\sum_{k\ge1}\frac{(-1)^{k+1}}{4k^{2}-1}\right] .
$$

Splitting $\frac{1}{4k^2-1}=\frac12\bigl[\frac1{2k-1}-\frac1{2k+1}\bigr]$ and using the two Leibniz sums $1-\tfrac13+\tfrac15-\cdots=\tfrac\pi4$ and $\tfrac13-\tfrac15+\tfrac17-\cdots=1-\tfrac\pi4$, the bracketed series is $\tfrac12\bigl[\tfrac\pi4-(1-\tfrac\pi4)\bigr]=\tfrac\pi4-\tfrac12$, so the whole expression is $\frac2\pi\bigl[1+\tfrac\pi2-1\bigr]=1$. The trapezoidal rule with spacing $\tfrac12$ gives the integral exactly, as it must.

**(b) An alias.** A pure cosine is not in $L^{2}(\mathbb{R})$ and so is not in any $\mathcal{H}_a$; to put a carrier inside the theorem we give it a band-limited envelope. Rescale the pulse of part (a): $q(x)=\tfrac12 f(x/2)$ has $\hat q(\xi)=\hat f(2\xi)=\cos\pi\xi$ on $\lvert\xi\rvert\le\tfrac12$ and $0$ outside, that is

$$
q(x)=\frac{2\cos\pi x}{\pi\bigl(1-4x^{2}\bigr)},\qquad q(0)=\frac2\pi,\quad q\bigl(\pm\tfrac12\bigr)=\tfrac12 ,
$$

the value at $\pm\tfrac12$ being the removable one, equal to $\int_{-1/2}^{1/2}\cos^{2}\pi\xi\,\mathrm{d}\xi=\tfrac12$. Now modulate it onto a carrier of frequency $7$ and onto a carrier of frequency $1$:

$$
g(x)=q(x)\cos(2\pi\cdot7x),\qquad \tilde g(x)=q(x)\cos(2\pi\cdot1x) .
$$

Multiplying by $\cos2\pi\nu x$ splits the spectrum into two copies at $\pm\nu$: $\hat g(\xi)=\tfrac12[\hat q(\xi-7)+\hat q(\xi+7)]$ is supported in $[6.5,7.5]\cup[-7.5,-6.5]$ and $\hat{\tilde g}$ in $[0.5,1.5]\cup[-1.5,-0.5]$. Both $q$ and the two modulated signals decay like $x^{-2}$, so all three are in $L^{1}\cap L^{2}$, and

$$
g\in\mathcal{H}_{7.5}\ \text{(bandwidth $15$, Nyquist rate $15$)},\qquad
\tilde g\in\mathcal{H}_{1.5}\subset\mathcal{H}_{3}\ \text{(bandwidth $3$, Nyquist rate $3$)} .
$$

*Sample both at $6$ per unit*, $h=\tfrac16$ — far too slow for $g$, comfortably fast for $\tilde g$. Step 6 predicts the alias: $1/h=6$ and $1/(2h)=3$, and $7-6=1$ with $\lvert1\rvert<3$, so the carrier at $7$ is reported at $1$. The samples confirm it exactly, since $\cos(2\pi\cdot7\cdot\tfrac k6)=\cos\bigl(\tfrac{\pi k}{3}+2\pi k\bigr)=\cos\bigl(2\pi\cdot1\cdot\tfrac k6\bigr)$:

$$
g\Bigl(\frac k6\Bigr)=q\Bigl(\frac k6\Bigr)\cos\frac{\pi k}{3}=\tilde g\Bigl(\frac k6\Bigr)\qquad\text{for every }k\in\mathbb{Z} .
$$

Numerically, for $k=0,\dots,6$ the common samples are

$$
0.6366198,\ \ 0.3101225,\ -0.2864789,\ -0.5,\ -0.2046278,\ \ 0.1550613,\ \ 0.2122066
$$

(the value $-0.5$ at $k=3$ is $q(\tfrac12)\cos\pi$), with the mirror images $g(-k/6)=g(k/6)$ at negative $k$, both functions being even.

*What the reconstruction returns.* Apply part 2 to $\tilde g$ with $a=3$, which is legitimate because $\tilde g\in\mathcal{H}_{1.5}\subset\mathcal{H}_3$ and $1/(2a)=\tfrac16=h$. It gives $\tilde g(x)=\sum_k\tilde g(k/6)\operatorname{sinc}(6x-k)$. Since the samples of $g$ are the same numbers, the sinc series built from $g$'s samples converges to $\tilde g$, not to $g$: the reconstruction has silently moved the carrier from $7$ to $1$. (Part 4 says the same thing in the frequency domain, and its hypotheses hold here: $g\in L^{1}\cap L^{2}$ and $g\notin\mathcal{H}_3$; $\hat g$ is continuous — $\hat q$ vanishes at $\xi=\pm\tfrac12$, so the two copies join the axis without a jump — and, being continuous with support in $[6.5,7.5]\cup[-7.5,-6.5]$, it lies in $L^{1}(\mathbb{R})$; and on $[-3,3]$ the periodised series $\sum_m\hat g(\xi+6m)$ has only the two terms $m=1$ and $m=-1$ non-zero, so it converges absolutely and uniformly there. The periodisation of $\hat g$ with period $2a=6$, cut to $[-3,3]$, keeps only the copy at $7$ shifted down by $6$ and the copy at $-7$ shifted up by $6$, giving $\tfrac12[\hat q(\xi-1)+\hat q(\xi+1)]=\hat{\tilde g}$.)

*The damage, at one point.* Take $x=\tfrac1{12}$, halfway between the samples at $k=0$ and $k=1$. There $q(\tfrac1{12})=\frac{72\cos(\pi/12)}{35\pi}=\frac{18(\sqrt6+\sqrt2)}{35\pi}=0.6324968$, so

$$
g\Bigl(\tfrac1{12}\Bigr)=q\Bigl(\tfrac1{12}\Bigr)\cos\frac{7\pi}{6}=-\frac{9\bigl(3\sqrt2+\sqrt6\bigr)}{35\pi}=-0.5477583,
\qquad
\tilde g\Bigl(\tfrac1{12}\Bigr)=+0.5477583 ,
$$

the same magnitude with the opposite sign — the reconstruction is not merely inaccurate, it is in antiphase with the truth. Summing the sinc series symmetrically over $\lvert k\rvert\le K$ confirms which of the two it finds:

| $K$ | $4$ | $10$ | $50$ | $200$ |
|---|---|---|---|---|
| partial sum at $x=\tfrac1{12}$ | $0.5471683$ | $0.5477579$ | $0.5477583$ | $0.5477583$ |

against $\tilde g(\tfrac1{12})=0.5477583$ and $g(\tfrac1{12})=-0.5477583$. To recover $g$ *by the sinc series of part 2* one must sample at $15$ per unit or faster: $g\in\mathcal{H}_{7.5}$, so part 2 applies with $a=7.5$ and the Nyquist rate $15$ itself suffices. Fifteen is not, however, the slowest rate at which these samples contain $g$ at all. The calculation just made shows that at $6$ per unit the two copies of $\hat q$ fold into $[-3,3]$ without overlapping, so a listener who *knows* that the signal lives in $[6.5,7.5]\cup[-7.5,-6.5]$ can shift them back and recover $g$ exactly; that is bandpass sampling, and it needs a reconstruction built for the known band rather than the lowpass series of part 2, which has no way to tell $g$ from $\tilde g$. The alternative, when the band is not known in advance, is to filter the content near frequency $7$ away before sampling. In practice one samples faster still, by the margin of step 3.
:::

:::application[Where the theorem is used]{provenance=original}
**Digital audio.** Human hearing stops near $20$ kHz, so the compact-disc standard samples at $44.1$ kHz — above the Nyquist rate $40$ kHz, with the margin of step 3 left for the anti-alias filter to roll off. The sincs of part 2 are the reconstruction filter; the theorem is the reason a sequence of numbers can be an exact representation of a continuous waveform rather than an approximation to one, and the reason the question "but what happens *between* the samples?" has the answer "nothing that is not already determined".

**Instrumentation and the anti-alias filter.** Any digitiser — an oscilloscope, a seismometer, a satellite radiometer, a climate data logger — carries an analogue filter ahead of its converter, and part 4 is its justification. Without it, a $60$ Hz mains hum sampled at $100$ Hz would appear as a $40$ Hz oscillation indistinguishable from signal. The same arithmetic explains the wagon-wheel effect in film, where $24$ frames per second alias the rotation of a wheel down to a slow forward or backward drift.

**Magnetic resonance imaging and radio astronomy.** Here the measured data are samples of the Fourier transform rather than of the signal, so the theorem applies in the transposed form: sampling $\hat f$ on a lattice of spacing $\Delta$ determines $f$ exactly provided $f$ vanishes outside an interval of length $1/\Delta$. The field of view is the reciprocal of the sample spacing in $k$-space, and anatomy outside it is folded back in — the wrap-around artefact, which is part 4 seen in an image.

**Numerical quadrature and spectral accuracy.** Step 7 and the example show that the trapezoidal rule is *exact* on band-limited functions. For a function that is merely very smooth and rapidly decaying, the spectrum is not compactly supported but is extremely small outside a band, and the trapezoidal error is correspondingly tiny — which is why the trapezoidal rule, usually a second-order method, converges faster than any power of $h$ for smooth decaying integrands on the whole line, and is the method of choice there.

**Information theory.** Part 3 says that a signal occupying a band of full width $W=2a$, observed over a time $T$, is carried by about $WT$ numbers: the sampling rate is $2a=W$ samples per unit time, so $T$ units of time hold $WT$ of them. The familiar "$2WT$" of the engineering literature is the same count with $W$ read as the *one-sided* bandwidth — the highest frequency $a$ — rather than as Folland's full width $2a$. Under the convention of this unit the count is $WT$, equivalently $2aT$; the warning in the definition about the two meanings of "bandwidth" is exactly what the factor $2$ turns on. This count is the starting point of Shannon's channel-capacity theorem, and it is why bandwidth, not merely power, is the scarce resource in a communication link. The pulse of the example is not an accident either, though it must be named carefully. Its spectrum $\cos(\pi\xi/2)$ on $[-1,1]$ is the *root*-raised cosine with roll-off $1$, and that is the standard **transmit** shape in digital communication: the receiver applies a matched filter with the same response, the two multiply in the frequency domain, and the cascade realises the **full** raised cosine $\cos^{2}(\pi\xi/2)=\tfrac12\bigl[1+\cos\pi\xi\bigr]$. It is the full raised cosine, not the transmit pulse, that has the zero-intersymbol-interference property: its inverse transform equals $1$ at $x=0$ and vanishes at every other integer, so symbols spaced one unit of time apart are read off cleanly. The transmit pulse of the example does not vanish at those instants — its samples $f(k/2)=4(-1)^{k}/[\pi(1-4k^{2})]$ are all non-zero, which is exactly what makes the reconstruction in the example work — and its band of full width $2$ is twice the width $1$ that a symbol rate of $1$ needs at minimum. That factor is the $100\%$ excess bandwidth bought by the roll-off, and it is paid for the pulse's rapid decay; the trade between excess bandwidth and decay rate is the design question the raised-cosine family answers.
:::
