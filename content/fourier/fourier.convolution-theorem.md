---
id: fourier.convolution-theorem
title: The convolution theorem
kind: theorem
level: core
summary: Defines the convolution and the cross-correlation of two functions on the line, proves that the transform turns convolution into pointwise multiplication and correlation into the product of one transform with the conjugate of the other, and shows how the two results reduce a linear translation-invariant system, a deconvolution and a power spectrum to algebra in the transform variable.
prereqs: [fourier.fourier-transform, fourier.fourier-inversion, measure.dominated-convergence, measure.fubini-tonelli]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§13.1.7, pp. 446–449: the resolution function and the probabilistic derivation of the convolution integral (13.37), the statement that convolution is commutative, associative and distributive, the effect of convolving with a sum of delta functions, the convolution theorem (13.38) with its derivation by the substitution $u=z-x$, the converse (13.39) for the transform of a product, and the deconvolution recipe $\\hat f = \\hat h/(\\sqrt{2\\pi}\\hat g)$ with the warning that it is imprecise in practice; §13.1.8, pp. 449–451: the cross-correlation (13.40), the relation (13.41) $[f\\otimes g](z) = [g\\otimes f]^*(-z)$, the Wiener-Kinchin theorem (13.42) and its proof, the auto-correlation (13.43) and the energy spectrum reading"
    pages: "446-451"
    role: the derivation of convolution from a measurement with finite resolution, the list of algebraic properties, the convolution theorem and its converse, the deconvolution procedure and its practical limitations, and the cross-correlation and Wiener-Kinchin theorem with the interpretation of the autocorrelation transform as an energy spectrum
  - work: arfken-2013
    loc: "§20.4, pp. 985–989: the definition (20.68) of the convolution with the $1/\\sqrt{2\\pi}$ prefactor and its three-dimensional form (20.69), the name Faltung and the folding picture of Fig. 20.7, the four-line derivation (20.70) of $(f*g)^T = F G$ by splitting $e^{itx}$ and substituting $z=x-y$, the resulting evaluation formula (20.71) and its three-dimensional version (20.72), and Example 20.4.1 computing the potential of a charge distribution as a convolution with $1/r$"
    pages: "985-989"
    role: the derivation of the convolution theorem by splitting the exponential, which is the route followed here; the reading of the theorem as a device for evaluating integrals of convolution type; the electrostatic application
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §1.6, Prop. 1.11 and its proof, pp. 142–143: that $f*g\\in\\mathcal{S}$ when $f,g\\in\\mathcal{S}$, with the estimate $\\sup_x\\lvert x\\rvert^\\ell\\lvert(f*g)(x)\\rvert \\le A_\\ell\\int\\lvert f(y)\\rvert(1+\\lvert y\\rvert)^\\ell dy$ and the identity $(d/dx)^k(f*g) = f*(d/dx)^k g$, that $f*g = g*f$ by the change of variables $x-y=u$, and that $\\widehat{f*g} = \\hat f\\hat g$ by the change of order of integration; §1.7, p. 144: the extension to functions of moderate decrease"
    pages: "142-144"
    role: the statement that the Schwartz class is closed under convolution and the proof that derivatives pass onto either factor; the proof of commutativity as a composition of a reflection and a translation; the extension of the theorem to functions of moderate decrease
  - work: reed-simon-1980
    loc: "§IX.1, pp. 323–324: the definition of the convolution on $\\mathcal{S}(\\mathbb{R}^n)$, Theorem IX.3 giving (a) continuity of $g\\mapsto f*g$ on $\\mathcal{S}$, (b) $\\widehat{fg} = (2\\pi)^{-n/2}\\hat f * \\hat g$ and $\\widehat{f*g} = (2\\pi)^{n/2}\\hat f\\hat g$, and (c) commutativity and associativity, with the remark that (c) follows trivially from (b), and the observation that convolution is the composition of a transform, a multiplication and an inverse transform"
    pages: "323-324"
    role: the statement of both the convolution theorem and its dual as a single theorem in the symmetric convention; the derivation of commutativity and associativity from the transform identity rather than directly; the reading of convolution as conjugation of multiplication by the Fourier transform
  - work: folland-1999
    loc: "§8.2, pp. 239–241: the definition $f*g(x)=\\int f(x-y)g(y)dy$ wherever the integral exists, Proposition 8.6 giving commutativity by the substitution $z=x-y$, associativity from commutativity and Fubini, commutation with translations, and the support inclusion $\\operatorname{supp}(f*g)\\subset\\overline{\\operatorname{supp}f+\\operatorname{supp}g}$, and Young's inequality 8.7 giving $\\lVert f*g\\rVert_p\\le\\lVert f\\rVert_1\\lVert g\\rVert_p$ with almost-everywhere existence; §8.3, Theorem 8.22(c) and its proof, pp. 249–250: $(f*g)^\\wedge = \\hat f\\hat g$ for $f,g\\in L^1(\\mathbb{R}^n)$, proved by Fubini's theorem after writing the exponential as $e^{-2\\pi i\\xi\\cdot(x-y)}e^{-2\\pi i\\xi\\cdot y}$"
    pages: "239-241, 249-250"
    role: the algebraic properties of convolution with their hypotheses, the support rule used as a check in the method, Young's inequality in the case $p=1$, and the convolution theorem under the weakest hypothesis used here, $f$ and $g$ merely integrable, with Fubini named as the step that needs justification
  - work: stakgold-holst-2011
    loc: "§6.2, p. 367: the use of the convolution theorem to invert a transformed integral equation, giving the solution (6.2.31) as an integral of the resolvent kernel against the data; §7.3, Exercise 7.3.1(b), (7.3.49), p. 453: the solution of the Dirichlet problem in a strip written as a convolution of the boundary data with the inverse transform of $\\sinh\\omega y/\\sinh\\omega b$"
    pages: "367, 453"
    role: two worked uses of the theorem as the final step of a transform solution — once for an integral equation and once for a boundary value problem — in which the inverse transform of a product is read off as a convolution
---

:::definition[Convolution and correlation]{provenance=adapted src="rhb-2006:§13.1.7, Eq. (13.37), p. 447 and §13.1.8, Eqs. (13.40) and (13.43), pp. 449–450; arfken-2013:§20.4, Eq. (20.68), p. 986; stein-shakarchi-2003:Ch. 5, §1.4, Eq. (7), p. 139"}
For $f,g:\mathbb{R}\to\mathbb{C}$ the **convolution** is

$$
(f*g)(z) \;=\; \int_{-\infty}^{\infty} f(x)\,g(z-x)\,dx ,
$$

whenever the integral converges, and the **cross-correlation** is

$$
(f\star g)(z) \;=\; \int_{-\infty}^{\infty} \overline{f(x)}\,g(x+z)\,dx .
$$

The special case $g=f$ gives the **autocorrelation** $a(z) = (f\star f)(z) = \int\overline{f(x)}f(x+z)\,dx$.

The two integrals look alike and mean different things. In a convolution the two functions run in opposite directions, so that $f*g$ at $z$ collects the contributions of $f$ at $x$ spread by $g$ through the displacement $z-x$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, Fig. 20.7, p. 986"} call this *Faltung*, folding, because $g(z-x)$ is the graph of $g$ reflected and then slid. In a correlation both run the same way, and $f\star g$ at $z$ measures how much $f$ and $g$ resemble each other when one is displaced by $z$; :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.8, p. 449"} stress that despite the formal similarity the two are used for entirely different purposes.

**Where the convolution comes from.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.7, pp. 446–447"} derive it from measurement. Let $f(x)\,dx$ be the probability that the true value lies in $dx$, and let the instrument have **resolution function** $g$, meaning that a true value $x$ is recorded somewhere in $[z,z+dz]$ with probability $g(z-x)\,dz$. The joint probability of the two events is $f(x)g(z-x)\,dx\,dz$, and summing over all $x$ that could produce a reading near $z$ gives the observed distribution $h = f*g$. Two consequences are immediate from the formula: a perfect instrument, $g=\delta$, gives $h=f$; and convolving with a sum of delta functions leaves a copy of $g$ at each spike.

Our convention throughout is that of :ref[]{to=fourier.fourier-transform}, $\hat f(k)=\int f(x)e^{-ikx}dx$, in which the convolution carries no prefactor. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, Eq. (20.68), p. 986"} and :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, p. 323"} work in the symmetric convention and must therefore insert $1/\sqrt{2\pi}$ somewhere: Arfken puts it in the definition of $f*g$, Reed and Simon leave the definition bare and pay $(2\pi)^{n/2}$ in the theorem. The three choices describe the same mathematics.
:::

:::statement[Algebra of convolution]{provenance=adapted src="rhb-2006:§13.1.7, p. 447; stein-shakarchi-2003:Ch. 5, Prop. 1.11(i)–(ii) and its proof, pp. 142–143; reed-simon-1980:§IX.1, Thm IX.3(a) and (c), pp. 323–324; folland-1999:§8.2, Prop. 8.6 and Young's inequality 8.7, pp. 239–241"}
Let $f,g,h\in L^1(\mathbb{R})$ and $\alpha,\beta\in\mathbb{C}$.

1. **It is defined, and it does not leave $L^1$.** $(f*g)(z)$ exists for almost every $z$, and
   $$
   \lVert f*g\rVert_1 \;\le\; \lVert f\rVert_1\,\lVert g\rVert_1 .
   $$
   This is the case $p=1$ of :cite[Young's inequality]{work=folland-1999 loc="Prop. 8.7, p. 240"}, which gives $\lVert f*g\rVert_p \le \lVert f\rVert_1\lVert g\rVert_p$ for every $p\in[1,\infty]$.
2. **It is a commutative, associative, distributive product.** $f*g = g*f$; $(f*g)*h = f*(g*h)$; $f*(\alpha g+\beta h) = \alpha(f*g)+\beta(f*h)$. It commutes with translations, and :cite[Folland]{work=folland-1999 loc="Prop. 8.6(d), p. 240"} adds that $\operatorname{supp}(f*g)$ is contained in the closure of $\{x+y: x\in\operatorname{supp}f,\;y\in\operatorname{supp}g\}$. There is no identity element in $L^1$: the identity would have to be $\delta$, which is not a function (:ref[]{to=fourier.distributions}).
3. **Smoothing.** $f*g$ is at least as smooth as the smoother factor: if $g$ is $m$ times differentiable with $g,\dots,g^{(m)}$ bounded, then $f*g$ is $m$ times differentiable and $(f*g)^{(m)} = f*g^{(m)}$. In particular, if $f,g\in\mathcal{S}(\mathbb{R})$ then $f*g\in\mathcal{S}(\mathbb{R})$.
4. **Correlation in terms of convolution.** With $\tilde f(x) = \overline{f(-x)}$ one has $f\star g = \tilde f * g$. Correlation is **not** commutative; instead
   $$
   (f\star g)(z) \;=\; \overline{(g\star f)(-z)} .
   $$
:::

:::statement[The convolution theorem]{provenance=adapted src="rhb-2006:§13.1.7, Eqs. (13.38)–(13.39), p. 448 and §13.1.8, Eq. (13.42), p. 450; folland-1999:Thm 8.22(c), p. 249; stein-shakarchi-2003:Ch. 5, Prop. 1.11(iii), p. 142; reed-simon-1980:§IX.1, Thm IX.3(b), p. 323; arfken-2013:§20.4, Eq. (20.70), p. 986"}
Let $f,g\in L^1(\mathbb{R})$ and write $\hat f(k)=\int f(x)e^{-ikx}dx$.

1. **Convolution becomes multiplication.**
   $$
   \widehat{f*g}(k) \;=\; \hat f(k)\,\hat g(k) \qquad\text{for every }k\in\mathbb{R}.
   $$
2. **Correlation becomes a conjugated product (Wiener-Kinchin).**
   $$
   \widehat{f\star g}(k) \;=\; \overline{\hat f(k)}\;\hat g(k) ,
   \qquad\text{and in particular}\qquad
   \widehat{f\star f}(k) \;=\; \bigl\lvert\hat f(k)\bigr\rvert^{2} .
   $$
   The transform of the autocorrelation is the **energy spectrum** $\lvert\hat f\rvert^2$, which is real and non-negative whatever $f$ is.
3. **The dual statement: multiplication becomes convolution.** If moreover $f,g\in\mathcal{S}(\mathbb{R})$, then
   $$
   \widehat{fg}(k) \;=\; \frac{1}{2\pi}\,\bigl(\hat f * \hat g\bigr)(k) .
   $$

The lone factor $\frac{1}{2\pi}$ in part 3 is the same $2\pi$ that sits on the inverse transform in our convention; parts 1 and 2 are free of constants. In the symmetric convention the constants redistribute, and :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, Thm IX.3(b), p. 323"} state the pair as $\widehat{f*g} = (2\pi)^{n/2}\hat f\hat g$ and $\widehat{fg} = (2\pi)^{-n/2}\hat f*\hat g$, while :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.7, Eqs. (13.38)–(13.39), p. 448"} write $\sqrt{2\pi}\,\hat f\hat g$ and $(2\pi)^{-1/2}\hat f*\hat g$ in one dimension. Setting $z=0$ in part 2 and inverting produces the multiplication theorem and Parseval's relation, which are the subject of :ref[]{to=fourier.plancherel}.
:::

:::idea{provenance=original}
Everything rests on one algebraic accident: $e^{-ikz}$ factorises along the same split as the convolution. Writing $z = (z-x)+x$ gives $e^{-ikz} = e^{-ik(z-x)}e^{-ikx}$, so the double integral $\iint f(x)g(z-x)e^{-ikz}\,dx\,dz$ separates into a product of two single integrals the moment the exponential is split that way and $u=z-x$ is substituted. This is the entire proof; the only real work is checking that the double integral converges absolutely, so that the order of integration may be exchanged.

Correlation works the same way with one sign changed: $z = (x+z)-x$ gives $e^{-ikz} = e^{-ik(x+z)}e^{ikx}$, and the factor $e^{+ikx}$ against $\overline{f(x)}$ assembles into $\overline{\hat f(k)}$ rather than $\hat f(k)$. The conjugate in the Wiener-Kinchin theorem is therefore not decoration: it records that correlation slides the two functions the same way while convolution slides them opposite ways.
:::

:::proof[Algebra of convolution]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Prop. 1.11(i)–(ii), pp. 142–143; reed-simon-1980:§IX.1, Thm IX.3, pp. 323–324; folland-1999:§8.2, Prop. 8.6 and 8.7, pp. 239–241"}
**Part 1.** The function $(x,z)\mapsto f(x)g(z-x)$ is measurable, and by Tonelli's theorem (:ref[]{to=measure.fubini-tonelli}) applied to its modulus,

$$
\int\!\!\int \lvert f(x)\rvert\,\lvert g(z-x)\rvert\,dx\,dz
\;=\; \int \lvert f(x)\rvert\left(\int\lvert g(z-x)\rvert\,dz\right)dx
\;=\; \lVert f\rVert_1\,\lVert g\rVert_1 ,
$$

the inner integral being $\lVert g\rVert_1$ for each $x$ by translation invariance. For fixed $z$, $(f*g)(z)$ is an integral in $x$, so the slice needed is the one in that variable, and it is the other order of the same Tonelli computation: $\int\bigl(\int\lvert f(x)\rvert\lvert g(z-x)\rvert\,dx\bigr)dz$ is the same finite number $\lVert f\rVert_1\lVert g\rVert_1$, so the inner integral — which is exactly the integral defining $(f*g)(z)$, with the modulus taken — is finite for almost every $z$. Hence $(f*g)(z)$ converges absolutely for almost every $z$, and the displayed computation bounds $\int\lvert f*g\rvert$ by $\lVert f\rVert_1\lVert g\rVert_1$.

**Part 2.** For commutativity, which is :cite[Folland's]{work=folland-1999 loc="Prop. 8.6(a), p. 240"} Proposition 8.6(a), substitute $u = z-x$, so $x = z-u$ and $dx = -du$ with the limits reversed:

$$
(f*g)(z) = \int f(x)g(z-x)\,dx = \int f(z-u)g(u)\,du = (g*f)(z) .
$$

:cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, p. 143"} observe that this substitution is a reflection followed by a translation, both of which preserve the integral. Associativity and distributivity follow the same way, by Fubini and a substitution respectively; :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.1, Thm IX.3(c), p. 324"} instead deduce both from the transform identity of the next proof together with injectivity of the transform, which is shorter but uses more.

For the absence of an identity: if $e\in L^1$ satisfied $e*f=f$ for all $f\in L^1$, then transforming with the theorem below gives $\hat e(k)\hat f(k)=\hat f(k)$ for all $f$ and all $k$. Fix $k$ and take $f(x)=e^{-x^2}$, whose transform $\sqrt{\pi}\,e^{-k^2/4}$ is nowhere zero; dividing by it gives $\hat e(k)=1$, and since $k$ was arbitrary, $\hat e\equiv1$. But the Riemann-Lebesgue lemma of :ref[]{to=fourier.fourier-transform} says $\hat e(k)\to0$ as $\lvert k\rvert\to\infty$, a contradiction.

**Part 3.** Take $m=1$ first, so $g$ is differentiable with $g$ and $g'$ bounded. The $z$-dependence of $(f*g)(z)=\int f(x)g(z-x)\,dx$ sits entirely in $g$, so for $t\ne0$

$$
\frac{(f*g)(z+t)-(f*g)(z)}{t} \;=\; \int f(x)\,\frac{g(z+t-x)-g(z-x)}{t}\,dx .
$$

For each fixed $x$ the quotient inside tends to $g'(z-x)$ as $t\to0$, by definition of the derivative. For the majorant, apply the mean value theorem to the real and the imaginary part of $g$ separately — it is false for a complex-valued function taken whole — which gives $\lvert\operatorname{Re}g(b)-\operatorname{Re}g(a)\rvert\le\lvert b-a\rvert\sup\lvert g'\rvert$ and the same for $\operatorname{Im}$, hence $\lvert g(b)-g(a)\rvert\le\sqrt2\,\lvert b-a\rvert\sup\lvert g'\rvert$. The integrand is therefore dominated in modulus by $\sqrt2\,\lvert f(x)\rvert\sup\lvert g'\rvert$, which is integrable because $f\in L^1$, and which does not depend on $t$. Dominated convergence (:ref[]{to=measure.dominated-convergence}) applied along an arbitrary sequence $t_n\to0$ gives that the limit exists and equals $\int f(x)g'(z-x)\,dx$; as the sequence was arbitrary, $(f*g)'(z)$ exists and equals $(f*g')(z)$. Iterating gives the $m$th derivative. Since convolution is commutative, the derivative may be placed on whichever factor is smoother — which is the precise sense in which convolution smooths. For the Schwartz statement, :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, Prop. 1.11(i), p. 142"} combine this with the bound $\sup_x\lvert x\rvert^{\ell}\lvert g(x-y)\rvert \le A_\ell(1+\lvert y\rvert)^{\ell}$, which gives $\sup_x\lvert x^{\ell}(f*g)(x)\rvert \le A_\ell\int\lvert f(y)\rvert(1+\lvert y\rvert)^{\ell}dy<\infty$; rapid decrease of $f$ makes every such integral finite, so $f*g$ and all its derivatives decay faster than any power.

**Part 4.** Substituting $u = -x$ in the definition of $\tilde f * g$,

$$
(\tilde f*g)(z) = \int \overline{f(-x)}\,g(z-x)\,dx = \int\overline{f(u)}\,g(z+u)\,du = (f\star g)(z) .
$$

For the exchange rule, conjugate $(g\star f)(-z) = \int\overline{g(x)}f(x-z)\,dx$ and substitute $u = x-z$:

$$
\overline{(g\star f)(-z)} = \int g(x)\,\overline{f(x-z)}\,dx = \int g(u+z)\,\overline{f(u)}\,du = (f\star g)(z) ,
$$

which is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§13.1.8, Eq. (13.41), p. 449"} relation (13.41). $\square$
:::

:::proof[The convolution theorem]{provenance=adapted src="arfken-2013:§20.4, the derivation of (20.70), pp. 986–987; folland-1999:Thm 8.22(c), p. 250; rhb-2006:§13.1.7, the derivation of (13.38), p. 448 and §13.1.8, the derivation of (13.42), p. 450"}
**Part 1.** By part 1 of the previous statement the double integrand $f(x)g(z-x)e^{-ikz}$ has modulus $\lvert f(x)\rvert\lvert g(z-x)\rvert$, whose integral over $\mathbb{R}^2$ is $\lVert f\rVert_1\lVert g\rVert_1<\infty$. Fubini's theorem (:ref[]{to=measure.fubini-tonelli}) therefore permits the order of integration to be exchanged, and this is the only analytic step:

$$
\widehat{f*g}(k) \;=\; \int\!\left(\int f(x)\,g(z-x)\,dx\right)e^{-ikz}\,dz
\;=\; \int f(x)\left(\int g(z-x)\,e^{-ikz}\,dz\right)dx .
$$

In the inner integral substitute $u = z-x$, so $dz = du$ and $e^{-ikz} = e^{-iku}e^{-ikx}$; the factor $e^{-ikx}$ does not involve $u$ and comes out:

$$
\int g(z-x)e^{-ikz}\,dz \;=\; e^{-ikx}\int g(u)e^{-iku}\,du \;=\; e^{-ikx}\hat g(k) .
$$

Since $\hat g(k)$ no longer depends on $x$ it leaves the outer integral as well, and what remains is $\hat g(k)\int f(x)e^{-ikx}dx = \hat f(k)\hat g(k)$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, p. 987"} describe the same manoeuvre as splitting the exponential into two factors and then changing variable so that each bracket contains only one of them.

**Part 2.** Identical, with the two changes forced by the definition of $\star$. The double integrand is now $\overline{f(x)}g(x+z)e^{-ikz}$, of modulus $\lvert f(x)\rvert\lvert g(x+z)\rvert$, again with double integral $\lVert f\rVert_1\lVert g\rVert_1$, so Fubini again applies. Substituting $u = x+z$ in the inner integral gives $e^{-ikz} = e^{-iku}e^{+ikx}$, and

$$
\widehat{f\star g}(k) \;=\; \int\overline{f(x)}\,e^{ikx}\,dx\;\int g(u)\,e^{-iku}\,du
\;=\; \overline{\hat f(k)}\;\hat g(k) ,
$$

the first factor being $\overline{\hat f(k)}$ because conjugating $\hat f(k)=\int f(x)e^{-ikx}dx$ turns the exponent's sign around. Setting $g=f$ gives $\lvert\hat f(k)\rvert^2$. This is the calculation :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.8, Eq. (13.42), p. 450"} present as the Wiener-Kinchin theorem.

**Part 3.** Let $f,g\in\mathcal{S}$. By :ref[]{to=fourier.fourier-inversion}, $\hat f,\hat g\in\mathcal{S}\subset L^1$, so part 1 may be applied to the pair $\hat f,\hat g$:

$$
\widehat{\;\hat f*\hat g\;}(x) \;=\; \hat{\hat f}(x)\,\hat{\hat g}(x) \;=\; \bigl(2\pi f(-x)\bigr)\bigl(2\pi g(-x)\bigr) \;=\; (2\pi)^2\,(fg)(-x) ,
$$

using $\mathcal{F}^2 = 2\pi R$ from part 3 of the inversion theorem. Applying $\mathcal{F}$ once more to both sides and using $\mathcal{F}^2 = 2\pi R$ again on the left,

$$
2\pi\,\bigl(\hat f*\hat g\bigr)(-k) \;=\; (2\pi)^2\,\mathcal{F}\bigl[(fg)(-\,\cdot\,)\bigr](k) \;=\; (2\pi)^2\,\widehat{fg}(-k) ,
$$

the last step by the reflection rule of :ref[]{to=fourier.fourier-transform}. Replacing $-k$ by $k$ and dividing by $(2\pi)^2$ gives part 3. (A direct proof is also possible, but it needs the inversion theorem anyway to make sense of $\hat f * \hat g$, so nothing is saved.) $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Integrability of both factors is used exactly once, to license Fubini.** It is not a technicality, and what it buys is existence of the convolution at *almost every* point, never at every point. For $f=g=\lvert x\rvert^{-1/2}\chi_{[-1,1]}$, which is in $L^1$, the two singularities of $\lvert x\rvert^{-1/2}\lvert z-x\rvert^{-1/2}$ sit at $x=0$ and $x=z$ and are separately integrable, so $(f*g)(z)$ converges for every $z\ne0$ and diverges only at $z=0$ — a single point, exactly as part 1 of the algebra statement allows. For $f=g=\lvert x\rvert^{-1}\chi_{[-1,1]}$, which is not in $L^1$, the two singularities are no longer integrable and $(f*g)(z)$ diverges for every $z$ with $\lvert z\rvert\le1$, a set of positive measure. That is the real contrast: without finiteness of the double integral the exceptional set stops being null, and then part 1 has nothing to say.
- **Part 1 needs nothing about smoothness or decay beyond $L^1$**, which is why it is the version :cite[Folland]{work=folland-1999 loc="Thm 8.22(c), p. 249"} states. Part 3 is genuinely stronger: a product of two $L^1$ functions need not be in $L^1$ (take $f=g=\lvert x\rvert^{-1/2}\chi_{[-1,1]}$ again), so $\widehat{fg}$ may not exist, and the right-hand side $\hat f*\hat g$ may not either, since $\hat f$ and $\hat g$ are merely bounded and vanishing at infinity. Restricting to $\mathcal{S}$ removes both problems at once. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1.7, p. 144"} note that the pair of results extends to functions of moderate decrease, whose convolution is again of moderate decrease.
- **The theorem is an identity of functions, not of values at a point.** Both sides of part 1 are continuous in $k$, so the identity does hold everywhere; but $f*g$ itself is only defined almost everywhere when $f,g$ are merely integrable, and changing it on a null set changes neither side.
- **The conjugate in part 2 cannot be dropped.** If it is, the result is a statement about $\int f(x)g(x+z)dx$, which equals $(\tilde f_{\mathrm{r}}*g)(z)$ with $\tilde f_{\mathrm{r}}(x)=f(-x)$ and therefore has transform $\hat f(-k)\hat g(k)$. For real $f$ the two agree, since $\hat f(-k)=\overline{\hat f(k)}$, which is why the distinction is invisible in most of the engineering literature.
- **Non-commutativity of correlation is not an oversight.** Part 4 of the algebra statement says that exchanging the arguments reflects *and* conjugates. The autocorrelation is therefore automatically Hermitian, $a(-z)=\overline{a(z)}$, which is exactly the condition for $\hat a$ to be real — consistent with $\hat a = \lvert\hat f\rvert^2$.
- **Deconvolution is not the inverse operation in any stable sense.** Part 1 says $\hat f = \hat h/\hat g$, but $\hat g(k)\to0$, so the division amplifies whatever noise sits in $\hat h$ at large $\lvert k\rvert$ without bound. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.7, p. 449"} state the recipe and immediately warn that experimental and statistical uncertainty, and data over a limited range, make it imprecise in practice. This is the standard example of an ill-posed inverse problem.
:::

:::method[Solving a translation-invariant problem by convolution]{provenance=adapted src="rhb-2006:§13.1.7, the deconvolution recipe, p. 449; arfken-2013:§20.4, Eq. (20.71), p. 987; stakgold-holst-2011:§6.2, (6.2.30)–(6.2.31), p. 367 and §7.3, Exercise 7.3.1(b), (7.3.49), p. 453"}
1. **Recognise the convolution.** Any integral of the form $\int K(z-x)u(x)\,dx$ over the whole line is a convolution. If the kernel depends on $z$ and $x$ separately and not only through $z-x$, the problem is not translation-invariant and the method does not apply.
2. **Transform.** Part 1 turns the equation into an algebraic one in $k$. An integral equation $u - \lambda K*u = f$ becomes $\hat u(1-\lambda\hat K) = \hat f$; a differential equation becomes a polynomial relation by the derivative rule; and a boundary value problem on a strip or half-plane becomes an ordinary differential equation in the remaining variable.
3. **Solve.** Divide: $\hat u(k) = \hat f(k)/(1-\lambda\hat K(k))$, or whatever the algebra gives. Record where the denominator vanishes; those $k$ are where the method fails and are usually the spectrum of the problem.
4. **Invert, reading products as convolutions.** If the answer factorises as $\hat u = \hat G\hat f$ with $\hat G$ a recognisable transform, then $u = G*f$ without any further integration: this is how :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§6.2, (6.2.31), p. 367 and §7.3, (7.3.49), p. 453"} finish both an integral equation and a Dirichlet problem in a strip. The function $G$ is the Green's function or impulse response of the problem; see :ref[]{to=green.causal-green-functions}.
5. **If only a number is wanted, do not invert at all.** Evaluating part 1 at $k=0$ gives $\int(f*g) = \bigl(\int f\bigr)\bigl(\int g\bigr)$, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.4, Eq. (20.71), p. 987"} note more generally that the inverse transform of the product is often a better-behaved integral than the original, because both factors are then evaluated at the same point.
6. **To deconvolve, regularise.** Form $\hat f = \hat h/\hat g$ only where $\lvert\hat g(k)\rvert$ is comfortably above the noise floor, and suppress the rest — for instance by the Wiener filter $\hat f = \hat h\,\overline{\hat g}/(\lvert\hat g\rvert^2+\sigma^2)$, which reduces to plain division where the signal dominates and to zero where it does not.
7. **Check.** The area rule of step 5 is the cheapest test; a second is that the convolution of two non-negative functions is non-negative, and a third is the support rule of part 2 of the algebra statement, so the support of the answer must lie in the sum of the two supports.
:::

:::example[Two decaying pulses, convolved two ways]{provenance=original}
Let

$$
f(t) = H(t)\,e^{-t} ,
\qquad
g(t) = H(t)\,e^{-3t} ,
$$

with $H$ the Heaviside step (:ref[]{to=fourier.heaviside-step}). Both are in $L^1(\mathbb{R})$, with $\lVert f\rVert_1 = 1$ and $\lVert g\rVert_1 = \tfrac13$. Physically, $f$ is a pulse of unit area with relaxation time $1$ driving a system whose impulse response $g$ relaxes three times faster.

**Route A: the integral directly.** Both factors vanish for negative argument, so in $(f*g)(t)=\int f(s)g(t-s)\,ds$ the integrand is non-zero only for $0\le s\le t$, and the convolution vanishes for $t<0$. For $t\ge0$,

$$
(f*g)(t) = \int_{0}^{t} e^{-s}\,e^{-3(t-s)}\,ds
= e^{-3t}\int_{0}^{t} e^{2s}\,ds
= e^{-3t}\,\frac{e^{2t}-1}{2}
= \frac{e^{-t}-e^{-3t}}{2} .
$$

**Route B: through the transform.** From the table of :ref[]{to=fourier.fourier-transform}, $\hat f(k) = 1/(1+ik)$ and $\hat g(k) = 1/(3+ik)$, so by part 1 of the theorem

$$
\widehat{f*g}(k) = \frac{1}{(1+ik)(3+ik)}
= \frac{1}{2}\left[\frac{1}{1+ik}-\frac{1}{3+ik}\right] ,
$$

splitting by partial fractions in the variable $ik$ (:ref[]{to=fourier.partial-fractions}). Each term is a tabulated transform, so reading backwards gives $(f*g)(t) = \tfrac12\bigl(e^{-t}-e^{-3t}\bigr)H(t)$, the same answer, with no integration performed. Route B is the one that generalises: the partial-fraction step works for any product of rational transforms.

**A number.** At $t=\ln 2$, where $e^{-t}=\tfrac12$ and $e^{-3t}=\tfrac18$,

$$
(f*g)(\ln 2) = \frac{\tfrac12-\tfrac18}{2} = \frac{3}{16} = 0.1875 .
$$

Direct numerical quadrature of $\int_{0}^{\ln 2} e^{-s}e^{-3(\ln 2 - s)}\,ds$ gives $0.1875000000$, and numerical evaluation of $\widehat{f*g}$ at $k=1.3$ from the closed form returns $0.0455555517-0.1808311976\,i$, against $1/\bigl((1+1.3i)(3+1.3i)\bigr) = 0.0455555517-0.1808311976\,i$.

**The checks of the method.** The area rule gives $\int (f*g) = 1\cdot\tfrac13 = \tfrac13$, and indeed $\int_0^\infty\tfrac12(e^{-t}-e^{-3t})dt = \tfrac12(1-\tfrac13)=\tfrac13$. The support rule gives $\operatorname{supp}(f*g)\subseteq[0,\infty)+[0,\infty)=[0,\infty)$, as found. And the peak of $f*g$, at $t=\tfrac12\ln3\approx0.549$, lies to the right of the peaks of both factors at $t=0$: the convolution has delayed and broadened the pulse, which is what a resolution function does.

**An autocorrelation, for contrast.** Take instead $p=\chi_{[-a,a]}$. Its autocorrelation is the overlap of the pulse with its own translate, $a_p(z) = (2a-\lvert z\rvert)_{+}$, a triangle of height $2a$ and half-width $2a$. Part 2 predicts $\hat a_p = \lvert\hat p\rvert^2 = 4\sin^2(ak)/k^2$, and the triangle entry of the table, applied with half-width $2a$ and height $2a$, gives $2a\cdot\frac{4\sin^2(ak)}{2a\,k^2} = \frac{4\sin^2(ak)}{k^2}$ — the same function. Notice that the autocorrelation is even and its transform is non-negative, as part 2 requires, whereas $\hat p$ itself takes both signs.
:::

:::application{provenance=original}
**Linear time-invariant systems.** A system that is linear and commutes with time translation has output $y = h*u$ for a fixed impulse response $h$, since $u=\int u(s)\delta(\cdot-s)\,ds$ and linearity plus translation invariance send $\delta(\cdot-s)$ to $h(\cdot-s)$. The theorem then says $\hat y = \hat h\hat u$: in the frequency domain the system acts by multiplication, one frequency at a time, with no mixing. $\hat h(\omega)$ is the **transfer function**, its modulus the gain and its argument the phase shift, and this is the whole content of circuit analysis by impedances, of filter design, and of the Bode plot. Causality — that $h$ vanishes for negative time — is what forces the real and imaginary parts of $\hat h$ to be related, by the Kramers-Kronig relations of :ref[]{to=complex.dispersion-relations}.

**Instrumental resolution and deconvolution.** The derivation in the definition is the general model of a measurement: every spectrometer, telescope and detector returns the true distribution convolved with its point-spread or resolution function. Two consequences follow immediately from the theorem. First, resolutions compose by convolution and therefore widths add in quadrature for Gaussians, since the product of two Gaussians in $k$ is a Gaussian. Second, information at spatial frequencies where $\hat g$ is negligible is lost and cannot be recovered by any amount of processing — the diffraction limit of an optical instrument is the statement that $\hat g$ is supported in $\lvert k\rvert\le 2\pi/\lambda$ times a numerical aperture factor.

**Power spectra of noise.** For a stationary random signal the autocorrelation $a(z)=\langle \overline{f(t)}f(t+z)\rangle$ is the natural object, and part 2 identifies its transform as the power spectral density. It gives two routes to the same quantity: transform an estimate of the autocorrelation, or square the modulus of a single transform of the data. The second is the periodogram of :ref[]{to=stats.periodogram}, and part 2 is what says the two estimate the same thing; they differ only in how the estimate is smoothed, which is why the raw periodogram is noisy and why windowing and averaging are applied to it. The same identity run backwards generates coloured noise with a prescribed spectrum: draw white noise, multiply its transform by $\sqrt{\hat a}$, and invert.

**Green's functions and potentials.** For a constant-coefficient linear differential operator $L$ on the line, $Lu=f$ transforms to $P(ik)\hat u = \hat f$ with $P$ the symbol of $L$, so $\hat u = \hat f/P(ik)$ and $u = G*f$ with $\hat G = 1/P(ik)$: the Green's function is the inverse transform of the reciprocal symbol, and the solution is the source convolved with it (:ref[]{to=green.causal-green-functions}). :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 20.4.1, (20.79)–(20.80), pp. 988–989"} run exactly this in three dimensions for electrostatics, using the $\mathbb{R}^3$ form of part 1 and the three-dimensional pair of :ref[]{to=fourier.fourier-transform-rn}: the Coulomb integral $\psi = \frac{1}{4\pi}\int\rho(r')/\lvert r-r'\rvert\,d^3r'$ is a convolution of $\rho$ with $1/r$, whose transform is $4\pi/k^2$, so $\hat\psi(k) = \hat\rho(k)/k^2$ — Poisson's equation in one line.

**Matched filtering.** To detect a known waveform $s$ buried in noise, correlate the data with $s$ rather than convolve: part 2 says the correlation has transform $\overline{\hat s}\hat d$, which weights each frequency by the amplitude the signal has there, and this is the filter that maximises the signal-to-noise ratio at the detection instant for white noise. Gravitational-wave searches and radar ranging are the same calculation.
:::
