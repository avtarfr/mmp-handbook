---
id: complex.taylor-series
title: Taylor series of analytic functions
kind: theorem
level: core
summary: An analytic function is the sum of its Taylor series on every open disc about a point that lies inside its domain of analyticity, so the radius of convergence is at least the distance to the boundary; consequently the zeros of a non-constant analytic function are isolated.
prereqs: [complex.cauchy-integral-formula, found.power-series, found.uniform-convergence, found.termwise-operations]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 5, §1.2, Thm 3 (the Taylor series), pp. 179-180; Ch. 4, §3.1, Thm 8 and the integral form (29) of the remainder, pp. 125-126; Ch. 4, §3.2, zeros of finite order and the uniqueness theorem, pp. 126-127"
    pages: "125-127, 179-180"
    role: statement that the expansion is valid in the largest open disc contained in the domain; remainder estimate; isolation of zeros and the identity theorem
  - work: arfken-2013
    loc: "§11.5, derivation of the Taylor expansion from Cauchy's integral formula, Eqs. (11.38)-(11.42), pp. 492-493, and the statement about the circle of convergence, p. 494"
    pages: "492-494"
    role: proof route through the geometric expansion of the Cauchy kernel; identification of the radius of convergence with the distance to the nearest singularity
  - work: hassani-2013
    loc: "§10.6.1-§10.6.2, Thm 10.6.4 (Taylor series) and the termwise operations preceding it, pp. 320-321"
    pages: "320-321"
    role: cross-check of the statement and of the coefficient formula
  - work: rhb-2006
    loc: "§24.11, Taylor and Laurent series, pp. 854-856"
    pages: "854-856"
    role: cross-check; the circle of convergence reaching the nearest singularity
---

:::note{provenance=original}
**What it means.** Real differentiability says nothing about power series: a $C^\infty$ function need not be the sum of its Taylor series anywhere. Complex differentiability is far stronger. One complex derivative on an open set forces the function to equal its Taylor series on every disc that fits inside that set, with coefficients $f^{(n)}(z_0)/n!$. So an analytic function is locally a power series, its radius of convergence is controlled by nothing but the location of the singularities, and two analytic functions that agree near a single point agree everywhere their common domain is connected.
:::

:::definition[Taylor series]{provenance=original}
Let $f$ be analytic on an open set $\Omega \subseteq \mathbb{C}$ and let $z_0 \in \Omega$. The **Taylor series of $f$ at $z_0$** is the power series

$$
T_{z_0}f(z) \;=\; \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}\,(z - z_0)^n ,
$$

which makes sense because an analytic function has derivatives of every order (:ref[]{to=complex.cauchy-integral-formula}). Write

$$
d(z_0) \;=\; \operatorname{dist}(z_0, \partial\Omega) \;=\; \inf\{\, \lvert z_0 - w\rvert : w \notin \Omega \,\}
$$

for the distance from $z_0$ to the complement of $\Omega$, with $d(z_0) = +\infty$ when $\Omega = \mathbb{C}$. Thus $D(z_0, d(z_0))$ is the largest open disc centred at $z_0$ contained in $\Omega$.
:::

:::statement[Taylor's theorem for analytic functions]{provenance=adapted src="ahlfors-1979:Ch. 5, §1.2, Thm 3, pp. 179-180; arfken-2013:§11.5, Eqs. (11.41)-(11.42), p. 493"}
Let $f$ be analytic on an open set $\Omega$ and let $z_0 \in \Omega$. Then

$$
f(z) \;=\; \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}\,(z-z_0)^n
\qquad \text{for every } z \text{ with } \lvert z - z_0 \rvert < d(z_0) ,
$$

the series converging absolutely there and uniformly on each closed disc $\lvert z - z_0\rvert \le r < d(z_0)$. Moreover, for every $\rho$ with $0 < \rho < d(z_0)$ the coefficients are given by the integral

$$
\frac{f^{(n)}(z_0)}{n!} \;=\; \frac{1}{2\pi i}\oint_{\lvert \zeta - z_0\rvert = \rho} \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\, d\zeta .
$$

In particular the radius of convergence $R$ of $T_{z_0}f$ satisfies $R \ge d(z_0)$.
:::

:::note[The rule as the physics literature states it]{provenance=adapted src="arfken-2013:§11.5, p. 494"}
Arfken, Weber and Harris give the radius of convergence as the distance from the centre of the expansion to the nearest singularity of the function, for a centre interior to a region of analyticity, and add that the expansion is unique, that convergence is guaranteed strictly inside that circle, and that on the circle itself the series may converge at some points and diverge at others. That is the working rule, and the statement below is the precise form of its "nearest singularity" clause: a boundary point counts only if it genuinely obstructs continuation.
:::

:::statement[The radius of convergence and the nearest singularity]{provenance=adapted src="arfken-2013:§11.5, p. 494"}
Let $f$ be analytic on the open set $\Omega$, let $z_0 \in \Omega$ with $d(z_0) < \infty$, and let $R$ be the radius of convergence of $T_{z_0}f$. Call a boundary point $w$ of $\Omega$ with $\lvert w - z_0\rvert = d(z_0)$ **blocking for $z_0$** if there is no $\rho > 0$ and no analytic function on $D(z_0, d(z_0)) \cup D(w,\rho)$ agreeing with $f$ on $D(z_0, d(z_0))$. If at least one boundary point at distance $d(z_0)$ is blocking for $z_0$, then

$$
R \;=\; d(z_0) .
$$
:::

:::statement[Zeros are isolated; the identity theorem]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.2, pp. 126-127"}
Let $f$ be analytic on a region (a connected open set) $\Omega$.

1. **No zeros of infinite order.** If $f(z_0) = 0$ and $f^{(n)}(z_0) = 0$ for every $n \ge 1$, then $f \equiv 0$ on $\Omega$.
2. **Factoring a zero.** If $f \not\equiv 0$ and $f(z_0) = 0$, there is a smallest $h \ge 1$ with $f^{(h)}(z_0) \ne 0$ -- the **order** of the zero -- and $f(z) = (z - z_0)^h g(z)$ with $g$ analytic on $\Omega$ and $g(z_0) \ne 0$.
3. **Isolation.** Hence the zeros of an analytic $f \not\equiv 0$ are isolated: each has a punctured neighbourhood free of zeros.
4. **Identity theorem.** If $f$ and $g$ are analytic on $\Omega$ and the set $\{z \in \Omega : f(z) = g(z)\}$ has an accumulation point in $\Omega$, then $f = g$ on all of $\Omega$.
:::

:::idea{provenance=original}
Cauchy's integral formula already writes $f(z)$ as an integral in which $z$ appears only through the kernel $1/(\zeta - z)$. Everything follows from expanding that one kernel. On a circle of radius $\rho$ about $z_0$, and for $z$ inside, the ratio $(z-z_0)/(\zeta - z_0)$ has modulus $\lvert z - z_0\rvert/\rho < 1$, so the kernel is a geometric series in that ratio, converging uniformly in $\zeta$. Integrating term by term turns the single integral into a power series whose coefficients are exactly the Cauchy integrals for the derivatives. Since $\rho$ may be taken as close to $d(z_0)$ as we like, the series represents $f$ on the whole open disc of radius $d(z_0)$.

The statement about zeros is a corollary of the same expansion. If all derivatives vanish at $z_0$ the series is identically zero, so $f$ vanishes on a disc; a connectedness argument then spreads this over $\Omega$. Otherwise the first non-vanishing coefficient lets us factor out a power of $z - z_0$, and what remains is continuous and non-zero at $z_0$, hence non-zero nearby.
:::

:::proof{provenance=adapted src="arfken-2013:§11.5, Eqs. (11.38)-(11.42), pp. 492-493; ahlfors-1979:Ch. 4, §3.2, pp. 126-127"}
Fix $\rho$ with $0 < \rho < d(z_0)$ and let $C_\rho$ be the circle $\lvert \zeta - z_0\rvert = \rho$, positively oriented. The closed disc bounded by $C_\rho$ lies in $\Omega$, so for every $z$ with $\lvert z - z_0 \rvert < \rho$ Cauchy's integral formula (:ref[]{to=complex.cauchy-integral-formula}) gives

$$
f(z) \;=\; \frac{1}{2\pi i}\oint_{C_\rho} \frac{f(\zeta)}{\zeta - z}\, d\zeta .
$$

**Step 1: expand the kernel.** Put $q = q(\zeta) = (z - z_0)/(\zeta - z_0)$. Since $\zeta - z = (\zeta - z_0) - (z - z_0) = (\zeta - z_0)(1 - q)$,

$$
\frac{1}{\zeta - z} \;=\; \frac{1}{\zeta - z_0}\cdot\frac{1}{1 - q}
\;=\; \sum_{n=0}^{\infty} \frac{(z-z_0)^n}{(\zeta - z_0)^{n+1}} ,
$$

by the geometric series, which is legitimate because $\lvert q \rvert = \lvert z - z_0\rvert/\rho =: q_0 < 1$ for every $\zeta$ on $C_\rho$.

**Step 2: the expansion is uniform on the circle.** Since $f$ is continuous on the compact set $C_\rho$, it is bounded there: $\lvert f\rvert \le M$ on $C_\rho$ for some finite $M$. The $n$-th term of the series obtained by multiplying the last display by $f(\zeta)$ therefore has modulus at most $M q_0^{\,n}/\rho$ at every point of $C_\rho$, and $\sum_n M q_0^{\,n}/\rho$ converges because $q_0 < 1$. By the Weierstrass criterion (:ref[]{to=found.uniform-convergence}) the series $\sum_n f(\zeta)(z-z_0)^n(\zeta-z_0)^{-n-1}$ converges uniformly in $\zeta \in C_\rho$ to $f(\zeta)/(\zeta - z)$.

**Step 3: integrate term by term.** Uniform convergence on a curve of finite length permits termwise integration (:ref[]{to=found.termwise-operations}), the error being at most $2\pi\rho$ times the sup-norm of the tail. Hence

$$
f(z) \;=\; \sum_{n=0}^{\infty} \left( \frac{1}{2\pi i}\oint_{C_\rho} \frac{f(\zeta)}{(\zeta - z_0)^{n+1}}\, d\zeta \right) (z - z_0)^n .
$$

**Step 4: identify the coefficients.** The $n$-th bracket is precisely the Cauchy integral formula for the $n$-th derivative (:ref[]{to=complex.cauchy-integral-formula}), so it equals $f^{(n)}(z_0)/n!$. This proves both the expansion and the integral formula for the coefficients, for every $z$ in $\lvert z - z_0 \rvert < \rho$.

**Step 5: enlarge the disc.** The coefficients do not depend on $\rho$. Given any $z$ with $\lvert z - z_0\rvert < d(z_0)$, choose $\rho$ between $\lvert z - z_0\rvert$ and $d(z_0)$; Step 4 applies at that $z$. So the expansion holds on the whole disc $\lvert z - z_0 \rvert < d(z_0)$, and its radius of convergence is at least $d(z_0)$. Absolute convergence inside the disc of convergence, and uniform convergence on closed subdiscs, are properties of any power series (:ref[]{to=found.power-series}).

**Step 6: the radius is exactly $d(z_0)$ when a boundary point is blocking.** Suppose, for a contradiction, that $R > d(z_0)$, and let $w$ be a boundary point at distance $d(z_0)$ which is blocking for $z_0$; by the hypothesis of that statement, $d(z_0)$ is finite. The sum $S$ of the Taylor series is analytic on $D(z_0,R)$ (:ref[]{to=found.power-series}) and, by Step 5, agrees with $f$ on $D(z_0,d(z_0))$. Choose any finite $\rho$ with $0 < \rho \le R - d(z_0)$ — for instance $\rho = R - d(z_0)$ when $R$ is finite, and $\rho = 1$ when $R = \infty$. Every $\zeta \in D(w,\rho)$ satisfies $\lvert \zeta - z_0\rvert \le \lvert \zeta - w\rvert + \lvert w - z_0\rvert < \rho + d(z_0) = R$, so $D(w,\rho) \subseteq D(z_0,R)$ and hence $S$ is analytic on $D(z_0,d(z_0)) \cup D(w,\rho)$ and agrees with $f$ on $D(z_0,d(z_0))$. That is exactly what "blocking" forbids. Therefore $R = d(z_0)$.

**Step 7: zeros.** Assume $f(z_0) = 0$ and all derivatives vanish at $z_0$. By Step 5 every term of the series vanishes, so $f \equiv 0$ on $D(z_0, d(z_0))$. Let $E_1$ be the set of points of $\Omega$ at which $f$ and all its derivatives vanish and $E_2$ its complement in $\Omega$. The argument just given shows $E_1$ is open; $E_2$ is open because $f$ and each $f^{(n)}$ are continuous. As $\Omega$ is connected and $E_1 \neq \emptyset$, we get $E_1 = \Omega$ and $f \equiv 0$. That is part 1.

If instead $f \not\equiv 0$ and $f(z_0) = 0$, part 1 forbids all derivatives from vanishing, so a least $h \ge 1$ with $f^{(h)}(z_0) \ne 0$ exists. The Taylor series then starts at $n = h$, and

$$
g(z) \;=\; \sum_{m=0}^{\infty} \frac{f^{(m+h)}(z_0)}{(m+h)!}\,(z-z_0)^m
$$

is analytic on $D(z_0, d(z_0))$ with $g(z_0) = f^{(h)}(z_0)/h! \ne 0$ and $f(z) = (z-z_0)^h g(z)$ there. Away from $z_0$ we may simply define $g(z) = f(z)/(z-z_0)^h$, which is analytic on $\Omega \setminus \{z_0\}$ and agrees with the series on the punctured disc, so the two definitions patch to a single analytic $g$ on $\Omega$. That is part 2. Since $g$ is continuous and $g(z_0) \ne 0$, $g$ is non-zero on some disc about $z_0$, where therefore the only zero of $f$ is $z_0$ itself: part 3.

For part 4, set $F = f - g$, analytic on $\Omega$, and let $z_*$ be an accumulation point in $\Omega$ of the zero set of $F$. If $F \not\equiv 0$ then by part 3 the zeros of $F$ are isolated, so $z_*$ has a punctured neighbourhood containing no zero of $F$ -- contradicting that $z_*$ is an accumulation point of zeros. (Note $F(z_*) = 0$ by continuity.) Hence $F \equiv 0$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="ahlfors-1979:Ch. 5, §1.2, p. 180"}
- **Analyticity on a *closed* disc inside $\Omega$ is what Step 1 needs.** The expansion of the kernel requires $\lvert z - z_0 \rvert < \lvert \zeta - z_0 \rvert$ for all $\zeta$ on the contour; that is why the contour is a circle centred at $z_0$ and why $z$ must lie strictly inside it.
- **$R \ge d(z_0)$, but equality needs the extra hypothesis.** Ahlfors (p. 180) points out two separate things: $R$ can be strictly larger than $d(z_0)$, and when it is, a point that lies in $\Omega$ *and* inside the circle of convergence need not be a point where the series sums to $f$. Take $\Omega = \mathbb{C}\setminus(-\infty, 0]$ and $f$ the principal branch of $\log$. At $z_0 = -1 + i\varepsilon$ with small $\varepsilon > 0$ the distance to the boundary is $\varepsilon$, while $R = \lvert z_0 \rvert \approx 1$. For $\varepsilon = 1/20$ the point $z_1 = -1 - i\varepsilon$ lies in $\Omega$ and inside the disc of convergence, yet the series sums to $\log z_1 + 2\pi i$, not $\log z_1$: summing to $0.0012484 + 3.1915510\,i$ against $f(z_1) = 0.0012484 - 3.0916343\,i$. This is exactly a case in which no boundary point at distance $d(z_0)$ is blocking: the nearest boundary point is $w = -1$, and the branch of $\log$ continued across the slit from above *is* analytic on $D(z_0,\varepsilon)\cup D(w,\rho)$ and agrees with $f$ on $D(z_0,\varepsilon)$. So the hypothesis of the blocking-point statement fails, as it must, and the value $R = \lvert z_0\rvert$ is not obtained from that statement at all: it comes from the coefficients directly. Since $(\log)^{(n)}(z_0) = (-1)^{n-1}(n-1)!/z_0^{\,n}$, the Taylor coefficients are $a_n = (-1)^{n-1}/(n z_0^{\,n})$, so $\lvert a_n\rvert^{1/n} = (n^{1/n}\lvert z_0\rvert)^{-1} \to 1/\lvert z_0\rvert$ and Hadamard's formula gives $R = \lvert z_0\rvert$. Note that the word "blocking" is defined only for boundary points at distance $d(z_0)$, so it does not apply to $w = 0$ here, which is at distance $\lvert z_0\rvert \approx 1$ rather than $\varepsilon$.
- **Connectedness is used only in Step 7.** The conclusion "$f \equiv 0$ on $\Omega$" fails on a disconnected $\Omega$, where $f$ may vanish on one component and not on another. Isolation of zeros (part 3), being local, needs no connectedness.
- **"Accumulation point *in* $\Omega$" cannot be relaxed.** $f(z) = \sin(\pi/z)$ is analytic on $\Omega = \mathbb{C}\setminus\{0\}$ and vanishes at every $z = 1/n$, a set accumulating at $0$. But $0 \notin \Omega$, and $f \not\equiv 0$.
:::

:::example[Expanding a rational function, and reading off the radius]{provenance=original}
Expand $f(z) = 1/(z^2+1)$ about $z_0 = 1$.

**Partial fractions.** Since $z^2 + 1 = (z-i)(z+i)$,

$$
f(z) \;=\; \frac{1}{2i}\left( \frac{1}{z-i} - \frac{1}{z+i} \right).
$$

**Expand each term.** For $a \in \{i, -i\}$, write $z - a = (1 - a) + (z-1)$ and factor out $1-a$:

$$
\frac{1}{z-a} \;=\; \frac{1}{1-a}\cdot\frac{1}{1 + \dfrac{z-1}{1-a}}
\;=\; \sum_{n=0}^{\infty} \frac{(-1)^n (z-1)^n}{(1-a)^{n+1}} ,
\qquad \lvert z - 1\rvert < \lvert 1 - a\rvert = \sqrt{2}.
$$

**Combine.** Therefore $f(z) = \sum_{n\ge0} a_n (z-1)^n$ with

$$
a_n \;=\; \frac{(-1)^n}{2i}\left[ \frac{1}{(1-i)^{n+1}} - \frac{1}{(1+i)^{n+1}} \right].
$$

**Simplify.** Writing $1 \mp i = \sqrt 2\, e^{\mp i\pi/4}$ gives $(1-i)^{-(n+1)} = 2^{-(n+1)/2} e^{i(n+1)\pi/4}$ and $(1+i)^{-(n+1)} = 2^{-(n+1)/2}e^{-i(n+1)\pi/4}$, whose difference is $2^{-(n+1)/2}\cdot 2i \sin\!\big((n+1)\pi/4\big)$. Dividing by $2i$,

$$
\boxed{\;a_n \;=\; \frac{(-1)^n}{2^{(n+1)/2}}\,\sin\!\frac{(n+1)\pi}{4}\;}
$$

The first five coefficients are

$$
a_0 = \tfrac12, \quad a_1 = -\tfrac12, \quad a_2 = \tfrac14, \quad a_3 = 0, \quad a_4 = -\tfrac18 ,
$$

which match the derivatives of $f$ at $1$ directly: $f(1) = 1/2$, $f'(1) = -2z/(z^2+1)^2\big|_{1} = -1/2$, and so on.

**Check against the theorem.** The singularities of $f$ are the poles $\pm i$, each at distance $\lvert 1 \mp i\rvert = \sqrt 2$ from $z_0 = 1$. So $d(z_0) = \sqrt2$ and the radius of convergence should be $\sqrt 2$. The sine factor takes only the three values $0, \pm 1$ and $\pm 1/\sqrt2$, so

$$
\lvert a_n\rvert \;=\; \begin{cases}
2^{-(n+1)/2}, & n+1 \equiv 2 \pmod 4,\\
2^{-(n+2)/2}, & n+1 \text{ odd},\\
0, & n+1\equiv 0\pmod 4 .
\end{cases}
$$

In particular $\lvert a_n\rvert \le 2^{-(n+1)/2}$ for every $n$, with equality exactly when $n+1\equiv2\pmod4$ -- the first instances being $n=1$ and $n=5$, where $\lvert a_n\rvert$ is $1/2$ and $1/8$ -- while $\lvert a_0\rvert = 1/2$ is strictly below its bound $1/\sqrt2 = 0.70711$ and $\lvert a_2\rvert = 1/4$ strictly below $0.35355$. The upper bound gives $\limsup_n \lvert a_n\rvert^{1/n} \le 2^{-1/2}$, and along the subsequence $n = 1, 5, 9, \dots$ the equality case gives $\lvert a_n\rvert^{1/n} = 2^{-(n+1)/(2n)} \to 2^{-1/2}$. Hence $\limsup_n\lvert a_n\rvert^{1/n} = 2^{-1/2}$ and $R = \sqrt2$ by Hadamard's formula (:ref[]{to=found.power-series}). The vanishing of $a_3$ (and of every $a_n$ with $n \equiv 3 \pmod 4$) shows that individual coefficients may vanish without affecting $R$.
:::

:::example[A Taylor series with infinite radius]{provenance=original}
Let $f(z) = e^{-z^2}$, entire, and expand at $z_0 = 0$. Substituting $w = -z^2$ in the exponential series,

$$
e^{-z^2} \;=\; \sum_{m=0}^{\infty} \frac{(-1)^m z^{2m}}{m!} ,
$$

so $f^{(2m)}(0) = (-1)^m (2m)!/m!$ and $f^{(2m+1)}(0) = 0$. Since $\Omega = \mathbb{C}$ we have $d(0) = \infty$, and the theorem predicts $R = \infty$; Hadamard's formula agrees, because $\lvert a_{2m}\rvert^{1/2m} = (m!)^{-1/2m} \to 0$. As a numerical check at $z = 2$ the convergence is slow, because the terms grow to about $4^{m}/m!$ before falling: the partial sum through $m = 13$ is still only $0.01589$, but through $m = 25$ it is $0.0183156389$, against $e^{-4} = 0.0183156389$.
:::

:::application[Why perturbation series in physics stop converging]{provenance=original}
A physical quantity computed as a function of a coupling, a frequency or a temperature is often expanded in powers of that parameter, and the expansion is used far from where it was derived. Taylor's theorem says precisely how far one may go: the radius of convergence of the expansion about $z_0$ is the distance from $z_0$ to the nearest singularity of the analytic continuation of the quantity into the complex parameter plane -- even if that singularity sits at a *complex* value with no physical meaning.

Two consequences used routinely:

- **Response functions.** The polarisability or susceptibility of a damped oscillator, $\chi(\omega) = 1/(\omega_0^2 - \omega^2 - i\gamma\omega)$, is expanded in powers of $\omega$ for low-frequency work. Its poles sit at complex $\omega$ with $\lvert\omega\rvert \approx \omega_0$, so the low-frequency expansion converges only for $\lvert\omega\rvert \lesssim \omega_0$: the series knows about the resonance before any term looks resonant.
- **Virial and high-temperature expansions.** A singularity of the free energy at a complex value of the fugacity or of $1/T$ limits the expansion even when it lies off the physical axis. Finding where the series must fail is thus a question about complex singularities, not about the physical range.

The identity theorem is used just as often, in the opposite direction: if two calculations of the same analytic quantity agree on any curve segment, however short, they agree wherever both are defined. This is what licenses checking a closed-form answer against a series or an integral representation only in some convenient corner of parameter space.
:::
