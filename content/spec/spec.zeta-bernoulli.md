---
id: spec.zeta-bernoulli
title: Riemann zeta function and Bernoulli numbers
kind: definition
level: core
summary: Defines $\zeta(s)=\sum_{n\ge1}n^{-s}$ for real $s>1$ and the Bernoulli numbers $B_n$ by the generating function $t/(e^t-1)$, and proves Euler's identity $\zeta(2k)=(-1)^{k+1}(2\pi)^{2k}B_{2k}/\bigl(2\,(2k)!\bigr)$, which turns a rational recursion into the closed values $\pi^2/6$, $\pi^4/90$, $\pi^6/945$ and gives every $\zeta$ at an even integer.
prereqs: [asym.euler-maclaurin, found.series-convergence-tests, found.uniform-convergence, found.power-series, found.termwise-operations, complex.laurent-series, complex.residue-theorem, complex.taylor-series, complex.analytic-continuation, complex.pole-expansions-products, spec.gamma-function]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.2, Bernoulli Numbers: generating function Eq. (12.28), the values $B_0,B_1$ Eqs. (12.29)-(12.30), the recursion Eq. (12.34) and Table 12.2, the contour representation and Euler's formula Eqs. (12.37)-(12.39), pp. 560-565"
    pages: "560-565"
    role: definition of the Bernoulli numbers by generating function; the recursion used in the worked example; the contour-integral route to the formula for $\zeta(2n)$; the warning about competing conventions
  - work: arfken-2013
    loc: "§12.4, Dirichlet Series, Eq. (12.60) and Example 12.4.1 (and Eq. (12.62) for $\\eta$), pp. 571-572"
    pages: "571-572"
    role: the zeta series as a Dirichlet series; the independent evaluation $\zeta(2)=\pi^2/6$ and the quoted value $\zeta(4)=\pi^4/90$
  - work: arfken-2013
    loc: "§13.5, Riemann Zeta Function: the reflection formula Eq. (13.67), the alternating series Eq. (13.68), the residue at $z=1$ Eq. (13.69), the Euler prime product Eq. (13.72), and Exercises 13.5.3, 13.5.5, 13.5.6, 13.5.7, 13.5.8 and 13.5.10, pp. 629-633"
    pages: "629-633"
    role: what is true off the half line $s>1$ (continuation, the simple pole at $s=1$, the prime product); the blackbody integral of Exercise 13.5.5 that the application follows
  - work: rhb-2006
    loc: "§4.3.2, the integral test and the Riemann zeta series, with the grouping argument for $p\\le1$, pp. 128-130"
    pages: "128-130"
    role: convergence of the series for $p>1$ and its divergence for $p\le1$
  - work: ahlfors-1979
    loc: "Ch. 5, §4, Eq. (55), p. 212"
    pages: "212"
    role: the series as an analytic function of $s$ on the half plane $\operatorname{Re}s>1$, by uniform convergence on $\operatorname{Re}s\ge\sigma_0>1$
  - work: ahlfors-1979
    loc: "Ch. 5, §1.3, Exercise 4, p. 186"
    pages: "186"
    role: the Laurent development of $(e^z-1)^{-1}$ at the origin, and the positive-signed indexing of the Bernoulli numbers it uses
  - work: stein-shakarchi-2003
    loc: "Ch. 3, Problem 4, pp. 97-98"
    pages: "97-98"
    role: the same definition of $B_n$; the alternative proof route through the cotangent expansion, parts (c)-(e), which we describe but do not follow
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §3.1, the definition of $\\zeta(s)$ for $\\operatorname{Re}s>1$ and its link to $\\vartheta$ and $\\Gamma$, p. 155"
    pages: "155"
    role: the convention $\zeta(s)=\sum n^{-s}$ on $\operatorname{Re}s>1$ and the Mellin identity relating $\zeta$, $\Gamma$ and the theta function
  - work: grimmett-stirzaker-2020
    loc: "Problems 3.11.31 (the distribution with mass function proportional to $m^{-\\beta}$) and 3.11.52 (independence of the divisibility events, Euler's product, the square-free probability), pp. 93, 97"
    pages: "93, 97"
    role: the probabilistic application and its route
---

:::definition[The Riemann zeta function on the real half line]{provenance=adapted src="arfken-2013:§12.4, Eq. (12.60), p. 571, and §12.2, p. 564; stein-shakarchi-2003:Ch. 5, §3.1, p. 155; ahlfors-1979:Ch. 5, §4, Eq. (55), p. 212"}
For a real number $s > 1$ the **Riemann zeta function** is the sum of the convergent series

$$
\zeta(s) \;=\; \sum_{n=1}^{\infty}\frac{1}{n^{s}} \;=\; 1 + \frac{1}{2^{s}} + \frac{1}{3^{s}} + \cdots .
$$

Convergence for $s>1$ and divergence for $s\le1$ are decided by the integral test (:ref[]{to=found.series-convergence-tests}). The test needs a positive decreasing function, so take $s>0$ first; then $x\mapsto x^{-s}$ is positive and decreasing on $[1,\infty)$, and for $s \neq 1$

$$
\int_{1}^{N}x^{-s}\,dx \;=\; \frac{N^{1-s}-1}{1-s} ,
$$

which has a finite limit as $N\to\infty$ exactly when $s>1$, while for $s=1$ the integral is $\ln N \to \infty$. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§4.3.2, pp. 128-130"} record both halves of this, and also give a second proof of the divergence at $s=1$ by grouping the terms $2^{-k}+\cdots+(2^{k+1}-1)^{-1} \ge \tfrac12$. For $s\le0$ the function $x^{-s}$ is not decreasing and the test says nothing, but there it is not needed: the terms $n^{-s}\ge1$ do not tend to $0$. In fact a single comparison covers the whole of $s<1$ at once, since $n^{-s} \ge n^{-1}$ there.

Two matters of notation. The argument is written $s$ by :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 5, §4, p. 212"} and :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3.1, p. 155"}. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.4, Eq. (12.60), p. 571"} write $\zeta(s)$ where they introduce the Dirichlet series, but $\zeta(z)$ where they treat the function as a function of a complex variable — at §12.2, p. 564, and throughout §13.5, pp. 629-631. We use $s$ everywhere. And the same series defines an analytic function of a complex argument on the half plane $\operatorname{Re}s > 1$, because it converges uniformly on each closed half plane $\operatorname{Re}s\ge\sigma_0>1$, where it is dominated by $\sum n^{-\sigma_0}$ (Ahlfors, p. 212, with the Weierstrass $M$-test of :ref[]{to=found.uniform-convergence}). This unit needs only real $s>1$; see the note below for what lies beyond.
:::

:::definition[Bernoulli numbers]{provenance=adapted src="arfken-2013:§12.2, Eqs. (12.28)-(12.30) and Table 12.2, pp. 560-562; stein-shakarchi-2003:Ch. 3, Problem 4(a), p. 97"}
The **Bernoulli numbers** $B_0, B_1, B_2,\dots$ are the Taylor coefficients, scaled by factorials, of the function

$$
G(t) \;=\; \frac{t}{e^{t}-1} \;=\; \sum_{n=0}^{\infty}\frac{B_{n}}{n!}\,t^{n} .
$$

The quotient is defined and analytic on the punctured disc $0<\lvert t\rvert<2\pi$ and extends analytically across $t=0$: since $e^t-1 = t\bigl(1+\tfrac{t}{2}+\tfrac{t^2}{6}+\cdots\bigr)$ has a simple zero at the origin with the bracket equal to $1$ there, $G$ has a removable singularity at $t=0$ with $G(0)=1$. Its nearest singularities are the simple poles of $1/(e^t-1)$ at $t=\pm2\pi i$, so the radius of convergence of the series above is exactly $2\pi$ (:ref[]{to=complex.taylor-series}).

Reading off the first two coefficients gives $B_0 = 1$ and, by one differentiation at the origin,

$$
B_{1} \;=\; G'(0) \;=\; -\tfrac12 .
$$

Multiplying the series for $G$ by $(e^t-1)/t = \sum_{m\ge0}t^{m}/(m+1)!$ and requiring the product to be $1$ gives, on comparing coefficients of $t^{N}$, a rational recursion determining every $B_n$ from its predecessors. In the form :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (12.34), p. 561"} give for the even-index numbers,

$$
N-1 \;=\; \sum_{n=1}^{N-1}\binom{2N}{2n}B_{2n} , \qquad N = 2,3,4,\dots
$$

:cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 3, Problem 4(b), p. 97"} state the equivalent recursion over all indices, $B_n = -\tfrac{1}{n+1}\sum_{k=0}^{n-1}\binom{n+1}{k}B_k$ for $n\ge1$. Either gives

$$
B_{0}=1,\quad B_{1}=-\tfrac12,\quad B_{2}=\tfrac16,\quad B_{4}=-\tfrac1{30},\quad B_{6}=\tfrac1{42},\quad B_{8}=-\tfrac1{30},\quad B_{10}=\tfrac{5}{66},\quad B_{12}=-\tfrac{691}{2730},
$$

with $B_{n}=0$ for every odd $n\ge3$ (proved below). Arfken, Weber and Harris tabulate these as far as $B_{10}$ (Table 12.2, p. 562); the value of $B_{12}$ quoted here is the next one either recursion returns, and is not taken from the table. The Bernoulli *polynomials* $B_n(x)$, generated by $te^{xt}/(e^t-1)$, and the summation formula in which they are used belong to :ref[]{to=asym.euler-maclaurin}.
:::

:::statement[Euler's formula for $\zeta$ at the even integers]{provenance=adapted src="arfken-2013:§12.2, Eqs. (12.37)-(12.38), pp. 563-564; stein-shakarchi-2003:Ch. 3, Problem 4(c),(e), pp. 97-98"}
For every integer $n\ge2$,

$$
\frac{B_{n}}{n!} \;=\; -\sum_{\substack{m\in\mathbb{Z}\\ m\neq0}}\frac{1}{(2\pi m i)^{n}} .
$$

Consequently:

1. **Odd indices vanish.** $B_{n} = 0$ for every odd $n \ge 3$.
2. **Even indices are zeta values.** For every integer $k\ge1$,

   $$
   B_{2k} \;=\; (-1)^{k+1}\,\frac{2\,(2k)!}{(2\pi)^{2k}}\,\zeta(2k) ,
   $$

   which is the form in :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (12.38), p. 564"}; equivalently, solving for the zeta value,

   $$
   \zeta(2k) \;=\; (-1)^{k+1}\,\frac{(2\pi)^{2k}}{2\,(2k)!}\,B_{2k} .
   $$

   In particular $\zeta(2)=\pi^{2}/6$, $\zeta(4)=\pi^{4}/90$ and $\zeta(6)=\pi^{6}/945$.
3. **Signs and growth.** Since $\zeta(2k)>0$, the sign of $B_{2k}$ is $(-1)^{k+1}$: the even-index Bernoulli numbers alternate in sign. And since $\zeta(2k)\to1$, the formula forces $\lvert B_{2k}\rvert \sim 2\,(2k)!/(2\pi)^{2k}$, which grows without bound — :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 564"} quote $B_{20} = -5.291\times10^{2}$ and $B_{200} = -3.647\times10^{215}$.

The identity says nothing about $\zeta$ at odd arguments; no closed form for $\zeta(3), \zeta(5),\dots$ is known, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.4, p. 572"} go no further than saying that these values seem to resist evaluation in closed form.
:::

:::idea{provenance=original}
Everything follows from one observation: the function being expanded, $t/(e^t-1)$, has poles, and the Bernoulli numbers are its Taylor coefficients, so the coefficients must remember where the poles are. The poles of $1/(e^t-1)$ sit at the points $2\pi m i$, evenly spaced up the imaginary axis, all simple, all with residue $1$. A sum over an arithmetic progression of poles is a sum of the form $\sum m^{-n}$ — a zeta value.

The mechanism that converts "Taylor coefficient" into "sum over all the poles" is the residue theorem. Write $B_n/n!$ as the residue at the origin of $t^{-n}/(e^t-1)$, by Cauchy's coefficient formula. Then integrate that same function around a large circle. The circle encloses the origin and the $2N$ nearest poles on the imaginary axis, so the integral is $2\pi i$ times $B_n/n!$ plus the residues $(2\pi m i)^{-n}$. On the other hand the integrand decays like $\lvert t\rvert^{-n}$ on the circle while the perimeter grows only linearly, so the integral itself tends to $0$ once $n\ge2$. The two statements together say that the Taylor coefficient is minus the sum of all the other residues.

The last step is bookkeeping in the sum $\sum_{m\ne0}(2\pi m i)^{-n}$: pairing $m$ with $-m$ makes it vanish for odd $n$ and doubles it for even $n$, and for $n=2k$ the factor $i^{-2k}=(-1)^{k}$ comes out, leaving exactly $\zeta(2k)$.

The one quantitative point needing care is the circle. The radius must be chosen to keep the contour away from the poles — the odd multiples $(2N+1)\pi$ do that, sitting half a period from every pole — and then $1/(e^t-1)$ is bounded on every such circle by a constant that does not depend on $N$.
:::

:::proof{provenance=adapted src="arfken-2013:§12.2, Eqs. (12.37)-(12.38) and Fig. 12.1, pp. 563-564"}
Fix $n\ge2$ and set

$$
g(t) \;=\; \frac{t^{-n}}{e^{t}-1} .
$$

**Step 1: the poles of $g$ and the residues away from the origin.** The zeros of $e^{t}-1$ are the points $t = 2\pi m i$, $m \in \mathbb{Z}$, and each is simple because $\frac{d}{dt}(e^t-1) = e^{t} = 1 \ne 0$ there. For $m \ne 0$ the factor $t^{-n}$ is analytic at $2\pi m i$, so $g$ has a simple pole there with

$$
\operatorname*{Res}_{t=2\pi m i} g \;=\; \frac{(2\pi m i)^{-n}}{e^{2\pi m i}} \;=\; \frac{1}{(2\pi m i)^{n}} ,
$$

by the quotient rule for simple poles (:ref[]{to=complex.residue-theorem}). Apart from these, $g$ is analytic except at $t=0$.

**Step 2: the residue at the origin is the Bernoulli number.** On $0<\lvert t\rvert<2\pi$ the definition of the $B_k$ gives the Laurent development

$$
g(t) \;=\; t^{-n-1}\cdot\frac{t}{e^{t}-1} \;=\; \sum_{k=0}^{\infty}\frac{B_{k}}{k!}\,t^{\,k-n-1} ,
$$

convergent on that punctured disc. The coefficient of $t^{-1}$ is the term $k=n$, so by uniqueness of the Laurent expansion (:ref[]{to=complex.laurent-series})

$$
\operatorname*{Res}_{t=0} g \;=\; \frac{B_{n}}{n!} .
$$

**Step 3: a lower bound for $\lvert e^{t}-1\rvert$ on the circles $\lvert t\rvert = R_{N}$.** Put $R_{N} = (2N+1)\pi$ for $N\ge1$. We claim

$$
\lvert e^{t}-1\rvert \;\ge\; \tfrac12 \qquad\text{for all } \lvert t\rvert = R_{N},\ N\ge1 .
$$

Write $t = x+iy$ and split on the size of $x$.

- *If $\lvert x\rvert\ge1$:* the reverse triangle inequality gives $\lvert e^{t}-1\rvert \ge \bigl\lvert\,\lvert e^{t}\rvert-1\,\bigr\rvert = \lvert e^{x}-1\rvert$, which is at least $e-1$ when $x\ge1$ and at least $1-e^{-1} = 0.6321$ when $x\le-1$.
- *If $\lvert x\rvert\le1$:* then $\lvert y\rvert = \sqrt{R_{N}^{2}-x^{2}} \ge \sqrt{R_{N}^{2}-1}$, so
  $$
  0 \;\le\; R_{N}-\lvert y\rvert \;\le\; R_{N}-\sqrt{R_{N}^{2}-1} \;=\; \frac{1}{R_{N}+\sqrt{R_{N}^{2}-1}} \;\le\; \frac{1}{R_{N}} \;\le\; \frac{1}{3\pi} \;<\; 0.107 .
  $$
  Since $R_{N} = 2\pi N+\pi$, writing $\eta = \lvert y\rvert - 2\pi N$ puts $\eta$ in the interval $[\pi-0.107,\ \pi]$. The function $e^{t}-1$ has period $2\pi i$, so $\lvert e^{t}-1\rvert = \lvert e^{x+i\eta}-1\rvert$ and
  $$
  \lvert e^{x+i\eta}-1\rvert^{2} \;=\; e^{2x}-2e^{x}\cos\eta+1 \;\ge\; e^{2x}+2e^{x}\cos(0.107)+1 \;\ge\; e^{-2}+1.98\,e^{-1}+1 \;>\; 1.8 ,
  $$
  using $\cos\eta \le \cos(\pi-0.107) = -\cos(0.107) < -0.994$ in the middle step and $x \ge -1$ with monotonicity in $x$ at the end. Hence $\lvert e^{t}-1\rvert > 1.3$ here.

Both cases give at least $\tfrac12$, and in particular no pole of $g$ lies on any circle $\lvert t\rvert = R_{N}$.

**Step 4: the contour integral vanishes in the limit.** The poles of $g$ inside $\lvert t\rvert<R_{N}$ are $t=0$ and $t = 2\pi m i$ with $1 \le \lvert m\rvert \le N$, since $\lvert 2\pi m\rvert < (2N+1)\pi$ is exactly $\lvert m\rvert\le N$. The residue theorem on the positively oriented circle $C_{N} = \{\lvert t\rvert = R_{N}\}$ therefore gives

$$
\frac{1}{2\pi i}\oint_{C_{N}} g(t)\,dt \;=\; \frac{B_{n}}{n!} \;+\; \sum_{1\le\lvert m\rvert\le N}\frac{1}{(2\pi m i)^{n}} .
$$

By Step 3 the integrand obeys $\lvert g(t)\rvert \le 2R_{N}^{-n}$ on $C_{N}$, so the estimate for contour integrals gives

$$
\left\lvert\frac{1}{2\pi i}\oint_{C_{N}}g\,dt\right\rvert \;\le\; \frac{1}{2\pi}\cdot 2\pi R_{N}\cdot\frac{2}{R_{N}^{\,n}} \;=\; \frac{2}{R_{N}^{\,n-1}} \;\xrightarrow[N\to\infty]{}\;0 ,
$$

because $n\ge2$ makes the exponent $n-1$ positive. The remaining sum converges absolutely, its terms having modulus $(2\pi\lvert m\rvert)^{-n}$ with $n\ge2$, so letting $N\to\infty$ yields the displayed identity

$$
\frac{B_{n}}{n!} \;=\; -\sum_{m\ne0}\frac{1}{(2\pi m i)^{n}} .
$$

**Step 5: separate the parities.** Pair the terms $m$ and $-m$. For odd $n$, $(-m)^{-n} = -m^{-n}$, so each pair cancels and the sum is $0$; hence $B_{n}=0$ for odd $n\ge3$, which is claim 1. For $n = 2k$ the two terms of a pair are equal, and $i^{-2k} = (i^{2})^{-k} = (-1)^{k}$, so

$$
\frac{B_{2k}}{(2k)!} \;=\; -\,2\sum_{m=1}^{\infty}\frac{1}{(2\pi m)^{2k}\,i^{2k}} \;=\; \frac{(-1)^{k+1}\,2}{(2\pi)^{2k}}\sum_{m=1}^{\infty}\frac{1}{m^{2k}} \;=\; (-1)^{k+1}\,\frac{2\,\zeta(2k)}{(2\pi)^{2k}} ,
$$

the last step by the definition of $\zeta$ at the real argument $2k>1$. Multiplying by $(2k)!$ gives claim 2 in Arfken's form, and dividing instead by the prefactor gives the inverted form. Claim 3 is immediate: every term of $\zeta(2k)$ is positive, so $\operatorname{sign}B_{2k} = (-1)^{k+1}$, and $1 < \zeta(2k) \le \zeta(2) = \pi^{2}/6$ for $k\ge1$ pins $\lvert B_{2k}\rvert$ between $2(2k)!/(2\pi)^{2k}$ and $\tfrac{\pi^{2}}{6}$ times that.

The sample values follow from the table of $B_{2k}$: with $k=1$, $(2\pi)^{2}/(2\cdot2!) = \pi^{2}$ and $B_2 = 1/6$ give $\zeta(2)=\pi^{2}/6$; with $k=2$, $(2\pi)^{4}/(2\cdot4!) = \pi^{4}/3$ and $B_4 = -1/30$ with the sign $(-1)^{3}$ give $\zeta(4) = \pi^{4}/90$; $k=3$ is done in the example below. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="arfken-2013:§12.2, pp. 560-564; stein-shakarchi-2003:Ch. 3, Problem 4(c), p. 98"}
- **$s>1$ in the definition.** This is what makes the defining series converge, and it is used at the very end of the proof, where $\sum m^{-2k}$ is identified as $\zeta(2k)$: the identification is legitimate only because $2k\ge2>1$. The proof produces no information at odd arguments and none at $s\le1$.
- **$n\ge2$ in the main identity.** It enters twice: to make the large-circle bound $2R_N^{1-n}$ tend to zero, and to make the residue sum converge absolutely. For $n=1$ the identity is false — its right-hand side is a divergent symmetric sum, while $B_1 = -\tfrac12$ — and this is exactly why $B_1$ is the one odd-index Bernoulli number that does not vanish. It has to be computed separately from the generating function, as in the definition above.
- **The radius $R_N = (2N+1)\pi$.** An odd multiple of $\pi$ sits half a period away from every pole $2\pi m i$, which is what Step 3 converts into a bound independent of $N$. A circle of radius $2N\pi$ would pass through two poles and the argument would not even be stated. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Fig. 12.1, p. 563"} use a different contour for the same purpose — one that detours around the origin and runs along the real axis — and must then argue that the two real-axis segments cancel and that the large arc is negligible; the single growing circle avoids both discussions.
- **Simplicity of the poles of $1/(e^t-1)$.** Used in Step 1 to get the residue $1$. At $t=0$ the pole of $g$ has order $n+1$, so Step 2 reads the residue off the Laurent series instead of using a residue formula — this is the step that makes the Bernoulli numbers appear at all.
- **The radius of convergence $2\pi$ is a real restriction.** The series $\sum B_nt^n/n!$ is useless beyond $\lvert t\rvert = 2\pi$, which is why the expansions of $\cot$, $\tan$ and $\coth$ in Bernoulli numbers all carry a condition like $\lvert t\rvert<2\pi$ or $\lvert t\rvert<\pi$. Claim 3 is the same fact seen from the coefficients: $\lvert B_{2k}\rvert^{1/2k}/(2k)!^{1/2k} \to 1/2\pi$.
- **An alternative route.** :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 3, Problem 4(c)-(e), pp. 97-98"} reach the same formula without contours: the generating function gives $z\cot z = 1+\sum_{k\ge1}(-1)^{k}2^{2k}B_{2k}z^{2k}/(2k)!$, the partial-fraction expansion of the cotangent (:ref[]{to=complex.pole-expansions-products}) gives $x\cot x = 1-2\sum_{m\ge1}\zeta(2m)x^{2m}/\pi^{2m}$, and comparing coefficients of $x^{2m}$ does the rest. The two routes are the same computation in different dress, since the partial-fraction expansion of the cotangent is itself a statement about the poles at the multiples of $\pi$. We follow the contour route because it needs only the residue theorem, which :ref[]{to=complex.residue-theorem} already provides.
:::

:::note[Three conventions for the Bernoulli numbers, and what lies outside $s>1$]{provenance=adapted src="arfken-2013:§12.2, Eq. (12.39), p. 564; ahlfors-1979:Ch. 5, §1.3, Exercise 4, p. 186; arfken-2013:§13.5, Eqs. (13.67)-(13.72) and Exercise 13.5.10, pp. 629-633"}
**Conventions.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 560"} warn that formulas from different authors must not be combined without checking the definition, and the library bears them out. Three indexings occur in it:

- ours, $t/(e^t-1)=\sum B_nt^n/n!$, which is the convention of the *Handbook of Mathematical Functions* that Arfken, Weber and Harris adopt (p. 560);
- the variant they record at Eq. (12.39), $\widetilde B_{k} = 2(2k)!\,\zeta(2k)/(2\pi)^{2k}$, with the subscript halved and all signs positive, so that $\widetilde B_{k} = \lvert B_{2k}\rvert$;
- :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 5, §1.3, Exercise 4, p. 186"}, who writes the Laurent development of $(e^{z}-1)^{-1}$ at the origin as $z^{-1}-\tfrac12+\sum_{k\ge1}(-1)^{k-1}B_{k}^{\mathrm{A}}z^{2k-1}/(2k)!$ and notes that these $B^{\mathrm{A}}_{k}$ are all positive. Comparing with our Step 2 gives $B^{\mathrm{A}}_{k} = (-1)^{k-1}B_{2k} = \lvert B_{2k}\rvert$, so Ahlfors' indexing agrees with the second variant.

So the only differences in this library are the halved subscript and the suppressed sign; with ours, $B_{2k}$ and $\zeta(2k)$ are related with the factor $(-1)^{k+1}$, and with the other two the sign disappears. Our numerical values $B_2=\tfrac16$, $B_4=-\tfrac1{30}$, $B_6=\tfrac1{42}$ are on our convention throughout.

**Outside the half line.** Everything above is confined to real $s>1$, which is this unit's scope, but the function does not stop there. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.5, pp. 629-633"} continue $\zeta$ to the whole plane by the reflection formula $\Gamma(\tfrac{z}{2})\pi^{-z/2}\zeta(z) = \Gamma(\tfrac{1-z}{2})\pi^{-(1-z)/2}\zeta(1-z)$ (Eq. (13.67)) together with the alternating series $\zeta(z) = (1-2^{1-z})^{-1}\sum_{n\ge1}(-1)^{n-1}n^{-z}$, which converges on $\operatorname{Re}z>0$ and so covers the critical strip; the continued function is analytic except for a simple pole at $z=1$ of residue $1$ (Eq. (13.69) and Exercise 13.5.10). They also derive Euler's prime product $\zeta(s) = \prod_{p\text{ prime}}(1-p^{-s})^{-1}$ (Eq. (13.72)), which the application below meets again in probabilistic clothing. The machinery is that of :ref[]{to=complex.analytic-continuation}; none of it is needed here.
:::

:::method[Values of $\zeta$ at integer arguments]{provenance=original}
1. **Even argument $2k$, closed form.** Get $B_{2k}$ from the recursion $N-1 = \sum_{n=1}^{N-1}\binom{2N}{2n}B_{2n}$ with $N=k+1$, which involves only the earlier even-index numbers; then
   $$
   \zeta(2k) \;=\; (-1)^{k+1}\frac{(2\pi)^{2k}}{2\,(2k)!}B_{2k} .
   $$
   The arithmetic is exact and rational apart from the power of $\pi$.
2. **Odd argument, or non-integer $s$.** No closed form is available, and summing the series directly converges only algebraically: its terms decay like $n^{-s}$ and the tail after $N$ terms is about $N^{1-s}/(s-1)$. At $s=3$ that tail is about $1/(2N^{2})$, so a few dozen terms are enough for four figures — $N=32$ puts the partial sum within $5\times10^{-4}$ of $\zeta(3)=1.2020569\ldots$ — but every further decimal digit costs a factor $\sqrt{10}\approx3.2$ in $N$: $N=707$ for $10^{-6}$ and $N\approx2.2\times10^{4}$ for $10^{-9}$. The cost worsens without limit as $s\downarrow1$, where the exponent $s-1$ collapses. For many digits, or for $s$ near $1$, either
   - use Euler-Maclaurin summation (:ref[]{to=asym.euler-maclaurin}), which replaces the tail $\sum_{n\ge N}n^{-s}$ by $\frac{N^{1-s}}{s-1}+\frac{N^{-s}}{2}+\cdots$, the further corrections carrying the same $B_{2k}$ as above, and gives many digits from a handful of terms; or
   - use the alternating series $\zeta(s) = (1-2^{1-s})^{-1}\sum_{n\ge1}(-1)^{n-1}n^{-s}$ of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (13.68), p. 629"}, whose partial sums bracket the answer.
3. **A consistency check worth doing.** Any claimed $\zeta(2k)$ should satisfy $\zeta(2k)>1$, decrease in $k$, and sit above the two-term lower bound $1+2^{-2k}$. The closed forms do: $\pi^{2}/6 = 1.644934$, $\pi^{4}/90 = 1.082323$, $\pi^{6}/945 = 1.017343$.
:::

:::example[$\zeta(6)=\pi^{6}/945$, from the recursion to the number]{provenance=original}
**Step 1: $B_{6}$ from the recursion.** Take $N=4$ in $N-1=\sum_{n=1}^{N-1}\binom{2N}{2n}B_{2n}$:

$$
3 \;=\; \binom{8}{2}B_{2}+\binom{8}{4}B_{4}+\binom{8}{6}B_{6} \;=\; 28\cdot\tfrac16 \;+\; 70\cdot\left(-\tfrac1{30}\right) \;+\; 28\,B_{6} .
$$

The first two terms are $\tfrac{14}{3}$ and $-\tfrac73$, whose sum is $\tfrac73$, so $28B_{6} = 3-\tfrac73 = \tfrac23$ and

$$
B_{6} \;=\; \frac{2}{3\cdot28} \;=\; \frac{1}{42} .
$$

(The same recursion at $N=2$ and $N=3$ returns $B_2=\tfrac16$ and $B_4=-\tfrac1{30}$, and at $N=5,6$ it returns $B_8=-\tfrac1{30}$, $B_{10}=\tfrac5{66}$, matching Table 12.2 of Arfken, Weber and Harris, p. 562.)

**Step 2: insert it.** With $k=3$ the sign is $(-1)^{4}=+1$, the factorial is $6! = 720$, and $(2\pi)^{6} = 64\pi^{6}$:

$$
\zeta(6) \;=\; \frac{64\pi^{6}}{2\cdot720}\cdot\frac{1}{42} \;=\; \frac{64\pi^{6}}{60480} \;=\; \frac{\pi^{6}}{945} .
$$

The reduction is $60480/64 = 945$. Numerically $\pi^{6} = 961.389194$, so

$$
\zeta(6) \;=\; 1.0173430620 .
$$

**Step 3: check it against the series.** Summing $\sum_{n\le N}n^{-6}$ directly:

| $N$ | $\sum_{n\le N}n^{-6}$ | $\zeta(6)-\sum$ | tail bound $\tfrac1{5N^{5}}$ |
|---|---|---|---|
| $10$ | $1.01734151244$ | $1.5495\times10^{-6}$ | $2.0\times10^{-6}$ |
| $100$ | $1.01734306196$ | $1.95\times10^{-11}$ | $2.0\times10^{-11}$ |
| $1000$ | $1.01734306198$ | $2.0\times10^{-16}$ | $2.0\times10^{-16}$ |

The tail bound is the integral comparison $\sum_{n>N}n^{-6} \le \int_{N}^{\infty}x^{-6}dx = 1/(5N^{5})$, the same comparison that proved convergence in the definition; the observed errors sit just below it, as they must. Note the cost: $1000$ terms of the series buy sixteen digits, while Step 2 gives them all exactly. That contrast is the whole point of the closed form, and it is also why the method above sends odd arguments to Euler-Maclaurin rather than to the series.
:::

:::application[Blackbody radiation and the Stefan-Boltzmann constant]{provenance=adapted src="arfken-2013:§13.5, Exercises 13.5.3, 13.5.5, 13.5.6, 13.5.7 and 13.5.8, pp. 632-633"}
The energy density of thermal radiation in a cavity, integrated over frequency with the Planck distribution, is

$$
u \;=\; \frac{8\pi k^{4}T^{4}}{c^{3}h^{3}}\int_{0}^{\infty}\frac{x^{3}}{e^{x}-1}\,dx ,
$$

the set-up of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 13.5.5, p. 632"}, where $x = h\nu/kT$. The integral is a zeta value. Expand the integrand as a geometric series in $e^{-x}$, which is legitimate term by term because every term is positive and the partial sums increase ($\sum_{n\le M}$ of positive measurable terms, so monotone convergence applies, :ref[]{to=found.termwise-operations}):

$$
\int_{0}^{\infty}\frac{x^{3}}{e^{x}-1}dx \;=\; \int_{0}^{\infty}x^{3}\sum_{n=1}^{\infty}e^{-nx}\,dx \;=\; \sum_{n=1}^{\infty}\int_{0}^{\infty}x^{3}e^{-nx}dx \;=\; \sum_{n=1}^{\infty}\frac{3!}{n^{4}} \;=\; 3!\,\zeta(4) ,
$$

the inner integral being $\Gamma(4)/n^{4}$ after $x\mapsto x/n$ (:ref[]{to=spec.gamma-function}). This is the general identity $\int_{0}^{\infty}x^{s}(e^{x}-1)^{-1}dx = \Gamma(s+1)\zeta(s+1)$ of Arfken, Weber and Harris, Exercise 13.5.6. Now Euler's formula supplies the closed value: $3!\,\zeta(4) = 6\cdot\pi^{4}/90 = \pi^{4}/15 = 6.49393940$.

So $u = 8\pi^{5}k^{4}T^{4}/(15c^{3}h^{3})$, and with the radiated flux $\sigma T^{4} = cu/4$,

$$
\sigma \;=\; \frac{2\pi^{5}k^{4}}{15\,c^{2}h^{3}} .
$$

Putting in $k = 1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$, $h = 6.62607015\times10^{-34}\,\mathrm{J\,s}$ and $c = 2.99792458\times10^{8}\,\mathrm{m\,s^{-1}}$ gives

$$
\sigma \;=\; 5.6703744\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}} ,
$$

the measured Stefan-Boltzmann constant. The $\pi^{5}$ in that number is $\pi^{4}$ from $\zeta(4)$ — that is, from $B_{4} = -1/30$ — times one $\pi$ from the solid-angle factor. The same pattern recurs: Arfken, Weber and Harris's Exercise 13.5.3 puts $\zeta(5)$ into the low-temperature resistivity of a monovalent metal, and Exercise 13.5.8 puts $7\pi^{5}/30$ into the neutrino energy density of the early universe. That last factor is the Fermi counterpart of the computation above: the sign in the denominator changes to $e^{x}+1$, the geometric series becomes alternating, and Arfken, Weber and Harris's Exercise 13.5.7 gives $\int_{0}^{\infty}x^{s}(e^{x}+1)^{-1}dx = \Gamma(s+1)(1-2^{-s})\zeta(s+1)$, so that $\int_{0}^{\infty}x^{3}(e^{x}+1)^{-1}dx = 6\cdot\tfrac78\cdot\tfrac{\pi^{4}}{90} = \tfrac{7\pi^{4}}{120}$, which is $\tfrac78$ of the Bose value. Where a Bose or Fermi distribution is integrated against a power, a zeta value appears, and for an even argument this unit evaluates it.
:::

:::application[A random integer: Euler's product as independence]{provenance=adapted src="grimmett-stirzaker-2020:Problems 3.11.31 and 3.11.52, pp. 93, 97"}
Because $\zeta(\beta)<\infty$ for $\beta>1$, the weights $m^{-\beta}$ can be normalised into a probability distribution on $\mathbb{N}$:

$$
\mathbb{P}(M=m) \;=\; \frac{m^{-\beta}}{\zeta(\beta)} , \qquad m = 1,2,3,\dots
$$

:cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Problem 3.11.31, p. 93"} construct this $M$ as $\prod_{i}p_{i}^{N(i)}$ over the primes $p_1,p_2,\dots$, with the exponents $N(i)$ independent and geometric with parameter $1-p_{i}^{-\beta}$; the normalising constant then has the two expressions $\zeta(\beta)^{-1} = \prod_{i}(1-p_{i}^{-\beta})$, which is Euler's product. Read the other way (their Problem 3.11.52, p. 97), the events $E_{p} = \{p \text{ divides } M\}$ are independent across primes with $\mathbb{P}(E_{p}) = p^{-\beta}$, and Euler's product is just the statement that $\mathbb{P}(M=1) = \prod_{p}(1-p^{-\beta})$.

Independence makes a divisibility question into a product. Grimmett and Stirzaker's part (c): $M$ is divisible by no perfect square above $1$ exactly when no $p^{2}$ divides it, and these events are independent with probability $p^{-2\beta}$ each, so

$$
\mathbb{P}(M \text{ square-free}) \;=\; \prod_{p}\bigl(1-p^{-2\beta}\bigr) \;=\; \frac{1}{\zeta(2\beta)} .
$$

At $\beta=2$ the answer is a number this unit can produce in closed form, because $2\beta = 4$ is even:

$$
\mathbb{P}(M\text{ square-free}) \;=\; \frac{1}{\zeta(4)} \;=\; \frac{90}{\pi^{4}} \;=\; 0.9239384 .
$$

The classical companion, with the uniform distribution on $\{1,\dots,n\}$ and $n\to\infty$, is $1/\zeta(2) = 6/\pi^{2} = 0.6079271$ for the probability that two integers are coprime. Both numbers are closed-form only because the argument is even.
:::
