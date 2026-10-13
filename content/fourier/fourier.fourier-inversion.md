---
id: fourier.fourier-inversion
title: Fourier inversion
kind: theorem
level: core
summary: Proves that a rapidly decreasing function is recovered from its Fourier transform by the inverse integral, using the Gaussian as an approximate identity and the multiplication formula, shows that the transform is a bijection of the Schwartz class whose square is reflection times a constant, and records the weaker versions that hold when the transform is merely integrable or the function merely piecewise smooth.
prereqs: [fourier.fourier-transform, found.gaussian-integrals, measure.dominated-convergence, measure.fubini-tonelli]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §1.3–§1.5, pp. 134–142: the definition of the Schwartz space by the conditions $\\sup_x\\lvert x\\rvert^k\\lvert f^{(\\ell)}(x)\\rvert<\\infty$ (pp. 134–135), Thm 1.3 that $f\\in\\mathcal{S}$ implies $\\hat f\\in\\mathcal{S}$ with the proof from Prop. 1.2 (p. 137), the normalisation $\\int e^{-\\pi x^2}dx=1$ and Thm 1.4 that $e^{-\\pi x^2}$ is its own transform, with the proof by the differential equation $F'=-2\\pi\\xi F$ (pp. 138–139), Cor. 1.5 and Thm 1.6 that the dilated Gaussians $K_\\delta$ are a family of good kernels, Cor. 1.7 that $f*K_\\delta\\to f$ uniformly (pp. 139–140), Prop. 1.8 (the multiplication formula) with the interchange-of-order discussion (pp. 140–141), Thm 1.9 (Fourier inversion) and Cor. 1.10 (bijectivity on $\\mathcal{S}$) (pp. 141–142); §1.7, p. 144: the extension to functions of moderate decrease whose transform also has moderate decrease"
    pages: "134-142, 144"
    role: the proof route followed here — Schwartz space, the Gaussian as the one explicitly computable self-transforming function, the Gaussians as good kernels, the multiplication formula as the device that interchanges the two integrals, inversion first at the origin and then everywhere by translation, and bijectivity as a corollary; also the statement that the result extends to functions of moderate decrease when their transforms have it too
  - work: folland-1999
    loc: "§8.3, pp. 251–253: Prop. 8.24 giving the transform of $e^{-\\pi a\\lvert x\\rvert^2}$, the definition of $g^\\vee$, the observation that a direct appeal to Fubini fails because the double integrand is not integrable, Lemma 8.25 ($\\int\\hat f g = \\int f\\hat g$), Thm 8.26 (the Fourier Inversion Theorem: if $f\\in L^1$ and $\\hat f\\in L^1$ then $f$ agrees a.e. with a continuous $f_0$ and $(\\hat f)^\\vee = f_0$), Cor. 8.27 (uniqueness) and Cor. 8.28 ($\\mathcal{F}$ is an isomorphism of $\\mathcal{S}$)"
    pages: "251-253"
    role: the $L^1$ statement with the exact hypothesis $f,\\hat f\\in L^1$ and the almost-everywhere conclusion; the explicit diagnosis that the obstruction is the non-integrability of the double integrand, repaired by inserting a Gaussian convergence factor; the uniqueness corollary
  - work: reed-simon-1980
    loc: "§IX.1, pp. 319–321: the Lemma that $\\mathcal{F}$ and its inverse are continuous linear maps of $\\mathcal{S}(\\mathbb{R}^n)$ into itself with $\\widehat{D^\\alpha f} = $ the transform of $(-ix)^\\alpha f$ up to the multi-index bookkeeping, and Thm IX.1 (Fourier inversion theorem), proved by expanding a compactly supported $f$ in a Fourier series on a large cube and recognising the resulting sum as a Riemann sum for the inversion integral"
    pages: "319-321"
    role: a second, independent proof route that uses no Gaussian at all, quoted in the remark as evidence that the Gaussian is a convenience and not the mechanism; the statement that the transform is a bicontinuous bijection of the Schwartz space
  - work: stakgold-holst-2011
    loc: "§2.3, p. 130: the definition of the class $D$ of functions obeying Dirichlet conditions (piecewise continuous, with a finite subdivision inside each piece of which $f$ has a continuous derivative and one-sided derivatives at the ends); §2.4, pp. 145–147: the Fourier integral expansion (2.4.3)–(2.4.4), the statement that the inversion integral must be read as the symmetric limit (2.4.5), the reduction of the truncated inversion integral to a convolution with $(R/\\pi)\\operatorname{sinc}Ry$, and the Fourier Integral Theorem (2.4.6) giving $\\tfrac12[f(x^+)+f(x^-)]$ for $f\\in L_1$ satisfying Dirichlet conditions"
    pages: "130, 145-147"
    role: the definition of Dirichlet conditions, and the version of the theorem that asks for no smoothness beyond them and keeps only integrability, with the necessity of the symmetric limit and the midpoint value at a jump; the sinc delta sequence as the kernel in that route
  - work: hassani-2013
    loc: "§9.2, pp. 280–281: the formal consistency check that substituting the inversion formula into the transform reproduces the identity by way of $\\frac{1}{2\\pi}\\int e^{i(k'-k)x}dx=\\delta(k'-k)$, and Eq. (9.22) giving the midpoint values $\\tfrac12[f(x+0)+f(x-0)]$ for piecewise continuous $f$"
    pages: "280-281"
    role: the delta-function reading of inversion as the completeness relation of the exponentials, and the midpoint convention at a jump, both reported as the physicists' formulation alongside the proved theorem
  - work: rhb-2006
    loc: "§13.1, pp. 434–435: the derivation of Eq. (13.4), named there Fourier's inversion theorem, as the limit of the Fourier series of a function of period $T$ as $T\\to\\infty$, with the remark that the existence of the limit is assumed without proof"
    pages: "434-435"
    role: the name of the theorem and the heuristic derivation that motivates the statement, explicitly flagged by its authors as not a proof
---

:::definition[Rapidly decreasing functions]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, §1.3, pp. 134–135; reed-simon-1980:§IX.1, p. 318"}
The **Schwartz space** $\mathcal{S}(\mathbb{R})$ consists of the functions $f:\mathbb{R}\to\mathbb{C}$ that are infinitely differentiable and satisfy

$$
\sup_{x\in\mathbb{R}}\;\bigl\lvert x\bigr\rvert^{\,m}\,\bigl\lvert f^{(n)}(x)\bigr\rvert \;<\; \infty
\qquad\text{for all integers } m,n \ge 0 .
$$

Equivalently: $f$ and every derivative decay faster than any power of $1/\lvert x\rvert$. Such $f$ are called **rapidly decreasing**. The Gaussians $e^{-ax^2}$ with $a>0$ are in $\mathcal{S}$, as is any smooth compactly supported function; $e^{-\lvert x\rvert}$ is not (it is not differentiable at $0$) and neither is $(1+x^2)^{-1}$ (it decays too slowly).

Three facts are used below and all follow directly from the definition.

1. **$\mathcal{S}\subset L^1$.** Taking $n=0$ with $m=0$ and with $m=2$ gives two bounds, $\lvert f(x)\rvert\le C_0$ everywhere and $\lvert f(x)\rvert\le C_2/x^2$ for $x\ne0$. Put $C=2\max(C_0,C_2)$: for $\lvert x\rvert\le1$ the first bound gives $\lvert f(x)\rvert\le C_0\le C/2\le C/(1+x^2)$, and for $\lvert x\rvert\ge1$ the second gives $\lvert f(x)\rvert\le C_2/x^2\le C/(2x^2)\le C/(1+x^2)$. So $\lvert f(x)\rvert\le C/(1+x^2)$, which is integrable. Every $f\in\mathcal{S}$ therefore has a Fourier transform in the sense of :ref[]{to=fourier.fourier-transform}.
2. **$\mathcal{S}$ is stable under differentiation and under multiplication by a polynomial**, directly from the definition, hence under any operator $x^{m}(d/dx)^{n}$.
3. **Every $f\in\mathcal{S}$ is bounded and uniformly continuous**, since $f$ and $f'$ are bounded.

The two **Gaussian kernels** used in the proof are, for $\varepsilon>0$,

$$
G_\varepsilon(k) \;=\; e^{-\varepsilon k^2/2} ,
\qquad
K_\varepsilon(u) \;=\; \frac{1}{\sqrt{2\pi\varepsilon}}\;e^{-u^2/(2\varepsilon)} .
$$

$G_\varepsilon$ is a convergence factor that tends to $1$ pointwise as $\varepsilon\to0^{+}$; $K_\varepsilon$ is a probability density of variance $\varepsilon$ that concentrates at the origin. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, Thm 1.6, p. 139"} call a family with the properties of $K_\varepsilon$ a family of *good kernels*.
:::

:::statement[Fourier inversion on the Schwartz class]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 1.3, p. 137, Thm 1.9 and Cor. 1.10, pp. 141–142; reed-simon-1980:§IX.1, Thm IX.1, p. 320; folland-1999:§8.3, Cor. 8.28, p. 252"}
Let $f\in\mathcal{S}(\mathbb{R})$ and let $\hat f(k)=\int f(x)e^{-ikx}dx$. Then

1. **The class is preserved.** $\hat f\in\mathcal{S}(\mathbb{R})$. In particular $\hat f\in L^1$, so the integral in part 2 converges absolutely.
2. **Inversion.** For every $x\in\mathbb{R}$,
   $$
   f(x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\,e^{ikx}\,dk .
   $$
3. **Bijectivity.** $\mathcal{F}:\mathcal{S}\to\mathcal{S}$ is a linear bijection, with inverse $\mathcal{F}^{-1}[g](x) = \frac{1}{2\pi}\int g(k)e^{ikx}dk$. Writing $(Rf)(x)=f(-x)$ for reflection,
   $$
   \mathcal{F}^2 = 2\pi R ,
   \qquad
   \mathcal{F}^4 = (2\pi)^2 I ,
   $$
   so up to the constant the transform has order four, and its only possible eigenvalues on $\mathcal{S}$ are the fourth roots of $(2\pi)^2$, namely $\pm\sqrt{2\pi}$ and $\pm i\sqrt{2\pi}$.
:::

:::statement[Two weaker versions]{provenance=adapted src="folland-1999:§8.3, Thm 8.26 and Cor. 8.27, pp. 251–252; stakgold-holst-2011:§2.3, p. 130 and §2.4, (2.4.5) and the Fourier Integral Theorem (2.4.6), pp. 146–147; stein-shakarchi-2003:Ch. 5, §1.7, p. 144; hassani-2013:§9.2, (9.22), p. 280"}
1. **The integrable version.** If $f\in L^1(\mathbb{R})$ and $\hat f\in L^1(\mathbb{R})$, then some continuous $f_0$ satisfies $f=f_0$ off a set of measure zero, and for every $x$
   $$
   f_0(x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\,e^{ikx}\,dk .
   $$
   :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1.7, p. 144"} record the same extension for functions of moderate decrease whose transforms also have moderate decrease, and remark that it needs no new ideas.

   **Uniqueness.** In particular, if $f\in L^1$ and $\hat f\equiv 0$ then $f=0$ almost everywhere: two integrable functions with the same transform are equal almost everywhere.

2. **The piecewise-smooth version.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.4, Fourier Integral Theorem (2.4.6), p. 146"} ask for no smoothness beyond piecewise regularity, and for no decay of $\hat f$ at all. A function obeys their **Dirichlet conditions** (:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, p. 130"}) when it is piecewise continuous and the interval admits a finite subdivision inside each piece of which $f$ has a continuous derivative, with one-sided derivatives at the subdivision points; this is the same hypothesis under which the Fourier series of a periodic function converges, treated in :ref[]{to=fourier.dirichlet-convergence}. If $f\in L_1(-\infty,\infty)$ and $f$ satisfies Dirichlet conditions, then for every $x$
   $$
   \frac{f(x^{+})+f(x^{-})}{2} \;=\; \lim_{R\to\infty}\;\frac{1}{2\pi}\int_{-R}^{R}\hat f(k)\,e^{ikx}\,dk ,
   $$
   the limit being over symmetric intervals, which they stress is how the integral must be read. Their statement is written with the kernel $e^{+i\omega\xi}$ and the inverse kernel $e^{-i\omega x}$; substituting $\omega=-k$ turns it into the display above, with no other change. :cite[Hassani]{work=hassani-2013 loc="§9.2, Eq. (9.22), p. 280"} states the same midpoint rule for piecewise continuous $f$ and $\hat f$ in the symmetric convention.
:::

:::idea{provenance=original}
We would like to substitute the definition of $\hat f$ into the inversion integral and exchange the two integrations, whereupon $\frac{1}{2\pi}\int e^{ik(x-y)}dk$ would act as a delta function and pick out $f(x)$. That is exactly the calculation :cite[Hassani]{work=hassani-2013 loc="§9.2, pp. 280–281"} performs, and it is the right picture; but the exchange is illegitimate, because the double integrand has modulus $\lvert f(y)\rvert$, which is not integrable over the whole plane. :cite[Folland]{work=folland-1999 loc="§8.3, p. 251"} names this as precisely the obstruction.

The repair is to insert a convergence factor $e^{-\varepsilon k^2/2}$, which makes the double integral absolutely convergent so that Fubini applies, and then to let $\varepsilon\to0^{+}$. The Gaussian is the right factor for two reasons: it is its own transform up to scaling, so inserting it in the $k$ integral produces a Gaussian in the $y$ integral, and that Gaussian is positive with total mass one, so as $\varepsilon\to0^{+}$ it concentrates at $y=x$ and reproduces $f(x)$. In short, the unproved delta function of the formal calculation is replaced by an honest, explicitly computable approximation to it.
:::

:::proof[Part 1: the transform preserves $\mathcal{S}$]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 1.3, p. 137; reed-simon-1980:§IX.1, the Lemma, pp. 319–320"}
Let $f\in\mathcal{S}$ and fix integers $m,n\ge0$. By item 2 of the definition, $x^{n}f(x)$ lies in $\mathcal{S}$, hence in $L^1$, so rule 7 of :ref[]{to=fourier.fourier-transform} may be applied $n$ times:

$$
\frac{d^{\,n}}{dk^{\,n}}\hat f(k) \;=\; \widehat{\,(-ix)^{n}f\,}(k) .
$$

Put $g(x)=(-ix)^{n}f(x)$, again in $\mathcal{S}$, so $g$ and all its derivatives are in $L^1$. Rule 6 applied $m$ times gives $\widehat{g^{(m)}}(k) = (ik)^{m}\hat g(k)$, that is

$$
k^{m}\,\frac{d^{\,n}}{dk^{\,n}}\hat f(k) \;=\; (-i)^{m}\,\widehat{\;\frac{d^{\,m}}{dx^{\,m}}\bigl[(-ix)^{n}f(x)\bigr]\;}(k) .
$$

The function being transformed on the right is in $\mathcal{S}$, hence in $L^1$, so by the boundedness statement of :ref[]{to=fourier.fourier-transform} the right-hand side is bounded by $\bigl\lVert \frac{d^{m}}{dx^{m}}[x^{n}f]\bigr\rVert_1 < \infty$, uniformly in $k$. As $m$ and $n$ were arbitrary, $\hat f\in\mathcal{S}$. The only two inputs are the two operational rules, and they enter in opposite directions: rule 7 converts derivatives in $k$ into powers of $x$, rule 6 converts powers of $k$ into derivatives in $x$. $\square$
:::

:::proof[Part 2: inversion]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 1.4, pp. 138–139, Thm 1.6 and Cor. 1.7, pp. 139–140, Prop. 1.8, pp. 140–141, and Thm 1.9, p. 141; folland-1999:§8.3, Lemma 8.25 and Thm 8.26, pp. 251–252"}
**Step 1: the Gaussian transform.** For $a>0$, completing the square as in :ref[]{to=found.gaussian-integrals} and shifting the contour gives

$$
\int_{-\infty}^{\infty} e^{-ax^2}e^{-ikx}\,dx \;=\; \sqrt{\frac{\pi}{a}}\;e^{-k^2/(4a)} .
$$

Specialising to $a=\varepsilon/2$ and writing the transform variable as $u$,

$$
\widehat{G_\varepsilon}(u) \;=\; \int e^{-\varepsilon k^2/2}e^{-iku}\,dk \;=\; \sqrt{\frac{2\pi}{\varepsilon}}\;e^{-u^2/(2\varepsilon)} \;=\; 2\pi\,K_\varepsilon(u) .
$$

This is the one place a specific function is computed, and it is why the Gaussian is used: it is the only elementary family that reproduces itself. (:cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, Thm 1.4, p. 138"} obtain it instead from the differential equation $F'(\xi)=-2\pi\xi F(\xi)$ satisfied by the transform of $e^{-\pi x^2}$, which avoids the contour shift.)

**Step 2: $K_\varepsilon$ is an approximate identity.** Three properties, all immediate from step 1 and the substitution $u=\sqrt{\varepsilon}\,v$:

- $K_\varepsilon\ge0$;
- $\displaystyle\int K_\varepsilon(u)\,du = \frac{1}{\sqrt{2\pi}}\int e^{-v^2/2}\,dv = 1$, by the substitution $u=\sqrt{\varepsilon}\,v$ and the normalisation of :ref[]{to=found.gaussian-integrals};
- for each fixed $\eta>0$, $\displaystyle\int_{\lvert u\rvert>\eta}K_\varepsilon(u)\,du = \frac{1}{\sqrt{2\pi}}\int_{\lvert v\rvert>\eta/\sqrt{\varepsilon}}e^{-v^2/2}\,dv \longrightarrow 0$ as $\varepsilon\to0^{+}$, since the region of integration escapes to infinity.

**Claim.** If $h$ is bounded and continuous at $x$, then $\int h(y)K_\varepsilon(y-x)\,dy \to h(x)$ as $\varepsilon\to0^{+}$.

*Proof of the claim.* Let $B=\sup\lvert h\rvert$ and let $\sigma>0$. Using the second property to write $h(x)=\int h(x)K_\varepsilon(y-x)dy$,

$$
\left\lvert \int h(y)K_\varepsilon(y-x)\,dy - h(x)\right\rvert
\;\le\; \int_{\lvert y-x\rvert\le\eta} \lvert h(y)-h(x)\rvert K_\varepsilon(y-x)\,dy
\;+\; 2B\int_{\lvert y-x\rvert>\eta} K_\varepsilon(y-x)\,dy ,
$$

where positivity of $K_\varepsilon$ was used to take the modulus inside. Continuity of $h$ at $x$ lets us choose $\eta$ so that the first integrand is at most $\sigma$ on its range, making the first term at most $\sigma$; the third property then makes the second term at most $\sigma$ for all small enough $\varepsilon$. As $\sigma$ was arbitrary, the claim follows. This is the argument :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, Cor. 1.7, p. 140"} give for uniform convergence when $h$ is uniformly continuous; we need it only at a single point.

**Step 3: the multiplication formula.** For $p,q\in L^1(\mathbb{R})$,

$$
\int p(y)\,\hat q(y)\,dy \;=\; \int \hat p(k)\,q(k)\,dk .
$$

Both sides are the double integral $\iint p(y)q(k)e^{-iky}\,dk\,dy$, taken in the two possible orders. The double integrand has modulus $\lvert p(y)\rvert\,\lvert q(k)\rvert$, whose integral over $\mathbb{R}^2$ is $\lVert p\rVert_1\lVert q\rVert_1<\infty$, so Tonelli's theorem licenses Fubini's theorem (:ref[]{to=measure.fubini-tonelli}) and the two orders agree. This is :cite[Folland's]{work=folland-1999 loc="Lemma 8.25, p. 251"} lemma; note that it needs nothing beyond integrability, because the Gaussian is not yet present.

**Step 4: putting them together.** Fix $x\in\mathbb{R}$ and $\varepsilon>0$, and apply step 3 with $p=f$ and $q(k)=e^{ikx}G_\varepsilon(k)$, both in $L^1$. By rule 2 of :ref[]{to=fourier.fourier-transform} (modulation, with the roles of the variables exchanged) and step 1,

$$
\hat q(y) \;=\; \int e^{ikx}e^{-\varepsilon k^2/2}e^{-iky}\,dk \;=\; \widehat{G_\varepsilon}(y-x) \;=\; 2\pi K_\varepsilon(y-x) .
$$

The multiplication formula therefore reads

$$
2\pi\int f(y)\,K_\varepsilon(y-x)\,dy \;=\; \int \hat f(k)\,e^{ikx}\,e^{-\varepsilon k^2/2}\,dk .
$$

Now let $\varepsilon\to0^{+}$ on both sides.

- On the left, $f$ is bounded and continuous (item 3 of the definition), so the claim of step 2 gives $2\pi f(x)$.
- On the right, the integrand tends pointwise to $\hat f(k)e^{ikx}$ and is dominated in modulus by $\lvert\hat f(k)\rvert$, which is integrable by part 1. Dominated convergence (:ref[]{to=measure.dominated-convergence}) gives $\int\hat f(k)e^{ikx}dk$.

Equating the two limits and dividing by $2\pi$ proves part 2. $\square$
:::

:::proof[Part 3: bijectivity and the order-four identity]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, §1.5, pp. 141–142, Cor. 1.10; folland-1999:§8.3, Cor. 8.28, p. 252"}
By part 1, $\mathcal{F}$ maps $\mathcal{S}$ into $\mathcal{S}$, and the same proof applied to the inverse integral shows that $\mathcal{F}^{-1}$ does too, since the two differ only by the sign of the exponent and the constant. Part 2 says $\mathcal{F}^{-1}\mathcal{F}=I$ on $\mathcal{S}$, which makes $\mathcal{F}$ injective. Comparing the two integrals gives $\mathcal{F}^{-1}[g](x)=\frac{1}{2\pi}\hat g(-x)$, that is $\mathcal{F}^{-1}=\frac{1}{2\pi}R\mathcal{F}$; since $R$ is a bijection of $\mathcal{S}$ and $\mathcal{F}$ is injective, $\mathcal{F}^{-1}$ is injective too. Now take $g\in\mathcal{S}$ and apply part 2 to $\mathcal{F}^{-1}[g]$: it gives $\mathcal{F}^{-1}\bigl[\mathcal{F}\mathcal{F}^{-1}[g]\bigr]=\mathcal{F}^{-1}[g]$, and injectivity of $\mathcal{F}^{-1}$ cancels the outer $\mathcal{F}^{-1}$, leaving $\mathcal{F}\mathcal{F}^{-1}[g]=g$. So $\mathcal{F}$ is surjective. Hence $\mathcal{F}$ is a bijection of $\mathcal{S}$ with the stated inverse.

For the order-four identity, apply $\mathcal{F}$ to $\hat f$ and compare with the inversion formula read at $-x$:

$$
\mathcal{F}^2[f](x) \;=\; \int \hat f(k)\,e^{-ikx}\,dk
\;=\; 2\pi\cdot\frac{1}{2\pi}\int\hat f(k)\,e^{ik(-x)}\,dk \;=\; 2\pi f(-x) .
$$

So $\mathcal{F}^2 = 2\pi R$, and since $R^2=I$ we get $\mathcal{F}^4 = (2\pi)^2 I$. If $\mathcal{F}f=\lambda f$ with $f\ne0$ then $\lambda^4=(2\pi)^2$, giving the four listed values. (In the symmetric convention of :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, p. 318"} the constant disappears and $\mathcal{F}^4=I$ exactly; this is one reason that convention is preferred when the transform is studied as an operator.) $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Integrability of $\hat f$ is used once, in the dominated convergence step, and it is exactly what can fail.** Take $f=\chi_{[-1,1]}$, which is in $L^1$ but not continuous and not in $\mathcal{S}$. Its transform $\hat f(k)=2\sin k/k$ decays like $1/\lvert k\rvert$ and is not integrable, so part 2 and part 1 of the weaker statement both fail to apply. The symmetric limit of the second weaker statement still works and returns $1$ on $(-1,1)$, $0$ outside, and $\tfrac12$ at $x=\pm1$. This is why :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.4, (2.4.5), p. 146"} insist that the inversion integral be read as $\lim_{R\to\infty}\int_{-R}^{R}$ and not as an absolutely convergent integral.
- **Continuity of $f$ at $x$ is used once, in the claim of step 2**, and it is the only place a property of $f$ at the single point $x$ enters. Drop it and the approximate identity returns the average of the two one-sided limits instead, because $K_\varepsilon$ is even and so splits its mass equally on the two sides — which is exactly the midpoint value of the second weaker statement.
- **Boundedness of $f$ is used in the same claim**, to control the part of the integral outside $\lvert y-x\rvert\le\eta$. For the $L^1$ statement, where $f$ need not be bounded, :cite[Folland]{work=folland-1999 loc="Thm 8.26, pp. 251–252"} replaces this step by convergence of $f*K_\varepsilon\to f$ in the $L^1$ norm, which is why his conclusion is only almost everywhere and names a continuous representative rather than $f$ itself.
- **The Gaussian is a convenience, not the mechanism.** Any positive, integrable, explicitly transformable approximate identity would do. :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, Thm IX.1, pp. 320–321"} prove the same theorem with no Gaussian at all, by expanding a compactly supported $f$ in a Fourier series on a large cube and observing that the series is a Riemann sum for the inversion integral; they attribute the idea to Fourier. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.4, p. 146"} use the sinc kernel $(R/\pi)\operatorname{sinc}Ry$ instead, which is not positive, and pay for it with a more delicate limit.
- **Part 1 is what makes part 2 unconditional on $\mathcal{S}$.** Without it we would have to assume $\hat f\in L^1$ separately, as the $L^1$ statement does. The chain is: rapid decrease of $f$ gives smoothness of $\hat f$, smoothness of $f$ gives rapid decrease of $\hat f$, and $\mathcal{S}$ is the class where both hold at once. This is the reason Schwartz introduced it, and the reason :ref[]{to=fourier.tempered-distributions} is built on it.
- **Uniqueness is a corollary, not an input.** The $L^1$ statement gives: if $\hat f = \hat g$ with $f,g\in L^1$ then $f=g$ almost everywhere. "Almost everywhere" cannot be improved, because changing $f$ at one point changes no integral.
:::

:::method[Inverting a Fourier transform]{provenance=original}
1. **Decide which theorem applies.** If the function at hand is rapidly decreasing, part 2 gives the inverse at every point. If only $f,\hat f\in L^1$, the inverse integral gives a continuous representative. If $\hat f$ decays like $1/\lvert k\rvert$ or slower, the integral is not absolutely convergent: read it as a symmetric limit and expect the midpoint value at any jump. If $\hat f$ does not decay at all, the inverse lives in :ref[]{to=fourier.tempered-distributions}.
2. **Look the pair up backwards.** Most inversions in practice are a table entry of :ref[]{to=fourier.fourier-transform} read right to left, combined with the operational rules: a factor $e^{-ika}$ is a translation by $a$, a factor $\hat f(k-a)$ is a modulation, and a polynomial factor $(ik)^m$ is a derivative.
3. **Use duality rather than integrating again.** By part 3, $\mathcal{F}^2=2\pi R$, so a known pair $f\leftrightarrow g$ immediately yields the pair $g\leftrightarrow 2\pi f(-\cdot)$. This converts the exponential-to-Lorentzian pair into the Lorentzian-to-exponential pair at no cost.
4. **Differentiate a known pair with respect to a parameter.** Suppose $f_a\leftrightarrow g_a$ for $a$ in an interval, and that on each compact subinterval the difference quotients $[f_{a'}(x)-f_a(x)]/(a'-a)$ are bounded in modulus by one fixed integrable function of $x$. Then dominated convergence (:ref[]{to=measure.dominated-convergence}) lets the $a$-derivative pass under the integral sign, and $\partial_a f_a\leftrightarrow\partial_a g_a$. This generates whole families from one entry, and is the cheapest route to transforms of repeated poles.
5. **Otherwise use residues.** Write $e^{ikx}$ and complete the contour through the upper half of the $k$-plane when $x>0$, through the lower half when $x<0$, since $\lvert e^{ikx}\rvert = e^{-x\operatorname{Im}k}$; see :ref[]{to=complex.residue-theorem}. Poles of $\hat f$ in the upper half-plane produce the behaviour for $x>0$, which is how causality is read off a response function.
6. **Check.** Evaluate the recovered $f$ at one convenient point against an independent computation of the same number; confirm $\int\lvert f\rvert<\infty$ if the theorem used requires it; and confirm that real $f$ came from a $\hat f$ satisfying $\hat f(-k)=\overline{\hat f(k)}$.
:::

:::example[A fourth-power Lorentzian, transformed and recovered]{provenance=original}
Take

$$
f(x) \;=\; \frac{1}{(1+x^2)^2} ,
$$

which is continuous, positive and $O(x^{-4})$, so $f\in L^1$ with $\int f = \pi/2$. It is **not** in $\mathcal{S}$: it is not rapidly decreasing. So part 2 of the main statement does not apply, and we shall need the $L^1$ version.

**Step 1: the transform, by differentiating a parameter.** Start from the table entry $\widehat{e^{-a\lvert x\rvert}}(k) = 2a/(a^2+k^2)$ for $a>0$. Neither function is in $\mathcal{S}$, so part 2 of the main statement is unavailable; but $e^{-a\lvert x\rvert}$ is continuous and in $L^1$, and its transform $2a/(a^2+k^2)$ is in $L^1$ as well, so part 1 of the weaker statement applies and gives, at every $x$,

$$
e^{-a\lvert x\rvert} \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\frac{2a}{a^2+k^2}\,e^{ikx}\,dk .
$$

Read this backwards: put $x=-k'$ and rename the integration variable $k$ as $x$, which turns $e^{ikx}$ into $e^{-ixk'}$ and the right-hand side into $\frac{1}{2\pi}$ times a transform in our own convention. The result is the dual pair

$$
\mathcal{F}\!\left[\frac{2a}{a^2+x^2}\right](k) \;=\; 2\pi e^{-a\lvert k\rvert} ,
\qquad\text{that is}\qquad
\widehat{\;\frac{1}{a^2+x^2}\;}(k) \;=\; \frac{\pi}{a}\,e^{-a\lvert k\rvert} .
$$

Both sides are differentiable in $a$ on $a>0$. Fix $0<a_0\le a\le a_1$. The map $a\mapsto(a^2+x^2)^{-1}$ is real-valued with $\lvert\partial_a(a^2+x^2)^{-1}\rvert = 2a/(a^2+x^2)^2 \le 2a_1/(a_0^2+x^2)^2$, so by the mean value theorem every difference quotient of the $x$-integrand in $a$ is bounded in modulus by the single integrable function $2a_1/(a_0^2+x^2)^2$, independent of $a$. Dominated convergence (:ref[]{to=measure.dominated-convergence}) therefore lets the $a$-derivative pass under the integral sign. Since $\partial_a (a^2+x^2)^{-1} = -2a(a^2+x^2)^{-2}$,

$$
\mathcal{F}\!\left[\frac{-2a}{(a^2+x^2)^2}\right](k)
\;=\; \frac{\partial}{\partial a}\left[\frac{\pi}{a}e^{-a\lvert k\rvert}\right]
\;=\; -\frac{\pi}{a^2}e^{-a\lvert k\rvert} \;-\; \frac{\pi\lvert k\rvert}{a}e^{-a\lvert k\rvert} .
$$

Setting $a=1$ and dividing by $-2$,

$$
\boxed{\;\hat f(k) \;=\; \frac{\pi}{2}\,\bigl(1+\lvert k\rvert\bigr)\,e^{-\lvert k\rvert}.}
$$

Sanity checks: $\hat f(0)=\pi/2 = \int f$, correct; $\hat f$ is real and even, as it must be for real even $f$; and $\hat f$ has a kink at $k=0$, matching the merely algebraic decay of $f$. Numerically the closed form gives $\hat f(2.3) = 0.5197045373799962$, and oscillatory quadrature of $\int f(x)e^{-2.3ix}dx$ returns the same digits (the integrand must be integrated period by period; a naive adaptive rule loses accuracy in the seventh digit here).

**Step 2: the inversion theorem applies.** $\hat f$ decays exponentially, so $\hat f\in L^1$; and $f\in L^1$. Part 1 of the weaker statement therefore applies, and since $f$ is already continuous, its continuous representative is itself: the inversion formula must return $f(x)$ at every $x$.

**Step 3: carry out the inversion by hand.** Because $\hat f$ is even, $e^{ikx}$ may be replaced by $\cos kx$ and the range halved:

$$
\frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)e^{ikx}dk
\;=\; \frac{1}{2\pi}\cdot 2\int_{0}^{\infty}\frac{\pi}{2}(1+k)e^{-k}\cos kx\,dk
\;=\; \frac{1}{2}\int_{0}^{\infty}(1+k)\,e^{-k}\cos kx\,dk .
$$

The two elementary integrals are, taking real parts of $\int_0^\infty e^{-(1-ix)k}dk = (1-ix)^{-1}$ and $\int_0^\infty k\,e^{-(1-ix)k}dk = (1-ix)^{-2}$,

$$
\int_{0}^{\infty}e^{-k}\cos kx\,dk = \operatorname{Re}\frac{1}{1-ix} = \frac{1}{1+x^2} ,
\qquad
\int_{0}^{\infty}k\,e^{-k}\cos kx\,dk = \operatorname{Re}\frac{(1+ix)^2}{(1+x^2)^2} = \frac{1-x^2}{(1+x^2)^2} .
$$

Adding them, the $x^2$ terms cancel:

$$
\frac{1}{2}\left[\frac{1}{1+x^2}+\frac{1-x^2}{(1+x^2)^2}\right]
= \frac{1}{2}\cdot\frac{(1+x^2)+(1-x^2)}{(1+x^2)^2}
= \frac{1}{(1+x^2)^2} \;=\; f(x) ,
$$

as the theorem promised.

**Step 4: a number.** At $x=2$ the inversion integral must equal $f(2)=1/25=0.04$ exactly. Numerical evaluation of $\frac{1}{2\pi}\int_{-\infty}^{\infty}\frac{\pi}{2}(1+\lvert k\rvert)e^{-\lvert k\rvert}e^{2ik}\,dk$ returns $0.0400000000$ with zero imaginary part, to the precision of the quadrature.

**What the example shows.** The Schwartz-class theorem would not have covered this $f$, but the $L^1$ version does, and the price was checking two integrability conditions rather than one. Had we instead taken $f=\chi_{[-1,1]}$, whose transform decays only like $1/\lvert k\rvert$, neither version would apply and only the symmetric-limit statement would be available.
:::

:::application{provenance=original}
**The transform method for differential equations.** Inversion is what makes the scheme of :ref[]{to=fourier.fourier-transform} a method rather than a one-way map: transform the equation, solve the resulting algebraic problem for $\hat u(k)$, invert. For the heat equation $u_t=\kappa u_{xx}$ on the line with $u(x,0)=\phi(x)$, the transformed equation is $\hat u_t = -\kappa k^2\hat u$, so $\hat u(k,t)=\hat\phi(k)e^{-\kappa k^2 t}$; inverting the Gaussian factor by step 1 of the proof above gives the heat kernel $(4\pi\kappa t)^{-1/2}e^{-x^2/4\kappa t}$ and, with :ref[]{to=fourier.convolution-theorem}, the solution as its convolution with $\phi$. See :ref[]{to=pde.heat-kernel}. Note how the hypothesis is met for free: $e^{-\kappa k^2t}$ makes $\hat u$ rapidly decreasing for every $t>0$ however rough $\phi$ was, which is the Fourier-side statement that the heat equation smooths instantly.

**Completeness of the plane waves.** Read as an identity between operators, inversion says $\frac{1}{2\pi}\int e^{ik(x-y)}dk = \delta(x-y)$: the plane waves $e^{ikx}$ form a complete set, as the discrete exponentials do for :ref[]{to=fourier.fourier-series}. :cite[Hassani]{work=hassani-2013 loc="§9.2, Eqs. (9.26)–(9.28), pp. 281–282"} writes this as the resolution of the identity $1=\int\lvert k\rangle\langle k\rvert\,dk$ and uses it to pass between the position and momentum representations of a quantum state; the theorem proved here is what licenses that bookkeeping for wave functions in $\mathcal{S}$, and :ref[]{to=fourier.tempered-distributions} is what licenses it for the plane waves themselves, which are not in $\mathcal{S}$.

**Reconstruction from measured spectra.** An interferometer or a diffraction experiment measures $\hat f$, not $f$: the Fourier transform spectrometer records the interferogram and the crystallographer records the structure factors. Inversion is the step that turns the measurement into the object, and the hypothesis $\hat f\in L^1$ is the reason the data must be apodised — truncating the measurement at $\lvert k\rvert\le R$ amounts to multiplying $\hat f$ by a square pulse, whose inverse transform is a sinc, so the reconstruction is convolved with a sinc and acquires the ringing that a smooth apodisation window is designed to suppress.

**Why the order-four identity matters.** $\mathcal{F}^2=2\pi R$ says that transforming twice returns the original function reflected. In optics this is the statement that two successive Fourier lenses produce an inverted image; in quantum mechanics it is the statement that the transform generates a quarter-turn in the position-momentum phase plane, whose eigenfunctions are the Hermite functions $h_n(x)=H_n(x)e^{-x^2/2}$, with eigenvalues $(-i)^{n}\sqrt{2\pi}$ in the convention used here of :ref[]{to=spec.hermite-polynomials} — the stationary states of the harmonic oscillator, which are therefore exactly the functions that look the same in position and in momentum space.
:::
