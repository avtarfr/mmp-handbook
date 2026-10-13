---
id: fourier.fourier-transform
title: The Fourier transform
kind: definition
level: core
summary: Defines the Fourier transform of an integrable function on the line in the handbook's convention, records the six conventions used by the cited books and the dictionary between them, proves the operational rules for translation, modulation, dilation, reflection, conjugation, differentiation and multiplication by the variable, and tabulates the standard transform pairs.
prereqs: [fourier.fourier-series, measure.dominated-convergence]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§12.3, pp. 343–346: the passage from the Fourier series on $(-l,l)$ to the integral (1)–(2) as $l\\to\\infty$, the transform pair (3)–(4), the table of pairs (5)–(11), and the table of properties (i)–(vi)"
    pages: "343-346"
    role: the convention this handbook uses, $F(k)=\\int f(x)e^{-ikx}dx$ with the whole $2\\pi$ on the inverse; the limit of the Fourier series that motivates it; the list of operational rules in exactly this convention; the standard pairs for the square pulse, the two-sided exponential and the Gaussian
  - work: folland-1999
    loc: "§8.3, pp. 249–250: the definition of $\\mathcal{F}$ on $L^1(\\mathbb{R}^n)$ with the $e^{-2\\pi i\\xi\\cdot x}$ kernel, the bound $\\|\\hat f\\|_u\\le\\|f\\|_1$, and Theorem 8.22(a)–(f) giving translation, modulation, the behaviour under an invertible linear change of variable, the transform of a convolution, differentiation in both directions, and the Riemann-Lebesgue lemma $\\mathcal{F}(L^1)\\subset C_0$"
    pages: "249-250"
    role: the $L^1$ setting in which the transform is defined without any decay assumption beyond integrability; the operational rules stated with their exact hypotheses; the Riemann-Lebesgue lemma; the $2\\pi$-in-the-exponent convention
  - work: rhb-2006
    loc: "§13.1, pp. 433–435: the limit of the complex Fourier series as the period tends to infinity, Fourier's inversion theorem (13.4), the symmetric pair (13.5)–(13.6), the remark that the split of the constant is arbitrary, and the exponential-decay example; §13.1.5, pp. 443–445: the properties (13.28)–(13.32) for differentiation, integration, scaling, translation and exponential multiplication, the proof of (13.28) by parts, and the amplitude-modulation calculation (13.33)–(13.34); §13.1.2, pp. 437–439: Fraunhofer diffraction and the aperture function"
    pages: "433-435, 437-439, 443-445"
    role: the symmetric $1/\\sqrt{2\\pi}$ convention and the explicit statement that only the product of the two constants is fixed; the operational rules in that convention and the integration-by-parts proof of the derivative rule; the single-slit aperture calculation used in the application
  - work: arfken-2013
    loc: "§20.1, pp. 963–966: the general integral transform $g(x)=\\int_a^b f(t)K(x,t)dt$, its linearity, and the catalogue of kernels; Eq. (20.6) and §20.2, Eqs. (20.10)–(20.12) and (20.25)–(20.30), pp. 965–971: the transform with kernel $e^{+i\\omega t}$, the warning that the notation is not universal, the sine and cosine transforms and their inverses; §20.3, Eqs. (20.48)–(20.56), pp. 980–981: translation, change of scale, sign change, complex conjugation, gradient, Laplacian and the $n$th derivative"
    pages: "963-966, 970-971, 980-981"
    role: the opposite sign convention $e^{+i\\omega t}$ and its consequences for the derivative rule; the explicit caution about combining formulas from different books; the reading of the transform as one member of a family of integral transforms; the sine and cosine transforms for even and odd functions
  - work: hassani-2013
    loc: "§9.2, pp. 277–283: the derivation of the pair (9.20)–(9.21) by separating the copies of a Fourier series and letting the separation grow, Example 9.2.1 (the square bump and the reciprocity of widths), Example 9.2.2 (the Gaussian), the piecewise-continuous form (9.22), and the $n$-dimensional pair (9.23)"
    pages: "277-283"
    role: the symmetric convention in the $f(x)\\leftrightarrow\\tilde f(k)$ notation; the inverse relation between the width of a function and the width of its transform; the midpoint value at a jump
  - work: reed-simon-1980
    loc: "§IX.1, pp. 318–320: the definition of the Fourier transform and the inverse transform on $\\mathcal{S}(\\mathbb{R}^n)$ with the symmetric $(2\\pi)^{-n/2}$ factor, and the Lemma that $\\widehat{(D^\\beta f)}(\\lambda)=(i\\lambda)^\\beta\\hat f(\\lambda)$ together with the companion identity for multiplication by $x$"
    pages: "318-320"
    role: the symmetric convention in the physics sign; the statement that the transform exchanges differentiation with multiplication by the variable, as a single lemma about multi-indices
  - work: stakgold-holst-2011
    loc: "§2.4, pp. 145–146: the passage from the Fourier series to the Fourier integral expansion (2.4.1)–(2.4.3), the transform (2.4.4) with kernel $e^{+i\\omega\\xi}$ and the $1/2\\pi$ on the inversion, the bracketed remark on the possible placements of the $2\\pi$ and of the sign, and the Fourier Integral Theorem with the midpoint value (2.4.6); §10.3, (10.3.13)–(10.3.14), p. 701: the same book's symmetric $n$-dimensional convention"
    pages: "145-146, 701"
    role: the asymmetric opposite-sign convention of their Chapter 2 and the symmetric one of their Chapter 10, both entered in the conventions table, together with their own statement that the placement of $2\\pi$ and the sign are matters of choice
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §1.1–§1.4, pp. 131–137: the class $\\mathcal{M}(\\mathbb{R})$ of functions of moderate decrease and the convergence of $\\int_{-\\infty}^{\\infty}$ on it, the definition $\\hat f(\\xi)=\\int f(x)e^{-2\\pi ix\\xi}dx$ with the observation that $\\hat f$ is bounded, continuous and vanishing at infinity but need not decay at any rate, and Proposition 1.2(i)–(v)"
    pages: "131-137"
    role: the decay condition $\\lvert f(x)\\rvert\\le A/(1+x^2)$ as a hypothesis under which the improper integral converges absolutely; the warning that integrability of $f$ says nothing about the decay of $\\hat f$; the five operational rules in the $2\\pi$-in-the-exponent convention
---

:::definition[The Fourier transform]{provenance=adapted src="strauss-2008:§12.3, (3)–(4), p. 344; folland-1999:§8.3, p. 249; stein-shakarchi-2003:Ch. 5, §1.1–§1.2, pp. 131–134"}
Let $f:\mathbb{R}\to\mathbb{C}$ be **integrable**, written $f \in L^1(\mathbb{R})$, meaning that $f$ is measurable and $\lVert f\rVert_1 = \int_{-\infty}^{\infty}\lvert f(x)\rvert\,dx$ is finite. The **Fourier transform** of $f$ is the function

$$
\hat f(k) \;=\; \mathcal{F}[f](k) \;=\; \int_{-\infty}^{\infty} f(x)\,e^{-ikx}\,dx ,
\qquad k \in \mathbb{R} ,
$$

and the associated **inverse transform** of a function $g\in L^1(\mathbb{R})$ is

$$
\mathcal{F}^{-1}[g](x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} g(k)\,e^{ikx}\,dk .
$$

That the second really inverts the first is :ref[the inversion theorem]{to=fourier.fourier-inversion}; nothing below depends on it. The integral defining $\hat f$ converges absolutely for every $k$, since $\lvert f(x)e^{-ikx}\rvert = \lvert f(x)\rvert$, and three properties follow at once:

- **Boundedness.** $\lvert\hat f(k)\rvert \le \lVert f\rVert_1$ for every $k$, so $\hat f$ is a bounded function with $\sup_k\lvert\hat f(k)\rvert \le \lVert f\rVert_1$.
- **Continuity.** $\hat f$ is continuous on $\mathbb{R}$, by dominated convergence (:ref[]{to=measure.dominated-convergence}) with the fixed integrable majorant $\lvert f\rvert$.
- **Decay.** $\hat f(k)\to 0$ as $\lvert k\rvert\to\infty$. This is the Riemann-Lebesgue lemma; :cite[Folland]{work=folland-1999 loc="Thm 8.22(f), p. 250"} states it as $\mathcal{F}(L^1)\subset C_0$, the continuous functions vanishing at infinity. Its Fourier-series counterpart is proved in :ref[]{to=fourier.parseval-mean-square}.

Nothing more is true in general. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1.2, p. 134"} emphasise that integrability of $f$ guarantees no *rate* of decay for $\hat f$, so the inverse integral above need not converge; this is the reason the inversion theorem carries an extra hypothesis and the reason the Schwartz class is introduced there. Two convenient sufficient conditions for membership of $L^1(\mathbb{R})$ are used throughout: $f$ continuous with $\lvert f(x)\rvert \le A/(1+x^2)$, which Stein and Shakarchi call **moderate decrease**, and $f$ piecewise continuous with compact support.

The transform is **linear**: $\mathcal{F}[\alpha f + \beta g] = \alpha\hat f + \beta\hat g$ for $\alpha,\beta\in\mathbb{C}$ and $f,g\in L^1$. It is one instance of the general integral transform $g(x) = \int_a^b f(t)K(x,t)\,dt$ that :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.1, Eq. (20.1), p. 963"} take as the organising idea of their chapter, with kernel $K(k,x)=e^{-ikx}$ and $(a,b)=(-\infty,\infty)$; :ref[the Laplace transform]{to=fourier.laplace-transform} and :ref[the Hankel and Mellin transforms]{to=fourier.hankel-mellin} are others.

**Where the definition comes from.** Take the Fourier series of :ref[]{to=fourier.fourier-series} on $(-l,l)$, substitute the coefficient integral into the series, and write $k_n = n\pi/l$, so that successive $k_n$ are spaced $\Delta k = \pi/l$ apart:

$$
f(x) \;=\; \frac{1}{2\pi}\sum_{n=-\infty}^{\infty}\left(\int_{-l}^{l} f(y)\,e^{-ik_n y}\,dy\right) e^{ik_n x}\,\Delta k .
$$

The sum is a Riemann sum in $k$. Letting $l\to\infty$ turns $\Delta k$ into $dk$, the inner integral into $\hat f(k)$, and the sum into $\frac{1}{2\pi}\int \hat f(k)e^{ikx}dk$. :cite[Strauss]{work=strauss-2008 loc="§12.3, pp. 343–344"} warns that this limit is delicate, because the interval grows while the terms change; :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1, p. 435"} and :cite[Hassani]{work=hassani-2013 loc="§9.2, pp. 277–278"} run the same argument and both state that the existence of the limit is assumed, not proved, at that point. The argument is a derivation of the *form* of the pair, not of its validity.
:::

:::note[Six conventions, and the dictionary between them]{provenance=adapted src="strauss-2008:§12.3, (3)–(4), p. 344; rhb-2006:§13.1, (13.5)–(13.6), p. 435; arfken-2013:Eq. (20.6), p. 965 and (20.25)–(20.26), p. 971; hassani-2013:§9.2, (9.20)–(9.21), p. 278; reed-simon-1980:§IX.1, p. 318; folland-1999:§8.3, p. 249; stakgold-holst-2011:§2.4, (2.4.3)–(2.4.4), p. 146 and §10.3, (10.3.13)–(10.3.14), p. 701"}
Only the product of the two prefactors is fixed, at $1/2\pi$; the split between the forward and the inverse transform, and the sign in the exponent, are free. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1, p. 435"} say this explicitly, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.2, p. 965"} add the practical warning that formulas taken from different books differ by powers of $2\pi$ and must be checked before being combined. Writing $\hat f(k)=\int f(x)e^{-ikx}dx$ for our transform, the library divides as follows.

| Convention | Forward | Inverse | Books | In terms of $\hat f$ |
|---|---|---|---|---|
| **Ours** | $\int f(x)e^{-ikx}dx$ | $\frac{1}{2\pi}\int F(k)e^{ikx}dk$ | Strauss §12.3 | $\hat f(k)$ |
| $2\pi$ in the exponent | $\int f(x)e^{-2\pi i x\xi}dx$ | $\int \hat f(\xi)e^{2\pi i x\xi}d\xi$ | Stein and Shakarchi Ch. 5; Folland §8.3 | $\hat f(2\pi\xi)$ |
| Symmetric, physics sign | $\frac{1}{\sqrt{2\pi}}\int f(x)e^{-ikx}dx$ | $\frac{1}{\sqrt{2\pi}}\int \tilde f(k)e^{ikx}dk$ | Riley, Hobson and Bence §13.1; Hassani §9.2; Reed and Simon §IX.1 | $\frac{1}{\sqrt{2\pi}}\hat f(k)$ |
| Symmetric, opposite sign | $\frac{1}{\sqrt{2\pi}}\int f(t)e^{+i\omega t}dt$ | $\frac{1}{\sqrt{2\pi}}\int g(\omega)e^{-i\omega t}d\omega$ | Arfken, Weber and Harris §20.2 | $\frac{1}{\sqrt{2\pi}}\hat f(-\omega)$ |
| Asymmetric, opposite sign | $\int f(x)e^{+i\omega x}dx$ | $\frac{1}{2\pi}\int f^{\wedge}(\omega)e^{-i\omega x}d\omega$ | Stakgold and Holst §2.4 | $\hat f(-\omega)$ |
| Symmetric, $n$ dimensions | $(2\pi)^{-n/2}\int u(x)e^{-ix\cdot y}d^nx$ | $(2\pi)^{-n/2}\int \hat u(y)e^{ix\cdot y}d^ny$ | Stakgold and Holst §10.3 | $(2\pi)^{-n/2}\hat f(y)$ at $n=1$ |

Two remarks on the table. First, Stakgold and Holst use the fifth line in Chapter 2 and the sixth in Chapter 10, so a formula of theirs must be matched to its chapter; we have followed each where we cite it, and the two are not interchangeable. Second, the entries in the last column are the whole dictionary: a sign change in the exponent replaces $k$ by $-k$ and nothing else, and a prefactor $c$ on the forward transform multiplies the result by $c$. Three consequences are worth memorising, since they are where conventions bite.

| Identity | Ours | $2\pi$ in exponent | Symmetric |
|---|---|---|---|
| Derivative | $\widehat{f'} = ik\,\hat f$ | $\widehat{f'} = 2\pi i\xi\,\hat f$ | $\widetilde{f'} = ik\,\tilde f$ |
| :ref[Convolution]{to=fourier.convolution-theorem} | $\widehat{f*g} = \hat f\,\hat g$ | $\widehat{f*g} = \hat f\,\hat g$ | $\widetilde{f*g} = \sqrt{2\pi}\,\tilde f\,\tilde g$ |
| :ref[Plancherel]{to=fourier.plancherel} | $\lVert f\rVert_2^2 = \frac{1}{2\pi}\lVert\hat f\rVert_2^2$ | $\lVert f\rVert_2 = \lVert\hat f\rVert_2$ | $\lVert f\rVert_2 = \lVert\tilde f\rVert_2$ |

In Arfken's opposite-sign convention the derivative rule reads $\mathcal{F}[f'](\omega) = -i\omega\,g(\omega)$, their Eq. (20.55): the sign of the exponent and the sign in the derivative rule always travel together. The symmetric convention is the only one in which the forward and inverse transforms differ solely by the sign of the exponent, which is why books that stress the duality of $x$ and $k$ prefer it; the $2\pi$-in-the-exponent convention is the only one with no stray constants anywhere, which is why books that stress convolution and $L^2$ prefer it. We follow Strauss because it keeps the exponent clean and puts every factor of $2\pi$ in one place, on the inverse transform, where a reader can see it.
:::

:::statement[Operational rules]{provenance=adapted src="strauss-2008:§12.3, properties (i)–(vi), p. 346; folland-1999:Thm 8.22(a),(b),(d),(e), pp. 249–250; stein-shakarchi-2003:Ch. 5, Prop. 1.2, p. 136; rhb-2006:§13.1.5, (13.28)–(13.32), p. 444; arfken-2013:§20.3, (20.48)–(20.51) and (20.55)–(20.56), pp. 980–981"}
Let $f \in L^1(\mathbb{R})$, let $a\in\mathbb{R}$ and let $c\in\mathbb{R}\setminus\{0\}$. Then each function on the left is in $L^1(\mathbb{R})$ and

| # | Function of $x$ | Its transform at $k$ | Extra hypothesis |
|---|---|---|---|
| 1 | $f(x-a)$ (translation) | $e^{-ika}\,\hat f(k)$ | none |
| 2 | $e^{iax}f(x)$ (modulation) | $\hat f(k-a)$ | none |
| 3 | $f(cx)$ (dilation) | $\dfrac{1}{\lvert c\rvert}\,\hat f\!\left(\dfrac{k}{c}\right)$ | none |
| 4 | $f(-x)$ (reflection) | $\hat f(-k)$ | none |
| 5 | $\overline{f(x)}$ (conjugation) | $\overline{\hat f(-k)}$ | none |
| 6 | $f'(x)$ (differentiation) | $ik\,\hat f(k)$ | $f$ absolutely continuous, $f'\in L^1$ |
| 7 | $x\,f(x)$ (multiplication) | $i\,\dfrac{d}{dk}\hat f(k)$ | $x f(x)\in L^1$ |

Rules 6 and 7 iterate: if $f$ is $m$ times differentiable with $f,f',\dots,f^{(m)}$ all in $L^1$ then $\widehat{f^{(m)}}(k) = (ik)^m\hat f(k)$, and if $x^m f(x)\in L^1$ then $\hat f$ is $m$ times continuously differentiable with $\widehat{x^m f}(k) = i^m\,d^m\hat f/dk^m$. Two corollaries are used constantly:

- **Smoothness of $f$ forces decay of $\hat f$.** If $f,\dots,f^{(m)}\in L^1$ then $\lvert k\rvert^m\lvert\hat f(k)\rvert = \lvert\widehat{f^{(m)}}(k)\rvert \le \lVert f^{(m)}\rVert_1$, so $\hat f(k) = O(\lvert k\rvert^{-m})$. Decay of $f$ likewise forces smoothness of $\hat f$. This is the continuous form of :ref[the smoothness-decay correspondence]{to=fourier.smoothness-decay}.
- **Symmetry.** If $f$ is real then $\hat f(-k) = \overline{\hat f(k)}$, by rule 5; if $f$ is real and even, $\hat f$ is real and even; if $f$ is real and odd, $\hat f$ is purely imaginary and odd. In the even and odd cases the transform collapses to the **cosine** and **sine transforms** $\hat f(k) = 2\int_0^\infty f\cos kx\,dx$ and $\hat f(k)=-2i\int_0^\infty f\sin kx\,dx$, which :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.2, (20.27)–(20.30), p. 971"} normalise as separate transforms with factor $\sqrt{2/\pi}$ and treat as the natural tools on the half-line.
:::

:::note[Standard transform pairs]{provenance=adapted src="strauss-2008:§12.3, table (5)–(11), p. 345; arfken-2013:Example 20.2.1 (20.13)–(20.17) and Example 20.2.2 (20.19), pp. 966–969; hassani-2013:Examples 9.2.1–9.2.2, pp. 279–280; rhb-2006:§13.1, p. 435"}
All in our convention $\hat f(k)=\int f(x)e^{-ikx}dx$, with $a>0$. Each is an ordinary convergent integral; the entries for $\delta$, for the constant function and for the Heaviside step belong to :ref[]{to=fourier.tempered-distributions} and are not repeated here.

| $f(x)$ | $\hat f(k)$ | Check |
|---|---|---|
| $\chi_{[-a,a]}(x)$ (square pulse) | $\dfrac{2\sin ak}{k}$ | value $2a$ at $k=0$ |
| $\bigl(1-\lvert x\rvert/a\bigr)_{+}$ (triangle) | $\dfrac{4\sin^2(ak/2)}{a k^2}$ | value $a$ at $k=0$ |
| $e^{-a\lvert x\rvert}$ | $\dfrac{2a}{a^2+k^2}$ | real and even |
| $\dfrac{1}{a^2+x^2}$ | $\dfrac{\pi}{a}\,e^{-a\lvert k\rvert}$ | dual of the previous line |
| $e^{-ax^2}$ | $\sqrt{\dfrac{\pi}{a}}\;e^{-k^2/4a}$ | $a=\tfrac12$ gives $\sqrt{2\pi}e^{-k^2/2}$ |
| $H(x)\,e^{-ax}$ | $\dfrac{1}{a+ik}$ | modulus $(a^2+k^2)^{-1/2}$ |

The Gaussian line is the only self-reciprocal family: at $a=\tfrac12$ the pair is $e^{-x^2/2}\leftrightarrow\sqrt{2\pi}\,e^{-k^2/2}$, the same shape in both variables. The square pulse illustrates the opposite extreme. Both show the reciprocity :cite[Hassani]{work=hassani-2013 loc="§9.2, pp. 279–280"} draws out: the pulse of half-width $a$ has a transform whose first zeros are at $k=\pm\pi/a$, so halving the width of $f$ doubles the width of $\hat f$, and in the Gaussian line $a\mapsto\lambda a$ scales the two widths by $\lambda^{-1/2}$ and $\lambda^{1/2}$. :ref[The uncertainty principle]{to=fourier.uncertainty-principle} makes this exact.
:::

:::idea{provenance=original}
Every rule in the table is the same two-line calculation: substitute the new function into the defining integral, then move the change from $f$ onto the exponential and read off what the exponential has become. A translation of $f$ turns into a phase, because $e^{-ik(y+a)} = e^{-ika}e^{-iky}$ splits; a dilation turns into a dilation the other way, because the substitution $u=cx$ rescales both the exponent and $dx$; and differentiation turns into multiplication by $ik$, because an integration by parts transfers the derivative onto $e^{-ikx}$, which reproduces itself times $-ik$, with a second sign change from moving the derivative across. The whole content of the transform is that $e^{-ikx}$ is an eigenfunction of $d/dx$.
:::

:::proof[Operational rules]{provenance=adapted src="rhb-2006:§13.1.5, the integration-by-parts proof of (13.28) and the modulation calculation (13.33)–(13.34), pp. 444–445; folland-1999:Thm 8.22(a),(b),(d),(e), pp. 249–250; reed-simon-1980:§IX.1, the Lemma on p. 319"}
Throughout, every integral converges absolutely because $\lvert e^{i\theta}\rvert=1$ and the stated hypothesis puts the relevant function in $L^1$.

**Rules 1, 4 and 5: a substitution or a conjugation.** For rule 1 substitute $y = x-a$, so $dx = dy$ and $e^{-ikx} = e^{-ika}e^{-iky}$:

$$
\int f(x-a)e^{-ikx}dx = e^{-ika}\int f(y)e^{-iky}dy = e^{-ika}\hat f(k) .
$$

Rule 4 is the substitution $y=-x$, which reverses the limits and supplies a second sign from $dx=-dy$, leaving $\int f(y)e^{iky}dy = \hat f(-k)$. For rule 5, conjugation passes under the integral sign:

$$
\int \overline{f(x)}\,e^{-ikx}dx = \overline{\int f(x)\,e^{ikx}dx} = \overline{\hat f(-k)} .
$$

**Rule 2: no substitution at all.** The two exponentials combine, $e^{iax}e^{-ikx} = e^{-i(k-a)x}$, so the integral is by definition $\hat f(k-a)$. This is the one rule that needs nothing; it is the dual of rule 1, and it is the calculation :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.5, (13.33)–(13.34), p. 445"} perform to show that modulating a signal onto a carrier frequency $\omega_c$ shifts its whole spectrum by $\omega_c$.

**Rule 3: the substitution $u=cx$.** Take $c>0$ first. Then $x=u/c$, $dx = du/c$, and the exponent becomes $-i(k/c)u$:

$$
\int f(cx)e^{-ikx}dx = \frac{1}{c}\int f(u)e^{-i(k/c)u}du = \frac{1}{c}\hat f\!\left(\frac{k}{c}\right).
$$

For $c<0$ the same substitution reverses the limits of integration, which contributes one further minus sign, and the two combine into $1/\lvert c\rvert$. The factor $1/\lvert c\rvert$ is forced by the case $k=0$: both sides must then equal $\int f(cx)\,dx$, which is $\lvert c\rvert^{-1}\int f(u)\,du = \lvert c\rvert^{-1}\hat f(0)$.

**Rule 6: integration by parts.** Let $f$ be absolutely continuous with $f'\in L^1$. Integrating by parts on $[-N,N]$,

$$
\int_{-N}^{N} f'(x)e^{-ikx}dx \;=\; \Bigl[f(x)e^{-ikx}\Bigr]_{-N}^{N} \;+\; ik\int_{-N}^{N} f(x)e^{-ikx}dx ,
$$

the $+ik$ arising because $\frac{d}{dx}e^{-ikx} = -ike^{-ikx}$ and the parts formula supplies a further minus sign. For the boundary term: since $f'\in L^1$, $f(N) = f(0)+\int_0^N f'$ has a limit $L_+$ as $N\to\infty$, and $L_+$ must be $0$, because a non-zero limit would make $\int^\infty\lvert f\rvert$ diverge, contradicting $f\in L^1$. The same argument at $-\infty$ gives $L_-=0$. Hence the boundary term vanishes in the limit and $\widehat{f'}(k) = ik\hat f(k)$. This is the argument :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.5, p. 444"} give, with the vanishing of $f$ at $\pm\infty$ justified from the finiteness of $\int\lvert f\rvert$; :cite[Folland]{work=folland-1999 loc="Thm 8.22(e), p. 250"} states it with the explicit hypothesis that $f$ and its derivatives up to order $k-1$ lie in $C_0$, which is what the limit argument establishes here.

**Rule 7: differentiation under the integral sign.** Suppose $xf(x)\in L^1$. For $h\ne 0$,

$$
\frac{\hat f(k+h)-\hat f(k)}{h} \;=\; \int f(x)\,e^{-ikx}\,\frac{e^{-ihx}-1}{h}\;dx .
$$

The bracket tends pointwise to $-ix$ as $h\to0$, and $\lvert e^{-ihx}-1\rvert \le \lvert hx\rvert$ by the mean value theorem applied to $t\mapsto e^{-itx}$, so the integrand is dominated by $\lvert x f(x)\rvert \in L^1$ uniformly in $h$. Dominated convergence (:ref[]{to=measure.dominated-convergence}) gives

$$
\frac{d}{dk}\hat f(k) \;=\; \int (-ix)f(x)e^{-ikx}dx \;=\; -i\,\widehat{xf}(k) ,
$$

and multiplying by $i$ gives rule 7. Continuity of $d\hat f/dk$ follows by applying the continuity statement of the definition to $xf \in L^1$. Iterating rules 6 and 7 gives the $m$-fold versions; :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, Lemma, p. 319"} package both directions as one identity on multi-indices, which is the form in which the two rules are plainly dual. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Integrability is used for everything, and it is all that rules 1–5 use.** Those five are substitutions in an absolutely convergent integral; they would fail for a merely conditionally convergent integral, where a change of variable can change the value.
- **Rule 6 needs $f'\in L^1$, not merely that $f'$ exists.** The hypothesis enters twice: to make $\widehat{f'}$ defined at all, and to force $f(\pm\infty)=0$ so that the boundary term dies. Without the second, the rule acquires a boundary term. Take $f = H(x)e^{-x}$, which is in $L^1$ with $\hat f(k)=1/(1+ik)$ but is not absolutely continuous at $0$: its pointwise derivative off the origin is $-f$, whose transform is $-1/(1+ik)$, whereas $ik\hat f(k) = ik/(1+ik)$. The two differ by exactly $1$, the size of the jump, which is the delta that the pointwise derivative omits (:ref[]{to=fourier.heaviside-step}).
- **Rule 7 needs $xf(x)\in L^1$, which is strictly stronger than $f\in L^1$.** For $f(x) = (1+x^2)^{-1}$ we have $f\in L^1$ but $xf\notin L^1$, and indeed $\hat f(k)=\pi e^{-\lvert k\rvert}$ is not differentiable at $k=0$. The failure is exactly at the one point the hypothesis was needed for.
- **Nothing here needs $\hat f$ to be integrable, and in general it is not.** The square pulse has $\hat f(k)=2\sin ak/k$, which decays like $1/\lvert k\rvert$ and so is not in $L^1$. Riemann-Lebesgue gives decay but never a rate; a rate costs smoothness of $f$, by the first corollary to the rules.
- **The Riemann-Lebesgue lemma is not reversible.** $\mathcal{F}$ maps $L^1$ into $C_0$ but not onto it, as :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, Thm IX.7 and the remark following it, p. 327"} note; there are continuous functions vanishing at infinity that are the transform of no integrable function.
- **At a jump the transform cannot see which value $f$ takes.** Changing $f$ at finitely many points changes no integral, so $\hat f$ is unchanged; correspondingly the inversion integral returns the midpoint $\tfrac12[f(x^+)+f(x^-)]$ rather than any particular value, as :cite[Hassani]{work=hassani-2013 loc="§9.2, Eq. (9.22), p. 280"} records.
:::

:::method[Computing a Fourier transform]{provenance=original}
1. **Fix the convention before writing anything.** Decide where the $2\pi$ sits and which sign the exponent carries, and if a formula is being imported, convert it using the last column of the conventions table. Almost every discrepancy between a textbook answer and a computed one is a factor of $\sqrt{2\pi}$ or a sign of $k$.
2. **Check integrability.** If $\int\lvert f\rvert = \infty$ the transform is not defined by the integral; move to :ref[]{to=fourier.tempered-distributions}, where $1$, $H$ and $\delta$ acquire transforms.
3. **Exploit symmetry first.** If $f$ is even, write $\hat f(k)=2\int_0^\infty f\cos kx\,dx$; if odd, $\hat f(k)=-2i\int_0^\infty f\sin kx\,dx$. This halves the work and tells you in advance whether the answer is real or imaginary.
4. **Try to reach a tabulated pair by the operational rules.** Translation, modulation, dilation and the two differentiation rules generate a large family from each entry of the table; this is almost always faster than integrating.
5. **Otherwise integrate directly.** Split the range at any point where the formula for $f$ changes (typically at $0$ for anything involving $\lvert x\rvert$ or $H$). For a Gaussian exponent, complete the square and quote :ref[]{to=found.gaussian-integrals}; the resulting shift of the contour into the complex plane is justified by :ref[Cauchy's theorem]{to=complex.cauchy-theorem}, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 20.2.2 and Fig. 20.3, pp. 968–969"} set out. For a rational $f$, close the contour in the half-plane where $e^{-ikx}$ decays — the lower one for $k>0$, the upper one for $k<0$ — and use :ref[]{to=complex.residue-theorem}.
6. **Check three things.** The value at $k=0$ must be $\int f$. If $f$ is real, $\hat f(-k)$ must equal $\overline{\hat f(k)}$. And $\hat f$ must tend to $0$ at $\pm\infty$ at the rate the smoothness of $f$ predicts: a jump in $f$ gives $1/\lvert k\rvert$, a kink gives $1/k^2$.
:::

:::example[A modulated, shifted exponential]{provenance=original}
Compute the transform of

$$
f(x) \;=\; e^{-2\lvert x-3\rvert}\,\cos\bigl(5(x-3)\bigr) ,
$$

a damped oscillation of decay rate $2$ and angular frequency $5$, centred at $x=3$. It is continuous and $\lvert f(x)\rvert\le e^{-2\lvert x-3\rvert}$, so $f\in L^1(\mathbb{R})$ with $\lVert f\rVert_1 \le 1$, and the transform is defined.

**Step 1: the base pair.** From the table, $g(x) = e^{-2\lvert x\rvert}$ has $\hat g(k) = 4/(4+k^2)$. Derived directly: $g$ is even, so $\hat g(k)=2\int_0^\infty e^{-2x}\cos kx\,dx$, and integrating by parts twice (or taking the real part of $\int_0^\infty e^{-(2+ik)x}dx = 1/(2+ik)$) gives $2\operatorname{Re}\frac{1}{2+ik} = \frac{4}{4+k^2}$.

**Step 2: the modulation.** Write $\cos 5y = \tfrac12(e^{5iy}+e^{-5iy})$, so that $g(y)\cos 5y = \tfrac12 e^{5iy}g(y) + \tfrac12 e^{-5iy}g(y)$. Rule 2 applied to each term, with $a=5$ and $a=-5$, gives for $h(y) = e^{-2\lvert y\rvert}\cos 5y$

$$
\hat h(k) \;=\; \tfrac12\hat g(k-5) + \tfrac12\hat g(k+5)
\;=\; \frac{2}{4+(k-5)^2} + \frac{2}{4+(k+5)^2} .
$$

Two Lorentzian peaks of half-width $2$ sit at $k=\pm5$: the oscillation has put the energy at the carrier frequency, and the damping has given each line a width.

**Step 3: the translation.** $f(x) = h(x-3)$, so rule 1 with $a=3$ multiplies by the phase $e^{-3ik}$:

$$
\boxed{\;\hat f(k) \;=\; e^{-3ik}\left[\frac{2}{4+(k-5)^2} + \frac{2}{4+(k+5)^2}\right].}
$$

The shift changes only the phase, never $\lvert\hat f\rvert$ — the physical reading is that moving a pulse in time does not change its power spectrum.

**Step 4: a number.** At $k=1$ the bracket is $\dfrac{2}{4+16}+\dfrac{2}{4+36} = \dfrac{1}{10}+\dfrac{1}{20} = \dfrac{3}{20} = 0.15$, so

$$
\hat f(1) \;=\; 0.15\,e^{-3i} \;=\; 0.15\cos 3 \;-\; 0.15\,i\sin 3 \;=\; -0.1484988745 \;-\; 0.0211680012\,i .
$$

Numerical integration of $\int_{-\infty}^{\infty} e^{-2\lvert x-3\rvert}\cos(5(x-3))\,e^{-ix}\,dx$, split at $x=3$, returns $-0.1484988745 - 0.0211680012\,i$, agreeing to ten decimal places.

**Step 5: the checks of the method.** $\hat f(0) = \tfrac{2}{29}+\tfrac{2}{29} = \tfrac{4}{29} = 0.137931$, which must equal $\int f$; direct integration of $\int e^{-2\lvert y\rvert}\cos 5y\,dy = 2\cdot\frac{2}{4+25}$ confirms it. And $f$ is real, so $\hat f(-k)=\overline{\hat f(k)}$ must hold: at $k=-1$ the bracket is unchanged (it is even in $k$) and the phase conjugates, as required.
:::

:::application{provenance=original}
**Spectroscopy and line shapes.** The example above is the standard model of a radiating atom: an oscillation at the transition frequency $\omega_0$, damped at rate $\gamma$ by spontaneous emission. Its transform is a pair of Lorentzians of half-width $\gamma$ centred at $\pm\omega_0$, and the measured line width is therefore the inverse lifetime. Nothing but the operational rules is needed to get there, and the same calculation with a Gaussian damping — Doppler broadening instead of radiative damping — gives a Gaussian line, which is how the two broadening mechanisms are told apart in a spectrum.

**Fraunhofer diffraction.** For a slit of half-width $Y$ illuminated normally by light of wave number $K$, the amplitude observed at angle $\theta$ is, in the far field, the Fourier transform of the aperture function $f(y)$ evaluated at the spatial frequency $k = K\sin\theta$; :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.2, pp. 437–439"} derive this from the superposition of Huygens wavelets. A uniform slit is the square pulse of the table, so the amplitude is $2\sin(kY)/k$ and the intensity the familiar $\operatorname{sinc}^2$ pattern, with first zeros at $\sin\theta = \pm\pi/(KY)$. Rule 1 says that displacing the slit changes only a phase, so the intensity pattern is independent of where the aperture sits; rule 3 says that a narrower slit diffracts more widely.

**Solving differential equations.** Rule 6 turns $d/dx$ into multiplication by $ik$, so a linear constant-coefficient differential equation on the line becomes an algebraic equation for $\hat u$, which is why the transform is the standard tool for the heat, wave and Poisson equations on unbounded domains; :cite[Hassani]{work=hassani-2013 loc="§9.2.1, pp. 284–285"} works this through for a general second-order ordinary differential equation and obtains $\tilde y(k) = \tilde f(k)/(-C_2k^2+iC_1k+C_0)$. The cost, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.3, pp. 984–985"} note, is that the method presupposes the solution is unique and decays at infinity, which is really a boundary condition in disguise.

**Momentum space in quantum mechanics.** For a wave function $\psi(x)$, $\hat\psi(k)$ is the amplitude for the particle to be found with momentum $\hbar k$. Rule 6 is then the statement that the momentum operator $-i\hbar\,d/dx$ acts as multiplication by $\hbar k$ in the transform variable, and rule 7 that position acts as $i\,d/dk$; the two rules together are the canonical commutation relation. Rule 3, read with the Gaussian line of the table, is already the statement that a narrow wave packet has a broad momentum distribution, made quantitative in :ref[]{to=fourier.uncertainty-principle}.
:::
