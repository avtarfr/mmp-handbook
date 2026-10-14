VERDICT: PASS
UNIT: funcan.symmetric-self-adjoint
VERIFIER: B

## Findings
1. [minor] definition "Symmetric, self-adjoint, essentially self-adjoint" (line ~64) and proof "The
   chain and the reality of $(T\varphi,\varphi)$" (line 71): the third characterisation, "$T$ is
   symmetric if and only if $(T\varphi,\varphi)$ is real for every $\varphi \in D(T)$", is cited as
   "§10.2, p. 534" and described as something Kreyszig "adds". It is on p. 535, as Problem 3 of
   §10.2, not in the running text; p. 534 carries the proof of Lemma 10.2-4, Def. 10.2-5, the
   remarks that self-adjoint implies symmetric and that the two coincide on all of $H$, and Problems
   1-2. Fix: change the locator to "§10.2, Problem 3, p. 535", say that Kreyszig sets it as a
   problem, and extend the frontmatter range from "533-534" to "533-535". (The characterisation is
   correct and the unit proves it itself by polarisation, so nothing mathematical turns on this.)
2. [minor] statement "Self-adjointness is decided at the two points $\pm i$", closing paragraph
   (line 32): ":cite[Stakgold and Holst's Thm 5.6.2(b)]{loc=\"Thm 5.6.2(b), p. 328\"}". Theorem
   5.6.2, including part (b) "the approximate spectrum ... is real", is stated on p. 327; only the
   proof runs onto p. 328. Fix: "Thm 5.6.2(b), pp. 327-328". (The proof block's own
   "Thm 5.6.2(a), pp. 327-328" is right.)
3. [minor] note "Symmetric, hermitian, self-adjoint", Arfken bullet (line 49), and the `arfken-2013`
   frontmatter entry (`pages: "283-284"`): Example 5.4.1 begins on p. 284 but its momentum half --
   the integration by parts in eq. (5.64), the sentence that the boundary terms at $\pm\infty$
   vanish because $\langle f|f\rangle$ and $\langle g|g\rangle$ are finite, and the conclusion "thus
   both $x$ and $p$ are self-adjoint" -- is on p. 285, outside the cited range. Since the bullet
   describes exactly that calculation, the locator should read "§5.4 and Example 5.4.1,
   pp. 283-285", with `pages: "283-285"`.
4. [source] stakgold-holst-2011, Example 2, p. 319. The book gives the adjoint boundary condition as
   $v(1)=a\,v(0)$ for the domain condition $u(0)=a\,u(1)$. On a complex $L^{2}$ the boundary form is
   $u(1)[\overline{v(1)} - a\,\overline{v(0)}]$, so the condition is $v(1)=\bar a\,v(0)$, and the
   conclusion "self-adjoint exactly for $a=1$ and $a=-1$" holds only for real $a$. Our unit reports
   the book faithfully and says explicitly that they "allow only **real** $a$", so this is a
   deference-to-source matter, not a defect in our text. Recorded with
   `node tools/discrepancy.mjs add funcan.symmetric-self-adjoint stakgold-holst-2011
   "Example 2, p. 319" ...`; the unit passes.

## Checked
- Automated checks: `node tools/check/index.mjs --record funcan.symmetric-self-adjoint ...` ->
  `ok funcan.symmetric-self-adjoint`, no FAIL line, and no warn line names this file.
  `npm run check -- funcan.symmetric-self-adjoint` produced no `resembles` line.
- Counterexample search: hunted for a gap between the three conditions and the deficiency language.
  Step 0's identity reproves correctly in this handbook's first-slot-linear convention:
  $(T\varphi,i\varphi)=\bar i(T\varphi,\varphi)$, $(i\varphi,T\varphi)=i(\varphi,T\varphi)$,
  $(i\varphi,i\varphi)=\|\varphi\|^{2}$, so the cross terms cancel exactly as printed -- the unit
  has its conjugations the right way round throughout (including Step 1, where
  $i(\varphi,\psi)=(\varphi,-i\psi)$, and Step 2, where $(\varphi,i\varphi)=-i\|\varphi\|^{2}$).
  Step 1's pairing is consistent with the deficiency block:
  $\operatorname{Ran}(T-i)^{\perp}=\ker(T^{*}+i)=\mathcal{N}_{-}$ and
  $\operatorname{Ran}(T+i)^{\perp}=\ker(T^{*}-i)=\mathcal{N}_{+}$, which is also the pairing that
  makes $\mathcal{D}(U_T)^{\perp}, \mathcal{R}(U_T)^{\perp}$ come out as $n_{+}, n_{-}$ for
  $U_T=(T-i)(T+i)^{-1}$ -- no sign slip anywhere, and the unit warns that other books differ.
  Dropping closedness: the unit's own counterexample, $-i\,d/dx$ on $C_c^\infty(\mathbb{R})$, is
  correct (trivial deficiency subspaces, dense but not closed ranges, essentially but not
  self-adjoint). Real scalars: the criterion is indeed vacuous there, as the remark says. The
  "unique self-adjoint extension" argument quoted from Reed and Simon reproduces correctly:
  $S\supseteq T$ closed gives $S\supseteq T^{**}$, so $S=S^{*}\subseteq T^{***}=T^{**}$. The
  polarisation step in the reality proof is sound: $B(\varphi,\psi)=(T\varphi,\psi)-(\varphi,T\psi)$
  is sesquilinear on the subspace $D(T)$ and vanishes on the diagonal, so it vanishes identically
  over $\mathbb{C}$. Step 3 of "Equal indices are necessary" is right that a unitary carries
  $M^{\perp}$ onto $N^{\perp}$ once it carries $M$ onto $N$.
- Calculations (`.venv/bin/python`, sympy):
  - (A) deficiency: $-iv'=+iv \Rightarrow v'=-v \Rightarrow v=e^{-x}$ and $-iv'=-iv \Rightarrow
    v'=v \Rightarrow v=e^{x}$; both are in $AC[0,1]$ with $L^{2}$ derivative, so $n_{+}=n_{-}=1$ --
    confirmed by hand, and the assignment of $e^{-x}$ to $\mathcal{N}_{+}=\ker(p_0^{*}-i)$ is the
    right one.
  - (B) symmetry/self-adjointness algebra: with $u(1)=\alpha u(0)$ and
    $\overline{v(1)}=\bar\alpha\overline{v(0)}$ the boundary form is
    $-i\,u(0)\overline{v(0)}(|\alpha|^{2}-1)$, zero for all free $u(0),v(0)$ iff $|\alpha|=1$ --
    reproduced. The adjoint condition $\alpha\overline{v(1)}=\overline{v(0)}$ conjugates to
    $\bar\alpha v(1)=v(0)$, i.e. $v(1)=\bar\alpha^{-1}v(0)=\alpha v(0)$ when $|\alpha|=1$ -- the
    unit's step is right.
  - (B) spectrum: $-iu'=\lambda u$ gives $u=ce^{i\lambda x}$ and $e^{i\lambda}=e^{i\theta}$, so
    $\lambda_n=\theta+2\pi n$; $(e_n,e_m)=\int_0^1 e^{2\pi i(n-m)x}dx=\delta_{nm}$ -- verified. The
    completeness argument via multiplication by the unimodular $e^{i\theta x}$ is correct.
  - (B) numerical check, $\alpha=i$, $u=1+(i-1)x$: sympy gives $u(0)=1$, $u(1)=i=\alpha u(0)$,
    $\int_0^1|u|^2 = 2/3$, $p_iu=-i(i-1)=1+i$, $(p_iu,u)=\int_0^1(1+i)\overline{u}\,dx = 1$ exactly
    (real, as symmetry requires), and $\langle p\rangle = 1/(2/3) = 3/2 = 1.5$. The bracketing
    eigenvalues: $\lambda_0=\pi/2=1.5707963\ldots$ and $\lambda_{-1}=-3\pi/2=-4.7123890\ldots$, so
    $1.5$ does lie between them, as stated.
  - (B) contrast, $\alpha=2$, $u=1+x$: $p_2u=-i$ and $(p_2u,u)=-i\int_0^1(1+x)dx = -3i/2$, not real;
    and $|2|^{2}-1=3\ne0$, so the two diagnoses agree.
  - (C) half-line: the lemma's identity $|u(x)|^{2}=|u(0)|^{2}+2\operatorname{Re}\int_0^x u'\bar u$
    is the fundamental theorem of calculus for $|u|^{2}$ and the $L^{1}$ bound on $u'\bar u$ is
    Cauchy-Schwarz -- both correct. The weak-derivative step gives $\bar v'=-\bar v$, hence
    $v=ce^{-x}$; the verification $(p_+u,e^{-x})=-i\int_0^\infty ue^{-x}dx=(u,\,i\,e^{-x})$ is right
    (the boundary terms die at $0$ by $u(0)=0$ and at $\infty$ by the lemma). sympy:
    $\int_0^\infty e^{-2x}dx = 1/2$, as printed; $\int_0^\infty e^{2x}dx$ diverges, so
    $\mathcal{N}_{-}=\{0\}$ and $(n_{+},n_{-})=(1,0)$.
- Citations: all opened with `tools/corpus/pages.mjs`.
  - reed-simon-1980 §VIII.2: the definitions of symmetric (= Hermitian) as $T\subseteq T^{*}$ and of
    self-adjoint as $T=T^{*}$, the automatic closability, and the chain
    $T\subseteq T^{**}\subseteq T^{*}$ with its closed and self-adjoint specialisations, p. 255;
    the remark that a closed symmetric $T$ is self-adjoint iff $T^{*}$ is symmetric, the paragraph
    that only self-adjoint operators have a spectral theorem and exponentiate to unitary groups, the
    definitions of essential self-adjointness and core, the uniqueness argument, and the computation
    that $T^{*}\varphi=\pm i\varphi$ has no solutions for self-adjoint $T$, p. 256; Thm VIII.3 with
    (a) self-adjoint, (b) closed and $\operatorname{Ker}(T^{*}\pm i)=\{0\}$, (c)
    $\operatorname{Ran}(T\pm i)=\mathcal{H}$, its proof using
    $\|(T-i)\varphi\|^{2}=\|T\varphi\|^{2}+\|\varphi\|^{2}$, and the corollary for essential
    self-adjointness, pp. 256-257; the example $T=i\,d/dx$ on $\{\varphi\in AC[0,1]:
    \varphi(0)=0=\varphi(1)\}$ and the identification $T^{*}=i\,d/dx$ on $AC[0,1]$, pp. 257-258,
    with $e^{\pm x}\in D(T^{*})$ killing essential self-adjointness, p. 258; and on p. 259 the
    family $T_\alpha$ with $\varphi(0)=\alpha\varphi(1)$, $|\alpha|=1$, Figure VIII.1, and the
    forward reference "the reason why there is exactly a circle ... will be made clear in
    Section X.1". Every attribution in the unit matches, including the honest statement that the
    library does not hold the volume containing von Neumann's theorem.
  - kreyszig-1978: Def. 10.2-3, Lemma 10.2-4 with proof, Def. 10.2-5 and the remark that the two
    notions coincide on all of $H$, pp. 533-534 (match); the reality criterion -- see finding 1;
    Thm 10.3-5 (a densely defined symmetric operator has a unique closure) p. 537 and Thm 10.3-6
    $(\bar T)^{*}=T^{*}$ pp. 539-540 (match); Thm 10.4-1 (regular values) p. 541 (match); eq. (1)
    $U=(T-iI)(T+iI)^{-1}$ and eq. (2) the Mobius map $u=(t-i)/(t+i)$ on p. 556, Lemma 10.6-1 with
    the isometry computation pp. 556-557 (match, and the unit is right that the computation uses
    only reality of $(Ty,y)$); §10.6 Problems 5-9 pp. 561-562 -- Problem 5 (Cayley transform of a
    symmetric operator exists and is isometric), 6, 7 (domain and range closed when $T$ is closed),
    8 (unitary transform implies self-adjoint) and 9, which defines the deficiency indices as the
    Hilbert dimensions of $\mathcal{D}(U)^{\perp}$ and $\mathcal{R}(U)^{\perp}$ and states they
    vanish together exactly when $T$ is self-adjoint (match, exactly as the unit reports);
    Thm 10.7-5 p. 569, $i\,d/dx$ on the locally absolutely continuous $L^{2}$ functions with $L^{2}$
    derivative is self-adjoint, stated without proof (match); the complex-field convention at the
    head of Ch. 10, p. 524 (match).
  - stakgold-holst-2011: §5.4 p. 317, the definitions (5.4.8)-(5.4.9), the three facts (self-adjoint
    implies symmetric; bounded symmetric implies self-adjoint; unbounded symmetric need not be), and
    (5.4.10); Example 2 p. 319 with $u(0)=au(1)$, adjoint condition $v(1)=av(0)$ and self-adjointness
    exactly at $a=\pm1$ (match the unit's report -- see finding 4 for the source's own imprecision);
    Example 3 p. 320, $S_3=-i\,d/dx$ on $u(0)=u(1)=0$ whose adjoint carries no boundary condition,
    presented as the standard symmetric-not-self-adjoint example, together with "for any symmetric
    operator $A$ it is always true that $A^{*}$ is an extension of $A$" (match); §5.6 Thm 5.6.1
    p. 327, Thm 5.6.2(a)(b)(c) p. 327 with proofs on pp. 327-328 -- see finding 2 -- and Thm 5.6.3
    p. 328 (match).
  - hassani-2013: Def. 19.1.5 and footnote 3, p. 564 -- hermitian for $T\subseteq T^{\dagger}$,
    self-adjoint for equal domains, with the explicit warning that the distinction is confined to
    that discussion and the words are used interchangeably afterwards (match).
  - arfken-2013: §5.4 pp. 283-284 -- self-adjoint (Hermitian) operators as the carriers of
    observables, $\langle A\rangle=\langle\psi|A|\psi\rangle$ shown real, eq. (5.62)
    $a_{\nu\mu}=a_{\mu\nu}^{*}$, and the start of Example 5.4.1 (the scalar product (5.63) and the
    test of $x$). The momentum half of the example is on p. 285 -- see finding 3.
  - Cross-check of the two circles: Reed and Simon parametrise by $\varphi(0)=\alpha\varphi(1)$ and
    Stakgold-Holst by $u(0)=au(1)$, while the unit uses $u(1)=\alpha u(0)$; the maps are
    $\alpha_{\text{ours}}=1/a$, so Stakgold-Holst's $a=1,-1$ are the unit's $\theta=0,\pi$, as it
    claims.
- Provenance: no `resembles` line. Hand comparisons: proof "The basic criterion" against
  reed-simon-1980 pp. 256-257 -- the same four implications and the same key identity, but our text
  adds a Step 0 and a Step 1 that RS fold into prose, labels where closedness enters, and states the
  range/kernel duality once and reuses it; the sentences share no structure with RS's. `adapted` is
  right. Proof "Equal indices are necessary" against kreyszig-1978 Lemma 10.6-1 and Problems 5-7 --
  Kreyszig proves unitarity only for self-adjoint $T$ and leaves the symmetric case as problems; the
  three-step argument assembling them into "a self-adjoint extension matches the leftovers" is ours.
  `adapted` is right and both sources are cited. The `idea`, `remark`, `method`, `example` and
  `application` blocks are `original`: the momentum example's parametrisation, the numerical check
  at $\alpha=i$, the $\alpha=2$ contrast, the half-line lemma and the whole deficiency-index recipe
  are our own, with inline cites where a book's result is used -- consistent with the convention of
  the already-published units in this part.
- Style: the idea block precedes all three proofs; no "clearly"/"obviously"/"easy to see"; proofs end
  in $\square$; the worked example ends in checkable numbers ($\langle p\rangle=3/2$, $-3i/2$,
  $\|e^{-x}\|^{2}=1/2$, $(n_{+},n_{-})=(1,0)$); the remark block names each hypothesis at the step
  that uses it; no exercises.
