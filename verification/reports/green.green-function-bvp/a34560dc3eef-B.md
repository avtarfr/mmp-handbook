VERDICT: FAIL
UNIT: green.green-function-bvp
VERIFIER: B

## Findings
1. [blocking] :::method step 8 (line 361): the combination offered for inhomogeneous boundary
   data, $\dfrac{\gamma_1}{B_2u_1}u_1(x) + \dfrac{\gamma_2}{B_1u_2}u_2(x)$, has $\gamma_1$ and
   $\gamma_2$ interchanged. Since $B_1u_1 = 0$ and $B_2u_2 = 0$, this combination gives
   $B_1u = \gamma_2$ and $B_2u = \gamma_1$, i.e. it solves the problem with the data swapped.
   Concrete failure: $L = D^2$ on $[0,1]$, $B_1u = u(0)$, $B_2u = u(1)$, so $u_1 = x$,
   $u_2 = x-1$, $B_2u_1 = 1$, $B_1u_2 = -1$; the block's formula is
   $\gamma_1 x - \gamma_2(x-1)$, whose value at $x=0$ is $\gamma_2$, not $\gamma_1$.
   The source's (3.2.16) on Stakgold & Holst p. 196 carries the same two denominators
   ($B_2u_1$ under the $u_1$ term, $B_1u_2$ under the $u_2$ term — these the unit has right),
   so the only consistent reading of the source is the other pairing of the numerators.
   Fix: write $\dfrac{\gamma_2}{B_2u_1}u_1(x) + \dfrac{\gamma_1}{B_1u_2}u_2(x)$.
2. [blocking] :::remark[Conventions that differ between books] (line 342): "in general Hassani's
   $G$ is our $G$ divided by nothing at all" is false, and contradicts the sentence two lines
   above it. From $L_xG_H = \delta(x-y)/w(x)$ and the sifting property,
   $G_H(x,y) = G(x,y)/w(y)$; that factor is exactly what makes his jump $1/(p_2(y)w(y))$ (his
   (20.33), p. 621) differ from our $1/a_2(\xi)$. Checked on $L = d^2/dx^2$, $w \equiv 2$,
   $[0,1]$, Dirichlet: ours $G = x_<(x_>-1)$ with jump $1$; Hassani's $G_H = x_<(x_>-1)/2$ with
   jump $1/2$, and $\int_0^1 w\,G_H f = \int_0^1 G f$. The remark's *conclusion* (same $u$,
   mixing the conventions is wrong by $w$) is correct; only the claim that the two Green's
   functions coincide is wrong. Fix: say that Hassani's $G$ is our $G$ divided by $w(\xi)$, and
   that his compensating $w$ in the representation integral restores the same $u$.
3. [minor] :::definition (line 35): the unit requires $a_0,a_1,a_2$ continuous on the *closed*
   interval $a \le x \le b$. Stakgold & Holst's (3.2.1) preamble (p. 191) asks for continuity on
   $a < x < b$ and $a_2 \ne 0$ on $a \le x \le b$. The unit's proofs do use boundedness of
   $a_1/a_2$, $a_0/a_2$ on the closed interval, and Hassani p. 619 assumes continuity on
   $[a,b]$, so nothing downstream is wrong; but the hypothesis is stated stronger than the
   primary source's. Fix: either keep it and attribute the closed-interval hypothesis to Hassani,
   or match (3.2.1).
4. [minor] :::remark[Where the hypotheses are used] (line 321): Arfken's Exercise 10.1.6 is on
   printed p. 457, outside the `pages: "448-453"` declared for arfken-2013 in the frontmatter.
   The content of the claim is exactly right (the exercise's own Note says the two solutions are
   linearly dependent). Fix: extend the declared page range to cover p. 457.
5. [minor] :::definition (line 52): the uniqueness dichotomy tracks Stakgold & Holst p. 192
   clause for clause. It is compressed and reworded ("either none or many" for "either has no
   solution or has more than one solution") and the terms are the book's own defined terms, so I
   judge it acceptable; flagging it as the closest passage in the unit.

## Checked
- Automated checks: `node tools/check/index.mjs --record` for all four units — `ok` for this unit,
  no FAIL lines. Warn line judged: `:::definition` (line 28) 8-word run with stakgold-holst-2011
  p. 202, "if the completely homogeneous problem has only the". This is built entirely from the
  book's own defined terminology ("completely homogeneous problem") plus function words; there is
  no non-standard way to say it. Not a provenance problem (see finding 5).
- Counterexample search: tested the construction and the representation formula against
  $a_2$ vanishing (the $((1-x^2)u')'$ case of the remark: homogeneous solutions $1$ and
  $\tfrac12\ln\frac{1+x}{1-x}$, confirmed, and both "finite at $\pm1$" conditions do select
  $u_1=u_2=1$); against a non-self-adjoint $L$ (example 2, symmetry genuinely fails); against the
  resonant case $u''+\pi^2u=f$ on $(0,1)$ (checked $\int_0^1\sin\pi x\,dx = 2/\pi \ne 0$, so
  $f\equiv1$ unsolvable, and $\int_0^1 (x-\tfrac12)\sin\pi x\,dx = 1/\pi - 1/\pi = 0$, so
  $f = x-\tfrac12$ solvable — the remark's claim holds). Tested the periodic-condition claim of
  line 165 for formally self-adjoint $L$: $[a_2(vu'-uv')]_a^b = 0$ follows from $u(a)=u(b)$ and
  $a_2(a)u'(a)=a_2(b)u'(b)$ for both $u$ and $v$ — holds. Tested the method block's step 8 and
  found the counterexample in finding 1.
- Calculations (sympy / mpmath, 20 digits):
  - Lagrange identity: $vLu - uL^*v - \frac{d}{dx}J(u,v)$ simplifies to exactly $0$ with the
    unit's $L^*$ (line 136) and $J$ (line 144); and $L^*v$ agrees with $(a_2v)'' - (a_1v)' + a_0v$.
  - Construction: resolved the $2\times2$ system of lines 227–229 by Cramer and obtained
    $A = u_2(\xi)/(a_2W)$, $B = u_1(\xi)/(a_2W)$ as printed; branch bookkeeping to
    $u_1(x_<)u_2(x_>)/(a_2(\xi)W(\xi))$ confirmed.
  - Example 1: $W = \ln 2/x$, $a_2W = \ln 2$, $\sigma = 1/\ln 2$; jump at $x=\xi$ computed as
    $1/\xi = 1/a_2(\xi)$. Green's integral evaluated numerically at $x=1.5$:
    $\int_1^2 G(1.5,\xi)/\xi\,d\xi = -0.058322521303721066$; closed form
    $\tfrac12\ln x\ln(x/2)$ gives $-0.058322521303721066$; the independent ODE solution
    $\tfrac12(\ln x)^2 - \tfrac12\ln 2\ln x$ gives $-0.058322521303721066$. All three agree, and
    the unit's stated $-0.0583225$ is right.
  - Example 2: $W = -2e^{-2x}(1-e^{-2})$ confirmed; numerically
    $G(\tfrac14,\tfrac34) = -0.0895249446$, $G(\tfrac34,\tfrac14) = -0.0329343866$, ratio
    $= 2.7182818284590452 = e$ — all three stated values correct. Finite-difference jump of
    $\partial G/\partial x$ at $\xi = 0.4$: $0.99999999726$, i.e. $1 = 1/a_2$. Adjoint:
    $W(v_1,v_2) = 2e^{2x}(e^2-1)$ confirmed, and $G^*(x,\xi) - G(\xi,x)$ computed as
    $5\times10^{-23}$ and $1.6\times10^{-22}$ at $(0.3,0.8)$ and $(0.9,0.2)$ — zero to working
    precision, so item 6's identity holds.
  - Application: the stated $G = x_<(L-x_>)/L$ for $-d^2/dx^2$ on $[0,L]$ reproduced from the
    unit's own formula with $a_2 = -1$, $u_1 = x$, $u_2 = x-L$, $W = L$.
- Citations:
  - stakgold-holst-2011, pp. 187, 191–200. (3.2.1)–(3.2.2) with the independent coefficient rows,
    the unmixed case (3.2.3), the uniqueness dichotomy p. 192, Examples 1–2 p. 193, (3.2.7)–(3.2.8)
    p. 194, the $A,B$ system and (3.2.9)–(3.2.10) pp. 194–195, the general-boundary-condition
    route via the causal solution p. 195, (3.2.14) with Theorem 3.2.1 and Remark 1 pp. 196–197,
    Green's formula (3.2.19)–(3.2.21) and the self-adjoint definition pp. 197–198, (3.2.23)–(3.2.26)
    and the reciprocity principle pp. 199–200 — every locator checked and matches, with the one
    exception of the numerator pairing in (3.2.16) (finding 1).
  - arfken-2013, pp. 448–453. (10.5)–(10.7), the integration (10.8) and the jump $1/p(t)$ (10.9)
    p. 449, the symmetry (10.15) p. 450, the two-sided form (10.18)–(10.19) pp. 450–451, the
    differentiation (10.20)–(10.23) p. 451, Example 10.1.1 p. 452, the straight-line shift
    $[c_1(b-x)+c_2(x-a)]/(b-a)$ and the "no longer symmetric" remark for initial-value problems
    pp. 452–453, and Example 10.1.3 (boundary at infinity) p. 453 — all match. Note that (10.15)
    is Arfken's $G(x,t) = G(t,x)^*$ for Hermitian $L$, which supports the self-adjoint symmetry
    the block attributes to it. Exercise 10.1.6 is p. 457 (finding 4).
  - rhb-2006, pp. 511–513. (15.59)–(15.62), (15.63)–(15.65) and the summary (i)–(iii) checked; the
    unit's $n$th-order statement (derivatives up to order $n-2$ continuous, order $n-1$ jumping by
    $1/a_n(z)$) is exactly (iii). Matches.
  - hassani-2013, pp. 617–623. The four BC types p. 617, Lemma 20.3.1 p. 617, Definition 20.3.2
    with $\delta/w$ p. 618, Propositions 20.3.3 and 20.3.4 p. 619, the continuity argument
    pp. 619–620, (20.33) and Theorem 20.3.5 p. 621 — all present and supporting, including the
    hypothesis of Theorem 20.3.5 as the unit paraphrases it. Hassani's periodic BCs on p. 617 are
    $u(a)=u(b)$, $u'(a)=u'(b)$, not the weighted form at line 165; but line 165 does not attribute
    the periodic claim to him and the claim as written is correct for formally self-adjoint $L$.
    The convention remark misstates the relation between the two Green's functions (finding 2).
- Provenance: the five `original` blocks (idea, both remarks, both examples, application) are
  genuinely ours. Both worked examples are new set-ups, unrelated to Arfken's Example 10.1.1
  ($-y''=f$, Dirichlet on $[0,1]$), Hassani's Example 20.3.6 ($d^2/dx^2$, Dirichlet) or Stakgold's
  Examples 1–2; neither book treats $(xu')'$ on $[1,2]$ or $u''+2u'$ with Dirichlet conditions. The
  `adapted` proof of the construction follows Stakgold pp. 194–195 step for step in strategy but
  reorganises it into seven numbered steps, adds the one-dimensionality argument of Step 3 and the
  uniqueness argument of Step 6 in our own words; the closest wording is in the definition block
  (finding 5). The representation proof follows Arfken's differentiation route (10.20)–(10.23) but
  with Stakgold's $\sigma$ notation and a different split of the steps; no sustained verbal
  overlap. The symmetry proof follows Stakgold p. 199 ("multiply, subtract, integrate") with our
  own labelling; acceptable. No block labelled `original` is tracking a book's route.
