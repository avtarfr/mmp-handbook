---
id: complex.elementary-functions
title: Complex numbers and elementary functions
kind: definition
level: core
summary: Polar form and de Moivre's theorem, the exponential as a power series with its addition theorem and period 2 pi i, the trigonometric and hyperbolic functions built from it, and the logarithm, argument and complex powers as its multivalued inverses.
prereqs: [found.power-series, found.absolute-convergence]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 2, §3.1–3.4, pp. 42–47; Ch. 1, §2.1, pp. 13–14 (polar form) and §2.2 'The Binomial Equation', Eqs. (19)–(20), pp. 15–16 (de Moivre and nth roots)"
    pages: "13-16, 42-47"
    role: exponential defined by its power series; existence of a smallest positive period; logarithm and argument as inverses; de Moivre's formula for integer exponents and the nth roots
  - work: rhb-2006
    loc: "Ch. 3, §3.3–3.7, pp. 93–103; Ch. 24, §24.4, Eqs. (24.20)–(24.22), p. 834"
    pages: "93-103, 834"
    role: polar form and its algebra; the conventional range of the argument; de Moivre's theorem; roots of unity; the notation Ln/ln for the multivalued logarithm and its principal value; hyperbolic functions; the complex-exponential route to integrals of exponential times trigonometric functions
  - work: arfken-2013
    loc: "§1.8, Eq. (1.138), p. 60, restated as Eq. (11.55) in §11.6, p. 501"
    pages: "60, 501"
    role: the convention that ln z = ln r + i(theta + 2 n pi), and the remark that the n = 0 branch is the one usually called principal
---

:::definition[Polar form]{provenance=adapted src="rhb-2006:§3.3, pp. 93–94; ahlfors-1979:Ch. 1, §2.1, pp. 13–14"}
A complex number $z = x + iy$ with $x, y \in \mathbb{R}$ has **modulus** $\lvert z\rvert = \sqrt{x^2 + y^2}$ and, if $z \ne 0$, an **argument**: any real $\theta$ with

$$
x = \lvert z\rvert \cos\theta, \qquad y = \lvert z\rvert \sin\theta ,
$$

so that $z = r(\cos\theta + i\sin\theta)$ with $r = \lvert z\rvert$. The argument is fixed only up to an integer multiple of $2\pi$; the whole set of its values is written $\arg z$, and the one value in a chosen half-open interval of length $2\pi$ is a **principal** value. We follow :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (24.21), p. 834"} in taking that interval to be $(-\pi, \pi]$ and writing the principal argument $\operatorname{Arg} z$.

In polar form multiplication adds arguments and multiplies moduli: if $z_1 = r_1(\cos\theta_1 + i \sin\theta_1)$ and $z_2 = r_2(\cos\theta_2 + i\sin\theta_2)$, then the addition formulas for $\cos$ and $\sin$ give

$$
z_1 z_2 = r_1 r_2 \bigl(\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)\bigr),
$$

and for $z_2 \ne 0$ the quotient $z_1/z_2$ has modulus $r_1/r_2$ and argument $\theta_1 - \theta_2$. Once the exponential is available this is written $z = re^{i\theta}$, and the two rules become the single identity $e^{i\theta_1}e^{i\theta_2} = e^{i(\theta_1+\theta_2)}$.
:::

:::definition[The exponential]{provenance=adapted src="ahlfors-1979:Ch. 2, §3.1, Eq. (21), p. 43"}
For $z \in \mathbb{C}$ set

$$
e^z = \exp z = \sum_{n=0}^{\infty} \frac{z^n}{n!} .
$$

The series converges absolutely for every $z$, because $\lvert z\rvert^n/n! \to 0$ faster than any geometric sequence; by :ref[the theory of power series]{to=found.power-series} its radius of convergence is infinite, the sum is differentiable term by term, and $(e^z)' = e^z$. For real $z$ it is the usual real exponential. Ahlfors takes the differential equation $f' = f$ with $f(0) = 1$ as the starting point and *derives* the series from it; we take the series as the definition and read the differential equation off it.
:::

:::statement[Properties of the exponential]{provenance=adapted src="ahlfors-1979:Ch. 2, §3.1 and §3.3, pp. 43, 45"}
1. **Addition theorem.** $e^{a+b} = e^a e^b$ for all $a, b \in \mathbb{C}$.
2. **No zeros.** $e^z \ne 0$ for every $z$, and $e^{-z} = 1/e^z$.
3. **Modulus.** $\overline{e^z} = e^{\bar z}$, hence $\lvert e^{x+iy}\rvert = e^x$ for real $x, y$; in particular $\lvert e^{iy}\rvert = 1$.
4. **Periodicity.** The periods of $e^z$ are exactly the numbers $i\omega$ with $\omega$ a period of $y \mapsto e^{iy}$, and these $\omega$ are exactly the integer multiples of one smallest positive period. That smallest positive period is denoted $2\pi$, so

   $$
   e^{z + 2\pi i} = e^z \quad\text{for all } z, \qquad e^{z} = 1 \iff z \in 2\pi i\,\mathbb{Z} .
   $$
5. **Surjectivity onto $\mathbb{C}\setminus\{0\}$.** For every $w \ne 0$ the equation $e^z = w$ has a solution, and its solutions form a single coset $z_0 + 2\pi i \,\mathbb{Z}$.
:::

:::idea{provenance=original}
Parts 1 to 3 are algebra on the series: the Cauchy product of two absolutely convergent exponential series is, by the binomial theorem, the exponential series of the sum. Part 4 is the only part with real content, and it is where the number $\pi$ enters. Nothing yet tells us that $e^z$ has any period at all, so we must *produce* one: truncating the real series for $\cos$ gives numerical inequalities sharp enough to show that $\cos$ changes sign before $\sqrt3$, and the first zero $y_0$ of $\cos$ delivers the period $4y_0$. Part 5 then splits $e^z = w$ into one real equation for $\lvert w\rvert$ and one equation on the unit circle.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 2, §3.1, p. 43 and §3.3, p. 45"}
**1. Addition theorem.** Both series converge absolutely, so their product may be summed by diagonals (:ref[absolute convergence]{to=found.absolute-convergence}):

$$
e^a e^b = \sum_{N=0}^\infty \sum_{k=0}^{N} \frac{a^k}{k!}\frac{b^{N-k}}{(N-k)!}
 = \sum_{N=0}^\infty \frac{1}{N!}\sum_{k=0}^N \binom{N}{k} a^k b^{N-k}
 = \sum_{N=0}^\infty \frac{(a+b)^N}{N!} = e^{a+b},
$$

the middle step being the binomial theorem.

**2. No zeros.** Put $b = -a$ in part 1: $e^a e^{-a} = e^0 = 1$. A product equal to $1$ has no zero factor.

**3. Modulus.** The coefficients $1/n!$ are real, so conjugating the series termwise gives $\overline{e^z} = e^{\bar z}$. Hence $\lvert e^{iy}\rvert^2 = e^{iy}\overline{e^{iy}} = e^{iy}e^{-iy} = 1$ for real $y$, and by part 1, $\lvert e^{x+iy}\rvert = \lvert e^x\rvert\,\lvert e^{iy}\rvert = e^x$, using that $e^x > 0$ for real $x$: for $x \ge 0$ every term of the series is non-negative and the first is $1$, and for $x < 0$ we have $e^x = 1/e^{-x} > 0$ by part 2.

**4. Periodicity.** *A period exists.* Write $C(y) = \tfrac12(e^{iy} + e^{-iy})$ and $S(y) = \tfrac{1}{2i}(e^{iy} - e^{-iy})$ for real $y$; from the series these are the real functions $\cos$ and $\sin$, with $C' = -S$, $S' = C$, $C(0)=1$, $S(0)=0$, and $C^2 + S^2 = 1$ because $C^2 + S^2 = e^{iy}e^{-iy} = 1$ by parts 1 and 2. In particular $\lvert C\rvert \le 1$ and $\lvert S \rvert \le 1$. Four successive integrations from $0$ now trap $C$ and $S$ between consecutive partial sums of their series. From $C \le 1$ and $S(0)=0$ we get $S(y) \le y$ for $y \ge 0$; integrating $C' = -S \ge -y$ gives $C(y) \ge 1 - y^2/2$; integrating $S' = C \ge 1 - y^2/2$ gives $S(y) \ge y - y^3/6$; integrating $C' = -S \le -y + y^3/6$ gives

$$
C(y) \le 1 - \frac{y^2}{2} + \frac{y^4}{24}, \qquad y \ge 0 .
$$

At $y = \sqrt3$ the right-hand side is $1 - \tfrac32 + \tfrac38 = -\tfrac18 < 0$. Since $C$ is continuous with $C(0) = 1$, it has a zero in $(0, \sqrt 3)$; let $y_0$ be the smallest one. From $C(y_0) = 0$ and $C^2 + S^2 = 1$ we get $S(y_0)^2 = 1$; and $S(y_0) > 0$, because $S(y) \ge y - y^3/6 > 0$ for $0 < y < \sqrt 6$ and $y_0 < \sqrt 3 < \sqrt 6$. Hence $S(y_0) = 1$, so

$$
e^{iy_0} = C(y_0) + iS(y_0) = i, \qquad e^{4iy_0} = i^4 = 1 :
$$

the number $4y_0$ is a period of $y \mapsto e^{iy}$.

*It is the smallest.* For $0 < y < y_0$ we have $C(y) > 0$ (by minimality of $y_0$ and continuity, since $C(0)=1$), so $S' = C > 0$ there and $S$ increases strictly from $S(0) = 0$. Hence $0 < S(y) < S(y_0) = 1$ on $(0,y_0)$, and therefore $C(y)^2 = 1 - S(y)^2 \in (0,1)$. So for $0 < y < y_0$ the number $e^{iy} = C(y) + iS(y)$ has both parts nonzero and is not one of $1, -1, i, -i$; consequently $e^{4iy} \ne 1$, because $w^4 = 1$ forces $w \in \{1,-1,i,-i\}$. No positive period is therefore smaller than $4y_0$.

*All periods are multiples.* Let $\omega > 0$ be a period and $\omega_0 = 4y_0$. Choose the integer $n$ with $n\omega_0 \le \omega < (n+1)\omega_0$. If $\omega \ne n\omega_0$ then $\omega - n\omega_0$ is a positive period smaller than $\omega_0$, which we have excluded. Finally, $e^{z+c} = e^z$ for all $z$ forces $e^c = 1$, so $\lvert e^c \rvert = 1$ gives $\operatorname{Re} c = 0$ by part 3, and then $c = i\omega$ with $\omega$ a period of $y \mapsto e^{iy}$. Writing $2\pi = 4y_0$ gives the displayed statement.

**5. Surjectivity.** Let $w \ne 0$ and seek $z = x+iy$. By part 3, $e^{x+iy} = w$ splits into $e^x = \lvert w\rvert$ and $e^{iy} = w/\lvert w\rvert$. The first has the unique real solution $x = \log\lvert w\rvert$, since the real exponential is a strictly increasing bijection of $\mathbb{R}$ onto $(0,\infty)$. For the second, the map $y \mapsto e^{iy}$ sends $[0, 2\pi)$ onto the unit circle: it is continuous; part 4 showed that $S > 0$ on $(0,y_0)$, so $C' = -S < 0$ there and $C$ decreases strictly from $C(0) = 1$ to $C(y_0) = 0$, which together with $C^2 + S^2 = 1$ and $S \ge 0$ traces the first quadrant of the circle exactly once, and the four reflections $e^{i(y + k\pi/2)} = i^k e^{iy}$ carry this arc onto the remaining three quadrants. Two solutions of $e^{iy} = w/\lvert w\rvert$ differ by a period, by part 4, so the solution set of $e^z = w$ is a single coset of $2\pi i\,\mathbb{Z}$. $\square$
:::

:::definition[Trigonometric and hyperbolic functions]{provenance=adapted src="ahlfors-1979:Ch. 2, §3.2, Eq. (23), p. 43; rhb-2006:§3.7.1–3.7.2, pp. 102–103"}
For $z \in \mathbb{C}$,

$$
\cos z = \frac{e^{iz} + e^{-iz}}{2}, \quad \sin z = \frac{e^{iz} - e^{-iz}}{2i}, \quad
\cosh z = \frac{e^{z} + e^{-z}}{2}, \quad \sinh z = \frac{e^{z} - e^{-z}}{2} ,
$$

with $\tan z = \sin z/\cos z$ and $\tanh z = \sinh z/\cosh z$ where the denominators do not vanish. Substituting the exponential series gives the familiar power series, so on $\mathbb{R}$ these are the usual functions; and $(\cos z)' = -\sin z$, $(\sin z)' = \cos z$. Euler's formula $e^{iz} = \cos z + i \sin z$ and the identity $\cos^2 z + \sin^2 z = 1$ are immediate from the definitions, as are

$$
\cosh z = \cos iz, \qquad \sinh z = -i \sin iz ,
$$

so the hyperbolic and circular functions are each other's restrictions to perpendicular lines. Separating real and imaginary parts, $\sin(x+iy) = \sin x\cosh y + i\cos x \sinh y$, whence $\lvert \sin(x+iy)\rvert^2 = \sin^2 x + \sinh^2 y$: unlike their real restrictions, $\sin$ and $\cos$ are unbounded on $\mathbb{C}$.
:::

:::definition[Logarithm, argument and powers]{provenance=adapted src="ahlfors-1979:Ch. 2, §3.4, p. 46; rhb-2006:§24.4, Eqs. (24.20)–(24.22), p. 834"}
For $w \ne 0$, a **logarithm** of $w$ is any solution of $e^z = w$. By part 5 of the statement above there are infinitely many, differing by multiples of $2\pi i$; their imaginary parts are exactly the values of $\arg w$, and the whole set is written

$$
\operatorname{Ln} w = \log\lvert w\rvert + i\arg w = \log \lvert w \rvert + i(\theta + 2k\pi), \quad k \in \mathbb{Z},
$$

with $\theta$ any fixed argument of $w$ and $\log$ the real logarithm of the positive number $\lvert w\rvert$. The number $0$ has no logarithm. The **principal value** $\ln w = \log\lvert w\rvert + i\operatorname{Arg} w$ takes $\theta \in (-\pi, \pi]$.

For $a \ne 0$ and $b \in \mathbb{C}$ the **power** is defined by

$$
a^{b} = \exp\bigl(b \operatorname{Ln} a\bigr),
$$

again a set of values, which differ by the factors $e^{2\pi i k b}$. It has a single value exactly when $b \in \mathbb{Z}$, and then agrees with the repeated product; it has $q$ values when $b = p/q$ in lowest terms with $q \in \mathbb{N}$; otherwise it has infinitely many. Its **principal value** uses $\ln a$.
:::

:::statement[de Moivre and the nth roots]{provenance=adapted src="rhb-2006:§3.4, Eq. (3.27), p. 95 and §3.4.2, p. 97; ahlfors-1979:Ch. 1, §2.2, Eqs. (19)–(20), pp. 15–16"}
For $\theta \in \mathbb{R}$ and $n \in \mathbb{Z}$,

$$
(\cos\theta + i \sin\theta)^n = \cos n\theta + i \sin n\theta
\qquad\text{(de Moivre's theorem).}
$$

For $a \ne 0$ with $a = \rho(\cos\varphi + i\sin\varphi)$ and $n \in \mathbb{N}$, the equation $z^n = a$ has exactly $n$ solutions,

$$
z_k = \rho^{1/n}\Bigl(\cos\frac{\varphi + 2k\pi}{n} + i \sin\frac{\varphi + 2k\pi}{n}\Bigr), \qquad k = 0, 1, \dots, n-1 ,
$$

where $\rho^{1/n}$ is the positive real $n$th root. They have equal modulus and equally spaced arguments, so they are the vertices of a regular $n$-gon centred at $0$. Taking $a = 1$ gives the $n$th **roots of unity** $1, \omega, \dots, \omega^{n-1}$ with $\omega = e^{2\pi i/n}$, and every solution of $z^n = a$ is $\omega^k z_0$ for one $k$.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 1, §2.2, pp. 15–16; rhb-2006:§3.4.2, p. 97"}
De Moivre's theorem is the addition theorem in polar clothing: $\cos\theta + i\sin\theta = e^{i\theta}$ by Euler's formula, and $(e^{i\theta})^n = e^{in\theta}$ for $n \ge 0$ by part 1 of the statement above and induction, while for $n < 0$ one uses $e^{-i\theta} = 1/e^{i\theta}$ from part 2.

For the roots, write $z = r e^{i\vartheta}$ with $r > 0$; this costs nothing, because $z^n = a \ne 0$ forces $z \ne 0$, and every nonzero $z$ has such a form by the definition of polar form. Then $z^n = r^n e^{in\vartheta}$, and $z^n = a = \rho e^{i\varphi}$ holds if and only if the moduli agree and the arguments agree modulo a period:

- $r^n = \rho$, which by strict monotonicity of $r \mapsto r^n$ on $(0,\infty)$ fixes $r = \rho^{1/n}$ uniquely;
- $e^{in\vartheta} = e^{i\varphi}$, which by part 4 means $n\vartheta - \varphi \in 2\pi\mathbb{Z}$, that is $\vartheta = (\varphi + 2k\pi)/n$ for some $k \in \mathbb{Z}$.

Two integers $k$ and $k'$ give the same $z$ exactly when $(k - k')/n \in \mathbb{Z}$, so $k = 0, 1, \dots, n-1$ list the solutions once each: there are exactly $n$. Their moduli are all $\rho^{1/n}$ and consecutive arguments differ by $2\pi/n$, which is the description of a regular $n$-gon. Dividing two solutions gives a solution of $z^n = 1$, which proves the last sentence. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses bite, and which convention is which.**

- *$0$ is excluded everywhere.* $e^z$ never vanishes, so $0$ has no logarithm and $0^b$ is not defined by the formula above; the $n$th-root count also needs $a \ne 0$, since $z^n = 0$ has the single root $0$ with multiplicity $n$.
- *Principal ranges differ between books.* :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§3.3, p. 93 and Eq. (24.21), p. 834"} use $-\pi < \theta \le \pi$, and we follow them throughout. :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 2, §3.4, p. 46"} normalises $\arg$ to $0 \le y < 2\pi$ when solving $e^{iy} = w/\lvert w\rvert$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§1.8, Eq. (1.138), p. 60 and §11.6, Eq. (11.55), p. 501"} fix no range at all: Eq. (1.138) carries the free integer $n$, and §11.6 says only that the branch $n = 0$ is the one usually called principal — their own Example 11.6.1 (p. 499) runs $\theta$ from $0$ to $2\pi$ and explicitly declines the value $-\pi$. All three readings give $\ln(-1) = i\pi$, but just below the negative real axis the first two differ by $2\pi i$: at $z = -1 - i\varepsilon$ the first gives an argument near $-\pi$ and the second one near $+\pi$.
- *De Moivre's theorem, for which exponents.* :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§3.4, Eq. (3.27), p. 95"} assert the identity for every exponent, real or complex alike. Our statement restricts it to $n \in \mathbb{Z}$, which is the form :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 1, §2.2, Eq. (20), p. 15"} gives, because for non-integer $n$ the left-hand side is a *set* of values and the right-hand side a single one, so the equation has to be read as "some value of the left side equals the right side". At $n = \tfrac12$ and $\theta = 3\pi$, for instance, the left side is $(\cos 3\pi + i \sin 3\pi)^{1/2} = (-1)^{1/2} = \pm i$ with principal value $+i$, while the right side is $\cos\tfrac{3\pi}{2} + i\sin\tfrac{3\pi}{2} = -i$: the two agree only after the other branch is chosen.
- *The addition law for $\operatorname{Ln}$ is a statement about sets.* $\operatorname{Ln}(z_1z_2) = \operatorname{Ln} z_1 + \operatorname{Ln} z_2$ holds as an equality of sets of complex numbers, but a chosen value on one side need only agree with one on the other up to $2\pi i$. For principal values it can fail outright: $\ln(-1) + \ln(-1) = 2\pi i$, while $\ln\bigl((-1)(-1)\bigr) = \ln 1 = 0$.
- *Powers are sets too*, so the school rules need care: $(a^b)^c = a^{bc}$ is false in general. The multivaluedness is not a defect to be suppressed but the beginning of :ref[branch points and branch cuts]{to=complex.branch-points-cuts}.
:::

:::example[Values, roots and a real-valued power]{provenance=original}
1. *A logarithm.* For $z = -1 + i\sqrt 3$ we have $\lvert z\rvert = 2$ and $\operatorname{Arg} z = 2\pi/3$ (the point lies in the second quadrant), so $\ln z = \log 2 + \tfrac{2\pi i}{3} \approx 0.693147 + 2.094395\,i$, and $\operatorname{Ln} z = \log 2 + i(2\pi/3 + 2k\pi)$.
2. *A power all of whose values are real.* Take the base $a = \tfrac{1}{\sqrt2}(1+i) = e^{i\pi/4}$, which has $\lvert a\rvert = 1$, and the purely imaginary exponent $b = 4i$. Then $\log\lvert a\rvert = 0$, so $\operatorname{Ln} a = i(\pi/4 + 2k\pi)$ and

   $$
   a^{b} = \exp\bigl(4i\cdot i(\pi/4 + 2k\pi)\bigr) = e^{-\pi - 8k\pi}, \qquad k \in \mathbb{Z},
   $$

   a set of positive *real* numbers: the principal value is $e^{-\pi} \approx 0.0432139$, and the next value up is $e^{7\pi}\approx 3.5533 \times 10^{9}$. The mechanism is visible in general. For a purely imaginary exponent $b = it$ with $t$ real, $b\operatorname{Ln}a = it\log\lvert a\rvert - t(\theta + 2k\pi)$, so the values of $a^{b}$ are $e^{-t(\theta + 2k\pi)}\,e^{it\log\lvert a\rvert}$: all of them are real exactly when $t\log\lvert a\rvert \in \pi\mathbb{Z}$, and all positive exactly when $t\log\lvert a\rvert \in 2\pi\mathbb{Z}$. Our base has $\lvert a \rvert = 1$, which is the easiest way to arrange it. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§3.5, p. 100"} make the same observation with $i^{-2i}$.
3. *A power that is not.* $(1+i)^{i}$ has principal value $\exp\bigl(i(\tfrac12\log 2 + i\pi/4)\bigr) = e^{-\pi/4}\bigl(\cos(\tfrac12 \log 2) + i \sin(\tfrac12\log 2)\bigr) \approx 0.428829 + 0.154872\,i$, since $\ln(1+i) = \tfrac12\log 2 + i\pi/4 \approx 0.346574 + 0.785398\,i$.
4. *Cube roots.* For $a = 8i$ we have $\rho = 8$, $\varphi = \pi/2$, so the roots are $2e^{i\pi/6}, 2e^{i5\pi/6}, 2e^{i3\pi/2}$, that is $\sqrt3 + i$, $-\sqrt3 + i$ and $-2i$. Check the first: $(\sqrt3+i)^3 = (\sqrt3+i)(3 + 2\sqrt3 i - 1) = (\sqrt3+i)(2 + 2\sqrt3 i) = 2\sqrt3 + 6i + 2i - 2\sqrt3 = 8i$.
5. *A sine off the real axis.* $\sin(1 + 2i) = \sin 1\cosh 2 + i \cos 1 \sinh 2 \approx 3.165779 + 1.959601\,i$, with $\lvert \sin(1+2i)\rvert^2 = \sin^2 1 + \sinh^2 2 \approx 13.86219$ — far outside the real range $[-1,1]$.
:::

:::example[A real integral through the complex exponential]{provenance=adapted src="rhb-2006:§3.6, Eq. (3.37), p. 101"}
The route is :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§3.6, Eq. (3.37), p. 101"}'s; the function and the numbers are ours. We want antiderivatives of $e^{-2x}\cos 5x$ and $e^{-2x}\sin 5x$, and then the value of $\int_0^\infty e^{-2x}\cos 5x\,dx$.

1. *One complex integrand instead of two real ones.* Both functions are components of $e^{(-2+5i)x} = e^{-2x}(\cos 5x + i \sin 5x)$, whose antiderivative is $e^{(-2+5i)x}/(-2+5i)$ because $\frac{d}{dx}e^{\lambda x} = \lambda e^{\lambda x}$ for complex $\lambda$ (differentiate the exponential series term by term). Rationalising with $\overline{(-2+5i)} = -2-5i$ and $\lvert -2+5i\rvert^2 = 29$,

   $$
   \int e^{(-2+5i)x}\,dx = \frac{(-2-5i)}{29}\,e^{-2x}\bigl(\cos 5x + i \sin 5x\bigr) + c .
   $$

2. *Separate the parts.* The real part of the right-hand side is $\tfrac{1}{29}e^{-2x}(-2\cos 5x + 5 \sin 5x)$ and the imaginary part is $\tfrac{1}{29}e^{-2x}(-2\sin 5x - 5\cos 5x)$, so

   $$
   \int e^{-2x}\cos 5x\,dx = \frac{e^{-2x}}{29}\bigl(5\sin 5x - 2\cos 5x\bigr) + c_1,
   \qquad
   \int e^{-2x}\sin 5x\,dx = -\frac{e^{-2x}}{29}\bigl(5\cos 5x + 2\sin 5x\bigr) + c_2 .
   $$

   Two antiderivatives for the price of one.
3. *Check by differentiating back.* For the first, $\tfrac{1}{29}e^{-2x}\bigl(-2(5\sin 5x - 2\cos 5x) + (25\cos 5x + 10 \sin 5x)\bigr) = \tfrac{1}{29}e^{-2x}\cdot 29\cos 5x = e^{-2x}\cos 5x$.
4. *A number to check against.* The improper integral $\int_0^\infty e^{-2x}\cos 5x\,dx$ converges absolutely, since $\lvert e^{(-2+5i)x}\rvert = e^{-2x}$ by part 3 of the statement above. The antiderivative tends to $0$ as $x \to \infty$ and equals $-2/29$ at $x = 0$, so the integral is $2/29 \approx 0.0689655$; likewise $\int_0^\infty e^{-2x}\sin 5x\,dx = 5/29 \approx 0.1724138$. Both agree with numerical quadrature to the digits shown. The pair is just $\int_0^\infty e^{(-2+5i)x}dx = 1/(2-5i) = (2+5i)/29$ split into its parts.
:::

:::application{provenance=original}
Every linear system driven at a single frequency is handled with these functions. A real signal $A\cos(\omega t + \phi)$ is written $\operatorname{Re}\bigl(\hat A e^{i\omega t}\bigr)$ with the complex amplitude $\hat A = Ae^{i\phi}$, so that amplitude and phase travel together in one number and differentiation becomes multiplication by $i\omega$. Impedances in AC circuit theory, the complex refractive index $n + i\kappa$ of an absorbing medium (where $\lvert e^{ikz}\rvert = e^{-\kappa \omega z/c}$ is the Beer-Lambert decay), and the $e^{-iEt/\hbar}$ phase of a stationary quantum state are all the same device.

The $n$th roots of unity are the characters of the cyclic group $\mathbb{Z}/n$ and so the entries of the discrete Fourier matrix (:ref[the DFT and FFT]{to=fourier.dft-fft}); in crystallography they are the allowed phase factors of a rotation axis, and the fact that the roots of $z^n = a$ sit at the vertices of a regular polygon is why normal modes of a ring of $n$ identical masses come in such symmetric families (:ref[normal modes]{to=linalg.normal-modes}). The unboundedness of $\sin$ and $\cos$ off the real axis, visible in $\lvert \sin(x+iy)\rvert^2 = \sin^2 x + \sinh^2 y$, is what makes evanescent waves possible: a "wavenumber" forced to be imaginary turns an oscillation into a growing or decaying exponential.
:::
