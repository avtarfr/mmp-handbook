---
id: group.group-actions
title: Group actions
kind: theorem
level: core
summary: Gives the vocabulary of a group acting on a set — orbit, stabilizer, transitivity — proves that the orbit of a point is in bijection with the cosets of its stabilizer, and derives the counting lemma that averages fixed points to count orbits.
prereqs: [group.groups-subgroups, group.cosets-lagrange]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§1.7 (definition of an action, the permutation representation) pp. 41-42; §4.1 (kernel, stabilizer, faithfulness; Prop. 2 and the definition of orbit and transitivity) pp. 112-115; §19.1, Exercise 8 (Burnside's lemma, with the attribution to Frobenius) p. 877"
    pages: "41-42, 112-115, 877"
    role: the axioms of an action; the associated homomorphism into the symmetric group; the orbit relation and the bijection between an orbit and the cosets of a stabilizer; the statement of the counting lemma
  - work: hassani-2013
    loc: "§23.3, Def. 23.3.1 (left and right action), Def. 23.3.3 (orbit, stabilizer, transitive, free, effective) and Box 23.3.4 (the stabilizer is a subgroup), pp. 713-714; the SO(2) examples, pp. 714-715"
    pages: "713-715"
    role: the terminology free and effective; the rotation-group examples used in the remark
  - work: lee-2013
    loc: "Ch. 7, 'Group Actions and Equivariant Maps', pp. 161-163 (left and right actions, the trick converting one into the other, isotropy groups, the GL(n,R) and O(n) examples); Ch. 21, p. 541 (orbit space M/G)"
    pages: "161-163, 541"
    role: left versus right actions and the dictionary between them; the orbit space; the orbits of O(n) acting on R^n
---

:::definition[Actions, orbits and stabilizers]{provenance=adapted src="dummit-foote-2004:§1.7, p. 41 and §4.1, pp. 112-115; hassani-2013:§23.3, Defs 23.3.1 and 23.3.3, pp. 713-714; lee-2013:Ch. 7, pp. 161-162"}
Let $G$ be a group with identity $e$ and let $A$ be a non-empty set. A **left action** of $G$ on $A$ is a map $G \times A \to A$, written $(g, a) \mapsto g \cdot a$, such that

$$
g_1 \cdot (g_2 \cdot a) = (g_1 g_2) \cdot a
\qquad \text{and} \qquad
e \cdot a = a
$$

for all $g_1, g_2 \in G$ and all $a \in A$. We then say that $G$ **acts** on $A$. A **right action** is a map $A \times G \to A$, written $(a,g) \mapsto a \cdot g$, with $(a \cdot g_1)\cdot g_2 = a \cdot (g_1g_2)$ and $a \cdot e = a$.

Fix an action of $G$ on $A$. For $g \in G$ write $\sigma_g \colon A \to A$ for the map $\sigma_g(a) = g \cdot a$. The following names are used throughout.

- The **orbit** of $a \in A$ is $G \cdot a = \{\, g \cdot a : g \in G \,\}$, the set of points reachable from $a$. The set of orbits is written $A/G$ and called the **orbit space**.
- The **stabilizer** of $a$ is $G_a = \{\, g \in G : g \cdot a = a \,\}$, also called the isotropy group or the little group at $a$.
- The **kernel** of the action is $\{\, g \in G : g \cdot a = a \text{ for all } a \in A \,\} = \bigcap_{a \in A} G_a$. The action is **faithful** (or effective) if its kernel is $\{e\}$, and **free** if $G_a = \{e\}$ for every $a$.
- The action is **transitive** if there is only one orbit: for any $a, b \in A$ there is a $g \in G$ with $g \cdot a = b$.
- For $g \in G$, the **fixed-point set** is $\mathrm{Fix}(g) = \{\, a \in A : g \cdot a = a \,\}$.

Two elementary facts are used below. First, each $\sigma_g$ is a bijection of $A$, with inverse $\sigma_{g^{-1}}$: indeed $\sigma_{g^{-1}}(\sigma_g(a)) = g^{-1}\cdot(g \cdot a) = (g^{-1}g)\cdot a = e \cdot a = a$ by the first and then the second axiom, and the same computation with $g$ and $g^{-1}$ exchanged gives $\sigma_g \circ \sigma_{g^{-1}} = \mathrm{id}$. Second, $g \mapsto \sigma_g$ is a homomorphism from $G$ into the group $S_A$ of all bijections of $A$ (:ref[]{to=group.symmetric-group}), because the first axiom says precisely $\sigma_{g_1g_2} = \sigma_{g_1}\circ\sigma_{g_2}$; this homomorphism is the **permutation representation** afforded by the action, and its kernel is the kernel of the action. In particular each $G_a$ is a subgroup of $G$: it is the preimage of the subgroup $\{\,\pi \in S_A : \pi(a) = a\,\}$, or directly, $e \in G_a$, and if $g, h$ fix $a$ then $(gh)\cdot a = g\cdot(h\cdot a) = g \cdot a = a$ and $g^{-1}\cdot a = g^{-1}\cdot (g\cdot a) = a$.
:::

:::statement[Orbit–stabilizer theorem]{provenance=adapted src="dummit-foote-2004:§4.1, Prop. 2, pp. 114-115"}
Let a group $G$ act on a non-empty set $A$.

1. The relation $a \sim b$ defined by "$b = g \cdot a$ for some $g \in G$" is an equivalence relation on $A$, and its equivalence classes are exactly the orbits. Hence the orbits **partition** $A$.
2. For each $a \in A$ the map
$$
\Phi \colon \{\text{left cosets of } G_a \text{ in } G\} \longrightarrow G \cdot a ,
\qquad \Phi(g\,G_a) = g \cdot a ,
$$
is a well-defined bijection. Consequently
$$
\lvert G \cdot a \rvert = [\,G : G_a\,] ,
$$
the index of the stabilizer, whether or not $G$ is finite.
3. If $G$ is finite then $\lvert G \cdot a\rvert$ divides $\lvert G\rvert$ and
$$
\lvert G \cdot a \rvert \cdot \lvert G_a \rvert = \lvert G \rvert .
$$
:::

:::idea{provenance=original}
A point of the orbit of $a$ is named by a group element that carries $a$ to it, and two group elements give the same point exactly when they differ by something that leaves $a$ alone. "Differing by an element of $G_a$" is precisely the relation that defines the left cosets of $G_a$, so the names and the points match up one for one. Part 3 is then part 2 read through :ref[Lagrange's theorem]{to=group.cosets-lagrange}, which says that the number of cosets times the size of the subgroup is the order of the group.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§4.1, Prop. 2, pp. 114-115"}
**Part 1: $\sim$ is an equivalence relation.**

- *Reflexive.* $a = e \cdot a$ by the second axiom, so $a \sim a$.
- *Symmetric.* If $b = g \cdot a$ then acting by $g^{-1}$ and using the first axiom, $g^{-1}\cdot b = (g^{-1}g)\cdot a = e \cdot a = a$, so $b \sim a$.
- *Transitive.* If $b = g \cdot a$ and $c = h \cdot b$ then $c = h \cdot (g \cdot a) = (hg)\cdot a$ by the first axiom, and $hg \in G$ because $G$ is closed under multiplication; so $a \sim c$.

The class of $a$ is $\{\,b : b = g\cdot a \text{ for some } g\,\} = G\cdot a$, which is the orbit. The classes of an equivalence relation are disjoint and cover the set, which is the assertion that the orbits partition $A$.

**Part 2: $\Phi$ is well defined and injective.** For $g, h \in G$,
$$
g \cdot a = h \cdot a
\iff h^{-1}\cdot (g\cdot a) = h^{-1}\cdot(h \cdot a)
\iff (h^{-1}g)\cdot a = a
\iff h^{-1}g \in G_a
\iff g\,G_a = h\,G_a .
$$
The first equivalence is obtained by acting with $h^{-1}$, which is reversible because $\sigma_{h^{-1}}$ is a bijection; the second uses the first axiom on both sides together with $e\cdot a = a$; the third is the definition of $G_a$; the fourth is the standard criterion for equality of left cosets (:ref[]{to=group.cosets-lagrange}). Reading the chain from right to left says that $\Phi$ does not depend on the coset representative, so it is well defined; reading it from left to right says that $\Phi$ is injective.

**Part 2: $\Phi$ is surjective.** A point of the orbit is by definition $g\cdot a$ for some $g \in G$, and that point is the image $\Phi(g\,G_a)$.

Hence $\Phi$ is a bijection, and the number of elements of $G \cdot a$ equals the number of left cosets of $G_a$, which is by definition the index $[G : G_a]$.

**Part 3.** $G_a$ is a subgroup of $G$, as checked in the definition above. If $G$ is finite, Lagrange's theorem gives $\lvert G\rvert = [G:G_a]\,\lvert G_a\rvert$, and substituting $[G:G_a] = \lvert G\cdot a\rvert$ from part 2 gives the displayed product; in particular $\lvert G \cdot a\rvert$ divides $\lvert G\rvert$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Both axioms are needed, and each does a separate job.** The axiom $e \cdot a = a$ is what makes $\sim$ reflexive and what puts $e$ in $G_a$; without it the "action" $g \cdot a = a_0$ for a fixed $a_0$ satisfies $g_1\cdot(g_2\cdot a) = a_0 = (g_1g_2)\cdot a$, yet no point other than $a_0$ lies in its own orbit and the partition statement fails. The composition axiom is used at every other step: in symmetry and transitivity of $\sim$, in the proof that $\sigma_g$ is invertible, and in the middle equivalence of the chain defining $\Phi$.

**Finiteness is used only in part 3.** Parts 1 and 2 hold for any group and any set: $[G:G_a]$ is defined as the cardinality of the set of cosets, and the bijection $\Phi$ is a statement about cardinalities. The *product* formula needs $\lvert G \rvert$ to be a number. For instance $G = \mathbb{Z}$ acting on $A = \mathbb{Z}$ by $n \cdot a = n + a$ has one orbit and trivial stabilizers, so part 2 reads $\lvert A \rvert = [\mathbb{Z}:\{0\}]$, correctly, while "$\lvert G\cdot a\rvert \cdot \lvert G_a\rvert = \lvert G\rvert$" says only $\infty \cdot 1 = \infty$.

**Left cosets, not right.** The chain in the proof produces the condition $h^{-1}g \in G_a$, which is the criterion for $gG_a = hG_a$. Had we written $\Phi(G_a g) = g\cdot a$ the map would not be well defined in general, because $G_a g = G_a h$ means $gh^{-1} \in G_a$, a different condition unless $G_a$ is normal. For a right action the roles are exchanged and right cosets appear. :cite{work=lee-2013 loc="Ch. 7, p. 162"} notes that the two kinds of action carry the same information: given a right action, $g \cdot a := a \cdot g^{-1}$ is a left action, and conversely; the inverse is what repairs the order of composition.

**The stabilizers along an orbit are conjugate, not equal.** If $b = g\cdot a$ then $G_b = g\,G_a\,g^{-1}$, since $h \cdot b = b \iff (g^{-1}hg)\cdot a = a$. So "the" stabilizer of an orbit is only a conjugacy class of subgroups (:ref[]{to=group.conjugacy-classes}); its order, and hence the orbit-stabilizer count, is nevertheless the same at every point of the orbit.
:::

:::statement[The counting lemma (Burnside, Cauchy–Frobenius)]{provenance=adapted src="dummit-foote-2004:§19.1, Exercise 8, p. 877"}
Let a **finite** group $G$ act on a **finite** set $A$, and let $t$ be the number of orbits. Then
$$
t = \frac{1}{\lvert G\rvert}\sum_{g \in G} \lvert \mathrm{Fix}(g)\rvert :
$$
the number of orbits is the average number of points left fixed, the average being taken over the whole group.

:cite{work=dummit-foote-2004 loc="§19.1, Exercise 8, p. 877"} states the identity in the equivalent product form $t\lvert G\rvert = \sum_{g\in G}\lvert\mathrm{Fix}(g)\rvert$ for a subgroup $G \leq S_n$ acting on $\{1, \dots, n\}$, and records that the result is often called Burnside's lemma although it goes back to Frobenius. The proof below is for a general finite group acting on a general finite set; the case Dummit and Foote state is the case $A = \{1,\dots,n\}$.
:::

:::idea{provenance=original}
Count the pairs $(g, a)$ with $g \cdot a = a$ in two ways. Summing first over group elements gives $\sum_g \lvert\mathrm{Fix}(g)\rvert$; summing first over points of the set gives $\sum_a \lvert G_a\rvert$. The orbit–stabilizer theorem converts each $\lvert G_a\rvert$ into $\lvert G\rvert/\lvert G\cdot a\rvert$, and then the points of one orbit contribute $\lvert G\rvert$ between them, once per orbit.
:::

:::proof{provenance=original}
Let
$$
S = \{\,(g,a) \in G \times A : g\cdot a = a \,\} ,
$$
a finite set because $G$ and $A$ are finite.

**Counting $S$ by its first coordinate.** For each fixed $g$, the pairs in $S$ with that first coordinate are $(g, a)$ with $a \in \mathrm{Fix}(g)$, so
$$
\lvert S\rvert = \sum_{g \in G} \lvert \mathrm{Fix}(g)\rvert .
$$

**Counting $S$ by its second coordinate.** For each fixed $a$, the pairs in $S$ with that second coordinate are $(g,a)$ with $g \in G_a$, so
$$
\lvert S\rvert = \sum_{a \in A} \lvert G_a\rvert .
$$

**Replacing stabilizers by orbit sizes.** $G$ is finite, so part 3 of the orbit–stabilizer theorem applies at every $a$ and gives $\lvert G_a\rvert = \lvert G\rvert / \lvert G\cdot a\rvert$. Hence
$$
\lvert S\rvert = \sum_{a \in A} \frac{\lvert G\rvert}{\lvert G\cdot a\rvert}
= \lvert G\rvert \sum_{a\in A} \frac{1}{\lvert G\cdot a\rvert} .
$$

**Grouping the sum by orbits.** By part 1 the orbits partition $A$, so the last sum may be taken orbit by orbit. Let $O_1, \dots, O_t$ be the distinct orbits. Every $a$ in the orbit $O_i$ has $G\cdot a = O_i$, so it contributes $1/\lvert O_i\rvert$, and there are $\lvert O_i\rvert$ such points:
$$
\sum_{a \in A} \frac{1}{\lvert G\cdot a\rvert}
= \sum_{i=1}^{t} \sum_{a \in O_i} \frac{1}{\lvert O_i\rvert}
= \sum_{i=1}^{t} \lvert O_i\rvert \cdot \frac{1}{\lvert O_i\rvert}
= t .
$$

Therefore $\lvert S\rvert = t\,\lvert G\rvert$. Equating the two counts of $\lvert S\rvert$ and dividing by $\lvert G\rvert \neq 0$ gives the stated formula. $\square$
:::

:::remark[Where the hypotheses are used in the counting lemma]{provenance=original}
**$G$ finite** is used twice: to apply the product form of the orbit–stabilizer theorem, and to divide by $\lvert G\rvert$ at the end. **$A$ finite** is used to make $\lvert S \rvert$ and the sum over $a$ finite, so that the two counts may be equated and rearranged. Both are essential. Take $G = \mathbb{Z}$ acting on $A = \mathbb{Z}$ by translation: there is one orbit, $\mathrm{Fix}(0) = \mathbb{Z}$ and $\mathrm{Fix}(n) = \emptyset$ for $n \neq 0$, and the right-hand side is the meaningless $\infty/\infty$. Take $G = \{\pm 1\}$ acting on $A = \mathbb{Z}$ by $\varepsilon \cdot a = \varepsilon a$: here $A$ is infinite, $\mathrm{Fix}(1) = \mathbb{Z}$, $\mathrm{Fix}(-1) = \{0\}$, and again the average is not defined, although the number of orbits is.

**Nothing requires the action to be faithful, free or transitive.** Elements acting trivially simply contribute $\lvert A\rvert$ each to the sum, which is correct: if the kernel has order $k$ then the action factors through a faithful action of a group of order $\lvert G\rvert/k$ on $A$, and both sides of the identity are multiplied by $k$.
:::

:::method[Counting configurations up to a symmetry]{provenance=original}
To count the configurations of a finite object that are distinct once a symmetry group is allowed to move them:

1. **Identify the set $A$.** List the configurations as *labelled* objects, so that $A$ is a plain finite set with no symmetry quotient taken yet. For colourings of $n$ positions with $q$ colours, $\lvert A\rvert = q^n$.
2. **Identify the group $G$ and check it acts.** Verify the two axioms, usually by exhibiting $G$ as a group of symmetries of the underlying object; then $g$ acts on a configuration by moving its positions.
3. **Find $\lvert G\rvert$,** often most easily by the orbit–stabilizer theorem applied to some convenient set of geometric features: $\lvert G\rvert = (\text{size of one orbit}) \times (\text{order of the stabilizer of one of its points})$.
4. **Sort $G$ into types** of element with the same cycle structure on the $n$ positions, and record how many elements each type has. (Elements in the same :ref[conjugacy class]{to=group.conjugacy-classes} always have the same cycle structure, so the classes are a safe sorting.)
5. **Compute $\lvert\mathrm{Fix}(g)\rvert$ for one element of each type.** A colouring is fixed by $g$ exactly when it is constant on every cycle of $g$ acting on the positions, so $\lvert \mathrm{Fix}(g)\rvert = q^{\,c(g)}$ where $c(g)$ is the number of cycles, fixed positions included.
6. **Average.** Add up $(\text{number of elements of the type}) \times q^{c(g)}$ over the types and divide by $\lvert G\rvert$. The answer is an integer; if it is not, a cycle count or a class size is wrong.
:::

:::example[Colouring the faces of a cube with three colours]{provenance=original}
How many ways are there to paint the six faces of a cube, each face one of three colours, if two paintings are the same when one can be rotated into the other?

**Step 1: the set.** $A$ is the set of colourings of the six *labelled* faces, so $\lvert A\rvert = 3^6 = 729$.

**Step 2: the group.** $G$ is the group of rotations of the cube (rotations only, not reflections), acting on $A$ by $(g\cdot f)(\text{face}) = f(g^{-1}\,\text{face})$; this is a left action because the inverse reverses the order of composition twice.

**Step 3: the order of $G$, by orbit–stabilizer.** Let $G$ act on the six faces. The action is transitive, because a face can be brought to any other by a quarter- or half-turn, so the orbit of a face has $6$ elements. The rotations fixing a given face are the four turns through $0, \pi/2, \pi, 3\pi/2$ about the axis through that face and the opposite one, so the stabilizer has order $4$. By part 3 of the orbit–stabilizer theorem,
$$
\lvert G\rvert = 6 \times 4 = 24 .
$$

**Step 4: the types of rotation and their cycle structures on the faces.**

| Type of rotation | Number | Cycles on the 6 faces | $c(g)$ | $3^{c(g)}$ |
|---|---|---|---|---|
| identity | $1$ | six fixed faces | $6$ | $729$ |
| $\pm\pi/2$ about a face axis | $3 \times 2 = 6$ | $2$ fixed, one $4$-cycle | $3$ | $27$ |
| $\pi$ about a face axis | $3$ | $2$ fixed, two $2$-cycles | $4$ | $81$ |
| $\pm 2\pi/3$ about a vertex axis | $4 \times 2 = 8$ | two $3$-cycles | $2$ | $9$ |
| $\pi$ about an edge axis | $6$ | three $2$-cycles | $3$ | $27$ |

The counts add to $1 + 6 + 3 + 8 + 6 = 24 = \lvert G\rvert$, which checks Step 3 and confirms that no rotation has been missed. (There are $3$ face axes, $4$ body diagonals and $6$ pairs of opposite edges.)

**Step 5: the fixed colourings.** A colouring is fixed by $g$ precisely when every face of a cycle of $g$ gets the same colour, so there are $3$ free choices per cycle and $\lvert\mathrm{Fix}(g)\rvert = 3^{c(g)}$, as tabulated.

**Step 6: the average.**
$$
\sum_{g\in G}\lvert\mathrm{Fix}(g)\rvert
= 1\cdot 729 + 6\cdot 27 + 3\cdot 81 + 8\cdot 9 + 6\cdot 27
= 729 + 162 + 243 + 72 + 162 = 1368 ,
$$
so the number of orbits is
$$
t = \frac{1368}{24} = 57 .
$$

**There are $57$ distinct three-colourings of the cube's faces.**

**Checks.** First, $57$ is an integer, as it must be. Second, the same six steps with $q$ colours in place of $3$ give the polynomial
$$
t(q) = \frac{q^6 + 3q^4 + 12 q^3 + 8 q^2}{24} ,
$$
the four terms coming from the five rows of the table with the two rows of three cycles combined. At $q = 1$ this must give $1$, since there is only one colouring at all, and indeed $(1 + 3 + 12 + 8)/24 = 1$. At $q = 2$ it gives $(64 + 48 + 96 + 32)/24 = 240/24 = 10$, the known number of distinct ways to paint a cube's faces black or white. At $q = 3$ it returns $1368/24 = 57$.
:::

:::application{provenance=original}
**Degeneracy is an orbit, and symmetry explains it.** If a Hamiltonian commutes with every element of a symmetry group $G$, then $G$ acts on each energy eigenspace, and the states of a degenerate multiplet form orbits under that action. When the action on a chosen state is understood geometrically, the orbit–stabilizer theorem gives the size of the multiplet directly as $\lvert G\rvert$ divided by the order of the subgroup that leaves the state alone — the "little group" of the state. The same arithmetic organises the splitting of a level when a perturbation shrinks $G$ to a subgroup $H$: the single $G$-orbit breaks into $H$-orbits, and the orbit–stabilizer theorem applied to $H$ gives the sizes of the pieces. The representation-theoretic refinement of this bookkeeping is the subject of :ref[]{to=group.representations} and :ref[]{to=group.orthogonality-characters}.

**Site multiplicities in a crystal.** A crystallographic point group $G$ acts on the positions in a unit cell. The number of positions equivalent to a given one is $\lvert G \rvert / \lvert G_a\rvert$, where $G_a$ is the site-symmetry group of that position: an atom on a general position has $G_a = \{e\}$ and multiplicity $\lvert G\rvert$, while an atom sitting on a mirror plane or a rotation axis has a larger $G_a$ and correspondingly fewer copies. This is exactly the orbit–stabilizer theorem and it is how the multiplicities in crystallographic tables are generated; see :ref[]{to=group.point-groups}.

**Counting distinct structures.** The counting lemma is the standard tool for enumerating configurations that symmetry makes indistinguishable: substituted isomers of a molecule (how many distinct dichloro-derivatives of a given skeleton exist), occupations of the sites of a crystal lattice by two species of atom in alloy thermodynamics, and distinct spin configurations on a symmetric cluster in statistical mechanics. In each case one is counting orbits of a finite symmetry group on a finite set of labelled configurations, and the average-of-fixed-points formula turns the problem into a short sum over the symmetry types, as in the worked example.

**Homogeneous spaces.** For continuous groups the bijection of part 2 survives as a diffeomorphism between an orbit and a coset space. The rotation group $\mathrm{SO}(3)$ acts transitively on the unit sphere, and the rotations fixing the north pole are the rotations about the vertical axis, a copy of $\mathrm{SO}(2)$; so the sphere is $\mathrm{SO}(3)/\mathrm{SO}(2)$. :cite{work=lee-2013 loc="Ch. 21, p. 541"} develops the orbit space $M/G$ in this setting, and :ref[]{to=group.so3-su2} takes up the rotation group itself. The same description underlies the identification of the space of pure spin-$\tfrac12$ states with the Bloch sphere $\mathrm{SU}(2)/\mathrm{U}(1)$, and the classification of vacua in a theory whose symmetry $G$ is spontaneously broken to a subgroup $H$: the degenerate vacua form one orbit, so the vacuum manifold is $G/H$.
:::
