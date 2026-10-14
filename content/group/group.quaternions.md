---
id: group.quaternions
title: Quaternions
kind: definition
level: core
summary: Defines the quaternion algebra with its conjugate and norm, shows it is a division algebra, and proves that conjugation by a unit quaternion is a rotation of three-space, giving the two-to-one map onto SO(3) and the identification of the unit quaternions with SU(2).
prereqs: [group.groups-subgroups, group.homomorphisms-quotients, linalg.linear-maps-matrices, linalg.unitary-orthogonal-matrices, vcalc.vector-algebra]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§3.1, Example 3.1.16 and the discussion following it, pp. 69-70, including Eq. (3.6)"
    pages: "69-70"
    role: the quaternion algebra as R^4 with given structure constants; real and pure parts; the conjugate; the product in dot- and cross-product form; the absolute value and the inverse; H is a division algebra
  - work: dummit-foote-2004
    loc: "§7.1, Example 5 (the real Hamilton Quaternions), pp. 224-225, and the definition of a division ring, p. 224"
    pages: "224-225"
    role: the relations among i, j, k; the explicit inverse of a nonzero quaternion; H as a non-commutative division ring
  - work: lee-2013
    loc: "Problems 7-22 and 7-23, p. 173, and Problem 21-21, p. 562"
    pages: "173, 562"
    role: the inner product and the multiplicativity of the norm; the unit quaternions as a group isomorphic to SU(2); conjugation by a unit quaternion as a map of the imaginary quaternions giving a surjection onto SO(3) with kernel plus-or-minus one
  - work: arfken-2013
    loc: "Exercise 2.2.9 and the remark following it, p. 116, and Exercise 2.2.11, pp. 116-117"
    pages: "116-117"
    role: a 4x4 real matrix model of i, j, k; the statement that four 2x2 matrices built from the Pauli matrices are an alternative basis; the Pauli matrix relations
---

:::definition[The quaternion algebra]{provenance=adapted src="hassani-2013:§3.1, Example 3.1.16, p. 69; dummit-foote-2004:§7.1, Example 5, pp. 224-225"}
The **quaternions** $\mathbb{H}$ are the four-dimensional real vector space with basis $1, i, j, k$,
$$
q = a + bi + cj + dk, \qquad a,b,c,d \in \mathbb{R},
$$
made into a ring by extending the following products bilinearly over $\mathbb{R}$: $1$ is the identity, and
$$
i^2 = j^2 = k^2 = -1, \qquad ij = -ji = k, \quad jk = -kj = i, \quad ki = -ik = j .
$$
Multiplication is associative and, because $ij \neq ji$, not commutative. Hassani gives the same algebra as $\mathbb{R}^4$ with structure constants $e_i e_j = \sum_k \varepsilon_{ijk} e_k$ for $i \ne j$ in $\{1,2,3\}$, the Levi-Civita symbol encoding the three cyclic relations at once :cite{work=hassani-2013 loc="Example 3.1.16, p. 69"}.

Write $q = a + \mathbf{v}$, where $a = \operatorname{Re} q$ is the **real part** and $\mathbf{v} = (b,c,d)$, identified with $bi + cj + dk$, is the **pure** (or imaginary) part; $q$ is **real** if $\mathbf{v} = 0$ and **pure** if $a = 0$. The pure quaternions form a copy of $\mathbb{R}^3$ inside $\mathbb{H}$, which we write $\operatorname{Im}\mathbb{H}$.

The **conjugate** and **norm** are
$$
q^* = a - \mathbf{v}, \qquad |q| = \sqrt{q q^*} .
$$
That $qq^*$ is a non-negative real number, so that the square root makes sense, is part 2 of the statement below.

In this notation the product takes the form given by :cite{work=hassani-2013 loc="Eq. (3.6), p. 69"}: for $q = a + \mathbf{v}$ and $p = e + \mathbf{w}$,
$$
qp = \bigl(ae - \mathbf{v}\cdot\mathbf{w}\bigr) + \bigl(a\mathbf{w} + e\mathbf{v} + \mathbf{v}\times\mathbf{w}\bigr) ,
$$
the first bracket being the real part and the second the pure part. The quaternion product thus contains both products of vector algebra (:ref[]{to=vcalc.vector-algebra}) at once; indeed for two *pure* quaternions $\mathbf{v}, \mathbf{w}$ it reads $\mathbf{v}\mathbf{w} = -\mathbf{v}\cdot\mathbf{w} + \mathbf{v}\times\mathbf{w}$.
:::

:::statement[Conjugate, norm, and the division property]{provenance=adapted src="hassani-2013:pp. 69-70; dummit-foote-2004:§7.1, Example 5, p. 225; lee-2013:Problem 7-22, p. 173"}
Let $p, q \in \mathbb{H}$ and write $q = a + bi + cj + dk$.

1. $(pq)^* = q^*p^*$, and $(q^*)^* = q$. Conjugation is $\mathbb{R}$-linear.
2. $qq^* = q^*q = a^2 + b^2 + c^2 + d^2$, a non-negative real number, so $|q|$ is the Euclidean length of $(a,b,c,d)$ and $|q| = 0$ only for $q = 0$.
3. $|pq| = |p|\,|q|$.
4. Every $q \neq 0$ has the two-sided inverse
$$
q^{-1} = \frac{q^*}{|q|^2} = \frac{a - bi - cj - dk}{a^2+b^2+c^2+d^2} .
$$
Hence $\mathbb{H}$ is a non-commutative **division ring**, and as an $\mathbb{R}$-algebra a **division algebra** :cite{work=dummit-foote-2004 loc="p. 224"} :cite{work=hassani-2013 loc="p. 70"}.
5. The **unit quaternions** $\mathrm{Sp}(1) = \{\, q \in \mathbb{H} : |q| = 1 \,\}$ form a group under multiplication, and as a set they are the unit sphere $S^3 \subset \mathbb{R}^4$.
:::

:::idea{provenance=original}
Everything follows from the single identity $qq^* = |q|^2$, which is the statement that the cross terms cancel: in $(a + \mathbf{v})(a - \mathbf{v})$ the pure part is $-a\mathbf{v} + a\mathbf{v} + \mathbf{v}\times(-\mathbf{v}) = 0$ and the real part is $a^2 + \mathbf{v}\cdot\mathbf{v}$. Once $qq^* = |q|^2$ is known, dividing by $|q|^2$ gives the inverse, and multiplicativity of the norm is the same identity applied to a product, using only that conjugation reverses order.
:::

:::proof{provenance=adapted src="hassani-2013:pp. 69-70; lee-2013:Problem 7-22, p. 173"}
**Part 1.** Conjugation is $\mathbb{R}$-linear and fixes $1$ while negating $i, j, k$, so $(q^*)^* = q$ is immediate. For the reversal, both sides of $(pq)^* = q^*p^*$ are $\mathbb{R}$-bilinear in $(p, q)$, so it is enough to check it on the basis $1, i, j, k$. If either argument is $1$ it is trivial. For two distinct basis elements, say $p = i$, $q = j$: the left side is $(ij)^* = k^* = -k$, and the right side is $j^*i^* = (-j)(-i) = ji = -k$; the other five ordered pairs are the same computation with the indices cycled or the roles exchanged. For $p = q = i$: $(i^2)^* = (-1)^* = -1$ and $i^*i^* = (-i)(-i) = i^2 = -1$; likewise for $j$ and $k$. This is Lee's Problem 7-22(b).

**Part 2.** Put $p = q^*$ in the product formula of the definition, so $e = a$ and $\mathbf{w} = -\mathbf{v}$:
$$
qq^* = \bigl(a\cdot a - \mathbf{v}\cdot(-\mathbf{v})\bigr) + \bigl(a(-\mathbf{v}) + a\mathbf{v} + \mathbf{v}\times(-\mathbf{v})\bigr) = a^2 + |\mathbf{v}|^2 ,
$$
since $\mathbf{v}\times\mathbf{v} = 0$ and the two terms $\pm a\mathbf{v}$ cancel. Exchanging the roles of $q$ and $q^*$ changes the sign of both $a\mathbf{v}$ terms and of the cross product, which was already zero, so $q^*q$ is the same real number. Writing it out, $a^2 + |\mathbf{v}|^2 = a^2+b^2+c^2+d^2$, which vanishes only when all four coordinates do.

**Part 3.** Using associativity, part 1 and part 2, and the fact that $|q|^2$ is a *real* number and therefore commutes with everything,
$$
|pq|^2 = (pq)(pq)^* = p q q^* p^* = p\,|q|^2\,p^* = |q|^2\,pp^* = |q|^2|p|^2 .
$$
Taking non-negative square roots gives $|pq| = |p||q|$. This is the norm statement of Lee's Problem 7-22(c).

**Part 4.** For $q \neq 0$, part 2 gives $|q|^2 > 0$, so $q^*/|q|^2$ makes sense, and
$$
q\cdot\frac{q^*}{|q|^2} = \frac{qq^*}{|q|^2} = 1, \qquad \frac{q^*}{|q|^2}\cdot q = \frac{q^*q}{|q|^2} = 1 ,
$$
a two-sided inverse. Since $\mathbb{H}$ has the identity $1 \ne 0$ and every nonzero element is invertible, it is a division ring; it is not commutative because $ij = k \ne -k = ji$. This is the inverse displayed by :cite{work=dummit-foote-2004 loc="p. 225"}.

**Part 5.** If $|p| = |q| = 1$ then $|pq| = 1$ by part 3 and $|q^{-1}| = |q^*|/|q|^2 = 1$, because $|q^*| = |q|$ by part 2. The set is non-empty ($1$ belongs to it), so it is a subgroup of the multiplicative group of nonzero quaternions (:ref[]{to=group.groups-subgroups}). By part 2 the condition $|q| = 1$ is $a^2+b^2+c^2+d^2 = 1$, the unit sphere of $\mathbb{R}^4$. $\square$
:::

:::statement[Unit quaternions as rotations]{provenance=adapted src="lee-2013:Problem 21-21, p. 562"}
For $q \in \mathrm{Sp}(1)$ define $\rho(q) : \operatorname{Im}\mathbb{H} \to \mathbb{H}$ by
$$
\rho(q)\,\mathbf{v} = q\,\mathbf{v}\,q^* .
$$
Then:

1. $\rho(q)$ maps $\operatorname{Im}\mathbb{H} \cong \mathbb{R}^3$ into itself and preserves the Euclidean inner product there, so $\rho(q) \in \mathrm{O}(3)$ in the basis $i, j, k$.
2. Write $q = \cos\tfrac{\theta}{2} + \sin\tfrac{\theta}{2}\,\hat{\mathbf{n}}$ with $\hat{\mathbf{n}}$ a unit pure quaternion and $\theta \in \mathbb{R}$; every unit quaternion has this form. Then $\rho(q)$ is the **rotation by the angle $\theta$ about the axis $\hat{\mathbf{n}}$**, in the right-handed sense. In particular $\det\rho(q) = +1$, so $\rho(q) \in \mathrm{SO}(3)$, and
$$
\operatorname{tr}\rho(q) = 1 + 2\cos\theta = 4(\operatorname{Re}q)^2 - 1 .
$$
3. $\rho : \mathrm{Sp}(1) \to \mathrm{SO}(3)$ is a surjective group homomorphism with kernel $\{+1, -1\}$. Thus $q$ and $-q$ give the same rotation and nothing else does, and $\mathrm{SO}(3) \cong \mathrm{Sp}(1)/\{\pm1\}$.
4. $\mathrm{Sp}(1) \cong \mathrm{SU}(2)$ as groups, by
$$
1 \mapsto I, \quad i \mapsto -i\sigma_1, \quad j \mapsto -i\sigma_2, \quad k \mapsto -i\sigma_3,
\qquad
a + bi + cj + dk \ \longmapsto\ \begin{pmatrix} a - id & -c - ib \\ c - ib & a + id\end{pmatrix},
$$
where $\sigma_1, \sigma_2, \sigma_3$ are the Pauli matrices. Under this map $|q|^2$ becomes the determinant and $q^*$ the conjugate transpose.
:::

:::idea{provenance=original}
Why $q\mathbf{v}q^*$ and not $q\mathbf{v}$? Left multiplication by a unit quaternion is a rotation of $\mathbb{R}^4$, not of $\mathbb{R}^3$: it moves the real axis. Sandwiching fixes that, because $q1q^* = 1$ pins the real axis down, and what is left is a length-preserving map of the orthogonal complement, which is $\operatorname{Im}\mathbb{H}$. Then only one computation is needed: $q$ commutes with its own pure part, so $\rho(q)$ fixes the axis $\hat{\mathbf{n}}$, and on the plane perpendicular to it the two half-angle factors $\cos\tfrac\theta2 \pm \sin\tfrac\theta2\hat{\mathbf{n}}$ act on the same side and add, producing the full angle $\theta$. The half-angle is also why $q$ and $-q$ agree: changing $\theta$ by $2\pi$ changes $q$ by a sign but changes the rotation not at all.
:::

:::proof{provenance=adapted src="lee-2013:Problem 21-21, p. 562"}
Throughout, $q$ is a unit quaternion, so $q^* = q^{-1}$ by part 4 of the previous statement.

**Step 1: $\rho(q)$ preserves $\operatorname{Im}\mathbb{H}$.** A quaternion $x$ is pure exactly when $x^* = -x$: writing $x = a + \mathbf{v}$, the condition $a - \mathbf{v} = -a - \mathbf{v}$ says $a = -a$, that is $a = 0$. For pure $\mathbf{v}$,
$$
(q\mathbf{v}q^*)^* = (q^*)^*\mathbf{v}^*q^* = q(-\mathbf{v})q^* = -\,q\mathbf{v}q^* ,
$$
using the order-reversal of part 1 twice. So $q\mathbf{v}q^*$ is pure. It is $\mathbb{R}$-linear in $\mathbf{v}$ because quaternion multiplication is $\mathbb{R}$-bilinear.

**Step 2: it preserves lengths, hence lies in $\mathrm{O}(3)$.** By multiplicativity of the norm and $|q^*| = |q| = 1$,
$$
|q\mathbf{v}q^*| = |q|\,|\mathbf{v}|\,|q^*| = |\mathbf{v}| .
$$
For a pure quaternion $|\mathbf{v}|$ is the Euclidean length of the vector $(b,c,d)$, so $\rho(q)$ is a linear map of $\mathbb{R}^3$ preserving the norm; by the characterisation of orthogonal matrices (:ref[]{to=linalg.unitary-orthogonal-matrices}, part 4) its matrix in the orthonormal basis $i,j,k$ is orthogonal. This is the inner-product statement of Lee's Problem 21-21(a).

**Step 3: every unit quaternion has the stated form.** Write $q = a + \mathbf{v}$ with $a^2 + |\mathbf{v}|^2 = 1$. Then $a \in [-1,1]$, so there is a unique $\theta \in [0, 2\pi]$ with $a = \cos\tfrac\theta2$, and for that $\theta$ we have $\tfrac\theta2 \in [0,\pi]$, hence $\sin\tfrac\theta2 \ge 0$ and $|\mathbf{v}| = \sqrt{1-a^2} = \sin\tfrac\theta2$. Set $\hat{\mathbf{n}} = \mathbf{v}/|\mathbf{v}|$ when $\mathbf{v} \neq 0$; when $\mathbf{v} = 0$ the quaternion is $\pm1$, $\theta$ is $0$ or $2\pi$, and any unit $\hat{\mathbf{n}}$ will do. Note $\hat{\mathbf{n}}^2 = -\hat{\mathbf{n}}\cdot\hat{\mathbf{n}} + \hat{\mathbf{n}}\times\hat{\mathbf{n}} = -1$ by the product formula.

**Step 4: the axis is fixed.** Abbreviate $c = \cos\tfrac\theta2$, $s = \sin\tfrac\theta2$, so $q = c + s\hat{\mathbf{n}}$ and $q^* = c - s\hat{\mathbf{n}}$. Since $\hat{\mathbf{n}}$ commutes with itself and with the real number $c$, it commutes with $q$, and therefore
$$
\rho(q)\hat{\mathbf{n}} = q\hat{\mathbf{n}}q^* = \hat{\mathbf{n}}qq^* = \hat{\mathbf{n}} .
$$
**Step 5: the perpendicular plane turns by $\theta$.** Let $\mathbf{u}$ be a unit pure quaternion with $\mathbf{u}\cdot\hat{\mathbf{n}} = 0$, and put $\mathbf{w} = \hat{\mathbf{n}}\times\mathbf{u}$, so that $(\hat{\mathbf{n}}, \mathbf{u}, \mathbf{w})$ is a right-handed orthonormal frame. The product formula for two pure quaternions gives
$$
\hat{\mathbf{n}}\mathbf{u} = -\hat{\mathbf{n}}\cdot\mathbf{u} + \hat{\mathbf{n}}\times\mathbf{u} = \mathbf{w},
\qquad
\mathbf{u}\hat{\mathbf{n}} = \mathbf{u}\times\hat{\mathbf{n}} = -\mathbf{w} ,
$$
so $\mathbf{u}$ **anticommutes** with $\hat{\mathbf{n}}$. Hence $\mathbf{u}q^* = \mathbf{u}(c - s\hat{\mathbf{n}}) = (c + s\hat{\mathbf{n}})\mathbf{u} = q\mathbf{u}$, and
$$
\rho(q)\mathbf{u} = q\mathbf{u}q^* = q^2\mathbf{u} = (c + s\hat{\mathbf{n}})^2\,\mathbf{u} = \bigl(c^2 - s^2 + 2cs\,\hat{\mathbf{n}}\bigr)\mathbf{u}
= \cos\theta\,\mathbf{u} + \sin\theta\,\hat{\mathbf{n}}\mathbf{u} = \cos\theta\,\mathbf{u} + \sin\theta\,\mathbf{w} ,
$$
using $\hat{\mathbf{n}}^2 = -1$ and the double-angle formulas $c^2 - s^2 = \cos\theta$, $2cs = \sin\theta$. The same computation with $\mathbf{w}$ in place of $\mathbf{u}$, noting $\hat{\mathbf{n}}\mathbf{w} = \hat{\mathbf{n}}\times(\hat{\mathbf{n}}\times\mathbf{u}) = -\mathbf{u}$, gives $\rho(q)\mathbf{w} = -\sin\theta\,\mathbf{u} + \cos\theta\,\mathbf{w}$. So in the frame $(\hat{\mathbf{n}}, \mathbf{u}, \mathbf{w})$ the matrix of $\rho(q)$ is $\operatorname{diag}(1, R(\theta))$: the rotation by $\theta$ about $\hat{\mathbf{n}}$. Its determinant is $+1$ and its trace is $1 + 2\cos\theta$, which equals $1 + 2(2c^2 - 1) = 4c^2 - 1 = 4(\operatorname{Re}q)^2 - 1$. This proves parts 1 and 2.

**Step 6: homomorphism.** For unit $p, q$ and pure $\mathbf{v}$, using $(pq)^* = q^*p^*$,
$$
\rho(pq)\mathbf{v} = (pq)\mathbf{v}(pq)^* = p\,(q\mathbf{v}q^*)\,p^* = \rho(p)\bigl(\rho(q)\mathbf{v}\bigr) ,
$$
so $\rho(pq) = \rho(p)\rho(q)$.

**Step 7: surjectivity.** Every element of $\mathrm{SO}(3)$ is a rotation about some axis through some angle: by the real canonical form of an orthogonal matrix (:ref[]{to=linalg.unitary-orthogonal-matrices}, part 3) a $Q \in \mathrm{SO}(3)$ is orthogonally similar to $\operatorname{diag}(1, R(\theta))$, the $+1$ eigenvector being the axis. Given that axis $\hat{\mathbf{n}}$ and angle $\theta$, step 5 shows $q = \cos\tfrac\theta2 + \sin\tfrac\theta2\hat{\mathbf{n}}$ has $\rho(q) = Q$.

**Step 8: the kernel.** Suppose $\rho(q) = I$, i.e. $q\mathbf{v} = \mathbf{v}q$ for every pure $\mathbf{v}$. With $q = a + \mathbf{t}$ the product formula gives $q\mathbf{v} - \mathbf{v}q = 2\,\mathbf{t}\times\mathbf{v}$, which vanishes for all $\mathbf{v}$ only if $\mathbf{t} = 0$: if $\mathbf{t} \ne 0$, take $\mathbf{v}$ perpendicular to $\mathbf{t}$ and non-zero, and then $|\mathbf{t}\times\mathbf{v}| = |\mathbf{t}||\mathbf{v}| \ne 0$. So $q = a$ is real, and $|q| = 1$ forces $a = \pm1$. Conversely $\rho(\pm1) = I$. Hence $\ker\rho = \{\pm1\}$, and the first isomorphism theorem (:ref[]{to=group.homomorphisms-quotients}) gives $\mathrm{SO}(3) \cong \mathrm{Sp}(1)/\{\pm1\}$. This is Lee's Problem 21-21(b),(c).

**Step 9: part 4, the Pauli form.** With the Pauli matrices
$$
\sigma_1 = \begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad
\sigma_2 = \begin{pmatrix}0&-i\\i&0\end{pmatrix}, \qquad
\sigma_3 = \begin{pmatrix}1&0\\0&-1\end{pmatrix},
$$
we have $\sigma_m^2 = I$ and $\sigma_1\sigma_2 = i\sigma_3$ with its cyclic images. Put $\hat\imath = -i\sigma_1$, $\hat\jmath = -i\sigma_2$, $\hat k = -i\sigma_3$. Then
$$
\hat\imath^{\,2} = (-i)^2\sigma_1^2 = -I, \qquad
\hat\imath\hat\jmath = (-i)^2\sigma_1\sigma_2 = -\,i\sigma_3 = \hat k ,
$$
and cyclically, so these three matrices satisfy the defining relations of $i, j, k$. Since $I, \hat\imath, \hat\jmath, \hat k$ are linearly independent over $\mathbb{R}$, the $\mathbb{R}$-linear extension is an injective algebra homomorphism, and multiplying out gives the displayed $2\times2$ matrix $A(q)$. A direct computation gives $\det A(q) = (a-id)(a+id) - (-c-ib)(c-ib) = a^2 + d^2 + c^2 + b^2 = |q|^2$ and $A(q)^\dagger A(q) = |q|^2 I$. Hence $|q| = 1$ if and only if $A(q)$ is unitary with determinant $1$, that is $A(q) \in \mathrm{SU}(2)$. Conversely every element of $\mathrm{SU}(2)$ has the form
$$
\begin{pmatrix}\alpha & \beta \\ -\bar\beta & \bar\alpha\end{pmatrix}
\qquad\text{with}\qquad |\alpha|^2+|\beta|^2 = 1 ,
$$
and setting $\alpha = a - id$, $\beta = -c - ib$ recovers a unit quaternion. So $A$ restricts to a group isomorphism $\mathrm{Sp}(1) \to \mathrm{SU}(2)$, which is Lee's Problem 7-23. $\square$
:::

:::remark[Where the hypotheses are used, and the conventions]{provenance=original}
**$|q| = 1$ is used only for tidiness.** Steps 1 and 6 need nothing. Step 2 needs $|q||q^*| = 1$; for a general $q \neq 0$ the map $\mathbf{v}\mapsto q\mathbf{v}q^*$ scales lengths by $|q|^2$, so it is a rotation composed with a dilation. Replacing $q^*$ by $q^{-1} = q^*/|q|^2$ removes the dilation, and $\mathbf{v}\mapsto q\mathbf{v}q^{-1}$ is a rotation for *every* nonzero $q$, depending only on $q$ up to a real scalar. Normalising to $|q|=1$ cuts that freedom down to the sign, which is what makes the kernel exactly $\{\pm1\}$.

**$\mathbf{v}$ must be pure.** $\rho(q)$ is defined on $\operatorname{Im}\mathbb{H}$. The same formula applied to all of $\mathbb{H}$ fixes the real axis pointwise, since $q1q^* = qq^* = 1$, so in the frame $(1, \hat{\mathbf{n}}, \mathbf{u}, \mathbf{w})$ of step 5 it is $\operatorname{diag}(1, 1, R(\theta))$ — the rotation of $\mathbb{R}^3$ padded with a $1$, not a rotation of $\mathbb{R}^4$ by $\theta$.

**The half-angle is not a convention, it is forced.** The two factors $q$ and $q^*$ each contribute $\theta/2$ on the perpendicular plane, as step 5 shows. A consequence is the two-to-one covering: a continuous path of rotations that returns to the identity after a $2\pi$ turn lifts to a path of quaternions ending at $-1$, and only after $4\pi$ does the quaternion return to $+1$. This is the quaternionic form of the spinor sign change; the Lie-theoretic version, with $\mathrm{SU}(2)$ as the universal cover of $\mathrm{SO}(3)$, is :ref[]{to=group.so3-su2}.

**Two sign conventions for the Pauli identification.** We use $i \mapsto -i\sigma_1$, $j\mapsto -i\sigma_2$, $k \mapsto -i\sigma_3$. :cite{work=arfken-2013 loc="Exercise 2.2.9, p. 116"} records instead that $1, i\sigma_1, i\sigma_2, -i\sigma_3$ form a basis for the quaternions, which amounts to $i\mapsto i\sigma_1$, $j\mapsto i\sigma_2$, $k\mapsto -i\sigma_3$. Both satisfy the relations — check $(i\sigma_1)(i\sigma_2) = -\sigma_1\sigma_2 = -i\sigma_3$ — and the two differ by the automorphism of $\mathbb{H}$ that negates $i$ and $j$ and fixes $k$. Neither is more correct; we state ours and use it consistently, and a reader comparing with Arfken, Weber and Harris should expect signs on $i$ and $j$ to differ.

**Lee's statements are in his problem sets.** Parts 3 and 5 of "Conjugate, norm and the division property" and parts 3 and 4 of "Unit quaternions as rotations" follow :cite{work=lee-2013 loc="Problems 7-22, 7-23, p. 173, and 21-21, p. 562"}, where they are posed as exercises with the route indicated rather than proved in the text. The proofs above are written out here.

**$\mathbb{H}$ is not an algebra over $\mathbb{C}$.** It is four-dimensional over $\mathbb{R}$, and the copy of $\mathbb{C}$ it contains (say $\mathbb{R} + \mathbb{R}i$) is not central: $j i = -ij$. So one cannot "factor out $i$" and treat $\mathbb{H}$ as two-dimensional over $\mathbb{C}$ in the algebra sense, although the matrix form of part 4 writes a quaternion using two complex numbers.
:::

:::method[Computing with quaternions]{provenance=original}
To rotate, compose and convert:

1. **Axis and angle to quaternion.** For a right-handed rotation by $\theta$ about the unit vector $\hat{\mathbf{n}} = (n_1,n_2,n_3)$, set
$$
q = \cos\tfrac{\theta}{2} + \sin\tfrac{\theta}{2}\,(n_1 i + n_2 j + n_3 k) .
$$
2. **Apply it.** Write the vector $\mathbf{x}$ as the pure quaternion $x_1i + x_2j + x_3k$ and compute $q\mathbf{x}q^*$, reading the rotated vector off the pure part. Writing $q = c + \mathbf{u}$ with $c = \cos\tfrac\theta2$ and $\mathbf{u} = \sin\tfrac\theta2\,\hat{\mathbf{n}}$, applying the product formula twice gives the expanded form
$$
\rho(q)\mathbf{x} = \mathbf{x} + 2c\,(\mathbf{u}\times\mathbf{x}) + 2\,\mathbf{u}\times(\mathbf{u}\times\mathbf{x}) ,
$$
which costs far fewer operations than building a matrix for a single vector.
3. **Compose.** "First $q_1$, then $q_2$" is the single quaternion $q_2q_1$ — the same order as matrices, because $\rho$ is a homomorphism. Multiplying two quaternions costs $16$ real multiplications against $27$ for two $3\times3$ matrices.
4. **Quaternion to matrix.** For $q = a + bi + cj + dk$ with $|q| = 1$,
$$
\rho(q) = \begin{pmatrix}
a^2+b^2-c^2-d^2 & 2(bc - ad) & 2(bd + ac) \\
2(bc + ad) & a^2-b^2+c^2-d^2 & 2(cd - ab) \\
2(bd - ac) & 2(cd + ab) & a^2-b^2-c^2+d^2
\end{pmatrix}.
$$
5. **Matrix to axis and angle.** From $\operatorname{tr}\rho(q) = 1 + 2\cos\theta$ get $\theta$, then solve $(\rho(q) - I)\hat{\mathbf{n}} = 0$ for the axis and fix its sign so that the rotation is right-handed. Then use step 1.
6. **Renormalise.** After many compositions, numerical drift makes $|q|$ differ from $1$; divide by $|q|$. This is one division of four numbers, against the Gram-Schmidt re-orthogonalisation (:ref[]{to=linalg.gram-schmidt}) a drifting rotation matrix would need.
:::

:::example[A 120-degree rotation, and composing two quarter turns]{provenance=original}
**Part A: $q = \tfrac12(1 + i + j + k)$.** Its norm is
$$
|q|^2 = \tfrac14(1 + 1 + 1 + 1) = 1 ,
$$
so $q$ is a unit quaternion. Its real part is $\cos\tfrac\theta2 = \tfrac12$, giving $\theta/2 = 60^\circ$ and $\theta = 120^\circ$; its pure part has length $\sqrt{3}/2 = \sin 60^\circ$, so the axis is
$$
\hat{\mathbf{n}} = \frac{(i+j+k)/2}{\sqrt3/2} = \frac{i+j+k}{\sqrt3} ,
$$
the body diagonal of the cube. Check the action on the basis vectors. Using $q^* = \tfrac12(1 - i - j - k)$ and the relations,
$$
qi = \tfrac12(i + i^2 + ji + ki) = \tfrac12(-1 + i + j - k) ,
$$
using $i^2 = -1$, $ji = -k$ and $ki = j$. Multiplying on the right by $q^*$,
$$
qiq^* = \tfrac14(-1 + i + j - k)(1 - i - j - k) .
$$
Expanding the sixteen terms and sorting them by basis element:

| | $1$ | $-i$ | $-j$ | $-k$ |
|---|---|---|---|---|
| $-1$ | $-1$ | $+i$ | $+j$ | $+k$ |
| $+i$ | $+i$ | $+1$ | $-k$ | $+j$ |
| $+j$ | $+j$ | $+k$ | $+1$ | $-i$ |
| $-k$ | $-k$ | $+j$ | $-i$ | $-1$ |

The real entries are $-1+1+1-1 = 0$; the $i$ entries are $+i+i-i-i = 0$; the $k$ entries are $+k-k+k-k = 0$; and the $j$ entries are $j+j+j+j = 4j$. Hence $qiq^* = \tfrac14\cdot 4j = j$. The same computation cyclically gives
$$
\rho(q): \quad i \mapsto j, \qquad j \mapsto k, \qquad k \mapsto i ,
$$
so in the basis $(i,j,k)$
$$
\rho(q) = \begin{pmatrix} 0&0&1\\ 1&0&0\\ 0&1&0 \end{pmatrix} ,
$$
the cyclic permutation of the coordinate axes — which is indeed the rotation by $120^\circ$ about $(1,1,1)/\sqrt3$. Two checks: $\det\rho(q) = +1$, and
$$
\operatorname{tr}\rho(q) = 0 = 1 + 2\cos 120^\circ = 1 + 2(-\tfrac12) ,
$$
in agreement with the trace formula, which also reads $4(\operatorname{Re}q)^2 - 1 = 4\cdot\tfrac14 - 1 = 0$. Finally $q^3 = -1$: the rotation has order $3$, the quaternion order $6$, exactly the doubling the kernel $\{\pm1\}$ predicts.

**Part B: a quarter turn about $z$, then a quarter turn about $x$.** Let
$$
q_1 = \cos45^\circ + \sin45^\circ\,k = \tfrac{\sqrt2}{2}(1 + k), \qquad
q_2 = \cos45^\circ + \sin45^\circ\,i = \tfrac{\sqrt2}{2}(1 + i) .
$$
"First $q_1$, then $q_2$" is
$$
q_2q_1 = \tfrac12(1+i)(1+k) = \tfrac12\bigl(1 + k + i + ik\bigr) = \tfrac12(1 + i - j + k) ,
$$
using $ik = -j$. Its norm is $\tfrac12\sqrt{1+1+1+1} = 1$, as it must be. Its real part is $\tfrac12$, so again $\theta = 120^\circ$, now about
$$
\hat{\mathbf{n}} = \frac{(i - j + k)/2}{\sqrt3/2} = \frac{(1,-1,1)}{\sqrt3} .
$$
Verify against the matrices: the quarter turn about $z$ sends $(x,y,z)\mapsto(-y,x,z)$ and the quarter turn about $x$ sends $(x,y,z)\mapsto(x,-z,y)$, so the composite sends
$$
(x,y,z) \ \longmapsto\ (-y, x, z) \ \longmapsto\ (-y, -z, x), \qquad
M = \begin{pmatrix} 0&-1&0\\0&0&-1\\1&0&0\end{pmatrix}.
$$
Its trace is $0 = 1 + 2\cos120^\circ$, confirming the angle, and solving $(M - I)\mathbf{n} = 0$ gives $\mathbf{n} \propto (1,-1,1)$, confirming the axis. Two quarter turns about perpendicular axes therefore make a third of a turn about a body diagonal. The matrix route confirms this; the quaternion route also explains it, since the axis and the angle are read straight off the four components of $q_2q_1$.
:::

:::application{provenance=original}
**Attitude control and computer graphics.** Spacecraft, aircraft, drones, inertial measurement units, robot arms and animation systems all store orientation as a unit quaternion rather than as three Euler angles or a $3\times3$ matrix. Three reasons, all visible above. First, *no gimbal lock*: Euler angles parametrise $\mathrm{SO}(3)$ with coordinate singularities at which two axes align and a degree of freedom is lost, whereas the quaternion parametrisation by $S^3$ is smooth and singular nowhere. Second, *cheap composition and cheap correction*: step 3 of the method composes orientations in $16$ multiplications, and step 6 removes accumulated drift by renormalising four numbers, where a matrix needs re-orthogonalisation. Third, *interpolation*: a smooth motion between two orientations is the great-circle arc on $S^3$ joining the corresponding unit quaternions, which is the spherical linear interpolation ("slerp") of animation software and of attitude planners; the corresponding interpolation of matrices leaves $\mathrm{SO}(3)$ altogether. The two-to-one map means software must choose the lift with $\operatorname{Re}(q_2 q_1^*) \ge 0$ to interpolate along the short arc.

**Spin one-half.** Part 4 identifies the unit quaternions with $\mathrm{SU}(2)$, the group that acts on the two-component spinor of a spin-$\tfrac12$ particle, and part 3 says that this group covers the rotations twice. The physical content is that rotating a spin-$\tfrac12$ state by $2\pi$ multiplies it by $-1$ and only a $4\pi$ rotation restores it — an effect confirmed in neutron interferometry, where rotating the neutron spin by $2\pi$ in one arm of the interferometer reverses the interference fringes. The quaternionic statement is simply that $q = \cos\tfrac\theta2 + \sin\tfrac\theta2\hat{\mathbf{n}}$ equals $-1$ at $\theta = 2\pi$. The Lie-group account is :ref[]{to=group.so3-su2}, and the generalisation to arbitrary quadratic forms, of which $\mathbb{H}$ is the Clifford algebra of the negative-definite form on $\mathbb{R}^2$, is :ref[]{to=group.clifford-algebras}.

**Rigid-body kinematics.** Differentiating $q(t)$ along a motion with angular velocity $\boldsymbol\omega$ (as a pure quaternion, in body coordinates) gives the kinematic equation $\dot q = \tfrac12 q\,\boldsymbol\omega$, a linear ordinary differential equation in four unknowns with no trigonometric functions in it. Numerical integrators for spacecraft and for molecular dynamics of rigid molecules use this in place of the Euler-angle equations, whose right-hand sides blow up near the gimbal-lock configurations.
:::
