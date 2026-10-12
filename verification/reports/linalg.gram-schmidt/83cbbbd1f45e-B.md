VERDICT: PASS
UNIT: linalg.gram-schmidt
VERIFIER: B

## Findings

1. [minor] note "What is ours in that statement" (line 71): the sentence attributes to "the
   treatments in Kreyszig and Hassani, each of which gives the construction with its nested spans
   and, in finite dimensions, the existence of an orthonormal basis". Kreyszig does state the
   nested-span property (p. 157, immediately before the 1st step). Hassani does not: §2.2.2
   (pp. 33–35) gives the recursion (2.13) and the closing remark that at each stage one takes
   linear combinations of the original vectors, which is our "each $q_k$ is a linear combination of
   $a_1,\dots,a_k$ alone" but not the span equality. Neither book states existence of an
   orthonormal basis as a result; only Lee's Prop. B.40 does, and only there is it stated "in
   finite dimensions". The `src` attributions on the statement block itself are accurate
   (hassani-2013 is credited with "(existence)" only), so nothing mathematical rests on this; the
   over-attribution is conservative, crediting the books rather than us. Fix: restrict the clause,
   e.g. "...Lee's Proposition B.40 and Exercise B.41, which state both; Kreyszig also states the
   nested spans (p. 157); Hassani gives the construction and the observation that each stage uses
   only linear combinations of the original vectors."

2. [minor] definition "Orthonormal sets and bases" (lines 40, 53): the block is `adapted` with
   `src` to kreyszig-1978 p. 152, hassani-2013 p. 32 and lee-2013 p. 636, but the last paragraph —
   upper triangular of any shape, $Q^{*}Q = I_n$, unitary and orthogonal — is not treated on any of
   those three pages (all three treat only orthogonal/orthonormal families of vectors). The
   definitions are standard and correct, so nothing is wrong; the citation simply does not reach
   that paragraph. Fix: cite a source that defines these matrix classes, or split the paragraph out
   as `original`.

3. [minor] block order (line 265): `docs/STYLE_GUIDE.md` puts the "where the hypotheses are used"
   `remark` at position 5, before `method` (6). Here the remark follows the method and two notes.
   Pre-existing from the concept phase and harmless; noted only for completeness.

## Checked

- **Automated checks.** `node tools/check/index.mjs --record linalg.gram-schmidt` → `ok
  linalg.gram-schmidt`, no FAIL line. The 18 warnings are all about other files (prerequisites
  ordered after their unit in the map, in complex/, found/, linalg.determinants, vcalc/) plus
  "277 planned unit(s) not written yet"; none names this unit. `npm run check -- linalg.gram-schmidt`
  produced no `resembles` line, so no overlap passage needed hand comparison.

- **Counterexample search.** 400 random cases with $2\le m\le 6$, $1\le n\le m$, complex Gaussian
  full-rank $A$, running the method exactly as written in the `method` block with the handbook's
  convention $R_{ik}=(a_k,q_i)$: checked $Q^{*}Q=I_n$, $QR=A$, $R_{ik}=0$ for $i>k$, each $R_{kk}$
  real and $>0$, each $(a_k,q_k)$ real and $>0$ (the normalisation of statement part 2), and
  $\dim\operatorname{span}\{q_1,\dots,q_k\}=\dim\operatorname{span}\{a_1,\dots,a_k\}=k$ with the
  two spans equal (rank of the stacked $m\times 2k$ matrix $=k$) for every $k$. Maximum residual
  over all 400 cases: $8.98\times10^{-15}$. No case broke any clause.
  Edge cases tried by hand: $n=1$; the empty orthonormal basis $k=0$ for $W=\{0\}$ in part 3;
  $a_1=0$ (excluded exactly by linear independence, as the Start paragraph says); the degenerate
  equality case $x\in\operatorname{span}\{e_1,\dots,e_N\}$ of the Bessel relation; and the empty
  family in part 1 of the expansion statement (vacuously independent).
  "Neither holds in a basis that is not orthonormal" (line 142) is right, not merely suggestive:
  $\sum_i(x,e_i)e_i=x$ for all $x$ forces $(e_j,e_i)=\delta_{ij}$ by expanding $x=e_j$ and using
  uniqueness of coordinates, and $\lVert x\rVert^2=\sum_i\lvert(x,e_i)\rvert^2$ for all $x$ makes
  the analysis map an isometry, hence unitary.
  The non-uniqueness of the wide form (part 3) checked on the two instances the proof gives:
  $A=(0)$ with $Q=(\pm1)$, $R=(0)$; and $A=\operatorname{diag}(1,0)$ with $Q=I_2$ and
  $Q=\operatorname{diag}(1,-1)$, $R=A$ — both verified, residual $0$. Also verified on a
  rank-deficient $3\times2$ that $(QD,D^{*}R)$ reproduces $A$ for $D=\operatorname{diag}(1,-1,1)$.

- **Calculations.**
  - Example "QR of a four-point sampling matrix", recomputed from scratch in sympy, exact
    arithmetic: $R=\begin{pmatrix}2&5&15\\0&\sqrt5&5\sqrt5\\0&0&2\end{pmatrix}$ — matches
    $R_{11}=2$, $R_{12}=5$, $R_{13}=15$, $R_{22}=\sqrt5$, $R_{23}=5\sqrt5$, $R_{33}=2$.
    $q_1=\tfrac12(1,1,1,1)$, $q_2=\tfrac{1}{2\sqrt5}(-3,-1,1,3)$, $q_3=\tfrac12(1,-1,-1,1)$: each
    agrees with the text to the exact zero vector. Intermediate displays verified individually:
    $\tilde q_2=\tfrac12(-3,-1,1,3)$, $5\sqrt5\,q_2=\tfrac52(-3,-1,1,3)$,
    $\tilde q_3=(1,-1,-1,1)$. $Q^{\mathsf T}Q=I_3$ and $QR-A=0$ exactly. The three stated pairings
    $\frac{-3-1+1+3}{4\sqrt5}$, $\frac{1-1-1+1}{4}$, $\frac{-3+1-1+3}{4\sqrt5}$ are each $0$.
    $A^{\mathsf T}A=\begin{pmatrix}4&10&30\\10&30&100\\30&100&354\end{pmatrix}$ as printed, and
    $\det(A^{\mathsf T}A)=80=(2\cdot\sqrt5\cdot2)^2=(\det R)^2$.
    The polynomial identification is exact: $\tfrac12$, $\frac{2t-5}{2\sqrt5}$,
    $\frac{t^2-5t+5}{2}$ evaluated at $t=1,2,3,4$ reproduce the three columns of $Q$ to zero
    residual; degrees $0,1,2$ with leading coefficients $\tfrac12$, $\tfrac1{\sqrt5}$, $\tfrac12$,
    all positive as claimed.
  - Application, Chebyshev weight. $\int_{-1}^{1}x^n(1-x^2)^{-1/2}dx$ for $n=0,\dots,6$ computed
    symbolically: $\pi,\,0,\,\pi/2,\,0,\,3\pi/8,\,0,\,5\pi/16$ — exactly the printed moments, and
    the substitution $x=\cos\theta$ giving $\int_0^{\pi}\cos^n\theta\,d\theta$ is right.
    $(x^2,q_0)=\sqrt{\pi}/2$ ✓; $\lVert x^2-\tfrac12\rVert^2=\pi/8$ ✓;
    $(x^3,q_1)=3\sqrt{2\pi}/8$ ✓; $\lVert x^3-\tfrac34x\rVert^2=\pi/32$ ✓. The Gram matrix of
    $q_0=1/\sqrt{\pi}$, $q_1=\sqrt{2/\pi}\,x$, $q_2=\sqrt{2/\pi}(2x^2-1)$,
    $q_3=\sqrt{2/\pi}(4x^3-3x)$ in that weight is exactly $I_4$, and $q_n/T_n$ is $1/\sqrt{\pi}$
    for $n=0$ and $\sqrt{2/\pi}$ for $n=1,2,3$, as the text states.
    The Legendre normalisation quoted from Arfken checks out: $\int_{-1}^1P_n^2=2/(2n+1)$ for
    $n=0,\dots,3$, so the unit-norm multiple is $\sqrt{(2n+1)/2}\,P_n$.
  - Application, overlap matrix. With the handbook's convention, $S_{ij}=(\phi_j,\phi_i)=
    \sum_l\overline{A_{li}}A_{lj}=(A^{*}A)_{ij}$, so $S=A^{*}A$ and $A=QR$ gives $S=R^{*}R$ with
    $R$ upper triangular and positive on the diagonal: the Cholesky claim is correct.

- **Citations.** Every cited page opened with `tools/corpus/pages.mjs`; all exist and treat the
  topic, and every locator is right.
  - kreyszig-1978 152–158: Def. 3.4-1 with eqs. (1)–(2) and the Kronecker delta on p. 152 ✓;
    Pythagorean relation (3)–(4) spanning pp. 152–153 ✓; Lemma 3.4-2 "An orthonormal set is
    linearly independent" on p. 153 ✓; eqs. (6)–(11) (expansion, the splitting $x=y+z$, $z\perp y$,
    the norm identity) pp. 155–156 ✓; Thm 3.4-6 (Bessel inequality) and the naming of the Fourier
    coefficients on p. 157 ✓; the Gram-Schmidt process with its nested-span property stated on
    p. 157 and the general formulas (13)–(14) on p. 158 ✓ — exactly the equations the proof block
    cites.
  - lee-2013 636: Prop. B.40 "The Gram–Schmidt Algorithm", with the nested spans as eq. (B.12) and
    the recursion as eq. (B.13), and Exercise B.41 asking for the Hermitian case — all on p. 636 ✓.
    The proof there is indeed "by induction on $n=\dim V$", which is what the remark block asserts.
  - arfken-2013 269–273: §5.2 header and eqs. (5.33)–(5.39) on pp. 269–270 ✓; the order-dependence
    remark ("different results would have been obtained ... in a different order") at the foot of
    p. 270 ✓; Example 5.2.1 (Legendre) pp. 270–271 with eq. (5.41)
    $\varphi_n=\sqrt{(2n+1)/2}\,P_n$ on p. 271 ✓ — the exact formula the application quotes;
    "Orthonormalizing Physical Vectors" pp. 272–273 ✓. Arfken's product is $\langle f|g\rangle=
    \int f^{*}g$, conjugate-linear in the first slot, as the remark says.
  - hassani-2013 32–35: Def. 2.2.4 with eq. (2.11) and the Kronecker delta on p. 32 ✓; Example
    2.2.6 on p. 33 ✓; §2.2.2 opening on p. 33 and eq. (2.13) in projection-operator form
    $|e_i\rangle\langle e_i|$ on p. 35 ✓, together with "the process of Eq. (2.13) can continue for
    infinite-dimensions as well" and "at each stage ... one is taking linear combinations of the
    original vectors" — both of which the remark block reports correctly. His product
    $\langle x|y\rangle=\int w\,x^{*}y$ is conjugate-linear in the first slot ✓. The one
    over-reach is finding 1.
  - stakgold-holst-2011 277–278: eq. (4.6.2) $\alpha_i=(u,e_i)$ on p. 277 ✓; "Problem of Best
    Approximation" with eqs. (4.6.4)–(4.6.5) and the naming of the Fourier coefficients and Fourier
    sum on p. 278 ✓, (4.6.5) being the finite Bessel inequality as the role claims.
  - reed-simon-1980 37–38: Thm II.1 (Pythagorean theorem) stated on p. 37 in exactly the
    remainder form the unit's part 2 uses, with "Corollary (Bessel's inequality)" on p. 38 ✓.
  - rhb-2006 246–247: §8.1.3(iii) Bessel's inequality as eq. (8.21) on p. 246, continuing on
    p. 247 with "the equality holds if the sum includes all $N$ basis vectors" ✓ — precisely the
    inequality-plus-equality-condition form the remark attributes to them.
  - Cross-references: `linalg.inner-product-spaces`, `linalg.vector-spaces-bases`,
    `linalg.linear-systems`, `linalg.hermitian-spectral-theorem`, `linalg.projections-least-squares`
    and `linalg.matrix-norms-conditioning` are written; `num.linear-systems-numerics`,
    `funcan.orthonormal-bases` and `spec.orthogonal-polynomials-general` are planned in the map but
    not yet written, which the checker accepts. The note's claim that the extension clause is used
    "twice in the proof of the spectral theorem" is accurate: `linalg.hermitian-spectral-theorem`
    lines 81 and 131 both extend a given orthonormal list, and line 117 uses the existence clause.

- **Provenance.** Closest passages compared by hand:
  - `proof` of Gram-Schmidt (`adapted`, Kreyszig pp. 157–158 and Lee p. 636): neither source is
    tracked. Kreyszig gives no induction at all, only the formulas; Lee inducts on $\dim V$ and
    restricts to a hyperplane. The unit inducts on $k$ with its own four invariants (i)–(iv) and its
    own notation $\tilde q_k$, $R_{ik}$. Genuinely rewritten; if anything it is closer to `original`
    than to `adapted`, which is the safe direction.
  - `method` (`adapted`, Arfken pp. 269–270, Hassani pp. 33–35, Kreyszig pp. 157–158): different
    notation ($\tilde q_k$, $R_{ik}$ versus Arfken's $\psi_n,\varphi_n,a_{\mu,n}$, Hassani's
    $|e'_{m+1}\rangle$, Kreyszig's $v_n,e_n$), different structure (a numbered recipe carrying the
    $R$ entries so the output is the QR factorization, which none of the three does). Not a close
    paraphrase.
  - `definition` (`adapted`): the orthogonal/orthonormal-family sentence necessarily resembles
    Kreyszig's eq. (2) and Hassani's (2.11), since that is the minimal expression of the
    definition; wording and ordering differ and the overlap check raised nothing. Acceptable.
  - Blocks labelled `original` — the "What is ours" note, the three `idea` blocks, the QR
    statement and proof, the "Numerical behaviour" and "What it means" notes, the example and the
    application — do not follow any cited page. The QR statement and its Householder-style
    induction appear in none of the seven sources (none of them discusses QR at all), the example
    is the unit's own $4\times3$ Vandermonde, and the application's Chebyshev computation is
    deliberately a different weight from Arfken's Legendre example, which it cites where it
    mentions it. The `original` labels are right.
  - The `original` numerical note's unsourced claims are correct: classical Gram-Schmidt loses
    orthogonality like $\kappa(A)^2$ and modified like $\kappa(A)$, the modified form as written is
    algebraically the same recipe, and Householder builds $Q$ from exactly unitary factors.

- **Style.** Idea block immediately before each of the three proofs ✓. No "clearly", "obviously",
  "evidently" or "it is easy to see" anywhere in the file (grepped) ✓. One fully worked example
  with checkable numbers, as a method unit requires ✓. Hypotheses named at use: the proof states
  explicitly that linear independence is used exactly twice and where ✓. All three proofs end in
  $\square$ ✓. Only the block ordering of finding 3 departs from the guide.

- **Discrepancies.** None recorded: no place was found where the unit faithfully reports a source
  that I believe to be wrong.
