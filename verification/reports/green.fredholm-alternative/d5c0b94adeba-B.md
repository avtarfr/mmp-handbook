VERDICT: PASS
UNIT: green.fredholm-alternative
VERIFIER: B

## Findings
1. [minor] proof "The modified Green's function: consistency, and the representation", Step 5
   (line 258): "by the normalisation of $g_M$ and its symmetry". The displayed computation needs only
   Fubini and the normalisation $\int_a^b g_M(x,\xi)u_1(x)\,dx = 0$ — the inner bracket is exactly
   that integral, in the same argument order — so symmetry does no work here. (It is genuinely needed
   in Step 4, where it is correctly invoked.) Fix: drop "and its symmetry".
2. [minor] statement "The Fredholm alternative for a boundary-value problem" (line 94): "where
   $B_{p+1}^*,\dots,B_{2p}^*$ are the complementary adjoint functionals of their §3.3". Stakgold and
   Holst call $B_{p+1},\dots,B_{2p}$ the complementary functionals and call only
   $B_1^*,\dots,B_p^*$ "adjoint to $B_1,\dots,B_p$"; the starred second half is left unnamed on
   p. 203. The coinage is reasonable and points at the right page, but it reads as if it were their
   term. Fix: "the remaining starred functionals of their (3.3.8)", or say the name is ours.

## Checked
- Counterexample search: attacked each statement where it could plausibly fail.
  (i) Matrix alternative: I re-derived it from scratch and found no gap; the finite-dimensional
  splitting in Step 2 is what makes it elementary, and the unit's own remark identifies exactly that
  as the step that fails in infinite dimensions.
  (ii) The dimension claim: for a general $m\times n$ matrix $\dim N_A = n-r$ and
  $\dim N_{A^*} = m-r$, so $k$ is *not* the same on both sides unless $m=n$ — which is a genuine
  counterexample to the careless version of the theorem, and the unit states the equality only in
  the balanced case and devotes a remark bullet to why. Stakgold's Example 3 (a $2\times1$ matrix,
  $N_A=\{0\}$ but $Au=f$ unsolvable unless $f_1=f_2$) is the same point.
  (iii) The modified Green's function without self-adjointness: I checked the remark's algebra
  rather than trusting it. With a non-self-adjoint problem the consistency condition on a source
  $\delta(x-\xi)-A(x)B(\xi)$ is $v_1(\xi)-B(\xi)(A,v_1)=0$, which forces $B\propto v_1$ and leaves
  $A$ free subject to $(A,v_1)\neq0$ — so the unit's "it is the second argument that must carry
  $v_1$" is right, and so is its warning that $A=u_1$ needs $(u_1,v_1)\neq0$. I then verified the
  counterexample it cites (Stakgold's Exercise 3.5.4): for $L=D^2$ on $(0,1)$ with
  $B_1u=u(0)+u(1)$, $B_2u=u'(0)-u'(1)$, the direct homogeneous problem gives $u=\alpha(1-2x)$ with
  $\int_0^1(1-2x)^2dx=1/3$, hence the normalised $u_1=\sqrt3(1-2x)$; the boundary term
  $[vu'-uv']_0^1$ reduces on $M$ to $u'(0)[v(1)-v(0)]+u(0)[v'(1)+v'(0)]$, giving the adjoint
  conditions $v(1)=v(0)$, $v'(1)+v'(0)=0$ and so $v_1=1$; and $\int_0^1 u_1v_1dx=\sqrt3[x-x^2]_0^1=0$,
  so $(u_1,v_1)$ really does vanish. The quoted residue $1-\sqrt3(1-2\xi)$ is right, and it vanishes
  only at $\xi=(1-1/\sqrt3)/2$ — "all but one $\xi$", as the unit says.
  (iv) Normalisation of $u_1$ and $k\ge2$: both failure modes in the remark check out directly.
  No counterexample found to any statement as written.
- Calculations (sympy, `.venv/bin/python`; script kept locally as `chk_fred.py`):
  - The worked example, end to end. Homogeneous problem: $(xu')'=0$ with $u'(1)=0$ forces $c=0$, so
    the null space is the constants and $k=1$. $L$ is formally self-adjoint since $a_1=1=a_2'$.
    I then took the boxed $g_M$ as printed and checked it against its defining conditions
    symbolically: $(xg_M')' + 1/(e-1) = 0$ on both sides of $\xi$; $g_M'(1,\xi)=0$ and
    $g_M'(e,\xi)=0$ exactly; continuity at $x=\xi$ exact; jump in $g_M'$ equal to $1/\xi=1/a_2(\xi)$;
    and $\int_1^e g_M(x,\xi)\,dx = 0$ identically in $\xi$. The two intermediate integrals quoted in
    item 7 are both right: $\int_1^e(\ln x-x)/(e-1)\,dx-(3-e^2)/(2(e-1))=0$ and
    $\int_1^e \ln x_>\,dx = \xi-\ln\xi$. The constant is $(e^2-3)/(2(e-1)^2)=0.7432798195$, so the
    printed $0.7432798$ is correct. Symmetry: $g_M(3/2,5/2)=g_M(5/2,3/2)=0.1008948350$.
  - Item 8: I computed $\int_1^e g_M(x,\xi)\bigl(1/\xi-1/(e-1)\bigr)d\xi$ by splitting at $\xi=x$ and
    integrating symbolically; the result minus the printed
    $(\ln x)^2/2 - x/(e-1) + \ln x/(e-1) + c$ simplifies to exactly $0$. The constant
    $c = 3/(2(e-1)) - 1/(e-1)^2 = 0.5342681730$, so the printed $0.5342682$ is right.
  - Item 9's independent route: for the printed $u$, $(xu')'-(1/x-1/(e-1))$ simplifies to $0$ and
    $u'(1)=u'(e)=0$, so the Neumann condition at $x=e$ really is met automatically; and
    $\int_1^e u\,dx = 0$ to working precision, which is what pins $c$. The checkable number:
    $u(2)=0.01393677970$, matching the printed $0.01393678$.
  - Item 10: $\int_1^e g_M(x,\xi)\,d\xi$ simplifies to $0$ for every $x$, so $G_M$ does annihilate
    constants and $G_M[1/x]=G_M[1/x-1/(e-1)]$, as claimed. I also checked that the projection of
    $f=1/x$ off $u_1$ is $1/x-u_1\int(1/x)u_1dx = 1/x-1/(e-1)$, the source of item 8.
  - The source's own formula, as an independent check of the definition block: solving
    $-g''=\delta(x-\xi)-1$ on $(0,1)$ with $g'(0)=g'(1)=0$ and $\int_0^1 g\,dx=0$ from scratch gives
    $g=(x^2+\xi^2)/2-x_>+1/3$, i.e. Stakgold and Holst's (3.5.5) exactly as the unit quotes it; and
    that function has $-g''=-1$ off the source, zero derivative at both ends, jump $-1$ in $g'$ and
    zero mean, as it must.
  - The spectral formula quoted in statement (ii): for $L=D^2+\lambda_k$ on $(0,1)$ with Dirichlet
    data, $L[\sin n\pi x]=(\lambda_k-\lambda_n)\sin n\pi x$ with $\lambda_n=n^2\pi^2$, so
    $g_M=\sum_{n\neq k}2\sin n\pi\xi\sin n\pi x/(\lambda_k-\lambda_n)$ has the right denominator and
    the right factor $2$ for the normalised eigenfunctions $\sqrt2\sin n\pi x$.
  - Step 5 of the necessity proof: the linear-algebra claim it rests on is sound. $[J(u,v)]_a^b$ is a
    functional of the $2p$ boundary values of $u$; the common kernel of $B_1,\dots,B_p$ is a
    $p$-dimensional subspace $W$ of that $2p$-dimensional space, $\dim W^\circ = p$, and
    $B_1,\dots,B_p$ are $p$ independent elements of $W^\circ$, hence a basis of it. So a functional
    vanishing on $W$ is $\sum\lambda_iB_i$, as asserted.
- Citations: all four works opened; every locator matched.
  - stakgold-holst-2011 pp. 203, 206–214, 216–220. §3.3 p. 203 carries Green's formula (3.3.6), the
    $2p$-term expansion (3.3.7), the complementary functionals $B_{p+1},\dots,B_{2p}$, the identity
    (3.3.8) and the definition of a self-adjoint problem — exactly the frontmatter's list. §3.4: the
    three problems (3.4.1)–(3.4.3) are on p. 206; the inner-product and orthogonal-complement review
    and the adjoint identity $(Au,v)_m=(u,A^*v)_n$ are on p. 207; the proof of the matrix
    alternative, the solution set $u=u_p+u_H$, and the balanced case (including "it turns out that
    the same is then true for $A^*$, although its null space will, in general, be different") are all
    on p. 208, which is what the first statement block and the first proof claim; Examples 1–3 run
    pp. 209–210; the integral-equation alternative on p. 210 is for the equation
    $\int_a^b k(x,\xi)u(\xi)d\xi-u(x)=f(x)$, written there as (3.4.7), exactly as the note quotes it;
    the boundary-value alternative (a)–(b) and the necessity proof are on p. 211, ending with "The
    sufficiency will be proved in Chapter 5", which is the deferral the note reports; Examples 5–7
    run pp. 211–213, and Example 7 is precisely the $u'=f$, $u(0)=u(1)=0$ case the remark describes,
    with $[J(u,v)]_0^1=u(1)v(1)-u(0)v(0)$ already zero, an adjoint problem with no boundary
    conditions, constants as solutions, and $\int_0^1 f\,dx=0$; (3.4.16) on p. 213 is literally
    $\int fv\,dx = \gamma_1B_{2p}^*v+\dots+\gamma_pB_{p+1}^*v$, and the line after it says the
    condition "also turns out to be sufficient" — which is the sufficiency the statement block
    attributes to them. §3.5: the insulated rod (3.5.1)–(3.5.5) is on pp. 216–217, with (3.5.4)
    described there as "not a solvability condition, but merely picks out a solution ... that turns
    out to be symmetric" and (3.5.5) the quoted $g_M$; (3.5.6)–(3.5.7) and the consistency
    computation are on p. 217; (3.5.9) and the minimum-norm remark on p. 218; the least-squares
    discussion (a)–(d) on pp. 218–220, where (c) says "Since the range is orthogonal to
    $\sin k\pi x$, the element closest to $f$ is $f-f_k\sin k\pi x$" and (d) gives the series
    $g_M$ and concludes "The operator $G_M$ is the pseudoinverse of $D^2+\lambda_k$ subject to the BC
    $u(0)=u(1)=0$", with a pointer to Chapter 9 — all exactly as statement (ii) reports, including
    that it is established for that one problem. Exercise 3.5.1 (symmetry sufficient not necessary,
    with the $Cu_1(x)u_1(\xi)$ counterexample), 3.5.2 ($k=2$) and 3.5.4 (the non-self-adjoint $D^2$
    problem) are on p. 220 and are used correctly.
  - kreyszig-1978 pp. 451–453. Definition 8.7-1 is on pp. 451–452 with cases (I) and (II) as the note
    paraphrases them, including that (II) has the same finite number $n\ge1$ of independent solutions
    on both sides and an annihilation-form solvability condition; Theorem 8.7-2 (compact $T$,
    $\lambda\neq0$, $T-\lambda I$ satisfies the alternative) is on p. 452; Theorem 8.7-3 for
    second-kind integral equations, with the "either a unique solution for every $y$ or finitely many
    independent nontrivial solutions of the homogeneous equation" phrasing, is on p. 453.
  - evans-2010 pp. 302–304, 682. The definitions of $L^*$ and of a weak solution of the adjoint
    problem are on p. 302, as is Theorem 4 with its $(\alpha)$/$(\beta)$ dichotomy and
    $\dim N=\dim N^*$; part (iii), "$(f,v)=0$ for all $v\in N^*$", and the sentence "The dichotomy
    $(\alpha)$, $(\beta)$ is the Fredholm alternative" are on p. 303; the reduction to $u-Ku=h$ with
    $K$ compact and the explicit appeal to "the Fredholm alternative from §D.5" are on pp. 303–304.
    Appendix D.5 on p. 682 states the alternative for $I-K$ with the criterion
    $f\in N(I-K^*)^\perp$. Everything the note attributes to Evans is on those pages.
  - hassani-2013 p. 551. Theorem 18.2.2 is headed "Fredholm Alternative" and reads: either $\lambda$
    is a regular value, or the equation has a solution iff $|v\rangle$ lies in the orthogonal
    complement of the (finite-dimensional) null space of $1-\lambda^*K^\dagger$ — word for word the
    content the note reports, for a Hilbert–Schmidt $K$.
- Provenance: the one flagged overlap is line 157's "the range of is the null space of"
  (stakgold-holst-2011 p. 321 — a page this unit does not cite). With the inline math restored the
  sentence is "what is orthogonal to the range of $A$ is the null space of $A^*$"; the shared run is
  the bare skeleton of a standard statement and the collision is incidental. Standard wording.
  Comparing the adapted blocks against their pages: the matrix proof reaches Stakgold's p. 208
  conclusion by his route — necessity, then decompose $f=h+h^\perp$ — which the `adapted` label
  declares, but it is restructured into five named steps, the adjoint identity is displayed and
  derived rather than asserted, and the projection step is handed off to a prerequisite unit; no
  sentence tracks his. The necessity proof likewise follows p. 211, with the extra Step 5 on
  inhomogeneous data (the "a functional vanishing on the common kernel is a combination of the
  $B_i$" argument) supplied by us rather than taken from (3.3.8)'s bookkeeping. The modified
  Green's-function proof follows p. 217's pairing, but inserts an explicit flag that Step 1 leans on
  the unproved sufficiency half — which the source does not do. The `original` blocks: the idea block
  is a subspace-and-orthogonality narrative with no counterpart in the sources; the worked example
  ($(xu')'$ on $[1,e]$ with Neumann data) appears nowhere in §3.4, §3.5 or their exercises, which use
  $-u''$ on $(0,1)$, $u''+\lambda u$, $u'+u$ and $D^2$ instead, so it is genuinely ours; the remark
  and application are our framing and name their sources in prose.
- Style: the `idea` block precedes all three proofs; no "clearly"/"obviously"/"easy to see" anywhere;
  there is one fully worked example with several independently checkable numbers; hypotheses are
  gathered in a "where the hypotheses are used" remark that supplies a failure case for each. The
  unit is unusually honest about its own limits — a dedicated `note` block says which halves are
  proved here and which are quoted, statement (ii) repeats it, and Step 1 of the last proof flags the
  single place an unproved result is used. The `:::note` block type is in wide use elsewhere in
  `content/`, so it is not an anomaly. The only deviation from the block order in
  `docs/STYLE_GUIDE.md` is that the second `definition` follows two `statement` blocks; since the
  unit covers the alternative and then the modified Green's function, grouping each definition with
  its own statements reads better than the strict order would, so I am not recording it as a finding.
- Automated checks: `node tools/check/index.mjs --record` reports `ok`; the single unit-level warn
  line is the line-157 overlap judged above.
