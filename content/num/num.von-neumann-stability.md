---
id: num.von-neumann-stability
title: Stability, the CFL condition and von Neumann analysis
kind: theorem
level: core
summary: Feeds a single discrete Fourier mode through a constant-coefficient difference scheme to read off its amplification factor, proves that this gives the limits $\Delta t \le (\Delta x)^2/2$ for the explicit heat scheme and $c\,\Delta t \le \Delta x$ for the explicit wave scheme, derives the Courant-Friedrichs-Lewy condition from the domains of dependence, and records the Lax equivalence theorem that converts stability plus consistency into convergence.
prereqs: [num.finite-differences, fourier.dft-fft]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§8.2, pp. 203-209: the mesh ratio $s = \\Delta t/(\\Delta x)^2$ and the explicit scheme (2); the separation of variables $u_j^n = X_j T_n$ leading to a constant $\\xi$ and $T_n = \\xi^n T_0$, Eqs. (4)-(6), p. 205; the amplification factor $\\xi(k) = 1 - 2s[1-\\cos(k\\Delta x)]$, Eq. (9), p. 206, and the conclusion $s \\le 1/2$, Eq. (10); the shortcut of substituting $X_j = (e^{ik\\Delta x})^j$ directly, Eq. (13), p. 207; the von Neumann stability condition $|\\xi(k)| \\le 1 + O(\\Delta t)$, Eq. (12), p. 207, attributed there to Richtmyer and Morton, and the remark that the extra slack matters when the exact solution grows; the $\\theta$ scheme (15), p. 208, its amplification factor, and the unconditional stability (16) for $1/2 \\le \\theta \\le 1$ with the Crank-Nicolson case $\\theta = 1/2$, p. 209; §8.3, pp. 211-214: the explicit wave scheme (1)-(2), the substitution $u_j^n = \\eta^j \\xi^n$ with $\\eta = e^{ik\\Delta x}$ and the quadratic (7)-(8), p. 213, the case analysis on $p$ giving the condition $s = c^2(\\Delta t)^2/(\\Delta x)^2 \\le 1$, Eq. (9), p. 214, and the reading of that condition as requiring the numerical propagation speed $\\Delta x/\\Delta t$ to be at least $c$, with the domains of dependence of Figure 4, p. 214"
    pages: "203-209, 211-214"
    role: the whole method of substituting a separated discrete mode and reading off an amplification factor; the von Neumann condition in the form used here; the amplification factors and stability limits for the explicit heat scheme, the $\theta$ scheme and the explicit wave scheme; the domain-of-dependence reading of the wave-equation limit
---

:::definition[Discrete modes and the amplification factor]{provenance=adapted src="strauss-2008:§8.2, Eqs. (4)-(6) and (13), pp. 205-207; strauss-2008:§8.3, p. 213"}
Work on the whole line, or on a periodic grid, with a **constant-coefficient one-step scheme**: there are finitely many real or complex numbers $a_m$, independent of $j$ and $n$, with
$$
u_j^{n+1} \;=\; \sum_{m} a_m\, u_{j+m}^{\,n} .
$$
Substitute a single **discrete mode**
$$
u_j^{n} \;=\; \xi^{\,n}\,e^{i k j \Delta x},
$$
a geometric sequence in time times a grid plane wave in space. The spatial factor comes out of the sum, and what is left is a number,
$$
\boxed{\;\xi(\theta) \;=\; \sum_m a_m\,e^{i m \theta}\;}
\qquad \theta = k\,\Delta x ,
$$
the **amplification factor** of the scheme. The mode is then reproduced exactly at the next time level, multiplied by $\xi$; after $n$ steps its size is $|\xi|^{n}$ times its initial size.

Only $\theta = k\,\Delta x$ enters, and $e^{ikj\Delta x}$ is unchanged when $\theta$ moves by $2\pi$: two wavenumbers whose $\theta$ differ by a multiple of $2\pi$ give literally the same grid function. This is aliasing, exactly as in :ref[]{to=fourier.dft-fft}, and it means that **$\theta$ ranges over $[-\pi, \pi]$ and no further**. The shortest wave the grid can carry is $\theta = \pi$, the sawtooth $(-1)^{j}$ with two grid points per wavelength.

The scheme satisfies the **von Neumann condition** if there is a constant $C$, independent of $k$ and of the step sizes, with
$$
|\xi(\theta)| \;\le\; 1 + C\,\Delta t \qquad\text{for all } \theta \in [-\pi,\pi]
$$
and all sufficiently small $\Delta t$. Strauss states the condition in this form, citing Richtmyer and Morton, and notes that the slack $C\,\Delta t$ is what is needed for problems whose exact solutions grow in time; when the exact solution does not grow, the sharper requirement $|\xi| \le 1$ is the one to use, and it is the one tested below. The slack is harmless because $(1 + C\Delta t)^{n} \le e^{CT}$ whenever $n\,\Delta t \le T$, so a mode can grow by at most a fixed factor over a fixed time interval, whereas a violation of the condition by a fixed amount compounds without limit as the grid is refined.
:::

:::statement[Stability limits of the two explicit model schemes]{provenance=adapted src="strauss-2008:§8.2, Eqs. (9)-(10), pp. 206-207; strauss-2008:§8.3, Eqs. (7)-(9), pp. 213-214"}
Let $\theta = k\,\Delta x \in [-\pi,\pi]$.

**(a) The explicit heat scheme.** For scheme (H) of :ref[]{to=num.finite-differences}, with mesh ratio $s = \Delta t/(\Delta x)^{2}$, the amplification factor is
$$
\xi(\theta) \;=\; 1 - 2s\bigl(1 - \cos\theta\bigr) \;=\; 1 - 4s\,\sin^{2}\!\frac{\theta}{2},
$$
which is real. Then
$$
|\xi(\theta)| \le 1 \ \text{ for every } \theta \in [-\pi,\pi]
\qquad\Longleftrightarrow\qquad
s \le \tfrac12,
\quad\text{that is}\quad \Delta t \le \tfrac12 (\Delta x)^{2} .
$$
If $s > 1/2$ then $\xi(\pi) = 1 - 4s < -1$, and the sawtooth mode is multiplied by the fixed factor $4s - 1 > 1$ at every step, so the von Neumann condition fails for every $C$.

**(b) The explicit wave scheme.** For scheme (W) of :ref[]{to=num.finite-differences}, with $\lambda = c\,\Delta t/\Delta x$, the mode $u_j^n = \xi^n e^{ikj\Delta x}$ satisfies the quadratic
$$
\xi^{2} - 2(1+p)\,\xi + 1 = 0,
\qquad
p \;=\; \lambda^{2}\bigl(\cos\theta - 1\bigr) \;\le\; 0 .
$$
Both roots satisfy $|\xi| \le 1$ for every $\theta \in [-\pi,\pi]$ if and only if
$$
\lambda \le 1,
\quad\text{that is}\quad c\,\Delta t \le \Delta x .
$$
Whenever $-2 < p < 0$ the two roots form a complex-conjugate pair of modulus exactly $1$, so those modes neither grow nor decay, which is what the wave equation itself does; the endpoint $p = -2$, reached only when $\lambda = 1$ and $\theta = \pi$, gives the double root $\xi = -1$. When $\lambda > 1$ there are wavenumbers for which one root is real and less than $-1$.
:::

:::idea{provenance=original}
A constant-coefficient difference scheme treats every grid point alike, so shifting the grid by one point commutes with one step of the scheme. The grid plane waves $e^{ikj\Delta x}$ are the eigenvectors of that shift, hence eigenvectors of the scheme, and the scheme acts on each of them by a single number $\xi$. Stability is then the question of whether any of those numbers exceeds $1$ in modulus, and since the whole dependence is through $\theta = k\Delta x$ in a bounded interval, it is a question about a function of one real variable on $[-\pi,\pi]$. For the heat scheme that function is a real cosine and the worst case is the shortest wave the grid supports; for the wave scheme each $\theta$ gives a quadratic with constant term $1$, so its roots multiply to $1$ and the only two possibilities are a conjugate pair on the unit circle or a real pair straddling it.
:::

:::proof{provenance=adapted src="strauss-2008:§8.2, Eqs. (9)-(10), pp. 206-207; strauss-2008:§8.3, Eqs. (7)-(8), p. 213"}
**(a) Step 1 (substitute).** The solved form of (H) is $u_j^{n+1} = s(u_{j+1}^n + u_{j-1}^n) + (1-2s)u_j^n$, so the coefficients are $a_{\pm1} = s$ and $a_0 = 1-2s$. By the boxed formula,
$$
\xi(\theta) = s\,e^{i\theta} + s\,e^{-i\theta} + 1 - 2s = 1 - 2s(1 - \cos\theta),
$$
and the half-angle identity $1 - \cos\theta = 2\sin^{2}(\theta/2)$ gives the second form. In particular $\xi$ is real because the stencil is symmetric.

**Step 2 (one inequality is free).** Since $s > 0$ and $\sin^{2}(\theta/2) \ge 0$, we have $\xi(\theta) \le 1$ for every $\theta$. So the condition $|\xi| \le 1$ reduces to $\xi(\theta) \ge -1$.

**Step 3 (find the worst mode).** $\xi(\theta) \ge -1$ says $4s\sin^{2}(\theta/2) \le 2$. As $\theta$ runs over $[-\pi,\pi]$, $\sin^{2}(\theta/2)$ attains its largest value $1$ at $\theta = \pm\pi$ and no larger value is available, this being exactly where aliasing cuts the range off. The inequality therefore holds across the whole range of $\theta$ exactly when $4s \le 2$, which is the stated bound $s \le 1/2$.

**Step 4 (failure is genuine).** If $s > 1/2$, take $\theta = \pi$. Then $\xi = 1 - 4s$ and $|\xi| = 4s - 1 > 1$ is a constant that does not shrink with $\Delta t$, so no bound of the form $1 + C\Delta t$ can hold for small $\Delta t$. Over a fixed time $T$ the number of steps is $n = T/\Delta t = T/(s(\Delta x)^2)$, so the sawtooth is amplified by $(4s-1)^{T/(s(\Delta x)^2)}$, which tends to infinity as the grid is refined.

**(b) Step 5 (substitute into the three-level scheme).** Insert $u_j^n = \xi^{n}e^{ikj\Delta x}$ into
$$
\frac{u_j^{n+1} - 2u_j^n + u_j^{n-1}}{(\Delta t)^2} = c^2\,\frac{u_{j+1}^n - 2u_j^n + u_{j-1}^n}{(\Delta x)^2}
$$
and divide by $\xi^{n}e^{ikj\Delta x}/(\Delta t)^{2}$, which is non-zero. Using $\lambda^2 = c^2(\Delta t)^2/(\Delta x)^2$ and $e^{i\theta} + e^{-i\theta} = 2\cos\theta$,
$$
\xi - 2 + \xi^{-1} \;=\; \lambda^{2}\bigl(2\cos\theta - 2\bigr) \;=\; 2p .
$$
Multiplying by $\xi$ and rearranging gives $\xi^2 - 2(1+p)\xi + 1 = 0$. Note $p \le 0$ always, and $p \ge -2\lambda^2$ with equality at $\theta = \pi$.

**Step 6 (the roots multiply to one).** The product of the two roots is the constant term, $1$. The discriminant of the quadratic is $4(1+p)^2 - 4 = 4p(p+2)$.

**Step 7 (case $-2 \le p \le 0$).** Then $p(p+2) \le 0$, so the discriminant is $\le 0$ and the roots are a complex-conjugate pair (or the double root $\xi = -1$ when $p = -2$, and $\xi = 1$ when $p=0$). A conjugate pair whose product is $1$ consists of two numbers of modulus $1$, since $\xi\,\overline{\xi} = |\xi|^2 = 1$. So $|\xi| = 1$ for both roots.

**Step 8 (case $p < -2$).** Then $p(p+2) > 0$, so the roots are real and distinct. Their product is $1$ and their sum is $2(1+p) < -2$, so both are negative and they are reciprocals of each other; two distinct reciprocal numbers cannot both have modulus $1$, so one has modulus strictly greater than $1$. The scheme is unstable.

**Step 9 (translate into $\lambda$).** Over $\theta \in [-\pi,\pi]$ the quantity $p$ is smallest at $\theta = \pi$, where it equals $-2\lambda^{2}$. Step 7 therefore covers every $\theta$ exactly when $-2\lambda^{2} \ge -2$, which is the condition $\lambda \le 1$. Should instead $\lambda$ exceed $1$, the sawtooth $\theta = \pi$ has $p = -2\lambda^{2} < -2$, and Step 8 produces a root outside the unit circle. $\square$
:::

:::definition[The Courant-Friedrichs-Lewy condition]{provenance=adapted src="strauss-2008:§8.3, p. 214 and Figure 4"}
The **domain of dependence** of the exact solution of $u_{tt} = c^2u_{xx}$ at a point $(x,t)$ is the interval $[x - ct,\, x+ct]$ on the initial line: by d'Alembert's formula (:ref[]{to=pde.dalembert}) the value there is determined by the data on that interval and by nothing outside it. The **numerical domain of dependence** of $u_j^{n}$ under an explicit scheme whose stencil reaches one point to each side is the set of initial grid points within $n$ steps, namely $[x_j - n\Delta x,\, x_j + n\Delta x]$.

The **CFL condition**, named for Courant, Friedrichs and Lewy, is the requirement that the numerical domain of dependence contain the exact one. For scheme (W) at $t_n = n\Delta t$ it reads $c\,n\,\Delta t \le n\,\Delta x$, that is
$$
\lambda = \frac{c\,\Delta t}{\Delta x} \le 1 .
$$
Strauss puts the same thing as a comparison of speeds: $\Delta x/\Delta t$ is the speed at which the scheme propagates information, and it must be at least the physical speed $c$.
:::

:::statement[CFL is necessary for convergence]{provenance=adapted src="strauss-2008:§8.3, p. 214"}
Let an explicit scheme for $u_{tt} = c^2u_{xx}$ on the whole line compute $u_j^{n+1}$ from grid values at the two previous levels lying within one grid point of $x_j$, and refine the grid with $\lambda = c\,\Delta t/\Delta x$ held fixed. If $\lambda > 1$, there is a pair of initial data for which the computed values at a fixed point $(x_\ast, t_\ast)$, $t_\ast > 0$, do not both converge to the corresponding exact solutions. Hence no such scheme can converge for all data unless $\lambda \le 1$, whatever its truncation error.
:::

:::proof{provenance=adapted src="strauss-2008:§8.3, p. 214"}
**Step 1 (the numerical domain of dependence is too small).** Suppose $\lambda > 1$. Fix $t_\ast > 0$ and take the point $x_\ast = 0$. Let $n$ be the number of steps to reach $t_\ast$, so $n\,\Delta t = t_\ast$. Each of the $n$ steps widens the stencil by one grid point, and the second starting row widens it by one more, so the computed value at $(0, t_\ast)$ depends only on the initial data at the grid points of $[-(n+1)\Delta x,\, (n+1)\Delta x]$. Now
$$
n\,\Delta x = n\,\frac{c\,\Delta t}{\lambda} = \frac{c\,t_\ast}{\lambda} \;=:\; r \;<\; c\,t_\ast ,
$$
so that interval is contained in $[-(r+\Delta x),\, r+\Delta x]$, which shrinks to the fixed interval $[-r,r]$ as the grid is refined with $\lambda$ held fixed. It is therefore eventually contained in any fixed neighbourhood of $[-r,r]$ inside the exact domain of dependence $[-ct_\ast, ct_\ast]$.

**Step 2 (choose the data).** Pick $r'$ with $r < r' < ct_\ast$. Take initial velocity $\psi \equiv 0$ in both cases, initial displacement $\varphi_1 \equiv 0$, and for $\varphi_2$ a continuous bump supported in $(r', \infty)$ with $\varphi_2(ct_\ast) = 2$. Since $\psi \equiv 0$, d'Alembert's formula gives $u(0,t_\ast) = \tfrac12\bigl(\varphi(ct_\ast) + \varphi(-ct_\ast)\bigr)$, so the exact values are $u_1(0,t_\ast) = 0$ and $u_2(0,t_\ast) = \tfrac12(2 + 0) = 1$.

**Step 3 (compare).** Take any grid fine enough that $r + \Delta x < r'$. On it, $\varphi_1$ and $\varphi_2$ agree (both vanish) at every grid point of $[-(r+\Delta x), r+\Delta x]$, and $\psi$ is the same for both; by Step 1 the computed value at $(0,t_\ast)$ uses nothing else, so the two computations produce **the same number**. Their exact counterparts differ by $1$. Hence at most one of the two numerical sequences can converge to its own exact value as the grid is refined, and convergence for all data fails. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Constant coefficients.** The entire method rests on the grid plane waves being eigenvectors of the scheme, which needs the coefficients $a_m$ to be independent of $j$. For a variable-coefficient problem the usual practice is to freeze the coefficients at each point, apply the analysis there, and impose the worst of the resulting limits; that is a heuristic, not a theorem.

**No boundaries.** The modes $e^{ikj\Delta x}$ live on the whole line or on a periodic grid. Strauss gets the same answer on the interval $[0,\pi]$ with Dirichlet data because the discrete sine functions $\sin(jk\Delta x)$ happen also to be eigenvectors of the scheme there; for a general boundary condition they are not, and a scheme that is von Neumann stable in the interior can still be destroyed by its boundary treatment.

**Scalar, one step.** For a scalar one-step scheme, $|\xi(\theta)| \le 1$ for all $\theta$ is both necessary and sufficient for the scheme to be a contraction in the grid $\ell^2$ norm, by the discrete Parseval relation of :ref[]{to=fourier.dft-fft}. For a *system*, the amplification is a matrix $G(\theta)$, and the spectral radius condition $\rho(G) \le 1$ is still necessary but no longer sufficient: powers of a non-normal matrix with spectral radius $1$ can grow polynomially, or transiently by a large factor. The multi-level scheme (W) was handled above by passing to the scalar quadratic, which is legitimate only because the two roots were examined individually. The same caution applies at the endpoint $\lambda = 1$: there the sawtooth $\theta = \pi$ has the *double* root $\xi = -1$, so the general solution of the recurrence for that mode is $(A + Bn)(-1)^{n}$ and grows linearly in $n$, even though both roots have modulus $1$. Starting rows built exactly from a d'Alembert solution have $B = 0$, which is why the scheme is exact at $\lambda = 1$ (:ref[]{to=num.finite-differences}); rounding error is not so obliging, and practice therefore keeps $\lambda$ strictly below $1$.

**Where the aliasing cut-off is used.** Steps 3 and 9 both take the supremum of the relevant quantity over $\theta \in [-\pi,\pi]$ and over nothing larger. A continuum stability analysis, which would let $k$ run to infinity, would give no condition at all for the heat equation and the wrong one for the wave equation. The limits $s \le 1/2$ and $\lambda \le 1$ are properties of the *grid*, and they come from the shortest wave the grid can represent.

**The slack $C\,\Delta t$.** For $u_t = u_{xx}$ the exact solution decays, so $|\xi| \le 1$ is the right test. For an equation such as $u_t = a u_{xx} + bu$ with $b > 0$ the exact solution grows like $e^{bt}$, and a scheme that reproduced it would have $|\xi| \approx 1 + b\Delta t > 1$; insisting on $|\xi| \le 1$ would reject a perfectly good scheme. That is why Strauss states the condition with the $O(\Delta t)$ allowance.

**Implicit schemes escape the limit.** Strauss's $\theta$ scheme weights the second difference between the two time levels; writing the weight as $\mu \in [0,1]$ to keep $\theta$ for the phase, its amplification factor is
$$
\xi(\theta) = \frac{1 - 2(1-\mu)s(1-\cos\theta)}{1 + 2\mu s(1-\cos\theta)} ,
$$
and he shows that for $\tfrac12 \le \mu \le 1$ no restriction on $s$ is needed: the scheme is unconditionally stable, the case $\mu = \tfrac12$ being Crank-Nicolson. The price is that each step now requires the solution of a tridiagonal linear system. Whether that price is worth paying is the stiffness question of :ref[]{to=num.stiffness}.
:::

:::statement[Lax equivalence theorem]{provenance=original label="Theorem (stated without proof)"}
Let a linear initial-value problem be well posed on a Banach space $B$: for data $u_0$ in a dense subspace there is a unique solution $u(t) = E(t)u_0$ for $0 \le t \le T$, and the solution operators $E(t)$ are uniformly bounded on $[0,T]$. Let a difference scheme be written as $u^{n+1} = C(\Delta t)\,u^{n}$ with $C(\Delta t)$ a bounded operator on $B$, and suppose the scheme is **consistent** with the problem. Call the scheme **stable** if the family
$$
\bigl\{\,C(\Delta t)^{n} \;:\; 0 \le n\,\Delta t \le T,\ 0 < \Delta t \le \tau \,\bigr\}
$$
is uniformly bounded in operator norm for some $\tau > 0$. Then the scheme is **convergent** — $C(\Delta t)^{n}u_0 \to E(t)u_0$ for every $u_0 \in B$ as $\Delta t \to 0$ with $n\,\Delta t \to t$ — **if and only if it is stable**.

This is the theorem of Lax and Richtmyer. No book in this handbook's library proves it, and none is cited for it; it is stated here because it is what licenses the whole practice above, and it is the reason the von Neumann computation is worth doing at all. Strauss refers the reader to Richtmyer and Morton for the same circle of ideas when he states the von Neumann condition, and explicitly omits the convergence proof for the heat scheme.
:::

:::note{provenance=original}
How the three notions fit together, for a constant-coefficient scheme on a periodic grid. *Consistency* is checked by Taylor expansion (:ref[]{to=num.finite-differences}) and says the scheme solves the right equation. *Stability* is checked by the amplification factor and says the scheme does not amplify anything without limit. *Convergence* — the thing one actually wants — follows from the two together, by Lax equivalence, and from neither alone. The mesh ratio $s = 1/6$ found in the previous unit raises the order of consistency and says nothing about stability; the condition $s \le 1/2$ found here constrains stability and says nothing about accuracy.
:::

:::method[Von Neumann analysis of a scheme]{provenance=original}
1. **Check the scheme is constant-coefficient** and write it with all time levels on the left. Drop the boundaries: work on the whole line or a periodic grid.
2. **Substitute** $u_j^{n} = \xi^{n}e^{i\theta j}$ and divide out the common factor $\xi^{n}e^{i\theta j}$ (and a power of $\xi$ if the scheme is multi-level). What remains is a polynomial equation in $\xi$ whose coefficients depend on $\theta$ and on the mesh ratios.
3. **Solve for $\xi$.** A one-step scheme gives $\xi$ directly; an $r$-level scheme gives a polynomial of degree $r-1$ in $\xi$ with that many roots, every one of which must be tested.
4. **Simplify with half angles.** Replace $1 - \cos\theta$ by $2\sin^{2}(\theta/2)$ and $\sin\theta$ by $2\sin(\theta/2)\cos(\theta/2)$; the modulus is usually a quadratic in $\sigma = \sin^{2}(\theta/2) \in [0,1]$.
5. **Maximise $|\xi|$ over $\sigma \in [0,1]$**, not over all real $k$. The maximum is usually at an endpoint: $\sigma = 1$ is the sawtooth $\theta = \pi$ and $\sigma = 0$ is the constant mode.
6. **Impose $|\xi| \le 1$** (or $\le 1 + C\Delta t$ if the exact solution grows) and solve the resulting inequality for the mesh ratio. If it holds for every mesh ratio, the scheme is unconditionally stable.
7. **Confirm numerically.** Run the scheme on the offending mode for a few dozen steps and check the measured growth against $|\xi|^{n}$.
:::

:::example[Three schemes for the advection equation]{provenance=original}
Take $u_t + a u_x = 0$ with $a > 0$, whose exact solution translates the initial profile rigidly to the right at speed $a$ (:ref[]{to=pde.first-order-characteristics}). Put $\nu = a\,\Delta t/\Delta x$, the Courant number, and $\theta = k\,\Delta x$.

**Scheme 1: forward in time, centred in space.** $u_j^{n+1} = u_j^{n} - \tfrac{\nu}{2}\bigl(u_{j+1}^n - u_{j-1}^n\bigr)$. The coefficients are $a_0 = 1$, $a_{\pm 1} = \mp \nu/2$, so
$$
\xi(\theta) = 1 - \frac{\nu}{2}\bigl(e^{i\theta} - e^{-i\theta}\bigr) = 1 - i\nu\sin\theta,
\qquad
|\xi|^{2} = 1 + \nu^{2}\sin^{2}\theta .
$$
This exceeds $1$ for every $\theta$ that is not a multiple of $\pi$, and the excess does not shrink with $\Delta t$ at fixed $\nu$. The scheme is unstable for every choice of steps, even though its truncation error is $O(\Delta t) + O((\Delta x)^2)$ and it looks like the natural thing to write down.

**Scheme 2: Lax-Friedrichs.** Replace the $u_j^n$ on the right by the average of its neighbours: $u_j^{n+1} = \tfrac12(u_{j+1}^n + u_{j-1}^n) - \tfrac{\nu}{2}(u_{j+1}^n - u_{j-1}^n)$. Now $a_{\pm1} = \tfrac12 \mp \tfrac{\nu}{2}$, $a_0 = 0$, so
$$
\xi(\theta) = \cos\theta - i\nu\sin\theta,
\qquad
|\xi|^{2} = \cos^{2}\theta + \nu^{2}\sin^{2}\theta = 1 - (1-\nu^{2})\sin^{2}\theta .
$$
So $|\xi| \le 1$ for all $\theta$ if and only if $\nu^{2} \le 1$: the CFL condition again.

**Scheme 3: upwind.** Difference into the wind, $u_j^{n+1} = u_j^n - \nu\bigl(u_j^n - u_{j-1}^n\bigr)$. Then $\xi = 1 - \nu + \nu e^{-i\theta}$ and
$$
|\xi|^{2} = (1-\nu+\nu\cos\theta)^{2} + \nu^{2}\sin^{2}\theta = 1 - 2\nu(1-\nu)(1-\cos\theta),
$$
after expanding and using $\cos^2 + \sin^2 = 1$. Since $1 - \cos\theta \ge 0$, this is at most $1$ precisely when $\nu(1-\nu) \ge 0$, that is $0 \le \nu \le 1$. (For $a < 0$ the mirror-image scheme, differencing forward in $x$, is the stable one.)

**The numbers.** Take $\nu = \tfrac12$ and the mode with $\theta = \pi/2$, that is four grid points per wavelength. On a periodic grid of $64$ points with $\Delta x = 2\pi/64$ this is the mode $e^{16 i x_j}$.

- Scheme 1: $|\xi| = \sqrt{1 + \tfrac14} = 1.11803399$, so after $100$ steps the mode should be multiplied by $(5/4)^{50} = 7.00649232\times10^{4}$. Marching the scheme $100$ steps in double precision and dividing by the initial mode gives $7.00649232\times10^{4}$, agreeing in all nine figures.
- Scheme 2: $|\xi|^2 = 0 + \tfrac14$, so $|\xi| = \tfrac12$ and after $20$ steps the factor should be $2^{-20} = 9.5367431640625\times10^{-7}$. The computed factor is $9.5367431640625\times10^{-7}$, exact to the last bit, since $2^{-20}$ is a machine number.
- Scheme 3: $|\xi|^{2} = 1 - 2(\tfrac12)(\tfrac12)(1 - 0) = \tfrac12$, so after $20$ steps the factor should be $2^{-10} = 9.765625\times10^{-4}$. The computed factor is $9.76562500\times10^{-4}$.

Schemes 2 and 3 are stable here but heavily damped at this wavenumber, which is the other half of the story: stability prevents disaster, it does not deliver accuracy. Over the $20$ steps the exact solution merely translates the wave, losing no amplitude at all, while the computed one has lost three orders of magnitude of it. This numerical dissipation is the price of the averaging in Scheme 2 and of the one-sided difference in Scheme 3, and it is the reason schemes of higher order are used in practice.

**And the heat scheme.** The same experiment on (H) with $\theta = \pi$: at $s = 0.55$, just past the limit, $\xi = 1 - 4(0.55) = -1.2$, and after $100$ steps the sawtooth is multiplied by $1.2^{100} = 8.28\times10^{7}$ — a complete loss of the solution, from a mesh ratio only ten per cent too large. At $s = 0.5$ exactly, $\xi = -1$ and the sawtooth survives forever with alternating sign; at $s = 0.25$, $\xi = 0$ and it is annihilated in one step. Strauss reports exactly this behaviour in two runs with mesh ratios straddling $1/2$: one on target, one oscillating wildly.
:::

:::application{provenance=original}
The CFL condition is the single hardest constraint on large-scale geophysical simulation, and it is a budget item rather than a mathematical curiosity.

A global atmospheric model that treats the full compressible equations explicitly must resolve sound waves, which travel at roughly $340\ \mathrm{m\,s^{-1}}$. At a horizontal grid spacing of $10\ \mathrm{km}$ the CFL limit is about $\Delta t \le 10^{4}/340 \approx 29\ \mathrm{s}$, so a one-year integration needs of the order of $10^{6}$ time steps. The meteorologically interesting signals travel at a tenth of that speed, so almost all of the work is spent keeping the acoustic modes stable. This is precisely the stiffness of :ref[]{to=num.stiffness}, and the standard answer is the one the $\theta$ scheme illustrates: treat the fast terms implicitly, pay for a linear solve each step, and choose $\Delta t$ from accuracy rather than from stability. Semi-implicit and split-explicit dynamical cores exist for exactly this reason.

The parabolic limit bites even harder. A vertical diffusion scheme of the form (H) with a diffusivity $\kappa$ requires $\Delta t \le (\Delta z)^2/(2\kappa)$, which is quadratic in the spacing: refining the vertical grid by a factor of ten costs a hundred times as many steps. Boundary-layer schemes in operational models are therefore implicit almost without exception.

The same arithmetic governs explicit finite-difference codes for seismic wave propagation, for electromagnetic simulation by the finite-difference time-domain method, and for the diffusion step of a reactor or heat-exchanger calculation. In each case the engineering question is not whether the scheme is stable but how much the stability limit costs, which is why unconditionally stable implicit schemes and the iterative solvers of :ref[]{to=num.relaxation-methods} are so central to practice.
:::
