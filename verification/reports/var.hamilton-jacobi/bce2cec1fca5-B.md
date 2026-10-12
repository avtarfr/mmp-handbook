VERDICT: PASS
UNIT: var.hamilton-jacobi
VERIFIER: B

## Findings
1. [minor] frontmatter `summary` (line 6) and statement, closing sentence (line 61). The summary says
   a complete integral "produces all solutions of the canonical equations", and the closing sentence
   says the family "contains every motion whose momentum at some time $t_\ast$ equals
   $\nabla S(t_\ast, q(t_\ast), \alpha)$ for some admissible $\alpha$". Part (c) 2, which is what is
   actually proved, is both weaker and more careful: the conclusion holds only *near* $t_\ast$, and
   only for motions whose momentum is hit by $\nabla S(t_\ast,q_\ast,\cdot)$ for some admissible
   $\alpha$ — and the map $\alpha \mapsto \nabla_q S(t_\ast,q_\ast,\alpha)$ need not be onto, so
   "all solutions" is strictly stronger than the theorem. (Gelfand and Fomin's Theorem 2 is equally
   loose — it says the formulas "constitute a general solution" — so this is inherited looseness, not
   a misreading.) Fix: in the summary, "produces solutions of the canonical equations"; in the closing
   sentence, add "locally" or "near $t_\ast$", which the item it cites already says.

## Checked
- Counterexample search: pushed on each hypothesis.
  (i) The field condition: for the oscillator the field degenerates at $t=\pi/\omega$, and I checked
  that this really is where the construction dies — $\Psi(t,a)=(t,(a/\omega)\sin\omega t)$ is
  injective in $a$ exactly while $\sin\omega t \neq 0$, and $\det \mathsf{Q}_a = (\sin\omega t)/\omega$
  vanishes at $t=\pi/\omega$. So the remark's counterexample is genuine, and the link it draws to
  conjugate points is the right one.
  (ii) The nondegeneracy $\det(\partial^2S/\partial q\,\partial\alpha)\neq0$: without it step 9 cannot
  cancel and step 10 has no implicit function theorem, and the remark's failure mode ($S$ not
  depending on some $\alpha_j$) does leave the $n$ equations underdetermined.
  (iii) $t>0$ in the example: the field map is singular at $t=0$ (all extremals leave $q_0$), and
  both the label formula $a=(q+\tfrac12\gamma t^2)/t$ and the action $mq^2/(2t)-\dots$ are correctly
  restricted to $t>0$.
  (iv) I looked for a hidden circularity in part (c): step 9 derives $\dot q = H_p$ and then invokes
  part (b) on $S(\cdot,\cdot,\alpha)$, which needs that $S$ to be $C^2$ — it is, by the definition of
  a complete integral. No gap. No counterexample found to any statement as written.
- Calculations (sympy, `.venv/bin/python`; script kept locally as `chk_hj.py`):
  - Example, part (a): integrating $L=\tfrac12m\dot{\mathsf Q}^2-m\gamma\mathsf{Q}$ along
    $\mathsf{Q}=at-\tfrac12\gamma t^2$ and substituting $a=(q+\tfrac12\gamma t^2)/t$ gives, after
    simplification, exactly the printed
    $S=\dfrac{mq^2}{2t}-\dfrac{m\gamma qt}{2}-\dfrac{m\gamma^2t^3}{24}$ (difference simplifies to 0).
    $S_q = mq/t-m\gamma t/2$, which sympy confirms equals $m(a-\gamma t)$, the momentum. The
    Hamilton–Jacobi residual $S_t+S_q^2/2m+m\gamma q$ simplifies to $0$.
  - Example, part (c): the printed complete integral
    $S=(\alpha-m\gamma t)q+(\alpha-m\gamma t)^3/(6m^2\gamma)$ has HJ residual exactly $0$;
    $\partial^2S/\partial q\,\partial\alpha = 1$; and $\partial S/\partial\alpha$ equals the printed
    $q+(\alpha-m\gamma t)^2/(2m^2\gamma)$ identically. So the $\beta$ equation and the inversion to
    $q(t)$ are right, as is $p=\alpha-m\gamma t$, which makes $\alpha=p(0)$ and $\beta$ the height
    where $p=0$.
  - Example numbers: with $m=2$, $\gamma=9.8$, $q(0)=1$ and launch speed $4.9$, $\alpha=mv=9.8$ and
    $\beta = 1 + 9.8^2/(2\cdot4\cdot9.8) = 1+1.225 = 2.225$ exactly ($89/40$), as printed; the top is
    at $t=\alpha/(m\gamma)=1/2$ s, as printed. The resulting trajectory simplifies to
    $q(t)=1+4.9t-4.9t^2$, i.e. elementary projectile motion with the stated initial data, so
    $q(0)=q(1)=1$ and $p(1)=-49/5=-9.8$ — both printed values are right, and the energy-conservation
    sanity check the unit draws from them is valid.
  - Oscillator remark: I derived the action independently. $\sigma(t,a)=\tfrac12 ma^2\int_0^t\cos
    2\omega s\,ds$, and substituting $a=\omega q/\sin\omega t$ gives
    $S=\tfrac12 m\omega q^2\cot\omega t$, which sympy confirms matches the printed expression and has
    HJ residual exactly $0$ (the cancellation being $\cot^2+1=\csc^2$). It does blow up as
    $t\to\pi/\omega$ for $q\neq0$.
  - Proofs, by hand: part (a) step 2's claim that the integrand is $\partial_s(P\cdot\partial_{a_j}
    \mathsf{Q})$ follows from $L_q=\partial_sP$ by the product rule, and the boundary term at $t_0$
    does vanish because $\mathsf{Q}(t_0,a)\equiv q_0$. Step 3's inversion needs only
    $\det\mathsf{Q}_a\neq0$. Part (b): step 5's differentiated equation is correct
    ($\partial_{q_i}\partial_tS + H_{q_i} + \sum_kH_{p_k}\partial_{q_i}\partial_{q_k}S=0$), and
    subtracting it from step 4 with $\dot q_k=H_{p_k}$ gives $\dot p_i=-H_{q_i}$; the rate
    $dS/dt = -H+p\cdot\dot q$ follows. Part (c): step 7 (differentiate HJ in $\alpha_j$) and step 8
    (differentiate the constancy of $\partial_{\alpha_j}S$ along the curve) differ exactly by
    $\sum_k \partial^2S/\partial q_k\partial\alpha_j\,(\dot q_k-H_{p_k})$, as printed. The remark's
    regularity bootstrap also checks out: $\nabla S = L_v(t,q,\partial_t\mathsf{Q})\circ\Psi^{-1}$ is
    $C^1$ as a composition of $C^1$ maps, and $\partial_tS=-H(t,q,\nabla S)$ is then $C^1$ since $H$
    is $C^2$, so the action function of (a) is $C^2$ and (b) applies to it.
  - Characteristics remark: for $H=b\cdot p+c$, $p\cdot H_p-H = p\cdot b-(b\cdot p+c)=-c$, so the
    stated rate of change of $S$ along a characteristic is right and agrees with Evans's (64)(b).
- Citations: both works opened; every locator matched.
  - gelfand-fomin-1963 pp. 88–93. §23 is titled "The Hamilton-Jacobi Equation. Jacobi's Theorem";
    the geodetic distance (65) is on p. 88 and $S$ as a function of the variable endpoint (68) on
    p. 89; (69)–(70) give $\partial S/\partial x = -H$ and $\partial S/\partial y_i = p_i$, and (72)
    is the Hamilton–Jacobi equation, all on p. 90, which is what the definition block and part (a)
    attribute to them. The sentence "the canonical equations represent the so-called characteristic
    system associated with equation (72)" is on p. 90, supporting the characteristics remark.
    Theorem 1 (the $\partial S/\partial\alpha_j$ are first integrals) spans pp. 90–91, with the key
    identity (76) — differentiate the HJ equation in $\alpha_j$ — on p. 91; that is the identity the
    unit's step 7 reproduces. Theorem 2 (Jacobi) is on p. 92, with the complete integral (77), the
    nonzero determinant (78) of $\partial^2S/\partial\alpha_i\partial y_k$ (the transpose of the
    unit's mixed Hessian — the same condition), the defining relations (80), the momenta (81) and the
    canonical system (82); Proof 1 runs pp. 92–93 and takes exactly the route the unit's part (c)
    and part (b) take, first getting $\dot y_i = H_{p_i}$ from (80) and (76), then
    $\dot p_i = -H_{y_i}$ by differentiating (81) and the HJ equation in $y_i$. The unit's step 10
    (the converse, via the implicit function theorem and ODE uniqueness) is sharper than Gelfand and
    Fomin's "constitute a general solution", and it is proved here rather than attributed — see
    finding 1 for the one place the gloss outruns it.
  - evans-2010 pp. 109–111. Example 6 of §3.2.5, "Characteristics for the Hamilton–Jacobi equation",
    begins on p. 109 and its summary (64)/(65) — including that the first and third characteristic
    equations "are called Hamilton's equations" — is on p. 110; §3.3.1 on p. 111 repeats that two of
    the characteristic equations of $u_t+H(Du,x)=0$ are Hamilton's ODE. Exactly what the remark
    attributes to Evans. (Evans's $H$ carries no explicit $t$; the unit's $H(t,q,p)$ is the usual
    extension, and the remark does not claim otherwise.)
- Provenance: `npm run check`/`tools/check` reports no `resembles` or verbatim warning for this unit,
  and I compared the adapted blocks against their pages by hand. The proof follows Gelfand and
  Fomin's Proof 1 in route, which the `adapted` label and `src=` declare, but it is reorganised
  (their one running calculation becomes ten numbered steps in the order (a), (b), (c), with part (b)
  factored out and reused inside part (c)), it is rewritten in vector notation where they explicitly
  revert to indices (their footnote 16), and it adds the regularity hypotheses and the converse that
  they omit. The definition block makes the field of extremals and the complete integral precise —
  $C^2$ dependence, injectivity of $\Psi$, $\det\mathsf{Q}_a\neq0$, the open set $\mathcal{D}$ — where
  the source assumes "one and only one extremal goes through two arbitrary points"; that is a
  strengthening in our own words, not a paraphrase. The characteristics remark is one paragraph of
  our own specialisation of Evans's Example 6. The `original` blocks are ours: the vertical-throw
  example is in neither source (Gelfand and Fomin's §23 examples are arc length, Fermat's principle
  and the abstract least action), and the "where the hypotheses are used" remark and the application
  paragraph have no counterpart on the cited pages.
- Style: an `idea` block precedes the proof and states the mechanism of all three parts; no
  "clearly"/"obviously"/"easy to see" anywhere; one fully worked example carried through to checkable
  numbers ($\beta=2.225$, $t=0.5$, $q(1)=1$, $p(1)=-9.8$), with an independent physical cross-check;
  hypotheses are named at the steps that use them and collected in a dedicated remark with a
  counterexample (the oscillator) for the main one. The title's plain hyphen in "Hamilton-Jacobi"
  matches `content/map.yaml` and the house convention in other unit titles, so I have not recorded it.
- Automated checks: `node tools/check/index.mjs --record` reports `ok` for this unit, with no
  unit-level warn line.
