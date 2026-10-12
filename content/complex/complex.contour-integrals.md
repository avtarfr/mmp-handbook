---
id: complex.contour-integrals
title: Contour integrals
kind: definition
level: core
summary: The integral of a continuous complex function along a piecewise smooth path, its independence of the parametrization, the ML bound on its size, and the fact that it depends only on the endpoints exactly when the integrand is the derivative of an analytic function.
prereqs: [complex.elementary-functions, complex.cauchy-riemann, vcalc.line-integrals]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §1.1, Eqs. (1)–(9), pp. 101–104; §1.3, Thm 1 and Eq. (11), pp. 105–108"
    pages: "101-108"
    role: definition by reduction to real integrals; the modulus inequality and its arc-length form; invariance under change of parameter, reversal and subdivision; the theorem that a line integral depends only on the endpoints exactly when the integrand is an exact differential, and its complex form; the integral of (z-a)^n over a closed curve
  - work: rhb-2006
    loc: "§24.8, Eqs. (24.32)–(24.38), pp. 845–848; §24.9, Eq. (24.39), p. 849"
    pages: "845-849"
    role: the explicit reduction to four real integrals, and the ML inequality in the form used here
  - work: arfken-2013
    loc: "§11.3, Contour Integrals, Eqs. (11.16)–(11.17), pp. 477–478"
    pages: "477-478"
    role: the Riemann-sum definition of a contour integral and the orientation convention for closed contours
---

:::definition[Paths and contour integrals]{provenance=adapted src="ahlfors-1979:Ch. 4, §1.1, Eqs. (1) and (4), pp. 101–102; arfken-2013:§11.3, Eqs. (11.16)–(11.17), pp. 477–478"}
For a continuous $g:[a,b] \to \mathbb{C}$, $g = g_1 + ig_2$ with $g_1, g_2$ real, define

$$
\int_a^b g(t)\,dt = \int_a^b g_1(t)\,dt + i \int_a^b g_2(t)\,dt .
$$

A **path** (or **contour**) $\gamma$ is a piecewise continuously differentiable map $z:[a,b] \to \mathbb{C}$; it is **closed** if $z(a) = z(b)$, and **simple** if it does not meet itself otherwise. For $f$ continuous on the image of $\gamma$,

$$
\int_\gamma f(z)\,dz = \int_a^b f\bigl(z(t)\bigr)\,z'(t)\,dt ,
$$

the interval being subdivided at the finitely many points where $z'$ jumps. Writing $f = u+iv$ and $z = x+iy$ this is the pair of real :ref[line integrals]{to=vcalc.line-integrals}

$$
\int_\gamma f(z)\,dz = \int_\gamma (u\,dx - v\,dy) + i \int_\gamma (u\,dy + v\,dx) ,
$$

which is how it is computed in practice. It is also the limit of the Riemann sums

$$
\sum_j f(\zeta_j)(z_j - z_{j-1})
$$

over refining subdivisions $a = t_0 < \dots < t_N = b$, with $z_j = z(t_j)$ and $\zeta_j$ a point of the arc between $z_{j-1}$ and $z_j$; this is the form in which :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§11.3, Eq. (11.16), p. 477"} introduce the contour integral. For a piecewise $C^1$ path that is a small theorem rather than a restatement of the definition, and one line proves it: writing $z_j - z_{j-1} = \int_{t_{j-1}}^{t_j}z'\,dt$ turns the difference between the sum and the integral into $\sum_j \int_{t_{j-1}}^{t_j}\bigl(f(\zeta_j) - f(z(t))\bigr)z'(t)\,dt$, whose modulus is at most $L(\gamma)$ times the largest oscillation of $f \circ z$ over a subinterval, and that tends to $0$ with the mesh because $f\circ z$ is uniformly continuous on $[a,b]$. Nothing below uses the Riemann-sum form; it is recorded because it is how the integral is often defined.

Two further integrals along $\gamma$ are used below. With respect to arc length,

$$
\int_\gamma f\,\lvert dz\rvert = \int_a^b f\bigl(z(t)\bigr)\,\lvert z'(t)\rvert\,dt,
\qquad\text{so}\qquad
L(\gamma) = \int_\gamma \lvert dz\rvert
$$

is the **length** of $\gamma$. A closed contour is traversed in the **positive** sense when the region it encloses lies to its left, which for a circle about an interior point means counterclockwise, the direction of increasing polar angle. We write $\oint_\gamma$ for an integral over a closed contour.
:::

:::statement[Properties of the contour integral]{provenance=adapted src="ahlfors-1979:Ch. 4, §1.1, Eqs. (2), (3), (5), (6), (9), pp. 102–104, and §1.3, Thm 1 and the statement following it, pp. 106–107; rhb-2006:§24.9, Eq. (24.39), p. 849"}
Let $f$ be continuous on the path $\gamma$, with $z:[a,b]\to\mathbb{C}$.

1. **Linearity and subdivision.** $\int_\gamma (\alpha f + \beta g)\,dz = \alpha\int_\gamma f\,dz + \beta \int_\gamma g\,dz$ for $\alpha,\beta \in \mathbb{C}$, and if $\gamma$ is split into consecutive subarcs $\gamma_1,\dots,\gamma_n$ then $\int_\gamma f\,dz = \sum_k \int_{\gamma_k} f \, dz$.
2. **Invariance and reversal.** If $t = \varphi(\tau)$ is a piecewise $C^1$ increasing bijection of $[\alpha,\beta]$ onto $[a,b]$, then $z\circ\varphi$ gives the same integral: the contour integral depends on $\gamma$ as an oriented curve, not on its parametrization. Reversing the orientation changes the sign, $\int_{-\gamma} f\,dz = -\int_\gamma f\,dz$, whereas $\int_{-\gamma} f \,\lvert dz\rvert = \int_{\gamma} f\,\lvert dz\rvert$.
3. **The ML estimate.** If $\lvert f(z)\rvert \le M$ at every point of $\gamma$ and $L = L(\gamma)$, then

   $$
   \Bigl\lvert \int_\gamma f(z)\,dz \Bigr\rvert \;\le\; \int_\gamma \lvert f\rvert\,\lvert dz\rvert \;\le\; ML .
   $$

4. **Fundamental theorem.** Let $\Omega$ be an open set. The following are equivalent for $f$ continuous on $\Omega$:

   (a) $\int_\gamma f\,dz$ depends only on the endpoints of $\gamma$, for all paths $\gamma$ in $\Omega$;

   (b) $\oint_\gamma f \,dz = 0$ for every closed path $\gamma$ in $\Omega$;

   (c) $f = F'$ for some analytic $F$ on $\Omega$ (a **primitive**, or indefinite integral, of $f$).

   When they hold, $\int_\gamma f\,dz = F(z(b)) - F(z(a))$. If $\Omega$ is disconnected, read (a) with care: no path joins two different components, so (a) imposes a condition within each component and nothing between them, and the primitive of (c) is fixed only up to a separate constant on each component. The proof of (a) $\Rightarrow$ (c) handles this by working one component at a time.
5. **Powers.** For every integer $n \ge 0$ and every closed path $\gamma$, $\oint_\gamma (z-a)^n dz = 0$. The same holds for $n \le -2$ and every closed path avoiding $a$. For $n = -1$ it fails: on the positively oriented circle $C$ of radius $\rho$ about $a$,

   $$
   \oint_{C} \frac{dz}{z-a} = 2\pi i .
   $$
:::

:::idea{provenance=original}
Parts 1 and 2 are the chain rule and the substitution rule for real integrals, imported one real and one imaginary component at a time. Part 3 has one non-obvious ingredient: for a complex-valued integral over a real interval, $\lvert \int g\rvert \le \int \lvert g\rvert$ is not the triangle inequality for real integrals, because the modulus of a complex integral is not the integral of anything; the trick is to rotate the integral onto the positive real axis by a constant unimodular factor, after which taking real parts does the work. Part 4 is the two-variable statement that a line integral is path independent exactly when the integrand is an exact differential; the complex content is that "$f\,dz$ is exact" says that the potential satisfies the Cauchy-Riemann equations, so the potential is analytic with derivative $f$. Part 5 is then a corollary for $n \ne -1$, since $(z-a)^n$ has the obvious primitive; and the single exception $n = -1$ is a one-line computation that will turn out to carry almost all the later theory.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 4, §1.1, pp. 102–104 and §1.3, Thm 1 and pp. 107–108"}
**1.** Both claims are the corresponding statements for real integrals applied to real and imaginary parts, together with the fact that $\int_a^b c\,g\,dt = c\int_a^b g\,dt$ for a complex constant $c = \alpha + i\beta$: writing $g = g_1 + ig_2$, both sides equal $\int(\alpha g_1 - \beta g_2)dt + i\int(\alpha g_2 + \beta g_1)dt$.

**2.** By the real substitution rule applied to each component,

$$
\int_\alpha^\beta f\bigl(z(\varphi(\tau))\bigr)z'(\varphi(\tau))\varphi'(\tau)\,d\tau = \int_a^b f(z(t))z'(t)\,dt ,
$$

and the chain rule identifies $z'(\varphi(\tau))\varphi'(\tau)$ as the derivative of $z\circ\varphi$, so the left side is the integral over the reparametrized path. For $-\gamma$, parametrized by $w(t) = z(-t)$ on $[-b,-a]$, three factors of $-1$ appear and their product is what we want:

$$
\int_{-\gamma}f\,dz = \int_{-b}^{-a}f\bigl(z(-t)\bigr)\bigl(-z'(-t)\bigr)\,dt
= \int_{b}^{a} f\bigl(z(s)\bigr)\bigl(-z'(s)\bigr)(-ds)
= -\int_a^b f\bigl(z(s)\bigr)z'(s)\,ds ,
$$

one sign from the derivative $w'(t) = -z'(-t)$, one from $dt = -ds$ under $s = -t$, and one from the exchange of the limits $b, a$ into $a, b$: an odd number, hence $\int_{-\gamma}f\,dz = -\int_\gamma f\,dz$. With $\lvert dz\rvert$ the first of the three disappears, since $\lvert w'(t)\rvert = \lvert z'(-t)\rvert$ carries no sign, and the remaining two cancel, leaving $\int_{-\gamma}f\,\lvert dz\rvert = \int_\gamma f\,\lvert dz\rvert$.

**3.** First, for continuous $g$ on $[a,b]$ with $a \le b$ we show $\bigl\lvert\int_a^b g\,dt\bigr\rvert \le \int_a^b \lvert g\rvert\,dt$. If $\int_a^b g\,dt = 0$ there is nothing to prove. Otherwise put $\theta = \arg\int_a^b g\,dt$ and $c = e^{-i\theta}$; then by part 1,

$$
\Bigl\lvert \int_a^b g\,dt\Bigr\rvert = c\int_a^b g\,dt = \int_a^b cg\,dt = \operatorname{Re}\int_a^b cg\,dt = \int_a^b \operatorname{Re}(cg)\,dt \le \int_a^b \lvert cg\rvert \,dt = \int_a^b \lvert g\rvert\,dt,
$$

where the third equality holds because the left-hand side is real, the fourth because taking real parts commutes with a real integral, and the inequality because $\operatorname{Re} w \le \lvert w\rvert$ pointwise and $\lvert c\rvert = 1$. Applying this to $g(t) = f(z(t))z'(t)$ gives the first inequality of part 3, since $\lvert g \rvert = \lvert f(z(t))\rvert\lvert z'(t)\rvert$ is the integrand of $\int_\gamma \lvert f\rvert \lvert dz\rvert$. For the second, use the hypothesis $\lvert f\rvert \le M$ on $\gamma$:

$$
\int_\gamma \lvert f\rvert\,\lvert dz\rvert \le M\int_\gamma \lvert dz\rvert = ML .
$$

**4.** (a) $\Leftrightarrow$ (b). If the integral depends only on the endpoints and $\gamma$ is closed, then $\gamma$ and $-\gamma$ have the same endpoints, so $\int_\gamma f\,dz = \int_{-\gamma}f\,dz = -\int_\gamma f\,dz$, giving $\oint_\gamma f\,dz=0$. Conversely, if all closed integrals vanish and $\gamma_1,\gamma_2$ share their endpoints, then $\gamma_1$ followed by $-\gamma_2$ is closed, so by part 1 the two integrals agree.

(c) $\Rightarrow$ (a). If $f = F'$ with $F$ analytic, then on each smooth piece $t \mapsto F(z(t))$ is differentiable with derivative $F'(z(t))z'(t) = f(z(t))z'(t)$ by the chain rule; summing over the pieces and applying, to the real and to the imaginary part separately, the fundamental theorem of one-variable calculus gives $\int_\gamma f\,dz = F(z(b)) - F(z(a))$, which depends only on the endpoints.

(a) $\Rightarrow$ (c). Fix a point $z_0$ in a component of $\Omega$ and set $F(z) = \int_{\sigma} f\,dz$ along any path $\sigma$ in $\Omega$ from $z_0$ to $z$; by (a) this is well defined. To compute $\partial F/\partial x$ at $z$, take the last piece of $\sigma$ to be a horizontal segment, which is possible because $\Omega$ is open and so contains a disk about $z$: with $x$ as parameter, $F(z) = \text{const} + \int^x f(s + iy)\,ds$, so $\partial F/\partial x = f(z)$ by the fundamental theorem of calculus (using continuity of $f$). Choosing the last piece vertical instead gives $\partial F/\partial y = i f(z)$. Hence $F_x = -iF_y$, which is the Cauchy-Riemann condition in combined form, and $F_x = f$ is continuous; so by :ref[the sufficiency half of the Cauchy-Riemann theorem]{to=complex.cauchy-riemann}, $F$ is analytic with $F' = F_x = f$.

**5.** For $n \ge 0$, $(z-a)^n = \frac{d}{dz}\frac{(z-a)^{n+1}}{n+1}$ with the primitive analytic on all of $\mathbb{C}$, so (c) $\Rightarrow$ (b) of part 4 gives $0$. For $n \le -2$ the same primitive $(z-a)^{n+1}/(n+1)$ is analytic on $\mathbb{C}\setminus\{a\}$, which contains $\gamma$, so again the integral is $0$. For $n = -1$ the conclusion fails, and the direct computation on $z(t) = a + \rho e^{it}$, $0 \le t \le 2\pi$, shows it:

$$
\oint_C \frac{dz}{z-a} = \int_0^{2\pi}\frac{i\rho e^{it}}{\rho e^{it}}\,dt = \int_0^{2\pi} i\,dt = 2\pi i,
$$

independent of $\rho$ and of $a$. Read through part 4 in the direction (b) $\Rightarrow$ (c) this says something more: $1/(z-a)$ has no primitive on any open set containing a circle about $a$, since a primitive would force the integral to vanish. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Piecewise $C^1$* makes $z'$ integrable, so the defining formula means something, and gives the length as an integral. Continuous paths of infinite length (nowhere differentiable curves) have no contour integral in this sense; the natural weakening is to rectifiable paths, which :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 4, §1.2, pp. 104–105"} treats and which the elementary theory does not need.
- *Continuity of $f$ on $\gamma$* is what makes the integrand integrable. Nothing in parts 1 to 3 requires $f$ to be analytic, or even to be defined off $\gamma$: the ML estimate is a statement about continuous functions.
- *Analyticity of $F$, not just of $f$, is the content of part 4(c).* It is the primitive that must be single-valued and analytic on all of $\Omega$. The failure for $n=-1$ in part 5 is a failure of single-valuedness, not of differentiability: $\ln(z-a)$ has derivative $1/(z-a)$ on any cut plane, but no cut plane contains a circle around $a$.
- *Path dependence is the generic case.* For $f$ continuous but not analytic the integral usually does depend on the path, as the second example below shows; the discovery that for analytic $f$ it does not is :ref[Cauchy's theorem]{to=complex.cauchy-theorem}.
- *The ML bound can be attained*, so it is not merely a crude estimate; see part 3 of the examples.
:::

:::example[A primitive, and path dependence]{provenance=original}
1. *Using a primitive.* Let $\gamma$ be the arc of the unit circle from $1$ to $i$ traversed counterclockwise. Since $z^2$ has the entire primitive $z^3/3$, part 4 gives

   $$
   \int_\gamma z^2\,dz = \frac{i^3 - 1^3}{3} = \frac{-1 - i}{3} \approx -0.333333 - 0.333333\,i ,
   $$

   with no parametrization needed. Direct evaluation confirms it: $\int_0^{\pi/2} e^{2it}\,ie^{it}\,dt = \bigl[e^{3it}/3\bigr]_0^{\pi/2} = (e^{3i\pi/2} - 1)/3 = (-i-1)/3$.
2. *Path dependence of a non-analytic integrand.* Integrate $f(z) = \bar z$ from $0$ to $1+i$.
   - Along the straight segment $z = t(1+i)$, $0\le t\le 1$: $\bar z = t(1-i)$, $dz = (1+i)\,dt$, and $(1-i)(1+i) = 2$, so the integral is $\int_0^1 2t\,dt = 1$.
   - Along the two legs $0 \to 1 \to 1+i$: on the first, $z = t$ gives $\int_0^1 t\,dt = \tfrac12$; on the second, $z = 1+it$ gives $\int_0^1 (1-it)\,i\,dt = i - i^2\!\int_0^1 t\,dt = i + \tfrac12$. The total is $1 + i$.

   The two values differ, as they must: $\bar z$ satisfies no Cauchy-Riemann equation anywhere. Equivalently, around the closed triangle the integral is $(1+i) - 1 = i \ne 0$.
3. *The ML estimate, attained and applied.* On the unit circle $\lvert \bar z\rvert = 1$ and $L = 2\pi$, so $\lvert\oint \bar z\,dz\rvert \le 2\pi$. The exact value is $\oint_{\lvert z\rvert = 1}\bar z\,dz = \int_0^{2\pi} e^{-it}ie^{it}\,dt = 2\pi i$, of modulus exactly $2\pi$: here the bound is sharp. Used the other way, on the circle $\lvert z \rvert = R$ with $R>1$ we have $\lvert z^4+1\rvert \ge R^4 - 1$ by the triangle inequality, so

   $$
   \Bigl\lvert \oint_{\lvert z\rvert = R}\frac{dz}{z^4+1}\Bigr\rvert \le \frac{2\pi R}{R^4-1},
   $$

   which is $0.235619$ at $R = 3$ and $0.006284$ at $R = 10$, and tends to $0$ as $R \to \infty$. Estimates of exactly this shape are what let a large circular arc be discarded when a real integral is computed by contour methods (:ref[infinite integrals]{to=complex.infinite-integrals}).
:::

:::application{provenance=original}
In two-dimensional ideal flow with complex potential $w(z)$ and velocity field $\mathbf{v} = (u_1,u_2)$, the combination $\overline{w'(z)} = u_1 + iu_2$ packages the velocity, and for a closed contour $\gamma$

$$
\oint_\gamma w'(z)\,dz = \underbrace{\oint_\gamma (u_1\,dx + u_2\,dy)}_{\text{circulation}} + \; i \underbrace{\oint_\gamma (u_1\,dy - u_2\,dx)}_{\text{flux}} ,
$$

so one complex integral delivers both the circulation around a wing section and the net flux through the curve. The circulation is what the Kutta-Joukowski theorem converts into lift. For a point vortex at the origin, whose complex potential is a multiple of $\ln z$ and whose complex velocity is accordingly a multiple of $1/z$, part 5 evaluates the circulation around a *circle* centred on the vortex and shows it to be nonzero and independent of the radius. That the same value is obtained around every contour enclosing the vortex is a further step, needing either :ref[Cauchy's theorem]{to=complex.cauchy-theorem} in its deformation form or :ref[the winding number]{to=complex.winding-number}; part 5 on its own does not give it.

The same splitting appears in electromagnetism, where $\oint \mathbf{E}\cdot d\mathbf{l}$ and the flux of $\mathbf{E}$ across a curve are the real and imaginary parts of one contour integral of the complex field, and in the calculation of forces on conductors. Beyond that, the contour integral is the workhorse of the whole chapter: :ref[Cauchy's integral formula]{to=complex.cauchy-integral-formula} represents a function by one, :ref[the residue theorem]{to=complex.residue-theorem} evaluates them, and the ML estimate is the tool that makes the limiting arguments work.
:::
