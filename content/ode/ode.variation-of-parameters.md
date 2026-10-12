---
id: ode.variation-of-parameters
title: Variation of parameters
kind: method
level: core
summary: 'Given a fundamental set of the homogeneous equation, replacing its constants by functions and imposing $n-1$ convenient constraints turns the inhomogeneous equation into a linear system whose determinant is the Wronskian; it yields a particular solution as an integral, for any continuous forcing and any order.'
prereqs: [ode.linear-ode-theory]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 2, §6 (variation of constants for $n=2$), Eqs. (6.1)-(6.3) and Thm 10, pp. 66-68; Ch. 3, §6, the system for $u_1',\\dots,u_n'$, Eq. (6.2) and Thm 11, pp. 122-123"
    pages: "66-68, 122-123"
    role: the closed kernel form of the second-order particular solution; the general-order formula with the modified determinants $W_k$; statement that every solution is this particular one plus the complementary function
  - work: arfken-2013
    loc: "§7.7, Eqs. (7.95)-(7.98) and the Wronskian argument that the constraint is admissible, pp. 375-376; Exercise 7.7.1, p. 377"
    pages: "375-377"
    role: the second-order derivation and the argument that imposing $y_1u_1' + y_2u_2' = 0$ costs nothing; the two-integral form of the particular solution
  - work: rhb-2006
    loc: "§15.2.4, Eqs. (15.53)-(15.55) and the derivation of the constraint system, pp. 508-510; §15.2.3 (the $y = uv$ substitution it generalises), p. 507"
    pages: "507-510"
    role: the general-order constraint system for an unnormalised leading coefficient, with $f/a_n$ in the last equation; the remark that keeping the constants of integration simply redefines the arbitrary constants of the complementary function
  - work: hirsch-smale-devaney-2013
    loc: "§6.5, Variation of Parameters theorem and proof, pp. 131-132"
    pages: "131-132"
    role: the same method for a first-order system $X' = AX + G(t)$, in the matrix-exponential form that becomes Duhamel's formula
---

:::note[The problem]{provenance=original}
Suppose we have solved the homogeneous equation and want a particular solution of the inhomogeneous one. The method of :ref[undetermined coefficients]{to=ode.constant-coefficients} works only for constant coefficients and for special forcings. Variation of parameters needs neither: it works for variable coefficients and for any continuous forcing, at the price of two integrals (for $n = 2$) that may or may not be elementary. It is the one general-purpose method, and it is the ancestor of the Green's function.
:::

:::definition[The set-up]{provenance=adapted src="coddington-1989:Ch. 3, §6, p. 122; rhb-2006:§15.2.4, Eq. (15.53), p. 508"}
Let $I$ be an interval, let $a_1, \dots, a_n$ and $b$ be continuous on $I$, let

$$
L(y) \;=\; y^{(n)} + a_1(x)y^{(n-1)} + \cdots + a_n(x)y ,
$$

and let $\varphi_1, \dots, \varphi_n$ be a fundamental set for $L(y) = 0$ on $I$, with Wronskian $W = W(\varphi_1, \dots, \varphi_n)$, which is nowhere zero on $I$ (:ref[]{to=ode.linear-ode-theory}). We look for a particular solution of $L(y) = b$ in the form

$$
y_p \;=\; u_1\varphi_1 + u_2\varphi_2 + \cdots + u_n\varphi_n ,
$$

where the constants of the complementary function have been replaced by unknown functions $u_1, \dots, u_n$ on $I$ — hence the names **variation of parameters** and **variation of constants**.

If the equation is presented unnormalised as $A_n(x)y^{(n)} + \cdots + A_0(x)y = f(x)$ with $A_n \ne 0$ on $I$, then $b = f/A_n$; this factor is easy to forget.
:::

:::statement[Second order]{provenance=adapted src="arfken-2013:§7.7, Eqs. (7.95)-(7.98), pp. 375-376 and Exercise 7.7.1, p. 377; coddington-1989:Ch. 2, §6, Eq. (6.3) and Thm 10, pp. 68"}
For $y'' + p(x)y' + q(x)y = b(x)$ with $p, q, b$ continuous on $I$ and $\{y_1, y_2\}$ a fundamental set of the homogeneous equation, put $W = y_1y_2' - y_1'y_2$. Then $u_1' = -y_2b/W$ and $u_2' = y_1b/W$, so for any $x_0 \in I$

$$
y_p(x) \;=\; -\,y_1(x)\int_{x_0}^{x}\frac{y_2(t)\,b(t)}{W(t)}\,dt \;+\; y_2(x)\int_{x_0}^{x}\frac{y_1(t)\,b(t)}{W(t)}\,dt
$$

is a solution of $y'' + py' + qy = b$ on $I$. Equivalently, with the two integrals combined under one integral sign,

$$
y_p(x) \;=\; \int_{x_0}^{x} K(x,t)\,b(t)\,dt , \qquad
K(x,t) \;=\; \frac{y_1(t)\,y_2(x) - y_1(x)\,y_2(t)}{W(t)} .
$$

This $y_p$ satisfies $y_p(x_0) = y_p'(x_0) = 0$. The general solution of the equation is $y_p + c_1y_1 + c_2y_2$.
:::

:::statement[General order]{provenance=adapted src="coddington-1989:Ch. 3, §6, Thm 11 and Eq. (6.2), pp. 122-123; rhb-2006:§15.2.4, Eq. (15.55), pp. 508-509"}
With the set-up above, the functions $u_1', \dots, u_n'$ are determined at each $x \in I$ by the $n$ linear equations

$$
\begin{aligned}
u_1'\varphi_1 + u_2'\varphi_2 + \cdots + u_n'\varphi_n &= 0, \\
u_1'\varphi_1' + u_2'\varphi_2' + \cdots + u_n'\varphi_n' &= 0, \\
&\ \ \vdots \\
u_1'\varphi_1^{(n-2)} + \cdots + u_n'\varphi_n^{(n-2)} &= 0, \\
u_1'\varphi_1^{(n-1)} + \cdots + u_n'\varphi_n^{(n-1)} &= b .
\end{aligned}
$$

The determinant of this system is $W \ne 0$, so it has a unique solution, and by Cramer's rule

$$
u_k'(x) \;=\; \frac{W_k(x)\,b(x)}{W(x)} ,
$$

and here $W_k$ denotes what $W$ becomes when its $k$-th column $\bigl(\varphi_k, \varphi_k', \dots, \varphi_k^{(n-1)}\bigr)$ is overwritten by $(0, 0, \dots, 0, 1)$. Hence, for any $x_0 \in I$,

$$
y_p(x) \;=\; \sum_{k=1}^{n}\varphi_k(x)\int_{x_0}^{x}\frac{W_k(t)\,b(t)}{W(t)}\,dt
$$

is a solution of $L(y) = b$ on $I$, and every solution of $L(y) = b$ is $y_p + c_1\varphi_1 + \cdots + c_n\varphi_n$ for constants $c_k$.
:::

:::idea{provenance=original}
We have $n$ unknown functions and only one equation to satisfy, so there is a large amount of freedom; the trick is to spend it on making the computation collapse. Differentiate $y_p = \sum_k u_k\varphi_k$ once: the answer is what a genuine solution would give, $\sum_k u_k\varphi_k'$, plus the unwanted $\sum_k u_k'\varphi_k$. Declare that unwanted sum to be zero. Differentiate again and do the same. After $n-1$ such declarations, $y_p$ and its first $n-1$ derivatives look exactly as if the $u_k$ were constants, so when we finally substitute into $L$, every term groups into $\sum_k u_k L(\varphi_k) = 0$ except the single leftover $\sum_k u_k'\varphi_k^{(n-1)}$, which must therefore equal $b$. The $n$ conditions are a linear system for $u_1', \dots, u_n'$ whose coefficient matrix is the Wronskian matrix — invertible precisely because the $\varphi_k$ are a fundamental set. So the freedom was spent legitimately: nothing was over-determined, and the remaining work is $n$ integrations.
:::

:::proof{provenance=adapted src="rhb-2006:§15.2.4, pp. 508-509; arfken-2013:§7.7, pp. 375-376"}
**Step 1 (the first $n-1$ constraints).** Let $u_1, \dots, u_n$ be any differentiable functions on $I$ and set $y_p = \sum_k u_k\varphi_k$. Differentiating,

$$
y_p' \;=\; \sum_k u_k\varphi_k' \;+\; \sum_k u_k'\varphi_k .
$$

*Impose* $\sum_k u_k'\varphi_k = 0$. Then $y_p' = \sum_k u_k\varphi_k'$, which has the same shape as $y_p$ with $\varphi_k$ replaced by $\varphi_k'$. Differentiating that and imposing $\sum_k u_k'\varphi_k' = 0$ gives $y_p'' = \sum_k u_k\varphi_k''$. Repeating, after imposing the $m$-th constraint $\sum_k u_k'\varphi_k^{(m-1)} = 0$ for $m = 1, \dots, n-1$ we have

$$
y_p^{(m)} \;=\; \sum_k u_k\varphi_k^{(m)} , \qquad m = 0, 1, \dots, n-1 .
$$

**Step 2 (the last derivative).** One more differentiation, with no constraint left to impose, gives

$$
y_p^{(n)} \;=\; \sum_k u_k\varphi_k^{(n)} \;+\; \sum_k u_k'\varphi_k^{(n-1)} .
$$

**Step 3 (substitute).** Insert these into $L(y_p) = y_p^{(n)} + a_1y_p^{(n-1)} + \cdots + a_ny_p$ and collect the terms containing $u_k$ rather than $u_k'$:

$$
L(y_p) \;=\; \sum_{k=1}^{n}u_k\Bigl[\varphi_k^{(n)} + a_1\varphi_k^{(n-1)} + \cdots + a_n\varphi_k\Bigr] \;+\; \sum_{k=1}^{n}u_k'\varphi_k^{(n-1)} .
$$

Every bracket is $L(\varphi_k) = 0$, because each $\varphi_k$ solves the homogeneous equation — this is where that hypothesis enters. Hence $L(y_p) = b$ if and only if

$$
\sum_{k=1}^{n}u_k'\varphi_k^{(n-1)} \;=\; b ,
$$

which is the last equation of the system. So the $n$ displayed equations are together equivalent to "$y_p$ solves $L(y) = b$ and the $n-1$ constraints hold".

**Step 4 (the system is solvable).** For each fixed $x$, the $n$ equations are linear in the numbers $u_1'(x), \dots, u_n'(x)$, with coefficient matrix the Wronskian matrix of $\varphi_1, \dots, \varphi_n$ at $x$. Since the $\varphi_k$ are a fundamental set, $W(x) \ne 0$ for every $x \in I$ (:ref[the Wronskian criterion]{to=ode.linear-ode-theory}), so by :ref[Cramer's rule]{to=linalg.determinants} there is exactly one solution, namely $u_k'(x) = W_k(x)b(x)/W(x)$ with $W_k$ as described: the right-hand side column is $(0, \dots, 0, b)$, and factoring $b$ out of the determinant in the numerator leaves $W_k$.

**Step 5 (integrate).** $W_k$ is continuous (a determinant of continuous functions), $W$ is continuous and nonvanishing, and $b$ is continuous, so $u_k' = W_kb/W$ is continuous on $I$ and $u_k(x) = \int_{x_0}^{x}W_kb/W\,dt$ is a well-defined antiderivative on $I$. With these $u_k$, Steps 1-3 run forwards and give $L(y_p) = b$. Adding any constants $c_k$ to the $u_k$ adds $\sum_k c_k\varphi_k$ to $y_p$, which is the complementary function; by :ref[the structure theorem]{to=ode.linear-ode-theory} these are all the solutions.

**Step 6 (the case $n = 2$).** Here the system is $u_1'y_1 + u_2'y_2 = 0$, $u_1'y_1' + u_2'y_2' = b$, and Cramer's rule gives

$$
u_1' = \frac{1}{W}\begin{vmatrix}0 & y_2\\ b & y_2'\end{vmatrix} = -\frac{y_2b}{W},
\qquad
u_2' = \frac{1}{W}\begin{vmatrix}y_1 & 0\\ y_1' & b\end{vmatrix} = \frac{y_1b}{W} .
$$

Integrating from $x_0$ and substituting into $y_p = u_1y_1 + u_2y_2$ gives both displayed forms of the second-order formula; the kernel form follows by putting the two integrals over a common integrand. Finally $y_p(x_0) = 0$ because both integrals vanish at $x_0$, and $y_p'(x_0) = u_1(x_0)y_1'(x_0) + u_2(x_0)y_2'(x_0) = 0$ by Step 1. $\square$
:::

:::remark[Where the hypotheses are used, and practical points]{provenance=original}
- **A full fundamental set is needed**, not just one solution: $W \ne 0$ in Step 4 is what makes the system solvable. If only one solution is known, use :ref[reduction of order]{to=ode.reduction-of-order} first, or the substitution $y = u(x)v(x)$ of :cite{work=rhb-2006 loc="§15.2.3, p. 507"}, which lowers the order by one without needing the rest of the set.
- **Normalise first.** The last equation of the system has $b$ on the right, where $b$ is the forcing *after* dividing by the coefficient of $y^{(n)}$. In :cite{work=rhb-2006 loc="Eq. (15.55), p. 509"} this appears as $f(x)/a_n(x)$.
- **Continuity of $b$** is used only in Step 5, to integrate. Piecewise-continuous forcing (a switched voltage, an impulse) is handled by applying the formula on each interval of continuity, or directly: the integral formula still makes sense and produces a solution with $n-1$ continuous derivatives.
- **The constants of integration are free.** Choosing them zero gives the $y_p$ above, which vanishes together with its first $n-1$ derivatives at $x_0$ — convenient for an initial-value problem at $x_0$. Keeping them simply redefines the arbitrary constants of the complementary function, as :cite{work=rhb-2006 loc="p. 510"} notes.
- **A particular solution may be simplified.** Any multiple of a $\varphi_k$ may be dropped from $y_p$, since it belongs to the complementary function. This is worth doing: the raw formula often produces terms that cancel or duplicate the homogeneous solutions.
- **The kernel is a Green's function.** For $n = 2$, $K(x,t)$ depends on the equation alone, not on $b$: once computed, it solves the equation for every forcing. Extended by $K = 0$ for $t > x$ it is the causal Green's function of :ref[]{to=green.causal-green-functions}, and the method is the one-dimensional ancestor of :ref[Duhamel's principle]{to=ode.nonhomogeneous-systems}.
:::

:::method[Variation of parameters]{provenance=adapted src="rhb-2006:§15.2.4, Solution method, p. 510; arfken-2013:§7.7, pp. 375-376"}
1. **Normalise**: divide by the coefficient of $y^{(n)}$ so that the equation reads $L(y) = b$ with leading coefficient $1$.
2. **Get a fundamental set** $\varphi_1, \dots, \varphi_n$ of $L(y) = 0$ and compute $W = W(\varphi_1, \dots, \varphi_n)$. Abel's formula is often the quickest route to $W$ (:ref[]{to=ode.linear-ode-theory}).
3. **Write the system**: all the derivative orders $0$ to $n-2$ give $\sum_k u_k'\varphi_k^{(m)} = 0$, and order $n-1$ gives $\sum_k u_k'\varphi_k^{(n-1)} = b$.
4. **Solve it** for $u_1', \dots, u_n'$. For $n = 2$ use $u_1' = -y_2b/W$, $u_2' = y_1b/W$ directly; for larger $n$ use $u_k' = W_kb/W$ or just eliminate by hand.
5. **Integrate** each $u_k'$, dropping the constants of integration.
6. **Assemble** $y_p = \sum_k u_k\varphi_k$, discard any part of it that is a multiple of some $\varphi_k$, add the complementary function, and impose the data.
:::

:::example[A second-order equation with variable coefficients]{provenance=original}
Solve

$$
x^{2}y'' - 2x\,y' + 2y \;=\; x^{3}\ln x \qquad \text{on } x > 0, \qquad y(1) = y'(1) = 0 .
$$

1. **Normalise.** Dividing by $x^{2}$: $y'' - \frac{2}{x}y' + \frac{2}{x^{2}}y = x\ln x$, so $b(x) = x\ln x$ — not $x^{3}\ln x$.
2. **Fundamental set.** The homogeneous equation is an Euler equation (:ref[]{to=ode.euler-equation}); trying $y = x^{s}$ gives $s(s-1) - 2s + 2 = (s-1)(s-2) = 0$, so $y_1 = x$ and $y_2 = x^{2}$. Their Wronskian is

   $$
   W = y_1y_2' - y_1'y_2 = x\cdot 2x - 1\cdot x^{2} = x^{2} ,
   $$

   nonzero for $x > 0$, so this is a fundamental set there. (Abel's formula agrees: $a_1 = -2/x$ gives $W \propto \exp\int(2/x)\,dx = x^{2}$.)
3. **Solve for $u_1', u_2'$.**

   $$
   u_1' = -\frac{y_2b}{W} = -\frac{x^{2}\cdot x\ln x}{x^{2}} = -x\ln x ,
   \qquad
   u_2' = \frac{y_1b}{W} = \frac{x\cdot x\ln x}{x^{2}} = \ln x .
   $$

4. **Integrate** (by parts, constants dropped):

   $$
   u_1 = -\int x\ln x\,dx = -\frac{x^{2}}{2}\ln x + \frac{x^{2}}{4} ,
   \qquad
   u_2 = \int \ln x\,dx = x\ln x - x .
   $$

5. **Assemble.**

   $$
   y_p = u_1y_1 + u_2y_2
   = \left(-\frac{x^{2}\ln x}{2} + \frac{x^{2}}{4}\right)x + \bigl(x\ln x - x\bigr)x^{2}
   = \frac{x^{3}\ln x}{2} - \frac{3x^{3}}{4} .
   $$

   Substituting back: $y_p' = \frac{3x^{2}\ln x}{2} + \frac{x^{2}}{2} - \frac{9x^{2}}{4}$ and $y_p'' = 3x\ln x + \frac{3x}{2} + x - \frac{9x}{2} = 3x\ln x - 2x$, and then $x^{2}y_p'' - 2xy_p' + 2y_p = x^{3}\ln x$ exactly.
6. **General solution and data.**

   $$
   y = c_1x + c_2x^{2} + \frac{x^{3}}{4}\bigl(2\ln x - 3\bigr) .
   $$

   At $x = 1$: $y_p(1) = -\tfrac34$ and $y_p'(1) = \tfrac12 - \tfrac94 = -\tfrac74$, so $c_1 + c_2 = \tfrac34$ and $c_1 + 2c_2 = \tfrac74$, giving $c_2 = 1$, $c_1 = -\tfrac14$:

   $$
   y(x) = -\frac{x}{4} + x^{2} + \frac{x^{3}}{4}\bigl(2\ln x - 3\bigr) .
   $$

7. **A number to check against.** $y(2) = -\tfrac12 + 4 + 2(2\ln 2 - 3) = 3.5 + 2(2\ln 2 - 3) = 0.272\,589$ to six decimal places.
:::

:::example[Third order, with the $W_k$ formula]{provenance=original}
Solve $y''' - y' = e^{2x}$ on $\mathbb{R}$.

1. **Fundamental set.** $p(\lambda) = \lambda^{3} - \lambda = \lambda(\lambda-1)(\lambda+1)$, so $\varphi_1 = 1$, $\varphi_2 = e^{x}$, $\varphi_3 = e^{-x}$ (:ref[]{to=ode.constant-coefficients}).
2. **Wronskian.**

   $$
   W = \begin{vmatrix} 1 & e^{x} & e^{-x} \\ 0 & e^{x} & -e^{-x} \\ 0 & e^{x} & e^{-x}\end{vmatrix}
   = 1\cdot\bigl(e^{x}e^{-x} + e^{-x}e^{x}\bigr) = 2 ,
   $$

   constant, as Abel's formula predicts since the coefficient of $y''$ is $0$.
3. **The modified determinants.** Replacing the $k$-th column by $(0,0,1)^{\mathsf T}$:

   $$
   W_1 = \begin{vmatrix} 0 & e^{x} & e^{-x} \\ 0 & e^{x} & -e^{-x} \\ 1 & e^{x} & e^{-x}\end{vmatrix} = -2 ,
   \qquad
   W_2 = \begin{vmatrix} 1 & 0 & e^{-x} \\ 0 & 0 & -e^{-x} \\ 0 & 1 & e^{-x}\end{vmatrix} = e^{-x} ,
   \qquad
   W_3 = \begin{vmatrix} 1 & e^{x} & 0 \\ 0 & e^{x} & 0 \\ 0 & e^{x} & 1\end{vmatrix} = e^{x} .
   $$

4. **Integrate $u_k' = W_kb/W$ with $b = e^{2x}$.**

   $$
   u_1' = -e^{2x} \Rightarrow u_1 = -\tfrac12e^{2x}, \qquad
   u_2' = \tfrac12e^{x} \Rightarrow u_2 = \tfrac12e^{x}, \qquad
   u_3' = \tfrac12e^{3x} \Rightarrow u_3 = \tfrac16e^{3x} .
   $$

5. **Assemble.**

   $$
   y_p = -\tfrac12e^{2x} + \tfrac12e^{x}\cdot e^{x} + \tfrac16e^{3x}\cdot e^{-x} = \tfrac16e^{2x} .
   $$

   The first two terms cancel, which is typical: the raw formula produces more structure than the answer has. Check: $y_p''' - y_p' = \tfrac{8}{6}e^{2x} - \tfrac{2}{6}e^{2x} = e^{2x}$.
6. **Cross-check with undetermined coefficients.** Since $p(2) = 8 - 2 = 6 \ne 0$, that method predicts $y_p = e^{2x}/p(2) = e^{2x}/6$ — the same answer, obtained in one line. Variation of parameters is the method to reach for when the forcing is *not* of that special form: replacing $e^{2x}$ by, say, $1/(1+x^{2})$ leaves steps 1-3 untouched and changes only the integrals.
:::

:::application{provenance=original}
**Impulse response and causality.** Read the kernel form backwards: $y_p(x) = \int_{x_0}^{x}K(x,t)b(t)\,dt$ says that the response at $x$ is a superposition of the responses to the forcing applied at each earlier instant $t$, with weight $K(x,t)$. For fixed $t$, the function $x \mapsto K(x,t)$ solves the homogeneous equation and satisfies $K(t,t) = 0$ and $\partial_xK(x,t)\big|_{x=t} = \bigl(y_1(t)y_2'(t) - y_1'(t)y_2(t)\bigr)/W(t) = 1$: it is the free motion started from rest with unit velocity at time $t$, that is, the response to a unit impulse delivered at $t$. In circuit and control engineering that function is the impulse response; its Fourier or Laplace transform is the transfer function. The construction here is where it comes from, and it shows that a linear system is characterised by a single two-variable kernel.

**Forced oscillators with awkward forcing.** For $\ddot x + \omega_0^{2}x = F(t)/m$ the fundamental set is $\cos\omega_0t$, $\sin\omega_0t$ with $W = \omega_0$, and the formula gives

$$
x_p(t) = \frac{1}{m\omega_0}\int_{0}^{t}\sin\bigl(\omega_0(t - s)\bigr)F(s)\,ds ,
$$

valid for any measured or switched force — a seismometer trace, a shock pulse — where no trial function would help. The same integral, with $\sin$ replaced by the appropriate decaying solution, gives the response of a damped oscillator and is the standard starting point for response spectra in earthquake engineering.

**Perturbation theory.** In first-order perturbation theory one knows two solutions of an unperturbed equation and treats the perturbation as forcing. For the radial Schrodinger equation $u'' + (k^{2} - V)u = 0$, writing the perturbing potential as the forcing $b = \delta V\,u$ and applying this formula produces the integral equation whose iteration is the Born series, and the first term is the Born approximation (:ref[]{to=green.born-approximation}). The appearance of $1/W$ there is the normalisation of the regular and irregular radial solutions.

**Systems and Duhamel.** The same calculation for a first-order system $X' = AX + G(t)$ reads $X(t) = e^{tA}\bigl(X_0 + \int_0^{t}e^{-sA}G(s)\,ds\bigr)$, as :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§6.5, pp. 131-132"} give it: the fundamental matrix $e^{tA}$ plays the role of the $\varphi_k$ and its inverse the role of $1/W$. That form generalises directly to :ref[Duhamel's principle]{to=ode.nonhomogeneous-systems} and to forced evolution equations in partial differential equations.
:::
