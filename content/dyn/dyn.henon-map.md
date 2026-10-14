---
id: dyn.henon-map
title: The Henon map and strange attractors
kind: example
level: advanced
summary: Shows how repeated stretching, folding and re-injection builds a strange attractor, writes Henon's map as the composition of a fold, a contraction and a flip, proves it is invertible with constant area ratio $-b$, locates its two saddles and an exact trapping quadrilateral at $a = 1.4$, $b = 0.3$, and measures the attractor there -- Lyapunov exponents $0.4191$ and $-1.6231$, correlation dimension $1.21$, box dimension $1.25$, and a transverse cut resolving into sheets in groups of one, two and three.
prereqs: [dyn.fractals, dyn.one-dimensional-maps, dyn.lyapunov-exponents, linalg.eigenvalues-eigenvectors, found.compactness]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§12.0-12.1, pp. 423-425: the reconciliation of bounded motion with exponential separation by repeated stretching and folding, the pastry picture of flattening, folding and re-injection, the doubling of the layers at each stage, and the conclusion that a transverse cross section of the limiting set resembles a Cantor set, so the set is locally a smooth curve times a Cantor set; §12.2, pp. 429-434: Henon's motivation (the factor of about $14{,}000$ by which the Lorenz flow squashes a volume in one circuit, and the wish for an adjustable amount of dissipation), the map $x_{n+1} = y_n + 1 - a x_n^2$, $y_{n+1} = b x_n$, its construction as the composition of the fold $T'$, the contraction $T''$ and the reflection $T'''$, the four elementary properties (invertibility, constant area contraction, the existence of a trapping region, and the escape of some orbits to infinity), Examples 12.2.1 and 12.2.2 (the inverse, and $\\det J = -b$), the reasons for choosing $b = 0.3$ and $a = 1.4$, the period-doubling route as $a$ increases, the successive magnifications of the attractor that reveal six curves grouped one, two and three at every scale, and the result of Benedicks and Carleson that the attractor is the closure of a branch of the unstable manifold of the saddle point"
    pages: "423-425, 429-434"
    role: the stretching-and-folding mechanism and its Cantor-like cross section; the Henon map, its construction, its four elementary properties and the standard parameter values; the self-similar layering of the attractor; the unstable-manifold description
---

:::definition[Stretching, folding, re-injection, and Henon's map]{provenance=adapted src="strogatz-1994:§12.0-12.1, pp. 423-425, and §12.2, pp. 429-430"}
A **strange attractor** -- an attractor carrying chaotic motion, in the sense of :ref[Lyapunov exponents and sensitive dependence]{to=dyn.lyapunov-exponents} -- has to do two incompatible-looking things at once. Nearby states must separate exponentially, yet the whole motion must stay inside a bounded set. The way out is **stretching and folding**. Take a small blob of initial conditions. Dissipation squeezes it flat in some directions while the instability draws it out in others; the stretching cannot continue indefinitely inside a bounded region, so the elongated blob is bent back over itself and laid down beside where it started. That last step is the **re-injection**. Rolling and folding dough is the standard picture: each pass doubles the number of layers and halves their thickness, so after many passes a cut across the slab meets a set of layers separated by gaps of every size, and a speck of colouring placed in the dough is drawn out and distributed through it. In the limit the layers accumulate on a set that is, transverse to the sheets, a :ref[Cantor set]{to=dyn.fractals}, and along the sheets a smooth curve or surface. That product structure -- smooth one way, Cantor the other -- is what "strange" means geometrically, and the exponential separation is the stretching seen in the tangent space.

Henon built the smallest concrete model of this mechanism. He wanted the stretch-and-fold action of :ref[the Lorenz system]{to=dyn.lorenz-equations} with the amount of dissipation under the author's control: Lorenz's flow squashes a phase volume by a factor of roughly $14{,}000$ in one circuit of the attractor, which packs the sheets far too tightly to be resolved numerically. A map, besides, iterates faster and more accurately than a differential equation is integrated. The **Henon map** is

$$
T(x, y) \;=\; \bigl(\,y + 1 - a x^2,\ b x\,\bigr), \qquad a > 0,\ \ 0 < |b| < 1 ,
$$

written as a difference scheme $x_{n+1} = y_n + 1 - a x_n^2$, $y_{n+1} = b x_n$. It is assembled from three elementary moves, each of which is one word of the mechanism above. Begin with a region elongated along the $x$-axis.

1. **Fold.** $T'(x, y) = (x,\ 1 + y - a x^2)$ bends the region over a parabola; horizontal lines become downward parabolas, and $a$ sets how sharp the bend is.
2. **Contract.** $T''(x, y) = (b x,\ y)$ squeezes it horizontally by the factor $|b|$. This is the dissipation, and because the region is now bent it also tightens the fold.
3. **Flip.** $T'''(x, y) = (y,\ x)$ reflects in the diagonal, returning the long axis to the horizontal so that the next pass can repeat the first two moves.

Composing, $T = T''' \circ T'' \circ T'$, which is the formula above. The **Henon attractor** is the attractor obtained at the standard parameters $a = 1.4$, $b = 0.3$, which lie well inside the chaotic range: as $a$ is increased at fixed $b = 0.3$ the map passes from a stable fixed point through a stable $2$-cycle and the rest of a period-doubling cascade (:ref[Period doubling and universality]{to=dyn.period-doubling}) into chaos interleaved with periodic windows.
:::

:::statement[Four properties the map was designed to have]{provenance=adapted src="strogatz-1994:§12.2, pp. 430-432, Examples 12.2.1-12.2.2"}
Let $a > 0$ and $0 < |b| < 1$.

1. $T$ is invertible, so every state has exactly one past as well as one future. This is the feature that distinguishes $T$ from :ref[the logistic map]{to=dyn.one-dimensional-maps}, which also stretches and folds but is two-to-one, and it is what makes $T$ an honest analogue of a flow.
2. $T$ contracts areas, at the same rate at every point: the Jacobian determinant is the constant $-b$. This is the counterpart of the constant negative divergence of the Lorenz field.
3. For suitable parameters there is a bounded **trapping region** $Q$, a set with $T(Q) \subseteq Q$; the attractor lies inside it.
4. Unlike the Lorenz flow, whose orbits are all bounded, $T$ has orbits that run to infinity: far out, the term $-a x^2$ dominates and throws the orbit away.
:::

:::statement[The two saddles, the escape radius and a trapping quadrilateral]{label="Proposition" provenance=original}
Let $a > 0$ and $0 < |b| < 1$, and write $T(x,y) = (y + 1 - ax^2,\ bx)$.

1. **Inverse.** $T$ is a bijection of $\mathbb{R}^2$, with

   $$
   T^{-1}(X, Y) \;=\; \Bigl(\frac{Y}{b},\ X - 1 + \frac{a}{b^2}Y^2\Bigr) .
   $$

2. **Area.** $DT(x,y) = \begin{pmatrix} -2ax & 1 \\ b & 0\end{pmatrix}$, so $\det DT \equiv -b$ and every measurable set $E$ satisfies $\operatorname{area}(T(E)) = |b|\operatorname{area}(E)$. Consequently any compact set $A$ with $T(A) = A$ has area zero.

3. **Fixed points.** $T$ has a fixed point $(x, bx)$ exactly when $a x^2 + (1-b)x - 1 = 0$. Since $a > 0$ the discriminant $(1-b)^2 + 4a$ is positive, so there are always two of them,

   $$
   x_\pm \;=\; \frac{-(1-b) \pm \sqrt{(1-b)^2 + 4a}}{2a} ,
   $$

   with $x_- < 0 < x_+$. The multipliers at $(x, bx)$ are the roots of $\mu^2 + 2ax\,\mu - b = 0$, namely

   $$
   \mu_{\pm}(x) \;=\; -ax \pm \sqrt{a^2x^2 + b} \qquad (b > 0),
   $$

   and they satisfy $\mu_+\mu_- = -b$, so $|\mu_+\mu_-| < 1$: a fixed point is never a repeller.

4. **Escape.** Put

   $$
   R \;=\; \frac{(1 + |b|) + \sqrt{(1+|b|)^2 + 4a}}{2a} ,
   $$

   the positive root of $a R^2 - (1+|b|)R - 1 = 0$. If an orbit satisfies $|x_{n}| > R$ and $|x_{n-1}| \le |x_{n}|$ for some $n$, then $|x_m|$ increases strictly for $m \ge n$ and $|x_m| \to \infty$. Consequently every compact set $A$ with $T(A) = A$ lies in the strip $|x| \le R$.

5. **A trapping region at the standard parameters.** Let $a = 1.4$, $b = 0.3$ and let $Q$ be the closed convex quadrilateral with vertices

   $$
   (-1.33,\ 0.41), \quad (1.33,\ 0.15), \quad (1.25,\ -0.13), \quad (-1.09,\ -0.46)
   $$

   taken in this (clockwise) order. Then $T(Q) \subseteq Q$. Hence $A = \bigcap_{n \ge 0} T^n(Q)$ is a nonempty compact set with $T(A) = A$, of area zero, and every orbit starting in $Q$ has $\operatorname{dist}(T^n(x,y), A) \to 0$.
:::

:::idea{provenance=original}
Everything here is elementary once one notices that the $y$-equation is trivial: $y_{n+1} = bx_n$ merely stores the previous $x$. So the map is really the scalar second-order recurrence $x_{n+1} = 1 - ax_n^2 + bx_{n-1}$, and inverting it, finding its fixed points and bounding its orbits are all one-variable problems. Invertibility is reading that recurrence backwards; the fixed-point equation and the characteristic polynomial are quadratics; and escape follows because the quadratic term beats the linear ones once $|x|$ passes the root $R$. The area statement is the chain rule plus the change-of-variables formula, and it gives the attractor zero area at once, since an invariant set would have to keep an area that is multiplied by $|b| < 1$ at every step. Only part 5 needs more than algebra, and even there the work collapses: because $Q$ is convex and $T$ moves points along horizontal lines in the image (the image height $bx$ depends only on $x$), it is enough to check that the upper and lower boundary curves of $Q$ land in $Q$, and each such check is one quadratic inequality on an interval.
:::

:::proof{provenance=original}
**1. Inverse.** Given $(X, Y)$, the equations $X = y + 1 - ax^2$ and $Y = bx$ determine $(x,y)$ uniquely: the second gives $x = Y/b$, which is legitimate because $b \neq 0$, and substituting into the first gives $y = X - 1 + a(Y/b)^2$. Both operations are defined for every $(X,Y)$, so $T$ is a bijection with the stated inverse, and both $T$ and $T^{-1}$ are polynomial, hence smooth.

**2. Area.** Differentiating the two components of $T$ gives the matrix displayed, whose determinant is $(-2ax)\cdot 0 - 1\cdot b = -b$ for every $(x,y)$. The change-of-variables formula for the diffeomorphism $T$ therefore gives $\operatorname{area}(T(E)) = \int_E |\det DT| = |b|\operatorname{area}(E)$. If now $T(A) = A$ with $A$ compact, then $\operatorname{area}(A) = |b|\operatorname{area}(A)$ with $\operatorname{area}(A) < \infty$ by compactness, and since $|b| < 1$ this forces $\operatorname{area}(A) = 0$.

**3. Fixed points and multipliers.** A fixed point must have $y = bx$, and then $x = bx + 1 - ax^2$, that is $ax^2 + (1-b)x - 1 = 0$. The discriminant is $(1-b)^2 + 4a > 0$ because $a > 0$, so there are two real roots; their product is $-1/a < 0$, so one is negative and one positive. The Jacobian at $(x,bx)$ has trace $-2ax$ and determinant $-b$, so its characteristic polynomial is $\mu^2 + 2ax\mu - b$; the quoted roots are the quadratic formula, real because $a^2x^2 + b > 0$ when $b > 0$. Their product is the determinant $-b$, whose modulus is $|b| < 1$, so the two multipliers cannot both have modulus $\ge 1$.

**4. Escape.** Write $t_m = |x_m|$. The recurrence $x_{m+1} = 1 - ax_m^2 + bx_{m-1}$ gives the lower bound

$$
t_{m+1} \;\ge\; a t_m^2 - 1 - |b|\,t_{m-1} .
$$

Let $p(t) = at^2 - (1+|b|)t - 1$; this is the quadratic whose positive root is $R$, and since $a > 0$ it is strictly increasing on $[R,\infty)$ with $p(t) > 0$ there. Suppose $t_m > R$ and $t_{m-1} \le t_m$. Substituting $t_{m-1} \le t_m$ into the bound above,

$$
t_{m+1} \;\ge\; a t_m^2 - |b| t_m - 1 ,
\qquad\text{so}\qquad
t_{m+1} - t_m \;\ge\; a t_m^2 - (1+|b|) t_m - 1 \;=\; p(t_m) \;>\; 0 ,
$$

the last inequality because $t_m > R$. So $t_{m+1} > t_m > R$, and the pair $(t_m, t_{m+1})$ again satisfies the hypothesis. By induction $t_m$ is strictly increasing for $m \ge n$ and stays above $R$. It cannot converge to a finite limit $L$: letting $m \to \infty$ in $t_{m+1} - t_m \ge p(t_m)$ would give $0 \ge p(L) > 0$. An increasing sequence that does not converge tends to $+\infty$. Now let $A$ be compact with $T(A) = A$, and let $M = \max\{|x| : (x,y) \in A\}$, which exists because $A$ is compact and the coordinate function is continuous. Choose $(x^*, y^*) \in A$ attaining it. Because $T(A) = A$, every point of $A$ has a preimage in $A$, so there is a bi-infinite orbit inside $A$ passing through $(x^*, y^*)$; along it $t_m \le M$ for every $m$, and $t_n = M$ at the index of $(x^*,y^*)$. In particular $t_{n-1} \le t_n$. If $M > R$ the previous paragraph would make $t_m \to \infty$, contradicting $t_m \le M$. Hence $M \le R$.

**5. The trapping quadrilateral.** Write $Q$ as the intersection of four closed half-planes $\{\,n_i \cdot p \le c_i\,\}$, $i = 1, \dots, 4$, one per edge, with the normals $n_i$ pointing out of $Q$; this is possible because the vertices listed are in convex position and in clockwise order, as the four cross products of consecutive edge vectors, all negative, confirm.

*Reduction to the boundary.* Let $x_\ell = -1.33$ and $x_r = 1.33$ be the smallest and largest abscissas of $Q$. For $x \in [x_\ell, x_r]$ the vertical slice $Q \cap (\{x\}\times\mathbb{R})$ is the segment $\{x\}\times[\varphi_-(x), \varphi_+(x)]$, where $\varphi_-$ and $\varphi_+$ are the piecewise-affine lower and upper boundary curves of $Q$. The image of that slice is

$$
T\bigl(\{x\}\times[\varphi_-(x), \varphi_+(x)]\bigr) \;=\; \bigl[\,1 - ax^2 + \varphi_-(x),\ 1 - ax^2 + \varphi_+(x)\,\bigr] \times \{bx\} ,
$$

a horizontal segment, because the second coordinate of $T$ does not involve $y$ and the first is affine in $y$ with slope $1$. A convex set contains a segment as soon as it contains both endpoints. So $T(Q) \subseteq Q$ holds if and only if $T$ maps the graphs of $\varphi_-$ and $\varphi_+$ into $Q$.

*The boundary check.* Each of $\varphi_\pm$ is affine on each of the (four in total) edges of $Q$: say $y = \alpha x + \beta$ for $x$ in an interval $[u, v]$. Along such an edge,

$$
T(x, \alpha x + \beta) \;=\; \bigl(\,1 + \beta + \alpha x - a x^2,\ b x\,\bigr) ,
$$

so the requirement $n_i \cdot T(x, \alpha x + \beta) \le c_i$ reads $g(x) \le 0$ with

$$
g(x) \;=\; -a\,n_{i,1}\,x^2 \;+\; \bigl(\alpha\,n_{i,1} + b\,n_{i,2}\bigr)x \;+\; n_{i,1}(1+\beta) - c_i ,
$$

a quadratic in $x$. Its maximum over $[u,v]$ is attained at $u$, at $v$, or (only if the leading coefficient is negative) at the vertex $-\,(\alpha n_{i,1} + b n_{i,2})/(-2an_{i,1})$, so each condition is decided by evaluating $g$ at no more than three points. With $a = 7/5$, $b = 3/10$ and the given vertices, all four edges and all four half-planes have rational data, and the $4 \times 4 = 16$ inequalities were evaluated in exact rational arithmetic. All sixteen hold; the largest value of $g/\|n_i\|$ over all of them is $-4.873 \times 10^{-4}$, so $T(Q)$ lies inside $Q$ with a clearance of about $4.9 \times 10^{-4}$ at the tightest point, on the image of the top edge against the left edge.

*The attractor.* $Q$ is compact and $T$ continuous, so each $T^n(Q)$ is compact, and $T(Q) \subseteq Q$ gives $T^{n+1}(Q) \subseteq T^n(Q)$: the sets are nested. A nested sequence of nonempty compact sets has nonempty compact intersection $A$ (:ref[compactness]{to=found.compactness}), and $T(A) = \bigcap_{n\ge1}T^n(Q) = A$ because the sequence is nested and $T$ is a homeomorphism onto its image. By part 2, $\operatorname{area}(A) = 0$. For attraction, note that $T^n(Q)$ has area $|b|^n\operatorname{area}(Q) \to 0$; more directly, $\operatorname{dist}(p, A) \le \sup\{\operatorname{dist}(q, A) : q \in T^n(Q)\} =: d_n$ for $p \in T^n(Q)$, and $d_n \to 0$ because the $T^n(Q)$ are nested compact sets with intersection $A$: if $d_n \ge \varepsilon$ for all $n$, pick $q_n \in T^n(Q)$ with $\operatorname{dist}(q_n, A) \ge \varepsilon$; a subsequence converges to some $q \in \bigcap_n T^n(Q) = A$ with $\operatorname{dist}(q, A) \ge \varepsilon$, a contradiction. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *$b \neq 0$ is what makes the map invertible.* At $b = 0$ the second coordinate collapses to $0$ and $T$ degenerates to the one-dimensional quadratic map $x \mapsto 1 - ax^2$, which is two-to-one. Part 1 divides by $b$ at exactly the step where this would fail. So the Henon map is a genuinely two-dimensional object only for $b \neq 0$, and the quadratic family is its singular limit.
- *$|b| < 1$ is used only for dissipation.* Parts 1, 3 and 4 hold for any $b \neq 0$. Part 2's conclusion that an invariant compact set has zero area needs $|b| < 1$; at $|b| = 1$ the map preserves area, there can be no attractor at all, and the phase portrait is of the conservative kind discussed in :ref[Conservative and reversible systems]{to=dyn.conservative-reversible}.
- *$b > 0$ in the multiplier formula.* For $b < 0$ the discriminant $a^2x^2 + b$ can be negative and the multipliers are then a complex-conjugate pair of modulus $\sqrt{|b|} < 1$, a stable spiral. The displayed real formula is stated for $b > 0$ for that reason; the relation $\mu_+\mu_- = -b$ holds in all cases.
- *$a > 0$ in part 3.* It is what makes the discriminant $(1-b)^2 + 4a$ positive, so that the two fixed points exist for every $a > 0$. For $a < 0$ they can disappear: the fixed points are created in a saddle-node bifurcation at $a = -(1-b)^2/4$.
- *The hypothesis $|x_{n-1}| \le |x_n|$ in part 4 cannot be dropped as stated.* A single large $|x_n|$ does not by itself force escape, because the term $bx_{n-1}$ could in principle be large and negative and cancel the growth; the proof uses the inequality $|b||x_{n-1}| \le |b||x_n|$ at the first step. The last paragraph of the proof shows that the hypothesis costs nothing where it is needed: on a compact invariant set the orbit through a point of largest $|x|$ supplies it automatically.
- *Part 5 is for the stated parameters only.* Nothing in the construction of $Q$ survives a change of $a$ or $b$; the clearance is only about $5\times10^{-4}$, so even $a = 1.41$ would need a different quadrilateral. This is not fussiness but a feature of the map: the exact check above already fails for $Q$ at $a = 1.41$, and at $b = 0.3$ there can be no trapping region at all once $a$ passes about $1.427$, where in twenty runs from random starting points near the origin eighteen escaped within $2\times10^4$ iterations while none escaped at $a = 1.426$.
- *What the Proposition does not prove.* It gives a compact invariant attracting set $A$ of zero area. It does not prove that $A$ is a strange attractor: that the motion on it is chaotic, that $A$ is not simply a stable cycle, or that $A$ has the fractal structure seen in the example below. Those are genuinely hard; the chaotic behaviour at $a = 1.4$, $b = 0.3$ is established here only numerically.
:::

:::remark[What the attractor looks like, and why]{provenance=adapted src="strogatz-1994:§12.1, p. 425, and §12.2, pp. 433-434"}
Plotting ten thousand iterates from almost any starting point inside $Q$ draws a thin boomerang-shaped arc. Magnifying a small square of it does not smooth it out: the arc resolves into several nearly parallel curves, and magnifying one of those shows the same pattern again, at every scale that numerics can reach. Strogatz describes Henon's own sequence of magnifications as showing six curves in groups of one, two and three, with each curve of a group resolving into the same arrangement at the next level. This is the dough picture made visible: each application of $T$ folds the strip once more, so after $n$ steps a transverse cut meets a rapidly growing number of intervals -- $2^n$ of them for the idealised dough -- whose widths shrink geometrically, which is exactly the construction of a :ref[Cantor set]{to=dyn.fractals}. Locally the attractor is a smooth arc times a Cantor set, and its dimension is therefore between $1$ and $2$.

There is a reason the longitudinal direction is smooth. The saddle fixed point lies on the attractor, and its unstable manifold is a smooth curve that the dynamics stretches along the attractor and folds back; Strogatz reports the theorem of Benedicks and Carleson that the Henon attractor is the closure of one branch of that unstable manifold. So the "curves" seen under magnification are successive passes of a single immersed curve, and the Cantor structure is the pattern in which those passes accumulate.
:::

:::method[Measuring a two-dimensional attractor]{provenance=original}
Given a planar map $T$ depending on parameters, this is the sequence of computations that turns a picture into numbers. Each step has a check attached; skipping the checks is how wrong dimensions get published.

1. **Fix the invariant structure first.** Solve $T(p) = p$ and diagonalise $DT(p)$ at each fixed point. Classify: the saddles are the organising centres, and their unstable manifolds will trace the attractor.
2. **Find a trapping region.** Guess a convex polygon enclosing the plotted orbit, then verify $T(Q) \subseteq Q$ by the boundary reduction used above -- for a polynomial map the verification is a finite set of polynomial inequalities and can be done exactly. If no polygon works, enlarge the parameter search: orbits may be escaping.
3. **Discard the transient.** Iterate a few thousand steps before recording anything, and confirm the recorded orbit stays in $Q$.
4. **Lyapunov exponents.** Carry a tangent vector $u_{n+1} = DT(p_n)u_n$ alongside the orbit, renormalising $u$ to unit length each step and accumulating the logarithms of the norms; the average is $\lambda_1$. *Check:* when $\det DT$ is a constant $c$, the exponents must satisfy $\lambda_1 + \lambda_2 = \ln|c|$ exactly, so $\lambda_2$ comes free and any discrepancy is an error. Repeat from several seeds; the spread is the honest error bar.
5. **Correlation dimension.** Collect $N$ points, keeping only every $k$th iterate so that successive stored points are dynamically decorrelated, and compute the correlation sum $C(\varepsilon)$ of :ref[Fractals and dimension]{to=dyn.fractals} with a $k$-d tree. Plot $\ln C$ against $\ln\varepsilon$ and fit the slope over the middle of the range -- above the scale at which only a handful of pairs are counted, below the diameter of the attractor. *Check:* the local slope should oscillate about a constant rather than drift; a steady drift means the scaling range has not been reached.
6. **Box dimension.** Bin a long orbit into a grid of side $\varepsilon$, count occupied cells, and halve $\varepsilon$ repeatedly. *Check:* stop refining when the number of orbit points per occupied cell falls below about a hundred, or the count saturates at the sample size and the slope bends down. The two dimensions should satisfy $d_{\text{corr}} \le d_{\text{box}}$.
7. **Look at a cut.** Collect the points of a long orbit lying in a narrow vertical strip and sort their other coordinate. Sorting the gaps exposes the transverse Cantor structure directly, and lowering the gap threshold shows the next level of the hierarchy.
:::

:::example[The Henon attractor at $a = 1.4$, $b = 0.3$, in numbers]{provenance=original}
All the numbers below were computed for this unit; the orbits start at the origin unless stated otherwise.

**Fixed points.** The fixed-point equation is $1.4x^2 + 0.7x - 1 = 0$, with discriminant $0.49 + 5.6 = 6.09$ and $\sqrt{6.09} = 2.4677925359$. Hence

$$
p_+ = (0.6313544771,\ 0.1894063431), \qquad p_- = (-1.1313544771,\ -0.3394063431).
$$

At $p_+$ the Jacobian has trace $-2ax_+ = -1.7677925359$ and determinant $-0.3$, so the multipliers are

$$
\mu_+ = 0.1559463223, \qquad \mu_- = -1.9237388582 ,
$$

whose product is $-0.3$ to ten figures, as part 3 requires. This is a saddle, and it is the saddle on the attractor: the nearest of two million recorded attractor points lies $5.6\times10^{-5}$ from it. At $p_-$ the multipliers are $3.2598220979$ and $-0.0920295620$ (product again $-0.3$); this is also a saddle, but it sits $0.21$ away from the attractor, outside it.

**Escape radius and trapping region.** Here $(1+|b|)^2 + 4a = 1.69 + 5.6 = 7.29$, whose square root is exactly $2.7$, so part 4 gives the clean value

$$
R \;=\; \frac{1.3 + 2.7}{2.8} \;=\; \frac{10}{7} \;=\; 1.428571\ldots
$$

The recorded orbit obeys this comfortably: over twenty million iterates its extent was $x \in [-1.28466,\ 1.27297]$ and $y \in [-0.38540,\ 0.38189]$. Every one of those twenty million points also lies inside the quadrilateral $Q$ of part 5.

**Lyapunov exponents.** Carrying a tangent vector for $2\times10^6$ iterations after a transient of $10^3$ gives $\lambda_1 = 0.41911$; six independent random seeds, each run for $5\times10^5$ iterations, gave values between $0.41855$ and $0.41994$. So

$$
\lambda_1 = 0.4191 \pm 0.0007 , \qquad \lambda_2 = \ln 0.3 - \lambda_1 = -1.6231 \pm 0.0007 ,
$$

where $\lambda_2$ is obtained from the exact constraint $\lambda_1 + \lambda_2 = \ln|\det DT| = \ln 0.3 = -1.2039728$. The first exponent is positive, so the motion on the attractor is chaotic. In one iteration a tangent vector along the attractor is stretched by $e^{\lambda_1} = 1.5206$ and one across it is squeezed by $e^{\lambda_2} = 0.1973$; the product is $0.3000$, which is the area ratio $|b|$ -- the stretching and the folding, in one line of arithmetic.

**Correlation dimension.** Taking $10^5$ points, keeping every fifth iterate, and counting pairs with a $k$-d tree gives a correlation sum whose log-log slope over $10^{-4} \le \varepsilon \le 10^{-1}$ is $1.2049$; three other starting points gave $1.2059$, $1.2062$ and $1.2067$. The local slope, measured over a sliding decade, oscillates between $1.18$ and $1.25$ rather than settling -- the signature of a self-similar set, whose covering statistics repeat log-periodically. The honest report is therefore

$$
d_{\text{corr}} = 1.21 \pm 0.03 ,
$$

the uncertainty being the oscillation, not the fitting error.

**Box dimension.** Binning $2\times10^7$ iterates into squares of side $\varepsilon = 2^{-k}\cdot 4$ gives occupied-cell counts $148$, $349$, $833$, $1931$, $4561$, $10616$, $25795$, $63272$ and $151659$ for $\varepsilon$ from $1/16$ down to $1/4096$. The least-squares slope of $\ln N$ against $\ln(1/\varepsilon)$ over that range is $1.248$, and the two endpoints alone give $1.250$:

$$
d_{\text{box}} \approx 1.25 .
$$

The refinement was stopped at $\varepsilon = 1/4096$, where there are still about $130$ orbit points per occupied cell. As the general inequality requires, $d_{\text{corr}} = 1.21 < 1.25 = d_{\text{box}}$. (The two Lyapunov exponents furnish a third, independent estimate through the Kaplan-Yorke formula $1 + \lambda_1/|\lambda_2| = 1.2582$. That formula is a conjecture, proved in no source used here, and is quoted only as a cross-check; it agrees with the box count to within $1\%$.)

**A cut through the attractor.** Of $4\times10^7$ iterates, $29484$ fell in the strip $0.6245 \le x \le 0.6255$. Sorting their $y$-coordinates and looking in the window $0.17 \le y \le 0.20$, the points occupy, when runs separated by gaps smaller than $10^{-3}$ are merged, exactly three bands:

$$
[0.17501,\ 0.17528], \qquad [0.17997,\ 0.18095], \qquad [0.18793,\ 0.19047] .
$$

Lowering the merging threshold to $5\times10^{-4}$ leaves the first band single, splits the second into two,

$$
[0.17997,\ 0.18012] \ \text{ and } \ [0.18079,\ 0.18095],
$$

and splits the third into three,

$$
[0.18793,\ 0.18810], \quad [0.18871,\ 0.18899], \quad [0.18994,\ 0.19047].
$$

That is six sheets in groups of one, two and three -- the pattern Henon reported, recovered here from a sorted list of numbers rather than from a picture. The gaps between the groups ($4.7\times10^{-3}$ and $7.0\times10^{-3}$) are an order of magnitude larger than the gaps inside them ($6.8\times10^{-4}$ and $6.0\times10^{-4}$, $9.5\times10^{-4}$), which is the hierarchy of scales that makes the cross section a Cantor set and the dimension fractional.
:::

:::application{provenance=original}
The Henon map is the standard proving ground for anything that claims to measure chaos from data. Because it is two-dimensional, invertible, polynomial and cheap to iterate for $10^9$ steps, every algorithm for Lyapunov exponents, for correlation and box dimensions, for unstable periodic orbits and for noise reduction is calibrated against it first; a method that cannot return $\lambda_1 = 0.419$ and $d \approx 1.2$ for a clean Henon orbit is not going to be trusted on a laser or a dripping tap. The transverse cut computed above is the one-dimensional version of what an experimenter does with a :ref[Poincare section]{to=dyn.poincare-maps} of a measured flow.

More importantly, the map is the reason the words "stretching and folding" mean something quantitative. A dissipative flow in three dimensions, sampled on a surface of section, gives a planar map that contracts area; if the attractor is strange, that map must stretch in one direction and fold, because there is no other way to reconcile a positive exponent with a bounded invariant set. The Henon map is that mechanism stripped to a quadratic, and the numbers above -- a stretch of $1.52$, a squeeze of $0.20$, a product of exactly $0.30$ -- show the whole budget. The same accounting is what makes mixing work in a stirred fluid, where repeated stretching and folding of material lines, not molecular diffusion, is what homogenises a dye at low diffusivity; the striation thickness falls like $e^{\lambda_2 n}$ while the interfacial length grows like $e^{\lambda_1 n}$, and the fractal dimension of the striation pattern plays the role measured here.

In celestial mechanics the map has a direct ancestor. Henon introduced it as a surrogate for the Lorenz flow, but two-dimensional area-contracting and area-preserving maps had already entered astronomy as sections of galactic and restricted three-body orbits, where the question is whether a given orbit is confined to an invariant curve or wanders chaotically. The Henon map answers, in the simplest possible setting, what such a wandering set looks like: not a region, but a set of measure zero and dimension about $1.25$ on which the motion never repeats.
:::
