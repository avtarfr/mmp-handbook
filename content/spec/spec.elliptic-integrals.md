---
id: spec.elliptic-integrals
title: Elliptic integrals
kind: definition
level: core
summary: "The incomplete and complete elliptic integrals of the first and second kinds, their binomial series and hypergeometric forms, and the exact period of a pendulum of arbitrary amplitude."
prereqs: [found.power-series, spec.hypergeometric]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§18.8, Example 18.8.1 (period of a simple pendulum), eqs. (18.164)–(18.168), pp. 927–928; Definitions, eqs. (18.169)–(18.174), pp. 928–929; Series Expansions, eqs. (18.175)–(18.177), p. 929; Limiting Values, eqs. (18.178)–(18.179) and the remark on reducing integrals of rational functions of a quartic, p. 930; Exercises 18.8.1 and 18.8.4, pp. 931–932"
    pages: "927-932"
    role: the definitions of $F$, $E$, $K$ and $E(m)$ in both the trigonometric and the algebraic form with the AMS-55 separators, the parameter convention $m=\sin^2\alpha$, the energy-conservation derivation of the pendulum period and the half-angle substitution, the binomial series for $K$ and $E$ and their identification as hypergeometric functions, the limiting values at $m\to0$ and $m\to1$ with the logarithmic divergence, and the arc of an ellipse and the vector potential of a current loop as applications
  - work: strogatz-1994
    loc: "Exercise 6.7.4 (Period of the pendulum), parts (a)–(d), with the definition of $K(m)$ displayed there, pp. 192–193"
    pages: "192-193"
    role: the same derivation organised as a sequence of substitutions — energy conservation, the half-angle formula, and the change of variable that moves the amplitude out of the limits of integration and into the integrand — ending in $T = 4K(\sin^2(\alpha/2))$, and the request for the small-amplitude expansion through order $\alpha^4$
  - work: ahlfors-1979
    loc: "Ch. 6, §2.3 (Mapping on a Rectangle), the Schwarz–Christoffel integral for a rectangle and the quantities $K$ and $K'$, pp. 238–240"
    pages: "238-240"
    role: the complete integrals in modulus form as the side lengths of the rectangle onto which the upper half-plane is mapped by an elliptic integral, and the fact that the inverse function extends by reflection to a meromorphic function with periods $2K$ and $2\mathrm{i}K'$
---

:::definition[The four standard integrals, and the three conventions]{provenance=adapted src="arfken-2013:§18.8, eqs. (18.169)–(18.174), pp. 928–929; strogatz-1994:Exercise 6.7.4(c), the displayed definition of $K(m)$, p. 193; ahlfors-1979:Ch. 6, §2.3, the displayed integrals for $K$ and $K'$, pp. 239–240"}
The **incomplete elliptic integral of the first kind** is
$$
F(\varphi \,\backslash\, \alpha) = \int_0^{\varphi}\bigl(1-\sin^2\alpha\,\sin^2\theta\bigr)^{-1/2}\,\mathrm{d}\theta ,
\qquad\text{equivalently}\qquad
F(x\,\vert\, m) = \int_0^{x}\Bigl[(1-t^2)(1-mt^2)\Bigr]^{-1/2}\mathrm{d}t ,
$$
and the **incomplete elliptic integral of the second kind** is
$$
E(\varphi\,\backslash\,\alpha) = \int_0^{\varphi}\bigl(1-\sin^2\alpha\,\sin^2\theta\bigr)^{1/2}\,\mathrm{d}\theta ,
\qquad
E(x\,\vert\, m) = \int_0^{x}\left(\frac{1-mt^2}{1-t^2}\right)^{1/2}\mathrm{d}t .
$$
The two forms of each are the same integral after $t=\sin\theta$. Setting the upper limit to $\varphi=\pi/2$, equivalently $x=1$, gives the **complete** integrals
$$
K(m) = \int_0^{\pi/2}\bigl(1-m\sin^2\theta\bigr)^{-1/2}\mathrm{d}\theta ,
\qquad
E(m) = \int_0^{\pi/2}\bigl(1-m\sin^2\theta\bigr)^{1/2}\mathrm{d}\theta ,
$$
with $0 \le m < 1$ for $K$ and $0 \le m \le 1$ for $E$.

**Three names for one number.** The quantity $m$ in the displays above is the **parameter**; Arfken, Weber and Harris relate it to the **modular angle** $\alpha$ by $m = \sin^2\alpha$, and it is also written $m = k^2$, where $k$ is the **modulus**. All three are in use:

| Written | Argument | Who |
|---|---|---|
| $K(m)$, $E(m)$ | parameter $m$ | Arfken, Weber and Harris; Strogatz; most software, including the `ellipk`/`ellipe` of the standard numerical libraries |
| $K(k)$, $E(k)$ | modulus $k=\sqrt m$ | much of the classical literature, and Arfken, Weber and Harris themselves in their exercises, where $K(k^2)$ is written |
| $F(\varphi\backslash\alpha)$ | modular angle | AMS-55 tables |

The backslash and the vertical bar in the AMS-55 notation are not decoration: they say which of the three the second argument is. Confusing $K(1/2)=1.8541$ with $K(k=1/2)=K(m=1/4)=1.6858$ is the commonest error in using these functions, and the only protection is to state the convention. **In this unit the argument is always the parameter $m$.** Ahlfors, writing the integrals as $\int_0^1\mathrm{d}t/\sqrt{(1-t^2)(1-k^2t^2)}$, uses the modulus; his $K$ is our $K(k^2)$.

The integrals are called *elliptic* because the second kind first appeared as the arc length of an ellipse, not because their graphs are elliptical, and the adjective has since attached itself to the whole family — including the doubly periodic *elliptic functions*, which are the inverse functions of the first-kind integral.
:::

:::statement[Series, hypergeometric form, limits, and the pendulum period]{provenance=adapted src="arfken-2013:§18.8, eqs. (18.175)–(18.179), pp. 929–930, and Example 18.8.1, eqs. (18.164)–(18.168), pp. 927–928; strogatz-1994:Exercise 6.7.4, pp. 192–193"}
1. **Series.** For $0 \le m < 1$,
   $$
   K(m) = \frac{\pi}{2}\left\{1 + \sum_{n=1}^{\infty}\left[\frac{(2n-1)!!}{(2n)!!}\right]^2 m^n\right\}
   = \frac{\pi}{2}\left(1+\frac{m}{4}+\frac{9m^2}{64}+\frac{25m^3}{256}+\cdots\right),
   $$
   $$
   E(m) = \frac{\pi}{2}\left\{1 - \sum_{n=1}^{\infty}\left[\frac{(2n-1)!!}{(2n)!!}\right]^2 \frac{m^n}{2n-1}\right\}
   = \frac{\pi}{2}\left(1-\frac{m}{4}-\frac{3m^2}{64}-\frac{5m^3}{256}-\cdots\right).
   $$
2. **Hypergeometric form.** Both series are instances of the Gauss series of :ref[]{to=spec.hypergeometric}:
   $$
   K(m) = \frac{\pi}{2}\,{}_2F_1\!\left(\tfrac12,\tfrac12;1;m\right), \qquad
   E(m) = \frac{\pi}{2}\,{}_2F_1\!\left(-\tfrac12,\tfrac12;1;m\right).
   $$
3. **Limits.**
   $$
   \lim_{m\to0}K(m) = \lim_{m\to0}E(m) = \frac{\pi}{2}, \qquad
   \lim_{m\to1}E(m) = 1, \qquad K(m)\to\infty \ \text{as}\ m\to1 ,
   $$
   the last divergence being logarithmic.
4. **The pendulum.** A rigid pendulum of length $l$ in gravity $g$, released from rest at angle $\theta_M$ with $0<\theta_M<\pi$, has exact period
   $$
   T = 4\sqrt{\frac{l}{g}}\;K\!\left(\sin^2\frac{\theta_M}{2}\right) .
   $$
   In particular $T \to 2\pi\sqrt{l/g}$ as $\theta_M\to0$ and $T\to\infty$ as $\theta_M\to\pi$.
:::

:::idea{provenance=original}
Neither $K$ nor $E$ is elementary, and the reason is visible in the pendulum: the exact equation of motion is $\ddot\theta = -(g/l)\sin\theta$, and the one first integral available — energy — turns the second-order equation into a quadrature $\mathrm{d}t \propto \mathrm{d}\theta/\sqrt{\cos\theta-\cos\theta_M}$. That is as far as elementary methods go. The integral that remains is not elementary, so one names it, and the whole theory is the study of that name.

The series come from the only expansion available. In $K(m)$ the integrand is $(1-u)^{-1/2}$ with $u = m\sin^2\theta$ never exceeding $m<1$, so the binomial series converges uniformly in $\theta$ and may be integrated term by term; each term is then $\int_0^{\pi/2}\sin^{2n}\theta\,\mathrm{d}\theta$, a Wallis integral with the closed form $(\pi/2)(2n-1)!!/(2n)!!$. Multiplying the two double-factorial ratios — one from the binomial coefficient, one from Wallis — is what produces the *square* in the answer, and that square is the signature of ${}_2F_1(\tfrac12,\tfrac12;1;m)$.

The pendulum formula needs one further trick, and it is worth seeing why. After the half-angle identity the integral is $\int_0^{\theta_M}\mathrm{d}\theta/\sqrt{\sin^2(\theta_M/2)-\sin^2(\theta/2)}$, which is singular at the upper limit and has the amplitude in *both* the integrand and the limit. The substitution $\sin(\theta/2) = \sin(\theta_M/2)\sin\varphi$ fixes both complaints at once: the upper limit becomes $\pi/2$ regardless of amplitude, and the square root that vanished at the endpoint cancels identically against the Jacobian. What is left is $K$ by definition. Why this amplitude ends up as $m=\sin^2(\theta_M/2)$ rather than anything else is the content of that single substitution.
:::

:::proof{provenance=adapted src="arfken-2013:§18.8, the term-by-term integration leading to (18.175)–(18.176) and the comparison with §18.5 giving (18.177), p. 929, and Example 18.8.1, eqs. (18.164)–(18.168), pp. 927–928; strogatz-1994:Exercise 6.7.4(a)–(c), pp. 192–193"}
**1. The series for $K$.** Fix $0\le m<1$. For $\lvert u\rvert<1$ the binomial series is
$$
(1-u)^{-1/2} = \sum_{n=0}^{\infty}\frac{(2n-1)!!}{(2n)!!}\,u^{n},
$$
with $(-1)!!=0!!=1$; the coefficients are $\binom{-1/2}{n}(-1)^n$, and the double-factorial form follows by induction from the ratio $(2n-1)/(2n)$ between consecutive coefficients. Put $u = m\sin^2\theta$. Then $0\le u\le m<1$ for every $\theta$, so the series converges uniformly in $\theta$ by the Weierstrass test, dominated by the convergent numerical series $\sum_n \bigl[(2n-1)!!/(2n)!!\bigr]m^n$. Uniform convergence permits term-by-term integration over the bounded interval $[0,\pi/2]$ (:ref[]{to=found.power-series}):
$$
K(m) = \sum_{n=0}^{\infty}\frac{(2n-1)!!}{(2n)!!}\,m^{n}\int_0^{\pi/2}\sin^{2n}\theta\,\mathrm{d}\theta .
$$
The remaining integral is Wallis's: integrating by parts once gives the recursion $W_n = \frac{2n-1}{2n}W_{n-1}$ with $W_0=\pi/2$, hence $W_n = \frac{\pi}{2}\frac{(2n-1)!!}{(2n)!!}$. Substituting it produces the squared coefficient and the stated series. The same computation with the exponent $+\tfrac12$, whose binomial coefficients are $-\bigl[(2n-1)!!/(2n)!!\bigr]/(2n-1)$ for $n\ge1$, gives the series for $E$; Arfken, Weber and Harris leave this one as an exercise and we have reproduced it.

**2. Hypergeometric identification.** Compare coefficients. In ${}_2F_1(\tfrac12,\tfrac12;1;m) = \sum_n \bigl[(\tfrac12)_n\bigr]^2 m^n/\bigl[(1)_n n!\bigr]$ we have $(1)_n = n!$ and
$$
\left(\tfrac12\right)_n = \tfrac12\cdot\tfrac32\cdots\tfrac{2n-1}{2} = \frac{(2n-1)!!}{2^n},
\qquad
n! = \frac{(2n)!!}{2^n},
$$
the second because $(2n)!! = 2^n n!$. Hence $(\tfrac12)_n/n! = (2n-1)!!/(2n)!!$ and the $n$th coefficient of the Gauss series is exactly $\bigl[(2n-1)!!/(2n)!!\bigr]^2$, which is the coefficient in part 1. For $E$ the numerator parameter $-\tfrac12$ gives $(-\tfrac12)_n = -\frac{(2n-3)!!}{2^n}$ for $n\ge1$, and $(2n-3)!! = (2n-1)!!/(2n-1)$, which supplies the extra factor $-1/(2n-1)$. Both identities hold wherever both sides converge, that is on $\lvert m\rvert<1$.

**3. Limits.** At $m=0$ both integrands are $1$ and the integrals are $\pi/2$. At $m=1$ the second integrand is $\lvert\cos\theta\rvert$, so $E(1)=\int_0^{\pi/2}\cos\theta\,\mathrm{d}\theta=1$. For $K$ near $m=1$, the integrand $(1-m\sin^2\theta)^{-1/2}$ develops a non-integrable square-root singularity at $\theta=\pi/2$ in the limit; for $m<1$ write $1-m\sin^2\theta = (1-m)+m\cos^2\theta$, so near $\theta=\pi/2$ the integrand behaves like $[(1-m)+m(\pi/2-\theta)^2]^{-1/2}$, whose integral over a neighbourhood is $\sim m^{-1/2}\ln\bigl[1/\sqrt{1-m}\bigr]$. The divergence is therefore logarithmic in $1-m$, as Arfken, Weber and Harris state. Note that the series of part 1 is useless here — its coefficients tend to zero only like $1/n$, so at $m=1$ it is a divergent harmonic-type series, which is precisely the divergence showing itself.

**4. The pendulum period.** Let $\theta$ be the angle from the downward vertical. Taking the potential energy to be $-mgl\cos\theta$ and the kinetic energy $\tfrac12 ml^2\dot\theta^2$, and evaluating the total at the release point, where $\dot\theta=0$ and $\theta=\theta_M$,
$$
\tfrac12 ml^2\dot\theta^2 - mgl\cos\theta = -mgl\cos\theta_M ,
$$
so the mass cancels and
$$
\dot\theta = \pm\sqrt{\frac{2g}{l}}\,\bigl(\cos\theta-\cos\theta_M\bigr)^{1/2} .
$$
Take the quarter period from $\theta=0$ (moving in the positive direction) to $\theta=\theta_M$, where the motion reverses. Separating variables,
$$
\frac{T}{4} = \sqrt{\frac{l}{2g}}\int_0^{\theta_M}\frac{\mathrm{d}\theta}{\sqrt{\cos\theta-\cos\theta_M}} .
$$
That this quarter arc really is a quarter of the period is the symmetry of the problem under $t\mapsto-t$ and under $\theta\mapsto-\theta$, both of which the equation of motion respects.

Now the half-angle identity $\cos\theta = 1-2\sin^2(\theta/2)$ turns the radicand into $2\bigl[\sin^2(\theta_M/2)-\sin^2(\theta/2)\bigr]$, so
$$
\frac{T}{4} = \frac12\sqrt{\frac{l}{g}}\int_0^{\theta_M}\frac{\mathrm{d}\theta}{\sqrt{\sin^2(\theta_M/2)-\sin^2(\theta/2)}} .
$$
Write $\sqrt m = \sin(\theta_M/2)$ and substitute
$$
\sin\frac{\theta}{2} = \sqrt m\,\sin\varphi ,
$$
which is a genuine change of variable because $\theta_M<\pi$ makes $\sin(\theta/2)$ strictly increasing on $[0,\theta_M]$, and which carries $\theta=0$ to $\varphi=0$ and $\theta=\theta_M$ to $\varphi=\pi/2$. Differentiating, $\tfrac12\cos(\theta/2)\,\mathrm{d}\theta = \sqrt m\cos\varphi\,\mathrm{d}\varphi$, and $\cos(\theta/2) = \sqrt{1-m\sin^2\varphi}$, so
$$
\mathrm{d}\theta = \frac{2\sqrt m\cos\varphi}{\sqrt{1-m\sin^2\varphi}}\,\mathrm{d}\varphi ,
$$
while the denominator becomes $\sqrt{m-m\sin^2\varphi} = \sqrt m\cos\varphi$. The factors $\sqrt m\cos\varphi$ cancel exactly — this is the point of the substitution — leaving
$$
\frac{T}{4} = \frac12\sqrt{\frac{l}{g}}\int_0^{\pi/2}\frac{2\,\mathrm{d}\varphi}{\sqrt{1-m\sin^2\varphi}} = \sqrt{\frac{l}{g}}\,K(m) ,
$$
which is the assertion. Arfken, Weber and Harris carry out the same two steps, remarking that the half-angle substitution takes "a bit of clairvoyance"; Strogatz's Exercise 6.7.4 is this derivation split into the three parts (a), (b), (c). The small-amplitude limit is $m\to0$, where $K\to\pi/2$ and $T\to2\pi\sqrt{l/g}$; the large-amplitude limit is $\theta_M\to\pi$, where $m\to1$ and $K$ diverges, the physical statement that a pendulum balanced at the top takes forever to fall. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$m<1$ for the series.** Uniform convergence of the binomial expansion needs $\sup_\theta m\sin^2\theta = m < 1$. At $m=1$ the expansion still converges pointwise for $\theta<\pi/2$ but not uniformly, and term-by-term integration fails — correctly, since the sum diverges while every term is finite. This is not a gap in the proof but the logarithmic divergence of part 3 seen from the series side.
- **$m\le1$ for $E$, $m<1$ for $K$.** The integrand of $E$ stays bounded as $m\to1$ (it becomes $\cos\theta$), so $E$ extends continuously to $m=1$; the integrand of $K$ does not.
- **$0<\theta_M<\pi$ in the pendulum.** The lower bound is needed for the problem to be non-trivial; the upper bound is needed twice. First, $\sin(\theta_M/2)<1$ keeps $m<1$, so that $K(m)$ is finite. Second, the substitution $\sin(\theta/2)=\sqrt m\sin\varphi$ must be invertible on the range of motion, which requires $\theta/2$ to stay in $[0,\pi/2)$ where the sine is injective. At $\theta_M=\pi$ both fail together, and the solution is no longer periodic at all: it is the separatrix, on which the bob approaches the inverted position asymptotically and never returns. The formula's divergence is therefore the right answer, not a breakdown.
- **Rigid rod, no damping, no driving.** The energy integral is the whole method, and it exists only because the system is conservative. Add the smallest linear damping and $T$ is no longer defined; the motion spirals in. A pendulum on a string rather than a rod additionally requires the string to stay taut, which holds for $\theta_M\le\pi/2$ but not beyond.
- **Which $m$?** Every statement above is in the parameter convention. In the modulus convention the pendulum period is $4\sqrt{l/g}\,K(k)$ with $k=\sin(\theta_M/2)$, which *looks* different and is the same. Mixing the two silently is how a factor appears in a period and is then blamed on the physics.
:::

:::method[Reducing an integral to standard form]{provenance=adapted src="arfken-2013:§18.8, the remark on integrals of a rational function of $t$ and the square root of a quartic, p. 930, and the definitions (18.169)–(18.174), pp. 928–929"}
Arfken, Weber and Harris record the general fact: any integral
$$
\int_0^{x} R\!\left(t,\;\sqrt{a_4t^4+a_3t^3+a_2t^2+a_1t+a_0}\right)\mathrm{d}t ,
$$
with $R$ rational in its two arguments, can be expressed in terms of elliptic integrals (and elementary functions). In practice one proceeds as follows.

1. **Check the degree.** A square root of a quadratic gives an elementary answer (inverse trigonometric or inverse hyperbolic); a cubic or a quartic gives elliptic integrals; a quintic or higher generally does not — those are hyperelliptic and have no classical closed form.
2. **Factor the quartic** into real linear and quadratic factors. The positions of the roots relative to the range of integration decide which standard form is reachable.
3. **Normalise by a Möbius substitution** $t\mapsto(\alpha u+\beta)/(\gamma u+\delta)$ chosen to send two of the roots to $\pm1$ and the other two to $\pm1/k$. This is always possible and is what brings the radicand to the Legendre form $(1-u^2)(1-k^2u^2)$.
4. **Split the rational part.** With the radicand in standard form, write $R$ as a sum of terms of the shapes $1/\sqrt{\cdot}$, $u^2/\sqrt{\cdot}$ and $1/[(1-nu^2)\sqrt{\cdot}]$. These integrate to the first, second and third kinds respectively.
5. **Recognise a trigonometric problem directly.** When the integral already has the shape $\int\mathrm{d}\theta/\sqrt{1-m\sin^2\theta}$ — as the pendulum does after the half-angle step — stop: it is $F(\varphi\backslash\alpha)$ with $m=\sin^2\alpha$, complete if $\varphi=\pi/2$.
6. **Evaluate.** Use the series of part 1 of the statement for $m\lesssim0.5$, where it converges quickly; for $m$ near $1$ use the arithmetic–geometric mean, which converges quadratically for every $m<1$ and is what numerical libraries actually implement, or the logarithmic expansion about $m=1$.

**A caution on step 6.** The series is a poor tool near $m=1$ for the reason given in the remark; conversely the arithmetic–geometric mean iteration $a_{j+1}=(a_j+b_j)/2$, $b_{j+1}=\sqrt{a_jb_j}$ started from $a_0=1$, $b_0=\sqrt{1-m}$ converges so fast that $K(m)=\pi/(2\,\mathrm{AGM})$ is accurate to machine precision in four or five steps. It degrades only as $m\to1$, where $b_0\to0$.
:::

:::example[A pendulum released from the horizontal]{provenance=original}
Take a rigid pendulum of length $l=1.000\ \mathrm{m}$ in $g=9.80665\ \mathrm{m\,s^{-2}}$, released from rest at $\theta_M = 90^\circ$.

**Step 1: the small-angle period, for comparison.**
$$
T_0 = 2\pi\sqrt{\frac{l}{g}} = 2\pi\sqrt{0.1019716} = 2\pi(0.3193299) = 2.006409\ \mathrm{s}.
$$

**Step 2: the parameter.** $\theta_M/2 = 45^\circ$, so
$$
m = \sin^2 45^\circ = \left(\frac{\sqrt2}{2}\right)^2 = \frac12 .
$$

**Step 3: evaluate $K(1/2)$ from the series.** With $m=\tfrac12$ the terms of part 1 of the statement are
$$
1,\quad \frac{m}{4}=0.125,\quad \frac{9m^2}{64}=0.035156,\quad \frac{25m^3}{256}=0.012207,\quad \frac{1225 m^4}{16384}=0.004673,\ \dots
$$
Partial sums times $\pi/2$ give $1.570796,\ 1.767146,\ 1.822369,\ 1.841544,\ 1.848884,\ \dots$, and after twelve terms $1.854056$. The limit, which the arithmetic–geometric mean returns at once, is
$$
K(1/2) = 1.8540746773 .
$$
(As a check that nothing has been dropped, direct numerical quadrature of $\int_0^{\pi/2}(1-\tfrac12\sin^2\theta)^{-1/2}\mathrm{d}\theta$ gives the same ten digits, as does $\tfrac{\pi}{2}\,{}_2F_1(\tfrac12,\tfrac12;1;\tfrac12)$ from part 2.)

**Step 4: the period.**
$$
T = 4\sqrt{\frac{l}{g}}\,K(1/2) = 4(0.3193299)(1.8540747) = 2.368246\ \mathrm{s} ,
$$
so
$$
\frac{T}{T_0} = \frac{2}{\pi}K(1/2) = 1.1803406 .
$$
**A pendulum released from the horizontal runs $18.03\%$ slow compared with the small-angle formula.** For a seconds pendulum that is more than half an hour a day.

**Step 5: how good is the leading correction?** Expanding $m = \sin^2(\theta_M/2) = \theta_M^2/4-\theta_M^4/48+\cdots$ and feeding it into the series of part 1 gives
$$
T = T_0\left(1+\frac{\theta_M^2}{16}+\frac{11\,\theta_M^4}{3072}+\cdots\right) ,
$$
the $\theta_M^4$ coefficient coming from $-\tfrac{1}{192}+\tfrac{9}{1024} = \tfrac{11}{3072}$. At $\theta_M=\pi/2$ the first correction alone gives $1+\pi^2/64 = 1.15421$, which captures only $85.5\%$ of the true correction; adding the quartic term gives $1.17601$, and the exact answer is $1.18034$. The moral is that the small-angle expansion is an expansion in $\theta_M^2/16$, so it is excellent below $20^\circ$ (error under $10^{-4}$) and merely indicative at $90^\circ$.

**A second number, for the other kind.** The quarter arc of the ellipse $x^2/a^2+y^2/b^2=1$ is $a\,E(m)$ with $m=(a^2-b^2)/a^2$. For $a=5$, $b=3$, $m=16/25=0.64$ and $E(0.64)=1.27634994$, so the full perimeter is
$$
P = 4aE(m) = 20\times1.27634994 = 25.526999 ,
$$
against the crude estimate $2\pi\sqrt{(a^2+b^2)/2} = 2\pi\sqrt{17} = 25.906237$, which is $1.5\%$ too large. Direct quadrature of $4\int_0^{\pi/2}\sqrt{25\cos^2 t+9\sin^2 t}\,\mathrm{d}t$ returns $25.526999$, confirming the identification. Every number in this example was computed to at least ten significant figures and checked against an independent evaluation.
:::

:::application{provenance=original}
**Clocks and the circular error.** The amplitude dependence computed above is the *circular error* of a pendulum clock, and it is the reason a clock's rate drifts as its driving force or its pivot friction changes the swing. Huygens's cycloidal cheeks were an attempt to remove it geometrically by forcing the bob onto a cycloid, on which the period is exactly amplitude-independent; in practice the cheeks introduced more friction than they removed error, and the surviving fix is the opposite one — keep the amplitude small and constant. The quantitative design rule follows straight from the expansion: to hold a clock to one second a day, that is $1.16\times10^{-5}$ in rate, the amplitude must be held to $\delta\theta_M$ with $\theta_M\,\delta\theta_M/8 < 1.2\times10^{-5}$, so at a typical $\theta_M = 3^\circ = 0.0524$ rad the amplitude must be stable to about $0.0018$ rad, a tenth of a degree.

**Orbits and arcs.** The perimeter of an ellipse has no elementary formula, which is why $E$ exists. In celestial mechanics this means the arc length travelled along a Keplerian orbit, and the path length of a charged particle in a dipole field, are both second-kind integrals. The same function governs the length of a sagging cable and the shape of the *elastica*, the curve taken by a thin elastic rod bent by end loads — Euler's problem, whose solution is written with $F$ and $E$ and whose buckling thresholds are the values of $m$ at which a complete integral reaches a critical value.

**Fields of circular sources.** Let a ring of radius $a$ carry a steady current $I$. Its azimuthal vector potential at the field point $(\rho,z)$ is
$$
A_\varphi = \frac{\mu_0 I}{\pi k}\sqrt{\frac{a}{\rho}}\left[\left(1-\frac{k^2}{2}\right)K(k^2)-E(k^2)\right],
\qquad k^2 = \frac{4a\rho}{(a+\rho)^2+z^2} ,
$$
which Arfken, Weber and Harris set as Exercise 18.8.4 — note that the complete integrals there are written with the modulus squared as the argument, so in our convention the argument is $m=k^2$ throughout. The same combination appears for the mutual inductance of two coaxial loops and for the gravitational potential of a ring; the near-field limit $\rho\to a$, $z\to0$ is $m\to1$, and the logarithmic divergence of $K$ is exactly the logarithmic divergence of the field at a line current.

**The gateway to elliptic functions.** Ahlfors arrives at the same integrals from a completely different direction: the Schwarz–Christoffel map carrying the upper half-plane onto a rectangle is an elliptic integral, and the rectangle's two side lengths are $K$ and $K'$, the complete integrals for the modulus $k$ and for the complementary modulus $\sqrt{1-k^2}$. Reflecting the map across the sides of the rectangle extends its inverse to a meromorphic function on the whole plane with periods $2K$ and $2\mathrm{i}K'$ — a doubly periodic, or *elliptic*, function. That is the structural reason elliptic integrals keep appearing in integrable mechanics: the motion of a symmetric top, of a pendulum, and of a free rigid body are all linear flows on a torus, and a torus is a plane modulo a lattice. The lattice periods are $2K$ and $2\mathrm{i}K'$, and the real one is the physical period computed above.
:::
