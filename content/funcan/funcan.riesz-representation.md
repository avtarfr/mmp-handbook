---
id: funcan.riesz-representation
title: The Riesz representation theorem
kind: theorem
level: core
summary: Shows that every bounded linear functional on a Hilbert space is $u \mapsto (u,z)$ for one and only one vector $z$, of the same norm, so that the dual space is a conjugate copy of the space itself -- the statement that makes Dirac's bra a vector and underwrites weak formulations, adjoints and Green's functions.
prereqs: [funcan.projection-theorem, funcan.hilbert-spaces, funcan.normed-banach-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.8, pp. 188–192: Thm 3.8-1 (Riesz's theorem) with its three-part proof — representation, uniqueness, and $\\|z\\| = \\|f\\|$ — pp. 188–190; Lemma 3.8-2 (equality lemma), p. 190; Def. 3.8-3 (sesquilinear form) and its boundedness and norm, pp. 191–192"
    pages: "188-192"
    role: the statement including the norm equality, the proof route through the null space, and the sesquilinear-form apparatus that the theorem feeds
  - work: stakgold-holst-2011
    loc: "§4.7, pp. 288–292: linear functionals, boundedness, the equivalence of boundedness with continuity and the unbounded functional $l(u) = u(0)$ on the continuous functions in $L_2(-1,1)$, pp. 288–289; the Riesz representation theorem with its proof via the corollary to the projection theorem, p. 290; the dual (reciprocal) basis $\\{h_j^*\\}$ with $(h_i,h_j^*) = \\delta_{ij}$ and the coordinate formula $\\alpha_j = (u,h_j^*)$, pp. 290–291; the alternative proofs of Exercises 4.7.2 and 4.7.3 and Exercise 4.7.1, pp. 291–292"
    pages: "288-292"
    role: the continuity-versus-boundedness groundwork, the counterexample of an unbounded functional on a dense domain, the proof route, and the dual-basis application
  - work: folland-1999
    loc: "§5.5: Thm 5.25 (every $f \\in \\mathcal{H}^*$ is $f(x) = (x,y)$ for a unique $y$) with its proof and the preceding observation that $y \\mapsto f_y$ is a conjugate-linear isometry into $\\mathcal{H}^*$, p. 174; the remark that $\\mathcal{H}$ is naturally conjugate-isomorphic to $\\mathcal{H}^*$, p. 175; Exercise 57a (the adjoint built from this isomorphism), p. 177"
    pages: "174-175, 177"
    role: the formulation as a conjugate-linear isometric bijection of $\\mathcal{H}$ onto $\\mathcal{H}^*$, the compact proof, and the construction of the adjoint from it
  - work: reed-simon-1980
    loc: "§II.2, Thm II.4 (the Riesz lemma) with $T(x) = (y_T, x)$ and $\\|y_T\\| = \\|T\\|$, and the corollary representing a bounded sesquilinear form as $B(x,y) = (Ax,y)$, pp. 43–44"
    pages: "43-44"
    role: the attribution to Riesz and Fréchet, the opposite inner-product convention, and the bounded-sesquilinear-form corollary
  - work: evans-2010
    loc: "Appendix D.3(b), Thm 2 (Riesz Representation Theorem) for a real Hilbert space, with $\\langle u^*, v\\rangle = (u,v)$ and the map $u^* \\mapsto u$ a linear isomorphism of $H^*$ onto $H$, and the definition of the adjoint immediately after, p. 678"
    pages: "678"
    role: the real-Hilbert-space statement as used in partial differential equations, where the map is linear rather than conjugate-linear
  - work: hassani-2013
    loc: "§2.5, pp. 49–51: linear functionals including $\\gamma_a(|b\\rangle) = \\langle a|b\\rangle$, p. 49; the dual basis $\\phi_i(|a_j\\rangle) = \\delta_{ij}$ of Thm 2.5.2 and the dual of a vector, pp. 50–51"
    pages: "49-51"
    role: the Dirac-notation reading of a functional as a bra and of the dual basis, in the finite-dimensional case
---

:::definition[Bounded linear functional, dual space]{provenance=adapted src="stakgold-holst-2011:§4.7, pp. 288–289; kreyszig-1978:§3.8, p. 188"}
Let $H$ be a Hilbert space over $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$, with inner product $(u,v)$ linear in the first slot and conjugate-linear in the second.

A **linear functional** on $H$ is a map $f : H \to \mathbb{K}$ with $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v)$. It is **bounded** if there is a constant $c$ with
$$
|f(u)| \le c\|u\| \qquad\text{for all } u \in H ,
$$
and the smallest such $c$,
$$
\|f\| = \sup_{u \ne 0}\frac{|f(u)|}{\|u\|} = \sup_{\|u\| = 1}|f(u)| ,
$$
is the **norm** of $f$. The set $H^{*}$ of bounded linear functionals on $H$, with this norm, is the **dual space**; it is a Banach space (see :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}).

**Bounded means continuous.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.7, p. 289"} prove the two implications separately. If $f$ is bounded and $u_n \to u$, then $|f(u_n) - f(u)| = |f(u_n - u)| \le \|f\|\,\|u_n - u\| \to 0$. Conversely, if $f$ were continuous but unbounded, there would be non-zero $u_n$ with $|f(u_n)| \ge n\|u_n\|$; the vectors $v_n = u_n/(n\|u_n\|)$ then tend to $0$ while $|f(v_n)| \ge 1$, contradicting continuity at the origin — and continuity at the origin already implies continuity everywhere, by linearity.

A **sesquilinear form** on $H$ is a map $h : H\times H \to \mathbb{K}$ linear in the first argument and conjugate-linear in the second (:cite[Kreyszig]{work=kreyszig-1978 loc="Def. 3.8-3, p. 191"}); it is bounded if $|h(u,v)| \le c\|u\|\|v\|$, and the least such $c$ is $\|h\|$. The inner product itself is a bounded sesquilinear form with $\|h\| = 1$.
:::

:::statement[Riesz representation theorem]{provenance=adapted src="kreyszig-1978:Thm 3.8-1, p. 188; stakgold-holst-2011:the Riesz representation theorem, p. 290; folland-1999:Thm 5.25, p. 174; reed-simon-1980:Thm II.4, p. 43"}
Let $H$ be a Hilbert space.

1. **Representation.** For every bounded linear functional $f$ on $H$ there is a vector $z \in H$ with
$$
f(u) = (u, z) \qquad\text{for every } u \in H .
$$
2. **Uniqueness.** That $z$ is unique: if $(u,z_1) = (u,z_2)$ for all $u$, then $z_1 = z_2$.
3. **Isometry.** $\|z\| = \|f\|$, and the supremum defining $\|f\|$ is attained at $u = z/\|z\|$ when $z \ne 0$.
4. **The dual space is a conjugate copy of $H$.** The map $J : H \to H^{*}$, $(Jz)(u) = (u,z)$, is a bijection which is *conjugate*-linear, $J(\alpha z) = \bar\alpha\,Jz$, and isometric. On a real Hilbert space it is linear, and then $H^{*}$ and $H$ are isometrically isomorphic outright.

**Conventions differ, and the statement moves with them.** We write the functional as the inner product with $z$ *in the second slot*, because our inner product is linear in the first. :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm II.4, p. 43"}, whose inner product is linear in the second slot, state it as $T(x) = (y_T, x)$ with the representer first; this is the same theorem with the roles of the slots exchanged, and they attribute it to F. Riesz and M. Fréchet. :cite[Evans]{work=evans-2010 loc="Appendix D.3(b), Thm 2, p. 678"} states it for a *real* Hilbert space, where the distinction disappears and the map $u^{*}\mapsto u$ is a genuine linear isomorphism. All three are the statement above.

**Corollary (bounded sesquilinear forms).** :cite[Reed and Simon]{work=reed-simon-1980 loc="the corollary to Thm II.4, p. 44"} deduce: if $B : H\times H \to \mathbb{C}$ satisfies $|B(u,v)| \le c\|u\|\|v\|$ and is conjugate-linear in the first and linear in the second argument, there is a unique bounded linear operator $A$ with $B(u,v) = (Au, v)$ for all $u,v$, and $\|A\|$ is the least admissible $c$. With our convention the corollary reads: a bounded sesquilinear $h$ is $h(u,v) = (Au,v)$ for a unique bounded $A$. This is the standard route to :ref[adjoints]{to=funcan.adjoint-operators} and to :ref[the Lax-Milgram theorem]{to=pde.lax-milgram}.
:::

:::idea{provenance=adapted src="kreyszig-1978:proof of Thm 3.8-1, part (a), p. 189"}
A linear functional is determined by two pieces of data: the hyperplane it kills, and how fast it grows off that hyperplane. If $f = (\cdot\,,z)$ then $z$ must be orthogonal to the null space $N = f^{-1}(0)$, because $f$ vanishes there; so the representer, if it exists at all, must live in $N^{\perp}$ (this is how :cite[Kreyszig]{work=kreyszig-1978 loc="proof of Thm 3.8-1, p. 189"} motivates the proof). Boundedness makes $N$ closed, and then the projection theorem says $N^\perp$ is not $\{0\}$ unless $N$ is everything. That already pins $z$ down to a line: $N^\perp$ turns out to be one-dimensional, because two independent vectors in it could be combined to make a non-zero vector of $N^\perp$ on which $f$ vanishes, which would then lie in $N \cap N^\perp = \{0\}$.

The proof is just this observation made constructive. Take any non-zero $z_0 \in N^\perp$. For an arbitrary $u$, the combination $f(u)z_0 - f(z_0)u$ is annihilated by $f$, hence lies in $N$, hence is orthogonal to $z_0$. Writing that orthogonality out and solving for $f(u)$ produces the formula, with $z$ a multiple of $z_0$. The norm equality then costs two lines: Cauchy-Schwarz gives $\|f\| \le \|z\|$, and testing $f$ on $z$ itself gives the reverse.
:::

:::proof[Representation, uniqueness and the norm]{provenance=adapted src="kreyszig-1978:Thm 3.8-1, pp. 189–190; folland-1999:Thm 5.25, p. 174; stakgold-holst-2011:the Riesz representation theorem, p. 290"}
**Step 0: the trivial case.** If $f = 0$, take $z = 0$; then $f(u) = (u,0) = 0$ and $\|z\| = 0 = \|f\|$. Assume from now on that $f \ne 0$.

**Step 1: the null space is a proper closed subspace.** $N = \{u : f(u) = 0\}$ is a subspace by linearity, and it is closed because $f$ is **bounded**, hence continuous, so $N$ is the preimage of the closed set $\{0\}$. Since $f \ne 0$, $N \ne H$.

**Step 2: produce a direction off the null space.** By part 4 of :ref[the projection theorem]{to=funcan.projection-theorem} — equivalently the corollary :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.5, p. 268"} draw from it — a proper closed subspace has a non-zero orthogonal complement. Pick $z_0 \in N^{\perp}$ with $z_0 \ne 0$. Note $f(z_0)\ne0$: otherwise $z_0 \in N\cap N^\perp = \{0\}$.

**Step 3: the key combination.** Fix $u \in H$ and set
$$
v = f(u)\,z_0 - f(z_0)\,u .
$$
Applying $f$ and using linearity, $f(v) = f(u)f(z_0) - f(z_0)f(u) = 0$, so $v \in N$. Since $z_0 \perp N$,
$$
0 = (v, z_0) = f(u)\,(z_0,z_0) - f(z_0)\,(u,z_0) = f(u)\|z_0\|^2 - f(z_0)(u,z_0) .
$$

**Step 4: solve for $f(u)$.** As $\|z_0\|^2 \ne 0$,
$$
f(u) = \frac{f(z_0)}{\|z_0\|^2}\,(u,z_0) = \Bigl(u,\ \frac{\overline{f(z_0)}}{\|z_0\|^2}z_0\Bigr) ,
$$
the conjugate appearing because the inner product is conjugate-linear in its second slot. So part 1 holds with
$$
z = \frac{\overline{f(z_0)}}{\|z_0\|^{2}}\,z_0 ,
$$
and $u$ was arbitrary.

**Step 5: uniqueness.** If $(u,z_1) = (u,z_2)$ for all $u$ then $(u, z_1 - z_2) = 0$ for all $u$; taking $u = z_1 - z_2$ gives $\|z_1-z_2\|^2 = 0$, hence $z_1 = z_2$. (:cite[Kreyszig]{work=kreyszig-1978 loc="Lemma 3.8-2, p. 190"} isolates this as a lemma, because the same two lines are needed repeatedly: a vector orthogonal to everything is zero.)

**Step 6: the norm.** Cauchy-Schwarz gives $|f(u)| = |(u,z)| \le \|z\|\,\|u\|$, so $\|f\| \le \|z\|$. For the reverse, test on $z$ itself: $f(z) = (z,z) = \|z\|^2$, while $|f(z)| \le \|f\|\,\|z\|$. If $z \ne 0$, dividing by $\|z\|$ gives $\|z\| \le \|f\|$; if $z = 0$ then $f = 0$ by part 1 and both norms vanish. Hence $\|z\| = \|f\|$, and $f(z/\|z\|) = \|z\| = \|f\|$ shows the supremum is attained.

**Step 7: part 4.** $J$ is onto by step 1–4 and injective by step 5, and isometric by step 6. It is conjugate-linear because $(u,\alpha z) = \bar\alpha(u,z)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="stakgold-holst-2011:§4.7, p. 289 and Exercises 4.7.1–4.7.3, pp. 291–292; folland-1999:§5.5, p. 175; kreyszig-1978:§3.8, p. 188"}
- **Boundedness is used in step 1**, to make $N$ closed, and it cannot be dropped. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.7, p. 289"} give the standard failure: on $H = L_2(-1,1)$ let $M$ be the dense subspace of continuous functions and $l(u) = u(0)$. Taking a fixed continuous $\varphi \ge 0$ with $\varphi(\pm1)=0$ and $\varphi > 0$ inside, the functions $u_k(x) = \varphi(kx)$ for $|x| \le k^{-1}$ and $0$ elsewhere satisfy $\int_{-1}^{1}u_k^2 = k^{-1}\int_{-1}^{1}\varphi^2 \to 0$, so $u_k \to 0$ in $L_2$, while $u_k(0) = \varphi(0)$ is constant. So $l$ is linear and unbounded on $M$, and no $z$ can represent it: point evaluation on $L^2$ is not an inner product with anything. Note that $l$ is defined only on the dense subspace $M$, not on all of $H$; what the example shows is that point evaluation has no bounded extension to $H$. Unbounded linear functionals defined on the whole of an infinite-dimensional $H$ do exist, but only non-constructively (through a Hamel basis), and the theorem says nothing about them except that they are not of the form $(u,z)$. (Making it one is exactly what a reproducing-kernel space, or :ref[the Dirac delta]{to=vcalc.dirac-delta-basics} as a distribution, is for.)
- **Completeness of $H$ is used inside the projection theorem at step 2**, and it too is essential. Let $X \subset \ell^2$ be the incomplete inner product space of sequences with only finitely many non-zero entries, and $f(u) = \sum_{n\ge1}u_n/n$. Then $|f(u)| \le \|u\|\bigl(\sum n^{-2}\bigr)^{1/2} = \pi\|u\|/\sqrt6$, so $f$ is bounded on $X$; but a representer $z \in X$ would have to satisfy $z_n = 1/n$ for every $n$, which is not finitely supported. The representer exists in the completion, not in the space.
- **Linearity of $f$** is used in step 3, where $f(u)z_0 - f(z_0)u$ is formed with scalar coefficients and $f$ is applied to it. :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§4.7, Examples 1 and 3, p. 288"} examples on a complex $H$, written here with a fixed non-zero vector $g$, show the ways this can fail. $l(u) = \|u\|$ and $l(u) = (u,g)+a$ with a constant $a \ne 0$ are not even additive. $l(u) = (g,u)$ is additive but conjugate-linear, $l(\alpha u) = \bar\alpha\, l(u)$, so it fails only homogeneity under complex scalars; additivity alone is therefore not enough. None of the three is representable as $(u,z)$.
- **The slot matters, and so does the conjugate.** Over $\mathbb{C}$ the map $J$ is conjugate-linear, so $H^{*}$ is *anti*-isomorphic to $H$ rather than isomorphic; :cite[Folland]{work=folland-1999 loc="§5.5, p. 175"} puts it as “Hilbert spaces are reflexive in a very strong sense”: $H$ is naturally isomorphic to its second dual $H^{**}$, and to $H^*$ itself as well, through a conjugate-linear map. :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="Exercise 4.7.1, p. 291"} Exercise 4.7.1 asks the reader to notice the difference by looking at $l(\alpha u)$.
- **Nothing here needs separability or a basis**, although :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Exercise 4.7.3, pp. 291–292"} sketch an alternative proof that does: expand in an orthonormal basis and set $z = \sum_i \overline{l(e_i)}e_i$, the work then being to show that $\sum_i|l(e_i)|^2$ converges. A third proof, their Exercise 4.7.2, maximises $|l(u)|/\|u\|$ directly using the parallelogram law. We followed the null-space route because it uses the projection theorem as a black box and gives the norm equality for free.
- **The theorem is false in general Banach spaces**, where there is no inner product to represent anything with; what survives is the Hahn-Banach theorem, which guarantees that enough functionals exist without describing them. See :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach}.
:::

:::method[Finding the representer]{provenance=original}
1. **Check boundedness first**, with an explicit constant: estimate $|f(u)|$ by $c\|u\|$, usually with Cauchy-Schwarz or Hölder. If no such $c$ exists, stop — there is no representer, and the object you have is a distribution or an unbounded functional, not an element of $H^{*}$.
2. **If $f$ is already written as an integral against something**, say $f(u) = \int u\,\bar g$, then $g$ *is* the representer, provided $g \in H$. Most functionals met in practice arrive in this form and need no theorem; the theorem is what tells you the remaining ones are of this form too.
3. **Otherwise expand in an orthonormal basis.** Set $z = \sum_k \overline{f(e_k)}\,e_k$; this converges precisely when $\sum_k|f(e_k)|^2 < \infty$, which boundedness guarantees: for each $N$, linearity gives $\sum_{k\le N}|f(e_k)|^2 = f\bigl(\sum_{k\le N}\overline{f(e_k)}\,e_k\bigr) \le \|f\|\bigl(\sum_{k\le N}|f(e_k)|^2\bigr)^{1/2}$, so every partial sum is at most $\|f\|^2$. Then $(u,z) = \sum_k (u,e_k)\overline{\overline{f(e_k)}} = f(u)$ by continuity. See :ref[orthonormal bases]{to=funcan.orthonormal-bases}.
4. **Read off the norm**: $\|f\| = \|z\|$. This is often the easiest way to compute the norm of a functional, and it identifies the maximiser as $z/\|z\|$.
5. **To invert a non-orthogonal expansion, build the reciprocal basis.** Given independent $h_1,\dots,h_n$, the functionals "$j$-th coordinate" are bounded on their span; their representers $h_j^{*}$ satisfy $(h_i,h_j^{*}) = \delta_{ij}$, and then the coordinates of any $u$ in the span are $\alpha_j = (u,h_j^{*})$. Concretely $h_j^{*} = \sum_k (G^{-1})_{jk}h_k$ with $G_{ik} = (h_i,h_k)$ the Gram matrix: then $(h_i,h_j^{*}) = \sum_k G_{ik}\,\overline{(G^{-1})_{jk}} = (G\,G^{-1})_{ij} = \delta_{ij}$, using that $G$, and hence $G^{-1}$, is Hermitian. The order of the slots in $G$ matters only over $\mathbb{C}$. This is :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§4.7, (4.7.4)–(4.7.5), p. 291"} construction.
6. **For a bilinear or sesquilinear expression, apply the theorem one slot at a time** to get an operator rather than a vector, as in the corollary above.
:::

:::example[A representer, its norm, and a reciprocal basis]{provenance=original}
Work in the real Hilbert space $H = L^2(0,1)$, $(u,v) = \int_0^1 uv\,dx$.

**Part A: a functional and its representer.** Define
$$
f(u) = \int_0^{1/2}u(x)\,dx \;-\; 2\int_0^1 x\,u(x)\,dx .
$$
It is linear, and bounded because each term is an inner product: indeed
$$
f(u) = (u, z), \qquad z(x) = \chi_{[0,1/2]}(x) - 2x = \begin{cases}1 - 2x, & 0 < x \le \tfrac12,\\ -2x, & \tfrac12 < x < 1.\end{cases}
$$
By part 3 of the theorem, $\|f\| = \|z\|$, and
$$
\|z\|^2 = \int_0^{1/2}(1-2x)^2dx + \int_{1/2}^{1}4x^2dx = \frac16 + \frac{7}{6} = \frac{4}{3} ,
$$
using $\int_0^{1/2}(1-2x)^2dx = \tfrac12\int_0^1t^2dt = \tfrac16$ (substitute $t = 1-2x$) and $\int_{1/2}^1 4x^2dx = \tfrac43(1 - \tfrac18) = \tfrac76$. Hence
$$
\|f\| = \frac{2}{\sqrt3} = 1.154700538\ldots
$$
Check that the supremum is attained: with $u = z/\|z\|$,
$$
f(u) = \frac{(z,z)}{\|z\|} = \|z\| = \frac{2}{\sqrt3} ,
$$
as part 3 predicts. A competitor confirms the bound is not beaten: the unit vector $u(x) = \sqrt3\,(1-2x)$ gives $f(u) = \sqrt3\int_0^1(1-2x)z(x)\,dx = \sqrt3\bigl(\tfrac16 + \tfrac5{12}\bigr) = \tfrac{7\sqrt3}{12} = 1.010363 < 1.154701$.

**Part B: a reciprocal basis.** Take the oblique (non-orthogonal) pair $h_1(x) = 1$, $h_2(x) = x$, spanning the degree-$\le1$ polynomials. The Gram matrix and its inverse are
$$
G = \begin{pmatrix}1 & \tfrac12\\[1mm] \tfrac12 & \tfrac13\end{pmatrix} ,
\qquad
G^{-1} = \begin{pmatrix}4 & -6\\ -6 & 12\end{pmatrix} ,
$$
since $\det G = \tfrac13 - \tfrac14 = \tfrac1{12}$. By item 5 of the method,
$$
h_1^{*}(x) = 4 - 6x , \qquad h_2^{*}(x) = -6 + 12x .
$$
Verify the defining relations: $(h_1,h_1^{*}) = \int_0^1(4-6x)dx = 4-3 = 1$; $(h_2,h_1^{*}) = \int_0^1 x(4-6x)dx = 2 - 2 = 0$; $(h_1,h_2^{*}) = -6+6 = 0$; $(h_2,h_2^{*}) = -3 + 4 = 1$. All four are correct.

Now use the coordinate formula on a function *outside* the span, $u(x) = x^3$:
$$
(u,h_1^{*}) = \int_0^1 x^3(4-6x)dx = 1 - \tfrac65 = -\tfrac15 ,
\qquad
(u,h_2^{*}) = \int_0^1 x^3(-6+12x)dx = -\tfrac32 + \tfrac{12}{5} = \tfrac{9}{10} .
$$
These are exactly the coefficients of the orthogonal projection of $x^3$ onto $\operatorname{span}\{1,x\}$ computed in :ref[the projection theorem]{to=funcan.projection-theorem}, namely $-\tfrac15 + \tfrac9{10}x$ — which is the correct reading of the formula: $\alpha_j = (u,h_j^{*})$ returns the coordinates of $u$ when $u$ is in the span, and the coordinates of its projection when it is not, because $h_j^{*}$ lies in the span and so does not see the part of $u$ orthogonal to it.
:::

:::application{provenance=original}
**Dirac notation.** In quantum mechanics the Riesz theorem is what licenses the bracket. A bra $\langle\phi|$ is by definition a bounded linear functional on the state space, and the theorem says every such functional is $|\psi\rangle \mapsto \langle\phi|\psi\rangle$ for exactly one ket $|\phi\rangle$ — so bras and kets are in one-to-one correspondence, the correspondence being conjugate-linear, which is precisely why $\langle\alpha\phi| = \bar\alpha\langle\phi|$. :cite[Hassani]{work=hassani-2013 loc="§2.5, p. 49 and Thm 2.5.2, pp. 50–51"} sets this up in finite dimensions, where $\gamma_a(|b\rangle) = \langle a|b\rangle$ and the dual basis $\phi_i(|a_j\rangle) = \delta_{ij}$ is the reciprocal basis of the example; the infinite-dimensional statement needs the theorem. Dirac's $\delta$ is the celebrated exception: point evaluation is *not* bounded on $L^2$, as the remark shows, which is why the delta lives in a distribution space and not in the Hilbert space. See :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Weak formulations of boundary-value problems.** A weak formulation reads: find $u \in H$ with $a(u,v) = f(v)$ for all $v \in H$, where $a$ is a bounded sesquilinear form and $f$ a bounded functional of the same type in $v$ as $a(u,\cdot)$: on a real Hilbert space, as in Evans, simply a bounded linear functional; on a complex one, a bounded conjugate-linear functional. The corollary turns $a$ into an operator, $a(u,v) = (Au,v)$, and the theorem, applied to the linear functional $v \mapsto \overline{f(v)}$, turns $f$ into a vector, $f(v) = (z,v)$, reducing the problem to $Au = z$ in $H$; adding coercivity of $a$ gives the Lax-Milgram theorem and with it existence, uniqueness and a stability bound in one stroke. This is the standard existence theory for elliptic equations and the foundation of the finite-element method. See :ref[the Lax-Milgram theorem]{to=pde.lax-milgram}, :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev} and :ref[finite elements]{to=num.finite-elements}.

**Green's functions as representers.** When the solution operator of a boundary-value problem is bounded, the map "solution evaluated against a test function" is a bounded functional of the data, and its representer is the Green's function. The symmetry of the Green's function for a self-adjoint problem is the statement that the corresponding operator equals its adjoint, which is itself built from the theorem. See :ref[Green's functions for boundary-value problems]{to=green.green-function-bvp} and :ref[Hilbert-Schmidt kernels]{to=green.hilbert-schmidt}.

**Adjoints and the whole operator theory.** :cite[Folland's]{work=folland-1999 loc="Exercise 57a, p. 177"} Exercise 57a defines the adjoint $T^{*}$ by applying the theorem to the functional $x \mapsto (Tx,y)$ for each fixed $y$: the representer is $T^{*}y$. Everything about self-adjointness, unitarity and the spectral theorem rests on that construction. :cite[Evans]{work=evans-2010 loc="Appendix D.3(b), p. 678"} introduces the adjoint in exactly this position, immediately after the representation theorem. See :ref[adjoints, self-adjoint and unitary operators]{to=funcan.adjoint-operators}.

**Estimation and filtering.** In statistics the best linear unbiased estimator of a linear functional of an unknown signal is found by representing that functional in the Hilbert space generated by the observations; the representer *is* the optimal weight vector, and its norm is the standard error. This "representer method" is used directly in data assimilation, where the analysis increment is a combination of representers of the observation functionals. See :ref[data assimilation]{to=stats.data-assimilation} and :ref[the Kalman filter]{to=stats.kalman-filter}.
:::
