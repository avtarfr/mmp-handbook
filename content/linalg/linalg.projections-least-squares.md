---
id: linalg.projections-least-squares
title: Orthogonal projection and least squares
kind: theorem
level: core
summary: Orthogonal projection onto a finite-dimensional subspace, its characterisation as the nearest point of that subspace, and the normal equations that this turns into for the least-squares problem of minimising the norm of Ax minus b.
prereqs: [linalg.gram-schmidt, linalg.linear-systems]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§4.5, orthogonal projection on a line, eq. (4.5.8), and uniqueness of the decomposition, pp. 264–265; the orthogonal complement is a closed linear manifold, p. 266; Projection Theorem and its proof, pp. 266–267; Remarks on the Proof 1–3, pp. 267–268; §4.6, Problem of Best Approximation, eqs. (4.6.4)–(4.6.5), p. 278"
    pages: "264-268, 278"
    role: the projection theorem with the nearest-point characterisation; the Fourier sum as the best approximation in a finite-dimensional manifold; the counterexamples showing what fails without closedness or without the parallelogram law
  - work: kreyszig-1978
    loc: "§3.3, Thm 3.3-1 (minimizing vector), pp. 144–145; Lemma 3.3-2 (orthogonality of the remainder), p. 145; Def. 3.3-3 and Thm 3.3-4 (direct sum, projection theorem), pp. 146–147; §9.5, projection operators and Thm 9.5-1, pp. 480–481"
    pages: "144-147, 480-481"
    role: existence and uniqueness of the minimizing vector and the orthogonality of the residual; the projection operator and its characterisation as a self-adjoint idempotent
  - work: lee-2013
    loc: "App. B, orthogonal complement and Exercise B.45, p. 637; the natural projection with kernel the orthogonal complement, p. 637"
    pages: "637"
    role: the orthogonal direct-sum decomposition in finite dimensions and the resulting projection map
  - work: hassani-2013
    loc: "§4.4, idempotents and Prop. 4.4.1, pp. 119–120; §4.4.1, Def. 4.4.2 (a projection operator is a hermitian idempotent) and the rank-one projection, pp. 120–121"
    pages: "119-121"
    role: the algebraic description of a projection as a hermitian idempotent, and the projection along a single vector
---

:::definition[Orthogonal projection]{provenance=adapted src="stakgold-holst-2011:§4.5, pp. 264–266; lee-2013:App. B, p. 637; hassani-2013:§4.4.1, Def. 4.4.2, p. 120"}
Let $V$ be an inner product space over $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$, with $(\cdot,\cdot)$ linear in its first slot, and let $M\subseteq V$ be a subspace. Recall $M^{\perp} = \{v\in V : (v,u) = 0 \text{ for all } u\in M\}$, itself a subspace.

Suppose every $x\in V$ can be written as $x = p+w$ with $p\in M$ and $w\in M^{\perp}$, and that this decomposition is unique. Then $p$ is the **orthogonal projection of $x$ on $M$**, and the map

$$
P\colon V\to V, \qquad Px = p
$$

is the **orthogonal projection onto $M$**. An operator $P$ on $V$ is **idempotent** if $P^2 = P$, and **self-adjoint** if $(Px,y) = (x,Py)$ for all $x,y\in V$.

Given $A\in M_{m\times n}(\mathbb{F})$ and $b\in\mathbb{F}^m$, a **least-squares solution** of $Ax = b$ is any $x\in\mathbb{F}^n$ minimising $\lVert Ax-b\rVert$ over $\mathbb{F}^n$; the vector $b-Ax$ is the **residual**. The **normal equations** are $A^{*}Ax = A^{*}b$, with $A^{*}$ the conjugate transpose ($A^{\mathsf T}$ when $\mathbb{F} = \mathbb{R}$).
:::

:::statement[Projection onto a finite-dimensional subspace]{provenance=adapted src="kreyszig-1978:§3.3, Thm 3.3-1, pp. 144–145, Lemma 3.3-2, p. 145, Thm 3.3-4, pp. 146–147, and §9.5, Thm 9.5-1, pp. 480–481; stakgold-holst-2011:§4.5, Projection Theorem, pp. 266–267, and §4.6, p. 278; lee-2013:App. B, Exercise B.45, p. 637"}
Let $V$ be an inner product space over $\mathbb{F}$ and let $M\subseteq V$ be a subspace with $\dim_{\mathbb{F}}M = k<\infty$. Completeness of $V$ is *not* assumed.

1. **Decomposition.** $V = M\oplus M^{\perp}$: every $x\in V$ is $x = p+w$ with $p\in M$ and $w\in M^{\perp}$ in exactly one way. Hence the orthogonal projection $P$ onto $M$ is defined on all of $V$.
2. **Best approximation.** $p = Px$ is the unique nearest point of $M$ to $x$:

   $$
   \lVert x-p\rVert = \min_{u\in M}\lVert x-u\rVert ,
   $$

   and $p$ is the only $u\in M$ attaining the minimum. Equivalently, $u\in M$ attains it if and only if $x-u\perp M$.
3. **Pythagoras.** $\lVert x\rVert^2 = \lVert Px\rVert^2+\lVert x-Px\rVert^2$, so $\lVert Px\rVert\le\lVert x\rVert$, with equality exactly when $x\in M$.
4. **Formula.** If $(e_1,\dots,e_k)$ is an orthonormal basis of $M$, then $Px = \sum_{i=1}^{k}(x,e_i)\,e_i$: the projection is the Fourier sum of $x$ for that basis, and the value does not depend on which orthonormal basis of $M$ is used.
5. **Algebraic characterisation.** $P$ is linear with $\operatorname{im}P = M$ and $\ker P = M^{\perp}$, and it is idempotent and self-adjoint; $I-P$ is the orthogonal projection onto $M^{\perp}$. Conversely, if $\dim_{\mathbb{F}}V<\infty$ and a linear operator $P$ on $V$ is idempotent and self-adjoint, then $P$ is the orthogonal projection onto $\operatorname{im}P$.
:::

:::idea{provenance=original}
Finite dimension of $M$ buys an orthonormal basis of it, and with that basis in hand the projection can simply be *written down* as the Fourier sum, instead of being obtained as the limit of a minimising sequence. Everything else follows from one computation: subtracting the Fourier sum leaves a remainder perpendicular to every basis vector of $M$, hence to all of $M$. The decomposition $V = M\oplus M^{\perp}$ is then immediate, uniqueness comes from $M\cap M^{\perp} = \{0\}$, and the nearest-point property is Pythagoras applied to the right-angled triangle with vertices $x$, $p$ and a competitor $u\in M$: the distance to $u$ exceeds the distance to $p$ by exactly $\lVert p-u\rVert$ in the squares. The algebraic characterisation is then bookkeeping with the same two facts.
:::

:::proof{provenance=adapted src="kreyszig-1978:§3.3, Lemma 3.3-2, p. 145, Thm 3.3-4, pp. 146–147, and §9.5, Thm 9.5-1, pp. 480–481; stakgold-holst-2011:§4.5, Projection Theorem, part (c), p. 267, and §4.6, eqs. (4.6.4)–(4.6.5), p. 278"}
Throughout, $\dim_{\mathbb F}M = k<\infty$. If $k=0$ then $M = \{0\}$, $M^{\perp} = V$, $P = 0$, and every assertion is immediate; so assume $k\ge1$ and fix an orthonormal basis $(e_1,\dots,e_k)$ of $M$, which exists by part 3 of the Gram-Schmidt statement in :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt} applied to the inner product space $M$. Note first that

$$
M\cap M^{\perp} = \{0\} ,
$$

because $z$ in both satisfies $(z,z) = 0$, hence $z=0$ by definiteness of the inner product.

**Parts 1 and 4.** Given $x\in V$, set $p = \sum_{i=1}^{k}(x,e_i)e_i\in M$ and $w = x-p$. By part 2 of the expansion statement in :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt}, $w\perp e_i$ for every $i$; since every $u\in M$ is a combination $u = \sum_ic_ie_i$ and the inner product is conjugate-linear in its second slot, $(w,u) = \sum_i\overline{c_i}(w,e_i) = 0$. So $w\in M^{\perp}$ and $x = p+w$ is a decomposition of the required kind. If $x = p+w = p'+w'$ are two of them, then $p-p' = w'-w$ lies in $M\cap M^{\perp} = \{0\}$, so $p=p'$ and $w=w'$. Hence $V = M\oplus M^{\perp}$, the projection $P$ is defined on all of $V$, and $Px = p$ is the Fourier sum, which is part 4. The value does not depend on the orthonormal basis chosen, because $Px$ is characterised basis-free as the unique element of $M$ with $x-Px\in M^{\perp}$.

**Part 2.** Let $u\in M$. Then $x-u = (x-p)+(p-u)$ with $x-p\in M^{\perp}$ and $p-u\in M$, so the two summands are orthogonal and

$$
\lVert x-u\rVert^2 = \lVert x-p\rVert^2+\lVert p-u\rVert^2 \ \ge\ \lVert x-p\rVert^2 ,
$$

with equality precisely when $\lVert p-u\rVert = 0$, that is when $u = p$. So $p$ attains the minimum and is the only element of $M$ that does. For the last clause: if $u\in M$ attains the minimum then $u=p$ by what was just shown, and $x-p\in M^{\perp}$; conversely, if $u\in M$ and $x-u\in M^{\perp}$ then $x = u+(x-u)$ is a decomposition of the required kind, so $u = p$ by the uniqueness in part 1.

**Part 3.** Apply the same orthogonal splitting to $u=0$: $x = Px+(x-Px)$ with the two terms orthogonal, so $\lVert x\rVert^2 = \lVert Px\rVert^2+\lVert x-Px\rVert^2$. Hence $\lVert Px\rVert\le\lVert x\rVert$, with equality exactly when $\lVert x-Px\rVert = 0$, that is when $x = Px\in M$.

**Part 5.** Linearity of $P$ is linearity of each coefficient map $x\mapsto (x,e_i)$, which holds because the inner product is linear in its first slot. $P$ maps into $M$, and for $u\in M$ part 3 of the expansion statement applied inside $M$ gives $u = \sum_i(u,e_i)e_i = Pu$; so $\operatorname{im}P = M$ and, since $Pu = u$ there, $P^2 = P$. Next, $Px = 0$ holds if and only if all the coefficients $(x,e_i)$ vanish, which happens if and only if $x\perp M$; so $\ker P = M^{\perp}$. Self-adjointness is a two-line computation:

$$
(Px,y) = \sum_{i=1}^{k}(x,e_i)(e_i,y) , \qquad
(x,Py) = \sum_{i=1}^{k}\overline{(y,e_i)}\,(x,e_i) ,
$$

and these agree because $(e_i,y) = \overline{(y,e_i)}$. That $I-P$ is the orthogonal projection onto $M^{\perp}$ follows from the decomposition $x = (x-Px)+Px$ with $x-Px\in M^{\perp}$ and $Px\in M\subseteq (M^{\perp})^{\perp}$, together with $M^{\perp}\cap (M^{\perp})^{\perp} = \{0\}$, which gives uniqueness as before.

For the converse, let $\dim_{\mathbb F}V<\infty$ and let $P$ be linear, idempotent and self-adjoint; put $N = \operatorname{im}P$, a subspace. For $x\in V$ write $x = Px+(x-Px)$. The first term is in $N$. For the second, take any $u = Pv\in N$; then, using self-adjointness and $P^2=P$,

$$
(x-Px,\,Pv) = (P(x-Px),\,v) = (Px-P^2x,\,v) = 0 ,
$$

so $x-Px\in N^{\perp}$. Uniqueness of the decomposition again follows from $N\cap N^{\perp} = \{0\}$. Hence $P$ is the orthogonal projection onto $N = \operatorname{im}P$. $\square$
:::

:::statement[Least squares and the normal equations]{provenance=adapted src="kreyszig-1978:§3.3, Thm 3.3-1 and Lemma 3.3-2, pp. 144–145; stakgold-holst-2011:§4.6, eqs. (4.6.4)–(4.6.5), p. 278"}
Let $A\in M_{m\times n}(\mathbb{F})$ and $b\in\mathbb{F}^m$, let $r = \operatorname{rank}A$, and let $P$ be the orthogonal projection of $\mathbb{F}^m$ onto $\operatorname{im}A$.

1. **A minimiser always exists**, because $\operatorname{im}A$ is a subspace of dimension $r<\infty$ and part 2 of the projection statement applies to $M = \operatorname{im}A$.
2. **Characterisation.** For $x\in\mathbb{F}^n$ the following are equivalent: $x$ minimises $\lVert Ax-b\rVert$; $Ax = Pb$; the residual satisfies $b-Ax\in(\operatorname{im}A)^{\perp} = \ker A^{*}$; and $x$ solves the normal equations $A^{*}Ax = A^{*}b$.
3. **Solution set.** The normal equations are always consistent, and the set of least-squares solutions is a coset $x_0+\ker A$ of dimension $n-r$. The minimal residual $b-Pb$ is the same for all of them, and $\lVert b\rVert^2 = \lVert Pb\rVert^2+\lVert b-Pb\rVert^2$.
4. **Uniqueness.** $\ker(A^{*}A) = \ker A$, so $A^{*}A$ is invertible if and only if $r = n$ (which requires $m\ge n$). In that case the least-squares solution is unique and

   $$
   x = (A^{*}A)^{-1}A^{*}b .
   $$

5. **Via QR.** If $r = n$ and $A = QR$ is the factorization of :ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt}, with $Q^{*}Q = I_n$ and $R$ upper triangular with positive diagonal, then $A^{*}A = R^{*}R$ and the normal equations reduce to the triangular system

   $$
   Rx = Q^{*}b, \qquad\text{with}\qquad \lVert Ax-b\rVert^2 = \lVert b\rVert^2-\lVert Q^{*}b\rVert^2 .
   $$
:::

:::idea{provenance=original}
The minimisation is over the vectors $Ax$, and those are exactly the vectors of $\operatorname{im}A$, a subspace of dimension $r<\infty$. So the previous statement already answers the geometric question: the closest attainable vector is $Pb$, and the equation to solve is $Ax = Pb$. Everything after that is a translation of "the residual is perpendicular to $\operatorname{im}A$" into matrix language, and the translation is the single identity $(Ay,v) = (y,A^{*}v)$, which turns $(\operatorname{im}A)^{\perp}$ into $\ker A^{*}$ and the orthogonality condition into $A^{*}Ax = A^{*}b$. The two refinements then come for free: $A^{*}A$ has the same kernel as $A$, which decides uniqueness; and if $A = QR$ then $A^{*}A = R^{*}R$, so the normal equations are a triangular system in disguise.
:::

:::proof{provenance=adapted src="kreyszig-1978:§3.3, Thm 3.3-1 and Lemma 3.3-2, pp. 144–145; stakgold-holst-2011:§4.6, Problem of Best Approximation, eqs. (4.6.4)–(4.6.5), p. 278"}
Throughout we use the standard inner products on $\mathbb{F}^n$ and $\mathbb{F}^m$ and the identity

$$
(Ay,v) = (y,A^{*}v) \qquad (y\in\mathbb{F}^n,\ v\in\mathbb{F}^m) ,
$$

which holds because $(x,y) = y^{*}x$ makes both sides equal to $v^{*}Ay$.

**Part 1.** $\operatorname{im}A$ is a subspace of $\mathbb{F}^m$ of dimension $r = \operatorname{rank}A<\infty$ (:ref[Linear systems and rank]{to=linalg.linear-systems}), so part 2 of the projection statement applies with $M = \operatorname{im}A$ and provides a unique nearest point $Pb\in\operatorname{im}A$ to $b$. Since $\{Ax : x\in\mathbb{F}^n\} = \operatorname{im}A$, the quantity $\lVert Ax-b\rVert$ ranges over exactly the same values as $\lVert u-b\rVert$ for $u\in M$; the minimum is therefore attained, at any $x$ with $Ax = Pb$, and at least one such $x$ exists because $Pb\in\operatorname{im}A$.

**Part 2.** The chain of equivalences:

- $x$ minimises $\lVert Ax-b\rVert$ if and only if $Ax$ is the nearest point of $\operatorname{im}A$ to $b$, by the previous paragraph, and that nearest point is unique, so this holds if and only if $Ax = Pb$.
- $Ax = Pb$ holds exactly when $b-Ax\in(\operatorname{im}A)^{\perp}$. Indeed $Ax\in\operatorname{im}A$ always, so the last clause of part 2 of the projection statement makes $Ax$ the nearest point precisely when $b-Ax\perp\operatorname{im}A$.
- $(\operatorname{im}A)^{\perp} = \ker A^{*}$: a vector $v$ has $(Ay,v) = 0$ for every $y\in\mathbb{F}^n$ precisely when $(y,A^{*}v) = 0$ for every such $y$, and the only vector orthogonal to the whole of $\mathbb{F}^n$ is $0$; so the condition reads $A^{*}v = 0$.
- Finally $b-Ax\in\ker A^{*}$ means $A^{*}b-A^{*}Ax = 0$, which is the normal equations.

**Part 3.** By part 1 there is an $x_0$ with $Ax_0 = Pb$, and by part 2 it solves the normal equations, which are therefore consistent. Again by part 2, $x$ is a least-squares solution if and only if $Ax = Pb = Ax_0$, that is $A(x-x_0) = 0$; so the solution set is the coset $x_0+\ker A$, whose dimension is $n-r$ by rank-nullity. For every such $x$ the residual is $b-Ax = b-Pb$, the same vector. Finally $\lVert b\rVert^2 = \lVert Pb\rVert^2+\lVert b-Pb\rVert^2$ is part 3 of the projection statement.

**Part 4.** If $Ax = 0$ then $A^{*}Ax = 0$. Conversely, if $A^{*}Ax = 0$ then

$$
\lVert Ax\rVert^2 = (Ax,Ax) = (x,A^{*}Ax) = (x,0) = 0 ,
$$

so $Ax = 0$. Hence $\ker(A^{*}A) = \ker A$. The matrix $A^{*}A$ is $n\times n$, so it is invertible if and only if its kernel is $\{0\}$, that is if and only if $\ker A = \{0\}$, that is $r = n$ — which forces $n = r\le m$. In that case the unique solution of the normal equations is $x = (A^{*}A)^{-1}A^{*}b$, and it is the unique least-squares solution by part 2.

**Part 5.** Let $r = n$ and $A = QR$ as in the QR statement, so $Q^{*}Q = I_n$ and $R$ is upper triangular with real positive diagonal. Then

$$
A^{*}A = R^{*}Q^{*}QR = R^{*}R ,
$$

and $A^{*}b = R^{*}Q^{*}b$, so the normal equations read $R^{*}(Rx-Q^{*}b) = 0$. Now $\det R = R_{11}\cdots R_{nn}>0$, so $R$ and hence $R^{*}$ are invertible, and the normal equations are equivalent to $Rx = Q^{*}b$, a triangular system solved by back substitution.

For the residual, the columns of $Q$ are an orthonormal basis of $\operatorname{im}A$ by part 2 of the QR statement, so part 4 of the projection statement gives $Pb = \sum_{i=1}^{n}(b,q_i)q_i = QQ^{*}b$. Hence $Ax = QRx = QQ^{*}b = Pb$ for the least-squares solution, and

$$
\lVert Ax-b\rVert^2 = \lVert b-Pb\rVert^2 = \lVert b\rVert^2-\lVert Pb\rVert^2 = \lVert b\rVert^2-\lVert Q^{*}b\rVert^2 ,
$$

the middle equality by part 3 of the projection statement and the last because $\lVert Qz\rVert^2 = z^{*}Q^{*}Qz = \lVert z\rVert^2$ for every $z\in\mathbb{F}^n$. $\square$
:::

:::note[What it means]{provenance=original}
Dropping a perpendicular is the whole content of both statements. The nearest point of a subspace to a given vector is found by removing the component that sticks out, and "sticking out" means orthogonal to the subspace; part 4 says that with an orthonormal basis in hand this costs $k$ inner products. The least-squares problem is the same picture in $\mathbb{F}^m$ with the subspace taken to be the column space of $A$: an inconsistent system $Ax = b$ is replaced by the consistent system $Ax = Pb$, and demanding that the residual be orthogonal to every column of $A$ is literally the normal equations. Reach for this whenever there are more measurements than parameters.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="stakgold-holst-2011:§4.5, Projection Theorem and Remarks on the Proof 1–3, pp. 266–268; kreyszig-1978:§3.3, Thm 3.3-1, pp. 144–145"}
- **Finite dimension of $M$ is doing real work.** A subspace of finite dimension is automatically closed, which is what makes the minimum in part 2 attained. Stakgold and Holst prove the projection theorem for a closed linear manifold of a *complete* space, and their first remark shows what goes wrong otherwise: in $L^2(a,b)$ take $M$ to be the set of all polynomials, which is a linear manifold but is not closed. For a $u\in L^2$ that is not a polynomial the infimum $\inf_{z\in M}\lVert u-z\rVert$ is $0$ and is attained by no element of $M$. So without closedness there may be no nearest point at all, and parts 1–5 all fail.
- **Only the parallelogram law makes the nearest point exist and be unique.** Kreyszig's Theorem 3.3-1 obtains it from the parallelogram equality, which is special to inner product norms. Stakgold and Holst's second remark gives the Banach-space counterexample: in $C[0,1]$ with the supremum norm, let $M$ be the continuous functions vanishing at $0$; the function $u\equiv 1$ has no closest element in $M$.
- **Convexity, not linearity, is what the minimisation needs.** Kreyszig's Theorem 3.3-1 assumes only that $M$ is convex and complete; linearity is used afterwards, in Lemma 3.3-2, to get the orthogonality $x-p\perp M$. For a merely convex set the nearest point still exists and is unique, but the residual satisfies only a variational inequality.
- **Normal equations are not the recommended computation.** Forming $A^{*}A$ squares the condition number of $A$, so part 4 as written loses about twice as many digits as part 5, where $R$ inherits the conditioning of $A$. Use the QR route, or :ref[the singular value decomposition]{to=linalg.svd} when $r<n$: there the least-squares solutions form a positive-dimensional coset by part 3, and the pseudoinverse picks out the one of smallest norm. See also :ref[Matrix norms and conditioning]{to=linalg.matrix-norms-conditioning}.
- **Adjoint, not transpose.** As in :ref[Linear systems and rank]{to=linalg.linear-systems}, the normal equations over $\mathbb{C}$ use the conjugate transpose; $A^{\mathsf T}Ax = A^{\mathsf T}b$ is the wrong system unless $A$ and $b$ are real. The projection is self-adjoint, $P = P^{*} = P^2$, not merely symmetric.
:::

:::example[A straight line through four points, three ways]{provenance=original}
Four measurements $y$ are taken at the times $t = 0,1,2,3$:

$$
(t,y) = (0,1),\ (1,3),\ (2,2),\ (3,6) .
$$

Fitting $y = c_1+c_2t$ means solving $Ax = b$ with

$$
A = \begin{pmatrix}1&0\\1&1\\1&2\\1&3\end{pmatrix}, \qquad
b = \begin{pmatrix}1\\3\\2\\6\end{pmatrix}, \qquad x = \begin{pmatrix}c_1\\c_2\end{pmatrix} ,
$$

which has no solution: $b$ is not in the plane $\operatorname{im}A\subset\mathbb{R}^4$. Here $m=4$, $n=2$ and $\operatorname{rank}A = 2$, so part 4 applies and there is exactly one least-squares solution.

**Route 1: the normal equations.** With $A^{\mathsf T}A = \begin{pmatrix}4&6\\6&14\end{pmatrix}$ and $A^{\mathsf T}b = \begin{pmatrix}12\\25\end{pmatrix}$ (the entries are $\sum y_i = 12$ and $\sum t_iy_i = 0+3+4+18 = 25$), and $\det(A^{\mathsf T}A) = 56-36 = 20$,

$$
x = \frac{1}{20}\begin{pmatrix}14&-6\\-6&4\end{pmatrix}\begin{pmatrix}12\\25\end{pmatrix} = \frac{1}{20}\begin{pmatrix}18\\28\end{pmatrix} = \begin{pmatrix}9/10\\7/5\end{pmatrix} .
$$

So the fitted line is $y = 0.9+1.4\,t$.

**Route 2: orthonormal basis and the Fourier sum.** Gram-Schmidt on the columns of $A$ gives $R_{11} = 2$, $q_1 = \tfrac12(1,1,1,1)$, then $R_{12} = (a_2,q_1) = \tfrac12(0+1+2+3) = 3$,

$$
\tilde q_2 = (0,1,2,3)-3q_1 = \tfrac12(-3,-1,1,3), \qquad R_{22} = \sqrt5, \qquad q_2 = \frac{1}{2\sqrt5}(-3,-1,1,3) .
$$

The Fourier coefficients of $b$ are $(b,q_1) = \tfrac12(1+3+2+6) = 6$ and

$$
(b,q_2) = \frac{-3+(-1)(3)+1\cdot2+3\cdot6}{2\sqrt5} = \frac{14}{2\sqrt5} = \frac{7}{\sqrt5} ,
$$

so by part 4 of the projection statement

$$
Pb = 6q_1+\frac{7}{\sqrt5}q_2 = (3,3,3,3)+\tfrac{7}{10}(-3,-1,1,3) = \tfrac{1}{10}(9,23,37,51) .
$$

These are precisely the fitted values $0.9+1.4t$ at $t=0,1,2,3$, as part 2 of the least-squares statement predicts.

**Route 3: QR.** With $R = \begin{pmatrix}2&3\\0&\sqrt5\end{pmatrix}$ and $Q^{\mathsf T}b = (6,\,7/\sqrt5)$, back substitution in $Rx = Q^{\mathsf T}b$ gives $\sqrt5\,c_2 = 7/\sqrt5$, so $c_2 = 7/5$, and then $2c_1 = 6-3\cdot\tfrac75 = \tfrac95$, so $c_1 = 9/10$: the same answer, with no $A^{\mathsf T}A$ formed.

**Checks.** The residual is

$$
b-Pb = \tfrac{1}{10}(1,7,-17,9), \qquad \lVert b-Pb\rVert^2 = \frac{1+49+289+81}{100} = \frac{420}{100} = \frac{21}{5} .
$$

Part 2 says it must be orthogonal to both columns of $A$: indeed $1+7-17+9 = 0$ and $0+7-34+27 = 0$. Part 5 predicts the same number without the residual vector,

$$
\lVert b\rVert^2-\lVert Q^{\mathsf T}b\rVert^2 = (1+9+4+36)-\Bigl(36+\frac{49}{5}\Bigr) = 50-\frac{229}{5} = \frac{21}{5} ,
$$

and part 3 of the projection statement is the identity $50 = \lVert Pb\rVert^2+\tfrac{21}{5}$, i.e. $\lVert Pb\rVert^2 = 229/5$, which agrees with $(9^2+23^2+37^2+51^2)/100 = 4580/100$.

**The projection matrix.** From $P = QQ^{\mathsf T} = A(A^{\mathsf T}A)^{-1}A^{\mathsf T}$,

$$
P = \frac{1}{20}\begin{pmatrix}14&8&2&-4\\8&6&4&2\\2&4&6&8\\-4&2&8&14\end{pmatrix} ,
$$

which is symmetric, as part 5 of the projection statement requires; one multiplication confirms $P^2 = P$; its trace is $\tfrac{14+6+6+14}{20} = 2 = \dim\operatorname{im}A$; and $P(1,1,1,1) = (1,1,1,1)$ because $(1,1,1,1)$ is the first column of $A$ and so already lies in $M$.
:::

:::application{provenance=original}
**Fitting a model to more data than parameters.** This is the everyday use: $n$ parameters, $m\gg n$ measurements, a design matrix $A$ whose columns are the model's basis functions sampled at the measurement points, and a residual that the fit makes orthogonal to every one of them. The orthogonality is not a numerical accident but the definition of the fit, and it is what makes the residual a legitimate estimate of noise: it has no component along any direction the model could have explained. The same equations compute a calibration curve, a reaction rate from an Arrhenius plot, and the gravitational field coefficients of the Earth from satellite tracking — the problem Gauss invented the method for, when he recovered the orbit of Ceres from a short arc of observations.

**Receivers and estimators.** A GPS receiver sees more satellites than the four unknowns (three coordinates and a clock offset) require, and solves the linearised problem in the least-squares sense at every update; the matrix $(A^{*}A)^{-1}$, which part 4 produces anyway, is what the receiver reports as its position covariance, and its diagonal is the familiar dilution-of-precision figure. Recursive forms of the same computation, in which $Pb$ is updated as each new measurement arrives rather than recomputed, are the Kalman filter and the recursive least-squares algorithms of signal processing.

**Projection as the definition of an approximation scheme.** Part 2 says that a projection is a *best* approximation, which is why so many numerical methods are projections in disguise. A Galerkin or finite-element method replaces a differential equation by the demand that the residual be orthogonal to a finite-dimensional trial space, so the computed solution is the orthogonal projection of the true one in the energy inner product, and part 3 bounds its norm by the true solution's. Truncating a Fourier series after $N$ terms is the same statement in $L^2$: the truncation is the nearest trigonometric polynomial of that degree, not merely a convenient one (:ref[Mean-square convergence and Parseval's identity]{to=fourier.parseval-mean-square}). In quantum mechanics, the Rayleigh-Ritz method projects the Hamiltonian onto the span of a chosen set of trial states, and the variational bound it gives is the same inequality $\lVert Px\rVert\le\lVert x\rVert$ seen from the other side.
:::
