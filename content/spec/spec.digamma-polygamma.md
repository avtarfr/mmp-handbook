---
id: spec.digamma-polygamma
title: Digamma and polygamma functions
kind: definition
level: core
summary: Defines $\psi = \Gamma'/\Gamma$ and its derivatives, derives the series $\psi(z) = -\gamma - 1/z + \sum_{k\ge1}(1/k - 1/(z+k))$ and $\psi^{(m)}(z) = (-1)^{m+1}m!\sum_{k\ge0}(z+k)^{-m-1}$ from the Weierstrass product, collects the values at integers and half-integers, and turns a convergent series of rational terms into a finite combination of digamma values.
prereqs: [spec.gamma-function, complex.analytic-continuation, found.termwise-operations, found.uniform-convergence]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§13.2, eqs. (13.34)-(13.44) and Example 13.2.1, pp. 610-614; Exercises 13.2.4, 13.2.8, 13.2.10, 13.2.14-13.2.15, pp. 615-616; the Weierstrass product, eq. (13.15), p. 602"
    pages: "602, 610-616"
    role: the definition of $\psi$ as the logarithmic derivative of $\Gamma$; the series for $\psi$ with the Euler-Mascheroni constant isolated and the values $\psi(1) = -\gamma$ and $\psi(n+1) = -\gamma + H_n$; the polygamma series and its difference relation; $\psi^{(m)}(1) = (-1)^{m+1}m!\zeta(m+1)$; the Maclaurin series of $\ln\Gamma(z+1)$; the partial-fraction method for summing a series of rational terms, and the identity $\sum_n [(n+a)(n+b)]^{-1} = [\psi(1+b)-\psi(1+a)]/(b-a)$
  - work: hassani-2013
    loc: "§12.4, eqs. (12.14)-(12.15), pp. 379-380"
    pages: "379-380"
    role: the Weierstrass product for $1/\Gamma$ with the Euler-Mascheroni constant, and the series for the logarithmic derivative of $\Gamma$ obtained by differentiating the logarithm of that product; Hassani gives the function no name, so the word "digamma" does not occur on these pages
---

:::definition[Digamma and polygamma]{provenance=adapted src="arfken-2013:§13.2, eqs. (13.36)-(13.37) and (13.41), pp. 611-612; hassani-2013:eq. (12.15), p. 380"}
On $\Omega = \mathbb{C}\setminus\{0,-1,-2,\dots\}$, where $\Gamma$ is analytic and non-vanishing (:ref[]{to=spec.gamma-function}), the **digamma function** is the logarithmic derivative of $\Gamma$,

$$
\psi(z) \;=\; \frac{\Gamma'(z)}{\Gamma(z)} \;=\; \frac{d}{dz}\ln\Gamma(z) ,
$$

and for $m \in \mathbb{N}$ the **polygamma functions** are its derivatives,

$$
\psi^{(m)}(z) \;=\; \frac{d^{m}\psi}{dz^{m}}(z) \;=\; \frac{d^{\,m+1}}{dz^{\,m+1}}\ln\Gamma(z) .
$$

All of them are analytic on $\Omega$. The expression $\ln\Gamma$ is many-valued in general, but $\Gamma'/\Gamma$ is not, and it is the quotient that is meant: on the interval $(0,\infty)$, where $\Gamma > 0$, the two readings agree with $\ln\Gamma$ taken real.

Also needed is the **Euler-Mascheroni constant**

$$
\gamma \;=\; \lim_{n\to\infty}\bigl(H_n - \ln n\bigr) \;=\; 0.5772156649\dots,
\qquad H_n \;=\; \sum_{k=1}^{n}\frac1k ,
$$

the limit existing because $H_n - \ln n$ is decreasing and bounded below.

**A warning about the argument.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.2, eqs. (13.36)-(13.41), pp. 611-612"} write every formula of this section for $\psi(z+1)$ and $\psi^{(m)}(z+1)$, because $\Gamma(z+1)$ is the quantity they treat as the factorial. Their $\psi(z+1)$ is our $\psi$ evaluated at $z+1$, so their formulas are ours shifted; part 2 of the statement is the dictionary. Mixing the two conventions is the commonest source of an answer wrong by $1/z$.
:::

:::statement[Series, values and recurrences]{provenance=adapted src="arfken-2013:§13.2, eqs. (13.38)-(13.44) and Exercises 13.2.4, 13.2.8, 13.2.10, pp. 611-616; hassani-2013:eq. (12.15), p. 380"}
1. **Series for $\psi$.** For every $z \in \Omega$,

   $$
   \psi(z) \;=\; -\gamma - \frac1z + \sum_{k=1}^{\infty}\left(\frac1k - \frac{1}{z+k}\right)
   \;=\; -\gamma - \frac1z + \sum_{k=1}^{\infty}\frac{z}{k(z+k)} ,
   $$

   the series converging absolutely, and uniformly on each compact subset of $\Omega$. Equivalently $\psi(1+z) = -\gamma + \sum_{k\ge1} z/\bigl(k(k+z)\bigr)$, which is the form :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.38), p. 611"} give.
2. **Recurrence and integer values.** $\psi(z+1) = \psi(z) + 1/z$ on $\Omega$, and

   $$
   \psi(1) \;=\; -\gamma , \qquad \psi(n+1) \;=\; -\gamma + H_n \quad (n = 1, 2, \dots).
   $$
3. **Half-integer values, reflection, duplication.**

   $$
   \psi\!\left(\tfrac12\right) = -\gamma - 2\ln 2 , \qquad
   \psi(1-z) - \psi(z) = \pi\cot\pi z , \qquad
   \psi(z) + \psi\!\left(z+\tfrac12\right) = 2\psi(2z) - 2\ln 2 .
   $$

   Consequently $\psi(n+\tfrac12) = -\gamma - 2\ln2 + 2\sum_{j=1}^{n}(2j-1)^{-1}$.
4. **Polygamma series.** For $m \ge 1$ and $z \in \Omega$,

   $$
   \psi^{(m)}(z) \;=\; (-1)^{m+1}\,m!\sum_{k=0}^{\infty}\frac{1}{(z+k)^{\,m+1}} ,
   $$

   with recurrence $\psi^{(m)}(z+1) = \psi^{(m)}(z) + (-1)^{m}m!\,z^{-m-1}$, and at $z = 1$

   $$
   \psi^{(m)}(1) \;=\; (-1)^{m+1}\,m!\;\zeta(m+1) ,
   $$

   where $\zeta$ is the Riemann zeta function (:ref[]{to=spec.zeta-bernoulli}). In particular $\psi^{(1)}(1) = \zeta(2) = \pi^2/6$ and $\psi^{(2)}(1) = -2\zeta(3)$.
5. **Maclaurin series of $\ln\Gamma$.** For $\lvert z\rvert < 1$,

   $$
   \ln\Gamma(1+z) \;=\; -\gamma z + \sum_{n=2}^{\infty}(-1)^{n}\,\frac{\zeta(n)}{n}\,z^{n} ,
   \qquad
   \psi(1+z) \;=\; -\gamma + \sum_{n=2}^{\infty}(-1)^{n}\zeta(n)\,z^{\,n-1} .
   $$

   On the real axis the first series converges for $-1 < z \le 1$.
6. **Monotonicity on the positive axis.** For $x > 0$, $\psi^{(1)}(x) > 1/x > 0$ and $\psi^{(2)}(x) < 0$; so $\psi$ is strictly increasing and concave on $(0,\infty)$, $\ln\Gamma$ is strictly convex there, and $x \mapsto \ln x - \psi(x)$ is strictly decreasing. Moreover $\psi(x) \to -\infty$ as $x \downarrow 0$ and $\psi(x) \to +\infty$ as $x \to \infty$, so $\psi$ maps $(0,\infty)$ bijectively onto $\mathbb{R}$.
:::

:::idea{provenance=original}
A product becomes a sum under a logarithm, and a sum can be differentiated term by term. That single observation is the whole theory: $\Gamma$ itself is awkward to differentiate, but $1/\Gamma$ is an infinite product of linear factors, so $\ln\Gamma$ is a series of logarithms of linear factors and $\psi$ is a series of reciprocals of linear factors. Each further derivative raises the power and makes the series converge faster, which is why the polygamma series are the clean ones and the digamma series is the one that needs the Euler-Mascheroni constant to repair a divergence: $\sum_k 1/(z+k)$ diverges on its own, and $\gamma$ is precisely the bookkeeping left over when one subtracts the harmonic series from it.

Everything else is read off that series. Differences of $\psi$ at arguments shifted by integers telescope, giving the recurrence and the harmonic numbers. The functional equations of $\Gamma$ -- reflection and duplication -- become additive identities for $\psi$ on taking logarithms and differentiating, and those supply the half-integer values. Setting $z = 1$ in the polygamma series turns it into $\zeta(m+1)$, which is what makes $\psi$ and its derivatives the natural language for summing series of rational terms: partial fractions expresses such a series as a combination of the very sums the polygamma functions tabulate.
:::

:::proof{provenance=adapted src="arfken-2013:§13.2, eqs. (13.34)-(13.44), pp. 610-613, with the Weierstrass product, eq. (13.15), p. 602; hassani-2013:eqs. (12.14)-(12.15), pp. 379-380"}
**(1) The series.** *Step 1: the Weierstrass product.* Gauss's limit formula (:ref[]{to=spec.gamma-function}, part 4) says $\Gamma(z) = \lim_n n!\,n^{z}/\bigl(z(z+1)\cdots(z+n)\bigr)$. Since $(z+1)\cdots(z+n)/n! = \prod_{k=1}^n(1+z/k)$, taking reciprocals gives

$$
\frac{1}{\Gamma(z)} \;=\; \lim_{n\to\infty} z\,n^{-z}\prod_{k=1}^{n}\left(1+\frac zk\right) .
$$

Write $n^{-z} = e^{-z\ln n} = e^{\gamma z}\,e^{-zH_n}\,e^{\,z(H_n - \ln n - \gamma)}$. The last factor tends to $1$ because $H_n - \ln n \to \gamma$, and $e^{-zH_n} = \prod_{k=1}^n e^{-z/k}$, so

$$
\frac{1}{\Gamma(z)} \;=\; z\,e^{\gamma z}\prod_{k=1}^{\infty}\left(1+\frac zk\right)e^{-z/k} ,
$$

the product of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.15), p. 602"} and :cite[Hassani]{work=hassani-2013 loc="eq. (12.14), p. 379"}. Its factors tend to $1$ fast: $\ln\bigl[(1+u)e^{-u}\bigr] = -u^2/2 + O(u^3)$, so with $u = z/k$ the logarithms are $O(\lvert z\rvert^2/k^2)$.

*Step 2: logarithms and differentiation, for real argument.* Fix $0 < a < b$ and let $x \in [a,b]$. Every factor above is positive, so logarithms may be taken:

$$
-\ln\Gamma(x) \;=\; \ln x + \gamma x + \sum_{k=1}^{\infty}\left[\ln\left(1+\frac xk\right) - \frac xk\right] .
$$

The series converges by the $O(x^2/k^2)$ bound of step 1. Differentiating the $k$-th term gives $1/(k+x) - 1/k = -x/\bigl(k(k+x)\bigr)$, of modulus at most $b/k^2$ on $[a,b]$; so the differentiated series converges uniformly there by the Weierstrass M-test (:ref[]{to=found.uniform-convergence}), and term-by-term differentiation is legitimate (:ref[]{to=found.termwise-operations}, part 2, whose hypotheses -- continuously differentiable terms, convergence at a point, uniform convergence of the differentiated series -- are exactly what we have checked). Hence

$$
-\psi(x) \;=\; \frac1x + \gamma + \sum_{k=1}^{\infty}\left(\frac{1}{k+x} - \frac1k\right),
$$

which rearranges to part 1 for $x > 0$.

*Step 3: extension to $\Omega$.* Let $S_N(z) = -\gamma - 1/z + \sum_{k=1}^{N}\bigl(1/k - 1/(z+k)\bigr)$, analytic on $\Omega$. On a compact $K \subset \Omega$ take $R$ with $\lvert z\rvert \le R$ on $K$; for $k > 2R$ we have $\lvert z+k\rvert \ge k/2$ and so

$$
\left\lvert \frac1k - \frac{1}{z+k}\right\rvert \;=\; \frac{\lvert z\rvert}{k\,\lvert z+k\rvert} \;\le\; \frac{2R}{k^{2}} ,
$$

whence $S_N$ converges uniformly on $K$ by the M-test. A uniform limit of continuous functions is continuous, and for a closed contour $\gamma \subset \Omega$ uniform convergence lets the limit pass through the contour integral, so $\oint_\gamma \lim_N S_N = \lim_N \oint_\gamma S_N = 0$ by Cauchy's theorem; by Morera's theorem the limit $S$ is analytic on $\Omega$ (both steps exactly as in :ref[]{to=complex.analytic-continuation}). Now $S$ and $\psi$ are analytic on $\Omega$ and agree on $(0,\infty)$ by step 2, a set with accumulation points in $\Omega$, so they agree on all of $\Omega$ by the identity theorem. The second form of part 1 is the algebraic identity $1/k - 1/(z+k) = z/\bigl(k(z+k)\bigr)$, and adding $1/z$ to both sides of part 1 gives the form in $\psi(1+z)$ once part 2 is known.

**(2) Recurrence and integer values.** Differentiating the logarithm of $\Gamma(z+1) = z\Gamma(z)$ gives $\psi(z+1) = 1/z + \psi(z)$ on $(0,\infty)$ and hence on $\Omega$ by analyticity. At $z = 1$, part 1 reads

$$
\psi(1) \;=\; -\gamma - 1 + \sum_{k=1}^{\infty}\left(\frac1k - \frac{1}{1+k}\right) \;=\; -\gamma - 1 + 1 \;=\; -\gamma ,
$$

the series telescoping to $1$. Iterating the recurrence from $\psi(1)$ gives $\psi(n+1) = -\gamma + 1 + \tfrac12 + \dots + \tfrac1n$.

**(3) Reflection, duplication, half-integers.** Take logarithmic derivatives of the two functional equations of :ref[]{to=spec.gamma-function}. From $\Gamma(z)\Gamma(1-z) = \pi/\sin\pi z$, differentiating the logarithm in $z$ and noting that the chain rule contributes $-1$ from the second factor,

$$
\psi(z) - \psi(1-z) \;=\; -\pi\cot\pi z ,
$$

which is the stated reflection relation. From $\Gamma(z)\Gamma(z+\tfrac12) = 2^{\,1-2z}\sqrt\pi\;\Gamma(2z)$, taking logarithms gives $\ln\Gamma(z) + \ln\Gamma(z+\tfrac12) = (1-2z)\ln2 + \tfrac12\ln\pi + \ln\Gamma(2z)$, and differentiating,

$$
\psi(z) + \psi\!\left(z+\tfrac12\right) \;=\; -2\ln2 + 2\,\psi(2z) .
$$

Put $z = \tfrac12$: the left side is $\psi(\tfrac12) + \psi(1)$ and the right side is $-2\ln2 + 2\psi(1)$, so $\psi(\tfrac12) = \psi(1) - 2\ln2 = -\gamma - 2\ln 2 = -1.9635100$. The values at $n+\tfrac12$ follow from the recurrence of part 2, since $\sum_{j=1}^{n}(j-\tfrac12)^{-1} = 2\sum_{j=1}^{n}(2j-1)^{-1}$.

**(4) Polygamma.** Differentiating part 1 once gives $\psi^{(1)}(z) = 1/z^2 + \sum_{k\ge1}(z+k)^{-2} = \sum_{k\ge0}(z+k)^{-2}$; the differentiated series converges uniformly on compact subsets of $\Omega$ by the M-test (the terms are $O(k^{-2})$), so the differentiation is termwise by the argument of step 3. Differentiating $m-1$ further times, each time legitimately because the series only converges faster, gives

$$
\psi^{(m)}(z) \;=\; \sum_{k=0}^{\infty}\frac{d^{\,m-1}}{dz^{\,m-1}}\frac{1}{(z+k)^{2}} \;=\; (-1)^{m-1}m!\sum_{k=0}^{\infty}\frac{1}{(z+k)^{\,m+1}} ,
$$

and $(-1)^{m-1} = (-1)^{m+1}$. The recurrence is part 2 differentiated $m$ times, using $d^{m}(1/z)/dz^{m} = (-1)^{m}m!\,z^{-m-1}$. At $z = 1$ the sum is $\sum_{k\ge0}(1+k)^{-m-1} = \zeta(m+1)$, convergent because $m + 1 \ge 2$.

**(5) Maclaurin series.** $\ln\Gamma(1+z)$ is analytic on the unit disc -- $\Gamma(1+z)$ is analytic and non-vanishing for $\lvert z\rvert < 1$, and $\ln\Gamma(1+0) = 0$ fixes the branch -- so it equals its Taylor series there, with radius exactly $1$ because $\Gamma(1+z)$ has a pole at $z = -1$. The coefficients are the derivatives at $0$: the first is $\psi(1) = -\gamma$ by part 2, and for $n \ge 2$ the $n$-th derivative is $\psi^{(n-1)}(1) = (-1)^{n}(n-1)!\,\zeta(n)$ by part 4, so the $n$-th coefficient is $(-1)^{n}(n-1)!\zeta(n)/n! = (-1)^{n}\zeta(n)/n$. Differentiating gives the series for $\psi(1+z)$.

**(6) Monotonicity.** Part 4 with $m = 1$ gives $\psi^{(1)}(x) = \sum_{k\ge0}(x+k)^{-2}$ for $x > 0$, and with $m = 2$ gives $\psi^{(2)}(x) = -2\sum_{k\ge0}(x+k)^{-3} < 0$. The first sum is a left-endpoint Riemann sum, over the unit intervals $[k,k+1]$, of the strictly decreasing function $t \mapsto (x+t)^{-2}$, so it strictly exceeds the integral:

$$
\psi^{(1)}(x) \;=\; \sum_{k=0}^{\infty}\frac{1}{(x+k)^{2}} \;>\; \int_0^{\infty}\frac{dt}{(x+t)^{2}} \;=\; \frac1x \;>\; 0 .
$$

Hence $\psi$ is strictly increasing and concave; $(\ln\Gamma)'' = \psi^{(1)} > 0$ makes $\ln\Gamma$ strictly convex; and the derivative of $\ln x - \psi(x)$ is $1/x - \psi^{(1)}(x) < 0$, so that function is strictly decreasing. For the limits: the single term $-1/x$ in part 1 drives $\psi(x) \to -\infty$ as $x \downarrow 0$, the remaining terms staying bounded; and $\psi(n+1) = -\gamma + H_n \to \infty$ with monotonicity in between. A continuous strictly increasing function with those limits is a bijection onto $\mathbb{R}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The constant $\gamma$ is not decoration.** In part 1 neither $\sum_k 1/k$ nor $\sum_k 1/(z+k)$ converges; only the difference does, and $\gamma$ is the price of having split a convergent series into two divergent halves in the Weierstrass product. This is why the digamma series, alone among the family, contains a transcendental constant: for $m \ge 1$ the polygamma series in part 4 converges on its own and no constant appears.
- **Term-by-term differentiation needs the differentiated series to converge uniformly,** not merely the original one; that is the hypothesis of :ref[]{to=found.termwise-operations} and it is what the $b/k^2$ bound in step 2 supplies. The bound degrades as $b \to \infty$, which is why the argument is run on a compact interval and then extended, rather than on $(0,\infty)$ at once.
- **Step 2 is carried out on the positive axis for a reason.** Taking the logarithm of the product requires choosing a branch, and for $x > 0$ every factor is a positive real so the choice is forced. The identity theorem then carries the result to all of $\Omega$ without any branch question, because $\psi = \Gamma'/\Gamma$ is single-valued even though $\ln\Gamma$ is not.
- **The reflection relation of part 3 holds only off the integers,** where $\cot \pi z$ is finite and $\Gamma(z)\Gamma(1-z)$ makes sense; the poles of $\pi\cot\pi z$ at the integers match the poles of $\psi$ there. Each pole of $\psi$ is simple with residue $-1$, as the term $-1/(z+k)$ of part 1 shows.
- **Part 4 excludes $m = 0$.** The polygamma series as written would be $\sum_k 1/(z+k)$ at $m = 0$, which diverges; part 1 is the correct $m = 0$ statement, with the compensating $1/k$.
- **The convergence condition in the method below is not optional.** A partial-fraction decomposition $\sum_j c_j/(n+a_j)$ sums to a combination of digamma values only when $\sum_j c_j = 0$, which is the same as requiring the numerator degree to be at most the denominator degree minus two. Otherwise the series diverges and no rearrangement can rescue it.
:::

:::method[Summing a series of rational terms]{provenance=adapted src="arfken-2013:§13.2, Series Summation, p. 613, and Exercises 13.2.14-13.2.15, p. 616"}
To evaluate $\sum_{n\ge1} R(n)$ where $R = P/Q$ is a rational function with no pole at a positive integer:

1. **Check convergence.** Require $\deg P \le \deg Q - 2$. If $\deg P = \deg Q - 1$ the series diverges logarithmically; split off the offending part first, or pair terms so that the leading behaviour cancels.
2. **Factor and decompose.** Write $Q(n) = \prod_j (n + a_j)^{\,m_j+1}$ and expand $R$ in partial fractions. With simple factors only, $R(n) = \sum_j c_j/(n+a_j)$, and step 1 guarantees $\sum_j c_j = 0$.
3. **Replace each simple group by digamma values.** From part 1, $\psi(1+a) = -\gamma + \sum_{k\ge1}\bigl(1/k - 1/(k+a)\bigr)$. Summing over $j$ with weights $c_j$, the $\gamma$ terms and the $1/k$ terms both cancel because $\sum_j c_j = 0$, leaving

   $$
   \sum_{n=1}^{\infty}\sum_j \frac{c_j}{n+a_j} \;=\; -\sum_j c_j\,\psi(1+a_j) .
   $$

   The two-factor case is worth memorising: for $a \ne b$,

   $$
   \sum_{n=1}^{\infty}\frac{1}{(n+a)(n+b)} \;=\; \frac{\psi(1+b) - \psi(1+a)}{b-a} .
   $$
4. **Use polygamma for repeated factors.** A term $(n+a)^{-m-1}$ with $m \ge 1$ needs no cancellation: by part 4,

   $$
   \sum_{n=0}^{\infty}\frac{1}{(n+a)^{\,m+1}} \;=\; \frac{(-1)^{m+1}}{m!}\,\psi^{(m)}(a) ,
   $$

   and a sum starting at $n = 1$ is this minus $a^{-m-1}$.
5. **Evaluate the digamma values.** Use part 2 for arguments differing from $1$ by an integer (the answer is then rational, built from harmonic numbers), part 3 for half-integers (expect $\ln 2$), and the reflection relation for arguments summing to an integer (expect $\pi\cot$). Arguments with denominator $3$, $4$ or $6$ give closed forms in $\pi$ and logarithms; other arguments must be left as $\psi$ or evaluated numerically.
6. **Check against a partial sum.** Add the first few hundred terms numerically. Convergence is only like $1/N$ for a two-factor denominator, so compare with the tail estimate rather than expecting agreement to full precision.
:::

:::example[A telescoping sum, and what the method automates]{provenance=original}
*Goal:* evaluate $\displaystyle \Sigma_1 = \sum_{n=1}^{\infty}\frac{1}{n(n+3)}$.

1. *Convergence.* The numerator has degree $0$ and the denominator degree $2$, so step 1 is satisfied.
2. *Partial fractions.* $\dfrac{1}{n(n+3)} = \dfrac13\left(\dfrac1n - \dfrac{1}{n+3}\right)$, so $c_1 = \tfrac13$ at $a_1 = 0$ and $c_2 = -\tfrac13$ at $a_2 = 3$, and indeed $c_1 + c_2 = 0$.
3. *Apply step 3.* With $a = 0$, $b = 3$,

   $$
   \Sigma_1 \;=\; \frac{\psi(4) - \psi(1)}{3} .
   $$
4. *Evaluate.* By part 2, $\psi(4) = -\gamma + H_3 = -\gamma + \tfrac{11}{6}$ and $\psi(1) = -\gamma$, so the $\gamma$ cancels and

   $$
   \Sigma_1 \;=\; \frac{11}{18} \;=\; 0.6111111 .
   $$
5. *Checks.* Direct summation of $N = 10^{6}$ terms gives $0.6111101$, short of the answer by $1.0\times10^{-6}$. That is exactly the omitted tail: $\tfrac13\sum_{n>N}\bigl(1/n - 1/(n+3)\bigr) = \tfrac13\bigl(1/(N{+}1)+1/(N{+}2)+1/(N{+}3)\bigr) \approx 1/N = 10^{-6}$, the slow convergence step 6 warns about. The telescoping is visible here, so the answer can be had by hand; the point of the method is that it survives when the roots are not integers. The same three lines with $a = 0$, $b = \tfrac12$ give

   $$
   \sum_{n=1}^{\infty}\frac{1}{n\bigl(n+\tfrac12\bigr)} \;=\; 2\bigl(\psi(\tfrac32)-\psi(1)\bigr) \;=\; 4 - 4\ln 2 \;=\; 1.2274113 ,
   $$

   where $\psi(\tfrac32) = \psi(\tfrac12) + 2 = 2-\gamma-2\ln2 = 0.0364900$ by parts 2 and 3; summing $10^{6}$ terms gives $1.2274103$.
:::

:::example[An odd-denominator sum by polygamma]{provenance=original}
*Goal:* evaluate $\displaystyle \Sigma_2 = \sum_{n=1}^{\infty}\frac{1}{(2n-1)^{2}} = 1 + \tfrac19 + \tfrac1{25} + \cdots$ without assuming the value of $\zeta(2)$ at the odd integers separately.

1. *Shift to the polygamma shape.* $(2n-1)^2 = 4\bigl(n - \tfrac12\bigr)^2$, so with $k = n-1$

   $$
   \Sigma_2 \;=\; \frac14\sum_{k=0}^{\infty}\frac{1}{\bigl(k+\tfrac12\bigr)^{2}} \;=\; \frac14\,\psi^{(1)}\!\left(\tfrac12\right)
   $$

   by step 4 of the method with $m = 1$, $a = \tfrac12$.
2. *Get $\psi^{(1)}(\tfrac12)$ from duplication.* Differentiate the duplication relation of part 3 once in $z$:

   $$
   \psi^{(1)}(z) + \psi^{(1)}\!\left(z+\tfrac12\right) \;=\; 4\,\psi^{(1)}(2z) .
   $$

   At $z = \tfrac12$ this reads $\psi^{(1)}(\tfrac12) + \psi^{(1)}(1) = 4\psi^{(1)}(1)$, so $\psi^{(1)}(\tfrac12) = 3\psi^{(1)}(1) = 3\zeta(2)$ by part 4.
3. *Conclude.*

   $$
   \Sigma_2 \;=\; \tfrac34\,\zeta(2) \;=\; \frac{3}{4}\cdot\frac{\pi^{2}}{6} \;=\; \frac{\pi^{2}}{8} \;=\; 1.2337006 .
   $$

   Note that $\psi^{(1)}(\tfrac12) = \pi^2/2 = 4.9348022$.
4. *Checks.* Summing $N = 10^{6}$ terms of $\Sigma_2$ gives $1.2337003$, the tail being about $1/(4N) = 2.5\times10^{-7}$. Independently, $\Sigma_2$ should be $\zeta(2)$ minus the even part $\sum_{n\ge1}(2n)^{-2} = \tfrac14\zeta(2)$, which is $\tfrac34\zeta(2)$ -- the same answer, and a reminder that step 2 did the work of that elementary split without needing it.
:::

:::application{provenance=adapted src="arfken-2013:Exercises 13.1.21 and 13.2.12-13.2.13, pp. 610 and 616, and §13.2, Series Summation, p. 613"}
**The log-mean of a Gamma variable, and fitting a shape parameter.** The Gamma density with rate $\lambda$ and shape $t$ is $f(x) = \lambda^{t}x^{\,t-1}e^{-\lambda x}/\Gamma(t)$ on $x > 0$ (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 13.1.21, p. 610"}). Its fractional moments are

$$
\mathbb{E}[X^{s}] \;=\; \frac{\lambda^{t}}{\Gamma(t)}\int_0^{\infty}x^{\,t+s-1}e^{-\lambda x}\,dx \;=\; \frac{\Gamma(t+s)}{\Gamma(t)\,\lambda^{s}} ,
$$

and differentiating in $s$ at $s = 0$ -- the derivative of $\Gamma(t+s)$ at $s=0$ being $\Gamma(t)\psi(t)$ -- gives

$$
\mathbb{E}[\ln X] \;=\; \psi(t) - \ln\lambda .
$$

For $t = 3$, $\lambda = 2$ this is $\psi(3) - \ln 2 = 0.9227843 - 0.6931472 = 0.2296372$, so the geometric mean is $e^{0.2296372} = 1.2581434$, well below the arithmetic mean $t/\lambda = 1.5$; the gap is a measure of the skewness that makes the Gamma family useful for rainfall totals and for waiting times. The same formula is the whole content of maximum-likelihood fitting of a Gamma shape: the likelihood equations reduce to $\ln\hat t - \psi(\hat t) = \ln\bar x - \overline{\ln x}$, a scalar equation with at most one root, because $\ln x - \psi(x)$ is strictly decreasing on $(0,\infty)$ by part 6 (:ref[]{to=stats.maximum-likelihood}).

**Phases and small expansions in quantum scattering.** A charged particle in a Coulomb field has a wave function whose normalisation and phase involve $\Gamma(1 + i\eta)$ with $\eta$ the Sommerfeld parameter (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 13.2.13, p. 616"}). Part 5 gives the small-$\eta$ behaviour directly: $\ln\Gamma(1+i\eta) = -\gamma\,i\eta - \zeta(2)\eta^{2}/2 + O(\eta^{3})$, so $\arg\Gamma(1+i\eta) = -\gamma\eta + O(\eta^{3})$ and $\lvert\Gamma(1+i\eta)\rvert^{2} = 1 - \zeta(2)\eta^{2} + O(\eta^{4})$. The same series, with $z$ a small algebraic quantity rather than imaginary, is how relativistic hydrogen wave functions are expanded in powers of $\alpha^{2}Z^{2}$ (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 13.2.12, p. 616"}).

**Lattice and loop sums.** Any sum whose general term is a rational function of the index -- a one-dimensional lattice Green's function, a dimensionally regularised loop integral expanded about an integer dimension, a mode sum in a cavity -- reduces by the method above to a finite combination of $\psi$ and $\psi^{(m)}$ at rational arguments, and hence to $\gamma$, $\ln 2$, $\pi$ and the zeta values. That reduction is why $\gamma$ and $\zeta(2), \zeta(3)$ appear in the coefficients of perturbative expansions, and why tables of $\psi^{(m)}$ were worth computing: the alternating sum $\sum_{k\ge0}(-1)^{k}(2k+1)^{-2}$, Catalan's constant, becomes $\bigl[\psi^{(1)}(\tfrac14) - \psi^{(1)}(\tfrac34)\bigr]/16 = 0.9159656$, a value with no known closed form in elementary constants.
:::
