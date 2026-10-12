---
id: ode.nonhomogeneous-systems
title: Nonhomogeneous systems and Duhamel's principle
kind: method
level: core
summary: Gives the solution of a forced linear system as the free evolution of the initial state plus a convolution of the forcing with the propagator, namely the Duhamel integral x(t) = exp(tA)x_0 plus the integral of exp((t-s)A)g(s) ds for constant A, and its fundamental-matrix form for time-dependent A, together with a recipe, the resonance that appears when the forcing matches an eigenvalue, and the reason the same formula reappears for the heat and wave equations.
prereqs: [ode.linear-systems, linalg.matrix-exponential, ode.variation-of-parameters, linalg.determinants]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "§6.5, pp. 130-134: the nonhomogeneous system X' = AX + G(t) and the forced harmonic oscillator as an example, p. 130; the structure of the general solution as one particular solution plus the general solution of the homogeneous equation, p. 131; the Theorem (Variation of Parameters), p. 131, with its proof by differentiation, p. 132; the unique steady state of period 2 pi of the damped oscillator forced by cos t, and the convergence of all other solutions to it, pp. 132-133"
    pages: "130-134"
    role: the statement and proof route of the variation-of-constants formula for a constant-coefficient system; the superposition structure of the solution set; the steady-state argument used in the application
  - work: evans-2010
    loc: "§2.3.1(c), p. 47: Duhamel's principle for the nonhomogeneous heat equation, with the footnote recording that the principle applies to linear ODE and PDE generally and does not depend on the structure of the heat equation"
    pages: "47"
    role: the name and the general form of Duhamel's principle, and the authority for stating that it is not special to one equation
  - work: strauss-2008
    loc: "§3.4, pp. 77-78: the Operator Method, the ODE analogue u'' + A^2 u = f(t) with its solution (14)-(15) built from the solution operator S(t), and the remark that the ability to solve the homogeneous equation yields the inhomogeneous one, which is what is called Duhamel's principle"
    pages: "77-78"
    role: the operator formulation of Duhamel's principle and the second-order ODE analogue used in the remark
  - work: coddington-1989
    loc: "Ch. 2, §10, pp. 85-86: the variation-of-constants method for the scalar equation L(y) = b(x), the system (10.1) determining the coefficient functions, Theorem 20, the resulting particular solution (10.3), and the statement (10.4) that it and its first n-1 derivatives vanish at x_0"
    pages: "85-86, 90"
    role: the scalar variation-of-constants formula with which the Duhamel integral is compared in the remark
---

:::statement[The structure of the solution set]{provenance=adapted src="hirsch-smale-devaney-2013:§6.5, p. 131"}
Let $A(t)$ and $g(t)$ be continuous on an interval $I$ and consider the **nonhomogeneous** (forced, inhomogeneous) system

$$
x' = A(t)\,x + g(t) ,
$$

whose **homogeneous equation** is the system $x' = A(t)x$ obtained by dropping $g$.

1. If $z$ is any one solution of the nonhomogeneous system and $y$ any solution of the homogeneous one, then $y + z$ solves the nonhomogeneous system.
2. Conversely every solution of the nonhomogeneous system is of that form: if $z_1, z_2$ both solve it then $z_1 - z_2$ solves the homogeneous one.

So with $\Phi$ a fundamental matrix of the homogeneous system (:ref[linear systems]{to=ode.linear-systems}) the general solution is

$$
x(t) = \Phi(t)c + z(t), \qquad c \in \mathbb{C}^n ,
$$

and the whole problem reduces to producing **one** particular solution $z$. Hirsch, Smale and Devaney record both the reduction and the warning that goes with it: a particular solution can often be guessed, by undetermined coefficients, but guessing does not always work, whereas the variation-of-parameters formula below always does — subject only to one's being able to evaluate the integral it contains (:cite{work=hirsch-smale-devaney-2013 loc="§6.5, p. 131"}).
:::

:::idea{provenance=original}
The map $x \mapsto x' - A(t)x$ is linear, and the two parts are the two halves of what linearity says about a linear equation: the difference of two solutions of $Lx = g$ solves $Lx = 0$, and adding a solution of $Lx = 0$ to a solution of $Lx = g$ changes neither. Nothing about the particular form of $A$ or $g$ enters.
:::

:::proof{provenance=original}
Write $L x = x' - A(t)x$, defined on differentiable functions $I \to \mathbb{C}^n$. $L$ is linear: $L(\alpha x + \beta y) = \alpha x' + \beta y' - A(\alpha x + \beta y) = \alpha Lx + \beta Ly$, since differentiation is linear and $A(t)$ acts linearly at each $t$.

1. If $Lz = g$ and $Ly = 0$ then $L(y+z) = Ly + Lz = g$.
2. If $Lz_1 = Lz_2 = g$ then $L(z_1 - z_2) = g - g = 0$.

For the displayed general solution, let $x$ solve the nonhomogeneous system. By part 2, $x - z$ solves the homogeneous one, so by part 3 of the existence statement in :ref[linear systems]{to=ode.linear-systems} it equals $\Phi(t)c$ for exactly one $c$; conversely every such $\Phi(t)c + z(t)$ is a solution by part 1. $\square$
:::

:::statement[Variation of constants: the Duhamel integral]{provenance=adapted src="hirsch-smale-devaney-2013:§6.5, Theorem (Variation of Parameters), p. 131"}
Let $A$ be a constant $n \times n$ matrix and let $g$ be continuous on an interval containing $0$. Then

$$
x(t) = \exp(tA)\Bigl[\, x_0 + \int_0^t \exp(-sA)\,g(s)\,ds \,\Bigr]
$$

is a solution of $x' = Ax + g(t)$ with $x(0) = x_0$ (:cite{work=hirsch-smale-devaney-2013 loc="§6.5, Theorem, p. 131"}). Because $tA$ and $-sA$ commute, the bracket can be multiplied out to give the **Duhamel integral** form

$$
x(t) = \underbrace{\exp(tA)\,x_0}_{\text{free evolution of the initial state}} \;+\; \underbrace{\int_0^t \exp\bigl((t-s)A\bigr)\, g(s)\, ds}_{\text{accumulated response to the forcing}} ,
$$

and, this solution being the only one with $x(0) = x_0$ (part 1 of the existence statement in :ref[linear systems]{to=ode.linear-systems} applies to the nonhomogeneous system as well), the two displays are the same function.

Read the second display pointwise in $s$: the forcing $g(s)\,ds$ delivered during $[s, s+ds]$ acts as a fresh initial condition at time $s$, and is then propagated to time $t$ by the propagator $\exp((t-s)A)$ of the *unforced* system. The total response is the superposition of these, and it is a **convolution** of the forcing with the propagator: only the elapsed time $t - s$ appears, and only values $s \le t$ contribute, so the response is **causal**. The matrix

$$
K(t,s) = \exp\bigl((t-s)A\bigr) \quad (s \le t), \qquad K(t,s) = 0 \quad (s > t)
$$

is the impulse response, or causal Green's function, of the system (:ref[causal Green's functions]{to=green.causal-green-functions}).
:::

:::idea{provenance=original}
Freeze the forcing and the answer is $\exp(tA)c$ with $c$ constant. Switch the forcing on, and the only way the formula can fail is for $c$ to have to drift: so look for a solution $x(t) = \exp(tA)\,u(t)$ with $u$ an unknown function — this is what "varying the constant" means. Substituting, the two terms produced by differentiating the product are $A\exp(tA)u$, which is exactly $Ax$ and cancels against the left-hand side, and $\exp(tA)u'$, which must therefore equal $g$. That leaves $u' = \exp(-tA)g$, a formula to be integrated and nothing more. The structure survives verbatim for time-dependent $A$, with a fundamental matrix in place of the exponential, because the cancellation used only $\Phi' = A\Phi$.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§6.5, p. 132"}
1. **The integral is differentiable.** $s \mapsto \exp(-sA)g(s)$ is continuous, being a product of a continuous matrix-valued function and a continuous vector-valued one. So by the fundamental theorem of calculus in each of the $n$ components separately, $t \mapsto \int_0^t \exp(-sA)g(s)\,ds$ is differentiable with derivative $\exp(-tA)g(t)$. Continuity of $g$ is used here and nowhere else.

2. **Differentiate the product.** Write $v(t) = x_0 + \int_0^t \exp(-sA)g(s)\,ds$, so that $x = \exp(tA)v$. The product rule for a matrix-valued and a vector-valued factor, together with $\frac{d}{dt}\exp(tA) = A\exp(tA)$ (:ref[matrix exponential]{to=linalg.matrix-exponential}) and step 1, gives
$$
x'(t) = A \exp(tA)\,v(t) + \exp(tA)\exp(-tA)\,g(t) = A\,x(t) + g(t) ,
$$
the second term collapsing because $\exp(tA)\exp(-tA) = I$. This is the route of :cite{work=hirsch-smale-devaney-2013 loc="§6.5, p. 132"}, which differentiates the formula as it stands rather than deriving it.

3. **The initial value.** At $t = 0$ the integral is empty and $\exp(0) = I$, so $x(0) = x_0$.

4. **The two displays agree.** For each fixed $s$ the matrices $tA$ and $-sA$ commute, so the product rule for exponentials of commuting matrices gives $\exp(tA)\exp(-sA) = \exp((t-s)A)$. Since $\exp(tA)$ is a constant matrix as far as the $s$-integration is concerned, it may be taken inside the integral:
$$
\exp(tA)\int_0^t \exp(-sA)g(s)\,ds = \int_0^t \exp(tA)\exp(-sA)g(s)\,ds = \int_0^t \exp\bigl((t-s)A\bigr)g(s)\,ds .
$$

5. **Uniqueness.** If $x$ and $\tilde x$ both solve the problem, their difference solves the homogeneous system with initial value $0$, hence vanishes identically (:ref[linear systems]{to=ode.linear-systems}). So the formula gives *the* solution, not merely one. $\square$
:::

:::statement[Time-dependent coefficients]{provenance=original}
Let $A(t)$ and $g(t)$ be continuous on an interval $I$ containing $t_0$, and let $\Phi$ be any fundamental matrix of $x' = A(t)x$ on $I$. Then the unique solution of

$$
x' = A(t)x + g(t), \qquad x(t_0) = x_0
$$

on $I$ is

$$
x(t) = \Phi(t)\Phi(t_0)^{-1}x_0 + \int_{t_0}^{t} \Phi(t)\,\Phi(s)^{-1}\,g(s)\,ds ,
$$

and the answer does not depend on which fundamental matrix was used. Writing $U(t,s) = \Phi(t)\Phi(s)^{-1}$ for the propagator, this is again

$$
x(t) = U(t,t_0)\,x_0 + \int_{t_0}^t U(t,s)\,g(s)\,ds ,
$$

identical in shape to the constant-coefficient formula, of which it is the case $U(t,s) = \exp((t-s)A)$. What is lost for non-constant $A$ is only that $U(t,s)$ need no longer depend on $t - s$ alone, and that there is in general no closed form for it: unlike the constant-coefficient case, $\Phi(t) = \exp\bigl(\int_{t_0}^t A\bigr)$ is **false** in general, because $A(t)$ and $\int A$ need not commute. Neither cited source states this version; it is ours.
:::

:::idea{provenance=original}
Run the previous idea with $\Phi$ in place of $\exp(tA)$. Substituting $x = \Phi u$ and using $\Phi' = A\Phi$ makes the $Ax$ terms cancel and leaves $\Phi u' = g$, which can be solved for $u'$ precisely because a fundamental matrix is invertible at every point — the one fact about fundamental matrices that does all the work. Integrating $u'$ from $t_0$ and fitting $u(t_0)$ to the initial condition gives the formula. Independence of the choice of $\Phi$ then needs no computation: two fundamental matrices differ by a constant nonsingular factor on the right, which cancels in every $\Phi(t)\Phi(s)^{-1}$.
:::

:::proof{provenance=original}
1. **$\Phi^{-1}$ is continuous.** By part 2 of the existence statement in :ref[linear systems]{to=ode.linear-systems}, $\det \Phi(s) \neq 0$ for every $s \in I$. The entries of $\Phi(s)^{-1}$ are cofactors of $\Phi(s)$ divided by $\det\Phi(s)$ (:ref[determinants]{to=linalg.determinants}), hence continuous in $s$, being polynomials in continuous functions divided by a nonvanishing continuous function. So $s \mapsto \Phi(s)^{-1}g(s)$ is continuous and its integral is differentiable, with derivative $\Phi(t)^{-1}g(t)$, by the fundamental theorem of calculus.

2. **The substitution.** Put
$$
u(t) = \Phi(t_0)^{-1}x_0 + \int_{t_0}^{t}\Phi(s)^{-1}g(s)\,ds, \qquad x(t) = \Phi(t)u(t) ,
$$
which is the displayed formula once $\Phi(t)$ is taken inside the integral, legitimate because $\Phi(t)$ is constant in $s$. Differentiating the product and using step 1 and $\Phi' = A\Phi$,
$$
x' = \Phi'(t)u(t) + \Phi(t)\Phi(t)^{-1}g(t) = A(t)\Phi(t)u(t) + g(t) = A(t)x(t) + g(t) .
$$

3. **The initial value.** The integral vanishes at $t = t_0$, so $x(t_0) = \Phi(t_0)\Phi(t_0)^{-1}x_0 = x_0$.

4. **Uniqueness.** Two solutions differ by a solution of the homogeneous system vanishing at $t_0$, which is identically zero.

5. **Independence of $\Phi$.** If $\Psi$ is another fundamental matrix then $\Psi = \Phi Q$ for a constant nonsingular $Q$ (part 3 of the existence statement in :ref[linear systems]{to=ode.linear-systems}), so for all $t, s$
$$
\Psi(t)\Psi(s)^{-1} = \Phi(t)QQ^{-1}\Phi(s)^{-1} = \Phi(t)\Phi(s)^{-1} .
$$
Both terms of the formula are built only from such products, so neither changes.

6. **Why $\exp\bigl(\int A\bigr)$ fails.** Set $B(t) = \int_{t_0}^t A(\tau)\,d\tau$. Differentiating the series for $\exp(B(t))$ term by term would need $\frac{d}{dt}B(t)^k = \sum_{j} B^{j}B'B^{k-1-j}$ to collapse to $kB^{k-1}B'$, which requires $B(t)$ and $B'(t) = A(t)$ to commute. They need not: for
$$
A(t) = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix} + t\begin{pmatrix}0&0\\1&0\end{pmatrix}
$$
the two constituent matrices do not commute, and $A(t)$ does not commute with $\int_0^t A$. (This is the same obstruction that makes $\exp(X)\exp(Y) \ne \exp(X+Y)$ for non-commuting $X, Y$; see :ref[the matrix exponential]{to=linalg.matrix-exponential}.) $\square$
:::

:::remark[Duhamel's principle]{provenance=adapted src="evans-2010:§2.3.1(c), p. 47; strauss-2008:§3.4, pp. 77-78"}
The formula above is one instance of a principle with a name. Evans states it for the heat equation — the solution of $u_t - \Delta u = f$ with zero initial data is built by integrating, over the switch-on time $s$, the solutions of the *homogeneous* problem started at time $s$ with initial data $f(\cdot, s)$ — and records in a footnote that the principle applies widely to linear ordinary and partial differential equations and does not depend on the particular structure of the heat equation (:cite{work=evans-2010 loc="§2.3.1(c), p. 47"}). Strauss puts the same thing operationally: a homogeneous problem one already knows how to solve delivers the forced problem as well, and that implication is what the name Duhamel's principle covers (:cite{work=strauss-2008 loc="§3.4, p. 78"}).

Strauss's own ODE template is second order rather than first:

$$
\frac{d^2u}{dt^2} + A^2 u = f(t), \quad u(0) = \varphi, \quad u'(0) = \psi
\qquad\Longrightarrow\qquad
u(t) = S'(t)\varphi + S(t)\psi + \int_0^t S(t-s)f(s)\,ds ,
$$

where $S(t) = A^{-1}\sin tA$ and $S'(t) = \cos tA$, and $A^2$ may be a positive constant or a positive square matrix (:cite{work=strauss-2008 loc="§3.4, (13)-(15), p. 77"}). The key, as he puts it, is that $S(t)\psi$ is the solution of the problem with $\varphi = 0$ and $f = 0$: the solution operator attached to the *velocity* datum is the one that also convolves against the forcing. Our first-order formula is the same statement with $U(t,s)$ in that role, and the two are consistent — writing the second-order equation as a first-order system in $(u, u')$ turns $U(t,0)$ into the block matrix $\begin{pmatrix} \cos tA & A^{-1}\sin tA \\ -A \sin tA & \cos tA\end{pmatrix}$, whose top-right block is $S(t)$.

The same pattern, with the same name, produces the solution of the forced wave equation and of the forced heat equation from their homogeneous solution operators; those are taken up in :ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}. The abstract version, in which $\exp(tA)$ is replaced by a strongly continuous semigroup on a Banach space, is in :ref[operator semigroups]{to=pde.operator-semigroups}.
:::

:::remark[Comparison with scalar variation of parameters, and what the hypotheses do]{provenance=adapted src="coddington-1989:Ch. 2, §10, Theorem 20, (10.3) and (10.4), pp. 85-86"}
**The scalar case is the same calculation.** For $L(y) = y^{(n)} + a_1 y^{(n-1)} + \dots + a_n y = b$, Coddington writes a particular solution as $\psi_p = \sum_k u_k \phi_k$ with $\phi_1, \dots, \phi_n$ a basis of solutions of $L(y) = 0$, and imposes the $n$ conditions

$$
\sum_k u_k' \phi_k^{(j)} = 0 \ \ (j = 0, \dots, n-2), \qquad \sum_k u_k'\phi_k^{(n-1)} = b ,
$$

a linear system whose coefficient determinant is the Wronskian $W(\phi_1, \dots, \phi_n)$ and is therefore nonzero; solving it by Cramer's rule and integrating from $x_0$ gives his formula (10.3), and he records that the resulting $\psi_p$ satisfies $\psi_p(x_0) = \psi_p'(x_0) = \dots = \psi_p^{(n-1)}(x_0) = 0$ (:cite{work=coddington-1989 loc="Ch. 2, §10, Theorem 20, (10.3)-(10.4), pp. 85-86"}). Under the reduction of a scalar equation to a system (:ref[linear systems]{to=ode.linear-systems}), that system of conditions is exactly $\Phi u' = g$ with $g = (0,\dots,0,b)^{\mathsf T}$, the coefficient determinant is $\det \Phi$, and the vanishing initial data are the statement $x(t_0) = 0$ for the Duhamel term. The matrix derivation is the same argument with the bookkeeping done once instead of $n$ times; see also :ref[variation of parameters]{to=ode.variation-of-parameters}.

**Where the hypotheses are used.**
- *Continuity of $g$* is used only in step 1 of each proof, to differentiate the integral. If $g$ is merely piecewise continuous — a switched-on forcing, say — the formula still defines a continuous function, it still satisfies the differential equation at every continuity point of $g$, and $x$ is then continuously differentiable except at the jumps of $g$, where $x'$ jumps by the jump of $g$. Coddington makes the same observation for the scalar formula (:cite{work=coddington-1989 loc="Ch. 2, §10, Exercise 5, p. 90"}). An impulsive forcing is outside the statement altogether and is handled by a jump in the initial condition, or by the transform method of :ref[Laplace transforms for initial-value problems]{to=ode.laplace-transform-method}.
- *$A$ constant* is what makes $U(t,s)$ depend on $t-s$, hence makes the Duhamel term a convolution; for variable $A$ it is still an integral operator, but not a convolution.
- *Invertibility of $\Phi$ at every point* is what the substitution $x = \Phi u$ needs, and it is not an extra assumption: it is automatic for a fundamental matrix.
- *No hypothesis whatever* is needed on the size of $g$: the formula is exact, not an approximation, and there is no smallness or resonance condition. What resonance does is make the integral large, not invalid — see part 2 of the example.
:::

:::method[Solving x' = Ax + g(t)]{provenance=original}
1. **Solve the homogeneous system first.** Get $\exp(tA)$, or a fundamental matrix $\Phi$, by the recipe in :ref[linear systems]{to=ode.linear-systems}. Nothing about the forcing is needed yet.
2. **Decompose the forcing in the eigenbasis**, when there is one. With $A$ diagonalizable, write $g(t) = \sum_j \gamma_j(t)\,v_j$ with $Av_j = \lambda_j v_j$; then $\exp((t-s)A)g(s) = \sum_j e^{\lambda_j(t-s)}\gamma_j(s)\,v_j$ and the $n$-dimensional integral splits into $n$ scalar ones,
$$
x(t) = \sum_j \Bigl[ c_j e^{\lambda_j t} + \int_0^t e^{\lambda_j (t-s)}\gamma_j(s)\,ds \Bigr] v_j .
$$
This is almost always the cheapest route by hand, and it shows at once which modes the forcing excites: a $\gamma_j$ that vanishes leaves mode $j$ unforced.
3. **Or integrate the Duhamel formula directly**, $x(t) = \exp(tA)x_0 + \int_0^t \exp((t-s)A)g(s)\,ds$, when $\exp(tA)$ is available in closed form.
4. **Or guess, when the forcing is of exponential-polynomial type.** If $g(t) = e^{\mu t}w$ with $\mu$ *not* an eigenvalue of $A$, try $z(t) = e^{\mu t}\zeta$: substituting gives $(\mu I - A)\zeta = w$, solvable because $\mu I - A$ is then invertible, so $\zeta = (\mu I - A)^{-1}w$. For $g(t) = e^{\mu t}\bigl(w_0 + tw_1 + \dots\bigr)$ take a polynomial ansatz of the same degree, raising the degree by the size of the largest Jordan block of $\mu$ if $\mu$ *is* an eigenvalue. A sinusoidal real forcing $g(t) = \operatorname{Re}(e^{i\omega t}w)$ is the case $\mu = i\omega$, and the **transfer matrix** $(i\omega I - A)^{-1}$ is the object a physicist calls the system's frequency response.
5. **Add the free term and fit the initial condition.** $x(t) = \exp(tA)x_0 + z(t) - \exp(tA)z(0)$ if $z$ is a particular solution obtained by guessing; or read $x_0$ straight off the Duhamel form, where the initial condition is already built in.
6. **Checks.** $x(0) = x_0$; $x'(0) = Ax_0 + g(0)$; and if $g$ is constant and $A$ invertible, $x(t) \to -A^{-1}g$ as $t \to \infty$ whenever every eigenvalue has negative real part, since then the steady state solves $0 = Ax_\infty + g$.

**What to expect.** If every eigenvalue has $\operatorname{Re}\lambda < 0$, the term $\exp(tA)x_0$ is a **transient** that dies out and the Duhamel term is the **forced response** that survives; the long-time behaviour is then a property of the forcing and not of the initial condition. If the forcing is periodic there is exactly one periodic solution and everything converges to it (see the application). If $\mu$ coincides with an eigenvalue, the ansatz of step 4 fails and the response grows by an extra factor $t$ per repetition: that is **resonance**.
:::

:::example[Two coupled compartments with a source]{provenance=original}
Two well-stirred compartments exchange material with each other at rate $1$ and each loses material to the outside at rate $2$; a source feeds compartment $1$. With $c = (c_1, c_2)^{\mathsf T}$ the amounts present,

$$
c_1' = -2c_1 - (c_1 - c_2) + f(t), \qquad c_2' = -2c_2 - (c_2 - c_1) ,
$$

that is $c' = Ac + g(t)$ with

$$
A = \begin{pmatrix} -3 & 1 \\ 1 & -3\end{pmatrix}, \qquad g(t) = \begin{pmatrix} f(t) \\ 0\end{pmatrix} , \qquad c(0) = \begin{pmatrix}0\\0\end{pmatrix} .
$$

**1. The homogeneous system (step 1).** $A = -3I + \begin{pmatrix}0&1\\1&0\end{pmatrix}$, and the swap matrix has eigenvectors $v_+ = (1,1)^{\mathsf T}$ and $v_- = (1,-1)^{\mathsf T}$ with eigenvalues $+1$ and $-1$. Adding $-3$ to each,

$$
Av_+ = -2v_+, \qquad Av_- = -4 v_- :
$$

$\lambda_+ = -2$ is the slow mode (both compartments together, decaying only through the loss to the outside) and $\lambda_- = -4$ the fast one (the imbalance between them, which also relaxes through the exchange). Both are negative, so the unforced system decays.

**2. Decompose the forcing (step 2).** Since $(1,0)^{\mathsf T} = \tfrac12 v_+ + \tfrac12 v_-$, the forcing is $g(t) = \tfrac12 f(t) v_+ + \tfrac12 f(t) v_-$: it drives both modes equally.

**Part 1: a constant source, $f \equiv 1$.** Step 2's formula with $c(0) = 0$ gives

$$
c(t) = \tfrac12\Bigl[\int_0^t e^{-2(t-s)}ds\Bigr]v_+ + \tfrac12\Bigl[\int_0^t e^{-4(t-s)}ds\Bigr]v_-
= \frac{1 - e^{-2t}}{4}\,v_+ + \frac{1-e^{-4t}}{8}\,v_- ,
$$

using $\int_0^t e^{-a(t-s)}ds = (1 - e^{-at})/a$. Componentwise,

$$
c_1(t) = \frac38 - \frac14 e^{-2t} - \frac18 e^{-4t} , \qquad
c_2(t) = \frac18 - \frac14 e^{-2t} + \frac18 e^{-4t} .
$$

*Checks.* At $t = 0$: $\tfrac38 - \tfrac14 - \tfrac18 = 0$ and $\tfrac18 - \tfrac14 + \tfrac18 = 0$. As $t \to \infty$ the limit is $(\tfrac38, \tfrac18)^{\mathsf T}$, and indeed $-A^{-1}g = \tfrac18\begin{pmatrix}3&1\\1&3\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix} = (\tfrac38, \tfrac18)^{\mathsf T}$, since $\det A = 8$ and $A^{-1} = \tfrac18\begin{pmatrix}-3&-1\\-1&-3\end{pmatrix}$. Substituting into the first equation, $c_1' = \tfrac12 e^{-2t} + \tfrac12 e^{-4t}$ while
$$
-3c_1 + c_2 + 1 = \Bigl(-\tfrac98 + \tfrac18 + 1\Bigr) + \Bigl(\tfrac34 - \tfrac14\Bigr)e^{-2t} + \Bigl(\tfrac38 + \tfrac18\Bigr)e^{-4t} = \tfrac12 e^{-2t} + \tfrac12 e^{-4t} ,
$$
the same. *A number.* At $t = \tfrac12\ln 2$, where $e^{-2t} = \tfrac12$ and $e^{-4t} = \tfrac14$,
$$
c_1 = \tfrac38 - \tfrac18 - \tfrac1{32} = \tfrac{7}{32} = 0.21875 , \qquad
c_2 = \tfrac18 - \tfrac18 + \tfrac1{32} = \tfrac1{32} = 0.03125 ,
$$
so the second compartment holds exactly one seventh of the first at that moment.

**Part 2: a source that resonates with the slow mode, $f(t) = e^{-2t}$.** Now $\mu = -2$ *is* an eigenvalue, so the guess of step 4 is unavailable. The Duhamel integrals of step 2 are still elementary: the $v_+$ integral has $e^{-2(t-s)}e^{-2s} = e^{-2t}$, with no $s$ left in it, so it contributes $t e^{-2t}$, while the $v_-$ integral is an ordinary exponential one:

$$
c(t) = \tfrac12 \Bigl[\int_0^t e^{-2t}\,ds\Bigr]v_+ + \tfrac12\Bigl[\int_0^t e^{-4(t-s)}e^{-2s}ds\Bigr]v_-
= \frac{t}{2}e^{-2t}\,v_+ + \frac{e^{-2t} - e^{-4t}}{4}\,v_- ,
$$

the second integral being $e^{-4t}\int_0^t e^{2s}ds = e^{-4t}(e^{2t}-1)/2$. Componentwise,

$$
c_1(t) = \frac t2 e^{-2t} + \frac{e^{-2t}-e^{-4t}}{4} , \qquad
c_2(t) = \frac t2 e^{-2t} - \frac{e^{-2t}-e^{-4t}}{4} .
$$

*Checks.* Both vanish at $t = 0$. Differentiating $c_1$ gives $\bigl(\tfrac12 - t\bigr)e^{-2t} - \tfrac12 e^{-2t} + e^{-4t} = -te^{-2t} + e^{-4t}$, while
$$
-3c_1 + c_2 + e^{-2t} = -3\Bigl(\tfrac t2 e^{-2t}\Bigr) + \tfrac t2 e^{-2t} - \tfrac{3+1}{4}\bigl(e^{-2t}-e^{-4t}\bigr) + e^{-2t} = -te^{-2t} + e^{-4t} ,
$$
the same. *A number.* At $t = \tfrac12\ln 2$,
$$
c_1 = \frac{\ln 2}{8} + \frac1{16} = 0.149143398 , \qquad c_2 = \frac{\ln 2}{8} - \frac1{16} = 0.024143398 .
$$

**3. What resonance did and did not do.** The secular factor $t$ appears only in the $v_+$ component, the mode whose eigenvalue the forcing matched; the $v_-$ component is an ordinary combination of exponentials. And because $\operatorname{Re}\lambda_+ = -2 < 0$, the product $te^{-2t}$ still decays: resonance with a *decaying* mode produces a bounded bump, peaking at $t = 1/2$ in the $v_+$ coefficient, not unbounded growth. Unbounded growth needs the resonant eigenvalue to sit on the imaginary axis, as it does for an undamped oscillator driven at its natural frequency.
:::

:::application{provenance=original}
- **Transient and steady state in a driven circuit or oscillator.** For a damped linear system driven at a single frequency, $g(t) = \operatorname{Re}(e^{i\omega t}w)$, step 4 of the method gives the steady state $\operatorname{Re}\bigl(e^{i\omega t}(i\omega I - A)^{-1}w\bigr)$, and the Duhamel formula shows that everything else — the dependence on how the system was switched on — is confined to $\exp(tA)x_0$, which decays. The matrix $(i\omega I - A)^{-1}$ is the frequency response: its magnitude is the gain, its argument the phase lag, and its poles are at $i\omega = \lambda$, which is why the response peaks near the imaginary parts of the eigenvalues. Hirsch, Smale and Devaney prove the corresponding exact statement for the damped oscillator forced by $\cos t$: there is exactly one $2\pi$-periodic solution, found by solving $\bigl(\exp(2\pi A) - I\bigr)x_0 = -W$ — solvable because every eigenvalue of $\exp(2\pi A)$ has modulus below $1$ when every eigenvalue of $A$ has negative real part, so $1$ is not among them — and every other solution converges to it (:cite{work=hirsch-smale-devaney-2013 loc="§6.5, pp. 132-133"}).
- **Impulse response and the measurement of a linear system.** Because the response to $g$ is $\int_0^t K(t,s)g(s)\,ds$ with $K(t,s) = \exp((t-s)A)$, the system is characterized completely by what it does to a sharp kick: feed in $g(s) \approx \delta(s)e_j$ and the output is the $j$-th column of $\exp(tA)$. This is why experimentalists measure impulse or step responses rather than solving for $A$ — and why, conversely, deconvolving a measured response against a known forcing recovers the kernel. The same kernel, extended to $s > t$ by zero, is the causal Green's function of :ref[causal Green's functions]{to=green.causal-green-functions}.
- **Heat conduction with a time-dependent source.** Discretizing $u_t = \kappa u_{xx} + f(x,t)$ in space (:ref[finite differences]{to=num.finite-differences}) gives exactly $x' = Ax + g(t)$ with $A$ the discrete Laplacian, and the Duhamel formula is the discrete version of Evans's heat-equation formula: each slice of heat released at time $s$ is diffused for the remaining time $t - s$. Running the same formula with $A$ replaced by the continuum Laplacian and $\exp((t-s)A)$ by the heat kernel gives the continuum statement (:ref[the heat kernel]{to=pde.heat-kernel}).
- **Exponential integrators in numerical practice.** Over one step of length $h$, the exact solution is $x(t+h) = \exp(hA)x(t) + \int_0^h \exp((h-\tau)A)g(t+\tau)\,d\tau$. Approximating only the integral — for example by freezing $g$ at $g(t)$, which gives $x(t+h) \approx \exp(hA)x(t) + A^{-1}(\exp(hA) - I)g(t)$ — yields a method that is exact for the stiff linear part and therefore stable at step sizes an explicit method could not use. This is the basis of exponential time differencing, and it is the practical answer to the stiffness described in :ref[stiffness]{to=num.stiffness}.
- **Linear control and the variation-of-constants formula.** With $g(t) = Bu(t)$ for a control input $u$, the Duhamel formula says the reachable states at time $T$ from the origin are the values of $\int_0^T \exp((T-s)A)Bu(s)\,ds$. The span of those values, as $u$ ranges over all inputs, is the column space of $\bigl(B, AB, \dots, A^{n-1}B\bigr)$ — the controllability criterion — and the formula above is where that criterion comes from.
:::
