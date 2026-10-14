VERDICT: PASS
UNIT: geom.pseudotensors
VERIFIER: B

## Findings
1. [minor] proof, step 1 (line 77) vs step 2 (line 83) and remark (line 103): the unit says three
   different things about where orthogonality is used. Step 1: "Orthogonality is used here, and only
   here"; step 2: "Now use orthogonality in its second role"; the remark: "used twice in step 2 and
   nowhere else in step 1". The two roles listed in the remark are right ($|L|^2=1$ and
   $L_{jq}L_{jm}=\delta_{qm}$), but the first of them is used in step 1, not step 2, and step 1's
   "only here" contradicts step 2. The mathematics is unaffected. Fix: say that orthogonality is used
   once in step 1 (as $|L|^2=1$) and once in step 2 (as $L_{jq}L_{jm}=\delta_{qm}$), and drop "and
   only here" from step 1.
2. [minor] remark "Where the hypotheses are used" (line 104): "Statements 1, 2 and 4 generalise to
   $n$ indices without change" is loose for statement 2. In $n$ dimensions the contraction
   $\epsilon_{i j_1\cdots j_{n-1}}b^{(1)}_{j_1}\cdots b^{(n-1)}_{j_{n-1}}$ needs $n-1$ vectors, not
   two, so statement 2 generalises in form but not literally "without change". Statements 1 and 4 and
   $(\ast)$ do carry over verbatim. Fix: add "with $n-1$ vectors in place of two" to the clause about
   statement 2.
3. [minor] definition "Relative tensors and their weights" (line 46): the unit writes that RHB "note
   that a Cartesian pseudotensor, where $J=\pm1$, satisfies both of the last two descriptions at
   once". RHB p. 964 state the converse: relative tensors of weight $w=-1$ and $w=+1$ would both
   satisfy definition (26.39) of a Cartesian pseudotensor. Since $(1/J)^{\pm1}=\pm1=|L|$ the two
   readings coincide in the Cartesian case, so nothing is wrong, but the attribution is not what the
   page says. Fix: state it in the book's direction.

## Checked
- Counterexample search: tested the pseudotensor law of statement 1 against the plain tensor law for
  $L=\operatorname{diag}(1,1,-1)$, for $L=-R_{z}(\pi/2)$, and for 200 random $O(3)$ matrices of both
  determinants (numpy QR with sign fixing); $L_{ip}L_{jq}L_{kr}\epsilon_{pqr}=(\det L)\epsilon_{ijk}$
  held to $10^{-14}$ in every case, and the plain law failed on every improper one. Checked the
  dimension claim in the remark: $\tfrac12 n(n-1)=n$ only at $n=3$ (and the degenerate $n=0$).
  Checked that identity $(\ast)$ needs no orthogonality by running it on 200 random non-orthogonal
  $3\times3$ matrices. Tested the $\epsilon$–$\delta$ contraction and
  $\epsilon_{ijk}\epsilon_{ijk}=6$ by enumeration.
- Calculations: $b\times c=(-3,6,-3)$ (unit: same). In the reflected frame $a'=(3,-6,-3)$; the tensor
  law gives $(-3,6,3)$, wrong in all three entries as claimed, and the pseudotensor law gives
  $(3,-6,-3)$. With $M=-R_z(\pi/2)$: $Mb=(2,-1,-3)$, $Mc=(5,-4,-6)$, $Mb\times Mc=(-6,-3,-3)$ and
  $|M|Ma=(-6,-3,-3)$ — both as printed. Triple product $s=-6$, equal to
  $\det[b;c;d]=-6$; $s'=+6$. Dual matrix: I recomputed $A_{ij}=\epsilon_{ijk}a_k$ and got exactly the
  printed $\begin{pmatrix}0&-3&-6\\3&0&-3\\6&3&0\end{pmatrix}$, with
  $\tfrac12\epsilon_{ijk}A_{jk}=(-3,6,-3)=a$. Hat-map sign in the application: for a random
  $\omega$, $\Omega_{ik}=\epsilon_{ijk}\omega_j$ is antisymmetric, satisfies $\Omega v=\omega\times v$,
  and $\tfrac12\epsilon_{ijk}\Omega_{jk}=-\omega$ — the minus sign the unit warns about is right.
  General-coordinate check: for the chart $x=u$, $y=uv$, $z=w$ the sibling unit
  geom.tensor-operators-general-coordinates gives $g=u^2$, $\sqrt g=u$ and
  $e_u\cdot(e_v\times e_w)=u$, so $\varepsilon_{123}=2$, $\varepsilon^{123}=\tfrac12$ at $u=2$ as
  printed. Centrosymmetry arithmetic: $|{-I}|=-1$, so a true tensor of order $n$ picks up $(-1)^n$ and
  a pseudotensor $(-1)^{n+1}$, giving exactly the odd-true / even-pseudo vanishing the unit states.
- Citations: rhb-2006 pp. 946–949 (§26.10) — improper rotation defined by $|L|=-1$, inversion
  $x_i'=-x_i$ with $L_{ij}=-\delta_{ij}$, general law (26.39) with the factor $|L|$, the worked example
  deriving $a_i=\epsilon_{ijk}b_jc_k$ as a pseudovector, the broken-line figure 26.2, the
  temperature/density/velocity/magnetic-field/angular-momentum sentence, the active/passive paragraph
  and the polar/axial definitions: all present and as attributed. The $\beta$-decay footnote is on
  p. 949 and matches the unit's report of it, including $J_N\cdot p_e$ and the polarised nuclei.
  pp. 949–950 (§26.11) — (26.40) $p_i=\tfrac12\epsilon_{ijk}A_{jk}$, the matrix with
  $(p_1,p_2,p_3)=(A_{23},A_{31},A_{12})$, the worked inverse $A_{ij}=\epsilon_{ijk}p_k$ via (26.30),
  and (26.41) $s=\tfrac1{3!}\epsilon_{ijk}A_{ijk}$ with $A_{ijk}=s\epsilon_{ijk}$: all match. p. 950
  (§26.12) — (26.42) gives $I_{il}=\sum_\alpha m^{(\alpha)}(r_{(\alpha)}^2\delta_{il}-x_i x_l)$, as the
  application quotes. pp. 963–965 (§26.17) — $J=|\partial u'/\partial u|$ and
  $|\partial u/\partial u'|=1/J$, the weight-$w$ law (26.74) with factor
  $|\partial u/\partial u'|^w$, absolute / general pseudotensor / tensor density for $w=0,-1,+1$,
  the worked example $g'=|U|^2g$ giving $g$ weight 2, $\epsilon_{ijk}$ weight $-1$ and
  $\epsilon^{ijk}$ weight $+1$, and weights adding under outer product and contraction: all match.
  arfken-2013 pp. 215–218 (§4.2) — (4.26) $A'=\det(S)SA$ verbatim as the unit reports it, (4.27) the
  sign rule $T\otimes T=P\otimes P=T$, $T\otimes P=P\otimes T=P$, Example 4.2.1 with (4.28)–(4.30)
  establishing $\epsilon$ as an isotropic rank-3 pseudotensor, (4.31)–(4.33) the dual and its cyclic
  components, (4.34)–(4.36) the triple product as a dual, and Exercises 4.2.2 (p. 217), 4.2.5 and
  4.2.7 (p. 218): every locator correct. No page or equation number in the frontmatter or any `src`
  was wrong.
- Provenance: the two `adapted` blocks I compared most closely are proof step 2 against the worked
  example on rhb-2006 p. 948, and proof step 3 against the worked example on rhb-2006 p. 950. Both
  follow the same route as the book — they are cited for it — but the index letters, the sentence
  structure and the connecting prose are ours, and in step 2 the unit adds the explicit "orthogonality
  in its second role" gloss that the book does not have. Step 0 (the determinant identity) is a
  different and more careful argument than Arfken (4.29)–(4.30), which waves at permuted rows. The
  polar/axial remark is a genuine restructuring of pp. 947–949 with its own framing of the
  passive/active split; nothing exceeds a few words of overlap. `npm run check` produced no
  "resembles" line for this unit. The `original` blocks (idea, hypotheses remark, example,
  application) are not following any book I could find in the cited pages: the reflection example,
  the fan-chart check, the hat-map sign discussion and the crystal-symmetry argument are ours, and I
  verified each above. I also note that RHB p. 948 calls magnetic field strength and angular momentum
  plain vectors; the unit reports that faithfully and then resolves it explicitly in the polar/axial
  remark, so it is not a discrepancy worth filing.
- Automated: `node tools/check/index.mjs --record` gave no FAIL line for this unit; its only warnings
  are map-ordering warnings for other units and the global "17 planned units not written yet".
