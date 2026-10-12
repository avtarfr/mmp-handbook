---
id: found.taylor-theorem
title: Taylor's theorem
kind: theorem
level: core
summary: The Taylor polynomial of order N approximates a function with an error given exactly by the Lagrange or the integral remainder; the Taylor series represents the function only where that remainder tends to zero, and for some smooth functions it never does.
prereqs: [found.power-series, found.series-convergence-tests]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.2, Taylor's expansion, Eqs. (1.40)-(1.46) with footnotes 2 and 3, pp. 26-28; Maclaurin series of ln(1+x) and its range, p. 29"
    pages: "26-29"
    role: Taylor expansion with the iterated-integral remainder (1.41) and the Lagrange remainder (1.43); the Taylor and Maclaurin series; range of the logarithmic series
  - work: rhb-2006
    loc: "§4.6, Taylor's theorem with the Lagrange remainder and the condition R_n -> 0, pp. 137-138; §4.6.2 error bounds, pp. 139-140; §4.6.3 standard Maclaurin series, p. 140"
    pages: "137-140"
    role: statement of Taylor's theorem in the forms (4.17) and (4.18); truncation-error bound; the table of standard Maclaurin series with their ranges
  - work: stakgold-holst-2011
    loc: "§10.1, Thm 10.1.2, Taylor's theorem in Banach spaces, pp. 646-647"
    pages: "646-647"
    role: the closed form of the integral remainder, specialised here to one real variable
  - work: folland-1999
    loc: "§8.1, Taylor's formula for C^k functions and the function e^{-1/t} on (0, infinity), p. 236; §8.8 Notes on the hypotheses of Taylor's theorem, p. 278"
    pages: "236, 278"
    role: the C^k form of the theorem with remainder o(|x-a|^k); the smooth function all of whose derivatives vanish at the origin
---

:::note{provenance=original}
**What it means.** Taylor's theorem is not a statement about infinite series: for each fixed $N$ it is an exact identity, a polynomial plus an error term you can bound. That is what makes it the standard tool for approximation and for error estimates, and the Lagrange form is usually the one to reach for, because it converts a bound on one derivative into a bound on the error. The infinite Taylor series is a separate question, and the right one to ask is whether the remainder tends to zero, not whether the series converges: it can converge to the wrong thing, or converge nowhere useful, while the function remains perfectly smooth.
:::

:::definition[Taylor polynomial and remainder]{provenance=adapted src="arfken-2013:§1.2, Eqs. (1.40) and (1.44)-(1.46), pp. 26-27; rhb-2006:§4.6, Eqs. (4.16)-(4.18), pp. 137-138"}
Let $f$ be real-valued on an interval $I$, let $a \in I$, and let $N \ge 0$ be an integer such that $f^{(N)}(a)$ exists. The **Taylor polynomial of order $N$** of $f$ about $a$ is

$$
P_N(x) = \sum_{k=0}^{N} \frac{f^{(k)}(a)}{k!} \, (x-a)^k ,
$$

and the **remainder** is $R_N(x) = f(x) - P_N(x)$. With $a = 0$ the polynomial is called a **Maclaurin** polynomial. If $f$ has derivatives of all orders at $a$, the **Taylor series** of $f$ about $a$ is $\sum_{k \ge 0} f^{(k)}(a)(x-a)^k/k!$; it is a power series in $x - a$, so :ref[Power series]{to=found.power-series} applies to it. The series represents $f$ at a point $x$ exactly when $R_N(x) \to 0$ as $N \to \infty$; convergence of the series alone is not enough, because convergence of $P_N(x)$ to *some* limit does not identify that limit as $f(x)$, and the two can differ at every $x$ of an interval (first bullet of the remark below).
:::

:::statement[Taylor's theorem: Lagrange and integral remainders]{provenance=adapted src="arfken-2013:§1.2, Eqs. (1.40), (1.41) and (1.43), pp. 26-27; rhb-2006:§4.6, Eq. (4.18), p. 138; stakgold-holst-2011:§10.1, Thm 10.1.2, pp. 646-647"}
Let $N \ge 0$, let $a$ and $x$ be distinct points of $I$, let $J$ be the closed interval with end points $a$ and $x$ (so $J = [a,x]$ if $x > a$ and $J = [x,a]$ if $x < a$), and suppose $f^{(N+1)}$ exists and is continuous on $J$. Then

$$
f(x) = \sum_{k=0}^{N} \frac{f^{(k)}(a)}{k!}(x-a)^k + R_N(x)
$$

with the remainder given in either of the two exact forms

$$
R_N(x) = \frac{f^{(N+1)}(\xi)}{(N+1)!}\,(x-a)^{N+1} \quad \text{for some } \xi \text{ between } a \text{ and } x,
\qquad
R_N(x) = \frac{1}{N!}\int_a^x (x-t)^N f^{(N+1)}(t)\,dt .
$$

The first is the **Lagrange form**, the second the **integral form**. Both are identities, not approximations: no terms are discarded. The Lagrange form gives the error bound

$$
\lvert R_N(x) \rvert \le \frac{\lvert x-a \rvert^{N+1}}{(N+1)!} \, \max_{t \in J} \bigl\lvert f^{(N+1)}(t) \bigr\rvert ,
$$

and if $f$ has derivatives of all orders on an interval $I$ containing $a$ and this bound tends to $0$ as $N \to \infty$ for every $x \in I$, then the Taylor series converges to $f$ on $I$.

The stated hypothesis, continuity of $f^{(N+1)}$ on the closed interval $J$, is the one Arfken assumes, and it serves both remainder forms. The integral form needs it, since the integrand must be integrable on $J$; the Lagrange form alone holds under less, and the sharp hypothesis for it is given in the remark below.
:::

:::idea{provenance=adapted src="arfken-2013:§1.2, Eqs. (1.41)-(1.43), pp. 26-27"}
Both remainder formulas come from one identity. Freeze $x$ and slide the expansion point: the function $t \mapsto \sum_{k \le N} f^{(k)}(t)(x-t)^k/k!$ equals the Taylor polynomial at $t=a$ and equals $f(x)$ at $t=x$, and when it is differentiated almost everything cancels, leaving a single term. Integrating that one term from $a$ to $x$ gives the integral form of the remainder; replacing the integral by its weighted mean value gives the Lagrange form, and the error bound is the crudest estimate of that mean.
:::

:::proof{provenance=adapted src="arfken-2013:§1.2, Eqs. (1.42)-(1.43), pp. 26-27"}
**The integral form.** Hold $x$ fixed and define, for $t \in J$,

$$
\Phi(t) = \sum_{k=0}^{N} \frac{f^{(k)}(t)}{k!}\,(x-t)^k .
$$

Each $f^{(k)}$ with $k \le N$ is differentiable on $J$, because $f^{(N+1)}$ exists there by hypothesis, so $\Phi$ is differentiable on $J$, and the product rule gives

$$
\Phi'(t) = \sum_{k=0}^{N} \frac{f^{(k+1)}(t)}{k!}(x-t)^k \; - \; \sum_{k=1}^{N} \frac{f^{(k)}(t)}{(k-1)!}(x-t)^{k-1} .
$$

The term of the first sum with index $k$ equals the term of the second with index $k+1$, so these cancel in pairs and only the last term of the first sum survives:

$$
\Phi'(t) = \frac{f^{(N+1)}(t)}{N!}\,(x-t)^N .
$$

By hypothesis $f^{(N+1)}$ is continuous on $J$, so $\Phi'$ is continuous there and the fundamental theorem of calculus gives $\Phi(x) - \Phi(a) = \int_a^x \Phi'(t)\,dt$. Now $\Phi(x) = f(x)$, since every term with $k \ge 1$ carries a factor $(x-x)^k = 0$, and $\Phi(a) = P_N(x)$ by the definition of the Taylor polynomial. Hence

$$
R_N(x) = f(x) - P_N(x) = \frac{1}{N!}\int_a^x (x-t)^N f^{(N+1)}(t)\,dt ,
$$

the integral being the oriented one, so that the formula covers $x > a$ and $x < a$ alike.

**A lemma: the weighted mean value theorem for integrals.** *Let $h$ and $w$ be continuous on a closed bounded interval $[c,d]$ with $w \ge 0$ there. Then $\int_c^d h\,w = h(\xi)\int_c^d w$ for some $\xi \in [c,d]$.* For $h$ attains a least value $m$ and a greatest value $M$ on $[c,d]$, being continuous on a closed bounded interval; since $w \ge 0$ this gives $m\,w \le h\,w \le M\,w$ pointwise, and integrating, $m\int_c^d w \le \int_c^d h\,w \le M\int_c^d w$. If $\int_c^d w = 0$ then both sides of the claim are $0$ and any $\xi$ serves. Otherwise $\bigl(\int_c^d hw\bigr)\big/\bigl(\int_c^d w\bigr)$ lies in $[m,M]$, and the intermediate value theorem supplies a $\xi \in [c,d]$ at which $h$ takes that value. This is the weighted form of the mean value theorem that Arfken uses at his Eq. (1.42); the weight is what lets it be applied once instead of $N$ times.

**The Lagrange form for $x > a$.** Apply the lemma on $[a,x]$ with $h = f^{(N+1)}$, continuous by hypothesis, and $w(t) = (x-t)^N/N!$, which is non-negative there. Since $\int_a^x (x-t)^N\,dt/N! = (x-a)^{N+1}/(N+1)!$,

$$
R_N(x) = f^{(N+1)}(\xi)\,\frac{(x-a)^{N+1}}{(N+1)!}, \qquad \xi \in [a,x].
$$

**The Lagrange form for $x < a$.** Reverse the orientation: $R_N(x) = -\frac{1}{N!}\int_x^a (x-t)^N f^{(N+1)}(t)\,dt$, and on $[x,a]$ we have $(x-t)^N = (-1)^N (t-x)^N$ with $(t-x)^N \ge 0$. The lemma with weight $w(t) = (t-x)^N/N!$, whose integral over $[x,a]$ is $(a-x)^{N+1}/(N+1)!$, gives $R_N(x) = (-1)^{N+1} f^{(N+1)}(\xi)(a-x)^{N+1}/(N+1)!$; and $(-1)^{N+1}(a-x)^{N+1} = (x-a)^{N+1}$, so this is the same formula, with $\xi \in [x,a]$. In both cases $\xi$ lies between $a$ and $x$.

**The error bound.** Take moduli in the Lagrange form. Since $f^{(N+1)}$ is continuous on the closed bounded interval $J$, the maximum $\max_{t \in J}\lvert f^{(N+1)}(t)\rvert$ exists and dominates $\lvert f^{(N+1)}(\xi)\rvert$ wherever $\xi$ happens to lie.

**Convergence of the Taylor series.** Fix $x \in I$. If the bound tends to $0$ as $N \to \infty$, then so does $R_N(x)$, that is $P_N(x) \to f(x)$; and $P_N(x)$ is the $N$th partial sum of the Taylor series at $x$. If this holds at every $x \in I$, the series converges to $f$ throughout $I$. $\square$
:::

:::statement[The $C^N$ form of the remainder]{provenance=adapted src="folland-1999:§8.1, p. 236 and §8.8, p. 278"}
Let $f$ be $N$ times continuously differentiable on an open interval containing $a$. Then

$$
\lim_{x \to a} \frac{R_N(x)}{(x-a)^N} = 0 ,
$$

that is, $R_N(x) = o(\lvert x-a\rvert^N)$ as $x \to a$. Here only $N$ derivatives are assumed, not $N+1$, and no point $\xi$ and no integral appear; the conclusion is correspondingly weaker, being a statement about the limit $x \to a$ and not a bound at a fixed $x$.
:::

:::idea{provenance=original}
Use the previous theorem one order lower. At order $N-1$ the Lagrange remainder needs only $N$ derivatives, which is all that is available, and it expresses the error as $f^{(N)}$ evaluated at an unknown intermediate point. The difference between that and the order-$N$ Taylor polynomial is the single term $f^{(N)}(a)(x-a)^N/N!$, so the whole remainder is $\bigl(f^{(N)}(\xi) - f^{(N)}(a)\bigr)(x-a)^N/N!$, and continuity of $f^{(N)}$ at $a$ makes the bracket vanish in the limit.
:::

:::proof{provenance=original}
For $N = 0$ we have $P_0(x) = f(a)$, so the assertion reads $f(x) - f(a) \to 0$ as $x \to a$: that is the continuity of $f$, which the hypothesis $f \in C^0$ supplies. So let $N \ge 1$, and let $U$ be an open interval containing $a$ on which $f$ is $N$ times continuously differentiable.

Fix $x \in U$ with $x \ne a$ and let $J_x \subset U$ be the closed interval with end points $a$ and $x$. Apply the previous theorem on $J_x$ at order $N-1$: its hypothesis is that $f^{((N-1)+1)} = f^{(N)}$ exists and is continuous on $J_x$, which the $C^N$ hypothesis supplies — and note that the $(N+1)$st derivative is never mentioned. The Lagrange form gives a point $\xi_x$ between $a$ and $x$ with

$$
f(x) = \sum_{k=0}^{N-1} \frac{f^{(k)}(a)}{k!}(x-a)^k + \frac{f^{(N)}(\xi_x)}{N!}(x-a)^N .
$$

Subtract $P_N(x) = \sum_{k=0}^{N} f^{(k)}(a)(x-a)^k/k!$. The two polynomial sums differ by exactly the term $k = N$, so

$$
R_N(x) = f(x) - P_N(x) = \frac{f^{(N)}(\xi_x) - f^{(N)}(a)}{N!}\,(x-a)^N .
$$

Divide by $(x-a)^N$, which is non-zero because $x \ne a$:

$$
\frac{R_N(x)}{(x-a)^N} = \frac{f^{(N)}(\xi_x) - f^{(N)}(a)}{N!} .
$$

Finally let $x \to a$. Since $\xi_x$ lies between $a$ and $x$ we have $\lvert \xi_x - a\rvert \le \lvert x - a \rvert \to 0$, so $\xi_x \to a$; and $f^{(N)}$ is continuous at $a$, which is the hypothesis used here and nowhere else, so the numerator tends to $0$. Hence the quotient tends to $0$, which is the assertion. $\square$
:::

:::statement[Standard Maclaurin series and their ranges]{provenance=adapted src="rhb-2006:§4.6.3, p. 140; arfken-2013:§1.2, Eqs. (1.47) and (1.52), pp. 27-29"}
Each series below converges to the stated function at every real $x$ in the stated range, and diverges at every real $x$ outside the closure of that range, with the one exception noted after the table.

| Function | Maclaurin series | Range |
|---|---|---|
| $e^x$ | $\sum_{n \ge 0} x^n/n!$ | all $x$ |
| $\sin x$ | $\sum_{n \ge 0} (-1)^n x^{2n+1}/(2n+1)!$ | all $x$ |
| $\cos x$ | $\sum_{n \ge 0} (-1)^n x^{2n}/(2n)!$ | all $x$ |
| $\ln(1+x)$ | $\sum_{n \ge 1} (-1)^{n-1} x^n/n$ | $-1 < x \le 1$ |
| $\arctan x$ | $\sum_{n \ge 0} (-1)^n x^{2n+1}/(2n+1)$ | $-1 \le x \le 1$ (ours) |
| $(1+x)^{\alpha}$ | $\sum_{n \ge 0} \binom{\alpha}{n} x^n$ | $\lvert x \rvert < 1$ (ours) |

The two ranges marked "(ours)" are not the ranges printed by either cited source: Riley, Hobson and Bence give $-1 < x < 1$ for the arctangent and $-\infty < x < \infty$ for the binomial series (p. 140). Those two rows rest on the argument in the last bullet of the remark below and on the proof below, not on the sources; the other four ranges are the sources'.

In the last line $\alpha \in \mathbb{R}$ and $\binom{\alpha}{n} = \alpha(\alpha-1)\cdots(\alpha-n+1)/n!$, with $\binom{\alpha}{0}=1$. If $\alpha$ is a non-negative integer the series has only finitely many non-zero terms and equals $(1+x)^{\alpha}$ for every real $x$; otherwise its radius of convergence is exactly $1$, and whether it converges at $x = \pm 1$ depends on $\alpha$.
:::

:::idea{provenance=original}
The six rows divide into three kinds. For $e^x$, $\sin$ and $\cos$ every derivative is bounded on each bounded interval by a constant that does not grow with the order, so the Lagrange bound has a factorial in the denominator and nothing to fight it: the series converges to the function everywhere. For the logarithm and the arctangent the remainder is awkward but the function is an integral of a geometric series, so termwise integration delivers the series at a stroke on $\lvert x\rvert < 1$, and Abel's limit theorem then carries it to the end points at which it converges. The binomial series is proved to sum to $(1+x)^{\alpha}$ not by its remainder but by showing that its sum solves the same first-order differential equation as $(1+x)^{\alpha}$, with the same value at $x = 0$.
:::

:::proof{provenance=original}
Throughout, $a = 0$ and $J$ is the closed interval with end points $0$ and $x$. All six series are power series in $x$, so :ref[Power series]{to=found.power-series} governs their convergence, and in particular a series of radius $1$ has unbounded terms, hence diverges, at every $\lvert x\rvert > 1$. That disposes of the "diverges outside the closure" half of the claim in the last three rows; the first three rows have no outside.

**$e^x$.** Here $f^{(N+1)}(t) = e^t$, so $\max_{t \in J}\lvert f^{(N+1)}(t)\rvert = e^{\max(0,x)} \le e^{\lvert x\rvert}$, and the error bound of Taylor's theorem is $\lvert R_N(x)\rvert \le \lvert x\rvert^{N+1}e^{\lvert x\rvert}/(N+1)!$. For each fixed $x$ this tends to $0$, because $\lvert x\rvert^{N+1}/(N+1)! \to 0$. So the series converges to $e^x$ at every real $x$. Its coefficients are $f^{(k)}(0)/k! = 1/k!$.

**$\sin x$ and $\cos x$.** Every derivative of either function is $\pm\sin$ or $\pm\cos$, so $\max_J \lvert f^{(N+1)}\rvert \le 1$ and $\lvert R_N(x)\rvert \le \lvert x\rvert^{N+1}/(N+1)! \to 0$ for each fixed $x$. The coefficients follow from the derivative values at $0$, which run $0,1,0,-1$ for $\sin$ and $1,0,-1,0$ for $\cos$, giving the two series as displayed.

**$\ln(1+x)$.** For $\lvert t\rvert < 1$ the geometric series with ratio $-t$ gives $1/(1+t) = \sum_{n \ge 0}(-1)^n t^n$, of radius $1$. By :ref[termwise integration of a power series]{to=found.power-series}, integrating from $0$ to $x$ for $\lvert x\rvert < 1$ gives $\ln(1+x) = \sum_{n \ge 1}(-1)^{n-1}x^n/n$, which is therefore the Maclaurin series and converges to the function on $(-1,1)$. At $x = 1$ the series is alternating with terms $1/n$ decreasing to $0$, so it converges by :ref[the alternating-series test]{to=found.series-convergence-tests}, and :ref[Abel's limit theorem]{to=found.power-series} identifies its sum with $\lim_{x \to 1^-}\ln(1+x) = \ln 2$. At $x = -1$ the series is $-\sum_n 1/n$, the harmonic series, which diverges. The range is thus $-1 < x \le 1$.

**$\arctan x$.** The same route with ratio $-t^2$: $1/(1+t^2) = \sum_{n\ge0}(-1)^n t^{2n}$ of radius $1$, and termwise integration gives $\arctan x = \sum_{n \ge 0}(-1)^n x^{2n+1}/(2n+1)$ for $\lvert x\rvert<1$. At $x = 1$ and at $x = -1$ the series is alternating with terms $1/(2n+1)$ decreasing to $0$, so it converges at both; Abel's limit theorem, applied at each end point, identifies the sums with $\arctan(\pm1) = \pm\pi/4$. The range is therefore the closed interval $-1 \le x \le 1$, which is the entry marked "(ours)" in the table.

**$(1+x)^{\alpha}$.** If $\alpha$ is a non-negative integer then $\binom{\alpha}{n} = 0$ for $n > \alpha$, the series is the finite binomial expansion of a polynomial, and it equals $(1+x)^{\alpha}$ at every real $x$. Otherwise no coefficient vanishes and
$$
\left\lvert \frac{\binom{\alpha}{n+1}}{\binom{\alpha}{n}}\right\rvert = \frac{\lvert \alpha - n\rvert}{n+1} \longrightarrow 1 ,
$$
so the radius of convergence is exactly $1$ and the series diverges for $\lvert x\rvert > 1$. Let $g(x) = \sum_{n \ge 0}\binom{\alpha}{n}x^n$ on $(-1,1)$. From $\binom{\alpha}{n+1} = \binom{\alpha}{n}(\alpha-n)/(n+1)$, termwise differentiation (legitimate inside the radius) gives
$$
g'(x) = \sum_{n \ge 0}(n+1)\binom{\alpha}{n+1}x^n = \sum_{n \ge 0}(\alpha - n)\binom{\alpha}{n}x^n ,
\qquad
x\,g'(x) = \sum_{n \ge 0} n \binom{\alpha}{n}x^n ,
$$
the second by re-indexing the first form of $g'$. Adding the two displays, the terms in $n$ cancel and
$$
(1+x)\,g'(x) = \alpha\sum_{n\ge0}\binom{\alpha}{n}x^n = \alpha\,g(x) \qquad (\lvert x\rvert < 1).
$$
Hence $\frac{d}{dx}\bigl[(1+x)^{-\alpha}g(x)\bigr] = (1+x)^{-\alpha-1}\bigl[(1+x)g'(x) - \alpha g(x)\bigr] = 0$ on $(-1,1)$, so $(1+x)^{-\alpha}g(x)$ is constant there; at $x = 0$ it equals $g(0) = 1$. Therefore $g(x) = (1+x)^{\alpha}$ on $\lvert x\rvert < 1$, which is the entry marked "(ours)". $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="folland-1999:§8.1, p. 236; arfken-2013:§1.2, footnotes 2 and 3, pp. 26-27; rhb-2006:§4.6.3, p. 140"}
- **A smooth function need not be the sum of its Taylor series.** Let $\eta(x) = e^{-1/x}$ for $x > 0$ and $\eta(x) = 0$ for $x \le 0$. Then $\eta$ is infinitely differentiable on all of $\mathbb{R}$, including at the origin, where every derivative vanishes (Folland, p. 236, builds the standard bump functions from exactly this $\eta$). Its Maclaurin series is therefore identically $0$, which converges everywhere but equals $\eta$ only on $(-\infty, 0]$. So "the Taylor series converges" and "the Taylor series represents $f$" are different statements, and the remainder is what separates them: here $R_N(x) = \eta(x) \neq 0$ for every $N$ and every $x>0$.
- **Hypotheses actually needed.** The two remainder formulas use continuity of $f^{(N+1)}$ on the closed interval, as Arfken assumes (p. 26). For the Lagrange form alone, less suffices: it is enough that $f^{(N)}$ be continuous on $J$ and $f^{(N+1)}$ exist at every interior point, and then $\xi$ may be taken strictly between $a$ and $x$. Arfken notes in footnote 2 (p. 26) that the expansion holds under slightly less restrictive conditions than he assumes, and Folland remarks (p. 278) that calculus texts usually require $N+1$ derivatives although the $C^N$ statement above does not. Riley, Hobson and Bence give the remainder formula without stating any differentiability hypothesis (pp. 137-138); the one above is the standard hypothesis under which their formula holds.
- **Indexing and other remainder forms.** Arfken's Eq. (1.40) is indexed by the number of terms: his $R_n$ with polynomial degree $n-1$ is our $R_N$ with $N = n-1$. His Eq. (1.41) gives the remainder as an $n$-fold iterated integral of $f^{(n)}$; carrying out all but one of the integrations turns it into the single integral above, which is the one-variable case of the Banach-space formula of Stakgold and Holst (Thm 10.1.2, p. 647). Arfken's footnote 3 records a third version, due to Cauchy. Folland's indexing differs again: his $k$ is our $N$, and his statement on p. 236 is the multi-variable one, a sum over multi-indices $\lvert \alpha\rvert \le k$ on $\mathbb{R}^n$ with remainder $o(\lvert x - x_0\rvert^k)$; the $C^N$ statement above is its specialisation to $n = 1$, where the multi-index sum becomes the ordinary Taylor polynomial of order $N$.
- **The ranges in the table, compared with the sources.** Riley, Hobson and Bence print $-1 < x < 1$ for $\arctan x$ and $-\infty < x < \infty$ for $(1+x)^{n}$ (p. 140). At $x = \pm 1$ the arctangent series converges by the alternating-series test, and :ref[Abel's limit theorem]{to=found.power-series} identifies its sum with $\arctan(\pm 1) = \pm\pi/4$, which is why the closed range is given above. The unrestricted range for the binomial series is the correct one in the case their notation suggests, a non-negative integer exponent $n$, for which the series terminates; for an exponent that is not a non-negative integer every coefficient is non-zero and $\bigl\lvert \binom{\alpha}{n+1} / \binom{\alpha}{n} \bigr\rvert = \lvert \alpha - n\rvert/(n+1) \to 1$, so the radius of convergence is $1$ and the range in the table above is $\lvert x \rvert < 1$. The logarithmic range $-1 < x \le 1$ agrees with both sources (Arfken, p. 29; Riley, Hobson and Bence, p. 140); at $x = 1$ it is the alternating harmonic series, with sum $\ln 2$, and at $x = -1$ the harmonic series, which diverges.
:::

:::example[How good is the bound, and how many terms does one need]{provenance=original}
Approximate $f(x) = (1+x)^{-1/2}$ near $0$ and compare the predicted error with the true one. This is the binomial row of the table with $\alpha = -\tfrac12$, so the series converges to $f$ on $\lvert x\rvert<1$; the question here is quantitative, at the fixed point $x = 0.3$.

1. *The derivatives.* Differentiating $k$ times, $f^{(k)}(x) = (-1)^k \dfrac{(2k)!}{4^k\,k!}\,(1+x)^{-1/2-k}$, which gives $f^{(k)}(0) = (-1)^k (2k)!/(4^k k!)$: the values $1, -\tfrac12, \tfrac34, -\tfrac{15}{8}, \tfrac{105}{16}, -\tfrac{945}{32}$ for $k = 0,\dots,5$. Note that $\lvert f^{(k)}(t)\rvert$ decreases in $t$, so on $[0,0.3]$ its maximum is at $t = 0$.

2. *The order-4 polynomial.* Dividing by $k!$,
   $$
   P_4(x) = 1 - \frac{x}{2} + \frac{3x^2}{8} - \frac{5x^3}{16} + \frac{35x^4}{128} .
   $$

3. *The true error at $x = 0.3$.* $P_4(0.3) = 0.877527343750000$ and $f(0.3) = 1/\sqrt{1.3} = 0.877058019307029$, so
   $$
   R_4(0.3) = f(0.3) - P_4(0.3) = -4.693244\times 10^{-4} .
   $$

4. *The predicted bound.* With $N = 4$, $J = [0,0.3]$ and $\max_J\lvert f^{(5)}\rvert = \lvert f^{(5)}(0)\rvert = 945/32 = 29.53125$, the error bound of Taylor's theorem gives
   $$
   \lvert R_4(0.3)\rvert \le \frac{0.3^5}{5!}\cdot\frac{945}{32} = \frac{0.00243}{120}\cdot 29.53125 = 5.980078\times 10^{-4} .
   $$
   The bound holds, and it overstates the true error by only $27\%$: the ratio of true error to bound is $0.785$.

5. *Where $\xi$ actually is.* The Lagrange form says $R_4(0.3) = f^{(5)}(\xi)\,(0.3)^5/5!$ for some $\xi \in (0, 0.3)$. Solving $-(945/32)(1+\xi)^{-11/2} = 120\,R_4(0.3)/0.3^5 = -23.1765$ gives $\xi = 0.04504$, comfortably inside the interval, and much closer to $0$ than to $0.3$ — which is why the bound, computed at the worst point $t = 0$, is nearly attained.

6. *How many terms for eight-figure accuracy at $x = 0.3$?* The bound at order $N$ is $0.3^{N+1}\,\lvert f^{(N+1)}(0)\rvert/(N+1)!$. It takes the values $5.98\times10^{-4}$ at $N=4$, $3.65\times10^{-6}$ at $N=8$, $2.47\times10^{-8}$ at $N=12$ and $7.15\times10^{-9}$ at $N=13$. So $N = 13$ is the first order at which the theorem guarantees $\lvert R_N(0.3)\rvert < 10^{-8}$. The true errors are $1.92\times10^{-8}$ at $N=12$ and $5.54\times10^{-9}$ at $N=13$, so $N=13$ is also the first order that genuinely achieves it: at this point the bound costs nothing. This is the practical content of the Lagrange form — a bound on one derivative is converted into a usable number of terms, without evaluating the function being approximated.
:::

:::application{provenance=original}
**Truncation error of a finite-difference scheme.** Discretising a second derivative on a grid of spacing $h$ uses the centred second difference. Taylor's theorem with the Lagrange remainder at order $3$, applied at $x+h$ and at $x-h$ for a function $u$ with $u^{(4)}$ continuous near $x$, gives $u(x \pm h) = u(x) \pm hu'(x) + \tfrac12h^2u''(x) \pm \tfrac16h^3u'''(x) + \tfrac1{24}h^4u^{(4)}(\xi_{\pm})$ with $\xi_{\pm}$ between $x$ and $x\pm h$. The odd terms cancel on adding, so

$$
\frac{u(x+h) - 2u(x) + u(x-h)}{h^2} - u''(x) = \frac{h^2}{24}\bigl(u^{(4)}(\xi_+) + u^{(4)}(\xi_-)\bigr),
\qquad
\text{error} \;\le\; \frac{h^2}{12}\max_{[x-h,x+h]}\lvert u^{(4)}\rvert .
$$

This is the second-order accuracy of the discrete Laplacian used in every finite-difference solver for Poisson's and the heat equation, and the bound is what fixes the grid spacing needed for a target accuracy. For $u = \sin$ at $x = 1$ with $h = 0.1$: the difference quotient is $-0.840769992687$ against $u''(1) = -0.841470984808$, an error of $7.0099\times 10^{-4}$; the bound is $h^2\sin(1.1)/12 = 7.4267\times10^{-4}$ and the leading term $h^2 u^{(4)}(1)/12 = h^2\sin(1)/12 = 7.0123\times 10^{-4}$, which matches the true error to three figures. Halving $h$ divides the error by four, as the $h^2$ predicts.

**Harmonic approximation and its range of validity.** Expanding a potential $V$ about a minimum $q_0$, where $V'(q_0) = 0$, Taylor's theorem gives $V(q) = V(q_0) + \tfrac12 V''(q_0)(q-q_0)^2 + \tfrac16 V'''(\xi)(q-q_0)^3$. The harmonic oscillator with frequency $\sqrt{V''(q_0)/m}$ is what remains when the last term is dropped, and the remainder is exactly the anharmonicity: the frequency is reliable only while $\lvert V'''\rvert\lvert q - q_0\rvert^3/6$ is small against $\tfrac12 V''(q_0)(q-q_0)^2$, that is while $\lvert q - q_0\rvert \ll 3V''(q_0)/\max\lvert V'''\rvert$. For the pendulum, $V(\theta) = mgl(1-\cos\theta)$ has $V'''(0) = 0$, so the first correction is quartic and the harmonic range is unusually wide — which is why the simple pendulum formula survives to amplitudes of tens of degrees.

**Non-relativistic limits.** The binomial row with $\alpha = -\tfrac12$ turns the relativistic energy $mc^2(1 - v^2/c^2)^{-1/2}$ into $mc^2 + \tfrac12mv^2 + \tfrac38 mv^4/c^2 + \cdots$, and the remainder bound says how fast the vehicle may move before the Newtonian kinetic energy is inadequate at a prescribed tolerance. The same expansion with the same bound is what justifies the dipole and quadrupole truncations of a multipole expansion, where $\lvert x\rvert$ is the ratio of source size to distance.
:::
