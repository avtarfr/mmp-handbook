---
id: complex.cauchy-theorem
title: Cauchy's theorem
kind: theorem
level: core
summary: "The integral of an analytic function around a closed contour in a simply connected region is zero; consequently a contour may be deformed freely within a region of analyticity, and in a multiply connected region the integral reduces to one loop around each hole."
prereqs: [complex.contour-integrals, complex.cauchy-riemann, found.connectedness-homotopy, vcalc.stokes-theorem, found.compactness]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§11.3, Eq. (11.18) and the definition of simply connected, pp. 478–479; the proof by Stokes' theorem, Eqs. (11.21)–(11.25), pp. 481–482; Multiply Connected Regions, Eqs. (11.26)–(11.28), pp. 483–484"
    pages: "478-484"
    role: statement for a simply connected region and the explicit restriction (continuous partials) under which the Green/Stokes proof is given; the barrier construction and the resulting deformation principle
  - work: ahlfors-1979
    loc: "Ch. 4, §1.4, Thm 2 (Goursat, rectangle), pp. 109–111; §1.5, Thm 4 (disk), p. 113; §4.2, Definition 1 and Thm 14, p. 139; §4.3–4.4, Definition 2, Thm 15 and Corollary 1, p. 141"
    pages: "109-113, 139, 141"
    role: Goursat's bisection proof, which needs no hypothesis beyond analyticity; the passage from a rectangle to a disk by constructing a primitive; a different definition of simple connectivity and the general homology form of the theorem, which we quote but do not prove
  - work: rhb-2006
    loc: "§24.9, Eqs. (24.40)–(24.45), pp. 849–851"
    pages: "849-851"
    role: the statement with f' continuous and the remark that the continuity is removable; the Green's theorem proof; the two-paths and contour-deformation corollaries
---

:::definition[Simply connected regions and orientation]{provenance=adapted src="arfken-2013:§11.3, p. 479; rhb-2006:§24.9, p. 850"}
A **region** here is a non-empty connected open subset of $\mathbb{C}$. Call $\Omega$ **simply connected** when each closed curve lying in it can be contracted, continuously and without ever leaving $\Omega$, down to a single point of $\Omega$ — informally, when $\Omega$ has no holes. (For the precise notion of such a shrinking, see :ref[connectedness and homotopy]{to=found.connectedness-homotopy}.) A region that is not simply connected is **multiply connected**; the punctured disk $0 < \lvert z\rvert < 1$ and any annulus are the standard examples.

A simple closed contour is positively oriented when the bounded region it encloses lies to its left. For a contour encircling an interior point this is the counterclockwise sense, that of increasing polar angle.
:::

:::statement[Cauchy-Goursat theorem]{provenance=adapted src="arfken-2013:§11.3, Eq. (11.18), p. 478; ahlfors-1979:Ch. 4, §1.4, Thm 2, p. 109 and §1.5, Thm 4, p. 113"}
Let $f$ be analytic on a simply connected region $\Omega$ and let $\gamma$ be any closed path in $\Omega$. Then

$$
\oint_\gamma f(z)\,dz = 0 .
$$

Two special cases carry the proof and are worth stating separately.

1. **Rectangle (Goursat).** If $R$ is a closed rectangle with sides parallel to the axes and $f$ is analytic on an open set containing $R$, then $\oint_{\partial R} f(z)\,dz = 0$.
2. **Disk.** If $f$ is analytic on an open disk $\Delta$, then $\oint_\gamma f(z)\,dz = 0$ for every closed path $\gamma$ in $\Delta$; equivalently, $f$ has a primitive on $\Delta$.

No hypothesis beyond analyticity of $f$ is needed. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.3, pp. 481–482"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.9, p. 849"} both prove the theorem under the extra assumption that the first partial derivatives of $u$ and $v$ are continuous (equivalently that $f'$ is continuous), and both record that the extra assumption is not necessary; part 1 is where it is removed.
:::

:::note[What is proved here, and what is quoted]{provenance=adapted src="ahlfors-1979:Ch. 4, §4.2, Definition 1 and Thm 14, p. 139, and §4.4, Thm 15 with Corollary 1, p. 141; arfken-2013:§11.3, p. 479"}
Two points of honesty about the statement above.

1. **Which definition of simple connectivity.** We use the contractibility definition of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.3, p. 479"}. :cite[Ahlfors]{work=ahlfors-1979 loc="Definition 1, p. 139"} instead calls a region simply connected when its complement *in the extended plane* is connected, and then proves (his Theorem 14, p. 139) that this is equivalent to every closed curve in the region having winding number zero about every point outside it. For plane regions the three descriptions single out the same regions; we do not prove that equivalence here, and :ref[the winding number]{to=complex.winding-number} is where the third one is developed.

2. **Which cases we prove.** The proofs below establish the rectangle and disk cases in full generality (no hypothesis beyond analyticity), and the simply connected case for a simple closed contour under the additional hypothesis that the first partials of $u$ and $v$ are continuous. The general statement — every closed path, every simply connected region, analyticity alone — is :cite[Ahlfors]{work=ahlfors-1979 loc="Thm 15 and Corollary 1, p. 141"}'s homology form of Cauchy's theorem, proved there by reducing an arbitrary cycle homologous to zero to a combination of rectangle boundaries. That reduction is a topological argument beyond the scope of this unit, and we quote the result rather than prove it. Nothing later in this chapter needs more than the disk case plus the deformation principle.
:::

:::statement[Deformation of contours and multiply connected regions]{provenance=adapted src="arfken-2013:§11.3, Eqs. (11.26)–(11.28), pp. 483–484; rhb-2006:§24.9, Eqs. (24.43)–(24.45), pp. 850–851"}
Let $f$ be analytic on a region $\Omega$.

1. **Two paths.** If $\gamma_1$ and $\gamma_2$ are paths in $\Omega$ with the same initial and the same final point, and the region enclosed between them lies in $\Omega$, then $\int_{\gamma_1}f\,dz = \int_{\gamma_2}f\,dz$. "The region enclosed between them" is the wording of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.9, p. 850"}, and it names nothing definite unless $\gamma_1$ followed by the reverse of $\gamma_2$ is a simple closed curve. We read the hypothesis in the form the proof actually uses: *$\gamma_1$ followed by the reverse of $\gamma_2$ can be contracted to a point inside $\Omega$*, which is what sweeping across an enclosed region in $\Omega$ accomplishes when there is one.
2. **Deformation.** If $C$ and $\sigma$ are positively oriented simple closed contours with $\sigma$ inside $C$, and $f$ is analytic on the closed region between them, then

   $$
   \oint_C f(z)\,dz = \oint_\sigma f(z)\,dz .
   $$

   More generally, the value of $\oint_\gamma f\,dz$ is unchanged by any continuous deformation of $\gamma$ within the region of analyticity, which precludes moving the contour across a point where $f$ fails to be analytic.
3. **Several holes.** If $C$ is a positively oriented simple closed contour and $\sigma_1,\dots,\sigma_m$ are positively oriented simple closed contours inside $C$, mutually exterior to one another, and $f$ is analytic on the closed region inside $C$ and outside all the $\sigma_k$, then

   $$
   \oint_C f(z)\,dz = \sum_{k=1}^{m}\oint_{\sigma_k} f(z)\,dz .
   $$
:::

:::idea{provenance=original}
Three ideas, in increasing subtlety.

For the simply connected statement under the extra hypothesis that $f'$ is continuous, there is nothing to invent: $f\,dz$ is a pair of real one-forms, Green's theorem in the plane converts the loop integral into an area integral, and the Cauchy-Riemann equations say the two integrands vanish identically.

Goursat's proof of part 1 dispenses with that hypothesis by using differentiability where it is strongest, namely at a single point. Bisect the rectangle repeatedly, always keeping a quarter whose integral is at least a quarter of the current one; the rectangles shrink to a point $z_*$. Near $z_*$ the function agrees with its own affine approximation to within $\varepsilon\lvert z - z_*\rvert$, for any $\varepsilon$ we fix in advance and all $z$ close enough; and the affine part integrates to zero around any closed contour because $1$ and $z$ have primitives. The error contributes at most $\varepsilon \cdot (\text{diameter})\cdot(\text{perimeter})$, and under bisection diameter and perimeter each halve, so this bound decays like $4^{-n}$ — at exactly the rate at which the bisection inflates the integral. The two rates cancel and leave $\lvert\oint\rvert \le \varepsilon\,dL$ for every $\varepsilon$.

Part 2 then upgrades rectangles to all closed paths in a disk by building a primitive: integrate along a horizontal-then-vertical staircase from the centre. Part 1 says the vertical-then-horizontal staircase gives the same value, and comparing the two ways of reaching a nearby point yields the two partial derivatives of the primitive; the fundamental theorem for primitives finishes it. The deformation results are a bookkeeping trick: cut the region between the two contours with a thin bridge to make it simply connected, apply the theorem, and let the two edges of the bridge cancel.
:::

:::proof[Simply connected regions, with $f'$ continuous]{provenance=adapted src="arfken-2013:§11.3, Eqs. (11.21)–(11.25), pp. 481–482; rhb-2006:§24.9, Eqs. (24.41)–(24.42), p. 849"}
Assume for this proof that $u$ and $v$ have continuous first partial derivatives, and let $\gamma$ be a positively oriented simple closed contour in $\Omega$ bounding the region $A$. We need $A \subseteq \Omega$. That holds because $\Omega$ is simply connected, by a fact of plane topology — a simply connected plane region contains the inside of every simple closed curve lying in it, equivalently a region with a hole has closed curves it cannot fill in — which we use here without proof; it belongs to the circle of ideas of :ref[connectedness and simple connectivity]{to=found.connectedness-homotopy} and of the equivalences recorded in the note above. Readers who prefer no appeal to topology may take $A \subseteq \Omega$ as a hypothesis: it is satisfied in every application below.

**Step 1 (split into real line integrals).** With $f = u+iv$ and $dz = dx + i\,dy$, as in :ref[the definition of a contour integral]{to=complex.contour-integrals},

$$
\oint_\gamma f\,dz = \oint_\gamma (u\,dx - v\,dy) + i\oint_\gamma (v\,dx + u\,dy) .
$$

**Step 2 (Green's theorem in the plane).** Both are real line integrals of the form $\oint_\gamma (P\,dx + Q\,dy)$ with $P,Q$ having continuous first partials on $A$ and its boundary, so :ref[Stokes' theorem in the plane]{to=vcalc.stokes-theorem} applies to each:

$$
\oint_\gamma (P\,dx + Q\,dy) = \iint_A \Bigl(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\Bigr)\,dx\,dy .
$$

**Step 3 (the integrands vanish).** For the first integral take $P = u$, $Q = -v$; for the second, $P = v$, $Q = u$. The two area integrands are

$$
-v_x - u_y \qquad\text{and}\qquad u_x - v_y ,
$$

and both are identically zero on $A$ by the :ref[Cauchy-Riemann equations]{to=complex.cauchy-riemann}, which hold at every point of $\Omega$ because $f$ is analytic there. Hence $\oint_\gamma f\,dz = 0$.

Steps 1 to 3 prove the theorem for a *simple* closed contour in $\Omega$, which is the case needed in everything that follows. $\square$
:::

:::proof[Part 1: Goursat's theorem for a rectangle]{provenance=adapted src="ahlfors-1979:Ch. 4, §1.4, Thm 2, pp. 109–111"}
No continuity of $f'$ is assumed. For a rectangle $S$ with sides parallel to the axes write $\eta(S) = \oint_{\partial S}f\,dz$, the boundary positively oriented.

**Step 1 (bisection does not lose everything).** Divide $S$ into four congruent rectangles $S^{(1)},\dots,S^{(4)}$ by halving each side. Each interior edge of the subdivision occurs in exactly two of the four boundaries, with opposite orientations, so those contributions cancel and

$$
\eta(S) = \eta(S^{(1)}) + \eta(S^{(2)}) + \eta(S^{(3)}) + \eta(S^{(4)}) .
$$

By the triangle inequality at least one $k$ has $\lvert \eta(S^{(k)})\rvert \ge \tfrac14\lvert\eta(S)\rvert$; choose one such (say the first in a fixed ordering) and call it $R_1$.

**Step 2 (nested rectangles).** Repeating, we get $R \supset R_1 \supset R_2 \supset \cdots$ with

$$
\lvert \eta(R_n)\rvert \ge 4^{-n}\lvert\eta(R)\rvert ,
$$

and with diameter $d_n = 2^{-n}d$ and perimeter $L_n = 2^{-n}L$, where $d$ and $L$ are those of $R$. The $R_n$ are nested non-empty compact sets with diameters tending to $0$, so by :ref[compactness]{to=found.compactness} they have exactly one common point $z_*$, and every neighbourhood of $z_*$ contains all but finitely many $R_n$.

**Step 3 (use differentiability at the one point $z_*$).** Let $\varepsilon > 0$. Since $f$ is analytic on an open set containing $R$, it is differentiable at $z_*$, so there is $\delta > 0$ with

$$
\bigl\lvert f(z) - f(z_*) - (z-z_*)f'(z_*)\bigr\rvert \le \varepsilon\,\lvert z - z_*\rvert
\qquad\text{whenever } \lvert z - z_*\rvert < \delta .
$$

Fix $n$ with $R_n \subset \{\lvert z - z_*\rvert < \delta\}$.

**Step 4 (the affine part integrates to zero).** The functions $1$ and $z$ have the primitives $z$ and $z^2/2$, entire; so by part 5 of :ref[the properties of contour integrals]{to=complex.contour-integrals}, $\oint_{\partial R_n} dz = 0$ and $\oint_{\partial R_n} z\,dz = 0$. Therefore the constant $f(z_*) - z_*f'(z_*)$ and the linear term $zf'(z_*)$ contribute nothing and

$$
\eta(R_n) = \oint_{\partial R_n}\bigl[f(z) - f(z_*) - (z - z_*)f'(z_*)\bigr]dz .
$$

**Step 5 (estimate and compare the two rates).** By the ML estimate in its arc-length form, and because $\lvert z - z_*\rvert \le d_n$ on $\partial R_n$ (both points lie in $R_n$),

$$
\lvert\eta(R_n)\rvert \le \varepsilon \oint_{\partial R_n} \lvert z - z_*\rvert\,\lvert dz\rvert \le \varepsilon\, d_n L_n = \varepsilon\,4^{-n} d L .
$$

Combining with Step 2, $4^{-n}\lvert\eta(R)\rvert \le \varepsilon\,4^{-n}dL$, so $\lvert \eta(R)\rvert \le \varepsilon\,dL$. As $\varepsilon>0$ was arbitrary and $d, L$ are fixed, $\eta(R) = 0$. $\square$
:::

:::proof[Part 2: from a rectangle to a disk]{provenance=adapted src="ahlfors-1979:Ch. 4, §1.5, Thm 4, p. 113"}
Let $f$ be analytic on the open disk $\Delta$ with centre $z_0 = x_0 + iy_0$, and define, for $z = x+iy \in \Delta$,

$$
F(z) = \int_{\sigma_z} f(\zeta)\,d\zeta ,
$$

where $\sigma_z$ is the horizontal segment from $(x_0,y_0)$ to $(x,y_0)$ followed by the vertical segment from $(x,y_0)$ to $(x,y)$. Both segments lie in $\Delta$, because a disk contains the whole axis-parallel rectangle determined by its centre and any of its points.

**Step 1 ($\partial F/\partial y$).** Only the second segment depends on $y$, and on it $\zeta = x + is$ with $d\zeta = i\,ds$, so $F(z) = c(x) + i\int_{y_0}^{y}f(x+is)\,ds$. Since $f$ is continuous, the fundamental theorem of calculus gives $\partial F/\partial y = if(z)$.

**Step 2 ($\partial F/\partial x$).** Let $\tilde\sigma_z$ be the other staircase: vertical from $(x_0,y_0)$ to $(x_0,y)$, then horizontal to $(x,y)$. Together, $\sigma_z$ and the reverse of $\tilde\sigma_z$ traverse the boundary of the rectangle with opposite corners $z_0$ and $z$, which lies in $\Delta$; by part 1 that boundary integral is $0$, so $\int_{\tilde\sigma_z}f = \int_{\sigma_z}f = F(z)$. Now only the final horizontal segment of $\tilde\sigma_z$ depends on $x$, and there $\zeta = s + iy$ with $d\zeta = ds$, so $F(z) = \tilde c(y) + \int_{x_0}^{x}f(s+iy)\,ds$ and $\partial F/\partial x = f(z)$.

**Step 3 ($F$ is analytic with $F' = f$).** From Steps 1 and 2, $F_x = f = -i(if) = -iF_y$, which is the Cauchy-Riemann condition in the combined form of :ref[the Cauchy-Riemann theorem]{to=complex.cauchy-riemann}; and $F_x = f$ is continuous. Hence $F$ is analytic on $\Delta$ with $F' = f$.

**Step 4 (conclusion).** $f$ has a primitive on $\Delta$, so by the fundamental theorem for contour integrals its integral over every closed path in $\Delta$ vanishes. $\square$
:::

:::proof[Deformation and multiply connected regions]{provenance=adapted src="arfken-2013:§11.3, Eqs. (11.26)–(11.28), pp. 483–484; rhb-2006:§24.9, Eqs. (24.43)–(24.45), pp. 850–851; ahlfors-1979:Ch. 4, §4.4, Thm 15 and Corollary 1, p. 141 (quoted in part 1)"}
**Part 1 (two paths).** Let $\gamma$ be $\gamma_1$ followed by the reverse of $\gamma_2$; since the two paths share both endpoints, $\gamma$ is a closed path in $\Omega$. By the hypothesis as read in the statement, $\gamma$ can be contracted to a point within $\Omega$. A closed path contractible in $\Omega$ has winding number zero about every point of the complement of $\Omega$, since the winding number is unchanged under a homotopy that never crosses the point and is $0$ for a constant path; in :cite[Ahlfors]{work=ahlfors-1979 loc="§4.3, Definition 2, p. 141"}'s language $\gamma$ is then *homologous to zero* in $\Omega$, and his Theorem 15 — the homology form of Cauchy's theorem, which the note above records as quoted and not proved here — gives the conclusion. Both the winding-number fact and the theorem are taken on quotation; they are developed in :ref[the winding number]{to=complex.winding-number}. Hence $\oint_\gamma f\,dz = 0$, that is $\int_{\gamma_1}f\,dz - \int_{\gamma_2}f\,dz = 0$ by the reversal and subdivision rules for contour integrals.

Note what is and is not assumed here: $\gamma$ need not be simple and $\Omega$ need not be simply connected, but the price is that this part leans on the homology form of the theorem, which the note above says we quote rather than prove. When $\gamma$ happens to be a simple closed curve whose inside lies in $\Omega$, or to lie inside a disk contained in $\Omega$, the conclusion follows instead from the Green's theorem proof or from part 2 of the Cauchy-Goursat statement, with nothing quoted.

**Part 2 (deformation).** Cut the annular region between $C$ and $\sigma$ along two nearby arcs $\lambda$ and $\lambda'$ joining a point of $\sigma$ to a point of $C$. Travelling along $C$ in the positive sense, then inward along $\lambda'$, then around $\sigma$ in the *negative* sense, then outward along $\lambda$, produces a single closed contour $\Gamma$ which does not enter the hole; the region it encloses is simply connected and contained in the region of analyticity, so $\oint_\Gamma f\,dz = 0$. Now let $\lambda$ and $\lambda'$ approach each other. Their contributions tend to the integrals of $f$ along the same arc in opposite directions, which cancel, because $f$ is continuous across the cut — unlike a :ref[branch cut]{to=complex.branch-points-cuts}, this barrier is of our own making. What is left is

$$
\oint_C f\,dz - \oint_\sigma f\,dz = 0 .
$$

For the general deformation statement, a continuous deformation that stays in the region of analyticity can be performed in finitely many steps each of which replaces an arc by another arc with the same endpoints, the region between them lying in $\Omega$; each such step changes nothing by part 1.

**Part 3 (several holes).** Insert one cut from $C$ to each $\sigma_k$. The same construction yields one closed contour enclosing a simply connected region of analyticity, and the cuts cancel in pairs, leaving $\oint_C f\,dz - \sum_k \oint_{\sigma_k} f\,dz = 0$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Simple connectivity is indispensable.* On the region $\Omega = \{0 < \lvert z\rvert < 2\}$, which is not simply connected, $f(z) = 1/z$ is analytic, yet $\oint_{\lvert z\rvert = 1} dz/z = 2\pi i \ne 0$. Every later appearance of a nonzero contour integral traces back to this example.
- *What the hypothesis asks for is a simply connected region of analyticity containing the contour* — and it is enough that *some* such region exist, even a small one. The same $1/z$ is analytic on the disk $\lvert z - 1\rvert < 1$, which is simply connected, so every closed path inside that disk integrates to zero. Conversely the circle $\lvert z\rvert = 1$ lies in no simply connected subregion of $\Omega$ on which $1/z$ is analytic, which is why the theorem has nothing to say about it. In practice one therefore looks for the largest convenient simply connected subregion, rather than asking whether the region one started with is simply connected.
- *Analyticity on the enclosed region, not just on the contour.* $\oint_{\lvert z\rvert=1}dz/z \ne 0$ although $1/z$ is perfectly well behaved on the circle itself. The theorem is a statement about what the contour surrounds: if $f$ is analytic on an open set containing a simple closed contour *and its inside*, the integral does vanish, and the $1/z$ example escapes only because the enclosed point $0$ is excluded.
- *Continuity of $f'$ is used only in the Green's theorem proof*, at Step 2, where Stokes' theorem in the plane needs continuously differentiable $P$ and $Q$. Goursat's proof shows that the conclusion survives without it; this matters because the whole point of :ref[Cauchy's integral formula]{to=complex.cauchy-integral-formula} is to *deduce* smoothness of $f'$ rather than assume it, and assuming it here would make the later argument circular. Both :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.4, footnote 3, p. 488"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.9, p. 850"} flag the point and omit the stronger proof; we give it.
- *The cancelling bridges in the deformation proof need $f$ continuous across the bridge.* That is why the same picture must not be used across a branch cut, where the two edges carry different values of the function and their contributions add instead of cancelling.
- *Orientation matters in part 3.* With all contours positively oriented, the inner integrals are *added*; if the $\sigma_k$ are traversed clockwise, as they are when one regards $\Gamma$ as a single boundary, the signs flip and the total is zero.
:::

:::example[Deforming a square to a circle]{provenance=original}
Evaluate $I = \oint_{S} dz/z$, where $S$ is the boundary of the square with vertices $\pm 2 \pm 2i$, positively oriented.

1. *Choose the deformation.* $1/z$ is analytic on $\mathbb{C}\setminus\{0\}$, and the closed region between $S$ and the unit circle $\lvert z\rvert = 1$ contains no singularity, so part 2 applies.
2. *Evaluate on the easy contour.* $\oint_{\lvert z\rvert = 1}dz/z = 2\pi i$ by part 5 of :ref[the properties of contour integrals]{to=complex.contour-integrals}.
3. *Conclusion.* $I = 2\pi i \approx 6.283185\,i$. Direct numerical integration along the four sides of the square gives $6.283185\,i$ to six digits, which is the check.
4. *Contrast.* For the square $S'$ with vertices $3\pm i$ and $5 \pm i$, which does not enclose the origin, $1/z$ is analytic on a simply connected region containing $S'$ and its interior, so $\oint_{S'}dz/z = 0$.
:::

:::example[A contour with two holes]{provenance=original}
Let $g(z) = \dfrac{1}{z^2 - 1} = \dfrac{1}{2}\Bigl(\dfrac{1}{z-1} - \dfrac{1}{z+1}\Bigr)$ and let $C$ be the circle $\lvert z \rvert = 3$, positively oriented.

1. *Isolate the holes.* $g$ is analytic except at $z = \pm1$. Take $\sigma_{\pm}$ to be the positively oriented circles of radius $\tfrac12$ about $\pm 1$; they lie inside $C$ and are mutually exterior, and $g$ is analytic on the closed region inside $C$ and outside both.
2. *Apply part 3.* $\oint_C g = \oint_{\sigma_+} g + \oint_{\sigma_-} g$.
3. *Evaluate each.* On $\sigma_+$, the term $-\tfrac12/(z+1)$ is analytic inside, so by Cauchy-Goursat it integrates to zero, and $\oint_{\sigma_+}g = \tfrac12\oint_{\sigma_+}\frac{dz}{z-1} = \tfrac12 \cdot 2\pi i = \pi i$. Symmetrically $\oint_{\sigma_-}g = -\tfrac12\cdot 2\pi i = -\pi i$.
4. *Total.* $\oint_C g\,dz = \pi i - \pi i = 0$.
5. *Check by the ML estimate.* On $\lvert z\rvert = R$ we have $\lvert z^2-1\rvert \ge R^2 - 1$, so $\lvert\oint_{\lvert z\rvert = R} g\rvert \le 2\pi R/(R^2-1)$, which tends to $0$ as $R \to \infty$; by part 2 the integral is the same for every $R>1$, so it must be $0$ for all of them — consistent with the computation, and an instance of the standard way to show that a sum of residues vanishes.
:::

:::application{provenance=original}
Cauchy's theorem is the reason so many physical quantities are path independent, and the deformation principle is the reason the ones that are not depend only on what is enclosed.

- *Vortices and circulation.* In two-dimensional ideal flow the complex velocity of a point vortex of strength $\kappa$ at the origin is $\kappa/(2\pi i z)$. The circulation around any loop enclosing the vortex is $\kappa$, by deformation to a small circle, and zero around any loop that does not: the "hole" in the region of analyticity is the vortex core. The same statement in electromagnetism is Ampère's law for a thin wire, and in superfluids and type-II superconductors it is the quantization of circulation and of magnetic flux.
- *Rotating the integration path.* Because the integral over a closed contour vanishes, a real integral along the axis may be replaced by one along any deformed path with the same endpoints, provided no singularity is crossed. This is how steepest-descent and saddle-point evaluations are justified (:ref[the method of steepest descent]{to=asym.steepest-descent} and :ref[stationary phase]{to=asym.stationary-phase}), how a Fourier integral is turned into a convergent one by moving into the upper half-plane, and how the Matsubara and Wick rotations of quantum field theory are carried out.
- *Causality and dispersion.* A response function analytic in a half-plane has, by Cauchy's theorem, a vanishing integral around a contour closing in that half-plane; moving the contour onto the real axis converts this into a relation between the real and imaginary parts of the response, which is the Kramers-Kronig relation (:ref[dispersion relations]{to=complex.dispersion-relations}).
:::
