---
id: linalg.normal-modes
title: Generalized eigenproblems and normal modes
kind: application
level: core
summary: States the spectral theory of the pencil Ax = lambda Bx for Hermitian A and positive definite B, and applies it to the small oscillations of a conservative system, whose normal frequencies and normal modes are the eigenvalues and B-orthonormal eigenvectors of the pencil formed by the potential and kinetic energy matrices.
prereqs: [linalg.quadratic-forms, linalg.hermitian-spectral-theorem, linalg.determinants, linalg.unitary-orthogonal-matrices, linalg.gram-schmidt, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 9 introduction (kinetic and potential energy as quadratic forms, Eqs (9.1)-(9.2); the kinetic matrix is positive definite) pp. 316-317; §9.1 (the equation of motion (9.7), obtained there from conservation of energy, the eigenvalue equation (9.9)-(9.10), normal coordinates and normal equations (9.11)-(9.13), the linear-molecule example with a zero frequency) pp. 318-321; §9.3 (A- and B-orthogonality (9.16) and the quotient bound (9.19)) pp. 327-328"
    pages: "316-321, 327-328"
    role: the mechanical set-up and the symmetric form of the eigenvalue problem; the orthogonality relations for the pencil; the quotient bound; normal coordinates and the uncoupled normal equations
  - work: arfken-2013
    loc: "§6.5, Example 6.5.2 'Normal modes' and the preceding subsection 'Nonnormal Matrices', pp. 322-324"
    pages: "322-324"
    role: the alternative non-symmetric formulation obtained by dividing through by the masses, and the warning that the resulting matrix is not normal
---

:::definition[The generalized eigenvalue problem]{provenance=adapted src="rhb-2006:§9.1, Eqs (9.9)-(9.10), p. 319"}
Let $A$ and $B$ be Hermitian $n \times n$ matrices with $B$ **positive definite**. A number $\lambda \in \mathbb{C}$ is an **eigenvalue of the pencil** $(A, B)$ if

$$
A x = \lambda B x \qquad \text{for some } x \neq 0 ,
$$

and such an $x$ is a corresponding **eigenvector**. The equation $A x = \lambda B x$ has a non-zero solution exactly when $A - \lambda B$ is singular, that is exactly when

$$
\det(A - \lambda B) = 0 ,
$$

the **characteristic equation of the pencil**. That equivalence is just the singularity criterion and needs nothing of $B$; what invertibility of $B$ contributes is that the left-hand side is a polynomial in $\lambda$ of degree exactly $n$, so that the pencil has $n$ eigenvalues and not fewer (part 1 of the next statement). Two vectors $x, y$ are **$B$-orthogonal** if $y^\dagger B x = 0$; because $B$ is Hermitian positive definite, $(x, y)_B = y^\dagger B x$ is an inner product on $\mathbb{C}^n$, and $B$-orthogonality is orthogonality in it. Taking $B = I$ recovers the ordinary eigenproblem.
:::

:::statement[Spectral theorem for a definite pencil]{provenance=original}
Let $A$ be Hermitian and $B$ Hermitian positive definite, both $n \times n$. Then:

1. $\det(A - \lambda B)$ is a polynomial in $\lambda$ of degree exactly $n$, with leading coefficient $(-1)^n \det B \neq 0$; so the pencil has exactly $n$ eigenvalues counted with multiplicity, and all of them are **real**.
2. There is a basis $x^1, \dots, x^n$ of $\mathbb{C}^n$ with
$$
A x^k = \lambda_k B x^k , \qquad (x^j)^\dagger B\, x^k = \delta_{jk} , \qquad (x^j)^\dagger A\, x^k = \lambda_k \delta_{jk} .
$$
The eigenvectors are thus simultaneously $B$-orthonormal and $A$-orthogonal. If $A$ and $B$ are real symmetric, the $x^k$ may be taken real.
3. The problem is equivalent to an ordinary Hermitian eigenproblem: with $B^{1/2}$ the Hermitian positive definite square root of $B$, the matrix $C = B^{-1/2} A B^{-1/2}$ is Hermitian, and $A x = \lambda B x$ holds if and only if $C y = \lambda y$ with $y = B^{1/2} x$. In particular the pencil and $C$ have the same eigenvalues with the same multiplicities, and $x \mapsto B^{1/2}x$ carries a $B$-orthonormal eigenbasis of the pencil to an orthonormal eigenbasis of $C$. (A Cholesky factor $B = L L^\dagger$ serves equally well, with $C = L^{-1} A L^{-\dagger}$.)
4. **Quotient bounds.** With $\lambda_1 \le \cdots \le \lambda_n$,
$$
\lambda_1 \le \frac{x^\dagger A x}{x^\dagger B x} \le \lambda_n \qquad \text{for every } x \neq 0 ,
$$
both bounds attained, and the quotient is stationary at $x$ exactly when $x$ is an eigenvector of the pencil, with stationary value the corresponding eigenvalue. $A$ is positive definite if and only if every $\lambda_k > 0$, and positive semidefinite if and only if every $\lambda_k \ge 0$.
:::

:::idea{provenance=original}
A positive definite $B$ has a positive definite square root, so the substitution $y = B^{1/2}x$ is available and it is invertible. Under it the pencil equation $Ax = \lambda Bx$ becomes the ordinary eigenvalue equation $Cy = \lambda y$ for the Hermitian matrix $C = B^{-1/2}AB^{-1/2}$, and the $B$-inner product $(u,v)_B = v^\dagger B u$ becomes the ordinary one, since $(u,v)_B = (B^{1/2}v)^\dagger(B^{1/2}u)$. So the whole theorem — reality of the spectrum, the count, the double orthogonality, the quotient bounds — is :ref[the Hermitian spectral theorem]{to=linalg.hermitian-spectral-theorem} and :ref[the Rayleigh bounds]{to=linalg.quadratic-forms} transported through one change of variable. Definiteness of $B$ is what makes the square root, and hence the whole argument, exist; mere invertibility is not enough.
:::

:::proof{provenance=original}
**Step 1: the square root.** $B$ is Hermitian, so by :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem} $B = V\Delta V^\dagger$ with $V$ unitary and $\Delta = \operatorname{diag}(\beta_1,\dots,\beta_n)$ real; $B$ is positive definite, so by the eigenvalue test of :ref[]{to=linalg.quadratic-forms} every $\beta_k > 0$. Define
$$
B^{1/2} = V\,\operatorname{diag}\bigl(\sqrt{\beta_1},\dots,\sqrt{\beta_n}\bigr)\,V^\dagger .
$$
It is Hermitian, its eigenvalues $\sqrt{\beta_k}$ are positive so it is positive definite, $(B^{1/2})^2 = V\Delta V^\dagger = B$, and it is invertible with $B^{-1/2} = V\operatorname{diag}(\beta_k^{-1/2})V^\dagger$, also Hermitian. It is the only Hermitian positive definite square root: if $X$ is one, then $X$ has an orthonormal eigenbasis with positive eigenvalues $\gamma$, and $X^2 = B$ makes each such eigenvector an eigenvector of $B$ with eigenvalue $\gamma^2$; since $t \mapsto t^2$ is injective on the positive reals, $X$ must act as $\sqrt\beta$ on the eigenspace $E_\beta(B)$ for every $\beta$, which determines $X$ completely.

**Step 2: part 3, the reduction.** Put $C = B^{-1/2}AB^{-1/2}$. It is Hermitian, since $B^{-1/2}$ and $A$ are: $C^\dagger = B^{-1/2}A^\dagger B^{-1/2} = C$. Because $B^{1/2}CB^{1/2} = A$ and $B^{1/2}(\lambda I)B^{1/2} = \lambda B$,
$$
A - \lambda B = B^{1/2}\,(C - \lambda I)\,B^{1/2} . \tag{$\ast$}
$$
Hence, with $y = B^{1/2}x$ — a bijection of $\mathbb{C}^n$ carrying $0$ to $0$ and nothing else there —
$$
A x = \lambda B x \iff B^{1/2}(C-\lambda I)B^{1/2}x = 0 \iff (C - \lambda I)y = 0 \iff Cy = \lambda y ,
$$
the middle step because $B^{1/2}$ is invertible. For the Cholesky variant, if $B = LL^\dagger$ with $L$ invertible then $A - \lambda B = L(L^{-1}AL^{-\dagger} - \lambda I)L^\dagger$ by the same algebra, and $C' = L^{-1}AL^{-\dagger}$ is Hermitian; everything below goes through with $L^\dagger$ in place of $B^{1/2}$.

**Step 3: part 1.** Taking determinants in $(\ast)$ and using multiplicativity (:ref[]{to=linalg.determinants}),
$$
\det(A - \lambda B) = \bigl(\det B^{1/2}\bigr)^2\det(C-\lambda I) = \det B \cdot \det(C - \lambda I),
$$
the last equality because $\det B^{1/2}\det B^{1/2} = \det\bigl((B^{1/2})^2\bigr) = \det B$. Now $\det(C-\lambda I)$ is a polynomial in $\lambda$ of degree $n$ with leading coefficient $(-1)^n$, so $\det(A-\lambda B)$ is a polynomial of degree exactly $n$ with leading coefficient $(-1)^n\det B$, which is non-zero because $B$ is positive definite and hence $\det B > 0$. A polynomial of degree $n$ over $\mathbb{C}$ has exactly $n$ roots with multiplicity, and by step 2 those roots are the eigenvalues of the pencil; they are the eigenvalues of the Hermitian matrix $C$, with the same multiplicities, hence all real.

**Step 4: part 2.** By the spectral theorem $C$ has an orthonormal eigenbasis $y^1,\dots,y^n$, $Cy^k = \lambda_ky^k$. Put $x^k = B^{-1/2}y^k$. These are a basis of $\mathbb{C}^n$, being the images of a basis under an invertible matrix, and by step 2 they satisfy $Ax^k = \lambda_kBx^k$. Moreover, using that $B^{-1/2}$ is Hermitian,
$$
(x^j)^\dagger B\, x^k = (y^j)^\dagger B^{-1/2}B B^{-1/2} y^k = (y^j)^\dagger y^k = \delta_{jk},
$$
$$
(x^j)^\dagger A\, x^k = (y^j)^\dagger B^{-1/2}A B^{-1/2} y^k = (y^j)^\dagger C\, y^k = \lambda_k (y^j)^\dagger y^k = \lambda_k\delta_{jk} .
$$
So the $x^k$ are $B$-orthonormal and $A$-orthogonal at once. If $A$ and $B$ are real symmetric, then $V$ may be taken real orthogonal (part 6 of the spectral theorem), hence $B^{\pm 1/2}$ and $C$ are real symmetric, the $y^k$ may be taken real, and so may the $x^k$.

**Step 5: part 4, the bounds.** For $x \neq 0$ put $y = B^{1/2}x \neq 0$. Then
$$
x^\dagger A x = y^\dagger B^{-1/2}AB^{-1/2}y = y^\dagger C y , \qquad
x^\dagger B x = y^\dagger B^{-1/2}BB^{-1/2}y = y^\dagger y ,
$$
so the generalized quotient at $x$ equals the ordinary Rayleigh quotient $\mathcal{R}_C(y)$. The denominator $x^\dagger Bx = \|y\|^2$ is positive for $x \neq 0$, which is where positive definiteness of $B$ is needed to make the quotient defined at all. The Rayleigh bounds of :ref[]{to=linalg.quadratic-forms} now give $\lambda_1 \le \mathcal{R}_C(y) \le \lambda_n$ with both bounds attained, at $y = y^1$ and $y = y^n$, that is at $x = x^1$ and $x = x^n$.

**Step 6: part 4, stationarity and definiteness.** The map $x \mapsto y = B^{1/2}x$ is a linear bijection, so for any variation $h$ at $x$ the corresponding variation at $y$ is $B^{1/2}h$, and $h \mapsto B^{1/2}h$ runs over all of $\mathbb{C}^n$ as $h$ does. Hence the first variation of the generalized quotient vanishes for every $h$ exactly when the first variation of $\mathcal{R}_C$ vanishes for every variation at $y$, which by the stationary-value statement of :ref[]{to=linalg.quadratic-forms} happens exactly when $Cy = \mathcal{R}_C(y)\,y$, that is exactly when $x$ is an eigenvector of the pencil, with the stationary value its eigenvalue. Finally, the first display of step 5 shows that $x^\dagger Ax$ is positive at every non-zero $x$ exactly when $y^\dagger Cy$ is positive at every non-zero $y$, since $x \mapsto y$ is a bijection fixing only $0$; and by the eigenvalue test that holds exactly when every eigenvalue of $C$ — that is, every $\lambda_k$ — is positive. The same sentence with $\ge$ gives the semidefinite case. $\square$
:::

:::definition[Small oscillations]{provenance=adapted src="rhb-2006:Ch. 9 introduction, Eqs (9.1)-(9.2), pp. 316-317, and §9.1, Eq. (9.7), p. 318"}
Let a conservative system be described by generalized coordinates $q = (q_1, \dots, q_n)^{\mathsf T}$, chosen to vanish at an equilibrium configuration, with a potential $V(q)$ that does not depend on the velocities and with $V(0) = 0$. For small $q$ and $\dot q$ the kinetic and potential energies are quadratic forms

$$
T = \tfrac12\, \dot q^{\mathsf T} M\, \dot q , \qquad V = \tfrac12\, q^{\mathsf T} K q + O(\|q\|^3) ,
$$

where $M$ and $K$ are constant real symmetric $n \times n$ matrices, $K_{ij} = \partial^2 V(0)/\partial q_i \partial q_j$ the Hessian of $V$ at the equilibrium, and the linear term is absent because $\partial V(0)/\partial q_i = 0$ at an equilibrium. $M$ is the **mass** or **kinetic-energy matrix** and is positive definite, since $T > 0$ whenever $\dot q \neq 0$; $K$ is the **stiffness** or **potential-energy matrix**. Keeping only these quadratic terms, Lagrange's equations $\frac{d}{dt}\frac{\partial T}{\partial \dot q_i} - \frac{\partial T}{\partial q_i} + \frac{\partial V}{\partial q_i} = 0$ give the linear system

$$
M \ddot q + K q = 0 .
$$

This is Eq. (9.7) of Riley, Hobson and Bence, who reach it instead from conservation of energy, $\frac{d}{dt}(T + V) = 0$, and defer the Lagrangian derivation to their chapter 22; the route through Lagrange's equations used here is ours.

The middle term disappears because $M$ has been frozen at its equilibrium value: in general $T = \tfrac12 \dot q^{\mathsf T} M(q) \dot q$, so that
$$
\frac{\partial T}{\partial q_i} = \tfrac12\, \dot q^{\mathsf T} \bigl(\partial_i M(q)\bigr) \dot q ,
$$
which carries two factors of $\dot q$ and, since $\partial_i M(0)$ need not vanish, no factor of $q$: it is of **second** order in the small quantities $q, \dot q$, one order beyond the first-order terms $M\ddot q$ and $Kq$ that are kept, and is therefore dropped in the linearization, so that only $\frac{d}{dt}(M\dot q) = M\ddot q$ survives from the kinetic part. Counted in the energies rather than in the equations of motion, the same statement is that the neglected part of $T$ itself, $\tfrac12 \dot q^{\mathsf T}\bigl(M(q) - M(0)\bigr)\dot q = O(\|q\|\,\|\dot q\|^2)$, is third order against the second-order forms kept. (The example below has exactly such a $q$-dependent $T$, through a factor $\cos(q_1 - q_2)$, which step 1 there evaluates at $q = 0$; because that factor is even in $q_1 - q_2$ it is the special case $\partial_i M(0) = 0$, in which $\partial T/\partial q_i$ is third order and not merely second.) The displayed system is the equation of motion of the system **linearized about the equilibrium**; everything below is a statement about it, not about the exact nonlinear motion.
:::

:::statement[Normal frequencies and normal modes]{provenance=adapted src="rhb-2006:§9.1, Eqs (9.8)-(9.13), pp. 318-321 and §9.3, Eqs (9.16), (9.19), pp. 327-328"}
With $M, K$ as above, substituting $q(t) = x\, e^{-i\omega t}$ (or $x \cos \omega t$) into $M \ddot q + K q = 0$ gives

$$
(K - \omega^2 M)\, x = 0 ,
$$

the pencil $(K, M)$ with $\lambda = \omega^2$. By the previous statement there are $n$ real values $\lambda_1 \le \cdots \le \lambda_n$ and real $M$-orthonormal vectors $x^1, \dots, x^n$ with $K x^k = \lambda_k M x^k$. Then:

1. The **normal coordinates** $\eta_k(t) = (x^k)^{\mathsf T} M q(t)$ satisfy the uncoupled **normal equations**
$$
\ddot\eta_k + \lambda_k \eta_k = 0, \qquad k = 1, \dots, n ,
$$
and $q(t) = \sum_k \eta_k(t)\, x^k$. In these coordinates $T = \tfrac12 \sum_k \dot\eta_k^2$ and $V = \tfrac12 \sum_k \lambda_k \eta_k^2$.
2. Hence every solution is
$$
q(t) = \sum_{k} \bigl(a_k \cos \omega_k t + b_k \sin \omega_k t\bigr) x^k \quad \text{over the } k \text{ with } \lambda_k = \omega_k^2 > 0 ,
$$
plus a term $(a_k + b_k t)\, x^k$ for each $k$ with $\lambda_k = 0$ and a term $(a_k e^{\gamma_k t} + b_k e^{-\gamma_k t}) x^k$ with $\gamma_k = \sqrt{-\lambda_k}$ for each $k$ with $\lambda_k < 0$. The positive $\omega_k = \sqrt{\lambda_k}$ are the **normal frequencies** (eigenfrequencies) and the motions $q(t) = \eta_k(t) x^k$ are the **normal modes**.
3. Every solution is bounded for all $t$, for every choice of initial data, if and only if every $\lambda_k > 0$, i.e. if and only if $K$ is positive definite; this is the case when the equilibrium is a strict local minimum of $V$ to second order. A negative $\lambda_k$ gives exponential growth along $x^k$ (unstable equilibrium), and a zero $\lambda_k$ gives a drift linear in $t$ along $x^k$.
4. **Orthogonality and bounds.** $(x^j)^{\mathsf T} M x^k = \delta_{jk}$ and $(x^j)^{\mathsf T} K x^k = \lambda_k \delta_{jk}$: modes of distinct frequencies are orthogonal with respect to both energies, and within a degenerate eigenspace the basis can be chosen so that the two displayed relations hold for every $j \neq k$ as well, degenerate or not — that is what part 2 of the pencil theorem delivers and what step 5 of the method below constructs. In neither case are the modes in general orthogonal with respect to the plain dot product $(x^j)^{\mathsf T} x^k$. For any trial vector $x \neq 0$,
$$
\lambda_1 \le \frac{x^{\mathsf T} K x}{x^{\mathsf T} M x} \le \lambda_n ,
$$
with $\lambda_1 = \omega_1^2$ and $\lambda_n = \omega_n^2$ whenever those eigenvalues are positive — parts 2 and 3 allow $\lambda_k \le 0$, and no frequency $\omega_k$ is defined for such a $k$. So at a stable equilibrium a guessed mode shape gives an upper bound for the lowest frequency and a lower bound for the highest.
:::

:::idea{provenance=original}
Everything follows from the one change of variables $\eta_k = (x^k)^{\mathsf T}Mq$, which reads off the amount of the $k$-th mode present in the configuration $q$. Because the modes are $M$-orthonormal, this change of variables inverts itself as $q = \sum_k\eta_kx^k$; and because they are also $K$-orthogonal, applying it to $M\ddot q + Kq = 0$ kills every cross term and leaves $n$ separate equations $\ddot\eta_k + \lambda_k\eta_k = 0$. A single scalar equation of that form is the harmonic oscillator, whose solution everyone knows and whose character depends on the sign of $\lambda_k$ alone: oscillation, drift, or exponential growth. So the behaviour of the whole coupled system is read off from $n$ signs.
:::

:::proof{provenance=adapted src="rhb-2006:§9.1, Eqs (9.8)-(9.13), pp. 318-321"}
**The eigenvalue problem.** Substituting $q(t) = x\,e^{-i\omega t}$ into $M\ddot q + Kq = 0$ and using $\ddot q = -\omega^2 x\,e^{-i\omega t}$ gives $(-\omega^2M + K)x\,e^{-i\omega t} = 0$; the scalar factor never vanishes, so $(K - \omega^2 M)x = 0$. With $\lambda = \omega^2$ this is the pencil $(K,M)$, and $M$ is positive definite by hypothesis while both are real symmetric, so the previous statement applies: there are $n$ real $\lambda_1 \le \cdots \le \lambda_n$ and real $M$-orthonormal $x^1,\dots,x^n$ with $Kx^k = \lambda_kMx^k$, $(x^j)^{\mathsf T}Mx^k = \delta_{jk}$ and $(x^j)^{\mathsf T}Kx^k = \lambda_k\delta_{jk}$. The trial form $x\cos\omega t$ leads to the same equation, since it too has $\ddot q = -\omega^2 q$.

**Part 1, the change of variables inverts itself.** The $x^k$ are a basis, so any $q$ can be written $q = \sum_k c_kx^k$; then
$$
(x^j)^{\mathsf T}Mq = \sum_k c_k\,(x^j)^{\mathsf T}Mx^k = \sum_k c_k\delta_{jk} = c_j ,
$$
using $M$-orthonormality. So $c_j = \eta_j$ and $q(t) = \sum_k\eta_k(t)\,x^k$, as claimed. This is the only place the normalisation $(x^k)^{\mathsf T}Mx^k = 1$ is used; with a different normalisation the formula would carry a factor.

**Part 1, the normal equations.** Differentiating $\eta_k = (x^k)^{\mathsf T}Mq$ twice in $t$ — the $x^k$ and $M$ are constant — and then using the equation of motion in the form $M\ddot q = -Kq$,
$$
\ddot\eta_k = (x^k)^{\mathsf T}M\ddot q = -(x^k)^{\mathsf T}Kq = -\sum_j \eta_j\,(x^k)^{\mathsf T}Kx^j = -\lambda_k\eta_k ,
$$
the last step by $K$-orthogonality, which is what removes every term but $j = k$. So $\ddot\eta_k + \lambda_k\eta_k = 0$, and the $n$ equations are uncoupled.

**Part 1, the energies.** Substituting $q = \sum_k\eta_kx^k$ and $\dot q = \sum_k\dot\eta_kx^k$,
$$
T = \tfrac12\dot q^{\mathsf T}M\dot q = \tfrac12\sum_{j,k}\dot\eta_j\dot\eta_k\,(x^j)^{\mathsf T}Mx^k = \tfrac12\sum_k\dot\eta_k^2 ,
\qquad
V = \tfrac12 q^{\mathsf T}Kq = \tfrac12\sum_{j,k}\eta_j\eta_k\,(x^j)^{\mathsf T}Kx^k = \tfrac12\sum_k\lambda_k\eta_k^2 ,
$$
where in the second computation the double sum collapses by $K$-orthogonality to the terms $j = k$, each contributing $\lambda_k\eta_k^2$.

**Part 2.** The scalar equation $\ddot\eta + \lambda\eta = 0$ is a second-order linear equation with constant coefficients, so its solution space is two-dimensional — a solution is determined by the two numbers $\eta(0), \dot\eta(0)$, and the general statement for linear equations of order $n$ belongs to :ref[the theory of linear differential equations]{to=ode.linear-ode-theory}, which comes later in the handbook and is not needed as a prerequisite here. A two-parameter family of solutions is therefore all of them. For $\lambda = \omega^2 > 0$, $\cos\omega t$ and $\sin\omega t$ are solutions and are independent, giving $\eta = a\cos\omega t + b\sin\omega t$. For $\lambda = 0$ the equation is $\ddot\eta = 0$, so $\eta = a + bt$. For $\lambda < 0$, put $\gamma = \sqrt{-\lambda} > 0$; then $e^{\pm\gamma t}$ are independent solutions and $\eta = ae^{\gamma t} + be^{-\gamma t}$. Assembling $q = \sum_k\eta_kx^k$ gives the stated general solution, and the motion with $\eta_j \equiv 0$ for $j \neq k$ is $q(t) = \eta_k(t)x^k$: the whole system moves in the fixed pattern $x^k$, with every coordinate oscillating at the single frequency $\omega_k = \sqrt{\lambda_k}$ and passing through zero together. That is the normal mode.

**Part 3.** Suppose every $\lambda_k > 0$. Then $|\eta_k(t)| = |a_k\cos\omega_kt + b_k\sin\omega_kt| \le (a_k^2+b_k^2)^{1/2}$ for all $t$, by :ref[the Cauchy-Schwarz inequality]{to=linalg.inner-product-spaces} in $\mathbb{R}^2$ applied to $(a_k,b_k)$ and $(\cos\omega_kt, \sin\omega_kt)$, so
$$
\|q(t)\| \le \sum_k |\eta_k(t)|\,\|x^k\| \le \sum_k (a_k^2+b_k^2)^{1/2}\|x^k\| ,
$$
a bound independent of $t$: every solution is bounded. Conversely suppose $\lambda_m \le 0$ for some $m$, and choose the initial data $\eta_m(0) = 0$, $\dot\eta_m(0) = 1$ and $\eta_k(0) = \dot\eta_k(0) = 0$ for $k \neq m$, which is legitimate because the map from $(q(0), \dot q(0))$ to $(\eta_k(0), \dot\eta_k(0))$ is a bijection. Then $q(t) = \eta_m(t)x^m$ with $\eta_m(t) = t$ if $\lambda_m = 0$ and $\eta_m(t) = \gamma_m^{-1}\sinh(\gamma_mt)$ if $\lambda_m < 0$, both unbounded, and $x^m \neq 0$. So boundedness of every solution is equivalent to all $\lambda_k > 0$, which by part 4 of the pencil theorem applied to $(K,M)$ is equivalent to $K$ being positive definite. Since $V = \tfrac12q^{\mathsf T}Kq$ to second order, $K$ positive definite says exactly that the quadratic part of $V$ is positive in every direction, i.e. the equilibrium is a strict local minimum of $V$ to second order. The two remaining cases are the computations just made: $\lambda_m < 0$ gives $e^{\gamma_m t}$ growth along $x^m$, and $\lambda_m = 0$ gives drift linear in $t$ along $x^m$.

**Part 4.** The orthogonality relations are part 2 of the pencil theorem, restated for $(K,M)$. They do not imply $(x^j)^{\mathsf T}x^k = 0$: $M$-orthogonality is orthogonality in the inner product $(x,y)_M = y^{\mathsf T}Mx$, and unless $M$ is a multiple of the identity that is a different relation — the example below exhibits two modes whose unnormalised shapes $u = (1,\sqrt3)^{\mathsf T}$ and $v = (1,-\sqrt3)^{\mathsf T}$ satisfy $u^{\mathsf T}Mv = 0$ while $u^{\mathsf T}v = -2 \neq 0$; rescaling to the $M$-orthonormal $x^1, x^2$ changes only the size of that dot product, to $-2/(ml^2\sqrt{24}) = -0.408248/(ml^2)$, not its vanishing. The bound is part 4 of the pencil theorem with $A = K$, $B = M$, and $\lambda_k = \omega_k^2$ for those $\lambda_k$ that are positive. $\square$
:::

:::method[Finding the normal modes of a system]{provenance=adapted src="rhb-2006:Ch. 9 introduction and §9.1, pp. 316-321"}
1. **Choose coordinates** $q_i$ that vanish at the equilibrium, as many as the system has degrees of freedom and no more. A redundant coordinate makes $M$ singular and the pencil ill-posed.
2. **Expand the energies to second order.** Write $T$ in terms of the $\dot q_i$, keeping terms quadratic in $\dot q$, to get $M$; expand $V$ about $q = 0$ to second order to get $K$. Both come out symmetric, or can be symmetrised as in :ref[quadratic forms]{to=linalg.quadratic-forms}.
3. **Check that $M$ is positive definite** (Sylvester's criterion, or its eigenvalues). It will be, if the coordinates are independent.
4. **Solve** $\det(K - \omega^2 M) = 0$ for the $n$ roots $\lambda_k = \omega_k^2$. For $n \le 3$ expand the determinant by hand; otherwise use a symmetric generalized eigensolver (`scipy.linalg.eigh(K, M)`), not `eig(inv(M) @ K)`.
5. **For each root** solve $(K - \lambda_k M) x = 0$ for the mode shape and normalise it by $(x^k)^{\mathsf T} M x^k = 1$. For a degenerate $\lambda_k$ the solution space has dimension $> 1$; pick any basis of it and make it $M$-orthonormal by :ref[Gram-Schmidt]{to=linalg.gram-schmidt} in the $M$-inner product, which is the ordinary process with $(x,y)_M = y^{\mathsf T} M x$ in place of the dot product.
6. **Check** $\sum_k \lambda_k = \operatorname{tr}(M^{-1}K)$ and $(x^j)^{\mathsf T} M x^k = \delta_{jk}$ before interpreting the answer.
7. **Read off the physics.** $\lambda_k = 0$ means a free motion with no restoring force (a rigid translation or rotation, or a soft direction of $V$); $\lambda_k < 0$ means an unstable equilibrium; the signs within $x^k$ say which parts move in phase.

The recipe requires $M$ and $K$ symmetric with $M$ positive definite. If $M$ is only semidefinite, or if the forces are not derived from a potential (damping, magnetic forces, gyroscopic terms), the pencil is no longer definite, its eigenvalues need not be real, and this method does not apply.
:::

:::note{provenance=original}
A coupled oscillating system looks complicated only in the wrong coordinates. The pencil $(K, M)$ finds the coordinates in which it falls apart into $n$ independent harmonic oscillators: the eigenvalues are the squared frequencies you can measure, and each eigenvector is the pattern of motion that one frequency belongs to.
:::

:::remark[Conventions and where the hypotheses are used]{provenance=adapted src="rhb-2006:Ch. 9 introduction and §9.1, pp. 316-317, 321; arfken-2013:§6.5, pp. 322-324"}
**The factor of one half.** Riley, Hobson and Bence write $T = \dot q^{\mathsf T} A \dot q$ and $V = q^{\mathsf T} B q$ with no $\tfrac12$, so their $A$ and $B$ are half of our $M$ and $K$. Since $\det(B - \omega^2 A) = 2^{-n} \det(K - \omega^2 M)$, the normal frequencies and mode shapes are unaffected; only the normalisation constant of the modes changes. Use either convention, but not both in one calculation.

**Positive definite $K$ is about *strict* minima.** A minimum of $V$ gives $K$ positive semidefinite; definiteness is stronger and fails exactly when $V$ is flat to second order in some direction. Such directions are common: the linear triatomic molecule of Riley, Hobson and Bence §9.1 (p. 321) has $\omega^2 = 0$ for the mode in which all three masses translate together, since $V$ depends only on the bond extensions. Part 3 above therefore separates "bounded motion" ($K > 0$) from "no exponential growth" ($K \ge 0$). Note that Riley, Hobson and Bence restrict Chapter 9 from the start to a potential with a local minimum at the equilibrium and state there (p. 317) that this makes the potential matrix positive definite, like the kinetic one; the cases $\lambda_k \le 0$ that parts 2 and 3 above admit therefore lie outside their setting, and are covered here by the pencil theorem, which assumes definiteness of $M$ only.

**Do not throw away the symmetry.** Multiplying by $M^{-1}$ gives the ordinary eigenproblem $M^{-1}K x = \omega^2 x$, with the same eigenvalues and eigenvectors; but $M^{-1}K$ is in general neither symmetric nor normal, as Arfken, Weber and Harris point out for their three-mass chain (§6.5, pp. 322-324). Its eigenvectors are then not orthogonal in the plain dot product, and the left and right eigenvectors differ. $M$-orthogonality is the correct replacement, and solvers that take $M$ as a second argument preserve it.

**$B$ must be definite, not merely invertible.** For $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ the equation $\det(A - \lambda B) = -\lambda^2 - 1 = 0$ gives $\lambda = \pm i$: an indefinite $B$ destroys the reality of the spectrum, which is why part 1 assumes $B > 0$ and not just $\det B \neq 0$.
:::

:::example[A double pendulum with unequal masses]{provenance=original}
Two point masses hang in a vertical plane on light rigid rods of equal length $l$: the upper mass is $2m$, at the end of the first rod, and the lower mass is $m$, at the end of the second rod hinged to the first. Let $q_1$ and $q_2$ be the angles the two rods make with the downward vertical, so that $q = 0$ is the hanging equilibrium. Write $\mu = g/l$ throughout.

**Step 1: the energies to second order.** The upper mass has speed $l\dot q_1$; the lower mass has velocity $l\dot q_1$ along the first rod's perpendicular plus $l\dot q_2$ along the second's, with angle $q_1 - q_2$ between them, so its squared speed is $l^2(\dot q_1^2 + \dot q_2^2 + 2\dot q_1\dot q_2\cos(q_1-q_2))$. Hence
$$
T = \tfrac12 (2m) l^2\dot q_1^2 + \tfrac12 m l^2\bigl(\dot q_1^2 + \dot q_2^2 + 2\dot q_1\dot q_2\cos(q_1-q_2)\bigr) .
$$
Keeping only terms quadratic in the velocities means evaluating the cosine at $q = 0$, which gives $1$, so
$$
T = \tfrac12\,\dot q^{\mathsf T}M\dot q , \qquad M = ml^2\begin{pmatrix} 3 & 1 \\ 1 & 1\end{pmatrix}.
$$
The heights below the pivot are $l\cos q_1$ and $l\cos q_1 + l\cos q_2$, so, taking the pivot as the zero of potential,
$$
V = -(2m)gl\cos q_1 - mg\bigl(l\cos q_1 + l\cos q_2\bigr) = \text{const} + \tfrac12 mgl\bigl(3q_1^2 + q_2^2\bigr) + O(\|q\|^4),
$$
using $\cos q = 1 - q^2/2 + O(q^4)$. The constant is $V(0) = -4mgl$, the energy of the hanging configuration measured from the pivot; dropping it changes no force and no mode, and puts $V$ in the normalisation $V(0) = 0$ that the definition of small oscillations above asks for. Hence
$$
V = \tfrac12 q^{\mathsf T}Kq , \qquad K = mgl\begin{pmatrix} 3 & 0 \\ 0 & 1\end{pmatrix}.
$$

**Step 2: $M$ is positive definite.** Its leading principal minors are $3ml^2 > 0$ and $(3-1)(ml^2)^2 = 2m^2l^4 > 0$, so Sylvester's criterion (:ref[]{to=linalg.quadratic-forms}) applies and the pencil is definite. $K$ is diagonal with positive entries, so it is positive definite too, and the equilibrium will turn out stable.

**Step 3: the characteristic equation.** Factor out $ml^2$ from both matrices, which does not change the roots:
$$
K - \lambda M = ml^2\begin{pmatrix} 3\mu - 3\lambda & -\lambda \\ -\lambda & \mu - \lambda\end{pmatrix},
\qquad
\det(K-\lambda M) = (ml^2)^2\bigl[3(\mu-\lambda)^2 - \lambda^2\bigr] .
$$
Expanding, $3(\mu-\lambda)^2 - \lambda^2 = 2\lambda^2 - 6\mu\lambda + 3\mu^2$, a quadratic of degree exactly $n = 2$ with leading coefficient $2 = (-1)^2\det\begin{pmatrix}3&1\\1&1\end{pmatrix}$, as part 1 of the pencil theorem predicts. Its roots are
$$
\lambda = \frac{6\mu \pm \sqrt{36\mu^2 - 24\mu^2}}{4} = \frac{6\mu \pm 2\sqrt3\,\mu}{4},
\qquad\text{so}\qquad
\lambda_1 = \frac{3-\sqrt3}{2}\,\mu , \quad \lambda_2 = \frac{3+\sqrt3}{2}\,\mu .
$$
Numerically $\lambda_1 = 0.633975\,\mu$ and $\lambda_2 = 2.366025\,\mu$, both positive and real as they must be. The frequencies are
$$
\omega_1 = 0.796225\sqrt{g/l}, \qquad \omega_2 = 1.538189\sqrt{g/l}, \qquad \frac{\omega_2}{\omega_1} = 1.931852 .
$$

**Step 4: the checks of step 6 of the method.** $\lambda_1 + \lambda_2 = 3\mu$, and
$$
M^{-1}K = \frac{1}{2}\begin{pmatrix} 1 & -1 \\ -1 & 3\end{pmatrix}\cdot\mu\begin{pmatrix} 3&0\\0&1\end{pmatrix} = \frac\mu2\begin{pmatrix} 3 & -1 \\ -3 & 3\end{pmatrix},
\qquad \operatorname{tr}(M^{-1}K) = 3\mu \ \checkmark
$$
Also $\lambda_1\lambda_2 = (9-3)\mu^2/4 = \tfrac32\mu^2$, which matches $\det K/\det M = 3\mu^2/2$. (Note that $M^{-1}K$ is *not* symmetric, exactly as the third remark above warns.)

**Step 5: the mode shapes.** The first row of $(K-\lambda M)x = 0$ reads $3(\mu-\lambda)x_1 = \lambda x_2$, so $x_2/x_1 = 3(\mu-\lambda)/\lambda$. For $\lambda_1$, $\mu - \lambda_1 = \tfrac{\sqrt3-1}{2}\mu$ and
$$
\frac{x_2}{x_1} = \frac{3(\sqrt3-1)/2}{(3-\sqrt3)/2} = \frac{3(\sqrt3-1)}{\sqrt3(\sqrt3-1)} = \sqrt3 ,
$$
while for $\lambda_2$, $\mu - \lambda_2 = -\tfrac{1+\sqrt3}{2}\mu$ and the same computation gives $x_2/x_1 = -\sqrt3$. So, before normalisation,
$$
x^1 \propto (1,\ \sqrt3)^{\mathsf T}, \qquad x^2 \propto (1,\ -\sqrt3)^{\mathsf T} .
$$
In the slow mode the two rods swing the same way, the lower one through $\sqrt3 \approx 1.732$ times the angle; in the fast mode they swing in opposition. Both are visible in the signs, which is the reading asked for in step 7 of the method.

**Step 6: $M$-orthonormalisation and the orthogonality checks.** With $\tilde M = \begin{pmatrix}3&1\\1&1\end{pmatrix}$ so that $M = ml^2\tilde M$,
$$
(1, \sqrt3)\,\tilde M\,(1,-\sqrt3)^{\mathsf T} = (1,\sqrt3)\cdot(3-\sqrt3,\ 1-\sqrt3)^{\mathsf T} = (3-\sqrt3) + (\sqrt3 - 3) = 0 ,
$$
so the two modes are $M$-orthogonal, as part 4 requires. Their $M$-norms are
$$
(1,\sqrt3)\,\tilde M\,(1,\sqrt3)^{\mathsf T} = 6 + 2\sqrt3 = 9.464102 , \qquad
(1,-\sqrt3)\,\tilde M\,(1,-\sqrt3)^{\mathsf T} = 6 - 2\sqrt3 = 2.535898 ,
$$
so the normalised modes are
$$
x^1 = \frac{(1,\sqrt3)^{\mathsf T}}{\sqrt{ml^2(6+2\sqrt3)}} = \frac{(0.325058,\ 0.563016)^{\mathsf T}}{\sqrt{ml^2}}, \qquad
x^2 = \frac{(1,-\sqrt3)^{\mathsf T}}{\sqrt{ml^2(6-2\sqrt3)}} = \frac{(0.627963,\ -1.087664)^{\mathsf T}}{\sqrt{ml^2}} .
$$
They are *not* orthogonal in the plain dot product: $(1,\sqrt3)\cdot(1,-\sqrt3) = 1 - 3 = -2 \neq 0$. And $K$-orthogonality holds: $(1,\sqrt3)\operatorname{diag}(3,1)(1,-\sqrt3)^{\mathsf T} = 3 - 3 = 0$, while $(1,\pm\sqrt3)\operatorname{diag}(3,1)(1,\pm\sqrt3)^{\mathsf T} = 6$ for both, and indeed $6\mu/(6+2\sqrt3) = \lambda_1$ and $6\mu/(6-2\sqrt3) = \lambda_2$, as $(x^k)^{\mathsf T}Kx^k = \lambda_k$ demands.

**Step 7: a trial-vector bound.** Guess the slow mode as $x = (1,1)^{\mathsf T}$ — both rods swinging together through equal angles, which is in the right ballpark but has the wrong amplitude ratio. Then
$$
\frac{x^{\mathsf T}Kx}{x^{\mathsf T}Mx} = \frac{\mu(3+1)}{3+1+1+1} = \frac{4\mu}{6} = 0.666667\,\mu \ \ge\ \lambda_1 = 0.633975\,\mu ,
$$
an upper bound, high by $5.2\%$ in $\lambda_1$ and only $2.5\%$ in $\omega_1$ because of the square root. That one line of arithmetic gets the fundamental frequency to better than three percent with no eigenvalue calculation at all.

**Step 8: the motion.** Since both $\lambda_k > 0$, $K$ is positive definite and part 3 says every motion is bounded; explicitly
$$
q(t) = (a_1\cos\omega_1t + b_1\sin\omega_1t)\,x^1 + (a_2\cos\omega_2t + b_2\sin\omega_2t)\,x^2 .
$$
The frequency ratio is
$$
\frac{\omega_2}{\omega_1} = \sqrt{\frac{3+\sqrt3}{3-\sqrt3}} = \sqrt{2+\sqrt3} = \frac{\sqrt2+\sqrt6}{2} = 1.931852 ,
$$
using $(3+\sqrt3)/(3-\sqrt3) = (3+\sqrt3)^2/6 = 2+\sqrt3$ and $\bigl((\sqrt2+\sqrt6)/2\bigr)^2 = (8+4\sqrt3)/4 = 2+\sqrt3$. This is irrational, so a general motion never exactly repeats: the linearized double pendulum is quasi-periodic, not periodic, unless one of the two amplitudes vanishes.
:::

:::application{provenance=original}
**Vibrational spectroscopy.** A molecule of $N$ atoms is a conservative system with $3N$ coordinates, and the apparatus of this unit is how its infrared and Raman spectrum is computed. The kinetic-energy matrix $M$ in Cartesian displacements is diagonal, each atom contributing its mass three times; the stiffness matrix $K$ is the Hessian of the electronic energy at the equilibrium geometry, which a quantum chemistry program computes by differentiating the energy twice. Diagonalizing the pencil $(K, M)$ gives $3N$ eigenvalues, of which several vanish: the rigid motions change no bond and so leave $V$ flat, precisely the $\lambda_k = 0$ case of part 3. For a **nonlinear** molecule there are six such directions — three rigid translations and three rigid rotations — leaving $3N-6$ vibrational frequencies $\omega_k = \sqrt{\lambda_k}$ to compare with the measured absorption lines. For a **linear** molecule only five vanish, because every atom sits on the axis and a rotation about that axis displaces no atom at all, so it is not a direction in configuration space; such a molecule has $3N-5$ vibrations. Thus a linear triatomic, CO$_2$ for instance, has $3 \cdot 3 - 5 = 4$ vibrational frequencies rather than the $3$ that $3N-6$ would give, and a diatomic has the one frequency of its stretching mode, where $3N-6$ would predict none. The three-mass chain of the second remark above is the axial part of this calculation for such a molecule: only the three displacements along the axis are retained, so it yields three modes — the rigid translation with $\omega^2 = 0$ and two axial vibrations — while the remaining two of the four vibrations are bending motions transverse to the axis, which that reduced model does not carry. The eigenvectors are the pictures that accompany each line in a spectroscopy paper: which atoms move, how far, and in or out of phase. A *negative* eigenvalue in such a calculation is the standard diagnostic that the geometry found is not a minimum but a saddle point of the energy surface — a transition state — and the corresponding eigenvector is the reaction coordinate along which the molecule falls apart. Part 3 is exactly that statement: a negative $\lambda_k$ means exponential departure along $x^k$.

**Modal analysis of structures, and the practical use of the quotient bound.** A building, a bridge or a turbine blade is modelled by a finite element mesh whose nodal displacements $q$ carry a mass matrix $M$ and a stiffness matrix $K$, both large, sparse and symmetric with $M$ positive definite. Engineers compute the lowest few eigenvalues of $(K,M)$ because resonance with those frequencies is what destroys structures: a design is checked by confirming that the expected excitation — traffic, wind, rotor imbalance, the dominant frequencies of regional earthquakes — is far from every $\omega_k$. The method's warning in step 4 matters here: a solver given $M$ as a second argument preserves the symmetry of the problem and the $M$-orthogonality of the computed modes, whereas forming $M^{-1}K$ destroys both, and on a large mesh it also destroys the sparsity that made the computation feasible. Rayleigh's method is the classical hand version of step 7 of the example: assume a plausible deflection shape and evaluate $x^{\mathsf T}Kx/x^{\mathsf T}Mx$. What the quotient bounds is $\lambda_1 = \omega_1^2$, from above; the square root of the quotient is then an upper bound on the fundamental frequency itself. The stationarity statement is what makes the estimate sharp: since the quotient is stationary at the true mode, its error is quadratic in the error of the shape, so a shape wrong by ten percent gives $\lambda_1$ wrong by about one percent and $\omega_1$ wrong by only about half of one percent, the square root halving the relative error. Step 7 of the example is that arithmetic in miniature — a crude shape overestimates $\lambda_1$ by $5.2\%$ and $\omega_1$ by $2.5\%$.

**Instability as a negative eigenvalue.** The same pencil analysed about an *unstable* equilibrium delivers the growth rate rather than a frequency. An inverted pendulum, a column under a compressive load past its buckling threshold, or a plasma column in an adverse field all have a stiffness matrix $K$ with at least one negative eigenvalue, and part 3 then gives the fastest-growing disturbance as the eigenvector $x^m$ for the most negative $\lambda_m$, with growth rate $\gamma_m = \sqrt{-\lambda_m}$. Linear stability analysis in this form — assemble $K$, test its definiteness, and if it fails read off the shape of the unstable mode — is the standard first calculation for any equilibrium whose stability is in question, and the buckling load of a column is found by increasing the load until the smallest eigenvalue of $K$ first crosses zero.
:::
