---
id: var.variational-eigenvalues
title: Variational characterization of eigenvalues
kind: theorem
level: core
summary: The eigenvalues of a regular Sturm-Liouville problem are the successive minima of the Rayleigh quotient, and each one is also a min-max over subspaces, which gives upper bounds and comparison theorems without solving the equation.
prereqs: [var.isoperimetric-problems, ode.sturm-liouville-theory, ode.eigenfunction-expansions]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "Ch. 11, §11.1 Thms 1–2 (pp. 300–303), §11.2 Thm 1, minimax principle (pp. 307–308), §11.3 energy identity in the completeness proof (pp. 311–313), §11.4 Rayleigh quotient with variable coefficients and Robin/Neumann cases (pp. 314–315), §11.6 Thm 2, maximin principle (pp. 324–325)"
    pages: "300-315, 324-325"
    role: statements of the minimum, minimax and maximin principles; energy identity for the remainder of an eigenfunction expansion; proof route for the min-max bound
  - work: gelfand-fomin-1963
    loc: "Ch. 8, §41.1, p. 198"
    pages: "198"
    role: the Sturm-Liouville equation as the Euler equation of a constrained quadratic functional
  - work: rhb-2006
    loc: "§22.6, pp. 791–792, and §22.7, p. 793"
    pages: "791-793"
    role: the value of the quotient at an eigenfunction equals the eigenvalue; expanding a trial function in eigenfunctions so that the quotient is a weighted average of eigenvalues
---

:::definition{provenance=adapted src="strauss-2008:§11.1, p. 300, and §11.4, p. 314"}
Consider the **regular Sturm–Liouville problem** with Dirichlet conditions

$$
-(p u')' + q u = \lambda\, w\, u \quad \text{on } [a, b], \qquad u(a) = u(b) = 0,
$$

where $p \in C^1[a, b]$, $q, w \in C[a, b]$, and $p > 0$, $w > 0$ on $[a, b]$. Write $(u, v)_w = \int_a^b w\, u\, v\, dx$ and $\|u\|_w^2 = (u, u)_w$. By :ref[Sturm–Liouville theory]{to=ode.sturm-liouville-theory} and the :ref[expansion theorem]{to=ode.eigenfunction-expansions}, the eigenvalues are real and simple and form a sequence $\lambda_1 < \lambda_2 < \cdots \to \infty$. Their eigenfunctions $\varphi_n$ can be chosen real, in $C^2$, with $(\varphi_m, \varphi_n)_w = \delta_{mn}$, and complete: every continuous $u$ satisfies Parseval's identity $\sum_n (u, \varphi_n)_w^2 = \|u\|_w^2$.

A **trial function** is a continuous, piecewise $C^1$ function $u$ on $[a, b]$ with $u(a) = u(b) = 0$ and $u \not\equiv 0$. Let $\mathcal{A}$ be the set of trial functions together with $0$; it is a vector space. The **energy** and the **Rayleigh quotient** are

$$
D[u, v] = \int_a^b \bigl( p\, u' v' + q\, u v \bigr)\, dx, \qquad
D[u] = D[u, u], \qquad
\mathcal{R}[u] = \frac{D[u]}{\|u\|_w^2} .
$$
:::

:::statement{provenance=adapted src="strauss-2008:§11.1 Thms 1–2, pp. 301–303, and §11.2 Thm 1 (minimax principle), pp. 307–308"}
Under the hypotheses above:

1. *(Ground state.)* $\mathcal{R}[u] \ge \lambda_1$ for every trial function $u$, with equality exactly when $u$ is a multiple of $\varphi_1$. So $\lambda_1 = \min \mathcal{R}$.
2. *(Higher eigenvalues.)* If $u$ is a trial function with $(u, \varphi_k)_w = 0$ for $k = 1, \dots, n - 1$, then $\mathcal{R}[u] \ge \lambda_n$, with equality exactly when $u$ is a multiple of $\varphi_n$.
3. *(Courant–Fischer min-max.)* For each $n$,
   $$
   \lambda_n = \min_{\substack{V \subset \mathcal{A} \\ \dim V = n}} \ \max_{u \in V \setminus \{0\}} \mathcal{R}[u],
   $$
   and the minimum is attained at $V = \operatorname{span}\{\varphi_1, \dots, \varphi_n\}$. Equivalently, $\lambda_n$ is the largest value, over all choices of $n - 1$ continuous functions $v_1, \dots, v_{n-1}$ on $[a, b]$, of the infimum of $\mathcal{R}$ over trial functions $w$-orthogonal to all $v_k$. The largest value is attained at $v_k = \varphi_k$, where the infimum is a minimum (this form is stated here without proof).
:::

:::idea{provenance=adapted src="gelfand-fomin-1963:§41.1, p. 198; rhb-2006:§22.6, pp. 791–792, and §22.7, p. 793"}
Minimizing the energy $D[u]$ subject to $\|u\|_w^2 = 1$ is an :ref[isoperimetric problem]{to=var.isoperimetric-problems}. Its Euler–Lagrange equation with multiplier $\lambda$ is exactly $-(p u')' + q u = \lambda w u$, and multiplying by $u$ and integrating shows that the minimum value equals the multiplier. So a minimizer, if one exists, is an eigenfunction, and the minimum is an eigenvalue. To avoid the question of existence, the proof goes the other way. We expand an arbitrary trial function in eigenfunctions, with coefficients $c_n$. Then the energy is at least $\sum \lambda_n c_n^2$ while the norm is $\sum c_n^2$, so the quotient is at least a weighted average of the eigenvalues, and hence at least the smallest one.
:::

:::proof{provenance=adapted src="strauss-2008:§11.3, proof of Thm 2, pp. 311–313, and §11.2, proof of Thm 1, p. 308"}
1. *Energy against an eigenfunction.* For $u \in \mathcal{A}$ and every $n$,
   $$
   D[u, \varphi_n] = \lambda_n\, (u, \varphi_n)_w .
   $$
   Integrate $\int p\, u' \varphi_n'$ by parts on each interval where $u$ is $C^1$. The interior boundary terms cancel because $u$ and $p \varphi_n'$ are continuous, and the end terms vanish because $u(a) = u(b) = 0$. This leaves $D[u, \varphi_n] = \int_a^b u\, \bigl( -(p \varphi_n')' + q \varphi_n \bigr)\, dx = \lambda_n \int_a^b w\, u\, \varphi_n\, dx$. In particular $D[\varphi_m, \varphi_n] = \lambda_n \delta_{mn}$.
2. *Making the energy nonnegative.* Pick $\kappa \ge 0$ with $q + \kappa w \ge 0$ on $[a, b]$, possible because $w$ has a positive minimum. Then $D_\kappa[u] = D[u] + \kappa \|u\|_w^2 = \int (p u'^2 + (q + \kappa w) u^2)\, dx \ge 0$ for all $u \in \mathcal{A}$, since $p > 0$. Step 1 holds for $D_\kappa$ with $\lambda_n + \kappa$ in place of $\lambda_n$.
3. *The energy dominates partial sums.* For a trial function $u$ let $c_n = (u, \varphi_n)_w$ and $u_N = \sum_{n \le N} c_n \varphi_n$, which lies in $\mathcal{A}$. Expanding by bilinearity and using step 1 with orthonormality,
   $$
   0 \le D_\kappa[u - u_N] = D_\kappa[u] - 2\sum_{n \le N} c_n (\lambda_n + \kappa) c_n + \sum_{n \le N} (\lambda_n + \kappa) c_n^2 = D_\kappa[u] - \sum_{n \le N} (\lambda_n + \kappa)\, c_n^2 .
   $$
4. *Parts 1 and 2.* Suppose $c_k = 0$ for $k < n$ (no condition when $n = 1$). Since $\lambda_k \ge \lambda_n$ for $k \ge n$, step 3 gives $D_\kappa[u] \ge (\lambda_n + \kappa) \sum_{k \le N} c_k^2$. Letting $N \to \infty$ and using Parseval, $D_\kappa[u] \ge (\lambda_n + \kappa) \|u\|_w^2$, that is, $\mathcal{R}[u] \ge \lambda_n$. The value at $\varphi_n$ is $D[\varphi_n] = \lambda_n$ by step 1, so the bound is attained.
5. *Equality.* If $\mathcal{R}[u] = \lambda_n$, then splitting off the gap $\lambda_{n+1} - \lambda_n > 0$ in step 3 gives
   $$
   (\lambda_n + \kappa)\|u\|_w^2 \ge (\lambda_n + \kappa) \sum_{k \le N} c_k^2 + (\lambda_{n+1} - \lambda_n) \sum_{n < k \le N} c_k^2 .
   $$
   As $N \to \infty$ the first sum tends to $\|u\|_w^2$, so $c_k = 0$ for all $k > n$. By Parseval $\|u - c_n \varphi_n\|_w^2 = \sum_{k \ne n} c_k^2 = 0$. Since $w > 0$ and both functions are continuous, $u = c_n \varphi_n$. Simplicity of the eigenvalues, which makes the gap positive, is used here.
6. *Part 3, lower bound.* Let $V \subset \mathcal{A}$ have dimension $n$. The $n - 1$ linear conditions $(u, \varphi_k)_w = 0$, $k < n$, on the $n$-dimensional space $V$ have a nonzero solution $u$, and Part 2 gives $\max_V \mathcal{R} \ge \mathcal{R}[u] \ge \lambda_n$. The maximum exists: since $w > 0$ and the elements of $V$ are continuous, $\|\cdot\|_w$ is a norm on $V$, and $\mathcal{R}$ is unchanged by scaling, so it suffices to maximize the continuous function $D$ on the unit sphere of $V$, which is compact because $V$ is finite-dimensional.
7. *Part 3, attainment.* For $u = \sum_{k \le n} d_k \varphi_k \ne 0$, step 1 gives $D[u] = \sum_{k \le n} \lambda_k d_k^2$ and $\|u\|_w^2 = \sum_{k \le n} d_k^2$. So $\mathcal{R}[u] \le \lambda_n$, with equality at $u = \varphi_n$. Hence $\max_V \mathcal{R} = \lambda_n$ for $V = \operatorname{span}\{\varphi_1, \dots, \varphi_n\}$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Boundary conditions.* They kill the end terms in step 1. If a trial function violates them, the bound fails. For $-u'' = \lambda u$ on $[0, \pi]$ with $u(0) = u(\pi) = 0$ we have $\lambda_1 = 1$, but the constant $u = 1$, which is not a trial function, gives $\mathcal{R} = 0$.
- *Completeness* (Parseval) turns the partial-sum inequality of step 3 into a statement about $u$ itself (steps 4–5). Without it, a trial function with a component outside the span of the eigenfunctions would escape the argument.
- *$p > 0$ and $w > 0$:* $p > 0$ makes $D_\kappa$ nonnegative (step 2), and $w > 0$ makes $(\cdot,\cdot)_w$ an inner product, so that zero norm forces zero function (step 5). They also underlie the regular Sturm–Liouville theory quoted in the definition.
- *Simplicity* of the eigenvalues is used only for the equality cases.

**Other boundary conditions.** For a Robin condition $p u' = \sigma u$ at $b$ (with $\sigma$ a constant), the Rayleigh quotient acquires the boundary term $-\sigma u(b)^2$ in $D$, and trial functions need not satisfy any condition at $b$. For the Neumann condition $u'(b) = 0$, trial functions are simply free at $b$: the condition is a :ref[natural boundary condition]{to=var.natural-boundary-conditions}, produced by the minimization itself :cite[]{work=strauss-2008 loc="§11.3 Thm 1, p. 310, and §11.4, p. 315"}.

**Comparison.** Since every $\lambda_n$ is a min-max of $\mathcal{R}$, a change that does not lower $\mathcal{R}[u]$ for any trial function does not lower any eigenvalue. This applies to increasing $p$ or $q$, and to shrinking the interval (a trial function on a subinterval, extended by zero, is a trial function on the larger one). Decreasing $w$ raises $\mathcal{R}[u]$ only when $D[u] > 0$. So it does not lower any eigenvalue when $q \ge 0$, because then $D[u] \ge \int_a^b p\, u'^2\, dx > 0$ for every trial function ($u' \not\equiv 0$, since $u$ vanishes at $a$ and is not identically zero). Without $q \ge 0$ this fails: $-u'' - 100 u = \lambda w u$ on $[0, \pi]$ with Dirichlet conditions has eigenfunctions $\sin nx$, with $\lambda_1 = -99$ for $w = 1$ but $\lambda_1 = -198$ for $w = \tfrac12$. The min-max gives only non-strict inequalities in all these comparisons.
:::

:::example{provenance=original}
**A string with linearly increasing density.** Take $-u'' = \lambda (1 + x) u$ on $[0, 1]$ with $u(0) = u(1) = 0$, so $p = 1$, $q = 0$ and $w = 1 + x$.

*Two-sided bounds from min-max.* For every trial function, $\int u^2 \le \int (1 + x) u^2 \le 2 \int u^2$, so

$$
\tfrac12\, \mathcal{R}_1[u] \le \mathcal{R}[u] \le \mathcal{R}_1[u],
$$

where $\mathcal{R}_1$ is the quotient for $-u'' = \lambda u$, whose eigenvalues are $n^2 \pi^2$. Taking the min-max of each side gives

$$
\tfrac12\, n^2 \pi^2 \le \lambda_n \le n^2 \pi^2, \qquad \text{so} \qquad 4.935 \le \lambda_1 \le 9.870 .
$$

*A sharper upper bound from one trial function.* With $u = \sin \pi x$: $\int_0^1 u'^2\, dx = \pi^2/2$, and since $\int_0^1 x \sin^2 \pi x\, dx = \tfrac14$, the weighted norm is $\int_0^1 (1 + x) \sin^2 \pi x\, dx = \tfrac12 + \tfrac14 = \tfrac34$. Hence

$$
\lambda_1 \le \mathcal{R}[\sin \pi x] = \frac{\pi^2/2}{3/4} = \frac{2\pi^2}{3} \approx 6.5797 .
$$

The exact value is $\lambda_1 \approx 6.5484$ (found by shooting: integrate from $x = 0$ with $u(0) = 0$, $u'(0) = 1$ and adjust $\lambda$ until $u(1) = 0$). The bound is $0.5\%$ high.

*A warning about higher eigenvalues.* The same computation with $\sin 2\pi x$ gives $\mathcal{R} = (2\pi^2)/(3/4) = 8\pi^2/3 \approx 26.319$, while $\lambda_2 \approx 26.465$. The quotient is *below* $\lambda_2$. There is no contradiction: $\sin 2\pi x$ is not $w$-orthogonal to $\varphi_1$, so Part 2 does not apply, and Part 1 only guarantees $26.319 \ge \lambda_1$. Upper bounds for $\lambda_2$ need a two-dimensional space of trial functions, as in :ref[the Rayleigh–Ritz method]{to=var.rayleigh-ritz}.
:::

:::application{provenance=original}
- **Vibrations.** For a string or a membrane the eigenvalues are squared frequencies, $\omega_n^2 = \lambda_n$ (up to the tension). Part 1 is Rayleigh's principle: the squared fundamental frequency $\omega_1^2$ is the minimum, over admissible shapes, of the ratio of potential energy to mass-weighted kinetic energy. When $q \ge 0$ (for instance a string on an elastic foundation), comparison says that stiffening a structure does not lower any frequency, and adding mass does not raise any.
- **Quantum mechanics.** For $H = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x)$ in a box, Part 1 states that the ground-state energy is the minimum of $(\psi, H\psi)/(\psi, \psi)$. Any normalized guess bounds it from above. Part 3 extends this to excited states without knowledge of the lower eigenfunctions.
- **Heat flow and diffusion.** The slowest decay rate of a solution of $w\, u_t = (p u_x)_x - q u$ with fixed ends is $\lambda_1$. Min-max bounds on $\lambda_1$ therefore bound the time a rod, or a diffusing population, takes to relax.
:::
