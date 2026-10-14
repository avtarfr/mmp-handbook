---
id: group.casimir-operators
title: Casimir operators
kind: definition
level: advanced
summary: Defines a Casimir operator as one commuting with every generator of a represented Lie algebra, builds the quadratic Casimir from the inverse Cartan metric and proves that it commutes with all of them, explains why Schur's lemma then makes it a number on each irreducible representation, and identifies J^2 as the one Casimir of the angular-momentum algebra.
prereqs: [group.angular-momentum, group.lie-groups-algebras, group.representations, group.schur-lemma, spec.spherical-harmonics]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§29.2, Eq. (29.47) and Definition 29.2.13 (the Killing form), Eq. (29.49) (the Cartan metric tensor g_ij = c_il^k c_jk^l), and the computation on p. 946 showing that the lowered structure constants c_ijk are completely antisymmetric, with Proposition 29.2.15; §30.3.2, Definition 30.3.4 (Casimir operator), Theorem 30.3.5 (Chevalley), Eq. (30.13) and the displayed verification that [C, X_k] = 0, pp. 969–970; Example 30.3.6 (the rotation group: Cartan metric 2 delta_ij, L^2 as the Casimir, rank one, dimension 2j+1), p. 970; Eq. (30.14) and the surrounding discussion of Casimir eigenvalue equations as the differential equations of mathematical physics, p. 971; §30.3.4, pp. 975–977 (the Poincare algebra is not semisimple, Eq. (30.13) fails for it, and P^2 and W^2 serve instead)"
    pages: "945-946, 969-971, 975-977"
    role: the definition of a Casimir operator; the Killing form and Cartan metric; the quadratic Casimir and the proof route that it commutes with every generator; Chevalley's theorem; the so(3) worked case; the Poincare counterexample
  - work: arfken-2013
    loc: "§17.7, pp. 848–850: the closure relation [S_j, S_k] = i f_jkl S_l defining the structure constants and their total antisymmetry, the rank of a group as the maximum number of mutually commuting independent generators, the statement that the eigenvalues of operators commuting with all generators label entire representations, that such operators are called Casimir operators, that their number equals the rank, and that SO(3) therefore has exactly one, namely L^2 or J^2"
    pages: "848-850"
    role: the naming and the counting rule (number of independent Casimir operators = rank); the identification of the SO(3) Casimir with L^2; the reading of the labels as quantum numbers
---

:::definition[Casimir operator, Killing form, Cartan metric]{provenance=adapted src="hassani-2013:Definition 30.3.4 and Eq. (30.13), p. 969, and Definition 29.2.13 with Eq. (29.49), p. 945; arfken-2013:§17.7, p. 849"}
Let $\mathfrak{g}$ be a Lie algebra with basis $X_1,\dots,X_d$ and **structure constants** $c_{ij}^{\,k}$ defined by

$$
[X_i, X_j] = c_{ij}^{\,k}\,X_k ,
$$

summation over repeated indices understood throughout (see :ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}). Let $T : \mathfrak{g} \to \mathfrak{gl}(\mathcal{H})$ be a :ref[representation]{to=group.representations}, and abbreviate $X_i$ for the operator $T_{X_i}$ acting on the carrier space $\mathcal{H}$, as Hassani does.

- A **Casimir operator** for the representation $T$ is an operator $C$ on $\mathcal{H}$ that commutes with every $T_X$, $X \in \mathfrak{g}$. Equivalently, since the $X_i$ span, $[C, X_i] = 0$ for $i = 1,\dots,d$.
- The **Killing form** of $\mathfrak{g}$ is the symmetric bilinear form $(X \mid Y) = \operatorname{tr}(\mathrm{ad}_X \circ \mathrm{ad}_Y)$, where $\mathrm{ad}_X(Y) = [X,Y]$. In the chosen basis its components are the **Cartan metric tensor**

  $$
  g_{ij} = (X_i \mid X_j) = c_{il}^{\,k}\,c_{jk}^{\,l} .
  $$

- The **lowered structure constants** are $c_{ijk} = c_{ij}^{\,l}\,g_{lk}$. Hassani's computation on p. 946 shows that $c_{ijk}$ is completely antisymmetric in $i$, $j$, $k$; Arfken, Weber and Harris record the same total antisymmetry for the constants $f_{jkl}$ of their closure relation $[S_j,S_k] = i f_{jkl}S_l$.
- When $g_{ij}$ is invertible, write $g^{ij}$ for its inverse and call

  $$
  C = g^{ij}\,X_i X_j
  $$

  the **quadratic Casimir** of the representation. The products $X_iX_j$ are products of operators on $\mathcal{H}$, not Lie brackets: $C$ lives in the algebra of operators (equivalently, in the universal enveloping algebra), not in $\mathfrak{g}$.
- The **rank** $r$ of $\mathfrak{g}$ is the dimension of a maximal commuting subalgebra: Arfken, Weber and Harris describe it as the greatest number of generators, independent of one another, that commute in pairs; Hassani calls it the dimension of the Cartan subalgebra. Hassani uses the first form when he argues that $\mathfrak{so}(3)$ has rank one, so the two descriptions are the working definition in both books.

A **semisimple** Lie algebra is, for the purposes of this unit, one whose Killing form is non-degenerate, which is what the construction of $C$ requires.
:::

:::statement[The quadratic Casimir, and what it is good for]{provenance=adapted src="hassani-2013:Eq. (30.13) with the verification on p. 970, Definition 30.3.4 and Theorem 30.3.5, p. 969; arfken-2013:§17.7, p. 849"}
Let $\mathfrak{g}$ be a Lie algebra whose Cartan metric $g_{ij}$ is invertible, and let $T$ be a representation of $\mathfrak{g}$ on $\mathcal{H}$.

1. **(It is a Casimir.)** $C = g^{ij}X_iX_j$ commutes with every $X_k$, hence with $T_X$ for every $X \in \mathfrak{g}$.
2. **(It is a number on an irreducible representation.)** If $T$ is irreducible and $\mathcal{H}$ is a finite-dimensional complex space, then by :ref[Schur's lemma]{to=group.schur-lemma} $C$ is a scalar multiple of the identity. Every vector of an irreducible invariant subspace is therefore an eigenvector of $C$ with one and the same eigenvalue, and that eigenvalue is a label of the representation rather than of any vector in it.
3. **(Chevalley's theorem, quoted.)** Suppose $\mathfrak{g}$ is semisimple and has rank $r$. Then, whatever basis is chosen, one can find $r$ Casimir operators that are polynomials in the $T_{X_i}$ and whose eigenvalues characterise which irreducible representation of $\mathfrak{g}$ one is looking at. Hassani states this as Theorem 30.3.5 and refers the proof elsewhere; we quote it and do not prove it. Arfken, Weber and Harris state the counting part the same way: the number of independent Casimir operators equals the rank of the group.

In particular $\mathfrak{so}(3)$, of rank one, has exactly one Casimir operator, and it is the operator written $L^2$ or $J^2$ in angular-momentum theory.
:::

:::idea{provenance=original}
Why should $g^{ij}X_iX_j$ commute with everything? Commuting a product past $X_k$ costs one commutator for each factor, by the Leibniz rule $[AB, X] = A[B,X] + [A,X]B$; each commutator replaces one generator by a structure constant times another generator. What is left is a sum of terms $X_iX_r$ and $X_rX_i$, weighted by a coefficient built from $g^{ij}$ and a structure constant. The whole point is a clash of symmetries: the operator part $X_iX_r + X_rX_i$ is symmetric under exchanging the two indices, while the coefficient — because the Cartan metric is symmetric and the *lowered* structure constants are completely antisymmetric — is antisymmetric under the very same exchange. A symmetric object contracted with an antisymmetric one is zero, so everything cancels.

The second half of the statement is Schur's lemma doing what it always does: an operator that commutes with an irreducible set of operators has no room to be anything but a multiple of the identity, because each of its eigenspaces would otherwise be a proper invariant subspace.
:::

:::proof[Part 1: $[C, X_k] = 0$]{provenance=adapted src="hassani-2013:the displayed computation following Eq. (30.13), p. 970"}
**Step 1 (expand by the Leibniz rule).** For operators, $[AB, D] = A[B,D] + [A,D]B$, directly from writing out the four products. Applying it with $A = X_i$, $B = X_j$, $D = X_k$ and using the bilinearity of the commutator,

$$
[C, X_k] = g^{ij}\,[X_iX_j, X_k] = g^{ij}\bigl( X_i[X_j,X_k] + [X_i,X_k]X_j \bigr) .
$$

**Step 2 (insert the structure constants).** The operators $T_X$ obey the same commutation relations as $\mathfrak{g}$, because $T$ is a representation: $[X_j, X_k] = c_{jk}^{\,r}X_r$. Hence

$$
[C, X_k] = g^{ij}c_{jk}^{\,r}\,X_iX_r + g^{ij}c_{ik}^{\,r}\,X_rX_j .
$$

**Step 3 (make the two terms share a coefficient).** In the second term the names $i$ and $j$ are both summed over, so they may be exchanged; doing so and using the symmetry $g^{ji} = g^{ij}$ of the inverse of a symmetric matrix turns it into $g^{ij}c_{jk}^{\,r}X_rX_i$. Therefore

$$
[C, X_k] = g^{ij}c_{jk}^{\,r}\bigl(X_iX_r + X_rX_i\bigr) .
$$

**Step 4 (lower the index on the structure constant).** By definition $c_{jks} = c_{jk}^{\,l}g_{ls}$, so $c_{jk}^{\,r} = g^{rs}c_{jks}$, and

$$
[C, X_k] = g^{ij}g^{rs}c_{jks}\,\bigl(X_iX_r + X_rX_i\bigr) .
$$

**Step 5 (the symmetry clash).** Call the coefficient $A^{ir} = g^{ij}g^{rs}c_{jks}$, with $k$ held fixed. Exchange $i$ and $r$: $A^{ri} = g^{rj}g^{is}c_{jks}$, and renaming the dummy indices $j \leftrightarrow s$ gives $A^{ri} = g^{rs}g^{ij}c_{skj}$. The lowered structure constants are completely antisymmetric, so $c_{skj} = -c_{jks}$ — the two index strings differ by the transposition of the first and last entries. Hence $A^{ri} = -A^{ir}$: the coefficient is antisymmetric in $i$ and $r$.

Write the operator factor as $S_{ir} = X_iX_r + X_rX_i$, with both indices down so that it contracts with $A^{ir}$; it is, by construction, symmetric in $i$ and $r$. Summing over both indices,

$$
A^{ir}S_{ir} = -A^{ri}S_{ir} = -A^{ir}S_{ri} = -A^{ir}S_{ir} ,
$$

where the second equality is a relabelling of the two dummy indices and the third is the symmetry of $S$. A quantity equal to its own negative vanishes, so $[C, X_k] = 0$ for every $k$. Since the $X_k$ span $\mathfrak{g}$ and $T$ is linear, $C$ commutes with $T_X$ for every $X \in \mathfrak{g}$.
:::

:::proof[Part 2: $C$ is a scalar on an irreducible representation]{provenance=original}
Let $T$ be irreducible on a finite-dimensional complex space $\mathcal{H}$. By Part 1, $C$ commutes with every operator of the represented algebra. :ref[Schur's lemma]{to=group.schur-lemma} in its second form says that an operator commuting with all the operators of an irreducible representation on a finite-dimensional complex space is $\lambda I$ for some scalar $\lambda$. Hence $C = \lambda I$.

For completeness, the mechanism: $\mathcal{H}$ is complex and finite-dimensional, so $C$ has an eigenvalue $\lambda$. The eigenspace $\mathcal{H}_\lambda = \ker(C - \lambda I)$ is non-zero, and it is invariant: if $Cv = \lambda v$ then $C(X_iv) = X_i(Cv) = \lambda X_iv$, using $[C,X_i] = 0$. Irreducibility leaves only $\mathcal{H}_\lambda = \mathcal{H}$, that is $C = \lambda I$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Invertibility of the Cartan metric* is used the moment $g^{ij}$ is written down, in the very definition of $C$. By Cartan's criterion this is semisimplicity, and Hassani flags it explicitly: the construction of Eq. (30.13) "works only for semisimple Lie algebras". The **Poincaré algebra** is his own counterexample, and the failure is instructive. It is not semisimple, so there is no inverse Cartan metric to contract the generators $M_{ij}$ with. Hassani does build a double-indexed metric $g_{ij,kl}$ out of the structure constants and forms $M^2 = g_{ij,kl}M^{ij}M^{kl}$, but that operator commutes with the $M_{ij}$ and *not* with the translation generators $P_i$, so it is not a Casimir of the full algebra. What works instead are $P^2 = \eta^{ij}P_iP_j$ and the fourth-degree invariant $W^2$ built from $W_{i_1\dots i_{n-3}} = \epsilon^{i_1\dots i_{n-3}jkl}M_{jk}P_l$; the general recipe gives neither.
- *Complete antisymmetry of $c_{ijk}$* is used only in Step 5, and it is the whole proof. It is not an extra assumption: it follows from the invariance identity $([X,Y]\mid Z) + ([X,Z]\mid Y) = 0$ satisfied by every Killing form, which is Hassani's Eq. (29.48). Note that antisymmetry of the *unlowered* $c_{ij}^{\,k}$ in its two lower indices — which is immediate from $[X_i,X_j] = -[X_j,X_i]$ — would not be enough; the index that has to move in Step 5 is the raised one, and moving it needs the metric.
- *Irreducibility* is used in Part 2 and nowhere else. Without it $C$ is still a Casimir but need not be a scalar. Take $\mathfrak{su}(2)$ acting on $\mathbb{C} \oplus \mathbb{C}^3$ as the direct sum of the $j=0$ and $j=1$ representations. Then $J^2 = \operatorname{diag}(0,\,2,\,2,\,2)$, which commutes with every generator but is not a multiple of the identity. That is exactly why $C$ is useful: its eigenvalues *separate* the irreducible pieces of a reducible representation, which is how one decomposes a space of states.
- *Finite dimension and a complex scalar field* are used in Part 2, for the existence of an eigenvalue. On a real space a commuting operator can act as a rotation with no real eigenvalue, and on an infinite-dimensional space the spectrum may be empty of eigenvalues; the version of Schur's lemma needed there is the one for unitary representations.
- *$C$ is not unique, and normalisation is a convention.* Any non-zero multiple of a Casimir is a Casimir, and the literature does not agree on which multiple to take. Hassani computes the Cartan metric of $\mathfrak{so}(3)$ to be $g_{ij} = 2\delta_{ij}$, which makes the Killing-normalised Casimir $\tfrac12 L^2$; he then says, in so many words, to ignore the factor of two and call $L^2 = L_1^2+L_2^2+L_3^2$ the Casimir operator, which is the convention of every physics text and the one used here. Always state which normalisation is in force before quoting a numerical eigenvalue.
:::

:::method[Constructing the quadratic Casimir and reading off its eigenvalue]{provenance=original}
1. **Fix a basis and a commutator convention.** Write $[X_i, X_j] = c_{ij}^{\,k}X_k$. Physics texts usually use Hermitian generators and an explicit $i$, as in $[J_i, J_j] = i\epsilon_{ijk}J_k$, so that $c_{ij}^{\,k} = i\epsilon_{ijk}$; mathematics texts usually use anti-Hermitian generators and no $i$. The two differ by a factor of $i$ in every structure constant and hence by a sign in the Cartan metric. Record which you are using.
2. **Compute the Cartan metric** $g_{ij} = c_{il}^{\,k}c_{jk}^{\,l}$, equivalently $\operatorname{tr}(\mathrm{ad}_{X_i}\mathrm{ad}_{X_j})$ with $(\mathrm{ad}_{X_i})^k{}_j = c_{ij}^{\,k}$.
3. **Check it is invertible.** If it is not, the algebra is not semisimple and this recipe does not apply; look instead for invariants built by other contractions, as for the Poincaré algebra.
4. **Invert and contract:** $C = g^{ij}T_{X_i}T_{X_j}$. If $g_{ij} = \kappa\,\delta_{ij}$, this is simply $\kappa^{-1}\sum_i T_{X_i}^2$.
5. **Evaluate the eigenvalue on one convenient vector.** Because $C$ is a scalar on each irreducible piece, applying it to a single well-chosen vector — a highest-weight vector, for which the raising operators give zero — delivers the eigenvalue for the entire multiplet.
6. **Count how many you need.** The number of independent Casimir operators equals the rank. A rank-one algebra is finished at step 5; a rank-two algebra such as $\mathfrak{su}(3)$ needs a second, independent invariant, which is cubic rather than quadratic.
:::

:::example[The angular-momentum algebra, with a number at the end]{provenance=adapted src="hassani-2013:Example 30.3.6, p. 970"}
**(a)** This worked case follows Hassani's treatment of the rotation group. Take his convention: Hermitian generators $J_1,J_2,J_3$ with

$$
[J_i, J_j] = i\,\epsilon_{ijk}J_k , \qquad\text{so}\qquad c_{ij}^{\,k} = i\,\epsilon_{ijk} .
$$

*Step 2.* The Cartan metric is

$$
g_{ij} = c_{il}^{\,k}c_{jk}^{\,l} = (i\epsilon_{ilk})(i\epsilon_{jkl}) = -\epsilon_{ilk}\epsilon_{jkl} = +\epsilon_{ilk}\epsilon_{jlk} = 2\delta_{ij} ,
$$

the third equality using $\epsilon_{jkl} = -\epsilon_{jlk}$ and the last the standard contraction $\epsilon_{ilk}\epsilon_{jlk} = 2\delta_{ij}$.

*Steps 3–4.* $g_{ij}$ is invertible with $g^{ij} = \tfrac12\delta^{ij}$, so

$$
C = \tfrac12\bigl(J_1^2 + J_2^2 + J_3^2\bigr) = \tfrac12 J^2 .
$$

Dropping the factor $\tfrac12$, as Hassani does and as physics does, the Casimir is $J^2$.

*Step 5.* From :ref[the angular momentum algebra]{to=group.angular-momentum}, the irreducible representation labelled $j$ has dimension $2j+1$ and $J^2 = j(j+1)I$ on it. Taking $j = \tfrac32$:

$$
J^2 = \tfrac32\cdot\tfrac52\,I_4 = \tfrac{15}{4}\,I_4 = 3.75\,I_4, \qquad \dim = 2j+1 = 4 .
$$

Building the four-by-four matrices $J_\pm$, $J_3$ explicitly from the ladder-operator formulas and forming $J_1^2+J_2^2+J_3^2$ numerically returns $3.75$ on the diagonal and zero off it, to machine precision, and the same computation at $2j = 1,2,4$ returns $0.75$, $2$ and $6$, matching $j(j+1)$ each time. The Killing-normalised Casimir is half of these: at $j = \tfrac32$ its eigenvalue is $\tfrac{15}{8} = 1.875$.

*Step 6.* $\mathfrak{so}(3)$ has rank one. Indeed a general element is $\mathbf{a}\cdot\mathbf{J}$ for some $\mathbf{a} \in \mathbb{R}^3$, and the commutation relations give $[\mathbf{a}\cdot\mathbf{J}, \mathbf{b}\cdot\mathbf{J}] = i(\mathbf{a}\times\mathbf{b})\cdot\mathbf{J}$, which vanishes exactly when $\mathbf{a}\times\mathbf{b} = \mathbf{0}$, that is when $\mathbf{a}$ and $\mathbf{b}$ are parallel. So no two *independent* elements commute, and a maximal commuting subalgebra is one-dimensional. By Chevalley's theorem $J^2$ is then the only Casimir, and a single label $j$ characterises the irreducible representation. The second label $m$, the eigenvalue of $J_3$, distinguishes vectors *within* the representation, not representations.
:::

:::example[A rank-two case: $\mathfrak{su}(3)$]{provenance=original}
**(b)** Take the Gell-Mann basis $T_a = \lambda_a/2$, $a = 1,\dots,8$, normalised by $\operatorname{tr}(T_aT_b) = \tfrac12\delta_{ab}$, with $[T_a,T_b] = i f_{abc}T_c$ and the non-zero structure constants $f_{123} = 1$, $f_{147} = f_{246} = f_{257} = f_{345} = \tfrac12$, $f_{156} = f_{367} = -\tfrac12$, $f_{458} = f_{678} = \tfrac{\sqrt3}{2}$, up to antisymmetry. Computing $g_{ab} = c_{ac}^{\,d}c_{bd}^{\,c} = -f_{acd}f_{bdc} = f_{acd}f_{bcd}$ numerically from these constants gives

$$
g_{ab} = 3\,\delta_{ab} ,
$$

invertible, so $\mathfrak{su}(3)$ is semisimple and $C = \tfrac13\sum_{a=1}^{8}T_aT_a$. On the defining (fundamental) three-dimensional representation, summing the eight squares gives

$$
\sum_{a=1}^{8}T_aT_a = \frac{4}{3}\,I_3 = 1.3333\ldots\,I_3 , \qquad\text{so}\qquad C = \frac{1}{3}\cdot\frac{4}{3}\,I_3 = \frac{4}{9}\,I_3 .
$$

The number $4/3$ is the one quoted in particle physics as the quadratic Casimir $C_2$ of the fundamental of $\mathrm{SU}(3)$, in the normalisation that omits the inverse Cartan metric; $4/9$ is the Killing-normalised value. Both are scalars, as Part 2 requires. Being a scalar is only the consequence, not the test: a Casimir is also a scalar on a direct sum of copies of one irreducible representation — two copies of the fundamental give $\tfrac43 I_6$ — so the vanishing of the off-diagonal entries confirms Part 2 here but proves nothing about irreducibility on its own.

$\mathfrak{su}(3)$ has rank two — Arfken, Weber and Harris state this, and the commuting pair is visible in the basis above, since $T_3$ and $T_8$ are the two diagonal matrices — so Chevalley's theorem calls for a *second* Casimir, which the quadratic construction cannot supply. It is the cubic invariant $d_{abc}T_aT_bT_c$, built from the totally symmetric coefficients $d_{abc}$ defined by $\{T_a, T_b\} = \tfrac13\delta_{ab}I + d_{abc}T_c$. Two labels, as Arfken, Weber and Harris say, is why the weight diagrams of $\mathrm{SU}(3)$ are two-dimensional while those of $\mathrm{SU}(2)$ lie on a line.
:::

:::application{provenance=original}
**Quantum numbers are Casimir eigenvalues.** When a Hamiltonian is invariant under a symmetry group, it commutes with all the generators, so the energy eigenspaces carry representations of the group; the Casimir operators commute with $H$ as well and can be diagonalised alongside it. Their eigenvalues are then exactly the conserved labels a state is given. For rotational symmetry this is the pair $(j, m)$: $j$ comes from the single Casimir $J^2$ and names the multiplet, $m$ from $J_3$ and names the state within it, and the energy cannot depend on $m$ — which is the origin of the $(2j+1)$-fold degeneracy of a rotationally invariant level, lifted only when a field picks out an axis.

**The equations of mathematical physics are Casimir eigenvalue equations.** Hassani makes this the point of the section. If the symmetry group acts on a manifold $M$ and the carrier space is $L^2(M)$, the generators become first-order differential operators and the Casimirs become higher-order ones; the statement that a Casimir acts as a multiple of the identity on an irreducible subspace is then a differential equation, $C_\alpha f = \lambda(\alpha) f$, whose solutions transform among themselves under the symmetry. For $\mathrm{SO}(3)$ acting on the sphere, $C = L^2$ is the angular part of the Laplacian and the equation $L^2 Y = l(l+1)Y$ is the equation satisfied by :ref[the spherical harmonics]{to=spec.spherical-harmonics}, with the $2l+1$ functions $Y_l^m$ at fixed $l$ spanning the $l$-th irreducible subspace. Hassani notes that Bessel, hypergeometric and confluent hypergeometric functions arise the same way, as matrix elements in representations of a handful of small Lie groups.

**Mass and spin.** For relativistic particles the symmetry algebra is the Poincaré algebra, which is not semisimple, so the quadratic construction of this unit does not apply; Hassani's §30.3.4 finds instead the two invariants $P^2$ and $W^2$. Their eigenvalues are what the words *mass* and *spin* mean: an elementary particle is, operationally, an irreducible unitary representation of the Poincaré group, and the two Casimirs are the only labels it carries. Everything else — charge, colour, flavour — is a Casimir label of an internal group, the quadratic Casimir of $\mathrm{SU}(3)$ in example (b) being the one that separates the colour multiplets and that appears directly in the strong coupling of a quark, as the factor $C_2 = 4/3$ in one-gluon exchange.
:::
