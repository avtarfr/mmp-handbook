---
id: num.spectral-methods
title: Spectral methods
kind: method
level: core
summary: Represents the unknown by its values on a Fourier or Chebyshev grid rather than by a difference stencil, so that differentiation becomes multiplication by $\mathrm{i}n$ or a dense differentiation matrix; proves that the interpolation error is at most twice the tail of the coefficient series, so the error falls like $N^{-k}$ for a $C^{k}$ function and geometrically for an analytic one; and identifies aliasing as the single mechanism behind both the error bound and the dealiasing rule for nonlinear terms.
prereqs: [fourier.dft-fft, spec.chebyshev-polynomials, fourier.smoothness-decay, complex.cauchy-theorem]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.3, Discrete and Fast Fourier Transforms: the interpolation problem at the $2N+1$ equally spaced points $x_k = 2k\\pi/(2N+1)$, the $(2N+1)$-dimensional space $\\mathcal{T}_N$ of trigonometric polynomials, the orthogonality of the vectors $(\\mathrm{e}^{\\mathrm{i}mx_k})_k$, the existence and uniqueness of the interpolant with coefficients (2.3.31), the Dirichlet-kernel form (2.3.32), and the remark that the coefficients are Riemann sums which are exact, pp. 140–142"
    pages: "140-142"
    role: the odd number of equally spaced nodes used here and the reason for it; the statement that trigonometric interpolation in $\mathcal{T}_N$ has one and only one solution; the identification of the interpolation coefficients with the discrete Fourier transform
  - work: rhb-2006
    loc: "§18.4, Chebyshev's equation and the substitution $x=\\cos\\theta$ giving $T_n(\\cos\\theta)=\\cos n\\theta$, pp. 595–596; §27.4.3, Gauss–Chebyshev integration, the formula (27.44) with weight $(1-x^{2})^{-1/2}$ and the closed-form points and weights (27.45), $x_i=\\cos\\bigl((i-\\tfrac12)\\pi/n\\bigr)$ and $w_i=\\pi/n$, and the remark that the integrable endpoint singularities need no special treatment, p. 1009"
    pages: "595-596, 1009"
    role: the cosine substitution that turns a Chebyshev problem on $[-1,1]$ into a Fourier problem on the circle; the Chebyshev–Gauss points and their equal weights, which we contrast with the Gauss–Lobatto points used for collocation
  - work: arfken-2013
    loc: "§20.6, the equally spaced points (20.115), the discrete scalar product (20.117) and the aliased orthogonality relation (20.119)–(20.120), the transform pair (20.121)–(20.122) and Example 20.6.1 on aliasing, pp. 1003–1006; §18.4, the trigonometric forms (20.104)–(18.111) of the Chebyshev polynomials and the discussion of the minimax principle with Example 18.4.1, pp. 904–906"
    pages: "904-906, 1003-1006"
    role: the statement of aliasing in the form that makes the congruence of frequencies visible, and the reading of a truncated Chebyshev expansion as a near-minimax approximation
  - work: kreyszig-1978
    loc: "§6.4, the induction (4)–(5) showing that $\\cos n\\theta$ is a polynomial of degree $n$ in $\\cos\\theta$ with leading coefficient $2^{n-1}$, the definition (6) of $\\tilde T_n = 2^{1-n}T_n$, and Theorem 6.4-3 (minimum property), which states that among all monic real polynomials of degree $n$ the polynomial $\\tilde T_n$ has the smallest maximum modulus on $[-1,1]$, namely $2^{1-n}$, pp. 347–349"
    pages: "347-349"
    role: the minimax property of the Chebyshev polynomials, which is why the nodal polynomial of a Chebyshev grid is the smallest one available and so why Chebyshev nodes are the right nodes for polynomial collocation
---

:::definition[Collocation: the two standard grids]{provenance=adapted src="stakgold-holst-2011:§2.3, Eqs. (2.3.30)–(2.3.32), pp. 140–142; rhb-2006:§18.4, Eq. (18.55), p. 595; rhb-2006:§27.4.3, Eq. (27.45), p. 1009; arfken-2013:§18.4, Eqs. (18.104)–(18.106), p. 904"}
A **collocation method** (or **pseudo-spectral method**) stores the unknown as its values at $N$ chosen points, interprets those values as the values of a single global interpolant drawn from a fixed $N$-dimensional space of smooth functions, and differentiates by differentiating the interpolant exactly. Two choices of space and grid cover almost all practice.

**The Fourier grid (periodic problems).** Take $N = 2M+1$ odd and the equally spaced nodes

$$
x_j \;=\; \frac{2\pi j}{N},\qquad j = 0,1,\dots,N-1 ,
$$

on the circle, and let $\mathcal{T}_M$ be the $N$-dimensional space of trigonometric polynomials $\sum_{\lvert n\rvert\le M} c_n \mathrm{e}^{\mathrm{i}nx}$. Stakgold and Holst prove that for any data $(f_j)$ there is exactly one $p\in\mathcal{T}_M$ with $p(x_j)=f_j$ for every $j$, and that its coefficients are the discrete Fourier coefficients of the data. Writing $I_N f$ for the interpolant of the samples of a function $f$, this says

$$
I_N f(x) \;=\; \sum_{\lvert n\rvert\le M}\hat F(n)\,\mathrm{e}^{\mathrm{i}nx},
\qquad
\hat F(n) \;=\; \frac{1}{N}\sum_{j=0}^{N-1} f(x_j)\,\mathrm{e}^{-2\pi\mathrm{i}nj/N},
$$

with $\hat F$ the transform of :ref[]{to=fourier.dft-fft}. The **Fourier differentiation operator** is

$$
\mathcal{D}_N f \;=\; \bigl(I_N f\bigr)' ,
\qquad\text{so}\qquad
\widehat{\mathcal{D}_N f}(n) = \mathrm{i}n\,\hat F(n)\ \ (\lvert n\rvert \le M) .
$$

In words: transform, multiply by $\mathrm{i}n$, transform back. An odd $N$ is taken so that the retained frequencies $-M,\dots,M$ are symmetric and no lone mode sits at $n=N/2$; this is Stakgold and Holst's reason for writing the node count as $2N+1$. With $N$ even one must decide what to do with the Nyquist mode $n=N/2$, and the usual choice is to set its derivative to zero, which keeps $\mathcal{D}_N$ real and skew-symmetric.

**The Chebyshev grid (non-periodic problems on an interval).** On $[-1,1]$ replace trigonometric polynomials by algebraic ones, $\mathcal{P}_N = \operatorname{span}\{1,x,\dots,x^{N}\}$, and take the **Chebyshev–Gauss–Lobatto (CGL)** nodes

$$
x_j \;=\; \cos\frac{\pi j}{N},\qquad j=0,1,\dots,N ,
$$

which include both endpoints $x_0=1$ and $x_N=-1$. These are the images under $x=\cos\theta$ of the equally spaced angles $\theta_j = \pi j/N$. Because $T_k(\cos\theta)=\cos k\theta$ (:ref[]{to=spec.chebyshev-polynomials}), a polynomial $\sum_{k\le N} a_k T_k(x)$ *is* a cosine polynomial in $\theta$ evaluated at equally spaced angles: Chebyshev collocation on $[-1,1]$ is Fourier collocation on the circle, restricted to even data. The **Chebyshev differentiation matrix** $D_N\in\mathbb{R}^{(N+1)\times(N+1)}$ is defined by differentiating the Lagrange interpolant,

$$
(D_N)_{jk} \;=\; \ell_k'(x_j),
\qquad
\ell_k(x)=\prod_{m\neq k}\frac{x-x_m}{x_k-x_m} ,
$$

so that $(D_N u)_j$ is the derivative at $x_j$ of the unique polynomial of degree $\le N$ through the data. Unlike its Fourier counterpart, $D_N$ is a full matrix.

**A warning about "Chebyshev points".** Two different node sets carry that name. The CGL nodes above are the extrema of $T_N$ together with the endpoints. The **Chebyshev–Gauss** nodes are the *zeros* of $T_n$,
$x_i=\cos\bigl((i-\tfrac12)\pi/n\bigr)$, $i=1,\dots,n$; Riley, Hobson and Bence give them, with the equal weights $w_i=\pi/n$, as the points of the Gauss–Chebyshev quadrature rule for the weight $(1-x^{2})^{-1/2}$ (see :ref[]{to=num.quadrature}). Both sets cluster near the endpoints with spacing $O(N^{-2})$, and both are used; only the Lobatto set contains the endpoints, which is what makes it the convenient one for boundary conditions.
:::

:::statement[Aliasing and spectral accuracy]{provenance=original}
Let $f$ be $2\pi$-periodic and continuous with an absolutely convergent Fourier series, $\sum_{n}\lvert\hat f(n)\rvert<\infty$, and let $N=2M+1$.

**1. Aliasing.** The interpolation coefficients are the exact coefficients with every congruent frequency folded in:

$$
\hat F(n) \;=\; \sum_{m \,\equiv\, n \ (\mathrm{mod}\ N)} \hat f(m),
\qquad \lvert n\rvert\le M .
$$

**2. The interpolation error is at most twice the tail.**

$$
\bigl\lVert f - I_N f\bigr\rVert_{\infty} \;\le\; 2\!\!\sum_{\lvert m\rvert > M}\!\!\bigl\lvert \hat f(m)\bigr\rvert .
$$

**3. Smoothness buys algebraic order.** If $f\in C^{k}$ with $f^{(k)}$ of bounded variation, so that $\lvert\hat f(m)\rvert\le C\lvert m\rvert^{-k-1}$, then

$$
\bigl\lVert f - I_N f\bigr\rVert_{\infty} \;\le\; \frac{4C}{k}\,M^{-k} \;=\; O\!\left(N^{-k}\right) .
$$

The order of the method is not fixed in advance by a stencil: it is whatever the smoothness of the solution allows. This is what is meant by **spectral accuracy**.

**4. Analyticity buys geometric convergence.** If $f$ extends holomorphically to the strip $\lvert\operatorname{Im}z\rvert<b$ and satisfies $\lvert f\rvert\le A$ on $\lvert \operatorname{Im}z\rvert\le a$ for some $a<b$, then $\lvert\hat f(m)\rvert\le A\mathrm{e}^{-a\lvert m\rvert}$ and

$$
\bigl\lVert f - I_N f\bigr\rVert_{\infty} \;\le\; \frac{4A\,\mathrm{e}^{-aM}}{1-\mathrm{e}^{-a}} .
$$

**5. The Chebyshev grid aliases in the same way.** On the CGL nodes $x_j=\cos(\pi j/N)$,

$$
T_{2N-k}(x_j) = T_{2N+k}(x_j) = T_k(x_j)\qquad\text{for all } j \text{ and all } k\ge 0 ,
$$

so the Chebyshev interpolant of $f$ on those nodes has coefficients $\tilde a_k=\sum a_m$ summed over the $m$ that fold onto $k$, and parts 2–4 hold verbatim for the Chebyshev coefficients $a_k$ of $f$ in place of $\hat f(n)$, with $\lVert\cdot\rVert_\infty$ taken on $[-1,1]$.
:::

:::idea{provenance=original}
A finite grid cannot tell two frequencies apart when they differ by a multiple of $N$: the exponentials $\mathrm{e}^{\mathrm{i}nx}$ and $\mathrm{e}^{\mathrm{i}(n+N)x}$ agree at every node. So the interpolant carries each true coefficient plus the coefficients of all its impostors. That is part 1, and it is already proved in :ref[]{to=fourier.dft-fft}.

Part 2 follows by splitting the error into two pieces that are each controlled by the same tail: the coefficients that were thrown away because their frequency was too high, and the pollution that those discarded coefficients left behind in the retained ones. No coefficient appears in both piles, so the two sums together are at most twice $\sum_{\lvert m\rvert>M}\lvert\hat f(m)\rvert$.

Parts 3 and 4 are then nothing but the decay rate of Fourier coefficients, already established in :ref[]{to=fourier.smoothness-decay} for the smooth case and obtained here by moving the contour of the coefficient integral into the complex strip for the analytic case. The whole content of spectral accuracy is that the error of the method is the *tail of a series*, not a fixed power of the mesh. Part 5 is part 1 read through the substitution $x=\cos\theta$, which carries the CGL grid to an equally spaced grid in $\theta$ and the Chebyshev polynomials to cosines.
:::

:::proof[Parts 1–5]{provenance=original}
**1.** This is the aliasing formula of :ref[]{to=fourier.dft-fft}: substituting $f(x_j)=\sum_m\hat f(m)\mathrm{e}^{\mathrm{i}mx_j}$ into the definition of $\hat F(n)$ and exchanging the two sums, which the hypothesis $\sum_m\lvert\hat f(m)\rvert<\infty$ permits, leaves $\sum_m \hat f(m)\,\delta$, where $\delta$ is $1$ when $m\equiv n$ modulo $N$ and $0$ otherwise, by the discrete orthogonality relation.

**2.** Absolute convergence of the coefficient series makes the Fourier expansion of $f$ uniformly convergent, so for every $x$ we may write

$$
f(x)-I_Nf(x)
=\underbrace{\sum_{\lvert m\rvert>M}\hat f(m)\,\mathrm{e}^{\mathrm{i}mx}}_{\text{(T) truncation}}
\;-\;\underbrace{\sum_{\lvert n\rvert\le M}\bigl(\hat F(n)-\hat f(n)\bigr)\mathrm{e}^{\mathrm{i}nx}}_{\text{(A) aliasing}} .
$$

Bounding each exponential by $1$ gives $\lvert (\mathrm{T})\rvert\le\sum_{\lvert m\rvert>M}\lvert\hat f(m)\rvert$, which is the first copy of the tail.

For (A), part 1 gives $\hat F(n)-\hat f(n)=\sum \hat f(m)$, the sum taken over those $m\equiv n$ modulo $N$ with $m\ne n$. Every such $m$ satisfies $\lvert m\rvert\ge N-M=M+1$, because the nearest congruent frequency to an $n$ with $\lvert n\rvert\le M$ is $n\pm N$ and $\lvert n\pm N\rvert\ge N-M$. Moreover, as $n$ runs over $-M,\dots,M$ these index sets are **disjoint**: two frequencies congruent modulo $N$ to different $n$ in a window of $N$ consecutive integers are different. Hence

$$
\sum_{\lvert n\rvert\le M}\bigl\lvert \hat F(n)-\hat f(n)\bigr\rvert
\;\le\; \sum_{\lvert m\rvert>M}\bigl\lvert\hat f(m)\bigr\rvert ,
$$

the second copy of the tail. Adding the two bounds gives part 2. $\square$ (for part 2)

**3.** With $\lvert\hat f(m)\rvert\le C\lvert m\rvert^{-k-1}$ the tail is bounded by comparison with an integral:

$$
\sum_{\lvert m\rvert>M}\lvert\hat f(m)\rvert \;\le\; 2C\sum_{m=M+1}^{\infty}m^{-k-1}
\;\le\; 2C\int_{M}^{\infty}t^{-k-1}\,\mathrm{d}t \;=\;\frac{2C}{k}\,M^{-k} ,
$$

the middle step because $m^{-k-1}\le\int_{m-1}^{m}t^{-k-1}\mathrm{d}t$ for $m\ge M+1$. Doubling, by part 2, gives the stated constant. The hypothesis that $f^{(k)}$ has bounded variation is what produces the decay rate $\lvert m\rvert^{-k-1}$; this is the content of :ref[]{to=fourier.smoothness-decay}, where repeated integration by parts transfers each derivative onto a factor $\mathrm{i}m$.

**4.** Fix $m>0$ and consider the rectangle with corners $0,\ 2\pi,\ 2\pi-\mathrm{i}a,\ -\mathrm{i}a$. The integrand $f(z)\mathrm{e}^{-\mathrm{i}mz}$ is holomorphic inside and on it, since $a<b$, so by :ref[]{to=complex.cauchy-theorem} the contour integral around it vanishes. The two vertical sides cancel because $f(z)\mathrm{e}^{-\mathrm{i}mz}$ is $2\pi$-periodic in $z$ — here periodicity is used a second time, now in the complex plane. Therefore the integral over $[0,2\pi]$ equals the integral over the shifted segment $[-\mathrm{i}a,2\pi-\mathrm{i}a]$, and

$$
\hat f(m)=\frac{1}{2\pi}\int_{0}^{2\pi}f(t-\mathrm{i}a)\,\mathrm{e}^{-\mathrm{i}m(t-\mathrm{i}a)}\,\mathrm{d}t ,
\qquad
\bigl\lvert \mathrm{e}^{-\mathrm{i}m(t-\mathrm{i}a)}\bigr\rvert=\mathrm{e}^{-ma} ,
$$

so $\lvert\hat f(m)\rvert\le A\mathrm{e}^{-ma}$. For $m<0$ shift the contour the other way, to $+\mathrm{i}a$, and the same estimate appears with $\lvert m\rvert$. Summing the geometric series,

$$
\sum_{\lvert m\rvert>M}\lvert\hat f(m)\rvert\le 2A\sum_{m=M+1}^{\infty}\mathrm{e}^{-ma}
=\frac{2A\,\mathrm{e}^{-a(M+1)}}{1-\mathrm{e}^{-a}}\le \frac{2A\,\mathrm{e}^{-aM}}{1-\mathrm{e}^{-a}} ,
$$

and part 2 doubles it.

**5.** At the node $x_j=\cos(\pi j/N)$ we have $T_k(x_j)=\cos(k\pi j/N)$ by the defining identity $T_k(\cos\theta)=\cos k\theta$. Hence

$$
T_{2N\pm k}(x_j)=\cos\!\Bigl(\frac{(2N\pm k)\pi j}{N}\Bigr)=\cos\!\Bigl(2\pi j\pm\frac{k\pi j}{N}\Bigr)=\cos\frac{k\pi j}{N}=T_k(x_j),
$$

using $\cos(2\pi j+\varphi)=\cos\varphi$ for integer $j$ and the evenness of the cosine for the minus sign. So degrees $k$ and $2N\pm k$ are indistinguishable on the grid, exactly as frequencies $n$ and $n\pm N$ are on the Fourier grid. For the error bound, set $g(\theta)=f(\cos\theta)$; $g$ is $2\pi$-periodic and even, its Fourier cosine coefficients are the Chebyshev coefficients $a_k$ of $f$, the CGL nodes are the points $\theta_j=\pi j/N$, and $\sup_{[-1,1]}\lvert f-I_Nf\rvert=\sup_{\theta}\lvert g - I g\rvert$ because $\theta\mapsto\cos\theta$ maps $[0,\pi]$ onto $[-1,1]$. Parts 2–4 applied to $g$ therefore give the claim. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Periodicity is not a technicality.** Part 2 needs the coefficients of a *periodic* $f$ to be summable; part 4 uses periodicity again, to cancel the vertical sides of the contour. Apply a Fourier method to a function that is smooth on $[0,2\pi]$ but has $f(0)\ne f(2\pi)$ and the periodic extension has a jump, so $\lvert \hat f(m)\rvert$ decays only like $1/\lvert m\rvert$, the tail is $O(1)$, and the interpolant oscillates near the ends with an overshoot that does not shrink: this is exactly :ref[]{to=fourier.gibbs-phenomenon}, and no amount of resolution removes it. The Chebyshev grid exists precisely to deal with this case: $g(\theta)=f(\cos\theta)$ is automatically periodic and even, whatever $f$ does at the endpoints.

**Smoothness sets the order, not the grid.** In part 3 the order $k$ comes from the function and not from the method. A solution with a shock or a corner gives first-order accuracy from a spectral method just as from a difference scheme, and worse: the error is spread over the whole domain rather than localised at the singularity, because the basis functions are global. Compare :ref[]{to=num.finite-differences}, whose order is fixed by the stencil and is therefore insensitive, for better and for worse, to how smooth the solution is.

**Clustering of the nodes is essential for Chebyshev.** Taking $N+1$ *equally spaced* nodes on $[-1,1]$ and interpolating by a polynomial of degree $N$ is not a spectral method at all: the nodal polynomial $\omega(x)=\prod_j (x-x_j)$, which carries the interpolation error (:ref[]{to=num.interpolation}), is then exponentially larger near the ends than in the middle, and the interpolant of a perfectly analytic function can diverge as $N$ grows. The CGL nodes are, up to the endpoints, the extrema of $T_N$, and Kreyszig's Theorem 6.4-3 says that $2^{1-N}T_N$ is the monic polynomial of degree $N$ with the smallest maximum modulus on $[-1,1]$, namely $2^{1-N}$. No node set can make the nodal polynomial smaller than that; the Chebyshev nodes very nearly achieve it.

**The summability hypothesis.** That $\sum_m\lvert\hat f(m)\rvert$ is finite is what lets us exchange the sums in part 1 and bound the exponentials termwise in part 2. It holds under the hypotheses of parts 3 (for $k\ge1$) and 4. Without it the interpolant still exists — interpolation is a finite linear-algebra problem — but the bound in part 2 carries no information.

**Sharpness.** Part 2 is sharp to within a small factor, not merely an order of magnitude: the example below finds the predicted bound exceeding the measured error by $7\%$ at $N=9$ and by $4\%$ at $N=17$.
:::

:::method[Running a spectral solver]{provenance=original}
**Fourier collocation (periodic domain).**

1. **Choose the grid.** $N$ points $x_j=2\pi j/N$ on $[0,2\pi)$, rescaled to the physical period $L$ by $x\mapsto 2\pi x/L$, which multiplies every wavenumber by $2\pi/L$. Use $N$ a power of two if the FFT library wants one, and remember the Nyquist convention of the definition; use $N$ odd if you prefer the symmetric mode set.
2. **Transform.** Compute $\hat F(n)$ for $\lvert n\rvert\le M$ with the FFT, at a cost of $O(N\log N)$ (:ref[]{to=fourier.dft-fft}).
3. **Apply the operator in frequency space.** Each $\partial_x$ is a multiplication by $\mathrm{i}n$, each $\partial_x^2$ by $-n^{2}$. A constant-coefficient linear problem $L(\partial_x)u=f$ is therefore solved by one division per mode: $\hat U(n)=\hat F(n)/L(\mathrm{i}n)$, with the solvability condition $L(0)\neq0$ or else an orthogonality condition on $\hat F(0)$.
4. **Evaluate nonlinear terms in physical space.** To form $u\partial_x u$: multiply by $\mathrm{i}n$, transform back, multiply pointwise by the grid values of $u$, transform forward again. Two forward and two inverse transforms per step, so $O(N\log N)$ — against $O(N^{2})$ for the same operation done as a convolution in frequency space.
5. **Dealias.** A quadratic nonlinearity of modes with $\lvert n\rvert\le K$ produces modes up to $2K$, and the grid folds a mode $p$ with $\lvert p\rvert>M$ back onto $p\mp N$. The folded modes first land inside the retained band when $N-2K\le K$. Keeping $3K<N$, that is zeroing all modes with $\lvert n\rvert>N/3$ before and after each product, removes the contamination; this is the **two-thirds rule**.
6. **Step in time** with any integrator from :ref[]{to=num.ode-integrators}, bearing in mind that the diagonal entries $-n^{2}$ of the second-derivative operator reach $-M^{2}\approx -N^{2}/4$, so an explicit scheme for a diffusion problem is restricted to $\Delta t = O(N^{-2})$ and the problem is stiff in the sense of :ref[]{to=num.stiffness}. Treating the linear part implicitly costs nothing, because it is diagonal.

**Chebyshev collocation (non-periodic interval).**

1. **Map the interval.** Send $[\alpha,\beta]$ to $[-1,1]$ by $x\mapsto (2x-\alpha-\beta)/(\beta-\alpha)$; every derivative acquires a factor $2/(\beta-\alpha)$.
2. **Build $D_N$** once, from $(D_N)_{jk}=\ell_k'(x_j)$ at the CGL nodes, and form $D_N^{2}$ for a second-order problem. Cost $O(N^{2})$ to store, $O(N^{3})$ to form the square or factorise it.
3. **Impose boundary conditions by deletion.** For $u(\pm1)=0$, strike out the first and last rows and columns of $D_N^{2}$; the remaining $(N-1)\times(N-1)$ block is invertible and acts on the interior values. For a Neumann condition, keep the row and replace it by the corresponding row of $D_N$.
4. **Solve** the dense system by LU, at a cost of $\tfrac23 N^{3}+O(N^{2})$ operations once and $O(N^{2})$ per right-hand side thereafter (:ref[]{to=num.linear-systems-numerics}).
5. **If $N$ is large, transform instead.** The map between nodal values and Chebyshev coefficients is a discrete cosine transform, computable in $O(N\log N)$, and the coefficient recurrence for differentiation is $O(N)$; this replaces the dense matrix when $N$ runs into the hundreds.
6. **Watch the conditioning.** The CGL nodes are spaced $O(N^{-2})$ near the endpoints, so $\lVert D_N^{2}\rVert$ grows like $N^{4}$ and the condition number of the interior block grows at the same rate (:ref[]{to=linalg.matrix-norms-conditioning}). Spectral accuracy is therefore eventually limited by rounding: in the example below the error stops improving at about $5\times10^{-15}$.
:::

:::example[A periodic Helmholtz problem, and a Chebyshev two-point problem]{provenance=original}
**(a) How large is the interpolation error, really?** Take $f(x)=\mathrm{e}^{\sin x}$, which is entire, hence analytic in every strip. Its Fourier coefficients are Bessel functions. Put $t=\mathrm{e}^{\mathrm{i}x}$ in the generating function $\mathrm{e}^{(z/2)(t-1/t)}=\sum_n J_n(z)t^{n}$ of :ref[]{to=spec.bessel-first-kind}: the exponent becomes $\mathrm{i}z\sin x$, so the choice $z=-\mathrm{i}$ gives $\mathrm{e}^{\sin x}=\sum_n J_n(-\mathrm{i})\,\mathrm{e}^{\mathrm{i}nx}$. Since $J_n(-z)=(-1)^nJ_n(z)$ and $I_n(x)=\mathrm{i}^{-n}J_n(\mathrm{i}x)$ (:ref[]{to=spec.modified-bessel}), this is $\hat f(n)=(-\mathrm{i})^{n}I_n(1)$, so $\lvert\hat f(n)\rvert=I_n(1)$. Numerically

$$
I_0(1)=1.266066,\quad I_1(1)=0.565159,\quad I_2(1)=0.135748,\quad I_3(1)=2.216842\times10^{-2},
$$
$$
I_4(1)=2.737120\times10^{-3},\quad I_5(1)=2.714632\times10^{-4},\quad I_6(1)=2.248866\times10^{-5} .
$$

For $N=9$ we have $M=4$, so part 2 predicts

$$
\lVert f-I_9f\rVert_\infty\;\le\;4\sum_{n\ge5}I_n(1)
= 4\bigl(2.714632\times10^{-4}+2.248866\times10^{-5}+1.599218\times10^{-6}+\cdots\bigr)
= 1.18263\times10^{-3},
$$

the factor $4$ being the $2$ of part 2 times the $2$ from $\pm n$. Evaluating the interpolant on a fine grid of $4001$ points gives a measured maximum error of $1.109873\times10^{-3}$: the bound is high by $7\%$. At $N=17$ the same computation predicts $2.32268\times10^{-8}$ and measures $2.223491\times10^{-8}$, high by $4\%$. At $N=33$ the bound is $8.9\times10^{-20}$ and the measurement is $1.8\times10^{-15}$, which is where double-precision rounding takes over: the error of the *method* has long since fallen below the error of the *arithmetic*.

**(b) Solving $-u''+u=f$ on the circle.** Let $u(x)=\mathrm{e}^{\sin x}$ again. Then $u'=\cos x\,\mathrm{e}^{\sin x}$ and $u''=(\cos^{2}x-\sin x)\mathrm{e}^{\sin x}$, so the right-hand side is

$$
f(x)=-u''+u=\bigl(1-\cos^{2}x+\sin x\bigr)\mathrm{e}^{\sin x}=\bigl(\sin^{2}x+\sin x\bigr)\mathrm{e}^{\sin x} .
$$

Step 3 of the method is one line: $\hat U(n)=\hat F(n)/(n^{2}+1)$. Carrying it out and comparing with $u$ at the nodes:

| $N$ | spectral, $\max_j\lvert U_j-u(x_j)\rvert$ | three-point differences, same $N$ |
|---|---|---|
| $9$  | $3.984146\times10^{-4}$ | $7.788135\times10^{-2}$ |
| $17$ | $3.176116\times10^{-9}$ | $2.160161\times10^{-2}$ |
| $33$ | $4.996004\times10^{-16}$ | $5.716368\times10^{-3}$ |
| $65$ | $1.054712\times10^{-15}$ | $1.472297\times10^{-3}$ |

The second column falls by a factor of about $4$ each time $N$ doubles — second order, as :ref[]{to=num.finite-differences} predicts for the stencil $(U_{j+1}-2U_j+U_{j-1})/h^{2}$. The first column falls by five orders of magnitude from $N=9$ to $N=17$ and by seven more from $N=17$ to $N=33$, where it meets machine precision and stops. To reach $5\times10^{-16}$ with the difference scheme at second order would need $N\approx 33\sqrt{5.716\times10^{-3}/(5\times10^{-16})}\approx 1.1\times10^{8}$ points.

**(c) Chebyshev collocation for $u''=f$ on $[-1,1]$, $u(\pm1)=0$.** Take $u(x)=(1-x^{2})\mathrm{e}^{x}$, which vanishes at both ends, and compute

$$
u'=(1-2x-x^{2})\mathrm{e}^{x},\qquad
u''=f(x)=-(x^{2}+4x+1)\,\mathrm{e}^{x} .
$$

With $N=4$ the CGL nodes are $x_j=\cos(\pi j/4)$, that is

$$
x_0=1,\quad x_1=\tfrac{\sqrt2}{2},\quad x_2=0,\quad x_3=-\tfrac{\sqrt2}{2},\quad x_4=-1 .
$$

Differentiating the five Lagrange basis polynomials and evaluating at the nodes gives

$$
D_4=\begin{pmatrix}
\tfrac{11}{2} & -4-2\sqrt2 & 2 & -4+2\sqrt2 & \tfrac12\\[2pt]
1+\tfrac{\sqrt2}{2} & -\tfrac{\sqrt2}{2} & -\sqrt2 & \tfrac{\sqrt2}{2} & -1+\tfrac{\sqrt2}{2}\\[2pt]
-\tfrac12 & \sqrt2 & 0 & -\sqrt2 & \tfrac12\\[2pt]
1-\tfrac{\sqrt2}{2} & -\tfrac{\sqrt2}{2} & \sqrt2 & \tfrac{\sqrt2}{2} & -1-\tfrac{\sqrt2}{2}\\[2pt]
-\tfrac12 & 4-2\sqrt2 & -2 & 4+2\sqrt2 & -\tfrac{11}{2}
\end{pmatrix} .
$$

(Two checks: every row sums to zero, because $D_4$ differentiates the constant function to zero; and the centre row, $\bigl(-\tfrac12,\sqrt2,0,-\sqrt2,\tfrac12\bigr)$, is antisymmetric, as it must be because the node set is symmetric about the origin.) Squaring and deleting the first and last rows and columns leaves the interior operator — remarkably, an integer matrix:

$$
\bigl(D_4^{2}\bigr)_{\text{int}}=\begin{pmatrix}-14 & 6 & -2\\ 4 & -6 & 4\\ -2 & 6 & -14\end{pmatrix},
\qquad
F=\begin{pmatrix}f(\sqrt2/2)\\ f(0)\\ f(-\sqrt2/2)\end{pmatrix}
=\begin{pmatrix}-8.778548\\ -1\\ \phantom{-}0.655006\end{pmatrix} .
$$

Solving the $3\times3$ system gives, against the exact values,

| node | $U_j$ (collocation) | $u(x_j)$ exact | error |
|---|---|---|---|
| $\sqrt2/2$  | $1.025786$ | $1.014057$ | $+1.17\times10^{-2}$ |
| $0$         | $1.010295$ | $1$        | $+1.03\times10^{-2}$ |
| $-\sqrt2/2$ | $0.239657$ | $0.246534$ | $-6.88\times10^{-3}$ |

Five points, three unknowns, one percent. Repeating with larger $N$:

| $N$ | $4$ | $8$ | $12$ | $16$ | $20$ |
|---|---|---|---|---|---|
| max error | $1.17\times10^{-2}$ | $4.85\times10^{-7}$ | $2.41\times10^{-12}$ | $5.22\times10^{-15}$ | $1.33\times10^{-15}$ |

Roughly five digits gained for every four points added, until the $N^{4}$ growth of $\operatorname{cond}(D_N^{2})$ stops the descent at about $5\times10^{-15}$ — the limit anticipated in step 6 of the method.

**(d) Aliasing on the Chebyshev grid, by hand.** With $N=4$, part 5 says $T_{2N-1}=T_7$ should agree with $T_1(x)=x$ at all five nodes. At $x=\sqrt2/2$, using $T_7(x)=64x^{7}-112x^{5}+56x^{3}-7x$,

$$
64\Bigl(\tfrac{\sqrt2}{2}\Bigr)^{7}-112\Bigl(\tfrac{\sqrt2}{2}\Bigr)^{5}+56\Bigl(\tfrac{\sqrt2}{2}\Bigr)^{3}-7\cdot\tfrac{\sqrt2}{2}
= \tfrac{\sqrt2}{2}\bigl(64\cdot\tfrac18-112\cdot\tfrac14+56\cdot\tfrac12-7\bigr)
=\tfrac{\sqrt2}{2}(8-28+28-7)=\tfrac{\sqrt2}{2} ,
$$

which is $x$ itself. A degree-$7$ oscillation is invisible on a five-point Chebyshev grid, exactly as a frequency-$7$ oscillation is invisible on a five-point Fourier grid.
:::

:::application[Where spectral methods are used]{provenance=original}
**Turbulence and direct numerical simulation.** The reference simulations of homogeneous isotropic turbulence are pseudo-spectral: the Navier–Stokes equations in a periodic box, with the viscous term diagonal in Fourier space, the nonlinear term evaluated on the grid, and the two-thirds rule applied at every step. The appeal is that the energy spectrum — the quantity the physics is about — is a primary variable of the method rather than something reconstructed afterwards, and that the dissipation range is resolved without the numerical viscosity that a low-order scheme adds.

**Weather and climate models.** Global atmospheric models have long used spherical harmonics as the horizontal basis: the Laplacian is diagonal, which makes semi-implicit time stepping cheap, and there is no pole problem of the kind a latitude–longitude difference grid suffers. The transform between grid-point and spectral representation is the dominant cost, and it is a Fourier transform in longitude combined with a Legendre transform in latitude (:ref[]{to=spec.spherical-harmonics}).

**Quantum dynamics.** The split-step Fourier method evolves the Schrödinger equation (:ref[]{to=pde.schrodinger-equation}) by alternating an exact kinetic step, diagonal in momentum space because $\hat{p}=-\mathrm{i}\hbar\partial_x$ is multiplication by $\hbar k$, with an exact potential step, diagonal in position space. Both steps are unitary, so the norm is conserved to rounding error, and each costs one pair of transforms. The same structure underlies plane-wave electronic-structure codes, where the basis is the set of Fourier modes commensurate with a crystal lattice and the cutoff is quoted as an energy $\hbar^{2}k_{\max}^{2}/2m$.

**Why not always?** Complex geometry. A Fourier basis needs a periodic box and a Chebyshev basis needs a tensor-product interval, so a domain with a curved or re-entrant boundary needs either a mapping, a decomposition into spectral elements, or the finite-element method of :ref[]{to=num.finite-elements}, which gives up spectral accuracy and gains complete geometric freedom. Shocks are the other obstacle: for the conservation laws of :ref[]{to=pde.conservation-laws-shocks} the solution leaves the smoothness class in finite time, the tail of the coefficient series stops decaying, and the global basis spreads the resulting oscillations across the whole domain.
:::
