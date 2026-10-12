---
id: linalg.vector-spaces-bases
title: Vector spaces and bases
kind: definition
level: core
summary: "The axioms of a vector space over the real or complex scalars, and the facts that make coordinates possible: a finitely spanned space has a basis, all its bases have the same size, and coordinates in a fixed ordered basis are unique."
prereqs: [found.zorn-lemma]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. B, \"Vector Spaces\" (axioms, subspace, linear combination, span), pp. 617–618; \"Bases and Dimension\" (independence, basis, components), pp. 618–619; Lemma B.2, Prop. B.3, Exercises B.4–B.5, pp. 619–620"
    pages: "617-620"
    role: axioms and the span/independence/basis definitions; exchange bound with its replacement proof route, invariance of dimension, subspace dimension, existence of a basis in general by Zorn's lemma, and the equal-cardinality statement in infinite dimensions
  - work: kreyszig-1978
    loc: "§2.1, Def. 2.1-1 (vector space), pp. 50–51; subspace, span, Def. 2.1-6 (linear independence), p. 53; Def. 2.1-7 and basis, pp. 54–55; Hamel basis and Thm 2.1-8, p. 55"
    pages: "50-55"
    role: requirement that a subspace be nonempty; Hamel basis and the cardinality of bases, quoted there without proof; proper subspaces have strictly smaller dimension, with the proof route followed here
  - work: hassani-2013
    loc: "§2.1, Example 2.1.2 (standard spaces), pp. 20–21; Def. 2.1.4 and Thm 2.1.6 (subspace, span), p. 22; Defs. 2.1.7–2.1.9 and Thm 2.1.8 (basis, dimension, components), p. 23"
    pages: "20-23"
    role: list of standard spaces; dependence of the dimension on the scalar field; failure of the union of two subspaces to be a subspace
  - work: dummit-foote-2004
    loc: "§11.1, Prop. 1, Cor. 2 and Thm 3 (Replacement Theorem), pp. 409–410"
    pages: "409-410"
    role: a finite spanning set contains a basis, by way of a spanning set no proper subset of which spans; replacement of basis vectors by independent ones
  - work: rhb-2006
    loc: "§8.1.1 (basis vectors, components and their uniqueness), eqs. (8.10)–(8.11), pp. 243–244"
    pages: "243-244"
    role: uniqueness of the components of a vector in a basis
  - work: stakgold-holst-2011
    loc: "§4.6 (Schauder basis), pp. 276–277"
    pages: "276-277"
    role: the Schauder basis, for contrast with the algebraic (Hamel) basis
---

:::definition[Vector space and subspace]{provenance=adapted src="lee-2013:App. B, p. 617; kreyszig-1978:§2.1, Def. 2.1-1, pp. 50–51, and subspace, p. 53"}
Write $\mathbb{F}$ for the scalar field, which in this handbook is $\mathbb{R}$ or $\mathbb{C}$ unless stated otherwise.

A **vector space over $\mathbb{F}$** is a set $V$ carrying an addition $V\times V\to V$ and a scalar multiplication $\mathbb{F}\times V\to V$ subject to three groups of axioms:

- $V$ is an abelian group under addition: $u+v = v+u$ and $(u+v)+w = u+(v+w)$ for all $u,v,w\in V$, there is an element $0\in V$ with $v+0 = v$ for all $v$, and each $v\in V$ has an inverse $-v$ with $v+(-v)=0$;
- $a(bv) = (ab)v$ and $1v = v$ for all $a,b\in\mathbb{F}$ and $v\in V$;
- $(a+b)v = av+bv$ and $a(v+w) = av+aw$ for all $a,b\in\mathbb{F}$ and $v,w\in V$.

Members of $V$ are **vectors**. The axioms force $0v = 0$, $a0 = 0$ and $(-1)v = -v$.

A **subspace** of $V$ is a nonempty subset $W\subseteq V$ with $av+bw\in W$ whenever $v,w\in W$ and $a,b\in\mathbb{F}$. With the restricted operations $W$ is then a vector space over $\mathbb{F}$ in its own right, and $0\in W$.
:::

:::definition[Span, independence, basis, dimension]{provenance=adapted src="lee-2013:App. B, pp. 618–619; kreyszig-1978:§2.1, Def. 2.1-6, p. 53, Def. 2.1-7, p. 54; hassani-2013:§2.1, Thm 2.1.6, p. 22, and Defs. 2.1.7–2.1.9, p. 23"}
Let $V$ be a vector space over $\mathbb{F}$ and let $S\subseteq V$.

- A **linear combination** of $S$ is a finite sum $\sum_{i=1}^{k} a_i v_i$ with $k\ge 0$, $a_i\in\mathbb{F}$ and $v_1,\dots,v_k$ distinct elements of $S$; the empty sum is $0$. The set $\operatorname{span} S$ of all of them is a subspace, indeed the smallest subspace containing $S$, and $\operatorname{span}\varnothing = \{0\}$. If $\operatorname{span} S = V$ we say $S$ **spans** $V$.
- $S$ is **linearly dependent** if $\sum_{i=1}^{k} a_i v_i = 0$ for some distinct $v_1,\dots,v_k \in S$ and some scalars $a_i$ that are not all zero, and **linearly independent** otherwise. So $\varnothing$ is independent, and any $S$ containing $0$ is dependent.
- An ordered tuple $(v_1,\dots,v_k)$ of elements of $V$ is **linearly independent** if $\sum_{i=1}^{k}a_iv_i = 0$ holds only for $a_1=\dots=a_k=0$. A repeated entry makes a tuple dependent, although the underlying set may be independent.
- A **basis** of $V$ is a linearly independent subset that spans $V$; an **ordered basis** is a basis together with a choice of ordering, written $(e_1,\dots,e_n)$. $V$ is **finite-dimensional** if it has a finite basis and **infinite-dimensional** otherwise.
:::

:::definition[Standard spaces]{provenance=adapted src="hassani-2013:§2.1, Example 2.1.2, pp. 20–21; kreyszig-1978:§2.1, Examples 2.1-2 to 2.1-5, pp. 52–53"}
The spaces used throughout, all with pointwise operations:

| Space | Elements | Dimension over $\mathbb{F}$ |
|---|---|---|
| $\mathbb{F}^n$ | $n$-tuples $(x_1,\dots,x_n)$ | $n$ |
| $M_{m\times n}(\mathbb{F})$ | $m\times n$ matrices | $mn$ |
| $\mathcal{P}_n(\mathbb{F})$ | polynomials of degree $\le n$ | $n+1$ |
| $\mathcal{P}(\mathbb{F})$ | all polynomials | infinite |
| $C^k([a,b],\mathbb{F})$, $0\le k\le\infty$ | $k$ times continuously differentiable functions on $[a,b]$ | infinite |
| $\ell^2(\mathbb{F})$ | sequences $(x_n)_{n\in\mathbb{N}}$ with $\sum_n \lvert x_n\rvert^2<\infty$ | infinite |

A **function space** is a subspace of the space of all functions from a set $X$ to $\mathbb{F}$; the last three rows are of this kind. Here $a<b$ are real and $[a,b]$ is the closed interval.
:::

:::statement[Bases and dimension]{provenance=adapted src="lee-2013:App. B, Lemma B.2 and Prop. B.3, pp. 619–620, Exercises B.4–B.5, p. 620; dummit-foote-2004:§11.1, Prop. 1 and Cor. 2, pp. 409–410; kreyszig-1978:§2.1, p. 55 and Thm 2.1-8, p. 55; rhb-2006:§8.1.1, eqs. (8.10)–(8.11), pp. 243–244"}
Let $V$ be a vector space over $\mathbb{F}$.

1. **Exchange bound.** If some set of $n$ vectors spans $V$, then every subset of $V$ with more than $n$ elements is linearly dependent.
2. Every finite spanning set of $V$ contains a basis of $V$. In particular, if $V$ is spanned by finitely many vectors then $V$ is finite-dimensional.
3. **Invariance of dimension.** If $V$ is finite-dimensional, all its bases are finite and have the same number of elements. That number is the **dimension** $\dim_{\mathbb{F}} V$, and $\dim_{\mathbb{F}} V = 0$ exactly when $V = \{0\}$.
4. **Coordinates.** If $(e_1,\dots,e_n)$ is an ordered basis of $V$, then for each $v\in V$ there is exactly one tuple $(x_1,\dots,x_n)\in\mathbb{F}^n$ with $v = \sum_{i=1}^{n} x_i e_i$. The $x_i$ are the **components** of $v$ in that basis.
5. Suppose $\dim_{\mathbb{F}} V = n < \infty$. Any independent set in $V$ can be enlarged to a basis of $V$ by adjoining further vectors. Every subspace $W\subseteq V$ is again finite-dimensional, with $\dim_{\mathbb{F}} W \le n$, and $\dim_{\mathbb{F}} W = n$ holds if and only if $W = V$.
6. Every vector space has a basis, and any two bases of the same vector space have the same cardinality. For infinite-dimensional $V$ the proof uses Zorn's lemma.
:::

:::idea{provenance=original}
Two mechanisms carry all six items. The first is an exchange move: if a list of $n$ vectors spans $V$, then any vector of an independent set can be traded for one of the listed vectors without losing the spanning property, because when it is expanded in the current list some listed vector must occur with a nonzero coefficient - otherwise the new vector would be a combination of the independent vectors already traded in, which independence forbids. After $n$ trades the independent vectors alone span, and the $(n+1)$-st is then a combination of them, which is the contradiction behind part 1. The second mechanism is minimality: a spanning set with as few members as possible has to be independent, since a dependency would let one member be discarded. Part 2 is that observation, parts 3 and 5 are part 1 used to count, part 4 is the definition of independence read as a uniqueness statement, and part 6 replaces "as few as possible" by "maximal", which is what Zorn's lemma supplies.
:::

:::proof{provenance=adapted src="lee-2013:App. B, Lemma B.2 and Prop. B.3, pp. 619–620, and Exercises B.4–B.5, p. 620; dummit-foote-2004:§11.1, Prop. 1, Cor. 2 and Thm 3, pp. 409–410; kreyszig-1978:§2.1, p. 55 and Thm 2.1-8, p. 55"}
**1, the exchange bound.** Let $S = \{v_1, \dots, v_n\}$ span $V$ and let $W \subseteq V$ have more than $n$ elements. A set with a dependent subset is itself dependent, the same relation serving both, so it is enough to produce a dependency among $n+1$ distinct members $w_1, \dots, w_{n+1}$ of $W$. Suppose instead that $\{w_1, \dots, w_{n+1}\}$ is independent.

We show by induction on $k$ that for $k = 0, 1, \dots, n$ there is an index set $J_k \subseteq \{1, \dots, n\}$ with $n - k$ elements such that $\{w_1, \dots, w_k\} \cup \{v_j : j \in J_k\}$ spans $V$. For $k = 0$ take $J_0 = \{1, \dots, n\}$, where the assertion is the hypothesis on $S$.

Assume it for some $k$ with $0 \le k \le n - 1$, so that $J_k$ has $n - k \ge 1$ elements, and expand the next of the $w$'s in the current spanning set:

$$
w_{k+1} = \sum_{i=1}^{k} a_i w_i + \sum_{j \in J_k} b_j v_j .
$$

Not every $b_j$ can vanish: otherwise $w_{k+1} - \sum_{i \le k} a_i w_i = 0$ would be a relation among the distinct vectors $w_1, \dots, w_{k+1}$ whose coefficient at $w_{k+1}$ is $1$, contradicting independence. Fix $m \in J_k$ with $b_m \neq 0$ and solve:

$$
v_m = b_m^{-1}\Bigl( w_{k+1} - \sum_{i=1}^{k} a_i w_i - \sum_{j \in J_k,\, j \neq m} b_j v_j \Bigr) .
$$

So $v_m$ lies in the span of $T = \{w_1, \dots, w_{k+1}\} \cup \{v_j : j \in J_k \setminus \{m\}\}$. Every other member of the old spanning set lies in $T$ itself, so $\operatorname{span} T$ contains the old spanning set and hence contains its span, which is $V$. Taking $J_{k+1} = J_k \setminus \{m\}$ completes the induction step.

At $k = n$ the set $J_n$ is empty and $\{w_1, \dots, w_n\}$ spans $V$. Then $w_{n+1} = \sum_{i \le n} c_i w_i$ for some scalars, which is again a nontrivial relation among $w_1, \dots, w_{n+1}$. This contradiction shows $\{w_1, \dots, w_{n+1}\}$ is dependent, and with it $W$.

**2, a finite spanning set contains a basis.** Let $S$ be finite with $\operatorname{span} S = V$. The subsets of $S$ that span $V$ are finite in number and include $S$, so one of them, $B$, has fewest elements. If $B$ were dependent there would be distinct $b_1, \dots, b_k \in B$ and scalars $a_i$, not all zero, with $\sum_i a_i b_i = 0$; choosing $a_j \neq 0$ gives $b_j = -a_j^{-1}\sum_{i \neq j} a_i b_i$, so $b_j \in \operatorname{span}(B \setminus \{b_j\})$. Then $B \setminus \{b_j\}$ has every member of $B$ in its span, so it spans $V$ as well, and it is smaller than $B$ - impossible. Hence $B$ is independent and spans: a basis. In particular a space spanned by finitely many vectors has a finite basis and is finite-dimensional. (For $V = \{0\}$ the smallest spanning subset is $\varnothing$, which is independent with $\operatorname{span}\varnothing = \{0\}$.)

**3, invariance of dimension.** Let $V$ be finite-dimensional and let $E$ be a finite basis, with $n$ elements. Since $E$ spans $V$, part 1 makes every subset of $V$ with more than $n$ elements dependent; a basis is independent, so no basis has more than $n$ elements, and in particular every basis is finite. If $F$ is a basis with $m$ elements then $m \le n$; exchanging the roles of $E$ and $F$ in the same sentence gives $n \le m$. So all bases have $n$ elements, and $\dim_{\mathbb{F}} V = n$ is well defined. Finally $\varnothing$ is a basis of $\{0\}$, so $\dim_{\mathbb{F}}\{0\} = 0$; and if $\dim_{\mathbb{F}} V = 0$ then some basis is empty, whence $V = \operatorname{span}\varnothing = \{0\}$.

**4, coordinates.** The basis spans, so $v$ is a linear combination of distinct basis vectors; adding the missing basis vectors with coefficient $0$ writes $v = \sum_{i=1}^{n} x_i e_i$. If also $v = \sum_i y_i e_i$ then $\sum_i (x_i - y_i) e_i = 0$. The entries of an ordered basis are distinct, so $(e_1, \dots, e_n)$ is an independent tuple, and therefore every coefficient $x_i - y_i$ vanishes.

**5, enlarging an independent set.** Let $\dim_{\mathbb{F}} V = n$ and let $A \subseteq V$ be independent; by part 1, $A$ has at most $n$ elements. If $\operatorname{span} A \neq V$, choose $v \in V \setminus \operatorname{span} A$. Then $A \cup \{v\}$ is independent: in a relation $\sum_i a_i u_i + c v = 0$ with distinct $u_i \in A$, the coefficient $c$ must vanish, since otherwise $v = -c^{-1}\sum_i a_i u_i$ would lie in $\operatorname{span} A$, and with $c = 0$ independence of $A$ kills the remaining coefficients. The enlarged set has one more element, and sizes cannot exceed $n$, so after at most $n - |A|$ such steps the set spans $V$ and is a basis containing $A$.

**5, subspaces.** Let $W \subseteq V$ be a subspace. An independent subset of $W$ is independent in $V$, hence has at most $n$ elements, so among the independent subsets of $W$ there is one, $A$, of greatest size. It spans $W$: otherwise the previous paragraph, applied inside $W$ to a vector of $W \setminus \operatorname{span} A$, would produce a larger independent subset of $W$. So $W$ is finite-dimensional with $\dim_{\mathbb{F}} W = |A| \le n$. If $\dim_{\mathbb{F}} W = n$, take a basis $B$ of $W$: it is an independent subset of $V$ with $n$ elements, so enlarging it to a basis of $V$ adds nothing, every basis of $V$ having exactly $n$ elements by part 3; hence $B$ is a basis of $V$ and $W = \operatorname{span} B = V$. The converse is immediate.

**6, existence of a basis.** Partially order the independent subsets of $V$ by inclusion. The collection is nonempty, containing $\varnothing$. A chain $\mathcal{C}$ of independent sets has its union $U$ as an upper bound, and $U$ is independent: a relation involves finitely many distinct vectors of $U$, each lying in some member of $\mathcal{C}$, and since $\mathcal{C}$ is totally ordered the largest of those finitely many members contains all of them, so independence there forces the coefficients to vanish. By :ref[Zorn's lemma]{to=found.zorn-lemma} there is a maximal independent $B \subseteq V$. It spans: a vector outside $\operatorname{span} B$ could be adjoined with independence preserved, by the computation in part 5, contradicting maximality. So $B$ is a basis. $\square$
:::

:::note[The one part proved only in finite dimensions]{provenance=adapted src="kreyszig-1978:§2.1, p. 55; lee-2013:App. B, Exercise B.5(b), p. 620"}
The second half of part 6 - that any two bases of the same space have the same cardinality, infinite cardinalities included - is taken from the sources and not proved here. Kreyszig records it on p. 55 as a statement whose proof needs more set theory than he develops, referring to the literature; Lee poses it as Exercise B.5(b), p. 620, with a hint sketching the argument. Part 3 above proves the finite-dimensional case, which is what the rest of the handbook uses.
:::

:::note[What it means]{provenance=original}
These axioms isolate exactly what is needed to add objects and rescale them, so that one argument covers arrows in space, $n$-tuples of numbers, matrices, and functions at once. Parts 3 and 4 are what let you replace a vector by a column of numbers without ambiguity: a basis turns abstract vectors into coordinates, and a different basis gives different coordinates for the same vector. Reach for this unit whenever you need to know that a set of objects you can add is "$n$-dimensional", or that a representation in coordinates is unique.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="hassani-2013:§2.1, Example 2.1.2 items 2–4, p. 20, Example 2.1.5, p. 22, and Def. 2.1.9, p. 23; kreyszig-1978:§2.1, p. 55; stakgold-holst-2011:§4.6, pp. 276–277"}
- **The scalar field is part of the data.** $\mathbb{C}$ is one-dimensional over $\mathbb{C}$ but two-dimensional over $\mathbb{R}$, with basis $\{1,i\}$. Hassani therefore writes $\dim_{\mathbb{C}}$ and $\dim_{\mathbb{R}}$, and we keep the subscript whenever both are in play. Also, $\mathbb{R}$ is *not* a vector space over $\mathbb{C}$: scalar multiplication would leave the set.
- **Where finiteness enters.** Parts 1 and 2 each assume a finite spanning set, and for different reasons: part 1 needs the number $n$ to count against, and part 2 needs the subsets of the spanning set to be finite in number, so that a smallest spanning one can be selected. Parts 3 and 5 then rest on part 1, which is what caps the size of an independent set; part 4 needs only that the ordered basis it is given is finite. Part 6 drops finiteness altogether and pays for it with Zorn's lemma, which is why the cardinality half of it is harder than part 3. The exchange step used in part 1 is the replacement argument of :cite[Dummit and Foote]{work=dummit-foote-2004 loc="§11.1, Thm 3, p. 410"}, which swaps independent vectors into a basis one at a time.
- **Two meanings of "basis" in infinite dimensions.** The basis defined here allows only *finite* linear combinations; Kreyszig calls it a **Hamel basis**. A **Schauder basis** of a normed space instead expands each vector as a convergent infinite series. The sequences $e_n = (0,\dots,0,1,0,\dots)$ form a Schauder basis of $\ell^2$ but not a Hamel basis, because their finite combinations give only the sequences with finitely many nonzero terms. The distinction matters from :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces} onwards; see also :ref[orthonormal bases]{to=funcan.orthonormal-bases}.
- **Subspaces.** An intersection of subspaces is a subspace, but a union need not be: the two coordinate axes in $\mathbb{R}^2$ are subspaces whose union is not closed under addition. Requiring a subspace to be nonempty is not cosmetic: $\varnothing$ satisfies the closure condition vacuously yet is not a vector space, since it has no zero element.
:::

:::example[A basis of the cubic polynomials, and the coordinates it assigns]{provenance=original}
Work in $\mathcal{P}_3(\mathbb{R})$, the real polynomials of degree at most $3$, and take the ordered list

$$
B = \bigl(\, 1 + x,\; x + x^{2},\; x^{2} + x^{3},\; x^{3} \,\bigr) .
$$

**$B$ is a basis, by solving once and for all.** Let $p(x) = p_0 + p_1 x + p_2 x^{2} + p_3 x^{3}$ be arbitrary and look for $a, b, c, d$ with $a(1 + x) + b(x + x^{2}) + c(x^{2} + x^{3}) + d x^{3} = p$. Comparing coefficients of $1, x, x^{2}, x^{3}$ gives the system

$$
a = p_0, \qquad a + b = p_1, \qquad b + c = p_2, \qquad c + d = p_3 ,
$$

which is solved from the top down, with no choice at any stage:

$$
a = p_0, \quad b = p_1 - p_0, \quad c = p_2 - p_1 + p_0, \quad d = p_3 - p_2 + p_1 - p_0 .
$$

A solution exists for every $p$, so $B$ spans; taking $p = 0$ gives $a = b = c = d = 0$, so $B$ is independent. Hence $B$ is a basis of $\mathcal{P}_3(\mathbb{R})$, and part 3 confirms the entry $n + 1 = 4$ of the table of standard spaces, since the obvious basis $(1, x, x^{2}, x^{3})$ also has four elements.

**Coordinates of one polynomial.** For $p(x) = 2 - 3x + x^{2} + 5x^{3}$ the formulas give $a = 2$, $b = -3 - 2 = -5$, $c = 1 + 3 + 2 = 6$ and $d = 5 - 1 - 3 - 2 = -1$, so the component tuple of $p$ in the ordered basis $B$ is $(2, -5, 6, -1)$. Expanding back:

$$
2(1 + x) - 5(x + x^{2}) + 6(x^{2} + x^{3}) - x^{3} = 2 + (2 - 5)x + (-5 + 6)x^{2} + (6 - 1)x^{3} = 2 - 3x + x^{2} + 5x^{3} ,
$$

as part 4 promises, and no other tuple does it.

**Five vectors must be dependent, and here is the relation.** Since $\mathcal{P}_3(\mathbb{R})$ is spanned by four vectors, part 1 says that any five of its elements are dependent - before any computation. Take

$$
q_1 = 1, \quad q_2 = 1 + x, \quad q_3 = 1 + x + x^{2}, \quad q_4 = 1 + x + x^{2} + x^{3}, \quad q_5 = x^{3} .
$$

The first four are independent (the same top-down solve applies), yet the five together satisfy $q_4 - q_3 - q_5 = 0$, because $q_4 - q_3 = x^{3} = q_5$. One relation is all that part 1 predicts, and one is what appears.
:::

:::example[The same set of vectors, two scalar fields, two dimensions]{provenance=original}
Regard $\mathbb{C}$ as a vector space and consider $\{1 + i,\, 1 - i\}$.

**Over $\mathbb{R}$ it is a basis, so $\dim_{\mathbb{R}} \mathbb{C} = 2$.** Independence: $a(1 + i) + b(1 - i) = (a + b) + (a - b)i$ vanishes only if $a + b = 0$ and $a - b = 0$, that is $a = b = 0$. Spanning: given $z = x + iy$ with $x, y \in \mathbb{R}$, the choice $a = (x + y)/2$, $b = (x - y)/2$ works. For $z = 3 + 5i$ this gives $a = 4$ and $b = -1$, and indeed $4(1 + i) - (1 - i) = 3 + 5i$.

**Over $\mathbb{C}$ it is dependent, and $\dim_{\mathbb{C}} \mathbb{C} = 1$.** Now $-i$ is an admissible scalar, and $-i(1 + i) = -i - i^{2} = 1 - i$, so $(1 - i) - (-i)(1 + i) = 0$ is a nontrivial relation. The single vector $1 + i$ already spans, since $z = \bigl(z/(1 + i)\bigr)(1 + i)$, and it is independent as a nonzero vector, so $\{1 + i\}$ is a basis over $\mathbb{C}$.

The underlying set of vectors never changed; what changed is which coefficients are allowed. This is why the subscript on $\dim_{\mathbb{F}}$ is not decoration.
:::

:::application{provenance=original}
**Counting modes before solving anything.** The small displacements of an $N$-atom molecule form a real vector space of dimension $3N$, one coordinate per atom per direction. Inside it, the rigid motions span a subspace of dimension $6$ for a bent molecule - three translations and three rotations - and $5$ for a linear one, a rotation about the molecular axis producing no displacement. The vibrations are what is left, so a bent molecule has $3N - 6$ vibrational modes and a linear one $3N - 5$: three for water and four for carbon dioxide, both with $N = 3$. These numbers are dimensions, fixed by part 3 before any frequency is computed, and they tell a spectroscopist how many lines to look for. See :ref[Normal modes]{to=linalg.normal-modes}.

**Why there is no third independent harmonic solution.** The solutions of $\ddot y + \omega^{2} y = 0$ form a vector space with basis $(\cos \omega t, \sin \omega t)$, of dimension $2$. The amplitude-phase form $\cos(\omega t - \varphi)$ is a solution too, and part 1 says in advance that it cannot be independent of the first two: a space spanned by two vectors has every three-element subset dependent. The explicit relation is the addition formula, $\cos(\omega t - \varphi) = \cos\varphi \cos \omega t + \sin\varphi \sin \omega t$. More generally, for a linear homogeneous equation of order $n$ the solution space has dimension $n$, so $n$ independent solutions give every solution and any $n + 1$ of them satisfy a relation. See :ref[Linear ODE theory]{to=ode.linear-ode-theory}.

**Coordinates are what make a computer able to solve a field problem.** A Galerkin or finite-element method replaces an infinite-dimensional function space by a subspace of dimension $n$ with a chosen basis; part 4 is what makes the vector of $n$ coefficients an unambiguous name for the approximate field, and part 3 is what makes "$n$ degrees of freedom" independent of which basis the implementation happens to use. The warning in the remark above belongs here too: in the infinite-dimensional space itself, finite combinations of a basis in the present sense do not exhaust the space, which is why the convergence of the approximation is a separate question from the algebra. See :ref[Finite elements]{to=num.finite-elements} and :ref[orthonormal bases]{to=funcan.orthonormal-bases}.

**The scalar field is physics, not convention.** A quantum state space is a complex vector space: a spin-$j$ particle has $\dim_{\mathbb{C}} = 2j + 1$, which is $2$ for a spin-$\tfrac12$ particle. Regarded over $\mathbb{R}$ the same space has twice that dimension, and the extra real parameters are the relative phases, which interference experiments measure. Writing $\dim_{\mathbb{C}}$ rather than $\dim$ is thus a statement that multiplication by $i$ is part of the structure being used.
:::
