---
id: group.schur-lemma
title: Schur's lemma
kind: theorem
level: core
summary: A linear map that intertwines two irreducible representations is either zero or an isomorphism, and over the complex numbers any map commuting with an irreducible representation is a multiple of the identity.
prereqs: [group.representations, linalg.eigenvalues-eigenvectors, linalg.linear-maps-matrices]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§24.3, Lemma 24.3.1 (the two-representation form, with the kernel and image argument) pp. 732-733, Lemma 24.3.2 (the scalar form) p. 733, Thm 24.3.3 (irreducible representations of an abelian group) p. 733, Example 24.3.4 (degeneracy of a symmetric Hamiltonian) p. 734, and the averaged operator $A = \\sum_x T^{(\\alpha)}_x X T^{(\\beta)}_{x^{-1}}$ pp. 734-735"
    pages: "732-735"
    role: both forms of the lemma and the kernel/image proof route; the abelian corollary; the quantum-mechanical corollary; the averaging construction that feeds the orthogonality theorem
  - work: dummit-foote-2004
    loc: "§10.3, Exercise 11 (the module form: a non-zero homomorphism of irreducible modules is an isomorphism, so $\\operatorname{End}(M)$ is a division ring) p. 356; §18.1, Exercises 13 and 14 (centralizer of a representation) p. 853 and Exercise 18 (a matrix commuting with an irreducible complex representation is scalar; the centre of a faithful irreducible representation) pp. 853-854"
    pages: "356, 853-854"
    role: the module formulation and the division-ring consequence; the complex scalar form and the consequence for the centre of the group
---

:::definition[Intertwiner]{provenance=adapted src="hassani-2013:§24.3, Eq. (24.5), p. 732; dummit-foote-2004:§18.1, Exercise 14, p. 853"}
Let $T$ and $T'$ be representations of a group $G$ on vector spaces $V$ and $V'$ over a field $F$ (:ref[Representations of groups]{to=group.representations}). A linear map $A \colon V \to V'$ is an **intertwiner** (or $G$-equivariant map, or morphism of representations) if
$$
A\, T_g \;=\; T'_g\, A \qquad \text{for every } g \in G .
$$
The intertwiners from $T$ to $T'$ form a vector space, written $\operatorname{Hom}_G(V, V')$. An invertible intertwiner is exactly an equivalence $T' = A T A^{-1}$, so
$$
T \simeq T' \iff \operatorname{Hom}_G(V,V') \text{ contains an invertible element.}
$$
When $T' = T$, the intertwiners are the linear maps commuting with every $T_g$; this space, $\operatorname{Hom}_G(V,V) = \operatorname{End}_G(V)$, is closed under composition and is called the **centralizer** of the representation.
:::

:::statement[Schur's lemma]{provenance=adapted src="hassani-2013:§24.3, Lemma 24.3.1, p. 732, and Lemma 24.3.2, p. 733; dummit-foote-2004:§10.3, Exercise 11, p. 356, and §18.1, Exercise 18, pp. 853-854"}
Let $G$ be a group.

1. **First form.** Let $T$ on $V$ and $T'$ on $V'$ be **irreducible** representations of $G$ over a field $F$, and let $A \in \operatorname{Hom}_G(V, V')$. Then either $A = 0$, or $A$ is an isomorphism and $T \simeq T'$. Equivalently: inequivalent irreducible representations admit no non-zero intertwiner.
2. **Second form.** Let $T$ be an irreducible representation of $G$ on a **finite-dimensional complex** vector space $V$, and let $A \colon V \to V$ satisfy $A T_g = T_g A$ for all $g \in G$. Then $A = \lambda I$ for some $\lambda \in \mathbb{C}$, and necessarily
$$
\lambda = \frac{\operatorname{tr} A}{\dim V} .
$$
Hence $\dim_{\mathbb{C}} \operatorname{End}_G(V) = 1$.
Part 1 holds over any field and in any dimension; part 2 needs $\mathbb{C}$ (or any algebraically closed field) and finite dimension, and the remark below shows both are necessary. A converse of part 2, which is what makes it usable as a test, is given in its own block after the proof.
:::

:::idea{provenance=original}
An intertwiner cannot help but respect the group: whatever it kills and whatever it hits are built out of $G$-translates, so **the kernel of an intertwiner is an invariant subspace of the source and its image is an invariant subspace of the target**. Irreducibility leaves each of those only two options, and the four combinations collapse to "zero" or "isomorphism". That is part 1 in a sentence.

Part 2 then exploits the one thing $\mathbb{C}$ gives that $\mathbb{R}$ does not: a linear map on a non-zero finite-dimensional complex space always has an eigenvalue. Subtract it. The map $A - \lambda I$ still commutes with the group, so part 1 applies to it, but it is not invertible, because it kills an eigenvector. The only non-invertible option on offer is zero.
:::

:::proof{provenance=adapted src="hassani-2013:§24.3, proofs of Lemma 24.3.1, pp. 732-733, and Lemma 24.3.2, p. 733; dummit-foote-2004:§10.3, Exercise 11, p. 356"}
**Part 1.** Let $A T_g = T'_g A$ for all $g$.

*The kernel is invariant.* Let $x \in \ker A$ and $g \in G$. Then
$$
A (T_g x) = T'_g (A x) = T'_g 0 = 0 ,
$$
the first equality being the intertwining property. So $T_g x \in \ker A$, and $\ker A$ is an invariant subspace of $V$. Since $T$ is irreducible, $\ker A = V$ or $\ker A = \{0\}$. The first case says $A = 0$; in the second, $A$ is injective.

*The image is invariant.* Let $y \in A(V)$, say $y = Ax$, and let $g \in G$. Then
$$
T'_g y = T'_g A x = A (T_g x) \in A(V) .
$$
So $A(V)$ is an invariant subspace of $V'$. Since $T'$ is irreducible, $A(V) = \{0\}$ or $A(V) = V'$. The first case again says $A = 0$; in the second, $A$ is surjective.

*Combining.* If $A \neq 0$, then neither first case holds, so $A$ is injective and surjective, hence an isomorphism; and then $T'_g = A T_g A^{-1}$ for every $g$, which is precisely $T \simeq T'$.

**Part 2.** Let $V$ be a non-zero finite-dimensional complex space and let $A$ commute with every $T_g$. Every linear operator on such a space has at least one eigenvalue, because its characteristic polynomial has a root in $\mathbb{C}$ (:ref[Eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors}); fix such a $\lambda$ and a non-zero $x$ with $A x = \lambda x$. Set
$$
B = A - \lambda I .
$$
Then $B$ commutes with every $T_g$, since $A$ does and $I$ does; so $B \in \operatorname{Hom}_G(V,V)$, and part 1 applies with $T' = T$ (both irreducible, being the same irreducible representation). But $B x = 0$ with $x \neq 0$, so $B$ is not injective, hence not an isomorphism. The only remaining alternative in part 1 is $B = 0$, that is $A = \lambda I$.

Taking traces, $\operatorname{tr} A = \lambda \operatorname{tr} I = \lambda \dim V$, which gives the stated value of $\lambda$ and shows it is unique. Hence $\operatorname{End}_G(V)$ consists of the scalars and contains $I \neq 0$, so it is the one-dimensional space $\mathbb{C}I$. $\square$
:::

:::statement[Converse: the scalar commutant as a test]{provenance=original}
Let $G$ be a **finite** group and let $T$ be a representation of $G$ on a finite-dimensional complex vector space $V \neq \{0\}$. If every linear $A \colon V \to V$ commuting with all $T_g$ is a scalar multiple of the identity, then $T$ is irreducible. Together with part 2 this gives
$$
T \text{ irreducible} \iff \dim_{\mathbb{C}} \operatorname{End}_G(V) = 1 .
$$
:::

:::proof[Proof of the converse]{provenance=original}
We prove the contrapositive. Suppose $T$ is reducible, so there is an invariant subspace $W$ with $\{0\} \neq W \neq V$. Because $G$ is finite, part 1 of the statement in :ref[Representations of groups]{to=group.representations} lets us replace the inner product by one for which every $T_g$ is unitary, and then part 2 of that statement makes $W^{\perp}$ invariant as well, with $V = W \oplus W^{\perp}$.

Let $A$ be the projection onto $W$ along $W^{\perp}$, that is $A(w + w') = w$ for $w \in W$ and $w' \in W^{\perp}$. For $g \in G$ and $v = w + w'$ we have $T_g v = T_g w + T_g w'$ with $T_g w \in W$ and $T_g w' \in W^{\perp}$, both by invariance, so
$$
A T_g v = T_g w = T_g A v ,
$$
and $A$ commutes with the representation. But $A$ is not a scalar: it acts as $1$ on the non-zero subspace $W$ and as $0$ on the non-zero subspace $W^{\perp}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Both representations must be irreducible in part 1.** The proof used irreducibility of $T$ for the kernel and of $T'$ for the image, and needs both. Let $T$ be the two-dimensional irreducible representation of $S_3$ built in :ref[Representations of groups]{to=group.representations} and let $T'$ be the reducible three-dimensional permutation representation it sits inside. The inclusion $W \hookrightarrow \mathbb{C}^3$ intertwines them and is neither zero nor an isomorphism.

**Part 2 needs an algebraically closed field.** Over $\mathbb{R}$ the two-dimensional rotation representation of the cyclic group $C_3 = \langle r \rangle$, $r \mapsto R(2\pi/3)$, is irreducible (a rotation through $120^\circ$ fixes no line in $\mathbb{R}^2$), yet $A = R(2\pi/3)$ itself commutes with the whole representation, which is abelian, and $A$ is not a real multiple of $I$: its off-diagonal entries are $\mp\sin(2\pi/3) = \mp\sqrt3/2 \neq 0$. The proof breaks at exactly the right place: $A$ has no real eigenvalue. Over $\mathbb{C}$ the same representation stops being irreducible, so no contradiction arises. This is the reason the rest of the chapter works over $\mathbb{C}$.

**Part 2 needs finite dimension**, again only to produce an eigenvalue. In infinite dimensions an operator can have empty point spectrum (:ref[The spectrum of a bounded operator]{to=funcan.spectrum}), and the argument stops. For *finite* groups the issue never arises, because every irreducible representation of a finite group is finite-dimensional: the span of the orbit $\{T_g v : g \in G\}$ of any single non-zero $v$ is an invariant subspace of dimension at most $|G|$, hence equals the whole carrier space :cite{work=hassani-2013 loc="Box 24.2.4, p. 730"}.

**The converse needs $G$ finite**, because its proof uses Maschke's theorem to produce the invariant complement $W^{\perp}$. For infinite groups it is false. Let $G$ be the group of invertible upper triangular $2\times 2$ complex matrices acting on $V = \mathbb{C}^2$ in the obvious way. The line $\operatorname{span}\{e_1\}$ is invariant, so $V$ is reducible; yet the commutant is only the scalars. Indeed, let $A$ commute with every element of $G$. Commuting with $\operatorname{diag}(1,2)$, whose eigenvalues differ, forces $A$ to be diagonal, $A = \operatorname{diag}(w, z)$; commuting with $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ then gives $w = z$. So $\operatorname{End}_G(V) = \mathbb{C}I$ while $V$ is reducible. What the proof really uses is complete reducibility, and that is exactly what a finite group supplies.

**What the lemma does *not* say.** It does not say an intertwiner between equivalent irreducible representations is unique: part 2 says the ones from $V$ to itself form a one-dimensional space, so between equivalent irreducibles the intertwiners form a line, not a point. Nor does it say anything about reducible representations, where the centralizer is large: the converse stated after the proof makes that precise, and $\dim \operatorname{End}_G(V) = \sum_\lambda m_\lambda^2$ in general, a formula proved with characters in :ref[Orthogonality relations and characters]{to=group.orthogonality-characters}.
:::

:::remark[Consequences]{provenance=adapted src="hassani-2013:§24.3, Thm 24.3.3, p. 733, and Example 24.3.4, p. 734; dummit-foote-2004:§18.1, Exercise 18, pp. 853-854"}
**Abelian groups have only one-dimensional complex irreducible representations.** If $G$ is abelian and $T$ is an irreducible complex representation of $G$ on a finite-dimensional $V$, fix $h \in G$. Then $T_h$ commutes with every $T_g$, because $T_h T_g = T_{hg} = T_{gh} = T_g T_h$. By part 2, $T_h = \lambda(h) I$. Every subspace of $V$ is therefore invariant, so irreducibility forces $\dim V = 1$. The irreducible representations of an abelian group are thus exactly the homomorphisms $G \to \mathbb{C}^{\times}$. For a finite abelian group there are $|G|$ of them :cite{work=dummit-foote-2004 loc="§18.2, Example 1, p. 862"}.

**The centre acts by scalars.** For any $G$ and any irreducible complex $T$, the same argument applied to $z$ in the centre $Z(G)$ (:ref[Conjugacy classes]{to=group.conjugacy-classes}) gives $T_z = \lambda(z) I$: central elements are represented by scalar matrices. If in addition $T$ is faithful, $z \mapsto \lambda(z)$ is an injective homomorphism of $Z(G)$ into $\mathbb{C}^\times$, and a finite subgroup of $\mathbb{C}^{\times}$ is cyclic; so **a finite group with a faithful irreducible complex representation has cyclic centre** :cite{work=dummit-foote-2004 loc="§18.1, Exercise 18, pp. 853-854"}. This is a genuine restriction on groups, proved by representations: the Klein four-group, whose centre is itself and not cyclic, has no faithful irreducible complex representation.

**The averaging construction.** Let $T^{(\alpha)}$ on $V_\alpha$ and $T^{(\beta)}$ on $V_\beta$ be representations of a finite $G$, and let $X \colon V_\beta \to V_\alpha$ be *any* linear map. Then
$$
A \;=\; \sum_{x \in G} T^{(\alpha)}_{x}\, X\, T^{(\beta)}_{x^{-1}}
$$
intertwines $T^{(\beta)}$ with $T^{(\alpha)}$: for $g \in G$,
$$
T^{(\alpha)}_g A = \sum_{x \in G} T^{(\alpha)}_{gx} X T^{(\beta)}_{(gx)^{-1}} T^{(\beta)}_{g} = A\, T^{(\beta)}_g ,
$$
because $x \mapsto gx$ permutes $G$. If both representations are irreducible, Schur's lemma pins $A$ down completely: it is $0$ when they are inequivalent, and a known multiple of the identity when $\alpha = \beta$. Since $X$ was arbitrary, this is a strong constraint on the matrix entries of irreducible representations, and unwinding it is exactly the proof of the great orthogonality theorem in :ref[Orthogonality relations and characters]{to=group.orthogonality-characters} :cite{work=hassani-2013 loc="§24.3, Eq. (24.6), pp. 734-735"}.

**Degenerate multiplets.** If a Hamiltonian $H$ commutes with every operator of a representation $T$ of a symmetry group, and the representation is irreducible, then part 2 gives $H = \lambda I$ on that carrier space: every state in an irreducible multiplet has the same energy :cite{work=hassani-2013 loc="Example 24.3.4, p. 734"}.
:::

:::method[Using Schur's lemma to evaluate an average]{provenance=original}
A sum of the form $A = \sum_{g \in G} T_g X T_g^{-1}$ over a finite group, with $T$ irreducible on a complex $V$ of dimension $n$, never has to be computed term by term:

1. **Check the intertwining.** Confirm $A T_h = T_h A$ by reindexing $g \mapsto hg$ (or $g \mapsto gh$), as in the previous block. This step is purely formal and uses only that $G$ is finite and that the sum runs over all of $G$.
2. **Invoke part 2.** Conclude $A = \lambda I$.
3. **Take the trace to find $\lambda$.** Since traces are unchanged by conjugation, $\operatorname{tr}\bigl(T_g X T_g^{-1}\bigr) = \operatorname{tr} X$ for each of the $|G|$ terms, so $\operatorname{tr} A = |G| \operatorname{tr} X$ and
$$
\lambda = \frac{|G| \operatorname{tr} X}{n}, \qquad A = \frac{|G| \operatorname{tr} X}{n}\, I .
$$
4. **If two different irreducible representations are involved**, that is $A = \sum_g T^{(\alpha)}_g X T^{(\beta)}_{g^{-1}}$ with $T^{(\alpha)} \not\simeq T^{(\beta)}$, step 2 is replaced by part 1 and $A = 0$ outright; no trace is needed.

The recipe is the engine of the orthogonality relations, and the same three lines reappear whenever a physical quantity is averaged over a symmetry group: the average must be the only $G$-invariant object available, and its size is fixed by one trace.
:::

:::example[An averaged matrix over $S_3$]{provenance=original}
Take the two-dimensional irreducible representation $\hat D$ of $S_3$ constructed in :ref[Representations of groups]{to=group.representations}, acting on $W = \{x \in \mathbb{C}^3 : x_1+x_2+x_3 = 0\}$ in the orthonormal basis $f_1 = \tfrac{1}{\sqrt2}(1,-1,0)$, $f_2 = \tfrac{1}{\sqrt6}(1,1,-2)$. Its six matrices are the symmetries of an equilateral triangle, two rotations and three reflections:
$$
\hat D(e) = \begin{pmatrix} 1&0\\0&1\end{pmatrix},\qquad
\hat D(1\,2\,3) = \begin{pmatrix} -\tfrac12 & -\tfrac{\sqrt3}{2}\\[2pt] \tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix},\qquad
\hat D(1\,3\,2) = \begin{pmatrix} -\tfrac12 & \tfrac{\sqrt3}{2}\\[2pt] -\tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix},
$$
$$
\hat D(1\,2) = \begin{pmatrix} -1&0\\0&1\end{pmatrix},\qquad
\hat D(2\,3) = \begin{pmatrix} \tfrac12 & \tfrac{\sqrt3}{2}\\[2pt] \tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix},\qquad
\hat D(1\,3) = \begin{pmatrix} \tfrac12 & -\tfrac{\sqrt3}{2}\\[2pt] -\tfrac{\sqrt3}{2} & -\tfrac12\end{pmatrix} .
$$
The rotations have determinant $1$ and trace $-1$; the reflections have determinant $-1$ and trace $0$. Each matrix is real orthogonal, so $\hat D(g)^{-1} = \hat D(g)^{\mathsf T}$.

**Predict first.** Let
$$
X = \begin{pmatrix} 1 & 2 \\ 3 & 4\end{pmatrix}, \qquad A = \sum_{g \in S_3} \hat D(g)\, X\, \hat D(g)^{\mathsf T} .
$$
Step 1 of the method applies because the sum runs over all of $S_3$, and the representation is irreducible by the argument in :ref[Representations of groups]{to=group.representations}. So $A = \lambda I_2$, and step 3 fixes $\lambda$ from $|G| = 6$, $n = 2$ and $\operatorname{tr} X = 1 + 4 = 5$:
$$
\lambda = \frac{6 \cdot 5}{2} = 15, \qquad A = 15\, I_2 .
$$

**Now check it, in three pairs.** Write $R = \hat D(1\,2\,3)$, so $\hat D(1\,3\,2) = R^{\mathsf T}$.

*Identity and $(1\,2)$.* Since $\hat D(1\,2) = \operatorname{diag}(-1,1)$, conjugating $X$ by it flips the sign of both off-diagonal entries:
$$
X + \hat D(1\,2)\,X\,\hat D(1\,2)^{\mathsf T} = \begin{pmatrix} 1&2\\3&4\end{pmatrix} + \begin{pmatrix} 1&-2\\-3&4\end{pmatrix} = \begin{pmatrix} 2&0\\0&8\end{pmatrix} .
$$

*The two rotations.* Multiplying out, for instance $(RXR^{\mathsf T})_{11} = \bigl(-\tfrac12 - \tfrac{3\sqrt3}{2}\bigr)\bigl(-\tfrac12\bigr) + \bigl(-1 - 2\sqrt3\bigr)\bigl(-\tfrac{\sqrt3}{2}\bigr) = \tfrac{13}{4} + \tfrac{5\sqrt3}{4}$, and similarly for the other entries,
$$
R X R^{\mathsf T} = \begin{pmatrix} \tfrac{13}{4} + \tfrac{5\sqrt3}{4} & -\tfrac{7}{4} + \tfrac{3\sqrt3}{4} \\[3pt] -\tfrac{3}{4} + \tfrac{3\sqrt3}{4} & \tfrac{7}{4} - \tfrac{5\sqrt3}{4}\end{pmatrix} .
$$
The matrix $R^{\mathsf T}$ is $R$ with the sign of every off-diagonal entry reversed, which is the same as replacing $\sqrt3$ by $-\sqrt3$ throughout; so $R^{\mathsf T} X R$ is the displayed matrix with $\sqrt3 \to -\sqrt3$, and every surd cancels in the sum:
$$
R X R^{\mathsf T} + R^{\mathsf T} X R = \begin{pmatrix} \tfrac{13}{2} & -\tfrac{7}{2} \\[3pt] -\tfrac{3}{2} & \tfrac{7}{2}\end{pmatrix} .
$$

*The two remaining reflections.* By the same substitution $\sqrt3 \to -\sqrt3$, which carries $\hat D(2\,3)$ to $\hat D(1\,3)$,
$$
\hat D(2\,3)\,X\,\hat D(2\,3) + \hat D(1\,3)\,X\,\hat D(1\,3) = \begin{pmatrix} \tfrac{13}{4} + \tfrac{5\sqrt3}{4} & \tfrac{7}{4} - \tfrac{3\sqrt3}{4} \\[3pt] \tfrac{3}{4} - \tfrac{3\sqrt3}{4} & \tfrac{7}{4} - \tfrac{5\sqrt3}{4}\end{pmatrix} + \bigl(\sqrt3 \to -\sqrt3\bigr) = \begin{pmatrix} \tfrac{13}{2} & \tfrac{7}{2} \\[3pt] \tfrac{3}{2} & \tfrac{7}{2}\end{pmatrix}
$$
(these two matrices are symmetric, so transposing them is not needed).

*The sum.* Adding the three pairs entry by entry,
$$
A = \begin{pmatrix} 2 & 0 \\ 0 & 8\end{pmatrix} + \begin{pmatrix} \tfrac{13}{2} & -\tfrac72 \\[3pt] -\tfrac32 & \tfrac72\end{pmatrix} + \begin{pmatrix} \tfrac{13}{2} & \tfrac72 \\[3pt] \tfrac32 & \tfrac72\end{pmatrix} = \begin{pmatrix} 15 & 0 \\ 0 & 15 \end{pmatrix} = 15\,I_2 ,
$$
exactly as Schur's lemma predicted: the two off-diagonal entries cancel between the rotation pair and the reflection pair, and the diagonal entries come out equal even though $X$ had unequal diagonal entries $1$ and $4$. An independent check of the one number that matters: $\operatorname{tr} A = 6 \operatorname{tr} X = 30 = 15 + 15$.

**An inequivalent pair.** Let $T^{(1)}$ be the trivial representation of $S_3$ on $\mathbb{C}$ and $T^{(2)}$ the sign representation $\sigma \mapsto \operatorname{sgn}(\sigma)$, both of degree $1$ and so both irreducible. An intertwiner $A \colon \mathbb{C} \to \mathbb{C}$ is a number $a$ with $a \cdot 1 = \operatorname{sgn}(\sigma)\, a$ for all $\sigma$; taking $\sigma$ to be a transposition gives $a = -a$, hence $a = 0$. Part 1 of the statement is confirmed directly, and the two representations are inequivalent.
:::

:::application{provenance=original}
**Good quantum numbers from an abelian symmetry.** The consequence that abelian groups have only one-dimensional complex irreducible representations is why a translation-invariant or rotation-about-one-axis-invariant problem gives *labels* rather than multiplets. For the discrete translations of a crystal lattice, the one-dimensional representations are $T_{\mathbf{R}} \mapsto e^{i \mathbf{k}\cdot\mathbf{R}}$, and an eigenstate of the Hamiltonian can be chosen to transform by one of them: this is Bloch's theorem, and the crystal momentum $\mathbf{k}$ is the label of the representation. For rotations about the $z$ axis the representations are $\varphi \mapsto e^{i m \varphi}$ with $m \in \mathbb{Z}$, and $m$ is the magnetic quantum number. No degeneracy is forced in either case, which is exactly why non-abelian symmetry is needed to explain multiplets.

**Why non-abelian symmetry forces degeneracy.** Conversely, if the symmetry group has an irreducible representation of degree $n > 1$ — which by the above happens only when the group is non-abelian — then a level transforming under it is $n$-fold degenerate, because the Hamiltonian restricted to that multiplet commutes with the whole group and is therefore a multiple of the identity. The threefold degeneracy of the $p$ orbitals under the full rotation group, and the twofold $E$ levels of a molecule with threefold symmetry, are this statement.

**Reduced matrix elements and the Wigner-Eckart theorem.** Schur's lemma is the reason a matrix element of an operator between two irreducible multiplets factorizes into a geometric part fixed by the group and a single number that carries all the physics. The intertwiner space between the two multiplets is at most one-dimensional, so once one non-zero matrix element is known the rest are determined. This is the content of :ref[Spherical tensors and the Wigner-Eckart theorem]{to=group.wigner-eckart} and, for finite groups, of the selection rules of :ref[Product representations and selection rules]{to=group.product-representations}.

**Irreducibility as a computational test.** The converse above turns "is this representation irreducible?" into "does anything but a scalar commute with it?". In practice this is how a numerically generated representation is checked: build the commutant by solving the linear system $A D(g) = D(g) A$ over the generators of $G$, and read off its dimension. Dimension $1$ means irreducible; dimension $\sum_\lambda m_\lambda^2$ in general, which is also what the character test of :ref[Orthogonality relations and characters]{to=group.orthogonality-characters} computes, far more cheaply.
:::
