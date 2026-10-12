---
id: ode.ordinary-point-series
title: Power-series solutions at ordinary points
kind: method
level: core
summary: 'At a point where the normalised coefficients are analytic, every solution is analytic: substituting a power series turns the equation into a recurrence for the coefficients, the first $n$ of which are the initial data, and the series converges at least as far as the coefficient series do.'
prereqs: [ode.linear-ode-theory, complex.taylor-series]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 3, §7, the definition of analytic at $x_0$ and the worked example $y'' - xy = 0$, pp. 126-129; Thm 12 (existence theorem for analytic coefficients), p. 129"
    pages: "126-129"
    role: the $n$-th order statement -- a power-series solution convergent on the same interval as the coefficient series, with the first $n$ coefficients given by the initial data and the rest computed recursively; the remark that every solution is then analytic
  - work: hassani-2013
    loc: "§14.6.1, the general recurrence Eq. (14.28), Thm 14.6.2 (formal existence), Example 14.6.3 (a divergent formal series for a non-normal equation) and Thm 14.6.4 (radius of convergence), pp. 439-441; Example 14.6.5 (Legendre's equation), pp. 441-442"
    pages: "439-442"
    role: the explicit recurrence for the second-order case in terms of the coefficient series of $p$ and $q$; the separation of formal solvability from convergence, with a counterexample for a non-normal equation; the statement that the radius is at least the smaller of the radii of the coefficient series
  - work: rhb-2006
    loc: "§16.1.1 (ordinary and singular points), pp. 533-534; §16.2, Eqs. (16.9)-(16.11) and the worked example $y''+y=0$, pp. 535-537"
    pages: "533-537"
    role: the definition of an ordinary point; the index-shifting bookkeeping for substituting a series; the statement that the radius of convergence equals the distance from the expansion point to the nearest singular point of the equation; the two-term recurrence in a worked case
  - work: arfken-2013
    loc: "§7.5, the series substitution with undetermined exponent, Eqs. (7.28)-(7.31), pp. 347-348; Fuchs' theorem and the summary of cases, p. 355; Exercise 7.5.2, p. 356"
    pages: "347-348, 355-356"
    role: Fuchs' theorem (a series solution exists about an ordinary point or at worst a regular singular point); the observation that at an ordinary point the indicial roots are $s = 0$ and $s = 1$, so that the two solutions are a plain power series and $x$ times one
---

:::definition[Ordinary and singular points]{provenance=adapted src="rhb-2006:§16.1.1, p. 533; coddington-1989:Ch. 3, §7, p. 126; arfken-2013:§7.4, p. 344"}
A function $g$ defined near $x_0$ is **analytic at $x_0$** if it can be written as a power series

$$
g(x) = \sum_{k=0}^{\infty} g_k\,(x - x_0)^{k}
$$

convergent on $|x - x_0| < r_0$ for some $r_0 > 0$. Such a $g$ has derivatives of every order there, computed by differentiating term by term, and the differentiated series have the same radius (:ref[]{to=complex.taylor-series}).

Write the equation in normalised form,

$$
y^{(n)} + a_1(x)\,y^{(n-1)} + \cdots + a_n(x)\,y = 0 ,
$$

and for $n = 2$,

$$
y'' + p(x)\,y' + q(x)\,y = 0 .
$$

The point $x_0$ is an **ordinary point** of the equation if every coefficient $a_1, \dots, a_n$ (for $n = 2$: both $p$ and $q$) is analytic at $x_0$, and a **singular point** otherwise. A point where the original, unnormalised leading coefficient vanishes is a singular point unless the division cancels it.

By translating, $x_0 = 0$ throughout what follows; for a general $x_0$ substitute $X = x - x_0$.
:::

:::statement[Analytic solutions at an ordinary point]{provenance=adapted src="coddington-1989:Ch. 3, §7, Thm 12, p. 129; hassani-2013:§14.6.1, Thms 14.6.2 and 14.6.4, pp. 440-441"}
Suppose $a_1, \dots, a_n$ have power-series expansions in powers of $x - x_0$ convergent on $|x - x_0| < r_0$ with $r_0 > 0$, and let $\alpha_1, \dots, \alpha_n$ be any constants. Then the initial-value problem

$$
L(y) = 0 , \qquad y(x_0) = \alpha_1, \ \dots, \ y^{(n-1)}(x_0) = \alpha_n
$$

has a solution given by a power series

$$
\varphi(x) = \sum_{k=0}^{\infty} c_k\,(x-x_0)^{k}
$$

convergent on $|x - x_0| < r_0$. Its first $n$ coefficients are the data,

$$
k!\,c_k = \alpha_{k+1} , \qquad k = 0, 1, \dots, n-1 ,
$$

and $c_k$ for $k \ge n$ is computed in terms of $c_0, \dots, c_{k-1}$ by substituting the series into $L(y) = 0$. Since the initial-value problem has only one solution (:ref[]{to=ode.linear-ode-theory}), **every** solution of $L(y) = 0$ on $|x-x_0| < r_0$ is given by such a convergent series: at an ordinary point all solutions are analytic.

For $n = 2$, with $p = \sum_m a_mx^{m}$ and $q = \sum_m b_mx^{m}$ about $x_0 = 0$, substituting $y = \sum_k c_kx^{k}$ gives, for every $n \ge 0$, the recurrence

$$
(n+2)(n+1)\,c_{n+2} \;=\; -\sum_{m=0}^{n}\Bigl[(n-m+1)\,a_m\,c_{n-m+1} \;+\; b_m\,c_{n-m}\Bigr] ,
$$

which determines $c_2, c_3, \dots$ uniquely from $c_0$ and $c_1$, and the resulting series has radius of convergence at least the smaller of the radii of the series for $p$ and $q$.
:::

:::note[Fuchs' theorem and the two exponents]{provenance=adapted src="arfken-2013:§7.5, Fuchs' theorem and Summary, p. 355; arfken-2013:§7.5, Exercise 7.5.2, p. 356"}
:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 355"} record the scope of the method as **Fuchs' theorem**: at least one power-series solution is always available, so long as the expansion point is either ordinary or a regular singular point, the worst case the theorem allows. About an irregular singular point the method may fail outright.

The more general substitution $y = x^{s}\sum_{j\ge0}a_jx^{j}$ with $a_0 \ne 0$ and $s$ undetermined — the Frobenius substitution of :ref[]{to=ode.frobenius-method} — needs no modification at an ordinary point: there the indicial equation has roots $s = 0$ and $s = 1$ (:cite{work=arfken-2013 loc="Exercise 7.5.2, p. 356"}), so one solution is a plain power series and the other is $x$ times a power series, which is again a plain power series. Nothing is gained by carrying $s$, and the plain substitution $y = \sum_k c_kx^{k}$ suffices. This is the practical difference between this unit and the next.
:::

:::idea{provenance=original}
The substitution is bookkeeping, and the only real question is whether the bookkeeping converges. Substituting $y = \sum c_kx^{k}$ into the equation produces, at order $x^{n}$, one term containing $c_{n+2}$ with coefficient $(n+2)(n+1)$ — which is never zero — and finitely many terms containing lower coefficients. So every coefficient after the first two is forced, and the equation becomes an explicit recurrence: the differential equation has been traded for an algebraic one. The two free constants $c_0, c_1$ are exactly $y(0)$ and $y'(0)$, which is why a second-order equation has a two-dimensional solution space, visible here as the two free coefficients.

Convergence is the part that needs an estimate. The recurrence expresses $c_{n+2}$ as a sum of up to $n$ terms, so a naive bound on $|c_{n+2}|$ grows; but the divisor $(n+2)(n+1)$ grows too, and the coefficients $a_m, b_m$ decay geometrically because $p$ and $q$ have positive radii. Comparing the recurrence with a geometric majorant turns this into an elementary induction, and gives convergence in some disc. That the disc may be taken as large as the coefficients' own disc is a sharper fact, proved in the sources by a complex-analytic argument.
:::

:::proof[The recurrence, and convergence in some disc]{provenance=adapted src="hassani-2013:§14.6.1, Eq. (14.28) and Thm 14.6.2, pp. 439-440; rhb-2006:§16.2, Eqs. (16.9)-(16.11), p. 536"}
Take $n = 2$ and $x_0 = 0$; the general order is identical with longer sums.

**Step 1 (differentiate the series).** If $y = \sum_{k\ge0}c_kx^{k}$ converges on $|x| < R$, term-by-term differentiation (:ref[]{to=complex.taylor-series}) gives, after shifting the summation index so that each series is written as a coefficient of $x^{n}$,

$$
y' = \sum_{n\ge0}(n+1)c_{n+1}x^{n} , \qquad
y'' = \sum_{n\ge0}(n+2)(n+1)c_{n+2}x^{n} .
$$

**Step 2 (multiply the series).** On the common disc of convergence, products of power series may be multiplied term by term:

$$
p\,y' = \sum_{n\ge0}\Bigl[\sum_{m=0}^{n}a_m(n-m+1)c_{n-m+1}\Bigr]x^{n} ,
\qquad
q\,y = \sum_{n\ge0}\Bigl[\sum_{m=0}^{n}b_mc_{n-m}\Bigr]x^{n} .
$$

**Step 3 (a power series vanishes only if all its coefficients do).** Adding the three series, $y''+py'+qy = 0$ holds on a neighbourhood of $0$ if and only if every coefficient of $x^{n}$ vanishes, which is the displayed recurrence. The coefficient of $c_{n+2}$ is $(n+2)(n+1) \ne 0$, so the recurrence determines $c_{n+2}$ from $c_0, \dots, c_{n+1}$, and $c_0 = y(0)$, $c_1 = y'(0)$ are free. This proves the formal part: there is exactly one formal power series with given $c_0, c_1$ satisfying the equation.

**Step 4 (geometric bounds on the coefficients of $p$ and $q$).** Let $p$ and $q$ converge on $|x| < r$, and fix $0 < \rho < r$. Then $\sum_m|a_m|\rho^{m}$ and $\sum_m|b_m|\rho^{m}$ converge, so their terms are bounded: there is $M \ge 1$ with

$$
|a_m| \le M\rho^{-m} , \qquad |b_m| \le M\rho^{-m} \qquad\text{for all } m \ge 0 .
$$

**Step 5 (rescale).** Put $d_k = \rho^{k}|c_k|$. Taking absolute values in the recurrence and inserting the bounds of Step 4,

$$
(n+2)(n+1)\,\rho^{-(n+2)}d_{n+2} \;\le\; M\sum_{m=0}^{n}\Bigl[(n-m+1)\rho^{-(n+1)}d_{n-m+1} + \rho^{-n}d_{n-m}\Bigr] ,
$$

because $\rho^{-m}|c_{n-m+1}| = \rho^{-(n+1)}d_{n-m+1}$ and $\rho^{-m}|c_{n-m}| = \rho^{-n}d_{n-m}$. Multiplying by $\rho^{n+2}$ and renaming the summation index ($j = n-m+1$, then $j = n-m$),

$$
(n+2)(n+1)\,d_{n+2} \;\le\; M\Bigl[\rho\sum_{j=1}^{n+1}j\,d_j \;+\; \rho^{2}\sum_{j=0}^{n}d_j\Bigr]
\;\le\; B\sum_{j=0}^{n+1}(j+1)\,d_j , \qquad B = M\rho(1+\rho) .
$$

**Step 6 (induct on partial sums).** Set $e_j = (j+1)d_j$ and $S_n = \sum_{j=0}^{n}e_j$. Since $(n+3) \le \tfrac32(n+2)(n+1)$ for every $n \ge 0$,

$$
e_{n+2} = (n+3)d_{n+2} \le \frac{n+3}{(n+2)(n+1)}\,B\,S_{n+1} \le \tfrac32B\,S_{n+1} ,
$$

so $S_{n+2} = S_{n+1} + e_{n+2} \le \lambda S_{n+1}$ with $\lambda = 1 + \tfrac32B \ge 1$. By induction $S_n \le S_1\lambda^{\,n-1}$ for $n \ge 1$, and hence

$$
d_n \le e_n \le S_n \le S_1\lambda^{\,n-1} ,
\qquad\text{so}\qquad
|c_n| = \rho^{-n}d_n \le \frac{S_1}{\lambda}\left(\frac{\lambda}{\rho}\right)^{n} .
$$

**Step 7 (conclude).** Therefore $\limsup_n|c_n|^{1/n} \le \lambda/\rho$, so the formal series converges on $|x| < \rho/\lambda$, a disc of positive radius. On that disc all the manipulations of Steps 1-3 are valid, so the sum is a genuine solution, with $y(0) = c_0$ and $y'(0) = c_1$. $\square$
:::

:::note[The sharp radius]{provenance=original}
Step 7 gives convergence on a possibly small disc, which is all that is needed to know that the formal series *is* a solution. The sharp statement — that the radius is at least $r$ itself, the radius of the coefficient series — is the content of :cite[Coddington's Theorem 12]{work=coddington-1989 loc="Ch. 3, Thm 12, p. 129"} and :cite[Hassani's Theorem 14.6.4]{work=hassani-2013 loc="Thm 14.6.4, p. 441"}, and we use it without proof: Coddington devotes his Chapter 3, §9 to it, and Hassani refers the reader to Birkhoff and Rota. Both proofs work in the complex domain, where the natural statement is that a linear equation with coefficients holomorphic on a disc has solutions holomorphic on that whole disc.
:::

:::remark[Where the hypotheses are used, and a disagreement between sources]{provenance=original}
- **Normalisation matters.** The theorem is about the equation after division by the leading coefficient. :cite[Hassani]{work=hassani-2013 loc="Example 14.6.3, pp. 440-441"} gives $x^{2}y' - y + x = 0$, whose formal power series is $\sum_{n\ge1}(n-1)!\,x^{n}$ — a perfectly determinate formal solution that converges for no $x \ne 0$. The leading coefficient vanishes at $0$, so $0$ is not an ordinary point and the theorem does not apply. Formal solvability and convergence are different questions, and Step 3 only settles the first.
- **$(n+2)(n+1) \ne 0$ is what makes the recurrence work.** At a singular point the coefficient multiplying the highest unknown can vanish, the recurrence stalls, and one must carry an undetermined exponent instead (:ref[]{to=ode.frobenius-method}).
- **Radii: what the books say.** :cite[Hassani]{work=hassani-2013 loc="Thm 14.6.4, p. 441"} and :cite[Coddington]{work=coddington-1989 loc="Thm 12, p. 129"} state a *lower bound*: the radius is at least that of the coefficient series. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§16.2, p. 536"} state instead that the radius *equals* the distance from the expansion point to the nearest singular point of the equation, adding that at that radius the series may or may not converge. We follow the lower-bound version, because particular solutions can do better: Legendre's equation has singular points at $x = \pm1$, yet for integer $\ell$ one of its two solutions is a polynomial, whose series converges everywhere. The example below shows the same phenomenon in a two-line computation. The sharp distance-to-the-singularity statement is correct as a statement about the generic solution, and it is the right rule of thumb in practice.
- **Why complex singularities matter for a real problem.** The radius is limited by the nearest singularity *in the complex plane*, even when the equation, the interval and the solution are entirely real. In the example below, the series stops converging at $|x| = 1$ because the coefficients are singular at $x = \pm i$, which no amount of looking at the real axis would reveal. This is the practical reason the theory of series solutions is complex-analytic.
:::

:::method[Series solution at an ordinary point]{provenance=adapted src="rhb-2006:§16.2, pp. 535-537; arfken-2013:§7.5, pp. 347-348"}
1. **Check that $x_0$ is ordinary**: normalise and confirm that the coefficients are analytic at $x_0$. Translate so that $x_0 = 0$.
2. **Find the radius you are entitled to**: locate the equation's singular points in the complex plane and measure how far the closest of them lies from $0$. This tells you in advance where the answer can be used.
3. **Substitute** $y = \sum_{k\ge0}c_kx^{k}$, differentiating term by term, and *do not divide by the leading coefficient first* if that introduces denominators: multiply the equation through by the polynomial leading coefficient instead, which keeps the recurrence finite.
4. **Shift indices** so that every series is a sum over the coefficient of $x^{n}$, then set each coefficient to zero. The result is a recurrence for $c_{n+2}$ (or $c_{n+k}$) in terms of earlier coefficients.
5. **Generate two solutions**: take $c_0 = 1$, $c_1 = 0$ for one and $c_0 = 0$, $c_1 = 1$ for the other. These are automatically independent, since their Wronskian at $0$ is $\det\begin{pmatrix}1&0\\0&1\end{pmatrix} = 1$.
6. **Identify or estimate.** Look for a closed form; look for termination (a recurrence factor that vanishes gives a polynomial solution); and check the radius by the ratio test on the recurrence.
:::

:::example[A two-term recurrence with one terminating solution]{provenance=original}
Solve

$$
(1 + x^{2})\,y'' + 2x\,y' - 2y = 0
$$

by series about $x = 0$.

1. **$x = 0$ is ordinary.** Normalised, $p(x) = 2x/(1+x^{2})$ and $q(x) = -2/(1+x^{2})$, both analytic at $0$ with radius exactly $1$, since $1 + x^{2}$ vanishes at $x = \pm i$. So the theorem guarantees solutions analytic on $|x| < 1$, and the nearest singular points are the complex pair $\pm i$ at distance $1$.
2. **Substitute, without dividing.** With $y = \sum_{n\ge0}c_nx^{n}$,

   $$
   y'' = \sum_{n\ge0}(n+2)(n+1)c_{n+2}x^{n},
   \quad
   x^{2}y'' = \sum_{n\ge0}n(n-1)c_nx^{n},
   \quad
   2xy' = \sum_{n\ge0}2n\,c_nx^{n} .
   $$

   The coefficient of $x^{n}$ in the equation is therefore

   $$
   (n+2)(n+1)c_{n+2} + \bigl[n(n-1) + 2n - 2\bigr]c_n = 0 .
   $$

3. **Simplify the recurrence.** Since $n(n-1)+2n-2 = n^{2}+n-2 = (n+2)(n-1)$, the factor $n+2$ cancels:

   $$
   c_{n+2} \;=\; -\,\frac{n-1}{n+1}\,c_n , \qquad n \ge 0 .
   $$

   Odd and even coefficients do not mix.
4. **The odd solution terminates.** Putting $n = 1$ gives $c_3 = 0$, and then $c_5 = c_7 = \cdots = 0$. With $c_0 = 0$, $c_1 = 1$ the series is the single term

   $$
   y_1(x) = x ,
   $$

   which indeed solves the equation: $0 + 2x - 2x = 0$. Its "series" converges for every $x$.
5. **The even solution.** With $c_0 = 1$, $c_1 = 0$: $n = 0$ gives $c_2 = 1$; $n = 2$ gives $c_4 = -\tfrac13$; $n = 4$ gives $c_6 = -\tfrac35 c_4 = \tfrac15$; $n = 6$ gives $c_8 = -\tfrac57c_6 = -\tfrac17$. By induction $c_{2k} = (-1)^{k+1}/(2k-1)$ for $k \ge 1$, since

   $$
   c_{2k+2} = -\frac{2k-1}{2k+1}c_{2k} = -\frac{2k-1}{2k+1}\cdot\frac{(-1)^{k+1}}{2k-1} = \frac{(-1)^{k+2}}{2k+1} .
   $$

   Hence

   $$
   y_2(x) = 1 + x^{2} - \frac{x^{4}}{3} + \frac{x^{6}}{5} - \frac{x^{8}}{7} + \cdots
   = 1 + \sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{2k-1}\,x^{2k} .
   $$

6. **Closed form and radius.** Since $\arctan x = \sum_{k\ge1}(-1)^{k-1}x^{2k-1}/(2k-1)$ for $|x|<1$,

   $$
   y_2(x) = 1 + x\arctan x .
   $$

   Direct substitution confirms it: $y_2' = \arctan x + x/(1+x^{2})$, $y_2'' = 1/(1+x^{2}) + (1-x^{2})/(1+x^{2})^{2}$, and

   $$
   (1+x^{2})y_2'' + 2xy_2' - 2y_2 = 1 + \frac{1-x^{2}}{1+x^{2}} + 2x\arctan x + \frac{2x^{2}}{1+x^{2}} - 2 - 2x\arctan x = 0 .
   $$

   The ratio test on $|c_{2k+2}/c_{2k}| = (2k-1)/(2k+1) \to 1$ gives radius exactly $1$ for $y_2$ — the distance to $\pm i$, as predicted — while $y_1 = x$ has infinite radius. One solution attains the predicted radius and the other beats it, which is why the theorem is stated as a lower bound.
7. **A definite solution and a number.** $y(0) = 1$, $y'(0) = 0$ selects $y = y_2$. At $x = \tfrac12$:

   $$
   y\bigl(\tfrac12\bigr) = 1 + \tfrac12\arctan\tfrac12 = 1.231\,823\,8 ,
   $$

   while the partial sum through $x^{8}$ is $1 + 0.25 - 0.020833 + 0.003125 - 0.000558 = 1.231\,734$, already right to four decimals. The Wronskian check: from $y_1(0)=0$, $y_1'(0)=1$, $y_2(0)=1$, $y_2'(0)=0$ we get $W(y_1,y_2)(0) = y_1(0)y_2'(0) - y_1'(0)y_2(0) = -1 \ne 0$, so $\{x,\,1+x\arctan x\}$ is a fundamental set on $(-1,1)$.
:::

:::application{provenance=original}
**Where the special functions come from.** Legendre's, Hermite's and Chebyshev's equations all have $x = 0$ as an ordinary point, and this method is how their solutions are constructed. The recurrences they produce share the feature seen in step 4 above: for special values of a parameter a factor vanishes and the series terminates, giving a polynomial. For Hermite's equation $y'' - 2xy' + 2\nu y = 0$ the recurrence is $c_{n+2} = 2(n-\nu)c_n/\bigl((n+2)(n+1)\bigr)$, which terminates exactly when $\nu$ is a non-negative integer. In the quantum harmonic oscillator that condition is the quantisation of the energy: the non-terminating series grows like $e^{x^{2}/2}$ and is not normalisable, so only the terminating ones are physical, and $\nu = n$ gives $E = (n+\tfrac12)\hbar\omega$. The same mechanism quantises angular momentum through Legendre's equation.

**Airy functions and turning points.** The Airy equation $y'' = xy$ has no singular point in the finite plane, so its series solutions about $0$ converge for all $x$; they are the standard way to compute $\mathrm{Ai}$ and $\mathrm{Bi}$ for moderate argument, and they describe the behaviour of a wavefunction at a classical turning point, where the WKB approximation fails.

**Numerical work and Taylor methods.** The recurrence is a recipe for generating Taylor coefficients of the solution to any order at the cost of a few operations each, which is the basis of Taylor-series and automatic-differentiation integrators for ordinary differential equations. Their step size is limited by exactly the radius this unit estimates, which is why such integrators are efficient for problems with distant singularities and poor near them.

**Knowing in advance where a model can be trusted.** Step 2 of the method is the practically valuable one. A model whose coefficients are singular at a nearby complex point has a series solution that is useless beyond that distance, no matter how many terms are computed, and the breakdown has nothing to do with the physical interval. Legendre's functions of the second kind diverge at $x = \pm1$, that is at the poles of a sphere, and the series expansions of multipole fields converge only inside a sphere reaching the nearest source — a statement about radii of convergence of exactly this kind.
:::
