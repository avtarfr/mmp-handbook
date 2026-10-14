---
id: dyn.fractals
title: Fractals and dimension
kind: definition
level: core
summary: Defines the similarity, box and correlation dimensions, proves that a set built by keeping $m$ of the $r^D$ subcubes of a cube at every stage has box dimension $\ln m/\ln r$ -- so the middle-thirds Cantor set, which is also shown to be compact, totally disconnected, uncountable and of measure zero, has dimension $0.6309$ -- and tests the theorem against a box count of a planar dust of dimension $\ln 6/\ln 4 = 1.2925$.
prereqs: [dyn.one-dimensional-maps, found.sets-cardinality, found.compactness, measure.lebesgue-measure]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§11.2 (the middle-thirds Cantor set, its construction by deleting open middle thirds, the base-$3$ characterisation, the three fractal properties -- structure at all scales, self-similarity, non-integer dimension -- and the arguments that it has zero total length and uncountably many points), pp. 401-404; §11.3 (the paradox of the von Koch curve's infinite arc length, the similarity dimension $d = \\ln m/\\ln r$ for a set made of $m$ copies scaled by $1/r$, the values $\\ln2/\\ln3$ and $\\ln4/\\ln3$, and the definition of a topological Cantor set as a closed, totally disconnected set without isolated points), pp. 404-408; §11.4 (measurement at a scale $\\varepsilon$, the covering number $N(\\varepsilon)$, the box or capacity dimension as $\\lim \\ln N(\\varepsilon)/\\ln(1/\\varepsilon)$, the trick of using a discrete sequence of scales, the equivalent mesh count, and the warning that the rationals in $[0,1]$ have box dimension $1$), pp. 409-411; §11.5 (the pointwise dimension at a point of an attractor, the correlation sum $C(\\varepsilon)\\propto\\varepsilon^{d}$ of Grassberger and Procaccia, the scaling region between the minimum separation and the diameter, the reported values $2.05\\pm0.01$ for the Lorenz attractor and $0.500\\pm0.005$ for the logistic attractor at the onset of chaos against a box dimension of about $0.538$, and multifractals), pp. 411-415"
    pages: "401-415"
    role: the Cantor set and the von Koch curve; similarity, box, pointwise and correlation dimensions; topological Cantor sets; the reported numerical dimensions of two attractors
  - work: folland-1999
    loc: "§1.5, Proposition 1.22 (the Cantor set is compact, nowhere dense and totally disconnected, has no isolated points, has Lebesgue measure zero, and has the cardinality of the continuum), pp. 38-39; §11.2 (the $p$-dimensional Hausdorff outer measure and the Hausdorff dimension as the cutoff between $H_p = 0$ and $H_p = \\infty$), pp. 350-351; §11.3 (similitudes with a common scaling factor, invariant compact sets, the separating-set condition, Proposition 11.31 on uniqueness of the invariant set, Theorem 11.33 that the invariant set has Hausdorff dimension $\\log_{1/r}m$ with $0 < H_p < \\infty$, and Corollary 11.34 for the Cantor sets, the Sierpinski gasket and the snowflake curve), pp. 355-360"
    pages: "38-39, 350-351, 355-360"
    role: the measure-theoretic properties of the Cantor set; the definition of Hausdorff dimension; the theorem that a self-similar set with a separating set has Hausdorff dimension $\log_{1/r} m$
---

:::definition[Self-similarity, and three dimensions]{provenance=adapted src="strogatz-1994:§11.3, pp. 406-408, and §11.4, pp. 409-410, and §11.5, pp. 411-412; folland-1999:§11.3, pp. 355-356, 359"}
A **similitude** of ratio $s \in (0,1)$ is a map $S : \mathbb{R}^D \to \mathbb{R}^D$ of the form $S(x) = s\,O x + c$ with $O$ orthogonal. A nonempty compact set $F$ is **self-similar** with $m$ pieces of ratio $s$ if there are similitudes $S_1,\dots,S_m$ of ratio $s$ with

$$
F \;=\; S_1(F)\cup\dots\cup S_m(F) ,
$$

the pieces overlapping only negligibly. Iterating, $F$ is a union of $m^k$ copies of itself at ratio $s^k$, so it has detail at every scale: magnifying a small piece reproduces the whole. Writing $s = 1/r$, the **similarity dimension** of $F$ is the exponent $d$ for which $m$ copies at ratio $1/r$ make up one copy at ratio $1$, that is $m = r^d$:

$$
d_{\text{sim}} \;=\; \frac{\ln m}{\ln r} .
$$

For a segment ($m=r$), a square ($m=r^2$) and a cube ($m=r^3$) this returns $1$, $2$ and $3$, which is the reason for the definition; for the sets below it returns a number that is not an integer.

Self-similarity is special, so one wants a definition that applies to any bounded set. Let $F \subseteq \mathbb{R}^D$ be bounded and nonempty and, for $\varepsilon > 0$, let

$$
N(\varepsilon) \;=\; \text{the least number of cubes of side } \varepsilon \text{ whose union contains } F .
$$

A smooth curve of length $L$ needs $N \approx L/\varepsilon$ cubes and a smooth surface of area $A$ needs $N \approx A/\varepsilon^2$: the exponent in $N(\varepsilon) \propto \varepsilon^{-d}$ is the dimension. Taking that as the definition, the **box dimension** (also called the capacity) is

$$
d_{\text{box}} \;=\; \lim_{\varepsilon\to0^+} \frac{\ln N(\varepsilon)}{\ln(1/\varepsilon)} ,
$$

when the limit exists. Counting instead the cubes of a fixed mesh of side $\varepsilon$ that contain a point of $F$ changes $N(\varepsilon)$ by at most the factor $2^D$ -- each mesh cube that meets $F$ is covered, and each covering cube meets at most $2^D$ mesh cubes -- and a bounded factor does not survive division by $\ln(1/\varepsilon)$. So the mesh count, which is what a computer does, gives the same dimension.

Finally, a definition for a set that carries a dynamics. Let $A$ be an attractor and $x_0, x_1, \dots, x_{n-1}$ a long trajectory on it. Fix a point $x$ of $A$ and let $N_x(\varepsilon)$ be the number of trajectory points within distance $\varepsilon$ of $x$; the **pointwise dimension** at $x$ is the exponent in $N_x(\varepsilon)\propto\varepsilon^{d}$. Averaging over $x$ gives the **correlation sum**

$$
C(\varepsilon) \;=\; \frac{\#\{(i,j) : i\neq j,\ |x_i - x_j| < \varepsilon\}}{n(n-1)} ,
$$

and the **correlation dimension** $d_{\text{corr}}$ is the exponent in $C(\varepsilon)\propto\varepsilon^{\,d_{\text{corr}}}$, read off as the slope of $\ln C$ against $\ln\varepsilon$. Unlike the box dimension it weights a region by how often the trajectory visits it, so it describes the invariant measure on $A$ and not only the set; Strogatz records that in general $d_{\text{corr}} \le d_{\text{box}}$, usually with little between them.

A closed set $F$ is a **topological Cantor set** if it is totally disconnected -- its only connected subsets are single points, which for a subset of $\mathbb{R}$ means it contains no interval -- and has no isolated point: every point of $F$ has other points of $F$ arbitrarily close. The two conditions pull in opposite directions, and that tension is what a Cantor set is. Neither mentions dimension or self-similarity, so the notion survives the continuous deformations under which those are destroyed.
:::

:::definition[Grid constructions]{provenance=original}
All the explicit sets below are built the same way. Fix an integer $r \ge 2$, a dimension $D \ge 1$, and divide the unit cube $Q_0 = [0,1]^D$ into $r^D$ closed subcubes of side $1/r$ in the obvious grid. Choose $m$ of them, say the cubes with lower corners $c_1/r, \dots, c_m/r$ where each $c_i \in \{0,1,\dots,r-1\}^D$, and let

$$
S_i(x) \;=\; \frac{x + c_i}{r}, \qquad i = 1,\dots,m ,
$$

so that $S_i(Q_0)$ is the $i$-th chosen cube. Put $F_0 = Q_0$ and $F_{k+1} = S_1(F_k)\cup\dots\cup S_m(F_k)$, and define the **grid set**

$$
F \;=\; \bigcap_{k\ge0} F_k .
$$

Thus $F_k$ is a union of $m^k$ closed cubes of side $r^{-k}$ -- call them the **stage-$k$ cubes** -- each stage-$k$ cube contains exactly $m$ stage-$(k+1)$ cubes, and distinct stage-$k$ cubes have disjoint interiors. The middle-thirds **Cantor set** $C$ is the case $D=1$, $r=3$, $m=2$, $c_1 = 0$, $c_2 = 2$: remove the open middle third of $[0,1]$, then of each remaining interval, and so on.
:::

:::statement[Grid sets and their dimension]{provenance=original}
Let $F$ be a grid set as above, with $1 \le m \le r^D$ and the $c_i$ distinct.

1. **($F$ is a self-similar compact set.)** $F$ is nonempty and compact, $F = S_1(F)\cup\dots\cup S_m(F)$, and the $S_i$ are similitudes of ratio $1/r$ whose images meet only in sets of Lebesgue measure zero. Every stage-$k$ cube contains at least one point of $F$.
2. **(Box dimension.)** The limit defining $d_{\text{box}}$ exists and

   $$
   d_{\text{box}}(F) \;=\; \frac{\ln m}{\ln r} \;=\; d_{\text{sim}}(F) .
   $$

3. **(Measure.)** The Lebesgue measure of $F$ is $\lim_k m^k r^{-kD}$, which is $0$ if $m < r^D$ and $1$ if $m = r^D$ (in which case $F = Q_0$).
4. **(Cardinality and topology, for $m \ge 2$.)** $F$ is uncountable. If moreover no two chosen cubes touch -- as happens for the middle-thirds Cantor set, where the two chosen intervals $[0,\frac13]$ and $[\frac23,1]$ are disjoint -- then $F$ is a topological Cantor set.

Specialising to $D=1$, $r=3$, $m=2$: the Cantor set $C$ is a compact topological Cantor set of Lebesgue measure zero, is uncountable, and has

$$
d_{\text{box}}(C) \;=\; \frac{\ln 2}{\ln 3} \;=\; 0.6309297536 .
$$
:::

:::idea{provenance=original}
The covering number is handed to us at the special scales $\varepsilon = r^{-k}$: the $m^k$ stage-$k$ cubes cover $F$, so $N(r^{-k}) \le m^k$, and since each of them contains a point of $F$ and a cube of side $r^{-k}$ can straddle at most $2^D$ cells of the stage-$k$ grid, $N(r^{-k}) \ge m^k/2^D$. Both bounds give $\ln N/\ln(1/\varepsilon) = \ln m/\ln r$ up to a term of order $1/k$. Intermediate scales are squeezed between two consecutive special ones, and the squeeze costs only a factor $m$ and a shift of one in $k$, neither of which survives the limit.

The measure and the cardinality need no more than the construction: the areas multiply by $m/r^D$ at each stage, and the stage-$k$ cube containing a point of $F$ records a choice of one of $m$ branches, so $F$ is coded by infinite words in $m$ letters.
:::

:::proof{provenance=original}
*Part 1.* Each $F_k$ is a finite union of closed cubes, hence compact, and $F_{k+1}\subseteq F_k$: indeed $F_1 \subseteq F_0$ because the chosen subcubes lie in $Q_0$, and applying the (inclusion-preserving) operation $E \mapsto \bigcup_i S_i(E)$ repeatedly keeps the inclusion. So $F$ is an intersection of a nested sequence of nonempty compact sets, hence compact and nonempty (:ref[]{to=found.compactness}). The same argument inside a fixed stage-$k$ cube $Q$ shows that $Q\cap F \neq \emptyset$: the sets $Q \cap F_{k+j}$, $j \ge 0$, are nonempty -- each stage-$(k+j)$ cube inside $Q$ contains $m\ge1$ stage-$(k+j+1)$ cubes -- compact and nested.

For self-similarity, $S_i(F) = S_i\bigl(\bigcap_k F_k\bigr) = \bigcap_k S_i(F_k)$, because $S_i$ is injective; hence

$$
\bigcup_{i=1}^m S_i(F) \;=\; \bigcup_i \bigcap_k S_i(F_k) \;=\; \bigcap_k \bigcup_i S_i(F_k) \;=\; \bigcap_k F_{k+1} \;=\; F ,
$$

where the middle exchange of union and intersection is legitimate because the sequences $S_i(F_k)$ are *nested* in $k$ and the union is finite. Each $S_i$ is a similitude of ratio $1/r$ with $O = I$. Two distinct images $S_i(F)$, $S_j(F)$ lie in distinct stage-$1$ cubes, which meet at most in a common face, a set of Lebesgue measure zero.

*Part 2.* Fix $k$ and put $\varepsilon = r^{-k}$.

- *Upper bound.* The $m^k$ stage-$k$ cubes have side $\varepsilon$ and cover $F$, so $N(\varepsilon) \le m^k$.
- *Lower bound.* Let cubes $B_1,\dots,B_N$ of side $\varepsilon$ cover $F$. Consider the grid of all $r^{kD}$ cells of side $\varepsilon$ in $Q_0$. In each coordinate, an interval of length $\varepsilon$ meets at most two of the grid intervals of length $\varepsilon$, so each $B_l$ meets at most $2^D$ grid cells. The $m^k$ stage-$k$ cubes are grid cells and each contains a point of $F$ by part 1, so each must be met by at least one $B_l$. Counting the pairs (stage-$k$ cube, covering cube that meets it) in two ways gives $m^k \le 2^D N$, that is $N(\varepsilon) \ge 2^{-D}m^k$.

Therefore

$$
\frac{k\ln m - D\ln 2}{k\ln r} \;\le\; \frac{\ln N(r^{-k})}{\ln(r^{k})} \;\le\; \frac{k \ln m}{k\ln r} ,
$$

and both ends tend to $\ln m/\ln r$ as $k\to\infty$.

Now let $\varepsilon$ be arbitrary and let $k$ be the integer with $r^{-(k+1)} < \varepsilon \le r^{-k}$. Covering numbers are non-increasing in the size of the covering cube, so $N(r^{-k}) \le N(\varepsilon) \le N(r^{-(k+1)})$, while $k\ln r \le \ln(1/\varepsilon) < (k+1)\ln r$. Combining with the two displayed bounds,

$$
\frac{k\ln m - D\ln 2}{(k+1)\ln r} \;\le\; \frac{\ln N(\varepsilon)}{\ln(1/\varepsilon)} \;\le\; \frac{(k+1)\ln m}{k\ln r} ,
$$

and as $\varepsilon \to 0^+$ we have $k \to \infty$ and both bounds tend to $\ln m/\ln r$. So the limit exists and has that value. It coincides with $\ln m/\ln r = d_{\text{sim}}$ by part 1.

*Part 3.* $F_k$ is a union of $m^k$ cubes of side $r^{-k}$ with disjoint interiors, so its Lebesgue measure is exactly $m^kr^{-kD} = (m/r^D)^k$ (:ref[]{to=measure.lebesgue-measure}). The $F_k$ decrease to $F$ and have finite measure, so the measure of $F$ is $\lim_k (m/r^D)^k$, which is $0$ when $m < r^D$ and $1$ when $m = r^D$.

*Part 4.* Assume $m \ge 2$. Each point of $F$ lies in exactly one nested sequence of cubes -- stage $1$, stage $2$, and so on -- unless it lies on a shared face, in which case it lies in more than one; conversely every infinite word $i_1i_2i_3\cdots$ in the alphabet $\{1,\dots,m\}$ determines a nested sequence of stage-$k$ cubes whose intersection is a single point of $F$ (single, because the diameters $\sqrt{D}\,r^{-k}$ tend to $0$), and distinct words give distinct points whenever the corresponding cubes are eventually disjoint. To avoid the face-sharing nuisance, note simply that the map

$$
\text{word } (i_1,i_2,\dots) \;\longmapsto\; \text{the point } \bigcap_k S_{i_1}\cdots S_{i_k}(Q_0)
$$

is onto $F$ and is at most $2^D$-to-one (a point lies in at most $2^D$ cubes of a grid). The set of words is uncountable, being $\{1,\dots,m\}^{\mathbb{N}}$ with $m\ge2$ (:ref[]{to=found.sets-cardinality}); a set that is the image of an uncountable set under an at-most-$2^D$-to-one map is uncountable, since a countable image would force the domain to be a countable union of finite sets. Hence $F$ is uncountable.

Suppose now that no two chosen cubes touch, and let $\delta>0$ be the least distance between two of them. Then two distinct stage-$k$ cubes inside a common stage-$(k-1)$ cube are at distance at least $\delta r^{-(k-1)} > 0$.

- *No isolated points.* Let $x\in F$ and $\eta>0$. Choose $k$ with $\sqrt D\,r^{-k} < \eta$ and let $Q$ be a stage-$k$ cube containing $x$. Its $m \ge 2$ stage-$(k+1)$ children each contain a point of $F$ by part 1, and at least one of those children does not contain $x$; the point of $F$ in it is distinct from $x$ and within $\operatorname{diam}Q < \eta$. So $x$ is not isolated.
- *Totally disconnected.* Let $x \ne y$ both lie in $F$ and choose $k$ with $\sqrt D\,r^{-k} < |x-y|$, so $x$ and $y$ lie in different stage-$k$ cubes $Q_x \neq Q_y$. Walk back to the first stage $j \le k$ at which their cubes differ; those two stage-$j$ cubes sit inside one stage-$(j-1)$ cube and are therefore at distance at least $\delta r^{-(j-1)} > 0$. The open slab strictly between them (take any hyperplane separating the two cubes) misses $F_j \supseteq F$ entirely, so it disconnects $F$ into two relatively open pieces, one containing $x$ and the other $y$. Hence no connected subset of $F$ contains two points. $\square$
:::

:::remark[Where the hypotheses are used, and what the box dimension is not]{provenance=original}
- *Separation of the chosen cubes* is used only in part 4, for the topological conclusions. Part 2 needs nothing of the kind: the chosen cubes may be adjacent, in which case $F$ is connected and still has dimension $\ln m/\ln r$. What saves the dimension computation is that distinct cubes of a grid have disjoint *interiors*, which is enough for the two-way count.
- *The grid form* is used in both bounds of part 2: that the stage-$k$ cubes are cells of one mesh of side $r^{-k}$ is what makes "at most $2^D$ cells per covering cube" available. For general similitudes with a common ratio -- rotations allowed, as in the von Koch curve -- the same conclusion holds under a separation condition, but the counting needs the volume argument of Folland's Lemma 11.32 rather than a grid.
- *Equal ratios.* Nothing above covers pieces of *different* ratios $s_1,\dots,s_m$. There the dimension is the root $p$ of $\sum_i s_i^{\,p} = 1$, which reduces to $\ln m/\ln r$ when all $s_i = 1/r$; Folland states this and attributes it to Hutchinson, and we do not prove it.
- *The box dimension can be wrong.* It is not countably additive and does not vanish on all countable sets: the rationals in $[0,1]$ have box dimension $1$, as Strogatz notes, because any $\varepsilon$-cover of a dense subset of $[0,1]$ is an $\varepsilon$-cover of $[0,1]$. Hausdorff's definition repairs this by allowing covers with sets of *different* small sizes: $H_p(A) = \lim_{\delta\to0}\inf\{\sum_j(\operatorname{diam}B_j)^p : A\subseteq\bigcup B_j,\ \operatorname{diam}B_j<\delta\}$, and the **Hausdorff dimension** is the value of $p$ at which $H_p(A)$ drops from $\infty$ to $0$. For the sets here the two agree: Folland's Theorem 11.33 gives Hausdorff dimension $\log_{1/s}m$ for the compact invariant set of $m$ similitudes of ratio $s$ admitting a separating set -- an open bounded $U$ with $\bigcup_iS_i(U)\subseteq U$ and the $S_i(U)$ disjoint -- and for a grid set the open unit cube is such a $U$ whenever the chosen cubes are distinct. In general $d_{\text{Hausdorff}} \le d_{\text{box}}$ and the inequality can be strict, the rationals again being the example.
- *The limit may not exist* for a general bounded set, in which case one keeps the upper and lower limits separately. Part 2 proves existence for grid sets.
- *$d_{\text{corr}}$ is not a property of the set.* It depends on the invariant measure, so two systems with the same attractor but different statistics can return different correlation dimensions. It is nevertheless the one that is measurable in practice, because the correlation sum needs only a list of points.
:::

:::method[Measuring a dimension]{provenance=adapted src="strogatz-1994:§11.4, pp. 409-411, and §11.5, pp. 411-413"}
**For a self-similar set given by a rule.** Identify $m$, the number of copies, and $r$, the factor by which each is shrunk; then $d = \ln m/\ln r$, with no computation. Check the rule really does reproduce the whole set, not merely a stage of the construction.

**By box counting, for a set given as a list of points or by a construction.**

1. Choose a sequence of scales $\varepsilon$ spaced evenly in $\ln\varepsilon$, spanning the range between the resolution of your data and the diameter of the set. If the set is built on a grid of ratio $r$, the scales $r^{-k}$ give the cleanest numbers, but any sequence converges to the same limit.
2. At each $\varepsilon$, lay a mesh of side $\varepsilon$ and count the occupied cells $N(\varepsilon)$ -- in practice by binning the coordinates, dividing by $\varepsilon$, rounding down, and counting distinct index tuples.
3. Plot $\ln N$ against $\ln(1/\varepsilon)$ and fit a straight line over the **scaling region**: scales small enough that the mesh resolves the structure, but large enough that each occupied cell still holds many points. The slope is $d_{\text{box}}$.
4. Expect the local slope to oscillate rather than settle, if the set has a preferred ratio $r$: the count is exactly on the line only at $\varepsilon = r^{-k}$, and in between it overshoots. Average over at least one full period in $\ln\varepsilon$, or use only the scales $r^{-k}$.

**By the correlation sum, for a trajectory on an attractor.** Discard the transient, store $n$ points, and compute $C(\varepsilon)$ as the fraction of pairs closer than $\varepsilon$ for a range of $\varepsilon$; the slope of $\ln C$ against $\ln\varepsilon$ over the scaling region is $d_{\text{corr}}$. Two cautions: exclude pairs whose indices differ by less than a few correlation times, or consecutive points on one trajectory will inflate $C$ at small $\varepsilon$ and bias the slope upward; and expect saturation at $\varepsilon$ near the diameter of the attractor, where $C \to 1$, and noise at $\varepsilon$ below the typical nearest-neighbour distance.
:::

:::example[A planar dust, by rule and by count]{provenance=original}
Divide the unit square into a $4\times4$ grid of $16$ squares of side $\tfrac14$, index them by $(i,j)$ with $i$ the column and $j$ the row, $i,j\in\{0,1,2,3\}$, and keep the six squares

$$
(0,0),\quad (0,3),\quad (1,1),\quad (2,2),\quad (3,0),\quad (3,3) .
$$

Repeat inside each kept square for ever. Call the limit set $F$: a dust of points scattered along a bent diagonal with two outlying clumps at each end.

*By the rule.* This is a grid set with $D = 2$, $r = 4$, $m = 6$, and the six chosen squares are distinct, so part 2 of the theorem gives

$$
d_{\text{box}}(F) \;=\; \frac{\ln 6}{\ln 4} \;=\; \frac{1.791759469}{1.386294361} \;=\; 1.2924812504 .
$$

The open unit square is a separating set for the six maps $S_i(x) = (x+c_i)/4$ -- their images are disjoint open squares inside it -- so by Folland's theorem the Hausdorff dimension is the same number. The area is $(6/16)^k = (3/8)^k \to 0$, so $F$ is a planar set of zero area and dimension strictly between $1$ and $2$. Two of the chosen squares touch at a corner, $(0,0)$ and $(1,1)$ for instance, so part 4 does not apply and we do not claim that $F$ is totally disconnected.

*By count.* To test the theorem rather than trust it, we generated the $6^9 = 10\,077\,696$ stage-$9$ squares, of side $4^{-9} = 3.81\times10^{-6}$, took their lower corners as a point set, and counted occupied cells of a mesh of side $\varepsilon$ for $\varepsilon = 10^{-j/2}$:

$$
\begin{array}{llll}
\varepsilon = 10^{-1.5}: & N = 280 \qquad & \varepsilon = 10^{-3}: & N = 25\,140\\
\varepsilon = 10^{-2}: & N = 1\,230 & \varepsilon = 10^{-3.5}: & N = 112\,403\\
\varepsilon = 10^{-2.5}: & N = 5\,775 & \varepsilon = 10^{-4}: & N = 484\,884
\end{array}
$$

A least-squares fit of $\ln N$ against $\ln(1/\varepsilon)$ over these six scales gives a slope of

$$
1.2979 ,
$$

and the chord from the first point to the last gives $1.2954$, both within $0.4\%$ of the exact $1.2924812504$. The residual wobble is the effect predicted in step 4 of the method: the local slope between consecutive scales ranges from $1.27$ to $1.34$ and returns to the exact value only at the scales $4^{-k}$, where the count is exactly $6^k$ -- we checked that it is, for $k = 1,\dots,6$: $6, 36, 216, 1296, 7776, 46656$. Below $\varepsilon \approx 10^{-5}$ the count saturates at $10\,077\,696$, because the mesh has become finer than the stage-$9$ approximation; this is the lower end of the scaling region, and including those scales drags the fitted slope down to $1.05$, which is the single most common way of getting a dimension wrong.

*The one-dimensional case for comparison.* The same theorem with $D = 1$, $r = 3$, $m = 2$ gives $d_{\text{box}}(C) = \ln2/\ln3 = 0.6309297536$ for the middle-thirds Cantor set, and with $D=1$, $r=5$, $m=3$ -- keep the first, third and fifth fifths of every interval -- gives $\ln3/\ln5 = 0.6826061944$. The von Koch curve, four copies of itself at ratio $\tfrac13$, has similarity dimension $\ln4/\ln3 = 1.2618595071$; it is not a grid set, since its copies are rotated, so our theorem does not cover it, and we quote it from Strogatz, with Folland's Corollary 11.34 giving the same value for its Hausdorff dimension.
:::

:::application{provenance=original}
Fractal dimension entered dynamics because the attractors of dissipative chaotic systems are not surfaces.

*Counting the active degrees of freedom.* A dissipative flow contracts phase-space volume, so its attractor has measure zero; but an attractor on which the motion is chaotic cannot be a point, a curve or a torus either. What is left is a set of non-integer dimension, and that number is the most compact summary of how complicated the long-term motion is. For an experimental time series, the correlation dimension computed from a reconstructed trajectory is the standard estimate: a low value, stable as the reconstruction dimension is increased, is evidence that a few variables suffice, while a value that keeps rising with the reconstruction dimension indicates noise and not low-dimensional chaos. Strogatz reports the value $2.05\pm0.01$ obtained by Grassberger and Procaccia for the :ref[Lorenz attractor]{to=dyn.lorenz-equations} at $\sigma=10$, $b=8/3$, $r=28$, and $0.500\pm0.005$ for the attractor of the logistic map at the accumulation point of the :ref[period-doubling cascade]{to=dyn.period-doubling}, against a box dimension of about $0.538$ for that set -- an attractor that is a Cantor-like set but, because the gaps in the orbit diagram scale differently in different places, is not strictly self-similar.

*Why the cross section is a Cantor set.* A strange attractor is made by stretching a sheet of phase space, folding it, and laying it back down. After $k$ rounds there are $2^k$ layers inside the original thickness, so a transverse cut through the attractor meets a set of points separated by gaps of every size -- exactly the construction of this unit, run in the transverse direction. The attractor is then locally the product of a smooth sheet with a Cantor set, and its dimension exceeds the dimension of the sheet by the dimension of that set. This is the mechanism made explicit in :ref[The Henon map and strange attractors]{to=dyn.henon-map}.

*Outside dynamics.* The same arithmetic is used for the measured roughness of surfaces, for the dimension of fracture and porous networks, and for percolation clusters, in each case to answer the question "how does the amount of the object within a box scale with the size of the box?" -- the only question the box dimension answers, but one that controls transport, scattering and adsorption on such objects.
:::
