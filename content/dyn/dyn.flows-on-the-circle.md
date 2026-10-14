---
id: dyn.flows-on-the-circle
title: Flows on the circle
kind: method
level: core
summary: Shows that an autonomous flow whose phase space is a circle either has fixed points, in which case every solution locks onto one, or has none, in which case every solution is periodic with the same period $\oint d\theta/f(\theta)$; works out the nonuniform oscillator $\dot\theta = \omega - a\sin\theta$ completely, including the square-root divergence of the period at the saddle-node, and reads off the current-voltage curve of an overdamped Josephson junction.
prereqs: [dyn.flows-on-the-line, dyn.one-dimensional-bifurcations, complex.trigonometric-integrals]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "ch. 4: §4.0 Introduction, p. 93 (the circle as the first phase space on which a particle can return to where it started, so periodic solutions become possible); §4.1 Examples and definitions, pp. 94-95 (Example 4.1.1 for $\\dot\\theta = \\sin\\theta$; Example 4.1.2 showing that $\\dot\\theta = \\theta$ is not a vector field on the circle; the requirement that $f$ be real-valued, $2\\pi$-periodic and smooth); §4.2 Uniform oscillator, pp. 95-96 (phase, $\\dot\\theta=\\omega$, period $T=2\\pi/\\omega$, the absence of an amplitude variable, and the beat phenomenon of Example 4.2.1); §4.3 Nonuniform oscillator, pp. 96-101 (the equation $\\dot\\theta = \\omega - a\\sin\\theta$ and its applications; the three cases $a<\\omega$, $a=\\omega$, $a>\\omega$ and the saddle-node at $a=\\omega$, $\\theta=\\pi/2$; Example 4.3.1 classifying the fixed points by $f'(\\theta^\\ast) = -a\\cos\\theta^\\ast$; the period $T = 2\\pi/\\sqrt{\\omega^2-a^2}$ obtained from $\\int_0^{2\\pi} d\\theta/(\\omega - a\\sin\\theta)$ by complex-variable methods or the substitution $u=\\tan(\\theta/2)$; the saddle-node ghost and the bottleneck, the normal form $\\dot x = r + x^2$, the integral $\\int_{-\\infty}^{\\infty} dx/(r+x^2) = \\pi/\\sqrt r$ and the resulting square-root scaling law; Example 4.3.2 recovering the divergence from the normal form); §4.4 Overdamped pendulum, pp. 101-103 (the nondimensionalisation of $mL^2\\ddot\\theta + b\\dot\\theta + mgL\\sin\\theta = \\Gamma$ to $\\theta' = \\gamma - \\sin\\theta$); §4.5 Fireflies, pp. 103-106 (the Ermentrout-Rinzel model $\\dot\\theta = \\omega + A\\sin(\\Theta-\\theta)$, the phase difference equation, entrainment, phase locking with $\\sin\\phi^\\ast = (\\Omega-\\omega)/A$, the range of entrainment $\\omega - A < \\Omega < \\omega + A$, phase drift and its period); §4.6 Superconducting Josephson junctions, pp. 107-112 (the Josephson current-phase and voltage-phase relations, the parallel RCJ circuit equation, the pendulum analogy, the overdamped limit $\\phi' = I/I_c - \\sin\\phi$, and Example 4.6.1 giving $\\langle V\\rangle = 0$ for $I<I_c$ and $\\langle V\\rangle = I_c R\\sqrt{(I/I_c)^2-1}$ for $I>I_c$)"
    pages: "93-112"
    role: the definition of a vector field on the circle and why periodicity of $f$ is required; the uniform and nonuniform oscillators; the three-case analysis of $\dot\theta = \omega - a\sin\theta$ and the saddle-node at $a=\omega$; the period formula and the bottleneck scaling law; phase locking, entrainment and phase drift; the Josephson junction, its overdamped equation and its current-voltage curve
---

:::note[What the circle adds]{provenance=original}
The conclusion of :ref[Flows on the line]{to=dyn.flows-on-the-line} was negative: a first-order autonomous equation on $\mathbb{R}$ cannot oscillate, because a monotone point on a line never comes back. Bend the line into a circle and the obstruction is gone. The motion is still monotone — the phase still never reverses — but now going forward for long enough returns the system to its starting state. That is all it takes, and it makes the circle the smallest phase space on which anything can repeat.

What results is a model of an oscillator in which there is no amplitude at all, only a phase. That sounds like a loss and is in fact the point: a great many real oscillators — a pendulum driven past its stall torque, a Josephson junction above its critical current, a neuron, a flashing firefly — settle onto an amplitude of their own and then do nothing further except advance in phase. For those systems, the one variable that matters lives on a circle, and the whole of their behaviour, including whether they lock onto a driving signal and how long a cycle takes, is in this unit.
:::

:::definition[Vector fields on the circle]{provenance=adapted src="strogatz-1994:§4.1, pp. 94-95, and §4.2, p. 95"}
Write $S^1$ for the circle, whose points we label by a real number $\theta$ with the understanding that $\theta$ and $\theta + 2\pi k$ name the same point for every integer $k$. Such a label is called a **phase** or an **angle**.

A **vector field on the circle** assigns to each point of $S^1$ one velocity. In practice it is given by a first-order system

$$
\dot\theta = f(\theta)
$$

in which $f : \mathbb{R} \to \mathbb{R}$ is continuously differentiable and **$2\pi$-periodic**, $f(\theta + 2\pi) = f(\theta)$ for all $\theta$. The periodicity is what makes the assignment well defined: the labels $\theta$ and $\theta+2\pi k$ refer to one point, and they must be given one velocity. Without it the prescription is incoherent — Strogatz's example is $\dot\theta = \theta$, which would assign the velocity $0$ and the velocity $2\pi$ to the same point of the circle (p. 94). Restricting the label to $(-\pi,\pi]$ does not repair it; it merely moves the inconsistency to a jump in the velocity at $\theta = \pi$.

A **fixed point** is a point of $S^1$ at which $f$ vanishes, and it is classified exactly as on the line, by the sign of $f'$ there; see :ref[Flows on the line]{to=dyn.flows-on-the-line}. A **periodic solution** is a non-constant solution with $\theta(t+T) = \theta(t)$ *as points of the circle* for some $T > 0$, that is, with $\theta(t+T) - \theta(t)$ a fixed non-zero multiple of $2\pi$; the least such $T$ is the **period**.

The simplest case, $f \equiv \omega$ with $\omega > 0$ constant, is the **uniform oscillator**: $\theta(t) = \omega t + \theta_0$, which runs round the circle at constant angular speed and has period $T = 2\pi/\omega$. Note there is no amplitude variable anywhere in the formulation. The **nonuniform oscillator** is the one-parameter deformation

$$
\dot\theta = \omega - a\sin\theta , \qquad \omega > 0 ,\ a \ge 0 ,
$$

in which $\omega$ is the mean of the velocity round the circle and $a$ its amplitude of variation; Strogatz lists phase-locked loops, oscillating neurons, charge-density waves, Josephson junctions and the overdamped driven pendulum among the places it arises (p. 96).
:::

:::statement[The dichotomy for flows on the circle]{provenance=adapted src="strogatz-1994:§4.0, p. 93, §4.1, p. 94, and §4.3, pp. 97-98"}
Let $f$ be continuously differentiable and $2\pi$-periodic, and consider $\dot\theta = f(\theta)$ on $S^1$. Exactly one of the following holds.

1. **$f$ has a zero.** Then there are no periodic solutions, and every solution converges to a fixed point as $t \to +\infty$ and to a (generally different) fixed point as $t \to -\infty$. No solution is ever in danger of running off to infinity, because the circle is compact; the long-time state is always a **phase-locked** one, at rest on the circle.
2. **$f$ has no zero.** Then $f$ has one sign throughout, every solution is periodic, and all of them have the *same* period
   $$
   T \;=\; \left\lvert\, \int_0^{2\pi} \frac{d\theta}{f(\theta)} \,\right\rvert ,
   $$
   which is finite. The phase advances (if $f > 0$) or retreats (if $f < 0$) by exactly $2\pi$ in each period.

**The nonuniform oscillator.** For $f(\theta) = \omega - a\sin\theta$ with $\omega > 0$ and $a \ge 0$ the two cases are separated by $a = \omega$:

- **$a < \omega$:** no fixed points, and case 2 applies with the explicit period
  $$
  T \;=\; \frac{2\pi}{\sqrt{\omega^2 - a^2}} .
  $$
  At $a = 0$ this is the uniform oscillator's $2\pi/\omega$; as $a$ increases the oscillation becomes more and more uneven, fastest at $\theta = -\pi/2$ and slowest at $\theta = \pi/2$, and $T$ increases, diverging as $a \uparrow \omega$.
- **$a = \omega$:** a single, half-stable fixed point at $\theta^\ast = \pi/2$, and no periodic solutions.
- **$a > \omega$:** two fixed points, given by $\sin\theta^\ast = \omega/a$, with $f'(\theta^\ast) = -a\cos\theta^\ast$; the one with $\cos\theta^\ast > 0$, namely $\theta^\ast = \arcsin(\omega/a) \in (0,\pi/2)$, is a sink, and the one with $\cos\theta^\ast < 0$, namely $\pi - \arcsin(\omega/a)$, is a source. Every solution but the source itself converges to the sink.

Passing $a$ through $\omega$ is therefore a saddle-node bifurcation in the sense of :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations}, and it is the mechanism by which oscillation starts and stops here.

**The bottleneck law.** Let $f$ be as in case 2 and suppose its minimum value is small: $f(\theta_m) = r > 0$ with $r$ small, $f'(\theta_m) = 0$ and $c = f''(\theta_m) > 0$. Then

$$
T \;=\; \pi\sqrt{\frac{2}{r\,c}}\;\bigl(1 + o(1)\bigr) \qquad (r \to 0^+) ,
$$

so the period diverges like $r^{-1/2}$, that is, like the inverse square root of the distance to the saddle-node. The whole of the period is spent creeping through a narrow neighbourhood of $\theta_m$ — the **bottleneck** left behind by the two fixed points that have just annihilated, which Strogatz calls the saddle-node *ghost* (p. 99). For the nonuniform oscillator, $\theta_m = \pi/2$, $r = \omega - a$ and $c = a$, and the law reads $T \approx \pi\sqrt{2/(a(\omega-a))}$, in agreement with the exact formula as $a \uparrow \omega$.
:::

:::idea[Why the two cases, and where the period comes from]{provenance=original}
Case 1 is :ref[Flows on the line]{to=dyn.flows-on-the-line} transplanted. Unroll the circle onto $\mathbb{R}$: the zeros of $f$ unroll to a set of fixed points repeating with period $2\pi$, and the no-crossing theorem traps the unrolled solution between two consecutive ones. A trapped monotone solution converges, and it can only converge to a fixed point. Nothing ever gets round the circle, so nothing repeats.

Case 2 is the computation that case 1 forbids. With $f$ nowhere zero the equation separates and $t$ is an explicit integral of $d\theta/f(\theta)$; the time to advance from $\theta_0$ to $\theta_0 + 2\pi$ is the integral of the $2\pi$-periodic integrand $1/f$ over an interval of length $2\pi$, which does not depend on where the interval starts. That single fact is why every solution has the same period.

The bottleneck law is then a statement about where that integral gets its mass. When $f$ is small at just one place, $1/f$ is large there and the integral is dominated by that neighbourhood; replacing $f$ by the first two non-vanishing terms of its Taylor expansion there turns the integral into one that can be done in closed form, and extending the limits to infinity costs only a relatively small amount because the tails are where $1/f$ is bounded.
:::

:::proof[The dichotomy]{provenance=original}
**Case 1.** Suppose $f(\theta_\ast) = 0$ for some $\theta_\ast$, and let $\theta(t)$ be any solution, regarded as a real-valued function solving $\dot\theta = f(\theta)$ on $\mathbb{R}$ (a *lift*: it is the solution of the same equation on the line, read modulo $2\pi$ to get the motion on the circle). Let $Z = \{z \in \mathbb{R} : f(z) = 0\}$, a non-empty closed set, closed because $f$ is continuous, and invariant under $z \mapsto z + 2\pi$ because $f$ is $2\pi$-periodic. In particular every interval of length $2\pi$ meets $Z$.

If $\theta(0) \in Z$ the solution is the constant one and there is nothing to prove, so suppose $\theta(0) \notin Z$. Put

$$
A = \sup\{z \in Z : z < \theta(0)\} , \qquad B = \inf\{z \in Z : z > \theta(0)\} .
$$

Both sets are non-empty (each of $(\theta(0)-2\pi,\theta(0))$ and $(\theta(0),\theta(0)+2\pi)$ meets $Z$, after removing the endpoint if necessary, since $Z$ is $2\pi$-periodic and $\theta(0) \notin Z$), so $A$ and $B$ are finite, they belong to $Z$ because $Z$ is closed, and $A < \theta(0) < B$ with $B - A \le 2\pi$.

By the no-crossing part of the monotonicity theorem in :ref[Flows on the line]{to=dyn.flows-on-the-line}, the solution cannot attain the values $A$ or $B$, so it stays in the compact interval $[A,B]$ for all time. Being bounded, by the last part of that same theorem it exists for all $t$ and converges as $t \to +\infty$ to a zero of $f$, which is $A$ or $B$; applying the same statement to the time-reversed equation $\dot\psi = -f(\psi)$ gives convergence to the other one as $t \to -\infty$. Finally, a periodic solution on the circle would have to advance by a non-zero multiple of $2\pi$, which is impossible inside an interval of length at most $2\pi$ whose endpoints are never reached.

**Case 2.** Suppose $f$ has no zero. Being continuous on $\mathbb{R}$, it has one sign by the intermediate value theorem; take $f > 0$, the case $f < 0$ following by reversing time. Being continuous and $2\pi$-periodic, $f$ attains a positive minimum $m$ on the compact interval $[0,2\pi]$ and hence on all of $\mathbb{R}$, so $0 < 1/f \le 1/m$ and the integral in the statement is finite.

Since $\dot\theta = f(\theta) \ge m > 0$, the solution $\theta(t)$ is strictly increasing with $\theta(t) \ge \theta_0 + mt$, so it passes through every value above $\theta_0$; separating variables, the time at which it reaches the value $\vartheta > \theta_0$ is

$$
t(\vartheta) = \int_{\theta_0}^{\vartheta} \frac{d\theta}{f(\theta)} .
$$

Taking $\vartheta = \theta_0 + 2\pi$ gives the time to go once round:

$$
T = \int_{\theta_0}^{\theta_0+2\pi} \frac{d\theta}{f(\theta)} = \int_0^{2\pi} \frac{d\theta}{f(\theta)} ,
$$

the two integrals being equal because the integrand is $2\pi$-periodic and the intervals both have length $2\pi$. The value is independent of $\theta_0$, and $\theta(t+T) = \theta(t) + 2\pi$ for every $t$ by applying the computation with $\theta(t)$ in place of $\theta_0$. On the circle that says $\theta(t+T) = \theta(t)$, so every solution is periodic with the same period $T$.

**The period of the nonuniform oscillator.** Let $0 < a < \omega$ (for $a = 0$ the integral is immediately $2\pi/\omega$). Evaluate

$$
T = \int_0^{2\pi} \frac{d\theta}{\omega - a\sin\theta}
$$

by the method of :ref[Trigonometric integrals by residues]{to=complex.trigonometric-integrals}: put $z = e^{i\theta}$, so that $\sin\theta = (z - z^{-1})/(2i)$ and $d\theta = dz/(iz)$, and the interval $0 \le \theta \le 2\pi$ becomes one anticlockwise circuit of the unit circle. Then

$$
\omega - a\sin\theta = \omega + \frac{ia}{2}\Bigl(z - \frac1z\Bigr) ,
$$

so

$$
T = \oint_{\lvert z\rvert = 1} \frac{1}{\omega + \frac{ia}{2}(z - z^{-1})}\,\frac{dz}{iz} = \oint_{\lvert z\rvert=1} \frac{dz}{\,i\omega z - \frac{a}{2}(z^2-1)\,} = \oint_{\lvert z\rvert=1} \frac{(-2/a)\,dz}{\,z^2 - \frac{2i\omega}{a}z - 1\,} ,
$$

the last step multiplying numerator and denominator by $-2/a$. The denominator has the two roots

$$
z_\pm = \frac{i\omega}{a} \pm \sqrt{1 - \frac{\omega^2}{a^2}} = \frac{i}{a}\Bigl(\omega \pm \sqrt{\omega^2-a^2}\Bigr) ,
$$

using $\omega > a$ so that the square root is imaginary. They are distinct, so both poles are simple, and $z_+z_- = -1$ from the constant term of the monic quadratic. Now $\lvert z_-\rvert = (\omega - \sqrt{\omega^2-a^2})/a < 1$: squaring the equivalent inequality $\omega - a < \sqrt{\omega^2-a^2}$ (both sides positive) gives $\omega^2 - 2a\omega + a^2 < \omega^2 - a^2$, that is $a < \omega$, which holds. Hence $\lvert z_+\rvert = 1/\lvert z_-\rvert > 1$, and $z_-$ is the only pole inside the contour. Its residue is

$$
\frac{-2/a}{2z_- - 2i\omega/a} = \frac{-2/a}{-\frac{2i}{a}\sqrt{\omega^2-a^2}} = \frac{1}{i\sqrt{\omega^2-a^2}} ,
$$

and the residue theorem gives

$$
T = 2\pi i \cdot \frac{1}{i\sqrt{\omega^2-a^2}} = \frac{2\pi}{\sqrt{\omega^2-a^2}} .
$$

Strogatz records the same formula and offers two routes to it: residues, as here, or the half-angle substitution $u = \tan(\theta/2)$ (p. 98).

**The fixed points for $a \ge \omega$.** Setting $\omega - a\sin\theta^\ast = 0$ needs $\sin\theta^\ast = \omega/a$, which has solutions precisely when $a \ge \omega$: the two points $\arcsin(\omega/a)$ and $\pi - \arcsin(\omega/a)$ of $[0,\pi]$, which coincide at $\pi/2$ when $a = \omega$. Differentiating, $f'(\theta^\ast) = -a\cos\theta^\ast = \mp a\sqrt{1 - (\omega/a)^2}$ according to the sign of $\cos\theta^\ast$, so the point with $\cos\theta^\ast > 0$ has $f' < 0$ and is a sink, and the other has $f' > 0$ and is a source. At $a = \omega$ the two merge and $f'(\pi/2) = 0$; since $f(\theta) = \omega(1 - \sin\theta) \ge 0$ with equality only at $\pi/2$, the flow approaches that point from one side and leaves on the other, making it half-stable. The transition is exactly the saddle-node picture: two fixed points collide and annihilate as $a$ decreases through $\omega$.

**The bottleneck law.** Let $f(\theta_m) = r > 0$ be the minimum, $f'(\theta_m) = 0$ and $c = f''(\theta_m) > 0$. Write $\phi = \theta - \theta_m$. Taylor's theorem gives $f = r + \tfrac{c}{2}\phi^2 + O(\phi^3)$ near $\phi = 0$. Fix a small $\eta > 0$ independent of $r$ and split

$$
T = \int_{-\eta}^{\eta} \frac{d\phi}{f(\theta_m+\phi)} \;+\; \int_{\eta \le \lvert\phi\rvert,\ \lvert\phi\rvert\le\pi} \frac{d\phi}{f} .
$$

On the second range $f$ is bounded below by a positive constant independent of $r$ (it stays away from its minimum), so that piece is $O(1)$. On the first, replacing $f$ by $r + \tfrac c2 \phi^2$ and then extending the limits to $\pm\infty$ changes the value by $O(1)$ as well, because $\int_{\lvert\phi\rvert>\eta} d\phi/(\tfrac c2\phi^2)$ converges. What is left is elementary: substituting $\phi = \sqrt{2r/c}\,\,s$,

$$
\int_{-\infty}^{\infty} \frac{d\phi}{r + \tfrac{c}{2}\phi^2} = \frac{1}{r}\sqrt{\frac{2r}{c}}\int_{-\infty}^{\infty}\frac{ds}{1+s^2} = \pi\sqrt{\frac{2}{rc}} ,
$$

which tends to infinity as $r \to 0^+$. So $T = \pi\sqrt{2/(rc)} + O(1)$, which is the stated law. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="strogatz-1994:§4.1, pp. 94-95, and §4.3, pp. 99-100"}
- **Periodicity of $f$** is used twice and both uses are essential. It is what makes $\dot\theta = f(\theta)$ an equation on the circle at all, and it is what makes $T$ independent of the starting phase in case 2, since that step consists of shifting the interval of integration. Without it there is no well-defined velocity at a point of the circle, as $\dot\theta = \theta$ shows.
- **Compactness of the circle** replaces the boundedness hypothesis that :ref[Flows on the line]{to=dyn.flows-on-the-line} needed for solutions to converge: there is no "off to infinity" option here, which is why case 1 has no escape clause. Solutions on the circle always exist for all time.
- **$f$ nowhere zero** in case 2 is what makes $1/f$ integrable. A single zero is enough to destroy the conclusion completely, and not by a small amount: the period jumps from finite to undefined. The divergence of $\int d\theta/f$ as a zero of $f$ is approached is the analytic shadow of the no-crossing theorem — the time to reach a fixed point is infinite.
- **$\omega > a$ strictly** in the period formula. At $a = \omega$ the formula $2\pi/\sqrt{\omega^2-a^2}$ is not merely inapplicable but correctly signals what happens, diverging exactly where the fixed point is born.
- **$c = f''(\theta_m) > 0$** in the bottleneck law. If the minimum of $f$ were quartically flat instead of quadratic, the exponent would change: $\int d\phi/(r + k\phi^4)$ scales like $r^{-3/4}$, not $r^{-1/2}$. The square-root law is the generic one because a generic minimum is quadratic — which is the same genericity argument that made the saddle-node the typical bifurcation in :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations}, seen from the other side.
- **One dimension.** Case 2 says that when there are no fixed points, *all* solutions are periodic with one common period. That is special to one dimension: it is a statement about an interval of initial conditions being carried round rigidly, and it is why a flow on the circle is not yet a limit cycle. A limit cycle is an isolated periodic orbit that attracts its neighbours, and it needs the planar phase space of :ref[Limit cycles and the Poincare-Bendixson theorem]{to=dyn.poincare-bendixson}.
:::

:::method[Analysing a flow on the circle]{provenance=adapted src="strogatz-1994:§4.1, p. 94, §4.3, pp. 97-100, and §4.6, pp. 110-111"}
Given $\dot\theta = f(\theta)$:

1. **Check that it is a flow on the circle:** confirm $f(\theta+2\pi) = f(\theta)$. If it is not, the problem belongs on the line.
2. **Look for zeros of $f$.** Combine harmonics first if you can: a sum $p\cos\theta + q\sin\theta$ is $\sqrt{p^2+q^2}\,\cos(\theta - \delta)$ with $\tan\delta = q/p$, which exposes the extreme values of $f$ at a glance and reduces many problems to the nonuniform oscillator.
3. **If there are zeros**, classify each by the sign of $f'$, exactly as on the line. The sinks are the phase-locked states; every initial condition ends at one of them, and the characteristic time to settle is $1/\lvert f'\rvert$ at that sink. There is no oscillation.
4. **If there are no zeros**, the motion is periodic with period
   $$
   T = \left\lvert \int_0^{2\pi} \frac{d\theta}{f(\theta)}\right\rvert ,
   $$
   the same for every initial condition. When $f$ is a trigonometric polynomial, evaluate the integral by the substitution $z = e^{i\theta}$ and the residue theorem, as in :ref[Trigonometric integrals by residues]{to=complex.trigonometric-integrals}; the standard case is $\int_0^{2\pi} d\theta/(p + q\cos\theta) = 2\pi/\sqrt{p^2-q^2}$ for $p > \lvert q\rvert$.
5. **If a parameter is near the value at which the zeros appear**, do not evaluate the integral: use the bottleneck law. Locate the minimum $\theta_m$ of $f$, read off $r = f(\theta_m)$ and $c = f''(\theta_m)$, and take $T \approx \pi\sqrt{2/(rc)}$. This works whether or not the integral can be done, and it is the right thing to quote because it exhibits the square-root divergence.
6. **For a driven oscillator, form the phase difference.** If the system is $\dot\theta = g(\theta)$ and the drive is $\dot\Theta = \Omega$, work with $\phi = \Theta - \theta$, whose equation is again a flow on the circle. A sink of the $\phi$ equation is phase locking at a constant phase lag; no fixed point is phase drift, with beat period given by step 4.
7. **Convert the period into the observable.** The measured quantity is usually the mean rate $\langle\dot\theta\rangle = 2\pi/T$ in the oscillating regime and $0$ in the locked regime, which is what produces the characteristic flat-then-rising response curves of entrained systems.
:::

:::example[A flow on the circle with a non-obvious amplitude, and its bottleneck]{provenance=original}
Take

$$
\dot\theta = f(\theta) = \mu + \cos\theta - \sin\theta ,
$$

which is $2\pi$-periodic, so step 1 is satisfied.

**Step 1: combine the harmonics.** With $p = 1$ and $q = -1$, step 2 of the method gives $\sqrt{p^2+q^2} = \sqrt2$ and

$$
\cos\theta - \sin\theta = \sqrt2\,\cos\!\left(\theta + \frac{\pi}{4}\right) ,
$$

as one checks by expanding the right-hand side: $\sqrt2(\cos\theta\cos\tfrac\pi4 - \sin\theta\sin\tfrac\pi4) = \cos\theta - \sin\theta$. So

$$
\dot\theta = \mu + \sqrt2\,\cos\!\left(\theta+\frac{\pi}{4}\right) ,
$$

a nonuniform oscillator of mean $\mu$ and amplitude $\sqrt2$. Its minimum is $\mu - \sqrt2$, attained where $\cos(\theta+\pi/4) = -1$, that is at

$$
\theta_m = \frac{3\pi}{4} .
$$

So there are fixed points if and only if $\mu \le \sqrt2 = 1.41421356\ldots$, and the saddle-node is at $\mu = \sqrt2$.

**Step 2: the period at $\mu = 2$.** Here $\mu > \sqrt 2$, so there are no fixed points and step 4 applies:

$$
T = \int_0^{2\pi}\frac{d\theta}{2 + \sqrt2\cos(\theta+\pi/4)} = \int_0^{2\pi}\frac{d\theta}{2+\sqrt2\cos\theta} = \frac{2\pi}{\sqrt{2^2 - (\sqrt2)^2}} = \frac{2\pi}{\sqrt2} ,
$$

the shift of the integration variable being harmless because the integrand is $2\pi$-periodic. Hence

$$
\boxed{\;T = \pi\sqrt2 = 4.442882938158366\ldots\;}
$$

Numerical quadrature of $\int_0^{2\pi} d\theta/(2+\cos\theta-\sin\theta)$ returns $4.442882938158366$, agreeing to sixteen figures.

**Step 3: approaching the bifurcation.** Now set $\mu = 1.45$, just above $\sqrt2$. The exact period is

$$
T = \frac{2\pi}{\sqrt{\mu^2 - 2}} = \frac{2\pi}{\sqrt{1.45^2 - 2}} = \frac{2\pi}{\sqrt{0.1025}} = 19.625374\ldots ,
$$

and direct numerical quadrature of $\int_0^{2\pi} d\theta/(1.45+\cos\theta-\sin\theta)$ confirms $19.6253737$. The oscillator is now very jerky: it takes nearly twenty time units to go round, almost all of it spent near $\theta_m = 3\pi/4$, where the velocity is only $\mu - \sqrt2 = 0.0357864$, as against a velocity of $\mu+\sqrt2 = 2.8642$ at the fast point diametrically opposite.

**Step 4: the bottleneck estimate, without doing the integral.** Step 5 of the method needs two numbers at $\theta_m = 3\pi/4$:

$$
r = f(\theta_m) = \mu - \sqrt2 = 0.03578644 , \qquad c = f''(\theta_m) = -\sqrt2\cos\!\left(\theta_m + \frac\pi4\right) = \sqrt2 .
$$

Then

$$
T \approx \pi\sqrt{\frac{2}{rc}} = \pi\sqrt{\frac{2}{0.03578644 \times 1.41421356}} = \pi\sqrt{39.51814} = 19.749138 .
$$

**Step 5: compare.** The estimate exceeds the exact value by $0.63\%$, from an argument that used nothing but the value and the curvature of $f$ at one point. Closing on the bifurcation improves it: the two agree to leading order because $T_{\text{exact}} = 2\pi/\sqrt{(\mu-\sqrt2)(\mu+\sqrt2)}$ and $\mu + \sqrt2 \to 2\sqrt2$, which turns the exact formula into $2\pi/\sqrt{2\sqrt2\,r} = \pi\sqrt{2/(\sqrt2 r)}$, precisely the estimate with $c = \sqrt 2$. The $0.63\%$ is the error in replacing $\mu+\sqrt2 = 2.8642$ by $2\sqrt2 = 2.8284$.
:::

:::application[The current-voltage curve of an overdamped Josephson junction]{provenance=adapted src="strogatz-1994:§4.6, pp. 108-111, and §4.5, pp. 104-106"}
A Josephson junction is two superconductors separated by a thin barrier. Each superconductor is described by a macroscopic wave function with its own phase, and the junction's state is the phase difference $\phi$ between them. The two Josephson relations are that the supercurrent through the barrier is

$$
I_s = I_c \sin\phi ,
$$

with $I_c$ the critical current, and that the voltage across it is

$$
V = \frac{\hbar}{2e}\,\dot\phi .
$$

Modelling the ordinary current by a resistance $R$ and the displacement current by a capacitance $C$ in parallel with the junction, and driving the whole with a constant bias current $I$, Kirchhoff's current law gives $C\dot V + V/R + I_c\sin\phi = I$, which after substituting the voltage-phase relation becomes

$$
\frac{\hbar C}{2e}\,\ddot\phi + \frac{\hbar}{2eR}\,\dot\phi + I_c\sin\phi = I .
$$

This is the equation of a damped pendulum driven by a constant torque, with $\phi$ the angle, $C$ the mass, $1/R$ the damping and $I$ the applied torque — one reason junctions have been such useful laboratory systems for nonlinear dynamics.

**The overdamped limit.** When the capacitance is small enough that the second-derivative term can be dropped (after a brief initial transient; the same singular limit as in :ref[Flows on the line]{to=dyn.flows-on-the-line}), what is left is a flow on the circle:

$$
\dot\phi = \frac{2eR}{\hbar}\bigl(I - I_c\sin\phi\bigr) ,
$$

a nonuniform oscillator with $\omega = 2eRI/\hbar$ and $a = 2eRI_c/\hbar$, so that $a$ and $\omega$ compare exactly as $I_c$ and $I$ do. The dichotomy therefore reads:

- **$I < I_c$:** fixed points exist, and by case 1 the phase locks at $\phi^\ast = \arcsin(I/I_c)$. Then $\dot\phi \to 0$, so the time-averaged voltage is $\langle V\rangle = 0$. Current flows with no voltage at all: this is the zero-voltage supercurrent, the defining signature of the Josephson effect.
- **$I > I_c$:** no fixed points, so the phase runs, and by case 2 it advances by $2\pi$ in each period $T = 2\pi/\sqrt{\omega^2-a^2}$. The mean voltage is then
  $$
  \langle V\rangle = \frac{\hbar}{2e}\,\frac{1}{T}\int_0^T \dot\phi \,dt = \frac{\hbar}{2e}\cdot\frac{2\pi}{T} = \frac{\hbar}{2e}\sqrt{\omega^2 - a^2} = R\sqrt{I^2 - I_c^2} .
  $$

The junction's current-voltage curve is therefore flat at zero up to $I_c$ and then rises with a vertical tangent, approaching the ohmic line $\langle V\rangle = IR$ for $I \gg I_c$. The infinite slope at the threshold is the bottleneck law in disguise: it is the same $r^{-1/2}$ divergence of the period, read as a function of the bias current. Strogatz reaches the same result in his Example 4.6.1 (p. 111), and notes that restoring the capacitance makes the curve hysteretic (p. 112), a loop of the kind analysed in :ref[Bifurcations in one dimension]{to=dyn.one-dimensional-bifurcations}.

**A number.** Take a junction with $I_c = 0.20\ \text{mA}$ and $R = 5\ \Omega$, biased at $I = 0.25\ \text{mA}$. Then $I > I_c$, so

$$
\langle V\rangle = R\sqrt{I^2 - I_c^2} = 5 \times \sqrt{(0.25)^2 - (0.20)^2}\ \text{mV} = 5\times\sqrt{0.0225}\ \text{mV} = 5 \times 0.15\ \text{mV} = 0.750\ \text{mV} .
$$

The phase then runs at $1/T = 2e\langle V\rangle/h$ cycles per second, and with $2e/h = 4.8360\times10^{14}\ \text{Hz}\,\text{V}^{-1}$ this is

$$
\frac{1}{T} = 4.8360\times10^{14} \times 7.50\times10^{-4}\ \text{Hz} = 3.627\times10^{11}\ \text{Hz} = 363\ \text{GHz} ,
$$

an oscillation in the sub-millimetre band, which is what makes these devices useful as sources and detectors there. The relation $1/T = 2e\langle V\rangle /h$ is exact and involves only fundamental constants, which is why the inverse statement — a junction irradiated at a known frequency locks its phase and develops a precisely known voltage — is used to realise the volt.

**Entrainment.** The same equation governs an oscillator pulled by a periodic drive. Strogatz's account of the firefly *Pteroptyx cribellata* (after Ermentrout and Rinzel) takes a flash rhythm of natural frequency $\omega$ which speeds up or slows down in response to a stimulus of frequency $\Omega$, $\dot\theta = \omega + A\sin(\Theta-\theta)$; the phase difference $\phi = \Theta-\theta$ then obeys $\dot\phi = (\Omega-\omega) - A\sin\phi$, a nonuniform oscillator once more. Case 1 holds when $\lvert\Omega-\omega\rvert < A$, and the firefly entrains, flashing at the drive frequency with the constant lag $\sin\phi^\ast = (\Omega - \omega)/A$; this is the **range of entrainment** $\omega - A < \Omega < \omega + A$. Outside it, case 2 holds and the two drift apart, but non-uniformly — slowly while the firefly nearly keeps up, then quickly through the rest of the cycle — with beat period $2\pi/\sqrt{(\Omega-\omega)^2 - A^2}$ (pp. 105-106).
:::
