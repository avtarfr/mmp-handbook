VERDICT: PASS
UNIT: var.jacobi-conjugate-points
VERIFIER: B

## Findings
1. [minor] definition (line 24), and throughout. This unit sets $P = F_{y'y'}$ and
   $Q = F_{yy} - \frac{d}{dx}F_{yy'}$, while Gelfand and Fomin — cited on this very block, and on
   almost every block — use $P = \tfrac12 F_{y'y'}$ and $Q = \tfrac12\bigl(F_{yy} -
   \frac{d}{dx}F_{yy'}\bigr)$ (their (25), p. 105, and (41), p. 112), because their $\delta^2J$ is
   the quadratic part of the increment rather than $\varphi''(0)$. The factor is harmless — the
   Jacobi equation, the conjugate points and every sign claim are unchanged by it — and the
   convention is correctly declared in the prerequisite unit, `var.second-variation-legendre`, whose
   "*Convention.*" paragraph says exactly this, and which this block points at ("As in the second
   variation"). So nothing is misreported. Still, this is the unit whose reader is most likely to
   open Gelfand and Fomin pp. 105–117 and find a factor of two, and the handbook's other units
   repeat such a convention note locally. Fix: add half a sentence here, e.g. "(Gelfand and Fomin's
   $P$ and $Q$ are half of these; see the second-variation unit.)"
2. [minor] statement 4 (line 61) versus proof, Part 4 preamble (line 103). The statement promises
   $J[y+h] > J[y]$ for every nonzero $h$ with $\|h\|_1 < r$; the proof fixes $h$ with
   $\|h\|_1 \le \rho$ and concludes for $0 < \|h\|_1 < \rho$. The two are reconciled by taking
   $r=\rho$, but the preamble's $\le$ and the conclusion's $<$ should agree. Fix: write
   $\|h\|_1 < \rho$ in the preamble.

## Checked
- Counterexample search: pressed on each hypothesis and on the gap between parts 3 and 4.
  (i) The open-versus-closed interval. This is the obvious place to attack, and the unit supplies
  its own counterexample. I verified it independently: for $J[y]=\int_0^\pi(y'^2-y^2)dx$ with
  Dirichlet data, $y\equiv0$ is an extremal ($2y''+2y=0$), $P=2>0$, $Q=-2$, the Jacobi equation is
  $-2u''-2u=0$ so $u_a=\sin x$ and $b=\pi$ is conjugate; nonetheless $J[h]=\int_0^\pi(h'^2-h^2)\ge0$
  on $H$. The unit's proof of that (Picone with $\tilde P=1$, $u=\sin x$, on $[\varepsilon,
  \pi-\varepsilon]$) works: the boundary term is $h^2\cot x$, and since $|h(x)|\le\max|h'|\cdot
  \min(x,\pi-x)$ it is $O(\varepsilon)$ at both ends. Non-strictness is real:
  $J[\varepsilon\sin x]=\varepsilon^2\int_0^\pi\cos 2x\,dx=0$. And on $[0,\ell]$ with $\ell>\pi$ the
  conjugate point is interior and $J[\sin(\pi x/\ell)]=\tfrac\ell2(\pi^2/\ell^2-1)<0$, which I
  recomputed. So part 3 cannot be strengthened to the closed interval and part 4 cannot be weakened
  to the open one — the unit states both correctly.
  (ii) $P>0$ on the closed interval: without it $u_a$ need not exist on all of $[a,b]$, the Picone
  square can change sign, and there is no room to subtract $\alpha^2$ — the three uses the remark
  lists, all of which I confirmed are the places the proofs actually use it.
  (iii) The corner in Part 2: I checked that $u_a'(c)\neq0$ really does follow from uniqueness for
  the first-order system (if both $u_a$ and $Pu_a'$ vanished at $c$ then $u_a\equiv0$), so the
  perturbation argument has something to bite on; and that the smoothing of step 4 preserves
  membership in $H$ and the sign of $I$.
  (iv) Part 1's $u=u_a+\epsilon u_1$: I checked the three estimates ($u_a\ge0$ and
  $\epsilon u_1\ge\epsilon/2$ on $[a,a+\eta]$; $u\ge m-\epsilon K=m/2$ beyond) and they close, with
  $K\ge1$ guaranteeing $\epsilon\le m/2$. No counterexample found to any statement as written.
- Calculations (sympy + mpmath, `.venv/bin/python`; script run inline):
  - Catenary example, coefficients. With $F=y\sqrt{1+y'^2}$ and $y=\cosh x$: sympy gives
    $F_{y'y'}=y/(1+y'^2)^{3/2}=1/\cosh^2x$, $F_{yy}=0$, $F_{yy'}=y'/\sqrt{1+y'^2}=\tanh x$ and hence
    $Q=-\frac{d}{dx}\tanh x=-1/\cosh^2x$ — all four printed values confirmed. Extremal:
    $F_{y'}=\sinh x$ and $\frac{d}{dx}\sinh x=\cosh x=F_y$.
  - The two Jacobi solutions: substituting $h_1=\sinh x$ and $h_2=\cosh x-x\sinh x$ into
    $-(h'/\cosh^2x)'-h/\cosh^2x$ gives exactly $0$ for both, and their Wronskian is $-\cosh^2x$,
    nowhere zero — the printed value, sign included.
  - $u_a$: sympy confirms $u_a(a)=0$ and $u_a'(a)=1$ for the printed combination, so the claim that
    "the numerator has derivative $\cosh^2a$ at $x=a$" is right; and $u_a(0)=-\sinh a/\cosh^2a$,
    positive for $a<0$, as printed.
  - The conjugate-point equation: dividing the numerator by $\sinh a\sinh x$ does give
    $\coth x-x=\coth a-a$, and $\frac{d}{dt}(\coth t-t)=-1/\sinh^2t-1<0$, so the monotonicity
    argument and the "exactly one zero on $(0,\infty)$, none on $(a,0)$" conclusion hold.
  - Numbers: $\coth(-1)+1 = -0.3130352855$ (printed $-0.313035$), and solving $\coth x-x$ equal to
    that gives $c = 1.433605197$ (printed $1.433605$); substituting back, $u_a(c)=-1.1\times10^{-26}$
    at 25 digits, i.e. zero. The tangent check: $t-\coth t$ equals $0.3130352855$ at $t=-1$ and
    $0.3130352855$ at $t=c$ — the two tangents really do meet the axis at the same point, and the
    identity behind it is just $c-\coth c = -(\coth a - a) = a - \coth a$.
  - Picone's identity (Part 1, step 1): I expanded
    $\bigl(\tilde Pu'h^2/u\bigr)'$ using $(\tilde Pu')'=Qu$ and confirmed both displayed forms, and
    that $\tilde P\bigl(h'-\tfrac{u'}{u}h\bigr)^2+\bigl(\tilde Pu'h^2/u\bigr)'$ collapses to
    $\tilde Ph'^2+Qh^2$ identically.
  - Part 2: the integration by parts giving $\int_a^c(Pu_a'^2+Qu_a^2)=0$ is right, as is
    $I[\hat h,w]=[Pu_a'w]_a^c=P(c)u_a'(c)$ (the term at $a$ dies because $w(a)=0$, not because
    $u_a(a)=0$ — the unit's $w\in H$ supplies that). Expanding
    $I[\hat h-tw]=-2tP(c)u_a'(c)+t^2I[w]$ is correct since $I[\hat h]=0$. The smoothing estimates
    check: $|k_\delta-g'|\le 2G$ on a set of measure $2\delta$ gives $\int|k_\delta-g'|\le4G\delta$,
    the correction term is bounded by the same, and $\int(g_\delta'-g')^2 = O(\delta)\to0$.
  - Part 4: the Taylor identity $J[y+h]-J[y]=\tfrac12I[h]+\int_0^1(1-t)(\varphi''(t)-\varphi''(0))dt$
    uses $\int_0^1(1-t)dt=\tfrac12$ and $\varphi''(0)=I[h]$, both right; $2|hh'|\le h^2+h'^2$ gives
    the factor 2 in step 2; the Poincaré constant is right ($h^2(x)\le(x-a)\int h'^2$ integrates to
    $\tfrac12(b-a)^2\int h'^2$), so $C=1+\tfrac12(b-a)^2$; and assembling gives exactly
    $\bigl(\tfrac{\alpha^2}2-C\omega(\rho)\bigr)\int h'^2$ as printed.
  - Application: for $L=\tfrac12m(\dot q^2-\omega^2q^2)$, $P=m$, $Q=-m\omega^2$, so the Jacobi
    equation is $u''+\omega^2u=0$ — the equation of motion, as claimed — with
    $u_a=\sin(\omega(t-a))/\omega$ and first conjugate time $\pi/\omega$, which is half of the period
    $2\pi/\omega$. Correct.
- Citations: both works opened; every locator matched.
  - gelfand-fomin-1963 pp. 105–117. §26 opens on p. 105 with the quadratic functional (23) and the
    coefficients (25); the definition of a conjugate point ("the equation (26) has a solution which
    vanishes for $x=a$ and $x=\tilde a$ but is not identically zero") and Theorem 1 are on p. 106,
    with the normalisation $h'(a)=1$ in the Remark and footnote 8 giving exactly the uniqueness
    argument the unit's definition block reproduces. Theorem 1's proof (complete the square, the
    Riccati equation (29), the substitution (32) to the Jacobi equation (33)) runs pp. 107–108, and
    footnote 9 on p. 108 is the continuous-dependence trick the unit's Part 1 replaces with the
    $u_a+\epsilon u_1$ construction; the Lemma ($\int(Ph'^2+Qh^2)=0$ for a Jacobi solution vanishing
    at both ends) is on p. 108, which is Part 2 step 1. Theorem 2 is on pp. 109–110, Theorem 2'
    (nonnegative $\Rightarrow$ no *interior* conjugate point) and Theorem 3 (the iff) on p. 111.
    §27: Definitions 1–2 and the theorem "Jacobi's necessary condition", with hypothesis
    $F_{y'y'}>0$ and conclusion about the *open* interval, are on p. 112; the variational-equation
    derivation and Definitions 3–4 (neighbouring extremals) run pp. 112–114; the sphere example,
    "The conjugate of any point $M$ on the sphere is the diametrically opposite point", is on p. 115.
    §28's theorem (extremal + strengthened Legendre + strengthened Jacobi $\Rightarrow$ weak minimum,
    with footnote 15 distinguishing the strengthened from the ordinary Jacobi condition) is on
    p. 116, and its proof — the $\alpha^2$-perturbed functional (45)–(47), the Schwarz/Poincaré
    estimate (48)–(49) — runs pp. 116–117. Every locator in the frontmatter and in the block `src`
    attributes is where it is claimed to be, with the single caveat of finding 1 about their
    factor $\tfrac12$.
  - docarmo-2016 pp. 427–429. §5-9: the index form $I(V,W)$ and Lemma 2
    ($I(V,W)=\langle DV/ds(l),W(l)\rangle-\langle DV/ds(0),W(0)\rangle$ for a Jacobi field $V$) are
    on pp. 427–428; Theorem 2 (Jacobi) — an interior conjugate point yields a proper broken
    variation strictly decreasing length — is on p. 428, and its proof is exactly the route the
    frontmatter claims: $J(0)=J(s_0)=0$, $(DJ/ds)(s_0)\neq0$ "otherwise $J(s)\equiv0$", a field
    $Y_\eta=J+\eta Z$ on $[0,s_0]$ and $\eta Z$ beyond, and the expansion
    $I_{s_0}(Y_\eta,Y_\eta)=2\eta\langle DJ/ds(s_0),Z(s_0)\rangle+\eta^2I_{s_0}(Z,Z)$ on p. 429. The
    unit's Part 2 is that argument transposed to the scalar functional, which is what the `role`
    field says it is. (do Carmo allows broken variations and so needs no smoothing; the unit's
    step 4 supplies one, which is ours.)
- Provenance: `tools/check` reports no overlap or `resembles` warning for this unit, and I compared
  each adapted block with its pages. Part 1 reaches Gelfand and Fomin's Theorem 1 but by a visibly
  different route — Picone's identity written out directly instead of their Riccati substitution
  (32), and an explicit construction $u=u_a+\epsilon u_1$ of a nonvanishing solution in place of
  their footnote-9 appeal to shifting the left endpoint to $a-\varepsilon$; the $\alpha^2$ step is
  their §28 argument, declared. Part 2 is do Carmo's geodesic proof carried over to the scalar case,
  declared, with the smoothing lemma added. Part 3 is two sentences and is theirs in substance, as
  the `src` says. Part 4 follows §28, but with the remainder controlled by an explicit modulus of
  continuity $\omega(\rho)$ and Taylor with integral remainder, where they write
  $\zeta,\eta\to0$ uniformly. The definition block is more careful than the source (the first-order
  system, the $C^1$ claims for $u$ and $Pu'$, the extension of $I$ to piecewise $C^1$ functions),
  which is our own work. The `original` blocks: the catenary example is not in Gelfand and Fomin's
  §§26–28 (their worked instances are the sphere and the summary of necessary conditions), and the
  $\int_0^\pi(y'^2-y^2)$ example, the harmonic-oscillator bullet and the buckling/Morse paragraph
  have no counterpart on the cited pages. The two `:cite[]` directives in the `original` blocks
  (sphere, neighbouring extremals) point at the right pages.
- Style: an `idea` block states the mechanism of all four parts before any proof; no
  "clearly"/"obviously"/"easy to see"; one fully worked example ending in checkable numbers
  ($c=1.433605$, tangent intercept $0.313035$), with an independent geometric cross-check;
  hypotheses are named at the steps that use them and collected in a remark that gives a genuine
  counterexample for the sharpest one (the closed versus open interval). The unit is explicit about
  what it does not do (strong minima, Weierstrass's condition, the Morse index theorem).
- Automated checks: `node tools/check/index.mjs --record` reports `ok` for this unit, with no
  unit-level warn line.
