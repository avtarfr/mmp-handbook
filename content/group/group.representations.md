---
id: group.representations
title: Representations of groups
kind: definition
level: core
summary: A representation turns the abstract elements of a group into invertible matrices; for a finite group every complex representation can be made unitary and splits into a direct sum of irreducible pieces, which is Maschke's theorem.
prereqs: [group.groups-subgroups, group.homomorphisms-quotients, group.group-actions, group.symmetric-group, group.rings-fields, linalg.linear-maps-matrices, linalg.inner-product-spaces, linalg.gram-schmidt, linalg.unitary-orthogonal-matrices]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§24.1, Def. 24.1.1 and Def. 24.1.2 (representation, carrier space, faithful, equivalence) p. 726; §24.2, invariant subspaces and Def. 24.2.1 p. 729 (his 'reducible' is our 'decomposable'), Box 24.2.4 p. 730, Thm 24.2.5 (equivalence to a unitary representation) p. 730, Thm 24.2.6 (the orthogonal complement is invariant) and Eqs. (24.3)-(24.4) p. 731"
    pages: "726, 729-731"
    role: definitions of representation, carrier space, faithfulness and equivalence; invariant subspaces and the direct-sum splitting; the averaging route to unitarity; the orthogonal-complement argument and the resulting direct-sum decomposition. His "reducible" is our "decomposable"; the terminology we follow for those two words is Dummit and Foote's
  - work: dummit-foote-2004
    loc: "§18.1, definition of a linear and a matrix representation p. 840, examples (trivial, regular, permutation, dihedral) pp. 844-845, the definitions of irreducible, reducible, indecomposable, decomposable and completely reducible p. 847, the block upper-triangular and block-diagonal forms p. 848, Thm 1 (Maschke's theorem) pp. 849-851, Cor. 2 and Cor. 3 (complete reducibility, block-diagonal form) p. 851"
    pages: "840, 844-845, 847-851"
    role: the general-field statement of Maschke's theorem and its averaged-projection proof; complete reducibility as a corollary; the standard examples; the field-dependence of irreducibility
  - work: rhb-2006
    loc: "§29.3 (equivalent representations under a similarity transformation), Eq. (29.5) p. 1084; §29.4 (block-diagonal reduction, irreps, the multiplicity expansion Eq. (29.11) pp. 1086-1087, the invariant-subspace formulation and orthogonal complements p. 1088, under their standing unitarity assumption made on p. 1086) pp. 1086-1089; the three irreps of the triangle group Eq. (29.12) p. 1090"
    pages: "1084-1090"
    role: the matrix picture of block-diagonal reduction and the multiplicity notation (their "reducible" is our "decomposable"); the two-dimensional irrep of the triangle group used in our example
  - work: arfken-2013
    loc: "§17.3 (symmetry and physics: bases for irreducible representations, degeneracy, commuting Hamiltonians, dipole selection rules) pp. 828-830, including Example 17.3.1 p. 828 and Example 17.3.2 (three orbitals on a triangle) p. 829"
    pages: "828-830"
    role: the physical reading of irreducible bases and of degeneracy forced by symmetry; the triangular-molecule reading of our example
---

:::definition[Representation, degree, faithfulness]{provenance=adapted src="hassani-2013:§24.1, Def. 24.1.1, p. 726; dummit-foote-2004:§18.1, definition, p. 840"}
Let $G$ be a group and let $V$ be a vector space over a field $F$. A **representation** of $G$ on $V$ is a group homomorphism
$$
T \colon G \longrightarrow GL(V), \qquad T_{gh} = T_g T_h \quad \text{for all } g, h \in G ,
$$
where $GL(V)$ is the group of invertible linear maps $V \to V$ (:ref[Linear maps and matrices]{to=linalg.linear-maps-matrices}). The space $V$ is the **carrier space**, and $\dim V$ is the **degree** (or dimension) of $T$. Because a homomorphism sends the identity to the identity and inverses to inverses (:ref[Homomorphisms and quotient groups]{to=group.homomorphisms-quotients}),
$$
T_e = I, \qquad T_{g^{-1}} = (T_g)^{-1} .
$$
The representation is **faithful** if $T$ is injective, that is if $\ker T = \{e\}$. Fixing a basis of a finite-dimensional $V$ replaces each $T_g$ by an invertible matrix $D(g) \in GL_n(F)$ with $D(gh) = D(g)D(h)$; this is a **matrix representation** of degree $n$. Every group has the **trivial representation** $T_g = 1$ on $F$, of degree $1$, which is faithful only for $G = \{e\}$.

Unless we say otherwise, $G$ is finite, $F = \mathbb{C}$, and $V$ is finite-dimensional with an inner product $(\cdot,\cdot)$, linear in the first slot.
:::

:::definition[Equivalence]{provenance=adapted src="hassani-2013:§24.1, Def. 24.1.2, p. 726; rhb-2006:§29.3, Eq. (29.5), p. 1084"}
Two representations $T$ on $V$ and $T'$ on $V'$ are **equivalent**, written $T \simeq T'$, if there is a vector-space isomorphism $f \colon V \to V'$ with
$$
T'_g = f \, T_g \, f^{-1} \qquad \text{for every } g \in G .
$$
In matrix language, $D$ and $D'$ are equivalent when a single invertible $S$, the same one for every group element, gives $D'(g) = S^{-1} D(g) S$ for all $g$. Equivalent representations are the same representation written in different bases, and we never distinguish them.
:::

:::definition[Invariant subspace, reducibility, irreducibility]{provenance=adapted src="dummit-foote-2004:§18.1, the definitions p. 847 and the block forms p. 848; hassani-2013:§24.2, invariant subspaces and Def. 24.2.1, p. 729; rhb-2006:§29.4, pp. 1086-1088"}
A subspace $W \subseteq V$ is **invariant** (or $G$-stable) if $T_g W \subseteq W$ for every $g \in G$; the restrictions $T_g|_W$ then form a representation of $G$ on $W$, a **subrepresentation**. The subspaces $\{0\}$ and $V$ are always invariant and are called trivial.

- $T$ is **irreducible** if $V \neq \{0\}$ and the only invariant subspaces are $\{0\}$ and $V$.
- $T$ is **reducible** if some invariant $W$ is neither $\{0\}$ nor $V$.
- $T$ is **decomposable** if $V = U \oplus W$ with $U$ and $W$ both invariant and both non-zero; it is **completely reducible** if $V$ is a direct sum of irreducible invariant subspaces.

The words "reducible" and "decomposable" are not used consistently in the literature, so we fix our usage now: **for these two words we follow Dummit and Foote** :cite{work=dummit-foote-2004 loc="§18.1, the definitions on p. 847 and the block forms on p. 848"}, as in the list above. Two of our other sources use the words differently. Hassani calls a representation *reducible* when the carrier space is a direct sum $U \oplus W$ of two invariant subspaces, and *irreducible* when no such pair exists :cite{work=hassani-2013 loc="Def. 24.2.1, p. 729"}; Riley, Hobson and Bence call a representation *reducible* when one similarity transformation brings every matrix to block-diagonal form :cite{work=rhb-2006 loc="§29.4, pp. 1086-1087"}; both of those words mean our **decomposable**, and both of those "irreducible"s mean our **indecomposable**. Later in the same section Riley, Hobson and Bence give a second formulation, calling $D$ reducible when some proper subspace $W$ of the carrier space is invariant :cite{work=rhb-2006 loc="§29.4, p. 1088"}, and that one *is* our "reducible". Their two formulations agree with each other only because of a standing assumption they make just before the section opens, namely that every representation under discussion is unitary :cite{work=rhb-2006 loc="§29.3, p. 1086"}: for unitary $D$ an invariant $W$ brings the invariant complement $W^{\perp}$ with it, by part 2 of the theorem below, and the block-diagonal form follows. Without that assumption the second formulation is strictly weaker than the first. The two usages agree for the case that occupies most of this part, a finite group in characteristic $0$, precisely because parts 3 and 4 of the theorem below say reducible and decomposable then coincide; they part company only for infinite groups or when the characteristic divides $|G|$, as the remark after the proof shows.

With our words, the distinction between "reducible" and "decomposable" is the whole content of the theorem below. Choosing a basis of $V$ whose first vectors span an invariant $W$ puts every matrix in the block upper-triangular form $\begin{pmatrix} D_1(g) & B(g) \\ 0 & D_2(g)\end{pmatrix}$; the stronger splitting $V = U \oplus W$ with both summands invariant is what forces $B(g) = 0$ for every $g$, giving the block-diagonal form. Writing $m_\lambda$ for the number of summands equivalent to a fixed irreducible representation $T^{(\lambda)}$, a completely reducible $T$ is recorded as
$$
T \;\simeq\; m_1 T^{(1)} \oplus m_2 T^{(2)} \oplus \cdots \oplus m_\rho T^{(\rho)} ,
$$
the $T^{(\lambda)}$ being pairwise inequivalent and the $m_\lambda \ge 0$ integers called **multiplicities**. Hassani writes $\rho$ for the number of inequivalent irreducible representations; Riley, Hobson and Bence abbreviate "irreducible representation" to **irrep** and write $\hat D^{(\lambda)}$ for it.
:::

:::statement[Unitarity and Maschke's theorem]{provenance=adapted src="hassani-2013:§24.2, Thm 24.2.5, p. 730, Thm 24.2.6, p. 731, Eq. (24.3), p. 731; dummit-foote-2004:§18.1, Thm 1, pp. 849-850, Cor. 2 and Cor. 3, p. 851"}
Let $G$ be a **finite** group of order $|G|$.

1. **Unitarizability.** Let $T$ be a representation of $G$ on a finite-dimensional complex inner product space $V$. Then there is an inner product on $V$ for which every $T_g$ is unitary; equivalently, $T$ is equivalent to a representation by unitary matrices.
2. **Invariant complements, unitary case.** If every $T_g$ is unitary for the inner product $(\cdot,\cdot)$ and $W \subseteq V$ is invariant, then $W^{\perp}$ is invariant as well, so $V = W \oplus W^{\perp}$ splits $T$.
3. **Maschke's theorem.** Let $F$ be a field whose characteristic is **not** a divisor of $|G|$ (:ref[Rings and fields]{to=group.rings-fields}), let $V$ be an $F$-vector space carrying a representation of $G$, and let $U \subseteq V$ be an invariant subspace. Then $V$ has an invariant subspace $W$ with $V = U \oplus W$.
4. **Complete reducibility.** Under the hypothesis of part 3, every representation of $G$ on a finite-dimensional $F$-vector space is completely reducible: there is a basis in which every matrix $D(g)$ is block diagonal with irreducible blocks, the same block pattern for all $g \in G$.

Part 3 applies to every finite group when $\operatorname{char} F = 0$, in particular for $F = \mathbb{C}$. Parts 1 and 2 keep the convention of the first definition, so their $V$ is finite-dimensional and complex, and for such a $V$ they give a second proof of part 3; part 3 itself assumes nothing about $\dim V$.
:::

:::idea{provenance=original}
Every part of this is one trick: **average over the group**. A finite group lets us replace any object attached to $V$ by the sum of its translates $\sum_{g \in G} g \cdot (\text{object})$, and the sum is automatically $G$-invariant, because translating it by $h$ only relabels the summands $g \mapsto hg$, which is a bijection of $G$.

Apply the trick to an inner product and you get an inner product the group preserves, which is part 1. Apply it to a projection onto $U$ and you get a projection the group commutes with, so its kernel is an invariant complement, which is part 3. Part 2 is the special case where the averaging has already been done: once the $T_g$ are unitary, the complement $W^{\perp}$ comes for free, since preserving $W$ and preserving all inner products forces $W^{\perp}$ to be preserved too. Part 4 then follows by peeling off one invariant piece at a time, a finite process because each step drops the dimension.
:::

:::proof{provenance=adapted src="hassani-2013:§24.2, proof of Thm 24.2.5, p. 730, and proof of Thm 24.2.6, p. 731; dummit-foote-2004:§18.1, proof of Thm 1, pp. 849-851, and proof of Cor. 2, p. 851"}
**Part 1.** Starting from the given inner product $(\cdot,\cdot)$ on $V$, define
$$
\langle x, y \rangle \;=\; \sum_{g \in G} \bigl( T_g x,\, T_g y \bigr), \qquad x, y \in V ,
$$
a finite sum because $G$ is finite. This is **sesquilinear** (linear in $x$, conjugate-linear in $y$) because each summand is, and **Hermitian** for the same reason. It is **positive definite**: every term $(T_g x, T_g x) = \lVert T_g x\rVert^2$ is $\ge 0$, and the term $g = e$ equals $\lVert x \rVert^2 > 0$ when $x \neq 0$. So $\langle \cdot, \cdot \rangle$ is an inner product on $V$ (:ref[Inner product spaces]{to=linalg.inner-product-spaces}).

It is $G$-invariant. For $h \in G$,
$$
\langle T_h x, T_h y \rangle = \sum_{g \in G} \bigl( T_g T_h x,\, T_g T_h y \bigr) = \sum_{g \in G} \bigl( T_{gh} x,\, T_{gh} y \bigr) = \sum_{k \in G} \bigl( T_k x,\, T_k y \bigr) = \langle x, y \rangle ,
$$
where the second equality is the homomorphism property $T_g T_h = T_{gh}$ and the third substitutes $k = gh$: as $g$ runs once through $G$ so does $k$, because right multiplication by $h$ is a bijection of $G$ (it has inverse right multiplication by $h^{-1}$). Thus every $T_g$ is unitary for $\langle \cdot, \cdot \rangle$.

To get matrices, apply the Gram-Schmidt process to any basis of $V$ using $\langle \cdot, \cdot \rangle$ (:ref[Orthonormal bases and Gram-Schmidt]{to=linalg.gram-schmidt}); this produces a basis $v_1, \dots, v_n$ with $\langle v_i, v_j\rangle = \delta_{ij}$. Let $D'(g)$ be the matrix of $T_g$ in that basis, so $T_g v_j = \sum_i D'(g)_{ij} v_i$. Then
$$
\bigl(D'(g)^{\dagger} D'(g)\bigr)_{jk} = \sum_i \overline{D'(g)_{ij}}\, D'(g)_{ik} = \langle T_g v_k,\, T_g v_j \rangle = \langle v_k, v_j \rangle = \delta_{jk} ,
$$
the middle step expanding both arguments in the $\langle\cdot,\cdot\rangle$-orthonormal basis and the next using the invariance just proved. Hence $D'(g)$ is unitary for every $g$ (:ref[Unitary and orthogonal matrices]{to=linalg.unitary-orthogonal-matrices}). Finally, if $D(g)$ is the matrix of $T_g$ in the original orthonormal basis $e_1, \dots, e_n$ and $S$ is the matrix with columns given by the coordinates of $v_1,\dots,v_n$ in that basis, then $D'(g) = S^{-1} D(g) S$, so $D \simeq D'$.

**Part 2.** Let all $T_g$ be unitary, let $W$ be invariant, and let $x \in W^{\perp}$, $g \in G$. For any $w \in W$,
$$
(T_g x,\, w) = \bigl(T_g x,\, T_g T_{g^{-1}} w\bigr) = \bigl(x,\, T_{g^{-1}} w\bigr) = 0 ,
$$
using $T_g T_{g^{-1}} = T_e = I$ in the first step, unitarity of $T_g$ in the second, and in the third that $T_{g^{-1}} w \in W$ by invariance of $W$ while $x \perp W$. As $w \in W$ was arbitrary, $T_g x \in W^{\perp}$. So $W^{\perp}$ is invariant, and $V = W \oplus W^{\perp}$ because the inner product is positive definite.

**Part 3.** Write $n = |G|$ and let $n \cdot 1_F = 1_F + \cdots + 1_F$ ($n$ terms). The hypothesis that $\operatorname{char} F \nmid n$ says exactly that $n \cdot 1_F \neq 0$, so $n$ is invertible in $F$; call its inverse $n^{-1}$. This is the only place the characteristic is used, at the step marked below.

*A projection to start from.* Choose any vector-space complement $U_0$ of $U$ in $V$ (extend a basis of $U$ to a basis of $V$ and let $U_0$ be the span of the added vectors), and let $\pi_0 \colon V \to V$ be the projection with image $U$ and kernel $U_0$, that is $\pi_0(u + u_0) = u$ for $u \in U$, $u_0 \in U_0$. It is linear, satisfies $\pi_0(V) \subseteq U$, and $\pi_0(u) = u$ for $u \in U$. Nothing makes $U_0$ invariant, which is the problem to be fixed.

*Averaging.* Define
$$
\pi \;=\; n^{-1} \sum_{g \in G} T_g \, \pi_0 \, T_g^{-1} \;\colon\; V \to V .
$$
Each summand is a composition of linear maps, so $\pi$ is linear.

- *$\pi$ maps $V$ into $U$.* For $v \in V$ we have $\pi_0 T_g^{-1} v \in U$, and $U$ is invariant, so $T_g \pi_0 T_g^{-1} v \in U$. A sum of elements of the subspace $U$, scaled by $n^{-1}$, is again in $U$.
- *$\pi$ fixes $U$ pointwise.* For $u \in U$, invariance gives $T_g^{-1} u \in U$, so $\pi_0 T_g^{-1} u = T_g^{-1} u$ and hence $T_g \pi_0 T_g^{-1} u = u$. Summing, $\pi(u) = n^{-1} \cdot n \, u = u$. **Here the invertibility of $n$ in $F$ is used.**
- *$\pi$ commutes with the group.* For $h \in G$,
  $$
  T_h^{-1} \pi \, T_h = n^{-1} \sum_{g \in G} T_h^{-1} T_g \, \pi_0 \, T_g^{-1} T_h = n^{-1} \sum_{g \in G} T_{h^{-1} g}\, \pi_0\, T_{h^{-1}g}^{-1} = \pi ,
  $$
  since $g \mapsto h^{-1} g$ is a bijection of $G$. Thus $\pi T_h = T_h \pi$ for all $h$.

*The complement.* Put $W = \ker \pi$. It is invariant: if $\pi v = 0$ then $\pi (T_h v) = T_h (\pi v) = 0$. And $V = U \oplus W$:

- $U \cap W = \{0\}$, because $v$ in the intersection satisfies $v = \pi v$ (as $v\in U$) and $\pi v = 0$ (as $v \in W$).
- $U + W = V$, because any $v$ splits as $v = \pi v + (v - \pi v)$ with $\pi v \in U$, while $\pi(v - \pi v) = \pi v - \pi(\pi v) = \pi v - \pi v = 0$ since $\pi v \in U$ is fixed by $\pi$; so $v - \pi v \in W$.

**Part 4.** Induct on $\dim V$. If $V = \{0\}$ it is the empty direct sum, and if $T$ is irreducible there is nothing to do. Otherwise $V$ has an invariant subspace $U$ with $0 < \dim U < \dim V$, and part 3 supplies an invariant $W$ with $V = U \oplus W$. Both $U$ and $W$ have smaller dimension than $V$, so by the induction hypothesis each is a direct sum of irreducible invariant subspaces, and therefore so is $V$. Taking a basis of $V$ made of bases of those irreducible summands in turn, each $T_g$ preserves every summand, so its matrix is block diagonal with one block per summand, and the block on a given summand is an irreducible matrix representation. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$G$ finite is used twice, and cannot be dropped.** The averaged sums in parts 1 and 3 have $|G|$ terms, and the invertibility of $|G|$ in part 3 presupposes a number. The conclusion genuinely fails for infinite groups: let $G = \mathbb{Z}$ act on $\mathbb{C}^2$ by
$$
T_m = \begin{pmatrix} 1 & m \\ 0 & 1 \end{pmatrix}, \qquad T_m T_{m'} = T_{m+m'} .
$$
The line $U = \operatorname{span}\{e_1\}$ is invariant. Any complementary line is spanned by some $(a, b)$ with $b \neq 0$, and $T_1 (a,b) = (a+b, b)$, which is a multiple of $(a,b)$ only if $b = 0$. So $U$ has no invariant complement: this representation is reducible but indecomposable. (The same matrices show part 1 fails too: the argument of part 2 uses only unitarity, not finiteness, so if some inner product made every $T_m$ unitary, $U$ would have the invariant complement $U^{\perp}$.)

**$\operatorname{char} F \nmid |G|$ is used exactly once**, at the step $\pi(u) = n^{-1}\cdot n\,u = u$, and it too is sharp. Take $F = \mathbb{F}_p$, let $G = \langle g \rangle$ be cyclic of order $p$, and let $V = \mathbb{F}_p^2$ with
$$
D(g) = \begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}, \qquad D(g)^{k} = \begin{pmatrix} 1 & k \\ 0 & 1\end{pmatrix} ,
$$
so $D(g)$ has order exactly $p$ and this is a representation. Again $\operatorname{span}\{e_1\}$ is invariant with no invariant complement, by the computation of the previous paragraph read mod $p$. Here $\operatorname{char} F = p$ divides $|G| = p$. This is Dummit and Foote's example at :cite{work=dummit-foote-2004 loc="§18.1, p. 849"}; the study of this failing case is modular representation theory, which this handbook does not enter.

**Algebraic closedness is not needed for Maschke, but irreducibility depends on the field.** Nothing above asks $F$ to be $\mathbb{C}$. What does change with the field is the *list* of irreducible pieces. The degree-two real representation of the cyclic group $C_3$ by rotations through $0, 2\pi/3, 4\pi/3$ is irreducible over $\mathbb{R}$, because a rotation by $2\pi/3$ fixes no line in $\mathbb{R}^2$; over $\mathbb{C}$ the same matrices are diagonalizable simultaneously and split into two one-dimensional representations $g \mapsto \omega$ and $g \mapsto \omega^2$, $\omega = e^{2\pi i/3}$. So "irreducible" always means irreducible over a stated field, and from here on that field is $\mathbb{C}$.

**Reducible is weaker than decomposable, in general.** The two infinite- and positive-characteristic examples above are exactly the gap, and they are also where our terminology and Hassani's part company: each of them is reducible and indecomposable in our words, and so would be called *irreducible* under Hassani's Def. 24.2.1 and under Riley, Hobson and Bence's block-diagonal formulation in §29.4. (Their second, invariant-subspace formulation would call both examples reducible, as we do; it is available to them only for unitary representations, and neither example is unitarizable.) Parts 3 and 4 say the gap closes for finite groups in characteristic $0$, and that is why finite-group representation theory over $\mathbb{C}$ is as clean as it is.

**Uniqueness is not claimed here.** Part 4 gives *a* decomposition, not a unique one: inside a repeated irreducible summand the choice of complement is as free as the choice of basis of an eigenspace. What is unique is the list of multiplicities $m_\lambda$, and that is proved with characters in :ref[Orthogonality relations and characters]{to=group.orthogonality-characters}.
:::

:::method[Writing down a representation]{provenance=original}
To produce a concrete matrix representation of a finite group $G$:

1. **Find a set or space the group acts on.** A permutation action of $G$ on a finite set $X$ (:ref[Group actions]{to=group.group-actions}) is the commonest source.
2. **Linearize.** Take $V$ with basis $\{e_x : x \in X\}$ and define $T_g e_x = e_{g \cdot x}$, extended linearly. The homomorphism property follows from the action axioms. Since $T_g$ permutes an orthonormal basis, these **permutation matrices** are already unitary, and part 1 of the statement needs no work.
3. **Read off the matrices.** $D(g)_{ij} = 1$ when $g \cdot x_j = x_i$ and $0$ otherwise: each column has a single $1$.
4. **Hunt for invariant subspaces.** Vectors built symmetrically from the whole orbit (sums such as $\sum_x e_x$) and the subspaces defined by linear conditions the action preserves (such as "coordinates sum to zero") are the first things to try.
5. **Split off the complement.** Over $\mathbb{C}$, take the orthogonal complement of an invariant subspace: part 2 guarantees it is invariant. Repeat until no proper invariant subspace is left.
6. **Change basis.** Assemble a unitary $S$ whose columns are orthonormal bases of the invariant pieces in turn; then $S^{\dagger} D(g) S$ is block diagonal for every $g$ simultaneously.

Step 4 is the only one that needs thought. Characters turn it into arithmetic: :ref[Orthogonality relations and characters]{to=group.orthogonality-characters} decides how many blocks of each kind occur before any of them is found.
:::

:::example[The permutation representation of $S_3$, reduced]{provenance=original}
Let $G = S_3$, the symmetric group on $\{1,2,3\}$ (:ref[The symmetric group]{to=group.symmetric-group}), of order $6$. Let it act on $V = \mathbb{C}^3$ by permuting coordinates: $T_\sigma e_j = e_{\sigma(j)}$, following step 2 of the method. Writing $\tau = (1\,2\,3)$ and $\sigma = (1\,2)$,
$$
D(\tau) = \begin{pmatrix} 0&0&1\\ 1&0&0\\ 0&1&0 \end{pmatrix}, \qquad
D(\sigma) = \begin{pmatrix} 0&1&0\\ 1&0&0\\ 0&0&1 \end{pmatrix} .
$$
Both are permutation matrices, hence unitary, and $\tau, \sigma$ generate $S_3$, so every $D(g)$ is unitary.

**An invariant line.** The vector $u = \tfrac{1}{\sqrt3}(1,1,1)$ is fixed by every coordinate permutation, so $U = \operatorname{span}\{u\}$ is invariant and carries the trivial representation, of degree $1$.

**Its complement.** By part 2 of the statement, $W = U^{\perp} = \{x \in \mathbb{C}^3 : x_1 + x_2 + x_3 = 0\}$ is invariant; it is two-dimensional. An orthonormal basis of $W$ is
$$
f_1 = \tfrac{1}{\sqrt2}(1,-1,0), \qquad f_2 = \tfrac{1}{\sqrt6}(1,1,-2) .
$$

**The $2 \times 2$ block.** Apply $\tau$ to $f_1$. Since $\tau$ sends $e_1 \mapsto e_2$, $e_2 \mapsto e_3$, we get $T_\tau f_1 = \tfrac{1}{\sqrt2}(e_2 - e_3)$. Write $e_2 - e_3 = a(e_1 - e_2) + b(e_1 + e_2 - 2e_3)$: matching the $e_3$ coefficients gives $-2b = -1$, so $b = \tfrac12$, and matching the $e_1$ coefficients gives $a + b = 0$, so $a = -\tfrac12$ (the $e_2$ coefficient then reads $-a + b = 1$, as it must). Hence
$$
T_\tau f_1 = \tfrac{1}{\sqrt2}\Bigl(-\tfrac12 \sqrt2\, f_1 + \tfrac12\sqrt6\, f_2\Bigr) = -\tfrac12 f_1 + \tfrac{\sqrt3}{2} f_2 .
$$
The same computation for $f_2$ uses $T_\tau f_2 = \tfrac{1}{\sqrt6}(e_2 + e_3 - 2e_1)$ and $e_2 + e_3 - 2e_1 = -\tfrac32 (e_1 - e_2) - \tfrac12 (e_1+e_2-2e_3)$, giving $T_\tau f_2 = -\tfrac{\sqrt3}{2} f_1 - \tfrac12 f_2$. For $\sigma = (1\,2)$ the work is shorter: $T_\sigma f_1 = \tfrac{1}{\sqrt2}(e_2 - e_1) = -f_1$ and $T_\sigma f_2 = f_2$. So on $W$,
$$
\hat D(\tau) = \begin{pmatrix} -\tfrac12 & -\tfrac{\sqrt3}{2} \\[2pt] \tfrac{\sqrt3}{2} & -\tfrac12 \end{pmatrix}, \qquad
\hat D(\sigma) = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} ,
$$
a rotation through $120^\circ$ and a reflection: these are the familiar symmetries of an equilateral triangle, and they reproduce (up to a choice of basis) the two-dimensional irrep of the triangle group tabulated at :cite{work=rhb-2006 loc="Eq. (29.12), p. 1090"}.

**The block-diagonal form, with a number to check.** Let $S = (\,u \ \ f_1 \ \ f_2\,)$, a real orthogonal matrix because its columns are orthonormal. Then for every $g$, $S^{\mathsf T} D(g) S$ is block diagonal $1 \oplus \hat D(g)$. For $g = \tau$ the prediction is
$$
S^{\mathsf T} D(\tau) S = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -\tfrac12 & -\tfrac{\sqrt3}{2} \\ 0 & \tfrac{\sqrt3}{2} & -\tfrac12 \end{pmatrix} ,
$$
so the $(2,3)$ entry must be $-\sqrt3/2 = -0.8660254\ldots$ Checking it by hand: row $2$ of $S^{\mathsf T}$ is $f_1^{\mathsf T} = \tfrac{1}{\sqrt2}(1,-1,0)$, and column $3$ of $D(\tau)S$ is $D(\tau) f_2 = \tfrac{1}{\sqrt6}(-2,1,1)$, so the entry is $\tfrac{1}{\sqrt{12}}\bigl(1\cdot(-2) + (-1)\cdot 1 + 0\bigr) = -3/\sqrt{12} = -\sqrt3/2$, as predicted.

**Irreducibility of the block.** $\hat D(\sigma) = \operatorname{diag}(-1,1)$ has exactly two invariant lines, $\operatorname{span}\{f_1\}$ and $\operatorname{span}\{f_2\}$ (its eigenspaces, which are one-dimensional because the eigenvalues differ). Neither survives $\tau$: $\hat D(\tau) f_1 = -\tfrac12 f_1 + \tfrac{\sqrt3}{2} f_2$ is not a multiple of $f_1$, and $\hat D(\tau) f_2$ is not a multiple of $f_2$. Any invariant line would have to be invariant under both, so there is none, and the degree-two representation is irreducible over $\mathbb{C}$.

**Conclusion.** The permutation representation of $S_3$ on $\mathbb{C}^3$ decomposes as $T \simeq T^{(\mathrm{triv})} \oplus T^{(E)}$, with degrees $1 + 2 = 3$. It is reducible but, by part 4, not merely reducible: it is a genuine direct sum.
:::

:::application{provenance=original}
**Degeneracy in quantum mechanics.** If a Hamiltonian $H$ is unchanged by a symmetry group $G$ acting on the state space by $T_g$, then $H T_g = T_g H$ for every $g$ :cite{work=arfken-2013 loc="§17.3, p. 828"}. Each eigenspace of $H$ is then an invariant subspace: if $H\psi = E \psi$ then $H(T_g \psi) = T_g H \psi = E\,T_g \psi$. Part 4 says that eigenspace breaks into irreducible pieces, so energy levels come labelled by irreducible representations and a level carrying an irreducible representation of degree $n$ is at least $n$-fold degenerate. Degeneracy that is not explained this way is called accidental, and usually signals a larger symmetry that was overlooked. The parity group $\{e, P\}$ is the smallest instance: it has two one-dimensional irreducible representations, so the eigenfunctions of an even Hamiltonian can be taken even or odd, and nothing forces an even state and an odd state to share an energy :cite{work=arfken-2013 loc="Example 17.3.1, p. 828"}.

**Symmetry-adapted bases, and why they save work.** The change of basis built in step 6 of the method block-diagonalizes every symmetry operation at once, and therefore block-diagonalizes $H$ as well. A secular determinant of size $N$ becomes several small ones, one per irreducible representation, and matrix elements between different blocks vanish before any integral is done. This is how molecular-orbital and normal-mode calculations are organised: for a molecule with the symmetry of an equilateral triangle, the example above is literally the calculation, with $e_1, e_2, e_3$ the three atomic orbitals and the splitting $3 = 1 + 2$ the familiar one non-degenerate plus one doubly degenerate level; this is the setting of Arfken, Weber and Harris's three-orbital triangle, whose symmetry-adapted combinations carry the same $1/\sqrt2$ and $1/\sqrt6$ coefficients as our $f_1$ and $f_2$ :cite{work=arfken-2013 loc="Example 17.3.2, p. 829"}. The degenerate pair is forced by the group, not by the chemistry.

**Crystals and bands.** The point group of a crystal (:ref[Point groups and crystal symmetry]{to=group.point-groups}) acts on the electronic states at each wavevector, so bands are labelled by its irreducible representations, and band degeneracies at high-symmetry points are exactly the degrees of those representations. Lowering the symmetry (a strain, a field) replaces the group by a subgroup, under which a representation that was irreducible may split; the observed splitting of a degenerate level is then a direct measurement of the subgroup.

**Selection rules.** Whether a transition matrix element can be non-zero is decided by whether the trivial representation occurs in a product of representations :cite{work=arfken-2013 loc="§17.3, p. 830"}; the machinery for that is set up in :ref[Product representations and selection rules]{to=group.product-representations}, and rests on the decomposition proved here.
:::
