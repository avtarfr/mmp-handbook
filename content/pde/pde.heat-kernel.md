---
id: pde.heat-kernel
title: The heat kernel
kind: theorem
level: core
summary: Convolving bounded continuous initial data with the Gaussian kernel (4 pi k t)^{-1/2} exp(-x^2/4kt) solves the heat equation on the line, reproduces the data as t tends to 0, makes the solution positive everywhere at once, and bounds its m-th derivative by t^{-m/2}.
prereqs: [fourier.convolution-theorem, found.gaussian-integrals, found.differentiation-under-integral]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§2.3.1, definition of the fundamental solution and the integral lemma, p. 44; Thm 1, pp. 45–46; infinite propagation speed, pp. 46–47"
    pages: "43-47"
    role: statement of the initial-value theorem; the splitting argument for the initial condition; infinite propagation speed
  - work: strauss-2008
    loc: "§2.4, pp. 46–51, especially the dilation invariance (e) on p. 47, the source function (7) and the solution formula (8) on p. 49"
    pages: "46-51"
    role: the kernel and solution formula with the diffusivity $k$; derivation by dilation invariance; naming and physical reading of the kernel
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §2.1, pp. 146–147 (heat kernel of the line, Thm 2.1) and Thm 2.3, p. 148"
    pages: "146-148"
    role: Fourier-transform derivation of the kernel; the uniqueness statement quoted in the note
  - work: stakgold-holst-2011
    loc: "§2.5, Example 12, pp. 177–178"
    pages: "177-178"
    role: the kernel as the causal fundamental solution in the sense of distributions
---

:::definition[The heat equation and its kernel]{provenance=adapted src="strauss-2008:§2.4, Eq. (1) p. 46 and Eq. (7) p. 49; evans-2010:§2.3.1, p. 44"}
Fix a constant $k > 0$, the **diffusivity**. The **heat equation** (or **diffusion equation**) on the line is

$$
u_t = k\,u_{xx}, \qquad x \in \mathbb{R},\ t > 0 .
$$

Its **heat kernel** is the function

$$
S(x,t) = \frac{1}{\sqrt{4\pi k t}}\, e^{-x^2/4kt}, \qquad x \in \mathbb{R},\ t > 0 ,
$$

extended by $S(x,t) = 0$ for $t < 0$. For each fixed $t > 0$, $S(\cdot,t)$ is the Gaussian probability density of mean $0$ and variance $2kt$.

The same function is called the source function, the propagator, the diffusion kernel, the Gaussian kernel, and the fundamental solution of the heat equation; :cite{work=strauss-2008 loc="p. 50"} lists these names together. :cite[Evans]{work=evans-2010 loc="p. 44"} takes $k = 1$ and works in $\mathbb{R}^n$, where the kernel is $(4\pi t)^{-n/2}e^{-|x|^2/4t}$; the $n = 1$ case of that formula is $S$ with $k = 1$. The normalising constant is fixed by the requirement $\int_{\mathbb{R}} S(x,t)\,dx = 1$.
:::

:::statement[Solution of the initial-value problem]{provenance=adapted src="evans-2010:§2.3.1, Thm 1, p. 45 and pp. 46–47; strauss-2008:§2.4, Eq. (8), p. 49"}
Let $k > 0$ and let $g : \mathbb{R} \to \mathbb{R}$ be continuous and bounded. Define

$$
u(x,t) = \int_{-\infty}^{\infty} S(x - y, t)\, g(y)\,dy
       = \frac{1}{\sqrt{4\pi k t}} \int_{-\infty}^{\infty} e^{-(x-y)^2/4kt}\, g(y)\,dy ,
\qquad x \in \mathbb{R},\ t > 0 .
$$

Then:

1. **Smoothness.** $u \in C^{\infty}\bigl(\mathbb{R} \times (0,\infty)\bigr)$.
2. **Equation.** $u_t(x,t) = k\,u_{xx}(x,t)$ for all $x \in \mathbb{R}$ and all $t > 0$.
3. **Initial data.** For every $x_0 \in \mathbb{R}$,
   $$
   \lim_{\substack{(x,t) \to (x_0, 0)\\ x \in \mathbb{R},\ t > 0}} u(x,t) = g(x_0) .
   $$
   Hence setting $u(x,0) = g(x)$ makes $u$ continuous on $\mathbb{R} \times [0,\infty)$.
4. **Averaging and infinite propagation speed.** $\inf_{\mathbb{R}} g \le u(x,t) \le \sup_{\mathbb{R}} g$ for all $x$ and all $t > 0$. If moreover $g \ge 0$ and $g \not\equiv 0$, then $u(x,t) > 0$ for **every** $x \in \mathbb{R}$ and every $t > 0$, however small.

Part 4 is the statement that the heat equation propagates disturbances at infinite speed: data supported in a small interval is felt everywhere immediately.
:::

:::idea{provenance=original}
Everything comes from three properties of the Gaussian: it solves the equation, it has total integral $1$, and for small $t$ almost all of that integral sits in a tiny interval around the origin. The first two make $u$ a weighted average of the initial values which satisfies the equation, once differentiation under the integral sign is justified; the third makes the weight concentrate at $x_0$, so the average tends to $g(x_0)$. The one quantitative step is to split the integral into the part where $g$ is within $\varepsilon$ of $g(x_0)$ and the rest, and to show that the Gaussian gives the rest almost no weight.
:::

:::proof{provenance=adapted src="evans-2010:Thm 1, pp. 45–46"}
Throughout, $\|g\|_\infty = \sup_{\mathbb{R}}|g|$, which is finite because $g$ is bounded.

**Step 1: $S$ solves the equation for $t > 0$.** Differentiating the explicit formula,

$$
S_t = \Bigl(\frac{x^2}{4kt^2} - \frac{1}{2t}\Bigr) S,
\qquad
S_x = -\frac{x}{2kt}\,S,
\qquad
S_{xx} = \Bigl(\frac{x^2}{4k^2t^2} - \frac{1}{2kt}\Bigr) S ,
$$

so $k\,S_{xx} = S_t$. By translation invariance of the equation in $x$, the function $(x,t) \mapsto S(x - y, t)$ also solves it for each fixed $y$.

**Step 2: unit mass.** Substituting $x = z\sqrt{4kt}$ for fixed $t > 0$,

$$
\int_{-\infty}^{\infty} S(x,t)\,dx = \frac{1}{\sqrt{\pi}}\int_{-\infty}^{\infty} e^{-z^2}\,dz = 1 ,
$$

by the :ref[Gaussian integral]{to=found.gaussian-integrals} $\int e^{-z^2}dz = \sqrt{\pi}$. In particular the integral defining $u$ converges absolutely, with $|u| \le \|g\|_\infty$.

**Step 3: smoothness and the equation (parts 1 and 2).** Fix $R > 0$ and $0 < \delta < T$, and let $Q = [-R, R] \times [\delta, T]$. Each partial derivative $\partial_t^{\,j}\partial_x^{\,m} S(x,t)$ is $P_{j,m}(x, 1/t)\,S(x,t)$ for a polynomial $P_{j,m}$, as Step 1 illustrates; hence on $Q$ there is a constant $C$ with

$$
\bigl|\partial_t^{\,j}\partial_x^{\,m} S(x - y, t)\bigr|
\le C\,\bigl(1 + |x-y|^{2j+m}\bigr)\, e^{-(x-y)^2/4kT} ,
\qquad (x,t) \in Q,\ y \in \mathbb{R} ,
$$

because $t \ge \delta$ bounds the negative powers of $t$ and $t \le T$ bounds the Gaussian from above. For $|y| \ge 2R$ we have $|x - y| \ge |y| - R \ge |y|/2$, so the right-hand side is at most $C(1 + |y|^{2j+m})e^{-y^2/16kT}$; for $|y| \le 2R$ it is at most a constant. In both cases the bound is independent of $(x,t) \in Q$ and integrable in $y$, and so is its product with the bounded function $g$. By :ref[differentiation under the integral sign]{to=found.differentiation-under-integral}, $u$ has partial derivatives of every order on the interior of $Q$, obtained by differentiating $S$ inside the integral. Since $R$, $\delta$, $T$ were arbitrary, $u \in C^\infty(\mathbb{R}\times(0,\infty))$, which is part 1, and

$$
u_t - k\,u_{xx} = \int_{-\infty}^{\infty} \bigl(S_t - k\,S_{xx}\bigr)(x-y,t)\,g(y)\,dy = 0
$$

by Step 1, which is part 2.

**Step 4: the initial data (part 3).** Fix $x_0$ and $\varepsilon > 0$. Since $g$ is continuous at $x_0$, choose $\rho > 0$ with

$$
|g(y) - g(x_0)| < \varepsilon \qquad \text{whenever } |y - x_0| < \rho .
$$

Let $|x - x_0| \le \rho/2$ and $t > 0$. By Step 2 we may subtract the constant $g(x_0)$ inside the integral:

$$
u(x,t) - g(x_0) = \int_{-\infty}^{\infty} S(x-y,t)\,\bigl(g(y) - g(x_0)\bigr)\,dy .
$$

Split the integral at $|y - x_0| = \rho$ and bound the two pieces separately.

- *Near piece.* On $|y - x_0| < \rho$ the integrand is at most $\varepsilon\,S(x-y,t)$ in absolute value, by the choice of $\rho$, and $S > 0$, so by Step 2 this piece is at most $\varepsilon$ in absolute value.
- *Far piece.* On $|y - x_0| \ge \rho$ we use boundedness of $g$: the integrand is at most $2\|g\|_\infty S(x-y,t)$. Moreover $|y - x| \ge |y - x_0| - \rho/2 \ge \tfrac12|y-x_0|$, so $S(x-y,t) \le (4\pi kt)^{-1/2}e^{-(y-x_0)^2/16kt}$. Substituting $y - x_0 = z\sqrt{16kt}$,
  $$
  \int_{|y-x_0|\ge\rho} S(x-y,t)\,dy
  \;\le\; \frac{2}{\sqrt{\pi}} \int_{|z| \ge \rho/(4\sqrt{kt})} e^{-z^2}\,dz ,
  $$
  and the right-hand side tends to $0$ as $t \to 0^{+}$, because the domain of integration shrinks to the empty set while the integrand is fixed and integrable. So there is $\tau > 0$, depending on $\rho$ and $\varepsilon$ but not on $x$, with far piece $< \varepsilon$ for $0 < t < \tau$.

Hence $|u(x,t) - g(x_0)| < 2\varepsilon$ whenever $|x - x_0| \le \rho/2$ and $0 < t < \tau$, which is part 3.

**Step 5: averaging and positivity (part 4).** Since $S(\cdot,t) > 0$ and integrates to $1$, the number $u(x,t)$ is a weighted average of the values of $g$, so it lies between $\inf g$ and $\sup g$. Suppose now $g \ge 0$ and $g(y_0) > 0$ for some $y_0$. By continuity there are $c > 0$ and an interval $[a,b] \ni y_0$ of positive length with $g \ge c$ on $[a,b]$. Then, for any $x$ and any $t > 0$,

$$
u(x,t) \ \ge\ c \int_a^b S(x - y, t)\,dy \ > \ 0 ,
$$

because $S(x-y,t) > 0$ for every $y$. $\square$
:::

:::statement[Smoothing]{provenance=original}
Let $g$ be continuous and bounded and let $u$ be as above. For every integer $m \ge 1$ and every $t > 0$,

$$
\sup_{x \in \mathbb{R}} \bigl|\partial_x^m u(x,t)\bigr| \ \le\ \gamma_m\, \|g\|_\infty\, (2kt)^{-m/2},
\qquad
\gamma_m = \int_{-\infty}^{\infty} \bigl|\varphi^{(m)}(z)\bigr|\,dz ,
$$

where $\varphi(z) = (2\pi)^{-1/2}e^{-z^2/2}$ is the standard Gaussian density. The first two constants are

$$
\gamma_1 = \sqrt{\tfrac{2}{\pi}} = 0.797884\ldots,
\qquad
\gamma_2 = 4\varphi(1) = \sqrt{\tfrac{8}{\pi e}} = 0.967882\ldots ,
$$

so that $|u_x| \le \|g\|_\infty/\sqrt{\pi k t}$. No smoothness whatever is assumed of $g$: the bound involves only its supremum. It degrades as $t \to 0^+$ and improves without limit as $t$ grows.
:::

:::proof{provenance=original}
Write $\sigma = \sqrt{2kt}$, so that $S(x,t) = \sigma^{-1}\varphi(x/\sigma)$ by the definition of $S$. Differentiating $m$ times in $x$,

$$
\partial_x^m S(x,t) = \sigma^{-(m+1)}\,\varphi^{(m)}(x/\sigma) ,
$$

and substituting $x = \sigma z$ gives $\int |\partial_x^m S(x,t)|\,dx = \sigma^{-m}\gamma_m$, which is finite because $\varphi^{(m)}$ is a polynomial times $\varphi$. Step 3 of the previous proof allows the derivative to be taken inside the integral, so

$$
\bigl|\partial_x^m u(x,t)\bigr|
= \Bigl|\int \partial_x^m S(x-y,t)\,g(y)\,dy\Bigr|
\le \|g\|_\infty \int \bigl|\partial_x^m S(x-y,t)\bigr|\,dy
= \gamma_m\,\|g\|_\infty\,\sigma^{-m} ,
$$

which is the claim. For the constants: $\varphi'(z) = -z\varphi(z)$, so $\gamma_1 = \int |z|\varphi(z)\,dz = 2\int_0^\infty z\varphi(z)\,dz = 2\varphi(0) = \sqrt{2/\pi}$. Next $\varphi''(z) = (z^2-1)\varphi(z)$, so $|z^2-1|\varphi$ equals $\varphi''$ on $|z| > 1$ and $-\varphi''$ on $|z| < 1$; integrating each of the three pieces with $\varphi'' = (\varphi')'$,

$$
\gamma_2 = \int_{-\infty}^{\infty}|z^2-1|\varphi(z)\,dz
= \bigl[\varphi'\bigr]_{-\infty}^{-1} - \bigl[\varphi'\bigr]_{-1}^{1} + \bigl[\varphi'\bigr]_{1}^{\infty}
= 4\varphi(1) ,
$$

using $\varphi'(\pm1) = \mp\varphi(1)$ and $\varphi'(\pm\infty) = 0$. $\square$
:::

:::remark[Three ways to find the kernel]{provenance=adapted src="strauss-2008:§2.4, pp. 47–49; evans-2010:§2.3.1, pp. 43–44; stein-shakarchi-2003:Ch. 5, §2.1, p. 146; stakgold-holst-2011:§2.5, Example 12, pp. 177–178"}
The theorem says the kernel works; it does not say how to find it. The books take three routes.

- **Dilation invariance.** If $u$ solves $u_t = k u_{xx}$, so does $u(\sqrt{a}\,x, at)$ for every $a > 0$ :cite{work=strauss-2008 loc="property (e), p. 47"}. Strauss therefore first solves the equation with the step initial datum $Q(x,0) = 1$ for $x>0$, $0$ for $x<0$, which is itself dilation invariant, so $Q$ can depend on $x$ and $t$ only through $p = x/\sqrt{4kt}$; the equation becomes the ordinary differential equation $g'' + 2pg' = 0$, whose solution is an error function, and $S = \partial Q/\partial x$ :cite{work=strauss-2008 loc="Steps 1–4, pp. 47–49"}. Evans instead looks for a solution invariant under $u(x,t) \mapsto \lambda^{\alpha}u(\lambda^{\beta}x, \lambda t)$, finds $\beta = 1/2$ and $\alpha = n/2$ forced, and reduces to a radial ordinary differential equation :cite{work=evans-2010 loc="pp. 43–44"}.
- **Fourier transform.** With the convention $\hat f(\xi) = \int f(x)e^{-2\pi i x\xi}\,dx$ used by :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="p. 146"}, transforming the equation in $x$ turns it into $\partial_t \hat u = -4\pi^2 k\xi^2 \hat u$ for each fixed $\xi$, so $\hat u(\xi,t) = \hat g(\xi)\,e^{-4\pi^2 k \xi^2 t}$. The transform of a Gaussian is a Gaussian, so $e^{-4\pi^2 k\xi^2 t}$ is itself the transform of a Gaussian in $x$; inverting it gives exactly $S(\cdot,t)$, whence $u = g * S$ by the :ref[convolution theorem]{to=fourier.convolution-theorem}. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Example 12, pp. 177–178"} run the same computation with the convention $\hat f(\omega)=\int f(x)e^{i\omega x}dx$ and with a delta source in time, obtaining $H(t)(4\pi t)^{-1/2}e^{-x^2/4t}$ for $k=1$ as the *causal* fundamental solution, the one vanishing for $t<0$; this is why $S$ is defined to be $0$ for $t < 0$.
- **As a limit of data.** Equivalently, $S(\cdot,t)$ is the solution whose initial datum is a unit point mass: $S \to \delta_0$ as $t \to 0^+$. Both Evans and Stakgold–Holst state the problem in this form, the first by writing $\Phi = \delta_0$ at $t=0$ :cite{work=evans-2010 loc="p. 46"}, the second by noting that $E$ solves the homogeneous equation with $\lim_{t\to0}E(x,t) = \delta(x)$ :cite{work=stakgold-holst-2011 loc="p. 178"}.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Boundedness of $g$* is used twice in Step 4: to make the far piece small, and (through Step 2) to make the integral converge at all. It can be relaxed, but not freely: against the Gaussian weight $e^{-(x-y)^2/4kt}$, the datum $g(y) = e^{y^2}$ gives an integrand whose exponent has $y^2$-coefficient $1 - 1/(4kt)$, so the integral converges for $0 < t < 1/4k$ and diverges for every $t \ge 1/4k$. A formula that stops existing after a finite time is no solution, which is why boundedness (or at least sub-Gaussian growth) is assumed from the start.
- *Continuity of $g$ only at $x_0$* is what Step 4 actually uses; boundedness is needed globally. So part 3 holds at every point of continuity of a bounded, piecewise-continuous datum, as the second example below shows. Parts 1 and 2, and the averaging bound $\inf g \le u \le \sup g$ of part 4, need no continuity at all — only boundedness and measurability. The strict positivity in part 4 does use continuity, at one point where $g > 0$: for the bounded $g \ge 0$ that is $1$ at $y = 0$ and $0$ elsewhere, $g \not\equiv 0$ but $u \equiv 0$.
- *$t > 0$ and $k > 0$.* $S$ is defined only for $t > 0$: at $t = 0$ the formula is meaningless, as :cite{work=strauss-2008 loc="p. 50"} points out, and the solution is recovered there only as a limit. The sign of $k$ matters: replacing $t$ by $-t$ turns the Gaussian into $e^{+x^2/4kt}$, which is not integrable, so the formula gives nothing backwards in time.
- *Positivity in part 4 cannot be upgraded to a bound on the speed of a signal.* The value $u(x,t)$ for $|x|$ large is positive but exponentially small, of size $e^{-x^2/4kt}$; see the numbers in the second example. The wave equation behaves differently and does have a finite propagation speed (:ref[d'Alembert's formula]{to=pde.dalembert}).
:::

:::note{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 2.3, p. 148"}
The theorem produces a solution; it does not say that there is only one. Uniqueness needs a restriction on the growth of $u$. Stein and Shakarchi prove that if $u$ is continuous on $\mathbb{R}\times[0,\infty)$, solves the heat equation for $t>0$, vanishes at $t=0$, and $u(\cdot,t)$ lies in the Schwartz class uniformly for $0<t<T$ in the sense that $\sup_{x,\,0<t<T}|x|^{j}|\partial_x^{\ell}u(x,t)| < \infty$ for all $j,\ell \ge 0$, then $u \equiv 0$; the proof differentiates the energy $\int |u|^2dx$ and shows that it decreases. For merely bounded solutions, uniqueness follows instead from the :ref[maximum principle]{to=pde.heat-maximum-principle}.
:::

:::example[Gaussian initial data spread as a Gaussian]{provenance=original}
Take $g(x) = \theta_0\,e^{-x^2/2a^2}$, a bell of height $\theta_0$ and width $a > 0$. The convolution of two Gaussians is Gaussian, and the variances add: the datum has variance $a^2$, the kernel variance $2kt$, so

$$
u(x,t) = \theta_0\,\frac{a}{\sqrt{a^2 + 2kt}}\;\exp\!\Bigl(-\frac{x^2}{2(a^2 + 2kt)}\Bigr) .
$$

*Check that this solves the problem.* Write $w(t) = a^2 + 2kt$, so $u = \theta_0 a\,w^{-1/2}e^{-x^2/2w}$. Then $u_t = \theta_0 a\,e^{-x^2/2w}\bigl(k x^2 w^{-5/2} - k w^{-3/2}\bigr)$ and $u_{xx} = \bigl(x^2/w^2 - 1/w\bigr)u$, so $u_t = k\,u_{xx}$; and $w(0) = a^2$ gives $u(x,0) = g(x)$.

*Numbers.* With $\theta_0 = 1$, $a = 1$ and $k = 1$ (any consistent units), the width grows as $\sqrt{1 + 2t}$ and the peak falls as $1/\sqrt{1+2t}$. At $t = 1.5$ the variance is $1 + 3 = 4$, so the peak has halved exactly: $u(0,1.5) = 1/2$. The product (peak) $\times$ (width) is $\theta_0 a$ for all $t$, which is Step 2 again: $\int u\,dx = \int g\,dx = \theta_0 a\sqrt{2\pi}$ is conserved.

*Smoothing bound.* Here $\|g\|_\infty = 1$ and $\sup_x|u_x| = \theta_0 a\,w^{-1}e^{-1/2}$, attained at $x = \pm\sqrt{w}$. At $t=1.5$, $k=1$ this is $e^{-1/2}/4 = 0.1516$, comfortably under the general bound $1/\sqrt{\pi k t} = 0.4607$ of the smoothing statement.
:::

:::example[A box of heat, and infinite propagation speed in numbers]{provenance=original}
Let $g = \theta_0$ on $[-L, L]$ and $g = 0$ outside: a slab of hot material, initially at temperature $\theta_0$, placed in a cold line. This $g$ is bounded and continuous except at $x = \pm L$, so parts 1, 2 and 4 of the theorem apply as stated and part 3 applies at every $x_0 \ne \pm L$, by the second item of the remark on hypotheses.

Substituting $z = (y-x)/\sqrt{4kt}$ in the solution formula and using $\operatorname{erf}(s) = \frac{2}{\sqrt\pi}\int_0^s e^{-z^2}dz$,

$$
u(x,t) = \frac{\theta_0}{2}\left[ \operatorname{erf}\!\Bigl(\frac{L-x}{\sqrt{4kt}}\Bigr) + \operatorname{erf}\!\Bigl(\frac{L+x}{\sqrt{4kt}}\Bigr) \right] .
$$

Take $\theta_0 = 1$, $L = 1$, $k = 1$.

1. *Centre.* $u(0,1) = \operatorname{erf}(1/2) = 0.520500$: after a time $L^2/k$ the centre has cooled by nearly half.
2. *Outside the slab.* $u(2,1) = \frac12[\operatorname{erf}(-1/2) + \operatorname{erf}(3/2)] = 0.222803$.
3. *Far outside.* $u(10,1) = \frac12[\operatorname{erf}(-9/2)+\operatorname{erf}(11/2)] = 9.83 \times 10^{-11}$. It is positive, as part 4 demands, and utterly negligible: this is what infinite propagation speed amounts to in practice.
4. *At the jump.* $u(L,t) = \frac12\bigl[\operatorname{erf}(0) + \operatorname{erf}(L/\sqrt{kt})\bigr] \to \tfrac12$ as $t \to 0^+$, the average of the two one-sided limits of $g$ — not $g(L)$, whatever value we assign there. Part 3 genuinely fails at a jump.
5. *Smoothing.* Differentiating, $u_x(x,t) = (4\pi kt)^{-1/2}\bigl[e^{-(L+x)^2/4kt} - e^{-(L-x)^2/4kt}\bigr]$. At $t = 1$ its largest absolute value is $0.20604$, at $x = \pm 1.54340$, against the bound $\|g\|_\infty/\sqrt{\pi k t} = 0.56419$. The initial datum was not even continuous; a moment later the solution is $C^\infty$ with a derivative bounded by $0.57$.
:::

:::application{provenance=original}
**The diffusion length.** Every use of the kernel in the laboratory is really a use of its width: after a time $t$, matter or heat initially at a point has spread over a distance of order $\sqrt{2kt}$ (one standard deviation) or $\sqrt{4kt}$ (the length appearing in the exponent). Turned around, the time to spread a distance $\ell$ is of order $\ell^2/k$, quadratic in the distance, which is why diffusion is fast over micrometres and hopeless over metres.

- *Molecules in water.* A small molecule in water has $D$ of order $10^{-5}\,\mathrm{cm^2/s}$. Spreading one standard deviation of $1\,\mathrm{cm}$ takes $t = \ell^2/2D \approx 5\times10^4\,\mathrm{s}$, about $14$ hours: unstirred solutions do not mix. Across a $10\,\mu\mathrm{m} = 10^{-3}\,\mathrm{cm}$ cell the same estimate gives $10^{-6}/(2\times10^{-5}) = 5\times10^{-2}\,\mathrm{s}$, which is why diffusion suffices inside a cell and circulation is needed between cells.
- *Heat in metal.* Copper has thermal diffusivity of order $1.1\,\mathrm{cm^2/s}$. Heat applied to one face of a $1\,\mathrm{cm}$ plate is felt on the other in $\ell^2/4k \approx 0.23\,\mathrm{s}$; for a stainless steel of diffusivity $0.04\,\mathrm{cm^2/s}$ the same thickness takes about $6\,\mathrm{s}$. This single number governs quench rates, soldering times and the thermal lag of furnace walls.
- *Probability.* The kernel is the transition density of Brownian motion. Strauss states this as: the probability that a particle starting at $x$ lies in $(a,b)$ at time $t$ is $\int_a^b S(x-y,t)\,dy$ for some constant $k$, so that a concentration profile and a probability density obey the same equation :cite{work=strauss-2008 loc="p. 51"}. He does not fix the constant; matching the kernel's variance $2kt$ against the convention in which the motion has variance $\sigma^2 t$ gives $k = \sigma^2/2$, half the diffusion coefficient in that normalisation. See :ref[Brownian motion]{to=prob.brownian-motion} and :ref[the Fokker-Planck equation]{to=prob.fokker-planck}.
- *Smoothing, and its reverse.* The derivative bound $|\partial_x^m u| \le \gamma_m\|g\|_\infty(2kt)^{-m/2}$ says that diffusion erases detail at a rate set by $t^{-m/2}$: a feature of width $\lambda$ in the data is invisible once $\sqrt{2kt} \gg \lambda$. Recovering the data from a later profile therefore amplifies small errors without bound, which is the reason inverse heat-conduction problems (inferring a surface temperature history from an interior measurement) must be regularised.

The kernel is also the building block for the inhomogeneous problem and for bounded domains: convolving it in time against a source gives Duhamel's formula (:ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}), and reflecting it in a boundary gives the kernel of a half-line or an interval (:ref[diffusion in bounded domains]{to=pde.heat-bounded-domains}).
:::
