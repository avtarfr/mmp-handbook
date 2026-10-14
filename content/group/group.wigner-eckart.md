---
id: group.wigner-eckart
title: Spherical tensors and the Wigner-Eckart theorem
kind: theorem
level: advanced
summary: Defines a spherical tensor operator of rank $k$ by the transformation law $\mathcal{D}(R)T^{k}_{q}\mathcal{D}(R)^{-1}=\sum_{q'}D^{k}_{q'q}(R)T^{k}_{q'}$, and proves that all $(2k+1)(2j+1)(2j'+1)$ of its matrix elements between two angular-momentum multiplets are one number — the reduced matrix element — times a Clebsch-Gordan coefficient, so that every dependence on the three magnetic quantum numbers is pure geometry.
prereqs: [group.clebsch-gordan, group.angular-momentum, group.wigner-d-matrices, group.so3-su2, group.representations, group.schur-lemma, group.product-representations, spec.spherical-harmonics, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§24.8.2, pp. 756–758: Definition 24.8.4 of an irreducible set of operators by $T_g A^{(\\alpha)}_i T_g^{-1}=\\sum_j T^{(\\alpha)}_{ji}(g)A^{(\\alpha)}_j$, Eq. (24.48), and of a scalar operator as the case of the identity representation, p. 756; the computation Eq. (24.49) showing that $A^{(\\alpha)}_i|\\phi^{(\\beta)}_j\\rangle$ transforms by $T^{(\\alpha\\times\\beta)}$, the expansion Eq. (24.50) in the coupled basis and the vanishing rule it gives, p. 757; the Wigner-Eckart theorem Eq. (24.51), $\\langle\\phi^{(\\gamma)}_m|A^{(\\alpha)}_i|\\phi^{(\\beta)}_j\\rangle=\\sum_q C^*(\\alpha\\beta;\\gamma,q|ij;m)\\langle\\phi^{(\\gamma)}\\|A^{(\\alpha)}\\|\\phi^{(\\beta)}\\rangle_q$, the name 'reduced matrix element', and the specialisation to a scalar operator with its Schur's-lemma reading, p. 758; §24.8.1, p. 753: simply reducible groups; Problem 24.24, p. 760: the sum rule relating the squared reduced matrix element to the average of the squared full matrix elements"
    pages: "753, 756-758, 760"
    role: the definition of an irreducible set of operators, the route of the proof (expand the image vectors in the coupled basis, then use that the overlap with a fixed irreducible multiplet cannot depend on the row label), the statement of the theorem with its multiplicity label, the term 'reduced matrix element', and the scalar-operator corollary
  - work: arfken-2013
    loc: "§16.3, pp. 796–797: the name 'spherical tensor' for a set of objects that rotates within itself, the word 'irreducible' attached to it because an angular-momentum multiplet has no invariant subset, the defining equation $R|L,M\\rangle=\\sum_{M'}D^{L}_{M'M}(R)|L,M'\\rangle$, Eq. (16.51), its spherical-harmonic form Eq. (16.52), the row and column labelling from $-l$ to $+l$ and the unitarity of $D^l$; §16.3, pp. 803–806: the derivation of the product formula Eq. (16.83) and of the integral of three spherical harmonics of the same argument, Eq. (16.84), together with the three conditions listed on p. 806 (triangle condition $|l_1-l_2|\\le l_3\\le l_1+l_2$, $m_3=m_1+m_2$, and $l_1+l_2+l_3$ even) and the Legendre special case Eq. (16.85); §16.4, pp. 809–810: the matrices $K_i$ of Eq. (16.86) satisfying the angular-momentum commutation rules, $\\mathbf{K}^2=2I$ identifying the Cartesian basis as a $k=1$ object, and the Condon-Shortley eigenvectors $\\mathbf{k}_{\\pm1}$, $\\mathbf{k}_0$ of Eq. (16.87)"
    pages: "796-797, 803-806, 809-810"
    role: the terminology 'irreducible spherical tensor' and the index convention of the rotation matrices; the closed formula for the integral of three spherical harmonics against which our worked example is checked, and its three selection conditions; the construction of the spherical basis that turns a vector into a rank-one tensor
---

:::definition[Spherical tensor operator]{provenance=adapted src="hassani-2013:Definition 24.8.4 and Eq. (24.48), p. 756; arfken-2013:§16.3, Eqs. (16.51)–(16.52), pp. 796–797"}
Let $J_1,J_2,J_3$ be an angular momentum on a complex inner-product space $V$ (:ref[angular momentum algebra]{to=group.angular-momentum}), with $\hbar=1$ and the inner product linear in the ket, as there. Write
$$
\mathcal{D}(R)=\exp\bigl(-\mathrm{i}\theta\,\mathbf{n}\cdot\mathbf{J}\bigr)
$$
for the unitary operator implementing the rotation $R=R_{\mathbf{n}}(\theta)$, and $D^{k}_{q'q}(R)$ for the :ref[Wigner rotation matrices]{to=group.wigner-d-matrices}.

A family of $2k+1$ operators $T^{k}_{-k},\dots,T^{k}_{k}$ on $V$, indexed by $q=-k,\dots,k$ with $2k$ a non-negative integer, is an **irreducible spherical tensor operator of rank $k$** if
$$
\mathcal{D}(R)\,T^{k}_{q}\,\mathcal{D}(R)^{-1}\;=\;\sum_{q'=-k}^{k} D^{k}_{q'q}(R)\;T^{k}_{q'}
\qquad\text{for every rotation }R .
$$
The $2k+1$ components rotate among themselves by the same matrix, and with the same placement of indices, by which the kets $|k,q\rangle$ of a spin-$k$ multiplet rotate. :cite[Hassani]{work=hassani-2013 loc="Definition 24.8.4, p. 756"} takes exactly this as the definition of an *irreducible set of operators* for a general group $G$, with $T^{(\alpha)}_{ji}(g)$ in place of $D^{k}_{q'q}(R)$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="pp. 796–797"} supply the name — the objects are *spherical* because the rotation matrices act on them, and *irreducible* because a multiplet of fixed $k$ has no smaller family that rotates within itself.

A rank-zero tensor is a single operator with $\mathcal{D}S\mathcal{D}^{-1}=S$, that is, one commuting with all rotations; Hassani calls it a **scalar operator**, the word recording that it has only the one component.

**Infinitesimal form.** Differentiate the defining law along $R=R_{\mathbf{n}}(t)$ at $t=0$. The left side gives $-\mathrm{i}[\mathbf{n}\cdot\mathbf{J},T^{k}_{q}]$ and the right side gives the matrix of $-\mathrm{i}\,\mathbf{n}\cdot\mathbf{J}$ in the spin-$k$ multiplet acting on the index $q$, so the map $T\mapsto[J_a,T]$ acts on the label $q$ exactly as $J_a$ acts on $|k,q\rangle$. The equivalent conditions are therefore
$$
[J_z,\,T^{k}_{q}]=q\,T^{k}_{q},
\qquad
[J_{\pm},\,T^{k}_{q}]=\sqrt{k(k+1)-q(q\pm1)}\;T^{k}_{q\pm1},
$$
with the same coefficients as the ladder operators acting on $|k,q\rangle$. We use the two forms interchangeably.

**Two families to keep in mind.**

1. *Spherical harmonics as multiplication operators.* On functions on the sphere, with $(\mathcal{D}(R)f)(\hat{\mathbf{n}})=f(R^{-1}\hat{\mathbf{n}})$, let $T^{k}_{q}$ be multiplication by $Y_k^{q}$ (:ref[spherical harmonics]{to=spec.spherical-harmonics}). Then $\mathcal{D}(R)T^{k}_{q}\mathcal{D}(R)^{-1}$ is multiplication by $Y_k^{q}(R^{-1}\hat{\mathbf{n}})$, and the transformation rule of that unit, $Y_k^{q}(R^{-1}\hat{\mathbf{n}})=\sum_{q'}D^{k}_{q'q}(R)Y_k^{q'}(\hat{\mathbf{n}})$, is the defining law. So $\{Y_k^{q}\}$ is a rank-$k$ tensor; this is the case :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (16.52), p. 796"} write down first.

2. *Vector operators.* A triple $V_x,V_y,V_z$ with $[J_a,V_b]=\mathrm{i}\epsilon_{abc}V_c$ becomes a rank-one tensor in the **spherical basis**
$$
V_{+1}=-\frac{V_x+\mathrm{i}V_y}{\sqrt2},\qquad V_{0}=V_z,\qquad V_{-1}=\frac{V_x-\mathrm{i}V_y}{\sqrt2} .
$$
The three signs are the ones that make the commutators above come out, and they are the Condon-Shortley signs: the same recombination of $\hat{\mathbf{e}}_x,\hat{\mathbf{e}}_y,\hat{\mathbf{e}}_z$ is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Eq. (16.87), p. 810"} basis $\mathbf{k}_{\pm1},\mathbf{k}_0$, which they obtain by diagonalising the matrix $K_3$ of their Eq. (16.86) and then fixing the phases by Condon-Shortley. In this basis the scalar product of two vector operators is
$$
\mathbf{A}\cdot\mathbf{B}=\sum_{q=-1}^{1}(-1)^{q}A_{q}B_{-q},
$$
as multiplying out the three terms confirms. Family 1 at $k=1$ is the special case $V_q\propto Y_1^{q}$: the unit vector $\hat{\mathbf{r}}$ has spherical components $\hat r_q=\sqrt{4\pi/3}\;Y_1^{q}$, as substituting $Y_1^{0}=\sqrt{3/4\pi}\,z/r$ and $Y_1^{\pm1}=\mp\sqrt{3/8\pi}\,(x\pm\mathrm{i}y)/r$ confirms.
:::

:::statement[The Wigner-Eckart theorem]{provenance=adapted src="hassani-2013:Eqs. (24.50)–(24.51) and the scalar-operator corollary, pp. 757–758"}
Let $V$ be a complex inner-product space carrying a unitary representation of the rotations, decomposed into mutually orthogonal irreducible multiplets with orthonormal Condon-Shortley bases $|\alpha,j,m\rangle$, where $\alpha$ collects whatever labels besides $j$ are needed to tell two multiplets of the same $j$ apart. Let $\{T^{k}_{q}\}$ be a spherical tensor operator of rank $k$ on $V$. Then there is a single number $\langle\alpha',j'\,\|\,T^{k}\,\|\,\alpha,j\rangle$, depending on $\alpha,\alpha',j,j',k$ and not on $m,m',q$, such that
$$
\bigl\langle \alpha',j',m'\bigm| T^{k}_{q}\bigm|\alpha,j,m\bigr\rangle
= C\bigl(k\,j\,j'\,\big|\,q\,m\,m'\bigr)\;\bigl\langle\alpha',j'\,\|\,T^{k}\,\|\,\alpha,j\bigr\rangle ,
$$
with $C(j_1j_2J|m_1m_2M)=\langle j_1m_1;j_2m_2|J,M\rangle$ the Clebsch-Gordan coefficients of :ref[addition of angular momenta]{to=group.clebsch-gordan}. The number is the **reduced matrix element**.

Three consequences are read off from the selection rules obeyed by the coefficient:

1. **Selection rules.** The matrix element vanishes unless
$$
m'=m+q
\qquad\text{and}\qquad
|j-k|\le j'\le j+k .
$$
The second is the triangle condition; in particular a rank-$k$ tensor connects $j$ to at most $2k+1$ values of $j'$, and $j=j'=0$ is connected only by $k=0$.

2. **Counting.** The left-hand side is a table of $(2k+1)(2j+1)(2j'+1)$ complex numbers; the right-hand side is one number times a table of Clebsch-Gordan coefficients fixed once and for all by the group. All the physics of the operator sits in the reduced matrix element, all the dependence on orientation in the coefficient. Ratios of matrix elements within one pair of multiplets are therefore pure numbers depending on nothing about the operator but its rank.

3. **Scalar operators.** For $k=0$ the coefficient is $C(0jj'|0mm')=\delta_{jj'}\delta_{mm'}$, so a scalar operator has no matrix elements between multiplets of different $j$, and inside one multiplet it is a multiple of the identity, the multiple depending on $\alpha,\alpha',j$ but not on $m$. :cite[Hassani]{work=hassani-2013 loc="p. 758"} records this corollary and notes it is also a direct consequence of :ref[Schur's lemma]{to=group.schur-lemma}.

**The general-group statement.** :cite[Hassani's]{work=hassani-2013 loc="Eq. (24.51), p. 758"} Eq. (24.51) is the same identity for an arbitrary group $G$: for an operator $A^{(\alpha)}_i$ transforming by the $i$th row of the irreducible representation $T^{(\alpha)}$, and vectors transforming by $T^{(\beta)}$ and $T^{(\gamma)}$,
$$
\bigl\langle\phi^{(\gamma)}_m\bigm|A^{(\alpha)}_i\bigm|\phi^{(\beta)}_j\bigr\rangle
=\sum_{q} C^{*}\bigl(\alpha\beta;\gamma,q\,\big|\,ij;m\bigr)\;\bigl\langle\phi^{(\gamma)}\,\|\,A^{(\alpha)}\,\|\,\phi^{(\beta)}\bigr\rangle_{q},
$$
with one reduced matrix element for each copy $q$ of $T^{(\gamma)}$ inside $T^{(\alpha)}\otimes T^{(\beta)}$. For $SU(2)$ no copy is ever repeated — the group is *simply reducible* in Hassani's sense — the sum has one term, and the coefficients are real, which is the displayed form above.
:::

:::idea{provenance=original}
The theorem is the statement that an operator and a ket are the same kind of object as far as rotations can tell.

Read the defining law of a tensor operator and the transformation law of a ket side by side: $T^{k}_{q}$ carries the index $q$ exactly as $|k,q\rangle$ carries its magnetic label, and $|\alpha,j,m\rangle$ carries $m$. So the family of vectors $T^{k}_{q}|\alpha,j,m\rangle$, as $q$ and $m$ run, rotates precisely like the product basis $|k,q\rangle\otimes|j,m\rangle$. Everything known about that product — above all, how it splits into multiplets of total angular momentum $J$ — therefore applies to it unchanged, and the splitting is performed by the Clebsch-Gordan coefficients.

Once the family is sorted into multiplets, ask for its overlap with one fixed multiplet $|\alpha',j',m'\rangle$. Overlaps between two multiplets are governed by Schur's lemma: an overlap table commuting with the rotation matrices on both sides is zero unless the two multiplets have the same $j$, and is a multiple of the identity table when they do. That multiple is the reduced matrix element, and the rest — all of the $m,m',q$ dependence — is the Clebsch-Gordan coefficient used in the sorting.

So there is nothing to compute. The content is that rotations cannot distinguish "which component of the operator" from "which state of the multiplet", and the only invariant left over is a single number.
:::

:::proof{provenance=adapted src="hassani-2013:Eqs. (24.49)–(24.51), pp. 757–758"}
Fix $\alpha,j,\alpha',j',k$ throughout. We follow Hassani's route — transport the vectors $T^{k}_{q}|\alpha,j,m\rangle$ into the coupled basis and then show that the overlap with a fixed multiplet cannot depend on the magnetic label — but replace his appeal to the orthogonality relations between basis vectors of irreducible representations with a direct use of Schur's lemma.

**Step 1: the image vectors rotate like a tensor product.** Put $w_{qm}=T^{k}_{q}|\alpha,j,m\rangle$. Insert $\mathcal{D}^{-1}\mathcal{D}$ and use the two transformation laws in turn:
$$
\mathcal{D}(R)\,w_{qm}
=\bigl(\mathcal{D}(R)T^{k}_{q}\mathcal{D}(R)^{-1}\bigr)\,\mathcal{D}(R)\,|\alpha,j,m\rangle
=\sum_{q'}\sum_{m'} D^{k}_{q'q}(R)\,D^{j}_{m'm}(R)\;w_{q'm'} .
$$
The first factor is the definition of a rank-$k$ tensor, the second the definition of $D^{j}$. The coefficient $D^{k}_{q'q}D^{j}_{m'm}$ is exactly the matrix of $R$ in the product representation on $|k,q\rangle\otimes|j,m\rangle$, which is :ref[the product representation]{to=group.product-representations} studied there. This is Hassani's Eq. (24.49).

**Step 2: sort the image vectors into multiplets.** The Clebsch-Gordan coefficients $C(kjJ|qmM)$ are the entries of a real orthogonal matrix taking the product basis to the coupled basis. Apply the *same* orthogonal matrix to the $w_{qm}$ and set
$$
\Psi^{J}_{M}=\sum_{q,m} C\bigl(k\,j\,J\,\big|\,q\,m\,M\bigr)\;w_{qm},
\qquad\text{so that}\qquad
w_{qm}=\sum_{J,M} C\bigl(k\,j\,J\,\big|\,q\,m\,M\bigr)\;\Psi^{J}_{M} ,
$$
the inversion being the orthogonality of the coefficients. Because the coefficients depend only on the group and step 1 says the $w_{qm}$ transform exactly like the product basis, the sorted vectors transform like the coupled basis:
$$
\mathcal{D}(R)\,\Psi^{J}_{M}=\sum_{M'} D^{J}_{M'M}(R)\;\Psi^{J}_{M'} .
$$
Here $J$ runs over $|j-k|,\dots,j+k$ only, and $M$ over $-J,\dots,J$; outside that range no coefficient exists. Nothing says the $\Psi^{J}_{M}$ are non-zero or independent — they may all vanish — and nothing in what follows needs them to be.

**Step 3: project onto the target multiplet.** Let $P$ be the orthogonal projection of $V$ onto the span of $|\alpha',j',m'\rangle$, $m'=-j',\dots,j'$. Since $V$ is an orthogonal sum of multiplets and the representation is unitary, both that span and its orthogonal complement are rotation-invariant, so $P\mathcal{D}(R)=\mathcal{D}(R)P$. Define a linear map $\Phi$ from the abstract spin-$J$ space with basis $|J,M\rangle$ into the target multiplet by
$$
\Phi\bigl(|J,M\rangle\bigr)=P\,\Psi^{J}_{M} .
$$
By step 2 and the commuting of $P$ with rotations, $\Phi$ intertwines: $\Phi\circ\mathcal{D}^{(J)}(R)=\mathcal{D}(R)\circ\Phi$ for every $R$, since both sides send $|J,M\rangle$ to $\sum_{M'}D^{J}_{M'M}(R)P\Psi^{J}_{M'}$.

**Step 4: Schur's lemma.** Both the spin-$J$ space and the target multiplet are irreducible under the rotations, by the definition of a multiplet. :ref[Schur's lemma]{to=group.schur-lemma} therefore gives: $\Phi=0$ unless the two representations are equivalent, which for $SU(2)$ means $J=j'$; and when $J=j'$, $\Phi$ is a multiple of the identification $|j',M\rangle\mapsto|\alpha',j',M\rangle$ of the two copies of the spin-$j'$ representation. Writing that multiple $c$,
$$
\bigl\langle\alpha',j',m'\bigm|\Psi^{J}_{M}\bigr\rangle=\bigl\langle\alpha',j',m'\bigm|P\,\Psi^{J}_{M}\bigr\rangle=c\;\delta_{Jj'}\,\delta_{Mm'} ,
$$
the first equality because $|\alpha',j',m'\rangle$ lies in the range of the self-adjoint projection $P$. The number $c$ depends on $\alpha,j,k,\alpha',j'$ alone — it was produced before any magnetic label was chosen.

**Step 5: assemble.** Take the inner product of the second display of step 2 with $|\alpha',j',m'\rangle$ and use step 4:
$$
\bigl\langle\alpha',j',m'\bigm|T^{k}_{q}\bigm|\alpha,j,m\bigr\rangle
=\sum_{J,M} C\bigl(k\,j\,J\,\big|\,q\,m\,M\bigr)\,c\,\delta_{Jj'}\delta_{Mm'}
= c\;C\bigl(k\,j\,j'\,\big|\,q\,m\,m'\bigr) .
$$
Naming $c=\langle\alpha',j'\|T^{k}\|\alpha,j\rangle$ gives the theorem. If $j'$ lies outside $|j-k|\le j'\le j+k$ the sum is empty and the matrix element is zero, which is the triangle rule; and $C(kjj'|qmm')=0$ unless $m'=q+m$, which is the other selection rule. Part 3 follows by putting $k=0$, where the only coefficient is $C(0jj'|0mm')=\delta_{jj'}\delta_{mm'}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**The full tensor law, not one commutator.** Step 1 needs all $2k+1$ components and the exact transformation matrix. An operator obeying only $[J_z,A]=0$ need not be a scalar operator: inside a fixed multiplet take $A=|j,m_0\rangle\langle j,m_0|$ for one chosen $m_0$. It commutes with $J_z$, and all its matrix elements are diagonal — but they are $\delta_{m m_0}$, not a constant, so the conclusion of part 3 fails. What fails in the hypothesis is the commutator with $J_{\pm}$: $[J_+,A]\neq0$, because $A$ is not rotation-invariant. The moral is that the vanishing of *one* commutator fixes only the $m'=m+q$ rule; the triangle rule and the single reduced matrix element need the rest.

**Irreducibility, on both sides.** Step 4 uses Schur's lemma twice over, and it applies only to irreducible representations. If the target space were a reducible block — say two multiplets of the same $j'$ handled together, without the label $\alpha'$ — an intertwiner need not be a multiple of the identity, and the $m$-independence would be lost. That is precisely why the statement carries $\alpha'$: one reduced matrix element per *pair of multiplets*, not per pair of $j$ values.

**Unitarity and orthogonality of the decomposition.** Step 3 needs $P$ to commute with the rotations, which came from the complement of a multiplet being invariant too. For a non-unitary representation an invariant subspace need not have an invariant complement, and the projection argument collapses.

**Simple reducibility.** The single reduced matrix element is special to $SU(2)$. In $k\otimes j$ each $J$ between $|j-k|$ and $j+k$ occurs exactly once, so Schur's lemma in step 4 produces one constant. For a group where an irreducible representation occurs $n\ge2$ times in a product, step 2 produces $n$ independent families $\Psi^{\gamma,q}_{m}$ and step 4 gives one constant for each: that is the label $q$ and the sum in :cite[Hassani's]{work=hassani-2013 loc="Eq. (24.51), p. 758"} general form. Writing the $SU(2)$ form for such a group would be a false statement, not merely an imprecise one.

**Conventions, and how to detect the wrong one.** Three choices enter.

- *Normalisation.* We follow Hassani and put no extra factor on the reduced matrix element. Many texts in atomic physics define it with a $1/\sqrt{2j'+1}$, so that their reduced matrix element is $\sqrt{2j'+1}$ times ours. Only ratios of matrix elements within a fixed pair of multiplets, such as those in the example below, are convention-free.
- *Coupling order.* We couple the operator rank first, $C(kjj'|qmm')$, matching Hassani's $C(\alpha\beta;\gamma|ij;m)$ with $\alpha$ the operator's representation. Coupling $j$ first costs the symmetry factor $(-1)^{k+j-j'}$ of :ref[addition of angular momenta]{to=group.clebsch-gordan}, which changes the sign of the reduced matrix element for odd $k+j-j'$ but not of any matrix element.
- *Phases.* The displayed form assumes Condon-Shortley phases on the multiplets and on the tensor components, which is what makes the coefficients real so that no complex conjugate is needed.

A sharp test of which normalisation a table uses: for a scalar operator our form forces the reduced matrix element to *equal* the matrix element, since $C(0jj|0mm)=1$, whereas the $1/\sqrt{2j'+1}$ convention makes it $\sqrt{2j+1}$ times larger.
:::

:::method[Computing with the theorem]{provenance=original}
To obtain all matrix elements of a rank-$k$ tensor between the multiplets $(\alpha,j)$ and $(\alpha',j')$:

1. **Check the rank.** Verify $[J_z,T^{k}_{q}]=qT^{k}_{q}$ and $[J_{\pm},T^{k}_{q}]=\sqrt{k(k+1)-q(q\pm1)}\,T^{k}_{q\pm1}$ for the family at hand. For a vector operator, pass to the spherical basis first.
2. **Apply the selection rules.** If $j'$ fails $|j-k|\le j'\le j+k$, every matrix element is zero and there is nothing to do. Otherwise only the pairs with $m'=m+q$ survive, leaving at most $\min(2j+1,2j'+1)$ entries for each value of $q$.
3. **Compute one matrix element directly**, choosing the easiest: usually a stretched one, $m=j$ and $q=k$, or a diagonal one at $m=m'=0$. Any honest method will do — an integral, an explicit matrix, a known commutator.
4. **Divide out the coefficient.** The reduced matrix element is $\langle\alpha',j'\|T^{k}\|\alpha,j\rangle=\langle\alpha',j',m'|T^{k}_{q}|\alpha,j,m\rangle / C(kjj'|qmm')$, computed at the pair used in step 3. Pick a pair whose coefficient is not zero.
5. **Multiply back.** Every other matrix element is that number times its own Clebsch-Gordan coefficient.
6. **Check.** Recompute one further matrix element directly and compare, or verify the sum rule
$$
\sum_{q=-k}^{k}\ \sum_{m=-j}^{j}\bigl|\langle\alpha',j',m+q|T^{k}_{q}|\alpha,j,m\rangle\bigr|^{2}=(2j'+1)\,\bigl|\langle\alpha',j'\|T^{k}\|\alpha,j\rangle\bigr|^{2},
$$
which follows from the theorem and the orthogonality of the Clebsch-Gordan coefficients, every $m'$ being hit exactly once. Its content is what :cite[Hassani]{work=hassani-2013 loc="Problem 24.24, p. 760"} asks for in Problem 24.24: averaging $|\langle\cdot|T^{k}_{q}|\cdot\rangle|^{2}$ over the component and state labels returns $|\langle\alpha',j'\|T^{k}\|\alpha,j\rangle|^{2}$ up to a fixed factor.
:::

:::example[A rank-two tensor on a $p$ multiplet]{provenance=original}
Take $V=L^2(S^2)$ with the orbital angular momentum, the multiplet $l=1$ spanned by $Y_1^{m}$, and the rank-two tensor $T^{2}_{q}=Y_2^{q}$ acting as multiplication. The matrix elements are integrals of three spherical harmonics,
$$
\bigl\langle 1,m'\bigm|Y_2^{q}\bigm|1,m\bigr\rangle=\int_{S^2}\overline{Y_1^{m'}}\;Y_2^{q}\;Y_1^{m}\;\mathrm{d}\Omega .
$$

**Step 1: the selection rules.** With $k=2$, $j=j'=1$, the triangle condition $|1-2|\le1\le1+2$ holds, so the block does not vanish, and $m'=m+q$ leaves nine non-zero entries out of the $5\times3\times3=45$ in the table.

**Step 2: one matrix element.** Take $q=m=m'=0$. With $Y_1^{0}=\sqrt{3/4\pi}\cos\theta$ and $Y_2^{0}=\sqrt{5/16\pi}\,(3\cos^2\theta-1)$, substituting $t=\cos\theta$ and integrating out the azimuth gives
$$
\bigl\langle 1,0\bigm|Y_2^{0}\bigm|1,0\bigr\rangle
=2\pi\cdot\frac{3}{4\pi}\sqrt{\frac{5}{16\pi}}\int_{-1}^{1}t^2\,(3t^2-1)\,\mathrm{d}t
=\frac32\sqrt{\frac{5}{16\pi}}\Bigl(\frac65-\frac23\Bigr)
=\frac{1}{\sqrt{5\pi}} .
$$
Numerically $1/\sqrt{5\pi}=0.2523133$.

**Step 3: the reduced matrix element.** The coefficient at this entry is $C(2\,1\,1|0\,0\,0)=-\sqrt{2/5}=-0.6324555$, so
$$
\bigl\langle 1\,\|\,Y_2\,\|\,1\bigr\rangle=\frac{1/\sqrt{5\pi}}{-\sqrt{2/5}}=-\frac{1}{\sqrt{2\pi}}=-0.3989423 .
$$
The general formula $\langle l'\|Y_k\|l\rangle=\sqrt{(2k+1)(2l+1)/4\pi(2l'+1)}\;C(k\,l\,l'|0\,0\,0)$ agrees: $\sqrt{5\cdot3/(4\pi\cdot3)}\cdot(-\sqrt{2/5})=-1/\sqrt{2\pi}$.

**Step 4: the whole block.** Multiplying the reduced matrix element by the coefficients $C(2\,1\,1|q\,m\,m')$, written $C$ in the table, gives

| $q$ | $m$ | $m'$ | $C$ | matrix element |
|---|---|---|---|---|
| $0$ | $\pm1$ | $\pm1$ | $+\sqrt{1/10}=0.3162278$ | $-1/\sqrt{20\pi}=-0.1261566$ |
| $0$ | $0$ | $0$ | $-\sqrt{2/5}=-0.6324555$ | $+1/\sqrt{5\pi}=+0.2523133$ |
| $+1$ | $0$ | $+1$ | $-\sqrt{3/10}=-0.5477226$ | $+\sqrt{3/20\pi}=+0.2185097$ |
| $+1$ | $-1$ | $0$ | $+\sqrt{3/10}=+0.5477226$ | $-\sqrt{3/20\pi}=-0.2185097$ |
| $+2$ | $-1$ | $+1$ | $+\sqrt{3/5}=+0.7745967$ | $-\sqrt{3/10\pi}=-0.3090194$ |

together with the entries at $-q,-m,-m'$, which repeat the same numbers.

**Step 5: the check.** Integrating $\overline{Y_1^{1}}\,Y_2^{0}\,Y_1^{1}$ directly over the sphere returns $-1/\sqrt{20\pi}=-0.1261566$, and $\overline{Y_1^{1}}\,Y_2^{2}\,Y_1^{-1}$ returns $-\sqrt{3/10\pi}=-0.3090194$; each agrees with the table to the last digit shown. The sum rule of the method is a second check: adding the squares of all nine entries gives $0.0954930+0.1909859+0.1909859=0.4774648$, and $(2l'+1)|\langle1\|Y_2\|1\rangle|^{2}=3/2\pi=0.4774648$. The first ratio is worth pausing on: the diagonal of $Y_2^{0}$ on the three states $m=1,0,-1$ is in the ratio $-1:2:-1$, exactly $C(211|0mm)$, and no property of $Y_2$ beyond its rank entered. This is why the quadrupole splitting of a $p$ level has the pattern it has.

**Comparison with Arfken, Weber and Harris.** Their Eq. (16.84), reached by an entirely different route — the addition theorem, then the product formula for two harmonics of the same argument — reads
$$
\int \overline{Y_{l_3}^{m_3}}\,Y_{l_1}^{m_1}\,Y_{l_2}^{m_2}\,\mathrm{d}\Omega
=\sqrt{\frac{(2l_1+1)(2l_2+1)}{4\pi(2l_3+1)}}\;C(l_1l_2l_3|0\,0\,0)\;C(l_1l_2l_3|m_1m_2m_3) ,
$$
which is the Wigner-Eckart theorem for this case with the reduced matrix element written out. Their three conditions on p. 806 — the triangle condition, $m_3=m_1+m_2$, and $l_1+l_2+l_3$ even — are our two selection rules plus one more, the parity rule, which is extra information: it comes from $C(l_1l_2l_3|000)$ vanishing for odd $l_1+l_2+l_3$ and is invisible to the Wigner-Eckart theorem, which knows nothing about reflections. Checking the eight cases $(l_3m_3;l_1m_1;l_2m_2)$ used above and in the table against direct integration confirms the formula with $2l_3+1$ in the denominator.
:::

:::note[A printing slip in the source]{provenance=original}
:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (16.84), p. 805"} print $4\pi(2L+1)$ in the denominator of the square root of Eq. (16.84), carrying over the summation index $L$ from their Eq. (16.83); by the point the integral is taken, the surviving term is $L=l_3$. We write $2l_3+1$, which is what the derivation on that page produces and what direct integration confirms to seven digits in the eight cases checked in the example above.
:::

:::application{provenance=original}
**Selection rules without a single integral.** The leading coupling of an atom to light is the electric dipole operator $e\mathbf{r}$, a vector, hence a rank-one tensor. The theorem gives at once $\Delta m\in\{0,\pm1\}$ and $|\Delta j|\le1$ with $j=j'=0$ forbidden, for *any* atom and any state, before any wavefunction is written down; the whole atomic structure is buried in one radial number per pair of levels. The next multipole, the electric quadrupole, is rank two, and its rules are $|\Delta j|\le2$ with $0\to0$ and $\tfrac12\to\tfrac12$ forbidden. Observed line intensities inside one multiplet are then ratios of squared Clebsch-Gordan coefficients, as in the $-1:2:-1$ pattern of the example.

**The projection theorem and the Landé factor.** Let $\mathbf{V}$ be any vector operator and work inside one multiplet, $\alpha'=\alpha$ and $j'=j$. Both $V_q$ and $J_q$ are rank-one tensors between the same two multiplets, so by the theorem their matrix elements share the same Clebsch-Gordan table and differ only by the ratio of reduced matrix elements:
$$
\bigl\langle\alpha,j,m'\bigm|V_q\bigm|\alpha,j,m\bigr\rangle=\lambda\;\bigl\langle\alpha,j,m'\bigm|J_q\bigm|\alpha,j,m\bigr\rangle,
\qquad \lambda=\frac{\langle\alpha,j\|V\|\alpha,j\rangle}{\langle\alpha,j\|J\|\alpha,j\rangle} ,
$$
one constant for all $m,m',q$. To identify $\lambda$, contract with $\mathbf{J}$ using $\mathbf{A}\cdot\mathbf{B}=\sum_q(-1)^qA_qB_{-q}$: since each $J_{-q}$ keeps us inside the multiplet, inserting the resolution of the identity on that multiplet is legitimate, and
$$
\langle\mathbf{J}\cdot\mathbf{V}\rangle=\lambda\,\langle\mathbf{J}\cdot\mathbf{J}\rangle=\lambda\,j(j+1),
\qquad\text{so}\qquad
\lambda=\frac{\langle\mathbf{J}\cdot\mathbf{V}\rangle}{j(j+1)} .
$$
Only the component of $\mathbf{V}$ along $\mathbf{J}$ survives inside a multiplet — the perpendicular part averages away, as the old vector model asserted without proof.

Apply this to the magnetic moment of an atom, $\boldsymbol{\mu}=-\mu_B(\mathbf{L}+g_s\mathbf{S})$ with $\mathbf{J}=\mathbf{L}+\mathbf{S}$; taking the electron $g$-factor to be exactly $g_s=2$ this is $-\mu_B(\mathbf{J}+\mathbf{S})$. The Landé $g$-factor is defined by $\boldsymbol{\mu}\to-g_J\mu_B\mathbf{J}$ inside the multiplet, so
$$
g_J=1+\frac{\langle\mathbf{J}\cdot\mathbf{S}\rangle}{j(j+1)}
=1+\frac{j(j+1)+s(s+1)-l(l+1)}{2j(j+1)} ,
$$
the last step from $\mathbf{L}^2=(\mathbf{J}-\mathbf{S})^2$. For the level $^2P_{3/2}$ ($l=1$, $s=\tfrac12$, $j=\tfrac32$): $\mathbf{J}\cdot\mathbf{S}=\tfrac12(3.75+0.75-2)=1.25$ and $j(j+1)=3.75$, giving
$$
g_J=1+\frac{1.25}{3.75}=\frac43=1.3333\ldots ,
$$
while its partner $^2P_{1/2}$ ($j=\tfrac12$) has $\mathbf{J}\cdot\mathbf{S}=\tfrac12(0.75+0.75-2)=-0.25$ and $g_J=1-\tfrac{0.25}{0.75}=\tfrac23=0.6666\ldots$ . These two numbers are what the anomalous Zeeman splittings of the sodium D lines measure, and they follow from the theorem and arithmetic alone, with no atomic wavefunction anywhere in the derivation.
:::
