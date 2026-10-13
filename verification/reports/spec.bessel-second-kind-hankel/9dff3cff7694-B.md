VERDICT: PASS
UNIT: spec.bessel-second-kind-hankel
VERIFIER: B

## Findings

1. [minor] statement "Wronskians" (line 103): the `src` attributes the displayed value
   $W[H^{(1)}_\nu,H^{(2)}_\nu] = -4i/\pi x$ jointly to arfken-2013 Eqs. (14.85)-(14.87), p. 675 and
   hassani-2013 Problem 15.36, p. 489. Only Hassani states that Wronskian; Arfken's (14.85) is the
   different combination $H^{(2)}_\nu H^{(1)}_{\nu+1}-H^{(1)}_\nu H^{(2)}_{\nu+1}$, and his (14.86)
   is what supports item 3 of the same block. Nothing is uncited and both works are named in the
   `src`, so the attribution is not wrong, only imprecise. Fix: split the `src` so that the
   $W[H^{(1)},H^{(2)}]$ display points at hassani-2013 Problem 15.36 and the item-3 identities at
   arfken-2013 (14.71) and (14.86).
2. [minor] remark "Where the hypotheses are used" (line 252): the unit's own text is scrupulous --
   it prints Arfken's (14.145) as "$8x \gg 4n^{2}-1$" and says the modulus is ours. The matching row
   in `verification/discrepancies.md` (line 145) still describes the unit as *attributing*
   $8x \gg |4\nu^2-1|$ to Arfken, which the current text does not do. Fix: reword that ledger row;
   no change to the unit is needed.
3. [minor] definition "The Neumann function $Y_\nu$" (line 32) and definition "Hankel functions"
   (line 198): the two `resembles` warnings from `tools/check` flag the runs "Bessel function of the
   second kind of order" and "Hankel functions of the first and second kind" shared with rhb-2006
   p. 607. Both are the standard names of the objects, not borrowed prose; judged acceptable, no fix
   required.

## Checked

- Automated checks: `node tools/check/index.mjs --record spec.bessel-second-kind-hankel` -> `ok`,
  no FAIL line. The only two warnings naming this unit are the two `resembles` lines above; the
  remaining warnings in the run concern other units and the map.
- Counterexample search: attacked the statement at the places it could break.
  (i) Integer order: the l'Hopital display and the series were tested against `mpmath` at
  $n=0,1,2,3$ and $x=0.5,1.7,4.0$ -- the three-piece series reproduces $Y_n$ to 12 figures in all
  twelve cases, and the collapsed $Y_0$ form reproduces $Y_0$ at $x=0.5,2.0,5.0$ to 12 figures.
  (ii) Negative and non-integer order: $Y_{-\nu}=\sin(\nu\pi)J_\nu+\cos(\nu\pi)Y_\nu$ holds at
  $\nu=1.3$, $x=3.7$ (both sides $-0.3858925453$), so the remark's warning against expecting
  $Y_{-\nu}=\pm Y_\nu$ is right, and the block's restriction of the "bounded vs unbounded" argument
  to $\nu\ge0$ and to integer orders is exactly where it has to be -- for non-integer $\nu<0$ both
  solutions are singular, and the unit says so and falls back on the Wronskian.
  (iii) Half-integer order: the claim that the singularity is a pure power with no log was tested at
  $\nu=3/2$, $x=10^{-3}$: $Y_{3/2}=-25231.33784$, and the unit's closed form
  $-\sqrt{2/\pi x}(x^{-1}\cos x+\sin x)$ gives the same to 10 figures, matching the quoted
  $-2.5231\times10^{4}$.
  (iv) The "exact at half-integer order" claim was probed for over-reach: at $x=3.7$,
  $H^{(1)}_{1/2}(x)=-i\sqrt{2/\pi x}e^{ix}$ holds to 10 figures with no error term, while the
  two-term $\nu=3/2$ form $\sqrt{2/\pi x}e^{i(x-\pi)}(1+i/x)$ is needed to reproduce
  $H^{(1)}_{3/2}$ -- the leading term alone is not exact there. The unit already states this
  restriction, so the obvious counterexample is pre-empted.
  (v) Degenerate case of the example's root-comparison claim: searched the first twenty zeros of
  $Y_0$ for a pair with $z_i=2z_j$ (which would make the determinant and Arfken's quotient form
  disagree); the closest miss is $0.7918$, so none.
- Calculations: redone independently with `mpmath` at 25-30 digits.
  - Example (b), the Wronskian check at $x=2$: $J_0=0.2238907791$, $J_1=0.5767248078$,
    $Y_0=0.5103756726$, $Y_1=-0.1070324315$; $-J_0Y_1=0.02396357449$, $J_1Y_0=0.2943463117$, sum
    $0.3183098862=1/\pi$. All four tabulated values and both products match the unit to its last
    quoted figure.
  - Example (a) at $x=3$: $\sqrt{2/3\pi}=0.460658866$, $\cos 3=-0.9899924966$,
    $J_{1/2}(3)=0.06500818288$, $Y_{1/2}(3)=0.4560488208$, and
    $-i\sqrt{2/3\pi}e^{3i}=0.06500818288+0.4560488208i$. Exact agreement, as claimed.
  - Coaxial example, $b/a=2.5$: roots of $F(z)=J_0(z)Y_0(2.5z)-J_0(2.5z)Y_0(z)$ from the start
    $\pi/1.5=2.0943951$ are $z_1=2.07322884905$ and $z_2=4.17729882752$, matching the unit's
    $2.073228849$ and $4.177298828$. At $z_1$: $J_0=0.181856836631$, $Y_0=0.516714998862$,
    $J_0(2.5z_1)=-0.11609385743$, $Y_0(2.5z_1)=-0.329860776867$; both products equal
    $-0.0599874374097$, so the determinant vanishes to the nine figures claimed. Both rows give the
    ratio $-0.351948050727$, matching the quoted $-0.351948051$. Cutoff:
    $(2.99792458\times10^{10})(2.0732288)/2\pi = 9.8920902\times10^{9}$, i.e. $9.892$ GHz.
  - Method, recurrence stability (figures the unit marks as ours): in double precision at $x=1$,
    descending from exact $Y_{19},Y_{20}$ gives $Y_{10}=-1.811\times10^{18}$ against the true
    $-1.21618\times10^{8}$ and $Y_0=-5.269\times10^{27}$ against the true $0.08825696$; ascending
    from exact $Y_0,Y_1$ gives $Y_{20}$ with relative error $2.04\times10^{-16}$. All three quoted
    figures ($-1.8\times10^{18}$, $-1.216\times10^{8}$, $-5.3\times10^{27}$, $0.08826$,
    $2\times10^{-16}$) are right.
  - Wronskians, at $\nu=1.3$, $x=3.7$: $W[J_\nu,J_{-\nu}]=0.139198977=-2\sin(\nu\pi)/\pi x$;
    $W[J_\nu,Y_\nu]=0.1720593979=2/\pi x$; $W[H^{(1)},H^{(2)}]=-0.3441187959i=-4i/\pi x$;
    $J_\nu Y_{\nu+1}-J_{\nu+1}Y_\nu=-0.1720593979$; $J_{\nu-1}H^{(1)}_\nu-J_\nu H^{(1)}_{\nu-1}
    =-0.1720593979i=2/i\pi x$. All five agree with the unit.
  - Small-argument forms: at $x=10^{-4}$, $-\Gamma(\nu)(2/x)^\nu/\pi$ reproduces $Y_\nu$ to 8
    figures for $\nu=0.5,1,2.5$; at $x=10^{-6}$, $(2/\pi)(\ln(x/2)+\gamma)=-8.869031482=Y_0$.
  - Symbolic steps rechecked by hand: the l'Hopital reduction to
    $\pi^{-1}[\partial_\nu J_\nu-(-1)^n\partial_\nu J_{-\nu}]_{\nu=n}$ and its restatement with
    $+(-1)^n\partial_\nu J_\nu|_{\nu=-n}$ (correct, the inner $-$ sign of $\nu\mapsto-\nu$ supplies
    the flip); the identity $\frac{d}{dx}[x(u'v-uv')]=v(xu')'-u(xv')'$ in Step 1; the leading-order
    products in Step 2 and $\Gamma(1+\nu)\Gamma(1-\nu)=\pi\nu/\sin\nu\pi$; $ad-bc=-2i$ in Step 5.
- Citations: every cited page was opened with `tools/corpus/pages.mjs`.
  - arfken-2013 p. 644: footnote 1 is there and does record $N_\nu$ and the name Neumann function.
    Matches.
  - arfken-2013 pp. 667-668: (14.57), (14.58), (14.59)-(14.60), (14.61), (14.62) all present and
    identical in content to the unit's displays, including the sign of the $\psi$ sum. Matches.
  - arfken-2013 p. 669: the "Recurrence Relations" paragraph does say $Y_\nu$ satisfies the $J_\nu$
    recurrences, and the $\pi/2$ phase displacement is on the same page. Matches.
  - arfken-2013 pp. 670-671: (14.64) with $p(x)=x$, (14.65), (14.66), (14.67), and (14.70)-(14.71).
    The unit's Step 1, Step 2 and item 3 follow these. Matches.
  - arfken-2013 pp. 671-672: Example 14.3.1 with (14.74)-(14.75) and the TEM no-cutoff remark used
    in the application block. Matches.
  - arfken-2013 pp. 672-674: Exercises 14.3.1-14.3.6 begin on p. 672, 14.3.6 and 14.3.10 are on
    p. 673 (Fig. 14.9 and the answer on p. 674). The unit's rendering of 14.3.6 (coefficients of
    $x^0$ and $x^1$ vanish) and of 14.3.10 ($f(x)=J_0(2x)/Y_0(2x)-J_0(x)/Y_0(x)$) is exact, and the
    algebraic claim that $f=\det/(-Y_0(2x)Y_0(x))$ checks out.
  - arfken-2013 pp. 674-675: (14.76)-(14.78), (14.79)-(14.82), (14.83)-(14.84), (14.85)-(14.87).
    The unit's $H^{(1)}_0\approx 1+(2i/\pi)(\ln(x/2)+\gamma)$ is (14.79) regrouped, correctly.
    Matches, with the imprecision noted in finding 1.
  - arfken-2013 pp. 692-695: (14.138)-(14.141), the p. 694 sentence that $P_\nu,Q_\nu$ terminate at
    $\nu=\pm1/2,\pm3/2,\dots$, (14.145) printed as $8x\gg4n^2-1$, and Example 14.6.1 on pp. 694-695.
    Matches; the unit's report of what Arfken prints is literally accurate.
  - rhb-2006 pp. 606-607: (18.81) with the numerator written $J_\nu\cos\nu\pi-J_{-\nu}$, the
    "non-zero for all values of $\nu$" Wronskian remark, the name "Weber or Neumann function", the
    limit (18.82), the general solution (18.83), the Hankel pair, and the worked
    $Y_{n+1/2}=(-1)^{n+1}J_{-n-1/2}$. Matches.
  - rhb-2006 p. 608: §18.5.3 opens with the singularity of $Y_\nu$ and $c_2=0$. Matches.
  - rhb-2006 p. 612: "Bessel functions of the second kind, $Y_\nu(x)$, also satisfy the recurrence
    relations derived above." Matches; the page also supplies $J_{-3/2}$, consistent with the unit's
    $Y_{3/2}$.
  - hassani-2013 pp. 483-485: (15.44), the l'Hopital definition, the $\Psi$ series (15.45), (15.46)
    naming them "Bessel functions of the third kind, or Hankel functions", and (15.48). Matches.
  - hassani-2013 pp. 488-489: Problem 15.34 (a)-(c) gives the reduction-of-order second solution
    $J_\nu[B+A\int dz/(zJ_\nu^2)]$; Problem 15.36 gives $2/\pi z$ and $4/i\pi z$; Problem 15.37 gives
    all three identities the unit quotes. Matches, and Hassani's $W$ convention is the unit's.
  - strauss-2008 pp. 285-286: (13) with $N_s$, (14), (15) with $H^{\pm}_s$, the sentence that the
    large-$z$ behaviour is what distinguishes these solutions, and (16) with the log term. Matches;
    Strauss's absolute $O(z^{-3/2})$ is the unit's relative $O(x^{-1})$, consistently converted.
  - stakgold-holst-2011 pp. 450-451: the singular Bessel operator (7.3.31), the Green's function
    (7.3.33) built with $H^{(1)}_0$, and the transform pair (7.3.38)-(7.3.39). Matches.
- Provenance: the closest passages were compared by hand.
  - Definition block vs arfken p. 667 and rhb p. 607: the shared material is the formula and the
    name. The unit's prose is reorganised (it opens from the Frobenius collapse, states that the
    content is entirely in the limit, and defers the series), and no sentence tracks either book.
    The two 8-word `resembles` hits are the standard names of the functions. Correctly `adapted`.
  - Proof block vs arfken pp. 670-671: the route is Arfken's (self-adjoint $p(x)=x$, Abel, limit at
    the origin, reflection formula) and the block is labelled `adapted` and cited, which is right.
    The five-step structure, the explicit $W[aU+bV,cU+dV]=(ad-bc)W[U,V]$ lemma and the integer-order
    continuity step are the unit's own; Arfken has no Step 4 or Step 5.
  - The `idea` block is `original` and is meta-commentary on a route that the following `adapted`
    proof attributes; this matches the convention used by every other `:::idea` block in the corpus.
  - Coaxial example: labelled `adapted`, and it says in its own words which parts are Arfken's
    (set-up, boundary conditions, determinant) and which are ours (radii $b/a=2.5$, the numbers, the
    mode shape, the frequency). Arfken's exercise uses $b/a=2$ with roots 3.1230, 6.2734, 9.4182,
    which are not the unit's numbers, so nothing is lifted. Honest.
  - Example "Two numerical checks" and the application block, both `original`: no book example
    behind either; the arithmetic is the unit's and I reproduced it.
- Style: an idea block precedes the proof; no "clearly"/"obviously"/"trivially"/"easy to see"
  anywhere in the file; two fully worked examples with checkable numbers; the remark block names
  each hypothesis and where it is used. All eight `:ref` targets exist as units.
