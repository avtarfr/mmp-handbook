---
id: found.connectedness-homotopy
title: Connectedness and simple connectivity
kind: definition
level: core
summary: Defines connected and path-connected spaces, their components, homotopy of paths and the fundamental group, and says precisely what "simply connected" means, how the definition used in plane complex analysis differs from the homotopy one, and which standard regions satisfy it.
prereqs: [found.continuity-homeomorphism, found.limits-of-sequences, found.sets-cardinality, group.groups-subgroups, group.homomorphisms-quotients]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Appendix A, 'Topological Spaces', Example A.8, p. 599 (the unit interval and the n-sphere); 'Product Spaces', p. 603 (product topology, with Prop A.23(a), its characteristic property, left as Exercise A.24); 'Connectedness and Compactness', pp. 607-608 (Props A.39, A.41, A.43 with Exercises A.40, A.42, A.44); 'Homotopy and the Fundamental Group', pp. 612-614 (path homotopy, products of path classes, the fundamental group, simple connectivity, Exercises A.61 and A.67, Props A.62, A.64-A.65, A.68-A.69, homotopy equivalence and homotopy inverse, Exercise A.70); Thm A.71, p. 615, and 'Covering Maps' with Props A.77 and A.79-A.80, pp. 615-616"
    pages: "599, 603, 607-608, 612-616"
    role: the unit interval and the n-sphere as subsets of Euclidean space; the product topology on a finite product and its characteristic property; definitions of connected, component, path, path-connected, locally path-connected; properties of connected and locally path-connected spaces, left there as exercises and proved here; homotopy and path homotopy; homotopy equivalence and homotopy inverse; the fundamental group and simple connectivity; the induced homomorphism and its functoriality; invariance under homeomorphism and homotopy equivalence; fundamental groups of spheres, star-shaped sets and products; covering maps as the route to the fundamental group of the circle
  - work: ahlfors-1979
    loc: "Ch. 3, §1.3, Thms 3-5 and Def 4, pp. 56-58, with Exercises 3-4, p. 58; Ch. 4, §4.2, Def 1 and Thm 14, pp. 138-141; Ch. 6, §1, p. 229; Ch. 8, §1.5-1.6, pp. 294, 296-297"
    pages: "56-58, 138-141, 229, 294, 296-297"
    role: open connected plane sets are exactly those whose points can be joined by polygons; the term 'region'; the unique decomposition into components and their openness in R^n; the closure of a connected set is connected, and the sine-curve set posed as an exercise; the complement-connected definition of a simply connected plane region, Ahlfors's own warning about it, and the three equivalent characterisations, with the monodromy route to the direction this unit needs and the Riemann mapping theorem supplying the disk characterisation
  - work: docarmo-2016
    loc: "§5-6, Def 3 and the surrounding discussion, p. 388"
    pages: "388"
    role: simple connectivity defined for an arcwise connected subset of R^3 by homotopy of arcs with common endpoints
  - work: rhb-2006
    loc: "§11.2 'Connectivity of regions', pp. 383-384"
    pages: "383-384"
    role: the shrink-a-loop-to-a-point formulation for plane and three-dimensional regions; doubly and n-fold connected regions; the interior of a torus and the region between concentric spheres as worked cases
  - work: arfken-2013
    loc: "§3.8, the hypothesis of Gauss's theorem, p. 164"
    pages: "164"
    role: simple connectivity as the stated hypothesis of an integral theorem in a physics text
---

:::note{provenance=original}
**What it means.** Connectedness says a space is not two separate pieces; path-connectedness says you can walk between any two points inside it. Simple connectivity says more: every closed walk can be reeled in to a point without leaving the space. That last condition is what integral theorems need. On a simply connected region a field with zero curl has a potential; on a simply connected plane region an analytic function also integrates to zero around every closed curve. Drop the condition and both claims go: a curl-free field need not have a potential, whether on a plane annulus or on the region around a current-carrying wire, and an analytic function on an annulus need not integrate to zero around a closed curve in it. The failure is measured by the fundamental group.
:::

:::definition[Connected spaces and components]{provenance=adapted src="lee-2013:Appendix A, p. 607; ahlfors-1979:Ch. 3, §1.3, Thm 4 and Def 4, pp. 57-58"}
**Splitting a space in two.** Call a space $X$ **disconnected** when it can be written as $X = U \cup V$ with $U$, $V$ open, neither empty, and $U \cap V = \emptyset$; such a pair is a *separation* of $X$. A space admitting no separation is **connected**. The same condition stated through clopen sets: $X$ is connected exactly when $\emptyset$ and $X$ are the only subsets of $X$ that happen to be simultaneously open and closed.

**Connected subsets and components.** A subset of $X$ is called connected when it is a connected space under its subspace topology. A **component** of $X$ (also *connected component*) is a connected subset that no strictly larger connected subset contains. Each point of $X$ belongs to one component and no more, so the components give $X$ a unique decomposition.

**Regions.** A set that is open, connected and nonempty, inside $\mathbb{R}^{n}$ or inside $\mathbb{C}$, is a **region**.
:::

:::statement[Properties of connected spaces]{provenance=adapted src="lee-2013:Appendix A, p. 607 and Prop A.39, pp. 607-608; ahlfors-1979:Ch. 3, §1.3, Thms 3-5, pp. 56-58, and Exercise 3, p. 58"}
Spaces $X$, $Y$ carry topologies and $f : X \to Y$ is continuous.

1. **On the line.** Among nonempty subsets of $\mathbb{R}$, the connected ones are precisely the singletons together with the intervals. Here *interval* names a set $J \subseteq \mathbb{R}$ holding more than one point for which $a, c, b$ with $a, b \in J$ and $a < c < b$ always has $c \in J$ as well.
2. **Transport by continuity.** Connectedness of $X$ forces connectedness of the image $f(X)$. Applying this to a homeomorphism and its inverse shows connectedness to be a topological property.
3. **Containment.** Any nonempty connected subset of $X$ sits inside one single component. (Lee's Prop A.39(b) omits "nonempty"; the word is ours, and it is needed, because $\emptyset$ is connected under the definition above and lies inside every component at once.)
4. **Gluing at a point.** Take connected subsets of $X$ sharing at least one common point; their union is again connected.
5. **The decomposition.** Components are pairwise disjoint and closed, and $X$ is their union; and if $X \neq \emptyset$ the components are nonempty as well. (Lee's Prop A.39(d), p. 608, asserts nonemptiness with no hypothesis on $X$. The hypothesis $X \neq \emptyset$ is ours and is needed: for $X = \emptyset$ the only connected subset of $X$, hence the only component, is $\emptyset$ itself. The other three assertions hold for every $X$.)
6. **Clopen sets.** A subset of $X$ that is open as well as closed is a union of components.
7. **Open sets in $\mathbb{R}^{n}$.** Here the components of an open set are themselves open, and countably many at most. Hence each open $U \subseteq \mathbb{R}^{n}$ splits as a countable disjoint union of regions, which for $n = 1$ reads: an open subset of $\mathbb{R}$ is a countable disjoint union of open intervals.
8. **Polygonal criterion.** Let $U \subseteq \mathbb{R}^{n}$ be open and nonempty - the case $n = 2$, with $\mathbb{R}^{2}$ read as $\mathbb{C}$, is the one complex analysis uses. Then $U$ is connected precisely when each pair of its points is joined by some polygon contained in $U$, and the polygon may be taken with all of its sides parallel to coordinate axes.
9. **Closure.** If $S \subseteq X$ is connected then so is $\overline{S}$. (Ahlfors poses this as Exercise 3 on p. 58; it is the companion of item 4 and is used in the remark below.)
:::

:::idea{provenance=original}
Connectedness is the impossibility of one kind of splitting, so each proof takes a splitting of the set in question and transports it back to a splitting of a set already known not to admit one. Transport through a continuous map gives item 2, transport through an inclusion gives items 4 and 9, and items 3, 5 and 6 need nothing more than those two once intervals are known to be connected - a fact which is where the least-upper-bound property of $\mathbb{R}$ enters. In $\mathbb{R}^{n}$ one further input is used: a ball is connected, because it is the union of the segments from its centre. That makes components of open sets open (item 7), and the same ball, traversed by a staircase instead of a segment, gives the polygonal criterion (item 8).
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Prop A.39 and Exercise A.40, pp. 607-608; ahlfors-1979:Ch. 3, §1.3, Thms 3-5, pp. 56-58, and Exercise 3, p. 58"}
The items are proved in the order 1, 2, 4, 9, 3, 5, 6, 7, 8, each using only the ones before it.

**1, the easy direction.** Let $J \subseteq \mathbb{R}$ be nonempty, not a singleton, and not an interval. Having more than one point and failing the betweenness condition, it has $a, b \in J$ and $c \notin J$ with $a < c < b$. Then $J \cap (-\infty, c)$ and $J \cap (c, \infty)$ are open in $J$, disjoint, contain $a$ and $b$ respectively, and their union is $J$ because $c \notin J$. That is a separation, so $J$ is disconnected. A singleton is connected, a separation requiring two nonempty disjoint pieces.

**1, intervals are connected.** Let $J$ be an interval and suppose $J = U \cup V$ were a separation. Pick $u \in U$ and $v \in V$; relabelling if necessary, $u < v$, and $[u, v] \subseteq J$ by betweenness. Let $A = U \cap [u, v]$ and $s = \sup A$, which exists by the least-upper-bound property of $\mathbb{R}$ (:ref[Limits of sequences and completeness]{to=found.limits-of-sequences}) because $u \in A$ and $v$ bounds $A$ above; moreover $s \in [u, v] \subseteq J$, so $s \in U$ or $s \in V$.

Suppose $s \in V$. As $V$ is open in $J$, there is $\eta > 0$ with $(s - \eta, s + \eta) \cap J \subseteq V$. By the definition of a supremum some $t \in A$ satisfies $t > s - \eta$, and $t \le s$, so $t$ lies in $(s - \eta, s + \eta) \cap J$ and hence in $V$ as well as in $U$ - impossible, since $U \cap V = \emptyset$.

Suppose instead $s \in U$. Then $s \neq v$, because $v \in V$, so $s < v$. Openness of $U$ in $J$ gives $\eta > 0$ with $(s - \eta, s + \eta) \cap J \subseteq U$, and the point $t = \min(s + \eta/2, v)$ satisfies $s < t \le v$ and $t \in J$, so $t \in U \cap [u, v] = A$ with $t > s$, contradicting $s = \sup A$. Both cases being impossible, no separation exists.

**2, transport by continuity.** Since all values of $f$ lie in $f(X)$, the map $f : X \to f(X)$ is continuous, by item 4 of "Building continuous maps" in :ref[Continuity and homeomorphism]{to=found.continuity-homeomorphism}. So if $f(X) = U \cup V$ were a separation, then $f^{-1}(U)$ and $f^{-1}(V)$ would be open in $X$, disjoint because $U$ and $V$ are, nonempty because $f$ is onto $f(X)$, and their union would be $X$ - a separation of $X$. Hence $f(X)$ is connected when $X$ is. Applying this to a homeomorphism and then to its inverse shows that connectedness transfers in both directions, so it is a topological property.

**4, gluing at a point.** Let $\{S_i\}$ be connected subsets of $X$ with a point $p$ in all of them, and let $S$ be their union. Suppose $S = U \cup V$ is a separation, with $p \in U$. For each $i$, the sets $U \cap S_i$ and $V \cap S_i$ are open in $S_i$ - the subspace topology of $S_i$ is the same whether taken from $S$ or from $X$ - they are disjoint, their union is $S_i$, and $U \cap S_i$ contains $p$. Connectedness of $S_i$ therefore forces $V \cap S_i = \emptyset$. Since this holds for every $i$, $V = V \cap S = \emptyset$, which a separation does not allow.

**9, closure.** Let $S$ be connected and suppose $\overline{S} = U \cup V$ is a separation. Then $S = (U \cap S) \cup (V \cap S)$ is a union of two disjoint sets open in $S$, so connectedness of $S$ empties one of them; say $S \subseteq U$ and $V \cap S = \emptyset$. Pick $v \in V$. Being open in $\overline{S}$, $V = W \cap \overline{S}$ for some $W$ open in $X$, and $W$ is a neighbourhood of $v$. Since $v \in \overline{S}$, the set $W$ meets $S$; but $W \cap S \subseteq (W \cap \overline{S}) \cap S = V \cap S = \emptyset$. So no separation exists and $\overline{S}$ is connected.

**3, containment, and the existence of components.** Fix $x \in X$ and let $C(x)$ be the union of every connected subset of $X$ in which $x$ lies. By item 4 this union is connected, and any connected set containing it contains $x$ and is therefore one of the sets united, hence contained in $C(x)$: so $C(x)$ is a component. If a component $C'$ meets $C(x)$, item 4 makes $C(x) \cup C'$ connected, and maximality of each forces $C' = C(x) \cup C' = C(x)$. Now let $S$ be nonempty and connected and let $x \in S$. Then $S \subseteq C(x)$ by the definition of $C(x)$, and $C(x)$ is the only component meeting $S$, by the line just proved.

**5, the decomposition.** Every $x$ lies in the component $C(x)$, so the components cover $X$ and their union is $X$; distinct components are disjoint, by the same line. If $X \neq \emptyset$ then no component is empty, and this needs the maximality in the definition rather than the line just quoted: an empty component would be a maximal connected subset, yet $\{x\}$ is a strictly larger connected subset for any $x \in X$. Each component $C$ is closed: $\overline{C}$ is connected by item 9 and contains $C$, so maximality gives $\overline{C} = C$.

**6, clopen sets.** Let $A$ be open and closed and let $C$ be a component meeting $A$. Then $C = (C \cap A) \cup (C \setminus A)$ with both parts open in $C$, because $A$ and $X \setminus A$ are both open; they are disjoint, and $C \cap A \neq \emptyset$. Connectedness of $C$ gives $C \setminus A = \emptyset$, that is $C \subseteq A$. Since each point of $A$ lies in a component, which then meets $A$, the set $A$ is the union of the components it meets.

**7, open sets in $\mathbb{R}^{n}$.** A ball $B = B_r(x)$ is connected: for $y \in B$ the segment $\{(1 - s)x + sy : s \in I\}$ lies in $B$, since such a point is at distance $s\,|y - x| < r$ from $x$, and the segment is the image of the connected set $I$ under a continuous map, hence connected by items 1 and 2; $B$ is the union of these segments, all containing $x$, so item 4 applies. Now let $U \subseteq \mathbb{R}^{n}$ be open, $C$ a component of $U$ and $x \in C$. Choose $r$ with $B_r(x) \subseteq U$. Then $C \cup B_r(x)$ is connected by item 4 and lies in $U$, so maximality gives $B_r(x) \subseteq C$, and $C$ is open. Each component is thus open, connected and nonempty - a region - and the components partition $U$ by item 5. There are countably many: each, being nonempty and open, contains a ball and hence a point with rational coordinates, the set $\mathbb{Q}^{n}$ is countable (:ref[Sets, functions and countability]{to=found.sets-cardinality}), and distinct components are disjoint, so picking one rational point in each injects the set of components into $\mathbb{Q}^{n}$. For $n = 1$ a component $J$ is open, connected and nonempty, so not a singleton, so an interval by item 1; writing $a = \inf J$ and $b = \sup J$ in the extended reals, betweenness gives $(a, b) \subseteq J \subseteq [a, b]$, and openness excludes the endpoints, since a ball about $a$ inside $J$ would contain points below $\inf J$. Hence $J = (a, b)$.

**8, the polygonal criterion, sufficiency.** A polygon is a union of finitely many segments, consecutive ones sharing an endpoint; each segment is connected as in item 7, and item 4 applied to one joint at a time makes the polygon connected. If every point of $U$ is joined to a fixed $a \in U$ by a polygon in $U$, then $U$ is the union of those polygons, all containing $a$, hence connected by item 4. In particular the condition of the statement, which gives polygons between all pairs, implies connectedness.

**8, the polygonal criterion, necessity.** Let $U$ be open, nonempty and connected, fix $a \in U$, and let $A$ be the set of points of $U$ reachable from $a$ by a polygon inside $U$ with each side parallel to some coordinate axis; $a \in A$ by the degenerate polygon. The key observation is that **a ball contains the staircase from its centre to any one of its points, and likewise the staircase from any one of its points to its centre**. Indeed let $B_r(x) \subseteq U$ and $y \in B_r(x)$, and write $d_j = y_j - x_j$. The staircase from the centre $x$ out to $y$ passes through $x^{(0)} = x$ and $x^{(k)} = x + \sum_{j \le k} d_j e_j$, so that $x^{(n)} = y$ and each side is parallel to a coordinate axis. A point of its $k$-th side is $x + \sum_{j < k} d_j e_j + \sigma d_k e_k$ with $\sigma \in [0, 1]$, and its distance from $x$ is

$$
\Bigl( \sum_{j < k} d_j^{2} + \sigma^{2} d_k^{2} \Bigr)^{1/2} \le \Bigl( \sum_{j} d_j^{2} \Bigr)^{1/2} = |y - x| < r .
$$

Running the same construction from $y$ in towards the centre gives the staircase through $y^{(0)} = y$ and $y^{(k)} = y - \sum_{j \le k} d_j e_j$, a point of whose $k$-th side is $y - \sum_{j < k} d_j e_j - \sigma d_k e_k$; this point agrees with $x$ in the coordinates $j < k$, differs from $x$ by $(1 - \sigma) d_k$ in coordinate $k$ and by $d_j$ in each coordinate $j > k$, so its distance from $x$ is

$$
\Bigl( (1 - \sigma)^{2} d_k^{2} + \sum_{j > k} d_j^{2} \Bigr)^{1/2} \le \Bigl( \sum_{j} d_j^{2} \Bigr)^{1/2} = |y - x| < r
$$

as well. Both staircases therefore lie in $B_r(x) \subseteq U$. The observation must be kept to the centre: the staircase between two points of a ball neither of which is its centre can leave it, as the points $u = (0, 0.99)$ and $v = (0.99, 0)$ of $B_1(0) \subseteq \mathbb{R}^{2}$ show: the staircase from $u$ to $v$ passes through $u + (v_1 - u_1) e_1 = (0.99, 0.99)$, of norm $0.99\sqrt{2} = 1.40007\ldots > 1$. Only the centre-to-point case is needed below, and in both of its orientations.

Consequently $A$ is open: if $x \in A$, pick $r$ with $B_r(x) \subseteq U$ and append, to a polygon from $a$ to $x$, the staircase from the centre $x$ out to any $y \in B_r(x)$; so $B_r(x) \subseteq A$. And $U \setminus A$ is open: if $x \in U \setminus A$, pick $r$ with $B_r(x) \subseteq U$; were some $y \in B_r(x)$ in $A$, the polygon from $a$ to $y$ followed by the staircase from $y$ in to the centre $x$ would place $x$ in $A$. So $U = A \cup (U \setminus A)$ with both parts open in $U$ and disjoint; $A \neq \emptyset$, so connectedness forces $U \setminus A = \emptyset$. Any two points $p, q \in U$ are therefore joined through $a$ by an axis-parallel polygon in $U$. $\square$
:::

:::definition[Paths, path-connectedness, local path-connectedness]{provenance=adapted src="lee-2013:Appendix A, p. 608"}
Let $I = [0, 1]$ carry its Euclidean topology. A **path from $p$ to $q$** in a space $X$ means an element $f \in C(I, X)$ whose endpoint values are $f(0) = p$ and $f(1) = q$. Say $X$ is **path-connected** when some path in $X$ joins $p$ to $q$, whichever pair $p, q \in X$ is named. A maximal path-connected subset of $X$ is called a **path component**; the path components partition $X$.

Say $X$ is **locally path-connected** when its topology admits a basis all of whose members are path-connected.
:::

:::statement[Path-connectedness against connectedness]{provenance=adapted src="lee-2013:Appendix A, Props A.41 and A.43, p. 608"}
1. **One implication is free.** A path-connected space is connected.
2. **The two analogues of items 2 and 4 above.** Continuity carries path-connectedness forward: if $X$ is path-connected so is $f(X)$. And a family of path-connected subsets with a point common to all of them has path-connected union.
3. **When the implication reverses.** Suppose $X$ is locally path-connected. Then its components are open subsets of $X$; its path components are identical with its components; connectedness and path-connectedness of $X$ amount to the same thing; and local path-connectedness passes to every open subset of $X$.

Open subsets of $\mathbb{R}^{n}$ are locally path-connected, since the open balls contained in such a set form a basis for it and a ball is convex, hence path-connected. For an open $U \subseteq \mathbb{R}^{n}$ - the only situation most applications present - "connected" and "path-connected" may therefore be used interchangeably. Item 1 does not reverse for arbitrary spaces; the remark below exhibits the standard counterexample. (This paragraph is ours: Lee states items 1-3 but not the Euclidean consequence.)
:::

:::idea{provenance=original}
A path is a continuous map defined on an interval, and an interval is connected, so its image is connected: that single observation turns a path-connected space into a union of connected sets through a fixed point and proves item 1. Item 2 repeats the connected arguments with paths in place of separations, the one new ingredient being concatenation, which is continuous by the gluing lemma. Under local path-connectedness each path component swallows a basis neighbourhood of each of its points, so it is open; its complement is a union of the other path components and so is open too, making each path component clopen - and a connected set cannot contain a nonempty clopen proper piece.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Props A.41 and A.43 with Exercises A.42 and A.44, p. 608"}
Throughout, concatenation means the product path of the next definition block: for paths $f$ from $x$ to $p$ and $g$ from $p$ to $y$, the map sending $s$ to $f(2s)$ on $[0, 1/2]$ and to $g(2s - 1)$ on $[1/2, 1]$. The two formulas agree at $s = 1/2$, both giving $p$, and the two halves of $I$ are closed and cover it, so the gluing lemma of :ref[Continuity and homeomorphism]{to=found.continuity-homeomorphism} makes the concatenation a continuous path from $x$ to $y$.

**1.** An empty space is connected, so let $X$ be path-connected and nonempty and fix $p \in X$. For each $q \in X$ choose a path $f_q$ from $p$ to $q$. Its image $f_q(I)$ is connected, by items 1 and 2 of the previous statement, and contains both $p$ and $q$. So $X$ is the union of the sets $f_q(I)$, all of which contain $p$, and item 4 of that statement makes $X$ connected.

**2, images.** Let $X$ be path-connected and let $f(x), f(y) \in f(X)$. A path $g$ from $x$ to $y$ in $X$ gives the path $f \circ g$ from $f(x)$ to $f(y)$, continuous as a composition, and continuous into the subspace $f(X)$ by item 4 of "Building continuous maps" cited above. So $f(X)$ is path-connected.

**2, unions.** Let $\{S_i\}$ be path-connected subsets with a common point $p$, and let $x \in S_i$, $y \in S_j$. Join $x$ to $p$ by a path in $S_i$ and $p$ to $y$ by a path in $S_j$; both are paths in the union, since composing with the inclusion keeps them continuous, and their concatenation joins $x$ to $y$ inside the union.

**3(a), path components are open.** Let $P$ be a path component and $x \in P$. Local path-connectedness gives a basis of path-connected open sets, so some basis element $B$ satisfies $x \in B$. Then $P \cup B$ is path-connected by the previous paragraph, $x$ being common to both, and maximality of $P$ gives $B \subseteq P$. So $P$ contains an open set around each of its points and is open.

**3(b), path components are components.** Let $P$ be a path component. If $X = \emptyset$ then $P = \emptyset$ is also the one component of $X$ and there is nothing to prove, so assume $X \neq \emptyset$; then $P \neq \emptyset$, since an empty $P$ would not be a maximal path-connected subset - $\{x\}$ is path-connected for any $x \in X$. Now $P$ is path-connected, hence connected by item 1, hence contained in a single component $C$ by item 3 of the previous statement. Next, a path component $Q$ meeting $C$ lies inside $C$: being nonempty and connected, $Q$ sits inside one component by item 3 of that statement, and that component meets $C$, so it is $C$, distinct components being disjoint. Since the path components cover $X$, the component $C$ is therefore the union of the path components it meets, each of which is open by 3(a). Thus $P$ is open in $C$, and so is the union of the other path components meeting $C$, which is exactly $C \setminus P$. So $P$ is nonempty and is simultaneously open and closed in $C$, and connectedness of $C$ gives $P = C$.

**3(c), connected means path-connected.** One direction is item 1. Conversely let $X$ be connected and nonempty. By item 3 of the previous statement $X$ lies inside one component, so $X$ is that component, and by 3(b) it is a single path component, that is path-connected. (For $X = \emptyset$ both properties hold vacuously.)

**3(d), open subsets.** Let $\mathcal{B}$ be a basis of path-connected open sets for $X$ and let $V \subseteq X$ be open. Then $\{B \in \mathcal{B} : B \subseteq V\}$ is a basis for the subspace topology of $V$: if $W$ is open in $V$ then $W$ is open in $X$, because $V$ is, so each $x \in W$ has a basis element $B$ with $x \in B \subseteq W \subseteq V$. Its members are path-connected, so $V$ is locally path-connected.

**The Euclidean consequence.** Let $U \subseteq \mathbb{R}^{n}$ be open. The balls contained in $U$ form a basis for $U$, by the pointwise test for a basis, and each ball is path-connected: for $x, y \in B_r(z)$ the map $s \mapsto (1 - s)x + sy$ is continuous and its values lie in $B_r(z)$ by convexity. So $U$ is locally path-connected and 3(c) applies to it and, by 3(d), to each of its open subsets. $\square$
:::

:::definition[Homotopy, path homotopy and the fundamental group]{provenance=adapted src="lee-2013:Appendix A, p. 603 and pp. 612-614"}
**The topology on a product.** Deformations are maps on $X \times I$, so fix the topology first. For topological spaces $X_1, \dots, X_k$ the **product topology** on $X_1 \times \dots \times X_k$ is the one whose basis is the collection of boxes $U_1 \times \dots \times U_k$ with each $U_i$ open in $X_i$ (Lee, p. 603); a finite product carries this topology throughout, here and in item 5 of the statement below. On $I \times I \subseteq \mathbb{R}^{2}$ it is the Euclidean subspace topology.

**Deforming one map into another.** Given $F_0, F_1 \in C(X, Y)$, a **homotopy** carrying $F_0$ to $F_1$ means a member $H \in C(X \times I, Y)$ whose two end slices recover them:

$$
H(x, 0) = F_0(x) \quad\text{and}\quad H(x, 1) = F_1(x), \qquad x \in X .
$$

Write $F_0 \simeq F_1$ when such an $H$ exists. If some $A \subseteq X$ is held fixed throughout the deformation, meaning $H(x, t)$ is independent of $t$ for $x \in A$, the two maps are **homotopic relative to $A$**.

**Homotopy equivalence.** A map $F \in C(X, Y)$ is a **homotopy equivalence** when some $G \in C(Y, X)$ satisfies both $F \circ G \simeq \mathrm{id}_Y$ and $G \circ F \simeq \mathrm{id}_X$; such a $G$ is a **homotopy inverse** for $F$, and $X$ and $Y$ are then **homotopy equivalent** (Lee, p. 614). Every homeomorphism is a homotopy equivalence, its inverse serving as a homotopy inverse, but a homotopy equivalence need not be injective or surjective.

**The case that matters: paths.** Paths $f_0, f_1$ in $X$ are **path-homotopic**, written $f_0 \sim f_1$, when they are homotopic relative to the two-point set $\{0, 1\}$. Unpacked, this asks for $H \in C(I \times I, X)$ obeying, for all $s, t \in I$,

$$
H(s, 0) = f_0(s), \quad H(s, 1) = f_1(s), \qquad H(0, t) = f_0(0), \quad H(1, t) = f_0(1) .
$$

The last two conditions pin the endpoints down, so only paths sharing a starting point and sharing a finishing point can be path-homotopic. On the paths running from $p$ to $q$ this is an equivalence relation, and $[f]$ denotes the class - the **path class** - of $f$.

**Composing paths.** When $f$ ends where $g$ begins, $f(1) = g(0)$, their **product** runs through $f$ and then $g$, each at twice speed:

$$
(f \cdot g)(s) = \begin{cases} f(2s), & 0 \le s \le \tfrac12, \\ g(2s - 1), & \tfrac12 \le s \le 1 . \end{cases}
$$

Replacing $f$ or $g$ by a path-homotopic one replaces $f \cdot g$ by a path-homotopic one, so $[f] \cdot [g] := [f \cdot g]$ makes sense on classes. Associativity holds for classes, though not for the paths themselves.

**The fundamental group.** Fix $q \in X$ and call a path with $f(0) = f(1) = q$ a **loop based at $q$**. Collect the path classes of all such loops and give the collection the product just defined; the result is a group in the sense of :ref[Groups and subgroups]{to=group.groups-subgroups}, written $\pi_1(X, q)$ and called the **fundamental group of $X$ at $q$**. Its neutral element is $[c_q]$, where $c_q(s) \equiv q$ stays put, and $[f]^{-1} = [\bar f]$ for the retraced path $\bar f(s) = f(1 - s)$. Changing the base point inside a path-connected $X$ changes $\pi_1(X, q)$ only up to isomorphism, so one may speak of $\pi_1(X)$ there.
:::

:::definition[Simply connected]{provenance=adapted src="lee-2013:Appendix A, p. 613 and Exercise A.61"}
Declare $X$ to be **simply connected** when two things hold: $X$ is path-connected, and $\pi_1(X, q)$ reduces to its neutral element alone for one base point $q$ - hence, by the base-point remark above, for all of them.

Both halves are needed, and neither reformulation below may be used on its own as a definition. **Assume $X$ is nonempty and path-connected.** (The hypothesis $X \neq \emptyset$ is ours, as in item 5 of "Properties of connected spaces" above: Lee's gloss on p. 613 and his Exercise A.61 name path-connectedness and nothing further. It is needed, because $\emptyset$ is path-connected - there is no pair of points to join - and satisfies both bullets below vacuously, yet is not simply connected: the definition demands a base point $q \in X$ at which $\pi_1(X, q)$ is trivial, and $\emptyset$ supplies none.) Then each of the following is equivalent to $X$ being simply connected:

- every loop in $X$ can be deformed, through loops in $X$ based at the same point, to the stationary loop at that point; equivalently, each loop lies in the path class of a constant (Lee's gloss on the definition, p. 613); or
- any two paths of $X$ that start together and finish together are path-homotopic (Lee's Exercise A.61, p. 613, which states the path-connectedness hypothesis explicitly).

Dropping path-connectedness makes both bullets strictly weaker than simple connectivity; the remark below gives the counterexample.
:::

:::statement[Invariance, and the standard examples]{provenance=adapted src="lee-2013:Appendix A, Example A.8, p. 599, Props A.64-A.65, p. 614, Exercise A.67, p. 614, Props A.68-A.69, p. 614, Thm A.71, p. 615; ahlfors-1979:Ch. 8, §1.5, p. 294"}
1. A continuous map $F : X \to Y$ induces a group homomorphism (:ref[Homomorphisms and quotient groups]{to=group.homomorphisms-quotients}) $F_* : \pi_1(X, q) \to \pi_1(Y, F(q))$, $F_*[f] = [F \circ f]$, with $(G \circ F)_* = G_* \circ F_*$ and $(\mathrm{id}_X)_* = \mathrm{id}$.
2. If $F$ is a homeomorphism then $F_*$ is an isomorphism, so homeomorphic spaces have isomorphic fundamental groups; being simply connected is a topological property. The conclusion about $F_*$ survives the weaker hypothesis that $F$ is a homotopy equivalence: that is Lee's Thm A.71, p. 615, and it speaks of $F_*$ alone. Path-connectedness transfers across a homotopy equivalence too, in either direction; that half is not in Lee's theorem and is proved below. The two together make simple connectivity, and not just the group, an invariant of homotopy equivalence; that is how item 6 and the examples below use this item.
3. A subset $U \subseteq \mathbb{R}^{n}$ is **star-shaped** if there is $c \in U$ such that for every $x \in U$ the segment from $c$ to $x$ lies in $U$. Every star-shaped set is simply connected; in particular every *nonempty* convex set, every open ball, every half-space and all of $\mathbb{R}^{n}$ are simply connected. Nonemptiness cannot be dropped, and the reason is the second half of the definition rather than the first: $\emptyset$ is convex and is path-connected, vacuously, there being no pair of points to join, but simple connectivity asks in addition for a base point $q \in X$ at which $\pi_1(X, q)$ is trivial, and $\emptyset$ supplies none. So $\emptyset$ is not simply connected. The star-shaped hypothesis carries nonemptiness with it, since a centre $c \in U$ is required.
4. **Spheres.** For an integer $n \ge 0$ let
$$
S^{n} = \{ x \in \mathbb{R}^{n+1} : |x| = 1 \}
$$
be the unit $n$-sphere with its Euclidean subspace topology (Lee, p. 599), so that $S^{1}$ is the unit circle in $\mathbb{R}^{2}$ and $S^{2}$ the unit sphere in $\mathbb{R}^{3}$. Based at $(1, 0)$, the circle has $\pi_1(S^{1}, (1, 0))$ infinite cyclic, a generator being the class of the once-round loop $\omega(s) = (\cos 2\pi s, \sin 2\pi s)$. So $\pi_1(S^{1}) \cong \mathbb{Z}$, and $S^{1}$ is not simply connected. Spheres of higher dimension are: $S^{n}$ is simply connected for every $n > 1$.
5. The fundamental group of a finite product is the product of the fundamental groups, with no connectedness hypothesis on the factors: for spaces $X_1, \dots, X_k$ carrying the product topology and base points $q_i \in X_i$,
$$
\pi_1\bigl(X_1 \times \dots \times X_k, (q_1, \dots, q_k)\bigr) \cong \pi_1(X_1, q_1) \times \dots \times \pi_1(X_k, q_k) ,
$$
the isomorphism sending $[f]$ to $\bigl((p_1)_*[f], \dots, (p_k)_*[f]\bigr)$, where $p_i$ is the $i$-th projection. On the right-hand side $G_1 \times \dots \times G_k$ denotes the **direct product** of groups $G_1, \dots, G_k$: the Cartesian product of the underlying sets, multiplied slot by slot,
$$
(g_1, \dots, g_k)\,(h_1, \dots, h_k) = (g_1 h_1, \dots, g_k h_k) ,
$$
which is a group, its neutral element being the tuple of the neutral elements and the inverse of a tuple being the tuple of the inverses, each axiom holding in the product because it holds in every slot. (Lee writes the product group without comment; spelling it out is ours, neither group prerequisite covering direct products.) (The base-point-free form $\pi_1(X_1 \times \dots \times X_k) \cong \pi_1(X_1) \times \dots \times \pi_1(X_k)$ is licensed only when every factor is path-connected, since that is when the notation $\pi_1(X)$ is defined.)
6. The inclusion $S^{n-1} \hookrightarrow \mathbb{R}^{n} \setminus \{0\}$ is a homotopy equivalence, with homotopy inverse $x \mapsto x/|x|$. Hence $\pi_1(\mathbb{R}^{2} \setminus \{0\}) \cong \mathbb{Z}$, while $\mathbb{R}^{n} \setminus \{0\}$ is simply connected for $n \ge 3$.
:::

:::idea{provenance=original}
Item 1 is bookkeeping: composing a loop with $F$ turns path homotopies into path homotopies and respects the product of paths, so the assignment is well defined on classes and multiplicative. Item 2 then falls out of functoriality, since the maps induced by a homeomorphism and by its inverse compose to the identity in both orders; for a homotopy equivalence the isomorphism is quoted, but its companion, the transfer of path-connectedness, is proved here by riding the homotopy track $t \mapsto H(x, t)$ from a point to its image under the round trip $G \circ F$. Item 3 is the straight-line contraction towards the centre of a star-shaped set, which fixes the base point provided the base point is taken to be the centre. Item 5 rests on the characteristic property of the product topology: a loop in a product is nothing but a tuple of loops, and a tuple of path homotopies is nothing but a path homotopy in the product. Item 6 is two explicit maps and one straight-line homotopy that never passes through the origin.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Prop A.23(a) with Exercise A.24, p. 603, Prop A.62 and Exercise A.63, p. 613, Props A.64-A.65 with Exercise A.66, p. 614, Exercise A.67, p. 614, Prop A.69 with Exercise A.70, p. 614"}
**1.** If $f$ is a loop at $q$ then $F \circ f$ is continuous, being a composition, and $(F \circ f)(0) = (F \circ f)(1) = F(q)$, so it is a loop at $F(q)$. If $H$ is a path homotopy from $f$ to $f'$ then $F \circ H$ is continuous and its four boundary conditions are those of $H$ with $F$ applied, so it is a path homotopy from $F \circ f$ to $F \circ f'$; hence $F_*[f] = [F \circ f]$ depends only on the class. It is multiplicative because composition respects the defining formula of the product: $F \circ (f \cdot g)$ sends $s$ to $F(f(2s))$ on $[0, 1/2]$ and to $F(g(2s - 1))$ on $[1/2, 1]$, which is $(F \circ f) \cdot (F \circ g)$. So $F_*$ is a homomorphism. Finally $(G \circ F) \circ f = G \circ (F \circ f)$ gives $(G \circ F)_* = G_* \circ F_*$, and $\mathrm{id}_X \circ f = f$ gives $(\mathrm{id}_X)_* = \mathrm{id}$.

**2, the homeomorphism case.** Let $F$ be a homeomorphism. Applying item 1 twice, $(F^{-1})_* \circ F_* = (F^{-1} \circ F)_* = (\mathrm{id}_X)_* = \mathrm{id}$ on $\pi_1(X, q)$, and $F_* \circ (F^{-1})_* = \mathrm{id}$ on $\pi_1(Y, F(q))$. So $F_*$ is a homomorphism with a two-sided inverse, hence an isomorphism, and homeomorphic spaces have isomorphic fundamental groups. Simple connectivity is then a topological property: a homeomorphism carries path-connected spaces to path-connected spaces, by item 2 of the previous statement applied to $F$ and to $F^{-1}$, and it carries a trivial fundamental group to a trivial one.

**2, the homotopy-equivalence case.** That $F_*$ is still an isomorphism when $F$ is only a homotopy equivalence is quoted, not proved here; see the note below. The other half of the invariance, path-connectedness, is not part of that quoted theorem, and the argument for it is ours. Let $F : X \to Y$ be a homotopy equivalence with homotopy inverse $G$, let $H \in C(X \times I, X)$ be a homotopy from $\mathrm{id}_X$ to $G \circ F$, and suppose $Y$ is path-connected. For $x \in X$ the slice $t \mapsto H(x, t)$ is continuous, being $H$ composed with $t \mapsto (x, t)$, whose components $t \mapsto x$ and $t \mapsto t$ are continuous (the criterion for continuity into a finite product is proved in item 5 below); it is therefore a path in $X$ from $x$ to $G(F(x))$. Now take $x_0, x_1 \in X$. Path-connectedness of $Y$ gives a path $\gamma$ from $F(x_0)$ to $F(x_1)$, and $G \circ \gamma$ is then a path in $X$ from $G(F(x_0))$ to $G(F(x_1))$. Concatenating the slice at $x_0$, this path, and the reverse of the slice at $x_1$ joins $x_0$ to $x_1$, so $X$ is path-connected. Exchanging the roles of $F$ and $G$, which are homotopy inverses of each other, gives the converse direction. Hence homotopy equivalent spaces are path-connected together and, with the quoted isomorphism, simply connected together.

**3.** Let $U \subseteq \mathbb{R}^{n}$ be star-shaped with centre $c$. *Path-connected:* for $x, y \in U$ the segments from $x$ to $c$ and from $c$ to $y$ lie in $U$ by hypothesis, and are the images of $I$ under the continuous maps $s \mapsto (1 - s)x + sc$ and $s \mapsto (1 - s)c + sy$; their concatenation is a path from $x$ to $y$ in $U$. *Trivial fundamental group at $c$:* let $f$ be a loop in $U$ based at $c$ and set

$$
H(s, t) = (1 - t) f(s) + t c , \qquad (s, t) \in I \times I .
$$

Each value lies on the segment from $f(s) \in U$ to $c$, hence in $U$; $H$ is continuous, being built from the continuous $f$ by scalar multiplication and addition. Its boundary values are $H(s, 0) = f(s)$, $H(s, 1) = c$, and $H(0, t) = H(1, t) = (1 - t)c + tc = c$, so $H$ is a path homotopy from $f$ to the constant loop at $c$. Hence $\pi_1(U, c)$ consists of the identity alone, and $U$ is simply connected; as recorded in the definition, path-connectedness then makes the same true at every other base point. A nonempty convex set is star-shaped about each of its points, so the open balls, the half-spaces and $\mathbb{R}^{n}$ itself are covered by this.

**5, continuity into a product.** The projection $p_i$ is continuous, since $p_i^{-1}(U_i)$ is the box with $U_i$ in slot $i$ and the whole factor in every other slot. Conversely, if every $p_i \circ F$ is continuous then for a basis box the identity $F^{-1}(U_1 \times \dots \times U_k) = \bigcap_{i=1}^{k} (p_i \circ F)^{-1}(U_i)$ exhibits the inverse image as a finite intersection of open sets, and testing inverse images on a basis suffices by item 6 of the equivalence statement in :ref[Continuity and homeomorphism]{to=found.continuity-homeomorphism}. So a map into a finite product is continuous exactly when its components are. This is the characteristic property of the product topology, Lee's Prop A.23(a), p. 603, which he leaves as Exercise A.24.

**5, the isomorphism.** $P[f] = \bigl((p_1)_*[f], \dots, (p_k)_*[f]\bigr)$ is a homomorphism, each $(p_i)_*$ being one by item 1 and the group operation of a direct product being componentwise. It is surjective: given loops $f_i$ at $q_i$, the map $f(s) = (f_1(s), \dots, f_k(s))$ is continuous by the previous paragraph, is a loop at $(q_1, \dots, q_k)$, and satisfies $p_i \circ f = f_i$, so $P[f] = ([f_1], \dots, [f_k])$. Its kernel is trivial: if every $p_i \circ f$ is path-homotopic to the constant loop at $q_i$ by some $H_i$, then $H = (H_1, \dots, H_k)$ is continuous by the previous paragraph and satisfies the four boundary conditions componentwise, so it is a path homotopy from $f$ to the constant loop at $(q_1, \dots, q_k)$. A homomorphism with trivial kernel is injective (:ref[Homomorphisms and quotient groups]{to=group.homomorphisms-quotients}), so $P$ is an isomorphism.

**6.** The map $r(x) = x/|x|$ is continuous on $\mathbb{R}^{n} \setminus \{0\}$ and takes values in $S^{n-1}$, and $r \circ \iota = \mathrm{id}_{S^{n-1}}$ because $|x| = 1$ on the sphere. For the other composite, put

$$
H(x, t) = (1 - t) x + t \frac{x}{|x|} = \Bigl( (1 - t) + \frac{t}{|x|} \Bigr) x .
$$

The scalar in brackets is positive for every $t \in I$: both terms are nonnegative, and they cannot both vanish, since $t = 0$ makes the first equal to $1$ and $t > 0$ makes the second positive. So $H(x, t)$ is a nonzero multiple of $x$ and lies in $\mathbb{R}^{n} \setminus \{0\}$; $H$ is continuous there, and $H(x, 0) = x$ while $H(x, 1) = \iota(r(x))$. Hence $\iota \circ r \simeq \mathrm{id}$ and $\iota$ is a homotopy equivalence with homotopy inverse $r$.

For $n \ge 2$ the sphere $S^{n-1}$ is path-connected: for $n = 2$ it is the image of $I$ under the loop $\omega$ of item 4, which runs once round the whole circle, so item 2 of the path-connectedness statement applies; for $n \ge 3$ item 4 says $S^{n-1}$ is simply connected, which includes path-connectedness. By the homotopy-equivalence paragraph above, $\mathbb{R}^{n} \setminus \{0\}$ is then path-connected as well, so the notation $\pi_1(\mathbb{R}^{n} \setminus \{0\})$ is licensed. With that, the two consequences drawn in the statement follow: item 4 and the quoted isomorphism half of item 2 give $\pi_1(\mathbb{R}^{2} \setminus \{0\}) \cong \pi_1(S^{1}) \cong \mathbb{Z}$, and for $n \ge 3$ they give a trivial $\pi_1(\mathbb{R}^{n} \setminus \{0\})$, which with path-connectedness is simple connectivity. $\square$
:::

:::note[What this unit quotes without proving]{provenance=adapted src="lee-2013:Appendix A, p. 613, Prop A.68 and Exercise A.70, p. 614, Thm A.71, p. 615, 'Covering Maps' with Props A.77 and A.79-A.80, pp. 615-616; ahlfors-1979:Ch. 6, §1, p. 229, Ch. 8, §1.6, pp. 296-297"}
Four facts used above are stated here on the authority of their sources, their proofs needing machinery this chapter does not develop.

- **The fundamental groups of spheres** (item 4). Lee states both halves as Prop A.68, p. 614, and leaves their proofs as Exercise A.70 on the same page, so no proof is to be found there. The two halves are proved by different routes. For $S^{1}$ the usual route is the covering-space theory Lee takes up immediately afterwards, pp. 615-616: lift loops through the covering of the circle by the line, $t \mapsto (\cos 2\pi t, \sin 2\pi t)$, and count how far the lift advances, the path-lifting and monodromy properties of his Prop A.77, p. 616, being what make the count well defined and unchanged by path homotopy. For $S^{n}$ with $n > 1$ covering spaces are the wrong tool, since simple connectivity of a space is never what those results produce about that space. Lee's Prop A.79, p. 616, takes $X$ simply connected as its hypothesis and concludes that every covering map onto $X$ is a homeomorphism, so applying it to $S^{n}$ would presuppose exactly what is wanted. His Prop A.80, p. 616, hypothesises something different and weaker - that $X$ be connected and *locally* simply connected, meaning it has a basis of simply connected open sets - and its conclusion is that a simply connected covering space of $X$ exists; there simple connectivity is a property of the cover, not of the base, so A.80 says nothing about whether $S^{n}$ itself is simply connected. The standard arguments instead deform a given loop until it misses some point $p$ of the sphere, after which it lives in $S^{n} \setminus \{p\}$, homeomorphic to $\mathbb{R}^{n}$ by stereographic projection from $p$ and so simply connected by item 3; the deformation is where $n > 1$ is used, and it fails for $n = 1$, where the once-round loop is onto. An alternative route covers $S^{n}$ by two open caps, each simply connected and with path-connected intersection when $n > 1$, and applies the Seifert-van Kampen theorem, which lies outside this handbook's library.
- **Homotopy invariance of the fundamental group** (the isomorphism named in item 2 and used again in item 6). This is Lee's Thm A.71, p. 615, which he too states without proof, referring to the topology texts cited at the head of his appendix. It is only about the induced map on $\pi_1$; the accompanying transfer of path-connectedness, which the uses of item 2 also need, is proved above and is ours.
- **That $\pi_1(X, q)$ is a group, and that the groups at different base points of a path-connected space are isomorphic** (the definition of the fundamental group above). Lee, p. 613. The group axioms need the associativity and inverse properties of path classes, and the base-point statement needs the isomorphism built from a path joining the two points.
- **The equivalence, for a plane region, of Ahlfors's connected-complement condition with triviality of the fundamental group** (the remark on conventions below). Ahlfors closes this circle on pp. 296-297, and the direction the remark needs - trivial fundamental group forces the complement in the extended plane to be connected - is the one he gets from the monodromy theorem of Ch. 8, §1.6: if a bounded component of the complement existed, a logarithm about a point of it would fail to be single-valued in the region, which monodromy forbids once the fundamental group is trivial. The remaining link of his three-way equivalence, connected complement against homeomorphic to a disk, is the Riemann mapping theorem of Ch. 6, §1, p. 229.
:::

:::remark[Why simple connectivity is the hypothesis for potentials and contour integrals]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.2, pp. 138-139; rhb-2006:§11.2, pp. 383-384; arfken-2013:§3.8, p. 164"}
Ahlfors (p. 138) introduces simple connectivity with precisely this motivation: it is the class of regions in which Cauchy's theorem is "universally valid", that is, valid for every closed curve in the region rather than only for some. On a region that is not simply connected the theorem fails in a controlled way, and the obstruction is visible in one function: for $a \notin \Omega$ the function $1/(z - a)$ is analytic on $\Omega$ while $\oint_\gamma dz/(z - a) = 2\pi i\, n(\gamma, a)$, where $n(\gamma, a)$ counts how many times the closed curve $\gamma$ winds around $a$; that integral is nonzero as soon as $\gamma$ encircles $a$ (Ahlfors, pp. 140-141). See :ref[Cauchy's theorem]{to=complex.cauchy-theorem} and :ref[Contour integrals]{to=complex.contour-integrals}.

The same condition appears on the real side. Riley, Hobson and Bence (pp. 383-384) introduce the connectivity of a region exactly because scalar and vector fields are defined on regions and the integral theorems depend on it, and Arfken, Weber and Harris (p. 164) state Gauss's theorem for a simply connected region of $\mathbb{R}^{3}$, remarking there that a region with a hole in it, a doughnut say, is not simply connected. What the condition buys in vector calculus is the existence of potentials: on a simply connected open subset of $\mathbb{R}^{3}$ a $C^{1}$ field with vanishing curl is the gradient of a single-valued function, whereas on an annular region it need not be. See :ref[Line integrals and conservative fields]{to=vcalc.line-integrals}, :ref[Stokes' theorem and Green's theorem in the plane]{to=vcalc.stokes-theorem} and :ref[Helmholtz decomposition and potentials]{to=vcalc.helmholtz-decomposition}, where these statements are made precise.
:::

:::remark[Both halves of simple connectivity are needed]{provenance=original}
Neither bullet in the definition of simple connectivity implies path-connectedness, so neither may stand alone. Let

$$
X = \{z \in \mathbb{C} : |z| < 1\} \cup \{z \in \mathbb{C} : |z - 3| < 1\}
$$

be two disjoint open disks with the subspace topology. Every loop in $X$ lies in one disk, which is convex and hence simply connected, so the loop contracts there; likewise two paths of $X$ with the same start and the same end lie in one disk and are path-homotopic in it. Both bullets therefore hold, while $X$ is not path-connected - no path joins $0$ to $3$, since its image would be a connected subset of $X$ meeting both disks, and the disks separate $X$. So $X$ is not simply connected, and $\pi_1(X, 0)$ being trivial says nothing about $X$ as a whole. This is why Lee hypothesises a path-connected space in Exercise A.61 :cite{work=lee-2013 loc="Exercise A.61, p. 613"}.
:::

:::remark[Connected does not imply path-connected]{provenance=adapted src="ahlfors-1979:Ch. 3, §1.3, Exercises 3-4, p. 58"}
Let

$$
A = \{(0, y) : |y| \le 1\}, \qquad B = \{(x, \sin(1/x)) : x > 0\}, \qquad X = A \cup B \subseteq \mathbb{R}^{2}
$$

with the Euclidean subspace topology (the *topologist's sine curve*; Ahlfors poses this pair of sets as Exercise 4 on p. 58, and the analysis below is ours). $B$ is connected, being a continuous image of $(0, \infty)$, and $A \subseteq \overline{B}$ because $\sin(1/x)$ takes every value in $[-1, 1]$ on every interval $(0, \delta)$. In fact $\overline{B} = A \cup B = X$: the graph of a continuous function on $(0, \infty)$ is closed in $(0, \infty) \times \mathbb{R}$, so the only points added by the closure are those with first coordinate $0$, and these are exactly the points of $A$. Item 9 of the properties statement above - the closure of a connected set is connected - therefore makes $X$ connected. But $X$ is not path-connected. Suppose $\gamma : I \to X$ were continuous with $\gamma(0) \in A$ and $\gamma(1) \in B$, and let $c = \max \gamma^{-1}(A)$. That maximum exists because $\gamma^{-1}(A)$ is closed in $I$ - $A$ is closed in $X$, being closed in $\mathbb{R}^{2}$, and $\gamma$ is continuous - and is also nonempty, since $\gamma(0) \in A$, and bounded, being a subset of $I$. Moreover $c < 1$: the two sets are disjoint, every point of $B$ having positive first coordinate, and $\gamma(1) \in B$, so $1 \notin \gamma^{-1}(A)$. Hence $\gamma(t) \in X \setminus A = B$ for every $t \in (c, 1]$, so by the intermediate value theorem the first coordinate of $\gamma$ takes every sufficiently small positive value on every interval $(c, c + \eta)$, and the second coordinate therefore takes both the values $1$ and $-1$ on every such interval, contradicting continuity at $c$. The hypothesis that fails in the statement above is local path-connectedness: no neighbourhood of $(0, 0)$ in $X$ is path-connected.

**Path components need not be closed.** In the same $X$ the path components are $A$ and $B$. $A$ is closed in $X$, but $\overline{B} \cap X = X \neq B$, so $B$ is not. This is one place where the parallel between components and path components breaks down: components are always closed, path components need not be.
:::

:::remark["No holes" is not a definition]{provenance=adapted src="rhb-2006:§11.2, p. 384"}
The intuitive phrase is a reliable guide only in the plane. In $\mathbb{R}^{3}$, removing a point leaves a simply connected set, $\mathbb{R}^{3} \setminus \{0\}$ (item 6 above), while removing a whole line does not. The second case is worth settling by the statements rather than by the picture, and the following derivation is ours: the set $\mathbb{R}^{3}$ minus the $z$-axis *is* the product $(\mathbb{R}^{2} \setminus \{0\}) \times \mathbb{R}$, whose product topology is the Euclidean one because the open boxes are a basis for both, so item 5 computes its fundamental group at any base point as $\pi_1(\mathbb{R}^{2} \setminus \{0\}) \times \pi_1(\mathbb{R}) \cong \mathbb{Z} \times \{1\} \cong \mathbb{Z}$, using item 6 for the first factor and item 3 for the second ($\mathbb{R}$ is convex and nonempty). The group is nontrivial, so a loop encircling the axis indeed cannot be contracted. Riley, Hobson and Bence give the pair of cases that makes the point sharpest, on p. 384: the *solid* torus is not simply connected, because a closed curve running round inside it cannot be shrunk to a point without leaving it, whereas the open shell lying between a pair of concentric spheres of unequal radii does satisfy the condition, even though it looks like a solid with a cavity inside it. Decide by the definition, not the picture.

A trivial fundamental group also constrains loops only, and nothing more: $S^{2}$ and $\mathbb{R}^{2}$ are both simply connected and are not homeomorphic, one being compact and the other not.
:::

:::remark[Conventions that differ between books]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.2, Def 1 and the warning that follows it, p. 139, with Ch. 8, §1.6, p. 297; docarmo-2016:§5-6, Def 3, p. 388; rhb-2006:§11.2, pp. 383-384; lee-2013:Appendix A, p. 613"}
- **The homotopy definition (used here).** Lee (p. 613): path-connected with trivial fundamental group. This is the definition that works in every topological space and in every dimension.
- **Ahlfors's definition, for plane regions only.** Ahlfors (p. 139) calls a region $\Omega \subseteq \mathbb{C}$ simply connected when the set $(\mathbb{C} \cup \{\infty\}) \setminus \Omega$, that is the complement formed inside the *extended* plane, is a connected set. He attaches a warning on the same page: most books define the term differently, and his version has no analogue above two real dimensions. His reason for adopting it is speed of access to Cauchy's theorem, and by p. 297 he has assembled the equivalence, for a plane region, of three conditions - extended-plane complement connected, homeomorphic to a disk, fundamental group trivial. Taking the complement in the *extended* plane is essential: a parallel strip has disconnected complement within the finite plane, connected complement within the extended plane, and is simply connected.
- **do Carmo's definition, for subsets of $\mathbb{R}^{3}$.** do Carmo (p. 388) calls an arcwise connected $B \subseteq \mathbb{R}^{3}$ simply connected when any two arcs in $B$ with the same endpoints are homotopic in $B$, and notes that this is equivalent to every closed arc being homotopic to a constant arc. This is the second of our two equivalent forms, carrying the same connectivity hypothesis (his *arcwise connected*) and restricted to subsets of $\mathbb{R}^{3}$.
- **The physicists' formulation.** Riley, Hobson and Bence (p. 383) say a plane region is simply connected when every *simple* closed curve in it can be shrunk continuously to a point without leaving the region, and call a region with $n - 1$ holes **$n$-fold connected** (**doubly connected** for one hole, **triply connected** for two), counting the parts of its boundary. That count is a planar notion with no direct analogue in three dimensions; what carries over, as they say on p. 384, is the shrinking criterion, applied to curves lying in the surface or volume concerned.
- **"Region" and "domain".** Ahlfors (p. 57) reserves *region* for a nonempty connected open set and *closed region* for the closure of one; much of the applied literature writes *domain* for the same thing, and some texts use "region" for any set on which a field is defined. Read the definition before relying on connectedness being implied.
:::

:::example[Two three-dimensional regions decided by the definition]{provenance=original}
Write $\rho = \sqrt{x^{2} + y^{2}}$ for the distance from the $z$-axis. The two regions below are the ones the remark on "no holes" discusses; here they are settled by the statements above rather than by the picture.

**1. The solid torus is not simply connected.** Let

$$
T = \bigl\{ (x, y, z) \in \mathbb{R}^{3} : (\rho - 2)^{2} + z^{2} < 1 \bigr\} .
$$

On $T$ we have $(\rho - 2)^{2} < 1$, hence $1 < \rho < 3$; in particular $\rho$ never vanishes, so

$$
r(x, y, z) = \frac{(x, y)}{\rho} \in S^{1}
$$

is defined and continuous on $T$. Let $\iota : S^{1} \to T$ be $\iota(u, v) = (2u, 2v, 0)$, which lands in $T$ because there $\rho = 2$ and $z = 0$, giving $(2 - 2)^{2} + 0^{2} = 0 < 1$.

*The composites.* $r(\iota(u, v)) = (2u, 2v)/2 = (u, v)$, so $r \circ \iota = \mathrm{id}_{S^{1}}$. In the other order, define

$$
H\bigl((x, y, z), t\bigr) = \Bigl( \bigl[(1 - t)\rho + 2t\bigr]\frac{(x, y)}{\rho},\; (1 - t) z \Bigr) .
$$

This is continuous on $T \times I$ because $\rho > 1$ there, and $H(\,\cdot\,, 0)$ is the identity while $H(\,\cdot\,, 1) = \iota \circ r$. It stays inside $T$: the deformed point has distance $\rho_t = (1 - t)\rho + 2t$ from the axis and height $z_t = (1 - t)z$, so $\rho_t - 2 = (1 - t)(\rho - 2)$ and

$$
(\rho_t - 2)^{2} + z_t^{2} = (1 - t)^{2}\bigl[(\rho - 2)^{2} + z^{2}\bigr] < 1 .
$$

*Conclusion.* $\iota$ is a homotopy equivalence with homotopy inverse $r$. Before writing $\pi_1(T)$ without a base point we must know $T$ is path-connected, and it is: $S^{1}$ is path-connected (proof item 6 above, $S^{1}$ being the image of the once-round loop), and path-connectedness transfers across a homotopy equivalence by the same proof item 2 that is used next. So item 2 gives $\pi_1(T) \cong \pi_1(S^{1})$, which by item 4 is infinite cyclic and in particular not trivial. Simple connectivity requires a trivial fundamental group, so $T$ fails it - and the failure is not for want of path-connectedness, which $T$ has.

*Arithmetic check.* The point $p = (2.5, 0, 0.3)$ has $\rho = 2.5$ and $(\rho - 2)^{2} + z^{2} = 0.25 + 0.09 = 0.34 < 1$, so $p \in T$. At $t = 1/2$ the homotopy sends it to $(2.25, 0, 0.15)$, for which $(0.25)^{2} + (0.15)^{2} = 0.085$; and $0.085 = 0.34 \times (1/2)^{2}$, exactly the factor $(1 - t)^{2}$ predicted above.

**2. The shell between two spheres is simply connected.** Let $A = \{x \in \mathbb{R}^{3} : 1 < |x| < 2\}$, let $r(x) = x/|x| \in S^{2}$ and let $\iota(u) = \tfrac{3}{2} u$, which lands in $A$ because $|\tfrac{3}{2}u| = 1.5$. Again $r \circ \iota = \mathrm{id}_{S^{2}}$, and

$$
H(x, t) = \Bigl[ (1 - t)|x| + \tfrac{3}{2} t \Bigr] \frac{x}{|x|}
$$

is continuous on $A \times I$, interpolates between the identity and $\iota \circ r$, and stays in $A$ because its radial coordinate is a convex combination of $|x| \in (1, 2)$ and $\tfrac{3}{2} \in (1, 2)$. So $A$ is homotopy equivalent to $S^{2}$ and $\pi_1(A) \cong \pi_1(S^{2})$, trivial by item 4 since $2 > 1$; the base-point-free notation is licensed by the path-connectedness established in the next paragraph.

*Path-connectedness, which the definition also demands.* Given $x, y \in A$, push each radially to radius $\tfrac{3}{2}$ along the path above with $t$ as parameter, and then join the two points $u, v$ of the sphere of radius $\tfrac{3}{2}$: for $u \neq -v$ the path $s \mapsto \tfrac{3}{2}\,w(s)/|w(s)|$ with $w(s) = (1 - s)u + sv$ is defined, since $w(s) = 0$ would force $u$ and $v$ to be opposite multiples of one vector, hence antipodal; and when $v = -u$ one inserts a third point of the sphere and concatenates. So $A$ is path-connected, and with the trivial fundamental group it is simply connected.

*Arithmetic check.* $x = (0.3, 0.4, 1.2)$ has $|x|^{2} = 0.09 + 0.16 + 1.44 = 1.69$, so $|x| = 1.3 \in (1, 2)$ and $x \in A$; along the homotopy its radius is $1.3 + 0.2\,t$, which runs from $1.3$ to $1.5$ and never leaves $(1, 2)$.

A region may therefore enclose a cavity and still be simply connected, while a solid ring cannot be: the shell's cavity is an obstacle that loops can slide around, and the ring's hole is not.
:::

:::application{provenance=original}
**The field outside a current-carrying wire.** For a steady current $I$ along the $z$-axis, the magnetostatic field in the region outside the wire is $\mathbf{B} = \mu_0 I/(2\pi\rho)\,\mathbf{e}_\varphi$, and there the current density vanishes, so $\nabla \times \mathbf{B} = \mathbf{0}$. Nevertheless Ampere's law gives $\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I \neq 0$ for a loop encircling the wire, so $\mathbf{B}$ is not the gradient of any single-valued function on that region. There is no contradiction with the potential theorems, because the region is $\mathbb{R}^{3}$ with a line removed, which the remark on "no holes" above computes to have fundamental group $\mathbb{Z}$ at every base point, generated by the class of a loop once round the wire: the hypothesis of simple connectivity fails, and the nonzero circulation is the measure of how it fails. The same loop class is what makes the Aharonov-Bohm phase physical: the electron picks up $(e/\hbar)\oint \mathbf{A} \cdot d\mathbf{l}$, which is determined by the enclosed flux and is independent of the loop within its path class, even though the field vanishes along the whole path. See :ref[Line integrals and conservative fields]{to=vcalc.line-integrals} and :ref[Helmholtz decomposition and potentials]{to=vcalc.helmholtz-decomposition}.

**Line defects in ordered media are classified by path classes.** An ordered medium assigns to each point of the sample a value in an order-parameter space $M$, and a line defect is detected by restricting the assignment to a small loop encircling the line, which gives an element of $\pi_1(M)$ that cannot change under continuous deformation of the loop. For superfluid helium-4 the order parameter is a phase, $M = S^{1}$, so $\pi_1(M) \cong \mathbb{Z}$ and vortices carry an integer circulation that can only be changed by moving a defect through the loop. For a uniaxial nematic liquid crystal, where the states $\mathbf{n}$ and $-\mathbf{n}$ are physically identical, $M$ is the projective plane and its fundamental group has two elements, so there is exactly one nontrivial class of line defect and two such disclinations can annihilate. The experimental taxonomy of defects is in this sense a fundamental-group computation.

**Where a potential or a branch has to be cut.** Simple connectivity is the licence to integrate a closed field or an analytic function to a single-valued function; on a region without it, one either accepts a multivalued potential or cuts the region until it is simply connected. That is why the magnetic scalar potential of a current loop jumps across a chosen surface spanning the loop, and why $\log z$ and $\sqrt{z}$ on $\mathbb{C} \setminus \{0\}$ - a region with $\pi_1 \cong \mathbb{Z}$ by item 6 - are made single-valued by a branch cut that removes the offending loops. See :ref[Branch points and branch cuts]{to=complex.branch-points-cuts} and :ref[Stokes' theorem and Green's theorem in the plane]{to=vcalc.stokes-theorem}.
:::
