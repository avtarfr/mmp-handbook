---
id: fourier.fourier-series
title: Fourier series
kind: definition
level: core
summary: "Defines the Fourier coefficients and Fourier series of an integrable function on an interval of any length, in both the complex-exponential and the real sine-cosine form, shows that the trigonometric system is orthogonal and that the coefficients of a uniformly convergent trigonometric series are forced to be these integrals, and sets up the even and odd extensions that turn a function given on half an interval into a cosine or sine half-range series."
prereqs: [linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 2, §1.1 (Main definitions and some examples), the coefficient integral on an interval of length $L$, the formal series, the notation $f \\sim \\sum a_n e^{2\\pi i n x/L}$, the symmetric partial sum $S_N(f)$, and the independence of the coefficients of the chosen period interval, pp. 34–35; Ch. 2, §2, Thm 2.1 and Cor. 2.2, pp. 39–41"
    pages: "34-35, 39-41"
    role: the convention with $\\mathrm{e}^{2\\pi \\mathrm{i} n x/L}$ on an interval of arbitrary length $L$, the deliberately formal status of the series, the symmetric partial sum as the object whose limit defines convergence, the independence of the coefficients of which period interval is used, and the fact that vanishing coefficients force $f$ to vanish only where $f$ is continuous
  - work: stakgold-holst-2011
    loc: "§2.3 (Review of Classical Results), the trigonometric series in complex form (2.3.1), the symmetric partial sums (2.3.2), the equivalent real form (2.3.3) with the dictionary (2.3.4), the orthonormal system (2.3.6), and the derivation of (2.3.7)–(2.3.8) from uniform convergence, pp. 127–129; Change of Scale, p. 137"
    pages: "127-129, 137"
    role: the statement that the coefficients of a uniformly convergent trigonometric series must be the Fourier integrals, with uniform convergence as the stated hypothesis; the explicit dictionary between the complex and real coefficients; the remark that $\\hat f(0)$ is the mean; the rescaling from period $2\\pi$ to period $T$
  - work: strauss-2008
    loc: "§5.1 (The coefficients), the sine series and its coefficients (1)–(4), the cosine series (6)–(7), and the full series on $(-l,l)$ with (8)–(10), pp. 104–107; §5.2, the even and odd extensions (6)–(7), the identification of sine and cosine series with the odd and even extensions, the correspondence (8)–(10) between boundary conditions and extensions, and the complex form (12)–(13), pp. 115–116"
    pages: "104-107, 115-116"
    role: the half-range sine and cosine series on $(0,l)$ with their coefficient formulas, the even and odd extensions including the value at the origin, the route from the orthogonality relations to the coefficients by termwise integration, and the correspondence between Dirichlet, Neumann and periodic boundary conditions and the odd, even and plain extensions
  - work: rhb-2006
    loc: "§12.1 (the Dirichlet conditions) and the even-plus-odd decomposition, pp. 415–416; §12.2, the orthogonality integrals (12.1)–(12.3), the series (12.4) with the factor $\\tfrac12$ on $a_0$, and the coefficients (12.5)–(12.6) over an arbitrary period interval $[x_0, x_0+L]$, pp. 417–418; §12.3 (Symmetry considerations), p. 419; §12.5 (Non-periodic functions) with Figure 12.4 and the warning about discontinuous continuations, pp. 422, 424; §12.7, the complex series (12.9)–(12.11), pp. 424–425"
    pages: "415-419, 422, 424-425"
    role: the orthogonality integrals in the real form over an interval of arbitrary length with an arbitrary base point, the reason a function needs both sines and cosines, the vanishing of half the coefficients for even and odd functions, the catalogue of possible periodic extensions of a function given on $(0,L)$ with the warning that the extension must not introduce a jump at the ends of the interval of interest, and the complex-to-real coefficient dictionary
  - work: arfken-2013
    loc: "§19.1 (General properties), the series (19.1) with the coefficients (19.2)–(19.3) on $[0,2\\pi]$, the exponential form (19.4)–(19.6), the Sturm-Liouville reading of the trigonometric system as the eigenfunctions of $-y''$ with periodic boundary conditions and the resulting orthonormal sets, pp. 935–937; Periodic Functions, the rescaled series (19.10)–(19.12) and the reading of the terms as harmonics of a fundamental frequency, pp. 939–940; Symmetry, (19.13)–(19.14) and Example 19.1.2, pp. 940–941"
    pages: "935-937, 939-941"
    role: the normalisation of the real form with $a_0/2$ and the reason for it, the orthonormalised trigonometric and exponential systems, the identification of the system as the eigenfunctions of a Sturm-Liouville problem with periodic boundary conditions, the rescaling to a general period, the names Fourier sine series and Fourier cosine series, and the observation that the three expansions of one function agree inside the interval of definition and diverge in behaviour outside it
---

:::definition[Fourier coefficients and Fourier series]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, §1.1, pp. 34–35; stakgold-holst-2011:§2.3, eqs. (2.3.1)–(2.3.4) and (2.3.7)–(2.3.8), pp. 127–129, and Change of Scale, p. 137; arfken-2013:§19.1, eqs. (19.1)–(19.6), pp. 935–936, and eqs. (19.10)–(19.12), pp. 939–940; rhb-2006:§12.2, eqs. (12.4)–(12.6), pp. 417–418, and §12.7, eqs. (12.9)–(12.11), pp. 424–425"}
Fix a period $L>0$ and a base point $a\in\mathbb{R}$, and let $f$ be integrable on $I=[a,a+L]$, meaning $\int_{I}\lvert f\rvert<\infty$. The **$n$th Fourier coefficient** of $f$ is the number

$$
\hat f(n) \;=\; \frac{1}{L}\int_{a}^{a+L} f(x)\,\mathrm{e}^{-2\pi \mathrm{i} n x/L}\,\mathrm{d}x ,
\qquad n\in\mathbb{Z},
$$

and the **Fourier series** of $f$ is the expression

$$
\sum_{n=-\infty}^{\infty}\hat f(n)\,\mathrm{e}^{2\pi \mathrm{i} n x/L}.
$$

Writing $f\sim\sum_n \hat f(n)\mathrm{e}^{2\pi\mathrm{i}nx/L}$ is shorthand for "the displayed series is the one built from $f$ by the formula above"; the symbol $\sim$ carries no claim about convergence, and none is made here. Following Stein and Shakarchi we always read convergence as the limit of the **symmetric partial sums**

$$
S_N(f)(x) \;=\; \sum_{n=-N}^{N}\hat f(n)\,\mathrm{e}^{2\pi \mathrm{i} n x/L},
\qquad N\in\mathbb{N},
$$

each of which is a trigonometric polynomial of degree $N$. A general **trigonometric series** is any $\sum_n c_n \mathrm{e}^{2\pi\mathrm{i}nx/L}$ with $c_n\in\mathbb{C}$; its coefficients need not be the Fourier coefficients of anything.

Since every $\mathrm{e}^{2\pi\mathrm{i}nx/L}$ has period $L$, so does the series. Hence the natural home of the definition is a function of period $L$ on the whole line, or equivalently a function on a circle of circumference $L$; a function given only on $I$ is extended to the line by $f(x+L)=f(x)$, which is what the series will represent. The coefficients do not depend on the base point $a$: see part 1 of the statement below.

**The real form.** It is often convenient to write the period as $L=2l$ and use the interval $(-l,l)$. Then the series above can be rearranged into the real **sine-cosine form**

$$
\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos\frac{n\pi x}{l}+b_n\sin\frac{n\pi x}{l}\right),
\qquad
\begin{aligned}
a_n &= \frac{1}{l}\int_{-l}^{l} f(x)\cos\frac{n\pi x}{l}\,\mathrm{d}x, &&n=0,1,2,\dots\\
b_n &= \frac{1}{l}\int_{-l}^{l} f(x)\sin\frac{n\pi x}{l}\,\mathrm{d}x, &&n=1,2,\dots
\end{aligned}
$$

The constant term is written $a_0/2$ rather than $a_0$ precisely so that one formula gives every $a_n$, including $n=0$; this is the normalisation of Arfken, Weber and Harris and of Riley, Hobson and Bence. The two sets of coefficients are related by

$$
a_n = \hat f(n)+\hat f(-n),
\qquad
b_n = \mathrm{i}\bigl(\hat f(n)-\hat f(-n)\bigr),
\qquad
\hat f(\pm n) = \tfrac12\bigl(a_n \mp \mathrm{i}b_n\bigr)
\quad (n\ge1),
$$

with $a_0=2\hat f(0)$. In particular $\hat f(0)=a_0/2$ is the mean value of $f$ over one period. If $f$ is real-valued then $\hat f(-n)=\overline{\hat f(n)}$ for every $n$, equivalently all $a_n$ and $b_n$ are real. The reverse implication is weaker than it looks and must be stated carefully: if $\hat f(-n)=\overline{\hat f(n)}$ for every $n$, then the function $f-\overline f$ has every Fourier coefficient zero, and by Stein and Shakarchi's Theorem 2.1 (quoted in the remark below) it therefore vanishes at every point where it is continuous. So all one may conclude is that $f$ is real at each of its points of continuity; it may be non-real on a set of measure zero, and no statement about the coefficients can exclude that.

**Conventions differ, and the differences are only bookkeeping.** Stein and Shakarchi put the $2\pi$ in the exponent and work with $\mathrm{e}^{2\pi\mathrm{i}nx/L}$ on an interval of length $L$; Stakgold and Holst, Arfken, Weber and Harris, and most physics texts take $L=2\pi$ and write $\mathrm{e}^{\mathrm{i}nx}$, rescaling at the end; Riley, Hobson and Bence keep a general period $L$ in the real form, so their cosine is $\cos(2\pi n x/L)$ where ours, with $L=2l$, is $\cos(n\pi x/l)$ — the same function. Strauss writes the full series on $(-l,l)$ exactly as above. We use $L$ for the period throughout and set $L=2l$ whenever the real form is in play, so that $l$ is the half-period, and we flag any departure.
:::

:::definition[Even and odd extensions; half-range series]{provenance=adapted src="strauss-2008:§5.2, eqs. (6)–(7) and the identification of the sine and cosine series with the odd and even extensions, p. 115, and §5.1, eqs. (1), (4), (6), (7), pp. 104–106; rhb-2006:§12.5, Figure 12.4 and the discussion of possible continuations, p. 422; arfken-2013:§19.1, eqs. (19.13)–(19.14) and the naming of the sine and cosine series, p. 941"}
Let $\varphi$ be integrable on $(0,l)$. Its **even extension** to $(-l,l)$ is

$$
\varphi_{\mathrm{even}}(x) = \begin{cases}\varphi(x), & 0<x<l,\\ \varphi(-x), & -l<x<0,\end{cases}
$$

and its **odd extension** is

$$
\varphi_{\mathrm{odd}}(x) = \begin{cases}\varphi(x), & 0<x<l,\\ -\varphi(-x), & -l<x<0,\\ 0,& x=0.\end{cases}
$$

Strauss sets the odd extension to $0$ at the origin, as we do; the even extension need not be defined there. Each is then extended to the line with period $2l$. These are the only even and odd extensions there are, so the construction involves no choice.

The **half-range sine series** of $\varphi$ on $(0,l)$ is

$$
\sum_{n=1}^{\infty}B_n\sin\frac{n\pi x}{l},
\qquad
B_n = \frac{2}{l}\int_{0}^{l}\varphi(x)\sin\frac{n\pi x}{l}\,\mathrm{d}x ,
$$

and the **half-range cosine series** is

$$
\frac{A_0}{2}+\sum_{n=1}^{\infty}A_n\cos\frac{n\pi x}{l},
\qquad
A_n = \frac{2}{l}\int_{0}^{l}\varphi(x)\cos\frac{n\pi x}{l}\,\mathrm{d}x ,
\quad n\ge 0 .
$$

The name records that the coefficient integral runs over half the period. Arfken, Weber and Harris call these the Fourier sine and Fourier cosine series. Part 4 of the statement identifies them with the full series of $\varphi_{\mathrm{odd}}$ and $\varphi_{\mathrm{even}}$, which is why the factor is $2/l$ here and $1/l$ in the full series: the integrand is even in both cases, so half the interval carries half the integral.
:::

:::statement[Orthogonality, and that the coefficients are forced]{provenance=adapted src="rhb-2006:§12.2, eqs. (12.1)–(12.3), p. 417, and §12.7, the exponential orthogonality relation, p. 425; stakgold-holst-2011:§2.3, eqs. (2.3.5)–(2.3.8), pp. 128–129; strauss-2008:§5.1, eq. (2), p. 104, and §5.2, pp. 115–116; arfken-2013:§19.1, the orthonormal systems, p. 936, and eqs. (19.13)–(19.14), p. 941; stein-shakarchi-2003:Ch. 2, §1.1, p. 35"}
Let $L=2l>0$ and write $e_n(x)=\mathrm{e}^{2\pi\mathrm{i}nx/L}$. Equip the space of square-integrable functions on an interval $I$ of length $L$ with the inner product $(u,v)=\int_I u\overline{v}$, in the convention of :ref[]{to=linalg.inner-product-spaces}.

1. **Orthogonality.** For all $m,n\in\mathbb{Z}$ and every base point $a$,
   $$
   \frac{1}{L}\int_{a}^{a+L} e_n\overline{e_m} = \delta_{nm},
   $$
   so $\{e_n\}_{n\in\mathbb{Z}}$ is orthogonal with $\lVert e_n\rVert^2=L$, and $\{L^{-1/2}e_n\}$ is orthonormal. Equivalently, in real form, for integers $r,p\ge0$,
   $$
   \int_{a}^{a+L}\!\!\sin\frac{r\pi x}{l}\cos\frac{p\pi x}{l}\,\mathrm{d}x = 0
   \ \text{ for all } r,p,
   $$
   $$
   \int_{a}^{a+L}\!\!\cos\frac{r\pi x}{l}\cos\frac{p\pi x}{l}\,\mathrm{d}x
   =\begin{cases}L,& r=p=0,\\ \tfrac12 L,& r=p>0,\\ 0,& r\neq p,\end{cases}
   \qquad
   \int_{a}^{a+L}\!\!\sin\frac{r\pi x}{l}\sin\frac{p\pi x}{l}\,\mathrm{d}x
   =\begin{cases}\tfrac12 L,& r=p>0,\\ 0,& \text{otherwise.}\end{cases}
   $$
   Separately, and not as a consequence of these relations, $\hat f(n)$ is unchanged if the interval $[a,a+L]$ is replaced by any other interval of length $L$, provided $f$ has period $L$; this is proved on its own below.
2. **The coefficients are forced.** Suppose a trigonometric series $\sum_{n}c_n e_n$ converges **uniformly** on an interval of length $L$, with sum $f$. Then $f$ is continuous, and it extends to a continuous function of period $L$ on the whole line — the series converges uniformly on every interval of length $L$, since each $e_n$ has period $L$ — and, with $\hat f(n)$ computed from that extension,
   $$
   c_n = \hat f(n) \quad\text{for every } n\in\mathbb{Z}.
   $$
   In the real form: if $\tfrac12\alpha_0+\sum_{n\ge1}(\alpha_n\cos(n\pi x/l)+\beta_n\sin(n\pi x/l))$ converges uniformly to $f$, then $\alpha_n=a_n$ and $\beta_n=b_n$. In particular a function has at most one uniformly convergent trigonometric expansion.
3. **Symmetry.** Let $f$ be integrable on $(-l,l)$. If $f$ is even then $b_n=0$ for all $n$; if $f$ is odd then $a_n=0$ for all $n$, including $a_0$. In either case the surviving coefficients may be computed on $(0,l)$ alone, with the factor $2/l$.
4. **Half-range series.** Let $\varphi$ be integrable on $(0,l)$. The half-range sine series of $\varphi$ is exactly the full Fourier series of $\varphi_{\mathrm{odd}}$ on $(-l,l)$, and the half-range cosine series of $\varphi$ is exactly the full Fourier series of $\varphi_{\mathrm{even}}$: that is, $B_n=b_n[\varphi_{\mathrm{odd}}]$ and $A_n=a_n[\varphi_{\mathrm{even}}]$, with all other coefficients zero. Both series therefore have period $2l$. Nothing here asserts that either series converges, let alone to $\varphi$: the claim is only that the two coefficient families coincide, so that whatever one series does on $(0,l)$ the other does to the reflected data on $(-l,0)$.
:::

:::idea{provenance=original}
Everything here is one move from finite-dimensional linear algebra, done in a space of functions. The exponentials $e_n$ are mutually orthogonal for the integral inner product over one period, and each has the same length $\sqrt L$. In a finite-dimensional space with an orthogonal basis, the coefficient of a basis vector in an expansion is recovered by taking one inner product and dividing by the squared length; the formula for $\hat f(n)$ is that recipe, nothing more. What distinguishes the infinite-dimensional case is that the expansion is now an infinite sum, so recovering a coefficient requires interchanging an integral with a limit. Uniform convergence is exactly the hypothesis that licenses the interchange, which is why part 2 asks for it and asks for nothing else. The symmetry and half-range statements then follow from a single observation: the coefficient integral of an odd function over a symmetric interval vanishes, and $\sin$ is odd while $\cos$ is even.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.3, the derivation of (2.3.7)–(2.3.8), p. 128; strauss-2008:§5.1, the proof of (2) and the termwise integration leading to (4), pp. 104–105, and §5.2, p. 116; rhb-2006:§12.2, the derivation of (12.5)–(12.6) from (12.7), pp. 417–418"}
**Part 1, the exponential relations.** Put $k=n-m$. If $k=0$ the integrand $e_n\overline{e_m}$ is identically $1$ and the integral is $L$. If $k\neq0$ then $\mathrm{e}^{2\pi\mathrm{i}kx/L}$ has the antiderivative $(L/2\pi\mathrm{i}k)\,\mathrm{e}^{2\pi\mathrm{i}kx/L}$, so

$$
\int_{a}^{a+L}\mathrm{e}^{2\pi\mathrm{i}kx/L}\,\mathrm{d}x
=\frac{L}{2\pi\mathrm{i}k}\Bigl(\mathrm{e}^{2\pi\mathrm{i}k(a+L)/L}-\mathrm{e}^{2\pi\mathrm{i}ka/L}\Bigr)
=\frac{L}{2\pi\mathrm{i}k}\,\mathrm{e}^{2\pi\mathrm{i}ka/L}\bigl(\mathrm{e}^{2\pi\mathrm{i}k}-1\bigr)=0,
$$

because $k$ is an integer. Dividing by $L$ gives $\delta_{nm}$, and $\lVert e_n\rVert^2=\int_I\lvert e_n\rvert^2=L$ since $\lvert e_n\rvert=1$. Note that the base point $a$ dropped out of the calculation. All that was used is that each $e_n$ has period $L$, which is where $\mathrm{e}^{2\pi\mathrm{i}k}=1$ came from; the periodicity of $f$ plays no part here, and is a separate hypothesis used only in the base-point paragraph two paragraphs below.

**Part 1, the real relations.** Write $\theta_r=r\pi x/l=2\pi r x/L$, so that $\mathrm{e}^{\mathrm{i}\theta_r}=e_r(x)$, and replace each cosine and sine by $\cos\theta_r=\tfrac12(\mathrm{e}^{\mathrm{i}\theta_r}+\mathrm{e}^{-\mathrm{i}\theta_r})$ and $\sin\theta_r=\tfrac1{2\mathrm{i}}(\mathrm{e}^{\mathrm{i}\theta_r}-\mathrm{e}^{-\mathrm{i}\theta_r})$. Each product becomes a sum of four exponentials, at the frequencies $r+p$, $r-p$, $-(r-p)$ and $-(r+p)$ (the *frequency* of $\mathrm{e}^{2\pi\mathrm{i}kx/L}$ being the integer $k$). By the exponential relations, integrating over $[a,a+L]$ gives each such term $L$ times its coefficient if its frequency is zero, and nothing otherwise, so only the zero-frequency terms have to be counted.

For the sine-cosine product, $\sin\theta_r\cos\theta_p=\tfrac1{4\mathrm{i}}\bigl(\mathrm{e}^{\mathrm{i}(\theta_r+\theta_p)}+\mathrm{e}^{\mathrm{i}(\theta_r-\theta_p)}-\mathrm{e}^{-\mathrm{i}(\theta_r-\theta_p)}-\mathrm{e}^{-\mathrm{i}(\theta_r+\theta_p)}\bigr)$. If $r\neq p$ and $r+p>0$, no frequency is zero and the integral is $0$. If $r=p>0$ the two middle terms both have frequency zero and their coefficients are $+\tfrac1{4\mathrm{i}}$ and $-\tfrac1{4\mathrm{i}}$, so they cancel; if $r=p=0$ the integrand is identically $0$. So the integral vanishes for all $r,p\ge0$.

For the two like products, $\cos\theta_r\cos\theta_p=\tfrac14\bigl(\mathrm{e}^{\mathrm{i}(\theta_r+\theta_p)}+\mathrm{e}^{\mathrm{i}(\theta_r-\theta_p)}+\mathrm{e}^{-\mathrm{i}(\theta_r-\theta_p)}+\mathrm{e}^{-\mathrm{i}(\theta_r+\theta_p)}\bigr)$ and $\sin\theta_r\sin\theta_p=-\tfrac14\bigl(\mathrm{e}^{\mathrm{i}(\theta_r+\theta_p)}-\mathrm{e}^{\mathrm{i}(\theta_r-\theta_p)}-\mathrm{e}^{-\mathrm{i}(\theta_r-\theta_p)}+\mathrm{e}^{-\mathrm{i}(\theta_r+\theta_p)}\bigr)$. With $r,p\ge0$ and $r\neq p$ every frequency is nonzero and both integrals vanish. For $r=p>0$ it is the *two* middle terms that survive, the pair at frequency $r-p=0$; each carries coefficient $+\tfrac14$ in both products, contributing $L/4$ apiece, so each integral is $L/4+L/4=L/2$. For $r=p=0$ the cosine integrand is $1$ and the integral is $L$ — here all four exponentials have frequency zero, with coefficients summing to $1$ — while the sine integrand is identically $0$.

**Part 1, independence of the base point.** Let $f$ have period $L$ and let $b$ be any other base point. Then $\int_b^{b+L}f e_{-n} - \int_a^{a+L}f e_{-n}$ is a difference of integrals over two intervals of equal length $L$; since the integrand $fe_{-n}$ has period $L$, the part of $[b,b+L]$ outside $[a,a+L]$ is a translate by $\pm L$ of the part of $[a,a+L]$ outside $[b,b+L]$, and the two contributions are equal. Hence the difference is zero.

**Part 2.** Let $s_N=\sum_{\lvert n\rvert\le N}c_n e_n$ and suppose $s_N\to f$ uniformly on $I=[a,a+L]$. Each $s_N$ is continuous, and continuity survives passage to a uniform limit (:ref[]{to=found.uniform-convergence}). That argument is a single line, so we give it here rather than lean on another unit for it: for $x,y\in I$,

$$
\lvert f(x)-f(y)\rvert\le 2\max_I\lvert f-s_N\rvert+\lvert s_N(x)-s_N(y)\rvert ,
$$

and choosing $N$ to make the first term small and then $y$ close to $x$ to make the second small shows $f$ is continuous at $x$. Each $e_n$ has period $L$, hence so does each $s_N$; the same series therefore converges uniformly on every translate of $I$ by a multiple of $L$, and the function it defines on the whole line is continuous of period $L$ and agrees with $f$ on $I$. That extension is the $f$ meant in the statement. Fix $m$ and multiply by the bounded function $\overline{e_m}$, which does not disturb uniform convergence since $\lvert e_m\rvert=1$: $s_N\overline{e_m}\to f\overline{e_m}$ uniformly on $I$. A uniformly convergent sequence on an interval of finite length may be integrated term by term, because

$$
\left\lvert\int_I s_N\overline{e_m}-\int_I f\overline{e_m}\right\rvert
\le \int_I\lvert s_N-f\rvert \le L\max_I\lvert s_N-f\rvert\longrightarrow 0 .
$$

For each fixed $N$ the integral of the finite sum is a finite sum of integrals, and by part 1 only the term $n=m$ survives, so $\int_I s_N\overline{e_m}=Lc_m$ as soon as $N\ge\lvert m\rvert$. Letting $N\to\infty$ gives $Lc_m=\int_I f\overline{e_m}$, which is $c_m=\hat f(m)$. The real statement follows by applying this to the exponential form obtained from the dictionary in the definition, or by repeating the argument with $\cos(m\pi x/l)$ and $\sin(m\pi x/l)$ in place of $\overline{e_m}$ and using the real orthogonality relations, which is the route Riley, Hobson and Bence take. Uniqueness is immediate: both expansions have the same coefficients, namely those of their common sum.

**Part 3.** Take the interval $(-l,l)$, which is symmetric about $0$. If $f$ is even then $f(x)\sin(n\pi x/l)$ is a product of an even and an odd function, hence odd, and the integral of an odd function over a symmetric interval vanishes: $b_n=0$. If $f$ is odd then $f(x)\cos(n\pi x/l)$ is odd for every $n\ge0$ — the case $n=0$ included, since $\cos 0=1$ — so every $a_n$ vanishes, $a_0$ among them. In the surviving cases the integrand is even, so $\int_{-l}^{l}=2\int_0^l$, which converts the factor $1/l$ into $2/l$.

**Part 4.** Apply part 3 to $f=\varphi_{\mathrm{odd}}$. It is odd by construction, so all its $a_n$ vanish, and

$$
b_n[\varphi_{\mathrm{odd}}]=\frac1l\int_{-l}^{l}\varphi_{\mathrm{odd}}(x)\sin\frac{n\pi x}{l}\,\mathrm{d}x
=\frac2l\int_{0}^{l}\varphi(x)\sin\frac{n\pi x}{l}\,\mathrm{d}x = B_n ,
$$

using that $\varphi_{\mathrm{odd}}=\varphi$ on $(0,l)$ and that the single point $x=0$ contributes nothing to an integral. So the full series of $\varphi_{\mathrm{odd}}$ is $\sum_n B_n\sin(n\pi x/l)$, the half-range sine series. The cosine case is the same computation with $f=\varphi_{\mathrm{even}}$, which is even, so its $b_n$ vanish and $a_n[\varphi_{\mathrm{even}}]=A_n$. Both extensions were given period $2l$, so both series do. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, §2, Thm 2.1 and Cor. 2.2, pp. 39–41; rhb-2006:§12.5, the warning about the continuation at the end-points, pp. 422 and 424; arfken-2013:§19.1, Example 19.1.2 and Figure 19.3, pp. 941–942; strauss-2008:§5.2, eqs. (8)–(10), p. 115"}
**Integrability** is all that is needed for $\hat f(n)$ to exist: $\lvert f e_{-n}\rvert=\lvert f\rvert$, so the defining integral converges absolutely whenever $\int_I\lvert f\rvert<\infty$. Nothing weaker will do, and nothing stronger is required to *write down* the series.

**Uniform convergence** in part 2 is used at exactly one step, the interchange of the integral with the limit, and the displayed estimate shows how: the error is bounded by the period times the uniform error. Two consequences of insisting on it are worth separating. First, it forces the sum $f$ to be continuous, so part 2 says nothing whatever about a function with a jump — for those, the series is defined by the coefficient integrals and convergence has to be proved, which is the business of :ref[]{to=fourier.dirichlet-convergence} and :ref[]{to=fourier.fejer-theorem}. Second, part 2 is a statement about a series that is *given* as convergent; it does not say that the Fourier series of a function converges to it. Weakening the hypothesis to pointwise convergence invalidates the proof, since the estimate above then has no uniform bound to work with.

**Why the coefficients cannot determine $f$ everywhere.** Changing $f$ at finitely many points leaves every $\hat f(n)$ unchanged, so no theorem can conclude $f=g$ pointwise from $\hat f=\hat g$. Stein and Shakarchi's Theorem 2.1 gives the sharp positive statement in this direction: if $f$ is integrable on the circle with $\hat f(n)=0$ for every $n$, then $f(\theta_0)=0$ at every point $\theta_0$ where $f$ is continuous. Their Corollary 2.2 is the clean case: a continuous $f$ with all coefficients zero is identically zero. Our part 2 is consistent with this and weaker, since it starts from a convergent series.

**Periodicity** is what makes the base point irrelevant, and only that. For an $f$ merely given on $[a,a+L]$ with $f(a)\neq f(a+L)$, the periodic extension has a jump at the end-points, and the coefficients computed from a shifted interval are the coefficients of a *different* periodic function. This is the trap Riley, Hobson and Bence flag for extensions: a continuation that is discontinuous at an end-point of the interval of interest will not converge to the wanted value there. Their own example is the odd extension of $x^2$ from $(0,2]$, whose series converges at $x=2$ to $0$ rather than to $4$, because the odd extension jumps from $4$ to $-4$ across $x=2$. The cure is to choose the extension, when one is free to, so that no jump is created: $\varphi_{\mathrm{even}}$ is continuous at $0$ and at $\pm l$ whenever $\varphi$ is continuous on $[0,l]$, whereas $\varphi_{\mathrm{odd}}$ is continuous at $0$ only if $\varphi(0+)=0$ and at $l$ only if $\varphi(l-)=0$.

**Which extension to use is dictated by the problem, not by taste.** Strauss's correspondence is the operational version: homogeneous Dirichlet conditions $u(0)=u(l)=0$ go with the odd extension and hence a sine series, because every $\sin(n\pi x/l)$ vanishes at both ends; homogeneous Neumann conditions $u'(0)=u'(l)=0$ go with the even extension and a cosine series, because every $\cos(n\pi x/l)$ has vanishing derivative at both ends; genuinely periodic conditions go with the plain periodic extension and the full series. Arfken, Weber and Harris make the complementary point with $f(x)=x$ on $[0,\pi]$: its sine series, its cosine series and its power series all represent it on $[0,\pi]$ and disagree sharply outside, because the three carry different assumptions about symmetry and periodicity.

**A hypothesis we did not impose.** Riley, Hobson and Bence state four *Dirichlet conditions* on $f$ — periodicity, single-valuedness with at most finitely many finite discontinuities, finitely many maxima and minima in a period, and convergence of $\int\lvert f\rvert$ over a period — as the conditions under which a Fourier expansion is valid; Arfken, Weber and Harris give the same name to the last three and call such an $f$ piecewise regular, remarking that they are sufficient but not necessary. None of them are needed for anything in this unit: they are convergence hypotheses, and they belong with the convergence theorems.
:::

:::method[Computing a Fourier series]{provenance=adapted src="strauss-2008:§5.1, eqs. (4), (7), (9)–(10), pp. 104–107, and §5.2, eqs. (6)–(10), p. 115; rhb-2006:§12.3, p. 419, and §12.5, p. 422; arfken-2013:§19.1, Summing Fourier Series, Example 19.1.3, p. 944, and eqs. (19.11)–(19.12), p. 939"}
1. **Fix the period and the extension.** Decide what the function is outside the interval you were given. If it is already periodic, use its period. If it is given on $(0,l)$ and you are free to choose, choose the extension the application forces: odd (sine series) for data that must vanish at both ends, even (cosine series) for data whose derivative must vanish at both ends, plain periodic otherwise. Record the resulting period: $2l$ for either half-range series.
2. **Use symmetry before integrating.** By part 3, an even function has no sine terms and an odd function no cosine terms, which halves the work. For a half-range series only one family appears by construction.
3. **Choose the form.** The real form is usually easier for polynomial and piecewise-constant data; the complex form is usually easier when the integrand contains $\mathrm{e}^{\alpha x}$, $\cosh$, or a product of trigonometric functions, since then everything is an exponential and the integral is elementary. Convert at the end with the dictionary $\hat f(\pm n)=\tfrac12(a_n\mp\mathrm{i}b_n)$.
4. **Evaluate the integrals.** For a polynomial integrand, integrate by parts repeatedly, each step lowering the degree by one and producing a boundary term; for data defined piecewise, split the integral at the break-points. Arfken, Weber and Harris's complementary device is worth remembering in the other direction: to identify the *sum* of a given trigonometric series, replace the trigonometric functions by exponentials and look for a Maclaurin series you recognise — their example sums $\sum_{n\ge1}n^{-1}\cos nx$ to $-\ln\lvert 2\sin(x/2)\rvert$ by recognising two copies of $-\ln(1-z)$.
5. **Check before you use it.** Four cheap tests catch most errors. (i) $a_0/2=\hat f(0)$ must equal the mean of $f$ over a period; in particular it vanishes for an odd function. (ii) The parity predicted by step 2 must actually hold in the answer. (iii) Evaluate the series at a point where you know $f$ and where the trigonometric functions are simple ($x=0$, $x=l/2$, $x=l$) and compare; this both tests the coefficients and, as a by-product, evaluates a numerical series. (iv) Check the decay rate of the coefficients against the smoothness of the periodic extension you built in step 1, using :ref[]{to=fourier.smoothness-decay}: coefficients falling like $1/n$ signal a jump, like $1/n^2$ a corner. If step 1 produced a jump you did not intend, this is where it shows up.
:::

:::example[The two half-range series of a parabolic profile]{provenance=original}
Take $\varphi(x)=x(L-x)$ on $(0,L)$, with $L>0$, so the half-period is $l=L$ and both half-range series have period $2L$. (Note the clash of notation with the definition block, where $L$ was the period: in this example and in the application below, $L$ is the length of the interval the function is given on, so the period of either half-range series is $2L$.) The function is non-negative, vanishes at both ends, and peaks at $L^2/4$ in the middle: it is the shape of a string pulled aside with a smooth parabolic profile.

**Step 1: the sine series.** With $\varphi(0)=\varphi(L)=0$ the odd extension is continuous, so the sine series is the natural choice. Integrating by parts twice, with $s=\sin(n\pi x/L)$ and $c=\cos(n\pi x/L)$,

$$
\int_0^L x(L-x)\,s\,\mathrm{d}x
=\Bigl[-\frac{L}{n\pi}x(L-x)\,c\Bigr]_0^L+\frac{L}{n\pi}\int_0^L (L-2x)\,c\,\mathrm{d}x .
$$

The boundary term vanishes at both ends because $x(L-x)$ does. In the remaining integral, integrate by parts once more:

$$
\frac{L}{n\pi}\int_0^L(L-2x)\,c\,\mathrm{d}x
=\frac{L}{n\pi}\Bigl(\Bigl[\frac{L}{n\pi}(L-2x)\,s\Bigr]_0^L+\frac{2L}{n\pi}\int_0^L s\,\mathrm{d}x\Bigr)
=\frac{2L^2}{n^2\pi^2}\cdot\frac{L}{n\pi}\bigl(1-(-1)^n\bigr),
$$

where the $s$ boundary term vanished because $\sin 0=\sin n\pi=0$, and $\int_0^L s\,\mathrm{d}x=(L/n\pi)(1-\cos n\pi)$. Multiplying by $2/L$,

$$
B_n=\frac{4L^2\bigl(1-(-1)^n\bigr)}{n^3\pi^3}
=\begin{cases}\dfrac{8L^2}{n^3\pi^3},& n \text{ odd},\\[4pt] 0,& n \text{ even},\end{cases}
\qquad\text{so}\qquad
x(L-x)\;\sim\;\frac{8L^2}{\pi^3}\sum_{n\ \mathrm{odd}}\frac{1}{n^3}\sin\frac{n\pi x}{L}.
$$

The even coefficients vanish for a reason visible in the picture: $\varphi$ is symmetric about $x=L/2$, and $\sin(n\pi x/L)$ is antisymmetric about that point for even $n$.

**Step 2: a checkable number.** Put $x=L/2$, where $\varphi=L^2/4$ and $\sin(n\pi/2)=(-1)^{(n-1)/2}$ for odd $n$. The series does converge to $\varphi$ there, by the following two steps. First, the series converges uniformly on $\mathbb{R}$, by the Weierstrass M-test (:ref[]{to=found.uniform-convergence}); the reason is one line, so we give it rather than lean on it: $\lvert B_n\sin(n\pi x/L)\rvert\le B_n$ for every $x$, so the tail beyond $N$ is bounded by $\sum_{n>N,\ n\ \mathrm{odd}}8L^2/(n^3\pi^3)$, a bound independent of $x$ which tends to $0$ because $\sum n^{-3}$ converges. Write $s$ for the sum. By part 2, $s$ is continuous, has period $2L$, and has Fourier coefficients exactly $B_n$ in the sine slots and $0$ elsewhere. Second, $\varphi_{\mathrm{odd}}$ has those same coefficients, by part 4, and it is continuous on the whole line: it vanishes at $0$ and at $\pm L$, which are the only places the pieces of the $2L$-periodic odd extension are joined. So $s-\varphi_{\mathrm{odd}}$ is continuous with every Fourier coefficient zero, and Stein and Shakarchi's Corollary 2.2 (quoted in the remark above) forces $s=\varphi_{\mathrm{odd}}$ identically. Part 2 alone could not have done this — it fixes the coefficients of $s$ and nothing more — which is exactly the point made in the remark. Evaluating at $x=L/2$ we get $L^2/4=(8L^2/\pi^3)\sum_{k\ge0}(-1)^k(2k+1)^{-3}$, that is

$$
\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)^3}=\frac{\pi^3}{32}=0.968946146\ldots
$$

Numerically the left side is $0.9689461462593694$ to sixteen figures and $\pi^3/32=0.9689461462593694$; the partial sums of the Fourier series at $x=L/2$, in units of $L^2$, run $0.2580$, $0.2485$, $0.2505$, $0.24993$, $0.25001$ for $1,2,3,6,11$ nonzero terms, oscillating in towards $0.25$ as the alternating series requires.

**Step 3: the cosine series of the same function.** Now extend evenly instead. The mean is

$$
\frac{A_0}{2}=\frac1L\int_0^L x(L-x)\,\mathrm{d}x=\frac1L\Bigl(\frac{L^3}{2}-\frac{L^3}{3}\Bigr)=\frac{L^2}{6},
$$

and two integrations by parts in the same pattern — this time the first boundary term vanishes because $\sin$ does at both ends, and the second survives because $\cos n\pi=(-1)^n$ — give

$$
A_n=\frac{2}{L}\int_0^L x(L-x)\cos\frac{n\pi x}{L}\,\mathrm{d}x
=\frac{2L^2\bigl((-1)^{n+1}-1\bigr)}{n^2\pi^2}
=\begin{cases}0,& n\text{ odd},\\[2pt] -\dfrac{4L^2}{n^2\pi^2},& n\text{ even},\end{cases}
$$

so, writing $n=2k$,

$$
x(L-x)\;\sim\;\frac{L^2}{6}-\frac{L^2}{\pi^2}\sum_{k=1}^{\infty}\frac{1}{k^2}\cos\frac{2k\pi x}{L}.
$$

**Step 4: the second checkable number.** The same two steps apply here: $\sum_k k^{-2}<\infty$ makes the cosine series uniformly convergent, with a continuous sum whose coefficients are the $A_n$; $\varphi_{\mathrm{even}}$ is continuous on the line, since the even extension of $x(L-x)$ takes the value $0$ at both $x=0$ and $x=\pm L$, where its pieces join; so the two continuous functions have the same coefficients and Corollary 2.2 identifies them. Setting $x=0$, where $\varphi_{\mathrm{even}}=0$ and every cosine equals $1$, the two displays therefore force $0=L^2/6-(L^2/\pi^2)\sum_{k\ge1}k^{-2}$, that is $\sum_{k\ge1}k^{-2}=\pi^2/6$ — the correct value, which is the test passing rather than a new derivation.

**What the two series show.** The same $\varphi$ on $(0,L)$ has been written in two different ways, and both are right on $(0,L)$. They differ in their periods' content outside it ($\varphi_{\mathrm{odd}}$ against $\varphi_{\mathrm{even}}$) and in their decay: $n^{-3}$ for the sine series against $n^{-2}$ for the cosine series. The reason is step 1 of the method. The odd extension of $x(L-x)$ is $x(L+x)$ on $(-L,0)$, and it is continuous with a continuous first derivative at $x=0$ and at $x=\pm L$: its derivative is $L-2\lvert x\rvert$ on $(-L,L)$, an *even* function, which matches itself across the join at $0$ and takes the common value $-L$ at both ends of the period. The even extension is $-x(L+x)$ on $(-L,0)$, whose derivative $-(L+2x)$ tends to $-L$ at $0-$ against $+L$ at $0+$: a corner at each join. One extension is smoother than the other, and the coefficients report it. Every coefficient and every numerical value above was checked symbolically with sympy and numerically to twelve figures with mpmath.
:::

:::application{provenance=original}
**A plucked string, mode by mode.** A string of length $L$ fixed at both ends, released from rest with displacement $\varphi(x)=x(L-x)$ scaled to a peak of $h$ — so the initial profile is $4h\,x(L-x)/L^2$ — vibrates as $u(x,t)=\sum_n C_n\sin(n\pi x/L)\cos(n\pi ct/L)$. The boundary conditions are Dirichlet at both ends, so step 1 of the method sends us to the sine series, and the example delivers the amplitudes outright:

$$
C_n=\frac{4h}{L^2}B_n=\frac{32h}{n^3\pi^3}\ \ (n\text{ odd}),\qquad C_n=0\ \ (n\text{ even}).
$$

The fundamental carries amplitude $32h/\pi^3\approx1.032\,h$, the third harmonic $1/27$ of that, the fifth $1/125$. Energy goes as amplitude squared times $n^2$, so the third harmonic holds about $(1/27)^2\times 9\approx1.2\%$ of the fundamental's energy: a smoothly plucked string is very nearly a pure tone, and the even harmonics are missing entirely because the pluck is symmetric about the midpoint. Pluck it off-centre and the symmetry argument fails, the even harmonics appear, and the tone brightens — which is why guitarists pick near the bridge for a harder sound. The same coefficients, with $\cos(n\pi ct/L)$ replaced by $\mathrm{e}^{-n^2\pi^2\kappa t/L^2}$, solve the heat equation on the same interval with the same initial profile and ends held at zero; there the high harmonics die fastest, and after a short time the profile is the fundamental alone.

**Insulated ends need the other series.** Replace "ends held at zero temperature" by "ends perfectly insulated" and the boundary conditions become $u_x=0$ at both ends. Now the admissible modes are $\cos(n\pi x/L)$, the extension to use is even, and the right expansion of the same initial profile is the cosine series of step 3 — including its constant term, which for the scaled profile $4h\,x(L-x)/L^2$ is $(4h/L^2)(L^2/6)=2h/3$ — the mean of the initial profile, and exactly the final steady state, since every other term decays. (The bare $L^2/6$ of step 3 is the constant term of the unscaled $x(L-x)$.) Using the sine series here would impose the wrong boundary condition and predict total cooling instead of equilibration at the mean. The choice of extension is a physical statement.

**Harmonic content of a periodic drive.** When a linear system is driven by a periodic force of period $T$, writing the force as a Fourier series in $t$ replaces one hard problem by a family of easy ones: each term $\hat F(n)\mathrm{e}^{2\pi\mathrm{i}nt/T}$ drives the system at a single frequency $n/T$, the response to it is the transfer function at that frequency times the coefficient, and the total response is the sum. The numbers $\lvert\hat F(n)\rvert^2$ are the power spectrum of the drive, and the usefulness of the decomposition depends entirely on linearity: for a nonlinear system the responses do not add, and the harmonics of the drive are not the harmonics of the response. It is also the reason a sharp-edged drive is hard on a resonant system: a jump in the forcing makes the coefficients decay only like $1/n$, so the drive has appreciable amplitude at arbitrarily high harmonics, and any one of them that coincides with a resonance is excited.
:::
