VERDICT: PASS
UNIT: green.volterra-equations
VERIFIER: B

## Findings
1. [minor] application, third paragraph (line ~283): "the Born–von Kármán treatment of causal
   response" names the wrong thing. Born–von Kármán is the periodic-boundary-condition device of
   lattice dynamics, which has nothing to do with causality or with triangular integration ranges —
   if anything it is the opposite. Nothing in the mathematics depends on the name, and the rest of
   the sentence (time ordering restricts the integral to the past, the factorials appear, the series
   converges for every coupling) is correct and is exactly what Arfken's Dyson-series display
   (21.59)–(21.60), p. 1067, shows. Fix: drop the phrase, or replace it with the Volterra form of
   linear-response theory (Kubo, or the Kramers–Kronig analyticity that follows from causality).
2. [minor] remark, first bullet (line ~226): the sentence order invites a false inference. The unit
   reports Arfken's criterion — square-integrability of the kernel suffices in the Volterra case —
   and then says "Abel's kernel shows how much room that leaves. It is unbounded on the triangle,
   yet ...". At the classical $\alpha=\tfrac12$ the Abel kernel is *not* square-integrable on the
   triangle: $\iint_{t\le x}(x-t)^{-1}\,dt\,dx$ diverges. The unit never claims it is, and it proves
   the conclusion directly from the iterated kernels instead of invoking the criterion, so nothing is
   wrong; but a reader will naturally read Abel's kernel as an instance of the square-integrable case
   it is not. Fix: say so — the example goes past Arfken's criterion as well as past boundedness,
   which makes the point stronger, and note that $(x-t)^{-\alpha}$ is square-integrable on the
   triangle only for $\alpha<\tfrac12$.
3. [minor] unit scope (lines 56, 160): the style guide says "If a unit needs two statements, it is
   two units linked by a prerequisite", and this unit carries two independent theorems — the
   unconditional solvability of second-kind Volterra equations and the inversion of Abel's equation —
   each with its own idea and proof. The definition block argues the pairing (Abel is the natural
   foil: singular but of the first kind) and the remark uses each to illuminate the other, so the
   pairing is defensible rather than accidental; it is still a deviation worth a conscious decision.
   Fix: either split, or leave it and accept the exception.
4. [source] hassani-2013, §18.1, p. 544, the line after eq. (18.5): Hassani passes from the pointwise
   bound to "an operator norm inequality" while leaving the factor $\lVert u\rVert_\infty$ on the
   right, so that the printed inequality's right-hand side depends on $u$ and its left-hand side does
   not; the next display, bounding the series by $\mathrm{e}^{M|\lambda|(b-a)}$, drops the factor
   without comment. His Theorem 18.1.2 is unaffected. The unit reports this slip explicitly in its
   statement block instead of copying it, which is the right handling. Recorded with
   `node tools/discrepancy.mjs add green.volterra-equations hassani-2013 ...`; not a reason to fail.
5. [minor] frontmatter `prereqs` (line 7): `node tools/check/index.mjs` warns that
   `funcan.banach-fixed-point` comes after this unit in `content/map.yaml` (part `funcan` at line 573,
   part `green` at line 460). The dependence is real — step 3 of the proof invokes the contraction
   mapping theorem — and honestly declared; the defect is in the map order. No `resembles` line, and
   the only other warn naming a `green` unit is the same thing for three siblings. Fix: reorder the
   map, or accept the forward reference deliberately.

## Checked
- Counterexample search:
  - Part 1 "for every $\lambda$": tried to break it with a large $\lambda$ on a long interval, which
    is what the example does ($\lambda=2$, $c=\mathrm{e}$, so the Fredholm condition
    $|\lambda|c(b-a)<1$ fails from $b>0.18$ onwards); the solution exists and is unique, as computed
    below.
  - Part 2: tried to produce a nonzero solution of $y=\lambda\mathcal{K}y$ for the example's kernel —
    the ODE route gives $y'=3y$ with $y(0)=0$, hence $y\equiv0$, consistent.
  - Discontinuous kernel across the diagonal: the extension $K=0$ for $t>x$ is discontinuous on the
    square, which is why the hypothesis is continuity on the *triangle*; the unit says this in the
    definition and Kreyszig says it on p. 323.
  - Abel at the endpoints of $0<\alpha<1$: at $\alpha\to1$ the beta integral's exponent $-\alpha$
    reaches $-1$ and diverges, and $\sin\pi\alpha\to0$ blows the formula up; at $\alpha=0$ the
    equation degenerates to $\int_0^xy=f$. Both are stated in the last remark bullet, correctly.
  - Abel step 2 without smoothness of $f$: took $f$ a step function, for which
    $z\mapsto\int_0^zf(x)(z-x)^{\alpha-1}dx$ is continuous but the differentiation of step 2 can fail
    at the jump; the unit's fourth remark bullet already restricts the formula to points where that
    primitive is differentiable, so no counterexample to the statement as written.
- Calculations (`.venv/bin/python`, sympy + mpmath; scripts at
  <local scratch path> and
  .../vol2.py):
  - Example part 1, closed form. The differentiation step reproduces: $y'=1+(y-x)+2y=3y-x+1$,
    $y(0)=0$, particular solution $x/3-2/9$, so $y=\tfrac29\mathrm{e}^{3x}+\tfrac x3-\tfrac29$.
    $y(1)=4.5745637607$, matching the unit's 4.5745638. Substituting this $y$ back into the
    right-hand side by 25-digit quadrature at $x=0.3,0.7,1.0,1.5$ gave residuals
    $3.5\times10^{-17}$, $4.1\times10^{-16}$, $1.9\times10^{-17}$, $8.3\times10^{-25}$ — the unit's
    "to 17 significant digits" at exactly those four points is right.
  - Example part 1, iterates. Sympy gives $y_1=2\mathrm{e}^x-x-2$,
    $y_2=4x\mathrm{e}^x-6\mathrm{e}^x+3x+6$,
    $y_3=4x^2\mathrm{e}^x-12x\mathrm{e}^x+18\mathrm{e}^x-5x-18$ — all three exactly as printed.
    At $x=1$: $1.000000$, $2.436564$, $3.563436$, $4.182818$, $4.446551$ (and $4.538467$ next) — the
    five numbers the unit lists. Gaps to the limit: $3.574564$, $2.138000$, $1.011127$, $0.391745$,
    $0.128012$; ratios $0.5981$, $0.4729$, $0.3874$, $0.3268$ — the unit's "3.575, 2.138, 1.011,
    0.392, 0.128" and "0.60, 0.47, 0.39, 0.33", and the ratios do keep falling (next is $0.282$).
  - Example part 1, the crude constant. $c=\max_R\mathrm{e}^{x-t}=\mathrm{e}$ on $0\le t\le x\le1$, so
    $\kappa=2\mathrm{e}=5.436564$ — the unit's 5.437. $\alpha_m=\kappa^m/m!$ gives
    $\alpha_5=39.5768$ (the unit's 39.6, and it is the maximum), and the first $m$ with $\alpha_m<1$
    is $m=13$ with $\alpha_{13}=0.5820$ — the unit's "first drops below 1 only at $m=13$
    ($\alpha_{13}=0.582$)". All five numbers confirmed.
  - Beta integral. The substitution $x=t+(z-t)s$ gives
    $(z-t)^{\alpha-1-\alpha+1}=(z-t)^0$, so the powers do cancel exactly, and the remaining integral
    is $B(1-\alpha,\alpha)$. Numerically $B(\tfrac34,\tfrac14)=4.442882938$ and
    $\pi/\sin(\pi/4)=4.442882938$ — the unit's 4.44288 at $\alpha=\tfrac14$; at $\alpha=\tfrac12$
    both are $\pi$.
  - Example part 2, Abel. $\int_0^xt(x-t)^{-1/2}dt=x^{3/2}B(2,\tfrac12)$ and
    $B(2,\tfrac12)=\Gamma(2)\Gamma(\tfrac12)/\Gamma(\tfrac52)=\sqrt\pi/(\tfrac34\sqrt\pi)=\tfrac43$,
    so $y=\tfrac1\pi\cdot\tfrac43\cdot\tfrac32\sqrt x=\tfrac2\pi\sqrt x$. The independent check
    reproduces: $\tfrac{2x}\pi B(\tfrac32,\tfrac12)=\tfrac{2x}\pi\cdot\tfrac{\pi}2=x$. Both beta
    values verified.
  - Remark, Abel kernel as a second-kind kernel. Treating $k=(x-t)^{-1/2}$ as
    $\sqrt\pi\,g_{1/2}$ with $g_\beta(u)=u^{\beta-1}/\Gamma(\beta)$ and using
    $g_\beta*g_\gamma=g_{\beta+\gamma}$ gives
    $K_m=\pi^{m/2}(x-t)^{m/2-1}/\Gamma(m/2)$ — which is $K_1=(x-t)^{-1/2}$ and $K_2=\pi$, both as the
    unit says — and $\int_0^xK_m=\pi^{m/2}x^{m/2}/\Gamma(\tfrac m2+1)$, as printed. For $f\equiv1$ and
    $\lambda=3$ I summed $\sum_{m\ge0}(\lambda\sqrt{\pi x})^m/\Gamma(\tfrac m2+1)$ and compared with
    $1+\lambda\int_0^xy(t)(x-t)^{-1/2}dt$ by quadrature: at $x=0.1$, $33.50983486$ versus
    $33.50983484$; at $x=0.5$, $2758821.266$ versus $2758821.263$; at $x=1$,
    $3.805547791\times10^{12}$ versus $3.805547785\times10^{12}$. The unit's "checked numerically
    against the equation at $\lambda=3$" holds.
  - Application, tautochrone. With $f\equiv T$ the formula gives
    $u(y)=\tfrac1\pi\frac{d}{dy}(2T\sqrt y)=T/(\pi\sqrt y)$, hence
    $(ds/dy)^2=2gT^2/(\pi^2y)=a/y$ with $a=2gT^2/\pi^2$ and $dx/dy=\sqrt{a/y-1}$ — all as printed. I
    checked the cycloid claim independently: for $x=R(\theta+\sin\theta)$, $y=R(1-\cos\theta)$ one gets
    $(dx/dy)^2=(1+\cos\theta)/(1-\cos\theta)$, which equals $a/y-1$ exactly when $a=2R$, so $a$ is the
    *diameter* and the radius is $a/2$ — the unit's wording is right, as is $L=2a=4\cdot(a/2)$.
    $T=\pi\sqrt{a/(2g)}$ inverts $a=2gT^2/\pi^2$, and $4\pi\sqrt{a/(2g)}=2\pi\sqrt{2a/g}$ identically.
    With $a=1$, $g=9.80665$: $T=0.7093728$ and $4T=2.8374912$, so the unit's $0.70937$ and $2.83749$
    are right, and $2\pi\sqrt{2a/g}$ gives the same $2.8374912$.
- Citations:
  - kreyszig-1978, pp. 321–323: eq. (7) is the Volterra equation; Theorem 5.4-2 states exactly the
    hypotheses the unit states ("$v$ ... continuous on $[a,b]$ and the kernel $k$ ... continuous on the
    triangular region $R$ ... $a\le\tau\le t$, $a\le t\le b$") and the conclusion "has a unique
    solution $x$ on $[a,b]$ for every $\mu$"; (8)–(10) pp. 321–322 are the map $T$, the one-step bound
    and the factorial induction; Lemma 5.4-3 p. 323 is the fixed point of a map a power of which is a
    contraction, with its own proof; and the Volterra-as-Fredholm remark with the diagonal caveat is
    the last paragraph of p. 323. Every locator matched.
  - hassani-2013, pp. 544–545: (18.5) and the operator-norm line are on p. 544, Theorem 18.1.2 on
    p. 545 with the series solution in the iterated kernels, and the "we treat the Volterra equation
    first because it is easier to solve" remark on p. 544 — which is what the application attributes
    to him. Matched; see finding 4 for the slip the unit reports.
  - stakgold-holst-2011: §4.4 Example 4 (4.4.11)–(4.4.15) pp. 251–252 — the nonlinear Volterra
    equation, the Lipschitz condition (4.4.12) in the form the unit quotes, the factorial estimates
    (4.4.13)–(4.4.14), "these results hold for arbitrarily large $b$ as long as the Lipschitz condition
    (4.4.12) remains valid", and part (b) with $k(x,y,z)=\mu k(x,y)z$ concluding "the Volterra equation
    has no eigenvalues". Matched, including the unit's identification of the linear case. §6.1
    Example 1 (6.1.1) p. 352 — Abel's equation with $u(y)=(2g)^{-1/2}ds/dy$, the sentence that $f$ "may
    have to satisfy some conditions for a solution to exist", and the free-fall bound
    $f(y)\ge(2y/g)^{1/2}$ with the gloss that the prescribed descent time must exceed free fall.
    Matched word for sense.
  - arfken-2013: Example 21.2.2 (21.27) p. 1055 is the generalized Abel equation with $0<\alpha<1$;
    (21.28)–(21.29) p. 1056 give the Laplace route, the division by $s$ (with the footnote explaining
    why $s^{1-\alpha}$ cannot be inverted directly) and the inversion formula
    $\varphi=\frac{\sin\pi\alpha}{\pi}\frac{d}{dx}\int_0^xf(t)(x-t)^{\alpha-1}dt$ — exactly the unit's
    display. Exercise 21.2.6 p. 1061 is precisely the unit's proof route: multiply by
    $(z-x)^{\alpha-1}$, integrate over $0\le x\le z$, reverse the order, recognise the beta function,
    with the Note giving $B(1-\alpha,\alpha)=\Gamma(\alpha)\Gamma(1-\alpha)=\pi/\sin\pi\alpha$.
    §21.3 p. 1067 closes with "In the Volterra case the Neumann series converges for all $\lambda$ as
    long as the kernel is square integrable", which is the unit's attribution verbatim in substance,
    and the Dyson series (21.59)–(21.60) is on the same page. I also checked the frontmatter's own
    caveat: (21.26) is indeed the Fourier-transform solution of Example 21.2.1, not the Abel equation,
    so that note is correct. Every locator matched.
  - rhb-2006: §23.2 p. 805 has the Volterra-as-Fredholm remark ("$K(x,z)=0$ for $z>x$"); §23.5
    (23.34)–(23.35) pp. 813–814 give the Neumann series and the iterated-kernel recurrence in the form
    the unit uses. Matched.
- Provenance: `adapted` with src on both definitions/statements, both proofs and the remark;
  `original` on both idea blocks, the example and the application. Closest comparison: the first
  proof against Kreyszig (8)–(10) and Lemma 5.4-3, and against Stakgold–Holst (4.4.12)–(4.4.14). The
  estimate (E) is the same induction in all three — there is only one — but the unit splits the
  argument into five numbered steps, proves Kreyszig's lemma by a different route (commuting powers
  plus continuity of $T$, where Kreyszig argues through $d(Tx,x)=0$), adds the "every iterate of $T$
  converges" paragraph that neither book states and that step 5 then needs, and carries the kernel
  bound of part 3 as a separate induction with its own base case — Kreyszig does not state part 3 at
  all. The Abel proof follows Arfken's Exercise 21.2.6 route by design and says so, but supplies the
  substitution, the Fubini justification and the convergence check for the beta integral, none of
  which is in the exercise. I judge both adapted blocks genuinely rewritten.
  `npm run check -- green.volterra-equations` gives no `resembles` line.
- Style: an idea block before each proof; no "clearly"/"obviously"/"it is easy to see" (grepped);
  both proofs end with $\square$; a fully worked example with many checkable numbers; a remark
  devoted to where each hypothesis is used, naming continuity on the closed triangle, the triangular
  support, the interval length and $0<\alpha<1$ separately. Two theorems in one unit — finding 3.
