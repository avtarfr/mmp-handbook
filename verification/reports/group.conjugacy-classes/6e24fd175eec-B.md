VERDICT: PASS
UNIT: group.conjugacy-classes
VERIFIER: B

## Findings

1. [minor] statement "Classes and centralizers", part 4 (conjugate elements have the same
   order; conjugation by a fixed $g$ is an automorphism): the block is `adapted` with
   src `dummit-foote-2004:§4.3, pp. 122-123, Prop. 6; rhb-2006:§28.7.3, pp. 1068-1069`,
   and neither set of pages contains this assertion. D&F pp. 122-123 carry the action,
   the definitions, and Prop. 6 only; RHB pp. 1068-1069 carry the equivalence-relation
   argument, the identity's singleton class and the centre. The claim is true and is
   proved in full in the unit's own proof block, so nothing is misreported about a
   source. Fix: either add a locator that states it (D&F treats inner automorphisms in
   §4.4) or split part 4 into a short `original` statement, since the unit proves it
   outright.

2. [minor] method, step 5 (line with "$\langle x\rangle \subseteq C_G(x)$ always, so the
   order of $x$ must divide $\lvert C_G(x)\rvert$"): this computation-saving observation
   is exactly D&F §4.3, Example (2), p. 124, and the block is labelled `original`. The
   method as a whole is our own procedure and does not follow D&F's worked route (D&F's
   examples are $Q_8$ and $D_8$), so I do not read this as mislabelled provenance, but a
   `:cite` on that one step would be more honest.

3. [minor] definition (line with "${}^{g}x \;=\; g\,x\,g^{-1}$"): the left-superscript
   notation is introduced and then never used again anywhere in the unit. Either use it
   or drop it.

4. [minor] definition (line "Two subgroups attached to $x$ record how much of $G$ fails to
   move it"): the second of the two, $Z(G)$, does not depend on $x$. Fix: reword, e.g.
   "the centralizer of $x$, and the subgroup of elements that move nothing at all".

5. [minor] application, final paragraph: `:ref[]{to=group.wigner-d-matrices}` points to a
   unit that is planned in `content/map.yaml` but not yet written. The checker accepts it;
   noted only so it is not forgotten.

No `[source]` findings: nothing in the unit required deference to a book I disagree with,
and nothing needed recording with `tools/discrepancy.mjs`.

## Checked

**Automated.** `node tools/check/index.mjs --record group.conjugacy-classes`: 1/1 pass,
no FAIL line. The 86 warnings are prerequisite-ordering warnings on other parts
(pde, spec, ode, prob, measure, vcalc) plus "planned units not written"; none names
`content/group/group.conjugacy-classes.md`. `npm run check -- group.conjugacy-classes`
produced no `resembles` line for this unit.

**Counterexample search.** Statement 1 parts 1-4: tested the action axioms symbolically;
abelian $G$ (every class a singleton, $r = 0$, class equation reads $|G| = |Z(G)|$ with an
empty sum, so the "each index exceeds 1" clause is vacuous and survives); infinite $G$
(part 2 is stated as an index, not a product, and the divisibility clause is correctly
quarantined behind "If $G$ is finite"); the trivial group ($K_e = \{e\}$, part 3 holds).
Part 4's order claim: the unit's induction argument works for infinite order too, so no
edge case there. Class equation: checked that the central term cannot be absorbed into
the sum without destroying the "> 1" clause, which is exactly what the remark says.
Prime-power statement: $a = 0$ is excluded and the remark says why; tried to break the
argument with a non-prime-power order and found the unit already gives $S_3$,
$6 = 1+2+3$ with trivial centre, which I confirmed ($S_3$ classes have sizes 1, 3, 2).

**Calculations** (all with `.venv/bin/python`, $D_5$ built from $r^5 = s^2 = e$,
$sr^k = r^{-k}s$, with the group axioms checked first):
- conjugacy classes of $D_5$ computed by brute force over all 10 elements:
  $\{e\}$, $\{r, r^4\}$, $\{r^2, r^3\}$, $\{s, rs, r^2s, r^3s, r^4s\}$ — sizes
  $1, 2, 2, 5$, summing to 10. Matches the unit's steps 1-4 exactly.
- centre: $Z(D_5) = \{e\}$ (computed, one element). Matches step 5.
- centralizers: $|C(r)| = 5$ with $C(r) = \langle r\rangle$; $|C(r^2)| = 5$, same subgroup;
  $|C(s)| = 2$ with $C(s) = \{e, s\}$. Matches the $10/2 = 5$ and $10/5 = 2$ in step 5.
- class equation: $10 = 1 + 2 + 2 + 5$. Verified.
- the algebra in step 2, $(r^k s) r^m (r^k s)^{-1} = r^{-m}$, and in step 3,
  $r^k s r^{-k} = r^{2k}s$ and $(r^k s)s(r^k s)^{-1} = r^{2k}s$, redone by hand; both
  correct, and $(r^k s)^{-1} = r^k s$ (used silently at the second of these) is right
  because reflections are involutions. $2k \bmod 5$ over $k = 0..4$ gives $0,2,4,1,3$,
  all residues, and $2\cdot 3 = 6 \equiv 1 \pmod 5$ as stated.
- remark's normal-subgroup claim: enumerated every subgroup of $D_5$ and tested normality.
  The normal subgroups are exactly the trivial one, $\langle r \rangle$ of order 5, and
  $D_5$ itself, so $\langle r\rangle$ is indeed the only non-trivial proper one. The
  arithmetic also checks: sums of class sizes containing the 1 are
  $1, 3, 5, 6, 8, 10$, of which only $1, 5, 10$ divide 10.
- remark's $\mathrm{GL}_2(\mathbb{C})$ aside (two-parameter family of diagonalizable
  classes indexed by unordered pairs of non-zero eigenvalues): correct.
- application's $D_{4h}$ claim: built the group as matrices from $C_4(z)$, $C_2(x)$ and
  $\sigma_h$. Order 16, exactly 10 conjugacy classes, class sizes all 1 or 2. The proper
  rotations with trace $-1$ split into a singleton class (the principal $C_2$) and two
  distinct classes of size 2 — the $2C_2'$ and $2C_2''$ of the unit. The claim that a
  class of size 3 cannot occur is confirmed by $3 \nmid 16$ and by the computed sizes.
- application's representation count: $D_5$ has 4 classes and 4 irreducibles
  ($1^2+1^2+2^2+2^2 = 10$), consistent with the unit's closing sentence.

**Citations.**
- `dummit-foote-2004` §4.3, p. 122 (conjugation as an action, with the two axioms verified
  there): matches; the unit's proof reproduces the same two-line verification in its own
  words.
- p. 123: the definition of conjugate elements and of conjugacy classes as the orbits; the
  singleton-class-iff-central characterisation (their Example 2); the subset action and
  $gSg^{-1}$; Prop. 6, the number of conjugates of an element being $[G : C_G(s)]$. All
  present, locator correct — Prop. 6 is on p. 123 as the frontmatter says.
- p. 124: Theorem 7, the class equation, stated in the same form the unit states, with the
  remark that the summands are divisors of $|G|$. Matches.
- p. 125: Theorem 8, prime-power order implies non-trivial centre, with $a \geq 1$.
  Matches, including the hypothesis the unit's remark discusses.
- p. 126, Prop. 11 (cited in the application): two elements of $S_n$ are conjugate iff they
  have the same cycle type, and the number of classes is the number of partitions of $n$.
  Exactly what the application attributes to it.
- `hassani-2013` Def. 23.2.18, p. 711: conjugate and conjugacy class, with the note that
  conjugacy is an equivalence relation and that central elements form classes by
  themselves. Matches. Box 23.2.20, p. 711: all rotations through the same angle lie in one
  class of the three-dimensional rotation group, derived there via $R R_{\hat n}(\theta)
  R^{-1} = R_{\hat n'}(\theta)$ — precisely the identity the application quotes.
- `hassani-2013` Thm 23.4.12, p. 719: permutations conjugate iff same cycle structure.
  Matches.
- `rhb-2006` §28.7.3, pp. 1068-1069: the reflexivity/symmetry/transitivity argument, the
  identity alone in its class, and corollary (iii) identifying the set of singleton classes
  as an Abelian subgroup called the centre. All match the roles claimed.
- Convention check: RHB p. 1068 does write the relation as $Y = G_i^{-1} X G_i$, so the
  unit's convention paragraph reports it correctly, and the reconciliation it gives
  (conjugation by $G_i^{-1}$) is right. This is the right handling under
  docs/contributing/source-authority.md for two sources using opposite conventions: the unit
  states which it follows, cites it, and flags the difference.
  I also checked whether RHB p. 1069 ("can only be, but are not necessarily") conflicts
  with Hassani Thm 23.4.12: it does not, because RHB is speaking of permutations inside an
  arbitrary permutation group, not inside $S_n$, and the unit cites only Hassani and D&F
  for the $S_n$ statement. No discrepancy to record.

**Cross-references.** Every `:ref` target resolves to a map id. The two load-bearing ones
were read: `group.group-actions` numbers its orbit-stabilizer theorem 1 (orbits partition),
2 (bijection with cosets, $|G\cdot a| = [G:G_a]$, finite or not), 3 (product form, $G$
finite), and its definition block proves each stabilizer is a subgroup. The unit's appeals
to "part 1" and "part 2" of that theorem, and its claim that a stabilizer is a subgroup,
are all accurate to the sibling. `group.cosets-lagrange` supplies Lagrange as used.

**Provenance.** Closest passages compared by hand:
- definition block vs D&F p. 123 and Hassani Def. 23.2.18. The defining equation is forced,
  but our structure differs substantially (set notation for $K_x$, the centralizer/centre
  bullets with the intersection formula, the normalizer and class-function additions, and
  the convention paragraph, none of which has a counterpart in either source). Not close
  paraphrase.
- first proof vs D&F p. 122. The axiom chain is the only computation available, and the
  unit adds its own justification clauses; parts 2-4 take a different route from D&F, which
  reaches Prop. 6 through the normalizer and its Prop. 2 while the unit goes straight
  through the stabilizer. Acceptable.
- class-equation proof vs D&F p. 124 Thm 7. Same route (forced), but reorganised into three
  prose paragraphs against D&F's displayed partition and two-line sum, and worded
  independently. Acceptable.
- prime-power proof vs D&F p. 125 Thm 8. D&F's proof is three sentences; ours makes the
  $p^{b_i}$ step and the use of $a \geq 1$ explicit, which D&F leaves implicit. Acceptable.
- `original` blocks: the worked example ($D_5$) shares no example with any source — D&F
  does $Q_8$ and $D_8$, RHB a six-element group from its own table, Hassani $\mathrm{SO}(3)$
  — so it is genuinely ours. The remark and the application are ours apart from the three
  `:cite`d sentences, which are cited. The one borderline case is method step 5, recorded as
  finding 2 above; I judged it not to rise to mislabelled provenance.

**Style guide.** Block order is definition - statement/idea/proof (x3) - remark - method -
example - application, which the checker accepts. An idea precedes each of the three
proofs. No "clearly", "obviously", "it is easy to see" or "trivially" anywhere in the file.
No exercises. A fully worked example ending in checkable numbers (the class sizes
$1,2,2,5$ and the class equation $10 = 1+2+2+5$). Hypotheses are named where used, in a
dedicated remark that treats finiteness, $a \geq 1$, primality, and why the centre must be
separated out.
