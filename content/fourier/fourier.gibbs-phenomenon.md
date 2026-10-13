---
id: fourier.gibbs-phenomenon
title: The Gibbs phenomenon
kind: example
level: core
summary: "Computes exactly what a truncated Fourier series does next to a jump: the partial sum of the square wave reaches 2Si(pi)/pi = 1.17898 times the half-jump at a point just under half a wavelength of the highest retained harmonic away from the discontinuity, so it overshoots each one-sided value by 8.95 percent of the jump, and the spike narrows without shrinking as more terms are taken."
prereqs: [fourier.dirichlet-convergence]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§19.3 (Gibbs Phenomenon), the partial summation (19.29)–(19.31), p. 958; the square wave (19.32)–(19.33) and the reduction of the partial sum to the two integrals (19.34)–(19.37), pp. 958–959; Calculation of Overshoot, the location $x=\\pi/p$ of the maximum, the approximation $\\sin(\\xi/2p)\\approx\\xi/2p$, the identities (19.38)–(19.42) and the value (19.43) $\\tfrac2\\pi\\int_0^\\pi \\xi^{-1}\\sin\\xi\\,\\mathrm{d}\\xi = 1.1789797$, with Figure 19.11 and the closing remarks, pp. 959–961; Exercise 19.3.3 and its answer $I=1.178979744472$, pp. 961–962"
    pages: "958-962"
    role: the route followed here for the square wave, in which the partial sum is written as an integral of $\\sin[(r+\\frac12)s]/\\sin(\\frac12 s)$, the maximum is located at $px=\\pi$, and the limiting height is identified as $\\tfrac{2}{\\pi}\\mathrm{Si}(\\pi)$; the proof that this exceeds one by splitting $\\int_0^\\infty$ into alternating arches; the twelve-figure value of the constant; the statements that more terms only move the overshoot closer to the discontinuity and that the phenomenon is not special to Fourier series
  - work: stakgold-holst-2011
    loc: "§2.3 (The Gibbs Phenomenon), the sine series of $\\operatorname{sgn} x$, the reduction of the partial sums to $\\tfrac{2}{\\pi}\\int_0^x y^{-1}\\sin[2(n+1)y]\\,\\mathrm{d}y$ and to the sine integral, the estimate $1.18$, the location $x_0\\approx\\pi/(2n+2)$ and Figure 2.4, the statement that the overshoot is about $9\\%$ of the jump, the decomposition of a function in $D$ into a continuous part plus multiples of $H(x-x_k)$, and the low-pass filter reading with the remark that Cesaro sums avoid the overshoot, pp. 135–136; the $13\\%$ overshoot for piecewise-linear least-squares fits, p. 137"
    pages: "135-137"
    role: the computation for $\\operatorname{sgn} x$, the location of the first maximum, the figure of $9\\%$ of the jump, the argument that reduces a general jump to this one by splitting off step functions, which we carry out locally rather than on the whole circle, the filter interpretation, and the fact that the overshoot also appears in other least-squares approximations
  - work: strauss-2008
    loc: "§5.5 (The Gibbs Phenomenon), the statement that the overshoot is about $9$ percent with the width going to zero and the height staying, eq. (18), the worked example with $f=\\pm\\frac12$, the partial sums (19)–(20) and the two bounds that kill the second integral, and the limit (21) $S_N(\\pi/M)\\to\\int_{-\\pi}^{\\pi}(\\sin\\theta/\\theta)\\,\\mathrm{d}\\theta/2\\pi\\simeq0.59$, pp. 142–144"
    pages: "142-144"
    role: the formulation that the width of the overshoot vanishes while its height does not, the figure of $9$ percent of the jump, and the change of variables and explicit bounds used to take the limit of the partial sum at the first maximum
  - work: folland-1999
    loc: "§8.5, the function $\\phi(x)=\\tfrac12-x-[x]$ of (8.46) with its unit jumps, the sine series for it, the description of the spikes as tending to zero in width but not in height, the first-maximum value $0.5895$ described as about $18\\%$ greater than $\\phi(0+)=\\tfrac12$, and Figure 8.1, pp. 268–269; the reduction of a general jump to $\\phi$ by subtracting $[f(a+)-f(a-)]\\phi(x-a)$ and the conclusion about uniform convergence away from the jumps, pp. 268–269; Exercise 37, giving $(\\mathrm{d}/\\mathrm{d}x)\\Delta_m=D_m$, the first maximum at $x=(2m+1)^{-1}$ with limit $\\tfrac1\\pi\\int_0^\\pi t^{-1}\\sin t\\,\\mathrm{d}t-\\tfrac12\\approx0.0895$, and the $j$th critical point at $j/(2m+1)$ with its limit, p. 270; the closed form (8.40) for $D_m$ with the remark that $\\lVert D_m\\rVert_1\\to\\infty$ and that the Fourier series of a continuous function need not converge pointwise, p. 264"
    pages: "264, 268-270"
    role: the differentiation identity that makes the critical points of the error exactly the zeros of the Dirichlet kernel, the full ladder of critical values $\\tfrac1\\pi\\mathrm{Si}(j\\pi)-\\tfrac12$ with their alternating signs, the value $0.0895$ of the overshoot for a unit jump, and the subtraction argument that transfers the result from one model jump to an arbitrary one
  - work: hassani-2013
    loc: "§9.1.1 (The Gibbs Phenomenon), the partial sum as an integral against $\\sin[(N+\\frac12)\\phi]/\\sin(\\frac12\\phi)$ (9.13), the localisation of the jump in the partial sum to a small interval around the discontinuity, the conclusion that the maximum overshoot occurs at $\\pi/(N+\\frac12)$ to the right of the discontinuity, eq. (9.14) giving $(\\Delta f_N)_{\\max}\\approx1.179\\,\\Delta f$, and Box 9.1.5, pp. 273–275"
    pages: "273-275"
    role: the derivation of the overshoot as a statement about the jump of the partial sum rather than about one side of it, giving the third of the three normalisations compared in the remark, and the identification of $\\pi/(N+\\frac12)$ as the upper limit of integration that maximises the overshoot
---

:::definition[Overshoot, and the three ways it is quoted]{provenance=adapted src="strauss-2008:§5.5, eq. (18) and the surrounding paragraph, p. 142; folland-1999:§8.5, pp. 268–269; stakgold-holst-2011:§2.3, p. 136; hassani-2013:§9.1.1, eq. (9.14) and Box 9.1.5, pp. 274–275; arfken-2013:§19.3, p. 961"}
Let $f$ be $2\pi$-periodic and in the class $D$ of :ref[]{to=fourier.dirichlet-convergence}, and let $f$ have a jump at $x=a$:

$$
J = f(a+)-f(a-)\neq0,
\qquad
m=\frac{f(a+)+f(a-)}{2} .
$$

By :ref[]{to=fourier.dirichlet-convergence} the partial sums $S_Nf$ converge at every point: to $f(x)$ at each point of continuity, and to the midpoint of the jump at each of the finitely many points where $f$ jumps, so to $m$ at $a$. Pointwise, then, nothing is amiss. The **Gibbs phenomenon** is what happens to the *graphs*: for every large $N$ the graph of $S_Nf$ carries a spike beside $x=a$ that overruns both one-sided values — rising above the higher of $f(a\pm)$ and dipping below the lower — by amounts that do not shrink as $N$ grows, although the spike itself narrows. Equivalently, $S_Nf\to f$ is not uniform on any interval containing $a$ — which it cannot be, since a uniform limit of continuous functions would be continuous — and the failure is of a definite, computable size.

The size is always quoted through the same number,

$$
\frac{2}{\pi}\operatorname{Si}(\pi)=1.1789797444722\ldots,
\qquad
\operatorname{Si}(u)=\int_0^u\frac{\sin t}{t}\,\mathrm{d}t ,
$$

but divided by three different things, which is why the literature reports $9\%$ and $18\%$ for the same effect. Writing $P=\tfrac2\pi\operatorname{Si}(\pi)$:

- **Per side, relative to the jump.** Beside $a$ the extreme values of $S_Nf$ tend to $m\pm\tfrac12\lvert J\rvert P$, so the upper one exceeds the higher of $f(a\pm)$ by $\tfrac12\lvert J\rvert(P-1)=0.0894899\,\lvert J\rvert$: about $9\%$ of the jump, which is how Stakgold and Holst and Strauss state it. There is an equal dip below the lower of the two. (Nothing here depends on the sign of $J$. The absolute value is carried rather than assumed away because for a downward jump, $J<0$, it is $f(a-)$ that is the higher level and $f(a+)$ the lower, so the two roles are exchanged while the sizes are not.)
- **Per side, relative to the half-jump.** The same excess is $(P-1)=17.898\%$ of the half-jump $\tfrac12\lvert J\rvert$, the distance from the midpoint to either level. Folland's $0.5895$ for a unit jump is "about $18\%$ greater than $\phi(0+)=\tfrac12$" in this sense, and Arfken, Weber and Harris's "some $18\%$" is the factor $P$ applied to their amplitude $h/2$.
- **Across the jump.** The spike spans $\lvert J\rvert P$ in total instead of $\lvert J\rvert$, so the *jump of the partial sum* is $1.179$ times the jump of the function. This is Hassani's eq. (9.14) and his Box 9.1.5.

All three are the one statement that the extremes of $S_Nf$ beside $a$ tend to $m\pm\tfrac12\lvert J\rvert P$. **We quote the first**: the overshoot beyond each one-sided value is $0.0895\,\lvert J\rvert$, about nine per cent of the jump, and we say so explicitly whenever a percentage appears.
:::

:::statement[The limiting shape of the spike for the square wave, and for any jump]{provenance=adapted src="arfken-2013:§19.3, eqs. (19.32)–(19.38) and (19.43), pp. 958–960; stakgold-holst-2011:§2.3, the sine series of $\\operatorname{sgn} x$ and the reduction to $\\mathrm{Si}$, pp. 135–136; folland-1999:§8.5, Exercise 37, p. 270, and the subtraction argument, pp. 268–269; hassani-2013:§9.1.1, eq. (9.14), p. 275"}
**Part 1: the model jump.** Let $f$ be the $2\pi$-periodic square wave with $f(x)=\operatorname{sgn}x$ on $(-\pi,\pi)$, so $f(0\pm)=\pm1$, $J=2$ and $m=0$. Its Fourier series is the sine series

$$
f(x)\sim\frac{4}{\pi}\sum_{k=0}^{\infty}\frac{\sin\bigl[(2k+1)x\bigr]}{2k+1},
$$

and we write $S_n$ for the partial sum retaining the terms $k=0,\dots,n$, whose highest harmonic is therefore $2n+1$. Put $M=2n+2$. Then:

1. $\displaystyle S_n(x)=\frac{2}{\pi}\int_0^x\frac{\sin(Mt)}{\sin t}\,\mathrm{d}t$ for all $x$.
2. On $(0,\pi)$ the critical points of $S_n$ are exactly $x_j=j\pi/M$ for $j=1,\dots,M-1$; they alternate between maxima (odd $j$) and minima (even $j$), and $S_n$ attains its **global** maximum on $[0,\pi]$ at $x_1=\pi/M$. (By the symmetry of $S_n$ about $\pi/2$ established in Step 4 of the proof, the same value is attained at $x_{M-1}=\pi-\pi/M$ and at no other point. For $n\ge1$ that is a second, distinct point, and when we speak of *the* maximum below we mean the first of the two; for $n=0$ the two coincide at $\pi/2$.)
3. For each fixed $j\ge1$,
   $$
   \lim_{n\to\infty}S_n\!\left(\frac{j\pi}{M}\right)=\frac{2}{\pi}\operatorname{Si}(j\pi).
   $$
   In particular
   $$
   \lim_{n\to\infty}\ \max_{[0,\pi]}S_n=\frac{2}{\pi}\operatorname{Si}(\pi)=1.1789797444722\ldots>1=f(0+),
   $$
   while the position $\pi/M$ of that maximum tends to $0$. The spike therefore narrows like $1/n$ without losing height, and by oddness of $f$ the mirror statement holds below $-1$.
4. **The rescaled graphs converge.** Because $f$ has no even harmonics, the ordinary symmetric partial sum $S_Nf$ of :ref[]{to=fourier.fourier-series} coincides with $S_n$ for $n=\lfloor(N-1)/2\rfloor$, for every $N\ge1$. With that reading, for every fixed real $c\neq0$,
   $$
   \lim_{N\to\infty}S_Nf\!\left(\frac{c}{N}\right)=\frac{2}{\pi}\operatorname{Si}(c) ,
   $$
   so in the stretched coordinate $c=Nx$ the graphs converge to the single curve $c\mapsto\tfrac2\pi\operatorname{Si}(c)$, which rises to $P$ at $c=\pi$ before settling to $1$.

**Part 2: an arbitrary jump.** Let $g$ be $2\pi$-periodic and in class $D$, let $a$ be a point at which $g$ jumps, and put

$$
J=g(a+)-g(a-)\neq0,\qquad m=\frac{g(a+)+g(a-)}{2} .
$$

1. $S_Ng\to g$ uniformly on every closed interval containing no discontinuity of $g$.
2. For every fixed real $c\neq0$,
   $$
   \lim_{N\to\infty}S_Ng\!\left(a+\frac{c}{N}\right)=m+\frac{J}{2}\cdot\frac{2}{\pi}\operatorname{Si}(c) .
   $$
   In the stretched coordinate $c=N(x-a)$ the graphs of the partial sums therefore converge to one fixed curve, the same curve for every $g$ once $m$ and $J$ are fixed.
3. That curve attains its extreme values at $c=\pm\pi$, where it reaches $m\pm\tfrac12 JP$. Since $P>1$, those two values lie *beyond* $g(a+)=m+\tfrac12 J$ and $g(a-)=m-\tfrac12 J$ respectively, whichever sign $J$ has. The partial sums therefore overrun each one-sided value, in the limit by
   $$
   \frac{\lvert J\rvert}{2}\left(\frac{2}{\pi}\operatorname{Si}(\pi)-1\right)=0.0894899\,\lvert J\rvert
   $$
   — about nine per cent of the jump, independently of everything else about $g$ — at points a distance $\approx\pi/N$ either side of $a$, essentially half a wavelength of the highest harmonic retained.

The overshoot is thus a property of the jump alone, not of the function carrying it.
:::

:::idea{provenance=original}
Everything follows from differentiating the partial sum instead of the function. The derivative of $S_n$ is a sum of cosines, and sums of cosines collapse: $S_n'$ is a single quotient whose numerator is $\sin(Mt)$, so the critical points of $S_n$ are simply the zeros of one sine, spaced $\pi/M$ apart. Integrating back, $S_n$ is the running integral of an oscillation of period $2\pi/M$ divided by $\sin t$. Its value at the $j$th zero is a sum of $j$ alternating arches. On $(0,\pi/2]$ the arches get smaller as $t$ grows, because $1/\sin t$ decreases there; that is the whole range one needs, since $S_n$ turns out to be symmetric about $\pi/2$ (Step 4), so the arches on $[\pi/2,\pi)$ are reflected copies of the earlier ones rather than a continuation of the decrease. So the running integral overshoots on the first arch and then oscillates in: the maximum is at the very first zero, and it is above the final value because the first arch is bigger than the whole alternating tail that follows.

Rescaling $t$ by $M$ is what makes the limit exist. The integrand becomes $\sin u / [M\sin(u/M)]$, and since $M\sin(u/M)\to u$, the integral tends to $\int_0^{j\pi}u^{-1}\sin u\,\mathrm{d}u$ — a fixed number, independent of $n$. The rescaling is also the reason the effect never goes away: $n$ has been absorbed entirely into the *width* of the picture, so increasing $n$ shrinks the spike horizontally and does nothing to it vertically.

The step from one jump to all jumps is pure bookkeeping. Subtract a multiple of the square wave to cancel the jump; what is left is continuous near that point and has a bounded derivative off finitely many others, hence is absolutely continuous there, and absolute continuity is exactly the hypothesis under which partial sums are known to converge uniformly on compact sets. So the remainder contributes no overshoot. Only the square-wave pieces can, and part 1 says exactly how much each one does.
:::

:::proof{provenance=adapted src="arfken-2013:§19.3, eqs. (19.32)–(19.43), pp. 958–960; folland-1999:§8.5, Exercise 37(a)–(c), p. 270; stakgold-holst-2011:§2.3, the reduction of $S_{2n+1}$ to the sine integral and the decomposition of a function in $D$, pp. 135–136; strauss-2008:§5.5, the change of variables and the bounds taken in the limit, pp. 143–144"}
**Step 1: the series of the square wave.** The function is odd, so by part 3 of the statement in :ref[]{to=fourier.fourier-series} only sine terms appear, and

$$
b_n=\frac{2}{\pi}\int_0^{\pi}\sin(nx)\,\mathrm{d}x=\frac{2}{\pi}\cdot\frac{1-\cos n\pi}{n}=\frac{2\bigl(1-(-1)^n\bigr)}{\pi n},
$$

which is $4/(\pi n)$ for odd $n$ and $0$ for even $n$. That is the displayed series.

**Step 2: the derivative collapses (part 1, item 1).** Differentiating the finite sum term by term,

$$
S_n'(x)=\frac{4}{\pi}\sum_{k=0}^{n}\cos\bigl[(2k+1)x\bigr]
=\frac{4}{\pi}\operatorname{Re}\sum_{k=0}^{n}\mathrm{e}^{\mathrm{i}(2k+1)x}
=\frac{4}{\pi}\operatorname{Re}\frac{\mathrm{e}^{\mathrm{i}x}\bigl(\mathrm{e}^{2\mathrm{i}(n+1)x}-1\bigr)}{\mathrm{e}^{2\mathrm{i}x}-1},
$$

the last step being the sum of a geometric progression with ratio $\mathrm{e}^{2\mathrm{i}x}$, valid when $\mathrm{e}^{2\mathrm{i}x}\neq1$. Cancel $\mathrm{e}^{\mathrm{i}x}$ against the denominator:

$$
\frac{\mathrm{e}^{\mathrm{i}x}}{\mathrm{e}^{2\mathrm{i}x}-1}=\frac{1}{\mathrm{e}^{\mathrm{i}x}-\mathrm{e}^{-\mathrm{i}x}}=\frac{1}{2\mathrm{i}\sin x},
$$

so, taking the real part of $z/(2\mathrm{i}\sin x)$, which is $\operatorname{Im}(z)/(2\sin x)$, with $z=\mathrm{e}^{2\mathrm{i}(n+1)x}-1$,

$$
S_n'(x)=\frac{4}{\pi}\cdot\frac{\sin\bigl[2(n+1)x\bigr]}{2\sin x}=\frac{2}{\pi}\cdot\frac{\sin(Mx)}{\sin x},
\qquad M=2n+2 .
$$

Since $S_n(0)=0$ — every term of the series vanishes at the origin — integrating from $0$ gives item 1. The integrand extends continuously to $t=0$ with value $M$, so the integral is a perfectly ordinary one.

**Step 3: the critical points (part 1, item 2, first half).** On $(0,\pi)$ we have $\sin t>0$, so $S_n'(x)=0$ exactly when $\sin(Mx)=0$, that is at $x_j=j\pi/M$ with $1\le j\le M-1$. On each interval $(x_{j},x_{j+1})$ the factor $\sin(Mx)$ keeps one sign and alternates from interval to interval, starting positive on $(0,x_1)$; so $S_n$ increases up to $x_1$, decreases to $x_2$, and so on. The odd $x_j$ are local maxima, the even ones local minima. (Folland's Exercise 37(a) is the same observation made about the error $S_m\phi-\phi$, whose derivative is the Dirichlet kernel itself.)

**Step 4: $x_1$ is the global maximum (part 1, item 2, second half).** First, $S_n$ is symmetric about $\pi/2$: replacing $x$ by $\pi-x$ sends $\sin[(2k+1)x]$ to $\sin[(2k+1)\pi-(2k+1)x]=\sin[(2k+1)x]$, since $2k+1$ is odd. So it is enough to compare the local maxima lying in $(0,\pi/2]$. For odd $j$ with $x_{j+2}\le\pi/2$,

$$
S_n(x_{j+2})-S_n(x_j)=\frac{2}{\pi}\left(\int_{x_j}^{x_{j+1}}\frac{\sin(Mt)}{\sin t}\,\mathrm{d}t+\int_{x_{j+1}}^{x_{j+2}}\frac{\sin(Mt)}{\sin t}\,\mathrm{d}t\right),
$$

in which the first integrand is negative and the second positive. Substituting $t\mapsto t+\pi/M$ carries the first interval onto the second and $\lvert\sin(Mt)\rvert$ onto itself, while $1/\sin t$ strictly decreases on $(0,\pi/2]$. Hence the positive second integral is strictly smaller in magnitude than the negative first one, the bracket is negative, and $S_n(x_{j+2})<S_n(x_j)$. The local maxima in $(0,\pi/2]$ therefore decrease, so the largest is the first, $x_1$; by the symmetry just established the maxima in $[\pi/2,\pi)$ are copies of these, and $S_n(0)=S_n(\pi)=0$. So $\max_{[0,\pi]}S_n=S_n(\pi/M)$.

**Step 5: the limit (part 1, item 3).** Substitute $t=u/M$ in item 1 at $x=j\pi/M$:

$$
S_n\!\left(\frac{j\pi}{M}\right)=\frac{2}{\pi}\int_0^{j\pi}\frac{\sin u}{M\sin(u/M)}\,\mathrm{d}u .
$$

We compare the integrand with $\sin u/u$ uniformly on $[0,j\pi]$, which is the estimate Arfken, Weber and Harris and Hassani both take for granted when they replace $\sin(u/M)$ by $u/M$. Two elementary bounds do it, for $M\ge 2j$ — that is, for $n\ge j-1$ — so that $u/M\le\pi/2$ throughout:

- $\bigl\lvert M\sin(u/M)-u\bigr\rvert\le u^3/(6M^2)$, from the alternating Taylor series of $\sin$;
- $M\sin(u/M)\ge 2u/\pi$, from Jordan's inequality $\sin v\ge 2v/\pi$ on $[0,\pi/2]$.

Therefore, for $0<u\le j\pi$,

$$
\left\lvert\frac{\sin u}{M\sin(u/M)}-\frac{\sin u}{u}\right\rvert
=\lvert\sin u\rvert\cdot\frac{\bigl\lvert u-M\sin(u/M)\bigr\rvert}{u\cdot M\sin(u/M)}
\le\frac{u^{3}/(6M^{2})}{u\cdot(2u/\pi)}
=\frac{\pi u}{12M^{2}}
\le\frac{\pi^{2}j}{12M^{2}} .
$$

The bound is independent of $u$ and tends to $0$, so

$$
\left\lvert S_n\!\left(\frac{j\pi}{M}\right)-\frac{2}{\pi}\operatorname{Si}(j\pi)\right\rvert
\le\frac{2}{\pi}\cdot j\pi\cdot\frac{\pi^{2}j}{12M^{2}}
=\frac{\pi^{2}j^{2}}{6M^{2}}\longrightarrow0 ,
$$

valid for every $n\ge j-1$. Since $j$ is fixed and $n\to\infty$, all but finitely many $n$ satisfy that, which is item 3, with the explicit rate $O(n^{-2})$.

**Step 5b: the rescaled limit (part 1, item 4).** Let $N\ge1$, $n=\lfloor(N-1)/2\rfloor$ and $M=2n+2$, so that $M=N+1$ for odd $N$ and $M=N$ for even $N$; in either case $M/N\to1$. Item 1 and the substitution $u=Mt$ give, for $c>0$,

$$
S_Nf\!\left(\frac{c}{N}\right)=\frac{2}{\pi}\int_0^{Mc/N}\frac{\sin u}{M\sin(u/M)}\,\mathrm{d}u .
$$

Two differences separate this from $\tfrac2\pi\operatorname{Si}(c)$. The integrand differs from $\sin u/u$ by at most $\pi u/(12M^{2})\le\pi c'/(6M^{2})$ on $[0,c']$ with $c'=2c$, by the estimate of Step 5, which contributes $O(M^{-2})$ after integration. And the upper limit $Mc/N$ differs from $c$ by $O(1/N)$, over which range the integrand is bounded: Jordan's inequality gives $M\sin(u/M)\ge2u/\pi$, so $\lvert\sin u\rvert/[M\sin(u/M)]\le\pi/2$. Both differences vanish as $N\to\infty$, leaving $\tfrac2\pi\int_0^c u^{-1}\sin u\,\mathrm{d}u$. For $c<0$ apply this to $-c$ and use that $f$ is odd, hence so is every $S_Nf$, and so is $\operatorname{Si}$.

**Step 6: the limiting maximum exceeds $1$.** By Steps 4 and 5 the limiting maximum is $\tfrac2\pi\operatorname{Si}(\pi)$, and $f(0+)=1=\tfrac2\pi\cdot\tfrac\pi2$, so the claim is $\operatorname{Si}(\pi)>\pi/2$. Since $\operatorname{Si}(\infty)=\pi/2$,

$$
\operatorname{Si}(\pi)-\frac{\pi}{2}=-\int_\pi^{\infty}\frac{\sin u}{u}\,\mathrm{d}u
=-\sum_{i=1}^{\infty}\int_{(2i-1)\pi}^{(2i+1)\pi}\frac{\sin u}{u}\,\mathrm{d}u ,
$$

and each of those two-arch integrals is negative, by the same pairing argument as in Step 4 applied with $1/u$ decreasing. So the difference is positive. This is Arfken, Weber and Harris's eq. (19.42). Its value follows from the power series of $\operatorname{Si}$, obtained by integrating that of $\sin u/u$ term by term (legitimate because the series converges uniformly on $[0,\pi]$, by the M-test):

$$
\operatorname{Si}(\pi)=\sum_{i=0}^{\infty}\frac{(-1)^{i}\pi^{2i+1}}{(2i+1)\,(2i+1)!}
=\pi-\frac{\pi^{3}}{18}+\frac{\pi^{5}}{600}-\frac{\pi^{7}}{35280}+\cdots
$$

The successive partial sums are $3.141593$, $1.419022$, $1.929055$, $1.843445$, $1.852573$, $1.851903$, $1.851938$, $1.851937$, converging to $\operatorname{Si}(\pi)=1.8519370519825$, whence $\tfrac2\pi\operatorname{Si}(\pi)=1.1789797444722$.

**Step 7: part 2, from the model jump to any.** For item 1, let $I$ be a closed interval containing no discontinuity of $g$. Enlarge it slightly to an open $I'\supset I$ still free of discontinuities. Shrink $I'$ if necessary so that it meets only finitely many arcs of the class-$D$ subdivision of $g$. On each of those closed arcs $g'$ extends continuously to the endpoints, by the definition of class $D$, hence is bounded there; so $g'$ is bounded on $I'$, and $g$, being continuous on $I'$ with a bounded derivative off finitely many points, is the integral of that derivative, that is absolutely continuous on $I'$, with $g'\in L^{p}(I')$ for every $p>1$; Folland's Corollary 8.45(b) then gives $S_Ng\to g$ uniformly on compact subsets of $I'$, and $I$ is one of them.

For item 2, set

$$
u=g-\frac{J}{2}\,f(\,\cdot-a),
$$

with $f$ the square wave of part 1. Both terms are in class $D$, so $u$ is. At $a$ their jumps cancel: $f$ jumps from $-1$ to $+1$ there, so $u(a+)=g(a+)-\tfrac12 J=m$ and $u(a-)=g(a-)+\tfrac12 J=m$, so the two one-sided limits of $u$ at $a$ agree. After redefining $u(a)=m$ — which Folland does explicitly at the corresponding step, and which changes no coefficient and so nothing downstream — $u$ is continuous at $a$. Choose $\delta>0$ small enough that $(a-\delta,a+\delta)$ contains no other discontinuity of $g$ and neither of the two discontinuities of $f(\,\cdot-a)$ other than $a$ itself — the nearest of those sits at $a\pm\pi$. Then $u$ has no discontinuity in $(a-\delta,a+\delta)$, so item 1 applied to $u$ gives $S_Nu\to u$ uniformly on $[a-\delta/2,a+\delta/2]$.

(This is where the square wave has to be handled locally rather than globally. Folland subtracts his one-jump-per-period sawtooth $\phi$ and gets a remainder that is continuous *everywhere*; Stakgold and Holst subtract Heaviside steps on an interval. Our model $f$ has two jumps per period, at $a$ and at $a+\pi$, so $u$ need not be continuous on the whole circle — only near $a$, which is all the limit below requires.)

Now fix $c\neq0$ and take $N$ so large that $\lvert c\rvert/N<\delta/2$. Splitting the partial sum along the definition of $u$,

$$
S_Ng\!\left(a+\frac{c}{N}\right)=\frac{J}{2}\,S_Nf\!\left(\frac{c}{N}\right)+S_Nu\!\left(a+\frac{c}{N}\right).
$$

The first term tends to $\tfrac J2\cdot\tfrac2\pi\operatorname{Si}(c)$ by part 1, item 4. For the second, write

$$
\left\lvert S_Nu\!\left(a+\frac cN\right)-m\right\rvert
\le\max_{[a-\delta/2,\,a+\delta/2]}\lvert S_Nu-u\rvert+\left\lvert u\!\left(a+\frac cN\right)-u(a)\right\rvert ,
$$

in which the first term vanishes by the uniform convergence just established and the second by the continuity of $u$ at $a$, since $a+c/N\to a$. So the second term tends to $m$, and item 2 follows.

Item 3 is the maximisation of $\operatorname{Si}$. Its derivative $\operatorname{Si}'(c)=\sin c/c$ is positive on $(0,\pi)$ and changes sign at every multiple of $\pi$, so the critical points are $c=j\pi$; the pairing argument of Step 6, with $1/u$ decreasing, shows $\operatorname{Si}(\pi)>\operatorname{Si}(3\pi)>\cdots$ and that every even-$j$ value is smaller still. Hence the maximum over $c>0$ is at $c=\pi$, with value $\operatorname{Si}(\pi)$; by oddness the minimum over $c<0$ is at $c=-\pi$. Multiplying by $J/2$ and adding $m$ gives the stated extreme values and, subtracting $g(a\pm)=m\pm\tfrac12 J$, the stated overshoot. The location $c=\pm\pi$ means $x-a=\pm\pi/N$. $\square$

:::

:::remark[Where the hypotheses are used]{provenance=adapted src="stakgold-holst-2011:§2.3, p. 136, the statement that the entire overshoot comes from the step terms, the filter reading and the Cesaro remark, and p. 137, the $13\\%$ figure for piecewise-linear fits; arfken-2013:§19.3, the approximation step before (19.38), p. 960, and the closing paragraph on other eigenfunction expansions, p. 961; folland-1999:§8.5, the remark on $\\lVert D_m\\rVert_1$, p. 264, and Exercise 37(c), p. 270; strauss-2008:§5.5, eq. (18), p. 142"}
**A genuine jump is needed, and nothing else about $f$ is.** If $J=0$ the square-wave term is absent and no overshoot occurs; this is the whole content of the statement that the overshoot is proportional to the jump. Conversely the proportionality constant $0.0894899$ does not depend on $f$ at all, which makes it a usable diagnostic: a reconstruction that overshoots by appreciably more or less than nine per cent of a known jump has something else wrong with it.

**Class $D$ is used only in Step 7**, and there twice: to make the remainder $u$ continuous and piecewise smooth near $a$, and to let Folland's Corollary 8.45(b) convert that into uniform convergence of $S_Nu$ near $a$. It cannot be weakened to continuity alone: the Fourier series of a merely continuous function need not converge uniformly, or even pointwise (:ref[]{to=fourier.dirichlet-convergence}), so the split into "a locally uniformly convergent part plus a square wave" would collapse and the nine-per-cent figure would not be justified by this argument. Note also that the subtraction is local by necessity, not by preference: the square wave carries a second jump half a period away, and only a model function with a single jump per period — Folland's sawtooth $\phi$ — gives a remainder that is continuous on the whole circle.

**Symmetric partial sums are assumed throughout**, and this matters more than it looks. The overshoot is a property of the *summation method*, not of the function: it is caused by the sign changes of the Dirichlet kernel, which is also what makes $\lVert D_N\rVert_1$ unbounded. Replace the partial sums by Cesàro means and the kernel becomes the Fejér kernel, which is non-negative; a non-negative kernel of unit mass produces a weighted average of values of $f$, and an average can never leave the range of $f$, so no overshoot is possible. Stakgold and Holst record exactly this, that Cesàro sums avoid the overshoot, and it is proved in :ref[]{to=fourier.fejer-theorem}.

**Nothing here contradicts pointwise convergence.** The limit in part 1, item 3 is taken along a *moving* point $j\pi/M$, which runs into the discontinuity. At any point $x$ held fixed away from the jump, :ref[]{to=fourier.dirichlet-convergence} still gives $S_Nf(x)\to f(x)$; and at the jump itself $S_Nf(a)\to m$. Strauss's way of recording the tension is that $\max\lvert S_N-f\rvert$ does not tend to zero although $S_N(x)-f(x)$ does for each $x$ away from the jump. Nor does Gibbs obstruct mean-square convergence: the spike has fixed height but width $O(1/N)$, so its contribution to $\int\lvert S_Nf-f\rvert^{2}$ is $O(1/N)$ and vanishes — see :ref[]{to=fourier.parseval-mean-square}.

**Two places where we supplied what a source assumed.** Arfken, Weber and Harris pass from their eq. (19.37) to (19.38) by replacing $\sin(\xi/2p)$ with $\xi/2p$ and calling it a good approximation; Hassani does the same with $\sin(\phi/2)$. Neither estimates the error. Step 5 supplies the estimate, and it is better than needed: the error is $O(n^{-2})$, which is also why the numerical table in the example converges so fast. Separately, Arfken, Weber and Harris locate the maximum at $x=\pi/p$ with $p=r+\tfrac12$, and Hassani at $\pi/(N+\tfrac12)$, whereas our exact statement for this square wave is $x=\pi/(2n+2)$; the three agree to leading order in the number of retained harmonics and differ in which index is being counted.

**Notation for the sine integral varies, and the numbers look different as a result.** We use the standard $\operatorname{Si}(u)=\int_0^u t^{-1}\sin t\,\mathrm{d}t$, with $\operatorname{Si}(\infty)=\pi/2$ and $\operatorname{Si}(\pi)=1.8519$. Stakgold and Holst normalise so that their $\mathrm{Si}(\infty)=1$ and their $\mathrm{Si}(\pi)\approx1.18$; theirs is $\tfrac2\pi$ times ours. Arfken, Weber and Harris use the complementary function $\operatorname{si}(u)=-\int_u^{\infty}t^{-1}\sin t\,\mathrm{d}t=\operatorname{Si}(u)-\pi/2$, so their statement "$\operatorname{si}(\pi)>0$ indicates an overshoot" is our Step 6, and $\operatorname{si}(\pi)=\operatorname{Si}(\pi)-\pi/2=0.28114$.

**The phenomenon is not special to Fourier series.** Arfken, Weber and Harris note that it occurs in other eigenfunction expansions, and Stakgold and Holst go further: it appears whenever the approximation is a least-squares fit, their example being the best piecewise-linear fit to a square wave on equally spaced nodes, which overshoots by about $13\%$ of the jump as the spacing is refined. The common cause is that a least-squares fit from a space of continuous functions must trade an error near the jump against an error further away, and the trade is settled by the geometry of the space, not by the data.
:::

:::method[Working next to a jump]{provenance=adapted src="stakgold-holst-2011:§2.3, the low-pass filter reading and the Cesaro remark, p. 136; arfken-2013:§19.3, the closing paragraph and Additional Readings (the Lanczos convergence technique), pp. 961–962; folland-1999:§8.5, Cor. 8.45, p. 268"}
1. **Find out whether there is a jump at all.** Run step 2 of the method of :ref[]{to=fourier.dirichlet-convergence} on the *periodic extension*, not on the formula you were given. Most Gibbs surprises are jumps accidentally created at the ends of the period interval by a careless extension.
2. **Quarantine a neighbourhood of each jump.** Within a distance of a few times $\pi/N$ of a discontinuity, a truncated series carries an $O(1)$ error, not an $O(1/N)$ one. Do not read values off there, do not difference them, and do not feed them to a nonlinear step such as a limiter, a logarithm or a square root.
3. **Predict the overshoot and check it.** Beyond each one-sided value, expect $0.0895$ times the jump, with the first extremum about $\pi/N$ away. If your output disagrees badly, suspect the coefficients rather than the theorem.
4. **Choose a cure deliberately.** In rough order of cost:
   - *Change the summation.* Cesàro or Fejér means remove the overshoot entirely, because their kernel is non-negative (:ref[]{to=fourier.fejer-theorem}); the price is slower convergence where $f$ is smooth.
   - *Taper the coefficients.* Multiply $\hat f(n)$ by a window $w(n/N)$ falling smoothly to zero at $n=N$ instead of cutting off abruptly — a raised cosine, or the Lanczos smoothing that Arfken, Weber and Harris point to. This is the same device as the previous one with a different taper, and it is what signal-processing practice means by windowing.
   - *Subtract the jump analytically.* Use the decomposition of Step 7: subtract $\tfrac12 J\,f(\cdot-a)$ with $f$ the square wave, expand the continuous remainder — which now converges uniformly — and add the closed-form square-wave series back at the end. This keeps full accuracy away from the jump and is exact, but it requires knowing where the jumps are.
   - *Change the representation.* Put the discontinuity on a cell boundary and use a finite-volume or discontinuous-Galerkin discretisation, or expand in a basis that already contains the jump.
5. **Do not take more terms and hope.** Item 3 of part 1 is precisely the statement that this does not work: more terms move the spike closer to the jump and leave its height alone.
6. **Check which norm you actually need.** If the requirement is mean-square accuracy, or an integral of the reconstruction, Gibbs is harmless and no cure is called for; the spike's area is $O(1/N)$. Only pointwise or uniform requirements near the jump are affected.
:::

:::example[The square wave counted out, and the same nine per cent on a sawtooth]{provenance=original}
**Part A: the square wave, exactly.** Take $f=\operatorname{sgn}$ on $(-\pi,\pi)$, extended with period $2\pi$. By Step 1 the partial sum with $n+1$ nonzero terms, highest harmonic $2n+1$, is

$$
S_n(x)=\frac{4}{\pi}\sum_{k=0}^{n}\frac{\sin\bigl[(2k+1)x\bigr]}{2k+1} .
$$

Take $n=9$: ten terms, harmonics $1,3,\dots,19$. By item 2 the maximum sits at $x_1=\pi/M=\pi/20=0.15707963$. Evaluating there, with $\sin[(2k+1)\pi/20]$ for $k=0,\dots,9$:

$$
S_9\!\left(\frac{\pi}{20}\right)=\frac{4}{\pi}\left(\frac{\sin 9^{\circ}}{1}+\frac{\sin 27^{\circ}}{3}+\frac{\sin 45^{\circ}}{5}+\cdots+\frac{\sin 171^{\circ}}{19}\right)=1.17981402 .
$$

The function's value just to the right of the jump is $1$, so ten terms overshoot by $0.17981$, which is $8.991\%$ of the jump $J=2$. The predicted limit is $0.0894899\times2=0.1789797$. Running $n$ up:

| terms $n+1$ | $x_1=\pi/(2n+2)$ | $S_n(x_1)$ | overshoot | as % of $J=2$ |
|---|---|---|---|---|
| $3$ | $0.5235988$ | $1.18835691$ | $0.18835691$ | $9.418\%$ |
| $5$ | $0.3141593$ | $1.18232821$ | $0.18232821$ | $9.116\%$ |
| $10$ | $0.1570796$ | $1.17981402$ | $0.17981402$ | $8.991\%$ |
| $20$ | $0.0785398$ | $1.17918814$ | $0.17918814$ | $8.959\%$ |
| $50$ | $0.0314159$ | $1.17901308$ | $0.17901308$ | $8.951\%$ |
| $100$ | $0.0157080$ | $1.17898808$ | $0.17898808$ | $8.949\%$ |
| $500$ | $0.0031416$ | $1.17898008$ | $0.17898008$ | $8.949\%$ |
| $\infty$ | $0$ | $1.17897974$ | $0.17897974$ | $8.94899\%$ |

Two things to read off. The height column is converging to $\tfrac2\pi\operatorname{Si}(\pi)$, and the convergence is quadratic in $1/n$ exactly as Step 5 predicts: the errors against the limit are $3.35\times10^{-3}$, $8.34\times10^{-4}$ and $2.08\times10^{-4}$ for $5$, $10$ and $20$ terms, falling by a factor of four each time the term count doubles. The position column is converging to $0$ like $1/n$. Height fixed, width shrinking: that is the whole phenomenon in two columns.

**Part B: the ladder of critical values.** Item 3 predicts $S_n(j\pi/M)\to\tfrac2\pi\operatorname{Si}(j\pi)$ for every $j$, alternately above and below $1$. With $n=199$ (two hundred terms, $M=400$):

| $j$ | $S_{199}(j\pi/400)$ | $\tfrac{2}{\pi}\operatorname{Si}(j\pi)$ |
|---|---|---|
| $1$ | $1.1789818$ | $1.1789797$ |
| $2$ | $0.9028192$ | $0.9028233$ |
| $3$ | $1.0661927$ | $1.0661865$ |
| $4$ | $0.9499310$ | $0.9499393$ |

Five or six figures agree in each row, and the maxima $1.17898>1.06619>\cdots$ decrease while the minima $0.90282<0.94994<\cdots$ increase, confirming both the alternation of Step 3 and the claim of Step 4 that $j=1$ gives the global maximum.

**Part C: a different jump, to test the proportionality.** Now take the sawtooth: $g(x)=x$ on $(-\pi,\pi)$, extended with period $2\pi$, whose series is $g\sim2\sum_{n\ge1}(-1)^{n+1}n^{-1}\sin nx$. At $x=\pi$ it jumps from $g(\pi-)=\pi$ down to $g(\pi+)=-\pi$, so $J=-2\pi$ and $\lvert J\rvert=6.2831853$. Part 2 predicts an overshoot above $g(\pi-)=\pi$ of $0.0894899\times6.2831853=0.5622816$; the exact value of that overshoot is $\bigl(\tfrac2\pi\operatorname{Si}(\pi)-1\bigr)\pi=0.5622815$, the last figure differing only because the constant was rounded to seven places before multiplying. The limiting maximum is therefore

$$
\pi+\Bigl(\frac{2}{\pi}\operatorname{Si}(\pi)-1\Bigr)\pi=2\operatorname{Si}(\pi)=3.7038741,
$$

which is the square-wave result rescaled by $\lvert J\rvert/2=\pi$, as it must be. Maximising $S_N g$ numerically near $x=\pi$:

| $N$ | $\max S_Ng$ | distance from $\pi$ | $(N+1)\times$ distance |
|---|---|---|---|
| $20$ | $3.5530870$ | $0.14959965$ | $3.1415927$ |
| $100$ | $3.6727179$ | $0.03110488$ | $3.1415927$ |
| $500$ | $3.6976014$ | $0.00627064$ | $3.1415927$ |
| $2000$ | $3.7023040$ | $0.00157001$ | $3.1415927$ |
| $\infty$ | $3.7038741$ | $0$ | $\pi$ |

The maxima climb to $2\operatorname{Si}(\pi)=3.7038741$, confirming the nine-per-cent figure for a jump $\pi$ times larger than the square wave's. The last column is $\pi$ in every row, and exactly so: the critical points here solve $D_N(s)=1$ rather than $\sin(Ms)=0$, and $s=\pi/(N+1)$ is a root because $(N+\tfrac12)s=\pi-\tfrac12 s$ there, which makes the numerator and denominator of the Dirichlet kernel equal. The first extremum therefore sits at distance $\pi/(N+1)$ from the discontinuity — the same $\pi/(H+1)$ rule as the square wave, with $H$ the highest harmonic kept, and to the eye half a wavelength of that harmonic. Every number in this example was computed to twenty significant figures with mpmath and the two Fourier series were checked symbolically; the entries above are the correctly rounded values.
:::

:::application{provenance=original}
**Ringing in a filtered signal.** An ideal "brick-wall" low-pass filter passes frequencies below a cutoff and removes the rest, which is precisely truncating a Fourier series; Stakgold and Holst make exactly this identification, noting that the output for a square-wave input *is* a partial sum. So a logic edge, or any fast transition, emerges from such a filter with a $9\%$ overshoot of the step height followed by decaying oscillations at the cutoff frequency, spaced by half a period of that frequency. The engineering response is step 4 of the method: no practical filter uses a brick wall, and the Hann, Hamming and Kaiser windows of filter design are coefficient tapers in the sense of that step. The trade is explicit and unavoidable — a gentler taper reduces the overshoot and widens the transition.

**Truncation artefacts in imaging.** Magnetic resonance imaging samples a finite region of $k$-space, which is a two-dimensional Fourier truncation; computed tomography reconstructions truncate a filtered projection. Both therefore show Gibbs ringing at sharp boundaries — bright and dark fringes paralleling a tissue interface, whose first bright line is $9\%$ of the intensity step above the brighter tissue and lies about one pixel-scale from the edge. Radiologists call it truncation or ringing artefact, and the standard mitigation, apodisation of the $k$-space data, is again the taper of step 4. Knowing the constant matters clinically: a $9\%$ bright rim is an artefact to be read past, whereas a $50\%$ one is not.

**Shocks in spectral methods.** A Fourier spectral discretisation of a conservation law (:ref[]{to=num.spectral-methods}, :ref[]{to=pde.conservation-laws-shocks}) is accurate beyond any fixed order while the solution stays smooth, and loses that advantage the instant a shock forms: the numerical solution then oscillates about the shock with amplitude set by the jump, not by the resolution, and refining the grid only narrows the oscillation. Worse, the oscillations can push a physically positive quantity — a density, a pressure, a mass fraction — negative on the undershooting side, at which point an equation of state or a square root fails and the computation stops. This is step 2 of the method as an operational rule, and it is why production spectral codes carry a filter or a spectral-viscosity term, and why shock-capturing schemes are built on finite volumes instead.

**Block-transform image compression.** Quantising or discarding the high-frequency coefficients of an $8\times8$ cosine transform block is a truncation of the same kind, and near a sharp edge it produces the same overshoot, visible as the shimmering halo that image coders call mosquito noise. The size of the artefact scales with the contrast across the edge, exactly as part 2 says, which is why high-contrast text on a flat background is the worst case for such a coder and why text is usually coded by other means.
:::
