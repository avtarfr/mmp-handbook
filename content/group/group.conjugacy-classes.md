---
id: group.conjugacy-classes
title: Conjugacy classes
kind: definition
level: core
summary: Defines conjugation, conjugacy classes, the centralizer and the centre, shows that a class has as many elements as the centralizer has cosets, and assembles these counts into the class equation.
prereqs: [group.groups-subgroups, group.cosets-lagrange, group.group-actions]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§4.3, pp. 122-125: conjugation as an action (p. 122), the definition of conjugate elements and conjugacy classes and the characterisation of one-element classes (p. 123), Prop. 6 on the number of conjugates (p. 123), Thm 7, the class equation (p. 124), and Thm 8, non-trivial centre of a p-group (p. 125)"
    pages: "122-125"
    role: the conjugation action; class size as the index of the centralizer; the statement and proof route of the class equation; the corollary on groups of prime-power order
  - work: hassani-2013
    loc: "§23.2, Def. 23.2.18 (conjugate, conjugacy class) and Box 23.2.20 (rotations through equal angles are conjugate), p. 711; §23.4, Thm 23.4.12 (permutations are conjugate iff they have the same cycle structure), p. 719"
    pages: "711, 719"
    role: the definition and the statement that classes are the equivalence classes of conjugacy; the rotation-group example; conjugacy in the symmetric group
  - work: rhb-2006
    loc: "§28.7.3 'Conjugates and classes', pp. 1068-1069: conjugacy as an equivalence relation, the identity in a class by itself, and the centre as an Abelian subgroup"
    pages: "1068-1069"
    role: the equivalence-relation argument and the identification of the centre as the union of the one-element classes; the opposite convention for conjugation
---

:::definition[Conjugation, classes, centralizer, centre]{provenance=adapted src="dummit-foote-2004:§4.3, pp. 122-123; hassani-2013:Def. 23.2.18, p. 711; rhb-2006:§28.7.3, pp. 1068-1069"}
Let $G$ be a group. For $g, x \in G$ the element
$$
{}^{g}x \;=\; g\,x\,g^{-1}
$$
is the **conjugate of $x$ by $g$**, and $x, y \in G$ are **conjugate** if $y = gxg^{-1}$ for some $g \in G$. The set
$$
K_x \;=\; \{\, g x g^{-1} : g \in G \,\}
$$
of all elements conjugate to $x$ is the **conjugacy class** of $x$.

Two subgroups attached to $x$ record how much of $G$ fails to move it:

- the **centralizer** $C_G(x) = \{\, g\in G : gx = xg \,\}$, the elements that commute with $x$;
- the **centre** $Z(G) = \{\, z \in G : zg = gz \text{ for all } g \in G \,\} = \bigcap_{x \in G} C_G(x)$, the elements that commute with everything.

More generally, for a subset $S \subseteq G$ one writes $gSg^{-1} = \{\,gsg^{-1} : s \in S\,\}$, calls $S$ and $T$ **conjugate subsets** when $T = gSg^{-1}$ for some $g$, and calls $N_G(S) = \{\, g \in G : gSg^{-1} = S \,\}$ the **normalizer** of $S$; a subgroup is normal exactly when its normalizer is all of $G$ (:ref[]{to=group.homomorphisms-quotients}). A function $f$ on $G$ with $f(gxg^{-1}) = f(x)$ for all $g, x$, that is, a function constant on each class, is a **class function**.

**Convention.** We conjugate on the left, $x \mapsto gxg^{-1}$, following :cite{work=dummit-foote-2004 loc="§4.3, p. 122"} and :cite{work=hassani-2013 loc="Def. 23.2.18, p. 711"}. :cite{work=rhb-2006 loc="§28.7.3, p. 1068"} writes the relation the other way round, $Y = G_i^{-1} X G_i$. The two give the same classes, since $G_i^{-1} X G_i$ is the conjugate of $X$ by $G_i^{-1}$, but they differ by an inverse in every intermediate formula, so a convention must be fixed before any computation.
:::

:::statement[Classes and centralizers]{provenance=adapted src="dummit-foote-2004:§4.3, pp. 122-123, Prop. 6; rhb-2006:§28.7.3, pp. 1068-1069"}
Let $G$ be a group.

1. $g \cdot x = gxg^{-1}$ defines an action of $G$ on the set $G$, and its orbits are the conjugacy classes. In particular the classes **partition** $G$: distinct classes are disjoint and every element lies in one.
2. The stabilizer of $x$ under this action is the centralizer $C_G(x)$, which is therefore a subgroup, and
$$
\lvert K_x\rvert \;=\; [\,G : C_G(x)\,] .
$$
If $G$ is finite, $\lvert K_x\rvert$ divides $\lvert G\rvert$ and $\lvert K_x\rvert\,\lvert C_G(x)\rvert = \lvert G\rvert$.
3. $\lvert K_x\rvert = 1$, that is $K_x = \{x\}$, if and only if $x \in Z(G)$. The centre is an abelian normal subgroup of $G$, and it is the union of the one-element classes.
4. Conjugate elements have the same order, and conjugation by a fixed $g$ is an automorphism of $G$.
:::

:::idea{provenance=original}
A group can be made to act on itself in more than one way, and conjugation is the way that sees the group's internal structure rather than just its size. Once it is recognised as an action, everything in :ref[]{to=group.group-actions} applies with no further work: orbits are classes, stabilizers are centralizers, and the orbit–stabilizer theorem turns the question "how big is this class?" into the question "how much of the group commutes with this element?". The elements with the largest possible centralizer, namely all of $G$, are exactly the ones whose class is as small as possible.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§4.3, pp. 122-123"}
**Part 1: the axioms.** For $g_1, g_2, x \in G$,
$$
g_1\cdot(g_2\cdot x) = g_1(g_2xg_2^{-1})g_1^{-1} = (g_1g_2)\,x\,(g_1g_2)^{-1} = (g_1g_2)\cdot x ,
$$
where the middle equality uses associativity and $(g_1g_2)^{-1} = g_2^{-1}g_1^{-1}$. Also $e \cdot x = exe^{-1} = x$. So the two axioms of a left action hold. The orbit of $x$ is $\{gxg^{-1} : g \in G\} = K_x$ by definition, and orbits partition the set acted on, by part 1 of the orbit–stabilizer theorem.

**Part 2: the stabilizer.** By definition the stabilizer of $x$ is
$$
G_x = \{\, g \in G : gxg^{-1} = x \,\} = \{\, g\in G : gx = xg\,\} = C_G(x) ,
$$
the middle step being multiplication on the right by $g$. A stabilizer is a subgroup, so $C_G(x)$ is one, and part 2 of the orbit–stabilizer theorem gives $\lvert K_x\rvert = [G : C_G(x)]$. When $G$ is finite, :ref[Lagrange's theorem]{to=group.cosets-lagrange} turns this into $\lvert K_x\rvert\,\lvert C_G(x)\rvert = \lvert G\rvert$, so $\lvert K_x\rvert$ divides $\lvert G\rvert$.

**Part 3: one-element classes.** $K_x = \{x\}$ says $gxg^{-1} = x$ for every $g \in G$, that is $gx = xg$ for every $g$, that is $x \in Z(G)$; and conversely. For the rest: $e \in Z(G)$; if $z, w$ commute with every $g$ then so does $zw$, since $(zw)g = z(wg) = z(gw) = (zg)w = g(zw)$; and $zg = gz$ gives $gz^{-1} = z^{-1}g$ on multiplying by $z^{-1}$ on both sides. So $Z(G)$ is a subgroup, abelian because its elements commute with everything and in particular with each other, and normal because $gzg^{-1} = zgg^{-1} = z \in Z(G)$ for $z \in Z(G)$. Finally, $Z(G)$ is the union of the classes of its elements, each of which is a single point by the first sentence.

**Part 4.** Write $\gamma_g(x) = gxg^{-1}$. Then $\gamma_g(x)\gamma_g(y) = gxg^{-1}gyg^{-1} = g(xy)g^{-1} = \gamma_g(xy)$, so $\gamma_g$ is a homomorphism, and it is a bijection with inverse $\gamma_{g^{-1}}$; hence it is an automorphism. By induction $(gxg^{-1})^n = gx^ng^{-1}$, because the inner factors $g^{-1}g$ cancel in pairs; so $(gxg^{-1})^n = e$ if and only if $gx^ng^{-1} = e$, that is $x^n = e$. The two elements therefore satisfy exactly the same power relations and have the same order. $\square$
:::

:::statement[The class equation]{provenance=adapted src="dummit-foote-2004:§4.3, Thm 7, p. 124"}
Take $G$ finite. Its classes of size one are the central elements, by part 3; write $K_{g_1}, \dots, K_{g_r}$ for the remaining classes, picking one $g_i$ out of each. Adding the sizes of all the classes then gives the **class equation**
$$
\lvert G\rvert \;=\; \lvert Z(G)\rvert \;+\; \sum_{i=1}^{r} \bigl[\,G : C_G(g_i)\,\bigr] ,
$$
in which each index appearing in the sum exceeds $1$ and divides $\lvert G\rvert$.
:::

:::idea{provenance=original}
Add up the sizes of the classes. The classes of size one are precisely the central elements, and together they contribute $\lvert Z(G)\rvert$; each remaining class contributes its size, which part 2 of the previous statement writes as an index. That is the whole argument, and its force comes from the last sentence: the right-hand side is a sum of divisors of $\lvert G\rvert$, each bigger than $1$, which is a strong arithmetic constraint on how a finite group can be built.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§4.3, Thm 7, p. 124"}
By part 1 of the previous statement the classes partition $G$, so $\lvert G\rvert$ is the sum of the sizes of all the distinct classes.

Split that sum in two. By part 3, a class has one element exactly when that element is central, so the one-element classes are $\{z\}$ for $z \in Z(G)$ and there are $\lvert Z(G)\rvert$ of them, contributing $\lvert Z(G)\rvert$ in total. Every other class has at least two elements and so is disjoint from the centre; let $K_{g_1}, \dots, K_{g_r}$ be these, with the $g_i$ chosen one from each.

By part 2, $\lvert K_{g_i}\rvert = [G : C_G(g_i)]$. Hence
$$
\lvert G\rvert = \sum_{z \in Z(G)} 1 \;+\; \sum_{i=1}^{r}\lvert K_{g_i}\rvert = \lvert Z(G)\rvert + \sum_{i=1}^{r}\bigl[G : C_G(g_i)\bigr] .
$$
Each index is a divisor of $\lvert G\rvert$ by Lagrange's theorem, and it exceeds $1$ because $g_i \notin Z(G)$ forces $C_G(g_i) \neq G$. $\square$
:::

:::statement[Prime-power order forces a non-trivial centre]{provenance=adapted src="dummit-foote-2004:§4.3, Thm 8, p. 125"}
Suppose $\lvert P\rvert = p^{a}$, with $p$ prime and $a \geq 1$. Then $Z(P)$ contains something besides the identity, so $\lvert Z(P)\rvert \geq p$.
:::

:::idea{provenance=original}
Read the class equation modulo $p$. Every non-central index divides $p^{a}$ and exceeds $1$, so it is a positive power of $p$; the order $\lvert P\rvert$ is a positive power of $p$ as well. That leaves $\lvert Z(P)\rvert$ as the only term in the equation not yet known to be divisible by $p$ — and a sum in which all but one term is divisible by $p$ can equal a multiple of $p$ only if the remaining term is too. Since the centre is never empty, being divisible by $p$ forces it to have at least $p$ elements.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§4.3, Thm 8, p. 125"}
Apply the class equation to $P$:
$$
p^{a} = \lvert Z(P)\rvert + \sum_{i=1}^{r}\bigl[P : C_P(g_i)\bigr] .
$$
For each $i$ the index $[P:C_P(g_i)]$ divides $p^a$ and is greater than $1$, so it is $p^{b_i}$ with $b_i \geq 1$ and is divisible by $p$. The left-hand side is divisible by $p$ because $a \geq 1$. Subtracting, $p$ divides $\lvert Z(P)\rvert$. Since $\lvert Z(P)\rvert \geq 1$ (the identity is central), this forces $\lvert Z(P)\rvert \geq p > 1$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Finiteness.** Parts 1, 3 and 4 of "Classes and centralizers", and the identity $\lvert K_x\rvert = [G:C_G(x)]$, hold in any group. Finiteness enters only where orders are multiplied or summed: in the divisibility statement, and throughout the class equation, whose left-hand side must be a number and whose right-hand side must be a finite sum. In an infinite group the classes still partition $G$, but there may be infinitely many of them and they may be infinite; the general linear group $\mathrm{GL}_2(\mathbb{C})$, for example, has a two-parameter family of classes of diagonalizable matrices, one for each unordered pair $\{\lambda_1, \lambda_2\}$ of non-zero eigenvalues.

**$a \geq 1$ in the prime-power corollary.** With $a = 0$ the group is trivial and its centre is trivial too, so the conclusion fails; the proof uses $a \geq 1$ exactly at the point where $p$ is said to divide $\lvert P\rvert$. The hypothesis that $\lvert P\rvert$ is a *prime* power is equally essential: $S_3$ has order $6$ and class equation $6 = 1 + 2 + 3$, with trivial centre. There no single prime divides all the non-central indices, and the argument has nothing to work with.

**Why the centre must be separated out.** One might try to write the class equation as a sum over all classes of $[G:C_G(g_i)]$ with no special term. That is true but useless: the central classes contribute $1$ each, and the information in the equation — that the non-central terms are proper divisors of $\lvert G\rvert$ greater than $1$ — is only visible once they are collected.

**Normal subgroups are unions of classes.** If $N \trianglelefteq G$ and $x \in N$ then $gxg^{-1} \in gNg^{-1} = N$ for every $g$, so $K_x \subseteq N$. This is the most common way the class equation is used: the order of a normal subgroup must be a sum of class sizes, one of which is the class of the identity. In the worked example below, the class sizes $1, 2, 2, 5$ allow only $1, 1+2+2 = 5$ and $1+2+2+5 = 10$ as such sums that also divide $10$, which exhibits $\langle r\rangle$ as the only non-trivial proper normal subgroup.

**Conjugacy is not equality of order.** Conjugate elements have the same order (part 4), but not conversely: in the example below, $r$ and $r^2$ both have order $5$ and are not conjugate.
:::

:::method[Finding the conjugacy classes of a finite group]{provenance=original}
1. **Start with the identity.** $K_e = \{e\}$ always, since $geg^{-1} = e$.
2. **Find the centre** by checking which elements commute with a generating set; each contributes a class of its own, by part 3.
3. **Pick an element $x$ not yet placed.** Compute $gxg^{-1}$ as $g$ runs over a generating set of $G$, then over products of those, until no new elements appear. The set obtained is $K_x$, because it is closed under conjugation by the generators and hence by all of $G$.
4. **Check the size.** $\lvert K_x\rvert$ must divide $\lvert G\rvert$, by part 2. If it does not, an element has been missed.
5. **Identify the centralizer** as a cross-check: $\lvert C_G(x)\rvert = \lvert G\rvert / \lvert K_x\rvert$, and $\langle x\rangle \subseteq C_G(x)$ always, so the order of $x$ must divide $\lvert C_G(x)\rvert$.
6. **Repeat** from step 3 until every element is placed, then verify the class equation: the sizes must add to $\lvert G\rvert$.
:::

:::example[The symmetries of a regular pentagon]{provenance=original}
Let $G = D_5$ be the symmetry group of a regular pentagon: the rotations through multiples of $2\pi/5$ and the five reflections in the axes through a vertex and the midpoint of the opposite side. Writing $r$ for the rotation through $2\pi/5$ and $s$ for one reflection,
$$
G = \{\, e, r, r^2, r^3, r^4,\ s, rs, r^2s, r^3s, r^4s \,\},
\qquad r^5 = s^2 = e, \qquad s r s^{-1} = r^{-1} ,
$$
so $\lvert G\rvert = 10$. Everything below follows from the single relation $srs^{-1} = r^{-1}$, equivalently $sr^{k} = r^{-k}s$.

**Step 1: the identity.** $K_e = \{e\}$, of size $1$.

**Step 2: conjugating a rotation.** Conjugating $r^{m}$ by a rotation changes nothing, since powers of $r$ commute: $r^{k}r^{m}r^{-k} = r^{m}$. Conjugating by a reflection $r^{k}s$, and using $(r^ks)^{-1} = s^{-1}r^{-k} = sr^{-k}$ together with $sr^{m} = r^{-m}s$,
$$
(r^{k}s)\,r^{m}\,(r^{k}s)^{-1} = r^{k}s\,r^{m}\,s\,r^{-k} = r^{k}\,(r^{-m}s)\,s\,r^{-k} = r^{k}\,r^{-m}\,r^{-k} = r^{-m} ,
$$
using $s^2 = e$ at the third equality and the commutativity of the powers of $r$ at the fourth. So the class of $r^{m}$ is $\{r^{m}, r^{-m}\}$:
$$
K_{r} = \{r, r^{4}\}, \qquad K_{r^{2}} = \{r^{2}, r^{3}\} ,
$$
each of size $2$. Geometrically, a rotation and its inverse are conjugate because a reflection reverses the sense of rotation.

**Step 3: conjugating a reflection.** First by rotations, using $sr^{-k} = r^{k}s$:
$$
r^{k}\,s\,r^{-k} = r^{k}\,r^{k}s = r^{2k}s .
$$
As $k$ runs over $0,1,2,3,4$, the exponent $2k$ runs over $0,2,4,1,3$ modulo $5$ — all residues, because $2$ is invertible modulo the prime $5$ (indeed $2\cdot 3 = 6 \equiv 1$). So the five reflections $s, rs, r^2s, r^3s, r^4s$ are already all conjugate to $s$, and
$$
K_{s} = \{\, s,\ rs,\ r^2s,\ r^3s,\ r^4s \,\} ,
$$
of size $5$. Conjugating by reflections produces nothing new, since $(r^{k}s)\,s\,(r^{k}s)^{-1} = (r^{k}s)\,s\,(r^{k}s) = r^{k}\,(ss)\,r^{k}s = r^{2k}s$, the same list.

**Step 4: the counts.** The four classes have sizes $1, 2, 2, 5$, and each divides $\lvert G\rvert = 10$, as part 2 requires. They account for $1+2+2+5 = 10$ elements, so no element has been missed and these are all the classes.

**Step 5: centralizers and the centre.** By $\lvert C_G(x)\rvert = \lvert G\rvert/\lvert K_x\rvert$,
$$
\lvert C_G(r)\rvert = \frac{10}{2} = 5, \qquad \lvert C_G(s)\rvert = \frac{10}{5} = 2 .
$$
These are confirmed directly: $C_G(r) = \langle r\rangle$, the five rotations, and $C_G(s) = \{e, s\}$. Only the identity has a class of size $1$, so by part 3
$$
Z(D_5) = \{e\} .
$$

**Step 6: the class equation.** With $Z(G) = \{e\}$ and the three non-central classes,
$$
10 = \underbrace{1}_{\lvert Z(G)\rvert} + \underbrace{2}_{[G:C_G(r)]} + \underbrace{2}_{[G:C_G(r^2)]} + \underbrace{5}_{[G:C_G(s)]} ,
$$
and indeed $1 + 2 + 2 + 5 = 10$. Each non-central summand is a divisor of $10$ larger than $1$, as the theorem promises. The count of classes, four, is the number that will reappear as the number of inequivalent irreducible representations of $D_5$ (:ref[]{to=group.orthogonality-characters}).
:::

:::application{provenance=original}
**Character tables are indexed by classes.** The trace of a matrix is unchanged by a similarity transformation, so the character $\chi(g) = \mathrm{tr}\,D(g)$ of a representation satisfies $\chi(hgh^{-1}) = \chi(g)$: characters are class functions. Every column of a character table therefore stands for a whole class, not a single element, and the table is square because a finite group has exactly as many irreducible representations, counted up to equivalence, as it has conjugacy classes. Counting and sizing the classes, as in the example above, is the first step in building such a table; see :ref[]{to=group.orthogonality-characters} and :ref[]{to=group.character-tables}.

**Conjugate symmetry operations are physically equivalent.** In a molecular point group, two operations are conjugate when the group itself contains an operation carrying the geometric element of the first (an axis, a plane) onto that of the second. A square-planar $\mathrm{ML}_4$ molecule has point group $D_{4h}$, of order $16$, and its four in-plane two-fold axes fall into two classes of two: the two axes along the M–L bonds form the class written $2C_2'$, and the two through the midpoints of the edges of the square form the class $2C_2''$. A rotation by $\pi/4$ would carry one kind onto the other, but no such operation lies in $D_{4h}$, so the two classes are not interchangeable and the spectroscopic labels $C_2'$ and $C_2''$ record exactly this distinction. The class sizes are consistent with part 2: $2$ divides $16$, whereas a class of three could not occur here at all, since $3 \nmid 16$. :ref[]{to=group.point-groups} develops the classification.

**Rotations through the same angle are conjugate.** In $\mathrm{SO}(3)$, if $R$ carries the unit vector $\hat n$ to $\hat n'$ then $R\,R_{\hat n}(\theta)\,R^{-1} = R_{\hat n'}(\theta)$: the conjugate of a rotation is the rotation through the same angle about the rotated axis, as :cite{work=hassani-2013 loc="Box 23.2.20, p. 711"} records. The classes of $\mathrm{SO}(3)$ are therefore labelled by the angle alone, which is why the character of an angular-momentum representation is a function of $\theta$ only, and why one may compute it in the convenient frame in which the axis is $\hat z$ (:ref[]{to=group.so3-su2}, :ref[]{to=group.wigner-d-matrices}).

**Conjugacy in the groups the handbook uses elsewhere.** In $\mathrm{GL}_n(\mathbb{C})$ conjugation $A \mapsto PAP^{-1}$ is change of basis (:ref[]{to=linalg.linear-maps-matrices}), so the conjugacy classes are the similarity classes of matrices and the Jordan normal form is precisely a list of class representatives (:ref[]{to=linalg.jordan-form}); part 4 above is the familiar fact that similar matrices share their invariants. In the symmetric group, :cite{work=hassani-2013 loc="Thm 23.4.12, p. 719"} and :cite{work=dummit-foote-2004 loc="Prop. 11, p. 126"} show that two permutations are conjugate exactly when they have the same cycle type, so the classes of $S_n$ are labelled by the partitions of $n$ (:ref[]{to=group.symmetric-group}). This is the combinatorial engine behind the representation theory of $S_n$ used in the quantum mechanics of identical particles.
:::
