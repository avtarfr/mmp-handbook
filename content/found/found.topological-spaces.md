---
id: found.topological-spaces
title: Topological and metric spaces
kind: definition
level: core
summary: Defines a topology and the derived notions of closed set, neighbourhood, interior, closure and boundary, gives the metric topology and the subspace topology, and states what a basis is and what the Hausdorff condition buys.
prereqs: [found.sets-cardinality, found.limits-of-sequences]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Appendix A, 'Topological Spaces' through 'Bases and Countability', pp. 596-600, with Exercise A.15, p. 601; Prop A.17(c), (f), (g), p. 602"
    pages: "596-602"
    role: axioms for a topology; neighbourhood as an open set; interior, exterior, closure, boundary, limit point, dense; metric space and metric topology; Hausdorff condition and its consequences; basis and the criterion for a collection to generate a topology
  - work: folland-1999
    loc: "§0.6, p. 15 (diameter and boundedness); §4.1, pp. 114-117 (relative topology; interior and closure identities; Prop 4.1; Props 4.2-4.3; separation axioms and Prop 4.7)"
    pages: "15, 114-117"
    role: closure as union with the accumulation points; the identities relating interior and closure; the wide sense of neighbourhood and 'open iff a neighbourhood of itself'; diameter valued in [0, infinity] with bounded meaning finite diameter; relative topology; characterisation of a base; Hausdorff as the axiom T2 and T1 as 'points are closed'
  - work: kreyszig-1978
    loc: "§1.3, Defs 1.3-1, 1.3-2, 1.3-5 and the axioms (T1)-(T3), pp. 18-21"
    pages: "18-21"
    role: open and closed balls in a metric space; open set as one containing a ball about each point; the wide sense of neighbourhood; the three topology axioms derived from a metric; closure of a ball need not be the closed ball
  - work: ahlfors-1979
    loc: "Ch. 3, §1.2, Defs 1-2 and the discussion of interior, closure and boundary, pp. 51-53"
    pages: "51-53"
    role: metric axioms; open set as a neighbourhood of each of its points; every ball is open; interior and closure as largest open subset and smallest closed superset
  - work: reed-simon-1980
    loc: "§IV.1, pp. 91-92"
    pages: "91-92"
    role: topology axioms, base, neighbourhood base, and the explicit warning that neighbourhoods need not be open
---

:::note{provenance=original}
**What it means.** A topology is the minimum structure needed to say "near" without saying "how near": it records which sets are open, and everything else - closure, boundary, convergence, continuity - is read off from that. Every metric gives a topology, and that is the case a physicist meets almost always; the abstraction earns its keep when a useful notion of convergence has no natural distance behind it, as for pointwise or weak convergence. The Hausdorff condition is the small extra assumption that makes limits unique, and without it almost nothing familiar survives.
:::

:::definition[Topology, open and closed sets]{provenance=adapted src="lee-2013:Appendix A, p. 596; folland-1999:§4.1, p. 114; reed-simon-1980:§IV.1, pp. 91-92"}
A **topology** on a set $X$ is a collection $\mathcal{T}$ of subsets of $X$ such that

1. $\emptyset \in \mathcal{T}$ and $X \in \mathcal{T}$;
2. the union of any family of members of $\mathcal{T}$ is in $\mathcal{T}$;
3. the intersection of any **finite** family of members of $\mathcal{T}$ is in $\mathcal{T}$.

The pair $(X, \mathcal{T})$ is a **topological space**, the members of $\mathcal{T}$ are the **open** sets, and a set $F \subseteq X$ is **closed** if $X \setminus F$ is open. By De Morgan's laws the closed sets are therefore closed under arbitrary intersections and finite unions. When the topology is understood one writes "$X$ is a topological space".

Two topologies always exist on any $X$: the **discrete** topology $\mathcal{T} = \mathcal{P}(X)$, in which every subset is open, and the **trivial** topology $\mathcal{T} = \{\emptyset, X\}$. If $\mathcal{T}_1 \subseteq \mathcal{T}_2$ then $\mathcal{T}_1$ is **weaker** (**coarser**) than $\mathcal{T}_2$, and $\mathcal{T}_2$ is **stronger** (**finer**) than $\mathcal{T}_1$.
:::

:::definition[Neighbourhood, interior, closure, boundary, dense]{provenance=adapted src="lee-2013:Appendix A, pp. 596-597; folland-1999:§4.1, p. 114; ahlfors-1979:Ch. 3, §1.2, pp. 52-53"}
Let $(X, \mathcal{T})$ be a topological space, $p \in X$ and $S \subseteq X$. Throughout this handbook a **neighbourhood** of $p$ is an *open* set containing $p$, and a neighbourhood of $S$ is an open set containing $S$. Then:

- the **interior** $\operatorname{Int} S$ (also written $S^{\circ}$) is the largest open set that $S$ contains, obtained as $\bigcup \{U \in \mathcal{T} : U \subseteq S\}$;
- the **exterior** $\operatorname{Ext} S$ is $\operatorname{Int}(X \setminus S)$;
- the **closure** $\overline{S}$ is the intersection of all closed sets containing $S$: the smallest closed set containing $S$;
- the **boundary** $\partial S$ is the set of points of $X$ lying in neither $\operatorname{Int} S$ nor $\operatorname{Ext} S$;
- $p$ is a **limit point** (or **accumulation point**) of $S$ if every neighbourhood of $p$ contains a point of $S$ other than $p$; $\operatorname{acc}(S)$ denotes the set of limit points of $S$;
- $p \in S$ is an **isolated point** of $S$ if some neighbourhood $U$ of $p$ has $U \cap S = \{p\}$;
- $S$ is **dense** in $X$ if $\overline{S} = X$, and **nowhere dense** in $X$ if $\overline{S}$ contains no nonempty open set.

A sequence $\{p_i\}_{i=1}^{\infty}$ in $X$ **converges** to $p \in X$ if for every neighbourhood $U$ of $p$ there is $N \in \mathbb{N}$ with $p_i \in U$ for all $i \ge N$; one writes $p_i \to p$.
:::

:::statement[How the derived sets are computed]{provenance=adapted src="folland-1999:§4.1, p. 114 and Prop 4.1; lee-2013:Appendix A, pp. 596-597; ahlfors-1979:Ch. 3, §1.2, pp. 52-53"}
Let $X$ be a topological space and $S \subseteq X$, and write $S^{c} = X \setminus S$. Then

$$
(\operatorname{Int} S)^{c} = \overline{S^{c}},
\qquad
\bigl(\overline{S}\bigr)^{c} = \operatorname{Int}\bigl(S^{c}\bigr),
\qquad
\partial S = \overline{S} \setminus \operatorname{Int} S = \overline{S} \cap \overline{S^{c}} .
$$

Moreover:

1. openness of $S$ amounts to $S = \operatorname{Int} S$, and equally to this: every $p \in S$ has an open $U$ with $p \in U \subseteq S$;
2. closedness of $S$ amounts to $S = \overline{S}$;
3. a point $p$ lies in $\overline{S}$ exactly when each of its neighbourhoods meets $S$;
4. $\overline{S} = S \cup \operatorname{acc}(S)$, so $S$ is closed exactly when $\operatorname{acc}(S) \subseteq S$;
5. $\partial S$ is closed, and the three sets $\operatorname{Int} S$, $\partial S$, $\operatorname{Ext} S$ are pairwise disjoint with union $X$.
:::

:::idea[How the derived sets are computed]{provenance=original}
One identity carries all the others. Taking complements turns the open subsets of $S$ into the closed supersets of $S^{c}$, and turns a union into an intersection; so "the largest open set inside $S$" becomes "the smallest closed set outside $S^{c}$", which is the first display. The second is the first applied to $S^{c}$, and the boundary formulas follow by writing $\partial S$ as a complement of the other two regions.

The list that follows is then bookkeeping with that identity. Items 1 and 2 are immediate from the extremality built into the definitions of $\operatorname{Int}$ and $\overline{\phantom{S}}$. Item 3 is the complement identity read as a statement about points: a point fails to be in the closure exactly when it is interior to the complement, that is, when one of its neighbourhoods avoids $S$ entirely. Item 4 only has to deal with the clause "other than $p$" in the definition of a limit point, which is free for points outside $S$, and item 5 is a disjointness count.
:::

:::proof[How the derived sets are computed]{provenance=adapted src="folland-1999:§4.1, p. 114 and Prop 4.1; lee-2013:Appendix A, pp. 596-597; ahlfors-1979:Ch. 3, §1.2, pp. 52-53"}
**Step 1 (the first identity).** By definition $\operatorname{Int}S = \bigcup\{U \in \mathcal{T} : U \subseteq S\}$, a union over a family that is never empty, $\emptyset$ being open and contained in $S$. De Morgan's law gives
$$
(\operatorname{Int}S)^{c} = \bigcap \{U^{c} : U \in \mathcal{T},\ U \subseteq S\} .
$$
Complementation is a bijection of $\mathcal{P}(X)$ with $U \in \mathcal{T} \iff U^{c}$ closed and $U \subseteq S \iff S^{c} \subseteq U^{c}$, so as $U$ runs over the open subsets of $S$, $F = U^{c}$ runs over exactly the closed sets containing $S^{c}$. The intersection above is therefore $\bigcap\{F \text{ closed} : S^{c} \subseteq F\} = \overline{S^{c}}$.

**Step 2 (the second identity).** Apply Step 1 with $S^{c}$ in place of $S$: $(\operatorname{Int}S^{c})^{c} = \overline{(S^{c})^{c}} = \overline{S}$. Complementing both sides gives $(\overline{S})^{c} = \operatorname{Int}(S^{c})$.

**Step 3 (the boundary).** By definition $\partial S = X \setminus (\operatorname{Int}S \cup \operatorname{Ext}S) = (\operatorname{Int}S)^{c} \cap (\operatorname{Int}(S^{c}))^{c}$, and Steps 1 and 2 identify the two factors as $\overline{S^{c}}$ and $\overline{S}$. Hence $\partial S = \overline{S}\cap\overline{S^{c}}$. The same two sets also give the other form: $\overline{S}\setminus\operatorname{Int}S = \overline{S}\cap(\operatorname{Int}S)^{c} = \overline{S}\cap\overline{S^{c}}$ by Step 1.

**Step 4 (item 1).** $\operatorname{Int}S$ is a union of open sets, hence open by axiom 2, and $\operatorname{Int}S \subseteq S$ because each set in the union is. If $S$ is open then $S$ is itself one of the sets in the union, so $S \subseteq \operatorname{Int}S$ and therefore $S = \operatorname{Int}S$; conversely $S = \operatorname{Int}S$ exhibits $S$ as open. For the pointwise form: $S \subseteq \operatorname{Int}S$ says each $p \in S$ lies in some open $U \subseteq S$, and conversely any such $U$ is one of the sets whose union is $\operatorname{Int}S$.

**Step 5 (item 2).** $\overline{S}$ is an intersection of closed sets, hence closed (complements, axiom 2 and De Morgan), and $S \subseteq \overline{S}$ because every set in the intersection contains $S$. If $S$ is closed it belongs to that family, so $\overline{S}\subseteq S$ and $S = \overline{S}$; conversely $S = \overline{S}$ is closed.

**Step 6 (item 3).** By Step 2 and the pointwise form of Step 4,
$$
p \notin \overline{S} \iff p \in \operatorname{Int}(S^{c}) \iff \text{some open } U \text{ has } p \in U \subseteq S^{c} \iff \text{some neighbourhood of } p \text{ misses } S .
$$
Negating both ends: $p \in \overline{S}$ exactly when every neighbourhood of $p$ meets $S$.

**Step 7 (item 4).** For the inclusion $\supseteq$: $S \subseteq \overline{S}$ by Step 5, and if $p \in \operatorname{acc}(S)$ then every neighbourhood of $p$ contains a point of $S$ (one different from $p$, but in particular a point of $S$), so $p \in \overline{S}$ by item 3. For $\subseteq$: let $p \in \overline{S}$ with $p \notin S$. By item 3 every neighbourhood of $p$ contains a point of $S$, and that point differs from $p$ because $p \notin S$; so $p \in \operatorname{acc}(S)$. Hence $\overline{S} = S \cup \operatorname{acc}(S)$. Consequently $S$ is closed $\iff S = \overline{S} = S\cup\operatorname{acc}(S) \iff \operatorname{acc}(S)\subseteq S$, using item 2.

**Step 8 (item 5).** By Step 3, $\partial S = \overline{S}\cap\overline{S^{c}}$ is an intersection of two closed sets, hence closed. Next, $\operatorname{Int}S \subseteq S$ and $\operatorname{Ext}S = \operatorname{Int}(S^{c}) \subseteq S^{c}$, so $\operatorname{Int}S \cap \operatorname{Ext}S \subseteq S \cap S^{c} = \emptyset$. Finally $\partial S$ is by its very definition the complement of $\operatorname{Int}S \cup \operatorname{Ext}S$, so it is disjoint from both and the three sets have union $X$. $\square$
:::

:::definition[Metric space and the metric topology]{provenance=adapted src="lee-2013:Appendix A, Examples A.5-A.6, pp. 598-599; kreyszig-1978:§1.3, Defs 1.3-1 and 1.3-2, pp. 18-19; ahlfors-1979:Ch. 3, §1.2, pp. 51-52; folland-1999:§0.6, p. 15"}
A **metric space** is a set $M$ with a function $d : M \times M \to \mathbb{R}$ such that, for all $x, y, z \in M$,

1. $d(x, y) \ge 0$, with $d(x, y) = 0$ if and only if $x = y$;
2. $d(x, y) = d(y, x)$;
3. $d(x, z) \le d(x, y) + d(y, z)$ (the triangle inequality).

For $x \in M$ and $r > 0$, the **open ball** and **closed ball** are

$$
B_r(x) = \{y \in M : d(x, y) < r\},
\qquad
\overline{B}_r(x) = \{y \in M : d(x, y) \le r\} .
$$

The **metric topology** on $M$ declares $S \subseteq M$ open if for every $x \in S$ there is some $r > 0$ with $B_r(x) \subseteq S$. This is a topology, and every open ball is one of its open sets; the open balls in fact form a *basis* for it, in the sense defined two blocks below. A topological space whose topology arises from some metric in this way is called **metrizable**.

Call $S \subseteq M$ **bounded** when some $R > 0$ has $d(x, y) \le R$ throughout $S \times S$. For $S$ nonempty and bounded the **diameter** of $S$ is $\operatorname{diam} S = \sup\{d(x, y) : x, y \in S\}$; following Lee (p. 598) we leave $\operatorname{diam} \emptyset$ undefined, since the supremum would be over the empty set. (Folland, p. 15, instead lets $\operatorname{diam}$ take values in $[0, \infty]$ and calls $S$ bounded when $\operatorname{diam} S < \infty$, which agrees with the definition here on nonempty sets.) A sequence $\{x_i\}$ is **Cauchy** when, given $\varepsilon > 0$, all sufficiently late pairs of its terms satisfy $d(x_i, x_j) < \varepsilon$, and $M$ is **complete** when each Cauchy sequence it contains has a limit lying in $M$ (see :ref[Limits of sequences and completeness]{to=found.limits-of-sequences}). Equipped with the **Euclidean metric** $d(x, y) = |x - y|$, the space $\mathbb{R}^{n}$ is complete, and the topology this metric generates on it is the **Euclidean topology**.
:::

:::definition[Subspace topology]{provenance=adapted src="folland-1999:§4.1, p. 114; lee-2013:Appendix A, Prop A.17(c), (f), (g), p. 602"}
If $(X, \mathcal{T})$ is a topological space and $S \subseteq X$, then

$$
\mathcal{T}_S = \{U \cap S : U \in \mathcal{T}\}
$$

is a topology on $S$, the **subspace** (or **relative**) **topology**; its members are the sets **relatively open** in $S$. A set $K \subseteq S$ is closed in $S$ if and only if $K = L \cap S$ for some set $L$ closed in $X$. Bases restrict too: if $\mathcal{B}$ is a basis for $\mathcal{T}$ (next block), then $\{B \cap S : B \in \mathcal{B}\}$ is a basis for $\mathcal{T}_S$. If $X$ is Hausdorff, so is $S$. For $S \subseteq M$ with $M$ a metric space, restricting $d$ to $S \times S$ makes $S$ a metric space whose metric topology is the subspace topology.
:::

:::definition[Basis]{provenance=adapted src="lee-2013:Appendix A, p. 600, with Exercise A.15, p. 601; folland-1999:§4.1, Props 4.2-4.3, p. 115; reed-simon-1980:§IV.1, p. 91"}
**Reading a basis off a topology.** Take $X$ with a topology $\mathcal{T}$. A subfamily $\mathcal{B} \subseteq \mathcal{T}$ is called a **basis** (or **base**) for $\mathcal{T}$ when each member of $\mathcal{T}$ can be written as a union of members of $\mathcal{B}$. The equivalent pointwise test: whenever $U \in \mathcal{T}$ and $x \in U$, some $B \in \mathcal{B}$ satisfies $x \in B \subseteq U$. A basis thus determines $\mathcal{T}$ completely, and is usually far smaller than it - in $\mathbb{R}^{n}$ the balls with rational radii and rational centres suffice, and there are only countably many of them.

**Building a topology from a candidate basis.** Now let $X$ be a bare set and $\mathcal{B}$ any family of subsets of $X$ subject to two requirements:

1. $X = \bigcup_{B \in \mathcal{B}} B$;
2. for $B_1, B_2 \in \mathcal{B}$ and $x \in B_1 \cap B_2$, some $B_3 \in \mathcal{B}$ has $x \in B_3 \subseteq B_1 \cap B_2$.

Under 1 and 2, all unions of members of $\mathcal{B}$ together form a topology on $X$ - the topology **generated by** $\mathcal{B}$ - for which $\mathcal{B}$ is a basis. Condition 2 is weaker than asking $\mathcal{B}$ to be closed under intersections, which is what makes the construction usable: the open balls of a metric space satisfy 2 but not that stronger condition.

**Locally.** Given $p \in X$, a family $\mathcal{B}_p$ of neighbourhoods of $p$ is a **neighbourhood basis at** $p$ when each neighbourhood of $p$ contains at least one member of $\mathcal{B}_p$. In a metric space the balls $B_r(p)$ with $r$ a positive rational do this.
:::

:::idea[The metric topology]{provenance=original}
Three claims made in passing above deserve their proofs: that the recipe "open means containing a ball about each of its points" really satisfies the three axioms, that the balls themselves are open, and that they form a basis.

The first is where the word *finite* in axiom 3 earns its place: finitely many radii have a positive minimum, infinitely many need not. The second is the triangle inequality and nothing else: a point inside a ball has room around it, the amount of room being the distance to the boundary. The third is then automatic, because the defining condition of an open set is already in the pointwise form that the basis test asks for. The same argument shows that restricting the metric to a subset gives exactly the subspace topology.
:::

:::proof[The metric topology, its basis, and its subspaces]{provenance=adapted src="kreyszig-1978:§1.3, pp. 18-21; ahlfors-1979:Ch. 3, §1.2, pp. 51-52"}
Let $(M,d)$ be a metric space and let $\mathcal{T}$ be the collection of sets $S \subseteq M$ such that every $x \in S$ admits some $r > 0$ with $B_r(x)\subseteq S$.

**Step 1 (axiom 1).** $\emptyset \in \mathcal{T}$ because the condition is vacuous, and $M \in \mathcal{T}$ because $B_r(x)\subseteq M$ for any $r>0$.

**Step 2 (axiom 2, arbitrary unions).** Let $S_\alpha \in \mathcal{T}$ and $x \in \bigcup_\alpha S_\alpha$. Then $x \in S_\beta$ for some $\beta$, which supplies $r>0$ with $B_r(x)\subseteq S_\beta \subseteq \bigcup_\alpha S_\alpha$.

**Step 3 (axiom 3, finite intersections).** Let $S_1,\dots,S_k \in \mathcal{T}$ and $x \in S_1\cap\dots\cap S_k$. Each $S_i$ supplies $r_i>0$ with $B_{r_i}(x)\subseteq S_i$. Put $r = \min\{r_1,\dots,r_k\}$, which is positive *because there are finitely many of them*; then $B_r(x)\subseteq B_{r_i}(x)\subseteq S_i$ for every $i$, so $B_r(x)$ lies in the intersection. This is the step that fails for an infinite family, and the first bullet of the remark below shows it must.

**Step 4 (every ball is open).** Let $y \in B_r(x)$ and put $\rho = r - d(x,y)$, which is positive because $d(x,y)<r$. For $z \in B_\rho(y)$ the triangle inequality gives
$$
d(x,z) \le d(x,y) + d(y,z) < d(x,y) + \rho = r ,
$$
so $B_\rho(y)\subseteq B_r(x)$. As $y \in B_r(x)$ was arbitrary, $B_r(x)\in\mathcal{T}$.

**Step 5 (the balls are a basis).** They belong to $\mathcal{T}$ by Step 4. If $S \in \mathcal{T}$ and $x \in S$, the defining condition supplies $r>0$ with $x \in B_r(x)\subseteq S$, which is exactly the pointwise test for a basis given two blocks above. So every member of $\mathcal{T}$ is a union of balls.

**Step 6 (a neighbourhood basis of rational radius).** Given $p \in M$ and a neighbourhood $U$ of $p$, Step 5 provides $s>0$ with $B_s(p)\subseteq U$, and any rational $r$ with $0<r<s$ gives $B_r(p)\subseteq B_s(p)\subseteq U$. So the balls about $p$ of positive rational radius form a neighbourhood basis at $p$.

**Step 7 (subspaces).** Let $S \subseteq M$. The restriction $d|_{S\times S}$ satisfies the three metric axioms, each being a condition on two or three points that $d$ already satisfies for all points of $M$ and hence in particular for those of $S$; its balls are $B^{S}_r(x) = B_r(x)\cap S$ for $x \in S$. If $V$ is open in $(S, d|_S)$, then each $x \in V$ has some $r_x$ with $B^{S}_{r_x}(x)\subseteq V$, whence $V = \bigcup_{x\in V}\bigl(B_{r_x}(x)\cap S\bigr) = \bigl(\bigcup_{x\in V}B_{r_x}(x)\bigr)\cap S$, the intersection of $S$ with a set open in $M$. Conversely if $V = U\cap S$ with $U$ open in $M$ and $x \in V$, then some $B_r(x)\subseteq U$, so $B^{S}_r(x) \subseteq U\cap S = V$. The two topologies on $S$ therefore coincide. $\square$
:::

:::statement[Hausdorff spaces]{provenance=adapted src="lee-2013:Appendix A, p. 600 and Exercises A.10-A.11; folland-1999:§4.1, pp. 116-117 and Prop 4.7"}
Call $X$ **Hausdorff** when any two points of it can be housed in disjoint open sets: given $p \neq q$ in $X$ there exist $U, V$ open with

$$
p \in U, \qquad q \in V, \qquad U \cap V = \emptyset .
$$

Then:

1. the metric topology of any metric space is Hausdorff, so every metrizable space satisfies the condition;
2. in a Hausdorff space each finite subset is closed;
3. in a Hausdorff space a sequence that converges does so to one point only.

Items 2 and 3 both use the hypothesis and both fail without it; the remark below gives one topology that breaks each of them.
:::

:::idea[Hausdorff spaces]{provenance=original}
Each of the three parts is one line of geometry. In a metric space two distinct points are a positive distance apart, so balls of half that radius about them cannot overlap without violating the triangle inequality. If points can be separated, then for a fixed $p$ every other point sits in an open set avoiding $p$, and the union of all those open sets is the complement of $\{p\}$ — so the complement is open. And a sequence cannot settle into two disjoint open sets at once, because beyond some index it would have to lie in both.
:::

:::proof[Hausdorff spaces]{provenance=adapted src="lee-2013:Appendix A, p. 600 and Exercises A.10-A.11; folland-1999:§4.1, pp. 116-117 and Prop 4.7"}
**Item 1 (metric spaces are Hausdorff).** Let $p \neq q$ in a metric space $M$ and set $r = \tfrac12 d(p,q)$, which is positive by the first metric axiom, $d(p,q)=0$ holding only for $p=q$. The balls $B_r(p)$ and $B_r(q)$ are open by Step 4 of the previous proof and contain $p$ and $q$. They are disjoint: a point $z$ in both would give
$$
d(p,q) \le d(p,z) + d(z,q) < r + r = d(p,q) ,
$$
by the triangle inequality, which is absurd. Hence the metric topology is Hausdorff, and so is the topology of any metrizable space, that topology being a metric topology.

**Item 2 (finite sets are closed).** First take a single point $p \in X$. For each $q \in X$ with $q\neq p$ the Hausdorff condition supplies open sets $U_q \ni q$ and $V_q \ni p$ with $U_q \cap V_q = \emptyset$; in particular $p \notin U_q$, so $U_q \subseteq X\setminus\{p\}$. Every point of $X\setminus\{p\}$ lies in its own $U_q$, so
$$
X \setminus \{p\} = \bigcup_{q \neq p} U_q ,
$$
which is open by axiom 2 (and is $\emptyset$, hence open, if $X = \{p\}$). Therefore $\{p\}$ is closed. A nonempty finite set is a finite union of such singletons, and finite unions of closed sets are closed because finite intersections of open sets are open; the empty set is closed because $X$ is open.

**Item 3 (limits are unique).** Suppose $p_i \to p$ and $p_i \to q$ with $p \neq q$. Choose disjoint open $U \ni p$ and $V \ni q$. Convergence to $p$ gives $N_1$ with $p_i \in U$ for all $i \ge N_1$, and convergence to $q$ gives $N_2$ with $p_i \in V$ for all $i \ge N_2$. For any $i \ge \max\{N_1,N_2\}$ we then have $p_i \in U \cap V = \emptyset$, which is impossible. Hence $p = q$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="lee-2013:Appendix A, Exercise A.9, p. 600; kreyszig-1978:§1.3, p. 21"}
- *Finiteness in axiom 3.* Only finite intersections of open sets are required to be open, and this cannot be relaxed. In $\mathbb{R}$ the sets $(-1/n, 1/n)$ are open for every $n \in \mathbb{N}$, but $\bigcap_{n \in \mathbb{N}} (-1/n, 1/n) = \{0\}$ is not. (This example is ours.)
- *Hausdorff in conclusions 2 and 3.* One topology breaks both. Give a set $X$ with at least two points the trivial topology $\{\emptyset, X\}$, whose only nonempty open set is $X$ itself. Then every sequence converges to every point, so conclusion 3 fails; this is Lee's Exercise A.9, p. 600. And for $p \in X$ the complement $X \setminus \{p\}$ is neither $\emptyset$ nor $X$, hence not open, so $\{p\}$ is not closed and conclusion 2 fails as well. Uniqueness of limits therefore genuinely needs a separation hypothesis. The converse of 3 is not available in this generality: unique sequential limits do not imply Hausdorff for an arbitrary space, although they do when every point has a countable neighbourhood basis.
- *A non-metrizable space.* Since every metric space is Hausdorff, a space that is not Hausdorff cannot be metrizable. The trivial topology on two or more points is again the cheapest example.

**A trap in metric spaces.** $\overline{B_r(x)}$ need not equal $\overline{B}_r(x)$; Kreyszig warns of this on p. 21 and leaves the example to the reader, so here is one. Take $M$ with the discrete metric $d(x, y) = 1$ for $x \neq y$ and $d(x, x) = 0$, where $M$ has at least two points. Every subset is open, so $\overline{B_1(x)} = \overline{\{x\}} = \{x\}$, while the closed ball $\overline{B}_1(x) = M$. The two agree in $\mathbb{R}^{n}$ with the Euclidean metric but not in general.
:::

:::remark[Interior and closure do not commute with the obvious operations]{provenance=original}
$\operatorname{Int}(A \cap B) = \operatorname{Int} A \cap \operatorname{Int} B$ and $\overline{A \cup B} = \overline{A} \cup \overline{B}$ always hold, but for unions and intersections only the inclusions $\operatorname{Int} A \cup \operatorname{Int} B \subseteq \operatorname{Int}(A \cup B)$ and $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$ hold, and both can be strict: in $\mathbb{R}$ with $A = \mathbb{Q}$ and $B = \mathbb{R} \setminus \mathbb{Q}$, the left sides are $\emptyset$ and $\emptyset$ while the right sides are $\mathbb{R}$ and $\mathbb{R}$. For the boundary only $\partial(A \cup B) \subseteq \partial A \cup \partial B$ holds, and the same two sets make it strict: $\partial(\mathbb{Q} \cup (\mathbb{R} \setminus \mathbb{Q})) = \partial\mathbb{R} = \emptyset$, whereas $\partial\mathbb{Q} \cup \partial(\mathbb{R} \setminus \mathbb{Q}) = \mathbb{R}$.
:::

:::remark[Conventions that differ between books]{provenance=adapted src="kreyszig-1978:§1.3, pp. 19, 21; folland-1999:§4.1, pp. 114, 116-117; reed-simon-1980:§IV.1, p. 91; ahlfors-1979:Ch. 3, §1.2, p. 52; lee-2013:Appendix A, p. 596"}
- **Neighbourhood.** This is the one convention that regularly causes trouble. We follow Lee (p. 596): a neighbourhood of $p$ *is* an open set containing $p$. Kreyszig (p. 19), Folland (p. 114), Ahlfors (p. 52) and Reed and Simon (p. 91) all use the wider sense, in which a neighbourhood of $p$ is any set that contains an open set containing $p$ - Reed and Simon state explicitly that neighbourhoods need not be open, and Kreyszig notes that the older literature took them to be open.

  Every statement in this unit is true under either reading. The reason is that each condition stated in terms of neighbourhoods is monotone in the direction that makes enlarging the family harmless. Conditions of the form "every neighbourhood of $p$ meets $S$" (the definition of limit point, and item 3 of the derived-sets statement) are unchanged, because a wide neighbourhood of $p$ contains an open one. Conditions of the form "some neighbourhood $U$ of $p$ satisfies $\dots$" (the definition of an isolated point) are also unchanged, because such a $U$ may be replaced by the open set $\operatorname{Int} U$, which still contains $p$ and is contained in $U$. The definition of a neighbourhood basis at $p$ combines the two quantifiers, and for a family of open sets the two readings again agree, since every wide neighbourhood of $p$ contains an open one.

  What changes with the convention is how much a *single* neighbourhood tells you: in the wide sense "$U$ is a neighbourhood of $p$" says only that $p \in \operatorname{Int} U$, so it does not make $U$ open, whereas under our convention it does. That is the step to watch. The implication "$U$ is a neighbourhood of each of its points, therefore $U$ is open" is *not* one of the convention-dependent ones: in the wide sense its hypothesis reads $p \in \operatorname{Int} U$ for every $p \in U$, that is $U \subseteq \operatorname{Int} U$, so $U$ is open - this is precisely Ahlfors's definition of an open set (Def 2, p. 52) and Folland's remark that a set is open exactly when it is a neighbourhood of itself (p. 114); under our convention it holds trivially.
- **Hausdorff and the separation axioms.** Folland (pp. 116-117) presents Hausdorff as the axiom $T_2$ in a ladder $T_0, \dots, T_4$, in which $T_1$ says that one-point sets are closed (his Prop 4.7), $T_3$ is *regular* and $T_4$ is *normal*. Conclusion 2 of the Hausdorff statement above is exactly "Hausdorff implies $T_1$"; the converse fails, so a book's "$T_1$" is strictly weaker than our "Hausdorff".
- **How the metric topology is introduced.** Kreyszig (pp. 18-19) and Ahlfors (p. 52) define open sets in a metric space first and then observe that they satisfy the three axioms, so that "a metric space is a topological space". Lee (pp. 596-599) and Folland (p. 114) define the topology first and give the metric topology as an example. The resulting collection of open sets is the same.
- **Base versus basis.** Folland (p. 115) and Reed and Simon (p. 91) write *base*, Lee (p. 600) writes *basis*; they are the same notion. Folland additionally uses *subbase* for a collection whose finite intersections form a base, which is a weaker requirement than condition 2 above.
:::

:::example[Interior, closure, boundary and limit points of one set on the line]{provenance=original}
Work in $\mathbb{R}$ with the Euclidean topology and take
$$
S = \bigl(\mathbb{Q}\cap[0,1)\bigr) \cup \{2\} \cup (3,4) .
$$

1. **Interior.** $\operatorname{Int}S = (3,4)$. The set $(3,4)$ is open and contained in $S$, so it lies in the interior. No point $p \in \mathbb{Q}\cap[0,1)$ is interior, because every interval about $p$ contains irrational numbers, which are not in $S$; and $2$ is not interior, because every interval about $2$ contains points outside $S$. So the interior has total length $1$.
2. **Closure.** $\overline{S} = [0,1]\cup\{2\}\cup[3,4]$, of total length $2$. Every $p \in [0,1]$ lies in $\overline{S}$ by item 3 of the derived-sets statement, since each interval about $p$ contains a rational of $[0,1)$; the point $2$ lies in $S$; and each $p \in [3,4]$ has every interval about it meeting $(3,4)$. Nothing else does: the complement of $[0,1]\cup\{2\}\cup[3,4]$ is open, so a point $p$ outside has an interval about it inside that complement, and that interval misses $S$.
3. **Boundary.** $\partial S = \overline{S}\setminus\operatorname{Int}S = [0,1]\cup\{2\}\cup\{3,4\}$, of total length $1$. Note that $\partial S$ here has the same length as $\operatorname{Int}S$: a boundary need not be "thin".
4. **Limit points.** $\operatorname{acc}(S) = [0,1]\cup[3,4]$. Each point of $[0,1]$ has infinitely many rationals of $[0,1)$ in every interval about it, so at least one different from itself; the same holds in $[3,4]$ with the interval $(3,4)$. The point $2$ is not a limit point, since $(1.5,2.5)\cap S = \{2\}$ contains no point of $S$ other than $2$. The consistency check is item 4 of the statement: $S\cup\operatorname{acc}(S) = [0,1]\cup\{2\}\cup[3,4] = \overline{S}$.
5. **Isolated points.** Only $2$, by the computation in 4.
6. **Neither open nor closed.** $\operatorname{Int}S \neq S$, so $S$ is not open; and $1/\sqrt{2} = 0.7071\ldots$ lies in $\operatorname{acc}(S)$ but not in $S$, so $\operatorname{acc}(S)\not\subseteq S$ and $S$ is not closed.
7. **Diameter.** $\operatorname{diam}S = \sup\{\lvert x-y\rvert : x,y\in S\} = 4$, approached by $x = 0 \in S$ and $y \to 4^{-}$ but not attained; $\operatorname{diam}\overline{S} = 4$ as well, and there it is attained at $x=0$, $y=4$.
:::

:::example[The cofinite topology: points closed, but not Hausdorff]{provenance=original}
Let $X$ be any infinite set and put
$$
\mathcal{T} = \{\emptyset\}\cup\{U \subseteq X : X\setminus U \text{ is finite}\} .
$$

1. **It is a topology.** $\emptyset \in \mathcal{T}$ by fiat and $X \in \mathcal{T}$ because $X\setminus X = \emptyset$ is finite. For a union: if every member is $\emptyset$ the union is $\emptyset$; otherwise some $U_\beta$ is nonempty and $X\setminus\bigcup_\alpha U_\alpha \subseteq X\setminus U_\beta$ is finite. For a finite intersection: if some member is $\emptyset$ so is the intersection; otherwise $X\setminus\bigcap_{i\le k}U_i = \bigcup_{i \le k}(X\setminus U_i)$ is a union of finitely many finite sets, hence finite.
2. **The closed sets are $X$ and the finite sets.** Immediately from the definition. In particular every singleton is closed, so this space satisfies the axiom $T_1$ of the conventions remark above.
3. **It is not Hausdorff.** Let $U, V$ be nonempty open sets. Then $X\setminus(U\cap V) = (X\setminus U)\cup(X\setminus V)$ is finite, so $U\cap V \neq \emptyset$ because $X$ is infinite. No two points can be put in disjoint open sets. By item 1 of the Hausdorff statement the space is therefore not metrizable either, whatever $X$ is.
4. **Every infinite subset is dense.** If $A \subseteq X$ is infinite, the only closed set containing $A$ is $X$, the others being finite, so $\overline{A} = X$. A finite subset is closed and equals its own closure.
5. **A sequence with every point as a limit.** Take $X = \mathbb{N}$ and $p_i = i$. Let $n \in \mathbb{N}$ and let $U$ be any neighbourhood of $n$; then $\mathbb{N}\setminus U$ is finite. Put $N = 1$ if $\mathbb{N}\setminus U$ is empty, that is if $U = \mathbb{N}$, and $N = 1 + \max(\mathbb{N}\setminus U)$ otherwise, the maximum of a nonempty finite set of integers. Either way $p_i = i \in U$ for all $i \ge N$. Hence $p_i \to n$ for *every* $n$. Concretely, for $U = \mathbb{N}\setminus\{1,4,9\}$ one may take $N = 10$.
6. **What this separates.** The trivial topology of the hypotheses remark above fails both conclusions 2 and 3 of the Hausdorff statement. The cofinite topology satisfies conclusion 2 — points are closed — and still fails conclusion 3. So "points are closed" is strictly weaker than Hausdorff, which is the claim recorded in the conventions remark, and uniqueness of limits needs the full separation condition rather than only $T_1$.
:::

:::application{provenance=original}
A physical model usually comes with a distance, but what the physics depends on is often only the topology that distance generates. The circle is the cleanest illustration.

Represent the circle as $S^{1} = \{(\cos\theta,\sin\theta) : \theta \in \mathbb{R}\} \subset \mathbb{R}^{2}$ and put on it two natural metrics: the **chord** metric $d_{c}$ inherited from the Euclidean metric of $\mathbb{R}^{2}$, and the **arc** metric $d_{a}$, the angle in $[0,\pi]$ between the two points. If $d_{a}(p,q) = \theta$ then $d_{c}(p,q) = 2\sin(\theta/2)$, and for $\theta \in [0,\pi]$

$$
\frac{2}{\pi}\, d_{a} \;\le\; d_{c} \;\le\; d_{a} ,
$$

the right inequality from $\sin u \le u$ for $u \ge 0$ and the left from $\sin u \ge (2/\pi)u$ on $[0,\pi/2]$, which holds because $\sin$ is concave there and so lies above the chord joining $(0,0)$ to $(\pi/2,1)$.

Only the left bound is ever an equality. The ratio $d_{c}/d_{a} = 2\sin(\theta/2)/\theta$ is $\sin u / u$ with $u = \theta/2$, which decreases strictly on $(0,\pi/2]$: it tends to $1$ as $\theta \to 0^{+}$ and equals $2/\pi = 0.6366198\ldots$ at $\theta = \pi$. So the lower bound is attained exactly at the antipodal pair, where $d_{a} = \pi = 3.1415927\ldots$ and $d_{c} = 2$, while the upper bound $d_{c}\le d_{a}$ is strict at every pair of distinct points and is sharp only in the limit of nearby points. At $d_{a} = 1$ radian, for instance, $d_{c} = 2\sin(1/2) = 0.9588511\ldots$, strictly between $0.6366198$ and $1$ as the two inequalities require.

The consequence is that each ball of one metric contains a ball of the other about the same point: $B^{a}_{r}(p) \subseteq B^{c}_{r}(p)$ and $B^{c}_{2r/\pi}(p)\subseteq B^{a}_{r}(p)$. By the pointwise basis test the two families of balls generate the same topology, so the identity map of $S^{1}$ is a homeomorphism between the two metric spaces. This is why one speaks of "the circle" without naming a distance: continuity of a wavefunction on a ring, convergence of a Fourier series, and the classification of periodic boundary conditions are all statements about the topology, and are unchanged by the choice between the two metrics. The word that names what matters is *metrizable*, not *metric*.

The same reading governs crystal physics. The Brillouin zone of a $d$-dimensional crystal is a torus, which may be realised as the product $S^{1}\times\dots\times S^{1}\subset\mathbb{R}^{2d}$; that set is metrizable, hence Hausdorff by item 1 of the Hausdorff statement, and it is closed and bounded in $\mathbb{R}^{2d}$, hence compact (:ref[compactness]{to=found.compactness}, a unit that comes later and is not presupposed here). A band energy $\varepsilon(k)$ is a continuous real function on that space, so it attains a greatest and a least value: band edges exist, and a gap between two bands is a well-defined number. Had the space of wave vectors carried a non-Hausdorff topology instead, limits of states would not even be unique, and the whole language of "the state the system approaches" would fail.
:::
