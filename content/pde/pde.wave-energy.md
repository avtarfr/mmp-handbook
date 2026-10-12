---
id: pde.wave-energy
title: Energy and uniqueness for the wave equation
kind: theorem
level: core
summary: Defines the energy of a solution of the wave equation, proves it is conserved on the line, in all of space and on a bounded domain with fixed or free boundary, and uses that conservation to prove that the initial/boundary-value problem has at most one solution.
prereqs: [pde.dalembert, vcalc.divergence-theorem, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§2.2 (Energy), the derivation of $dE/dt=0$ and Eq. (1), pp. 40–41; §9.1 (Conservation of energy), the pointwise identity Eq. (4), its integrated form Eq. (5) and the total energy Eq. (6), p. 230; §9.1 (Principle of causality), Eq. (7)–(12) and Figures 3–5, pp. 230–233; §9.1 Exercises 6 and 7, p. 234, which set the Dirichlet/Neumann and the Robin cases of the conservation law"
    pages: "40-41, 230-234"
    role: the energy of a string and the conservation proof on the line; the pointwise energy identity and the total energy in three dimensions; the frustum argument that derives causality from the same identity
  - work: evans-2010
    loc: "§2.4.3a, problem (45) and Theorem 5 (Uniqueness for wave equation) with its proof, p. 79; §2.4.3b, Theorem 6 (Finite propagation speed) and its proof, Eq. (46)–(47), pp. 80–81"
    pages: "79-81"
    role: the statement and proof route of the uniqueness theorem on a bounded domain, including the exact form of the initial/boundary-value problem; the local-energy proof of finite propagation speed, quoted here without proof
  - work: stein-shakarchi-2003
    loc: "Ch. 3, Exercise 10, p. 90: the total energy $E(t)=\\tfrac12\\rho\\int_0^L u_t^2 + \\tfrac12\\tau\\int_0^L u_x^2$ of a vibrating string with $c^2=\\tau/\\rho$, its conservation, and the resulting value $E(0)$ in terms of the initial data"
    pages: "90"
    role: the definition of the energy of a string of finite length and the value of the conserved quantity in terms of the initial data
---

:::definition[Energy, energy density and energy flux]{provenance=adapted src="strauss-2008:§2.2, Eq. (1), p. 40; strauss-2008:§9.1, Eq. (6), p. 230; stein-shakarchi-2003:Ch. 3, Exercise 10, p. 90"}
**The string.** For a string of tension $\tau$ and line density $\rho$, obeying $\rho u_{tt} = \tau u_{xx}$ with $c = \sqrt{\tau/\rho}$, put

$$
\mathrm{KE}(t) = \frac{\rho}{2}\int u_t^2\, dx, \qquad
\mathrm{PE}(t) = \frac{\tau}{2}\int u_x^2\, dx, \qquad
E(t) = \mathrm{KE}(t) + \mathrm{PE}(t) ,
$$

the integrals being over $\mathbb{R}$ for the infinite string and over $[0,L]$ for a string of length $L$. The name of the first is forced by $\tfrac12 mv^2$; the second is the potential energy stored in the stretching, and Strauss notes that for the mathematics only the total $E$ matters, so that a different constant multiple of $E$ would do as well. Stein and Shakarchi define exactly these two integrals on $[0,L]$ for a string with $c^2 = \tau/\rho$. Observe that $E \ge 0$, and $E = 0$ only if $u_t \equiv u_x \equiv 0$.

**General dimension.** For $u_{tt} = c^2\Delta u$ on a region of $\mathbb{R}^n$, the **energy density** and **energy flux** are

$$
e = \frac12\bigl(u_t^2 + c^2|\nabla u|^2\bigr), \qquad
\mathbf{S} = -c^2 u_t\,\nabla u ,
$$

and the **total energy** over a region $V$ is $E(t) = \int_V e\, dx$, which for $V = \mathbb{R}^3$ is Strauss's Eq. (6). Dividing the string's $E$ by $\rho$ turns it into this $E$ with $n=1$, since $\tau/\rho = c^2$; the physical energy of the string is $\rho$ times the quantity used here. For the string the flux is $S = -\tau u_x u_t$ (after multiplying by $\rho$), which is exactly the rate at which the piece of string to the left of $x$ does work on the piece to the right: the transverse force it exerts is $-\tau u_x$ and the velocity of the point of application is $u_t$.
:::

:::statement[Local energy identity]{provenance=adapted src="strauss-2008:§9.1, Eq. (4) and Eq. (7), p. 230"}
Let $u$ be of class $C^2$ on an open set of $\mathbb{R}^n\times\mathbb{R}$. Then, identically,

$$
\bigl(u_{tt} - c^2\Delta u\bigr)\, u_t \;=\; \frac{\partial e}{\partial t} + \nabla\cdot\mathbf{S}
\qquad\text{with } e = \tfrac12\bigl(u_t^2 + c^2|\nabla u|^2\bigr),\ \ \mathbf{S} = -c^2u_t\nabla u .
\tag{E}
$$

In particular, if $u$ solves the wave equation then

$$
\frac{\partial e}{\partial t} + \nabla\cdot \mathbf{S} = 0 ,
$$

a conservation law of exactly the form of the :ref[continuity equation]{to=vcalc.divergence-theorem}: energy is neither created nor destroyed, only transported, at the rate $\mathbf{S}$ through each surface. Strauss writes the same identity as $\partial_t e = c^2\nabla\cdot(u_t\nabla u)$ and, in three dimensions, as the statement that a certain four-component field has vanishing four-dimensional divergence.
:::

:::proof{provenance=original}
Expand both terms on the right. By the product rule,

$$
\frac{\partial e}{\partial t} = u_t u_{tt} + c^2\,\nabla u\cdot\nabla u_t ,
$$

the second term because $\partial_t\tfrac12|\nabla u|^2 = \nabla u\cdot\partial_t\nabla u$ and the mixed partials of a $C^2$ function may be taken in either order. By the product rule for the divergence,

$$
\nabla\cdot\mathbf{S} = -c^2\bigl(\nabla u_t\cdot\nabla u + u_t\,\Delta u\bigr) .
$$

Adding, the two $c^2\nabla u\cdot\nabla u_t$ terms cancel and what is left is $u_t(u_{tt} - c^2\Delta u)$. $\square$
:::

:::statement[Conservation of energy on the line]{provenance=adapted src="strauss-2008:§2.2, Eq. (1) and the derivation above it, pp. 40–41"}
Let the string have constant tension $\tau>0$ and line density $\rho>0$, so that $c = \sqrt{\tau/\rho}$ and the equation $u_{tt}=c^2u_{xx}$ is the same as $\rho u_{tt} = \tau u_{xx}$. Let $\varphi \in C^2(\mathbb{R})$ and $\psi \in C^1(\mathbb{R})$ vanish outside an interval $\{|x| \le R\}$, and let $u$ be what :ref[d'Alembert's formula]{to=pde.dalembert} delivers from that data. Then

$$
E(t) = \frac12\int_{-\infty}^{\infty}\bigl(\rho\, u_t^2 + \tau\, u_x^2\bigr)\, dx
$$

is finite and independent of $t$. Its value is $E(0) = \tfrac12\int(\rho\psi^2 + \tau\varphi'^2)\,dx$, the same expression in the initial data that Stein and Shakarchi give for the conserved energy of a string on $[0,L]$.
:::

:::idea{provenance=original}
Multiply the equation by the velocity $u_t$. On the left that is force times velocity, which is power; on the right, by the identity (E), it is the time derivative of the energy density plus the divergence of a flux. So integrating over all of space leaves only the flux through the boundary, and compact support kills it. The one technical point is the licence to differentiate under the integral sign, which the finite propagation speed of :ref[d'Alembert's formula]{to=pde.dalembert} supplies: for times in a bounded interval the integrand lives inside one fixed bounded interval of $x$, so the integral is really over a compact set.
:::

:::proof{provenance=adapted src="strauss-2008:§2.2, pp. 40–41"}
Fix $T > 0$ and work for $0 \le t \le T$.

**Step 1 (the integrand has fixed compact support).** By the causality statement of :ref[d'Alembert's formula]{to=pde.dalembert}, $u$ vanishes identically on the open set $\{|x| > R + ct,\ t>0\}$, hence so do all its derivatives there. Set $R_T = R + cT$. If $|x| \ge R_T$ and $0 \le t < T$ then $|x| \ge R + cT > R + ct$, so $(x,t)$ lies in that open set and $u_t = u_x = 0$ there; at $t = T$ the same holds by continuity of $u_t$ and $u_x$. So $u_t = u_x = 0$ on the whole of $\{|x| \ge R_T,\ 0 \le t \le T\}$, endpoints included, and

$$
E(t) = \frac12\int_{-R_T}^{R_T}\bigl(\rho u_t^2 + \tau u_x^2\bigr)\, dx ,
$$

a finite integral over a fixed compact interval.

**Step 2 (differentiating).** The integrand and its $t$-derivative are continuous on the compact rectangle $[-R_T,R_T]\times[0,T]$, because $u \in C^2$. So :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} applies:

$$
\frac{dE}{dt} = \int_{-R_T}^{R_T}\bigl(\rho\, u_t u_{tt} + \tau\, u_x u_{xt}\bigr)\, dx .
$$

**Step 3 (moving one derivative).** Integrate the second term by parts, which is legitimate since $u_x$ and $u_{xt}$ are continuous:

$$
\int_{-R_T}^{R_T} \tau\, u_x u_{xt}\, dx
= \Bigl[\tau\, u_x u_t\Bigr]_{-R_T}^{R_T} - \int_{-R_T}^{R_T} \tau\, u_{xx} u_t\, dx .
$$

The bracket vanishes: by Step 1 both $u_x$ and $u_t$ are zero at the two endpoints $x = \pm R_T$. (This is the only place where the compact support of the data is used.)

**Step 4 (the equation).** Therefore

$$
\frac{dE}{dt} = \int_{-R_T}^{R_T} u_t\bigl(\rho\, u_{tt} - \tau\, u_{xx}\bigr)\, dx = 0 ,
$$

since $\rho u_{tt} = \tau u_{xx}$ pointwise, which is the equation $u_{tt}=c^2u_{xx}$ multiplied by $\rho$, using $c^2 = \tau/\rho$. As $T$ was arbitrary, $E$ is constant on $[0,\infty)$.

For $t<0$, apply what has just been proved to $\check u(x,t) = u(x,-t)$. By the time-reversal remark of :ref[d'Alembert's formula]{to=pde.dalembert}, $\check u$ solves the same equation with the data $(\varphi, -\psi)$, which again vanish outside $\{|x|\le R\}$; and the energy of $\check u$ at time $t$ is the energy of $u$ at time $-t$, because $E$ depends on $u$ only through $u_t^2$ and $u_x^2$ and the sign that $t\mapsto -t$ puts on $u_t$ is squared away. So $E$ is constant on $(-\infty,0]$ too, and the two constants agree at $t=0$. Evaluating there, where $u_t = \psi$ and $u_x = \varphi'$, gives the stated value. $\square$
:::

:::statement[Conservation on a bounded domain]{provenance=adapted src="strauss-2008:§9.1, Eq. (4)–(6), p. 230, and §9.1 Exercises 6–7, p. 234; evans-2010:§2.4.3a, the computation of $\dot E$ in the proof of Thm 5, p. 79"}
Let $V \subseteq \mathbb{R}^n$ be a bounded open region with piecewise $C^1$ boundary $\partial V$ and outward unit normal $\hat{\mathbf{n}}$, let $T>0$, and let $u \in C^2(\overline V\times[0,T])$ satisfy $u_{tt} = c^2\Delta u$ in $V\times(0,T)$. Then, with $E(t) = \int_V e\,dx$,

$$
\frac{dE}{dt} = c^2\oint_{\partial V} u_t\,\frac{\partial u}{\partial n}\; dS
\qquad (0 < t < T),
$$

where $\partial u/\partial n = \hat{\mathbf{n}}\cdot\nabla u$. Consequently $E$ is constant in each of the following cases:

- **fixed boundary** (Dirichlet) $u = 0$ on $\partial V\times[0,T]$, because then $u_t = 0$ there;
- **free boundary** (Neumann) $\partial u/\partial n = 0$ on $\partial V\times[0,T]$;
- more generally whenever $u_t\,\partial u/\partial n$ integrates to zero over $\partial V$ at each time.

For an absorbing (Robin) condition $\partial u/\partial n + b\, u_t = 0$ with a constant $b > 0$, the same formula gives $dE/dt = -c^2 b\oint_{\partial V} u_t^2\, dS \le 0$: the energy decreases, and the boundary is a sink. Strauss sets both of these as exercises (§9.1, Exercises 6 and 7, p. 234) after deriving the conservation law (4)–(6) on p. 230; the computation below is the one his derivation indicates.
:::

:::proof{provenance=original}
Since $u \in C^2(\overline V\times[0,T])$ and $V$ is bounded, $e$ and $\partial e/\partial t$ are continuous on the compact set $\overline V\times[0,T]$. That licenses differentiating under the integral sign. The fixed-limit theorem of :ref[differentiation under the integral sign]{to=found.differentiation-under-integral} is stated there for an integral over a real interval $[a,b]$, so for $n\ge2$ we use not the statement but its proof, which transfers verbatim: by the mean value theorem each difference quotient $\bigl(e(x,t+h)-e(x,t)\bigr)/h$ equals $\partial e/\partial t$ at some intermediate time; uniform continuity of $\partial e/\partial t$ on the compact set $\overline V\times[0,T]$ makes those values converge to $\partial e/\partial t(x,t)$ uniformly in $x$; and integrating an error of size $\varepsilon$ over a set of finite volume $|V|$ costs at most $|V|\varepsilon$. Nothing else about $[a,b]$ was used. Hence

$$
\frac{dE}{dt} = \int_V \frac{\partial e}{\partial t}\, dx
= \int_V \bigl(u_t u_{tt} + c^2\nabla u\cdot\nabla u_t\bigr)\, dx .
$$

By the identity (E) the integrand equals $u_t(u_{tt}-c^2\Delta u) - \nabla\cdot\mathbf{S} = -\nabla\cdot\mathbf{S}$, the first term vanishing because $u$ solves the equation in $V$. The field $\mathbf{S} = -c^2u_t\nabla u$ is $C^1$ on $\overline V$, so the :ref[divergence theorem]{to=vcalc.divergence-theorem} applies:

$$
\frac{dE}{dt} = -\int_V \nabla\cdot\mathbf{S}\, dx = -\oint_{\partial V}\mathbf{S}\cdot\hat{\mathbf{n}}\, dS
= c^2\oint_{\partial V} u_t\,\frac{\partial u}{\partial n}\, dS .
$$

For the Dirichlet case, $u(\cdot,t) = 0$ on $\partial V$ for every $t$, so differentiating in $t$ at a fixed boundary point gives $u_t = 0$ there and the integrand vanishes. For the Neumann case $\partial u/\partial n = 0$ and the integrand vanishes again. For the Robin case substitute $\partial u/\partial n = -b u_t$. $\square$
:::

:::statement[Uniqueness for the initial/boundary-value problem]{provenance=adapted src="evans-2010:§2.4.3a, problem (45) and Theorem 5, p. 79"}
Let $V \subseteq \mathbb{R}^n$ be a bounded open set with smooth boundary, let $T>0$, and write

$$
V_T = V\times(0,T], \qquad \Gamma_T = \overline{V_T}\setminus V_T ,
$$

so $\Gamma_T$ consists of the bottom $\overline V\times\{t=0\}$ together with the side $\partial V\times[0,T]$. Given $f$ on $V_T$, $g$ on $\Gamma_T$ and $h$ on $V\times\{t=0\}$, consider

$$
u_{tt} - c^2\Delta u = f \ \text{ in } V_T, \qquad u = g \ \text{ on } \Gamma_T, \qquad u_t = h \ \text{ on } V\times\{t=0\} .
$$

There is **at most one** $u \in C^2(\overline{V_T})$ solving this problem.

This is Evans's Theorem 5, which he states for $c=1$; the substitution $s = ct$ turns $u_{tt} = c^2\Delta u$ into $u_{ss} = \Delta u$ and carries one version into the other. Note how Evans packages the data: the single function $g$ on $\Gamma_T$ prescribes *both* the initial displacement (on the bottom) and the boundary values (on the side), so Dirichlet boundary conditions are built into the formulation, and $h$ prescribes the initial velocity. Nothing is assumed about $f$ beyond its being the same for the two solutions compared.
:::

:::idea{provenance=original}
Uniqueness for a linear problem means that the only solution with zero data is zero. The difference of two solutions has zero source, vanishes on the whole of $\Gamma_T$ — so in particular on the side, where it also has zero time derivative — and starts with zero velocity. Its energy is therefore zero at $t=0$ and conserved, and an energy of zero forces the velocity and the gradient to vanish everywhere. A function whose gradient vanishes at all times and which starts at zero is identically zero.
:::

:::proof{provenance=adapted src="evans-2010:§2.4.3a, proof of Thm 5, p. 79"}
Let $u$ and $\tilde u$ both solve the problem and put $w = u - \tilde u$. Subtracting the two problems, and using that the equation and the boundary conditions are linear and the data identical,

$$
w_{tt} - c^2\Delta w = 0 \ \text{ in } V_T, \qquad w = 0 \ \text{ on } \Gamma_T, \qquad w_t = 0 \ \text{ on } V\times\{t=0\} .
$$

**Step 1 (the energy is conserved).** Let $E(t) = \tfrac12\int_V\bigl(w_t^2 + c^2|\nabla w|^2\bigr)dx$. Because $w = 0$ at every point of the side $\partial V\times[0,T]$, we have $w_t = 0$ there as well. Since $w \in C^2(\overline{V_T})$ and $\partial V$ is smooth, the previous statement applies with the Dirichlet alternative, so $E$ is constant on $[0,T]$.

**Step 2 (it starts at zero).** On the bottom, $w(\cdot,0) = 0$ throughout $V$, so $\nabla w(\cdot,0) = 0$ there, and $w_t(\cdot,0) = 0$ by hypothesis. Hence $E(0) = 0$, and by Step 1, $E(t) = 0$ for all $0 \le t \le T$.

**Step 3 (from zero energy to zero function).** The integrand of $E$ is continuous and non-negative, and its integral vanishes, so it vanishes identically: a continuous non-negative function with zero integral is zero, since otherwise it would be bounded below by a positive constant on some ball. Therefore

$$
w_t \equiv 0 \quad\text{and}\quad \nabla w \equiv 0 \qquad\text{in } V_T .
$$

**Step 4 (integrating).** Fix $x \in V$. Then $t\mapsto w(x,t)$ has zero derivative on $[0,T]$ and $w(x,0)=0$, so $w(x,t) = 0$ for all $t$. Hence $w \equiv 0$ in $V_T$, that is $u = \tilde u$. $\square$
:::

:::note[The same method gives finite propagation speed]{provenance=adapted src="evans-2010:§2.4.3b, Thm 6 and its proof, pp. 80–81; strauss-2008:§9.1, pp. 230–233"}
Energy also reproves causality, in any dimension and with no solution formula. Fix $x_0 \in \mathbb{R}^n$, $t_0 > 0$ and let $K(x_0,t_0) = \{(x,t) : 0\le t\le t_0,\ |x-x_0|\le c(t_0 - t)\}$ be the backward wave cone with apex $(x_0,t_0)$. Evans's Theorem 6 (stated for $c=1$) says: if $u \in C^2$ solves $u_{tt} = c^2\Delta u$ in $\mathbb{R}^n\times(0,\infty)$ and $u = u_t = 0$ on the ball $B(x_0,ct_0)$ at $t=0$, then $u \equiv 0$ in $K(x_0,t_0)$. The proof applies the energy argument to the *local* energy $e(t) = \tfrac12\int_{B(x_0,c(t_0-t))}(u_t^2 + c^2|\nabla u|^2)dx$ over the shrinking ball; differentiating produces a boundary term from the moving boundary, and the Cauchy–Schwarz inequality shows that it cannot be positive, so $e$ is non-increasing from $e(0)=0$. Strauss reaches the same conclusion by integrating the identity (E) over a cone frustum in four-dimensional space-time and checking that the integral over the slanted side has a sign (his Eq. (7)–(12) and Figures 3–5). We state the result and do not prove it here; both arguments are short, and both are in the cited pages. In one dimension it is the causality statement proved from the formula in :ref[d'Alembert's formula]{to=pde.dalembert}.
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- *$u \in C^2$ up to the boundary.* Used three times: to differentiate $E$ under the integral sign, to integrate by parts or apply the divergence theorem, and to interchange mixed partials in the identity (E). Nothing weaker will do for this argument, though the conclusions survive for weak solutions by other means (:ref[energy estimates]{to=pde.energy-estimates}).
- *Compact support, or a boundary condition.* On an unbounded domain some control at infinity is indispensable, since otherwise $E$ need not even be finite: for the travelling wave $u = \sin(x-ct)$ on $\mathbb{R}$ the energy density is $\tfrac12(c^2\cos^2 + c^2\cos^2)$, whose integral diverges. Strauss assumes the data vanish outside a bounded interval for exactly this reason in one dimension, and in three dimensions asks that the derivatives of $u$ tend to zero as $|x|\to\infty$ "in an appropriate sense"; the hypothesis used above, that the data have compact support, is one concrete way to secure that, and finite propagation speed then keeps the support compact at every later time.
- *The boundary condition must not pump energy in.* The boundary term $c^2\oint u_t\,\partial u/\partial n\, dS$ is the power delivered through $\partial V$. Dirichlet and Neumann conditions make it vanish; the Robin condition with $b>0$ makes it negative. With $b<0$ the energy can grow, and the proof of uniqueness collapses — not because uniqueness is then false, but because this argument no longer reaches it.
- *Energy controls derivatives, not the function.* $E = 0$ gives $w_t = \nabla w = 0$, and only Step 4 turns that into $w = 0$. The step uses the initial condition, which is why the Neumann problem for the wave equation is still uniquely solvable even though $\nabla w \equiv 0$ leaves a constant undetermined at each fixed time: the constant is pinned at $t=0$. By contrast, in the Neumann problem for Laplace's equation, where there is no time variable to pin it down, an additive constant genuinely survives.
- *Why not a maximum principle?* For the heat equation, uniqueness follows from the maximum principle (:ref[maximum principle for the heat equation]{to=pde.heat-maximum-principle}). The wave equation has no maximum principle: on $V=(0,L)$ with $\varphi\equiv 0$, $u=0$ at both ends and $\psi>0$ inside, the solution is positive for small $t>0$, so its maximum over $\overline{V_T}$ is attained at a point off $\Gamma_T$, while $\max_{\Gamma_T}u=0$. So energy is the natural substitute, and it is what generalises to variable coefficients and to nonlinear wave equations.
- *Conserved, not merely bounded.* The wave equation's energy is exactly constant, whereas a diffusion's decays. That is the quantitative form of time reversibility, and it is why wave solutions do not forget their initial data.
:::

:::example[A vibrating string, energy mode by mode]{provenance=original}
Take a string of length $L$ with both ends fixed and write a finite superposition of standing waves (the normal modes, derived in :ref[standing waves and normal modes]{to=pde.vibrating-string-modes}; here we simply write them down and check them),

$$
u(x,t) = \sum_{n=1}^{N} \sin\frac{n\pi x}{L}\Bigl(A_n\cos\omega_n t + B_n\sin\omega_n t\Bigr),
\qquad \omega_n = \frac{n\pi c}{L},
$$

which satisfies $\rho u_{tt} = \tau u_{xx}$ and $u(0,t)=u(L,t)=0$: each term is a product $X_n(x)T_n(t)$ with $X_n = \sin(n\pi x/L)$ vanishing at $x=0,L$, and $T_n'' = -\omega_n^2 T_n$ matches $c^2X_n''/X_n = -c^2(n\pi/L)^2 = -\omega_n^2$, so $u_{tt}=c^2u_{xx}$ term by term.

1. *The energy, computed.* Insert this into $E = \tfrac12\int_0^L(\rho u_t^2 + \tau u_x^2)dx$. Both $\{\sin(n\pi x/L)\}$ and $\{\cos(n\pi x/L)\}$ are orthogonal on $[0,L]$, with $\int_0^L\sin^2(n\pi x/L)dx = \int_0^L\cos^2(n\pi x/L)dx = L/2$, so all cross terms in $n \neq m$ drop out and
 $$
 E = \frac{L}{4}\sum_{n=1}^N\Bigl[\rho\,\omega_n^2\bigl(A_n\sin\omega_nt - B_n\cos\omega_nt\bigr)^2 + \tau\Bigl(\frac{n\pi}{L}\Bigr)^2\bigl(A_n\cos\omega_nt + B_n\sin\omega_nt\bigr)^2\Bigr].
 $$
 Now $\rho\omega_n^2 = \rho(n\pi c/L)^2 = \tau(n\pi/L)^2$, because $\rho c^2 = \tau$. The two square brackets therefore carry the *same* coefficient, and $(\,\cdot\,)^2 + (\,\cdot\,)^2 = A_n^2 + B_n^2$ by the Pythagorean identity. Hence
 $$
 E = \frac{\tau\pi^2}{4L}\sum_{n=1}^{N} n^2\bigl(A_n^2 + B_n^2\bigr),
 $$
 independent of $t$, as conservation requires. (Checked symbolically for $N=3$ with general $A_n, B_n$.)
2. *Equipartition.* For a single mode with $B_n = 0$, $\mathrm{KE} = E\sin^2\omega_n t$ and $\mathrm{PE} = E\cos^2\omega_n t$: the energy sloshes completely between the two forms twice per period, and each has time-average $E/2$.
3. *A number.* A steel string with $L = 0.650\,\mathrm{m}$, $\tau = 80\,\mathrm{N}$ and $\rho = 5.0\times10^{-3}\,\mathrm{kg\,m^{-1}}$ has $c = \sqrt{80/0.005} = 126.49\,\mathrm{m\,s^{-1}}$ and fundamental frequency $c/2L = 97.30\,\mathrm{Hz}$. Pluck it into the shape $u(x,0) = h\sin^3(\pi x/L)$ with $h = 3\,\mathrm{mm}$ and release it from rest. The identity $\sin^3\theta = \tfrac14(3\sin\theta - \sin3\theta)$ puts that shape in the form above at once, with $N = 3$,
 $$
 A_1 = \tfrac34 h = 2.25\,\mathrm{mm}, \qquad A_3 = -\tfrac14 h = -0.75\,\mathrm{mm},
 $$
 $A_2 = 0$ and every $B_n = 0$ (released from rest). So
 $$
 E = \frac{80\pi^2}{4(0.650)}\bigl[(2.25\times10^{-3})^2 + 9(0.75\times10^{-3})^2\bigr] = 3.075\times10^{-3}\,\mathrm{J} .
 $$
 A millijoule is the right order of magnitude for a plucked guitar string, and the $n^2$ weighting shows why energy put into high modes is expensive: the third harmonic here carries the same energy as the fundamental although its amplitude is three times smaller.
4. *A travelling wave, for contrast.* On the infinite line let $u = F(x - ct)$ with $F$ a $C^2$ bump. Then $u_t = -cF'$ and $u_x = F'$, so $\rho u_t^2 = \rho c^2F'^2 = \tau F'^2 = \tau u_x^2$: kinetic and potential densities are equal *at every point and every instant*, and $E = \tau\int F'^2$. The flux is $S = -\tau u_xu_t = \tau cF'^2 = c\,e$ (in the normalisation where $e$ carries the factor $\rho$), so the energy of a travelling wave moves bodily at speed $c$, which is the statement that the wave transports its energy and nothing else.
:::

:::application{provenance=adapted src="strauss-2008:§2.2, p. 40; evans-2010:§2.4.3, p. 79"}
**Uniqueness is what makes a model a model.** A boundary-value problem for a drum, a cavity or a waveguide is only predictive if its solution is determined by the data. The theorem above says precisely that for the wave equation: give the shape of the region, the initial displacement and velocity, and a fixed or free condition on the boundary, and the motion is determined.

**Electromagnetism, with a caution.** Each Cartesian component $u$ of $\mathbf{E}$ or $\mathbf{B}$ in vacuum satisfies the wave equation, so the identity (E) applies to it and has *exactly the form* of Poynting's theorem, $\partial_t e + \nabla\cdot\mathbf{S} = 0$. The quantities are not the electromagnetic ones, however: $\tfrac12(u_t^2+c^2|\nabla u|^2)$ built from one component is not the field energy density, and $-c^2u_t\nabla u$ is not $\mathbf{E}\times\mathbf{H}$; summing over the six components does not repair either, and Poynting's theorem is a consequence of Maxwell's equations themselves, not of the wave equation each component happens to satisfy. Nor does the uniqueness theorem transfer to a cavity component by component, because a perfect conductor imposes $\hat{\mathbf{n}}\times\mathbf{E} = 0$ and $\hat{\mathbf{n}}\cdot\mathbf{B} = 0$ on the wall, which is not a Dirichlet condition on each Cartesian component separately. Uniqueness for the cavity field is proved by running the same energy argument on Maxwell's equations directly, with the true field energy and the true Poynting flux; what carries over is the method, not the theorem.

**Numerical analysis.** Energy is the standard tool for proving that a discretisation of a wave problem is stable: a scheme with a discrete energy that does not grow cannot blow up, and symplectic or energy-conserving integrators are built to inherit the conservation law exactly rather than approximately. A scheme that violates it shows the damage as amplitude drift over long runs. The stability condition on the time step (:ref[von Neumann stability analysis]{to=num.von-neumann-stability}) is in essence the requirement that the numerical domain of dependence contain the true one.

**Where it leads.** Because the energy argument never uses a solution formula, it survives variable coefficients, lower-order terms, non-constant wave speeds and many nonlinearities. It is the prototype of the a priori estimate on which the modern well-posedness theory of evolution equations rests (:ref[energy estimates and well-posedness]{to=pde.energy-estimates}), and the quantity $E$ is the squared norm in the Sobolev space natural to the problem (:ref[weak derivatives and Sobolev spaces]{to=pde.weak-solutions-sobolev}). For a physicist the same computation, done with a Lagrangian density instead of by hand, is :ref[Noether's theorem]{to=var.noether-theorem} applied to invariance under time translation.
:::
