---
id: found.sets-cardinality
title: Sets, functions and countability
kind: definition
level: core
summary: Fixes the set and map notation used throughout the handbook, including which of the image and inverse-image identities hold without hypotheses, and gives the comparison of cardinalities together with Cantor's theorem and the standard list of countable and uncountable sets.
prereqs: []
provenance: adapted
sources:
  - work: folland-1999
    loc: "Prologue, §0.1, pp. 1-4; §0.3, Props 0.6, 0.9, 0.10, 0.12, Thm 0.8, Cors 0.11, 0.13, pp. 6-8; Notes, §0.7, p. 17"
    pages: "1-4, 6-8, 17"
    role: set and map notation; inverse-image identities; comparison of cardinality; Schroeder-Bernstein; Cantor's theorem; closure properties of countability; continuum hypothesis
  - work: hassani-2013
    loc: "§1.1, pp. 2-3; §1.2, pp. 4-7; §1.4, pp. 10-12 (with the historical note on Cantor's two proofs, p. 11)"
    pages: "2-7, 10-12"
    role: set operations, Cartesian products, maps and preimages in physicists' notation; the convention N = nonnegative integers; cardinality and examples of uncountable sets
  - work: lee-2013
    loc: "Appendix A, 'Bases and Countability', p. 600"
    pages: "600"
    role: the alternative definition of countably infinite (bijection with the positive integers), recorded in the conventions remark
---

:::note{provenance=original}
**What it means.** This unit is the handbook's dictionary for sets and maps. Two things in it are used again and again and are easy to get wrong: the inverse image $f^{-1}(E)$ is defined for *every* map and every subset $E$ of the codomain, and never needs $f$ to be invertible; and "countable" is a statement about the existence of an injection into $\mathbb{N}$, not about being small. Cantor's theorem is the reason a handbook needs the word "uncountable" at all: $\mathbb{R}$, the set of sequences of $0$s and $1$s, and the set of all subsets of $\mathbb{N}$ are all strictly larger than $\mathbb{N}$, so no list exhausts them.
:::

:::definition[Sets, families and operations]{provenance=adapted src="folland-1999:Prologue, §0.1, pp. 2-3; hassani-2013:§1.1, pp. 2-3"}
Inclusion is always weak: $E \subseteq X$ allows $E = X$. The empty set is $\emptyset$, and the **power set** of $X$ is $\mathcal{P}(X) = \{E : E \subseteq X\}$. The words *family* and *collection* mean "set".

Given an **indexed family** $\{E_\alpha\}_{\alpha \in A}$ of sets, with $A$ a nonempty index set,

$$
\bigcup_{\alpha \in A} E_\alpha = \{x : x \in E_\alpha \text{ for some } \alpha \in A\},
\qquad
\bigcap_{\alpha \in A} E_\alpha = \{x : x \in E_\alpha \text{ for every } \alpha \in A\} .
$$

The $E_\alpha$ are **disjoint** if $E_\alpha \cap E_\beta = \emptyset$ whenever $\alpha \neq \beta$. The **difference** is $E \setminus F = \{x : x \in E \text{ and } x \notin F\}$. When every set in sight is a subset of one fixed set $X$, the **complement** of $E$ in $X$ is $E^{c} = X \setminus E$, and De Morgan's laws hold for any nonempty family of subsets of $X$:

$$
\Bigl(\bigcup_{\alpha \in A} E_\alpha\Bigr)^{c} = \bigcap_{\alpha \in A} E_\alpha^{c},
\qquad
\Bigl(\bigcap_{\alpha \in A} E_\alpha\Bigr)^{c} = \bigcup_{\alpha \in A} E_\alpha^{c} .
$$

The **Cartesian product** $X \times Y$ is the set of ordered pairs $(x, y)$ with $x \in X$ and $y \in Y$; $X^{n}$ is the set of ordered $n$-tuples from $X$. For a family $\{X_\alpha\}_{\alpha \in A}$, the product $\prod_{\alpha \in A} X_\alpha$ is the set of maps $f$ on $A$ with $f(\alpha) \in X_\alpha$ for every $\alpha$.

In this handbook $\mathbb{N} = \{1, 2, \dots\}$ excludes $0$, and $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ are the integers, rationals, reals and complex numbers.
:::

:::definition[Maps, images and inverse images]{provenance=adapted src="folland-1999:Prologue, §0.1, pp. 3-4; hassani-2013:§1.2, pp. 4-6, Example 1.2.5, p. 7"}
A **map** $f : X \to Y$ assigns to each $x \in X$ exactly one element $f(x) \in Y$. $X$ is the **domain**, $Y$ the **codomain**, and $f(X) \subseteq Y$ the **range**. A map into $\mathbb{R}$ or $\mathbb{C}$ is usually called a **function**. For $D \subseteq X$ and $E \subseteq Y$,

$$
f(D) = \{f(x) : x \in D\} \subseteq Y,
\qquad
f^{-1}(E) = \{x \in X : f(x) \in E\} \subseteq X ,
$$

the **image** of $D$ and the **inverse image** (or **preimage**) of $E$. The symbol $f^{-1}(E)$ is defined for every map $f$ and every $E \subseteq Y$; it is a subset of $X$, possibly empty, and carries no claim that $f$ has an inverse.

The **composition** of $f : X \to Y$ and $g : Y \to Z$ is $g \circ f : X \to Z$, $(g \circ f)(x) = g(f(x))$. The **restriction** of $f$ to $A \subseteq X$ is the map $f|_A : A \to Y$ with $f|_A(x) = f(x)$.

The map $f$ is

- **injective** if $f(x_1) = f(x_2)$ only when $x_1 = x_2$;
- **surjective** if $f(X) = Y$;
- **bijective** if it is both.

A bijective $f$ has a unique **inverse map** $f^{-1} : Y \to X$, characterised by $f^{-1} \circ f = \mathrm{id}_X$ and $f \circ f^{-1} = \mathrm{id}_Y$. Whether a map is injective or surjective depends on the domain and codomain, not on the formula alone: $x \mapsto x^{2}$ is a bijection of $(0, \infty)$ onto $(0, \infty)$, injective but not surjective as a map $(0, \infty) \to \mathbb{R}$, and neither as a map $\mathbb{R} \to \mathbb{R}$.

A **sequence** in $X$ is a map $f : \mathbb{N} \to X$, usually written $\{x_n\}_{n=1}^{\infty}$ with $x_n = f(n)$. A **subsequence** of it is a composition $f \circ g$ in which $g : \mathbb{N} \to \mathbb{N}$ is strictly increasing.
:::

:::statement[Inverse images respect all three operations; images only unions]{provenance=adapted src="folland-1999:Prologue, §0.1, p. 4"}
Let $f : X \to Y$. For every nonempty family $\{E_\alpha\}_{\alpha \in A}$ of subsets of $Y$, every $E \subseteq Y$, and every nonempty family $\{D_\alpha\}_{\alpha \in A}$ of subsets of $X$:

$$
f^{-1}\Bigl(\bigcup_{\alpha \in A} E_\alpha\Bigr) = \bigcup_{\alpha \in A} f^{-1}(E_\alpha),
\qquad
f^{-1}\Bigl(\bigcap_{\alpha \in A} E_\alpha\Bigr) = \bigcap_{\alpha \in A} f^{-1}(E_\alpha),
$$

$$
f^{-1}(Y \setminus E) = X \setminus f^{-1}(E),
\qquad
f\Bigl(\bigcup_{\alpha \in A} D_\alpha\Bigr) = \bigcup_{\alpha \in A} f(D_\alpha) .
$$

That is, the map $f^{-1} : \mathcal{P}(Y) \to \mathcal{P}(X)$ commutes with unions, intersections and complements, and the map $D \mapsto f(D)$ from $\mathcal{P}(X)$ to $\mathcal{P}(Y)$ commutes with unions. The image does **not** in general commute with intersections or with complements.
:::

:::idea[Images and inverse images]{provenance=original}
Membership in an inverse image is a condition on the one element $f(x)$: "$x \in f^{-1}(E)$" is nothing but "$f(x) \in E$". So "or", "and" and "not" in the condition on $f(x)$ pass straight through to the same connectives in the condition on $x$, and $f^{-1}$ respects all three operations.

Membership in an image is a condition of a different shape: "$y \in f(D)$" says that *some* $x \in D$ has $f(x) = y$. An existential quantifier may be swapped with "or", because both are existential, but not with "and" and not with "not". That single asymmetry is the whole statement, and it is also the source of the failures listed in the remark below.
:::

:::proof[Images and inverse images]{provenance=original}
Folland states these identities and calls them easily verified (p. 4); here is the verification. Each part is a chain of equivalences between conditions on one element, so the two sets in question have the same members. The index set $A$ is nonempty throughout.

**Unions, inverse image.** For $x \in X$,
$$
x \in f^{-1}\Bigl(\bigcup_\alpha E_\alpha\Bigr)
\iff f(x) \in \bigcup_\alpha E_\alpha
\iff f(x) \in E_\alpha \text{ for some } \alpha
\iff x \in f^{-1}(E_\alpha) \text{ for some } \alpha ,
$$
the three steps being the definition of the inverse image, the definition of the union, and the definition of the inverse image again. The last condition says $x \in \bigcup_\alpha f^{-1}(E_\alpha)$.

**Intersections, inverse image.** The same four conditions with "for some" replaced by "for every" throughout, and $\bigcup$ by $\bigcap$.

**Complements.** For $x \in X$, $x \in f^{-1}(Y \setminus E)$ means $f(x) \in Y$ and $f(x) \notin E$. The first clause holds automatically, $f$ taking values in $Y$, so the condition reduces to $f(x) \notin E$, that is to $x \notin f^{-1}(E)$. As $x$ ranges over $X$, this says $f^{-1}(Y\setminus E) = X \setminus f^{-1}(E)$.

**Unions, image.** For $y \in Y$,
$$
y \in f\Bigl(\bigcup_\alpha D_\alpha\Bigr)
\iff y = f(x) \text{ for some } x \in \bigcup_\alpha D_\alpha
\iff \text{there are } \alpha \text{ and } x \in D_\alpha \text{ with } y = f(x) ,
$$
and the last condition is $y \in f(D_\alpha)$ for some $\alpha$, that is $y \in \bigcup_\alpha f(D_\alpha)$. The only manoeuvre was to exchange two existential quantifiers, which is always allowed.

**Why the image stops there.** The last chain used that "for some $x$" commutes with "for some $\alpha$". It does not commute with "for every $\alpha$": a $y$ that is hit from inside every $D_\alpha$ need not be hit from inside their intersection, because the witnesses $x$ may differ from one $\alpha$ to the next. Nor can an existential quantifier be moved through a negation. The remark below exhibits both failures with $f(x) = x^2$. $\square$
:::

:::definition[Comparison of cardinality; countable sets]{provenance=adapted src="folland-1999:§0.3, pp. 6-7"}
For nonempty sets $X$ and $Y$ write

- $\operatorname{card}(X) \le \operatorname{card}(Y)$ if there exists an injection $X \to Y$;
- $\operatorname{card}(X) = \operatorname{card}(Y)$ if there exists a bijection $X \to Y$;
- $\operatorname{card}(X) \ge \operatorname{card}(Y)$ if there exists a surjection $X \to Y$;
- $\operatorname{card}(X) < \operatorname{card}(Y)$ if there is an injection $X \to Y$ but no bijection $X \to Y$;
- $\operatorname{card}(X) > \operatorname{card}(Y)$ if there is a surjection $X \to Y$ but no bijection $X \to Y$.

Note which map each strict relation asks for: $<$ is about injections, $>$ about surjections, both with no bijection allowed. These are relations between two sets; the symbol $\operatorname{card}(X)$ standing alone is given no meaning here, except that for finite $X$ we write $\operatorname{card}(X) = n$ to mean that there is a bijection of $X$ onto $\{1, \dots, n\}$. Only the two weak relations are extended to the empty set, by declaring $\operatorname{card}(\emptyset) \le \operatorname{card}(X)$ and $\operatorname{card}(X) \ge \operatorname{card}(\emptyset)$ for every nonempty $X$; $=$, $<$ and $>$ are left undefined when either set is empty, so every statement below that uses them assumes both sets nonempty, as Folland does for his whole section (p. 6).

$X$ is **countable** if $\operatorname{card}(X) \le \operatorname{card}(\mathbb{N})$, that is, if some injection $X \to \mathbb{N}$ exists; every finite set is countable, since $\{1, \dots, n\}$ injects into $\mathbb{N}$. $X$ is **countably infinite** if it is countable and not finite, so that a countable set is either finite or countably infinite by definition. That countably infinite sets are exactly the sets in bijection with $\mathbb{N}$ is a theorem, not part of this definition; it is item 3 of the countability list below. $X$ is **uncountable** if it is not countable. Finally, $\operatorname{card}(X) = \mathfrak{c}$ ("$X$ has the cardinality of the continuum") means $\operatorname{card}(X) = \operatorname{card}(\mathbb{R})$.
:::

:::statement[Injections both ways, and injections versus surjections]{provenance=adapted src="folland-1999:§0.3, Prop 0.6 and Thm 0.8 (Schroeder-Bernstein), p. 7"}
Let $X$ and $Y$ be nonempty sets.

1. (**Schröder-Bernstein**) If $\operatorname{card}(X) \le \operatorname{card}(Y)$ and $\operatorname{card}(Y) \le \operatorname{card}(X)$, then $\operatorname{card}(X) = \operatorname{card}(Y)$. In plain terms: an injection $X \to Y$ together with an injection $Y \to X$ yields a bijection $X \to Y$.
2. $\operatorname{card}(X) \le \operatorname{card}(Y)$ if and only if $\operatorname{card}(Y) \ge \operatorname{card}(X)$: an injection $X \to Y$ exists exactly when a surjection $Y \to X$ exists.
:::

:::idea[Injections both ways]{provenance=original}
Part 2 is two constructions. An injection is a bijection onto its range, so it can be inverted there and told to send everything else to one fixed point, which produces a surjection the other way. A surjection has nonempty fibres, so picking one element out of each fibre produces an injection the other way — and picking infinitely many things at once is where the axiom of choice enters.

Part 1, the Schröder-Bernstein theorem, is harder, because two injections may interleave the two sets in a complicated way. The device is to let the maps sort the elements themselves: from any element, step *backwards* through $g$ and $f$ alternately, as far as the maps allow. Injectivity makes each backward step unique, so every element has one well-defined backward chain, and the chain either runs forever or comes to a halt on the $X$ side or on the $Y$ side. This cuts both sets into three matching pieces, on two of which $f$ is already a bijection and on the third of which $g$ is; glueing the three gives the bijection wanted.
:::

:::proof[Injections both ways]{provenance=adapted src="folland-1999:§0.3, Prop 0.6 and Thm 0.8, p. 7"}
**Part 2, from an injection to a surjection.** Let $f : X \to Y$ be injective. Since $X$ is nonempty, fix some $x_* \in X$ and define $g : Y \to X$ by: $g(y)$ is the unique $x$ with $f(x) = y$ when $y \in f(X)$, and $g(y) = x_*$ otherwise. The first clause is unambiguous precisely because $f$ is injective. Given any $x \in X$, the element $y = f(x)$ has $g(y) = x$, so $g$ is surjective.

**Part 2, from a surjection to an injection.** Let $g : Y \to X$ be surjective. For each $x \in X$ the fibre $g^{-1}(\{x\})$ is nonempty, by surjectivity, and distinct fibres are disjoint. Choose one element $f(x) \in g^{-1}(\{x\})$ for every $x \in X$ at once; this is an appeal to the axiom of choice (see the remark). Then $g(f(x)) = x$ for all $x$, so $f(x_1) = f(x_2)$ gives $x_1 = g(f(x_1)) = g(f(x_2)) = x_2$ and $f$ is injective. The two halves together say $\operatorname{card}(X) \le \operatorname{card}(Y)$ if and only if $\operatorname{card}(Y) \ge \operatorname{card}(X)$.

**Part 1 (Schröder-Bernstein).** Let $f : X \to Y$ and $g : Y \to X$ be injections.

*Step 1 (backward chains).* Call $y$ the **predecessor** of $x \in X$ if $x = g(y)$, and $x$ the predecessor of $y \in Y$ if $y = f(x)$. A point of $X$ has a predecessor exactly when it lies in $g(Y)$, a point of $Y$ exactly when it lies in $f(X)$, and in both cases the predecessor is unique because $g$ and $f$ are injective. Starting from any point and passing to predecessors as long as they exist therefore produces one well-defined chain, alternating between the two sets.

*Step 2 (three types).* The chain of a point does exactly one of three things: it continues for ever; it halts at a point of $X \setminus g(Y)$; it halts at a point of $Y \setminus f(X)$. Let $X_\infty$, $X_X$, $X_Y$ be the sets of $x \in X$ of the three types, and $Y_\infty$, $Y_X$, $Y_Y$ likewise for $Y$. Since every point has one chain with one behaviour, $X$ is the disjoint union of $X_\infty$, $X_X$, $X_Y$, and $Y$ of $Y_\infty$, $Y_X$, $Y_Y$; some pieces may be empty.

*Step 3 (both maps preserve the type).* Let $x \in X$. Then $f(x) \in f(X)$, so $f(x)$ has a predecessor, and that predecessor is $x$; the chain of $f(x)$ is thus $f(x)$ followed by the chain of $x$. Prefixing one term changes neither whether a chain halts nor where, so $f(x)$ has the same type as $x$:
$$
f(X_\infty) \subseteq Y_\infty, \qquad f(X_X) \subseteq Y_X, \qquad f(X_Y) \subseteq Y_Y ,
$$
and by the identical argument $g(y)$ has the same type as $y$ for every $y \in Y$.

*Step 4 ($f$ exhausts the first two pieces of $Y$).* Let $y \in Y_\infty \cup Y_X$. Its chain does not halt at $y$ itself: halting at $y$ would mean $y \notin f(X)$, which puts $y$ in $Y_Y$. So $y \in f(X)$, and $x = f^{-1}(y)$ has the same type as $y$ by Step 3. Hence $f$ maps $X_\infty$ onto $Y_\infty$ and $X_X$ onto $Y_X$, and being injective it is a bijection in each case.

*Step 5 ($g$ exhausts the third piece of $X$).* Let $x \in X_Y$. Its chain does not halt at $x$ itself, since that would mean $x \notin g(Y)$ and put $x$ in $X_X$. So $x \in g(Y)$, and $y = g^{-1}(x)$ has the same type as $x$, namely type $Y_Y$. Conversely $g(Y_Y) \subseteq X_Y$ by Step 3. So $g$ restricts to a bijection $Y_Y \to X_Y$, and $g^{-1}$ to a bijection $X_Y \to Y_Y$.

*Step 6 (glue).* Define $h : X \to Y$ by $h = f$ on $X_\infty \cup X_X$ and $h = g^{-1}$ on $X_Y$. The three pieces partition $X$, the three sets $Y_\infty$, $Y_X$, $Y_Y$ partition $Y$, and $h$ is a bijection from each piece onto the corresponding one by Steps 4 and 5. A map that carries each block of one partition bijectively onto a block of another, with distinct blocks going to distinct blocks, is itself a bijection. Hence $\operatorname{card}(X) = \operatorname{card}(Y)$. $\square$
:::

:::statement[Cantor's theorem]{provenance=adapted src="folland-1999:§0.3, Prop 0.9, p. 7"}
Let $X$ be any set and let $g : X \to \mathcal{P}(X)$ be any map. Then the set

$$
Y = \{x \in X : x \notin g(x)\} \subseteq X
$$

is not in the range of $g$, so $g$ is not surjective. Consequently

$$
\operatorname{card}(X) < \operatorname{card}\bigl(\mathcal{P}(X)\bigr)
$$

for every nonempty set $X$: the injection $x \mapsto \{x\}$ exists, but no bijection does. (The first assertion needs no hypothesis on $X$; the displayed one is restricted to nonempty $X$ only because $<$ is defined only there.)
:::

:::idea[Cantor's theorem]{provenance=original}
The set $Y$ is built to disagree with the candidate $g(x)$ at the point $x$: by its definition, $x$ belongs to $Y$ exactly when $x$ does not belong to $g(x)$. A single set thus differs from *every* set in the range of $g$, each time at a different point, so $g$ misses $Y$. Nothing about $X$ or $g$ is used. The other half of the conclusion is the cheapest injection there is, $x \mapsto \{x\}$.
:::

:::proof[Cantor's theorem]{provenance=adapted src="folland-1999:§0.3, Prop 0.9, p. 7"}
**Step 1 ($Y$ is not a value of $g$).** Suppose $Y = g(x_0)$ for some $x_0 \in X$, and ask whether $x_0 \in Y$. Exactly one of the two answers must hold, and both are impossible:

- if $x_0 \in Y$, then by the definition of $Y$ we have $x_0 \notin g(x_0)$, and $g(x_0) = Y$, so $x_0 \notin Y$;
- if $x_0 \notin Y = g(x_0)$, then $x_0$ satisfies the condition defining $Y$, so $x_0 \in Y$.

Hence no such $x_0$ exists: $Y \notin g(X)$, and $g$ is not surjective. No hypothesis on $X$ or on $g$ entered this step.

**Step 2 (the injection).** The map $x \mapsto \{x\}$ from $X$ to $\mathcal{P}(X)$ is injective, since $\{x_1\} = \{x_2\}$ forces $x_1 = x_2$. So $\operatorname{card}(X) \le \operatorname{card}(\mathcal{P}(X))$ for nonempty $X$; note $\mathcal{P}(X)$ is never empty, containing $\emptyset$.

**Step 3 (no bijection).** A bijection $X \to \mathcal{P}(X)$ would in particular be a surjection, which Step 1 forbids. An injection exists and no bijection does, which is the definition of $\operatorname{card}(X) < \operatorname{card}(\mathcal{P}(X))$. $\square$
:::

:::statement[Which sets are countable, and which are not]{provenance=adapted src="folland-1999:§0.3, Prop 0.10, Cor 0.11, Prop 0.12, Cor 0.13, pp. 7-8"}
1. **Products.** Countability of $X$ and of $Y$ carries over to $X \times Y$.
2. **Indexed unions.** Suppose the index set $A$ is countable and so is each $X_\alpha$, $\alpha \in A$. Then $\bigcup_{\alpha \in A} X_\alpha$ is countable too.
3. **Countable and infinite means in bijection with $\mathbb{N}$.** Should $X$ be countably infinite, that is, countable and not finite, then $\operatorname{card}(X) = \operatorname{card}(\mathbb{N})$: an injection $X \to \mathbb{N}$ can be upgraded to a bijection. The special case that carries the general one: an infinite $S \subseteq \mathbb{N}$ admits a bijection onto $\mathbb{N}$.
4. **The usual number systems.** Both $\mathbb{Z}$ and $\mathbb{Q}$ are countable.
5. **The reals.** $\operatorname{card}(\mathcal{P}(\mathbb{N})) = \mathfrak{c}$. Read together with Cantor's theorem this gives
$$
\operatorname{card}(\mathbb{N}) < \operatorname{card}\bigl(\mathcal{P}(\mathbb{N})\bigr) = \operatorname{card}(\mathbb{R}) ,
$$
so $\mathbb{R}$ is not countable.
6. **Beyond the continuum.** $\operatorname{card}(X) > \mathfrak{c}$ forces $X$ to be uncountable; here, by the definition of $>$ above, the hypothesis is that some surjection $X \to \mathbb{R}$ exists and no bijection $X \to \mathbb{R}$ does.
:::

:::idea[The countability list]{provenance=original}
Almost everything rests on one enumeration: list the pairs $(j,k)$ of positive integers by the value of $j+k$, and within each group by increasing $j$. That makes $\mathbb{N}^2$ countable, which gives products; countable unions then reduce to products, once one enumeration has been chosen for each piece; and $\mathbb{Z}$ and $\mathbb{Q}$ are built from products and unions.

Item 3 needs a different idea: repeatedly take the least element not yet used. It works because every nonempty subset of $\mathbb{N}$ has a least element, and it never runs out because the set is infinite. Item 5 is the only one about $\mathbb{R}$ as opposed to $\mathbb{N}$, and it is settled by two injections: binary expansions turn a subset of $\mathbb{N}$ into a real number, and the set of rationals below a real number turns a real number into a subset of $\mathbb{Q}$. Neither is a bijection, and Schröder-Bernstein is what closes the gap between them.
:::

:::proof[The countability list]{provenance=adapted src="folland-1999:§0.3, Prop 0.10, Cor 0.11, Prop 0.12, Cor 0.13, pp. 7-8"}
**Item 1 (products).**

*Step 1 ($\mathbb{N}^2$ is countable).* Group the pairs by the value of $n = j+k$, which runs over the integers $n \ge 2$, and inside the $n$-th group list the $n-1$ pairs with $j+k = n$ in order of increasing $j$:
$$
(1,1);\quad (1,2),(2,1);\quad (1,3),(2,2),(3,1);\quad (1,4),(2,3),(3,2),(4,1);\ \dots
$$
Each pair appears exactly once, namely in the group $n = j+k$ at position $j$ within it, so the listing is a bijection $\mathbb{N} \to \mathbb{N}^2$ and its inverse a bijection $\mathbb{N}^2 \to \mathbb{N}$. In closed form the inverse sends $(j,k)$ to $\tfrac12(j+k-1)(j+k-2) + j$, the first term being $1 + 2 + \dots + (j+k-2)$, the number of pairs in all earlier groups.

*Step 2 (general $X$, $Y$).* If $X$ or $Y$ is empty then $X \times Y = \emptyset$, which is countable. Otherwise choose injections $u : X \to \mathbb{N}$ and $v : Y \to \mathbb{N}$, which exist because $X$ and $Y$ are countable. Then $(x,y) \mapsto (u(x), v(y))$ is an injection $X \times Y \to \mathbb{N}^2$, being injective in each slot, and composing it with the bijection of Step 1 gives an injection $X \times Y \to \mathbb{N}$.

**Item 2 (indexed unions).** Write $U = \bigcup_{\alpha \in A}X_\alpha$. Deleting the indices $\alpha$ with $X_\alpha = \emptyset$ changes neither $U$ nor the countability of the index set, a subset of a countable set being countable because the restriction of an injection is an injection. If every $X_\alpha$ was empty then $U = \emptyset$ is countable; so assume the remaining index set, still called $A$, is nonempty and every $X_\alpha$ is nonempty.

*Step 1 (one enumeration per piece).* Each $X_\alpha$ is nonempty and countable, so by part 2 of the previous statement there is a surjection $\mathbb{N} \to X_\alpha$. Choose one, $f_\alpha$, for every $\alpha \in A$ simultaneously; this is the axiom of choice again (see the remark).

*Step 2 (one surjection onto the union).* Define $F : \mathbb{N}\times A \to U$ by $F(n,\alpha) = f_\alpha(n)$. It is surjective: any $u \in U$ lies in some $X_\alpha$, and $f_\alpha$ is onto $X_\alpha$, so $u = f_\alpha(n)$ for some $n$.

*Step 3 (transfer).* $\mathbb{N} \times A$ is countable by item 1. By part 2 of the previous statement the surjection $F$ yields an injection $U \to \mathbb{N}\times A$, and composing it with an injection $\mathbb{N}\times A \to \mathbb{N}$ gives an injection $U \to \mathbb{N}$. So $U$ is countable.

**Item 3 (countable and infinite means in bijection with $\mathbb{N}$).**

*Step 1 (reduce to a subset of $\mathbb{N}$).* Let $X$ be countable and infinite and let $u : X \to \mathbb{N}$ be an injection. Then $u$ is a bijection of $X$ onto $S = u(X) \subseteq \mathbb{N}$, and $S$ is infinite because $X$ is. If $\varphi : \mathbb{N} \to S$ is a bijection then $\varphi^{-1}\circ u : X \to \mathbb{N}$ is one, so it is enough to enumerate $S$.

*Step 2 (take least elements).* Set $\varphi(1) = \min S$ and recursively $\varphi(n) = \min\bigl(S \setminus \{\varphi(1),\dots,\varphi(n-1)\}\bigr)$. Each set whose minimum is taken is a nonempty subset of $\mathbb{N}$ — nonempty because $S$ is infinite while the removed set is finite — and every nonempty subset of $\mathbb{N}$ has a least element, so $\varphi$ is well defined.

*Step 3 ($\varphi$ is strictly increasing).* By construction $\varphi(n)$ differs from $\varphi(1),\dots,\varphi(n-1)$. Moreover $\varphi(n) > \varphi(n-1)$: both belong to $S \setminus \{\varphi(1),\dots,\varphi(n-2)\}$, of which $\varphi(n-1)$ is the least element and from which $\varphi(n)$ differs. An induction now shows that $\varphi(n)$ is the $n$-th smallest element of $S$.

*Step 4 ($\varphi$ is onto).* Let $s \in S$ and let $m$ be the number of elements of $S$ that are $\le s$; this is finite, there being at most $s$ positive integers $\le s$. Then $s$ is the $m$-th smallest element of $S$, hence $s = \varphi(m)$ by Step 3. So $\varphi$ is a bijection and $\operatorname{card}(X) = \operatorname{card}(\mathbb{N})$. Steps 2 to 4 alone are the special case of an infinite $S \subseteq \mathbb{N}$.

**Item 4 (the usual number systems).** $\mathbb{Z} = \mathbb{N}\cup\{-n : n \in \mathbb{N}\}\cup\{0\}$ is a union of three countable sets over the index set $\{1,2,3\}$, which is finite and hence countable, so $\mathbb{Z}$ is countable by item 2. Then $\mathbb{Z}\times\mathbb{Z}$ is countable by item 1, and
$$
(m,n) \mapsto \begin{cases} m/n, & n \neq 0, \\ 0, & n = 0, \end{cases}
$$
is a surjection $\mathbb{Z}^2 \to \mathbb{Q}$, because every rational is a quotient of two integers with nonzero denominator. Step 3 of item 2 transfers countability along a surjection, so $\mathbb{Q}$ is countable. Both are infinite, containing $\mathbb{N}$, so by item 3 both are in bijection with $\mathbb{N}$.

**Item 5 ($\operatorname{card}(\mathcal{P}(\mathbb{N})) = \mathfrak{c}$).**

*Step 1 (an injection $\mathcal{P}(\mathbb{N}) \to \mathbb{R}$).* For $A \subseteq \mathbb{N}$ put $s(A) = \sum_{n \in A}2^{-n}$, a subseries of $\sum_{n\ge 1}2^{-n} = 1$ and so convergent with $0 \le s(A) \le 1$. Following Folland (p. 8), define
$$
\Phi(A) = \begin{cases} s(A), & \mathbb{N}\setminus A \text{ infinite}, \\ 1 + s(A), & \mathbb{N}\setminus A \text{ finite}. \end{cases}
$$
Values of the first kind lie in $[0,1]$ and values of the second in $(1,2]$, since a set with finite complement is nonempty and so has $s(A) > 0$. So two sets falling under different cases get different values.

*Step 2 (injectivity within a case).* Let $A \neq B$ fall under the same case and let $m$ be the least element of $A \triangle B$, say $m \in A \setminus B$. Then $A$ and $B$ agree on $\{1,\dots,m-1\}$, so
$$
s(A) - s(B) = 2^{-m} + \sum_{n > m,\ n \in A\setminus B} 2^{-n} - \sum_{n > m,\ n \in B \setminus A} 2^{-n} \;\ge\; 2^{-m} - \sum_{n>m}2^{-n} = 0 ,
$$
using $\sum_{n>m}2^{-n} = 2^{-m}$. Equality would force the subtracted sum to be all of $\sum_{n>m}2^{-n}$ and the added one to vanish, that is, every $n > m$ to lie in $B$ and none in $A$. Then $A \subseteq \{1,\dots,m\}$ has infinite complement while $\mathbb{N}\setminus B \subseteq \{1,\dots,m\}$ is finite, putting $A$ and $B$ under different cases, against the assumption. So $s(A) \neq s(B)$, hence $\Phi(A) \neq \Phi(B)$, and with Step 1, $\Phi$ is injective: $\operatorname{card}(\mathcal{P}(\mathbb{N})) \le \operatorname{card}(\mathbb{R})$.

*Step 3 (an injection $\mathbb{R} \to \mathcal{P}(\mathbb{Q})$).* Send $x$ to $C_x = \{q \in \mathbb{Q} : q < x\}$. If $x < y$, some rational lies strictly between them and belongs to $C_y$ but not to $C_x$, so $C_x \neq C_y$: the map is injective.

*Step 4 (powers sets of countably infinite sets).* $\mathbb{Q}$ is countable and infinite, so item 3 gives a bijection $\psi : \mathbb{Q}\to\mathbb{N}$. Then $A \mapsto \psi(A)$ is a bijection $\mathcal{P}(\mathbb{Q}) \to \mathcal{P}(\mathbb{N})$, its inverse being $B \mapsto \psi^{-1}(B)$. With Step 3 this gives $\operatorname{card}(\mathbb{R}) \le \operatorname{card}(\mathcal{P}(\mathbb{N}))$.

*Step 5 (conclude).* Injections run both ways between $\mathcal{P}(\mathbb{N})$ and $\mathbb{R}$, so Schröder-Bernstein gives $\operatorname{card}(\mathcal{P}(\mathbb{N})) = \operatorname{card}(\mathbb{R}) = \mathfrak{c}$. Cantor's theorem then supplies $\operatorname{card}(\mathbb{N}) < \operatorname{card}(\mathcal{P}(\mathbb{N})) = \mathfrak{c}$. Were $\mathbb{R}$ countable we would have $\operatorname{card}(\mathbb{R}) \le \operatorname{card}(\mathbb{N})$, and with $\operatorname{card}(\mathbb{N})\le\operatorname{card}(\mathbb{R})$ from the inclusion $\mathbb{N}\subseteq\mathbb{R}$, Schröder-Bernstein would make $\operatorname{card}(\mathcal{P}(\mathbb{N})) = \operatorname{card}(\mathbb{N})$, which Cantor's theorem forbids. So $\mathbb{R}$ is uncountable. For the second injection Folland instead builds a surjection $\mathcal{P}(\mathbb{Z}) \to \mathbb{R}$ out of binary expansions; Steps 3 and 4 replace that by an injection, which spares us having to decide which expansions occur.

**Item 6 (beyond the continuum).** Assume $\operatorname{card}(X) > \mathfrak{c}$, so some surjection $X \to \mathbb{R}$ exists. Suppose $X$ were countable, that is, an injection $X \to \mathbb{N}$ exists. Part 2 of the earlier statement converts the surjection $X \to \mathbb{R}$ into an injection $\mathbb{R}\to X$, which composed with the injection $X \to \mathbb{N}$ gives $\operatorname{card}(\mathbb{R}) \le \operatorname{card}(\mathbb{N})$. Together with $\operatorname{card}(\mathbb{N})\le\operatorname{card}(\mathbb{R})$ and Schröder-Bernstein that makes $\operatorname{card}(\mathbb{R}) = \operatorname{card}(\mathbb{N})$, contradicting item 5 and Cantor's theorem. So $X$ is uncountable. $\square$
:::

:::remark{provenance=original}
**Sharp forms of the image identities.** The one-sided relations in the statement above become equalities exactly under the obvious hypotheses, and this is where most slips occur. For $f : X \to Y$:

- $D \subseteq f^{-1}(f(D))$ for every $D \subseteq X$, with equality for every $D$ if and only if $f$ is injective.
- $f(f^{-1}(E)) = E \cap f(X)$ for every $E \subseteq Y$; in particular $f(f^{-1}(E)) \subseteq E$, with equality for every $E$ if and only if $f$ is surjective.
- $f(\bigcap_\alpha D_\alpha) \subseteq \bigcap_\alpha f(D_\alpha)$ for every nonempty family, with equality for every such family if and only if $f$ is injective.

The failures are visible in one example: for $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^{2}$, take $D_1 = \{1\}$ and $D_2 = \{-1\}$. Then $D_1 \cap D_2 = \emptyset$, so $f(D_1 \cap D_2) = \emptyset$, while $f(D_1) \cap f(D_2) = \{1\}$. The same $f$ has $f(f^{-1}(\{-1\})) = \emptyset \neq \{-1\}$, because $f$ is not surjective, and $f^{-1}(f(\{1\})) = \{-1, 1\} \neq \{1\}$, because $f$ is not injective.

**Where the hypotheses are used in the countability list.** Item 2 needs *both* that the index set and each $X_\alpha$ be countable. Dropping the first gives a false statement: $\mathbb{R} = \bigcup_{x \in \mathbb{R}} \{x\}$ is an uncountable union of one-point sets. Item 2 also uses the axiom of choice (countable choice suffices), to pick one surjection $\mathbb{N} \to X_\alpha$ for each $\alpha$ simultaneously; the same is true of the implication "a surjection $Y \to X$ yields an injection $X \to Y$" in the second statement above, which chooses one preimage in each fibre. See :ref[Zorn's lemma and the axiom of choice]{to=found.zorn-lemma}. Item 3 needs the word *infinite* in its hypothesis and not merely "countable": a finite set is countable but admits no bijection onto $\mathbb{N}$, so the conclusion $\operatorname{card}(X) = \operatorname{card}(\mathbb{N})$ would be false for it. Item 3 is also what makes the phrase "countably infinite" unambiguous: without it, the definition used here (countable and not finite) and the one many books give (in bijection with $\mathbb{N}$) would be two different conditions.

**Technique.** The set $Y = \{x : x \notin g(x)\}$ in Cantor's theorem is the diagonal argument in its cleanest form: $Y$ differs from $g(x)$ at the point $x$, for every $x$ at once. The familiar decimal version, in which a real number is built to differ from the $n$-th number of a proposed list in its $n$-th digit, is the same argument applied to $X = \mathbb{N}$ after identifying $\mathcal{P}(\mathbb{N})$ with the set of sequences of $0$s and $1$s.
:::

:::remark[Conventions, and what the sources leave open]{provenance=adapted src="folland-1999:§0.1, p. 1, §0.3, pp. 6-7, and §0.7, p. 17; hassani-2013:§1.1, p. 2, and §1.4, p. 11; lee-2013:Appendix A, p. 600"}
**Conventions that differ between books.**

- $\mathbb{N}$. Folland (p. 1) and this handbook take $\mathbb{N} = \{1, 2, \dots\}$. Hassani (p. 2) takes $\mathbb{N}$ to be the nonnegative integers, so his index sets commonly start at $0$. Nothing in this unit depends on the choice, but formulas quoted from a book may be off by one index.
- "Countable" and "countably infinite". Both definitions here are Folland's (p. 7): countable means an injection into $\mathbb{N}$ exists, and countably infinite means countable and not finite. Lee (p. 600) defines the two in the opposite order, countably infinite first as "admits a bijection with the positive integers" and then countable as "finite or countably infinite". The two routes define the same two classes of sets, but only because of item 3 of the countability list; with Lee's definitions item 3 is a definition and the sentence "a countable set is either finite or countably infinite" is the theorem, and with Folland's it is the other way round. Some older books reserve "countable", or Folland's synonym *denumerable*, for countably infinite sets only, so that finite sets are not countable; read any such statement with the finite case checked separately.
- $\operatorname{card}(X)$ as an object, and the strict relations. We never need a cardinal *number*; only the five relations listed above are defined, as in Folland (p. 6), and his $>$ (surjection but no bijection) is not by definition the mirror image of his $<$ (injection but no bijection): that $\operatorname{card}(X) > \operatorname{card}(Y)$ and $\operatorname{card}(Y) < \operatorname{card}(X)$ say the same thing needs the injection-surjection equivalence (item 2 of "Injections both ways, and injections versus surjections" above), together with the fact that the inverse of a bijection is a bijection. Books that construct cardinals as sets (via ordinals) can write $\operatorname{card}(X)$ alone and compute with $2^{\aleph_0}$; the statements here are the same statements.

**What is deliberately left open.** The assertion "$\operatorname{card}(X) < \mathfrak{c}$ forces $X$ to be countable" is the *continuum hypothesis*. As Folland records on p. 17, set theory with choice can consistently accommodate either it or its negation, so no argument here may lean on it. Hassani (p. 11) notes that Cantor gave two proofs that $\mathbb{R}$ is not in bijection with the integers, and that the shorter second one is the argument used today.
:::

:::example[An explicit bijection $\mathbb{N}\times\mathbb{N}\to\mathbb{N}$, and a numbering of the positive rationals]{provenance=original}
The diagonal listing used in the proof is not the only enumeration of $\mathbb{N}^2$, and a different one gives formulas that can be evaluated by hand.

1. **The map.** Define $\sigma : \mathbb{N}\times\mathbb{N}\to\mathbb{N}$ by
   $$
   \sigma(j,k) = 2^{\,j-1}\,(2k-1) .
   $$
2. **Why it is a bijection.** Every $n \in \mathbb{N}$ can be written as $n = 2^{a}b$ with $a \ge 0$ an integer and $b$ odd: divide by $2$ while the result is even, which must stop because the quotients strictly decrease. The pair $(a,b)$ is determined by $n$, since $2^{a}b = 2^{a'}b'$ with $b, b'$ odd forces $a = a'$ (otherwise one side is divisible by a higher power of $2$ than the other) and then $b = b'$. Putting $a = j-1$ and $b = 2k-1$ recovers $(j,k)$ uniquely, and every $(j,k)$ arises. So $\sigma$ is a bijection, and $\mathbb{N}^2$ is countable — a second proof of item 1 of the countability list, independent of the diagonal order.
3. **Values both ways.** $\sigma(5,13) = 2^{4}\cdot 25 = 400$. In the other direction, $2024 = 2^{3}\cdot 253$ with $253$ odd, so $j = 4$ and $2k-1 = 253$, giving $k = 127$; the check is $2^{3}\cdot 253 = 2024$ and $2\cdot 127 - 1 = 253$. Thus $\sigma(4,127) = 2024$.
4. **Numbering the positive rationals.** Every $x \in \mathbb{Q}$ with $x > 0$ has exactly one representation $x = p/q$ with $p, q \in \mathbb{N}$ coprime. Define
   $$
   \tau(x) = \sigma(p,q) = 2^{\,p-1}(2q-1) .
   $$
   This is injective: $\tau(x) = \tau(x')$ gives $(p,q) = (p',q')$ because $\sigma$ is injective, and the lowest-terms representation determines $x$. So $\mathbb{Q}_{>0}$ is countable, with $\tau$ as an explicit injection into $\mathbb{N}$.
5. **Values.** $\tau(1) = \sigma(1,1) = 2^{0}\cdot 1 = 1$; $\tau(3/7) = \sigma(3,7) = 2^{2}\cdot 13 = 52$; $\tau(7/3) = \sigma(7,3) = 2^{6}\cdot 5 = 320$. The asymmetry between $52$ and $320$ is expected: $\tau$ distinguishes a rational from its reciprocal.
6. **It is an injection and not a bijection.** The number $6 = 2^{1}\cdot 3 = \sigma(2,2)$ would need $(p,q) = (2,2)$, which is not in lowest terms, so $6$ is not a value of $\tau$. By item 3 of the countability list a bijection $\mathbb{Q}_{>0}\to\mathbb{N}$ nevertheless exists, since $\mathbb{Q}_{>0}$ is countable and infinite; the point of items 1 to 3 is exactly that one need not exhibit it.
:::

:::application{provenance=original}
Whether an index set is countable decides the form every formula written over it can take.

- *Sums or integrals.* A separable Hilbert space has a countable orthonormal basis, so the field modes in a box of finite size are indexed by a countable set — in a cubical box, by $\mathbb{Z}^3$, countable by items 1 and 4 — and every state is a convergent series over that index, every partition function a sum $\sum_n e^{-\beta E_n}$. Letting the box grow replaces the countable index by $\mathbb{R}^3$, which is uncountable, and every sum must then be rewritten as an integral against a density of states. The passage from Fourier series to the Fourier transform is the same replacement, and the reason the two theories look different is a difference of cardinality in the index set.
- *Why probability is stated for sets and not for outcomes.* The outcomes of an infinite sequence of coin tosses are the maps $\mathbb{N}\to\{0,1\}$, which correspond bijectively to the subsets of $\mathbb{N}$ (a map goes to the set where it takes the value $1$). By Cantor's theorem and item 5 that set of outcomes has cardinality $\mathfrak{c}$ and is uncountable, while each individual sequence has probability $\lim_{n} 2^{-n} = 0$. A probability therefore cannot be assembled by adding up the probabilities of the individual outcomes, which is precisely why measures are defined on $\sigma$-algebras of subsets (:ref[sigma-algebras and measures]{to=measure.sigma-algebras-measures}) rather than on points.
- *Most functions cannot be written down.* Over a finite alphabet the strings of length $n$ are finitely many, so by item 2 the set of all finite strings is countable: there are only countably many formulas, programs, or closed-form expressions. The functions $\mathbb{R}\to\{0,1\}$, on the other hand, correspond to the subsets of $\mathbb{R}$, and Cantor's theorem puts their number strictly above $\mathfrak{c}$. Almost every function is therefore nameless, which is the background fact that makes numerical analysis and approximation theory necessary rather than merely convenient.
:::
