---
id: complex.analytic-continuation
title: Analytic continuation
kind: theorem
level: core
summary: Two analytic functions that agree on a set with an accumulation point agree wherever both are defined, so an analytic function has at most one extension to any larger region; extensions are built by chains of overlapping expansions or by functional relations, as for the Gamma function.
prereqs: [complex.taylor-series, complex.singularities, complex.cauchy-theorem, complex.cauchy-integral-formula, found.connectedness-homotopy, found.power-series, found.uniform-convergence, found.termwise-operations, found.change-of-variables, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§12.3, Thm 12.3.1 and Corollary 12.3.2 (agreement on a piece forces agreement everywhere), pp. 372-373, with Examples 12.3.3-12.3.4, pp. 373-374"
    pages: "372-374"
    role: statement of the identity/uniqueness theorem for continuation and its proof route; the worked pair of overlapping geometric series
  - work: ahlfors-1979
    loc: "Ch. 8, §1.1 (the Weierstrass theory of chains of power series), pp. 283-284; §1.2 function elements, direct continuation and global analytic functions, pp. 284-285; §1.4 continuation along arcs and Thm 1, p. 289; §1.6 the monodromy theorem, Thm 2, p. 295"
    pages: "283-285, 289, 295"
    role: direct continuation and chains; uniqueness of continuation along an arc; the monodromy theorem
  - work: arfken-2013
    loc: "§11.6, Analytic Continuation, pp. 503-506, and the remark on functional relations and the gamma function, pp. 506-507"
    pages: "503-507"
    role: continuation by overlapping circles of convergence; continuation by a functional relation, with the Gamma function as the example
  - work: ahlfors-1979
    loc: "Ch. 4, §3.2, the uniqueness theorem for analytic functions agreeing on a set with an accumulation point, p. 127"
    pages: "127"
    role: the form of the identity theorem used here
---

:::note{provenance=original}
**What it means.** An analytic function carries all of its information in any arbitrarily small piece of its domain: fix its values on a short arc and every other value is already determined. That rigidity has two faces. Positively, it means a function defined by one formula on a small set -- a power series, an integral that converges only in a half-plane -- has at most one analytic extension to a larger set, so any formula that reproduces it on an overlap *is* the extension. Negatively, it means the extension may depend on the route taken: continuing a germ along two different paths with the same endpoints can land on two different values, which is where multivaluedness comes from.
:::

:::definition[Function elements, direct continuation, chains]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.2, pp. 284-285"}
A **function element** is a pair $(f, \Omega)$ with $\Omega \subseteq \mathbb{C}$ a region and $f$ analytic on $\Omega$.

Two function elements $(f_1,\Omega_1)$ and $(f_2,\Omega_2)$ are **direct analytic continuations** of one another if $\Omega_1 \cap \Omega_2 \ne \emptyset$ and $f_1 = f_2$ on $\Omega_1\cap\Omega_2$. One then says $(f_2,\Omega_2)$ is the direct continuation of $(f_1,\Omega_1)$ to $\Omega_2$; if it exists it is unique, as the identity theorem below shows.

A **chain** is a finite list $(f_1,\Omega_1), \dots, (f_n,\Omega_n)$ in which consecutive elements are direct continuations of one another; $(f_n,\Omega_n)$ is then called an **analytic continuation** of $(f_1,\Omega_1)$. This is an equivalence relation, and an equivalence class is a **global analytic function**; each of its members is a **branch**. Nothing guarantees that the $f_k$ fit together into a single-valued function on $\bigcup_k \Omega_k$: if $\Omega_j$ meets $\Omega_k$ for non-consecutive $j,k$, the two need not agree there, and this is exactly the phenomenon of multivaluedness.

A **germ** at $\zeta$ is an equivalence class of pairs $(f,\zeta)$, where $f$ is analytic on some neighbourhood of $\zeta$, two pairs being identified when the functions agree on some neighbourhood of $\zeta$. A germ at $\zeta$ is the same data as a convergent power series centred at $\zeta$.
:::

:::definition[Continuation along a path]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.4, p. 289"}
Let $\gamma : [a,b] \to \mathbb{C}$ be a path. A **continuation of a germ along $\gamma$** is a family of germs $g_t$ at $\gamma(t)$, one for each $t \in [a,b]$, which varies continuously in $t$: each $t_0$ has a neighbourhood $I$ in $[a,b]$ and a function element $(f, \Omega)$ with $\gamma(I)\subseteq\Omega$ such that $g_t$ is the germ of $f$ at $\gamma(t)$ for all $t \in I$. The initial germ is $g_a$ and the terminal germ $g_b$.
:::

:::statement[Identity theorem and uniqueness of continuation]{provenance=adapted src="hassani-2013:§12.3, Thm 12.3.1 and Cor. 12.3.2, pp. 372-373; ahlfors-1979:Ch. 4, §3.2, p. 127"}
Let $S \subseteq \mathbb{C}$ be a region and let $f_1, f_2$ be analytic on $S$.

1. **Identity theorem.** If $f_1 = f_2$ on some non-empty open subset of $S$, or on a non-degenerate segment of a curve in $S$ (one containing more than a single point), or more generally on a subset of $S$ having an accumulation point in $S$, then $f_1 = f_2$ throughout $S$. :cite[Hassani]{work=hassani-2013 loc="Thm 12.3.1, p. 372"} states the curve case without the word non-degenerate; it is needed, since agreement at one point says nothing, and the proof below uses it.
2. **Local determination.** Consequently an analytic function on $S$ is completely determined by its restriction to any neighbourhood, however small, of any one point of $S$.
3. **Uniqueness of continuation.** If $\Omega \subseteq S$ are regions and $f$ is analytic on $\Omega$, there is at most one analytic function on $S$ restricting to $f$ on $\Omega$. In particular, if $f_1$ is analytic on $S_1$, $f_2$ on $S_2$, $S_1\cap S_2 \ne\emptyset$ and $f_1 = f_2$ *at every point of* $S_1\cap S_2$, then

   $$
   f(z) \;=\; \begin{cases} f_1(z), & z \in S_1,\\ f_2(z), & z \in S_2,\end{cases}
   $$

   is a well-defined analytic function on $S_1\cup S_2$, and $f_1, f_2$ are analytic continuations of one another.
4. **Uniqueness along a path.** Two continuations of germs along the same path $\gamma$ either agree at every $t$ or differ at every $t$. Hence a continuation along $\gamma$ is determined by its initial germ, when it exists.
5. **Monodromy theorem.** Suppose a germ at the initial point of $\gamma$ can be continued along every path in a region $\Omega$. If two paths $\gamma_1, \gamma_2$ in $\Omega$ with the same endpoints are homotopic in $\Omega$ (:ref[]{to=found.connectedness-homotopy}), the continuations of that germ along $\gamma_1$ and along $\gamma_2$ end at the same germ. In particular, a germ continuable along every path in a *simply connected* region determines a single-valued analytic function there.
:::

:::idea{provenance=original}
Part 1 is really a statement about zeros. The difference $g = f_1 - f_2$ vanishes on a set with an accumulation point in $S$, and the zeros of a non-zero analytic function are isolated (:ref[]{to=complex.taylor-series}), so $g$ must be identically zero. Hassani gives a direct connectedness version of the same argument: the set where $g$ vanishes cannot have a boundary inside $S$, because at such a boundary point $g$ would vanish together with a whole neighbourhood's worth of nearby zeros.

Everything else is a corollary. Uniqueness of extension (part 3) is part 1 applied to two candidate extensions. Uniqueness along a path (part 4) is part 1 applied locally: the set of $t$ where two continuations agree is both open and closed in $[a,b]$, because agreement of germs is a local and open condition and so is disagreement.

The monodromy theorem is the only statement with genuine content beyond part 1, and its proof is a bisection. First turn the question into one about a single loop: the two continuations agree at the end if and only if continuing once around the loop "out along $\gamma_1$, back along $\gamma_2$" returns the germ one started with. That loop is the image of the perimeter of the homotopy rectangle. Now halve the rectangle. Going around the perimeter has the same effect as going around the two halves in succession, the difference being an out-and-back excursion that changes nothing; so if the perimeter fails, one half fails, then one of its quarters, and so on down to a point. The loops in this chain are not perimeters but perimeters with a connecting arc out and back -- which is what makes "fails to return the initial germ" meaningful for each of them, since each is a loop at the *same* base point. Near the limit point a single function element covers an entire small rectangle, and a loop inside the domain of one element cannot change a germ at all.
:::

:::proof{provenance=adapted src="hassani-2013:§12.3, proof of Thm 12.3.1, p. 372; ahlfors-1979:Ch. 8, §1.4, Thm 1, p. 289 and §1.6, Thm 2, pp. 295-296"}
**Part 1.** Let $g = f_1 - f_2$, analytic on the region $S$, and let $E = \{z \in S: g(z) = 0\}$. By hypothesis $E$ has an accumulation point $z_* \in S$; note $z_* \in E$ by continuity. If $g \not\equiv 0$ on $S$ then, by the isolation of zeros (:ref[]{to=complex.taylor-series}), there is a punctured disc about $z_*$ containing no point of $E$, contradicting that $z_*$ is an accumulation point of $E$. Hence $g\equiv0$. Agreement on a non-empty open subset, or on a non-degenerate curve segment, gives such an accumulation point, so those cases are included.

**Part 2** is part 1 with $f_2$ an arbitrary competitor agreeing on the neighbourhood.

**Part 3.** If $F, G$ are analytic on $S$ and both restrict to $f$ on the non-empty open set $\Omega$, part 1 gives $F = G$. For the gluing statement, $f_1$ and $f_2$ agree on $S_1\cap S_2$ by hypothesis, so the piecewise definition is consistent; it is analytic because analyticity is local and every point of $S_1\cup S_2$ has a neighbourhood inside $S_1$ or inside $S_2$.

**Part 4.** Let $(g_t)$ and $(h_t)$ be continuations along $\gamma$ and let $A = \{t : g_t = h_t\}$. *$A$ is open in $[a,b]$:* if $g_{t_0} = h_{t_0}$, pick function elements $(f,\Omega)$ and $(\tilde f, \tilde\Omega)$ representing the two families on a neighbourhood $I$ of $t_0$; they agree on a neighbourhood of $\gamma(t_0)$, hence on the connected component of $\Omega\cap\tilde\Omega$ containing $\gamma(t_0)$ by part 1, hence $g_t = h_t$ for $t$ in a possibly smaller neighbourhood of $t_0$. *$A$ is closed in $[a,b]$:* equivalently, its complement is open, and this needs the same component argument. Suppose $g_{t_0}\ne h_{t_0}$, and take elements $(f,\Omega)$, $(\tilde f,\tilde\Omega)$ representing the two families on a neighbourhood $I$ of $t_0$ as above. Let $V$ be the connected component of $\Omega\cap\tilde\Omega$ containing $\gamma(t_0)$. If $f$ and $\tilde f$ agreed on some subset of $V$ with an accumulation point in $V$, part 1 applied on the region $V$ would give $f = \tilde f$ throughout $V$, hence $g_{t_0} = h_{t_0}$; so they do not, and in particular $f \ne \tilde f$ on every neighbourhood of $\gamma(t_0)$ inside $V$. Shrinking $I$ so that $\gamma(I) \subseteq V$, we get $g_t \ne h_t$ for every $t \in I$: for such $t$ the germs of $f$ and $\tilde f$ at $\gamma(t)$ are germs of functions that, if equal near $\gamma(t)$, would agree on a set with an accumulation point in $V$ and hence on all of $V$, which we have excluded. So the complement of $A$ is open. Since $[a,b]$ is connected, $A$ is $\emptyset$ or $[a,b]$.

**Part 5.** Write $p$ and $q$ for the common initial and terminal points of $\gamma_1,\gamma_2$, let $g_p$ be the germ at $p$, and let $H : R = [a,b]\times[0,1]\to\Omega$ be the homotopy, so $H(\cdot,0)=\gamma_1$, $H(\cdot,1)=\gamma_2$, $H(a,u) = p$ and $H(b,u) = q$ for all $u$.

*Step (i): a germ attached to each path in $R$ out of the corner.* For a path $\lambda$ in $R$ starting at the corner $O = (a,0)$, the image $H\circ\lambda$ is a path in $\Omega$ starting at $p$; by hypothesis $g_p$ can be continued along it, and by part 4 the terminal germ is unique. Write $T(\lambda)$ for that terminal germ. Three properties, all from part 4. (1) *Concatenation:* continuing along $\lambda\mu$ is continuing along $\lambda$ and then continuing the result along $\mu$, so $T$ composes. (2) *Out and back:* continuation along $\sigma\sigma^{-1}$ returns the germ it started from, because reversing a continuation along $\sigma$ is a continuation along $\sigma^{-1}$ and part 4 says it is *the* one. Hence inserting an out-and-back excursion into a path does not change $T$. (3) *Constant pieces:* a constant path changes nothing. In particular, by (1) and (2), two paths $\lambda,\mu$ in $R$ from $O$ with the same terminal point satisfy $T(\lambda) = T(\mu)$ if and only if $T(\lambda\mu^{-1}) = g_p$, the concatenation $\lambda\mu^{-1}$ being a loop at $O$.

*Step (ii): reduction to the perimeter.* Let $\beta$ be the bottom edge of $R$ from $O = (a,0)$ to $(b,0)$ and $\mu$ the left edge from $O$ to $(a,1)$ followed by the top edge to $(b,1)$; both are paths in $R$ from $O$, and both end on the right edge after the constant pieces are taken into account. Their images under $H$ are $\gamma_1$ and (the constant path at $p$ followed by) $\gamma_2$, so by (3) $T(\beta)$ and $T(\mu)$ are the terminal germs of the continuations along $\gamma_1$ and along $\gamma_2$. Let $\Gamma = \beta\,\rho\,\mu^{-1}$, where $\rho$ is the right edge of $R$ from $(b,0)$ to $(b,1)$; this is the perimeter of $R$ traversed once from $O$, bottom edge first. Since $H$ is constant on the right edge, (3) gives $T(\beta\rho) = T(\beta)$, and then the criterion at the end of Step (i), applied to $\beta\rho$ and $\mu$, says that

$$
T(\Gamma) = g_p \quad\Longleftrightarrow\quad \text{the continuations along } \gamma_1 \text{ and } \gamma_2 \text{ end at the same germ,}
$$

which is the assertion of part 5. Suppose, for a contradiction, that $T(\Gamma) \ne g_p$.

*Step (iii): bisection, carrying the connecting arcs.* Bisect $R$ horizontally into a lower half and an upper half. Let $\pi_1$ be the perimeter of the lower half, traversed from $O$ in the sense that agrees with $\Gamma$ on their shared edges; let $\tau$ be the left edge of $R$ from $O$ up to the lower-left corner of the upper half, and let $\pi_2 = \tau\,\Gamma_2\,\tau^{-1}$, where $\Gamma_2$ is the perimeter of the upper half traversed from that corner in the sense agreeing with $\Gamma$. Then $\pi_1\pi_2$ differs from $\Gamma$ only by inserted out-and-back excursions -- along the dividing edge and along $\tau$ -- so $T(\pi_1\pi_2) = T(\Gamma) \ne g_p$. If both $T(\pi_1) = g_p$ and $T(\pi_2) = g_p$ then by (1) $T(\pi_1\pi_2) = g_p$; so at least one of the two loops fails to return $g_p$. Call the corresponding half $R^{(1)}$ and write that loop as $\sigma_1\Gamma_1\sigma_1^{-1}$, where $\Gamma_1$ is the perimeter of $R^{(1)}$ and $\sigma_1$ is an arc in $R$ from $O$ to a corner of $R^{(1)}$ (the empty arc in the first case). Bisect $R^{(1)}$ vertically and repeat, alternating directions. This produces nested rectangles $R \supset R^{(1)} \supset R^{(2)}\supset\cdots$ with diameters tending to $0$, hence shrinking to a single point $p_\infty$, and loops

$$
\pi^{(n)} \;=\; \sigma_n\,\Gamma_n\,\sigma_n^{-1} , \qquad T(\pi^{(n)}) \;\ne\; g_p ,
$$

where each $\sigma_n$ is an initial subarc of $\sigma_{n+1}$, by construction.

*Step (iv): the arcs close up into one path.* The arc added at stage $n$ runs along edges of $R^{(n-1)}$ from a corner of $R^{(n-1)}$ to a corner of $R^{(n)}$, so its length is at most the perimeter $L_{n-1}$ of $R^{(n-1)}$. Bisection halves one side at each stage and alternates the direction, so $L_{n-1} \le 2^{-\lfloor (n-1)/2\rfloor} L$ with $L$ the perimeter of $R$, and

$$
\sum_{n \ge 1} L_{n-1} \;\le\; L\sum_{n\ge1} 2^{-\lfloor (n-1)/2\rfloor} \;=\; 4L \;<\; \infty .
$$

The added lengths are therefore summable: the increasing arcs $\sigma_n$ fit together into a single rectifiable arc $\sigma_\infty$ in $R$ of finite total length $\Lambda$, which we parametrise on $[0,1]$ proportionally to arc length, so that $\sigma_n$ is $\sigma_\infty$ restricted to $[0,t_n]$ with $t_n = (\text{length of }\sigma_n)/\Lambda \uparrow 1$. The parametrisation is continuous at $s = 1$ with value $p_\infty$: for $s > t_n$ the point $\sigma_\infty(s)$ lies in $R^{(n)}$, whose diameter tends to $0$ and whose intersection is $\{p_\infty\}$. So $\sigma_\infty$ is a path in $R$ from $O$ to $p_\infty$.

*Step (v): the contradiction.* Continue $g_p$ along $H\circ\sigma_\infty$ and let $(g_s)_{s\in[0,1]}$ be the resulting family. By the definition of continuation along a path there is a neighbourhood $I$ of $s=1$ and a function element $(f_\infty,\Omega_\infty)$ with $H(\sigma_\infty(I))\subseteq\Omega_\infty$ and $g_s$ the germ of $f_\infty$ at $H(\sigma_\infty(s))$ for $s \in I$. Restricting a continuation to an initial subinterval is a continuation along that subpath, so by part 4, $T(\sigma_n) = g_{t_n}$; and for $n$ large enough that $t_n \in I$, this is the germ of $f_\infty$ at $H(\sigma_\infty(t_n))$.

Now $H(p_\infty) \in \Omega_\infty$ and $\Omega_\infty$ is open, so some disc $D$ about $H(p_\infty)$ lies in $\Omega_\infty$; since $H$ is uniformly continuous on the compact $R$ and $\operatorname{diam}R^{(n)}\to0$, we have $H(R^{(n)}) \subseteq D \subseteq \Omega_\infty$ for all large $n$. Fix an $n$ large enough for both conditions. Then the family "germ of $f_\infty$ at the current point" along $H\circ\Gamma_n$ is a continuation, it starts at $T(\sigma_n)$, and $\Gamma_n$ is a loop, so it ends at the same germ: $T(\sigma_n\Gamma_n) = T(\sigma_n)$. By (2), $T(\pi^{(n)}) = T(\sigma_n\Gamma_n\sigma_n^{-1}) = g_p$, contradicting Step (iii).

Hence $T(\Gamma) = g_p$ and part 5 holds. The final sentence follows because in a simply connected region all paths with the same endpoints are homotopic. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.4, p. 289 (continuation along some paths but not others, the shrinking radius of convergence, singular paths); hassani-2013:§12.3, footnote 3, p. 372"}
- **Connectedness of $S$.** Part 1 fails without it: on $S = D(0,1)\cup D(3,1)$ the function equal to $0$ on the first disc and $1$ on the second is analytic and agrees with $0$ on an open set, but not everywhere.
- **The accumulation point must lie *in* $S$.** $f_1(z) = \sin(\pi/z)$ and $f_2 = 0$ are analytic on $S = \mathbb{C}\setminus\{0\}$ and agree at every $z = 1/n$; those points accumulate only at $0 \notin S$, and indeed $f_1 \ne f_2$.
- **Agreement on the *whole* overlap in part 3, and why connectedness is not an extra hypothesis.** The glue works because $f_1 = f_2$ at every point of $S_1\cap S_2$; no connectedness of the overlap is needed, and none is assumed. What connectedness decides is a different question: whether checking agreement *somewhere* in the overlap is enough. If $S_1\cap S_2$ is connected, agreement on any subset of it with an accumulation point propagates to the whole overlap by part 1, so a local check suffices. If it is disconnected, it does not. The standard illustration: let $S_1$ be the plane slit along the negative imaginary axis and $S_2$ the plane slit along the positive imaginary axis, with $f_1, f_2$ branches of $\log$. Their overlap is the union of the left and right open half-planes, and the branches that agree throughout the right half-plane differ by $2\pi i$ on the left -- so they do not agree on the whole overlap, part 3 does not apply, and indeed the piecewise formula is not well defined.
- **Homotopy, not just equal endpoints, in part 5.** Continuing the germ of $\log$ at $z=1$ along the upper and lower halves of the unit circle to $z=-1$ gives germs differing by $2\pi i$: those two paths have the same endpoints but are not homotopic in $\mathbb{C}\setminus\{0\}$, which is where $\log$ can be continued. A hypothesis we have kept implicit appears in :cite[Hassani]{work=hassani-2013 loc="§12.3, footnote 3, p. 372"}, attached to the opening discussion of his section rather than to Thm 12.3.1: the region $S$ must not be discrete (countable). For us that is automatic, since a region is by definition a non-empty connected open set.
- **Continuation need not exist at all.** :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 8, §1.4, p. 289"} notes that a germ may be continuable along some paths and not others; the radius of convergence of the germ at $\gamma(t)$ then tends to $0$ as $t$ approaches the obstruction, and the path is called singular.
:::

:::example[Two series, one function]{provenance=original}
Let

$$
f_1(z) \;=\; \sum_{n=0}^{\infty}\frac{(-1)^n}{2^{\,n+1}}\,(z-1)^n ,
\qquad
f_2(z) \;=\; \sum_{n=0}^{\infty}\frac{(z-4)^n}{(-3)^{\,n+1}} .
$$

**Radii and discs.** By Hadamard's formula (:ref[]{to=found.power-series}), $f_1$ has radius $2$ and $f_2$ radius $3$, so $f_1$ is defined on $D(1,2)$ and $f_2$ on $D(4,3)$. The two discs overlap in a lens-shaped region (both contain, for instance, $z = 2.5$), which is connected.

**Sum each series.** Both are geometric. For $f_1$, with ratio $-(z-1)/2$,

$$
f_1(z) \;=\; \frac{1}{2}\cdot\frac{1}{1 + \frac{z-1}{2}} \;=\; \frac{1}{z+1} ,
$$

and for $f_2$, with ratio $-(z-4)/3$,

$$
f_2(z) \;=\; -\frac13\cdot\frac{1}{1+\frac{z-4}{3}} \;=\; -\frac{1}{z-1} .
$$

**They do not agree.** At $z = 2.5$: $f_1 = 1/3.5 = 0.2857143$ while $f_2 = -1/1.5 = -0.6666667$. So these two function elements are *not* continuations of one another, despite having overlapping discs -- a reminder that overlap is not enough; agreement on the overlap is the condition.

**A pair that does agree.** Replace $f_2$ by the expansion of the same $1/(z+1)$ about the centre $c = 1 + 2i$:

$$
f_3(z) \;=\; \sum_{n=0}^{\infty}\frac{(-1)^n}{(2+2i)^{\,n+1}}\,(z - 1 - 2i)^n
\;=\; \frac{1}{2+2i}\cdot\frac{1}{1 + \dfrac{z-1-2i}{2+2i}} \;=\; \frac{1}{z+1} ,
$$

of centre $1+2i$ and radius $\lvert 2+2i\rvert = 2\sqrt2 = 2.8284$ (the distance from the centre to the singularity at $-1$).

**The centre must be moved off the real axis.** Every disc of convergence of an expansion of $1/(z+1)$ has $-1$ on its boundary. If two such centres and $-1$ are collinear with the centres on the same side -- for instance the centres $1$ and $4$, radii $2$ and $5$ -- the two discs are internally tangent at $-1$ and the larger simply contains the smaller, so their union is no larger than the bigger disc and nothing is gained. With $c = 1+2i$ the centres $1$ and $1+2i$ are $2$ apart, which is more than the difference of the radii, $2\sqrt2 - 2 = 0.8284$, and less than their sum, $2 + 2\sqrt2 = 4.8284$; so the two circles cross, neither disc contains the other, and $D(1,2)\cup D(1+2i, 2\sqrt2)$ is strictly larger than either. That is a genuine enlargement of the domain.

**They agree on the overlap.** Both series sum to $1/(z+1)$ wherever they converge, so they agree on the lens $D(1,2)\cap D(1+2i,2\sqrt2)$, which is non-empty by the crossing just checked. Take the point $z = 0.2 + 1.6i$: it lies in both, since $\lvert z - 1\rvert = 1.788854 < 2$ and $\lvert z - 1 - 2i\rvert = 0.894427 < 2.8284$. There

$$
\frac{1}{z+1} \;=\; \frac{1}{1.2 + 1.6i} \;=\; 0.3 - 0.4i
$$

exactly, since $\lvert 1.2+1.6i\rvert^2 = 4$.

**The convergence rates differ sharply.** At that point the common ratios are $-(z-1)/2 = 0.4 - 0.8i$ for $f_1$, of modulus $0.894427$, and $-(z-c)/(c+1) = 0.3 - 0.1i$ for $f_3$, of modulus $0.316228$. Counting the terms needed to bring the *relative* error below $10^{-7}$, $f_3$ needs $14$ and $f_1$ needs $145$; on an absolute criterion, error below $10^{-7}$ in modulus, the counts are $14$ and $139$. (We state the criterion because the two differ: the value has modulus $0.5$, so a relative tolerance is the stricter one here.) With $200$ terms each series returns $0.3000000 - 0.4000000\,i$.

By part 3, $f_1$ and $f_3$ are analytic continuations of one another and together define $1/(z+1)$ on the union of the two discs. Repeating the construction with centres marching away from $-1$, always off the line through the previous centre and $-1$, continues the function to all of $\mathbb{C}\setminus\{-1\}$ -- the chain of overlapping circles of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.6, pp. 504-505"}.
:::

:::example[The Gamma function: continuation by a functional relation]{provenance=original}
:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.6, pp. 506-507"} point out that power series are not the only vehicle for continuation: a **functional relation**, an identity linking the values of a function at different arguments, does the job in one step. The Gamma function is the standard case.

**The integral defines $\Gamma$ only on a half-plane.** For $\operatorname{Re} z > 0$ set

$$
\Gamma(z) \;=\; \int_0^{\infty} t^{\,z-1}e^{-t}\, dt .
$$

Near $t = 0$ the integrand has modulus $t^{\operatorname{Re}z - 1}e^{-t}$, which is integrable exactly when $\operatorname{Re} z > 0$; the decay of $e^{-t}$ handles $t \to \infty$ for every $z$. So the integral converges absolutely on the open right half-plane $H$ and diverges for $\operatorname{Re} z \le 0$.

**Why it is analytic on $H$.** Not by the Leibniz rule: :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} is stated for a bounded interval and a real parameter, and its own note excludes both an unbounded interval and an unbounded integrand -- and here both occur. Truncate and use Morera's theorem instead.

1. *The truncations are entire.* For $n \in \mathbb{N}$ put $\Gamma_n(z) = \int_{1/n}^{n} t^{\,z-1}e^{-t}\,dt$. The integrand $(z,t)\mapsto e^{(z-1)\ln t}e^{-t}$ is continuous on $\mathbb{C}\times[1/n,n]$ and the interval is compact, so $\Gamma_n$ is continuous on $\mathbb{C}$. Let $\gamma$ be any closed contour in $\mathbb{C}$. Writing the contour integral as an integral over a parameter interval turns $\oint_\gamma \Gamma_n(z)\,dz$ into an iterated integral of a continuous function over a compact rectangle, where the order may be exchanged (:ref[]{to=found.change-of-variables}):

   $$
   \oint_\gamma \Gamma_n(z)\,dz \;=\; \int_{1/n}^{n} e^{-t}\left(\oint_\gamma t^{\,z-1}\,dz\right)dt \;=\; 0 ,
   $$

   each inner integral vanishing by :ref[Cauchy's theorem]{to=complex.cauchy-theorem}, since for fixed $t > 0$ the function $z \mapsto t^{\,z-1} = e^{(z-1)\ln t}$ is entire. A continuous function all of whose closed-contour integrals vanish is analytic, by Morera's theorem (part 4 of the consequences in :ref[]{to=complex.cauchy-integral-formula}); so $\Gamma_n$ is entire.
2. *The truncations converge uniformly on closed substrips.* Fix $0 < a < b < \infty$ and let $n \ge 1$. For $a \le \operatorname{Re}z \le b$ we have $\lvert t^{\,z-1}\rvert = t^{\operatorname{Re}z-1} \le t^{a-1}$ when $0 < t \le 1$ and $\le t^{\,b-1}$ when $t \ge 1$, so

   $$
   \bigl\lvert \Gamma(z) - \Gamma_n(z)\bigr\rvert \;\le\; \int_0^{1/n} t^{\,a-1}e^{-t}\,dt \;+\; \int_n^{\infty} t^{\,b-1}e^{-t}\,dt .
   $$

   Both terms are tails of convergent integrals, so both tend to $0$ as $n \to \infty$, and the bound does not depend on $z$. Hence $\Gamma_n \to \Gamma$ uniformly on $\{a \le \operatorname{Re}z\le b\}$.
3. *Morera again, for $\Gamma$ itself.* A uniform limit of continuous functions is continuous (:ref[]{to=found.uniform-convergence}), and every point of $H$ has such a strip around it, so $\Gamma$ is continuous on $H$. If $\gamma$ is a closed contour in $H$, its image is compact, hence contained in some strip $a \le \operatorname{Re}z\le b$ with $0 < a < b$; uniform convergence there lets the limit pass through the integral (:ref[]{to=found.termwise-operations}), so $\oint_\gamma \Gamma(z)\,dz = \lim_{n}\oint_\gamma \Gamma_n(z)\,dz = 0$. By Morera, $\Gamma$ is analytic on $H$.

Everything below -- the functional relation, the uniqueness of the continuation, the poles and their residues -- rests on this.

**The functional relation.** Integrate by parts on $[\varepsilon, T]$ with $u = t^{z}$, $dv = e^{-t}dt$:

$$
\int_{\varepsilon}^{T} t^{z} e^{-t}\, dt
\;=\; \Bigl[-t^{z}e^{-t}\Bigr]_{\varepsilon}^{T} + z\int_{\varepsilon}^{T} t^{\,z-1}e^{-t}\, dt .
$$

For $\operatorname{Re}z > 0$ the bracket vanishes in the limits $\varepsilon \to 0$, $T\to\infty$, leaving

$$
\Gamma(z+1) \;=\; z\,\Gamma(z) , \qquad \operatorname{Re}z > 0 .
$$

Setting $z = n$ and iterating from $\Gamma(1) = \int_0^\infty e^{-t}dt = 1$ recovers $\Gamma(n+1) = n!$.

**Continue.** Rewrite the relation as $\Gamma(z) = \Gamma(z+1)/z$. The right-hand side makes sense whenever $\operatorname{Re}z > -1$ and $z \ne 0$, and it agrees with the integral on $H$, so by uniqueness (part 3) it *is* the analytic continuation of $\Gamma$ to $\{\operatorname{Re}z > -1\}\setminus\{0\}$. Iterating $m$ times,

$$
\Gamma(z) \;=\; \frac{\Gamma(z+m)}{z(z+1)\cdots(z+m-1)} ,
$$

which continues $\Gamma$ to $\{\operatorname{Re}z > -m\}$ minus the points $0,-1,\dots,-(m-1)$. Letting $m \to \infty$ gives a function analytic on $\mathbb{C}\setminus\{0,-1,-2,\dots\}$, and the continuation is unique at every stage.

**The poles and their residues.** Near $z = -k$ the factor $(z+k)$ in the denominator is the only vanishing one, and the numerator $\Gamma(z+k+1)$ is analytic and non-zero there, so $\Gamma$ has a simple pole at $-k$. At a simple pole the factorisation $f(z) = (z-z_0)^{-1}\varphi(z)$ with $\varphi$ analytic and $\varphi(z_0)\ne0$ (:ref[]{to=complex.singularities}) identifies the Laurent coefficient $a_{-1}$ as $\varphi(z_0) = \lim_{z\to z_0}(z-z_0)f(z)$, so

$$
\operatorname*{Res}_{z=-k}\Gamma \;=\; \lim_{z\to-k}(z+k)\,\frac{\Gamma(z+k+1)}{z(z+1)\cdots(z+k)}
\;=\; \frac{\Gamma(1)}{(-k)(-k+1)\cdots(-1)} \;=\; \frac{(-1)^{k}}{k!} .
$$

**Numbers to check against.** From $\Gamma(1/2) = \sqrt\pi = 1.7724538509$ the relation gives

$$
\Gamma(-\tfrac12) \;=\; \frac{\Gamma(\tfrac12)}{-\tfrac12} \;=\; -2\sqrt\pi \;=\; -3.5449077018 ,
\qquad
\Gamma(-\tfrac32) \;=\; \frac{\Gamma(-\tfrac12)}{-\tfrac32} \;=\; \tfrac43\sqrt\pi \;=\; 2.3632718012 .
$$

Both match the standard numerical values of the continued $\Gamma$ to ten digits, at arguments where the defining integral diverges outright. Residues: at $k=0$ the predicted residue is $1$, at $k=1$ it is $-1$, at $k=2$ it is $1/2$.
:::

:::application[Dispersion relations, response functions and regularisation]{provenance=original}
- **Dispersion relations.** A causal response function is analytic in the upper half of the complex frequency plane. Its values on the real axis -- what an experiment measures -- therefore determine it throughout that half-plane, and the Kramers-Kronig relations, which reconstruct the real part of a susceptibility from the imaginary part, are a quantitative form of that determinacy. The identity theorem is what guarantees there is nothing left over to measure: one half of the response, known on the real axis, fixes the other.
- **Extending a convergent formula past its range.** A partition function, a Feynman integral or a special function is frequently defined by an integral or series that converges only on part of the parameter domain, and then used outside it. Analytic continuation is the licence, and uniqueness is what makes the answer unambiguous. Dimensional regularisation is the textbook case: a loop integral is computed as a function of the space-time dimension $d$ where it converges, expressed in Gamma functions, and continued in $d$; the poles of $\Gamma$ located above are exactly the divergences that must be subtracted.
- **Resonances on the second sheet.** Continuing a scattering amplitude from the physical region through a cut onto a second sheet reveals poles at complex energies -- resonances with finite lifetimes. That the continuation is path-dependent (the monodromy theorem failing for non-homotopic paths around a branch point) is not a defect: the different sheets are different physics, and which sheet one is on is part of the answer.
- **Numerical practice.** Continuing a function known only on a segment -- by fitting a series and re-expanding about a shifted centre, as in the first example -- is numerically unstable, because small errors on the segment are amplified. Uniqueness says the answer exists and is unique; it says nothing about conditioning, and this is why analytic continuation of noisy data (for instance from imaginary to real time in lattice simulations) is a genuinely hard inverse problem.
:::
