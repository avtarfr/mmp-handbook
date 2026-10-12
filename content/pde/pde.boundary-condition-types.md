---
id: pde.boundary-condition-types
title: Types of boundary and initial condition
kind: table
level: core
summary: Defines the Dirichlet, Neumann, Robin, mixed, Cauchy and periodic conditions, tabulates which of them give a unique and stable solution for elliptic, parabolic and hyperbolic equations on open and on closed boundaries, and explains each verdict — with a proof of uniqueness for the elliptic case and the compatibility condition the Neumann problem needs.
prereqs: [pde.classification, vcalc.green-identities, vcalc.divergence-theorem]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§1.4, pp. 20–22: the initial conditions for the diffusion and wave equations, the three boundary conditions (D), (N), (R), the homogeneous/inhomogeneous distinction, and the physical readings for the vibrating string, for diffusion and for heat; §1.5 Exercise 4, pp. 27–28 (the Neumann compatibility condition); §4.1 Exercises 1 and 2, p. 92 (mixed conditions) and Exercise 4, p. 92 (periodic conditions); §4.3, pp. 92–93 (the Robin problem)"
    pages: "20-22, 27-28, 92-93"
    role: the definitions of the Dirichlet, Neumann and Robin conditions and their physical meaning; mixed and periodic conditions; the Neumann compatibility condition; the sign convention for the Robin coefficients and the radiation/absorption reading on which the sign dependence rests
  - work: arfken-2013
    loc: "§9.3, pp. 411–413: the three named classes of boundary condition with their electrostatic readings, Table 9.1 (relation between PDE class and boundary conditions), the remark that Cauchy data are Dirichlet plus Neumann and may therefore be inconsistent, the identification of initial conditions as a special case, and the Helmholtz caveat"
    pages: "411-413"
    role: the main table reproduced here, including the open/closed distinction and the individual verdicts
  - work: rhb-2006
    loc: "§20.6.2, pp. 702–705: the Dirichlet, Neumann and Cauchy conditions, the propagation of Cauchy data along characteristics, the over-determination when the boundary meets a characteristic twice, and Table 20.1; §20.7, p. 706: the uniqueness theorem for Poisson's equation and its proof by Green's first theorem"
    pages: "702-706"
    role: the condensed equation-type/boundary-type table and the qualification that uniqueness may hold only to within an additive constant; the uniqueness theorem and proof route for the elliptic case
  - work: hassani-2013
    loc: "Definitions 21.1.7 and 21.1.8 and Box 21.1.9, pp. 642–643, with the discussion of the diffusion and wave problems in the $x$–$t$ plane"
    pages: "642-643"
    role: the closed-hypersurface definitions of the Dirichlet and Neumann problems and the three-way correspondence between equation type and boundary condition
  - work: stakgold-holst-2011
    loc: "§8.1, Remark 3, p. 466; §8.3 introduction, pp. 489–490, on the elliptic Cauchy problem and the well-posedness of the pure boundary-value problem (8.3.1a)"
    pages: "466, 489-490"
    role: why characteristics make Cauchy data appropriate for hyperbolic but not for elliptic equations, and what replaces them
  - work: evans-2010
    loc: "§6.1.1, p. 294 (Dirichlet's boundary condition for a general second-order elliptic operator); §7.1.1, Eq. (1), pp. 349–350 (the initial/boundary-value problem for a parabolic equation: one boundary condition on the lateral boundary and one initial condition)"
    pages: "294, 349-350"
    role: the modern form in which the conditions are imposed for general elliptic and parabolic operators
---

:::definition[The six kinds of condition]{provenance=adapted src="strauss-2008:§1.4, pp. 20–22, and §4.1 Exercises 1 and 4, p. 92; arfken-2013:§9.3, pp. 411–412; hassani-2013:Definitions 21.1.7–21.1.8, pp. 642–643"}
Let the equation hold in a domain $D$ with boundary $\partial D$, let $\mathbf{n}$ be the outward unit normal and write $\partial u/\partial n = \mathbf{n}\cdot\nabla u$ for the outward normal derivative. On $\partial D$, or on the part of it under discussion, the condition is called

| Name | Condition | Prescribed data |
|---|---|---|
| **Dirichlet** | $u = g$ | the value of $u$ |
| **Neumann** | $\partial u/\partial n = g$ | the normal derivative of $u$ |
| **Robin** | $\partial u/\partial n + a\,u = g$ | a combination, with $a$ a given function |
| **Mixed** | Dirichlet on one part of $\partial D$, Neumann (or Robin) on another | one condition at each boundary point |
| **Cauchy** | $u = g$ **and** $\partial u/\partial n = h$ | both, at the same points |
| **Periodic** | $u$ and $\partial u/\partial n$ agree at identified boundary points | nothing; the domain is closed up |

A condition is **homogeneous** if the prescribed function vanishes, and **inhomogeneous** otherwise. An **initial condition** is a boundary condition imposed at one end of the range of the time variable: $u(x,0) = \varphi(x)$ for the diffusion and Schrödinger equations, and the pair $u(x,0) = \varphi(x)$, $u_t(x,0) = \psi(x)$ for the wave equation — which is Cauchy data on the surface $t = 0$. Dirichlet and Neumann conditions are the two cases in which Cauchy data are split; Robin interpolates between them, reducing to Neumann when $a \equiv 0$ and approaching Dirichlet as $a \to \infty$ with $g/a$ held fixed. Hassani defines the Dirichlet and Neumann boundary-value problems specifically as those in which the datum is given on a *closed* hypersurface, which is the case in which they are well posed for elliptic equations.

Physically, for a vibrating string held at its ends the condition is homogeneous Dirichlet; a free end sliding without resistance gives $u_x = 0$, a Neumann condition; an end attached to a spring obeying Hooke's law gives a Robin condition, through which the string exchanges energy with the spring; and an end moved in a prescribed way gives an inhomogeneous Dirichlet condition. For heat flow, a perfectly insulated boundary is Neumann with $g = 0$, a boundary in perfect contact with a reservoir at temperature $g$ is Dirichlet, and Newton cooling into an ambient temperature is Robin. In electrostatics, Dirichlet prescribes the potential on a conductor and Neumann prescribes the normal field, hence the surface charge density. Periodic conditions arise when the domain is physically a ring: diffusion in a closed circular tube of circumference $2l$, with arclength $-l \le x \le l$, carries the conditions $u(-l,t) = u(l,t)$ and $u_x(-l,t) = u_x(l,t)$.
:::

:::note[Which conditions suit which equation]{provenance=adapted src="arfken-2013:§9.3, Table 9.1 and the caveats, pp. 412–413; rhb-2006:§20.6.2, Table 20.1 and the uniqueness-to-within-a-constant qualification, p. 705; hassani-2013:Box 21.1.9, p. 643; strauss-2008:§4.3, Eqs. (1)–(2) and the sign discussion, pp. 92–93"}
The following is Arfken, Weber and Harris's table, for the three classes of second-order equation in two variables, with the prototypes Laplace or Poisson in $(x,y)$, the wave equation in $(x,t)$ and the diffusion equation in $(x,t)$. "Open" and "closed" refer to the boundary on which the data are given: a curve with endpoints, or a curve enclosing the region. Part of a closed boundary may lie at infinity, provided $u$ or $\partial u/\partial n$ is prescribed there.

| Conditions | Boundary | Elliptic | Hyperbolic | Parabolic |
|---|---|---|---|---|
| **Cauchy** | open | ill posed (unstable) | well posed | over-determined |
| **Cauchy** | closed | over-determined | over-determined | over-determined |
| **Dirichlet** | open | under-determined | under-determined | well posed, forwards in time only |
| **Dirichlet** | closed | well posed | many solutions | over-determined |
| **Neumann** | open | under-determined | under-determined | well posed, forwards in time only |
| **Neumann** | closed | well posed | many solutions | over-determined |

The entries have been relabelled for compactness. Arfken, Weber and Harris write, in place of "well posed", that the solution is unique and stable; in place of "over-determined", that the conditions are too restrictive; in place of "under-determined", that they are insufficient; in place of "ill posed (unstable)", that the results are unphysical because of instability; in place of "many solutions", that the solution is not unique; and in place of "forwards in time only", that the solution is unique and stable in one direction.

Reading off only the well-posed rows leaves three pairings, which are Riley, Hobson and Bence's Table 20.1 and, in $m$ variables, Hassani's Box 21.1.9. A hyperbolic equation takes Cauchy data on an open boundary. A parabolic equation takes one condition of Dirichlet or Neumann type, again on an open boundary. An elliptic equation takes one condition of Dirichlet or Neumann type on a closed boundary.

Robin and mixed conditions impose, like Dirichlet and Neumann, one scalar condition at each boundary point. For a **mixed** condition — Dirichlet on part of the boundary, Neumann or Robin on the rest — the table's verdicts carry over unchanged. For **Robin** the sign of the coefficient matters, and Strauss is explicit about why. He writes the one-dimensional conditions as $X' - a_0X = 0$ at $x = 0$ and $X' + a_lX = 0$ at $x = l$, with the two constants carrying opposite signs because the outward normal points left at one end and right at the other, and he reads $a_0, a_l > 0$ as radiation of energy, $a_0, a_l < 0$ as absorption and $a_0 = a_l = 0$ as insulation. He warns at the outset that, because of that asymmetry in the normal, each of the two constants may affect the eigenfunctions in the opposite way to the other. In the radiating case — $a \ge 0$ in the convention $\partial u/\partial n + a u = g$ — the elliptic verdicts do carry over, because the boundary term in the uniqueness proof below then has a sign. A sufficiently negative coefficient does not: it can put an eigenvalue of the associated problem at zero, and uniqueness on a closed boundary then fails. Example (a) below exhibits such a case, and shows what $a \ge 0$ buys. Periodic conditions are the case in which the boundary has been removed altogether by identifying its two parts, so for a parabolic or hyperbolic equation on a ring only the initial conditions remain to be given.

Both sources warn that the table simplifies. Riley, Hobson and Bence say the general question of which conditions are appropriate is complex and do not pursue it, and they qualify "appropriate" as giving a solution that is unique — sometimes only to within an additive constant — and well defined. Arfken, Weber and Harris call the part played by boundary conditions too complicated to analyse exactly within the scope of their book, say that their Table 9.1 oversimplifies in several respects, and give the Helmholtz equation $\nabla^2\psi \pm k^2\psi = 0$ as an example the table mis-describes: with Dirichlet conditions on a closed boundary it has solutions only for certain values of $k$, those being the eigenvalues (see :ref[the Helmholtz equation]{to=pde.helmholtz-equation}).
:::

:::remark[Why each verdict holds]{provenance=original}
The entries are not independent; most follow from two facts about characteristics and one counting principle.

- **Elliptic, closed, Dirichlet or Neumann: unique and stable.** The uniqueness theorem below says so, and its proof turns the problem into $\int_D|\nabla w|^2 = 0$ for the difference $w$ of two solutions. The elliptic Dirichlet and Neumann problems are therefore the prototype well-posed problems, as Stakgold and Holst put it for $-\Delta u = q$ in $\Omega$ with $u = f$ on the boundary.
- **Elliptic, closed, Cauchy: too restrictive.** Dirichlet data alone already fix the solution; the normal derivative on the boundary is then determined, not free. Prescribing it as well generally contradicts what the Dirichlet data imply. Arfken, Weber and Harris make exactly this point: since Dirichlet and Neumann conditions each give a unique solution, and the two solutions are different, Cauchy data — which are both at once — invite an inconsistency.
- **Elliptic, open, Cauchy: unstable.** This is Hadamard's example, worked out in :ref[the classification unit]{to=pde.classification}: for Laplace's equation in a half-plane there are solutions whose Cauchy data on the boundary line tend to zero while the solutions themselves blow up at every interior point. The absence of real characteristics, which one might expect to make the Cauchy problem harmless, does not save it.
- **Elliptic, open, Dirichlet or Neumann: insufficient.** An open arc leaves the solution unconstrained on the rest of the boundary, and an elliptic equation propagates nothing along curves; so the data simply do not reach the interior.
- **Hyperbolic, open, Cauchy: unique and stable.** Here there are two families of real characteristics. Cauchy data on an arc $C$ that is nowhere characteristic are carried along the characteristic of each family through each point of $C$, and the solution is determined in the region covered by both families. For the wave equation $u_{xx} - c^{-2}u_{tt} = 0$ the characteristics are $x \pm ct = \text{const}$, and data on the segment $t = 0$, $0 \le x \le L$ determine $u$ exactly in the triangle those lines cut out (see :ref[d'Alembert's solution]{to=pde.dalembert}).
- **Hyperbolic, closed, Dirichlet or Neumann: not unique; closed, Cauchy: too restrictive.** One datum per point is the wrong count for an equation needing two on an initial surface, and a closed boundary generally meets the same characteristic twice. Riley, Hobson and Bence note that a boundary curve crossing a characteristic more than once can over-determine the problem so that no solution exists, and that the cure is to relax the conditions on the offending parts of the curve from Cauchy to Dirichlet or Neumann.
- **Parabolic, open, Dirichlet or Neumann: unique and stable in one direction.** The standard parabolic problem is Evans's: the equation in $U\times(0,T]$, one condition on the lateral boundary $\partial U\times[0,T]$, and one initial condition on $U\times\{t=0\}$. In the $x$–$t$ plane this data set is an open curve — the bottom of a rectangle and its two sides — and it determines $u$ on the remaining, open side. "In one direction" means forward in time only: the backward problem is ill posed, because diffusion smooths, so reversing it amplifies small, high-frequency errors without bound.
- **Parabolic, anything, Cauchy: too restrictive; Dirichlet or Neumann on a closed boundary: too restrictive.** A parabolic equation is first order in time, so one condition per boundary point and one initial function are already enough; adding a terminal condition at $t = T$, which closing the boundary does, over-determines it.
:::

:::statement[Uniqueness for the elliptic Dirichlet and Neumann problems]{provenance=adapted src="rhb-2006:§20.7, Uniqueness theorem, p. 706"}
Let $V$ be a connected region with boundary $S$. (Riley, Hobson and Bence state the theorem for "a region $V$ and its boundary $S$" and do not say *connected*; the word is added here because the last step of their proof — $\nabla w = 0$, hence $w$ constant — needs it, as the remark below records.) Suppose $u$ is real-valued, that its first and second partial derivatives all exist and are continuous on $V \cup S$, and that

$$
\nabla^2 u = \rho \ \text{ in } V, \qquad\text{together with either}\quad u = f \ \text{ on } S \quad\text{or}\quad \frac{\partial u}{\partial n} = g \ \text{ on } S ,
$$

where $\rho$, $f$ and $g$ are prescribed. Then two functions satisfying all of this can differ by at most an additive constant. Under the Dirichlet condition that constant is forced to be zero, so the solution is unique; under the Neumann condition it is free, and the solution is unique only modulo constants, which is how Riley, Hobson and Bence state the theorem.
:::

:::idea{provenance=original}
Subtracting two solutions kills both the source and the data, leaving a harmonic function whose boundary value, or whose normal derivative, vanishes. Green's first identity converts the volume integral of $|\nabla w|^2$ into a boundary integral of $w\,\partial w/\partial n$ plus a volume integral of $w\nabla^2 w$. Each of the two boundary conditions kills the boundary term, and harmonicity kills the other; so the integral of a non-negative quantity vanishes, and the gradient must vanish identically.
:::

:::proof{provenance=adapted src="rhb-2006:§20.7, p. 706"}
Suppose $u_1$ and $u_2$ both satisfy the hypotheses, and set $w = u_1 - u_2$.

**Step 1 (the difference is harmonic).** Subtracting the two equations, $\nabla^2 w = \rho - \rho = 0$ in $V$.

**Step 2 (the difference has vanishing data).** In the Dirichlet case $u_1 = f = u_2$ on $S$, so $w = 0$ there; in the Neumann case $\partial u_1/\partial n = g = \partial u_2/\partial n$, so $\partial w/\partial n = 0$ there. The two cases are not mixed: whichever datum is prescribed, the corresponding quantity vanishes for $w$.

**Step 3 (Green's first identity).** Taking both scalar fields in :ref[Green's first identity]{to=vcalc.green-identities} to be $w$, which the assumed smoothness of $u_1$ and $u_2$ on $V\cup S$ permits,

$$
\int_V \Bigl( w\,\nabla^2 w + |\nabla w|^2 \Bigr)\,dV = \int_S w\,\frac{\partial w}{\partial n}\,dS .
$$

**Step 4 (both unwanted terms vanish).** The first term on the left vanishes by Step 1. The right-hand side vanishes by Step 2: the integrand is $w\,\partial w/\partial n$, and one of its two factors is identically zero on $S$ in either case. Hence

$$
\int_V |\nabla w|^2\,dV = 0 .
$$

**Step 5 (conclude).** The integrand is continuous and non-negative, so it vanishes identically: $\nabla w = 0$ throughout $V$. Hence $w$ takes a single value on each connected component of $V$, so $u_1$ and $u_2$ differ by a constant. With Dirichlet data $w$ is zero on $S$, which pins the constant at zero and gives $u_1 \equiv u_2$. With Neumann data nothing pins it, and two solutions may differ by any constant whatever. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and the Neumann problem's extra condition.**

- *Smoothness up to the boundary* is used in Step 3; Green's first identity needs $w$ differentiable in $V$ and integrable on $S$. Without it the boundary integral need not exist and the argument has no first line.
- *Realness* is used in Step 5, where $|\nabla w|^2 \ge 0$ is the whole argument. For a complex-valued $w$ one applies the same identity to $\bar w$ and $w$ instead.
- *Connectedness* is used in Step 5. On a region with two components, $w$ may be a different constant on each; with Dirichlet data each component touches $S$, so each constant is zero.
- *Uniqueness is not existence.* The theorem says a solution, if found by any means at all, is the only one; this is what licenses the method of images and every other trick that guesses a solution and verifies it (see :ref[the method of images]{to=green.method-of-images}).
- *The Neumann problem needs a compatibility condition.* For a solution of $\nabla^2 u = \rho$ in $V$ with $\partial u/\partial n = g$ on $S$ to exist at all, integrate the equation over $V$ and apply :ref[the divergence theorem]{to=vcalc.divergence-theorem} to $\nabla u$:

  $$
  \int_V \rho \,dV = \int_V \nabla\cdot(\nabla u)\,dV = \int_S \frac{\partial u}{\partial n}\,dS = \int_S g \,dS .
  $$

  So $\int_V\rho\,dV = \int_S g\,dS$ is *necessary*. If the data violate it, there is no solution whatever, and the table's verdict "unique, stable solution" for the elliptic Neumann problem must be read with that proviso and with the arbitrary constant of Step 5. Strauss sets precisely this calculation, for $\nabla^2 u = f$ with $\partial u/\partial n = 0$, as an exercise, and asks the reader for a physical interpretation without giving one; the following reading is therefore ours. For steady heat flow with $\rho$ a source density, the displayed identity says that the total heat generated inside $V$ must equal the total flux out through $S$, as it must if nothing is to accumulate. In Strauss's own case the boundary is insulated, so the flux out is zero and the identity reduces to the statement that the net heat generated must vanish.
:::

:::example{provenance=original}
**(a) A Robin problem, solved.** Steady heat conduction in a slab $0 < x < 1$ with no internal source satisfies $u'' = 0$. Suppose both faces exchange heat with surroundings, giving the Robin conditions

$$
u'(0) - 2u(0) = -2, \qquad u'(1) + u(1) = 4 .
$$

Every solution of $u''=0$ is $u = A + Bx$, so $u' = B$ and the conditions read $B - 2A = -2$ and $B + (A + B) = 4$, that is $A + 2B = 4$. From the first, $B = 2A - 2$; substituting, $A + 4A - 4 = 4$, so $A = \tfrac85$ and $B = \tfrac65$:

$$
u(x) = \frac{8}{5} + \frac{6}{5}x , \qquad u(0) = 1.6, \quad u(1) = 2.8 .
$$

Checking: $u'(0) - 2u(0) = 1.2 - 3.2 = -2$ and $u'(1) + u(1) = 1.2 + 2.8 = 4$. Two conditions, one at each end of an interval whose boundary is the pair of endpoints — a closed boundary in one dimension — give a unique solution, as the elliptic row of the table predicts.

*Why the sign of the Robin coefficient was needed.* In the convention $\partial u/\partial n + a u = g$ the outward normal is $-1$ at $x = 0$ and $+1$ at $x = 1$, so the two conditions above read $\partial u/\partial n + 2u = 2$ at the left end and $\partial u/\partial n + u = 4$ at the right: both have $a > 0$, Strauss's radiating case. Take instead $a = -2$ at both ends with zero data, that is $u'' = 0$ on $(0,1)$ with

$$
-u'(0) - 2u(0) = 0, \qquad u'(1) - 2u(1) = 0 .
$$

Then $u(x) = 1 - 2x$ satisfies both: $u' \equiv -2$, so the left condition is $2 - 2\cdot 1 = 0$ and the right is $-2 - 2\cdot(-1) = 0$. Since $u \equiv 0$ also satisfies them, uniqueness fails, and so the inhomogeneous problem is not solvable for every $g$. In Strauss's notation this is $a_0 = a_l = -2$, his absorbing case, and $1 - 2x$ is an eigenfunction of $-X'' = \lambda X$ with those conditions at eigenvalue $\lambda = 0$. With $a \ge 0$ nothing of the sort can happen. Running Steps 1 to 4 of the proof on the difference $w$ of two solutions, with $\partial w/\partial n = -a w$ on $S$, gives

$$
\int_V |\nabla w|^2\,dV = \int_S w\,\frac{\partial w}{\partial n}\,dS = -\int_S a\,w^2\,dS ,
$$

whose left side is non-negative and whose right side is non-positive; both therefore vanish, so $w$ is constant, and the constant is zero wherever $a > 0$ on $S$.

**(b) The Neumann obstruction, in one dimension.** Replace the Robin conditions by $u'(0) = u'(1) = 0$ and allow a source: $u'' = f$ on $(0,1)$. Integrating once gives $u'(1) - u'(0) = \int_0^1 f\,dx$, so the compatibility condition is $\int_0^1 f \,dx = 0$ — exactly the identity of the remark, with $S$ the two endpoints.

- *Incompatible data.* For $f \equiv 1$ we would need $0 = 1$. No solution exists, however smooth everything is.
- *Compatible data.* For $f(x) = \cos 2\pi x$ we have $\int_0^1 f = 0$. Integrating, $u' = \sin(2\pi x)/(2\pi)$, which vanishes at both ends as required, and $u(x) = -\cos(2\pi x)/(4\pi^2) + D$ for every constant $D$. So there are solutions, and they form a one-parameter family: uniqueness holds only up to the additive constant, as Step 5 says. Here $u(0) = D - 1/(4\pi^2) = D - 0.025330$ and $u(\tfrac12) = D + 0.025330$.

**(c) Counting conditions on the three prototypes.** On $0 < x < L$:

| Equation | Conditions needed | A standard choice |
|---|---|---|
| $u_{xx} + u_{yy} = 0$ in a rectangle | one per boundary point, all round | $u$ given on all four sides |
| $u_t = k u_{xx}$ | one initial function, one condition at each end | $u(x,0) = \varphi$, $u(0,t) = u(L,t) = 0$ |
| $u_{tt} = c^2u_{xx}$ | two initial functions, one condition at each end | $u(x,0) = \varphi$, $u_t(x,0) = \psi$, $u(0,t) = u(L,t) = 0$ |

The wave equation needs the extra initial function because it is second order in $t$; the mixed choice $u(0,t) = u_x(L,t) = 0$ for either evolution equation is legitimate and, for the diffusion equation, produces the eigenfunctions $\sin\bigl[(n+\tfrac12)\pi x/L\bigr]$, $n = 0, 1, 2, \dots$, instead of the pure sines $\sin(n\pi x/L)$ of the Dirichlet problem. These do satisfy both conditions: the sine vanishes at $x = 0$, and its derivative at $x = L$ is proportional to $\cos\bigl[(n+\tfrac12)\pi\bigr] = 0$. The eigenvalues are $\bigl[(n+\tfrac12)\pi/L\bigr]^2$: the half-integer multiples of $\pi/L$, squared, in place of the integer ones. Swapping the two ends, to $u_x(0,t) = u(L,t) = 0$, replaces these by the cosines $\cos\bigl[(n+\tfrac12)\pi x/L\bigr]$ with the same eigenvalues. On a ring of circumference $2l$ the periodic conditions $u(-l,t) = u(l,t)$, $u_x(-l,t) = u_x(l,t)$ replace the two end conditions, and the eigenvalues become $(n\pi/l)^2$ for $n = 0, 1, 2, \dots$, with the value $n = 0$ (a constant eigenfunction) present and every $n \ge 1$ doubled, since both $\cos(n\pi x/l)$ and $\sin(n\pi x/l)$ qualify.
:::

:::application{provenance=original}
Choosing the condition is the modelling step that decides whether a computation means anything, and the table is the checklist.

In a thermal or electrostatic finite-element calculation, Dirichlet conditions represent contact with a reservoir or a held potential, Neumann conditions represent insulation or a prescribed flux, and Robin conditions represent convective exchange with an ambient medium at a given temperature, with $a$ the heat-transfer coefficient divided by the conductivity; a pure Neumann problem will not converge unless the fluxes balance to within round-off, which is the compatibility condition of the remark appearing as a solver diagnostic, and the solution it returns is pinned only after one node is anchored, which is the additive constant.

In ocean and atmosphere models the lateral walls of a regional domain are open boundaries for a hyperbolic system, so the data must be posed in the characteristic variables that enter the domain and nothing may be imposed on those that leave; imposing a full set of values on all variables there is the closed-boundary Cauchy case of the table, and it produces spurious reflections, the numerical form of "too restrictive". Periodic conditions are used for the zonal direction of a global model, where the domain really is a circle, and in molecular-dynamics and spectral computations to remove boundaries entirely.

For the reverse problems — reconstructing a past temperature field, or an interior source from measurements on an enclosing surface — the table says what is being attempted: the backward parabolic problem and the elliptic Cauchy problem, both ill posed. They are solved only after regularisation, that is, after being replaced by a nearby well-posed problem, which is why such inversions always carry a smoothing parameter.
:::
