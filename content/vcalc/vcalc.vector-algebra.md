---
id: vcalc.vector-algebra
title: Vector algebra and index notation
kind: definition
level: core
summary: Gives the scalar, vector and triple products of vectors in $\mathbb{R}^3$ both geometrically and in components, introduces the summation convention with the Kronecker delta and the Levi-Civita symbol, and proves the $\varepsilon$-$\delta$ identity that reduces every repeated cross product to dot products.
prereqs: []
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§2.1, Eq. (2.8), p. 85 (Levi-Civita symbol); §3.1, Properties 6–8 and Eq. (3.1), p. 124 (dot product, Kronecker delta); §3.2, Eqs. (3.2)–(3.9), pp. 126–128 (cross product, geometric and component forms); Eqs. (3.12)–(3.13), pp. 128–129 (scalar triple product); Eqs. (3.18)–(3.19), p. 130 (vector triple product, BAC–CAB rule and its index proof)"
    pages: "85, 124-130"
    role: definitions of the products; the index form of the cross product; the route of the BAC–CAB proof
  - work: rhb-2006
    loc: "§7.6.2, Eqs. (7.23)–(7.33), pp. 222–224 (vector product and its component form); §7.6.3, Eqs. (7.34)–(7.36), pp. 225–226 (scalar triple product, its permutation symmetries, Lagrange's identity); §7.6.4, Eqs. (7.37)–(7.38), p. 226 (vector triple product); §26.1, p. 928 (summation convention and $\\delta_{ij}$); §26.8, Eqs. (26.29)–(26.36), pp. 942–944 ($\\varepsilon$-$\\delta$ identity and its contractions)"
    pages: "222-226, 928, 942-944"
    role: statements of the triple-product identities and of the $\varepsilon$-$\delta$ identity with its contractions; the summation convention
---

:::definition[Scalar and vector products]{provenance=adapted src="arfken-2013:§3.1, Properties 6–8 and Eq. (3.1), p. 124, and §3.2, Eqs. (3.2)–(3.9), pp. 126–128; rhb-2006:§7.6.2, Eqs. (7.23)–(7.33), pp. 222–224"}
Throughout, $\mathbf{a}, \mathbf{b}, \mathbf{c}, \mathbf{d}$ are vectors of $\mathbb{R}^3$, written in the right-handed orthonormal basis $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ (also $\mathbf{i}, \mathbf{j}, \mathbf{k}$, or $\hat{\mathbf{e}}_x, \hat{\mathbf{e}}_y, \hat{\mathbf{e}}_z$) as $\mathbf{a} = a_1\mathbf{e}_1 + a_2\mathbf{e}_2 + a_3\mathbf{e}_3$. We write $a = |\mathbf{a}| = (a_1^2+a_2^2+a_3^2)^{1/2}$, and $\theta \in [0,\pi]$ for the angle between two non-zero vectors placed tail to tail.

- The **scalar product** (dot product) is
  $$
  \mathbf{a}\cdot\mathbf{b} \;=\; a_1b_1 + a_2b_2 + a_3b_3 \;=\; |\mathbf{a}|\,|\mathbf{b}|\cos\theta .
  $$
  It is symmetric and bilinear, $|\mathbf{a}|^2 = \mathbf{a}\cdot\mathbf{a}$, and $\mathbf{a}\cdot\mathbf{b} = 0$ for non-zero $\mathbf{a}, \mathbf{b}$ exactly when they are **orthogonal**. The component $a_i$ is the projection $\mathbf{e}_i\cdot\mathbf{a}$.
- The **vector product** (cross product) $\mathbf{a}\times\mathbf{b}$ is the vector of length $|\mathbf{a}||\mathbf{b}|\sin\theta$ — the area of the parallelogram with edges $\mathbf{a}$ and $\mathbf{b}$ — perpendicular to both, oriented so that $\mathbf{a}, \mathbf{b}, \mathbf{a}\times\mathbf{b}$ is a right-handed triple. In components,
  $$
  \mathbf{a}\times\mathbf{b} \;=\; (a_2b_3 - a_3b_2)\,\mathbf{e}_1 + (a_3b_1 - a_1b_3)\,\mathbf{e}_2 + (a_1b_2 - a_2b_1)\,\mathbf{e}_3
  \;=\;
  \begin{vmatrix} \mathbf{e}_1 & \mathbf{e}_2 & \mathbf{e}_3 \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix},
  $$
  the determinant being expanded along its first row. It is bilinear and **anticommutative**, $\mathbf{b}\times\mathbf{a} = -\,\mathbf{a}\times\mathbf{b}$, so $\mathbf{a}\times\mathbf{a} = \mathbf{0}$; and $\mathbf{a}\times\mathbf{b} = \mathbf{0}$ for non-zero $\mathbf{a},\mathbf{b}$ exactly when they are parallel or antiparallel. It is **not** associative.
- The **scalar triple product** is $[\mathbf{a},\mathbf{b},\mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$, and the **vector triple product** is $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$. In the second the brackets may not be dropped; in the first they may, since $(\mathbf{a}\cdot\mathbf{b})\times\mathbf{c}$ has no meaning.

The cross product is specific to three dimensions: the dot product and the identities below that involve no cross product hold in $\mathbb{R}^n$ for every $n$.
:::

:::definition[Summation convention, Kronecker delta, Levi-Civita symbol]{provenance=adapted src="arfken-2013:§2.1, Eq. (2.8), p. 85, and §3.2, Eqs. (3.5) and (3.8), p. 127; rhb-2006:§26.1, p. 928"}
From here on, **a lower-case Latin index repeated exactly twice in a term is summed over the values $1,2,3$**, and no summation sign is written: $a_ib_i$ means $\sum_{i=1}^{3}a_ib_i$, and $a_{ij}b_{jk}$ means $\sum_{j=1}^{3}a_{ij}b_{jk}$. A repeated index is a **dummy** index and may be renamed; an index occurring once is **free**, and the free indices on the two sides of an equation must match. No index may appear three times in a term.

The **Kronecker delta** is
$$
\delta_{ij} = \begin{cases} 1, & i = j,\\ 0, & i \ne j,\end{cases}
$$
so that $\mathbf{e}_i\cdot\mathbf{e}_j = \delta_{ij}$. Under the convention its effect is to rename an index: $\delta_{ij}b_j = b_i$ and $\delta_{ij}a_{jk} = a_{ik}$. Note $\delta_{ii} = 3$.

The **Levi-Civita symbol** $\varepsilon_{ijk}$ is $+1$ when $(i,j,k)$ is an even permutation of $(1,2,3)$, namely $123$, $231$, $312$; it is $-1$ when $(i,j,k)$ is an odd permutation, namely $213$, $321$, $132$; and it is $0$ whenever two of the three indices agree. Equivalently $\varepsilon_{ijk}$ is totally antisymmetric with $\varepsilon_{123} = 1$: it changes sign when any two indices are interchanged, and is unchanged under a cyclic shift,
$$
\varepsilon_{ijk} = \varepsilon_{jki} = \varepsilon_{kij} = -\varepsilon_{jik}.
$$
:::

:::statement[The products in index notation]{provenance=adapted src="arfken-2013:§3.2, Eqs. (3.5), (3.8), p. 127 and Eqs. (3.12)–(3.13), pp. 128–129; rhb-2006:§7.6.3, Eqs. (7.34)–(7.35), p. 225, and §26.8, Eq. (26.29), p. 942"}
With the conventions above,
$$
\mathbf{a}\cdot\mathbf{b} = a_ib_i = \delta_{ij}a_ib_j,
\qquad
\mathbf{e}_i\times\mathbf{e}_j = \varepsilon_{ijk}\,\mathbf{e}_k,
\qquad
(\mathbf{a}\times\mathbf{b})_i = \varepsilon_{ijk}\,a_jb_k,
$$
and the scalar triple product is
$$
\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) \;=\; \varepsilon_{ijk}\,a_ib_jc_k \;=\;
\begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3\end{vmatrix} .
$$
Because $\varepsilon_{ijk}$ is totally antisymmetric, the scalar triple product is unchanged by a cyclic permutation of $\mathbf{a}, \mathbf{b}, \mathbf{c}$ and changes sign under an interchange of two of them:
$$
[\mathbf{a},\mathbf{b},\mathbf{c}] = [\mathbf{b},\mathbf{c},\mathbf{a}] = [\mathbf{c},\mathbf{a},\mathbf{b}]
= -[\mathbf{a},\mathbf{c},\mathbf{b}] = -[\mathbf{b},\mathbf{a},\mathbf{c}] = -[\mathbf{c},\mathbf{b},\mathbf{a}] .
$$
In particular $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\times\mathbf{b})\cdot\mathbf{c}$: the dot and the cross may be exchanged. Its absolute value is the volume of the parallelepiped with edges $\mathbf{a},\mathbf{b},\mathbf{c}$, and it vanishes exactly when the three vectors are coplanar. More generally, for a $3\times 3$ matrix $A$,
$$
\varepsilon_{ijk}\,A_{1i}A_{2j}A_{3k} = \det A .
$$
:::

:::statement[The $\varepsilon$-$\delta$ identity and its contractions]{provenance=adapted src="rhb-2006:§26.8, Eqs. (26.30), (26.35), (26.36), pp. 943–944"}
For all $i,j,l,m \in \{1,2,3\}$,
$$
\varepsilon_{ijk}\,\varepsilon_{klm} \;=\; \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}
\tag{$\varepsilon\delta$}
$$
(the index $k$ summed). Contracting it once gives $\varepsilon_{ijk}\varepsilon_{ijm} = 2\delta_{km}$, and contracting again gives $\varepsilon_{ijk}\varepsilon_{ijk} = 6$.
:::

:::idea{provenance=original}
Both sides of $(\varepsilon\delta)$ vanish unless $i \ne j$ and $l \ne m$. When those hold, the sum on the left has at most one non-zero term, because in three dimensions there is exactly one index outside the pair $\{i,j\}$ and exactly one outside $\{l,m\}$; the term survives only if those two coincide, that is only if $\{i,j\} = \{l,m\}$. The remaining work is to check the sign in the two ways that can happen, and the antisymmetry of $\varepsilon$ does that in one line each.
:::

:::proof{provenance=adapted src="rhb-2006:§26.8, pp. 943–944"}
Write $L_{ijlm} = \varepsilon_{ijk}\varepsilon_{klm}$ for the left side and $R_{ijlm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$ for the right side.

1. **Repeated indices in a pair.** If $i = j$ then $\varepsilon_{ijk} = 0$ for every $k$, so $L_{ijlm} = 0$; and $R_{iilm} = \delta_{il}\delta_{im} - \delta_{im}\delta_{il} = 0$. The same argument with the antisymmetry in the last two slots of $\varepsilon_{klm}$ disposes of $l = m$. So assume from now on that $i \ne j$ and $l \ne m$.

2. **At most one term survives.** Since $i \ne j$, the factor $\varepsilon_{ijk}$ is non-zero for exactly one value of $k$, namely the single element $k_0$ of $\{1,2,3\}\setminus\{i,j\}$; for the other two values of $k$ it has a repeated index. Likewise $\varepsilon_{klm}$ is non-zero only for $k = k_1$, the element of $\{1,2,3\}\setminus\{l,m\}$. Hence $L_{ijlm} = 0$ unless $k_0 = k_1$, which — the complements being singletons — happens exactly when $\{i,j\} = \{l,m\}$.

3. **The case $i = l$, $j = m$.** Then, using the cyclic invariance of $\varepsilon$ in the second factor, $\varepsilon_{ijk}\varepsilon_{kij} = \varepsilon_{ijk}\varepsilon_{ijk}$ (no summation yet: only $k = k_0$ contributes), and a symbol with no repeated index squares to $1$, so $L_{ijij} = 1$. On the right, $\delta_{il}\delta_{jm} = 1$, while $\delta_{im}\delta_{jl} = \delta_{ij}\delta_{ji} = 0$ because $i \ne j$. So $R_{ijij} = 1 = L_{ijij}$.

4. **The case $i = m$, $j = l$.** Now the second factor is $\varepsilon_{kji}$, which is $-\varepsilon_{kij}$ by antisymmetry in its last two indices, so by step 3 the surviving term is $L_{ijji} = -1$. On the right, $\delta_{il}\delta_{jm} = \delta_{ij}\delta_{ji} = 0$ and $\delta_{im}\delta_{jl} = 1$, so $R_{ijji} = -1 = L_{ijji}$.

5. **The remaining cases.** If $i \ne j$, $l \ne m$ and $\{i,j\} \ne \{l,m\}$, then $L_{ijlm} = 0$ by step 2. For the right side, $\delta_{il}\delta_{jm} \ne 0$ forces $i = l$ and $j = m$, hence $\{i,j\} = \{l,m\}$, which is excluded; and $\delta_{im}\delta_{jl} \ne 0$ forces $i = m$, $j = l$, excluded for the same reason. So $R_{ijlm} = 0$ as well. Steps 1–5 exhaust all index values, so $(\varepsilon\delta)$ holds.

6. **The contractions.** Set $l = i$ in $(\varepsilon\delta)$ and sum over $i$ as well as over $k$. On the right, $\delta_{ii}\delta_{jm} - \delta_{im}\delta_{ji} = 3\delta_{jm} - \delta_{jm} = 2\delta_{jm}$, by $\delta_{ii} = 3$ and the renaming rule for $\delta$. On the left we have $\varepsilon_{ijk}\varepsilon_{kim}$, which we bring to a symmetric shape in two steps: a cyclic shift gives $\varepsilon_{kim} = \varepsilon_{imk}$, and then interchanging the last two indices of each factor, $\varepsilon_{ijk} = -\varepsilon_{ikj}$ and $\varepsilon_{imk} = -\varepsilon_{ikm}$, costs two signs that cancel. So
   $$
   \varepsilon_{ijk}\varepsilon_{kim} = \varepsilon_{ijk}\varepsilon_{imk} = \varepsilon_{ikj}\varepsilon_{ikm} = 2\delta_{jm},
   $$
   in which the summed pair is now $(i,k)$ and the free pair is $(j,m)$. Renaming the dummies to $i,j$ and the free indices to $k,m$ gives $\varepsilon_{ijk}\varepsilon_{ijm} = 2\delta_{km}$. Setting $m = k$ in that and summing gives $\varepsilon_{ijk}\varepsilon_{ijk} = 2\delta_{kk} = 6$. $\square$
:::

:::statement[Triple-product identities]{provenance=adapted src="rhb-2006:§7.6.3, Eq. (7.36) and §7.6.4, Eqs. (7.37)–(7.38), p. 226; arfken-2013:§3.2, Eq. (3.18), p. 130"}
For all $\mathbf{a},\mathbf{b},\mathbf{c},\mathbf{d} \in \mathbb{R}^3$:

1. **Vector triple product** (the *BAC–CAB rule*)
   $$
   \mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = (\mathbf{a}\cdot\mathbf{c})\,\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\,\mathbf{c},
   \qquad
   (\mathbf{a}\times\mathbf{b})\times\mathbf{c} = (\mathbf{a}\cdot\mathbf{c})\,\mathbf{b} - (\mathbf{b}\cdot\mathbf{c})\,\mathbf{a}.
   $$
   In particular $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$ lies in the plane of $\mathbf{b}$ and $\mathbf{c}$, and the two bracketings differ in general.
2. **Lagrange's identity**
   $$
   (\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d}) = (\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d}) - (\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c}).
   $$
   Taking $\mathbf{c} = \mathbf{a}$, $\mathbf{d} = \mathbf{b}$ gives $|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$, which is the consistency of the geometric and component forms of the cross product, since $1 - \cos^2\theta = \sin^2\theta$.
:::

:::idea{provenance=original}
Every one of these identities is a single application of $(\varepsilon\delta)$. Write the left-hand side in components; a repeated cross product produces two $\varepsilon$ symbols sharing one dummy index; replace their product by the two $\delta$ terms; each $\delta$ then renames an index, and the two terms that come out are the two terms of the right-hand side.
:::

:::proof{provenance=adapted src="arfken-2013:§3.2, Eq. (3.19), p. 130"}
**1.** Take the $i$th component of $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$ and expand the inner product in components, choosing dummy indices that are not already in use:
$$
\bigl[\mathbf{a}\times(\mathbf{b}\times\mathbf{c})\bigr]_i
= \varepsilon_{ijk}\,a_j\,(\mathbf{b}\times\mathbf{c})_k
= \varepsilon_{ijk}\,\varepsilon_{klm}\,a_j b_l c_m .
$$
The two symbols share the dummy index $k$ in the position required by $(\varepsilon\delta)$, so
$$
\bigl[\mathbf{a}\times(\mathbf{b}\times\mathbf{c})\bigr]_i
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,a_j b_l c_m
= a_j b_i c_j - a_j b_j c_i,
$$
each $\delta$ having renamed one index. The first term is $(\mathbf{a}\cdot\mathbf{c})b_i$ and the second is $(\mathbf{a}\cdot\mathbf{b})c_i$, which is the first identity since $i$ was arbitrary. The second bracketing follows from the first: by anticommutativity $(\mathbf{a}\times\mathbf{b})\times\mathbf{c} = -\,\mathbf{c}\times(\mathbf{a}\times\mathbf{b})$, and the first identity applied to the right-hand side gives $-\,(\mathbf{c}\cdot\mathbf{b})\mathbf{a} + (\mathbf{c}\cdot\mathbf{a})\mathbf{b}$, as claimed.

**2.** For Lagrange's identity, expand both cross products and contract:
$$
(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d})
= \varepsilon_{kij}a_ib_j\,\varepsilon_{klm}c_ld_m .
$$
A cyclic shift turns $\varepsilon_{kij}$ into $\varepsilon_{ijk}$, so $(\varepsilon\delta)$ applies and gives
$$
(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d})
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,a_ib_jc_ld_m
= a_ic_i\,b_jd_j - a_md_m\,b_lc_l,
$$
which is $(\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d}) - (\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c})$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what the notation hides.**

- *Three dimensions.* Step 2 of the proof of $(\varepsilon\delta)$ uses that the complement of a two-element subset of the index set is a single element. That is false for $n \ne 3$, and indeed in $\mathbb{R}^n$ the totally antisymmetric symbol carries $n$ indices and $(\varepsilon\delta)$ is replaced by a determinant of $\delta$'s. The scalar and dot-product identities, by contrast, need no restriction on $n$.
- *Right-handedness.* The formula $(\mathbf{a}\times\mathbf{b})_i = \varepsilon_{ijk}a_jb_k$ with $\varepsilon_{123} = +1$ presumes that $\mathbf{e}_1,\mathbf{e}_2,\mathbf{e}_3$ is right-handed. In a left-handed basis the same components describe $-\,\mathbf{a}\times\mathbf{b}$. Equivalently, a cross product reverses sign under a reflection relative to an ordinary vector; such objects are pseudovectors (see :ref[]{to=geom.pseudotensors}), and the scalar triple product is a pseudoscalar.
- *Index discipline.* The convention is only as safe as the bookkeeping. Introducing a dummy index that is already in use silently produces a wrong result, which is why in the proof above the inner cross product was expanded with the fresh indices $l, m$ rather than with $j, k$ again. Riley, Hobson and Bence make this point explicitly (p. 928): an index must never appear three times in a term.
- *Generality of the $\varepsilon$ identity.* Riley, Hobson and Bence also record the stronger statement that $\varepsilon_{ijk}\varepsilon_{pqr}$ equals the $3\times 3$ determinant with entries $\delta_{ip}, \delta_{iq}, \dots, \delta_{kr}$ (their Eq. (26.34), p. 944), and obtain $(\varepsilon\delta)$ from it by contraction. We have proved the contracted form directly, which is the only form the later units use.
- *What is not assumed.* No completeness or orthonormality beyond $\mathbf{e}_i\cdot\mathbf{e}_j = \delta_{ij}$ is used; in a non-orthonormal basis the component formulas above are all false, and one needs the metric tensor of :ref[]{to=geom.metric-tensor}.
:::

:::example{provenance=original}
Take
$$
\mathbf{a} = (2,-1,3), \qquad \mathbf{b} = (1,4,-2), \qquad \mathbf{c} = (-3,2,1), \qquad \mathbf{d} = (0,1,5).
$$

**Step 1: the dot products.** $\mathbf{a}\cdot\mathbf{b} = 2 - 4 - 6 = -8$, $\mathbf{a}\cdot\mathbf{c} = -6 - 2 + 3 = -5$, $\mathbf{b}\cdot\mathbf{c} = -3 + 8 - 2 = 3$, $\mathbf{a}\cdot\mathbf{d} = 0 - 1 + 15 = 14$, $\mathbf{b}\cdot\mathbf{d} = 0 + 4 - 10 = -6$.

**Step 2: two cross products.** From the component formula,
$$
\mathbf{a}\times\mathbf{b} = \bigl((-1)(-2) - 3\cdot 4,\; 3\cdot 1 - 2\cdot(-2),\; 2\cdot 4 - (-1)\cdot 1\bigr) = (-10,\,7,\,9),
$$
$$
\mathbf{b}\times\mathbf{c} = \bigl(4\cdot 1 - (-2)\cdot 2,\; (-2)(-3) - 1\cdot 1,\; 1\cdot 2 - 4\cdot(-3)\bigr) = (8,\,5,\,14).
$$
As a check on orientation, $\mathbf{a}\cdot(\mathbf{a}\times\mathbf{b}) = -20 - 7 + 27 = 0$ and $\mathbf{b}\cdot(\mathbf{a}\times\mathbf{b}) = -10 + 28 - 18 = 0$.

**Step 3: the scalar triple product two ways.** Directly, $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 16 - 5 + 42 = 53$. Exchanging dot and cross, $(\mathbf{a}\times\mathbf{b})\cdot\mathbf{c} = 30 + 14 + 9 = 53$. The parallelepiped on $\mathbf{a},\mathbf{b},\mathbf{c}$ therefore has volume $53$, and the three vectors are not coplanar.

**Step 4: the BAC–CAB rule.** The right-hand side is
$$
(\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{a}\cdot\mathbf{b})\mathbf{c} = -5\,(1,4,-2) + 8\,(-3,2,1) = (-5-24,\; -20+16,\; 10+8) = (-29,\,-4,\,18).
$$
The left-hand side, computed from $\mathbf{b}\times\mathbf{c} = (8,5,14)$, is
$$
\mathbf{a}\times(8,5,14) = \bigl((-1)(14) - 3\cdot 5,\; 3\cdot 8 - 2\cdot 14,\; 2\cdot 5 - (-1)\cdot 8\bigr) = (-29,\,-4,\,18).
$$
The two agree. For contrast, $(\mathbf{a}\times\mathbf{b})\times\mathbf{c} = (\mathbf{a}\cdot\mathbf{c})\mathbf{b} - (\mathbf{b}\cdot\mathbf{c})\mathbf{a} = -5\,(1,4,-2) - 3\,(2,-1,3) = (-11,-17,1)$, a different vector: the cross product is not associative.

**Step 5: Lagrange's identity.** Its right-hand side is $(\mathbf{a}\cdot\mathbf{c})(\mathbf{b}\cdot\mathbf{d}) - (\mathbf{a}\cdot\mathbf{d})(\mathbf{b}\cdot\mathbf{c}) = (-5)(-6) - (14)(3) = 30 - 42 = -12$. Its left-hand side needs $\mathbf{c}\times\mathbf{d} = (2\cdot 5 - 1\cdot 1,\; 1\cdot 0 - (-3)\cdot 5,\; -3 - 0) = (9,15,-3)$, and then $(\mathbf{a}\times\mathbf{b})\cdot(\mathbf{c}\times\mathbf{d}) = -90 + 105 - 27 = -12$. Finally, with $\mathbf{c} = \mathbf{a}$ and $\mathbf{d} = \mathbf{b}$ the identity reads $|\mathbf{a}\times\mathbf{b}|^2 = 100 + 49 + 81 = 230$ against $|\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2 = 14\cdot 21 - 64 = 294 - 64 = 230$, so the angle between $\mathbf{a}$ and $\mathbf{b}$ satisfies $\sin^2\theta = 230/294$ and $\cos^2\theta = 64/294$.
:::

:::application{provenance=original}
**The moment of inertia tensor comes out of the BAC–CAB rule.** A rigid body rotates about a fixed point with angular velocity $\boldsymbol{\omega}$, so the material point at position $\mathbf{r}$ moves with velocity $\mathbf{v} = \boldsymbol{\omega}\times\mathbf{r}$. Its contribution to the angular momentum about that point is $\mathbf{r}\times(m\mathbf{v}) = m\,\mathbf{r}\times(\boldsymbol{\omega}\times\mathbf{r})$, and the vector triple product with $\mathbf{a} = \mathbf{c} = \mathbf{r}$, $\mathbf{b} = \boldsymbol{\omega}$ turns this into
$$
m\,\mathbf{r}\times(\boldsymbol{\omega}\times\mathbf{r}) = m\bigl(|\mathbf{r}|^2\boldsymbol{\omega} - (\mathbf{r}\cdot\boldsymbol{\omega})\,\mathbf{r}\bigr).
$$
Summing over the body, the $i$th component is $L_i = I_{ij}\omega_j$ with
$$
I_{ij} = \sum_\alpha m_\alpha\bigl(|\mathbf{r}_\alpha|^2\delta_{ij} - x_{\alpha i}x_{\alpha j}\bigr)
$$
(or the corresponding integral for a continuous body). Two things follow at once from the algebra and would be invisible in components: the angular momentum is in general *not* parallel to $\boldsymbol{\omega}$, because the second term subtracts the part of $\boldsymbol{\omega}$ along $\mathbf{r}$; and $I_{ij}$ is symmetric, hence diagonalisable in an orthonormal basis (:ref[]{to=linalg.hermitian-spectral-theorem}), which is what "principal axes" means. The same rule in the form $\mathbf{r}\times(\mathbf{r}\times\boldsymbol{\omega})$ reappears whenever a field is resolved into parts along and across a direction: $-\hat{\mathbf{n}}\times(\hat{\mathbf{n}}\times\mathbf{A}) = \mathbf{A} - (\hat{\mathbf{n}}\cdot\mathbf{A})\hat{\mathbf{n}}$ is the projection of $\mathbf{A}$ onto the plane perpendicular to the unit vector $\hat{\mathbf{n}}$, used for transverse electromagnetic field components and for the tangential part of a velocity field.

Lagrange's identity has a similarly practical use: for unit vectors $\hat{\mathbf{n}}_1, \hat{\mathbf{n}}_2$ along two crystal axes, $(\hat{\mathbf{n}}_1\times\hat{\mathbf{n}}_2)\cdot(\hat{\mathbf{n}}_1\times\hat{\mathbf{n}}_2) = 1 - (\hat{\mathbf{n}}_1\cdot\hat{\mathbf{n}}_2)^2$ converts a measured angle between axes into the area of the cell face they span without computing a cross product at all. And the scalar triple product is the standard test for linear independence of three vectors, and the Jacobian determinant of a linear change of variables in $\mathbb{R}^3$ (:ref[]{to=found.change-of-variables}).
:::
