---
id: dyn.index-theory
title: Index theory
kind: theorem
level: advanced
summary: Attaches to every loop in the phase plane the integer number of turns the vector field makes along it, shows that this integer is the sum of the indices of the fixed points inside and equals $+1$ on any closed orbit, and so proves from the shape of the field alone that a periodic solution must surround fixed points of total index one.
prereqs: [dyn.linear-planar-classification, ode.existence-uniqueness, complex.winding-number, complex.argument-principle-rouche, found.connectedness-homotopy, linalg.determinants]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§6.8 Index Theory, pp. 174-181: the index $I_C=\\frac1{2\\pi}[\\phi]_C$ of a simple closed curve $C$ carrying no fixed point, defined as the net number of counterclockwise turns of the field as the point runs once counterclockwise round $C$, with the electrostatic analogy to a Gaussian surface; the counting construction of Examples 6.8.1-6.8.3 and the worked value $I_C=0$ for $\\dot x=x^2y$, $\\dot y=x^2-y^2$ on the unit circle; the four properties - invariance under deformations of $C$ that cross no fixed point, $I_C=0$ when no fixed point is enclosed, invariance under $t\\to-t$, and $I_C=+1$ when $C$ is itself a closed orbit, which the text states is clear from geometric intuition and does not prove; the definition of the index of an isolated fixed point; Example 6.8.4, giving $+1$ for stable and unstable nodes and $-1$ for a saddle, with the remark that spirals, centres, degenerate nodes and stars also have $+1$ and that the index is unrelated to stability; Theorem 6.8.1, $I_C=\\sum_k I_k$, with the balloon-and-bridges argument for it; Theorem 6.8.2, that a closed orbit encloses fixed points of index sum $+1$, and its consequences that a closed orbit always encloses a fixed point and cannot enclose a single saddle; Example 6.8.6, that $\\dot x=xe^{-x}$, $\\dot y=1+x+y^2$ has no closed orbits because it has no fixed points"
    pages: "174-181"
    role: the definition of the index of a curve and of a fixed point; the list of four properties; the two theorems and the route of the additivity argument; the indices of the elementary linear types; the use of the theory to exclude closed orbits
  - work: docarmo-2016
    loc: "§4-5, pp. 283-286: the index of a differentiable vector field at an isolated singular point of an oriented surface, defined by $2\\pi I=\\int_0^l (\\mathrm d\\varphi/\\mathrm d t)\\,\\mathrm d t$ with $\\varphi$ a differentiable determination of the angle from the coordinate field $x_u$ to $v$ along a positively oriented simple closed curve bounding a simple region containing the singular point and no other; the proof via Eq. (3), $\\int_R K\\,\\mathrm d\\sigma - 2\\pi I = \\Delta(\\psi-\\varphi)$, that $I$ does not depend on the parametrization, and the deformation argument, sketched there, that it does not depend on the curve, together with the remark that the index of a non-singular point is zero; the examples of indices in Figure 4-35, p. 285, with $I=1$ for $v=(-x,-y)$ and for $v=(-y,x)$, $I=-1$ for $v=(-x,y)$ and $I=-3$ for a further, non-linear field; and POINCARE'S THEOREM, that on a compact surface the indices of a differentiable vector field with isolated singular points sum to the Euler-Poincare characteristic, with the corollary that on a surface homeomorphic to a sphere the sum is $2$ and no such surface carries a nowhere-zero differentiable vector field. §4-5, p. 270: the THEOREM (of Turning Tangents) for plane curves, that the total variation of the angle of the tangent plus the jumps at the vertices is $\\pm 2\\pi$ according to the orientation, stated there without proof and attributed to H. Hopf. §5-7, pp. 399-403: the rotation index of a closed plane curve as the degree of its tangent map (p. 399); THEOREM 1, the differentiable Jordan curve theorem (p. 400); Remark 1, that the interior of a regular simple closed curve is homeomorphic to an open disc, with the proof attributed to Stoker (p. 402); and THEOREM 2, the differentiable theorem of turning tangents, that the rotation index of a regular simple closed plane curve is $\\pm 1$ depending on the orientation, whose proof by the secant map fixes the sign as $+1$ when the oriented angle from the tangent at a support point to its negative is $\\pi$ (pp. 402-403)"
    pages: "270, 283-286, 399-403"
    role: the integral form of the index and the independence of the index from the curve used to compute it; the theorem of turning tangents in both its piecewise regular and its regular form, which supplies the proof of the property that Strogatz states without one, the proof of Theorem 2 also fixing which sign goes with the counterclockwise orientation; the differentiable Jordan curve theorem and the open-disc statement for the interior, which give the regular case of the plane topology quoted in the definition; Poincare's theorem on the sum of the indices over a compact surface, used in the application
---

:::definition[The index of a curve and of a fixed point]{provenance=adapted src="strogatz-1994:§6.8, pp. 174-175, 178; docarmo-2016:§4-5, p. 283; docarmo-2016:§5-7, Thm 1 p. 400 and Remark 1 p. 402"}
Let $f = (u,v)$ have continuous first partial derivatives on an open set $U \subseteq \mathbb{R}^2$. A point $p$ with $f(p) = 0$ is a **fixed point** of $\dot x = f(x)$ (do Carmo calls it a singular point of $f$); it is **isolated** if some neighbourhood of it contains no other.

Let $\gamma : [0,1] \to U$ be any **continuous loop**, $\gamma(0) = \gamma(1)$, with $f$ **nowhere zero on it**. Then

$$
g \;=\; \frac{f\circ\gamma}{\lvert f\circ\gamma\rvert}
$$

is a loop in the unit circle $S^1$, and the **index of $\gamma$** is

$$
I_\gamma \;=\; \frac{1}{2\pi}\,[\phi]_\gamma , \qquad [\phi]_\gamma \;=\; \phi(1) - \phi(0),
$$

where $\phi : [0,1]\to\mathbb{R}$ is a **continuous determination of the angle of $f$ along $\gamma$**: a continuous function with $g(t) = (\cos\phi(t),\sin\phi(t))$ for every $t$. Three things have to be said, and all three come from lifting paths through the covering $\mathbb{R}\to S^1$, $s\mapsto(\cos s,\sin s)$, for which see :ref[]{to=found.connectedness-homotopy}: such a $\phi$ exists for every continuous $g$; any two of them differ by a constant in $2\pi\mathbb{Z}$, so $[\phi]_\gamma$ does not depend on which is used; and $g(1) = g(0)$ forces $[\phi]_\gamma \in 2\pi\mathbb{Z}$, so that $I_\gamma$ is an **integer**. **Only continuity of $\gamma$ is needed**, which matters below, because the deformations in (I1) run through loops that are neither smooth nor simple.

When $C$ is a **simple** closed curve in $U$ — it does not cross itself — avoiding the fixed points, the **index of $C$**, written $I_C$, means $I_\gamma$ for a parametrisation $\gamma$ traversing $C$ once counterclockwise. In words: **$I_C$ counts how many net counterclockwise turns the arrows of the field make as we walk once counterclockwise round $C$.** It is read off the field on $C$ alone; nothing inside $C$ is needed.

If in addition $C$ is **piecewise $C^1$** and $f$ is $C^1$, a continuous determination of $\phi$ is $C^1$ on each smooth piece of $C$ and the net change is the line integral of $\mathrm d\phi$, which gives the computational form

$$
I_C \;=\; \frac{1}{2\pi}\oint_C \frac{u\,\mathrm d v - v\,\mathrm d u}{u^2+v^2}
\;=\; \frac{1}{2\pi}\oint_C \mathrm d\!\left(\arctan\frac{v}{u}\right) .
$$

In that case $I_C$ is the winding number $n(f\circ\gamma,0)$ about the origin of :ref[]{to=complex.winding-number}, which is defined there by this integral, for piecewise differentiable cycles only; the lifting definition above is what carries the notion over to merely continuous loops. Do Carmo takes the integral as the definition, on a surface, with the angle measured from a coordinate field; in the plane with Cartesian coordinates his angle is ours. Piecewise smoothness is needed for this formula and for nothing else.

If $p$ is an **isolated** fixed point, the **index of $p$** is

$$
I(p) \;=\; I_C \quad\text{for any simple closed curve } C \text{ around } p \text{ enclosing no other fixed point,}
$$

a definition justified by property (I1) below.

A **closed orbit** (also called a periodic orbit, or a cycle) of $\dot x = f(x)$ is the image $C = \varphi(\mathbb{R})$ of a **nonconstant periodic solution** $\varphi$: a solution defined for all $t$, not constant, with $\varphi(t+S) = \varphi(t)$ for all $t$ and some $S > 0$. Such a $\varphi$ has a **least period** $T > 0$. Indeed the set $P$ of its periods is a subgroup of $\mathbb{R}$, and it is closed, because $\varphi$ is continuous and $P = \bigcap_t \{S : \varphi(t+S) = \varphi(t)\}$; a closed subgroup of $\mathbb{R}$ is $\{0\}$, all of $\mathbb{R}$, or $T\mathbb{Z}$ with $T$ its smallest positive element. The first is excluded because $S \in P$, the second because $\varphi$ would then be constant. **Throughout, $T$ denotes the least period**; the proof of (I4) shows that $\varphi$ is then injective on $[0,T)$, so that $C$ is a simple closed curve and $I_C$ is defined for it.

**Two classical facts are taken as external input.** The arguments below use the **Jordan curve theorem** — a simple closed plane curve $C$ separates the plane into a bounded inside and an unbounded outside, with $C$ as their common boundary — and the **Schoenflies theorem**, that the closed region $D$ bounded by $C$ is carried onto a closed round disc by a homeomorphism of the plane. Neither is proved in this handbook and neither is in any unit, so neither appears in the prerequisites; they are used here in the same way as Poincare's theorem in the application below, as quoted classical results. For regular curves, which is all that (I4) and the examples need, do Carmo proves a differentiable Jordan curve theorem (§5-7, Theorem 1, p. 400) and records in Remark 1, p. 402, that the inside is then homeomorphic to an open disc, attributing that proof to Stoker; the closed-disc form used in step 2 of the additivity proof is the full Schoenflies statement, which he does not give.
:::

:::statement[Properties of the index]{provenance=adapted src="strogatz-1994:§6.8, pp. 177-178; docarmo-2016:§4-5, pp. 270, 284"}
Let $f$ be a $C^1$ vector field on $U$ and let all curves below be simple closed curves in $U$ avoiding the fixed points of $f$.

**(I1) Deformation.** If $C$ can be deformed continuously into $C'$ inside $U$ without any intermediate loop meeting a fixed point, then $I_C = I_{C'}$. The intermediate loops are only required to be continuous, which is why the index was defined for continuous loops.

**(I2) Nothing inside.** If the region enclosed by $C$ contains no fixed point, then $I_C = 0$.

**(I3) Reversing time.** Replacing $f$ by $-f$, which reverses every arrow, leaves every index unchanged.

**(I4) A closed orbit.** If $C$ is itself a closed orbit of $\dot x = f(x)$, then $I_C = +1$.

**(I5) Additivity.** If $C$ encloses exactly the isolated fixed points $p_1,\dots,p_n$ and no others, then
$$
I_C \;=\; \sum_{k=1}^{n} I(p_k).
$$
:::

:::statement[(I6) The index of a nondegenerate fixed point]{provenance=original}
If $f(p) = 0$ and $\det Df(p) \neq 0$, then $p$ is isolated and
$$
I(p) \;=\; \operatorname{sign}\bigl(\det Df(p)\bigr).
$$
In particular saddles have index $-1$, while nodes, stars, degenerate nodes, spirals and centres all have index $+1$: the index sees the sign of the determinant and is blind to stability.

Neither source states the determinant criterion in this form. Strogatz computes the indices of the elementary linear types one by one (Example 6.8.4, p. 178), and do Carmo pictures three of them in Figure 4-35, p. 285 — $v = (-x,-y)$ and $v = (-y,x)$ with $I = 1$, and $v = (-x,y)$ with $I = -1$ — alongside a fourth field of index $-3$ that is not linear and is precisely a case the criterion does not reach, since such an index is possible only when $\det Df(p) = 0$. The statement above packages those computations, and it is proved below from (I1) alone.
:::

:::statement[Closed orbits enclose index one]{provenance=adapted src="strogatz-1994:§6.8, Thm 6.8.2, p. 180"}
Let $C$ be a closed orbit of a $C^1$ planar system. Then $I_C = +1$. If every fixed point enclosed by $C$ is **isolated**, then there are only finitely many of them and their indices sum to $+1$:
$$
\sum_{k} I(p_k) \;=\; +1 .
$$
Consequently:

1. a closed orbit always encloses at least one fixed point;
2. a closed orbit cannot enclose exactly one fixed point if that point is a saddle;
3. a system with no fixed points at all in a simply connected region has no closed orbit lying in that region.

Consequence 1 needs no isolation hypothesis. Isolation is needed for the sum, and cannot be dropped: the field $f(x,y) = \max(r-1,0)^2\,(-y,x)$, with $r = \sqrt{x^2+y^2}$, is $C^1$ on the plane and has the circle $r = 2$ as a closed orbit, yet its fixed-point set is the whole closed disc $r \le 1$, in which no point is isolated and no index is defined.
:::

:::idea{provenance=original}
The index is a counting device of the same family as Gauss's law and the argument principle: an integral over a boundary that reports what is inside. The angle of the field is a function defined only up to multiples of $2\pi$, so walking round a loop can return it to a different branch; the number of branches crossed is an integer, and an integer that varies continuously with the loop cannot vary at all. That single remark gives (I1), and (I2) follows because a loop enclosing no fixed point can be shrunk to a point.

Additivity is the familiar "cut the region into simply connected pieces" argument. On a simply connected set where the field never vanishes, the angle *can* be defined globally and single-valuedly, so every loop there contributes nothing. Slit the inside of $C$ along disjoint bridges running to small circles about the fixed points; what remains is simply connected, so the total circuit of its boundary contributes zero, and since each bridge is walked once each way its contributions cancel. What is left is $C$ against the small circles, which is the identity we want.

Property (I4) is the one genuinely topological input. On a closed orbit the field is tangent to the curve, so the index of the field counts the turns of the tangent to a simple closed plane curve, and that count is $\pm1$ — the theorem of turning tangents, due to Hopf and quoted by do Carmo. Combined with additivity it says that a periodic solution must sit over fixed points whose indices balance out to exactly one, which is a strong restriction obtained from no computation at all.
:::

:::proof[(I1), (I2) and (I3)]{provenance=adapted src="strogatz-1994:§6.8, pp. 177-178"}
Write $Z = \{x \in U : f(x) = 0\}$ for the fixed-point set, so $f : U\setminus Z \to \mathbb{R}^2\setminus\{0\}$ is continuous.

**(I1).** Let $\Gamma : [0,1]\times[0,1] \to U\setminus Z$ be the deformation, each $\Gamma(s,\cdot)$ a loop, with $\Gamma(0,\cdot) = \gamma$ and $\Gamma(1,\cdot) = \gamma'$; the hypothesis that no intermediate curve meets a fixed point is exactly what makes $\Gamma$ land in $U \setminus Z$. Put

$$
g_s \;=\; \frac{f\circ\Gamma(s,\cdot)}{\lvert f\circ\Gamma(s,\cdot)\rvert} ,
$$

a loop in $S^1$ for each $s$, with $I_{\Gamma(s,\cdot)}$ equal to the net change of a lift of $g_s$, divided by $2\pi$. It is enough to show that this integer is the same for $s = 0$ and $s = 1$.

The map $(s,t)\mapsto g_s(t)$ is continuous on the compact square, hence uniformly continuous, so there is a subdivision $0 = s_0 < s_1 < \dots < s_N = 1$ with $\lvert g_{s_{j+1}}(t) - g_{s_j}(t)\rvert < 2$ for every $t$ and every $j$: consecutive loops are never at antipodal points of the circle. Fix $j$ and write $g_{s_{j+1}}(t) = R_{\delta(t)}\,g_{s_j}(t)$, where $R_\delta$ is the rotation by $\delta$ and $\delta(t)$ is the unique such angle in $(-\pi,\pi)$ — unique and continuous in $t$ exactly because the two points are never antipodal, which is where the subdivision is used. If $\phi$ is a continuous determination of the angle for $g_{s_j}$, then $\phi + \delta$ is one for $g_{s_{j+1}}$; and $\delta(1) = \delta(0)$, since both loops close up and $\delta$ is determined pointwise. So the two net changes are equal, and the index is unchanged across each step of the subdivision, hence $I_C = I_{C'}$. (For piecewise differentiable loops this is the homotopy invariance of the winding number, :ref[]{to=complex.winding-number}; the argument just given needs nothing but continuity, and will be used again in (I5).)

**(I2).** Let $D$ be the closed region bounded by $C$. By the Jordan curve theorem together with the Schoenflies theorem — the classical facts that a simple closed plane curve bounds, and that $D$ is homeomorphic to a closed disc — $\gamma$ is null-homotopic inside $D$. The hypothesis is that $D \cap Z = \emptyset$, so that null-homotopy takes place in $U\setminus Z$, and (I1) gives $I_C = I_{\text{point}} = 0$: a constant loop has winding number zero. See :ref[]{to=found.connectedness-homotopy} for the notion of null-homotopy used here.

**(I3).** If $\phi$ is a continuous determination of the angle of $f$ along $C$, then $\phi + \pi$ is one for $-f$. The two differ by a constant, so they have the same net change over the circuit, and $I_C$ is the same for $f$ and for $-f$. $\square$
:::

:::proof[(I5) additivity]{provenance=adapted src="strogatz-1994:§6.8, ideas behind Thm 6.8.1, p. 179"}
**Step 1: a single-valued angle on a simply connected set.** Let $W \subseteq U\setminus Z$ be open and simply connected. Then $f : W \to \mathbb{R}^2\setminus\{0\}$ lifts: there is a continuous $\Phi : W \to \mathbb{R}$ with $f = |f|(\cos\Phi,\sin\Phi)$, because a continuous map from a simply connected space into the circle (after normalising $f/|f|$) lifts through the covering $\mathbb{R}\to S^1$. Consequently the net change of the angle round **any** loop in $W$ is zero, since the angle is given there by the single-valued function $\Phi$.

**Step 2: cut the inside of $C$.** Let $D$ be the closed Jordan domain bounded by $C$. The fixed points inside are isolated, and $D$ is compact, so there are finitely many of them, $p_1,\dots,p_n$; if there were infinitely many they would accumulate, and an accumulation point of $Z$ in $D$ would be a non-isolated fixed point. Choose pairwise disjoint small circles $\sigma_k \subset \operatorname{int}D$ about the $p_k$, each enclosing only $p_k$, and pairwise disjoint simple arcs $\beta_1,\dots,\beta_n$ in $D$, meeting no fixed point, with $\beta_k$ running from a point of $C$ to a point of $\sigma_k$ and otherwise meeting neither $C$ nor any $\sigma_j$. Such arcs exist: by the **Schoenflies theorem**, already used in (I2), there is a homeomorphism of the plane carrying $D$ onto a closed round disc, and in that model one simply draws $n$ disjoint radial-looking arcs from the boundary circle to the $n$ small discs. This is the topological input that the balloon picture in Strogatz makes plausible.

**Step 3: the slit region is simply connected.** Let $D^\ast$ be $D$ with the open discs bounded by the $\sigma_k$ removed. It is compact and carries no fixed point, but it has $n$ holes; the slits are what remove them. Put

$$
S \;=\; \operatorname{int}(D^\ast) \setminus (\beta_1\cup\dots\cup\beta_n),
$$

an **open** subset of $U\setminus Z$. It is connected and simply connected: in the Schoenflies model of step 2 it is an open round disc with $n$ smaller closed discs and $n$ arcs joining them to the boundary deleted, and such a slit disc is homeomorphic to an open disc. (It is $S$, not $D^\ast$, that is simply connected: deleting the closed arcs from the compact $D^\ast$ leaves a set that is neither compact nor open, which is why the simply connected set is taken open from the start.) Step 1 therefore applies with $W = S$.

**Step 4: the boundary circuit.** Let $\Gamma$ be the closed loop that traverses the boundary of the slit region: $C$ once counterclockwise, broken at the $n$ points where the arcs meet it; each arc $\beta_k$ traversed inwards and later outwards; and each circle $\sigma_k$ traversed once **clockwise**. The loop $\Gamma$ does not lie in $S$, since it runs along the slits and along the deleted circles themselves. But for small $\eta > 0$ the parallel circuit $\Gamma_\eta$ that keeps the distance $\eta$ on the inside — just inside $C$, down one side of each slit, just outside each $\sigma_k$, back up the other side — does lie in $S$, and $\Gamma_\eta$ is homotopic to $\Gamma$ through loops in $D^\ast$, hence in $U\setminus Z$, by letting $\eta$ shrink to $0$. By step 1 the net change of the angle of $f$ along $\Gamma_\eta$ is $0$, and by the homotopy invariance proved in (I1) — which was proved for arbitrary continuous loops, and is used here for a loop that is far from simple — the net change along $\Gamma$ is $0$ as well.

**Step 5: cancel the bridges.** Each $\beta_k$ is traversed once in each direction, and the net change of a continuous angle along a path and along its reverse are negatives of one another, so these contributions cancel in pairs. What survives is the change along $C$, which is $2\pi I_C$, and the changes along the clockwise circles, which are $-2\pi I(p_k)$ by the definition of the index of a point. Hence
$$
0 \;=\; 2\pi I_C - 2\pi\sum_{k=1}^n I(p_k),
$$
which is (I5). Taking $n = 1$ shows in passing that $I_{\sigma}$ is the same for every small circle around a single isolated fixed point, so the index of a point is well defined, as claimed in the definition. $\square$
:::

:::proof[(I4) a closed orbit has index one]{provenance=adapted src="docarmo-2016:§4-5, Theorem of Turning Tangents, p. 270; docarmo-2016:§5-7, Thm 2 and its proof, pp. 402-403; strogatz-1994:§6.8, property 4, p. 178"}
Let $C$ be a closed orbit, the image of a nonconstant periodic solution $\varphi$, and let $T > 0$ be its **least period**, which exists by the definition block. The field $f$ is $C^1$, hence locally Lipschitz, so solutions of $\dot x = f(x)$ are unique: two solutions that agree at one time agree at every time of their common interval (:ref[Existence and uniqueness of solutions]{to=ode.existence-uniqueness}). It is used twice in the two paragraphs that follow.

**$C$ carries no fixed point, so it is regular.** If $\varphi(t_0)$ were a fixed point, the constant function $t \mapsto \varphi(t_0)$ would be a solution agreeing with $\varphi$ at $t_0$, so by uniqueness $\varphi$ would be constant, which it is not. Hence $\varphi'(t) = f(\varphi(t)) \neq 0$ for every $t$.

**$C$ is a simple closed curve.** It is enough that $\varphi$ be injective on $[0,T)$, for then $t \mapsto \varphi(Tt)$ maps $[0,1]$ onto $C$, is injective on $[0,1)$ and closes up, which is what a simple closed curve is. Suppose instead $\varphi(t_1) = \varphi(t_2)$ with $0 \le t_1 < t_2 < T$. The two functions $t \mapsto \varphi(t+t_1)$ and $t \mapsto \varphi(t+t_2)$ both solve $\dot x = f(x)$ and agree at $t = 0$, so by uniqueness they agree for every $t$; that says $t_2 - t_1$ is a period of $\varphi$, and $0 < t_2 - t_1 < T$ contradicts the minimality of $T$. **Minimality is what the argument needs and is used here**: for a non-minimal period $kT$ ($k \ge 2$) the solution restricted to an interval of that length is not injective, and the loop it traces runs $k$ times round $C$, so it is neither simple nor the once-round parametrisation that the definition of $I_C$ asks for.

For the parametrisation in the definition of $I_C$ take $\gamma(t) = \varphi(\varepsilon T t)$, $t\in[0,1]$, **with $T$ the least period**, so that $\gamma$ runs round $C$ exactly once, and with $\varepsilon = +1$ if the solution runs counterclockwise round $C$ and $\varepsilon = -1$ if it runs clockwise. Either way $\gamma$ traverses $C$ once counterclockwise, as the definition of $I_C$ asks; and unlike a general continuous parametrisation it is $C^1$ and regular, so its tangent may be differentiated and discussed.

1. *The field is a multiple of the tangent, of the sign $\varepsilon$.* By the chain rule $\gamma'(t) = \varepsilon T\,\varphi'(\varepsilon T t) = \varepsilon T\,f(\gamma(t))$, so

$$
f\circ\gamma \;=\; \frac{\varepsilon}{T}\,\gamma' ,
$$

a positive multiple of $\gamma'$ when $\varepsilon = +1$ and a negative one when $\varepsilon = -1$.
2. *Scaling and sign do not change the winding.* Multiplying a nonvanishing loop pointwise by a positive continuous function does not change its angle, hence not its winding number. So in the first case $I_C$ equals the winding number of $\gamma'$. In the second case $I_C$ is the winding number of $-\gamma'$, and that too equals the winding number of $\gamma'$: if $\psi$ is a continuous determination of the angle of $\gamma'$, then $\psi + \pi$ is one of the angle of $-\gamma'$, and the two have the same net change over the circuit because they differ by a constant. (This is the same one-line argument as in (I3), applied to the tangent loop rather than to the field of the system.)
3. *The turning of the tangent.* What is left is the winding number of $\gamma'$, the **rotation index** of $C$. The theorem of turning tangents says it is $\pm1$: do Carmo states it for piecewise regular plane curves (§4-5, p. 270) and attributes it to Hopf, and he proves the regular case, which is ours, as Theorem 2 of §5-7, p. 402.

4. *Which sign.* Both of do Carmo's statements say only $\pm1$, "depending on the orientation", without saying which orientation gives which sign, so that half-line has to be supplied. His proof of Theorem 2 supplies it. He takes a line $L$ touching the curve at a point $p = \gamma(t_0)$ with the whole curve on one side of $L$ — a support line, which exists because $C$ is compact — and reaches the value $+1$ in the case where turning $\gamma'(t_0)$ counterclockwise by $\pi$, rather than clockwise, sweeps it to $-\gamma'(t_0)$ across the half-plane holding the curve: that is, when the curve lies to the **left** of its tangent at $p$. For the counterclockwise traversal the inside of $C$ lies to the left of the tangent — that is what counterclockwise means for a simple closed curve — and near the support point the inside is on the same side of $L$ as the curve. So the sign is $+1$ for the counterclockwise traversal. The round circle is the check: for $\gamma(t) = (\cos 2\pi t, \sin 2\pi t)$ the tangent $\gamma'(t) = 2\pi(-\sin 2\pi t, \cos 2\pi t)$ has angle $2\pi t + \pi/2$, whose net change over the circuit is $+2\pi$, rotation index $+1$.

Hence $I_C = +1$. $\square$
:::

:::proof[(I6) the index of a nondegenerate fixed point]{provenance=original}
Let $f(p) = 0$ and $A = Df(p)$ with $\det A \neq 0$. Translate so that $p = 0$.

1. *Isolation.* Since $f$ is differentiable at $0$, $f(x) = Ax + \varepsilon(x)$ with $|\varepsilon(x)|/|x| \to 0$. With $m = \min_{|w|=1}|Aw| > 0$ (positive because $A$ is invertible and the unit circle is compact), $|Ax| \ge m|x|$, so $|f(x)| \ge (m - |\varepsilon(x)|/|x|)\,|x| > 0$ for $0 < |x| \le \rho$ and $\rho$ small. So $0$ is isolated and $I(0) = I_{C_\rho}$ for the circle $C_\rho$ of radius $\rho$.
2. *The linear part already decides.* On $C_\rho$ the homotopy $f_s(x) = Ax + s\,\varepsilon(x)$, $s \in [0,1]$, never vanishes, by the same estimate. By homotopy invariance of the winding number, $I(0)$ is the index of the **linear** field $x \mapsto Ax$ on $C_\rho$.
3. *Only the sign of the determinant survives.* The set of invertible $2\times2$ real matrices with positive determinant is path-connected: Gram-Schmidt applied to the columns of $A$ gives $A = QR$ with $Q$ a rotation and $R$ upper triangular with positive diagonal, and both factors are joined to the identity by paths staying invertible (rotate the angle to zero; move the diagonal entries to $1$ and the off-diagonal entry to $0$). Along such a path $A_s$ the fields $x \mapsto A_s x$ never vanish on $C_\rho$, so homotopy invariance of the winding number keeps the index constant, and every $A$ with $\det A > 0$ has the index of the identity. For the identity field $x\mapsto x$ the angle of the field equals the polar angle, which increases by $2\pi$, so that index is $+1$. If $\det A < 0$, the same argument joins $A$ to the reflection $\operatorname{diag}(1,-1)$, whose field $(x,-y)$ has angle $-\theta$ at the point of polar angle $\theta$, giving index $-1$.
4. *The elementary types.* For a planar matrix $\det A = \lambda_1\lambda_2$. A saddle has eigenvalues of opposite sign, so $\det A < 0$ and index $-1$. Nodes, stars and degenerate nodes have eigenvalues of one sign, and spirals and centres have conjugate eigenvalues $\alpha \pm i\beta$ with $\det A = \alpha^2+\beta^2 > 0$; in all these cases the index is $+1$. $\square$
:::

:::proof[Closed orbits enclose index one]{provenance=adapted src="strogatz-1994:§6.8, Thm 6.8.2, p. 180"}
Let $C$ be a closed orbit. By **(I4)**, $I_C = +1$. If the enclosed fixed points are isolated, there are finitely many of them, by step 2 of the additivity proof — **this is the step that uses isolation**, through the fact that an infinite subset of the compact Jordan domain would accumulate — and **(I5)** gives $\sum_k I(p_k) = I_C = +1$.

1. If no fixed point were enclosed, (I2) would give $I_C = 0$, contradicting $I_C = +1$. So at least one fixed point is enclosed, and this argument uses no isolation hypothesis.
2. A saddle is nondegenerate, hence isolated by **(I6)**; if it were the only enclosed fixed point the sum would be $-1$, not $+1$.
3. If a simply connected region contains no fixed point and a closed orbit $C$ lay in it, then the Jordan domain of $C$ would lie in that region as well, so $I_C$ would be $0$ by **(I2)**, contradicting **(I4)**. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$f \neq 0$ on $C$.** Without it the angle $\phi$ is undefined at some point of $C$ and $I_C$ does not exist. This is why an index is attached to a *curve avoiding the fixed points*, never to a curve through one.
- **$C$ simple.** Additivity, (I2) and (I4) all use the Jordan domain of $C$. A figure-eight has no inside in that sense, and the tangent of a figure-eight has winding number $0$, not $\pm1$, so (I4) fails for it outright.
- **Counterclockwise orientation.** The index changes sign with the orientation of $C$; the convention is fixed once and for all in the definition. In (I4) the orientation of $C$ as a *curve* is counterclockwise whatever direction the *orbit* runs, which is why step 2 of that proof needs (I3).
- **Isolated fixed points.** Additivity is a finite sum, and the finiteness came from isolation plus compactness. A field such as $\dot x = 0$, $\dot y = -y$, whose fixed points fill the whole $x$-axis, has no index at any of them: every small circle around a point of the axis meets the fixed-point set.
- **Nondegeneracy in (I6) only.** Degenerate fixed points have indices too, and they need not be $0$ or $\pm1$. The field $\dot x = x^2-y^2$, $\dot y = 2xy$, which is $z \mapsto z^2$ under $z = x+iy$, has a single fixed point at the origin of index $+2$; its mirror $\dot x = x^2-y^2$, $\dot y = -2xy$ has index $-2$. These are exactly the cases $\det Df(0) = 0$ that (I6) does not reach.
- **The index is not stability.** By (I3) a stable node and an unstable node have the same index $+1$, and so does a centre. Index theory constrains *which* fixed points a closed orbit can surround, never whether the orbit attracts.
:::

:::method[Computing an index]{provenance=original}
1. **By the integral.** Parametrise $C$ and evaluate
$$
I_C = \frac{1}{2\pi}\oint_C \frac{u\,\mathrm d v - v\,\mathrm d u}{u^2+v^2}.
$$
This is the method to use numerically; the answer must come out an integer, which is a built-in check on the quadrature.
2. **By counting turns.** Mark eight or so points round $C$, compute $f$ at each, redraw the arrows from a common origin in the order met, and count the net turns. Cheap, and enough when the field is simple.
3. **By the Jacobian.** At a fixed point with $\det Df(p) \neq 0$, use (I6): the index is $+1$ if $\det Df(p) > 0$ and $-1$ if $\det Df(p) < 0$. No integration at all.
4. **By the argument principle, when the field is analytic.** If $u + iv = F(z)$ with $z = x+iy$ and $F$ analytic, then $I_C$ is the number of zeros of $F$ inside $C$ counted with multiplicity, by :ref[the argument principle]{to=complex.argument-principle-rouche}. Anti-analytic fields, $u+iv = \overline{F(z)}$, give minus that count.
5. **To exclude closed orbits.** Compute the indices of all fixed points, then ask which subsets of them can have index sum $+1$ and be encircled by a single simple loop. If no subset can, there is no closed orbit. If some can, the test is inconclusive and a further argument is needed, for instance :ref[Dulac's criterion]{to=dyn.poincare-bendixson}.
:::

:::example[An analytic field: three indices and one exclusion]{provenance=original}
Take

$$
\dot x = x^2 - y^2 - 1, \qquad \dot y = 2xy .
$$

Under $z = x+iy$ this is $\dot z = z^2 - 1$, so the field is analytic.

**Fixed points.** $z^2 = 1$ gives $(1,0)$ and $(-1,0)$. The Jacobian is $\begin{pmatrix}2x & -2y\\ 2y & 2x\end{pmatrix}$, which is $2I$ at $(1,0)$ and $-2I$ at $(-1,0)$: an unstable star and a stable star. Both have $\det Df = 4x^2+4y^2 = 4 > 0$, so by **(I6)**

$$
I\bigl((1,0)\bigr) = I\bigl((-1,0)\bigr) = +1 .
$$

**The index of a big circle, three ways.** Let $C$ be the circle $|z| = 2$, counterclockwise.

- *By additivity.* Both fixed points lie inside, so $I_C = 1 + 1 = 2$ by **(I5)**.
- *By the argument principle.* $F(z) = z^2-1$ has two zeros inside $|z|=2$, counted with multiplicity, so $I_C = 2$. (Rouche settles the count at once: on $|z|=2$ we have $|{-1}| = 1 < 4 = |z^2|$, so $z^2-1$ has as many interior zeros as $z^2$ does, that is two.)
- *By the integral.* With $u = x^2-y^2-1$, $v = 2xy$ and $x = 2\cos t$, $y = 2\sin t$, numerical quadrature of $\oint_C (u\,\mathrm d v - v\,\mathrm d u)/(u^2+v^2)$ returns
$$
12.566370614\ldots \;=\; 4\pi , \qquad\text{so}\qquad I_C = \frac{4\pi}{2\pi} = \boxed{2}.
$$
The same quadrature on the circle of radius $\tfrac12$ about the origin, which encloses no fixed point, returns a value below $10^{-15}$ in absolute value — $6\times10^{-16}$ at the default tolerance and $2\times10^{-16}$ with the tolerance tightened to $10^{-14}$. The digits of such a number are pure cancellation and are not reproducible between runs or libraries; what is reproducible is that the result is zero to the accuracy of the double-precision adaptive quadrature used, whose own error estimate is $2\times10^{-14}$, as **(I2)** requires. On the circle of radius $\tfrac12$ about $(1,0)$ it returns $6.283185307179586$ and on the one about $(-1,0)$ it returns $6.283185307179588$: both are $2\pi = 6.283185307179586\ldots$ to within one unit in the last place, that is an index of $+1$ at each fixed point, as **(I6)** requires.

**What this excludes.** Suppose the system had a closed orbit $C'$. By the index theorem its enclosed fixed points have index sum $+1$. The available subsets are: none (sum $0$), $\{(1,0)\}$ (sum $1$), $\{(-1,0)\}$ (sum $1$), both (sum $2$). So **no closed orbit can encircle both fixed points**, and any closed orbit would have to surround exactly one of them. Index theory alone stops here; it has reduced an infinite search to two cases.
:::

:::example[A field with no fixed points]{provenance=original}
The system
$$
\dot x = 1 + x^2 + y^2 , \qquad \dot y = x - y
$$
has $\dot x \ge 1 > 0$ everywhere, so it has no fixed point in the plane. By consequence 3 of the index theorem it has **no closed orbit whatsoever** — no computation of any index was needed, only the observation that the sum over an empty set of fixed points is $0$ and not $1$.
:::

:::application[Topological defects, and why a sphere cannot be combed]{provenance=adapted src="docarmo-2016:§4-5, Poincare's theorem, p. 286"}
The index is the mathematics of **topological defects**, and the reason physicists meet it far from dynamical systems.

A superfluid, a thin superconducting film or a two-dimensional magnet in the $XY$ universality class is described by a complex order parameter $\psi = |\psi|e^{i\chi}$, or equivalently by the planar vector field $(\operatorname{Re}\psi, \operatorname{Im}\psi)$. A **vortex** is a point where $\psi = 0$ — a fixed point of the field — and its **charge** is precisely the index defined above: the number of turns $\chi$ makes round a small loop enclosing it. Three statements of this unit become three physical facts:

- *Charge is quantised and measurable from far away.* $I_C$ is an integer determined by the field on $C$ alone, which is why the circulation of a superfluid round any loop is an integer multiple of $h/m$ regardless of how the loop is drawn.
- *Charge is conserved under deformation.* By (I1) and (I5) the total charge inside a loop cannot change while the field evolves continuously and no defect crosses the loop. Vortices therefore cannot appear or disappear singly: they are created and annihilated in pairs of opposite index, which is exactly what is seen in vortex-antivortex annihilation and in the Berezinskii-Kosterlitz-Thouless picture of unbinding.
- *Curvature forces defects.* Do Carmo's theorem of Poincare adds up the indices over a compact surface: for a field that is **differentiable** and whose zeros are all isolated, the total comes to the Euler-Poincare characteristic of the surface. He draws the corollary that on a surface homeomorphic to a sphere, where that number is $2$, no differentiable tangent field is nowhere zero. So a spherical shell of ordered material must carry defects of total index $2$, and a differentiable wind field on the globe must have at least one calm point. This is the "hairy ball" statement. (It is also true for merely continuous tangent fields, but that does not follow from the quoted theorem without first approximating a continuous field by a differentiable one, which we do not do here.) It is the reason ordered phases on curved closed surfaces are never defect-free.

Two cautions. First, the theorem quoted is about *vector* fields; the director of a nematic liquid crystal is a line field, defined only up to sign, and its defects carry half-integer indices, so the bookkeeping is similar but the theorem above does not cover it as stated. Second, for the dynamical-systems use the point of (I4) is the opposite one: there the index is used not to count defects but to forbid oscillations, as in the worked examples.
:::
