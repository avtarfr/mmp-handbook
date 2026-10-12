---
id: spec.error-function
title: Error function and incomplete Gamma function
kind: definition
level: core
summary: 'Defines the incomplete Gamma functions $\gamma(a,x)$ and $\Gamma(a,x)$ and the error functions $\operatorname{erf}$ and $\operatorname{erfc}$ as the case $a=\tfrac12$, then gives both of the expansions a computation needs -- a convergent power series for small argument and an asymptotic series with a rigorous remainder bound for large argument.'
prereqs: [spec.gamma-function, asym.asymptotic-series, found.power-series, found.termwise-operations, found.uniform-convergence, found.gaussian-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§13.6, Other Related Functions: the incomplete Gamma functions Eqs. (13.73)-(13.75), the small-$x$ and large-$x$ expansions Eq. (13.76), the error functions Eqs. (13.90)-(13.93), and Exercises 13.6.3 and 13.6.4, pp. 633-638"
    pages: "633-638"
    role: definitions of $\gamma(a,x)$, $\Gamma(a,x)$, $\operatorname{erf}$ and $\operatorname{erfc}$; the closed form at integer $a$; the convergent series; the asymptotic expansions of $\Gamma(a,x)$ and of $\operatorname{erf}$; the recurrences
  - work: arfken-2013
    loc: "§1.3, Table 1.2, Special Functions of Importance in Physics, p. 66"
    pages: "66"
    role: the normalisation $\operatorname{erf}(\infty)=1$ and the listing of $\operatorname{erf}$, $\operatorname{erfc}$ among the integral-defined special functions
  - work: rhb-2006
    loc: "§18.12.3-18.12.4, the splitting $\\Gamma(n)=\\gamma(n,x)+\\Gamma(n,x)$ Eq. (18.166), the integer closed form, and the error function Eqs. (18.167)-(18.168) with the normal distribution function, pp. 639-640"
    pages: "639-640"
    role: the additive splitting of the Euler integral; the integration-by-parts recurrence; $\operatorname{erf}$, $\operatorname{erfc}$, their elementary values, the $P,Q$ normalisation and the link to the standard normal distribution function
  - work: strauss-2008
    loc: "§2.4, the similarity solution of the diffusion equation, Steps 1-3 and Eq. (5), pp. 48-49, with the definition of $\\operatorname{erf}$ at Eq. (10) and Example 1, p. 51"
    pages: "48-49, 51"
    role: the application; the reduction of the diffusion equation to $g''+2pg'=0$ and the step-data solution written with $\operatorname{erf}$
  - work: stakgold-holst-2011
    loc: "§7.3, the half-line heat problem with boundary data, Eq. (7.3.22) and Duhamel's formula Eqs. (7.3.23)-(7.3.25), p. 449"
    pages: "449"
    role: the half-line form of the application and the superposition formula built on it
  - work: hassani-2013
    loc: "§14.6, the error function as a function defined by an integral and the differential equation $y''+2xy'=0$ it satisfies, pp. 436-437"
    pages: "436-437"
    role: the characterisation by a differential equation with initial data; one of the competing normalisations recorded in the note
  - work: hassani-2013
    loc: "§15.6, Problem 15.23, the identity $\\operatorname{erf}(z)=z\\Phi(\\tfrac12,\\tfrac32;-z^2)$, p. 487"
    pages: "487"
    role: the confluent hypergeometric form, and a second, different normalisation of $\operatorname{erf}$ in the same book
---

:::definition[The two incomplete Gamma functions]{provenance=adapted src="arfken-2013:§13.6, Eqs. (13.73)-(13.74), p. 633; rhb-2006:§18.12.3, Eq. (18.166), p. 639"}
Cutting Euler's integral for $\Gamma(a)$ (:ref[]{to=spec.gamma-function}) at a point $x>0$ defines the **lower** and **upper incomplete Gamma functions**

$$
\gamma(a,x) \;=\; \int_{0}^{x}e^{-t}t^{\,a-1}\,dt ,
\qquad
\Gamma(a,x) \;=\; \int_{x}^{\infty}e^{-t}t^{\,a-1}\,dt .
$$

The first needs $\operatorname{Re}a>0$ for convergence at the origin, where the integrand has modulus $t^{\operatorname{Re}a-1}e^{-t}$; the second converges for every $a$ once $x>0$, because the only issue there is the decay at infinity, which $e^{-t}$ supplies. Adding them restores the whole integral:

$$
\gamma(a,x)+\Gamma(a,x) \;=\; \Gamma(a) \qquad (\operatorname{Re}a>0) .
$$

Because of that identity the two carry the same information, so which one a calculation is written in terms of is settled by the problem at hand and not by any difference in content; both :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 633"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 639"} make the point. Riley, Hobson and Bence also record the normalised pair

$$
P(a,x) \;=\; \frac{\gamma(a,x)}{\Gamma(a)} , \qquad Q(a,x) \;=\; \frac{\Gamma(a,x)}{\Gamma(a)} \;=\; 1-P(a,x) ,
$$

which are the ones a statistician meets, since $P(a,x)$ is a cumulative distribution function in $x$.
:::

:::definition[Error function and complementary error function]{provenance=adapted src="arfken-2013:§13.6, Eqs. (13.90) and (13.93), pp. 637-638; rhb-2006:§18.12.4, Eqs. (18.167)-(18.168), p. 640; strauss-2008:§2.4, Eq. (10), p. 51"}
The **error function** and the **complementary error function** are

$$
\operatorname{erf}(x) \;=\; \frac{2}{\sqrt{\pi}}\int_{0}^{x}e^{-u^{2}}\,du ,
\qquad
\operatorname{erfc}(x) \;=\; 1-\operatorname{erf}(x) \;=\; \frac{2}{\sqrt{\pi}}\int_{x}^{\infty}e^{-u^{2}}\,du .
$$

The factor $2/\sqrt{\pi}$ is chosen so that $\operatorname{erf}(\infty)=1$, which is the Gaussian integral $\int_{0}^{\infty}e^{-u^{2}}du = \tfrac12\sqrt{\pi}$ (:ref[]{to=found.gaussian-integrals}); this is the normalisation of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Table 1.2, p. 66, and Eq. (13.90), p. 637"}, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (18.167), p. 640"} and :cite[Strauss]{work=strauss-2008 loc="Eq. (10), p. 51"}, and the one we use throughout. Immediately from the definition: $\operatorname{erf}(0)=0$, $\operatorname{erf}(-x) = -\operatorname{erf}(x)$ since the integrand is even, $\operatorname{erfc}(0)=1$, and

$$
\frac{d}{dx}\operatorname{erf}(x) \;=\; \frac{2}{\sqrt{\pi}}e^{-x^{2}} ,
$$

so $\operatorname{erf}$ is strictly increasing, extends to an entire function of a complex argument, and satisfies the differential equation $y''+2xy'=0$ noted by :cite[Hassani]{work=hassani-2013 loc="§14.6, p. 437"} — on our normalisation with the data $y(0)=0$, $y'(0)=2/\sqrt{\pi}$.

**The error function is the case $a=\tfrac12$.** Substituting $t=u^{2}$ in the lower incomplete Gamma integral, so that $dt = 2u\,du$ and $t^{-1/2}=u^{-1}$,

$$
\gamma\bigl(\tfrac12,x^{2}\bigr) \;=\; \int_{0}^{x^{2}}e^{-t}t^{-1/2}dt \;=\; 2\int_{0}^{x}e^{-u^{2}}du \;=\; \sqrt{\pi}\,\operatorname{erf}(x) ,
$$

and likewise $\Gamma(\tfrac12,x^{2}) = \sqrt{\pi}\,\operatorname{erfc}(x)$. These are the relations
$$
\operatorname{erf}(x) = \pi^{-1/2}\gamma\bigl(\tfrac12,x^{2}\bigr), \qquad \operatorname{erfc}(x) = \pi^{-1/2}\Gamma\bigl(\tfrac12,x^{2}\bigr)
$$
of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (13.93), p. 638"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eqs. (18.167)-(18.168), p. 640"}; the identity $\operatorname{erf}+\operatorname{erfc}=1$ is the splitting of the previous definition divided by $\Gamma(\tfrac12)=\sqrt{\pi}$. Everything proved below about $\gamma(a,x)$ and $\Gamma(a,x)$ therefore specialises to the error functions, and that is how we obtain their expansions.

**The Gaussian distribution function.** Riley, Hobson and Bence (p. 640) record the form in which the error function is met in probability: for the standard normal distribution,

$$
\Phi(x) \;=\; \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{x}e^{-y^{2}/2}\,dy \;=\; \frac12+\frac12\operatorname{erf}\!\left(\frac{x}{\sqrt2}\right) .
$$

The $\sqrt2$ is the whole content of the difference between the two conventions: one integrates $e^{-u^{2}}$, the other $e^{-y^{2}/2}$. As a check, $\Phi(1) = \tfrac12+\tfrac12\operatorname{erf}(0.7071068) = \tfrac12+\tfrac12(0.6826895) = 0.8413447$, the familiar one-sigma figure.
:::

:::statement[Series, recurrences and large-argument expansions]{provenance=adapted src="arfken-2013:§13.6, Eqs. (13.75)-(13.76), pp. 633-634, Eqs. (13.91)-(13.92), p. 637, and Exercises 13.6.3-13.6.4, p. 638; rhb-2006:§18.12.3, the integration-by-parts recurrence and integer closed form, p. 639"}
Let $x>0$ and $a$ be real with $a>0$ where $\gamma$ appears.

1. **Recurrences.** $\displaystyle \Gamma(a+1,x) = a\,\Gamma(a,x)+x^{a}e^{-x}$ for every real $a$, and $\displaystyle \gamma(a+1,x) = a\,\gamma(a,x)-x^{a}e^{-x}$ for $a>0$.
2. **Convergent series for the lower function.** For every $x>0$,
   $$
   \gamma(a,x) \;=\; x^{a}\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{n}}{n!\,(a+n)} ,
   $$
   the series converging for all $x$ (it is the term-by-term integral of the exponential series). In particular
   $$
   \operatorname{erf}(x) \;=\; \frac{2}{\sqrt{\pi}}\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{(2n+1)\,n!} \;=\; \frac{2}{\sqrt{\pi}}\left(x-\frac{x^{3}}{3}+\frac{x^{5}}{10}-\frac{x^{7}}{42}+\cdots\right) ,
   $$
   valid for every real (indeed complex) $x$.
3. **Exact truncation with remainder.** Put $c_{0}=1$ and $c_{m} = (a-1)(a-2)\cdots(a-m)$ for $m\ge1$. Then for every $N\ge1$
   $$
   \Gamma(a,x) \;=\; e^{-x}x^{\,a-1}\sum_{m=0}^{N-1}\frac{c_{m}}{x^{m}} \;+\; c_{N}\,\Gamma(a-N,x) ,
   $$
   an identity, not an approximation. If moreover $N\ge a-1$, the remainder obeys
   $$
   \bigl\lvert c_{N}\Gamma(a-N,x)\bigr\rvert \;\le\; \lvert c_{N}\rvert\,e^{-x}x^{\,a-1-N} ,
   $$
   which is the modulus of the first omitted term.
4. **Asymptotic expansion.** Consequently, as $x\to\infty$ with $a$ fixed,
   $$
   \Gamma(a,x) \;\sim\; e^{-x}x^{\,a-1}\sum_{m=0}^{\infty}\frac{(a-1)(a-2)\cdots(a-m)}{x^{m}}
   $$
   in the sense of :ref[]{to=asym.asymptotic-series}: each truncation has error of smaller order than its last retained term. This is the expansion of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (13.76), p. 634, and Exercise 13.6.4, p. 638"}, whose coefficient $\Gamma(a)/\Gamma(a-m)$ is the same product; they state it for non-integral $a$. For such $a$ the series diverges for every $x$. When $a$ is a positive integer it is not a series at all but a terminating sum, which is part 5.
5. **Integer $a$: the expansion terminates and is exact.** If $a=n\in\mathbb{N}$ then $c_{n}=0$, so part 3 with $N=n$ has no remainder and
   $$
   \Gamma(n,x) \;=\; (n-1)!\,e^{-x}\sum_{s=0}^{n-1}\frac{x^{s}}{s!} ,
   \qquad
   \gamma(n,x) \;=\; (n-1)!\left(1-e^{-x}\sum_{s=0}^{n-1}\frac{x^{s}}{s!}\right) ,
   $$
   the closed forms of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (13.75), p. 633"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 639"}.
6. **The error functions.** Taking $a=\tfrac12$ and replacing $x$ by $x^{2}$ in parts 3 and 4: for $x>0$ and $N\ge1$,
   $$
   \operatorname{erfc}(x) \;=\; \frac{e^{-x^{2}}}{x\sqrt{\pi}}\left(\sum_{m=0}^{N-1}(-1)^{m}\frac{(2m-1)!!}{2^{m}x^{2m}}\right) \;+\; R_{N}(x) ,
   \qquad
   \lvert R_{N}(x)\rvert \;\le\; \frac{e^{-x^{2}}}{x\sqrt{\pi}}\cdot\frac{(2N-1)!!}{2^{N}x^{2N}} ,
   $$
   with $(-1)!!=1$ and $(2m-1)!! = 1\cdot3\cdots(2m-1)$. Hence
   $$
   \operatorname{erfc}(x) \;\sim\; \frac{e^{-x^{2}}}{x\sqrt{\pi}}\left(1-\frac{1}{2x^{2}}+\frac{3}{4x^{4}}-\frac{15}{8x^{6}}+\cdots\right) \qquad (x\to\infty) ,
   $$
   which is the expansion :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (13.92), p. 637"} give in the equivalent form $\operatorname{erf}(x) \approx 1-\pi^{-1/2}x^{-1}e^{-x^{2}}\sum_{m}(-1)^{m}(2m-1)!!/(2^{m}x^{2m})$. The terms alternate in sign, so the bound on $R_{N}$ says the truncation error is no larger in modulus than the first term dropped, and successive truncations bracket the answer.
:::

:::idea{provenance=original}
Two expansions, one for each end of the range, and each is got by expanding a different factor of the integrand.

For small $x$ the exponential is the harmless factor: expand $e^{-t}$ in its everywhere-convergent power series and integrate term by term over the *bounded* interval $[0,x]$. Each monomial integrates to a power of $x$, and the result converges for every $x$ — it is an honest Taylor series. The reason this only works for the lower function is that the upper one integrates over an unbounded interval, where the exponential series converges nowhere uniformly.

For large $x$ the power $t^{a-1}$ is the harmless factor: on $[x,\infty)$ it varies slowly compared with the collapse of $e^{-t}$, so almost all of the integral comes from a neighbourhood of the left endpoint. Integration by parts is the systematic way to exploit that: it peels off $x^{a-1}e^{-x}$, the value at the endpoint, and leaves an integral of the same shape with the exponent lowered by one. Each repetition peels off a smaller term and lowers the exponent again. Nothing has been approximated so far — the identity in part 3 is exact for every $N$.

The approximation enters only when we stop and discard the leftover integral, and the single fact that makes the discard controllable is that $t^{a-N-1}$ is *decreasing* once $N > a-1$: then it is largest at the endpoint, so the leftover integral is at most $x^{a-N-1}\int_{x}^{\infty}e^{-t}dt$. That is precisely the size of the next term, which is the classical statement that the error is no worse than the first term omitted.

Unless the peeling stops of its own accord — which happens exactly when $a$ is a positive integer, for then some factor $a-m$ is $0$ — the series cannot converge, because the exponents being lowered eventually make $\lvert c_{m}\rvert$ grow like $m!$ while $x^{-m}$ shrinks only geometrically. So for each $x$ there is a best place to stop — roughly where consecutive terms stop decreasing — and that best accuracy is all the expansion will ever give. The error functions inherit all of this at $a=\tfrac12$, and the one accident of $a=\tfrac12$ is that the coefficients are the double factorials with strictly alternating signs.
:::

:::proof{provenance=adapted src="arfken-2013:§13.6, Exercise 13.6.3 and Exercise 13.6.4, p. 638, and Eq. (13.76), p. 634; rhb-2006:§18.12.3, the worked integration by parts, p. 639"}
**Part 1 (recurrences).** Integrate by parts with $u=t^{a}$, $dv = e^{-t}dt$. On $[x,\infty)$,

$$
\Gamma(a+1,x) \;=\; \int_{x}^{\infty}t^{a}e^{-t}dt \;=\; \Bigl[-t^{a}e^{-t}\Bigr]_{x}^{\infty}+a\int_{x}^{\infty}t^{a-1}e^{-t}dt \;=\; x^{a}e^{-x}+a\,\Gamma(a,x) ,
$$

the boundary term at infinity vanishing because $t^{a}e^{-t}\to0$ for every fixed $a$. On $[0,x]$ the same computation gives the boundary term $-x^{a}e^{-x}$ at the upper end and $0$ at the lower end, the latter requiring $a>0$ so that $t^{a}\to0$:

$$
\gamma(a+1,x) \;=\; \Bigl[-t^{a}e^{-t}\Bigr]_{0}^{x}+a\int_{0}^{x}t^{a-1}e^{-t}dt \;=\; -x^{a}e^{-x}+a\,\gamma(a,x) .
$$

**Part 2 (convergent series).** Fix $x>0$. The exponential series $e^{-t} = \sum_{n\ge0}(-1)^{n}t^{n}/n!$ converges uniformly on the compact interval $[0,x]$, by the Weierstrass $M$-test with $M_{n}=x^{n}/n!$ (:ref[]{to=found.uniform-convergence}). Multiplying a uniformly convergent series by the fixed function $t^{a-1}$ preserves uniform convergence on $[\varepsilon,x]$ for each $\varepsilon>0$, and the resulting series of integrals converges absolutely because $\int_{0}^{x}t^{a+n-1}dt = x^{a+n}/(a+n)$ is summable; so we may integrate term by term (:ref[]{to=found.termwise-operations}) and let $\varepsilon\to0$:

$$
\gamma(a,x) \;=\; \sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!}\int_{0}^{x}t^{\,a+n-1}dt \;=\; \sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!}\cdot\frac{x^{\,a+n}}{a+n} \;=\; x^{a}\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{n}}{n!\,(a+n)} .
$$

For the error function put $a=\tfrac12$ and replace $x$ by $x^{2}$: the general term becomes $(-1)^{n}x^{2n+1}\big/\bigl(n!(n+\tfrac12)\bigr) = 2(-1)^{n}x^{2n+1}/\bigl(n!(2n+1)\bigr)$, so $\sqrt\pi\operatorname{erf}(x) = \gamma(\tfrac12,x^{2}) = 2\sum_{n}(-1)^{n}x^{2n+1}/\bigl((2n+1)n!\bigr)$, which is part 2's second display. The first few coefficients are $1$, $-\tfrac13$, $\tfrac1{10}$, $-\tfrac1{42}$.

**Part 3 (exact truncation).** Apply part 1 in the direction that lowers the first argument: replacing $a$ by $a-1$ there gives $\Gamma(a,x) = x^{a-1}e^{-x}+(a-1)\Gamma(a-1,x)$. We claim by induction on $N$ that

$$
\Gamma(a,x) \;=\; e^{-x}x^{\,a-1}\sum_{m=0}^{N-1}\frac{c_{m}}{x^{m}}+c_{N}\,\Gamma(a-N,x) .
$$

For $N=1$ this is exactly the displayed relation, since $c_{0}=1$ and $c_{1}=a-1$. Assume it for $N$ and apply the same relation to $\Gamma(a-N,x)$, whose first argument is $a-N$:

$$
\Gamma(a-N,x) \;=\; x^{\,a-N-1}e^{-x}+(a-N-1)\,\Gamma(a-N-1,x) .
$$

Substituting, and using $c_{N}(a-N-1) = c_{N+1}$ together with $c_{N}x^{a-N-1} = x^{a-1}\cdot c_{N}x^{-N}$, gives the statement for $N+1$. Note that no convergence question arises: each $\Gamma(a-N,x)$ is a finite integral because $x>0$.

For the bound, let $b = a-N$ and suppose $N\ge a-1$, that is $b-1\le0$. Then $t\mapsto t^{\,b-1}$ is non-increasing on $[x,\infty)$, so $t^{\,b-1}\le x^{\,b-1}$ there and

$$
0 \;<\; \Gamma(b,x) \;=\; \int_{x}^{\infty}t^{\,b-1}e^{-t}dt \;\le\; x^{\,b-1}\int_{x}^{\infty}e^{-t}dt \;=\; x^{\,a-N-1}e^{-x} .
$$

Multiplying by $\lvert c_{N}\rvert$ gives part 3's inequality, and the right-hand side is $\lvert c_{N}\rvert x^{-N}$ times the prefactor $e^{-x}x^{a-1}$, i.e. the modulus of the term with $m=N$ — the first one omitted.

**Part 4 (asymptotic character).** Fix $N$ with $N\ge a-1$. By part 3 the error committed by truncating after the term $m=N-1$ is at most $\lvert c_{N}\rvert e^{-x}x^{a-1-N}$, which is $O(x^{-1})$ times the last retained term $c_{N-1}e^{-x}x^{a-N}$. So each truncation has error of smaller order than its final term as $x\to\infty$, which is the definition of an asymptotic expansion (:ref[]{to=asym.asymptotic-series}). Divergence for every fixed $x$, when $a$ is not a positive integer: no factor $a-m$ then vanishes, so no $c_{m}$ does, and the ratio of consecutive terms has modulus $\lvert a-m-1\rvert/x$, which exceeds $1$ once $m>x+\lvert a\rvert$; the terms therefore eventually increase without bound. For $a$ a positive integer the terms are $0$ from $m=a$ on and the sum is finite, which is part 5.

**Part 5 (integer $a$).** If $a=n$ is a positive integer then $c_{n} = (n-1)(n-2)\cdots(n-n) = 0$, because the last factor is $0$. Part 3 with $N=n$ therefore has a vanishing remainder:

$$
\Gamma(n,x) \;=\; e^{-x}x^{\,n-1}\sum_{m=0}^{n-1}\frac{c_{m}}{x^{m}} ,
\qquad c_{m} \;=\; (n-1)(n-2)\cdots(n-m) \;=\; \frac{(n-1)!}{(n-1-m)!} .
$$

Re-index with $s = n-1-m$, so $x^{n-1-m} = x^{s}$ and $c_{m} = (n-1)!/s!$:

$$
\Gamma(n,x) \;=\; (n-1)!\,e^{-x}\sum_{s=0}^{n-1}\frac{x^{s}}{s!} ,
$$

and subtracting from $\Gamma(n)=(n-1)!$ gives the companion formula for $\gamma(n,x)$.

**Part 6 (error functions).** Take $a=\tfrac12$. Then

$$
c_{m} \;=\; \left(-\tfrac12\right)\left(-\tfrac32\right)\cdots\left(\tfrac12-m\right) \;=\; (-1)^{m}\,\frac{1\cdot3\cdots(2m-1)}{2^{m}} \;=\; (-1)^{m}\frac{(2m-1)!!}{2^{m}} ,
$$

there being $m$ factors, each negative, with moduli $\tfrac12,\tfrac32,\dots,\tfrac{2m-1}{2}$. Since $N\ge1>a-1=-\tfrac12$ for every $N\ge1$, the remainder bound of part 3 applies for all $N$. Writing part 3 at the point $x^{2}$ and multiplying by $\pi^{-1/2}$, using $\operatorname{erfc}(x)=\pi^{-1/2}\Gamma(\tfrac12,x^{2})$ and $e^{-x^{2}}(x^{2})^{-1/2} = e^{-x^{2}}/x$ for $x>0$, gives exactly part 6, with the remainder bound as stated. The signs alternate because the $c_{m}$ do and $x^{-2m}>0$, and for an alternating sequence the bound "error at most the first omitted term" also makes consecutive truncations bracket the value. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\operatorname{Re}a>0$ for $\gamma$, nothing for $\Gamma$.** The lower integral is the one that reaches the origin, where $t^{a-1}$ blows up; the condition is exactly integrability there. It is used again in part 1, where the boundary term $t^{a}e^{-t}$ at $t=0$ is discarded, and this is why only the $\gamma$ recurrence carries the restriction while the $\Gamma$ recurrence holds for every real $a$ — including the negative values $a-N$ that the repeated integration by parts generates.
- **$x>0$ throughout parts 3-6.** Every remainder $\Gamma(a-N,x)$ is a convergent integral only because the lower limit is positive; at $x=0$ the upper function with a negative first argument diverges. Correspondingly the large-argument expansion says nothing at small $x$, and the prefactor $e^{-x^{2}}/(x\sqrt\pi)$ in part 6 is singular at $x=0$, where the true value $\operatorname{erfc}(0)=1$ is perfectly finite.
- **$N\ge a-1$ for the remainder bound.** This is what makes $t^{\,a-N-1}$ non-increasing on $[x,\infty)$, so that its maximum is at the endpoint. Without it the bound is false in the stated form: for $a-N-1>0$ the factor grows and the integral is not controlled by its endpoint value. For the error functions $a=\tfrac12$ and every $N\ge1$ qualifies, which is why part 6 needs no side condition.
- **Boundedness of the interval in part 2.** Term-by-term integration of the exponential series is justified by uniform convergence on a compact interval. Attempting the same on $[x,\infty)$ fails at once — $\sum(-1)^nt^n/n!$ is not uniformly convergent there — and this is the structural reason the upper function has no convergent expansion of that kind and must be handled by integration by parts instead.
- **Why the asymptotic series is still useful although it diverges.** Divergence is not a defect to be worked around; it bounds the accuracy obtainable. The modulus of the term $m$ is $(2m-1)!!/(2^{m}x^{2m})$ for $\operatorname{erfc}$, and the ratio of consecutive terms is $(2m+1)/(2x^{2})$, which is below $1$ exactly while $m < x^{2}-\tfrac12$. So the terms decrease until about $m\approx x^{2}$ and increase thereafter: truncating near there gives the best this expansion can do, and the bound in part 6 says what that is. The example below carries this out at $x=3$.
- **Alternating signs are special to $a=\tfrac12$.** The bracketing property in part 6 comes from the signs of the $c_{m}$, all of which are negative factors for $a=\tfrac12$. For $a>1$ some factors $a-m$ are positive and the signs are not alternating, so only the remainder bound survives, not the bracketing.
:::

:::note[Three normalisations of the error function in this library]{provenance=adapted src="hassani-2013:§14.6, p. 436, and §15.6, Problem 15.23, p. 487; arfken-2013:Table 1.2, p. 66; rhb-2006:§18.12.4, p. 640"}
The symbol $\operatorname{erf}$ is not used consistently across the cited books, and a formula moved between them without checking will be wrong by a factor or an additive constant. In this library:

- **Ours**, and that of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Table 1.2, p. 66"}, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (18.167), p. 640"}, :cite[Strauss]{work=strauss-2008 loc="Eq. (10), p. 51"} and :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, p. 449"}: $\operatorname{erf}(x) = \tfrac{2}{\sqrt\pi}\int_{0}^{x}e^{-u^{2}}du$, with $\operatorname{erf}(0)=0$ and $\operatorname{erf}(\infty)=1$.
- :cite[Hassani]{work=hassani-2013 loc="§14.6, p. 436"} writes $\operatorname{erf}(x) = \tfrac{1}{\sqrt\pi}\int_{-\infty}^{x}e^{-t^{2}}dt$, integrating from $-\infty$ and with half our prefactor. That function equals $\tfrac12\bigl(1+\operatorname{erf}(x)\bigr)$ in our notation, so it runs from $0$ to $1$ as $x$ runs over $\mathbb{R}$ and takes the value $\tfrac12$ at the origin. His initial data for $y''+2xy'=0$, namely $y(0)=\tfrac12$ and $y'(0)=1/\sqrt{\pi}$ (p. 437), are those of his function; ours satisfies the same equation with $y(0)=0$, $y'(0)=2/\sqrt{\pi}$.
- :cite[Hassani]{work=hassani-2013 loc="§15.6, Problem 15.23, p. 487"} writes, in the same book, $\operatorname{erf}(z) = \int_{0}^{z}e^{-t^{2}}dt$ with no prefactor at all, and in that normalisation records the confluent hypergeometric form
  $$
  \int_{0}^{z}e^{-t^{2}}dt \;=\; z\,\Phi\bigl(\tfrac12,\tfrac32;-z^{2}\bigr) ,
  $$
  with $\Phi$ the confluent hypergeometric function. Nothing in this unit rests on that identification, so :ref[]{to=spec.confluent-hypergeometric} is a pointer onward rather than a prerequisite; all that is used of $\Phi$ here is the ratio of Pochhammer symbols recorded at the end of this bullet. Translated into our normalisation Hassani's relation reads $\operatorname{erf}(z) = \tfrac{2}{\sqrt\pi}z\,\Phi(\tfrac12,\tfrac32;-z^{2})$; it is the series of part 2 in hypergeometric dress, since $(\tfrac12)_{n}/(\tfrac32)_{n} = 1/(2n+1)$.

So the three differ only by a constant factor and, in the second case, an additive constant. Our statements and numbers use the first throughout, and the $P,Q$ pair of Riley, Hobson and Bence relates to it by $P(\tfrac12,x^{2}) = \operatorname{erf}(x)$ and $Q(\tfrac12,x^{2}) = \operatorname{erfc}(x)$.
:::

:::method[Evaluating $\operatorname{erf}$ or $\operatorname{erfc}$ to a target accuracy]{provenance=original}
1. **Decide which function you want.** For $x$ large, $\operatorname{erf}(x)$ is close to $1$ and all the information is in $\operatorname{erfc}(x)$; computing it as $1-\operatorname{erf}(x)$ in finite precision destroys that information. Always compute the small one directly.
2. **Choose the expansion by the size of $x$.** Use the convergent series of part 2 for $x$ up to roughly $2$, and the asymptotic series of part 6 for larger $x$. The two regions overlap, which is what makes the pair usable for all $x$ — but the overlap is one of usability, not of accuracy. The crossover is exactly where the asymptotic series is at its weakest: at $x=2$ its best truncation ($N=4$) is still $1.4\%$ off, so in that region the convergent series is the one to trust, and step 4 will say so.
3. **Convergent series: sum until the terms are small.** The terms $t_{n} = 2(-1)^{n}x^{2n+1}/\bigl(\sqrt\pi(2n+1)n!\bigr)$ decrease in modulus as soon as $x^{2}<(2n+3)(n+1)/(2n+1)$, and after that the series alternates, so the sum of the discarded tail is at most $\lvert t_{n+1}\rvert$. Stop when that is below the tolerance.
4. **Asymptotic series: check the bound before trusting the value.** Add the terms $(-1)^{m}(2m-1)!!/(2^{m}x^{2m})$ while they decrease, that is while $m<x^{2}-\tfrac12$, and use part 6 to bound the error by the first omitted term. If that bound is above the tolerance, the expansion cannot reach it at this $x$ and no number of terms will help: go back to step 3, or use a continued fraction or quadrature.
5. **Sanity checks that cost nothing.** $0<\operatorname{erfc}(x)<1$ for $x>0$; $\operatorname{erfc}$ is decreasing; and the first two terms of part 6 bracket the answer, so the true value must lie between $e^{-x^{2}}/(x\sqrt\pi)\cdot(1-\tfrac1{2x^{2}})$ and $e^{-x^{2}}/(x\sqrt\pi)$ for $x>1$.
6. **For general $\gamma(a,x)$, $\Gamma(a,x)$ the same split applies**, with the crossover near $x\approx a+1$: series from part 2 below it, the expansion of part 4 above it, and the exact closed form of part 5 whenever $a$ is a positive integer.
:::

:::example[Both expansions, at $x=0.6$ and at $x=3$]{provenance=original}
**Small argument: $\operatorname{erf}(0.6)$ from the convergent series.** The terms $t_{n} = \tfrac{2}{\sqrt\pi}(-1)^{n}x^{2n+1}/\bigl((2n+1)n!\bigr)$ at $x=0.6$ are

| $n$ | $t_{n}$ | partial sum |
|---|---|---|
| $0$ | $+0.67702750$ | $0.67702750$ |
| $1$ | $-0.08124330$ | $0.59578420$ |
| $2$ | $+0.00877428$ | $0.60455848$ |
| $3$ | $-0.00075208$ | $0.60380640$ |
| $4$ | $+0.00005265$ | $0.60385904$ |
| $5$ | $-0.00000310$ | $0.60385594$ |
| $6$ | $+1.5745\times10^{-7}$ | $0.60385610$ |
| $7$ | $-7.0178\times10^{-9}$ | $0.60385609$ |

Eight terms give $\operatorname{erf}(0.6) = 0.603856091$, and the next term bounds the error by $2.8\times10^{-10}$; the true value is $0.6038560908479$, so the actual error is $-2.7\times10^{-10}$, inside the bound as the alternation guarantees. The terms shrink fast because $x^{2}=0.36$ is small, and a tolerance of $10^{-9}$ costs eight terms.

**Large argument: $\operatorname{erfc}(3)$ from the asymptotic series.** Here the prefactor is

$$
\frac{e^{-9}}{3\sqrt{\pi}} \;=\; \frac{1.2340980\times10^{-4}}{5.3173616} \;=\; 2.3208842\times10^{-5} ,
$$

and the bracket terms $(-1)^{m}(2m-1)!!/(2^{m}\cdot 9^{m})$ are $1$, $-\tfrac1{18}$, $+\tfrac{3}{324}$, $-\tfrac{15}{5832}$, $+\tfrac{105}{104976}$, i.e. $1$, $-0.0555556$, $+0.0092593$, $-0.0025720$, $+0.0010002$:

| $N$ | truncated sum | $\operatorname{erfc}(3)$ estimate | error | bound from part 6 |
|---|---|---|---|---|
| $1$ | $1.0000000$ | $2.3208842\times10^{-5}$ | $+1.12\times10^{-6}$ | $1.29\times10^{-6}$ |
| $2$ | $0.9444444$ | $2.1919462\times10^{-5}$ | $-1.71\times10^{-7}$ | $2.15\times10^{-7}$ |
| $3$ | $0.9537037$ | $2.2134359\times10^{-5}$ | $+4.39\times10^{-8}$ | $5.97\times10^{-8}$ |
| $4$ | $0.9511317$ | $2.2074665\times10^{-5}$ | $-1.58\times10^{-8}$ | $2.32\times10^{-8}$ |

The true value is $\operatorname{erfc}(3) = 2.20904970\times10^{-5}$. Every error is below its bound and alternates in sign, so consecutive rows bracket the answer: the value lies between $2.2074665\times10^{-5}$ and $2.2134359\times10^{-5}$ after four terms. That bracket is $2.7\times10^{-3}$ wide in relative terms and pins $\operatorname{erfc}(3)$ to $2.21\times10^{-5}$: three significant figures from four terms of arithmetic, with the $N=4$ entry itself in error by $7.2\times10^{-4}$ relative.

**Where it stops improving.** The terms decrease while $m<x^{2}-\tfrac12 = 8.5$, so the best truncation is $N=9$. It gives $2.2092512\times10^{-5}$, an absolute error of $2.0\times10^{-9}$ and a relative error of $9.1\times10^{-5}$. Adding further terms makes matters worse: $N=12$ gives error $-2.7\times10^{-9}$. About four correct digits is all this expansion will deliver at $x=3$, for any number of terms.

**The contrast with the convergent series at the same point.** The convergent series does converge at $x=3$, but it must first build up and then cancel away a value near $1$: its largest term is $214.17$ (at $n=7$), and reaching an absolute accuracy of $10^{-9}$ in $\operatorname{erf}(3) = 0.9999779095$ needs $37$ terms. To extract $\operatorname{erfc}(3)\approx2.2\times10^{-5}$ from that one then subtracts from $1$, and the cancellation costs about eight digits: $\sum_{n}\lvert t_{n}\rvert = 1629.99$ against an answer of $2.2090497\times10^{-5}$ is a ratio of $7.4\times10^{7}$, and the final subtraction $1-\operatorname{erf}(3)$ accounts for $\log_{10}(1/\operatorname{erfc}(3)) = 4.7$ of those digits on its own. Four terms of the asymptotic series are both cheaper and better conditioned — this is the whole case for a divergent expansion.
:::

:::application[Diffusion from a step: the error-function profile]{provenance=adapted src="strauss-2008:§2.4, Steps 1-3 and Eq. (5), pp. 48-49, and Example 1, p. 51; stakgold-holst-2011:§7.3, Eq. (7.3.22) and Duhamel's formula Eqs. (7.3.23)-(7.3.25), p. 449"}
The error function is not merely a convenient notation for a Gaussian integral; it is forced on the diffusion equation by a scaling argument, and the route is instructive.

Seek a solution of $u_{t}=ku_{xx}$ on the whole line depending only on the dimensionless combination $p = x/\sqrt{4kt}$ — the only such combination available, as :cite[Strauss]{work=strauss-2008 loc="§2.4, Step 1, p. 48"} argues from the invariance of the equation under $x\mapsto a^{1/2}x$, $t\mapsto at$. Writing $u = g(p)$ and using the chain rule, $u_{t} = -\tfrac{p}{2t}g'(p)$ and $u_{xx} = \tfrac{1}{4kt}g''(p)$, so the equation collapses to the ordinary differential equation

$$
g''(p)+2p\,g'(p) \;=\; 0 ,
$$

which is the equation satisfied by the error function. Its integrating factor $e^{p^{2}}$ gives $g'(p) = C_{1}e^{-p^{2}}$ and hence $g(p) = C_{1}\int_{0}^{p}e^{-q^{2}}dq+C_{2}$: every scale-invariant solution is an affine function of $\operatorname{erf}(p)$. Matching the step initial data $u(x,0)=1$ for $x>0$ and $0$ for $x<0$ fixes the constants (Strauss, Step 3, p. 49) and yields

$$
u(x,t) \;=\; \frac12+\frac12\operatorname{erf}\!\left(\frac{x}{\sqrt{4kt}}\right) .
$$

**A number.** Join two long copper bars at $t=0$, the half-line $x<0$ at $0^{\circ}$C and the half-line $x>0$ at $100^{\circ}$C, and ask for the temperature one centimetre inside the hot bar after $10$ s. Copper has thermal diffusivity $k = 1.11\times10^{-4}\,\mathrm{m^{2}\,s^{-1}}$, so

$$
\sqrt{4kt} \;=\; \sqrt{4\cdot1.11\times10^{-4}\cdot10} \;=\; 0.0666333\ \mathrm{m} ,
\qquad p \;=\; \frac{0.01}{0.0666333} \;=\; 0.1500751 .
$$

The convergent series of part 2 gives $\operatorname{erf}(0.1500751) = 0.1680788$ in four terms, so the temperature is

$$
T \;=\; 100\left(\frac12+\frac12\cdot0.1680788\right)\ ^{\circ}\mathrm{C} \;=\; 58.40\ ^{\circ}\mathrm{C} ,
$$

and by the oddness of $\operatorname{erf}$ the mirror point one centimetre into the cold bar sits at $41.60\,^{\circ}$C, the two averaging to the $50\,^{\circ}$C that the join itself holds for all time. The diffusion length $\sqrt{4kt}=6.7$ cm after ten seconds is why the answer is so close to the mean of $50\,^{\circ}$C: one centimetre is well inside the smeared front.

**Boundary data instead of initial data.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§7.3, Eq. (7.3.22), p. 449"} solve the companion half-line problem $u_{t}=u_{xx}$ on $x>0$ with $u(x,0)=0$ and $u(0,t)=1$, and obtain the complementary error function: $u(x,t) = \operatorname{erfc}\bigl(x/\sqrt{4t}\bigr)$, which is again of the form $C_{1}\int_{0}^{p}e^{-q^{2}}dq + C_{2}$ and so solves the same reduced equation, now with $g(0)=1$ and $g(\infty)=0$. On this solution they build Duhamel's formula (their Eqs. (7.3.23)-(7.3.25)), which superposes time-shifted copies to solve the problem with an arbitrary boundary temperature $h(t)$. The large-argument expansion of part 6 is what tells one how far the heat has not yet reached: at $p=3$ the surface temperature has raised the interior by only $2.2\times10^{-5}$ of its value.
:::
