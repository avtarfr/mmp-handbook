---
id: ode.harmonic-oscillator
title: The damped and driven harmonic oscillator
kind: application
level: core
summary: 'The equation $\ddot x + 2\gamma\dot x + \omega_0^2 x = f(t)$ worked out in full: the three free regimes fixed by the sign of $\gamma - \omega_0$, the decaying transient plus periodic steady state under harmonic driving, the amplitude and phase as functions of frequency, and the quality factor $Q = \omega_0/2\gamma$ read three ways.'
prereqs: [ode.constant-coefficients, ode.linear-ode-theory]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§14.7, Example 14.7.2, Eq. (14.40) and the following discussion of the three regimes and the RLC circuit, pp. 447-448"
    pages: "447-448"
    role: 'the equation $\ddot y + a\dot y + by = 0$ with $a,b>0$, its two characteristic roots, the three regimes, the identification $a = R/L$, $b = 1/(LC)$ and the statement that the circuit does not oscillate for $R \ge 2\sqrt{L/C}$'
  - work: hirsch-smale-devaney-2013
    loc: "§2.2, the derivation of the equation of motion from Newton's law, pp. 25-26; §6.5, the forced oscillator, the unique $2\\pi$-periodic solution and the theorem that every solution tends to it, pp. 130-133"
    pages: "25-26, 130-133"
    role: the mechanical model and the names of the three parameters; the existence and uniqueness of the periodic steady state for $b, k > 0$ and the proof that every solution approaches it
  - work: arfken-2013
    loc: "§20.8, Example 20.8.5 (damped oscillator by Laplace transform), Eqs. (20.160)-(20.161), p. 1021, and Exercise 20.8.6 (critical and overdamped cases with answers), p. 1030"
    pages: "1021, 1030"
    role: 'the underdamped solution for $X(0)=X_0$, $\dot X(0)=0$ in the amplitude-phase form $X_0(\omega_0/\omega_1)e^{-bt/2m}\cos(\omega_1t-\varphi)$, and the corresponding critically damped answer'
  - work: strogatz-1994
    loc: "§5.2, classification of planar linear systems by the trace and determinant, Fig. 5.2.8 and the discussion of the degenerate node, pp. 136-137; Exercise 5.2.13 (damped harmonic oscillator as a planar system) and Exercise 5.2.12 (LRC circuit), p. 143"
    pages: "136-137, 143"
    role: the phase-plane names for the three regimes (stable spiral, degenerate node, stable node), the observation that the degenerate node is the borderline case between spiral and node, and the identification of the three cases with the standard overdamped, critically damped and underdamped vibrations
---

:::definition[The oscillator and its parameters]{provenance=adapted src="hirsch-smale-devaney-2013:§2.2, pp. 25-26; hassani-2013:§14.7, Example 14.7.2, pp. 447-448"}
A mass $m$ on a spring of stiffness $k > 0$, with a frictional force proportional to the velocity through a damping constant $b \ge 0$ and an external force $F(t)$, obeys Newton's law in the form

$$
m\ddot x + b\dot x + kx \;=\; F(t) .
$$

Dividing by $m$ and naming

$$
\omega_0 = \sqrt{\frac{k}{m}} \;>\; 0 ,
\qquad
\gamma = \frac{b}{2m} \;\ge\; 0 ,
\qquad
f(t) = \frac{F(t)}{m} ,
$$

gives the standard form used throughout this unit,

$$
\ddot x + 2\gamma\dot x + \omega_0^{2}x \;=\; f(t) .
$$

Here $\omega_0$ is the **undamped natural frequency** and $\gamma$ the **damping rate** (of dimension $1/\text{time}$). The characteristic polynomial is $p(\lambda) = \lambda^{2} + 2\gamma\lambda + \omega_0^{2}$, with roots

$$
\lambda_{\pm} \;=\; -\gamma \pm \sqrt{\gamma^{2} - \omega_0^{2}} .
$$

The series $RLC$ circuit $L\ddot q + R\dot q + q/C = V(t)$ is the same equation: :cite[Hassani]{work=hassani-2013 loc="p. 448"} records the correspondence $2\gamma = R/L$ and $\omega_0^{2} = 1/(LC)$. Everything below therefore applies verbatim to circuits, with charge for displacement and voltage for force.
:::

:::statement[Free motion: three regimes]{provenance=adapted src="hassani-2013:§14.7, Example 14.7.2, pp. 447-448; arfken-2013:§20.8, Example 20.8.5, Eq. (20.161), p. 1021 and Ex. 20.8.6, p. 1030"}
Let $f \equiv 0$ and $\gamma, \omega_0 > 0$. The general real solution of $\ddot x + 2\gamma\dot x + \omega_0^{2}x = 0$ is determined by the sign of $\gamma^{2} - \omega_0^{2}$.

1. **Underdamped, $\gamma < \omega_0$.** The roots are the complex pair $-\gamma \pm i\omega_d$ with

   $$
   \omega_d = \sqrt{\omega_0^{2} - \gamma^{2}} ,
   $$

   and

   $$
   x(t) = Ae^{-\gamma t}\cos(\omega_dt - \phi) ,
   $$

   with $A \ge 0$ and $\phi$ fixed by the data. The motion oscillates at the **damped frequency** $\omega_d < \omega_0$ inside a decaying envelope $Ae^{-\gamma t}$, and has infinitely many zeros. For the data $x(0) = x_0$, $\dot x(0) = 0$,

   $$
   x(t) = x_0\,\frac{\omega_0}{\omega_d}\,e^{-\gamma t}\cos(\omega_dt - \phi),
   \qquad \tan\phi = \frac{\gamma}{\omega_d} .
   $$

2. **Critically damped, $\gamma = \omega_0$.** The root $-\gamma$ is double and

   $$
   x(t) = (c_1 + c_2t)\,e^{-\gamma t} .
   $$

   For $x(0) = x_0$, $\dot x(0) = 0$ this is $x(t) = x_0(1 + \gamma t)e^{-\gamma t}$. The motion crosses zero at most once.

3. **Overdamped, $\gamma > \omega_0$.** Both roots

   $$
   \lambda_{\pm} = -\gamma \pm \sqrt{\gamma^{2} - \omega_0^{2}}
   $$

   are real and negative, with $\lambda_- < -\gamma < \lambda_+ < 0$, and

   $$
   x(t) = c_+e^{\lambda_+t} + c_-e^{\lambda_-t} .
   $$

   The motion crosses zero at most once, and for large $t$ decays like $e^{\lambda_+t}$, that is, *more slowly* than in the critical case.

In all three cases every solution tends to $0$ as $t \to \infty$, since both roots have negative real part. In circuit language, :cite[Hassani]{work=hassani-2013 loc="p. 448"} states case 3 as: for $R \ge 2\sqrt{L/C}$ the circuit does not oscillate.
:::

:::statement[Harmonic driving: transient and steady state]{provenance=adapted src="hirsch-smale-devaney-2013:§6.5, pp. 132-133"}
Let $\gamma > 0$ and $\omega_0 > 0$, and drive the oscillator harmonically:

$$
\ddot x + 2\gamma\dot x + \omega_0^{2}x \;=\; f_0\cos\omega t , \qquad \omega > 0 .
$$

1. **Steady state.** There is exactly one solution that is periodic with the period $2\pi/\omega$ of the driving, namely

   $$
   x_{\mathrm{ss}}(t) = A(\omega)\cos\bigl(\omega t - \delta(\omega)\bigr) ,
   $$

   $$
   A(\omega) = \frac{f_0}{\sqrt{(\omega_0^{2} - \omega^{2})^{2} + 4\gamma^{2}\omega^{2}}} ,
   \qquad
   \cos\delta = \frac{\omega_0^{2}-\omega^{2}}{\sqrt{(\omega_0^{2}-\omega^{2})^{2}+4\gamma^{2}\omega^{2}}},
   \quad
   \sin\delta = \frac{2\gamma\omega}{\sqrt{(\omega_0^{2}-\omega^{2})^{2}+4\gamma^{2}\omega^{2}}} ,
   $$

   so that $\delta \in (0,\pi)$ is the **phase lag** of the response behind the force.
2. **Every solution approaches it.** Any solution is $x = x_{\mathrm{ss}} + x_{\mathrm{tr}}$ where the **transient** $x_{\mathrm{tr}}$ is a solution of the free equation, hence $x(t) - x_{\mathrm{ss}}(t) \to 0$ as $t \to \infty$. The data affect only the transient.
3. **Limits.** As $\omega \to 0^{+}$, $A(\omega) \to f_0/\omega_0^{2}$ and $\delta(\omega) \to 0$; we write $A(0) = f_0/\omega_0^{2}$ for this limit, the **static deflection**, which is also what the displayed formula for $A$ returns at $\omega = 0$. (The phase lag itself is defined only for $\omega > 0$, where $\sin\delta > 0$ puts it strictly inside $(0,\pi)$; the values $0$ and $\pi$ are approached but never attained.) As $\omega \to \infty$, $A(\omega) \sim f_0/\omega^{2}$ and $\delta(\omega) \to \pi$. At $\omega = \omega_0$, $A = f_0/(2\gamma\omega_0)$ with $\delta = \pi/2$ exactly.
:::

:::definition[Quality factor]{provenance=original}
For $\gamma > 0$ the **quality factor** of the oscillator is the dimensionless number

$$
Q \;=\; \frac{\omega_0}{2\gamma} \;=\; \frac{\sqrt{mk}}{b} \;=\; \frac{1}{R}\sqrt{\frac{L}{C}} .
$$

The three regimes are $Q > \tfrac12$ (underdamped), $Q = \tfrac12$ (critical) and $Q < \tfrac12$ (overdamped). Large $Q$ means light damping.
:::

:::statement[Resonance and three readings of $Q$]{provenance=original}
With $\gamma > 0$ and $\omega_0 > 0$:

1. **Amplitude resonance.** If $\gamma < \omega_0/\sqrt2$ (that is, $Q > 1/\sqrt2$), $A(\omega)$ has a unique maximum at

   $$
   \omega_r = \sqrt{\omega_0^{2} - 2\gamma^{2}} ,
   \qquad
   A(\omega_r) = \frac{f_0}{2\gamma\sqrt{\omega_0^{2}-\gamma^{2}}} = \frac{f_0}{2\gamma\omega_d} .
   $$

   If $\gamma \ge \omega_0/\sqrt2$, $A$ is strictly decreasing on $(0,\infty)$: there is no resonant peak at all.
2. **Velocity resonance.** The velocity amplitude $\omega A(\omega)$, and hence the time-averaged power $\overline{P} = \tfrac12 m(2\gamma)\,\omega^{2}A^{2}$ absorbed from the force, is maximal exactly at $\omega = \omega_0$ for every $\gamma > 0$, where $\delta = \pi/2$.
3. **Amplification.** $A(\omega_0) = Q\cdot A(0)$: at the natural frequency the response is $Q$ times the static deflection.
4. **Bandwidth.** The two frequencies at which $\overline{P}$ is half its maximum are $\omega_\pm = \sqrt{\omega_0^{2}+\gamma^{2}} \pm \gamma$, so the full width at half maximum is exactly

   $$
   \Delta\omega = \omega_+ - \omega_- = 2\gamma ,
   \qquad\text{hence}\qquad
   Q = \frac{\omega_0}{\Delta\omega} .
   $$

5. **Energy decay.** In free underdamped motion the energy $E = \tfrac12m\dot x^{2} + \tfrac12kx^{2}$ has envelope proportional to $e^{-2\gamma t}$, so the fraction lost per cycle is $1 - e^{-4\pi\gamma/\omega_d}$, and

   $$
   2\pi\,\frac{E}{|\Delta E|_{\text{per cycle}}} \;=\; \frac{\omega_d}{2\gamma}\Bigl(1 + O\bigl(\gamma/\omega_d\bigr)\Bigr) \;\longrightarrow\; Q
   \qquad\text{as } \gamma/\omega_0 \to 0 .
   $$
:::

:::idea{provenance=original}
Two ingredients do all the work. First, the free motion is read straight off the characteristic polynomial $\lambda^{2}+2\gamma\lambda+\omega_0^{2}$: the discriminant $4(\gamma^{2}-\omega_0^{2})$ changes sign at $\gamma = \omega_0$, and the three regimes are the three cases of :ref[]{to=ode.constant-coefficients} — complex pair, double root, two real roots. Second, for harmonic driving it is easier to drive with $e^{i\omega t}$ than with $\cos\omega t$: since $p(i\omega) \ne 0$ whenever $\gamma > 0$, the complex response is simply $f_0e^{i\omega t}/p(i\omega)$, and taking real parts gives amplitude $f_0/|p(i\omega)|$ and phase lag $\arg p(i\omega)$. Every statement about resonance is then a statement about where the modulus of the quadratic $p(i\omega) = \omega_0^{2}-\omega^{2} + 2i\gamma\omega$ is small — and $|p(i\omega)|^{2}$ is a quadratic in $\omega^{2}$, so its minimum is found by completing a square, with no calculus at all.
:::

:::proof[Free motion]{provenance=adapted src="hassani-2013:§14.7, Example 14.7.2, p. 447"}
**Step 1 (roots).** $p(\lambda) = \lambda^{2} + 2\gamma\lambda + \omega_0^{2} = (\lambda+\gamma)^{2} - (\gamma^{2}-\omega_0^{2})$, giving $\lambda_\pm = -\gamma \pm \sqrt{\gamma^{2}-\omega_0^{2}}$.

**Step 2 (the three cases).** By :ref[]{to=ode.constant-coefficients}: if $\gamma < \omega_0$ the square root is $i\omega_d$ with $\omega_d = \sqrt{\omega_0^{2}-\gamma^{2}} > 0$, and the real basis is $e^{-\gamma t}\cos\omega_dt$, $e^{-\gamma t}\sin\omega_dt$, whose general real combination is $Ae^{-\gamma t}\cos(\omega_dt-\phi)$. If $\gamma = \omega_0$ the root $-\gamma$ is double, giving the basis $e^{-\gamma t}$, $te^{-\gamma t}$. If $\gamma > \omega_0$ the two roots are real and distinct.

**Step 3 (signs in the overdamped case).** Let $s = \sqrt{\gamma^{2}-\omega_0^{2}}$, so $0 < s < \gamma$ because $\omega_0 > 0$. Then $\lambda_+ = -\gamma + s < 0$ and $\lambda_- = -\gamma - s < -\gamma < \lambda_+$. Both roots are negative, so both exponentials decay; the slower one is $e^{\lambda_+t}$. Since $\lambda_+ = -\omega_0^{2}/(\gamma + s) \to 0$ as $\gamma \to \infty$, heavy damping makes the return to equilibrium arbitrarily slow.

**Step 4 (the stated initial-value solutions).** *Underdamped with $x(0)=x_0$, $\dot x(0) = 0$:* writing $x = e^{-\gamma t}(a\cos\omega_dt + c\sin\omega_dt)$ gives $a = x_0$ and $\dot x(0) = -\gamma a + \omega_dc = 0$, so $c = \gamma x_0/\omega_d$. Then

$$
a\cos\omega_dt + c\sin\omega_dt = \sqrt{a^{2}+c^{2}}\,\cos(\omega_dt - \phi), \qquad \tan\phi = c/a = \gamma/\omega_d ,
$$

and $\sqrt{a^{2}+c^{2}} = x_0\sqrt{1 + \gamma^{2}/\omega_d^{2}} = x_0\omega_0/\omega_d$, since $\omega_d^{2}+\gamma^{2} = \omega_0^{2}$. This is the form :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (20.161), p. 1021"} obtain by Laplace transform. *Critically damped:* $x = (c_1+c_2t)e^{-\gamma t}$ gives $c_1 = x_0$ and $\dot x(0) = c_2 - \gamma c_1 = 0$, so $x = x_0(1+\gamma t)e^{-\gamma t}$.

**Step 5 (counting zeros).** In case 2, $x(t) = 0$ forces $c_1 + c_2t = 0$: at most one zero. In case 3, $x(t) = 0$ forces $e^{(\lambda_+-\lambda_-)t} = -c_-/c_+$, and $t \mapsto e^{(\lambda_+-\lambda_-)t}$ is strictly increasing, so again at most one zero. In case 1 the zeros are where $\omega_dt - \phi$ is an odd multiple of $\pi/2$: infinitely many, spaced $\pi/\omega_d$ apart. $\square$
:::

:::proof[Steady state, amplitude and phase]{provenance=adapted src="hirsch-smale-devaney-2013:§6.5, pp. 132-133"}
**Step 1 (complexify).** Consider $\ddot z + 2\gamma\dot z + \omega_0^{2}z = f_0e^{i\omega t}$; if $z$ solves it then $x = \operatorname{Re}z$ solves the real equation, because the coefficients are real. Since

$$
p(i\omega) = (i\omega)^{2} + 2\gamma(i\omega) + \omega_0^{2} = \bigl(\omega_0^{2}-\omega^{2}\bigr) + 2i\gamma\omega
$$

has $\operatorname{Im}p(i\omega) = 2\gamma\omega \ne 0$ for $\gamma > 0$ and $\omega > 0$, we have $p(i\omega) \neq 0$: the driving is never resonant in the sense of :ref[]{to=ode.constant-coefficients}. Hence, by the exponential-shift identity $L(e^{i\omega t}) = p(i\omega)e^{i\omega t}$,

$$
z(t) = \frac{f_0}{p(i\omega)}e^{i\omega t}
$$

is a solution.

**Step 2 (read off amplitude and phase).** Write $p(i\omega) = |p(i\omega)|e^{i\delta}$ with

$$
|p(i\omega)| = \sqrt{(\omega_0^{2}-\omega^{2})^{2} + 4\gamma^{2}\omega^{2}} , \qquad
\cos\delta = \frac{\omega_0^{2}-\omega^{2}}{|p(i\omega)|}, \quad \sin\delta = \frac{2\gamma\omega}{|p(i\omega)|} .
$$

Since $\sin\delta > 0$, $\delta$ lies in $(0,\pi)$ and is uniquely determined. Then $z = (f_0/|p|)e^{i(\omega t - \delta)}$ and

$$
x_{\mathrm{ss}} = \operatorname{Re}z = A(\omega)\cos(\omega t - \delta), \qquad A(\omega) = \frac{f_0}{|p(i\omega)|} ,
$$

which is the stated formula. It is periodic with period $2\pi/\omega$.

**Step 3 (uniqueness of the periodic solution).** If $x_1, x_2$ are both solutions of period $2\pi/\omega$, then $u = x_1 - x_2$ solves the free equation and is periodic. But every solution of the free equation tends to $0$ (Step 1 of the previous proof: both roots have real part $\le -\min(\gamma, \omega_0^{2}/2\gamma) < 0$), and a periodic function tending to $0$ is identically $0$. So $x_1 = x_2$. This is the conclusion :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§6.5, pp. 132-133"} reach for the system form of the equation, by showing that $e^{2\pi A}-I$ is invertible.

**Step 4 (transients die).** Any solution $x$ has $x - x_{\mathrm{ss}}$ solving the free equation, hence decaying to $0$; so $x$ approaches $x_{\mathrm{ss}}$, and the initial data influence only the transient part.

**Step 5 (limits).** At $\omega = 0$: $|p| = \omega_0^{2}$, $\delta = 0$. As $\omega \to \infty$: $|p| \sim \omega^{2}$ and $\cos\delta \to -1$, so $\delta \to \pi$ — the response is in antiphase with the force. At $\omega = \omega_0$: $\cos\delta = 0$ and $\sin\delta = 1$, so $\delta = \pi/2$ and $|p| = 2\gamma\omega_0$. $\square$
:::

:::proof[Resonance and the readings of $Q$]{provenance=original}
**Step 1 (amplitude peak).** $A$ is largest where $|p(i\omega)|^{2}$ is smallest. Put $v = \omega^{2} \ge 0$:

$$
|p|^{2} = (\omega_0^{2}-v)^{2} + 4\gamma^{2}v = v^{2} - 2(\omega_0^{2}-2\gamma^{2})v + \omega_0^{4}
= \bigl(v - (\omega_0^{2}-2\gamma^{2})\bigr)^{2} + 4\gamma^{2}\bigl(\omega_0^{2}-\gamma^{2}\bigr) .
$$

This is a parabola in $v$ with vertex at $v = \omega_0^{2}-2\gamma^{2}$. If $\gamma < \omega_0/\sqrt2$ the vertex lies in $v > 0$ and is attained at $\omega_r = \sqrt{\omega_0^{2}-2\gamma^{2}}$, where $|p|^{2} = 4\gamma^{2}(\omega_0^{2}-\gamma^{2}) = 4\gamma^{2}\omega_d^{2}$, giving $A(\omega_r) = f_0/(2\gamma\omega_d)$. If $\gamma \ge \omega_0/\sqrt2$ the vertex is at $v \le 0$, so $|p|^{2}$ is strictly increasing on $v > 0$ and $A$ strictly decreasing: no peak.

**Step 2 (velocity peak).** The velocity amplitude is $\omega A$, and

$$
\frac{1}{\omega^{2}A^{2}} = \frac{|p|^{2}}{f_0^{2}\omega^{2}} = \frac{1}{f_0^{2}}\left[\left(\frac{\omega_0^{2}-\omega^{2}}{\omega}\right)^{2} + 4\gamma^{2}\right] .
$$

The bracket is minimal exactly when $\omega_0^{2}-\omega^{2} = 0$, for any $\gamma > 0$, giving $\omega = \omega_0$ and $\omega A = f_0/2\gamma$. The average power delivered by the force $mf_0\cos\omega t$ to the velocity $-\omega A\sin(\omega t-\delta)$ over one period is

$$
\overline{P} = \tfrac12\,m f_0\,\omega A\sin\delta = \tfrac12\,m f_0\,\omega A\cdot\frac{2\gamma\omega}{|p|} = m\gamma\,\omega^{2}A^{2} ,
$$

which is proportional to $(\omega A)^{2}$, so it peaks at $\omega_0$ as well.

**Step 3 (amplification).** $A(\omega_0)/A(0) = \omega_0^{2}/(2\gamma\omega_0) = \omega_0/2\gamma = Q$.

**Step 4 (bandwidth).** $\overline{P}$ is half its maximum where the bracket in Step 2 doubles, that is where $\bigl|(\omega_0^{2}-\omega^{2})/\omega\bigr| = 2\gamma$. This gives two quadratics, $\omega^{2} + 2\gamma\omega - \omega_0^{2} = 0$ and $\omega^{2} - 2\gamma\omega - \omega_0^{2} = 0$, with the positive roots

$$
\omega_- = \sqrt{\omega_0^{2}+\gamma^{2}} - \gamma ,
\qquad
\omega_+ = \sqrt{\omega_0^{2}+\gamma^{2}} + \gamma ,
$$

whose difference is exactly $2\gamma$: no approximation is involved. Hence $Q = \omega_0/\Delta\omega$.

**Step 5 (energy).** For $x = Ae^{-\gamma t}\cos(\omega_dt-\phi)$,

$$
E = \tfrac12 m\dot x^{2} + \tfrac12 m\omega_0^{2}x^{2} = \tfrac12 mA^{2}e^{-2\gamma t}\Bigl[\bigl(\gamma\cos\theta + \omega_d\sin\theta\bigr)^{2} + \omega_0^{2}\cos^{2}\theta\Bigr],\quad \theta = \omega_dt-\phi ,
$$

The bracket is a bounded function of $\theta$ alone, so $E(t)$ is the decaying exponential $e^{-2\gamma t}$ times a bounded oscillation. Averaging the bracket over one cycle with $\overline{\cos^{2}\theta} = \overline{\sin^{2}\theta} = \tfrac12$ and $\overline{\sin\theta\cos\theta} = 0$ gives $\tfrac12\gamma^{2}+\tfrac12\omega_d^{2}+\tfrac12\omega_0^{2} = \omega_0^{2}$, because $\gamma^{2}+\omega_d^{2} = \omega_0^{2}$. Treating $e^{-2\gamma t}$ as constant over a cycle — legitimate to leading order when $\gamma \ll \omega_d$ — the cycle-averaged energy is $\tfrac12 mA^{2}\omega_0^{2}e^{-2\gamma t}$, and its fractional loss over one period $T = 2\pi/\omega_d$ is

$$
\frac{|\Delta E|}{E} \;=\; 1 - e^{-2\gamma T} \;=\; 1 - e^{-4\pi\gamma/\omega_d} \;=\; \frac{4\pi\gamma}{\omega_d}\Bigl(1 + O\bigl(\gamma/\omega_d\bigr)\Bigr) .
$$

Therefore $2\pi E/|\Delta E| = \bigl(\omega_d/2\gamma\bigr)\bigl(1+O(\gamma/\omega_d)\bigr)$, and since $\omega_d \to \omega_0$ as $\gamma/\omega_0 \to 0$, this tends to $Q$. $\square$
:::

:::remark[Reading the regimes, and what the hypotheses buy]{provenance=original}
- **$k > 0$ is needed for oscillation at all.** If $k < 0$ (an inverted pendulum) the roots are real of opposite signs and the equilibrium is a saddle: solutions grow. All of the above assumes $\omega_0^{2} > 0$.
- **$\gamma > 0$ is what makes the steady state unique and attracting.** For $\gamma = 0$ the free solutions do not decay, the "transient" never dies, and driving at $\omega = \omega_0$ is resonant in the strict sense of :ref[]{to=ode.constant-coefficients}: $p(i\omega_0) = 0$ and the response is $x_p = (f_0/2\omega_0)\,t\sin\omega_0t$, growing linearly for ever. The physical resonance of a damped oscillator is the finite remnant of that: $A(\omega_0) = f_0/(2\gamma\omega_0)$ diverges as $\gamma \to 0$.
- **Critical damping is the fastest return, but only just.** Overdamping is slower (Step 3 of the first proof: $\lambda_+ \to 0$ as $\gamma \to \infty$), and underdamping overshoots. This is why galvanometers, door closers and servo loops are specified near $Q = \tfrac12$. The optimum is shallow, however: the decay rate is $\gamma$ for $\gamma \le \omega_0$ and $\gamma - \sqrt{\gamma^{2}-\omega_0^{2}}$ above it, which is continuous and has a corner, not a sharp peak, at $\gamma = \omega_0$.
- **In the phase plane.** As a planar system $\dot x = y$, $\dot y = -\omega_0^{2}x - 2\gamma y$, the matrix has trace $\tau = -2\gamma$ and determinant $\Delta = \omega_0^{2}$, so $\tau^{2}-4\Delta = 4(\gamma^{2}-\omega_0^{2})$. In the classification of :cite[Strogatz]{work=strogatz-1994 loc="§5.2, Fig. 5.2.8, p. 137"}, the underdamped case is a stable spiral, the overdamped case a stable node, and the critical case the degenerate node that lies on the parabola $\tau^{2} = 4\Delta$ separating them — the curve he calls "the borderline between nodes and spirals". The three regimes of this unit are the three regions of that diagram with $\Delta > 0$, $\tau < 0$.
- **Two resonant frequencies, not one.** The amplitude peaks at $\omega_r = \sqrt{\omega_0^{2}-2\gamma^{2}}$, the velocity and the absorbed power at $\omega_0$, and the free motion rings at $\omega_d = \sqrt{\omega_0^{2}-\gamma^{2}}$. The three are distinct, ordered $\omega_r < \omega_d < \omega_0$, and agree to $O(\gamma^{2}/\omega_0^{2}) = O(1/4Q^{2})$. For $Q = 10$, where $\gamma/\omega_0 = 1/(2Q) = 0.05$, the spread is $\omega_r/\omega_0 = \sqrt{0.995} = 0.997\,497$ against $\omega_d/\omega_0 = \sqrt{0.9975} = 0.998\,749$ and $1$: about $0.25\%$ from end to end, as $1/4Q^{2}$ predicts. At the $Q = 5$ of the example below it is about $1\%$. Loose talk of "the resonant frequency" means $\omega_0$, and the quantity actually measured in a swept-frequency experiment depends on whether amplitude or power is recorded.
- **$Q$ measured three ways.** Items 3, 4 and 5 of the statement are three experiments: compare the peak response with the static response; measure the half-power bandwidth; or ring the oscillator and count cycles until the energy falls by $e^{-2\pi}$. Only item 4 is exact for all $\gamma$; items 3 and 5 are exact only in the stated senses ($A(\omega_0)$ exactly, and the energy ratio only as $\gamma/\omega_0 \to 0$).
:::

:::example[A complete worked oscillator]{provenance=original}
Take $m = 0.5\ \mathrm{kg}$, $k = 50\ \mathrm{N\,m^{-1}}$, $b = 1\ \mathrm{kg\,s^{-1}}$, driven by $F(t) = 2\cos\omega t$ newtons.

1. **Parameters.** $\omega_0 = \sqrt{k/m} = \sqrt{100} = 10\ \mathrm{s^{-1}}$, $\gamma = b/2m = 1\ \mathrm{s^{-1}}$, $f_0 = F_0/m = 4\ \mathrm{m\,s^{-2}}$. So $Q = \omega_0/2\gamma = 5$, and the oscillator is underdamped.
2. **Free motion.** $\omega_d = \sqrt{100-1} = \sqrt{99} = 9.949\,874\ \mathrm{s^{-1}}$, only $0.5\%$ below $\omega_0$. Released from $x_0$ at rest, $x = x_0(10/\sqrt{99})e^{-t}\cos(\sqrt{99}\,t-\phi)$ with $\tan\phi = 1/\sqrt{99}$, i.e. $\phi = 0.1002\ \mathrm{rad}$. The envelope falls by $e^{-1}$ in $1\ \mathrm{s}$, i.e. in $\omega_d/2\pi \approx 1.58$ cycles, and by $e^{-5} = 0.0067$ in $5\ \mathrm{s}$.
3. **Static and resonant response.** $A(0) = f_0/\omega_0^{2} = 0.04\ \mathrm{m}$. At $\omega = \omega_0$: $A = f_0/(2\gamma\omega_0) = 4/20 = 0.2\ \mathrm{m} = Q\,A(0)$, with phase lag exactly $\pi/2$. The amplitude peak is at $\omega_r = \sqrt{100-2} = 9.899\,495$, where $A = f_0/(2\gamma\omega_d) = 4/(2\sqrt{99}) = 0.201\,008\ \mathrm{m}$ — larger than $A(\omega_0)$ by only $0.5\%$.
4. **Bandwidth.** $\omega_\pm = \sqrt{101}\pm1 = 11.049\,876$ and $9.049\,876$, so $\Delta\omega = 2.000\,000 = 2\gamma$ and $\omega_0/\Delta\omega = 5 = Q$, as the statement requires exactly.
5. **A phase.** At $\omega = 9$: $\tan\delta = 2\gamma\omega/(\omega_0^{2}-\omega^{2}) = 18/19$, so $\delta = 0.758\,378\ \mathrm{rad} = 43.45^{\circ}$; the response still leads the $\pi/2$ of resonance.
6. **A full solution, transient included.** Drive at $\omega = \omega_0 = 10$ from rest at the origin: $\ddot x + 2\dot x + 100x = 4\cos 10t$, $x(0) = \dot x(0) = 0$. The steady state is $x_{\mathrm{ss}} = 0.2\cos(10t - \pi/2) = 0.2\sin 10t$. Adding the transient $e^{-t}\bigl(c_1\cos\sqrt{99}t + c_2\sin\sqrt{99}t\bigr)$ and imposing the data: $x(0) = c_1 = 0$, and $\dot x(0) = 2 + c_2\sqrt{99} = 0$ gives $c_2 = -2/\sqrt{99}$. Hence

   $$
   x(t) \;=\; \frac{1}{5}\sin 10t \;-\; \frac{2}{\sqrt{99}}\,e^{-t}\sin\bigl(\sqrt{99}\,t\bigr) .
   $$

   Substituting this back into the equation returns $4\cos 10t$ identically, and $x(0) = \dot x(0) = 0$.
7. **Numbers to check against.** $x(1) = -0.071\,735\ \mathrm{m}$ and, once the transient has gone, the motion is $0.2\sin 10t$: the amplitude builds up to $0.2\ \mathrm{m}$ on the timescale $1/\gamma = 1\ \mathrm{s}$, which is $Q/\pi \approx 1.6$ cycles. The general rule visible here is that a high-$Q$ oscillator takes about $Q/\pi$ cycles to reach its resonant amplitude — the same $Q$ that sets the bandwidth, as it must, since a narrow resonance is a slow one.
:::

:::application{provenance=original}
**Measurement instruments.** A moving-coil galvanometer, a seismometer and an accelerometer are all this equation, and the designer's choice is a point in the $(\gamma, \omega_0)$ plane. An instrument meant to follow a signal faithfully is damped near critical, so that it neither rings nor lags; one meant to select a frequency is made high-$Q$, so that the bandwidth $\Delta\omega = 2\gamma$ is narrow. The same trade-off, exactly, sets the ringing and the settling time of a servo loop.

**Spectroscopy and linewidths.** A classical model of a radiating atom is a damped oscillator, and item 4 above says that its absorption line has full width at half maximum $\Delta\omega = 2\gamma$ in angular frequency. Measuring a linewidth therefore measures a damping rate, and the Lorentzian line shape $\overline{P}(\omega) \propto \omega^{2}/\bigl[(\omega_0^{2}-\omega^{2})^{2}+4\gamma^{2}\omega^{2}\bigr]$, which near $\omega_0$ becomes $\propto 1/\bigl[(\omega-\omega_0)^{2}+\gamma^{2}\bigr]$, is the standard fitting function for a resonance in optics, nuclear physics (the Breit-Wigner shape) and nuclear magnetic resonance.

**Tuned circuits.** For the series $RLC$ circuit, $Q = R^{-1}\sqrt{L/C}$ is the figure of merit of a tuned stage: the selectivity of a radio receiver is $\omega_0/\Delta\omega$, so a $Q$ of a few hundred separates stations a fraction of a percent apart in frequency. The statement that the circuit does not oscillate for $R \ge 2\sqrt{L/C}$ — that is, for $Q \le \tfrac12$ — is :cite[Hassani's]{work=hassani-2013 loc="p. 448"} version of the overdamping condition.

**Structures and vehicles.** The collapse of structures at resonance is the $A(\omega_r) = f_0/(2\gamma\omega_d)$ of item 1: lightly damped structures amplify periodic loads by a factor $Q$. Engineering practice is to move $\omega_0$ away from the expected forcing, or to add damping, and the design quantity is the dimensionless damping ratio $\zeta = \gamma/\omega_0 = 1/(2Q)$. Vehicle suspensions are tuned to $\zeta \approx 0.2$ to $0.3$, well underdamped, because comfort penalises a slow return more than a small overshoot.

**Normal modes of larger systems.** A system of many coupled linear oscillators diagonalises into independent modes (see :ref[]{to=linalg.hermitian-spectral-theorem}), each obeying this very equation with its own $\omega_0$ and $\gamma$. The whole response of a molecule, a crystal lattice, an optical cavity or a bridge is then a sum of terms of the form $f_0/p_j(i\omega)$, and the measured spectrum is a sum of Lorentzians. This is why the single-oscillator analysis above is worth doing in such detail: it is the building block of linear response theory, where $1/p(i\omega)$ is the susceptibility and the relation between its real and imaginary parts is a Kramers-Kronig relation.
:::
