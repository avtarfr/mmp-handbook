---
id: vcalc.stokes-theorem
title: Stokes' theorem and Green's theorem in the plane
kind: theorem
level: core
summary: Proves Green's theorem in the plane for a region bounded by graphs in both coordinate directions, then obtains Stokes' theorem — the circulation of a $C^1$ field round the perimeter of an oriented surface equals the flux of its curl through the surface — by pulling the circulation back to the parameter domain, and fixes the orientation convention that makes the two sides agree in sign.
prereqs: [vcalc.surface-integrals, vcalc.line-integrals, vcalc.divergence-curl, vcalc.vector-algebra, found.change-of-variables, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§11.3, Eq. (11.4) and Fig. 11.3, pp. 384–385 (Green's theorem in a plane, with the proof by iterated integrals in each direction; the area formula $A = \\tfrac12\\oint(x\\,dy - y\\,dx)$ and the extension to multiply connected regions); §11.9, Eq. (11.23), pp. 406–407 (Stokes' theorem and the subdivision argument)"
    pages: "384-385, 406-407"
    role: the statement of Green's theorem with its hypotheses, the proof route by iterated integrals, the area corollary, and the statement of Stokes' theorem
  - work: strauss-2008
    loc: "Appendix §A.3, Green's Theorem 6, p. 422 and the remarks on p. 423 (the orientation 'traversed once with $D$ on the left', the circulation reading, and the annulus)"
    pages: "422-423"
    role: the precise hypotheses (bounded plane domain, piecewise $C^1$ boundary, $C^1$ functions on the closed region) and the orientation convention
  - work: arfken-2013
    loc: "§3.8, 'Stokes' Theorem', Eqs. (3.91)–(3.93) with Fig. 3.16, p. 167, and Eqs. (3.94)–(3.95), p. 168; Example 3.8.2 (Oersted's and Faraday's laws), p. 168; §3.7, p. 161 and Fig. 3.13 (the right-hand rule for the positive normal)"
    pages: "161, 167-168"
    role: the statement, the vanishing of the curl flux through a closed surface, the companion identities, and the two electromagnetic applications
  - work: lee-2013
    loc: "Ch. 16, Theorem 16.34 (Stokes's Theorem for Surface Integrals), p. 427, with the curl defined by $(\\operatorname{curl}X)\\mathbin{\\lrcorner} dV_g = d(X^\\flat)$, Eq. (16.14), p. 426"
    pages: "426-427"
    role: the general version on an oriented Riemannian 3-manifold, as a corollary of Stokes's theorem for forms
---

:::statement[Green's theorem in the plane]{provenance=adapted src="strauss-2008:Appendix §A.3, Green's Thm 6, p. 422; rhb-2006:§11.3, Eq. (11.4), p. 384"}
Let $R$ be a bounded plane domain whose boundary $C = \partial R$ is a piecewise $C^1$ curve. Parametrize $C$ to go round exactly once, keeping $R$ to the left-hand side; for a region with no holes that is the anticlockwise direction, seen from the positive $z$-axis. Let $P$ and $Q$ be $C^1$ functions on $\overline R = R \cup C$. Then

$$
\oint_C \bigl(P\, dx + Q\, dy\bigr) \;=\; \iint_R \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx\, dy .
$$

Riley, Hobson and Bence impose their hypothesis on $P$, $Q$ and the partial derivatives of both: all are to be single-valued, finite and continuous, on $R$ as well as on its boundary curve, and their $R$ is simply connected. For a multiply connected region the line integral is taken over *all* the boundary curves, each traversed with $R$ on the left — so the outer boundary anticlockwise and each hole clockwise. Strauss's example is the annulus, whose boundary is a pair of circles traversed in opposite senses.

Two equivalent readings, both used below:

- **Circulation form.** With $\mathbf{f} = (P,Q)$ and $\hat{\boldsymbol{\tau}}$ the unit tangent in the direction of travel, the left side is $\oint_C \mathbf{f}\cdot\hat{\boldsymbol{\tau}}\, ds$, the circulation of $\mathbf{f}$ round $C$.
- **Divergence form.** Putting $P = -g$, $Q = f$ for $\mathbf{f} = (f,g)$, and using $\hat{\mathbf{n}}\, ds = (dy, -dx)$ for the outward normal, the theorem becomes $\iint_R \nabla\cdot\mathbf{f}\; dA = \oint_C \mathbf{f}\cdot\hat{\mathbf{n}}\, ds$: the two-dimensional :ref[divergence theorem]{to=vcalc.divergence-theorem}.
:::

:::statement[Stokes' theorem]{provenance=adapted src="rhb-2006:§11.9, Eq. (11.23), p. 406; arfken-2013:§3.8, Eq. (3.92), p. 167 and Eqs. (3.94)–(3.95), p. 168; lee-2013:Ch. 16, Thm 16.34, p. 427"}
Let $S$ be a two-sided (orientable) piecewise $C^1$ surface in $\mathbb{R}^3$ with perimeter curve $C = \partial S$, piecewise $C^1$, and let $\mathbf{F}$ be a $C^1$ vector field on an open set containing $S$. Orient $S$ by a choice of unit normal $\hat{\mathbf{n}}$ and let $C$ be traversed in the sense the right-hand rule attaches to $\hat{\mathbf{n}}$ (the convention of :ref[surface integrals]{to=vcalc.surface-integrals}: with $\mathbf{u}$ along the direction of travel and $\mathbf{v}$ tangent to $S$ and pointing into it, $\hat{\mathbf{n}}$ is the direction of $\mathbf{u}\times\mathbf{v}$; Arfken asks of $\mathbf{v}$ only that it be tangent to the surface and lie on it, leaving the sense to his Fig. 3.13, so the words "pointing into it" are the disambiguation made here and in that unit, not his). Then

$$
\int_S \bigl(\nabla\times\mathbf{F}\bigr)\cdot d\mathbf{S} \;=\; \oint_C \mathbf{F}\cdot d\mathbf{r} .
$$

Riley, Hobson and Bence note that the theorem holds for simply and multiply connected open surfaces alike, provided they are two-sided; for a multiply connected $S$ the right side becomes a sum over all the boundary curves, each taken in the sense attached to $\hat{\mathbf{n}}$. Two immediate consequences:

- **Closed surfaces.** A closed surface has no perimeter, so $\displaystyle\oint_S (\nabla\times\mathbf{F})\cdot d\mathbf{S} = 0$ for every closed $S$: a curl has no net flux through any closed surface. (Consistently, $\nabla\cdot(\nabla\times\mathbf{F}) = 0$.)
- **Surface independence.** Two surfaces spanning the same curve $C$, with normals agreeing with the same traversal of $C$, give the same flux of $\nabla\times\mathbf{F}$ — provided $\mathbf{F}$ is $C^1$ on one open set containing *both* of them. The hypothesis is not a formality: the last remark below exhibits a field, and two surfaces spanning one circle, for which it fails and the two fluxes are not even both defined.

The companion identities obtained by Arfken with an arbitrary constant vector are

$$
\int_S d\mathbf{S}\times\nabla\varphi = \oint_C \varphi\, d\mathbf{r}, \qquad\qquad
\int_S (d\mathbf{S}\times\nabla)\times\mathbf{P} = \oint_C d\mathbf{r}\times\mathbf{P} ,
$$

for $\varphi$ and $\mathbf{P}$ of class $C^1$ on an open set containing $S$, with $\nabla$ in the second acting on $\mathbf{P}$ alone. Arfken states these without derivation, saying only that they come from the same arbitrary-vector technique that gave him the companion identities of the divergence theorem (his Eqs. (3.89)–(3.90)); the third proof below carries that technique out.
:::

:::idea{provenance=original}
Green's theorem is the fundamental theorem of calculus applied twice, once in each coordinate direction, exactly as in the divergence theorem: integrating $\partial P/\partial y$ across the region in the $y$-direction leaves the values of $P$ on the top and bottom arcs, and those two arcs *are* the boundary, traversed in opposite senses — which is where the minus sign in front of $\partial P /\partial y$ comes from. The term in $Q$ is the same computation turned on its side.

Stokes' theorem then needs no new analysis, only a change of variables. Push the circulation integral back to the flat parameter domain: a tangent vector to the boundary curve of $S$ is $\mathbf{r}_u\,du + \mathbf{r}_v\,dv$, so $\mathbf{F}\cdot d\mathbf{r}$ becomes a plane line integral with $P = \mathbf{F}\cdot\mathbf{r}_u$ and $Q = \mathbf{F}\cdot\mathbf{r}_v$. Green's theorem converts it to a double integral, and the combination $\partial_u Q - \partial_v P$ turns out to be exactly $(\nabla\times\mathbf{F})\cdot(\mathbf{r}_u\times\mathbf{r}_v)$: the second derivatives of $\mathbf{r}$ cancel because mixed partials commute, and what remains is an algebraic identity about cross products. So the curl appears not because it was put in by hand but because it is what survives.
:::

:::proof[Green's theorem]{provenance=adapted src="rhb-2006:§11.3, pp. 384–385"}
Assume first that $R$ is describable in both of the two ways

$$
R = \bigl\{(x,y) : a \le x \le b,\; y_1(x) \le y \le y_2(x)\bigr\}
= \bigl\{(x,y) : c \le y \le d,\; x_1(y) \le x \le x_2(y)\bigr\},
$$

with $y_1 \le y_2$ and $x_1 \le x_2$ piecewise $C^1$. (This is the situation of Riley, Hobson and Bence's Fig. 11.3; a disc, a convex region and a rectangle are all of this kind.)

**Step 1 (the term in $P$).** Since $\partial P/\partial y$ is continuous on the compact set $\overline R$, it is bounded and integrable there, so the double integral may be written as an iterated integral (:ref[iterated integrals]{to=found.change-of-variables}), innermost in $y$; the inner integral is then evaluated by the fundamental theorem of calculus at fixed $x$:

$$
\iint_R \frac{\partial P}{\partial y}\; dx\, dy = \int_a^b \Bigl[ P\bigl(x, y_2(x)\bigr) - P\bigl(x, y_1(x)\bigr) \Bigr]\, dx .
$$

**Step 2 (the same difference as a line integral).** Traversing $C$ with $R$ on the left means going along the *lower* arc $y = y_1(x)$ in the direction of increasing $x$ and back along the *upper* arc $y = y_2(x)$ in the direction of decreasing $x$. Any vertical segments of $C$ (at $x = a$ or $x = b$) contribute nothing to $\oint P\, dx$ because $dx = 0$ on them. Hence

$$
\oint_C P\, dx = \int_a^b P\bigl(x,y_1(x)\bigr)\, dx + \int_b^a P\bigl(x,y_2(x)\bigr)\, dx = -\iint_R \frac{\partial P}{\partial y}\; dx\, dy ,
$$

using Step 1 in the last equality. The minus sign is produced by the direction of travel, not by any choice of ours.

**Step 3 (the term in $Q$).** Now use the second description of $R$ and integrate innermost in $x$:

$$
\iint_R \frac{\partial Q}{\partial x}\; dx\, dy = \int_c^d \Bigl[ Q\bigl(x_2(y), y\bigr) - Q\bigl(x_1(y), y\bigr) \Bigr]\, dy .
$$

With $R$ on the left, the *right* arc $x = x_2(y)$ is traversed with $y$ increasing and the left arc $x = x_1(y)$ with $y$ decreasing, while horizontal segments contribute nothing to $\oint Q\, dy$. So

$$
\oint_C Q\, dy = \int_c^d Q\bigl(x_2(y),y\bigr)\, dy + \int_d^c Q\bigl(x_1(y),y\bigr)\, dy = \iint_R \frac{\partial Q}{\partial x}\; dx\, dy ,
$$

this time with no sign change: the two orientations work out oppositely in the two directions, which is precisely why the integrand of Green's theorem is a difference.

**Step 4 (add).** Adding Steps 2 and 3 gives the theorem for a region describable in both ways at once.

**Step 5 (regions assembled from finitely many such pieces).** Suppose next that $R = R_1\cup\dots\cup R_m$, where each $R_i$ is a region of the kind Steps 1–3 treat, the $R_i$ meet only along arcs of their boundaries, and each $\partial R_i$ is traversed with $R_i$ on the left. Add the theorem over the pieces. An arc interior to $R$ belongs to exactly two of the pieces, which lie on opposite sides of it, so it is traversed once in each direction and its two contributions to $\oint(P\,dx + Q\,dy)$ cancel; the double integrals add to $\iint_R$. What survives on the line-integral side is the integral over the part of $\bigcup_i\partial R_i$ that lies in $\partial R$, each arc still carrying $R$ on its left. So the theorem holds for $R$. The same bookkeeping covers a multiply connected $R$, whose boundary is then a family of curves, the outer one anticlockwise and each hole clockwise. $\square$
:::

:::note{provenance=adapted src="strauss-2008:Appendix §A.3, Green's Thm 6, p. 422; rhb-2006:§11.3, Eq. (11.4) and p. 385"}
**What the proof above covers, and what is taken on authority.** Steps 1–5 prove Green's theorem for a plane region that is a finite union of pieces each of which is a graph region in both coordinate directions. The statement at the head of this unit is the stronger one — every bounded plane domain with piecewise $C^1$ boundary — and that gap is not closed here, exactly as the gap between simple regions and general ones is left open in :ref[the divergence theorem]{to=vcalc.divergence-theorem}.

The gap is real, not just unaddressed: a bounded domain with piecewise $C^1$ boundary need not admit a finite decomposition of that kind. Let
$$
f(x) = 2 + x^3\sin(1/x) \quad (0 < x \le 1), \qquad f(0) = 2 ,
$$
which is $C^1$ on $[0,1]$, since $f'(x) = 3x^2\sin(1/x) - x\cos(1/x) \to 0 = f'(0)$ as $x \to 0^+$, and let $R$ be the region $\{0 < x < 1,\; 0 < y < f(x)\}$. Let $I_1, I_2, \dots$ be the maximal open intervals of $(0,1)$ on which $\sin(1/x) > 0$; there are infinitely many, they are pairwise disjoint, and $f > 2$ exactly on their union. Put $B_j = \{(x,y) : x \in I_j,\ 2 < y < f(x)\}$, an infinite family of pairwise disjoint nonempty open subsets of $R$, any two of which are separated by the line $y = 2$ in the sense that no connected subset of $R \cap \{y > 2\}$ meets two of them.

Now suppose $R = \bigcup_{k=1}^{N} R_k$ were a finite decomposition into two-way graph regions, and write the $y$-description of the $k$th piece as $R_k = \{(x,y) : c_k \le y \le d_k,\ a_k(y) \le x \le b_k(y)\}$ with $a_k \le b_k$ continuous on $[c_k, d_k]$. The part of that piece above the line,
$$
R_k \cap \{y > 2\} = \bigl\{ (x,y) : \max(c_k, 2) < y \le d_k,\ a_k(y) \le x \le b_k(y) \bigr\} ,
$$
is connected: each of its horizontal slices is the single interval $[a_k(y), b_k(y)]$, each slice meets the left edge $\{(a_k(y), y) : \max(c_k, 2) < y \le d_k\}$, and that edge is connected, being the image of an interval under a continuous map — and a union of connected sets all meeting one connected set is connected. Since the $B_j$ are separated in the sense just noted, a connected subset of $R \cap \{y > 2\}$ meets at most one of them, so each $R_k$ meets at most one $B_j$. With only $N$ pieces and infinitely many $B_j$, some $B_j$ is met by no piece at all; as $B_j$ is a nonempty subset of $R$, this contradicts $\bigcup_k R_k = R$.

We therefore take the general statement unproved, from Strauss's Green's Theorem 6 (p. 422), who states it for any bounded plane domain with piecewise $C^1$ boundary and refers the reader elsewhere for the proof, and from Riley, Hobson and Bence's Eq. (11.4) (p. 384), whose own derivation is exactly Steps 1–4 for the single region of their Fig. 11.3, the extension to multiply connected regions being introduced on p. 385 with the words "it may further be shown". The proof of Stokes' theorem below uses Green's theorem only on parameter domains, and is written so as to say which of the two cases it is invoking.
:::

:::proof[Stokes' theorem for a $C^2$ patch]{provenance=original}
Let $S = \mathbf{r}(D)$ be a regular patch with $\mathbf{r}$ of class $C^2$ on a compact parameter domain $D$ to which Green's theorem applies — either a domain of the two-way graph form that Steps 1–4 of the previous proof treat directly, or a finite union of those, which its Step 5 covers; the note above says what is taken on authority beyond that. Require $\mathbf{r}$ to be **injective on the whole of $D$**, not merely regular, and orient $S$ by $\hat{\mathbf{n}} = (\mathbf{r}_u\times\mathbf{r}_v)/\lvert\mathbf{r}_u\times\mathbf{r}_v\rvert$. Let $\mathbf{F}$ be $C^1$ on an open set containing $S$.

Injectivity is what makes the two descriptions of the perimeter agree. A regular injective $\mathbf{r}$ on the compact set $D$ is a homeomorphism of $D$ onto $S$, so it carries the interior of $D$ onto the points of $S$ with a neighbourhood in $S$ and $\partial D$ onto the rest; that is, $\mathbf{r}(\partial D)$ is precisely the perimeter $C = \partial S$ named in the statement. Without injectivity the image of $\partial D$ need not be the boundary of the image at all: a map $\mathbf{r}$ that wraps $D$ twice over the same patch has $\mathbf{r}(\partial D)$ running round $S$'s rim twice, and the identity proved below would then compute twice the flux, not the circulation of the statement.

**Step 1 (orientation bookkeeping).** Traverse $\partial D$ anticlockwise, with $D$ on the left, and let $C = \mathbf{r}(\partial D)$ — the perimeter $\partial S$ of the statement, by the injectivity just assumed — carry the induced direction. This is the right-hand traversal relative to $\hat{\mathbf{n}}$. To see it, look at a boundary point in parameters where $D$ is locally the half-plane $v \ge 0$ with boundary the $u$-axis: with $D$ on the left, the direction of travel is $+u$, so the travel vector on $S$ is $\mathbf{u} = \mathbf{r}_u$, and the tangent to $S$ pointing into the surface is $\mathbf{v} = \mathbf{r}_v$. Then $\mathbf{u}\times\mathbf{v} = \mathbf{r}_u\times\mathbf{r}_v$, which is the chosen normal — exactly the right-hand rule in the form fixed in the statement.

**Step 2 (pull the circulation back to the parameters).** Let $t \mapsto (u(t),v(t))$ parametrize $\partial D$. The image curve is $t\mapsto\mathbf{r}(u(t),v(t))$, with velocity $\mathbf{r}_u u' + \mathbf{r}_v v'$ by the chain rule. Therefore

$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \oint_{\partial D}\Bigl[ \bigl(\mathbf{F}\cdot\mathbf{r}_u\bigr)\, du + \bigl(\mathbf{F}\cdot\mathbf{r}_v\bigr)\, dv \Bigr] ,
$$

a plane line integral with $P = \mathbf{F}(\mathbf{r})\cdot\mathbf{r}_u$ and $Q = \mathbf{F}(\mathbf{r})\cdot\mathbf{r}_v$ as functions of $(u,v)$. Both are $C^1$ on $D$: $\mathbf{F}$ is $C^1$ and $\mathbf{r}$ is $C^2$, so $\mathbf{r}_u$ and $\mathbf{r}_v$ are $C^1$.

**Step 3 (apply Green's theorem).** By the previous proof,

$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_D \left( \frac{\partial}{\partial u}\bigl(\mathbf{F}\cdot\mathbf{r}_v\bigr) - \frac{\partial}{\partial v}\bigl(\mathbf{F}\cdot\mathbf{r}_u\bigr) \right) du\, dv .
$$

**Step 4 (the second derivatives of $\mathbf{r}$ cancel).** By the product rule and the chain rule,

$$
\frac{\partial}{\partial u}\bigl(\mathbf{F}\cdot\mathbf{r}_v\bigr) = \bigl[(\mathbf{r}_u\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{r}_v + \mathbf{F}\cdot\mathbf{r}_{vu},
\qquad
\frac{\partial}{\partial v}\bigl(\mathbf{F}\cdot\mathbf{r}_u\bigr) = \bigl[(\mathbf{r}_v\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{r}_u + \mathbf{F}\cdot\mathbf{r}_{uv} ,
$$

where $(\mathbf{a}\cdot\nabla)\mathbf{F}$ denotes the vector with components $a_m\,\partial F_n/\partial x_m$. Here the hypothesis $\mathbf{r} \in C^2$ is used: $\mathbf{r}_{uv} = \mathbf{r}_{vu}$, so the two terms containing them cancel on subtraction, leaving

$$
\frac{\partial Q}{\partial u} - \frac{\partial P}{\partial v} = \bigl[(\mathbf{r}_u\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{r}_v - \bigl[(\mathbf{r}_v\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{r}_u .
$$

**Step 5 (this is the curl, dotted with the normal).** For any two vectors $\mathbf{a}, \mathbf{b}$ and any differentiable $\mathbf{F}$, the epsilon-delta identity $\varepsilon_{kmn}\varepsilon_{kpq} = \delta_{mp}\delta_{nq} - \delta_{mq}\delta_{np}$ (:ref[vector algebra]{to=vcalc.vector-algebra}) gives

$$
\bigl(\nabla\times\mathbf{F}\bigr)\cdot\bigl(\mathbf{a}\times\mathbf{b}\bigr)
= \varepsilon_{kmn}\,\partial_mF_n\;\varepsilon_{kpq}\,a_pb_q
= a_m\,\partial_mF_n\,b_n - b_m\,\partial_mF_n\,a_n
= \bigl[(\mathbf{a}\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{b} - \bigl[(\mathbf{b}\cdot\nabla)\mathbf{F}\bigr]\cdot\mathbf{a} .
$$

With $\mathbf{a} = \mathbf{r}_u$, $\mathbf{b} = \mathbf{r}_v$ this is exactly the integrand of Step 4.

**Step 6 (conclude).** Substituting into Step 3,

$$
\oint_C \mathbf{F}\cdot d\mathbf{r} = \iint_D \bigl(\nabla\times\mathbf{F}\bigr)\cdot\bigl(\mathbf{r}_u\times\mathbf{r}_v\bigr)\, du\, dv = \int_S \bigl(\nabla\times\mathbf{F}\bigr)\cdot d\mathbf{S} ,
$$

the last equality being the definition of a flux integral over the patch. For a surface made of several patches, add: interior edges are traversed twice in opposite directions when the patches are consistently oriented, and cancel. $\square$
:::

:::proof[The two companion identities]{provenance=adapted src="arfken-2013:§3.8, Eqs. (3.94)–(3.95), p. 168"}
Both come from Stokes' theorem applied to a field built out of an arbitrary *constant* vector $\mathbf{a}$ — the technique Arfken points to but does not carry out. Being constant, $\mathbf{a}$ passes through $\nabla$ and through both integral signs; $(\mathbf{a}\cdot\nabla)\mathbf{P}$ keeps the meaning it was given in the previous proof, the vector with components $a_m\,\partial P_n/\partial x_m$. Throughout, $S$ and $C$ satisfy the hypotheses of the theorem and $\varphi, \mathbf{P}$ are $C^1$ on an open set containing $S$.

**Step 1 (one cyclic rule, used twice).** For any three vectors, $(\mathbf{u}\times\mathbf{a})\cdot\mathbf{w} = \det[\mathbf{u}, \mathbf{a}, \mathbf{w}] = \det[\mathbf{a}, \mathbf{w}, \mathbf{u}] = \mathbf{a}\cdot(\mathbf{w}\times\mathbf{u})$, the two determinants differing by a cyclic permutation of their rows, which is an even permutation.

**Step 2 (the scalar identity).** Take $\mathbf{F} = \varphi\,\mathbf{a}$. Then $\nabla\times(\varphi\mathbf{a}) = \nabla\varphi\times\mathbf{a}$, since the term $\varphi\,\nabla\times\mathbf{a}$ vanishes for constant $\mathbf{a}$. Apply Stokes' theorem to this $\mathbf{F}$; rewrite its flux side by Step 1 with $\mathbf{u} = \nabla\varphi$ and $\mathbf{w} = \hat{\mathbf{n}}$, and its circulation side by pulling the scalar $\varphi$ past the dot product. This gives

$$
\mathbf{a}\cdot\int_S \bigl(\hat{\mathbf{n}}\times\nabla\varphi\bigr)\, dS
= \int_S \bigl(\nabla\varphi\times\mathbf{a}\bigr)\cdot d\mathbf{S}
= \oint_C \varphi\,\mathbf{a}\cdot d\mathbf{r}
= \mathbf{a}\cdot\oint_C \varphi\, d\mathbf{r} .
$$

**Step 3 (strip the arbitrary vector).** The outer two members agree for every constant $\mathbf{a}$; taking $\mathbf{a} = \hat{\mathbf{i}}, \hat{\mathbf{j}}, \hat{\mathbf{k}}$ in turn equates the three components of the two vectors, which is the first identity, Arfken's Eq. (3.94), since $\hat{\mathbf{n}}\,dS = d\mathbf{S}$.

**Step 4 (the vector identity: the left side of Stokes).** Take $\mathbf{F} = \mathbf{P}\times\mathbf{a}$. With the epsilon-delta identity used in the previous proof,

$$
\bigl[\nabla\times(\mathbf{P}\times\mathbf{a})\bigr]_i = \varepsilon_{ijk}\,\partial_j\bigl(\varepsilon_{klm}P_la_m\bigr)
= \bigl(\delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}\bigr)a_m\,\partial_jP_l
= \bigl[(\mathbf{a}\cdot\nabla)\mathbf{P}\bigr]_i - a_i\,\nabla\cdot\mathbf{P} ,
$$

using $\varepsilon_{ijk}\varepsilon_{klm} = \varepsilon_{kij}\varepsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$. On the circulation side, Step 1 with $\mathbf{u} = \mathbf{P}$ and $\mathbf{w} = d\mathbf{r}$ gives $(\mathbf{P}\times\mathbf{a})\cdot d\mathbf{r} = \mathbf{a}\cdot(d\mathbf{r}\times\mathbf{P})$. So Stokes' theorem reads

$$
\int_S \Bigl[(\mathbf{a}\cdot\nabla)\mathbf{P} - \mathbf{a}\,\bigl(\nabla\cdot\mathbf{P}\bigr)\Bigr]\cdot d\mathbf{S} = \mathbf{a}\cdot\oint_C d\mathbf{r}\times\mathbf{P} .
$$

**Step 5 (recognise the left side as $(d\mathbf{S}\times\nabla)\times\mathbf{P}$).** Expanding that double cross product with $(\hat{\mathbf{n}}\times\nabla)_j = \varepsilon_{jlm}n_l\partial_m$, and using $\varepsilon_{ijk}\varepsilon_{jlm} = -\varepsilon_{jik}\varepsilon_{jlm} = -(\delta_{il}\delta_{km} - \delta_{im}\delta_{kl})$,

$$
\bigl[(\hat{\mathbf{n}}\times\nabla)\times\mathbf{P}\bigr]_i = \varepsilon_{ijk}\,\varepsilon_{jlm}\,n_l\,\partial_mP_k
= -\bigl(n_i\,\partial_kP_k - n_k\,\partial_iP_k\bigr)
= n_k\,\partial_iP_k - n_i\,\nabla\cdot\mathbf{P} .
$$

Dotting with $\mathbf{a}$ and collecting, $\mathbf{a}\cdot\bigl[(\hat{\mathbf{n}}\times\nabla)\times\mathbf{P}\bigr] = n_k\,(\mathbf{a}\cdot\nabla)P_k - (\mathbf{a}\cdot\hat{\mathbf{n}})\,\nabla\cdot\mathbf{P} = \bigl[(\mathbf{a}\cdot\nabla)\mathbf{P} - \mathbf{a}(\nabla\cdot\mathbf{P})\bigr]\cdot\hat{\mathbf{n}}$, which is exactly the integrand of Step 4.

**Step 6 (conclude).** Therefore $\mathbf{a}\cdot\int_S (d\mathbf{S}\times\nabla)\times\mathbf{P} = \mathbf{a}\cdot\oint_C d\mathbf{r}\times\mathbf{P}$ for every constant $\mathbf{a}$, and stripping $\mathbf{a}$ as in Step 3 gives the second identity, Arfken's Eq. (3.95). $\square$
:::

:::note{provenance=adapted src="lee-2013:Ch. 16, Thm 16.34 and Eq. (16.14), pp. 426–427; rhb-2006:§11.9, p. 406; arfken-2013:§3.8, p. 167"}
**Other routes, and the general version.** Riley, Hobson and Bence and Arfken both derive Stokes' theorem by dividing $S$ into a mesh of small rectangles, applying the circulation definition of the curl to each, and observing that all interior edges cancel in pairs. That argument shows *why* the theorem is true and is the one to remember, but turning it into a proof requires an estimate of the error on each cell and a limit; the route through Green's theorem above avoids that. The statement in its full generality — $S$ a compact oriented two-dimensional submanifold with boundary in an oriented Riemannian 3-manifold — is Lee's Theorem 16.34, proved by applying Stokes's theorem for differential forms to the 1-form $\mathbf{F}^\flat$ and identifying $d(\mathbf{F}^\flat)$ with the curl; see :ref[Stokes' theorem for forms]{to=geom.stokes-forms}, which contains Green's theorem, Stokes' theorem and the divergence theorem as the three cases $n = 2$, and $(2,3)$ and $(3,3)$ of one statement.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Orientation is not a convention one may drop.* Both sides change sign when the traversal of $C$ is reversed, and both change sign when $\hat{\mathbf{n}}$ is reversed; the theorem is the statement that they change together. Arfken makes the point that this is why no sign ambiguity arises in Faraday's law. Fixing one of the two and reading off the other, as in Step 1, is the only safe procedure.
- *Two-sidedness.* A Möbius strip has a perimeter and a well-defined circulation round it, but no continuous normal field, so the left-hand side is not even defined. This is the one hypothesis with no analogue in the divergence theorem, where the boundary of a solid region is automatically two-sided.
- *$\mathbf{r} \in C^2$, used twice.* In Step 2 it makes the coefficients $P, Q$ of the pulled-back line integral of class $C^1$, which is what lets Green's theorem be applied to them in Step 3; in Step 4 it gives $\mathbf{r}_{uv} = \mathbf{r}_{vu}$, so that the two mixed terms cancel. Our proof therefore covers the $C^2$ case and no more. The statement above is nevertheless given for two-sided piecewise $C^1$ surfaces, on the authority of Riley, Hobson and Bence (§11.9, p. 406), who state the theorem for any two-sided open surface, simply or multiply connected, and attach no smoothness hypothesis to it at all; Arfken's mesh derivation (p. 167) is the same argument, with the same silence. The merely $C^1$ case is proved nowhere in this handbook. It needs $S$ to be approximated by smoother surfaces, and the nearest result in our library, Lee's Theorem 16.34 quoted in the note above, assumes a smooth submanifold and so does not contain it either. What is unproved here is the smoothness of the surface and nothing else: the extension from one patch to a surface made of several is the last line of the proof.
- *$\mathbf{F} \in C^1$ on a neighbourhood of $S$, not just on $S$.* The curl involves derivatives of $\mathbf{F}$ in the direction off the surface as well as along it. A field defined only on $S$ has no curl.
- *$\mathbf{F}$ must be $C^1$ at every point of $S$, including points not on $C$.* Take $\mathbf{F} = (-y, x, 0)/(x^2+y^2)$ on the complement of the $z$-axis, for which $\nabla\times\mathbf{F} = \mathbf{0}$ (see :ref[line integrals]{to=vcalc.line-integrals}), and let $C$ be the unit circle in the plane $z = 0$. The circulation is $2\pi$, but every surface spanning $C$ meets the $z$-axis, where $\mathbf{F}$ is undefined; so the flux side is not available, and no contradiction arises. If instead $S$ is a disc spanning a circle that does *not* encircle the axis, both sides are $0$.
- *Why the two readings of Green's theorem are the same theorem.* In the plane, replacing $\mathbf{f} = (f,g)$ by $(-g, f)$ rotates the field by a quarter turn, which exchanges its tangential and normal components on $C$ and exchanges $\nabla\cdot\mathbf{f}$ with the scalar curl $\partial_xg - \partial_yf$. Strauss records the substitution $P = -g$, $Q = f$ explicitly; the two forms carry exactly the same information.
- *Relation to the plane case.* Green's theorem is Stokes' theorem for a flat surface in the plane $z = 0$ with $\hat{\mathbf{n}} = \hat{\mathbf{k}}$: for $\mathbf{F} = (P, Q, 0)$ the only surviving component of the curl is $(\nabla\times\mathbf{F})_3 = \partial_xQ - \partial_yP$. Our proof runs in that direction — Green first, then Stokes — so it cannot be reversed without circularity.
:::

:::example[Green's theorem: the area inside an astroid]{provenance=original}
Putting $P = -y$, $Q = x$ in Green's theorem makes the integrand $\partial_xQ - \partial_yP = 2$, so for any region $R$ with piecewise $C^1$ boundary

$$
\operatorname{area}(R) = \frac12\oint_C \bigl(x\, dy - y\, dx\bigr) ,
$$

which turns an area into a one-dimensional integral along the boundary. Take the astroid

$$
x = a\cos^3 t, \qquad y = a\sin^3 t, \qquad 0 \le t \le 2\pi \quad (a > 0),
$$

traversed anticlockwise, which encloses a region $R$ with four cusps.

1. *Differentials.* $dx = -3a\cos^2 t\,\sin t\; dt$ and $dy = 3a\sin^2 t\,\cos t\; dt$.
2. *Integrand.*
   $$
   x\, dy - y\, dx = 3a^2\bigl(\cos^4t\,\sin^2t + \sin^4t\,\cos^2t\bigr)\, dt = 3a^2\cos^2t\,\sin^2t\,\bigl(\cos^2t+\sin^2t\bigr)\, dt = \tfrac34 a^2\sin^2 2t\; dt ,
   $$
   using $\cos t\sin t = \tfrac12\sin 2t$.
3. *Integrate.* Since $\int_0^{2\pi}\sin^2 2t\, dt = \pi$,
   $$
   \operatorname{area}(R) = \frac12\cdot\frac{3a^2}{4}\cdot\pi = \frac{3\pi a^2}{8} .
   $$
   For $a = 2$ this is $3\pi/2 = 4.71239$.
4. *Check, by trapping $R$ between two shapes whose areas are known.* On the curve,
   $$
   \lvert x\rvert + \lvert y\rvert = a\bigl(\lvert\cos t\rvert^3 + \lvert\sin t\rvert^3\bigr) \le a\bigl(\cos^2 t + \sin^2 t\bigr) = a ,
   $$
   since $\lvert\cos t\rvert \le 1$ and $\lvert\sin t\rvert \le 1$. So the boundary lies in the diamond $\lvert x\rvert + \lvert y\rvert \le a$, which is convex and therefore contains $R$ as well; the diamond's area is $2a^2$, so $\operatorname{area}(R) \le 2a^2$. In the other direction, on the curve
   $$
   r^2 = x^2 + y^2 = a^2\bigl(\cos^6 t + \sin^6 t\bigr) = a^2\Bigl(1 - \tfrac34\sin^2 2t\Bigr) \ge \frac{a^2}{4} ,
   $$
   so every boundary point is at distance at least $a/2$ from the origin; and $R$ is star-shaped about the origin, each ray from it meeting the curve exactly once, so $R$ contains the disc of radius $a/2$ and $\operatorname{area}(R) \ge \pi a^2/4$. Hence
   $$
   \frac{\pi}{4} = 0.78540 \;\le\; \frac{3\pi}{8} = 1.17810 \;\le\; 2 ,
   $$
   in units of $a^2$: the computed area does lie between the two bounds, nearer the lower one, as the four concave sides should make it.

   The cusps at $t = 0, \pi/2, \pi, 3\pi/2$, where $(x', y') = \mathbf{0}$, do no harm, but not because the parametrization is smooth. What Green's theorem requires is that the boundary be a piecewise $C^1$ *curve*, and it is: the four open arcs between consecutive cusps are regular $C^1$ arcs, and the cusps are the finitely many corner points at which the pieces join — exactly as for the corners of a square. The line integral is then computed from the given $C^\infty$ parametrization, whose velocity vanishing at four isolated parameter values affects neither the integrand nor the value of the integral.
:::

:::example[Stokes' theorem on a triangle, both sides computed]{provenance=original}
Let $S$ be the flat triangle with vertices $A = (1,0,0)$, $B = (0,1,0)$, $C_0 = (0,0,1)$ and perimeter traversed $A \to B \to C_0 \to A$, and let

$$
\mathbf{F} = (z,\; x,\; y) .
$$

1. *Orientation.* Two edge vectors in the direction of travel are $B - A = (-1,1,0)$ and $C_0 - B = (0,-1,1)$, and
   $$
   (-1,1,0)\times(0,-1,1) = (1,\,1,\,1) ,
   $$
   so the right-hand traversal corresponds to $\hat{\mathbf{n}} = (1,1,1)/\sqrt3$, the normal pointing away from the origin. The triangle is equilateral with side $\lvert B-A\rvert = \sqrt2$, so its area is $\tfrac{\sqrt3}{4}(\sqrt2)^2 = \tfrac{\sqrt3}{2}$.
2. *Flux of the curl.*
   $$
   \nabla\times\mathbf{F} = \Bigl(\frac{\partial y}{\partial y} - \frac{\partial x}{\partial z},\; \frac{\partial z}{\partial z} - \frac{\partial y}{\partial x},\; \frac{\partial x}{\partial x} - \frac{\partial z}{\partial y}\Bigr) = (1,1,1) ,
   $$
   a constant field, so
   $$
   \int_S (\nabla\times\mathbf{F})\cdot d\mathbf{S} = (1,1,1)\cdot\frac{(1,1,1)}{\sqrt3}\;\cdot\frac{\sqrt3}{2} = \sqrt3\cdot\frac{\sqrt3}{2} = \frac{3}{2} .
   $$
3. *Circulation, edge by edge.* Each edge is a straight segment $\mathbf{r}(t) = \mathbf{p} + t(\mathbf{q}-\mathbf{p})$, $0 \le t \le 1$.
   - $A \to B$: $\mathbf{r} = (1-t,\, t,\, 0)$, $\mathbf{r}' = (-1,1,0)$, and $\mathbf{F}(\mathbf{r}) = (z,x,y) = (0,\, 1-t,\, t)$, so $\mathbf{F}\cdot\mathbf{r}' = 1-t$ and the contribution is $\int_0^1 (1-t)\,dt = \tfrac12$.
   - $B \to C_0$: $\mathbf{r} = (0,\, 1-t,\, t)$, $\mathbf{r}' = (0,-1,1)$, $\mathbf{F}(\mathbf{r}) = (t,\, 0,\, 1-t)$, so $\mathbf{F}\cdot\mathbf{r}' = 1-t$: again $\tfrac12$.
   - $C_0 \to A$: $\mathbf{r} = (t,\, 0,\, 1-t)$, $\mathbf{r}' = (1,0,-1)$, $\mathbf{F}(\mathbf{r}) = (1-t,\, t,\, 0)$, so $\mathbf{F}\cdot\mathbf{r}' = 1-t$: again $\tfrac12$.

   Hence $\displaystyle\oint_C \mathbf{F}\cdot d\mathbf{r} = 3\cdot\tfrac12 = \tfrac32$.
4. *Comparison.* Both sides equal $\tfrac32$.
5. *Surface independence, checked.* Replace $S$ by the three right triangles $OAB$, $OBC_0$, $OC_0A$ with $O$ the origin; together they span the same perimeter, because the three segments $OA$, $OB$, $OC_0$ each belong to two of them and cancel. Consistency forces the boundary traversals $A\to B\to O\to A$, $B\to C_0\to O\to B$ and $C_0\to A\to O\to C_0$, whose right-hand normals are, by the same cross-product computation as in step 1,
   $$
   (-1,1,0)\times(0,-1,0) = \hat{\mathbf{k}}, \qquad (0,-1,1)\times(0,0,-1) = \hat{\mathbf{i}}, \qquad (1,0,-1)\times(-1,0,0) = \hat{\mathbf{j}} .
   $$
   Each triangle has area $\tfrac12$, so each contributes $(1,1,1)\cdot\hat{\mathbf{e}}\cdot\tfrac12 = \tfrac12$, and the total is again $\tfrac32$. Note that these three normals point *into* the tetrahedron $OABC_0$; the orientation is fixed by the perimeter, not by any region.
:::

:::application{provenance=adapted src="arfken-2013:§3.8, Example 3.8.2, p. 168"}
Stokes' theorem is what converts the two curl equations of Maxwell's set between their differential and circuit forms. Integrating $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$ over a disc $S$ pierced by a current-carrying wire and applying the theorem gives

$$
\oint_{\partial S}\mathbf{B}\cdot d\mathbf{r} = \mu_0 \int_S \mathbf{J}\cdot d\mathbf{S} = \mu_0 I ,
$$

which is Ampère's law in the form Arfken calls Oersted's law; the surface-independence property is what makes "the current enclosed by the loop" well defined. Integrating $\nabla\times\mathbf{E} = -\partial\mathbf{B}/\partial t$ over a circuit of area $S$ gives

$$
\oint_{\partial S}\mathbf{E}\cdot d\mathbf{r} = -\frac{d\Phi}{dt}, \qquad \Phi = \int_S\mathbf{B}\cdot d\mathbf{S} ,
$$

Faraday's law: the voltage induced in a loop of wire is minus the rate at which magnetic flux through the loop changes. Two separate things are often run together here. Reversing the sense of the loop reverses $d\mathbf{r}$ and therefore also $d\mathbf{S}$ and the flux $\Phi$, so both sides change sign together and the prediction does not depend on which way round the loop was labelled: that is Arfken's "no sign ambiguity" remark (p. 168), a statement about orientation. Lenz's law is the content of the minus sign itself — the induced current flows so as to oppose the change in flux — and it is what makes a transformer or an alternator work rather than run away.

In fluid mechanics the circulation $\Gamma = \oint_C\mathbf{u}\cdot d\mathbf{r}$ round a closed curve equals the flux of the vorticity $\boldsymbol{\omega} = \nabla\times\mathbf{u}$ through any surface spanning it; this is the identity behind Kelvin's circulation theorem, the Kutta–Joukowski lift formula, and the statement that a vortex tube's strength is constant along its length. Green's theorem in its own right is the planimeter's mathematics: an instrument that traces the boundary of a shape and reads off $\tfrac12\oint(x\,dy - y\,dx)$ returns its area, and the same formula is how a geographic information system computes the area of a polygon from its vertex list.
:::
