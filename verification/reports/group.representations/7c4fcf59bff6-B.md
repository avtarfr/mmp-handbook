VERDICT: PASS
UNIT: group.representations
VERIFIER: B

## Findings
1. [minor] definition "Invariant subspace, reducibility, irreducibility" (lines 59-63): the multiplicity
   expansion and the sentence "Hassani writes $\rho$ for the number of inequivalent irreducible
   representations" come from Hassani p. 731 (Eq. (24.4)), but this block's `src` lists Hassani only at
   p. 729; p. 731 appears in the frontmatter `loc` but not in the block locator. There is also a quiet
   convention choice here: Hassani's $m_\alpha$ are "positive integers", so his $\rho$ counts the
   inequivalent irreps that actually occur, whereas our display allows $m_\lambda \ge 0$ with $\rho$
   counting all inequivalent irreps of $G$ -- that is Riley, Hobson and Bence's Eq. (29.11) reading
   ("may appear any number of times, or not at all", p. 1087). Nothing is wrong, but the source of the
   $\ge 0$ convention is not stated. Fix: add "Eq. (24.4), p. 731" to the block `src` and attribute the
   $m_\lambda \ge 0$ form to rhb-2006 Eq. (29.11), p. 1087.
2. [minor] definition "Invariant subspace, reducibility, irreducibility" (line 57) and remark (lines
   139, 149): the word **indecomposable** is used four times and carries real weight ("reducible but
   indecomposable" is the whole point of the two counterexamples), but it is never defined. The
   frontmatter claims Dummit and Foote's definition of it (p. 847, definition (2)) among the sources.
   Fix: add a bullet "$T$ is **indecomposable** if it is not decomposable" to the list at lines 53-55.
3. [minor] remark (line 147), block is `original`: the field-dependence paragraph follows Dummit and
   Foote's Example 4, p. 848 fairly closely in both point and phrasing -- their "a rotation by
   $2\pi/n$ radians sends no line in $\mathbb{R}^2$ to itself" against our "a rotation by $2\pi/3$
   fixes no line in $\mathbb{R}^2$", and their closing "an irreducible representation over a field $F$
   may become reducible when the field is extended" against our heading. The group is different
   ($C_3$ here, $D_{2n}$ and $Q_8$ there) and the rest of the block is clearly ours, so I do not read
   this as mislabelled provenance, but a citation would be more honest. Fix: add
   `:cite{work=dummit-foote-2004 loc="§18.1, Example 4, p. 848"}` to that paragraph.
4. [minor] remark (line 149): "neither example is unitarizable" is loose for the second example --
   there is no inner product on $\mathbb{F}_p^2$, so "unitarizable" is undefined there. The intended
   claim (no non-degenerate invariant symmetric bilinear form) is true for odd $p$: $D^{\mathsf T} B D
   = B$ with $B = \begin{psmallmatrix} a & b \\ b & c\end{psmallmatrix}$ forces $a = 0$ and $2b = 0$,
   hence $b = 0$ and $B$ degenerate; for $p = 2$ a non-degenerate invariant form does exist, but
   $\operatorname{span}\{e_1\}$ is isotropic for it, so the complement argument still fails. Fix:
   restrict the parenthetical to the $\mathbb{Z}$ example, or say "neither example carries a
   non-degenerate invariant form that splits off $U$".
5. [minor] frontmatter summary (line 6): "splits into a direct sum of irreducible pieces, which is
   Maschke's theorem" attaches the name to complete reducibility, which the statement block (part 4,
   after Dummit and Foote's Cor. 2, p. 851) carefully distinguishes from Maschke's theorem (part 3,
   their Thm 1, p. 849). Not a contradiction, but the summary blurs a distinction the unit then spends
   a paragraph making. Fix: "...can be made unitary, and Maschke's theorem then splits it into a direct
   sum of irreducible pieces."
6. [source] hassani-2013, Def. 24.2.1, p. 729: the definition of "reducible" asks only for subspaces
   $U, W$ with $H = U \oplus W$ and both invariant, without requiring them non-zero; read literally
   $U = H$, $W = \{0\}$ always qualifies and no representation is irreducible. Our line 57 reports his
   wording faithfully and our own definition (line 55) does require both summands non-zero, so nothing
   in the unit is wrong. Recorded with `tools/discrepancy.mjs`.

## Checked
- Automated: `node tools/check/index.mjs --record group.representations` -> `ok group.representations`,
  no FAIL line and no warn line naming this unit (the 98-100 warnings are map-level and other parts).
  `npm run check -- group.representations` produced no `resembles` warning.
- Counterexample search (statement as written):
  - Part 1, $V = \{0\}$ and degree-1 cases: vacuous/trivially true. Constructed a non-unitary degree-2
    real representation of $C_4$, $T_k = A R^k A^{-1}$ with $A = \begin{psmallmatrix}1&2\\0&3
    \end{psmallmatrix}$; the averaged Gram matrix $\sum_g T_g^{\mathsf T} T_g =
    \begin{psmallmatrix}28 & -18.667\\ -18.667 & 15.556\end{psmallmatrix}$ satisfies
    $T_g^{\mathsf T} G T_g = G$ to $1.8\times10^{-14}$, and after the Cholesky/Gram-Schmidt change of
    basis all four matrices are orthogonal to $2\times10^{-15}$. Part 1 and its proof route hold.
  - Part 2 with $W$ not closed / $V$ infinite-dimensional would break $V = W \oplus W^\perp$, but
    line 39 fixes $\dim V < \infty$ before the statement, so the statement as written is safe.
  - Part 3 with $\operatorname{char} F \mid |G|$: the unit's own $\mathbb{F}_p$ example is the sharp
    counterexample; I confirmed $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ has order exactly
    $5$ mod $5$, that $D(g)^k = \begin{psmallmatrix}1&k\\0&1\end{psmallmatrix}$ ($k=3$ gives
    $\begin{psmallmatrix}1&3\\0&1\end{psmallmatrix}$), and by exhaustion over all $20$ lines
    $\operatorname{span}\{(a,b)\}$ with $b \neq 0$ in $\mathbb{F}_5^2$ that **none** is invariant, so
    $\operatorname{span}\{e_1\}$ has no invariant complement.
  - Part 3 with $G$ infinite: checked $T_mT_{m'} = T_{m+m'}$ for the unipotent $\mathbb{Z}$-rep and
    that $T_1(a,b) = (a+b,b)$ is never parallel to $(a,b)$ for $b \neq 0$ (tested $(1,1),(0,1),(2,-3),
    (1,5)$, and the general determinant $-b^2 \neq 0$). Both hypotheses are used and both are sharp.
  - Part 4 edge cases $V=\{0\}$ and $T$ irreducible are handled explicitly in the proof.
  - Terminology claim at line 57 ("the second formulation is strictly weaker than the first"):
    decomposable $\Rightarrow$ reducible always, and the converse needs part 3, so the direction is
    right; the $\mathbb{Z}$ and $\mathbb{F}_p$ examples realise the gap.
- Calculations (sympy, exact):
  - $D(\tau) = \begin{psmallmatrix}0&0&1\\1&0&0\\0&1&0\end{psmallmatrix}$ and
    $D(\sigma) = \begin{psmallmatrix}0&1&0\\1&0&0\\0&0&1\end{psmallmatrix}$ -- both reproduced exactly
    from $T_\sigma e_j = e_{\sigma(j)}$ with $\tau = (1\,2\,3)$, $\sigma = (1\,2)$.
  - $S = (u\ f_1\ f_2)$ with $u = (1,1,1)/\sqrt3$, $f_1 = (1,-1,0)/\sqrt2$, $f_2 = (1,1,-2)/\sqrt6$ is
    orthogonal ($S^{\mathsf T}S = I$ exactly).
  - $S^{\mathsf T} D(\tau) S = \begin{psmallmatrix}1&0&0\\0&-1/2&-\sqrt3/2\\0&\sqrt3/2&-1/2
    \end{psmallmatrix}$ and $S^{\mathsf T} D(\sigma) S = \operatorname{diag}(1,-1,1)$ -- both exactly
    as printed in the unit.
  - The unit's checkable number: the $(2,3)$ entry is $-\sqrt3/2 = -0.8660254038$, matching the unit's
    $-0.8660254\ldots$; I also reproduced its hand route, $D(\tau)f_2 = (-2,1,1)/\sqrt6$ and
    $f_1^{\mathsf T} D(\tau) f_2 = -3/\sqrt{12} = -\sqrt3/2$.
  - Intermediate expansions verified: $e_2-e_3 = -\tfrac12(e_1-e_2) + \tfrac12(e_1+e_2-2e_3)$ and
    $e_2+e_3-2e_1 = -\tfrac32(e_1-e_2) - \tfrac12(e_1+e_2-2e_3)$, giving
    $T_\tau f_1 = -\tfrac12 f_1 + \tfrac{\sqrt3}{2} f_2$ and $T_\tau f_2 = -\tfrac{\sqrt3}{2}f_1
    - \tfrac12 f_2$, and $T_\sigma f_1 = -f_1$, $T_\sigma f_2 = f_2$.
  - $\hat D(\tau)$ equals the $120^\circ$ rotation matrix exactly, $\hat D(\tau)^3 = I$,
    $\hat D(\sigma)^2 = I$.
  - All six $S^{\mathsf T}D(g)S$ are block diagonal $1 \oplus \hat D(g)$ (checked over all six
    permutations), so "for every $g$" in the example is true, not only for the two generators.
  - $C_3$ rotation matrix eigenvalues come out $-\tfrac12 \pm \tfrac{\sqrt3}{2}i = \omega, \omega^2$
    with $\omega = e^{2\pi i/3}$, as the remark claims.
  - Proof-internal identity at line 98 recomputed by hand with the first-slot-linear convention of
    line 39: $(D'^\dagger D')_{jk} = \sum_i \overline{D'_{ij}}D'_{ik} = \langle T_gv_k, T_gv_j\rangle$.
    Correct.
- Citations:
  - hassani-2013 p. 726: Def. 24.1.1 (representation, faithful, carrier space, dimension) and
    Def. 24.1.2 (equivalence) are there and say what the two definition blocks attribute to them.
    Hassani's name for the degree-1 trivial map is "identity representation"; the unit's "trivial
    representation" is Dummit and Foote's word and that source is co-cited, so no infidelity.
  - hassani-2013 p. 729: Def. 24.2.1 present and reported correctly (see finding 6).
  - hassani-2013 p. 730: Box 24.2.4 and Thm 24.2.5 ("Every representation of a finite group $G$ is
    equivalent to some unitary representation") present; supports part 1. His proof runs through
    $\mathsf T = \sum_x T_x^\dagger T_x$ and $S = \sqrt{\mathsf T}$ rather than our Gram-Schmidt, but
    that is the same averaging idea in operator form, which is what the frontmatter `role` claims, and
    the block is `adapted`.
  - hassani-2013 p. 731: Thm 24.2.6 (orthogonal complement of an invariant subspace is invariant) and
    Eqs. (24.3)-(24.4) present; supports part 2 and the multiplicity notation.
  - dummit-foote-2004 p. 840: the linear/matrix representation definition, degree, faithfulness --
    matches.
  - dummit-foote-2004 p. 847: definitions (1)-(3) of irreducible, reducible, indecomposable,
    decomposable, completely reducible -- matches the unit's list word for word in content.
  - dummit-foote-2004 p. 848: block upper-triangular form for a reducible representation and block
    diagonal for a decomposable one -- matches line 59.
  - dummit-foote-2004 p. 849: the $\mathbb{F}_p$ Jordan-block example ($g\cdot v = v$,
    $g \cdot w = v+w$, matrix $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$, reducible but
    indecomposable) is exactly the one the remark cites, and Thm 1 (Maschke) with its
    characteristic hypothesis begins on the same page -- locator correct.
  - dummit-foote-2004 pp. 849-851: the averaged-projection proof ($\pi_0$ from a vector-space
    complement, $\pi = n^{-1}\sum_g g\pi_0 g^{-1}$, $W = \ker\pi$, $U \cap W = 0$, $U + W = V$) matches
    our part 3 proof route; Cor. 2 (complete reducibility) and Cor. 3 (block diagonal, irreducible
    blocks) on p. 851 match part 4.
  - rhb-2006 p. 1084: Eq. (29.5) $D_Q(X) = Q^{-1}D(X)Q$ for equivalent representations -- matches the
    equivalence block.
  - rhb-2006 p. 1086: the standing "from now on we will consider only unitary representations" is the
    last sentence before §29.4 opens, exactly as line 57 describes, and the block-diagonal definition
    of "reducible" follows it -- locator correct.
  - rhb-2006 pp. 1087-1088: Eq. (29.11) with "may appear any number of times, or not at all", and the
    second, invariant-subspace formulation with the unitary orthogonal-complement remark -- both as
    described.
  - rhb-2006 p. 1090: Eq. (29.12). Our $\hat D(\tau)$ is their $M_B$ and our $\hat D(\sigma)$ is their
    $M_C$, exactly (verified symbolically), so "up to a choice of basis" is more cautious than needed
    but true.
  - arfken-2013 p. 828: "they all commute with a Hamiltonian ... $HR = RH$" supports $HT_g = T_gH$;
    Example 17.3.1 is the $C_s$ parity group with $A_1, A_2$ and the explicit statement that nothing
    requires even and odd states to be degenerate -- supports the application's parity sentence.
  - arfken-2013 p. 829: Example 17.3.2, three orbitals on a triangle, with
    $\psi_1 = (\varphi_1-\varphi_3)/\sqrt2$ and $\psi_2 = (-\varphi_1+2\varphi_2-\varphi_3)/\sqrt6$ --
    the $1/\sqrt2$ and $1/\sqrt6$ claim is right (the index placement differs, which the unit's "the
    same ... coefficients" does not overstate).
  - arfken-2013 p. 830: dipole moment and "expectation values will vanish unless the integrals ... have
    integrands with a fully symmetric part" supports the selection-rule sentence.
  - All eleven `:ref` targets exist as files; all nine `prereqs` exist; the map-order check raised no
    warning for this unit.
- Provenance:
  - Closest passage compared: part 3 of the proof against Dummit and Foote pp. 849-851. The route is
    theirs and the block is correctly `adapted`. The text is genuinely restructured -- they prove
    $V = U \oplus \ker\pi$ first and build $\pi$ second, we build $\pi$ first; we make the
    $g \mapsto h^{-1}g$ bijection explicit and mark the one step that uses the characteristic, which
    they do not. No sentence-by-sentence tracking; no `resembles` warning.
  - Part 1 of the proof against Hassani p. 730: different presentation (averaged inner product plus
    Gram-Schmidt versus positive operator plus square root), so no paraphrase risk.
  - Part 2 against Hassani's Thm 24.2.6 proof: same three-line argument, but it is forced by the
    statement and is two sentences long; wording is ours.
  - `idea` block labelled `original`: it names "average over the group", which is also Dummit and
    Foote's stated key idea (p. 850), but the four-part synthesis, the "translating by $h$ only
    relabels the summands" framing and the reading of part 2 as "the averaging already done" are ours.
    I judge `original` acceptable.
  - `remark` block labelled `original`: the $\mathbb{Z}$ example, the terminology discussion and the
    uniqueness paragraph are ours; the $\mathbb{F}_p$ example is cited inline to Dummit and Foote; only
    the field-dependence sentence tracks their p. 848 (finding 3, minor).
  - `method`, `example` and `application` blocks labelled `original`: the $S_3$ permutation
    representation is a standard object but the chosen basis, the hand computation and the checkable
    $(2,3)$ entry are ours, and the two places where the content coincides with a book (rhb Eq. (29.12),
    arfken Example 17.3.2) are both cited inline.
- Style guide: idea block precedes the proof; no "clearly", "obviously", "easy to see" or "trivially";
  one fully worked example ending in the checkable number $-\sqrt3/2 = -0.8660254\ldots$; a dedicated
  remark naming where $G$ finite and $\operatorname{char} F \nmid |G|$ are used, each with a sharp
  counterexample; no exercises. Block order definition / statement / idea / proof / remark / method /
  example / application is as required.
