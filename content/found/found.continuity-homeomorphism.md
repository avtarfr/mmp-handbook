---
id: found.continuity-homeomorphism
title: Continuity and homeomorphism
kind: definition
level: core
summary: Defines continuity by inverse images of open sets, lists the equivalent formulations including the epsilon-delta condition on metric spaces, and defines homeomorphisms and what it means for a property to be topological.
prereqs: [found.topological-spaces, found.sets-cardinality]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§4.1, Prop 4.4, p. 115; §4.2, pp. 119-120 (definition of continuity, continuity at a point, Prop 4.8, Prop 4.9, homeomorphism, embedding)"
    pages: "115, 119-120"
    role: continuity by inverse images and the equivalent closed-set form; continuity at a point; global continuity as continuity at every point; continuity tested on a generating family, with the description of the topology a family generates; proof routes for those two equivalences; homeomorphism and embedding
  - work: kreyszig-1978
    loc: "§1.3, Def 1.3-3 and Thm 1.3-4, pp. 20-21"
    pages: "20-21"
    role: the epsilon-delta definition of continuity between metric spaces and its equivalence with openness of inverse images, including the proof route for that equivalence
  - work: lee-2013
    loc: "Appendix A, p. 597 and Exercise A.1; Prop A.17(a), (e), p. 602; Lemmas A.19-A.20, p. 602; 'Open and Closed Maps' and Thm A.38, pp. 606-607"
    pages: "597, 602, 606-607"
    role: continuity, homeomorphism and local homeomorphism; the closure and interior characterisations; restriction; continuity is a local property; the gluing lemma; open and closed maps; a continuous bijection that is open or closed is a homeomorphism, with the proof route for that theorem
  - work: reed-simon-1980
    loc: "§IV.1, pp. 92-93"
    pages: "92-93"
    role: open and bicontinuous maps; homeomorphisms as the isomorphisms of topological spaces; a topological notion as one invariant under homeomorphism, with completeness as a non-example
  - work: docarmo-2016
    loc: "§2-2, Props 2 and 3, p. 124"
    pages: "124"
    role: continuity at a point phrased with neighbourhoods rather than balls, for maps between subsets of Euclidean spaces, and continuity of compositions
  - work: hassani-2013
    loc: "§1.2, Example 1.2.5, p. 7"
    pages: "7"
    role: the hyperbolic tangent as a bijection of the real line onto an interval
---

:::note{provenance=original}
**What it means.** Continuity is the statement that $f$ cannot tear its domain: pull any open set back through $f$ and what you get is still open. On metric spaces this is exactly the $\varepsilon$-$\delta$ condition from calculus, so nothing is lost; what is gained is that the definition still works where there is no distance. A homeomorphism is an invertible map that is continuous both ways, and two homeomorphic spaces are indistinguishable by any statement phrased in open sets alone. That is the test for whether a property is "topological": compactness and connectedness are, completeness and boundedness are not.
:::

:::definition[Continuity]{provenance=adapted src="folland-1999:§4.2, p. 119; lee-2013:Appendix A, p. 597"}
Take spaces $X$, $Y$ with topologies $\mathcal{T}_X$, $\mathcal{T}_Y$, and a map $f : X \to Y$.

- **Globally.** Call $f$ **continuous** when pulling an open set back through $f$ always leaves it open: $f^{-1}(V) \in \mathcal{T}_X$ whenever $V \in \mathcal{T}_Y$.
- **At one point.** Call $f$ **continuous at** $p \in X$ when every neighbourhood $V$ of the image point $f(p)$ can be reached from some neighbourhood $U$ of $p$, in the sense that $f(U) \subseteq V$.

Write $C(X, Y)$ for the collection of continuous maps from $X$ to $Y$. Two cautions. Neither notion presupposes anything about injectivity or surjectivity of $f$. And $f^{-1}(V)$ here denotes the inverse image defined in :ref[Sets, functions and countability]{to=found.sets-cardinality}; no inverse map is being asserted.
:::

:::statement[Equivalent formulations of continuity]{provenance=adapted src="folland-1999:§4.2, p. 119, Props 4.8 and 4.9; lee-2013:Appendix A, p. 597, Exercise A.1"}
Let $X$ and $Y$ be topological spaces and $f : X \to Y$. The following are equivalent.

1. $f^{-1}(V)$ is open in $X$ for every open $V \subseteq Y$.
2. $f^{-1}(F)$ is closed in $X$ for every closed $F \subseteq Y$.
3. $f$ is continuous at every point of $X$.
4. $f\bigl(\overline{A}\bigr) \subseteq \overline{f(A)}$ for every $A \subseteq X$.
5. $f^{-1}(\operatorname{Int} B) \subseteq \operatorname{Int} f^{-1}(B)$ for every $B \subseteq Y$.
6. $f^{-1}(V)$ is open in $X$ for every $V$ in some fixed family $\mathcal{E}$ that generates the topology of $Y$ - for instance, for every $V$ in a basis of $Y$.

If $f$ is continuous and $p_i \to p$ in $X$, then $f(p_i) \to f(p)$ in $Y$. The converse of this last implication is not part of the list: preservation of limits of sequences implies continuity when every point of $X$ has a countable neighbourhood basis, but not in general.
:::

:::idea{provenance=original}
Each item on the list is the first one seen through one set-theoretic operation, and inverse images respect every operation involved. Complementation exchanges open with closed and produces item 2. Choosing, separately at each point, an open set that $f$ carries into a prescribed target and then taking the union of those sets produces item 3. Interiors and closures are assembled from open and closed sets, which is items 4 and 5. Item 6 needs only that $f^{-1}$ turns unions into unions and intersections into intersections, so controlling the sets out of which the topology of $Y$ is built controls every open set at once.
:::

:::proof{provenance=adapted src="folland-1999:§4.2, Props 4.8 and 4.9, p. 119, with §4.1, Prop 4.4, p. 115; lee-2013:Appendix A, p. 597, Exercises A.1 and A.3"}
Three identities for inverse images are used throughout, each immediate from the definition in :ref[Sets, functions and countability]{to=found.sets-cardinality}: $f^{-1}(Y \setminus B) = X \setminus f^{-1}(B)$, and $f^{-1}$ of a union or an intersection of a family is the union or the intersection of the $f^{-1}$ of its members. We prove $1 \Leftrightarrow 2$, $1 \Leftrightarrow 3$, $1 \Rightarrow 4 \Rightarrow 2$, $1 \Leftrightarrow 5$ and $1 \Leftrightarrow 6$, which makes all six equivalent.

**$1 \Rightarrow 2$ and $2 \Rightarrow 1$.** Assume 1 and let $F \subseteq Y$ be closed. Then $Y \setminus F$ is open, so $X \setminus f^{-1}(F) = f^{-1}(Y \setminus F)$ is open by 1, and therefore $f^{-1}(F)$ is closed. Exchanging the words *open* and *closed* in those two sentences derives 1 from 2.

**$1 \Rightarrow 3$.** Let $p \in X$ and let $V$ be a neighbourhood of $f(p)$. Put $U = f^{-1}(V)$. It is open by 1, it contains $p$ because $f(p) \in V$, so it is a neighbourhood of $p$; and $f(U) \subseteq V$ holds for the inverse image of any set whatever. So $f$ is continuous at $p$, and $p$ was arbitrary.

**$3 \Rightarrow 1$.** Let $V \subseteq Y$ be open and let $p \in f^{-1}(V)$. Since $V$ is a neighbourhood of $f(p)$, continuity at $p$ gives a neighbourhood $U_p$ of $p$ with $f(U_p) \subseteq V$, which says $U_p \subseteq f^{-1}(V)$. Hence $f^{-1}(V) = \bigcup \{U_p : p \in f^{-1}(V)\}$, a union of open sets, so $f^{-1}(V)$ is open.

**$1 \Rightarrow 4$.** Let $A \subseteq X$. The set $\overline{f(A)}$ is closed, so $f^{-1}\bigl(\overline{f(A)}\bigr)$ is closed by the implication $1 \Rightarrow 2$ just proved, and it contains $A$ because $f(A) \subseteq \overline{f(A)}$. Since $\overline{A}$ sits inside every closed set that has $A$ as a subset, this gives $\overline{A} \subseteq f^{-1}\bigl(\overline{f(A)}\bigr)$; applying $f$ gives $f(\overline{A}) \subseteq \overline{f(A)}$.

**$4 \Rightarrow 2$.** Let $F \subseteq Y$ be closed and set $A = f^{-1}(F)$. Then $f(A) \subseteq F$, so 4 gives $f(\overline{A}) \subseteq \overline{f(A)} \subseteq \overline{F} = F$, the last step because $F$ is closed. Thus $\overline{A} \subseteq f^{-1}(F) = A$, and $A$ is closed.

**$1 \Rightarrow 5$.** Let $B \subseteq Y$. Then $\operatorname{Int} B$ is open, so $f^{-1}(\operatorname{Int} B)$ is open by 1, and it is contained in $f^{-1}(B)$. As $\operatorname{Int} f^{-1}(B)$ is the largest open subset of $f^{-1}(B)$, it contains $f^{-1}(\operatorname{Int} B)$.

**$5 \Rightarrow 1$.** For open $V$ we have $\operatorname{Int} V = V$, so 5 reads $f^{-1}(V) \subseteq \operatorname{Int} f^{-1}(V)$. The opposite inclusion holds for every set, so $f^{-1}(V)$ coincides with its interior and is open.

**$1 \Rightarrow 6$.** Members of $\mathcal{E}$ are open in $Y$, so this direction is 1 itself, applied to fewer sets.

**$6 \Rightarrow 1$.** The topology generated by a family $\mathcal{E}$ consists of $\emptyset$, $Y$, and the unions of finite intersections of members of $\mathcal{E}$ :cite{work=folland-1999 loc="Prop 4.4, p. 115"}. Given 6, each $f^{-1}(V)$ with $V \in \mathcal{E}$ is open; a finite intersection of such sets is open, and so is any union of those, by the two identities recorded at the start. Also $f^{-1}(\emptyset) = \emptyset$ and $f^{-1}(Y) = X$. So $f^{-1}$ of every open set is open. When $\mathcal{E}$ is a basis the intersections are not needed, since each open set is already a union of members of $\mathcal{E}$.

**Continuity carries convergent sequences forward.** Let $f$ be continuous, $p_i \to p$, and $V$ a neighbourhood of $f(p)$. By item 3 there is a neighbourhood $U$ of $p$ with $f(U) \subseteq V$, and by convergence there is $N$ with $p_i \in U$ for all $i \ge N$; then $f(p_i) \in V$ for all $i \ge N$. Since $V$ was an arbitrary neighbourhood of $f(p)$, $f(p_i) \to f(p)$.

**When the converse holds.** Suppose $f$ carries every convergent sequence of $X$ to a sequence converging to the image of its limit, and suppose $p \in X$ has a countable neighbourhood basis $B_1, B_2, \dots$; we check continuity at $p$. Replacing $B_k$ by $B_1 \cap \dots \cap B_k$, still a neighbourhood of $p$ and still contained in the old $B_k$, we may take the family decreasing. Were $f$ not continuous at $p$, some neighbourhood $V$ of $f(p)$ would admit no neighbourhood $U$ of $p$ with $f(U) \subseteq V$; in particular $f(B_k) \subseteq V$ for no $k$, so we could pick $x_k \in B_k$ with $f(x_k) \notin V$. Any neighbourhood of $p$ contains some $B_m$, hence contains $x_k$ for every $k \ge m$ because the family decreases; so $x_k \to p$, while $f(x_k) \to f(p)$ fails, $V$ being a neighbourhood of $f(p)$ that no term enters. That contradiction makes $f$ continuous at $p$. If every point of $X$ has such a basis, item 3 then makes $f$ continuous.

**Why that hypothesis cannot be dropped.** Give $\mathbb{R}$ the topology $\mathcal{T}$ whose members are $\emptyset$ together with every set whose complement is countable. This is a topology: $\mathbb{R}$ itself qualifies, having empty complement; a union of members either is $\emptyset$ or contains a nonempty member, and then its complement, being inside that member's countable complement, is countable; and a finite intersection either contains $\emptyset$, hence is $\emptyset$, or has complement the union of finitely many countable sets. In $(\mathbb{R}, \mathcal{T})$ a sequence converges only when it is eventually constant, for if $x_i \neq x$ for infinitely many $i$ then $S = \{x_i : x_i \neq x\}$ is countable and $\mathbb{R} \setminus S$ is a neighbourhood of $x$ that infinitely many terms avoid. Every map out of $(\mathbb{R}, \mathcal{T})$ therefore carries convergent sequences to convergent sequences, the eventually constant ones. Yet the identity map onto $\mathbb{R}$ with its Euclidean topology is not continuous: the inverse image of $(0, 1)$ is $(0, 1)$, whose complement is uncountable, so it is not in $\mathcal{T}$. The hypothesis that fails is countability of a neighbourhood basis, and it fails at every point: given countably many neighbourhoods $U_k$ of $x$, the set $\bigcup_k (\mathbb{R} \setminus U_k)$ is countable, so some $y \neq x$ lies in every $U_k$, and then the neighbourhood $\mathbb{R} \setminus \{y\}$ of $x$ contains no $U_k$. $\square$
:::

:::statement[Metric spaces: the epsilon-delta form]{provenance=adapted src="kreyszig-1978:§1.3, Def 1.3-3 and Thm 1.3-4, pp. 20-21; docarmo-2016:§2-2, Prop 2, p. 124"}
Let $(M_1, d_1)$ and $(M_2, d_2)$ be metric spaces, each carrying its metric topology, and let $f : M_1 \to M_2$.

1. $f$ is continuous at $x_0 \in M_1$ in the sense of the definition above if and only if

$$
\forall \varepsilon > 0 \;\; \exists \delta > 0 \;\; \forall x \in M_1 : \qquad d_1(x, x_0) < \delta \;\Longrightarrow\; d_2\bigl(f(x), f(x_0)\bigr) < \varepsilon .
$$

2. $f$ is continuous (that is, $f^{-1}(S)$ is open in $M_1$ for every open $S \subseteq M_2$) if and only if the condition in 1 holds at every $x_0 \in M_1$.

Here $\delta$ is allowed to depend on both $\varepsilon$ and $x_0$. Requiring one $\delta$ to serve for all $x_0$ at once is the strictly stronger condition of **uniform continuity**, and requiring $d_2(f(x), f(y)) \le C\, d_1(x, y)$ for a constant $C$ and all $x, y$ is **Lipschitz continuity**, which is stronger again.
:::

:::idea{provenance=original}
In a metric space the balls carry all the information: each is open, and each open set contains a ball about every one of its points (:ref[Topological and metric spaces]{to=found.topological-spaces}). So in the phrase "some neighbourhood $U$ of $x_0$ has $f(U) \subseteq V$" both sets may be shrunk to balls without loss, and what is left is $f(B_\delta(x_0)) \subseteq B_\varepsilon(f(x_0))$, which is the $\varepsilon$-$\delta$ condition written with sets instead of inequalities. Part 2 is then part 1 at every point, read together with the equivalence of global continuity and continuity at each point.
:::

:::proof{provenance=adapted src="kreyszig-1978:§1.3, Thm 1.3-4, pp. 20-21"}
**Part 1, from the topological condition to $\varepsilon$-$\delta$.** Let $f$ be continuous at $x_0$ and let $\varepsilon > 0$. The ball $V = B_\varepsilon(f(x_0))$ is open and contains $f(x_0)$, so it is a neighbourhood of $f(x_0)$, and continuity at $x_0$ supplies a neighbourhood $U$ of $x_0$ with $f(U) \subseteq V$. Being open and containing $x_0$, the set $U$ contains some ball $B_\delta(x_0)$. For this $\delta$, any $x$ with $d_1(x, x_0) < \delta$ lies in $U$, so $f(x) \in V$, that is $d_2(f(x), f(x_0)) < \varepsilon$.

**Part 1, back again.** Assume the $\varepsilon$-$\delta$ condition at $x_0$ and let $V$ be a neighbourhood of $f(x_0)$. Since $V$ is open, $B_\varepsilon(f(x_0)) \subseteq V$ for some $\varepsilon > 0$. Take the $\delta$ the condition provides for that $\varepsilon$ and put $U = B_\delta(x_0)$, a neighbourhood of $x_0$ because balls are open. Every $x \in U$ satisfies $d_1(x, x_0) < \delta$, hence $d_2(f(x), f(x_0)) < \varepsilon$, so $f(U) \subseteq B_\varepsilon(f(x_0)) \subseteq V$. This is continuity at $x_0$.

**Part 2.** By part 1, the $\varepsilon$-$\delta$ condition holds at every $x_0 \in M_1$ exactly when $f$ is continuous at every point of $M_1$, and by item 3 of the previous statement that is exactly continuity of $f$, which for the metric topologies is the openness of $f^{-1}(S)$ for every open $S \subseteq M_2$. $\square$
:::

:::statement[Building continuous maps]{provenance=adapted src="lee-2013:Appendix A, Prop A.17(a), (e) and Lemmas A.19-A.20, p. 602; folland-1999:§4.2, p. 119; docarmo-2016:§2-2, Prop 3, p. 124"}
Spaces $X$, $Y$, $Z$ carry topologies throughout.

1. **Trivial cases.** $\mathrm{id}_X$ is continuous, as is any map $X \to Y$ with constant value.
2. **Composites.** Continuity of $f : X \to Y$ at $p$, together with continuity of $g : Y \to Z$ at the point $f(p)$, yields continuity of $g \circ f$ at $p$. Globally: $f \in C(X, Y)$ and $g \in C(Y, Z)$ give $g \circ f \in C(X, Z)$.
3. **Restricting the domain.** For $f \in C(X, Y)$ and $S \subseteq X$ with its subspace topology, $f|_S \in C(S, Y)$.
4. **Mapping into a subspace.** Let $S \subseteq X$ carry the subspace topology, with inclusion $\iota_S : S \hookrightarrow X$. A map $F : Y \to S$ then lies in $C(Y, S)$ precisely when $\iota_S \circ F$ lies in $C(Y, X)$. This is what makes the subspace topology the right one.
5. **Continuity is a local property.** Should each $p \in X$ possess a neighbourhood $U_p$ on which the restriction $f|_{U_p}$ is continuous, then $f$ itself is continuous.
6. **Gluing lemma.** Let $\{B_i\}_{i \in A}$ be a family of subsets with $\bigcup_{i \in A} B_i = X$, subject to one of two alternatives: either $A$ is finite and every $B_i$ is closed, or $A$ is arbitrary and every $B_i$ is open. Give continuous $f_i : B_i \to Y$ matching wherever their domains overlap, so that $f_i$ and $f_j$ agree on $B_i \cap B_j$ for each pair $i, j$. Exactly one continuous $f : X \to Y$ then satisfies $f|_{B_i} = f_i$ throughout $A$.
:::

:::idea{provenance=original}
Items 1 to 3 are one-line computations with inverse images. Item 4 holds because a relatively open subset of $S$ is the trace on $S$ of an open subset of $X$, so testing $F$ against the one is testing $\iota_S \circ F$ against the other. Item 5 holds because openness is a condition checked separately at each point, and item 6 because the inverse image of an open set is the union of its inverse images under the pieces - a union that is open when the pieces are open, and whose closed-set analogue is a finite union, which is why that half of the hypothesis asks for finitely many pieces.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Prop A.17(a), (e), Lemmas A.19-A.20 and Exercises A.18 and A.21, p. 602; folland-1999:§4.2, p. 119"}
Two facts about subspaces are used repeatedly, both from :ref[Topological and metric spaces]{to=found.topological-spaces}: a set is open (closed) in a subspace $S$ precisely when it is the intersection with $S$ of a set open (closed) in $X$; consequently, if $S$ itself is open in $X$ then the sets open in $S$ are open in $X$, and if $S$ is closed in $X$ then the sets closed in $S$ are closed in $X$.

1. **Trivial cases.** $\mathrm{id}_X^{-1}(V) = V$, which is open for open $V$. If $f$ has constant value $y_0$ then $f^{-1}(V)$ is $X$ when $y_0 \in V$ and $\emptyset$ otherwise, and both are open.

2. **Composites.** At a point: let $W$ be a neighbourhood of $g(f(p))$. Continuity of $g$ at $f(p)$ gives a neighbourhood $V$ of $f(p)$ with $g(V) \subseteq W$, and continuity of $f$ at $p$ gives a neighbourhood $U$ of $p$ with $f(U) \subseteq V$; then $(g \circ f)(U) \subseteq g(V) \subseteq W$. Globally it is faster: $(g \circ f)^{-1}(W) = f^{-1}\bigl(g^{-1}(W)\bigr)$, which is open for open $W$ since $g^{-1}(W)$ is open and $f$ is continuous.

3. **Restricting the domain.** For $V$ open in $Y$, $(f|_S)^{-1}(V) = f^{-1}(V) \cap S$, the intersection with $S$ of a set open in $X$, hence open in $S$.

4. **Mapping into a subspace.** The inclusion satisfies $\iota_S^{-1}(V) = V \cap S$, so $\iota_S$ is continuous; if $F$ is continuous then $\iota_S \circ F$ is continuous by item 2. Conversely let $\iota_S \circ F$ be continuous and let $W$ be open in $S$, say $W = V \cap S$ with $V$ open in $X$. Every value of $F$ lies in $S$, so $F(y) \in W$ holds exactly when $\iota_S(F(y)) \in V$; that is, $F^{-1}(W) = (\iota_S \circ F)^{-1}(V)$, which is open. Hence $F$ is continuous.

5. **Continuity is a local property.** Let $V$ be open in $Y$ and $p \in f^{-1}(V)$. On the neighbourhood $U_p$ the restriction is continuous, so $f^{-1}(V) \cap U_p = (f|_{U_p})^{-1}(V)$ is open in $U_p$, and therefore open in $X$ because $U_p$ is open in $X$. This set contains $p$ and lies inside $f^{-1}(V)$, so $f^{-1}(V)$ contains an open set around each of its points and is open.

6. **Gluing lemma.** The map is forced: the sets $B_i$ cover $X$, so $f(x) = f_i(x)$ for any $i$ with $x \in B_i$, and the agreement on overlaps makes this unambiguous; that gives existence and uniqueness of $f$ as a map with $f|_{B_i} = f_i$. For continuity in the open case, let $V \subseteq Y$ be open. Then $f^{-1}(V) = \bigcup_{i \in A} f_i^{-1}(V)$, because each $x$ lies in some $B_i$; each $f_i^{-1}(V)$ is open in $B_i$ by continuity of $f_i$, hence open in $X$ as $B_i$ is open, and a union of open sets is open. In the closed case, let $F \subseteq Y$ be closed. The same computation gives $f^{-1}(F) = \bigcup_{i=1}^{m} f_i^{-1}(F)$ with each $f_i^{-1}(F)$ closed in $B_i$, hence closed in $X$ as $B_i$ is closed; here the union is finite, and a finite union of closed sets is closed. So $f^{-1}(F)$ is closed for every closed $F$, and $f$ is continuous by item 2 of the equivalence statement. $\square$
:::

:::definition[Open and closed maps, homeomorphism, embedding]{provenance=adapted src="lee-2013:Appendix A, p. 597 and pp. 606-607; folland-1999:§4.2, pp. 119-120; reed-simon-1980:§IV.1, p. 92"}
Let $f : X \to Y$ be a map between topological spaces, continuous or not.

- $f$ is an **open map** if $f(U)$ is open in $Y$ for every open $U \subseteq X$, and a **closed map** if $f(K)$ is closed in $Y$ for every closed $K \subseteq X$.
- $f$ is a **homeomorphism** if it is a continuous bijection whose inverse $f^{-1} : Y \to X$ is also continuous. $X$ and $Y$ are **homeomorphic** if such an $f$ exists. A homeomorphism carries the open sets of $X$ bijectively onto the open sets of $Y$.
- $f$ is a **topological embedding** if $f$ is injective and $f : X \to f(X)$ is a homeomorphism, where $f(X)$ carries the subspace topology of $Y$.
- $f$ is a **local homeomorphism** if every $p \in X$ has a neighbourhood $U$ such that $f(U)$ is open in $Y$ and $f|_U$ is a homeomorphism of $U$ onto $f(U)$.

Continuity in both directions is part of the definition of a homeomorphism and is not implied by continuity plus bijectivity.
:::

:::statement[When a continuous bijection is a homeomorphism]{provenance=adapted src="lee-2013:Appendix A, Thm A.38(b), (c), p. 607 and Exercises A.34-A.35, p. 606"}
Suppose $f : X \to Y$ is continuous and is, in addition, either an open map or a closed map. Then:

1. injectivity of $f$ makes it a topological embedding;
2. bijectivity of $f$ makes it a homeomorphism.

A continuous bijection that happens to be open, or that happens to be closed, is therefore a homeomorphism. Since local homeomorphisms are always open maps, a bijective local homeomorphism is a homeomorphism as well.
:::

:::idea{provenance=original}
Continuity of the inverse map is a statement about inverse images under $f^{-1}$, and an inverse image under $f^{-1}$ is an image under $f$. So "the inverse is continuous" and "$f$ is an open map" are the same requirement, and the closed version is that requirement read through complements. Nothing else is involved.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Thm A.38(b), (c), p. 607, with Exercises A.34-A.35, p. 606"}
**Part 1.** Let $f$ be continuous and injective, let $Z = f(X)$ carry the subspace topology of $Y$, and let $g : Z \to X$ be the inverse of the bijection $f : X \to Z$. For any $A \subseteq X$ we have $g^{-1}(A) = f(A)$, since $g(z) \in A$ says precisely that $z = f(a)$ for some $a \in A$.

Suppose $f$ is an open map and let $U \subseteq X$ be open. Then $g^{-1}(U) = f(U)$ is open in $Y$, hence open in $Z$, being equal to $f(U) \cap Z$. So $g$ is continuous and $f : X \to Z$ is a homeomorphism, which is what it means for $f$ to be a topological embedding.

Suppose instead that $f$ is a closed map and let $K \subseteq X$ be closed. Then $g^{-1}(K) = f(K)$ is closed in $Y$, hence closed in $Z$. By item 2 of the equivalence statement - continuity is equally the condition that inverse images of closed sets are closed - $g$ is continuous, and again $f$ is an embedding.

**Part 2.** If $f$ is in addition surjective then $Z = Y$, so the homeomorphism $f : X \to f(X)$ of part 1 is a homeomorphism of $X$ onto $Y$.

**The remark on local homeomorphisms.** Let $f$ be a local homeomorphism. It is continuous, since each point has a neighbourhood on which the restriction is a homeomorphism and therefore continuous, and continuity is local (item 5 above). It is open: let $U \subseteq X$ be open and $p \in U$. Choose a neighbourhood $W$ of $p$ with $f(W)$ open in $Y$ and $f|_W$ a homeomorphism onto $f(W)$. The set $U \cap W$ is open in $W$, so its image $f(U \cap W)$ is open in $f(W)$, hence open in $Y$ because $f(W)$ is open in $Y$; and it contains $f(p)$ and lies in $f(U)$. So $f(U)$ contains an open set around each of its points and is open. A bijective local homeomorphism is therefore a continuous open bijection, hence a homeomorphism by part 2. $\square$
:::

:::definition[Topological property]{provenance=adapted src="reed-simon-1980:§IV.1, pp. 92-93"}
A **topological property** (or **topological notion**) is a property of a space, or of a subset of a space, that is preserved by every homeomorphism: if $X$ has it and $X$ is homeomorphic to $Y$, then $Y$ has it. Homeomorphisms are the isomorphisms of topological spaces, so informally a topological property is one that can be stated in terms of the open sets alone.

Being Hausdorff, being metrizable and having a countable basis are topological properties, and so are :ref[compactness]{to=found.compactness} and :ref[connectedness]{to=found.connectedness-homotopy}. Properties that mention a particular metric, such as completeness, boundedness, the diameter of a set, uniform continuity and the Lipschitz condition, are **metric** properties, not topological ones: they can differ between homeomorphic metric spaces.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Continuity does not make $f$ an open map.* Let $f : \mathbb{R} \to \mathbb{R}$ be $f(x) = x^{2}$. It is continuous, but $f\bigl((-1, 1)\bigr) = [0, 1)$ is not open, so $f$ is not open. This is why the statement above has to assume openness or closedness separately, and why the definition of a homeomorphism must demand continuity of the inverse rather than deduce it.
- *A continuous bijection need not be a homeomorphism.* Let $f : [0, 2\pi) \to S^{1} \subseteq \mathbb{R}^{2}$ be $f(t) = (\cos t, \sin t)$, with both sets carrying their Euclidean subspace topologies. Then $f$ is a continuous bijection. It is not a homeomorphism: the set $[0, 1)$ is open in $[0, 2\pi)$, yet its image is an arc that contains $(1, 0)$ without containing any arc around $(1, 0)$; so $f$ is not an open map, and $f^{-1}$ fails to be continuous at $(1, 0)$. A second, cruder example is the identity map from $\mathbb{R}$ with the discrete topology to $\mathbb{R}$ with the Euclidean topology.
- *Finiteness in the closed case of the gluing lemma.* With infinitely many closed pieces the conclusion fails. Cover $\mathbb{R}$ by the closed sets $B_0 = \{0\}$ and $B_x = \{x\}$ for every $x \neq 0$, and let $f_0 = 1$ and $f_x = 0$. Each $f_i$ is continuous on its one-point domain and the overlap condition is vacuous, but the glued map is the indicator of $\{0\}$, which is not continuous. The open case needs no finiteness, because openness is a local condition.
- *The $\delta$ in the $\varepsilon$-$\delta$ condition.* It may depend on $x_0$, and for a continuous function on a non-compact domain it usually must: $f(x) = 1/x$ on $(0, 1)$ is continuous, but no single $\delta$ works for a given $\varepsilon$ at every $x_0$, so $f$ is not uniformly continuous.

**Completeness and boundedness are not topological.** The map $\tanh : \mathbb{R} \to (-1, 1)$ is a strictly increasing bijection, continuous with continuous inverse $\operatorname{artanh}$, so it is a homeomorphism; Hassani (p. 7) uses it for exactly the observation that the line and the interval have the same points to within a bijection. Give both sets the Euclidean metric. Then $\mathbb{R}$ is complete and unbounded, while $(-1, 1)$ is bounded and not complete, since $x_n = 1 - 1/n$ is Cauchy in $(-1, 1)$ with no limit there. Reed and Simon (p. 93) make the same point with a homeomorphism of the line onto a bounded interval. So no statement about completeness or boundedness can be a theorem about topological spaces; it is a theorem about a space *with a chosen metric*.

**Convention: "neighbourhood" in the definition of continuity at a point.** We use the convention of :ref[Topological and metric spaces]{to=found.topological-spaces}, in which a neighbourhood is open. Folland (p. 119) uses the wide sense and gives the extra equivalent form "$f^{-1}(V)$ is a neighbourhood of $x$ for every neighbourhood $V$ of $f(x)$". That form is correct in his convention but false in ours, where it would assert that $f^{-1}(V)$ is open for every open $V$ containing $f(x)$ - that is, global continuity. The form used here, "there is a neighbourhood $U$ of $p$ with $f(U) \subseteq V$", says the same thing under either convention, which is why it is the one stated.
:::

:::example[Producing a delta, and watching it shrink]{provenance=original}
Take $f : \mathbb{R} \to \mathbb{R}$ with $f(x) = x^{3} - 2x$, both copies of $\mathbb{R}$ carrying the Euclidean metric, and produce a $\delta$ that serves $\varepsilon = 1/10$ at $x_0 = 2$. Note $f(2) = 8 - 4 = 4$.

**Factor the increment.** Dividing $x^{3} - 2x - 4$ by $x - 2$ gives

$$
f(x) - f(2) = (x - 2)\bigl(x^{2} + 2x + 2\bigr),
$$

which is checked by expanding the right-hand side.

**Bound the second factor near $x_0$.** Require provisionally that $|x - 2| \le 1/2$, so $x \in [3/2, 5/2]$. On that interval $x^{2} + 2x + 2 = (x + 1)^{2} + 1$ is increasing, hence at most $(7/2)^{2} + 1 = 53/4 = 13.25$. Therefore $|f(x) - 4| \le 13.25\,|x - 2|$ whenever $|x - 2| \le 1/2$.

**Choose $\delta$.** Take $\delta = 3/400 = 0.0075$, which respects the provisional bound. Then $|x - 2| < \delta$ gives

$$
|f(x) - 4| \le 13.25 \times 0.0075 = 0.099375 < 0.1 ,
$$

so $\delta = 0.0075$ works. (Directly: $f(2.0075) - 4 = 0.07533\ldots$ and $4 - f(1.9925) = 0.07466\ldots$, both below $0.1$.)

**How much was conceded.** Since $f'(2) = 10 > 0$, $f$ increases near $2$, so the largest admissible $\delta$ is the smaller of the two distances from $2$ to the solutions of $f(x) = 4.1$ and $f(x) = 3.9$, which are $x = 2.00994061\ldots$ and $x = 1.98993937\ldots$. Hence $\delta_{\max} = 0.00994061\ldots$, and the crude bound cost a factor $1.3254\ldots$ - a reminder that a $\delta$ needs only to work, not to be optimal.

**The same $\varepsilon$ at a different point.** At $x_0 = 10$ one has $f(10) = 980$ and, for $h > 0$,

$$
f(10 + h) - f(10) = 298h + 30h^{2} + h^{3} \ge 298 h .
$$

If $\delta > 1/2980$ then $x = 10 + 1/2980$ satisfies $|x - 10| < \delta$ while $f(x) - 980 \ge 298/2980 = 0.1$, so the $\varepsilon = 1/10$ test fails. Every admissible $\delta$ at $x_0 = 10$ is thus at most $1/2980 = 3.3557\ldots \times 10^{-4}$, smaller by a factor $22.35$ than the $\delta$ that works at $x_0 = 2$. No single $\delta$ serves both points, so $f$ is continuous at every point of $\mathbb{R}$ without being uniformly continuous on $\mathbb{R}$.
:::

:::example[A homeomorphism of an open interval onto the whole line]{provenance=original}
Let $h : (-1, 1) \to \mathbb{R}$ be $h(x) = x/(1 - x^{2})$, and let

$$
g : \mathbb{R} \to (-1, 1), \qquad g(y) = \frac{2y}{1 + \sqrt{1 + 4y^{2}}} .
$$

**$h$ is continuous.** It is a quotient of polynomials whose denominator $1 - x^{2}$ vanishes nowhere on $(-1, 1)$.

**$h$ is injective.** $h'(x) = \bigl(1 + x^{2}\bigr)/\bigl(1 - x^{2}\bigr)^{2} > 0$ on $(-1, 1)$, so $h$ is strictly increasing.

**$g$ is continuous and lands where it should.** Its denominator is at least $2$, so $g$ is continuous on all of $\mathbb{R}$; and $\sqrt{1 + 4y^{2}} > \sqrt{4y^{2}} = 2|y|$ gives $1 + \sqrt{1 + 4y^{2}} > 2|y|$, hence $|g(y)| < 1$.

**$g$ is a right inverse of $h$.** Fix $y$, write $s = \sqrt{1 + 4y^{2}}$ and $w = g(y) = 2y/(1 + s)$. Because $|w| < 1$, the equation $h(w) = y$ is equivalent to the polynomial identity $yw^{2} + w - y = 0$. Now $(1 + s)^{2} = 1 + 2s + s^{2} = 2 + 2s + 4y^{2}$, so

$$
yw^{2} + w - y = \frac{y\bigl[\,4y^{2} + 2(1 + s) - (1 + s)^{2}\,\bigr]}{(1 + s)^{2}} = \frac{y\bigl[\,4y^{2} + 2 + 2s - 2 - 2s - 4y^{2}\,\bigr]}{(1 + s)^{2}} = 0 .
$$

Hence $h(g(y)) = y$ for every $y \in \mathbb{R}$, so $h$ is surjective; with injectivity, $h$ is a bijection and $g = h^{-1}$. Both are continuous, so $h$ is a homeomorphism.

**Two checks.** $h(1/2) = (1/2)/(3/4) = 2/3$ and $g(2/3) = (4/3)/(1 + 5/3) = 1/2$. Going the other way, $g(-3) = -6/(1 + \sqrt{37}) = (1 - \sqrt{37})/6 = -0.8471270884\ldots$, and $h$ of that number is $-3$.

**What the homeomorphism does and does not carry across.** No statement about open sets can separate $(-1, 1)$ from $\mathbb{R}$. With the Euclidean metric, though, $(-1, 1)$ is bounded and incomplete - $x_n = 1 - 1/n$ is Cauchy in it with no limit there - while $\mathbb{R}$ is unbounded and complete. Boundedness and completeness are therefore metric, not topological, exactly as the definition of a topological property requires. Note also that $h$ is not uniformly continuous, since $h(1 - \eta) = (1 - \eta)/\bigl(\eta(2 - \eta)\bigr) \to \infty$ as $\eta \downarrow 0$, so $h$ is unbounded; and a uniformly continuous function on $(-1, 1)$ is bounded, because for $\varepsilon = 1$ one may cover $(-1, 1)$ by finitely many intervals of length $\delta$ and compare the values on each with the value at its midpoint.
:::

:::application{provenance=original}
**Lyapunov stability is the $\varepsilon$-$\delta$ condition, with the quantifiers in a particular order.** For an autonomous system $\dot x = F(x)$ on $\mathbb{R}^{n}$ with an equilibrium $x_*$, stability of $x_*$ is the statement that for every $\varepsilon > 0$ there is a $\delta > 0$ such that a solution starting within $\delta$ of $x_*$ stays within $\varepsilon$ of $x_*$ for all $t \ge 0$. In terms of the flow maps $\Phi_t$, which send an initial state to the state at time $t$, this is continuity at $x_*$ in the sense of this unit, demanded of the whole family $\{\Phi_t\}_{t \ge 0}$ with a single $\delta$. Continuity of each individual $\Phi_t$ is a weaker and much cheaper statement - it is continuous dependence on initial data over a finite time - and conflating the two is the standard error in stability arguments. See :ref[Lyapunov functions and stability]{to=dyn.lyapunov-functions} and :ref[continuous dependence on initial conditions]{to=ode.continuous-dependence}.

**Coordinates are homeomorphisms, and that is what makes them usable.** A coordinate system on a configuration space is a homeomorphism of an open piece of that space onto an open subset of $\mathbb{R}^{n}$; continuity of the inverse is what guarantees that nearby coordinate values describe nearby physical states, so that a small numerical error stays a small physical error. In the same spirit, two dynamical systems are counted as qualitatively identical when a homeomorphism carries the orbits of one onto the orbits of the other. Everything expressible in open sets alone then agrees - how many equilibria there are, whether a basin of attraction is connected, whether an orbit is closed - whereas quantities tied to a metric, such as rates of approach or the eigenvalues of a linearization, need not. See :ref[Smooth manifolds]{to=geom.smooth-manifolds} and :ref[Linearization about a fixed point]{to=dyn.linearization}.

**Piecewise definitions are continuous by the gluing lemma.** Fields specified by one formula inside a sphere and another outside it, a ray refracted at an interface, or a finite-element basis function given cell by cell are all built as finitely many continuous pieces on closed sets whose union is the region. Item 6 of the statement on building continuous maps says that such a specification defines a continuous field exactly when the pieces agree on the shared boundaries - which is why matching conditions at an interface are imposed in the first place - and the counterexample in the remark above shows why the same licence does not extend to infinitely many closed pieces. See :ref[Finite elements]{to=num.finite-elements}.
:::
