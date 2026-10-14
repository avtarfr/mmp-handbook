---
id: dyn.lorenz-equations
title: The Lorenz equations
kind: application
level: core
summary: Collects what can be established about the Lorenz system by the standard tools -- its symmetry, its constant rate of phase-volume contraction, a trapping ellipsoid, the three equilibria and their eigenvalues, global stability of the origin for $r < 1$ by a Liapunov function, and the threshold $r = \sigma(\sigma+b+3)/(\sigma-b-1)$ at which the convective equilibria lose stability -- and shows why, for $\sigma = 10$, $b = 8/3$, $r = 28$, these results together leave no possibility except a strange attractor.
prereqs: [dyn.lyapunov-functions, dyn.linearization, dyn.hopf-bifurcation, dyn.one-dimensional-bifurcations, vcalc.divergence-theorem, linalg.eigenvalues-eigenvectors]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§9.0-§9.1 (the equations, their origin in convection and in the Malkus-Howard waterwheel, the Fourier amplitude equations and the Rayleigh number), pp. 301-311; §9.2 (symmetry, volume contraction by the divergence, exclusion of quasiperiodic solutions and of repellers, the fixed points $C^{\\pm}$, linear stability of the origin, the Liapunov function for $r<1$, and the stability range of $C^{\\pm}$ with the subcritical Hopf bifurcation at $r_H$), pp. 311-317; §9.3 (chaos on the strange attractor, the definitions of attractor and strange attractor, and Lorenz's infinite complex of surfaces), pp. 317-325; §9.4 (the Lorenz map and the instability of all closed orbits), pp. 326-330; §9.5 (the behaviour as $r$ varies, the homoclinic bifurcation at $r \\approx 13.926$ and transient chaos), pp. 330-335; §9.6 (synchronised chaos and signal masking, and the Liapunov function for the error dynamics), pp. 335-340"
    pages: "301-340"
    role: derivation context and the Rayleigh number; symmetry; volume contraction; the fixed points and their stability; the Liapunov function; $r_H$ and the subcritical Hopf bifurcation; the definitions of attractor and of strange attractor; the status of the Lorenz attractor as of 1994; the communications application
  - work: hirsch-smale-devaney-2013
    loc: "Ch. 14, §14.1 (the equations, the reduction from convection, the standing assumption $\\sigma > b+1$, sensitive dependence seen in two nearby solutions), pp. 305-308; §14.2 (the equilibria $Q^{\\pm}$, the linearisation and the eigenvalues at the origin, the symmetry, the Liapunov function $x^2 + \\sigma y^2 + \\sigma z^2$, the cubic for the eigenvalues at $Q^{\\pm}$ and the threshold $r^*$, the trapping ellipsoid $rx^2 + \\sigma y^2 + \\sigma(z-2r)^2$, Liouville's theorem and the zero volume of the limiting set), pp. 308-312; §14.3 (the definition of an attractor with the transitivity condition), pp. 312-313; §14.5 (sensitive dependence, density of periodic points, transitivity, and the definition of a chaotic map), pp. 324-326"
    pages: "305-326"
    role: the explicit Liapunov function and the line-by-line proof that it is strict for $r<1$; the trapping ellipsoid and its proof; the cubic characteristic polynomial at $Q^{\pm}$ and the route to $r^*$ by setting $\lambda = i\omega$; Liouville's theorem; the alternative definition of attractor
---

:::definition[The Lorenz system, attractors and strange attractors]{provenance=adapted src="strogatz-1994:§9.0, p. 301, §9.2, p. 311, and §9.3, pp. 324-325; hirsch-smale-devaney-2013:§14.1, p. 306, and §14.3, p. 312"}
The **Lorenz system** is the three-dimensional autonomous system

$$
\dot x = \sigma(y - x), \qquad
\dot y = r x - y - x z, \qquad
\dot z = x y - b z,
$$

with parameters $\sigma, r, b > 0$. Here $\sigma$ is the Prandtl number and $r$ the Rayleigh number; $b$ has no name and is fixed by the geometry of the convection cell. Hirsch, Smale and Devaney assume throughout, in addition, that $\sigma > b + 1$, and so do we wherever the stability of the convective equilibria is in question. Write $L$ for the vector field, so that the system is $\dot X = L(X)$.

*Where it comes from.* Lorenz obtained the system in 1963 by truncating a model of a fluid layer heated from below and cooled from above to three Fourier amplitudes: $x$ measures the strength of the convective overturning, $y$ the horizontal and $z$ the vertical temperature variation. The same three equations describe, exactly rather than approximately, the Malkus-Howard waterwheel -- a wheel with leaky cups on its rim, fed with water from above -- in which the mass distribution around the rim is expanded in a Fourier series and all but three amplitudes decouple. In that model $r$ is again a Rayleigh number, measuring the driving (gravity and inflow) against the dissipation (leakage and damping).

*Attractors.* Following Strogatz, a closed set $A$ in phase space is an **attractor** if

1. $A$ is invariant: every trajectory starting in $A$ remains in $A$ for all time;
2. $A$ attracts an open set: there is an open $U \supseteq A$ such that the distance from $X(t)$ to $A$ tends to $0$ as $t \to \infty$ for every $X(0) \in U$ (the largest such $U$ is the **basin of attraction**); and
3. $A$ is minimal: no proper subset of $A$ has both properties.

An attractor is **strange** if the motion on it shows sensitive dependence on initial conditions, as that is defined in :ref[Lyapunov exponents and sensitive dependence]{to=dyn.lyapunov-exponents}.
:::

:::statement[Elementary properties of the Lorenz system]{provenance=adapted src="strogatz-1994:§9.2, pp. 311-316; hirsch-smale-devaney-2013:§14.2, pp. 308-311"}
Let $\sigma, b, r > 0$.

1. **Symmetry.** The reflection $S(x, y, z) = (-x, -y, z)$ maps solutions to solutions: if $(x(t), y(t), z(t))$ solves the system, so does $(-x(t), -y(t), z(t))$. The $z$-axis is invariant, and on it $\dot z = -bz$, so every solution starting on it tends to the origin.
2. **Volume contraction.** $\nabla \cdot L = -(\sigma + 1 + b)$, a negative constant. Hence if $D$ is a region with smooth boundary and $V(t)$ is the volume of its image under the flow,

   $$
   \dot V = -(\sigma + 1 + b)\,V, \qquad\text{so}\qquad V(t) = V(0)\,e^{-(\sigma + 1 + b)t}.
   $$

   Every phase volume shrinks to zero exponentially, at a rate independent of position.
3. **A trapping region.** Put $W(x, y, z) = r x^2 + \sigma y^2 + \sigma (z - 2r)^2$, whose level sets are ellipsoids centred at $(0, 0, 2r)$. There is a $\nu^* > 0$ such that $\dot W < 0$ on every level set $W = \nu$ with $\nu \ge \nu^*$. Consequently every solution enters the solid ellipsoid $W \le \nu^*$ in finite time and stays there.
4. **Equilibria.** The origin is an equilibrium for all parameter values. For $r > 1$ there are two more,

   $$
   C^{\pm} = \bigl(\pm\sqrt{b(r-1)},\ \pm\sqrt{b(r-1)},\ r - 1\bigr),
   $$

   which are exchanged by the symmetry $S$ and which coalesce with the origin in a pitchfork bifurcation as $r \downarrow 1$.
5. **The origin.** Its eigenvalues are $-b$ and

   $$
   \lambda_{\pm} = \tfrac12\Bigl[-(\sigma + 1) \pm \sqrt{(\sigma+1)^2 - 4\sigma(1 - r)}\Bigr].
   $$

   For $0 \le r < 1$ both $\lambda_{\pm}$ are negative, so the origin is a sink; for $r > 1$ one is positive, so the origin is a saddle with a two-dimensional stable surface and a one-dimensional unstable curve.
6. **Global stability for $r < 1$.** If $r < 1$, every solution tends to the origin. In particular there are no closed orbits and no chaos below $r = 1$.
7. **The convective equilibria.** Assume $\sigma > b + 1$. The eigenvalues at $C^{\pm}$ are the roots of

   $$
   \lambda^3 + (1 + b + \sigma)\lambda^2 + b(\sigma + r)\lambda + 2b\sigma(r - 1) = 0,
   $$

   and $C^{\pm}$ are sinks for

   $$
   1 < r < r_H = \sigma\,\frac{\sigma + b + 3}{\sigma - b - 1}.
   $$

   At $r = r_H$ a :ref[Hopf bifurcation]{to=dyn.hopf-bifurcation} occurs. It is *subcritical*: the limit cycles involved are unstable and exist for $r < r_H$, so for $r$ slightly above $r_H$ there is no attractor near $C^{\pm}$.
8. **What volume contraction excludes.** The system has no quasiperiodic solutions, no repelling equilibria and no repelling closed orbits. Hence for $r > r_H$ no equilibrium and no closed orbit can be an attractor near $C^{\pm}$, while by part 3 no trajectory can escape to infinity.
:::

:::idea{provenance=original}
Parts 1, 2, 4 and 5 are direct computations. The two that carry the argument are the Liapunov function and the trapping ellipsoid, and both work the same way: choose a positive definite quadratic form, differentiate it along the flow, and watch the cubic terms cancel. They cancel because the only nonlinearities are $-xz$ in $\dot y$ and $+xy$ in $\dot z$, and the single product $xyz$ they generate appears twice with opposite signs whenever $y$ and $z$ are weighted equally. What is left is a quadratic form, and the whole question becomes whether that form is definite -- an exercise in completing the square. Part 7 then locates the stability boundary not by finding the roots of the cubic but by asking when a purely imaginary root is possible, which splits the cubic into two real equations for one unknown $\omega^2$ and leaves one condition on $r$.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§14.2, pp. 308-311; strogatz-1994:§9.2, pp. 312-316"}
1. *Symmetry.* Substituting $(-x, -y, z)$ into the right-hand side gives $(-\sigma(y-x), -(rx - y - xz), xy - bz)$, which is $(-\dot x, -\dot y, \dot z)$; so the reflected curve satisfies the same system. On $x = y = 0$ the first two equations give $\dot x = \dot y = 0$, so the $z$-axis is invariant, and there $\dot z = -bz$ has solution $z(t) = z(0)e^{-bt} \to 0$.

2. *Volume contraction.* Adding the three diagonal derivatives,

   $$
   \nabla\cdot L = \frac{\partial}{\partial x}\sigma(y-x) + \frac{\partial}{\partial y}(rx - y - xz) + \frac{\partial}{\partial z}(xy - bz) = -\sigma - 1 - b .
   $$

   By Liouville's theorem, $\dot V = \int_{D(t)} \nabla\cdot L\,dV$, and since the integrand is the constant $-(\sigma+1+b)$ this is $-(\sigma+1+b)V$. Integrating the resulting linear equation gives the stated exponential. (Liouville's theorem is itself the divergence theorem applied to the volume swept out by the boundary: in time $dt$ a patch $dA$ of the boundary sweeps $(L\cdot n)\,dt\,dA$, so $\dot V = \oint L\cdot n\, dA = \int \nabla\cdot L\,dV$; see :ref[the divergence theorem]{to=vcalc.divergence-theorem}.)

3. *The trapping ellipsoid.* Differentiate $W = rx^2 + \sigma y^2 + \sigma(z-2r)^2$ along the flow:

   $$
   \dot W = 2rx\,\sigma(y - x) + 2\sigma y\,(rx - y - xz) + 2\sigma(z - 2r)(xy - bz).
   $$

   The $xy$ terms contribute $2\sigma r xy + 2\sigma r xy - 4\sigma r xy = 0$, and the cubic terms contribute $-2\sigma xyz + 2\sigma xyz = 0$. What remains is

   $$
   \dot W = -2\sigma\bigl[rx^2 + y^2 + bz^2 - 2rbz\bigr]
   = -2\sigma\bigl[rx^2 + y^2 + b(z - r)^2 - br^2\bigr],
   $$

   by completing the square in $z$. So $\dot W < 0$ at every point outside the solid ellipsoid $E = \{rx^2 + y^2 + b(z-r)^2 \le br^2\}$. The function $W$ is continuous and $E$ is compact, so $W$ attains a maximum on $E$; let $\nu^*$ exceed it. Then the level set $W = \nu$ with $\nu \ge \nu^*$ lies entirely outside $E$, so $\dot W < 0$ there: no trajectory crosses it outwards, and the solid region $W \le \nu^*$ is positively invariant. Outside it, $\dot W$ is bounded above by a negative constant (again by compactness, applied to the region $\nu^* \le W \le \nu_0$ for any $\nu_0$), so $W$ decreases to $\nu^*$ in finite time.

4. *Equilibria.* Setting $\dot x = 0$ gives $y = x$; then $\dot y = 0$ gives $x(r - 1 - z) = 0$, and $\dot z = 0$ gives $x^2 = bz$. Either $x = 0$, forcing $z = 0$ and the origin; or $z = r - 1$ and $x^2 = b(r-1)$, which has real solutions precisely for $r > 1$ and gives $C^{\pm}$. The symmetry $S$ maps $C^+$ to $C^-$. As $r \downarrow 1$ both merge with the origin, and by part 5 the origin changes from sink to saddle there, which is a pitchfork bifurcation (see :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations} for the name).

5. *The origin.* The Jacobian of $L$, whose eigenvalues decide stability by :ref[linearization]{to=dyn.linearization}, is

   $$
   DL(x,y,z) = \begin{pmatrix} -\sigma & \sigma & 0 \\ r - z & -1 & -x \\ y & x & -b \end{pmatrix},
   $$

   which at the origin is block diagonal: the $z$ row and column decouple, contributing the eigenvalue $-b$, and the upper block $\bigl(\begin{smallmatrix} -\sigma & \sigma \\ r & -1\end{smallmatrix}\bigr)$ has trace $-(\sigma+1)$ and determinant $\sigma(1 - r)$, whence the stated $\lambda_{\pm}$. For $r < 1$ the determinant is positive and the trace negative, so both roots have negative real part; moreover the discriminant $(\sigma+1)^2 - 4\sigma(1-r) = (\sigma-1)^2 + 4\sigma r > 0$, so they are real and the origin is a stable node. For $r > 1$ the determinant is negative, so the roots are real of opposite sign and the origin is a saddle; counting the decoupled $-b$, it has two stable directions and one unstable one.

6. *Global stability for $r < 1$.* Take the positive definite function

   $$
   \Lambda(x, y, z) = x^2 + \sigma y^2 + \sigma z^2 .
   $$

   Along a solution,

   $$
   \dot\Lambda = 2x\sigma(y-x) + 2\sigma y(rx - y - xz) + 2\sigma z(xy - bz)
   = -2\sigma\bigl[x^2 + y^2 - (1 + r)xy\bigr] - 2\sigma b z^2,
   $$

   the cubic terms cancelling as in part 3. Write $Q(x,y) = x^2 - (1+r)xy + y^2$. Its discriminant as a quadratic form is $(1+r)^2 - 4$, which is negative exactly when $0 < r < 1$; a binary quadratic form with positive leading coefficient and negative discriminant is positive definite, so $Q(x,y) > 0$ for $(x,y) \ne (0,0)$. Hence $\dot\Lambda < 0$ except at the origin, where it vanishes: $\Lambda$ is a strict Liapunov function on all of $\mathbb{R}^3$, and by :ref[the Liapunov stability theorem]{to=dyn.lyapunov-functions} the origin is asymptotically stable with basin all of $\mathbb{R}^3$. (Strogatz uses $\Lambda/\sigma$, which is the same function rescaled.)

7. *The convective equilibria.* At $C^{\pm}$ we have $z = r-1$ and $y = x = \pm\sqrt{b(r-1)} =: \xi$, so

   $$
   DL(C^{\pm}) = \begin{pmatrix} -\sigma & \sigma & 0 \\ 1 & -1 & -\xi \\ \xi & \xi & -b \end{pmatrix}.
   $$

   Expanding $\det(\lambda I - DL)$ and using $\xi^2 = b(r-1)$ gives the stated cubic, whose coefficients depend only on $\xi^2$ and so are the same at $C^+$ and $C^-$.

   At $r = 1$ the cubic is $\lambda^3 + (1+b+\sigma)\lambda^2 + b(\sigma+1)\lambda = \lambda(\lambda + b)(\lambda + \sigma + 1)$, with roots $0$, $-b$, $-\sigma-1$, which are distinct because $\sigma > b+1$ gives $-\sigma - 1 < -b < 0$. For $r$ slightly above $1$ the roots move continuously; the constant term $2b\sigma(r-1)$ is now positive and the polynomial is positive for every $\lambda \ge 0$, so no root is real and non-negative, and all three roots are real and negative.

   A root can acquire a non-negative real part only by crossing the imaginary axis, and since no root is ever $0$ for $r > 1$, the crossing must be at $\lambda = \pm i\omega$ with $\omega \ne 0$. Substituting $\lambda = i\omega$ and separating real and imaginary parts:

   $$
   \text{(real)}\quad -(1+b+\sigma)\omega^2 + 2b\sigma(r-1) = 0,
   \qquad
   \text{(imaginary)}\quad -\omega^3 + b(\sigma + r)\omega = 0 .
   $$

   The second gives $\omega^2 = b(\sigma + r)$; substituting into the first and cancelling $b$,

   $$
   (\sigma + r)(1 + b + \sigma) = 2\sigma(r - 1)
   \;\Longrightarrow\;
   r(\sigma - b - 1) = \sigma(\sigma + b + 3)
   \;\Longrightarrow\;
   r = r_H .
   $$

   Since $\sigma > b+1$, this $r_H$ is positive and finite, and it is the smallest $r > 1$ at which a root reaches the imaginary axis; below it all roots keep negative real parts, so $C^{\pm}$ are sinks for $1 < r < r_H$.

   That the bifurcation at $r_H$ is a genuine Hopf bifurcation is stated without proof by Hirsch, Smale and Devaney; that it is *subcritical* -- so that the bifurcating cycles are unstable and lie on the side $r < r_H$ -- is a separate calculation that Strogatz also does not reproduce, attributing it to Marsden and McCracken (1976). We follow both and do not prove it here.

8. *Consequences of contraction.* A quasiperiodic solution would lie on an invariant torus, and the volume enclosed by that torus would be constant in time, contradicting part 2. A repelling equilibrium can be enclosed in a small sphere of initial conditions, and a repelling closed orbit in a thin tube around it; in either case the enclosed volume grows, again contradicting part 2. $\square$
:::

:::remark[Where the hypotheses are used, and what is still open]{provenance=original}
- *Positivity of $\sigma$, $b$, $r$* is used throughout; it is $\sigma > 0$ that makes $\Lambda$ in part 6 positive definite, and $b > 0$ that makes the $z$-axis contracting in part 1.
- *$r < 1$, strictly,* is the whole of part 6: at $r = 1$ the form $Q$ becomes $(x - y)^2$, which is only positive semi-definite, and $\dot\Lambda$ vanishes on the whole line $x = y$, $z = 0$. The conclusion survives at $r = 1$ by a further argument, but not by this one.
- *$\sigma > b + 1$* is used only in part 7, twice: to separate the three roots at $r = 1$, and to make $r_H$ positive. If $\sigma \le b+1$ the formula for $r_H$ is negative or undefined, and $C^{\pm}$ do not lose stability this way. The standard parameters $\sigma = 10$, $b = 8/3$ satisfy it with room to spare.
- *Volume contraction does not by itself produce chaos.* It gives a limiting set of zero volume, which could perfectly well be a point or a curve; indeed for $r < 1$ it is a point. Part 8 is what removes the simple alternatives, and only in combination with part 7.
- *Two definitions of "attractor".* We have followed Strogatz, whose third condition is minimality. Hirsch, Smale and Devaney instead require $\Lambda$ to be compact and invariant, to satisfy $\bigcap_{t\ge0}\varphi_t(U) = \Lambda$ for some open $U$ with $\varphi_t(U) \subseteq U$, and to be *transitive*: any two points of $\Lambda$ have neighbourhoods joined by a single solution curve. The two conditions have the same purpose -- to stop a union of several attractors from counting as one -- and both reject the same standard example, the interval $[-1,1]$ for $\dot x = x - x^3$, $\dot y = -y$. They are not equivalent in general, and we do not use either beyond that purpose.
- *What is not proved here or anywhere in our sources.* Nothing above shows that the set seen in simulations at $\sigma=10$, $b=8/3$, $r=28$ *is* an attractor in either sense. Strogatz, writing in 1994, records that no one had proved it. Hirsch, Smale and Devaney analyse instead a geometric model built to imitate the flow, prove that the model has a chaotic attractor, and report that the model was proved to describe the equations themselves only in 1999.
:::

:::method[The elementary analysis of a dissipative three-dimensional system]{provenance=adapted src="strogatz-1994:§9.2, pp. 311-317; hirsch-smale-devaney-2013:§14.2, pp. 308-311"}
The sequence of steps above is not special to Lorenz's equations; it is the standard opening for any polynomial system in $\mathbb{R}^3$.

1. **Look for symmetries.** A linear involution $S$ with $DS\,F = F\circ S$ halves the work: equilibria and orbits come in pairs, and any bifurcation creating a pair of equilibria from one is a pitchfork rather than a saddle-node.
2. **Compute $\nabla\cdot F$.** If it is a negative constant $-k$, all volumes decay like $e^{-kt}$, and you may immediately rule out quasiperiodicity and all repelling invariant sets.
3. **Find a trapping region.** Try a positive definite quadratic $W$ centred where the flow seems to live, differentiate along the flow, and choose the weights so that the cubic terms cancel. Complete the square in the remaining quadratic; the region where $\dot W \ge 0$ should come out bounded, and any sufficiently large sublevel set of $W$ then traps the flow.
4. **Find the equilibria and linearise.** Where the Jacobian is block triangular, read the eigenvalues off the blocks.
5. **Try the same quadratic as a Liapunov function** near the parameter value where the first equilibrium loses stability; this often gives global, not merely local, stability on one side of the threshold.
6. **Locate the stability boundary of the remaining equilibria** by substituting $\lambda = i\omega$ into the characteristic polynomial rather than solving it. Real and imaginary parts give two equations in $\omega^2$ and the parameter; eliminating $\omega^2$ gives the threshold.
7. **Count what is left.** If no equilibrium and no closed orbit can attract, and nothing escapes to infinity, the long-time behaviour has to be something else.
:::

:::example[The standard parameters $\sigma = 10$, $b = 8/3$]{provenance=original}
Take Lorenz's values $\sigma = 10$, $b = 8/3$. Then $\sigma - b - 1 = 19/3 > 0$, so the standing assumption holds, and

$$
r_H = \sigma\,\frac{\sigma + b + 3}{\sigma - b - 1} = 10\cdot\frac{47/3}{19/3} = \frac{470}{19} = 24.7368421\ldots
$$

*Volume.* The contraction rate is $\sigma + 1 + b = 41/3 = 13.6\overline{6}$, so phase volumes shrink by the factor $e^{-41/3} = 1.1605\times10^{-6}$ per unit of time; the half-life of a volume is $3\ln 2/41 = 0.050718$ time units. A blob of initial conditions of diameter $1$ has shrunk in volume by six orders of magnitude after one time unit, which is roughly one and a half circuits of the attractor.

*At $r = 28$, above $r_H$.* The equilibria are the origin and

$$
C^{\pm} = \bigl(\pm\sqrt{(8/3)\cdot 27},\ \pm\sqrt{72},\ 27\bigr) = (\pm 6\sqrt2,\ \pm 6\sqrt2,\ 27), \qquad 6\sqrt2 = 8.4852814 .
$$

At the origin the eigenvalues are $-b = -2.6\overline{6}$ and

$$
\lambda_{\pm} = \tfrac12\bigl[-11 \pm \sqrt{121 + 40\cdot 27}\bigr] = \tfrac12\bigl[-11 \pm \sqrt{1201}\bigr]
= 11.8277235,\ -22.8277235 ,
$$

a saddle with one unstable direction, as part 5 predicts for $r > 1$.

At $C^{\pm}$ the cubic of part 7 is

$$
\lambda^3 + \tfrac{41}{3}\lambda^2 + \tfrac{304}{3}\lambda + 1440 = 0 .
$$

Its roots, computed numerically, are

$$
\lambda_1 = -13.8545779, \qquad \lambda_{2,3} = 0.0939556 \pm 10.1945052\,i .
$$

The complex pair has positive real part, confirming that $r = 28$ lies above $r_H = 24.7368$. So each of $C^{\pm}$ is a saddle-focus with a one-dimensional stable manifold and a two-dimensional unstable one, and a trajectory near it spirals outwards within that unstable surface, taking $2\pi/10.1945052 = 0.6163$ time units per turn. (As a check on the cubic: the sum of its roots is $-13.8545779 + 2(0.0939556) = -13.6\overline{6} = -(1 + b + \sigma)$, and the product is $-1440 = -2b\sigma(r-1)$.)

*Putting the parts together.* At these parameters: no trajectory escapes, by part 3; the origin is a saddle and $C^{\pm}$ are saddle-foci, so no equilibrium attracts; there is no attracting closed orbit near $C^{\pm}$, because the Hopf bifurcation at $r_H$ is subcritical; there are no quasiperiodic motions and no repellers, by part 8; and every volume shrinks to zero. The only possibility left is that almost every trajectory approaches a set of zero volume on which the motion is aperiodic -- the strange attractor, whose sensitive dependence is quantified in :ref[Lyapunov exponents and sensitive dependence]{to=dyn.lyapunov-exponents} and whose fractional dimension is the subject of :ref[Fractals and dimension]{to=dyn.fractals}.
:::

:::application{provenance=adapted src="strogatz-1994:§9.1, pp. 302-311, §9.5, pp. 330-335, and §9.6, pp. 335-340"}
*Convection and the waterwheel.* The system's first use is as a caricature of Rayleigh-Benard convection: $r < 1$ is pure conduction with the fluid at rest, $1 < r < r_H$ is steady convection in rolls of one handedness or the other (the two being exchanged by the symmetry $S$, which is why the bifurcation at $r=1$ is a pitchfork), and $r > r_H$ is the irregular regime. Every statement above has a mechanical counterpart in the Malkus-Howard waterwheel, where $x$ is the angular velocity: at low inflow the wheel sits still, at moderate inflow it settles into steady rotation one way or the other, and above threshold it turns a few times, stalls, and reverses, erratically and forever. The same equations arise for a laser (the Maxwell-Bloch equations transform into them) and in models of geomagnetic dynamos, which is one reason the irregular reversals are suggestive.

*Why the parameter $r$ repays study.* Holding $\sigma = 10$, $b = 8/3$ and varying $r$ shows that the chaotic regime is neither the only nor the final behaviour. Below $r_H$ but above $r \approx 24.06$ a strange attractor coexists with the two stable equilibria, so the outcome depends on the initial condition and the system shows hysteresis as $r$ is swept. Below that, down to a homoclinic bifurcation near $r = 13.926$, there is *transient* chaos: trajectories rattle around irregularly for a long and unpredictable time before settling on $C^+$ or $C^-$. This is worth separating from chaos proper, because it shows that a system with only simple attractors can still be effectively unpredictable -- the reason a thrown die is a fair randomiser although it has six stable resting positions. For large $r$ the dynamics simplify again, to a globally attracting limit cycle for $r$ above a few hundred, corresponding to a waterwheel that rocks regularly back and forth.

*Chaos as a carrier.* A striking engineering use turns the sensitivity into an advantage. Cuomo and Oppenheim built two identical Lorenz circuits in the rescaled variables $u = x/10$, $v = y/10$, $w = z/20$, for which the equations read $\dot u = \sigma(v-u)$, $\dot v = ru - v - 20uw$, $\dot w = 5uv - bw$. The transmitter runs freely; the receiver runs the same equations except that the transmitted scalar $u(t)$ is substituted for its own first coordinate wherever that coordinate multiplies something in the last two equations. The error $e$ between the two states then obeys

$$
\dot e_1 = \sigma(e_2 - e_1), \qquad \dot e_2 = -e_2 - 20\,u(t)\,e_3, \qquad \dot e_3 = 5\,u(t)\,e_2 - b\,e_3,
$$

a linear system with a chaotic time-dependent coefficient. Take $E(e) = \tfrac12\bigl(\sigma^{-1}e_1^2 + e_2^2 + 4e_3^2\bigr)$. The two terms carrying $u(t)$ are $-20u e_2e_3$ and $+20u e_2 e_3$, which cancel, leaving

$$
\dot E = -\bigl(e_1^2 - e_1e_2\bigr) - e_2^2 - 4b e_3^2
= -\Bigl(e_1 - \tfrac12 e_2\Bigr)^2 - \tfrac34 e_2^2 - 4b e_3^2 < 0
$$

away from $e = 0$. So $E$ is a strict Liapunov function and the receiver locks onto the transmitter from any initial state, reconstructing all three coordinates from one. A message buried under a much louder chaotic signal can then be recovered by subtraction. The cancellation of the terms in $u$, which is the same small algebraic accident as in parts 3 and 6 above, is what makes this work.
:::
