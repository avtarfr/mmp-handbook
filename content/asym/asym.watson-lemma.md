---
id: asym.watson-lemma
title: Watson's lemma
kind: theorem
level: core
summary: Shows that the large-parameter behaviour of a Laplace-type integral is fixed entirely by the behaviour of its integrand at the endpoint, so that expanding the integrand near the origin and replacing each power by a Gamma function produces, term for term, a valid asymptotic expansion.
prereqs: [asym.asymptotic-series, spec.gamma-function, found.power-series]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§20.7 Laplace transforms, pp. 1008-1010: the definition $f(s)=\\int_0^\\infty e^{-st}F(t)dt$, Eq. (20.126); the condition $|e^{-s_0t}F(t)|\\le M$ for $t>t_0$ defining a function of exponential order and giving existence for $s>s_0$, Eq. (20.127), with the counterexample $F(t)=e^{t^2}$, whose transform does not exist, and the remark that $\\int_0^\\infty e^{-st}t^n dt$ diverges at the origin for $n\\le-1$; the transform of a power, $\\mathcal{L}\\{t^n\\}=\\Gamma(n+1)/s^{n+1}$ for $s>0$ and $n>-1$, Eq. (20.136); and the observation that $f(s)\\to0$ as $s\\to\\infty$ for every transform. §12.6, pp. 583-584: the Poincare sense of $\\sim$ and Exercise 12.6.3, p. 584, which records the large-argument series $\\mathrm{erf}(x)\\approx 1-\\frac{e^{-x^2}}{\\sqrt\\pi x}\\bigl(1-\\frac{1}{2x^2}+\\frac{1\\cdot3}{2^2x^4}-\\cdots+(-1)^n\\frac{(2n-1)!!}{2^nx^{2n}}\\bigr)$"
    pages: "583-584, 1008-1010"
    role: the two hypotheses of the lemma in the form in which this library states them (exponential order; a power $t^{\mu}$ is integrable at the origin only for $\mu>-1$); the single transform $\mathcal{L}\{t^{\mu}\} = \Gamma(\mu+1)/s^{\mu+1}$ that the term-by-term step consists of; and the complementary-error-function series against which the application is checked
  - work: rhb-2006
    loc: "§13.2 Laplace transforms, pp. 453-454: the definition (13.53) and the statement that for a given $f$ there is a real $s_0$ with the integral convergent for $s>s_0$ and divergent for $s\\le s_0$; linearity (13.54); and the elementary transforms $\\mathcal{L}[1]=1/s$, $\\mathcal{L}[e^{at}]=1/(s-a)$ and $\\mathcal{L}[t^n]=n!/s^{n+1}$ obtained by repeated integration by parts"
    pages: "453-454"
    role: the abscissa of convergence, which is where the hypothesis $x>c$ of the lemma comes from, and the transform of an integer power as the special case of the Gamma formula
  - work: grimmett-stirzaker-2020
    loc: "Exercise 5.9.6, p. 216, which names Watson's lemma in passing as a relative of Laplace's method of steepest descent and of saddlepoint methods, and states the Gaussian replacement $\\int_0^\\infty e^{f_n(x)}dx \\sim \\int_0^\\infty \\exp\\{f_n(a)+\\tfrac12(x-a)^2f_n''(a)\\}dx$ under mild conditions"
    pages: "216"
    role: the name of the result and its place beside Laplace's method; this is the only mention of the lemma in the library, and the statement and proof below are our own
---

:::definition[Laplace-type integral and its abscissa of convergence]{provenance=adapted src="arfken-2013:§20.7, Eqs. (20.126)-(20.127), p. 1008; rhb-2006:§13.2, Eq. (13.53), p. 453"}
A **Laplace-type integral** is
$$
F(x) \;=\; \int_0^{\infty} e^{-xt} f(t)\,dt ,
$$
with $x$ a large positive parameter and $f$ measurable and locally integrable on $(0,\infty)$. Arfken and Riley, Hobson and Bence call $F$ the Laplace transform of $f$; see :ref[]{to=fourier.laplace-transform}.

The function $f$ is **of exponential order** if there are constants $M \ge 0$, $c \in \mathbb{R}$ and $T > 0$ with
$$
|f(t)| \;\le\; M e^{ct} \qquad (t \ge T) .
$$
Arfken states this condition in the equivalent form $|e^{-ct}f(t)| \le M$ and notes that it guarantees convergence for $x > c$; his standing counterexample is $f(t) = e^{t^{2}}$, which satisfies no such bound and has no transform at all. Riley, Hobson and Bence put the same fact as the existence of an abscissa $s_0$ with convergence for $x > s_0$ and divergence below it.

The one explicit transform used below is that of a power :cite[]{work=arfken-2013 loc="Eq. (20.136), p. 1009"}:
$$
\int_0^{\infty} e^{-xt}\,t^{\mu-1}\,dt \;=\; \frac{\Gamma(\mu)}{x^{\mu}} \qquad (x > 0,\ \mu > 0) ,
$$
which is the substitution $u = xt$ in Euler's integral for $\Gamma$ (:ref[]{to=spec.gamma-function}). Arfken writes it as $\mathcal{L}\{t^{n}\} = \Gamma(n+1)/s^{n+1}$ and records that the integral diverges at the origin once the exponent reaches $-1$; that is the restriction $\mu > 0$.
:::

:::statement[Watson's lemma]{provenance=original}
Let $\lambda > 0$, let $f$ be measurable and locally integrable on $(0,\infty)$, and suppose:

- **(W1) Exponential order.** There are $M \ge 0$, $c \in \mathbb{R}$ and $T > 0$ with $|f(t)| \le Me^{ct}$ for $t \ge T$.
- **(W2) An asymptotic expansion at the origin.** There are constants $a_0, a_1, a_2, \dots$ and a $\delta \in (0,T]$ such that for every $N \ge 1$ there is a constant $C_N$ with
  $$
  \Bigl| f(t) - \sum_{n=0}^{N-1} a_n\,t^{\,n+\lambda-1} \Bigr| \;\le\; C_N\,t^{\,N+\lambda-1} \qquad (0 < t \le \delta) .
  $$

Then $F(x) = \int_0^{\infty}e^{-xt}f(t)\,dt$ converges absolutely for every $x > c$, and
$$
F(x) \;\sim\; \sum_{n=0}^{\infty} a_n\,\frac{\Gamma(n+\lambda)}{x^{\,n+\lambda}} \qquad (x \to +\infty) ,
$$
in the sense of :ref[]{to=asym.asymptotic-series}: for every $N \ge 1$ there are $K_N$ and $x_N$ with
$$
\Bigl| F(x) - \sum_{n=0}^{N-1} a_n\frac{\Gamma(n+\lambda)}{x^{\,n+\lambda}} \Bigr| \;\le\; \frac{K_N}{x^{\,N+\lambda}} \qquad (x \ge x_N) .
$$

In words: **expand the integrand near the endpoint and integrate the expansion term by term against $e^{-xt}$ over the whole half-line.** No convergence of $\sum_n a_nt^{n+\lambda-1}$ is assumed, and none is used.
:::

:::idea{provenance=original}
Because $e^{-xt}$ decays on the scale $t \sim 1/x$, the integral is deaf to everything except an ever-shrinking neighbourhood of $t = 0$. Two estimates make this precise and together they are the whole proof. First, whatever happens beyond a fixed $\delta > 0$ contributes at most $O(e^{-\delta x})$, which is smaller than every power of $1/x$ and so cannot disturb any order of the expansion. Second, on $(0,\delta]$ the integrand may be replaced by the first $N$ terms of its expansion at the cost of a remainder bounded by $C_Nt^{N+\lambda-1}$, and that remainder integrates against $e^{-xt}$ to exactly $C_N\Gamma(N+\lambda)x^{-(N+\lambda)}$ — one order beyond the last term kept. The individual powers then integrate to Gamma functions, up to another exponentially small correction from extending the range from $\delta$ to $\infty$. Nothing is ever summed over $n$; the argument is run once for each fixed $N$, which is precisely what the Poincare definition asks for.
:::

:::proof{provenance=original}
Throughout fix $N \ge 1$, write $\mu_n = n+\lambda$, and assume $x \ge x_0 := \max(c+1, 2)$.

**Step 0 (convergence).** Taking $N = 1$ in (W2) gives $|f(t)| \le |a_0|t^{\lambda-1} + C_1t^{\lambda}$ on $(0,\delta]$, and $\lambda > 0$ makes both powers integrable at the origin; $f$ is locally integrable on $[\delta,T]$; and (W1) gives $\int_T^{\infty}e^{-xt}|f| \le M\int_T^{\infty}e^{-(x-c)t}dt < \infty$ for $x > c$. So $F(x)$ converges absolutely for $x > c$.

**Step 1 (everything past $\delta$ is beyond all orders).** Split at $T$ and use $\delta \le T$:
$$
\int_{\delta}^{T} e^{-xt}|f(t)|\,dt \;\le\; e^{-x\delta}\int_{\delta}^{T}|f| \;=\; A\,e^{-x\delta} ,
$$
$$
\int_{T}^{\infty} e^{-xt}|f(t)|\,dt \;\le\; M\int_T^{\infty}e^{-(x-c)t}dt \;=\; \frac{M e^{-(x-c)T}}{x-c} \;\le\; M e^{cT}e^{-xT} \;\le\; Me^{cT}e^{-x\delta} ,
$$
the last two steps using $x - c \ge 1$ and $T \ge \delta$. Hence
$$
\Bigl| \int_{\delta}^{\infty} e^{-xt}f(t)\,dt \Bigr| \;\le\; B\,e^{-x\delta} , \qquad B := A + Me^{cT} .
$$
Since $x^{K}e^{-x\delta} \to 0$ for every $K$, this term is $O(x^{-K})$ for every $K$, and in particular $O(x^{-(N+\lambda)})$.

**Step 2 (the monomials, with the range extended).** For $\mu > 0$ the substitution $u = xt$ gives $\int_0^{\infty}e^{-xt}t^{\mu-1}dt = \Gamma(\mu)x^{-\mu}$. The piece we must discard is small: for $x \ge 2$,
$$
\int_{\delta}^{\infty}e^{-xt}t^{\mu-1}dt
\;=\; \int_{\delta}^{\infty}e^{-xt/2}\,e^{-xt/2}t^{\mu-1}dt
\;\le\; e^{-x\delta/2}\int_0^{\infty}e^{-xt/2}t^{\mu-1}dt
\;=\; e^{-x\delta/2}\,\Gamma(\mu)\Bigl(\frac{2}{x}\Bigr)^{\mu} ,
$$
using $e^{-xt/2} \le e^{-x\delta/2}$ on $[\delta,\infty)$. Therefore, for each $n$,
$$
\int_0^{\delta} e^{-xt}t^{\mu_n-1}dt \;=\; \frac{\Gamma(\mu_n)}{x^{\mu_n}} \;+\; E_n(x) , \qquad |E_n(x)| \le \Gamma(\mu_n)2^{\mu_n}e^{-x\delta/2}x^{-\mu_n} ,
$$
and $E_n(x)$, like Step 1, is $O(x^{-K})$ for every $K$.

**Step 3 (the remainder of the expansion).** Put $r_N(t) = f(t) - \sum_{n=0}^{N-1}a_nt^{\mu_n-1}$. By (W2), $|r_N(t)| \le C_Nt^{N+\lambda-1}$ on $(0,\delta]$, so
$$
\Bigl|\int_0^{\delta} e^{-xt}r_N(t)\,dt\Bigr| \;\le\; C_N\int_0^{\delta}e^{-xt}t^{N+\lambda-1}dt \;\le\; C_N\int_0^{\infty}e^{-xt}t^{N+\lambda-1}dt \;=\; \frac{C_N\,\Gamma(N+\lambda)}{x^{\,N+\lambda}} .
$$
This is the only step that uses (W2), and it is where the order of the final error is set.

**Step 4 (assemble).** Writing $F(x) = \int_0^{\delta} + \int_{\delta}^{\infty}$ and, inside the first integral, $f = \sum_{n<N}a_nt^{\mu_n-1} + r_N$,
$$
F(x) \;=\; \sum_{n=0}^{N-1} a_n\Bigl(\frac{\Gamma(\mu_n)}{x^{\mu_n}} + E_n(x)\Bigr) \;+\; \int_0^{\delta}e^{-xt}r_N(t)\,dt \;+\; \int_{\delta}^{\infty}e^{-xt}f(t)\,dt .
$$
By Steps 1-3 the three error contributions are respectively $O(x^{-K})$ for every $K$, at most $C_N\Gamma(N+\lambda)x^{-(N+\lambda)}$, and $O(x^{-K})$ for every $K$. Hence
$$
\Bigl| F(x) - \sum_{n=0}^{N-1} a_n\frac{\Gamma(\mu_n)}{x^{\mu_n}} \Bigr| \;\le\; \frac{K_N}{x^{\,N+\lambda}}
$$
for all $x$ beyond some $x_N$, with $K_N$ built from $C_N\Gamma(N+\lambda)$ and the (exponentially small) constants of Steps 1 and 2. As $N$ was arbitrary, this is the assertion. $\square$
:::

:::remark[Where the hypotheses are used, and what each one rules out]{provenance=original}
- **$\lambda > 0$ is needed in Steps 2 and 3**, where $\Gamma(\mu)$ is finite only for $\mu > 0$. If $f(t) \sim a_0/t$ at the origin, $F(x)$ does not exist for any $x$: Arfken makes the same point for integer powers, noting that $\int_0^{\infty}e^{-st}t^{n}dt$ diverges at the origin once $n \le -1$ :cite[]{work=arfken-2013 loc="p. 1008"}. The lemma never repairs a divergent integral; it describes one that converges.
- **(W1) is used only in Step 1**, to make the far field exponentially small. Dropping it costs everything: for $f(t) = e^{t^{2}}$ there is no $x$ for which $F(x)$ exists :cite[]{work=arfken-2013 loc="p. 1008"}. Note how weak the hypothesis is, though: $f$ may grow like $e^{ct}$ with $c$ as large as one likes, since the conclusion is a statement about $x \to \infty$.
- **(W2) is used only in Step 3.** It is an asymptotic hypothesis, not a convergence hypothesis: the series $\sum a_nt^{n+\lambda-1}$ may diverge for every $t > 0$, and Step 3 never adds up more than $N$ of its terms. Replacing (W2) by "$f$ is analytic near $0$" would be a strictly stronger and quite unnecessary assumption.
- **Only the germ of $f$ at $0$ is seen.** Alter $f$ on $[\delta,\infty)$, keeping (W1): by Step 1 the value of $F$ changes by $O(e^{-\delta x})$, so the whole expansion is unchanged. This is the non-uniqueness built into every asymptotic expansion (:ref[]{to=asym.asymptotic-series}): one expansion, many functions. A corollary worth stating is that no amount of work with the expansion can recover $f$ away from the origin, or detect a term such as $e^{-\delta x}$ in $F$.
- **The direction matters.** The lemma is *Abelian*: small-$t$ information about $f$ yields large-$x$ information about $F$. The converse inference — large-$x$ behaviour of $F$ forcing small-$t$ behaviour of $f$ — is a Tauberian statement and is false without further hypotheses, again because $F$ cannot distinguish $f$ from $f$ plus something supported away from the origin.
- **General exponents.** Nothing in the proof uses that the exponents advance by $1$. If (W2) holds in the form $\bigl|f(t) - \sum_{n<N}a_nt^{\alpha_n-1}\bigr| \le C_Nt^{\alpha_N-1}$ with $0 < \alpha_0 < \alpha_1 < \cdots \to \infty$, the identical argument gives $F(x) \sim \sum_n a_n\Gamma(\alpha_n)x^{-\alpha_n}$. Expansions in powers of $t^{1/2}$ or $t^{1/3}$, which arise whenever a change of variable has a square-root or cube-root branch, are covered by this.
:::

:::method[Using the lemma]{provenance=original}
Given an integral depending on a large parameter $x$:

1. **Bring it to Laplace form.** Substitute so that the exponent is $-xt$ with $t$ running over $[0,\infty)$ (or $[0,\delta]$, which by Step 1 of the proof is the same thing up to exponentially small terms), and so that the decay starts at $t = 0$. If the exponent is $x\phi(t)$ with $\phi$ decreasing and $\phi'(0) \ne 0$, the substitution $u = \phi(0)-\phi(t)$ does it; if $\phi'$ vanishes at the maximum, the right tool is :ref[]{to=asym.laplace-method} instead.
2. **Check (W1).** Verify that the surviving $f$ grows at most exponentially. Usually it is bounded or algebraically growing, and this is immediate.
3. **Expand $f$ about $t = 0$.** Pull out the leading power: write $f(t) = t^{\lambda-1}h(t)$ with $\lambda > 0$ and $h$ smooth (or analytic) at $0$, and expand $h$ in a Taylor or binomial series. Then $a_n = h^{(n)}(0)/n!$, and Taylor's theorem with remainder (:ref[]{to=found.taylor-theorem}) supplies the constants $C_N$ of (W2) at once.
4. **Substitute Gamma functions.** Replace each $a_nt^{n+\lambda-1}$ by $a_n\Gamma(n+\lambda)x^{-(n+\lambda)}$. Nothing else changes.
5. **Restore any prefactor** removed in step 1, such as $e^{x\phi(0)}$ or a Jacobian constant.
6. **Truncate optimally.** The result is an asymptotic series and normally divergent; stop at the smallest term and quote that term as the error (:ref[]{to=asym.asymptotic-series}).
:::

:::example[An integral with a half-integer exponent]{provenance=original}
Take
$$
F(x) \;=\; \int_0^{\infty} \frac{e^{-xt}}{\sqrt{t(1+t)}}\,dt \qquad (x > 0) .
$$

**Step 1: hypotheses.** Here $f(t) = t^{-1/2}(1+t)^{-1/2}$ is positive, locally integrable on $(0,\infty)$, and bounded by $1$ for $t \ge 1$, so (W1) holds with $M = 1$, $c = 0$, $T = 1$. The integral converges for every $x > 0$.

**Step 2: expand at the origin.** With $\lambda = \tfrac12$, write $f(t) = t^{\lambda-1}h(t)$ with $h(t) = (1+t)^{-1/2}$. The binomial series gives
$$
h(t) \;=\; \sum_{n\ge0}\binom{-1/2}{n}t^{n} , \qquad \binom{-1/2}{n} \;=\; \frac{(-1)^{n}(2n-1)!!}{2^{n}\,n!} ,
$$
convergent for $|t| < 1$; truncating it is Taylor's theorem with remainder, which supplies (W2) on $(0,\tfrac12]$ with explicit $C_N$. So $a_n = \binom{-1/2}{n}$.

**Step 3: Gamma functions.** Using $\Gamma(n+\tfrac12) = (2n-1)!!\sqrt{\pi}/2^{n}$,
$$
a_n\,\Gamma\bigl(n+\tfrac12\bigr) \;=\; (-1)^{n}\,\frac{\bigl[(2n-1)!!\bigr]^{2}\sqrt{\pi}}{4^{n}\,n!} ,
$$
so Watson's lemma gives
$$
F(x) \;\sim\; \sqrt{\frac{\pi}{x}}\;\sum_{n=0}^{\infty} \frac{(-1)^{n}\bigl[(2n-1)!!\bigr]^{2}}{4^{n}\,n!\;x^{n}}
\;=\; \sqrt{\frac{\pi}{x}}\Bigl(1 - \frac{1}{4x} + \frac{9}{32x^{2}} - \frac{75}{128x^{3}} + \cdots\Bigr) .
$$

**Step 4: an exact value to check against.** Substituting $t = \sinh^{2}v$, so that $\sqrt{t(1+t)} = \sinh v\cosh v$ and $dt = 2\sinh v\cosh v\,dv$,
$$
F(x) \;=\; 2\int_0^{\infty} e^{-x\sinh^{2}v}\,dv \;=\; e^{x/2}\int_0^{\infty} e^{-(x/2)\cosh w}\,dw \;=\; e^{x/2}K_0\!\left(\frac{x}{2}\right) ,
$$
using $\sinh^{2}v = (\cosh 2v - 1)/2$, the substitution $w = 2v$, and the integral representation of the modified Bessel function (:ref[]{to=spec.modified-bessel}). At $x = 8$ this gives
$$
F(8) \;=\; e^{4}K_0(4) \;=\; 0.609297669257 ,
$$
which agrees with direct numerical quadrature to all figures shown.

**Step 5: the series at $x = 8$.** The terms are $u_n = \sqrt{\pi/8}\,[(2n-1)!!]^{2}/(4^{n}n!\,8^{n})$, with ratio $|u_{n+1}/u_n| = (2n+1)^{2}/\bigl(32(n+1)\bigr)$; this is below $1$ until $n = 8$, so the smallest term is $u_8$ and the optimal truncation keeps $n = 0,\dots,7$.

| $N$ | $\sum_{n<N}(-1)^nu_n$ | error |
|---|---|---|
| $1$ | $0.626657069$ | $+1.74\times10^{-2}$ |
| $2$ | $0.607074035$ | $-2.22\times10^{-3}$ |
| $3$ | $0.609827899$ | $+5.30\times10^{-4}$ |
| $4$ | $0.609110747$ | $-1.87\times10^{-4}$ |
| $5$ | $0.609385282$ | $+8.76\times10^{-5}$ |
| $6$ | $0.609246299$ | $-5.14\times10^{-5}$ |
| $7$ | $0.609333887$ | $+3.62\times10^{-5}$ |
| $8$ | $0.609267805$ | $-2.99\times10^{-5}$ |
| $9$ | $0.609325885$ | $+2.82\times10^{-5}$ |
| $10$ | $0.609267603$ | $-3.01\times10^{-5}$ |

The errors alternate in sign and shrink until $N = 9$, then start to grow: the signature of a divergent asymptotic series. Averaging the two best partial sums,
$$
\tfrac12\bigl(0.609267805 + 0.609325885\bigr) \;=\; 0.609296845 ,
$$
against the true $0.609297669$: a relative error of $1.4\times10^{-6}$ from nine terms of a series that converges for no value of $x$.
:::

:::application[Large-argument expansions of special functions, and early-time response]{provenance=original}
**The complementary error function.** Watson's lemma is the standard machine for turning an integral representation into a large-argument expansion. Take $\mathrm{erfc}(x) = \frac{2}{\sqrt{\pi}}\int_x^{\infty}e^{-s^{2}}ds$ for $x > 0$ and substitute $s^{2} = x^{2}(1+u)$, so that $s\,ds = \tfrac12x^{2}du$ and $s = x\sqrt{1+u}$:
$$
\mathrm{erfc}(x) \;=\; \frac{2}{\sqrt{\pi}}\int_0^{\infty} e^{-x^{2}(1+u)}\,\frac{x^{2}\,du}{2x\sqrt{1+u}} \;=\; \frac{x\,e^{-x^{2}}}{\sqrt{\pi}}\int_0^{\infty} e^{-x^{2}u}\,(1+u)^{-1/2}\,du .
$$
This is a Laplace-type integral with large parameter $X = x^{2}$, with $\lambda = 1$ and $a_n = \binom{-1/2}{n}$. Watson's lemma replaces $u^{n}$ by $n!\,X^{-n-1}$, and restoring the prefactor,
$$
\mathrm{erfc}(x) \;\sim\; \frac{e^{-x^{2}}}{x\sqrt{\pi}}\sum_{n=0}^{\infty}\binom{-1/2}{n}\frac{n!}{x^{2n}}
\;=\; \frac{e^{-x^{2}}}{x\sqrt{\pi}}\left(1 - \frac{1}{2x^{2}} + \frac{3}{4x^{4}} - \frac{15}{8x^{6}} + \cdots\right) .
$$
The coefficients are $(-1)^{n}(2n-1)!!/2^{n}$, which is exactly the series Arfken records for $1 - \mathrm{erf}(x)$ :cite[]{work=arfken-2013 loc="Exercise 12.6.3, p. 584"} — a check on the whole calculation. Numerically at $x = 3$, where $\mathrm{erfc}(3) = 2.20904970\times10^{-5}$: the terms of the bracket fall until $n = 9$ (the ratio of consecutive ones is $(2n+1)/(2x^{2}) = (2n+1)/18$), and truncating after six of them gives $2.208627\times10^{-5}$, a relative error of $1.9\times10^{-4}$. See :ref[]{to=spec.error-function}.

The same route, with the same three lines, produces the large-argument expansions of the incomplete Gamma function, of the exponential integral, and — after the substitution of the example above — of $K_0$ and the other modified Bessel functions (:ref[]{to=spec.bessel-asymptotics}).

**Early-time response from a transform.** In linear-response problems one often knows a material function only through its short-time behaviour. If the creep compliance of a viscoelastic solid behaves as $J(t) = J_0 + J_1t^{1/2} + J_2t + O(t^{3/2})$ as $t \downarrow 0$ — the half-power being the signature of diffusive relaxation — then Watson's lemma applied to $\bar J(s) = \int_0^{\infty}e^{-st}J(t)\,dt$ gives, with no further information about the material,
$$
s\bar J(s) \;=\; J_0 + \frac{\sqrt{\pi}}{2}\,\frac{J_1}{s^{1/2}} + \frac{J_2}{s} + O\bigl(s^{-3/2}\bigr) \qquad (s \to \infty) ,
$$
using $\Gamma(3/2) = \sqrt{\pi}/2$. Since the high-frequency modulus is $1/\bigl(s\bar J(s)\bigr)$ at $s = i\omega$, the measured high-frequency behaviour determines $J_0, J_1, J_2$ and conversely. The same correspondence — small $t$ in the solution, large $s$ in the transform — is what makes Laplace-transform solutions of diffusion problems (:ref[]{to=fourier.laplace-transform}, :ref[]{to=green.causal-green-functions}) easy to read at early times and hard to read at late ones; the late-time end is the Tauberian direction that the remark above warns about.
:::
