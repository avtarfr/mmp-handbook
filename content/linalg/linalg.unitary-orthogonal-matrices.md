---
id: linalg.unitary-orthogonal-matrices
title: Unitary and orthogonal matrices
kind: definition
level: core
summary: Defines unitary and orthogonal matrices, shows they are exactly the matrices that preserve the inner product and have orthonormal columns, and records that their eigenvalues have modulus one and that the real ones reduce to rotations and reflections.
prereqs: [linalg.inner-product-spaces, linalg.eigenvalues-eigenvectors, linalg.determinants]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§8.12.4 (orthogonal matrices, determinant, norm preservation) pp. 270-271; §8.12.6 (unitary matrices, determinant of unit modulus, norm preservation) pp. 271-272; §8.13.3 (eigenvalues of a unitary matrix) p. 278"
    pages: "270-272, 278"
    role: definitions; inverse and determinant; preservation of the norm; eigenvalues of unit modulus; the route to the proof that the eigenvalues have unit modulus
  - work: arfken-2013
    loc: "§3.3, Eqs (3.23)-(3.28) and the subsections 'Orthogonal Transformations' and 'Reflections', pp. 134-136"
    pages: "134-136"
    role: a plane rotation is orthogonal; rows and columns as orthonormal unit vectors; rotations have determinant +1 and reflections -1
  - work: hassani-2013
    loc: "§6.6, Thm 6.6.11 (real spectral decomposition) pp. 200-201, Thm 6.6.12 and Eq. (6.26), pp. 201-202, and Example 6.6.13, p. 202"
    pages: "200-202"
    role: the two forms of a 2x2 real orthogonal matrix and the real canonical form of an orthogonal operator; where the proof of the canonical form is to be found
---

:::definition[Unitary and orthogonal matrices]{provenance=adapted src="rhb-2006:§8.12.4 and §8.12.6, pp. 270-272"}
Let $U$ be an $n \times n$ complex matrix. $U$ is **unitary** if it is invertible with

$$
U^\dagger = U^{-1}, \qquad \text{equivalently} \qquad U^\dagger U = I ,
$$

and for a square matrix $U^\dagger U = I$ already implies $U U^\dagger = I$. A real matrix $Q$ with $Q^{\mathsf T} = Q^{-1}$ is **orthogonal**; an orthogonal matrix is exactly a unitary matrix with real entries. The real orthogonal $n \times n$ matrices form the group $\mathrm{O}(n)$, those with $\det Q = +1$ the subgroup $\mathrm{SO}(n)$, and the unitary $n \times n$ matrices the group $\mathrm{U}(n)$: in each case the identity belongs to the set, and products and inverses stay in it.

As in :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem} we use $(x, y) = y^\dagger x$ on $\mathbb{C}^n$, with $\|x\|^2 = (x,x)$.
:::

:::statement[Characterisation]{provenance=original}
For an $n \times n$ complex matrix $U$ the following are equivalent:

1. $U^\dagger U = I$;
2. the columns of $U$ are orthonormal in $\mathbb{C}^n$, i.e. $(U e_j, U e_k) = \delta_{jk}$ — and likewise for the rows;
3. $(U x, U y) = (x, y)$ for all $x, y \in \mathbb{C}^n$;
4. $\|U x\| = \|x\|$ for all $x \in \mathbb{C}^n$.

The same four statements are equivalent for a real matrix $Q$ with $Q^{\mathsf T} Q = I$, real vectors and the real inner product $x^{\mathsf T} y$. That 4 implies 3 is the polarization identity. Over $\mathbb{R}$ one identity suffices,
$$
2 x^{\mathsf T} y = \|x+y\|^2 - \|x\|^2 - \|y\|^2 ,
$$
and over $\mathbb{C}$ the real and imaginary parts are recovered separately,
$$
2\operatorname{Re}(x, y) = \|x+y\|^2 - \|x\|^2 - \|y\|^2 , \qquad
2\operatorname{Im}(x, y) = \|x+iy\|^2 - \|x\|^2 - \|y\|^2 ,
$$
the second being the first applied with $y$ replaced by $iy$; each right-hand side is built only from norms, so hypothesis 4 — used at $x$, at $y$ and at $x+y$ and $x+iy$ — reproduces $(Ux, Uy) = (x,y)$ in full.
:::

:::idea{provenance=original}
The single identity $(Ux, Uy) = y^\dagger U^\dagger U x$ turns the matrix condition $U^\dagger U = I$ into a statement about inner products, and reading it at the basis vectors $x = e_j$, $y = e_k$ turns it back again. So conditions 1, 2 and 3 are the same equation tested on all vectors, on basis vectors, and as a matrix. Condition 4 looks weaker, because it tests only $x = y$; the polarization identities say it is not, because an inner product on $\mathbb{C}^n$ is already determined by the norms of $x$, $y$, $x+y$ and $x+iy$.
:::

:::proof{provenance=original}
Throughout, $(x,y) = y^\dagger x$, which is linear in the first slot and conjugate-linear in the second, since $(x, cy) = (cy)^\dagger x = \overline{c}\,(x,y)$.

**1 implies 3.** For any $x, y$, the associativity of matrix multiplication gives
$$
(U x, U y) = (Uy)^\dagger (Ux) = y^\dagger U^\dagger U x = y^\dagger I x = (x, y),
$$
where hypothesis 1 was used at the third equality.

**3 implies 2.** Take $x = e_j$ and $y = e_k$: then $(U e_j, U e_k) = (e_j, e_k) = e_k^\dagger e_j = \delta_{jk}$, which is condition 2 for the columns, since $U e_j$ is the $j$-th column of $U$.

**2 implies 1.** The $(k,j)$ entry of $U^\dagger U$ is $e_k^\dagger U^\dagger U e_j = (U e_j, U e_k)$, which is $\delta_{kj}$ by hypothesis 2. Every entry of $U^\dagger U$ therefore agrees with the corresponding entry of $I$.

**The rows.** Condition 1 gives $\det(U^\dagger U) = \det I = 1$, so $\det U \neq 0$ by the multiplicativity of the determinant (:ref[]{to=linalg.determinants}) and $U$ is invertible with $U^{-1} = U^\dagger$; substituting that identification into $U U^{-1} = I$ gives $U U^\dagger = I$. Its $(j,k)$ entry is $\sum_m U_{jm}\overline{U_{km}}$, which is exactly the inner product of the $j$-th row with the $k$-th row, so the rows are orthonormal as well. Conversely, orthonormal rows give $U U^\dagger = I$ and hence, by the same argument with $U$ and $U^\dagger$ exchanged, $U^\dagger U = I$. This is the step that uses squareness: for a non-square matrix $U^\dagger U = I$ and $U U^\dagger = I$ are not equivalent, and only one of them can hold.

**3 implies 4.** Put $y = x$: then $\|Ux\|^2 = (Ux, Ux) = (x,x) = \|x\|^2$, and both norms are non-negative, so $\|Ux\| = \|x\|$.

**4 implies 3.** Fix $x, y$. Hypothesis 4 applied at the four vectors $x$, $y$, $x+y$ and $x+iy$ gives
$$
\|Ux\| = \|x\|, \quad \|Uy\| = \|y\|, \quad \|U(x+y)\| = \|x+y\|, \quad \|U(x+iy)\| = \|x+iy\| ,
$$
and $U$ is linear, so $U(x+y) = Ux + Uy$ and $U(x + iy) = Ux + i\,Uy$. Substituting these four equalities into the two polarization identities displayed in the statement — once for the pair $(Ux, Uy)$ and once for the pair $(x,y)$ — makes their right-hand sides identical, so $\operatorname{Re}(Ux, Uy) = \operatorname{Re}(x,y)$ and $\operatorname{Im}(Ux,Uy) = \operatorname{Im}(x,y)$. A complex number is fixed by its real and imaginary parts, so $(Ux, Uy) = (x,y)$.

The four conditions are therefore equivalent: 1, 2 and 3 are equivalent by the first three paragraphs, and 3 and 4 by the last two.

**The real case.** Replace $\dagger$ by $\mathsf{T}$ and $\mathbb{C}^n$ by $\mathbb{R}^n$ throughout. Every step above is unchanged except the last, where only the first polarization identity is available and is all that is needed, because a real inner product has no imaginary part to recover. $\square$
:::

:::statement[Determinant and spectrum]{provenance=adapted src="rhb-2006:§8.12.4, p. 270, §8.12.6, p. 271 and §8.13.3, p. 278"}
Let $U$ be unitary and $Q$ real orthogonal, both $n \times n$. Then:

1. $|\det U| = 1$, and $\det Q = \pm 1$.
2. Every eigenvalue $\lambda$ of $U$ satisfies $|\lambda| = 1$, so $\lambda = e^{i\theta}$ for some real $\theta$. In particular the only possible real eigenvalues are $+1$ and $-1$.
3. $U^{-1} = U^\dagger$ is unitary, and $Q^{-1} = Q^{\mathsf T}$ is orthogonal.

Part 1 does not characterise unitarity: $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has determinant $1$ and is not orthogonal.
:::

:::idea{provenance=original}
Take determinants of $U^\dagger U = I$ and the modulus of $\det U$ falls out, because conjugating a matrix conjugates its determinant. The eigenvalues are controlled by the characterisation rather than by any new computation: an eigenvector is stretched by $|\lambda|$ and not stretched at all, so $|\lambda| = 1$. The third part is the observation that the defining relation is symmetric in $U$ and $U^\dagger$.
:::

:::proof{provenance=adapted src="rhb-2006:§8.12.4, p. 270, §8.12.6, p. 271 and §8.13.3, p. 278"}
**Part 1.** Taking determinants in $U^\dagger U = I$ and using multiplicativity (:ref[]{to=linalg.determinants}),
$$
1 = \det I = \det(U^\dagger)\,\det U .
$$
Now $U^\dagger = \overline{U}^{\mathsf T}$, and the determinant is unchanged by transposition and conjugated by entrywise conjugation, so $\det(U^\dagger) = \overline{\det U}$. Hence $1 = \overline{\det U}\,\det U = |\det U|^2$, that is $|\det U| = 1$. For a real orthogonal $Q$ the same computation reads $1 = \det(Q^{\mathsf T})\det Q = (\det Q)^2$, and $\det Q$ is real, so $\det Q = \pm 1$.

**Part 2.** Let $U x = \lambda x$ with $x \neq 0$. Part 4 of the characterisation, applied to this $x$, gives $\|U x\| = \|x\|$; on the other hand $\|U x\| = \|\lambda x\| = |\lambda|\,\|x\|$ by homogeneity of the norm. Since $x \neq 0$ we may divide by $\|x\| > 0$ to get $|\lambda| = 1$, and every complex number of modulus one is $e^{i\theta}$ with $\theta$ real. If moreover $\lambda$ is real then $\lambda = \pm 1$, those being the only real numbers of modulus one. (Riley, Hobson and Bence reach the same conclusion by sandwiching: $x^\dagger x = x^\dagger U^\dagger U x = \overline{\lambda}\lambda\, x^\dagger x$, so $|\lambda|^2 = 1$.)

**Part 3.** By part 1, $\det U \neq 0$, so $U$ is invertible, and $U^\dagger U = I$ identifies $U^{-1} = U^\dagger$; substituting that into $UU^{-1} = I$ gives $U U^\dagger = I$. Writing $V = U^\dagger$, this says $V^\dagger V = U U^\dagger = I$, so $V$ is unitary. The real case is the same computation with transposes. $\square$
:::

:::statement[Rotations and reflections]{provenance=adapted src="arfken-2013:§3.3, Eqs (3.23)-(3.28) and 'Reflections', pp. 134-136; hassani-2013:Thm 6.6.12 and Eq. (6.26), p. 201"}
1. **Plane rotations.** The rotation of $\mathbb{R}^2$ about the origin by an angle $\theta$ has matrix
$$
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}, \qquad \det R(\theta) = +1 .
$$
2. **Every $2 \times 2$ real orthogonal matrix** is either $R(\theta)$, with determinant $+1$, or
$$
F(\theta) = \begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}, \qquad \det F(\theta) = -1 ,
$$
for some $\theta \in [0, 2\pi)$. $F(\theta)$ fixes the line through the origin at angle $\theta/2$ and negates the perpendicular direction, so it is the reflection in that line.
3. **Real canonical form.** For any real orthogonal $Q$ there is a real orthogonal $P$ with
$$
P^{\mathsf T} Q P = \operatorname{diag}\bigl(\underbrace{1, \dots, 1}_{N_+},\ \underbrace{-1, \dots, -1}_{N_-},\ R(\theta_1), \dots, R(\theta_m)\bigr),
$$
a block-diagonal matrix with $N_+ + N_- + 2m = n$. A real orthogonal matrix therefore cannot in general be diagonalized over $\mathbb{R}$; this canonical form is as close as one can get.
:::

:::idea{provenance=original}
In two dimensions orthogonality is almost no freedom at all. The first column is a unit vector of the plane, so it is $(\cos\theta, \sin\theta)$ for one angle $\theta$; the second must be a unit vector on the line perpendicular to it, and such a line contains exactly two unit vectors. One choice gives $R(\theta)$ and the other $F(\theta)$, which is the whole of part 2. That $F(\theta)$ is a reflection is then read off from the angle-addition formulas, which show at once that it fixes the direction at angle $\theta/2$ and reverses the direction perpendicular to it.
:::

:::proof[Parts 1 and 2]{provenance=adapted src="arfken-2013:§3.3, Eqs (3.23)-(3.28), pp. 134-135; hassani-2013:§6.6, Eq. (6.26), p. 201"}
**Part 1.** Write a point of $\mathbb{R}^2$ in polar form as $(r\cos\varphi, r\sin\varphi)$. By definition the rotation by $\theta$ about the origin leaves $r$ alone and sends $\varphi$ to $\varphi + \theta$, so it sends this point to $(r\cos(\varphi+\theta),\, r\sin(\varphi+\theta))$. Expanding with the angle-addition formulas,
$$
r\cos(\varphi+\theta) = x\cos\theta - y\sin\theta , \qquad
r\sin(\varphi+\theta) = x\sin\theta + y\cos\theta ,
$$
where $x = r\cos\varphi$, $y = r\sin\varphi$. Both are linear in $(x,y)$, and reading off the coefficients gives exactly $R(\theta)\,(x,y)^{\mathsf T}$. Its columns $(\cos\theta, \sin\theta)$ and $(-\sin\theta, \cos\theta)$ each have norm $\cos^2\theta + \sin^2\theta = 1$ and inner product $-\cos\theta\sin\theta + \sin\theta\cos\theta = 0$, so $R(\theta)$ is orthogonal by part 2 of the characterisation, and $\det R(\theta) = \cos^2\theta + \sin^2\theta = +1$.

**Part 2, the two forms.** Let $Q$ be a $2 \times 2$ real orthogonal matrix with columns $c_1, c_2$. By the characterisation these are orthonormal. Since $\|c_1\| = 1$, there is exactly one $\theta \in [0, 2\pi)$ with $c_1 = (\cos\theta, \sin\theta)^{\mathsf T}$: this is the polar form of a unit vector of the plane. The vectors orthogonal to $c_1$ in $\mathbb{R}^2$ form the solution set of the single non-trivial linear equation $c_1^{\mathsf T} v = 0$, hence a line, and $(-\sin\theta, \cos\theta)^{\mathsf T}$ is a unit vector on it; a line through the origin contains exactly two unit vectors, so
$$
c_2 = \pm(-\sin\theta, \cos\theta)^{\mathsf T} .
$$
With the upper sign $Q = R(\theta)$. With the lower sign $c_2 = (\sin\theta, -\cos\theta)^{\mathsf T}$ and $Q = F(\theta)$, whose determinant is $\cos\theta\,(-\cos\theta) - \sin\theta\,\sin\theta = -1$. These are the only possibilities, so every $2\times 2$ real orthogonal matrix is one or the other, and the determinant says which.

**Part 2, why $F(\theta)$ is a reflection.** Set $v = (\cos(\theta/2), \sin(\theta/2))^{\mathsf T}$, the unit vector at angle $\theta/2$, and $w = (-\sin(\theta/2), \cos(\theta/2))^{\mathsf T}$, the unit vector perpendicular to it. Multiplying out and using the angle-subtraction formulas with $\theta - \theta/2 = \theta/2$,
$$
F(\theta)\,v = \begin{pmatrix} \cos\theta\cos\tfrac\theta2 + \sin\theta\sin\tfrac\theta2 \\[2pt] \sin\theta\cos\tfrac\theta2 - \cos\theta\sin\tfrac\theta2 \end{pmatrix}
= \begin{pmatrix} \cos\tfrac\theta2 \\[2pt] \sin\tfrac\theta2\end{pmatrix} = v ,
$$
$$
F(\theta)\,w = \begin{pmatrix} -\cos\theta\sin\tfrac\theta2 + \sin\theta\cos\tfrac\theta2 \\[2pt] -\sin\theta\sin\tfrac\theta2 - \cos\theta\cos\tfrac\theta2\end{pmatrix}
= \begin{pmatrix} \sin\tfrac\theta2 \\[2pt] -\cos\tfrac\theta2\end{pmatrix} = -w .
$$
So $F(\theta)$ fixes every vector of the line $\mathbb{R}v$, which makes angle $\theta/2$ with the first axis, and negates every vector of the perpendicular line $\mathbb{R}w$. Since $\{v, w\}$ is a basis of $\mathbb{R}^2$, these two actions determine $F(\theta)$, and a linear map that fixes a line through the origin and negates its orthogonal complement is by definition the reflection in that line. $\square$
:::

:::note[Part 3 is not proved here]{provenance=adapted src="hassani-2013:§6.6, Thm 6.6.11, pp. 200-201, Thm 6.6.12 and Eq. (6.26), pp. 201-202"}
The real canonical form, part 3 of the statement above, is quoted without proof: it rests on the real spectral decomposition of a normal operator, which decomposes a real inner product space into one- and two-dimensional subspaces invariant under the operator, and that machinery is outside this unit. :cite{work=hassani-2013 loc="Thm 6.6.11, pp. 200-201"} proves the decomposition and then deduces the canonical form, with the orthogonality of the transforming matrix, in :cite{work=hassani-2013 loc="Thm 6.6.12, pp. 201-202"}. Hassani also gives, in Example 6.6.13 on p. 202, a short non-rigorous route through the complexification: regard $Q$ as unitary, write it as $e^{A}$ with $A$ real antisymmetric, note that the eigenvalues of $A$ are $0$ and pure imaginary pairs $\pm i\theta_j$, and exponentiate. Our worked example below carries out the construction by hand in a single case, which is a check on the form but not a proof of it.
:::

:::note{provenance=original}
A unitary matrix is a rigid motion of $\mathbb{C}^n$ fixing the origin: it moves vectors around but changes no length and no angle. That is why unitary matrices are the allowed changes of orthonormal basis, the matrices that diagonalize Hermitian and :ref[normal]{to=linalg.normal-matrices} matrices, the time evolutions of quantum mechanics, and — in the real case — the rotations and reflections of rigid-body kinematics.
:::

:::remark[Conventions and traps]{provenance=original}
**Active and passive.** Expressing the *same* vector in axes rotated by $+\theta$ multiplies its component column by $R(\theta)^{\mathsf T} = R(-\theta)$, whereas rotating the *vector* by $+\theta$ in fixed axes multiplies it by $R(\theta)$. Books that set up rotations by rotating the coordinate system therefore display the transpose of the matrix above. Always say which of the two you mean.

**$\mathrm{O}(n)$ is not the same as $\mathrm{SO}(n)$.** Orthogonality forces only $\det Q = \pm 1$; proper rotations are the $\det Q = +1$ half. The two halves are not connected: the determinant is continuous and takes no value between $-1$ and $+1$ on $\mathrm{O}(n)$, so no continuous family of rotations starting at the identity ever reaches a reflection.

**"Orthogonal matrix" is not "matrix with orthogonal columns".** The columns must also be unit vectors. A matrix $Q$ whose columns are pairwise orthogonal and all non-zero satisfies $Q^{\mathsf T} Q = D$ with $D$ diagonal and every diagonal entry positive; such a $Q$ stretches the $j$-th coordinate direction by $\sqrt{D_{jj}}$, so unless all the $D_{jj}$ are equal it changes lengths by different factors in different directions, and unless they all equal $1$ it changes lengths at all. Dropping "non-zero" loses even this: the zero vector is orthogonal to everything, so a matrix with a zero column has pairwise orthogonal columns while being singular.

**Preserving the norm requires all $x$.** $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ sends $e_2$ to $e_1$, so it preserves the length of $e_2$, yet it kills $e_1$; part 4 of the characterisation is a statement about every vector, not about one.

**The real block form is not unique as displayed.** Part 3 of "Rotations and reflections" leaves each $\theta_j$ free in $[0, 2\pi)$, and $R(0) = I_2$ while $R(\pi) = \operatorname{diag}(-1, -1)$: a block $R(0)$ is two $+1$ entries and a block $R(\pi)$ two $-1$ entries, so the same $Q$ admits displays with different $N_\pm$ and $m$. Uniqueness, up to the order of the blocks, needs $\theta_j \in (0, \pi)$, which forces $\sin\theta_j \neq 0$; then the $2 \times 2$ blocks carry exactly the non-real eigenvalue pairs $e^{\pm i \theta_j}$ and $N_\pm$ are the multiplicities of $\pm 1$. :cite{work=hassani-2013 loc="Thm 6.6.12, p. 201"} states the form without that restriction, and part 3 follows the source.

**Real versus complex diagonalization.** A unitary matrix is normal, hence unitarily diagonalizable over $\mathbb{C}$. $R(\theta)$ with $\sin\theta \neq 0$ illustrates the difference: its eigenvalues $e^{\pm i\theta}$ are not real, so it is diagonalizable over $\mathbb{C}$ but not over $\mathbb{R}$, which is what part 3 of the previous statement expresses.
:::

:::example[Classifying two orthogonal matrices]{provenance=original}
**Part A: a $2 \times 2$ matrix.** Let
$$
Q_1 = \frac15 \begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix} .
$$
Its columns are $(3,4)/5$ and $(4,-3)/5$, each of norm $\sqrt{9+16}/5 = 1$, with inner product $(12 - 12)/25 = 0$; so $Q_1$ is orthogonal by part 2 of the characterisation. Its determinant is $(-9 - 16)/25 = -1$, so by part 2 of "Rotations and reflections" it is $F(\theta)$, not a rotation, with $\cos\theta = 3/5$ and $\sin\theta = 4/5$. The mirror line is the one at angle $\theta/2$, and
$$
\tan\frac\theta2 = \frac{\sin\theta}{1+\cos\theta} = \frac{4/5}{1 + 3/5} = \frac{4/5}{8/5} = \frac12 ,
$$
so the mirror is the line $y = x/2$, spanned by $(2,1)$. Checking directly: $Q_1 (2,1)^{\mathsf T} = \tfrac15(6+4,\, 8-3)^{\mathsf T} = (2,1)^{\mathsf T}$, fixed; and $Q_1(-1,2)^{\mathsf T} = \tfrac15(-3+8,\, -4-6)^{\mathsf T} = (1,-2)^{\mathsf T} = -(-1,2)^{\mathsf T}$, negated. The eigenvalues are $+1$ and $-1$, as part 2 of "Determinant and spectrum" allows for a real matrix.

**Part B: a $3 \times 3$ matrix, reduced to the canonical form.** Let
$$
Q = \frac13 \begin{pmatrix} 2 & -2 & 1 \\ 1 & 2 & 2 \\ -2 & -1 & 2 \end{pmatrix} .
$$

*Step 1: it is orthogonal.* The columns are $c_1 = (2,1,-2)/3$, $c_2 = (-2,2,-1)/3$, $c_3 = (1,2,2)/3$. Each has squared norm $(4+1+4)/9 = (4+4+1)/9 = (1+4+4)/9 = 1$, and
$$
c_1^{\mathsf T} c_2 = \tfrac19(-4+2+2) = 0, \quad
c_1^{\mathsf T} c_3 = \tfrac19(2+2-4) = 0, \quad
c_2^{\mathsf T} c_3 = \tfrac19(-2+4-2) = 0 .
$$
So $Q^{\mathsf T} Q = I$.

*Step 2: norms are preserved.* As a check on part 4 of the characterisation, take $x = (1,2,3)^{\mathsf T}$. Then $Qx = \tfrac13(2-4+3,\ 1+4+6,\ -2-2+6)^{\mathsf T} = \tfrac13(1,11,2)^{\mathsf T}$, and
$$
\|Qx\|^2 = \frac{1 + 121 + 4}{9} = \frac{126}{9} = 14 = 1 + 4 + 9 = \|x\|^2 .
$$

*Step 3: the determinant.* Expanding along the first row of the integer matrix $3Q$,
$$
\det(3Q) = 2(4+2) + 2(2+4) + 1(-1+4) = 12 + 12 + 3 = 27 ,
$$
so $\det Q = 27/3^3 = +1$ and $Q \in \mathrm{SO}(3)$: a rotation, not a reflection.

*Step 4: the spectrum.* The trace is $(2+2+2)/3 = 2$, the sum of the three $2\times 2$ principal minors of $Q$ is $2$, and $\det Q = 1$, so the characteristic polynomial is
$$
\lambda^3 - 2\lambda^2 + 2\lambda - 1 = (\lambda - 1)(\lambda^2 - \lambda + 1) ,
$$
with roots $1$ and $\tfrac12 \pm \tfrac{\sqrt3}{2} i = e^{\pm i\pi/3}$. All three have modulus one, as part 2 of "Determinant and spectrum" requires. Comparing the trace with the canonical form $\operatorname{diag}(1, R(\theta))$, whose trace is $1 + 2\cos\theta$, gives $\cos\theta = \tfrac12$: the rotation angle is $\theta = \pi/3$, or $60^\circ$.

*Step 5: the axis.* Solving $(Q - I)x = 0$, i.e. $\tfrac13(-x_1 - 2x_2 + x_3,\ x_1 - x_2 + 2x_3,\ -2x_1 - x_2 - x_3) = 0$, gives the one-dimensional solution space spanned by $n = (-1,1,1)^{\mathsf T}$; indeed $Qn = \tfrac13(-2-2+1,\ -1+2+2,\ 2-1+2)^{\mathsf T} = \tfrac13(-3,3,3)^{\mathsf T} = n$. Normalising, $\hat n = (-1,1,1)^{\mathsf T}/\sqrt3$.

*Step 6: the canonical form.* Pick any unit vector perpendicular to $\hat n$, say $\hat e = (1,1,0)^{\mathsf T}/\sqrt2$ (note $\hat n^{\mathsf T}\hat e = (-1+1+0)/\sqrt6 = 0$), and complete to a right-handed frame with
$$
\hat f = \hat n \times \hat e = \frac{1}{\sqrt6}\,(-1, 1, -2)^{\mathsf T} .
$$
Now $Q\hat e = \tfrac13(2-2,\ 1+2,\ -2-1)^{\mathsf T}/\sqrt2 = (0,1,-1)^{\mathsf T}/\sqrt2$, and
$$
\hat e^{\mathsf T} Q \hat e = \tfrac12(0 + 1 + 0) = \tfrac12 = \cos\tfrac\pi3 ,
\qquad
\hat f^{\mathsf T} Q \hat e = \tfrac{1}{\sqrt{12}}(0 + 1 + 2) = \tfrac{3}{2\sqrt3} = \tfrac{\sqrt3}{2} = \sin\tfrac\pi3 .
$$
With $P = (\hat n\ \ \hat e\ \ \hat f)$, which is orthogonal because its columns are orthonormal by construction and has $\det P = +1$,
$$
P^{\mathsf T} Q P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1/2 & -\sqrt3/2 \\ 0 & \sqrt3/2 & 1/2\end{pmatrix} = \operatorname{diag}\bigl(1,\, R(\pi/3)\bigr),
$$
the canonical form of part 3 with $N_+ = 1$, $N_- = 0$, $m = 1$ and $\theta_1 = \pi/3$. Since $\sin(\pi/3) \neq 0$ this display is the unique one up to the order of the blocks, as the remark above requires. The upper-left $1$ is the axis and the $2\times 2$ block the rotation by $60^\circ$ in the plane perpendicular to it.
:::

:::application{provenance=original}
**Unitarity is conservation of probability.** In quantum mechanics a state is a unit vector $\psi$ of a complex inner product space, and $|(\psi, \phi)|^2$ is the probability of finding the state $\psi$ in the state $\phi$; the total probability is $\|\psi\|^2 = 1$. A time evolution is therefore allowed only if it preserves the norm of every state — part 4 of the characterisation — which by that characterisation means exactly that it is unitary. For a finite-dimensional system with Hermitian Hamiltonian $H$, the evolution $U(t) = e^{-iHt/\hbar}$ satisfies $U(t)^\dagger = e^{+iH^\dagger t/\hbar} = e^{iHt/\hbar} = U(t)^{-1}$, so it is unitary, and part 2 above says its eigenvalues are the phases $e^{-iE_kt/\hbar}$ attached to the energy levels: time evolution rotates phases and changes no amplitude. The same argument constrains a scattering matrix $S$: unitarity of $S$ is the statement that no probability is lost between the incoming and outgoing channels, and it is the hypothesis behind the optical theorem. Changing between two orthonormal bases is likewise a unitary matrix, which is why the predictions of the theory do not depend on the basis chosen.

**Orthogonality turns a rigid rotation into an antisymmetric angular velocity.** Let $Q(t) \in \mathrm{SO}(3)$ be the matrix carrying body-fixed axes to laboratory axes at time $t$, a differentiable function of $t$. Differentiating the constraint $Q^{\mathsf T} Q = I$ gives
$$
\dot Q^{\mathsf T} Q + Q^{\mathsf T}\dot Q = 0, \qquad \text{so} \qquad \Omega = Q^{\mathsf T}\dot Q \text{ satisfies } \Omega^{\mathsf T} = -\Omega .
$$
A $3\times 3$ antisymmetric matrix has only three independent entries, and those three numbers are the components of the angular velocity vector: a rigid body in three dimensions has three rotational degrees of freedom, not nine, and this is why. The determinant is what forbids the body from passing continuously into a mirror image of itself, as the remark on $\mathrm{O}(n)$ versus $\mathrm{SO}(n)$ explains: $\det Q(t)$ is continuous in $t$ and confined to $\{\pm 1\}$, so it cannot change during a motion.

**Orthogonal transformations are the numerically safe ones.** In numerical linear algebra the standard algorithms — $QR$ factorisation, the reduction to Hessenberg or tridiagonal form, the $QR$ eigenvalue iteration, the singular value decomposition — act by multiplying on the left by orthogonal matrices, built either as Givens plane rotations $R(\theta)$ embedded in a pair of coordinates or as Householder reflections, which are the $n$-dimensional analogues of $F(\theta)$. The reason is part 4 of the characterisation: because $\|Qx\| = \|x\|$ exactly, an orthogonal step neither magnifies the vector nor magnifies the error already in it, so the rounding errors of the previous steps are carried along rather than amplified. A general invertible step, Gaussian elimination for instance, can multiply an error by a large factor. In the language of conditioning, an orthogonal matrix has condition number $\|Q\|\,\|Q^{-1}\| = 1$ in the Euclidean norm, the smallest value possible, which is the quantitative form of the same statement.
:::
