VERDICT: FAIL
UNIT: group.lorentz-group
VERIFIER: B

## Findings

1. [blocking] proof[Part 6: the covering by $SL(2,\mathbb{C})$] (line 244): the block is
   `provenance=adapted` with the single source `hassani-2013:Example 29.2.10, pp. 940-941`, and those
   pages do not support it. I read both pages in full: p. 940 has the definition of $\eta$, Eq. (29.38)
   and Eq. (29.39); p. 941 has Eq. (29.40), the $a_{00}\ge 1$ / $a_{00}\le -1$ dichotomy, the
   orthochronous and proper orthochronous names, and the five-region light-cone classification. There is
   nothing there about $SL(2,\mathbb{C})$, about $X=x^0I+\mathbf{x}\cdot\boldsymbol{\sigma}$, about
   $A X A^{\dagger}$, or about a two-to-one covering. A corpus-wide search of Hassani for "SL(2" returns
   only printed pp. 706 and 712, where the special linear group is defined in general; the book never
   covers $SO^{+}(3,1)$ by $SL(2,\mathbb{C})$. The block's own first line says what it really follows:
   "the argument of :ref[the rotation group and SU(2)] with 'traceless Hermitian' relaxed to
   'Hermitian'", i.e. our own sibling unit. So the locator is wrong and the provenance is mislabelled.
   The same gap affects statement part 6 (line 132), whose block src is also only pp. 940-941, p. 943
   and Arfken §17.8.
   Fix: either label the block `provenance=original` with no book `src` (as the Part 3 proof correctly
   is), or cite what group.so3-su2 cites for the same construction and which does exist in the corpus:
   hassani-2013 §30.3.3, p. 972 and Thm 31.2.6, p. 996 (surjective $\mathrm{Spin}(\mu,\nu)\to
   SO(\mu,\nu)$ with kernel $\{\pm 1\}$), noting there that Hassani's theorem is not stated for the
   identity component.

2. [blocking] statement part 5 (line 126) and proof[Part 4] step 5 (line 232): the
   $N^{\pm}=\tfrac12(J\pm\mathrm{i}K)$ splitting into two commuting angular-momentum algebras, the
   labelling of the irreducible representations by a pair of spins, and the identification of
   $\mathbf{J}^2-\mathbf{K}^2$ and $\mathbf{J}\cdot\mathbf{K}$ as the two Casimir invariants are all in
   Hassani §30.3.3, pp. 974-975 (he writes $\mathbf{M}=(M_{23},M_{31},M_{12})$,
   $\mathbf{N}=(M_{01},M_{02},M_{03})$, gives the two Casimirs $\mathbf{M}^2-\mathbf{N}^2$ and
   $\mathbf{M}\cdot\mathbf{N}$, defines $\tfrac12(\mathbf{M}\pm\mathrm{i}\mathbf{N})$, and labels the
   representations by $(j,j')$). Those pages are cited nowhere in the unit: the proof block carries only
   `hassani-2013:Eqs. (29.41)-(29.42), p. 943`, which contains the covariant generators and their
   brackets and nothing else, and the frontmatter source list stops at p. 943. The application block
   (line 404) uses the same $(j_1,j_2)$ labelling. An `adapted` block whose src does not reach the
   material it presents is the provenance error of verifier-b.md item 4.
   Fix: add hassani-2013 §30.3.3, pp. 974-975 to the frontmatter and to the srcs of statement part 5 and
   of proof[Part 4]. Two things then need saying in the remark: Hassani's $\mathbf{J},\mathbf{K}$ are our
   $N^{+},N^{-}$ while our $\mathbf{J},\mathbf{K}$ are his $\mathbf{M},\mathbf{N}$ up to factors of
   $\mathrm{i}$, and p. 975 calls $\mathfrak{so}(3,1)$ "a direct sum of these algebras" without the word
   complexified, which is exactly what the unit's remark declares false. I have recorded that second
   point with `tools/discrepancy.mjs` against hassani-2013 §30.3.3, p. 975; it is a source matter and is
   not itself a reason to fail the unit, but once pp. 974-975 are cited the unit must note that it does
   not follow the book there.

3. [source] hassani-2013 §30.3.3, p. 975: recorded, see finding 2. Hassani's unqualified "direct sum"
   is true of the complexification only. The unit's treatment (complexified, with $\mathfrak{so}(3,1)$
   simple as a real algebra) is the correct one and I do not fail it for the disagreement.

4. [minor] statement part 2 (line 93): "the other three cosets being represented by space inversion $P$,
   time reversal $T$ and $PT=-I$. :cite[Hassani] names these transformations and records that each of
   them is joined to the identity by a continuous path." Read with its nearest antecedent, "these
   transformations" is $P,T,PT$, and the sentence then attributes to Hassani a statement that is false
   and that the next clause goes on to refute. What p. 941 actually names is "orthochronous" and "proper
   orthochronous", and what it says is reachable from the identity is the proper orthochronous subgroup.
   Fix: "Hassani names the proper orthochronous transformations and records that each of them is joined
   to the identity by a continuous path."

5. [minor] proof[Parts 1 and 2] step 2 (line 169): the parenthetical recipe does not work. Multiplying
   $\Lambda^{\mathsf{T}}\eta\Lambda=\eta$ by $\Lambda\eta$ on the right and $(\Lambda^{\mathsf{T}})^{-1}$
   on the left gives $\eta\Lambda^{2}\eta=(\Lambda^{\mathsf{T}})^{-1}\eta\Lambda\eta$, not
   $\Lambda\eta\Lambda^{\mathsf{T}}=\eta$. The conclusion is right and is Hassani's Eq. (29.39); only the
   route is misstated. Fix: right-multiply by $\Lambda^{-1}\eta$ to get $\Lambda^{\mathsf{T}}=\eta
   \Lambda^{-1}\eta$, hence $\Lambda^{-1}=\eta\Lambda^{\mathsf{T}}\eta$ and
   $\Lambda\eta\Lambda^{\mathsf{T}}=\eta$. (This also supplies, two steps later, the
   $\Lambda^{-1}=\eta\Lambda^{\mathsf{T}}\eta$ that step 3 already uses without having derived it.)

6. [minor] proof[Parts 1 and 2] step 3 (line 177): "The right-hand side is positive ... So the product is
   orthochronous." Orthochronous was defined as $\Lambda^{0}{}_{0}\ge 1$, not $>0$. The step is fine but
   needs its last link: by part 1 the entry $(\Lambda\Lambda')^{0}{}_{0}$ satisfies $|\cdot|\ge 1$, so
   positive forces $\ge 1$. Fix: add that clause.

7. [minor] statement part 4 (line 124): "The three $J_i$ are Hermitian and span $\mathfrak{so}(3)$."
   $\mathfrak{so}(3,1)$ was defined three lines above as a set of real matrices, and the $J_i$ are
   $\mathrm{i}$ times real antisymmetric matrices, so their real span is not $\mathfrak{so}(3)$; it is
   $-\mathrm{i}J_i$ that spans it. Fix: "the $-\mathrm{i}J_i$ span the $\mathfrak{so}(3)$ of the embedded
   rotations", or say "span $\mathfrak{so}(3)$ over $\mathbb{R}$ after multiplication by $-\mathrm{i}$".

8. [minor] statement part 4 (line 101): the displayed generator is the mixed-index form
   $(M_{\mu\nu})^{\alpha}{}_{\beta}$, which on p. 943 is the unnumbered line above Eq. (29.41); Eq.
   (29.41) itself is the all-lower-index $(M_{ij})_{kl}=\eta_{il}\eta_{jk}-\eta_{jl}\eta_{ik}$. The two
   agree after raising with $\eta$ (I checked), but the locator points one line low. Fix: "Hassani's Eq.
   (29.41), p. 943, with the first index raised".

9. [minor] idea (line 163): "the three-dimensional space of complex traceless Hermitian plus scalar
   matrices ... is four-dimensional over $\mathbb{R}$" calls one space both three- and four-dimensional
   in a single clause. Fix: "the traceless Hermitian $2\times2$ matrices are three-dimensional over
   $\mathbb{R}$; adding the scalars gives all Hermitian $2\times2$ matrices, four-dimensional over
   $\mathbb{R}$".

## Checked

- Automated: `node tools/check/index.mjs --record group.lorentz-group` -> `ok group.lorentz-group`,
  1/1 pass. All 97 warnings name other files (prerequisite-ordering warnings in linalg, measure, ode,
  pde, prob, spec, vcalc); none touches this unit. `npm run check -- group.lorentz-group` produced no
  `resembles` line, so no overlap passage was flagged for hand comparison.

- Counterexample search (statement, as written):
  - Part 1: over 500 random $SL(2,\mathbb{C})$ images and the discrete elements $P,T,PT$,
    $(\det\Lambda)^2=1$ and both $a_{00}$ relations held to $10^{-14}$; $|a_{00}|\ge 1$ never violated.
  - Part 2: the sign pair is multiplicative and $P,T,PT$ realise $(-,+),(-,-),(+,-)$ respectively, so the
    index is four; the method block's coset table at line 295 assigns the same three correctly. I tried
    to break the continuity argument by looking for $\Lambda\in O(3,1)$ with $a_{00}=0$: part 1 forbids
    it, and the remark's own $O(2,2)$ counterexample is right, since there the $(0,0)$ relation reads
    $a_{00}^2+a_{10}^2-a_{20}^2-a_{30}^2=1$ and a rotation in the two positive directions drives
    $a_{00}$ through $0$.
  - Part 3: tested on random $SO^{+}(3,1)$ elements; $B(\boldsymbol{\beta})^{-1}\Lambda$ always came out
    with first row and column $(1,0,0,0)$ and lower block in $SO(3)$. The stated failure for antichronous
    $\Lambda$ is genuine: a boost has $\gamma\ge1$.
  - Part 4: $\dim\{X: X^{\mathsf{T}}\eta+\eta X=0\}$ computed as rank 6. All $4^4=256$ instances of the
    covariant bracket identity verified: 0 mismatches. All 9 pairs in each of the three physicists'
    bracket lines verified: 0 mismatches. $J_i$ Hermitian and $K_i$ anti-Hermitian confirmed. Checked the
    two displayed matrices $M_{03}$, $M_{12}$ entry by entry against the definition, and
    $\exp(\rho M_{03})=B_3(\rho)$, $\exp(-\mathrm{i}\theta J_3)$ = rotation by $+\theta$,
    $\exp(-\mathrm{i}\rho K_3)=B_3(\rho)$ all to $10^{-15}$.
  - Part 5: $[N^{\pm}_j,N^{\pm}_k]=\mathrm{i}\epsilon_{jkl}N^{\pm}_l$ and $[N^{+}_j,N^{-}_k]=0$ verified
    for all 9 pairs.
  - Part 6: $\det X(x)=\langle x,x\rangle_\eta$ symbolically; over 500 random $A\in SL(2,\mathbb{C})$,
    $\Lambda(A)$ came out real, $\eta$-orthogonal, with $\det=1$ and $\Lambda^{0}{}_{0}\ge1$ every time
    (0 exceptions), and $\Lambda(-I)=\Lambda(I)=I$ exactly. Both generating-family identities checked on
    200 random axes and parameters: max error $7.8\times10^{-16}$ (rotations) and
    $2.7\times10^{-15}$ (boosts).
  - Remark: the $\mathfrak{so}(4)$ example offered against the trace argument, $J_i=K_i=\tfrac12\sigma_i$,
    does satisfy $[J_j,J_k]=\mathrm{i}\epsilon J_l$, $[K_j,K_k]=+\mathrm{i}\epsilon J_l$,
    $[J_j,K_k]=\mathrm{i}\epsilon K_l$ with both families Hermitian, and
    $A^{\pm}=\tfrac12(J\pm K)$ gives $A^{+}=\tfrac12\boldsymbol{\sigma}$, $A^{-}=0$ as claimed.

- Calculations (every number recomputed independently, in exact rationals where possible):
  - $\gamma_1=5/4$, $\gamma_2=5/3$; $\rho_1=\operatorname{artanh}(3/5)=0.69314718$ and
    $\rho_2=\operatorname{artanh}(4/5)=1.09861229$ — unit prints 0.6931472 and 1.0986123. Match.
  - Composite $B(\beta_2\hat e_2)B(\beta_1\hat e_1)$: I obtained exactly the printed matrix, rows
    $(25/12,5/4,4/3,0)$, $(3/4,5/4,0,0)$, $(5/3,1,5/3,0)$, $(0,0,0,1)$. $\Lambda^{\mathsf{T}}\eta\Lambda-\eta$
    max $8.9\times10^{-16}$, $\det\Lambda=1.0$, $\Lambda^{0}{}_{0}=25/12=2.0833333$. Match, and it is
    indeed not symmetric.
  - $\boldsymbol{\beta}=(9/25,4/5,0)$, $|\boldsymbol{\beta}|^2=481/625=0.7696$,
    $(1-481/625)^{-1/2}=25/12$. $(\gamma-1)/|\boldsymbol{\beta}|^2=(13/12)(625/481)=625/444$ (using
    $481=13\cdot 37$). Match.
  - $B(\boldsymbol{\beta})$: I obtained $175/148=1.1824324$, $211/111=1.9009009$, $15/37=0.4054054$,
    with time row/column $(25/12,3/4,5/3,0)$ — every printed entry, decimal and fraction, matches; it is
    symmetric and $\eta$-orthogonal to $4.4\times10^{-16}$.
  - $\widehat R=B(\boldsymbol{\beta})^{-1}\Lambda$: lower block exactly
    $\binom{35/37\ \ -12/37}{12/37\ \ \ \ 35/37}$ to $10^{-14}$, i.e. $\cos\theta=0.94594595$,
    $\sin\theta=0.32432432$, $\theta=0.3302973548$ rad $=18.9246444^\circ$. Unit prints 0.9459459,
    0.3243243, 0.3302974, 18.9246$^\circ$. Match.
  - $SL(2,\mathbb{C})$ route: $A=\exp(\tfrac12\rho_2\sigma_2)\exp(\tfrac12\rho_1\sigma_1)$ has
    $\det A=1.0$, and $\tfrac12\operatorname{tr}(\sigma_\mu A\sigma_\nu A^{\dagger})$ reproduces
    $\Lambda$ to $8.9\times10^{-16}$ — "entry for entry" is right. Left polar $A=HU$ gives
    $U=\operatorname{diag}(\mathrm{e}^{-\mathrm{i}\theta/2},\mathrm{e}^{\mathrm{i}\theta/2})$ with
    off-diagonal $<7\times10^{-16}$ and $\cos(\theta/2)=0.98639392$, $2\arccos(0.98639392)=0.33029735$.
    Unit prints 0.9863939 and 0.3302974. Match.
  - General formula $\tan\theta=\gamma_1\gamma_2\beta_1\beta_2/(\gamma_1+\gamma_2)$: at $(3/5,4/5)$ it is
    $(25/12)(12/25)/(35/12)=12/35$, matching the extracted rotation. Numerics against the full
    steps 1-3 construction: $(1/2,1/2)$ gives 0.14334757 both ways (and the printed expression
    $\arctan((4/3)(1/4)/(4/\sqrt3))=0.14334757$); $(9/10,1/3)$ gives 0.21425657 both ways. Unit prints
    0.1433476 and 0.2142566. Match.
  - Application: with $F^{\mu\lambda}$ as in Arfken Eq. (17.79) (I dropped the overall $\varepsilon_0$,
    which cancels), $\mathbf{E}=(E_0,0,0)$, $\mathbf{B}=0$ and $\Lambda=B_3(\operatorname{artanh}3/5)$,
    $F'=\Lambda F\Lambda^{\mathsf{T}}$ gives $\mathbf{E}'=(1.25E_0,0,0)$ and
    $c\mathbf{B}'=(0,+0.75E_0,0)$ — the printed signs, including the remark that Arfken's passive rules
    return $cB'_y=-0.75E_0$ (his Eq. (17.83) with $B_y=0$ gives $-\gamma\beta E_0/c$). Invariant
    $|\mathbf{E}'|^2-c^2|\mathbf{B}'|^2=(1.5625-0.5625)E_0^2=1.0E_0^2=|\mathbf{E}|^2$, and
    $\mathbf{E}'\cdot\mathbf{B}'=0$. Match.
  - Casimir in the defining representation: $\sum_i J_i^2-\sum_i K_i^2$ computed to be exactly $3I_4$,
    and $2(j_1(j_1+1)+j_2(j_2+1))=2(3/4+3/4)=3$ for $(\tfrac12,\tfrac12)$. The "verified directly from
    the matrices of part 4" claim holds. ($\mathbf{J}\cdot\mathbf{K}=0$ here, as it must be for a
    self-dual-free real four-vector representation; the unit does not claim otherwise.)

- Citations:
  - hassani-2013 pp. 706-707 (Example 23.2.2 item 6): has the form
    $-x_1y_1-\dots-x_py_p+x_{p+1}y_{p+1}+\dots$, $O(p,n-p)\le GL(n,\mathbb{R})$, footnote 3 warning about
    other authors' ordering, and on p. 707 "$O(3,1)$, the set of Lorentz transformations, is called the
    Lorentz group" with the Poincaré group $P(3,1)$. Matches the definition block and the frontmatter.
  - hassani-2013 pp. 940-941: $\eta=\operatorname{diag}(-1,\dots,-1,1,\dots,1)$, Eq. (29.38)
    $A^t\eta A=\eta\Rightarrow(\det A)^2=1$, Eq. (29.39) $A\eta A^t=\eta$, footnote 5 relabelling the time
    index 0, Eq. (29.40)'s two relations, "$a_{00}\ge 1$ or $a_{00}\le -1$", orthochronous and proper
    orthochronous, the subgroup reachable continuously from the identity, and the five regions. Supports
    the definition block, statement parts 1-2 and the Parts 1-2 proof. Does NOT support statement part 6
    or the Part 6 proof — finding 1.
  - hassani-2013 pp. 942-943: the prototype $A^{(ij)}$ with rotation block
    $\binom{\cos\theta\ -\sin\theta}{\sin\theta\ \ \cos\theta}$ or boost block
    $\binom{\cosh\xi\ -\sinh\xi}{-\sinh\xi\ \ \cosh\xi}$, $\xi=\tanh^{-1}(v/c)$ called the rapidity; then
    $(M_{ij})_{kl}=\eta_{il}\eta_{jk}-\eta_{jl}\eta_{ik}$ (29.41) and the bracket (29.42) exactly as the
    unit displays it. Supports the boost definition and statement part 4, with the one-line locator slip
    of finding 8.
  - hassani-2013 p. 943, Eqs. (29.43)-(29.45): the $(n+1)\times(n+1)$ Poincaré matrices
    $\binom{A\ u}{0\ 1}$, $[M_{ij},P_k]=\eta_{ik}P_j-\eta_{jk}P_i$, $[P_i,P_j]=0$. Supports the closing
    note block, and $n=4$ does give $5\times5$.
  - hassani-2013 §30.3.3, pp. 974-975: contains statement part 5. Not cited anywhere — finding 2.
  - arfken-2013 p. 862: "inhomogeneous Lorentz group or the Poincaré group", "sometimes for clarity
    referred to as the homogeneous Lorentz group". Supports the note block.
  - arfken-2013 pp. 863-864: Eq. (17.69) $S=\mathrm{i}\sigma_1$, Eq. (17.70)
    $U(\rho)=\binom{\cosh\rho\ -\sinh\rho}{-\sinh\rho\ \ \cosh\rho}$, Eq. (17.71) $\beta=v/c$,
    $\tanh\rho=\beta$, $\cosh\rho=\gamma$, $\sinh\rho=\beta\gamma$, "rapidity", "$\tanh\rho<1$ ... c is an
    upper limit to v (which cannot be reached for finite $\rho$)", "boost or a pure Lorentz
    transformation", Eq. (17.72) additivity, Example 17.8.1 collinear addition, and the Thomas-precession
    sentence on p. 864. Every one of these is used as the unit says, and the unit's claim that Arfken's
    matrix is the passive one with the minus signs off the diagonal is correct.
  - arfken-2013 p. 865: Eq. (17.74) $\operatorname{diag}(1,-1,-1,-1)$ with the "either choice of signs is
    valid ... if used consistently" warning; and "Since for a pure boost these matrices are symmetric",
    reinforced by the Note to Exercise 17.8.2 on the same page, "All single boosts (in any spatial
    direction) have symmetric transformation matrices". Supports both places the unit cites p. 865.
  - arfken-2013 pp. 866-867: Eqs. (17.77)-(17.79) with the field tensor as the unit describes it
    ($\mathbf{E}$ in the time row, $c\mathbf{B}$ in the spatial block, overall $\varepsilon_0$ that the
    unit silently drops, harmlessly), Eq. (17.80) boost matrix, Eq. (17.81) $F'=UFU$, and Eqs.
    (17.82)-(17.83) reproduced in the unit exactly as printed, including the parenthetical that $v$ is the
    velocity of the transformed coordinate system relative to the original. Correct.
  - Frontmatter `pages` fields "706-707, 940-943" and "862-868" all exist and treat these topics; the
    only page the unit needs and does not list is 974-975 (finding 2).

- Provenance: no `resembles` warning was raised, and I compared the closest candidates by hand. The
  definition block against Hassani p. 706 and Arfken p. 865: the unit's prose is its own, and the shared
  material is the formula and the footnote's content, not sentence structure. The Parts 1-2 proof against
  Hassani pp. 940-941: Hassani states Eqs. (29.38)-(29.40) and the dichotomy in three sentences and
  proves none of it; steps 3 and 4 (Cauchy-Schwarz multiplicativity, the four cosets via the first
  isomorphism theorem, the clopen argument) are not in the book at all, so the block is genuinely
  rewritten and `adapted` understates rather than overstates the debt. The Part 4 proof against p. 943:
  the derivation by contracting the index and pairing eight terms is ours; Hassani just asserts (29.42).
  The application block is `original` and carries `:cite` tags, which matches the published convention in
  this chapter (group.so3-su2, group.clebsch-gordan, group.wigner-d-matrices, group.angular-momentum all
  do the same), and the Arfken equations it reproduces are displayed formulas introduced as "As printed
  they read" with a locator, so I do not count that as a paraphrase problem. The two blocks I do fault are
  findings 1 and 2, where `adapted` points at pages that do not carry the content.

- Style: idea block present and describes the proofs that follow; no "clearly"/"obviously"/"easy to see";
  all five proofs end in $\square$; a dedicated "Where the hypotheses are used" remark that names the
  signature, both discrete signs, orthochronicity in part 3, and finite-dimensionality in the
  no-unitary-representations argument; a method block with a numbered recipe; a worked example ending in
  checkable numbers; an application. No exercises. Block order is definition, definition, statement,
  idea, proof x4, remark, method, example, application, note.
