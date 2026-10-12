---
id: green.causal-green-functions
title: Causal Green's functions for initial-value problems
kind: method
level: core
summary: Builds the retarded Green's function $G(t,\tau) = H(t-\tau)\,u_\tau(t)$ of a linear initial-value problem, proves that $u(t) = \int_a^t G(t,\tau)f(\tau)\,d\tau$ solves it with zero initial data, specialises to the impulse response of a constant-coefficient system so that the solution becomes a convolution with transfer function $\hat G(\omega)$, works the damped oscillator in full, and shows that vanishing before the impulse makes $\hat G$ analytic in the upper half-plane.
prereqs: [green.green-function-bvp, fourier.convolution-theorem, ode.existence-uniqueness, vcalc.dirac-delta-basics, ode.harmonic-oscillator, fourier.fourier-transform, found.differentiation-under-integral, complex.cauchy-integral-formula, complex.singularities]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.5, Example 10, pp. 176–177: the causal fundamental solution of a $p$th-order operator, the conditions (2.5.47)–(2.5.48) defining $u_\\tau$, the formula (2.5.49) $E = H(t-\\tau)u_\\tau(t)$, its verification against test functions, the remark that causality removes all arbitrariness, and the constant-coefficient reduction $u_\\tau(t) = v(t-\\tau)$. §3.1, pp. 188–191: the causal fundamental solution $H(x-\\xi)u_\\xi(x)$ for continuous coefficients, the solution formula (3.1.9), its constant-coefficient form (3.1.13), and Exercise 3.1.3 on the step response $F$, the relation $E = -\\partial F/\\partial\\tau$ and the two forms (3.1.15). §3.2, p. 195: Green's function for initial conditions, Eq. (3.2.11), and §3.2, Example 6, p. 199: an initial-value problem is never self-adjoint. Also Exercise 1.4.5, pp. 89–90: $mu'' + ku = f$ with $u(0)=\\alpha$, $u'(0)=\\beta$, solved as a Green's integral plus the homogeneous part"
    pages: "89-90, 176-177, 188-191, 195, 199"
    role: the construction of the causal Green's function and its verification, the solution formula, the step-response variant, and the fact that the problem is never self-adjoint
  - work: arfken-2013
    loc: "§10.1, Example 10.1.2 and the preceding remarks, pp. 452–454: a second-order initial-value problem has two conditions at one endpoint, so $G = 0$ for $x<t$ and $G$ is built from continuity and the jump alone; the explicit $G(x,t) = \\sin(x-t)$ for $x>t$; the resulting Eq. (10.26); the observations that the solution at $x$ depends only on $t<x$, that this is causality, and that the Green's function is no longer symmetric. §20.5, pp. 999–1001: the transfer function $\\varphi(\\omega)$, its inverse transform $\\Phi(t)$, the convolution (20.104), the causality requirement (20.105)–(20.106), the high-pass-filter example (20.109), and the interdependence (20.111)–(20.113) of the real and imaginary parts of $\\varphi$ that causality forces. §20.8, Example 20.8.5, p. 1021: the damped oscillator by Laplace transform, with $\\omega_1^2 = k/m - b^2/4m^2$. §12.8, pp. 591–593: dispersion relations as Hilbert-transform pairs (12.117)–(12.118) for a function analytic in the upper half-plane, and the statement that they may be taken as a consequence of causality. §20.8, p. 1022: the \"RLC Analog\" paragraph identifying the damped oscillator of Example 20.8.5 with a series RLC circuit"
    pages: "452-454, 591-593, 999-1001, 1021-1022"
    role: the initial-value Green's function and the loss of symmetry, the transfer-function and causality discussion, the damped-oscillator parameters, and the dispersion relations quoted at the end
  - work: rhb-2006
    loc: "§13.4, Exercise 13.24, p. 465: the impulse response (there called the Green's function) of $T\\dot x + x = \\delta(t)$, obtained both as a limit of rectangular pulses of decreasing width and directly by Laplace transform, with answer $x(t) = T^{-1}e^{-t/T}$"
    pages: "465"
    role: the identification of the causal Green's function with the engineering impulse response, and the pulse-limit picture used in the idea block
---

:::definition[Causal and advanced Green's functions]{provenance=adapted src="stakgold-holst-2011:§2.5, Example 10, (2.5.47)–(2.5.49), pp. 176–177, and §3.2, (3.2.11), p. 195; arfken-2013:§10.1, pp. 452–453"}
Let

$$
Lu = a_p(t)\,u^{(p)} + \dots + a_1(t)\,u' + a_0(t)\,u ,
$$

with continuous coefficients and $a_p \ne 0$, and consider the **initial-value problem**

$$
Lu = f \ \ (t > a), \qquad u(a) = u'(a) = \dots = u^{(p-1)}(a) = 0 .
$$

All $p$ accessory conditions sit at one endpoint. The **causal** (or **retarded**) **Green's function**, which Stakgold and Holst call the causal fundamental solution, is the function $G(t,\tau)$ with

$$
LG(t,\tau) = \delta(t-\tau) , \qquad G(t,\tau) = 0 \ \text{ for } t < \tau ,
$$

derivatives taken in $t$. Unpacked as in :ref[the boundary-value construction]{to=green.green-function-bvp}, this says: $G$ solves $LG = 0$ on each side of $\tau$; $G, \partial_tG,\dots,\partial_t^{\,p-2}G$ are continuous at $t=\tau$; $\partial_t^{\,p-1}G$ jumps there by $1/a_p(\tau)$; and $G$ vanishes to the left. Because $G$ is zero for $t<\tau$ and continuous up to order $p-2$, all those derivatives vanish at $\tau^+$ as well.

The **advanced** Green's function is the other one-sided choice,

$$
LG_{\mathrm{adv}}(t,\tau) = \delta(t-\tau), \qquad G_{\mathrm{adv}}(t,\tau) = 0 \ \text{ for } t > \tau .
$$

When $t$ is time, $G$ is the response at time $t$ to a unit impulse delivered at the earlier time $\tau$: an effect that does not precede its cause. In engineering it is the **impulse response**, and Stakgold and Holst use that name too. For constant coefficients $G$ depends only on the elapsed time, $G(t,\tau) = G_0(t-\tau)$.
:::

:::statement[Construction and the solution formula]{provenance=adapted src="stakgold-holst-2011:§2.5, (2.5.48)–(2.5.49), pp. 176–177; stakgold-holst-2011:§3.1, (3.1.9) and (3.1.13), pp. 188–190; stakgold-holst-2011:§3.2, (3.2.11), p. 195"}
Let $u_\tau$ be the solution of the homogeneous initial-value problem

$$
Lu_\tau = 0 \ \ \text{on the whole interval where the coefficients are defined},
$$
$$
u_\tau(\tau) = u_\tau'(\tau) = \dots = u_\tau^{(p-2)}(\tau) = 0, \qquad u_\tau^{(p-1)}(\tau) = \frac{1}{a_p(\tau)} ,
$$

which exists and is unique because an initial-value problem for a linear equation with continuous coefficients and nonvanishing $a_p$ has exactly one solution. Following Stakgold and Holst's (3.1.10), $u_\tau$ is posed on both sides of $\tau$, not only on $t > \tau$; the advanced Green's function below needs its values for $t < \tau$. Then:

**(i)** The causal Green's function exists, is unique, and is

$$
\boxed{\;G(t,\tau) = H(t-\tau)\,u_\tau(t)\;}
$$

with $H$ the Heaviside step. For $p=2$ this is $G(t,\tau) = H(t-\tau)u_\tau(t)$ with $u_\tau(\tau) = 0$, $u_\tau'(\tau) = 1/a_2(\tau)$. The advanced Green's function is $G_{\mathrm{adv}}(t,\tau) = -H(\tau-t)\,u_\tau(t)$, and the two differ by the homogeneous solution $u_\tau$.

**(ii)** For $f$ piecewise continuous, the initial-value problem with zero initial data has the unique solution

$$
u(t) = \int_a^{b} G(t,\tau)\,f(\tau)\,d\tau = \int_a^{t} u_\tau(t)\,f(\tau)\,d\tau ,
$$

Stakgold and Holst's (3.1.9), where $b$ is any point with $b > t$ (the problem is posed on $t > a$, with no right-hand endpoint; $b$ is introduced only to make the comparison). The upper limit collapses from $b$ to $t$ *because* $G$ vanishes for $\tau > t$: the value of $u$ at time $t$ uses only the forcing up to time $t$. Arfken's Example 10.1.2 is the instance $u'' + u = f$, $u(0) = u'(0) = 0$, with $G(t,\tau) = \sin(t-\tau)$ for $t > \tau$ and $0$ otherwise, and he notes that this is exactly causality.

**(iii)** If the coefficients are constant, then $u_\tau(t) = v(t-\tau)$ with $v$ the solution for $\tau = 0$, so

$$
u(t) = \int_a^{t} v(t-\tau)\,f(\tau)\,d\tau ,
$$

their (3.1.13): the response is the **convolution** of the forcing with the impulse response.

**(iv) Step response.** Let $F(t,\tau)$ solve $LF = H(t-\tau)$ with $F = 0$ for $t<\tau$. Then $-\partial F/\partial\tau = G$, and the solution can also be written

$$
u(t) = F(t,a)\,f(a) + \int_a^{t} F(t,\tau)\,f'(\tau)\,d\tau ,
$$

Stakgold and Holst's (3.1.15), convenient when $f$ is given as a sequence of steps.

**(v) No symmetry.** An initial-value problem is never self-adjoint: whatever $L$ is, the adjoint boundary conditions move to the other endpoint, so they never coincide with the original ones (Stakgold and Holst's Example 6). Correspondingly $G(t,\tau) \ne G(\tau,t)$ — one of them is zero whenever $t \ne \tau$ — and the reciprocity of the self-adjoint boundary-value problem fails completely. Arfken makes the same observation.
:::

:::statement[Transfer function, and what causality does to it]{provenance=adapted src="arfken-2013:§20.5, Eqs. (20.104)–(20.106) and (20.110)–(20.113), pp. 999–1001; arfken-2013:§12.8, Eqs. (12.116)–(12.118), pp. 591–593"}
Let $L$ have constant coefficients and let $G_0(t)$ be the impulse response, so $LG_0 = \delta$ and $G_0(t) = 0$ for $t<0$. Define the **transfer function** (or susceptibility, or frequency response) by the Fourier transform

$$
\hat G(\omega) = \int_{-\infty}^{\infty} G_0(t)\,e^{i\omega t}\,dt = \int_0^{\infty} G_0(t)\,e^{i\omega t}\,dt .
$$

Then, with $P(\,\cdot\,)$ the characteristic polynomial of $L$, that is $L = P(d/dt)$,

$$
\hat G(\omega) = \frac{1}{P(-i\omega)} ,
$$

and the solution of $Lu = f$ with zero data in the far past is the convolution $u = G_0 * f$, equivalently $\hat u(\omega) = \hat G(\omega)\,\hat f(\omega)$ (:ref[the convolution theorem]{to=fourier.convolution-theorem}). Three consequences:

1. **Causality in the time domain.** $G_0(t-\tau) = 0$ for $\tau > t$, so the output at time $t$ is built only from inputs at earlier times, $u(t) = \int_{-\infty}^t G_0(t-\tau)f(\tau)\,d\tau$. These are Arfken's Eqs. (20.105)–(20.106); he derives them by *imposing* that a cause precede its effect.
2. **Causality in the frequency domain.** Because the integral runs only over $t \ge 0$, $e^{i\omega t}$ is bounded there when $\operatorname{Im}\omega \ge 0$, so $\hat G$ extends to a function **analytic in the upper half-plane** $\operatorname{Im}\omega > 0$ (assuming $G_0$ is bounded and integrable, as it is for a stable system). All the poles of $\hat G$, which are the zeros of $P(-i\omega)$, lie in the closed lower half-plane. Neither cited passage of Arfken states this step: his §12.8 *assumes* analyticity in the upper half-plane as a hypothesis, and his §20.5 uses the opposite transform sign, which would put the analyticity in the lower half-plane. The bridge from one-sidedness to analyticity is supplied by Step 4 of the second proof below, and the sign clash is spelt out in the remark on conventions.
3. **Real and imaginary parts are not independent.** Writing $\hat G = u + iv$ on the real axis and assuming $\hat G \to 0$ fast enough at infinity, Cauchy's formula on a contour closed in the upper half-plane gives the **dispersion relations**, the Hilbert-transform pair
   $$
   u(\omega_0) = \frac{1}{\pi}\,\mathrm{P}\!\!\int_{-\infty}^{\infty}\frac{v(\omega)}{\omega-\omega_0}\,d\omega ,
   \qquad
   v(\omega_0) = -\frac{1}{\pi}\,\mathrm{P}\!\!\int_{-\infty}^{\infty}\frac{u(\omega)}{\omega-\omega_0}\,d\omega ,
   $$
   Arfken's (12.118), where $\mathrm{P}$ denotes the Cauchy principal value. In optics these are the Kramers–Kronig relations: refraction and absorption determine one another. Arfken attributes this pair to causality alone, which is why it constrains a response function whatever the underlying interaction happens to be; he derives the corresponding interdependence directly from the transfer function in his Eqs. (20.111)–(20.113). The derivation of the pair itself from analyticity is :ref[dispersion relations]{to=complex.dispersion-relations}.
:::

:::idea{provenance=original}
Think of the forcing as a line of hammer blows. A blow of strength $f(\tau)\,d\tau$ delivered at time $\tau$ leaves the system, immediately afterwards, with every state variable unchanged except the highest one, which receives a kick of size $f(\tau)d\tau/a_p(\tau)$ — that is the jump condition. After that the system runs freely. So the response to one blow is $u_\tau(t)$ scaled by $f(\tau)d\tau$, and the response to all of them is the sum, which is the integral. The only reason the upper limit is $t$ and not $b$ is that blows yet to come have not been struck.

That is why the boundary-value apparatus simplifies so much here. In a boundary-value problem the two conditions sit at opposite ends and have to be met by two different branches of $G$; here both conditions sit at the left end, they force the left branch to vanish identically, and the right branch is then fixed by continuity and the jump alone — with nothing left over. Stakgold and Holst put it that causality removes all arbitrariness from the fundamental solution.

For constant coefficients the system cannot tell what time it is, only how long ago the blow landed, so $G$ depends on $t-\tau$ and the superposition becomes a convolution. A convolution is a product after Fourier transform, and the multiplier is the transfer function. The last step is pure complex analysis: a function that is the transform of something supported on $t\ge0$ cannot be an arbitrary function of $\omega$ — the integral still converges when $\omega$ is pushed upward into the complex plane, so the transfer function is analytic in the whole upper half-plane, and analyticity ties its real and imaginary parts together.
:::

:::proof[The causal Green's function and the solution formula]{provenance=adapted src="stakgold-holst-2011:§2.5, Example 10, pp. 176–177, and §3.1, pp. 188–190"}
Take $p = 2$ for concreteness and indicate the general case at the end; write $L u = a_2u'' + a_1u' + a_0u$.

**Step 1 (the one-sided condition and the initial conditions are the same condition).** The definition imposes $G = 0$ for $t < \tau$; what the problem imposes is instead the $p$ homogeneous initial conditions $G(a,\tau) = \partial_tG(a,\tau) = 0$ at $t=a$. On $[a,\tau)$ these are equivalent. One way: $G \equiv 0$ there certainly satisfies them. The other way: on $[a,\tau)$, $G$ solves $LG = 0$ with vanishing data at $t=a$, and by uniqueness for the initial-value problem (:ref[existence and uniqueness]{to=ode.existence-uniqueness}) the only such solution is $G \equiv 0$. So nothing is lost by taking either as the definition, and we may use both. This equivalence has no analogue in a boundary-value problem, and it is exactly where the two conditions being at the *same* end is used.

**Step 2 (matching at $\tau$).** Continuity of $G$ at $t=\tau$ forces $G(\tau^+,\tau) = 0$. The jump condition forces $\partial_tG(\tau^+,\tau) - \partial_tG(\tau^-,\tau) = 1/a_2(\tau)$, and the second term is $0$ by Step 1, so $\partial_tG(\tau^+,\tau) = 1/a_2(\tau)$.

**Step 3 (the right branch is $u_\tau$).** For $t>\tau$, $G$ solves $LG = 0$ with the initial data just computed at $t=\tau$. That is exactly the problem defining $u_\tau$, which has one and only one solution. Hence $G(t,\tau) = u_\tau(t)$ for $t>\tau$ and $0$ for $t<\tau$, which is $H(t-\tau)u_\tau(t)$. Existence and uniqueness of $G$ follow from existence and uniqueness for that initial-value problem.

**Step 4 (the advanced solution).** Put $G_{\mathrm{adv}} = -H(\tau-t)u_\tau(t)$. It solves $LG=0$ on each side of $\tau$, vanishes for $t>\tau$, is continuous at $\tau$ because $u_\tau(\tau)=0$, and its derivative jumps there by $0 - \bigl(-u_\tau'(\tau)\bigr) = 1/a_2(\tau)$. So it is the advanced Green's function, and $G - G_{\mathrm{adv}} = u_\tau(t)\bigl[H(t-\tau)+H(\tau-t)\bigr] = u_\tau(t)$, a solution of the homogeneous equation, as it must be.

**Step 5 (the integral solves the problem).** Set $u(t) = \int_a^t u_\tau(t)f(\tau)\,d\tau$ and differentiate, using the rule for an integral with a variable limit and a parameter in the integrand (:ref[differentiation under the integral sign]{to=found.differentiation-under-integral}); the integrand and its $t$-derivatives are continuous in $(t,\tau)$, which is what that rule needs. The boundary term at $\tau = t$ involves $u_t(t)$, which is $0$:

$$
u'(t) = \underbrace{u_t(t)}_{=\,0}f(t) + \int_a^t \partial_tu_\tau(t)\,f(\tau)\,d\tau = \int_a^t \partial_tu_\tau(t)\,f(\tau)\,d\tau .
$$

**Step 6 (the second derivative is where the source appears).** Differentiating again, the boundary term now involves $\partial_tu_\tau(t)$ at $\tau = t$, which is $1/a_2(t)$:

$$
u''(t) = \frac{f(t)}{a_2(t)} + \int_a^t \partial_t^2u_\tau(t)\,f(\tau)\,d\tau .
$$

**Step 7 (apply $L$).** Combining Steps 5 and 6,

$$
Lu = a_2(t)\frac{f(t)}{a_2(t)} + \int_a^t \Bigl[a_2\partial_t^2u_\tau + a_1\partial_tu_\tau + a_0u_\tau\Bigr]f(\tau)\,d\tau = f(t) + \int_a^t \bigl(Lu_\tau\bigr)(t)\,f(\tau)\,d\tau = f(t) ,
$$

since $Lu_\tau = 0$. The initial conditions hold because both integrals in Steps 5 and 6 are empty at $t = a$. Uniqueness is uniqueness for the initial-value problem.

**Step 8 (general order).** For order $p$ the same computation runs with $p$ differentiations: the first $p-1$ boundary terms vanish because $u_\tau^{(j)}(\tau) = 0$ for $j \le p-2$, and the $p$th produces $u_\tau^{(p-1)}(t)f(t) = f(t)/a_p(t)$, which $a_p$ turns into $f$. Stakgold and Holst verify the same formula distributionally, pairing $E = H(t-\tau)u_\tau(t)$ against a test function and using Green's formula; every term of the resulting boundary expression vanishes except the one carrying $u_\tau^{(p-1)}(\tau)a_p(\tau) = 1$. $\square$
:::

:::proof[Transfer function and analyticity in the upper half-plane]{provenance=adapted src="arfken-2013:§20.5, (20.104)–(20.110), pp. 999–1000"}
Let the coefficients be constant, $L = P(d/dt)$ with $P(\zeta) = a_p\zeta^p + \dots + a_0$, and let $G_0$ be the impulse response.

**Step 1 (transform the defining equation).** The equation $LG_0 = \delta$ holds in the sense of distributions, and it has to: $G_0$ is not $p$ times classically differentiable at $t = 0$ — the jump in $G_0^{(p-1)}$ there is precisely what produces the delta. So the rule to use is the distributional one. For a tempered distribution $g$ and the convention $\hat g(\omega) = \int g(t)e^{i\omega t}dt$, the transform of the distributional derivative is $\widehat{g'} = -i\omega\,\hat g$, hence $\widehat{g^{(k)}} = (-i\omega)^k\hat g$. (No decay hypothesis enters; decay is what Step 4 will need, for a different purpose.) Transforming $LG_0 = \delta$ and using $\hat\delta = 1$,

$$
P(-i\omega)\,\hat G(\omega) = 1 , \qquad \hat G(\omega) = \frac{1}{P(-i\omega)} .
$$

**Step 2 (the solution is a convolution).** Transforming $Lu = f$ the same way gives $P(-i\omega)\hat u = \hat f$, so $\hat u = \hat G\hat f$, and by the convolution theorem $u = G_0 * f$, that is $u(t) = \int_{-\infty}^{\infty}G_0(t-\tau)f(\tau)\,d\tau$.

**Step 3 (causality truncates the convolution).** $G_0(t-\tau) = 0$ unless $\tau \le t$, so the integral runs only over $\tau \le t$. Arfken runs this step in reverse, taking the vanishing of the kernel for $\tau > t$ as the *definition* of a causal system.

**Step 4 (analytic continuation upward).** Assume the system is stable, so that $G_0$ is bounded and absolutely integrable on $[0,\infty)$. For complex $\omega = \sigma + i\eta$ with $\eta > 0$,

$$
\bigl|G_0(t)e^{i\omega t}\bigr| = \bigl|G_0(t)\bigr|\,e^{-\eta t} \le \bigl|G_0(t)\bigr| \qquad (t \ge 0) ,
$$

so the integral $\int_0^\infty G_0(t)e^{i\omega t}dt$ converges absolutely and uniformly on $\{\operatorname{Im}\omega \ge 0\}$, and converges even better as $\eta$ grows. Differentiating under the integral sign (legitimate by the same uniform bound, with the extra factor $t$ absorbed by $e^{-\eta t}$ for $\eta>0$) shows $\hat G$ is holomorphic there. Here the one-sidedness is everything: had $G_0$ been nonzero for $t<0$, the factor $e^{-\eta t}$ would have *grown* on that part and nothing would converge.

**Step 5 (poles).** By Step 1 the singularities of $\hat G$ are the zeros of $P(-i\omega)$, that is $\omega = i\zeta_j$ where $\zeta_j$ runs over the roots of $P$. Stability means every $\zeta_j$ has $\operatorname{Re}\zeta_j < 0$, hence every pole has $\operatorname{Im}\omega = \operatorname{Re}\zeta_j < 0$: all poles lie strictly below the real axis, consistent with Step 4. $\square$

The passage from analyticity in the upper half-plane to the Hilbert-transform pair is Arfken's §12.8 and is not repeated here; it is :ref[dispersion relations]{to=complex.dispersion-relations}.
:::

:::remark[Where the hypotheses are used, and what differs from the boundary-value case]{provenance=original}
- **All conditions at one endpoint.** Used in Step 1 of the first proof. Move one condition to the other end and the left branch no longer vanishes; one gets the two-sided Green's function of the previous units instead, and the solution at $t$ then depends on the forcing at *later* times — perfectly sensible for a steady-state problem in space, nonsense for a problem in time.
- **Zero initial data.** The formula $u = \int_a^tGf$ solves the problem with $u(a) = \dots = u^{(p-1)}(a) = 0$. Nonzero initial data are handled by superposition: add the solution of the homogeneous equation with those data. Stakgold and Holst's Exercise 1.4.5 (pp. 89–90) writes out both pieces for $m\ddot u + ku = f$ with $u(0)=\alpha$, $\dot u(0)=\beta$.
- **$a_p \ne 0$.** The jump is $1/a_p(\tau)$, so a zero of the leading coefficient at $\tau$ destroys the construction, as it does for boundary-value problems.
- **Stability, for the frequency-domain statements.** Step 4 of the second proof needs $G_0$ integrable on $[0,\infty)$. For an undamped oscillator, $G_0(t) = \sin\omega_0t/m\omega_0$ does not decay, $\hat G$ has poles *on* the real axis at $\pm\omega_0$, and the transfer function exists only as a distribution. The standard repair is to give the poles a small imaginary part — add an infinitesimal damping — which is the same device as the $i\epsilon$ prescription that selects the retarded propagator in field theory.
- **Retarded versus advanced is a choice, not a theorem.** Both solve $LG=\delta$; the differential equation does not know the arrow of time. What picks the retarded one is the physical requirement that nothing respond before it is struck. For an equation in a space variable the opposite choice may be the right one, and in scattering theory the advanced Green's function describes the time-reversed process.
- **No symmetry, no eigenfunction expansion.** Because the problem is not self-adjoint (Stakgold and Holst's Example 6), $G(t,\tau) \ne G(\tau,t)$ and the bilinear series of :ref[the previous unit]{to=green.eigenfunction-expansion-green} does not apply. The frequency-domain representation $\hat G(\omega) = 1/P(-i\omega)$ is its replacement: the poles are still the natural frequencies, but they are complex, and their imaginary parts are decay rates rather than a discrete real spectrum.
:::

:::remark[Sign conventions in the transform]{provenance=original}
This unit uses $\hat g(\omega) = \int g(t)e^{i\omega t}\,dt$, the convention under which a causal response function is analytic in the **upper** half-plane and its poles lie below the real axis. It is the convention of the Kramers–Kronig literature and of Arfken's §12.8, where the dispersion relations are derived for a function analytic in the upper half-plane.

Arfken's §20.5 uses the opposite sign, $\varphi(\omega) = \int_0^\infty\Phi(t)e^{-i\omega t}\,dt$ (his Eq. (20.110)), under which a causal $\Phi$ makes $\varphi$ analytic in the **lower** half-plane and the poles sit above the real axis; he notes only that the resulting constraints on the real and imaginary parts are *similar* to those of §12.8. Both are correct; mixing them flips the half-plane and the sign of every dispersion integral. Whenever a text asserts "causality implies analyticity in the upper half-plane", check which transform it means. The engineering alternative is the Laplace transform $\bar g(s) = \int_0^\infty g(t)e^{-st}dt$, for which causality is automatic, stability is "all poles in $\operatorname{Re}s<0$", and $\bar G(s) = 1/P(s)$; the substitution $s = -i\omega$ converts to the convention used here.
:::

:::method[Solving an initial-value problem with the causal Green's function]{provenance=adapted src="stakgold-holst-2011:§3.1, pp. 188–191; arfken-2013:§10.1, pp. 452–454, and §20.5, pp. 999–1001"}
Given $Lu = f$ for $t > a$ with $p$ initial conditions at $t=a$:

1. **Split off the initial data.** Write $u = u_{\mathrm{h}} + u_{\mathrm{p}}$, where $u_{\mathrm{h}}$ solves $Lu_{\mathrm{h}}=0$ with the given initial data and $u_{\mathrm{p}}$ solves $Lu_{\mathrm{p}}=f$ with zero data. Only the second needs a Green's function.
2. **Find the impulse response.** Solve $Lu_\tau = 0$ with $u_\tau^{(j)}(\tau) = 0$ for $j \le p-2$ and $u_\tau^{(p-1)}(\tau) = 1/a_p(\tau)$. For constant coefficients, solve once at $\tau = 0$ and translate: $u_\tau(t) = v(t-\tau)$.
3. **Check the normalisation.** $u_\tau(\tau)=0$ and $u_\tau'(\tau)=1/a_2(\tau)$ for a second-order problem. Forgetting the $1/a_2$ is the commonest error; it rescales the whole answer.
4. **Integrate.** $u_{\mathrm{p}}(t) = \displaystyle\int_a^t u_\tau(t)f(\tau)\,d\tau$, or $\int_a^t v(t-\tau)f(\tau)\,d\tau$ in the constant-coefficient case. Substituting $s = t-\tau$ usually makes the integral easier, since the exponentials and trigonometric functions then depend on $s$ alone.
5. **Piecewise forcing.** If $f$ is switched on and off, split the integral at the switching times; the Green's function itself does not change. Equivalently use the step response $F$ and Stakgold and Holst's form $u = F(t,a)f(a) + \int_a^tF(t,\tau)f'(\tau)\,d\tau$, which turns a staircase forcing into a finite sum.
6. **For constant coefficients, consider the frequency domain instead.** Read off $\hat G(\omega) = 1/P(-i\omega)$ with no work at all, multiply by $\hat f$, and invert — or just use $\hat G$ directly to answer questions about resonance, bandwidth and phase lag, which is what it is really for.
:::

:::example[The damped oscillator under a pulse]{provenance=original}
Take a mass on a spring with linear damping,

$$
m\ddot u + c\,\dot u + k\,u = f(t), \qquad u(0) = \dot u(0) = 0 ,
$$

and the particular values $m = 1$, $c = 2$, $k = 5$ (SI units throughout).

1. *Impulse response.* Here $a_2 = m$, so $u_\tau$ solves $m\ddot u + c\dot u + ku = 0$ with $u_\tau(\tau)=0$, $\dot u_\tau(\tau) = 1/m$. With $\gamma = c/2m$ and $\omega_d = \sqrt{k/m - \gamma^2}$ — Arfken's $\omega_1$ in his Example 20.8.5 — the underdamped solution is
   $$
   G(t,\tau) = H(t-\tau)\,\frac{1}{m\,\omega_d}\,e^{-\gamma(t-\tau)}\,\sin\bigl[\omega_d(t-\tau)\bigr] .
   $$
   *Check of the normalisation:* at $t = \tau$ the value is $0$, and the $t$-derivative there is $\frac{1}{m\omega_d}\cdot\omega_d = \frac1m$, as required.
2. *Numbers.* $\gamma = 1$, $k/m = 5$, $\omega_d = \sqrt{5-1} = 2$, so
   $$
   G(t,\tau) = \tfrac12\,e^{-(t-\tau)}\sin\bigl[2(t-\tau)\bigr] \quad (t>\tau) .
   $$
3. *A rectangular pulse.* Let $f(t) = 1$ for $0 \le t \le 1$ and $f(t) = 0$ afterwards. Substituting $s = t-\tau$ and using $\int e^{-s}\sin 2s\,ds = -\tfrac15e^{-s}\bigl(\sin 2s + 2\cos 2s\bigr)$, which is checked by differentiating,
   $$
   u(t) = \tfrac12\int_0^{t}e^{-s}\sin 2s\,ds = \frac15 - \frac{e^{-t}\bigl(\sin 2t + 2\cos 2t\bigr)}{10} \qquad (0 \le t \le 1) ,
   $$
   $$
   u(t) = \tfrac12\int_{t-1}^{t}e^{-s}\sin 2s\,ds = \frac{e^{-(t-1)}\bigl(\sin 2(t-1) + 2\cos 2(t-1)\bigr) - e^{-t}\bigl(\sin 2t + 2\cos 2t\bigr)}{10} \qquad (t \ge 1) .
   $$
4. *Checkable numbers.* $u(1) = \tfrac15 - e^{-1}(\sin 2 + 2\cos 2)/10 = 0.19716719$, and $u(3) = -0.03610410$. Integrating the differential equation numerically from $t=0$ to $t=3$ with the same pulse reproduces both to eight decimal places. The sign of $u(3)$ is the system ringing back through zero after the push stops.
5. *Sanity at the two ends.* For small $t$, expanding the first formula gives $u(t) = \tfrac12t^2 - \tfrac13t^3+O(t^4)$: initial acceleration $f/m = 1$, exactly as Newton requires, with the damping entering only at third order. If instead the pulse never ended, $u \to 1/5 = f/k$, the static deflection.
6. *Transfer function.* With $\hat G(\omega) = 1/P(-i\omega)$ and $P(\zeta) = m\zeta^2 + c\zeta + k$,
   $$
   \hat G(\omega) = \frac{1}{k - m\omega^2 - ic\omega} = \frac{1}{5-\omega^2-2i\omega} .
   $$
   Its poles are the roots of $\omega^2 + 2i\omega - 5 = 0$, that is $\omega = \pm 2 - i$: both strictly in the lower half-plane, so $\hat G$ is analytic in the upper half-plane, as causality demands. Their real parts $\pm\omega_d = \pm2$ are the ringing frequency, their common imaginary part $-\gamma = -1$ the decay rate.
7. *Resonance from the formula.* $|\hat G(\omega)|^2 = \bigl[(k-m\omega^2)^2 + c^2\omega^2\bigr]^{-1}$ is largest at $\omega^2 = k/m - 2\gamma^2 = 3$. There the bracket is $c^2\omega_d^2 = 16$, so $|\hat G|^2 = 1/(c\,\omega_d)^2 = 1/16 = 0.0625$ and the amplitude itself is $|\hat G| = 1/(c\,\omega_d) = 1/4$. (A numerical scan of $|5-\omega^2-2i\omega|^{-2}$ in steps of $10^{-3}$ peaks at $\omega = 1.732$ with value $0.0625$.) So the peak response is at $\omega = \sqrt3 = 1.7320508$, slightly below the ringing frequency $\omega_d = 2$ and further below the undamped $\omega_0 = \sqrt5 = 2.2360680$ — three distinct "resonant frequencies" that coincide only when the damping vanishes. At zero frequency $\hat G(0) = 1/k = 0.2$, the static compliance of item 5, and this also equals $\int_0^\infty G_0(t)\,dt$.
8. *Advanced solution, for contrast.* $G_{\mathrm{adv}}(t,\tau) = -\tfrac12e^{-(t-\tau)}\sin[2(t-\tau)]$ for $t<\tau$ and $0$ for $t>\tau$ also satisfies $LG = \delta(t-\tau)$. Used in place of $G$ it would predict a mass that begins oscillating — with exponentially *growing* amplitude as one runs backwards — before the hammer strikes. The mathematics permits it; physics does not.
:::

:::application{provenance=original}
The causal Green's function is the impulse response, and essentially every linear time-invariant system is specified by it.

- **Mechanical and electrical systems.** The damped oscillator above is simultaneously a mass–spring–dashpot, a series $RLC$ circuit with $L,R,1/C$ in place of $m,c,k$ — Arfken's "$RLC$ Analog" of p. 1022 — a galvanometer, and an accelerometer. Its transfer function is the complex impedance or compliance, and the pole locations are what a control engineer moves to tune a response. Riley, Hobson and Bence obtain the impulse response of the first-order system $T\dot x + x = \delta(t)$ both as a limit of rectangular pulses of shrinking width and directly by Laplace transform, which is the simplest instance of the whole scheme.
- **Signal processing.** A filter is the convolution operator $u = G_0 * f$; its frequency response is $\hat G$. Arfken's high-pass filter with $\varphi(\omega) = i\omega RC/(1+i\omega RC)$ is one line of circuit analysis away from the general theory. Causality is the reason an ideal brick-wall filter is unrealisable: a frequency response that is exactly zero on an interval cannot come from a function analytic in a half-plane, so a real filter must trade sharpness against phase distortion and pre-ringing.
- **Response theory in physics.** In linear response, the perturbation $f$ is an applied field and $G_0$ is the retarded correlation function; $\hat G$ is the generalised susceptibility — electric polarisability, magnetic susceptibility, dielectric function, conductivity. Causality forces it to be analytic in the upper half-plane, hence the Kramers–Kronig relations: measure absorption across the whole spectrum and the refractive index follows, and vice versa. This is the standard way optical constants are extracted from reflectivity data, and the same logic constrains scattering amplitudes in particle physics.
- **Field theory and electromagnetism.** The retarded Green's function of the wave operator gives the Liénard–Wiechert potentials: the field at $(\mathbf{r},t)$ depends on the source at the retarded time $t - |\mathbf{r}-\mathbf{r}'|/c$. The choice of retarded over advanced is the same choice made in item 8 above, and the $i\epsilon$ prescription that implements it is the shift of poles described in the remarks (:ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}).
- **Numerics and identification.** Duhamel's formula of part (iv) is the basis of step-response methods in structural dynamics and in control: excite with a step, record $F$, and every other input is handled by one integral against $f'$. Conversely, measuring the response to an approximate impulse — a hammer tap, a chirp, a pseudorandom sequence — and deconvolving gives $G_0$ experimentally, which is system identification.
:::
