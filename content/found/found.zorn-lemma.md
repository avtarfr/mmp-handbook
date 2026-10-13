---
id: found.zorn-lemma
title: Zorn's lemma and the axiom of choice
kind: theorem
level: advanced
summary: States Zorn's lemma on partially ordered sets, proves that it implies the well-ordering principle, the axiom of choice and the Hausdorff maximal principle, and gives the standard recipe for extracting a maximal object from it.
prereqs: [found.sets-cardinality]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§4.1, Def. 4.1-1 and Examples 4.1-2 to 4.1-5, pp. 210-211; Zorn's lemma 4.1-6 and its footnote, p. 211; Applications 4.1-7, p. 211, and 4.1-8, p. 212"
    pages: "210-212"
    role: definition of partial ordering, chain, upper bound and maximal element; statement of Zorn's lemma as an axiom; the choice-function form of the axiom of choice; the Hamel-basis and total-orthonormal-set applications
  - work: folland-1999
    loc: "Prologue, §0.1, p. 4; §0.2, pp. 4-6 (Hausdorff maximal principle 0.1, Zorn's lemma 0.2, well ordering principle 0.3 with proof, axiom of choice 0.4 with proof, Cor. 0.5); Notes to §4.6, p. 148"
    pages: "4-6, 148"
    role: orderings, well orderings and the Cartesian-product form of the axiom of choice; the Hausdorff maximal principle; the proof routes from Zorn's lemma to the well ordering principle and from there to the axiom of choice; Tychonoff's theorem and the axiom of choice
  - work: dummit-foote-2004
    loc: "Appendix I, §1, Definition and Examples, pp. 905-906; §2, pp. 907-909 (partial order, chain, upper bound, maximal element; Zorn's Lemma; the Axiom of Choice; the Well Ordering Principle; Theorem 2)"
    pages: "905-909"
    role: choice functions and the Cartesian product of an indexed family; statement of Zorn's lemma; the three-way equivalence theorem and its independence from the Zermelo-Fraenkel axioms; the counterexample poset of proper subsets of the positive integers
  - work: reed-simon-1980
    loc: "§I.1, Definition and Theorem I.2, p. 3; §IV.3, remark following Thm IV.5, p. 101"
    pages: "3, 101"
    role: the "axiom or theorem, depending on where one starts" framing, and a stronger-looking phrasing of Zorn's lemma recorded in the note; Tychonoff's theorem and its equivalence with Zorn's lemma
  - work: lee-2013
    loc: "Appendix B, Exercise B.5(a), p. 620; Appendix B, 'Direct Products and Direct Sums', p. 639"
    pages: "620, 639"
    role: extension of a linearly independent set to a basis in infinite dimensions as the stated use of Zorn's lemma; the axiom of choice as what makes an infinite Cartesian product nonempty
---

:::definition[Partial orders, chains, bounds and maximal elements]{provenance=adapted src="kreyszig-1978:§4.1, Def. 4.1-1, p. 210; folland-1999:Prologue, §0.2, pp. 4-5; dummit-foote-2004:Appendix I, §2, pp. 907-908; reed-simon-1980:§I.1, Definition, p. 3"}
A **partial order** on a set $M$ is a relation, written $\preceq$, such that for all $a, b, c \in M$

- $a \preceq a$ (reflexivity);
- $a \preceq b$ and $b \preceq a$ force $a = b$ (antisymmetry);
- $a \preceq b$ and $b \preceq c$ give $a \preceq c$ (transitivity).

The pair $(M, \preceq)$ is a **partially ordered set**, or **poset**. We write $a \prec b$ for "$a \preceq b$ and $a \neq b$". Nothing requires two given elements to be related: if neither $a \preceq b$ nor $b \preceq a$ holds, $a$ and $b$ are **incomparable**, and the word "partial" records exactly this possibility. A poset in which no two elements are incomparable is **totally ordered** (equivalently **linearly ordered**); a totally ordered subset of a poset is a **chain**.

Let $C \subseteq M$. An element $u \in M$ is an **upper bound** of $C$ if $x \preceq u$ for every $x \in C$. The upper bound is required to lie in $M$, but it need not lie in $C$, and it need not exist at all.

An element $m \in M$ is **maximal** if the only $x \in M$ with $m \preceq x$ is $x = m$: nothing in $M$ lies strictly above $m$. Three cautions, all of which matter below.

1. A maximal element need not be a **greatest** element. Maximality says that nothing beats $m$; it does not say that $m$ beats everything, because elements incomparable with $m$ are neither.
2. Maximal elements need not be unique.
3. A maximal element of a subset $C$ need not be an upper bound of $C$, again because of incomparability.

Four examples fix the idea; the first three are standard and the orders should be checked against the three axioms once.

- $\mathbb{R}$ with its usual $\le$ is totally ordered and has no maximal element.
- The power set $\mathcal{P}(X)$ ordered by inclusion is partially ordered, with $X$ as its one maximal element. Distinct singletons $\{x\}$ and $\{y\}$ are incomparable, so the order is not total as soon as $X$ has two elements.
- $\mathbb{N}$ ordered by divisibility ($m \preceq n$ when $m$ divides $n$) is partially ordered; $2$ and $3$ are incomparable.
- In $\mathbb{R}^{n}$, declaring $x \preceq y$ when $x_j \le y_j$ for every coordinate $j$ is a partial order, and for $n \ge 2$ it is not total.
:::

:::definition[Choice functions, well orderings]{provenance=adapted src="dummit-foote-2004:Appendix I, §1, Definition, p. 905; folland-1999:Prologue, §0.1, p. 4 and §0.2, p. 5"}
Let $\{X_\alpha\}_{\alpha \in A}$ be a family of sets indexed by a nonempty set $A$. A **choice function** for the family is a map

$$
f : A \longrightarrow \bigcup_{\alpha \in A} X_\alpha
\qquad\text{with}\qquad
f(\alpha) \in X_\alpha \ \text{ for every } \alpha \in A ,
$$

that is, a simultaneous selection of one element out of each $X_\alpha$. As in :ref[Sets, functions and countability]{to=found.sets-cardinality}, the **Cartesian product** $\prod_{\alpha \in A} X_\alpha$ *is* the set of these choice functions, so "a choice function exists" and "the product is nonempty" are the same assertion.

A total order $\preceq$ on a set $X$ is a **well ordering** if every nonempty subset of $X$ has a least element: for each nonempty $B \subseteq X$ there is $s \in B$ with $s \preceq b$ for all $b \in B$. Such an $s$ is unique, by antisymmetry. The usual order on $\mathbb{N}$ is a well ordering; the usual order on $\mathbb{R}$, and on $\mathbb{Q}$, is not, since $(0,1)$ has no least element.
:::

:::statement[Zorn's lemma]{provenance=adapted src="kreyszig-1978:§4.1, 4.1-6, p. 211; folland-1999:Prologue, §0.2, 0.2, p. 5; dummit-foote-2004:Appendix I, §2, Zorn's Lemma, p. 909"}
Suppose $(M, \preceq)$ is a poset for which

- $M \neq \emptyset$, and
- each chain $C \subseteq M$ admits at least one upper bound belonging to $M$.

Then some element of $M$ is maximal.

The second hypothesis is required of *all* chains of $M$, not merely of those one happens to be interested in; the conclusion asserts existence only, and says nothing about how many maximal elements there are or how to find one.
:::

:::statement[Equivalence with the axiom of choice]{provenance=adapted src="dummit-foote-2004:Appendix I, §2, Theorem 2 and the preceding independence remark, p. 909; folland-1999:Prologue, §0.1-0.4, pp. 5-6; kreyszig-1978:§4.1, footnote to 4.1-6, p. 211"}
Work in Zermelo-Fraenkel set theory with no choice principle assumed. Then these four assertions imply one another, and each is independent of that theory: granting the theory is consistent, neither the assertion nor its negation is derivable in it.

1. **Zorn's lemma**, as stated above.
2. **The axiom of choice.** Any nonempty family of nonempty sets possesses a choice function; equivalently, its product is not empty.
3. **The well ordering principle.** On every nonempty set there exists a well ordering.
4. **The Hausdorff maximal principle.** Inside any poset there is a chain which is maximal for inclusion, that is, properly contained in no other chain.

Dummit and Foote state the equivalence of items 1-3 as their Theorem 2 (p. 909) and refer the reader elsewhere for its proof; Folland takes item 4 as his starting principle and derives items 1-3 from it (pp. 5-6). Because none of the four is a theorem of Zermelo-Fraenkel set theory, one of them must be adopted as an axiom; which one is a matter of taste. Kreyszig assumes Zorn's lemma (p. 211), Folland assumes the Hausdorff maximal principle (p. 5), and Reed and Simon note that the choice is exactly this, a starting point rather than a result (p. 3).
:::

:::idea{provenance=original}
Zorn's lemma is a substitute for induction in situations where there is no "next step" to take. To build a maximal object one would like to enlarge a partial object again and again; induction along $\mathbb{N}$ runs out after countably many enlargements, and in general no countable process reaches the end. Zorn's lemma removes the process altogether: it asks only that every totally ordered family of partial objects can be capped by a single partial object, and returns an object that cannot be enlarged at all.

The proofs below run in one direction around the circle of equivalences and show how each statement feeds the next. Zorn's lemma is applied to a poset whose elements are themselves *orders* on subsets of $X$; the maximal element of that poset turns out to be a well ordering of all of $X$, because anything less could be extended by one point. Once $X$ is well ordered, a choice function costs nothing: take the least element of each $X_\alpha$. The one implication we do not prove, the return from the axiom of choice to Zorn's lemma, is the genuinely hard one, and it is where all the set-theoretic work of the equivalence sits.
:::

:::proof[Zorn's lemma implies the other three]{provenance=adapted src="folland-1999:Prologue, §0.2, pp. 5-6 (proof routes of 0.1, 0.3 and 0.4); dummit-foote-2004:Appendix I, §2, Theorem 2, p. 909"}
Throughout, $X$ is a nonempty set and Zorn's lemma is assumed.

**Step 1: the Hausdorff maximal principle.** Let $(X, \preceq)$ be a poset and let $\mathcal{L}$ be the set of all chains of $X$, ordered by inclusion. It is nonempty, since $\emptyset \in \mathcal{L}$.

Let $\mathcal{C} \subseteq \mathcal{L}$ be a chain of chains and put $U = \bigcup_{C \in \mathcal{C}} C$, with $U = \emptyset$ if $\mathcal{C}$ is empty. Then $U \in \mathcal{L}$: given $x, y \in U$, say $x \in C_1$ and $y \in C_2$ with $C_1, C_2 \in \mathcal{C}$, the fact that $\mathcal{C}$ is totally ordered by inclusion puts both of $C_1, C_2$ inside the larger of the two, which is a chain of $X$, so $x$ and $y$ are comparable. Plainly $C \subseteq U$ for each $C \in \mathcal{C}$, so $U$ is an upper bound of $\mathcal{C}$ in $\mathcal{L}$.

Zorn's lemma applies to $\mathcal{L}$ and produces a maximal element, which is by definition a chain of $X$ contained in no strictly larger chain.

**Step 2: the well ordering principle.** Let $\mathcal{W}$ be the set of pairs $(E, \preceq_E)$ in which $E \subseteq X$ and $\preceq_E$ is a well ordering of $E$. Order $\mathcal{W}$ by

$$
(E_1, \preceq_1) \sqsubseteq (E_2, \preceq_2)
\quad\Longleftrightarrow\quad
E_1 \subseteq E_2,\ \ \preceq_2 \text{ agrees with } \preceq_1 \text{ on } E_1,\ \text{ and } y \preceq_2 x \ \text{ for all } y \in E_1,\ x \in E_2 \setminus E_1 .
$$

The third clause says that $E_1$ sits at the bottom of $E_2$ as an initial segment; it is what makes the argument work, and it is dropped at no stage. Reflexivity, antisymmetry and transitivity of $\sqsubseteq$ are immediate from those of $\subseteq$ together with the agreement clause. $\mathcal{W}$ is nonempty: $X$ is nonempty, so pick $x \in X$ and take the one-point well ordering of $\{x\}$.

Let $\mathcal{C} = \{(E_i, \preceq_i)\}_{i \in I}$ be a nonempty chain in $\mathcal{W}$. Put $E = \bigcup_i E_i$ and let $\preceq$ be the union of the relations $\preceq_i$, that is, $y \preceq x$ when $y \preceq_i x$ for some $i$. We check the three things an upper bound needs.

- *$\preceq$ is a well-defined total order on $E$.* Given $x, y \in E$, say $x \in E_i$ and $y \in E_j$, one of $(E_i, \preceq_i) \sqsubseteq (E_j, \preceq_j)$ or the reverse holds, since $\mathcal{C}$ is a chain; in either case both points lie in the larger set and are compared there, and the agreement clause makes the verdict independent of which $E_k$ one reads it in. Transitivity and antisymmetry follow the same way, by moving the two or three points into a single $E_k$.
- *$\preceq$ well orders $E$.* Let $B \subseteq E$ be nonempty and choose $x \in B$, say $x \in E_i$. Then $B \cap E_i$ is a nonempty subset of the well-ordered set $E_i$, so it has a $\preceq_i$-least element $m$. We claim $m$ is $\preceq$-least in $B$. Let $b \in B$, say $b \in E_j$. If $(E_j, \preceq_j) \sqsubseteq (E_i, \preceq_i)$ then $b \in E_i$, so $b \in B \cap E_i$ and $m \preceq_i b$. Otherwise $(E_i, \preceq_i) \sqsubseteq (E_j, \preceq_j)$; if $b \in E_i$ the same conclusion holds, and if $b \in E_j \setminus E_i$ then the initial-segment clause gives $y \preceq_j b$ for every $y \in E_i$, in particular for $y = m$.
- *$(E, \preceq)$ dominates every member of $\mathcal{C}$.* Each $E_i \subseteq E$, the orders agree by construction, and any $x \in E \setminus E_i$ lies in some $E_j$ with $(E_i, \preceq_i) \sqsubseteq (E_j, \preceq_j)$, whence $y \preceq x$ for all $y \in E_i$.

So $(E, \preceq) \in \mathcal{W}$ is an upper bound of $\mathcal{C}$, and Zorn's lemma gives a maximal $(E_\ast, \preceq_\ast) \in \mathcal{W}$. Suppose $E_\ast \neq X$ and pick $x_0 \in X \setminus E_\ast$. Extend $\preceq_\ast$ to $E_\ast \cup \{x_0\}$ by placing $x_0 \succ y$ for every $y \in E_\ast$. The result is a well ordering: a nonempty subset either meets $E_\ast$, and then its least element is the one it has in $E_\ast$, or it is $\{x_0\}$. The extension dominates $(E_\ast, \preceq_\ast)$ strictly, contradicting maximality. Hence $E_\ast = X$ and $\preceq_\ast$ well orders $X$.

**Step 3: the axiom of choice.** Let $\{X_\alpha\}_{\alpha \in A}$ be a nonempty family of nonempty sets and set $X = \bigcup_{\alpha \in A} X_\alpha$, which is nonempty. By Step 2 fix a well ordering of $X$ and define

$$
f(\alpha) = \text{the least element of } X_\alpha \text{ in that well ordering} .
$$

Each $X_\alpha$ is a nonempty subset of $X$, so the least element exists and is unique, and $f(\alpha) \in X_\alpha$ by construction. Thus $f$ is a choice function and $\prod_{\alpha \in A} X_\alpha \neq \emptyset$. Note what has been bought: one well ordering, chosen once, decides all the selections at once, which is precisely what an arbitrary family refuses to do by itself.

**Closing the circle.** The Hausdorff maximal principle implies Zorn's lemma in one line: take a maximal chain $C$ of $M$, let $u$ be an upper bound of $C$, and observe that $u$ is maximal, since $u \prec x$ would make $C \cup \{x\}$ a strictly larger chain. The remaining implication, from the axiom of choice back to Zorn's lemma or to the Hausdorff maximal principle, is the deep one and is not proved here; Folland records that the two are logically equivalent (p. 6) and Dummit and Foote refer to Hewitt and Stromberg for the full set of implications (p. 909). $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
Zorn's lemma has exactly two hypotheses, and each has a one-line counterexample.

**"$M$ is nonempty."** Without it the conclusion is false for the empty poset, which has no elements and so no maximal one, while the chain condition holds vacuously if one reads "every chain" as "every nonempty chain". The two readings of the chain condition are what is at stake: if the empty chain is admitted, an upper bound for it is any element of $M$ whatsoever, so the chain condition already forces $M \neq \emptyset$ and the first hypothesis becomes redundant. Kreyszig, Folland and Dummit and Foote all state nonemptiness separately, and that is the convention used here.

**"Every chain has an upper bound in $M$."** Drop it and the conclusion fails: $\mathbb{R}$ with its usual order has no maximal element, and the obstruction is visible in the chain $\mathbb{R}$ itself, which has no upper bound (Kreyszig, Example 4.1-2, p. 210). The words *in $M$* carry weight. Let $M$ be the set of **proper** subsets of $\mathbb{N}$ ordered by inclusion. The chain $\{1\} \subset \{1,2\} \subset \{1,2,3\} \subset \cdots$ has union $\mathbb{N}$, which is not in $M$, and no proper subset of $\mathbb{N}$ contains every $\{1,\dots,n\}$; so this chain has no upper bound in $M$ and the hypothesis fails. Here the conclusion nevertheless holds, since $\mathbb{N} \setminus \{n\}$ is maximal in $M$ for each $n$: the hypothesis is sufficient, not necessary (Dummit and Foote, Appendix I, §2, Examples (2) and (3), p. 909).

In applications the chain hypothesis is almost always the only one that takes work, and it almost always fails for the same reason it fails here: the natural candidate for the upper bound, the union of the chain, leaves the set $M$. Step 4 of the method below is where that is checked.

What the lemma does **not** give is uniqueness or constructibility. It produces at least one maximal element, usually many — the counterexample poset above has one for every $n$ — and it produces them by an argument that exhibits nothing. A basis of $\mathbb{R}$ over $\mathbb{Q}$ obtained in this way cannot be written down.
:::

:::note[A stronger-looking phrasing]{provenance=adapted src="reed-simon-1980:§I.1, Thm I.2, p. 3"}
Reed and Simon keep the hypotheses above but state a formally stronger conclusion: if $X$ is a nonempty poset each of whose totally ordered subsets is bounded above by an element of $X$, then any totally ordered subset of $X$ has some upper bound which is simultaneously a maximal element of $X$ (Theorem I.2, p. 3). Taking the chain to be a single point recovers the version stated above. Conversely their form follows from the Hausdorff maximal principle: a chain $C$ extends to a maximal chain $C'$, and an upper bound $u$ of $C'$ is an upper bound of $C$ and is maximal, since $u \prec x$ would enlarge $C'$. The two statements are therefore equivalent, and the handbook uses the shorter one.
:::

:::method[Getting a maximal object out of Zorn's lemma]{provenance=original}
Nearly every application follows one template. To produce an object that is maximal with respect to some property $P$:

1. **Choose the poset.** Let $M$ be the set of all objects of the relevant kind that have property $P$ — usually a set of subsets of one fixed set $X$, or of partial structures defined on subsets of $X$.
2. **Choose the order.** Take inclusion, or extension of partial structures. Check the three axioms if the order is anything other than inclusion.
3. **Show $M \neq \emptyset$.** Exhibit one object. This step is where a nondegeneracy hypothesis of the theorem ("$X \neq \{0\}$", "the ideal is proper") is normally consumed.
4. **Bound the chains.** Take an arbitrary nonempty chain $\mathcal{C} \subseteq M$, propose $u = \bigcup_{C \in \mathcal{C}} C$ as its upper bound, and prove that $u$ has property $P$. This is the only step that uses anything specific about $P$, and it succeeds precisely when $P$ can be tested on finitely many elements at a time: any finite set of elements of $u$ already lies in a single $C \in \mathcal{C}$, because $\mathcal{C}$ is totally ordered, and there $P$ is known.
5. **Apply the lemma.** $M$ has a maximal element $m$.
6. **Cash in maximality.** Assume $m$ fails the conclusion wanted, and use that failure to build an element of $M$ strictly containing $m$. The contradiction with maximality finishes the proof.

Step 6 is the one that decides what the theorem says: the same poset with a different argument at step 6 yields a different conclusion.
:::

:::example[A maximal ideal containing $1260\mathbb{Z}$]{provenance=original}
We run the recipe on a case small enough to count, and compare the answer with what the lemma predicts.

Recall that an **ideal** of $\mathbb{Z}$ is a subset $J \subseteq \mathbb{Z}$ closed under subtraction and under multiplication by arbitrary integers; it is **proper** if $J \neq \mathbb{Z}$, equivalently if $1 \notin J$, since an ideal containing $1$ contains $r \cdot 1$ for every $r$. (See :ref[Rings and fields]{to=group.rings-fields} for the general setting.) Fix $I_0 = 1260\mathbb{Z}$ and ask for a proper ideal containing $I_0$ that is as large as possible.

**Steps 1 and 2.** Let $M = \{J : J \text{ an ideal of } \mathbb{Z},\ I_0 \subseteq J \subsetneq \mathbb{Z}\}$, ordered by inclusion.

**Step 3.** $1260 \nmid 1$, so $1 \notin I_0$ and $I_0$ is proper; hence $I_0 \in M$ and $M \neq \emptyset$.

**Step 4.** Let $\mathcal{C} \subseteq M$ be a nonempty chain and $U = \bigcup_{J \in \mathcal{C}} J$. If $a, b \in U$, say $a \in J_1$ and $b \in J_2$, then both lie in whichever of $J_1, J_2$ is the larger, so $a - b$ lies in it and hence in $U$; and $ra \in J_1 \subseteq U$ for every $r \in \mathbb{Z}$. So $U$ is an ideal, and $I_0 \subseteq U$. It is proper because $1$ lies in no member of $\mathcal{C}$ and therefore not in their union. Thus $U \in M$ is an upper bound. This is step 4 of the method in its typical form: "is an ideal" and "omits $1$" are both testable two elements at a time.

**Step 5.** Zorn's lemma gives a maximal element $\mathfrak{m} \in M$.

**Step 6.** $\mathfrak{m}$ is a maximal ideal of $\mathbb{Z}$: if $\mathfrak{m} \subsetneq J \subsetneq \mathbb{Z}$ for an ideal $J$, then $J \supseteq I_0$ and $J$ is proper, so $J \in M$, contradicting maximality of $\mathfrak{m}$ in $M$.

**Counting the poset.** Every ideal of $\mathbb{Z}$ is $d\mathbb{Z}$ for a unique $d \ge 0$, and $d\mathbb{Z} \subseteq e\mathbb{Z}$ exactly when $e \mid d$, so inclusion is divisibility read backwards. Hence $d\mathbb{Z} \supseteq 1260\mathbb{Z}$ iff $d \mid 1260$, and $d\mathbb{Z}$ is proper iff $d \neq 1$. With

$$
1260 = 2^{2} \cdot 3^{2} \cdot 5 \cdot 7 ,
\qquad
\tau(1260) = (2+1)(2+1)(1+1)(1+1) = 36 ,
$$

the poset $M$ has $36 - 1 = \mathbf{35}$ elements. Its maximal elements are the $d\mathbb{Z}$ with $d > 1$ having no divisor strictly between $1$ and $d$, that is, with $d$ prime: $2\mathbb{Z}$, $3\mathbb{Z}$, $5\mathbb{Z}$, $7\mathbb{Z}$, so there are exactly $\mathbf{4}$ of them. The longest chain in $M$ has $\Omega(1260) = 2 + 2 + 1 + 1 = \mathbf{6}$ elements, one for each prime factor counted with multiplicity, for instance

$$
1260\mathbb{Z} \subset 630\mathbb{Z} \subset 210\mathbb{Z} \subset 42\mathbb{Z} \subset 21\mathbb{Z} \subset 7\mathbb{Z} .
$$

The three numbers $35$, $4$ and $6$ check the whole picture: the lemma promised at least one maximal element and there are four, none of which is an upper bound for all of $M$ — $2\mathbb{Z}$ and $3\mathbb{Z}$ are incomparable — which is caution 1 of the first definition in action.

Two honest remarks. First, in $\mathbb{Z}$ the appeal to Zorn's lemma is a formality: the chains here are finite and the answer was read off from the factorisation. Second, the argument of steps 1-6 used nothing about $\mathbb{Z}$ beyond the two facts quoted about ideals, so it proves verbatim that in any commutative ring with identity every proper ideal lies in a maximal ideal — and there, with no factorisation to fall back on, the lemma is doing real work.
:::

:::application{provenance=adapted src="kreyszig-1978:§4.1, 4.1-7, p. 211 and 4.1-8, p. 212; lee-2013:Appendix B, Exercise B.5(a), p. 620; reed-simon-1980:§IV.3, p. 101; folland-1999:Notes to §4.6, p. 148"}
Zorn's lemma is invisible in calculations and unavoidable in the structure theory that licenses them.

**Bases of infinite-dimensional spaces.** Every vector space other than $\{0\}$ has a basis, obtained by applying the recipe to the poset of linearly independent subsets ordered by inclusion (Kreyszig, 4.1-7, p. 211); the same argument extends any given linearly independent set to a basis (Lee, Exercise B.5(a), p. 620). In finite dimensions this is :ref[ordinary linear algebra]{to=linalg.vector-spaces-bases}, but for a space such as the continuous functions on $[0,1]$ no basis can be exhibited, and only Zorn's lemma says one exists.

**Complete sets of states.** Every Hilbert space other than $\{0\}$ contains a total orthonormal set: apply the recipe to the orthonormal subsets, and at step 6 use the fact that a vector orthogonal to a maximal orthonormal set must vanish (Kreyszig, 4.1-8, p. 212). This is the theorem behind the physicist's "complete set of basis states", and it holds with no separability assumption, so it still applies to the non-separable spaces that appear in the thermodynamic limit of a quantum system. See :ref[Orthonormal bases in Hilbert space]{to=funcan.orthonormal-bases}.

**Extension of functionals.** The :ref[Hahn-Banach theorem]{to=funcan.hahn-banach} is proved by Zorn's lemma applied to the poset of partial extensions of a linear functional, ordered by extension of the domain; Kreyszig introduces the lemma for exactly this purpose (§4.1, p. 210). Hahn-Banach is what makes dual spaces large enough to separate points, and hence what makes expectation-value functionals on an algebra of observables a well-behaved object.

**Compactness of infinite products.** Tychonoff's theorem — an arbitrary product of compact spaces is compact in the product topology, a statement about :ref[compactness]{to=found.compactness} far beyond the finite-dimensional case — requires the axiom of choice in every known proof, and Kelley's argument shows that it in turn implies the axiom of choice, so the two are equivalent (Reed and Simon, p. 101; Folland, Notes to §4.6, p. 148). Compactness arguments on infinite configuration or state spaces therefore inherit the whole of Zorn's lemma.

The price is paid in the other direction. A basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$, which exists by the first item, yields additive functions $f(x+y) = f(x) + f(y)$ that are not linear and not measurable; and the standard non-measurable subset of the line is built from a choice function. Objects produced by Zorn's lemma are guaranteed, never constructed, and anything one wants to compute with needs to be obtained some other way.
:::
