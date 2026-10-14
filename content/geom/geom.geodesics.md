---
id: geom.geodesics
title: Geodesics
kind: method
level: core
summary: Gives the two equivalent ways of producing the geodesics of a metric — as the curves whose tangent field is parallel along them, and as the critical points of the length (equivalently the energy) functional — derives the geodesic equation $\ddot u^i + \Gamma^i{}_{jk}\dot u^j\dot u^k = 0$ by both routes, and runs the recipe on the sphere, where it returns the great circles and the shortest flight path between two points.
prereqs: [geom.covariant-derivative, var.euler-lagrange-equation, geom.first-fundamental-form, geom.metric-tensor, geom.surface-curvature, geom.frenet-serret, geom.theorema-egregium, ode.existence-uniqueness]
provenance: adapted
sources:
  - work: docarmo-2016
    loc: "§4-4, pp. 247–261: Definition 8 and Definition 8a of a (parametrized) geodesic as a curve with parallel tangent field, p. 247–249; the constancy of $|\\gamma'|$ and the proportionality of the parameter to arc length, p. 248; the external characterisation through the principal normal, p. 249; the great circles of the sphere, Example 3, p. 249, and the geodesics of the cylinder, Example 4, pp. 249–250; Definitions 9 and 10 of the algebraic value of the covariant derivative and of the geodesic curvature, p. 251, with $k^2 = k_g^2 + k_n^2$ and the parallel of a unit sphere, pp. 251–252; the differential equations (4) of the geodesics, p. 257; Proposition 5 (existence and uniqueness for a given point and direction), p. 257; Example 5 on surfaces of revolution and Clairaut's relation, pp. 258–260. §4-6, Proposition 4, pp. 296–297: a geodesic minimises arc length among nearby curves joining the same two points"
    pages: "247-261, 296-297"
    role: the definition of a geodesic, the surface form of the geodesic equations, existence and uniqueness, Clairaut's relation, and the local minimising property
  - work: rhb-2006
    loc: "§26.22, pp. 976–977: the two defining properties of a straight line; the choice of $d\\mathbf{t}/ds = 0$ with $\\mathbf{t} = d\\mathbf{r}/ds$ as the defining property; the absolute derivative along the curve and the resulting geodesic equation (26.101); the worked cylindrical-polar example"
    pages: "976-977"
    role: the derivation of the geodesic equation in an arbitrary coordinate system from the vanishing absolute derivative of the unit tangent, and the cylindrical-polar check
  - work: arfken-2013
    loc: "Ch. 22: Example 22.1.1, p. 1086 (the straight line as the extremal of arc length) and the remark on Fig. 22.2, p. 1085 (both great-circle arcs between two points of a sphere satisfy the Euler equation); §22.2, 'Geodesics', pp. 1103–1104: $ds^2 = g_{ij}dq^idq^j$ (22.54), the length functional (22.55), the replacement of the length by the action (22.56)–(22.57), the Euler equations (22.58) and their reduction (22.59)–(22.61) to the geodesic equation (22.62)"
    pages: "1085-1086, 1103-1104"
    role: the variational derivation of the geodesic equation from the energy functional, and the warning that a solution of the Euler equation need not be a minimum
  - work: gelfand-fomin-1963
    loc: "§9, pp. 34–38: the fixed-endpoint problem for $n$ unknown functions and its system of Euler equations (3), pp. 34–35; Example 2, p. 38, the Euler equations for the arc-length functional $\\int\\sqrt{Eu'^2 + 2Fu'v' + Gv'^2}\\,dt$ on a surface, and their solution for the circular cylinder, giving the helices"
    pages: "34-38"
    role: the length functional on a surface written out in $E, F, G$, the system of Euler equations for several unknown functions, and the cylinder as a solved case
---

:::definition[Geodesic, geodesic curvature]{provenance=adapted src="docarmo-2016:§4-4, Defs. 8, 8a, 9 and 10 and the discussion on pp. 247–252"}
Let $S$ be a regular surface (:ref[regular surfaces and the first fundamental form]{to=geom.first-fundamental-form}) and let $D/dt$ be the covariant derivative along a curve, that is, the tangential part of the ordinary derivative in $\mathbb{R}^3$ (:ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}).

- A nonconstant parametrized curve $\gamma : I \to S$ is **geodesic at $t$** if its own tangent field is parallel there,
  $$
  \frac{D\gamma'}{dt}(t) = 0 ,
  $$
  and is a **parametrized geodesic** if this holds for every $t \in I$. Constant curves are excluded by convention.
- Parallel transport preserves inner products, so $\lvert\gamma'(t)\rvert$ is a nonzero constant $c$ along a parametrized geodesic. Hence $s = ct$ is an arc length parameter: **a geodesic runs at constant speed, so its parameter differs from arc length only by a constant factor**. A geodesic is therefore automatically a regular curve, though it may cross itself.
- A regular connected curve $C \subseteq S$ is a **geodesic** if, near each of its points, its parametrization by arc length is a parametrized geodesic. Seen from outside the surface this says that $\alpha''(s)$ is normal to the tangent plane: *a regular curve of $S$ with nowhere-vanishing curvature $k$ is a geodesic exactly when its principal normal $\mathbf{n}$ (:ref[the Frenet–Serret formulas]{to=geom.frenet-serret}) is parallel to the surface normal at every point.* Every straight line lying in $S$ is a geodesic as well, and is the case the principal-normal criterion cannot see, $\mathbf{n}$ being undefined where $k = 0$.
- On an **oriented** surface, a unit field $w$ along $\alpha$ has $Dw/dt$ perpendicular to $w$ and tangent to $S$, hence $Dw/dt = \lambda\,(N \wedge w)$ for a scalar $\lambda$. That scalar is the **algebraic value** of $Dw/dt$, written $[Dw/dt]$. For an oriented regular curve $C$ parametrized by arc length, the **geodesic curvature** is
  $$
  k_g = \left[\frac{D\alpha'}{ds}\right] ,
  $$
  so that the regular geodesics are precisely the curves with $k_g \equiv 0$. Splitting $\alpha'' = k\mathbf{n}$ into its tangential and normal parts gives, where $k \neq 0$,
  $$
  k^2 = k_g^2 + k_n^2 ,
  $$
  with $k_n$ the normal curvature of :ref[the second fundamental form and curvature]{to=geom.surface-curvature}. Unlike the geodesic condition itself, the *sign* of $k_g$ depends on the orientations chosen for $C$ and for $S$.
:::

:::statement[The geodesic equations, and what they produce]{provenance=adapted src="docarmo-2016:§4-4, Eq. (4) and Prop. 5, p. 257, and §4-6, Prop. 4, pp. 296–297; rhb-2006:§26.22, Eq. (26.101), p. 977; arfken-2013:§22.2, Eqs. (22.55)–(22.62), pp. 1103–1104; gelfand-fomin-1963:§9, Eq. (3), p. 35 and Example 2, p. 38"}
1. **(In a surface chart.)** Let $\mathbf{x}(u,v)$ parametrize a neighbourhood of a point of $S$ and let a curve be given there by $t \mapsto \mathbf{x}(u(t), v(t))$. The curve is a parametrized geodesic if and only if
   $$
   \begin{aligned}
   u'' + \Gamma^1_{11}(u')^2 + 2\,\Gamma^1_{12}\,u'v' + \Gamma^1_{22}(v')^2 &= 0, \\
   v'' + \Gamma^2_{11}(u')^2 + 2\,\Gamma^2_{12}\,u'v' + \Gamma^2_{22}(v')^2 &= 0,
   \end{aligned}
   $$
   with $1 \leftrightarrow u$, $2 \leftrightarrow v$ and the $\Gamma^k_{ij}$ the Christoffel symbols of the chart. These are do Carmo's *differential equations of the geodesics*.
2. **(In any coordinates, any dimension.)** Let $\mathbf{T} = d\mathbf{r}/ds$ be the unit tangent of a curve $u^i(s)$ parametrized by arc length (Riley, Hobson and Bence write it $\mathbf{t}$). The condition $d\mathbf{T}/ds = 0$ is
   $$
   \frac{d^2u^i}{ds^2} + \Gamma^i{}_{jk}\,\frac{du^j}{ds}\,\frac{du^k}{ds} = 0 ,
   $$
   summation implied. Riley, Hobson and Bence derive this for a straight line of Euclidean three-space written in an arbitrary coordinate system, and observe that the derivation carries over with little change to spaces where Euclidean geometry fails; Arfken, Weber and Harris obtain the same equation for a general metric $g_{ij}$.
3. **(As extremals.)** The length of a curve on $S$ is
   $$
   L[u,v] = \int_{t_0}^{t_1}\sqrt{E(u')^2 + 2Fu'v' + G(v')^2}\;dt ,
   $$
   and its Euler equations are the pair written out by Gelfand and Fomin. Arfken, Weber and Harris avoid the square root: a path that extremizes the **energy**
   $$
   \mathcal{E}[q] = \int_{A}^{B} g_{ij}\,\dot q^i \dot q^j \,du
   $$
   satisfies, through the Euler equations for $n$ unknown functions, exactly the geodesic equation of part 2 with $s$ replaced by $u$. A parameter admissible here is one related to arc length by $u = as+b$.
4. **(Existence and uniqueness.)** Given $p \in S$ and $w \in T_pS$ with $w \ne 0$, there are an $\varepsilon > 0$ and a *unique* parametrized geodesic $\gamma : (-\varepsilon,\varepsilon) \to S$ with $\gamma(0) = p$ and $\gamma'(0) = w$.
5. **(Local minimisation.)** Each $p \in S$ has a neighbourhood $W$ with this property: if $\gamma$ is a parametrized geodesic lying in $W$ with $\gamma(0) = p$ and $\gamma(t_1) = q$, and $\alpha$ is any regular curve in $S$ joining $p$ to $q$, then $l_\gamma \le l_\alpha$, and equality forces the two traces to coincide. **The restriction to $W$ is essential.** Two points of a sphere are joined by two arcs of a great circle, both of them geodesics, and only the shorter one is the shortest path; Arfken, Weber and Harris nonetheless call the longer arc a geodesic as well, because their definition demands only that no slight deformation of a path shorten it.
:::

:::idea{provenance=original}
Two descriptions of a straight line survive the loss of flatness, and they turn out to give the same curves. "The tangent never turns" becomes "the tangent field is parallel along the curve", and since parallel transport is the covariant derivative set to zero, writing $\gamma' = u'\mathbf{x}_u + v'\mathbf{x}_v$ and demanding $D\gamma'/dt = 0$ produces a second-order system whose only non-trivial coefficients are the Christoffel symbols. "The path is the shortest one" becomes a variational problem; the length integrand carries an awkward square root, which disappears if one extremizes the energy instead, and the Euler equations of the energy are the very same system. The two routes meet because the energy's Euler equations force the speed to be constant, and at constant speed the length and energy problems have identical extremals.
:::

:::proof{provenance=adapted src="docarmo-2016:§4-4, pp. 256–257; rhb-2006:§26.22, pp. 976–977; arfken-2013:§22.2, Eqs. (22.57)–(22.62), pp. 1103–1104"}
**Part 1: from parallelism.** Let $w = a(t)\,\mathbf{x}_u + b(t)\,\mathbf{x}_v$ be a tangent field along $t \mapsto \mathbf{x}(u(t),v(t))$. Differentiating in $\mathbb{R}^3$ and using the chain rule,
$$
\frac{dw}{dt} = a'\mathbf{x}_u + b'\mathbf{x}_v + a\bigl(\mathbf{x}_{uu}u' + \mathbf{x}_{uv}v'\bigr) + b\bigl(\mathbf{x}_{uv}u' + \mathbf{x}_{vv}v'\bigr).
$$
The covariant derivative is the tangential part, so we expand the second derivatives in the frame $\{\mathbf{x}_u,\mathbf{x}_v,N\}$ as in :ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium} and discard every $N$ term; what is left of $\mathbf{x}_{uu}$ is $\Gamma^1_{11}\mathbf{x}_u + \Gamma^2_{11}\mathbf{x}_v$, and similarly for the others. Collecting the $\mathbf{x}_u$ and $\mathbf{x}_v$ coefficients,
$$
\frac{Dw}{dt} = \Bigl[a' + \Gamma^1_{11}au' + \Gamma^1_{12}(av' + bu') + \Gamma^1_{22}bv'\Bigr]\mathbf{x}_u
+ \Bigl[b' + \Gamma^2_{11}au' + \Gamma^2_{12}(av' + bu') + \Gamma^2_{22}bv'\Bigr]\mathbf{x}_v ,
$$
where the symmetry $\Gamma^k_{12} = \Gamma^k_{21}$ was used to merge the two mixed terms. Now take for $w$ the tangent field of the curve itself, $a = u'$ and $b = v'$. Since $\mathbf{x}_u, \mathbf{x}_v$ are linearly independent, $D\gamma'/dt = 0$ forces each bracket to vanish separately, and the mixed terms combine into $2\Gamma^k_{12}u'v'$. That is the system of part 1.

**Part 2: the same in any coordinates.** Parametrize by arc length and set $\mathbf{T} = d\mathbf{r}/ds = T^i e_i$, so that $T^j = du^j/ds$. Requiring the tangent to point always in the same direction means $d\mathbf{T}/ds = 0$; this derivative is the absolute derivative of $\mathbf{T}$ along the curve, whose components are $T^i{}_{;k}\,du^k/ds$ (:ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}). Writing the covariant derivative out,
$$
\left(\frac{dT^i}{ds} + \Gamma^i{}_{jk}\,T^j\,\frac{du^k}{ds}\right)e_i = 0 ,
$$
and substituting $T^j = du^j/ds$ gives the geodesic equation of part 2. In the flat space of Riley, Hobson and Bence the curves so produced are the straight lines, which supplies a check: in cylindrical polars the only nonvanishing symbols are $\Gamma^1{}_{22} = -\rho$ and $\Gamma^2{}_{12} = \Gamma^2{}_{21} = 1/\rho$, and the three equations read $\ddot\rho - \rho\dot\phi^2 = 0$, $\ddot\phi + (2/\rho)\dot\rho\dot\phi = 0$, $\ddot z = 0$ — the familiar radial and angular equations of a free particle.

**Part 3: from the energy.** Put $2T = g_{ij}\dot q^i\dot q^j$ with $\dot q^i = dq^i/du$, and apply to $\mathcal{E}$ the Euler equations for several unknown functions. For each index $l$,
$$
\frac{\partial}{\partial q^l}\bigl(g_{ij}\dot q^i\dot q^j\bigr) - \frac{d}{du}\frac{\partial}{\partial \dot q^l}\bigl(g_{ij}\dot q^i\dot q^j\bigr) = 0 .
$$
The metric depends on the $q^k$ but not on the $\dot q^k$, so the first term is $(\partial_l g_{ij})\dot q^i\dot q^j$, while the second differentiates $g_{lj}\dot q^j + g_{il}\dot q^i = 2g_{lj}\dot q^j$. Expanding $d(g_{lj})/du = (\partial_i g_{lj})\dot q^i$,
$$
(\partial_l g_{ij})\,\dot q^i\dot q^j - 2(\partial_i g_{lj})\,\dot q^i\dot q^j - 2 g_{lj}\,\ddot q^j = 0 .
$$
Divide by $2$, multiply through by $-1$, and rename the dummy indices in the middle term so that it is symmetric in $i$ and $j$, which is legitimate because it is contracted with the symmetric $\dot q^i\dot q^j$; this turns $-(\partial_i g_{lj})\dot q^i\dot q^j$ into $-\tfrac12(\partial_i g_{lj} + \partial_j g_{li})\dot q^i\dot q^j$. Hence
$$
g_{lj}\ddot q^j + \tfrac12\bigl(\partial_i g_{lj} + \partial_j g_{li} - \partial_l g_{ij}\bigr)\dot q^i\dot q^j = 0 .
$$
Multiply by the inverse metric $g^{ml}$ and use $g^{ml}g_{lj} = \delta^m_j$ together with the metric formula for the Christoffel symbols (:ref[Christoffel symbols and the covariant derivative]{to=geom.covariant-derivative}):
$$
\ddot q^m + \Gamma^m{}_{ij}\,\dot q^i\dot q^j = 0 ,
$$
which is the geodesic equation again.

**Part 4: why dropping the square root is legitimate.** Write $F = \sqrt{2T}$, the length integrand, and suppose $F$ never vanishes. Then
$$
\frac{\partial F}{\partial \dot q^l} = \frac{g_{lj}\dot q^j}{F}, \qquad \frac{\partial F}{\partial q^l} = \frac{(\partial_l g_{ij})\dot q^i\dot q^j}{2F},
$$
so the Euler equation for $F$, multiplied through by $F$, is
$$
\frac{d}{du}\bigl(g_{lj}\dot q^j\bigr) - \tfrac12(\partial_l g_{ij})\dot q^i\dot q^j \;=\; \frac{1}{F}\frac{dF}{du}\;g_{lj}\dot q^j .
$$
The left-hand side is $-\tfrac12$ times the Euler expression for the energy obtained in part 3, so it vanishes exactly when the energy equation holds. So the two variational problems have the same equations precisely when $dF/du = 0$, that is, when the parameter runs at constant speed. That condition is not an extra assumption on the energy side: contracting the energy equation $2\,d(g_{lj}\dot q^j)/du = (\partial_l g_{ij})\dot q^i\dot q^j$ with $\dot q^l$ gives $2\,g_{lj}\dot q^l\ddot q^j = -\,(\partial_k g_{lj})\dot q^k\dot q^l\dot q^j$, and substituting this into
$$
\frac{d}{du}\bigl(g_{ij}\dot q^i\dot q^j\bigr) = (\partial_k g_{ij})\dot q^k\dot q^i\dot q^j + 2 g_{ij}\dot q^i \ddot q^j
$$
makes the right-hand side vanish identically. An extremal of the energy therefore has constant speed of its own accord, and is an extremal of the length; conversely a length extremal reparametrized proportionally to arc length solves the energy equations. This is why Arfken, Weber and Harris may replace the minimisation of $J$ by that of the action without changing the geodesics.

**Statement parts 4 and 5.** The geodesic equations are a system of two (in general $n$) second-order ordinary differential equations whose right-hand sides are smooth functions of $(u,v,u',v')$ on the chart, so the existence and uniqueness theorem for such systems (:ref[existence and uniqueness]{to=ode.existence-uniqueness}) gives a unique local solution for each initial position and initial velocity, which is do Carmo's Proposition 5; the exclusion of $w = 0$ matches the exclusion of constant curves from the definition. The local minimising property is do Carmo's Proposition 4, proved there with geodesic polar coordinates, and we take it as stated. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Nonconstant curve, $w \ne 0$.** A constant curve satisfies $D\gamma'/dt = 0$ trivially and would wreck the uniqueness statement, since infinitely many parametrizations of a point would qualify; this is why the definition excludes it and why part 4 of the statement asks for $w \ne 0$.
- **Constant speed.** Part 1 of the definition gives it for free from the parallelism condition; the energy functional imposes it, as part 4 of the proof shows. It is a genuine restriction: the *trace* of a geodesic traversed with a varying speed is no longer a solution of the geodesic equation, although it is still a length extremal. Any statement that "geodesics are the critical points of length" is a statement about traces, not about parametrized curves.
- **$F \ne 0$ in part 4 of the proof.** The division by $F$ fails exactly at a stationary point of the parametrization. This is the degeneracy of the length functional: it is invariant under reparametrization, so its Euler equations can never determine the parameter, and one equation of the system is redundant.
- **Charts.** The equations of part 1 hold on one coordinate neighbourhood at a time. A geodesic that leaves the chart is continued by solving the equations of the next chart with matching initial data; nothing in the local theory guarantees that a geodesic can be continued for all time, and on an incomplete surface (the plane with a point deleted, say) it cannot.
- **Local, not global, minimisation.** Part 5 of the statement is confined to a small neighbourhood $W$, and outside it the comparison with *every* curve joining $p$ to $q$ breaks down: of the two great-circle arcs between two points of a sphere, both geodesics, only one is the shortest path. Arfken, Weber and Harris make the companion point about their Fig. 22.2 — the Euler equation is necessary and not sufficient, so a solution of it must still be checked against the conditions of the problem. This is exactly why "geodesic" is defined here by an equation rather than by a minimum.
- **Smoothness.** Part 1 of the proof differentiates $\mathbf{x}$ twice, so a $C^2$ surface suffices to write the equations down; the existence theorem then needs the coefficients, hence the $\Gamma^k_{ij}$, to be Lipschitz, which is a condition on third derivatives of $\mathbf{x}$.
:::

:::method[Finding the geodesics of a given metric]{provenance=original}
1. **Write the line element.** Choose coordinates and read off $g_{ij}$, or for a surface the coefficients $E, F, G$ of :ref[the first fundamental form]{to=geom.first-fundamental-form}. Everything below uses only these.
2. **Decide which route is cheaper.** If the metric is diagonal and simple, compute the Christoffel symbols and write the equations of part 1 or 2 of the statement. If it is not, go straight to step 3: the energy route needs no Christoffel symbols at all.
3. **Energy route.** Form $2T = g_{ij}\dot q^i\dot q^j$, treat it as a Lagrangian, and write one Euler–Lagrange equation per coordinate. Read the Christoffel symbols off the result if you want them.
4. **Harvest the first integrals before integrating anything.** Two come for free:
   - *Speed.* $g_{ij}\dot q^i\dot q^j = \text{const}$; set it to $1$ to make the parameter arc length.
   - *Cyclic coordinates.* If $2T$ does not contain $q^m$ explicitly, then $\partial T/\partial\dot q^m = g_{mj}\dot q^j$ is constant along every geodesic.
5. **Surfaces of revolution: use Clairaut.** For $\mathbf{x}(u,v) = (f(v)\cos u, f(v)\sin u, g(v))$ the coordinate $u$ is cyclic, and the first equation integrates at once to $f^2u' = c$. With $r = f$ the radius of the parallel through the point and $\theta$ the angle between the geodesic and that parallel, this is **Clairaut's relation**
   $$
   r\cos\theta = \lvert c\rvert = \text{const} ,
   $$
   which already settles many questions without any integration: a geodesic cannot reach a parallel of radius smaller than $\lvert c\rvert$, and it is tangent to the parallel of radius exactly $\lvert c\rvert$.
6. **Identify the obvious solutions first.** A curve fixed by an isometry of the surface is a geodesic: meridians of a surface of revolution, and any curve cut out by a plane of mirror symmetry, qualify. Check them against the equations rather than assuming it.
7. **Count.** By part 4 of the statement there is exactly one geodesic through each point in each direction. Once you have produced a family with that many members, you have them all; no further solutions exist.
8. **Check the answer numerically.** Substitute the closed-form solution back into both geodesic equations, and verify that the speed is constant.
:::

:::example[Great circles on the sphere, and the shortest flight between two points at the same latitude]{provenance=original}
Take the sphere of radius $a$ with colatitude $\theta$ and longitude $\phi$, so that the line element is
$$
ds^2 = a^2\,d\theta^2 + a^2\sin^2\theta\,d\phi^2, \qquad g_{\theta\theta} = a^2,\quad g_{\phi\phi} = a^2\sin^2\theta,\quad g_{\theta\phi} = 0 .
$$

**Step 1: the equations, by the energy route.** With $2T = a^2\dot\theta^2 + a^2\sin^2\theta\,\dot\phi^2$ the two Euler–Lagrange equations are
$$
\frac{d}{ds}\bigl(2a^2\dot\theta\bigr) - 2a^2\sin\theta\cos\theta\,\dot\phi^2 = 0, \qquad
\frac{d}{ds}\bigl(2a^2\sin^2\theta\,\dot\phi\bigr) = 0 ,
$$
that is, after dividing by $2a^2$ and expanding the second,
$$
\ddot\theta - \sin\theta\cos\theta\,\dot\phi^2 = 0, \qquad \ddot\phi + 2\cot\theta\,\dot\theta\dot\phi = 0 .
$$
Comparing with part 2 of the statement reads off the Christoffel symbols: $\Gamma^\theta{}_{\phi\phi} = -\sin\theta\cos\theta$ and $\Gamma^\phi{}_{\theta\phi} = \Gamma^\phi{}_{\phi\theta} = \cot\theta$, all others zero. The second equation is already the conserved quantity of step 4 of the method: $\sin^2\theta\,\dot\phi = \text{const}$, the sphere's form of Clairaut's relation.

**Step 2: the equator solves them.** Put $\theta \equiv \pi/2$ and $\phi = s/a$. Then $\ddot\theta = 0$ and $\sin\theta\cos\theta = 0$, so the first equation holds; $\ddot\phi = 0$ and $\dot\theta = 0$, so does the second. The speed is $a^2\sin^2(\pi/2)\,(1/a)^2 = 1$, so $s$ is arc length. The equator is a geodesic.

**Step 3: therefore every great circle is, and nothing else.** Every rotation of $\mathbb{R}^3$ maps the sphere to itself preserving distances, so it is an isometry, and the geodesic equations depend only on $E, F, G$ (:ref[Gauss's Theorema Egregium]{to=geom.theorema-egregium}), hence are unchanged by it. Any great circle is the image of the equator under a rotation, so it is a geodesic. Through a given point in a given direction there passes exactly one great circle; by part 4 of the statement there is exactly one geodesic. So the geodesics of the sphere are precisely the great circles, with constant-speed parametrizations.

**Step 4: a numerical case.** Let $A$ be the point at latitude $45^\circ$N, longitude $0^\circ$ and let $B$ be at latitude $45^\circ$N, longitude $90^\circ$E, on a sphere of radius $a = 6371\ \mathrm{km}$. As unit vectors,
$$
\hat A = \Bigl(\tfrac{1}{\sqrt2},\,0,\,\tfrac{1}{\sqrt2}\Bigr), \qquad \hat B = \Bigl(0,\,\tfrac{1}{\sqrt2},\,\tfrac{1}{\sqrt2}\Bigr), \qquad \hat A\cdot\hat B = \tfrac12 .
$$
The central angle between them is $\arccos\tfrac12 = \pi/3$, so the geodesic joining them has length
$$
L_{\text{geo}} = a\,\frac{\pi}{3} = 6371 \times 1.047198 = 6671.70\ \mathrm{km}.
$$
Flying along the $45^\circ$ parallel instead — a curve of constant latitude, which is *not* a geodesic, since it is not a great circle — costs
$$
L_{\text{par}} = a\cos 45^\circ \times \frac{\pi}{2} = 6371 \times 0.707107 \times 1.570796 = 7076.40\ \mathrm{km},
$$
longer by $404.70\ \mathrm{km}$, about $6\%$.

**Step 5: where the geodesic goes, from Clairaut alone.** The unit normal to the plane of the great circle is
$$
\hat n = \frac{\hat A\times\hat B}{\lvert \hat A\times\hat B\rvert} = \frac{(-\tfrac12,\,-\tfrac12,\,\tfrac12)}{\sqrt{3}/2} = \Bigl(-\tfrac{1}{\sqrt3},\,-\tfrac{1}{\sqrt3},\,\tfrac{1}{\sqrt3}\Bigr),
$$
so the largest value of $z$ on the circle is $\sqrt{1 - n_z^2} = \sqrt{2/3} = 0.816497$ and the geodesic climbs to latitude
$$
\lambda_{\max} = \arcsin\sqrt{2/3} = 54.7356^\circ\ \mathrm{N},
$$
reached at longitude $45^\circ$E by symmetry — a long way north of both endpoints. Clairaut's relation confirms it without the cross product: with $r = a\cos\lambda$ and $\theta$ the angle to the parallel, $\cos\lambda\cos\theta$ is constant, and it equals $\cos\lambda_{\max}$ at the top where $\theta = 0$. Starting from $\cos\lambda_{\max} = 1/\sqrt3 = 0.577350$ and $\lambda = 45^\circ$ at $A$,
$$
\cos\theta_A = \frac{1/\sqrt3}{1/\sqrt2} = \sqrt{2/3} = 0.816497, \qquad \theta_A = 35.2644^\circ ,
$$
so the aircraft leaves $A$ on a heading of $90^\circ - 35.2644^\circ = 54.7356^\circ$ east of north, not due east. Every number in this step is a check on the last: $\cos 45^\circ\cos 35.2644^\circ = 0.707107 \times 0.816497 = 0.577350 = \cos 54.7356^\circ$, as Clairaut requires.
:::

:::application{provenance=original}
**Free fall is geodesic motion.** General relativity replaces gravitational force by curvature: a particle subject to no non-gravitational force follows a geodesic of the spacetime metric, and the equation it obeys is the one derived above, with the proper time $\tau$ as the affine parameter. The two ingredients of the derivation are exactly the two faces of the equivalence principle — the tangent is parallel-transported (no force), and the worldline extremizes the action (Hamilton's principle, :ref[Hamilton's principle]{to=var.hamilton-principle}). Orbits, the bending of starlight and the precession of Mercury's perihelion are all computed by writing the Schwarzschild metric, taking the cyclic coordinates $t$ and $\phi$ as in step 4 of the method, and integrating the two resulting first integrals. Clairaut's relation is the flat ancestor of the conserved angular momentum that appears there.

**Great-circle navigation.** Step 4 of the example is why long-haul flight plans and shipping routes curve towards the pole on a Mercator chart: the chart is conformal but not distance-preserving, and the geodesic is not the straight line on the paper. The $404$ km saved on a quarter-turn at latitude $45^\circ$ is roughly half an hour of flight and several tonnes of fuel. The same calculation, with the Earth's oblateness restored, is the geodesy problem solved by Vincenty's algorithm, which integrates the geodesic equations of an ellipsoid of revolution using Clairaut's relation as its first integral.

**Optics and wave propagation.** Fermat's principle makes a light ray in a medium of refractive index $n(\mathbf{r})$ a geodesic of the optical metric $n^2\delta_{ij}$, and the geodesic equation becomes the ray equation of gradient-index optics. This is how a graded-index optical fibre confines light — rays oscillate about the axis because the geodesics of the index profile are bound — and it is how mirages and atmospheric refraction are computed. Acoustic ray tracing in the ocean and seismic ray tracing in the Earth use the same equation with $n$ replaced by the reciprocal of the local wave speed.

**Shortest paths on manufactured and modelled surfaces.** Geodesics on a surface of revolution describe the path of a thread or filament wound under tension on a mandrel, which is what filament-wound pressure vessels and composite pipes are designed around; Clairaut's relation fixes the minimum radius a winding can reach and so the achievable winding angle. In computer graphics and computational anatomy, geodesic distance on a triangulated surface — the discrete version of part 5 of the statement — is the standard measure of separation along a curved object, used for texture mapping, mesh parametrization and cortical surface analysis.
:::
