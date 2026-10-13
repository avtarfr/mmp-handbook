---
id: pde.energy-estimates
title: Energy estimates and well-posedness
kind: theorem
level: advanced
summary: Proves the basic energy estimates for the forced heat and wave equations on a bounded domain, deduces uniqueness and continuous dependence on the data from them, and shows by the backward heat equation and Hadamard's Cauchy problem for Laplace's equation what the estimates exclude.
prereqs: [pde.wave-energy, pde.heat-maximum-principle, measure.lp-spaces]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§1.3.1, Well-posed problems, classical solutions: conditions (i)–(iii), pp. 6–7; §2.3.4a, Theorem 10 (Uniqueness) for the initial/boundary-value problem (40) and its proof by differentiating $e(t)=\\int_U w^2 dx$, p. 60; §2.3.4b, Theorem 11 (Backwards uniqueness) and the log-convexity proof, pp. 61–62"
    pages: "6-7, 60-62"
    role: the definition of a well-posed problem; the route of the energy proof of uniqueness for the heat equation; backward uniqueness, quoted here without proof
  - work: strauss-2008
    loc: "§1.5, Well-posed problems, the three properties and the discussion of why stability is demanded of a physical model, pp. 25–26; §2.3, the second proof of uniqueness for the diffusion equation by the energy method, the pointwise identity and Eq. (4), and the resulting $L^2$ stability Eq. (5), together with the contrast with the uniform-norm stability Eq. (6) given by the maximum principle, pp. 44–45; §3.4, Well-posedness for the forced wave equation on the line and the uniform-norm stability estimate Eq. (4), pp. 72–73"
    pages: "25-26, 44-45, 72-73"
    role: the definition of well-posedness; the energy-method proof of uniqueness and $L^2$ stability for the diffusion equation and the comparison with sup-norm stability; a source-dependent stability estimate for the wave equation in a different norm
  - work: stakgold-holst-2011
    loc: "§1.2, Continuity with respect to the data, the estimates (1.2.14) and (1.2.15) for the two-point boundary-value problem, and the three questions — existence, uniqueness, continuous dependence — whose affirmative answer defines a well-posed problem, pp. 65–66"
    pages: "65-66"
    role: the three-part definition of well-posedness and the remark that ill-posed problems are nonetheless worth studying
  - work: hassani-2013
    loc: "§21.1, the remark that the two-dimensional Laplace equation has no characteristic curves and yet does not give a well-posed Cauchy problem, and that continuity of the solution in the data is demanded on mathematical and physical grounds, p. 642; §21.6, Problem 21.4, which sets the Cauchy problem $u(0,y)=0$, $u_x(0,y)=\\epsilon\\sin ky$ for Laplace's equation and asks for the failure of continuous dependence, p. 661"
    pages: "642, 661"
    role: the statement that the Cauchy problem for Laplace's equation is ill-posed, and the precise data for which we verify it below
---

:::definition[Well-posedness]{provenance=adapted src="evans-2010:§1.3.1, conditions (i)–(iii), p. 6; strauss-2008:§1.5, pp. 25–26; stakgold-holst-2011:§1.2, p. 66"}
A problem consisting of a partial differential equation on a domain together with initial and boundary conditions is **well posed** when all three of the following hold.

1. **Existence.** At least one solution satisfies the equation and all the auxiliary conditions.
2. **Uniqueness.** At most one does.
3. **Stability**, also called continuous dependence on the data: a small change in the data produces a small change in the solution.

Otherwise the problem is **ill posed**. All three sources give this list; Stakgold and Holst put it as three questions and note that an affirmative answer to all three is what the term means.

Clause 3 has no content until "small" is given a meaning, and the meaning is a choice: one must fix a norm on the data and a norm on the solutions. Strauss is emphatic that the choice must be made and makes it twice for the same problem, obtaining stability in the "square integral" sense from the energy method and stability in the "uniform" sense from the maximum principle. A problem can be well posed for one pair of norms and ill posed for another, and in the end the physics decides: the data are measurements, known only to finitely many decimal places, and a model whose output is not controlled by the accuracy of its input predicts nothing. Stakgold and Holst add the modern caveat that ill-posed problems are no longer rejected out of hand, since inverse problems are ill posed by nature and are solved anyway, with regularisation and with care.

**What an energy estimate is.** An inequality bounding a norm of the solution at time $t$ by the same norm at time $0$ and a norm of the source, with constants depending only on the equation and on $t$. Such an inequality settles clauses 2 and 3 at one stroke, by linearity: apply it to the difference of two solutions. It says nothing about clause 1.
:::

:::statement[Energy estimate for the heat equation]{provenance=adapted src="evans-2010:§2.3.4a, Thm 10 and its proof, p. 60; strauss-2008:§2.3, the energy method and Eq. (4)–(5), pp. 44–45"}
Let $\Omega \subset \mathbb{R}^n$ be a bounded open set with piecewise $C^1$ boundary, let $T>0$ and $k>0$, and let $u \in C^2(\overline\Omega\times[0,T])$ satisfy

$$
u_t = k\,\Delta u + f \ \text{ in } \Omega\times(0,T), \qquad
u = 0 \ \text{ on } \partial\Omega\times[0,T], \qquad
u(\cdot,0) = \varphi ,
$$

with $f$ continuous on $\overline\Omega\times[0,T]$. Write $N(t) = \|u(\cdot,t)\|_{L^2(\Omega)}$ and $\|f(t)\| = \|f(\cdot,t)\|_{L^2(\Omega)}$. Then:

**(a) The identity.**
$$
\frac{d}{dt}N(t)^2 \;=\; -\,2k\int_\Omega |\nabla u|^2\,dx \;+\; 2\int_\Omega f\,u\,dx
\qquad (0<t<T).
$$

**(b) The estimate.**
$$
N(t) \;\le\; N(0) + \int_0^t \|f(s)\|\,ds \qquad (0\le t\le T).
$$

**(c) The dissipation identity.** If $f \equiv 0$,
$$
N(T)^2 + 2k\int_0^T\!\!\int_\Omega |\nabla u|^2\,dx\,dt \;=\; N(0)^2 ,
$$
so in particular $N$ is non-increasing — this is Strauss's inequality (4) — and the total dissipation is exactly the energy lost.

**(d) The sharpened estimate.** If moreover $\|\nabla v\|^2_{L^2} \ge \lambda\|v\|^2_{L^2}$ for all $v \in H^1_0(\Omega)$ — a Poincaré inequality, with $\lambda = d^{-2}$ available whenever $\Omega$ lies in a slab of width $d$, by :ref[the Lax–Milgram theorem and the Dirichlet problem]{to=pde.lax-milgram} — then
$$
N(t) \;\le\; e^{-k\lambda t}N(0) \;+\; \int_0^t e^{-k\lambda(t-s)}\|f(s)\|\,ds .
$$

**Consequences.** The problem is uniquely solvable: if two solutions have the same $\varphi$, the same $f$ and the same boundary values, their difference $w$ satisfies the hypotheses with zero data, so $N_w \equiv 0$ and $w \equiv 0$. This is Evans's Theorem 10 and Strauss's second proof of uniqueness. And it is stable in $L^2$: two solutions with sources $f_1,f_2$ and initial data $\varphi_1,\varphi_2$ obey

$$
\|u_1(\cdot,t) - u_2(\cdot,t)\|_{L^2} \;\le\; \|\varphi_1-\varphi_2\|_{L^2} + \int_0^t\|f_1(s)-f_2(s)\|_{L^2}\,ds ,
$$

which with $f_1 = f_2$ is Strauss's stability statement (5). Parts (b) and (d), and the source term throughout, go beyond what either source states: Evans and Strauss both run the argument with $f$ removed by subtraction.
:::

:::idea{provenance=original}
Multiply the equation by the solution itself. On the left that produces $\tfrac12\partial_t(u^2)$, and on the right, after one integration by parts, $-k|\nabla u|^2$ together with the work $fu$ done by the source. The boundary term is killed by the boundary condition. So the $L^2$ norm has a derivative with one term that is always negative — the dissipation, which is what distinguishes diffusion from wave propagation — and one term bounded by $\|f\|$ times the norm itself. Throwing the dissipation away gives (b); keeping it and feeding it back through Poincaré's inequality gives the exponential decay in (d). Grönwall's lemma is not needed in a separate form: both follow from integrating a differential inequality for $N$ rather than for $N^2$.
:::

:::proof{provenance=adapted src="evans-2010:§2.3.4a, the computation of $\\dot e(t)$ in the proof of Thm 10, p. 60; strauss-2008:§2.3, the pointwise identity and its integration, p. 44"}
**Step 1 (differentiate).** The functions $u^2$ and $\partial_t(u^2) = 2uu_t$ are continuous on the compact set $\overline\Omega\times[0,T]$, and $\Omega$ has finite volume, so one may differentiate under the integral sign exactly as in :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}:

$$
\frac{d}{dt}N(t)^2 = \frac{d}{dt}\int_\Omega u^2\,dx = 2\int_\Omega u\,u_t\,dx .
$$

**Step 2 (use the equation and integrate by parts).** Substituting $u_t = k\Delta u + f$,

$$
\frac{d}{dt}N^2 = 2k\int_\Omega u\,\Delta u\,dx + 2\int_\Omega fu\,dx .
$$

By Green's first identity (:ref[Green's identities]{to=vcalc.green-identities}), which applies because $u \in C^2(\overline\Omega)$ and $\partial\Omega$ is piecewise $C^1$,

$$
\int_\Omega u\,\Delta u\,dx = -\int_\Omega|\nabla u|^2dx + \oint_{\partial\Omega} u\,\frac{\partial u}{\partial n}\,dS ,
$$

and the boundary integral vanishes because $u = 0$ at every point of $\partial\Omega$. This proves (a). (This is the only place the boundary condition is used, and a Neumann condition $\partial u/\partial n = 0$ would do just as well.)

**Step 3 (the differential inequality).** Discard the dissipation term, which is $\le 0$, and apply the Cauchy–Schwarz inequality to the other:

$$
\frac{d}{dt}N^2 \le 2\int_\Omega fu\,dx \le 2\|f(t)\|\,N(t) .
$$

To divide by $N$ without worrying about zeros, put $N_\varepsilon = (N^2+\varepsilon^2)^{1/2}$ for $\varepsilon>0$. Then $N_\varepsilon \ge N$ and $N_\varepsilon \ge \varepsilon > 0$, and

$$
N_\varepsilon' = \frac{1}{2N_\varepsilon}\frac{d}{dt}N^2 \le \frac{\|f(t)\|\,N}{N_\varepsilon} \le \|f(t)\| .
$$

Integrating from $0$ to $t$ and letting $\varepsilon \to 0$ (both $N_\varepsilon(t) \to N(t)$ and $N_\varepsilon(0)\to N(0)$) gives (b).

**Step 4 (dissipation).** With $f \equiv 0$, (a) reads $\frac{d}{dt}N^2 = -2k\int_\Omega|\nabla u|^2dx$. Both sides are continuous in $t$; integrate from $0$ to $T$ and rearrange to get (c). Since the integral on the left of (c) is non-negative, $N(T) \le N(0)$, and the same holds with $T$ replaced by any $t$.

**Step 5 (the sharpened estimate).** Now keep the dissipation. For each fixed $t$ the function $u(\cdot,t)$ lies in $H^1_0(\Omega)$ — it is $C^1$ on $\overline\Omega$ and vanishes on $\partial\Omega$ — so the Poincaré hypothesis applies and $-2k\|\nabla u\|^2 \le -2k\lambda N^2$. Hence

$$
\frac{d}{dt}N^2 \le -2k\lambda N^2 + 2\|f(t)\|N ,
\qquad\text{so}\qquad
N_\varepsilon' \le -k\lambda\frac{N^2}{N_\varepsilon} + \|f(t)\|
\le -k\lambda N_\varepsilon + k\lambda\varepsilon + \|f(t)\| ,
$$

using $N^2 = N_\varepsilon^2 - \varepsilon^2$ and $\varepsilon^2/N_\varepsilon \le \varepsilon$. Multiplying by the integrating factor $e^{k\lambda t}$ makes the left side $\bigl(e^{k\lambda t}N_\varepsilon\bigr)'$; integrating from $0$ to $t$ and letting $\varepsilon\to0$ gives (d). $\square$
:::

:::statement[Energy estimate for the wave equation with a source]{provenance=adapted src="strauss-2008:§9.1, the pointwise energy identity Eq. (4), p. 230; evans-2010:§2.4.3a, the computation of $\\dot E$ in the proof of Thm 5, p. 79"}
Let $\Omega\subset\mathbb{R}^n$ be a bounded open set with piecewise $C^1$ boundary, $T>0$, $c>0$, and let $u \in C^2(\overline\Omega\times[0,T])$ satisfy

$$
u_{tt} = c^2\Delta u + f \ \text{ in } \Omega\times(0,T), \qquad
u = 0 \ \text{ on } \partial\Omega\times[0,T] ,
$$

with $f$ continuous on $\overline\Omega\times[0,T]$. Put

$$
\mathcal{E}(t) = \int_\Omega\bigl(u_t^2 + c^2|\nabla u|^2\bigr)dx ,
$$

twice the energy of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}. Then

$$
\frac{d\mathcal{E}}{dt} = 2\int_\Omega f\,u_t\,dx
\qquad\text{and}\qquad
\sqrt{\mathcal{E}(t)} \;\le\; \sqrt{\mathcal{E}(0)} + \int_0^t\|f(s)\|_{L^2(\Omega)}\,ds .
$$

**Consequences.** With $f\equiv0$ this is conservation of energy, the theorem of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}. With $f$ present it gives uniqueness for the forced problem, and stability in the energy norm: if $u_1,u_2$ solve the problem with sources $f_1,f_2$ and initial data $(\varphi_1,\psi_1)$, $(\varphi_2,\psi_2)$, then $w = u_1-u_2$ obeys

$$
\sqrt{\mathcal{E}_w(t)} \le \Bigl(\|\psi_1-\psi_2\|^2_{L^2} + c^2\|\nabla\varphi_1-\nabla\varphi_2\|^2_{L^2}\Bigr)^{1/2} + \int_0^t\|f_1(s)-f_2(s)\|_{L^2}\,ds .
$$

Note which norms appear: the initial *velocity* in $L^2$, the initial *displacement* in $H^1$, the source in $L^1$ in time and $L^2$ in space. Strauss proves a stability statement of the same shape for the forced wave equation on the line, but in the uniform norm and with the explicitly $T$-dependent constants $1$, $T$ and $T^2/2$, read off from the solution formula; the estimate here uses no formula and so survives variable coefficients and bounded domains.
:::

:::idea{provenance=original}
Multiply by the velocity rather than by the solution, because for a second-order equation in time it is $u_t$, not $u$, that turns the principal part into a time derivative plus a divergence. The identity is the one already proved for the unforced equation; the source simply appears on the right as the power it delivers. Since power is at most force times speed, and speed is controlled by the energy itself, the growth of $\sqrt{\mathcal{E}}$ is at most $\|f\|$ — and nothing is dissipated, so there is no decaying factor to help, as there was for the heat equation.
:::

:::proof{provenance=adapted src="strauss-2008:§9.1, Eq. (4) and its integration, p. 230"}
**Step 1 (the pointwise identity).** By the local energy identity of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}, valid for any $C^2$ function,

$$
\bigl(u_{tt}-c^2\Delta u\bigr)u_t = \frac{\partial}{\partial t}\Bigl[\tfrac12\bigl(u_t^2+c^2|\nabla u|^2\bigr)\Bigr] + \nabla\cdot\bigl(-c^2u_t\nabla u\bigr) .
$$

The left-hand side is $f u_t$, by the equation.

**Step 2 (integrate).** Integrate over $\Omega$. Differentiation under the integral sign is licensed as before, and the divergence theorem turns the last term into a boundary integral of $-c^2u_t\,\partial u/\partial n$. Since $u(\cdot,t) = 0$ on $\partial\Omega$ for every $t$, differentiating in $t$ at a fixed boundary point gives $u_t = 0$ there, so that integral vanishes. Hence

$$
\frac{1}{2}\frac{d\mathcal{E}}{dt} = \int_\Omega f\,u_t\,dx ,
$$

which is the stated identity.

**Step 3 (bound the right-hand side by the energy).** By Cauchy–Schwarz and then $\|u_t\|^2_{L^2}\le\mathcal{E}$, which holds because the other term of $\mathcal{E}$ is non-negative,

$$
\frac{d\mathcal{E}}{dt} \le 2\|f(t)\|\,\|u_t(\cdot,t)\|_{L^2} \le 2\|f(t)\|\sqrt{\mathcal{E}(t)} .
$$

**Step 4 (integrate the differential inequality).** As in the parabolic case, work with $\mathcal{E}_\varepsilon = (\mathcal{E}+\varepsilon^2)^{1/2}$ to avoid dividing by zero: $\mathcal{E}_\varepsilon' = \mathcal{E}'/(2\mathcal{E}_\varepsilon) \le \|f(t)\|\sqrt{\mathcal{E}}/\mathcal{E}_\varepsilon \le \|f(t)\|$. Integrate from $0$ to $t$ and let $\varepsilon\to0$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- *The sign of $k$.* Everything above needs $k>0$; with $k<0$ the dissipation term changes sign and becomes growth. The **backward heat equation** is genuinely ill posed, not merely beyond the reach of this proof. On $\Omega=(0,\pi)$ with $k=1$, the data $g_m(x) = m^{-1}\sin mx$ prescribed at time $T$ are reached from $u_m(x,0) = m^{-1}e^{m^2T}\sin mx$. As $m\to\infty$, $\|g_m\|_{L^2} = m^{-1}\sqrt{\pi/2}\to0$ while $\|u_m(\cdot,0)\|_{L^2} = m^{-1}e^{m^2T}\sqrt{\pi/2}\to\infty$. With $T=1$ and $m=5$: data of norm $0.2507$, and a reconstructed initial state of norm $1.80\times10^{10}$. Clause 3 fails in any pair of norms in which the data tend to zero. Uniqueness, by contrast, does hold backwards: that is Evans's Theorem 11, proved by showing $\log\int w^2$ convex in $t$, and it illustrates that uniqueness and stability are genuinely different clauses.
- *The boundary condition.* Step 2 of each proof needs the boundary term to vanish or to have the right sign. Dirichlet and Neumann conditions do it; so does a Robin condition $\partial u/\partial n + bu_t = 0$ with $b>0$, which makes the wave boundary term $-c^2b\oint u_t^2dS \le 0$ and turns the estimate into decay. With $b<0$ the wall feeds the system and the estimate is lost.
- *Ellipticity of the spatial operator.* Replace $\Delta$ by an operator that is not elliptic and the dissipation term is no longer sign-definite. The extreme case is Laplace's equation treated as an evolution in $x$: Hassani notes that the two-dimensional Laplace equation has no characteristic curves in the plane, so one might expect its Cauchy problem to be well posed, and that it is not (his Problem 21.4). Explicitly, the data $u(0,y)=0$, $u_x(0,y) = \epsilon\sin ky$ are met by
 $$
 u(x,y) = \frac{\epsilon}{k}\,\sinh(kx)\,\sin(ky),
 $$
 as one checks: $u_{xx}+u_{yy} = \epsilon k\sinh(kx)\sin(ky) - \epsilon k\sinh(kx)\sin(ky) = 0$, $u(0,y)=0$ and $u_x(0,y) = \epsilon\cosh 0\sin ky = \epsilon\sin ky$. The data have sup norm $\epsilon$ however large $k$ is, while at any fixed $x>0$ the solution reaches $(\epsilon/k)\sinh(kx)$, which grows like $\epsilon e^{kx}/2k$. This is Hadamard's example, and it is why initial-value problems are posed for hyperbolic and parabolic equations and boundary-value problems for elliptic ones (:ref[classification of second-order equations]{to=pde.classification}).
- *$u \in C^2$ up to the boundary.* Used to differentiate under the integral sign and to integrate by parts. The estimates are nevertheless the right ones for rough solutions too: one proves them first for smooth approximations and passes to the limit, which is exactly how weak solutions in $L^2(0,T;H^1_0(\Omega))$ are constructed (:ref[weak derivatives and Sobolev spaces]{to=pde.weak-solutions-sobolev}). An a priori estimate is called *a priori* because it is derived before any solution is known to exist.
- *What the estimates do not give.* Existence. An energy estimate bounds whatever solutions there are; producing one needs a construction — a formula, a series, a Galerkin limit, or a semigroup (:ref[evolution equations and operator semigroups]{to=pde.operator-semigroups}).
- *Which norm.* The heat equation is stable in $L^2$ by the argument above, and also in the uniform norm by the maximum principle (:ref[maximum principle for the heat equation]{to=pde.heat-maximum-principle}); Strauss presents the two side by side. The wave equation has no maximum principle, and its natural statement of stability is in the energy norm, where the displacement is measured in $H^1$ and the velocity in $L^2$. The choice is not cosmetic: the wave equation is *not* stable in the uniform norm of the initial displacement alone in three dimensions, because the solution involves derivatives of the data (:ref[the wave equation in three dimensions]{to=pde.wave-three-dimensions}).
:::

:::method[The energy recipe]{provenance=original}
1. **Choose the multiplier.** Multiply the equation by whatever makes the principal part a time derivative plus a divergence: by $u$ for an equation first order in time, by $u_t$ for one second order in time. For a general system, the multiplier is whatever the conserved quantity is quadratic in.
2. **Integrate over the spatial domain** and integrate by parts, so that the equation becomes $\tfrac{d}{dt}(\text{energy}) + (\text{boundary flux}) = (\text{everything else})$.
3. **Dispose of the boundary term.** Check that the boundary condition makes it vanish, or gives it a sign. If it has the wrong sign, the method fails and the failure is usually real.
4. **Keep the sign-definite interior terms.** A negative one is dissipation; keep it if you want decay, discard it if you only want a bound.
5. **Bound the rest by the energy.** Cauchy–Schwarz for source terms, Poincaré to convert a gradient into a function, and Young's inequality $ab \le \varepsilon a^2 + b^2/4\varepsilon$ to absorb a cross term into a dissipation term you have kept.
6. **Integrate the differential inequality.** For $E' \le 2\alpha E + \beta$, Grönwall gives $E(t) \le e^{2\alpha t}E(0) + \int_0^t e^{2\alpha(t-s)}\beta(s)ds$; when $\beta$ is a multiple of $\sqrt E$, work with $\sqrt E$ instead, as above.
7. **Read off the two clauses.** Zero data gives zero energy, hence uniqueness. Applying the estimate to the difference of two solutions gives stability, in the norms the energy happens to be built from — and those norms are the honest answer to "with respect to what?" in clause 3.
:::

:::example[Both estimates, on the same interval]{provenance=original}
Take $\Omega = (0,\pi)$ with zero Dirichlet conditions at both ends, so that the Poincaré constant is $\lambda = 1$: expanding in the sine basis, $\|v'\|^2_{L^2} = \tfrac\pi2\sum k^2b_k^2 \ge \tfrac\pi2\sum b_k^2 = \|v\|^2_{L^2}$ for $v=\sum b_k\sin kx$ in $H^1_0$, with equality for $v=\sin x$. Note also $\|\sin x\|_{L^2} = \sqrt{\pi/2} = 1.2533141$.

**A. Heat, with a decaying source.** Let $k=1$, $\varphi = 0$ and $f(x,t) = e^{-t}\sin x$. Writing $u = A(t)\sin x$ turns the equation into $A' = -A + e^{-t}$ with $A(0)=0$, that is $(e^tA)' = 1$, so

$$
u(x,t) = t\,e^{-t}\sin x , \qquad N(t) = \|u(\cdot,t)\|_{L^2} = t e^{-t}\sqrt{\tfrac\pi2} .
$$

- *The crude estimate (b)* gives $N(t) \le 0 + \int_0^t e^{-s}\sqrt{\pi/2}\,ds = \sqrt{\pi/2}\,(1-e^{-t})$, which at $t=1$ is $0.7922456$ against the true $e^{-1}\sqrt{\pi/2} = 0.4610685$. It overshoots by a factor $1.718$, and it is monotone increasing, so it never sees that $N$ peaks at $t=1$ and decays afterwards.
- *The sharpened estimate (d)* with $\lambda=1$ gives
 $$
 N(t) \le \int_0^t e^{-(t-s)}e^{-s}\sqrt{\tfrac\pi2}\,ds = \sqrt{\tfrac\pi2}\;t\,e^{-t},
 $$
 which is the exact value, at every $t$. Equality was inevitable: the data are a single eigenfunction, so both the Poincaré inequality and the Cauchy–Schwarz step in the proof are equalities, and the differential inequality for $N$ is the differential equation $N' = -N + \|f\|$.
- *Check of the identity (a)* at a general $t$: the left side is $\frac{d}{dt}\bigl[\tfrac\pi2 t^2e^{-2t}\bigr] = \pi e^{-2t}(t-t^2)$; the right side is $-2\int_0^\pi u_x^2dx + 2\int_0^\pi fu\,dx = -\pi t^2e^{-2t} + \pi te^{-2t}$. They agree.

**B. Wave, with a steady source.** Let $c=1$, $u = u_t = 0$ at $t=0$, and $f(x) = \sin x$, independent of time. Now $A'' = -A + 1$ with $A(0)=A'(0)=0$, so $A = 1-\cos t$ and

$$
u(x,t) = (1-\cos t)\sin x ,
\qquad
\mathcal{E}(t) = \int_0^\pi\bigl(u_t^2+u_x^2\bigr)dx = \frac\pi2\bigl(\sin^2t + (1-\cos t)^2\bigr) = \pi(1-\cos t) .
$$

- *The estimate* gives $\sqrt{\mathcal{E}(t)} \le 0 + t\sqrt{\pi/2}$. At $t=\pi$ the true value is $\sqrt{2\pi} = 2.5066283$ and the bound is $\pi\sqrt{\pi/2} = 3.9374025$, larger by a factor $\pi/2$.
- *The contrast with A is the point.* $\mathcal{E}$ does not decay; it oscillates between $0$ and $2\pi$ forever, returning exactly to zero at $t = 2\pi, 4\pi,\dots$. There is no dissipation term to keep, so no exponential factor is available, and the bound on $\sqrt{\mathcal{E}}$ grows linearly in $t$ — which is sharp in general, as the resonant source $f = \sin t\,\sin x$ shows, for which $A = \tfrac12(\sin t - t\cos t)$ grows without bound.
- *Where the slack is.* The bound uses $\|u_t\| \le \sqrt{\mathcal{E}}$, an equality only when $\nabla u = 0$, which here happens only at $t=0,2\pi,\dots$. Averaged over a period the kinetic and potential parts are equal, so $\|u_t\|$ is typically about $\sqrt{\mathcal{E}/2}$, and the factor $\pi/2$ above is of that order.
:::

:::application{provenance=original}
**Deciding what a numerical scheme must preserve.** A discretisation inherits well-posedness only if it inherits the estimate. The standard design rule is to build a discrete energy whose evolution mimics the continuous one: a scheme for the wave equation whose discrete $\mathcal{E}$ is conserved cannot blow up, and a scheme for the heat equation whose discrete $N$ is non-increasing cannot oscillate. This is the energy-method route to stability, equivalent in the constant-coefficient case to the Fourier route of :ref[stability, the CFL condition and von Neumann analysis]{to=num.von-neumann-stability} but applicable where Fourier analysis is not — variable coefficients, irregular domains, nonlinearities.

**Inverse problems.** Reconstructing a past temperature field from present measurements, deblurring an image, or inverting a diffusive tracer transport are all the backward heat equation in disguise, and the remark above says they are ill posed: the factor $e^{m^2T}$ amplifies measurement noise at wavenumber $m$ out of all recognition. The response is not to abandon the problem but to regularise it — truncate the high modes, add a penalty on the reconstructed field's norm, or stop an iteration early — each of which replaces the ill-posed problem by a nearby well-posed one and accepts a bias in return for stability.

**Continuum mechanics and relativity.** The energy identity for the wave equation is the same calculation as the local conservation law of :ref[energy and uniqueness for the wave equation]{to=pde.wave-energy}, and it generalises wherever a Lagrangian does: to elastodynamics, to Maxwell's equations with the Poynting flux as $\mathbf{S}$, and to the Einstein equations in harmonic gauge, where energy estimates are the technical heart of the local existence theory. Because the argument never uses a solution formula, it is essentially the only tool that survives into the nonlinear regime, where it gives existence up to the first time the energy ceases to be finite — and the question of whether that time is finite is, for the incompressible Navier–Stokes equations, still open.

**Climate and ocean modelling.** Long integrations of geophysical fluid models drift if the discrete energy budget is wrong: a scheme that loses a fixed fraction of energy per step damps the eddies the model exists to resolve, and one that gains energy eventually blows up. Energy- and enstrophy-conserving discretisations are chosen precisely so that the continuous estimate has a discrete counterpart, and so that the only dissipation in the run is the one that was put in deliberately.
:::
