---
id: found.compactness
title: Compactness
kind: theorem
level: core
summary: Gives compactness by finite subcovers with its permanence properties, the three equivalent forms it takes in a metric space, the Heine-Borel characterisation of the compact subsets of R^n as exactly the closed bounded ones, Bolzano-Weierstrass, and the extreme value theorem for a continuous real function on a nonempty compact space.
prereqs: [found.continuity-homeomorphism, found.limits-of-sequences]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§0.6, Thm 0.25 and Prop 0.26, pp. 15-16; §4.4, pp. 128-130 (definition by open covers, Prop 4.21, Props 4.22-4.28, countable and sequential compactness)"
    pages: "15-16, 128-130"
    role: definition of compactness by finite subcovers and for subsets; the finite intersection property; closed subsets of compact spaces, compact subsets of Hausdorff spaces, continuous images; the equivalence of complete-and-totally-bounded, Bolzano-Weierstrass and Heine-Borel in a metric space, with the proof route for that equivalence; closed bounded subsets of R^n are compact, with the cube-subdivision proof; compactness and sequential compactness are unrelated in general
  - work: lee-2013
    loc: "Appendix A, 'Connectedness and Compactness', pp. 608-610 (Prop A.45, Prop A.48(a), Prop A.50, Lemma A.52)"
    pages: "608-610"
    role: permanence properties of compact spaces; boundedness of compact subsets of a metric space; the extreme value statement; equivalence of compactness, limit-point compactness and sequential compactness for metric and for second-countable Hausdorff spaces; continuous maps restricted to compact sets are uniformly continuous; the closed map lemma
  - work: kreyszig-1978
    loc: "§2.4, Lemma 2.4-1, pp. 72-73; §2.5, Def 2.5-1, Lemma 2.5-2 and Thm 2.5-3, pp. 77-78"
    pages: "72-73, 77-78"
    role: compactness defined sequentially for metric spaces; compact implies closed and bounded; the standard counterexample in the sequence space showing the converse fails; the converse holds in a finite-dimensional normed space, and the two-sided bound on a linear combination that makes the coordinate map bi-Lipschitz
---

:::note{provenance=original}
**What it means.** Compactness is the licence to replace infinitely many local facts by finitely many. Almost every existence theorem in analysis that produces a point - a maximiser, a limit, a convergent subsequence - gets that point from compactness. In $\mathbb{R}^{n}$ it is the familiar "closed and bounded", which is why calculus can be done without the word; the content of Heine-Borel is that this familiar test is *exactly* compactness, and the content of the counterexamples below is that it stops being the right test as soon as the dimension is infinite.
:::

:::definition[Covers, compactness, sequential compactness]{provenance=adapted src="folland-1999:§4.4, p. 128, §0.6, p. 15, and §4.4, p. 130; lee-2013:Appendix A, p. 608"}
Fix a topological space $X$ with topology $\mathcal{T}$, and let $K \subseteq X$.

**Covers.** A family $\mathcal{U}$ of subsets of $X$ *covers* $K$ when $K \subseteq \bigcup_{U \in \mathcal{U}} U$; it is an *open* cover when additionally $\mathcal{U} \subseteq \mathcal{T}$. A *subcover* is a subfamily of $\mathcal{U}$ that still covers $K$.

**Compact.** Call $K$ **compact** when from each open cover $\mathcal{U}$ of $K$ one may select finitely many members $U_1, \dots, U_m \in \mathcal{U}$ with

$$
K \subseteq U_1 \cup \dots \cup U_m .
$$

Taking $K = X$ gives the notion for a space, and the two readings agree: $K$ is compact as a subset of $X$ exactly when $K$, equipped with its subspace topology, is a compact space. Compactness of $K$ therefore does not depend on which ambient space $K$ is viewed inside.

**Precompact.** $K$ is **precompact** in $X$ when $\overline{K}$ is compact.

**Sequentially compact.** $X$ is **sequentially compact** when each sequence $\{x_i\}$ in $X$ admits a subsequence $\{x_{i_k}\}$ and a point $x \in X$ with $x_{i_k} \to x$.

**Totally bounded.** In a metric space $(M, d)$, call $E \subseteq M$ **totally bounded** when, for each $\varepsilon > 0$, there are finitely many points $z_1, \dots, z_n \in M$ with

$$
E \subseteq B_\varepsilon(z_1) \cup \dots \cup B_\varepsilon(z_n) .
$$

Total boundedness is strictly stronger than boundedness.
:::

:::statement[Compactness read off the closed sets]{provenance=adapted src="folland-1999:§4.4, Prop 4.21, p. 128"}
Say that a family $\{F_\alpha\}_{\alpha \in A}$ of sets has the **finite intersection property** when no finite subfamily of it meets in the empty set:

$$
\bigcap_{\alpha \in B} F_\alpha \neq \emptyset \qquad \text{for each finite } B \subseteq A .
$$

A space $X$ is then compact exactly when each family of *closed* subsets of $X$ with the finite intersection property satisfies $\bigcap_{\alpha \in A} F_\alpha \neq \emptyset$.
:::

:::idea{provenance=original}
A family of open sets and a family of closed sets are the same data read through complements, and complementation exchanges "their union is everything" with "their intersection is empty". The two conditions are therefore the same condition about that data, stated once positively and once negatively; nothing beyond this bookkeeping is involved.
:::

:::proof{provenance=adapted src="folland-1999:§4.4, Prop 4.21, p. 128"}
Given closed sets $F_\alpha \subseteq X$ for $\alpha \in A$, put $U_\alpha = X \setminus F_\alpha$, which is open; every family of open sets arises from a family of closed sets in this way. One translation does all the work, and it holds for every subset $B \subseteq A$, finite or not: the family $\{U_\alpha\}_{\alpha \in B}$ covers $X$ exactly when $\bigcap_{\alpha \in B} F_\alpha = \emptyset$, since a point belonging to no $U_\alpha$ with $\alpha \in B$ is precisely a point belonging to every $F_\alpha$ with $\alpha \in B$.

**Compact $\Rightarrow$ the closed-set condition.** Let $X$ be compact and let $\{F_\alpha\}_{\alpha \in A}$ be closed with the finite intersection property. If $\bigcap_{\alpha \in A} F_\alpha$ were empty, the translation with $B = A$ would make $\{U_\alpha\}_{\alpha \in A}$ an open cover of $X$; compactness would give a finite $B \subseteq A$ with $\{U_\alpha\}_{\alpha \in B}$ still covering, and the translation read backwards would give $\bigcap_{\alpha \in B} F_\alpha = \emptyset$, contradicting the finite intersection property. So the intersection over all of $A$ is nonempty.

**The closed-set condition $\Rightarrow$ compact.** Assume the condition and let $\{U_\alpha\}_{\alpha \in A}$ be an open cover of $X$. With $F_\alpha = X \setminus U_\alpha$, the translation gives $\bigcap_{\alpha \in A} F_\alpha = \emptyset$. The family $\{F_\alpha\}$ is closed, so by the assumed condition it cannot have the finite intersection property: some finite $B \subseteq A$ has $\bigcap_{\alpha \in B} F_\alpha = \emptyset$, which says that $\{U_\alpha\}_{\alpha \in B}$ covers $X$. That is a finite subcover. $\square$
:::

:::statement[Permanence properties]{provenance=adapted src="lee-2013:Appendix A, Prop A.45(a), (c), (e), (f), (g), pp. 608-609; folland-1999:§4.4, Props 4.22, 4.24, 4.26, pp. 128-129"}
Throughout, $X$ and $Y$ carry topologies and $f : X \to Y$ is continuous.

1. **Images.** If $X$ is compact then so is $f(X)$. In particular a homeomorphism carries compact spaces to compact spaces, so compactness is a topological property.
2. **Closed subspaces.** If $X$ is compact and $F \subseteq X$ is closed, then $F$ is compact.
3. **Hausdorff reverses this.** If $Y$ is Hausdorff and $K \subseteq Y$ is compact, then $K$ is closed in $Y$.
4. **Finite unions.** If $K_1, \dots, K_m \subseteq X$ are compact, so is $K_1 \cup \dots \cup K_m$.
5. **Metric ambient space.** A compact subset of a metric space is bounded. A metric space is Hausdorff, so by item 3 such a subset is closed as well: in a metric space, compactness implies closed and bounded.
:::

:::idea{provenance=original}
Each item is one use of the definition. For images, pull the cover back through $f$; for a closed subspace, enlarge the cover by the complement of the subspace and then discard it again; for finite unions, pool the finite subcovers. The Hausdorff item is the only one with any content: separate the outside point from each point of the compact set, cover the set by finitely many of the resulting neighbourhoods, and intersect the finitely many companions to get one neighbourhood of the outside point that misses the set. Boundedness comes from covering by concentric balls of growing radius.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Prop A.45 and Exercise A.46, pp. 608-609; folland-1999:§4.4, Props 4.22, 4.24 and 4.26, pp. 128-129"}
1. **Images.** Let $\mathcal{V}$ be a cover of $f(X)$ by sets open in $Y$. Each $f^{-1}(V)$, $V \in \mathcal{V}$, is open by continuity, and these sets cover $X$ because every $f(x)$ lies in some $V$. Compactness of $X$ gives $V_1, \dots, V_m \in \mathcal{V}$ with $X = f^{-1}(V_1) \cup \dots \cup f^{-1}(V_m)$; applying $f$ to both sides gives $f(X) \subseteq V_1 \cup \dots \cup V_m$. Specialising to a homeomorphism and to its inverse shows that $X$ is compact if and only if its homeomorphic image is, so compactness is a topological property.

2. **Closed subspaces.** Let $F \subseteq X$ be closed and let $\mathcal{U}$ be a cover of $F$ by sets open in $X$. Then $\mathcal{U} \cup \{X \setminus F\}$ is an open cover of $X$, since the extra set catches everything outside $F$. Compactness of $X$ gives a finite subcover; deleting $X \setminus F$ from it leaves finitely many members of $\mathcal{U}$, and they still cover $F$, because a point of $F$ lies in one of the finitely many chosen sets and is not in $X \setminus F$.

3. **Hausdorff reverses this.** Let $K \subseteq Y$ be compact, with $Y$ Hausdorff, and let $y \in Y \setminus K$. For each $x \in K$ the Hausdorff property gives disjoint open sets $U_x \ni x$ and $V_x \ni y$. The family $\{U_x\}_{x \in K}$ covers $K$, so finitely many suffice: $K \subseteq U_{x_1} \cup \dots \cup U_{x_m}$. Then $V = V_{x_1} \cap \dots \cap V_{x_m}$ is open, being a finite intersection, contains $y$, and is disjoint from each $U_{x_i}$, hence from $K$. So every point of $Y \setminus K$ has a neighbourhood inside $Y \setminus K$, that set is open, and $K$ is closed. (For $K = \emptyset$ there is nothing to prove.)

4. **Finite unions.** An open cover of $K_1 \cup \dots \cup K_m$ covers each $K_j$, so it has a finite subfamily covering $K_j$; the union of those $m$ finite subfamilies is finite and covers the union.

5. **Metric ambient space.** Let $K$ be a nonempty compact subset of a metric space $(M, d)$ and fix $z \in M$. The balls $B_i(z)$, $i \in \mathbb{N}$, are open and their union is $M \supseteq K$, so finitely many of them cover $K$; since they increase with $i$, the largest one alone covers $K$, say $K \subseteq B_N(z)$. Then $d(x, y) \le d(x, z) + d(z, y) < 2N$ for $x, y \in K$, so $\operatorname{diam} K \le 2N$ and $K$ is bounded; the empty set is bounded outright. A metric space is Hausdorff - distinct points $x \neq y$ are separated by the balls of radius $d(x, y)/2$ about them - so item 3 applies and $K$ is also closed. $\square$
:::

:::statement[Three equivalent forms in a metric space]{provenance=adapted src="folland-1999:§0.6, Thm 0.25, pp. 15-16"}
Work inside a metric space $(X, \rho)$ and let $E \subseteq X$. The following three conditions on $E$ are equivalent.

1. (**Heine-Borel property**) Each cover of $E$ by sets open in $X$ admits a finite subcover; that is, $E$ is compact.
2. (**Bolzano-Weierstrass property**) Each sequence drawn from $E$ has a subsequence whose limit exists and lies in $E$; that is, $E$ is sequentially compact.
3. $E$ is totally bounded, and $E$ with the restricted metric is complete.

For subsets of a metric space, then, compactness and sequential compactness are one condition, and either amounts to total boundedness plus completeness.
:::

:::idea{provenance=original}
Three implications close the circle. A sequence with no subsequence converging in $E$ gives every point of $E$ a ball holding only finitely many of its terms, and those balls cover $E$ with no finite subcover: that is 1 $\Rightarrow$ 2. Condition 2 forces completeness, because a Cauchy sequence with one convergent subsequence converges, and forces total boundedness, because otherwise one can go on choosing points a fixed distance apart for ever. Going back, halving the radius again and again pins an infinite set of indices into balls of shrinking size, which makes a subsequence Cauchy and completeness then supplies its limit; and once 2 and 3 are available, one shows that some single radius is small enough that every ball of that radius meeting $E$ is swallowed by one member of the cover, after which total boundedness finishes the job with finitely many balls.
:::

:::proof{provenance=adapted src="folland-1999:§0.6, Thm 0.25, pp. 15-16"}
Throughout, convergence, Cauchy sequences and completeness are as in :ref[Limits of sequences and completeness]{to=found.limits-of-sequences}, with the metric $\rho$ restricted to $E$. We prove $1 \Rightarrow 2$, $2 \Rightarrow 3$, $3 \Rightarrow 2$, and then $2$ together with $3$ gives $1$.

**$1 \Rightarrow 2$.** Suppose $E$ is compact and let $\{x_n\}$ be a sequence in $E$ with no subsequence converging to a point of $E$; we derive a contradiction. Fix $y \in E$. There must be $r_y > 0$ such that $x_n \in B_{r_y}(y)$ for only finitely many indices $n$: otherwise every ball about $y$ would contain $x_n$ for infinitely many $n$, and choosing $n_1 < n_2 < \dots$ with $\rho(x_{n_k}, y) < 1/k$ would produce a subsequence converging to $y \in E$. The balls $B_{r_y}(y)$, $y \in E$, are open and cover $E$, so compactness gives $y_1, \dots, y_m \in E$ with $E \subseteq B_{r_{y_1}}(y_1) \cup \dots \cup B_{r_{y_m}}(y_m)$. Every term of the sequence lies in $E$, hence in one of these $m$ balls, and each ball accounts for finitely many indices; so the index set $\mathbb{N}$ would be finite, which it is not.

**$2 \Rightarrow 3$, completeness.** Let $\{x_n\}$ be a Cauchy sequence in $E$. By 2 some subsequence converges to a point $x \in E$. Let $\varepsilon > 0$ and choose $N$ with $\rho(x_n, x_m) < \varepsilon/2$ for all $n, m \ge N$; choose also a subsequence index $n_k \ge N$ with $\rho(x_{n_k}, x) < \varepsilon/2$. Then $\rho(x_n, x) \le \rho(x_n, x_{n_k}) + \rho(x_{n_k}, x) < \varepsilon$ for every $n \ge N$. So the whole sequence converges to $x \in E$, and $E$ is complete.

**$2 \Rightarrow 3$, total boundedness.** The empty set is totally bounded, so take $E \neq \emptyset$ and suppose some $\varepsilon > 0$ admits no finite cover of $E$ by $\varepsilon$-balls. Pick $x_1 \in E$; having picked $x_1, \dots, x_n$, the balls $B_\varepsilon(x_1), \dots, B_\varepsilon(x_n)$ fail to cover $E$, so there is $x_{n+1} \in E$ outside all of them, which means $\rho(x_{n+1}, x_i) \ge \varepsilon$ for $i \le n$. The sequence so constructed has $\rho(x_n, x_m) \ge \varepsilon$ whenever $n \neq m$, so no subsequence of it is Cauchy and therefore none converges, contradicting 2.

**$3 \Rightarrow 2$.** Let $\{x_n\}$ be a sequence in $E$ and set $N_0 = \mathbb{N}$. Suppose an infinite set of indices $N_{j-1}$ has been found. By total boundedness, $E$ lies in a union of finitely many balls of radius $2^{-j}$; the infinitely many indices of $N_{j-1}$ are shared out among finitely many of these balls, so one of them, call it $B_j$, has $x_n \in B_j$ for infinitely many $n \in N_{j-1}$. Let $N_j = \{n \in N_{j-1} : x_n \in B_j\}$, again infinite. Because each $N_j$ is infinite and contained in its predecessor, indices $n_1 < n_2 < \dots$ with $n_j \in N_j$ can be chosen one after another. For $k \ge j$ both $x_{n_j}$ and $x_{n_k}$ lie in $B_j$, a ball of radius $2^{-j}$, so $\rho(x_{n_j}, x_{n_k}) < 2^{1-j}$; hence $\{x_{n_k}\}$ is Cauchy, and completeness of $E$ gives it a limit in $E$.

**$2$ and $3$ give $1$: one radius fits the whole cover.** Let $\mathcal{U}$ be a cover of $E$ by sets open in $X$. We claim there is $\varepsilon > 0$ such that every ball of radius $\varepsilon$ meeting $E$ lies inside some member of $\mathcal{U}$. If not, then for each $n$ there is a ball $D_n$ of radius $1/n$ with $D_n \cap E \neq \emptyset$ and $D_n$ inside no member of $\mathcal{U}$. Pick $x_n \in D_n \cap E$. By 2 a subsequence converges, $x_{n_k} \to x \in E$. Some $U \in \mathcal{U}$ contains $x$, and $U$ is open, so $B_r(x) \subseteq U$ for some $r > 0$. Choose $k$ with $\rho(x_{n_k}, x) < r/2$ and $1/n_k < r/4$. Any $y \in D_{n_k}$ satisfies $\rho(y, x_{n_k}) < 2/n_k < r/2$, both points lying in a ball of radius $1/n_k$, so $\rho(y, x) < r$. Thus $D_{n_k} \subseteq B_r(x) \subseteq U$, contradicting the choice of $D_{n_k}$.

**$2$ and $3$ give $1$: finishing.** With such an $\varepsilon$, total boundedness provides $z_1, \dots, z_p$ with $E \subseteq B_\varepsilon(z_1) \cup \dots \cup B_\varepsilon(z_p)$. Discard those balls that miss $E$; they cover none of it. Each remaining $B_\varepsilon(z_j)$ meets $E$ and has radius $\varepsilon$, so it lies in some $U_j \in \mathcal{U}$. Then $E \subseteq U_1 \cup \dots \cup U_q$ with $q \le p$, a finite subcover. $\square$
:::

:::statement[Heine-Borel in R^n, and where it stops]{provenance=adapted src="folland-1999:§0.6, Prop 0.26 and the paragraph before it, p. 16; kreyszig-1978:§2.5, Lemma 2.5-2 and Thm 2.5-3, pp. 77-78"}
1. Each closed bounded subset of $\mathbb{R}^{n}$ is compact. Together with item 5 of the permanence properties: a set $K \subseteq \mathbb{R}^{n}$ is compact precisely when it is both closed and bounded.
2. The same holds in any finite-dimensional **normed space** $X$ - a real or complex vector space with a norm $\|\cdot\|$, read as a metric space under $d(x, y) = \|x - y\|$: a subset $M \subseteq X$ is compact precisely when $M$ is closed and bounded.
3. Drop finite-dimensionality and this breaks. Let

$$
\ell^{2} = \Bigl\{ x = (x_1, x_2, \dots) : x_j \in \mathbb{C}, \ \sum_{j=1}^{\infty} |x_j|^{2} < \infty \Bigr\},
\qquad
\|x\| = \Bigl(\sum_{j=1}^{\infty} |x_j|^{2}\Bigr)^{1/2} ,
$$

and let $e_n \in \ell^{2}$ carry $1$ in slot $n$ and $0$ elsewhere. Since $\|e_n\| = 1$, the set $S = \{e_n : n \in \mathbb{N}\}$ is bounded. Since $\|e_n - e_m\| = \sqrt{2}$ whenever $n \neq m$, no point of $\ell^{2}$ accumulates $S$, so $S$ is closed; and no subsequence of $(e_n)$ can converge, so $S$ is not compact.
:::

:::idea{provenance=original}
Everything is already proved; what remains is to put the pieces in order. A bounded set in $\mathbb{R}^{n}$ sits inside a cube, and a cube is chopped into finitely many small cubes whose centres form a finite net of any prescribed fineness, so bounded means totally bounded here; closed means complete, because $\mathbb{R}^{n}$ is complete coordinate by coordinate. The three-way equivalence then delivers compactness. For a finite-dimensional normed space, a basis gives a bijection with $\mathbb{F}^{n}$ that distorts distances by at most a fixed factor each way - the lower factor being where compactness of a sphere in $\mathbb{F}^{n}$ is spent - so closed bounded sets correspond to closed bounded sets and compactness transfers.
:::

:::proof{provenance=adapted src="folland-1999:§0.6, Prop 0.26, p. 16; kreyszig-1978:§2.4, Lemma 2.4-1, pp. 72-73, and §2.5, Thm 2.5-3, p. 78"}
**Part 1: $\mathbb{R}^{n}$ is complete.** Let $\{x^{(m)}\}$ be Cauchy in $\mathbb{R}^{n}$. For each coordinate $j$, $|x^{(m)}_j - x^{(l)}_j| \le |x^{(m)} - x^{(l)}|$, so the $j$-th coordinates form a Cauchy sequence in $\mathbb{R}$ and converge to some $a_j$, by the Cauchy criterion of :ref[Limits of sequences and completeness]{to=found.limits-of-sequences}. With $a = (a_1, \dots, a_n)$ we get $|x^{(m)} - a|^{2} = \sum_{j=1}^{n} |x^{(m)}_j - a_j|^{2} \to 0$, a finite sum of null sequences. So the sequence converges in $\mathbb{R}^{n}$.

**Part 1: closed and bounded implies the third condition.** Let $K \subseteq \mathbb{R}^{n}$ be closed and bounded. A Cauchy sequence in $K$ converges in $\mathbb{R}^{n}$ by the previous paragraph, and its limit lies in $K$ because $K$ is closed; so $K$ with the restricted metric is complete. For total boundedness, boundedness puts $K$ inside a cube $Q = [-R, R]^{n}$. Given $\varepsilon > 0$, pick an integer $k > R\sqrt{n}/\varepsilon$ and cut each edge of $Q$ into $k$ equal parts, which splits $Q$ into $k^{n}$ closed subcubes of side $2R/k$. A point of such a subcube is at distance at most half its diagonal, $\sqrt{n}\,R/k < \varepsilon$, from its centre, so each subcube lies in the $\varepsilon$-ball about its own centre. The $k^{n}$ centres therefore form a finite $\varepsilon$-net for $Q$, hence for $K$. By the implication $3 \Rightarrow 1$ of the previous statement, $K$ is compact. With item 5 of the permanence properties, which gives the converse, compactness in $\mathbb{R}^{n}$ is exactly closedness together with boundedness.

**Part 2: the coordinate map and its upper bound.** Let $X$ be a normed space over $\mathbb{F} \in \{\mathbb{R}, \mathbb{C}\}$ with $\dim X = n \ge 1$ and basis $e_1, \dots, e_n$ (the case $X = \{0\}$ is trivial). Define $T : \mathbb{F}^{n} \to X$ by $T\alpha = \sum_{j=1}^{n} \alpha_j e_j$, a bijection because the $e_j$ form a basis. Regard $\mathbb{F}^{n}$ as $\mathbb{R}^{n}$ or $\mathbb{R}^{2n}$ with the Euclidean metric, which is the metric of $|\alpha|_2 = (\sum_j |\alpha_j|^{2})^{1/2}$, and write $|\alpha|_1 = \sum_j |\alpha_j|$; the two satisfy $|\alpha|_2 \le |\alpha|_1 \le \sqrt{n}\,|\alpha|_2$. The triangle inequality and homogeneity of the norm give

$$
\|T\alpha\| \le \sum_{j=1}^{n} |\alpha_j| \, \|e_j\| \le C \, |\alpha|_1, \qquad C = \max_j \|e_j\| ,
$$

so $\|T\alpha - T\beta\| = \|T(\alpha - \beta)\| \le C |\alpha - \beta|_1 \le C\sqrt{n}\,|\alpha - \beta|_2$ and $T$ is continuous.

**Part 2: the lower bound.** Let $S = \{\alpha \in \mathbb{F}^{n} : |\alpha|_1 = 1\}$. The function $\alpha \mapsto |\alpha|_1$ is continuous, since $\bigl| |\alpha|_1 - |\beta|_1 \bigr| \le |\alpha - \beta|_1 \le \sqrt{n}\,|\alpha - \beta|_2$, so $S$ is closed as the inverse image of the closed set $\{1\}$; and $S$ is bounded because $|\alpha|_2 \le |\alpha|_1 = 1$ on it. By part 1, $S$ is compact, and it is nonempty, containing $(1, 0, \dots, 0)$. The function $\alpha \mapsto \|T\alpha\|$ is continuous by the previous paragraph, so by the extreme value theorem - item 1 of the next statement, whose proof uses only items 1 and 5 of the permanence properties and therefore does not depend on the present one - it attains a least value $c = \|T\alpha^{*}\|$ on $S$. Since $|\alpha^{*}|_1 = 1$, $\alpha^{*} \neq 0$, so $T\alpha^{*} \neq 0$ by linear independence of the $e_j$, and $c > 0$. Homogeneity extends the bound off $S$: $\|T\alpha\| \ge c\,|\alpha|_1$ holds for $\alpha = 0$ trivially and for $\alpha \neq 0$ by applying the bound at $S$ to $\alpha/|\alpha|_1$.

**Part 2: conclusion.** Let $M \subseteq X$ be closed and bounded, and put $A = T^{-1}(M)$, the inverse image of $M$ under the continuous map $T$, which is therefore closed in $\mathbb{F}^{n}$. It is bounded: a nonempty bounded $M$ lies inside $\{x : \|x\| \le B\}$ with $B = \|m_0\| + \operatorname{diam} M$ for any $m_0 \in M$, so $\alpha \in A$ gives $|\alpha|_1 \le \|T\alpha\|/c \le B/c$ by the lower bound, and $|\alpha|_2 \le |\alpha|_1$. (An empty $M$ is compact outright.) By part 1, $A$ is compact, so $M = T(A)$ is compact by item 1 of the permanence properties. Conversely a compact $M$ is closed and bounded by item 5 of those properties, $X$ being a metric space under $d(x, y) = \|x - y\|$.

**Part 3: the set $S = \{e_n\}$ in $\ell^{2}$.** It is bounded, since $\|e_n\| = 1$ puts it inside the ball of radius $2$ about $0$. It is closed: any two distinct members are at distance $\|e_n - e_m\| = \sqrt{2}$, so a ball of radius $\sqrt{2}/2$ contains at most one member of $S$. No $x \in \ell^{2}$ is therefore an accumulation point of $S$: if $B_{\sqrt{2}/2}(x)$ contains no member of $S$ we are done; if it contains exactly one member $e_m$ with $e_m \neq x$, then the smaller ball of radius $\min(\sqrt{2}/2, \|x - e_m\|)$ about $x$ contains no member of $S$ at all; and if $e_m = x$, that ball contains no member of $S$ other than $x$ itself. Having no accumulation points, $S$ contains all of them and is closed. It is not compact: $\|e_n - e_m\| = \sqrt{2}$ for $n \neq m$ means no subsequence of $(e_n)$ is Cauchy, hence none converges, so $S$ fails condition 2 of the previous statement and therefore condition 1. $\square$
:::

:::statement[Bolzano-Weierstrass in R^n]{provenance=adapted src="folland-1999:§0.6, Thm 0.25 and Prop 0.26, pp. 15-16"}
Every bounded sequence in $\mathbb{R}^{n}$ possesses a convergent subsequence, its limit being some point of $\mathbb{R}^{n}$. Equally, an infinite bounded set $S \subseteq \mathbb{R}^{n}$ always has at least one point of $\mathbb{R}^{n}$ accumulating it.

Note what is *not* claimed: unless the set the terms come from is closed, the limit need not belong to it.
:::

:::idea{provenance=original}
A bounded sequence lives inside a closed ball, and a closed ball is closed and bounded, hence compact; compact sets in a metric space have the subsequence property, which is the first assertion, and the limit is caught in the ball. For a set instead of a sequence, list infinitely many of its points without repetition and apply the first assertion; it is the absence of repetitions that turns the limit into an accumulation point.
:::

:::proof{provenance=adapted src="folland-1999:§0.6, Thm 0.25 and Prop 0.26, pp. 15-16"}
**The sequence form.** Let $\{x_i\}$ be a bounded sequence in $\mathbb{R}^{n}$, so that $|x_i| \le R$ for all $i$ and some $R > 0$. The closed ball $\overline{B}_R(0) = \{x : |x| \le R\}$ is bounded, and it is closed because the norm is continuous and the ball is the inverse image of the closed half-line $(-\infty, R]$ under it. By part 1 of the Heine-Borel statement it is compact, so by the equivalence of conditions 1 and 2 in a metric space it has the Bolzano-Weierstrass property. The sequence lies in it, so some subsequence converges to a point of that ball, in particular to a point of $\mathbb{R}^{n}$.

**The set form.** Let $S \subseteq \mathbb{R}^{n}$ be bounded and infinite. Being infinite, $S$ admits a sequence $\{x_i\}$ of pairwise distinct members: having chosen $x_1, \dots, x_i$, the set $S$ is not exhausted, so a further member is available. This sequence is bounded, so by the first part a subsequence converges to some $x \in \mathbb{R}^{n}$. Let $U$ be a neighbourhood of $x$. It contains $x_{i_k}$ for all large $k$, and at most one index can have $x_{i_k} = x$ because the terms are pairwise distinct; so $U$ contains a member of $S$ different from $x$. That is exactly the condition for $x$ to be an accumulation point of $S$ in the sense of :ref[Topological and metric spaces]{to=found.topological-spaces}. $\square$
:::

:::statement[What continuity gains on a compact space]{provenance=adapted src="lee-2013:Appendix A, Prop A.45(b), p. 608, Prop A.48(a), p. 609 and Lemma A.52, p. 610; folland-1999:§4.4, Prop 4.28, p. 129"}
1. (**Extreme value theorem**) Let $X$ be compact and nonempty and let $f : X \to \mathbb{R}$ be continuous. Then $f$ is bounded, and there are $p, q \in X$ at which it attains its least and greatest values:

$$
f(p) = \min_{x \in X} f(x), \qquad f(q) = \max_{x \in X} f(x) .
$$

2. (**Uniform continuity on compact sets**) Work with metric spaces $(M_1, d_1)$, $(M_2, d_2)$, a continuous $f : M_1 \to M_2$, and a compact $K \subseteq M_1$. The restriction $f|_K$ is then uniformly continuous: for each $\varepsilon > 0$ a single $\delta > 0$ serves every pair, in the sense that $x, y \in K$ with $d_1(x, y) < \delta$ gives $d_2(f(x), f(y)) < \varepsilon$.
3. (**Closed map lemma**) Suppose $X$ is compact, $Y$ is Hausdorff and $f : X \to Y$ is continuous. Then $f$ takes closed sets to closed sets. Hence an injective such $f$ is a topological embedding, and a bijective one is a homeomorphism.
:::

:::idea{provenance=original}
For the extreme value theorem, push the compactness forward through $f$: the image is a compact subset of $\mathbb{R}$, so it is bounded and closed, and a nonempty closed bounded set of reals contains its own supremum and infimum - which is to say the bounds are values of $f$. Uniform continuity is a matter of replacing infinitely many local radii by finitely many: cover $K$ by balls on which $f$ varies by less than $\varepsilon/2$, keep only finitely many, and take the smallest radius. The closed map lemma is three permanence properties applied in a row.
:::

:::proof{provenance=adapted src="lee-2013:Appendix A, Prop A.45(b), p. 608, Prop A.48(a), p. 609, and Lemma A.52, p. 610"}
1. **Extreme value theorem.** The image $f(X)$ is compact by item 1 of the permanence properties and nonempty because $X$ is. By item 5 of those properties, applied in the metric space $\mathbb{R}$, the set $f(X)$ is bounded and closed; boundedness of $f$ is the first assertion. By the least-upper-bound property of $\mathbb{R}$ (:ref[Limits of sequences and completeness]{to=found.limits-of-sequences}) the number $s = \sup f(X)$ exists. Every interval $(s - \eta, s + \eta)$ meets $f(X)$, since otherwise $s - \eta$ would be a smaller upper bound; so $s$ lies in the closure of $f(X)$, which is $f(X)$ itself. Hence $s = f(q)$ for some $q \in X$, and $f(x) \le s = f(q)$ for every $x$, so the greatest value is attained at $q$. Reading the same argument with the infimum gives the point $p$.

2. **Uniform continuity on compact sets.** Let $\varepsilon > 0$. For each $x \in K$, continuity of $f$ at $x$ in the $\varepsilon$-$\delta$ form provides $r_x > 0$ with

$$
d_1(y, x) < r_x \;\Longrightarrow\; d_2\bigl(f(y), f(x)\bigr) < \varepsilon/2 .
$$

The balls $B_{r_x/2}(x)$, $x \in K$, are open and cover $K$, so compactness of $K$ gives $x_1, \dots, x_m \in K$ with $K \subseteq B_{r_{x_1}/2}(x_1) \cup \dots \cup B_{r_{x_m}/2}(x_m)$. Put $\delta = \min_i r_{x_i}/2$, a minimum of finitely many positive numbers, hence positive - this is the step that fails without compactness.

Now let $x, y \in K$ with $d_1(x, y) < \delta$, and choose $i$ with $x \in B_{r_{x_i}/2}(x_i)$. Then $d_1(x, x_i) < r_{x_i}/2 < r_{x_i}$, and $d_1(y, x_i) \le d_1(y, x) + d_1(x, x_i) < \delta + r_{x_i}/2 \le r_{x_i}$. So the displayed implication applies to both $x$ and $y$, and

$$
d_2\bigl(f(x), f(y)\bigr) \le d_2\bigl(f(x), f(x_i)\bigr) + d_2\bigl(f(x_i), f(y)\bigr) < \varepsilon/2 + \varepsilon/2 = \varepsilon .
$$

The single $\delta$ served every admissible pair, which is uniform continuity of $f|_K$.

3. **Closed map lemma.** Let $K \subseteq X$ be closed. Item 2 of the permanence properties makes $K$ compact, item 1 makes $f(K)$ compact, and item 3, which needs $Y$ Hausdorff, makes $f(K)$ closed in $Y$. So $f$ is a closed map. The two consequences are then the statement on continuous bijections in :ref[Continuity and homeomorphism]{to=found.continuity-homeomorphism}: a continuous closed injection is a topological embedding, and a continuous closed bijection is a homeomorphism. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *"Finite" in the subcover.* Without it the definition is empty, since any cover is a subcover of itself. That the word bites is visible at once: $\mathbb{R} = \bigcup_{n \in \mathbb{N}} (-n, n)$ admits no finite subcover, so the line is not compact; and $(0, 1] \subseteq \bigcup_{n \in \mathbb{N}} (1/n, 2)$ admits none either, because a finite subfamily is dominated by its largest member $(1/N, 2)$, which misses $1/(2N)$. A bounded set that is not closed can therefore fail to be compact.
- *Closedness in item 2 of the permanence properties.* The subspace $(0, 1)$ of the compact space $[0, 1]$ is not compact: the open sets $(1/n, 1)$ for $n \ge 2$ cover it, and any finite subfamily is contained in one $(1/N, 1)$, which omits $1/(2N)$.
- *Hausdorff in item 3.* Let $X = \{a, b\}$ with the trivial topology $\{\emptyset, X\}$. Then $\{a\}$ is finite, hence compact, yet $X \setminus \{a\} = \{b\}$ is not open, so $\{a\}$ is not closed. Folland (p. 129) records the same phenomenon and adds that without Hausdorff an intersection of two compact sets can fail to be compact.
- *Hausdorff in the closed map lemma.* Compactness of the domain alone is not enough. Give $\{a, b\}$ the discrete topology to get a compact space $X$, and the trivial topology to get a non-Hausdorff space $Y$. The identity $X \to Y$ is continuous, since only $\emptyset$ and $Y$ are open in $Y$, and bijective; but $\{a\}$ is closed in $X$ and not in $Y$, so the map is neither closed nor a homeomorphism.
- *Nonemptiness in the extreme value theorem.* The empty space is compact and every map out of it is continuous, but no point is available at which a maximum could be attained. Lee (p. 608) states the result for a compact space without this caveat; we add "nonempty" so that the conclusion is literally true as written, and nothing else changes.
- *Compactness in item 2 of that statement.* On the non-compact set $(0, 1)$ the continuous function $1/x$ is not uniformly continuous, so the hypothesis cannot be dropped.

**Why Heine-Borel is a theorem, not a definition.** "Closed and bounded" is strictly weaker than compact in a general metric space, as item 3 of the Heine-Borel statement shows, and it is already weaker in a space as ordinary as $\mathbb{Q}$: the set $\mathbb{Q} \cap [0, 1]$ is bounded and closed in $\mathbb{Q}$, but the decimal truncations of $1/\sqrt{2}$ form a sequence in it with no subsequence converging anywhere in $\mathbb{Q}$. The pair of conditions that does survive in every metric space is total boundedness together with completeness, which is the point of the three-way equivalence.

**Compactness against sequential compactness.** The two agree on metric spaces, by that equivalence. Lee (p. 610) shows they also agree on second-countable Hausdorff spaces, and that a third condition joins them there: every infinite subset has a limit point. For topological spaces in general neither implies the other - Folland (p. 130) says so explicitly, and introduces there the intermediate notion of *countable compactness*, where only countable open covers are required to reduce to finite ones, a property every compact space has. Before transporting a theorem to a space with no metric, check which of the two hypotheses its proof actually used.

**Convention.** Kreyszig (p. 77) *defines* a metric space to be compact when each of its sequences has a convergent subsequence - our sequential compactness - and notes in a footnote that the variants coincide for metric spaces. Folland (p. 128) and Lee (p. 608) use finite subcovers, which is what this unit does and the only version that behaves well with no metric present. Read Kreyszig's "compact" as "sequentially compact"; by the equivalence above the two readings agree on every metric space, so his results transfer unchanged.
:::

:::example[The closed unit disk: a finite net, a maximum, and what breaks when the disk is opened]{provenance=original}
Work in $\mathbb{R}^{2}$ with the Euclidean metric and let

$$
D = \{(x, y) : x^{2} + y^{2} \le 1\}, \qquad D^{\circ} = \{(x, y) : x^{2} + y^{2} < 1\}, \qquad f(x, y) = x + 2y .
$$

**1. A finite net, counted.** Take $\varepsilon = 1/10$. Cut the square $Q = [-1, 1]^{2}$ into $16 \times 16 = 256$ closed subsquares of side $1/8$. Each subsquare lies within $\tfrac{1}{2}\cdot\tfrac{1}{8}\sqrt{2} = \sqrt{2}/16 = 0.08838\ldots < 0.1$ of its own centre, so it sits inside the ball of radius $1/10$ about that centre. The $256$ centres thus form a finite $(1/10)$-net for $Q$, hence for $D \subseteq Q$. The count cannot be reduced below $100$: a ball of radius $1/10$ has area $\pi/100$, the disk has area $\pi$, and the area of a union is at most the sum of the areas, so at least $\pi/(\pi/100) = 100$ such balls are needed. Total boundedness of $D$ at this $\varepsilon$ therefore costs between $100$ and $256$ balls.

**2. $D$ is compact.** It is bounded, lying inside $B_2(0)$, and closed, being the inverse image of $(-\infty, 1]$ under the continuous map $(x, y) \mapsto x^{2} + y^{2}$. Part 1 of the Heine-Borel statement makes it compact; equivalently, by the three-way equivalence, $D$ is complete (a closed subset of the complete space $\mathbb{R}^{2}$) and totally bounded (step 1 exhibits a net for $\varepsilon = 1/10$, and the same construction with more than $2/\varepsilon$ subdivisions per side works for any $\varepsilon$).

**3. The maximum exists, and here it is.** $f$ is continuous and $D$ is compact and nonempty, so the extreme value theorem gives points of $D$ at which $f$ is least and greatest. To find them, use the Cauchy-Schwarz inequality: $f(x, y) = (x, y) \cdot (1, 2) \le |(x, y)|\,|(1, 2)| \le \sqrt{5}$ on $D$, with equality only when $(x, y)$ is a nonnegative multiple of $(1, 2)$ of length $1$. Hence

$$
\max_{D} f = \sqrt{5} = 2.2360679775\ldots \quad \text{at} \quad \Bigl(\tfrac{1}{\sqrt{5}}, \tfrac{2}{\sqrt{5}}\Bigr) = (0.4472135955\ldots,\; 0.8944271910\ldots),
$$

and $\min_{D} f = -\sqrt{5}$ at the opposite point.

**4. On the open disk the bound is never reached.** For $(x, y) \in D^{\circ}$ the same inequality gives $f(x, y) < \sqrt{5}$ strictly, while the points $(1 - 1/m)\bigl(1/\sqrt{5}, 2/\sqrt{5}\bigr) \in D^{\circ}$ have $f = \sqrt{5}\,(1 - 1/m) \to \sqrt{5}$. So $\sup_{D^{\circ}} f = \sqrt{5}$ is not a value of $f$; at $m = 10$ the value is $0.9\sqrt{5} = 2.0124611797\ldots$, still short. The reason is that $D^{\circ}$ is not compact, and the failure can be displayed directly: the open sets $U_m = \{x^{2} + y^{2} < (1 - 1/m)^{2}\}$ for $m \ge 2$ cover $D^{\circ}$ and grow with $m$, so any finite subfamily lies inside its largest member $U_M$, which omits the point $\bigl(1 - 1/(2M), 0\bigr)$ of $D^{\circ}$. No finite subcover exists. $D^{\circ}$ is bounded but not closed, which is precisely the condition Heine-Borel requires.
:::

:::application{provenance=original}
**Existence of a minimising configuration.** The energy of $N$ interacting atoms is a continuous function $V$ on a subset of $\mathbb{R}^{3N}$. Confine them to a closed box: the admissible set is closed and bounded, hence compact, so $V$ attains a least value and a minimising configuration exists - no further argument about the shape of $V$ is needed. Remove the box and the conclusion can fail, and its failure is physical rather than technical: for a repulsive $V$ the infimum of the energy is approached only as the atoms separate without limit, so there is no minimiser, which is what it means for the system to have no bound state. Compactness is the hypothesis that distinguishes the two cases, and the same reasoning underlies the existence statements reached by :ref[Lagrange multipliers]{to=found.lagrange-multipliers} on a constraint surface that is closed and bounded.

**Why the Rayleigh quotient has a minimum in finite dimensions and needs more care in infinite ones.** For a real symmetric $n \times n$ matrix $A$, the quotient $R(x) = x^{\mathsf{T}} A x$ restricted to the unit sphere $\{|x| = 1\} \subseteq \mathbb{R}^{n}$ is continuous on a set that is closed and bounded, hence compact; the extreme value theorem then produces a minimising vector, and that vector is an eigenvector with the least eigenvalue. The argument uses part 1 of the Heine-Borel statement and nothing else. In an infinite-dimensional normed space the unit sphere is closed and bounded but not compact - the sequence $(e_n)$ of part 3 of that statement lives on it - so the existence of a minimiser has to be bought in some other way, typically by assuming the operator compact. That is the dividing line between :ref[quadratic forms]{to=linalg.quadratic-forms} in $\mathbb{R}^{n}$ and the spectral theory of :ref[compact operators]{to=funcan.compact-operators}, and it is why :ref[variational characterisations of eigenvalues]{to=var.variational-eigenvalues} carry a compactness hypothesis.

**One step size for the whole interval.** A numerical scheme on $[a, b]$ needs a single grid spacing that meets the tolerance everywhere, which is a statement of uniform continuity, not continuity: item 2 above supplies it for any continuous integrand or right-hand side, because $[a, b]$ is compact. On a non-compact domain the guarantee evaporates - $\sin(1/x)$ is continuous on $(0, 1]$ but oscillates on every scale near $0$, and no uniform spacing resolves it - which is why such integrals are handled by a change of variable or by adaptive refinement. The same compactness also makes the microcanonical ensemble finite: for $H(q, p) = |p|^{2}/2m + V(q)$ with $V$ continuous and the particles confined to a closed bounded region, the set $\{H \le E\}$ is closed and bounded in phase space, hence compact, so its phase-space volume is finite and the ensemble average is defined. Lift the confinement and that volume can diverge.
:::
