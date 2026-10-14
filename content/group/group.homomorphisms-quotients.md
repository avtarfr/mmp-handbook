---
id: group.homomorphisms-quotients
title: Homomorphisms and quotient groups
kind: theorem
level: core
summary: Defines structure-preserving maps of groups, identifies their kernels as exactly the normal subgroups, builds the quotient group on the cosets of a normal subgroup, and proves that every homomorphic image is such a quotient.
prereqs: [group.cosets-lagrange]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§3.1, pp. 73-84: the fibre picture of a homomorphism and the multiplication of fibres that motivates the quotient; the definition of the kernel; Proposition 1 ($\\varphi(1_G) = 1_H$, $\\varphi(g^{-1}) = \\varphi(g)^{-1}$, $\\varphi(g^n) = \\varphi(g)^n$, and $\\ker\\varphi$ and $\\operatorname{im}\\varphi$ are subgroups) with its proof by cancellation and the subgroup criterion; Proposition 2 (the fibres of $\\varphi$ are the left and the right cosets of the kernel) and Theorem 3 (the coset product $uK \\cdot vK = uvK$ is well defined when $K$ is a kernel); Proposition 5, the criterion that the coset product is well defined exactly when $gng^{-1} \\in N$ for all $g \\in G$, $n \\in N$, with the proof in both directions and the verification of the group axioms on the cosets; the definition of the conjugate $gng^{-1}$, of $gNg^{-1}$, of normalizing, and of a normal subgroup $N \\trianglelefteq G$; Theorem 6, the five equivalent forms of normality; Proposition 7, that the normal subgroups are precisely the kernels, proved by exhibiting the natural projection $\\pi(g) = gN$ and computing its kernel; the examples that $1$ and $G$ are normal and that every subgroup of an abelian group is normal; and the example $\\varphi : \\mathbb{R}^2 \\to \\mathbb{R}$, $(x,y)\\mapsto x$, whose fibres are the vertical lines. §3.2, pp. 90-92: the proof that a subgroup of index $2$ is normal, and the example of $H = \\langle (1\\,2)\\rangle$ in $S_3$, where the coset product computed from representatives is not well defined. §3.3, p. 97: Theorem 16 (the first isomorphism theorem) and Corollary 17 ($\\varphi$ is injective exactly when $\\ker\\varphi = 1$, and $|G : \\ker\\varphi| = |\\varphi(G)|$), with the remark that the latter is the rank-nullity formula for linear maps"
    pages: "73-84, 90-92, 97"
    role: the definitions of kernel, conjugate and normal subgroup; the well-definedness criterion for the coset product and its proof in both directions; the equivalence of normality with being a kernel, via the natural projection; the first isomorphism theorem and its injectivity corollary; the non-normal subgroup whose coset product fails
  - work: hassani-2013
    loc: "§23.1, p. 705: Definition 23.1.5 of a homomorphism, isomorphism and automorphism, with the consequences $f(e_G) = e_H$ and $f(g^{-1}) = [f(g)]^{-1}$, the trivial homomorphism, the isomorphisms $\\mathbb{R}^2 \\cong \\mathbb{C}$ and $\\exp : (\\mathbb{R},+) \\to (\\mathbb{R}^{+},\\cdot)$, and Box 23.1.7 defining $GL(V)$. §23.2, pp. 708-711: Definition 23.2.9 of $\\ker f$ with the remark that it is a subgroup and that the construction matches the kernel of a linear map; the argument from $(b^{-1}S)(bS) = S$ that the coset product forces $b^{-1}Sb = S$, leading to Definition 23.2.13 of a normal subgroup as one with $N = g^{-1}Ng$ for all $g$; Theorem 23.2.14, that the cosets of a normal subgroup form the quotient group $G/N$; the remarks that every subgroup of an abelian group is normal and that a normal subgroup is a union of conjugacy classes; Example 23.2.15, the quotients $\\mathbb{R}^3/\\mathbb{R}^2 \\cong \\mathbb{R}$ and $\\mathbb{Z}/m\\mathbb{Z} = \\mathbb{Z}_m$; Theorem 23.2.16, the first isomorphism theorem, with the proof that $\\ker f$ is normal by computing $f(gxg^{-1})$; and Example 23.2.17, $SL(V) = \\ker(\\det)$ as a normal subgroup of $GL(V)$"
    pages: "705, 708-711"
    role: the definition of homomorphism and isomorphism in the form we use; the motivation of normality from demanding that the coset product close; the statement of the first isomorphism theorem and the $f(gxg^{-1})$ computation; the determinant homomorphism as the standard example
  - work: rhb-2006
    loc: "§28.5, pp. 1059-1061: the formal definition of isomorphic groups by a one-to-one correspondence respecting products; the definition of a homomorphism $\\Phi(XY) = \\Phi(X)\\Phi(Y)$; the three consequences drawn from it, namely that the identity maps to the identity, that the image of an inverse is the inverse of the image, and the claim that 'the image of an element has the same order as the element'; the two extra requirements (I) and (II) that upgrade a homomorphism to an isomorphism, the terms monomorphism, epimorphism and automorphism, and the example $\\Phi : \\mathbb{R} \\to U(1)$, $x \\mapsto e^{ix}$, which is a homomorphism but not an isomorphism and whose kernel is $2\\pi\\mathbb{Z}$. §28.6-28.7, pp. 1062-1063: the theorem that the image and the kernel of a homomorphism are subgroups, with the proofs; the verification that $\\Phi(XYX^{-1}) = I'$, so the kernel is normal; and the defining property of a normal subgroup in the form $XYX^{-1}$ belongs to the subgroup for every $X$ in $G$ and $Y$ in the subgroup"
    pages: "1059-1063"
    role: the physicists' formulation of homomorphism and isomorphism; the $x \\mapsto e^{ix}$ example with its kernel; the direct verification that a kernel is normal; the source of the order claim discussed in the remark below
  - work: arfken-2013
    loc: "§17.1, p. 817: the summary bullets stating that two groups are isomorphic when their elements correspond one-to-one with $ab = c \\iff a'b' = c'$, and that the groups are homomorphic when the correspondence is many-to-one"
    pages: "817"
    role: the many-to-one phrasing of homomorphism common in the physics literature, recorded for comparison with the definition we adopt
---

:::definition[Homomorphism, kernel, image]{provenance=adapted src="dummit-foote-2004:§3.1, the definition of the kernel, p. 75; hassani-2013:§23.1, Definition 23.1.5, p. 705, and §23.2, Definition 23.2.9, p. 708; rhb-2006:§28.5, the definitions of isomorphic groups and of a homomorphism, pp. 1059-1060"}
Let $G$ and $H$ be groups, with identities $e_G$ and $e_H$. A map $\varphi : G \to H$ is a **homomorphism** if it turns products into products:
$$
\varphi(xy) = \varphi(x)\,\varphi(y) \qquad \text{for all } x, y \in G .
$$
The product on the left is formed in $G$, the one on the right in $H$; the condition says that multiplying first and then mapping gives the same answer as mapping first and then multiplying.

A bijective homomorphism is an **isomorphism**, written $G \cong H$; an isomorphism of a group with itself is an **automorphism**. Isomorphic groups are the same group in different clothing, and no statement expressible in terms of the group operation can distinguish them.

Two subsets measure how far a homomorphism is from being an isomorphism:
$$
\ker \varphi = \{\, g \in G : \varphi(g) = e_H \,\}, \qquad
\operatorname{im} \varphi = \varphi(G) = \{\, \varphi(g) : g \in G \,\} .
$$
The first is the **kernel**, the second the **image**. The map $g \mapsto e_H$ is the **trivial homomorphism**, with kernel all of $G$.

Some physics texts define a homomorphism as a correspondence that is *many-to-one*, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§17.1, p. 817"} do. That reading is the common case, a surjective non-injective homomorphism, but we use the definition above, under which an isomorphism is a homomorphism too.
:::

:::statement[What a homomorphism preserves]{provenance=adapted src="dummit-foote-2004:§3.1, Proposition 1, p. 75, and §3.3, Corollary 17(1), p. 97; rhb-2006:§28.5, the three consequences (i)-(iii), p. 1060, and §28.6, the theorem that image and kernel are subgroups, pp. 1062-1063"}
Let $\varphi : G \to H$ be a homomorphism. Then:

1. $\varphi(e_G) = e_H$.
2. $\varphi(x^{-1}) = \varphi(x)^{-1}$ for every $x \in G$, and more generally $\varphi(x^{n}) = \varphi(x)^{n}$ for every $n \in \mathbb{Z}$.
3. $\ker \varphi$ is a subgroup of $G$ and $\operatorname{im}\varphi$ is a subgroup of $H$.
4. $\varphi$ is injective if and only if $\ker \varphi = \{e_G\}$.
5. If $x$ has finite order, then $\varphi(x)$ has finite order and $|\varphi(x)|$ **divides** $|x|$. If $\varphi$ is injective the two orders are equal; without injectivity they need not be.
:::

:::idea{provenance=original}
A homomorphism is pinned down by what it does to products, so every claim is proved by writing the element in question as a product and pushing $\varphi$ through. The identity is the product of itself with itself; an inverse is whatever multiplies to the identity; a power is a product of copies. Part 4 is the one statement with content beyond this bookkeeping, and it is cancellation in disguise: $\varphi(x) = \varphi(y)$ says $\varphi(xy^{-1}) = e_H$, so the failures of injectivity are exactly the non-identity elements of the kernel, and they are all alike. Part 5 then follows because $x^{|x|} = e_G$ is carried to an equation saying that $|x|$ is *one* exponent killing $\varphi(x)$ — not necessarily the smallest.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.1, the proof of Proposition 1, p. 75; rhb-2006:§28.6, the proofs that image and kernel are subgroups, p. 1063"}
**Part 1.** Apply $\varphi$ to $e_G e_G = e_G$: it gives $\varphi(e_G)\varphi(e_G) = \varphi(e_G)$. Now cancel $\varphi(e_G)$ on the right in $H$ (:ref[Groups and subgroups]{to=group.groups-subgroups}) to get $\varphi(e_G) = e_H$.

**Part 2.** Apply $\varphi$ to $x x^{-1} = e_G$ and use part 1: $\varphi(x)\varphi(x^{-1}) = e_H$. By the one-sided inverse rule this already identifies $\varphi(x^{-1})$ as $\varphi(x)^{-1}$. For powers, $\varphi(x^{n}) = \varphi(x)^{n}$ holds for $n = 0$ by part 1 and for $n \ge 1$ by induction, the step being $\varphi(x^{n}) = \varphi(x^{\,n-1}x) = \varphi(x)^{\,n-1}\varphi(x)$; for $n < 0$ write $x^{n} = (x^{-n})^{-1}$ and combine the positive case with the inverse rule.

**Part 3.** Use the subgroup criterion in both cases. *Kernel*: $e_G \in \ker\varphi$ by part 1, so it is non-empty; and if $\varphi(x) = \varphi(y) = e_H$ then
$$
\varphi(xy^{-1}) = \varphi(x)\varphi(y)^{-1} = e_H e_H^{-1} = e_H ,
$$
so $xy^{-1} \in \ker\varphi$. *Image*: $e_H = \varphi(e_G) \in \operatorname{im}\varphi$; and if $u = \varphi(a)$ and $v = \varphi(b)$ lie in the image then $uv^{-1} = \varphi(a)\varphi(b)^{-1} = \varphi(ab^{-1})$ does too.

**Part 4.** Suppose $\varphi$ is injective. If $g \in \ker\varphi$ then $\varphi(g) = e_H = \varphi(e_G)$ by part 1, so $g = e_G$ by injectivity; hence the kernel is trivial. Conversely suppose $\ker\varphi = \{e_G\}$ and $\varphi(x) = \varphi(y)$. Then
$$
\varphi(xy^{-1}) = \varphi(x)\varphi(y)^{-1} = e_H ,
$$
so $xy^{-1} \in \ker\varphi = \{e_G\}$, giving $xy^{-1} = e_G$ and $x = y$.

**Part 5.** Let $n = |x| < \infty$. By part 2, $\varphi(x)^{n} = \varphi(x^{n}) = \varphi(e_G) = e_H$, so $\varphi(x)$ has finite order, and the divisibility criterion for orders (:ref[Groups and subgroups]{to=group.groups-subgroups}) gives $|\varphi(x)| \mid n$. If $\varphi$ is injective, put $m = |\varphi(x)|$; then $\varphi(x^{m}) = \varphi(x)^{m} = e_H = \varphi(e_G)$, so $x^{m} = e_G$ by injectivity and $n \mid m$. With $m \mid n$ this forces $m = n$. $\square$
:::

:::definition[Conjugates and normal subgroups]{provenance=adapted src="dummit-foote-2004:§3.1, the definition of the conjugate $gng^{-1}$, of $gNg^{-1}$ and of a normal subgroup, p. 82; hassani-2013:§23.2, Definition 23.2.13, p. 709; rhb-2006:§28.6, the defining property of a normal subgroup, p. 1063"}
For $g, n$ in a group $G$, the element $gng^{-1}$ is the **conjugate of $n$ by $g$**. For a subset $N \subseteq G$ write $gNg^{-1} = \{\, gng^{-1} : n \in N \,\}$.

A subgroup $N \le G$ is **normal**, written $N \trianglelefteq G$, if
$$
gNg^{-1} = N \qquad \text{for every } g \in G .
$$
Normality is a statement about how $N$ sits inside $G$, not about $N$ as a group on its own: the same abstract group can be a normal subgroup of one group and a non-normal subgroup of another.

Two families are normal for trivial reasons. In any group, $\{e\}$ and $G$ are normal. In an **abelian** group every subgroup is normal, since $gng^{-1} = gg^{-1}n = n$. So the notion has content only for non-abelian $G$.
:::

:::statement[Normal subgroups, quotients and kernels]{provenance=adapted src="dummit-foote-2004:§3.1, Proposition 5, Theorem 6 and Proposition 7, pp. 81-83; hassani-2013:§23.2, the argument preceding Definition 23.2.13 and Theorem 23.2.14, pp. 709-710"}
Let $N \le G$ be a subgroup. The following are equivalent.

1. $N \trianglelefteq G$, that is, $gNg^{-1} = N$ for all $g \in G$.
2. $gNg^{-1} \subseteq N$ for all $g \in G$.
3. $gN = Ng$ for all $g \in G$: every left coset is the corresponding right coset.
4. The rule
$$
(uN)\cdot(vN) = (uv)N
$$
is a well-defined operation on the set $G/N$ of left cosets — that is, the coset on the right depends only on the two cosets on the left and not on the representatives $u$ and $v$ chosen for them.

When these hold, $G/N$ with that operation is a group, the **quotient group** of $G$ by $N$, with identity $N = eN$ and $(gN)^{-1} = g^{-1}N$. Its order is the index: $|G/N| = [G:N]$, so $|G/N| = |G|/|N|$ for finite $G$. The **natural projection**
$$
\pi : G \to G/N, \qquad \pi(g) = gN
$$
is a surjective homomorphism with $\ker \pi = N$.

Consequently the normal subgroups of $G$ are precisely the kernels of homomorphisms defined on $G$, and nothing else is.
:::

:::idea{provenance=original}
Condition 4 is the one we actually want, and the other three are what it costs. Suppose we insist that cosets multiply by multiplying representatives. Replacing the representative $v$ by $vn$ for some $n \in N$ changes the product $uv$ into $uvn$, which is harmless; but replacing $u$ by $un$ changes it into $unv$, and to recognise this as a member of $uvN$ we must be able to move $n$ past $v$ at the cost of some other element of $N$. That is exactly the demand $v^{-1}nv \in N$, which is condition 2 with $g = v^{-1}$. Everything else is routine: the group axioms for $G/N$ descend from those of $G$ because the operation is defined by representatives, and the projection is a homomorphism by the very formula that defines the operation. The last sentence is then a short circle: a kernel is normal because $\varphi(gng^{-1}) = \varphi(g)e_H\varphi(g)^{-1} = e_H$, and a normal subgroup is a kernel because it is the kernel of its own projection.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.1, the proof of Proposition 5 and the construction of the natural projection in Proposition 7, pp. 81-83; hassani-2013:§23.2, the computation of $f(gxg^{-1})$ in Theorem 23.2.16, p. 710"}
**1 $\Rightarrow$ 2** is immediate, equality being a special case of inclusion.

**2 $\Rightarrow$ 1.** Assume $gNg^{-1} \subseteq N$ for every $g$. Applying this to $g^{-1}$ in place of $g$ gives $g^{-1}Ng \subseteq N$ as well. Conjugating that inclusion by $g$ — pre-multiplying by $g$ and post-multiplying by $g^{-1}$ — gives $N \subseteq gNg^{-1}$. The two inclusions give $gNg^{-1} = N$. (It is worth noticing that the quantifier over *all* $g$ is what makes this work; a single $g$ with $gNg^{-1} \subseteq N$ need not satisfy equality in an infinite group.)

**1 $\Leftrightarrow$ 3.** Multiplying $gNg^{-1} = N$ on the right by $g$ gives $gN = Ng$, and multiplying $gN = Ng$ on the right by $g^{-1}$ gives it back.

**2 $\Rightarrow$ 4.** Let $u_1 \in uN$ and $v_1 \in vN$, say $u_1 = un$ and $v_1 = vm$ with $n, m \in N$. Insert $v^{-1}v$ and regroup:
$$
u_1v_1 = u n v m = (uv)\bigl(v^{-1}nv\bigr)m .
$$
By condition 2 applied with $g = v^{-1}$, the element $n' := v^{-1}nv$ lies in $N$, and $N$ is closed under products, so $n'm \in N$. Hence $u_1v_1 \in (uv)N$, and since cosets are disjoint or equal (:ref[Cosets and Lagrange's theorem]{to=group.cosets-lagrange}), $u_1v_1N = uvN$. The product therefore does not depend on the representatives.

**4 $\Rightarrow$ 2.** Assume the operation is well defined. Fix $g \in G$ and $n \in N$. The cosets $eN = N$ and $nN$ are the same coset, because $n \in N$; so are $g^{-1}N$ and itself. Multiplying the pair $(N, g^{-1}N)$ using the representatives $e$ and $g^{-1}$ gives $g^{-1}N$; using the representatives $n$ and $g^{-1}$ gives $ng^{-1}N$. Well-definedness forces
$$
ng^{-1}N = g^{-1}N ,
$$
so $ng^{-1} \in g^{-1}N$, say $ng^{-1} = g^{-1}n_1$ with $n_1 \in N$. Multiplying on the left by $g$ gives $gng^{-1} = n_1 \in N$. As $g$ and $n$ were arbitrary, condition 2 holds.

**The quotient is a group.** Assume the four conditions. Associativity: for $u,v,w \in G$,
$$
\bigl((uN)(vN)\bigr)(wN) = (uv)N \cdot wN = \bigl((uv)w\bigr)N = \bigl(u(vw)\bigr)N = uN \cdot (vw)N = (uN)\bigl((vN)(wN)\bigr),
$$
the middle equality being associativity in $G$. The coset $N = eN$ satisfies $(eN)(gN) = (eg)N = gN$ and likewise on the other side, so it is the identity; and $(gN)(g^{-1}N) = (gg^{-1})N = eN = N$, so $g^{-1}N$ is the inverse of $gN$. The elements of $G/N$ are by definition the left cosets, and their number is $[G:N]$; Lagrange's theorem supplies $|G|/|N|$ for finite $G$.

**The projection.** $\pi(g) = gN$ is surjective because every coset has a representative. It is a homomorphism because $\pi(g_1g_2) = (g_1g_2)N = (g_1N)(g_2N) = \pi(g_1)\pi(g_2)$, which is the defining rule read from right to left. Its kernel is $\{g : gN = N\}$, and $gN = N = eN$ holds exactly when $e^{-1}g = g$ lies in $N$; so $\ker \pi = N$.

**Normal $\Leftrightarrow$ kernel.** If $N \trianglelefteq G$ then $N = \ker \pi$ for the projection just built. Conversely let $N = \ker\varphi$ for a homomorphism $\varphi : G \to H$. For $g \in G$ and $n \in N$,
$$
\varphi\bigl(gng^{-1}\bigr) = \varphi(g)\,\varphi(n)\,\varphi(g)^{-1} = \varphi(g)\,e_H\,\varphi(g)^{-1} = e_H ,
$$
so $gng^{-1} \in N$. That is condition 2, hence $N \trianglelefteq G$. $\square$
:::

:::statement[First isomorphism theorem]{provenance=adapted src="dummit-foote-2004:§3.3, Theorem 16 and Corollary 17, p. 97; hassani-2013:§23.2, Theorem 23.2.16, p. 710"}
Let $\varphi : G \to H$ be any homomorphism of groups. Its kernel is a normal subgroup of $G$, so the quotient $G/\ker\varphi$ is defined; and the recipe "send a coset to the common value of $\varphi$ on it",
$$
\bar\varphi : G/\ker\varphi \longrightarrow \operatorname{im}\varphi, \qquad \bar\varphi\bigl(g\ker\varphi\bigr) = \varphi(g),
$$
is unambiguous and is an isomorphism onto the image. In short,
$$
G/\ker\varphi \;\cong\; \operatorname{im}\varphi .
$$
Counting the two sides gives $[\,G : \ker\varphi\,] = |\operatorname{im}\varphi|$, and therefore, when $G$ is finite,
$$
|G| = |\ker\varphi| \cdot |\operatorname{im}\varphi| .
$$
:::

:::idea{provenance=original}
A homomorphism loses exactly the information in its kernel and nothing else, so if we agree in advance to stop distinguishing elements that differ by a kernel element, what is left is a faithful copy of the image. "Agreeing to stop distinguishing" is precisely passing to the cosets of the kernel, and the previous statement has already made those cosets into a group. All that remains is to check that the obvious map is unambiguous and loses nothing, and both checks reduce to the same computation: $\varphi(u) = \varphi(v)$ if and only if $u^{-1}v \in \ker\varphi$, which is the test for $u$ and $v$ to name the same coset. The counting formula is then Lagrange's theorem read on the quotient; for linear maps it is the rank-nullity theorem.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.3, Theorem 16 and Corollary 17 with the observation that these restate §3.1, p. 97; hassani-2013:§23.2, the proof of Theorem 23.2.16, p. 710"}
Write $K = \ker\varphi$. That $K$ is a subgroup is part 3 of the preservation statement, and that it is normal is the final step of the previous proof, so the quotient group $G/K$ exists.

**The key equivalence.** For $u, v \in G$,
$$
\varphi(u) = \varphi(v)
\iff \varphi(u)^{-1}\varphi(v) = e_H
\iff \varphi\bigl(u^{-1}v\bigr) = e_H
\iff u^{-1}v \in K
\iff uK = vK ,
$$
the second step using parts 1 and 2 of the preservation statement and the last being the coset-equality test (:ref[Cosets and Lagrange's theorem]{to=group.cosets-lagrange}).

**$\bar\varphi$ is well defined.** If $uK = vK$ then, reading the chain from right to left, $\varphi(u) = \varphi(v)$. So the proposed value $\varphi(g)$ depends only on the coset $gK$, not on the representative $g$.

**$\bar\varphi$ is a homomorphism.** Using the quotient operation and then the homomorphism property of $\varphi$,
$$
\bar\varphi\bigl((uK)(vK)\bigr) = \bar\varphi\bigl((uv)K\bigr) = \varphi(uv) = \varphi(u)\varphi(v) = \bar\varphi(uK)\,\bar\varphi(vK) .
$$

**$\bar\varphi$ is injective.** If $\bar\varphi(uK) = \bar\varphi(vK)$ then $\varphi(u) = \varphi(v)$, and the chain read from left to right gives $uK = vK$. (Equivalently, by part 4 of the preservation statement: $\bar\varphi(gK) = e_H$ forces $g \in K$, that is, $gK = K$, so the kernel of $\bar\varphi$ is trivial.)

**$\bar\varphi$ is surjective onto $\operatorname{im}\varphi$.** Every element of $\operatorname{im}\varphi$ is $\varphi(g)$ for some $g \in G$, and $\varphi(g) = \bar\varphi(gK)$.

So $\bar\varphi$ is a bijective homomorphism, that is, an isomorphism, and $G/K \cong \operatorname{im}\varphi$. Counting, $[G:K] = |G/K| = |\operatorname{im}\varphi|$, and multiplying by $|K|$ and using Lagrange's theorem gives $|G| = |K|\,|\operatorname{im}\varphi|$ when $G$ is finite. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="dummit-foote-2004:§3.2, the proof that a subgroup of index 2 is normal, p. 91, and the example of a non-normal subgroup whose coset product is ill defined, pp. 91-92; rhb-2006:§28.5, consequence (iii) on p. 1060 and the example $\\Phi : \\mathbb{R}\\to U(1)$, $x \\mapsto e^{ix}$, p. 1060"}
**Normality is exactly what the quotient needs, and nothing less.** Take $G = D_4$ with $r^{4} = s^{2} = e$ and $sr = r^{3}s$, and the subgroup $H = \{e,s\}$ of order $2$. It is not normal, since
$$
r s r^{-1} = r\,(s r^{3}) = r\,(r\,s) = r^{2}s \notin H ,
$$
using $sr^{3} = r^{-3}s = rs$. The coset product fails accordingly. The left cosets are $H = \{e,s\}$ and $rH = \{r, rs\}$, among others. Multiply $H$ by $rH$ using the representatives $e$ and $r$: the answer is $er = r$, lying in $rH$. Multiply using the representatives $s \in H$ and $r \in rH$ instead: the answer is $sr = r^{3}s$, which lies in $r^{3}H = \{r^{3}, r^{3}s\}$, a *different* coset. So "multiply the representatives" does not define an operation on $D_4/H$, and there is no quotient group. The same group has normal subgroups — $\{e,r^{2}\}$ and $\{e,r,r^{2},r^{3}\}$ — for which it does.

**Index two is always enough.** If $[G:H] = 2$ then $H \trianglelefteq G$, with no computation: for $g \notin H$ the two left cosets are $H$ and $gH$, so $gH = G \setminus H$; the two right cosets are $H$ and $Hg$, so $Hg = G\setminus H$ as well; hence $gH = Hg$, and for $g \in H$ this is clear. In $D_4$ this is why the rotation subgroup is normal while the reflection subgroup of order $2$ is not.

**Finiteness is not needed.** Nothing in the construction of $G/N$ or in the first isomorphism theorem assumes $G$ finite; only the numerical form $|G| = |\ker\varphi|\,|\operatorname{im}\varphi|$ does. The quotient $\mathbb{R}/2\pi\mathbb{Z} \cong U(1)$ is the standard infinite instance.

**A conflict between our sources, over part 5.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§28.5, consequence (iii), p. 1060"} conclude that under a homomorphism an element and its image always have "the same order", whereas :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§3.1, Proposition 1(3), p. 75"} give only the exponent rule $\varphi(x^{n}) = \varphi(x)^{n}$, from which divisibility and no more follows. **We follow Dummit and Foote**: part 5 above asserts only that $|\varphi(x)|$ divides $|x|$, with equality when $\varphi$ is injective. Equality does fail in general, and it fails for the example given on the same page of Riley, Hobson and Bence: in $\Phi : (\mathbb{R},+) \to U(1)$, $x \mapsto e^{\mathrm{i}x}$, the element $x = \pi$ has infinite order in $\mathbb{R}$ while its image $-1$ has order $2$. The argument printed there establishes only that $\Phi(x)^{m} = I'$ when $x^{m} = I$, which is the divisibility statement.

**Where each hypothesis enters the isomorphism theorem.** The homomorphism property is used twice: once to make $K$ a subgroup and normal, and once to make $\bar\varphi$ multiplicative. Injectivity of $\bar\varphi$ is where passing to the *kernel's* cosets matters — cosets of a smaller normal subgroup would leave $\bar\varphi$ well defined but no longer injective, and cosets of a larger one would make it ill defined.
:::

:::method[Identifying a quotient group]{provenance=original}
A quotient $G/N$ is almost never described usefully by listing cosets. The efficient route is to recognise it as the image of a map.

1. Guess the answer: find a group $H$ and a map $\varphi : G \to H$ that forgets exactly the information $N$ carries — a determinant, a sign, a modulus, a residue, a projection onto one coordinate.
2. Check that $\varphi$ is a homomorphism, by verifying $\varphi(xy) = \varphi(x)\varphi(y)$ on general elements.
3. Compute $\ker\varphi$ by solving $\varphi(g) = e_H$. If it comes out as $N$, then $N$ is normal automatically, with no conjugation to check.
4. Compute $\operatorname{im}\varphi$. Surjectivity onto $H$ is usually easiest to see by exhibiting one preimage for each element of $H$.
5. Conclude $G/N \cong \operatorname{im}\varphi$ by the first isomorphism theorem.
6. For finite groups, check the arithmetic: $|G| = |\ker\varphi|\cdot|\operatorname{im}\varphi|$.

To go the other way and test a given subgroup $N$ for normality, in decreasing order of cheapness: is $G$ abelian? is $[G:N] = 2$? is $N$ visibly a kernel? otherwise verify $gng^{-1} \in N$ for $g$ and $n$ running over generating sets of $G$ and $N$.
:::

:::example[A quotient of the units modulo fifteen]{provenance=original}
Let $G = (\mathbb{Z}/15\mathbb{Z})^{\times} = \{1,2,4,7,8,11,13,14\}$, an abelian group of order $8$ under multiplication of residue classes, and let
$$
\varphi : G \to G, \qquad \varphi(x) = x^{2} .
$$

**It is a homomorphism.** $\varphi(xy) = (xy)^{2} = xyxy = x^{2}y^{2} = \varphi(x)\varphi(y)$, where the middle step uses commutativity. (On a non-abelian group squaring is *not* a homomorphism; this is a genuine use of the hypothesis.)

**Kernel.** Square each element modulo $15$:
$$
1^{2} = 1,\quad 2^{2} = 4,\quad 4^{2} = 16 = 1,\quad 7^{2} = 49 = 4,\quad 8^{2} = 64 = 4,\quad 11^{2} = 121 = 1,\quad 13^{2} = 169 = 4,\quad 14^{2} = 196 = 1 .
$$
(Each reduction subtracts a multiple of $15$: $16-15 = 1$, $49-45 = 4$, $64-60 = 4$, $121-120 = 1$, $169-165 = 4$, $196-195=1$.) Hence
$$
K = \ker\varphi = \{1, 4, 11, 14\}, \qquad |K| = 4 ,
$$
and $\operatorname{im}\varphi = \{1,4\}$, of order $2$.

**The arithmetic check.** $|G| = 8 = 4 \cdot 2 = |\ker\varphi|\cdot|\operatorname{im}\varphi|$, as the first isomorphism theorem requires.

**The quotient explicitly.** $G$ is abelian, so $K$ is normal and $G/K$ exists, with $[G:K] = 8/4 = 2$: there are exactly two cosets. One is $K$ itself; the other is
$$
2K = \{2\cdot 1,\ 2\cdot 4,\ 2\cdot 11,\ 2\cdot 14\} = \{2,\ 8,\ 22,\ 28\} = \{2, 8, 7, 13\} ,
$$
reducing $22 = 15+7$ and $28 = 15+13$. The two cosets $\{1,4,11,14\}$ and $\{2,7,8,13\}$ are disjoint and together give all eight elements, as they must. The multiplication table of $G/K$ is forced: $K$ is the identity, and $(2K)(2K) = 4K = K$ because $4 \in K$. So $G/K$ is cyclic of order $2$.

**And it matches the image.** $\operatorname{im}\varphi = \{1,4\}$ is also cyclic of order $2$, with $4^{2} = 1$. The isomorphism $\bar\varphi$ of the theorem sends $K \mapsto 1$ and $2K \mapsto 4$. Reading it the other way: the map $\varphi$ "forgets" which of the four square roots an element is, and $K$ is precisely the set of four elements that $\varphi$ cannot distinguish from $1$.

**A second quotient of the same group, for contrast.** Take $L = \langle 2 \rangle = \{1,2,4,8\}$, of order $4$ and index $2$. Its two cosets are $L$ and $7L = \{7, 14, 13, 11\}$, and $G/L$ is again cyclic of order $2$. So two different normal subgroups of the same order can have isomorphic quotients while being different subgroups: $K$ is the Klein four-group, since every element of $K$ squares to $1$, while $L$ is cyclic, generated by $2$ of order $4$. The quotient records less than the subgroup does.
:::

:::example[Two quotients that physics uses constantly]{provenance=original}
**Phase and the circle.** Let $\omega > 0$ be a fixed frequency and define
$$
\Phi : (\mathbb{R},+) \to U(1), \qquad \Phi(t) = e^{\mathrm{i}\omega t} ,
$$
where $U(1) = \{z \in \mathbb{C} : |z| = 1\}$ under multiplication. It is a homomorphism because $e^{\mathrm{i}\omega(t_1+t_2)} = e^{\mathrm{i}\omega t_1}e^{\mathrm{i}\omega t_2}$, which is the statement that the exponential turns sums into products. It is surjective, since every unit-modulus number is $e^{\mathrm{i}\theta}$ for some real $\theta$ and we may take $t = \theta/\omega$. Its kernel is the set of $t$ with $\omega t \in 2\pi\mathbb{Z}$, that is,
$$
\ker \Phi = \frac{2\pi}{\omega}\,\mathbb{Z} ,
$$
the integer multiples of the period. The first isomorphism theorem gives
$$
\mathbb{R}\Big/\tfrac{2\pi}{\omega}\mathbb{Z} \;\cong\; U(1) .
$$
For $\omega = 4\ \mathrm{s}^{-1}$ the kernel is generated by the period $T = 2\pi/4 = \pi/2 \approx 1.5708\ \mathrm{s}$: two instants of time give the same phase exactly when they differ by a whole number of half-$\pi$ seconds. This is the precise sense in which the phase of an oscillator is "time modulo the period", and it is why phase lives on a circle rather than a line.

**Determinant and the unimodular group.** The determinant $\det : GL(n,\mathbb{R}) \to \mathbb{R}\setminus\{0\}$ is a homomorphism, because $\det(AB) = \det A \det B$ (:ref[Determinants]{to=linalg.determinants}). It is surjective: $\operatorname{diag}(\lambda, 1, \dots, 1)$ has determinant $\lambda$ for any $\lambda \neq 0$. Its kernel is $SL(n,\mathbb{R})$, the matrices of determinant $1$. So $SL(n,\mathbb{R})$ is normal in $GL(n,\mathbb{R})$ without any conjugation being computed, and
$$
GL(n,\mathbb{R}) \big/ SL(n,\mathbb{R}) \;\cong\; \mathbb{R}\setminus\{0\} ,
$$
as :cite[Hassani]{work=hassani-2013 loc="§23.2, Example 23.2.17, p. 711"} observes. The same argument with $\det : U(n) \to U(1)$ gives $U(n)/SU(n) \cong U(1)$, which is the statement that a unitary transformation is a special unitary one together with an overall phase.
:::

:::application{provenance=original}
**Representations are homomorphisms.** A representation of a group is a homomorphism into a group of matrices, so everything above applies to it directly. The kernel is the set of symmetry operations the representation cannot see; a representation is *faithful* exactly when its kernel is trivial, which is part 4 of the preservation statement, and an unfaithful representation is really a representation of the quotient by its kernel, which is the first isomorphism theorem. That is why the representations of $G$ that are trivial on a normal subgroup $N$ are in bijection with the representations of $G/N$ — the standard first step in reducing a large symmetry group to a manageable one (:ref[Representations of groups]{to=group.representations}).

**Gauge symmetry and physical configurations.** In gauge theory the configurations of a field are acted on by a group of gauge transformations, and two configurations related by one of them are physically the same. The physical configuration space is the quotient, and the statement that it *is* a space with a group structure, rather than an unstructured collection, is the normality condition. The same construction gives the order-parameter spaces $G/H$ of condensed-matter physics and the quotient $\mathbb{R}/2\pi\mathbb{Z}$ that makes a phase angle well defined.

**Two-to-one maps and spin.** Many of the most useful homomorphisms in physics are not injective, and the kernel is the physics. The map $SU(2) \to SO(3)$ that sends a unit quaternion to the rotation it performs has kernel $\{\pm \mathbb{1}\}$, of order $2$, so $SO(3) \cong SU(2)/\{\pm\mathbb{1}\}$: a rotation corresponds to *two* elements of $SU(2)$, differing by a sign, which is exactly why a spin-$\tfrac12$ state changes sign under a rotation by $2\pi$ (:ref[The rotation group and SU(2)]{to=group.so3-su2}; :ref[Quaternions]{to=group.quaternions}). The determinant maps of the previous example do the same job for $U(n)$: separating an overall phase, which is unobservable, from the rest.

**Conserved quantities and selection rules.** Parity is the homomorphism from a symmetry group onto $\{\pm 1\}$ whose kernel is the subgroup of orientation-preserving operations — a subgroup of index $2$, hence normal with no work. Because the target group is $\{\pm 1\}$, the possible parity values form a group of order $2$ and multiply: a product of two odd operations is even. Every multiplicative quantum number used in a selection rule arises this way, as a homomorphism of the symmetry group onto a small abelian group, and the rule that forbids a transition is the statement that the two states lie over different elements of the quotient.

**Modular arithmetic as a quotient.** $\mathbb{Z}/n\mathbb{Z}$ is the quotient of $(\mathbb{Z},+)$ by the normal subgroup $n\mathbb{Z}$, and the first isomorphism theorem applied to $k \mapsto e^{2\pi \mathrm{i}k/n}$ identifies it with the group of $n$th roots of unity. That identification is the algebraic content of the discrete Fourier transform and of Bloch's theorem on a lattice of $n$ sites.
:::
