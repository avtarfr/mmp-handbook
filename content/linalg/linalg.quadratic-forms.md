---
id: linalg.quadratic-forms
title: Quadratic forms and the Rayleigh quotient
kind: method
level: core
summary: How to reduce a quadratic or Hermitian form to its principal axes, decide its definiteness from the eigenvalue signs or from Sylvester's criterion on the leading principal minors, and bound the eigenvalues by the Rayleigh quotient.
prereqs: [linalg.hermitian-spectral-theorem, linalg.determinants, linalg.unitary-orthogonal-matrices, linalg.gram-schmidt, linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.17 (quadratic and Hermitian forms; only the symmetric part contributes; reduction to principal axes, Eqs (8.105)-(8.110)) pp. 288-290; §8.17 (positive definite and positive semi-definite read off from the eigenvalue signs, following Eq. (8.112)) p. 290; §8.17.1 (stationary values of the quotient, Eqs (8.114)-(8.116)) p. 291; §8.17.2 (quadratic surfaces and principal radii) p. 292"
    pages: "288-292"
    role: definitions; symmetrisation; the orthogonal reduction to a sum of squares; the semidefinite half of the eigenvalue test; the stationary-value characterisation of eigenvalues; principal axes and radii of the level surface
  - work: gelfand-fomin-1963
    loc: "§30, the statement of the Sylvester criterion for a positive definite quadratic form, p. 127"
    pages: "127"
    role: Sylvester's criterion in terms of the descending (leading) principal minors
  - work: hassani-2013
    loc: "§6.4, Cor 6.4.10, p. 181 (stated for Hassani's non-strict \"positive\", Def 4.3.9, p. 117)"
    pages: "117, 181"
    role: the semidefinite half of the eigenvalue test
---

:::definition[Quadratic and Hermitian forms, definiteness]{provenance=adapted src="rhb-2006:§8.17, Eqs (8.105)-(8.112), pp. 288-290"}
A **quadratic form** on $\mathbb{R}^n$ is a function $Q(x) = x^{\mathsf T} A x$ with $A$ a real $n \times n$ matrix. Only the symmetric part of $A$ contributes: writing $A = \tfrac12(A + A^{\mathsf T}) + \tfrac12(A - A^{\mathsf T})$, the antisymmetric part $B$ satisfies $x^{\mathsf T} B x = 0$ for every $x$, because $x^{\mathsf T} B x$ is a scalar and equals its own transpose $-x^{\mathsf T} B x$. **We therefore always take $A = A^{\mathsf T}$**, at the cost of no generality; the symmetric matrix representing a given form is then unique. The complex analogue is the **Hermitian form** $H(x) = x^\dagger A x$ with $A = A^\dagger$, which is real-valued for every $x \in \mathbb{C}^n$ since $\overline{H(x)} = x^\dagger A^\dagger x = H(x)$.

A Hermitian (or real symmetric) $A$ and its form are called

- **positive definite** if $x^\dagger A x > 0$ for all $x \neq 0$;
- **positive semidefinite** if $x^\dagger A x \ge 0$ for all $x$;
- **negative definite** / **negative semidefinite** if $-A$ is positive definite / semidefinite;
- **indefinite** if $x^\dagger A x$ takes both signs.

For $1 \le k \le n$, the $k$-th **leading principal minor** of $A$ is $D_k = \det A^{(k)}$, where $A^{(k)}$ is the top-left $k \times k$ submatrix of $A$. A **principal minor** is the determinant of any submatrix obtained by keeping the same set of rows and columns.
:::

:::statement[Principal axes]{provenance=adapted src="rhb-2006:§8.17, Eqs (8.110)-(8.111), p. 289 and §8.17.2, p. 292"}
Let $A$ be real symmetric $n \times n$ with eigenvalues $\lambda_1, \dots, \lambda_n$ (with multiplicity) and a real orthonormal eigenbasis $u_1, \dots, u_n$, as supplied by :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem}, and let $S = (u_1 \ \cdots \ u_n)$, so $S^{\mathsf T} A S = \Lambda$. Substituting $x = S x'$ gives

$$
Q(x) = x^{\mathsf T} A x = (x')^{\mathsf T} \Lambda x' = \lambda_1 x_1'^2 + \cdots + \lambda_n x_n'^2 ,
$$

a sum of squares with no cross terms; the new axes, along the $u_k$, are the **principal axes** of the form. The same holds for a Hermitian form with $S$ unitary and $x_k'^2$ replaced by $|x_k'|^2$.

The level set $L = \{x : x^{\mathsf T} A x = 1\}$ is non-empty if and only if at least one $\lambda_k$ is positive. If some $\lambda_k > 0$, then $L$ meets the line $\mathbb{R}u_k$, on which the form takes the values $\lambda_k t^2$, at $t = \pm \lambda_k^{-1/2}$. If instead every $\lambda_k \le 0$, then $Q(x) = \sum_k \lambda_k x_k'^2 \le 0 < 1$ for *every* $x$, not merely on the axis lines, so $L$ is empty.

Assume $L \neq \emptyset$ and write $p \ge 1$, $q$, $z$ for how many of the eigenvalues are respectively positive, negative and zero, so $p + q + z = n$. Then, with the axes taken along the $u_k$:

- $z = 0$ and $q = 0$ (so $p = n$): $L$ is an ellipsoid, compact, with semi-axis $\lambda_k^{-1/2}$ in the direction $u_k$.
- $z = 0$ and $q \ge 1$: $L$ is a hyperboloid, unbounded — for $n = 2$ a hyperbola.
- $z \ge 1$: $L$ is a cylinder. It is invariant under translation by any multiple of a $u_k$ with $\lambda_k = 0$, because such a translation does not change $x_k'$'s contribution to $Q$; its cross-section in the span of the $u_k$ with $\lambda_k \neq 0$ is the ellipsoid ($q = 0$) or hyperboloid ($q \ge 1$) of those $p + q$ eigenvalues.

The three cases are disjoint, and the indices $k$ with $\lambda_k \le 0$ are exactly those for which $L$ misses the axis line $\mathbb{R}u_k$.

Both names are meant in their degenerate senses as well. An "ellipsoid" in $n = 1$ is the two points $\pm\lambda_1^{-1/2}$ and in $n = 2$ an ellipse; a "cylinder" is the product of a cross-section with the $z$-dimensional space spanned by the null directions, so for $n = 2$ and $\lambda = (1, 0)$ it is the pair of parallel lines $x_1' = \pm 1$, and for $z = n - 1$, $p = 1$ a pair of parallel hyperplanes.
:::

:::idea{provenance=original}
The spectral theorem supplies an orthogonal change of coordinates in which $A$ becomes diagonal, and a diagonal matrix has no cross terms: in those coordinates the form is $\lambda_1 x_1'^2 + \cdots + \lambda_n x_n'^2$, one independent contribution per axis. Because the change of coordinates is orthogonal it changes no length and no angle, so every geometric statement about the level set may be read off in the new coordinates and transported back unchanged. The classification is then a one-variable question asked $n$ times: a positive $\lambda_k$ confines the level set in the $u_k$ direction, a negative one lets it run off to infinity, and a zero one lets it slide freely.
:::

:::proof{provenance=adapted src="rhb-2006:§8.17, Eqs (8.109)-(8.111), pp. 288-289 and §8.17.2, p. 292"}
**Step 1: the change of coordinates.** Since $A$ is real symmetric, part 6 of :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem} gives a real orthonormal eigenbasis $u_1, \dots, u_n$ and makes $S = (u_1\ \cdots\ u_n)$ real orthogonal with $S^{\mathsf T}AS = \Lambda$. Then $S^{-1} = S^{\mathsf T}$, so $x = Sx'$ and $x' = S^{\mathsf T}x$ say the same thing, and $x \mapsto x'$ is a bijection of $\mathbb{R}^n$ that preserves the norm, by part 4 of the characterisation in :ref[]{to=linalg.unitary-orthogonal-matrices}. Substituting,
$$
x^{\mathsf T} A x = (Sx')^{\mathsf T}A(Sx') = (x')^{\mathsf T}(S^{\mathsf T}AS)x' = (x')^{\mathsf T}\Lambda x' = \sum_{k=1}^{n}\lambda_k (x_k')^2 ,
$$
with $x_k' = u_k^{\mathsf T}x$ the component of $x$ along $u_k$. The hypothesis that $A$ is symmetric enters only through the spectral theorem — it is what makes the eigenbasis real and orthonormal, hence $S$ orthogonal rather than merely invertible, and that is what keeps the geometry undistorted. For a Hermitian form the same lines with $S$ unitary, $\dagger$ for $\mathsf T$, give $x^\dagger A x = \sum_k \lambda_k |x_k'|^2$, which is real because the $\lambda_k$ are.

**Step 2: the axis lines and non-emptiness.** On the line $\mathbb{R}u_k$ a point is $x = tu_k$, whose coordinates are $x' = te_k$ because $u_j^{\mathsf T}u_k = \delta_{jk}$; so $Q(tu_k) = \lambda_k t^2$. The equation $\lambda_kt^2 = 1$ has a real solution exactly when $\lambda_k > 0$, and then exactly the two solutions $t = \pm\lambda_k^{-1/2}$. This proves both that $L$ meets $\mathbb{R}u_k$ precisely for $\lambda_k > 0$, at those two parameter values, and that $L \neq \emptyset$ as soon as some $\lambda_k > 0$. Conversely if every $\lambda_k \le 0$ then $Q(x) = \sum_k\lambda_k(x_k')^2 \le 0 < 1$ for every $x$, so $L = \emptyset$.

**Step 3: adapted coordinates.** Assume $L \neq \emptyset$ and renumber the eigenvalues, carrying the columns of $S$ with them, so that $\lambda_1, \dots, \lambda_p > 0$, then $q$ negative ones, then $z$ zeros, with $p \ge 1$ by step 2. In the $x'$ coordinates
$$
L = \Bigl\{x' : \sum_{k \le p}\lambda_k(x_k')^2 - \sum_{p < k \le p+q}|\lambda_k|(x_k')^2 = 1\Bigr\}.
$$
Because $x \mapsto x'$ is a norm-preserving bijection, boundedness, compactness, distances from the origin and the lines contained in $L$ are the same computed in either set of coordinates.

**Step 4: $z = 0$ and $q = 0$, so $p = n$.** Put $\lambda_{\min} = \min_k \lambda_k > 0$. For $x \in L$,
$$
\lambda_{\min}\|x'\|^2 \le \sum_k \lambda_k (x_k')^2 = 1 , \qquad\text{so}\qquad \|x\| = \|x'\| \le \lambda_{\min}^{-1/2} ,
$$
and $L$ is bounded. It is also closed, being the preimage of the closed set $\{1\}$ under the continuous map $Q$, hence compact. It is the ellipsoid with semi-axes $\lambda_k^{-1/2}$: the diagonal map $y \mapsto x'$ with $x_k' = \lambda_k^{-1/2}y_k$ is a bijection of $\mathbb{R}^n$ carrying the unit sphere $\sum_k y_k^2 = 1$ exactly onto $L$, since $\sum_k\lambda_k(x_k')^2 = \sum_k y_k^2$; and by step 2 its intersection with the $k$-th axis is at distance $\lambda_k^{-1/2}$ from the origin.

**Step 5: $z = 0$ and $q \ge 1$.** Here $\lambda_1 > 0$ and some $\lambda_m < 0$. For each real $t$ let $x'(t)$ have $x_m' = t$, $x_1' = \bigl((1 + |\lambda_m|t^2)/\lambda_1\bigr)^{1/2}$ and all other coordinates zero; the square root is of a positive number, so this is defined for every $t$, and $\sum_k\lambda_k(x_k')^2 = (1 + |\lambda_m|t^2) - |\lambda_m|t^2 = 1$. So $x'(t) \in L$ for all $t$, while $\|x'(t)\| \ge |t| \to \infty$: $L$ is unbounded. For $n = 2$ the defining equation is $\lambda_1(x_1')^2 - |\lambda_2|(x_2')^2 = 1$, the standard equation of a hyperbola with respect to its own axes.

**Step 6: $z \ge 1$.** Let $Z$ be the span of the $u_k$ with $\lambda_k = 0$ and $Y$ the span of the others, so $\mathbb{R}^n = Y \oplus Z$ orthogonally. The expression $\sum_k\lambda_k(x_k')^2$ contains no term in a coordinate with $\lambda_k = 0$, so $Q(y + c u_k) = Q(y)$ whenever $\lambda_k = 0$: translating by any vector of $Z$ moves no point of $L$ off $L$, which is the stated invariance. Writing a general $x$ as $y + z$ with $y \in Y$, $z \in Z$ gives $Q(x) = Q(y)$, so
$$
x \in L \iff y \in L \cap Y, \qquad \text{that is} \qquad L = (L \cap Y) + Z .
$$
Now $L \cap Y$ is the level set at $1$ of the restriction of the form to the $(p+q)$-dimensional space $Y$, on which the eigenvalues are exactly the non-zero $\lambda_k$ with the same eigenvectors; steps 4 and 5 applied inside $Y$ make it an ellipsoid when $q = 0$ and a hyperboloid when $q \ge 1$. So $L$ is that cross-section times $Z$.

**Step 7: disjointness and the degenerate readings.** The triple $(p,q,z)$ counts the positive, negative and zero eigenvalues of $A$, so it is determined by $A$ and exactly one of the three cases applies. For the names: in step 4 with $n = 1$, $L = \{\pm\lambda_1^{-1/2}\}$, a pair of points, and with $n = 2$ it is an ellipse, both being the image of the unit sphere of the relevant dimension under a diagonal stretch. In step 6 with $p + q = 1$ and that one eigenvalue positive, $L \cap Y$ is a pair of points at distance $\lambda^{-1/2}$ from the origin, so $L$ is a pair of parallel hyperplanes; for $n = 2$ with $\lambda = (1,0)$ the equation is $(x_1')^2 = 1$, the two lines $x_1' = \pm 1$. $\square$
:::

:::statement[Eigenvalue test for definiteness]{provenance=adapted src="hassani-2013:§6.4, Cor 6.4.10, p. 181; rhb-2006:§8.17, the paragraph following Eq. (8.112), p. 290"}
Let $A$ be Hermitian $n \times n$ (in particular, real symmetric). Then $A$ is positive definite if and only if every eigenvalue of $A$ is positive, and positive semidefinite if and only if every eigenvalue is $\ge 0$.

The strict half is :cite{work=rhb-2006 loc="§8.17, p. 290"}, which states that $Q > 0$ for every $x$ forces every eigenvalue to be positive. The corresponding result in :cite{work=hassani-2013 loc="Cor 6.4.10, p. 181"} is the semidefinite one, because "positive" there is Hassani's non-strict notion (Def 4.3.9, p. 117); his strict notion is written $A > 0$. The semidefinite half is the same reading of the sum of squares $Q = \sum_k \lambda_k x_k'^2$ with $\ge$ in place of $>$, which is how :cite{work=rhb-2006 loc="§8.17, p. 290"} arrives at both terms. The consequence that $\operatorname{tr} A > 0$ and $\det A > 0$ for a positive definite $A$ is ours — it is immediate, since the trace is the sum and the determinant the product of the $n$ eigenvalues — and is on neither cited page, so do not attribute it there. It is only a one-way test: see the traps below.
:::

:::idea{provenance=original}
In the principal-axis coordinates the form is the weighted sum $\sum_k \lambda_k |x_k'|^2$ with non-negative weights $|x_k'|^2$, and such a sum is positive for every non-zero $x$ exactly when every coefficient is positive: if one $\lambda_j$ fails, the single eigenvector $u_j$ exhibits the failure, and if none fails, the smallest eigenvalue bounds the whole sum from below.
:::

:::proof{provenance=adapted src="rhb-2006:§8.17, the paragraph following Eq. (8.112), p. 290"}
By :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem} choose an orthonormal eigenbasis $u_1,\dots,u_n$ of $A$ with $Au_k = \lambda_k u_k$ and the $\lambda_k$ real, let $U$ be the unitary matrix of those columns and put $x' = U^\dagger x$, so that by step 1 of the previous proof
$$
x^\dagger A x = \sum_{k=1}^{n}\lambda_k |x_k'|^2, \qquad \|x'\| = \|x\| .
$$
The map $x \mapsto x'$ is a bijection, so $x \neq 0$ if and only if $x' \neq 0$.

**All eigenvalues positive implies positive definite.** Let $\lambda_{\min} = \min_k\lambda_k > 0$ and let $x \neq 0$. Then
$$
x^\dagger A x = \sum_k \lambda_k|x_k'|^2 \ \ge\ \lambda_{\min}\sum_k |x_k'|^2 = \lambda_{\min}\|x\|^2 \ >\ 0 ,
$$
the first inequality because every $|x_k'|^2 \ge 0$ and the last because $\|x\| > 0$.

**Positive definite implies all eigenvalues positive.** Suppose some $\lambda_j \le 0$. The eigenvector $u_j$ is non-zero and $u_j^\dagger A u_j = \lambda_j u_j^\dagger u_j = \lambda_j \le 0$, so the defining inequality fails at $x = u_j$ and $A$ is not positive definite.

**The semidefinite half.** If every $\lambda_k \ge 0$ then $x^\dagger A x = \sum_k\lambda_k|x_k'|^2 \ge 0$ for every $x$, each term being a product of two non-negative numbers. If some $\lambda_j < 0$ then $u_j^\dagger A u_j = \lambda_j < 0$. This is the same reading of the sum of squares with $\ge$ in place of $>$, exactly as :cite{work=rhb-2006 loc="§8.17, p. 290"} obtains both terms.

**The trace and determinant.** If $A$ is positive definite then all $\lambda_k > 0$, and part 5 of the spectral theorem gives $\operatorname{tr}A = \sum_k\lambda_k > 0$ as a sum of positive numbers and $\det A = \prod_k\lambda_k > 0$ as a product of them. Neither converse holds: $\operatorname{diag}(-1,-1)$ has trace $-2$ but determinant $+1$, and $\operatorname{diag}(3,-1)$ has trace $+2$ with determinant $-3$, so each of the two conditions can hold while $A$ fails to be positive definite. $\square$
:::

:::statement[Sylvester's criterion]{provenance=adapted src="gelfand-fomin-1963:§30, p. 127"}
Let $A$ be real symmetric $n \times n$, with leading principal minors $D_k = \det A^{(k)}$ for $k = 1, \dots, n$. Then positive definiteness of the form $x^{\mathsf T} A x$ is equivalent to positivity of the whole descending chain

$$
D_1 = a_{11} > 0, \qquad D_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} > 0, \qquad \dots, \qquad D_n = \det A > 0 .
$$

Each of the $n$ inequalities is needed, and no condition beyond them is.

Applying this to $-A$ and using $D_k(-A) = (-1)^k D_k(A)$: $A$ is negative definite if and only if $(-1)^k D_k > 0$ for $k = 1, \dots, n$, i.e. the leading principal minors alternate in sign beginning with $D_1 < 0$.
:::

:::idea{provenance=original}
One direction is easy: restricting a positive definite form to the first $k$ coordinates leaves it positive definite, so each $A^{(k)}$ has only positive eigenvalues and its determinant $D_k$ is positive. The other direction is an induction in which $A^{(n-1)}$ is already known to be positive definite. That means the form is positive on an $(n-1)$-dimensional subspace, and two subspaces of $\mathbb{R}^n$ whose dimensions add to more than $n$ must share a non-zero vector; so $A$ cannot have two non-positive eigenvalues, because the plane they span would meet that subspace. At most one eigenvalue is therefore in doubt, and $D_n = \det A > 0$ settles its sign.
:::

:::proof{provenance=original}
Throughout, $A^{(k)}$ is the top-left $k \times k$ block and $V_k = \operatorname{span}\{e_1,\dots,e_k\}$. For $x \in V_k$, only the first $k$ entries of $x$ are non-zero, so
$$
x^{\mathsf T} A x = \sum_{i,j \le k} a_{ij}x_ix_j = \tilde x^{\mathsf T}A^{(k)}\tilde x , \qquad \tilde x = (x_1,\dots,x_k)^{\mathsf T} :
$$
*the form of $A^{(k)}$ is the form of $A$ restricted to $V_k$.* Each $A^{(k)}$ is symmetric, being a block of a symmetric matrix cut out by the same rows and columns.

**Lemma (overlapping subspaces).** If $V, W \subseteq \mathbb{R}^n$ are subspaces with $\dim V + \dim W > n$, then $V \cap W$ contains a non-zero vector. Indeed, let $v_1,\dots,v_a$ be a basis of $V$ and $w_1,\dots,w_b$ one of $W$, with $a + b > n$. More than $n$ vectors in an $n$-dimensional space are linearly dependent (:ref[]{to=linalg.vector-spaces-bases}), so $\sum_i c_iv_i + \sum_j d_jw_j = 0$ with the coefficients not all zero. Put $x = \sum_i c_iv_i = -\sum_j d_jw_j$, which lies in $V$ and in $W$. If $x$ were $0$, independence of the $v_i$ would force every $c_i = 0$ and independence of the $w_j$ every $d_j = 0$, contradicting the choice; so $x \neq 0$.

**Necessity.** Suppose $A$ is positive definite. For $1 \le k \le n$ and $\tilde x \in \mathbb{R}^k$ non-zero, the vector $x \in V_k$ with those first $k$ entries is non-zero, so $\tilde x^{\mathsf T}A^{(k)}\tilde x = x^{\mathsf T}Ax > 0$: each $A^{(k)}$ is positive definite. By the eigenvalue test, its eigenvalues are all positive, so $D_k = \det A^{(k)}$, their product, is positive.

**Sufficiency, by induction on $n$.** Suppose $D_1, \dots, D_n > 0$.

*Base case $n = 1$.* Here $A = (a_{11})$ with $a_{11} = D_1 > 0$, and $x^{\mathsf T}Ax = a_{11}x_1^2 > 0$ for $x_1 \neq 0$.

*Induction step.* Let $n \ge 2$ and assume the criterion for $n-1$. The leading principal minors of $A^{(n-1)}$ are $D_1, \dots, D_{n-1}$ — a leading block of a leading block is a leading block — so the induction hypothesis makes $A^{(n-1)}$ positive definite, and therefore
$$
x^{\mathsf T}Ax > 0 \qquad \text{for every non-zero } x \in V_{n-1} . \tag{$*$}
$$
Order the eigenvalues of $A$ as $\lambda_1 \le \cdots \le \lambda_n$ with a real orthonormal eigenbasis $u_1,\dots,u_n$ (:ref[]{to=linalg.hermitian-spectral-theorem}, part 6).

Suppose, for contradiction, that $\lambda_2 \le 0$, hence also $\lambda_1 \le 0$. Let $W = \operatorname{span}\{u_1,u_2\}$, of dimension $2$. For $x = c_1u_1 + c_2u_2 \in W$, orthonormality gives
$$
x^{\mathsf T}Ax = \lambda_1c_1^2 + \lambda_2c_2^2 \le 0 .
$$
Since $\dim W + \dim V_{n-1} = 2 + (n-1) = n+1 > n$, the lemma supplies a non-zero $x \in W \cap V_{n-1}$. That $x$ has $x^{\mathsf T}Ax \le 0$ by the display and $x^{\mathsf T}Ax > 0$ by $(*)$ — a contradiction. Hence $\lambda_2 > 0$, and so $\lambda_2, \dots, \lambda_n$ are all positive.

Finally $D_n = \det A = \lambda_1\lambda_2\cdots\lambda_n$ by part 5 of the spectral theorem. The hypothesis $D_n > 0$ and the positivity of $\lambda_2\cdots\lambda_n$ force $\lambda_1 > 0$. All eigenvalues are then positive and the eigenvalue test makes $A$ positive definite, completing the induction.

**Every one of the $n$ inequalities is needed.** Dropping the $k$-th leaves a false criterion, as these diagonal matrices show. For $k \le n-1$ take $A$ diagonal with $a_{kk} = a_{k+1,k+1} = -1$ and every other diagonal entry $+1$: then $D_j = 1$ for $j < k$, $D_k = -1$, and $D_j = (-1)(-1) = 1$ for $j \ge k+1$, so only the $k$-th inequality fails, while $A$ is not positive definite because $e_k^{\mathsf T}Ae_k = -1$. For $k = n$ take $A = \operatorname{diag}(1,\dots,1,-1)$, which has $D_j = 1$ for $j < n$ and $D_n = -1$. And no further condition is needed, because the induction above derives positive definiteness from these $n$ alone.

**The negative definite form.** $A$ is negative definite exactly when $-A$ is positive definite, which by the above is exactly $D_k(-A) > 0$ for every $k$. Now $(-A)^{(k)} = -A^{(k)}$ and scaling a $k \times k$ matrix by $-1$ scales its determinant by $(-1)^k$ (the determinant is homogeneous of degree $k$ in the rows, :ref[]{to=linalg.determinants}), so $D_k(-A) = (-1)^kD_k(A)$ and the condition reads $(-1)^kD_k > 0$: $D_1 < 0$, $D_2 > 0$, $D_3 < 0$, and so on. $\square$
:::

:::definition[Rayleigh quotient]{provenance=adapted src="rhb-2006:§8.17.1, p. 291"}
Let $A$ be Hermitian $n \times n$. For $x \in \mathbb{C}^n$, $x \neq 0$, the **Rayleigh quotient** of $A$ at $x$ is

$$
\mathcal{R}(x) = \frac{x^\dagger A x}{x^\dagger x} ,
$$

which is real, because the numerator and denominator are, and unchanged by rescaling $x$ by any non-zero scalar.
:::

:::statement[Rayleigh bounds]{provenance=original}
Let $A$ be Hermitian $n \times n$ with eigenvalues ordered $\lambda_1 \le \lambda_2 \le \cdots \le \lambda_n$ and $E_\lambda$ the eigenspace of $\lambda$. Then $\lambda_1 \le \mathcal{R}(x) \le \lambda_n$ for every $x \neq 0$; the lower bound is an equality exactly for $x \in E_{\lambda_1} \setminus \{0\}$ and the upper bound exactly for $x \in E_{\lambda_n} \setminus \{0\}$. Hence

$$
\lambda_1 = \min_{x \neq 0} \mathcal{R}(x), \qquad \lambda_n = \max_{x \neq 0} \mathcal{R}(x) ,
$$

both attained. (Expand $x$ in an orthonormal eigenbasis: $\mathcal{R}(x)$ is the weighted average of the $\lambda_k$ with weights $|x_k'|^2 / \|x\|^2$ summing to $1$.)
:::

:::idea{provenance=original}
In an orthonormal eigenbasis the Rayleigh quotient is literally a weighted average of the eigenvalues, the weight on $\lambda_k$ being the fraction of $\|x\|^2$ that $x$ puts along $u_k$. An average of numbers lies between the smallest and the largest of them, and equals the smallest only if all the weight sits on the smallest — which is what "$x$ lies in the eigenspace of $\lambda_1$" says.
:::

:::proof{provenance=original}
Fix an orthonormal eigenbasis $u_1,\dots,u_n$ of $A$ with $Au_k = \lambda_k u_k$ and $\lambda_1 \le \cdots \le \lambda_n$ (:ref[]{to=linalg.hermitian-spectral-theorem}). For $x \neq 0$ write $c_k = (x, u_k)$, so that $x = \sum_k c_ku_k$ and, by the expansion in an orthonormal basis (:ref[]{to=linalg.gram-schmidt}),
$$
x^\dagger x = \sum_k |c_k|^2 =: \sigma > 0 , \qquad
x^\dagger A x = \sum_k \lambda_k|c_k|^2 ,
$$
the second because $Ax = \sum_k \lambda_kc_ku_k$ and the basis is orthonormal. Hence
$$
\mathcal{R}(x) = \sum_{k=1}^{n} w_k\lambda_k , \qquad w_k = \frac{|c_k|^2}{\sigma} \ge 0, \qquad \sum_k w_k = 1 .
$$

**The bounds.** Since the $w_k$ are non-negative and sum to one,
$$
\mathcal{R}(x) - \lambda_1 = \sum_k w_k(\lambda_k - \lambda_1) \ge 0,
\qquad
\lambda_n - \mathcal{R}(x) = \sum_k w_k(\lambda_n - \lambda_k) \ge 0 ,
$$
each summand being a product of two non-negative numbers, by the ordering of the eigenvalues. So $\lambda_1 \le \mathcal{R}(x) \le \lambda_n$.

**The equality cases.** In the first display, equality forces every summand to vanish, so $w_k = 0$ — that is $c_k = 0$ — for every $k$ with $\lambda_k > \lambda_1$. Then $x = \sum_{k : \lambda_k = \lambda_1}c_ku_k$, a combination of eigenvectors for $\lambda_1$, so $x \in E_{\lambda_1}$. Conversely if $x \in E_{\lambda_1}$ and $x \neq 0$ then $Ax = \lambda_1 x$ and $\mathcal{R}(x) = \lambda_1 x^\dagger x/x^\dagger x = \lambda_1$. The same argument with $\lambda_n$ gives the upper equality case. Note that the whole eigenspace appears, not one vector: if $\lambda_1$ is degenerate, every non-zero vector of $E_{\lambda_1}$ attains the minimum.

**Attainment.** $u_1 \in E_{\lambda_1}$ and $u_n \in E_{\lambda_n}$ are non-zero, so the bounds are attained and the infimum and supremum are a minimum and a maximum. $\square$
:::

:::statement[Stationary values of the quotient]{provenance=adapted src="rhb-2006:§8.17.1, Eqs (8.114)-(8.116) and the worked result for lambda(x), p. 291"}
Let $A$ be Hermitian $n \times n$. Then $\mathcal{R}$ is stationary at $x \neq 0$ — its first variation vanishes for every variation $\Delta x$ — exactly when $A x = \mathcal{R}(x)\, x$, that is, exactly when $x$ is an eigenvector of $A$; the stationary value is then the eigenvalue belonging to $x$. Equivalently, the critical points of $x^\dagger A x$ on the sphere $x^\dagger x = 1$ are the normalised eigenvectors of $A$, and the critical value at each is its eigenvalue.
:::

:::idea{provenance=original}
Differentiate the quotient once. Because $A$ is Hermitian, the two cross terms produced by varying $x$ in $x^\dagger A x$ are complex conjugates of each other, so the first variation collapses to $2\operatorname{Re}$ of a single inner product against the vector $Ax - \mathcal{R}(x)x$. Demanding that this vanish for *every* variation is demanding that the vector itself vanish, which is the eigenvalue equation with $\mathcal{R}(x)$ as the eigenvalue. Nothing in the argument needs the eigenvalues to be known in advance; the eigenvalue equation is the output.
:::

:::proof{provenance=adapted src="rhb-2006:§8.17.1, Eqs (8.113)-(8.116) and the variational computation for lambda(x), pp. 290-291"}
Write $N(x) = x^\dagger A x$ and $D(x) = x^\dagger x$, so $\mathcal{R} = N/D$ on $\mathbb{C}^n\setminus\{0\}$, and fix $x \neq 0$ and a variation $h \in \mathbb{C}^n$.

**Step 1: the first variations of $N$ and $D$.** Expanding,
$$
N(x+h) - N(x) = h^\dagger A x + x^\dagger A h + h^\dagger A h .
$$
The first two terms are complex conjugates of each other, because $\overline{x^\dagger A h} = h^\dagger A^\dagger x = h^\dagger A x$ using $A = A^\dagger$ — this is the one place the Hermitian hypothesis is used, and without it the two terms do not combine. So
$$
N(x+h) - N(x) = 2\operatorname{Re}\bigl(x^\dagger A h\bigr) + O(\|h\|^2),
\qquad
D(x+h) - D(x) = 2\operatorname{Re}\bigl(x^\dagger h\bigr) + O(\|h\|^2),
$$
the second by the same computation with $A = I$.

**Step 2: the first variation of the quotient.** Since $D(x) > 0$, the quotient is differentiable at $x$, and keeping only the terms linear in $h$,
$$
\delta\mathcal{R} = \frac{D(x)\cdot 2\operatorname{Re}(x^\dagger A h) - N(x)\cdot 2\operatorname{Re}(x^\dagger h)}{D(x)^2}
= \frac{2}{x^\dagger x}\,\operatorname{Re}\Bigl( x^\dagger A h - \mathcal{R}(x)\, x^\dagger h\Bigr) .
$$
Now $x^\dagger A h = (Ax)^\dagger h$, again because $A$ is Hermitian, so with
$$
r = A x - \mathcal{R}(x)\,x
$$
the variation is $\delta\mathcal{R} = \dfrac{2}{x^\dagger x}\operatorname{Re}\bigl(r^\dagger h\bigr)$.

**Step 3: stationarity is the eigenvalue equation.** If $r = 0$ then $\delta\mathcal{R} = 0$ for every $h$. Conversely, if $\delta\mathcal{R} = 0$ for every $h$, take $h = r$: then $\operatorname{Re}(r^\dagger r) = \|r\|^2 = 0$, so $r = 0$. Hence $\mathcal{R}$ is stationary at $x$ exactly when $Ax = \mathcal{R}(x)x$, that is exactly when $x$ is an eigenvector, and then the eigenvalue is $\mathcal{R}(x)$, which is the stationary value. Conversely any eigenvector $Ax = \lambda x$ has $\mathcal{R}(x) = \lambda$ and $r = 0$, so it is stationary; the quantifier "for every variation" is essential, since $\operatorname{Re}(r^\dagger h)$ vanishes for the $h$ orthogonal to $r$ however large $r$ is.

**Step 4: the version on the sphere.** $\mathcal{R}$ is unchanged by rescaling, so $\mathcal{R}(x) = N(x)$ whenever $\|x\| = 1$, and $\delta\mathcal{R}$ vanishes on the radial variation $h = x$ for every $x$: indeed $r^\dagger x = x^\dagger A x - \mathcal{R}(x)x^\dagger x = 0$ by the definition of $\mathcal{R}$. A variation tangent to the sphere at $x$ is one with $\operatorname{Re}(x^\dagger h) = 0$, obtained by differentiating $\|x\|^2 = 1$; for such $h$, step 2 with $D(x) = 1$ gives
$$
\delta\bigl(N|_{\text{sphere}}\bigr) = 2\operatorname{Re}(x^\dagger A h) = 2\operatorname{Re}(r^\dagger h) + 2\mathcal{R}(x)\operatorname{Re}(x^\dagger h) = 2\operatorname{Re}(r^\dagger h) = \delta\mathcal{R} .
$$
So the critical points of $N$ on the sphere are exactly the unit vectors at which $\operatorname{Re}(r^\dagger h)$ vanishes for all tangent $h$. That is the same as vanishing for all $h \in \mathbb{C}^n$, because any $h$ splits as $h = h_{\mathrm{t}} + cx$ with $c = \operatorname{Re}(x^\dagger h)$ real and $h_{\mathrm{t}} = h - cx$ tangent — check $\operatorname{Re}(x^\dagger h_{\mathrm{t}}) = \operatorname{Re}(x^\dagger h) - c = 0$ — while $\operatorname{Re}(r^\dagger x) = 0$ always. Hence it is the same as $r = 0$. The critical points on the sphere are therefore the normalised eigenvectors, with critical values $N(x) = \mathcal{R}(x) = \lambda$. Riley, Hobson and Bence reach the same conclusion with a Lagrange multiplier imposing $x^\dagger x = 1$, the multiplier turning out to be the eigenvalue. $\square$
:::

:::statement[Courant-Fischer min-max]{provenance=original}
With $A$ and the ordering $\lambda_1 \le \cdots \le \lambda_n$ as above, for every $k = 1, \dots, n$

$$
\lambda_k = \min_{\substack{V \subseteq \mathbb{C}^n \\ \dim V = k}} \ \max_{\substack{x \in V \\ x \neq 0}} \mathcal{R}(x)
= \max_{\substack{W \subseteq \mathbb{C}^n \\ \dim W = n-k+1}} \ \min_{\substack{x \in W \\ x \neq 0}} \mathcal{R}(x) ,
$$

the inner extrema being attained and the outer ones attained at $V = \operatorname{span}\{u_1, \dots, u_k\}$ and $W = \operatorname{span}\{u_k, \dots, u_n\}$ respectively. The cases $k = 1$ and $k = n$ are the Rayleigh bounds above. Restricting the minimum to a smaller family of subspaces can only raise it, which is what makes this a practical source of upper bounds for $\lambda_k$.
:::

:::idea{provenance=original}
Two inequalities, in opposite directions, pin $\lambda_k$ down. One is a calculation: on the particular subspace spanned by the first $k$ eigenvectors the quotient never exceeds $\lambda_k$ and reaches it, so the minimum over all $k$-dimensional subspaces is at most $\lambda_k$. The other is a counting argument: any $k$-dimensional subspace must meet the $(n-k+1)$-dimensional span of the *last* $n-k+1$ eigenvectors, because their dimensions add to $n+1$; on that span the quotient is at least $\lambda_k$, so the maximum over any $k$-dimensional subspace is at least $\lambda_k$. The max-min formula is the min-max formula read for $-A$.
:::

:::proof{provenance=original}
Keep the orthonormal eigenbasis $u_1,\dots,u_n$ with $\lambda_1 \le \cdots \le \lambda_n$ and the weighted-average form $\mathcal{R}(x) = \sum_k w_k\lambda_k$ of the Rayleigh proof. Two consequences of it will be used repeatedly: if $x \neq 0$ lies in $V_k = \operatorname{span}\{u_1,\dots,u_k\}$ then the weights $w_j$ vanish for $j > k$, so
$$
\mathcal{R}(x) = \sum_{j \le k}w_j\lambda_j \le \lambda_k ; \tag{A}
$$
and if $x \neq 0$ lies in $W_k = \operatorname{span}\{u_k,\dots,u_n\}$ then the weights vanish for $j < k$, so
$$
\mathcal{R}(x) = \sum_{j \ge k}w_j\lambda_j \ge \lambda_k . \tag{B}
$$

**The inner extrema are attained.** Let $V$ be a subspace with $\dim V = d \ge 1$. $\mathcal{R}$ is continuous on $\mathbb{C}^n\setminus\{0\}$, the unit sphere $\Sigma_V = \{x \in V : \|x\| = 1\}$ is closed and bounded in the finite-dimensional space $V$, hence compact, and $\mathcal{R}$ is unchanged by rescaling, so the extrema of $\mathcal{R}$ over the non-zero vectors of $V$ are the extrema over $\Sigma_V$ and are attained there.

**Upper bound for the min-max.** Take $V = V_k$, which has dimension $k$ because the $u_j$ are independent. By (A), $\max_{x \in V_k\setminus\{0\}}\mathcal{R}(x) \le \lambda_k$, and $u_k \in V_k$ gives $\mathcal{R}(u_k) = \lambda_k$, so the maximum over $V_k$ equals $\lambda_k$. Hence the minimum over all $k$-dimensional subspaces is at most $\lambda_k$.

**Lower bound for the min-max.** Let $V$ be any subspace of dimension $k$. Then $\dim V + \dim W_k = k + (n-k+1) = n+1 > n$, so by the overlapping-subspaces lemma of the Sylvester proof — whose argument is unchanged over $\mathbb{C}$ — there is a non-zero $y \in V \cap W_k$. By (B), $\mathcal{R}(y) \ge \lambda_k$, and therefore
$$
\max_{x \in V\setminus\{0\}}\mathcal{R}(x) \ \ge\ \mathcal{R}(y)\ \ge\ \lambda_k .
$$
As $V$ was arbitrary, the minimum over all $k$-dimensional subspaces is at least $\lambda_k$. With the previous paragraph it equals $\lambda_k$ and is attained at $V = V_k$.

**The max-min form.** Apply what is proved to $-A$, which is Hermitian with eigenvalues $-\lambda_n \le \cdots \le -\lambda_1$, so that the $j$-th smallest eigenvalue of $-A$ is $-\lambda_{n-j+1}$, and with $\mathcal{R}_{-A} = -\mathcal{R}_A$. For $j = n-k+1$ the min-max formula for $-A$ reads
$$
-\lambda_{k} = \min_{\dim V = n-k+1}\ \max_{x \in V\setminus\{0\}}\bigl(-\mathcal{R}_A(x)\bigr)
= \min_{\dim V = n-k+1}\ \Bigl(-\min_{x \in V\setminus\{0\}}\mathcal{R}_A(x)\Bigr)
= -\max_{\dim V = n-k+1}\ \min_{x \in V\setminus\{0\}}\mathcal{R}_A(x) ,
$$
using $\max(-f) = -\min f$ twice. Multiplying by $-1$ gives the stated max-min formula over subspaces $W$ of dimension $n-k+1$. The optimal subspace transports too: for $-A$ the optimum was the span of its first $n-k+1$ eigenvectors, which are $u_n, u_{n-1}, \dots, u_k$, that is $W = \operatorname{span}\{u_k,\dots,u_n\}$.

**The cases $k = 1$ and $k = n$.** For $k = 1$ the only $1$-dimensional subspaces are the lines $\mathbb{C}x$, on each of which $\mathcal{R}$ is constant, so the min-max reduces to $\min_{x \neq 0}\mathcal{R}(x) = \lambda_1$; for $k = n$ the only $n$-dimensional subspace is $\mathbb{C}^n$ itself and the formula reads $\max_{x\neq 0}\mathcal{R}(x) = \lambda_n$. These are the Rayleigh bounds.

**Why restricting the family gives upper bounds.** A minimum over a subfamily of the $k$-dimensional subspaces is at least the minimum over all of them, which is $\lambda_k$. So evaluating $\max_{x \in V}\mathcal{R}(x)$ for any single conveniently chosen $V$ of dimension $k$ — a span of $k$ trial vectors, say — delivers a number $\ge \lambda_k$, and equality holds exactly when that $V$ is optimal. $\square$
:::

:::method[Analysing a quadratic form]{provenance=adapted src="rhb-2006:§8.17 and §8.17.1, pp. 288-291"}
Given a form written as $x^{\mathsf T} M x$ with $M$ any real square matrix, or as an explicit polynomial such as $x_1^2 + 4 x_1 x_2 - x_2^2$:

1. **Symmetrise.** Replace $M$ by $A = \tfrac12 (M + M^{\mathsf T})$. From a polynomial, set $a_{ii}$ to the coefficient of $x_i^2$ and $a_{ij} = a_{ji}$ to *half* the coefficient of $x_i x_j$. Skip this and you will diagonalize the wrong matrix: the form determines only the symmetric part.
2. **If you only need definiteness,** apply Sylvester's criterion: compute $D_1, \dots, D_n$. All positive means positive definite; alternating from $D_1 < 0$ means negative definite. Any other pattern with all $D_k \neq 0$ means indefinite. If some $D_k = 0$ the criterion is silent — go to step 3.
3. **Otherwise diagonalize.** Compute the eigenvalues of $A$ from $\det(A - \lambda I) = 0$ for small $n$, or with a symmetric eigensolver (`numpy.linalg.eigh`) for larger $n$. The signs of the eigenvalues give the definiteness class, with no exceptional cases; the triple (number positive, number negative, number zero) is the **inertia** of the form.
4. **For the principal axes,** compute an orthonormal eigenbasis, assemble $S$ with those columns, and read off $Q = \sum_k \lambda_k x_k'^2$ where $x' = S^{\mathsf T} x$. Order the eigenvalues as you like, but keep the columns of $S$ in the matching order.
5. **For the geometry of a level set** $x^{\mathsf T} A x = c$ with $c > 0$: first test non-emptiness — the set is non-empty if and only if some $\lambda_k > 0$ (for $A = \operatorname{diag}(-1,-1)$ and $c = 1$ it is empty, and there is no geometry to describe). Given that, the axis directions are the $u_k$; for each $\lambda_k > 0$ the set meets the line $\mathbb{R} u_k$ at distance $(c/\lambda_k)^{1/2}$ from the origin, and for each $\lambda_k \le 0$ it does not meet that line at all. The set is unbounded precisely when some $\lambda_k \le 0$; it contains, through each of its points, the whole line in the direction $u_k$ — equivalently, it is invariant under translation along $u_k$ — precisely when $\lambda_k = 0$. These are two different conditions: a hyperbola ($A = \operatorname{diag}(1,-1)$, $c = 1$) is unbounded along both of its axis directions while containing no line at all, since no eigenvalue vanishes. When every $\lambda_k > 0$ it is an ellipsoid with those semi-axes; otherwise classify it by the counts $(p, q, z)$ as in "Principal axes" — the set for level $c$ is the set for level $1$ scaled by $c^{1/2}$, so every semi-axis is multiplied by $c^{1/2}$ and the classification is unchanged.
6. **For quick eigenvalue bounds,** evaluate $\mathcal{R}$ at any convenient trial vectors: each value is an upper bound for $\lambda_1$ and a lower bound for $\lambda_n$, and the bound is good when the trial vector is close to the eigenvector, because $\mathcal{R}$ is stationary there.

The recipe needs $A$ Hermitian throughout; steps 2-6 are false without it. For a Hermitian complex $A$ use $x^\dagger A x$, $A^\dagger$ and a unitary $S$ in place of the real transposes.
:::

:::note{provenance=original}
A quadratic form is the second-order part of any smooth function near a critical point, so its definiteness decides whether a potential has a minimum, an equilibrium is stable or an energy is bounded below. Diagonalizing it chooses coordinates in which those questions become $n$ questions about single numbers.
:::

:::remark[Traps]{provenance=original}
**Sylvester's criterion does not test semidefiniteness.** $A = \operatorname{diag}(0, -1)$ has $D_1 = 0$ and $D_2 = 0$, both $\ge 0$, yet $A$ is not positive semidefinite. Positive semidefiniteness is equivalent to *all* principal minors (not just the leading ones) being $\ge 0$, or simply to all eigenvalues being $\ge 0$. For definiteness the leading minors suffice; for semidefiniteness they do not.

**A positive determinant is not positive definiteness.** $\operatorname{diag}(-1, -1)$ has determinant $1$. Only the full chain $D_1, \dots, D_n$ settles the question.

**The equality case needs the whole eigenspace.** If $\lambda_1$ is degenerate, $\mathcal{R}(x) = \lambda_1$ for every non-zero $x \in E_{\lambda_1}$, not only for one eigenvector.

**Min-max is over subspaces, not vectors.** In the Courant-Fischer formula the outer minimum runs over $k$-dimensional subspaces; replacing it by a minimum over vectors would give $\lambda_1$ for every $k$.

**Sylvester's criterion for Hermitian $A$.** Stated above for real symmetric $A$, as :cite{work=gelfand-fomin-1963 loc="§30, p. 127"} gives it. It holds word for word for Hermitian $A$: each leading submatrix $A^{(k)}$ is itself Hermitian, so $D_k = \det A^{(k)}$ is real, and the criterion reads the same. That extension is not on the cited page, so do not attribute it there.

**Conventions: the factor $\tfrac12$ doubles the eigenvalues, it does not halve them.** Fix a form $Q$. Writing it our way, $Q(x) = x^{\mathsf T} A x$, makes $A$ *half* the Hessian of $Q$. Texts that write $Q(x) = \tfrac12 x^{\mathsf T} \tilde A x$ — common in mechanics and optimisation, so that $\tilde A$ is the Hessian — have $\tilde A = 2A$, whose eigenvalues are **twice** ours. For the polynomial $Q = x_1^2 + 4x_1x_2 - x_2^2$ used to illustrate step 1 of the method, our $A = \begin{pmatrix} 1 & 2 \\ 2 & -1\end{pmatrix}$ has eigenvalues $\pm\sqrt 5$, while the Hessian $\tilde A = \begin{pmatrix} 2 & 4 \\ 4 & -2\end{pmatrix}$ has $\pm 2\sqrt 5$. Going the other way — holding the *matrix* fixed and reading it in the half convention — halves the form and hence the eigenvalues; what the factor does depends on which of the two you hold fixed, so say which. Either way the definiteness class, the inertia and the principal axes are unchanged, since the two matrices differ by a positive scalar; only the numbers $\lambda_k$ and therefore the semi-axis lengths $\lambda_k^{-1/2}$ change.

**Ordering.** Order the eigenvalues increasingly, as here, or decreasingly, as is common in numerical linear algebra — but then the min-max formula swaps its two halves.
:::

:::example[A form in three variables, start to finish]{provenance=original}
Suppose a calculation has produced the form $Q(x) = x^{\mathsf T}Mx$ with
$$
M = \begin{pmatrix} 3 & 4 & 0 \\ -2 & 3 & -3 \\ -2 & 1 & 5\end{pmatrix},
$$
which is not symmetric. Follow the method.

**Step 1: symmetrise.** $A = \tfrac12(M + M^{\mathsf T})$ has entries $a_{ii} = M_{ii}$ and $a_{ij} = \tfrac12(M_{ij}+M_{ji})$:
$$
A = \begin{pmatrix} 3 & 1 & -1 \\ 1 & 3 & -1 \\ -1 & -1 & 5\end{pmatrix},
\qquad
Q(x) = 3x_1^2 + 3x_2^2 + 5x_3^2 + 2x_1x_2 - 2x_1x_3 - 2x_2x_3 .
$$
Reading the polynomial back off $A$ is the check: the diagonal gives the squares and each off-diagonal entry is *half* the coefficient of the corresponding cross term, so $a_{12} = 1$ goes with $2x_1x_2$.

**Step 2: definiteness by Sylvester.** The leading principal minors are
$$
D_1 = 3, \qquad D_2 = \begin{vmatrix} 3 & 1 \\ 1 & 3\end{vmatrix} = 8, \qquad
D_3 = \det A = 3(15-1) - 1(5-1) + (-1)(-1+3) = 42 - 4 - 2 = 36 ,
$$
all positive, so $A$ is positive definite. In particular $Q(x) > 0$ for every $x \neq 0$, and the level set $Q = 1$ will be an ellipsoid.

**Step 3: the eigenvalues and eigenvectors.** The characteristic polynomial is
$$
\det(A - \lambda I) = -\lambda^3 + 11\lambda^2 - 36\lambda + 36 = -(\lambda-2)(\lambda-3)(\lambda-6),
$$
whose coefficients check against $\operatorname{tr}A = 11 = 2+3+6$ and $\det A = 36 = 2\cdot 3\cdot 6$. Solving $(A-\lambda I)x = 0$ for each root,
$$
\lambda_1 = 2:\ u_1 = \tfrac{1}{\sqrt2}(1,-1,0)^{\mathsf T}, \qquad
\lambda_2 = 3:\ u_2 = \tfrac{1}{\sqrt3}(1,1,1)^{\mathsf T}, \qquad
\lambda_3 = 6:\ u_3 = \tfrac{1}{\sqrt6}(1,1,-2)^{\mathsf T},
$$
each verified directly: $A(1,-1,0)^{\mathsf T} = (2,-2,0)^{\mathsf T}$, $A(1,1,1)^{\mathsf T} = (3,3,3)^{\mathsf T}$, $A(1,1,-2)^{\mathsf T} = (6,6,-12)^{\mathsf T}$. The three are mutually orthogonal, as the spectral theorem requires for distinct eigenvalues, and all positive, confirming step 2 independently.

**Step 4: the principal axes.** With $S = (u_1\ u_2\ u_3)$ and $x' = S^{\mathsf T}x$,
$$
Q = 2x_1'^2 + 3x_2'^2 + 6x_3'^2 , \qquad
x_1' = \tfrac{x_1-x_2}{\sqrt2}, \quad x_2' = \tfrac{x_1+x_2+x_3}{\sqrt3}, \quad x_3' = \tfrac{x_1+x_2-2x_3}{\sqrt6} .
$$

**Step 5: the level set $Q = 1$.** The inertia is $(p,q,z) = (3,0,0)$, so this is an ellipsoid, with semi-axes
$$
\lambda_1^{-1/2} = \tfrac{1}{\sqrt2} \approx 0.7071 \text{ along } u_1, \quad
\tfrac{1}{\sqrt3} \approx 0.5774 \text{ along } u_2, \quad
\tfrac{1}{\sqrt6} \approx 0.4082 \text{ along } u_3 .
$$
A spot check on the first: the point $u_1/\sqrt2 = (1,-1,0)^{\mathsf T}/2$ has $Q = \tfrac14(3 + 3 - 2) = 1$, and its distance from the origin is $\sqrt{2}/2 = 1/\sqrt2$. For the level $Q = 4$ every semi-axis is multiplied by $\sqrt4 = 2$.

**Step 6: Rayleigh bounds from trial vectors.** Every trial vector gives $2 \le \mathcal{R}(x) \le 6$. With $x = (2,-1,0)^{\mathsf T}$, a rough guess at $u_1$,
$$
\mathcal{R}(x) = \frac{3\cdot 4 + 3\cdot 1 + 2\cdot 2\cdot(-1)}{4 + 1} = \frac{12 + 3 - 4}{5} = \frac{11}{5} = 2.2 ,
$$
an upper bound for $\lambda_1 = 2$, high by $10\%$ although the trial vector points $18.4^\circ$ away from $u_1$. Stationarity sharpens this: perturbing the true eigenvector to $x = (1,-1,\delta)^{\mathsf T}$ gives
$$
\mathcal{R}(x) = \frac{4 + 5\delta^2}{2+\delta^2} = 2 + \tfrac32\delta^2 + O(\delta^4),
$$
so at $\delta = 0.1$ — a $7\%$ tilt of the vector — the quotient is $135/67 = 2.01493$, high by only $0.75\%$. The error in the eigenvalue is quadratic in the error of the eigenvector, which is exactly the content of the stationarity statement and the reason trial-vector bounds are useful.

**Step 7: Courant–Fischer for the middle eigenvalue.** Take the $2$-dimensional trial subspace $V = \operatorname{span}\{e_1, e_2\}$. For $x \in V$ the quotient is the Rayleigh quotient of the block $A^{(2)} = \begin{pmatrix} 3&1\\1&3\end{pmatrix}$, whose eigenvalues are $2$ and $4$, so
$$
\max_{x \in V\setminus\{0\}}\mathcal{R}(x) = 4 \ \ge\ \lambda_2 = 3 ,
$$
an upper bound for $\lambda_2$ from a subspace chosen without any eigenvector information. The optimal choice $V = \operatorname{span}\{u_1,u_2\}$ does give $3$: in the orthonormal basis $\{u_1,u_2\}$ of that plane, $A$ is represented by $\operatorname{diag}(2,3)$, whose largest eigenvalue is $3$.

**Step 8: a one-entry change makes it indefinite.** Replace the entry $a_{33} = 5$ by $0$, i.e. drop the $5x_3^2$ term. Now $D_1 = 3$, $D_2 = 8$ and
$$
D_3 = 3(0-1) - 1(0-1) + (-1)(-1+3) = -3 + 1 - 2 = -4 ,
$$
so the pattern is $(+,+,-)$ with no zero: by step 2 of the method the form is indefinite, and Sylvester tells us so without any eigenvalue computation. For confirmation, the characteristic polynomial is $-(\lambda-2)(\lambda^2-4\lambda-2)$, with roots $2$ and $2 \pm \sqrt6 \approx 4.4495,\ -0.4495$ — inertia $(2,1,0)$. The level set is then a hyperboloid, unbounded along $u$ for the negative eigenvalue, and $Q$ takes both signs: $Q(e_3) = 0$ for the modified form while $Q(0,0,1)$ was $5$ before, and $Q(1,1,1) = 3+3+0+2-2-2 = 4 > 0$ while $Q(1,1,3) = 3+3+0+2-6-6 = -4 < 0$.
:::

:::application{provenance=original}
**The second-derivative test, and why stability is an eigenvalue question.** Let $f$ be twice continuously differentiable near a critical point $a$, so $\nabla f(a) = 0$. Taylor's theorem gives
$$
f(a + h) = f(a) + \tfrac12\, h^{\mathsf T} H h + o(\|h\|^2), \qquad H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}(a),
$$
and $H$ is symmetric, so the leading behaviour near $a$ is governed by a quadratic form and this unit settles it: $H$ positive definite makes $a$ a strict local minimum, $H$ negative definite a strict local maximum, and $H$ indefinite a saddle, with directions of increase and decrease given by eigenvectors for eigenvalues of either sign. Sylvester's criterion is what one actually computes, since it needs only $n$ determinants rather than the full spectrum; for $n = 2$ it is the familiar test $f_{xx} > 0$ and $f_{xx}f_{yy} - f_{xy}^2 > 0$. In mechanics the same statement is the stability of an equilibrium: with $f$ the potential energy, positive definiteness of $H$ is the condition for a restoring force in every direction, and the eigenvalues of $H$ (divided by the masses) are the squared frequencies of the small oscillations about it — see :ref[normal modes]{to=linalg.normal-modes}. A semidefinite $H$ leaves the question open at second order, which is where the trap about Sylvester's criterion and semidefiniteness bites: $f(x,y) = x^2 + y^3$ and $f(x,y) = x^2 + y^4$ have the same Hessian at the origin and only the second has a minimum there.

**Rayleigh–Ritz: a variational upper bound on a ground-state energy.** In quantum mechanics the energy levels of a system are the eigenvalues $\lambda_1 \le \lambda_2 \le \cdots$ of a Hermitian Hamiltonian, and the Rayleigh bound says the ground-state energy is
$$
\lambda_1 = \min_{\psi \neq 0} \frac{\psi^\dagger H \psi}{\psi^\dagger \psi} .
$$
So *any* trial state gives an upper bound on the ground-state energy — never an underestimate, which is what makes the method trustworthy — and because the quotient is stationary at the true eigenvector, a trial state wrong by a relative error $\varepsilon$ gives an energy wrong only by order $\varepsilon^2$. That is the whole of the variational method: pick a family of trial states depending on parameters, minimise the quotient over the parameters, and report the result as an upper bound. Courant–Fischer extends it to excited states: taking a $k$-dimensional trial space and computing the largest eigenvalue of the $k \times k$ matrix of $H$ restricted to it gives an upper bound for $\lambda_k$, which is exactly what step 7 of the example does with $k = 2$. Enlarging the trial space can only lower each bound, and this is why the method converges as the basis is refined. The same mathematics appears as Rayleigh's method for the fundamental frequency of a vibrating structure and as the finite element method for eigenvalue problems.

**Principal axes of a physical tensor.** Many physical quantities are symmetric matrices whose quadratic form has a direct meaning, and diagonalizing them is the first step of every calculation. The inertia tensor $I$ of a rigid body has $\omega^{\mathsf T}I\omega = 2T$ twice the rotational kinetic energy; it is positive definite for a genuine three-dimensional body, so its eigenvectors are the three mutually perpendicular principal axes about which rotation produces no wobble, its eigenvalues the principal moments, and the level set $\omega^{\mathsf T}I\omega = 1$ is the ellipsoid of inertia with semi-axes $I_k^{-1/2}$. The Cauchy stress tensor is symmetric, and its eigenvalues are the principal stresses with eigenvectors the directions of pure tension or compression — a negative eigenvalue is compression, so the inertia of the form is the statement of what kind of loading the material is under. The strain tensor, the electric susceptibility of an anisotropic crystal and the diffusion tensor of an anisotropic medium all work the same way: the eigenvectors give the material's own axes, and the numbers one quotes are the eigenvalues.
:::
