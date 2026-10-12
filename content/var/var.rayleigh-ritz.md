---
id: var.rayleigh-ritz
title: The Rayleigh-Ritz method
kind: method
level: core
summary: Restricting the Rayleigh quotient to the span of N trial functions turns a Sturm-Liouville eigenvalue problem into a small matrix problem K c = Lambda M c whose eigenvalues are guaranteed upper bounds for the first N eigenvalues and decrease to them as the trial space grows.
prereqs: [var.variational-eigenvalues, linalg.normal-modes]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "Ch. 11, §11.2: trial functions and the quotient bound (pp. 304–305), Rayleigh–Ritz approximation and its informal derivation (pp. 305–307), minimax principle (pp. 307–308)"
    pages: "304-308"
    role: the matrices A, B and the determinant equation; upper-bound property via the minimax principle
  - work: stakgold-holst-2011
    loc: "§6.5, Ritz–Rayleigh procedure, Thm 6.5.3 (Poincaré) and Remarks 2–4, 6, pp. 397–400"
    pages: "397-400"
    role: comparison of each Ritz value with the corresponding eigenvalue; convergence as the trial space grows; conditioning of the basis
  - work: gelfand-fomin-1963
    loc: "Ch. 8, §40.1, Ritz method and its convergence theorem, pp. 195–196"
    pages: "195-196"
    role: monotonicity in N and convergence of the lowest Ritz value for a complete sequence of trial functions
  - work: rhb-2006
    loc: "§22.7, pp. 792–793"
    pages: "792-793"
    role: the eigenvalue error is quadratic in the eigenfunction error
  - work: arfken-2013
    loc: "§22.4, Rayleigh–Ritz technique and Example 22.4.5, pp. 1117–1121"
    pages: "1117-1121"
    role: quadratic error of the quotient; linear parameters reduce the problem to a matrix eigenvalue problem
---

:::definition{provenance=adapted src="strauss-2008:§11.2, pp. 305–307"}
Use the setting of :ref[the variational characterization]{to=var.variational-eigenvalues}: the problem $-(p u')' + q u = \lambda w u$ on $[a, b]$ with $u(a) = u(b) = 0$, the energy $D[u, v] = \int_a^b (p u' v' + q u v)\, dx$, the weighted inner product $(u, v)_w$, the space $\mathcal{A}$ of continuous, piecewise $C^1$ functions vanishing at both ends, and eigenvalues $\lambda_1 < \lambda_2 < \cdots$.

Choose $N$ linearly independent **trial functions** $\psi_1, \dots, \psi_N \in \mathcal{A}$ and let $V_N$ be their span. The **Ritz matrices** are the $N \times N$ symmetric matrices

$$
K_{ij} = D[\psi_i, \psi_j] = \int_a^b \bigl( p\, \psi_i' \psi_j' + q\, \psi_i \psi_j \bigr)\, dx,
\qquad
M_{ij} = (\psi_i, \psi_j)_w = \int_a^b w\, \psi_i \psi_j\, dx .
$$

$M$ is the Gram matrix of independent functions in the inner product $(\cdot, \cdot)_w$, hence positive definite. For $u = \sum_i c_i \psi_i$,

$$
\mathcal{R}[u] = \frac{c^{\mathsf T} K c}{c^{\mathsf T} M c} .
$$

The **Ritz values** $\Lambda_1^{(N)} \le \cdots \le \Lambda_N^{(N)}$ are the roots of $\det(K - \Lambda M) = 0$, that is, the eigenvalues of the pencil $K c = \Lambda M c$. If $c^{(k)}$ is an eigenvector for $\Lambda_k^{(N)}$, then $\sum_i c^{(k)}_i \psi_i$ is the $k$-th **Ritz function**.
:::

:::statement{provenance=adapted src="stakgold-holst-2011:Thm 6.5.3 and Remark 4, pp. 398–400; gelfand-fomin-1963:§40.1, Theorem, p. 196"}
1. *(Upper bounds.)* $\lambda_k \le \Lambda_k^{(N)}$ for $k = 1, \dots, N$. In particular $\Lambda_1^{(N)} = \min_{V_N \setminus \{0\}} \mathcal{R}$ is an upper bound for $\lambda_1$, with equality exactly when $\varphi_1 \in V_N$.
2. *(Monotonicity.)* If $V_N \subset V_{N+1}$, then $\Lambda_k^{(N+1)} \le \Lambda_k^{(N)}$ for $k \le N$.
3. *(Convergence, statement.)* Let $\psi_1, \psi_2, \dots$ be an infinite sequence in $\mathcal{A}$ that is **complete in energy**: for every $u \in \mathcal{A}$ and every $\epsilon > 0$ there are $N$ and $g \in V_N$ with $\int_a^b \bigl( (u' - g')^2 + (u - g)^2 \bigr)\, dx < \epsilon$. Then $\Lambda_k^{(N)} \downarrow \lambda_k$ as $N \to \infty$, for each fixed $k$.
:::

:::idea{provenance=original}
A Ritz value is a min-max of the Rayleigh quotient taken over subspaces of $V_N$ only. The true eigenvalue is the same min-max over subspaces of all of $\mathcal{A}$. Minimizing over fewer subspaces can only give a larger answer, so every Ritz value lies above the eigenvalue it approximates. Enlarging $V_N$ lets the min-max see more subspaces and pushes the Ritz values down. If the trial spaces eventually approximate everything, they approximate the true eigenfunctions, and the Ritz values close in.
:::

:::proof{provenance=adapted src="strauss-2008:§11.2, proof of Thm 1, pp. 307–308; stakgold-holst-2011:proof of Thm 6.5.3, p. 399; gelfand-fomin-1963:§40.1, proof of the Theorem, p. 196"}
1. *The pencil.* Since $K$ is symmetric and $M$ is symmetric positive definite, :ref[the generalized eigenvalue problem]{to=linalg.normal-modes} $K c = \Lambda M c$ has real eigenvalues $\Lambda_1^{(N)} \le \dots \le \Lambda_N^{(N)}$ and eigenvectors $e_1, \dots, e_N$ with $e_i^{\mathsf T} M e_j = \delta_{ij}$.
2. *Part 1.* Fix $k \le N$ and let $W_k$ be the set of functions $\sum_i c_i \psi_i$ with $c \in \operatorname{span}\{e_1, \dots, e_k\}$. Because the $\psi_i$ are independent, $W_k$ is a $k$-dimensional subspace of $\mathcal{A}$. Writing $c = \sum_{j \le k} d_j e_j$ gives $c^{\mathsf T} K c = \sum_{j \le k} \Lambda_j^{(N)} d_j^2$ and $c^{\mathsf T} M c = \sum_{j \le k} d_j^2$, so $\max_{W_k} \mathcal{R} = \Lambda_k^{(N)}$. The min-max characterization (Part 3 of the variational-characterization unit) gives $\lambda_k \le \max_{W_k} \mathcal{R} = \Lambda_k^{(N)}$. For $k = 1$, the case of equality is the equality case of $\mathcal{R} \ge \lambda_1$: the minimum over $V_N$ equals $\lambda_1$ exactly when some multiple of $\varphi_1$ lies in $V_N$.
3. *Part 2.* The proof of the min-max formula, repeated word for word for the pencil, shows $\Lambda_k^{(N)} = \min \max_{W} \mathcal{R}$ over $k$-dimensional subspaces $W \subset V_N$. Every such $W$ is also a subspace of $V_{N+1}$, so the minimum over subspaces of $V_{N+1}$ is no larger.
4. *Part 3 for $k = 1$.* By Part 2, $\Lambda_1^{(N)}$ decreases, and it is bounded below by $\lambda_1$. Since $p, q, w$ are bounded and $\|\varphi_1\|_w = 1$, the numerator and denominator of $\mathcal{R}$ depend continuously on $u$ with respect to $\int \bigl( (u')^2 + u^2 \bigr)$, so $\mathcal{R}$ is continuous at $\varphi_1$ in that sense. Given $\epsilon > 0$, completeness in energy gives $g \in V_N$ so close to $\varphi_1$ that $\mathcal{R}[g] < \lambda_1 + \epsilon$. Then $\lambda_1 \le \Lambda_1^{(N')} \le \mathcal{R}[g] < \lambda_1 + \epsilon$ for all $N' \ge N$. The case $k \ge 2$ uses the same idea with $k$-dimensional subspaces close to $\operatorname{span}\{\varphi_1, \dots, \varphi_k\}$, and we only state it. $\square$
:::

:::method{provenance=adapted src="strauss-2008:§11.2, pp. 305–307; stakgold-holst-2011:§6.5, Remark 6, p. 400"}
1. **Write the problem in Sturm–Liouville form.** Identify $p$, $q$, $w$ and the boundary conditions, and write down $D$ and $\mathcal{R}$. For Robin or Neumann conditions, use the modified quotient described in the variational-characterization unit.
2. **Choose trial functions.** They must satisfy the Dirichlet (essential) conditions; Neumann and Robin conditions are natural and need not be imposed. Use independent functions shaped like the modes you expect. Polynomials times a factor that vanishes at the ends, sines, or piecewise-linear "hat" functions are standard. Prefer nearly orthogonal families: raw monomials make $M$ badly conditioned when $N$ is large.
3. **Assemble** $K_{ij} = D[\psi_i, \psi_j]$ and $M_{ij} = (\psi_i, \psi_j)_w$, exactly or by accurate quadrature.
4. **Solve** $K c = \Lambda M c$, for example with a symmetric generalized eigensolver (`scipy.linalg.eigh(K, M)`), or by hand from $\det(K - \Lambda M) = 0$ when $N \le 2$.
5. **Read off** the bounds $\lambda_k \le \Lambda_k^{(N)}$ and the Ritz functions $\sum_i c^{(k)}_i \psi_i$ as approximate eigenfunctions.
6. **Refine.** Add trial functions so that the spaces are nested, and watch $\Lambda_k^{(N)}$ decrease. Stop when successive values agree to the accuracy you need. The method gives only upper bounds; a lower bound needs a different argument, such as comparison through the min-max principle.
:::

:::remark{provenance=adapted src="rhb-2006:§22.7, p. 793; arfken-2013:§22.4, p. 1119"}
**Why few trial functions give good eigenvalues.** Write a trial function as $u = \varphi_1 + e$ with $(e, \varphi_1)_w = 0$. By step 1 of the variational-characterization proof, $D[\varphi_1, e] = \lambda_1 (\varphi_1, e)_w = 0$. Hence $D[u] = \lambda_1 + D[e]$ and $\|u\|_w^2 = 1 + \|e\|_w^2$, and exactly

$$
\mathcal{R}[u] - \lambda_1 = \frac{D[e] - \lambda_1 \|e\|_w^2}{1 + \|e\|_w^2} .
$$

The numerator is nonnegative by the variational characterization, since $e$ is orthogonal to $\varphi_1$. The error in the eigenvalue is quadratic in the error $e$ of the eigenfunction. For example, if $\|e\|_w = 0.1$, the eigenvalue error is $0.01\,(\mathcal{R}[e] - \lambda_1)/1.01$, about one hundredth of the gap between $\mathcal{R}[e]$ and $\lambda_1$. The Ritz functions themselves converge more slowly than the Ritz values.
:::

:::example{provenance=original}
**Variable stiffness.** Estimate the first two eigenvalues of

$$
-\bigl( (1 + x)\, u' \bigr)' = \lambda u \quad \text{on } [0, 1], \qquad u(0) = u(1) = 0,
$$

so $p = 1 + x$, $q = 0$, $w = 1$. Take $\psi_1 = x(1 - x)$ and $\psi_2 = x^2(1 - x)$, which vanish at both ends, so $\psi_1' = 1 - 2x$ and $\psi_2' = 2x - 3x^2$.

*One trial function.* $K_{11} = \int_0^1 (1 + x)(1 - 2x)^2\, dx = \tfrac13 + \tfrac16 = \tfrac12$ and $M_{11} = \int_0^1 x^2 (1 - x)^2\, dx = \tfrac{1}{30}$. So $\lambda_1 \le \Lambda_1^{(1)} = 15$.

*Two trial functions.* The remaining integrals are polynomial:

$$
K = \begin{pmatrix} \tfrac12 & \tfrac{17}{60} \\[2pt] \tfrac{17}{60} & \tfrac{7}{30} \end{pmatrix},
\qquad
M = \begin{pmatrix} \tfrac{1}{30} & \tfrac{1}{60} \\[2pt] \tfrac{1}{60} & \tfrac{1}{105} \end{pmatrix}.
$$

Expanding the determinant,

$$
\det(K - \Lambda M) = \frac{\Lambda^2}{25200} - \frac{13\Lambda}{4200} + \frac{131}{3600}
= \frac{\Lambda^2 - 78\Lambda + 917}{25200},
$$

so $\Lambda^{(2)}_{1,2} = 39 \mp 2\sqrt{151} \approx 14.4236$ and $63.5764$.

*Exact values.* With $t = 1 + x$ the equation becomes $(t u_t)_t + \lambda u = 0$, solved by $J_0(2\sqrt{\lambda t})$ and $Y_0(2\sqrt{\lambda t})$. The boundary conditions at $t = 1$ and $t = 2$ give the eigenvalue condition

$$
J_0(2\sqrt{\lambda})\, Y_0(2\sqrt{2\lambda}) - J_0(2\sqrt{2\lambda})\, Y_0(2\sqrt{\lambda}) = 0,
$$

whose first two roots are $\lambda_1 \approx 14.33767$ and $\lambda_2 \approx 57.48028$. Adding $x^3(1 - x)$ and $x^4(1 - x)$ to the basis, computed the same way, gives the table below.

| $N$ | $\Lambda_1^{(N)}$ | $\Lambda_2^{(N)}$ |
|---|---|---|
| 1 | 15 | — |
| 2 | 14.4236 | 63.5764 |
| 3 | 14.3467 | 59.7992 |
| 4 | 14.33773 | 57.7910 |
| exact | 14.33767 | 57.48028 |

Every entry lies above the exact value and decreases with $N$, as Parts 1 and 2 require. The lowest Ritz value is already within $0.6\%$ at $N = 2$, while the second is $10.6\%$ high. This is typical: with a fixed basis, the higher Ritz values are less accurate.
:::

:::application{provenance=original}
- **Quantum chemistry.** Expanding a wavefunction in a finite basis of atomic orbitals and diagonalizing the Hamiltonian matrix is the Rayleigh–Ritz method with $M$ the overlap matrix. Part 1 guarantees that each computed level lies above the true one (the Hylleraas–Undheim–MacDonald theorem for excited states), so a larger basis can only improve the energies.
- **Structural dynamics and buckling.** Engineers estimate natural frequencies and critical buckling loads of beams, plates and frames from a few assumed mode shapes. The guaranteed upper bound on a frequency means the estimate errs on a known side.
- **Finite elements.** With piecewise-linear hat functions as trial functions, the Ritz matrices become the sparse stiffness and mass matrices of the :ref[finite element method]{to=num.finite-elements}. The upper-bound and convergence statements of this unit then apply to finite-element eigenvalues computed on nested meshes.
:::
