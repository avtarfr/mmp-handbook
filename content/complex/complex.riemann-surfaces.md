---
id: complex.riemann-surfaces
title: Riemann surfaces
kind: definition
level: advanced
summary: The domain on which a multivalued function becomes an honest single-valued analytic function, built by stacking cut copies of the plane and gluing them across the cuts at the branch points, with the surfaces of $z^{1/n}$ and $\log z$ worked out and parametrised by a single variable.
prereqs: [complex.branch-points-cuts, complex.analytic-continuation, complex.elementary-functions, complex.singularities, complex.laurent-series, found.connectedness-homotopy, found.continuity-homeomorphism, found.topological-spaces]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 3, §4.3, Elementary Riemann Surfaces, pp. 97-99 (sheets and tags, the cyclic gluing for $w = z^n$, the endless screw for $w = e^z$, branch point and its order, fundamental region, the surface of $\\cos z$); Ch. 8, §1.3, p. 288 (the Riemann surface of a global analytic function as a component of the sheaf of germs); §1.4, Thm 1, p. 289, and the construction of the logarithm as a global analytic function, p. 290; §1.7, Branch Points, pp. 297-300 (continuation around a puncture, the integer $h$, the local uniformizing variable $t$ with $z - a = t^h$, and completing the surface with branch points); §1.1-1.2, pp. 284-286 (function elements, germs, and the sheaf with its topology and projection)"
    pages: "97-99, 284-290, 297-300"
    role: the descriptive sheet-and-gluing construction and its vocabulary; the surfaces of the power and the exponential; the germ definition of the surface and unique lifting of arcs; the local uniformizing variable and the fact that the completed surface is locally a disc
  - work: hassani-2013
    loc: "§12.2.1, Riemann Surfaces, pp. 366-368, with Figs. 12.2-12.4, the branches $f_n$ of $\\ln z$ on the plane cut along the negative reals, the gluing of the upper lip of one sheet to the lower lip of the next, and Examples 12.2.2-12.2.3 ($z^{1/n}$ and $(z^2-1)^{1/2}$)"
    pages: "366-368"
    role: the construction for $\\ln z$ from the jump of a branch across the cut; the sheet count for $z^{1/n}$ and the pasting of the last sheet to the first; the two-sheeted surface of $(z^2-1)^{1/2}$ and the behaviour of loops around one or both branch points
  - work: arfken-2013
    loc: "§11.6, Singularities, pp. 499-503, Examples 11.6.1-11.6.4"
    pages: "499-503"
    role: the convention for the order of a branch point used here, and the phase bookkeeping for $(z^2-1)^{1/2}$ on a loop enclosing both branch points, which Example 11.6.4 tabulates and finds single-valued, used as a cross-check in the worked example
---

:::note{provenance=original}
**What it means.** A multivalued "function" is not a function: $z^{1/2}$ offers two values at each $z \ne 0$, and $\log z$ offers infinitely many. :ref[Branch cuts]{to=complex.branch-points-cuts} deal with this by forbidding the paths that cause trouble, at the price of a barrier across which the chosen branch jumps. Riemann's idea is the opposite: keep every path and enlarge the domain instead.

Take as many copies of the cut plane as there are values, stack them, and glue the edge of each cut to the edge of the next in the order that continuation visits them. On the resulting surface each point carries not only a position $z$ but also a record of which value is in force there, so the function is genuinely single-valued, and genuinely analytic, with no jumps anywhere: the cut has been glued shut. The branch points are the hinges where the sheets meet, and they are the only places where the surface fails to look like an ordinary piece of plane.

The pay-off is that the awkward object becomes an ordinary one. For $z^{1/2}$ the whole surface turns out to be a single copy of the plane, coordinatised by $w$ with $z = w^{2}$; for $\log z$ it is again a plane, coordinatised by $w$ with $z = e^{w}$. In that coordinate there is nothing multivalued left to discuss.
:::

:::definition[Sheets, gluing, and the surface of a multivalued function]{provenance=adapted src="ahlfors-1979:Ch. 3, §4.3, pp. 97-98; hassani-2013:§12.2.1, pp. 366-367"}
Let $f$ be multivalued on a region, with its branch points located as in :ref[]{to=complex.branch-points-cuts}. The construction is descriptive; Ahlfors introduces it this way deliberately and warns that it is for illustration, not for use inside proofs.

- Choose cuts joining the branch points to each other or to $\infty$, so that on the cut plane the values of $f$ separate into single-valued analytic **branches**.
- Take one copy of the cut plane for each branch. These copies are the **sheets**. Points of different sheets may sit over the same $z$; they are distinguished by a label, so a point of the surface is a pair (position, label).
- Each cut has two edges, an upper and a lower. Glue the edges in the pattern dictated by continuation: if crossing the cut at a given place carries the branch labelled $j$ into the branch labelled $k$, attach that edge of sheet $j$ to the opposite edge of sheet $k$. For $\ln z$ with the cut on the negative reals, Hassani attaches sheet $n-1$ to sheet $n$ by identifying the cut's upper edge on the former with its lower edge on the latter.

The space obtained is the **Riemann surface** of $f$, and the map sending a point to its position $z$ is the **projection** $\pi$. The cuts are not features of the surface: a different choice of cuts gives the same surface, and the cuts are introduced only to describe it. In the plane the gluing cannot be carried out without self-intersection; the surface is the idealised object in which no such crossing occurs.

A point of the surface over a branch point is a **branch point of the surface**. Following Arfken, Weber and Harris and :ref[]{to=complex.branch-points-cuts}, we call it of **order** $h$ when $h$ circuits of it are needed to restore the starting value, so that $h$ sheets meet there; the order is infinite when no number of circuits restores it. When the multivalued $f$ inverts a single-valued map $F$, a region that $F$ carries one-to-one onto the whole plane with the cuts removed is a **fundamental region** of $F$, and the sheets stand in one-to-one correspondence with the fundamental regions.
:::

:::definition[The surface as a set of germs]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.1-1.2, pp. 284-286; ahlfors-1979:Ch. 8, §1.3, p. 288; ahlfors-1979:Ch. 8, §1.4, p. 289"}
The descriptive construction can be replaced by one that needs no cuts and no pictures. Recall from :ref[]{to=complex.analytic-continuation} that a **function element** is a pair $(g, \Omega)$ with $g$ analytic on a region $\Omega$, and that two elements are direct continuations of one another when they agree on a non-empty overlap. Two elements determine the same **germ** at a point $\zeta$ when they agree on some neighbourhood of $\zeta$.

Let $\mathcal{G}$ be the set of all germs of analytic functions at all points of the plane, topologised so that the germs coming from one function element $(g,\Omega)$, one at each point of $\Omega$, form a neighbourhood of each of them. The projection $\pi$ sends a germ at $\zeta$ to $\zeta$. A **global analytic function** is a connected component $\mathcal{G}_0$ of $\mathcal{G}$: by construction it consists of exactly the germs obtainable from any one of them by a chain of direct continuations. Ahlfors calls $\mathcal{G}_0$ the **Riemann surface** of that global analytic function, and the function itself is defined on $\mathcal{G}_0$ by sending each germ to the value of the corresponding power series at its own centre.

Two things are immediate from this definition and are what make it useful.

- $\pi$ is a local homeomorphism: restricted to the germs of one function element it is inverse to the map $\zeta\mapsto$ (germ at $\zeta$).
- Continuation of $f$ along an arc $\gamma$ in the plane is the same thing as a **lift** of $\gamma$: an arc $\tilde\gamma$ in $\mathcal{G}_0$ with $\pi\circ\tilde\gamma = \gamma$.

Branch points are not germs and so are not yet points of $\mathcal{G}_0$; they are added separately, as the next statement describes.
:::

:::statement[What the surface does]{provenance=adapted src="ahlfors-1979:Ch. 8, §1.4, Thm 1, p. 289; ahlfors-1979:Ch. 8, §1.7, Branch Points, pp. 297-300; ahlfors-1979:Ch. 3, §4.3, p. 98"}
Let $f$ be a global analytic function with Riemann surface $\mathcal{G}_0$ and projection $\pi$.

1. **Single-valuedness.** $f$ is a single-valued function on $\mathcal{G}_0$, and it is analytic there in the coordinate supplied by $\pi$ near any point that is not a branch point.
2. **Unique lifting.** Two continuations of $f$ along the same arc $\gamma$ either coincide at every parameter value or differ at every parameter value. A continuation is therefore determined by its initial germ.
3. **Local structure at a branch point.** Suppose $f$ can be continued along every arc of a punctured disc $0 < \lvert z - a\rvert < \rho$, and let $h$ be the least positive integer such that $h$ circuits of $a$ return the initial germ to itself, if such an integer exists. Then in the variable $t$ with $z - a = t^{h}$ there is a single-valued analytic $F$ on $0 < \lvert t\rvert < \rho^{1/h}$ with $F(t) = f(a + t^{h})$ in the sense of continuation, and $F$ has a Laurent expansion there. Ahlfors calls $t$ the **local uniformizing variable**. When that expansion has only finitely many negative powers and $h > 1$, the point is an **algebraic singularity**, $f$ tends to a definite limit (possibly $\infty$) as $z \to a$ along any arc, and the surface is completed by adding one branch point over $a$.
4. **It is a surface.** After the branch points have been added in this way, every point of the completed space -- branch points included -- has a neighbourhood homeomorphic to a disc. The disc coordinate at an ordinary point is $z$; at a branch point of order $h$ it is $t = (z-a)^{1/h}$.
:::

:::idea{provenance=original}
The whole construction rests on one observation: continuation along a path is unique once the starting value is chosen, so a point of the plane plus a choice of value is enough information to say what happens next. Declare such a pair to be a point, and the multivalued function becomes a map on the set of pairs. Everything else is checking that the set of pairs is a reasonable space.

It is reasonable because locally there is no ambiguity at all. Away from the branch points a small disc in the plane carries exactly one value of $f$ per sheet, so near each pair the set of pairs looks like a disc, and the projection to the plane is a homeomorphism there. Only at a branch point do the sheets touch, and there the fix is to change coordinate: if $h$ turns are needed to close up, then $t = (z-a)^{1/h}$ makes one turn in $t$ correspond to $h$ turns in $z$, and in $t$ the function is single-valued again. That is why the branch point, too, has a disc around it.

For the two basic examples one can do better than "looks locally like a disc". Solving $w^{2} = z$ for $z$ rather than for $w$ gives $z = w^{2}$, which is single-valued; so the set of pairs $(z,w)$ is nothing but the $w$-plane, and the two-valued $z^{1/2}$ has become the identity map $w \mapsto w$. The same trick on $e^{w} = z$ makes the surface of $\log$ the $w$-plane. Making a multivalued relation single-valued by parametrising it is what "uniformizing" means.
:::

:::proof[The surfaces of the power, the logarithm, and their gluing]{provenance=adapted src="ahlfors-1979:Ch. 3, §4.3, pp. 97-98, and Ch. 8, §1.4, p. 290; hassani-2013:§12.2.1, pp. 366-368"}
**Step 1: the surface of $z^{1/n}$, as a set of pairs.** Fix an integer $n \ge 2$ and set

$$
S_{n} \;=\; \bigl\{(z,w) \in \mathbb{C}^{2} \;:\; w^{n} = z \bigr\}, \qquad \pi(z,w) = z .
$$

The map $\Phi(w) = (w^{n}, w)$ sends $\mathbb{C}$ into $S_n$; it is injective because the second coordinate is recovered from the pair, and surjective because every point of $S_n$ is $(w^n,w)$ for its own $w$. Both $\Phi$ and its inverse $(z,w)\mapsto w$ are continuous, so $S_n$ is homeomorphic to the plane. On it the function "an $n$-th root of $z$" is the single-valued map $(z,w)\mapsto w$, which in the coordinate $w$ is the identity, hence analytic. This is item 1 of the statement, with the coordinate of item 3 made global: here $t = w$ and $z = t^{n}$ everywhere, not just near the branch point.

The projection is $n$-to-one over every $z \ne 0$, since $w^{n} = z$ has $n$ distinct roots there (:ref[]{to=complex.elementary-functions}), and one-to-one over $z = 0$. So over the finite plane $S_n$ has $n$ sheets and exactly one branch point, the point with $w = 0$. Over the extended plane there is a second: both Ahlfors (p. 98) and Hassani (Example 12.2.2) count $\infty$ as a branch point of $z^{1/n}$ as well, and it is of the same order, since the substitution $z \mapsto 1/z$ turns $z^{1/n}$ into $z^{-1/n}$, whose branch point at the origin again needs $n$ circuits.

**Step 2: the gluing, recovered.** Cut the $z$-plane along the positive reals and let $\theta = \arg z$ run over $0 < \theta < 2\pi$. The $n$ branches are

$$
f_k(z) = r^{1/n}\exp\!\left[i\,\frac{\theta + 2k\pi}{n}\right], \qquad k = 0, 1, \dots, n-1, \quad r = \lvert z\rvert ,
$$

each analytic on the cut plane, and they are exactly the $n$ values of $w$. (Example 12.2.2 of Hassani prints this exponent as $i(\theta + 2k\pi/n)$, with the $1/n$ dividing only the second term; as printed those are not $n$-th roots of $z$, and the sheet count and pasting given on the same page need the form above, so the printed exponent is a typesetting slip and not a disagreement with what follows.) Their images are the sectors $2k\pi/n < \arg w < 2(k+1)\pi/n$ of the $w$-plane, so each sector is a fundamental region and each branch is one sheet. Approaching the cut from below, $\theta \to 2\pi$, gives $f_k \to r^{1/n}e^{i(2\pi + 2k\pi)/n} = f_{k+1}(r)$ read from above, where $f_{k+1}$ means $f_0$ when $k = n-1$. The lower edge of sheet $k$ therefore joins the upper edge of sheet $k+1$, cyclically, the last to the first: Ahlfors's cyclic attachment and Hassani's pasting of the lower edge of $R_{n-1}$ to the upper edge of $R_0$. Going once round the origin advances $k$ by one, so $n$ circuits are needed to return: the branch point has order $n$ in the convention of :ref[]{to=complex.branch-points-cuts}.

**Step 3: the surface of $\log z$.** Set

$$
S_{\log} \;=\; \bigl\{(z,w) \in \mathbb{C}^{2} \;:\; e^{w} = z\bigr\},\qquad \pi(z,w) = z .
$$

As before $w \mapsto (e^{w}, w)$ is a homeomorphism of $\mathbb{C}$ onto $S_{\log}$, so this surface is also a plane, with $\log$ the single-valued map $(z,w)\mapsto w$. Two differences from Step 2 are worth naming. First, $e^{w}$ is never $0$, so there is no point of $S_{\log}$ over $z = 0$: the origin is missing from the surface, not a branch point of it. Second, $\pi$ is now infinitely many to one, since $e^{w} = e^{w + 2\pi i m}$ for every integer $m$, and no number of circuits of the origin returns the starting value. The sheets, in Hassani's description, are the horizontal strips $(2n-1)\pi < \operatorname{Im} w < (2n+1)\pi$, which correspond to the plane cut along the negative reals; continuing counterclockwise across the cut, from just above the negative reals to just below them, carries sheet $n-1$ into sheet $n$, so the sheets form Ahlfors's endless screw rather than a cycle.

**Step 4: these agree with the germ definition.** For the logarithm this is Ahlfors's argument on p. 290. All function elements $(g,\Omega)$ with $e^{g(\zeta)} = \zeta$ on $\Omega$ form a single global analytic function: take two of them and fix a point $\zeta_1$ in the first domain and $\zeta_2$ in the second. Since a logarithm is defined at each, neither is the origin, so some arc $\gamma : [0,1] \to \mathbb{C}\setminus\{0\}$ runs from $\zeta_1$ to $\zeta_2$. Put $\varphi(s) = g_1(\zeta_1) + \int_{0}^{s}\gamma'(u)/\gamma(u)\,du$. Then $e^{\varphi(s)} = \gamma(s)$ for every $s$: the quotient $\gamma e^{-\varphi}$ is constant, since its derivative vanishes identically, and it takes the value $1$ at $s = 0$. Consequently the germs of $\varphi$ along $\gamma$ continue the first element to a germ over the second point, and the two differ at most by a multiple of $2\pi i$, which is removed by continuing further around the origin the right number of times. Hence the germs of $\log$ form one connected component of $\mathcal{G}$, and sending a germ at $\zeta$ to the pair $(\zeta, w)$, where $w$ is its value at $\zeta$, identifies that component with $S_{\log}$: the germ determines the pair, and the pair determines the germ, because the branch of $\log$ near $\zeta$ taking a prescribed value at $\zeta$ is unique. The same argument with $g(\zeta)^{n} = \zeta$ identifies the germs of $z^{1/n}$ with $S_{n}$ minus its branch point, which Step 1's completion restores.

**Step 5: the lift of a loop, and why it detects the branch point.** Let $\gamma(s) = \rho e^{is}$, $0 \le s \le 2\pi$. In $S_n$ the lifts of $\gamma$ are the arcs $s\mapsto(\rho e^{is}, \rho^{1/n}e^{i(s + 2k\pi)/n})$, since these satisfy $w^{n} = z$ and project correctly, and by item 2 of the statement there are no others once the initial point is fixed. The lift starting at $w = \rho^{1/n}$ ends at $\rho^{1/n}e^{2\pi i/n} \ne \rho^{1/n}$ for $n \ge 2$: the loop does not close on the surface, which is the precise sense in which the sheet has changed. In $S_{\log}$ the lift starting at $w = \ln\rho$ ends at $\ln\rho + 2\pi i$, and iterating never returns. $\square$
:::

:::remark[Where the hypotheses are used, and two conventions]{provenance=original}
- **Item 3 needs continuation along *every* arc of the punctured disc.** The integer $h$ is defined by following the germ around the puncture; if continuation fails along some arc -- if, say, there is a second branch point inside the disc, or a natural boundary -- there is no single $h$ and no local uniformizing variable. This is why the first step of any construction is to find all the branch points, $\infty$ included, and then work on discs small enough to isolate one of them.
- **Item 3 also needs the least $h$ to exist.** For $\log z$ it does not: no number of circuits restores the value, the branch point has infinite order, and the substitution $z = t^{h}$ is unavailable. The surface still exists -- Step 3 built it -- but it has no point over the origin, and the origin is a **logarithmic** branch point rather than an algebraic one.
- **The cuts are scaffolding.** Nothing in the germ definition mentions them, and Ahlfors states explicitly (p. 98) that the cut may be replaced by any simple arc from the branch point to $\infty$ without changing the surface. What the cuts do is make the sheets visible. A consequence worth keeping: a statement about "the jump across the cut" is a statement about a chosen branch, not about the surface.
- **A branch point need not join all the sheets.** Ahlfors's convention is that a point joining $h$ sheets has order $h - 1$; Arfken, Weber and Harris count instead the circuits needed to restore the value, which for $z^{1/2}$ gives $2$ where Ahlfors gives $1$. The two differ by one throughout. We follow Arfken, Weber and Harris here, as :ref[]{to=complex.branch-points-cuts} does, and the worked example below says which number is meant each time it is used.
- **Single-valuedness is bought, not free.** The surface makes $f$ single-valued by enlarging the domain, so a formula valid on the surface says nothing by itself about which value to use at a given $z$ in the plane. Picking a value is picking a sheet, and that is exactly what a branch and its cut do.
:::

:::method[Constructing the surface of a given multivalued function]{provenance=original}
1. **Find the branch points**, including the point at infinity, by the loop test of :ref[]{to=complex.branch-points-cuts}. For a function built from factors, test a small loop around each candidate and record how each factor's argument changes.
2. **Find the order of each.** Continue once around; count how many circuits restore the starting value. A finite count $h$ means $h$ sheets meet there; no count means a logarithmic branch point of infinite order.
3. **Test loops around groups of branch points.** A loop enclosing several may return to the starting sheet even though each individual loop does not; this decides whether a cut may be run between two finite branch points instead of out to infinity, and whether $\infty$ is a branch point.
4. **Choose cuts** so that the complement is simply connected, or at least carries no loop around a single unmatched branch point, and list the branches on the cut plane.
5. **Glue.** For each edge of each cut, continue a branch across it and read off which branch it becomes; attach that edge to the opposite edge of the corresponding sheet.
6. **Check the count.** The number of sheets must equal the number of values of $f$ at a generic point, and the cyclic order of the gluing at a branch point of order $h$ must close after $h$ steps.
7. **Look for a global parameter.** If the defining relation can be solved for $z$ in terms of the value, as in $z = w^{n}$ or $z = e^{w}$, that solution parametrises the whole surface and ends the problem.
:::

:::example[The two-sheeted surface of $(z^{2}-1)^{1/2}$, with continuations checked]{provenance=adapted src="hassani-2013:§12.2.1, Example 12.2.3, p. 368; arfken-2013:§11.6, Example 11.6.4, pp. 502-503"}
Let $f(z) = (z^{2}-1)^{1/2} = (z-1)^{1/2}(z+1)^{1/2}$. Write $z - 1 = r_{1}e^{i\theta_{1}}$ and $z+1 = r_{2}e^{i\theta_{2}}$, so that one value of $f$ is $\sqrt{r_{1}r_{2}}\,e^{i(\theta_{1}+\theta_{2})/2}$ and the other is its negative.

**Branch points.** A loop around $z = 1$ alone sends $\theta_{1}\mapsto\theta_{1}+2\pi$ and returns $\theta_{2}$, so $f \mapsto f e^{i\pi} = -f$: $z = 1$ is a branch point, and a second circuit restores $f$, so its order is $2$. The same holds at $z = -1$. At $\infty$: a loop enclosing both sends $\theta_{1}+\theta_{2}\mapsto \theta_{1}+\theta_{2}+4\pi$, so $f\mapsto fe^{2\pi i} = f$. Hence $\infty$ is **not** a branch point, and the cut may be taken as the finite segment $[-1,1]$. Two values at a generic point means two sheets, joined along that segment, each sheet being a copy of $\mathbb{C}\setminus[-1,1]$.

**Numerical check of the gluing.** Take the circle $\lvert z - 1\rvert = 3/2$, which starts and ends at $z = 5/2$ and encloses $z=1$ but not $z=-1$ (the distance from the centre to $-1$ is $2 > 3/2$). Start from the value

$$
f(5/2) \;=\; \sqrt{(5/2)^{2}-1} \;=\; \sqrt{5.25} \;=\; 2.2912878475 .
$$

Following the circle in $4\times10^{5}$ steps and choosing at each step whichever square root is nearer the previous value -- which is continuation, by uniqueness of the lift -- the value on return is

$$
-2.2912878475 \quad (\text{imaginary part } 4\times10^{-16}),
$$

the other sheet. A second circuit brings it back. Repeating on the circle $\lvert z\rvert = 3$, which encloses both branch points, starting from $f(3) = \sqrt{8} = 2.8284271247$, the value on return is $2.8284271247$ to ten digits: the loop closes on the surface, confirming that $\infty$ is not a branch point.

**The surface named.** Solve for $z$: the surface is $\{(z,w) : w^{2} = z^{2}-1\}$, and setting $z = \cosh\tau$, $w = \sinh\tau$ satisfies the relation identically. The map $\tau\mapsto(\cosh\tau,\sinh\tau)$ is onto the surface and identifies points differing by $2\pi i$, so the surface is the cylinder $\mathbb{C}/2\pi i\mathbb{Z}$ -- equivalently, via $u = e^{\tau}$, the punctured plane. That is a uniformization in the sense of the Idea: on the $\tau$-cylinder both $z$ and $w$ are single-valued analytic functions, and the relation $w^{2} = z^{2}-1$ holds with no choice of branch to make. The two sheets are the two halves $\operatorname{Re}\tau > 0$ and $\operatorname{Re}\tau< 0$, and the segment $[-1,1]$ is the image of the line $\operatorname{Re}\tau = 0$, which is where they meet.

**The logarithm, for contrast.** On $S_{\log}$ start at the point over $z = 1$ with $w = 0$, wind twice counterclockwise around the origin, and finish along a path ending at $z = -2$ with a further half turn. The lift has $w = \ln\lvert z\rvert + i\arg z$ with $\arg z$ tracked continuously, so the total argument gained is $2\cdot2\pi + \pi = 5\pi$ and the value is

$$
w \;=\; \ln 2 + 5\pi i \;=\; 0.6931471806 + 15.7079632679\,i .
$$

Running the same path with one loop instead of two gains $2\pi + \pi = 3\pi$ and gives $\ln 2 + 3\pi i = 0.6931471806 + 9.4247779608\,i$; omitting the loops altogether and going straight to $z = -2$ gains only $\pi$ and gives $\ln 2 + \pi i$. On the surface these are three different points over the same $z = -2$, and no number of further loops ever identifies them.
:::

:::application[Where the sheets matter]{provenance=original}
- **Resonances live on the second sheet.** A scattering amplitude as a function of complex energy has a square-root branch point at each two-body threshold, because the channel momentum is $k = (2\mu(E - E_{\text{th}}))^{1/2}$. The surface is two-sheeted at a single threshold, and a resonance is a pole not on the physical sheet -- where it would violate causality -- but on the second sheet, reached by passing through the cut above the threshold. The pole position $E_{0} - i\Gamma/2$ there gives the mass and width. Which sheet a pole sits on is not a technicality: it is the difference between a bound state and a decaying one.
- **Radiation conditions in wave problems.** In a waveguide, a stratified medium, or a plasma, the longitudinal wavenumber $k_{z} = (k^{2}-k_{\perp}^{2})^{1/2}$ is two-valued, and the two sheets are "outgoing" and "incoming", or "decaying" and "growing", in the evanescent range. Imposing a radiation condition is choosing the sheet, and a numerical code that lets $k_z$ wander across the cut silently switches to the unphysical solution.
- **Periods and the pendulum.** When $w^{2}$ equals a cubic or quartic in $z$ with distinct roots, the surface, once completed at infinity, is a torus rather than a plane, and the two independent loops on it carry two independent periods. The exact pendulum qualifies: energy conservation makes its angular velocity the square root of a trigonometric polynomial in the angle, which a half-angle substitution turns into such a curve, and the Jacobi elliptic functions are the uniformizing parameter. One of the two periods is then the period of the oscillation.
- **Analytic continuation of transforms and Green's functions.** Continuing a response function or a Feynman integral past its cut, to look for poles or to deform a contour, is motion on a Riemann surface, and the sheets record which thresholds have been crossed. :ref[Dispersion relations]{to=complex.dispersion-relations} are statements on the physical sheet; the singularity structure on the others is what controls the long-time or short-distance behaviour.
- **Conformal mapping of cut domains.** A flow or potential problem on a slit domain is often solved by mapping the slit plane to a half-plane with a square root (:ref[]{to=complex.conformal-mappings}); the two sheets of that square root are the two sides of the slit, so the Riemann-surface picture says exactly which physical region each part of the image represents.
:::
