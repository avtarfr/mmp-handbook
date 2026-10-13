---
id: prob.probability-spaces
title: Probability spaces
kind: definition
level: core
summary: Sets up the triple of sample space, sigma-field and probability measure on which every later probabilistic statement is made, derives the elementary consequences of the axioms including continuity along monotone sequences, and defines conditioning and independence, from which the partition theorem and Bayes' theorem follow in two lines each.
prereqs: []
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "Ch. 1, pp. 4-16: the recapitulation of the pair $(\\Omega,\\mathcal{F})$ on p. 4 and the translation chart of Table 1.1; Definition (1.3.1) of a probability measure and of the triple $(\\Omega,\\mathcal{F},\\mathbb{P})$, p. 5, with the remark that a probability measure is a measure of total mass one; Example (1.3.3) (the die) and Example (1.3.6) (equally likely outcomes), pp. 6-7; Lemma (1.3.4) (complement, monotonicity, the two-set addition law, inclusion-exclusion) with its proof by disjoint unions, pp. 6-7; Theorem (1.3.5) (continuity of $\\mathbb{P}$ along increasing and decreasing sequences) with its proof, p. 7, and the remark that this property is essentially equivalent to countable rather than finite additivity; the definitions of null and almost sure on p. 8; the motivating frequency argument for conditioning and Definition (1.4.1), pp. 8-9; the definition of a partition and Lemma (1.4.4), the law of total probability (partition theorem), with its proof, p. 10; Exercise (1.4.1), the two-event form of Bayes' theorem, p. 12; Definition (1.5.1) of independence of events and of a family of events, and the warning that $A\\cap B=\\emptyset$ is not independence, p. 13; pairwise independence and Example (1.5.2), p. 14; conditional independence, eq. (1.5.5), p. 14; the product space construction and the product measure (1.6.3), p. 16"
    pages: "4-16"
    role: the axioms in the form we state them, the triple and its vocabulary; the elementary consequences and the disjointification route used to prove them; the continuity theorem and its link to countable additivity; the definition of conditional probability and its frequency motivation; the partition theorem; the definition of independence for an arbitrary family and the fact that pairwise independence is strictly weaker; the product-space construction behind repeated independent trials
  - work: rhb-2006
    loc: "Ch. 30, pp. 1125-1133: $\\S$30.2.1 Axioms and theorems, eqs. (30.6)-(30.13), the addition rule and the complement law, pp. 1125-1126, and the inclusion-exclusion formula (30.16) with the worked card counts, pp. 1127-1128; eqs. (30.17)-(30.18), the decomposition of $A\\cap B$ over a mutually exclusive family and the total probability law, p. 1128; $\\S$30.2.2 Conditional probability, eqs. (30.19)-(30.20), pp. 1128-1129; statistical independence, eq. (30.22), and mutual versus pairwise independence, p. 1130; eqs. (30.23)-(30.24), the addition law for conditional probabilities and the total probability law in the form $\\Pr(B)=\\sum_i \\Pr(A_i)\\Pr(B|A_i)$, p. 1130; $\\S$30.2.3 Bayes' theorem, eqs. (30.26)-(30.29), including the two-hypothesis form, the general form with a partition in the denominator, and the odds form that avoids $\\Pr(B)$ altogether, pp. 1132-1133"
    pages: "1125-1133"
    role: the physicists' formulation of the axioms from relative frequencies; the inclusion-exclusion formula for $n$ events; the three forms of Bayes' theorem we state, in particular the ratio form that cancels the evidence term; the convention of defining independence by the product rule after motivating it by $\\Pr(A|B)=\\Pr(A)$
  - work: arfken-2013
    loc: "$\\S$23.1, pp. 1128-1131: the addition rule, eq. (23.4), with the proof by splitting the union into mutually exclusive pieces, p. 1128; the chain rule $P(A,B)=P(A)P(B|A)$, eq. (23.6), and its rearrangement (23.7), p. 1129; independence as $P(B|A)=P(B)$ giving eq. (23.8), p. 1129; Bayes' theorem, eq. (23.10), and the decomposition law (23.11) for a mutually exclusive family exhausting the sample space, with the proof from $B=\\bigcup_i (B\\cap A_i)$, p. 1130, together with the remark comparing that decomposition to the expansion of a vector in a basis"
    pages: "1128-1131"
    role: the chain-rule reading of conditional probability, which is how a physicist usually uses it; the decomposition-law proof of the partition theorem; the basis-expansion analogy quoted in our remark
  - work: folland-1999
    loc: "$\\S$10.1, pp. 314-315: the dictionary translating measure space, $\\sigma$-algebra, measurable set and almost everywhere into sample space, $\\sigma$-field, event and almost surely; the conditional probability measure $\\mathbb{P}_E(F)=\\mathbb{P}(E\\cap F)/\\mathbb{P}(E)$ and the observation that the resulting product condition is symmetric in $E$ and $F$ and remains meaningful when $\\mathbb{P}(E)=0$; the definition of an independent collection $\\{E_\\alpha\\}_{\\alpha\\in A}$ by the product rule over all finite subfamilies, with the note (Exercise 1) that pairwise independence does not suffice"
    pages: "314-315"
    role: the identification of probability theory with measure theory of total mass one, and the vocabulary table we reproduce in our own words; the point that the product form of independence is symmetric and survives null conditioning events, which the quotient definition does not
---

:::note[What the axioms are for]{provenance=original}
Probability is a measure-theoretic subject wearing different clothes. A probability space is a measure space of total mass one, an event is a measurable set, and a random variable is a measurable function; the names change because the questions do. :cite[Folland]{work=folland-1999 loc="§10.1, p. 314"} sets the two vocabularies side by side in a table, and the translation is exact.

What the axioms buy is modest and indispensable. They do not say what the probability of any particular event *is* — that is part of the description of the experiment, not of the theory — and they do not define probability as a limiting frequency. They say only that probabilities are numbers in $[0,1]$ that add over disjoint alternatives, including over countably many of them. Everything in the rest of this part is deduced from that, together with the two derived notions of this unit: conditioning, which restricts attention to a sub-population, and independence, which says that a restriction changes nothing.
:::

:::definition[Sample space, sigma-field, probability measure]{provenance=adapted src="grimmett-stirzaker-2020:Ch. 1, the recapitulation on p. 4 and Definition (1.3.1), p. 5; folland-1999:§10.1, the dictionary on p. 314"}
Let $\Omega$ be a set, whose elements $\omega$ are the possible outcomes of an experiment; $\Omega$ is the **sample space**.

A collection $\mathcal{F}$ of subsets of $\Omega$ is a **$\sigma$-field** (measure theorists say $\sigma$-algebra) if it contains $\emptyset$, is closed under complementation, and is closed under countable unions. Its members are the **events**; to say that $A$ is an event is exactly to say $A \in \mathcal{F}$. Closure under countable intersections follows by De Morgan.

A **probability measure** on $(\Omega, \mathcal{F})$ is a function $\mathbb{P} : \mathcal{F} \to [0,1]$ with

1. $\mathbb{P}(\emptyset) = 0$ and $\mathbb{P}(\Omega) = 1$;
2. **countable additivity**: whenever $A_1, A_2, \dots$ are members of $\mathcal{F}$ that are pairwise disjoint, meaning $A_i \cap A_j = \emptyset$ for $i \neq j$,
   $$
   \mathbb{P}\Bigl( \bigcup_{i=1}^{\infty} A_i \Bigr) \; = \; \sum_{i=1}^{\infty} \mathbb{P}(A_i) .
   $$

The triple $(\Omega, \mathcal{F}, \mathbb{P})$ is a **probability space**. It is a measure space (see :ref[Sigma-algebras and measures]{to=measure.sigma-algebras-measures}) whose total mass is $1$.

An event $A$ with $\mathbb{P}(A) = 0$ is called **null**; if $\mathbb{P}(A) = 1$ we say $A$ occurs **almost surely**, abbreviated a.s. A null event is not the same as the impossible event $\emptyset$: a dart thrown at a target hits some particular point, and the event that it hits that point had probability zero.

The elementary case is a finite $\Omega$ with all outcomes equally likely, $\mathcal{F}$ the collection of all subsets, and $\mathbb{P}(A) = \lvert A \rvert / \lvert \Omega \rvert$. Then probability is counting, and the whole difficulty is combinatorial.
:::

:::statement[Consequences of the axioms]{provenance=adapted src="grimmett-stirzaker-2020:Lemma (1.3.4) and Theorem (1.3.5), pp. 6-7; rhb-2006:eqs. (30.9)-(30.16), pp. 1125-1127; arfken-2013:eq. (23.4), p. 1128"}
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space and let $A, B, A_1, A_2, \dots$ be events.

1. **Complement.** $\mathbb{P}(A^{c}) = 1 - \mathbb{P}(A)$.
2. **Monotonicity.** If $A \subseteq B$ then $\mathbb{P}(B) = \mathbb{P}(A) + \mathbb{P}(B \setminus A) \ge \mathbb{P}(A)$.
3. **Addition law.** $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$.
4. **Inclusion-exclusion.** For any $n \ge 1$,
   $$
   \mathbb{P}\Bigl( \bigcup_{i=1}^{n} A_i \Bigr)
   \; = \; \sum_{i} \mathbb{P}(A_i) \; - \sum_{i<j} \mathbb{P}(A_i \cap A_j) \; + \sum_{i<j<k} \mathbb{P}(A_i \cap A_j \cap A_k) \; - \; \cdots \; + \; (-1)^{n+1}\,\mathbb{P}(A_1 \cap \cdots \cap A_n) ,
   $$
   each sum running over unordered index sets of the stated size.
5. **Countable subadditivity.** $\mathbb{P}\bigl( \bigcup_{i \ge 1} A_i \bigr) \le \sum_{i \ge 1} \mathbb{P}(A_i)$, with no disjointness assumed.
6. **Continuity along monotone sequences.** If $A_1 \subseteq A_2 \subseteq \cdots$ and $A = \bigcup_{i \ge 1} A_i$, then $\mathbb{P}(A_i) \to \mathbb{P}(A)$ as $i \to \infty$. If $B_1 \supseteq B_2 \supseteq \cdots$ and $B = \bigcap_{i \ge 1} B_i$, then $\mathbb{P}(B_i) \to \mathbb{P}(B)$.

Property 6 is the one that distinguishes countable from merely finite additivity: given finite additivity, countable additivity holds if and only if $\mathbb{P}$ is continuous in this sense.
:::

:::idea[Everything is a disjoint union]{provenance=original}
The only tool the axioms give is additivity over disjoint events, so every proof below consists of rewriting the event of interest as a disjoint union and then adding.

For the addition law, $A \cup B$ is $A$ together with the part of $B$ outside $A$. For a nested increasing sequence, $A$ is $A_1$ together with the successive shells $A_{i+1} \setminus A_i$, which are disjoint, so countable additivity turns $\mathbb{P}(A)$ into a telescoping series whose partial sums are exactly $\mathbb{P}(A_n)$. For subadditivity one cannot disjointify without losing mass, so one disjointifies *downwards*: replace $A_i$ by the part of it not already covered, which is a subset, and use monotonicity to pay for the replacement.

Conditioning is a renormalisation. Restricting attention to the outcomes in $B$ makes $B$ the new sure event, so every probability must be divided by $\mathbb{P}(B)$ to restore total mass one; $A$ then occurs exactly when $A \cap B$ does. The partition theorem and Bayes' theorem are what this renormalisation looks like read in the two possible directions: forwards, summing causes to get the probability of an effect; backwards, dividing to recover the probability of a cause from an observed effect.
:::

:::proof[Consequences 1-6]{provenance=adapted src="grimmett-stirzaker-2020:the proofs of Lemma (1.3.4) and Theorem (1.3.5), pp. 6-7"}
Throughout, disjoint unions are written out explicitly and axiom 2 of the definition is applied; a finite disjoint union is covered by taking all but finitely many of the $A_i$ to be $\emptyset$, which is legitimate because $\mathbb{P}(\emptyset) = 0$.

**1.** $\Omega = A \cup A^{c}$ is a disjoint union, so $1 = \mathbb{P}(\Omega) = \mathbb{P}(A) + \mathbb{P}(A^{c})$.

**2.** If $A \subseteq B$ then $B = A \cup (B \setminus A)$ is a disjoint union, so $\mathbb{P}(B) = \mathbb{P}(A) + \mathbb{P}(B\setminus A)$, and the second term is non-negative because $\mathbb{P}$ takes values in $[0,1]$.

**3.** Write $A \cup B = A \cup (B \setminus A)$, again disjoint, so $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B \setminus A)$. Now $B \setminus A = B \setminus (A \cap B)$ and $A \cap B \subseteq B$, so step 2 gives $\mathbb{P}(B \setminus A) = \mathbb{P}(B) - \mathbb{P}(A \cap B)$. Substituting gives the addition law.

**4.** Induction on $n$. The case $n = 2$ is step 3. Suppose the formula holds for $n-1$ events and put $C = A_1 \cup \cdots \cup A_{n-1}$. By step 3,
$$
\mathbb{P}(C \cup A_n) = \mathbb{P}(C) + \mathbb{P}(A_n) - \mathbb{P}(C \cap A_n),
$$
and $C \cap A_n = \bigcup_{i \le n-1} (A_i \cap A_n)$ is a union of $n-1$ events, so the inductive hypothesis applies to both $\mathbb{P}(C)$ and $\mathbb{P}(C \cap A_n)$. Collecting terms of each size: a set $S \subseteq \{1,\dots,n\}$ with $n \notin S$ contributes once, from $\mathbb{P}(C)$, with sign $(-1)^{\lvert S\rvert+1}$; a set containing $n$ with $\lvert S \rvert \ge 2$ contributes once, from $-\mathbb{P}(C \cap A_n)$, where it appears as $S \setminus \{n\}$ with sign $(-1)^{\lvert S\rvert}$, so after the minus sign its sign is $(-1)^{\lvert S\rvert+1}$ as required; and $S = \{n\}$ contributes the term $\mathbb{P}(A_n)$.

**5.** Disjointify downwards: set $D_1 = A_1$ and $D_i = A_i \setminus (A_1 \cup \cdots \cup A_{i-1})$ for $i \ge 2$. The $D_i$ are pairwise disjoint with the same union as the $A_i$, and $D_i \subseteq A_i$. Hence by countable additivity and then monotonicity,
$$
\mathbb{P}\Bigl( \bigcup_i A_i \Bigr) = \sum_i \mathbb{P}(D_i) \le \sum_i \mathbb{P}(A_i) .
$$

**6.** Let $A_1 \subseteq A_2 \subseteq \cdots$ with union $A$. Put $C_1 = A_1$ and $C_{i+1} = A_{i+1} \setminus A_i$ for $i \ge 1$. These are pairwise disjoint, since the $A_i$ increase, and $\bigcup_{i \le n} C_i = A_n$ while $\bigcup_{i \ge 1} C_i = A$. Countable additivity gives
$$
\mathbb{P}(A) = \sum_{i \ge 1} \mathbb{P}(C_i) = \lim_{n \to \infty} \sum_{i \le n} \mathbb{P}(C_i) = \lim_{n \to \infty} \mathbb{P}(A_n) ,
$$
the last equality by finite additivity. For a decreasing sequence $B_1 \supseteq B_2 \supseteq \cdots$, apply what has just been proved to the increasing sequence $B_i^{c}$, whose union is $B^{c}$, and use step 1 twice:
$$
1 - \mathbb{P}(B) = \mathbb{P}(B^{c}) = \lim_{i} \mathbb{P}(B_i^{c}) = 1 - \lim_{i} \mathbb{P}(B_i) . \qquad \square
$$
:::

:::definition[Conditional probability, independence]{provenance=adapted src="grimmett-stirzaker-2020:Definition (1.4.1), p. 9, Definition (1.5.1) and the following remark, p. 13, and eq. (1.5.5), p. 14; rhb-2006:eqs. (30.19)-(30.22), pp. 1129-1130; folland-1999:§10.1, the conditional probability measure and the definition of an independent collection, p. 315"}
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space.

**Conditional probability.** If $B$ is an event with $\mathbb{P}(B) > 0$, the probability of $A$ **given** $B$ is
$$
\mathbb{P}(A \mid B) \; = \; \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} .
$$
For fixed $B$ the map $A \mapsto \mathbb{P}(A \mid B)$ is itself a probability measure on $(\Omega, \mathcal{F})$: it is non-negative, assigns $1$ to $\Omega$, and inherits countable additivity from $\mathbb{P}$ because $(\bigcup_i A_i) \cap B = \bigcup_i (A_i \cap B)$ preserves disjointness. So every result proved for probability measures holds verbatim for conditional probabilities.

Rearranged, the definition is the **chain rule** $\mathbb{P}(A \cap B) = \mathbb{P}(B)\,\mathbb{P}(A \mid B)$, which iterates: provided $\mathbb{P}(A_1 \cap \cdots \cap A_{n-1}) > 0$,
$$
\mathbb{P}(A_1 \cap \cdots \cap A_n) = \mathbb{P}(A_1)\,\mathbb{P}(A_2 \mid A_1)\,\mathbb{P}(A_3 \mid A_1 \cap A_2) \cdots \mathbb{P}(A_n \mid A_1 \cap \cdots \cap A_{n-1}) .
$$

**Independence.** Events $A$ and $B$ are **independent** if
$$
\mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B) .
$$
When $\mathbb{P}(B) > 0$ this says exactly $\mathbb{P}(A \mid B) = \mathbb{P}(A)$, which is the meaning; the product form is taken as the definition because it is symmetric in $A$ and $B$ and remains meaningful when $\mathbb{P}(B) = 0$.

A family $\{A_i : i \in I\}$ of events is **independent** if
$$
\mathbb{P}\Bigl( \bigcap_{i \in J} A_i \Bigr) = \prod_{i \in J} \mathbb{P}(A_i) \qquad \text{for every finite } J \subseteq I ,
$$
and **pairwise independent** if this holds for every $J$ of size $2$. Pairwise independence is strictly weaker; see the remark below.

Finally, for an event $C$ with $\mathbb{P}(C) > 0$, events $A$ and $B$ are **conditionally independent given $C$** if $\mathbb{P}(A \cap B \mid C) = \mathbb{P}(A \mid C)\,\mathbb{P}(B \mid C)$, that is, if they are independent under the conditional measure.

**Partition.** A finite or countable family $\{B_i\}$ of events is a **partition** of $\Omega$ if the $B_i$ are pairwise disjoint and their union is $\Omega$. Every outcome then lies in exactly one $B_i$.
:::

:::statement[The partition theorem and Bayes' theorem]{provenance=adapted src="grimmett-stirzaker-2020:Lemma (1.4.4), p. 10, and Exercise (1.4.1), p. 12; rhb-2006:eqs. (30.24), (30.26), (30.28) and (30.29), pp. 1130-1133; arfken-2013:eqs. (23.10) and (23.11), p. 1130"}
Let $\{B_1, B_2, \dots\}$ be a partition of $\Omega$ with $\mathbb{P}(B_i) > 0$ for every $i$, and let $A$ be any event.

1. **Partition theorem** (law of total probability):
   $$
   \mathbb{P}(A) \; = \; \sum_i \mathbb{P}(A \mid B_i)\,\mathbb{P}(B_i) .
   $$
   In particular $\mathbb{P}(A) = \mathbb{P}(A \mid B)\mathbb{P}(B) + \mathbb{P}(A \mid B^{c})\mathbb{P}(B^{c})$ whenever $0 < \mathbb{P}(B) < 1$.
2. **Bayes' theorem.** If also $\mathbb{P}(A) > 0$, then for each $k$
   $$
   \mathbb{P}(B_k \mid A) \; = \; \frac{\mathbb{P}(A \mid B_k)\,\mathbb{P}(B_k)}{\mathbb{P}(A)} \; = \; \frac{\mathbb{P}(A \mid B_k)\,\mathbb{P}(B_k)}{\sum_i \mathbb{P}(A \mid B_i)\,\mathbb{P}(B_i)} .
   $$
3. **Odds form.** For any two events $B, C$ of positive probability and any $A$ with $\mathbb{P}(A) > 0$,
   $$
   \frac{\mathbb{P}(B \mid A)}{\mathbb{P}(C \mid A)} \; = \; \frac{\mathbb{P}(B)}{\mathbb{P}(C)} \cdot \frac{\mathbb{P}(A \mid B)}{\mathbb{P}(A \mid C)} ,
   $$
   in which $\mathbb{P}(A)$ does not appear. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="eq. (30.29), p. 1133"} note that this form is the useful one when only relative probabilities are wanted.

The names attached to the three factors in part 2 are standard: $\mathbb{P}(B_k)$ is the **prior**, $\mathbb{P}(A \mid B_k)$ the **likelihood** of the observation $A$ under hypothesis $B_k$, and $\mathbb{P}(B_k \mid A)$ the **posterior**.
:::

:::proof[The partition theorem and Bayes' theorem]{provenance=adapted src="grimmett-stirzaker-2020:the proof of Lemma (1.4.4), p. 10; arfken-2013:the decomposition argument for eq. (23.11), p. 1130"}
**1.** The sets $A \cap B_i$ are pairwise disjoint, because the $B_i$ are, and their union is $A \cap \Omega = A$. Countable additivity gives
$$
\mathbb{P}(A) = \sum_i \mathbb{P}(A \cap B_i) .
$$
Each term is rewritten by the chain rule, which is available because $\mathbb{P}(B_i) > 0$:
$$
\mathbb{P}(A \cap B_i) = \mathbb{P}(A \mid B_i)\,\mathbb{P}(B_i) .
$$
Summing gives the claim. For the two-event version take the partition $\{B, B^{c}\}$, both of positive probability by hypothesis.

**2.** Since $\mathbb{P}(A) > 0$ the quantity $\mathbb{P}(B_k \mid A)$ is defined, and by the definition of conditional probability applied twice to the same intersection,
$$
\mathbb{P}(B_k \mid A)\,\mathbb{P}(A) = \mathbb{P}(A \cap B_k) = \mathbb{P}(A \mid B_k)\,\mathbb{P}(B_k) .
$$
Dividing by $\mathbb{P}(A)$ gives the first equality. Replacing $\mathbb{P}(A)$ by the sum from part 1 gives the second; this is the only place where the family is required to be a partition rather than just a disjoint family.

**3.** Apply the first equality of part 2 to $B$ and to $C$ and divide the two identities; the common factor $\mathbb{P}(A)$ cancels. $\square$
:::

:::remark[Where each hypothesis is used]{provenance=adapted src="grimmett-stirzaker-2020:the remark after Definition (1.5.1) and Example (1.5.2), pp. 13-14, and the comment on Theorem (1.3.5), p. 7; folland-1999:§10.1, p. 315"}
**Countable, not finite, additivity.** Only the continuity property (consequence 6) uses the full strength of axiom 2; consequences 1-4 need no more than finite additivity. Continuity is what lets a probability be computed as a limit of approximations, and without it the distribution function of a random variable need not be right-continuous and the Borel-Cantelli lemmas have no proof. :ref[Convergence of random variables]{to=prob.convergence-random-variables} rests on consequence 6 at almost every step.

**Positivity of the conditioning event.** $\mathbb{P}(A \mid B)$ is undefined when $\mathbb{P}(B) = 0$, and this is not a removable blemish: conditioning on a null event genuinely has no unique answer, and different limiting procedures give different results. :ref[Conditional expectation]{to=prob.conditional-expectation} is the construction that handles the case $\mathbb{P}(B) = 0$, and it does so by changing the question rather than by patching the quotient. In the partition theorem the hypothesis $\mathbb{P}(B_i) > 0$ is needed for each term to be defined; if some $\mathbb{P}(B_i) = 0$ the identity still holds with that term read as $\mathbb{P}(A \cap B_i) = 0$.

**Independence is not disjointness.** Grimmett and Stirzaker single out the belief that $A \cap B = \emptyset$ makes $A$ and $B$ independent as a common error. It is close to the opposite of the truth: if $A$ and $B$ are disjoint then the occurrence of $B$ rules $A$ out entirely, and $\mathbb{P}(A \mid B) = 0$. Disjoint events of positive probability are never independent.

**Pairwise is weaker than mutual.** Let $X$ and $Y$ be the results of two independent fair coin tosses, coded $0$ and $1$, and let $Z = X + Y \bmod 2$. Put $A = \{X = 1\}$, $B = \{Y=1\}$, $C = \{Z = 1\}$, each of probability $\tfrac12$. Any two of the three determine the third, so each pairwise intersection has probability $\tfrac14 = \tfrac12 \cdot \tfrac12$ and the three events are pairwise independent. But $A \cap B \cap C = \emptyset$, since $X = Y = 1$ forces $Z = 0$, so
$$
\mathbb{P}(A \cap B \cap C) = 0 \ne \tfrac18 = \mathbb{P}(A)\mathbb{P}(B)\mathbb{P}(C) ,
$$
and the family is not independent. This is why the definition quantifies over every finite subfamily and not merely over pairs; :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Example (1.5.2), p. 14"} give a different construction on a nine-point sample space, and :cite[Folland]{work=folland-1999 loc="§10.1, Exercise 1, p. 315"} makes the same point.

**Conditional independence is a separate condition.** It neither implies nor is implied by independence. In the example above, $A$ and $B$ are independent but are *not* conditionally independent given $C$: conditionally on $C$, knowing $A$ determines $B$.
:::

:::method[Conditioning on a partition]{provenance=original}
Most elementary probability calculations are one of the following two, and the work is in choosing the partition.

1. **Identify the experiment.** Write down $\Omega$ explicitly only if it is small; otherwise it is enough to be confident that it could be written down. Fix the events of interest.
2. **Choose a partition $\{B_i\}$** that resolves whatever makes the problem hard: the unknown branch taken, the unobserved cause, the value of a hidden parameter, the result of the first step. A good partition is one for which both $\mathbb{P}(B_i)$ and $\mathbb{P}(A \mid B_i)$ are immediate.
3. **Forwards (prediction).** Compute $\mathbb{P}(A) = \sum_i \mathbb{P}(A \mid B_i)\mathbb{P}(B_i)$. Check the partition by verifying $\sum_i \mathbb{P}(B_i) = 1$.
4. **Backwards (inference).** If instead $A$ has been observed and the branch is wanted, compute the unnormalised posteriors $\mathbb{P}(A \mid B_i)\mathbb{P}(B_i)$, then divide each by their sum. The sum is $\mathbb{P}(A)$, so step 3 is contained in step 4 and is a useful arithmetic check.
5. **Check the direction.** $\mathbb{P}(A \mid B)$ and $\mathbb{P}(B \mid A)$ are equal only when $\mathbb{P}(A) = \mathbb{P}(B)$. Confusing them is the single most common error in applied probability; it has a name, the prosecutor's fallacy.
6. **For a sequence of steps**, use the chain rule rather than a partition: multiply the conditional probability of each step given everything before it.
:::

:::example[A three-module detector: forwards and backwards]{provenance=original}
A tracking detector routes each incoming event to exactly one of three reconstruction modules. Module $1$ handles a fraction $0.50$ of the events, module $2$ a fraction $0.30$, and module $3$ a fraction $0.20$. Each module occasionally misreconstructs an event; from calibration runs the misreconstruction probabilities are
$$
\mathbb{P}(E \mid M_1) = 0.02 , \qquad \mathbb{P}(E \mid M_2) = 0.05 , \qquad \mathbb{P}(E \mid M_3) = 0.10 ,
$$
where $M_i$ is the event that module $i$ handled the event and $E$ is the event that it was misreconstructed. The modules partition the sample space: $\mathbb{P}(M_1) + \mathbb{P}(M_2) + \mathbb{P}(M_3) = 0.50 + 0.30 + 0.20 = 1$.

**Forwards: the overall error rate.** By the partition theorem,
$$
\mathbb{P}(E) = (0.02)(0.50) + (0.05)(0.30) + (0.10)(0.20) = 0.010 + 0.015 + 0.020 = 0.045 .
$$
So $4.5\%$ of all events are misreconstructed.

**Backwards: which module is to blame?** The three unnormalised posteriors are the three products just computed, $0.010$, $0.015$ and $0.020$, and dividing each by their sum $0.045$ gives
$$
\mathbb{P}(M_1 \mid E) = \frac{0.010}{0.045} = \frac{2}{9} = 0.2222\ldots , \qquad
\mathbb{P}(M_2 \mid E) = \frac{0.015}{0.045} = \frac{1}{3} , \qquad
\mathbb{P}(M_3 \mid E) = \frac{0.020}{0.045} = \frac{4}{9} = 0.4444\ldots
$$
The three posteriors sum to $2/9 + 3/9 + 4/9 = 1$, as they must.

**What the numbers say.** Module $3$ handles only one event in five but is responsible for $4/9$ of the bad ones, while module $1$ handles half the events and causes only $2/9$ of them. The prior ordering $0.50 > 0.30 > 0.20$ has been reversed by the likelihoods. Note also the gap between the two conditional probabilities that are easy to confuse: $\mathbb{P}(E \mid M_3) = 0.10$, but $\mathbb{P}(M_3 \mid E) = 0.444$, larger by a factor of about $4.4$.

**The odds form, as a check.** Comparing modules $3$ and $1$ without computing $\mathbb{P}(E)$ at all:
$$
\frac{\mathbb{P}(M_3 \mid E)}{\mathbb{P}(M_1 \mid E)} = \frac{\mathbb{P}(M_3)}{\mathbb{P}(M_1)} \cdot \frac{\mathbb{P}(E \mid M_3)}{\mathbb{P}(E \mid M_1)} = \frac{0.20}{0.50}\cdot\frac{0.10}{0.02} = 0.4 \times 5 = 2 ,
$$
and indeed $(4/9)/(2/9) = 2$. The prior odds of $0.4$ against module $3$ are overturned by a likelihood ratio of $5$ in its favour.

**A second question, by the chain rule.** Two events arrive and are routed independently. What is the probability that both are handled by module $1$ and that neither is misreconstructed? Independence across events, and the chain rule within each event, give
$$
\bigl[ \mathbb{P}(M_1)\,\mathbb{P}(E^{c} \mid M_1) \bigr]^{2} = \bigl[ (0.50)(0.98) \bigr]^{2} = 0.49^{2} = 0.2401 .
$$
:::

:::application[Where this machinery is actually used]{provenance=original}
**Inference from data.** Bayes' theorem is the engine of :ref[Bayesian inference]{to=stats.bayesian-inference}: the partition is over hypotheses or parameter values, the likelihood is supplied by the measurement model, and the posterior is the output. The detector example above is the discrete skeleton of every such calculation, including the medical-screening example that :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.2.3, p. 1132"} work through, in which a test that is $99.99\%$ sensitive still leaves a positive result only one-third likely to be a true positive because the prior prevalence is low. Misreading $\mathbb{P}(\text{positive} \mid \text{ill})$ as $\mathbb{P}(\text{ill} \mid \text{positive})$ is the same error that Grimmett and Stirzaker label the prosecutor's fallacy.

**Reliability and fault trees.** A system is modelled as a network whose components fail independently; the probability that the system works is computed by inclusion-exclusion over the paths, or by conditioning on the state of one critical component. Consequence 4 and the partition theorem are the whole method, and independence of components is the modelling assumption that makes the numbers finite in count.

**Statistical mechanics.** The microcanonical ensemble is the equally-likely-outcomes measure $\mathbb{P}(A) = \lvert A \rvert/\lvert\Omega\rvert$ on the set of accessible microstates, and the counting of states that makes up much of the subject is exactly the combinatorics of such a space. Conditioning on the total energy of a system plus reservoir, and applying the partition theorem over the energy of the subsystem, is how the canonical distribution is derived.

**Sequential experiments and Markov models.** The chain rule is the definition of a stochastic process specified step by step: the probability of a whole trajectory is the product of one-step conditional probabilities. When each step depends only on the previous state, the chain rule collapses to the Markov property and one is in the setting of :ref[Discrete-time Markov chains]{to=prob.markov-chains}. The product-space construction that Grimmett and Stirzaker sketch is what guarantees that a probability space carrying infinitely many independent trials exists at all, which is what :ref[Laws of large numbers]{to=prob.law-of-large-numbers} silently assumes.

**Conditional independence as a modelling language.** Measurements are usually modelled as independent *given* the state of the system, not independent outright; the state is the common cause that induces the correlation. This single conditional-independence assumption underlies the likelihood function of :ref[Maximum likelihood]{to=stats.maximum-likelihood}, the recursion of the :ref[Kalman filter]{to=stats.kalman-filter}, and the graphical models used throughout data assimilation.
:::
