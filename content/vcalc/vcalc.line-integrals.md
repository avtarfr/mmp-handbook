---
id: vcalc.line-integrals
title: Line integrals and conservative fields
kind: theorem
level: core
summary: Defines the line integral of a vector field along a piecewise $C^1$ curve and proves that path independence, the existence of a single-valued potential and exactness of $\mathbf{F}\cdot d\mathbf{r}$ are the same condition, that each forces $\nabla\times\mathbf{F} = \mathbf{0}$, and that the converse holds on a star-shaped (more generally simply connected) domain.
prereqs: [vcalc.gradient, found.partial-derivatives-chain-rule, found.connectedness-homotopy, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§11.1, Eqs. (11.1)–(11.2), pp. 377–379 and §11.1.3, p. 382 (line integrals and arc-length integrals); §11.2, p. 383 (connectivity of regions); §11.4, pp. 387–389 (the four equivalent conditions for a conservative field, the construction of $\\phi$, and the multivalued magnetic scalar potential)"
    pages: "377-379, 382-383, 387-389"
    role: the list of four equivalent conditions, the physicists' notation, and the remarks on connectivity and single-valuedness
  - work: lee-2013
    loc: "Ch. 11, Prop. 11.37 (parameter independence), p. 290; Thm 11.39 (fundamental theorem for line integrals), p. 291; Prop. 11.40 and Thm 11.42 (conservative $\\Leftrightarrow$ exact), pp. 292–294; Prop. 11.44 (exact $\\Rightarrow$ closed), p. 294; Thm 11.49 (Poincaré lemma for covector fields), pp. 296–297; Ch. 16, Cor. 16.27, p. 421"
    pages: "290-294, 296-297, 421"
    role: precise hypotheses and proof routes for every implication, including the star-shaped and simply connected cases
  - work: arfken-2013
    loc: "§3.7, Eqs. (3.75)–(3.77) and Example 3.7.1, pp. 159–160; §3.9, Eqs. (3.96)–(3.100), pp. 171–172"
    pages: "159-160, 171-172"
    role: the work interpretation, a path-dependent integral, and the equivalence read as a statement about conservative forces
---

:::definition[Line integral, conservative field, potential, exact differential]{provenance=adapted src="rhb-2006:§11.1, Eqs. (11.1)–(11.2), pp. 377–379 and §11.1.3, p. 382; lee-2013:Ch. 11, pp. 288–292"}
Let $\Omega \subseteq \mathbb{R}^3$ be open and let $\mathbf{F} = (F_1, F_2, F_3)$ be a continuous vector field on $\Omega$.

- A **curve segment** in $\Omega$ is a continuous map $\gamma : [a,b] \to \Omega$. It is **piecewise $C^1$** if $[a,b]$ can be cut at finitely many points $a = t_0 < t_1 < \dots < t_k = b$ so that $\gamma$ is $C^1$ on each $[t_{i-1}, t_i]$; the one-sided velocities at the cuts need not agree. The segment is **closed** if $\gamma(a) = \gamma(b)$.
- The **line integral** of $\mathbf{F}$ along a piecewise $C^1$ segment $\gamma$ is
  $$
  \int_{\gamma} \mathbf{F}\cdot d\mathbf{r} \;=\; \sum_{i=1}^{k} \int_{t_{i-1}}^{t_i} \mathbf{F}\bigl(\gamma(t)\bigr)\cdot \gamma'(t)\, dt .
  $$
  In Cartesian components this is $\int_\gamma (F_1\,dx + F_2\,dy + F_3\,dz)$. The integral of a scalar field $\varphi$ with respect to arc length is $\int_\gamma \varphi\, ds = \int_a^b \varphi(\gamma(t))\,\lvert \gamma'(t)\rvert\, dt$, and $\int_\gamma \varphi\, d\mathbf{r}$ and $\int_\gamma \mathbf{a}\times d\mathbf{r}$ are defined componentwise in the same way.
- $\mathbf{F}$ is **conservative** on $\Omega$ if $\oint_\gamma \mathbf{F}\cdot d\mathbf{r} = 0$ for every piecewise $C^1$ closed segment $\gamma$ in $\Omega$.
- A **potential** for $\mathbf{F}$ is a function $\phi$ on $\Omega$, single-valued and of class $C^1$, with $\mathbf{F} = \nabla\phi$. Equivalently, $\mathbf{F}\cdot d\mathbf{r} = d\phi$ is an **exact differential**: the one-form $F_1\,dx + F_2\,dy + F_3\,dz$ is the total differential of $\phi$. Physicists usually write $\mathbf{F} = -\nabla\phi$ instead, so that $\phi$ is the work done against $\mathbf{F}$; the two conventions differ only in the sign of $\phi$.
- $\Omega$ is **simply connected** if every closed curve in $\Omega$ can be contracted to a point without leaving $\Omega$; it is **star-shaped** about $\mathbf{c} \in \Omega$ if the straight segment from $\mathbf{c}$ to any point of $\Omega$ lies in $\Omega$. A convex set is star-shaped, and a star-shaped set is simply connected.
:::

:::statement[Parameter independence]{provenance=adapted src="lee-2013:Prop. 11.37, p. 290"}
Let $\gamma : [a,b] \to \Omega$ be piecewise $C^1$ and let $\psi : [c,d] \to [a,b]$ be a $C^1$ bijection with $\psi' $ of one sign. Then

$$
\int_{\gamma \circ \psi} \mathbf{F}\cdot d\mathbf{r} \;=\;
\begin{cases}
+\displaystyle\int_{\gamma} \mathbf{F}\cdot d\mathbf{r}, & \psi \text{ increasing},\\[2mm]
-\displaystyle\int_{\gamma} \mathbf{F}\cdot d\mathbf{r}, & \psi \text{ decreasing}.
\end{cases}
$$

So the integral depends only on the image curve and the direction of travel along it, not on the parametrization, and reversing the direction reverses the sign. Splitting a curve at an interior point adds the two pieces' integrals.
:::

:::statement[Path independence, potentials and the curl]{provenance=adapted src="rhb-2006:§11.4, p. 387; lee-2013:Thm 11.39, p. 291; lee-2013:Thm 11.42, pp. 292–294; lee-2013:Prop. 11.44, p. 294; lee-2013:Thm 11.49, pp. 296–297"}
Let $\Omega \subseteq \mathbb{R}^3$ be open and connected and let $\mathbf{F}$ be a $C^1$ vector field on $\Omega$ (that is, $\mathbf{F}$ has continuous first partial derivatives there). Consider the four conditions

1. **Path independence.** $\int_\gamma \mathbf{F}\cdot d\mathbf{r}$ has the same value for any two piecewise $C^1$ segments in $\Omega$ with the same initial and final point; equivalently, $\mathbf{F}$ is conservative.
2. **Potential.** There is a single-valued $\phi \in C^2(\Omega)$ with $\mathbf{F} = \nabla\phi$.
3. **Exactness.** $\mathbf{F}\cdot d\mathbf{r}$ is an exact differential on $\Omega$.
4. **Vanishing curl.** $\nabla\times\mathbf{F} = \mathbf{0}$ at every point of $\Omega$.

Then:

- Conditions 1, 2 and 3 are equivalent, with no hypothesis on the shape of $\Omega$, and each of them implies condition 4. When they hold, $\phi$ is determined up to one additive constant and
  $$
  \int_{\gamma} \mathbf{F}\cdot d\mathbf{r} = \phi\bigl(\gamma(b)\bigr) - \phi\bigl(\gamma(a)\bigr)
  $$
  for every piecewise $C^1$ segment $\gamma : [a,b] \to \Omega$.
- If $\Omega$ is star-shaped, condition 4 implies the other three, so all four are equivalent. The same conclusion holds whenever $\Omega$ is simply connected.

A field satisfying these conditions is called conservative, and $\phi$ is its scalar potential.
:::

:::note{provenance=original}
**Which implications need which hypothesis.** Riley, Hobson and Bence state the four conditions as equivalent for a field with continuous partial derivatives on a *simply connected* region (§11.4, p. 387), so their list carries the topological hypothesis throughout. Lee separates the implications: conservative $\Leftrightarrow$ exact needs no hypothesis on the domain (Thm 11.42), exact $\Rightarrow$ closed needs none (Prop. 11.44), and only the converse of the last one needs the domain to be star-shaped (Thm 11.49) or simply connected (Cor. 16.27). The statement above follows Lee's division, which is the sharper one; the two accounts agree on simply connected domains, which is the case Riley, Hobson and Bence discuss.
:::

:::idea{provenance=original}
Each implication is one short idea. If $\mathbf{F}$ is a gradient, the chain rule turns $\mathbf{F}\cdot\gamma'$ into the $t$-derivative of $\phi\circ\gamma$, and the fundamental theorem of calculus leaves only the endpoint values: that is path independence. Conversely, if the integral depends only on the endpoints, then *defining* $\phi$ at a point as the integral from a fixed base point is unambiguous, and probing it along a short coordinate segment recovers the corresponding component of $\mathbf{F}$. A gradient has symmetric second derivatives, which is exactly what $\nabla\times\nabla\phi = \mathbf{0}$ says. The last implication is the only one with any geometry in it: on a star-shaped domain we can reach every point by one preferred path, the straight segment from the centre, and integrating along it produces a potential — the vanishing of the curl is what makes the resulting derivative collapse to a total derivative in the segment parameter.
:::

:::proof{provenance=adapted src="lee-2013:Thm 11.39, p. 291; lee-2013:Thm 11.42, pp. 292–294; lee-2013:Prop. 11.44, p. 294; lee-2013:Thm 11.49, pp. 296–297; rhb-2006:§11.4, pp. 387–389"}
Throughout, $\Omega$ is open and connected, so any two of its points are joined by a piecewise $C^1$ segment in $\Omega$: the set of points reachable from a fixed $\mathbf{p}_0$ by such a segment is open (append a straight segment inside a ball of $\Omega$) and has open complement in $\Omega$ for the same reason, so by connectedness it is all of $\Omega$ (:ref[connectedness]{to=found.connectedness-homotopy}).

**Step 1: condition 2 implies condition 1, with the endpoint formula.** Let $\mathbf{F} = \nabla\phi$ and let $\gamma$ be $C^1$ on a subinterval $[t_{i-1},t_i]$. By the chain rule,

$$
\frac{d}{dt}\,\phi\bigl(\gamma(t)\bigr) = \nabla\phi\bigl(\gamma(t)\bigr)\cdot\gamma'(t) = \mathbf{F}\bigl(\gamma(t)\bigr)\cdot\gamma'(t) ,
$$

so by the fundamental theorem of calculus that piece contributes $\phi(\gamma(t_i)) - \phi(\gamma(t_{i-1}))$. Summing over the pieces, the intermediate values cancel and

$$
\int_{\gamma} \mathbf{F}\cdot d\mathbf{r} = \phi\bigl(\gamma(b)\bigr) - \phi\bigl(\gamma(a)\bigr) .
$$

What stands on the right involves the endpoints and nothing else — this is where the hypothesis that $\phi$ is *single-valued* is used — and it vanishes when $\gamma$ is closed.

**Step 2: condition 1 implies condition 2.** Assume path independence and fix $\mathbf{p}_0 \in \Omega$. For $\mathbf{q} \in \Omega$ put

$$
\phi(\mathbf{q}) = \int_{\gamma_{\mathbf{q}}} \mathbf{F}\cdot d\mathbf{r},
$$

where $\gamma_{\mathbf{q}}$ is any piecewise $C^1$ segment in $\Omega$ from $\mathbf{p}_0$ to $\mathbf{q}$. Such a segment exists by the paragraph above, and the value does not depend on which one is used, by hypothesis; so $\phi$ is a single-valued function on $\Omega$.

Fix $\mathbf{q} \in \Omega$ and $j \in \{1,2,3\}$. Since $\Omega$ is open there is $\varepsilon > 0$ with $\mathbf{q} + s\,\mathbf{e}_j \in \Omega$ for $\lvert s \rvert < \varepsilon$. Concatenating a path to $\mathbf{q}$ with the straight segment $\sigma \mapsto \mathbf{q} + \sigma\mathbf{e}_j$, $0 \le \sigma \le s$, gives an admissible path to $\mathbf{q} + s\mathbf{e}_j$, whence

$$
\phi(\mathbf{q} + s\,\mathbf{e}_j) - \phi(\mathbf{q}) = \int_0^s F_j(\mathbf{q} + \sigma\,\mathbf{e}_j)\, d\sigma ,
$$

because along that segment $d\mathbf{r} = \mathbf{e}_j\, d\sigma$. The integrand is continuous in $\sigma$, so dividing by $s$ and letting $s \to 0$ gives $\partial\phi/\partial x_j(\mathbf{q}) = F_j(\mathbf{q})$. Hence $\nabla\phi = \mathbf{F}$, and $\phi \in C^1$ because its partial derivatives are the continuous functions $F_j$; since $\mathbf{F}$ is $C^1$ by hypothesis, in fact $\phi \in C^2$.

**Step 3: conditions 2 and 3 are the same statement.** By definition, $\mathbf{F}\cdot d\mathbf{r}$ is exact precisely when there is a single-valued $\phi$ with $d\phi = F_1\,dx + F_2\,dy + F_3\,dz$, and $d\phi = \nabla\phi\cdot d\mathbf{r}$ identifies the coefficients one by one: $\partial\phi/\partial x = F_1$, and likewise for $y$ and $z$. So condition 3 holds if and only if condition 2 does.

**Step 4: condition 2 implies condition 4.** With $\mathbf{F} = \nabla\phi$ and $\phi \in C^2$ by Step 2, the mixed second partial derivatives of $\phi$ are symmetric (:ref[Clairaut's theorem]{to=found.partial-derivatives-chain-rule}), so

$$
(\nabla\times\mathbf{F})_1 = \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} = \frac{\partial^2\phi}{\partial y\,\partial z} - \frac{\partial^2\phi}{\partial z\,\partial y} = 0 ,
$$

and the other two components vanish by the same computation with the indices permuted cyclically.

**Step 5: condition 4 implies condition 2 when $\Omega$ is star-shaped.** Translate so that $\Omega$ is star-shaped about the origin. For $\mathbf{x} \in \Omega$ the segment $t \mapsto t\mathbf{x}$, $0 \le t \le 1$, lies in $\Omega$, so

$$
\phi(\mathbf{x}) \;=\; \int_0^1 \mathbf{F}(t\mathbf{x})\cdot\mathbf{x}\, dt \;=\; \int_0^1 \sum_{i} F_i(t\mathbf{x})\,x_i \, dt
$$

is defined on all of $\Omega$; it is the line integral of $\mathbf{F}$ along that one segment. The integrand and its partial derivatives in $\mathbf{x}$ are continuous on a neighbourhood of $\{t\mathbf{x} : 0 \le t \le 1\}$ because $\mathbf{F}$ is $C^1$, and the $t$-interval is compact, so we may :ref[differentiate under the integral sign]{to=found.differentiation-under-integral}:

$$
\frac{\partial \phi}{\partial x_j}(\mathbf{x}) = \int_0^1 \Bigl[\, t\sum_i \frac{\partial F_i}{\partial x_j}(t\mathbf{x})\, x_i \;+\; F_j(t\mathbf{x}) \,\Bigr]\, dt .
$$

Now the hypothesis $\nabla\times\mathbf{F} = \mathbf{0}$ enters: it says precisely that $\partial F_i/\partial x_j = \partial F_j/\partial x_i$ for every pair $i \ne j$, and for $i = j$ this is trivially true. Substituting,

$$
\frac{\partial \phi}{\partial x_j}(\mathbf{x}) = \int_0^1 \Bigl[\, t\sum_i x_i\,\frac{\partial F_j}{\partial x_i}(t\mathbf{x}) \;+\; F_j(t\mathbf{x}) \,\Bigr]\, dt = \int_0^1 \frac{d}{dt}\Bigl[\, t\,F_j(t\mathbf{x}) \,\Bigr]\, dt = F_j(\mathbf{x}) ,
$$

the middle equality being the chain rule applied to $t \mapsto t\,F_j(t\mathbf{x})$ and the last one the fundamental theorem of calculus, since the bracket vanishes at $t = 0$ and equals $F_j(\mathbf{x})$ at $t = 1$. So $\mathbf{F} = \nabla\phi$.

**Step 6: uniqueness of $\phi$.** If $\nabla\phi = \nabla\tilde\phi$ on the connected open set $\Omega$ then $\nabla(\phi - \tilde\phi) = \mathbf{0}$; a function with vanishing gradient is constant along every segment inside $\Omega$ by Step 1, hence constant on $\Omega$ by connectedness. $\square$
:::

:::note{provenance=adapted src="lee-2013:Ch. 16, Thm 16.26 and Cor. 16.27, p. 421"}
**The simply connected case.** Step 5 proves the implication $4 \Rightarrow 2$ only for star-shaped domains, which is all that an elementary argument gives: the proof needs a family of paths, one to each point, varying smoothly with the endpoint. For a general simply connected $\Omega$ the implication is still true, but the proof runs through homotopy invariance of line integrals of closed fields — Lee's Thm 16.26 — and is beyond the scope of this unit; see :ref[the Poincaré lemma for forms]{to=geom.poincare-lemma}. The ingredients are: a closed field has the same integral along path-homotopic curves; in a simply connected domain every closed curve is path-homotopic to a constant curve; hence every closed circulation vanishes, and Step 2 supplies the potential.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Simple connectivity, in Step 5 only.* On $\Omega = \mathbb{R}^3$ minus the $z$-axis, the field
  $$
  \mathbf{F} = \frac{1}{x^2+y^2}\,(-y,\; x,\; 0)
  $$
  is $C^\infty$ and has $\nabla\times\mathbf{F} = \mathbf{0}$ everywhere (checked in the second example below), yet its circulation around the unit circle in the $z = 0$ plane is $2\pi \ne 0$. So condition 4 does not imply conditions 1–3 on this $\Omega$, which is not simply connected: a loop around the axis cannot be contracted inside $\Omega$. Restricted to the half-space $x > 0$, which is convex, the same field is $\nabla\bigl(\arctan(y/x)\bigr)$.
- *Openness and connectedness of $\Omega$.* Openness is used in Step 2 to find the probing segment, and in Step 6. Connectedness is used to join points by paths and to pin $\phi$ down to one constant; on a disconnected $\Omega$ the conclusions hold on each component separately, with an independent constant in each.
- *Continuity of $\mathbf{F}$ versus $\mathbf{F} \in C^1$.* Steps 1–3 and 6 need only that $\mathbf{F}$ is continuous. Step 4 needs the first derivatives of $\mathbf{F}$ to exist and be continuous, since it is a statement about them; Step 5 needs them too, to differentiate under the integral sign.
- *Piecewise $C^1$ rather than $C^1$ paths.* Admitting corners costs nothing in Step 1 and makes Step 2 easy, because the probing segment can simply be appended to an arbitrary path. Lee notes (after Prop. 11.40) that restricting to smooth closed curves would make the equivalence harder to prove.
- *Single-valuedness of $\phi$.* This is not decoration. The field above has the multivalued "potential" $\varphi = \arctan(y/x)$, i.e. the azimuthal angle, which increases by $2\pi$ on each circuit; that increase is the circulation. Riley, Hobson and Bence note the same phenomenon for the magnetic scalar potential of a current-carrying wire (p. 389): the results apply as long as the loop encloses no net current.
- *A field can fail to be conservative for the plainest reason.* For $\mathbf{F} = (-y, x, 0)$ on $\mathbb{R}^3$ we get $\nabla\times\mathbf{F} = (0,0,2) \ne \mathbf{0}$, and Arfken's Example 3.7.1 computes two integrals of this field from $(0,0)$ to $(1,1)$ with different values. Here no topology is involved; condition 4 already fails.
:::

:::example[A conservative field: potential and work]{provenance=original}
On $\Omega = \mathbb{R}^3$ take

$$
\mathbf{F} = \bigl(y^2 z + 2x,\;\; 2xyz + 1,\;\; xy^2 + 3z^2\bigr).
$$

1. *Test condition 4.* Componentwise,
   $$
   \frac{\partial F_3}{\partial y} = 2xy = \frac{\partial F_2}{\partial z},\qquad
   \frac{\partial F_1}{\partial z} = y^2 = \frac{\partial F_3}{\partial x},\qquad
   \frac{\partial F_2}{\partial x} = 2yz = \frac{\partial F_1}{\partial y},
   $$
   so $\nabla\times\mathbf{F} = \mathbf{0}$. Since $\mathbb{R}^3$ is convex, hence star-shaped about the origin, the theorem gives a potential.
2. *Build it by the formula of Step 5.* With $\mathbf{F}(t\mathbf{x})\cdot\mathbf{x} = 4t^3 x y^2 z + 2t x^2 + y + 3t^2 z^3$,
   $$
   \phi(\mathbf{x}) = \int_0^1 \bigl(4t^3 x y^2 z + 2t x^2 + y + 3t^2 z^3\bigr)\, dt = x y^2 z + x^2 + y + z^3 .
   $$
   Check: $\partial\phi/\partial x = y^2z + 2x$, $\partial\phi/\partial y = 2xyz + 1$, $\partial\phi/\partial z = xy^2 + 3z^2$, as required. Any other potential differs from this by a constant.
3. *Work between two points.* The work done by $\mathbf{F}$ from $(0,0,0)$ to $(1,2,3)$ is
   $$
   \phi(1,2,3) - \phi(0,0,0) = \bigl(1\cdot 4\cdot 3 + 1 + 2 + 27\bigr) - 0 = 42 ,
   $$
   along every path in $\mathbb{R}^3$ joining the two points.
4. *Two explicit paths, as a check.* Along the straight segment $\gamma(t) = (t, 2t, 3t)$, $0 \le t \le 1$, the three components of $\mathbf{F}$ become $12t^3 + 2t$, $12t^3 + 1$ and $4t^3 + 27t^2$, and $\gamma' = (1,2,3)$, so
   $$
   \int_{\gamma}\mathbf{F}\cdot d\mathbf{r} = \int_0^1 \bigl(48t^3 + 81t^2 + 2t + 2\bigr)\, dt = 12 + 27 + 1 + 2 = 42 .
   $$
   Along the three-leg path $(0,0,0) \to (1,0,0) \to (1,2,0) \to (1,2,3)$, each leg has only one varying coordinate. On the first, $y = z = 0$ and $F_1 = 2x$, giving $\int_0^1 2x\, dx = 1$. On the second, $x = 1$, $z = 0$ and $F_2 = 1$, giving $\int_0^2 1\, dy = 2$. On the third, $x = 1$, $y = 2$ and $F_3 = 4 + 3z^2$, giving $\int_0^3 (4 + 3z^2)\, dz = 12 + 27 = 39$. The total is $1 + 2 + 39 = 42$, the same value.
:::

:::example[A curl-free field that is not conservative]{provenance=original}
Let $\Omega = \mathbb{R}^3 \setminus \{x = y = 0\}$, the complement of the $z$-axis, and

$$
\mathbf{F} = \Bigl(\frac{-y}{x^2+y^2},\;\; \frac{x}{x^2+y^2},\;\; 0\Bigr) .
$$

1. *The curl vanishes.* The third component of the curl is
   $$
   \frac{\partial}{\partial x}\frac{x}{x^2+y^2} - \frac{\partial}{\partial y}\frac{-y}{x^2+y^2}
   = \frac{(x^2+y^2) - 2x^2}{(x^2+y^2)^2} + \frac{(x^2+y^2) - 2y^2}{(x^2+y^2)^2}
   = \frac{2(x^2+y^2) - 2(x^2+y^2)}{(x^2+y^2)^2} = 0 ,
   $$
   and the first two components vanish because $F_3 = 0$ and $F_1, F_2$ do not depend on $z$.
2. *The circulation does not.* On the unit circle $\gamma(\theta) = (\cos\theta, \sin\theta, 0)$, $0 \le \theta \le 2\pi$, we have $x^2 + y^2 = 1$ and
   $$
   \mathbf{F}(\gamma)\cdot\gamma' = (-\sin\theta)(-\sin\theta) + (\cos\theta)(\cos\theta) = 1 ,
   $$
   so $\oint_\gamma \mathbf{F}\cdot d\mathbf{r} = 2\pi$.
3. *Reading off the obstruction.* By the theorem, $\mathbf{F}$ has no single-valued potential on $\Omega$, and $\Omega$ is therefore not simply connected — the circulation $2\pi$ is a certificate of that. On any simply connected subdomain the potential exists: on $\{x > 0\}$ it is $\arctan(y/x)$, on $\{y > 0\}$ it is $-\arctan(x/y)$, and the two differ by $\pi/2$ on the overlap, which is consistent because each is only determined up to a constant on its own domain.
4. *Circulation counts turns.* For the circle of radius $R$ traversed $n$ times the same computation gives $2\pi n$, independent of $R$: the integral measures how many times the loop winds about the axis (see :ref[the winding number]{to=complex.winding-number}).
:::

:::application{provenance=original}
The physical content of the theorem is that *work against a conservative force is storable as potential energy*. For a force field $\mathbf{F} = -\nabla V$, the work done by the field along any path from $\mathbf{a}$ to $\mathbf{b}$ is $V(\mathbf{a}) - V(\mathbf{b})$, so the sum of kinetic and potential energy is constant along a trajectory: gravity, electrostatics and linear springs are all of this kind, and the whole machinery of potentials in :ref[Hamiltonian mechanics]{to=var.hamilton-principle} rests on it.

Line integrals that are *not* path independent are equally important, and the curl is the diagnostic. The electromotive force $\oint \mathbf{E}\cdot d\mathbf{r}$ around a circuit is nonzero exactly when $\nabla\times\mathbf{E} \ne \mathbf{0}$, which by Faraday's law means a changing magnetic flux — this is how a generator works. Ampère's law $\oint_C \mathbf{B}\cdot d\mathbf{r} = \mu_0 I$ (Riley, Hobson and Bence, p. 381) is the circulation of $\mathbf{B}$, and the field of a straight wire is, up to the factor $\mu_0 I/2\pi$, exactly the curl-free field of the second example: its circulation is nonzero only because the wire has been removed from the domain.

In thermodynamics the same distinction is the difference between a state function and a process quantity. Internal energy has an exact differential $dU$, so $\oint dU = 0$ around any cycle; heat and work do not, which is why a heat engine can run. In fluid mechanics the circulation $\oint \mathbf{u}\cdot d\mathbf{r}$ of the velocity field around a closed material curve is the quantity conserved by Kelvin's theorem, and an irrotational flow is one whose velocity has a single-valued potential — the starting point of classical aerofoil theory, where the lift is proportional to a circulation made nonzero by cutting the aerofoil out of the domain.
:::
