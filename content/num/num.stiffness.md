---
id: num.stiffness
title: Stability and stiff equations
kind: theorem
level: core
summary: Feeds the test equation $y' = \lambda y$ through a numerical method to get its stability function $R$, defines the region of absolute stability as $|R| \le 1$ and A-stability as that region containing the whole left half-plane, proves that no explicit Runge-Kutta method is A-stable while backward Euler and the trapezoidal rule are, computes the real stability intervals $[-2,0]$ for Euler and Heun and $[-2.78529356,\,0]$ for classical Runge-Kutta, and shows on a system with eigenvalues $-1$ and $-1000$ that the explicit step is set by stability rather than accuracy.
prereqs: [num.ode-integrators, linalg.eigenvalues-eigenvectors, ode.linear-systems, linalg.matrix-exponential]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§27.6.1, pp. 1021-1022: the forward-difference solution of $dy/dx = -y$, $y(0)=1$ (27.61), the recurrence $y_{i+1} = (1-h)y_i$ (27.63), Table 27.10 showing the computed solution for $h$ between $0.01$ and $3$ against the exact $e^{-x}$, the observation that the recurrence has the form $y_{i+1} = \\lambda y_i$ so that $|\\lambda| < 1$ is necessary for non-divergence, giving $0 < h < 2$, the remark that for $h > 1$ the computed solution oscillates although the true one is monotonic and for $h > 2$ it diverges, the explicit warning that this condition in no way ensures accuracy, and the failure of the Milne central-difference scheme through contamination by the growing solution of $dy/dx = +y$; §27.6.3, p. 1025, step (iii): the corrected formula $y_{i+1} = y_i + h(f_i + f_{i+1})/2$, in which the averaged slope replaces the left-hand slope"
    pages: "1021-1022, 1025"
    role: the test problem and the condition $|\lambda| < 1$ on the one-step amplification factor, which is the case $R(z) = 1+z$ of the general definition below; the separation of stability from accuracy; the trapezoidal formula, used here as an implicit method in its own right
---

:::definition[The test equation, the stability function, and absolute stability]{provenance=adapted src="rhb-2006:§27.6.1, Eqs. (27.61)-(27.63), p. 1021"}
Riley, Hobson and Bence integrate $y' = -y$, $y(0) = 1$ by Euler's method and find the recurrence $y_{i+1} = (1-h)y_i$. They observe that it has the form $y_{i+1} = \lambda y_i$ and that $|\lambda| < 1$ is needed if the computed solution is not to diverge, which here means $0 < h < 2$; and they add that this condition does nothing to make the answer accurate. Everything in this unit is the systematic version of that observation.

Take the **test equation**
$$
y' = \lambda y , \qquad \lambda \in \mathbb{C} ,
$$
whose solution $y(t) = y(0)e^{\lambda t}$ decays exactly when $\operatorname{Re}\lambda < 0$. Apply a one-step method (:ref[]{to=num.ode-integrators}) to it with step $h$ and write
$$
z = h\lambda .
$$
For every method of this unit the step then reduces to multiplication by a number depending on $z$ alone,
$$
y_{n+1} = R(z)\,y_n , \qquad\text{so}\qquad y_n = R(z)^{n}y_0 .
$$
The function $R$ is the method's **stability function**, and $R(z)$ is its **amplification factor** at step $z$. The **region of absolute stability** is
$$
S \;=\; \bigl\{\,z \in \mathbb{C} \;:\; |R(z)| \le 1 \,\bigr\} ,
$$
the set of $z$ for which the computed solution of the test equation does not grow. The method is **A-stable** when
$$
\mathbb{C}^{-} = \{z : \operatorname{Re} z \le 0\} \subseteq S ,
$$
that is, when every step size reproduces the qualitative decay of every decaying test solution.

Consistency of order $p \ge 1$ forces $R(z) = e^{z} + O(z^{p+1})$ as $z \to 0$, since the exact one-step map of the test equation is multiplication by $e^{z}$; in particular $R(0) = 1$ and $R'(0) = 1$. So $S$ always touches the origin, and the question is how far into the left half-plane it reaches.
:::

:::definition[Stiffness]{provenance=original}
Let $y' = Ay + g(x)$ with $A$ an $m\times m$ matrix whose eigenvalues $\lambda_1,\dots,\lambda_m$ all have $\operatorname{Re}\lambda_i < 0$. Its **stiffness ratio** is
$$
\sigma \;=\; \frac{\max_i |\operatorname{Re}\lambda_i|}{\min_i |\operatorname{Re}\lambda_i|} \;\ge\; 1 .
$$
The problem is called **stiff** on an interval when $\sigma$ is large *and* the solution being computed is dominated there by the slow components — that is, when the fast modes have already decayed and are no longer part of the answer.

The operational definition, which is the one that matters, is comparative: a problem is stiff *for a given explicit method* when the step size permitted by stability is far smaller than the step size permitted by accuracy. Nothing about the exact solution is difficult in such a problem; what is difficult is that an explicit method keeps paying attention to modes that contribute nothing.

For a nonlinear system $y' = F(y)$ the same language is used with $A = \partial F/\partial y$ evaluated along the computed track, a **frozen Jacobian**. That is a heuristic, not a theorem: the statements below are about constant $A$, and the remark on hypotheses says what survives.
:::

:::definition[Three implicit methods]{provenance=adapted src="rhb-2006:§27.6.3, p. 1025, step (iii)"}
**Backward Euler** replaces the slope at the left end of the step by the slope at the right end:
$$
y_{n+1} = y_n + h\,f(x_{n+1}, y_{n+1}) .
$$
**The trapezoidal rule** averages the two:
$$
y_{n+1} = y_n + \tfrac{h}{2}\bigl(f(x_n,y_n) + f(x_{n+1},y_{n+1})\bigr) .
$$
Riley, Hobson and Bence write exactly this formula as the corrector of their predict-and-correct scheme, on the ground that the average better represents the slope across the step; used on its own, with $y_{n+1}$ solved for rather than guessed, it is a method in its own right. (Applied to a semi-discretised diffusion equation the same formula is the Crank-Nicolson scheme of :ref[]{to=num.von-neumann-stability}.)

**The implicit midpoint rule** evaluates at the midpoint of the step in both arguments:
$$
y_{n+1} = y_n + h\,f\Bigl(x_n + \tfrac{h}{2},\ \tfrac{1}{2}(y_n + y_{n+1})\Bigr) .
$$

In each case $y_{n+1}$ appears on both sides, so each step requires the solution of an $m$-dimensional system of equations. For a linear problem $f = Ay$ that is one linear solve; for a nonlinear one it is a Newton iteration (:ref[]{to=num.root-finding}) on
$$
G(w) = w - y_n - h\,\theta\,f(x_{n+1}, w) - (\text{explicit terms}) = 0 ,
$$
whose Jacobian is $I - h\theta\,\partial f/\partial y$ and whose cost per step is the price of A-stability.
:::

:::statement[Stability functions, stability regions, and A-stability]{provenance=original}
**1 (Diagonalisable linear systems reduce to the test equation).** Let $A$ be diagonalisable, $A = P\Lambda P^{-1}$ with $\Lambda = \operatorname{diag}(\lambda_1,\dots,\lambda_m)$, and apply to $y' = Ay$ a method whose test-equation step is multiplication by $R$. Then
$$
y_n = P\,\operatorname{diag}\bigl(R(h\lambda_1)^{n},\dots,R(h\lambda_m)^{n}\bigr)\,P^{-1}y_0 ,
$$
so $y_n \to 0$ for every $y_0$ if and only if $|R(h\lambda_i)| < 1$ for every $i$, and $\{y_n\}$ stays bounded for every $y_0$ if and only if $h\lambda_i \in S$ for every $i$.

**2 (The explicit methods).** For a method whose stages are substituted one into the next,

| method | $R(z)$ | $S \cap \mathbb{R}$ | $S \cap i\mathbb{R}$ |
|---|---|---|---|
| Euler | $1 + z$ | $[-2, 0]$ | $\{0\}$ |
| Heun, explicit midpoint | $1 + z + \tfrac{z^{2}}{2}$ | $[-2, 0]$ | $\{0\}$ |
| RK4 | $1 + z + \tfrac{z^{2}}{2} + \tfrac{z^{3}}{6} + \tfrac{z^{4}}{24}$ | $[z_{*}, 0]$ | $[-2\sqrt{2}\,i,\ 2\sqrt{2}\,i]$ |

where $z_{*}$ is the unique real root of $z^{3} + 4z^{2} + 12z + 24 = 0$,
$$
z_{*} = -2.785293563405281623529759\ldots
$$

**3 (No explicit Runge-Kutta method is A-stable).** If a one-step method is explicit with finitely many stages, each stage being an affine combination of $y_n$ and of earlier stages, then $R$ is a polynomial; if in addition the method is consistent, $R$ is non-constant, so $S$ is bounded and cannot contain $\mathbb{C}^{-}$.

**4 (Backward Euler).** $R(z) = (1-z)^{-1}$. The method has order $1$ with local truncation error $-\tfrac12 h^{2}y''(x) + O(h^{3})$. It is A-stable; moreover $S$ is the *exterior* of the disc of radius $1$ about $z = 1$, so $S$ contains far more than the left half-plane, and $|R(z)| \to 0$ as $\operatorname{Re}z \to -\infty$.

**5 (Trapezoidal rule).** $R(z) = (2+z)/(2-z)$. The method has order $2$ with local truncation error $-\tfrac{1}{12}h^{3}y'''(x) + O(h^{4})$. It is A-stable, with
$$
S = \mathbb{C}^{-} \quad\text{exactly},
$$
and $|R(z)| = 1$ for every $z$ on the imaginary axis. The implicit midpoint rule has the same stability function and the same order.
:::

:::idea{provenance=original}
Everything follows from one observation: on the test equation, a method built from additions, multiplications by $h\lambda$ and one division produces a *rational* function $R$ of $z = h\lambda$, and iterating the method just raises that number to a power. Boundedness of $R(z)^{n}$ over all $n$ is therefore a question about a single complex number, $|R(z)| \le 1$, and the whole subject is the geometry of the sublevel set $S$.

That geometry splits the methods in two. An explicit method never divides, so $R$ is a polynomial; polynomials blow up in every direction, so $S$ is a bounded blob and some step size is always too large, however stable the exact solution. An implicit method divides by something like $1 - z$, which is *large* exactly where the trouble was, and the same factor that costs a linear solve per step is the factor that makes $S$ unbounded. For backward Euler and the trapezoidal rule the A-stability test reduces to comparing $|1-z|$ with $1$, or $|2+z|$ with $|2-z|$, and both comparisons are settled by expanding the squares and cancelling: the imaginary parts drop out and only the sign of $\operatorname{Re}z$ remains.

The real stability intervals in part 2 come from the same squaring. For real $z$ the Euler and Heun amplification factors are real, so one only has to find where they cross $\pm1$; for RK4 the truncated exponential stays positive on the negative axis, so the binding condition is $R(z) = 1$, which factors as $z$ times a cubic. On the imaginary axis the cancellation is more delicate and is the reason RK4 can integrate an oscillation at all while Euler and Heun cannot.
:::

:::proof[Parts 1 and 2]{provenance=original}
**Part 1.** Substitute $y_n = Pw_n$. Every method here applies to $y' = Ay$ by replacing each evaluation $f(\cdot) = A(\cdot)$, so the step map is a matrix polynomial (or rational function) in $hA$; call it $R(hA)$, defined by the same formula as $R(z)$ with $hA$ in place of $z$ and $I$ in place of $1$. Since $A = P\Lambda P^{-1}$, every power of $hA$ is $P(h\Lambda)^{k}P^{-1}$, so $R(hA) = P\,R(h\Lambda)\,P^{-1}$ and $R(h\Lambda) = \operatorname{diag}(R(h\lambda_i))$ because $h\Lambda$ is diagonal. (For an implicit method the inverse $(I - hA)^{-1}$ exists as long as no $h\lambda_i$ equals $1$, and is likewise diagonalised by $P$.) Then $y_n = R(hA)^{n}y_0 = P\operatorname{diag}(R(h\lambda_i)^{n})P^{-1}y_0$. Since $P$ is invertible, $y_n \to 0$ for all $y_0$ exactly when every diagonal entry tends to $0$, which is $|R(h\lambda_i)| < 1$; boundedness for all $y_0$ is $|R(h\lambda_i)| \le 1$.

**Part 2, the stability functions.** On $y' = \lambda y$ each stage of a Runge-Kutta method is $\lambda$ times an affine combination of earlier quantities. For Euler, $y_{n+1} = y_n + h\lambda y_n = (1+z)y_n$. For Heun, $k_1 = \lambda y_n$ and $k_2 = \lambda(y_n + h\lambda y_n)$, so
$$
y_{n+1} = y_n + \tfrac{h}{2}\lambda\bigl(y_n + y_n + z y_n\bigr) = \Bigl(1 + z + \tfrac{z^{2}}{2}\Bigr)y_n ;
$$
the *explicit* midpoint method — $y_{n+1} = y_n + h f(x_n + \tfrac h2,\, y_n + \tfrac h2 f_n)$, not the implicit rule of the definitions above — gives $y_{n+1} = y_n + h\lambda(y_n + \tfrac{z}{2}y_n)$, the same function. For RK4, writing $k_j = \lambda c_j y_n$,
$$
c_1 = 1,\quad c_2 = 1 + \tfrac{z}{2},\quad c_3 = 1 + \tfrac{z}{2}c_2 = 1 + \tfrac{z}{2} + \tfrac{z^{2}}{4},\quad c_4 = 1 + z c_3 = 1 + z + \tfrac{z^{2}}{2} + \tfrac{z^{3}}{4} ,
$$
and
$$
R(z) = 1 + \tfrac{z}{6}\bigl(c_1 + 2c_2 + 2c_3 + c_4\bigr) = 1 + \tfrac{z}{6}\Bigl(6 + 3z + z^{2} + \tfrac{z^{3}}{4}\Bigr) = 1 + z + \tfrac{z^{2}}{2} + \tfrac{z^{3}}{6} + \tfrac{z^{4}}{24} ,
$$
the Taylor polynomial of $e^{z}$ of degree $4$ — as it must be, since the method has order $4$ and the test equation has $y^{(k)} = \lambda^{k}y$.

**Part 2, the real intervals.** For Euler, $|1+z| \le 1$ with $z$ real means $-2 \le z \le 0$. For Heun, $g(z) = 1 + z + z^{2}/2 = \tfrac12\bigl((1+z)^{2}+1\bigr) > 0$ for all real $z$, so $|g| \le 1$ reduces to $g(z) \le 1$, that is $z(1 + z/2) \le 0$, that is $-2 \le z \le 0$.

For RK4 put $g(z) = 1 + z + z^{2}/2 + z^{3}/6 + z^{4}/24$. In fact $g > 0$ on all of $\mathbb{R}$, so $|g| \le 1$ is the single inequality $g(z) \le 1$. To see the positivity, locate the minimum: $g'(z) = 1 + z + z^{2}/2 + z^{3}/6$ is a cubic whose derivative $g''(z) = 1 + z + z^{2}/2 = \tfrac12\bigl((1+z)^{2}+1\bigr)$ is everywhere positive, so $g'$ is strictly increasing and has one real root, $z = -1.5960716$. There $g = 0.2703948 > 0$, and since $g \to +\infty$ at both ends that value is the global minimum. (In the variable $t = -z$ the same polynomial $1 - t + t^{2}/2 - t^{3}/6 + t^{4}/24$ is the degree-$4$ Taylor polynomial of $e^{-t}$, truncated just before the negative term $-t^{5}/120$ that would eventually pull it down.) So the stability condition is
$$
z + \frac{z^{2}}{2} + \frac{z^{3}}{6} + \frac{z^{4}}{24} \le 0
\qquad\Longleftrightarrow\qquad
\frac{z}{24}\bigl(z^{3} + 4z^{2} + 12z + 24\bigr) \le 0 .
$$
The cubic $c(z) = z^{3}+4z^{2}+12z+24$ has $c'(z) = 3z^{2}+8z+12$ with discriminant $64 - 144 < 0$, so $c' > 0$ everywhere and $c$ is strictly increasing: it has exactly one real root $z_{*}$, and the two values $c(-3) = -27 + 36 - 36 + 24 = -3$ and $c(-2) = -8 + 16 - 24 + 24 = 8$ bracket it, $-3 < 0 < 8$, so $z_{*} \in (-3,-2)$. Solving numerically, $z_{*} = -2.785293563405281623529759$ (to the digits shown; substituting it back gives $|c(z_{*})| < 10^{-24}$). The product $z\,c(z)$ is $\le 0$ exactly on $[z_{*}, 0]$, which is the interval claimed.

**Part 2, the imaginary axes.** For Euler, $|1+iy|^{2} = 1 + y^{2} > 1$ unless $y = 0$. For Heun,
$$
|R(iy)|^{2} = \Bigl(1 - \tfrac{y^{2}}{2}\Bigr)^{2} + y^{2} = 1 - y^{2} + \tfrac{y^{4}}{4} + y^{2} = 1 + \tfrac{y^{4}}{4} > 1
$$
unless $y = 0$. For RK4, separating $R(iy)$ into real and imaginary parts,
$$
\operatorname{Re}R(iy) = 1 - \tfrac{y^{2}}{2} + \tfrac{y^{4}}{24}, \qquad \operatorname{Im}R(iy) = y - \tfrac{y^{3}}{6} ,
$$
and squaring and adding,
$$
|R(iy)|^{2} = 1 - \frac{y^{6}}{72} + \frac{y^{8}}{576} = 1 + \frac{y^{6}}{576}\bigl(y^{2} - 8\bigr) .
$$
This is $\le 1$ exactly when $y^{2} \le 8$, that is $|y| \le 2\sqrt{2} = 2.828427124746$. $\square$
:::

:::proof[Parts 3, 4 and 5]{provenance=original}
**Part 3.** Let the method have stages $Y_1,\dots,Y_s$, each an affine combination of $y_n$ and of $f$ evaluated at earlier stages, and let $y_{n+1}$ be an affine combination of the same quantities. On the test equation every evaluation of $f$ is $\lambda$ times a stage, so by induction each $Y_j$ is $p_j(z)y_n$ with $p_j$ a polynomial, and $y_{n+1} = R(z)y_n$ with $R$ a polynomial. Consistency gives $R(z) = 1 + z + O(z^{2})$, so $\deg R \ge 1$.

A non-constant polynomial satisfies $|R(z)| \to \infty$ as $|z| \to \infty$: writing $R(z) = a_dz^{d} + \cdots$ with $a_d \ne 0$ and $d \ge 1$, $|R(z)| \ge |a_d||z|^{d} - \sum_{k<d}|a_k||z|^{k} \to \infty$. Hence $S = \{|R| \le 1\}$ is bounded. The left half-plane is unbounded, so it is not contained in $S$, and the method is not A-stable. Concretely, along the negative real axis a method of this kind always has a finite stability limit, as the three computed intervals in part 2 show.

**Part 4.** On the test equation, backward Euler reads $y_{n+1} = y_n + zy_{n+1}$, so $(1-z)y_{n+1} = y_n$ and $R(z) = (1-z)^{-1}$, defined for $z \ne 1$. Now $|R(z)| \le 1$ is $|1 - z| \ge 1$, that is $|z - 1| \ge 1$: the complement of the open unit disc centred at $1$. If $\operatorname{Re}z = x \le 0$ then
$$
|z-1|^{2} = (x-1)^{2} + y^{2} = 1 - 2x + x^{2} + y^{2} \ge 1 ,
$$
because $-2x \ge 0$ and $x^{2}+y^{2}\ge 0$. So $\mathbb{C}^{-} \subseteq S$, and the containment is strict since, for instance, $z = 3$ lies in $S$. As $\operatorname{Re}z \to -\infty$, $|1-z| \to \infty$ and $|R(z)| \to 0$.

For the order, substitute the exact solution. Using $y'(x+h) = y' + hy'' + \tfrac12 h^{2}y''' + O(h^{3})$ with everything on the right at $x$,
$$
\tau = y(x+h) - y(x) - h y'(x+h) = \Bigl(hy' + \tfrac{h^{2}}{2}y'' + \tfrac{h^{3}}{6}y'''\Bigr) - \Bigl(hy' + h^{2}y'' + \tfrac{h^{3}}{2}y'''\Bigr) + O(h^{4}) = -\tfrac12 h^{2}y'' - \tfrac13 h^{3}y''' + O(h^{4}) ,
$$
so the order is $1$ with the stated leading term.

**Part 5.** On the test equation the trapezoidal rule reads $y_{n+1} = y_n + \tfrac{z}{2}(y_n + y_{n+1})$, so $\bigl(1 - \tfrac{z}{2}\bigr)y_{n+1} = \bigl(1 + \tfrac{z}{2}\bigr)y_n$ and
$$
R(z) = \frac{1 + z/2}{1 - z/2} = \frac{2+z}{2-z} .
$$
With $z = x+iy$,
$$
|2+z|^{2} - |2-z|^{2} = \bigl((2+x)^{2}+y^{2}\bigr) - \bigl((2-x)^{2}+y^{2}\bigr) = 8x .
$$
So $|R(z)| \le 1$ if and only if $x \le 0$: the region of absolute stability is exactly the closed left half-plane, and $|R| = 1$ precisely on the imaginary axis. The method is A-stable, and no more than A-stable.

For the order,
$$
\tau = y(x+h) - y(x) - \tfrac{h}{2}\bigl(y'(x) + y'(x+h)\bigr) .
$$
Expanding both sides to fourth order, $y(x+h)-y(x) = hy' + \tfrac{h^2}{2}y'' + \tfrac{h^3}{6}y''' + \tfrac{h^4}{24}y''''$, while $\tfrac{h}{2}(y' + y'(x+h)) = hy' + \tfrac{h^{2}}{2}y'' + \tfrac{h^{3}}{4}y''' + \tfrac{h^{4}}{12}y''''$, all derivatives at $x$. Subtracting, the first two terms cancel and
$$
\tau = \Bigl(\tfrac16 - \tfrac14\Bigr)h^{3}y''' + \Bigl(\tfrac{1}{24}-\tfrac{1}{12}\Bigr)h^{4}y'''' + O(h^{5}) = -\tfrac{1}{12}h^{3}y''' - \tfrac{1}{24}h^{4}y'''' + O(h^{5}) ,
$$
the order is $2$, and the constant is $-1/12$. The implicit midpoint rule gives $\bigl(1 - \tfrac z2\bigr)y_{n+1} = \bigl(1+\tfrac z2\bigr)y_n$ on the test equation as well, hence the same $R$; its order is also $2$. $\square$
:::

:::remark[Where the hypotheses are used, and what A-stability does not buy]{provenance=original}
**Diagonalisability, in part 1.** If $A$ is defective the diagonal form is replaced by a Jordan form (:ref[]{to=linalg.jordan-form}) and $R(hA)^{n}$ acquires polynomial-in-$n$ prefactors from the nilpotent part. The strict inequality $|R(h\lambda_i)| < 1$ still forces $y_n \to 0$, because $n^{k}\rho^{n}\to0$ for $\rho<1$; but the boundary case $|R| = 1$ no longer gives boundedness, so the closed region $S$ is the right object only in the diagonalisable case. The same caveat attaches to $P$: the bound on $\lVert y_n\rVert$ carries the condition number of $P$ (:ref[]{to=linalg.matrix-norms-conditioning}), so a stable-but-highly-non-normal $A$ can produce large transient growth even when every $|R(h\lambda_i)| < 1$.

**Constant coefficients.** Parts 1 to 5 are theorems about $y' = \lambda y$ and $y' = Ay$. Applying them to a nonlinear problem through the frozen Jacobian is an extrapolation that usually works and sometimes does not; it has no proof here and should be treated as a design rule, confirmed by the step-doubling error estimate of :ref[]{to=num.ode-integrators}, not as a guarantee.

**Being inside $S$ is not enough; one needs to be well inside.** This is the hypothesis most often mishandled, and it is visible in the example below. At $h\lambda = -2$ exactly, Euler has $|R| = 1$: the corresponding mode neither grows nor decays, so a fast transient that should have vanished within a thousandth of the interval instead survives to the end, alternating in sign. Riley, Hobson and Bence's $h > 1$ oscillation is the same effect one step earlier: $R(z) < 0$ for $z < -1$ means that every decaying mode is computed as an alternating sequence.

**A-stability says nothing about accuracy.** It is a statement about the sign of the computed decay, not its rate. Backward Euler is A-stable and first order; at $z = -50$ it returns $R = 0.0196$ where the exact factor is $e^{-50} = 2\times10^{-22}$, which is a wild overestimate that happens to be harmless because both are negligible.

**A-stability does not damp.** The trapezoidal rule has $|R| = 1$ on the imaginary axis and $R(z) \to -1$ as $\operatorname{Re}z \to -\infty$. So a stiff transient is not removed, it is turned into an alternating sequence that decays only as $|(2+z)/(2-z)|^{n}$, which is close to $1$ for very negative $z$. The example shows this costing more than half the answer. The property backward Euler has and the trapezoidal rule lacks — $|R(z)| \to 0$ as $\operatorname{Re}z \to -\infty$, so that infinitely stiff modes are annihilated in one step — is called **L-stability**, and it is why production stiff solvers are built from backward differentiation formulas and from implicit Runge-Kutta methods with this extra property rather than from the trapezoidal rule.

**The cost is not symmetric.** Part 3 forbids A-stability only for *explicit* methods. The price of the implicit alternative is one Newton solve per step, which for a system of dimension $m$ costs $O(m^{3})$ once per Jacobian factorisation and $O(m^{2})$ per iteration (:ref[]{to=num.linear-systems-numerics}). Stiffness is therefore worth exploiting only when $\sigma$ is large enough that the saved steps outnumber the added linear algebra; the crossover is problem-dependent and is why every serious library ships both kinds of solver.
:::

:::method[Diagnosing and treating stiffness]{provenance=original}
1. **Get the eigenvalues.** For $y' = Ay + g$ compute the spectrum of $A$; for a nonlinear system, the spectrum of $\partial F/\partial y$ at a few representative states along the track (:ref[]{to=num.eigenvalue-algorithms}). Keep the most negative real part $\mu_{\max}$ and the smallest $\mu_{\min}$.
2. **Form the two candidate step sizes.** The *stability* step is $h_{\mathrm{stab}} = |z_{\mathrm{edge}}|/\mu_{\max}$, where $z_{\mathrm{edge}}$ is the left endpoint of $S\cap\mathbb{R}$ for the method in hand ($2$ for Euler and Heun, $2.785$ for RK4). The *accuracy* step is the one the error estimator asks for, which is governed by the slowest active mode, so $h_{\mathrm{acc}} \sim \eta^{1/p}/\mu_{\min}$ for a tolerance $\eta$.
3. **Compare.** If $h_{\mathrm{acc}} \le h_{\mathrm{stab}}$, the problem is not stiff for this method: keep the explicit method. If $h_{\mathrm{acc}} \gg h_{\mathrm{stab}}$, it is stiff, and the ratio is roughly $\sigma$.
4. **Recognise it without eigenvalues.** A reliable symptom is an adaptive explicit solver whose step size settles at a value far below what the solution's smoothness suggests, with the error estimator reporting that the rejected steps failed spectacularly rather than marginally. A second symptom is a computed solution that oscillates from step to step about a smooth exact one.
5. **Switch to an implicit method**, and choose it by what the transient is doing. If fast modes are still active and must be resolved, accuracy decides and A-stability is not the issue. If they must merely be suppressed, pick a method with $|R| \to 0$ at $-\infty$: backward Euler if first order will do, a backward differentiation formula or an L-stable implicit Runge-Kutta method otherwise. Avoid the trapezoidal rule for a problem whose transient is not resolved.
6. **Solve the stage equations by Newton, not by iteration.** Fixed-point iteration on $w = y_n + hf(x_{n+1},w)$ contracts only when $h\,\mathrm{Lip}(f) < 1$, which is the very restriction being escaped; so form $I - h\,\partial f/\partial y$, factor it, and reuse the factorisation across steps until the Newton iteration starts needing more than two or three passes.
7. **Exploit structure.** If only part of the system is fast — a stiff linear term plus a mild nonlinearity — treat that part implicitly and the rest explicitly, or use the exact exponential of the linear part as in the exponential integrators of :ref[]{to=ode.nonhomogeneous-systems}.
:::

:::example[A system with eigenvalues $-1$ and $-1000$]{provenance=original}
Take
$$
A = \begin{pmatrix} -500.5 & 499.5 \\ 499.5 & -500.5\end{pmatrix} , \qquad y' = Ay , \qquad y(0) = \begin{pmatrix}2\\0\end{pmatrix} .
$$
Since $A(1,1)^{\mathsf T} = -(1,1)^{\mathsf T}$ and $A(1,-1)^{\mathsf T} = -1000\,(1,-1)^{\mathsf T}$, the eigenvalues are $-1$ and $-1000$ and the stiffness ratio is $\sigma = 1000$. The initial vector is $(1,1)^{\mathsf T} + (1,-1)^{\mathsf T}$, so
$$
y(t) = e^{-t}\begin{pmatrix}1\\1\end{pmatrix} + e^{-1000t}\begin{pmatrix}1\\-1\end{pmatrix} ,
$$
and by $t = 0.01$ the fast part is already $e^{-10} = 4.5\times10^{-5}$. We ask for $y_1(1)$, whose exact value is $e^{-1} + e^{-1000} = 0.367879441171$ to twelve figures. All runs below were done in $30$-digit arithmetic, so nothing shown is round-off.

**What accuracy alone would ask for.** Both forward and backward Euler are first order, and on the surviving mode $y' = -y$ a step $h = 0.02$ gives $(1-0.02)^{50} = 0.3641697$, a relative error of $1.008\%$; backward Euler at the same step gives a relative error of $0.992\%$. So $h_{\mathrm{acc}} \approx 0.02$ for a one-percent answer.

**What stability insists on.** Part 2 requires $h\lambda \in [-2,0]$ for both eigenvalues, and the binding one is $\lambda = -1000$: $h \le 0.002$. The accuracy step is ten times too large, and this is exactly the definition of stiffness.

| method | $h$ | steps | $h\lambda_{\mathrm{fast}}$ | $R$ at the fast mode | computed $y_1(1)$ | relative error |
|---|---|---|---|---|---|---|
| forward Euler | $0.0025$ | $400$ | $-2.5$ | $-1.5$ | $2.732144\times10^{70}$ | $7.4\times10^{70}$ |
| forward Euler | $0.002$ | $500$ | $-2$ | $-1$ | $1.367511255$ | $2.717$ |
| forward Euler | $0.00125$ | $800$ | $-1.25$ | $-0.25$ | $0.3676493967$ | $-6.253\times10^{-4}$ |
| backward Euler | $0.05$ | $20$ | $-50$ | $0.019608$ | $0.3768894829$ | $2.449\times10^{-2}$ |
| backward Euler | $0.02$ | $50$ | $-20$ | $0.047619$ | $0.3715278821$ | $9.917\times10^{-3}$ |
| trapezoidal | $0.05$ | $20$ | $-50$ | $-0.923077$ | $0.5695269199$ | $5.481\times10^{-1}$ |
| trapezoidal | $0.02$ | $50$ | $-20$ | $-0.818182$ | $0.3679110807$ | $8.601\times10^{-5}$ |
| trapezoidal | $0.01$ | $100$ | $-10$ | $-0.666667$ | $0.3678763755$ | $-8.333\times10^{-6}$ |

Four things in the table are worth reading carefully.

*Outside $S$, disaster is immediate.* At $h = 0.0025$ the fast amplification factor is $-1.5$, and $1.5^{400} = 2.732\times10^{70}$. The computed answer is that number; the physics has vanished entirely. The transition is not gradual: $h = 0.0025$ is only $25\%$ above the stability limit.

*On the boundary of $S$, the method is useless but quiet.* At $h = 0.002$ the fast factor is exactly $-1$, so the fast component is reproduced as $(-1)^{500} = 1$ for ever instead of decaying to $e^{-1000}$. The two contributions to $y_1(1)$ are $0.3675113$ from the slow mode, which is accurate, and $1$ from an undead transient; the answer is wrong by a factor of nearly four with nothing on the screen looking unstable.

*Inside $S$, with room to spare, the explicit method is correct and expensive.* At $h = 0.00125$ the fast factor is $-0.25$ and $0.25^{800}$ is below $10^{-481}$; the error $6.3\times10^{-4}$ is pure first-order truncation on the slow mode. It cost $800$ steps to get three figures that backward Euler obtained in $50$.

*A-stability is not L-stability.* The trapezoidal rule at $h = 0.05$ is inside its stability region — the region is the whole left half-plane — and still gets the answer wrong by $55\%$. Its fast amplification factor is $-0.923077$, so after $20$ steps the spurious transient still has amplitude $0.923077^{20} = 0.2017$, which is precisely the discrepancy: $0.3678028 + 0.2017241 = 0.5695269$. Halving the step to $0.02$ shrinks $0.818182^{50}$ to $4.4\times10^{-5}$ and the rule's second-order accuracy then shows: at that step its relative error is $8.601\times10^{-5}$ against backward Euler's $9.917\times10^{-3}$ at the *same* step, smaller by a factor of $115$. Backward Euler would have to run at $h = 0.04$ to be compared at half the cost, and there its relative error is $1.967\times10^{-2}$, worse by a factor of $229$. The trapezoidal rule is the better method here *once the transient is dead*, and the worse one while it is alive.

**Cross-check against the semi-discrete heat equation.** Replacing $\partial_x^{2}$ by the centred second difference on a grid of spacing $\Delta x$ turns $u_t = u_{xx}$ into $U' = BU$, and on the unit interval with Dirichlet ends and $\Delta x = 1/(N+1)$, $B$ has eigenvalues
$$
\lambda_j = -\frac{4}{(\Delta x)^{2}}\,\sin^{2}\Bigl(\frac{j\pi\,\Delta x}{2}\Bigr), \qquad j = 1,\dots,N ,
$$
which fill out $[-4/(\Delta x)^{2},\,0)$ as the grid is refined — note the $\pi$ in the wavenumber $j\pi$, without which the smallest eigenvalue comes out wrong. Euler's condition $h\lambda \ge -2$ is binding at $j = N$, where $|\lambda| \to 4/(\Delta x)^{2}$, and reads $\Delta t \le (\Delta x)^{2}/2$, which is exactly the limit :ref[]{to=num.von-neumann-stability} obtains by Fourier analysis of the full scheme. The two calculations are the same calculation. For the stiffness ratio, the slowest mode is $j = 1$, where $\sin(\pi\Delta x/2) \approx \pi\Delta x/2$ gives $|\lambda_1| \approx \pi^{2}$ — the decay rate of the first heat-equation mode, independent of the grid — so
$$
\sigma = \frac{|\lambda|_{\max}}{|\lambda|_{\min}} \approx \frac{4/(\Delta x)^{2}}{\pi^{2}} = \frac{4}{\pi^{2}(\Delta x)^{2}} = O\bigl((\Delta x)^{-2}\bigr) :
$$
refining the spatial grid makes a diffusion problem more stiff, without limit. (The quantity $4/(\Delta x)^{2}$ on its own is $|\lambda|_{\max}$, not the ratio.)
:::

:::application{provenance=original}
**Chemical kinetics is the original stiff problem.** A reaction network contains rate constants spanning many orders of magnitude — radical recombination on nanoseconds, bulk conversion on hours — and the quantity of interest is almost always the slow one. Atmospheric chemistry modules inside air-quality and climate models solve tens to hundreds of coupled species equations with $\sigma$ in the range $10^{8}$ to $10^{12}$; an explicit method would need a step of microseconds to simulate a day. Every such module is implicit, and most use backward differentiation formulas with a reused Jacobian factorisation, exactly as in step 6 of the method above.

**Circuit and control simulation.** A circuit with a parasitic capacitance has a time constant thousands of times shorter than the signal it carries; a servo with a fast inner loop and a slow outer one is stiff by design. SPICE-class simulators are built on the trapezoidal rule and on backward differentiation formulas for this reason, and the trapezoidal rule's lack of damping is a known failure mode there, where it appears as point-to-point ringing on a step response.

**Method of lines for parabolic equations.** As the cross-check above shows, a diffusion operator discretised in space is stiff, with the stiffness growing as $(\Delta x)^{-2}$. This is the single reason the implicit and semi-implicit schemes of :ref[]{to=num.von-neumann-stability} and :ref[]{to=num.finite-elements} exist, and why a spectral discretisation (:ref[]{to=num.spectral-methods}), whose second-derivative eigenvalues reach $-N^{2}/4$, is treated implicitly in its linear part as a matter of course.

**Singular perturbation problems.** An equation $\epsilon y'' + ay' + by = 0$ with $\epsilon$ small has one slow root and one of size $a/\epsilon$: the boundary-layer problems of :ref[]{to=asym.boundary-layers} are stiff problems seen analytically, and the asymptotic layer analysis is a good guide to where the implicit solver should be allowed to take long steps and where it should not.

**What stiffness is not.** A chaotic system is hard to integrate for a different reason — the Lipschitz constant in the global error bound of :ref[]{to=num.ode-integrators} is positive, so errors grow exponentially no matter how stable the method. An implicit method does not help with that; nothing does. Stiffness is a cheap problem with an expensive cure, and chaos is the opposite.
:::
