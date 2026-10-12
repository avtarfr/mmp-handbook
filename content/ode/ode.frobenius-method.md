---
id: ode.frobenius-method
title: The Frobenius method
kind: method
level: core
summary: 'At a regular singular point the substitution $y = x^{\sigma}\sum_n a_nx^n$ works: the lowest power gives a quadratic indicial equation for $\sigma$, the rest a recurrence, and the larger exponent always yields a solution -- while equal exponents, or exponents differing by an integer, can block the second one and force a logarithm.'
prereqs: [ode.ordinary-point-series, ode.euler-equation, ode.reduction-of-order]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§16.3, the Frobenius series Eq. (16.12), the substitution Eqs. (16.13)-(16.15), the indicial equation (16.16) and the three cases, pp. 538-543; §16.4.1 (Wronskian method for the second solution) and §16.4.2 (derivative method), pp. 544-547"
    pages: "538-547"
    role: the $s(x) = xp(x)$, $t(x) = x^2q(x)$ form of the substitution and the resulting indicial equation and recurrence; the practical statement of the three cases, including that the larger root always works and the smaller may or may not; the two routes to a second solution
  - work: hassani-2013
    loc: "§15.2, Def. 15.2.2 (regular singular point), the expansions and recursion Eqs. (15.7)-(15.9) and the indicial polynomial, pp. 464-465; Thm 15.2.3, p. 466; the obstruction $\\rho_n$, Eq. (15.10), p. 467; Lemma 15.2.5 and Thm 15.2.6 (the complete trichotomy with the logarithmic case), pp. 468-469; Example 15.2.4 (Bessel, Coulomb, hypergeometric), pp. 466-467"
    pages: "464-469"
    role: the definition of a regular singular point by the orders of the poles of $p$ and $q$; the recurrence in the form $I(n+\nu)C_n = \dots$; the exact statement of when two Frobenius solutions exist and the form of the basis when they do not; the exponents of the Bessel, Coulomb and hypergeometric equations
  - work: arfken-2013
    loc: "§7.5, the substitution with undetermined exponent, Eqs. (7.28)-(7.31), pp. 347-348; Fuchs' theorem and the summary of the three cases, p. 355"
    pages: "347-348, 355"
    role: the name indicial equation for the condition from the lowest power of $x$; Fuchs' theorem; the summary that equal roots give one solution, roots differing non-integrally give two, and roots differing by an integer give at least one
  - work: coddington-1989
    loc: "Ch. 4, §1 (the shape of solutions at a regular singular point and the failure of the method at an irregular one, Eqs. (1.4)-(1.6)), pp. 144-145; §2, the Euler equation as the model case, pp. 145-149; §3 (second-order equations with a regular singular point), p. 151"
    pages: "144-151"
    role: the statement that solutions near a regular singular point have the form $(x-x_0)^{r}\sigma(x) + (x-x_0)^{s}\rho(x)\log(x-x_0)$ with $\sigma,\rho$ analytic; the worked example of an irregular singular point whose formal series converges nowhere; the Euler equation as the leading-order model
---

:::definition[Regular singular points and Frobenius series]{provenance=adapted src="hassani-2013:§15.2, Def. 15.2.2 and the expansions on p. 465; rhb-2006:§16.3, Eq. (16.12) and the definitions of $s$ and $t$, p. 539"}
Consider

$$
y'' + p(x)\,y' + q(x)\,y = 0
$$

on a punctured interval around $x_0$. The point $x_0$ is a **regular singular point** if $p$ has at worst a simple pole and $q$ at worst a pole of order $2$ at $x_0$ — equivalently, if

$$
s(x) = (x - x_0)\,p(x) \qquad\text{and}\qquad t(x) = (x-x_0)^{2}\,q(x)
$$

are both analytic at $x_0$. Take $x_0 = 0$ from now on (translate otherwise) and write

$$
s(x) = \sum_{n\ge0}s_nx^{n} , \qquad t(x) = \sum_{n\ge0}t_nx^{n} ,
$$

both convergent for $|x| < r$. Multiplying the equation by $x^{2}$ puts it in the form

$$
x^{2}y'' + x\,s(x)\,y' + t(x)\,y = 0 ,
$$

which is an :ref[Euler equation]{to=ode.euler-equation} to leading order, with $s$ and $t$ frozen at their values at $0$.

A **Frobenius series**, or **generalised power series**, is an expression

$$
y = x^{\sigma}\sum_{n=0}^{\infty}a_nx^{n} , \qquad a_0 \neq 0 ,
$$

with $\sigma$ a real or complex number. The normalisation $a_0 \ne 0$ costs nothing: if $a_0$ were zero, $\sigma$ could be increased to make the leading coefficient nonzero.
:::

:::statement[Indicial equation and recurrence]{provenance=adapted src="rhb-2006:§16.3, Eqs. (16.15)-(16.16), pp. 539-540; hassani-2013:§15.2, Eqs. (15.7)-(15.9), p. 465"}
Substituting a Frobenius series into $x^{2}y'' + xsy' + ty = 0$ and dividing by $x^{\sigma}$ gives

$$
\sum_{n\ge0}\Bigl[(n+\sigma)(n+\sigma-1) + s(x)(n+\sigma) + t(x)\Bigr]a_nx^{n} \;=\; 0 .
$$

Define the **indicial polynomial**

$$
I(\sigma) \;=\; \sigma(\sigma-1) + s_0\,\sigma + t_0 ,
\qquad s_0 = s(0),\ t_0 = t(0) .
$$

Then:

1. The coefficient of $x^{0}$ gives, since $a_0 \ne 0$, the **indicial equation**

   $$
   I(\sigma) = \sigma(\sigma-1) + s_0\sigma + t_0 = 0 ,
   $$

   whose two roots $\sigma_1, \sigma_2$ are the **characteristic exponents** (or **indices**) of the regular singular point. They are the exponents of the Euler equation obtained by replacing $s, t$ by $s_0, t_0$.
2. The coefficient of $x^{n}$ for $n \ge 1$ gives the recurrence

   $$
   I(n+\sigma)\,a_n \;=\; -\sum_{k=0}^{n-1}\Bigl[(k+\sigma)\,s_{n-k} + t_{n-k}\Bigr]a_k .
   $$

   Since $I(\sigma) = (\sigma-\sigma_1)(\sigma-\sigma_2)$,

   $$
   I(n+\sigma_1) = n\,(n + \sigma_1 - \sigma_2) ,
   \qquad
   I(n+\sigma_2) = n\,(n - (\sigma_1-\sigma_2)) .
   $$
:::

:::statement[Which exponents give Frobenius solutions]{provenance=adapted src="hassani-2013:§15.2, Thm 15.2.3, p. 466, Eq. (15.10), p. 467 and Thm 15.2.6, pp. 468-469; rhb-2006:§16.3.1-16.3.3, pp. 540-543; arfken-2013:§7.5, Summary, p. 355"}
Label the exponents so that $\operatorname{Re}\sigma_1 \ge \operatorname{Re}\sigma_2$.

1. **The larger exponent always works.** The recurrence determines $a_1, a_2, \dots$ uniquely from $a_0$ for $\sigma = \sigma_1$, because $I(n+\sigma_1) = n(n+\sigma_1-\sigma_2) \ne 0$ for every $n \ge 1$. The resulting Frobenius series converges on $0 < |x| < r$.
2. **$\sigma_1 - \sigma_2$ not an integer.** Then $I(n+\sigma_2) \ne 0$ for all $n \ge 1$ as well, and there are two Frobenius solutions,

   $$
   y_1 = x^{\sigma_1}\sum_{n\ge0}a_nx^{n} , \qquad y_2 = x^{\sigma_2}\sum_{n\ge0}b_nx^{n} ,
   $$

   which are linearly independent because $y_2/y_1 = x^{\sigma_2-\sigma_1}(\cdots)$ is not constant. This case includes a complex-conjugate pair $\sigma_2 = \bar\sigma_1$ with $\operatorname{Im}\sigma_1 \ne 0$, since then $\sigma_1-\sigma_2 = 2i\operatorname{Im}\sigma_1$ is not a real integer.
3. **$\sigma_1 = \sigma_2$.** Only one Frobenius series exists, and the second solution necessarily contains a logarithm.
4. **$\sigma_1 - \sigma_2 = N$, a positive integer.** The recurrence for $\sigma_2$ runs without trouble up to $a_{N-1}$ and then meets $I(N+\sigma_2) = I(\sigma_1) = 0$, so it demands that the right-hand side at $n = N$ vanish. Call that right-hand side $\rho_N$ (it is determined by $s, t$ and $a_0$). If $\rho_N = 0$ the equation $0\cdot a_N = 0$ holds, $a_N$ may be chosen freely, and a second Frobenius series exists. If $\rho_N \ne 0$ there is no second Frobenius series, and :cite[Hassani]{work=hassani-2013 loc="Thm 15.2.6, p. 468"} gives the basis in the form

   $$
   y_1 = x^{\sigma_1}\Bigl(1 + \sum_{k\ge1}a_kx^{k}\Bigr) ,
   \qquad
   y_2 = x^{\sigma_2}\Bigl(1 + \sum_{k\ge1}b_kx^{k}\Bigr) + C\,y_1\log x ,
   $$

   with the power series convergent in a neighbourhood of $0$.

For complex exponents, "larger" means larger real part.
:::

:::idea{provenance=original}
The equation, written as $x^{2}y'' + x\,s(x)y' + t(x)y = 0$, is an Euler equation whose constants have been allowed to vary analytically. Near $x = 0$ only $s(0)$ and $t(0)$ matter, so the solutions must begin like the Euler solutions $x^{\sigma}$ with $\sigma$ a root of the Euler indicial polynomial — and the higher coefficients of $s$ and $t$ then correct the power into a series. That is the whole method: guess an Euler solution and let it drag a power series behind it.

What can go wrong is visible in the recurrence. Solving for $a_n$ means dividing by $I(n+\sigma)$, and $I$ vanishes only at $\sigma_1$ and $\sigma_2$. Starting from the larger exponent, $n+\sigma_1$ never returns to a root, so nothing obstructs. Starting from the smaller, $n + \sigma_2$ hits $\sigma_1$ exactly when $n$ equals the integer difference, and at that step the recurrence either is consistent by accident (and gives a second series) or is contradictory (and no second series exists). In the contradictory case the missing solution is supplied by :ref[reduction of order]{to=ode.reduction-of-order}, and the logarithm appears for a precise reason: the integrand $\varphi_1^{-2}e^{-\int p}$ behaves like $x^{-(\sigma_1-\sigma_2)-1}$, which integrates to a power unless the exponent is $-1$, that is unless $\sigma_1 = \sigma_2$; and in the integer case the $x^{-1}$ term of the expansion contributes a logarithm.
:::

:::proof[Indicial equation and recurrence]{provenance=adapted src="rhb-2006:§16.3, pp. 539-540; hassani-2013:§15.2, p. 465"}
**Step 1 (differentiate).** For $y = x^{\sigma}\sum_{n\ge0}a_nx^{n} = \sum_{n\ge0}a_nx^{n+\sigma}$, term-by-term differentiation on $x > 0$ gives

$$
y' = \sum_{n\ge0}(n+\sigma)a_nx^{n+\sigma-1} ,
\qquad
y'' = \sum_{n\ge0}(n+\sigma)(n+\sigma-1)a_nx^{n+\sigma-2} .
$$

**Step 2 (assemble).** Then $x^{2}y''$, $x\,s(x)y'$ and $t(x)y$ all carry the common factor $x^{\sigma}$:

$$
x^{2}y'' + xsy' + ty = x^{\sigma}\sum_{n\ge0}\Bigl[(n+\sigma)(n+\sigma-1) + s(x)(n+\sigma) + t(x)\Bigr]a_nx^{n} .
$$

Dividing by $x^{\sigma}$ (legitimate for $x \ne 0$) gives the displayed identity.

**Step 3 (lowest power).** Expanding $s$ and $t$ as power series and collecting the coefficient of $x^{0}$: only $n = 0$ contributes, with $s$ and $t$ at their constant terms, giving $\bigl[\sigma(\sigma-1) + s_0\sigma + t_0\bigr]a_0 = I(\sigma)\,a_0$. Since $a_0 \ne 0$ by the normalisation, $I(\sigma) = 0$.

**Step 4 (the general power).** The coefficient of $x^{n}$, $n \ge 1$, receives $(n+\sigma)(n+\sigma-1)a_n$ from the first term, $\sum_{k=0}^{n}(k+\sigma)s_{n-k}a_k$ from the second and $\sum_{k=0}^{n}t_{n-k}a_k$ from the third. The $k = n$ parts of the last two sums are $(n+\sigma)s_0a_n$ and $t_0a_n$, which combine with the first term into $I(n+\sigma)a_n$. Setting the whole coefficient to zero and moving the $k < n$ terms to the right gives the recurrence.

**Step 5 (the factorisation).** $I$ is monic of degree $2$ with roots $\sigma_1, \sigma_2$, so $I(\sigma) = (\sigma-\sigma_1)(\sigma-\sigma_2)$ and therefore $I(n+\sigma_1) = n(n+\sigma_1-\sigma_2)$, $I(n+\sigma_2) = (n+\sigma_2-\sigma_1)n$. $\square$
:::

:::proof[Which exponents work]{provenance=adapted src="hassani-2013:§15.2, pp. 466-469; rhb-2006:§16.3.1-16.3.3, pp. 540-543"}
**Step 1 (the larger exponent).** For $n \ge 1$, $I(n+\sigma_1) = n(n+\sigma_1-\sigma_2)$. Here $n \ne 0$ and $\operatorname{Re}(n+\sigma_1-\sigma_2) = n + \operatorname{Re}(\sigma_1-\sigma_2) \ge n \ge 1 > 0$, so $I(n+\sigma_1) \ne 0$. Hence the recurrence solves for $a_n$ at every step and the coefficients are uniquely determined by $a_0$. This proves part 1 up to convergence, for which see the note below.

**Step 2 (non-integer difference).** $I(n+\sigma_2) = n\bigl(n - (\sigma_1-\sigma_2)\bigr)$ vanishes for some $n \ge 1$ only if $\sigma_1 - \sigma_2 = n$ is a positive integer. If $\sigma_1-\sigma_2 \notin \mathbb{Z}$ this never happens, so the recurrence for $\sigma_2$ also runs freely. Independence: if $c_1y_1 + c_2y_2 = 0$ on an interval $(0,\epsilon)$ with $c_2 \ne 0$, dividing by $x^{\sigma_2}$ gives $c_2(a_0 + O(x)) = -c_1x^{\sigma_1-\sigma_2}(b_0 + O(x))$; letting $x \to 0^{+}$, the left side tends to $c_2a_0 \ne 0$ while the right side tends to $0$ if $\operatorname{Re}(\sigma_1-\sigma_2) > 0$, a contradiction. If $\operatorname{Re}(\sigma_1-\sigma_2) = 0$ with $\sigma_1 \neq \sigma_2$, the exponents are a conjugate pair and $x^{\sigma_1-\sigma_2} = e^{i\tau\log x}$ oscillates without limit, so no constants can make the identity hold. Hence $y_1, y_2$ are independent.

**Step 3 (equal exponents force a logarithm).** Let $\sigma_1 = \sigma_2 = \sigma$. The two roots of $I$ coincide, so $2\sigma = 1 - s_0$ by the sum of the roots. Let $y_1 = x^{\sigma}(a_0 + \cdots)$ be the Frobenius solution of Step 1 and apply :ref[reduction of order]{to=ode.reduction-of-order} on an interval where $y_1 \ne 0$: a second solution is $y_1\int \varphi$ with

$$
\varphi(x) = \frac{1}{y_1(x)^{2}}\exp\left[-\int p\right] .
$$

Now $p = s/x = s_0/x + (\text{analytic})$, so $\exp[-\int p] = x^{-s_0}h(x)$ with $h$ analytic and $h(0) \ne 0$; and $y_1^{-2} = x^{-2\sigma}g(x)$ with $g$ analytic, $g(0) = a_0^{-2} \ne 0$. Hence

$$
\varphi(x) = x^{-2\sigma-s_0}\,g(x)h(x) = x^{-1}\,gh ,
$$

using $2\sigma + s_0 = 1$. Since $g(0)h(0) \ne 0$, the Laurent expansion of $\varphi$ has a nonzero residue at $0$, so $\int\varphi = c\log x + (\text{analytic})$ with $c \ne 0$, and the second solution is $c\,y_1\log x + y_1\cdot(\text{analytic})$. No Frobenius series — a function of the form $x^{\mu}\times$ (convergent power series) — can contain a $\log$, so the second solution is not of that form, and only one Frobenius solution exists.

**Step 4 (integer difference).** Let $\sigma_1 - \sigma_2 = N \ge 1$. Running the recurrence at $\sigma = \sigma_2$, the factors $I(n+\sigma_2) = n(n-N)$ are nonzero for $1 \le n \le N-1$, so $a_1, \dots, a_{N-1}$ are determined by $a_0$. At $n = N$ the left-hand side is $I(\sigma_1)a_N = 0$ while the right-hand side is a definite number $\rho_N$ determined by $a_0, \dots, a_{N-1}$. If $\rho_N \ne 0$ the recurrence is inconsistent and no Frobenius series with exponent $\sigma_2$ exists; if $\rho_N = 0$ the step imposes no condition, $a_N$ is free, and the recurrence continues (the factors $I(n+\sigma_2)$ for $n > N$ are again nonzero), producing a second Frobenius series. The same reduction-of-order computation as in Step 3, now with $2\sigma_1 + s_0 = 1 + N$, gives $\varphi = x^{-1-N}gh$, whose Laurent expansion may or may not have a nonzero residue at $0$. When that residue is nonzero, integrating produces a logarithm and the second solution takes the shape :cite[Hassani]{work=hassani-2013 loc="Thm 15.2.6, p. 468"} gives, with $C$ the residue; when it vanishes, $\int\varphi$ is a Laurent polynomial plus a power series and the second solution is again a Frobenius series. $\square$
:::

:::note[Convergence, and what happens at an irregular point]{provenance=original}
That the Frobenius series actually converge — on $0 < |x| < r$, with $r$ the radius common to $s$ and $t$ — is a theorem we use without proof; :cite[Hassani]{work=hassani-2013 loc="p. 467"} refers to Birkhoff and Rota for it, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 539"} record the practical rule that the radius is in general the distance to the nearest singularity of the equation. :cite[Coddington]{work=coddington-1989 loc="Ch. 4, §1, p. 144"} states the shape of the answer in advance: near a regular singular point the solutions are

$$
(x-x_0)^{r}\sigma(x) + (x-x_0)^{s}\rho(x)\log(x-x_0)
$$

with $\sigma, \rho$ analytic at $x_0$ — which is the content of the trichotomy above.

The hypothesis of a *regular* singular point is not a technicality. :cite[Coddington]{work=coddington-1989 loc="Ch. 4, §1, Eqs. (1.4)-(1.6), pp. 144-145"} exhibits $x^{2}y'' - y' - \tfrac34y = 0$, where the coefficient $-1$ of $y'$ is not of the form $x\,b_1(x)$ with $b_1$ analytic at $0$, so the origin is a singular point that is not regular. A formal series $\sum_{k\ge0}c_kx^{k}$ satisfies the recursion $(k+1)c_{k+1} = \bigl(k^{2}-k-\tfrac34\bigr)c_k$, and since the ratio of consecutive terms is $\bigl|(k^{2}-k-\tfrac34)/(k+1)\bigr||x| \to \infty$ for every $x \ne 0$, the series converges nowhere but at the origin: a perfectly determinate formal solution that represents nothing. At an irregular singular point one needs asymptotic rather than convergent expansions (:ref[]{to=ode.singular-points-infinity}).
:::

:::method[The Frobenius method]{provenance=adapted src="rhb-2006:§16.3, pp. 538-543; arfken-2013:§7.5, pp. 347-348"}
1. **Classify the point.** Normalise to $y''+py'+qy=0$ and check that $s = xp$ and $t = x^{2}q$ are analytic at $0$ (translate first if the point of interest is not the origin). If they are not, stop: this method need not work.
2. **Multiply through** by $x^{2}$ (or by whatever polynomial clears the denominators) and substitute $y = \sum_{n\ge0}a_nx^{n+\sigma}$, keeping $\sigma$ symbolic. Do not divide by the leading coefficient if that creates infinite series where polynomials would do.
3. **Indicial equation.** Set the coefficient of the lowest power of $x$ to zero. With $a_0 \ne 0$ this is $I(\sigma) = \sigma(\sigma-1)+s_0\sigma+t_0 = 0$; solve for $\sigma_1, \sigma_2$ and compute $N = \sigma_1-\sigma_2$ (taking $\operatorname{Re}\sigma_1 \ge \operatorname{Re}\sigma_2$).
4. **Recurrence.** Set the coefficient of the general power to zero, keeping $\sigma$ symbolic. This single recurrence serves both exponents.
5. **First solution.** Put $\sigma = \sigma_1$ and generate $a_1, a_2, \dots$; this never fails.
6. **Second solution.**
   - If $N \notin \{0, 1, 2, \dots\}$: put $\sigma = \sigma_2$ and repeat.
   - If $N$ is a positive integer: put $\sigma = \sigma_2$ and run the recurrence; if it survives step $n = N$, you have a second Frobenius series, otherwise go to the next item.
   - If $N = 0$, or if the recurrence failed: get the second solution either by :ref[reduction of order]{to=ode.reduction-of-order} (:cite{work=rhb-2006 loc="§16.4.1, p. 544"} calls this the Wronskian method), or by substituting the ansatz $y_2 = y_1\log x + x^{\sigma_2}\sum_{n\ge1}b_nx^{n}$ and matching coefficients, or by the derivative method of :cite{work=rhb-2006 loc="§16.4.2, pp. 545-547"}: keep $\sigma$ as a parameter in the recurrence, so that $L[y(x,\sigma)] = a_0(\sigma-\sigma_1)(\sigma-\sigma_2)x^{\sigma}$, and take $\partial/\partial\sigma$ at $\sigma = \sigma_1$.
7. **Identify and check.** Try to recognise the series; verify the first few coefficients by substitution; and remember the radius is limited by the next singularity of the equation.
:::

:::example[Exponents differing by one half]{provenance=original}
Solve $2x\,y'' + y' + y = 0$ for $x > 0$.

1. **Classify.** Dividing by $2x$: $p = 1/(2x)$, $q = 1/(2x)$. Then $s = xp = \tfrac12$ and $t = x^{2}q = \tfrac{x}{2}$, both analytic everywhere, so $x = 0$ is a regular singular point and the series will converge for all $x$. Here

   $$
   s_0 = \tfrac12,\quad s_n = 0\ (n\ge1); \qquad t_0 = 0,\quad t_1 = \tfrac12,\quad t_n = 0\ (n\ge2) .
   $$

2. **Indicial equation.** $I(\sigma) = \sigma(\sigma-1) + \tfrac12\sigma = \sigma^{2} - \tfrac12\sigma = \sigma\bigl(\sigma - \tfrac12\bigr)$, so $\sigma_1 = \tfrac12$, $\sigma_2 = 0$. The difference $\tfrac12$ is not an integer, so two Frobenius solutions exist.
3. **Recurrence.** Only $s_1 = 0$ and $t_1 = \tfrac12$ are nonzero among the higher coefficients, so the sum on the right has one surviving term, $k = n-1$:

   $$
   I(n+\sigma)\,a_n = -\Bigl[(n-1+\sigma)s_1 + t_1\Bigr]a_{n-1} = -\tfrac12a_{n-1} .
   $$

4. **Larger exponent $\sigma_1 = \tfrac12$.** $I(n+\tfrac12) = (n+\tfrac12)n = n(2n+1)/2$, so $a_n = -a_{n-1}/\bigl(n(2n+1)\bigr)$. With $a_0 = 1$:

   $$
   a_1 = -\tfrac13, \quad a_2 = \tfrac{1}{30}, \quad a_3 = -\tfrac{1}{630},
   \qquad
   y_1 = \sqrt{x}\left(1 - \frac{x}{3} + \frac{x^{2}}{30} - \frac{x^{3}}{630} + \cdots\right) .
   $$

5. **Smaller exponent $\sigma_2 = 0$.** $I(n) = n(2n-1)/2$, so $b_n = -b_{n-1}/\bigl(n(2n-1)\bigr)$. With $b_0 = 1$:

   $$
   b_1 = -1,\quad b_2 = \tfrac16,\quad b_3 = -\tfrac{1}{90},
   \qquad
   y_2 = 1 - x + \frac{x^{2}}{6} - \frac{x^{3}}{90} + \cdots .
   $$

6. **Closed forms.** Put $u = \sqrt{2x}$. Then $\cos u = 1 - \tfrac{u^{2}}{2} + \tfrac{u^{4}}{24} - \tfrac{u^{6}}{720} = 1 - x + \tfrac{x^{2}}{6} - \tfrac{x^{3}}{90}$, matching $y_2$; and $\tfrac{1}{\sqrt2}\sin u = \sqrt{x}\bigl(1 - \tfrac{x}{3} + \tfrac{x^{2}}{30} - \cdots\bigr)$, matching $y_1$. So

   $$
   y_2 = \cos\sqrt{2x} , \qquad y_1 = \tfrac{1}{\sqrt2}\sin\sqrt{2x} ,
   $$

   and both satisfy $2xy''+y'+y=0$ by direct substitution. The general solution on $x > 0$ is $y = c_1\cos\sqrt{2x} + c_2\sin\sqrt{2x}$.
7. **Numbers.** At $x = \tfrac12$: $y_2 = \cos 1 = 0.540\,302$ and $y_1 = \sin 1/\sqrt2 = 0.595\,010$. The four-term partial sums give $1 - 0.5 + 0.041\,667 - 0.001\,389 = 0.540\,278$ and $0.707\,107\,(1 - 0.166\,667 + 0.008\,333 - 0.000\,198) = 0.595\,008$.
8. **A warning the exponents give for free.** Both solutions are bounded at $x = 0$ here, because both exponents are $\ge 0$. Negative exponents are the usual case and signal a solution that blows up at the singular point; the indicial equation tells you that before any series is computed.
:::

:::example[A double exponent and the logarithm]{provenance=original}
Solve $x\,y'' + y' - y = 0$ for $x > 0$.

1. **Classify.** $p = 1/x$, $q = -1/x$, so $s = 1$ and $t = -x$: a regular singular point at $0$, with $s_0 = 1$, $t_0 = 0$, $t_1 = -1$ and all other coefficients zero.
2. **Indicial equation.** $I(\sigma) = \sigma(\sigma-1) + \sigma = \sigma^{2}$: a double root $\sigma_1 = \sigma_2 = 0$. By part 3 of the statement, there is exactly one Frobenius solution and the second involves a logarithm.
3. **First solution.** The recurrence is $I(n)a_n = -t_1a_{n-1}$, that is $n^{2}a_n = a_{n-1}$, so $a_n = a_{n-1}/n^{2}$ and, with $a_0 = 1$,

   $$
   a_n = \frac{1}{(n!)^{2}} ,
   \qquad
   y_1(x) = \sum_{n=0}^{\infty}\frac{x^{n}}{(n!)^{2}} = 1 + x + \frac{x^{2}}{4} + \frac{x^{3}}{36} + \cdots ,
   $$

   convergent for all $x$ (the ratio of consecutive terms is $x/n^{2} \to 0$). This is $I_0(2\sqrt x)$, the modified Bessel function of order zero.
4. **Second solution: set up the ansatz.** Try $y_2 = y_1\log x + v$ with $v = \sum_{n\ge1}b_nx^{n}$. Writing $L(y) = xy''+y'-y$ and using $L(y_1) = 0$,

   $$
   L(y_1\log x) = \log x\,L(y_1) + 2y_1' + \frac{y_1}{x} - \frac{y_1}{x} = 2y_1' ,
   $$

   because $(y_1\log x)' = y_1'\log x + y_1/x$ and $(y_1\log x)'' = y_1''\log x + 2y_1'/x - y_1/x^{2}$. So we need $L(v) = -2y_1'$.
5. **Match coefficients.** With $b_0 = 0$,

   $$
   L(v) = \sum_{n\ge1}n^{2}b_nx^{n-1} - \sum_{n\ge1}b_nx^{n}
   = \sum_{m\ge0}\Bigl[(m+1)^{2}b_{m+1} - b_m\Bigr]x^{m} ,
   \qquad
   -2y_1' = -\sum_{m\ge0}2(m+1)a_{m+1}x^{m} ,
   $$

   so $(m+1)^{2}b_{m+1} = b_m - 2(m+1)a_{m+1}$. Hence

   $$
   b_1 = -2 , \qquad
   b_2 = \frac{b_1 - 4a_2}{4} = \frac{-2-1}{4} = -\frac34 , \qquad
   b_3 = \frac{b_2 - 6a_3}{9} = \frac{-\tfrac34 - \tfrac16}{9} = -\frac{11}{108} ,
   $$

   and then $b_4 = -\tfrac{25}{3456}$. So

   $$
   y_2(x) = \left(\sum_{n\ge0}\frac{x^{n}}{(n!)^{2}}\right)\log x \;-\; 2x - \frac34x^{2} - \frac{11}{108}x^{3} - \frac{25}{3456}x^{4} - \cdots .
   $$

6. **Checks.** Substituting the truncation of $y_2$ through $x^{7}$ into $xy''+y'-y$ leaves a residue of order $x^{7}$ only, as it must. At $x = 1$ the first solution is $y_1(1) = \sum_n 1/(n!)^{2} = 2.279\,585\,3$, which is $I_0(2)$ to eight digits. As $x \to 0^{+}$, $y_1 \to 1$ while $y_2 \to -\infty$ like $\log x$: the second solution is the one a boundedness condition at the singular point discards.
7. **Why the logarithm had to appear.** Step 3 of the proof, applied here: $s_0 = 1$ and $\sigma = 0$, so $2\sigma + s_0 = 1$ and the reduction-of-order integrand is $y_1^{-2}e^{-\int dx/x} = 1/(x\,y_1^{2})$, whose residue at $0$ is $1/y_1(0)^{2} = 1$. Integrating gives $\log x$, with coefficient $1$ — matching the ansatz of step 4, where $y_1\log x$ enters with coefficient $1$.
:::

:::application{provenance=original}
**Bessel's equation and half-integer order.** For $w'' + w'/z + (1 - \alpha^{2}/z^{2})w = 0$ one has $s_0 = 1$, $t_0 = -\alpha^{2}$, so $I(\nu) = \nu^{2}-\alpha^{2}$ and the exponents are $\pm\alpha$. :cite[Hassani]{work=hassani-2013 loc="Example 15.2.4(a), p. 466"} notes the consequence: there are two Frobenius solutions unless $2\alpha$ is an integer, that is unless $\alpha$ is an integer or a half-integer. For integer $\alpha = n$ the obstruction is genuine and $Y_n$ carries a $\log$; for half-integer $\alpha$ the obstruction vanishes and both series survive — which is why the spherical Bessel functions of half-integer order are elementary, $j_0(z) = \sin z/z$ and so on, while $Y_0$ is not.

**The Coulomb problem and the two radial behaviours.** The radial equation for a $\beta/r$ potential has, in :cite[Hassani's]{work=hassani-2013 loc="Example 15.2.4(b), p. 466"} normalisation, exponents $-\tfrac12 \pm \tfrac12\sqrt{1+4\alpha}$ with $\alpha = \ell(\ell+1)$, hence $\ell$ and $-\ell-1$, differing by the integer $2\ell+1$ — so only one solution is obtained by series, and the other is the irregular one that diverges at the origin. The indicial equation is thus the formal reason that a bound-state wavefunction behaves like $r^{\ell}$ near the nucleus: the other exponent is excluded by normalisability. The exponents of this radial equation are those of the Euler equation of :ref[]{to=ode.euler-equation}, as they must be.

**The hypergeometric equation, and why so many functions are one function.** The equation with regular singular points at $0$, $1$ and $\infty$ and no others is, up to a change of variable, the hypergeometric equation, whose exponents at $0$ are $0$ and $1-\gamma$ (:cite{work=hassani-2013 loc="Example 15.2.4(c), p. 467"}). Legendre's, Chebyshev's and Jacobi's equations, and in the confluent limit Bessel's, Laguerre's and Hermite's, are all special cases, which is why the handbook tables of special functions are so interrelated: the classification of equations by their singular points and exponents, continued in :ref[]{to=ode.singular-points-infinity}, explains the coincidences.

**Boundary conditions at a singular point.** In practice the exponents are often all one needs. A solution of the radial equation behaving like $r^{-\ell-1}$ is rejected at the origin; a solution of Legendre's equation behaving like $\log(1-x)$ is rejected at the pole of a sphere; a solution of the Euler-Bernoulli or diffusion equation growing at a corner is rejected on physical grounds. In each case the indicial equation at a regular singular point delivers the admissible exponents in two lines, long before any series is summed, and that is the usual way the method is used.
:::
