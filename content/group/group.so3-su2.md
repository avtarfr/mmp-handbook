---
id: group.so3-su2
title: The rotation group and SU(2)
kind: theorem
level: core
summary: Computes the generators of $SO(3)$ and of $SU(2)$, shows that the two Lie algebras are the same three-dimensional algebra $[J_j,J_k]=i\epsilon_{jkl}J_l$, and proves that $U\mapsto R(U)$ defined by $U(\mathbf{x}\cdot\boldsymbol{\sigma})U^{\dagger}=(R\mathbf{x})\cdot\boldsymbol{\sigma}$ is a surjective homomorphism $SU(2)\to SO(3)$ with kernel $\{\pm I\}$ — the two-to-one covering that makes a spinor change sign under a rotation through $2\pi$.
prereqs: [group.lie-groups-algebras, linalg.unitary-orthogonal-matrices, group.homomorphisms-quotients, linalg.matrix-exponential, linalg.determinants, group.quaternions]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§17.7, pp. 849–852: the $SO(2)$ generator $S_z=\\sigma_2$, Eq. (17.44), and the three $SO(3)$ generators $S_1$, $S_2$, $S_3$ obtained from $U_x(\\psi)$, $U_y(\\theta)$ and the $z$-axis rotation by $S=-i\\,dU/d\\varphi|_0$, Eqs. (17.45)–(17.49), pp. 849–850; the structure constants $[S_j,S_k]=i\\epsilon_{jkl}S_l$ of $SO(3)$, Eq. (17.50), p. 850; Example 17.7.2 (the same generators in the $l=1$ spherical-harmonic basis), Eqs. (17.51)–(17.53), pp. 850–851; the $SU(2)$ generators $S_j=\\tfrac12\\sigma_j$, Eq. (17.54), their commutators Eq. (17.55), and the Euler-identity form $U_j(\\alpha_j)=1_2\\cos(\\alpha_j/2)+i\\sigma_j\\sin(\\alpha_j/2)$, Eqs. (17.56)–(17.57), p. 851; the two-to-one homomorphism, the $4\\pi$ periodicity, $U_x(\\pi)|{\\uparrow}\\rangle=i|{\\downarrow}\\rangle$ and $U_x(2\\pi)=-1_2$, Eq. (17.59) and the discussion, p. 852"
    pages: "849-852"
    role: the explicit generators of $SO(3)$ and $SU(2)$ in the defining representations, the common commutation relations, the half-angle form of an $SU(2)$ rotation, and the statement that the correspondence between the two groups is two-to-one rather than one-to-one, with the spinor consequences
  - work: hassani-2013
    loc: "§30.3.3, p. 972: the identification $J_1=-iM_{23}$, $J_2=iM_{13}$, $J_3=-iM_{12}$ of the $\\mathfrak{so}(3)$ generators with the angular momentum operators, the labelling of the irreducible representations by $j$ integer or half-odd-integer with dimension $2j+1$, and the Euler-angle factorisation $R(\\psi,\\theta,\\varphi)=\\exp(M_{12}\\psi)\\exp(M_{31}\\theta)\\exp(M_{12}\\varphi)$ of a general rotation; §31.2.1, pp. 997–998: the Pauli matrices as a representation of the Clifford relations $\\sigma_i\\sigma_j+\\sigma_j\\sigma_i=2\\delta_{ij}$, the resulting $[\\sigma_j,\\sigma_k]=2i\\epsilon_{jkl}\\sigma_l$, the traceless anti-Hermitian $s_j=-i\\sigma_j/2$ spanning $\\mathfrak{su}(2)$, and Thm 31.2.6 ($\\Psi:\\mathrm{Spin}(\\mu,\\nu)\\to SO(\\mu,\\nu)$ is surjective with kernel $\\{1,-1\\}$), p. 996"
    pages: "972, 996-998"
    role: the Euler-angle factorisation used to prove surjectivity, the Clifford relation for the Pauli matrices and the resulting bases of $\mathfrak{su}(2)$, and the kernel-$\{\pm1\}$ statement for the spin covering
  - work: rhb-2006
    loc: "Ch. 28, Exercise 28.8, p. 1071: the matrices $M(a_0,\\mathbf{a})=\\begin{pmatrix} a_0+a_1i & -a_2+a_3i\\\\ a_2+a_3i & a_0-a_1i\\end{pmatrix}$ with $a_0^2+|\\mathbf{a}|^2=1$ form a group under multiplication, and $|z|^2$ is invariant under $z\\mapsto Mz$; §28.7.3, pp. 1069–1070: rotations through the same angle about different axes are conjugate in the rotation group, the relation $R_j(\\theta)=\\phi_{ij}^{-1}R_i(\\theta)\\phi_{ij}$ being displayed at the top of p. 1070"
    pages: "1069-1071"
    role: the real four-parameter (unit-quaternion) description of $SU(2)$ and the invariance of the Hermitian norm, and the conjugacy of equal-angle rotations about different axes
---

:::definition[The two groups, the Pauli matrices, and the sign convention]{provenance=adapted src="arfken-2013:Eqs. (17.44)–(17.49), pp. 849–850, and Eq. (17.54), p. 851; hassani-2013:§31.2.1, p. 997"}
The **rotation group** and the **special unitary group in two dimensions** are
$$
SO(3) = \{\, R \in M_3(\mathbb{R}) : R^{\mathsf{T}}R = I,\ \det R = 1 \,\},
\qquad
SU(2) = \{\, U \in M_2(\mathbb{C}) : U^{\dagger}U = I,\ \det U = 1 \,\} .
$$
Both are matrix Lie groups in the sense of :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}, being closed subsets of the invertible matrices cut out by polynomial equations, and both are compact: their entries are bounded by $1$ in modulus.

The **Pauli matrices** are
$$
\sigma_1 = \begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
\sigma_2 = \begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad
\sigma_3 = \begin{pmatrix}1&0\\0&-1\end{pmatrix} .
$$
They are Hermitian and traceless, and they satisfy the **Clifford relation**
$$
\sigma_j\sigma_k + \sigma_k\sigma_j = 2\delta_{jk}I ,
$$
which :cite[Hassani]{work=hassani-2013 loc="§31.2.1, p. 997"} takes as their defining property. Together with $\sigma_1\sigma_2 = i\sigma_3$ and its cyclic images this gives the single identity
$$
(\mathbf{a}\cdot\boldsymbol{\sigma})(\mathbf{b}\cdot\boldsymbol{\sigma}) = (\mathbf{a}\cdot\mathbf{b})\,I + i\,(\mathbf{a}\times\mathbf{b})\cdot\boldsymbol{\sigma} ,
\qquad \mathbf{a}\cdot\boldsymbol{\sigma} := a_1\sigma_1+a_2\sigma_2+a_3\sigma_3 ,
$$
for real vectors $\mathbf{a},\mathbf{b}$, which is used repeatedly below.

**Generators and the sign convention.** Following the physicists' convention of :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}, we write group elements as exponentials of $i$ times a Hermitian matrix, and we fix the sign so that
$$
R_{\mathbf{n}}(\theta) = \exp\bigl(-i\theta\,\mathbf{n}\cdot\mathbf{J}\bigr)
$$
is the rotation of a *vector* through the angle $\theta$ about the unit axis $\mathbf{n}$, counterclockwise seen from the tip of $\mathbf{n}$. The three matrices $\mathbf{J} = (J_1,J_2,J_3)$ are then
$$
(J_k)_{pq} = -i\,\epsilon_{kpq},
\qquad\text{that is}\qquad
J_1 = \begin{pmatrix}0&0&0\\0&0&-i\\0&i&0\end{pmatrix},\quad
J_2 = \begin{pmatrix}0&0&i\\0&0&0\\-i&0&0\end{pmatrix},\quad
J_3 = \begin{pmatrix}0&-i&0\\i&0&0\\0&0&0\end{pmatrix} .
$$
Each $J_k$ is exactly the matrix :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eqs. (17.45), (17.47), (17.49), pp. 849–850"} call $S_k$ — that is, $J_1 = S_1$, $J_2 = S_2$ and $J_3 = S_3$, the order of their equation numbers being $S_3$, $S_1$, $S_2$ rather than ours. The one difference is that they write the group element as $\exp(+i\varphi S)$, which rotates the coordinate axes through $+\varphi$ and therefore rotates a vector through $-\varphi$. The Lie algebra and all the commutators below are the same either way; only the sign of the angle differs, and we flag it again where it matters.
:::

:::statement[$SU(2)$ is a two-sheeted cover of $SO(3)$]{provenance=adapted src="arfken-2013:Eqs. (17.50), (17.55), (17.57), pp. 850–852; hassani-2013:Thm 31.2.6, p. 996, and §30.3.3, p. 972"}
1. **The two Lie algebras coincide.** $\mathfrak{so}(3)$ is the space of real skew-symmetric $3\times3$ matrices, with real basis $\{-iJ_1,-iJ_2,-iJ_3\}$, and $\mathfrak{su}(2)$ is the space of traceless anti-Hermitian $2\times2$ matrices, with real basis $\{-i\sigma_1/2,-i\sigma_2/2,-i\sigma_3/2\}$. Both are three-dimensional, and in the Hermitian normalisation $S_k = J_k$ for $\mathfrak{so}(3)$ and $S_k = \tfrac12\sigma_k$ for $\mathfrak{su}(2)$ the structure constants are the same:
$$
[S_j,S_k] = i\,\epsilon_{jkl}\,S_l .
$$
The real-linear map $-iJ_k \mapsto -i\sigma_k/2$, which carries the one real basis to the other, is therefore an isomorphism $\mathfrak{so}(3)\cong\mathfrak{su}(2)$ of real Lie algebras. (It is usually written $J_k\mapsto\tfrac12\sigma_k$, in the Hermitian normalisation; the Hermitian matrices $J_k$ and $\tfrac12\sigma_k$ do not themselves lie in the two real algebras.)

2. **Half-angle formula.** For a unit vector $\mathbf{n}\in\mathbb{R}^3$ and $\theta\in\mathbb{R}$,
$$
U_{\mathbf{n}}(\theta) := \exp\!\left(-\tfrac{i}{2}\theta\,\mathbf{n}\cdot\boldsymbol{\sigma}\right)
= I\cos\frac{\theta}{2} \;-\; i\,(\mathbf{n}\cdot\boldsymbol{\sigma})\,\sin\frac{\theta}{2} \;\in\; SU(2),
$$
and every element of $SU(2)$ is of this form. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (17.57), p. 851"} give the same formula with the opposite sign of the angle, as $U_j(\alpha_j) = 1_2\cos(\alpha_j/2) + i\sigma_j\sin(\alpha_j/2)$.

3. **The covering homomorphism.** For $U\in SU(2)$ and $\mathbf{x}\in\mathbb{R}^3$ the matrix $U(\mathbf{x}\cdot\boldsymbol{\sigma})U^{\dagger}$ is again traceless and Hermitian, so it equals $\mathbf{x}'\cdot\boldsymbol{\sigma}$ for a unique $\mathbf{x}'\in\mathbb{R}^3$; writing $\mathbf{x}' = R(U)\mathbf{x}$ defines a map
$$
\Phi : SU(2)\longrightarrow SO(3), \qquad \Phi(U) = R(U),
\qquad R(U)_{ij} = \tfrac12\,\mathrm{tr}\bigl(\sigma_i\,U\sigma_j U^{\dagger}\bigr) .
$$
$\Phi$ is a surjective group homomorphism with
$$
\ker\Phi = \{\,I,\,-I\,\},
$$
so by the first isomorphism theorem (:ref[homomorphisms and quotient groups]{to=group.homomorphisms-quotients})
$$
SO(3) \;\cong\; SU(2)/\{\pm I\} ,
$$
and $\Phi$ is exactly two-to-one: $\Phi(U) = \Phi(-U)$ and nothing else is identified. Concretely $\Phi\bigl(U_{\mathbf{n}}(\theta)\bigr) = R_{\mathbf{n}}(\theta)$: the half-angle in $SU(2)$ corresponds to the full angle in $SO(3)$.

4. **Spinors.** $SU(2)$ is the set of matrices
$$
U = \begin{pmatrix} a & -\bar b\\ b & \bar a\end{pmatrix},\qquad |a|^2+|b|^2 = 1 ,
$$
hence is the unit sphere $S^3\subset\mathbb{C}^2\cong\mathbb{R}^4$ and is path-connected. Its defining representation acts on $\mathbb{C}^2$; the elements of $\mathbb{C}^2$ are called **spinors**. Because $U_{\mathbf{n}}(2\pi) = -I$ while $R_{\mathbf{n}}(2\pi) = I$, a spinor is reversed in sign by a rotation through $2\pi$ and restored only after $4\pi$. Equivalently: a representation of $SU(2)$ descends to a representation of $SO(3)$ if and only if $-I$ acts as the identity, which happens exactly for the integer-$j$ representations.
:::

:::idea{provenance=original}
Everything turns on one observation: the traceless Hermitian $2\times2$ matrices form a *three*-dimensional real vector space, with $\sigma_1,\sigma_2,\sigma_3$ as a basis, and on that space the determinant is a quadratic form,
$$
\det(\mathbf{x}\cdot\boldsymbol{\sigma}) = -|\mathbf{x}|^2 .
$$
Conjugation $X\mapsto UXU^{\dagger}$ by a unitary matrix preserves tracelessness, Hermiticity and the determinant. So each $U$ acts on $\mathbb{R}^3$ by a linear map preserving the Euclidean length: an orthogonal map. The determinant of that orthogonal map is $\pm1$, it depends continuously on $U$, and $SU(2)$ is connected, so the sign cannot jump away from its value $+1$ at $U=I$ — the image lies in $SO(3)$.

Which $U$ act trivially? Those commuting with all three Pauli matrices, and a matrix commuting with $\sigma_1$ and $\sigma_3$ is a multiple of the identity; the condition $\det U = 1$ then leaves $\pm I$. Finally, surjectivity: a one-line computation shows that the diagonal $U = \mathrm{diag}(e^{-i\theta/2},e^{i\theta/2})$ produces the rotation by $\theta$ about the $z$-axis, and by the Euler-angle factorisation every rotation is a product of three such rotations about two fixed axes.

The factor $\tfrac12$ in the exponent is thus not a convention but the content of the theorem: going once round in $SO(3)$ is going half-way round in $SU(2)$.
:::

:::proof[Part 1: the two Lie algebras]{provenance=adapted src="arfken-2013:Eqs. (17.50) and (17.55), pp. 850–851; hassani-2013:§31.2.1, p. 998"}
**Step 1: $\mathfrak{so}(3)$ and $\mathfrak{su}(2)$ as sets.** By :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}, $\mathfrak{so}(3)$ consists of the real $X$ with $X^{\mathsf{T}} = -X$ and $\mathfrak{su}(2)$ of the complex $X$ with $X^{\dagger} = -X$ and $\mathrm{tr}X=0$. A real skew-symmetric $3\times 3$ matrix has zero diagonal and three free entries; a traceless anti-Hermitian $2\times2$ matrix has diagonal $\mathrm{diag}(i\gamma,-i\gamma)$ and one free complex off-diagonal entry, again three real parameters. Both are three-dimensional over $\mathbb{R}$.

**Step 2: bases.** The matrices $-iJ_k$ are real with $(-iJ_k)_{pq} = -\epsilon_{kpq}$, hence skew-symmetric, and they are linearly independent, so they span $\mathfrak{so}(3)$. The matrices $-i\sigma_k/2$ are traceless and anti-Hermitian because the $\sigma_k$ are traceless and Hermitian, and they are linearly independent, so they span $\mathfrak{su}(2)$; this is :cite[Hassani's]{work=hassani-2013 loc="p. 998"} observation that his $s_j = -i\sigma_j/2$ lie in $\mathfrak{su}(2)$.

**Step 3: the commutators of the $J_k$.** We use the contraction identity $\sum_q \epsilon_{qab}\epsilon_{qcd} = \delta_{ac}\delta_{bd}-\delta_{ad}\delta_{bc}$ and the cyclic symmetry of $\epsilon$. From $(J_k)_{pq} = -i\epsilon_{kpq}$,
$$
\bigl([J_j,J_k]\bigr)_{pr}
= \sum_q\Bigl[(-i\epsilon_{jpq})(-i\epsilon_{kqr}) - (-i\epsilon_{kpq})(-i\epsilon_{jqr})\Bigr]
= -\sum_q\bigl(\epsilon_{jpq}\epsilon_{kqr} - \epsilon_{kpq}\epsilon_{jqr}\bigr) .
$$
Cycling the indices so that the summation index comes first, $\epsilon_{jpq}\epsilon_{kqr} = \epsilon_{qjp}\epsilon_{qrk}$, and the contraction identity gives $\sum_q \epsilon_{qjp}\epsilon_{qrk} = \delta_{jr}\delta_{pk}-\delta_{jk}\delta_{pr}$. Exchanging $j$ and $k$ in that result gives $\sum_q\epsilon_{kpq}\epsilon_{jqr} = \delta_{kr}\delta_{pj}-\delta_{jk}\delta_{pr}$. Subtracting, the two $\delta_{jk}\delta_{pr}$ terms cancel and
$$
\bigl([J_j,J_k]\bigr)_{pr} = -\bigl(\delta_{jr}\delta_{pk} - \delta_{kr}\delta_{pj}\bigr) = \delta_{pj}\delta_{kr} - \delta_{jr}\delta_{pk} .
$$
On the other side, $\bigl(i\epsilon_{jkl}J_l\bigr)_{pr} = \sum_l i\,\epsilon_{jkl}(-i\epsilon_{lpr}) = \sum_l\epsilon_{ljk}\epsilon_{lpr} = \delta_{jp}\delta_{kr}-\delta_{jr}\delta_{kp}$, which is the same expression. Hence
$$
[J_j,J_k] = i\,\epsilon_{jkl}\,J_l ,
$$
which is :cite[Arfken, Weber and Harris's Eq. (17.50)]{work=arfken-2013 loc="p. 850"}, there verified by direct matrix multiplication. That check is worth repeating on one case: from the displayed matrices, $J_1J_2$ has the single nonzero entry $(-i)(-i) = -1$ in position $(2,1)$ and $J_2J_1$ the single nonzero entry $(i)(i) = -1$ in position $(1,2)$, so $J_1J_2 - J_2J_1$ has $(1,2)$ entry $+1$ and $(2,1)$ entry $-1$ and all other entries zero. That is indeed $iJ_3$, since $J_3$ has $(1,2)$ entry $-i$ and $(2,1)$ entry $+i$.

**Step 4: the commutators of the $\sigma_k$.** From the Clifford relation $\sigma_j\sigma_k = -\sigma_k\sigma_j$ for $j\ne k$ and $\sigma_1\sigma_2 = i\sigma_3$ with its cyclic images,
$$
[\sigma_j,\sigma_k] = 2\sigma_j\sigma_k = 2i\,\epsilon_{jkl}\sigma_l \qquad (j\neq k),
$$
and both sides vanish for $j=k$. Setting $S_k = \tfrac12\sigma_k$ divides the left side by $4$ and the right side by $2$, giving $[S_j,S_k] = i\epsilon_{jkl}S_l$, which is :cite[Arfken, Weber and Harris's Eq. (17.55)]{work=arfken-2013 loc="p. 851"}. Since the structure constants agree with those of step 3, so do the brackets of the two *real* bases of step 2. Put $A_k = -iJ_k$ and $B_k = -i\sigma_k/2$; then
$$
[A_j,A_k] = (-i)^2[J_j,J_k] = -\,i\epsilon_{jkl}J_l = \epsilon_{jkl}\,A_l ,
$$
and the identical computation with $B$ in place of $A$ gives $[B_j,B_k] = \epsilon_{jkl}B_l$. The real-linear map $A_k\mapsto B_k$ from $\mathfrak{so}(3)$ to $\mathfrak{su}(2)$ therefore carries brackets to brackets, and being a bijection between three-dimensional real spaces it is an isomorphism of real Lie algebras. In the Hermitian normalisation the same map is written $J_k\mapsto\tfrac12\sigma_k$. $\square$
:::

:::proof[Part 2: the half-angle formula]{provenance=adapted src="arfken-2013:Eqs. (17.56)–(17.57), p. 851"}
Let $\mathbf{n}$ be a unit vector. By the product identity of the definition block with $\mathbf{a}=\mathbf{b}=\mathbf{n}$,
$$
(\mathbf{n}\cdot\boldsymbol{\sigma})^2 = |\mathbf{n}|^2 I + i(\mathbf{n}\times\mathbf{n})\cdot\boldsymbol{\sigma} = I .
$$
So the even powers of $\mathbf{n}\cdot\boldsymbol{\sigma}$ are $I$ and the odd powers are $\mathbf{n}\cdot\boldsymbol{\sigma}$. Splitting the exponential series into even and odd parts,
$$
\exp\!\left(-\tfrac{i\theta}{2}\mathbf{n}\cdot\boldsymbol{\sigma}\right)
= \sum_{m\ge0}\frac{(-i\theta/2)^{2m}}{(2m)!}I + \sum_{m\ge0}\frac{(-i\theta/2)^{2m+1}}{(2m+1)!}(\mathbf{n}\cdot\boldsymbol{\sigma})
= I\cos\frac\theta2 - i(\mathbf{n}\cdot\boldsymbol{\sigma})\sin\frac\theta2 ,
$$
the two series being those of $\cos$ and $\sin$ because $(-i)^{2m} = (-1)^m$ and $(-i)^{2m+1} = -i(-1)^m$. The result is unitary with determinant $1$: writing $c = \cos(\theta/2)$ and $s=\sin(\theta/2)$ and using $(\mathbf{n}\cdot\boldsymbol{\sigma})^{\dagger} = \mathbf{n}\cdot\boldsymbol{\sigma}$,
$$
U^{\dagger}U = (cI + is\,\mathbf{n}\cdot\boldsymbol{\sigma})(cI - is\,\mathbf{n}\cdot\boldsymbol{\sigma}) = (c^2+s^2)I = I ,
\qquad
\det U = c^2 + s^2 = 1 ,
$$
the determinant being computed entry by entry: $cI - is\,\mathbf{n}\cdot\boldsymbol{\sigma}$ has diagonal $c\mp isn_3$ and off-diagonal entries $-is(n_1\mp in_2)$, so
$$
\det U = (c-isn_3)(c+isn_3) - (-is)^2(n_1-in_2)(n_1+in_2) = c^2 + s^2n_3^2 + s^2(n_1^2+n_2^2) = c^2+s^2 = 1 .
$$

Conversely, every $U\in SU(2)$ has this form. Unitarity and $\det U=1$ force
$$
U = \begin{pmatrix} a & -\bar b\\ b& \bar a\end{pmatrix}, \qquad |a|^2+|b|^2=1 ,
$$
since the second column of a unitary matrix is a unit vector orthogonal to the first, hence a multiple of $(-\bar b,\bar a)$, and the determinant condition fixes the multiple to be $1$. Writing $a = c - is n_3$ and $b = sn_2 - isn_1$ with $c = \mathrm{Re}\,a$ and $s\mathbf{n}$ the real vector $(-\mathrm{Im}\,b,\ \mathrm{Re}\,b,\ -\mathrm{Im}\,a)$ exhibits $U$ in the half-angle form with $c^2+s^2 = |a|^2+|b|^2 = 1$, so $c = \cos(\theta/2)$ and $s = \sin(\theta/2)$ for some $\theta$, and $\mathbf{n}$ is a unit vector whenever $s\ne0$ (when $s = 0$, $U = \pm I$ and any $\mathbf{n}$ will do). This is the four-real-parameter description with one constraint that :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Exercise 28.8, p. 1071"} set as an exercise: the matrices $M(a_0,\mathbf{a})$ with $a_0^2+|\mathbf{a}|^2 = 1$ form a group, and they are the unit :ref[quaternions]{to=group.quaternions}. In particular $SU(2)$ is the unit sphere $S^3$ in $\mathbb{C}^2 \cong \mathbb{R}^4$ and is path-connected, since $S^3$ is. $\square$
:::

:::proof[Part 3: the covering homomorphism]{provenance=adapted src="hassani-2013:§30.3.3, p. 972, and Thm 31.2.6, p. 996; rhb-2006:§28.7.3, pp. 1069–1070"}
Write $V = \{\,X\in M_2(\mathbb{C}) : X^{\dagger}=X,\ \mathrm{tr}X = 0\,\}$.

**Step 1: $V$ is $\mathbb{R}^3$ in disguise.** A traceless Hermitian $2\times2$ matrix is
$$
\begin{pmatrix} x_3 & x_1-ix_2\\ x_1+ix_2 & -x_3\end{pmatrix} = \mathbf{x}\cdot\boldsymbol{\sigma},
\qquad \mathbf{x}\in\mathbb{R}^3,
$$
so $\mathbf{x}\mapsto\mathbf{x}\cdot\boldsymbol{\sigma}$ is a real linear bijection $\mathbb{R}^3\to V$, with inverse $x_i = \tfrac12\mathrm{tr}(\sigma_i X)$ (because $\mathrm{tr}(\sigma_i\sigma_j) = 2\delta_{ij}$, which follows from the Clifford relation by taking traces). Moreover
$$
\det(\mathbf{x}\cdot\boldsymbol{\sigma}) = -x_3^2 - (x_1-ix_2)(x_1+ix_2) = -|\mathbf{x}|^2 .
$$

**Step 2: conjugation preserves $V$ and the length.** Let $U\in SU(2)$ and $X\in V$. Then $(UXU^{\dagger})^{\dagger} = UX^{\dagger}U^{\dagger} = UXU^{\dagger}$ and $\mathrm{tr}(UXU^{\dagger}) = \mathrm{tr}(XU^{\dagger}U) = \mathrm{tr}X = 0$ by cyclicity of the trace, so $UXU^{\dagger}\in V$. **Here unitarity is used** — for a general invertible $U$ the conjugate of a Hermitian matrix is not Hermitian. By multiplicativity of the determinant and $\det U\,\det U^{\dagger} = |\det U|^2 = 1$,
$$
\det(UXU^{\dagger}) = \det X .
$$
With step 1 this says $|R(U)\mathbf{x}| = |\mathbf{x}|$ for the real linear map $R(U)$ defined by $U(\mathbf{x}\cdot\boldsymbol{\sigma})U^{\dagger} = (R(U)\mathbf{x})\cdot\boldsymbol{\sigma}$; equivalently, $R(U)^{\mathsf{T}}R(U) = I$, so $R(U)\in O(3)$. Reading off the matrix entries with the inverse of step 1 gives the formula $R(U)_{ij} = \tfrac12\mathrm{tr}(\sigma_i U\sigma_jU^{\dagger})$, and in particular $R(U)$ has real entries, as it must.

**Step 3: $R$ is a homomorphism.** For $U,W\in SU(2)$,
$$
(UW)(\mathbf{x}\cdot\boldsymbol{\sigma})(UW)^{\dagger} = U\bigl(W(\mathbf{x}\cdot\boldsymbol{\sigma})W^{\dagger}\bigr)U^{\dagger}
= U\bigl((R(W)\mathbf{x})\cdot\boldsymbol{\sigma}\bigr)U^{\dagger}
= \bigl(R(U)R(W)\mathbf{x}\bigr)\cdot\boldsymbol{\sigma} ,
$$
so $R(UW) = R(U)R(W)$, and $R(I) = I$.

**Step 4: the image lies in $SO(3)$.** $\det R(U) \in\{\pm1\}$ because $R(U)$ is orthogonal. The map $U\mapsto\det R(U)$ is continuous, since the entries of $R(U)$ are polynomials in those of $U$ and $\bar U$. By part 2, $SU(2)$ is path-connected, so the image of this continuous map is a connected subset of $\{\pm1\}$, hence a single point, and that point is $\det R(I) = 1$. **Here connectedness of $SU(2)$ is used**: continuity by itself forbids nothing, since on a disconnected group a continuous function with values in $\{\pm1\}$ can perfectly well take both of them — the determinant on $O(3)$ is the standard example. What rules out $\det R(U) = -1$ is that $SU(2)$ has no second component on which the other sign could sit. The same argument applies verbatim to the full unitary group $U(2)$, which is also connected: the formula $R(U)_{ij} = \tfrac12\mathrm{tr}(\sigma_iU\sigma_jU^{\dagger})$ still makes sense there and still lands in $SO(3)$, never on a reflection.

**Step 5: the kernel.** Suppose $R(U) = I$, that is $U\sigma_jU^{\dagger} = \sigma_j$, equivalently $U\sigma_j = \sigma_jU$ for $j=1,2,3$. Write $U = \begin{pmatrix}p&q\\r&s\end{pmatrix}$. Commuting with $\sigma_3$ forces $q = r = 0$; commuting with $\sigma_1$ then forces $p = s$. So $U = pI$ with $\det U = p^2 = 1$, hence $p=\pm1$ and $U = \pm I$. Conversely $(\pm I)X(\pm I)^{\dagger} = X$, so
$$
\ker\Phi = \{I,-I\} .
$$
This matches :cite[Hassani's Theorem 31.2.6]{work=hassani-2013 loc="p. 996"}, which states that the corresponding map $\mathrm{Spin}\to SO$ is surjective with kernel $\{1,-1\}$.

**Step 6: a rotation about the $z$-axis.** Take $\mathbf{n} = \mathbf{e}_3$, so $U_{\mathbf{e}_3}(\theta) = \mathrm{diag}(e^{-i\theta/2},e^{i\theta/2})$ by part 2. Then
$$
U\sigma_3U^{\dagger} = \sigma_3,
\qquad
U\sigma_1U^{\dagger} = \begin{pmatrix}0& e^{-i\theta}\\ e^{i\theta}&0\end{pmatrix} = \cos\theta\,\sigma_1 + \sin\theta\,\sigma_2 ,
$$
and likewise $U\sigma_2U^{\dagger} = -\sin\theta\,\sigma_1 + \cos\theta\,\sigma_2$. In the basis $(\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3)$ this is
$$
R\bigl(U_{\mathbf{e}_3}(\theta)\bigr) = \begin{pmatrix}\cos\theta&-\sin\theta&0\\ \sin\theta&\cos\theta&0\\ 0&0&1\end{pmatrix} = R_{\mathbf{e}_3}(\theta) = \exp(-i\theta J_3) ,
$$
the last equality by expanding $\exp(-i\theta J_3)$ as in part 2 (here $(-iJ_3)^3 = -(-iJ_3)$, so the series again splits into $\cos$ and $\sin$). The same computation with $\mathbf{n}=\mathbf{e}_2$ gives $R\bigl(U_{\mathbf{e}_2}(\theta)\bigr) = R_{\mathbf{e}_2}(\theta)$.

**Step 7: surjectivity.** By :cite[Hassani's]{work=hassani-2013 loc="§30.3.3, p. 972"} Euler-angle factorisation, every rotation can be written as
$$
R = R_{\mathbf{e}_3}(\psi)\,R_{\mathbf{e}_2}(\vartheta)\,R_{\mathbf{e}_3}(\varphi)
$$
for suitable angles. By step 6 each factor is in the image of $\Phi$, and by step 3 the image is a subgroup, so $R$ is in the image. Hence $\Phi$ is onto $SO(3)$.

(The alternative route is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§28.7.3, pp. 1069–1070"} remark that rotations through the same angle about different axes are conjugate, $R_j(\theta) = \phi_{ij}^{-1}R_i(\theta)\phi_{ij}$: once all rotations about one axis are in the image and the image is a subgroup closed under conjugation by its own elements, one needs only that the conjugating elements are themselves reachable, which the Euler factorisation supplies.)

**Step 8: two-to-one, and the general axis.** By the first isomorphism theorem (:ref[homomorphisms and quotient groups]{to=group.homomorphisms-quotients}), $SU(2)/\ker\Phi\cong\mathrm{im}\,\Phi = SO(3)$, and the fibre of $\Phi$ over any $R$ is a coset of $\ker\Phi = \{\pm I\}$, hence has exactly two elements $\{U,-U\}$. Finally $\Phi(U_{\mathbf{n}}(\theta)) = R_{\mathbf{n}}(\theta)$ for every axis: choose $W\in SU(2)$ with $R(W)\mathbf{e}_3 = \mathbf{n}$ (possible by step 7), and note $W\,U_{\mathbf{e}_3}(\theta)\,W^{\dagger} = U_{\mathbf{n}}(\theta)$ because conjugation sends $\mathbf{e}_3\cdot\boldsymbol{\sigma}$ to $\mathbf{n}\cdot\boldsymbol{\sigma}$ and therefore commutes with the exponential; applying $\Phi$ and using step 3 gives $R(W)R_{\mathbf{e}_3}(\theta)R(W)^{-1} = R_{\mathbf{n}}(\theta)$. $\square$
:::

:::proof[Part 4: spinors and the sign after $2\pi$]{provenance=adapted src="arfken-2013:Eq. (17.59) and the discussion, p. 852"}
Put $\theta = 2\pi$ in the half-angle formula: $\cos\pi = -1$ and $\sin\pi = 0$, so
$$
U_{\mathbf{n}}(2\pi) = -I \qquad\text{for every axis } \mathbf{n},
$$
while $R_{\mathbf{n}}(2\pi) = I$. A spinor $\chi\in\mathbb{C}^2$ is therefore carried to $-\chi$ by a full turn and back to $\chi$ only after $\theta = 4\pi$, which is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="p. 852"} observation that the angular range of the $SU(2)$ parameters is twice that of $SO(3)$. For $\theta = \pi$ about the $x$-axis, the same formula gives $U_{\mathbf{e}_1}(\pi) = -i\sigma_1$, so
$$
U_{\mathbf{e}_1}(\pi)\begin{pmatrix}1\\0\end{pmatrix} = -i\begin{pmatrix}0\\1\end{pmatrix} ,
$$
up and down are exchanged, and the leftover factor $-i$ (Arfken, with his opposite sign convention, gets $+i$) is the phase that no measurement of the direction of the spin can detect.

Now let $T$ be a representation of $SU(2)$ on a vector space $W$. If $T$ is to come from a representation of $SO(3)$ — that is, if there is a representation $T'$ of $SO(3)$ with $T = T'\circ\Phi$ — then $T(-I) = T'(\Phi(-I)) = T'(I) = \mathrm{id}_W$, since $-I\in\ker\Phi$. Conversely if $T(-I) = \mathrm{id}_W$ then $T$ is constant on the fibres $\{U,-U\}$ of $\Phi$ and so descends. Thus the representations of $SO(3)$ are precisely the representations of $SU(2)$ on which $-I$ acts trivially. In the labelling by $j$ of :ref[angular momentum algebra]{to=group.angular-momentum} — :cite[Hassani]{work=hassani-2013 loc="§30.3.3, p. 972"} records that the irreducible representations are labelled by an integer or half-odd-integer $j$ and have dimension $2j+1$ — the element $-I = U_{\mathbf{e}_3}(2\pi)$ acts by $e^{-2\pi i m}$ on the state of weight $m$, that is by $(-1)^{2j}$, so $-I$ acts trivially exactly when $j$ is an integer. The half-integer representations are representations of $SU(2)$ only. $\square$
:::

:::remark[Where the hypotheses are used, and one disagreement between our sources]{provenance=adapted src="hassani-2013:p. 998 and Thm 31.2.6, p. 996; arfken-2013:p. 852"}
- **Unitarity of $U$** is what keeps $UXU^{\dagger}$ Hermitian (step 2). Drop it and the conjugation no longer acts on $\mathbb{R}^3$ at all. Keeping unitarity but dropping $\det U = 1$ gives the same map $\Phi$ on $U(2)$, still onto $SO(3)$, but now with kernel the full circle $\{e^{i\alpha}I\}$: the covering is no longer two-sheeted, and the clean statement $SO(3)\cong SU(2)/\{\pm I\}$ is lost.
- **Tracelessness of $X$** is what makes $V$ three-dimensional. The Hermitian $2\times2$ matrices form a four-dimensional space, on which $\det$ is the Minkowski form of signature $(1,3)$; conjugating by $SL(2,\mathbb{C})$ instead of $SU(2)$ then gives the covering of the Lorentz group (:ref[the Lorentz group]{to=group.lorentz-group}). Our theorem is the compact, Euclidean corner of that picture.
- **Connectedness of $SU(2)$** is used only in step 4, to rule out $\det R(U) = -1$. It comes from part 2, where $SU(2)$ is identified with $S^3$.
- **The equality of the Lie algebras does not give an isomorphism of groups.** Part 1 and part 3 together are the sharpest form of the lesson of :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}: the exponential map is a local diffeomorphism, so $\mathfrak{so}(3)\cong\mathfrak{su}(2)$ says only that the two groups agree near the identity. Globally they differ, and the difference is exactly the two-element kernel. It is detectable: $SU(2)$ is the sphere $S^3$, while $SO(3)$ is $S^3$ with antipodal points identified, and a path in $SO(3)$ from $I$ to $I$ running once through a $2\pi$ rotation lifts to a path in $SU(2)$ from $I$ to $-I$, which is not a loop.
- **A disagreement in the library.** :cite[Hassani]{work=hassani-2013 loc="§31.2.1, p. 998"} writes the chain "$\mathrm{Spin}(3,0)\cong SO(3)\cong SU(2)$" after noting that the Pauli commutators are the same as the rotation-generator commutators. His own Theorem 31.2.6 (p. 996) states that the map $\mathrm{Spin}(\mu,\nu)\to SO(\mu,\nu)$ is a surjective homomorphism with kernel $\{1,-1\}$, that is two-to-one and not injective, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 852"} state the opposite of an isomorphism explicitly: the correspondence between the two groups is two-to-one, and what relates them is a homomorphism, not an isomorphism. We follow Arfken, Weber and Harris, and the proof of part 3 above establishes the two-to-one statement from scratch; the isomorphism that does hold is $SO(3)\cong SU(2)/\{\pm I\}$, and it is an isomorphism of Lie *algebras*, not of groups, that follows from the equality of the structure constants. Readers using Hassani's chain of isomorphisms should read it as an isomorphism of Lie algebras together with the local isomorphism of groups that his Theorem 29.1.21 supplies.
:::

:::method[Passing between a rotation and its two $SU(2)$ elements]{provenance=original}
**From axis and angle to $SU(2)$.** Given $\mathbf{n}$ (unit) and $\theta$, write
$$
U = I\cos\tfrac\theta2 - i(\mathbf{n}\cdot\boldsymbol{\sigma})\sin\tfrac\theta2
= \begin{pmatrix} \cos\frac\theta2 - in_3\sin\frac\theta2 & (-in_1-n_2)\sin\frac\theta2\\[2pt] (-in_1+n_2)\sin\frac\theta2 & \cos\frac\theta2+in_3\sin\frac\theta2\end{pmatrix}.
$$
The other preimage is $-U$, which is $U_{\mathbf{n}}(\theta+2\pi)$ — equivalently $U_{-\mathbf{n}}(2\pi - \theta)$.

**From $SU(2)$ to the rotation matrix.** Use $R_{ij} = \tfrac12\mathrm{tr}(\sigma_i U\sigma_j U^{\dagger})$, or, writing $U = \bigl(\begin{smallmatrix}a&-\bar b\\ b&\bar a\end{smallmatrix}\bigr)$, read the angle and axis off from
$$
\cos\tfrac\theta2 = \mathrm{Re}\,a, \qquad \sin\tfrac\theta2\,\mathbf{n} = \bigl(-\mathrm{Im}\,b,\ \mathrm{Re}\,b,\ -\mathrm{Im}\,a\bigr).
$$

**From a rotation matrix to axis and angle.** $\mathrm{tr}\,R = 1+2\cos\theta$ gives $\theta\in[0,\pi]$, and for $\theta\notin\{0,\pi\}$ the axis is read off from the antisymmetric part, $(R - R^{\mathsf{T}})_{pq} = -2\sin\theta\,\epsilon_{pqk}n_k$. At $\theta = \pi$ the antisymmetric part vanishes and one uses $R + I = 2\,\mathbf{n}\mathbf{n}^{\mathsf{T}}$ instead.

**Composing rotations.** Multiply the $SU(2)$ matrices rather than the $3\times3$ ones: four complex entries instead of nine real ones, no accumulation of loss of orthogonality, and the half-angle form recovers the composite axis and angle directly. This is the quaternion method of :ref[quaternions]{to=group.quaternions}, in matrix clothing.

**Checks worth doing.** $\det U = 1$ and $U^{\dagger}U = I$; $\mathrm{tr}R = 1+2\cos\theta$; $R\mathbf{n} = \mathbf{n}$; and $U_{\mathbf{n}}(\theta)^{N} = U_{\mathbf{n}}(N\theta)$, which for $\theta = 2\pi/N$ gives $-I$ rather than $I$, for every $N$ and every axis.
:::

:::example[A $120^\circ$ rotation about the body diagonal]{provenance=original}
Take the axis $\mathbf{n} = \tfrac{1}{\sqrt3}(1,1,1)$ and the angle $\theta = 2\pi/3$, the rotation that cyclically permutes the coordinate axes of a cube.

**Step 1: the $SU(2)$ element.** Here $\cos(\theta/2) = \cos 60^\circ = \tfrac12$ and $\sin(\theta/2) = \sin 60^\circ = \tfrac{\sqrt3}{2}$, and
$$
\mathbf{n}\cdot\boldsymbol{\sigma} = \frac{1}{\sqrt3}\begin{pmatrix}1 & 1-i\\ 1+i & -1\end{pmatrix}.
$$
The two factors of $\sqrt3$ cancel:
$$
U = \tfrac12 I - i\cdot\tfrac{\sqrt3}{2}\cdot\tfrac{1}{\sqrt3}\begin{pmatrix}1&1-i\\1+i&-1\end{pmatrix}
= \frac12\begin{pmatrix}1-i & -1-i\\ 1-i & 1+i\end{pmatrix} .
$$

**Step 2: check that $U\in SU(2)$.**
$$
\det U = \tfrac14\bigl[(1-i)(1+i) - (-1-i)(1-i)\bigr] = \tfrac14\bigl[2 - (-1+i-i+i^2)\bigr] = \tfrac14[2+2] = 1 ,
$$
and $U$ has the required shape $\bigl(\begin{smallmatrix}a&-\bar b\\ b&\bar a\end{smallmatrix}\bigr)$ with $a = \tfrac{1-i}{2}$, $b = \tfrac{1-i}{2}$, since $-\bar b = -\tfrac{1+i}{2}$ and $\bar a = \tfrac{1+i}{2}$; and $|a|^2+|b|^2 = \tfrac12+\tfrac12 = 1$, so $U^{\dagger}U = I$.

**Step 3: the rotation matrix.** Using $R_{ij} = \tfrac12\mathrm{tr}(\sigma_iU\sigma_jU^{\dagger})$ for the nine entries,
$$
R = \begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}.
$$
Read the columns: $R\mathbf{e}_1 = \mathbf{e}_2$, $R\mathbf{e}_2 = \mathbf{e}_3$, $R\mathbf{e}_3 = \mathbf{e}_1$ — the cyclic permutation, as expected for a third of a turn about $(1,1,1)$. Three checks:
$$
\mathrm{tr}\,R = 0 = 1 + 2\cos 120^\circ, \qquad \det R = 1, \qquad R\begin{pmatrix}1\\1\\1\end{pmatrix} = \begin{pmatrix}1\\1\\1\end{pmatrix} .
$$
The first of these is the checkable number: $1 + 2\cos(2\pi/3) = 1 - 1 = 0$.

**Step 4: the two-to-one map, seen directly.** Cube the $SU(2)$ element. Since $U = U_{\mathbf{n}}(2\pi/3)$ and the half-angle formula is a one-parameter group in $\theta$,
$$
U^3 = U_{\mathbf{n}}(2\pi) = -I ,
$$
and direct multiplication of the matrix in step 1 confirms it. But $R^3 = I$, because a cyclic permutation of three symbols has order $3$. So $U$ has order $6$ in $SU(2)$ while its image has order $3$ in $SO(3)$: the preimage of the three-element subgroup $\{I,R,R^2\}$ is the six-element subgroup $\{\pm I,\pm U,\pm U^2\}$, exactly twice as large, as the kernel $\{\pm I\}$ requires. The other preimage of $R$ is
$$
-U = \frac12\begin{pmatrix}-1+i&1+i\\ -1+i&-1-i\end{pmatrix} = U_{\mathbf{n}}\!\left(\tfrac{2\pi}{3}+2\pi\right) = U_{\mathbf{n}}\!\left(\tfrac{8\pi}{3}\right).
$$

**Step 5: what a spinor does.** Apply $U$ to the spin-up state $\chi_{\uparrow} = (1,0)^{\mathsf{T}}$:
$$
U\chi_{\uparrow} = \tfrac12\begin{pmatrix}1-i\\ 1-i\end{pmatrix},
$$
whose components have equal modulus $\tfrac{1}{\sqrt2}$, so the rotated state is an equal superposition of up and down — consistent with the fact that $R$ moves the $z$-axis to the $x$-axis, and a spin along $x$ is an equal superposition of up and down along $z$. Applying $U$ three times returns $-\chi_{\uparrow}$, not $\chi_{\uparrow}$, although the physical orientation has returned to where it started.
:::

:::application{provenance=original}
**Spin-$\tfrac12$ and magnetic resonance.** The evolution of a spin-$\tfrac12$ particle in a static magnetic field $\mathbf{B}$ is $\chi(t) = \exp(-i\gamma t\,\mathbf{B}\cdot\boldsymbol{\sigma}/2)\chi(0)$, which by part 2 is $U_{\mathbf{n}}(\gamma|\mathbf{B}|t)$ with $\mathbf{n} = \mathbf{B}/|\mathbf{B}|$: the spin precesses about $\mathbf{B}$ at the Larmor frequency. Every pulse sequence in nuclear magnetic resonance and in magnetic-resonance imaging — a "$90^\circ$ pulse", a "$180^\circ$ pulse" — is an element $U_{\mathbf{n}}(\theta)$, composed by multiplying $2\times2$ matrices. The same algebra is the single-qubit gate set of quantum computing: the Hadamard gate is $U_{\mathbf{n}}(\pi)$ for $\mathbf{n} = (1,0,1)/\sqrt2$ up to phase, and the Bloch sphere on which a qubit state is drawn is the image of $\mathbb{C}^2$ under $\chi\mapsto\chi^{\dagger}\boldsymbol{\sigma}\chi$, intertwining the $SU(2)$ action with the $SO(3)$ action by exactly the homomorphism $\Phi$.

**Attitude representation.** Spacecraft, aircraft, robot arms and camera-tracking software store orientations as unit quaternions, that is as elements of $SU(2)$, rather than as $3\times3$ matrices or Euler angles: four numbers with one constraint instead of nine with six, composition by one quaternion multiplication, no gimbal lock, and renormalisation that is a single division by a norm. The price is the sign ambiguity of part 3 — $q$ and $-q$ describe the same attitude — which interpolation routines must handle explicitly by choosing the representative in the nearer hemisphere.

**Observable consequences of the sign.** That a $2\pi$ rotation multiplies a spinor by $-1$ is not an artefact of notation: in a neutron interferometer one arm is passed through a magnetic field that rotates the neutron spin by $2\pi$, and the interference with the other arm is inverted, so the count rate has period $4\pi$ in the field strength. The same two-valuedness underlies the classification of particles as bosons and fermions and the behaviour of spinor fields under rotation in quantum field theory.

**Crystallography and molecular symmetry.** Double groups — the preimages in $SU(2)$ of the point groups of :ref[point groups and crystal symmetry]{to=group.point-groups} — are what one must use to classify the electronic states of a magnetic ion with an odd number of electrons; Kramers' theorem, that such states come in degenerate pairs, is a statement about the two-sheeted cover.

**Downstream in this chapter.** The half-angle formula becomes the Wigner $D$-matrices of :ref[rotation matrices of angular momentum]{to=group.wigner-d-matrices} once one works in the $(2j+1)$-dimensional representations; the algebra $[S_j,S_k] = i\epsilon_{jkl}S_l$ is analysed abstractly in :ref[angular momentum algebra]{to=group.angular-momentum}; and the Pauli matrices reappear as the three-dimensional case of the construction in :ref[Clifford algebras and spinors]{to=group.clifford-algebras}.
:::
