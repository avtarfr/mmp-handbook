---
id: funcan.projection-theorem
title: The projection theorem
kind: theorem
level: core
summary: Shows that a non-empty closed convex subset of a Hilbert space contains exactly one point nearest any given vector, that for a closed subspace the error of that nearest point is orthogonal to the subspace, and hence that $H = M \oplus M^\perp$, which is what makes "drop a perpendicular" a legitimate move in infinitely many dimensions.
prereqs: [funcan.hilbert-spaces, funcan.metric-spaces, linalg.inner-product-spaces, found.limits-of-sequences]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.3, pp. 144–150: Thm 3.3-1 (minimizing vector in a complete convex set) with its existence and uniqueness proof, pp. 144–145; Lemma 3.3-2 (orthogonality), p. 145; Def. 3.3-3 (direct sum) and Thm 3.3-4 (the direct sum $H = Y \\oplus Y^\\perp$), pp. 146–147; the projection operator $P$ and Lemma 3.3-5, pp. 147–148; the annihilator $M^\\perp$ and Lemma 3.3-6 ($Y^{\\perp\\perp} = Y$), pp. 148–149; Lemma 3.3-7 (dense span iff $M^\\perp = \\{0\\}$), pp. 149–150"
    pages: "144-150"
    role: the statement and proof route for the minimizing vector in a convex set, the orthogonality lemma, the direct-sum theorem, the idempotence of $P$, and the two lemmas on $M^{\\perp\\perp}$ and dense span
  - work: stakgold-holst-2011
    loc: "§4.5, pp. 261–274: the projection theorem with its three-part proof (minimizing sequence, orthogonality by minimisation in a real parameter, uniqueness), pp. 266–267; Remarks 1–3 on the proof (the polynomials in $L_2$, the sup-norm counterexample in $C[0,1]$, the reduction to convexity) and the corollary that $M \\ne H$ forces $M^\\perp \\ne \\{0\\}$, pp. 267–268; the closedness of $M^\\perp$, p. 266; Exercise 4.5.8 (closed convex sets), p. 274; Exercise 4.5.6 (even and odd functions in $L_2(-1,1)$), p. 273; Exercise 4.5.10 (irrotational and solenoidal fields), p. 274"
    pages: "261-274"
    role: the second proof route, the two counterexamples that pin down which hypotheses are needed, the corollary used later by the Riesz theorem, and the physical decompositions used in the application
  - work: folland-1999
    loc: "Thm 5.24 ($\\mathcal{H} = M \\oplus M^\\perp$, with the minimal-distance characterisation of both summands), pp. 173–174; the closedness of $E^\\perp$ and the Pythagorean theorem 5.23, p. 173; Exercises 56 ($(E^\\perp)^\\perp$ is the smallest closed subspace containing $E$), 58 (the projection $P$ satisfies $P^2 = P^* = P$) and 59 (minimal-norm element of a closed convex set), p. 177"
    pages: "173-174, 177"
    role: the formulation that names both summands as nearest points, the derivative-free variational step in the orthogonality argument, and the algebraic characterisation of orthogonal projections
  - work: reed-simon-1980
    loc: "§II.2, the lemma on the closest element of a closed subspace and Thm II.3 (the projection theorem), p. 42"
    pages: "42"
    role: the compact formulation $\\mathcal{H} = M \\oplus M^\\perp$ as a natural isomorphism, and the real-parameter variational argument for orthogonality
  - work: grimmett-stirzaker-2020
    loc: "§7.9, Thm (9) (existence and a.s. uniqueness of the best predictor in a closed linear space of random variables, proved by the parallelogram rule), p. 389; the projection theorem (14) with the equivalence of (15) and (16), p. 390; Thm (17) and Definition (20), conditional expectation as the projection, pp. 391–392"
    pages: "389-392"
    role: the probabilists' form of the theorem and the identification of conditional expectation as an orthogonal projection, used in the application
  - work: hassani-2013
    loc: "§6.1, Def. 6.1.1 (orthogonal complement), Prop. 6.1.2 and Prop. 6.1.3 ($\\mathcal{V} = \\mathcal{M} \\oplus \\mathcal{M}^\\perp$ with hermitian projection operators) in the finite-dimensional setting, pp. 169–170"
    pages: "169-170"
    role: the Dirac-notation reading of the decomposition and of $P$ and $1 - P$ as complementary hermitian projectors
---

:::definition[Distance to a set, convexity, orthogonal complement]{provenance=adapted src="kreyszig-1978:§3.3, Def. 3.3-3, p. 146, and the annihilator, p. 148; stakgold-holst-2011:§4.5, p. 266; hassani-2013:Def. 6.1.1, p. 169"}
Throughout, $H$ is a Hilbert space over $\mathbb{R}$ or $\mathbb{C}$, with inner product $(u,v)$ linear in the first slot and norm $\|u\| = (u,u)^{1/2}$ (see :ref[Hilbert spaces]{to=funcan.hilbert-spaces}).

For a non-empty set $S \subseteq H$ and $u \in H$, the **distance from $u$ to $S$** is
$$
d(u,S) = \inf_{z \in S} \|u - z\| .
$$
An element $v \in S$ with $\|u - v\| = d(u,S)$ is a **nearest point** of $S$ to $u$; the infimum of a set of non-negative numbers always exists, but need not be attained.

A set $C \subseteq H$ is **convex** if $tz_1 + (1-t)z_2 \in C$ whenever $z_1, z_2 \in C$ and $0 \le t \le 1$. Every linear subspace is convex, and so is every translate of one, every ball, and every set defined by linear inequalities. Only one consequence of convexity is used below: the midpoint $\tfrac12(z_1+z_2)$ of two members of $C$ is again in $C$.

Two vectors are **orthogonal**, $u \perp v$, if $(u,v) = 0$. For a non-empty $S \subseteq H$ the **orthogonal complement** is
$$
S^{\perp} = \{\, u \in H : (u,z) = 0 \text{ for every } z \in S \,\} .
$$
$S^\perp$ is always a *closed linear subspace*, whatever $S$ is: it is a subspace because $(\alpha u_1 + \beta u_2, z) = \alpha(u_1,z) + \beta(u_2,z)$, and it is closed because if $u_k \to u$ with $(u_k,z) = 0$ then $(u,z) = \lim_k (u_k,z) = 0$ by continuity of the inner product. We write $S^{\perp\perp}$ for $(S^\perp)^\perp$.

$H$ is the **direct sum** of two subspaces $M$ and $N$, written $H = M \oplus N$, if every $u \in H$ has exactly one representation $u = v + w$ with $v \in M$ and $w \in N$.
:::

:::statement[The projection theorem]{provenance=adapted src="kreyszig-1978:Thm 3.3-1, p. 144, Lemma 3.3-2, p. 145, and Thm 3.3-4, p. 146; stakgold-holst-2011:§4.5, the projection theorem, p. 266; folland-1999:Thm 5.24, p. 173"}
Let $H$ be a Hilbert space.

1. **Nearest point in a closed convex set.** If $C \subseteq H$ is non-empty, convex and closed, then for every $u \in H$ there is exactly one $v \in C$ with
$$
\|u - v\| = d(u,C) .
$$
2. **Orthogonality.** If moreover $C = M$ is a *linear subspace* (closed, non-empty), then the error $w = u - v$ satisfies $w \in M^{\perp}$; and conversely, if $v \in M$ and $u - v \in M^\perp$, then $v$ is the nearest point.
3. **Direct sum.** Hence for every closed subspace $M \subseteq H$,
$$
H = M \oplus M^{\perp} ,
$$
that is, each $u \in H$ is in exactly one way $u = v + w$ with $v \in M$, $w \in M^\perp$, and then $\|u\|^2 = \|v\|^2 + \|w\|^2$. The map $P : H \to H$, $Pu = v$, is the **orthogonal projection onto $M$**; it is linear, satisfies $P^2 = P$, has range $M$ and null space $M^{\perp}$, and $\|Pu\| \le \|u\|$.
4. **Double complement and density.** For a closed subspace $M$, $M^{\perp\perp} = M$; and if $M \ne H$ then $M^\perp$ contains a non-zero vector. For an arbitrary non-empty $S \subseteq H$, the span of $S$ is dense in $H$ if and only if $S^{\perp} = \{0\}$.

:cite[Kreyszig]{work=kreyszig-1978 loc="Thm 3.3-1, p. 144"} states part 1 in a slightly different frame: $X$ is an inner product space, not assumed complete, and $C$ is a non-empty convex subset which is *complete in the induced metric*. Part 1 above is the case $X = H$, where closed and complete agree. :cite[Folland]{work=folland-1999 loc="Thm 5.24, p. 173"} states parts 2 and 3 together and adds that $w$ is likewise the unique nearest point of $M^\perp$ to $u$.
:::

:::idea{provenance=original}
Everything comes from one identity. In an inner product space the parallelogram law
$$
\|a - b\|^2 + \|a + b\|^2 = 2\|a\|^2 + 2\|b\|^2
$$
converts a statement about *how close two competitors are to each other* into a statement about *how close their midpoint is to the target*. Apply it to $a = u - z_n$ and $b = u - z_m$: the term $\|a+b\|^2$ becomes $4\|u - \tfrac12(z_n+z_m)\|^2$, and convexity says the midpoint is a legal competitor, so that term is at least $4d^2$. Two competitors that are both nearly optimal therefore have a midpoint that is also nearly optimal, and the identity forces them to be close to each other. A minimising sequence is Cauchy for free, completeness gives it a limit, and closedness keeps the limit in the set. The same identity with two *exactly* optimal competitors gives uniqueness, with no extra work.

Orthogonality is then a one-variable calculus statement. Once $v$ minimises, the function $t \mapsto \|u - v - tz\|^2$ has a minimum at $t = 0$ for every direction $z \in M$; it is a quadratic in $t$ whose linear coefficient is $-2\operatorname{Re}(u-v,z)$, so that coefficient must vanish. Running the argument again with $iz$ in place of $z$ kills the imaginary part too. This is the only place where $M$ must be a subspace rather than merely convex: we need to be able to move from $v$ in *both* directions along $z$ and stay inside.
:::

:::proof[Part 1: existence and uniqueness of the nearest point]{provenance=adapted src="kreyszig-1978:Thm 3.3-1, pp. 144–145; stakgold-holst-2011:§4.5, proof parts (a) and (c), pp. 266–267"}
Write $d = d(u,C) \ge 0$, which is finite since $C \ne \varnothing$.

**Step 1: a minimising sequence.** By the definition of an infimum there are $z_n \in C$ with $\|u - z_n\| \to d$.

**Step 2: the parallelogram law on the differences.** Apply the parallelogram law to $a = u - z_n$ and $b = u - z_m$. Since $a - b = z_m - z_n$ and $a + b = 2u - (z_n + z_m)$,
$$
\|z_n - z_m\|^2 = 2\|u - z_n\|^2 + 2\|u - z_m\|^2 - 4\Bigl\|u - \tfrac{z_n + z_m}{2}\Bigr\|^2 .
$$

**Step 3: convexity bounds the last term from below.** $\tfrac12(z_n + z_m) \in C$ **because $C$ is convex**, so the last norm is at least $d$, giving
$$
\|z_n - z_m\|^2 \le 2\|u - z_n\|^2 + 2\|u - z_m\|^2 - 4d^2 .
$$
As $n,m \to \infty$ the right-hand side tends to $2d^2 + 2d^2 - 4d^2 = 0$. Hence $(z_n)$ is Cauchy.

**Step 4: pass to the limit.** $H$ is **complete**, so $z_n \to v$ for some $v \in H$; and $C$ is **closed**, so $v \in C$. The norm is continuous, so $\|u - v\| = \lim_n \|u - z_n\| = d$. Existence is proved.

**Step 5: uniqueness.** Let $v$ and $v'$ in $C$ both satisfy $\|u - v\| = \|u - v'\| = d$. Step 2 with $z_n = v$, $z_m = v'$ reads
$$
\|v - v'\|^2 = 2d^2 + 2d^2 - 4\Bigl\|u - \tfrac{v + v'}{2}\Bigr\|^2 \le 4d^2 - 4d^2 = 0 ,
$$
again because the midpoint lies in $C$. So $\|v - v'\| = 0$, that is $v' = v$. $\square$
:::

:::proof[Part 2: the error is orthogonal to the subspace]{provenance=adapted src="stakgold-holst-2011:§4.5, proof part (b), p. 267; folland-1999:Thm 5.24, p. 174; reed-simon-1980:Thm II.3, p. 42"}
Let $M$ be a closed subspace, $v$ the nearest point given by part 1, and $w = u - v$.

**Step 1: set up a one-parameter competitor.** Fix $z \in M$ and $t \in \mathbb{R}$. Since $M$ is a **subspace**, $v + tz \in M$, so by minimality $\|u - (v + tz)\| \ge \|u - v\|$, that is
$$
\|w - tz\|^2 \ge \|w\|^2 \qquad \text{for all } t \in \mathbb{R} .
$$

**Step 2: expand.** Using sesquilinearity and $\overline{(z,w)} = (w,z)$,
$$
\|w - tz\|^2 = \|w\|^2 - 2t\operatorname{Re}(w,z) + t^2\|z\|^2 .
$$

**Step 3: read off the linear term.** By step 1, $\varphi(t) = -2t\operatorname{Re}(w,z) + t^2\|z\|^2 \ge 0$ for every real $t$. A real quadratic in $t$ that vanishes at $t=0$ and is never negative cannot have a non-zero linear coefficient: if $\operatorname{Re}(w,z) \ne 0$, then taking $t$ small with the sign of $\operatorname{Re}(w,z)$ makes $\varphi(t) < 0$. Hence $\operatorname{Re}(w,z) = 0$.

**Step 4: the imaginary part.** $iz \in M$ as well, so step 3 applies to it: $0 = \operatorname{Re}(w,iz) = \operatorname{Re}\bigl(-i(w,z)\bigr) = \operatorname{Im}(w,z)$. (Here $(w,iz) = \overline{i}\,(w,z) = -i(w,z)$, because the inner product is conjugate-linear in the second slot.) Therefore $(w,z) = 0$ for every $z \in M$, that is $w \in M^\perp$. For a real Hilbert space step 3 alone finishes the argument.

**Step 5: the converse.** Suppose $v \in M$ and $u - v \in M^\perp$. For any $z \in M$ the vector $v - z$ lies in $M$, so $u - v \perp v - z$ and the Pythagorean identity gives
$$
\|u - z\|^2 = \|(u-v) + (v-z)\|^2 = \|u-v\|^2 + \|v-z\|^2 \ge \|u-v\|^2 ,
$$
with equality only for $z = v$. So $v$ is the nearest point, and this also re-proves its uniqueness. $\square$
:::

:::proof[Parts 3 and 4: the direct sum, the projection, and the complements]{provenance=adapted src="kreyszig-1978:Thm 3.3-4, pp. 146–147, Lemma 3.3-5, p. 148, Lemma 3.3-6, p. 149, and Lemma 3.3-7, pp. 149–150; stakgold-holst-2011:the corollary following the projection theorem, p. 268"}
**Step 1: existence of the decomposition.** A closed subspace is non-empty (it contains $0$), convex and closed, so parts 1 and 2 give $u = v + w$ with $v \in M$ and $w = u - v \in M^\perp$.

**Step 2: uniqueness.** If $u = v + w = v' + w'$ with $v,v' \in M$ and $w,w' \in M^\perp$, then $v - v' = w' - w$ lies in $M \cap M^\perp$. A vector $x$ in that intersection satisfies $(x,x) = 0$, hence $x = 0$. So $v = v'$ and $w = w'$. This is what $H = M \oplus M^\perp$ means. Since $v \perp w$, the Pythagorean identity gives $\|u\|^2 = \|v\|^2 + \|w\|^2$.

**Step 3: properties of $P$.** Linearity: if $u_1 = v_1 + w_1$ and $u_2 = v_2 + w_2$ are the decompositions, then $\alpha u_1 + \beta u_2 = (\alpha v_1 + \beta v_2) + (\alpha w_1 + \beta w_2)$ exhibits a decomposition of $\alpha u_1 + \beta u_2$, and by uniqueness it is *the* decomposition; so $P(\alpha u_1 + \beta u_2) = \alpha P u_1 + \beta P u_2$. If $u \in M$ then $u = u + 0$ is its decomposition, so $Pu = u$; applying this to $u = Pv$ gives $P^2 = P$. The range is $M$ and $Pu = 0$ exactly when $u = w \in M^{\perp}$, so the null space is $M^\perp$. Finally $\|u\|^2 = \|Pu\|^2 + \|u - Pu\|^2 \ge \|Pu\|^2$.

**Step 4: $M \ne H$ gives a non-zero vector in $M^\perp$.** Pick $u \in H \setminus M$ and decompose $u = v + w$. If $w$ were $0$ then $u = v \in M$, a contradiction; so $w \in M^\perp$ is non-zero.

**Step 5: $M^{\perp\perp} = M$ for closed $M$.** The inclusion $M \subseteq M^{\perp\perp}$ holds for any set: if $x \in M$ then $x \perp$ everything in $M^\perp$ by the definition of $M^\perp$. Conversely let $x \in M^{\perp\perp}$ and write $x = v + w$ with $v \in M$, $w \in M^\perp$. Then $w = x - v$ is a difference of two members of $M^{\perp\perp}$ (using $M \subseteq M^{\perp\perp}$ for $v$), so $w \in M^{\perp\perp}$; but $w \in M^\perp$ as well, and $M^\perp \cap M^{\perp\perp} = \{0\}$ by the argument of step 2. Hence $w = 0$ and $x = v \in M$.

**Step 6: the density criterion.** Let $S \ne \varnothing$ and let $V$ be the closure of the span of $S$, a closed subspace. First, $S^\perp = V^\perp$: a vector orthogonal to all of $S$ is orthogonal to every finite linear combination, hence, by continuity of the inner product, to every limit of such. Now if $V = H$ then $S^\perp = H^\perp = \{0\}$. Conversely if $V \ne H$ then step 4 supplies a non-zero vector in $V^\perp = S^\perp$. So $S^\perp = \{0\}$ if and only if the span of $S$ is dense. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="stakgold-holst-2011:§4.5, Remarks 1–3 on the proof, pp. 267–268; kreyszig-1978:Thm 3.3-1, p. 144; folland-1999:Exercise 58, p. 177"}
- **Convexity is used exactly once**, in step 3 of the first proof (and again in step 5), to put the midpoint $\tfrac12(z_n+z_m)$ back into the set. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.5, Remark 3, p. 267"} make the point in reverse: the proof of part 1 never needs $C$ to be a subspace, only that midpoints stay inside, which is the defining property of a convex set, and the general convex case is their Exercise 4.5.8.
- **Closedness of $C$ is used** in step 4, to keep the limit of the minimising sequence inside $C$. Without it the infimum can fail to be attained: their Remark 1 takes $H = L_2(a,b)$ and $C$ the set of all polynomials, which is a non-closed subspace. It is dense (see :ref[$L^p$ spaces]{to=measure.lp-spaces}), so $d(u,C) = 0$ for every $u$, yet no polynomial equals a non-polynomial $u$. Here $C^\perp = \{0\}$ while $C \ne H$, which is why part 4 insists that $M$ be closed.
- **Completeness of $H$ is used** in the same step, to produce the limit at all. A Cauchy minimising sequence in an incomplete inner product space can run off the edge of the space.
- **The parallelogram law — that is, the norm coming from an inner product — is used** in step 2, and it is not a technicality. Remark 2 of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.5, p. 267"} gives a Banach-space failure: in $C[0,1]$ with the sup norm let $M$ be the closed subspace of continuous functions vanishing at $x = 0$; the function $u(x) = 1$ has distance $1$ from $M$ but no nearest element of $M$. The theorem is a Hilbert-space theorem, not a Banach-space one.
- **$M$ must be a subspace, not merely convex, for parts 2–4.** Step 1 of the second proof perturbs $v$ by $tz$ for both signs of $t$; in a convex set only $t \ge 0$ small is available, and the conclusion degrades from $(w,z) = 0$ to the *variational inequality* $\operatorname{Re}(u - v, z - v) \le 0$ for all $z \in C$. The example below shows a convex projection that is not linear.
- **Orthogonality of the complement is what makes $P$ self-adjoint.** Any decomposition $H = M \oplus N$ into complementary subspaces defines an idempotent $P$, but only the orthogonal choice $N = M^\perp$ gives $\|Pu\| \le \|u\|$ and $(Pu,z) = (u,Pz)$. :cite[Folland's]{work=folland-1999 loc="Exercise 58, p. 177"} Exercise 58 records the converse: a bounded operator with $P^2 = P^* = P$ is the orthogonal projection onto its (then automatically closed) range. See :ref[adjoints, self-adjoint and unitary operators]{to=funcan.adjoint-operators}.
- **Finite dimension hides all of this.** :cite[Hassani]{work=hassani-2013 loc="Prop. 6.1.3, p. 170"} proves $\mathcal{V} = \mathcal{M} \oplus \mathcal{M}^\perp$ for *any* subspace $\mathcal{M}$ of a finite-dimensional inner product space, with no closedness hypothesis, by extending an orthonormal basis of $\mathcal{M}$ and setting $P = \sum_{i} |e_i\rangle\langle e_i|$. That is legitimate there because every finite-dimensional subspace is automatically closed; in infinite dimensions the hypothesis has to be imposed.
:::

:::method[Computing an orthogonal projection]{provenance=original}
1. **Identify the subspace and check it is closed.** Finite-dimensional subspaces and null spaces of bounded operators are closed; spans of infinite sets usually are not, and must be replaced by their closures.
2. **If $M = \operatorname{span}\{h_1,\dots,h_n\}$, write $v = \sum_j c_j h_j$ and impose orthogonality.** The condition $u - v \perp h_i$ for each $i$ is the **normal equations**
$$
\sum_{j=1}^{n} (h_j, h_i)\, c_j = (u, h_i) , \qquad i = 1,\dots,n ,
$$
an $n \times n$ linear system whose matrix is the Gram matrix $G_{ij} = (h_j,h_i)$. It is invertible exactly when the $h_j$ are linearly independent. See :ref[projections and least squares]{to=linalg.projections-least-squares}.
3. **If the $h_j$ are orthonormal, skip the solve:** $c_j = (u,h_j)$, so $Pu = \sum_j (u,h_j)h_j$. This is why one orthonormalises first (:ref[the Gram-Schmidt process]{to=linalg.gram-schmidt}), and it extends to infinite orthonormal families in :ref[orthonormal bases in Hilbert space]{to=funcan.orthonormal-bases}.
4. **Get the distance without computing $v$ twice:** $d(u,M)^2 = \|u\|^2 - \|Pu\|^2 = \|u\|^2 - \sum_i c_i \overline{(u,h_i)}$ when $Pu = \sum_i c_i h_i$. A negative answer means an arithmetic error.
5. **For a convex set that is not a subspace,** do not solve a linear system. Minimise directly, using the characterisation $\operatorname{Re}(u - v, z - v) \le 0$ for all $z \in C$; for sets defined pointwise, such as $\{f \ge 0\}$ in an $L^2$ space, the minimisation decouples point by point.
6. **To prove a family is total** (its span dense), do not try to expand a general vector. Use part 4: take an arbitrary $u$ orthogonal to every member of the family and show $u = 0$.
:::

:::example[A projection onto a subspace and a projection onto a cone]{provenance=original}
Work in the real Hilbert space $H = L^2(0,1)$ with $(f,g) = \int_0^1 f(x)g(x)\,dx$.

**Part A: a closed subspace.** Let $M = \operatorname{span}\{1, x\}$, the polynomials of degree at most $1$; it is two-dimensional, hence closed. Project $u(x) = x^3$ onto it.

The inner products needed are $(1,1) = 1$, $(1,x) = \tfrac12$, $(x,x) = \tfrac13$, $(u,1) = \int_0^1 x^3dx = \tfrac14$ and $(u,x) = \int_0^1 x^4dx = \tfrac15$. Writing $Pu = a + bx$, the normal equations of step 2 are
$$
a + \tfrac12 b = \tfrac14 , \qquad \tfrac12 a + \tfrac13 b = \tfrac15 .
$$
Multiply the first by $\tfrac12$ and subtract from the second: $\bigl(\tfrac13 - \tfrac14\bigr)b = \tfrac15 - \tfrac18$, that is $\tfrac{1}{12}b = \tfrac{3}{40}$, so $b = \tfrac{9}{10}$ and then $a = \tfrac14 - \tfrac{9}{20} = -\tfrac15$. Hence
$$
Pu(x) = -\tfrac15 + \tfrac{9}{10}x .
$$
By step 4,
$$
d(u,M)^2 = \|u\|^2 - \bigl[a(u,1) + b(u,x)\bigr] = \frac17 - \Bigl[-\frac15\cdot\frac14 + \frac{9}{10}\cdot\frac15\Bigr] = \frac17 - \frac{13}{100} = \frac{9}{700} ,
$$
so the distance from $x^3$ to the straight lines is
$$
d(u,M) = \frac{3}{\sqrt{700}} = 0.1133893419\ldots
$$
Two checks. First, orthogonality: $(u - Pu, 1) = \tfrac14 - \bigl(-\tfrac15 + \tfrac{9}{20}\bigr) = \tfrac14 - \tfrac14 = 0$, and $(u - Pu, x) = \tfrac15 - \bigl(-\tfrac{1}{10} + \tfrac{3}{10}\bigr) = \tfrac15 - \tfrac15 = 0$. Second, a competitor: the Taylor-style choice $3x - 2$, which matches $u$ and $u'$ at $x = 1$, gives $\int_0^1 (x^3 - 3x + 2)^2dx = \tfrac{33}{35} = 0.942857$, distance $0.971008$, worse by a factor $8.5635$. Nearest in the mean-square sense is not nearest in any other sense.

**Part B: a closed convex set that is not a subspace.** Let
$$
C = \{\, f \in L^2(0,1) : f \ge 0 \text{ a.e.} \,\} ,
$$
the non-negative cone. It is convex (a convex combination of non-negative functions is non-negative) and closed (if $f_k \to f$ in $L^2$ then a subsequence converges a.e., and an a.e. limit of non-negative functions is non-negative; see :ref[modes of convergence]{to=measure.modes-of-convergence}). Project $u(x) = x - \tfrac12$.

Because the constraint is imposed pointwise, so is the minimisation: for each $x$ separately, the number $s \ge 0$ minimising $(u(x) - s)^2$ is $s = \max(u(x),0)$. Any $f \in C$ therefore satisfies $\int_0^1 (u-f)^2 \ge \int_0^1 (u - u^+)^2$, with equality only if $f = u^+$ a.e. So the nearest point is the positive part
$$
v(x) = u^+(x) = \begin{cases} 0, & 0 < x \le \tfrac12, \\ x - \tfrac12, & \tfrac12 < x < 1,\end{cases}
$$
and the distance is
$$
d(u,C)^2 = \int_0^{1/2}\Bigl(x - \tfrac12\Bigr)^2 dx = \frac{1}{24} , \qquad d(u,C) = \frac{1}{\sqrt{24}} = 0.2041241452\ldots
$$
This projection is genuinely non-linear: $u^+ + (-u)^+ = |u| \ne 0 = (u + (-u))^+$. The error $u - v = -u^-$ is *not* orthogonal to $C$ — indeed $(u - v, v) = 0$ but $(u-v, z) = \int_0^{1/2}(x - \tfrac12)z \le 0$ for every $z \in C$, which is the variational inequality of the remark, with a strict sign for most $z$. Convexity buys existence and uniqueness; only a subspace buys orthogonality and linearity.
:::

:::application{provenance=original}
**Least squares and data fitting.** Fitting a model that is linear in its parameters to data means projecting the data vector onto the span of the basis functions, and the normal equations of the method are exactly step 2. Everything a practitioner relies on — that the fit exists, that it is unique when the design matrix has full rank, that the residual is orthogonal to every predictor, that the residual sum of squares is $\|u\|^2 - \|Pu\|^2$ — is this theorem. See :ref[projections and least squares]{to=linalg.projections-least-squares} and :ref[least-squares regression]{to=stats.least-squares-regression}.

**Conditional expectation.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§7.9, Thms (9), (14) and (17) and Def. (20), pp. 389–392"} prove the projection theorem directly for a closed linear space $H$ of random variables under $\|\cdot\|_2$, by precisely the parallelogram-law argument above, and then identify the nearest point to $Y$ as the best mean-square predictor. Taking $H$ to be the square-integrable $\mathcal{G}$-measurable random variables gives their definition of $\mathbb{E}(Y \mid \mathcal{G})$ as the element satisfying $\mathbb{E}\bigl[(Y - \mathbb{E}(Y\mid\mathcal{G}))Z\bigr] = 0$ for all $Z \in H$ — the orthogonality relation of part 2, written out. Martingales, filtering and the Kalman recursion all descend from this reading. See :ref[conditional expectation]{to=prob.conditional-expectation} and :ref[the Kalman filter]{to=stats.kalman-filter}.

**Quantum mechanics.** A measurement with outcome subspace $M$ sends a state $u$ to $Pu/\|Pu\|$, and $\|Pu\|^2/\|u\|^2$ is the probability of that outcome; the complementary outcome corresponds to $1 - P$, and $H = M \oplus M^\perp$ is the statement that the two outcomes are exhaustive and mutually exclusive. :cite[Hassani]{work=hassani-2013 loc="Prop. 6.1.3, p. 170"} writes this as $|a\rangle = P|a\rangle + (1-P)|a\rangle$ with both projectors hermitian. See :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Variational methods for differential equations.** The Rayleigh-Ritz and Galerkin methods replace a problem posed in $H$ by the same problem posed in a finite-dimensional subspace $M_n$; when the energy inner product is used, the Galerkin solution is the orthogonal projection of the true solution onto $M_n$, so it is the *best possible* approximation from $M_n$ in the energy norm, and the error is orthogonal to the trial space. That orthogonality is the engine of finite-element error analysis. See :ref[Rayleigh-Ritz]{to=var.rayleigh-ritz}, :ref[the Lax-Milgram theorem]{to=pde.lax-milgram} and :ref[finite elements]{to=num.finite-elements}.

**Decompositions of fields and of functions.** Many physically meaningful splittings are instances of $H = M \oplus M^\perp$. :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="Exercise 4.5.6, p. 273, and Exercise 4.5.10, p. 274"} exercises give two: the even and odd parts of a function in $L_2(-1,1)$, and the splitting of a vector field on a bounded domain into an irrotational part $\operatorname{grad} p$ and a solenoidal part with vanishing normal component, whose existence they reduce to a Neumann boundary-value problem. The latter is the Helmholtz decomposition, the basis of the pressure-projection schemes used in computational fluid dynamics; see :ref[the Helmholtz decomposition]{to=vcalc.helmholtz-decomposition}.
:::
