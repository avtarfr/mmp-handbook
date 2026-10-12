---
id: fourier.tempered-distributions
title: Fourier transforms of distributions
kind: method
level: core
summary: Introduces the Schwartz space and the tempered distributions on it, defines the Fourier transform by duality and shows it is a bijection of that space obeying the usual operational rules, gives four routes for computing a transform, and derives the pairs for the delta, constants and powers, the Heaviside step and the principal value of 1/x, ending with a distributional solution of an ordinary differential equation.
prereqs: [fourier.distributions, fourier.fourier-inversion, measure.fubini-tonelli]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.4, pp. 153–161: functions of slow growth (p. 153), the test space $C^\\infty_\\downarrow(\\mathbb{R})$ of rapid decay with its null sequences and the definition of a distribution of slow growth (p. 155), the theorem that a function of slow growth generates one (pp. 155–156), the theorem that $\\varphi^\\wedge \\in C^\\infty_\\downarrow$ when $\\varphi \\in C^\\infty_\\downarrow$ (p. 156), the operational rules (2.4.26)–(2.4.29) for test functions (p. 157), the definition (2.4.30) of $f^\\wedge$ by duality and the proof that it is a distribution (p. 157), the consistency check with the $L_1$ transform and the rules (2.4.31)–(2.4.35) (p. 158), and Examples 5–8 for the transforms of $\\delta$, of $1$, of $\\delta(x-a)$ and of the Heaviside function by three routes, Eqs. (2.4.36)–(2.4.40a) (pp. 159–161); §2.1, p. 106: the principal value $\\mathrm{pf}(1/x)$ and the identity $x\\,\\mathrm{pf}(1/x) = 1$"
    pages: "106, 153-161"
    role: the whole route of this unit — the test space, the duality definition, the operational rules, and the four transform pairs
  - work: reed-simon-1980
    loc: "§V.3, pp. 133–138: the definition of the space $\\mathcal{S}(\\mathbb{R}^n)$ of functions of rapid decrease by the seminorms $\\|\\varphi\\|_{\\alpha,\\beta} = \\sup\\lvert x^\\alpha D^\\beta\\varphi\\rvert$ and Theorem V.9 that it is a Fréchet space (p. 133), the definition of $\\mathcal{S}'(\\mathbb{R}^n)$ as its dual with the continuity criterion $\\lvert T(\\varphi)\\rvert \\le C\\|\\varphi\\|_{k,m}$ (p. 134), the embeddings of $\\mathcal{S}$ and of $L^p$ (Examples 1–2, pp. 134–135), the delta (Example 3, p. 135), Example 6 proving that the Cauchy principal value $\\mathcal{P}(1/x)$ is a tempered distribution and Eq. (V.4) (pp. 136–137), the class $\\mathcal{O}_M$ of slowly increasing functions and Operation 1 for multiplication (p. 137), and Operation 2 for the weak derivative (p. 138); §IX.1, pp. 318–322: the convention $\\hat f(\\lambda) = (2\\pi)^{-n/2}\\int e^{-i\\lambda\\cdot x}f(x)\\,dx$ (p. 318), the definition $\\hat T(\\varphi) = T(\\hat\\varphi)$ on $\\mathcal{S}'$ and the verification that it extends the transform on $\\mathcal{S}$ (p. 322), and Theorem IX.2 that it is a bijection of $\\mathcal{S}'$ and the unique weakly continuous extension (p. 322)"
    pages: "133-138, 318-322"
    role: the seminorm definition of the Schwartz space and its dual, the continuity criterion, the principal value, and the bijectivity theorem
  - work: folland-1999
    loc: "§9.2, pp. 293–296: the fact that $C_c^\\infty$ is not preserved by the Fourier transform and Proposition 9.9 that $C_c^\\infty$ is dense in $\\mathcal{S}$ (p. 293), the definition of a tempered distribution as a continuous linear functional on $\\mathcal{S}$ and the identification of $\\mathcal{S}'$ with the distributions extending continuously to $\\mathcal{S}$ (p. 293), the examples of tempered and non-tempered functions including $e^{ax}$ and $e^x\\cos e^x$ (pp. 293–294), the characterisation of the multipliers preserving $\\mathcal{S}$ and $\\mathcal{S}'$ as the slowly increasing functions (p. 294), and the duality definition $\\langle\\hat F,\\varphi\\rangle = \\langle F,\\hat\\varphi\\rangle$ with the operational rules carried over from Theorem 8.22 (p. 295)"
    pages: "293-296"
    role: why the compactly supported test functions must be enlarged, the slowly increasing multipliers, and the duality definition
---

:::definition[The Schwartz space and the tempered distributions]{provenance=adapted src="reed-simon-1980:§V.3, pp. 133–134; stakgold-holst-2011:§2.4, p. 155; folland-1999:§9.2, p. 293"}
The Fourier transform cannot act on $\mathcal{D}(\mathbb{R}^n) = C_0^\infty(\mathbb{R}^n)$, because it destroys compact support: Folland notes (p. 293) that if $\varphi \in C^\infty_0$ and $\hat\varphi$ vanishes on a non-empty open set, then $\varphi = 0$. The repair is to trade compact support for rapid decay.

The **Schwartz space** $\mathcal{S} = \mathcal{S}(\mathbb{R}^n)$ is the set of infinitely differentiable $\varphi : \mathbb{R}^n\to\mathbb{C}$ for which every seminorm

$$
\|\varphi\|_{\alpha,\beta} = \sup_{x\in\mathbb{R}^n}\bigl\lvert x^\alpha D^\beta\varphi(x)\bigr\rvert
$$

is finite, $\alpha$ and $\beta$ running over all multi-indices. Equivalently, $\varphi$ and all its derivatives decay faster than every inverse power of $\lvert x\rvert$. Reed and Simon call these the functions of **rapid decrease**; Stakgold and Holst write $C^\infty_\downarrow(\mathbb{R})$ in one variable and define convergence by $\max_x\lvert x^k\varphi_m^{(l)}(x)\rvert \to 0$ for every $k$ and $l$, which is convergence in all the seminorms. Every $\varphi\in\mathcal{D}$ lies in $\mathcal{S}$, because a smooth function vanishing outside a bounded set has each $x^\alpha D^\beta\varphi$ continuous and compactly supported, hence bounded; the inclusion is strict, since $e^{-x^2}$ lies in $\mathcal{S}$ and not in $\mathcal{D}$. Conversely $\mathcal{D}$ is dense in $\mathcal{S}$ (Folland, Proposition 9.9).

The **tempered distributions** are those functionals on $\mathcal{S}$ that are linear and continuous; write $\mathcal{S}'(\mathbb{R}^n)$ for the collection of them. Continuity has a concrete form. Reed and Simon first bundle the seminorms into the directed family

$$
\|\varphi\|_{k,m} = \max_{\lvert\alpha\rvert\le k,\ \lvert\beta\rvert\le m}\|\varphi\|_{\alpha,\beta},
\qquad k,m = 0,1,2,\dots,
$$

and then record (p. 134, from their Theorem V.2) that $T\in\mathcal{S}'$ if and only if there are a constant $C$ and indices $k,m$ with

$$
\lvert\langle T,\varphi\rangle\rvert \le C\,\|\varphi\|_{k,m}
\qquad \text{for all } \varphi\in\mathcal{S} .
$$

Replacing the maximum by the sum over the same finite index set alters only the constant, so a bound by a finite sum of seminorms serves just as well, and that is how the criterion is verified below.

Because $\mathcal{D} \subset \mathcal{S}$ with continuous inclusion and $\mathcal{D}$ is dense, restricting a tempered distribution to $\mathcal{D}$ gives a distribution, and the restriction determines it. So $\mathcal{S}'$ is exactly the set of distributions of :ref[]{to=fourier.distributions} that extend continuously to $\mathcal{S}$ — a *smaller* space, since there are fewer functionals on a bigger test space. Stakgold and Holst call its elements **distributions of slow growth**.

Which ordinary functions qualify? A locally integrable $f$ with

$$
\lvert f(x)\rvert \le C\lvert x\rvert^{N} \quad\text{for } \lvert x\rvert > R
$$

for some constants is a **function of slow growth** (Stakgold and Holst, p. 153), and it is tempered: the proof below gives the required seminorm bound. So every polynomial, every bounded measurable function, every $L^p$ function (Reed and Simon, Example 2) and $\delta$ itself are tempered. On the other hand $e^{x}$ on $\mathbb{R}$ is a distribution but not a tempered one, as Folland shows on p. 294 by testing it against $e^{-x}\psi(x-j)$; rapid decay of the test function is not enough to tame exponential growth. The borderline is subtler than mere size: Folland's $e^x\cos e^x$ *is* tempered, since differentiating $\sin e^x$ produces it, and $\sin e^x$ stays between $-1$ and $1$, so one integration by parts moves the growth onto the test function, where it is harmless. Rapid oscillation can cancel large size.

Multiplication is restricted. $\varphi\mapsto a\varphi$ maps $\mathcal{S}$ to $\mathcal{S}$, and hence $aT$ makes sense for $T\in\mathcal{S}'$, precisely when $a\in C^\infty$ and $a$ together with all its derivatives grows at most polynomially (Folland, p. 294; Reed and Simon's class $\mathcal{O}_M$, p. 137). Such an $a$ is called **slowly increasing**. Every polynomial is slowly increasing; $e^{x^2}$ is not.

Two tempered distributions recur below.

- **The principal value.** $\operatorname{pv}\frac1x$ is defined on $\mathcal{S}(\mathbb{R})$ by
  $$
  \Bigl\langle \operatorname{pv}\tfrac1x, \varphi\Bigr\rangle = \lim_{\varepsilon\to0^+}\int_{\lvert x\rvert>\varepsilon}\frac{\varphi(x)}{x}\, dx
  = \int_0^\infty \frac{\varphi(x)-\varphi(-x)}{x}\, dx .
  $$
  The second form, which is Reed and Simon's Example 6, shows the limit exists: the integrand tends to $2\varphi'(0)$ as $x\to0$ and is $O(x^{-1}\lvert\varphi\rvert)$ at infinity. The function $1/x$ itself is not locally integrable, so this is the only sense in which it is a distribution. It satisfies
  $$
  x\cdot\operatorname{pv}\tfrac1x = 1
  $$
  as distributions (Stakgold and Holst, p. 106), because $x\varphi(x)/x = \varphi(x)$ leaves nothing to regularise. Stakgold and Holst write $\mathrm{pf}(1/x)$ for the same object.
- **$\delta$ and its derivatives.** $\langle\delta,\varphi\rangle = \varphi(0)$ and $\langle\delta^{(n)},\varphi\rangle = (-1)^n\varphi^{(n)}(0)$ are bounded by $\|\varphi\|_{0,0}$ and $\|\varphi\|_{0,n}$, so they are tempered.
:::

:::note[Convention]{provenance=original}
Everything below uses

$$
\hat f(k) = \mathcal{F}[f](k) = \int_{-\infty}^{\infty} f(x)\, e^{-ikx}\, dx ,
\qquad
f(x) = \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)\, e^{ikx}\, dk ,
$$

the asymmetric convention with the whole $2\pi$ on the inversion. The cited books differ, and the transforms of $\delta$, $1$ and $H$ differ with them, so the convention must be checked before a formula is copied: Stakgold and Holst use $f^\wedge(u) = \int f(x)e^{+iux}\,dx$ with $1/2\pi$ on the inverse, so their $u$ is our $-k$; Reed and Simon use the symmetric $(2\pi)^{-n/2}\int e^{-i\lambda\cdot x}f(x)\,dx$; Folland uses $\int f(x)e^{-2\pi ix\xi}\,dx$, in which no factors of $2\pi$ ever appear. :ref[]{to=fourier.fourier-transform} tabulates the conversions. The translation rule is mechanical: a factor $2\pi$ appears for each $2\pi$ missing from the exponent, and a complex conjugation exchanges the sign conventions.
:::

:::definition[The Fourier transform of a tempered distribution]{provenance=adapted src="stakgold-holst-2011:§2.4, Eq. (2.4.30), p. 157; reed-simon-1980:§IX.1, the definition of $\hat T$ and its consistency with the transform on $\mathcal{S}$, p. 322; folland-1999:§9.2, p. 295"}
For $f\in L^1(\mathbb{R})$ and $\varphi\in\mathcal{S}(\mathbb{R})$, Fubini's theorem (:ref[]{to=measure.fubini-tonelli}) gives the **multiplication formula**

$$
\int_{-\infty}^{\infty}\hat f(k)\,\varphi(k)\, dk
= \int\!\!\int f(x)\varphi(k)e^{-ikx}\, dx\, dk
= \int_{-\infty}^{\infty} f(x)\,\hat\varphi(x)\, dx ,
$$

that is $\langle \hat f, \varphi\rangle = \langle f, \hat\varphi\rangle$. Note that no conjugation appears: this is the bilinear pairing, not an inner product. The right-hand side needs only that $\hat\varphi$ be a legitimate test function, which it is, because the Fourier transform maps $\mathcal{S}$ into $\mathcal{S}$ (:ref[]{to=fourier.fourier-inversion}). So for any $F \in \mathcal{S}'(\mathbb{R}^n)$ **define**

$$
\bigl\langle \hat F, \varphi\bigr\rangle = \bigl\langle F, \hat\varphi\bigr\rangle, \qquad \varphi\in\mathcal{S} ,
$$

and likewise $\langle F^\vee,\varphi\rangle = \langle F, \varphi^\vee\rangle$ for the inverse transform $\varphi^\vee(x) = (2\pi)^{-1}\int\varphi(k)e^{ikx}\,dk$. This is the only possible definition if the transform is to extend the classical one and stay weakly continuous.
:::

:::statement[The transform on $\mathcal{S}'$]{provenance=adapted src="reed-simon-1980:§IX.1, Theorem IX.2, p. 322; stakgold-holst-2011:§2.4, pp. 157–158, Eqs. (2.4.31)–(2.4.35); folland-1999:§9.2, p. 295"}
With the definition above:

1. $\hat F$ is again a tempered distribution, and $F\mapsto\hat F$ is a one-to-one linear map of $\mathcal{S}'(\mathbb{R}^n)$ onto itself with inverse $G \mapsto G^\vee$. It is weakly continuous, and no other weakly continuous map of $\mathcal{S}'$ agrees with the classical transform on $\mathcal{S}$ (Reed and Simon, Theorem IX.2).
2. It agrees with the classical transform on $L^1$: for $f\in L^1(\mathbb{R}^n)$ the distributional transform of $f$ is the distribution of the continuous function $\hat f$. It also agrees with the Plancherel transform on $L^2$, but that is a separate fact and does not follow from the $L^1$ case: $L^2 \not\subset L^1$, and the $L^2$ transform is itself defined by extension from $L^1\cap L^2$ (:ref[]{to=fourier.plancherel}). Taking the two together, the distributional transform agrees with the classical one on $L^1 + L^2$.
3. The operational rules of :ref[]{to=fourier.fourier-transform} hold unchanged. In one variable, for $F\in\mathcal{S}'(\mathbb{R})$ and $a\in\mathbb{R}$, $n\in\mathbb{N}$:
   $$
   \widehat{F^{(n)}}(k) = (ik)^n\hat F(k), \qquad
   \widehat{x^nF}(k) = i^n\frac{d^n\hat F}{dk^n}(k),
   $$
   $$
   \widehat{F(x-a)}(k) = e^{-ika}\hat F(k), \qquad
   \widehat{e^{iax}F}(k) = \hat F(k-a), \qquad
   \widehat{F(-x)}(k) = \hat F(-k), \qquad
   \hat{\hat F}(x) = 2\pi\, F(-x) .
   $$
   The first two involve multiplication of a tempered distribution by the slowly increasing function $(ik)^n$ or $x^n$, which is legitimate; a product of two distributions never occurs.
:::

:::idea{provenance=original}
Every construction here is the same move: an operation on distributions is defined by pushing it onto the test function, and it is the *right* definition when it reproduces the classical one on the functions where both make sense. Integration by parts does this for the derivative; the multiplication formula does it for the Fourier transform. The one thing to check each time is that the operation pushed onto the test function keeps it inside the test space — and that is exactly what rapid decay buys and compact support does not. Bijectivity is then free: $\hat{\hat{\phantom{F}}}$ on $\mathcal{S}'$ inherits the inversion theorem from $\mathcal{S}$, one line at a time.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.4, pp. 155–158; reed-simon-1980:§IX.1, p. 322"}
**A function of slow growth is tempered.** Let $f$ be locally integrable with $\lvert f(x)\rvert\le C\lvert x\rvert^N$ for $\lvert x\rvert>R$, and choose an integer $p$ with $2p > N+1$. Write

$$
\langle f,\varphi\rangle = \int_{-\infty}^{\infty}\frac{f(x)}{(1+x^2)^p}\,(1+x^2)^p\varphi(x)\, dx ,
$$

so that

$$
\lvert\langle f,\varphi\rangle\rvert \le \Bigl(\sup_x (1+x^2)^p\lvert\varphi(x)\rvert\Bigr)\int_{-\infty}^{\infty}\frac{\lvert f(x)\rvert}{(1+x^2)^p}\, dx .
$$

The integral is finite: near the origin because $f$ is locally integrable, and at infinity because the integrand is $O(\lvert x\rvert^{N-2p})$ with $N-2p < -1$. The supremum is a finite combination of the seminorms $\|\varphi\|_{\alpha,0}$ with $\alpha \le 2p$. That is the continuity criterion, so $f \in \mathcal{S}'$. $\square$

**(1) $\hat F$ is a tempered distribution.** $\varphi\mapsto\hat\varphi$ is linear and maps $\mathcal{S}$ continuously into $\mathcal{S}$, by the theorem of :ref[]{to=fourier.fourier-inversion} (Stakgold and Holst prove it as a theorem on p. 156, by differentiating and integrating by parts under the integral sign; Reed and Simon as the lemma preceding their Theorem IX.1). So $\varphi\mapsto\langle F,\hat\varphi\rangle$ is a composition of a continuous linear map with a continuous linear functional, hence a continuous linear functional: $\hat F\in\mathcal{S}'$.

For bijectivity, use the inversion theorem on $\mathcal{S}$: $(\hat\varphi)^\vee = \varphi$ and $(\varphi^\vee)^{\wedge} = \varphi$. Then for every $\varphi\in\mathcal{S}$,

$$
\bigl\langle (\hat F)^\vee, \varphi\bigr\rangle = \bigl\langle \hat F, \varphi^\vee\bigr\rangle = \bigl\langle F, (\varphi^\vee)^\wedge\bigr\rangle = \langle F,\varphi\rangle ,
$$

so $(\hat F)^\vee = F$, and symmetrically $\widehat{G^\vee} = G$. Hence the transform is a bijection of $\mathcal{S}'$ with inverse $\vee$. Weak continuity is immediate: if $\langle F_j,\psi\rangle\to\langle F,\psi\rangle$ for all $\psi \in \mathcal S$, then in particular for $\psi = \hat\varphi$, which says $\langle\hat F_j,\varphi\rangle\to\langle\hat F,\varphi\rangle$. Uniqueness of the extension holds because $\mathcal{S}$ is weakly dense in $\mathcal{S}'$.

**(2) Consistency.** If $f\in L^1$ then $\hat f$ in the classical sense is a bounded continuous function, hence tempered, and the multiplication formula displayed in the definition says precisely that the classical $\hat f$ and the distributional $\hat f$ have the same action on every $\varphi\in\mathcal{S}$. They are therefore equal.

**(3) The rules.** Each is a two-line calculation in which the corresponding rule for test functions is used once. For the derivative: differentiating $\hat\varphi(x) = \int\varphi(k)e^{-ikx}dk$ under the integral sign gives $(\hat\varphi)'(x) = \widehat{(-ik\varphi)}(x)$, and therefore

$$
\bigl\langle\widehat{F'},\varphi\bigr\rangle = \bigl\langle F',\hat\varphi\bigr\rangle = -\bigl\langle F,(\hat\varphi)'\bigr\rangle
= -\bigl\langle F,\widehat{(-ik\varphi)}\bigr\rangle = -\bigl\langle \hat F,-ik\varphi\bigr\rangle = \bigl\langle ik\hat F,\varphi\bigr\rangle ,
$$

where the definition of the distributional derivative was used at the second step and the definition of $\hat F$ at the first and fourth. For multiplication by $x$: integrating $\int\varphi(k)\,i\,\partial_k\bigl(e^{-ikx}\bigr)dk$ by parts gives $x\hat\varphi(x) = \widehat{(-i\varphi')}(x)$, so

$$
\bigl\langle\widehat{xF},\varphi\bigr\rangle = \bigl\langle xF,\hat\varphi\bigr\rangle = \bigl\langle F, x\hat\varphi\bigr\rangle
= \bigl\langle F,\widehat{(-i\varphi')}\bigr\rangle = \bigl\langle\hat F,-i\varphi'\bigr\rangle = i\bigl\langle(\hat F)',\varphi\bigr\rangle .
$$

The shift and reflection rules come the same way from $\widehat{\varphi}(x-a)$ and $\hat\varphi(-x)$, and $\hat{\hat F}(x) = 2\pi F(-x)$ from $\hat{\hat\varphi}(x) = 2\pi\varphi(-x)$, which is the inversion theorem rearranged. Iterating gives the powers $n$. $\square$
:::

:::method[Computing the transform of a tempered distribution]{provenance=adapted src="stakgold-holst-2011:§2.4, Examples 5–8, pp. 159–161"}
Four routes, in increasing order of effort; Stakgold and Holst use the last three on the Heaviside function alone.

1. **Straight from the definition.** Compute $\langle F,\hat\varphi\rangle$ and recognise the answer as the action of a known distribution on $\varphi$. This is immediate for $\delta$, where $\langle\delta,\hat\varphi\rangle = \hat\varphi(0) = \int\varphi$.
2. **From a known pair, by the operational rules.** If $F$ is a derivative, a translate, a reflection or a polynomial multiple of something whose transform is known, read the answer off rule (3) of the statement. This is how the transforms of $\delta^{(n)}$, $\delta(x-a)$ and $x^n$ are obtained from those of $\delta$ and $1$.
3. **Solve an algebraic equation.** Transform a differential relation satisfied by $F$ and solve the resulting equation in $\mathcal{S}'$. The equation is algebraic, but its solution need not be unique, so the homogeneous solutions must be found and then fixed by a further condition on $F$ — a symmetry, a known total integral, or a known value. The lemma below supplies the homogeneous solutions.
4. **As a weak limit.** Write $F = \lim_{\varepsilon\to0^+}f_\varepsilon$ weakly with each $f_\varepsilon$ an ordinary integrable function, transform classically, and take the weak limit of $\hat f_\varepsilon$. This is legitimate because the transform is weakly continuous, by part (1) of the statement. It is the most useful route in practice, because the limit $\varepsilon\to0^+$ carries the physics: $\varepsilon$ is an adiabatic switching rate, a damping, or a line width.
:::

:::statement[Distributions killed by multiplication by $k$]{provenance=adapted src="stakgold-holst-2011:§2.4, p. 160, and the cited Exercise 2.5.11(c)"}
Let $f\in\mathcal{S}'(\mathbb{R})$ satisfy $k\,f = 0$. Then $f = C\delta$ for some constant $C$. Consequently the general solution of $k\,f(k) = g(k)$, $g$ given, is one particular solution plus $C\delta$.
:::

:::proof[Distributions killed by multiplication by $k$]{provenance=original}
**Step 1: $f$ annihilates test functions that vanish at the origin.** Let $\psi\in\mathcal{S}$ with $\psi(0)=0$ and set $\theta(k) = \psi(k)/k$ for $k\ne0$, $\theta(0)=\psi'(0)$. Then $\theta(k) = \int_0^1\psi'(tk)\,dt$, which is smooth in $k$; and for $\lvert k\rvert\ge1$ every seminorm of $\theta$ is controlled by one of $\psi$, since $\lvert k^\alpha D^\beta\theta\rvert$ is a finite combination of $\lvert k^{\alpha-1-j}D^{\beta-j}\psi\rvert$. So $\theta\in\mathcal{S}$ and $\psi = k\theta$, whence

$$
\langle f,\psi\rangle = \langle f, k\theta\rangle = \langle kf,\theta\rangle = 0
$$

by the hypothesis.

**Step 2: split a general test function.** Fix $\chi\in\mathcal{S}$ with $\chi(0)=1$, say $\chi(k)=e^{-k^2}$. For any $\varphi\in\mathcal{S}$ write

$$
\varphi = \varphi(0)\,\chi + \bigl(\varphi - \varphi(0)\chi\bigr) ,
$$

and note the bracket vanishes at $k=0$ and lies in $\mathcal{S}$. By Step 1 it is annihilated by $f$, so

$$
\langle f,\varphi\rangle = \varphi(0)\,\langle f,\chi\rangle = C\,\varphi(0) = \langle C\delta,\varphi\rangle, \qquad C := \langle f,\chi\rangle .
$$

Since $\varphi$ was arbitrary, $f = C\delta$. The constant is independent of $\varphi$; it does depend on the choice of $\chi$ only apparently, because the left-hand side does not. $\square$
:::

:::statement[The basic transform pairs]{provenance=adapted src="stakgold-holst-2011:§2.4, Eqs. (2.4.36)–(2.4.40a), Examples 5–8, pp. 159–161"}
In the convention $\hat f(k) = \int f(x)e^{-ikx}dx$, with $a\in\mathbb{R}$ and $n = 0,1,2,\dots$:

| $f$ | $\hat f$ |
|---|---|
| $\delta(x)$ | $1$ |
| $\delta(x-a)$ | $e^{-ika}$ |
| $\delta^{(n)}(x)$ | $(ik)^n$ |
| $1$ | $2\pi\,\delta(k)$ |
| $x^n$ | $2\pi\, i^n\,\delta^{(n)}(k)$ |
| $e^{iax}$ | $2\pi\,\delta(k-a)$ |
| $\cos ax$ | $\pi\bigl[\delta(k-a)+\delta(k+a)\bigr]$ |
| $\sin ax$ | $-i\pi\bigl[\delta(k-a)-\delta(k+a)\bigr]$ |
| $\operatorname{pv}\dfrac1x$ | $-i\pi\operatorname{sgn} k$ |
| $\operatorname{sgn} x$ | $-2i\operatorname{pv}\dfrac1k$ |
| $H(x)$ | $\pi\,\delta(k) - i\operatorname{pv}\dfrac1k$ |

Stakgold and Holst's Eqs. (2.4.36), (2.4.37) and (2.4.40a) are the entries for $\delta$, for $1$ and for $H$ in their sign convention, which carries $k\mapsto-k$ on the right-hand column. The Heaviside line is worth checking explicitly, since it is the only entry where the substitution does visible work. Their (2.4.40a) reads $H^\wedge(u) = i\,\mathrm{pf}(1/u) + \pi\delta(u)$; putting $u = -k$ and using that $\mathrm{pf}(1/\cdot)$ is odd and $\delta$ even,
$$
i\,\mathrm{pf}\tfrac1u\Big|_{u=-k} = i\,\mathrm{pf}\tfrac{1}{-k} = -i\operatorname{pv}\tfrac1k , \qquad \delta(u)\big|_{u=-k} = \delta(k),
$$
which is the table's $\pi\delta(k) - i\operatorname{pv}(1/k)$. The pair $\delta \leftrightarrow 1$ is the precise content of the formal identity $\delta(x) = (2\pi)^{-1}\int e^{ikx}dk$ used throughout physics (:ref[]{to=vcalc.dirac-delta-basics}): the integral diverges pointwise, but it is the inversion formula applied to $\hat\delta = 1$, and it is correct in $\mathcal{S}'$.
:::

:::proof[The transform pairs]{provenance=adapted src="stakgold-holst-2011:§2.4, Examples 5–8, pp. 159–161"}
**$\hat\delta = 1$ (route 1).** $\langle\hat\delta,\varphi\rangle = \langle\delta,\hat\varphi\rangle = \hat\varphi(0) = \int\varphi(x)\,dx = \langle 1,\varphi\rangle$. The translate and the derivatives follow from the shift rule and $\widehat{\delta^{(n)}} = (ik)^n\hat\delta = (ik)^n$ (route 2).

**$\hat 1 = 2\pi\delta$ (route 2).** Apply $\hat{\hat F}(x) = 2\pi F(-x)$ to $F=\delta$: $\hat1 = \hat{\hat\delta}$, and $\hat{\hat\delta}(k) = 2\pi\delta(-k) = 2\pi\delta(k)$, using that $\delta$ is even. Then $\widehat{x^n} = i^n(d/dk)^n\hat1 = 2\pi i^n\delta^{(n)}(k)$, and $\widehat{e^{iax}} = \hat1(k-a) = 2\pi\delta(k-a)$ because multiplying by $e^{iax}$ shifts the transform; the cosine and sine lines are linear combinations of the last.

**$\widehat{\operatorname{pv}(1/x)} = -i\pi\operatorname{sgn} k$ (route 1, by hand).** For $\varphi\in\mathcal{S}$, the odd form of the principal value gives

$$
\Bigl\langle\widehat{\operatorname{pv}\tfrac1x},\varphi\Bigr\rangle = \Bigl\langle\operatorname{pv}\tfrac1x,\hat\varphi\Bigr\rangle
= \int_0^{\infty}\frac{\hat\varphi(x)-\hat\varphi(-x)}{x}\, dx
= \int_0^{\infty}\frac{dx}{x}\int_{-\infty}^{\infty}\varphi(k)\bigl(e^{-ikx}-e^{ikx}\bigr)\, dk .
$$

The inner bracket is $-2i\sin kx$. Exchanging the order of integration, which is permitted because $\lvert\sin kx\rvert/x$ is bounded by $\lvert k\rvert$ near $x=0$ and $\varphi$ decays rapidly, and using the Dirichlet integral $\int_0^\infty x^{-1}\sin kx\,dx = \tfrac\pi2\operatorname{sgn} k$,

$$
= -2i\int_{-\infty}^{\infty}\varphi(k)\left(\int_0^\infty\frac{\sin kx}{x}\, dx\right) dk
= -2i\cdot\frac{\pi}{2}\int_{-\infty}^{\infty}\varphi(k)\operatorname{sgn} k\, dk ,
$$

which is $\langle -i\pi\operatorname{sgn} k,\varphi\rangle$.

**$\widehat{\operatorname{sgn}} = -2i\operatorname{pv}(1/k)$ (route 2).** Transform the previous pair a second time and use $\hat{\hat F}(x) = 2\pi F(-x)$ with $F = \operatorname{pv}(1/x)$, which is odd:

$$
-i\pi\,\widehat{\operatorname{sgn}}(x) = \widehat{\Bigl(\widehat{\operatorname{pv}\tfrac1x}\Bigr)}(x) = 2\pi\operatorname{pv}\tfrac{1}{-x} = -2\pi\operatorname{pv}\tfrac1x .
$$

Dividing by the constant $-i\pi$ and relabelling the variable, $\widehat{\operatorname{sgn}}(k) = (2/i)\operatorname{pv}(1/k) = -2i\operatorname{pv}(1/k)$.

**$\hat H$, twice over.** *Route 3.* From $H' = \delta$ (:ref[]{to=fourier.heaviside-step}) and the derivative rule, $ik\hat H(k) = 1$, that is

$$
k\,\hat H(k) = -i .
$$

One solution is $-i\operatorname{pv}(1/k)$, because $k\cdot\operatorname{pv}(1/k) = 1$. By the lemma above, every solution is

$$
\hat H(k) = -i\operatorname{pv}\tfrac1k + C\,\delta(k) .
$$

To fix $C$, use $H(x)+H(-x) = 1$ for $x \ne 0$, hence as distributions. Transforming with the reflection rule, $\hat H(k)+\hat H(-k) = 2\pi\delta(k)$. The principal value is odd, so its two copies cancel, and $2C\delta(k) = 2\pi\delta(k)$. Thus $C = \pi$ and $\hat H(k) = \pi\delta(k) - i\operatorname{pv}(1/k)$.

*Route 4.* $H(x)e^{-\varepsilon x}\to H(x)$ weakly as $\varepsilon\to0^+$, and each is in $L^1$ with the classical transform

$$
\int_0^\infty e^{-\varepsilon x}e^{-ikx}\, dx = \frac{1}{\varepsilon+ik} = \frac{\varepsilon}{\varepsilon^2+k^2} - i\,\frac{k}{\varepsilon^2+k^2} .
$$

The first term is a Lorentzian whose total integral is the same for every $\varepsilon$, namely $\int_{-\infty}^{\infty}\varepsilon\,(\varepsilon^2+k^2)^{-1}dk = \pi$ — not $1$, since the unit-mass Lorentzian is $\pi^{-1}\varepsilon/(\varepsilon^2+k^2)$ — so it tends weakly to $\pi\delta(k)$ (:ref[]{to=fourier.delta-identities}). For the second, $k/(\varepsilon^2+k^2)$ is odd and tends to $\operatorname{pv}(1/k)$: pairing with $\varphi$ and using oddness,

$$
\int_{-\infty}^{\infty}\frac{k\,\varphi(k)}{\varepsilon^2+k^2}\, dk = \int_0^\infty \frac{k\bigl[\varphi(k)-\varphi(-k)\bigr]}{\varepsilon^2+k^2}\, dk
\xrightarrow[\varepsilon\to0^+]{} \int_0^\infty\frac{\varphi(k)-\varphi(-k)}{k}\, dk ,
$$

the convergence being dominated because $\lvert\varphi(k)-\varphi(-k)\rvert \le 2k\sup\lvert\varphi'\rvert$ bounds the integrand uniformly in $\varepsilon$ near $k=0$. So $\hat H(k) = \pi\delta(k)-i\operatorname{pv}(1/k)$ again, now with $C=\pi$ obtained rather than fitted. Since $\operatorname{sgn} = 2H-1$, this gives $\widehat{\operatorname{sgn}} = 2\pi\delta - 2i\operatorname{pv}(1/k) - 2\pi\delta = -2i\operatorname{pv}(1/k)$, consistent with the entry above. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Rapid decay, not compact support.** The definition $\langle\hat F,\varphi\rangle = \langle F,\hat\varphi\rangle$ requires $\hat\varphi$ to be in the test space. On $\mathcal{D}$ it is not, by Folland's observation quoted above, so the transform of a general distribution in $\mathcal{D}'$ is *not* defined. This is the whole reason the Schwartz space exists.
- **Temperedness restricts what can be transformed.** $e^{x}$ has no Fourier transform in $\mathcal{S}'$. Taking $\hat\varphi$ of a rapidly decreasing $\varphi$ cannot beat exponential growth, and no amount of regularisation fixes this inside $\mathcal{S}'$; the usual response is a Laplace transform in a half-plane (:ref[]{to=fourier.laplace-transform}) rather than a Fourier transform.
- **Slow increase of the multiplier.** Rules (3) multiply $\hat F$ by $(ik)^n$ and $F$ by $x^n$, both slowly increasing, so the products stay in $\mathcal{S}'$. The analogous step with $e^{k^2}$ is illegal. The convolution theorem (:ref[]{to=fourier.convolution-theorem}) is similarly restricted: $F*\psi$ is defined for $F\in\mathcal{S}'$ and $\psi\in\mathcal{S}$, and $\widehat{F*\psi} = \hat\psi\hat F$ holds there, but two tempered distributions can be neither multiplied nor convolved in general.
- **Non-uniqueness in route 3.** The lemma is needed exactly because $k\hat H = -i$ does not determine $\hat H$. Forgetting the $C\delta(k)$ loses the term that makes $\hat H$ fail to be odd, and with it the whole real part of $\hat H$ — in physical terms, the time-averaged value of a switched-on signal. Fixing $C$ needs one extra piece of information about $H$, and the identity $H(x)+H(-x)=1$ is the cheapest.
- **$1/x$ is not a distribution; $\operatorname{pv}(1/x)$ is.** The limit defining the principal value exists because the odd part of $\varphi$ supplies a factor $x$ that cancels the singularity. For an even test function the symmetric-interval cancellation is doing all the work; for a one-sided cutoff the integral really does diverge. The same device at higher order needs Hadamard finite parts, which are not treated here.
:::

:::example[Solving $u'' - u = \delta$ in $\mathcal{S}'$]{provenance=original}
Find all $u\in\mathcal{S}'(\mathbb{R})$ with $u''-u = \delta$. This is the Green's function equation for the operator $d^2/dx^2 - 1$ on the line.

**Step 1: transform.** By rule (3) with $n=2$, $\widehat{u''} = (ik)^2\hat u = -k^2\hat u$, and $\hat\delta = 1$, so

$$
-k^2\hat u(k) - \hat u(k) = 1, \qquad\text{that is}\qquad -(1+k^2)\,\hat u(k) = 1 .
$$

**Step 2: divide, legitimately.** The function $-(1+k^2)^{-1}$ is smooth, bounded, and all its derivatives are bounded, so it is slowly increasing and may multiply a tempered distribution. Moreover $1+k^2$ never vanishes, so — unlike the Heaviside calculation — there is no homogeneous solution to add: if $(1+k^2)v = 0$ then $v = (1+k^2)^{-1}(1+k^2)v = 0$. Hence the solution is unique:

$$
\hat u(k) = -\frac{1}{1+k^2} .
$$

**Step 3: invert.** From the standard pair $\mathcal{F}\bigl[e^{-a\lvert x\rvert}\bigr](k) = 2a/(a^2+k^2)$ for $a>0$ (:ref[]{to=fourier.fourier-transform}), taking $a=1$ gives $\mathcal{F}\bigl[e^{-\lvert x\rvert}\bigr] = 2/(1+k^2)$, so

$$
u(x) = -\tfrac12 e^{-\lvert x\rvert}, \qquad u(0) = -\tfrac12 .
$$

**Step 4: check directly, by the jump formula.** $u$ is continuous with $\Delta u = 0$ at the origin, and $[u'](x) = \tfrac12\operatorname{sgn}(x)e^{-\lvert x\rvert}$, which jumps by $\tfrac12-(-\tfrac12) = 1$ there. So $u' = [u']$ and

$$
u'' = [u''] + 1\cdot\delta = -\tfrac12 e^{-\lvert x\rvert} + \delta = u + \delta ,
$$

since $[u''](x) = -\tfrac12 e^{-\lvert x\rvert}$ away from $0$. That is $u''-u = \delta$. Pairing numerically with a smooth plateau function $\varphi$ equal to $1$ near the origin gives $\langle u,\varphi''-\varphi\rangle = 1.0000000 = \varphi(0)$, as it must.

The numbers to remember: the Green's function is $-\tfrac12e^{-\lvert x\rvert}$, its value at the source is $-0.5$, and its total integral is $\int u = \hat u(0) = -1$.
:::

:::application[Switching, causality and dispersion relations]{provenance=adapted src="reed-simon-1980:§V.3, Eq. (V.4), p. 137"}
**The $i\varepsilon$ prescription.** Routes 3 and 4 above produce the same object in two guises, and comparing them gives the identity Reed and Simon record as their Eq. (V.4): in $\mathcal{S}'$,

$$
\lim_{\varepsilon\to0^+}\frac{1}{x\pm i\varepsilon} = \operatorname{pv}\frac1x \mp i\pi\,\delta(x) ,
$$

known in physics as the Sokhotski–Plemelj formula. Its derivation is the decomposition used in route 4: $(x\pm i\varepsilon)^{-1} = x/(x^2+\varepsilon^2) \mp i\varepsilon/(x^2+\varepsilon^2)$, whose two terms converge weakly to $\operatorname{pv}(1/x)$ and $\mp i\pi\delta(x)$. This is why a physicist's $\varepsilon$ is never a typographical decoration: the sign chosen in $E - E_n \pm i\varepsilon$ selects a boundary condition, and the delta term it generates is a real physical rate. In the Fermi golden rule, the $\delta$ is the energy-conserving factor and the principal value is the level shift.

**Causal response functions.** A linear system with impulse response $G$ is causal when $G(t) = H(t)g(t)$, so $\hat G = (2\pi)^{-1}\,\hat H * \hat g$ with $\hat H = \pi\delta - i\operatorname{pv}(1/k)$ — the $(2\pi)^{-1}$ is the one this unit's convention puts on the transform of a product, the dual of the factor-free $\widehat{F*\psi} = \hat\psi\hat F$. Written out, $\hat G(\omega) = \tfrac12\hat g(\omega) - \tfrac{i}{2\pi}\operatorname{pv}\!\int \hat g(\omega')/(\omega-\omega')\,d\omega'$. The principal-value half forces a relation between the real and imaginary parts of the response, which is the Kramers–Kronig relation of :ref[]{to=complex.dispersion-relations}: absorption and refraction in a medium are not independent, because the medium cannot respond before it is driven. The same calculation, read in the time domain, builds the retarded Green's functions of :ref[]{to=green.causal-green-functions}.

**Plane waves and lattices.** The pair $e^{iax}\leftrightarrow 2\pi\delta(k-a)$ says a plane wave has a sharp wavenumber — not approximately, but as an identity between tempered distributions. Without $\mathcal{S}'$ the statement is false, since $e^{iax}\notin L^1\cup L^2$ and has no classical transform. The corresponding statement for a periodic array of point sources, $\sum_n\delta(x-nL)$, has transform $(2\pi/L)\sum_m\delta(k-2\pi m/L)$, which is the reciprocal lattice of a crystal and is :ref[]{to=fourier.poisson-summation} in distributional form.
:::
