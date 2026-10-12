---
id: complex.dispersion-relations
title: Dispersion relations
kind: application
level: core
summary: A response that cannot precede its cause has a susceptibility analytic in the upper half-plane; Cauchy's formula on a contour that skirts the real axis then expresses its real part as a principal-value integral of its imaginary part and conversely -- the Kramers-Kronig relations, which tie refraction to absorption without any model of the medium.
prereqs: [complex.principal-value-integrals, complex.cauchy-integral-formula, complex.analytic-continuation]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.8, Dispersion Relations: the contour of Fig. 12.6 and Eqs. (12.116)-(12.118), pp. 591-593; Symmetry Relations, Eqs. (12.119)-(12.123), pp. 593-594; Optical Dispersion, Eqs. (12.124)-(12.126), pp. 594-595; the Parseval relation (12.127), pp. 595-596"
    pages: "591-596"
    role: the hypotheses (analytic in the upper half-plane and on the real axis, vanishing at large $|z|$), the contour derivation, the Hilbert-transform pair, the crossing condition $f(-x)=f^*(x)$ and the half-line Kramers-Kronig form, the $n^2-1$ subtraction for the index of refraction, and the Parseval identity between the two parts
  - work: hassani-2013
    loc: "§12.3.2, Dispersion Relations: the cut-plane form obtained with the Schwarz reflection principle (Theorem 12.3.6, pp. 375-376), the Hilbert-transform pair (12.6), the dispersion relation with one subtraction (12.7) and Example 12.3.7 with the optical theorem, Eq. (12.8), pp. 376-378"
    pages: "375-378"
    role: the derivation across a cut using the reflection principle, the sign convention for passing the pole above or below, the subtracted relation and its use with the optical theorem to give the original Kramers-Kronig formula
  - work: reed-simon-1980
    loc: "§V.6, part C (Bootstrap equations): the forward scattering amplitude as the boundary value of a function analytic in the cut $s$-plane, the reflection principle, the dispersion relation (V.7a), the need for subtractions, and the Mandelstam representation, pp. 156-157"
    pages: "156-157"
    role: the same argument as it is used in scattering theory, the vocabulary of the discontinuity across the cut and of subtractions, and the remark that the relation is proved only for restricted classes of potentials
---

:::note{provenance=original}
**What it means.** Suppose a system is pushed and responds, linearly, with a memory kernel: the response now is a weighted integral of the forcing in the past. "In the past" is the whole of the physics. It says the kernel vanishes for negative arguments, and that single fact makes the Fourier transform of the kernel -- the susceptibility $\tilde\chi(\omega)$ -- analytic in the upper half of the complex $\omega$-plane, because there the oscillating factor $e^{i\omega t}$ decays precisely on the half-line where the kernel lives.

Analyticity in a half-plane is a severe constraint. Cauchy's formula recovers an analytic function inside a contour from its values on the contour; take the contour to be the real axis closed by a large semicircle, and $\tilde\chi$ anywhere in the upper half-plane -- in particular just above the real axis -- is determined by $\tilde\chi$ on the real axis alone. Splitting that statement into real and imaginary parts gives a pair of integral relations: the dispersive part of the response at one frequency is fixed by the absorptive part at *all* frequencies, and conversely. In optics this is the Kramers-Kronig pair, and it says that a medium which absorbs at any frequency must refract at every frequency. No model of the medium is used; the input is causality, linearity, and enough decay.
:::

:::definition[Causal response, susceptibility, and the convention]{provenance=original}
Let a scalar forcing $F$ produce a response $R$ through a linear, time-translation-invariant law with kernel $\chi$,
$$
R(t) \;=\; \int_{-\infty}^{\infty} \chi(t - t')\,F(t')\, dt' .
$$
The law is **causal** if $R(t)$ depends only on $\{F(t') : t' \le t\}$, which for this form is exactly
$$
\chi(\tau) = 0 \qquad\text{for } \tau < 0 .
$$
The **susceptibility** is the transform of the kernel,
$$
\tilde\chi(\omega) \;=\; \int_{-\infty}^{\infty}\chi(\tau)\,e^{i\omega\tau}\, d\tau \;=\; \int_{0}^{\infty}\chi(\tau)\,e^{i\omega\tau}\, d\tau ,
$$
the second equality being causality. With this convention the inverse is $\chi(\tau) = \tfrac{1}{2\pi}\int \tilde\chi(\omega)e^{-i\omega\tau}d\omega$, and a monochromatic forcing $F(t) = \operatorname{Re}(F_0 e^{-i\omega t})$ produces $R(t) = \operatorname{Re}(\tilde\chi(\omega)F_0 e^{-i\omega t})$; see :ref[]{to=fourier.fourier-transform} for the transform itself.

**Convention.** The time factor is $e^{-i\omega t}$ and the transform kernel $e^{+i\omega\tau}$. This is the convention of Arfken, Weber and Harris, who write a wave as $\exp[i(kx-\omega t)]$ (p. 594), and it is the usual one in optics and in many-body physics. With it, causality puts the analyticity in the **upper** half-plane. The opposite convention $e^{-i\omega\tau}$ in the transform moves everything to the lower half-plane and reverses the sign of every imaginary part below; it is used in parts of the engineering literature, where the analogous object is the Laplace transform $\int_0^\infty \chi(\tau)e^{-s\tau}d\tau$, analytic in $\operatorname{Re}s > 0$ (:ref[]{to=fourier.laplace-transform}). Check the convention before importing a sign.

Throughout, $u$ and $v$ denote the real and imaginary parts of the boundary values on the real axis: $f(x) = u(x) + iv(x)$ for real $x$. For a susceptibility, $u$ is the **dispersive** (in-phase, reactive) part and $v$ the **absorptive** (out-of-phase, dissipative) part, since the work done per cycle by the forcing is proportional to $\omega\, v(\omega)\lvert F_0\rvert^2$.
:::

:::statement[Causality gives analyticity in the upper half-plane]{provenance=original}
Let $\chi : \mathbb{R}\to\mathbb{C}$ be measurable with $\chi(\tau) = 0$ for $\tau<0$ and $\int_0^\infty \lvert\chi(\tau)\rvert\,d\tau = M < \infty$. Write $\overline{H} = \{\omega \in \mathbb{C} : \operatorname{Im}\omega \ge 0\}$ and $H$ for its interior. Then
$$
\tilde\chi(\omega) = \int_0^\infty \chi(\tau)e^{i\omega\tau}\,d\tau
$$
is defined by an absolutely convergent integral for every $\omega \in \overline{H}$, and

1. $\lvert \tilde\chi(\omega)\rvert \le M$ on $\overline{H}$;
2. $\tilde\chi$ is analytic on $H$ and continuous on $\overline{H}$;
3. $\displaystyle \sup\{\, \lvert\tilde\chi(\omega)\rvert : \omega \in \overline{H},\ \lvert\omega\rvert = R \,\} \longrightarrow 0$ as $R\to\infty$;
4. if moreover $\int_0^\infty \tau\lvert\chi(\tau)\rvert\,d\tau<\infty$, then $\tilde\chi$ is continuously differentiable on $\overline{H}$, hence Lipschitz on compact subsets of the real axis.

Claims 2, 3 and 4 are exactly the hypotheses the dispersion relation below needs. Conversely, analyticity in $H$ alone does **not** force causality -- $\tilde\chi \equiv 1$ is analytic everywhere and corresponds to $\chi = \delta$, which is causal only by the convention that places the delta at the origin, while $\tilde\chi(\omega) = e^{i\omega a}$ with $a<0$ is also analytic everywhere and is the manifestly acausal advance by $\lvert a\rvert$. What the dispersion relation uses is analyticity plus the decay in claim 3, and $e^{i\omega a}$ with $a<0$ fails that decay.
:::

:::idea{provenance=original}
On the half-line where $\chi$ lives, $\lvert e^{i\omega\tau}\rvert = e^{-\tau\operatorname{Im}\omega} \le 1$ for $\operatorname{Im}\omega\ge0$: the oscillation becomes a *decay* exactly when the frequency is pushed upwards. That gives the bound and the convergence at once. Analyticity then needs only that the integrand be analytic in $\omega$ for each $\tau$ and that the integral converge well enough to interchange it with a contour integral, which is Morera's theorem plus Fubini. The decay in claim 3 is a two-piece estimate: the far tail of $\chi$ is small because $\chi$ is integrable, and the near part is small for large $\lvert\omega\rvert$ because a step function integrates against $e^{i\omega\tau}$ to something of size $1/\lvert\omega\rvert$.
:::

:::proof{provenance=original}
**Convergence and claim 1.** For $\omega \in \overline{H}$ and $\tau\ge0$, $\lvert \chi(\tau)e^{i\omega\tau}\rvert = \lvert\chi(\tau)\rvert e^{-\tau\operatorname{Im}\omega} \le \lvert\chi(\tau)\rvert$, which is integrable by hypothesis. So the integral converges absolutely and is bounded by $M$.

**Claim 2, continuity.** If $\omega_n \to \omega$ in $\overline{H}$ then $\chi(\tau)e^{i\omega_n\tau}\to\chi(\tau)e^{i\omega\tau}$ pointwise, dominated by $\lvert\chi\rvert$; dominated convergence gives $\tilde\chi(\omega_n)\to\tilde\chi(\omega)$.

**Claim 2, analyticity.** Let $\Delta$ be any closed triangle contained in $H$, and let $\partial\Delta$ be its boundary. The function $(\omega,\tau)\mapsto \chi(\tau)e^{i\omega\tau}$ is absolutely integrable on $\partial\Delta\times(0,\infty)$, since $\lvert\chi(\tau)e^{i\omega\tau}\rvert\le\lvert\chi(\tau)\rvert$ and $\partial\Delta$ has finite length. Fubini's theorem therefore allows the order of integration to be exchanged:
$$
\oint_{\partial\Delta}\tilde\chi(\omega)\,d\omega
= \int_0^\infty \chi(\tau)\left(\oint_{\partial\Delta} e^{i\omega\tau}\,d\omega\right) d\tau
= 0 ,
$$
because for each fixed $\tau$ the integrand $\omega\mapsto e^{i\omega\tau}$ is entire, so its integral round a closed contour vanishes by Cauchy's theorem. Since $\tilde\chi$ is continuous on $H$ and integrates to zero round every triangle there, Morera's theorem makes it analytic on $H$.

**Claim 3.** Fix $\varepsilon>0$. Choose $T$ with $\int_T^\infty\lvert\chi\rvert < \varepsilon/3$; then the tail of the integral is below $\varepsilon/3$ for every $\omega\in\overline{H}$, by the same bound as in claim 1. On $[0,T]$, choose a step function $g = \sum_{k=1}^{N}c_k\mathbf{1}_{[a_k,b_k)}$ with $\int_0^T\lvert \chi - g\rvert<\varepsilon/3$ (step functions are dense in $L^1$ of a bounded interval); the difference contributes at most $\varepsilon/3$, again uniformly on $\overline{H}$. Finally, for $\omega\neq0$ in $\overline{H}$,
$$
\left\lvert\int_0^T g(\tau)e^{i\omega\tau}d\tau\right\rvert
= \left\lvert \sum_{k=1}^{N} c_k\,\frac{e^{i\omega b_k}-e^{i\omega a_k}}{i\omega}\right\rvert
\;\le\; \frac{2}{\lvert\omega\rvert}\sum_{k=1}^{N}\lvert c_k\rvert ,
$$
using $\lvert e^{i\omega a}\rvert \le 1$ on $\overline{H}$. The right-hand side is below $\varepsilon/3$ once $\lvert\omega\rvert$ is large enough, with a threshold depending on $g$ but not on $\arg\omega$. Adding the three estimates gives $\lvert\tilde\chi(\omega)\rvert<\varepsilon$ for all $\omega\in\overline{H}$ with $\lvert\omega\rvert$ large, which is the uniform statement.

**Claim 4.** Under $\int_0^\infty\tau\lvert\chi\rvert<\infty$ the differentiated integral $\int_0^\infty i\tau\chi(\tau)e^{i\omega\tau}d\tau$ converges absolutely and uniformly on $\overline{H}$, so it may be differentiated under the integral sign and the derivative is continuous on $\overline{H}$ by the argument of claim 2. A continuously differentiable function is Lipschitz on compacta. $\square$
:::

:::statement[The dispersion relation]{provenance=adapted src="arfken-2013:§12.8, Eqs. (12.116)-(12.118) and Fig. 12.6, pp. 591-593"}
Let $f$ be analytic in the open upper half-plane and continuous on the closed upper half-plane, let $f$ be Lipschitz on a neighbourhood of the real point $x_0$, and suppose
$$
\sup\{\lvert f(z)\rvert : \operatorname{Im}z\ge0,\ \lvert z\rvert = R\} \to 0 \qquad (R\to\infty) .
$$
(Arfken, Weber and Harris take $f$ to be analytic above the axis and on it, and ask of the behaviour at large radius only that it be rapid enough to make the semicircular part of their Fig. 12.6 negligible. The uniform decay displayed above is one convenient condition that does this; the proof below shows it is enough.) Then, writing $f(x) = u(x)+iv(x)$ for real $x$ and $\mathrm{P}\!\int$ for the Cauchy principal value (:ref[]{to=complex.principal-value-integrals}):

1. **Cauchy's formula on the axis.**
   $$
   f(x_0) \;=\; \frac{1}{i\pi}\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{f(x)}{x-x_0}\,dx .
   $$
2. **The Hilbert-transform pair.** Separating real and imaginary parts,
   $$
   u(x_0) \;=\; \frac{1}{\pi}\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{v(x)}{x-x_0}\,dx ,
   \qquad
   v(x_0) \;=\; -\frac{1}{\pi}\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{u(x)}{x-x_0}\,dx .
   $$
   These are the **dispersion relations**: each part of $f$ on the real axis is an integral transform of the other. The transform is the Hilbert transform, and apart from a sign it is its own inverse -- which is the content of the two formulas taken together.
3. **Off the axis.** For $\operatorname{Im}z_0>0$ the same hypotheses give $f(z_0) = \frac{1}{2\pi i}\int_{-\infty}^{\infty} f(x)\,dx/(x-z_0)$, with an ordinary integral and the full $2\pi i$; for $\operatorname{Im}z_0<0$ the right-hand side is $0$.

Two remarks on reading the formulas. They say nothing unless $f$ is genuinely complex on the real axis: if $v\equiv0$ then statement 2 forces $u\equiv0$ as well, so a function that is real on the real axis and satisfies these hypotheses vanishes identically. And $u$ at the single point $x_0$ is fixed by $v$ at *every* frequency -- the relations are global, not local.
:::

:::idea{provenance=original}
Apply Cauchy's integral formula to $f$ on the closed semicircular contour: the real segment $[-R,R]$ together with the arc of radius $R$ in the upper half-plane. Two things then happen as $R\to\infty$. The arc dies, because the integrand is $f(z)/(z-z_0)$ and the arc contributes at most (length) $\times$ (bound) $\approx \pi R \cdot \sup\lvert f\rvert / R$, so uniform decay of $f$ is enough with no extra rate. And if the evaluation point is pushed down onto the real axis, the pole of the Cauchy kernel lands on the contour; indenting around it with a small semicircle costs exactly half a residue, which is why $2\pi i$ in statement 3 becomes $i\pi$ in statement 1. Everything else is taking real and imaginary parts of one equation.
:::

:::proof{provenance=adapted src="arfken-2013:§12.8, pp. 591-592; hassani-2013:§12.3.2, Eq. (12.6), p. 377"}
Fix $R > \lvert x_0\rvert + 1$ and $\delta \in (0,1)$. Let $\Gamma_{R,\delta}$ be the closed contour, traversed counterclockwise, consisting of

- the real segments $[-R,\,x_0-\delta]$ and $[x_0+\delta,\,R]$;
- the small semicircle $C_\delta$ of radius $\delta$ about $x_0$, run from $x_0-\delta$ to $x_0+\delta$ **through the upper half-plane** -- so the contour steps over $x_0$ rather than through it, and this small arc is itself traversed clockwise even though the whole contour is counterclockwise;
- the large arc $A_R$: $z = Re^{i\theta}$, $0\le\theta\le\pi$.

**Step 1: the integrand is analytic inside.** The function $z\mapsto f(z)/(z-x_0)$ is analytic on the open region enclosed by $\Gamma_{R,\delta}$, because $f$ is analytic there and the only possible singularity, $z = x_0$, has been excluded by the indentation. By Cauchy's theorem,
$$
\oint_{\Gamma_{R,\delta}}\frac{f(z)}{z-x_0}\,dz = 0 .
$$

**Step 2: the large arc contributes nothing.** On $A_R$ we have $\lvert z - x_0\rvert \ge R - \lvert x_0\rvert$, so
$$
\left\lvert \int_{A_R}\frac{f(z)}{z-x_0}\,dz\right\rvert \;\le\; \pi R \cdot \frac{\sup_{A_R}\lvert f\rvert}{R-\lvert x_0\rvert}
\;=\; \frac{\pi R}{R - \lvert x_0\rvert}\,\sup_{A_R}\lvert f\rvert \;\longrightarrow\; 0 ,
$$
since the prefactor tends to $\pi$ and the supremum to $0$ by hypothesis. This is the step the decay hypothesis is for, and it shows that mere uniform decay to zero suffices: no rate is needed, because the kernel already supplies one power of $R$.

**Step 3: the indentation contributes half a residue.** Lipschitz continuity of $f$ at $x_0$ lets us write $f(z) = f(x_0) + O(\lvert z-x_0\rvert)$ there, so
$$
\int_{C_\delta}\frac{f(z)}{z-x_0}\,dz = f(x_0)\int_{C_\delta}\frac{dz}{z-x_0} + O(\delta) .
$$
Parametrising $z = x_0+\delta e^{i\theta}$ with $\theta$ running from $\pi$ down to $0$ (so that the arc goes above $x_0$, from left to right) gives $\int_{C_\delta} dz/(z-x_0) = \int_\pi^0 i\,d\theta = -i\pi$. Hence the indentation tends to $-i\pi f(x_0)$ as $\delta\to0$. This is the standard half-residue result established in :ref[]{to=complex.principal-value-integrals}.

**Step 4: the remaining segments give the principal value.** By definition $\int_{-R}^{x_0-\delta} + \int_{x_0+\delta}^{R} \to \mathrm{P}\!\int_{-\infty}^{\infty} f(x)\,dx/(x-x_0)$ as $\delta\to0$ and $R\to\infty$, provided that limit exists; the Lipschitz condition makes the symmetric deletion converge near $x_0$ (the odd part of $1/(x-x_0)$ cancels against the constant term of $f$), and Step 2's bound applied to $\lvert x\rvert>R$ controls the tails.

Adding the three pieces and letting $\delta\to0$, $R\to\infty$ in Step 1 gives
$$
\mathrm{P}\!\int_{-\infty}^{\infty}\frac{f(x)}{x-x_0}\,dx \;-\; i\pi f(x_0) \;=\; 0 ,
$$
which is statement 1. For statement 2, substitute $f = u+iv$ and multiply by $1/(i\pi) = -i/\pi$:
$$
u(x_0)+iv(x_0) = \frac{1}{\pi}\mathrm{P}\!\int\frac{v(x)}{x-x_0}dx \;-\; \frac{i}{\pi}\mathrm{P}\!\int\frac{u(x)}{x-x_0}dx ,
$$
and $u, v$ are real on the real axis, so the two principal-value integrals are real and may be matched part by part. Statement 3 is Cauchy's integral formula on the same contour without any indentation: for $\operatorname{Im}z_0>0$ the point is interior and the formula gives $2\pi i f(z_0)$, while for $\operatorname{Im}z_0<0$ the integrand is analytic inside and the integral vanishes. $\square$

Hassani records the same computation with the choice left open: putting the small semicircle in the upper half-plane gives the upper signs in his Eq. (12.6), and putting it in the lower half-plane gives the lower signs, the two differing by the full residue (p. 377).
:::

:::statement[Crossing symmetry and the Kramers-Kronig form]{provenance=adapted src="arfken-2013:§12.8, Symmetry Relations, Eqs. (12.119)-(12.123), pp. 593-594"}
Suppose in addition that $f$ satisfies the **crossing condition**
$$
f(-x) = f^{*}(x) \qquad (x\in\mathbb{R}) ,
$$
equivalently that $u$ is even and $v$ is odd. (Arfken, Weber and Harris note that this holds exactly when $f$ is the transform of a real function, and that in quantum-mechanical scattering the relations $u(-x)=u(x)$, $v(-x)=-v(x)$ are called the crossing conditions.) Then the dispersion relations can be folded onto the positive half-line, where alone a frequency is physically measurable:
$$
u(x_0) \;=\; \frac{2}{\pi}\,\mathrm{P}\!\int_{0}^{\infty}\frac{x\,v(x)}{x^2-x_0^2}\,dx ,
\qquad
v(x_0) \;=\; -\frac{2 x_0}{\pi}\,\mathrm{P}\!\int_{0}^{\infty}\frac{u(x)}{x^2-x_0^2}\,dx .
$$
For the complex index of refraction these are the **Kramers-Kronig relations**. Since $n^2$ tends to $1$ rather than to $0$ at large frequency, the decay hypothesis is met not by $n^2$ but by $f = n^2-1$, and the relations then read (Arfken, Weber and Harris, Eqs. (12.126))
$$
\operatorname{Re}\big[n^2(\omega_0)-1\big] = \frac{2}{\pi}\,\mathrm{P}\!\int_0^\infty \frac{\omega\operatorname{Im}[n^2(\omega)-1]}{\omega^2-\omega_0^2}\,d\omega ,
\qquad
\operatorname{Im}\big[n^2(\omega_0)-1\big] = -\frac{2}{\pi}\,\mathrm{P}\!\int_0^\infty\frac{\omega_0 \operatorname{Re}[n^2(\omega)-1]}{\omega^2-\omega_0^2}\,d\omega .
$$
Knowing the absorption at all frequencies therefore fixes the refraction at every frequency, and conversely.
:::

:::proof{provenance=adapted src="arfken-2013:§12.8, Eqs. (12.121)-(12.123), p. 593"}
Split the first dispersion relation at the origin and reverse the sign of the variable on the negative half:
$$
\pi\,u(x_0) = \mathrm{P}\!\int_{-\infty}^{0}\frac{v(x)}{x-x_0}\,dx + \mathrm{P}\!\int_0^\infty\frac{v(x)}{x-x_0}\,dx
= \mathrm{P}\!\int_0^\infty\frac{v(-x)}{-x-x_0}\,dx + \mathrm{P}\!\int_0^\infty\frac{v(x)}{x-x_0}\,dx .
$$
By the crossing condition $v$ is odd, so $v(-x)/(-x-x_0) = -v(x)/(-(x+x_0)) = v(x)/(x+x_0)$, and the two integrals combine:
$$
\pi\,u(x_0) = \mathrm{P}\!\int_0^\infty v(x)\left[\frac{1}{x+x_0}+\frac{1}{x-x_0}\right]dx
= \mathrm{P}\!\int_0^\infty v(x)\,\frac{2x}{x^2-x_0^2}\,dx ,
$$
which is the first formula. For the second, the same splitting applied to $v(x_0) = -\frac1\pi\mathrm{P}\!\int u/(x-x_0)$ with $u$ *even* gives $u(-x)/(-x-x_0) = -u(x)/(x+x_0)$, so the bracket is $1/(x-x_0)-1/(x+x_0) = 2x_0/(x^2-x_0^2)$ and the sign in front is retained. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="arfken-2013:§12.8, pp. 591-594; hassani-2013:§12.3.2, Eq. (12.7), p. 377; reed-simon-1980:§V.6C, p. 156"}
- **Analyticity in the whole open upper half-plane** is what Step 1 of the proof needs; it is the mathematical content of causality. A pole of $\tilde\chi$ at $\omega_p$ with $\operatorname{Im}\omega_p>0$ would, through the inverse transform, contribute $e^{-i\omega_p t}$ to $\chi(t)$, whose modulus is $e^{+t\operatorname{Im}\omega_p}$: a response growing without bound, and present before the forcing. Instability and acausality are the same defect seen from two sides.
- **The decay hypothesis** is used only in Step 2, and only to kill the large arc. It is the hypothesis that fails most often in practice, and there are two standard repairs. *Subtract a constant*: Arfken, Weber and Harris apply the relations to $n^2-1$ rather than $n^2$ because $n^2 \to 1$ (p. 594). *Subtract at a point*: Hassani's **dispersion relation with one subtraction** inserts an extra power of the variable in the denominator; for $\operatorname{Im}f$ odd it gives (his Eq. (12.7))
  $$
  \operatorname{Re}f(x_0) = \operatorname{Re}f(0) + \frac{2x_0^2}{\pi}\,\mathrm{P}\!\int_0^\infty \frac{\operatorname{Im}f(x)}{x\,(x^2-x_0^2)}\,dx ,
  $$
  which converges under weaker decay at the price of needing one measured value, $\operatorname{Re}f(0)$. In scattering theory subtractions are routine; Reed and Simon say explicitly that the unsubtracted relation assumes the amplitude tends to zero, which "in general is false", and that one then modifies the argument by making subtractions (p. 156).
- **Lipschitz continuity at $x_0$** is used in Steps 3 and 4. Without some regularity the symmetric deletion need not converge and the principal value need not exist, so the left-hand side of statement 1 would be meaningless. It is supplied automatically by claim 4 of the causality statement whenever $\int_0^\infty\tau\lvert\chi(\tau)\rvert\,d\tau<\infty$.
- **The principal value cannot be dropped.** The kernel $1/(x-x_0)$ is not integrable at $x_0$; what converges is the symmetric deletion, and the $-i\pi f(x_0)$ of Step 3 is precisely the piece that the symmetric deletion leaves behind. Choosing instead to pass *below* $x_0$ changes the indentation to $+i\pi f(x_0)$ and adds a full residue to the closed-contour relation, exactly as in :ref[]{to=complex.principal-value-integrals}; the principal value itself is the same either way.
- **The crossing condition is an extra assumption, not a consequence.** It holds when $\chi$ is real-valued, which it is for a real response to a real forcing, and it is what allows negative frequencies -- physically inaccessible -- to be eliminated. A complex-valued kernel (a circularly polarised response, for instance) satisfies the full-line relations but not the folded ones.
- **A caution about the converse.** Analyticity in the upper half-plane plus the decay of claim 3 is sufficient for the relations, but the relations do not by themselves identify a causal kernel: statement 2 is satisfied by $f\equiv0$, and more generally two functions with the same $v$ differ by a function with $v\equiv0$, which under the hypotheses must vanish. It is the hypotheses, not the integral identities, that carry the information.
:::

:::remark[The same argument across a cut]{provenance=adapted src="hassani-2013:§12.3.2, pp. 376-377 and Theorem 12.3.6, pp. 375-376; reed-simon-1980:§V.6C, pp. 156-157"}
There is a second route to a dispersion relation which does not use a half-plane at all, and it is the form in which scattering theory meets the subject. Suppose $f$ is analytic on the whole plane except for a cut along the real axis from $x_0$ to $+\infty$, and real on the real axis to the left of the cut. The **Schwarz reflection principle** (:ref[]{to=complex.analytic-continuation}; Hassani, Theorem 12.3.6) then gives $f(z^*) = f^*(z)$, so the jump across the cut is purely imaginary:
$$
f(x+i\epsilon) - f(x-i\epsilon) = 2i\operatorname{Im}f(x+i\epsilon) .
$$
Cauchy's formula on a contour that runs along both lips of the cut and closes with a large circle -- which again contributes nothing if $f$ decays -- collapses to a single integral over the cut, and Hassani obtains
$$
f(z) = \frac{1}{\pi}\int_{x_0}^{\infty}\frac{\operatorname{Im}f(x+i\epsilon)}{x-z}\,dx ,
$$
valid for every $z$ off the cut: the function everywhere is determined by its imaginary part on the upper lip. Reed and Simon run exactly this argument for the forward scattering amplitude $A(s,0)$, which for a wide class of potentials arises as the limit from above of a function analytic off the cut in the $s$-plane; the jump $D = \operatorname{Im}A(s+i0,0)$ is called the **discontinuity**, the resulting formula is their dispersion relation (V.7a), and iterating the construction in the momentum-transfer variable produces the Mandelstam representation. They are careful to say that the relation is *proved* only for restricted classes of potentials, sums of Yukawa potentials among them (pp. 156-157).

The half-plane form and the cut form are the same theorem in different coordinates: the cut is where the function is not real, hence where $\operatorname{Im}f$ lives, and it plays the role the real axis plays above.
:::

:::method[Getting a dispersion relation for a given response]{provenance=original}
1. **Fix the convention.** Write the time factor and the transform kernel explicitly, as in the definition block. Everything below depends on which half-plane carries the analyticity.
2. **Check causality and integrability.** Identify the kernel $\chi(\tau)$ and verify $\chi(\tau)=0$ for $\tau<0$ and $\int_0^\infty(1+\tau)\lvert\chi(\tau)\rvert\,d\tau<\infty$. If the kernel is not known explicitly, verify instead that $\tilde\chi$ is analytic in the open upper half-plane -- for a rational $\tilde\chi$, this is the statement that every pole has negative imaginary part.
3. **Check the decay.** Examine $\tilde\chi(\omega)$ as $\lvert\omega\rvert\to\infty$ with $\operatorname{Im}\omega\ge0$. If it tends to a non-zero constant $c$, apply everything to $\tilde\chi - c$; if it does not tend to a limit at all, use the subtracted relation and be prepared to supply one measured value.
4. **Check the symmetry.** If the kernel is real-valued, $\tilde\chi(-\omega) = \tilde\chi^*(\omega)$ for real $\omega$, so the real part is even, the imaginary part is odd, and the folded half-line relations apply. Otherwise stay on the full line.
5. **Write the relation** and, before trusting it, **test it at one frequency**: evaluate the principal-value integral numerically (split the interval symmetrically about the singular point, so that the two halves cancel) and compare with the closed-form value of the other part. A sign error in the convention shows up immediately as an answer of the wrong sign.
6. **Extract a sum rule.** Expand the relation for $x_0\to\infty$. The leading term of $u(x_0)$ at large $x_0$ equals $-x_0^{-2}\cdot\frac{2}{\pi}\int_0^\infty x\,v(x)\,dx$, so the large-frequency behaviour of the dispersive part, which is usually known from first principles, fixes a weighted integral of the absorptive part. These are the quantum-mechanical sum rules that Arfken, Weber and Harris mention at Eq. (12.123).
:::

:::example{provenance=original}
**The damped oscillator, checked numerically.** Take a unit mass on a spring with linear damping, driven by a force $F$:
$$
\ddot x + \gamma\dot x + \omega_0^2 x = F(t), \qquad \gamma>0 .
$$
The response is $x = \chi * F$ with $\chi$ the causal Green function of the operator (:ref[]{to=green.causal-green-functions}), and transforming with $e^{i\omega t}$,
$$
\tilde\chi(\omega) = \frac{1}{\omega_0^2-\omega^2-i\gamma\omega} .
$$
Work with $\omega_0 = 1$ and $\gamma = 2/5$, in units where $\omega_0=1$.

**Step 1: the kernel, and causality.** Let $\omega_1 = \sqrt{\omega_0^2-\gamma^2/4} = \sqrt{0.96} = 0.9797958\ldots$ The kernel is
$$
\chi(\tau) = \frac{e^{-\gamma\tau/2}}{\omega_1}\sin(\omega_1\tau)\quad (\tau>0), \qquad \chi(\tau)=0\quad(\tau<0) ,
$$
and a direct integration confirms the transform:
$$
\int_0^\infty \frac{e^{-\gamma\tau/2}\sin(\omega_1\tau)}{\omega_1}\,e^{i\omega\tau}\,d\tau
= \frac{1}{(\gamma/2 - i\omega)^2+\omega_1^2}
= \frac{1}{\omega_0^2-\omega^2-i\gamma\omega} ,
$$
the last step because $\gamma^2/4 + \omega_1^2 = \omega_0^2$. Both $\int_0^\infty\lvert\chi\rvert$ and $\int_0^\infty\tau\lvert\chi\rvert$ are finite because of the factor $e^{-\gamma\tau/2}$, so all four claims of the causality statement hold.

**Step 2: analyticity and decay.** The denominator vanishes where $\omega^2+i\gamma\omega-\omega_0^2=0$, that is at
$$
\omega = \pm\omega_1 - \tfrac{i\gamma}{2} = \pm 0.9797958\ldots - 0.2\,i ,
$$
both strictly in the **lower** half-plane, so $\tilde\chi$ is analytic on $\operatorname{Im}\omega\ge0$. And $\tilde\chi(\omega) \sim -1/\omega^2$, so the decay hypothesis holds comfortably.

**Step 3: symmetry.** For real $\omega$, $\tilde\chi(-\omega) = (\omega_0^2-\omega^2+i\gamma\omega)^{-1} = \tilde\chi^*(\omega)$: the crossing condition. So with
$$
u(\omega) = \frac{\omega_0^2-\omega^2}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2},
\qquad
v(\omega) = \frac{\gamma\omega}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2} ,
$$
$u$ is even, $v$ is odd, and the folded relations apply.

**Step 4: the test.** Evaluate at $\omega_0' = 1/2$. The denominator is $(1-\tfrac14)^2+\tfrac{4}{25}\cdot\tfrac14 = \tfrac{9}{16}+\tfrac{1}{25} = \tfrac{241}{400}$, so exactly
$$
u(\tfrac12) = \frac{3/4}{241/400} = \frac{300}{241} = 1.2448132780\ldots,
\qquad
v(\tfrac12) = \frac{1/5}{241/400} = \frac{80}{241} = 0.3319502075\ldots
$$
Now compute the right-hand side of the first Kramers-Kronig formula numerically, splitting the integral symmetrically about $\omega=\tfrac12$ so that the two sides of the pole cancel:
$$
\frac{2}{\pi}\,\mathrm{P}\!\int_0^\infty\frac{\omega\,v(\omega)}{\omega^2-\tfrac14}\,d\omega = 1.24481327806\ldots
$$
against the exact $300/241 = 1.24481327801\ldots$: agreement to ten digits, the residue being the quadrature error. The second formula, tested the same way, gives
$$
-\frac{2\cdot\tfrac12}{\pi}\,\mathrm{P}\!\int_0^\infty\frac{u(\omega)}{\omega^2-\tfrac14}\,d\omega = 0.33195020728\ldots
$$
against the exact $80/241 = 0.33195020747\ldots$, agreeing to nine digits.

**Step 5: the sum rule.** At large $\omega_0'$, $u(\omega_0')\to-1/\omega_0'^2$ while the folded relation gives $u(\omega_0')\to -\omega_0'^{-2}\cdot\frac{2}{\pi}\int_0^\infty \omega\,v(\omega)\,d\omega$. Hence
$$
\frac{2}{\pi}\int_0^\infty \omega\,v(\omega)\,d\omega = 1 ,
$$
the oscillator-strength sum rule, with the $1$ on the right being $1/m$ for unit mass. Numerical integration of the left-hand side gives $1.0000000000$, and the value is independent of $\gamma$ and of $\omega_0$ -- damping redistributes absorption in frequency but cannot change its total weight. (The identity is also checked exactly by residues: $\omega v(\omega)$ is even, so the integral is half of $\int_{-\infty}^\infty \omega\operatorname{Im}\tilde\chi\,d\omega$, and closing in the upper half-plane picks up nothing while the $1/\omega^2$ tail supplies the value.)

**Step 6: what the numbers mean.** At $\omega = \tfrac12$, below resonance, $u>0$: the mass moves in phase with the force, as a spring-dominated oscillator must. Above resonance $u$ changes sign ($u(2) = -3/(9+\tfrac{16}{25}) = -75/241 < 0$, mass-dominated, out of phase), and the sign change is tied by the dispersion relation to the peak of $v$ near $\omega=\omega_0$. This is the mechanical original of anomalous dispersion: refraction turns over exactly where absorption is strongest.

(All numbers above were computed in $25$-digit arithmetic and agree with the exact rational values $300/241$, $80/241$ and $1$ to the digits shown.)
:::

:::application{provenance=original}
- **Optics: absorption determines refraction.** This is where the subject began. The real and imaginary parts of the index of refraction are the phase velocity and the attenuation; the Kramers-Kronig pair says that measuring the absorption spectrum of a medium at all frequencies determines its refractive index at every frequency, with no model of the medium. Arfken, Weber and Harris derive the complex index from Maxwell's equations with a finite conductivity and show that it is precisely the conductivity -- the absorption -- that makes $n$ complex (pp. 594-595). Their Parseval identity $\int\lvert u\rvert^2 = \int\lvert v\rvert^2$ (p. 595) makes the trade exact: a medium with any refraction at all must absorb somewhere, and conversely. Hassani closes the loop with the optical theorem, which ties $\operatorname{Im}f$ to the total cross-section, and so recovers the original Kramers-Kronig formula for the real part of the forward amplitude in terms of $\sigma_{\text{tot}}$ (p. 378).
- **Measurement in practice.** Ellipsometry, reflectivity and electron energy-loss spectroscopy all measure one part of a response over a finite window and reconstruct the other by a numerically evaluated principal-value integral. Because the relation is global, the unmeasured tails must be modelled, and the sum rule of the worked example is the standard consistency check on the result.
- **Circuits and control.** The same theorem for the transfer function of a stable linear system is the Bode gain-phase relation: the phase at one frequency is an integral of the slope of the log-gain over all frequencies. It is the reason a sharp roll-off costs phase margin, and so the reason causality limits how aggressively a feedback loop can be shaped.
- **Scattering and many-body physics.** The forward amplitude, the dielectric function, the conductivity and the single-particle Green function all satisfy relations of this type; the absorptive part is a measurable rate and the dispersive part a measurable shift, and the relation between them is often the only exact statement available. Reed and Simon's bootstrap discussion (pp. 156-157) is one instance of the programme of constraining an unknown amplitude by analyticity alone.
- **Magnetic resonance and acoustics.** The absorption and dispersion lineshapes of nuclear magnetic resonance are a Hilbert-transform pair, which is why a spectrometer can record either and compute the other; attenuation and sound speed in a viscous or relaxing medium are related the same way.
:::
