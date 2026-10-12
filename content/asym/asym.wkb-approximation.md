---
id: asym.wkb-approximation
title: The WKB approximation
kind: method
level: core
summary: >-
  Builds two approximate solutions of the equation $y'' + q(x)y = 0$ when $q$ varies slowly,
  by letting the phase accumulate as $\int\sqrt{q}$ and the amplitude follow as $q^{-1/4}$;
  gives the exact residual that measures the error, the precise validity criterion, the
  connection formulas that carry a solution through a turning point, and the quantization
  condition they produce.
prereqs: [asym.asymptotic-series, ode.linear-ode-theory, spec.airy-functions]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§25.7 WKB methods, pp. 895-902: the equation (25.42) $y'' + k_0^2f(x)y = 0$ and the sense in which $f$ must be slowly varying (p. 895); phase memory, the trial solution (25.45) and the condition $|n'k_0^{-1}| \\ll |n^2|$ (§25.7.1, pp. 895-897); the iterative construction, Eqs. (25.46)-(25.49), from the ansatz $y = A e^{i\\varphi}$ to the two solutions $n^{-1/2}\\exp(\\pm ik_0\\int n)$ (§25.7.2, pp. 897-898); the Stokes-line behaviour of the two solutions of $y'' = zy$ and the combinations (25.52)-(25.53) that reproduce $\\mathrm{Ai}(z)$ on either side of the origin (p. 899); the worked bound-state problem, pp. 900-902, in which each turning point is reduced to Stokes' equation by $x - a = \\mu z$ with $\\mu = [\\hbar^2/2mV'(a)]^{1/3}$, the two Airy continuations are matched inside the well, and the consistency of the amplitude ratio gives $\\int_{-a}^{a}k\\,dx = (n+\\tfrac12)\\pi$; the accuracy discussion of §25.7.3 (p. 902)"
    pages: "895-902"
    role: the derivation route (phase memory, then the iteration for the phase), the validity criterion in refractive-index form, the reduction of a turning point to Stokes' equation and the Airy matching, and the derivation of the quantization condition from the consistency of the amplitude ratio
  - work: hassani-2013
    loc: "§14.8 The WKB method, pp. 450-452: the equation (14.43) $y'' + q(x)y = 0$ with $q$ slowly varying, the substitution $y = e^{i\\varphi}$ and the resulting equation (14.44); the leading phase (14.45) and the validity condition $\\varphi'' \\approx q'/2\\sqrt{q} \\ll |q|$, read as the change of $q$ over one wavelength being small compared with $|q|$; the improved phase and the two-term solution (14.46) with the $q^{-1/4}$ amplitude; the statement that the method fails where $q$ vanishes, and the two connection formulas (14.47)-(14.48) quoted without derivation; Example 14.8.1, the Bohr-Sommerfeld quantization condition for a potential well"
    pages: "450-452"
    role: the $q$-form of the equation and of the ansatz; the validity condition in the wavelength reading; the connection formulas as quoted, with the exponentially decaying branch normalised against the $2\cos(\cdot-\pi/4)$ branch; the name and physical reading of the Bohr-Sommerfeld condition
  - work: arfken-2013
    loc: "§12.6 Asymptotic series, p. 577: the WKB expansion named as one of the earliest and still important approximations of quantum mechanics, and identified as an asymptotic series"
    pages: "577"
    role: the classification of the WKB expansion as an asymptotic rather than convergent series, used in the remark on accuracy
---

:::definition[Slowly varying coefficients, the WKB ansatz, turning points]{provenance=adapted src="rhb-2006:§25.7, Eq. (25.42), p. 895; hassani-2013:§14.8, Eq. (14.43), p. 450"}
The subject is the single equation

$$
\frac{d^{2}y}{dx^{2}} + q(x)\,y \;=\; 0 ,
$$

which Hassani writes in exactly this form and Riley, Hobson and Bence write as $y'' + k_0^{2}f(x)y = 0$, separating out a large constant wavenumber $k_0$ and setting $n(x) = \sqrt{f(x)}$ by analogy with a refractive index. The two notations are related by $q = k_0^{2}f$, so that $\sqrt{q} = k_0 n$; both are used below, and translations are given where it matters. The function $q$ may be complex, which is what allows the method to describe an absorbing medium.

When $q$ is a positive constant the solutions are $e^{\pm i\sqrt{q}\,x}$: a wave of fixed wavenumber $\sqrt{q}$ and fixed amplitude. The **local wavelength** of such a wave is $2\pi/\sqrt{q}$, and $1/\sqrt{q}$ is a wavelength divided by $2\pi$. Riley, Hobson and Bence call $f$ **slowly varying** when it changes little over a range of $x$ of order $k_0^{-1}$, that is over about one wavelength; Hassani puts the same demand on $q$ and reads it as the change in $q$ across one wavelength being small compared with $|q|$ itself. The precise inequality is stated below; it is a condition on $q'$ relative to $q^{3/2}$, not a condition on $q'$ alone, so no function is "slowly varying" in the abstract — it is slowly varying where $|q|$ is large enough.

The **WKB ansatz** is to look for a solution of the form

$$
y(x) \;=\; A\,e^{i\varphi(x)}
$$

with $A$ constant and $\varphi$ a possibly complex **phase**, and to determine $\varphi$ approximately on the assumption that $\varphi''$ is small. The letters are those of Wentzel, Kramers and Brillouin, who used the method on wave-mechanical problems in 1926; Riley, Hobson and Bence note that Jeffreys had studied it earlier and Green had used it in the first half of the nineteenth century.

A point $x_0$ with

$$
q(x_0) \;=\; 0
$$

is a **turning point**. The name comes from the quantum-mechanical case $q = 2m(E - V)/\hbar^{2}$, where $q$ vanishes exactly where a classical particle of energy $E$ would reverse direction. Turning points are where the construction below breaks down, and separate statements — the connection formulas — are needed to carry a solution past one.
:::

:::statement[The WKB solutions and the exact size of their error]{provenance=adapted src="rhb-2006:§25.7.2, Eq. (25.49), p. 898; hassani-2013:§14.8, Eqs. (14.45)-(14.46), pp. 450-451"}
Let $I$ be an open interval on which $q$ is twice continuously differentiable and nowhere zero, fix $x_0 \in I$, and fix a branch of $\sqrt{q}$ on $I$ (possible since $q$ is continuous and non-vanishing). Define the two **WKB functions**

$$
y_\pm(x) \;=\; \frac{1}{q(x)^{1/4}}\,\exp\left(\pm\,i\int_{x_0}^{x}\sqrt{q(u)}\,du\right) ,
$$

which in the notation of Riley, Hobson and Bence read $y_\pm = n^{-1/2}\exp(\pm ik_0\int n)$, with the amplitude $f^{-1/4}$ that they emphasise is the only change from the pure phase-memory guess. Then:

1. **They are exact solutions of a nearby equation.** For every $x \in I$,
   $$
   y_\pm'' + \bigl(q - \delta\bigr)\,y_\pm \;=\; 0 , \qquad\text{where}\qquad
   \delta(x) \;=\; \frac{5}{16}\frac{q'(x)^{2}}{q(x)^{2}} - \frac{1}{4}\frac{q''(x)}{q(x)} .
   $$
2. **They are independent.** The Wronskian of $y_+$ and $y_-$ is the non-zero constant $-2i$.
3. **Validity criterion.** $y_\pm$ approximate solutions of $y'' + qy = 0$ exactly to the extent that
   $$
   |\delta| \;\ll\; |q| .
   $$
   Where $q''$ is negligible beside $q'^{2}/q$ this reduces to $|q'| \ll \sqrt{16/5}\,|q|^{3/2}$, which up to the numerical constant is Hassani's condition $|q'/(2\sqrt{q})| \ll |q|$ and, after substituting $q = k_0^{2}n^{2}$, is exactly the condition $|k_0^{-1}n'| \ll |n|^{2}$ of Riley, Hobson and Bence.

Part 1 is an identity, not an approximation, and parts 2 and 3 follow from it; the derivation of the *form* of $y_\pm$ is the iteration of the two source texts, reproduced in the proof block.
:::

:::idea{provenance=original}
Two ideas, taken in order.

The first is phase memory, which is Riley, Hobson and Bence's name for it. If $q$ were constant the phase would advance at the fixed rate $\sqrt{q}$ per unit length. If $q$ varies slowly, let the phase advance at the local rate instead and accumulate it: $\varphi = \int^{x}\sqrt{q}$. This already captures how a wave stretches and compresses in a varying medium, and it is exact in the limit of no variation.

The second idea is that the leftover error from the first is itself computable, and absorbing it changes the amplitude rather than the phase. Substituting the pure phase-memory guess leaves a residue proportional to $q'$; feeding that residue back into the equation for $\varphi$ adds an imaginary piece $\tfrac{i}{4}\log q$ to the phase, and $\exp(i \cdot \tfrac{i}{4}\log q) = q^{-1/4}$. So the correction is a real amplitude factor $q^{-1/4}$, which is exactly what conservation of flux demands: the wave slows where $q$ is small, so it piles up there. One further round of the same iteration would change the phase again, and so on; the point of stopping after two is that the identity in part 1 of the statement then measures precisely what has been left out.
:::

:::proof[Construction of the WKB solutions, and the error identity]{provenance=adapted src="rhb-2006:§25.7.1-25.7.2, Eqs. (25.45)-(25.49), pp. 896-898; hassani-2013:§14.8, Eqs. (14.44)-(14.46), pp. 450-451"}
**Step 1: the equation for the phase.** Put $y = Ae^{i\varphi}$. Then $y' = i\varphi' y$ and $y'' = (i\varphi'' - \varphi'^{2})y$, so $y'' + qy = 0$ becomes, after dividing by $y \neq 0$,

$$
\varphi'^{2} - i\varphi'' - q \;=\; 0 .
$$

This is exact and nonlinear, and has no solution in closed form for general $q$. The sign convention matters here and is discussed in the remark below.

**Step 2: first iterate.** Drop $\varphi''$ on the assumption that the phase curves slowly. Then $\varphi' = \pm\sqrt{q}$ and

$$
\varphi(x) \;=\; \pm\int_{x_0}^{x}\sqrt{q(u)}\,du ,
$$

which is the phase-memory solution. It is not exact: differentiating gives $\varphi'' = \pm q'/(2\sqrt{q})$, which is small only when $|q'| \ll |q|^{3/2}$, and that is where Hassani's validity condition comes from.

**Step 3: second iterate.** Put that estimate of $\varphi''$ back into the exact equation of step 1, so that $\varphi'^{2} = q + i\varphi'' \approx q \pm iq'/(2\sqrt{q})$. Take the square root and expand the bracket, which is legitimate because the second term inside it is small by step 2:

$$
\varphi' \;\approx\; \pm\sqrt{q}\left(1 \pm \frac{i\,q'}{2\,q^{3/2}}\right)^{1/2}
\;\approx\; \pm\sqrt{q}\left(1 \pm \frac{i\,q'}{4\,q^{3/2}}\right)
\;=\; \pm\sqrt{q} + \frac{i}{4}\frac{q'}{q} .
$$

The two signs multiply to give $+$ in the last term, so the amplitude correction is the *same* for both solutions — a point worth noticing, since it is why both WKB functions carry the same $q^{-1/4}$.

**Step 4: integrate and exponentiate.** Integrating,

$$
\varphi(x) \;=\; \pm\int_{x_0}^{x}\sqrt{q(u)}\,du + \frac{i}{4}\log q(x) + \text{const} ,
$$

and since $\exp\bigl(i\cdot\tfrac{i}{4}\log q\bigr) = \exp\bigl(-\tfrac14\log q\bigr) = q^{-1/4}$, the ansatz $y = Ae^{i\varphi}$ gives the two functions $y_\pm$ of the statement. This is the route of both sources: Riley, Hobson and Bence carry a factor $k_0$ throughout and arrive at $n^{-1/2}\exp(\pm ik_0\int n)$, Hassani works with $q$ and arrives at $q^{-1/4}\exp(\pm i\int\sqrt{q})$, and the two agree because $n^{-1/2} = (q/k_0^{2})^{-1/4}$ differs from $q^{-1/4}$ only by the constant $k_0^{1/2}$, which is absorbed in $A$.

**Step 5: the error identity (part 1 of the statement).** Nothing above says how good $y_\pm$ is, so compute the residual exactly. Write $S(x) = \int_{x_0}^{x}\sqrt{q}$, so $S' = \sqrt{q}$ and $S'' = q'/(2\sqrt{q})$, and $y_\pm = q^{-1/4}e^{\pm iS}$. Differentiating twice by the product rule,

$$
y_\pm'' \;=\; \Bigl[\bigl(q^{-1/4}\bigr)'' \;\pm\; 2i\,\bigl(q^{-1/4}\bigr)'S' \;\pm\; i\,q^{-1/4}S'' \;-\; q^{-1/4}(S')^{2}\Bigr]e^{\pm iS} .
$$

The last term is $-q\,y_\pm$, which cancels $+qy_\pm$. Of the three that remain, the two carrying $\pm i$ cancel each other: $\bigl(q^{-1/4}\bigr)' = -\tfrac14 q^{-5/4}q'$, so $2(q^{-1/4})'S' = -\tfrac12 q^{-5/4}q'\cdot q^{1/2} = -\tfrac12 q^{-3/4}q'$, while $q^{-1/4}S'' = q^{-1/4}q'/(2\sqrt{q}) = \tfrac12 q^{-3/4}q'$. (This cancellation is the content of step 3: the amplitude $q^{-1/4}$ was chosen to kill the first-order residue, for either sign.) What is left is

$$
y_\pm'' + q\,y_\pm \;=\; \bigl(q^{-1/4}\bigr)''\,q^{1/4}\,y_\pm .
$$

Differentiating $q^{-1/4}$ twice gives $\bigl(q^{-1/4}\bigr)'' = \tfrac{5}{16}q^{-9/4}q'^{2} - \tfrac14 q^{-5/4}q''$, so multiplying by $q^{1/4}$,

$$
y_\pm'' + q\,y_\pm \;=\; \left(\frac{5}{16}\frac{q'^{2}}{q^{2}} - \frac{1}{4}\frac{q''}{q}\right)y_\pm \;=\; \delta\,y_\pm ,
$$

which rearranges to $y_\pm'' + (q - \delta)y_\pm = 0$. Note that $\delta$ is the same for both signs, because it came only from the amplitude.

**Step 6: independence.** $y_+y_-' - y_-y_+' $ is computed directly: $y_+y_- = q^{-1/2}$ and $y_\pm' = \bigl(-\tfrac14 q^{-5/4}q' \pm i q^{-1/4}\sqrt{q}\bigr)e^{\pm iS}$, so the terms with $q'$ cancel in the difference and
$$
W(y_+,y_-) \;=\; q^{-1/2}\bigl(-i\sqrt{q} - i\sqrt{q}\bigr) \;=\; -2i ,
$$
a non-zero constant, so the two functions are linearly independent. (Constancy is also forced by :ref[]{to=ode.linear-ode-theory}, since both solve the same second-order equation $y'' + (q-\delta)y = 0$, which has no first-derivative term.)

**Step 7: the criterion.** By step 5, $y_\pm$ solves the intended equation with $q$ replaced by $q - \delta$. Hence the fractional error made in the coefficient of the equation is exactly $|\delta/q|$, and $y_\pm$ is a good approximation precisely when that is small. Expanding $\delta$, the first term dominates unless $q''$ is anomalously large, giving $\tfrac{5}{16}q'^{2}/q^{2} \ll |q|$, that is $|q'| \ll \sqrt{16/5}\,|q|^{3/2}$. Substituting $q = k_0^{2}n^{2}$, so $q' = 2k_0^{2}nn'$ and $|q|^{3/2} = k_0^{3}|n|^{3}$, this becomes $2k_0^{2}|nn'| \ll \sqrt{16/5}\,k_0^{3}|n|^{3}$, that is $|n'| \ll \sqrt{4/5}\,k_0|n|^{2}$, which is the criterion $|k_0^{-1}n'| \ll |n|^{2}$ quoted by Riley, Hobson and Bence up to the constant. $\square$
:::

:::remark[Where the hypotheses are used, and two differences between the sources]{provenance=original}
**$q \ne 0$ is used twice, and it is the real restriction.** The formula contains $q^{-1/4}$, which is undefined at a zero of $q$, and it contains $\sqrt{q}$, which is not differentiable there. Worse, the criterion itself fails: as $q \to 0$ with $q'$ bounded away from zero, $\delta \sim \tfrac{5}{16}q'^{2}/q^{2}$ blows up while $q$ shrinks, so $|\delta/q| \to \infty$. The WKB functions are therefore not merely inaccurate near a turning point, they are unbounded where the true solution is perfectly finite. Hassani names both ways the construction can break down — too fast a variation of $q$, or a zero of $q$ inside the region — and says that the zero is the harder of the two to live with, precisely because the usual task is to carry one solution from a region where $q$ is positive into a region where it is negative. That is what the connection formulas below are for.

**Twice-differentiability is used** only in the error identity, where $q''$ appears; the functions $y_\pm$ themselves need only $q \in C^{1}$. If $q$ has an isolated corner, $q''$ contains a point mass and the identity fails at that one point, but the phase integral $\int\sqrt{q}$ is unaffected, since its integrand is still continuous. The worked example below is of exactly this kind.

**Difference 1: the sign convention in the phase equation.** Riley, Hobson and Bence's Eq. (25.47) reads, with their $k_0^{2}n^{2}$ for $q$,

$$
-\varphi'^{2} + i\varphi'' + q \;=\; 0 ,
$$

which is the identity derived in step 1 above. Hassani's Eq. (14.44) is printed as $\varphi'^{2} + i\varphi'' - q = 0$, which differs in the sign of the $i\varphi''$ term. This unit follows Riley, Hobson and Bence. The difference has no effect on the answer: Hassani's own next step inserts $\varphi'' = +q'/(2\sqrt{q})$ with the sign that the Riley-Hobson-Bence convention produces, and his Eq. (14.46) is the same two-term solution as theirs. A reader deriving the iteration from his Eq. (14.44) as printed would get the amplitude $q^{+1/4}$ instead of $q^{-1/4}$.

**Difference 2: how the quantization condition is argued.** Both sources reach $\int\sqrt{q}\,dx = (n+\tfrac12)\pi$ across a well, but by different arguments, and the unit follows the Riley-Hobson-Bence one, given below, because it produces every $n$ at once. Hassani's Example 14.8.1 equates the two cosine forms continued inward from the two turning points and concludes that their amplitudes are equal. Read literally that is impossible — one cosine's argument increases with $x$ while the other's decreases, so the two functions cannot agree pointwise — and the correct statement is that they agree *up to sign*, since an eigenfunction is determined only up to a constant multiple. Taking the two signs in turn gives $\int\sqrt{q} = (2k+\tfrac12)\pi$ and $\int\sqrt{q} = (2k+\tfrac32)\pi$, whose union is his stated $(n+\tfrac12)\pi$ for $n = 0,1,2,\dots$

**The expansion does not converge.** Iterating steps 2-4 further produces more terms, and Arfken, Weber and Harris record the standing fact about the result: the WKB expansion, one of the earliest approximations of quantum mechanics still in use, is an :ref[asymptotic series]{to=asym.asymptotic-series}. More terms help for a while and then stop helping; Riley, Hobson and Bence's §25.7.3 makes the same point, adding the practical observation that the validity criterion can always be met *in principle* by making $k_0$ or $|z|$ large, but that physical parameters cannot be varied at will, so this is often of no use.
:::

:::statement[Connection formulas at a simple turning point]{provenance=adapted src="hassani-2013:§14.8, Eqs. (14.47)-(14.48), p. 451; rhb-2006:§25.7, Eqs. (25.52)-(25.53) and pp. 899-900"}
Let $x_0$ be a turning point with $q(x_0) = 0$ and $q > 0$ to the right of $x_0$, $q < 0$ to the left, and suppose the validity criterion holds in regions on both sides, away from $x_0$. Suppose further that the solution of interest **decays exponentially** as one moves left from $x_0$. Then the solution is, to the left of $x_0$,

$$
y(x) \;\approx\; \frac{C}{\bigl(-q(x)\bigr)^{1/4}}\,\exp\left(-\int_{x}^{x_0}\sqrt{-q(u)}\,du\right) ,
$$

and the *same* solution is, to the right of $x_0$,

$$
y(x) \;\approx\; \frac{2C}{q(x)^{1/4}}\,\cos\left(\int_{x_0}^{x}\sqrt{q(u)}\,du \;-\; \frac{\pi}{4}\right) ,
$$

with one and the same constant $C$. These are the formulas Hassani quotes, declining to derive them; reflecting the $x$-axis turns these into the mirror-image pair, which applies when the signs of $q$ on the two sides of the turning point are interchanged.

Two features are the whole content. The **factor $2$** in the oscillatory amplitude and the **phase $-\pi/4$** measured from the turning point are not conventions: they are forced, and they are what makes the quantization condition come out with a half-integer.

Riley, Hobson and Bence supply the reason, which is worth recording even though the derivation is not reproduced here. Near a simple turning point, write $q(x) \approx q'(x_0)(x - x_0)$; the equation becomes Stokes' equation $d^{2}y/dz^{2} = zy$ after the stretch $x - x_0 = \mu z$ with $|\mu| = |q'(x_0)|^{-1/3}$, the sign of $\mu$ chosen so that $z > 0$ lies in the region where $q < 0$ (in the quantum case $|\mu| = [\hbar^{2}/2m|V'(x_0)|]^{1/3}$). Its decaying solution is the :ref[Airy function]{to=spec.airy-functions} $\mathrm{Ai}(z)$, which is finite at $z = 0$ where the WKB functions are not. The two WKB functions $z^{-1/4}\exp(\mp\tfrac23 z^{3/2})$ are each asymptotic to $\mathrm{Ai}$ in one sector of the complex $z$-plane only, and the combination of them that equals $\mathrm{Ai}$ changes across radial lines — the Stokes lines, at $\arg z = 0, 2\pi/3, 4\pi/3$ for Stokes' equation. The factor $2$ and the phase $-\pi/4$ are the recorded values of that change: they are read off the two known asymptotic forms of $\mathrm{Ai}(z)$, decaying like $\tfrac12\pi^{-1/2}z^{-1/4}e^{-2z^{3/2}/3}$ for $z$ real and positive and oscillating like $\pi^{-1/2}(-z)^{-1/4}\sin\bigl(\tfrac23(-z)^{3/2} + \tfrac{\pi}{4}\bigr)$ for $z$ real and negative. The general phenomenon — that the constants needed to build a solution change as the argument crosses certain lines in the complex plane — is the Stokes phenomenon.
:::

:::statement[The quantization condition for a well]{provenance=adapted src="rhb-2006:§25.7, pp. 900-901; hassani-2013:§14.8, Example 14.8.1, pp. 451-452"}
Let $q$ be positive on an interval $(a,b)$ and negative outside it, with simple turning points at $a$ and $b$, and let the validity criterion hold inside the well away from the two ends. A solution that decays exponentially in both outer regions exists only if

$$
\int_{a}^{b}\sqrt{q(x)}\,dx \;=\; \left(n + \tfrac12\right)\pi , \qquad n = 0, 1, 2, \dots
$$

For the one-dimensional Schrödinger equation $-\tfrac{\hbar^{2}}{2m}\psi'' + V\psi = E\psi$, where $q = 2m(E-V)/\hbar^{2}$ and $a, b$ are the classical turning points $V(a) = V(b) = E$, this reads

$$
\int_{a}^{b}\sqrt{2m\bigl(E - V(x)\bigr)}\,dx \;=\; \left(n + \tfrac12\right)\pi\hbar ,
$$

the **Bohr-Sommerfeld quantization condition** of pre-1925 quantum mechanics, in Hassani's words; it is the condition that the classical action across the well be a half-integer number of units of $\pi\hbar$.

*Why.* Apply the connection formulas at each end. At $b$ the decaying outer solution continues inward as $\tfrac{2C}{q^{1/4}}\cos\bigl(\int_{x}^{b}\sqrt{q} - \tfrac\pi4\bigr)$, and at $a$ as $\tfrac{2D}{q^{1/4}}\cos\bigl(\int_{a}^{x}\sqrt{q} - \tfrac\pi4\bigr)$. These must be the same solution of a second-order equation, so the two expressions and their derivatives must agree at any interior point. Riley, Hobson and Bence write the two matching equations and observe that requiring them to give a consistent value of the amplitude ratio forces

$$
\sin\left[\left(\int_{a}^{x}\sqrt{q} - \frac\pi4\right) + \left(\int_{x}^{b}\sqrt{q} - \frac\pi4\right)\right] \;=\; 0 ,
$$

in which the interior point $x$ has dropped out because the two integrals add to $\int_a^b\sqrt{q}$. Hence $\int_a^b\sqrt{q} - \tfrac\pi2 = m\pi$ for an integer $m$, and since $\sqrt q > 0$ the left side is positive, giving $\int_a^b\sqrt q = (n+\tfrac12)\pi$ with $n = m \ge 0$. Their calculation also notes that the terms involving $q'$ in the derivative matching cancel on their own, so this particular conclusion does not even need the validity criterion a second time.
:::

:::method[Using WKB on a second-order equation]{provenance=adapted src="rhb-2006:§25.7, pp. 895-901; hassani-2013:§14.8, pp. 450-452"}
1. **Put the equation in the form $y'' + q(x)y = 0$.** Divide out the coefficient of $y''$. If the result $y'' + p(x)y' + r(x)y = 0$ still has a first-derivative term, remove it by $y = w\exp\bigl(-\tfrac12\int p\bigr)$; then $w'' + qw = 0$ with $q = r - \tfrac12 p' - \tfrac14 p^{2}$.
2. **Locate the turning points,** the zeros of $q$, and separate the axis into regions where $q > 0$ (oscillatory) and $q < 0$ (exponential).
3. **Test the criterion region by region.** Compute $\delta = \tfrac{5}{16}q'^{2}/q^{2} - \tfrac14 q''/q$ and check $|\delta| \ll |q|$. Record where it fails; it always fails in a neighbourhood of every turning point, and the width of that neighbourhood is the honest measure of how much of the problem WKB cannot see.
4. **Write the solutions.** In a region with $q > 0$ use
   $$
   \frac{C_\pm}{q^{1/4}}\exp\left(\pm i\int\sqrt{q}\right) \quad\text{or}\quad \frac{1}{q^{1/4}}\left\{\cos,\ \sin\right\}\left(\int\sqrt{q}\right) ;
   $$
   in a region with $q < 0$ use $(-q)^{-1/4}\exp\bigl(\pm\int\sqrt{-q}\bigr)$. Choose the decaying combination wherever a boundary condition at infinity requires it.
5. **Join regions with the connection formulas,** not by matching the WKB forms directly at the turning point, where both are singular. Keep the factor $2$ and the phase $-\pi/4$.
6. **Read off the eigenvalue condition.** For a well bounded by two turning points this is the quantization condition above; the turning points themselves depend on the eigenvalue, so it is an implicit equation for $E$.
7. **Judge the answer by step 3, not by the formula's appearance.** The approximation improves as the phase integral across the well grows — in a bound-state problem that means high quantum numbers — and is at its worst for the ground state.
:::

:::example[A triangular well: WKB levels against the exact Airy spectrum]{provenance=original}
Take a particle of mass $m$ in the one-dimensional potential $V(x) = F|x|$ with $F > 0$: a linear restoring force of constant magnitude, pointing towards the origin. This is the potential of a ball bouncing under gravity, reflected to make it symmetric, and it is a good test because its exact spectrum is known in closed form.

**WKB.** With $q(x) = 2m\bigl(E - F|x|\bigr)/\hbar^{2}$ the turning points are at $\pm a$ with $a = E/F$, and

$$
\int_{-a}^{a}\sqrt{q}\,dx \;=\; \frac{2\sqrt{2m}}{\hbar}\int_{0}^{E/F}\bigl(E - Fx\bigr)^{1/2}dx \;=\; \frac{2\sqrt{2m}}{\hbar}\cdot\frac{2E^{3/2}}{3F} \;=\; \frac{4\sqrt{2m}\,E^{3/2}}{3\hbar F} .
$$

Setting this equal to $(n+\tfrac12)\pi$ and solving for $E$,

$$
E_n \;=\; \left[\frac{3\pi\hbar F\left(n+\tfrac12\right)}{4\sqrt{2m}}\right]^{2/3} .
$$

In units with $\hbar = m = F = 1$ this is $E_n = \bigl[3\pi(n+\tfrac12)/(4\sqrt{2})\bigr]^{2/3}$.

**The exact answer.** In the same units the equation is $\psi'' + 2(E - |x|)\psi = 0$. For $x > 0$ the substitution $u = 2^{1/3}(x - E)$ turns it into $d^{2}\psi/du^{2} = u\psi$, so the solution decaying as $x \to +\infty$ is $\psi = \mathrm{Ai}\bigl(2^{1/3}(x-E)\bigr)$; see :ref[]{to=spec.airy-functions}. Because $V$ is even, the eigenfunctions are even or odd, and the matching condition at the origin is $\psi'(0) = 0$ or $\psi(0) = 0$ respectively. Hence

$$
\text{even } n: \ \mathrm{Ai}'\bigl(-2^{1/3}E\bigr) = 0 , \qquad\qquad \text{odd } n: \ \mathrm{Ai}\bigl(-2^{1/3}E\bigr) = 0 ,
$$

so $E = 2^{-1/3}|a_k|$ with $a_k$ the zeros of $\mathrm{Ai}'$ and of $\mathrm{Ai}$ in turn.

**Comparison** (units $\hbar = m = F = 1$):

| $n$ | WKB $E_n$ | exact $E_n$ | relative error, per cent |
|---|---|---|---|
| $0$ | $0.885341$ | $0.808617$ | $+9.5$ |
| $1$ | $1.841584$ | $1.855757$ | $-0.76$ |
| $2$ | $2.588754$ | $2.578096$ | $+0.41$ |
| $3$ | $3.239735$ | $3.244608$ | $-0.15$ |
| $5$ | $4.378976$ | $4.381671$ | $-0.06$ |

**The criterion explains the table.** Here $q = 2(E - |x|)$, so $q' = \mp 2$ and $q'' = 0$ away from the origin, giving $\delta = \tfrac{5}{16}\cdot\tfrac{4}{q^{2}} = \tfrac{5}{4q^{2}}$, and the criterion $|\delta| \ll q$ becomes

$$
q^{3} \;\gg\; \tfrac54 .
$$

The best place in the well is the bottom, $x = 0$, where $q = 2E$. For $n = 0$, $q(0) = 1.771$ and $|\delta/q| = 0.225$ — a 22 per cent error in the coefficient of the equation at the *most* favourable point, and the criterion fails outright ($|\delta| > q$) for $|x| > 0.347$, which is the outer 61 per cent of the well. A 9.5 per cent error in the level is a mild punishment for that. For $n = 5$, $q(0) = 8.758$ and $|\delta/q| = 0.0019$, with the criterion failing only in the outer 12 per cent of the well, and the level is right to six parts in ten thousand. This is the behaviour promised in step 7 of the method: WKB is an approximation for the highly excited states that becomes, almost by accident, tolerable for the ground state.

**One honest caveat.** $V = F|x|$ has a corner at the origin, where $q'$ jumps and $q''$ has a point mass, so the error identity does not hold at that single point. It does not matter: $\sqrt{q}$ is continuous there, so the phase integral and hence the quantization condition are unaffected, and $\delta$ is finite everywhere else in the well. A smooth potential with the same shape away from the origin gives the same table to the accuracy shown.
:::

:::application[Waves in slowly varying media, and barrier penetration]{provenance=adapted src="rhb-2006:§25.7.1, pp. 895-897; hassani-2013:§14.8, Example 14.8.1, pp. 451-452"}
**Optics and radio propagation.** The reason Riley, Hobson and Bence set the problem up with a refractive index $n(x)$ is that this is the method's oldest use. A wave in a medium whose properties change over distances long compared with a wavelength keeps a phase that is the accumulated local phase, $k_0\int n$, and an amplitude that scales as $n^{-1/2}$. The condition for this to be valid — that $n$ change little over a few wavelengths — is comfortably satisfied by visible light in glass and by radio waves in the ionosphere, which is why ray tracing works at all; the places where it fails are precisely the interesting ones, such as the height at which a radio wave is reflected, where the effective $q$ passes through zero and the turning-point analysis above is needed. Allowing $n$ to be complex, which costs nothing in the derivation, describes a wave in an absorbing medium: the imaginary part of $n$ turns the oscillation into a decaying one, and $\mathrm{Im}\int n$ is the accumulated attenuation.

**Quantum spectra.** The quantization condition is how energy levels were estimated before the Schrödinger equation could be solved, and it is still the fastest way to get the level density of a complicated potential. Hassani's reading of it is the physical one: the integral is the classical action accumulated across the classically allowed region, and the half-integer on the right is the accumulated $\pi/4$ of phase from each of the two turning points. Two checks are standard. For a harmonic oscillator the condition is exact, returning $E_n = (n+\tfrac12)\hbar\omega$ including the zero-point energy; and for a well $V = V_0|x|^{2s}$ Riley, Hobson and Bence obtain $E_n \propto (n+\tfrac12)^{2s/(s+1)}$, which reproduces the equal spacing of the oscillator at $s = 1$ and the $n^{2}$ spacing of a square well in the limit of large $s$.

**Barrier penetration.** The exponential branch of the construction is the other standard use. Where $q < 0$ the WKB solutions are $(-q)^{-1/4}\exp\bigl(\pm\int\sqrt{-q}\bigr)$, so a wave crossing a classically forbidden region between two turning points is attenuated by a factor whose logarithm is $\int\sqrt{-q}\,dx$ across the barrier. Squaring to get a probability gives a transmission that is exponentially small in $2\int\sqrt{-q}$. This is the estimate behind the Gamow factor for alpha decay, behind field emission of electrons from a metal surface, and behind the exponential dependence of a scanning tunnelling microscope's current on tip height; in each case the enormous dynamic range of the measured quantity comes from a quantity sitting in an exponent, and WKB is accurate enough for the exponent even where it would be poor for a prefactor.
:::
