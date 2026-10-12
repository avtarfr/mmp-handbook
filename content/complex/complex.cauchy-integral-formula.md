---
id: complex.cauchy-integral-formula
title: Cauchy's integral formula
kind: theorem
level: core
summary: "An analytic function and all of its derivatives at an interior point are given by integrals of the function over the surrounding contour; consequently an analytic function is infinitely differentiable, and conversely a continuous function all of whose closed contour integrals vanish is analytic."
prereqs: [complex.cauchy-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§24.10, Eqs. (24.46)–(24.48), pp. 851–853"
    pages: "851-853"
    role: statement of the formula and the route of its proof by shrinking a circle about the point; the first derivative from the difference quotient; the derivative formula of order n; the statement of Morera's theorem
  - work: ahlfors-1979
    loc: "Ch. 4, §2.2, Thm 6 and Eq. (22), pp. 118–120; §2.3, Lemma 3 and Eqs. (23)–(24) with Morera's theorem, pp. 120–122; §3.4, Eq. (34), p. 134"
    pages: "118-122, 134"
    role: the formula proved from Cauchy's theorem applied to (f(z)-f(a))/(z-a); the lemma on differentiating a Cauchy-type integral and the induction giving derivatives of every order; Morera's theorem; the mean value property on a circle
  - work: arfken-2013
    loc: "§11.4, Eqs. (11.30)–(11.33), pp. 486–488; Morera's Theorem, Eqs. (11.34)–(11.36), pp. 489–490"
    pages: "486-490"
    role: the two cases (point inside, point outside); the derivative formulas and the remark that they rest on Goursat's form of Cauchy's theorem; the statement and proof route of Morera's theorem as the converse
  - work: hassani-2013
    loc: "§10.4, the Cauchy integral formula and Example 10.4.5, pp. 313–315; §10.5, Prop. 10.5.1 and Thm 10.5.2, pp. 315–316; §10.5, Thm 10.5.8 (Morera), p. 319"
    pages: "313-316, 319"
    role: the same lemma on Cauchy-type integrals with a merely continuous density, obtained by differentiating under the integral sign; the statement that derivatives of all orders exist and are analytic; Morera's theorem stated for a simply connected region; the electrostatic-uniqueness analogy
---

:::statement[Cauchy's integral formula]{provenance=adapted src="rhb-2006:§24.10, Eqs. (24.46)–(24.48), pp. 851–853; ahlfors-1979:Ch. 4, §2.2, Eq. (22), p. 119 and §2.3, Eq. (24), p. 120; arfken-2013:§11.4, Eqs. (11.30)–(11.33), pp. 486–488"}
Let $C$ be a positively oriented simple closed contour, let $f$ be analytic on and inside $C$, and let $z_0$ be a point inside $C$. Then

$$
f(z_0) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z - z_0}\,dz ,
$$

and for every $n \in \mathbb{N}$ the derivative $f^{(n)}(z_0)$ exists and

$$
f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C \frac{f(z)}{(z-z_0)^{n+1}}\,dz .
$$

Consequences.

1. **Infinite differentiability.** A function analytic on an open set has derivatives of all orders there, and every one of them is again analytic.
2. **Point outside.** If instead $z_0$ lies outside $C$, the whole integrand is analytic on and inside $C$, so $\oint_C f(z)(z-z_0)^{-1}dz = 0$.
3. **Mean value property.** If the closed disk $\lvert z - z_0\rvert \le r$ lies in the region of analyticity, then

   $$
   f(z_0) = \frac{1}{2\pi}\int_0^{2\pi} f\bigl(z_0 + re^{i\theta}\bigr)\,d\theta .
   $$
4. **Morera's theorem (converse of Cauchy's theorem).** If $f$ is continuous on a region $\Omega$ and $\oint_\gamma f(z)\,dz = 0$ for every closed contour $\gamma$ in $\Omega$, then $f$ is analytic on $\Omega$.
:::

:::idea{provenance=original}
The formula is Cauchy's theorem applied to the right function. The quotient $\bigl(f(z) - f(z_0)\bigr)/(z-z_0)$ is analytic except at $z_0$, where it stays bounded, so its integral around $C$ vanishes; splitting the numerator leaves $\oint f(z)/(z-z_0)\,dz$ on one side and $f(z_0)\oint dz/(z-z_0) = 2\pi i f(z_0)$ on the other. Equivalently, and this is the version easiest to compute with: deform $C$ to a tiny circle about $z_0$, on which $f$ is nearly the constant $f(z_0)$, and the integral is then $f(z_0)$ times $2\pi i$.

For the derivatives the temptation is to differentiate under the integral sign, which gives the right answer but needs justification. The honest route is to prove once and for all that an integral of the form $\oint \varphi(\zeta)(\zeta - z)^{-n}d\zeta$, with $\varphi$ merely continuous on the contour, is a differentiable function of $z$ off the contour, with the derivative one gets by differentiating the kernel. Each step of the induction only needs the previous step applied to a slightly different $\varphi$. The payoff is disproportionate: since the right-hand side makes sense for all $n$, so does the left, and analyticity at once implies infinite differentiability — a conclusion with no counterpart for functions of a real variable.
:::

:::proof[The formula]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.2, pp. 118–119; rhb-2006:§24.10, p. 852"}
**Step 1 (reduce to a small circle).** Let $\sigma_\rho$ be the positively oriented circle $\lvert z - z_0\rvert = \rho$, with $\rho$ small enough that the closed disk it bounds lies inside $C$. The integrand $f(z)/(z-z_0)$ is analytic on the closed region between $C$ and $\sigma_\rho$, because $f$ is analytic there and the only zero of the denominator is $z_0$, which is not in that region. By :ref[the deformation principle]{to=complex.cauchy-theorem},

$$
\oint_C \frac{f(z)}{z-z_0}\,dz = \oint_{\sigma_\rho}\frac{f(z)}{z - z_0}\,dz
\qquad\text{for every such } \rho .
$$

**Step 2 (evaluate on the circle).** Parametrize $\sigma_\rho$ by $z = z_0 + \rho e^{i\theta}$, $0 \le \theta \le 2\pi$, so $dz = i\rho e^{i\theta}d\theta$ and $z - z_0 = \rho e^{i\theta}$. The factors of $\rho e^{i\theta}$ cancel:

$$
\oint_{\sigma_\rho}\frac{f(z)}{z-z_0}\,dz = i\int_0^{2\pi} f\bigl(z_0 + \rho e^{i\theta}\bigr)\,d\theta .
$$

Dividing by $2\pi i$ gives the mean value of $f$ over the circle, which is consequence 3 as soon as the formula itself is proved.

**Step 3 (let the circle shrink).** Subtract the constant: using $\int_0^{2\pi}d\theta = 2\pi$,

$$
\Bigl\lvert \frac{1}{2\pi}\int_0^{2\pi}f(z_0+\rho e^{i\theta})\,d\theta - f(z_0)\Bigr\rvert
= \Bigl\lvert \frac{1}{2\pi}\int_0^{2\pi}\bigl[f(z_0 + \rho e^{i\theta}) - f(z_0)\bigr]d\theta\Bigr\rvert
\le \max_{\lvert z - z_0\rvert = \rho}\lvert f(z) - f(z_0)\rvert ,
$$

by the modulus inequality for integrals. Since $f$ is continuous at $z_0$ — it is differentiable there — the right-hand side tends to $0$ as $\rho \to 0^+$. But by Steps 1 and 2 the left-hand side is $\bigl\lvert \frac{1}{2\pi i}\oint_C f(z)(z-z_0)^{-1}dz - f(z_0)\bigr\rvert$, a quantity *independent of $\rho$*. A constant that is smaller than every positive number is zero, which is the formula. $\square$
:::

:::proof[The derivative formulas, and infinite differentiability]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.3, Lemma 3 and its induction, pp. 120–122; rhb-2006:§24.10, Eq. (24.47), p. 852"}
**Lemma.** Let $\gamma$ be a path and let $\varphi$ be continuous on $\gamma$. For $n \in \mathbb{N}$ and $z$ not on $\gamma$ put

$$
F_n(z) = \int_\gamma \frac{\varphi(\zeta)}{(\zeta - z)^n}\,d\zeta .
$$

Then every $F_n$ is analytic off $\gamma$, and $F_n' = n\,F_{n+1}$.

*Set-up for the proof of the lemma.* Fix $z_1$ off $\gamma$ and pick $\delta > 0$ with $\lvert \zeta - z_1\rvert \ge \delta$ for all $\zeta \in \gamma$, which is possible because $\gamma$ is compact. Throughout, $z$ is restricted to $\lvert z - z_1\rvert < \delta/2$, so that $\lvert \zeta - z\rvert > \delta/2$ on $\gamma$. Write $K = \int_\gamma \lvert\varphi\rvert\,\lvert d\zeta\rvert$, a finite constant. All estimates below are the ML estimate of :ref[contour integrals]{to=complex.contour-integrals}.

**Step 1 ($F_1$ is continuous at $z_1$).** From the identity

$$
\frac{1}{\zeta - z} - \frac{1}{\zeta - z_1} = \frac{z - z_1}{(\zeta - z)(\zeta - z_1)} \tag{$\ast$}
$$

we get

$$
F_1(z) - F_1(z_1) = (z-z_1)\int_\gamma \frac{\varphi(\zeta)\,d\zeta}{(\zeta - z)(\zeta - z_1)},
\qquad
\lvert F_1(z) - F_1(z_1)\rvert \le \lvert z - z_1\rvert\,\frac{2}{\delta}\cdot\frac{1}{\delta}\cdot K = \frac{2K}{\delta^2}\lvert z - z_1\rvert ,
$$

which tends to $0$ as $z \to z_1$.

**Step 2 ($F_1' = F_2$).** Divide the first display of Step 1 by $z - z_1$:

$$
\frac{F_1(z) - F_1(z_1)}{z-z_1} = \int_\gamma \frac{\psi(\zeta)}{\zeta - z}\,d\zeta,
\qquad \psi(\zeta) = \frac{\varphi(\zeta)}{\zeta - z_1},
$$

and note that $\psi$ is continuous on $\gamma$, since $\zeta \ne z_1$ there. The right-hand side is therefore the function "$F_1$ built from $\psi$", which by Step 1 is continuous at $z_1$; its value at $z = z_1$ is $\int_\gamma \varphi(\zeta)(\zeta-z_1)^{-2}d\zeta = F_2(z_1)$. Hence $F_1'(z_1) = F_2(z_1)$.

**Step 3 (the induction identity).** Let $n \ge 2$ and keep $\psi(\zeta) = \varphi(\zeta)/(\zeta - z_1)$. Denote by $G_k$ the integrals built from $\psi$, that is $G_k(z) = \int_\gamma \psi(\zeta)(\zeta - z)^{-k}d\zeta$. Dividing $(\ast)$ by $(\zeta - z)^{n-1}$ and rearranging gives

$$
\frac{1}{(\zeta-z)^n} = \frac{1}{(\zeta - z)^{n-1}(\zeta - z_1)} + \frac{z - z_1}{(\zeta-z)^n(\zeta - z_1)} ,
$$

and integrating against $\varphi$ and subtracting $F_n(z_1)$,

$$
F_n(z) - F_n(z_1) = \bigl[G_{n-1}(z) - G_{n-1}(z_1)\bigr] + (z - z_1)\,G_n(z) . \tag{$\dagger$}
$$

Here we used $G_{n-1}(z_1) = \int_\gamma \varphi(\zeta)(\zeta - z_1)^{-n}d\zeta = F_n(z_1)$ and, for the last term, $\int_\gamma \varphi(\zeta)(\zeta-z)^{-n}(\zeta-z_1)^{-1}d\zeta = G_n(z)$.

**Step 4 (induction).** Suppose, as the induction hypothesis, that $F_{n-1}$ is continuous and differentiable at $z_1$ with $F_{n-1}' = (n-1)F_n$, *for every* continuous density on $\gamma$ — in particular for $\psi$, so $G_{n-1}'(z_1) = (n-1)G_n(z_1)$. Steps 1 and 2 are this statement for $n-1=1$.

- *Continuity of $F_n$ at $z_1$.* In $(\dagger)$ the bracket tends to $0$ because $G_{n-1}$ is continuous at $z_1$, and $G_n$ is bounded on $\lvert z - z_1\rvert < \delta/2$, since $\lvert \psi\rvert \le \lvert\varphi\rvert/\delta$ on $\gamma$ gives $\lvert G_n(z)\rvert \le (2/\delta)^n K/\delta$ independently of $z$; so the second term tends to $0$ as well. Since the density in $(\dagger)$ was arbitrary, this proves continuity of $F_n$ at $z_1$ for every continuous density, hence also continuity of $G_n$ at $z_1$.
- *Differentiability.* Divide $(\dagger)$ by $z - z_1$ and let $z \to z_1$. The first quotient tends to $G_{n-1}'(z_1) = (n-1)G_n(z_1)$ by the induction hypothesis; the second term is $G_n(z)$, which tends to $G_n(z_1)$ by the continuity just established. Therefore

  $$
  F_n'(z_1) = (n-1)G_n(z_1) + G_n(z_1) = n\,G_n(z_1) = n\int_\gamma \frac{\varphi(\zeta)\,d\zeta}{(\zeta - z_1)^{n+1}} = n\,F_{n+1}(z_1) ,
  $$

  where the third equality is the definition of $G_n$ with $\psi = \varphi/(\zeta - z_1)$. This closes the induction and proves the lemma.

**Application to $f$.** Let $\Omega$ be open, $f$ analytic on $\Omega$, and $a \in \Omega$. Choose a positively oriented circle $C_a$ about $a$ whose closed disk lies in $\Omega$. For every $z$ inside $C_a$, the formula already proved gives

$$
f(z) = \frac{1}{2\pi i}\oint_{C_a}\frac{f(\zeta)}{\zeta - z}\,d\zeta = \frac{1}{2\pi i}F_1(z),
$$

with the continuous density $\varphi = f$ on $C_a$. The lemma then gives, by induction on $n$,

$$
f^{(n)}(z) = \frac{n!}{2\pi i}\oint_{C_a}\frac{f(\zeta)}{(\zeta - z)^{n+1}}\,d\zeta
\qquad (n = 0, 1, 2, \dots),
$$

since the case $n=0$ is the display above and, assuming the formula for $n$, the lemma gives $f^{(n+1)}(z) = \frac{n!}{2\pi i}F_{n+1}'(z) = \frac{n!(n+1)}{2\pi i}F_{n+2}(z) = \frac{(n+1)!}{2\pi i}F_{n+2}(z)$. In particular every $f^{(n)}$ is differentiable, hence analytic, which is consequence 1.

Finally, for $z_0$ inside the original contour $C$, the integrand $f(\zeta)(\zeta - z_0)^{-n-1}$ is analytic on the closed region between $C$ and a small circle $C_{z_0}$ about $z_0$, so :ref[the deformation principle]{to=complex.cauchy-theorem} replaces $C_{z_0}$ by $C$ and the formula holds as stated. $\square$
:::

:::proof[Morera's theorem]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.3, p. 122; arfken-2013:§11.4, Eqs. (11.34)–(11.36), pp. 489–490"}
Let $f$ be continuous on the region $\Omega$ with all closed contour integrals zero. By the fundamental theorem for contour integrals (:ref[contour integrals]{to=complex.contour-integrals}, part 4), $f$ has a primitive: there is an analytic $F$ on $\Omega$ with $F' = f$. By consequence 1, applied to $F$, the derivative $F' = f$ is itself analytic on $\Omega$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and why the order of results matters.**

- *Analyticity inside, not only on, $C$.* The proof uses the deformation principle on the region between $C$ and a small circle, which requires $f$ to be analytic throughout. Dropping it destroys the conclusion: take $f(z) = 1/z$, which is analytic on the unit circle $C$ but not inside it, and $z_0 = \tfrac12$. Partial fractions give $\frac{1}{z(z-\frac12)} = 2\bigl(\frac{1}{z - \frac12} - \frac1z\bigr)$, so $\frac{1}{2\pi i}\oint_C\frac{1/z}{z-\frac12}\,dz = 2(1 - 1) = 0$, whereas $f(\tfrac12) = 2$. Numerical integration confirms the value $0$.
- *$z_0$ strictly inside.* On the contour the integral is not even absolutely convergent as written; the boundary case is the subject of :ref[principal value integrals]{to=complex.principal-value-integrals}.
- *The lemma is proved with $\varphi$ merely continuous*, which is what allows the induction to be run on densities such as $\varphi(\zeta)/(\zeta - z_1)^k$ that are not of the original form. Differentiating under the integral sign, as :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.10, p. 853"} and :cite[Hassani]{work=hassani-2013 loc="Prop. 10.5.1, p. 315"} do, reaches the same formula and is the quickest derivation; it needs a theorem on :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} that the lemma above supplies in exactly the case at hand.
- *Goursat's form of Cauchy's theorem is needed, not Cauchy's.* :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.4, footnote 3, p. 488"} are explicit about this. If Cauchy's theorem had been proved only under the assumption that $f'$ is continuous, then consequence 1 — which *produces* continuity of $f'$ — would be circular. This is why :ref[Cauchy's theorem]{to=complex.cauchy-theorem} is proved by bisection there.
- *Morera needs all closed contours.* It is not enough that the integral vanish over the contours of one family. Note that our sources state the theorem with different hypotheses on the region: :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 4, §2.3, p. 122"} asks only that $\Omega$ be a region, while :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.4, p. 489"} and :cite[Hassani]{work=hassani-2013 loc="Thm 10.5.8, p. 319"} require it to be simply connected. We follow Ahlfors, whose version is the stronger one and is what the proof above gives: the hypothesis is about *every* closed contour in $\Omega$, so the primitive it produces is single-valued whatever the topology of $\Omega$, and simple connectivity is never used. On a simply connected region the three statements coincide.
- *Nothing like consequence 1 is true for real functions.* $x\mapsto x\lvert x\rvert$ is differentiable on $\mathbb{R}$ with derivative $2\lvert x\rvert$, which is not differentiable at $0$. One complex derivative forces infinitely many.
:::

:::example[Evaluating contour integrals with the formulas]{provenance=original}
1. *Order zero.* $\displaystyle\oint_{\lvert z\rvert = 2}\frac{e^z}{z - 1}\,dz = 2\pi i\,e^1 = 2\pi i e \approx 17.079468\,i$, since $e^z$ is entire and $z_0 = 1$ lies inside the circle. Numerical integration over the parametrized circle reproduces $17.079468\,i$.
2. *Order one.* $\displaystyle\oint_{\lvert z\rvert = 2}\frac{e^z}{(z-1)^2}\,dz = \frac{2\pi i}{1!}\frac{d}{dz}e^z\Big|_{z=1} = 2\pi i e$ as well — the same value here because $e^z$ is its own derivative.
3. *Order two.* $\displaystyle\oint_{\lvert z\rvert = 1}\frac{\cos z}{z^3}\,dz = \frac{2\pi i}{2!}\frac{d^2}{dz^2}\cos z\Big|_{z=0} = \pi i\,(-\cos 0) = -\pi i \approx -3.141593\,i$, again confirmed numerically.
4. *Point outside.* $\displaystyle\oint_{\lvert z\rvert = 1}\frac{e^z}{z-3}\,dz = 0$, by consequence 2.
5. *The mean value property as a check.* Take $f(z) = 1/(2-z)$, analytic on $\lvert z\rvert \le 1$. Then $\frac{1}{2\pi}\int_0^{2\pi}\frac{d\theta}{2 - e^{i\theta}} = f(0) = \tfrac12$. Numerical quadrature of the left side gives $0.500000$, with imaginary part zero to the same accuracy.
:::

:::example[A function reconstructed from its boundary values]{provenance=original}
Let $f$ be analytic on $\lvert z\rvert \le 1$ with boundary values $f(e^{i\theta}) = e^{2i\theta}$. The formula fixes $f$ on the whole disk. For $\lvert z_0\rvert < 1$,

$$
f(z_0) = \frac{1}{2\pi i}\oint_{\lvert z\rvert = 1}\frac{z^2}{z - z_0}\,dz
$$

because $z^2$ agrees with $f$ on the contour, and the right-hand side equals $z_0^2$ by the formula applied to the entire function $z^2$. So $f(z) = z^2$: the only analytic function on the disk with those boundary values. Checking at $z_0 = \tfrac12 + \tfrac12 i$: $f(z_0) = (\tfrac12+\tfrac12 i)^2 = \tfrac12 i$, and the integral $\frac{1}{2\pi i}\int_0^{2\pi}\frac{e^{2i\theta}}{e^{i\theta} - z_0}ie^{i\theta}\,d\theta$ evaluates numerically to $0.000000 + 0.500000\,i$.

Note what happens if the boundary data are *not* the restriction of an analytic function. With $f(e^{i\theta}) = e^{-i\theta}$, that is $\bar z$ on the circle, we may write $\bar z = 1/z$ there, and partial fractions give
$$
\frac{1}{2\pi i}\oint_{\lvert z\rvert = 1}\frac{1/z}{z - z_0}\,dz = \frac{1}{z_0}\cdot\frac{1}{2\pi i}\oint\Bigl(\frac{1}{z - z_0} - \frac1z\Bigr)dz = \frac{1 - 1}{z_0} = 0
$$
for every $z_0$ with $0 < \lvert z_0\rvert < 1$ (numerically $0.000000$ at $z_0 = \tfrac12 + \tfrac12 i$). So if some analytic $g$ on the closed disk had $g = \bar z$ on the circle, the formula would force $g \equiv 0$, contradicting $\lvert g\rvert = 1$ on the boundary. No analytic function has those boundary values — which is why the Cauchy integral, applied to arbitrary boundary data, produces an analytic function in the disk whose boundary values are generally not the data one started from.
:::

:::application{provenance=original}
- *Numerical differentiation without subtractive cancellation.* The $n$th derivative formula turns differentiation into integration. Evaluating $f^{(n)}(z_0) = \frac{n!}{2\pi r^n}\int_0^{2\pi}f(z_0+re^{i\theta})e^{-in\theta}\,d\theta$ by the trapezoidal rule on $m$ equally spaced points converges geometrically in $m$ for analytic $f$ and avoids the catastrophic cancellation of finite differences; this is the basis of the Lyness-Moler method and of the "complex-step derivative" used in sensitivity analysis and automatic differentiation.
- *Functions of operators.* Replacing $1/(z - z_0)$ by the resolvent $(zI - A)^{-1}$ of a matrix or operator $A$ turns the formula into the definition $f(A) = \frac{1}{2\pi i}\oint_C f(z)(zI - A)^{-1}dz$, with $C$ enclosing the spectrum. This is how $e^{tA}$, $\sqrt{A}$ and spectral projections are constructed and computed (:ref[the matrix exponential]{to=linalg.matrix-exponential}, :ref[bounded operators]{to=funcan.bounded-operators}), and it is the contour integral that underlies the spectral theory of :ref[unbounded operators]{to=funcan.unbounded-operators} in quantum mechanics.
- *Boundary data determine the interior.* The second example is a template: a response function analytic in a half-plane, or a potential analytic in a region, is fixed everywhere by its values on the boundary. In electrostatics this is the uniqueness theorem for the Dirichlet problem (:ref[the Poisson integral formula]{to=pde.poisson-integral-formula}), and in scattering theory it is why measuring an amplitude on the physical region constrains it off the real axis, which is what makes :ref[analytic continuation]{to=complex.analytic-continuation} a physical tool and not just a formal one.
:::
