VERDICT: PASS
UNIT: funcan.spectral-theorem-general
VERIFIER: B

## Findings

1. [minor] :::remark[Where the hypotheses are used], Separability bullet (line 275): the
   counterexample is correct, but the closing sentence - "What survives without separability is
   the multiplication form over a measure space that is merely semifinite" - names a strictly
   weaker property than what the construction actually delivers, so "semifinite" is true but is
   not the sharp word. Run Steps 5-7 without the countability step: Zorn still gives a maximal
   orthogonal family of cyclic subspaces, now indexed by a possibly uncountable $I$, and Step 7
   still forms $(M,\mu) = \bigsqcup_{i \in I}(\mathbb{R},\mu_i)$ with every $\mu_i$ finite. A
   disjoint union of finite measure spaces is by definition *strictly localizable*
   (= *decomposable*), and strictly localizable $\Rightarrow$ localizable $\Rightarrow$
   semifinite, with both implications strict. The bullet's own example confirms the stronger
   word: counting measure on $[0,1]$ is a direct sum of unit point masses, hence strictly
   localizable, and it is $\sigma$-finiteness, not semifiniteness, that is the first thing lost.
   Fix: "... over a measure space that is no longer finite, nor even $\sigma$-finite, but is
   still a direct sum of finite measure spaces - strictly localizable, in the usual terminology -
   as counting measure on $[0,1]$ is." Nothing here is a false claim: the sentence asserts only
   that semifiniteness survives, which it does, and it asserts no converse.

2. [minor] Same bullet (line 275): "each $f^{-1}(t)$ would have to be an atom of positive
   measure" asks for more than the argument needs and more than the argument has just supplied in
   that clause. The displayed reason - that the $\lambda$-eigenspace of $T_f$ is
   $L^2(f^{-1}(\lambda),\mu)$ and the eigenspace is non-zero - gives $\mu(f^{-1}(t)) > 0$; atomicity
   follows only from the further fact, stated one clause earlier, that the eigenspace is
   *one*-dimensional. The step the conclusion actually uses is positivity, since uncountably many
   disjoint sets of positive measure already force $\mu(M) = \infty$ (for some $n$, uncountably
   many have measure $> 1/n$). Fix: "would have to have positive measure - indeed, since the
   eigenspace is one-dimensional, to be an atom".

3. [minor] :::proof[Part A in general...], Step 13 (line 221): "this is the one place where the
   domain condition of part A is used" is right if "place" means "one of the four properties of
   the calculus", and that is the natural local reading, but condition 1 is used twice more in
   the same proof: in Step 11, where the converse half ("let $\psi \in \mathcal{H}$ with
   $f\,U\psi \in L^2$ ...") is exactly condition 1, and in Step 14, where the inclusion
   $\{\psi : \int\lambda^2 d\mu_\psi < \infty\} \subseteq \mathcal{D}(A)$ needs it. Fix: "property
   3 is the only one of the four that touches the domain condition of part A".

Already recorded, not re-raised: the three entries for this unit in `verification/discrepancies.md`
(lines 274-276) cover the factor order in Reed and Simon's identification of $((A+i)^{-1})^{*}$ on
p. 261, their restriction of the two-vector identity of Thm VIII.6 to $\varphi \in \mathcal{D}(A)$,
and the unused finiteness hypothesis in their Proposition 1 (our Step 8). I confirmed all three by
hand against the pages and agree with them; no new `[source]` finding.

## Checked

**Automated.** `node tools/check/index.mjs --record funcan.spectral-theorem-general`: `ok`, no FAIL
line. Three warns, all judged benign:
- 8-word run with kreyszig-1978 p. 130, "the inner product is linear in the first". Kreyszig p. 130
  reads "the inner product is linear in the first factor"; our text is "the inner product
  $(\varphi,\psi)$ is linear in the first slot, as elsewhere in this handbook". This is the only
  way to state the convention in English and nothing around it resembles Kreyszig. Not a paraphrase.
- 9-word run with lee-2013 p. 376, "such that if and only if and for every". Function words only;
  no content is shared with a book this unit does not cite.
- "folland-1999 pp. 139-141, 212, 217 never mention spectr". Expected and correct: Folland is cited
  for Stone-Weierstrass, Riesz-Markov and Radon regularity, not for spectral theory. All four
  locators were opened and verified (below).

**Counterexample search (statement as written).**
- Part A converse ($T_f$ self-adjoint on a finite measure space, $f$ real a.e. finite): Step 8's
  argument never uses finiteness, so the converse is if anything stated under a stronger hypothesis
  than needed; no counterexample.
- Part A, "self-adjoint iff $f$ real a.e." as asserted in the definition block: the $\Leftarrow$ is
  Step 8; the $\Rightarrow$ is the third part of Step 11, and that argument needs $\chi_S \in L^2$
  for a positive-measure $S$ on which $f$ is bounded, which finiteness of $\mu$ supplies. Tried
  $f = i$ on a finite space (not self-adjoint, as the criterion predicts) and $f$ with $\operatorname{Im} f$
  supported on a null set (self-adjoint, consistent with "almost everywhere"). No counterexample.
- Part C uniqueness (Step 13a): tried to break it by removing property 3, which is the only link to
  $A$; without it the constant map $h \mapsto h(0)I$ satisfies 1, 2, 4, so the text's remark that
  properties 1, 2, 4 "mention $A$ nowhere" is exactly right and the proof correctly starts from 3.
  Checked the chain $\Phi(r)(A-i)\psi = \psi$: $|r h_n| \le |x|/\sqrt{x^2+1} \le 1$ and
  $rh_n \to x/(x-i)$ pointwise, $x/(x-i) - i/(x-i) = 1$; each step holds.
- Part D, extension to all $\varphi \in \mathcal{H}$: tested numerically on the momentum example
  with $\psi$ the normalised Gaussian and $\hat\varphi(k) = c(1+|k|)^{-1}$, $c = 2^{-1/2}$, which is a
  unit vector with $\int k^2|\hat\varphi|^2dk = \infty$, so $\varphi \notin \mathcal{D}(A)$ and
  polarisation is unavailable. Step 14's dominating measure gives
  $\int|\lambda|\,d\rho_{\psi\varphi} = \int|k||\hat\psi||\hat\varphi|\,dk = 0.5127364703566640727
  \le 0.7071067811865475 = \|A\psi\|\,\|\varphi\|$, so the integral converges absolutely exactly as
  claimed, and $\int\lambda\,d\nu_{\psi\varphi} = 0 = (A\psi,\varphi)$ by oddness. The estimate is a
  genuine proof and not a restatement of polarisation.
- Part D, "exactly one self-adjoint operator": injectivity is proved in Step 14 and does use the
  all-$\varphi$ version; surjectivity is honestly flagged as quoted (RS Thm VIII.6, p. 263).
- Remark, "$\mathcal{D}_h = \mathcal{H}$ iff $h$ is essentially bounded on the spectrum": checked both
  directions. $\Leftarrow$ is immediate. $\Rightarrow$: $\mathcal{D}_h = \mathcal{H}$ makes
  $T_{h \circ f}$ everywhere defined on $L^2(M,\mu)$ with $\mu$ finite, so $h \circ f \in L^\infty(\mu)$
  (split $\{n < |h\circ f| \le n+1\}$ and build $\varphi = \sum c_n\chi_{E_n}/\sqrt{\mu(E_n)}$ with
  $\sum|c_n|^2 < \infty$, $\sum n^2|c_n|^2 = \infty$); then $N = \{|h| > C\}$ has $f^{-1}(N)$ $\mu$-null,
  so $\mu_\psi(N) = 0$ for every $\psi$. The "iff" holds; no counterexample.
- The accompanying example ($h = 1$ off $\mathbb{Q}$, $h(p/q) = q$): $h$ is Borel, unbounded on
  $\sigma(A) = \mathbb{R}$, and $|h| = 1$ Lebesgue-a.e., so $\int|h|^2 d\mu_\psi = \|\psi\|^2$ for every
  $\psi$, since every $\mu_\psi = |\psi|^2 dx$ is absolutely continuous. Correct.
- Separability bullet counterexample, tested as written: on $\ell^2([0,1])$, $A e_t = t e_t$ is
  bounded and self-adjoint; its $t$-eigenspace is $\mathbb{C}e_t$, one-dimensional, for every
  $t \in [0,1]$; the $\lambda$-eigenspace of $T_f$ is $\{\varphi : \varphi = 0$ a.e. off
  $f^{-1}(\lambda)\} \cong L^2(f^{-1}(\lambda),\mu)$; uncountably many disjoint positive-measure sets
  force $\mu(M) = \infty$ by the $\mu > 1/n$ pigeonhole. The claim that dropping separability costs
  the finiteness of $\mu$ stands. It does not overclaim: it does not say separability is necessary
  for the theorem, only for the finiteness clause of part A. See finding 1 for the closing sentence.
- Step 2's parenthetical ("self-adjointness is sufficient, not necessary"): a unitary has norm and
  spectral radius $1$; correct, and consistent with RS Problem 3(a), p. 246, which gives
  $\|A\| = r(A)$ for all normal $A$.
- Remark, "the two conditions in part A are not interchangeable": restricting $T_f$ to a smaller
  dense domain gives a non-closed, hence spectrum-$\mathbb{C}$, operator when the restriction is a
  core, and a non-self-adjoint symmetric closure otherwise; "a different, usually much larger,
  spectrum" is correct and correctly hedged.
- Remark, self-adjointness bullet: the circle $T_\alpha = i\,d/dx$, $\phi(0) = \alpha\phi(1)$, has
  eigenvalues $\{\theta + 2\pi n\}$ for $\alpha = e^{i\theta}$, so the extensions really do have
  different spectra, as our text (not RS) asserts.
- Part E, "$\bigcap_n \mathcal{D}(A^n)$ is dense": $\psi_k = P_{[-k,k]}\psi$ has $\mu_{\psi_k}$
  supported in $[-k,k]$, so $\int\lambda^{2n}d\mu_{\psi_k} \le k^{2n}\|\psi\|^2 < \infty$ for all $n$,
  and $\psi_k \to \psi$ by p.v.m. axiom 3. Correct.

**Calculations** (`.venv/bin/python -I`, mpmath at 25 digits; all independent of the unit's algebra).
- $\operatorname{erf}(1) = \pi^{-1/2}\int_{-1}^{1}e^{-k^2}dk$: both routes give
  $0.8427007929497148693412206$. Unit prints $0.842700792949\ldots$ - matches.
- $\pi^{-1/2}\int_{\mathbb{R}}e^{ik}e^{-k^2}dk = 0.7788007830714048682451703 + 0.0i$; and the
  independent translation route $\pi^{-1/2}\int e^{-(x+1)^2/2}e^{-x^2/2}dx$ gives the same
  $0.7788007830714048682451703$; $e^{-1/4} = 0.7788007830714048682451703$. All three agree. Unit
  prints $0.778800783071\ldots$ - matches, and the two routes really are independent.
- Second moment: $\pi^{-1/2}\int k^2 e^{-k^2}dk = 0.5$ and $\|A\psi\|^2 = \pi^{-1/2}\int x^2e^{-x^2}dx = 0.5$.
  Unit says $\tfrac12$ for both - matches.
- Total mass $\mu_\psi(\mathbb{R}) = 1 = \|\psi\|^2$ - matches.
- Fourier convention: with $(U\psi)(k) = (2\pi)^{-1/2}\int\psi e^{-ikx}dx$, the transform of
  $\pi^{-1/4}e^{-x^2/2}$ is $\pi^{-1/4}e^{-k^2/2}$, so the Gaussian is indeed a fixed point, and
  multiplying $\hat\psi$ by $e^{ik}$ is translation to $\psi(x+1)$, matching $e^{iA} = e^{d/dx}$ for
  $A = -i\,d/dx$.
- Step 7: $\sum_{n \ge 1}4^{-n} = 0.333\ldots = \tfrac13$, so "$\mu(M) = \sum_n 4^{-n} \le \tfrac13$"
  is right (equality at $N = \infty$).
- Step 11 reweighting, redone symbolically: $\int|V\varphi|^2d\tilde\mu = \int|\varphi|^2d\mu$,
  $\tilde\mu(M) \le \mu(M)$, $c_p = \sup_{t\ge0}t^pe^{-t^2} = (p/2)^{p/2}e^{-p/2} < \infty$ (for $p=1$,
  attained at $t = 1/\sqrt2 = 0.7071067811865475$), hence $\int|f|^pd\tilde\mu \le c_p\mu(M) < \infty$.
  Matches the unit and matches RS's Proposition 3 proof.
- Step 9 algebra recomputed in the handbook's linear-in-the-first-slot convention:
  $\|(A\pm i)\psi\|^2 = \|A\psi\|^2 + \|\psi\|^2$ (cross terms $-i(A\psi,\psi)+i(A\psi,\psi)$ cancel);
  $(A+i)^{*} = A-i$; $R^{*}R = RR^{*} = (A^2+1)^{-1}$.
- Step 14's Cauchy-Schwarz chain recomputed: $|\nu_{\psi\varphi}(\Omega)| \le \rho_{\psi\varphi}(\Omega)
  \le \mu_\psi(\Omega)^{1/2}\mu_\varphi(\Omega)^{1/2}$ and
  $\int|\lambda|d\rho_{\psi\varphi} \le \|fF\|_2\|G\|_2 = \|A\psi\|\|\varphi\|$. Both correct.

**Citations.** Every page opened with `node tools/corpus/pages.mjs`.
- reed-simon-1980 p. 192: Thm VI.6, "if $X$ is a Hilbert space and $A$ is self-adjoint, then
  $r(A) = \|A\|$". Supports Step 2. Locator right.
- reed-simon-1980 pp. 221-222: §VII.1 opens with the multiplication-operator preference; Thm VII.1
  (continuous functional calculus) with properties (a)-... on p. 222. Supports Steps 1-3. Right.
- reed-simon-1980 pp. 226-228: cyclic-vector definition ("finite linear combinations of
  $\{A^n\psi\}$ dense"), Lemma 1 (cyclic case) with its $\|U\phi(f)\psi\|^2$ computation, Lemma 2
  ("A simple Zornication"), Thm VII.3 and its Corollary - which is exactly Step 7, including the
  choice $\|\varphi_n\| = 2^{-n}$ - and the Dirac-notation remark. Supports the definition block,
  Steps 5-7. Right.
- reed-simon-1980 p. 229: the essential range is defined there *only* for real-valued $F$ and the
  condition is written $\mu(\{m : \lambda-\varepsilon < F(m) < \lambda+\varepsilon\}) > 0$, exactly as
  our definition block reports; the proposition $\sigma(T_F) = $ essential range is on the same page;
  Example 4 is the Fourier transform as a spectral representation of $i^{-1}d/dx$. All three uses
  check out, and the unit's statement that the modulus form is ours is honest.
- reed-simon-1980 pp. 230-231: Thm VII.4 and the $\sigma_{pp}/\sigma_{ac}/\sigma_{sing}$ definitions.
  Supports the application block.
- reed-simon-1980 pp. 234-235: spectral projections, the four properties (a)-(d), Thm VII.7 and
  Thm VII.8 (p.v.m. form). Locators right.
- reed-simon-1980 p. 237: Thm VII.12, Weyl's criterion. Step 12 does recover the concrete case, as
  the frontmatter says.
- reed-simon-1980 p. 246: Problem 5(b) reads "There is a $U : \mathcal{H} \to L^2(M,d\mu)$ for some
  finite measure $\mu$ ... and a bounded Borel function $F(m)$ (in general, complex valued) so that
  $(UAU^{-1}f)(m) = F(m)f(m)$" - word for word the import Step 10 quotes, and it is set as an
  exercise, as Step 10 says. Problem 4 begins "Let $A_1,\dots,A_n$ be commuting bounded self-adjoint
  operators on $\mathcal{H}$, a separable Hilbert space", while Problem 5 says only "Let $A$ be a
  normal operator": the separability remark in the hypotheses block is therefore exactly right about
  where the hypothesis comes from. Problem 4(a)-(f) is also the route Step 10 describes (commuting
  spectral projections, rectangles, B.L.T., Borel calculus, multiplication form). Right.
- reed-simon-1980 pp. 256-259: Thm VIII.3 (the (a)/(b)/(c) basic criterion) p. 257; the example
  $T = i\,d/dx$ on $\{\phi \in AC[0,1] : \phi(0) = 0 = \phi(1)\}$ pp. 257-258; p. 259 "a closed,
  symmetric but not self-adjoint operator" and the circle $T_\alpha$, $|\alpha| = 1$. Matches the
  remark block.
- reed-simon-1980 pp. 259-261: Proposition 1 (finite $\mu$, real a.e.-finite $f$, $T_f$ self-adjoint,
  $\sigma(T_f)$ the essential range); Proposition 2 (cores, assuming $f \in L^p$ for $2 < p < \infty$) -
  so part A's remark that Proposition 2 is why the $L^p$ clause is recorded is right; Thm VIII.4
  with conditions (a) and (b) matching our conditions 1 and 2; and the proof on p. 261 with the
  resolvent route and the appeal to Problems 3-5. Right.
- reed-simon-1980 pp. 262-263: Thm VIII.5 with (a)-(f) - our part C properties 1-4 plus the two
  automatic ones, in the same order; the cyclic-vector paragraph with the $C_\infty(\mathbb{R})$
  definition and the sentence "the measure space, $M$, in Theorem VIII.4 can be realized as a union
  of copies of $\mathbb{R}$", asserted with no proof, which is exactly what part E says it quotes;
  the p.v.m. axioms (a)-(d); Thm VIII.6 with the one-to-one correspondence; and the displayed
  two-vector identity stated "for $\varphi, \psi \in \mathcal{D}(A)$", which is what part D says
  they state. Right.
- reed-simon-1980 "p. 264"/`pages.mjs` label p. 266: Proposition 3 with its reweighting proof
  ($d\mu = e^{-f^2}dv$, $Vg = e^{f^2/2}g$), and §VIII.4 (Stone's theorem) opening below it. The scan
  really is bound out of order - the tool prints Stone's-theorem material under labels 264-265 and
  this page under 266 - exactly as the frontmatter's note for reviewers records, and the running
  head of the page carrying Proposition 3 reads 264. Citing it as p. 264 is correct.
- reed-simon-1980 p. 37: "some texts use a convention different from the one introduced in (iii);
  they take the inner product to be linear in the first vector" - confirms that RS are
  conjugate-linear in the first slot, as the "which slot is linear" bullet says.
- folland-1999 p. 139: Thm 4.45, the real Stone-Weierstrass theorem. p. 141: the paragraph "The
  Stone-Weierstrass theorem, as it stands, is false for complex-valued functions", with the
  $f(z) = \bar z$ counterexample on the unit circle, followed by Thm 4.51, the complex
  Stone-Weierstrass theorem for a closed complex subalgebra that separates points and is closed
  under conjugation. Supports Steps 3 and 13a and the parenthetical about the real form. Right.
- folland-1999 p. 212: Thm 7.2, the Riesz representation theorem for positive linear functionals on
  $C_c(X)$, with uniqueness among Radon measures - which is precisely the two-part caveat Step 4
  spells out. Right.
- folland-1999 p. 217: Thm 7.8, "Let $X$ be an LCH space in which every open set is $\sigma$-compact
  (which is the case, for example, if $X$ is second countable). Then every Borel measure on $X$ that
  is finite on compact sets is regular and hence Radon." Supports the uniqueness upgrade in Step 4
  and is reported accurately in the frontmatter. Right.
- The $L^2$-density used in Step 5 ("$C(\sigma(A))$ ... dense in $L^2(\sigma(A),d\mu_\psi)$") is no
  longer cited to Folland Prop. 7.9, but it is item 4 of the statement block of the prerequisite unit
  measure.lp-spaces, so it falls under the "standard apparatus of the prerequisite units" that
  Step 10 declares. Not a citation gap.
- kreyszig-1978 pp. 494-495: Definition 9.7-1 with (7), (8a), (8b), (9) - the four conditions our
  note lists, with (9) right-continuity. Right.
- kreyszig-1978 pp. 556-561: the Cayley transform (1) $U = (T-iI)(T+iI)^{-1}$ p. 556; Lemma 10.6-2
  p. 557, "since $(I-U)^{-1}$ exists, 1 cannot be an eigenvalue of the Cayley transform $U$";
  Thm 10.6-3 pp. 558-559 with $(Tx,x) = \int\tan(\theta/2)d\omega(\theta) = \int\lambda\,dv(\lambda)$,
  $v(\lambda) = (F_\lambda x,x)$, $F_\lambda = E_{2\arctan\lambda}$, and $(E_\theta)$ the spectral
  family of $-U$; and part (a) of the proof, which derives the continuity of $(E_\theta)$ at
  $\pm\pi$ from Lemma 10.6-2 by computing that otherwise $U$ would have the eigenvalue
  $-\cos(-\pi)-i\sin(-\pi) = 1$. Every detail the note asserts - the minus sign, the role of
  Lemma 10.6-2, the substitution sweeping $(-\pi,\pi)$ - is on those pages. Right.

**Provenance.** Four `original` blocks (note, idea, remark, method, example, application) and four
`adapted` ones (definition, statement, note on the spectral-family form, the two proofs).
- Closest passage compared: Step 7 against Reed and Simon's Corollary on p. 227, which is the same
  construction with the same normalisation $\|\varphi_n\| = 2^{-n}$. Their text is five lines ("Let
  $M = \bigcup_1^N \mathbb{R}$ ... Since $\mu(M) = \sum\mu_n(\mathbb{R}) < \infty$, $\mu$ is
  finite"); ours is a paragraph that justifies the rescaling through $\mu_{c\varphi} = |c|^2\mu_\varphi$,
  computes $\sum 4^{-n} \le \tfrac13$, and adds that any summable choice works. Same idea,
  independent sentences, extra content. Correctly `adapted`.
- Step 5 against Lemma 1, p. 226: RS define $U$ by $U\phi(f)\psi = f$ and verify isometry in three
  lines. Ours separates well-definedness from injectivity and spells out which reading of the display
  gives which - material RS do not have. Correctly `adapted`, not a close paraphrase.
- Step 8 against Proposition 1, pp. 259-260: RS's proof is a five-line chain of suprema; ours runs
  the same monotone-convergence argument but in our own order, with the density of $\mathcal{D}(T_f)$
  argued first (RS write only "$T_f$ is clearly symmetric"). Correctly `adapted`.
- Step 13a is not in either book at this level of detail - RS assert uniqueness in Thm VIII.5 without
  proof - and it sits inside an `adapted` proof block, which is the safe direction.
- The `original` blocks: the idea, the hypotheses remark, the method and the momentum example contain
  nothing I could trace to a cited page. The example's operator is RS Example 4, p. 229, but RS give
  one sentence there and no spectral measure, no projection value and no two-route check of
  $(e^{iA}\psi,\psi)$; the example cites nothing and needs to cite nothing. The application block
  does cite RS Example 4 where it leans on it. No mislabelling found.
- Style: an idea block precedes the proofs; no "clearly" or "obviously" (one "trivially", applied to
  $\chi_\varnothing = 0 \in \mathcal{C}$, which is a genuine triviality rather than a gap); the
  momentum example supplies four checkable numbers; hypotheses are named where used, in a remark
  devoted to it.
