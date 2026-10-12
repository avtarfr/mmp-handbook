---
id: spec.gamma-function
title: The Gamma function
kind: definition
level: core
summary: Defines $\Gamma$ by Euler's integral on the right half-plane, collects the functional equation $\Gamma(z+1) = z\Gamma(z)$ with the factorial and half-integer values, Gauss's limit formula, and the reflection and duplication formulas, and shows how to reduce an integral or a half-integral argument to a tabulated value.
prereqs: [found.differentiation-under-integral, complex.analytic-continuation, found.change-of-variables, found.gaussian-integrals, complex.branch-cut-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "Ch. 13, §13.1, pp. 599-604: Euler's limit (13.1) and its equivalence with the Euler integral (13.5) via $F(z,n)$, eqs. (13.9)-(13.14); the functional relation (13.2); $\\Gamma(1/2)$ from (13.6)-(13.8); the Weierstrass product (13.15); the reflection formula (13.23) and its derivation (13.24)-(13.25); Legendre's duplication formula (13.27) and the half-integer closed form (13.28); the poles and residues (13.29); Example 13.1.1, pp. 606-607"
    pages: "599-607"
    role: Gauss's limit formula and the integration-by-parts route to it; the change of variables $(s,t)\mapsto(u,v)$ used for the reflection formula; the duplication formula and the double-factorial form of the half-integer values; the residues at the poles; the Maxwell-Boltzmann application
  - work: rhb-2006
    loc: "§18.12.1, eqs. (18.153)-(18.158), pp. 636-637; §18.12.2, the reflection identity from the Beta function, p. 639"
    pages: "636-637, 639"
    role: the integral definition, the functional equation by one integration by parts, $\Gamma(n+1) = n!$, the substitution $x = y^2$ and $\Gamma(1/2) = \sqrt\pi$, the statement of the reflection identity and the remark that the elementary proof covers only part of the range
  - work: hassani-2013
    loc: "§12.4, eqs. (12.9)-(12.22) and Box 12.4.1, pp. 378-381"
    pages: "378-381"
    role: analyticity of $\Gamma$ and the location of its poles from the iterated functional equation; $\Gamma(1/2)$ by substitution; the reflection formula and its restriction to $0 < \operatorname{Re} z < 1$ before continuation; the corollary $\Gamma(z)\Gamma(-z) = -\pi/(z\sin\pi z)$
  - work: folland-1999
    loc: "§2.3, pp. 58-59 (definition as a Lebesgue integral, the functional equation, continuation by recursion); §2.7, Props. 2.53-2.56 and Cor. 2.55, pp. 79-80"
    pages: "58-59, 79-80"
    role: the integrability estimates that make the Euler integral converge exactly on the right half-plane; continuation by iterating $\Gamma(z) = \Gamma(z+1)/z$; the surface measure of the unit sphere and the volume of the unit ball in terms of $\Gamma$; the half-integer values
  - work: strauss-2008
    loc: "§A.5, eqs. (1)-(4), p. 425; §10.5, the Bessel series (4), p. 283"
    pages: "283, 425"
    role: the three basic properties stated for real argument with the one-line proofs, the closed form $\Gamma(n+1/2) = (2n)!\sqrt\pi/(n!\,2^{2n})$, and the appearance of $1/\Gamma$ in the coefficients of the Bessel series
---

:::definition[Euler's integral]{provenance=adapted src="arfken-2013:§13.1, eq. (13.5), p. 600; rhb-2006:eq. (18.153), p. 636; hassani-2013:eq. (12.9), p. 378; folland-1999:§2.3, p. 58; strauss-2008:§A.5, p. 425"}
For $z \in \mathbb{C}$ with $\operatorname{Re} z > 0$, the **Gamma function** is

$$
\Gamma(z) \;=\; \int_0^{\infty} t^{\,z-1} e^{-t}\,dt ,
\qquad t^{\,z-1} := e^{(z-1)\ln t} \ \ (t > 0).
$$

The integral converges absolutely exactly on this half-plane. Write $x = \operatorname{Re} z$, so that $\lvert t^{\,z-1}e^{-t}\rvert = t^{\,x-1}e^{-t}$. Near $t = 0$ the exponential is bounded between two positive constants and $\int_0^1 t^{\,x-1}dt$ is finite if and only if $x > 0$; near $t = \infty$ the factor $e^{-t}$ beats every power, so the tail converges for every $z$. The same estimate shows that the convergence is uniform on each strip $0 < a \le x \le b < \infty$.

Two changes of variable give forms that occur as often as the original. Substituting $t = y^2$,

$$
\Gamma(z) \;=\; 2\int_0^{\infty} y^{\,2z-1} e^{-y^2}\,dy ,
$$

which connects $\Gamma$ to the Gaussian integrals (:ref[]{to=found.gaussian-integrals}); and substituting $t = \ln(1/\tau)$,

$$
\Gamma(z) \;=\; \int_0^{1} \Bigl(\ln\tfrac1\tau\Bigr)^{z-1} d\tau .
$$

Both are listed by :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eqs. (13.6)-(13.7), p. 600"}, the first also by :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="eq. (18.157), p. 636"}.
:::

:::statement[Properties of $\Gamma$]{provenance=adapted src="arfken-2013:§13.1, eqs. (13.1), (13.2), (13.4), (13.8), (13.23), (13.27)-(13.29), pp. 599-604; rhb-2006:eqs. (18.154)-(18.158), pp. 636-637; hassani-2013:Box 12.4.1 and eqs. (12.11), (12.13), (12.20), (12.22), pp. 379-381; folland-1999:§2.3 and Prop. 2.56, pp. 58-59, 80; strauss-2008:§A.5, eqs. (1)-(4), p. 425"}
Let $\Gamma$ be given by Euler's integral on $H = \{\operatorname{Re} z > 0\}$.

1. **Analyticity and continuation.** $\Gamma$ is analytic on $H$ and has a unique extension to a function analytic on $\mathbb{C}\setminus\{0,-1,-2,\dots\}$ with a simple pole at each non-positive integer, the residue at $z = -n$ being $(-1)^n/n!$. (Carried out in :ref[]{to=complex.analytic-continuation}; see the remark below.) From here on $\Gamma$ means that extension.
2. **Functional equation.** $\Gamma(z+1) = z\,\Gamma(z)$ at every $z$ where both sides are finite. In particular $\Gamma(1) = 1$ and

   $$
   \Gamma(n+1) \;=\; n! \qquad (n = 0, 1, 2, \dots).
   $$
3. **Half-integer values.** $\Gamma(\tfrac12) = \sqrt\pi$, and for $n = 0, 1, 2, \dots$

   $$
   \Gamma\!\left(n+\tfrac12\right) \;=\; \frac{(2n)!}{4^{n}\,n!}\,\sqrt\pi .
   $$
4. **Gauss's limit formula.** For every $z \notin \{0,-1,-2,\dots\}$,

   $$
   \Gamma(z) \;=\; \lim_{n\to\infty} \frac{n!\; n^{z}}{z(z+1)(z+2)\cdots(z+n)} .
   $$

   :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.1), p. 599"} take this as their *first* definition of $\Gamma$ and derive the Euler integral from it; we go the other way.
5. **Reflection formula.** For $z \notin \mathbb{Z}$,

   $$
   \Gamma(z)\,\Gamma(1-z) \;=\; \frac{\pi}{\sin \pi z} ,
   \qquad\text{equivalently}\qquad
   \Gamma(z)\,\Gamma(-z) \;=\; -\,\frac{\pi}{z \sin \pi z} .
   $$
6. **Legendre's duplication formula.** For every $z$ at which both sides are finite,

   $$
   \Gamma(z)\,\Gamma\!\left(z+\tfrac12\right) \;=\; 2^{\,1-2z}\sqrt\pi\;\Gamma(2z) .
   $$
7. **No zeros.** $\Gamma(z) \ne 0$ for every $z$ in its domain; equivalently $1/\Gamma$ is entire.
:::

:::idea{provenance=original}
Everything follows from two computations. The functional equation is one integration by parts, and iterating it both extends $\Gamma$ to the left and turns it into the factorial on the integers. The second computation is the one that produces $\pi$: multiply two Euler integrals together and change variables in the plane. Taking the product in the form $\Gamma(z)\Gamma(1-z)$ and separating the total $s+t$ from the ratio $s/t$ makes the double integral factor, and the ratio integral is a standard keyhole-contour integral worth $\pi/\sin\pi z$; that is the reflection formula, and $\Gamma(1/2)^2 = \pi$ is its value at $z = 1/2$.

The duplication formula is not an integral computation at all. Both $\Gamma(z)\Gamma(z+\frac12)$ and $\Gamma(2z)$ are limits of explicit products of $2n+2$ linear factors, and those two products differ only by a factor free of $z$ together with a power $(n/(2n+1))^{2z}$. So the ratio of the two sides is a constant, which one reads off at $z = 1/2$. Gauss's limit formula, which supplies those products, is itself the Euler integral with $e^{-t}$ replaced by $(1-t/n)^n$ and then integrated by parts $n$ times.
:::

:::proof{provenance=adapted src="arfken-2013:§13.1, eqs. (13.9)-(13.14) and (13.24)-(13.29), pp. 601-604; rhb-2006:§18.12.1, p. 636; hassani-2013:eqs. (12.11)-(12.13) and (12.20)-(12.22), pp. 379-381; folland-1999:§2.3, pp. 58-59; strauss-2008:§A.5, p. 425"}
**(2) The functional equation.** Fix $\operatorname{Re} z > 0$ and integrate by parts on $[\varepsilon, T] \subset (0,\infty)$, differentiating $t^{\,z}$ and integrating $e^{-t}$:

$$
\int_{\varepsilon}^{T} t^{\,z} e^{-t}\,dt
\;=\; \varepsilon^{\,z}e^{-\varepsilon} - T^{\,z}e^{-T} + z\int_{\varepsilon}^{T} t^{\,z-1}e^{-t}\,dt .
$$

The first boundary term is $O(\varepsilon^{\operatorname{Re}z})$ and vanishes as $\varepsilon \to 0$ because $\operatorname{Re} z > 0$; the second vanishes as $T \to \infty$ because $e^{-T}$ beats $T^{\operatorname{Re}z}$. Hence $\Gamma(z+1) = z\Gamma(z)$ on $H$, and then on all of $\mathbb{C}\setminus\{0,-1,\dots\}$ because two functions analytic there and equal on $H$ are equal (:ref[]{to=complex.analytic-continuation}). Also $\Gamma(1) = \int_0^\infty e^{-t}dt = 1$, so induction gives $\Gamma(n+1) = n\Gamma(n) = \dots = n!$.

**(3) Half-integer values.** In the squared form of the definition put $z = \tfrac12$:

$$
\Gamma\!\left(\tfrac12\right) \;=\; 2\int_0^{\infty} e^{-y^2}\,dy \;=\; \int_{-\infty}^{\infty} e^{-y^2}\,dy \;=\; \sqrt\pi ,
$$

the last step by the Gaussian integral (:ref[]{to=found.gaussian-integrals}). Applying (2) $n$ times,

$$
\Gamma\!\left(n+\tfrac12\right) \;=\; \left(n-\tfrac12\right)\left(n-\tfrac32\right)\cdots\tfrac12 \cdot \sqrt\pi
\;=\; \frac{(2n-1)(2n-3)\cdots 1}{2^{n}}\,\sqrt\pi .
$$

Multiplying numerator and denominator by $(2n)(2n-2)\cdots 2 = 2^{n} n!$ turns the odd product into $(2n)!$ and gives the stated closed form. (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.28), p. 604"} write the same thing with double factorials, $(2n-1)!!\,\sqrt\pi/2^{n}$.)

**(4) Gauss's limit formula.** For $\operatorname{Re} z > 0$ and $n \in \mathbb{N}$ set

$$
F_n(z) \;=\; \int_0^{n} \Bigl(1 - \frac{t}{n}\Bigr)^{n} t^{\,z-1}\,dt .
$$

*Step 1: $F_n(z) \to \Gamma(z)$.* Since $\ln(1-u) \le -u$ on $[0,1)$, we have $0 \le (1-t/n)^n \le e^{-t}$ for $0 \le t \le n$, so the integrands are dominated by $t^{\,x-1}e^{-t}$, which is integrable on $(0,\infty)$ for $x = \operatorname{Re}z > 0$. Pointwise $(1-t/n)^n \to e^{-t}$ for each fixed $t > 0$. Dominated convergence (:ref[]{to=measure.dominated-convergence}) applied to the integrands extended by $0$ beyond $t = n$ gives $F_n(z) \to \Gamma(z)$.

*Step 2: evaluate $F_n(z)$.* Substituting $t = nu$,

$$
F_n(z) \;=\; n^{z}\int_0^1 (1-u)^{n} u^{\,z-1}\,du \;=\; n^{z}\,J_n(z),
\qquad J_m(w) := \int_0^1 (1-u)^{m} u^{\,w-1}\,du .
$$

Integrate $J_m(w)$ by parts for $m \ge 1$, differentiating $(1-u)^m$ and integrating $u^{\,w-1}$ to $u^{\,w}/w$. The boundary term vanishes at $u = 1$ because $m \ge 1$ and at $u = 0$ because $\operatorname{Re} w > 0$, leaving

$$
J_m(w) \;=\; \frac{m}{w}\,J_{m-1}(w+1) .
$$

This is the one place where $\operatorname{Re} w > 0$ is needed. Iterating $n$ times and finishing with $J_0(w) = \int_0^1 u^{\,w-1}du = 1/w$,

$$
J_n(z) \;=\; \frac{n}{z}\cdot\frac{n-1}{z+1}\cdots\frac{1}{z+n-1}\cdot\frac{1}{z+n}
\;=\; \frac{n!}{z(z+1)\cdots(z+n)} .
$$

Combining the two steps proves (4) on $H$. *Step 3: all other $z$.* Let $z \notin\{0,-1,-2,\dots\}$ and pick an integer $m \ge 1$ with $\operatorname{Re}(z+m) > 0$. Writing $P_n(w) = w(w+1)\cdots(w+n)$, the exact algebraic identity

$$
\frac{n!\,n^{z}}{P_n(z)} \;=\; \frac{n!\,n^{\,z+m}}{P_n(z+m)}\cdot\frac{\prod_{j=n+1}^{\,n+m}(z+j)}{n^{m}\prod_{j=0}^{\,m-1}(z+j)}
$$

holds for every $n$, because $P_n(z+m)/P_n(z)$ is the quotient of those two products of $m$ factors. As $n \to \infty$ the first factor tends to $\Gamma(z+m)$ by steps 1-2, and $\prod_{j=n+1}^{n+m}(z+j)/n^{m}\to 1$ since each of the $m$ factors is $n(1+O(1/n))$. So the limit exists and equals $\Gamma(z+m)/\bigl(z(z+1)\cdots(z+m-1)\bigr)$, which is $\Gamma(z)$ by part (2). (The integral $J_n$ is a Beta integral, and this calculation is the special case $B(z, n+1)$ of :ref[]{to=spec.beta-function}.)

**(5) Reflection.** Take $0 < \operatorname{Re} z < 1$ and multiply two Euler integrals:

$$
\Gamma(z)\,\Gamma(1-z) \;=\; \int_0^{\infty}\!\!\int_0^{\infty} s^{\,z-1} t^{-z} e^{-(s+t)}\,ds\,dt .
$$

The double integral converges absolutely, since the modulus of the integrand is $s^{\,x-1}t^{-x}e^{-(s+t)}$ with $x = \operatorname{Re}z$ and its integral is the finite number $\Gamma(x)\Gamma(1-x)$; so the iterated integral may be treated as a double integral and the variables changed (:ref[]{to=found.change-of-variables}). Replace $(s,t)$ by the total and the ratio,

$$
u \;=\; s+t, \qquad v \;=\; s/t,
\qquad\text{so}\qquad s \;=\; \frac{uv}{1+v}, \quad t \;=\; \frac{u}{1+v},
$$

a $C^1$ bijection of $(0,\infty)^2$ onto itself with Jacobian determinant $-u/(1+v)^2$. The two powers collapse,

$$
s^{\,z-1}t^{-z} \;=\; \left(\frac{uv}{1+v}\right)^{z-1}\left(\frac{u}{1+v}\right)^{-z}
\;=\; \frac{(1+v)\,v^{\,z-1}}{u} ,
$$

and multiplying by the Jacobian factor $u/(1+v)^2$ leaves $v^{\,z-1}/(1+v)$, free of $u$. The integral therefore splits:

$$
\Gamma(z)\,\Gamma(1-z) \;=\; \left(\int_0^{\infty} e^{-u}\,du\right)\left(\int_0^{\infty} \frac{v^{\,z-1}}{1+v}\,dv\right)
\;=\; \int_0^{\infty} \frac{v^{\,z-1}}{1+v}\,dv .
$$

For $0 < \operatorname{Re} z < 1$ the remaining integral is the keyhole-contour integral $\int_0^\infty v^{p-1}(v+a)^{-1}dv = \pi a^{\,p-1}/\sin p\pi$ of :ref[]{to=complex.branch-cut-integrals} at $a = 1$, $p = z$, with value $\pi/\sin\pi z$. Both sides of the resulting identity are analytic on $\mathbb{C}\setminus\mathbb{Z}$, so it holds there. Finally, replacing $z$ by $-z$ and using $\Gamma(1+z) = z\Gamma(z)$ on the left gives $\Gamma(z)\Gamma(-z) = -\pi/(z\sin\pi z)$.

**(6) Duplication.** With $P_n$ as in step 3 above, (4) reads $\Gamma(w) = \lim_n n!\,n^{w}/P_n(w)$. Pair the factors of $P_n(z)$ and $P_n(z+\tfrac12)$:

$$
P_n(z)\,P_n\!\left(z+\tfrac12\right)
\;=\; \prod_{k=0}^{n}\left(z+k\right)\left(z+k+\tfrac12\right)
\;=\; \prod_{k=0}^{n}\frac{(2z+2k)(2z+2k+1)}{4}
\;=\; \frac{P_{2n+1}(2z)}{4^{\,n+1}} ,
$$

because the factors $2z+j$ for $j = 0,1,\dots,2n+1$ each occur exactly once. Hence, with $m = 2n+1$,

$$
\frac{\bigl(n!\,n^{z}/P_n(z)\bigr)\bigl(n!\,n^{z+1/2}/P_n(z+\tfrac12)\bigr)}{m!\,m^{2z}/P_m(2z)}
\;=\; \frac{(n!)^2\,\sqrt n\;4^{\,n+1}}{(2n+1)!}\cdot\left(\frac{n}{2n+1}\right)^{2z} .
$$

Let $n \to \infty$. The left side tends to $\Gamma(z)\Gamma(z+\tfrac12)/\Gamma(2z)$ by (4), a finite non-zero number when $\operatorname{Re}z > 0$. On the right, $(n/(2n+1))^{2z} \to 2^{-2z} \ne 0$. A quotient of two convergent sequences with non-zero limits converges, so the remaining factor $c_n = (n!)^2\sqrt n\,4^{\,n+1}/(2n+1)!$ converges as well, say to $c$; and $c_n$ does not involve $z$, so $c$ is one constant for all $z$. Hence

$$
\frac{\Gamma(z)\,\Gamma(z+\tfrac12)}{\Gamma(2z)} \;=\; c\,2^{-2z}
\qquad (\operatorname{Re} z > 0).
$$

Evaluate at $z = \tfrac12$: the left side is $\Gamma(\tfrac12)\Gamma(1)/\Gamma(1) = \sqrt\pi$ and the right side is $c/2$, so $c = 2\sqrt\pi$ and the displayed identity is $\Gamma(z)\Gamma(z+\tfrac12) = 2^{\,1-2z}\sqrt\pi\,\Gamma(2z)$. Both sides are meromorphic on $\mathbb{C}$, so this holds wherever they are finite. (Numerically, $c_n = 3.41855$, $3.53168$, $3.54477$ at $n = 10$, $10^2$, $10^4$, against $2\sqrt\pi = 3.5449077$.)

**(7) No zeros.** If $\Gamma(z_0) = 0$ for some $z_0$ in the domain, then $z_0 \notin \mathbb{Z}$ would force the left side of the reflection formula to vanish while $\pi/\sin\pi z_0$ is finite and non-zero, which is impossible; and at $z_0 = n \ge 1$ we have $\Gamma(n) = (n-1)! \ne 0$ by (2). So $\Gamma$ never vanishes, and $1/\Gamma$, which is analytic off the poles and takes the value $0$ at each of them, is entire. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\operatorname{Re} z > 0$ in the definition** is exactly the integrability condition at $t = 0$, as the estimate in the definition block shows; for $\operatorname{Re} z \le 0$ the integral diverges outright rather than converging conditionally, so the continuation cannot be obtained by reinterpreting it. :cite[Folland]{work=folland-1999 loc="§2.3, p. 58"} makes this the point of departure: the integral defines $\Gamma$ on the half-plane, and the functional equation then does the continuing.
- **The same condition is what makes the integration by parts work twice over:** it kills the boundary term $\varepsilon^{\,z}e^{-\varepsilon}$ in part (2) and the term at $u = 0$ in the recursion for $J_m$ in part (4).
- **Dominated convergence in part (4)** needs the inequality $(1-t/n)^n \le e^{-t}$, not merely the pointwise limit; without a dominating function the interchange of limit and integral is not automatic, because the interval of integration also grows.
- **$0 < \operatorname{Re} z < 1$ in part (5)** is needed twice: for absolute convergence of the double integral (at $x \le 0$ the $s$-integral diverges, at $x \ge 1$ the $t$-integral does), and for the keyhole evaluation of $\int_0^\infty v^{\,z-1}/(1+v)\,dv$. Only after both sides are known to be analytic does continuation extend the identity to all non-integral $z$. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§18.12.2, p. 639"} are explicit that the elementary argument gives the formula on this strip and that more is needed elsewhere.
- **At integers the reflection formula must be read as an identity of meromorphic functions.** At $z = n \ge 1$, $\Gamma(1-z)$ has a pole and $\sin \pi z = 0$, and the two singularities match; the useful content at those points is part (7) together with the pole structure of part (1).
- **Duplication at $2z \in \{0,-1,-2,\dots\}$** likewise compares two functions with poles at the same places, which is why we proved it first on $\operatorname{Re} z > 0$ and then continued.
:::

:::remark[Conventions, and what is proved where]{provenance=original}
The analyticity of $\Gamma$ on the right half-plane, the continuation by $\Gamma(z) = \Gamma(z+1)/z$, the simple poles at $0,-1,-2,\dots$ and the residues $(-1)^n/n!$ are proved in detail in :ref[]{to=complex.analytic-continuation}, where $\Gamma$ serves as the worked example of continuation by a functional relation; part (1) above only records the result, and this unit's own work is the functional equation, the limit formula, and the reflection and duplication formulas. Worth noting about that proof: the Leibniz rule for differentiating under the integral sign (:ref[]{to=found.differentiation-under-integral}) does *not* apply to Euler's integral, because it is stated for a bounded interval and a real parameter while here the interval is unbounded and the integrand unbounded at $t=0$; the analyticity is obtained instead by truncating the integral and applying Morera's theorem to the limit. The Leibniz rule does apply to each truncation $\int_{1/n}^{n}$, which is how the differentiated forms $\Gamma'(x) = \int_0^\infty t^{\,x-1}e^{-t}\ln t\,dt$ and its higher analogues are justified for real $x > 0$.

Three conventions worth keeping straight.

- **Argument shifts.** Many texts, :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.1-13.2, pp. 599-611"} among them, state results for $\Gamma(z+1)$ rather than $\Gamma(z)$, since $\Gamma(z+1) = z!$ when $z$ is a non-negative integer. Their duplication formula, $\Gamma(1+z)\Gamma(z+\frac12) = 2^{-2z}\sqrt\pi\,\Gamma(2z+1)$, becomes ours on applying the functional equation to $\Gamma(1+z)$ and $\Gamma(2z+1)$.
- **The factorial notation.** $z! $ for $\Gamma(z+1)$ at non-integral $z$ is used by :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="eqs. (18.155)-(18.156), p. 636"} and avoided by :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.1, p. 606"}. We write $\Gamma$ throughout and reserve $n!$ for integers.
- **Which property is the definition.** Euler's integral (here, and in :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 636"}, :cite[Hassani]{work=hassani-2013 loc="p. 378"}, :cite[Folland]{work=folland-1999 loc="p. 58"} and :cite[Strauss]{work=strauss-2008 loc="p. 425"}), Gauss's limit (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.1), p. 599"}), and the Weierstrass product $1/\Gamma(z) = z e^{\gamma z}\prod_{k\ge1}(1+z/k)e^{-z/k}$ (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.15), p. 602"}, :cite[Hassani]{work=hassani-2013 loc="eq. (12.14), p. 379"}) all define the same function; part (4) is the bridge between the first two, and taking reciprocals in part (4) and inserting $n^{-z} = e^{-z\ln n}$ gives the third, with the Euler-Mascheroni constant $\gamma$ appearing as $\lim_n(\sum_{k\le n}k^{-1} - \ln n)$. The product form is the natural starting point for :ref[]{to=spec.digamma-polygamma}.
:::

:::method[Reducing a quantity to $\Gamma$]{provenance=original}
1. **Powers times a stretched exponential.** To evaluate $\int_0^\infty x^{b} e^{-c x^{k}}\,dx$ with $c > 0$, $k > 0$ and $b > -1$, substitute $u = c x^{k}$. Then $x = (u/c)^{1/k}$, $dx = (u/c)^{1/k}k^{-1}u^{-1}du$ and

   $$
   \int_0^{\infty} x^{b} e^{-c x^{k}}\,dx \;=\; \frac{1}{k\,c^{(b+1)/k}}\;\Gamma\!\left(\frac{b+1}{k}\right).
   $$

   Check the exponent of $c$ by dimensions: $x$ scales as $c^{-1/k}$, so the integral scales as $c^{-(b+1)/k}$.
2. **Reduce the argument to $[1,2]$.** Use $\Gamma(z) = \Gamma(z+1)/z$ to step right until the argument lies in $[1,2]$, where $\Gamma$ is between $0.8856$ and $1$; or $\Gamma(z+1) = z\Gamma(z)$ to step left. This is both the numerically stable way to evaluate $\Gamma$ and the way to read a half-integer or negative value off $\Gamma(\tfrac12) = \sqrt\pi$.
3. **Use reflection when two arguments add to an integer.** A product $\Gamma(p)\Gamma(q)$ with $p + q = 1$ is $\pi/\sin\pi p$ with no further work; with $p+q = m \in \mathbb{Z}$, first shift by the functional equation until the sum is $1$.
4. **Use duplication when two arguments differ by $\tfrac12$.** It converts $\Gamma(z)\Gamma(z+\frac12)$ into a single $\Gamma(2z)$, and read backwards it splits $\Gamma$ of an even multiple into two factors -- the move that generates half-integer values and that underlies the $\Gamma$-quotients in the coefficients of Bessel and hypergeometric series.
5. **For a large or complex argument, go asymptotic.** Use Stirling's series (:ref[]{to=asym.stirling-formula}) on $\ln\Gamma$, after shifting the argument into the right half-plane with reflection if necessary; summing $\ln\Gamma$ is also how large factorials are handled in statistical mechanics.
:::

:::example[Half-integer values and a Gaussian moment]{provenance=original}
*Goal:* evaluate $\displaystyle\int_0^{\infty} x^{6} e^{-x^{2}}\,dx$ and the two values $\Gamma(\tfrac72)$, $\Gamma(-\tfrac52)$.

1. *Reduce the integral.* Step 1 of the method with $b = 6$, $c = 1$, $k = 2$ gives

   $$
   \int_0^{\infty} x^{6}e^{-x^{2}}\,dx \;=\; \tfrac12\,\Gamma\!\left(\tfrac72\right).
   $$
2. *Step down to $\Gamma(\tfrac12)$.* By the functional equation three times,

   $$
   \Gamma\!\left(\tfrac72\right) \;=\; \tfrac52\cdot\tfrac32\cdot\tfrac12\,\Gamma\!\left(\tfrac12\right) \;=\; \tfrac{15}{8}\sqrt\pi \;=\; 3.3233510 .
   $$

   The closed form of part (3) agrees: $n = 3$ gives $(2n)!\sqrt\pi/(4^n n!) = 720\sqrt\pi/(64\cdot 6) = \tfrac{15}{8}\sqrt\pi$.
3. *The integral.* Therefore $\int_0^\infty x^6 e^{-x^2}dx = \tfrac{15}{16}\sqrt\pi = 1.6616755$. Numerical quadrature of the integral returns $1.6616755$.
4. *A negative argument.* Step the functional equation leftwards from $\Gamma(\tfrac12)$, i.e. use $\Gamma(z) = \Gamma(z+1)/z$ at $z = -\tfrac12, -\tfrac32, -\tfrac52$:

   $$
   \Gamma\!\left(-\tfrac12\right) = \frac{\sqrt\pi}{-\tfrac12} = -2\sqrt\pi, \qquad
   \Gamma\!\left(-\tfrac32\right) = \frac{-2\sqrt\pi}{-\tfrac32} = \tfrac43\sqrt\pi, \qquad
   \Gamma\!\left(-\tfrac52\right) = \frac{\tfrac43\sqrt\pi}{-\tfrac52} = -\tfrac{8}{15}\sqrt\pi .
   $$

   So $\Gamma(-\tfrac52) = -0.9453087$, and the sign alternates with each step, as it must: between consecutive poles $\Gamma$ keeps one sign, and the residues $(-1)^n/n!$ alternate.
5. *Cross-check by reflection.* With $z = \tfrac72$, part (5) gives $\Gamma(\tfrac72)\Gamma(-\tfrac52) = \pi/\sin(7\pi/2) = -\pi$. Indeed $3.3233510 \times (-0.9453087) = -3.1415927$.
:::

:::example[An algebraic integral by reflection]{provenance=original}
*Goal:* evaluate $\displaystyle I = \int_0^{\infty} \frac{dx}{x^{1/3}(1+x)}$ in closed form.

1. *Recognise the shape.* The proof of part (5) showed that for $0 < \operatorname{Re}z < 1$

   $$
   \int_0^{\infty}\frac{v^{\,z-1}}{1+v}\,dv \;=\; \Gamma(z)\,\Gamma(1-z) .
   $$

   Here $z - 1 = -\tfrac13$, so $z = \tfrac23$, which lies in the strip.
2. *Apply reflection.*

   $$
   I \;=\; \Gamma\!\left(\tfrac23\right)\Gamma\!\left(\tfrac13\right) \;=\; \frac{\pi}{\sin(2\pi/3)} \;=\; \frac{\pi}{\sqrt3/2} \;=\; \frac{2\pi}{\sqrt3} \;=\; 3.6275987 .
   $$
3. *Two independent checks.* The tabulated values $\Gamma(\tfrac13) = 2.6789385$ and $\Gamma(\tfrac23) = 1.3541179$ multiply to $3.6275987$; and numerical quadrature of $I$ gives $3.6275987$.
4. *A duplication check at a different point.* Reflection at $z = \tfrac14$ gives $\Gamma(\tfrac14)\Gamma(\tfrac34) = \pi/\sin(\pi/4) = \pi\sqrt2 = 4.4428829$. Duplication at $z = \tfrac14$ gives the same product by a different route, since $\Gamma(\tfrac14)\Gamma(\tfrac34) = 2^{1/2}\sqrt\pi\,\Gamma(\tfrac12) = \sqrt2\,\pi$. The tabulated values $\Gamma(\tfrac14) = 3.6256099$ and $\Gamma(\tfrac34) = 1.2254167$ confirm it.
:::

:::example[Mean and spread of a Weibull lifetime]{provenance=original}
A batch of pump bearings has time to failure $T$ with density $f(t) = (\beta/\tau)(t/\tau)^{\beta-1}e^{-(t/\tau)^{\beta}}$ on $t > 0$, with shape $\beta = \tfrac32$ and scale $\tau = 10$ h. Find the mean life and the standard deviation.

1. *Moments.* With $u = (t/\tau)^{\beta}$, so $t = \tau u^{1/\beta}$ and $f(t)\,dt = e^{-u}\,du$,

   $$
   \mathbb{E}[T^{\,r}] \;=\; \int_0^{\infty} t^{\,r} f(t)\,dt \;=\; \tau^{\,r}\int_0^{\infty} u^{\,r/\beta}e^{-u}\,du \;=\; \tau^{\,r}\,\Gamma\!\left(1 + \frac{r}{\beta}\right).
   $$

   The substitution is step 1 of the method in disguise; note that $\int_0^\infty u^{r/\beta}e^{-u}du$ is $\Gamma(1+r/\beta)$, not $\Gamma(r/\beta)$, because the exponent of $u$ is $r/\beta$ and Euler's integral carries $z-1$.
2. *Mean.* $r = 1$, $r/\beta = \tfrac23$:

   $$
   \mathbb{E}[T] \;=\; 10\,\Gamma\!\left(\tfrac53\right) \;=\; 10\cdot\tfrac23\,\Gamma\!\left(\tfrac23\right) \;=\; \tfrac{20}{3}(1.3541179) \;=\; 9.0274529\ \mathrm{h},
   $$

   using the functional equation to express $\Gamma(\tfrac53)$ through the value of $\Gamma$ at $\tfrac23$ already computed above.
3. *Second moment.* $r = 2$, $r/\beta = \tfrac43$, and two applications of the functional equation give $\Gamma(\tfrac73) = \tfrac43\cdot\tfrac13\,\Gamma(\tfrac13) = \tfrac49(2.6789385) = 1.1906393$. So $\mathbb{E}[T^2] = 100(1.1906393) = 119.06393\ \mathrm{h^2}$.
4. *Spread.* $\operatorname{Var}T = \mathbb{E}[T^{2}] - (\mathbb{E}[T])^{2}$. Carrying one more figure than the rounded values quoted above, $\mathbb{E}[T] = 9.02745293$ h and $\mathbb{E}[T^{2}] = 119.0639349\ \mathrm{h^2}$, so

   $$
   \operatorname{Var}T \;=\; 119.0639349 - 81.4949064 \;=\; 37.5690285\ \mathrm{h^2},
   $$

   and the standard deviation is $6.1293579$ h, about $68\%$ of the mean. Numerical integration of $\int t f(t)dt$ and $\int t^2 f(t)dt$ reproduces steps 2 and 3 to all digits shown.
5. *Sanity check.* At $\beta = 1$ the density is exponential with mean $\tau$ and standard deviation $\tau$, and the formulas give $\tau\Gamma(2) = \tau$ and $\tau\sqrt{\Gamma(3)-\Gamma(2)^2} = \tau$, as they must.
:::

:::application{provenance=adapted src="folland-1999:§2.7, Props. 2.54-2.56 and Cor. 2.55, pp. 79-80; strauss-2008:§10.5, eq. (4), p. 283; arfken-2013:Example 13.1.1, pp. 606-607"}
**Volumes in many dimensions.** The cleanest appearance of $\Gamma$ in analysis is the measure of the unit sphere and ball in $\mathbb{R}^n$. Integrating $e^{-\lvert x\rvert^2}$ over $\mathbb{R}^n$ in two ways -- as the $n$-th power of the one-dimensional Gaussian integral, and in polar coordinates, where the radial part is $\int_0^\infty r^{\,n-1}e^{-r^2}dr = \tfrac12\Gamma(n/2)$ by the squared form of the definition -- gives

$$
\sigma(S^{n-1}) \;=\; \frac{2\pi^{n/2}}{\Gamma(n/2)} ,
\qquad
\operatorname{vol}(B^{n}) \;=\; \frac{\sigma(S^{n-1})}{n} \;=\; \frac{\pi^{n/2}}{\Gamma\!\left(\tfrac n2 + 1\right)} ,
$$

the second by the functional equation, as :cite[Folland]{work=folland-1999 loc="Prop. 2.54 and Cor. 2.55, pp. 79-80"} sets it out. At $n = 3$ these are $4\pi = 12.566371$ and $\tfrac43\pi = 4.1887902$. Because $\Gamma$ grows faster than any power, the unit ball's volume collapses: it peaks at $n = 5$ with $\pi^{5/2}/\Gamma(7/2) = 5.2637890$ and has fallen to $3.2985089$ by $n = 9$. That collapse is the reason a Monte Carlo sampler that encloses a high-dimensional ball in its circumscribed cube almost never lands inside, and the reason phase-space volumes in statistical mechanics are computed through $\Gamma$ rather than geometrically.

**Thermal averages.** Classical statistical mechanics weights a state of energy $E$ by $e^{-\beta E}$ with $\beta = 1/k_{\mathrm B}T$. For a structureless ideal gas the density of states goes as $E^{1/2}$, so normalisation and the mean energy are both integrals of the form of step 1 of the method, and their ratio is a ratio of $\Gamma$'s:

$$
\langle E\rangle \;=\; \frac{\int_0^\infty E^{3/2}e^{-\beta E}\,dE}{\int_0^\infty E^{1/2}e^{-\beta E}\,dE}
\;=\; \frac{\Gamma(5/2)}{\beta\,\Gamma(3/2)} \;=\; \frac{3}{2}k_{\mathrm B}T ,
$$

since $\Gamma(5/2)/\Gamma(3/2) = 3/2$ by the functional equation; this is :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 13.1.1, pp. 606-607"}'s route to the equipartition result. The same reduction gives every moment of the Maxwell speed distribution $f(v) \propto v^{2}e^{-av^{2}}$, $a = m/(2k_{\mathrm B}T)$: applying step 1 of the method to numerator and denominator,

$$
\langle v^{n}\rangle \;=\; \frac{\int_0^\infty v^{\,n+2}e^{-av^{2}}dv}{\int_0^\infty v^{2}e^{-av^{2}}dv}
\;=\; \left(\frac{2k_{\mathrm B}T}{m}\right)^{n/2}\frac{\Gamma\!\left(\frac{n+3}{2}\right)}{\Gamma\!\left(\frac32\right)} .
$$

The power of $k_{\mathrm B}T/m$ carries the dimensions of $v^{n}$ and the $\Gamma$-quotient is the pure number; at $n = 1$ it returns the mean speed $\sqrt{8k_{\mathrm B}T/\pi m}$.

**Normalising special functions.** $1/\Gamma$, entire by part (7), is the standard normaliser in series solutions of differential equations: the Bessel function of order $s$ is

$$
J_s(z) \;=\; \sum_{j=0}^{\infty}\frac{(-1)^{j}}{\Gamma(j+1)\,\Gamma(j+s+1)}\left(\frac z2\right)^{2j+s} ,
$$

in which $\Gamma$ replaces the factorials of the integer-order case (:cite[Strauss]{work=strauss-2008 loc="§10.5, eq. (4), p. 283"}, whose series this is).

Two readings of that series should be kept apart. :cite[Strauss]{work=strauss-2008 loc="§10.5, p. 283"} treats negative integral $s$ as excluded: he states that the series solves Bessel's equation for every real $s$ *except* a negative integer, on the ground that $\Gamma$ is infinite at the negative integers, so that the series "is not defined" there. Our own reading, written as above with $1/\Gamma$ rather than with $\Gamma$ in a denominator, is that the coefficients remain defined at $s = -m$: the first $m$ of them carry $1/\Gamma$ of a non-positive integer, which is $0$ by part (7), so those terms drop out and what is left sums to $(-1)^{m}J_{m}$ -- a solution, but not a new one. The restriction Strauss places on the order is therefore a restriction on getting a *second* solution, which is the same conclusion :ref[]{to=spec.bessel-first-kind} reaches; nothing above is claimed on his authority beyond the displayed series.

The same role is played in the hypergeometric series (:ref[]{to=spec.hypergeometric}) and in the Gamma and Beta probability densities (:ref[]{to=spec.beta-function}).
:::
