---
id: linalg.inner-product-spaces
title: Inner products and norms
kind: definition
level: core
summary: Real and complex inner products in the convention used throughout this handbook, the norm they induce, and the Cauchy-Schwarz and triangle inequalities with their exact cases of equality.
prereqs: [linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.1, Def. 3.1-1 (inner product space, axioms (IP1)–(IP4)), pp. 128–129; sesquilinearity and the parallelogram equality, p. 130; Def. 3.1-2 (orthogonality), p. 131; Examples 3.1-3 and 3.1-4, pp. 131–132; §3.2, Lemma 3.2-1 (Schwarz and triangle inequalities with the equality cases), pp. 136–138; Lemma 3.2-2 (continuity), p. 138"
    pages: "128-138"
    role: the axioms in the convention used here (linear in the first slot); the norm axioms deduced from them; Schwarz and triangle inequalities together with their exact equality conditions; parallelogram law; continuity of the inner product
  - work: lee-2013
    loc: "App. B, Inner Products and Norms (symmetry, bilinearity, positive definiteness; length, angle, orthogonality; Exercise B.39), pp. 635–636; orthogonal complement, Exercise B.45, p. 637; Norms (positivity, homogeneity, triangle inequality), p. 637"
    pages: "635-637"
    role: the real case and its geometric reading as length and angle; the definition of a norm and of the orthogonal complement
  - work: hassani-2013
    loc: "§2.2 (sesquilinear or hermitian inner product; Euclidean versus pseudo-Euclidean), p. 31; Example 2.2.3 (the natural inner products, and weighted integral inner products), pp. 31–32; Def. 2.2.4 (orthogonality, orthonormal basis), p. 32; Thm 2.2.7 (Schwarz inequality), p. 35"
    pages: "31-35"
    role: the weighted integral inner product on function spaces and the condition on the weight; the physics convention; the pseudo-Euclidean case where positive definiteness is dropped
  - work: reed-simon-1980
    loc: "§II.1, the inner product axioms and the remark on the opposite convention, pp. 36–37; Thm II.1 (the orthonormal-expansion identity, there called the Pythagorean theorem) and the Schwarz inequality, pp. 37–38; Problem 4, p. 63 (polarization identity; the parallelogram law characterises inner product norms)"
    pages: "36-38, 63"
    role: explicit statement that the two linearity conventions are both in use; the polarization identity and the parallelogram-law characterisation
  - work: stakgold-holst-2011
    loc: "§4.5 (parallelogram law, orthogonality and the Pythagorean theorem, orthogonal complement; Hilbert space and Euclidean space), pp. 264–266"
    pages: "264-266"
    role: the Pythagorean theorem for two orthogonal vectors (part 4); the parallelogram law as a property special to inner product norms; orthogonal complements; the completeness that distinguishes a Hilbert space
  - work: rhb-2006
    loc: "§8.1.2 (inner product properties in the physics convention) and §8.1.3 (Schwarz, triangle, Bessel and parallelogram inequalities), pp. 244–247"
    pages: "244-247"
    role: the physics convention, for the remark on conventions; the hypothesis under which Schwarz and the triangle inequality are introduced there, and the "positive semi-definite norm" label of §8.1.2 which nonetheless carries definiteness, for the remark on how much positivity each part needs
---

:::definition[Inner product space]{provenance=adapted src="kreyszig-1978:§3.1, Def. 3.1-1, pp. 128–129, and p. 130; lee-2013:App. B, pp. 635–636; reed-simon-1980:§II.1, p. 36; hassani-2013:§2.2, p. 31 (the words sesquilinear and hermitian)"}
Let $V$ be a vector space over $\mathbb{F}$, where $\mathbb{F} = \mathbb{R}$ or $\mathbb{C}$. An **inner product** on $V$ is a map $V\times V\to\mathbb{F}$, written $(x,y)$, with, for all $x,y,z\in V$ and $a\in\mathbb{F}$:

$$
(x+y,\,z) = (x,z)+(y,z), \qquad (ax,\,y) = a\,(x,y), \qquad (y,x) = \overline{(x,y)},
$$

$$
(x,x)\ \ge\ 0, \qquad\text{and}\qquad (x,x) = 0 \iff x = 0 .
$$

The third condition makes $(x,x)$ real, so the fourth is well posed; a vector space with a chosen inner product is an **inner product space**. Combining the first three conditions,

$$
(ax+by,\,z) = a(x,z)+b(y,z), \qquad (x,\,ay+bz) = \overline{a}\,(x,y)+\overline{b}\,(x,z),
$$

so the product is **linear in its first slot** and conjugate-linear in its second — **sesquilinear**, or **hermitian**. Over $\mathbb{R}$ the bars vanish: the third condition becomes symmetry, $(x,y) = (y,x)$, and the product is bilinear.
:::

:::definition[Norm, orthogonality, orthogonal complement]{provenance=adapted src="lee-2013:App. B, pp. 636–637; kreyszig-1978:§3.1, eq. (1), p. 129, and Def. 3.1-2, p. 131; hassani-2013:§2.2, Def. 2.2.4, p. 32; stakgold-holst-2011:§4.5, pp. 264–266"}
A **norm** on a vector space $V$ over $\mathbb{F}$ is a map $\lVert\cdot\rVert\colon V\to\mathbb{R}$ with: $\lVert x\rVert\ge 0$ and $\lVert x\rVert = 0$ only for $x=0$; $\lVert ax\rVert = \lvert a\rvert\,\lVert x\rVert$ for $a\in\mathbb{F}$; and $\lVert x+y\rVert\le\lVert x\rVert+\lVert y\rVert$. A vector space with a chosen norm is a **normed space**, metrized by $d(x,y) = \lVert x-y\rVert$.

On an inner product space the **induced norm** is $\lVert x\rVert = (x,x)^{1/2}$; part 3 below shows it is a norm. In the real case $\lVert x\rVert$ is the **length** of $x$, and the **angle** $\theta\in[0,\pi]$ between nonzero $x,y$ is fixed by $\cos\theta = (x,y)/(\lVert x\rVert\lVert y\rVert)$, legitimate because Cauchy-Schwarz confines that quotient to $[-1,1]$.

Vectors $x,y$ are **orthogonal**, written $x\perp y$, if $(x,y) = 0$; a set is **orthogonal** if its elements are pairwise orthogonal, and **orthonormal** if in addition every element has norm $1$. For $S\subseteq V$ the **orthogonal complement** is

$$
S^{\perp} = \{\,v\in V : (v,s) = 0\ \text{for every } s\in S\,\},
$$

always a subspace of $V$, whatever $S$ is. An inner product space that is complete in the induced metric is a :ref[Hilbert space]{to=funcan.hilbert-spaces}; completeness is *not* assumed here.
:::

:::definition[The standard inner products]{provenance=adapted src="kreyszig-1978:§3.1, Examples 3.1-3 and 3.1-4, eqs. (5)–(6), pp. 131–132; hassani-2013:§2.2, Example 2.2.3, eq. (2.10), pp. 31–32"}
- On $\mathbb{F}^n$: $(x,y) = \sum_{i=1}^{n} x_i\overline{y_i}$. For $\mathbb{F}=\mathbb{R}$ this is the Euclidean dot product, and the induced norm is $\lVert x\rVert = \bigl(\sum_i\lvert x_i\rvert^2\bigr)^{1/2}$.
- On a space of $\mathbb{F}$-valued functions on an interval, a **weighted inner product**

  $$
  (f,g) = \int_a^b w(t)\,f(t)\,\overline{g(t)}\,\mathrm{d}t ,
  $$

  where the **weight** $w$ is real-valued, continuous and strictly positive on $(a,b)$, and the space is small enough that the integral converges for all its members. Two cases where it does: $C([a,b],\mathbb{F})$ with $-\infty<a<b<\infty$ and $w$ integrable on $[a,b]$; and the polynomials, with a weight whose moments $\int_a^b w(t)\,\lvert t\rvert^k\,\mathrm{d}t$ all converge, $k = 0,1,2,\dots$ — for instance $w(t) = e^{-t}$ on $(0,\infty)$, where the $k$-th moment is $k!$. Strict positivity of $w$ on the open interval is what makes $(f,f) = 0$ force $f = 0$. Different weights give different inner products.
:::

:::statement[The induced norm and the two basic inequalities]{provenance=adapted src="kreyszig-1978:§3.2, Lemma 3.2-1, pp. 136–138, p. 130, and Lemma 3.2-2, p. 138; stakgold-holst-2011:§4.5, p. 264; reed-simon-1980:§II.1, p. 37, and Problem 4, p. 63; lee-2013:App. B, Exercise B.39, p. 636"}
Let $V$ be an inner product space over $\mathbb{F}$ and $\lVert x\rVert = (x,x)^{1/2}$. Parts 1–3, 5 and 6 hold for all $x,y\in V$, and so does the first sentence of part 4, whose second sentence covers every finite family $x_1,\dots,x_N\in V$, $N\in\mathbb{N}$. Parts 7 and 8 carry their own hypotheses: part 7 is about a vector space $W$ over $\mathbb{F}$ equipped with an arbitrary norm, not assumed to come from an inner product, and part 8 is about sequences in $V$.

1. **Expansion.** $\lVert x+y\rVert^2 = \lVert x\rVert^2 + 2\operatorname{Re}(x,y) + \lVert y\rVert^2$.
2. **Cauchy-Schwarz inequality.** $\lvert(x,y)\rvert \le \lVert x\rVert\,\lVert y\rVert$, with equality exactly when one of $x,y$ is a scalar multiple of the other, that is, when $y = 0$ or $x = cy$ for some $c\in\mathbb{F}$.
3. **Triangle inequality.** $\lVert x+y\rVert \le \lVert x\rVert+\lVert y\rVert$, with equality exactly when $y = 0$, or else $x = cy$ for some real $c\ge 0$. Consequently $\lVert\cdot\rVert$ is a norm on $V$.
4. **Pythagoras.** If $x\perp y$ then $\lVert x+y\rVert^2 = \lVert x\rVert^2+\lVert y\rVert^2$. More generally, if $x_1,\dots,x_N\in V$ are pairwise orthogonal, with $N\in\mathbb{N}$, then $\bigl\lVert\sum_{n=1}^{N} x_n\bigr\rVert^2 = \sum_{n=1}^{N}\lVert x_n\rVert^2$.
5. **Parallelogram law.** $\lVert x+y\rVert^2+\lVert x-y\rVert^2 = 2\lVert x\rVert^2+2\lVert y\rVert^2$.
6. **Polarization identity.** The inner product is recovered from the norm: over $\mathbb{C}$,

   $$
   4\,(x,y) = \bigl(\lVert x+y\rVert^2-\lVert x-y\rVert^2\bigr) + i\bigl(\lVert x+iy\rVert^2-\lVert x-iy\rVert^2\bigr),
   $$

   and over $\mathbb{R}$, $4(x,y) = \lVert x+y\rVert^2-\lVert x-y\rVert^2$. In particular two inner products with the same induced norm are equal.
7. **Characterisation by the parallelogram law.** A norm on a vector space $W$ over $\mathbb{F}$ is induced by some inner product on $W$ if and only if it satisfies the identity of part 5 for all $x,y\in W$.
8. **Continuity.** If $x_n\to x$ and $y_n\to y$ in the induced metric, then $(x_n,y_n)\to(x,y)$.
:::

:::idea{provenance=original}
One expansion does most of the work: $\lVert x+y\rVert^2$ opened out by sesquilinearity is part 1, and parts 4, 5 and 6 are that same expansion with $y$ replaced by $-y$, by $iy$, or by orthogonal pieces. Cauchy-Schwarz comes from applying it to $x - ay$ and choosing the $a$ that makes the result smallest — geometrically, subtracting from $x$ its component along $y$, leaving a vector whose squared length is the slack in the inequality. The triangle inequality is then Cauchy-Schwarz together with $\operatorname{Re}z\le\lvert z\rvert$, and the two equality cases are exactly the two places where those steps can be tight: the leftover component must vanish, and the inner product must be real and non-negative. Part 7 is the one genuine converse, and it is proved by taking the formula of part 6 as a *definition* and checking the axioms, where the parallelogram law is what makes the candidate additive.
:::

:::proof{provenance=adapted src="kreyszig-1978:§3.1, p. 130, §3.2, Lemma 3.2-1, pp. 136–138, and Lemma 3.2-2, p. 138; reed-simon-1980:§II.1, p. 37, and Problem 4, p. 63"}
Throughout, sesquilinearity means the two displayed identities of the first definition block: additive and homogeneous in the first slot, additive and conjugate-homogeneous in the second. Note first that $(x,0) = 0$ for every $x$, because $(x,0) = (x,0+0) = (x,0)+(x,0)$.

**Part 1.** Expanding by additivity in each slot and then using $(y,x) = \overline{(x,y)}$,
$$
\lVert x+y\rVert^2 = (x+y,x+y) = (x,x)+(x,y)+(y,x)+(y,y) = \lVert x\rVert^2 + 2\operatorname{Re}(x,y) + \lVert y\rVert^2 ,
$$
since $z+\overline{z} = 2\operatorname{Re}z$. Replacing $y$ by $-y$, which changes $(x,y)$ into $-(x,y)$ and leaves $\lVert y\rVert$ alone, gives the companion identity
$$
\lVert x-y\rVert^2 = \lVert x\rVert^2 - 2\operatorname{Re}(x,y) + \lVert y\rVert^2 ,
$$
used repeatedly below.

**Part 2, the inequality.** If $y=0$ both sides are $0$. So let $y\neq 0$, whence $(y,y)>0$ by strict positivity. For any $a\in\mathbb{F}$, expanding as in part 1,
$$
0\ \le\ \lVert x-ay\rVert^2 = (x,x) - \overline{a}(x,y) - a(y,x) + \lvert a\rvert^2(y,y),
$$
where the first inequality is $(u,u)\ge 0$. Take $a = (x,y)/(y,y)$, legitimate because $(y,y)\neq 0$ and real. Then $\overline{a}(x,y) = a(y,x) = \lvert(x,y)\rvert^2/(y,y)$ and $\lvert a\rvert^2(y,y) = \lvert(x,y)\rvert^2/(y,y)$, so three of the four terms collapse to one:
$$
0\ \le\ \lVert x\rVert^2 - \frac{\lvert(x,y)\rvert^2}{\lVert y\rVert^2}.
$$
Multiplying by $\lVert y\rVert^2>0$ and taking non-negative square roots gives $\lvert(x,y)\rvert\le\lVert x\rVert\lVert y\rVert$.

**Part 2, the equality case.** With $y \ne 0$ and $a$ as chosen, the display is an equality exactly when $\lVert x-ay\rVert^2 = 0$, which by strict definiteness means $x = ay$ — so equality forces $x$ to be a multiple of $y$. Conversely, if $y=0$ equality holds, and if $x = cy$ then $\lvert(x,y)\rvert = \lvert c\rvert\lVert y\rVert^2$ while $\lVert x\rVert\lVert y\rVert = \lvert c\rvert\lVert y\rVert^2$ by homogeneity, so equality holds again. This is the condition as stated: $y=0$, or $x = cy$ for some $c\in\mathbb{F}$.

**Part 3, the inequality and the norm axioms.** By part 1, then $\operatorname{Re}z\le\lvert z\rvert$, then part 2,
$$
\lVert x+y\rVert^2 \le \lVert x\rVert^2 + 2\lvert(x,y)\rvert + \lVert y\rVert^2 \le \lVert x\rVert^2 + 2\lVert x\rVert\lVert y\rVert + \lVert y\rVert^2 = (\lVert x\rVert+\lVert y\rVert)^2,
$$
and taking square roots of non-negative numbers gives the triangle inequality. For the remaining norm axioms: $\lVert x\rVert = (x,x)^{1/2}\ge 0$, and it vanishes only for $x=0$ by strict definiteness — this is the one clause of part 3 that needs more than $(x,x)\ge0$ — while
$$
\lVert ax\rVert^2 = (ax,ax) = a\overline{a}\,(x,x) = \lvert a\rvert^2\lVert x\rVert^2
$$
by homogeneity in the first slot and conjugate-homogeneity in the second.

**Part 3, the equality case.** Equality in the triangle inequality forces equality at both steps above, that is $\operatorname{Re}(x,y) = \lvert(x,y)\rvert$ and $\lvert(x,y)\rvert = \lVert x\rVert\lVert y\rVert$. By part 2 the second gives $y=0$ or $x=cy$. Suppose $y\neq 0$ and $x = cy$; then $(x,y) = c\lVert y\rVert^2$, so the first condition says $\operatorname{Re}c = \lvert c\rvert$, which holds exactly when $c$ is real and $\ge 0$. Conversely $y = 0$, or $x = cy$ with $c$ real and $\ge0$, makes both steps equalities. So equality holds exactly when $y=0$ or $x = cy$ with $c\ge 0$ real.

**Part 4.** If $(x,y)=0$ then $\operatorname{Re}(x,y)=0$ and part 1 gives $\lVert x+y\rVert^2 = \lVert x\rVert^2+\lVert y\rVert^2$. For a finite pairwise-orthogonal family, additivity in each slot expands the square of the norm into $N^2$ terms,
$$
\Bigl\lVert\sum_{n=1}^{N}x_n\Bigr\rVert^2 = \sum_{n=1}^{N}\sum_{k=1}^{N}(x_n,x_k),
$$
and every term with $n\neq k$ vanishes: $(x_n,x_k) = 0$ by hypothesis when $n<k$, and $(x_k,x_n) = \overline{(x_n,x_k)} = 0$ as well. The diagonal leaves $\sum_n\lVert x_n\rVert^2$. Finiteness is what allows the expansion; no convergence question arises.

**Part 5.** Add the two identities of part 1: the terms $\pm2\operatorname{Re}(x,y)$ cancel, leaving $\lVert x+y\rVert^2+\lVert x-y\rVert^2 = 2\lVert x\rVert^2+2\lVert y\rVert^2$.

**Part 6.** Subtracting the two identities of part 1 gives
$$
\lVert x+y\rVert^2-\lVert x-y\rVert^2 = 4\operatorname{Re}(x,y),
$$
which over $\mathbb{R}$ is already the claim, since there $(x,y)$ is real. Over $\mathbb{C}$, apply the same identity with $iy$ in place of $y$ and use conjugate-homogeneity, $(x,iy) = \overline{i}(x,y) = -i(x,y)$:
$$
\lVert x+iy\rVert^2-\lVert x-iy\rVert^2 = 4\operatorname{Re}\bigl(-i(x,y)\bigr) = 4\operatorname{Im}(x,y),
$$
because $-i(u+iv) = v-iu$ has real part $v$. Adding $i$ times the second display to the first gives $4\operatorname{Re}(x,y)+4i\operatorname{Im}(x,y) = 4(x,y)$. For the last clause, if two inner products induce the same norm then the right-hand sides agree, so the products agree.

**Part 7, the easy direction.** A norm induced by an inner product satisfies the identity of part 5, which was just proved from the axioms alone.

**Part 7, the converse: the real case.** This is the Jordan-von Neumann theorem, stated as Problem 4(b) of :cite[Reed and Simon]{work=reed-simon-1980 loc="p. 63"}; here is the construction. Let $\lVert\cdot\rVert$ be a norm on $W$ satisfying the parallelogram identity, and define the real-valued
$$
s(x,y) = \tfrac14\bigl(\lVert x+y\rVert^2-\lVert x-y\rVert^2\bigr),
$$
which is the expression part 6 would have to give. Then $s(x,x) = \tfrac14\lVert 2x\rVert^2 = \lVert x\rVert^2$, so $s$ is positive and vanishes only at $0$; and $s$ is symmetric, since $\lVert y-x\rVert = \lVert{-(x-y)}\rVert = \lVert x-y\rVert$ by homogeneity. Also $s(0,y) = 0$.

*Additivity.* The parallelogram identity in the form $\lVert u\rVert^2+\lVert v\rVert^2 = \tfrac12(\lVert u+v\rVert^2+\lVert u-v\rVert^2)$, applied once with $u = x+z$, $v = y+z$ and once with $u = x-z$, $v = y-z$, gives
$$
\lVert x+z\rVert^2+\lVert y+z\rVert^2 = \tfrac12\bigl(\lVert x+y+2z\rVert^2+\lVert x-y\rVert^2\bigr),
$$
$$
\lVert x-z\rVert^2+\lVert y-z\rVert^2 = \tfrac12\bigl(\lVert x+y-2z\rVert^2+\lVert x-y\rVert^2\bigr).
$$
Subtracting, the terms $\lVert x-y\rVert^2$ cancel and
$$
4s(x,z)+4s(y,z) = \tfrac12\bigl(\lVert x+y+2z\rVert^2-\lVert x+y-2z\rVert^2\bigr) = 2\,s(x+y,\,2z).
$$
Putting $y = 0$ in this and using $s(0,z)=0$ gives $s(x,2z) = 2s(x,z)$ for all $x,z$; substituting that back into the right-hand side turns it into $4s(x+y,z)$. Hence $s(x+y,z) = s(x,z)+s(y,z)$.

*Homogeneity.* Additivity gives $s(kx,y) = k\,s(x,y)$ for $k\in\mathbb{N}$ by induction, and $s(-x,y) = -s(x,y)$ because $s(x,y)+s(-x,y) = s(0,y) = 0$, so the identity holds for every $k\in\mathbb{Z}$. For $q = p/k$ with $p\in\mathbb{Z}$, $k\in\mathbb{N}$, applying it twice gives $k\,s(qx,y) = s(px,y) = p\,s(x,y)$, so $s(qx,y) = q\,s(x,y)$ for every rational $q$. Finally $c\mapsto s(cx,y)$ is continuous, because $\lvert\lVert u\rVert-\lVert v\rVert\rvert\le\lVert u-v\rVert$ (a consequence of the triangle inequality) makes $c\mapsto\lVert cx\pm y\rVert$ continuous; two continuous functions of $c$ that agree on the dense set $\mathbb{Q}$ agree everywhere, so $s(cx,y) = c\,s(x,y)$ for all real $c$. Over $\mathbb{R}$, then, $s$ is a symmetric positive-definite bilinear form with $s(x,x) = \lVert x\rVert^2$: an inner product inducing the given norm.

**Part 7, the converse: the complex case.** Let $W$ be over $\mathbb{C}$. Viewing it as a real vector space, the previous paragraphs give a real-bilinear symmetric $s$ with $s(x,x) = \lVert x\rVert^2$. Homogeneity of the norm gives $\lVert i u\rVert = \lVert u\rVert$, hence $s(ix,iy) = s(x,y)$ for all $x,y$. Define
$$
(x,y) := s(x,y) + i\,s(x,iy).
$$
Four checks finish the proof.
- $s(x,ix) = \tfrac14\bigl(\lvert 1+i\rvert^2-\lvert 1-i\rvert^2\bigr)\lVert x\rVert^2 = 0$, so $(x,x) = \lVert x\rVert^2$, which is $\ge0$ and vanishes only at $x=0$.
- $(x,y)$ is additive in the first slot and $(cx,y) = c\,(x,y)$ for real $c$, both inherited from $s$.
- $s(ix,y) = s\bigl(i(ix),iy\bigr) = s(-x,iy) = -s(x,iy)$, so
$$
(ix,y) = s(ix,y)+i\,s(ix,iy) = -s(x,iy)+i\,s(x,y) = i\bigl(s(x,y)+i\,s(x,iy)\bigr) = i\,(x,y);
$$
together with real homogeneity and additivity this gives $(ax,y) = a(x,y)$ for every $a = \alpha+i\beta\in\mathbb{C}$.
- $s(y,ix) = s\bigl(iy,i(ix)\bigr) = s(iy,-x) = -s(x,iy)$, so $(y,x) = s(y,x)+i\,s(y,ix) = s(x,y)-i\,s(x,iy) = \overline{(x,y)}$.

Hermitian symmetry plus additivity in the first slot gives additivity in the second, so $(\cdot,\cdot)$ satisfies every axiom and induces $\lVert\cdot\rVert$.

**Part 8.** Insert and remove a term, then use the triangle inequality in $\mathbb{F}$ and part 2 twice:
$$
\lvert(x_n,y_n)-(x,y)\rvert = \lvert(x_n,\,y_n-y)+(x_n-x,\,y)\rvert \le \lVert x_n\rVert\,\lVert y_n-y\rVert + \lVert x_n-x\rVert\,\lVert y\rVert .
$$
The sequence $\lVert x_n\rVert$ is bounded, since $\lVert x_n\rVert\le\lVert x\rVert+\lVert x_n-x\rVert$ and the last term tends to $0$; and $\lVert y_n-y\rVert\to0$, $\lVert x_n-x\rVert\to0$ by hypothesis. So the right-hand side tends to $0$. $\square$
:::

:::note[What it means]{provenance=original}
An inner product is the least extra structure that lets you speak of length, angle and perpendicularity, so Euclidean geometry carries over to matrices, functions and sequences. Cauchy-Schwarz is the one inequality that makes this work: it bounds $\cos\theta$ by $1$, yields the triangle inequality, and makes the inner product continuous. The equality cases say when such an estimate is sharp.
:::

:::remark[Where the hypotheses are used, and conventions]{provenance=adapted src="reed-simon-1980:§II.1, p. 37, and Problem 4(b), p. 63; kreyszig-1978:§3.1, p. 130, and §3.2, Lemma 3.2-1 with footnote 2, p. 137; hassani-2013:§2.2 with footnote 8, p. 31, and Thm 2.2.7, p. 35; rhb-2006:§8.1.2, p. 244, and §8.1.3, p. 246; stakgold-holst-2011:§4.5, p. 264"}
- **Which slot is linear.** This handbook follows :cite[Kreyszig]{work=kreyszig-1978 loc="§3.1, p. 130"}: linear in the first slot, conjugate-linear in the second. Much of the physics literature is the reverse — :cite[Hassani]{work=hassani-2013 loc="§2.2, p. 31"}, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.1.2, p. 244"} and :cite[Reed and Simon]{work=reed-simon-1980 loc="§II.1, p. 37"}, who flag the clash explicitly. The two conventions give complex-conjugate values, so $(x,y)$ here is $\langle y\mid x\rangle$ in Dirac notation and part 6 appears conjugated in Reed and Simon's Problem 4(a). Over $\mathbb{R}$ they agree.
- **Equality in Cauchy-Schwarz.** :cite[Kreyszig]{work=kreyszig-1978 loc="§3.2, Lemma 3.2-1(a), p. 137"} phrases this case as "$\{x,y\}$ is a linearly dependent *set*"; part 2 puts it on the pair, because under the definition in :ref[Vector spaces and bases]{to=linalg.vector-spaces-bases} the singleton $\{x\}$ with $x\ne 0$ is independent, so the set form would wrongly exclude $x = y \ne 0$. The pair condition is still symmetric in $x$ and $y$ (if $y = cx$ with $c\ne 0$ then $x = c^{-1}y$), and still covers $y = 0$, where both sides vanish. Part 3's condition is one-sided in appearance only: it too is symmetric, as :cite[Kreyszig]{work=kreyszig-1978 loc="§3.2, footnote 2, p. 137"} points out, since $x = 0$ is the case $c = 0$, and $x = cy$ with $c>0$ gives $y = c^{-1}x$ with $c^{-1}>0$. It has to be, because $\lVert x+y\rVert = \lVert x\rVert+\lVert y\rVert$ is itself symmetric in $x$ and $y$. :cite[Hassani]{work=hassani-2013 loc="Thm 2.2.7, p. 35"} states only the "holds when" direction, though his proof on the same page gives both; the "if and only if" as stated here is Kreyszig's.
- **How much positivity each part needs.** $(x,x)\ge 0$ is what makes $\lVert x\rVert = (x,x)^{1/2}$ real, and it is all that parts 1, 4, 5 and 6 need — they are algebraic identities in a hermitian sesquilinear form — and all that the two *inequalities* of parts 2 and 3 need. The proof below does not quite show the last point, since it divides by $(y,y)$, but one extra line closes the gap. Suppose the form is only semi-definite and $y\neq 0$ has $(y,y) = 0$; we may assume $(x,y)\neq 0$, or there is nothing to prove. In the display of the proof of part 2 the term $\lvert a\rvert^2(y,y)$ now vanishes, so taking $a = t\,(x,y)/\lvert(x,y)\rvert$ with $t>0$ real, for which $\overline{a}(x,y) = t\lvert(x,y)\rvert$ is real, leaves $0\le\lVert x\rVert^2 - 2t\lvert(x,y)\rvert$ for every $t>0$ — impossible unless $\lvert(x,y)\rvert = 0$. Hence $\lvert(x,y)\rvert = 0 = \lVert x\rVert\lVert y\rVert$, Schwarz holds (with equality), and part 3's inequality follows from it and part 1 exactly as written. Strict definiteness is *needed* in exactly three places: the clause "$\lVert\cdot\rVert$ is a norm" in part 3, and the two *equality* characterisations in parts 2 and 3. The proof of part 2 also calls on it for convenience, at "whence $(y,y)>0$ by strict positivity", to divide by $(y,y)$; that is the step the preceding sentences replace. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.1.3, p. 246"} introduce Schwarz and the triangle inequality for "a linear vector space in which $\langle a\mid a\rangle\ge 0$ for all $a$", but this is not a statement under semi-definiteness alone: on p. 244, cited in the first bullet above, they attach to that very condition the assertion that $\langle a\mid a\rangle = 0$ implies $a = 0$, so strict definiteness is in force by the time they reach the inequalities. Take the semi-definite form $(x,y) = x_1\overline{y_1}$ on $\mathbb{F}^2$: there $\lVert(0,1)\rVert = 0$, and $x = (1,0)$, $y = (1,5)$ give $\lvert(x,y)\rvert = 1 = \lVert x\rVert\,\lVert y\rVert$ with neither vector a multiple of the other. Parts 7 and 8 presuppose a norm and the induced metric, so they need it too.
- **What actually breaks Cauchy-Schwarz is indefiniteness.** If $(x,x)$ is allowed to be negative, the inequality itself fails: for $(x,y) = x_1y_1-x_2y_2$ on $\mathbb{R}^2$, the vectors $x = (1,\tfrac12)$ and $y = (1,-\tfrac12)$ give $(x,y) = \tfrac54$ against $\bigl((x,x)(y,y)\bigr)^{1/2} = \tfrac34$. These are :cite[Hassani]{work=hassani-2013 loc="§2.2, p. 31"}'s pseudo-Euclidean products; as his footnote 8 there notes, in the space-time of relativity a nonzero vector can have $(x,x) = 0$. In such a space $\lVert\cdot\rVert$ is not a norm, and $\cos\theta$ is undefined.
- **Not every norm comes from an inner product.** Part 7 is the test: on $\mathbb{F}^2$ the norm $\lvert x_1\rvert+\lvert x_2\rvert$ fails part 5 at $x=(1,0)$, $y=(0,1)$, where the left side is $2^2+2^2 = 8$ and the right side $2+2 = 4$.
- **Completeness is a separate hypothesis.** Nothing above needs it: the polynomials with a weighted inner product form an incomplete inner product space. It enters only where limits must exist, as in :ref[the projection theorem]{to=funcan.projection-theorem}; in :ref[Orthogonal projection and least squares]{to=linalg.projections-least-squares} finite dimension plays that role instead.
:::

:::example[Two polynomials under the weight $e^{-t}$]{provenance=original}
Let $V$ be the real polynomials with the weighted inner product of the third definition block,
$$
(f,g) = \int_0^\infty e^{-t}f(t)g(t)\,\mathrm{d}t ,
$$
whose moments are $\int_0^\infty e^{-t}t^k\,\mathrm{d}t = k!$ for $k = 0,1,2,\dots$ (repeated integration by parts). Take
$$
f(t) = t, \qquad g(t) = 1+t .
$$

**Step 1: the three numbers.** Expanding the integrands into powers of $t$ and reading off factorials,
$$
(f,f) = \int_0^\infty e^{-t}t^2 = 2! = 2, \qquad
(g,g) = \int_0^\infty e^{-t}(1+2t+t^2) = 0!+2\cdot 1!+2! = 5,
$$
$$
(f,g) = \int_0^\infty e^{-t}(t+t^2) = 1!+2! = 3 .
$$
So $\lVert f\rVert = \sqrt2$ and $\lVert g\rVert = \sqrt5$.

**Step 2: Cauchy-Schwarz and the angle.** Part 2 predicts $3 = \lvert(f,g)\rvert\le\sqrt2\cdot\sqrt5 = \sqrt{10} = 3.162277\ldots$, and the inequality is strict, as the equality case requires: $g$ is not a multiple of $f$, since $g(0) = 1$ while $f(0) = 0$. The angle between them is therefore well defined,
$$
\cos\theta = \frac{3}{\sqrt{10}} = 0.9486832\ldots, \qquad \theta = \arctan\tfrac13 = 18.4349^\circ ,
$$
the second form because $\sin\theta = \sqrt{1-9/10} = 1/\sqrt{10}$. Equality *is* attained for a multiple: with $\tilde g = 4f$, $\lvert(f,\tilde g)\rvert = 8 = \sqrt2\cdot 4\sqrt2$.

**Step 3: the triangle inequality.** Here $f+g = 1+2t$ and $f-g = -1$, so
$$
\lVert f+g\rVert^2 = \int_0^\infty e^{-t}(1+4t+4t^2) = 1+4+8 = 13, \qquad \lVert f-g\rVert^2 = \int_0^\infty e^{-t} = 1 .
$$
Thus $\lVert f+g\rVert = \sqrt{13} = 3.605551\ldots$ against $\lVert f\rVert+\lVert g\rVert = \sqrt2+\sqrt5 = 3.650282\ldots$: strict, again as part 3 requires, since $f$ is not a non-negative multiple of $g$.

**Step 4: the two identities.** The parallelogram law of part 5 reads $13+1 = 2\cdot 2+2\cdot 5$, that is $14 = 14$. The real polarization identity of part 6 recovers the product from the four norms already computed:
$$
(f,g) = \tfrac14\bigl(\lVert f+g\rVert^2-\lVert f-g\rVert^2\bigr) = \tfrac14(13-1) = 3 ,
$$
matching step 1.

**Step 5: Pythagoras, and the exact slack in Cauchy-Schwarz.** Subtract from $g$ its component along $f$:
$$
h = g - \frac{(g,f)}{\lVert f\rVert^2}\,f = (1+t) - \tfrac32 t = 1 - \tfrac{t}{2} .
$$
Then $(h,f) = \int_0^\infty e^{-t}\bigl(t-\tfrac12 t^2\bigr) = 1-1 = 0$, so $g = \tfrac32 f + h$ is an orthogonal decomposition and part 4 applies:
$$
\lVert g\rVert^2 = \tfrac94\lVert f\rVert^2 + \lVert h\rVert^2 = \tfrac94\cdot 2 + \lVert h\rVert^2 ,
$$
and indeed $\lVert h\rVert^2 = \int_0^\infty e^{-t}\bigl(1-t+\tfrac14 t^2\bigr) = 1-1+\tfrac12 = \tfrac12$, which gives $\tfrac92+\tfrac12 = 5$, the value of $\lVert g\rVert^2$ from step 1. This $\lVert h\rVert^2$ is exactly the slack in the proof of part 2: there the key display was $\lVert x-ay\rVert^2 = \lVert x\rVert^2-\lvert(x,y)\rvert^2/\lVert y\rVert^2$, and here
$$
\lVert h\rVert^2 = \lVert g\rVert^2-\frac{(f,g)^2}{\lVert f\rVert^2} = 5 - \frac{9}{2} = \frac12 .
$$
Multiplying by $\lVert f\rVert^2 = 2$ turns this into $\lVert f\rVert^2\lVert g\rVert^2-(f,g)^2 = 10-9 = 1$: the inequality of part 2 misses equality by precisely the squared length of the orthogonal remainder.
:::

:::application{provenance=original}
**The correlation coefficient cannot exceed one, and that is Cauchy-Schwarz.** For two data series $x,y\in\mathbb{R}^N$ with their means subtracted, the sample correlation is
$$
r = \frac{(x,y)}{\lVert x\rVert\,\lVert y\rVert} = \frac{\sum_i x_iy_i}{\bigl(\sum_i x_i^2\bigr)^{1/2}\bigl(\sum_i y_i^2\bigr)^{1/2}},
$$
so $\lvert r\rvert\le 1$ by part 2 — with $r$ being exactly $\cos\theta$ for the angle of the second definition block. The equality case is informative rather than a curiosity: $\lvert r\rvert = 1$ says $y = cx$, that is that the two series are related exactly linearly, which in practice flags a duplicated or rescaled variable rather than a discovery. The same statement for random variables, $\lvert\operatorname{Cov}(X,Y)\rvert\le\sigma_X\sigma_Y$, is part 2 for the form $(X,Y) = \mathbb{E}[(X-\mathbb{E}X)(Y-\mathbb{E}Y)]$, which is only positive *semi*-definite — its null vectors are the almost-surely constant variables — so the inequality holds while the equality characterisation needs the degenerate cases handled separately, exactly as the remark above describes.

**Quantum mechanics needs both the inequality and its equality case.** States are unit vectors in a complex inner product space, and the Born rule assigns the number $\lvert(\psi,\varphi)\rvert^2$ to a measurement outcome; part 2 is what keeps that number in $[0,1]$, so probabilities are probabilities. The Robertson uncertainty relation goes further. Writing $a = (A-\langle A\rangle)\psi$ and $b = (B-\langle B\rangle)\psi$ for two observables, the variances are $\lVert a\rVert^2$ and $\lVert b\rVert^2$, and part 2 gives
$$
\sigma_A\sigma_B = \lVert a\rVert\,\lVert b\rVert \ \ge\ \lvert(a,b)\rvert\ \ge\ \lvert\operatorname{Im}(a,b)\rvert = \tfrac12\bigl\lvert\langle[A,B]\rangle\bigr\rvert ,
$$
which for position and momentum is $\sigma_x\sigma_p\ge\hbar/2$. The states that achieve the bound are then read off from the equality cases: part 2 forces $b = ca$ for a scalar $c$, and the second inequality forces $c$ to be purely imaginary. For $x$ and $p$ that proportionality is a first-order differential equation whose solutions are the Gaussian wave packets — so the minimum-uncertainty states are identified by the equality clause, not by the inequality.

**Why the parallelogram law matters in analysis.** Part 7 is a sharp test that separates the inner-product norms from all others, and that separation has consequences: the $L^2$ norm satisfies it and the $L^p$ norms for $p\neq2$ do not. Every argument that projects a function onto a subspace and keeps the orthogonal remainder — least squares, Fourier coefficients as best approximations, the energy method for elliptic problems — runs on the geometry of this unit and is therefore available in $L^2$ and not in $L^1$ or $L^\infty$ (:ref[]{to=funcan.hilbert-spaces}, :ref[]{to=fourier.parseval-mean-square}). That is the practical reason the mean-square norm is the one physicists almost always choose.
:::
