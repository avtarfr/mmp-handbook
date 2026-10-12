---
id: vcalc.vector-identities
title: Vector differential identities
kind: method
level: core
summary: Collects the six product rules for $\nabla$, $\nabla\cdot$ and $\nabla\times$ together with $\nabla\times\nabla\phi = \mathbf{0}$, $\nabla\cdot(\nabla\times\mathbf{a}) = 0$ and $\nabla\times(\nabla\times\mathbf{a}) = \nabla(\nabla\cdot\mathbf{a}) - \nabla^2\mathbf{a}$, and gives a mechanical index-notation recipe that proves each of them in a few lines.
prereqs:
  - found.partial-derivatives-chain-rule
  - vcalc.vector-algebra
  - vcalc.divergence-curl
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§10.8 and Table 10.1, p. 354 (the product rules and the remark that they are independent of the coordinate system); §10.8.2, Eqs. (10.37)–(10.42), pp. 356–357 (the second-derivative identities, the three meaningless combinations, and the caveat that $(\\nabla^2\\mathbf{a})_i = \\nabla^2a_i$ only in Cartesian coordinates); Eq. (10.43), p. 357 ($\\nabla\\cdot(\\nabla\\phi\\times\\nabla\\psi) = 0$); §26.8, Eqs. (26.30)–(26.35) and the worked reduction of $\\nabla\\times(\\nabla\\times\\mathbf{v})$, pp. 943–944"
    pages: "354-357, 942-944"
    role: the list of identities and their differentiability hypothesis; the index-notation route for $\nabla\times(\nabla\times\mathbf{a})$; the coordinate caveats; the worked example $\nabla\cdot(\nabla\phi\times\nabla\psi) = 0$
  - work: arfken-2013
    loc: "§3.6, pp. 154–155: the five second-derivative combinations, the determinant arguments for $\\nabla\\times\\nabla\\varphi = 0$ and $\\nabla\\cdot(\\nabla\\times\\mathbf{V}) = 0$ with their continuity hypothesis, and Eq. (3.70) defining the vector Laplacian; Example 3.6.3, Eqs. (3.72)–(3.73), p. 156 ($\\nabla\\cdot(f\\mathbf{V})$, $\\nabla\\times(f\\mathbf{V})$); Example 3.6.4, Eq. (3.74), p. 157 ($\\nabla(\\mathbf{A}\\cdot\\mathbf{B})$); Example 3.6.2 and Eq. (3.71), p. 156 (electromagnetic wave equation)"
    pages: "154-157"
    role: statements and hypotheses of the second-derivative identities; the two product rules proved componentwise; the wave-equation application
---

:::statement[Product rules]{provenance=adapted src="rhb-2006:§10.8.1, Table 10.1, p. 354; arfken-2013:§3.6, Eqs. (3.72)–(3.74), pp. 156–157"}
Let $\phi, \psi$ be $C^1$ scalar fields and $\mathbf{a}, \mathbf{b}$ be $C^1$ vector fields on an open $U \subseteq \mathbb{R}^3$. ($C^1$ is more than the proof needs, and more than the source assumes: Riley, Hobson and Bence's Table 10.1, p. 354, asks only that the fields be differentiable. The first bullet of the remark below says what each identity actually uses and why we assume the stronger hypothesis here.) Then on $U$:

$$
\nabla(\phi\psi) = \phi\,\nabla\psi + \psi\,\nabla\phi
$$
$$
\nabla\cdot(\phi\mathbf{a}) = \phi\,\nabla\cdot\mathbf{a} + \mathbf{a}\cdot\nabla\phi
$$
$$
\nabla\times(\phi\mathbf{a}) = \nabla\phi\times\mathbf{a} + \phi\,\nabla\times\mathbf{a}
$$
$$
\nabla\cdot(\mathbf{a}\times\mathbf{b}) = \mathbf{b}\cdot(\nabla\times\mathbf{a}) - \mathbf{a}\cdot(\nabla\times\mathbf{b})
$$
$$
\nabla\times(\mathbf{a}\times\mathbf{b}) = \mathbf{a}(\nabla\cdot\mathbf{b}) - \mathbf{b}(\nabla\cdot\mathbf{a}) + (\mathbf{b}\cdot\nabla)\mathbf{a} - (\mathbf{a}\cdot\nabla)\mathbf{b}
$$
$$
\nabla(\mathbf{a}\cdot\mathbf{b}) = \mathbf{a}\times(\nabla\times\mathbf{b}) + \mathbf{b}\times(\nabla\times\mathbf{a}) + (\mathbf{a}\cdot\nabla)\mathbf{b} + (\mathbf{b}\cdot\nabla)\mathbf{a}
$$

Here $(\mathbf{a}\cdot\nabla)$ is the scalar differential operator $a_i\partial_i$ of :ref[]{to=vcalc.gradient}, applied to each Cartesian component of the field to its right: $\bigl[(\mathbf{a}\cdot\nabla)\mathbf{b}\bigr]_i = a_j\,\partial_jb_i$. Each identity is linear in each field, and the three operators are linear, so $\nabla(\phi+\psi) = \nabla\phi + \nabla\psi$ and likewise for $\nabla\cdot$ and $\nabla\times$.
:::

:::statement[Second-derivative identities]{provenance=adapted src="arfken-2013:§3.6, pp. 154–155, including Eq. (3.70); rhb-2006:§10.8.2, Eqs. (10.37)–(10.42), pp. 356–357"}
Let $\phi$ be a $C^2$ scalar field and $\mathbf{a}$ a $C^2$ vector field on an open $U \subseteq \mathbb{R}^3$. Of the nine formal ways of applying two of $\nabla$, $\nabla\cdot$, $\nabla\times$ in succession, four are meaningless because the outer operator meets the wrong kind of field ($\nabla(\nabla\phi)$, $\nabla\cdot(\nabla\cdot\mathbf{a})$, $\nabla\times(\nabla\cdot\mathbf{a})$, $\nabla(\nabla\times\mathbf{a})$). Of the remaining five, two vanish identically:
$$
\nabla\times(\nabla\phi) = \mathbf{0},
\qquad\qquad
\nabla\cdot(\nabla\times\mathbf{a}) = 0 ,
$$
one is the Laplacian, $\nabla\cdot(\nabla\phi) = \nabla^2\phi$, one is $\nabla(\nabla\cdot\mathbf{a})$, and the last is given by the other two:
$$
\nabla\times(\nabla\times\mathbf{a}) = \nabla(\nabla\cdot\mathbf{a}) - \nabla^2\mathbf{a},
$$
where in Cartesian coordinates $(\nabla^2\mathbf{a})_i = \nabla^2a_i$. Consequently every gradient field is irrotational and every curl field is solenoidal, and the converses hold locally on suitable domains (:ref[]{to=vcalc.helmholtz-decomposition}).
:::

:::idea{provenance=original}
In index notation all three operators are one symbol, $\partial_i$, and all three products are built from $\delta_{ij}$ and $\varepsilon_{ijk}$. Once an identity is written out that way every object in sight is a number, so the only rules needed are the Leibniz rule for $\partial_i$ of a product and the $\varepsilon$-$\delta$ identity for a pair of $\varepsilon$'s — and the terms may be rearranged freely, which is exactly what vector notation forbids. The product rules then come from Leibniz alone or from Leibniz plus one use of $\varepsilon$-$\delta$; the two vanishing identities come from contracting the antisymmetric $\varepsilon_{ijk}$ with the symmetric $\partial_j\partial_k$; and $\nabla\times(\nabla\times\mathbf{a})$ comes from $\varepsilon$-$\delta$ applied to two $\varepsilon$'s with two derivatives between them.
:::

:::method[Proving a vector identity in index notation]{provenance=adapted src="rhb-2006:§26.8, pp. 942–944"}
1. **Write the left-hand side in components, with one free index.** Translate as you go: $(\mathbf{a}\cdot\mathbf{b}) \to a_ib_i$, $(\mathbf{a}\times\mathbf{b})_i \to \varepsilon_{ijk}a_jb_k$, $(\nabla\phi)_i \to \partial_i\phi$, $\nabla\cdot\mathbf{a}\to\partial_ia_i$, $(\nabla\times\mathbf{a})_i \to \varepsilon_{ijk}\partial_ja_k$, $\bigl[(\mathbf{a}\cdot\nabla)\mathbf{b}\bigr]_i \to a_j\partial_jb_i$.
2. **Expand from the inside out, with fresh dummy indices every time.** An index that is already free or already paired must not be reused; a third occurrence of any index means the expression is wrong, not merely ugly. Two $\varepsilon$'s typically need four new indices, as in $\varepsilon_{ijk}\partial_j(\varepsilon_{klm}\partial_la_m)$.
3. **Differentiate the products by the Leibniz rule.** Every factor is now a scalar function, so each derivative of a product splits into a sum of terms, and factors may be written in any order.
4. **Contract each pair of $\varepsilon$'s with the $\varepsilon$-$\delta$ identity** of :ref[]{to=vcalc.vector-algebra}, arranging the shared index into the position $\varepsilon_{ijk}\varepsilon_{klm}$ by cyclic shifts (which cost nothing) or transpositions (which cost a sign). Each resulting $\delta$ renames one index and disappears.
5. **Translate back,** reading the patterns of step 1 in reverse. The two patterns that most often cause trouble are $a_i\,\partial_mb_m = \bigl[\mathbf{a}(\nabla\cdot\mathbf{b})\bigr]_i$ and $b_m\,\partial_ma_i = \bigl[(\mathbf{b}\cdot\nabla)\mathbf{a}\bigr]_i$: they differ only in which index is summed, and confusing them swaps two terms of the answer.
6. **Check before trusting.** The free indices on the two sides must be the same letters; every other index must appear exactly twice in each term; and the number of terms should match what step 4 produced ($\varepsilon$-$\delta$ doubles the term count once per contraction).

**When this is not enough.** A term such as $a_j\,\partial_ib_j$, which appears in the proof of the last product rule, is *not* a vector expression on its own: it is $\nabla$ acting on $\mathbf{b}$ only inside $\mathbf{a}\cdot\mathbf{b}$, which vector notation cannot write. It must be paired with its partner $b_j\partial_ia_j$ and the two combined into $\partial_i(a_jb_j)$ before translating. Arfken, Weber and Harris handle the same obstacle in vector notation by introducing provisional symbols $\nabla_{\mathbf{A}}$ and $\nabla_{\mathbf{B}}$ for "$\nabla$ acting on $\mathbf{A}$ only" and adding them (Example 3.6.4, p. 157); in index notation no such device is needed.
:::

:::proof{provenance=adapted src="rhb-2006:§26.8, pp. 943–944; arfken-2013:§3.6, pp. 154–157"}
Throughout, repeated indices are summed and all fields are evaluated at the same point. Each step names the rule it uses.

**Product rules 1–3 (Leibniz only).**
$$
\partial_i(\phi\psi) = \phi\,\partial_i\psi + \psi\,\partial_i\phi ,
$$
which is the first identity. Next,
$$
\nabla\cdot(\phi\mathbf{a}) = \partial_i(\phi a_i) = \phi\,\partial_ia_i + a_i\,\partial_i\phi = \phi\,\nabla\cdot\mathbf{a} + \mathbf{a}\cdot\nabla\phi .
$$
And
$$
\bigl[\nabla\times(\phi\mathbf{a})\bigr]_i = \varepsilon_{ijk}\,\partial_j(\phi a_k)
= \varepsilon_{ijk}(\partial_j\phi)a_k + \phi\,\varepsilon_{ijk}\partial_ja_k
= (\nabla\phi\times\mathbf{a})_i + \phi\,(\nabla\times\mathbf{a})_i ,
$$
the first term being the cross product of the vector $\nabla\phi$ with $\mathbf{a}$ by step 1 of the method.

**Product rule 4.** Expand and apply Leibniz:
$$
\nabla\cdot(\mathbf{a}\times\mathbf{b}) = \partial_i\bigl(\varepsilon_{ijk}a_jb_k\bigr)
= \varepsilon_{ijk}(\partial_ia_j)b_k + \varepsilon_{ijk}a_j(\partial_ib_k).
$$
In the first term shift the $\varepsilon$ cyclically, $\varepsilon_{ijk} = \varepsilon_{kij}$, to get $b_k\,\varepsilon_{kij}\partial_ia_j = \mathbf{b}\cdot(\nabla\times\mathbf{a})$. In the second, one transposition gives $\varepsilon_{ijk} = -\varepsilon_{jik}$, so the term is $-a_j\,\varepsilon_{jik}\partial_ib_k = -\,\mathbf{a}\cdot(\nabla\times\mathbf{b})$. Adding the two gives identity 4. (Equivalently: the left side is a scalar triple product of $\nabla$, $\mathbf{a}$, $\mathbf{b}$, and the two terms are the two ways $\nabla$ can act.)

**Product rule 5.** Expand the inner cross product with fresh indices $l, m$:
$$
\bigl[\nabla\times(\mathbf{a}\times\mathbf{b})\bigr]_i = \varepsilon_{ijk}\,\partial_j\bigl(\varepsilon_{klm}a_lb_m\bigr)
= \varepsilon_{ijk}\varepsilon_{klm}\,\partial_j(a_lb_m).
$$
The two symbols already share $k$ in the right position, so the $\varepsilon$-$\delta$ identity applies:
$$
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,\partial_j(a_lb_m)
= \partial_m(a_ib_m) - \partial_l(a_lb_i),
$$
each $\delta$ renaming one index. Leibniz on each term gives
$$
= a_i\,\partial_mb_m + b_m\,\partial_ma_i - b_i\,\partial_la_l - a_l\,\partial_lb_i
= \bigl[\mathbf{a}(\nabla\cdot\mathbf{b}) + (\mathbf{b}\cdot\nabla)\mathbf{a} - \mathbf{b}(\nabla\cdot\mathbf{a}) - (\mathbf{a}\cdot\nabla)\mathbf{b}\bigr]_i ,
$$
reading the four patterns of step 5 of the method. This is identity 5.

**Product rule 6.** Work backwards from the right-hand side, since that is where the two $\varepsilon$'s are. By $\varepsilon$-$\delta$,
$$
\bigl[\mathbf{a}\times(\nabla\times\mathbf{b})\bigr]_i = \varepsilon_{ijk}a_j\,\varepsilon_{klm}\partial_lb_m
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,a_j\,\partial_lb_m
= a_j\,\partial_ib_j - a_j\,\partial_jb_i ,
$$
that is $a_j\partial_ib_j - \bigl[(\mathbf{a}\cdot\nabla)\mathbf{b}\bigr]_i$. Exchanging the roles of $\mathbf{a}$ and $\mathbf{b}$,
$$
\bigl[\mathbf{b}\times(\nabla\times\mathbf{a})\bigr]_i = b_j\,\partial_ia_j - \bigl[(\mathbf{b}\cdot\nabla)\mathbf{a}\bigr]_i .
$$
Add the two. The leftover terms combine by Leibniz into $a_j\partial_ib_j + b_j\partial_ia_j = \partial_i(a_jb_j) = \bigl[\nabla(\mathbf{a}\cdot\mathbf{b})\bigr]_i$, which is precisely the combination step 6 of the method warns must be made before translating. Moving the two $(\,\cdot\nabla)$ terms to the other side gives identity 6.

**The two vanishing identities.** Both are the contraction of an antisymmetric symbol with a symmetric pair of derivatives.
$$
\bigl[\nabla\times(\nabla\phi)\bigr]_i = \varepsilon_{ijk}\,\partial_j\partial_k\phi .
$$
Rename the dummy indices $j \leftrightarrow k$, which cannot change the value of a sum: the expression equals $\varepsilon_{ikj}\partial_k\partial_j\phi$. Now $\varepsilon_{ikj} = -\varepsilon_{ijk}$ by antisymmetry, and $\partial_k\partial_j\phi = \partial_j\partial_k\phi$ because $\phi$ is $C^2$ (:ref[]{to=found.partial-derivatives-chain-rule}) — this is the only place the hypothesis enters. So the expression equals minus itself and is therefore zero. The same two steps applied to
$$
\nabla\cdot(\nabla\times\mathbf{a}) = \partial_i\bigl(\varepsilon_{ijk}\partial_ja_k\bigr) = \varepsilon_{ijk}\,\partial_i\partial_ja_k
$$
give zero, now using the equality of mixed partials of each component $a_k$.

**Curl of a curl.** Expand with fresh indices and contract:
$$
\bigl[\nabla\times(\nabla\times\mathbf{a})\bigr]_i = \varepsilon_{ijk}\,\partial_j\bigl(\varepsilon_{klm}\partial_la_m\bigr)
= (\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl})\,\partial_j\partial_la_m
= \partial_j\partial_ia_j - \partial_j\partial_ja_i .
$$
In the first term interchange the two derivatives, again by the $C^2$ hypothesis, to get $\partial_i(\partial_ja_j) = \bigl[\nabla(\nabla\cdot\mathbf{a})\bigr]_i$; the second term is $\nabla^2a_i$. Hence $\nabla\times(\nabla\times\mathbf{a}) = \nabla(\nabla\cdot\mathbf{a}) - \nabla^2\mathbf{a}$ with the Cartesian componentwise Laplacian. $\square$
:::

:::remark{provenance=adapted src="arfken-2013:§3.6, pp. 154–155; rhb-2006:§10.8, p. 354 and §10.8.2, pp. 356–357"}
**Where the hypotheses are used, and what fails without them.**

- *$C^1$ for the product rules, $C^2$ for the second-derivative identities.* The product rules use only the Leibniz rule, so differentiability of each factor at the point suffices; $C^1$ is assumed above only so that the results are again continuous fields. The two vanishing identities and the curl-of-curl identity, by contrast, each rest on **one** interchange of mixed partial derivatives, and that is false in general without continuity of the second derivatives.
- *What goes wrong without $C^2$.* Take $f(x,y) = xy(x^2-y^2)/(x^2+y^2)$ off the origin, $f(0,0) = 0$, the function of the remark in :ref[]{to=found.partial-derivatives-chain-rule}, for which $\partial_y\partial_xf(0,0) = -1$ and $\partial_x\partial_yf(0,0) = +1$. For the field $\phi(x,y,z) = f(x,y)$, both mixed second derivatives exist at the origin, yet $\bigl[\nabla\times\nabla\phi\bigr]_3 = \partial_x\partial_y\phi - \partial_y\partial_x\phi = 2 \ne 0$ there. So "$\nabla\times\nabla\phi = \mathbf{0}$" is a theorem about $C^2$ fields, not a formal identity; Arfken, Weber and Harris flag the same point, writing that their determinant argument assumes the second derivatives may be taken in either order (p. 155) and holds when $\mathbf{V}$ has sufficient continuity.
- *The vector Laplacian is only componentwise in Cartesian coordinates.* Riley, Hobson and Bence are explicit (pp. 356–357): $\nabla\times(\nabla\times\mathbf{a}) = \nabla(\nabla\cdot\mathbf{a}) - \nabla^2\mathbf{a}$ holds in any coordinate system, but the further step $(\nabla^2\mathbf{a})_i = \nabla^2a_i$ requires the basis vectors to be constant, which fails for cylindrical and spherical polars, where the derivatives of the basis vectors contribute extra terms (:ref[]{to=vcalc.curvilinear-coordinates}). Arfken, Weber and Harris take the opposite and cleaner route, *defining* $\nabla^2\mathbf{V}$ by that identity (Eq. (3.70), p. 155), so that the identity is true by construction and the componentwise formula is a Cartesian theorem. We follow Riley, Hobson and Bence in defining the Cartesian componentwise Laplacian first; the two conventions agree wherever both apply.
- *Why coordinate-free identities may be proved in Cartesian components.* All of these were derived in one fixed orthonormal basis, yet they are asserted as identities between fields. The justification is that $\nabla\phi$, $\nabla\cdot\mathbf{a}$ and $\nabla\times\mathbf{a}$ are themselves independent of which right-handed orthonormal basis is used — a scalar, a scalar and a vector respectively, as the flux and circulation characterisations of :ref[]{to=vcalc.divergence-curl} make clear without reference to coordinates. Riley, Hobson and Bence make the same remark (p. 354). The one place handedness matters is the sign of every curl, which flips in a left-handed basis along with the sign of $\varepsilon_{123}$.
- *Two orderings that are genuinely different.* $\nabla\times(\mathbf{a}\times\mathbf{b})$ and $(\nabla\times\mathbf{a})\times\mathbf{b}$ are unrelated expressions, so the brackets in identity 5 are load-bearing. The notation $\mathbf{a}\cdot(\nabla\mathbf{b})$, by contrast, needs a convention rather than a warning. Fix the second-rank field $\nabla\mathbf{b}$ by $(\nabla\mathbf{b})_{ij} = \partial_ib_j$ and let the dot contract its left (derivative) index; then $a_i\,\partial_ib_j = \bigl[(\mathbf{a}\cdot\nabla)\mathbf{b}\bigr]_j$, so the two agree exactly, and the directional-derivative notation is just the contracted gradient. The expression that is *not* equal to either is the other contraction, $a_j\,\partial_ib_j$: that is the term met in the proof of rule 6, and the closing paragraph of the method explains why vector notation cannot write it on its own.
:::

:::example{provenance=original}
**(a) Checking the curl-of-curl identity on a concrete field.** Take
$$
\mathbf{F} = (x^2y,\; y^2z,\; xz^2), \qquad P = (1,2,-1).
$$
*Divergence and its gradient.* $\nabla\cdot\mathbf{F} = 2xy + 2yz + 2xz$, which at $P$ is $4 - 4 - 2 = -2$. Its gradient is $\nabla(\nabla\cdot\mathbf{F}) = (2y+2z,\; 2x+2z,\; 2y+2x)$, equal at $P$ to $(2,\,0,\,6)$.

*Curl, then curl again.* The components of the curl are $\partial_yF_3 - \partial_zF_2 = 0 - y^2$, $\partial_zF_1 - \partial_xF_3 = 0 - z^2$ and $\partial_xF_2 - \partial_yF_1 = 0 - x^2$, so
$$
\nabla\times\mathbf{F} = (-y^2,\; -z^2,\; -x^2), \qquad (\nabla\times\mathbf{F})(P) = (-4,\,-1,\,-1).
$$
Taking the curl of that field by the same formula gives $\nabla\times(\nabla\times\mathbf{F}) = (2z,\, 2x,\, 2y)$, which at $P$ is $(-2,\,2,\,4)$.

*The Laplacian.* Componentwise, $\nabla^2(x^2y) = 2y$, $\nabla^2(y^2z) = 2z$ and $\nabla^2(xz^2) = 2x$, so $\nabla^2\mathbf{F} = (2y,\,2z,\,2x)$, equal at $P$ to $(4,\,-2,\,2)$.

*The identity.* $\nabla(\nabla\cdot\mathbf{F}) - \nabla^2\mathbf{F} = (2y+2z-2y,\; 2x+2z-2z,\; 2y+2x-2x) = (2z,\,2x,\,2y)$, which is exactly $\nabla\times(\nabla\times\mathbf{F})$ as fields, and at $P$ it is $(2,0,6) - (4,-2,2) = (-2,2,4)$, matching the direct computation.

**(b) A product rule, checked.** With $\phi = xy + z^2$ and $\mathbf{a} = (z,\,x,\,y)$: directly,
$$
\nabla\cdot(\phi\mathbf{a}) = \partial_x\bigl[(xy+z^2)z\bigr] + \partial_y\bigl[(xy+z^2)x\bigr] + \partial_z\bigl[(xy+z^2)y\bigr] = yz + x^2 + 2yz = x^2 + 3yz .
$$
By the product rule, $\nabla\cdot\mathbf{a} = 0$ and $\nabla\phi = (y,\,x,\,2z)$, so
$$
\phi\,\nabla\cdot\mathbf{a} + \mathbf{a}\cdot\nabla\phi = 0 + (zy + x\cdot x + 2yz) = x^2 + 3yz,
$$
the same. Note how much less there is to differentiate on the second route.

**(c) Deriving a new identity from rule 6.** Put $\mathbf{b} = \mathbf{a}$ in the last product rule. The two cross-product terms become equal, and so do the two directional-derivative terms, so
$$
\nabla(\mathbf{a}\cdot\mathbf{a}) = 2\,\mathbf{a}\times(\nabla\times\mathbf{a}) + 2\,(\mathbf{a}\cdot\nabla)\mathbf{a},
\qquad\text{that is}\qquad
(\mathbf{a}\cdot\nabla)\mathbf{a} = \tfrac12\nabla|\mathbf{a}|^2 - \mathbf{a}\times(\nabla\times\mathbf{a}).
$$
Check it on $\mathbf{a} = (z,x,y)$. Here $\nabla\times\mathbf{a} = (1,1,1)$, so $\mathbf{a}\times(\nabla\times\mathbf{a}) = (x-y,\; y-z,\; z-x)$; also $\tfrac12\nabla(x^2+y^2+z^2) = (x,y,z)$; and $(\mathbf{a}\cdot\nabla)\mathbf{a} = (z\partial_x + x\partial_y + y\partial_z)(z,x,y) = (y,\,z,\,x)$. Then $(x,y,z) - (x-y,y-z,z-x) = (y,z,x)$, as the identity requires.
:::

:::example[A solenoidal field from two potentials]{provenance=adapted src="rhb-2006:§10.8.2, Eq. (10.43), p. 357"}
This one is not ours: Riley, Hobson and Bence work it as the example closing their §10.8.2 (Eq. (10.43), p. 357), to show how two of the identities above combine, and we reproduce their route because it is the shortest there is.

Let $\phi$ and $\psi$ be $C^2$ scalar fields. Product rule 4 holds for any pair of vector fields, so take the pair to be the two gradients, $\mathbf{a} = \nabla\phi$ and $\mathbf{b} = \nabla\psi$:
$$
\nabla\cdot(\nabla\phi\times\nabla\psi) = \nabla\psi\cdot(\nabla\times\nabla\phi) - \nabla\phi\cdot(\nabla\times\nabla\psi) = 0 ,
$$
since each bracket on the right is the curl of a gradient, which vanishes by the first of the two vanishing identities. (The $C^2$ hypothesis is needed exactly there, and nowhere else in the calculation.)

Two comments of our own. First, $\nabla\phi\times\nabla\psi$ is therefore solenoidal for *every* pair of potentials, which is a cheap way to manufacture divergence-free fields; the Clebsch representation $\mathbf{v} = \nabla\phi\times\nabla\psi$ in fluid mechanics is this observation put to work. Second, the field is also tangent to both families of level surfaces $\{\phi = \text{const}\}$ and $\{\psi = \text{const}\}$, being orthogonal to both normals, so its field lines are the curves where those two families intersect.
:::

:::application{provenance=adapted src="arfken-2013:§3.6, Example 3.6.2 and Eqs. (3.70)–(3.71), pp. 155–156"}
**The electromagnetic wave equation is one application of the curl-of-curl identity.** In vacuum, with no charges or currents, Maxwell's equations read $\nabla\cdot\mathbf{E} = 0$, $\nabla\cdot\mathbf{B} = 0$, $\nabla\times\mathbf{E} = -\partial\mathbf{B}/\partial t$ and $\nabla\times\mathbf{B} = \epsilon_0\mu_0\,\partial\mathbf{E}/\partial t$. Take the curl of the third and substitute the fourth:
$$
\nabla\times(\nabla\times\mathbf{E}) = -\frac{\partial}{\partial t}\bigl(\nabla\times\mathbf{B}\bigr) = -\epsilon_0\mu_0\frac{\partial^2\mathbf{E}}{\partial t^2}.
$$
Now the identity turns the left side into $\nabla(\nabla\cdot\mathbf{E}) - \nabla^2\mathbf{E}$, whose first term vanishes by the first equation. What is left is
$$
\nabla^2\mathbf{E} = \epsilon_0\mu_0\frac{\partial^2\mathbf{E}}{\partial t^2} = \frac{1}{c^2}\frac{\partial^2\mathbf{E}}{\partial t^2},
$$
three uncoupled scalar wave equations, one per Cartesian component, propagating at $c = (\epsilon_0\mu_0)^{-1/2}$ (:ref[]{to=pde.wave-three-dimensions}); the same argument on $\mathbf{B}$ gives the same equation. This is Arfken, Weber and Harris's Example 3.6.2 (p. 156), and the step that does the work is the one that converts a curl of a curl into a Laplacian. The decoupling into components is Cartesian only, by the remark above.

**The vanishing identities are why potentials exist.** Because $\nabla\cdot(\nabla\times\mathbf{a}) = 0$, Maxwell's $\nabla\cdot\mathbf{B} = 0$ is solved identically by $\mathbf{B} = \nabla\times\mathbf{A}$ for a vector potential $\mathbf{A}$; and because $\nabla\times\nabla\phi = \mathbf{0}$, that $\mathbf{A}$ is only determined up to $\mathbf{A} + \nabla\chi$ — which is gauge freedom, read off from a vector identity. The same pair of identities gives the structure of :ref[]{to=vcalc.helmholtz-decomposition} and, in conservative mechanics, lets an irrotational force field be written as $-\nabla V$.

**Fluid mechanics: the advective term is a gradient plus a vorticity term.** The identity derived in part (c) of the example, applied to a velocity field $\mathbf{v}$ with vorticity $\boldsymbol{\zeta} = \nabla\times\mathbf{v}$, gives
$$
(\mathbf{v}\cdot\nabla)\mathbf{v} = \nabla\Bigl(\tfrac12|\mathbf{v}|^2\Bigr) - \mathbf{v}\times\boldsymbol{\zeta}.
$$
Substituting this into Euler's equation separates the nonlinear advective term into a part that is a pure gradient — which can be absorbed into the pressure head, giving Bernoulli's theorem along streamlines in steady irrotational flow — and a part that vanishes exactly when the flow is irrotational or the velocity is parallel to the vorticity. Taking the curl of the resulting equation and using $\nabla\times\nabla(\cdot) = \mathbf{0}$ eliminates both the pressure and the kinetic-energy head at a stroke and yields the vorticity equation, which is how the subject is usually set up.
:::
