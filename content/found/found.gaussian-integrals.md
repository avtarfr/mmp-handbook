---
id: found.gaussian-integrals
title: Gaussian integrals
kind: method
level: core
summary: Collects the one-dimensional Gaussian integral and its moments, the effect of completing the square in the exponent, and the $n$-dimensional formula $\int \exp(-\tfrac12 x^{\mathsf T}Ax + b^{\mathsf T}x)\,d^n x = (2\pi)^{n/2}(\det A)^{-1/2}\exp(\tfrac12 b^{\mathsf T}A^{-1}b)$ for symmetric positive definite $A$, with the recipe for reducing an exponent to that form.
prereqs: [found.change-of-variables, found.differentiation-under-integral, linalg.quadratic-forms, linalg.hermitian-spectral-theorem, measure.fubini-tonelli, complex.cauchy-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§6.4.2, pp. 202–204 (the error integral evaluated by squaring and passing to plane polar coordinates, with the squeeze between inscribed and circumscribed discs, and the substitution giving $\\int e^{-\\alpha x^2}dx$); §30.13, Eqs. (30.144)–(30.145), p. 1206 (matrix completion of the square); §30.15.2, pp. 1209–1210, Eq. (30.149) (the $n$-dimensional integral by orthogonal diagonalisation)"
    pages: "202-204, 1206, 1209-1210"
    role: the one-dimensional integral and its derivation route; the matrix completion of the square and the $n$-dimensional formula
  - work: arfken-2013
    loc: "§13.1, Eq. (13.5), p. 600 (the Euler integral defining $\\Gamma(z)$) and Eqs. (13.6), (13.8), p. 601 ($\\Gamma(z)$ as a Gaussian-type integral and $\\Gamma(1/2) = \\sqrt{\\pi}$); Exercise 13.1.10, p. 608 (the even and odd Gaussian moments over $(0,\\infty)$, in $\\Gamma$ and double-factorial form)"
    pages: "600-601, 608"
    role: the definition and value of the gamma function used here; the moment formulas
  - work: hassani-2013
    loc: "Example 11.3.8, pp. 352–353: $\\int_{-\\infty}^{\\infty} e^{iax - bx^2}\\,dx$ for $a \\in \\mathbb{R}$, $b > 0$, by completing the square and shifting the contour"
    pages: "352-353"
    role: the completed-square formula with an imaginary linear term, and the contour-shift justification
---

:::definition[Notation]{provenance=adapted src="arfken-2013:§13.1, Eq. (13.5), p. 600 and Eq. (13.8), p. 601"}
Throughout, $\alpha > 0$ and $n \in \mathbb{N}$.

- The **gamma function** is defined for $\operatorname{Re} z > 0$ by the Euler integral $\Gamma(z) = \int_0^\infty e^{-t} t^{z-1}\,dt$, which converges there; it satisfies $\Gamma(z+1) = z\Gamma(z)$, $\Gamma(k) = (k-1)!$ for $k \in \mathbb{N}$, and $\Gamma(1/2) = \sqrt{\pi}$. Only these facts are used below; for the full theory see :ref[the Gamma function]{to=spec.gamma-function}.
- The **double factorial** of an odd number is $(2m-1)!! = 1 \cdot 3 \cdot 5 \cdots (2m-1)$ for $m \ge 1$, with the convention $(-1)!! = 1$ so that the formulas below hold at $m = 0$. It is related to the gamma function by $\Gamma(m + \tfrac12) = (2m-1)!!\,\sqrt{\pi}/2^{m}$.
- A real symmetric $n \times n$ matrix $A$ is **positive definite** if $x^{\mathsf T} A x > 0$ for every $x \in \mathbb{R}^n \setminus \{0\}$, equivalently if all its eigenvalues are positive (:ref[quadratic forms]{to=linalg.quadratic-forms}).
- $d^n x$ denotes Lebesgue measure on $\mathbb{R}^n$, and an integral written $\int_{\mathbb{R}^n}$ is over all of $\mathbb{R}^n$. Only the symmetric part of a matrix in a quadratic exponent is ever visible, since $x^{\mathsf T} A x = x^{\mathsf T}\bigl(\tfrac12(A + A^{\mathsf T})\bigr)x$ for every $x$, so $A$ may be assumed symmetric without loss.
:::

:::statement[The one-dimensional Gaussian integral and its moments]{provenance=adapted src="rhb-2006:§6.4.2, pp. 202–204; arfken-2013:§13.1, Eq. (13.8), p. 601 and Exercise 13.1.10, p. 608"}
Let $\alpha > 0$.

1. **The integral.**
   $$
   \int_{-\infty}^{\infty} e^{-\alpha x^2}\, dx = \sqrt{\frac{\pi}{\alpha}} ,
   \qquad\text{equivalently}\qquad
   \int_{-\infty}^{\infty} e^{-x^2/(2\sigma^2)}\, dx = \sigma\sqrt{2\pi} \quad (\sigma > 0).
   $$
   In gamma-function form the same statement is $\Gamma(1/2) = \sqrt{\pi}$.
2. **Even moments.** For every integer $m \ge 0$,
   $$
   \int_{0}^{\infty} x^{2m} e^{-\alpha x^2}\, dx = \frac{\Gamma\!\left(m + \tfrac12\right)}{2\,\alpha^{\,m+1/2}} = \frac{(2m-1)!!}{2^{\,m+1}\alpha^{m}}\sqrt{\frac{\pi}{\alpha}},
   $$
   and, the integrand being even, twice that over the whole line:
   $$
   \int_{-\infty}^{\infty} x^{2m} e^{-\alpha x^2}\, dx = \frac{\Gamma\!\left(m + \tfrac12\right)}{\alpha^{\,m+1/2}} = \frac{(2m-1)!!}{(2\alpha)^{m}}\sqrt{\frac{\pi}{\alpha}} .
   $$
3. **Odd moments.** For every integer $m \ge 0$,
   $$
   \int_{0}^{\infty} x^{2m+1} e^{-\alpha x^2}\, dx = \frac{m!}{2\,\alpha^{\,m+1}},
   \qquad
   \int_{-\infty}^{\infty} x^{2m+1} e^{-\alpha x^2}\, dx = 0 ,
   $$
   the second because the integrand is odd and absolutely integrable. The half-line formula here is part (a) of Arfken's Exercise 13.1.10; part (b) of that exercise is the half-line even moment of part 2 above. The full-line values in parts 2 and 3 are obtained from those two by the parity of the integrand.
4. **Completing the square.** For $\alpha > 0$ and any $\beta \in \mathbb{C}$,
   $$
   \int_{-\infty}^{\infty} e^{-\alpha x^2 + \beta x}\, dx = \sqrt{\frac{\pi}{\alpha}}\; e^{\beta^2/(4\alpha)} ,
   $$
   the integral converging absolutely for every complex $\beta$. In particular, with $\beta = i b$ for real $b$,
   $$
   \int_{-\infty}^{\infty} e^{-\alpha x^2} e^{i b x}\, dx = \sqrt{\frac{\pi}{\alpha}}\; e^{-b^2/(4\alpha)} :
   $$
   the Fourier transform of a Gaussian is a Gaussian.
:::

:::statement[The multidimensional Gaussian integral]{provenance=adapted src="rhb-2006:§30.13, Eqs. (30.144)–(30.145), p. 1206 and §30.15.2, Eq. (30.149), pp. 1209–1210"}
Let $A$ be a real symmetric **positive definite** $n \times n$ matrix and let $b \in \mathbb{R}^n$. Then the integral below converges absolutely and

$$
\int_{\mathbb{R}^n} \exp\!\left( -\tfrac12\, x^{\mathsf T} A x + b^{\mathsf T} x \right) d^n x
= \frac{(2\pi)^{n/2}}{\sqrt{\det A}}\; \exp\!\left( \tfrac12\, b^{\mathsf T} A^{-1} b \right).
$$

Special cases and equivalent forms:

1. With $b = 0$: $\displaystyle \int_{\mathbb{R}^n} e^{-\frac12 x^{\mathsf T} A x}\, d^n x = (2\pi)^{n/2} (\det A)^{-1/2}$.
2. Writing $V = A^{-1}$, which is also symmetric positive definite, and shifting by $\mu \in \mathbb{R}^n$:
   $$
   \int_{\mathbb{R}^n} \exp\!\left( -\tfrac12 (x-\mu)^{\mathsf T} V^{-1} (x-\mu) \right) d^n x = (2\pi)^{n/2} (\det V)^{1/2},
   $$
   the normalisation of the multivariate Gaussian density with covariance $V$.
3. Without the factor $\tfrac12$: $\displaystyle \int_{\mathbb{R}^n} e^{- x^{\mathsf T} A x}\, d^n x = \pi^{n/2}(\det A)^{-1/2}$, from case 1 with $A$ replaced by $2A$.

If $A$ is symmetric but **not** positive definite, the integral diverges for every $b$: writing $A = Q\Lambda Q^{\mathsf T}$ with $Q$ orthogonal and substituting $x = Qy$, with $c = Q^{\mathsf T}b$, the integrand factorises and

$$
\int_{\mathbb{R}^n} \exp\!\left( -\tfrac12 x^{\mathsf T}Ax + b^{\mathsf T}x \right) d^n x = \prod_{i=1}^{n} \int_{-\infty}^{\infty} e^{-\lambda_i y_i^2/2 + c_i y_i}\, dy_i ,
$$

in which every factor is positive and any factor with $\lambda_i \le 0$ is $+\infty$.
:::

:::note{provenance=original}
**What it means.** Everything here comes from two facts: the single number $\int e^{-x^2}dx = \sqrt{\pi}$, which is not obtainable by antidifferentiation and is got instead by squaring the integral and passing to plane polar coordinates (hence this unit's place after :ref[change of variables]{to=found.change-of-variables}); and the fact that a positive definite quadratic form becomes a sum of squares in suitable coordinates, which turns the $n$-dimensional integral into a product of $n$ copies of the first fact. Every other formula is bookkeeping: completing the square removes a linear term at the cost of a constant, and differentiating the answer with respect to $\alpha$ or $b$ generates the moments.
:::

:::idea[One dimension]{provenance=original}
The single value $\int_{\mathbb{R}} e^{-x^2}dx = \sqrt{\pi}$ cannot be reached by antidifferentiation, so it is reached sideways: the *square* of the integral is an integral over the plane, and in polar coordinates the radial factor $\rho$ supplied by the area element is exactly what makes $e^{-\rho^2}\rho$ elementary to integrate. Because the plane is unbounded, the squeeze between the disc inscribed in a large square and the disc circumscribing it does the work of a convergence argument.

Everything else in the statement is a change of variable away. The substitution $u = \alpha x^2$ turns a half-line moment into the Euler integral for $\Gamma$, so the moments are gamma values; the odd full-line moments vanish by symmetry, which is legitimate only because the integrals converge absolutely. And a linear term in the exponent is removed by completing the square, which shifts the variable — by a real amount when $\beta$ is real, and by a complex one when it is not, in which case the shift is a deformation of the contour that costs nothing because $e^{-\alpha z^2}$ is entire.
:::

:::proof[One dimension]{provenance=adapted src="rhb-2006:§6.4.2, pp. 202–204; hassani-2013:Example 11.3.8, pp. 352–353"}
**Part 1.**

*Convergence.* The integrand is continuous and positive, and $e^{-\alpha x^2} \le e^{-\alpha \lvert x\rvert}$ for $\lvert x\rvert \ge 1$, whose integral over $\lvert x \rvert \ge 1$ is finite. So the integral converges absolutely for every $\alpha > 0$.

*Reduction to $\alpha = 1$.* The substitution $x = t/\sqrt{\alpha}$ is a linear bijection of $\mathbb{R}$ with $dx = \alpha^{-1/2}dt$, so $\int_{\mathbb{R}} e^{-\alpha x^2}dx = \alpha^{-1/2} I$ with $I = \int_{\mathbb{R}} e^{-t^2}dt$. Only $I$ has to be found.

*Truncate and square.* Put $I(a) = \int_{-a}^{a} e^{-t^2}dt$ for $a > 0$; then $I(a) \to I$ as $a \to \infty$. Since $e^{-x^2}e^{-y^2} = e^{-(x^2+y^2)}$ and the square $Q_a = [-a,a]^2$ is a product of intervals,
$$
I(a)^2 = \int_{Q_a} e^{-(x^2+y^2)}\, dx\, dy ,
$$
the double integral of a continuous function over a compact rectangle being the iterated one (:ref[iterated integrals]{to=found.change-of-variables}).

*Squeeze between two discs.* Write $D_R$ for the closed disc of radius $R$ about the origin. The square $Q_a$ contains $D_a$ and is contained in $D_{a\sqrt2}$, because its inradius is $a$ and its circumradius is $a\sqrt2$. The integrand is positive, so
$$
J(a) \le I(a)^2 \le J\bigl(a\sqrt2\bigr), \qquad J(R) = \int_{D_R} e^{-(x^2+y^2)}\,dx\,dy .
$$
This is the step that needs care, and it is why Riley, Hobson and Bence treat the unbounded region explicitly (pp. 203–204).

*Evaluate on a disc.* In plane polar coordinates the area element is $\rho\,d\rho\,d\varphi$ (:ref[change of variables]{to=found.change-of-variables}), so
$$
J(R) = \int_0^{2\pi}\!\!\int_0^{R} e^{-\rho^2}\rho\, d\rho\, d\varphi = 2\pi \left[ -\tfrac12 e^{-\rho^2} \right]_0^{R} = \pi\bigl(1 - e^{-R^2}\bigr) .
$$

*Conclude.* Hence $\pi(1 - e^{-a^2}) \le I(a)^2 \le \pi(1 - e^{-2a^2})$. Both bounds tend to $\pi$ as $a \to \infty$, so $I^2 = \pi$, and $I > 0$ because the integrand is positive; therefore $I = \sqrt{\pi}$ and $\int_{\mathbb{R}}e^{-\alpha x^2}dx = \sqrt{\pi/\alpha}$. Taking $\alpha = 1/(2\sigma^2)$ gives the second form, $\sqrt{2\pi\sigma^2} = \sigma\sqrt{2\pi}$.

*The gamma form.* In $\Gamma(1/2) = \int_0^\infty e^{-t}t^{-1/2}dt$ substitute $t = x^2$ with $x > 0$: then $dt = 2x\,dx$ and $t^{-1/2} = 1/x$, so $\Gamma(1/2) = 2\int_0^\infty e^{-x^2}dx = I = \sqrt{\pi}$, the last equality because the integrand is even.

**Part 2 (even moments).** On $(0,\infty)$ substitute $u = \alpha x^2$, an increasing $C^1$ bijection of $(0,\infty)$ onto itself, with $x = (u/\alpha)^{1/2}$ and $dx = \tfrac12 \alpha^{-1/2}u^{-1/2}du$. Then
$$
\int_0^\infty x^{2m}e^{-\alpha x^2}dx = \int_0^\infty \Bigl(\frac{u}{\alpha}\Bigr)^{m} e^{-u}\,\tfrac12 \alpha^{-1/2}u^{-1/2}\,du
= \frac{1}{2\,\alpha^{\,m+1/2}} \int_0^\infty u^{m-1/2}e^{-u}\,du = \frac{\Gamma(m+\tfrac12)}{2\,\alpha^{\,m+1/2}} ,
$$
the last integral being the Euler integral for $\Gamma(m+\tfrac12)$, convergent because $m - \tfrac12 > -1$.

The double-factorial form follows from $\Gamma(z+1) = z\Gamma(z)$ applied $m$ times:
$$
\Gamma\bigl(m+\tfrac12\bigr) = \bigl(m-\tfrac12\bigr)\bigl(m-\tfrac32\bigr)\cdots\tfrac12\,\Gamma\bigl(\tfrac12\bigr)
= \frac{(2m-1)(2m-3)\cdots 1}{2^{m}}\sqrt{\pi} = \frac{(2m-1)!!}{2^{m}}\sqrt{\pi} ,
$$
which at $m = 0$ reads $\Gamma(1/2) = \sqrt{\pi}$ because the product is empty and $(-1)!! = 1$. Substituting and separating one factor $\alpha^{-1/2}$,
$$
\frac{\Gamma(m+\tfrac12)}{2\alpha^{\,m+1/2}} = \frac{(2m-1)!!}{2^{\,m+1}\alpha^{m}}\sqrt{\frac{\pi}{\alpha}} .
$$
The integrand $x^{2m}e^{-\alpha x^2}$ is even and, by the computation just made, absolutely integrable over $(0,\infty)$; hence the full-line integral is twice the half-line one, which gives $(2m-1)!!\,(2\alpha)^{-m}\sqrt{\pi/\alpha} = \Gamma(m+\tfrac12)\alpha^{-(m+1/2)}$.

**Part 3 (odd moments).** On $(0,\infty)$ the same substitution $u = \alpha x^2$, now in the form $du = 2\alpha x\,dx$, absorbs one power of $x$:
$$
\int_0^\infty x^{2m+1}e^{-\alpha x^2}dx = \int_0^\infty \Bigl(\frac{u}{\alpha}\Bigr)^{m}e^{-u}\,\frac{du}{2\alpha} = \frac{\Gamma(m+1)}{2\,\alpha^{\,m+1}} = \frac{m!}{2\,\alpha^{\,m+1}} ,
$$
using $\Gamma(k) = (k-1)!$ for positive integers. Over the whole line the integrand is odd, and it is absolutely integrable because $\int_{\mathbb{R}}\lvert x\rvert^{2m+1}e^{-\alpha x^2}dx = 2\,m!/(2\alpha^{m+1}) < \infty$ by what has just been computed; so the contributions of $(0,\infty)$ and $(-\infty,0)$ are negatives of one another and may be added, giving $0$.

**Part 4 (completing the square).** Set $\gamma = \beta/(2\alpha) \in \mathbb{C}$. Expanding, $-\alpha(x-\gamma)^2 + \alpha\gamma^2 = -\alpha x^2 + 2\alpha\gamma x = -\alpha x^2 + \beta x$, and $\alpha\gamma^2 = \beta^2/(4\alpha)$. The integral converges absolutely for every $\beta \in \mathbb{C}$, since $\lvert e^{-\alpha x^2 + \beta x}\rvert = e^{-\alpha x^2 + (\operatorname{Re}\beta)x}$ and the exponent tends to $-\infty$ quadratically. So
$$
\int_{-\infty}^{\infty} e^{-\alpha x^2 + \beta x}dx = e^{\beta^2/(4\alpha)} \int_{-\infty}^{\infty} e^{-\alpha (x-\gamma)^2}\,dx ,
$$
and it remains to show the last integral is $\sqrt{\pi/\alpha}$ for every complex $\gamma$.

Write $\gamma = p + iq$ with $p, q$ real. Translating the real variable by $p$ leaves the integral unchanged, so we may take $\gamma = iq$, and the claim becomes that $e^{-\alpha z^2}$ has the same integral along the line $\operatorname{Im}z = -q$ as along the real axis. Integrate $e^{-\alpha z^2}$, an entire function, around the boundary of the rectangle with vertices $\pm R$ and $\pm R - iq$: the closed contour integral is zero by :ref[Cauchy's theorem]{to=complex.cauchy-theorem}. On the vertical side $z = R + is$, with $s$ between $0$ and $-q$, we have $\operatorname{Re}(z^2) = R^2 - s^2 \ge R^2 - q^2$, so $\lvert e^{-\alpha z^2}\rvert \le e^{-\alpha(R^2 - q^2)}$; the side has length $\lvert q\rvert$, so its contribution is at most $\lvert q\rvert e^{-\alpha(R^2-q^2)}$, which tends to $0$ as $R \to \infty$, and the same bound holds on the side at $-R$. Letting $R \to \infty$, the two horizontal sides therefore contribute equal and opposite amounts, which is the claim. This is the contour of Hassani's Example 11.3.8, used here for a general complex $\gamma$ rather than only a purely imaginary one. Finally, $\beta = ib$ with $b$ real gives $\beta^2/(4\alpha) = -b^2/(4\alpha)$. $\square$
:::

:::idea[Several dimensions]{provenance=original}
A positive definite quadratic form is a sum of squares in the right coordinates, and the right coordinates are reached by two volume-preserving moves: a translation that kills the linear term, and a rotation that diagonalises the matrix. After them the integrand is a product of $n$ one-variable Gaussians, so the integral is a product of $n$ copies of part 1, and the only trace of the matrix that survives is $\lambda_1\cdots\lambda_n = \det A$ under the square root. No new analysis is involved; this is why the $n$-dimensional formula is as cheap as the one-dimensional one.
:::

:::proof[Several dimensions]{provenance=adapted src="rhb-2006:§30.13, Eqs. (30.144)–(30.145), p. 1206 and §30.15.2, Eq. (30.149), pp. 1209–1210"}
**Step 1 (diagonalise).** $A$ is real symmetric, so $A = Q\Lambda Q^{\mathsf T}$ with $Q$ orthogonal and $\Lambda = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$ real (:ref[spectral theorem]{to=linalg.hermitian-spectral-theorem}). Positive definiteness of $A$ says exactly that every $\lambda_i > 0$ (:ref[eigenvalue test]{to=linalg.quadratic-forms}). Hence $\det A = \lambda_1\cdots\lambda_n > 0$ and $A$ is invertible.

**Step 2 (complete the square).** Put $c = A^{-1}b$, so that $Ac = b$. Expanding and using $A^{\mathsf T} = A$,
$$
-\tfrac12 (x-c)^{\mathsf T}A(x-c) = -\tfrac12 x^{\mathsf T}Ax + \tfrac12 x^{\mathsf T}Ac + \tfrac12 c^{\mathsf T}Ax - \tfrac12 c^{\mathsf T}Ac .
$$
Now $x^{\mathsf T}Ac = x^{\mathsf T}b = b^{\mathsf T}x$ and $c^{\mathsf T}Ax = (Ac)^{\mathsf T}x = b^{\mathsf T}x$, the second using the symmetry of $A$, so the two middle terms add to $b^{\mathsf T}x$; and $c^{\mathsf T}Ac = c^{\mathsf T}b = b^{\mathsf T}A^{-1}b$. Rearranging,
$$
-\tfrac12 x^{\mathsf T}Ax + b^{\mathsf T}x = -\tfrac12(x-c)^{\mathsf T}A(x-c) + \tfrac12\, b^{\mathsf T}A^{-1}b .
$$

**Step 3 (two volume-preserving substitutions).** Substitute $y = x - c$: a translation of $\mathbb{R}^n$ onto itself with Jacobian determinant $1$. Then substitute $y = Qz$: a linear bijection with $\lvert \det Q\rvert = 1$, since $Q^{\mathsf T}Q = \mathrm{I}$ forces $(\det Q)^2 = 1$. Both are covered by :ref[the change-of-variables theorem]{to=found.change-of-variables}, and under the second
$$
y^{\mathsf T}Ay = z^{\mathsf T}Q^{\mathsf T}AQz = z^{\mathsf T}\Lambda z = \sum_{i=1}^{n}\lambda_i z_i^2 .
$$

**Step 4 (factorise).** The constant from Step 2 comes out of the integral, leaving
$$
\int_{\mathbb{R}^n}\exp\Bigl(-\tfrac12 \sum_i \lambda_i z_i^2\Bigr) d^n z = \int_{\mathbb{R}^n} \prod_{i=1}^{n} e^{-\lambda_i z_i^2/2}\, d^n z = \prod_{i=1}^{n}\int_{-\infty}^{\infty} e^{-\lambda_i z_i^2/2}\,dz_i ,
$$
the exchange being legitimate for a non-negative measurable integrand (:ref[Tonelli]{to=measure.fubini-tonelli}) and each one-variable factor being finite because $\lambda_i > 0$. This also proves the absolute convergence asserted in the statement, the integrand being positive. By part 1 of the one-dimensional statement with $\alpha = \lambda_i/2$,
$$
\prod_{i=1}^{n}\sqrt{\frac{2\pi}{\lambda_i}} = \frac{(2\pi)^{n/2}}{\sqrt{\lambda_1\cdots\lambda_n}} = \frac{(2\pi)^{n/2}}{\sqrt{\det A}} .
$$

**Step 5 (assemble).** Multiplying by $e^{\frac12 b^{\mathsf T}A^{-1}b}$ from Step 2 gives the displayed formula.

**Step 6 (the three special cases).** Case 1 is $b = 0$. For case 2, note that $V = A^{-1}$ is symmetric with eigenvalues $1/\lambda_i > 0$, hence symmetric positive definite, and $\det V = 1/\det A$; applying case 1 to $V^{-1}$ after the translation $x \mapsto x - \mu$ gives $(2\pi)^{n/2}(\det V^{-1})^{-1/2} = (2\pi)^{n/2}(\det V)^{1/2}$. For case 3, replace $A$ by $2A$ in case 1 and use $\det(2A) = 2^{n}\det A$: the answer is $(2\pi)^{n/2}2^{-n/2}(\det A)^{-1/2} = \pi^{n/2}(\det A)^{-1/2}$.

**Step 7 (divergence without positive definiteness).** Steps 1 and 3 used only that $A$ is real symmetric, so for any such $A$ the integral equals $\prod_i \int_{\mathbb{R}} e^{-\lambda_i y_i^2/2 + c_i y_i}dy_i$ with $c = Q^{\mathsf T}b$, as recorded in the statement. Each factor is positive, and the $i$-th is finite only when $\lambda_i > 0$: it equals $\sqrt{2\pi/\lambda_i}\,e^{c_i^2/(2\lambda_i)}$ then, by part 4 of the one-dimensional statement; it is $\int_{\mathbb{R}} e^{c_i y}dy = +\infty$ when $\lambda_i = 0$ (whatever $c_i$ is), and $+\infty$ when $\lambda_i < 0$, the exponent then tending to $+\infty$ at one end at least. Since all factors are positive, a single infinite factor makes the product infinite, so the integral diverges whenever some eigenvalue fails to be positive — that is, whenever $A$ is not positive definite. $\square$
:::

:::method[Reducing a Gaussian integral to standard form]{provenance=adapted src="rhb-2006:§30.13, p. 1206 and §30.15.2, pp. 1209–1210; hassani-2013:Example 11.3.8, pp. 352–353"}
To evaluate $\displaystyle \int_{\mathbb{R}^n} P(x)\, e^{Q(x)}\, d^n x$, where $Q$ is a quadratic polynomial and $P$ a polynomial:

1. **Separate the exponent by degree.** Write $Q(x) = -\tfrac12 x^{\mathsf T} A x + b^{\mathsf T} x + c$ and replace $A$ by $\tfrac12(A + A^{\mathsf T})$, which changes nothing. Pull $e^{c}$ outside.
2. **Test positive definiteness of $A$:** all eigenvalues positive, or equivalently all $n$ leading principal minors of $A$ positive. If the test fails, stop; the integral diverges.
3. **Complete the square.** Using $A^{\mathsf T} = A$,
   $$
   -\tfrac12 x^{\mathsf T} A x + b^{\mathsf T} x = -\tfrac12 (x - A^{-1}b)^{\mathsf T} A\, (x - A^{-1}b) + \tfrac12\, b^{\mathsf T} A^{-1} b ,
   $$
   and substitute $y = x - A^{-1}b$: a translation, with Jacobian determinant $1$, so $d^n x = d^n y$ and the domain is still $\mathbb{R}^n$.
4. **Diagonalise.** Write $A = Q \Lambda Q^{\mathsf T}$ with $Q$ orthogonal and $\Lambda = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$ (:ref[spectral theorem]{to=linalg.hermitian-spectral-theorem}) and substitute $y = Qz$; since $\lvert\det Q\rvert = 1$, $d^n y = d^n z$, and the integral factorises into $\prod_i \int e^{-\lambda_i z_i^2/2}\,dz_i = \prod_i \sqrt{2\pi/\lambda_i} = (2\pi)^{n/2}(\det A)^{-1/2}$.
5. **Handle a polynomial prefactor $P$ by differentiation.** Each factor $x_j$ in $P$ is produced by $\partial/\partial b_j$ acting on $e^{b^{\mathsf T}x}$, so
   $$
   \int_{\mathbb{R}^n} x_{j_1}\cdots x_{j_k}\, e^{-\frac12 x^{\mathsf T}Ax + b^{\mathsf T}x}\, d^n x = \frac{\partial^k}{\partial b_{j_1} \cdots \partial b_{j_k}} \left[ \frac{(2\pi)^{n/2}}{\sqrt{\det A}} e^{\frac12 b^{\mathsf T}A^{-1}b} \right],
   $$
   evaluated at the wanted $b$ (usually $b = 0$). In one variable the same job is done by $\partial/\partial\alpha$: differentiating $\int e^{-\alpha x^2}dx = \sqrt{\pi/\alpha}$ $m$ times in $\alpha$ produces the even moment of order $2m$ with a factor $(-1)^m$. Differentiation under the integral sign is justified because every derivative is dominated, on a neighbourhood of the parameter value, by an integrable Gaussian times a polynomial (:ref[differentiation under the integral sign]{to=found.differentiation-under-integral}).
6. **A linear term that is not real.** The statement above assumes $b \in \mathbb{R}^n$, so a complex $b$ is outside it; the identity nevertheless persists, and the following justification is ours. With $x$ still real, $\lvert \exp(-\tfrac12 x^{\mathsf T}Ax + b^{\mathsf T}x)\rvert = \exp(-\tfrac12 x^{\mathsf T}Ax + (\operatorname{Re}b)^{\mathsf T}x)$, which is the real case already settled, so the integral converges absolutely. Diagonalise as in step 4 — $y = Qz$, with $c = Q^{\mathsf T}b \in \mathbb{C}^n$ — and split the absolutely convergent integral into a product by Fubini's theorem (:ref[Fubini and Tonelli]{to=measure.fubini-tonelli}); each factor is $\int_{\mathbb{R}} e^{-\lambda_i z_i^2/2 + c_i z_i}dz_i = \sqrt{2\pi/\lambda_i}\,e^{c_i^2/(2\lambda_i)}$ by part 4 of the one-dimensional statement, which is proved there for *every* complex coefficient. Multiplying the factors and using $\sum_i c_i^2/\lambda_i = c^{\mathsf T}\Lambda^{-1}c = b^{\mathsf T}Q\Lambda^{-1}Q^{\mathsf T}b = b^{\mathsf T}A^{-1}b$ returns the same closed form. The one-dimensional ingredient is where the complex shift is paid for: there the real variable cannot simply be translated, and a rectangular contour is closed instead, using that $e^{-\alpha z^2}$ is entire — Hassani's route for $\int e^{iax-bx^2}dx$.

**How it fails.** Step 2 is not a formality: symmetry of $A$ alone does not give convergence. Step 4 needs $A$ real symmetric, so that $Q$ can be taken orthogonal; a matrix with complex entries is outside the statement above, and extending the formula to one requires a choice of branch for $(\det A)^{-1/2}$. Purely imaginary exponents, $\int e^{i x^{\mathsf T}Ax}d^nx$ (Fresnel-type), are not covered at all: those integrals do not converge absolutely and need an oscillatory-integral argument.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and conventions that differ.**

- *Positive definiteness, not just symmetry.* Riley, Hobson and Bence's worked evaluation of $\int \exp(-\tfrac12 (x-\mu)^{\mathsf T} V^{-1}(x-\mu))\,d^n x$ (p. 1210) assumes only that $V$ is symmetric, and its orthogonal diagonalisation then gives $(2\pi)^{n/2}(\lambda_1\cdots\lambda_n)^{1/2}$. That step needs $\lambda_i > 0$ for every $i$: each factor is $\int e^{-y_i^2/(2\lambda_i)}dy_i$, which is $+\infty$ if $\lambda_i < 0$, while if some $\lambda_i = 0$ then $V$ is singular and $V^{-1}$ does not exist, so the integral is not defined; and $(\det V)^{1/2}$ would not be real if an odd number of eigenvalues were negative. In the setting of that section $V$ is a covariance matrix, where positive definiteness is automatic for a non-degenerate distribution; the statement above makes the hypothesis explicit because the formula needs it.
- *Why the $n$-dimensional case needs no new analysis.* Convergence of the factorised integral is absolute, so Tonelli's theorem lets the $n$-fold integral be written as a product (:ref[Fubini and Tonelli]{to=measure.fubini-tonelli}); the substitutions in steps 3 and 4 are linear changes of variables with $\lvert\det\rvert = 1$, covered by :ref[the change-of-variables theorem]{to=found.change-of-variables}.
- *The one-dimensional value is not an antiderivative.* $e^{-x^2}$ has no elementary antiderivative, which is why the standard route squares the integral, converts the resulting double integral to plane polar coordinates, and controls the unbounded region by squeezing the square $[-a,a]^2$ between the discs of radius $a$ and $a\sqrt{2}$ — the care Riley, Hobson and Bence take on pp. 203–204 precisely because the region is unbounded.
- *Normalisation conventions.* Three conventions for the exponent are in common use: $e^{-\alpha x^2}$ (giving $\sqrt{\pi/\alpha}$), $e^{-x^2/(2\sigma^2)}$ (giving $\sigma\sqrt{2\pi}$), and in $n$ dimensions $e^{-\frac12 x^{\mathsf T}Ax}$ versus $e^{-x^{\mathsf T}Ax}$, which differ by $2^{n/2}$ as recorded in case 3 above. Statistics and quantum field theory keep the factor $\tfrac12$; many methods texts omit it. Check which is in force before quoting a result.
- *Double factorial, and ranges of integration.* $(2m-1)!!$ denotes the product of the odd numbers up to $2m-1$, with $(-1)!! = 1$; Arfken's Exercise 13.1.10 writes the even moment both with $\Gamma(m+\tfrac12)$ and with the double factorial, and the two agree because $\Gamma(m+\tfrac12) = (2m-1)!!\sqrt{\pi}/2^{m}$. Both of his formulas are over $(0,\infty)$, which is why part 2 states the half-line value first and the full-line value as twice it. Some authors write $(2m)!/(2^m m!)$ for the same number.
- *The odd moments on the half-line are not zero.* Part 3 gives $m!/(2\alpha^{m+1})$ over $(0,\infty)$ and $0$ over $\mathbb{R}$; the second follows from the first only because the integral converges absolutely, so the two halves may be added. The symmetry argument is not available for a Gaussian multiplied by a non-integrable factor.
:::

:::example[One dimension: a moment, a linear term, and both at once]{provenance=original}
Take $\alpha = 2$ throughout and compute three integrals.

1. **A pure moment.** With $m = 2$ and $\alpha = 2$, part 2 of the one-dimensional statement gives
   $$
   \int_{-\infty}^{\infty} x^{4}e^{-2x^2}dx = \frac{(2\cdot 2 - 1)!!}{(2\cdot 2)^{2}}\sqrt{\frac{\pi}{2}} = \frac{3}{16}\sqrt{\frac{\pi}{2}} = \frac{3\sqrt{2\pi}}{32} = 0.2349964007\ldots
   $$
   *Independent check by the other route.* Differentiating $\int_{\mathbb{R}}e^{-\alpha x^2}dx = \sqrt{\pi}\,\alpha^{-1/2}$ twice in $\alpha$ (step 5 of the method) gives $\int_{\mathbb{R}}x^4 e^{-\alpha x^2}dx = \tfrac34\sqrt{\pi}\,\alpha^{-5/2}$, and at $\alpha = 2$ that is $\tfrac34\sqrt{\pi}\,2^{-5/2} = 0.2349964007$. Numerical quadrature agrees to ten digits.
2. **A linear term.** With $\beta = 3$, part 4 gives
   $$
   \int_{-\infty}^{\infty} e^{-2x^2 + 3x}dx = \sqrt{\frac{\pi}{2}}\;e^{9/8} = 1.2533141373 \times 3.0802168489 = 3.8604793227\ldots
   $$
   The exponent is largest at $x = \beta/(2\alpha) = 3/4$, where $-2x^2+3x = 9/8$, which is where the factor $e^{9/8}$ comes from.
3. **Both.** For the second moment with the linear term present, differentiate the answer to 2 twice in $\beta$ rather than inserting $x^2$ by hand. With $G(\beta) = \sqrt{\pi/\alpha}\,e^{\beta^2/(4\alpha)}$,
   $$
   G''(\beta) = \sqrt{\frac{\pi}{\alpha}}\;e^{\beta^2/(4\alpha)}\left[ \left(\frac{\beta}{2\alpha}\right)^{2} + \frac{1}{2\alpha} \right],
   $$
   so at $\alpha = 2$, $\beta = 3$ the bracket is $(3/4)^2 + 1/4 = 13/16 = 0.8125$ and
   $$
   \int_{-\infty}^{\infty} x^{2}e^{-2x^2+3x}dx = 3.8604793227 \times 0.8125 = 3.1366394497\ldots
   $$
   Quadrature returns $3.1366394497$. Sanity check on the bracket: it is $\langle x^2\rangle$ for the Gaussian with mean $3/4$ and variance $1/(2\alpha) = 1/4$, namely $(3/4)^2 + 1/4$, as it should be.
:::

:::example[Three dimensions with a linear term]{provenance=original}
Evaluate
$$
I = \int_{\mathbb{R}^3} \exp\!\left( -x_1^2 - x_2^2 - x_3^2 + x_1x_2 + x_2x_3 + x_1 + x_3 \right) d^3x .
$$

1. **Read off $A$ and $b$.** The quadratic part is $-\tfrac12 x^{\mathsf T}Ax$ and the linear part $b^{\mathsf T}x$ with
   $$
   A = \begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix},
   \qquad b = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix},
   $$
   since $-\tfrac12(2x_1^2+2x_2^2+2x_3^2 - 2x_1x_2 - 2x_2x_3)$ reproduces the quadratic terms. $A$ is already symmetric, so step 1 of the method changes nothing.
2. **Test positive definiteness.** The leading principal minors are $2$, $\det\begin{pmatrix}2&-1\\-1&2\end{pmatrix} = 3$ and $\det A = 2(4-1) + 1(-2-0) = 4$, all positive, so $A$ is positive definite by Sylvester's criterion (:ref[quadratic forms]{to=linalg.quadratic-forms}). As a cross-check the eigenvalues are $2-\sqrt2$, $2$ and $2+\sqrt2$, with product $(4-2)\cdot 2 = 4 = \det A$.
3. **Invert $A$.** Cofactor expansion gives
   $$
   A^{-1} = \frac{1}{4}\begin{pmatrix} 3 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 3 \end{pmatrix},
   $$
   which is verified by $A A^{-1} = \mathrm{I}$: the first column of the product is $\tfrac14(2\cdot 3 - 1\cdot 2,\; -3 + 4 - 1,\; -2 + 2)^{\mathsf T} = (1,0,0)^{\mathsf T}$, and similarly for the others.
4. **Evaluate the exponent.** $A^{-1}b = \tfrac14(3+1,\,2+2,\,1+3)^{\mathsf T} = (1,1,1)^{\mathsf T}$, so $b^{\mathsf T}A^{-1}b = 1 + 0 + 1 = 2$ and $\tfrac12 b^{\mathsf T}A^{-1}b = 1$.
5. **Assemble.**
   $$
   I = \frac{(2\pi)^{3/2}}{\sqrt{4}}\,e^{1} = \frac{(2\pi)^{3/2}e}{2} = \sqrt{2}\,e\,\pi^{3/2} = 21.4059392604\ldots
   $$
   Iterated numerical quadrature over $[-12,12]^3$ gives $21.40594$, which is the check.
6. **A moment of the same form.** Setting $b = 0$ and using step 5 of the method, $\int x_i x_j\,e^{-\frac12 x^{\mathsf T}Ax}d^3x$ divided by $\int e^{-\frac12 x^{\mathsf T}Ax}d^3x$ equals $(A^{-1})_{ij}$. So for the centred density proportional to $e^{-\frac12 x^{\mathsf T}Ax}$ the second moments are $\langle x_1^2\rangle = 3/4$, $\langle x_2^2\rangle = 1$ and $\langle x_1 x_3\rangle = 1/4$. The pair $x_1, x_3$ is the one pair that the exponent does *not* couple, yet its covariance is nonzero: correlations spread beyond the couplings, because it is $A^{-1}$ and not $A$ that gives the second moments. The end coordinates also fluctuate less than the middle one.
:::

:::application{provenance=original}
Gaussian integrals are the only multidimensional integrals that can be done in closed form in general, which is why so much of physics is arranged to look Gaussian.

- *Classical fluctuations of a harmonic system.* Three equal masses on a line, joined to each other and to two fixed walls by identical springs of stiffness $\kappa$, have potential energy
  $$
  U = \tfrac{\kappa}{2}\bigl[x_1^2 + (x_2-x_1)^2 + (x_3-x_2)^2 + x_3^2\bigr] = \tfrac12\, x^{\mathsf T}Kx , \qquad K = \kappa A ,
  $$
  with $A$ the matrix of the three-dimensional example above. In the canonical ensemble at temperature $T$ the displacements have density proportional to $e^{-U/k_BT}$, which is the Gaussian with $A_{\text{eff}} = K/k_BT$, so the configurational partition function is $(2\pi k_BT/\kappa)^{3/2}(\det A)^{-1/2} = \tfrac12 (2\pi k_BT/\kappa)^{3/2}$ and the second moments are
  $$
  \langle x_i x_j \rangle = k_BT\,(K^{-1})_{ij} = \frac{k_BT}{\kappa}\,(A^{-1})_{ij} ,
  $$
  so $\langle x_1^2\rangle = 0.75\,k_BT/\kappa$, $\langle x_2^2\rangle = k_BT/\kappa$ and $\langle x_1x_3\rangle = 0.25\,k_BT/\kappa$: the middle mass, held by softer effective restoring forces, wanders furthest. Summing the same formula recovers equipartition,
  $$
  \langle U \rangle = \tfrac12\sum_{i,j}K_{ij}\langle x_ix_j\rangle = \tfrac12 k_BT\operatorname{tr}\bigl(KK^{-1}\bigr) = \tfrac32 k_BT ,
  $$
  that is, $\tfrac12 k_BT$ per quadratic degree of freedom, for any positive definite $K$ whatever. The free energy $-k_BT\ln Z$ contains the term $\tfrac12 k_BT \ln \det K$, which is how the determinant of a stiffness matrix becomes a measurable quantity.
- *Wave packets and propagators.* Part 4 with $\beta = ib$ says that the Fourier transform of a Gaussian is a Gaussian of reciprocal width: a wave packet of position spread $\sigma$ has momentum spread $\hbar/(2\sigma)$, and the product is the minimum allowed by the uncertainty relation. The same formula, with $\alpha$ taken to the imaginary axis, is the free-particle propagator $\langle x\vert e^{-iHt/\hbar}\vert x_0\rangle$; and the Gaussian path integral of a quadratic action is the infinite-dimensional version of the formula of the second statement, with $(\det A)^{-1/2}$ becoming a functional determinant.
- *Error estimates and least squares.* A measurement with Gaussian errors of covariance $V$ has likelihood proportional to $\exp(-\tfrac12 (x-\mu)^{\mathsf T}V^{-1}(x-\mu))$, normalised by $(2\pi)^{n/2}(\det V)^{1/2}$ from case 2 of the second statement. Fitting parameters by maximising it is exactly minimising the quadratic form in the exponent, which is least squares; the confidence regions are its level sets, ellipsoids with axes along the eigenvectors of $V$ and semi-axes proportional to $\sqrt{\lambda_i}$, so the diagonalisation of step 4 of the method is also the statement that correlated errors can always be reported as independent ones in rotated variables.
:::
