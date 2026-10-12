---
id: pde.vibrating-string-modes
title: Standing waves and normal modes
kind: method
level: core
summary: Separates the variables in the wave equation for a string with fixed ends, shows that the only separated solutions are the standing waves $\sin(n\pi x/L)$ oscillating at frequency $nc/2L$, gives the recipe for fitting arbitrary initial data by a Fourier sine series, and says when the resulting series is a genuine solution.
prereqs: [pde.dalembert, pde.wave-energy, fourier.fourier-series]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§4.1 (Separation of variables, the Dirichlet condition), Eq. (1)–(12), pp. 84–87: the separated solution $X(x)T(t)$, the constancy of the separation ratio, the eigenvalues $\\lambda_n=(n\\pi/l)^2$ and eigenfunctions $\\sin(n\\pi x/l)$, the superposition Eq. (9) with the two coefficient conditions (10)–(11), and the frequencies $n\\pi c/l$ with the violin-string form Eq. (12); §4.1 Exercise 1(a), p. 89, the violin string clamped at its midpoint; p. 88, the eigenvalue/eigenfunction and normal-mode terminology and the proof that no $\\lambda \\le 0$ and no complex $\\lambda$ is an eigenvalue; §4.2, Eq. (1)–(7), pp. 89–91, the Neumann case with $\\lambda=0$ included"
    pages: "84-91"
    role: the whole separation argument for the fixed string; the eigenvalue list with the proof of positivity, including the complex case; the mode frequencies; the Neumann variant
  - work: stein-shakarchi-2003
    loc: "Ch. 1, §1 (Superposition of standing waves), pp. 11–16: the separation $\\phi(x)\\psi(t)$, the reduction to $\\psi''-\\lambda\\psi=0$, $\\phi''-\\lambda\\phi=0$ with $\\lambda=-m^2$, the standing wave $u_m=(A_m\\cos mt+B_m\\sin mt)\\sin mx$, fundamental tone and overtones with nodes and anti-nodes, the superposition Eq. (4), and the Fourier sine coefficient Eq. (6)"
    pages: "11-16"
    role: the standing-wave picture, the vocabulary of fundamental tone, overtones, nodes and anti-nodes, the superposition, and the orthogonality computation that produces the sine coefficients
  - work: rhb-2006
    loc: "§21.1, Eq. (21.1)–(21.8), pp. 713–716 (the general separation method, separation constants, and the two equivalent exponential and trigonometric forms of the separated factors); §21.2, Eq. (21.16)–(21.19), pp. 718–719 (superposition of separated solutions and the determination of the coefficients by a Fourier sine series, with the warning about the odd periodic continuation of the data)"
    pages: "713-719"
    role: the general statement of the method and of the superposition step; the requirement that the separated factors form a complete set; the odd periodic continuation implicit in a sine expansion
  - work: arfken-2013
    loc: "§9.4, pp. 414–416, the method of separation of variables, the count of $n-1$ independent separation constants, and the distinction between a problem with a unique solution expanded in product solutions and an eigenvalue problem with homogeneous boundary conditions; §9.6, pp. 435–436, standing waves as sums of oppositely travelling waves and the remark that the separated solutions carry the same content as the travelling-wave solutions"
    pages: "414-416, 435-436"
    role: the logic of the method and when it can be expected to work; the identification of standing waves with pairs of travelling waves
  - work: hassani-2013
    loc: "§13.1, Eq. (13.7)–(13.9), pp. 396–397, separating the time variable from the space variables in the wave, heat, Schrodinger and Klein-Gordon equations by writing $\\Psi(\\mathbf r,t)=R(\\mathbf r)T(t)$"
    pages: "396-397"
    role: the observation that the time separation is identical for all four equations of mathematical physics, which is why the same mode decomposition serves them all
---

:::definition[Separated solutions and normal modes]{provenance=adapted src="strauss-2008:§4.1, Eq. (1)–(4), p. 84, and p. 88; stein-shakarchi-2003:Ch. 1 §1, p. 11"}
Let $L>0$ and $c = \sqrt{\tau/\rho}>0$. The **vibrating-string problem** is

$$
\begin{aligned}
&u_{tt} = c^2u_{xx} && 0<x<L,\ t>0, \\
&u(0,t) = u(L,t) = 0 && t>0, \\
&u(x,0) = \varphi(x), \quad u_t(x,0) = \psi(x) && 0<x<L .
\end{aligned}
\tag{S}
$$

The boundary condition says the two ends are clamped. Strauss writes the length as $l$.

A **separated solution** is a solution of the equation and the boundary conditions of the product form

$$
u(x,t) = X(x)\,T(t), \qquad X \not\equiv 0,\ T\not\equiv 0 ,
$$

with $X$ depending on $x$ alone and $T$ on $t$ alone. A separated solution of (S) is also called a **standing wave**: its shape in $x$ is fixed once and for all, and only its amplitude moves, so the zeros of $X$ in $0<x<L$ never move. Those zeros are the **nodes**, and the points of greatest amplitude the **anti-nodes** (Stein and Shakarchi).

In the eigenvalue language that Strauss introduces on p. 88, the spatial factor solves

$$
-X'' = \lambda X \ \text{ on } (0,L), \qquad X(0)=X(L)=0 ,
$$

an ordinary differential equation with conditions at two points. A number $\lambda$ for which a solution $X \not\equiv 0$ exists is an **eigenvalue** and such an $X$ an **eigenfunction** of the operator $A = -d^2/dx^2$ acting on functions that satisfy the Dirichlet conditions; **Normal mode** is the name physicists and engineers give to such an eigenfunction; Strauss explains the word by observing that these shapes, alone among all shapes the string could take, go on unaltered as time passes. This is the simplest :ref[Sturm-Liouville eigenvalue problem]{to=ode.sturm-liouville-theory}, and, as Strauss puts it, the situation is the infinite-dimensional analogue of the eigenvectors of a matrix.
:::

:::statement[The modes of a fixed string, and the solution]{provenance=adapted src="strauss-2008:§4.1, Eq. (5)–(12), pp. 85–87, and the eigenvalue proof on p. 88; stein-shakarchi-2003:Ch. 1 §1, Eq. (4) and (6), pp. 14–15"}
**The eigenvalues and modes.** The eigenvalues of $-X''=\lambda X$ with $X(0)=X(L)=0$ are exactly

$$
\lambda_n = \Bigl(\frac{n\pi}{L}\Bigr)^2, \qquad X_n(x) = \sin\frac{n\pi x}{L}, \qquad n = 1,2,3,\dots,
$$

each simple, each eigenfunction determined up to a constant multiple. No $\lambda \le 0$ and no non-real $\lambda$ is an eigenvalue.

**The separated solutions.** Consequently the separated solutions of (S) are exactly the functions

$$
u_n(x,t) = \Bigl(A_n\cos\omega_n t + B_n\sin\omega_n t\Bigr)\sin\frac{n\pi x}{L},
\qquad \omega_n = \frac{n\pi c}{L} = n\omega_1 ,
\tag{M}
$$

for some $n \in \mathbb{N}$ and some real constants $A_n, B_n$ that are not both zero. The $n$-th mode has $n-1$ interior nodes, at $x = L/n, 2L/n, \dots, (n-1)L/n$.

**Frequencies.** Strauss calls the numbers $\omega_n = n\pi c/L$ the frequencies, and records that some texts instead call $nc/2L$ the frequency; the two differ by the factor $2\pi$ between angular frequency and cycles per second. In terms of the string's constants,

$$
\omega_n = \frac{n\pi}{L}\sqrt{\frac{\tau}{\rho}} \qquad (n=1,2,\dots),
$$

which is Strauss's Eq. (12). The **fundamental** is $n=1$ and the **overtones** are its exact integer multiples — the fact, as Strauss notes, that Euler discovered in 1749 and that creates a sensation still.

**General solution.** Any finite sum $\sum_n u_n$ solves the equation and the boundary conditions, by linearity. Such a sum meets the initial conditions of (S) precisely when

$$
\varphi(x) = \sum_n A_n \sin\frac{n\pi x}{L}
\qquad\text{and}\qquad
\psi(x) = \sum_n \omega_n B_n\sin\frac{n\pi x}{L} ,
$$

Strauss's Eq. (10)–(11). For general data one therefore takes an infinite series and reads these two identities as Fourier sine expansions, which gives

$$
A_n = \frac{2}{L}\int_0^L \varphi(x)\sin\frac{n\pi x}{L}\, dx,
\qquad
B_n = \frac{2}{n\pi c}\int_0^L \psi(x)\sin\frac{n\pi x}{L}\, dx .
\tag{C}
$$

Stein and Shakarchi obtain the first of these (their Eq. (6), with $L=\pi$) from the orthogonality relation below, and both they and Strauss are explicit that at this stage the infinite series is formal; see the note on convergence.
:::

:::method[Separation of variables for the vibrating string]{provenance=adapted src="strauss-2008:§4.1, pp. 84–86; rhb-2006:§21.1–21.2, pp. 714–719; arfken-2013:§9.4, pp. 414–416"}
1. **Try a product.** Substitute $u = X(x)T(t)$ into $u_{tt} = c^2u_{xx}$ and divide by $-c^2XT$:
 $$
 -\frac{T''(t)}{c^2T(t)} = -\frac{X''(x)}{X(x)} .
 $$
 Arfken's criterion for expecting this to work is that the differential operators in the different variables occur additively, with no products of derivatives belonging to different variables, and that the boundary conditions, or at any rate part of them, split into conditions on the individual factors; Hassani makes the same separation of $t$ from $\mathbf{x}$ for the heat, Schrodinger and Klein-Gordon equations, which is why one mode decomposition serves all of them.
2. **Name the constant.** The left side depends only on $t$ and the right only on $x$, and they are equal, so each is a constant $\lambda$ — the **separation constant**. (Strauss's proof: the common value has zero partial derivative in both $x$ and $t$.) In more variables there is one such constant per variable, subject to one relation: Riley, Hobson and Bence separate the three-dimensional wave equation into four factors with constants $-l^2,-m^2,-n^2,-\mu^2$ tied by $\mu^2 = l^2+m^2+n^2$, and Arfken counts the independent ones as $n-1$ for a problem in $n$ variables. The result is a pair of ordinary equations,
 $$
 X'' + \lambda X = 0, \qquad T'' + c^2\lambda T = 0 .
 $$
3. **Impose the boundary conditions on the spatial factor.** $u(0,t)=u(L,t)=0$ for all $t$ with $T \not\equiv 0$ forces $X(0)=X(L)=0$. This is the step that selects the allowed $\lambda$; it is Arfken's second case, a genuine eigenvalue problem with homogeneous boundary conditions.
4. **Find the eigenvalues.** Solve the two-point problem. For the fixed string the answer is $\lambda_n = (n\pi/L)^2$ with $X_n = \sin(n\pi x/L)$, derived in the proof below.
5. **Solve for the time factor.** With $\lambda = \lambda_n$, $T'' + \omega_n^2T = 0$ with $\omega_n = c\sqrt{\lambda_n} = n\pi c/L$, so $T$ is $A_n\cos\omega_nt + B_n\sin\omega_nt$. Writing the factors as exponentials instead is often more convenient in other geometries (Riley, Hobson and Bence give both forms); for a bounded interval the trigonometric form is the natural one.
6. **Superpose.** Form $u = \sum_{n\ge1}u_n$. This solves the equation and the boundary conditions for any coefficients for which the series behaves; the step is legitimate only because the problem is linear and the boundary conditions homogeneous.
7. **Fit the initial data.** Expand $\varphi$ and $\psi$ in the eigenfunctions and match coefficients, which gives (C). As Riley, Hobson and Bence emphasise, this is possible in general only because the $X_n$ form a *complete* set — here, the Fourier sine system (:ref[Fourier series]{to=fourier.fourier-series}). They also point out what the expansion silently assumes about the data: a sine series represents the odd, $2L$-periodic continuation of $\varphi$, so if $\varphi(0)$ or $\varphi(L)$ is non-zero the continuation has jumps there and the series converges to the midpoints of the jumps.
8. **Check convergence** if an exact solution is wanted, by the criterion in the note below.
:::

:::idea{provenance=original}
Two observations drive everything. The first is that an equation in which $x$-derivatives and $t$-derivatives are not mixed can be satisfied by a product, because after dividing by that product the $x$ and $t$ parts of the equation sit on opposite sides of the equals sign; two functions of independent variables can agree only by being constant. The second is that the clamped ends turn the resulting ordinary equation for $X$ into a two-point problem, which almost never has a solution: only for a discrete list of $\lambda$ does a non-zero $X$ fit. The list is found by writing down the general solution of $X''=-\lambda X$ in each of the three cases $\lambda<0$, $\lambda=0$, $\lambda>0$ and seeing which can vanish at both ends. Only $\lambda>0$ survives, and then only when $\sqrt\lambda L$ is a multiple of $\pi$. Finally, because the problem is linear, modes can be added; and because the mode shapes are complete and orthogonal, any initial shape can be written as a combination of them, with coefficients given by integrals. The sum is then a solution with the right data.
:::

:::proof{provenance=adapted src="strauss-2008:§4.1, pp. 85–86 and the eigenvalue argument on p. 88; stein-shakarchi-2003:Ch. 1 §1, pp. 11–12 and p. 15"}
**Step 1 (the separation constant is a constant, and the two ODEs hold everywhere).** Let $u = XT$ solve $u_{tt}=c^2u_{xx}$ on $(0,L)\times(0,\infty)$ with $X,T$ twice differentiable and neither identically zero. Then

$$
X(x)\,T''(t) = c^2 X''(x)\, T(t) \qquad \text{for all } x \in (0,L),\ t>0 .
\tag{$*$}
$$

Let $P = \{x : X(x)\neq0\}$ and $Q = \{t: T(t)\neq0\}$, both non-empty since $X\not\equiv0$ and $T\not\equiv0$. Stein and Shakarchi note that dividing by $XT$ is legitimate only off the zeros, and their remedy — check the candidate product directly — proves the converse but not the "exactly" claimed above. The gap is short to close, and closing it matters here, because $x=0$ and $x=L$ are themselves zeros of $X$.

*The constant.* For $(x,t) \in P\times Q$, dividing ($*$) by $c^2X(x)T(t)$ gives $T''(t)/c^2T(t) = X''(x)/X(x)$. Fix one $t_0 \in Q$. The right-hand side then equals the fixed number $T''(t_0)/c^2T(t_0)$ for *every* $x \in P$, so $X''/X$ is a single constant on $P$; call it $-\lambda$. Feeding that back, $T''/c^2T = -\lambda$ on all of $Q$ as well. One constant serves both, on all of $P\times Q$ at once — no connectedness of $P$ or $Q$ is needed, because the two sides are decoupled.

*The zeros.* Hence $X''+\lambda X = 0$ on $P$ and $T'' + c^2\lambda T = 0$ on $Q$. At a zero of $X$ the equation ($*$) itself finishes the job: if $X(x_1) = 0$ then ($*$) reads $0 = c^2X''(x_1)T(t)$ for all $t>0$, and choosing $t \in Q$ gives $X''(x_1) = 0 = -\lambda X(x_1)$. Symmetrically, if $T(t_1)=0$ then $X(x)T''(t_1) = 0$ for all $x$, and choosing $x \in P$ gives $T''(t_1) = 0 = -c^2\lambda T(t_1)$. So

$$
X'' + \lambda X = 0 \ \text{ on } (0,L), \qquad T'' + c^2\lambda T = 0 \ \text{ on } (0,\infty),
$$

with no exceptional points. The equation for $X$ is needed only on the open interval, where the partial differential equation is posed; $X$ is continuous on the closed interval $[0,L]$, being twice differentiable there, so the boundary values $X(0)$ and $X(L)$ used in the next step are the limits at the two ends of the solution found on $(0,L)$.

**Step 2 (the boundary conditions pass to $X$).** $X(0)T(t) = 0$ for all $t$ and $T\not\equiv0$ give $X(0)=0$, and likewise $X(L)=0$.

**Step 3 (no eigenvalue is zero).** If $\lambda = 0$ then $X''=0$, so $X(x) = C + Dx$. From $X(0)=0$, $C=0$; from $X(L)=0$, $DL=0$, so $D=0$ and $X\equiv0$. Excluded.

**Step 4 (no eigenvalue is negative).** If $\lambda<0$, write $\lambda = -\gamma^2$ with $\gamma>0$. Then $X''=\gamma^2X$, whose general solution is $X = C\cosh\gamma x + D\sinh\gamma x$. Now $X(0)=0$ gives $C=0$, and $X(L) = D\sinh\gamma L = 0$ gives $D=0$, because $\sinh\gamma L \ne 0$ for $\gamma L>0$. Excluded.

**Step 5 (no eigenvalue is non-real).** This is Strauss's argument, and it is needed because nothing so far rules out complex $\lambda$. Let $\lambda \in \mathbb{C}$ and let $\gamma$ be either square root of $-\lambda$; if $\gamma = 0$ we are in Step 3, so take $\gamma \neq 0$. The general solution is $X = Ce^{\gamma x} + De^{-\gamma x}$. From $X(0)=0$, $D = -C$, and $C \neq 0$ or $X \equiv 0$; from $X(L)=0$, $Ce^{\gamma L} = Ce^{-\gamma L}$, hence

$$
e^{2\gamma L} = 1 .
$$

Writing $\gamma = \sigma + i\varsigma$, $|e^{2\gamma L}| = e^{2\sigma L} = 1$ forces $\sigma = 0$, and then $e^{2i\varsigma L}=1$ forces $2\varsigma L = 2\pi n$ for some integer $n$. So $\gamma = in\pi/L$ and $\lambda = -\gamma^2 = n^2\pi^2/L^2$, which is real and positive. Hence every eigenvalue is of this form, and $n=0$ is excluded by Step 3.

**Step 6 (the eigenfunctions).** Conversely, for $\lambda = \beta^2$ with $\beta>0$ the general solution of $X''+\beta^2X=0$ is $X = C\cos\beta x + D\sin\beta x$. Then $X(0)=0$ gives $C=0$, and $X(L) = D\sin\beta L = 0$ with $D\neq0$ gives $\sin\beta L = 0$, that is $\beta L = n\pi$ for some $n \in \mathbb{N}$. Each such $\beta$ gives the one-dimensional space of eigenfunctions spanned by $\sin(n\pi x/L)$. Combining with Steps 3–5, the eigenvalue list is exactly $\lambda_n=(n\pi/L)^2$ for $n\in\mathbb{N}$. For each of them the time equation of Step 1 reads $T'' + \omega_n^2T = 0$ with $\omega_n = c\sqrt{\lambda_n} = n\pi c/L$, whose general solution is $A_n\cos\omega_nt + B_n\sin\omega_nt$. Multiplying the two factors gives the modes (M), and these are all of them.

**Step 7 (orthogonality and the coefficients).** For $m,n\in\mathbb{N}$,

$$
\int_0^L \sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\; dx = \frac{L}{2}\,\delta_{mn},
$$

by the product-to-sum identity $2\sin a\sin b = \cos(a-b) - \cos(a+b)$ and the fact that $\int_0^L\cos(k\pi x/L)dx = 0$ for every non-zero integer $k$. Suppose now $\varphi(x) = \sum_m A_m\sin(m\pi x/L)$ with the series converging well enough to integrate term by term. Multiplying by $\sin(n\pi x/L)$ and integrating over $[0,L]$ leaves one surviving term, $A_n L/2$, which gives the first formula in (C). Differentiating the series for $u$ once in $t$ and setting $t=0$ gives $\psi = \sum_m \omega_m B_m\sin(m\pi x/L)$, and the same computation gives $\omega_nB_n = \frac{2}{L}\int_0^L\psi\sin(n\pi x/L)dx$, that is the second formula in (C). $\square$
:::

:::note[When is the series a solution?]{provenance=adapted src="strauss-2008:§4.1, p. 86; stein-shakarchi-2003:Ch. 1 §1, p. 14; rhb-2006:§21.2, p. 719"}
Steps 6 and 7 are exact for a *finite* sum of modes, which is Strauss's Eq. (9). For an infinite series both Strauss and Stein and Shakarchi say plainly that the argument is formal at this stage: Strauss postpones the convergence and differentiability questions to his chapter on Fourier series, remarking only that practically any function on $(0,L)$ can be expanded as in (C); Stein and Shakarchi write that questions of convergence arise and that they will not worry about them yet. We do not prove a convergence theorem here either, and record one sufficient condition that follows from the standard theorem on differentiating a uniformly convergent series:

> Let $\varphi$ and $\psi$ be continuous on $[0,L]$, let $A_n$ and $B_n$ be their coefficients (C), and suppose that
> $$
> \sum_{n\ge1} n^2\bigl(|A_n| + |B_n|\bigr) < \infty .
> $$
> Then the series $u = \sum_n u_n$ and all of its first and second derivative series converge absolutely and uniformly on $[0,L]\times\mathbb{R}$, so $u \in C^2$, may be differentiated term by term, and satisfies the equation and the boundary conditions of (S). Its data are $u(x,0) = \sum_n A_n\sin(n\pi x/L)$ and $u_t(x,0)=\sum_n\omega_nB_n\sin(n\pi x/L)$: two uniformly convergent sine series whose coefficients are by construction the sine coefficients of $\varphi$ and of $\psi$. Each therefore sums to its own function, because a continuous function on $[0,L]$ all of whose sine coefficients vanish is zero (completeness of the sine system, :ref[Fourier series]{to=fourier.fourier-series}) and the difference between $\varphi$ and the sum of its series is such a function. Hence $u(x,0)=\varphi(x)$, $u_t(x,0)=\psi(x)$, and $u$ is a classical solution of (S).

The hypothesis holds as soon as the sine coefficients of $\varphi$ and $\psi$ are $O(n^{-3-\varepsilon})$ for some $\varepsilon>0$, which smoothness of the data (together with the compatibility of the data with the odd $2L$-periodic continuation that a sine series represents) delivers. Decay merely *faster* than $n^{-3}$ is not enough: $A_n = 1/(n^3\log n)$ is $o(n^{-3})$, yet $\sum n^2|A_n| = \sum 1/(n\log n)$ diverges. See :ref[smoothness and decay of Fourier coefficients]{to=fourier.smoothness-decay} and the convergence theorems of :ref[Fourier series]{to=fourier.fourier-series}. When it fails — a plucked string with a corner is the standard case — the series still converges to the function that d'Alembert's formula produces from the periodically extended data, which is a weak and not a classical solution; the uniqueness theorem of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy} guarantees that whenever the series is a classical solution, it is *the* solution.
:::

:::remark[Reading the hypotheses, and the other boundary conditions]{provenance=original}
- *Where the boundary conditions are used.* Only in Steps 2–6, and they do all the work: without them every $\lambda \in \mathbb{C}$ is admissible and there are no discrete frequencies. This is why an infinite string has a continuum of modes ($e^{i(kx-\omega t)}$ for every real $k$, with $\omega = ck$) and a finite one has a discrete spectrum. The quantisation is a consequence of confinement, not of the equation.
- *Why $\lambda>0$ matters physically.* In the convention fixed above, $X''+\lambda X=0$ and $T''+c^2\lambda T=0$, a negative or complex $\lambda$ would make $T$ grow exponentially. This is Strauss's convention, and the conclusion reads $\lambda>0$. **Beware the sign.** Stein and Shakarchi write the separated equations with the opposite sign, $\phi''-\lambda\phi=0$ and $\psi''-\lambda\psi=0$ (p. 12), so their $\lambda$ is the negative of the $\lambda$ used throughout this unit. In their convention the admissible case is $\lambda<0$, written $\lambda=-m^2$, and what they reject is $\lambda\ge0$, on the ground that the time factor would then not oscillate. Translated into our sign that is the same conclusion, $\lambda>0$, reached by a different route; only Strauss's route also rules out complex $\lambda$, which is what Step 5 above does.
- *Standing waves are pairs of travelling waves.* By $2\sin a\cos b = \sin(a-b)+\sin(a+b)$,
 $$
 \sin\frac{n\pi x}{L}\cos\omega_n t
 = \frac12\sin\frac{n\pi(x-ct)}{L} + \frac12\sin\frac{n\pi(x+ct)}{L} ,
 $$
 a right-moving and a left-moving wave of half the amplitude — exactly the decomposition of :ref[d'Alembert's formula]{to=pde.dalembert}. Arfken makes the converse remark that the totality of the separated solutions carries the same content as the travelling-wave solutions, and the difference between a standing and a travelling wave is that the nodes of the former do not move. Strauss records that it took half a century to settle the relation between the series solution and d'Alembert's.
- *Free ends.* With Neumann conditions $u_x(0,t)=u_x(L,t)=0$ the same calculation gives $X_n = \cos(n\pi x/L)$ and $\lambda_n = (n\pi/L)^2$ — but now, as Strauss stresses, $n = 0$ *is* an eigenvalue, with the constant eigenfunction, and then $T''=0$ gives $T = A + Bt$. So the free-ended string has an extra solution $\tfrac12A_0 + \tfrac12B_0t$ describing uniform translation at constant speed, which the clamped string does not. Omitting it is the commonest error in applying the method to Neumann problems.
- *How the frequencies scale with $L$ and $\tau$.* Replacing $L$ by $L/2$ (clamping the midpoint) doubles every frequency, raising the note by an octave; increasing the tension $\tau$ raises all frequencies as $\sqrt\tau$. Both are immediate from $\omega_n = (n\pi/L)\sqrt{\tau/\rho}$ and both are what a player does.
:::

:::example[A plucked string, exactly]{provenance=original}
Take a steel string with

$$
L = 0.650\ \mathrm{m}, \qquad \tau = 80\ \mathrm{N}, \qquad \rho = 5.0\times10^{-3}\ \mathrm{kg\,m^{-1}},
$$

so $c = \sqrt{80/0.005} = 126.491\ \mathrm{m\,s^{-1}}$, $\omega_1 = \pi c/L = 611.36\ \mathrm{rad\,s^{-1}}$, and the fundamental is $f_1 = c/2L = 97.301\ \mathrm{Hz}$ — a little *below* G${}_2$, which in equal temperament with A${}_4 = 440\ \mathrm{Hz}$ is $97.999\ \mathrm{Hz}$, so the string is flat by $12.4$ cents. The period is $T_1 = 2L/c = 10.277\ \mathrm{ms}$.

Draw the string into the shape

$$
\varphi(x) = h\sin^3\frac{\pi x}{L}, \qquad h = 3.00\ \mathrm{mm},
$$

and release it from rest, so $\psi \equiv 0$. (This profile vanishes at both ends together with its first two derivatives, so it is compatible with the clamped ends to high order.)

1. *The coefficients, in closed form.* The identity $\sin^3\theta = \tfrac14\bigl(3\sin\theta - \sin3\theta\bigr)$ gives
 $$
 \varphi(x) = \frac{3h}{4}\sin\frac{\pi x}{L} - \frac{h}{4}\sin\frac{3\pi x}{L},
 $$
 already a finite sine series. By the orthogonality of Step 7 the coefficients are read off:
 $$
 A_1 = \frac{3h}{4} = 2.25\ \mathrm{mm}, \qquad A_3 = -\frac{h}{4} = -0.75\ \mathrm{mm},
 $$
 all other $A_n = 0$ and all $B_n = 0$ since $\psi\equiv0$. (Evaluating the integral in (C) directly for $n=1,\dots,6$ confirms $3h/4,\,0,\,-h/4,\,0,\,0,\,0$.)
2. *The solution.* Because the series is finite, no convergence question arises and
 $$
 u(x,t) = \frac{3h}{4}\sin\frac{\pi x}{L}\cos\omega_1 t \;-\; \frac{h}{4}\sin\frac{3\pi x}{L}\cos 3\omega_1 t
 $$
 is an exact classical solution of (S).
3. *Checks.* At $t=0$ and $x=L/2$: $\sin(\pi/2)=1$ and $\sin(3\pi/2)=-1$, so $u = \tfrac{3h}{4} + \tfrac{h}{4} = h = 3.00\ \mathrm{mm}$, the full initial displacement. At $t = T_1/4$ both $\cos\omega_1t = \cos(\pi/2)$ and $\cos3\omega_1t = \cos(3\pi/2)$ vanish, so the string is *instantaneously straight* and all of its energy is kinetic. At $t = T_1/6 = 1.7129\ \mathrm{ms}$ we have $\omega_1t = \pi/3$ and $3\omega_1t=\pi$, so
 $$
 u\Bigl(\frac{L}{2},\frac{T_1}{6}\Bigr) = \frac{3h}{4}\cdot\frac12 - \frac{h}{4}\cdot(-1)\cdot(-1) = \frac{3h}{8} - \frac{h}{4} = \frac{h}{8} = 0.375\ \mathrm{mm}.
 $$
4. *Which harmonics sound.* Only $n=1$ and $n=3$ are excited: the timbre is a fundamental at $97.30\ \mathrm{Hz}$ plus a third harmonic at $291.9\ \mathrm{Hz}$ at one third of the amplitude. Every even harmonic is missing, and that is no accident: $\varphi$ is symmetric about the midpoint $x=L/2$, while $\sin(n\pi x/L)$ for even $n$ is antisymmetric about it, so the integral in (C) cancels in pairs. Plucking at the centre always kills the even harmonics, by this symmetry. The familiar triangular pluck, with apex height $h$ at $x=d$, shows the same effect from the other side: its coefficients work out to $A_n = 2hL^2\sin(n\pi d/L)\big/\bigl(\pi^2n^2d(L-d)\bigr)$, so plucking at $x = L/m$ silences every mode whose index is a multiple of $m$.
5. *Energy.* By the mode-by-mode formula of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy},
 $$
 E = \frac{\tau\pi^2}{4L}\sum_n n^2A_n^2 = \frac{80\pi^2}{4(0.650)}\Bigl[(2.25\times10^{-3})^2 + 9(0.75\times10^{-3})^2\Bigr] = 3.075\times10^{-3}\ \mathrm{J},
 $$
 and this is constant in time although the shape is not.
:::

:::application{provenance=adapted src="strauss-2008:§4.1, Eq. (12) and the fundamental and overtones, p. 87, and §4.1 Exercise 1(a), p. 89; stein-shakarchi-2003:Ch. 1 §1, pp. 13–14; hassani-2013:§13.1, pp. 396–397"}
**Musical acoustics.** The whole theory of pitched instruments is in (M): the frequencies of a clamped string are exact integer multiples of the fundamental, which is why a string sounds a definite note rather than a noise, and the relative sizes of the $A_n$ and $B_n$ are the timbre. Where the string is plucked or struck decides which modes are excited, as the example shows; a bridge or a finger placed at a node of a mode leaves that mode untouched, which is the physics of harmonics on a guitar. Strauss's exercise about the violin string clamped at its midpoint (§4.1, Exercise 1(a), p. 89) — the note rises by exactly one octave — is the statement that halving $L$ doubles every $\omega_n$.

**Everything else that is confined.** The same three steps — separate, find the eigenvalues forced by the boundary conditions, superpose — solve the heat equation in a rod (with $e^{-\lambda_n kt}$ in place of the oscillating factor), the Schrodinger equation for a particle in a box (whose energies $E_n \propto n^2$ are Strauss's $\lambda_n$ in disguise), and the Klein-Gordon equation; Hassani separates all four in one calculation. Modes of a drum, a cavity, an optical fibre and a planet all come from the same recipe in other coordinate systems (:ref[separation of variables in standard coordinates]{to=pde.separation-of-variables}), where the eigenfunctions are Bessel functions or spherical harmonics instead of sines.

**Numerics and signal processing.** Expanding in modes *is* the discrete sine transform, so a numerical spectral method for (S) advances each coefficient by an exact rotation at frequency $\omega_n$ rather than by a time-stepping rule, at the price of needing the eigenfunctions in closed form (:ref[spectral methods]{to=num.spectral-methods}). Conversely, measuring the frequencies of a vibrating object and comparing them with $\omega_n = (n\pi/L)\sqrt{\tau/\rho}$ is how tension, stiffness or a hidden crack is inferred in non-destructive testing: the forward problem here is the one solved above, and the inverse problem is to deduce the operator from its spectrum.

**Where it leads.** The orthogonality and completeness used in Step 7 are not accidents of the sine function: they hold for every regular Sturm-Liouville problem (:ref[Sturm-Liouville eigenvalue problems]{to=ode.sturm-liouville-theory}, :ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}), which is the general reason the method works, and the mode expansion of a Green's function in :ref[eigenfunction expansion of Green's functions]{to=green.eigenfunction-expansion-green} is the same decomposition applied to a forced problem.
:::
