---
id: asym.stirling-formula
title: Stirling's formula
kind: example
level: core
summary: >-
  Derives $\Gamma(x+1)\sim\sqrt{2\pi x}\,x^{x}e^{-x}$ from the Euler integral by Laplace's
  method, carries the expansion of the exponent far enough to produce the first correction
  $1+1/(12x)$, records the full Stirling series in Bernoulli numbers together with its range of
  validity and its divergence, and tests the result on a binomial coefficient.
prereqs:
  - asym.laplace-method
  - asym.asymptotic-series
  - spec.gamma-function
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.7, Example 12.7.1, p. 589: the leading term from the Euler integral $\\Gamma(t+1)=t^{t+1}\\int_0^\\infty e^{t(\\ln z-z)}dz$ after the substitution $\\rho=zt$, with the saddle at $z=1$, $\\arg w''=\\pi$, direction $\\theta=0$ along the real axis, giving $\\sqrt{2\\pi}\\,t^{t+1/2}e^{-t}$, and the remark that the method of steepest descents is probably the easiest route to it; Exercise 12.7.3, that the same formula holds for complex argument with large positive real part. §13.4 Stirling's Series, pp. 622-625: the statement that the full expansion is most simply obtained from the Euler-Maclaurin formula rather than by steepest descents; the application of (13.55) to $\\int_0^\\infty (z+x)^{-2}dx=1/z$ to get the asymptotic series (13.56) for $\\psi^{(1)}(z+1)$, the remark that it diverges because the Bernoulli numbers do and is therefore semiconvergent; the two integrations giving (13.57) for $\\psi(z+1)$ and (13.58) for $\\ln\\Gamma(z+1)$ with constants $C_1,C_2$; the determination $C_1=0$, $C_2=\\tfrac12\\ln2\\pi$ by consistency with the Legendre duplication formula (Exercise 13.4.3); the resulting series (13.60) $\\ln\\Gamma(z+1)=\\tfrac12\\ln2\\pi+(z+\\tfrac12)\\ln z-z+\\frac{1}{12z}-\\frac{1}{360z^3}+\\frac{1}{1260z^5}-\\cdots$ with the statement that the absolute error is smaller than the first term omitted; the check that the steepest-descent result reproduces every term of (13.60) that survives as $|z|\\to\\infty$; Exercise 13.4.1, the product form $\\Gamma(z+1)=\\sqrt{2\\pi}z^{z+1/2}e^{-z}\\bigl(1+\\frac{1}{12z}+\\frac{1}{288z^2}-\\frac{139}{51840z^3}+\\cdots\\bigr)$; and Figure 13.4 with Table 13.1, the ratios of the one-term and two-term approximations to $\\Gamma(s+1)$ for $s=1,\\dots,10$"
    pages: "589, 622-625"
    role: the leading term by the saddle-point route; the full Stirling series in both the logarithmic and the product form, with the Bernoulli-number coefficients; the error statement; and the numerical accuracy table against which our own computation is compared
  - work: ahlfors-1979
    loc: "§2.5 Stirling's Formula, pp. 201-205: the derivation by residue calculus following Lindelöf, starting from the partial sums of $\\sum(z+\\nu)^{-2}$ expressed as a contour integral; the resulting exact formula (35) $\\log\\Gamma(z)=C'+Cz+(z-\\tfrac12)\\log z+J(z)$ with the explicit remainder (36) $J(z)=\\frac1\\pi\\int_0^\\infty\\frac{z}{\\eta^2+z^2}\\log\\frac{1}{1-e^{-2\\pi\\eta}}d\\eta$; the estimate that $J(z)\\to0$ as $z\\to\\infty$ in any half plane $\\mathrm{Re}\\,z\\ge c>0$, obtained by splitting the integral at $\\eta=|z|/2$; the determination $C=-1$ from the functional equation $\\Gamma(z+1)=z\\Gamma(z)$ and $C'=\\tfrac12\\log2\\pi$ from the reflection formula $\\Gamma(z)\\Gamma(1-z)=\\pi/\\sin\\pi z$ evaluated at $z=\\tfrac12+iy$; the final form (37)-(38) $\\log\\Gamma(z)=\\tfrac12\\log2\\pi-z+(z-\\tfrac12)\\log z+J(z)$; and the expansion (39)-(41) of $J(z)$ in odd powers of $1/z$ with coefficients $C_\\nu=(-1)^{\\nu-1}B_\\nu/[(2\\nu-1)2\\nu]$ in the older Bernoulli numbering $B_1=\\tfrac16$, $B_2=\\tfrac1{30}$, together with the warning that this is not a Laurent development"
    pages: "201-205"
    role: the exact statement with a remainder, which is what makes the range of validity precise; the complex half-plane in which the formula holds; the identification of the constant $\\tfrac12\\log2\\pi$; and the Bernoulli-number form of the correction series in the older numbering convention
  - work: grimmett-stirzaker-2020
    loc: "§5.9, Example (6) and (7), pp. 214-215: the statement $n!\\sim n^ne^{-n}\\sqrt{2\\pi n}$, attributed in a footnote to de Moivre, and its extension $\\Gamma(t)/[t^{t-1}e^{-t}\\sqrt{2\\pi t}]\\to1$ as $t\\to\\infty$, with a complete proof by Fourier inversion: $X=(Y-t)/\\sqrt t$ for $Y\\sim\\Gamma(1,t)$ has density $f_t$ with $f_t(0)=t^{t-1/2}e^{-t}/\\Gamma(t)$ and characteristic function $\\phi_t(u)=\\exp[-iu\\sqrt t-t\\log(1-iu/\\sqrt t)]\\to e^{-u^2/2}$, so that the inversion formula at $x=0$ gives the limit, the interchange of limit and integral being justified by dominated convergence. Exercise 5.9.6, p. 216: the same formula from 'Laplace's method of steepest descent', stated as $\\int_0^\\infty e^{f_n}\\sim\\int_0^\\infty\\exp[f_n(a)+\\tfrac12(x-a)^2f_n''(a)]$ for a global maximum at $a>0$, to be applied with $f_n(x)=n\\log x-x$. Problem 5.12.26, p. 403: a third derivation, from the central limit theorem for a sum of independent Poisson variables of parameter 1 together with the bound $a(n-k,n)/a(n+1,n)\\le e^{-k^2/(2n)}$. §3.10, Eq. (20), p. 86: the formula quoted and applied to the simple random walk, giving $u_{2k}=\\binom{2k}{k}2^{-2k}\\sim1/\\sqrt{\\pi k}$ for the probability of being at the origin after $2k$ steps"
    pages: "86, 214-216, 403"
    role: the attribution to de Moivre; the Laplace-method formulation that this unit follows; two independent probabilistic proofs that corroborate the constant $\\sqrt{2\\pi}$; and the random-walk application
  - work: hassani-2013
    loc: "§12.5, Example 12.5.1, p. 385: the steepest-descent evaluation of $\\Gamma(\\alpha+1)=\\int_0^\\infty e^{\\alpha(\\ln z-z/\\alpha)}dz$, with $f(z)=\\ln z-z/\\alpha$, $g=1$, saddle at $z_0=\\alpha$, $\\tfrac12f''(z_0)=\\tfrac1{2\\alpha^2}e^{i\\pi}$ so $\\theta_2=\\pi$ and $\\theta_1=0$, giving $\\Gamma(\\alpha+1)\\approx\\sqrt{2\\pi}e^{-\\alpha}\\alpha^{\\alpha+1/2}$, called there the Stirling approximation, with the integer case $n!\\approx\\sqrt{2\\pi}e^{-n}n^{n+1/2}$"
    pages: "385-386"
    role: a second saddle-point derivation, differing from Arfken's in where the factor $\\alpha$ is placed, used here to check that the two scalings give the same answer
  - work: folland-1999
    loc: "§10.3, Exercise 21, p. 327: for $X_n$ independent Poisson variables of mean 1 with partial sums $S_n$ and $Y_n=\\max\\{(S_n-n)/\\sqrt n,0\\}$, the identity $E(Y_n)=e^{-n}n^{n+1/2}/n!$ obtained from a telescoping sum, the vague convergence of the law of $Y_n$ to $\\tfrac12\\delta_0+\\chi_{(0,\\infty)}\\nu_1$, and the conclusion $E(Y_n)\\to(2\\pi)^{-1/2}$, which is Stirling's formula"
    pages: "327"
    role: an independent confirmation of the constant from the central limit theorem, cited in the remark on why $\\sqrt{2\\pi}$ cannot be obtained from the local analysis alone
  - work: stakgold-holst-2011
    loc: "§2.2, Exercise 2.2.7(a), p. 122: the use of Stirling's formula in the form $k!\\sim k^ke^{-k}\\sqrt{2\\pi k}$ to evaluate $\\lim_{k\\to\\infty}\\sqrt k\\,I_k=\\sqrt\\pi$ for $I_k=2^{2k+1}(k!)^2/(2k+1)!$, the normalising constants of the delta family used to prove the Weierstrass approximation theorem"
    pages: "122"
    role: a worked use of the formula on a ratio of factorials, and the application to the normalisation of an approximate identity
---

:::definition[Stirling's formula, Stirling's series, and the notation]{provenance=adapted src="arfken-2013:§13.4, Eqs. (13.60) and Ex. 13.4.1, pp. 624-625; ahlfors-1979:§2.5, Eqs. (37)-(38), p. 204"}
Throughout, $\Gamma$ is the Euler integral of :ref[]{to=spec.gamma-function},

$$
\Gamma(x+1) \;=\; \int_0^\infty t^{x}e^{-t}\,dt \qquad (x>-1),
$$

so that $\Gamma(n+1)=n!$ for non-negative integers $n$. The symbol $a(x)\sim b(x)$ means $a/b\to1$; it says nothing about $a-b$, which here grows without bound.

**Stirling's formula** is the leading-order statement $\Gamma(x+1)\sim\sqrt{2\pi x}\,x^{x}e^{-x}$. **Stirling's series** is the asymptotic expansion of which it is the first term. The series is normally written for the logarithm, where the coefficients are simplest,

$$
\ln\Gamma(z+1) \;\sim\; \tfrac12\ln(2\pi) + \Bigl(z+\tfrac12\Bigr)\ln z - z
\;+\; \sum_{n\ge1}\frac{B_{2n}}{2n(2n-1)\,z^{2n-1}} ,
$$

with the Bernoulli numbers $B_2=\tfrac16$, $B_4=-\tfrac1{30}$, $B_6=\tfrac1{42}$ of :ref[]{to=spec.zeta-bernoulli}. :cite[Ahlfors]{work=ahlfors-1979 loc="§2.5, Eqs. (40)-(41), p. 205"} writes the same coefficients as $C_\nu=(-1)^{\nu-1}B_\nu/[(2\nu-1)2\nu]$ in the older numbering, in which $B_1=\tfrac16$ and $B_2=\tfrac1{30}$ are positive and carry half the index; both conventions give $\tfrac1{12z}$ for the first term, and this unit uses the modern one throughout.

The word *series* is a courtesy: as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, p. 623"} point out, the Bernoulli numbers grow so fast that the sum diverges for every $z$. It is an asymptotic series in the sense of :ref[]{to=asym.asymptotic-series}, useful when truncated and useless when summed.
:::

:::statement[Stirling's formula and its first corrections]{provenance=adapted src="arfken-2013:§12.7 Example 12.7.1 p. 589, §13.4 Eqs. (13.60) and Ex. 13.4.1, pp. 624-625; ahlfors-1979:§2.5, Eqs. (36)-(38), pp. 203-204; grimmett-stirzaker-2020:§5.9, Eqs. (6)-(7), p. 214"}
**1. Leading order.** As $x\to+\infty$ through real values,

$$
\Gamma(x+1) \;\sim\; \sqrt{2\pi x}\;x^{x}e^{-x} ,
\qquad\text{equivalently}\qquad
n! \;\sim\; \sqrt{2\pi n}\;n^{n}e^{-n} .
$$

:cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.9, Eqs. (6)-(7), p. 214"} state the second form, attributing it in a footnote to de Moivre, and the equivalent $\Gamma(t)\sim t^{t-1/2}e^{-t}\sqrt{2\pi}$ for the Gamma function itself.

**2. First correction.** More precisely,

$$
\Gamma(x+1) \;=\; \sqrt{2\pi x}\;x^{x}e^{-x}\left[\,1+\frac{1}{12x}+O\!\left(\frac{1}{x^{2}}\right)\right] ,
$$

and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, Exercise 13.4.1, p. 625"} continue the bracket as $1+\dfrac{1}{12z}+\dfrac{1}{288z^{2}}-\dfrac{139}{51840z^{3}}+\cdots$.

**3. The logarithmic series.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, Eq. (13.60), p. 624"} give

$$
\ln\Gamma(z+1) \;=\; \tfrac12\ln(2\pi) + \Bigl(z+\tfrac12\Bigr)\ln z - z
+ \frac{1}{12z} - \frac{1}{360z^{3}} + \frac{1}{1260z^{5}} - \cdots ,
$$

and state that truncating the series costs an error smaller in modulus than the first term left out.

**4. Range of validity, with an exact remainder.** :cite[Ahlfors]{work=ahlfors-1979 loc="§2.5, Eqs. (36)-(38), pp. 203-204"} proves the *exact* identity

$$
\log\Gamma(z) \;=\; \tfrac12\log 2\pi - z + \Bigl(z-\tfrac12\Bigr)\log z + J(z) ,
\qquad
J(z) = \frac{1}{\pi}\int_0^\infty \frac{z}{\eta^{2}+z^{2}}\,\log\frac{1}{1-e^{-2\pi\eta}}\,d\eta ,
$$

valid in the right half plane, with $J(z)\to0$ as $z\to\infty$ in any half plane $\operatorname{Re}z\ge c>0$, and shows that expanding the integrand in powers of $1/z$ generates the series of part 3. Since $\ln\Gamma(z+1)=\ln z+\ln\Gamma(z)$, parts 3 and 4 are the same statement. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Exercise 12.7.3, p. 591"} likewise record that the leading term holds for complex argument provided the real part is large and positive.
:::

:::idea{provenance=original}
Two things have to happen before Laplace's method can be used, and they are the whole derivation. The integrand $t^{x}e^{-t}$ has its maximum at $t=x$, which runs away as $x$ grows, so the first move is to rescale, $t=xu$, which pins the maximum at $u=1$ for every $x$. The second move is to recognise that $u^{x}$ is not a slowly varying prefactor but a rapidly varying one, and to put it where it belongs, in the exponent, as $e^{x\ln u}$. After both moves the integral reads $x^{x+1}e^{-x}\int_0^\infty e^{-x\varphi(u)}du$ with $\varphi(u)=u-1-\ln u$, a fixed function, independent of $x$, with a single non-degenerate minimum at $u=1$ where $\varphi=0$ and $\varphi''=1$. Laplace's method then returns $\sqrt{2\pi/x}$, and the three factors multiply to Stirling's formula.

The correction comes from the same picture pushed one step. The Gaussian that dominates has width $v\sim x^{-1/2}$ about the minimum, so in the expansion $\varphi=\tfrac12v^{2}-\tfrac13v^{3}+\tfrac14v^{4}-\cdots$ the cubic term contributes $x v^{3}\sim x^{-1/2}$ and the quartic $xv^{4}\sim x^{-1}$. Expanding the exponential of these small quantities and integrating against the Gaussian, the cubic term dies by symmetry at first order but survives squared, at the same order $x^{-1}$ as the quartic. Two contributions, $-\tfrac34 x^{-1}$ from the quartic and $+\tfrac56 x^{-1}$ from the squared cubic, leave $+\tfrac1{12}x^{-1}$. The famous $1/12$ is that near-cancellation.

One thing the local analysis cannot produce is $\sqrt{2\pi}$ itself — it comes from the Gaussian integral, that is from the global normalisation, which is why every proof of Stirling's formula has to pass through some identity that knows about $\pi$.
:::

:::proof[Derivation by Laplace's method]{provenance=adapted src="grimmett-stirzaker-2020:§5.9, Exercise 5.9.6, p. 216; arfken-2013:§12.7, Example 12.7.1, p. 589; hassani-2013:§12.5, Example 12.5.1, p. 385"}
Let $x>0$ be real.

**Step 1: rescale so the maximum stands still.** Substituting $t=xu$ in the Euler integral, with $dt=x\,du$,

$$
\Gamma(x+1) \;=\; \int_0^\infty t^{x}e^{-t}\,dt \;=\; x^{x+1}\int_0^\infty u^{x}e^{-xu}\,du .
$$

**Step 2: put the rapidly varying factor in the exponent.** Writing $u^{x}=e^{x\ln u}$ and factoring out the value of the exponent at the maximum,

$$
\Gamma(x+1) \;=\; x^{x+1}\int_0^\infty e^{-x(u-\ln u)}\,du
\;=\; x^{x+1}e^{-x}\int_0^\infty e^{-x\varphi(u)}\,du ,
\qquad
\varphi(u) = u-1-\ln u .
$$

This is the step that :ref[]{to=asym.steepest-descent} insists on: a factor varying as fast as $e^{x\ln u}$ may not be treated as a slowly varying prefactor, because it moves the maximum. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Example 12.7.1, p. 589"} and :cite[Hassani]{work=hassani-2013 loc="§12.5, Example 12.5.1, p. 385"} make the same two moves, Hassani keeping $x$ inside the exponent as $\ln u-u/x$ with the saddle at $u=x$, which is the same calculation before rescaling.

**Step 3: check the hypotheses of Laplace's method.** On $(0,\infty)$,

$$
\varphi'(u) = 1-\frac1u , \qquad \varphi''(u) = \frac{1}{u^{2}} ,
$$

so $\varphi$ has exactly one stationary point, at $u=1$; there $\varphi(1)=0$ and $\varphi''(1)=1>0$, so it is a non-degenerate interior minimum; and $\varphi>0$ elsewhere, with $\varphi(u)\to+\infty$ at both ends ($-\ln u$ at $0$, $u$ at $\infty$). These are exactly the hypotheses of :ref[]{to=asym.laplace-method}, which therefore gives

$$
\int_0^\infty e^{-x\varphi(u)}\,du \;\sim\; \sqrt{\frac{2\pi}{x\,\varphi''(1)}} \;=\; \sqrt{\frac{2\pi}{x}} .
$$

**Step 4: leading order.** Combining steps 2 and 3,

$$
\Gamma(x+1) \;\sim\; x^{x+1}e^{-x}\sqrt{\frac{2\pi}{x}} \;=\; \sqrt{2\pi x}\;x^{x}e^{-x} ,
$$

which is part 1. This is the computation :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.9, Exercise 5.9.6, p. 216"} set as an exercise, with the maximum of $f_n(u)=n\ln u-u$ at $u=n$ before rescaling.

**Step 5: the first correction.** Put $u=1+v$, so that $\varphi(1+v)=v-\ln(1+v)$ and, for $\lvert v\rvert<1$,

$$
\varphi(1+v) \;=\; \frac{v^{2}}{2}-\frac{v^{3}}{3}+\frac{v^{4}}{4}-\cdots .
$$

Hence

$$
\int_0^\infty e^{-x\varphi}\,du \;=\; \int_{-1}^{\infty} e^{-xv^{2}/2}\,\exp\!\left[x\left(\frac{v^{3}}{3}-\frac{v^{4}}{4}+\cdots\right)\right]dv .
$$

By the localisation that underlies Laplace's method, only $\lvert v\rvert\lesssim x^{-1/2+\delta}$ matters: outside that range the Gaussian factor is smaller than any power of $1/x$, so the lower limit may be moved from $-1$ to $-\infty$ at an exponentially small cost, and inside it the bracket is small and its exponential may be expanded. Counting powers with $v\sim x^{-1/2}$: the term $xv^{3}$ is of order $x^{-1/2}$, the terms $xv^{4}$ and $(xv^{3})^{2}$ are of order $x^{-1}$, and everything else is smaller. Keeping these,

$$
\exp\!\left[x\left(\frac{v^{3}}{3}-\frac{v^{4}}{4}+\cdots\right)\right]
\;=\; 1+\frac{x v^{3}}{3}-\frac{x v^{4}}{4}+\frac{x^{2}v^{6}}{18}+\cdots .
$$

**Step 6: integrate term by term.** The Gaussian moments are $\int_{-\infty}^{\infty}e^{-xv^{2}/2}v^{2k}dv=\sqrt{2\pi/x}\,(2k-1)!!\,x^{-k}$ and the odd moments vanish, so $\langle v^{3}\rangle=0$, $\langle v^{4}\rangle=3x^{-2}$ and $\langle v^{6}\rangle=15x^{-3}$, each relative to $\sqrt{2\pi/x}$. Therefore

$$
\int_0^\infty e^{-x\varphi}\,du
\;=\; \sqrt{\frac{2\pi}{x}}\left[1 - \frac{x}{4}\cdot\frac{3}{x^{2}} + \frac{x^{2}}{18}\cdot\frac{15}{x^{3}} + O(x^{-2})\right]
\;=\; \sqrt{\frac{2\pi}{x}}\left[1 - \frac{3}{4x} + \frac{5}{6x} + O(x^{-2})\right] ,
$$

and $-\tfrac34+\tfrac56=-\tfrac9{12}+\tfrac{10}{12}=\tfrac1{12}$, so the bracket is $1+\dfrac{1}{12x}+O(x^{-2})$. Multiplying by $x^{x+1}e^{-x}$ gives part 2. The vanishing of the odd moments also explains why the next correction is $O(x^{-2})$ and not $O(x^{-3/2})$: every term of half-integer order carries an odd power of $v$.

**Step 7: the series and the constant.** Repeating steps 5 and 6 to higher order reproduces $\tfrac1{288z^{2}}$ and the later coefficients, but the labour grows quickly, and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, p. 622"} recommend obtaining the full series instead from the Euler-Maclaurin formula of :ref[]{to=asym.euler-maclaurin}, applied to $\int_0^\infty(z+t)^{-2}dt$ and integrated twice; that route produces (13.57) and (13.58) with two unknown constants of integration, which are then fixed at $C_1=0$ and $C_2=\tfrac12\ln2\pi$ by requiring consistency with the Legendre duplication formula. :cite[Ahlfors]{work=ahlfors-1979 loc="§2.5, pp. 203-204"} fixes the same two constants differently, the first from $\Gamma(z+1)=z\Gamma(z)$ and the second from the reflection formula $\Gamma(z)\Gamma(1-z)=\pi/\sin\pi z$ at $z=\tfrac12+iy$. $\square$
:::

:::remark[Where the hypotheses are used, and what the derivation does not prove]{provenance=original}
- **Rescaling is not cosmetic.** Laplace's method requires the maximum to sit at a fixed interior point while the large parameter grows; in the unrescaled integral the maximum is at $t=x$ and the width of the peak is $\sqrt{x}$, so there is no small parameter at all. Step 1 is what creates one.
- **$\varphi''(1)=1\neq0$ is what makes the answer $\sqrt{2\pi/x}$ rather than something else.** A degenerate minimum would give a different power of $x$ and a different constant, as in the Airy-type cases of :ref[]{to=asym.stationary-phase}. Here non-degeneracy is automatic, since $\varphi''(u)=u^{-2}$ never vanishes.
- **The uniqueness of the minimum and the growth of $\varphi$ at both ends are what let the tails be discarded.** $\varphi(u)\to\infty$ as $u\to0^+$ only logarithmically, so the contribution from near $t=0$ is $O(x^{-x})$ rather than merely exponentially small; it is still negligible, but the estimate is worth making rather than assuming.
- **Step 5 is formal where it rearranges an asymptotic expansion, and the justification is borrowed.** Expanding $e^{x(v^3/3-\cdots)}$ and integrating term by term over all of $\mathbb{R}$ is not a convergent manipulation; it is legitimate as an asymptotic statement because of the localisation argument quoted at the start of the step, which is the same one that proves Laplace's method and is proved in :ref[]{to=asym.laplace-method} and :ref[]{to=asym.watson-lemma}. Carrying it to all orders produces a divergent series, so no amount of care turns the derivation into an exact identity; for that one needs the remainder formula of :cite[Ahlfors]{work=ahlfors-1979 loc="§2.5, Eq. (36), p. 203"}.
- **The constant $\sqrt{2\pi}$ is global, not local.** Here it enters through the Gaussian integral. Every other derivation must import it from somewhere equally non-local: :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, p. 624"} take it from the Legendre duplication formula, :cite[Ahlfors]{work=ahlfors-1979 loc="§2.5, p. 204"} from the reflection formula, and :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.9, p. 215"} and :cite[Folland]{work=folland-1999 loc="§10.3, Exercise 21, p. 327"} from the normalisation of the standard normal distribution via the central limit theorem. An elementary argument comparing $\ln n!$ with $\int\ln$ gives $n!\sim Cn^{n+1/2}e^{-n}$ easily and stops there, unable to evaluate $C$.
- **Real $x\to+\infty$ is what the derivation above covers; the complex statement needs the contour.** Nothing in steps 1-6 is complex, so they establish the formula for large positive real argument only. Its extension to $\operatorname{Re}z\ge c>0$ is :cite[Ahlfors's]{work=ahlfors-1979 loc="§2.5, pp. 203-204"} theorem, with the bound on $J(z)$ obtained by splitting the defining integral at $\eta=\lvert z\rvert/2$; the saddle-point derivation extends the same way, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§12.7, Exercise 12.7.3, p. 591"} indicate. The formula fails near the negative real axis for the obvious reason that $\Gamma$ has poles there.
- **The series diverges, so "more terms" is not always "more accuracy".** The term $B_{2n}/[2n(2n-1)z^{2n-1}]$ eventually grows for fixed $z$, because $\lvert B_{2n}\rvert$ grows faster than any power. The best accuracy attainable at a given $z$ is reached at the smallest term, and is roughly its size; see the optimal-truncation discussion in :ref[]{to=asym.asymptotic-series}. At $z=10$ the smallest term is far below machine precision, which is why Stirling's series is the standard way to compute $\ln\Gamma$ for large arguments; at $z=1$ it is useless after two terms.
:::

:::method[Using Stirling's formula in practice]{provenance=original}
1. **Work with logarithms.** $n!$ overflows for $n$ beyond a few hundred while $\ln n!$ does not, and almost every use of the formula is inside a ratio or an exponent anyway. Use
   $$
   \ln\Gamma(x+1) \;\approx\; \tfrac12\ln(2\pi x) + x\ln x - x + \frac{1}{12x}-\frac{1}{360x^{3}} .
   $$
2. **Shift the argument up before applying it.** The error falls like a power of $1/x$, so for small $x$ apply the recurrence $\Gamma(x+1)=x\,\Gamma(x)$ a few times to move the argument to $x+m$ with $m$ around $10$, evaluate the series there, and divide back out. This is how library implementations of $\ln\Gamma$ are organised.
3. **Cancel before approximating.** In a ratio such as $\binom{2n}{n}$ or $n!/[(n-k)!\,k!]$, assemble the logarithms first and let the $x\ln x$ terms cancel algebraically; approximating each factorial separately and then dividing loses most of the accuracy to subtractive cancellation between large numbers.
4. **Decide the number of terms from the target accuracy.** The relative error of the $m$-term truncation is about the size of the first omitted term. One term gives $\approx1/(12x)$, two give $\approx1/(288x^{2})$: for three significant figures, one term suffices from $x\approx100$, two from $x\approx6$.
5. **Keep track of which form is being used.** $\Gamma(x+1)$, $\Gamma(x)$ and $x!$ differ by factors of $x$, and the exponents $x+\tfrac12$ and $x-\tfrac12$ are easy to interchange by accident. The safest check is the leading behaviour of the logarithm, $\ln\Gamma(x+1)-\ln\Gamma(x)=\ln x$.
6. **Verify once numerically** at a moderate argument, where the exact value is still computable, before trusting the formula at the argument of interest.
:::

:::example[Accuracy at small arguments, and a central binomial coefficient]{provenance=original}
**Part A: how good is it already at $x=5$ and $x=10$?** Writing $S_m(x)$ for the $m$-term truncation of the product form of part 2, direct computation gives

| $x$ | $\Gamma(x+1)$ | $S_1/\Gamma$ | $S_2/\Gamma$ | $S_3/\Gamma$ |
|---|---|---|---|---|
| $5$ | $120$ | $0.983493$ | $0.999885$ | $1.000021$ |
| $10$ | $3628800$ | $0.991704$ | $0.999968$ | $1.000003$ |

One term is within $1.7\%$ at $x=5$ and $0.83\%$ at $x=10$; two terms bring this to $1.2\times10^{-4}$ and $3.2\times10^{-5}$; three terms to $2.1\times10^{-5}$ and $2.7\times10^{-6}$. The one- and two-term truncations fall short of $\Gamma$ and the three-term truncation overshoots it, so the error changes sign between the second and the third term — a reminder that the truncations of an asymptotic series do not bracket the answer in any regular way. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.4, Table 13.1, p. 625"} tabulate the first two of these columns for $s=1,\dots,10$; our values agree with theirs everywhere except at $s=10$, where they print $0.99998$ for the two-term ratio and we compute $0.9999682$, which rounds to $0.99997$.

**Part B: the number of ways to split $100$ objects into two equal halves.** The exact value is

$$
\binom{100}{50} \;=\; 100\,891\,344\,545\,564\,193\,334\,812\,497\,256 \;\approx\; 1.008913445\times10^{29} ,
$$

a number large enough that computing the three factorials separately is not an option in floating point. Following step 3 of the method, approximate the ratio rather than its parts. With $n=50$ and the two-term form $\Gamma(m+1)=\sqrt{2\pi m}\,m^{m}e^{-m}\bigl(1+\tfrac1{12m}+\tfrac1{288m^{2}}+\cdots\bigr)$,

$$
\binom{2n}{n} = \frac{(2n)!}{(n!)^{2}}
= \frac{\sqrt{4\pi n}\,(2n)^{2n}e^{-2n}}{2\pi n\;n^{2n}e^{-2n}}\cdot
\frac{1+\frac{1}{24n}+\frac{1}{1152n^{2}}+\cdots}{\left(1+\frac{1}{12n}+\frac{1}{288n^{2}}+\cdots\right)^{2}} .
$$

The algebraic part collapses to $4^{n}/\sqrt{\pi n}$. For the correction, the denominator squares to $1+\tfrac1{6n}+\tfrac1{72n^{2}}$ to this order, whose reciprocal is $1-\tfrac1{6n}+\tfrac1{72n^{2}}$; multiplying by the numerator,

$$
\left(1+\frac{1}{24n}+\frac{1}{1152n^{2}}\right)\left(1-\frac{1}{6n}+\frac{1}{72n^{2}}\right)
= 1 - \frac{1}{8n} + \frac{1}{128n^{2}} + O(n^{-3}) ,
$$

since $\tfrac1{24}-\tfrac16=-\tfrac18$ and $\tfrac1{1152}+\tfrac1{72}-\tfrac1{144}=\tfrac{1+16-8}{1152}=\tfrac{9}{1152}=\tfrac1{128}$. Hence

$$
\binom{2n}{n} \;=\; \frac{4^{n}}{\sqrt{\pi n}}\left[1-\frac{1}{8n}+\frac{1}{128n^{2}}+O(n^{-3})\right] .
$$

At $n=50$: $4^{50}=1.2676506\times10^{30}$ and $\sqrt{50\pi}=12.533141$, so the leading term is $1.011438842\times10^{29}$, high by $0.250\%$. The bracket is $1-\tfrac1{400}=0.9975$, giving

$$
\boxed{\;\binom{100}{50} \;\approx\; 1.008910245\times10^{29}\;}
$$

against the exact $1.008913445\times10^{29}$: a relative error of $3.2\times10^{-6}$, or about eight correct significant figures from a formula with two terms. Including the third term, $+\tfrac1{128\cdot2500}$, gives $1.008913406\times10^{29}$, with relative error $3.9\times10^{-8}$.

**What the numbers show.** The successive relative errors $2.5\times10^{-3}$, $3.2\times10^{-6}$, $3.9\times10^{-8}$ fall by factors of about $790$ and $81$: each new term is smaller than the last by a factor of order $n$, which is what an asymptotic series does while it is still far from its optimal truncation. At $n=1$ the same three approximations give $2.257$, $1.975$ and $1.992$ for $\binom{2}{1}=2$, so even there the first correction is worth having, but the series has stopped being a reliable source of further digits.
:::

:::application{provenance=original}
**Statistical mechanics: entropy and the counting of microstates.** Boltzmann's $S=k_B\ln W$ requires the logarithm of a multinomial coefficient, and Stirling's formula in the crudest form $\ln N!\approx N\ln N-N$ is what turns it into a usable function of the occupation numbers. For $W=N!/\prod_i n_i!$ with $n_i=Np_i$,

$$
\frac{S}{k_B} \;=\; \ln W \;\approx\; -N\sum_i p_i\ln p_i ,
$$

the Gibbs entropy: the $N\ln N$ terms cancel exactly, which is why the crude form suffices and why the answer is extensive. The same cancellation makes the $\tfrac12\ln(2\pi N)$ corrections subextensive, of relative order $\ln N/N$, and therefore invisible in the thermodynamic limit — but they are precisely what is kept in the fluctuation theory. The $N!$ of indistinguishability in the ideal-gas partition function enters the Sackur-Tetrode entropy the same way, and the resolution of the Gibbs paradox depends on treating it with Stirling rather than dropping it.

**Random walks and the recurrence of diffusion.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§3.10, Eq. (20), p. 86"} apply the formula to the symmetric simple random walk: the probability of being back at the origin after $2k$ steps is $u_{2k}=\binom{2k}{k}2^{-2k}$, and the central binomial asymptotics computed in the example above give

$$
u_{2k} \;\sim\; \frac{1}{\sqrt{\pi k}} .
$$

Since $\sum_k k^{-1/2}$ diverges, the walk returns to the origin infinitely often: the recurrence of the one-dimensional walk is a corollary of Stirling's formula. In two dimensions the same computation gives $u_{2k}\sim1/(\pi k)$, still divergent, and in three $u_{2k}\sim c\,k^{-3/2}$, convergent — which is Pólya's theorem, and the reason a diffusing particle in space escapes. See :ref[]{to=prob.random-walks}.

**The de Moivre-Laplace theorem and the central limit theorem.** Historically the formula was invented for this: to find the limiting shape of $\binom{n}{k}2^{-n}$. Writing $k=n/2+y\sqrt{n}/2$ and applying the two-term formula to all three factorials gives the Gaussian $\sqrt{2/(\pi n)}\,e^{-y^{2}/2}$ directly, constant included. The logic also runs backwards, and both :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.9, pp. 214-215 and Problem 5.12.26, p. 403"} and :cite[Folland]{work=folland-1999 loc="§10.3, Exercise 21, p. 327"} derive Stirling's formula *from* the central limit theorem — Grimmett and Stirzaker by Fourier inversion of the characteristic function of a standardised Gamma variable at the single point $x=0$, and again from a Poisson sum, and Folland from the expectation of the positive part of a standardised Poisson sum. The constant $\sqrt{2\pi}$ is in all cases the normalisation of the normal density. See :ref[]{to=prob.central-limit-theorem}.

**Information theory and large deviations.** With $k=pn$, the same two-term computation gives

$$
\binom{n}{pn} \;\sim\; \frac{2^{\,nH(p)}}{\sqrt{2\pi n\,p(1-p)}} ,
\qquad H(p) = -p\log_2 p-(1-p)\log_2(1-p) ,
$$

so the number of binary strings of length $n$ with a prescribed fraction of ones is $2^{nH(p)}$ up to a factor $O(n^{-1/2})$. This is the counting estimate behind the source-coding theorem, behind the typical-set argument, and behind the rate function of :ref[]{to=prob.large-deviations}, where the exponent $nH$ is the leading term and the Stirling prefactor supplies the polynomial correction that distinguishes a local from a global limit theorem.

**Normalising approximate identities and special-function ratios.** Ratios of factorials appear wherever a family of functions has to be normalised. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.2, Exercise 2.2.7(a), p. 122"} use $k!\sim k^{k}e^{-k}\sqrt{2\pi k}$ to show that $I_k=2^{2k+1}(k!)^{2}/(2k+1)!$ satisfies $\sqrt{k}\,I_k\to\sqrt\pi$, which is exactly the statement that the Landau kernels $(1-x^{2})^{k}/I_k$ form a delta family — the first step of their proof of the Weierstrass approximation theorem. The same ratio, with $\Gamma(k+\tfrac12)/\Gamma(k+1)\sim k^{-1/2}$, controls the normalisation of Legendre and Gegenbauer polynomials and the large-order behaviour of Bessel coefficients in :ref[]{to=spec.bessel-asymptotics}.
:::
