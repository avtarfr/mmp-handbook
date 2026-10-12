VERDICT: PASS
UNIT: green.integral-equations
VERIFIER: B

## Findings
1. [minor] definition "The integral operator and its kernel classes" (line ~96): the block opens
   "Let $-\infty\le a<b\le\infty$" and then speaks of "the square $[a,b]\times[a,b]$" and of a
   kernel "on $[a,b]\times[a,b]$" in the statement block that follows. With an infinite endpoint
   $[a,b]$ is not a set of real numbers. The parenthesis right below shows the author was aware of
   the point (it explains why $x\in(a,b)$), so this is a slip of notation, not of substance.
   Fix: write the square as $(a,b)\times(a,b)$, or say "the square $I\times I$ with $I=(a,b)$".
2. [minor] block order (lines 128–240): the style guide's order is definition, statement, idea,
   proof, remark, method, example, application. Here the order is definition, definition, statement,
   remark, method, note, idea, proof, remark, example, application. The essential requirement — an
   idea block immediately before the proof — is met, and since the only proof is of the step-1
   formulas the arrangement reads well, but the two remarks and the method sit ahead of the idea.
   Fix: either reorder, or leave it; worth a conscious decision rather than a drift.
3. [minor] frontmatter `prereqs` (line 7): `node tools/check/index.mjs` warns that
   `funcan.bounded-operators` and `funcan.compact-operators` come after this unit in
   `content/map.yaml` (part `funcan` at line 573, part `green` at line 460). The prerequisites are
   genuine and honestly declared; the defect is in the map order. No `resembles` line and no other
   warn touches this unit. Fix: reorder the map, or accept the forward reference deliberately.

## Checked
- Counterexample search:
  - "A separable kernel is Hilbert–Schmidt": needs $n$ finite and $p_i,q_i\in L^2$, both stated;
    with $n$ infinite it fails, and the definition says "with $n$ finite".
  - The compactness claim on an infinite interval: tried to break it with $\mathrm{e}^{-|x-t|}/2$ on
    the line — bounded, symmetric, not compact — but that kernel is not Hilbert–Schmidt, so it is
    not a counterexample; Stakgold and Holst use it for exactly this purpose on p. 358.
  - Step 1 with $A$ merely differentiable, not continuously: the proof's three uses of $A'$ (by
    parts, Fubini on the closed triangle, continuity of $K$) all fail, which is what the hypothesis
    remark says; no counterexample to the unit as written.
  - The three "Green's-function properties" of step 2: I tried to break them for general $A,B$ and
    succeeded, which is precisely what the `note` block already says and demonstrates with two
    explicit kernels — see the calculations below. So the unit anticipates the attack.
  - $\lambda$-convention trap: checked that no formula in the unit mixes the two conventions. The
    unit uses $u=v+\lambda\mathcal{K}u$ throughout and translates Stakgold and Holst's
    $\mathcal{K}u-\lambda u=f$ explicitly where it is used.
- Calculations (`.venv/bin/python`, sympy + numpy; scripts at
  <local scratch path> and
  .../ie2.py):
  - Step-1 formulas rederived from scratch: one integration gives
    $y'=-Ay+\int_a^x(A'-B)y+\int_a^x g+A(a)y_0+y_0'$, the second with
    $\int_a^x\!du\int_a^u\Phi=\int_a^x(x-t)\Phi(t)\,dt$ gives
    $K(x,t)=(t-x)[B(t)-A'(t)]-A(t)$ and the stated $f$. Identical to the unit.
  - Example, $g\equiv0$: $K=t-x+2$, $f=1-x$ as the formulas give. Substituting $y=\mathrm{e}^t$,
    sympy returns $1-x+\int_0^x(t-x+2)\mathrm{e}^t dt=\mathrm{e}^x$ exactly; by hand the coefficient
    of $\mathrm{e}^x$ is $(x-1)+(2-x)=1$ and the constants give $x-1$, as the unit says.
  - Example, step 4: $F(x,x)=2y(x)$, $\partial_xF=-y(t)$, so $y'=-1+2y-\int_0^x y$ and $y''=2y'-y$;
    $y(0)=1$, $y'(0)=-1+2=1$. All reproduced.
  - Example with $g\equiv2$: the added term is $\int_0^x(x-t)\cdot2\,dt=x^2$, so $f=x^2-x+1$ —
    correct. The claimed solution $y=(2x-1)\mathrm{e}^x+2$ satisfies $y''-2y'+y-2=0$, $y(0)=1$,
    $y'(0)=1$ (sympy: residual 0), and sympy gives
    $x^2-x+1+\int_0^x(t-x+2)y(t)\,dt-y(x)=0$ exactly. The unit's "checked symbolically" is right.
  - Example, boundary-value contrast: $\int_0^1\min(x,t)\sin(\omega t)\,dt=\sin(\omega x)/\omega^2$
    for $\cos\omega=0$ reproduced by parts, so $\mu=\omega^2=\pi^2/4$; and $\sqrt\mu=\pi/2$ is indeed
    the smallest root of $\cos\sqrt\mu=0$, so "the lowest eigenvalue" is right. $\min(x,t)$ is the
    Green's function of $-d^2/dx^2$ with $y(0)=0,y'(1)=0$: $-\partial_x^2\min(x,t)=\delta(x-t)$,
    $\min(0,t)=0$, $\partial_x\min(x,t)|_{x=1}=0$ — all checked.
  - `note`, case $A\equiv0$: I verified $\Gamma$ is the Dirichlet Green's function of $-d^2/dx^2$
    (continuous, symmetric, $\partial_t\Gamma$ jumping by exactly $-1$), and then tested the claimed
    equivalence numerically: with $B(x)=x$, $g(x)=1+\sin 3x$ on $[0,1]$, solving
    $y''+By=g$, $y(0)=y(1)=0$ by finite differences ($N=400$) and comparing
    $y$ with $f+\int_0^1 B(t)\Gamma(x,t)y(t)\,dt$, $f=-\int\Gamma g$, gave a maximum residual of
    $1.4\times10^{-14}$ against a solution of size $0.24$. The displayed kernel for $B(x)=x$,
    $t^2(1-x)$ for $t<x$ and $xt(1-t)$ for $t>x$, is $B(t)\Gamma$; it is continuous at $t=x$ (both
    give $x^2(1-x)$), not symmetric, and $\partial_tK$ jumps by $x(1-2x)-2x(1-x)=-x$ — the unit's
    $-x$, confirmed.
  - `note`, case $A\equiv1$, $B\equiv0$: step 1 gives $K=-1$ and $f=\int_0^x(x-t)g+cx$ with
    $c=y'(0)$; imposing $y(1)=0$ gives $c=\int_0^1y-\int_0^1(1-t)g$, and substituting leaves the
    operator $x\int_0^1y-\int_0^xy$, i.e. $K(x,t)=x-1$ for $t<x$ and $x$ for $t>x$ — the unit's
    kernel. Symbolic check with $g\equiv1$: the exact solution of $y''+y'=1$, $y(0)=y(1)=0$ is
    $y=x-\frac{e}{e-1}+\frac{e}{e-1}\mathrm{e}^{-x}$, and sympy gives
    $f+\int_0^1K(x,t)y(t)\,dt-y(x)=0$ identically with $f=(x^2-x)/2$. The jump across the diagonal is
    $x-(x-1)=+1$, $\partial_tK\equiv0$ on both sides, and the kernel is not symmetric — all three as
    the unit says.
- Citations:
  - hassani-2013, pp. 543–545: §18.1 classifies exactly as the unit does (variable limit = Volterra,
    unknown only inside = first kind) and prints the same four equations in the same $u,v,K$
    notation; (18.1)–(18.2) introduce $\lambda$; p. 544 defines a characteristic value and states
    "$\lambda$ is a characteristic value if and only if $\lambda^{-1}$ is an eigenvalue of $K$";
    Theorem 18.1.1 is on p. 544 and reads "either form a finite set or a sequence of complex numbers
    increasing beyond limit in absolute value" — the unit's paraphrase is exact. Matched. (Hassani
    also calls any kernel on a finite interval "Hilbert-Schmidt", which conflicts with the
    Stakgold–Holst definition the unit adopts; the unit does not repeat Hassani's version and does
    not cite him for it, so no conventions are silently merged.)
  - rhb-2006, pp. 803–806 and 809: the general linear form (23.4) with $g(x)$ in front, limits
    "constants or functions of $x$", first/second kind, homogeneous/inhomogeneous, Fredholm/Volterra
    with "analogous to one with fixed limits but for which $K(x,z)=0$ for $z>x$", and the definition
    of singular ("either (or both) of the integration limits is infinite, or ... $K(x,z)$ becomes
    infinite in the range of integration") are all on pp. 804–805 as cited. The operator (23.5) and
    $\mathsf{K}^\dagger$ with kernel $K^*(z,x)$ are on p. 805. §23.1 pp. 803–804 derives
    $y(x)=\int_0^x(x-z)f(z,y(z))dz+c_1x+c_2$ from $y''=f(x,y)$ with "$f(x,y)$ can be any function of
    $x$ and $y$ but not of $y'(x)$" — the unit's closing paragraph of the method is faithful,
    including the restriction. Displacement kernel and (23.17) are on p. 809. Matched.
  - arfken-2013, pp. 1047–1052: the two-way classification and (21.1)–(21.4) pp. 1047–1048;
    Example 21.1.1 with (21.6) p. 1048 (the unit reproduces that equation exactly, with the
    hartree-atomic-units Coulomb proviso the book states, and attributes it by `:cite`);
    (21.7)–(21.11) pp. 1049–1050, where $K(x,t)=(t-x)[B(t)-A'(t)]-A(t)$ and $f$ are printed exactly
    as the unit's step 1, and where no hypotheses on $A$, $B$, $g$ are stated — as the unit says in
    so many words; Example 21.1.2 and the oscillator boundary-value kernel (21.16), its three listed
    properties (symmetric; continuous; $\partial K/\partial t$ discontinuous by $-1$ as $t$ increases
    through $x$), and the boxed summary about initial versus boundary conditions, pp. 1051–1052;
    and the closing remark that the reverse transformation is not always possible, p. 1052, which is
    the unit's step 4 warning. Every locator matched.
  - stakgold-holst-2011, pp. 351–360: the four advantages p. 351 (the unit's application uses
    numbers 1, 2 and 4); the integral operator (6.1.16)–(6.1.17) p. 355; separable, Hilbert–Schmidt
    (6.1.18) and Holmgren (6.1.19) definitions pp. 356–357 — and the unit's Holmgren condition,
    $\sup_\eta\iint|K(x,t)||K(x,\eta)|\,dx\,dt<\infty$, is (6.1.19) exactly, including the slightly
    surprising double integral; the bound (6.1.20) p. 357; "It is clear that a separable kernel is
    Hilbert-Schmidt" and "A Holmgren kernel also generates a bounded operator" p. 357; the theorem
    "An H.-S. operator is compact" with its proof pp. 357–358; the adjoint kernel (6.1.23) p. 358;
    the iterated kernels (6.1.25)–(6.1.27) p. 359 with "The iterated kernels will be symmetric if
    $k(x,\xi)$ is symmetric"; §6.2 (6.2.1)–(6.2.2) and Thm 6.2.1 with Remark 1 (range of a compact
    operator need not be closed) p. 360. Matched, including the convention point: Stakgold and Holst
    do write $Ku-\lambda u=f$ with first kind the case $\lambda=0$, so the unit's translation rule
    $\lambda_{\text{here}}=1/\lambda_{\text{S\&H}}$ is right. The unit's extension of the symmetry
    of the iterates to the Hermitian case is its own and is displayed with its proof; I checked it:
    $\overline{K_2(t,x)}=\int\overline{K(t,s)}\,\overline{K(s,x)}\,ds=\int K(x,s)K(s,t)\,ds=K_2(x,t)$,
    and the induction on $K_m(x,t)=\int K_{m-1}(x,s)K(s,t)\,ds$ works as claimed.
  - kreyszig-1978, pp. 319 and 323: §5.4 eq. (1) is
    $x(t)-\mu\int_a^b k(t,\tau)x(\tau)\,d\tau=v(t)$ on $C[a,b]$, and footnote 2 is exactly "The
    presence of the term $x(t)$ enables us to apply iteration"; p. 323 ends with "a Volterra
    equation can be regarded as a special Fredholm equation whose kernel $k$ is zero in the part of
    the square ... where $\tau>t$ ... and may not be continuous at points on the diagonal", which is
    both halves of the unit's third remark bullet. Matched.
  - reed-simon-1980, p. 210: Thm VI.23 is the if-and-only-if with $K\in L^2(M\times M)$ and
    $\|A\|_2^2=\iint|K|^2$, stated on that page. Matched.
- Provenance: `adapted` on both definitions, the statement, the conventions remark, the method and
  the proof, each with a src; `original` on the note, the idea, the hypotheses remark, the example
  and the application. The closest passage to its source is the `proof` block against Arfken
  (21.7)–(21.10): the chain of three integrations is necessarily the same, but the unit factors the
  order-exchange into a general statement about $\int_a^x\!du\int_a^u\Phi$ with the continuity
  justification attached, states why the by-parts step is allowed, and names which hypothesis each
  step consumes — none of which is in the book, which gives the displays with one connecting clause
  each. Displayed formulas coincide because the result is the same formula; the prose does not. I
  judge it genuinely adapted. The method's step 2 reports Arfken's oscillator example in summary and
  attributes it in the text. The `note` is the unit's own and is the most clearly original thing
  here. No `resembles` warning from `npm run check -- green.integral-equations`.
- Style: no "clearly"/"obviously"/"it is easy to see" (grepped); an idea block immediately before the
  proof; proof ends with $\square$; a fully worked example with checkable results ($y=\mathrm{e}^x$
  reproduced exactly, $\mu=\pi^2/4$); hypotheses named at the step that uses them, with a remark
  devoted to it. Block order deviates from the guide — finding 2.
