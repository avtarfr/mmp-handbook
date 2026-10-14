---
id: group.matrix-group-catalogue
title: The classical matrix groups
kind: table
level: core
summary: Tabulates the defining condition, real dimension, compactness, number of connected components and Lie algebra of GL(n), SL(n), O(n), SO(n), U(n), SU(n) and Sp(2n,R), with a single constraint-counting argument that produces every dimension and proofs of every entry in the other columns.
prereqs: [group.lie-groups-algebras, linalg.determinants, linalg.unitary-orthogonal-matrices, linalg.matrix-exponential, linalg.gram-schmidt, linalg.hermitian-spectral-theorem, found.compactness, found.connectedness-homotopy]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Example 1.25 and Example 1.27, p. 19 (matrix spaces as manifolds; GL(n,R) as an open subset); Example 7.18(c) and 7.18(e), p. 158 (SL(n,R) and SL(n,C) as kernels of det, with their dimensions); Examples 7.27–7.30, pp. 166–168 (O(n), SO(n), U(n), SU(n): defining conditions, the level-set argument, compactness of O(n) and SO(n), and the dimensions n(n-1)/2, n^2 and n^2-1); Problem 8-29, pp. 203–204 (the Lie algebras sl(n,R), o(n), sl(n,C), u(n), su(n)); Propositions 21.34 and 21.35, pp. 558–559 (SO(n), U(n), SU(n) connected; O(n) and GL(n,R) have two components, with the QR route for GL+(n,R)); Problem 22-3, p. 591 (Sp(2n,R) as the stabiliser of the standard symplectic form, and the condition Z^T J Z = J)"
    pages: "19, 158, 166-168, 203-204, 558-559, 591"
    role: the defining conditions; the differentiate-the-constraint route to every dimension; compactness of the orthogonal groups; all connectedness statements that are quoted rather than proved here; the QR argument adapted below for SL(n,R) and SL(n,C)
  - work: hassani-2013
    loc: "Box 23.1.7, p. 705 (the general linear group GL(V), and GL(n,C), GL(n,R)); Example 23.2.2 items 4–7 with Boxes 23.2.3 and 23.2.4, pp. 706–707 (SL(n,C), U(n), O(n), SU(n), SO(n), the indefinite groups O(p, n-p), and the symplectic group Sp(2n,R) as the stabiliser of an antisymmetric bilinear form, with J in block form); Example 23.2.17, p. 711 (SL as the kernel of det, hence normal in GL)"
    pages: "705-707, 711"
    role: the group-theoretic definitions and names; the block form of J used here; the warning that the notation for the indefinite orthogonal groups varies between authors; SL normal in GL
  - work: dummit-foote-2004
    loc: "§1.4, pp. 34–35: GL_n(F) over an arbitrary field, closure under multiplication and inverses from det(AB) = det(A)det(B), and the order of GL_n(F) for a finite field"
    pages: "34-35"
    role: that the general linear group is defined over any field, not only R and C, and the counting formula used in the remark
  - work: arfken-2013
    loc: "§17.7, pp. 848–850: the structure constants of a Lie group, the rank as the maximal number of commuting generators, and the generators of SO(2) and SO(3)"
    pages: "848-850"
    role: the rank column of the second table and the physical reading of the generators
---

:::definition[The seven families]{provenance=adapted src="hassani-2013:Box 23.1.7 p. 705, Example 23.2.2 and Boxes 23.2.3–23.2.4, pp. 706–707; lee-2013:Examples 7.18, 7.27–7.30, pp. 158, 166–168, and Problem 22-3, p. 591"}
Write $M(n,\mathbb{F})$ for the $n \times n$ matrices over $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$, $A^{\mathsf T}$ for the transpose, $A^{\dagger} = \overline{A}^{\mathsf T}$ for the conjugate transpose, and $I$ for the identity matrix. All of the following are groups under matrix multiplication, and each is a :ref[matrix Lie group]{to=group.lie-groups-algebras}.

- **General linear.** $\mathrm{GL}(n,\mathbb{F}) = \{A \in M(n,\mathbb{F}) : \det A \neq 0\}$, the invertible matrices. Hassani defines it first as the group $\mathrm{GL}(\mathcal{V})$ of invertible endomorphisms of a vector space $\mathcal{V}$, and writes $\mathrm{GL}(n,\mathbb{C})$ for $\mathrm{GL}(\mathbb{C}^n)$.
- **Special linear.** $\mathrm{SL}(n,\mathbb{F}) = \{A : \det A = 1\}$. Since $\det$ is a homomorphism into the multiplicative group $\mathbb{F}^{\times}$, this is the kernel of $\det$ and therefore a normal subgroup of $\mathrm{GL}(n,\mathbb{F})$.
- **Orthogonal and special orthogonal.** $\mathrm{O}(n) = \{A \in M(n,\mathbb{R}) : A^{\mathsf T}A = I\}$, equivalently the real matrices preserving the Euclidean dot product, equivalently those whose columns are orthonormal (see :ref[unitary and orthogonal matrices]{to=linalg.unitary-orthogonal-matrices}); and $\mathrm{SO}(n) = \mathrm{O}(n) \cap \mathrm{SL}(n,\mathbb{R})$, the rigid rotations of $\mathbb{R}^n$.
- **Unitary and special unitary.** $\mathrm{U}(n) = \{A \in M(n,\mathbb{C}) : A^{\dagger}A = I\}$, the matrices preserving the Hermitian inner product of $\mathbb{C}^n$, and $\mathrm{SU}(n) = \mathrm{U}(n) \cap \mathrm{SL}(n,\mathbb{C})$.
- **Symplectic.** Let $n \ge 1$ and put

  $$
  J = \begin{pmatrix} 0 & I_n \\ -I_n & 0 \end{pmatrix} \in M(2n,\mathbb{R}), \qquad J^{\mathsf T} = -J, \qquad J^2 = -I_{2n} .
  $$

  Then $\mathrm{Sp}(2n,\mathbb{R}) = \{A \in M(2n,\mathbb{R}) : A^{\mathsf T}J A = J\}$: the real matrices preserving the antisymmetric bilinear form $\omega(x,y) = x^{\mathsf T}Jy$ on $\mathbb{R}^{2n}$. This is Hassani's definition. Lee instead takes $J$ with $n$ copies of $\bigl(\begin{smallmatrix} 0 & 1 \\ -1 & 0\end{smallmatrix}\bigr)$ down the diagonal; the two matrices differ by a permutation of coordinates, so the two groups are conjugate inside $\mathrm{GL}(2n,\mathbb{R})$ and everything tabulated below is the same for both.

The **Lie algebra** $\mathfrak{g}$ of such a group $G$ is, as in :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}, the set of $X$ with $e^{tX} \in G$ for all real $t$; it is a real vector space, and $\dim_{\mathbb{R}} G = \dim_{\mathbb{R}} \mathfrak{g}$. Throughout, *dimension* means dimension as a real manifold, so that $\mathrm{GL}(n,\mathbb{C})$, an open subset of $M(n,\mathbb{C}) \cong \mathbb{R}^{2n^2}$, has dimension $2n^2$ and not $n^2$.
:::

:::note[The catalogue]{provenance=adapted src="lee-2013:Examples 7.18, 7.27–7.30 and Problem 8-29, pp. 158, 166–168, 203–204, and Propositions 21.34–21.35, pp. 558–559"}
Every entry is proved or cited below. "Components" is the number of connected components; a group with one component is connected.

| Group | Defining condition | $\dim_{\mathbb{R}}$ | Compact | Components | Lie algebra |
|---|---|---|---|---|---|
| $\mathrm{GL}(n,\mathbb{R})$ | $\det A \neq 0$ | $n^2$ | no | $2$ | $\mathfrak{gl}(n,\mathbb{R})$: all real $X$ |
| $\mathrm{GL}(n,\mathbb{C})$ | $\det A \neq 0$ | $2n^2$ | no | $1$ | $\mathfrak{gl}(n,\mathbb{C})$: all complex $X$ |
| $\mathrm{SL}(n,\mathbb{R})$ | $\det A = 1$ | $n^2 - 1$ | no | $1$ | $\operatorname{tr}X = 0$, $X$ real |
| $\mathrm{SL}(n,\mathbb{C})$ | $\det A = 1$ | $2n^2 - 2$ | no | $1$ | $\operatorname{tr}X = 0$, $X$ complex |
| $\mathrm{O}(n)$ | $A^{\mathsf T}A = I$ | $n(n-1)/2$ | yes | $2$ | $X^{\mathsf T} + X = 0$ |
| $\mathrm{SO}(n)$ | $A^{\mathsf T}A = I$, $\det A = 1$ | $n(n-1)/2$ | yes | $1$ | $X^{\mathsf T} + X = 0$ |
| $\mathrm{U}(n)$ | $A^{\dagger}A = I$ | $n^2$ | yes | $1$ | $X^{\dagger} + X = 0$ |
| $\mathrm{SU}(n)$ | $A^{\dagger}A = I$, $\det A = 1$ | $n^2 - 1$ | yes | $1$ | $X^{\dagger} + X = 0$, $\operatorname{tr}X = 0$ |
| $\mathrm{Sp}(2n,\mathbb{R})$ | $A^{\mathsf T}JA = J$ | $n(2n+1)$ | no | $1$ | $X^{\mathsf T}J + JX = 0$ |

The algebras carry the names $\mathfrak{sl}$, $\mathfrak{o}$, $\mathfrak{u}$, $\mathfrak{su}$, $\mathfrak{sp}$ matching their groups; Lee records the first five of them in Problem 8-29. Because $\mathrm{SO}(n)$ is an open subgroup of $\mathrm{O}(n)$ and $\mathrm{GL}^{+}(n,\mathbb{R})$ is an open subgroup of $\mathrm{GL}(n,\mathbb{R})$, each has the same Lie algebra and the same dimension as the larger group: passing to the determinant-one part removes a component, not a direction. For $\mathrm{U}(n) \to \mathrm{SU}(n)$ it does remove a direction, because $\det$ on $\mathrm{U}(n)$ takes every value on the unit circle rather than only $\pm 1$.

Two further columns are worth recording, for the small cases that occur most often in physics. The **rank** is the largest number of mutually commuting independent generators, which Arfken, Weber and Harris introduce because it is the number of labels (quantum numbers) a basis of a representation needs.

| Group | $\dim$ | Rank | Familiar description |
|---|---|---|---|
| $\mathrm{SO}(2) \cong \mathrm{U}(1)$ | $1$ | $1$ | the circle; rotations of the plane; phase factors $e^{i\theta}$ |
| $\mathrm{SO}(3)$ | $3$ | $1$ | rotations of space (see :ref[the rotation group and SU(2)]{to=group.so3-su2}) |
| $\mathrm{SU}(2)$ | $3$ | $1$ | the unit quaternions; the three-sphere $S^3$ (see :ref[quaternions]{to=group.quaternions}) |
| $\mathrm{SU}(3)$ | $8$ | $2$ | colour and flavour symmetry; eight generators |
| $\mathrm{Sp}(2,\mathbb{R}) = \mathrm{SL}(2,\mathbb{R})$ | $3$ | $1$ | area-preserving linear maps of the plane |

The identification $\mathrm{Sp}(2,\mathbb{R}) = \mathrm{SL}(2,\mathbb{R})$ is immediate from the definition: for $n = 1$, $J = \bigl(\begin{smallmatrix} 0 & 1 \\ -1 & 0\end{smallmatrix}\bigr)$ and $A^{\mathsf T}JA = (\det A)\,J$ for every $2 \times 2$ real $A$, so the condition $A^{\mathsf T}JA = J$ says exactly $\det A = 1$. The dimensions agree: $n(2n+1) = 3 = n^2 - 1$ at $n = 1$ and $n = 2$ respectively.
:::

:::idea{provenance=original}
Every group in the table except the two general linear ones is cut out of the matrices by an equation $\Phi(A) = c$, where $\Phi$ is a quadratic or polynomial map. Two observations turn that into all of the dimension column. First, differentiating the equation at $A = I$ gives a *linear* condition on the tangent direction $X$, and that linear condition is the Lie algebra. Second, the number of independent equations is the dimension of the space $\Phi$ lands in, provided $\Phi$ is onto a neighbourhood in that space — which one checks by showing the derivative at $I$ is surjective. So each dimension is a subtraction: the dimension of the matrices minus the dimension of the space of constraints.

Compactness is then a two-line matter of whether the defining equation bounds the entries, and connectedness comes from factorising a group element into a piece one can shrink to the identity along an obvious path and a piece lying in a group already known to be connected.
:::

:::proof[The dimension column]{provenance=adapted src="lee-2013:Example 7.18(c),(e), p. 158, and Examples 7.27 and 7.29, pp. 166–168"}
Throughout, $\mathfrak{g}$ denotes the set of $X$ with $e^{tX} \in G$ for all $t \in \mathbb{R}$, and we use the fact from :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras} that $\mathfrak{g}$ is the kernel of the derivative at $I$ of the defining constraint, and that $\dim G = \dim_{\mathbb{R}}\mathfrak{g}$.

**Step 1 (the two general linear groups).** $\det$ is a polynomial in the entries, hence continuous, so $\mathrm{GL}(n,\mathbb{F})$ is the preimage of $\mathbb{F}\setminus\{0\}$: an *open* subset of $M(n,\mathbb{F})$. An open subset has the dimension of the whole space, which is $n^2$ for $\mathbb{F} = \mathbb{R}$ and $2n^2$ for $\mathbb{F} = \mathbb{C}$ counted over $\mathbb{R}$. There is no constraint to differentiate, and $\mathfrak{gl}(n,\mathbb{F})$ is all of $M(n,\mathbb{F})$. This is Lee's Example 1.27.

**Step 2 (special linear).** Write $\Phi(A) = \det A$, a homomorphism $\mathrm{GL}(n,\mathbb{F}) \to \mathbb{F}^{\times}$ with $\mathrm{SL}(n,\mathbb{F}) = \Phi^{-1}(1)$. Differentiating at the identity, Jacobi's formula gives $\left.\tfrac{d}{dt}\right|_{t=0}\det(I + tX) = \operatorname{tr}X$, so the tangent condition is $\operatorname{tr}X = 0$ and

$$
\mathfrak{sl}(n,\mathbb{F}) = \{X \in M(n,\mathbb{F}) : \operatorname{tr}X = 0\} .
$$

The trace is a non-zero linear functional, so it has a one-dimensional image over $\mathbb{F}$: one real condition when $\mathbb{F} = \mathbb{R}$ and two when $\mathbb{F} = \mathbb{C}$. Hence $\dim \mathrm{SL}(n,\mathbb{R}) = n^2 - 1$ and $\dim_{\mathbb{R}}\mathrm{SL}(n,\mathbb{C}) = 2n^2 - 2$, which are Lee's counts, there obtained from the surjectivity of $\det$. That $\operatorname{tr}X = 0$ is also *sufficient* for membership follows from $\det e^{tX} = e^{t\operatorname{tr}X}$, recorded in :ref[the matrix exponential]{to=linalg.matrix-exponential}.

**Step 3 (orthogonal).** Let $\Phi(A) = A^{\mathsf T}A$. Since $\Phi(A)^{\mathsf T} = \Phi(A)$, the map lands in the symmetric matrices $\mathrm{Sym}(n)$, of dimension $n(n+1)/2$ — one free entry on and above the diagonal. Differentiating along $A = I + tX$,

$$
\left.\frac{d}{dt}\right|_{t=0}(I + tX)^{\mathsf T}(I + tX) = X^{\mathsf T} + X ,
$$

so $\mathfrak{o}(n) = \{X : X^{\mathsf T} + X = 0\}$, the antisymmetric matrices. The derivative $X \mapsto X^{\mathsf T}+X$ is onto $\mathrm{Sym}(n)$: given $S$ symmetric, $X = \tfrac12 S$ has $X^{\mathsf T}+X = S$. So the constraint is exactly $n(n+1)/2$ independent conditions, and

$$
\dim \mathrm{O}(n) = n^2 - \frac{n(n+1)}{2} = \frac{n(n-1)}{2} ,
$$

which also counts the strictly-upper-triangular entries of an antisymmetric matrix directly. $\mathrm{SO}(n)$ is an open subset of $\mathrm{O}(n)$, by Step 6 below, so it has the same dimension and the same Lie algebra. This is Lee's Examples 7.27 and 7.28.

**Step 4 (unitary).** Let $\Phi(A) = A^{\dagger}A$, which lands in the Hermitian matrices $\mathrm{Herm}(n)$. A Hermitian matrix has $n$ real diagonal entries and $n(n-1)/2$ complex entries above the diagonal, so $\dim_{\mathbb{R}}\mathrm{Herm}(n) = n + 2 \cdot n(n-1)/2 = n^2$. The derivative at $I$ is $X \mapsto X^{\dagger} + X$, giving

$$
\mathfrak{u}(n) = \{X \in M(n,\mathbb{C}) : X^{\dagger} + X = 0\} ,
$$

the anti-Hermitian matrices; and it is onto $\mathrm{Herm}(n)$, since $X = \tfrac12 H$ works for Hermitian $H$. Counting over $\mathbb{R}$,

$$
\dim \mathrm{U}(n) = 2n^2 - n^2 = n^2 .
$$

**Step 5 (special unitary).** For $A \in \mathrm{U}(n)$, $|\det A| = 1$, because $1 = \det(A^{\dagger}A) = \overline{\det A}\,\det A$. So on $\mathrm{U}(n)$ the extra condition $\det A = 1$ is *one real* condition, not two: it pins the phase of a number already known to lie on the unit circle. The tangent version is $\operatorname{tr}X = 0$, and for anti-Hermitian $X$ the trace is purely imaginary, again one real condition. Hence

$$
\mathfrak{su}(n) = \{X : X^{\dagger}+X = 0,\ \operatorname{tr}X = 0\}, \qquad \dim \mathrm{SU}(n) = n^2 - 1 .
$$

**Step 6 (symplectic).** Let $\Phi(A) = A^{\mathsf T}JA$. Then $\Phi(A)^{\mathsf T} = A^{\mathsf T}J^{\mathsf T}A = -\Phi(A)$, so $\Phi$ lands in the antisymmetric $2n \times 2n$ matrices, of dimension $\tfrac12 (2n)(2n-1) = n(2n-1)$. Differentiating at $I$,

$$
\left.\frac{d}{dt}\right|_{t=0}(I+tX)^{\mathsf T}J(I+tX) = X^{\mathsf T}J + JX ,
$$

so $\mathfrak{sp}(2n,\mathbb{R}) = \{X : X^{\mathsf T}J + JX = 0\}$. The image of $X \mapsto X^{\mathsf T}J + JX$ is antisymmetric, since $(X^{\mathsf T}J + JX)^{\mathsf T} = J^{\mathsf T}X + X^{\mathsf T}J^{\mathsf T} = -(JX + X^{\mathsf T}J)$, and it is *onto* the antisymmetric matrices: given $C$ with $C^{\mathsf T} = -C$, put $X = -\tfrac12 JC$. Then, using $J^{\mathsf T} = -J$ and $J^2 = -I$,

$$
X^{\mathsf T}J + JX = -\tfrac12 C^{\mathsf T}J^{\mathsf T}J - \tfrac12 J^2 C = -\tfrac12 (-C)(-J)J + \tfrac12 C = \tfrac12 C + \tfrac12 C = C .
$$

Therefore

$$
\dim \mathrm{Sp}(2n,\mathbb{R}) = (2n)^2 - n(2n-1) = 4n^2 - 2n^2 + n = n(2n+1) . \qquad\square
$$
:::

:::proof[The compactness column]{provenance=adapted src="lee-2013:Example 7.27, p. 167 (the closed-and-bounded argument for O(n))"}
Each group is a subset of a finite-dimensional real vector space, so by :ref[Heine–Borel]{to=found.compactness} compactness is closedness together with boundedness.

**Step 1 (the four compact ones).** Each of $\mathrm{O}(n)$, $\mathrm{SO}(n)$, $\mathrm{U}(n)$, $\mathrm{SU}(n)$ is defined by equations between continuous functions of the entries, hence is closed. For boundedness, the condition $A^{\dagger}A = I$ (or $A^{\mathsf T}A = I$ in the real case) says that the columns $a_1,\dots,a_n$ are orthonormal, so every entry has modulus at most $1$ and the Frobenius norm is

$$
\|A\|_F^2 = \sum_{j=1}^{n}\|a_j\|^2 = n .
$$

The group therefore sits inside a sphere of radius $\sqrt{n}$ and is bounded. This is Lee's argument for $\mathrm{O}(n)$; it uses only orthonormality of the columns, so it applies verbatim with $\dagger$ in place of $\mathsf T$. $\mathrm{SO}(n)$ and $\mathrm{SU}(n)$ are closed subsets of compact sets, hence compact.

**Step 2 (the five non-compact ones).** Each fails boundedness, and exhibiting one unbounded curve in the group is enough.

- $\mathrm{SL}(n,\mathbb{F})$ and hence $\mathrm{GL}(n,\mathbb{F})$ contain $\operatorname{diag}(t, t^{-1}, 1, \dots, 1)$ for every $t > 0$, whose norm tends to infinity with $t$.
- $\mathrm{Sp}(2n,\mathbb{R})$ contains $Z_t = \operatorname{diag}(t,\dots,t,\,t^{-1},\dots,t^{-1})$, with $n$ entries of each, for every $t>0$: writing $Z_t$ in the block form $\bigl(\begin{smallmatrix} tI & 0 \\ 0 & t^{-1}I\end{smallmatrix}\bigr)$,

  $$
  Z_t^{\mathsf T}JZ_t = \begin{pmatrix} tI & 0 \\ 0 & t^{-1}I\end{pmatrix}\begin{pmatrix} 0 & I \\ -I & 0\end{pmatrix}\begin{pmatrix} tI & 0 \\ 0 & t^{-1}I\end{pmatrix} = \begin{pmatrix} 0 & I \\ -I & 0 \end{pmatrix} = J ,
  $$

  the factors $t$ and $t^{-1}$ cancelling in each off-diagonal block. Again $\|Z_t\| \to \infty$.

$\mathrm{GL}(n,\mathbb{R})$ and $\mathrm{GL}(n,\mathbb{C})$ are not closed either: $\operatorname{diag}(s,1,\dots,1) \to \operatorname{diag}(0,1,\dots,1)$ as $s \to 0$, and the limit is singular. $\square$
:::

:::proof[The components column]{provenance=adapted src="lee-2013:Propositions 21.34 and 21.35 with the QR argument, pp. 558–559"}
**Step 1 (quoted).** Lee's Proposition 21.34 proves that $\mathrm{SO}(n)$, $\mathrm{U}(n)$ and $\mathrm{SU}(n)$ are connected for every $n \ge 1$, by induction along the fibrations $\mathrm{SO}(n)/\mathrm{SO}(n-1) \cong S^{n-1}$ and $\mathrm{U}(n)/\mathrm{U}(n-1) \cong \mathrm{SU}(n)/\mathrm{SU}(n-1) \cong S^{2n-1}$. His Proposition 21.35 proves that $\mathrm{GL}(n,\mathbb{R})$ has exactly the two components $\mathrm{GL}^{\pm}(n,\mathbb{R})$ of positive and of negative determinant. We quote both.

**Step 2 ($\mathrm{O}(n)$ has two components).** From $A^{\mathsf T}A = I$ and $\det A^{\mathsf T} = \det A$ we get $(\det A)^2 = 1$, so $\det A = \pm 1$ and $\mathrm{O}(n)$ is the disjoint union of the two relatively open sets $\mathrm{O}^{\pm}(n)$ on which the sign is fixed. The first is $\mathrm{SO}(n)$, connected by Step 1. Fix any $R \in \mathrm{O}^{-}(n)$, for instance the reflection $\operatorname{diag}(-1,1,\dots,1)$; then $A \mapsto RA$ is a homeomorphism of $\mathrm{SO}(n)$ onto $\mathrm{O}^{-}(n)$, since it is continuous with continuous inverse $A \mapsto R^{-1}A$ and it reverses the sign of the determinant. So $\mathrm{O}^{-}(n)$ is connected too, and the two sets are the components. (This also shows $\mathrm{SO}(n)$ is open in $\mathrm{O}(n)$, used in Step 3 of the dimension proof.)

**Step 3 ($\mathrm{GL}(n,\mathbb{C})$ is connected).** Let $A, B \in \mathrm{GL}(n,\mathbb{C})$ and consider $p(z) = \det\bigl(A + z(B-A)\bigr)$, a polynomial in the single complex variable $z$. It is not identically zero, because $p(0) = \det A \neq 0$; so it has at most $n$ roots. The complex plane minus finitely many points is path-connected, and it contains $0$ and $1$, so there is a path $z(s)$ from $0$ to $1$ avoiding all roots. Then $s \mapsto A + z(s)(B-A)$ is a path from $A$ to $B$ inside $\mathrm{GL}(n,\mathbb{C})$. The contrast with the real case is exactly that $\mathbb{R}\setminus\{\text{finitely many points}\}$ is *not* connected, which is why $\det$ can separate $\mathrm{GL}(n,\mathbb{R})$ and cannot separate $\mathrm{GL}(n,\mathbb{C})$.

**Step 4 ($\mathrm{SL}(n,\mathbb{R})$ and $\mathrm{SL}(n,\mathbb{C})$ are connected).** We follow Lee's QR route, with the path chosen to keep the determinant equal to $1$ rather than merely positive. Let $A$ have $\det A = 1$. :ref[Gram–Schmidt]{to=linalg.gram-schmidt} applied to the columns of $A$ gives $A = QR$ with $Q$ orthogonal (unitary in the complex case) and $R$ upper triangular with real positive diagonal entries $r_1,\dots,r_n$. Taking determinants, $\det Q \cdot \prod_j r_j = 1$; the product is real and positive and $|\det Q| = 1$, so $\prod_j r_j = 1$ and $\det Q = 1$. Thus $Q \in \mathrm{SO}(n)$, respectively $Q \in \mathrm{SU}(n)$. Now define, for $0 \le t \le 1$,

$$
(R_t)_{jj} = r_j^{\,1-t}, \qquad (R_t)_{jk} = (1-t)\,R_{jk} \quad (j < k), \qquad (R_t)_{jk} = 0 \quad (j > k) .
$$

Each $R_t$ is upper triangular with positive diagonal, $\det R_t = \prod_j r_j^{\,1-t} = 1^{\,1-t} = 1$, and $t \mapsto R_t$ is continuous with $R_0 = R$ and $R_1 = I$. Hence $t \mapsto QR_t$ is a path inside $\mathrm{SL}$ from $A$ to $Q$. Composing with a path from $Q$ to $I$ inside $\mathrm{SO}(n)$ or $\mathrm{SU}(n)$, which exists by Step 1, connects $A$ to $I$. So $\mathrm{SL}(n,\mathbb{R})$ and $\mathrm{SL}(n,\mathbb{C})$ are path-connected.

**Step 5 ($\mathrm{Sp}(2n,\mathbb{R})$ is connected).** Three facts, then a path.

1. *$\mathrm{Sp}$ is closed under transposition.* $J$ itself is symplectic: $J^{\mathsf T}JJ = (-J)JJ = -J^3 = J$, using $J^2 = -I$. From $A^{\mathsf T}JA = J$ we get $A^{\mathsf T} = JA^{-1}J^{-1}$, a product of symplectic matrices, hence symplectic.
2. *Real powers of a symmetric symplectic positive-definite matrix stay symplectic.* Let $S$ be symmetric, positive definite and symplectic. Then $SJS = J$, so $JSJ^{-1} = S^{-1}$. Conjugation by $J$ is an algebra automorphism, so it commutes with the functional calculus of :ref[the spectral theorem]{to=linalg.hermitian-spectral-theorem}: $J S^{t} J^{-1} = (JSJ^{-1})^{t} = S^{-t}$ for every real $t$, where $S^t$ is defined by raising the eigenvalues to the power $t$ in an orthonormal eigenbasis. Hence $(S^t)^{\mathsf T}JS^t = S^tJS^t = J(J^{-1}S^tJ)S^t = JS^{-t}S^t = J$.
3. *$\mathrm{Sp}(2n,\mathbb{R}) \cap \mathrm{O}(2n) \cong \mathrm{U}(n)$.* If $A$ is both orthogonal and symplectic then $A^{\mathsf T} = A^{-1}$, so $A^{-1}JA = J$, that is $AJ = JA$. Since $J^2 = -I$, declaring $Jx$ to be "multiplication of $x$ by $i$" makes $\mathbb{R}^{2n}$ into $\mathbb{C}^n$, and $AJ = JA$ says precisely that $A$ is complex-linear. The Hermitian form $h(x,y) = x^{\mathsf T}y + i\,x^{\mathsf T}Jy$ then satisfies $h(Ax,Ay) = (Ax)^{\mathsf T}(Ay) + i(Ax)^{\mathsf T}J(Ay) = x^{\mathsf T}y + i\,x^{\mathsf T}A^{\mathsf T}AJy = h(x,y)$, using orthogonality in both terms and $JA = AJ$ in the second. So $A$ is unitary; conversely every unitary matrix is real-orthogonal and commutes with $J$, hence is symplectic. The correspondence is a group isomorphism and a homeomorphism.

Now take $A \in \mathrm{Sp}(2n,\mathbb{R})$ and set $S = A^{\mathsf T}A$, which is symmetric, positive definite and, by fact 1, symplectic. By fact 2, $Q = AS^{-1/2}$ is symplectic, and $Q^{\mathsf T}Q = S^{-1/2}A^{\mathsf T}AS^{-1/2} = S^{-1/2}SS^{-1/2} = I$, so $Q \in \mathrm{Sp}(2n,\mathbb{R}) \cap \mathrm{O}(2n)$. The path $t \mapsto QS^{(1-t)/2}$, $0 \le t \le 1$, runs inside $\mathrm{Sp}(2n,\mathbb{R})$ from $A$ to $Q$; and $Q$ is joined to $I$ inside $\mathrm{Sp}(2n,\mathbb{R}) \cap \mathrm{O}(2n) \cong \mathrm{U}(n)$, connected by Step 1. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what the table hides.**

- *Positive-definiteness of the form is what makes a group compact.* The bound $\|A\|_F^2 = n$ in the compactness proof comes from $A^{\dagger}A = I$ with the *Euclidean* or *Hermitian* form, whose unit vectors are bounded. Replace it by the indefinite form of Hassani's Example 23.2.2(6), $x\cdot y = -x_1y_1-\dots-x_py_p + x_{p+1}y_{p+1}+\dots+x_ny_n$, and the "unit sphere" is a hyperboloid: the group $\mathrm{O}(p,n-p)$ preserving it is non-compact, and the $\mathrm{SO}(3,1)$ case is the :ref[Lorentz group]{to=group.lorentz-group}, whose boosts run off to infinity as the rapidity grows. The symplectic form is antisymmetric, hence as far from definite as possible, and $\mathrm{Sp}(2n,\mathbb{R})$ is non-compact for the same reason. Hassani warns that different authors write $\mathrm{O}(p,n-p)$, $\mathrm{O}(n-p,p)$, $\mathrm{O}(n,p)$ or $\mathrm{O}(p,n)$ for the same group, and in his convention $p$ counts the *minus* signs; always check which index is which.
- *Realness is what makes $\mathrm{GL}$ and $\mathrm{O}$ disconnected.* Step 3 of the components proof isolates the point: the determinant of a real matrix cannot pass through zero without leaving the group, while a complex determinant can go round it. The same remark explains why $\mathrm{SL}(n,\mathbb{C})$ and $\mathrm{SL}(n,\mathbb{R})$ are both connected: there the determinant is pinned at $1$, and connectedness is supplied by the triangular factor instead.
- *Compactness without connectedness, and the converse.* $\mathrm{O}(n)$ is compact and has two components; $\mathrm{SL}(n,\mathbb{R})$ is connected and non-compact. The two columns are independent.
- *The dimension count needs the derivative to be onto.* If one differentiated the condition $A^{\mathsf T}A = I$ but regarded $\Phi$ as landing in all of $M(n,\mathbb{R})$, the count would give $n^2 - n^2 = 0$, which is wrong for every $n \ge 2$. The fix is to notice that $\Phi$ lands in the symmetric matrices and is onto a neighbourhood there. The same trap is why the symplectic count uses $n(2n-1)$ and not $4n^2$.
- *Over other fields.* Dummit and Foote define $\mathrm{GL}_n(F)$ for an arbitrary field $F$; the group-theoretic facts (closure under products and inverses, from $\det(AB) = \det A \det B$) need no topology at all. Over a finite field with $q$ elements it is a *finite* group, of order $(q^n-1)(q^n-q)\cdots(q^n-q^{n-1})$, and the dimension, compactness and connectedness columns are empty of meaning. The table is about the real and complex cases.
- *What is deliberately absent.* The quaternionic and indefinite families $\mathrm{Sp}(n)$ (compact), $\mathrm{O}(p,q)$, $\mathrm{U}(p,q)$, $\mathrm{Sp}(2n,\mathbb{C})$, and the exceptional groups, are not tabulated. The method below produces their dimensions in the same way.
:::

:::method[Reading off the algebra, the dimension and the compactness of a matrix group]{provenance=original}
Given a subgroup $G \subseteq \mathrm{GL}(N,\mathbb{F})$ defined by an invariance condition:

1. **Write the condition as $\Phi(A) = c$.** For a bilinear or sesquilinear form with matrix $B$, the condition that $A$ preserve it is $\Phi(A) = A^{\mathsf T}BA = B$, or $A^{\dagger}BA = B$ in the Hermitian case.
2. **Identify the target space.** Check the symmetry of $\Phi(A)$: if $B$ is symmetric, $\Phi$ lands in the symmetric matrices; if antisymmetric, in the antisymmetric ones; if Hermitian, in the Hermitian ones. Call that space $W$ and compute $\dim_{\mathbb{R}}W$.
3. **Differentiate at the identity.** Substitute $A = I + tX$, expand, and keep the term linear in $t$. For the three cases above this gives $L(X) = X^{\mathsf T}B + BX$, or $X^{\dagger}B + BX$.
4. **The Lie algebra is $\ker L$.** Write out $L(X) = 0$ in blocks or entries and read off the independent parameters.
5. **Check $L$ is onto $W$,** by exhibiting a preimage of a general element of $W$ — $\tfrac12 B^{-1}W$ in the symmetric case, $-\tfrac12 BW$ with $B = J$ in the symplectic case. Then $\dim_{\mathbb{R}}G = \dim_{\mathbb{R}}\ker L = \dim_{\mathbb{R}}M(N,\mathbb{F}) - \dim_{\mathbb{R}}W$, and counting the free parameters in step 4 is an independent check of the same number.
6. **Decide compactness.** The group is always closed (the condition is an equation between continuous functions). It is bounded if and only if the preserved form is definite, in which case the columns of $A$ are unit vectors; if the form is indefinite or antisymmetric, produce a one-parameter family of the form $\operatorname{diag}(t,\dots,t^{-1},\dots)$ with unbounded entries.
7. **Add the determinant condition last.** It subtracts a component if $\det$ is already confined to $\{\pm 1\}$ on $G$, and a dimension if $\det$ ranges over a circle or a half-line.
:::

:::example{provenance=original}
**The symplectic group $\mathrm{Sp}(4,\mathbb{R})$, worked through the method.** Here $N = 4$ and $n = 2$, with

$$
J = \begin{pmatrix} 0 & I_2 \\ -I_2 & 0\end{pmatrix}, \qquad I_2 = \begin{pmatrix}1&0\\0&1\end{pmatrix} .
$$

*Steps 1–2.* $\Phi(A) = A^{\mathsf T}JA$ lands in the antisymmetric $4\times 4$ matrices, of dimension $\tfrac12 \cdot 4 \cdot 3 = 6$.

*Steps 3–4.* Write $X$ in $2\times 2$ blocks, $X = \bigl(\begin{smallmatrix} P & Q \\ R & S \end{smallmatrix}\bigr)$. Then

$$
X^{\mathsf T}J = \begin{pmatrix} P^{\mathsf T} & R^{\mathsf T} \\ Q^{\mathsf T} & S^{\mathsf T}\end{pmatrix}\begin{pmatrix} 0 & I \\ -I & 0\end{pmatrix} = \begin{pmatrix} -R^{\mathsf T} & P^{\mathsf T} \\ -S^{\mathsf T} & Q^{\mathsf T}\end{pmatrix}, \qquad JX = \begin{pmatrix} R & S \\ -P & -Q\end{pmatrix} ,
$$

so

$$
X^{\mathsf T}J + JX = \begin{pmatrix} R - R^{\mathsf T} & P^{\mathsf T} + S \\ -(S^{\mathsf T} + P) & Q^{\mathsf T} - Q\end{pmatrix} = 0
\quad\Longleftrightarrow\quad
R = R^{\mathsf T},\quad Q = Q^{\mathsf T},\quad S = -P^{\mathsf T} .
$$

*Step 5.* The free parameters are: $P$, arbitrary ($4$); $Q$ symmetric ($3$); $R$ symmetric ($3$); and $S$ determined by $P$. Total

$$
4 + 3 + 3 = 10 ,
$$

matching $n(2n+1) = 2\cdot 5 = 10$ from the general formula. Solving the $16$ linear equations $X^{\mathsf T}J + JX = 0$ numerically gives a coefficient matrix of rank $6$ and hence a null space of dimension $16 - 6 = 10$, the same number.

*A concrete group element.* Take $P = R = 0$ and $Q = \bigl(\begin{smallmatrix} 3 & 1 \\ 1 & 0\end{smallmatrix}\bigr)$, so $X = \bigl(\begin{smallmatrix} 0 & Q \\ 0 & 0\end{smallmatrix}\bigr)$ with $X^2 = 0$. Then $e^{X} = I + X = \bigl(\begin{smallmatrix} I & Q \\ 0 & I\end{smallmatrix}\bigr)$, and

$$
(I+X)^{\mathsf T}J(I+X) = \begin{pmatrix} I & 0 \\ Q & I\end{pmatrix}\begin{pmatrix} 0 & I \\ -I & 0\end{pmatrix}\begin{pmatrix} I & Q \\ 0 & I\end{pmatrix} = \begin{pmatrix} I & 0 \\ Q & I\end{pmatrix}\begin{pmatrix} 0 & I \\ -I & -Q\end{pmatrix} = \begin{pmatrix} 0 & I \\ -I & Q - Q\end{pmatrix} = J ,
$$

the last step using $Q^{\mathsf T} = Q$. So $e^X \in \mathrm{Sp}(4,\mathbb{R})$, as the method promises, and $\det e^X = e^{\operatorname{tr}X} = e^0 = 1$.

*Step 6.* $\operatorname{diag}(t,t,t^{-1},t^{-1})$ is symplectic for every $t>0$, by the block computation in the compactness proof, so $\mathrm{Sp}(4,\mathbb{R})$ is unbounded and non-compact. 

*A consequence worth recording.* Taking determinants in $A^{\mathsf T}JA = J$ gives $(\det A)^2\det J = \det J$, and $\det J = 1 \neq 0$, so $\det A = \pm 1$ on $\mathrm{Sp}(2n,\mathbb{R})$. The determinant is continuous and equals $+1$ at the identity, and the group is connected by Step 5 of the components proof, so in fact $\det A = +1$ throughout and $\mathrm{Sp}(2n,\mathbb{R}) \subseteq \mathrm{SL}(2n,\mathbb{R})$ — symplectic maps preserve volume. The same conclusion is visible infinitesimally: every $X \in \mathfrak{sp}(2n,\mathbb{R})$ has $\operatorname{tr}X = \operatorname{tr}P + \operatorname{tr}(-P^{\mathsf T}) = 0$. For $n=1$ the inclusion is an equality, by the identity $A^{\mathsf T}JA = (\det A)J$ noted in the table; for $n \ge 2$ it is strict, since $10 < 15 = \dim \mathrm{SL}(4,\mathbb{R})$ already at $n=2$.
:::

:::application{provenance=original}
**Gauge groups and the number of force carriers.** The Standard Model of particle physics is built on the gauge group $\mathrm{SU}(3) \times \mathrm{SU}(2) \times \mathrm{U}(1)$, and the number of gauge bosons is the dimension of that group, because each independent generator carries one gauge field. The table gives

$$
\dim \mathrm{SU}(3) + \dim \mathrm{SU}(2) + \dim \mathrm{U}(1) = (3^2 - 1) + (2^2 - 1) + 1 = 8 + 3 + 1 = 12 ,
$$

namely the eight gluons of $\mathrm{SU}(3)$, the three $\mathrm{SU}(2)$ bosons and the single hypercharge boson, which after electroweak mixing are observed as $W^{+}$, $W^{-}$, $Z^{0}$ and the photon. The compactness column matters here too: the gauge group is compact, which is what allows the gauge fields to carry positive-definite kinetic energy.

**Rotations, spin and the two-to-one cover.** $\mathrm{SO}(3)$ and $\mathrm{SU}(2)$ have the same dimension $3$ and the same rank $1$, so their Lie algebras — and hence their local structure — agree, while their global structure does not: $\mathrm{SU}(2)$ is the three-sphere and is simply connected, $\mathrm{SO}(3)$ is not. That is the entire origin of half-integer spin, and is the subject of :ref[the rotation group and SU(2)]{to=group.so3-su2}.

**Classical mechanics.** The flow of a Hamiltonian system linearised about a trajectory lies in $\mathrm{Sp}(2n,\mathbb{R})$, because Hamilton's equations preserve the two-form $\omega = \sum_i dq_i \wedge dp_i$. The consequence drawn in the example — $\mathrm{Sp}(2n,\mathbb{R}) \subseteq \mathrm{SL}(2n,\mathbb{R})$ — is Liouville's theorem: phase-space volume is conserved. In accelerator physics the transfer matrix of a beamline segment is required to be symplectic, and the $10$ free parameters of $\mathrm{Sp}(4,\mathbb{R})$ are exactly the degrees of freedom of a transverse beam optics element in two planes.

**Where the compactness column is used.** For a *compact* group an invariant integration (the Haar measure) exists with finite total mass, which is what makes every finite-dimensional representation unitarisable and every irreducible representation finite-dimensional. That is why the representation theory of $\mathrm{SU}(2)$ and $\mathrm{SU}(3)$ looks like that of a finite group — discrete labels, orthogonality relations, complete reducibility — while the non-compact Lorentz group has infinite-dimensional unitary representations and no such table.
:::
