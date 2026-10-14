---
id: geom.partition-of-unity
title: Partitions of unity
kind: theorem
level: advanced
summary: Every indexed open cover of a smooth manifold admits a subordinate smooth partition of unity, the standard device for assembling a global metric, integral or field out of pieces defined chart by chart.
prereqs: [geom.smooth-manifolds, found.compactness, found.topological-spaces]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 1, Thm 1.15 (paracompactness), p. 9; Ch. 1, Prop. 1.19 (regular coordinate balls), p. 15; Ch. 2, Lemmas 2.20-2.22, pp. 41-42; Ch. 2, Thm 2.23 (existence of partitions of unity), pp. 43-44; Ch. 2, Prop. 2.25 and Lemma 2.26 (bump functions, extension lemma), pp. 44-45; Ch. 13, Prop. 13.3 (existence of Riemannian metrics), p. 329; Ch. 16, eq. (16.2) and Prop. 16.5 (the integral of a form), pp. 405-406"
    pages: "9, 15, 41-45, 329, 405-406"
    role: definitions of support, local finiteness and subordinate partition of unity; the bump-function lemmas; statement and proof route of the existence theorem; the two applications (Riemannian metrics, integration of forms)
  - work: folland-1999
    loc: "Ch. 4, §4.5, Prop. 4.41 (partition of unity on a compact subset of an LCH space), p. 134; Exercise 57, pp. 135-136"
    pages: "134-136"
    role: the purely topological version on a locally compact Hausdorff space, used in the remark comparing hypotheses
  - work: evans-2010
    loc: "§5.3.2, proof of Thm 2 (local approximation in Sobolev spaces), p. 251"
    pages: "251"
    role: the mollify-and-reassemble use of a smooth partition of unity in PDE theory, cited in the application
---

:::definition[Support, local finiteness, subordinate partition of unity]{provenance=adapted src="lee-2013:Ch. 1, p. 9, and Ch. 2, p. 43"}
Let $M$ be a smooth $n$-manifold (Hausdorff, second countable and locally Euclidean, with a smooth atlas; see :ref[Smooth manifolds]{to=geom.smooth-manifolds}).

- The **support** of a function $u : M \to \mathbb{R}$ is $\operatorname{supp} u = \overline{\{p \in M : u(p) \neq 0\}}$. We say $u$ is **supported in** a set $U$ if $\operatorname{supp} u \subset U$, and **compactly supported** if $\operatorname{supp} u$ is compact.
- A family $(A_\alpha)_{\alpha \in A}$ of subsets of $M$ is **locally finite** if every point of $M$ has a neighbourhood meeting $A_\alpha$ for only finitely many $\alpha$.
- A cover $\mathcal{V}$ **refines** a cover $\mathcal{U}$ if every member of $\mathcal{V}$ is contained in some member of $\mathcal{U}$. The space is **paracompact** if every open cover has a locally finite open refinement.
- Let $\mathcal{X} = (X_\alpha)_{\alpha \in A}$ be an open cover of $M$ indexed by a set $A$. A **smooth partition of unity subordinate to $\mathcal{X}$** is a family $(\psi_\alpha)_{\alpha \in A}$ of smooth functions $\psi_\alpha : M \to \mathbb{R}$, indexed by the *same* set $A$, which partitions the constant function $1$,

  $$
  \sum_{\alpha \in A}\psi_\alpha \equiv 1 ,
  $$

  and does so subject to three side conditions: the family of supports $(\operatorname{supp}\psi_\alpha)_{\alpha\in A}$ is locally finite; each support sits inside the matching cover element, $\operatorname{supp}\psi_\alpha \subset X_\alpha$; and the shares are fractions, $0 \le \psi_\alpha \le 1$. The first of these makes the displayed sum a *finite* sum near each point, so no convergence question arises; in the third, the upper bound is a consequence of the lower one and the displayed sum, since each $\psi_\alpha \le \sum_\beta \psi_\beta = 1$ once all terms are non-negative, but it is convenient to record both.
- For $A \subset M$ closed and $U \supset A$ open, a **bump function for $A$ supported in $U$** is a smooth $\chi : M \to \mathbb{R}$ with $0 \le \chi \le 1$, $\chi \equiv 1$ on $A$ and $\operatorname{supp}\chi \subset U$.
:::

:::statement[Existence of smooth partitions of unity]{provenance=adapted src="lee-2013:Ch. 2, Thm 2.23, p. 43, Prop. 2.25, p. 44, and Lemma 2.26, pp. 44-45"}
Fix a smooth manifold $M$, an index set $A$, and a family $\mathcal{X} = (X_\alpha)_{\alpha\in A}$ of open sets whose union is all of $M$. No restriction whatever is placed on the cover: $A$ may be uncountable, the $X_\alpha$ may be unbounded, and they may repeat. Then:

1. Some family $(\psi_\alpha)_{\alpha\in A}$, indexed by that same $A$, is a smooth partition of unity subordinate to $\mathcal{X}$.
2. (*Bump functions.*) For every closed $S \subset M$ and every open $U \supset S$ there is a smooth bump function for $S$ supported in $U$.
3. (*Extension lemma.*) If $S \subset M$ is closed, $U \supset S$ is open, and $f : S \to \mathbb{R}^k$ is smooth on $S$ in the sense that each point of $S$ has a neighbourhood in $M$ on which some smooth map agrees with $f$, then there is a smooth $\tilde f : M \to \mathbb{R}^k$ with $\tilde f|_S = f$ and $\operatorname{supp}\tilde f \subset U$.

Lee states all three for smooth manifolds with or without boundary; we use only the boundaryless case.
:::

:::idea{provenance=original}
Three ingredients, each cheap on its own.

First, smoothness allows functions that are positive on a ball and identically zero outside a slightly larger one: $e^{-1/t}$ is flat to infinite order at $t = 0$, so it can be switched on without leaving a trace in any derivative.

Second, a manifold is second countable and locally compact, and those two facts let any open cover be thinned to a *countable, locally finite* family of coordinate balls that still refines it. Local finiteness is what lets us add infinitely many bumps.

Third, having put one bump $f_i$ on each ball, the sum $f = \sum_i f_i$ is smooth and strictly positive, so dividing by it normalises the family to sum to $1$. The only remaining work is bookkeeping: the bumps are indexed by balls, the partition must be indexed by the cover, so the bumps belonging to the same cover element are added together.
:::

:::proof{provenance=adapted src="lee-2013:Ch. 2, Lemmas 2.20-2.22 and Thm 2.23, pp. 41-44"}
**Step 1: a flat-topped bump on $\mathbb{R}^n$.** Put $f(t) = e^{-1/t}$ for $t > 0$ and $f(t) = 0$ for $t \le 0$.

- *$f$ is smooth.* On $t \neq 0$ this is a composition of smooth functions. For $t > 0$, induction gives $f^{(k)}(t) = P_k(1/t)\,e^{-1/t}$ with $P_k$ a polynomial: differentiating $P(1/t)e^{-1/t}$ produces $\bigl(P(1/t) - P'(1/t)\bigr)t^{-2}e^{-1/t}$, which has the same shape with $P_{k+1}(u) = u^2\bigl(P_k(u) - P_k'(u)\bigr)$. Now argue by induction that $f^{(k)}(0) = 0$. This holds for $k = 0$. If it holds for $k$, the difference quotient of $f^{(k)}$ at $0$ vanishes from the left, and from the right it is $f^{(k)}(t)/t = u\,P_k(u)e^{-u}$ with $u = 1/t \to +\infty$, which tends to $0$ because $e^{-u}$ beats every power of $u$. So $f^{(k+1)}(0)$ exists and is $0$. Each $f^{(k)}$ is therefore differentiable everywhere, hence continuous, and $f \in C^\infty(\mathbb{R})$.
- *A cutoff.* Fix $0 < r_1 < r_2$ and set $h(t) = f(r_2 - t)\big/\bigl(f(r_2-t) + f(t - r_1)\bigr)$. At least one of $r_2 - t$, $t - r_1$ is positive for every $t$, so the denominator never vanishes and $h$ is smooth; $h \equiv 1$ for $t \le r_1$, $h \equiv 0$ for $t \ge r_2$, and $0 < h < 1$ in between.
- *A bump.* Set $H(x) = h(|x|)$ on $\mathbb{R}^n$. Away from the origin this is a composition of smooth maps, and near the origin $H \equiv 1$; so $H$ is smooth, equals $1$ on $\overline{B_{r_1}(0)}$ and vanishes off $B_{r_2}(0)$.

**Step 2: a good refinement of the cover.** Each $X_\alpha$ is itself a smooth manifold, so by Lee's Prop. 1.19 it has a countable basis of *regular coordinate balls*: sets $B$ for which there are a chart $\varphi : B' \to \mathbb{R}^n$ with $\overline{B} \subset B'$ and radii $r < r'$ such that $\varphi(B) = B_r(0)$, $\varphi(\overline B) = \overline{B_r(0)}$ and $\varphi(B') = B_{r'}(0)$. The union over $\alpha$ of these bases is a basis $\mathcal{B}$ for $M$: given $p \in M$ and an open $W \ni p$, choose $\alpha$ with $p \in X_\alpha$, note that $W \cap X_\alpha$ is open in the subspace $X_\alpha$, and take a regular coordinate ball of $X_\alpha$ with $p \in B \subset W \cap X_\alpha$; such a $B$ is open in $X_\alpha$, hence open in $M$ because $X_\alpha$ is. By Lee's Thm 1.15 (manifolds are paracompact, and the refinement may be taken from any prescribed basis) there is a countable, locally finite refinement $(B_i)_{i\in\mathbb{N}}$ of $\mathcal{X}$ with every $B_i \in \mathcal{B}$; the closures $\overline{B_i}$ are then locally finite as well. Both of these facts use second countability, through the exhaustion of $M$ by compact sets that proves Thm 1.15 (see :ref[Compactness]{to=found.compactness}).

**Step 3: one bump per ball.** Fix $i$, with chart $\varphi_i : B_i' \to \mathbb{R}^n$ and radii $r_i < r_i'$ as above, and let $H_i$ be the bump of Step 1 built from the pair $(r_i/2,\, r_i)$, so that $H_i > 0$ exactly on $B_{r_i}(0)$. Define

$$
f_i = \begin{cases} H_i \circ \varphi_i & \text{on } B_i',\\ 0 & \text{on } M \setminus \overline{B_i}.\end{cases}
$$

The two formulas agree (both give $0$) on the overlap $B_i' \setminus \overline{B_i}$, and those two open sets cover $M$, so $f_i$ is a well-defined smooth function. Because $\varphi_i(B_i) = B_{r_i}(0)$, it is strictly positive on $B_i$ and zero off it, so $\operatorname{supp} f_i = \overline{B_i} \subset B_i'$.

**Step 4: normalise.** Near any point only finitely many $f_i$ are not identically zero, by local finiteness of $(\overline{B_i})$, so $f = \sum_i f_i$ is smooth. Every $f_i$ is non-negative, and every $p \in M$ lies in some $B_i$, where $f_i(p) > 0$; hence $f > 0$ everywhere. Therefore $g_i = f_i/f$ is smooth, with $0 \le g_i \le 1$, $\operatorname{supp} g_i = \overline{B_i}$ and $\sum_i g_i \equiv 1$.

**Step 5: reindex.** Since $(B_i)$ refines $\mathcal{X}$, choose for each $i$ an index $a(i) \in A$ with $B_i' \subset X_{a(i)}$, which is possible because $B_i$ was drawn from the basis of regular coordinate balls of one of the $X_\alpha$, and set $\psi_\alpha = \sum_{i : a(i) = \alpha} g_i$ (the empty sum being $0$). Each $\psi_\alpha$ is smooth, because near any point the sum is finite. For a locally finite family of sets the closure of the union is the union of the closures, so $\operatorname{supp}\psi_\alpha \subset \bigcup_{a(i)=\alpha}\overline{B_i} \subset X_\alpha$, and the family of these supports is locally finite because $(\overline{B_i})$ is. Finally $\sum_\alpha \psi_\alpha = \sum_i g_i \equiv 1$. This proves part 1.

**Part 2.** Apply part 1 to the two-element cover $U_0 = U$, $U_1 = M\setminus S$, getting $\psi_0, \psi_1$. On $S$ we have $\psi_1 = 0$, hence $\psi_0 = 1$; and $\operatorname{supp}\psi_0 \subset U$. So $\chi = \psi_0$ is the required bump function.

**Part 3.** For each $p \in S$ choose an open $W_p \subset U$ containing $p$ and a smooth $f_p : W_p \to \mathbb{R}^k$ agreeing with $f$ on $W_p \cap S$. The sets $\{W_p\}_{p\in S}$ together with $M \setminus S$ form an open cover; take a subordinate smooth partition of unity $\{\psi_p\}_{p\in S} \cup \{\psi_0\}$. Each product $\psi_p f_p$, extended by $0$ off $\operatorname{supp}\psi_p$, is smooth on $M$ by the same two-open-sets argument as in Step 3. Put $\tilde f = \sum_{p} \psi_p f_p$, a locally finite sum, hence smooth. For $x \in S$ we have $\psi_0(x) = 0$ and $f_p(x) = f(x)$ whenever $\psi_p(x) \neq 0$, so $\tilde f(x) = \bigl(\psi_0(x) + \sum_p \psi_p(x)\bigr)f(x) = f(x)$. And $\operatorname{supp}\tilde f \subset \bigcup_p \operatorname{supp}\psi_p \subset U$, again because a locally finite union of closed sets is closed. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Second countability* is used exactly once, in Step 2, and it is indispensable. If a space admits a smooth partition of unity subordinate to every open cover then it is paracompact, because the open sets $\{\psi_\alpha \neq 0\}$ form a locally finite open refinement of the given cover. So any Hausdorff locally Euclidean space that is not paracompact — the long line is the standard example — carries no such partitions, and the theorem genuinely needs the countability clause in the definition of a manifold.
- *Smoothness, not analyticity.* Step 1 is where $C^\infty$ is strictly weaker than $C^\omega$. A real-analytic function that vanishes on a non-empty open subset of a connected real-analytic manifold vanishes identically, so a real-analytic partition of unity subordinate to a cover by two proper open sets of a connected manifold cannot exist. Every gluing argument below is therefore unavailable in the analytic category, and in the holomorphic category, where it is replaced by sheaf cohomology.
- *Local finiteness* is what makes $\sum_\alpha \psi_\alpha$ and every sum built from it a finite sum near each point; without it, "smooth" would require an argument about differentiating a series term by term.
- *Indexing by the same set $A$* costs Step 5 but is worth it: the sum $\sum_\alpha \psi_\alpha A_\alpha$ over a cover with chosen local objects $A_\alpha$ then has one term per cover element.
- *Supports need not be compact.* They are compact if the cover is by precompact sets; the proof gives compactly supported $g_i$ in any case, and the recombination in Step 5 is what can destroy compactness.
:::

:::remark[Two global objects built this way]{provenance=adapted src="lee-2013:Ch. 13, Prop. 13.3, p. 329, and Ch. 16, eq. (16.2) and Prop. 16.5, pp. 405-406"}
*Every smooth manifold carries a Riemannian metric.* Cover $M$ by charts $(U_\alpha, \varphi_\alpha)$ and let $g_\alpha$ be the pullback $\varphi_\alpha^*\bar g$ of the Euclidean metric, a Riemannian metric on $U_\alpha$. With $(\psi_\alpha)$ subordinate to $(U_\alpha)$, set $g = \sum_\alpha \psi_\alpha g_\alpha$, each term read as $0$ outside $\operatorname{supp}\psi_\alpha$. The sum is a smooth symmetric $2$-tensor field by local finiteness, and for $v \neq 0$ in $T_pM$ every term $\psi_\alpha(p)\,g_\alpha|_p(v,v)$ is $\ge 0$ while at least one $\psi_\alpha(p)$ is positive, so $g_p(v,v) > 0$. See :ref[Riemannian manifolds]{to=geom.riemannian-metrics}. The argument works because positive definiteness is preserved by convex combinations; there is nothing canonical about the resulting $g$.

*The integral of a form is well defined.* For a compactly supported $n$-form $\omega$ on an oriented $n$-manifold, cover $\operatorname{supp}\omega$ by finitely many oriented chart domains $U_i$, take a subordinate partition of unity $(\psi_i)$, and define $\int_M\omega = \sum_i \int_M \psi_i\omega$, each term being an ordinary integral in one chart. Given a second such cover and partition $(\tilde\psi_j)$, inserting $\sum_j\tilde\psi_j = 1$ into each term and $\sum_i\psi_i = 1$ into each term of the other sum exhibits both answers as $\sum_{i,j}\int_M \tilde\psi_j\psi_i\omega$, so they agree. See :ref[Integration of forms and the general Stokes theorem]{to=geom.stokes-forms}.
:::

:::method[Gluing local constructions into a global one]{provenance=original}
To build a global object on $M$ from objects defined chart by chart:

1. Choose an open cover $(U_\alpha)$ of $M$ on which the local objects $A_\alpha$ exist — usually a cover by chart domains, so that $A_\alpha$ is whatever the construction gives in $\mathbb{R}^n$.
2. Take a smooth partition of unity $(\psi_\alpha)$ subordinate to $(U_\alpha)$.
3. Form $A = \sum_\alpha \psi_\alpha A_\alpha$, reading each term as zero outside $\operatorname{supp}\psi_\alpha$. Local finiteness makes $A$ smooth.
4. Check that the defining property of $A$ survives the averaging. This is the only step with content, and it succeeds exactly when the admissible objects at each point form a convex set: Riemannian metrics (positive definite forms), connections (an affine space), volume densities, subordinate cutoffs. It fails for properties that are not convex — being nowhere zero, satisfying a nonlinear equation, being a complex structure — and for those one needs agreement on overlaps instead, or a genuinely different argument.
5. If the local objects *do* agree on overlaps, skip the partition of unity: the pieces then define $A$ directly, and the result is canonical rather than arbitrary.
:::

:::example[An explicit partition of unity on the circle, and a length computed with it]{provenance=original}
Let $M = S^1$, with the angle $\theta$ taken modulo $2\pi$, covered by the two chart domains

$$
U_0 = \{\theta : -\pi < \theta < \pi\}, \qquad U_1 = \{\theta : 0 < \theta < 2\pi\} .
$$

Let $f$ and $h(\,\cdot\,; r_1, r_2)$ be as in Step 1 of the proof, and set

$$
a(\theta) = h\bigl(1 - \cos\theta;\ 1,\ \tfrac32\bigr), \qquad b(\theta) = h\bigl(1 + \cos\theta;\ \tfrac12,\ \tfrac32\bigr).
$$

Both are smooth functions **on the circle**, because $\cos\theta$ is.

*Supports.* $a$ vanishes where $1 - \cos\theta \ge \tfrac32$, i.e. where $\cos\theta \le -\tfrac12$, so $\operatorname{supp} a \subset \{|\theta| \le 2\pi/3\} \subset U_0$. Likewise $b$ vanishes where $\cos\theta \ge \tfrac12$, so $\operatorname{supp} b \subset \{\pi/3 \le |\theta| \le \pi\} \subset U_1$.

*Positivity of the sum.* If $\cos\theta > -\tfrac12$ then $1 - \cos\theta < \tfrac32$ and $a(\theta) > 0$; if $\cos\theta \le -\tfrac12$ then $1 + \cos\theta \le \tfrac12$ and $b(\theta) = 1$. So $a + b > 0$ everywhere, and

$$
\psi_0 = \frac{a}{a+b}, \qquad \psi_1 = \frac{b}{a+b}
$$

is a smooth partition of unity subordinate to $(U_0, U_1)$.

*Two exact values.* At $\theta = \pi/2$: $1 - \cos\theta = 1 = r_1$ for $a$, so $a = 1$; and $1 + \cos\theta = 1$, which is the midpoint of $[\tfrac12, \tfrac32]$, so $b = f(\tfrac12)/\bigl(f(\tfrac12)+f(\tfrac12)\bigr) = \tfrac12$. Hence

$$
\psi_0(\pi/2) = \frac{1}{1 + 1/2} = \frac23, \qquad \psi_1(\pi/2) = \frac13 .
$$

At $\theta = 0$, $(\psi_0,\psi_1) = (1,0)$; at $\theta = \pi$, $(0,1)$.

*A checkable number.* The length of $S^1$, computed the way the integral of a form is defined, is the sum of two chart integrals:

$$
\int_{-\pi}^{\pi}\psi_0(\theta)\,d\theta \;=\; 3.348757\ldots, \qquad \int_{0}^{2\pi}\psi_1(\theta)\,d\theta \;=\; 2.934428\ldots
$$

(evaluated numerically; neither has a closed form, and the two differ because the cutoff radii chosen for $a$ and $b$ differ). Their sum is

$$
\int_{-\pi}^{\pi}\bigl(\psi_0(\theta) + \psi_1(\theta)\bigr)\,d\theta = \int_{-\pi}^{\pi} 1\,d\theta = 2\pi = 6.283185\ldots,
$$

which is the circumference, as it must be: the individual pieces depend on the partition, the total does not. This is exactly the cancellation behind the well-definedness argument in the remark above.
:::

:::application{provenance=original}
Partitions of unity are the reason "define it in coordinates, then glue" is a legitimate move in mathematical physics.

In general relativity the metric is given chart by chart; the existence argument above says that the obstruction to a global Lorentzian metric — which does not exist on every manifold, since the local models are not a convex family — is of a different kind from the Riemannian case, where there is none.

In PDE theory a bounded domain is covered by balls and boundary half-balls, the problem is solved or estimated in each, and a subordinate partition of unity reassembles the pieces; this is how local approximation of Sobolev functions by smooth ones is proved (:ref[Weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}), and the same cutoffs give the interior estimates used throughout elliptic theory.

The finite element method (:ref[The finite element method]{to=num.finite-elements}) is a partition of unity made computational: the nodal hat functions sum to one on the mesh, and the global approximation is the sum of the local ones weighted by them. In quantum chemistry the same device appears as the atom-centred weight functions of Becke's numerical integration scheme, which break a molecular integral into single-atom pieces.

Folland proves a continuous version with no manifold in sight: on a locally compact Hausdorff space, a compact set covered by finitely many open sets carries a partition of unity on it by compactly supported continuous functions, built from Urysohn's lemma instead of from $e^{-1/t}$. That is the form used in measure theory, for instance in the Riesz representation theorem.
:::
