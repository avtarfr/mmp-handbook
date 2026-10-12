---
id: fourier.dirichlet-convergence
title: Pointwise convergence of Fourier series
kind: theorem
level: core
summary: "Writes the symmetric partial sum as an average of the function against the Dirichlet kernel and proves that it converges at any point where the one-sided limits and the one-sided derivatives of the function exist, the limit being the average of the two one-sided values, so that a piecewise-smooth function is recovered everywhere except that each jump is split down the middle."
prereqs: [fourier.fourier-series, measure.dominated-convergence]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.3, the classes $C^p(S)$ and $D(S)$ (Dirichlet conditions), pp. 130–131; the Riemann-Lebesgue lemma for $L_1$ and its proof by splitting off a bounded part, Remark 1 and eq. (2.3.13), p. 130; the redefinition (2.3.14) of $f$ at a jump, p. 132; Thm 2.3.3 with its two remarks, pp. 132–133; the Dirichlet kernel (2.3.15)–(2.3.16) and the proof of Thm 2.3.3, pp. 133–134; the theorem on uniform convergence for $f \\in C^1(S)$, p. 134"
    pages: "130-134"
    role: the statement followed here, with its purely local hypothesis (the one-sided limits and one-sided derivatives at the single point in question) and its $L_1$ hypothesis on $f$; the splitting-off-a-bounded-part route to the Riemann-Lebesgue lemma; the convention that $f$ is redefined at a jump to be the half-sum; the remark that the class $D$ meets the hypotheses at every point; the closed form and unit mass of the Dirichlet kernel; the uniform-convergence statement for continuously differentiable $f$
  - work: strauss-2008
    loc: "§5.4, Thm 4 (Pointwise Convergence of Classical Fourier Series) and Thm 4$^\\infty$, p. 129, and the remark on p. 125 that an integrable function may have an everywhere divergent Fourier series; §5.5, the Dirichlet kernel (4)–(5) with its unit mass and the complexification proof of the closed form, pp. 137–138; the five-step proof for $C^1$ functions, eqs. (6)–(11), pp. 138–139; the modification for discontinuous functions, eqs. (12)–(14), p. 140"
    pages: "125, 129, 137-140"
    role: the proof route used here, in which the error is written as a single integral of a difference quotient against $\\sin[(N+\\tfrac12)\\theta]$ and killed with Bessel's inequality for that orthogonal family, together with the splitting into one-sided pieces for a function with a jump, the mean-value-theorem argument that the difference quotients stay bounded, and the statement in terms of piecewise-continuous $f$ and $f'$
  - work: folland-1999
    loc: "§8.5, the Dirichlet kernel and its closed form (8.40), pp. 263–264; the remark that $\\lVert D_m\\rVert_1 \\to \\infty$ and that the Fourier series of a continuous function need not converge, p. 264; Lemma 8.42 (uniform bound on partial integrals of $D_m$, and the half-masses), p. 265; Thm 8.43 (convergence to the half-sum for functions of bounded variation), p. 266; Thm 8.44 (localization) and Cor. 8.45, pp. 267–268; Exercises 34 and 35, p. 269"
    pages: "263-269"
    role: the bounded-variation hypothesis as an alternative to ours and its attribution to Dirichlet in 1829 for piecewise continuous and piecewise monotone functions; the localization theorem; the failure of the Dirichlet kernel to be an $L^1$-bounded family and the consequent existence of continuous functions whose Fourier series diverge
  - work: stein-shakarchi-2003
    loc: "Ch. 2, §1.1, Example 4 (the $N$th Dirichlet kernel, with the geometric-series derivation of its closed form), p. 37; the summary of the senses of convergence and Carleson's theorem, p. 39"
    pages: "37, 39"
    role: the name and closed form of the Dirichlet kernel in the $2\\pi$-periodic convention; the placing of pointwise convergence among the other senses, and Carleson's theorem as the sharp positive result for square-integrable data
  - work: arfken-2013
    loc: "§19.1, the Dirichlet conditions and the name piecewise regular, with the footnote that the conditions are sufficient but not necessary, pp. 935–936; eq. (19.7), the value of the series at a discontinuity, quoted without proof, p. 937; §19.3, the partial summation eqs. (19.29)–(19.31) and the reading of the kernel as a delta distribution, p. 958"
    pages: "935-937, 958"
    role: the physicists' statement of the Dirichlet conditions, the explicit statement that they are sufficient and not necessary, the half-sum rule at a discontinuity as the form in which the result is usually quoted in physics, and the identification of the normalised Dirichlet kernel as a delta sequence
  - work: rhb-2006
    loc: "§12.1, the four Dirichlet conditions and the statement that the series converges to $f$ where $f$ is continuous, pp. 415–416; §12.4 (Discontinuous functions), the half-sum rule stated without proof, p. 420"
    pages: "415-416, 420"
    role: a second physics-text statement of the Dirichlet conditions and of the half-sum rule, for the comparison of hypotheses
---

:::definition[The Dirichlet kernel]{provenance=adapted src="stein-shakarchi-2003:Ch. 2, §1.1, Example 4, p. 37; strauss-2008:§5.5, eqs. (4)–(5), p. 137; stakgold-holst-2011:§2.3, eqs. (2.3.15)–(2.3.16), p. 133; folland-1999:§8.5, eq. (8.40), p. 264"}
Throughout this unit the period is $2\pi$, so a function on the circle is a $2\pi$-periodic function on $\mathbb{R}$, the Fourier coefficients of :ref[]{to=fourier.fourier-series} read

$$
\hat f(n)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(y)\,\mathrm{e}^{-\mathrm{i}ny}\,\mathrm{d}y ,
$$

and the symmetric partial sum is $S_N f(x)=\sum_{\lvert n\rvert\le N}\hat f(n)\mathrm{e}^{\mathrm{i}nx}$. Nothing is lost by this choice: a period $T$ is brought to $2\pi$ by the substitution $x\mapsto 2\pi x/T$, which is Stakgold and Holst's change of scale, and every statement below transfers with $N+\tfrac12$ rescaled accordingly.

The **$N$th Dirichlet kernel** is the trigonometric polynomial

$$
D_N(x)=\sum_{n=-N}^{N}\mathrm{e}^{\mathrm{i}nx}
=\frac{\sin\bigl[(N+\tfrac12)x\bigr]}{\sin(x/2)} ,
$$

the second expression being understood by its limit, $D_N(0)=2N+1$, at $x=0$ and at the other multiples of $2\pi$. It is real, even, $2\pi$-periodic, and normalised so that

$$
\frac{1}{2\pi}\int_{-\pi}^{\pi}D_N(x)\,\mathrm{d}x = 1 .
$$

**Conventions.** We keep the $1/2\pi$ outside the kernel. Stakgold and Holst absorb it, writing $D_n(x)=\sin[(n+\tfrac12)x]/[2\pi\sin(x/2)]$ with $\int_{-\pi}^{\pi}D_n=1$; Strauss writes the same function as ours but calls it $K_N$; Folland works on an interval of length $1$ with characters $\mathrm{e}^{2\pi\mathrm{i}kx}$, where the closed form becomes $D_m(x)=\sin[(2m+1)\pi x]/\sin(\pi x)$. These are the same object in different coordinates. The letter $D_N$ and the name are Stein and Shakarchi's and are standard.
:::

:::statement[Convergence at a point with one-sided derivatives]{provenance=adapted src="stakgold-holst-2011:§2.3, Thm 2.3.3 with Remarks 1 and 2, pp. 132–133, the class $D(S)$, pp. 130–131, and the theorem on $C^1(S)$, p. 134; strauss-2008:§5.4, Thm 4 and Thm 4$^\\infty$, p. 129"}
Let $f$ be $2\pi$-periodic and integrable over one period. Let $x_0\in\mathbb{R}$ be a point at which the four one-sided data

$$
f(x_0\pm)=\lim_{h\to0\pm}f(x_0+h),
\qquad
f'(x_0\pm)=\lim_{h\to0\pm}\frac{f(x_0+h)-f(x_0\pm)}{h}
$$

all exist and are finite. Then

$$
\lim_{N\to\infty}S_N f(x_0)=\frac{f(x_0+)+f(x_0-)}{2}.
$$

Three readings of this, in increasing order of convenience and decreasing order of generality.

1. **At a point of differentiability.** If $f$ is differentiable at $x_0$, then both one-sided limits equal $f(x_0)$ and both one-sided derivatives equal $f'(x_0)$, so $S_Nf(x_0)\to f(x_0)$. Only differentiability *at the one point* is used; the behaviour of $f$ elsewhere enters only through the requirement that it be integrable.
2. **For piecewise-smooth data.** Say that $f$ satisfies the **Dirichlet conditions**, written $f\in D$, if $f$ is piecewise continuous and the circle can be cut into finitely many arcs on each of which $f$ has a continuous derivative, with one-sided derivatives existing at the ends of each arc. This is Stakgold and Holst's class $D(S)$. Every $f\in D$ meets the hypotheses at every point, so the Fourier series of such an $f$ converges everywhere, to $f$ at each point of continuity and to the midpoint of the jump at each of the finitely many points of discontinuity. This is Strauss's Theorem 4$^\infty$, stated there as: $f$ and $f'$ piecewise continuous.
3. **With continuity added.** If $f\in D$ and $f$ is also continuous, the series converges to $f$ at every point. If moreover $f$ is continuously differentiable on the whole circle, the convergence is uniform, by a separate argument given in :ref[]{to=fourier.smoothness-decay}.

The half-sum is forced, not chosen: $S_Nf$ cannot distinguish $f$ from the function obtained by resetting $f$ at its jumps to the half-sum there, since changing a function at finitely many points changes no Fourier coefficient. Stakgold and Holst make this the convention, redefining $f$ at a jump to be $\tfrac12[f(x_0+)+f(x_0-)]$ before stating the theorem; with that convention the conclusion reads $S_Nf(x_0)\to f(x_0)$ in all cases.
:::

:::idea{provenance=original}
Summing the Fourier series to order $N$ is the same as averaging $f$ against the Dirichlet kernel, because substituting the coefficient integrals into $S_Nf$ and exchanging a finite sum with an integral produces exactly that average. If $D_N$ were a bump of unit mass, non-negative and concentrating at the origin, the average would be a weighted mean of nearby values of $f$ and convergence would be routine. It is not: $D_N$ oscillates and changes sign, and the total mass of $\lvert D_N\rvert$ grows without bound. So cancellation, not concentration, has to do the work.

The way to exploit the cancellation is to use the one thing $D_N$ does have, unit mass, to subtract off the answer before estimating. What is left is the integral of $\sin[(N+\tfrac12)\theta]$ against the quotient $[f(x_0+\theta)-f(x_0\pm)]/\sin(\theta/2)$. That quotient looks singular at $\theta=0$, where the denominator vanishes — and it is precisely the existence of the one-sided derivatives that makes the numerator vanish at the same rate, so the quotient stays bounded. Once the quotient is an honest integrable function, the oscillation of $\sin[(N+\tfrac12)\theta]$ at ever-higher frequency makes the integral die, because the functions $\sin[(N+\tfrac12)\theta]$ are mutually orthogonal and no fixed function can have large components along infinitely many orthogonal directions.
:::

:::proof{provenance=adapted src="strauss-2008:§5.5, the five steps for $C^1$ data, eqs. (3)–(11), pp. 137–139, and the modification for jumps, eqs. (12)–(14), p. 140; stakgold-holst-2011:§2.3, the proof of Thm 2.3.3 and eqs. (2.3.15)–(2.3.18), pp. 133–134, and Remark 1 on p. 130; folland-1999:§8.5, Lemma 8.42 (the half-masses of $D_m$), p. 265"}
**Step 1: the closed form of $D_N$.** Multiply the defining sum by $\mathrm{e}^{\mathrm{i}x/2}-\mathrm{e}^{-\mathrm{i}x/2}$ and look at what each term contributes:

$$
\bigl(\mathrm{e}^{\mathrm{i}x/2}-\mathrm{e}^{-\mathrm{i}x/2}\bigr)D_N(x)
=\sum_{n=-N}^{N}\Bigl(\mathrm{e}^{\mathrm{i}(n+\frac12)x}-\mathrm{e}^{\mathrm{i}(n-\frac12)x}\Bigr).
$$

Consecutive terms cancel: the first part of the $n$th summand is the second part of the $(n+1)$st. Only the two ends survive, leaving $\mathrm{e}^{\mathrm{i}(N+\frac12)x}-\mathrm{e}^{-\mathrm{i}(N+\frac12)x}=2\mathrm{i}\sin[(N+\tfrac12)x]$. Since the prefactor is $2\mathrm{i}\sin(x/2)$, dividing gives the closed form wherever $\sin(x/2)\neq0$. At $x=0$ the original sum has $2N+1$ terms each equal to $1$, and the quotient has the same limit by l'Hôpital, so the two expressions agree there too.

**Step 2: unit mass, and unit mass on each half.** Integrating the defining sum term by term over $(-\pi,\pi)$, every $n\neq0$ contributes $0$ by the orthogonality relations of :ref[]{to=fourier.fourier-series}, and $n=0$ contributes $2\pi$. Hence $(2\pi)^{-1}\int_{-\pi}^{\pi}D_N=1$. Because $D_N$ is even — the closed form is a ratio of two odd functions — each half carries half:

$$
\frac{1}{2\pi}\int_{0}^{\pi}D_N(\theta)\,\mathrm{d}\theta=\frac{1}{2\pi}\int_{-\pi}^{0}D_N(\theta)\,\mathrm{d}\theta=\frac12 .
$$

This is the second half of Folland's Lemma 8.42, and it is what lets the two one-sided limits be subtracted separately in Step 3.

**Step 3: the partial sum is an average against $D_N$, and the error is one integral.** Substituting the coefficient integrals into $S_Nf(x)$ and exchanging the finite sum with the integral,

$$
S_Nf(x)=\sum_{\lvert n\rvert\le N}\frac{1}{2\pi}\int_{-\pi}^{\pi}f(y)\mathrm{e}^{\mathrm{i}n(x-y)}\,\mathrm{d}y
=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(y)\,D_N(x-y)\,\mathrm{d}y .
$$

Put $y=x+\theta$. The interval of integration becomes $[-\pi-x,\pi-x]$, but the integrand $f(x+\theta)D_N(\theta)$ has period $2\pi$ in $\theta$, so by part 1 of the statement in :ref[]{to=fourier.fourier-series} the integral over any interval of length $2\pi$ is the same, and $D_N(-\theta)=D_N(\theta)$ lets us drop the sign:

$$
S_Nf(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(x+\theta)\,D_N(\theta)\,\mathrm{d}\theta .
$$

Now fix $x=x_0$ and subtract, using Step 2 on each half separately — this is where having the two half-masses, rather than only the total, pays:

$$
S_Nf(x_0)-\frac{f(x_0+)+f(x_0-)}{2}
=\frac{1}{2\pi}\int_{0}^{\pi}\!\!\bigl[f(x_0+\theta)-f(x_0+)\bigr]D_N(\theta)\,\mathrm{d}\theta
+\frac{1}{2\pi}\int_{-\pi}^{0}\!\!\bigl[f(x_0+\theta)-f(x_0-)\bigr]D_N(\theta)\,\mathrm{d}\theta .
$$

Insert the closed form of $D_N$ and define

$$
g_\pm(\theta)=\frac{f(x_0+\theta)-f(x_0\pm)}{\sin(\theta/2)} ,
$$

so that the error is

$$
E_N:=S_Nf(x_0)-\frac{f(x_0+)+f(x_0-)}{2}
=\frac{1}{2\pi}\int_{0}^{\pi}g_+(\theta)\,\phi_N(\theta)\,\mathrm{d}\theta
+\frac{1}{2\pi}\int_{-\pi}^{0}g_-(\theta)\,\phi_N(\theta)\,\mathrm{d}\theta ,
\qquad
\phi_N(\theta)=\sin\bigl[(N+\tfrac12)\theta\bigr].
$$

Everything now rests on showing that both integrals vanish as $N\to\infty$.

**Step 4: the oscillating factors are an orthogonal family.** On $(0,\pi)$, for integers $N,M\ge0$, the product-to-sum identity gives

$$
\int_0^\pi \phi_N\phi_M
=\frac12\int_0^\pi\Bigl(\cos\bigl[(N-M)\theta\bigr]-\cos\bigl[(N+M+1)\theta\bigr]\Bigr)\mathrm{d}\theta .
$$

Both $N-M$ and $N+M+1$ are integers, and $\int_0^\pi\cos(k\theta)\,\mathrm{d}\theta=\sin(k\pi)/k=0$ for every nonzero integer $k$, while $N+M+1\ge1$ is never zero. So the second term always vanishes, and the first vanishes unless $N=M$, in which case it contributes $\pi/2$. Thus $\{\phi_N\}_{N\ge0}$ is orthogonal on $(0,\pi)$ with $\lVert\phi_N\rVert^2=\pi/2$. Each $\phi_N$ is odd, so each product $\phi_N\phi_M$ is even; the identical computation on $(-\pi,0)$ therefore gives the same conclusion there.

**Step 5: a square-integrable function has vanishing components along an orthogonal family.** Let $\{\psi_N\}$ be an orthogonal family of nonzero vectors in an inner product space and let $g$ be square-integrable, so that $\lVert g\rVert^{2}=(g,g)<\infty$. Put $c_N=(g,\psi_N)/\lVert\psi_N\rVert^2$. Expanding the square of the norm of the residual, and using orthogonality to kill the cross terms,

$$
0\le\Bigl\lVert g-\sum_{N\le M}c_N\psi_N\Bigr\rVert^2
=\lVert g\rVert^2-\sum_{N\le M}\frac{\lvert(g,\psi_N)\rvert^2}{\lVert\psi_N\rVert^2} ,
$$

so the partial sums of the non-negative series $\sum_N\lvert(g,\psi_N)\rvert^2/\lVert\psi_N\rVert^2$ are bounded above by $\lVert g\rVert^2$. A non-negative series with bounded partial sums converges, and the terms of a convergent series tend to zero; hence $(g,\psi_N)\to0$. (This inequality is Bessel's, and it is proved in its own right in :ref[]{to=fourier.parseval-mean-square}; the two lines above are given here so that this unit does not depend on that one.)

**Step 6: $g_\pm$ is bounded near $0$, by the one-sided derivative hypothesis.** Factor the quotient as

$$
g_+(\theta)=\underbrace{\frac{f(x_0+\theta)-f(x_0+)}{\theta}}_{\to\,f'(x_0+)}\cdot\underbrace{\frac{\theta}{\sin(\theta/2)}}_{\to\,2}
\qquad(\theta\to0+).
$$

The second factor is harmless on all of $(0,\pi]$: Jordan's inequality $\sin u\ge 2u/\pi$ on $[0,\pi/2]$, applied with $u=\theta/2$, gives $\sin(\theta/2)\ge\theta/\pi$ and hence $0<\theta/\sin(\theta/2)\le\pi$. The first factor converges to $f'(x_0+)$ by hypothesis, so it is bounded on some interval $(0,\delta]$. Therefore $g_+$ is bounded on $(0,\delta]$, say by $C$. On the remainder $[\delta,\pi]$ the denominator is bounded below by $\sin(\delta/2)>0$, so

$$
\lvert g_+(\theta)\rvert\le\frac{\lvert f(x_0+\theta)\rvert+\lvert f(x_0+)\rvert}{\sin(\delta/2)} ,
$$

which is integrable because $f$ is. So $g_+$ is integrable on $(0,\pi)$, and bounded near the only point that threatened it. The same holds for $g_-$ on $(-\pi,0)$.

**Step 7: from integrable to square-integrable, and the conclusion.** If $f$ is bounded — which covers every piecewise-continuous $f$, hence the whole of class $D$ — then $g_+$ is bounded on $(0,\pi)$ by Step 6 and so square-integrable there, and Steps 4 and 5 give $\int_0^\pi g_+\phi_N\to0$ at once. For a general integrable $f$ one extra line is needed, and it is Stakgold and Holst's device of splitting off a bounded part. Given $\varepsilon>0$, let $u$ be the truncation of $g_+$ at height $M$, that is $u=g_+$ where $\lvert g_+\rvert\le M$ and $u=0$ elsewhere. Then $\int_0^\pi\lvert g_+-u\rvert=\int_{\{\lvert g_+\rvert>M\}}\lvert g_+\rvert$, which tends to $0$ as $M\to\infty$ because $g_+$ is integrable (:ref[]{to=measure.dominated-convergence}); fix $M$ so large that this is below $2\pi\varepsilon$. Since $\lvert\phi_N\rvert\le1$,

$$
\left\lvert\frac{1}{2\pi}\int_0^\pi g_+\phi_N\right\rvert
\le\left\lvert\frac{1}{2\pi}\int_0^\pi u\,\phi_N\right\rvert+\frac{1}{2\pi}\int_0^\pi\lvert g_+-u\rvert
<\left\lvert\frac{1}{2\pi}\int_0^\pi u\,\phi_N\right\rvert+\varepsilon ,
$$

and the first term tends to $0$ by Steps 4 and 5, since $u$ is bounded and hence square-integrable. So $\limsup_N\lvert(2\pi)^{-1}\int_0^\pi g_+\phi_N\rvert\le\varepsilon$ for every $\varepsilon>0$, which makes the limit zero. The same argument applies to $g_-$ on $(-\pi,0)$. Both terms of $E_N$ vanish in the limit, so $E_N\to0$, which is the assertion. $\square$

**The three readings.** Reading 1 is the case $f(x_0+)=f(x_0-)=f(x_0)$. Reading 2 holds because on each arc of the subdivision $f$ has a continuous derivative extending to the endpoints, so at an interior point of an arc $f$ is differentiable and at an endpoint both one-sided derivatives exist by assumption; a piecewise-continuous $f$ is bounded, so Step 7 needs only its first sentence. Reading 3 adds continuity, under which the half-sum is $f(x_0)$.
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="folland-1999:§8.5, the attribution to Dirichlet in 1829, p. 264, Thm 8.43, p. 266, Thm 8.44 and Cor. 8.45, pp. 267–268, and the discussion of $\\lVert D_m\\rVert_1$ with Exercises 34–35, pp. 264 and 269; strauss-2008:§5.4, p. 125; stakgold-holst-2011:§2.3, Remarks 1 and 2 after Thm 2.3.3, p. 133, and the description of the class $D$, p. 131; arfken-2013:§19.1, the footnote to the Dirichlet conditions, p. 935; stein-shakarchi-2003:Ch. 2, §1.1, p. 39; rhb-2006:§12.1, pp. 415–416"}
**The one-sided derivatives are used once**, in Step 6, and for one purpose: to cancel the zero of $\sin(\theta/2)$ in the denominator of $g_\pm$. Nothing else in the proof refers to them. This is why the hypothesis is *local* — it is imposed at $x_0$ and nowhere else — which is Stakgold and Holst's first remark on the theorem: the convergence at a point is decided by the behaviour of $f$ there, even though every coefficient is a global integral. Folland's Theorem 8.44 is the sharp form of that observation: if $f$ and $g$ agree on an open interval $I$, then $S_Nf-S_Ng\to0$ uniformly on compact subsets of $I$, whatever the two functions do elsewhere.

**Integrability of $f$ over a period** is used twice: to have coefficients at all, and in Step 6 to control $g_\pm$ away from the origin. Step 7 is the only place where the difference between integrable and bounded matters, and it is a technicality.

**Some local hypothesis is genuinely needed; continuity alone is not enough.** The reason is visible in Step 3: $D_N$ has unit mass but $\lVert D_N\rVert_{1}=(2\pi)^{-1}\int_{-\pi}^{\pi}\lvert D_N\rvert$ is unbounded in $N$, so the maps $f\mapsto S_Nf(x_0)$ have unbounded norms on the continuous functions. Folland draws the conclusion (his Exercises 34 and 35, by the uniform boundedness principle): there are continuous functions whose Fourier series diverge at a point, indeed at a dense set of points. Strauss records a sharper classical fact still: some integrable functions have a Fourier series that converges nowhere at all. In the other direction, Stein and Shakarchi note Carleson's theorem: for square-integrable $f$ the series converges at almost every point. So the theorem above is not a technical convenience hiding a stronger truth; without a hypothesis of this kind, pointwise convergence fails.

**The hypothesis here is sufficient, never necessary, and does not contain the alternatives.** Riley, Hobson and Bence and Arfken, Weber and Harris both quote a list called the Dirichlet conditions — periodicity, single-valuedness with finitely many finite jumps, finitely many maxima and minima per period, and convergence of $\int\lvert f\rvert$ over a period — and Arfken, Weber and Harris add explicitly that these are sufficient but not necessary. Folland proves a different sufficient condition: if $f$ is of bounded variation then $S_Nf(x)\to\tfrac12[f(x+)+f(x-)]$ at *every* $x$, a result he attributes to Dirichlet in 1829 for piecewise continuous, piecewise monotone $f$ and to later refinements for bounded variation. Neither that hypothesis nor ours implies the other:

- *Bounded variation without one-sided derivatives.* Let $f$ be the odd $2\pi$-periodic extension of $\sqrt{x}$ on $(0,\pi)$. It is increasing on $(-\pi,\pi)$ and hence of bounded variation, so Folland's theorem applies at $x_0=0$ and gives $S_Nf(0)\to0$. Our hypothesis fails there: the difference quotient $\sqrt{h}/h=h^{-1/2}$ has no finite limit, so $f'(0+)$ does not exist.
- *One-sided derivatives without bounded variation.* Let $f(x)=x^{2}\sin(x^{-3})$ for $x\neq0$ and $f(0)=0$, extended $2\pi$-periodically. Then $f(h)/h=h\sin(h^{-3})\to0$, so $f'(0\pm)=0$ exist and our theorem applies at $x_0=0$. But $f'(x)$ contains the term $-3x^{-2}\cos(x^{-3})$, whose absolute integral over $(0,\delta)$ diverges, so $f$ is not of bounded variation near $0$.

So the two theorems are genuinely different statements, and a function may satisfy either, both or neither. Stakgold and Holst's class $D$ is also incomparable with continuity in the same spirit: $D$ admits jumps, which continuity forbids, and excludes cusps such as $\sqrt{\lvert x\rvert}$, which continuity allows.

**What fails without the half-sum.** The conclusion cannot be improved to "$S_Nf(x_0)\to f(x_0)$" at a jump, for the reason given under the statement: $\hat f$ does not see the value of $f$ at a single point, so no theorem about $\hat f$ can predict it. Nor is the convergence uniform near a jump, since a uniform limit of continuous functions is continuous (:ref[]{to=found.uniform-convergence}); what actually happens there is the subject of :ref[]{to=fourier.gibbs-phenomenon}. If uniform convergence is what is wanted from data with jumps, one changes the summation method rather than the hypotheses: see :ref[]{to=fourier.fejer-theorem}.
:::

:::method[Deciding where a Fourier series converges, and to what]{provenance=original}
1. **Write down the function the series actually represents.** That is the periodic extension fixed in step 1 of the method of :ref[]{to=fourier.fourier-series}: the plain periodic extension for a full series, the odd one for a sine series, the even one for a cosine series. Every question below is about *that* function on the whole line, not about the formula on the interval you started with.
2. **List the candidate bad points in one period.** They are: the break-points of a piecewise definition; the ends of the period interval, where the extension may jump; the origin and the ends of the half-interval, for a half-range series; and any point where $f$ has a vertical tangent or a cusp.
3. **At every other point** the data this method is written for — piecewise-smooth $f$, the class $D$ of the statement — is differentiable, so the series converges to $f(x)$ there and no computation is needed. (For a general integrable $f$ no such blanket statement is available: the theorem has to be checked point by point, and the remark below records that for merely continuous $f$ it can fail.)
4. **At each candidate point, check the four one-sided data.** If $f(x_0\pm)$ and $f'(x_0\pm)$ all exist and are finite, the series converges to $\tfrac12[f(x_0+)+f(x_0-)]$ — equal to $f(x_0)$ if $f$ is continuous there, and the midpoint of the jump otherwise. For data built out of polynomials, exponentials and trigonometric functions on finitely many pieces, this check always passes, and it is usually enough to say so.
5. **If a one-sided derivative is infinite**, the theorem is silent, and the fallback is the bounded-variation test. Folland's Theorem 8.43 asks for bounded variation over a *whole period*, not merely near $x_0$: if the periodic extension is of bounded variation on $[-\pi,\pi]$ — which holds, for instance, when it is piecewise monotone with finitely many pieces, as $\sqrt{x}$, $x^{1/3}$ and the like are — his theorem delivers the half-sum at every point, $x_0$ among them. If the function is well behaved only near $x_0$, buy the global hypothesis with the localization theorem: choose a $\tilde f$ of bounded variation on the period that agrees with $f$ on an open interval $I\ni x_0$ (cutting $f$ off outside $I$ will usually do), read the half-sum off Theorem 8.43 for $\tilde f$, and transfer it to $f$ by Theorem 8.44, which gives $S_Nf-S_N\tilde f\to0$ on compact subsets of $I$. If neither test applies, retreat to Cesàro means (:ref[]{to=fourier.fejer-theorem}) or to mean-square convergence (:ref[]{to=fourier.parseval-mean-square}), both of which need far less.
6. **Read off the end-point values without computing anything.** A sine series on $(0,l)$ converges to $0$ at $x=0$ and at $x=l$, whatever $\varphi$ was, because its odd $2l$-periodic extension has the half-sum $0$ there; so a sine series represents $\varphi$ at the ends only if $\varphi(0+)=\varphi(l-)=0$. A cosine series converges to $\varphi(0+)$ and $\varphi(l-)$ at those points, because the even extension has no jump there. This single observation explains most of the surprises in half-range expansions.
7. **Expect slow convergence wherever the extension jumps.** If step 2 found a genuine jump, the coefficients decay only like $1/n$ (:ref[]{to=fourier.smoothness-decay}) and the partial sums converge like $1/N$ at the jump and oscillate near it; budget terms accordingly, and see :ref[]{to=fourier.gibbs-phenomenon} before trusting values close to the discontinuity.
:::

:::example[The periodic extension of $\mathrm{e}^{x}$, and the value of the series at the jump]{provenance=original}
Let $f$ be the $2\pi$-periodic function with $f(x)=\mathrm{e}^{x}$ for $-\pi<x<\pi$. On the open interval it is as smooth as a function can be; the whole of its bad behaviour sits at the odd multiples of $\pi$, where the extension drops from $\mathrm{e}^{\pi}$ back to $\mathrm{e}^{-\pi}$.

**Step 1: the coefficients, by the complex route.** For every $n\in\mathbb{Z}$,

$$
\hat f(n)=\frac{1}{2\pi}\int_{-\pi}^{\pi}\mathrm{e}^{x}\mathrm{e}^{-\mathrm{i}nx}\,\mathrm{d}x
=\frac{1}{2\pi}\left[\frac{\mathrm{e}^{(1-\mathrm{i}n)x}}{1-\mathrm{i}n}\right]_{-\pi}^{\pi}
=\frac{\mathrm{e}^{-\mathrm{i}n\pi}\bigl(\mathrm{e}^{\pi}-\mathrm{e}^{-\pi}\bigr)}{2\pi(1-\mathrm{i}n)}
=\frac{(-1)^{n}\sinh\pi}{\pi(1-\mathrm{i}n)} ,
$$

using $\mathrm{e}^{\pm\mathrm{i}n\pi}=(-1)^{n}$ and $\mathrm{e}^{\pi}-\mathrm{e}^{-\pi}=2\sinh\pi$. Rationalising, $\hat f(n)=(-1)^{n}\sinh\pi\,(1+\mathrm{i}n)/[\pi(1+n^{2})]$, so by the dictionary of :ref[]{to=fourier.fourier-series},

$$
a_n=2\operatorname{Re}\hat f(n)=\frac{2(-1)^{n}\sinh\pi}{\pi(1+n^{2})},
\qquad
b_n=-2\operatorname{Im}\hat f(n)=\frac{-2(-1)^{n}n\sinh\pi}{\pi(1+n^{2})} .
$$

The first few: $a_0/2=\sinh\pi/\pi=3.676078$, $a_1=-\sinh\pi/\pi=-3.676078$, $b_1=+\sinh\pi/\pi=3.676078$. The mean check of step 5 of the method in :ref[]{to=fourier.fourier-series} passes: $(2\pi)^{-1}\int_{-\pi}^{\pi}\mathrm{e}^{x}\mathrm{d}x=\sinh\pi/\pi$, as it must.

**Step 2: apply the theorem at the jump.** Take $x_0=\pi$. The four data exist:

$$
f(\pi-)=\mathrm{e}^{\pi}=23.140693,\qquad f(\pi+)=f(-\pi+)=\mathrm{e}^{-\pi}=0.043214,
$$

and the one-sided derivatives are $f'(\pi-)=\mathrm{e}^{\pi}$ and $f'(\pi+)=\mathrm{e}^{-\pi}$, since $f$ coincides with a smooth exponential on each side. So the theorem applies and predicts

$$
\lim_{N\to\infty}S_Nf(\pi)=\frac{\mathrm{e}^{\pi}+\mathrm{e}^{-\pi}}{2}=\cosh\pi=11.5919533 .
$$

The jump itself is $\mathrm{e}^{\pi}-\mathrm{e}^{-\pi}=2\sinh\pi=23.097479$, and the predicted limit sits exactly halfway up it — well away from either one-sided value.

**Step 3: check the prediction against the series, and harvest an identity.** At $x=\pi$ every $\sin n\pi$ vanishes and $\cos n\pi=(-1)^n$, so

$$
S_Nf(\pi)=\frac{\sinh\pi}{\pi}\left(1+2\sum_{n=1}^{N}\frac{1}{1+n^{2}}\right).
$$

Setting the limit equal to $\cosh\pi$ and dividing by $\sinh\pi/\pi$ turns the theorem into the statement $1+2\sum_{n\ge1}(1+n^{2})^{-1}=\pi\coth\pi$, that is

$$
\sum_{n=1}^{\infty}\frac{1}{n^{2}+1}=\frac{\pi\coth\pi-1}{2}=1.0766740474686 .
$$

Summing the left-hand side numerically and independently gives $1.0766740474686$: the prediction is confirmed to thirteen figures.

**Step 4: the same check at an interior point.** At $x=0$, $f$ is differentiable, so reading 1 applies and the series must converge to $f(0)=1$. There $\sin 0=0$ and $\cos 0=1$, so the series reads $(\sinh\pi/\pi)\bigl(1+2\sum_{n\ge1}(-1)^{n}(1+n^{2})^{-1}\bigr)=1$, which rearranges to

$$
\sum_{n=1}^{\infty}\frac{(-1)^{n}}{n^{2}+1}=\frac{1}{2}\left(\frac{\pi}{\sinh\pi}-1\right)=-0.3639854725089 ,
$$

and the numerical sum is $-0.3639854725089$. Both identities are consequences of the theorem, not inputs to it.

**Step 5: how fast.** Convergence at the jump is slow, exactly as step 7 of the method warns, because the coefficients decay only like $1/n$:

| $N$ | $S_Nf(\pi)$ | error | $N\times$ error |
|---|---|---|---|
| $5$ | $10.273058$ | $-1.318896$ | $-6.59$ |
| $20$ | $11.233666$ | $-0.358287$ | $-7.17$ |
| $100$ | $11.518801$ | $-0.073153$ | $-7.32$ |
| $1000$ | $11.584605$ | $-0.007348$ | $-7.35$ |

The last column settles down, so the error behaves like $c/N$; the numbers identify $c\approx-7.35$, and $2\sinh\pi/\pi=7.3521$ is the obvious candidate, the jump divided by $\pi$. Getting three correct decimal places at the jump therefore costs of order $10^{4}$ terms. All numbers in this example were computed to twenty digits with mpmath and the coefficients checked symbolically.
:::

:::application{provenance=original}
**What a reconstruction returns at a switching instant.** A square-wave clock, a rectified sinusoid, a sampled bit-stream: all are modelled by piecewise-smooth periodic functions, all are in class $D$, and all therefore have everywhere-convergent Fourier series. But at each switching instant the series returns the mean of the two levels, not either level. A simulation that synthesises a $0/1$ logic waveform from harmonics and then samples it exactly at an edge reads $0.5$, which is neither value and is not a numerical error; it is the theorem. The practical consequence is to sample strictly between edges, and the diagnostic consequence is that a reconstruction which returns something other than the midpoint at a known edge has a bug in its coefficients.

**Initial data with a step, in separation of variables.** Solving the heat equation $u_t=\kappa u_{xx}$ on $(0,l)$ with ends held at zero and a step initial temperature — hot on the left half, cold on the right — produces $u(x,t)=\sum_n B_n\mathrm{e}^{-\kappa n^{2}\pi^{2}t/l^{2}}\sin(n\pi x/l)$ with $B_n$ the sine coefficients of the step. For every $t>0$ the exponential factors make the series converge absolutely and the solution is smooth, so nothing in this unit is needed. It is needed at exactly one instant, $t=0$: the theorem is what licenses the claim that the series represents the initial data, and it says precisely in what sense — everywhere except at the step, where it gives the mean of the two temperatures. A statement that the series equals the initial data *everywhere* would be false, and the failure is at one point, so it does not affect the solution for $t>0$.

**Where the convergence rate comes from, and what it costs.** The table in the example is the general picture: a jump in the periodic extension forces $1/n$ coefficients and $1/N$ convergence, so three-figure accuracy near a discontinuity costs thousands of harmonics. This is the quantitative reason spectral methods for partial differential equations (:ref[]{to=num.spectral-methods}) demand smooth, periodic data and lose their accuracy advantage the moment a shock forms, and the reason a filter designer who truncates a frequency response at a sharp cutoff gets a slowly converging and badly behaved impulse response. The check in step 2 of the method — is the periodic extension continuous? — is thus not pedantry but the first estimate of cost.

**A template for other eigenfunction expansions.** The architecture of the proof survives far beyond trigonometric series: express the partial sum of an expansion in the eigenfunctions of a Sturm-Liouville problem as an integral against a kernel built from those eigenfunctions, show the kernel has unit mass, subtract the candidate limit, and read off what local regularity makes the remaining quotient integrable. The resulting theorems for Legendre, Bessel and Hermite expansions have the same shape, including the half-sum at a jump; and so, as Arfken, Weber and Harris note, does the overshoot near one.
:::
