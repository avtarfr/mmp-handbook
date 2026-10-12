---
id: complex.principal-value-integrals
title: Principal values and indented contours
kind: method
level: core
summary: A simple pole on the path of integration is handled by deleting a symmetric interval around it, which defines the Cauchy principal value; indenting the contour by a small semicircle contributes exactly half a residue, so the principal value equals $2\pi i$ times the residues in the half-plane plus $i\pi$ times those on the axis.
prereqs: [complex.infinite-integrals, complex.residue-theorem, complex.contour-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§11.7, Cauchy Principal Value, Eqs. (11.69)-(11.71) and Example 11.7.2, pp. 512-514; the semicircle contributions (11.75)-(11.76) and the contour identities (11.77)-(11.78), pp. 514-515"
    pages: "512-515"
    role: definition of the principal value and why the two-sided limit fails; the half-residue contribution of a small semicircle and the fact that going above or below gives the same principal value
  - work: hassani-2013
    loc: "§11.3.5, Principal Value of an Integral, Eq. (11.10) and the indented contours $C_u$, $C_d$, pp. 354-355"
    pages: "354-355"
    role: the indentation identity in the form $\\int_{C_u} = \\mathrm{P}\\!\\int - i\\pi f(x_0)$, and the uniqueness of the principal value
  - work: rhb-2006
    loc: "§24.13.2, indented contours, Fig. 24.15, the contribution $-i\\pi a_{-1}$ of the indentation (24.69), and the worked principal value of $\\int \\cos mx\\,dx/(x-a)$, pp. 863-865"
    pages: "863-865"
    role: the indented contour and the sign of the semicircular contribution; the worked combination of indentation with Jordan's lemma
  - work: ahlfors-1979
    loc: "Ch. 4, §5.3, case 3, the indented path of Fig. 4-12 and the general formula for simple poles on the real axis, pp. 157-158"
    pages: "157-158"
    role: the general statement $\\mathrm{P}\\!\\int R(x)e^{ix}dx = 2\\pi i\\sum_{y>0}\\mathrm{Res} + i\\pi\\sum_{y=0}\\mathrm{Res}$, with the hypotheses that the real poles be simple and $R(\\infty)=0$
---

:::note{provenance=original}
**What it means.** A simple pole sitting on the path of integration makes the integral divergent, but the divergence is one-sided: the integrand runs to $+\infty$ on one side and to $-\infty$ on the other. Deleting a *symmetric* interval around the pole and then shrinking it lets the two infinities cancel, and what is left is the Cauchy principal value -- a finite number that the divergent integral does not have, but which is what physics almost always wants. In the complex plane the same symmetric deletion appears as a small semicircle, which contributes exactly half of what a full circle would. Hence the working rule: poles inside the contour count once, poles on it count a half.
:::

:::definition[Cauchy principal value]{provenance=adapted src="arfken-2013:§11.7, Eqs. (11.69)-(11.71), pp. 512-513"}
Let $f$ be integrable on every closed subinterval of $[a,b]$ not containing the point $x_0 \in (a,b)$. The **Cauchy principal value** of $\int_a^b f$ is

$$
\mathrm{P}\!\int_a^b f(x)\, dx \;=\; \lim_{\delta \to 0^{+}}\left[ \int_a^{x_0-\delta} f(x)\, dx \;+\; \int_{x_0+\delta}^{b} f(x)\,dx \right] ,
$$

when the limit exists. With several interior singularities, one $\delta$ is deleted symmetrically about each and the limit taken as all of them shrink. With an infinite limit of integration the deletion convention is extended in the same spirit: $\mathrm{P}\!\int_{-\infty}^{\infty}$ means the **symmetric** limit $\lim_{X\to\infty}\mathrm{P}\!\int_{-X}^{X}$, so that a divergence at $+\infty$ may cancel one at $-\infty$ exactly as the two sides of a pole cancel. (Where the integral also converges with the two ends taken independently -- as statement 2 below delivers for a Fourier-type integrand -- the symmetric limit agrees with it; where it does not, the symmetric limit is what the contour method computes and the notation means.) It is also written $\operatorname{p.v.}\int$ or with a bar through the integral sign.

**It is not the integral.** Arfken's example is $\int_{-a}^{b}dx/x$ with $a,b>0$. The symmetric deletion gives $(\ln\delta - \ln a) + (\ln b - \ln\delta) = \ln(b/a)$, independent of $\delta$. But if the two cut-offs are allowed to shrink independently, $\delta_1$ on the left and $\delta_2 = 2\delta_1$ on the right, the same computation gives $\ln(b/a) - \ln 2$: a different answer. The improper integral therefore has no value, and the notation presumes the location of the singularity is known.
:::

:::statement[Contribution of a small indentation]{provenance=adapted src="arfken-2013:§11.7, Eqs. (11.75)-(11.76), p. 514; rhb-2006:§24.13.2, Eq. (24.69), p. 864"}
Let $f$ have a simple pole at $x_0$ with residue $a_{-1}$, so $f(z) = a_{-1}/(z-x_0) + g(z)$ with $g$ analytic at $x_0$. For $\delta > 0$ let

- $C_\delta^{\uparrow}$ be the semicircular arc $\lvert z - x_0\rvert = \delta$ running from $x_0-\delta$ to $x_0+\delta$ through $x_0+i\delta$ (so passing **above** the pole, traversed clockwise);
- $C_\delta^{\downarrow}$ be the arc from $x_0-\delta$ to $x_0+\delta$ through $x_0-i\delta$ (passing **below** the pole, traversed counterclockwise).

Then

$$
\lim_{\delta\to0^{+}}\int_{C_\delta^{\uparrow}} f(z)\, dz \;=\; -\,i\pi\, a_{-1} ,
\qquad
\lim_{\delta\to0^{+}}\int_{C_\delta^{\downarrow}} f(z)\, dz \;=\; +\,i\pi\, a_{-1} .
$$

Each is half, in magnitude, of the $2\pi i\,a_{-1}$ that a full circuit would give, with the sign of the direction of travel; the two differ by exactly $2\pi i a_{-1}$.
:::

:::statement[Indented contour and principal value]{provenance=adapted src="hassani-2013:§11.3.5, Eq. (11.10), p. 355; ahlfors-1979:Ch. 4, §5.3, case 3, p. 158; arfken-2013:§11.7, Eqs. (11.77)-(11.78), p. 515"}
1. **The indentation identity.** Let $f$ be analytic on a neighbourhood of the real axis except for a simple pole at $x_0$, and let $C_u$ be the real axis from $-\infty$ to $\infty$ with the pole bypassed above by $C_\delta^{\uparrow}$, $C_d$ the same with the pole bypassed below. Then, when the principal value exists,

   $$
   \int_{C_u} f(z)\, dz \;=\; \mathrm{P}\!\int_{-\infty}^{\infty} f(x)\, dx \;-\; i\pi \operatorname*{Res}_{z=x_0} f ,
   \qquad
   \int_{C_d} f(z)\, dz \;=\; \mathrm{P}\!\int_{-\infty}^{\infty} f(x)\, dx \;+\; i\pi \operatorname*{Res}_{z=x_0} f .
   $$

   The two closed-contour calculations differ by $2\pi i\operatorname{Res}_{x_0} f$, which is exactly the residue that one encloses and the other does not: Arfken's point (p. 515) that for the purpose of computing the principal value it makes no difference which way one passes the pole, even though the contour integrals themselves differ.

2. **The evaluation rule.** Let $f$ be analytic in the closed upper half-plane except for finitely many isolated singularities with $\operatorname{Im}z>0$ and finitely many **simple** poles on the real axis, and suppose the large semicircle contributes nothing (by the arc lemma, or by Jordan's lemma if a factor $e^{iaz}$ with $a>0$ is present; see :ref[]{to=complex.infinite-integrals}). Then

   $$
   \mathrm{P}\!\int_{-\infty}^{\infty} f(x)\, dx \;=\; 2\pi i\!\!\sum_{\operatorname{Im}z_j>0}\!\!\operatorname*{Res}_{z=z_j} f \;+\; i\pi\!\!\sum_{\operatorname{Im}z_j = 0}\!\!\operatorname*{Res}_{z=z_j} f .
   $$

   Ahlfors states this for $f = R(z)e^{iz}$ with $R$ rational, and stresses two hypotheses: every real pole must be **simple**, and $R(\infty) = 0$. In words: a pole on the contour is counted with weight one half, as though half of it lay inside.
:::

:::statement[Sokhotski-Plemelj formula]{provenance=original}
Let $x_0 \in \mathbb{R}$ and let $f : \mathbb{R}\to\mathbb{C}$ be bounded and continuous, Lipschitz on a neighbourhood of $x_0$, with $\int_{\mathbb{R}}\lvert f(x)\rvert/(1+\lvert x\rvert)\, dx < \infty$. Then

$$
\lim_{\varepsilon\to0^{+}} \int_{-\infty}^{\infty}\frac{f(x)}{x - x_0 \mp i\varepsilon}\, dx
\;=\; \mathrm{P}\!\int_{-\infty}^{\infty}\frac{f(x)}{x-x_0}\, dx \;\pm\; i\pi\, f(x_0) .
$$

In the notation of distributions this is written

$$
\frac{1}{x - x_0 \mp i\varepsilon} \;\longrightarrow\; \mathrm{P}\,\frac{1}{x-x_0} \;\pm\; i\pi\,\delta(x - x_0)
\qquad (\varepsilon\to0^{+}) ,
$$

an identity used constantly in physics to separate the real (dispersive) from the imaginary (absorptive) part of a response.
:::

:::idea{provenance=original}
Everything follows from one computation. On a small circle about a simple pole, the singular term $a_{-1}/(z-x_0)$ contributes $a_{-1}\,i\,\Delta\theta$ where $\Delta\theta$ is the angle swept -- the modulus $\delta$ cancels between $dz = i\delta e^{i\theta}d\theta$ and the denominator $\delta e^{i\theta}$ -- while the analytic remainder contributes $O(\delta)$ and dies. A half-circle sweeps $\pi$, hence half a residue; a full circle sweeps $2\pi$. That single fact gives the indentation statement, and the evaluation rule is then the residue theorem applied to the indented closed contour.

The Sokhotski-Plemelj formula is the same half-residue seen in a different limit. Separating

$$
\frac{1}{x-x_0\mp i\varepsilon} \;=\; \frac{x-x_0}{(x-x_0)^2+\varepsilon^2} \;\pm\; \frac{i\varepsilon}{(x-x_0)^2+\varepsilon^2}
$$

displays the two terms of the answer: the first is an odd kernel that converges to the principal value because the oddness performs the symmetric cancellation automatically, and the second is a Lorentzian of unit area and shrinking width, i.e. an approximation to $\pi\delta$.
:::

:::proof{provenance=adapted src="arfken-2013:§11.7, pp. 514-515; hassani-2013:§11.3.5, p. 355"}
**The indentation.** Write $f(z) = a_{-1}/(z-x_0) + g(z)$ with $g$ analytic, hence bounded by some $M$, on a disc about $x_0$. Parametrise $C_\delta^{\uparrow}$ by $z = x_0 + \delta e^{i\theta}$ with $\theta$ running from $\pi$ down to $0$; then $dz = i\delta e^{i\theta}d\theta$ and

$$
\int_{C_\delta^{\uparrow}} \frac{a_{-1}}{z-x_0}\, dz
\;=\; \int_{\pi}^{0} \frac{a_{-1}}{\delta e^{i\theta}}\, i\delta e^{i\theta}\, d\theta
\;=\; i\,a_{-1}\int_{\pi}^{0} d\theta \;=\; -\,i\pi\, a_{-1} ,
$$

exactly, for every $\delta$. The remainder obeys $\bigl\lvert\int_{C_\delta^{\uparrow}} g\bigr\rvert \le \pi\delta\,M \to 0$ by the $ML$ estimate (:ref[]{to=complex.contour-integrals}). For $C_\delta^{\downarrow}$ the angle runs from $\pi$ up to $2\pi$, giving $+i\pi a_{-1}$. Note what made the modulus drop out: the pole is **simple**.

*What happens at a higher-order pole.* The same parametrisation applied to a single term $a_{-m}(z-x_0)^{-m}$ with $m \ge 2$ gives, exactly,

$$
\int_{C_\delta^{\uparrow}} \frac{a_{-m}}{(z-x_0)^{m}}\,dz
\;=\; i\,a_{-m}\,\delta^{1-m}\int_{\pi}^{0} e^{i(1-m)\theta}\,d\theta
\;=\; a_{-m}\,\delta^{1-m}\,\frac{1 - (-1)^{1-m}}{1-m} .
$$

The constant $\bigl(1-(-1)^{1-m}\bigr)/(1-m)$ **vanishes for every odd $m$** and equals $-2/(m-1)$ for every even $m$. So the odd terms of the principal part contribute nothing at all to the arc, however high their order, while each even term contributes $-2a_{-m}\delta^{1-m}/(m-1)$, which diverges as $\delta\to0^{+}$. (Checked symbolically for $m \le 7$: the arc integral of $(z-x_0)^{-m}$ is $0$ for $m = 3,5,7$ and $-2/\delta$, $-2/(3\delta^{3})$, $-2/(5\delta^{5})$ for $m=2,4,6$.) Hence the indentation has a finite limit exactly when $a_{-2} = a_{-4} = \cdots = 0$, and that limit is still $-i\pi a_{-1}$. Simplicity of the pole is the easy sufficient condition, not the exact one; the recipe's step 1 returns to this.

**Part 1 of the indentation statement.** $C_u$ consists of $(-\infty, x_0-\delta]$, the arc $C_\delta^{\uparrow}$, and $[x_0+\delta,\infty)$. Its integral is therefore the sum of the two straight pieces and the arc; letting $\delta\to0^+$, the straight pieces converge to the principal value by definition and the arc to $-i\pi a_{-1}$. Same for $C_d$ with $+i\pi a_{-1}$.

**Part 2, the evaluation rule.** Close $C_u$ with the large semicircle $\Gamma_R$ of :ref[]{to=complex.infinite-integrals}. For $R$ large and $\delta$ small, the resulting closed contour is positively oriented and encloses exactly the singularities with $\operatorname{Im}z>0$: the real pole has been excluded by indenting *above* it. By the residue theorem (:ref[]{to=complex.residue-theorem}),

$$
\int_{C_u^{(R,\delta)}} f\,dz \;+\; \int_{\Gamma_R} f\, dz \;=\; 2\pi i \sum_{\operatorname{Im}z_j>0}\operatorname*{Res}_{z=z_j} f .
$$

Letting $R\to\infty$ kills the arc by hypothesis, and letting $\delta\to0^+$ turns the first term into $\mathrm{P}\!\int f - i\pi\operatorname{Res}_{x_0}f$ by part 1. Rearranging gives the rule, extended to several real poles by indenting at each. Indenting *below* instead encloses the real pole as well, adding $2\pi i \operatorname{Res}_{x_0}f$ to the right-hand side and $+i\pi\operatorname{Res}_{x_0}f$ to the left; the two statements are equivalent, since $2\pi i a_{-1} - i\pi a_{-1} = i\pi a_{-1}$. $\square$
:::

:::proof[Sokhotski-Plemelj]{provenance=original}
Shift so that $x_0 = 0$ and write $g(u) = f(x_0+u)$. Rationalising the denominator,

$$
\frac{1}{u \mp i\varepsilon} \;=\; \frac{u \pm i\varepsilon}{u^{2}+\varepsilon^{2}}
\;=\; \underbrace{\frac{u}{u^{2}+\varepsilon^{2}}}_{K_\varepsilon(u)} \;\pm\; i\underbrace{\frac{\varepsilon}{u^{2}+\varepsilon^{2}}}_{L_\varepsilon(u)} .
$$

**The $L_\varepsilon$ term gives $\pi f(x_0)$.** Substituting $u = \varepsilon t$,

$$
\int_{-\infty}^{\infty} L_\varepsilon(u)\, g(u)\, du \;=\; \int_{-\infty}^{\infty}\frac{g(\varepsilon t)}{1+t^{2}}\, dt .
$$

The integrand is dominated by $\lVert g\rVert_\infty/(1+t^2)$, which is integrable, and converges pointwise to $g(0)/(1+t^2)$ by continuity of $g$ at $0$. By dominated convergence the limit is $g(0)\int dt/(1+t^2) = \pi g(0) = \pi f(x_0)$.

**The $K_\varepsilon$ term gives the principal value.** Fix $\delta>0$ small enough that $g$ is Lipschitz with constant $L$ on $[-\delta,\delta]$. Split the integral at $\lvert u\rvert = \delta$.

*Outside.* For $\lvert u\rvert \ge \delta$,

$$
\left\lvert K_\varepsilon(u) - \frac1u \right\rvert \;=\; \frac{\varepsilon^{2}}{\lvert u\rvert\,(u^{2}+\varepsilon^{2})} \;\le\; \frac{\varepsilon^{2}}{\delta^{3}} ,
$$

and also $\lvert K_\varepsilon(u)\rvert \le 1/\lvert u\rvert$. Hence

$$
\left\lvert \int_{\lvert u\rvert\ge\delta}\bigl(K_\varepsilon(u) - u^{-1}\bigr) g(u)\, du\right\rvert
\;\le\; \int_{\delta \le \lvert u\rvert \le 1/\varepsilon} \frac{\varepsilon^{2}}{\delta^{3}}\lvert g\rvert \, du
\;+\; 2\int_{\lvert u\rvert > 1/\varepsilon}\frac{\lvert g(u)\rvert}{\lvert u\rvert}\, du .
$$

The first term is at most $\varepsilon^{2}\delta^{-3}\cdot 2\varepsilon^{-1}\lVert g\rVert_\infty = 2\varepsilon\lVert g\rVert_\infty/\delta^{3} \to 0$; the second tends to $0$ because $\int \lvert g(u)\rvert/(1+\lvert u\rvert)\,du<\infty$ makes the tail integrable. So the outside part converges to $\int_{\lvert u\rvert\ge\delta} g(u)\,du/u$.

*Inside.* Both $K_\varepsilon$ and $1/u$ are odd, so $\int_{-\delta}^{\delta}K_\varepsilon(u)\,du = 0$ and the principal value of $\int_{-\delta}^\delta du/u$ is $0$. Subtracting the constant $g(0)$ therefore costs nothing:

$$
\int_{-\delta}^{\delta} K_\varepsilon(u) g(u)\, du \;=\; \int_{-\delta}^{\delta} K_\varepsilon(u)\bigl(g(u)-g(0)\bigr)\, du ,
$$

and since $\lvert g(u)-g(0)\rvert \le L\lvert u\rvert$ and $\lvert K_\varepsilon(u)\rvert \le 1/\lvert u \rvert$, the integrand is bounded by $L$ and the whole inside part is at most $2L\delta$ in modulus, **uniformly in $\varepsilon$**. The same bound holds for $\mathrm{P}\!\int_{-\delta}^{\delta}g(u)\,du/u$.

*Combine.* For every $\delta$,

$$
\limsup_{\varepsilon\to0^{+}}\left\lvert \int K_\varepsilon g \;-\; \mathrm{P}\!\int \frac{g(u)}{u}\, du\right\rvert \;\le\; 4L\delta ,
$$

and $\delta$ was arbitrary, so the limit is the principal value. Adding $\pm i\pi f(x_0)$ from the other term completes the proof. $\square$
:::

:::method[Recipe]{provenance=adapted src="rhb-2006:§24.13.2, pp. 863-865; ahlfors-1979:Ch. 4, §5.3, case 3, p. 158"}
1. **Confirm the real pole is simple.** That is the condition under which everything below is stated. If the order is $\ge 2$, the exact condition for both the principal value and the indentation to exist is that the *even*-index coefficients $a_{-2}, a_{-4}, \dots$ of the Laurent expansion at the real pole all vanish, as the proof shows; an odd-order pole with no even-index terms is therefore still tractable, and the rule of step 5 applies to it unchanged. Arfken, Weber and Harris set this case as Exercise 11.7.11 (p. 522).
2. **Decide what you are computing.** If the integral diverges, say so and state that you are computing its principal value. For $\int f\cos ax$ or $\int f\sin ax$ with a pole at a zero of the trigonometric factor, the integral may converge outright and no principal value is needed.
3. **Replace $\cos$ or $\sin$ by $e^{iax}$ before closing the contour**, as always (:ref[]{to=complex.infinite-integrals}).
4. **Indent above each real pole** and close with a large semicircle in the upper half-plane. Verify that the large arc vanishes.
5. **Apply the rule:** $\mathrm{P}\!\int = 2\pi i\sum(\text{residues with }\operatorname{Im}z>0) + i\pi\sum(\text{residues on the axis})$.
6. **Take the real or imaginary part** as required, and check reality and sign. For a numerical check, evaluate $T(\delta) = \int_{-\infty}^{x_0-\delta}+\int_{x_0+\delta}^{\infty}$ at a small $\delta$. Writing $f = a_{-1}/(x-x_0) + g$ with $g$ regular at $x_0$, the deleted piece contributes nothing from the singular term (it is odd) and $2\delta\,g(x_0) + O(\delta^{3})$ from $g$, so
   $$
   T(\delta) \;=\; \mathrm{P}\!\int f \;-\; 2\delta\,g(x_0) \;+\; O(\delta^{3}) ,
   $$
   a prediction one can compare with the observed discrepancy.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Symmetric deletion is the definition, and it matters.** Arfken's $\int_{-a}^{b}dx/x$ shows that letting the two cut-offs shrink at different rates changes the answer by $\ln(\delta_2/\delta_1)$. The principal value is a *choice*, justified in applications by the physics (a symmetric regularisation of a resonant denominator) and not by the integral itself.
- **Simplicity of the real pole is sufficient in both places, and in neither is it the exact condition.** In the arc computation simplicity is what makes the two powers of $\delta$ cancel and leaves the clean $-i\pi a_{-1}$. In the definition it is what makes the two one-sided divergences logarithmic and of opposite sign. But the precise condition is the same in both: the symmetric deletion of $\int a_{-m}(x-x_0)^{-m}dx$ gives $0$ for odd $m$, the integrand being odd, and diverges like $2a_{-m}\delta^{1-m}/(m-1)$ for even $m \ge 2$ -- matching term by term the arc computation in the proof. So a real pole of order $3$ with $a_{-2}=0$, say $f(x) = (x-x_0)^{-3} + g(x)$ with $g$ analytic, has a perfectly good principal value and obeys the rule of step 5 with the same $i\pi a_{-1}$; a pole of order $2$ does not. Simplicity is the condition worth checking in practice because it is immediate, not because it is necessary.
- **Above or below: the principal value does not care.** The two contour integrals differ by a full residue, but so do the two residue sums, and the principal value comes out the same. This is Arfken's remark after Eqs. (11.77)-(11.78).
- **The $\pm i\varepsilon$ prescription is a *choice of physics*, not of mathematics.** Sokhotski-Plemelj shows that the two prescriptions differ by $2\pi i f(x_0)$, a genuine difference: retarded versus advanced response, outgoing versus incoming waves, decaying versus growing modes. Which sign to use is fixed by causality or by boundary conditions, never by the integral.
- **Lipschitz at $x_0$, not merely continuous.** Without some modulus-of-continuity control at $x_0$ the principal value itself may fail to exist; the Lipschitz bound is what makes the inside contribution $O(\delta)$ uniformly in $\varepsilon$.
:::

:::example[A rational principal value]{provenance=original}
Evaluate

$$
I \;=\; \mathrm{P}\!\int_{-\infty}^{\infty}\frac{x\, dx}{(x^{2}+4)(x-1)} .
$$

**Step 1-2.** Put $f(z) = z/\bigl((z^{2}+4)(z-1)\bigr)$. Singularities: $z = \pm 2i$ (simple, off the axis) and $z = 1$ (simple, *on* the axis, with $1/(1+4) = 1/5 \neq 0$, so a genuine pole). The integral diverges; we compute its principal value.

**Step 4: decay.** $\lvert z f(z)\rvert \sim \lvert z\rvert^{-1} \to 0$, so the large semicircle vanishes by the arc lemma (:ref[]{to=complex.infinite-integrals}).

**Step 5: residues.** In the upper half-plane only $z = 2i$:

$$
\operatorname*{Res}_{z=2i} f \;=\; \frac{2i}{(2i+2i)(2i-1)} \;=\; \frac{2i}{4i\,(2i-1)} \;=\; \frac{1}{2(2i-1)} \;=\; \frac{-1-2i}{10} ,
$$

using $1/(2i-1) = (-1-2i)/5$ (multiply numerator and denominator by $-1-2i$, since $(2i-1)(-1-2i) = 5$). On the axis,

$$
\operatorname*{Res}_{z=1} f \;=\; \frac{1}{1^{2}+4} \;=\; \frac15 .
$$

**Assemble.**

$$
I \;=\; 2\pi i\cdot\frac{-1-2i}{10} \;+\; i\pi\cdot\frac15
\;=\; \frac{\pi i(-1-2i)}{5} + \frac{i\pi}{5}
\;=\; \frac{\pi}{5}\bigl(-i + 2\bigr) + \frac{i\pi}{5}
\;=\; \frac{2\pi}{5} .
$$

The imaginary parts cancel, as they must for a real integrand -- a built-in check that the half-residue was included with the right sign.

**Step 6: check.** $2\pi/5 = 1.2566371$. Deleting $(1-\delta, 1+\delta)$ with $\delta = 10^{-3}$ and integrating numerically gives $T(\delta) = 1.2563971$. To predict the discrepancy, split $f(x) = h(x)/(x-1)$ with $h(x) = x/(x^{2}+4)$; the regular part of $f$ at $x=1$ is $\bigl(h(x)-h(1)\bigr)/(x-1)$, whose value at $x=1$ is $h'(1)$. Since $h'(x) = (4-x^{2})/(x^{2}+4)^{2}$, we get $h'(1) = 3/25 = 0.12$, so step 6 of the recipe predicts $T(\delta) = 2\pi/5 - 2(0.001)(0.12) = 1.2566371 - 0.00024 = 1.2563971$ -- matching every digit computed.
:::

:::example[A Fourier-type principal value, and where the half-residue is the whole answer]{provenance=original}
Evaluate

$$
J \;=\; \mathrm{P}\!\int_{-\infty}^{\infty}\frac{\sin 3x}{x-2}\, dx .
$$

**Set up.** Take $f(z) = e^{3iz}/(z-2)$, whose only singularity is the simple pole at $z=2$ on the axis. Here $M(R) = 1/(R-2)\to0$, so Jordan's lemma applies with $a = 3 > 0$ (:ref[]{to=complex.infinite-integrals}) and the large upper semicircle vanishes. There are no singularities in the open upper half-plane at all, so

$$
\mathrm{P}\!\int_{-\infty}^{\infty}\frac{e^{3ix}}{x-2}\, dx \;=\; 0 \;+\; i\pi\operatorname*{Res}_{z=2}\frac{e^{3iz}}{z-2} \;=\; i\pi e^{6i} .
$$

The entire answer is the half-residue from the pole on the contour.

**Take parts.** With $e^{6i} = \cos 6 + i\sin 6$,

$$
i\pi e^{6i} \;=\; -\pi\sin 6 \;+\; i\pi\cos 6 ,
$$

so

$$
\mathrm{P}\!\int_{-\infty}^{\infty}\frac{\cos3x}{x-2}\,dx = -\pi\sin 6 ,
\qquad
J \;=\; \mathrm{P}\!\int_{-\infty}^{\infty}\frac{\sin3x}{x-2}\,dx \;=\; \pi\cos 6 .
$$

**Independent check by substitution.** Put $u = x-2$ and expand $\sin(3u+6) = \sin 3u\cos6 + \cos3u\sin6$:

$$
J \;=\; \cos 6\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{\sin 3u}{u}\,du \;+\; \sin 6\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{\cos3u}{u}\,du
\;=\; \cos6\cdot\pi \;+\; \sin6\cdot 0 \;=\; \pi\cos6 ,
$$

the first integral being the Dirichlet integral (which converges without a principal value, the singularity being removable) and the second vanishing by oddness. Numerically $\int_{-\infty}^{\infty}\sin 3u\,du/u = 3.1415927 = \pi$ and $\pi\cos6 = 3.0164639$, so $J = 3.0164639$. Note that $J$ itself converges slowly under naive truncation, because the integrand decays only like $1/x$; the substitution route is the reliable numerical check.
:::

:::example[The $\pm i\varepsilon$ prescription in action]{provenance=original}
Take $f(x) = 1/(1+x^{2})$ and $x_0 = 0$, and compare the two sides of the Sokhotski-Plemelj formula.

**Left-hand side in closed form.** For $0<\varepsilon<1$ let

$$
A(\varepsilon) \;=\; \int_{-\infty}^{\infty}\frac{dx}{(1+x^{2})(x - i\varepsilon)} .
$$

The integrand is $O(\lvert z\rvert^{-3})$, so the large semicircle vanishes and the upper half-plane encloses the two simple poles $z = i$ and $z = i\varepsilon$. Their residues are

$$
\operatorname*{Res}_{z=i} \;=\; \frac{1}{(z+i)(z-i\varepsilon)}\bigg|_{z=i} \;=\; \frac{1}{2i\cdot i(1-\varepsilon)} \;=\; \frac{-1}{2(1-\varepsilon)} ,
\qquad
\operatorname*{Res}_{z=i\varepsilon} \;=\; \frac{1}{1+(i\varepsilon)^{2}} \;=\; \frac{1}{1-\varepsilon^{2}} .
$$

Their sum is

$$
\frac{-1}{2(1-\varepsilon)} + \frac{1}{1-\varepsilon^{2}}
\;=\; \frac{-(1+\varepsilon) + 2}{2(1-\varepsilon^{2})}
\;=\; \frac{1-\varepsilon}{2(1-\varepsilon)(1+\varepsilon)}
\;=\; \frac{1}{2(1+\varepsilon)} ,
$$

so $A(\varepsilon) = 2\pi i\cdot\dfrac{1}{2(1+\varepsilon)} = \dfrac{i\pi}{1+\varepsilon}$.

**Right-hand side.** The principal value $\mathrm{P}\!\int dx/\bigl((1+x^2)x\bigr)$ vanishes, the integrand being odd; and $i\pi f(0) = i\pi$. So the formula predicts $A(\varepsilon) \to i\pi$, which the closed form $i\pi/(1+\varepsilon)$ confirms, with the approach linear in $\varepsilon$.

**Numerically**, direct quadrature of $A(\varepsilon)$ gives $2.8559933\,i$ at $\varepsilon = 0.1$, $3.1104878\,i$ at $\varepsilon = 0.01$ and $3.1384542\,i$ at $\varepsilon=0.001$, against $i\pi = 3.1415927\,i$; the closed form $\pi/(1+\varepsilon)$ gives $2.8559933$, $3.1104878$ and $3.1384542$ -- agreeing to all digits shown. Choosing $x - i\varepsilon \to x + i\varepsilon$ instead flips the sign to $-i\pi$, a difference of $2\pi i f(0)$, exactly as the formula says.
:::

:::application[Dispersion relations, propagators and resonant denominators]{provenance=original}
- **Kramers-Kronig relations.** For a causal response $\chi(\omega)$, Cauchy's formula applied to a contour along the real axis indented at $\omega$ gives
  $$
  \operatorname{Re}\chi(\omega) \;=\; \frac{1}{\pi}\,\mathrm{P}\!\int_{-\infty}^{\infty}\frac{\operatorname{Im}\chi(\omega')}{\omega'-\omega}\, d\omega' ,
  $$
  and the half-residue is exactly the term that separates the two parts. Every dispersion relation in optics, acoustics and particle physics has a principal value in it for this reason.
- **Propagators and the $i\varepsilon$ prescription.** The retarded Green's function of the wave equation, the Feynman propagator and the advanced propagator differ only in how the contour passes the poles at $\omega = \pm k$, that is, in the sign of $i\varepsilon$ in $1/(\omega^2-k^2\pm i\varepsilon)$. Sokhotski-Plemelj translates the prescription into a principal value plus a delta function, and the delta function is what carries the on-shell, energy-conserving part of the physics.
- **Fermi's golden rule.** Second-order perturbation theory produces $1/(E_i - E_f + i\varepsilon)$; applying Sokhotski-Plemelj splits it into a principal value, which renormalises the energy (the level shift), and $-i\pi\delta(E_i-E_f)$, whose modulus squared gives the transition rate. The golden rule is the imaginary half of this identity.
- **Landau damping and plasma dispersion.** The dielectric function of a warm plasma contains $\int dv\, (\partial f_0/\partial v)/(\omega - kv)$, whose pole at the resonant velocity sits on the integration path. Taking the principal value plus the half-residue gives the real frequency shift plus the Landau damping rate; the sign of the $i\varepsilon$ -- fixed by the initial-value nature of the problem -- is what makes the damping a damping rather than a growth.
:::
