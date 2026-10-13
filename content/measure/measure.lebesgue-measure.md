---
id: measure.lebesgue-measure
title: Lebesgue measure
kind: theorem
level: core
summary: Builds Lebesgue measure from the length of an interval by covering sets from outside and keeping the sets that split every test set additively, and records what the result does and does not do — complete, regular, translation invariant, and necessarily undefined on some subsets of the line.
prereqs: [measure.sigma-algebras-measures, found.sets-cardinality, found.zorn-lemma, found.compactness]
provenance: adapted
sources:
  - work: folland-1999
    loc: "Ch. 1, §1.1 (the Vitali set and the impossibility argument), pp. 19–20; §1.4 (outer measures, Prop. 1.10, Caratheodory's Thm 1.11, premeasures, Prop. 1.13, Thm 1.14), pp. 28–32; §1.5 (h-intervals, Prop. 1.15, Thm 1.16, Lemma 1.17, Thm 1.18, Thm 1.19, Lebesgue measure and Thm 1.21, the Cantor set), pp. 33–38; Exercise 25, p. 39"
    pages: "19-20, 28-39"
    role: the equivalence relation and translation-mod-one argument producing a non-measurable set; the definition of an outer measure and of Caratheodory measurability; the statement and proof route of Caratheodory's theorem; premeasures on an algebra and the extension theorem with its uniqueness clause in the sigma-finite case; the algebra of h-intervals and the construction of Lebesgue measure as the complete measure attached to F(x) = x; outer and inner regularity; the description of a measurable set as a G-delta set minus a null set; translation and dilation behaviour; the remark that a nowhere dense set can have large measure; the fact that the infinite-measure case of the structure theorem is left to the reader as Exercise 25
  - work: reed-simon-1980
    loc: "§I.3 (the Borel sets, the definition of Lebesgue measure by outer approximation, Thm I.3), pp. 14–15; §I.4 (Borel measures, the three Lebesgue–Stieltjes examples, the Cantor set and the Cantor function), pp. 20–21"
    pages: "14-15, 20-21"
    role: the definition of Lebesgue measure of a Borel set as an infimum over coverings by open sets; the four listed properties including inner approximation by compact sets; the Banach–Tarski motivation for not measuring every set; the absolutely continuous, Dirac and Cantor-function examples of Lebesgue–Stieltjes measures, and the statement that the Cantor set has Lebesgue measure zero
  - work: evans-2010
    loc: "Appendix E, §E.1, Theorem 1 (existence of Lebesgue measure and Lebesgue measurable sets) and the remarks following it, pp. 684–685"
    pages: "684-685"
    role: the compact n-dimensional statement of what Lebesgue measure delivers — a sigma-algebra containing the open sets, the volume of a ball, countable additivity, completeness — and the resulting countable subadditivity and "almost everywhere" vocabulary
---

:::definition[Outer measure, Caratheodory measurability, Lebesgue outer measure]{provenance=adapted src="folland-1999:§1.4, pp. 28–29 and §1.5, p. 33; reed-simon-1980:§I.3, p. 15"}
Let $X$ be a non-empty set.

**Outer measure.** A map $\mu^{*} : \mathcal{P}(X) \to [0,\infty]$ is an **outer measure** if $\mu^{*}(\varnothing) = 0$, it is monotone ($A \subseteq B \Rightarrow \mu^{*}(A) \le \mu^{*}(B)$), and it is countably subadditive. It is defined on *every* subset; the price is that additivity is weakened to subadditivity.

**Caratheodory measurability.** A set $A \subseteq X$ is **$\mu^{*}$-measurable** if it splits every test set additively:
$$
\mu^{*}(E) \;=\; \mu^{*}(E \cap A) + \mu^{*}(E \cap A^{c}) \qquad \text{for every } E \subseteq X .
$$
Subadditivity already gives "$\le$", so only "$\ge$" has to be checked, and only for test sets with $\mu^{*}(E) < \infty$.

**Lebesgue outer measure on the line.** Call $(a,b]$, $(a,\infty)$ and $\varnothing$ (with $-\infty \le a < b < \infty$) the **h-intervals**. Finite disjoint unions of h-intervals form an algebra $\mathcal{A}$ whose generated $\sigma$-algebra is $\mathcal{B}_{\mathbb{R}}$, since the h-intervals generate $\mathcal{B}_{\mathbb{R}}$ by :ref[the generator list]{to=measure.sigma-algebras-measures}. Set $\mu_0\bigl(\bigsqcup_{j \le n}(a_j,b_j]\bigr) = \sum_{j \le n}(b_j - a_j)$ on $\mathcal{A}$ and define, for every $A \subseteq \mathbb{R}$,
$$
m^{*}(A) \;=\; \inf\Bigl\{\; \sum_{j \ge 1}(b_j - a_j) \;:\; A \subseteq \bigcup_{j \ge 1}(a_j, b_j] \;\Bigr\},
$$
the infimum over all countable coverings of $A$ by h-intervals. The Proposition below builds its outer measure from a covering family that is required to contain $X = \mathbb{R}$ itself, and $\mathbb{R} = (-\infty,\infty)$ is an h-interval, so the h-intervals qualify; allowing the unbounded h-intervals into a cover never lowers the infimum, since any cover using one of them has total price $+\infty$, so the displayed infimum over bounded h-intervals is the same number as the Proposition’s $\mu^{*}$. **Lebesgue measurable sets** are the $m^{*}$-measurable ones; they form a $\sigma$-algebra $\mathcal{L}$, and **Lebesgue measure** is $m = m^{*}\big|_{\mathcal{L}}$. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 15"} define the same number by taking the infimum over coverings by *open* sets instead; the two agree, by Lemma 1.17 of :cite[Folland]{work=folland-1999 loc="§1.5, p. 36"}, and the proof of outer regularity below contains the argument.

**Premeasure.** More generally, a map $\mu_0 : \mathcal{A} \to [0,\infty]$ on an algebra $\mathcal{A}$ is a **premeasure** if $\mu_0(\varnothing) = 0$ and $\mu_0\bigl(\bigcup_j A_j\bigr) = \sum_j \mu_0(A_j)$ whenever the $A_j \in \mathcal{A}$ are disjoint *and their union happens to lie in $\mathcal{A}$*. A premeasure is finitely additive but is not yet a measure, because its domain is only an algebra.
:::

:::statement[Covering produces an outer measure]{label="Proposition" provenance=adapted src="folland-1999:Prop. 1.10, p. 29"}
**Data.** A family $\mathcal{E}$ of subsets of $X$ with $\varnothing \in \mathcal{E}$ and $X \in \mathcal{E}$, and a price list $\rho : \mathcal{E} \to [0,\infty]$ that charges nothing for the empty set, $\rho(\varnothing) = 0$. Nothing else is assumed: $\rho$ need not be monotone, additive or finite.

**Conclusion.** Charge every $A \subseteq X$ the cheapest total price of a countable cover drawn from $\mathcal{E}$:
$$
\mu^{*}(A) \;=\; \inf\Bigl\{\sum_{j \ge 1}\rho(E_j) \;:\; E_j \in \mathcal{E},\ A \subseteq \bigcup_{j \ge 1}E_j\Bigr\} .
$$
The infimum is over a non-empty set of covers, because $E_j = X$ for all $j$ always qualifies, and the resulting $\mu^{*}$ is an outer measure on $X$. Taking $X = \mathbb{R}$, for $\mathcal{E}$ the h-intervals and for $\rho$ their length returns the $m^{*}$ defined above.
:::

:::statement[Caratheodory's theorem]{provenance=adapted src="folland-1999:Thm 1.11, pp. 29–30"}
Fix any outer measure $\mu^{*}$ on $X$, and write $\mathcal{M}$ for the family of all subsets that pass the splitting test above. Two things then happen at once, with no further hypotheses:

1. $\mathcal{M}$ is closed under complements and under countable unions, so it is a $\sigma$-algebra on $X$;
2. cut down to $\mathcal{M}$, the set function $\mu^{*}$ is countably additive, and every set of outer measure zero belongs to $\mathcal{M}$ — so $\mu^{*}\big|_{\mathcal{M}}$ is a **complete** measure on $(X,\mathcal{M})$.
:::

:::statement[Extension from an algebra]{provenance=adapted src="folland-1999:Prop. 1.13 and Thm 1.14, pp. 31–32"}
Let $\mathcal{A} \subseteq \mathcal{P}(X)$ be an algebra, $\mu_0$ a premeasure on $\mathcal{A}$, $\mu^{*}$ the outer measure it induces by the proposition above (with $\mathcal{E} = \mathcal{A}$, $\rho = \mu_0$), and $\mathcal{M} = \mathcal{M}(\mathcal{A})$ the generated $\sigma$-algebra. Then

1. $\mu^{*}$ agrees with $\mu_0$ on $\mathcal{A}$, and every member of $\mathcal{A}$ is $\mu^{*}$-measurable;
2. consequently $\mu = \mu^{*}\big|_{\mathcal{M}}$ is a measure on $\mathcal{M}$ extending $\mu_0$;
3. if $\nu$ is any other measure on $\mathcal{M}$ extending $\mu_0$ then $\nu(E) \le \mu(E)$ for all $E \in \mathcal{M}$, with equality whenever $\mu(E) < \infty$;
4. **if $\mu_0$ is $\sigma$-finite, the extension $\mu$ is the only one.**
:::

:::statement[Lebesgue measure]{provenance=adapted src="folland-1999:§1.5, Thm 1.16, p. 35, Thm 1.18, p. 36, Thm 1.19, p. 36 and Thm 1.21, p. 37; reed-simon-1980:Thm I.3, p. 15; evans-2010:Appendix E, Thm 1, pp. 684–685"}
There is a complete measure $m$ on a $\sigma$-algebra $\mathcal{L}$ of subsets of $\mathbb{R}$ with the following properties.

a. **It measures intervals by length.** $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{L}$ and $m\bigl((a,b]\bigr) = b - a$ for all $a < b$; consequently $m$ of any interval, open, closed or half-open, is its length, and $m(\{x\}) = 0$.
b. **It is the only such Borel measure.** $m$ is $\sigma$-finite, and it is the unique measure on $\mathcal{B}_{\mathbb{R}}$ assigning to each $(a,b]$ the number $b-a$; $\mathcal{L}$ and $m$ on it are the completion of that Borel measure.
c. **Outer and inner regularity.** For every $E \in \mathcal{L}$,
   $$
   m(E) = \inf\{m(U) : U \supseteq E,\ U \text{ open}\} = \sup\{m(K) : K \subseteq E,\ K \text{ compact}\} .
   $$
d. **Structure modulo null sets.** $E \in \mathcal{L}$ if and only if $E = V \setminus N_1$ with $V$ a $G_\delta$ set and $m(N_1) = 0$, if and only if $E = H \cup N_2$ with $H$ an $F_\sigma$ set and $m(N_2) = 0$.
e. **Translations and dilations.** If $E \in \mathcal{L}$ and $s, r \in \mathbb{R}$ then $E + s \in \mathcal{L}$ and $rE \in \mathcal{L}$, with $m(E+s) = m(E)$ and $m(rE) = \lvert r \rvert\, m(E)$.

In $\mathbb{R}^n$ the corresponding statement is Theorem 1 of :cite[Evans]{work=evans-2010 loc="Appendix E.1, pp. 684–685"}: there are a $\sigma$-algebra $\mathcal{M}$ containing all open and all closed subsets of $\mathbb{R}^n$ and a map $\lvert\,\cdot\,\rvert : \mathcal{M} \to [0,+\infty]$ that gives each ball its $n$-dimensional volume, is countably additive, and is complete in the sense that every subset of a set of measure zero is again measurable with measure zero.
:::

:::statement[Not every set can be measured]{provenance=adapted src="folland-1999:§1.1, pp. 19–20"}
There is no map $\mu : \mathcal{P}(\mathbb{R}) \to [0,\infty]$ that is simultaneously countably additive, invariant under translations, and normalised by $\mu\bigl([0,1)\bigr) = 1$.

Since Lebesgue measure is countably additive, translation invariant and gives $[0,1)$ the value $1$, it follows that $\mathcal{L} \ne \mathcal{P}(\mathbb{R})$: the set $N$ constructed in the proof is not Lebesgue measurable.

**How this compares with the source.** :cite[Folland]{work=folland-1999 loc="§1.1, p. 19"} asks of a hypothetical $\mu$ on $\mathcal{P}(\mathbb{R}^n)$ the three properties: countable additivity, invariance under all congruences (translations, rotations and reflections), and $\mu(Q) = 1$ for the unit cube $Q = \{x : 0 \le x_j \le 1\}$, and shows that no such $\mu$ exists. On the line the argument needs only translations and only the normalisation of $[0,1)$, so the version stated here has the weaker hypotheses; it is what the proof below delivers, and it implies Folland’s one-dimensional case.
:::

:::idea{provenance=original}
The construction has three moves, and each one trades something away.

First, give *every* set a size by covering it from outside with intervals and taking the cheapest cover. This always works, but the result $m^{*}$ is only subadditive: two disjoint sets can be covered jointly more cheaply than separately when they are badly interleaved.

Second, throw away the sets that cause the trouble. Carathéodory's criterion is a sharp way of saying "$A$ has a clean boundary as far as $m^{*}$ can tell": $A$ must cut *every* test set — not just the nice ones — into two pieces whose outer measures add up exactly. The surprise is that this one demand, which mentions no topology and no intervals, already forces the surviving sets to form a $\sigma$-algebra on which $m^{*}$ is countably additive. The reason is that the criterion is an identity, so it can be applied repeatedly to ever-finer test sets, and a short induction turns it into exact finite additivity on arbitrary test sets; countable additivity then follows by letting the induction run and using subadditivity in the other direction.

Third, check that nothing was lost: the h-intervals themselves survive the criterion, so the surviving $\sigma$-algebra contains all Borel sets, and the cheapest cover of an interval is the interval itself, so lengths come out right.

That something *had* to be thrown away is the content of the last statement. If every set had a translation-invariant size, then cutting $[0,1)$ into countably many congruent copies of one set — which the axiom of choice permits — would make $1$ equal to a sum of countably many equal numbers, and no number has that property.
:::

:::proof[Covering produces an outer measure]{provenance=adapted src="folland-1999:Prop. 1.10, p. 29"}
**$\mu^{*}(\varnothing) = 0$.** Cover $\varnothing$ by the cover whose every member is $\varnothing$; its total price is $0$, and prices are non-negative.

**Monotonicity.** If $A \subseteq B$, every cover of $B$ is also a cover of $A$. The infimum defining $\mu^{*}(A)$ therefore ranges over a set of numbers that includes all those competing in the infimum for $\mu^{*}(B)$, so it cannot be larger.

**Countable subadditivity.** Let $A_1, A_2, \dots \subseteq X$ and let $A = \bigcup_j A_j$. If some $\mu^{*}(A_j) = \infty$ the claimed inequality is trivial, so assume all are finite and fix $\varepsilon > 0$. For each $j$ the infimum lets us pick a cover $\{E^{j}_{k}\}_{k \ge 1} \subseteq \mathcal{E}$ of $A_j$ whose total price is below $\mu^{*}(A_j) + \varepsilon 2^{-j}$. The doubly indexed family $\{E^{j}_{k}\}_{j,k \ge 1}$ is countable, being indexed by $\mathbb{N}\times\mathbb{N}$, and it covers $A$. Hence
$$
\mu^{*}(A) \;\le\; \sum_{j,k \ge 1}\rho\bigl(E^{j}_{k}\bigr) \;=\; \sum_{j \ge 1}\ \sum_{k \ge 1}\rho\bigl(E^{j}_{k}\bigr) \;<\; \sum_{j \ge 1}\mu^{*}(A_j) + \varepsilon,
$$
the regrouping of the double series being legitimate because all terms are non-negative. Since $\varepsilon$ was arbitrary, $\mu^{*}(A) \le \sum_j \mu^{*}(A_j)$. $\square$
:::

:::proof[Caratheodory's theorem]{provenance=adapted src="folland-1999:Thm 1.11, pp. 29–30"}
Throughout, $E$ denotes an arbitrary test set and we use that "$\le$" in the measurability identity is automatic.

**Step 1: $\mathcal{M}$ contains $\varnothing$ and is closed under complements.** The identity is unchanged when $A$ is swapped with $A^{c}$, so $A \in \mathcal{M} \Leftrightarrow A^{c} \in \mathcal{M}$. For $A = \varnothing$ it reads $\mu^{*}(E) = \mu^{*}(\varnothing) + \mu^{*}(E)$, true since $\mu^{*}(\varnothing) = 0$.

**Step 2: $\mathcal{M}$ is an algebra.** Let $A, B \in \mathcal{M}$. Test $A$ on $E$, then test $B$ on each of the two resulting pieces:
$$
\mu^{*}(E) = \mu^{*}(E \cap A \cap B) + \mu^{*}(E \cap A \cap B^{c}) + \mu^{*}(E \cap A^{c} \cap B) + \mu^{*}(E \cap A^{c} \cap B^{c}).
$$
The set $A \cup B$ is the union of the three sets $A \cap B$, $A \cap B^{c}$, $A^{c} \cap B$, so $E \cap (A\cup B)$ is the union of the three sets appearing in the first three terms; subadditivity bounds the sum of those three terms below by $\mu^{*}\bigl(E \cap (A\cup B)\bigr)$. The fourth term is $\mu^{*}\bigl(E \cap (A \cup B)^{c}\bigr)$. Hence $\mu^{*}(E) \ge \mu^{*}(E \cap (A\cup B)) + \mu^{*}(E \cap (A\cup B)^{c})$, so $A \cup B \in \mathcal{M}$.

**Step 3: $\mu^{*}$ is finitely additive on $\mathcal{M}$.** If $A, B \in \mathcal{M}$ are disjoint, use $E = A \cup B$ as the test set for $A$: $\mu^{*}(A \cup B) = \mu^{*}\bigl((A\cup B)\cap A\bigr) + \mu^{*}\bigl((A \cup B) \cap A^{c}\bigr) = \mu^{*}(A) + \mu^{*}(B)$.

**Step 4: additivity on an arbitrary test set.** Let $A_1, A_2, \dots \in \mathcal{M}$ be disjoint, $B_n = A_1 \cup \dots \cup A_n$ (which lies in $\mathcal{M}$ by step 2) and $B = \bigcup_{j \ge 1} A_j$. Testing the measurability of $A_n$ on the set $E \cap B_n$, and using $B_n \cap A_n = A_n$ and $B_n \cap A_n^{c} = B_{n-1}$ (disjointness),
$$
\mu^{*}(E \cap B_n) = \mu^{*}(E \cap A_n) + \mu^{*}(E \cap B_{n-1}),
$$
so by induction $\mu^{*}(E \cap B_n) = \sum_{j=1}^{n}\mu^{*}(E \cap A_j)$.

**Step 5: $B \in \mathcal{M}$ and countable additivity.** Test $B_n$ on $E$ and use $B_n^{c} \supseteq B^{c}$ with monotonicity:
$$
\mu^{*}(E) = \mu^{*}(E \cap B_n) + \mu^{*}(E \cap B_n^{c}) \;\ge\; \sum_{j=1}^{n}\mu^{*}(E \cap A_j) + \mu^{*}(E \cap B^{c}).
$$
Letting $n \to \infty$ and then applying countable subadditivity to $E \cap B = \bigcup_j (E \cap A_j)$,
$$
\mu^{*}(E) \;\ge\; \sum_{j \ge 1}\mu^{*}(E \cap A_j) + \mu^{*}(E \cap B^{c}) \;\ge\; \mu^{*}(E \cap B) + \mu^{*}(E \cap B^{c}) \;\ge\; \mu^{*}(E),
$$
the last step being subadditivity again. Every inequality is therefore an equality. The outer two give $B \in \mathcal{M}$; choosing $E = B$ in the middle one gives $\mu^{*}(B) = \sum_{j}\mu^{*}(A_j)$.

**Step 6: $\mathcal{M}$ is a $\sigma$-algebra.** It is an algebra closed under countable *disjoint* unions by step 5. An arbitrary sequence is disjointified as in :ref[the disjointification device]{to=measure.sigma-algebras-measures}, and the replacement sets $F_k = E_k \setminus (E_1 \cup \dots \cup E_{k-1})$ lie in $\mathcal{M}$ because an algebra is closed under differences. So $\mathcal{M}$ is a $\sigma$-algebra and $\mu^{*}\big|_{\mathcal{M}}$ is a measure.

**Step 7: completeness.** Suppose $\mu^{*}(A) = 0$ and let $E$ be any test set. Monotonicity gives $\mu^{*}(E \cap A) \le \mu^{*}(A) = 0$ and $\mu^{*}(E \cap A^{c}) \le \mu^{*}(E)$, so the two pieces add up to at most $\mu^{*}(E)$ and $A \in \mathcal{M}$. Thus every set of outer measure zero — in particular every subset of a null set of $\mu^{*}\big|_{\mathcal{M}}$ — is measurable, which is completeness. $\square$
:::

:::proof[Lebesgue measure: the five properties]{provenance=adapted src="folland-1999:Prop. 1.15, p. 33, Thm 1.16, p. 35, Lemma 1.17 and Thm 1.18, p. 36, Thm 1.19, pp. 36–37 and Thm 1.21, p. 37"}
**(a), (b): existence and uniqueness.** That $\mu_0$ is well defined and finitely additive on the algebra $\mathcal{A}$ of finite disjoint unions of h-intervals is a bookkeeping check on how two such representations refine each other. That it is a *pre*measure — countably additive whenever the countable disjoint union stays in $\mathcal{A}$ — is the one place compactness enters: the inequality $\mu_0(I) \le \sum_j \mu_0(I_j)$ for $I = \bigsqcup_j I_j$ is proved by shrinking $I = (a,b]$ slightly to a compact $[a+\delta, b]$, enlarging each $I_j = (a_j,b_j]$ slightly to an open $(a_j, b_j + \delta_j)$ with $\sum_j \delta_j < \varepsilon$, extracting a finite subcover and summing the finitely many lengths; the reverse inequality is finite additivity plus monotonicity. This is Proposition 1.15 of :cite[Folland]{work=folland-1999 loc="§1.5, pp. 33–34"}, whose argument we follow.

Applying the extension theorem to this premeasure gives a measure on $\mathcal{M}(\mathcal{A}) = \mathcal{B}_{\mathbb{R}}$ with $m((a,b]) = b-a$, and $\mathbb{R} = \bigcup_{j \in \mathbb{Z}}(j, j+1]$ with each piece of measure $1$ shows $\mu_0$ is $\sigma$-finite, so clause 4 of that theorem makes the extension unique. Carathéodory's theorem gives at the same time the complete measure $m$ on the larger $\sigma$-algebra $\mathcal{L}$ of $m^{*}$-measurable sets, and $\mathcal{L}$ is the completion of $\mathcal{B}_{\mathbb{R}}$ by (d) below. Finally $m(\{x\}) = \lim_{n} m\bigl((x - \tfrac1n, x]\bigr) = \lim_n \tfrac1n = 0$ by continuity from above, and the measures of $(a,b)$, $[a,b]$, $[a,b)$ then all equal $b-a$ because they differ from $(a,b]$ by one or two points.

**(c): outer regularity.** "$\le$" is monotonicity, since any open $U \supseteq E$ has $m(U) \ge m(E)$. For "$\ge$", assume $m(E) < \infty$ (otherwise the right-hand side is $\infty$ too and there is nothing to prove) and let $\varepsilon > 0$. By the definition of $m^{*}$ there are h-intervals $(a_j,b_j]$ covering $E$ with $\sum_j (b_j - a_j) < m(E) + \varepsilon$. Replace each by the open interval $(a_j,\, b_j + \varepsilon 2^{-j})$; the union $U$ of these is open, contains $E$, and by countable subadditivity
$$
m(U) \;\le\; \sum_{j \ge 1}\Bigl(b_j - a_j + \varepsilon 2^{-j}\Bigr) \;<\; m(E) + 2\varepsilon .
$$
Since $\varepsilon$ was arbitrary, the infimum over open $U$ is $m(E)$. The same computation proves that covering by open sets gives the same outer measure as covering by h-intervals, which is the equivalence with the definition of :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 15"}.

**Inner regularity.** Suppose first $E$ is bounded, so $\overline{E}$ is compact. Given $\varepsilon > 0$, apply outer regularity to the set $\overline{E}\setminus E$ (of finite measure, since $\overline{E}$ is bounded) to get an open $U \supseteq \overline{E}\setminus E$ with $m(U) < m(\overline{E}\setminus E) + \varepsilon$, and put $K = \overline{E}\setminus U$. Then $K$ is closed and bounded, hence compact by :ref[the Heine–Borel theorem]{to=found.compactness}; $K \subseteq E$ because every point of $\overline{E}$ outside $E$ lies in $U$; and
$$
m(K) = m(\overline{E}) - m(\overline{E} \cap U) \ge m(\overline{E}) - m(U) > m(\overline{E}) - m(\overline{E}\setminus E) - \varepsilon = m(E) - \varepsilon .
$$
For unbounded $E$, split $E$ into the pieces $E \cap (j, j+1]$, approximate the $j$th from inside to within $\varepsilon 2^{-\lvert j\rvert}$ and take finite unions; $m(E)$ is the limit of the measures of these finite unions by continuity from below. This is Theorem 1.18 of :cite[Folland]{work=folland-1999 loc="§1.5, p. 36"}.

**(d): structure.** Let $E \in \mathcal{L}$ with $m(E) < \infty$. By outer regularity choose open $U_j \supseteq E$ with $m(U_j) < m(E) + 1/j$ and set $V = \bigcap_j U_j$, a $G_\delta$ set containing $E$ with $m(E) \le m(V) \le \inf_j m(U_j) = m(E)$. Since $m(E)$ is finite, $m(V \setminus E) = m(V) - m(E) = 0$, so $E = V \setminus N_1$ with $N_1 = V\setminus E$ null. The case $m(E) = \infty$ needs more care, because a countable union of $G_\delta$ sets need not be $G_\delta$: the open sets have to be united *before* the intersection over tolerances is taken, not after. Cut the line into the unit pieces $E_j = E \cap (j, j+1]$, $j \in \mathbb{Z}$, each of finite measure. Fix $k \ge 1$. Outer regularity, already proved, gives for each $j$ an open $U_{j,k} \supseteq E_j$ with $m(U_{j,k}) < m(E_j) + 2^{-\lvert j\rvert}/k$, and since $m(E_j) < \infty$ this says $m(U_{j,k}\setminus E_j) < 2^{-\lvert j\rvert}/k$. Put $U_k = \bigcup_{j \in \mathbb{Z}} U_{j,k}$, an open set containing $E$. Each $E_j \subseteq E$, so $U_{j,k}\setminus E \subseteq U_{j,k}\setminus E_j$, and countable subadditivity gives
$$
m\bigl(U_k \setminus E\bigr) \;\le\; \sum_{j \in \mathbb{Z}} m\bigl(U_{j,k}\setminus E_j\bigr) \;<\; \frac{1}{k}\sum_{j \in \mathbb{Z}} 2^{-\lvert j\rvert} \;=\; \frac{3}{k} .
$$
Now $V = \bigcap_{k \ge 1} U_k$ is a $G_\delta$ set containing $E$, and $V \setminus E \subseteq U_k \setminus E$ for every $k$, so $m(V\setminus E) \le 3/k$ for every $k$ and therefore $m(V \setminus E) = 0$. Again $E = V \setminus N_1$ with $N_1 = V \setminus E$ null. (:cite[Folland]{work=folland-1999 loc="Exercise 25, p. 39"} leaves this case to the reader; the argument just given is ours.) Applying the result to $E^{c}$ and complementing turns the $G_\delta$ description into the $F_\sigma$ one. Conversely, both descriptions produce members of $\mathcal{L}$, because $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{L}$ and $m$ is complete. In particular every Lebesgue measurable set differs from a Borel set by a null set, so $\mathcal{L}$ is exactly the completion of $\mathcal{B}_{\mathbb{R}}$.

**(e): translations and dilations.** Fix $s$ and define $m_s(E) = m(E+s)$ for $E \in \mathcal{B}_{\mathbb{R}}$; this is well defined because translation maps open intervals to open intervals and therefore maps $\mathcal{B}_{\mathbb{R}}$ onto itself, and it is a measure because translation preserves disjointness and countable unions. On an h-interval, $m_s((a,b]) = (b+s)-(a+s) = b - a = m((a,b])$, so $m_s$ and $m$ are two measures on $\mathcal{B}_{\mathbb{R}}$ extending the same $\sigma$-finite premeasure; by the uniqueness clause they coincide. The same argument applies to $m_r(E) = m(rE)$ with one extra step: on an h-interval $m_r((a,b]) = \lvert r\rvert(b-a)$ for $r \ne 0$, which is $\lvert r\rvert \mu_0$ and not $\mu_0$, so it is the measure $\lvert r\rvert^{-1} m_r$ that extends the premeasure $\mu_0$ and to which the uniqueness clause applies. It gives $\lvert r\rvert^{-1} m_r = m$ on $\mathcal{B}_{\mathbb{R}}$, that is, $m(rE) = \lvert r \rvert m(E)$ for $r \ne 0$; for $r = 0$ both sides vanish, since $0 \cdot E$ is $\{0\}$ or $\varnothing$ and a single point is null, while $\lvert 0\rvert\, m(E) = 0$ under the convention $0 \cdot \infty = 0$. Finally, a set of Lebesgue measure zero is carried to a set of Lebesgue measure zero, so by (d) the whole of $\mathcal{L}$ is preserved. $\square$
:::

:::proof[A set that cannot be measured]{provenance=adapted src="folland-1999:§1.1, pp. 19–20"}
**Step 1: the choice set.** On $[0,1)$ declare $x \sim y$ when $x - y \in \mathbb{Q}$. This is an equivalence relation. Using :ref[the axiom of choice]{to=found.zorn-lemma}, let $N \subseteq [0,1)$ contain exactly one point of each equivalence class.

**Step 2: countably many rotated copies tile $[0,1)$.** Let $R = \mathbb{Q} \cap [0,1)$, a countable set by :ref[countability of the rationals]{to=found.sets-cardinality}. For $r \in R$ put
$$
N_r \;=\; \bigl(N \cap [0, 1-r)\bigr) + r \;\;\cup\;\; \bigl(N \cap [1-r, 1)\bigr) + r - 1 ,
$$
that is, $N$ shifted right by $r$ with the overhanging part brought back by one unit; $N_r \subseteq [0,1)$. Every $x \in [0,1)$ lies in exactly one $N_r$. *Existence*: let $y \in N$ be the chosen representative of the class of $x$; then $x - y \in \mathbb{Q}$, and $r = x-y$ if $x \ge y$, $r = x-y+1$ if $x < y$, lies in $R$ and puts $x$ in $N_r$. *Uniqueness*: if $x \in N_r \cap N_s$ then $x$ comes from a point $y \in N$ with $x - y \in \{r, r-1\}$ and also from a point $z \in N$ with $x - z \in \{s, s-1\}$; then $y - z \in \mathbb{Q}$, so $y \sim z$, so $y = z$ because $N$ meets each class once, and then $r - s \in \{0, \pm 1\} \cap (-1,1) = \{0\}$.

**Step 3: the contradiction.** Suppose $\mu$ on $\mathcal{P}(\mathbb{R})$ is countably additive, translation invariant, and $\mu([0,1)) = 1$. The two pieces of $N$ in step 2 are disjoint and their translates are disjoint, so finite additivity and translation invariance give
$$
\mu(N_r) = \mu\bigl(N \cap [0,1-r)\bigr) + \mu\bigl(N \cap [1-r,1)\bigr) = \mu(N) \qquad\text{for every } r \in R .
$$
By step 2 and countable additivity over the countable index set $R$,
$$
1 \;=\; \mu\bigl([0,1)\bigr) \;=\; \sum_{r \in R}\mu(N_r) \;=\; \sum_{r \in R}\mu(N).
$$
A sum of countably many copies of one number in $[0,\infty]$ is $0$ if that number is $0$ and $+\infty$ otherwise. Neither is $1$, so no such $\mu$ exists.

**Step 4: consequence for $m$.** Lebesgue measure is countably additive on $\mathcal{L}$, satisfies $m(E+s) = m(E)$ by part (e), and $m([0,1)) = 1$ by part (a). If $N$ were in $\mathcal{L}$, then each $N_r$ would be too (translates and unions of measurable sets), and step 3 would run verbatim with $\mu = m$. Hence $N \notin \mathcal{L}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The axiom of choice is used once**, in step 1 of the last proof, and it cannot be avoided: there are models of set theory without choice in which every subset of $\mathbb{R}$ is Lebesgue measurable. So "non-measurable set" is not an object one ever writes down; it is an object whose existence choice asserts. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 14"} motivate restricting the domain by the same kind of phenomenon in higher dimension, the Banach–Tarski paradox, and :cite[Folland]{work=folland-1999 loc="§1.1, p. 20"} records that in $\mathbb{R}^n$ with $n \ge 3$ even *finite* additivity is already inconsistent with congruence invariance and normalisation.
- **Countable additivity is the hypothesis that breaks.** In dimensions $1$ and $2$ there *do* exist finitely additive, translation-invariant extensions of Lebesgue measure to all subsets; what step 3 rules out is the countable version. Dropping countable additivity, however, destroys every convergence theorem of this chapter, which is why we keep it and give up universality of the domain instead.
- **Where $\sigma$-finiteness is used.** Only in clause 4 of the extension theorem, and that is exactly the clause invoked to prove translation invariance in (e). Without it the extension of a premeasure is merely the largest one, and two measures agreeing on the generating algebra may differ.
- **Where finiteness of $m(E)$ is used.** In the structure theorem (d), the step $m(V\setminus E) = m(V) - m(E)$ is a subtraction and needs $m(E) < \infty$; for a general $E$ one must first cut the line into unit pieces, and then assemble the pieces in the right order — open hulls united over the pieces at each tolerance $1/k$, and only the resulting open sets intersected over $k$ — because the class of $G_\delta$ sets is closed under countable intersections but not under countable unions. The same finiteness is why the inner-regularity proof treats bounded sets first.
- **Carathéodory's criterion quantifies over *all* test sets.** Restricting it to, say, open test sets would not do: the point of the criterion is that it is strong enough to force countable additivity with no help from the topology, which is why the same theorem builds Hausdorff measures and product measures. The proof uses the full strength twice — in step 2 with $E$ arbitrary, and in step 5 with the test set $E \cap B_n$.
- **Regularity is a property of this particular outer measure, not of Carathéodory's theorem.** It comes from the fact that the covering family consists of intervals, which can be enlarged to open sets at arbitrarily small cost. An abstract $\mu^{*}$ has no such property.
- **"Null" and "small" are different in three different senses.** A countable set is null but can be dense ($\mathbb{Q}$); an open dense subset of $[0,1]$ can have measure as small as we like; and, as the example below shows, a compact nowhere dense set can have measure as close to $1$ as we like. :cite[Folland]{work=folland-1999 loc="§1.5, p. 38"} makes the same observation with a set built from an enumeration of the rationals.
:::

:::method[Computing or bounding the Lebesgue measure of a set]{provenance=original}
1. **Upper bound: cover it.** Exhibit a countable family of intervals whose union contains the set; $m^{*}$ is below the total length, by definition. This alone proves many sets null — for a countable set, put an interval of length $\varepsilon 2^{-j}$ around the $j$th point and conclude $m \le \varepsilon$ for every $\varepsilon$.
2. **Lower bound: fill it.** Exhibit a compact (or just measurable) subset of known measure; inner regularity (c) says nothing better is being missed.
3. **Build it as a monotone limit.** If the set is defined by an infinite process — remove, subdivide, remove again — write it as $\bigcap_n K_n$ with $K_n$ decreasing and $m(K_0) < \infty$, then use continuity from above: $m(K) = \lim_n m(K_n)$. Verify the finiteness hypothesis; for a construction inside $[0,1]$ it is automatic.
4. **Use the transformation rules before computing.** An affine image costs only a factor: $m(rE + s) = \lvert r\rvert m(E)$ by (e). Reduce to a standard set first.
5. **Decide measurability structurally, not by the Carathéodory criterion.** In practice one never verifies the splitting identity: one shows the set is Borel (built from intervals by countably many unions, intersections and complements), or that it differs from a Borel set by a subset of a null set, which suffices by (d) and completeness.
6. **If the answer must be a number, check it two ways** — once by the covering bound of step 1 and once by the filling bound of step 2 — and confirm they meet.
:::

:::example[A compact, nowhere dense subset of [0,1] of measure exactly 1/2]{provenance=original}
We build a "fat Cantor set". Start with $K_0 = [0,1]$. Having obtained $K_{n-1}$ as a disjoint union of $2^{\,n-1}$ closed intervals of common length $\ell_{n-1}$, delete from each of them the open middle interval of length $4^{-n}$; what remains is $K_n$, a disjoint union of $2^{n}$ closed intervals of common length
$$
\ell_n = \frac{\ell_{n-1} - 4^{-n}}{2}, \qquad \ell_0 = 1 .
$$
Put $K = \bigcap_{n \ge 0} K_n$. (The middle-thirds Cantor set is the same construction with $4^{-n}$ replaced by $\ell_{n-1}/3$.)

**Step 1: the construction never runs out of room.** We claim $\ell_n = \dfrac{2^{n}+1}{2^{\,2n+1}}$. It holds at $n=0$, where it reads $\ell_0 = 2/2 = 1$. If it holds at $n-1$ then
$$
\ell_{n-1} - 4^{-n} = \frac{2^{\,n-1}+1}{2^{\,2n-1}} - \frac{1}{2^{\,2n}} = \frac{2\bigl(2^{\,n-1}+1\bigr) - 1}{2^{\,2n}} = \frac{2^{n}+1}{2^{\,2n}},
$$
and halving gives the claim at $n$. In particular $\ell_n > 4^{-(n+1)} > 0$, so each deleted middle interval genuinely fits inside its host interval and the construction is legitimate. Numerically $\ell_1 = 3/8$, $\ell_2 = 5/32 = 0.15625$, $\ell_3 = 9/128 = 0.0703125$.

**Step 2: the measure of each stage.** $K_n$ is a disjoint union of $2^{n}$ intervals of length $\ell_n$, so by finite additivity and part (a),
$$
m(K_n) = 2^{n}\ell_n = \frac{2^{n}\bigl(2^{n}+1\bigr)}{2^{\,2n+1}} = \frac12 + \frac{1}{2^{\,n+1}} .
$$
Thus $m(K_0) = 1$, $m(K_1) = 3/4$, $m(K_2) = 5/8$, $m(K_3) = 9/16 = 0.5625$.

**Step 3: the measure of the limit.** The $K_n$ decrease and $m(K_0) = 1 < \infty$, so continuity from above applies and
$$
m(K) = \lim_{n \to \infty} m(K_n) = \lim_{n\to\infty}\Bigl(\frac12 + 2^{-(n+1)}\Bigr) = \tfrac12 .
$$
**Cross-check by the removed set.** At stage $n$ we delete $2^{\,n-1}$ intervals of length $4^{-n}$, a total length of $2^{\,n-1}4^{-n} = 2^{-(n+1)}$. The deleted intervals over all stages are pairwise disjoint, so countable additivity gives $m([0,1]\setminus K) = \sum_{n \ge 1}2^{-(n+1)} = \tfrac12$, and $m(K) = 1 - \tfrac12 = \tfrac12$. The two computations agree.

**Step 4: $K$ is compact and nowhere dense.** Each $K_n$ is a finite union of closed intervals, hence closed, so $K$ is closed and bounded, hence compact. If $K$ contained an interval of length $\delta > 0$, that interval would lie in every $K_n$ and so inside one of its component intervals, forcing $\delta \le \ell_n \to 0$: impossible. So $K$ has empty interior, and being closed it is nowhere dense. Its complement in $[0,1]$ is therefore open and dense, with measure $1/2$ as well.

**What the example shows.** A set can be topologically negligible — closed with empty interior, containing no interval at all — and still carry half the length of $[0,1]$. Outer regularity (c) is not contradicted: every open $U \supseteq K$ has $m(U) \ge 1/2$, and indeed the sets $K_n$ with their deleted intervals slightly fattened give open supersets of measure as close to $1/2$ as we please. By contrast the middle-thirds Cantor set has $m = \lim_n (2/3)^{n} = 0$, as :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.4, p. 21"} record, although it is uncountable: measure zero and countability are unrelated.
:::

:::application{provenance=original}
**The default reference measure.** Every integral written $\int f(x)\,dx$ in physics is an integral against Lebesgue measure, and the properties above are the fine print. Translation invariance (e) is why a free particle's probability density may be shifted without changing the normalisation, and the scaling $m(rE) = \lvert r\rvert m(E)$ (with its $\lvert r \rvert^{n}$ analogue in $\mathbb{R}^n$) is the Jacobian of a dilation, the simplest case of the change-of-variables formula. Completeness is what lets one say "redefine $f$ on a set of measure zero" without leaving the theory, and it is listed as part of the package by :cite[Evans]{work=evans-2010 loc="Appendix E, Thm 1(iv), p. 685"}.

**Regularity is what makes computation possible.** No one evaluates $m(E)$ from the Carathéodory criterion. Part (c) says that any measurable set can be squeezed between an open set and a compact set of nearly the same measure, which is the theoretical licence behind every numerical quadrature on an irregular domain, behind Monte Carlo volume estimation, and behind the approximation of a measurable set by a finite union of intervals or boxes used in mesh generation.

**Lebesgue–Stieltjes measures and spectra.** The same construction run with a general increasing right-continuous $F$ in place of $F(x) = x$ gives the Lebesgue–Stieltjes measure $\mu_F$. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.4, Examples 1–3, pp. 20–21"} give the three archetypes: if $\alpha$ is continuously differentiable then $d\mu_\alpha = \alpha'(x)\,dx$ is a density times Lebesgue measure; if $\alpha$ is the step function at the origin then $\mu_\alpha$ is the Dirac measure, which gives mass $1$ to any set containing $0$; and if $\alpha$ is the Cantor function then $\mu_\alpha$ is continuous (no atoms) yet lives entirely on the Cantor set, a set of Lebesgue measure zero. These three are exactly the absolutely continuous, pure point and singular continuous pieces into which the spectral measure of a self-adjoint operator decomposes, and they correspond physically to scattering states, bound states and the exotic intermediate behaviour found in quasiperiodic systems.

**Positive measure without interior.** The fat Cantor set of the example is not a curiosity. Sets that are nowhere dense yet of positive measure are exactly what appears in Kolmogorov–Arnold–Moser theory, where the invariant tori surviving a small perturbation form such a set: the surviving set has positive measure, so a randomly chosen initial condition is likely to be quasiperiodic, but it contains no open set, so no initial condition is *known* to be quasiperiodic from a finite-precision measurement. Keeping "measure-theoretically large" and "topologically large" apart is the whole content of that distinction.

**Why some things cannot be assigned a probability.** The non-measurable set is the reason a probability space carries a $\sigma$-field as part of its data rather than the full power set. In applications this is not a technicality to be waved away but the statement that the model specifies, in advance, which questions have answers.
:::
