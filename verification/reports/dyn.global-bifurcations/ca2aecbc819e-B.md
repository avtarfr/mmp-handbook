VERDICT: PASS
UNIT: dyn.global-bifurcations
VERIFIER: B

## Findings
1. [minor] proof (c), Step 6 (line 231): the stated reason why Step 3's section-independence
   does not apply to the pair (exit edge $u=\delta$, entry edge $s=\delta$) is inaccurate as
   written. $\Psi$ *does* carry each curve's crossing to the same curve's crossing: the globally
   continued $W^{s}$ meets $u=\delta$ at $s=\Psi^{-1}(0)$ and $\Psi$ sends that to $u=0$, and
   $\Psi$ sends the local $W^{u}$ crossing $s=0$ to the returning $W^{u}$ crossing $u=u_0$.
   Measured consistently as (returning $W^{u}$) minus ($W^{s}$) the separation on the exit edge
   is $+u_0/a$, i.e. Step 3's positive-factor rule holds between these two edges too. The sign
   reversal has a different cause, which the same paragraph already names correctly one sentence
   earlier ("the curve it is read from" changes): under time reversal the reversed separation is
   read from the reversed stable curve, which is the *old unstable* curve, so it is minus the
   forward separation. Fix: delete the clause "because $\Psi$ does not carry the crossing of one
   curve to the crossing of the same curve" and say instead that the reversed separation measures
   the old $W^{s}$ from the old $W^{u}$, the exchange of the two roles being what flips the sign.
   The computed value $\tilde u_0 = \Psi^{-1}(0) = -u_0/a + O(u_0^2)$ and the conclusion that the
   sign reverses are correct and are established independently in the same sentence, so nothing
   downstream is affected.
2. [minor] example "A homoclinic bifurcation located exactly by energy balance", period table
   (line 374): the $\epsilon = 1$ slope at $d = 10^{-4}$ reads $1.519232$; recomputed from the
   unrestricted integration it is $1.5192328$, i.e. $1.519233$. The printed value is exactly what
   the stated recipe gives from the rounded $T$ column ($3.498162/\ln 10 = 1.5192325$), so it is
   self-consistent, but the unit asserts two paragraphs later that "at $d \ge 10^{-5}$ ... all six
   decimals stand". Fix: either print $1.519233$, or add to the sentence about the $\alpha_c$ table
   ("formed from $\alpha_c$ at full working precision") a matching note that the slope column is
   formed from the rounded $T$ column. Every other entry of both period tables reproduced exactly.
3. [minor] proof (c), Step 2 (line 192): "carries a neighbourhood of the exit edge $u=\delta$ to
   the entry edge $s=\delta$" - what is meant is a neighbourhood, inside the exit edge, of the
   point where $\Gamma$ meets it. Fix: "a neighbourhood, on the exit edge $u=\delta$, of the point
   where $\Gamma$ leaves the square".

## Checked
- Automated: `node tools/check/index.mjs --record dyn.global-bifurcations` -> `1/1 unit(s) pass`,
  no FAIL line and no warn line naming this unit (the 98 warnings are map-ordering warnings on
  other files). `npm run check -- dyn.global-bifurcations` -> `ok`, in particular no
  "resembles" line.
- Counterexample search, part (a): the hypothesis $\omega + b\rho \neq 0$ on $\rho\in[0,1]$ is
  needed and sufficient for the range actually used, since $\rho_+ \uparrow 1$ as $\mu\uparrow 0$
  and $\rho_-\downarrow 0$; the unit's own degenerate case $b=-2\omega$ does kill $\dot\theta$ on
  $r^2=\tfrac12$. The two sufficient conditions offered ($b$ of the sign of $\omega$; $|b|<|\omega|$)
  both work. Outer root stable / inner unstable confirmed from the sign of $\mu+\rho-\rho^2$.
- Counterexample search, part (b): for $\mu<1$ the two roots of $\sin\theta=\mu$ are
  $\theta_1=\arcsin\mu$ (planar eigenvalues $-2$, $-\cos\theta_1<0$: stable node) and
  $\theta_2=\pi-\arcsin\mu$ (eigenvalues $-2$, $+|\cos\theta_2|$: saddle), so "one a saddle and one
  a stable node" is right, and the two arcs between them do run one each way, as the sign of
  $\mu-\sin\theta$ shows. No closed orbit survives.
- Part (c), the four points the task flags, all recomputed from the proof's own coordinates:
  (i) *Scaling exponent.* Step 1 gives $s_{\rm out}=\delta(u_{\rm in}/\delta)^{\nu}$ with
  $\nu=\lambda_s/\lambda_u$, so inverting, $u_{\rm in}=\delta(s_*/\delta)^{\lambda_u/\lambda_s}$.
  With $s_*\asymp|\tilde u_0|\asymp|u_0|$ from the reversed-time Step 4, the crossing on the
  incoming branch is of order $|u_0|^{\lambda_u/\lambda_s}$. The exponent $\lambda_u/\lambda_s$ in
  the statement is correct, and it is $>1$, so the distance is indeed far smaller than $|u_0|$ -
  which is exactly why the bracket $[\sigma,2\sigma]$ cannot be carried to the other branch.
  Independent cross-check of the period from this: $t_N=\lambda_u^{-1}\ln(1/u_{\rm in})
  =\lambda_u^{-1}(\lambda_u/\lambda_s)\ln(1/|u_0|)=\lambda_s^{-1}\ln(1/|\mu-\mu_c|)$, agreeing with
  the limit $1/\min(\lambda_u,\lambda_s)$ obtained by the proof's time reversal.
  (ii) *Attracted/repelled side.* The reversed coordinates are $(\tilde u,\tilde s)=(s,u)$, so the
  reversed "interior quadrant" $\tilde u>0$, $\tilde s>0$ is the same set $u>0$, $s>0$. The side is
  therefore the interior in both cases, as stated.
  (iii) *Not the side the returning branch enters.* With $\tilde u_0=-u_0/a$, orbits exist where
  $\tilde u_0>0$, i.e. where $u_0<0$, i.e. with the returning $W^u$ branch in the exterior, while
  the repelled neighbourhood is still the interior. The statement's explicit denial is correct, and
  Step 4's parenthesis "which in this case, $u_0>0$, is also the side into which the unstable curve
  returns" correctly confines the coincidence to $\lambda_u<\lambda_s$.
  (iv) *Which side of $\mu_c$.* $\tilde u_0=-u_0/a$ with $a>0$ reverses the sign, so for fixed
  $\operatorname{sign}u_0'(\mu_c)$ the two eigenvalue orderings put the cycle on opposite sides.
  Confirmed against the worked example (below), which is the case $\lambda_u>\lambda_s$ and has its
  cycle where $u_0<0$.
- Part (c), no overreach: the statement says "at least one closed orbit", names *unique* and *limit
  cycle* as deliberately absent, calls the attraction one-sided and says the side is the interior
  only, and attributes isolation/uniqueness/stability to the $C^1$-linearization argument it does
  not run. Step 4 matches: it proves existence by IVT on $[b,2b]$, confinement of every fixed point
  in $(0,u_1]$ to $[u_0,2u_0]$, $R$ mapping $(0,u_1]$ into itself with monotone iterates, and then
  explicitly states that the bounds do not give isolation. I checked each inequality: $\nu_->1$
  follows from $2\epsilon<\lambda_s-\lambda_u$; $R(b)\ge b$ and $R(2b)\le 2b$; $R(u)\le u_0+u/2<u$
  for $u>2u_0$; and on the other side $u_0<0$ gives $R(u)<u$ throughout, hence no cycle. Step 1's
  sandwich and the exponents $\nu_\pm=(\lambda_s\mp\epsilon)/(\lambda_u\pm\epsilon)$ (sign pattern
  as printed) are what the bounds $\lambda_u\pm\epsilon$, $\lambda_s\pm\epsilon$ give; the
  constraint $\epsilon<\min(\lambda_u,\lambda_s)$ is what the text says it is.
- Calculations (all with `.venv/bin/python`, mpmath at 25 digits and scipy DOP853 at rtol
  $10^{-13}$):
  - $r_c=1/\sqrt2=0.70710678\ldots$; period $2\pi/|\omega+b/2|$ at $\rho=\tfrac12$: both as printed.
  - $\int_0^{2\pi}d\theta/(\mu-\sin\theta)=2\pi/\sqrt{\mu^2-1}$; bottleneck integral
    $\int_{\mathbb R}d\psi/((\mu-1)+\psi^2/2)=\pi\sqrt2/\sqrt{\mu-1}$: both reproduced.
  - Example (b): $T(1.01)=44.31817210$, $\sqrt{0.0201}=0.14177447$, $2\pi/\mu=6.22097555$,
    ratio $7.12399$, prediction $44.42882938$, relative error $0.0024969$ (the unit's $0.25\%$),
    $T(1.005)=62.75346021$, ratio $1.4159758$ (the unit's $1.41598$).
  - Melnikov integrals: $\int_{-1}^{1}\sigma^2(1-\sigma^2)d\sigma=4/15$ and
    $\int_{-1}^{1}\sigma^2(1-\sigma^2)^2d\sigma=16/105$ exactly; hence $\int y^2dt=6/5$,
    $\int xy^2dt=36/35$, $\alpha_c=6/7=0.857142857\ldots$ Also verified $dH/dt=\epsilon y^2(\alpha-x)$,
    $H(3/2,0)=0$, $H(1,0)=-1/6$, and that $x=\tfrac32\operatorname{sech}^2(t/2)$ solves
    $\ddot x=x-x^2$.
  - Which side carries the cycle, analytically: $\Delta H>0$ for $\alpha>6/7$, and
    $dH/dx=x(x-1)>0$ at $x=3/2$, so the returning $W^u$ lands at larger $x$, i.e. outside. Hence
    $u_0<0$ where the cycle exists, consistent with $\lambda_u>\lambda_s$ as the statement requires.
  - $\alpha_c(\epsilon)$ by my own shooting (manifolds launched at $10^{-10}$ along the
    eigendirections, first crossing of $y=0$ with $x>1$, brentq): $0.857217817607$, $0.857161598815$,
    $0.857145855880$, $0.857143606831$ for $\epsilon=0.10,0.05,0.02,0.01$ - the unit's four entries
    to every printed digit. Differences $7.4960\cdot10^{-5}$, $1.8742\cdot10^{-5}$,
    $2.9987\cdot10^{-6}$, $7.4969\cdot10^{-7}$ and ratios $0.0074960$, $0.0074967$, $0.0074968$,
    $0.0074969$: the table reproduces, and the unit's reading of it (four figures from
    $\epsilon=0.05$ down, creeping in the fifth, limit near $0.007497$) is what the numbers show.
    At $\epsilon=1$: $\alpha_c=0.864545247421$, matching the printed $0.8645452474$.
  - Eigenvalues: at $\epsilon=0.1$, $\alpha=6/7$, $\lambda^2-\tfrac3{35}\lambda-1=0$ gives
    $\lambda_u=1.04377509$, $\lambda_s=0.95806080$, product exactly $1$, and
    $1/\lambda_s$ exceeds $1/\lambda_u$ by $8.95\%$ (the unit's "9\%"). At $\alpha_c(0.1)$:
    $1.0437790$, $0.9580572$. At $\epsilon=1$, $\alpha_c$: $1.5217035$, $0.6571582$, ratio $2.3156$
    (the unit's "factor $2.32$").
  - Period tables: my independent backward integration from $(1.1,0)$, timing returns to $y=0$,
    $x>1$, gives for $\epsilon=0.1$ $T=9.966954$, $12.773439$, $15.412528$, $17.969326$,
    $20.479923$, $22.961626$, $25.423873$ and slopes $1.218841$, $1.146142$, $1.110403$,
    $1.090338$, $1.077790$, $1.069340$; for $\epsilon=1$ $T=10.250481$, $13.728902$, $17.227064$,
    $20.730098$, $24.233849$, $27.737695$, $31.241614$ and slopes $1.510659$, $1.5192328$,
    $1.521348$, $1.521660$, $1.521701$, $1.521732$. Every printed figure agrees except the single
    last digit noted in Finding 2. The qualitative readings also hold: the $\epsilon=0.1$ column
    falls monotonically, its gap to $1.0437790$ shrinking by factors $0.58,0.65,0.70,0.73,0.75$ per
    decade (the unit's "roughly $0.7$", and tending to the predicted $10^{-0.0895}=0.81$), and stays
    far above $0.9580572$; the $\epsilon=1$ column settles on $1.5217$. The exponent
    $\lambda_u/\lambda_s-1=0.08948$ at $\epsilon=0.1$ matches the unit's $d^{0.0895}$, and the
    error budget $\delta/(\lambda_s d)$ gives $1.5\cdot10^{-4}$ at $d=10^{-8}$ and $1.5\cdot10^{-7}$
    at $d=10^{-5}$, as claimed.
  - Time-reversal identification: $(x,y,t)\mapsto(x,-y,-t)$ turns the $\epsilon=1$ member into
    $\dot x=y$, $\dot y=\mu y+x-x^2+xy$ with $\mu=-\alpha$ (checked by substitution), so
    $\alpha_c=0.8645452$ corresponds to $\mu_c=-0.8645452$, against Strogatz's $\approx-0.8645$.
- Citations:
  - strogatz-1994 pp. 260-263 (definition block): p. 260 opens 8.4 with the four common ways and
    the "large regions of the phase plane ... hence called global" wording; p. 261 the fold of
    cycles in $\dot r=\mu r+r^3-r^5$, $\dot\theta=\omega+br^2$ with the origin not participating;
    p. 262 the infinite-period prototype, bottleneck at $\theta=\pi/2$, saddle and node for
    $\mu<1$, amplitude $O(1)$ and period like $(\mu-\mu_c)^{-1/2}$, and the start of the homoclinic
    scenario; p. 263 the numerical example with $\mu_c\approx-0.8645$ and the remark about which way
    the unstable manifold veers. All as attributed.
  - strogatz-1994 p. 264 (the table): the four rows read $O(\mu^{1/2})/O(1)$, $O(1)/O(1)$,
    $O(1)/O(\mu^{-1/2})$, $O(1)/O(\ln\mu)$, under the heading "Amplitude of stable limit cycle",
    with the homoclinic estimate referred to Exercise 8.4.12 and Gaspard (1990). The unit's table,
    the remark that the heading restricts to the stable cycle, and the gloss that $O(\ln\mu)$ means
    growth like $\ln(1/\mu)$ all match; the book's table is misnumbered 7.4.1 but the unit does not
    cite a table number.
  - strogatz-1994 pp. 264-265 (Example 8.4.1): the degeneracy diagnosis, the rescaling
    $u=\epsilon^{1/2}x$ and the resulting $2\sqrt\epsilon\cos t$ are on those pages, as the remark
    says. The closing caveats on p. 265 (same laws in higher dimensions, table no longer
    exhaustive, homoclinic case subtler and chaotic, use for discriminating models) match the
    remark's "Dimension" paragraph and the method block's purpose.
  - strogatz-1994 pp. 265-272 (application): p. 266 gives $\phi''+\alpha\phi'+\sin\phi=I$ on the
    cylinder, two fixed points for $I<1$, none for $I>1$; pp. 267-270 the Poincare-map proof of a
    unique stable rotation for $I>1$; pp. 271-272 the homoclinic destruction of the cycle at
    $I_c<1$, the large-$\alpha$ infinite-period alternative, and, on p. 272, Guckenheimer and
    Holmes' Melnikov result that the curve is tangent to $I=4\alpha/\pi$ as $\alpha\to0$. The inline
    locator "§8.5, p. 272" is right. The neuron paragraph is explicitly flagged as the unit's own
    reading and not Strogatz's, which is honest.
  - hirsch-smale-devaney-2013 pp. 168-169: §8.3 Saddles, the Stable Curve Theorem with
    $x=h^s(y)$ tangent to the stable eigendirection, forward invariance, all other nearby solutions
    leaving the disc, the remark that $h^s$ is $C^\infty$, and the companion Unstable Curve Theorem.
    The Step 0 locator "§8.3, the Stable Curve Theorem and the remarks following it, p. 169" is
    exact and the block uses only what is there (the unit's added "for a smooth vector field" is a
    fair reading of the book's unqualified $C^\infty$ remark, not a strengthening).
  - hirsch-smale-devaney-2013 pp. 375-380: §16.3 the double scroll with homoclinic solutions
    $\zeta^\pm$, the Poincare map on the cylinder $C$ and the zero-volume attractor; §16.4 the
    parameter $\varepsilon$ breaking the connections, infinitely many fixed points collapsing, and
    the unfolding of infinitely many horseshoes with infinitely many bifurcations. Supports the
    remark's dimension-three contrast exactly as attributed.
  - strogatz-1994 pp. 96-101: §4.3, the bottleneck, the saddle-node ghost, the normal form
    $\dot x=r+x^2$ and the square-root time, which is what proof (b) leans on for pp. 98-100.
- Provenance: the two `original` proofs and the two `original` examples follow no cited book.
  Neither Strogatz nor Hirsch-Smale-Devaney contains the Step 0-6 argument (Strogatz states the
  homoclinic period scaling without derivation and sends the reader to Gaspard; HSD treat saddles
  and three-dimensional homoclinic phenomena only), and the energy-balance example with
  $\dot y=x-x^2+\epsilon y(\alpha-x)$ is not in either - it is a Melnikov-style computation the unit
  carries out itself, with its own numerics, and it is honest about the one thing it borrows (the
  $\epsilon=1$ member's relation to Strogatz's p. 263 system, which it cites). The `original` labels
  are right. The `adapted` blocks: I compared the definition block's three bullets with Strogatz
  pp. 261-263 and the application's first paragraph with pp. 265-272. Both are restructured rather
  than paraphrased - the unit leads with its own local/global criterion, adds the return-map reading
  of the fold's name and the "fixed point plus one trajectory" description of the infinite-period
  limit, and organises the pendulum paragraph around which bifurcation supplies the lower threshold,
  a framing the book reaches only via its stability diagram. Closest shared wording is the
  unavoidable "the saddle connection breaks" and "homoclinic orbit"; no sentence-by-sentence tracking.
  The check tool flags no "resembles" passage.
- Style: no "clearly", "obviously", "of course", "trivially" or "it is easy to see"; the `idea`
  block precedes the proofs and states the mechanism; two worked examples with checkable numbers;
  the remark names where hyperbolicity, transversality and the eigenvalue comparison are used.
- Discrepancies recorded: none. The unit reports Strogatz faithfully, and the two places where it
  goes beyond him (the $1/\min(\lambda_u,\lambda_s)$ coefficient; the condition on $\omega+b\rho$)
  are both labelled in the text as the unit's own additions rather than attributed to him.
