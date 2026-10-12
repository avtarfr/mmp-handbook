---
id: green.fredholm-alternative
title: The Fredholm alternative and modified Green's functions
kind: theorem
level: core
summary: States and proves the dichotomy governing a boundary-value problem whose homogeneous problem has nontrivial solutions — either a unique solution for every forcing, or solvability exactly when the forcing is orthogonal to every solution of the homogeneous adjoint problem — gives the model matrix case with a complete proof, and builds the modified Green's function, the pseudoinverse that returns the minimum-norm solution when the problem is solvable and the minimum-norm least-squares solution when it is not.
prereqs: [green.green-function-bvp, ode.self-adjoint-operators, linalg.linear-systems, linalg.inner-product-spaces, linalg.projections-least-squares]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§3.3, p. 203: Green's formula (3.3.6), the expansion (3.3.7) of the boundary term, the complementary boundary functionals $B_{p+1},\\dots,B_{2p}$, the identity (3.3.8) defining the adjoint functionals $B_1^*,\\dots,B_{2p}^*$, and the definition of a self-adjoint problem. §3.4, pp. 206–214: the three related problems (3.4.1)–(3.4.3); the Fredholm alternative for an $m\\times n$ system with its proof and Examples 1–3, pp. 207–210; the balanced $n \\times n$ case, p. 208; the alternative theorem for integral equations, p. 210; the alternative theorem for boundary-value problems (a)–(b) and the proof of necessity, p. 211, with Examples 5–7, pp. 211–213; the completely inhomogeneous case and the solvability condition (3.4.16), p. 213. §3.5, pp. 216–220: the insulated-rod motivation (3.5.1)–(3.5.5); the modified Green's function (3.5.6)–(3.5.7) and the representation (3.5.9); the least-squares discussion (a)–(d) and the identification of $G_M$ as the pseudoinverse, pp. 218–220"
    pages: "203, 206-214, 216-220"
    role: the whole content — the alternative in the matrix, integral-equation and boundary-value settings, the proof of the matrix case and of necessity for boundary-value problems, and the definition, normalisation and use of the modified Green's function
  - work: kreyszig-1978
    loc: "§8.7, pp. 451–453: Definition 8.7-1 of the Fredholm alternative for a bounded linear operator, cases (I) and (II); Theorem 8.7-2 (a compact $T$ makes $T - \\lambda I$ satisfy it for $\\lambda \\ne 0$); Theorem 8.7-3 for integral equations of the second kind"
    pages: "451-453"
    role: the abstract operator form of the dichotomy, quoted in the note on what is and is not proved here
  - work: evans-2010
    loc: "Ch. 6, §6.2.3, pp. 302–304: the definitions of the formal adjoint $L^*$ and the adjoint problem; Theorem 4 (Second Existence Theorem), its dichotomy $(\\alpha)$/$(\\beta)$, the equality $\\dim N = \\dim N^*$ and the solvability criterion $(f,v) = 0$ for all $v \\in N^*$; Appendix D.5, p. 682, the Fredholm alternative for $I-K$ with $K$ compact"
    pages: "302-304, 682"
    role: the partial-differential-equation analogue, cited to show the same dichotomy in the elliptic setting, and the compact-operator statement behind it
  - work: hassani-2013
    loc: "§18.2, Theorem 18.2.2 (Fredholm Alternative) with its proof, p. 551: for a Hilbert–Schmidt operator $K$ and $\\lambda \\in \\mathbb{C}$, either $\\lambda$ is a regular value, or the equation is solvable exactly when the data lie in the orthogonal complement of the null space of $1 - \\lambda^*K^\\dagger$"
    pages: "551"
    role: the integral-equation form of the alternative, referenced in the note
---

:::definition[The three problems, and solvability conditions]{provenance=adapted src="stakgold-holst-2011:§3.4, (3.4.1)–(3.4.3), p. 206, and p. 211"}
Keep the setting of :ref[the previous unit]{to=green.green-function-bvp}, but now for an operator of order $p$,

$$
Lu = a_p(x)u^{(p)} + \dots + a_1(x)u' + a_0(x)u ,
$$

with $a_p \ne 0$ on $[a,b]$, together with $p$ boundary functionals $B_1,\dots,B_p$ built from the values of $u,u',\dots,u^{(p-1)}$ at $a$ and $b$, with independent coefficient rows. Three problems are in play:

$$
\textbf{(D)}\quad Lu = f,\ \ B_1u = \gamma_1,\dots,B_pu = \gamma_p ;
$$
$$
\textbf{(H)}\quad Lu = 0,\ \ B_1u = \dots = B_pu = 0 ;
\qquad
\textbf{(A)}\quad L^*v = 0,\ \ B_1^*v = \dots = B_p^*v = 0 .
$$

Here $L^*$ is the formal adjoint and $B_i^*$ the adjoint boundary functionals, defined as before by Green's formula

$$
\int_a^b\bigl(v\,Lu - u\,L^*v\bigr)\,dx = \Bigl[J(u,v)\Bigr]_a^b ,
$$

with $B_1^*v = \dots = B_p^*v = 0$ exactly when $\bigl[J(u,v)\bigr]_a^b = 0$ for every $u$ obeying $B_1u = \dots = B_pu = 0$. Problem (H) is the **direct homogeneous problem** and (A) the **homogeneous adjoint problem**.

When (H) has nontrivial solutions, (D) usually has none, and the conditions on the data $\{f;\gamma_1,\dots,\gamma_p\}$ that restore solvability are called **solvability** (or **consistency**) **conditions**. Naming them is what this unit does.
:::

:::statement[The alternative for a linear system, the model case]{provenance=adapted src="stakgold-holst-2011:§3.4, Theorem (Fredholm Alternative) and the balanced case, pp. 207–209"}
Let $A$ be a real $m \times n$ matrix, viewed as a map $\mathbb{R}^n \to \mathbb{R}^m$, let $A^*$ be its transpose, viewed as a map $\mathbb{R}^m \to \mathbb{R}^n$, and use the Euclidean inner product $(w,z) = \sum_i w_iz_i$ in each space. Then

$$
Au = f \ \text{ has a solution } \iff (f,v) = 0 \ \text{ for every } v \text{ with } A^*v = 0 .
$$

Equivalently, $R_A$, the range of $A$, and $N_{A^*}$, the kernel of $A^*$, are orthogonal complements of one another in $\mathbb{R}^m$. If $u_p$ is one solution, every solution is $u_p + u_H$ with $Au_H = 0$, and conversely; so the solution is unique precisely when $Au = 0$ has only $u = 0$.

In the **balanced case** $m = n$: if $\det A \ne 0$ then also $\det A^* \ne 0$; neither homogeneous equation has a nonzero solution, nothing at all is imposed on $f$, and $Au = f$ is uniquely solvable whatever $f$ may be. If $\det A = 0$ and $A$ has a $k$-dimensional null space, then so does $A^*$ — though in general a different one — the solvability conditions are the $k$ conditions $(f,v^{(i)}) = 0$ for a basis $v^{(1)},\dots,v^{(k)}$ of the null space of $A^*$, and when they hold the general solution is $u_p + \sum_{i=1}^k c_iu^{(i)}$ with $u^{(1)},\dots,u^{(k)}$ a basis of the null space of $A$.
:::

:::statement[The Fredholm alternative for a boundary-value problem]{provenance=adapted src="stakgold-holst-2011:§3.4, the alternative theorem for boundary value problems (a)–(b), p. 211, and the completely inhomogeneous case with (3.4.16), p. 213"}
Consider first homogeneous boundary data, $Lu = f$ with $B_1u = \dots = B_pu = 0$.

**(a)** Should (H) admit no nontrivial solution, the same is true of (A), and the inhomogeneous problem is then uniquely solvable — the case handled by the ordinary Green's function.

**(b)** If (H) has $k$ independent solutions, then (A) also has $k$ independent solutions, not necessarily the same ones. Then the problem is solvable **if and only if**

$$
\int_a^b f\,v^{(1)}\,dx = \dots = \int_a^b f\,v^{(k)}\,dx = 0 ,
$$

where $v^{(1)},\dots,v^{(k)}$ are $k$ independent solutions of (A). When these hold, the general solution is

$$
u = \bar u + \sum_{i=1}^{k}c_i\,u^{(i)} ,
$$

with $\bar u$ one particular solution, $c_i$ arbitrary constants and $u^{(1)},\dots,u^{(k)}$ $k$ independent solutions of (H).

For **inhomogeneous boundary data**, $B_iu = \gamma_i$, the same pairing gives a condition that is no longer homogeneous in the data: for $v$ a solution of (A),

$$
\int_a^b f\,v\,dx = \Bigl[J(u,v)\Bigr]_a^b ,
$$

and the right-hand side is completely determined by $v$ and the numbers $\gamma_1,\dots,\gamma_p$, because once $v$ satisfies the adjoint conditions, $\bigl[J(u,v)\bigr]_a^b$ depends on $u$ only through $B_1u,\dots,B_pu$. Stakgold and Holst write it out as $\gamma_1B_{2p}^*v + \dots + \gamma_pB_{p+1}^*v$, where $B_{p+1}^*,\dots,B_{2p}^*$ are the complementary adjoint functionals of their §3.3, and state that this condition is sufficient as well as necessary.

If the problem is **self-adjoint**, (A) is (H), and the solvability condition reads: $f$ must be orthogonal to every solution of the homogeneous problem itself.
:::

:::note[What is proved here, and where the rest is proved]{provenance=adapted src="stakgold-holst-2011:§3.4, pp. 210–211; kreyszig-1978:§8.7, Definition 8.7-1 and Theorems 8.7-2, 8.7-3, pp. 451–453; evans-2010:§6.2.3, Theorem 4, pp. 302–303, and Appendix D.5, p. 682; hassani-2013:§18.2, Theorem 18.2.2, p. 551"}
This unit proves the matrix alternative in full and proves the **necessity** of the solvability conditions for the boundary-value problem. The **sufficiency**, and the equality of the two dimensions $k$, are not proved here: Stakgold and Holst defer them to their Chapter 5, where the boundary-value problem is converted into an integral equation with kernel $G$ and the alternative is proved for integral equations — part (a) and (b) of their alternative theorem for the equation $\int_a^b k(x,\xi)u(\xi)\,d\xi - u(x) = f(x)$, stated on p. 210. That route is the subject of :ref[integral equations]{to=green.integral-equations} and :ref[Hilbert–Schmidt theory]{to=green.hilbert-schmidt}.

The same dichotomy appears in three other guises, all beyond this unit's scope:

- **Operators.** Kreyszig defines a bounded linear $A$ on a normed space to *satisfy the Fredholm alternative* when exactly one of two cases holds: (I) $Ax = y$ and $A^\times f = g$ are uniquely solvable for all data, and the homogeneous equations have only the trivial solutions; or (II) the two homogeneous equations have the same finite number $n \ge 1$ of independent solutions, and the inhomogeneous equations are solvable exactly when the data annihilate those solutions. His Theorem 8.7-2: if $T$ is a compact linear operator and $\lambda \ne 0$, then $T - \lambda I$ satisfies the Fredholm alternative.
- **Integral equations.** Kreyszig's Theorem 8.7-3 specialises the previous bullet to Fredholm equations of the second kind on a normed space: if the kernel makes $T$ compact, then $T - \lambda I$ satisfies the alternative, so either the equation has a unique solution for every datum or the homogeneous equation has finitely many independent nontrivial solutions — with the solvability condition in the annihilation form of his case (II), since a general normed space has no inner product. Hassani's Theorem 18.2.2 is the Hilbert-space version, for a Hilbert–Schmidt $K$: either $\lambda$ is a regular value, or the equation is solvable exactly when the data lie in the orthogonal complement of the kernel of $1 - \lambda^*K^\dagger$. In a Hilbert space the two readings coincide, every bounded functional being an inner product.
- **Elliptic partial differential equations.** Evans's Theorem 4 of §6.2.3 states precisely (a)/(b) for weak solutions of a second-order elliptic $Lu = f$ with $u = 0$ on the boundary, including $\dim N = \dim N^*$ and the criterion $(f,v) = 0$ for all $v \in N^*$; his proof reduces the problem to $u - Ku = h$ with $K$ compact and applies the compact-operator alternative of his Appendix D.5.
:::

:::definition[The modified Green's function]{provenance=adapted src="stakgold-holst-2011:§3.5, (3.5.1)–(3.5.7), pp. 216–217"}
Let $(L;B_1,B_2)$ be a **self-adjoint** second-order problem whose homogeneous problem has a one-dimensional space of solutions, spanned by a **normalised** $u_1$:

$$
Lu_1 = 0, \quad B_1u_1 = B_2u_1 = 0, \qquad \int_a^b u_1(x)^2\,dx = 1 .
$$

Then $Lg = \delta(x-\xi)$, $B_1g = B_2g = 0$ is **inconsistent**: the solvability condition would require $u_1(\xi) = \int_a^b\delta(x-\xi)u_1(x)\,dx = 0$, which fails for most $\xi$. The nearest substitute removes exactly the offending component of the source. The **modified Green's function** $g_M(x,\xi)$ is defined by

$$
Lg_M = \delta(x-\xi) - u_1(x)u_1(\xi), \qquad B_1g_M = B_2g_M = 0 ,
$$

$$
\int_a^b g_M(x,\xi)\,u_1(x)\,dx = 0 \quad\text{for every } \xi \in (a,b) .
$$

The first line is a *consistent* problem, since the modified source is orthogonal to $u_1$ by construction. Its solutions form a one-parameter family differing by multiples of $u_1(x)$; the second line, the **normalisation**, selects one of them. Stakgold and Holst note that it is not a solvability condition but a choice, that it picks the solution of minimum norm, and that this solution turns out to be symmetric, $g_M(x,\xi) = g_M(\xi,x)$ — sufficient for symmetry but not necessary, since adding $Cu_1(x)u_1(\xi)$ with $C$ constant keeps the symmetry and the equation while spoiling the normalisation.

Their motivating case is $-u'' = f$ on $0<x<1$ with $u'(0) = u'(1) = 0$, an insulated rod: the solvability condition is $\int_0^1 f\,dx = 0$, a concentrated unit source violates it, and compensating it by a uniform distribution of sinks of total strength $1$ gives $-g'' = \delta(x-\xi) - 1$, with normalised solution

$$
g_M(x,\xi) = \frac{x^2+\xi^2}{2} - x_{>} + \frac13 ,
$$

their (3.5.5).
:::

:::statement[Solving with the modified Green's function; the pseudoinverse]{provenance=adapted src="stakgold-holst-2011:§3.5, (3.5.8)–(3.5.9) and the discussion (a)–(d), pp. 217–220"}
With $(L;B_1,B_2)$, $u_1$ and $g_M$ as above, consider

$$
Lu = f \ \ (a<x<b), \qquad B_1u = B_2u = 0 .
$$

**(i)** If the solvability condition $\int_a^b f\,u_1\,dx = 0$ holds, the general solution is

$$
u(x) = C\,u_1(x) + \int_a^b g_M(x,\xi)\,f(\xi)\,d\xi , \qquad C \text{ arbitrary} ,
$$

and the choice $C = 0$ gives the solution of minimum norm, because the two terms on the right are orthogonal.

**(ii)** If the solvability condition fails, the problem has no solution; among all $u$ satisfying the boundary conditions, those minimising $\lVert Lu - f\rVert$ in the mean-square norm are the **least-squares solutions**, and among those, $u = \int_a^b g_M(\cdot,\xi)f(\xi)\,d\xi$ is the one whose norm is smallest.

Part (i) is proved below; part (ii) is **quoted, not proved here**. Stakgold and Holst establish it for the single problem $u'' + \lambda_ku = f$ on $(0,1)$ with $u(0)=u(1)=0$ by expanding in the eigenfunctions $\sin n\pi x$: the range of $L$ is orthogonal to $\sin k\pi x$, so the element of the range nearest $f$ is $f$ with its $k$th sine coefficient deleted, and $g_M(x,\xi) = \sum_{n \ne k} \dfrac{2\sin n\pi\xi\,\sin n\pi x}{\lambda_k - \lambda_n}$; they conclude from that computation that $G_M$ is the pseudoinverse of $D^2+\lambda_k$ with those boundary conditions, and refer to their Chapter 9 for the general treatment. A proof for a general self-adjoint problem would need the half of the alternative — that orthogonality to the kernel of the adjoint is *sufficient* for solvability, equivalently that the range of $L$ is closed — which this unit does not prove either. Taken together, (i) and (ii) say that the integral operator $G_M$ with kernel $g_M$ inverts $L$ in the sense that it returns the minimum-norm solution when there is one and the minimum-norm least-squares solution when there is not: it is the **pseudoinverse** of $L$ subject to the given boundary conditions.
:::

:::idea{provenance=original}
One picture explains the whole alternative. A linear map takes its domain onto a *subspace*, its range. If the range is everything, every datum is attainable and the only question left is uniqueness. If the range is a proper subspace, a datum is attainable exactly when it lies in that subspace — and the clean way to say "lies in a subspace" is "is orthogonal to everything orthogonal to it". For a matrix, what is orthogonal to the range of $A$ is the null space of $A^*$, because $(Au,v) = (u,A^*v)$: a $v$ annihilated by $A^*$ cannot see anything $A$ produces. So solvability means that $f$ is orthogonal to the kernel of $A^*$ — and that is the alternative, in one line of inner-product algebra.

Transplanting this to a boundary-value problem needs an inner product and an adjoint. Both are supplied by Green's formula: $\int (vLu - uL^*v) = [J(u,v)]_a^b$ makes $L^*$ the adjoint of $L$, and the adjoint boundary conditions are *defined* to kill the boundary term, so that $\int vLu = \int uL^*v$ for admissible $u$ and $v$. Pairing $Lu=f$ with a solution of the homogeneous adjoint problem then gives $\int fv = \int uL^*v = 0$ at once. That is necessity, and it is all that elementary manipulation gives; sufficiency needs compactness and is quoted.

The modified Green's function is what you build when the source you want — a delta — is not in the range. Project it: subtract its component along the null direction. The remainder *is* in the range, so the modified problem can be solved; and the ambiguity left (any multiple of the null solution) is fixed by demanding that the answer have no null component either. What results is exactly the pseudoinverse: invert on the range, and kill the null space.
:::

:::proof[The alternative for a linear system]{provenance=adapted src="stakgold-holst-2011:§3.4, proof of the Fredholm Alternative, p. 208"}
Write $R_A = \{Au : u \in \mathbb{R}^n\} \subseteq \mathbb{R}^m$ for the range and $N_{A^*} = \{v : A^*v = 0\} \subseteq \mathbb{R}^m$ for the null space of the transpose. The identity to be used throughout is

$$
(Au,v)_m = \sum_{i=1}^m v_i\sum_{j=1}^n a_{ij}u_j = \sum_{j=1}^n u_j\sum_{i=1}^m a_{ij}v_i = (u,A^*v)_n ,
$$

obtained by exchanging the two finite sums; it says that $A^*$, the transpose, is the adjoint.

**Step 1 (necessity).** Suppose $Au = f$ for some $u$, and let $A^*v = 0$. Then

$$
(f,v)_m = (Au,v)_m = (u,A^*v)_n = (u,0)_n = 0 .
$$

So every $f$ in the range is orthogonal to every element of $N_{A^*}$.

**Step 2 (set up the converse).** Suppose $(f,v)_m = 0$ for all $v \in N_{A^*}$; we must show $f \in R_A$. Since $R_A$ is a subspace of the finite-dimensional space $\mathbb{R}^m$, every vector splits uniquely as its orthogonal projection onto $R_A$ plus a remainder orthogonal to $R_A$ (:ref[orthogonal projection]{to=linalg.projections-least-squares}). Write

$$
f = h + h^{\perp}, \qquad h \in R_A, \quad h^{\perp} \perp R_A .
$$

**Step 3 ($h^{\perp}$ lies in $N_{A^*}$).** Being orthogonal to the whole range, $h^\perp$ satisfies $(Au,h^{\perp})_m = 0$ for every $u \in \mathbb{R}^n$, so by the adjoint identity $(u,A^*h^{\perp})_n = 0$ for every $u$. A vector orthogonal to every vector is zero, so $A^*h^{\perp} = 0$, that is, $h^{\perp} \in N_{A^*}$.

**Step 4 (the hypothesis kills $h^\perp$).** By hypothesis $f \perp N_{A^*}$, and $h^{\perp} \in N_{A^*}$ by Step 3, so $(f,h^{\perp}) = 0$. But $h \perp h^{\perp}$ by construction, so

$$
0 = (f,h^{\perp}) = (h,h^{\perp}) + (h^{\perp},h^{\perp}) = \lVert h^{\perp}\rVert^2 ,
$$

whence $h^{\perp} = 0$ and $f = h \in R_A$: the system is solvable.

**Step 5 (the solution set).** If $Au_p = f$, then $Au = f$ holds if and only if $A(u - u_p) = 0$, that is, $u = u_p + u_H$ with $u_H$ in the null space of $A$. Hence the solution is unique exactly when that null space is $\{0\}$, and otherwise the solutions form a translate of it. $\square$
:::

:::proof[Necessity of the solvability conditions for the boundary-value problem]{provenance=adapted src="stakgold-holst-2011:§3.4, p. 211 and p. 213"}
**Step 1 (pair the problem with an adjoint null solution).** Let $u$ solve $Lu = f$ with $B_1u = \dots = B_pu = 0$, and let $v$ solve the homogeneous adjoint problem (A). Form $v\,Lu - u\,L^*v$ and integrate over $(a,b)$. On the left, $Lu = f$ and $L^*v = 0$, so the integral is $\int_a^b f v\,dx$.

**Step 2 (Green's formula).** On the right, Green's formula turns the same integral into the boundary term:

$$
\int_a^b f\,v\, dx = \int_a^b\bigl(v\,Lu - u\,L^*v\bigr)dx = \Bigl[J(u,v)\Bigr]_a^b .
$$

**Step 3 (the boundary term vanishes).** $u$ satisfies the homogeneous boundary conditions and $v$ the adjoint ones. The adjoint conditions were *defined* to be those making $\bigl[J(u,v)\bigr]_a^b$ vanish for every such $u$; so the right-hand side is zero and $\int_a^b fv\,dx = 0$.

**Step 4 (all $k$ conditions).** Applying Steps 1–3 to each member of a basis $v^{(1)},\dots,v^{(k)}$ of the solution space of (A) gives the $k$ stated conditions. They are genuine restrictions on $f$ only when $k \ge 1$; when (A) has only the trivial solution there is nothing to check, which is case (a).

**Step 5 (inhomogeneous boundary data).** If instead $B_iu = \gamma_i$, Steps 1 and 2 are unchanged but Step 3 fails: $\bigl[J(u,v)\bigr]_a^b$ need not vanish. It is, however, determined by the data. Indeed $\bigl[J(u,v)\bigr]_a^b$ is a bilinear expression in the $2p$ boundary values of $u$ and those of $v$; with $v$ fixed, it is a linear functional of the boundary values of $u$ which, by the definition of the adjoint conditions, vanishes on the subspace where $B_1u = \dots = B_pu = 0$. A linear functional vanishing on the common kernel of $B_1,\dots,B_p$ is a linear combination of $B_1,\dots,B_p$, so

$$
\Bigl[J(u,v)\Bigr]_a^b = \sum_{i=1}^{p}\lambda_i(v)\,B_iu = \sum_{i=1}^p \lambda_i(v)\,\gamma_i ,
$$

a quantity computable from $v$ and the given $\gamma_i$ alone. This is Stakgold and Holst's (3.4.16), with $\lambda_i(v)$ written there in terms of their complementary adjoint functionals. Hence the necessary condition $\int_a^b fv\,dx = \sum_i\lambda_i(v)\gamma_i$. $\square$

Sufficiency is not proved here; see the note above.
:::

:::proof[The modified Green's function: consistency, and the representation]{provenance=adapted src="stakgold-holst-2011:§3.5, pp. 217–218"}
Let the problem be self-adjoint with a one-dimensional homogeneous solution space spanned by the normalised $u_1$.

**Step 1 (the modified problem is consistent).** Because the problem is self-adjoint, the adjoint homogeneous problem is the homogeneous problem itself, so the solvability condition for $Lg = s$ with homogeneous boundary conditions is $\int_a^b s\,u_1\,dx = 0$. For the modified source $s(x) = \delta(x-\xi) - u_1(x)u_1(\xi)$,

$$
\int_a^b \Bigl[\delta(x-\xi) - u_1(x)u_1(\xi)\Bigr]u_1(x)\,dx = u_1(\xi) - u_1(\xi)\int_a^b u_1^2\,dx = u_1(\xi) - u_1(\xi) = 0 ,
$$

using the sifting property and the normalisation $\int u_1^2 = 1$. So the modified source passes the solvability test. Concluding from this that the problem defining $g_M$ really *is* solvable uses the **sufficiency** half of the alternative, which this unit quotes rather than proves (see the note above); that is the one place in this proof where something unproved is used. Granted solvability, the solutions differ by multiples of $u_1$, and the normalisation condition fixes the multiple, since $\int (g_M + cu_1)u_1\,dx = c$.

**Step 2 (pair $g_M$ against the solution).** Let $u$ solve $Lu = f$ with the homogeneous boundary conditions, which presupposes $\int fu_1\,dx = 0$. Multiply the equation for $g_M$ by $u$, the equation for $u$ by $g_M$, subtract, and integrate in $x$ over $(a,b)$:

$$
\int_a^b\bigl(u\,Lg_M - g_M\,Lu\bigr)dx = \int_a^b u(x)\Bigl[\delta(x-\xi) - u_1(x)u_1(\xi)\Bigr]dx - \int_a^b g_M(x,\xi)f(x)\,dx .
$$

**Step 3 (the left side vanishes).** Since $L^* = L$ and both $u$ and $g_M(\cdot,\xi)$ satisfy the homogeneous boundary conditions, Green's formula makes the left-hand side the boundary term $\bigl[J(u,g_M)\bigr]_a^b$, which is zero.

**Step 4 (read off $u$).** Evaluating the first integral on the right by the sifting property and writing $C = -\int_a^b u\,u_1\,dx$, the displayed equation becomes

$$
0 = u(\xi) + C\,u_1(\xi) - \int_a^b g_M(x,\xi)f(x)\,dx ,
$$

that is, $u(\xi) = -Cu_1(\xi) + \int_a^b g_M(x,\xi)f(x)\,dx$. Relabelling $x \leftrightarrow \xi$ and using the symmetry $g_M(x,\xi) = g_M(\xi,x)$ — which is a property of the normalised choice quoted from the source, whose verification Stakgold and Holst set as their Exercise 3.5.1 and which is not proved here — gives

$$
u(x) = C'u_1(x) + \int_a^b g_M(x,\xi)f(\xi)\,d\xi
$$

with $C' = -C$ a constant. Conversely every such function solves the problem, since adding a multiple of $u_1$ changes neither $Lu$ nor the boundary values.

**Step 5 (the choice $C' = 0$ is the minimum-norm solution).** The integral term is orthogonal to $u_1$: by the normalisation of $g_M$ and its symmetry,

$$
\int_a^b u_1(x)\int_a^b g_M(x,\xi)f(\xi)\,d\xi\, dx = \int_a^b f(\xi)\left[\int_a^b g_M(x,\xi)u_1(x)\,dx\right]d\xi = 0 .
$$

By the Pythagorean theorem the squared norm of $u$ is the sum of $C'^2$ (since $\lVert u_1\rVert = 1$) and the squared norm of the integral term, so it is least when $C' = 0$. $\square$
:::

:::remark[Where the hypotheses are used, and what goes wrong]{provenance=original}
- **The adjoint boundary conditions, not just the adjoint operator.** Step 3 of the necessity proof uses $B_i^*v = 0$, not merely $L^*v = 0$. Taking the wrong homogeneous problem is the commonest way to get a wrong solvability condition. In Stakgold and Holst's Example 7, $u' = f$ on $(0,1)$ with the *two* conditions $u(0) = u(1) = 0$, the boundary term $\bigl[J(u,v)\bigr]_0^1 = u(1)v(1) - u(0)v(0)$ already vanishes for every $v$, so the adjoint problem carries *no* boundary conditions, its solutions are the constants, and the solvability condition is $\int_0^1 f\,dx = 0$ — which is also obvious by integrating the equation.
- **Self-adjointness, in the modified Green's function.** Step 1 of the last proof uses $L^* = L$ *and* the equality of the two sets of boundary conditions, to know that the solvability condition is orthogonality to $u_1$ rather than to some other function $v_1$. Drop it, and the condition on the modified source $s(x,\xi)$ is $\int_a^b s(x,\xi)v_1(x)\,dx = 0$, where $v_1$ spans the solutions of the homogeneous *adjoint* problem. So it is the second argument that must carry $v_1$. Taking the modified source to be
  $$
  \delta(x-\xi) - \frac{v_1(x)\,v_1(\xi)}{\lVert v_1\rVert^2}
  $$
  always works, since the subtracted term integrates against $v_1$ to exactly $v_1(\xi)$; and the normalisation $\int_a^b g_M(x,\xi)u_1(x)\,dx = 0$ (now against $u_1$, which spans the ambiguity) again selects one solution. The resulting $g_M$ is not symmetric. The tempting repair $u_1(x)v_1(\xi)/(u_1,v_1)$ is available only when $(u_1,v_1) \ne 0$, which can fail: in Stakgold and Holst's Exercise 3.5.4, $L = D^2$ on $(0,1)$ with $B_1u = u(0)+u(1)$ and $B_2u = u'(0)-u'(1)$, the direct homogeneous problem gives $u_1 = \sqrt3\,(1-2x)$ and the adjoint conditions $v(1) = v(0)$, $v'(1)+v'(0)=0$ give $v_1 = 1$ (both normalised), and $\int_0^1 u_1v_1\,dx = 0$. Subtracting $v_1(x)u_1(\xi)$, as one might guess by analogy with the self-adjoint case, leaves $\int_0^1[\delta(x-\xi) - v_1(x)u_1(\xi)]v_1(x)\,dx = 1 - \sqrt3\,(1-2\xi)$, nonzero for all but one $\xi$: the modified problem would then be inconsistent, which is the very defect it was built to cure.
- **A one-dimensional null space.** The definition above assumes $k = 1$. For $k \ge 2$ the modified source is $\delta(x-\xi) - \sum_{i=1}^k u_i(x)u_i(\xi)$ with $\{u_i\}$ orthonormal, and $k$ normalisation conditions are imposed; their Exercise 3.5.2 develops the case $k = 2$.
- **Normalisation of $u_1$.** If $\int u_1^2 \ne 1$ the cancellation in Step 1 fails and the modified problem is again inconsistent. The correct source is $\delta(x-\xi) - u_1(x)u_1(\xi)/\lVert u_1\rVert^2$.
- **Finite dimension, in the matrix proof.** Step 2 uses that every vector splits into its projection on $R_A$ and a component orthogonal to it. In infinite dimensions this needs the range to be *closed*, which is exactly what compactness of $K$ buys in the statements of Kreyszig and Evans, and exactly what fails for a general bounded operator. That is why the sufficiency half of the boundary-value alternative is not elementary.
- **Why the two dimensions agree.** For an $m\times n$ matrix, rank-nullity gives $\dim N_A = n - r$ and $\dim N_{A^*} = m - r$, which agree only when $m = n$ — the balanced case. The boundary-value problem is balanced in the same sense: $p$ conditions for a $p$th-order equation. Stakgold and Holst's Remark 1 of §3.2, that a third boundary condition would usually destroy existence, is the unbalanced case showing itself.
:::

:::method[Using the alternative]{provenance=adapted src="stakgold-holst-2011:§3.4, pp. 211–213, and §3.5, pp. 216–218"}
1. **Test the homogeneous problem.** Solve $Lu = 0$ with the homogeneous boundary conditions. If only $u \equiv 0$, build the ordinary Green's function and stop.
2. **Find the adjoint problem.** Compute $L^*$ and $J(u,v)$ from Green's formula, impose $B_1u = \dots = B_pu = 0$, and read off the conditions on $v$ that make $\bigl[J(u,v)\bigr]_a^b$ vanish for all such $u$. For a self-adjoint problem this step is a formality: the adjoint problem is the original one.
3. **Solve the adjoint homogeneous problem** for a basis $v^{(1)},\dots,v^{(k)}$.
4. **Write the solvability conditions** $\int_a^b f v^{(i)}dx = 0$ (homogeneous boundary data), or $\int_a^b fv^{(i)}dx = \bigl[J(u,v^{(i)})\bigr]_a^b$ evaluated from the $\gamma$'s (inhomogeneous data). Check them against the physics: they are almost always a conservation law.
5. **If they hold**, the solutions form a $k$-parameter family. For a self-adjoint problem with $k=1$, normalise $u_1$, solve $Lg_M = \delta(x-\xi) - u_1(x)u_1(\xi)$ with the homogeneous boundary conditions exactly as for an ordinary Green's function — the jump condition will come out automatically satisfied, leaving one free constant — and fix that constant by $\int_a^b g_Mu_1\,dx = 0$. Then $u = \int g_M f\,d\xi$ is the minimum-norm solution, and the general one adds $Cu_1$.
6. **If they fail**, there is no solution. The same formula $u = \int g_M f\,d\xi$ now returns the minimum-norm least-squares solution, which is the exact solution of the problem with $f$ replaced by its projection $f - u_1\int fu_1$.
:::

:::example[A resonant Neumann problem with variable coefficients]{provenance=original}
Take $Lu = \bigl(x\,u'\bigr)'$ on $1 \le x \le e$ with the Neumann conditions $u'(1) = u'(e) = 0$.

1. *The homogeneous problem.* $(xu')' = 0$ gives $xu' = c$; the condition $u'(1) = 0$ forces $c = 0$, so $u$ is constant, and a constant satisfies both conditions. The homogeneous solution space is one-dimensional, spanned by the constants: $k = 1$. The ordinary Green's function does not exist.
2. *Self-adjointness and the solvability condition.* $L = (a_2u')' + 0$ with $a_2 = x$, so $L$ is formally self-adjoint, and $J(u,v) = x(vu'-uv')$ vanishes at both endpoints when $u' = v' = 0$ there: the adjoint problem is the same problem. Normalising, $\int_1^e 1^2dx = e-1$, so $u_1 = (e-1)^{-1/2}$ and the solvability condition is
   $$
   \int_1^e f(x)\,dx = 0 .
   $$
   Physically: with both ends insulated there is no steady state unless the net source strength vanishes.
3. *The modified problem.* With $u_1(x)u_1(\xi) = 1/(e-1)$,
   $$
   \bigl(x\,g_M'\bigr)' = \delta(x-\xi) - \frac{1}{e-1}, \qquad g_M'(1,\xi) = g_M'(e,\xi) = 0, \qquad \int_1^e g_M(x,\xi)\,dx = 0 .
   $$
4. *Integrate once.* Away from $x=\xi$, $\bigl(xg_M'\bigr)' = -1/(e-1)$ gives $x\,g_M' = -x/(e-1) + k$.
   - On $(1,\xi)$: $g_M'(1) = 0$ forces $k = 1/(e-1)$, so $g_M' = \dfrac{1}{e-1}\Bigl(\dfrac1x - 1\Bigr)$.
   - On $(\xi,e)$: $g_M'(e) = 0$ forces $k = e/(e-1)$, so $g_M' = \dfrac{1}{e-1}\Bigl(\dfrac{e}{x} - 1\Bigr)$.
5. *The jump is automatic.* The jump in $g_M'$ at $x = \xi$ is
   $$
   \frac{1}{e-1}\left(\frac{e}{\xi} - \frac{1}{\xi}\right) = \frac{1}{\xi} = \frac{1}{a_2(\xi)} ,
   $$
   exactly as required — with no constant left to adjust. This is the signature of the modified problem: four conditions have become three, and one free constant survives.
6. *Integrate again and match.* Integrating, $g_M = \dfrac{\ln x - x}{e-1} + A$ on $(1,\xi)$ and $g_M = \dfrac{e\ln x - x}{e-1} + B$ on $(\xi,e)$; continuity at $x = \xi$ gives $A = B + \ln\xi$. Both branches then collapse into
   $$
   g_M(x,\xi) = \frac{\ln x - x}{e-1} + \ln x_{>} + B(\xi) , \qquad x_{>} = \max(x,\xi) .
   $$
7. *Normalise.* $\int_1^e \dfrac{\ln x - x}{e-1}dx = \dfrac{3-e^2}{2(e-1)}$, using $\int_1^e\ln x\,dx = 1$; and $\int_1^e \ln x_{>}\,dx = (\xi-1)\ln\xi + \bigl[x\ln x - x\bigr]_{\xi}^{e} = \xi - \ln\xi$. Setting the total to zero gives $B(\xi) = \dfrac{e^2-3}{2(e-1)^2} + \dfrac{\ln\xi - \xi}{e-1}$, hence
   $$
   \boxed{\;g_M(x,\xi) = \frac{\ln x - x}{e-1} + \frac{\ln\xi - \xi}{e-1} + \ln\bigl(\max(x,\xi)\bigr) + \frac{e^2-3}{2(e-1)^2}\;}
   $$
   which is visibly symmetric in $x$ and $\xi$, as the theory promises. Numerically the constant is $0.7432798$.
8. *Use it.* Take $f(x) = 1/x - 1/(e-1)$, which satisfies $\int_1^e f = 1 - 1 = 0$. Then
   $$
   u(x) = \int_1^e g_M(x,\xi)f(\xi)\,d\xi = \frac{(\ln x)^2}{2} - \frac{x}{e-1} + \frac{\ln x}{e-1} + c , \qquad c = \frac{3}{2(e-1)} - \frac{1}{(e-1)^2} .
   $$
9. *Check directly.* Integrating $(xu')' = 1/x - 1/(e-1)$ gives $xu' = \ln x - x/(e-1) + k$; the condition $u'(1) = 0$ gives $k = 1/(e-1)$, and then $xu'$ at $x=e$ is $1 - e/(e-1) + 1/(e-1) = 0$, so the second condition is met automatically — the solvability condition at work. A further integration reproduces item 8 up to the additive constant, and $\int_1^e u\,dx = 0$ pins that constant to the value of $c$ above, $c = 0.5342682$. At $x = 2$ the solution is $u(2) = 0.01393678$.
10. *An inconsistent source.* Take instead $f(x) = 1/x$, for which $\int_1^e f = 1 \ne 0$: no solution exists. But $G_M$ annihilates constants, because $\int_1^e g_M(x,\xi)\,d\xi = 0$ for every $x$ by the normalisation and the symmetry. So $G_M$ applied to $1/x$ gives the same function as $G_M$ applied to $1/x - 1/(e-1)$, namely the $u$ of item 8. That function solves the problem exactly for the projected source, and is therefore the minimum-norm least-squares solution for $f = 1/x$.
:::

:::application{provenance=original}
The solvability condition is almost always a conservation law in disguise, and recognising it saves a great deal of fruitless computation.

- **Insulated systems.** Steady heat conduction in a rod with both ends insulated, steady diffusion in a sealed vessel, steady flow in a closed loop: in each case the homogeneous problem has the constants as solutions, and the alternative says a steady state exists only if the total source strength is zero. Stakgold and Holst make the point dynamically: with a net source, the time-dependent temperature grows without bound rather than settling. The example above is the version with a variable conductance.
- **Electrostatics with Neumann data.** $\nabla^2\varphi = -\rho/\varepsilon_0$ in a region with $\partial\varphi/\partial n$ prescribed on the boundary has a solution only if the prescribed normal flux integrates to the enclosed charge — Gauss's law reappearing as a solvability condition — and $\varphi$ is then fixed only to within an added constant, the null direction.
- **Rigid-body modes in mechanics.** A free elastic body, or a truss with no supports, has a stiffness operator whose null space is the rigid translations and rotations. The alternative says an equilibrium exists only for self-equilibrated loads — zero net force and zero net torque — and the displacement is then fixed only up to a rigid motion. Finite-element codes handle this exactly as item 10 above does: they project the load onto the range and return the minimum-norm displacement, which is the pseudoinverse solution.
- **Resonance.** For $u'' + \lambda u = f$ at an eigenvalue $\lambda = \lambda_k$, the forcing must be orthogonal to the resonant mode or no steady response exists; a driven oscillator forced exactly at its natural frequency grows linearly in time instead. This is why the modified Green's function appears in perturbation theory: in the Rayleigh–Schrödinger expansion for a nondegenerate level, the first-order correction to the state is obtained by applying the reduced resolvent — the modified Green's function of $H_0 - E_0$, with the unperturbed state projected out — to the perturbation, and the solvability condition is exactly the statement that $E_1 = \langle\psi_0|V|\psi_0\rangle$.
- **Numerical linear algebra.** The matrix case of this unit is the theory behind least squares and the Moore–Penrose pseudoinverse: $Au = f$ is solvable iff $f \perp \ker A^{\mathsf{T}}$, and otherwise the normal equations $A^{\mathsf{T}}Au = A^{\mathsf{T}}f$ return the least-squares solution, with the singular value decomposition supplying the minimum-norm one (:ref[the singular value decomposition]{to=linalg.svd}). Discretising a resonant boundary-value problem produces a nearly singular matrix, and the modified Green's function is what the pseudoinverse converges to.
:::
