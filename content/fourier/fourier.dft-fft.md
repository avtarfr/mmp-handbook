---
id: fourier.dft-fft
title: The discrete Fourier transform and the FFT
kind: method
level: core
summary: Defines the discrete Fourier transform of $N$ samples and its competing normalisations, proves the discrete orthogonality relation and from it the inversion formula, the discrete Parseval identity and the circular convolution theorem, derives the aliasing formula that says exactly which Fourier coefficients a finite sample confuses with which, and sets out the even-odd splitting that turns the $O(N^2)$ sum into the $O(N\log N)$ radix-2 FFT.
prereqs: [fourier.fourier-series, fourier.parseval-mean-square, fourier.smoothness-decay, linalg.inner-product-spaces, found.absolute-convergence]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 7, §1.2, the exponentials $e_\\ell(k)=\\zeta^{\\ell k}$ on $Z(N)$, the Hermitian inner product, Lemma 1.1 (orthogonality, with value $N$), the orthonormal basis $e_\\ell^*=N^{-1/2}e_\\ell$, the coefficients $a_n=N^{-1}\\sum_k F(k)\\mathrm{e}^{-2\\pi\\mathrm{i}kn/N}$ and Theorem 1.2 (inversion and Parseval), pp. 221–223; §1.3, the operation count $\\le 2N^2+N$ for the direct sum, Theorem 1.3 ($\\le 4N\\log_2 N$ operations for $N=2^n$) and Lemma 1.4 (the even-odd recursion and the bound $\\#(2M)\\le 2\\#(M)+8M$), pp. 224–226"
    pages: "221-226"
    role: the convention we use, the orthogonality lemma and the inversion and Parseval theorem proved from it, and the whole of the fast transform — the even-odd recursion, the recombination formula, the induction on $n$ and the operation count stated as a count of additions and multiplications together
  - work: arfken-2013
    loc: "§20.6, the equally spaced points (20.115), the discrete scalar product (20.117), the geometric-series evaluation and the aliased orthogonality relation (20.119) with its reduction to $N\\delta_{pq}$ (20.120), the symmetric transform pair (20.121)–(20.122), the shift rule (20.123), the discrete convolution (20.124) and its transform (20.125), the unitarity of the transform matrix, Example 20.6.1 on aliasing, and the Fast Fourier Transform subsection with the count $(N/2)\\log_2 N$ multiplications, pp. 1003–1007"
    pages: "1003-1007"
    role: the symmetric $N^{-1/2}$ convention with the opposite sign, the orthogonality relation written so that the aliasing is visible in it, the shift and circular convolution rules, the reading of the transform as a unitary matrix, and the count of multiplications attributed to Cooley and Tukey
  - work: hassani-2013
    loc: "§9.2.2 (The Discrete Fourier Transform), the discretisation of the transform integral as a Riemann sum (9.33), the determination $\\Delta\\omega=2\\pi/T$ forced by requiring the geometric sum to vanish, and the resulting symmetric pair (9.34) with $\\omega_j=2\\pi j/T$ and $t_n=n\\Delta t$, pp. 286–287"
    pages: "286-287"
    role: the derivation of the discrete transform as a Riemann sum for the continuous one, and the resulting dictionary between the index $j$ and a physical frequency $\\omega_j=2\\pi j/T$
  - work: stakgold-holst-2011
    loc: "§2.3 (Discrete and Fast Fourier Transforms), the interpolation problem at $2N+1$ equally spaced points, the orthogonality of the vectors $(\\mathrm{e}^{\\mathrm{i}mx_k})$, the unique interpolating trigonometric polynomial with coefficients (2.3.31) called there the Discrete Fourier Transform, the Dirichlet-kernel form (2.3.32), the observation that the coefficients are Riemann sums which happen to be exact, and the remark that the Fast Fourier Transform groups the terms as transforms over smaller data sets, pp. 140–142"
    pages: "140-142"
    role: the reading of the discrete transform as trigonometric interpolation, with existence and uniqueness of the interpolant, and the exactness of the trapezoidal rule for the coefficients
  - work: rhb-2006
    loc: "§13, Exercise 13.10, the estimation of a continuous frequency spectrum from $N$ samples spaced $\\tau$ apart, with $\\tilde f(2\\pi k/(N\\tau))\\approx F_k\\tau$ for $F_k=(2\\pi)^{-1/2}\\sum_n f_n\\mathrm{e}^{-2\\pi nk\\mathrm{i}/N}$, and the observation that the agreement is good for $k<N/2$ and poor above it, p. 462"
    pages: "462"
    role: the scaling that converts a discrete transform into an estimate of a continuous spectrum, and the warning that the estimate degrades above the half-way index
---

:::definition[The discrete Fourier transform]{provenance=adapted src="stein-shakarchi-2003:Ch. 7, §1.2, pp. 221–223; arfken-2013:§20.6, Eqs. (20.115), (20.121)–(20.122), pp. 1003–1004; hassani-2013:§9.2.2, Eq. (9.34), p. 287"}
Fix $N\in\mathbb{N}$ and write $\zeta=\mathrm{e}^{2\pi\mathrm{i}/N}$, a primitive $N$th root of unity. A **sample vector** is a function $F:\mathbb{Z}\to\mathbb{C}$ with $F(k+N)=F(k)$; equivalently an $N$-tuple $\bigl(F(0),\dots,F(N-1)\bigr)$, with all indices read modulo $N$. The space $V$ of such functions is $N$-dimensional, with the Hermitian inner product and norm

$$
(F,G)=\sum_{k=0}^{N-1}F(k)\,\overline{G(k)},\qquad \lVert F\rVert^{2}=(F,F) .
$$

The **discrete exponentials** are $e_\ell(k)=\zeta^{\ell k}=\mathrm{e}^{2\pi\mathrm{i}\ell k/N}$ for $\ell\in\mathbb{Z}$; only $N$ of them are different, since $e_{\ell+N}=e_\ell$.

The **discrete Fourier transform (DFT)** of $F$ is the sample vector $\hat F$ given by

$$
\hat F(n)\;=\;\frac1N\sum_{k=0}^{N-1}F(k)\,\mathrm{e}^{-2\pi\mathrm{i}nk/N},
\qquad n\in\mathbb{Z} ,
$$

which is again $N$-periodic in $n$. This is the convention of Stein and Shakarchi, chosen here because it makes $\hat F(0)$ the mean of the samples and because it is the one that matches the Fourier coefficients $\hat f(n)$ of :ref[]{to=fourier.fourier-series} in the limit of fine sampling; the statement below makes both of those precise.

**Conventions.** Three choices are free: the sign in the exponent, where the factor $N$ goes, and whether the index runs over $0,\dots,N-1$ or symmetrically.

| Source | Forward transform | Inverse |
|---|---|---|
| here, and Stein & Shakarchi p. 223 | $N^{-1}\sum_k F(k)\mathrm{e}^{-2\pi\mathrm{i}nk/N}$ | $\sum_n \hat F(n)\mathrm{e}^{2\pi\mathrm{i}nk/N}$ |
| Arfken, Weber & Harris, Eqs. (20.121)–(20.122) | $N^{-1/2}\sum_k f_k\,\mathrm{e}^{+2\pi\mathrm{i}kp/N}$ | $N^{-1/2}\sum_p g_p\,\mathrm{e}^{-2\pi\mathrm{i}jp/N}$ |
| Hassani, Eq. (9.34) | $N^{-1/2}\sum_n f(t_n)\mathrm{e}^{-\mathrm{i}\omega_j t_n}$ | $N^{-1/2}\sum_j \tilde f(\omega_j)\mathrm{e}^{\mathrm{i}\omega_j t_n}$ |
| Stakgold & Holst, Eq. (2.3.31) | $(2N_{\mathrm{SH}}+1)^{-1}\sum_{k=-N_{\mathrm{SH}}}^{N_{\mathrm{SH}}} f_k\,\mathrm{e}^{-\mathrm{i}mx_k}$, $x_k=2\pi k/(2N_{\mathrm{SH}}+1)$ | $\sum_{m=-N_{\mathrm{SH}}}^{N_{\mathrm{SH}}}c_m\mathrm{e}^{\mathrm{i}mx}$ |

Arfken's sign is the opposite of everyone else's, which conjugates the result; his and Hassani's symmetric $N^{-1/2}$ makes the transform a unitary matrix, which is convenient in theory and a nuisance in bookkeeping. Stakgold and Holst use an odd number of symmetric indices, which avoids the awkward lone index at $n=N/2$. Their $N$ is not ours: writing it $N_{\mathrm{SH}}$ to keep them apart, their data sit at the $2N_{\mathrm{SH}}+1$ points $x_k=2\pi k/(2N_{\mathrm{SH}}+1)$ with $k=-N_{\mathrm{SH}},\dots,N_{\mathrm{SH}}$, so $N_{\mathrm{SH}}$ is the highest harmonic index while their number of samples is $2N_{\mathrm{SH}}+1$. Our $N$ is their $2N_{\mathrm{SH}}+1$. Converting between conventions is a matter of a factor $N^{\pm1/2}$ and possibly a complex conjugation; nothing below depends on the choice except the constants we state.
:::

:::statement[Orthogonality, inversion, Parseval and circular convolution]{provenance=adapted src="stein-shakarchi-2003:Ch. 7, Lemma 1.1 and Theorem 1.2, pp. 222–223; arfken-2013:§20.6, Eqs. (20.119)–(20.120) and (20.123)–(20.125), pp. 1003–1005; stakgold-holst-2011:§2.3, Eqs. (2.3.30)–(2.3.31), pp. 140–141"}
Let $F,G\in V$ and let $\hat F,\hat G$ be their transforms.

**1. Orthogonality.** For integers $m,\ell$,

$$
(e_m,e_\ell)=\sum_{k=0}^{N-1}\mathrm{e}^{2\pi\mathrm{i}(m-\ell)k/N}
=\begin{cases} N, & m\equiv \ell \pmod N,\\[2pt] 0, & \text{otherwise.}\end{cases}
$$

Arfken writes this as $N\sum_{r\in\mathbb{Z}}\delta_{m-\ell,\,rN}$, which keeps the congruence visible; restricted to $0\le m,\ell\le N-1$ it is $N\delta_{m\ell}$. Consequently $\{N^{-1/2}e_0,\dots,N^{-1/2}e_{N-1}\}$ is an orthonormal basis of $V$ (:ref[]{to=linalg.inner-product-spaces}).

**2. Inversion.** For every $k$,

$$
F(k)=\sum_{n=0}^{N-1}\hat F(n)\,\mathrm{e}^{2\pi\mathrm{i}nk/N} .
$$

Equivalently: there is exactly one trigonometric polynomial with the $N$ prescribed frequencies that takes the values $F(k)$ at the $N$ points $x_k=2\pi k/N$, and its coefficients are the $\hat F(n)$. This is how Stakgold and Holst introduce the transform, as the solution of an interpolation problem.

**3. Parseval.** $\displaystyle \frac1N\sum_{k=0}^{N-1}\lvert F(k)\rvert^{2}=\sum_{n=0}^{N-1}\lvert\hat F(n)\rvert^{2}$, and more generally $\frac1N(F,G)=\sum_n \hat F(n)\overline{\hat G(n)}$.

**4. Shift.** For $j\in\mathbb{Z}$, the transform of $k\mapsto F(k-j)$ is $n\mapsto \mathrm{e}^{-2\pi\mathrm{i}jn/N}\hat F(n)$.

**5. Circular convolution.** Define $(F\ast G)(k)=\sum_{j=0}^{N-1}F(j)\,G(k-j)$, the index $k-j$ read modulo $N$. Then

$$
\widehat{F\ast G}(n)=N\,\hat F(n)\,\hat G(n) .
$$

The factor $N$ is an artefact of our normalisation; with Arfken's symmetric convention, and his $N^{-1/2}$ in front of the convolution sum as well, the rule is simply the product of the transforms, his Eq. (20.125).

**6. Aliasing.** Let $f:\mathbb{R}\to\mathbb{C}$ be continuous and $1$-periodic, with an absolutely convergent Fourier series, $\sum_{m\in\mathbb{Z}}\lvert\hat f(m)\rvert<\infty$. Sample it at $N$ equally spaced points, $F(k)=f(k/N)$. Then

$$
\hat F(n)\;=\;\sum_{m\,\equiv\,n\ (\mathrm{mod}\ N)}\hat f(m)
\;=\;\cdots+\hat f(n-N)+\hat f(n)+\hat f(n+N)+\cdots .
$$

So the DFT returns each Fourier coefficient contaminated by every coefficient whose frequency differs from it by a multiple of $N$: the sampling cannot tell those frequencies apart, because the corresponding exponentials agree at all $N$ sample points. In particular, if $\hat f(m)=0$ for all $\lvert m\rvert\ge N/2$, then $\hat F(n)=\hat f(n)$ for $-N/2<n<N/2$ and the DFT is exact.
:::

:::idea{provenance=original}
Everything comes from one finite geometric sum. Put $q=\zeta^{m-\ell}$, which satisfies $q^{N}=1$. Whenever $q\neq1$ the sum $\sum_{k<N}q^{k}$ collapses to $(1-q^{N})/(1-q)$, and its numerator is zero. That single line gives orthogonality, and orthogonality gives everything else, exactly as on the circle: inversion is expansion in an orthogonal basis, Parseval is Pythagoras, and convolution factorises because the exponentials satisfy $e_n(k+j)=e_n(k)e_n(j)$.

Aliasing is the same identity read the other way. The sum is $0$ when $m\not\equiv\ell$, but it is $N$ whenever $m\equiv\ell$ — not only when $m=\ell$. A finite sample has no way to distinguish the frequency $n$ from the frequency $n+N$, so the discrete transform reports their sum.
:::

:::proof[Parts 1–6]{provenance=adapted src="stein-shakarchi-2003:Ch. 7, Lemma 1.1 and Theorem 1.2, pp. 222–223; arfken-2013:§20.6, pp. 1003–1005"}
**1. Orthogonality.** Put $q=\zeta^{m-\ell}=\mathrm{e}^{2\pi\mathrm{i}(m-\ell)/N}$, so $(e_m,e_\ell)=\sum_{k=0}^{N-1}q^{k}$. If $m\equiv\ell$ modulo $N$ then $q=1$ and the sum is $N$. Otherwise $q\ne1$, so the geometric sum equals $(1-q^{N})/(1-q)$; and $q^{N}=\mathrm{e}^{2\pi\mathrm{i}(m-\ell)}=1$ because $m-\ell$ is an integer, so the sum is $0$. The $N$ vectors $e_0,\dots,e_{N-1}$ are therefore orthogonal and non-zero, hence linearly independent, hence a basis of the $N$-dimensional space $V$; dividing by $\lVert e_\ell\rVert=\sqrt N$ makes it orthonormal.

**2. Inversion.** Expand $F$ in that orthonormal basis: $F=\sum_{n}\bigl(F,N^{-1/2}e_n\bigr)N^{-1/2}e_n=\sum_n \frac1N (F,e_n)\,e_n$. Now $\frac1N(F,e_n)=\frac1N\sum_k F(k)\overline{\zeta^{nk}}=\hat F(n)$, which is the definition. So $F=\sum_n\hat F(n)e_n$, which is the claim.

**3. Parseval.** Writing $c_n=\bigl(F,N^{-1/2}e_n\bigr)=\sqrt N\,\hat F(n)$ and likewise $d_n$ for $G$, Parseval's identity in an orthonormal basis gives $(F,G)=\sum_n c_n\overline{d_n}=N\sum_n\hat F(n)\overline{\hat G(n)}$. Taking $G=F$ gives the norm statement. The asymmetry — a factor $1/N$ on the sample side and none on the transform side — is forced by our normalisation; it is the discrete counterpart of the $1/L$ in the Fourier coefficient of :ref[]{to=fourier.fourier-series}.

**4. Shift.** Substituting $k'=k-j$ and using that both $F$ and $\mathrm{e}^{-2\pi\mathrm{i}nk/N}$ are $N$-periodic in $k$, so that the sum over any $N$ consecutive indices is the same,

$$
\frac1N\sum_{k=0}^{N-1}F(k-j)\mathrm{e}^{-2\pi\mathrm{i}nk/N}
=\mathrm{e}^{-2\pi\mathrm{i}nj/N}\,\frac1N\sum_{k'=-j}^{N-1-j}F(k')\mathrm{e}^{-2\pi\mathrm{i}nk'/N}
=\mathrm{e}^{-2\pi\mathrm{i}nj/N}\hat F(n) .
$$

Periodicity is used twice here, and it is exactly what the word *circular* will mean in part 5.

**5. Circular convolution.** Both sums are finite, so they may be exchanged freely:

$$
\widehat{F\ast G}(n)=\frac1N\sum_{k=0}^{N-1}\ \sum_{j=0}^{N-1}F(j)G(k-j)\,\mathrm{e}^{-2\pi\mathrm{i}nk/N}
=\frac1N\sum_{j=0}^{N-1}F(j)\mathrm{e}^{-2\pi\mathrm{i}nj/N}\sum_{k=0}^{N-1}G(k-j)\mathrm{e}^{-2\pi\mathrm{i}n(k-j)/N} ,
$$

where the exponential was split by $e_n(k)=e_n(j)e_n(k-j)$. Take the inner sum first. Substituting $k'=k-j$ and using, as in part 4, that both $G$ and $\mathrm{e}^{-2\pi\mathrm{i}nk'/N}$ are $N$-periodic in $k'$, so that any $N$ consecutive indices give the same total,

$$
\sum_{k=0}^{N-1}G(k-j)\mathrm{e}^{-2\pi\mathrm{i}n(k-j)/N}
=\sum_{k'=0}^{N-1}G(k')\mathrm{e}^{-2\pi\mathrm{i}nk'/N}=N\hat G(n) ,
$$

the last equality being the definition of $\hat G(n)$ multiplied by $N$. This value does not depend on $j$, so it comes out of the outer sum:

$$
\widehat{F\ast G}(n)=\frac1N\cdot N\hat G(n)\sum_{j=0}^{N-1}F(j)\mathrm{e}^{-2\pi\mathrm{i}nj/N}
=\hat G(n)\cdot N\hat F(n) ,
$$

again because $\sum_j F(j)\mathrm{e}^{-2\pi\mathrm{i}nj/N}=N\hat F(n)$ by definition. So $\widehat{F\ast G}(n)=N\hat F(n)\hat G(n)$.

**6. Aliasing.** First, $f$ really is the sum of its Fourier series at every point. Absolute convergence makes $\sum_m\hat f(m)\mathrm{e}^{2\pi\mathrm{i}mx}$ converge uniformly, by the Weierstrass $M$-test, to a continuous $1$-periodic function $u$; integrating the uniformly convergent series term by term against $\mathrm{e}^{-2\pi\mathrm{i}mx}$ gives $\hat u(m)=\hat f(m)$ for every $m$. So $f-u$ is continuous with all Fourier coefficients zero, hence $\lVert f-u\rVert_{2}=0$ by Parseval (:ref[]{to=fourier.parseval-mean-square}), and a continuous function of zero mean square vanishes identically. This is where the continuity of $f$ is used, and it is used nowhere else; without it the two sides could differ at the $N$ sample points. Now insert the series at $x=k/N$:

$$
\hat F(n)=\frac1N\sum_{k=0}^{N-1}\Bigl(\sum_{m\in\mathbb{Z}}\hat f(m)\mathrm{e}^{2\pi\mathrm{i}mk/N}\Bigr)\mathrm{e}^{-2\pi\mathrm{i}nk/N}
=\sum_{m\in\mathbb{Z}}\hat f(m)\cdot\frac1N\sum_{k=0}^{N-1}\mathrm{e}^{2\pi\mathrm{i}(m-n)k/N} .
$$

The interchange of the two sums is legitimate because $\sum_m\lvert\hat f(m)\rvert<\infty$ — this is the one place absolute convergence is used — so the double family is absolutely summable and :ref[]{to=found.absolute-convergence} permits the rearrangement. By part 1 the inner average is $1$ when $m\equiv n$ modulo $N$ and $0$ otherwise, leaving $\hat F(n)=\sum_{m\equiv n}\hat f(m)$. If $\hat f$ vanishes outside $\lvert m\rvert<N/2$ then for each $n$ in that range the congruence class of $n$ meets the support only at $m=n$, since two distinct members of a class differ by at least $N$ while the support has width less than $N$. $\square$
:::

:::statement[The radix-2 fast Fourier transform]{provenance=adapted src="stein-shakarchi-2003:Ch. 7, §1.3, Theorem 1.3 and Lemma 1.4, pp. 224–226; arfken-2013:§20.6, Fast Fourier Transform, p. 1006"}
Let $N=2M$ be even and let $F\in V$. Split the samples by parity,

$$
F_0(r)=F(2r),\qquad F_1(r)=F(2r+1),\qquad r=0,\dots,M-1 ,
$$

two vectors of length $M$, and write $\hat F_0,\hat F_1$ for their $M$-point transforms. Then, with $\omega=\mathrm{e}^{-2\pi\mathrm{i}/N}$,

$$
\hat F(n)\;=\;\tfrac12\Bigl[\hat F_0(n)+\omega^{\,n}\,\hat F_1(n)\Bigr],
\qquad n=0,1,\dots,N-1 ,
$$

in which $\hat F_0(n)$ and $\hat F_1(n)$ are read $M$-periodically, so that the two half-length transforms are each used twice.

**Cost.** Applying the splitting recursively when $N=2^n$ gives the fast Fourier transform. Stein and Shakarchi count one addition or one multiplication of complex numbers as one operation; their Lemma 1.4 is the recursion $\#(2M)\le 2\#(M)+8M$ for the minimum number $\#(\cdot)$ of operations, and their Theorem 1.3 concludes

$$
\#(N)\;\le\;4N\log_2 N \;=\; O(N\log N)
$$

against the bound $2N^2+N$ they give for evaluating the defining sums directly. Arfken, Weber and Harris count only multiplications and report $(N/2)\log_2 N$ for the Cooley–Tukey procedure against about $N^2$ for the direct calculation; the two statements are consistent, counting different things, and we follow Stein and Shakarchi's accounting below. The ratio Arfken quotes belongs to his count and not to theirs: on multiplications alone, $N=1024$ gives $(N/2)\log_2N=5120$ against about $N^{2}=1.05\times10^{6}$, a saving of a factor $204.8$ — "better than $200$".
:::

:::proof[The splitting formula and the cost]{provenance=adapted src="stein-shakarchi-2003:Ch. 7, Lemma 1.4, p. 225"}
**The formula.** Separate the defining sum into even and odd indices, $k=2r$ and $k=2r+1$:

$$
\hat F(n)=\frac1{2M}\sum_{k=0}^{2M-1}F(k)\,\omega^{\,nk}
=\frac1{2M}\Bigl[\sum_{r=0}^{M-1}F(2r)\,\omega^{\,2nr}+\sum_{r=0}^{M-1}F(2r+1)\,\omega^{\,n(2r+1)}\Bigr] .
$$

Now $\omega^{2}=\mathrm{e}^{-2\pi\mathrm{i}/M}$ is the corresponding root of unity for length $M$, so $\omega^{2nr}=\mathrm{e}^{-2\pi\mathrm{i}nr/M}$. Pulling $\omega^{n}$ out of the second sum and inserting a factor $M/M$ in each,

$$
\hat F(n)=\frac12\Bigl[\frac1M\sum_{r}F_0(r)\mathrm{e}^{-2\pi\mathrm{i}nr/M}\Bigr]
+\frac{\omega^{n}}{2}\Bigl[\frac1M\sum_{r}F_1(r)\mathrm{e}^{-2\pi\mathrm{i}nr/M}\Bigr]
=\tfrac12\bigl[\hat F_0(n)+\omega^{n}\hat F_1(n)\bigr] .
$$

The $M$-point transforms are $M$-periodic in $n$, which is why the $M$ values of each suffice for all $N=2M$ values of $n$: this is the entire saving, and it is where the evenness of $N$ is used.

**The cost.** Suppose the two half-length transforms are available at a cost of $\#(M)$ operations each. Producing the powers $\omega,\omega^{2},\dots,\omega^{2M}$ costs at most $2M$ operations, and gives $\omega^{2}$, the root of unity needed at length $M$, for free. Each of the $2M$ outputs then costs at most three further operations — two multiplications and one addition — so

$$
\#(2M)\;\le\;2M+2\,\#(M)+3\cdot2M\;=\;2\#(M)+8M ,
$$

which is Stein and Shakarchi's Lemma 1.4. Induct on $n$ where $N=2^{n}$. At $n=1$ the two outputs are $\tfrac12(F(0)\pm F(1))$, costing at most five operations, and $4\cdot2\cdot1=8\ge5$. If $\#(2^{n-1})\le 4\cdot2^{n-1}(n-1)$ then

$$
\#(2^{n})\;\le\;2\cdot4\cdot2^{n-1}(n-1)+8\cdot2^{n-1}=4\cdot2^{n}(n-1)+4\cdot2^{n}=4\cdot2^{n}n ,
$$

which is $4N\log_2 N$. $\square$
:::

:::remark[Where the hypotheses are used, and what goes wrong without them]{provenance=original}
- **Periodicity of the index.** Parts 4 and 5 need $F$ and $G$ extended $N$-periodically. This is not a convenience: the convolution the DFT diagonalises is the *circular* one, in which data runs off the right end and reappears on the left. If one wants the ordinary (linear) convolution of two finite sequences of lengths $L_1$ and $L_2$, both must first be padded with zeros to a common length $N\ge L_1+L_2-1$; otherwise the tail wraps around and corrupts the head. This single point is the commonest bug in fast convolution code.
- **Absolute convergence in the aliasing formula.** It is used only to exchange the two sums. Without it the formula can fail: the right-hand side need not converge. For a merely continuous $f$ whose Fourier series is not absolutely convergent, the left-hand side is still perfectly well defined — it is a finite sum — but it need not be the sum of the coefficients in a congruence class.
- **The band-limit $\lvert m\rvert<N/2$.** The last sentence of part 6 needs the support of $\hat f$ to have width less than $N$, so that no two frequencies in it are congruent modulo $N$. At the boundary the conclusion fails: the frequencies $m=N/2$ and $m=-N/2$ *are* congruent modulo $N$, so their coefficients are added and cannot be separated. The worked example below shows this happening, with a component that vanishes entirely. This boundary case is the Nyquist frequency, and it is why :ref[]{to=fourier.sampling-theorem} asks for a strict band limit.
- **Even $N$ in the FFT.** The splitting needs $N=2M$. For a prime $N$ no such splitting exists and the radix-2 algorithm has nothing to say; general $N$ is handled by splitting on any factor, and a prime length needs a different idea.
- **No smoothness anywhere.** Parts 1–3 are statements about $N$ complex numbers and assume nothing at all. Parts 4 and 5 assume one thing only, and it is bookkeeping rather than analysis: that the index is read modulo $N$, as the first bullet above says. Only part 6, which relates the DFT to a function on the circle, puts a hypothesis on a function — continuity and an absolutely convergent Fourier series, the first used to identify $f$ with the sum of its series and the second to exchange the sums.
- **Why the DFT is not the Fourier transform.** The DFT of a sampled signal estimates the Fourier coefficients of its periodic extension. If the data does not in fact come from a periodic function, the implied jump between the last sample and the first is real as far as the transform is concerned, and its coefficients decay only like $1/n$ (:ref[]{to=fourier.smoothness-decay}). This is spectral leakage, and it is a separate effect from aliasing: leakage comes from truncating in time, aliasing from sampling in time.
:::

:::method[Using the DFT on measured data]{provenance=adapted src="hassani-2013:§9.2.2, Eq. (9.33), p. 286; rhb-2006:Exercise 13.10, p. 462; arfken-2013:§20.6, Example 20.6.1, p. 1006"}
Suppose a signal $f(t)$ is sampled $N$ times at spacing $\tau$, giving $f_k=f(k\tau)$, $k=0,\dots,N-1$, over a total record length $T=N\tau$.

1. **Fix the frequency grid.** The $N$ available frequencies are $\omega_n=2\pi n/T$, equivalently $\nu_n=n/(N\tau)$ cycles per unit time. Hassani derives this spacing by requiring the discrete orthogonality to hold, which is what forces $\Delta\omega\,\Delta t=2\pi/N$. The resolution $1/T$ is set by the record length and the highest frequency by the sample spacing — the two are independent.
2. **Fold the index to a frequency.** The output index $n$ runs $0,\dots,N-1$, but the frequencies it represents run $0,1,\dots$ up to $N/2$ and then *negative*: for $n>N/2$, bin $n$ carries the frequency $(n-N)/(N\tau)$. For real data this makes $\hat F(N-n)=\overline{\hat F(n)}$, so only the first half of the output is independent. Plotting bins $N/2$ to $N-1$ as high frequencies is a standard and badly misleading error.
3. **Identify the Nyquist frequency** $\nu_{\mathrm{Nyq}}=1/(2\tau)$, half the sampling rate. Any content above it is reported at a false, lower frequency by part 6 above. If the signal may contain such content, filter it out *before* sampling; no processing afterwards can undo it.
4. **Scale to the quantity you want.** The $\hat F(n)$ are estimates of Fourier *coefficients* (dimensionless fractions of the signal). To estimate the continuous Fourier transform instead, read the defining sum as a Riemann sum: $\int f(t)\mathrm{e}^{-\mathrm{i}\omega_n t}\,\mathrm{d}t\approx N\tau\,\hat F(n)=T\,\hat F(n)$. This is Riley, Hobson and Bence's Exercise 13.10(a) up to their $(2\pi)^{-1/2}$; they also note there that the estimate is good for $n<N/2$ and poor above it, which is step 2 restated.
5. **Choose $N$ a power of two** if the transform is to be computed many times, so that the radix-2 recursion applies all the way down. Zero-padding to the next power of two is harmless for spectral estimation — it interpolates the frequency grid without adding information — but it is *not* harmless if a circular convolution of a specific length is wanted.
6. **Check the answer.** $\hat F(0)$ must be the mean of the samples; for real data $\hat F(N-n)=\overline{\hat F(n)}$; and Parseval must hold, $\frac1N\sum_k\lvert f_k\rvert^{2}=\sum_n\lvert\hat F(n)\rvert^{2}$. These three cost nothing and catch almost every normalisation error.
:::

:::example[Eight samples, the radix-2 step, and an alias]{provenance=original}
Take the $1$-periodic signal

$$
f(x)=1+2\cos 2\pi x-\sin 4\pi x ,
$$

whose Fourier coefficients we know exactly: writing the trigonometric functions as exponentials, $\hat f(0)=1$, $\hat f(\pm1)=1$, $\hat f(2)=-\tfrac1{2\mathrm{i}}=\tfrac{\mathrm{i}}2$, $\hat f(-2)=-\tfrac{\mathrm{i}}2$, and all other coefficients zero.

**(a) Sampling at $N=8$.** With $x_k=k/8$ the samples $f_k=1+2\cos(\pi k/4)-\sin(\pi k/2)$ are

$$
F=\bigl(3,\ \sqrt2,\ 1,\ 2-\sqrt2,\ -1,\ -\sqrt2,\ 1,\ 2+\sqrt2\bigr)
$$

(to six decimals, $3,\ 1.414214,\ 1,\ 0.585786,\ -1,\ -1.414214,\ 1,\ 3.414214$). Their sum is $8$, so $\hat F(0)=1$, already matching $\hat f(0)$.

**(b) The radix-2 step, done by hand.** Split by parity: $F_0=(3,1,-1,1)$ from $k=0,2,4,6$ and $F_1=(\sqrt2,\,2-\sqrt2,\,-\sqrt2,\,2+\sqrt2)$ from $k=1,3,5,7$. Their four-point transforms, computed from the definition with $\mathrm{e}^{-2\pi\mathrm{i}/4}=-\mathrm{i}$, are

$$
\hat F_0=\tfrac14\bigl(3+1-1+1,\ 3-\mathrm{i}+1+\mathrm{i},\ 3-1-1-1,\ 3+\mathrm{i}+1-\mathrm{i}\bigr)=(1,\,1,\,0,\,1) ,
$$

$$
\hat F_1=\Bigl(1,\ \tfrac{\sqrt2}{2}(1+\mathrm{i}),\ -1,\ \tfrac{\sqrt2}{2}(1-\mathrm{i})\Bigr) ,
$$

the second entry of $\hat F_1$ because $\tfrac14\bigl[\sqrt2-\mathrm{i}(2-\sqrt2)+\sqrt2+\mathrm{i}(2+\sqrt2)\bigr]=\tfrac14\bigl[2\sqrt2+2\sqrt2\,\mathrm{i}\bigr]$. Now recombine with $\omega=\mathrm{e}^{-\mathrm{i}\pi/4}=\tfrac{\sqrt2}{2}(1-\mathrm{i})$, remembering that $\hat F_0,\hat F_1$ are $4$-periodic:

| $n$ | $\hat F_0(n)$ | $\hat F_1(n)$ | $\omega^{n}$ | $\hat F(n)=\tfrac12[\hat F_0+\omega^n\hat F_1]$ |
|---|---|---|---|---|
| $0$ | $1$ | $1$ | $1$ | $1$ |
| $1$ | $1$ | $\tfrac{\sqrt2}2(1+\mathrm{i})$ | $\tfrac{\sqrt2}2(1-\mathrm{i})$ | $\tfrac12[1+1]=1$ |
| $2$ | $0$ | $-1$ | $-\mathrm{i}$ | $\tfrac12[\mathrm{i}]=\mathrm{i}/2$ |
| $3$ | $1$ | $\tfrac{\sqrt2}2(1-\mathrm{i})$ | $\tfrac{\sqrt2}2(-1-\mathrm{i})$ | $\tfrac12[1-1]=0$ |
| $4$ | $1$ | $1$ | $-1$ | $0$ |
| $5$ | $1$ | $\tfrac{\sqrt2}2(1+\mathrm{i})$ | $\tfrac{\sqrt2}2(-1+\mathrm{i})$ | $\tfrac12[1-1]=0$ |
| $6$ | $0$ | $-1$ | $\mathrm{i}$ | $-\mathrm{i}/2$ |
| $7$ | $1$ | $\tfrac{\sqrt2}2(1-\mathrm{i})$ | $\tfrac{\sqrt2}2(1+\mathrm{i})$ | $\tfrac12[1+1]=1$ |

The products are all of the form $\tfrac12(1\pm\mathrm{i})(1\mp\mathrm{i})=\tfrac12\cdot2=1$ or $\tfrac12(1\mp\mathrm{i})(-1\mp\mathrm{i})=\tfrac12\cdot(-2)=-1$, which is why the arithmetic closes so neatly.

Reading the table with the folding rule of step 2 — bins $5,6,7$ are the frequencies $-3,-2,-1$ — gives $\hat F(0)=1$, $\hat F(\pm1)=1$, $\hat F(2)=\mathrm{i}/2$, $\hat F(-2)=-\mathrm{i}/2$ and nothing else: **exactly** the Fourier coefficients of $f$. This is part 6 in the good case, since $\hat f$ is supported in $\lvert m\rvert\le2<4=N/2$. Parseval checks the whole computation in one line. On the sample side $(2-\sqrt2)^2+(2+\sqrt2)^2=2(4+2)=12$ and the remaining squares are $9+2+1+1+2+1=16$, so

$$
\frac18\sum_{k=0}^{7} f_k^{2}=\frac{12+16}{8}=\frac{28}{8}=3.5 ,
$$

while on the transform side $\sum_{n=0}^{7}\lvert\hat F(n)\rvert^{2}=1+1+1+\tfrac14+\tfrac14=3.5$. The two agree.

**(c) Sampling at $N=4$: an alias and a vanishing act.** Now take $x_k=k/4$. The samples are $F=(3,1,-1,1)$, the vector $F_0$ above, and its transform is $\hat F=(1,1,0,1)$. Compare with the aliasing formula:

$$
\hat F(1)=\hat f(1)+\hat f(-3)+\hat f(5)+\cdots=1,\qquad
\hat F(3)=\hat f(3)+\hat f(-1)+\cdots=1,
$$

$$
\hat F(2)=\hat f(2)+\hat f(-2)=\tfrac{\mathrm{i}}2-\tfrac{\mathrm{i}}2=0 .
$$

Every entry matches. The last line is the interesting one: the component $-\sin4\pi x$, of amplitude $1$, has disappeared completely. Its frequency $2$ is exactly the Nyquist frequency $N/2$ for four samples, so the bins $m=2$ and $m=-2$ have collapsed onto one another and the two coefficients, being negatives, have cancelled. The signal $1+2\cos2\pi x$ and the signal $1+2\cos2\pi x-\sin4\pi x$ have the *same* four samples, and no amount of analysis of those four numbers can separate them. A sine at exactly the Nyquist frequency is sampled at its zeros.
:::

:::application[What the fast transform is used for]{provenance=original}
**Spectral estimation.** Every digital spectrum analyser, vibration monitor and audio equaliser computes a DFT of a windowed block of samples and plots $\lvert\hat F(n)\rvert$ against $\nu_n=n/(N\tau)$. The two facts a user must carry are those of the method above: the resolution is $1/T$ and the ceiling is $1/(2\tau)$. Doubling the record length sharpens the peaks; doubling the sampling rate raises the ceiling; neither does the other's job.

**Fast convolution and filtering.** Part 5 turns an $O(N^2)$ convolution into three transforms and $N$ multiplications, so $O(N\log N)$. This is how long digital filters are applied, how large integers and polynomials are multiplied in computer algebra systems, and how cross-correlations are computed in radio astronomy and in seismology. The zero-padding caveat of the remark is what separates a working implementation from a broken one.

**Spectral methods for differential equations.** On a periodic domain, differentiation is diagonal in the Fourier basis: $\widehat{f'}(n)=2\pi\mathrm{i}n\,\hat f(n)$ for the series of :ref[]{to=fourier.smoothness-decay}, and the same multiplication acts on the DFT of the samples. A pseudo-spectral solver therefore steps a PDE by transforming, multiplying by $\mathrm{i}n$, transforming back, and evaluating the nonlinear terms in physical space — each step $O(N\log N)$ instead of the $O(N^2)$ of a dense differentiation matrix. The same idea solves Poisson's equation on a periodic box in one pass, by dividing by $-4\pi^2\lvert n\rvert^{2}$.

**Crystallography and imaging.** A diffraction pattern is the squared modulus of a Fourier transform, and the reconstruction of a density from measured intensities is done on a grid with the FFT. In magnetic resonance imaging the measured data *are* samples of the transform, and the image is a single inverse DFT; aliasing there appears as the familiar wrap-around artefact, in which anatomy outside the chosen field of view is drawn folded back inside it — part 6, in two dimensions, made visible.
:::
