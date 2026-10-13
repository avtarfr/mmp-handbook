---
id: complex.pole-expansions-products
title: Pole expansions and infinite products
kind: theorem
level: advanced
summary: A function meromorphic in the whole plane can be written as a sum of its singular parts plus an entire remainder, and an entire function as a product over its zeros with exponential convergence factors; carrying both out for the sine gives the expansion of $\pi\cot\pi z$ and the product $\sin\pi z = \pi z\prod(1-z^2/n^2)$.
prereqs: [complex.residue-theorem, complex.laurent-series, complex.singularities, complex.taylor-series, complex.liouville-maximum-modulus, complex.cauchy-integral-formula, complex.elementary-functions, found.uniform-convergence, found.absolute-convergence, found.power-series, found.termwise-operations]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 5, §2.1, Thm 4 (Mittag-Leffler) and its proof, pp. 187-188; the expansions (9), (10), (11) for $\\pi^2/\\sin^2\\pi z$ and $\\pi\\cot\\pi z$, pp. 188-189; §2.2, Thms 5 and 6 on infinite products, pp. 191-192, with the remark on p. 193; §2.3, Thm 7 (Weierstrass), p. 195, canonical products and genus, p. 196, and the product (23)-(24) for $\\sin\\pi z$, p. 197"
    pages: "187-197"
    role: statements of all four theorems; the remainder estimate in the Mittag-Leffler proof; the Liouville route to the cotangent expansion; the elementary-factor estimate; the derivation of the sine product from the cotangent expansion
  - work: arfken-2013
    loc: "§11.7, Pole Expansion of Meromorphic Functions, Eq. (11.79) and its contour-integral proof, pp. 515-516, with Examples 11.7.3-11.7.4, Eqs. (11.80)-(11.81), pp. 516-518; Product Expansion of Entire Functions, Eqs. (11.87)-(11.90), pp. 519-520"
    pages: "515-520"
    role: the working physicist's form of the Mittag-Leffler expansion for simple poles, with its growth hypothesis and the proof by a contour integral of $f(w)/w(w-z)$; the pole expansions of $\\tan$ and $\\cot$; the passage from a pole expansion of $f'/f$ to a product for $f$
  - work: hassani-2013
    loc: "§12.1, the Mittag-Leffler expansion Eq. (12.1) and Proposition 12.1.1 with Eq. (12.2), pp. 363-364"
    pages: "363-364"
    role: cross-check of the simple-pole expansion and of the resulting product for an entire function with simple zeros
  - work: stein-shakarchi-2003
    loc: "Ch. 8, §1, Lemma 1.8 and Proposition 1.9, pp. 246-248"
    pages: "246-248"
    role: cross-check of the absolute-convergence criterion for infinite products and of the bound $\\lvert\\log(1+a)\\rvert \\le 2\\lvert a\\rvert$ used in its proof (stated there for real sequences)
---

:::note{provenance=original}
**What it means.** A rational function can be written in two ways: as a sum of partial fractions, one per pole, and as a constant times a product of linear factors, one per zero. This unit says how much of that survives when there are infinitely many poles or zeros.

The obstruction is convergence, and in both cases the cure is the same. The naive sum $\sum_n P_n\bigl(1/(z-b_n)\bigr)$ and the naive product $\prod_n (1 - z/a_n)$ usually diverge, because their terms do not approach $0$ and $1$ fast enough. Subtracting from each term a polynomial (in the sum) or multiplying each factor by an exponential (in the product) repairs this without changing a single pole or zero. What is left over is an entire function, and it can often be pinned down -- to a constant, or to nothing at all -- by a symmetry argument and Liouville's theorem.

Carried out on $\sin\pi z$, whose zeros are exactly the integers, the two constructions give the two classical formulas of the subject, and each is the logarithmic derivative or the integral of the other.
:::

:::definition[Singular part, infinite product, absolute convergence]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.1, p. 187, and §2.2, pp. 191-192"}
Let $f$ be **meromorphic** in a region $\Omega$: analytic there except for poles. At a pole $b$ the Laurent expansion (:ref[]{to=complex.laurent-series}) has finitely many negative powers, and the **singular part** of $f$ at $b$ is the sum of those terms,

$$
P\!\left(\frac{1}{z-b}\right) = \sum_{k=1}^{N}\frac{a_{-k}}{(z-b)^{k}},
$$

a polynomial $P$ in $1/(z-b)$ with no constant term. The difference $f(z) - P(1/(z-b))$ is analytic at $b$.

An **infinite product** $\prod_{n\ge1}p_n$ is evaluated through its partial products $P_N = p_1\cdots p_N$. Following Ahlfors, we call it **convergent** when at most finitely many factors vanish and the partial products formed from the non-vanishing factors tend to a finite limit that is not zero. The value zero is excluded deliberately: were it allowed, a single zero factor would make any product converge, whatever the other factors did. In a convergent product $p_n \to 1$, so products are always written

$$
\prod_{n=1}^{\infty}(1 + a_n), \qquad a_n \to 0 .
$$

The product is **absolutely convergent** when $\sum_n \log(1+a_n)$ converges absolutely, the principal branch of the logarithm being taken in every term.

An **entire** function is one analytic in the whole plane.
:::

:::statement[Convergence of infinite products]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.2, Thms 5 and 6, pp. 191-192; stein-shakarchi-2003:Ch. 8, Prop. 1.9, p. 247"}
Let $1 + a_n \ne 0$ for every $n$.

1. The product $\prod_{n\ge1}(1+a_n)$ converges if and only if the series $\sum_{n\ge1}\log(1+a_n)$ converges, the terms being principal values.
2. The product converges absolutely if and only if $\sum_{n\ge1}\lvert a_n\rvert$ converges.

Convergence of $\sum_n a_n$ is neither necessary nor sufficient for convergence of the product.

The same criteria apply to a product of functions, uniformly on a set: if $\sum_n\lvert a_n(z)\rvert$ converges uniformly on a compact set $K$ on which no factor vanishes, then $\prod_n (1+a_n(z))$ converges uniformly on $K$.
:::

:::statement[Mittag-Leffler: prescribing the poles]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.1, Thm 4, pp. 187-188"}
**The data.** Distinct points $b_1, b_2, \dots$ whose moduli tend to infinity, and for each $n$ a polynomial $P_n$ vanishing at the origin, $P_n(0) = 0$.

**Existence.** At least one function meromorphic on all of $\mathbb{C}$ has its set of poles equal to $\{b_n\}$ and has $P_n\bigl(1/(z - b_n)\bigr)$ for its singular part at $b_n$.

**Shape of the general solution.** Every function meeting that description can be exhibited as

$$
f(z) \;=\; \sum_{n}\left[ P_n\!\left(\frac{1}{z-b_n}\right) - p_n(z)\right] \;+\; g(z),
$$

in which the $p_n$ are polynomials picked to force convergence and $g$ is entire. Two things here are at our disposal rather than determined by the data: the $p_n$, which may be changed for any other polynomials that still make the series converge, since the difference is entire and is absorbed into $g$; and $g$ itself, about which the poles say nothing whatever.
:::

:::statement[Mittag-Leffler: the simple-pole form used in practice]{provenance=adapted src="arfken-2013:§11.7, Eq. (11.79), pp. 515-516; hassani-2013:§12.1, Eq. (12.1), pp. 363-364"}
Suppose $f$ is analytic at $z = 0$ and at every other finite point except for discrete simple poles at $z_1, z_2, \dots$, ordered so that $0 < \lvert z_1\rvert \le \lvert z_2\rvert \le \cdots$, with residues $b_1, b_2, \dots$, and suppose that $\lvert f(z)/z\rvert \to 0$ in the limit of large $z$. Then

$$
f(z) \;=\; f(0) \;+\; \sum_{n=1}^{\infty} b_n\left[\frac{1}{z - z_n} + \frac{1}{z_n}\right].
$$

Hassani states the same expansion with the hypothesis that $\lvert f(\xi)\rvert$ approach a finite value as $\lvert\xi\rvert\to\infty$, which is the stronger of the two conditions and implies Arfken, Weber and Harris's. The constants $1/z_n$ are what make the series converge; they are the first Taylor coefficients of the singular parts, in the role played by the polynomials $p_n$ in the general theorem.
:::

:::statement[The cotangent expansion]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.1, Eqs. (9), (10), (11), pp. 188-189; arfken-2013:§11.7, Eq. (11.81), p. 518"}
For every $z \in \mathbb{C}$ that is not an integer,

$$
\frac{\pi^{2}}{\sin^{2}\pi z} \;=\; \sum_{n=-\infty}^{\infty}\frac{1}{(z-n)^{2}},
$$

$$
\pi\cot\pi z \;=\; \frac1z + \sum_{n \ne 0}\left[\frac{1}{z-n} + \frac1n\right]
\;=\; \frac1z + \sum_{n=1}^{\infty}\frac{2z}{z^{2}-n^{2}} .
$$

Both series converge absolutely and uniformly on every compact set from which the integers have been removed. Arfken, Weber and Harris write the second one without the factor $\pi$ in the argument, as $\cot z = z^{-1} + 2z\sum_{n\ge1}(z^2 - n^2\pi^2)^{-1}$; the two are the same statement after $z \mapsto \pi z$.
:::

:::statement[Weierstrass: prescribing the zeros]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.3, Thm 7, p. 195, and the discussion of canonical products and genus, p. 196"}
**The data.** An integer $m \ge 0$ and non-zero numbers $a_1, a_2, \dots$, repeated as often as the multiplicity wanted and with $\lvert a_n\rvert \to \infty$; a finite list is permitted.

**Existence.** Some entire function vanishes to order $m$ at the origin, vanishes at each $a_n$ to the prescribed multiplicity, and vanishes nowhere else.

**Shape of the general solution.** Any entire function with that zero set, and that zero set only, can be exhibited as

$$
f(z) \;=\; z^{m}e^{g(z)}\prod_{n=1}^{\infty}\left(1 - \frac{z}{a_n}\right)
\exp\!\left[\frac{z}{a_n} + \frac12\left(\frac{z}{a_n}\right)^{2} + \cdots + \frac{1}{m_n}\left(\frac{z}{a_n}\right)^{m_n}\right],
$$

with suitable integers $m_n$ and $g$ entire.

The exponents $m_n$ may have to grow with $n$. When they do not have to -- that is, when a single integer $h$ can be used for all of them, which happens precisely for those $h$ with $\sum_n \lvert a_n\rvert^{-h-1} < \infty$ -- one takes the smallest such $h$. The product built with that constant exponent is then called the **canonical product** belonging to $\{a_n\}$, and $h$ is its **genus**. The case $h = 0$ costs no exponential factors at all: the product collapses to $\prod_n(1 - z/a_n)$.
:::

:::statement[The sine product]{provenance=adapted src="ahlfors-1979:Ch. 5, §2.3, Eqs. (23) and (24), p. 197; arfken-2013:§11.7, Eq. (11.89), p. 520"}
For every $z \in \mathbb{C}$,

$$
\sin \pi z \;=\; \pi z \prod_{n \ne 0}\left(1 - \frac{z}{n}\right)e^{z/n}
\;=\; \pi z \prod_{n=1}^{\infty}\left(1 - \frac{z^{2}}{n^{2}}\right),
$$

The first product is the canonical product belonging to the non-zero integers: $\sum_n 1/\lvert n\rvert$ diverges and $\sum_n 1/n^{2}$ converges, so no smaller exponent than $h = 1$ would do, and no larger one is needed. The factor standing in front is $\pi z$, whose exponential part $e^{g}$ is the constant $\pi$ and so contributes a polynomial of degree $0$; the genus of $\sin\pi z$ is therefore $1$ as well.
:::

:::idea{provenance=original}
Three ideas, used in this order.

*Convergence is bought with free parameters.* The singular part at $b_n$ is analytic on $\lvert z\rvert < \lvert b_n\rvert$, so near the origin it has a Taylor series. Subtracting a long enough initial segment of that series leaves a remainder that is small on a fixed disc -- as small as we like, because we may take the segment as long as we like. Choosing the lengths so that the remainders are majorised by $2^{-n}$ makes the whole sum converge, and subtracting polynomials changes no singular part. The product argument is the same statement for $\log(1 - z/a_n)$, whose Taylor segment appears as the exponent of a convergence factor.

*An identity between two such expansions is an entire function, and entire functions can be killed.* Once a sum with the right poles exists, the difference between it and the function we started from is entire. To show that difference is zero, find something it cannot be: here both $\pi^{2}/\sin^{2}\pi z$ and its candidate series have period $1$ and tend to $0$ far from the real axis, so their difference is a bounded entire function with limit zero, hence zero by Liouville's theorem.

*Products and pole expansions are the same statement, one derivative apart.* The logarithmic derivative $f'/f$ of an entire function has a simple pole of residue $1$ at each simple zero of $f$ and nothing else, so a product formula for $f$ is a pole expansion for $f'/f$, and conversely one integrates. That is how the sine product falls out of the cotangent expansion, and the step is reversible.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 5, §2.1, pp. 188-189; ahlfors-1979:Ch. 5, §2.2, pp. 191-192; ahlfors-1979:Ch. 5, §2.3, pp. 194-195, 197; arfken-2013:§11.7, pp. 515-516, 519-520"}
**Part A: products reduce to series.**

Suppose first that $\sum_n\lvert a_n\rvert$ converges. Then $a_n\to0$, so after discarding finitely many terms we may assume $\lvert a_n\rvert \le 1/2$ throughout. For $\lvert w\rvert \le 1/2$ the principal logarithm has the convergent expansion $\log(1+w) = w - w^{2}/2 + w^{3}/3 - \cdots$ (:ref[]{to=found.power-series}), so

$$
\bigl\lvert \log(1+w) - w\bigr\rvert \le \frac{\lvert w\rvert^{2}}{2}\bigl(1 + \lvert w\rvert + \lvert w\rvert^{2}+\cdots\bigr) \le \lvert w\rvert^{2},
$$

by the triangle inequality and the geometric series, whence $\tfrac12\lvert w\rvert \le \lvert\log(1+w)\rvert \le 2\lvert w\rvert$ for $\lvert w\rvert\le 1/2$. (This is the bound Stein and Shakarchi isolate on p. 247, for real arguments.) Consequently $\sum_n\log(1+a_n)$ converges absolutely; call its sum $S$ and its partial sums $S_N$. Since $\exp$ is continuous and $P_N = e^{S_N}$, the partial products converge to $e^{S} \ne 0$. Conversely, if $\sum_n\log(1+a_n)$ converges absolutely then its terms tend to $0$, so $1+a_n = e^{\log(1+a_n)}\to1$ and $a_n\to0$; the same two-sided bound then gives $\lvert a_n\rvert \le 2\lvert\log(1+a_n)\rvert$ for large $n$, and $\sum_n\lvert a_n\rvert$ converges. That is part 2.

For part 1 only the direction just proved is needed below: convergence of $\sum_n\log(1+a_n)$ to $S$ gives $P_N = e^{S_N}\to e^{S}\ne0$. The converse is Ahlfors's Theorem 5 (p. 192); we use it only through part 2. If the bounds above hold uniformly in $z$ on a set $K$ -- as they do when $\sum_n\lvert a_n(z)\rvert$ converges uniformly on $K$ -- then $S_N(z)\to S(z)$ uniformly, and so does $e^{S_N(z)}$, because $\exp$ is uniformly continuous on the bounded set where the $S_N$ live. This gives the uniform statement.

**Part B: existence of a function with prescribed singular parts.**

If one of the $b_n$ is $0$, set that single term aside and add it back at the end; it is one more term in a sum that is already finite near the origin. So assume every $b_n \ne 0$, which is what the Taylor expansion below needs. Fix $n$ and write $h_n(z) = P_n\bigl(1/(z-b_n)\bigr)$, which is analytic on the disc $\lvert z\rvert < \lvert b_n\rvert$. Let $M_n$ be its maximum on the circle $\lvert z\rvert = \lvert b_n\rvert/2$, and let $p_n$ be the Taylor polynomial of $h_n$ at the origin of degree $\nu_n$, to be chosen. By the Cauchy integral formula on that circle (:ref[]{to=complex.cauchy-integral-formula}), the $k$-th term of the finite geometric sum $\sum_{k\le\nu_n} z^{k}\zeta^{-k-1}$ integrates against $h_n$ to the $k$-th Taylor coefficient of $h_n$ times $z^{k}$, so that sum accounts for $p_n$ exactly; and subtracting it from $1/(\zeta-z)$ leaves $(\zeta-z)^{-1}(z/\zeta)^{\nu_n+1}$. Hence for $\lvert z\rvert \le \lvert b_n\rvert/4$,

$$
\bigl\lvert h_n(z) - p_n(z)\bigr\rvert
= \left\lvert \frac{1}{2\pi i}\oint_{\lvert \zeta\rvert = \lvert b_n\rvert/2}\frac{h_n(\zeta)}{\zeta - z}\left(\frac{z}{\zeta}\right)^{\nu_n+1}\!d\zeta\right\rvert
\;\le\; 2 M_n\left(\frac{2\lvert z\rvert}{\lvert b_n\rvert}\right)^{\nu_n+1} ,
$$

since the circle has length $2\pi\lvert b_n\rvert/2$ and $\lvert \zeta - z\rvert \ge \lvert b_n\rvert/4$ on it. Now choose $\nu_n$ so large that $2^{\nu_n} \ge M_n 2^{\,n}$. Because $2\lvert z\rvert/\lvert b_n\rvert \le 1/2$ in the range considered, the bound becomes

$$
\bigl\lvert h_n(z) - p_n(z)\bigr\rvert \;\le\; 2M_n\,2^{-\nu_n-1} \;=\; M_n 2^{-\nu_n} \;\le\; 2^{-n}
\qquad\bigl(\lvert z\rvert \le \lvert b_n\rvert/4\bigr).
$$

Fix $R>0$. Since $b_n\to\infty$, all but finitely many $n$ satisfy $\lvert b_n\rvert \ge 4R$, and for those the displayed bound holds on the whole disc $\lvert z\rvert\le R$. By the Weierstrass $M$-test (:ref[]{to=found.uniform-convergence}) the tail $\sum_{\lvert b_n\rvert\ge 4R}(h_n - p_n)$ converges absolutely and uniformly there; being a uniform limit of analytic functions it is analytic, by Morera's theorem (:ref[]{to=complex.cauchy-integral-formula}) together with termwise integration (:ref[]{to=found.termwise-operations}). Adding back the finitely many omitted terms gives a function meromorphic on $\lvert z\rvert < R$ whose poles there are the $b_n$ in that disc, with the prescribed singular parts: each omitted term contributes its own singular part, and the tail is analytic. As $R$ was arbitrary and the construction does not depend on $R$, the series defines one meromorphic function on $\mathbb{C}$.

Finally, if $f_1$ and $f_2$ are both meromorphic in the plane with these poles and these singular parts, then $f_1 - f_2$ has a removable singularity at every $b_n$ and is analytic elsewhere, hence is entire. This is the form displayed in the statement.

**Part C: the two trigonometric pole expansions.**

*The double-pole series.* Put $F(z) = \pi^{2}/\sin^{2}\pi z$ and $G(z) = \sum_{n\in\mathbb{Z}}(z-n)^{-2}$. The zeros of $\sin\pi z$ are exactly the integers and are simple (:ref[]{to=complex.elementary-functions}), so $F$ has a double pole at each integer and no other singularity; near $n$, $\sin^{2}\pi(z-n) = \sin^2 \pi z$ gives the singular part $(z-n)^{-2}$, the same as the $n$-th term of $G$. The series $G$ converges absolutely and uniformly on any compact set once the finitely many terms that blow up on it are removed, by comparison with $\sum n^{-2}$, so $G$ is meromorphic with exactly the same poles and singular parts. By Part B, $g = F - G$ is entire.

Both $F$ and $G$ are unchanged by $z\mapsto z+1$, so $g$ has period $1$ and it is enough to bound $g$ on the strip $0 \le x \le 1$, $z = x+iy$. For $F$: $\lvert\sin\pi z\rvert^{2} = \cosh^{2}\pi y - \cos^{2}\pi x \ge \cosh^{2}\pi y - 1$, so $\lvert F\rvert \to 0$ uniformly in $x$ as $\lvert y\rvert\to\infty$. For $G$, with $0\le x\le1$ and $\lvert n\rvert \ge 2$ we have $\lvert x - n\rvert \ge \lvert n\rvert - 1$, hence

$$
\lvert G(z)\rvert \;\le\; \sum_{\lvert n\rvert\le1}\frac{1}{y^{2}} + 2\sum_{m\ge1}\frac{1}{m^{2}+y^{2}}
\;\le\; \frac{3}{y^{2}} + 2\int_{0}^{\infty}\frac{dt}{t^{2}+y^{2}} \;=\; \frac{3}{y^{2}} + \frac{\pi}{\lvert y\rvert},
$$

using $\lvert z-n\rvert^{2} = (x-n)^{2}+y^{2}$ and comparing the decreasing terms with the integral. So $G\to0$ as well, and $g\to0$ uniformly as $\lvert y\rvert\to\infty$ in the strip. Being continuous, $g$ is bounded on the remaining compact part of the strip, hence bounded on the strip, hence -- by periodicity -- bounded on $\mathbb{C}$. Liouville's theorem (:ref[]{to=complex.liouville-maximum-modulus}) makes $g$ constant, and the limit $0$ makes the constant $0$. This proves the first displayed identity.

*The cotangent series.* Set $H(z) = z^{-1} + \sum_{n\ne0}\bigl[(z-n)^{-1} + n^{-1}\bigr]$. Its $n$-th term equals $z/\bigl(n(z-n)\bigr)$, which for fixed $z$ is $O(n^{-2})$, so $H$ converges absolutely and uniformly on compact sets away from the integers, and may be differentiated term by term there (:ref[]{to=found.termwise-operations}); the derivative is $-G(z)$. By the identity just proved, $\frac{d}{dz}\bigl[\pi\cot\pi z\bigr] = -\pi^{2}/\sin^{2}\pi z = -G(z)$ too. Hence $\pi\cot\pi z - H(z)$ has vanishing derivative on $\mathbb{C}\setminus\mathbb{Z}$, which is open and connected (removing a discrete set from the plane leaves it path-connected), so the difference is one constant there. Both functions are odd -- for $H$, because the substitution $n\mapsto -n$ carries the $n$-th term to minus the $(-n)$-th -- so the constant equals its own negative and is $0$. Bracketing $n$ with $-n$, $\frac{1}{z-n}+\frac1n+\frac{1}{z+n}-\frac1n = \frac{2z}{z^{2}-n^{2}}$, which is the second form.

**Part D: the Weierstrass product.**

Let $a_n \ne 0$ with $a_n\to\infty$. For integers $m_n \ge 0$ put

$$
E_n(z) = \left(1-\frac{z}{a_n}\right)\exp\!\left[\sum_{k=1}^{m_n}\frac1k\left(\frac{z}{a_n}\right)^{k}\right].
$$

Fix $R$ and consider only the $n$ with $\lvert a_n\rvert > 2R$; since $a_n\to\infty$ there are only finitely many others, and each of those contributes a single factor, analytic with one zero. On $\lvert z\rvert\le R$ the principal logarithm of $1 - z/a_n$ is given by its Taylor series, so

$$
r_n(z) := \log\left(1-\frac{z}{a_n}\right) + \sum_{k=1}^{m_n}\frac1k\left(\frac{z}{a_n}\right)^{k}
= -\sum_{k>m_n}\frac1k\left(\frac{z}{a_n}\right)^{k},
$$

and therefore, bounding $1/k$ by $1/(m_n+1)$ and summing the geometric series,

$$
\lvert r_n(z)\rvert \;\le\; \frac{1}{m_n+1}\left(\frac{R}{\lvert a_n\rvert}\right)^{m_n+1}\left(1-\frac{R}{\lvert a_n\rvert}\right)^{-1}.
$$

Take $m_n = n$. For all $n$ with $\lvert a_n\rvert > 2R$ -- all but finitely many, since $a_n\to\infty$ -- the right-hand side is at most $2\cdot 2^{-(n+1)}$, so $\sum_n\lvert r_n(z)\rvert$ converges uniformly on $\lvert z\rvert\le R$. By Part A the product $\prod_n E_n(z) = \prod_n e^{r_n(z)}$ converges uniformly on $\lvert z\rvert\le R$ to an analytic function with no zeros there, and restoring the finitely many factors with $\lvert a_n\rvert\le 2R$ gives an analytic function on $\lvert z\rvert<R$ whose zeros are exactly the $a_n$ lying there, with the right multiplicities. As $R$ is arbitrary, $z^{m}\prod_n E_n(z)$ is entire with exactly the prescribed zeros.

If $f$ is any entire function with exactly those zeros, the quotient $q(z) = f(z)\big/\bigl(z^{m}\prod_n E_n(z)\bigr)$ is entire and never zero; then $q'/q$ is entire, so it has an entire primitive $g$ (:ref[]{to=complex.taylor-series}), and $\bigl(qe^{-g}\bigr)' = e^{-g}(q' - qg') = 0$, so $q = Ce^{g}$ with $C \ne 0$; absorbing $C$ into $g$ gives the displayed form. If one $h$ serves as all the $m_n$, the estimate above shows the product converges precisely when $\sum_n\lvert a_n\rvert^{-h-1} < \infty$, which is the condition defining the genus.

**Part E: the sine product.**

The zeros of $\sin\pi z$ are the integers, each simple, so $m = 1$ and $\{a_n\} = \{n : n \ne 0\}$. Here $\sum 1/\lvert n\rvert$ diverges while $\sum 1/n^{2}$ converges, so the genus is $h = 1$ and Part D gives

$$
\sin\pi z = z\,e^{g(z)}\prod_{n\ne0}\left(1-\frac{z}{n}\right)e^{z/n}
$$

for some entire $g$. Take logarithmic derivatives. The product converges uniformly on compact sets, so the logarithmic derivative may be taken term by term (:ref[]{to=found.termwise-operations}) on any compact set avoiding the integers:

$$
\pi\cot\pi z \;=\; \frac1z + g'(z) + \sum_{n\ne0}\left[\frac{1}{z-n}+\frac1n\right].
$$

Comparing with Part C gives $g' \equiv 0$, so $g$ is a constant. Dividing by $z$ and letting $z\to0$, the product tends to $1$ and $\sin\pi z/z \to \pi$, so $e^{g} = \pi$. Pairing the factors for $n$ and $-n$, the exponentials cancel and $(1-z/n)(1+z/n) = 1 - z^{2}/n^{2}$, which is the second form. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$b_n\to\infty$ in Mittag-Leffler's theorem.** It is used twice in Part B: to make all but finitely many $\lvert b_n\rvert$ exceed $4R$, so that the tail estimate applies on $\lvert z\rvert\le R$, and to make the pole set discrete. It cannot be dropped, and not merely for technical reasons: if the $b_n$ had a finite accumulation point $c$, then $c$ would be a non-isolated singularity, and a function meromorphic in the whole plane has only isolated singularities (:ref[]{to=complex.singularities}). Prescribing simple poles at $b_n = 1/n$ is therefore impossible in the plane, though it is possible in $\mathbb{C}\setminus\{0\}$.
- **The subtracted polynomials $p_n$ are not optional.** Prescribe a simple pole of residue $1$ at every integer. The bare series $\sum_n (z-n)^{-1}$ diverges at every $z$, its terms behaving like $-1/n$; subtracting the constants $1/n$, which changes no singular part, makes the terms $O(n^{-2})$ and the series converge. That is precisely the step from the first to the second form of the cotangent expansion. By contrast, for the double poles of $\pi^{2}/\sin^{2}\pi z$ no subtraction is needed, because $(z-n)^{-2}$ is already $O(n^{-2})$.
- **Absolute, not conditional, convergence of $\sum a_n$ controls a product.** Take $a_n = (-1)^{n}/\sqrt n$ for $n \ge 2$. Then $\sum a_n$ converges, by the alternating series test. But $\log(1+a_n) = a_n - a_n^{2}/2 + O(n^{-3/2})$, and $\sum a_n^{2}/2 = \sum 1/(2n)$ diverges, so the partial sums of $\sum\log(1+a_n)$ tend to $-\infty$ and the partial products tend to $0$: the product diverges in the sense fixed above. (Numerically, the partial product through $n = 2\times10^{6}$ is $1.187\times10^{-3}$ and still falling, while $\sum_{n\ge2}a_n = 0.3951$.) This is the "neither sufficient nor necessary" remark on Ahlfors p. 193, made concrete.
- **Periodicity and decay are what Liouville's theorem is fed in Part C.** Periodicity converts a bound on one strip into a bound on the plane; decay as $\lvert y\rvert\to\infty$ then fixes the constant at $0$. Drop either and the argument fails: $F - G + 1$ and $F - G + \sin 2\pi z$ both have the same poles and singular parts as $F$, and only the extra information rules them out. The entire remainder in Mittag-Leffler's theorem is genuinely free, and every identification of it is an extra argument of this kind.
- **Arfken, Weber and Harris's growth hypothesis is a statement about expanding circles.** Their condition reads $\lvert f(z)/z\rvert\to0$ in the limit of large $z$, and their proof uses it only on the circles $C_N$ of radius $R_N$ enclosing the first $N$ poles: there the modulus of the integrand of $\oint_{C_N} f(w)\,dw/\bigl(w(w-z)\bigr)$ behaves like $\lvert f(R_N)\rvert/R_N^{2}$, so the integral is at most about $2\pi\lvert f(R_N)\rvert/R_N$, which their hypothesis sends to zero. Since $f$ has poles marching off to infinity, the bound cannot hold on arbitrary large circles, and in any application one chooses the radii $R_N$ to keep a fixed distance from the poles -- for $\cot$ and $\tan$, circles through the midpoints between consecutive poles. Ahlfors's Theorem 4 needs no growth hypothesis at all, because it does not claim that the sum of bare singular parts converges.
- **Genus needs a smallest $h$ to exist.** The canonical product is available only when $\sum_n\lvert a_n\rvert^{-h-1}$ converges for some integer $h$. Theorem 7, with $m_n$ allowed to vary and $m_n = n$ always working, has no such restriction, which is why it is the general statement.
:::

:::method[Getting a pole expansion or a product]{provenance=original}
To expand a given meromorphic $f$ in partial fractions:

1. **List the poles and singular parts.** Residues at simple poles come from the rules in :ref[]{to=complex.residue-theorem}; higher-order singular parts come from a local Laurent expansion.
2. **Test the bare sum.** If $\sum_n P_n(1/(z-b_n))$ already converges locally uniformly off the poles -- which happens when the terms are $O(\lvert b_n\rvert^{-2})$ -- use it. Otherwise subtract the leading Taylor terms $p_n$ of each singular part, the constant $P_n(-1/b_n)$ being enough whenever the residues are bounded and $\sum\lvert b_n\rvert^{-2} < \infty$.
3. **Name the entire remainder and kill it.** Write $f = (\text{series}) + g$ with $g$ entire and find a property that forces $g$ to be constant: periodicity plus decay in a strip, or a global bound, then Liouville. Evaluate at one convenient point to fix the constant.
4. **Check against a known special value**, for instance by comparing the Laurent coefficients of both sides at one pole.

To obtain a product for an entire $f$:

1. **Locate the zeros** $a_n$ with multiplicity, and the order $m$ of the zero at the origin if there is one.
2. **Find the genus**: the smallest integer $h \ge 0$ with $\sum_n\lvert a_n\rvert^{-h-1} < \infty$. Then write the canonical product with exponential factors $\exp\bigl[\sum_{k\le h}(z/a_n)^{k}/k\bigr]$; for $h = 0$ there are none.
3. **Write $f = z^{m}e^{g}\times(\text{canonical product})$** and take logarithmic derivatives. This turns the unknown $g'$ into the entire remainder of a pole expansion of $f'/f$, which step 3 above handles.
4. **Fix the surviving constant** by a limit at one point, usually $z\to0$ after dividing by $z^{m}$.
:::

:::example[An entire function with zeros at the squares, and two numbers]{provenance=original}
Prescribe simple zeros at $a_n = n^{2}$, $n = 1, 2, 3, \dots$, and no others.

**Step 1: the genus.** $\sum_n \lvert a_n\rvert^{-1} = \sum_n n^{-2} = \pi^{2}/6$, which is finite, so $h = 0$ already works and is the smallest possibility. The canonical product therefore carries no exponential factors:

$$
P(z) \;=\; \prod_{n=1}^{\infty}\left(1 - \frac{z}{n^{2}}\right).
$$

By Part A it converges absolutely and uniformly on every disc, since $\sum_n\lvert z\rvert/n^{2}$ does.

**Step 2: identify it in closed form.** Put $z = w^{2}$ in the sine product: $\sin\pi w = \pi w\prod_{n\ge1}(1-w^{2}/n^{2})$, so

$$
P(w^{2}) \;=\; \frac{\sin\pi w}{\pi w}\qquad\text{for all } w \ne 0,
$$

and both sides extend to the value $1$ at $w=0$. The right-hand side is an even entire function of $w$, so it depends only on $w^{2}$ and the formula determines $P$ at every $z$, whichever square root of $z$ is used. In the Weierstrass form of Part D this says $f(z) = P(z)$ has $m = 0$ and $g \equiv 0$.

**Step 3: a number from the product.** Take $z = -1/4$, that is $w = i/2$. Then

$$
\prod_{n=1}^{\infty}\left(1 + \frac{1}{4n^{2}}\right) \;=\; P(-\tfrac14) \;=\; \frac{\sin(i\pi/2)}{i\pi/2} \;=\; \frac{\sinh(\pi/2)}{\pi/2}
\;=\; 1.4650523833 .
$$

The partial product through $n = 2\times10^{5}$ is $1.4650505520$, short of the limit by $1.8\times10^{-6}$, which is the right size: the logarithm of the tail is $\approx\sum_{n>N}1/(4n^{2}) \approx 1/(4N) = 1.25\times10^{-6}$.

**Step 4: the matching pole expansion.** Differentiating $\log$ of the product termwise,

$$
\frac{P'(z)}{P(z)} \;=\; \sum_{n=1}^{\infty}\frac{-1/n^{2}}{1 - z/n^{2}} \;=\; \sum_{n=1}^{\infty}\frac{1}{z-n^{2}},
$$

a Mittag-Leffler expansion with simple poles at the squares, all of residue $1$. The closed form gives the same thing another way: with $w = \sqrt z$ and $d/dz = (2w)^{-1}d/dw$,

$$
\frac{P'(z)}{P(z)} \;=\; \frac{1}{2w}\,\frac{d}{dw}\log\frac{\sin\pi w}{\pi w} \;=\; \frac{\pi\cot\pi w - 1/w}{2w},
$$

the cotangent expansion of Part C reappearing. At $z = -1/4$, $w = i/2$: $\pi\cot(i\pi/2) = -i\pi\coth(\pi/2)$ and $1/w = -2i$, while $2w = i$, so the right-hand side is $2 - \pi\coth(\pi/2)$. The left-hand side is $-\sum_{n\ge1}4/(1+4n^{2})$. Hence

$$
\sum_{n=1}^{\infty}\frac{1}{1+4n^{2}} \;=\; \frac{\pi\coth(\pi/2) - 2}{4} \;=\; 0.3563442875 ,
$$

and summing the series numerically gives $0.3563442875$ as well. The two checks test the product and the pole expansion against each other at the same point.
:::

:::application[Where these expansions are used]{provenance=original}
- **Modal decomposition of a response function.** A linear system's transfer function $\chi(\omega)$ is meromorphic, and its Mittag-Leffler expansion is the statement that the response is a sum of one simple resonance per pole, with weight the residue. In circuit and control theory this is the partial-fraction expansion that turns a transfer function into a sum of first-order sections; in scattering theory it is the resonance expansion of an amplitude, each pole a quasi-bound state with its width. The convergence terms $1/z_n$ are the non-resonant background that makes the sum of resonances converge, and they are not optional.
- **Sums over Matsubara frequencies.** In finite-temperature field theory and in linear-response calculations one meets sums over the discrete frequencies $\omega_n = 2\pi n/\beta$. The pole expansion of $\coth$ -- the cotangent expansion of Part C along the imaginary axis -- is exactly the kernel that converts such a sum into a contour integral, which is then evaluated by residues (:ref[]{to=complex.series-summation}).
- **Spectral determinants and zeta regularisation.** For an operator with eigenvalues $\lambda_n\to\infty$, the Weierstrass product $\prod_n(1-\lambda/\lambda_n)e^{\cdots}$ is the entire function whose zeros are the spectrum: a regularised version of $\det(\lambda - A)$. Which exponential factors are needed -- the genus -- is set by how fast the eigenvalues grow, and the entire factor $e^{g}$ is the ambiguity that the regularisation scheme has to fix. The one-dimensional model is $\sin\pi z$, the spectral determinant of $-d^{2}/dx^{2}$ on an interval with Dirichlet ends.
- **Jost functions and bound states.** In one-dimensional and radial scattering the Jost function is entire in the momentum variable, and its zeros are the bound states. Writing it as a Weierstrass product over those zeros, and its logarithmic derivative as a pole expansion, is the standard route to sum rules relating the bound-state energies to integrals of the phase shift.
- **Classical identities.** Evaluating the cotangent expansion near $z = 0$ and matching Laurent coefficients gives $\sum_n n^{-2k}$ in closed form, and the sine product at $z = 1/2$ gives Wallis's product for $\pi$. The number of zeros of such a product in a region is counted by the argument principle (:ref[]{to=complex.argument-principle-rouche}).
:::
