---
id: measure.sigma-algebras-measures
title: Sigma-algebras and measures
kind: definition
level: core
summary: Gives the two objects every integration theory rests on — a sigma-algebra of sets we agree to measure and a countably additive measure on it — together with the monotonicity, subadditivity and continuity rules that let you pass to the limit inside a measure, and the vocabulary of null sets and "almost everywhere".
prereqs: [found.sets-cardinality, found.topological-spaces]
provenance: adapted
sources:
  - work: folland-1999
    loc: "Ch. 1, §1.2 (sigma-algebras, generated and Borel sigma-algebras, Prop. 1.2), pp. 21–23; §1.3 (measures, Thm 1.8, null sets, completeness, Thm 1.9), pp. 24–27; Exercise 11, p. 27"
    pages: "21-27"
    role: definitions of algebra, sigma-algebra, generated and Borel sigma-algebra; the list of generators of the Borel sigma-algebra of the line; definition of a measure, finite and sigma-finite measures, weighted counting measures; the four basic properties (monotonicity, subadditivity, continuity from below and from above) and the route of their proofs; the disjointification device; null sets, almost everywhere, complete measures and the completion; the counting-measure counterexample to continuity from above; the criterion that a finitely additive set function continuous from below is a measure
  - work: reed-simon-1980
    loc: "§I.3 (the Borel sets of R and the motivation for restricting the domain of a measure), pp. 14–15"
    pages: "14-15"
    role: the generators-free characterisation of the Borel sets of the line as the smallest family closed under complements and countable unions that contains every open interval; the argument that such a smallest family exists; the reason the domain of a measure cannot be all of the power set
  - work: grimmett-stirzaker-2020
    loc: "§1.2, Definition (1.2.5) (sigma-field) and Examples (1.2.6)–(1.2.8), pp. 3–4; §1.3, Definition (1.3.1) (probability measure) and the paragraph defining a measure, p. 5; §6.13, Definition (6.13.1) (the spatial Poisson process, on the Borel sigma-field of R^d), p. 319"
    pages: "3-5, 319"
    role: the probabilists' sigma-field axioms and vocabulary; the definition of a probability space; the convention that a measure takes values in [0, infinity); the spatial Poisson process as a model whose data include the choice of sigma-field
  - work: evans-2010
    loc: "Appendix E, §E.1, Definition (sigma-algebra) and Theorem 1 (existence of Lebesgue measure), pp. 684–685"
    pages: "684-685"
    role: the three-clause form of the sigma-algebra axioms used in the PDE literature, and the statement that Lebesgue measure is countably additive and complete
---

:::definition[Algebras, sigma-algebras, Borel sets]{provenance=adapted src="folland-1999:§1.2, pp. 21–22; reed-simon-1980:§I.3, p. 14; evans-2010:Appendix E.1, p. 684"}
Let $X$ be a non-empty set and $\mathcal{P}(X)$ the collection of all its subsets.

**Algebra.** A collection $\mathcal{A} \subseteq \mathcal{P}(X)$ is an **algebra** on $X$ if it is non-empty, the complement $E^{c} = X \setminus E$ of each of its members is again a member, and the union of any finite list of its members is a member.

**Sigma-algebra.** An algebra $\mathcal{M}$ is a **$\sigma$-algebra** if it is in addition closed under the union of any *sequence* of its members: $E_1, E_2, \dots \in \mathcal{M}$ forces $\bigcup_{j \ge 1} E_j \in \mathcal{M}$. The pair $(X, \mathcal{M})$ is a **measurable space** and the members of $\mathcal{M}$ are the **measurable sets**.

Three facts come free from the two axioms. Pick any $E \in \mathcal{A}$, which is possible because $\mathcal{A}$ is non-empty. Closure under finite unions puts $X = E \cup E^{c}$ into $\mathcal{A}$, and closure under complements then puts $\varnothing = X^{c}$ into $\mathcal{A}$. De Morgan's law $\bigcap_j E_j = \bigl(\bigcup_j E_j^{c}\bigr)^{c}$ turns closure under unions into closure under intersections, finite for an algebra and countable for a $\sigma$-algebra. And $E \setminus F = E \cap F^{c}$, so both are closed under differences.

**Generated $\sigma$-algebra.** An arbitrary intersection of $\sigma$-algebras on $X$ is again one, because each axiom is a condition that must hold in every member of the family. Since $\mathcal{P}(X)$ is a $\sigma$-algebra containing anything, for every $\mathcal{E} \subseteq \mathcal{P}(X)$ the intersection of all $\sigma$-algebras that contain $\mathcal{E}$ is the smallest $\sigma$-algebra containing $\mathcal{E}$. We write it $\mathcal{M}(\mathcal{E})$ and call it the $\sigma$-algebra **generated** by $\mathcal{E}$. Monotonicity is immediate: $\mathcal{E} \subseteq \mathcal{M}(\mathcal{F})$ implies $\mathcal{M}(\mathcal{E}) \subseteq \mathcal{M}(\mathcal{F})$, since $\mathcal{M}(\mathcal{F})$ is then one of the $\sigma$-algebras over which the intersection defining $\mathcal{M}(\mathcal{E})$ is taken.

**Borel sets.** If $X$ carries a topology — a metric space, for instance, as in :ref[topological and metric spaces]{to=found.topological-spaces} — the $\sigma$-algebra generated by the open subsets of $X$ is the **Borel $\sigma$-algebra** $\mathcal{B}_X$, and its members are the **Borel sets**. Complements turn open into closed, so $\mathcal{B}_X$ is equally the $\sigma$-algebra generated by the closed sets. It contains every countable intersection of open sets (a $G_\delta$ set), every countable union of closed sets (an $F_\sigma$ set), and the whole hierarchy obtained by alternating the two operations. On the line, :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 14"} take as the definition the equivalent description: $\mathcal{B}_{\mathbb{R}}$ is the smallest family of subsets of $\mathbb{R}$ that is closed under complements and countable unions and contains every open interval.

**Disjointification.** Given any sequence $E_1, E_2, \dots$ in a $\sigma$-algebra, put
$$
F_1 = E_1, \qquad F_k = E_k \setminus \bigl(E_1 \cup \dots \cup E_{k-1}\bigr) \quad (k \ge 2).
$$
The $F_k$ lie in the $\sigma$-algebra, they are pairwise disjoint, $F_k \subseteq E_k$, and $\bigcup_{k \le n} F_k = \bigcup_{k \le n} E_k$ for every $n$, hence also in the limit. This device, which :cite[Folland]{work=folland-1999 loc="§1.2, p. 21"} recommends remembering, converts any countable union into a disjoint one and is used three times below.
:::

:::definition[Measures, null sets, completeness]{provenance=adapted src="folland-1999:§1.3, pp. 24–27"}
Let $(X, \mathcal{M})$ be a measurable space. A **measure** on it is a map
$$
\mu : \mathcal{M} \longrightarrow [0, \infty]
$$
such that

1. $\mu(\varnothing) = 0$, and
2. (**countable additivity**) $\mu\bigl(\bigcup_{j \ge 1} E_j\bigr) = \sum_{j \ge 1} \mu(E_j)$ for every sequence $E_1, E_2, \dots$ of pairwise disjoint members of $\mathcal{M}$.

The triple $(X, \mathcal{M}, \mu)$ is a **measure space**. The series in (2) has non-negative terms, so it either converges or diverges to $+\infty$; in both cases its value is independent of the order of summation, which is what makes (2) a legitimate demand on an unordered union. Padding a finite disjoint list $E_1, \dots, E_n$ with $E_j = \varnothing$ for $j > n$ shows that (2) implies **finite additivity**. A map obeying (1) and finite additivity but not necessarily (2) is a **finitely additive measure**; the gap between the two is real and is the subject of the remark below.

**Sizes.** $\mu$ is **finite** if $\mu(X) < \infty$, and **$\sigma$-finite** if $X = \bigcup_{j \ge 1} E_j$ for some $E_j \in \mathcal{M}$ with every $\mu(E_j) < \infty$. A finite measure with $\mu(X) = 1$ is a **probability measure**, and $(X, \mathcal{M}, \mu)$ is then a probability space, the setting of :ref[probability spaces]{to=prob.probability-spaces}.

**Null sets.** A set $N \in \mathcal{M}$ with $\mu(N) = 0$ is a **null set**. A property of the points of $X$ holds **almost everywhere** (a.e., or $\mu$-a.e.) if the set of points where it fails is contained in a null set. Subadditivity, proved below, says that a countable union of null sets is null, so countably many a.e. statements may be used at once.

**Completeness.** If $\mu(N) = 0$ and $F \subseteq N$, monotonicity gives $\mu(F) = 0$ *provided* $F \in \mathcal{M}$ — and that proviso need not hold. A measure is **complete** when every subset of every null set is measurable. Every measure can be completed: let $\mathcal{N}$ be the null sets of $\mu$ and
$$
\overline{\mathcal{M}} = \bigl\{\, E \cup F \;:\; E \in \mathcal{M},\ F \subseteq N \text{ for some } N \in \mathcal{N} \,\bigr\} .
$$
Then $\overline{\mathcal{M}}$ is a $\sigma$-algebra and $\overline{\mu}(E \cup F) = \mu(E)$ defines the unique extension of $\mu$ to a complete measure on it :cite[]{work=folland-1999 loc="Thm 1.9, pp. 26–27"}. We call $\overline{\mu}$ the **completion** of $\mu$.
:::

:::note[Conventions differ]{provenance=adapted src="grimmett-stirzaker-2020:§1.2, Def. (1.2.5), p. 3, and §1.3, Def. (1.3.1) and the following paragraph, p. 5; evans-2010:Appendix E.1, p. 684; folland-1999:§1.3, p. 24"}
Three presentations of the same objects appear in the books cited here, and the differences are worth knowing before comparing formulas across fields.

- **Ours, following :cite[Folland]{work=folland-1999 loc="§1.2, p. 21 and §1.3, p. 24"}**: a $\sigma$-algebra is a non-empty collection closed under complements and countable unions, and a measure takes values in the extended half-line $[0, \infty]$.
- **Probability.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Def. (1.2.5), p. 3"} say *$\sigma$-field* rather than $\sigma$-algebra and list the axioms as $\varnothing \in \mathcal{F}$, closure under countable unions, and closure under complements; this is the same class of collections, since $\varnothing \in \mathcal{F}$ is exactly what rules out the empty collection. For the measure they write :cite[]{work=grimmett-stirzaker-2020 loc="§1.3, p. 5"} that a measure is a function $\mu : \mathcal{F} \to [0, \infty)$ with $\mu(\varnothing) = 0$ that is countably additive, so that in their convention the value $+\infty$ is excluded; they immediately specialise to probability measures, for which the distinction is invisible. **We follow Folland and allow the value $+\infty$**, because Lebesgue measure on $\mathbb{R}$ and counting measure on an infinite set are both wanted below and neither is finite.
- **Partial differential equations.** :cite[Evans]{work=evans-2010 loc="Appendix E.1, p. 684"} states the axioms for $\mathcal{M} \subseteq \mathcal{P}(\mathbb{R}^n)$ as: $\varnothing$ and $\mathbb{R}^n$ belong to $\mathcal{M}$; $\mathcal{M}$ is closed under complements; and $\mathcal{M}$ is closed under countable unions *and* countable intersections. The last clause is redundant given the other two, by De Morgan, but it is harmless and it is what a reader of the PDE literature will meet.
:::

:::statement[Generators of the Borel sigma-algebra of the line]{provenance=adapted src="folland-1999:Prop. 1.2, p. 22"}
$\mathcal{B}_{\mathbb{R}}$ is generated by each one of the following eight families of intervals and rays:
$$
\begin{aligned}
&\mathcal{E}_1 = \{(a,b)\}, &\quad &\mathcal{E}_2 = \{[a,b]\}, &\quad &\mathcal{E}_3 = \{(a,b]\}, &\quad &\mathcal{E}_4 = \{[a,b)\}, \\
&\mathcal{E}_5 = \{(a,\infty)\}, & &\mathcal{E}_6 = \{(-\infty,a)\}, & &\mathcal{E}_7 = \{[a,\infty)\}, & &\mathcal{E}_8 = \{(-\infty,a]\},
\end{aligned}
$$
where $a < b$ run over the reals in the first four families and $a$ runs over the reals in the last four.
:::

:::statement[The four rules for computing with a measure]{provenance=adapted src="folland-1999:Thm 1.8, pp. 25–26"}
Let $(X, \mathcal{M}, \mu)$ be a measure space.

a. **Monotonicity.** An inclusion $E \subseteq F$ between members of $\mathcal{M}$ forces $\mu(E) \le \mu(F)$.
b. **Countable subadditivity.** If $E_1, E_2, \dots \in \mathcal{M}$ — *not* assumed disjoint — then
   $$
   \mu\Bigl(\bigcup_{j \ge 1} E_j\Bigr) \;\le\; \sum_{j \ge 1} \mu(E_j).
   $$
c. **Continuity from below.** If $E_1 \subseteq E_2 \subseteq \cdots$ all lie in $\mathcal{M}$ then $\mu\bigl(\bigcup_{j \ge 1} E_j\bigr) = \lim_{j \to \infty} \mu(E_j)$.
d. **Continuity from above.** If $E_1 \supseteq E_2 \supseteq \cdots$ all lie in $\mathcal{M}$ **and $\mu(E_1) < \infty$**, then $\mu\bigl(\bigcap_{j \ge 1} E_j\bigr) = \lim_{j \to \infty} \mu(E_j)$.
:::

:::statement[Continuity from below as a test for countable additivity]{label="Lemma" provenance=adapted src="folland-1999:Exercise 11, p. 27"}
Let $\mu : \mathcal{M} \to [0,\infty]$ satisfy $\mu(\varnothing) = 0$ and be finitely additive. Then $\mu$ is a measure if and only if it is continuous from below in the sense of (c) above. If moreover $\mu(X) < \infty$, then $\mu$ is a measure if and only if it is continuous from above in the sense of (d). This is the form in which :cite[Folland]{work=folland-1999 loc="Exercise 11, p. 27"} poses it; the proof below shows that in the finite case the second test may be applied to sequences decreasing to $\varnothing$ alone, and that weaker version is the one the method uses.
:::

:::idea{provenance=original}
Every one of the four rules is countable additivity applied to a cleverly chosen disjoint family, so the only real work is choosing the family.

For monotonicity, split $F$ into $E$ and the rest. For subadditivity, replace the overlapping $E_j$ by the disjointified $F_j$ of the definition block: the union is unchanged, the $F_j$ are disjoint so additivity applies exactly, and $F_j \subseteq E_j$ costs us only an inequality. For continuity from below, the successive differences $E_j \setminus E_{j-1}$ of an increasing sequence are already disjoint, and the partial sums of their measures are exactly the numbers $\mu(E_j)$, so a limit of measures becomes the sum of a series. Continuity from above is the previous case applied to the complements inside $E_1$ — and subtracting $\mu(E_j)$ from $\mu(E_1)$ is meaningful only when $\mu(E_1)$ is finite, which is precisely where that hypothesis enters.

For the Borel generators the idea is that each family is sandwiched between the others modulo countable operations: a half-open interval is a countable intersection of open ones, an open interval is a countable union of closed ones, and a ray is a countable union of intervals. Monotonicity of $\mathcal{E} \mapsto \mathcal{M}(\mathcal{E})$ then closes the circle.
:::

:::proof[The four rules]{provenance=adapted src="folland-1999:Thm 1.8, pp. 25–26"}
**(a) Monotonicity.** $F$ is the disjoint union of $E$ and $F \setminus E$, both in $\mathcal{M}$. Finite additivity gives $\mu(F) = \mu(E) + \mu(F \setminus E)$, and the second term is $\ge 0$ because $\mu$ takes values in $[0,\infty]$. Hence $\mu(E) \le \mu(F)$.

**(b) Subadditivity.** Disjointify: let $F_1 = E_1$ and $F_k = E_k \setminus (E_1 \cup \dots \cup E_{k-1})$. As recorded in the definition block, the $F_k$ are disjoint members of $\mathcal{M}$ with $F_k \subseteq E_k$ and the same total union. Countable additivity applies to the $F_k$, and monotonicity — part (a), with the inclusion $F_k \subseteq E_k$ — bounds each term:
$$
\mu\Bigl(\bigcup_{k \ge 1} E_k\Bigr) = \mu\Bigl(\bigcup_{k \ge 1} F_k\Bigr) = \sum_{k \ge 1}\mu(F_k) \le \sum_{k \ge 1}\mu(E_k).
$$

**(c) Continuity from below.** Set $E_0 = \varnothing$ and $D_j = E_j \setminus E_{j-1}$ for $j \ge 1$. These are measurable, and they are disjoint: if $i < j$ then $D_i \subseteq E_i \subseteq E_{j-1}$ while $D_j$ misses $E_{j-1}$. Because the sequence increases, $\bigcup_{j \le n} D_j = E_n$ for each $n$ and $\bigcup_{j \ge 1} D_j = \bigcup_{j \ge 1} E_j$. Countable additivity, then finite additivity, give
$$
\mu\Bigl(\bigcup_{j \ge 1} E_j\Bigr) = \sum_{j \ge 1}\mu(D_j) = \lim_{n \to \infty}\sum_{j = 1}^{n}\mu(D_j) = \lim_{n \to \infty}\mu(E_n),
$$
the middle equality being the definition of the sum of a series.

**(d) Continuity from above.** Put $G_j = E_1 \setminus E_j$. Since the $E_j$ decrease, the $G_j$ increase, and
$$
\bigcup_{j \ge 1} G_j = E_1 \setminus \bigcap_{j \ge 1} E_j .
$$
By (c), $\mu\bigl(E_1 \setminus \bigcap_j E_j\bigr) = \lim_j \mu(G_j)$. Now use finite additivity on the two disjoint decompositions $E_1 = E_j \cup G_j$ and $E_1 = \bigl(\bigcap_j E_j\bigr) \cup \bigl(E_1 \setminus \bigcap_j E_j\bigr)$:
$$
\mu(E_1) = \mu(E_j) + \mu(G_j), \qquad
\mu(E_1) = \mu\Bigl(\bigcap_{j\ge1} E_j\Bigr) + \lim_{j \to \infty}\mu(G_j).
$$
**Here the hypothesis $\mu(E_1) < \infty$ is used**: it makes every $\mu(E_j)$ and $\mu(G_j)$ finite, so the first identity may be rearranged as $\mu(G_j) = \mu(E_1) - \mu(E_j)$ and the subtraction is an ordinary one between real numbers. Substituting into the second identity and cancelling the finite number $\mu(E_1)$,
$$
\mu\Bigl(\bigcap_{j \ge 1} E_j\Bigr) = \mu(E_1) - \lim_{j \to \infty}\bigl(\mu(E_1) - \mu(E_j)\bigr) = \lim_{j \to \infty}\mu(E_j). \qquad \square
$$
:::

:::proof[The lemma]{provenance=adapted src="folland-1999:Exercise 11, p. 27"}
*Only if.* A measure is finitely additive and satisfies (c) and (d) by the previous proof.

*If (continuity from below).* Let $A_1, A_2, \dots \in \mathcal{M}$ be disjoint and put $E_n = A_1 \cup \dots \cup A_n$. The $E_n$ increase to $\bigcup_j A_j$, so continuity from below and then finite additivity give
$$
\mu\Bigl(\bigcup_{j \ge 1} A_j\Bigr) = \lim_{n \to \infty}\mu(E_n) = \lim_{n \to \infty}\sum_{j=1}^{n}\mu(A_j) = \sum_{j \ge 1}\mu(A_j),
$$
which is countable additivity.

*If (continuity from above, $\mu(X) < \infty$).* With $A_j$ and $E_n$ as before, the sets $R_n = \bigl(\bigcup_{j\ge1}A_j\bigr)\setminus E_n$ decrease, and their intersection is empty because each point of the union lies in some $A_j$ and hence in $E_n$ for all $n \ge j$. Finiteness of $\mu$ makes $\mu(R_1) < \infty$, so continuity from above gives $\mu(R_n) \to \mu(\varnothing) = 0$. Finite additivity splits $\bigcup_j A_j = E_n \cup R_n$, so $\sum_{j=1}^{n}\mu(A_j) = \mu\bigl(\bigcup_j A_j\bigr) - \mu(R_n) \to \mu\bigl(\bigcup_j A_j\bigr)$.

*What the last paragraph actually used.* Continuity from above entered only through the one sequence $R_n$, and that sequence decreases to $\varnothing$. So when $\mu(X) < \infty$ the test may be weakened to: $E_1 \supseteq E_2 \supseteq \cdots$ with $\bigcap_j E_j = \varnothing$ implies $\mu(E_j) \to 0$. Clause (d) contains this special case, so the weakened criterion is still equivalent to being a measure; it is the form used in step 4 of the method below. $\square$
:::

:::proof[Generators of the Borel sigma-algebra]{provenance=adapted src="folland-1999:Prop. 1.2, p. 22"}
Write $\mathcal{M}_i = \mathcal{M}(\mathcal{E}_i)$. We show $\mathcal{M}_i \subseteq \mathcal{B}_{\mathbb{R}}$ for every $i$, and $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{M}_i$ for every $i$.

**Step 1: every generator is Borel.** The members of $\mathcal{E}_1, \mathcal{E}_5, \mathcal{E}_6$ are open and the members of $\mathcal{E}_2, \mathcal{E}_7, \mathcal{E}_8$ are closed, so all six families sit inside $\mathcal{B}_{\mathbb{R}}$. For the half-open intervals, write
$$
(a,b] = \bigcap_{n \ge 1}\Bigl(a,\ b + \tfrac1n\Bigr), \qquad
[a,b) = \bigcap_{n \ge 1}\Bigl(a - \tfrac1n,\ b\Bigr),
$$
countable intersections of open sets, hence Borel. By monotonicity of the generation operator, $\mathcal{M}_i \subseteq \mathcal{B}_{\mathbb{R}}$ for $i = 1, \dots, 8$.

**Step 2: $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{M}_1$.** Every open $U \subseteq \mathbb{R}$ is a countable union of open intervals: for each $x \in U$ choose rationals $p < x < q$ with $(p,q) \subseteq U$, and note that there are only countably many pairs of rationals, so the intervals so chosen form a countable family whose union is $U$. (Countability of $\mathbb{Q} \times \mathbb{Q}$ is :ref[the standard counting argument]{to=found.sets-cardinality}.) Hence every open set lies in $\mathcal{M}_1$, and therefore $\mathcal{B}_{\mathbb{R}} = \mathcal{M}(\text{open sets}) \subseteq \mathcal{M}_1$.

**Step 3: every open interval lies in each $\mathcal{M}_i$.** This is what remains: if $(a,b) \in \mathcal{M}_i$ for all $a<b$, then $\mathcal{M}_1 \subseteq \mathcal{M}_i$ by monotonicity of the generation operator, and step 2 then gives $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{M}_i$.

*The bounded families.* For $a < b$, with $n$ running over the integers large enough that $a + \frac1n < b - \frac1n$,
$$
(a,b) = \bigcup_{n}\Bigl[a + \tfrac1n,\ b - \tfrac1n\Bigr]
     = \bigcup_{n}\Bigl(a,\ b - \tfrac1n\Bigr]
     = \bigcup_{n}\Bigl[a + \tfrac1n,\ b\Bigr),
$$
three countable unions, which settle $\mathcal{E}_2$, $\mathcal{E}_3$ and $\mathcal{E}_4$.

*The ray families.* Here $(a,b) = (a,\infty) \cap (-\infty,b)$, so it is enough that each of $\mathcal{M}_5, \dots, \mathcal{M}_8$ contain **both** kinds of unbounded ray. Four identities, each a single complement or a single countable union, move between the four kinds:
$$
(-\infty,a] = \bigl((a,\infty)\bigr)^{c}, \quad
(-\infty,a) = \bigcup_{n}\Bigl(-\infty,\ a - \tfrac1n\Bigr], \quad
[a,\infty) = \bigl((-\infty,a)\bigr)^{c}, \quad
(a,\infty) = \bigcup_{n}\Bigl[a + \tfrac1n,\ \infty\Bigr).
$$
Applied in this cyclic order they carry each family to the next, and each $\sigma$-algebra $\mathcal{M}_i$ is closed under both operations, so at most three steps around the cycle are needed in each case:
$\mathcal{M}_5$ starts with $(a,\infty)$ and acquires $(-\infty,a]$, then $(-\infty,a)$;
$\mathcal{M}_8$ starts with $(-\infty,a]$ and acquires $(-\infty,a)$, then $[a,\infty)$, then $(a,\infty)$;
$\mathcal{M}_6$ starts with $(-\infty,a)$ and acquires $[a,\infty)$, then $(a,\infty)$;
$\mathcal{M}_7$ starts with $[a,\infty)$ and acquires $(a,\infty)$, and $(-\infty,a) = \bigl([a,\infty)\bigr)^{c}$ directly.
Each of the four therefore contains every $(a,\infty)$ and every $(-\infty,b)$, hence every $(a,b)$.

Combining, each $\mathcal{M}_i$ contains all open intervals, so $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{M}_i$ by the first paragraph of this step. With step 1 this gives $\mathcal{M}_i = \mathcal{B}_{\mathbb{R}}$ throughout. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Countability, not arbitrary size, in the $\sigma$-algebra axiom.** The axioms permit sequences of sets, nothing larger. They have to: every subset of $\mathbb{R}$ is a union of singletons, and singletons are Borel, so a "$\sigma$-algebra" closed under arbitrary unions and containing the singletons would be all of $\mathcal{P}(\mathbb{R})$ — and no useful translation-invariant measure lives there, as :ref[the construction of Lebesgue measure]{to=measure.lebesgue-measure} shows. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 14"} make the same point from the Banach–Tarski paradox: some family of sets smaller than the power set must be chosen.
- **Countable additivity is strictly stronger than finite additivity.** :cite[Folland]{work=folland-1999 loc="§1.3, p. 25"} gives the example: on an infinite $X$ with $\mathcal{M} = \mathcal{P}(X)$, setting $\mu(E) = 0$ for finite $E$ and $\mu(E) = \infty$ for infinite $E$ produces a finitely additive measure that is not a measure. For $X = \mathbb{N}$ it fails countable additivity badly: $\mathbb{N}$ is the disjoint union of its singletons, so the right-hand side of (2) is $0$ while the left-hand side is $\infty$. By the lemma, what this $\mu$ lacks is continuity from below, and indeed $\mu(\{1,\dots,n\}) = 0$ for every $n$ while $\mu(\mathbb{N}) = \infty$.
- **$\mu(E_1) < \infty$ in continuity from above cannot be dropped.** Let $\nu$ be counting measure on $\mathbb{N}$, so $\nu(E)$ is the number of elements of $E$, and let $E_j = \{n \in \mathbb{N} : n \ge j\}$. The $E_j$ decrease with empty intersection, yet $\nu(E_j) = \infty$ for every $j$, so $\lim_j \nu(E_j) = \infty \ne 0 = \nu(\varnothing)$ :cite[]{work=folland-1999 loc="§1.3, p. 26"}. The proof above breaks at exactly one step: the rearrangement $\mu(G_j) = \mu(E_1) - \mu(E_j)$ is not available when $\mu(E_1) = \infty$. It is enough to assume $\mu(E_{j_0}) < \infty$ for some single $j_0$, since one may discard the first $j_0 - 1$ sets without changing the intersection.
- **Continuity from below needs no finiteness at all**, because nothing is subtracted; both sides may be $+\infty$ together.
- **Disjointness in (2), and only there.** Subadditivity (b) is the price paid for dropping it, and the inequality in (b) really can be strict: under Lebesgue measure, $E_1 = E_2 = [0,1]$ with $E_j = \varnothing$ for $j \ge 3$ give $1 < 2$. Set-theoretic overlap by itself is not what causes this. The intervals $[0,1]$ and $[1,2]$ meet, but in a single point, which is null, and both sides equal $2$; and even a fat overlap is invisible if some set in the family is infinite, as $[0,1], [0,1], \mathbb{R}$ shows, where both sides are $+\infty$. What the disjointification in the proof of (b) does show is this: $E_k$ is the disjoint union of $F_k$ and $E_k \cap (E_1 \cup \dots \cup E_{k-1})$, so $\mu(E_k) = \mu(F_k) + \mu\bigl(E_k \cap (E_1 \cup \dots \cup E_{k-1})\bigr)$. Hence if every such overlap is null the inequality is an equality; and if $\sum_j \mu(E_j) < \infty$ while some two of the sets meet in a set of positive measure, then every term is finite and at least one drops strictly, so the inequality is strict.
- **Completeness is not automatic and is not free.** The Borel $\sigma$-algebra of $\mathbb{R}$ with Lebesgue measure is *not* complete: the Cantor set is Borel and null, but it has subsets that are not Borel (there are $2^{\mathfrak{c}}$ subsets of the Cantor set and only $\mathfrak{c}$ Borel sets). Completing it is what produces the Lebesgue measurable sets. The cost is that the completed $\sigma$-algebra depends on $\mu$, so "measurable" stops being a property of the set alone; this is why composition of measurable functions misbehaves in :ref[measurable functions]{to=measure.measurable-functions}.
- **Why $[0,\infty]$ and not $[0,\infty)$.** Allowing the value $+\infty$ is what lets a single framework hold Lebesgue measure on the line, counting measure on an infinite set and the measures appearing in :ref[the Radon–Nikodym theorem]{to=measure.radon-nikodym}. The price is the usual care with $\infty - \infty$, which is precisely the subtraction forbidden in (d).
:::

:::method[Checking that a proposed set function is a measure]{provenance=original}
1. **Fix the domain first.** Decide the $\sigma$-algebra $\mathcal{M}$ before defining $\mu$. If the sets you can measure are described by a list of "elementary" sets $\mathcal{E}$ (intervals, boxes, cylinders), the domain is $\mathcal{M}(\mathcal{E})$, and you never have to display its members — generation is enough.
2. **Check $\mu(\varnothing) = 0$.** Without it, $\mu \equiv \infty$ would satisfy (2) vacuously.
3. **Check finite additivity** on two disjoint sets; induction gives any finite number.
4. **Upgrade to countable additivity by a limit, not by hand.** By the lemma, it suffices to verify continuity from below: if $E_1 \subseteq E_2 \subseteq \cdots$ then $\mu(E_n) \to \mu(\bigcup_n E_n)$. For a finite $\mu$ you may instead verify continuity from above at $\varnothing$ alone: $E_n \downarrow \varnothing$ implies $\mu(E_n) \to 0$. That this restricted test already suffices is the sharpening recorded at the end of the proof of the lemma. This is usually much easier than attacking (2) directly.
5. **Classify the size.** Is $\mu$ finite? $\sigma$-finite? Almost every later theorem — uniqueness of extensions, :ref[Fubini and Tonelli]{to=measure.fubini-tonelli}, :ref[Radon–Nikodym]{to=measure.radon-nikodym} — asks for $\sigma$-finiteness, so settle it now by exhibiting an explicit exhausting sequence.
6. **Complete it if you will argue "almost everywhere".** Replace $(\mathcal{M}, \mu)$ by $(\overline{\mathcal{M}}, \overline{\mu})$. Nothing already measurable changes value.
7. **To compute a measure of a complicated set**, write it as a monotone limit of simple ones and use (c) or (d) rather than attempting (2) directly; for an upper bound only, cover it and use (b).
:::

:::example[A finite measure on the integers, and what happens without finiteness]{provenance=original}
Take $X = \mathbb{N} = \{1, 2, 3, \dots\}$ with $\mathcal{M} = \mathcal{P}(\mathbb{N})$, which is a $\sigma$-algebra, and define
$$
\mu(E) \;=\; \sum_{n \in E} \frac{1}{n^{2}} , \qquad E \subseteq \mathbb{N},
$$
the sum of a non-negative family, hence independent of the order of summation. This is the weighted counting measure of :cite[Folland]{work=folland-1999 loc="§1.3, p. 25"} with weight $f(n) = n^{-2}$.

**It is a measure.** $\mu(\varnothing) = 0$ is the empty sum. If $E_1, E_2, \dots$ are disjoint, every $n$ in their union lies in exactly one $E_j$, so the double series $\sum_j \sum_{n \in E_j} n^{-2}$ is a rearrangement of $\sum_{n \in \bigcup_j E_j} n^{-2}$ into blocks; non-negative terms may be regrouped freely, so (2) holds.

**It is finite.** $\mu(\mathbb{N}) = \sum_{n \ge 1} n^{-2} = \pi^{2}/6 = 1.644934\ldots$, so $\mu$ is a finite measure (and $\tfrac{6}{\pi^{2}}\mu$ is a probability measure on $\mathbb{N}$).

**Continuity from below, checked numerically.** Let $A_k = \{1, 2, \dots, k\}$, an increasing sequence with $\bigcup_k A_k = \mathbb{N}$. Then
$$
\mu(A_{10}) = \sum_{n=1}^{10}\frac{1}{n^{2}} = \frac{1968329}{1270080} = 1.5497677\ldots,
\qquad
\mu(A_{100}) = 1.6349839\ldots,
$$
climbing to $\mu(\mathbb{N}) = \pi^{2}/6 = 1.644934\ldots$, as rule (c) requires.

**Continuity from above, checked numerically.** Let $E_k = \{n \in \mathbb{N} : n \ge k\}$, a decreasing sequence with $\bigcap_{k \ge 1} E_k = \varnothing$. Here $\mu(E_1) = \pi^{2}/6 < \infty$, so rule (d) applies and predicts $\mu(E_k) \to 0$. Indeed
$$
\mu(E_4) = \frac{\pi^{2}}{6} - \Bigl(1 + \frac14 + \frac19\Bigr) = \frac{\pi^{2}}{6} - \frac{49}{36} = 0.2838229\ldots,
\qquad
\mu(E_{11}) = 0.0951663\ldots,
\qquad
\mu(E_{101}) = 0.0099501\ldots,
$$
and the general tail is squeezed between two integrals: comparing $n^{-2}$ with $x^{-2}$ on $[n, n+1]$ and on $[n-1,n]$ gives
$$
\frac1k = \int_{k}^{\infty}\frac{dx}{x^{2}} \;\le\; \mu(E_k) = \sum_{n \ge k}\frac{1}{n^{2}} \;\le\; \int_{k-1}^{\infty}\frac{dx}{x^{2}} = \frac{1}{k-1} \qquad (k \ge 2),
$$
so $\mu(E_k) \to 0$. At $k = 11$ the three numbers are $0.0909090\ldots \le 0.0951663\ldots \le 0.1$.

**The same sets, a different measure, and the rule fails.** Replace $\mu$ by counting measure $\nu(E) = \#E$ on the same $(\mathbb{N}, \mathcal{P}(\mathbb{N}))$; this is the weight $f \equiv 1$, and it is a measure by the same argument. Now $\nu(E_k) = \infty$ for every $k$, while $\nu\bigl(\bigcap_k E_k\bigr) = \nu(\varnothing) = 0$. The hypothesis $\nu(E_1) < \infty$ of (d) is the only thing that has changed, and the conclusion fails by the whole of $\infty$. Note that $\nu$ is still $\sigma$-finite, since $\mathbb{N} = \bigcup_k A_k$ with $\nu(A_k) = k < \infty$: $\sigma$-finiteness does not rescue (d).
:::

:::application{provenance=original}
**Probability is measure theory with $\mu(X) = 1$.** An experiment is modelled by a sample space $\Omega$, a $\sigma$-field $\mathcal{F}$ of events and a probability measure $\mathbb{P}$, and :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Def. (1.3.1), p. 5"} note that $\mathbb{P}$ is exactly a measure of total mass one. The reason the $\sigma$-field is part of the data, rather than being taken as all of $\mathcal{P}(\Omega)$, is the one given in this unit: for an infinite $\Omega$ the power set is too big to carry a reasonable assignment of probabilities. Continuity from below is what licenses the everyday step $\mathbb{P}(\text{eventually } A) = \lim_n \mathbb{P}(A \text{ by time } n)$, and continuity from above — with its finiteness hypothesis automatically satisfied — licenses the complementary limit. See :ref[probability spaces]{to=prob.probability-spaces} and :ref[random variables and distributions]{to=prob.random-variables}.

**Mass, charge and intensity distributions.** :cite[Folland]{work=folland-1999 loc="§1.1, p. 21"} motivates the abstract theory by letting $\mu(E)$ be the mass contained in the region $E$. A point particle of mass $m$ at $x_0$ is the measure $m\delta_{x_0}$; a continuous body of density $\rho$ is $\mu(E) = \int_E \rho$; a charged surface in $\mathbb{R}^3$ is a measure that is finite on compacta but assigns zero to every set of zero area. Measure theory is what allows all three to be written as one object and integrated against one formula, rather than as a sum of an integral and a list of point contributions. The additivity axiom is physically the statement that mass is extensive.

**The $\sigma$-field as the specification of what is observable.** In a spatial Poisson process :cite[]{work=grimmett-stirzaker-2020 loc="§6.13, Def. (6.13.1), p. 319"} one takes the Borel $\sigma$-field $\mathcal{B}^d$ of $\mathbb{R}^d$ — generated by the boxes $\prod_{i}(a_i, b_i]$ — and asks only for the counts $N(A)$ of points in Borel sets $A$, with $N(A)$ Poisson of mean $\lambda |A|$. The choice of $\sigma$-field is the choice of which questions the model is willing to answer, and the generators are the questions one actually asks in the laboratory: how many counts in this bin.

**"Almost everywhere" is why function spaces are complete.** Null sets are the sets physics is entitled to ignore: two wavefunctions differing on a null set have identical expectation values. Identifying functions that agree a.e. is what turns the Lebesgue integral into the complete spaces $L^p$ of :ref[L^p spaces]{to=measure.lp-spaces}, and completeness is in turn what makes variational and spectral arguments work. Every statement in the convergence theorems of this chapter — :ref[monotone convergence]{to=measure.monotone-convergence-fatou}, :ref[dominated convergence]{to=measure.dominated-convergence} — is stated a.e. precisely because countable unions of null sets are null, so countably many exceptional sets may be discarded at once.
:::
