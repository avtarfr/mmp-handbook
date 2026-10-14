---
id: dyn.relaxation-averaging
title: Relaxation oscillations and averaging
kind: method
level: core
summary: "Gives the two approximations that turn a known limit cycle into numbers: in the strongly damped limit the orbit splits into slow crawls along a nullcline and instantaneous jumps between its branches, so the period is a single quadrature; in the weakly nonlinear limit two-timing collapses the oscillator to a pair of averaged equations for a slowly drifting amplitude and phase."
prereqs: [dyn.poincare-bendixson, asym.regular-perturbation, dyn.flows-on-the-line, dyn.linearization, dyn.linear-planar-classification, ode.harmonic-oscillator, fourier.fourier-series, asym.asymptotic-series]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§7.4 Lienard systems, pp. 210-211: the equation $\\ddot x + f(x)\\dot x + g(x) = 0$ named after Lienard and its reading as a unit mass with nonlinear damping $-f(x)\\dot x$ and nonlinear restoring force $-g(x)$; the equivalent first-order system $\\dot x = y$, $\\dot y = -g(x) - f(x)y$; Lienard's theorem with its five hypotheses - $f, g$ continuously differentiable on all of $\\mathbb{R}$, $g$ odd, $g(x) > 0$ for $x > 0$, $f$ even, and $F(x) = \\int_0^x f$ having exactly one positive zero $a$, being negative on $(0,a)$, positive and nondecreasing on $(a,\\infty)$, and tending to $\\infty$ - concluding a unique stable limit cycle around the origin, with the proof referred to Jordan and Smith, Grimshaw and Perko; the plausibility argument that small oscillations are pumped up and large ones damped; Example 7.4.1 checking the hypotheses for van der Pol with $a = \\sqrt3$. §7.5 Relaxation oscillations, pp. 211-215: the shift from the qualitative question of existence to the quantitative question of shape and period; the strongly nonlinear van der Pol limit $\\mu \\gg 1$; the name relaxation oscillation and the slow-buildup-sudden-discharge picture, with the bowed violin string and periodically firing nerve cells as instances; Example 7.5.1, which introduces $F(x) = \\frac13 x^3 - x$, $w = \\dot x + \\mu F(x)$ and $y = w/\\mu$ to reach $\\dot x = \\mu[y - F(x)]$, $\\dot y = -x/\\mu$, and the nullcline argument that off the cubic $|\\dot x| \\sim O(\\mu)$ while $|\\dot y| \\sim O(\\mu^{-1})$, so trajectories move horizontally onto the cubic, crawl down it to the knee and jump across; the two time scales, crawls $O(\\mu)$ and jumps $O(\\mu^{-1})$; Example 7.5.2 estimating the period as twice the time on one slow branch, with $dt = -\\mu(x^2-1)\\,dx/x$, the branch running from $x = 2$ to $x = 1$, and the answer $T \\approx \\mu(3 - 2\\ln 2)$; and the refinement $T \\approx \\mu(3 - 2\\ln 2) + 2\\alpha\\mu^{-1/3}$, where $\\alpha = 2.338$ is the smallest root of $\\mathrm{Ai}(-\\alpha) = 0$, attributed to Cartwright (1952) and derived in Grimshaw. §7.6 Weakly nonlinear oscillators, pp. 215-227: the class $\\ddot x + x + \\epsilon h(x,\\dot x) = 0$ with $0 < \\epsilon \\ll 1$ and $h$ smooth, with van der Pol and Duffing as the two basic instances; the two-timing substitution $\\tau = t$, $T = \\epsilon t$ treated as independent, the expansion $x = x_0(\\tau,T) + \\epsilon x_1(\\tau,T) + O(\\epsilon^2)$ and the transformed derivatives $\\dot x = \\partial_\\tau x + \\epsilon\\partial_T x$; the $O(1)$ equation $\\partial_{\\tau\\tau}x_0 + x_0 = 0$ with solution $x_0 = r(T)\\cos(\\tau+\\phi(T))$ and the $O(\\epsilon)$ equation $\\partial_{\\tau\\tau}x_1 + x_1 = -2\\partial_{\\tau T}x_0 - h$; the removal of resonant forcing as the step that fixes $r$ and $\\phi$; the Fourier expansion of $h$ in $\\theta = \\tau+\\phi$ and the resulting averaged equations $r' = \\langle h\\sin\\theta\\rangle$, $r\\phi' = \\langle h\\cos\\theta\\rangle$ of Eq. (53), p. 224, with the table of standard averages (54); Examples 7.6.2 and 7.6.3 for van der Pol, giving $r' = \\frac12 r(1 - \\frac14 r^2)$, $\\phi' = 0$, radius $2 + O(\\epsilon)$, frequency $1 + O(\\epsilon^2)$ and the transient envelope; Example 7.6.4 for Duffing, giving $\\omega = 1 + \\frac38\\epsilon a^2$ and the hardening and softening spring interpretation; and the validity rule of thumb on p. 227, that $x_0$ stays within $O(\\epsilon)$ of $x$ for times up to $O(1/\\epsilon)$ from the same initial condition, and for all time if the solution is periodic"
    pages: "210-227"
    role: Lienard's theorem with its five hypotheses, reported unchanged; the Lienard-plane change of variables and the slow-fast reading of the phase portrait; the route of the period quadrature, which we carry out for a general even $f$ rather than for the cubic; the two-timing derivation of the averaged equations and the table of averages; the Cartwright correction term, quoted; the validity rule of thumb, reported as a rule of thumb
  - work: hirsch-smale-devaney-2013
    loc: "§12.1 An RLC circuit, pp. 257-261: the series circuit, Kirchhoff's two laws, the generalised Ohm's law $v_R = f(i_R)$ with the graph of $f$ called the characteristic of the resistor, the reduction of the state space to the two coordinates $(i_L, v_C)$, and the resulting system $\\dot x = y - f(x)$, $\\dot y = -x$ after setting $L = C = 1$. §12.2 The Lienard equation, pp. 261-262: this system under the name Lienard equation; the linear case $f(x) = kx$ with eigenvalues $\\lambda_\\pm = \\frac12(-k \\pm \\sqrt{k^2-4})$ and the origin a sink; the general case with its unique equilibrium at $(0, f(0))$, linearisation $\\begin{pmatrix} -f'(0) & 1 \\\\ -1 & 0\\end{pmatrix}$ and eigenvalues $\\frac12(-f'(0) \\pm \\sqrt{f'(0)^2-4})$, a sink when $f'(0) > 0$ and a source when $f'(0) < 0$; and the Liapunov function $W = \\frac12(x^2+y^2)$ with $\\dot W = -xf(x)$, which forces every solution to the origin when the resistor is passive. §12.3 The van der Pol equation, pp. 263-270: the case $f(x) = x^3 - x$; the theorem that there is exactly one nontrivial periodic solution and every other solution except the equilibrium tends to it; the four basic regions cut out by the nullclines $x = 0$ and $y = x^3-x$ and the proof that every nonequilibrium solution winds clockwise around the origin; the Poincare map $P$ on the half-line $v^+$, the semi-return map $\\alpha$ and the function $\\delta(y) = \\frac12(\\alpha(y)^2 - y^2)$; the skew symmetry $G(-x,-y) = -G(x,y)$; and the computation $\\delta(p) = \\int_\\gamma x^2(1-x^2)$ from $\\dot W = -x f(x)$"
    pages: "257-270"
    role: the circuit that the van der Pol equation was written for; the Lienard plane $\dot x = y - f(x)$, $\dot y = -x$ as a coordinate system in its own right rather than a device for the large-$\mu$ limit; the sign of $f'(0)$ as the stability test at the origin; and the uniqueness-and-global-attraction theorem for van der Pol, quoted as the rigorous statement behind the asymptotics
---

:::definition[Lienard systems, relaxation and weakly nonlinear limits]{provenance=adapted src="strogatz-1994:§7.4, p. 210, and §7.6, p. 215; hirsch-smale-devaney-2013:§12.2, p. 261"}
A **Lienard equation** is a second-order scalar equation

$$
\ddot x + f(x)\,\dot x + g(x) \;=\; 0 ,
$$

read as a unit mass carrying a position-dependent damping coefficient $f$ and a restoring force $-g$. Written as a planar system in the usual way it becomes

$$
\dot x = y , \qquad \dot y = -g(x) - f(x)\,y . \tag{L}
$$

Throughout, $f$ and $g$ are continuously differentiable on all of $\mathbb{R}$ and

$$
F(x) \;=\; \int_0^x f(u)\,du
$$

denotes the antiderivative of the damping coefficient that vanishes at $0$.

The **van der Pol oscillator** is the case $g(x) = x$, $f(x) = \mu(x^2-1)$:

$$
\ddot x + \mu\,(x^2-1)\,\dot x + x \;=\; 0 , \qquad \mu > 0 .
$$

Its damping is negative for $\lvert x\rvert < 1$ and positive for $\lvert x\rvert > 1$, so small motions are driven and large ones are braked. Two opposite limits of this one equation are the subject of this unit.

- The **relaxation limit** is $\mu \gg 1$. The cycle then consists of long intervals of slow drift separated by short, almost instantaneous transitions, and an oscillation with that waveform is called a **relaxation oscillation**: tension built up slowly is released suddenly, and the build-up begins again.
- The **weakly nonlinear limit** is the opposite extreme. A **weakly nonlinear oscillator** is an equation
$$
\ddot x + x + \epsilon\,h(x,\dot x) \;=\; 0 , \qquad 0 < \epsilon \ll 1 ,
$$
with $h$ smooth: a small perturbation of the harmonic oscillator of :ref[]{to=ode.harmonic-oscillator}. Van der Pol with $\mu = \epsilon$ small is the case $h(x,\dot x) = (x^2-1)\dot x$, and the undamped Duffing oscillator is the case $h(x,\dot x) = x^3$.

One further piece of notation is needed. Hirsch, Smale and Devaney use the name Lienard system for the first-order pair

$$
\dot x = y - \varphi(x) , \qquad \dot y = -x , \tag{L$'$}
$$

which is what the circuit of their Chapter 12 produces directly, with $\varphi$ the current-voltage characteristic of the resistor. The two forms are related by $\varphi = F$ and $g(x) = x$: we verify this in the proof below, where (L$'$) appears as the natural coordinate system for the relaxation limit. Their van der Pol equation is (L$'$) with $\varphi(x) = x^3-x$, which is our van der Pol equation with $\mu = 1$ after the rescaling $x \mapsto x/\sqrt3$. When the letter $f$ appears below it always means the damping coefficient in (L), never the characteristic in (L$'$).
:::

:::statement[Lienard's theorem]{provenance=adapted src="strogatz-1994:§7.4, Lienard's Theorem, pp. 210-211"}
Impose on the coefficients of (L) the following five conditions.

1. Both $f$ and $g$ are continuously differentiable on the whole real line.
2. $g$ is an odd function: $g(-x) = -g(x)$ at every $x$.
3. On the positive axis $g$ is strictly positive: $g(x) > 0$ whenever $x > 0$.
4. $f$ is an even function: $f(-x) = f(x)$ at every $x$.
5. The antiderivative $F(x) = \int_0^x f(u)\,du$, which conditions 1 and 4 make odd and continuously differentiable, vanishes at exactly one point $a$ of the positive axis; it takes negative values throughout $0 < x < a$; on $x > a$ it is positive and never decreasing; and $F(x)$ is unbounded above as $x$ grows.

Under conditions 1-5 the planar system (L) has exactly one closed orbit. That orbit encloses the origin, and it is a stable limit cycle.

No proof is given here. Strogatz states the theorem and points to the monograph literature for the argument; we follow him in that, and use the conclusion only as a licence to write *the* cycle rather than *a* cycle. In the van der Pol case conditions 1-4 need no checking, and $F(x) = \tfrac{\mu}{3}x(x^2-3)$ satisfies condition 5 with $a = \sqrt3$; so every $\mu > 0$ gives a system with exactly one cycle, and that cycle attracts.

A sharper statement is available in the single case $\mu = 1$. Hirsch, Smale and Devaney prove, for (L$'$) with $\varphi(x) = x^3 - x$, that there is exactly one nontrivial periodic solution and that every solution other than the equilibrium tends to it.
:::

:::statement[The period of a relaxation oscillation]{provenance=adapted src="strogatz-1994:§7.5, Examples 7.5.1 and 7.5.2, pp. 212-214"}
Take $g(x) = x$ and a damping coefficient $\mu f(x)$ with $\mu > 0$, so that the equation is

$$
\ddot x + \mu\,f(x)\,\dot x + x \;=\; 0 ,
$$

and assume

- $f$ is even and continuously differentiable, with $f(0) < 0$;
- $f$ has a smallest positive zero $x_B$, with $f < 0$ on $(0,x_B)$ and $f > 0$ on $(x_B,\infty)$;
- $F(x) = \int_0^x f \to \infty$ as $x \to \infty$.

Then $F$ is odd, has its only positive minimum at $x_B$ with $F(x_B) < 0$, and there is a unique $x_A > x_B$ with $F(x_A) = -F(x_B)$. As $\mu \to \infty$ the period of the limit cycle satisfies

$$
\boxed{\;T \;=\; 2\mu \int_{x_B}^{x_A} \frac{f(x)}{x}\,dx \;+\; o(\mu) \;}
$$

The leading term is $O(\mu)$: the cycle is slow, and almost all of the time is spent creeping along the two slow branches.

For van der Pol, $f(x) = x^2-1$ gives $x_B = 1$ and $x_A = 2$, and the integral is $\tfrac32 - \ln 2$, so

$$
T \;=\; \mu\,(3 - 2\ln 2) + o(\mu) \;\approx\; 1.6137\,\mu .
$$

Strogatz reports a refinement of this van der Pol formula, due to Cartwright, in which the next term is $+\,2\alpha\mu^{-1/3}$ with $\alpha = 2.338$ the smallest root of $\mathrm{Ai}(-\alpha) = 0$; the correction comes from the time taken to round the corner between a jump and a crawl. We neither prove nor generalise that term, but the example below checks numerically that the error in the boxed formula does decay like $\mu^{-1/3}$ for a damping coefficient other than the cubic one.
:::

:::statement[The averaged equations]{provenance=adapted src="strogatz-1994:§7.6, pp. 218-224, Eq. (53), p. 224"}
Let $h$ be smooth and consider the weakly nonlinear oscillator

$$
\ddot x + x + \epsilon\,h(x,\dot x) \;=\; 0 , \qquad 0 < \epsilon \ll 1 .
$$

Introduce the fast time $\tau = t$ and the slow time $T = \epsilon t$, treat them as independent variables, and seek

$$
x(t,\epsilon) \;=\; x_0(\tau,T) + \epsilon\,x_1(\tau,T) + O(\epsilon^2)
$$

with $x_0$ and $x_1$ bounded in $\tau$. Then necessarily

$$
x_0(\tau,T) \;=\; r(T)\,\cos\bigl(\tau + \phi(T)\bigr) ,
$$

and, writing $\theta = \tau + \phi$ and

$$
\langle\, \cdot \,\rangle \;=\; \frac{1}{2\pi}\int_0^{2\pi} (\,\cdot\,)\, d\theta , \qquad
h \;=\; h\bigl(r\cos\theta,\; -r\sin\theta\bigr) ,
$$

the slowly varying amplitude $r$ and phase $\phi$ obey the **averaged equations**

$$
\frac{dr}{dT} \;=\; \bigl\langle\, h\,\sin\theta \,\bigr\rangle , \qquad
r\,\frac{d\phi}{dT} \;=\; \bigl\langle\, h\,\cos\theta \,\bigr\rangle ,
$$

in which $r$ is held fixed while the average over $\theta$ is taken. The angular frequency of the resulting oscillation is

$$
\omega \;=\; \frac{d}{dt}\bigl(\tau + \phi(T)\bigr) \;=\; 1 + \epsilon\,\frac{d\phi}{dT} + O(\epsilon^2) .
$$

Strogatz gives the following rule of thumb for the accuracy of the leading term, and refers the precise statements to the monograph literature: $x_0$ stays within $O(\epsilon)$ of the true solution started from the same data for all times up to and including $t \sim O(1/\epsilon)$, and, if the true solution is periodic, for all time.
:::

:::idea{provenance=original}
Both halves of the unit are the same trick: find the one coordinate in which the motion is slow, and integrate along it.

In the relaxation limit the fast coordinate is $x$ itself. Changing variables so that the damping is absorbed into the vertical coordinate turns the equation into a system in which the horizontal speed is $O(\mu)$ everywhere except on one curve, and $O(1/\mu)$ on it. A trajectory therefore shoots horizontally onto that curve, crawls along it until the curve turns over, and shoots across again. Only the crawls take any time, and on a crawl the motion is one-dimensional, so the period is an ordinary integral.

In the weakly nonlinear limit the fast coordinate is the phase of an almost harmonic oscillation, and the slow ones are its amplitude and phase offset. Declaring the two time scales independent and refusing to let the first correction grow without bound forces the slow variables to drift at exactly the rate at which the perturbation pumps energy and advances phase per cycle; that rate is a Fourier coefficient, and extracting it is an average.
:::

:::proof[The period of a relaxation oscillation]{provenance=adapted src="strogatz-1994:§7.5, pp. 212-214"}
**Step 1: a coordinate in which the damping is integrated.** The two terms $\ddot x + \mu f(x)\dot x$ are the time derivative of $\dot x + \mu F(x)$, because $\frac{d}{dt}F(x) = f(x)\dot x$ by the chain rule. So with

$$
w \;=\; \dot x + \mu F(x)
$$

the equation $\ddot x + \mu f(x)\dot x + x = 0$ says exactly $\dot w = -x$. Rescaling the new coordinate as $y = w/\mu$ gives the planar system

$$
\dot x \;=\; \mu\bigl[\,y - F(x)\,\bigr] , \qquad \dot y \;=\; -\frac{x}{\mu} . \tag{$\ast$}
$$

This is the form (L$'$) of the definition up to the factors of $\mu$, which are what carry the limit.

**Step 2: everywhere off the curve $y = F(x)$ the motion is horizontal.** Suppose $\lvert y - F(x)\rvert$ and $\lvert x \rvert$ are both of order $1$. Then ($\ast$) gives $\lvert \dot x\rvert \sim \mu$ and $\lvert \dot y \rvert \sim 1/\mu$, so the velocity vector is longer horizontally than vertically by a factor $\mu^2$. The trajectory is therefore horizontal to within $O(\mu^{-2})$, and its direction is set by the sign of $y - F(x)$: rightward above the curve, leftward below it, so in both cases towards the curve. Crossing a horizontal distance of order $1$ at speed $\mu$ takes a time of order $\mu^{-1}$: this is the jump.

**Step 3: on the curve the motion is slow and one-dimensional.** The trajectory cannot stay off the curve, and it cannot cross it transversally at speed $\mu$, so it must settle into the region where $y - F(x)$ is small enough for the two components of ($\ast$) to be comparable, namely $y - F(x) = O(\mu^{-2})$. To leading order the trajectory then follows $y = F(x)$. Differentiating that relation along the trajectory and using the second equation of ($\ast$),

$$
f(x)\,\dot x \;=\; \frac{d}{dt}F(x) \;=\; \dot y \;=\; -\frac{x}{\mu} ,
\qquad\text{so}\qquad
\dot x \;=\; -\frac{x}{\mu\,f(x)} .
$$

The speed is $O(\mu^{-1})$: this is the crawl. Separating variables, the time to traverse a piece of the curve is

$$
dt \;=\; -\,\frac{\mu\,f(x)}{x}\,dx .
$$

**Step 4: the endpoints of a crawl.** The branch of $y = F(x)$ to the right of $x_B$ is where $F$ increases ($f > 0$ there), and it is the branch the flow descends: on it $x > 0$, $f(x) > 0$, so $\dot x < 0$. The crawl ends where the branch ends, at the local minimum $x = x_B$ of $F$, since $F'(x_B) = f(x_B) = 0$. There the trajectory jumps horizontally, at the level $y = F(x_B)$, to the only other point of the curve at that height. Because $F$ is odd, that point is $x = -x_A$, where $x_A > x_B$ is determined by

$$
F(x_A) \;=\; -F(x_B) .
$$

Such an $x_A$ exists and is unique: on $(x_B,\infty)$ the function $F$ increases strictly from $F(x_B) < 0$ to $+\infty$, so it takes the value $-F(x_B) > 0$ exactly once. By the oddness of $F$ and $x \mapsto -x$, $y \mapsto -y$ symmetry of ($\ast$), the left branch is traversed from $-x_A$ to $-x_B$ in the same time, after which the trajectory jumps to $+x_A$ and the cycle repeats.

**Step 5: the period.** The two crawls contribute equally, and each takes

$$
\int dt \;=\; \int_{x_A}^{x_B} \Bigl(-\frac{\mu f(x)}{x}\Bigr) dx \;=\; \mu\int_{x_B}^{x_A}\frac{f(x)}{x}\,dx ,
$$

which is positive because $f > 0$ and $x > 0$ on $(x_B,x_A)$. The two jumps contribute $O(\mu^{-1})$ each. Hence

$$
T \;=\; 2\mu\int_{x_B}^{x_A}\frac{f(x)}{x}\,dx \;+\; o(\mu) ,
$$

as claimed. $\square$
:::

:::proof[The averaged equations]{provenance=adapted src="strogatz-1994:§7.6, pp. 219-224"}
**Step 1: the chain rule in two times.** With $\tau = t$ and $T = \epsilon t$ regarded as independent, any function $u(\tau,T)$ evaluated along the solution has

$$
\frac{du}{dt} \;=\; \partial_\tau u + \epsilon\,\partial_T u .
$$

Applying this twice to $x = x_0 + \epsilon x_1 + O(\epsilon^2)$,

$$
\ddot x \;=\; \partial_{\tau\tau}x_0 \;+\; \epsilon\bigl(\partial_{\tau\tau}x_1 + 2\,\partial_{\tau T}x_0\bigr) \;+\; O(\epsilon^2) ,
\qquad
\dot x \;=\; \partial_\tau x_0 + O(\epsilon) .
$$

**Step 2: the two orders.** Substituting into $\ddot x + x + \epsilon h(x,\dot x) = 0$ and collecting powers of $\epsilon$ gives

$$
O(1):\quad \partial_{\tau\tau}x_0 + x_0 = 0 ,
\qquad
O(\epsilon):\quad \partial_{\tau\tau}x_1 + x_1 = -2\,\partial_{\tau T}x_0 \;-\; h\bigl(x_0,\partial_\tau x_0\bigr) .
$$

The $O(1)$ equation is the harmonic oscillator in the fast variable only, so its general solution is $x_0 = r\cos\tau + s\sin\tau$ with $r$ and $s$ constant in $\tau$ — but free to depend on $T$, which is the whole point of the method. Writing the same thing in amplitude-phase form,

$$
x_0(\tau,T) \;=\; r(T)\cos\theta , \qquad \theta = \tau + \phi(T) .
$$

**Step 3: what the right-hand side looks like.** From $x_0 = r\cos\theta$ we get $\partial_\tau x_0 = -r\sin\theta$ and $\partial_T x_0 = r'\cos\theta - r\phi'\sin\theta$, where $'$ is $d/dT$; differentiating the latter in $\tau$,

$$
\partial_{\tau T}x_0 \;=\; -\,r'\sin\theta \;-\; r\phi'\cos\theta .
$$

So the $O(\epsilon)$ equation reads

$$
\partial_{\tau\tau}x_1 + x_1 \;=\; 2r'\sin\theta + 2r\phi'\cos\theta \;-\; h(\theta) ,
\qquad
h(\theta) := h\bigl(r\cos\theta,\,-r\sin\theta\bigr) .
$$

**Step 4: kill the resonance.** In the fast variable $\tau$, with $T$ frozen, the left-hand side is the harmonic oscillator of unit frequency, and $\theta$ differs from $\tau$ by the constant $\phi$. A forcing term proportional to $\sin\theta$ or $\cos\theta$ is therefore resonant and produces a response growing like $\tau$ (:ref[]{to=asym.regular-perturbation}); such an $x_1$ is not bounded in $\tau$, so the expansion assumed at the outset would be invalid once $\tau \sim 1/\epsilon$. We must make the first harmonic of the right-hand side vanish.

Since $h(\theta)$ is $2\pi$-periodic in $\theta$, expand it in a Fourier series (:ref[]{to=fourier.fourier-series}),

$$
h(\theta) \;=\; \frac{a_0}{2} + \sum_{k\ge 1}\bigl(a_k\cos k\theta + b_k\sin k\theta\bigr) ,
\qquad
a_k = \frac1\pi\int_0^{2\pi}\! h\cos k\theta\, d\theta , \quad
b_k = \frac1\pi\int_0^{2\pi}\! h\sin k\theta\, d\theta .
$$

The coefficient of $\sin\theta$ on the right-hand side is $2r' - b_1$ and that of $\cos\theta$ is $2r\phi' - a_1$. Setting both to zero,

$$
r' \;=\; \frac{b_1}{2} \;=\; \frac1{2\pi}\int_0^{2\pi} h(\theta)\sin\theta\, d\theta \;=\; \langle h\sin\theta\rangle ,
\qquad
r\phi' \;=\; \frac{a_1}{2} \;=\; \langle h\cos\theta\rangle .
$$

These are the averaged equations. No other harmonic is resonant, so with this choice $x_1$ can be solved for as a bounded $2\pi$-periodic function of $\theta$ plus a harmonic term, and the expansion is consistent.

**Step 5: the frequency.** The argument of the cosine in $x_0$ is $\theta = \tau + \phi(T) = t + \phi(\epsilon t)$, so

$$
\omega \;=\; \frac{d\theta}{dt} \;=\; 1 + \epsilon\,\phi'(T) ,
$$

correct through first order in $\epsilon$; the $O(\epsilon^2)$ frequency shift is invisible at this order and would require a third time scale $t_2 = \epsilon^2 t$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
**Relaxation.** Evenness of $f$ and oddness of $g$ enter only in Step 4, to say that the two crawls are mirror images and so contribute equally; without the symmetry the same argument gives the period as a sum of two different integrals, one per branch. The requirement that $f$ has a *single* positive zero is what makes $y = F(x)$ have exactly one knee on each side, hence exactly one jump per half-cycle; a damping coefficient with two positive zeros produces a nullcline with two knees and a correspondingly more elaborate itinerary. The condition $f(0) < 0$ makes the origin a source, so that the system is not simply damped to rest. Finally the estimate is asymptotic in $\mu$ only: the neglected corner regions contribute at order $\mu^{-1/3}$, which is *larger* than the $O(\mu^{-1})$ jumps and is the true next term.

**Averaging.** The derivation needs $h$ smooth enough for the Fourier series of $h(\theta)$ to have well-defined first harmonics, which continuity is already enough for, and needs the unperturbed problem to be the *harmonic* oscillator, so that the kernel of $\partial_{\tau\tau} + 1$ is spanned by $\cos\theta$ and $\sin\theta$ and "resonant" means "first harmonic". If the unperturbed restoring force is nonlinear, every harmonic of the unperturbed orbit can resonate, and the method must be rebuilt in action-angle variables.

The boundedness of $x_1$ in $\tau$ is a *requirement imposed by us*, not a consequence of the equation; it is what selects the averaged equations out of the many ways of splitting the solution between $x_0$ and $x_1$. Drop it and the expansion still solves the equation order by order, but it reproduces the useless secular series of :ref[]{to=asym.regular-perturbation}.

Nothing in the derivation justifies treating $\tau$ and $T$ as independent, and Strogatz says plainly that this is hard to make rigorous. What is being asserted is only an asymptotic approximation on a stated time interval, and the rule of thumb quoted in the statement is reported as a rule of thumb. The honest check is the one carried out in the examples below: solve the full equation numerically and compare.

A warning that both halves share: the two limits are limits of the same equation, and the formulas do not meet in the middle. The relaxation formula predicts $T \approx 1.6137\mu$ for van der Pol and the averaging calculation predicts $T \approx 2\pi$; at $\mu = 1$ these read $1.61$ and $6.28$, and neither is right (the true period is about $6.66$).
:::

:::method[Getting numbers out of a limit cycle]{provenance=adapted src="strogatz-1994:§7.4, Example 7.4.1, p. 211, §7.5, pp. 212-214, and §7.6, pp. 223-226"}
Given $\ddot x + f(x)\dot x + g(x) = 0$, or any planar system suspected of oscillating:

1. **Establish that a cycle exists** before approximating it. Either check the five hypotheses of Lienard's theorem, or build a trapping region and apply :ref[]{to=dyn.poincare-bendixson}.
2. **Decide which limit you are in.** Measure the damping against the restoring force. If the damping coefficient is large compared with the frequency, you are in the relaxation limit; if it is small, in the weakly nonlinear limit. Introduce an explicit parameter ($\mu$ or $\epsilon$) that makes this quantitative, rescaling $x$ and $t$ if necessary.

*Relaxation limit ($\mu \gg 1$, equation $\ddot x + \mu f(x)\dot x + x = 0$):*

3. Form $F(x) = \int_0^x f$ and pass to the Lienard plane $\dot x = \mu[y - F(x)]$, $\dot y = -x/\mu$.
4. Locate the knee $x_B$, the smallest positive zero of $f$, and the landing point $x_A > x_B$, the unique solution of $F(x_A) = -F(x_B)$.
5. Evaluate $T \approx 2\mu\int_{x_B}^{x_A} f(x)\,dx/x$. Expect a relative error of order $\mu^{-4/3}$.

*Weakly nonlinear limit ($0 < \epsilon \ll 1$, equation $\ddot x + x + \epsilon h(x,\dot x) = 0$):*

6. Substitute $x = r\cos\theta$, $\dot x = -r\sin\theta$ into $h$ and expand the result in powers of $\cos\theta$ and $\sin\theta$.
7. Average term by term, using $\langle\cos^2\rangle = \langle\sin^2\rangle = \tfrac12$, $\langle\cos^4\rangle = \langle\sin^4\rangle = \tfrac38$, $\langle\cos^2\sin^2\rangle = \tfrac18$, $\langle\cos^6\rangle = \langle\sin^6\rangle = \tfrac5{16}$, and $\langle\,\cdot\,\rangle = 0$ for any monomial $\cos^m\theta\sin^n\theta$ with $m+n$ odd.
8. Read off $r' = \langle h\sin\theta\rangle$ and $r\phi' = \langle h\cos\theta\rangle$. The limit cycles are the positive zeros of $r'$, their stability is that of the corresponding fixed points of the one-dimensional flow $r' = \langle h\sin\theta\rangle$ (:ref[]{to=dyn.flows-on-the-line}), their amplitude is the root $r_\ast$, and their frequency is $1 + \epsilon\,\langle h\cos\theta\rangle/r_\ast$.
9. For the transient, solve the scalar equation for $r(T)$ and restore $T = \epsilon t$.
:::

:::example[A quartic relaxation oscillator, and the size of the error]{provenance=original}
Take the damping coefficient $f(x) = x^4 - 1$, so the equation is

$$
\ddot x + \mu\,(x^4-1)\,\dot x + x \;=\; 0 , \qquad \mu \gg 1 .
$$

**Lienard's theorem applies.** $f$ and $g(x) = x$ are polynomials, $g$ is odd and positive on $x>0$, and $f$ is even. Here

$$
F(x) \;=\; \frac{x^5}{5} - x \;=\; \frac{x}{5}\,\bigl(x^4 - 5\bigr) ,
$$

whose only positive zero is $a = 5^{1/4} \approx 1.49535$; $F < 0$ on $(0,a)$; $F' = f > 0$ for $x > 1$, so $F$ is increasing, hence positive and nondecreasing, on $(a,\infty)$; and $F \to \infty$. So there is a unique stable limit cycle.

**The knee and the landing point.** The smallest positive zero of $f$ is $x_B = 1$, and $F(1) = \tfrac15 - 1 = -\tfrac45$. We need $x_A > 1$ with $F(x_A) = \tfrac45$, that is

$$
\frac{x^5}{5} - x = \frac45
\quad\Longleftrightarrow\quad
x^5 - 5x - 4 = 0
\quad\Longleftrightarrow\quad
(x+1)\bigl(x^4 - x^3 + x^2 - x - 4\bigr) = 0 .
$$

The quartic factor is negative at $x=1$ (value $-4$) and positive at $x=2$ (value $+2$), and its derivative $4x^3-3x^2+2x-1$ is positive for $x \ge 1$, so it has exactly one root there. Newton's method from $x=1.7$ gives

$$
x_A \;=\; 1.6506291914\ldots
$$

**The period.** With $f(x)/x = x^3 - 1/x$,

$$
\int_{1}^{x_A}\Bigl(x^3 - \frac1x\Bigr)dx
\;=\; \Bigl[\frac{x^4}{4} - \ln x\Bigr]_{1}^{x_A}
\;=\; \frac{x_A^4}{4} - \ln x_A - \frac14 .
$$

Numerically $x_A^4 = 7.4233184$, so $x_A^4/4 = 1.8558296$ and $\ln x_A = 0.5011569$, giving the integral $1.1046727$ and

$$
\boxed{\;T \;=\; 2.209346\,\mu + o(\mu)\;}
$$

**Check against the full equation.** Integrating $\dot x = \mu[y - F(x)]$, $\dot y = -x/\mu$ numerically (DOP853/LSODA, relative tolerance $10^{-11}$) from $(2,0)$ and measuring the time between successive upward crossings of $x = 0$ on the settled orbit:

| $\mu$ | $T$ (numerical) | $T/\mu$ | $T - 2.209346\,\mu$ |
|---|---|---|---|
| $10$ | $24.82190$ | $2.482190$ | $2.72844$ |
| $100$ | $222.22477$ | $2.222248$ | $1.29016$ |
| $1000$ | $2209.94354$ | $2.209944$ | $0.59745$ |

$T/\mu$ converges to the predicted $2.209346$, and the residual shrinks by factors $2.115$ and $2.159$ when $\mu$ is multiplied by $10$ — against $10^{1/3} = 2.15443$. So the first correction to the boxed formula is of order $\mu^{-1/3}$ here too, exactly as in the van der Pol case for which Cartwright computed its coefficient.
:::

:::example[A Rayleigh-Duffing oscillator by averaging]{provenance=original}
Consider

$$
\ddot x + x + \epsilon\bigl(\dot x^3 - 2\dot x + x^3\bigr) \;=\; 0 , \qquad 0 < \epsilon \ll 1 ,
$$

a cubically damped oscillator — negative damping at small speeds, positive at large ones — on a hardening spring. Here $h(x,\dot x) = \dot x^3 - 2\dot x + x^3$.

**Substitute.** With $x = r\cos\theta$ and $\dot x = -r\sin\theta$,

$$
h(\theta) \;=\; -r^3\sin^3\theta + 2r\sin\theta + r^3\cos^3\theta .
$$

**Average.** Multiplying by $\sin\theta$ and averaging, the term $\cos^3\theta\sin\theta$ has odd total degree and averages to zero, so

$$
r' \;=\; \langle h\sin\theta\rangle \;=\; -r^3\langle\sin^4\theta\rangle + 2r\,\langle\sin^2\theta\rangle
\;=\; -\tfrac38 r^3 + r \;=\; \tfrac38\,r\Bigl(\tfrac83 - r^2\Bigr) .
$$

Multiplying by $\cos\theta$ instead, both $\sin^3\theta\cos\theta$ and $\sin\theta\cos\theta$ average to zero and only the Duffing term survives:

$$
r\phi' \;=\; \langle h\cos\theta\rangle \;=\; r^3\langle\cos^4\theta\rangle \;=\; \tfrac38 r^3 ,
\qquad\text{so}\qquad \phi' = \tfrac38 r^2 .
$$

**Read off the cycle.** The scalar flow $r' = \tfrac38 r(\tfrac83 - r^2)$ on $r > 0$ has the single fixed point

$$
r_\ast \;=\; \sqrt{8/3} \;=\; \tfrac23\sqrt6 \;=\; 1.6329932\ldots ,
$$

and $r'$ is positive below it and negative above it, so it is stable: a stable limit cycle of amplitude $r_\ast + O(\epsilon)$. On it $\phi' = \tfrac38\cdot\tfrac83 = 1$ exactly, so

$$
\omega \;=\; 1 + \epsilon + O(\epsilon^2) , \qquad T \;=\; \frac{2\pi}{1+\epsilon} + O(\epsilon^2) .
$$

**The transient.** Put $u = r^2$. Then $u' = 2rr' = 2u - \tfrac34u^2$, a logistic equation with growth rate $2$ and capacity $\tfrac83$, so

$$
u(T) \;=\; \frac{8/3}{1 + C e^{-2T}} , \qquad C \;=\; \frac{8}{3\,r(0)^2} - 1 ,
$$

and with $r(0) = 1$ (so $C = 5/3$) the envelope is $r(t) = \bigl[(8/3)\bigl(1+\tfrac53 e^{-2\epsilon t}\bigr)^{-1}\bigr]^{1/2}$.

**Check against the full equation.** Integrating the second-order equation numerically (DOP853, relative tolerance $10^{-11}$) from $x(0)=1$, $\dot x(0)=0$ and reading the amplitude and the period off the settled orbit:

| $\epsilon$ | amplitude | error vs $1.632993$ | $\omega$ | error vs $1+\epsilon$ |
|---|---|---|---|---|
| $0.10$ | $1.538603$ | $-0.094390$ | $1.082264$ | $-0.017736$ |
| $0.05$ | $1.579771$ | $-0.053222$ | $1.044980$ | $-0.005020$ |
| $0.02$ | $1.609904$ | $-0.023089$ | $1.019124$ | $-0.000876$ |

The amplitude error falls by roughly the factor by which $\epsilon$ falls — it is $O(\epsilon)$, as advertised. The frequency error falls by $3.5$ and then by $5.7$ as $\epsilon$ is halved and then divided by $2.5$, against $4$ and $6.25$ for a quadratic: it is $O(\epsilon^2)$, which is why the frequency prediction is the more accurate of the two.
:::

:::application[Nerve cells, bowed strings and clocks]{provenance=adapted src="strogatz-1994:§7.5, p. 212, and §7.6, pp. 226-227; hirsch-smale-devaney-2013:§12.1, pp. 257-260, and §12.3, p. 263"}
Van der Pol wrote his equation for a vacuum-tube oscillator, and the circuit that produces it is still the cleanest derivation: in a series circuit with one resistor whose current-voltage characteristic is not monotone, Kirchhoff's laws and the capacitor and inductor relations reduce the state to the inductor current and the capacitor voltage, and give exactly $\dot x = y - \varphi(x)$, $\dot y = -x$. The non-monotone piece of $\varphi$ is the part of the characteristic where the device acts as a source rather than a sink of energy, and it is what makes the circuit oscillate on its own instead of ringing down. A linear circuit can never behave this way, which is what the uniqueness theorem records: an isolated periodic orbit attracting all other solutions is impossible for a linear system.

The relaxation limit is the normal regime for excitable biological tissue. A neuron at rest integrates input slowly, fires in a millisecond, and resets: the slow-fast decomposition of this unit is the skeleton of the FitzHugh-Nagumo reduction of the Hodgkin-Huxley equations, with the cubic nullcline playing the part of the membrane's current-voltage curve and the knee playing the part of the firing threshold. The same picture, with mechanical names, describes stick-slip motion: a bowed violin string, a squealing brake, an earthquake fault. The practical payoff of the formula in this unit is that the period of such an oscillator is set by the *slow* variable alone, so it scales linearly with the large damping parameter and is almost independent of the details of the fast jump.

Averaging answers a different question, and the one experimenters usually ask about a nearly sinusoidal oscillator: how do amplitude and frequency depend on each other? For a linear oscillator the frequency does not depend on the amplitude at all; the term $r\phi' = \langle h\cos\theta\rangle$ measures exactly the failure of that isochronism. In the example above it is a hardening spring that shifts the frequency up; a pendulum, whose restoring force softens, shifts it down, which is why a pendulum clock must be driven at a fixed amplitude to keep time. The same two averaged equations are the standard tool for the response of a driven weakly nonlinear oscillator, where fixed points of the averaged system are phase-locked oscillations and saddle-node bifurcations of those fixed points are the jumps of the familiar bent resonance curve (see :ref[]{to=dyn.global-bifurcations}).
:::
