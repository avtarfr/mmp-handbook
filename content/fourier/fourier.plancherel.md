---
id: fourier.plancherel
title: Plancherel's theorem
kind: theorem
level: core
summary: Proves that the Fourier transform preserves the $L^2$ inner product up to the factor $2\pi$ fixed by the convention, by transforming the cross-correlation and evaluating the inversion formula at the origin, then extends the transform from the Schwartz class to a unitary map of $L^2$ onto itself and uses the resulting Parseval relation to evaluate integrals in closed form.
prereqs: [fourier.fourier-inversion, fourier.convolution-theorem, measure.lp-spaces, funcan.hilbert-spaces]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §1.6, pp. 143–144: the Hermitian inner product $(f,g)=\\int f\\bar g$ on $\\mathcal{S}(\\mathbb{R})$ with its norm, Theorem 1.12 (Plancherel) stating $\\lVert\\hat f\\rVert=\\lVert f\\rVert$ for $f\\in\\mathcal{S}$, and the proof: set $f^\\flat(x)=\\overline{f(-x)}$, form $h=f*f^\\flat$, observe $\\hat h = \\lvert\\hat f\\rvert^2$ and $h(0)=\\int\\lvert f\\rvert^2$, and apply the inversion formula at $x=0$; also the remark that the transform is a unitary transformation on $\\mathcal{S}(\\mathbb{R})$, and §1.7, p. 144, the extension to functions of moderate decrease"
    pages: "143-144"
    role: the proof route used here — reduce the quadratic identity to the inversion formula evaluated at the origin, applied to the autocorrelation whose transform is the squared modulus; the statement of the theorem on the Schwartz class and the language of unitarity
  - work: reed-simon-1980
    loc: "§IX.1, p. 321: the Corollary to Theorem IX.1 giving $\\int\\lvert f(x)\\rvert^2dx=\\int\\lvert\\hat f(k)\\rvert^2dk$ for $f\\in\\mathcal{S}(\\mathbb{R}^n)$, proved from the Fourier series of a compactly supported $f$ on a large cube together with the orthonormality of the exponentials there, and the remark that it is a corollary of the proof rather than of the statement; §IX.2, pp. 327–328: Theorem IX.6 (the Plancherel theorem) that the transform extends uniquely to a unitary map of $L^2(\\mathbb{R}^n)$ onto itself with the inverse extending to its adjoint, the explicit integral representation $\\hat f(\\lambda) = \\text{l.i.m.}\\,(2\\pi)^{-n/2}\\int_{\\lvert x\\rvert\\le R}e^{-i\\lambda\\cdot x}f(x)dx$ as a limit in the $L^2$ norm, Theorem IX.7 (Riemann-Lebesgue) and the remark that the transform of $L^1$ is not onto $C_\\infty$, and Theorem IX.8 (Hausdorff-Young)"
    pages: "321, 327-328"
    role: the statement of unitarity on $L^2$ with surjectivity, the warning that for $f\\in L^2\\setminus L^1$ the defining integral must be read as a limit in the mean rather than pointwise, and the contrast with the $L^1$ theory where the transform is not surjective
  - work: folland-1999
    loc: "§8.2, Prop. 8.17, p. 245: that $C_c^\\infty$, and hence $\\mathcal{S}$, is dense in $L^p$ for $1\\le p<\\infty$; §8.3, pp. 252–253: Theorem 8.29 (the Plancherel Theorem), that $f\\in L^1\\cap L^2$ implies $\\hat f\\in L^2$ and that $\\mathcal{F}\\vert_{L^1\\cap L^2}$ extends uniquely to a unitary isomorphism of $L^2$, with the proof through the dense set $X=\\{f\\in L^1:\\hat f\\in L^1\\}$, the inversion theorem, Lemma 8.25 and the Gaussian regularisation $f*g_t$; Theorem 8.30 (the Hausdorff-Young inequality) $\\lVert\\hat f\\rVert_q\\le\\lVert f\\rVert_p$ for $1\\le p\\le2$ with $q$ conjugate to $p$"
    pages: "245, 252-253"
    role: the density of the Schwartz class in $L^2$, which the extension argument needs; the careful statement that the $L^2$ transform is an extension by continuity from $L^1\\cap L^2$ rather than an integral, the identification of a dense set on which both the function and its transform are integrable, and the interpolation inequality that sits between the $L^1$ and $L^2$ theories
  - work: strauss-2008
    loc: "§12.3, p. 346: Parseval's equality, also called Plancherel's theorem in this context, in the form $\\int\\lvert f(x)\\rvert^2dx = \\int\\lvert F(k)\\rvert^2 dk/2\\pi$ with the remark that if one integral is finite so is the other, and the two-function version $\\int f\\bar g\\,dx = \\int F\\bar G\\,dk/2\\pi$; and its use in the proof of the uncertainty principle (16)–(18), p. 347"
    pages: "346-347"
    role: the identity in exactly the convention this handbook uses, including the placement of the $1/2\\pi$, and the standard application to the uncertainty principle
  - work: rhb-2006
    loc: "§13.1.9, pp. 450–451: the rewriting (13.44) of the cross-correlation as an inverse transform of $[\\hat f]^*\\hat g$, the multiplication theorem (13.45) obtained by setting $z=0$, Parseval's theorem (13.46) as the case $g=f$, the remark that the Fourier series version of chapter 12 is a special case, and the damped harmonic oscillator example in which $\\lvert\\hat f(\\omega)\\rvert^2$ is read as the energy spectrum and $\\lvert f(t)\\rvert^2$ as the instantaneous energy"
    pages: "450-451"
    role: the derivation of the two-function and one-function identities as the value at the origin of the correlation theorem, which is the route taken here; the reading of the two sides as the total energy counted in the time domain and in the frequency domain
  - work: arfken-2013
    loc: "§20.4, pp. 987–988: the Parseval relation (20.73)–(20.74) obtained by specialising the convolution formula to $x=0$ and replacing $f(y)$ by $f^*(-y)$, its bracket form (20.75)–(20.76), the deduction (20.77) that $\\mathcal{F}^\\dagger=\\mathcal{F}^{-1}$ so that the Fourier transform operator is unitary, the special case (20.78), the remark that the relation can be developed independently of the inverse transform, and the Fraunhofer diffraction reading of the relation as conservation of energy through an aperture"
    pages: "987-988"
    role: the derivation of the relation as the value at the origin of the convolution formula, the operator statement of unitarity in Dirac notation, and the diffraction application
  - work: stakgold-holst-2011
    loc: "§2.4, p. 147: the two formulas (2.4.7) $\\int\\lvert f\\rvert^2dx = (1/2\\pi)\\int\\lvert f^\\wedge\\rvert^2 d\\omega$ and (2.4.8) $\\int f^\\wedge g = \\int f g^\\wedge$, both named Parseval's formula, with the statement that they follow from a formal interchange of orders of integration and that precise conditions are not given there; §10.3, Theorem 10.3.2, p. 701: Plancherel's theorem for $u\\in L^2(\\mathbb{R}^n)$ in the symmetric convention, $\\lVert u\\rVert_2=\\lVert\\hat u\\rVert_2=\\lVert\\check u\\rVert_2$"
    pages: "147, 701"
    role: the two distinct statements that go under the name Parseval, kept apart here; the authors' own note that their derivation is formal; and their $L^2$ statement in the symmetric convention of their Chapter 10
---

:::definition[The square-integrable setting]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, §1.6, p. 143; reed-simon-1980:§IX.2, pp. 327–328; folland-1999:§8.2, Prop. 8.17, p. 245 and §8.3, Thm 8.29, p. 252"}
Let $L^2(\mathbb{R})$ be the space of measurable $f$ with $\int\lvert f\rvert^2<\infty$, equipped with

$$
(f,g) \;=\; \int_{-\infty}^{\infty} f(x)\,\overline{g(x)}\,dx ,
\qquad
\lVert f\rVert_2 \;=\; (f,f)^{1/2} ,
$$

linear in the first slot, as in :ref[]{to=measure.lp-spaces}. It is a Hilbert space (:ref[]{to=funcan.hilbert-spaces}), and the Schwartz class $\mathcal{S}(\mathbb{R})$ of :ref[]{to=fourier.fourier-inversion} is a dense subspace of it: the continuous functions of compact support are dense in $L^p$ for $p<\infty$ (:ref[]{to=measure.lp-spaces}), and smoothing one of them by convolution with a bump puts it in $C_c^{\infty}\subset\mathcal{S}$ without moving it far in $\lVert\cdot\rVert_2$, which is :cite[Folland's]{work=folland-1999 loc="§8.2, Prop. 8.17, p. 245"} Proposition 8.17.

Neither of $L^1(\mathbb{R})$ and $L^2(\mathbb{R})$ contains the other, which is the one structural fact the theorem has to accommodate.

- $f(x)=(1+\lvert x\rvert)^{-1}$ is in $L^2$ but not in $L^1$, so the defining integral $\int f(x)e^{-ikx}dx$ of :ref[]{to=fourier.fourier-transform} need not converge for an $L^2$ function.
- $f(x)=\lvert x\rvert^{-1/2}\chi_{[-1,1]}(x)$ is in $L^1$ but not in $L^2$, so an integrable function need not have a square-integrable transform.

The overlap $L^1\cap L^2$ contains $\mathcal{S}$ and is dense in $L^2$. On it the transform is given by the integral, and the theorem below says it is an isometry there up to a constant; the transform of a general $L^2$ function is then *defined* by continuous extension. :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, p. 328"} give the resulting integral representation as a limit in the $L^2$ norm. They write it in their symmetric convention, as $\operatorname{l.i.m.}_{R\to\infty}(2\pi)^{-n/2}\int_{\lvert x\rvert\le R}e^{-ik\cdot x}f(x)\,dx$; taking $n=1$, so that their prefactor is $(2\pi)^{-1/2}$, and then dropping that prefactor, which our $\mathcal{F}$ does not carry, it becomes

$$
\hat f(k) \;=\; \underset{R\to\infty}{\operatorname{l.i.m.}}\;\int_{-R}^{R} f(x)\,e^{-ikx}\,dx ,
$$

where $\operatorname{l.i.m.}$ ("limit in the mean") means convergence of the truncated integrals in $\lVert\cdot\rVert_2$, not at any particular $k$. The rescaling is the only change: our $\hat f$ is $\sqrt{2\pi}$ times theirs, which is also why their unitary operator is $\mathcal{F}$ itself and ours is $(2\pi)^{-1/2}\mathcal{F}$.
:::

:::statement[Plancherel's theorem and Parseval's relation]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 1.12, pp. 143–144; strauss-2008:§12.3, (14)–(15), p. 346; reed-simon-1980:§IX.1, Corollary to Thm IX.1, p. 321 and §IX.2, Thm IX.6, p. 327; folland-1999:§8.3, Thm 8.29, p. 252; rhb-2006:§13.1.9, (13.45)–(13.46), p. 451"}
Write $\hat f(k)=\int f(x)e^{-ikx}dx$ as in :ref[]{to=fourier.fourier-transform}.

1. **Parseval's relation (two functions).** For $f,g\in\mathcal{S}(\mathbb{R})$,
   $$
   \int_{-\infty}^{\infty} f(x)\,\overline{g(x)}\,dx \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\,\overline{\hat g(k)}\,dk ,
   \qquad\text{that is}\qquad (f,g) = \frac{1}{2\pi}\,(\hat f,\hat g) .
   $$
2. **Plancherel's theorem (one function).** Taking $g=f$,
   $$
   \int_{-\infty}^{\infty}\lvert f(x)\rvert^2\,dx \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\bigl\lvert\hat f(k)\bigr\rvert^2\,dk ,
   \qquad\text{that is}\qquad \lVert f\rVert_2^2 = \frac{1}{2\pi}\lVert\hat f\rVert_2^2 .
   $$
3. **The extension to $L^2$.** Both identities hold for every $f,g\in L^1\cap L^2$, and the operator
   $$
   U = \frac{1}{\sqrt{2\pi}}\,\mathcal{F}
   $$
   extends uniquely from $L^1\cap L^2$ to a **unitary** operator of $L^2(\mathbb{R})$ **onto** $L^2(\mathbb{R})$, with $U^{-1}=U^{\dagger}$ given by the correspondingly normalised inverse transform. In particular $\lVert f\rVert_2^2 = \frac{1}{2\pi}\lVert\hat f\rVert_2^2$ for every $f\in L^2$, with the transform read as the limit in the mean of the definition above.

Parts 1 and 2 are stated in exactly this form, with the $1/2\pi$ in the same place, by :cite[Strauss]{work=strauss-2008 loc="§12.3, (14)–(15), p. 346"}, who adds that if either integral is finite so is the other. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, (20.75)–(20.77), p. 988"} write part 1 as $\langle f\vert g\rangle = \langle\mathcal{F}f\vert\mathcal{F}g\rangle$ and read off $\mathcal{F}^{\dagger}=\mathcal{F}^{-1}$, which is part 3 in operator language. The constant depends on the convention, and only on it: it is $1$ in the symmetric conventions of :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, Thm IX.6, p. 327"} and :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§10.3, Thm 10.3.2, p. 701"} Chapter 10, and $1$ again in the $2\pi$-in-the-exponent convention of :cite[Folland]{work=folland-1999 loc="Thm 8.29, p. 252"}; see the conventions table of :ref[]{to=fourier.fourier-transform}.
:::

:::note[Two different theorems called Parseval]{provenance=adapted src="stakgold-holst-2011:§2.4, (2.4.7)–(2.4.8), p. 147; rhb-2006:§13.1.9, (13.45), p. 451; folland-1999:§8.3, Lemma 8.25, p. 251"}
:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.4, (2.4.7)–(2.4.8), p. 147"} give two formulas under the single name *Parseval's formula*, and they are not the same statement:

$$
\text{(a)}\quad \int \lvert f\rvert^2\,dx = \frac{1}{2\pi}\int\lvert \hat f\rvert^2\,dk ,
\qquad\qquad
\text{(b)}\quad \int \hat f(x)\,g(x)\,dx = \int f(x)\,\hat g(x)\,dx .
$$

Formula (a) is Plancherel's theorem, quadratic in $f$ and carrying a $2\pi$; (b) is the **multiplication formula**, bilinear, carrying no constant, with no conjugation, and holding for any $f,g\in L^1$ — it was proved as step 3 of the inversion proof in :ref[]{to=fourier.fourier-inversion}, and it is :cite[Folland's]{work=folland-1999 loc="Lemma 8.25, p. 251"} Lemma 8.25. The two coincide only after inversion is used to replace one $\hat{\;}$ by its inverse. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.9, (13.45), p. 451"} reserve the name *multiplication theorem* for a third form again, conjugated like (a) but bilinear like (b). They write it constant-free, as $\int f^{*}g\,dx = \int[\tilde f]^{*}\tilde g\,dk$, because their transform is the symmetric $\tilde f = (2\pi)^{-1/2}\hat f$; the two factors of $(2\pi)^{-1/2}$ on the right supply the constant. In our hat the same statement reads
$$
\int f^{*}(x)\,g(x)\,dx \;=\; \frac{1}{2\pi}\int [\hat f(k)]^{*}\,\hat g(k)\,dk ,
$$
which is part 1 above. We keep **Parseval's relation** for part 1, **Plancherel's theorem** for parts 2 and 3, and **multiplication formula** for (b). Stakgold and Holst note that their derivation of (a) and (b) is a formal interchange of orders of integration and that they do not state precise conditions at that point.
:::

:::idea{provenance=original}
A quadratic identity in $f$ is a linear identity in the autocorrelation of $f$. By the Wiener-Kinchin half of :ref[]{to=fourier.convolution-theorem}, the cross-correlation $h = f\star g$ has transform $\overline{\hat f}\hat g$ — the product whose integral we want on the right-hand side. The integral we want on the left-hand side is $h$ evaluated at displacement zero, since $h(0)=\int\overline{f}g$. And the inversion formula of :ref[]{to=fourier.fourier-inversion}, evaluated at the single point $0$, says precisely that $h(0)$ is $\frac{1}{2\pi}$ times the integral of $\hat h$. Putting the three sentences together is the whole proof: no new estimate is needed, only the two theorems already proved and the decision to look at one point of one auxiliary function.

The passage from the Schwartz class to $L^2$ is then abstract. An isometry defined on a dense subspace extends to the whole space in exactly one continuous way, and the extension is still an isometry; it is onto because the transform already maps the dense subspace onto itself.
:::

:::proof[Parts 1 and 2, on the Schwartz class]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 1.12, pp. 143–144; rhb-2006:§13.1.9, (13.44)–(13.46), pp. 450–451; arfken-2013:§20.4, (20.73)–(20.74), p. 987"}
Let $f,g\in\mathcal{S}(\mathbb{R})$ and set

$$
h \;=\; g\star f ,
\qquad\text{so}\qquad
h(z) \;=\; \int_{-\infty}^{\infty}\overline{g(x)}\,f(x+z)\,dx .
$$

**Step 1: $h$ lies in $\mathcal{S}$.** By part 4 of the algebra statement of :ref[]{to=fourier.convolution-theorem}, $h = \tilde g * f$ with $\tilde g(x)=\overline{g(-x)}$. Reflection and conjugation both preserve $\mathcal{S}$, so $\tilde g\in\mathcal{S}$, and part 3 of the same statement gives $\tilde g * f\in\mathcal{S}$. In particular $h$ is continuous, so the value $h(0)$ is unambiguous, and $\hat h\in\mathcal{S}\subset L^1$, so the inversion theorem applies to $h$ at every point.

**Step 2: the two sides, read off.** The value at the origin is, directly from the definition of $h$,

$$
h(0) \;=\; \int_{-\infty}^{\infty}\overline{g(x)}\,f(x)\,dx \;=\; (f,g) .
$$

The transform is, by the Wiener-Kinchin part of :ref[]{to=fourier.convolution-theorem} applied to the pair $(g,f)$ in that order,

$$
\hat h(k) \;=\; \overline{\hat g(k)}\;\hat f(k) .
$$

**Step 3: inversion at one point.** Part 2 of :ref[]{to=fourier.fourier-inversion}, applied to $h\in\mathcal{S}$ and evaluated at $z=0$, where $e^{ik\cdot0}=1$, gives

$$
h(0) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat h(k)\,dk .
$$

Substituting the two expressions from step 2,

$$
\int_{-\infty}^{\infty} f(x)\,\overline{g(x)}\,dx \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\,\overline{\hat g(k)}\,dk ,
$$

which is part 1. Setting $g=f$ makes both integrands non-negative and gives part 2. The route is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 5, Thm 1.12, pp. 143–144"}, who take $g=f$ from the start and write the auxiliary function as $f*f^{\flat}$ with $f^{\flat}(x)=\overline{f(-x)}$, the same object as our $g\star f$ with $g=f$; carrying two functions costs nothing and delivers the polarised identity without a separate argument. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.9, (13.44)–(13.45), p. 451"} and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, (20.73)–(20.74), p. 987"} organise the same calculation as setting the displacement variable to zero in the correlation and convolution theorems respectively. $\square$
:::

:::proof[Part 3, the extension to $L^2$]{provenance=adapted src="folland-1999:§8.2, Prop. 8.17, p. 245 and §8.3, Thm 8.29, pp. 252–253; reed-simon-1980:§IX.2, Thm IX.6, p. 327"}
Write $U = (2\pi)^{-1/2}\mathcal{F}$, so that part 2 reads $\lVert Uf\rVert_2 = \lVert f\rVert_2$ for $f\in\mathcal{S}$.

**Step 1: $U$ is an isometry on a dense subspace.** $\mathcal{S}$ is dense in $L^2(\mathbb{R})$, by the density statement recorded in the definition above (:cite[Folland]{work=folland-1999 loc="§8.2, Prop. 8.17, p. 245"}), and $U$ maps it into $L^2$ isometrically by part 2.

**Step 2: extend.** A linear isometry defined on a dense subspace of a normed space, with values in a complete space, has exactly one continuous extension to the whole space, obtained by taking limits of Cauchy sequences; the extension is again linear and isometric, since both properties pass to limits. Apply this to $U$ on $\mathcal{S}\subset L^2$, with $L^2$ complete. Call the extension $U$ again.

**Step 3: $U$ is onto.** By part 3 of :ref[]{to=fourier.fourier-inversion}, $\mathcal{F}(\mathcal{S})=\mathcal{S}$, so the range of $U$ contains the dense set $\mathcal{S}$. The range of an isometry defined on a complete space is closed: if $Uf_n\to v$ then $(Uf_n)$ is Cauchy, hence so is $(f_n)$ by isometry, hence $f_n\to f$ for some $f\in L^2$ and $v=Uf$ by continuity. A closed set containing a dense set is everything, so $U$ is surjective. A surjective linear isometry of a Hilbert space is unitary, with $U^{-1}=U^{\dagger}$; see :ref[]{to=funcan.hilbert-spaces}.

**Step 4: the extension agrees with the integral on $L^1\cap L^2$.** This is the one point that is not formal, since a function in $L^1\cap L^2$ need not be in $\mathcal{S}$ and the extension was built by limits. :cite[Folland]{work=folland-1999 loc="Thm 8.29, pp. 252–253"} settles it by convolving with the Gaussian $g_t$ of the inversion proof: for $f\in L^1\cap L^2$, $f*g_t$ lies in the set $X=\{f\in L^1:\hat f\in L^1\}$, on which the integral formula is itself an isometry, since for $u\in X$ the inversion theorem and the multiplication formula give $\lVert u\rVert_2^2 = \frac{1}{2\pi}\lVert\hat u\rVert_2^2$ directly. On $X$ the integral formula therefore agrees with the extension built in step 2, and the reason is worth spelling out: $X$ is a linear subspace of $L^2$ containing $\mathcal{S}$, and $(2\pi)^{-1/2}\mathcal{F}$ is isometric on it, hence $\lVert\cdot\rVert_2$-continuous there; so if $u\in X$ and $\varphi_n\in\mathcal{S}$ with $\varphi_n\to u$ in $L^2$, then $(2\pi)^{-1/2}\hat\varphi_n\to(2\pi)^{-1/2}\hat u$ in $L^2$ by that isometry applied to the differences $u-\varphi_n\in X$, while $(2\pi)^{-1/2}\hat\varphi_n = U\varphi_n\to Uu$ by construction of the extension. Finally $f*g_t\to f$ in $L^1$ and in $L^2$ as $t\to0$, so $\widehat{f*g_t}\to\hat f$ uniformly and in $L^2$; the two limits must coincide. :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, p. 328"} run the matching argument on the other side, truncating an $L^2$ function to $\lvert x\rvert\le R$ to land in $L^1$ and passing to the limit in the mean, which is where their $\operatorname{l.i.m.}$ representation comes from.

**Step 5: from norms to inner products.** Steps 2 and 3 deliver only that $U$ preserves the norm and is onto. The inner-product form, part 1 for arbitrary $f,g\in L^2$, follows by polarisation: in a complex inner-product space

$$
(u,v) \;=\; \frac{1}{4}\sum_{m=0}^{3} i^{m}\,\bigl\lVert u+i^{m}v\bigr\rVert_2^{2} ,
$$

so a linear map preserving every norm preserves every inner product. Hence $(Uf,Ug)=(f,g)$ for all $f,g\in L^2$, which on multiplying by $2\pi$ is $(f,g)=\frac{1}{2\pi}(\hat f,\hat g)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Parts 1 and 2 use rapid decrease only to guarantee that the three ingredients are legitimate**: that $h=g\star f$ exists and is continuous at $0$, that $\hat h\in L^1$ so that inversion applies, and that both sides are finite. Any hypothesis delivering those three would do, and :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1.7, p. 144"} note that moderate decrease of $f$ and of $\hat f$ suffices.
- **Continuity of $h$ at the origin is what makes "evaluate at one point" meaningful.** Both sides of part 1 are integrals, so neither changes if $f$ is altered on a null set; the proof is consistent with that only because $h$, being a correlation of two $L^2$ functions, is genuinely continuous and so has an unambiguous value at $0$.
- **Square-integrability cannot be dropped and integrability cannot replace it.** For $f=\lvert x\rvert^{-1/2}\chi_{[-1,1]}\in L^1\setminus L^2$, part 2 would assert that $\frac{1}{2\pi}\int\lvert\hat f\rvert^2$ equals a divergent integral; what is true instead is the Hausdorff-Young inequality, which :cite[Folland]{work=folland-1999 loc="Thm 8.30, p. 253"} states in his convention as $\lVert\hat f\rVert_q\le\lVert f\rVert_p$ for $1\le p\le2$ and $q$ conjugate to $p$, interpolating between the $L^1$ bound and Plancherel.
- **Surjectivity is a separate fact from isometry, and it is what "unitary" adds.** It comes from inversion, in step 3. The contrast with the $L^1$ theory is sharp: :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, p. 327"} observe that $\mathcal{F}$ maps $L^1$ into but not onto the continuous functions vanishing at infinity, so there is no inverse theorem of this kind on $L^1$.
- **For $f\in L^2\setminus L^1$ the symbol $\hat f(k)$ denotes an equivalence class, not a number.** The truncated integrals converge in $\lVert\cdot\rVert_2$, which forces convergence at no individual $k$; this is why :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, p. 328"} write $\operatorname{l.i.m.}$ rather than $\lim$, and why statements about the pointwise behaviour of an $L^2$ transform need separate work.
- **The constant $2\pi$ is a fact about the convention, not about the transform.** Our $\mathcal{F}$ is not itself unitary; $(2\pi)^{-1/2}\mathcal{F}$ is. In the symmetric convention the normalisation is built into the definition and the theorem reads $\lVert f\rVert_2=\lVert\tilde f\rVert_2$, which is the form in which :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.3, Thm 10.3.2, p. 701"} state it. A numerical answer obtained from a book in another convention must be rescaled before it is compared with one obtained here.
:::

:::method[Evaluating an integral by Parseval]{provenance=original}
1. **Match the integrand to a squared transform.** The method applies when the integral has the shape $\int\lvert F(k)\rvert^2 dk$ or $\int F(k)\overline{G(k)}\,dk$ for functions $F,G$ that are recognisable transforms. Powers of $\sin$ over powers of the variable, and products of two Lorentzians, are the two common signatures.
2. **Find the originals.** Read the table of :ref[]{to=fourier.fourier-transform} backwards to get $f$ with $\hat f = F$, using the operational rules and, where $F$ is itself a product, :ref[]{to=fourier.convolution-theorem} to write $f$ as a convolution. A factor $\sin^2$ usually means $f$ is a convolution of two pulses, hence piecewise linear.
3. **Rescale the variable before anything else** if the transform appears with an argument other than $k$; a substitution $k=\lambda u$ multiplies the answer by $\lambda$ and is the commonest source of error.
4. **Compute the left-hand side.** $\int\lvert f\rvert^2$ is almost always elementary, because $f$ is a pulse, a triangle or an exponential even when $F$ is not elementary at all. That asymmetry is the point of the method.
5. **Equate, keeping the $1/2\pi$ on the transform side**, and solve for the integral wanted.
6. **Check.** Both sides of part 2 are non-negative, so a negative answer is wrong; both are unchanged by translating $f$, so the answer may not depend on any phase; and a numerical quadrature of the original integral should reproduce the closed form to several digits. For a one-sided integral of an even integrand, halve at the end rather than at the start.
:::

:::example[Two integrals that are hard directly]{provenance=original}
**First: a fourth power of sinc.** Let

$$
T(x) \;=\; \bigl(1-\lvert x\rvert\bigr)_{+} ,
$$

the triangle of height $1$ and half-width $1$. By :ref[]{to=fourier.convolution-theorem}, $T = \chi_{[-1/2,1/2]}*\chi_{[-1/2,1/2]}$, since the convolution of a pulse with itself is the overlap of the pulse with its translate; and $\widehat{\chi_{[-1/2,1/2]}}(k) = 2\sin(k/2)/k$, so

$$
\hat T(k) \;=\; \left(\frac{2\sin(k/2)}{k}\right)^{2} \;=\; \frac{4\sin^2(k/2)}{k^2} ,
$$

in agreement with the triangle entry of the table of :ref[]{to=fourier.fourier-transform} at half-width $1$. $T$ is continuous with compact support, so $T\in L^1\cap L^2$ — but it is not in $\mathcal{S}$, being non-differentiable at $x=0,\pm1$. Part 2 as stated therefore does not cover it, and we use part 3, which extends the same identity to all of $L^1\cap L^2$. The left-hand side is elementary:

$$
\int_{-\infty}^{\infty} T(x)^2\,dx \;=\; 2\int_{0}^{1}(1-x)^2\,dx \;=\; \frac{2}{3} .
$$

So

$$
\frac{2}{3} \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\frac{16\sin^4(k/2)}{k^4}\,dk .
$$

Substitute $k=2u$, so $dk = 2\,du$ and $k^4 = 16u^4$; the two factors of $16$ cancel and the $2$ from $dk$ survives:

$$
\frac{2}{3} \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\frac{16\sin^4 u}{16u^4}\,2\,du \;=\; \frac{1}{\pi}\int_{-\infty}^{\infty}\frac{\sin^4 u}{u^4}\,du ,
$$

so

$$
\boxed{\;\int_{-\infty}^{\infty}\frac{\sin^4 u}{u^4}\,du \;=\; \frac{2\pi}{3} \;=\; 2.0943951024\ldots}
$$

Oscillatory quadrature over $(-\infty,\infty)$, taking the interval $[0,\pi]$ separately and summing the tail over successive half-periods of $\sin u$, returns $2.0943951024$, confirming the closed form to ten digits. Nothing in the calculation required integrating $\sin^4 u/u^4$.

**Second: a product of two Lorentzians, by the two-function form.** Let $f(x)=e^{-2\lvert x\rvert}$ and $g(x)=e^{-5\lvert x\rvert}$. Neither is in $\mathcal{S}$ — both have a corner at the origin — but both are continuous and decay exponentially, so both lie in $L^1\cap L^2$ and part 3 again supplies the identity of part 1 for them. They are real, so the conjugations may be dropped on the left, and from the table $\hat f(k)=4/(4+k^2)$ and $\hat g(k)=10/(25+k^2)$, both real. The left-hand side is

$$
\int_{-\infty}^{\infty} e^{-2\lvert x\rvert}e^{-5\lvert x\rvert}\,dx \;=\; \int_{-\infty}^{\infty} e^{-7\lvert x\rvert}\,dx \;=\; \frac{2}{7} ,
$$

and the right-hand side is $\dfrac{1}{2\pi}\displaystyle\int\frac{40\,dk}{(4+k^2)(25+k^2)} = \frac{20}{\pi}\int\frac{dk}{(4+k^2)(25+k^2)}$. Equating,

$$
\int_{-\infty}^{\infty}\frac{dk}{(4+k^2)(25+k^2)} \;=\; \frac{2}{7}\cdot\frac{\pi}{20} \;=\; \frac{\pi}{70} \;=\; 0.0448798950\ldots
$$

This one can be checked in closed form independently: partial fractions give $\frac{1}{(4+k^2)(25+k^2)} = \frac{1}{21}\bigl[\frac{1}{4+k^2}-\frac{1}{25+k^2}\bigr]$, whose integral is $\frac{1}{21}(\frac{\pi}{2}-\frac{\pi}{5}) = \frac{\pi}{70}$. Numerical quadrature agrees to the full working precision, $0.0448798951$.

**What the two have in common.** In both cases the integral asked for lives on the transform side, where it is awkward, and Parseval moves it to the function side, where it is a polynomial or an exponential. The second example also shows the converse reading: given the elementary partial-fraction evaluation, the same identity run backwards computes $\int e^{-7\lvert x\rvert}dx$, which is a consistency check on the pair of transforms rather than a new result.
:::

:::application{provenance=original}
**Conservation of energy through an aperture.** In Fraunhofer diffraction the far-field amplitude is the Fourier transform of the aperture function, and the observed intensity is its squared modulus. Plancherel then says that the total energy in the diffraction pattern equals the total energy transmitted by the aperture: :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, p. 988"} point out that in this problem the Parseval relation *is* energy conservation. The same statement in a waveguide or an optical fibre says that redistributing power among modes cannot change the total.

**Energy spectra of transient signals.** For a decaying oscillation, $\lvert f(t)\rvert^2$ is the instantaneous energy and $\lvert\hat f(\omega)\rvert^2$ the energy per unit frequency interval; Plancherel says the two accountings agree. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.9, p. 451"} make this explicit for the damped harmonic oscillator $f(t)=H(t)e^{-t/\tau}\sin\omega_0 t$, whose transform has Lorentzian peaks of half-width $1/\tau$ at $\pm\omega_0$: the total energy may be computed by integrating over time or over frequency, and the line width observed in the spectrum is the inverse of the decay time measured in the signal. Combined with the Wiener-Kinchin theorem of :ref[]{to=fourier.convolution-theorem}, this is the foundation of spectral density estimation in :ref[]{to=stats.periodogram}.

**Quantum mechanics: position and momentum are the same state.** If $\psi\in L^2(\mathbb{R})$ is normalised, $\lVert\psi\rVert_2=1$, then part 3 says the momentum-space wave function $\hat\psi/\sqrt{2\pi}$ is normalised too. So the total probability is the same whether the particle is described by where it is or by how fast it is going, and no normalisation constant has to be rechosen when changing representation. Unitarity is the statement that the change of representation is a rotation of the Hilbert space; it is why expectation values, overlaps and transition probabilities may all be computed in whichever of the two is more convenient, and it is the one-particle case of the framework of :ref[]{to=funcan.quantum-mechanics-framework}.

**The uncertainty principle and energy estimates.** Plancherel is the step that converts a statement about $\int\lvert f'\rvert^2$ into one about $\int k^2\lvert\hat f\rvert^2$, because $\widehat{f'}=ik\hat f$. :cite[Strauss]{work=strauss-2008 loc="§12.3, (16)–(18), pp. 346–347"} uses exactly this to prove the uncertainty inequality $\Delta x\,\Delta k\ge\tfrac12$ from the Cauchy-Schwarz inequality, and the same move turns a Sobolev norm into a weighted $L^2$ norm of the transform, which is how :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§10.3, pp. 701–702"} define the fractional spaces $H^{s}(\mathbb{R}^n)$ by the finiteness of $\lVert(1+\lvert\cdot\rvert^2)^{s/2}\hat u\rVert_2$. See :ref[]{to=fourier.uncertainty-principle} and :ref[]{to=pde.weak-solutions-sobolev}.

**Numerical spectral methods.** The discrete analogue of part 2 is what makes a spectral method's error measurable: the *squared* $L^2$ error of a truncated expansion is exactly the tail $\frac{1}{2\pi}\int_{\lvert k\rvert>K}\lvert\hat f\rvert^2 dk$, with no constant to estimate, so the decay of the computed spectrum is a direct read-out of the accuracy. See :ref[]{to=num.spectral-methods} and, for the discrete version, :ref[]{to=fourier.dft-fft}.
:::
