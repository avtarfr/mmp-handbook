---
id: group.cosets-lagrange
title: Cosets and Lagrange's theorem
kind: theorem
level: core
summary: Shows that the left cosets of a subgroup cut a group into equal-sized disjoint pieces, so that in a finite group the order of a subgroup divides the order of the group, and draws out the consequences for orders of elements and for groups of prime order.
prereqs: [group.groups-subgroups]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§3.1, pp. 77-80: the definition of the left and right cosets $gN$ and $Ng$ and of a representative, and Proposition 4 (the left cosets of any subgroup partition $G$, and $uN = vN$ exactly when $v^{-1}u \\in N$) with its proof. §3.2, pp. 89-92: Theorem 8 (Lagrange's theorem) and its proof via the bijection $h \\mapsto gh$ from $H$ to $gH$ together with the left cancellation law; the definition of the index $|G:H|$ and the remark that an infinite group may have subgroups of finite or infinite index, with $\\{0\\}$ and $\\langle n \\rangle$ in $\\mathbb{Z}$ as the two cases; Corollary 9 (the order of an element divides the order of the group, and $x^{|G|} = 1$) and Corollary 10 (a group of prime order is cyclic) with their proofs; the example showing a subgroup of index $2$ is normal; the counterexample to the converse of Lagrange's theorem, the symmetry group of a regular tetrahedron, of order $12$ with no subgroup of order $6$; Theorem 11 (Cauchy) and Theorem 12 (Sylow) as the partial converses that do hold. §3.2, p. 95: the closing discussion that the same combinatorics holds for right cosets, that a left coset is in general not a right coset, and that the numbers of left and right cosets agree even for infinite groups, by the bijection of Exercise 12"
    pages: "77-80, 89-92, 95"
    role: the definitions of coset and index; the partition statement and its proof; Lagrange's theorem with the cancellation-law proof route; the two corollaries; the tetrahedral counterexample to the converse; the left-right coset count
  - work: rhb-2006
    loc: "§28.7.1, pp. 1064-1065: equivalence relations, their classes, and the theorem that the classes partition the set, with the proof. §28.7.2, pp. 1065-1067: the statement of Lagrange's theorem in the form '$g$ is a multiple of $h$'; the proof by way of the left-congruence relation $X \\sim Y$ when $X^{-1}Y \\in H$, with reflexivity, symmetry and transitivity checked in turn; the second, self-contained proof by the three bullet points (two cosets are disjoint or identical; $X_1 H = X_2 H$ exactly when $X_2^{-1}X_1 \\in H$; every element lies in some coset); the definition of the index $[G:H] = g/h$ with $[G:I] = g$ and the tower identity $[G:H][H:J] = [G:J]$; the deduction that a group of prime order must be cyclic with no proper subgroups; and the worked six-element example in which $H = \\{I,A,B\\}$ has the two cosets $\\{I,A,B\\}$ and $\\{C,D,E\\}$, computed twice from different representatives"
    pages: "1064-1067"
    role: the equivalence-relation route to the partition; the index and the tower identity; the model of a coset computation done twice from different representatives; the prime-order corollary in the physicists' phrasing
  - work: hassani-2013
    loc: "§23.2, pp. 708-709: Definition 23.2.10 of the product $ST$ of two subsets and of the right and left cosets $St$ and $tS$ of a subgroup, with the warning that some authors interchange the two names and the convention that $t$ represents the coset; Example 23.2.11, the cosets of a plane through the origin in $\\mathbb{R}^3$ as the parallel planes; Theorem 23.2.12 (two cosets are disjoint or identical) with the proof from $ab^{-1} \\in S$ and the remark that the equivalence-relation proof is the more elegant one; the observation that all cosets have the cardinality of the subgroup, proved by the bijection $\\varphi(s) = sa$; and the reading that a coset may be named by any one of its elements"
    pages: "708-709"
    role: the subset-product definition of a coset and the warning about the left-right convention; the equal-cardinality argument; the geometric picture of cosets as parallel translates
---

:::definition[Cosets, representatives and the index]{provenance=adapted src="dummit-foote-2004:§3.1, the definition of $gN$ and $Ng$ and of a representative, p. 77, and §3.2, the definition of the index, p. 90; hassani-2013:§23.2, Definition 23.2.10 with the footnote on the left-right convention, p. 708"}
Let $H \le G$ be a subgroup (:ref[Groups and subgroups]{to=group.groups-subgroups}) and let $g \in G$. The **left coset** of $H$ with **representative** $g$ is the subset
$$
gH = \{\, gh : h \in H \,\},
$$
and the **right coset** is $Hg = \{\, hg : h \in H \,\}$. In additive notation these are written $g + H$ and $H + g$. One coset is $H$ itself, since $eH = H$; every other left coset misses $e$ and is therefore *not* a subgroup. Each element of a coset represents it, in a sense made precise below: the notation $gH$ names a set, and different $g$'s may name the same set.

The set of left cosets of $H$ in $G$ is written $G/H$, and the number of them is the **index** of $H$ in $G$, written $[G:H]$. The index is defined whether or not $G$ is finite, and it may be finite even when $G$ is not: in $(\mathbb{Z},+)$ the subgroup $n\mathbb{Z}$ has index $n$, while the subgroup $\{0\}$ has infinite index.

Which of $gH$ and $Hg$ is called "left" is not universal; some authors, as :cite[Hassani]{work=hassani-2013 loc="§23.2, footnote 5, p. 708"} notes, exchange the two names. We follow the convention above throughout, and the statement after next shows that the choice never affects a count.
:::

:::statement[Cosets partition the group]{provenance=adapted src="dummit-foote-2004:§3.1, Proposition 4, p. 80; hassani-2013:§23.2, Theorem 23.2.12 and the paragraph on the cardinality of a coset, pp. 708-709; rhb-2006:§28.7.2, the three bullet points, pp. 1066-1067"}
Let $H \le G$ and let $u, v, g \in G$.

1. $g \in gH$, so the left cosets cover $G$: $\;G = \bigcup_{g \in G} gH$.
2. $uH = vH$ if and only if $v^{-1}u \in H$; equivalently, if and only if $u \in vH$.
3. Two left cosets are either identical or disjoint. Thus the left cosets form a **partition** of $G$: every element of $G$ lies in exactly one of them.
4. Every left coset has the same cardinality as $H$; the map $h \mapsto gh$ is a bijection from $H$ onto $gH$.
5. All four statements hold verbatim for right cosets. Moreover $gH \mapsto Hg^{-1}$ is a well-defined bijection from the left cosets onto the right cosets, so the two families have the same number of members and $[G:H]$ is unambiguous.
:::

:::idea{provenance=original}
A coset is the subgroup pushed sideways by one element, and two pushes land on the same place exactly when they differ by something already inside the subgroup. That single sentence contains both the overlap statement and the equality test: if $uH$ and $vH$ share a point then $u$ and $v$ differ by an element of $H$, and once they do, each coset is contained in the other. Equal size is even simpler — translation by $g$ is undone by translation by $g^{-1}$, so it cannot collapse two elements into one. The left-right dictionary comes from inversion, which turns the product $gh$ into $h^{-1}g^{-1}$ and so turns a left coset into a right one.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.1, the proof of Proposition 4, p. 80, and §3.2, p. 95, for the left-right bijection; hassani-2013:§23.2, the bijection $\\varphi(s) = sa$ used for the cardinality, p. 709"}
**Part 1.** $e \in H$ because $H$ is a subgroup, so $g = ge \in gH$. Since $g$ was arbitrary, the cosets cover $G$.

**Part 2.** Suppose $uH = vH$. By part 1, $u \in uH = vH$, so $u = vh$ for some $h \in H$, and multiplying on the left by $v^{-1}$ gives $v^{-1}u = h \in H$. Conversely suppose $v^{-1}u = h_0 \in H$, so $u = vh_0$. For any $h \in H$ we get $uh = v(h_0 h) \in vH$, using closure of $H$ under products; hence $uH \subseteq vH$. Also $v = u h_0^{-1}$, with $h_0^{-1} \in H$ because $H$ is closed under inverses, so the same argument with $u$ and $v$ exchanged gives $vH \subseteq uH$. Hence $uH = vH$. The reformulation "$u \in vH$" is the statement $u = vh$ for some $h \in H$, which is what $v^{-1}u \in H$ says.

**Part 3.** Suppose $uH \cap vH \neq \emptyset$ and pick $x$ in the intersection. Then $x \in uH$, so $uH = xH$ by part 2 applied to the pair $x, u$; and $x \in vH$, so $vH = xH$ likewise. Hence $uH = vH$. So two cosets that meet at all coincide, and with part 1 this makes the distinct left cosets a partition of $G$.

**Part 4.** Fix $g$ and define $\lambda : H \to gH$ by $\lambda(h) = gh$. It is onto by the definition of $gH$. It is one-to-one by the left cancellation law: $gh_1 = gh_2$ forces $h_1 = h_2$. So $\lambda$ is a bijection and $|gH| = |H|$, as cardinalities; this is the step at which the *group* structure of $G$, and not merely the partition, is used.

**Part 5.** For right cosets, repeat parts 1 to 4 with the products written on the other side; the test in part 2 becomes $uv^{-1} \in H$ and the bijection in part 4 becomes $h \mapsto hg$. For the dictionary, let $\iota(gH) = Hg^{-1}$.

- *Well defined.* If $uH = vH$ then $v^{-1}u \in H$, so its inverse $u^{-1}v$ lies in $H$ too, which by the right-coset test says $Hu^{-1} = Hv^{-1}$.
- *Injective.* Running the same chain backwards, $Hu^{-1} = Hv^{-1}$ gives $u^{-1}v \in H$, hence $v^{-1}u \in H$ and $uH = vH$.
- *Surjective.* A right coset $Hg$ is the image of $g^{-1}H$.

So $\iota$ is a bijection and the two families are equinumerous. $\square$
:::

:::statement[Lagrange's theorem]{provenance=adapted src="dummit-foote-2004:§3.2, Theorem 8 and the definition of the index that follows it, pp. 89-90; rhb-2006:§28.7.2, the statement and both proofs, pp. 1065-1067"}
Suppose $G$ is a **finite** group and $H$ is one of its subgroups. The order of the group is then the product of two integers, the index and the order of the subgroup:
$$
|G| = [G:H] \cdot |H| .
$$
Two readings follow. The order of a subgroup is always a divisor of the order of the whole group; and the index, defined above by counting cosets, can be computed instead as the quotient $|G|/|H|$.

If $K \le H \le G$ is a chain of subgroups of a finite group, then $[G:K] = [G:H]\,[H:K]$.
:::

:::idea{provenance=original}
The two previous facts about cosets do all the work, and they pull in opposite directions in exactly the way a counting argument needs: the cosets are disjoint and cover the group, so their sizes add up to $|G|$; and they all have the same size $|H|$. A sum of equal numbers is a product, and the number of terms is by definition the index. Nothing about $H$ beyond its being a subgroup enters, which is why the conclusion is so strong for so little input.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.2, the proof of Theorem 8, pp. 89-90; rhb-2006:§28.7.2, the final paragraph of the second proof, p. 1067"}
Write $k = [G:H]$ for the number of distinct left cosets of $H$, which is finite because $G$ is, and list them as $g_1H, \dots, g_kH$. By part 3 of the partition statement these sets are pairwise disjoint and their union is $G$, so the cardinality of $G$ is the sum of theirs:
$$
|G| = \sum_{i=1}^{k} |g_iH| .
$$
By part 4 each term equals $|H|$. Hence $|G| = k|H| = [G:H]\,|H|$, which is the displayed identity. Since $k$ is a positive integer, $|H|$ divides $|G|$ and $k = |G|/|H|$.

For the chain, apply the identity three times. $K$ is a subgroup of the finite group $H$ as well as of $G$, so
$$
[G:K] = \frac{|G|}{|K|} = \frac{|G|}{|H|}\cdot\frac{|H|}{|K|} = [G:H]\,[H:K] ,
$$
the middle step being multiplication and division by the positive integer $|H|$. $\square$
:::

:::statement[Consequences for elements and for prime order]{provenance=adapted src="dummit-foote-2004:§3.2, Corollary 9 and Corollary 10 with their proofs, p. 90; rhb-2006:§28.6, the deduction that a group of prime order is cyclic with no proper subgroups, p. 1062"}
Let $G$ be a finite group of order $n = |G|$.

1. The order of every element divides $n$: $|x|$ divides $n$ for all $x \in G$.
2. $x^{\,n} = e$ for every $x \in G$.
3. If $n = p$ is prime, then $G$ is cyclic, generated by *any* element other than $e$; consequently $G$ is abelian and has no proper subgroups.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.2, the proofs of Corollaries 9 and 10, p. 90"}
**Part 1.** The cyclic subgroup $\langle x \rangle$ satisfies $|\langle x \rangle| = |x|$ (:ref[Groups and subgroups]{to=group.groups-subgroups}), and it is a subgroup of $G$. Lagrange's theorem applied to $H = \langle x \rangle$ gives $|x| \mid n$.

**Part 2.** By part 1, $n = |x| \, q$ for some positive integer $q$, so $x^{n} = \bigl(x^{|x|}\bigr)^{q} = e^{q} = e$.

**Part 3.** Let $n = p$ be prime and take any $x \in G$ with $x \neq e$. Then $\langle x \rangle$ is a subgroup containing both $e$ and $x$, so $|\langle x \rangle| \ge 2$; and by Lagrange $|\langle x \rangle|$ divides $p$. The only divisors of a prime are $1$ and $p$, so $|\langle x \rangle| = p = |G|$, and a subgroup of the same finite cardinality as $G$ is $G$. Hence $G = \langle x \rangle$ is cyclic. Cyclic groups are abelian, since powers of one element commute. Finally, any subgroup has order dividing $p$, hence order $1$ or $p$, hence is one of the two trivial subgroups.

$\square$
:::

:::statement[Euler's and Fermat's theorems]{provenance=original}
Let $m \ge 2$ be an integer and let $\varphi(m)$ be the number of integers in $\{1,\dots,m\}$ coprime to $m$. If $\gcd(a,m) = 1$ then
$$
a^{\varphi(m)} \equiv 1 \pmod{m} .
$$
When $m = p$ is prime this reads $a^{\,p-1} \equiv 1 \pmod{p}$ for every $a$ not divisible by $p$, which is Fermat's little theorem.
:::

:::proof{provenance=original}
The residue classes modulo $m$ that are coprime to $m$ form a group $(\mathbb{Z}/m\mathbb{Z})^{\times}$ under multiplication of classes: the operation is well defined and associative on classes, the class of $1$ is the identity, coprimality to $m$ is preserved by multiplication, and each such class is invertible, since $\gcd(a,m)=1$ gives integers $u,v$ with $au + mv = 1$ and hence $au \equiv 1$. Its order is $\varphi(m)$, by the definition of $\varphi$.

The hypothesis $\gcd(a,m) = 1$ places the class of $a$ in this group, so part 2 of the previous statement applies to it and yields $a^{\varphi(m)} \equiv 1 \pmod m$. For $m = p$ prime, each of $1, \dots, p-1$ is coprime to $p$, so $\varphi(p) = p - 1$, and $p \nmid a$ is the same condition as $\gcd(a,p) = 1$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="dummit-foote-2004:§3.2, the index of $\\{0\\}$ and of $\\langle n \\rangle$ in $\\mathbb{Z}$, p. 90, the tetrahedral counterexample to the converse and the partial converses Theorems 11 and 12, pp. 92-93, and the closing discussion of left versus right cosets, p. 95"}
**Finiteness.** Only the final count needs it. Parts 1 to 5 of the partition statement hold in any group, and the index $[G:H]$ is meaningful for infinite groups; what fails for infinite $G$ is the arithmetic, since $|G|/|H|$ is not a number. The subgroups $\{0\}$ and $n\mathbb{Z}$ of $\mathbb{Z}$ show that an infinite group can have subgroups of infinite index and of finite index at the same time.

**$H$ must be a subgroup, not just a subset.** Every step used one of the two closure properties: part 1 of the partition statement needs $e \in H$, part 2 needs closure under products and inverses, and part 4 needs cancellation. For a subset that is not a subgroup the translates $gS$ still all have $|S|$ elements but they overlap irregularly, and no count follows.

**The converse of Lagrange is false.** A divisor of $|G|$ need not be the order of a subgroup. :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§3.2, p. 92"} give the group $A$ of symmetries of a regular tetrahedron, which they take to have order $12$ — the twelve rotations: if $A$ had a subgroup $H$ of order $6$ then $[A:H] = 2$, every square $g^{2}$ would lie in $H$, and for an element $g$ of order $3$ we would get $g = (g^{2})^{2} \in H$; but a tetrahedron has eight rotations of order $3$, too many for a subgroup with six elements. What does survive is one-directional: **Cauchy's theorem** supplies an element, hence a subgroup, of order $p$ for each prime $p$ dividing $|G|$, and **Sylow's theorem** supplies a subgroup of order $p^{a}$ when $p^{a}$ is the largest power of $p$ dividing $|G|$.

**Left is not right, but the counts agree.** A left coset need not be a right coset, as the worked example below shows. Nonetheless the number of left cosets equals the number of right cosets, by part 5 of the partition statement, so the index is the same number either way. What one may not do is mix the two families when a partition is wanted.

**Cosets are not subgroups.** Only $H$ itself contains $e$; the other cosets are not closed under products. They are translates, and the geometric picture is exact: the cosets of a plane through the origin in $\mathbb{R}^{3}$ are the planes parallel to it (:cite[Hassani]{work=hassani-2013 loc="§23.2, Example 23.2.11, p. 709"}).
:::

:::method[Using Lagrange on a concrete group]{provenance=original}
To list the cosets of a known subgroup $H \le G$ and settle the index:

1. Start the list with $H$ itself, which is the coset of $e$.
2. Choose any element $g$ of $G$ not yet listed, and form $gH = \{gh : h \in H\}$. By part 3 of the partition statement this is disjoint from every coset already written down, so no checking is needed.
3. Repeat step 2 until the listed cosets exhaust $G$. The number of cosets is $[G:H]$, and if $G$ is finite it must come out to $|G|/|H|$ — a useful arithmetic check on the work.
4. To confirm that a particular $g'$ lies in an already-listed coset $gH$, test whether $g^{-1}g' \in H$ rather than multiplying out the whole coset.
5. For right cosets, repeat with $Hg$ and the test $g'g^{-1} \in H$. If some $gH \neq Hg$, then $H$ is not normal and :ref[the quotient construction]{to=group.homomorphisms-quotients} is unavailable for it.

To constrain the subgroups of a finite group *before* hunting for them:

1. Factor $|G|$. Only divisors of $|G|$ can be subgroup orders, and only divisors can be orders of elements.
2. Divisors that are prime do occur, by Cauchy's theorem; composite divisors may or may not.
3. An element $x$ of order $n$ gives a subgroup $\langle x\rangle$ of order $n$ at once, so finding one element of large order often settles the structure. If some $x$ has $|x| = |G|$, the group is cyclic and the search is over.
:::

:::example[Cosets in the symmetry group of a square]{provenance=original}
Let $G = D_4$ be the group of the eight symmetries of a square: the rotations by $0, 90, 180, 270$ degrees and four reflections. Write $r$ for the rotation by $90^{\circ}$ and $s$ for the reflection in a fixed diagonal, so that
$$
r^{4} = e, \qquad s^{2} = e, \qquad sr = r^{-1}s = r^{3}s ,
$$
the last relation saying that conjugating a rotation by a reflection reverses it. Every element is then uniquely $r^{a}s^{b}$ with $a \in \{0,1,2,3\}$ and $b \in \{0,1\}$:
$$
G = \{\, e,\ r,\ r^{2},\ r^{3},\ s,\ rs,\ r^{2}s,\ r^{3}s \,\}, \qquad |G| = 8 .
$$

**A subgroup whose left and right cosets differ.** Take $H = \{e, s\}$, a subgroup of order $2$ since $s^{2} = e$. Following the method, start with $eH = \{e,s\}$ and pick elements not yet used:
$$
rH = \{r, rs\}, \qquad r^{2}H = \{r^{2}, r^{2}s\}, \qquad r^{3}H = \{r^{3}, r^{3}s\} .
$$
These four sets are disjoint and contain all eight elements, so there is nothing left to pick and
$$
[G:H] = 4 = \frac{8}{2} = \frac{|G|}{|H|} ,
$$
in agreement with Lagrange's theorem. Now the right cosets. Here $Hr = \{r, sr\}$, and the relation $sr = r^{3}s$ turns this into
$$
Hr = \{r, r^{3}s\} \neq \{r, rs\} = rH .
$$
So $H$ has a left coset that is not equal to the corresponding right coset. The complete list of right cosets is $\{e,s\}$, $\{r, r^{3}s\}$, $\{r^{2}, r^{2}s\}$, $\{r^{3}, rs\}$ — again four of them, as part 5 of the partition statement promises, even though two of the four sets differ from their left counterparts.

**A subgroup whose cosets agree.** Take $K = \{e, r^{2}\}$ instead. Since $s r^{2} = r^{-2}s = r^{2}s$, the element $r^{2}$ commutes with both $r$ and $s$ and hence with everything, so $gK = Kg$ for every $g$. The four cosets are
$$
K = \{e, r^{2}\}, \quad rK = \{r, r^{3}\}, \quad sK = \{s, r^{2}s\}, \quad rsK = \{rs, r^{3}s\},
$$
and $[G:K] = 4$ again.

**Consistency check on element orders.** Part 1 of the corollaries says every element order divides $8$. Direct computation gives $|e| = 1$; $|r| = |r^{3}| = 4$; $|r^{2}| = 2$; and each of the four reflections $s, rs, r^{2}s, r^{3}s$ squares to $e$, for instance $(rs)(rs) = r(sr)s = r(r^{3}s)s = r^{4}s^{2} = e$. So the orders are $1, 2, 2, 2, 2, 2, 4, 4$: all divisors of $8$, with **six** elements of order dividing $2$ and two of order $4$. Note that $8$ itself never occurs, so $D_4$ is not cyclic — consistent with its being non-abelian, since $rs \neq sr$.
:::

:::example[Lagrange as an arithmetic shortcut]{provenance=original}
Compute $2^{2026} \bmod 15$ without computing $2^{2026}$.

The units modulo $15$ form the group $G = (\mathbb{Z}/15\mathbb{Z})^{\times} = \{1,2,4,7,8,11,13,14\}$, so $|G| = \varphi(15) = 8$. Since $\gcd(2,15) = 1$, the class of $2$ lies in $G$, and part 2 of the corollaries above gives $2^{8} \equiv 1 \pmod{15}$ — which one can confirm directly, $2^{4} = 16 \equiv 1$, hence $2^{8} \equiv 1$. Divide the exponent by the group order:
$$
2026 = 8 \cdot 253 + 2 .
$$
Therefore
$$
2^{2026} = \bigl(2^{8}\bigr)^{253} \cdot 2^{2} \equiv 1^{253} \cdot 4 = 4 \pmod{15} .
$$
The answer is $2^{2026} \equiv 4 \pmod{15}$.

The sharper statement uses the *order of the element* rather than the order of the group: $|2| = 4$ in $G$, and $4$ divides $8$ as Lagrange requires. Reducing the exponent modulo $4$ instead, $2026 = 4\cdot 506 + 2$, gives the same residue $4$ with less arithmetic. This is the general pattern: Lagrange's theorem guarantees that the exponent may always be reduced modulo $|G|$, and the true period, $|x|$, is one of its divisors.
:::

:::application{provenance=original}
**Counting the states produced by symmetry breaking.** When a system with symmetry group $G$ settles into a configuration whose own symmetry is only the subgroup $H$, the remaining operations of $G$ do not vanish; they map the chosen configuration to the other, equally good configurations. Two operations give the same configuration precisely when they differ by an element of $H$, so the distinct ordered states are in bijection with the cosets $G/H$, and there are exactly $[G:H]$ of them. A uniaxial ferromagnet breaking $O(3)$ down to the rotations about the magnetisation axis has a continuum of ground states, the sphere of directions; an Ising magnet breaking a two-element symmetry down to the trivial group has $[G:H] = 2$ states, which is why it has domains of two kinds. The same quotient is the order-parameter space whose topology classifies the defects — domain walls, vortices, monopoles — that the ordered phase can support.

**Which subgroups a symmetry group can have.** Lagrange's theorem is the first filter in any classification of molecular or crystal symmetry. A molecule whose point group has order $12$ can have symmetry subgroups only of orders $1, 2, 3, 4, 6, 12$; a substitution or a distortion that would leave a set of six operations in a group of order $8$ is impossible before any geometry is examined. Combined with Cauchy's theorem it also works the other way: a symmetry group of order divisible by $3$ must contain a three-fold operation. The orders that actually occur are worked out in :ref[Point groups and crystal symmetry]{to=group.point-groups}.

**Degeneracies and the order of an element.** Because $x^{|G|} = e$, any symmetry operation of a finite group, applied $|G|$ times, returns the system to its starting state; and because $|x|$ divides $|G|$, it does so for the first time after a number of steps dividing the group order. For a symmetry operation acting on a quantum state this restricts the phase it can produce to a $|G|$th root of unity, which is the arithmetic behind the labelling of states by characters in :ref[Representations of groups]{to=group.representations}.

**Public-key cryptography.** Fermat's and Euler's theorems, proved above, are Lagrange's theorem applied to $(\mathbb{Z}/m\mathbb{Z})^{\times}$, and they are what makes RSA work: encryption and decryption exponents are chosen to multiply to $1$ modulo $\varphi(m)$, so that the round trip raises a message to the power $1 + k\varphi(m)$ and the group order absorbs the $k\varphi(m)$. The security rests on $\varphi(m)$, hence the group order, being hard to obtain without the factorisation of $m$.
:::
