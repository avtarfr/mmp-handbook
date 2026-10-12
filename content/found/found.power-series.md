---
id: found.power-series
title: Power series
kind: theorem
level: core
summary: A power series has a radius of convergence given by Hadamard's formula, inside which it converges absolutely, uniformly on closed subdiscs, and may be differentiated and integrated term by term; at a boundary point where it converges, its sum is the limit of its values along the radius.
prereqs: [found.termwise-operations, found.series-convergence-tests, found.uniform-convergence, found.limits-of-sequences, found.absolute-convergence]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "§2.4 Power Series, Thm 2 and Hadamard's formula (18), pp. 38-39; termwise differentiation and the coefficient formula, pp. 39-40; §2.5 Abel's Limit Theorem, Thm 3, pp. 41-42"
    pages: "38-42"
    role: definition of the radius of convergence, the convergence theorem, termwise differentiation, Abel's limit theorem
  - work: arfken-2013
    loc: "§1.2, Properties of Power Series and Uniqueness Theorem, pp. 29-31"
    pages: "29-31"
    role: uniform and absolute convergence on closed subintervals; termwise differentiation and integration; uniqueness of the coefficients
  - work: rhb-2006
    loc: "§4.5.1 Convergence of power series, pp. 132-133; §4.5.2(iii), p. 135"
    pages: "132-135"
    role: ratio-test form of the radius of convergence; behaviour at the end-points after termwise integration or differentiation
  - work: hassani-2013
    loc: "§10.6.1, Prop. 10.6.1 and Thms 10.6.2-10.6.3, pp. 319-321"
    pages: "319-321"
    role: uniform convergence inside the circle of convergence; termwise differentiation and integration
---

:::note{provenance=original}
**What it means.** A power series behaves on the inside of its disc exactly as a polynomial does: it converges absolutely, you may differentiate and integrate it as often as you like, and its coefficients are the Taylor coefficients of its sum. The radius of convergence is the only number you need, and Hadamard's formula computes it from the coefficients alone. Everything delicate happens on the boundary circle, where convergence must be examined point by point; Abel's theorem is the one general result there, and it says that convergence at a boundary point is enough to make the sum the limit of the values inside, provided you approach the point without grazing the circle.
:::

:::definition[Power series and radius of convergence]{provenance=adapted src="ahlfors-1979:§2.4, p. 38 and formula (18), p. 38"}
A **power series** about the centre $z_0 \in \mathbb{C}$ is a series

$$
\sum_{n=0}^{\infty} a_n (z - z_0)^n , \qquad a_n \in \mathbb{C} ,
$$

with the convention $(z-z_0)^0 = 1$. Its **radius of convergence** is the number $R \in [0, +\infty]$ defined by **Hadamard's formula**

$$
\frac{1}{R} = \limsup_{n \to \infty} \lvert a_n \rvert^{1/n} ,
$$

read with $1/0 = +\infty$ and $1/{+\infty} = 0$. The set $\lvert z - z_0 \rvert < R$ is the **disc of convergence** (for real series, the **interval of convergence** $(x_0 - R,\, x_0 + R)$), and $\lvert z - z_0 \rvert = R$ is the **circle of convergence**.
:::

:::statement[Convergence of a power series (Cauchy-Hadamard)]{provenance=adapted src="ahlfors-1979:§2.4, Thm 2 and formula (18), pp. 38-39; arfken-2013:§1.2, p. 29; hassani-2013:§10.6.1, Thm 10.6.2, p. 320"}
Let $R$ be the radius of convergence of $\sum_{n \ge 0} a_n (z-z_0)^n$.

1. **Inside.** The series converges absolutely at every $z$ with $\lvert z - z_0 \rvert < R$, and for each $\rho$ with $0 \le \rho < R$ it converges uniformly on the closed disc $\lvert z - z_0 \rvert \le \rho$.
2. **Outside.** If $\lvert z - z_0 \rvert > R$ the terms $a_n (z-z_0)^n$ are unbounded, so the series diverges.
3. **On the circle.** Nothing is asserted at $\lvert z - z_0 \rvert = R$: there the series may converge at every point, at none, or at some.
4. **The sum.** In $\lvert z - z_0 \rvert < R$ the sum $f$ is a complex-differentiable (analytic) function of $z$: at every point $z_1$ of the open disc the difference quotient $\bigl(f(z) - f(z_1)\bigr)/(z - z_1)$ has a limit as $z \to z_1$ in $\mathbb{C}$, the limit being unrestricted in the direction of approach.

In particular the series converges uniformly on every compact subset of the disc of convergence, but in general not on the whole open disc.
:::

:::idea{provenance=adapted src="ahlfors-1979:§2.4, pp. 38-39"}
Hadamard's number $1/R$ is the eventual ceiling of $\lvert a_n \rvert^{1/n}$, and a limit superior gives exactly two comparisons, one of them one-sided. Past some index the sequence stays below any number larger than $1/R$; and it rises above any number smaller than $1/R$ for infinitely many $n$, though not necessarily for all large $n$. Those two comparisons are the whole proof: inside the disc the first makes the terms eventually dominated by a convergent geometric series, which feeds the Weierstrass M-test and delivers absolute and uniform convergence at one stroke, while outside it the second makes infinitely many terms exceed a geometric sequence with ratio above $1$, so the terms are unbounded, which no convergent series permits. The reason the uniform statement needs a radius $\rho$ strictly less than $R$ is that the dominating geometric ratio must be bounded away from $1$.
:::

:::proof{provenance=adapted src="ahlfors-1979:§2.4, pp. 38-39"}
Write $w = z - z_0$, so that the series is $\sum_{n \ge 0} a_n w^n$ and every assertion concerns $\lvert w\rvert$; nothing below uses the position of the centre. Put $L = \limsup_n \lvert a_n\rvert^{1/n}$, which exists in $[0,+\infty]$ by :ref[the existence of the limit superior]{to=found.limits-of-sequences}, so that $L = 1/R$ under the conventions of the definition.

**Part 1, uniform convergence on a closed subdisc.** If $R = 0$ there is no $\rho$ with $0 \le \rho < R$ and nothing to prove, so let $R > 0$ and fix such a $\rho$. Choose $\rho_1$ with $\rho < \rho_1 < R$ — take $\rho_1 = (\rho + R)/2$ if $R$ is finite and $\rho_1 = \rho + 1$ if $R = +\infty$. Then $1/\rho_1 > 1/R = L$, and the limit superior is the least number that the sequence eventually stays below, so there is an index $n_0$ with

$$
\lvert a_n \rvert^{1/n} < \frac{1}{\rho_1}, \qquad \text{that is} \qquad \lvert a_n \rvert < \rho_1^{-n}, \qquad \text{for all } n \ge n_0 .
$$

For $\lvert w \rvert \le \rho$ and $n \ge n_0$ this gives $\lvert a_n w^n \rvert \le (\rho/\rho_1)^n =: M_n$, a bound that does not depend on $w$. Since $q = \rho/\rho_1 < 1$, the series $\sum_n M_n$ is a convergent geometric series, so the :ref[Weierstrass M-test]{to=found.uniform-convergence} gives uniform and absolute convergence of $\sum_{n \ge n_0} a_n w^n$ on the closed disc $\lvert w \rvert \le \rho$. Adding the finitely many terms with $n < n_0$ affects neither uniformity nor absolute convergence, so part 1's uniform assertion holds on $\lvert w\rvert \le \rho$. This is the step where $\rho < R$ is used: it is what makes $q$ strictly less than $1$.

**Part 1, absolute convergence at every interior point.** Given $w$ with $\lvert w \rvert < R$, apply the previous paragraph with $\rho = \lvert w \rvert$. So the series converges absolutely at $w$ (the comparison is with a convergent geometric series, and absolute convergence implies convergence by :ref[Absolute and conditional convergence]{to=found.absolute-convergence}), and since $w$ was arbitrary, throughout the open disc.

**Part 2, divergence outside.** Let $\lvert w \rvert > R$ and choose $\rho$ with $R < \rho < \lvert w \rvert$. Then $1/\rho < 1/R = L$, and the limit superior is a limit point of the sequence from above, so $\lvert a_n\rvert^{1/n} > 1/\rho$ for infinitely many $n$. For each such $n$,

$$
\lvert a_n w^n \rvert > \Bigl(\frac{\lvert w \rvert}{\rho}\Bigr)^{n},
$$

and the base exceeds $1$, so these moduli are unbounded. In particular the terms do not tend to $0$, and a series whose terms do not tend to $0$ diverges (:ref[the vanishing-terms criterion]{to=found.series-convergence-tests}).

**Part 3.** Nothing is asserted on the circle, so there is nothing to prove; the first three series of the remark below show that convergence everywhere, nowhere and almost everywhere on the circle all occur with $R = 1$, so no assertion of this kind could be made.

**Part 4.** That the sum is complex-differentiable in $\lvert w \rvert < R$ is proved as part of the next statement, whose proof constructs $f'$ as the sum of the derived series; no further argument is needed here. $\square$
:::

:::statement[Termwise differentiation and integration]{provenance=adapted src="ahlfors-1979:§2.4, pp. 39-40; arfken-2013:§1.2, p. 30; hassani-2013:§10.6.1, Thm 10.6.3, pp. 320-321; rhb-2006:§4.5.2(iii), p. 135"}
Let $f(z) = \sum_{n \ge 0} a_n (z-z_0)^n$ have radius of convergence $R > 0$.

1. **Differentiation.** The differentiated series $\sum_{n \ge 1} n\,a_n (z-z_0)^{n-1}$ has the same radius of convergence $R$, and in $\lvert z - z_0\rvert < R$
   $$
   f'(z) = \sum_{n=1}^{\infty} n\,a_n (z-z_0)^{n-1} .
   $$
   Repeating this, $f$ has derivatives of every order in the disc, each given by termwise differentiation, and the coefficients are determined by $f$ through
   $$
   a_n = \frac{f^{(n)}(z_0)}{n!} , \qquad n = 0, 1, 2, \dots
   $$
2. **Integration.** For a real series $f(x) = \sum_{n \ge 0} a_n (x-x_0)^n$ on $(x_0 - R, x_0 + R)$, the series $\sum_{n \ge 0} a_n (x-x_0)^{n+1}/(n+1)$ also has radius of convergence $R$ and is an antiderivative of $f$ there; equivalently, for $x_0 - R < \alpha \le \beta < x_0 + R$,
   $$
   \int_{\alpha}^{\beta} f(x)\,dx = \sum_{n=0}^{\infty} a_n \int_{\alpha}^{\beta} (x-x_0)^n \, dx .
   $$
   In the complex case the same termwise integration is valid along any piecewise-smooth path inside the disc of convergence; this case is not proved in this unit, and the note after the proof says why and where its proof belongs. (Hassani's Thm 10.6.3 states it for any path in the circle of convergence, with no condition on the path.)

Both operations leave $R$ unchanged, but may change the behaviour at the ends of the interval of convergence, which must be tested separately.
:::

:::idea{provenance=original}
Hadamard's formula is insensitive to a polynomial factor in the coefficients, because $n^{1/n} \to 1$; that one observation gives the derived and integrated series the same radius as the original. With that in hand the derivative is obtained by a direct estimate rather than by any limit interchange: subtract the derived series from the difference quotient, factorise $w^n - w_0^n$ twice, and what is left is bounded by a constant times $\lvert w - w_0\rvert$, the constant being the value of the twice-derived series at a radius $\rho < R$. Repeating the argument on the derived series gives all higher derivatives, and setting $w = z_0$ in the $k$-fold derived series leaves the single term $k!\,a_k$.
:::

:::proof{provenance=adapted src="ahlfors-1979:§2.4, pp. 39-40"}
Again write $w = z - z_0$ and $f(w) = \sum_{n \ge 0} a_n w^n$.

**Step 1: $n^{1/n} \to 1$.** Put $n^{1/n} = 1 + \delta_n$ with $\delta_n \ge 0$. For $n \ge 2$ the binomial theorem retains only two of its terms to give $n = (1+\delta_n)^n \ge 1 + \tbinom{n}{2}\delta_n^2$, whence $\delta_n^2 \le (n-1)\big/\tbinom{n}{2} = 2/n$. So $\delta_n \le \sqrt{2/n} \to 0$.

**Step 2: the derived and integrated series have radius $R$.** First a remark on limits superior: if $b_n > 0$ with $b_n \to 1$ and $c_n \ge 0$, then $\limsup_n b_n c_n = \limsup_n c_n$, because for each $\varepsilon \in (0,1)$ we eventually have $(1-\varepsilon)c_n \le b_nc_n \le (1+\varepsilon)c_n$, so the two limits superior differ by a factor between $1-\varepsilon$ and $1+\varepsilon$ for every $\varepsilon$ (this also covers the value $+\infty$).

Apply it with $c_n = \lvert a_n\rvert^{1/n}$ and $b_n = n^{1/n} \to 1$ from step 1: the series $\sum_n n\,a_n w^n$ has $\limsup_n (n\lvert a_n\rvert)^{1/n} = \limsup_n \lvert a_n\rvert^{1/n} = 1/R$, hence radius $R$. For $w \ne 0$ the derived series $\sum_{n\ge1} n a_n w^{n-1}$ is that series divided by $w$, so the two converge at exactly the same points, and the derived series has radius $R$ as well. Taking $b_n = (n+1)^{-1/n}$, which also tends to $1$ because $n^{1/n} \le (n+1)^{1/n} \le 2^{1/n} n^{1/n}$, gives $\limsup_n \lvert a_n/(n+1)\rvert^{1/n} = 1/R$, so $\sum_n \bigl(a_n/(n+1)\bigr)w^n$ has radius $R$; the integrated series $\sum_n a_n w^{n+1}/(n+1)$ is that one multiplied by $w$, so again the two converge at the same points and the integrated series has radius $R$. Iterating the first case, every repeatedly derived series has radius $R$; in particular $\sum_{n\ge2} n(n-1)a_n w^{n-2}$ does.

**Step 3: $f' $ is the derived series.** Write $g(w) = \sum_{n \ge 1} n a_n w^{n-1}$, which converges for $\lvert w\rvert < R$ by step 2. Fix $w_0$ with $\lvert w_0 \rvert < R$ and choose $\rho$ with $\lvert w_0\rvert < \rho < R$. By step 2 the twice-derived series has radius $R > \rho$, so by part 1 of the convergence theorem it converges absolutely at $\rho$; that is,

$$
K := \sum_{n \ge 2} n(n-1)\,\lvert a_n\rvert\, \rho^{\,n-2} < \infty .
$$

Now let $\lvert w \rvert \le \rho$ with $w \ne w_0$. Factorising $w^n - w_0^n = (w - w_0)\sum_{j=0}^{n-1} w^j w_0^{\,n-1-j}$ and subtracting $n w_0^{\,n-1}$ term by term from that inner sum,

$$
f(w) - f(w_0) - (w - w_0)\,g(w_0)
= (w-w_0) \sum_{n \ge 1} a_n \sum_{j=0}^{n-1} w_0^{\,n-1-j}\bigl(w^j - w_0^{\,j}\bigr) .
$$

Factorising once more, $\lvert w^j - w_0^{\,j}\rvert \le j\,\rho^{\,j-1}\lvert w - w_0\rvert$, since the second factor is a sum of $j$ products each of modulus at most $\rho^{\,j-1}$. With $\lvert w_0^{\,n-1-j}\rvert \le \rho^{\,n-1-j}$ the inner sum is bounded by $\rho^{\,n-2}\sum_{j=0}^{n-1} j = \tfrac12 n(n-1)\rho^{\,n-2}$, so

$$
\bigl\lvert f(w) - f(w_0) - (w-w_0)g(w_0) \bigr\rvert \le \tfrac12 K \lvert w - w_0\rvert^2 .
$$

Dividing by $\lvert w - w_0\rvert$ shows that the difference quotient differs from $g(w_0)$ by at most $\tfrac12 K\lvert w - w_0\rvert$, which tends to $0$. Hence $f$ is complex-differentiable at $w_0$ with $f'(w_0) = g(w_0)$. As $w_0$ was any interior point, $f$ is analytic in $\lvert w\rvert < R$ — which is part 4 of the convergence theorem — and $f'$ is the derived series. The hypothesis $R > 0$ is used here: with $R = 0$ there is no interior point and no $K$.

**Step 4: all orders, and the coefficients.** By step 2 the derived series is itself a power series with radius $R$, so step 3 applies to it, and by induction $f$ has derivatives of every order in the disc, the $k$-th being the $k$-fold derived series

$$
f^{(k)}(w) = \sum_{n \ge k} n(n-1)\cdots(n-k+1)\, a_n\, w^{\,n-k} .
$$

Put $w = 0$, that is $z = z_0$. Every term with $n > k$ carries a positive power of $w$ and vanishes, and the term $n = k$ is $k!\,a_k$. So $f^{(k)}(z_0) = k!\,a_k$, which is the coefficient formula.

**Step 5: integration on a real interval.** Let $F(x) = \sum_{n \ge 0} a_n (x-x_0)^{n+1}/(n+1)$, of radius $R$ by step 2. Step 3 applied to $F$ gives $F' = f$ on $(x_0 - R, x_0 + R)$, so $F$ is an antiderivative of $f$ there, and $f$ is continuous because it is differentiable. For $x_0 - R < \alpha \le \beta < x_0 + R$ the fundamental theorem of calculus therefore gives

$$
\int_{\alpha}^{\beta} f = F(\beta) - F(\alpha) = \sum_{n=0}^{\infty} a_n \frac{(\beta-x_0)^{n+1} - (\alpha-x_0)^{n+1}}{n+1} = \sum_{n=0}^{\infty} a_n \int_{\alpha}^{\beta}(x-x_0)^n dx ,
$$

the middle series being convergent because $F$ is defined at both end points. The same conclusion follows from :ref[term-by-term integration]{to=found.termwise-operations}, whose hypotheses hold on $[\alpha,\beta]$ by part 1 of the convergence theorem with any $\rho$ between $\max(\lvert\alpha - x_0\rvert, \lvert\beta-x_0\rvert)$ and $R$.

This proves part 1 in full, the coefficient formula, and part 2 for a real interval. The remaining sentence of part 2, termwise integration along a path in the complex plane, is not proved here; the note below says why and where it belongs. $\square$
:::

:::note[The complex-path case of part 2 is deferred]{provenance=original}
Integration along a path is not available at this point of the handbook. The object $\int_\gamma f(z)\,dz$ and the bound on its size are set up in :ref[contour integrals]{to=complex.contour-integrals}, whose part 3 is the **ML estimate**: for $h$ continuous on a piecewise-smooth path $\gamma$ of length $\ell$, $\bigl\lvert\int_\gamma h\,dz\bigr\rvert \le \ell\,\sup_\gamma\lvert h\rvert$. That unit cannot be made a prerequisite of this one, because it depends on this unit in turn: the complex exponential is *defined* by its power series there, so the dependency runs from power series to contour integrals and a prerequisite in the other direction would be circular. Nothing in this unit's four prerequisites supplies the estimate, and it is not a result of elementary calculus.

Granted the ML estimate, the step is immediate, and this is the argument the later unit's machinery carries out. Let $\gamma$ be a piecewise-smooth path contained in $\lvert z - z_0\rvert \le \rho$ for some $\rho < R$, of length $\ell$, and let $s_N$ be the $N$-th partial sum, a polynomial and hence continuous, as is $f$ by step 3. Part 1 of the convergence theorem gives $\varepsilon_N = \sup_{\lvert z - z_0\rvert \le \rho}\lvert f - s_N\rvert \to 0$, so the estimate applied to $h = f - s_N$ yields

$$
\Bigl\lvert \int_{\gamma} f\,dz - \sum_{n \le N} a_n\int_{\gamma}(z-z_0)^n\,dz \Bigr\rvert = \Bigl\lvert \int_{\gamma}(f - s_N)\,dz\Bigr\rvert \le \ell\,\varepsilon_N \longrightarrow 0 .
$$

Piecewise smoothness is what makes $\ell$ finite and the integrals defined; it is the condition part 2 states, and Hassani's Thm 10.6.3 (p. 321) states the conclusion for any path in the circle of convergence without naming it. The same bound, in the form "length times sup-norm", is what licenses the termwise integration by which :ref[the Taylor series of an analytic function]{to=complex.taylor-series} is read off Cauchy's integral formula.
:::

:::statement[Abel's limit theorem]{provenance=adapted src="ahlfors-1979:§2.5, Thm 3, pp. 41-42"}
Let $\sum_{n \ge 0} a_n$ converge, and put $f(z) = \sum_{n \ge 0} a_n z^n$, which then has radius of convergence at least $1$. Then

$$
f(z) \longrightarrow \sum_{n=0}^{\infty} a_n \qquad \text{as } z \to 1
$$

along any approach for which the quotient $\lvert 1 - z \rvert / (1 - \lvert z \rvert)$ stays bounded, that is, within a **Stolz angle**: a sector of opening less than $180^{\circ}$ with vertex at $1$, symmetric about the segment of the real axis coming in from the left.

**Real form** (this handbook's corollary, not part of Ahlfors's Thm 3, which is the complex statement at $z \to 1$; the last paragraph of the proof below derives it by rescaling). If $\sum_{n \ge 0} a_n R^n$ converges for some $R > 0$, then

$$
\lim_{x \to R^{-}} \sum_{n=0}^{\infty} a_n x^n = \sum_{n=0}^{\infty} a_n R^n ,
$$

so the sum of a real power series is continuous on $(-R, R]$ whenever it converges at the right-hand end point, and similarly at the left-hand end point.
:::

:::idea{provenance=adapted src="ahlfors-1979:§2.5, pp. 41-42"}
Summing by parts replaces the coefficients by the partial sums $s_n$ and produces the representation $f(z) = (1-z)\sum_n s_n z^n$, which displays $f(z)$ as a weighted average of the partial sums with weights $(1-z)z^n$ that add to $1$. Since $s_n \to s$, all but finitely many weights multiply numbers already within $\varepsilon$ of $s$; the finitely many exceptional terms carry the factor $1-z$ and die as $z \to 1$. What the Stolz condition buys is that the total mass of the remaining weights, $\lvert 1-z\rvert/(1-\lvert z\rvert)$, stays bounded, so the $\varepsilon$ is not amplified without limit.
:::

:::proof{provenance=adapted src="ahlfors-1979:§2.5, Thm 3, pp. 41-42"}
Write $s_n = a_0 + \dots + a_n$ and $s = \sum_{n \ge 0} a_n = \lim_n s_n$, which exists by hypothesis.

**The radius is at least $1$.** A convergent series has $a_n \to 0$, so $(\lvert a_n\rvert)$ is bounded, say by $C \ge 1$; then $\lvert a_n\rvert^{1/n} \le C^{1/n} \to 1$, so $\limsup_n \lvert a_n\rvert^{1/n} \le 1$ and $R \ge 1$. In particular $f$ is defined on $\lvert z\rvert < 1$.

**Summation by parts.** With $s_{-1} = 0$ we have $a_n = s_n - s_{n-1}$, so for every $N \ge 1$

$$
\sum_{n=0}^{N} a_n z^n = \sum_{n=0}^{N}(s_n - s_{n-1})z^n = (1-z)\sum_{n=0}^{N-1} s_n z^n + s_N z^N ,
$$

on collecting the coefficient of each $s_n$. Fix $\lvert z \rvert < 1$. The sequence $(s_n)$ is convergent, hence bounded, so $\sum_n s_n z^n$ converges absolutely, and therefore converges, by :ref[Absolute and conditional convergence]{to=found.absolute-convergence}; also $s_N z^N \to 0$. Letting $N \to \infty$,

$$
f(z) = (1-z)\sum_{n=0}^{\infty} s_n z^n \qquad (\lvert z\rvert < 1).
$$

**Subtracting the limit.** Since $(1-z)\sum_{n \ge 0} z^n = 1$ for $\lvert z\rvert < 1$, we may write $s = (1-z)\sum_{n\ge0} s\,z^n$ and subtract:

$$
f(z) - s = (1-z)\sum_{n=0}^{\infty} t_n z^n , \qquad t_n = s_n - s \to 0 .
$$

**The estimate.** Let $\varepsilon > 0$ and choose $m$ with $\lvert t_n\rvert \le \varepsilon$ for all $n \ge m$. Splitting the sum at $m$ and using $\sum_{n \ge m}\lvert z\rvert^n \le 1/(1-\lvert z\rvert)$,

$$
\lvert f(z) - s\rvert \;\le\; \lvert 1-z\rvert \sum_{n < m} \lvert t_n \rvert \; + \; \varepsilon\,\frac{\lvert 1 - z\rvert}{1 - \lvert z\rvert} .
$$

Here the hypothesis enters: on the approach considered, $\lvert 1-z\rvert/(1-\lvert z\rvert) \le K$ for some constant $K$, so the second term is at most $K\varepsilon$. The first term is $\lvert 1-z\rvert$ times the fixed finite number $A_m = \sum_{n<m}\lvert t_n\rvert$, so it is below $\varepsilon$ once $\lvert 1 - z\rvert < \varepsilon/(A_m + 1)$. Hence $\lvert f(z) - s\rvert \le (K+1)\varepsilon$ for all admissible $z$ close enough to $1$, and as $\varepsilon > 0$ was arbitrary, $f(z) \to s$.

**The two descriptions of the approach agree.** If $z$ lies in the sector $\lvert \arg(1-z)\rvert \le \theta < 90^{\circ}$ then $\operatorname{Re}(1-z) \ge \cos\theta\,\lvert 1-z\rvert$, and from $1 - \lvert z\rvert^2 = 2\operatorname{Re}(1-z) - \lvert 1-z\rvert^2$ and $1 - \lvert z\rvert \ge \tfrac12(1-\lvert z\rvert^2)$ we get $1 - \lvert z\rvert \ge \lvert 1-z\rvert\bigl(\cos\theta - \tfrac12\lvert 1-z\rvert\bigr)$; so once $\lvert 1-z\rvert \le \cos\theta$ the quotient is at most $2/\cos\theta$. Conversely, if the quotient is at most $K$ then $\operatorname{Re}(1-z) = \tfrac12\bigl(\lvert 1-z\rvert^2 + 1 - \lvert z\rvert^2\bigr) \ge \tfrac12(1-\lvert z\rvert) \ge \lvert 1-z\rvert/(2K)$, so $\cos\arg(1-z) \ge 1/(2K)$ and $z$ stays in such a sector.

**Real form.** Apply the above to the coefficients $b_n = a_n R^n$, whose series converges by hypothesis, and to $z = x/R$. For real $z \in (0,1)$ the quotient $\lvert 1-z\rvert/(1-\lvert z\rvert)$ equals $1$, so the approach is admissible, and $\sum_n b_n z^n = \sum_n a_n x^n \to \sum_n b_n = \sum_n a_n R^n$ as $x \to R^-$. The left-hand end point is the same statement for $b_n = a_n(-R)^n$. Continuity on $(-R,R]$ follows: inside the interval $f$ is differentiable, hence continuous, and at $R$ the one-sided limit has just been identified with the value. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="rhb-2006:§4.5.1, p. 132 and §4.5.2(iii), p. 135; arfken-2013:§1.2, pp. 29-31; ahlfors-1979:§2.4, Exercise 7, p. 41"}
- **Why $\limsup$ and not $\lim$.** The familiar formula $1/R = \lim_{n} \lvert a_{n+1}/a_n \rvert$, stated by Riley, Hobson and Bence as a ratio-test criterion for convergence (§4.5.1, p. 132; the worked example on p. 133 applies it) and by Arfken (p. 29), presumes that this limit exists; Ahlfors sets its agreement with Hadamard's formula in that case as Exercise 7 (p. 41). Take $a_n = 1$ for even $n$ and $a_n = 2$ for odd $n$: then $\lvert a_n \rvert^{1/n} \to 1$, so $R = 1$, while $\lvert a_{n+1}/a_n \rvert$ alternates between $2$ and $1/2$ and has no limit. Hadamard's formula needs no hypothesis at all.
- **Uniform convergence holds on closed subdiscs, not on the open disc.** For $\sum_{n \ge 0} z^n$, with $R = 1$, the tail at $z = \rho$ is $\rho^{N}/(1-\rho)$, which is unbounded as $\rho \to 1^-$; so the convergence is uniform on each $\lvert z \rvert \le \rho < 1$ and not on $\lvert z \rvert < 1$. This is why part 1 is stated with $\rho$, following Ahlfors (Thm 2(i), p. 38), and it is where this unit's two sources differ: Hassani's Thm 10.6.2 (p. 320) asserts uniform convergence at all points within the circle of convergence, that is on the whole open disc, and the geometric series shows that the stronger form cannot hold. The statement above follows Ahlfors; Hassani's locator is retained on that statement only for part 4, the analyticity of the sum, which the two sources state alike.
- **The boundary is genuinely undetermined.** All three of $\sum_{n\ge0} z^n$, $\sum_{n\ge1} z^n/n$ and $\sum_{n\ge1} z^n/n^2$ have $R = 1$. The first diverges at every point of $\lvert z \rvert = 1$; the second converges at every such point except $z = 1$; the third converges absolutely at all of them.
- **Termwise operations can change the end points.** $\sum_{n \ge 0} x^n$ diverges at $x = -1$, while its termwise integral $\sum_{n \ge 0} x^{n+1}/(n+1)$ converges there, to $-\ln 2$. Riley, Hobson and Bence state the general warning (p. 135): the interval of convergence is unchanged, the end points must be retested.
- **Abel's theorem needs the Stolz angle, and has no converse.** The restriction $\lvert 1-z\rvert \le K(1-\lvert z\rvert)$ excludes approaches tangential to the circle. In the other direction, the existence of $\lim_{x \to R^-} f(x)$ does not imply that $\sum a_n R^n$ converges: $\sum_{n \ge 0} (-1)^n x^n = 1/(1+x) \to 1/2$ as $x \to 1^-$, but $\sum_{n\ge0}(-1)^n$ diverges.
- **The coefficient formula needs $R > 0$.** If $R = 0$ the series defines no function on a neighbourhood of $z_0$ and there is nothing to differentiate. Where $R > 0$, the formula $a_n = f^{(n)}(z_0)/n!$ also yields the uniqueness of the representation: two power series about the same centre that agree on a neighbourhood of it have the same coefficients (Arfken, pp. 30-31).
:::

:::example[A radius that only Hadamard's formula gives, then termwise integration]{provenance=original}
Let

$$
a_n = \begin{cases} 2^{-n}, & n \text{ even},\\ 3^{-n}, & n \text{ odd},\end{cases}
\qquad f(z) = \sum_{n \ge 0} a_n z^n .
$$

1. *The ratio form is unusable.* For even $n$, $\lvert a_{n+1}/a_n\rvert = 2^n/3^{n+1} \to 0$; for odd $n$, $\lvert a_{n+1}/a_n\rvert = 3^n/2^{n+1} \to \infty$. The sequence of ratios has no limit, and no finite or infinite value is approached, so neither the ratio form of $R$ nor the ratio test decides anything here.

2. *Hadamard's formula.* $\lvert a_n\rvert^{1/n}$ is $1/2$ at every even $n$ and $1/3$ at every odd $n$, so its limit superior is $1/2$ and $R = 2$.

3. *Independent confirmation, and the circle.* Splitting into even and odd indices gives two geometric series,
   $$
   f(z) = \sum_{m \ge 0}\Bigl(\frac{z}{2}\Bigr)^{2m} + \sum_{m \ge 0}\Bigl(\frac{z}{3}\Bigr)^{2m+1}
        = \frac{4}{4 - z^2} + \frac{3z}{9 - z^2} ,
   $$
   the first converging exactly for $\lvert z\rvert < 2$ and the second for $\lvert z \rvert < 3$; so the sum converges exactly on $\lvert z \rvert < 2$, confirming $R = 2$. At $\lvert z\rvert = 2$ the even terms have modulus $1$, so the terms do not tend to $0$ and the series diverges at every point of the circle — one of the three behaviours part 3 of the convergence theorem leaves open. At $z = 1$ the closed form gives $f(1) = 4/3 + 3/8 = 41/24 = 1.70833\overline{3}$, which the partial sums reproduce.

4. *Integrate term by term over $[0,1]$.* On $\lvert z\rvert \le 1$ the M-test applies with $M_n = \lvert a_n\rvert \le 2^{-n}$, so the convergence is uniform there and part 2 of the termwise statement applies on $[0,1]$:
   $$
   \sum_{n=0}^{\infty} \frac{a_n}{n+1} = \int_0^1 f(x)\,dx = \int_0^1\Bigl(\frac{4}{4-x^2} + \frac{3x}{9-x^2}\Bigr) dx .
   $$

5. *Evaluate the integral in closed form.* Partial fractions give $4/(4-x^2) = 1/(2-x) + 1/(2+x)$, whose integral is $\ln\frac{2+x}{2-x}$, equal to $\ln 3$ at $x=1$; and $\int 3x\,dx/(9-x^2) = -\tfrac32\ln(9-x^2)$, contributing $\tfrac32\ln\tfrac98$. Hence
   $$
   \sum_{n=0}^{\infty}\frac{a_n}{n+1} = \ln 3 + \tfrac32\ln\tfrac98 = \ln\frac{81\sqrt2}{32} = 1.2752868421526849 .
   $$

6. *Check.* The partial sums of $\sum_n a_n/(n+1)$ are $1$, $1.166667$, $1.25$, $1.259259$, $1.271759$, $1.272445$, $1.274677$, $1.274734$, and by $n = 11$ they have reached $1.275263$, climbing to the stated value. The integrated series has radius $2$ as well, in accordance with step 2 of the proof.
:::

:::example[Abel's theorem at a boundary point]{provenance=original}
We evaluate $\sum_{n \ge 0} (-1)^n/(3n+1) = 1 - \tfrac14 + \tfrac17 - \tfrac1{10} + \cdots$, a conditionally convergent series, by working inside the disc of convergence and transporting the answer to the boundary.

1. *A power series whose coefficients are these numbers.* For $\lvert t\rvert < 1$ the geometric series with ratio $-t^3$ gives $1/(1+t^3) = \sum_{n \ge 0}(-1)^n t^{3n}$. On $[-\rho,\rho]$ with $\rho < 1$ we have $\lvert (-1)^n t^{3n}\rvert \le \rho^{3n}$, so the M-test applies with $M_n = \rho^{3n}$ and the convergence is uniform on that closed interval. Given $x$ with $\lvert x\rvert < 1$, choose $\rho$ with $\lvert x\rvert \le \rho < 1$; then $[0,x]$ (or $[x,0]$ for negative $x$) lies in $[-\rho,\rho]$, and term-by-term integration from $0$ to $x$ gives
   $$
   g(x) := \sum_{n=0}^{\infty} \frac{(-1)^n x^{3n+1}}{3n+1} = \int_0^x \frac{dt}{1+t^3} .
   $$
   Only the exponents $3n+1$ carry non-zero coefficients, and $\lvert 1/(3n+1)\rvert^{1/(3n+1)} \to 1$, so $R = 1$.

2. *Convergence at the end point.* At $x = 1$ the series is alternating with terms $1/(3n+1)$ decreasing to $0$, so it converges by the alternating-series test. It does not converge absolutely, so the M-test gives nothing on the closed interval and the value at $x=1$ is not available by a uniform-convergence argument.

3. *Abel's limit theorem.* Its real form with $R = 1$ now applies and identifies the end-point sum with the limit from inside:
   $$
   \sum_{n=0}^{\infty}\frac{(-1)^n}{3n+1} = \lim_{x \to 1^-} g(x) .
   $$

4. *Compute the limit.* The function $x \mapsto \int_0^x dt/(1+t^3)$ is continuous at $x=1$, the integrand being continuous on $[0,1]$, so the limit is $\int_0^1 dt/(1+t^3)$. With $1+t^3 = (1+t)(t^2-t+1)$,
   $$
   \frac{1}{1+t^3} = \frac{1}{3(1+t)} + \frac{2-t}{3(t^2-t+1)} ,
   $$
   The first piece integrates to $\tfrac13\ln 2$. For the second, writing $2 - t = -\tfrac12(2t-1) + \tfrac32$ splits it as $-\tfrac16\int_0^1 (2t-1)\,dt/(t^2-t+1) + \tfrac12\int_0^1 dt/(t^2-t+1)$. The first of these vanishes, since $\int_0^1(2t-1)\,dt/(t^2-t+1) = \bigl[\ln(t^2-t+1)\bigr]_0^1 = \ln 1 - \ln 1 = 0$; the second is $\tfrac12\int_0^1 dt/\bigl((t-\tfrac12)^2+\tfrac34\bigr) = \tfrac12\cdot\tfrac{2}{\sqrt3}\bigl[\arctan\tfrac{2t-1}{\sqrt3}\bigr]_0^1 = \tfrac1{\sqrt3}\cdot\tfrac{\pi}{3} = \tfrac{\pi}{3\sqrt3}$. Hence
   $$
   \sum_{n=0}^{\infty}\frac{(-1)^n}{3n+1} = \frac{\ln 2}{3} + \frac{\pi}{3\sqrt3} = 0.2310490602 + 0.6045997881 = 0.8356488483 .
   $$

5. *Check, and why Abel is needed.* The partial sums are $1$, $0.75$, $0.892857$, $0.792857$, $0.869780$, $0.807280$, $0.859912$, $0.814457$ — they straddle $0.8356488$ and converge slowly, as a conditionally convergent series must. Summing enough terms to confirm the four-figure value directly would take thousands of them; Abel's theorem replaces that with an integral evaluated in closed form. The theorem is also not a formality here: the boundary sum and the radial limit $g(1^-)$ are two different numbers until a theorem identifies them, and the implication runs only one way. The fifth bullet of the remark above gives the one-way example: $\sum_{n\ge0}(-1)^n x^n$ has the radial limit $\tfrac12$ at $x = 1$ while $\sum_{n \ge 0}(-1)^n$ diverges, so a radial limit can exist with no boundary sum to match it, and no converse of Abel's theorem could do the work done here.
:::

:::application{provenance=original}
**Series solutions of differential equations.** Substituting $y = \sum_{n\ge0} a_n x^n$ into a linear differential equation and differentiating term by term — legitimate inside the disc of convergence, by the statement above, and the reason the manipulation is allowed at all — converts the equation into a recursion for the coefficients. For Airy's equation $y'' = xy$, matching powers gives $(n+2)(n+3)a_{n+3} = a_n$, so $\lvert a_n\rvert$ falls off faster than any geometric sequence, $\limsup\lvert a_n\rvert^{1/n} = 0$, and the radius of convergence is infinite: the two Airy functions are represented by their Maclaurin series at every real and complex $x$. That is what makes the series usable on both sides of a linear turning point in the one-dimensional Schrödinger equation, where the classically allowed and forbidden regions must be joined. By contrast, for Legendre's equation the recursion gives $R = 1$, the distance from the origin to the equation's singular points $x = \pm 1$; the series then converges on $-1 < x < 1$ and nothing in this unit settles its behaviour at the poles of the sphere, which is precisely where the physical requirement of boundedness forces the series to terminate and quantises the degree.

**Reading a physical singularity off the coefficients.** A perturbation expansion in a coupling $g$ is a power series, and Hadamard's formula turns its high-order coefficients into the radius of convergence, which is the distance from $g = 0$ to the nearest singularity of the quantity being expanded. Computing $\lvert a_n\rvert^{1/n}$ for the available orders is the standard diagnostic: a limit of $0$ indicates an entire function of the coupling, a positive limit locates a critical coupling, and coefficients growing like $n!$ indicate a zero radius and an expansion that is asymptotic rather than convergent. In statistical mechanics the same reading applies to the grand partition function as a power series in the fugacity, whose radius of convergence marks the onset of condensation.

**Summing at the edge.** Abel's limit theorem is the licence to evaluate a generating function or lattice sum inside its disc, in closed form, and then let the variable approach a boundary point at which the series converges, as in the second example above. The Stolz-angle restriction matters in the complex case: approaching a boundary point along the circle itself, or tangentially to it, is not covered, which is why numerical analytic continuation to a boundary point is done along a radius or inside a sector.
:::
