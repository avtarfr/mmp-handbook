---
id: measure.fubini-tonelli
title: Fubini and Tonelli theorems
kind: theorem
level: core
summary: Gives the conditions under which a double integral may be computed as an iterated integral in either order — non-negativity for Tonelli, absolute integrability for Fubini, sigma-finiteness for both — and shows by counterexample what goes wrong when each is dropped.
prereqs: [measure.dominated-convergence, measure.monotone-convergence-fatou, measure.lebesgue-integral, measure.measurable-functions, measure.lebesgue-measure, measure.sigma-algebras-measures]
provenance: adapted
sources:
  - work: folland-1999
    loc: "Prop. 1.7, p. 23 (finite disjoint unions of an elementary family form an algebra); §2.5, pp. 64–69: the construction of the product measure from the premeasure on finite disjoint unions of rectangles, p. 64; products of finitely many factors, p. 65; sections and Prop. 2.34, p. 65; the Monotone Class Lemma 2.35, p. 66; Thm 2.36 (sections of a set), pp. 66–67; the Fubini–Tonelli Theorem 2.37 with (2.38), p. 67; the three remarks on necessity of the hypotheses and the failure of completeness, p. 68; Thm 2.39 (the complete version), p. 68; Exercises 46–48, pp. 68–69"
    pages: "23, 64-69"
    role: the whole development — product measure, sections, the statement of Tonelli and Fubini in the form used here, the proof route (monotone class, then simple functions, then monotone convergence), and the counterexample of Exercise 46 showing that sigma-finiteness cannot be dropped
  - work: reed-simon-1980
    loc: "§I.4, Thm I.21 (Fubini's theorem) and Thm I.22 (product measure and the outer-measure formula), and the standing convention that all measures are sigma-finite. The scan's pages are out of order here: the corpus indexes Thm I.21 at p. 23, the sigma-finiteness convention at p. 25 and Thm I.22 at p. 26"
    pages: "23, 25, 26"
    role: the two-sided ("if and only if") form of the hypothesis, in which finiteness of either iterated integral of the absolute value is enough; the characterisation of the product measure by its values on rectangles and as an infimum over coverings by rectangles
  - work: stakgold-holst-2011
    loc: "§0.7, Thm 0.7.4 with (0.7.2)–(0.7.4), p. 47"
    pages: "47"
    role: the concrete form on $\\mathbb{R}^{m+n}$, in which one of three integrals of $|f|$ is assumed finite and the conclusions are stated as membership of the sections in $L^1$ together with equality of the three integrals
  - work: lee-2013
    loc: "Appendix C, Thm C.27, p. 654"
    pages: "654"
    role: the elementary version for a continuous function on a closed rectangle in $\\mathbb{R}^n$, used here as the contrast case that needs no measure theory
---

:::definition[Product sigma-algebra, sections, product measure]{provenance=adapted src="folland-1999:§2.5, pp. 64–65; reed-simon-1980:Thm I.22, p. 26"}
Let $(X,\mathcal{M},\mu)$ and $(Y,\mathcal{N},\nu)$ be measure spaces. A **rectangle** is a set $A \times B$ with $A \in \mathcal{M}$ and $B \in \mathcal{N}$, and $\mathcal{M} \otimes \mathcal{N}$ denotes the smallest $\sigma$-algebra on $X \times Y$ containing every rectangle (see :ref[sigma-algebras and measures]{to=measure.sigma-algebras-measures}).

For $E \subseteq X \times Y$ and points $x \in X$, $y \in Y$, the **sections** of $E$ are

$$
E_x = \{\, y \in Y : (x,y) \in E \,\} \subseteq Y ,
\qquad
E^y = \{\, x \in X : (x,y) \in E \,\} \subseteq X ,
$$

and for a function $f$ on $X \times Y$ the sections $f_x$ and $f^y$ are the one-variable functions $f_x(y) = f^y(x) = f(x,y)$. Sections of measurable objects are measurable: if $E \in \mathcal{M}\otimes\mathcal{N}$ then every $E_x \in \mathcal{N}$ and every $E^y \in \mathcal{M}$, and if $f$ is $\mathcal{M}\otimes\mathcal{N}$-measurable then every $f_x$ is $\mathcal{N}$-measurable and every $f^y$ is $\mathcal{M}$-measurable.

The rectangles are not closed under unions or complements, but they do form an **elementary family**: the empty set is a rectangle; an intersection of two rectangles is one, because $(A\times B)\cap(A'\times B') = (A\cap A')\times(B\cap B')$; and the complement of a rectangle is a *finite disjoint union* of rectangles, namely
$$
(A\times B)^{c} \;=\; (A^{c}\times B) \ \sqcup\ (A\times B^{c}) \ \sqcup\ (A^{c}\times B^{c}) .
$$
The third condition is the one that does the work, and by :cite[Folland's]{work=folland-1999 loc="Prop. 1.7, p. 23"} criterion an elementary family has the property that its finite disjoint unions form an algebra. So the finite disjoint unions of rectangles form an algebra $\mathcal{A}$, and the $\sigma$-algebra it generates is $\mathcal{M}\otimes\mathcal{N}$. On $\mathcal{A}$ set

$$
\pi\Bigl(\ \bigsqcup_{j=1}^{n} A_j \times B_j \ \Bigr) \;=\; \sum_{j=1}^{n} \mu(A_j)\,\nu(B_j) ,
\qquad 0\cdot\infty = 0 .
$$

This is well defined and countably additive on $\mathcal{A}$ — it is a *premeasure* — so the Carathéodory machinery of :ref[Lebesgue measure]{to=measure.lebesgue-measure} extends it to a measure on $\mathcal{M}\otimes\mathcal{N}$, the **product measure** $\mu \times \nu$. Two consequences are used below, and they carry different hypotheses.

- **The covering formula.** The Carathéodory construction *defines* the outer measure of an arbitrary $E \subseteq X\times Y$ as the infimum of $\sum_j \pi(C_j)$ over countable coverings of $E$ by members of $\mathcal{A}$; since each member of $\mathcal{A}$ is a finite union of rectangles, this is the same as
  $$
  (\mu\times\nu)(E) = \inf \ \sum_{j=1}^{\infty} \mu(A_j)\,\nu(B_j) ,
  $$
  the infimum running over all countable coverings $E \subseteq \bigcup_j A_j \times B_j$ by rectangles. **This is a definition, not a theorem, so it holds whether or not the factors are $\sigma$-finite** — a point the counterexample in the remark below depends on.
- **Uniqueness.** If $\mu$ and $\nu$ are $\sigma$-finite, then so is the premeasure $\pi$, and $\mu\times\nu$ is the *unique* measure on $\mathcal{M}\otimes\mathcal{N}$ with $(\mu\times\nu)(A\times B) = \mu(A)\nu(B)$ for every rectangle. :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm I.22"} state the uniqueness and the covering formula together, under their standing $\sigma$-finiteness hypothesis.

Recall that $\mu$ is **$\sigma$-finite** if $X$ is a countable union of sets of finite $\mu$-measure. If $\mu$ and $\nu$ are $\sigma$-finite, so is $\mu\times\nu$, since the products of the two exhausting families exhaust $X\times Y$. Write $L^{+}$ for the measurable functions with values in $[0,\infty]$.
:::

:::statement[Measure of a set through its sections]{provenance=adapted src="folland-1999:Thm 2.36, pp. 66–67"}
Let $(X,\mathcal{M},\mu)$ and $(Y,\mathcal{N},\nu)$ be $\sigma$-finite. If $E \in \mathcal{M}\otimes\mathcal{N}$, then $x \mapsto \nu(E_x)$ is $\mathcal{M}$-measurable, $y \mapsto \mu(E^y)$ is $\mathcal{N}$-measurable, and

$$
(\mu\times\nu)(E) \;=\; \int_X \nu(E_x)\,d\mu(x) \;=\; \int_Y \mu(E^y)\,d\nu(y) .
$$

In words: the measure of $E$ is obtained by sweeping a slice across $X$ and adding up the slice measures, and the answer does not depend on which variable is swept.
:::

:::statement[The Fubini-Tonelli theorem]{provenance=adapted src="folland-1999:Thm 2.37 and (2.38), p. 67"}
Let $(X,\mathcal{M},\mu)$ and $(Y,\mathcal{N},\nu)$ be $\sigma$-finite measure spaces.

1. **Tonelli.** If $f \in L^{+}(X\times Y)$, then $g(x) = \int_Y f_x \,d\nu$ lies in $L^{+}(X)$, $h(y) = \int_X f^y \,d\mu$ lies in $L^{+}(Y)$, and
   $$
   \int_{X\times Y} f \,d(\mu\times\nu)
   = \int_X\!\Bigl[\int_Y f(x,y)\,d\nu(y)\Bigr] d\mu(x)
   = \int_Y\!\Bigl[\int_X f(x,y)\,d\mu(x)\Bigr] d\nu(y) .
   $$
   No integrability is assumed: all three quantities may equal $+\infty$, and the assertion is that they are equal.
2. **Fubini.** If $f \in L^{1}(\mu\times\nu)$, then $f_x \in L^{1}(\nu)$ for almost every $x$, $f^y \in L^{1}(\mu)$ for almost every $y$, the almost-everywhere defined functions $g$ and $h$ above lie in $L^{1}(\mu)$ and $L^{1}(\nu)$ respectively, and the same chain of equalities holds.

No continuity, and no topology on $X$ or $Y$, enters either part.
:::

:::note[Three other formulations in the library]{provenance=adapted src="reed-simon-1980:Thm I.21, p. 23; stakgold-holst-2011:Thm 0.7.4, p. 47; lee-2013:Thm C.27, p. 654"}
The books in the library state the theorem in forms that differ in which hypothesis is taken as given. None contradicts the version above; they differ in convenience.

- :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm I.21"} state it as an equivalence for a measurable $f$ on $M\times N$: the iterated integral $\int_M\bigl(\int_N |f(m,n)|\,d\nu(n)\bigr)d\mu(m)$ is finite **if and only if** $\int_N\bigl(\int_M |f(m,n)|\,d\mu(m)\bigr)d\nu(n)$ is finite, and when one of them (hence both) is finite, the two iterated integrals of $f$ itself agree. Their $\sigma$-finiteness hypothesis is not repeated in the statement because they have already declared that every measure they use is $\sigma$-finite. This "if and only if" is just Tonelli applied to $|f|$: it is the practical form, because it says that either iterated integral of $|f|$ may be used as the test.
- :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 0.7.4"} state the concrete case $X\times Y = \mathbb{R}^{m}\times\mathbb{R}^{n}$ for measurable $f$: if one or more of the double integral $I_1 = \int_{\mathbb{R}^{m+n}}|f|$ and the two iterated integrals $I_2, I_3$ of $|f|$ exists and is finite, then $f(\cdot,y) \in L^1(\mathbb{R}^m)$ for almost every $y$, $f(x,\cdot) \in L^1(\mathbb{R}^n)$ for almost every $x$, the two partial integrals are themselves integrable, and $I_1 = I_2 = I_3$. Lebesgue measure on $\mathbb{R}^k$ is $\sigma$-finite, so no extra hypothesis is needed.
- :cite[Lee]{work=lee-2013 loc="Thm C.27"} gives the version that needs no measure theory at all: for $f$ continuous on a closed rectangle $A = [a_1,b_1]\times\cdots\times[a_n,b_n] \subset \mathbb{R}^n$, the integral over $A$ equals the $n$-fold iterated integral. A continuous function on a compact rectangle is bounded, hence absolutely integrable, so this is a special case of Fubini — but it is proved directly from the Riemann theory and is all that is needed in differential geometry.
:::

:::idea{provenance=original}
Everything reduces to indicator functions. For $f = \chi_E$ the statement is that the measure of $E$ can be computed by slicing, and that statement is true for rectangles by the very definition of $\mu\times\nu$. The family of sets for which it is true is closed under increasing unions and decreasing intersections — the first by monotone convergence, the second by dominated convergence — so it is a monotone class containing the algebra of finite disjoint unions of rectangles, and the monotone class lemma makes it all of $\mathcal{M}\otimes\mathcal{N}$. From indicators one passes to non-negative simple functions by linearity, and from simple functions to all of $L^{+}$ by monotone convergence, which is what makes Tonelli a theorem about non-negative functions and nothing else. Fubini is then bookkeeping: split a complex integrable $f$ into four non-negative pieces, apply Tonelli to each, and note that the pieces have finite integrals so the subtractions are legitimate. The two places where a hypothesis is genuinely consumed are the decreasing-intersection step, which needs finiteness and hence $\sigma$-finiteness, and the subtraction, which needs $f$ to be absolutely integrable.
:::

:::proof[Sections: the monotone class argument]{provenance=adapted src="folland-1999:Thm 2.36 with Lemma 2.35, pp. 66–67"}
**Step 1: reduce to finite measures.** Suppose first that $\mu(X) < \infty$ and $\nu(Y) < \infty$. Let $\mathcal{C}$ be the collection of all $E \in \mathcal{M}\otimes\mathcal{N}$ for which the two section functions are measurable and the displayed identity holds.

**Step 2: rectangles and the algebra they generate.** For $E = A\times B$ the sections are $E_x = B$ if $x \in A$ and $E_x = \varnothing$ otherwise, so $\nu(E_x) = \nu(B)\chi_A(x)$, a measurable function whose integral is $\mu(A)\nu(B)$; symmetrically for $E^y$. Both integrals therefore equal $(\mu\times\nu)(A\times B)$, so every rectangle lies in $\mathcal{C}$. Sections and integrals are additive over disjoint unions, so every finite disjoint union of rectangles lies in $\mathcal{C}$; that is, $\mathcal{A} \subseteq \mathcal{C}$.

**Step 3: $\mathcal{C}$ is closed under increasing unions.** Let $E_1 \subseteq E_2 \subseteq \cdots$ lie in $\mathcal{C}$ with union $E$. Taking sections commutes with unions, so $\mu\bigl((E_n)^y\bigr)$ increases to $\mu(E^y)$ by continuity of a measure from below. A pointwise increasing limit of measurable functions is measurable, and :ref[the monotone convergence theorem]{to=measure.monotone-convergence-fatou} gives
$$
\int_Y \mu(E^y)\,d\nu(y) = \lim_n \int_Y \mu\bigl((E_n)^y\bigr)d\nu(y) = \lim_n (\mu\times\nu)(E_n) = (\mu\times\nu)(E) ,
$$
the last equality again by continuity from below, now for $\mu\times\nu$. The same argument works in the other variable, so $E \in \mathcal{C}$.

**Step 4: $\mathcal{C}$ is closed under decreasing intersections.** Let $E_1 \supseteq E_2 \supseteq \cdots$ lie in $\mathcal{C}$ with intersection $E$. Here the sections decrease, so we need continuity from above, which requires a finite dominating quantity: the function $y \mapsto \mu\bigl((E_1)^y\bigr)$ is bounded above by the constant $\mu(X) < \infty$, and a bounded function on a space of finite measure is integrable because $\nu(Y) < \infty$, so it belongs to $L^1(\nu)$ and dominates every $\mu\bigl((E_n)^y\bigr)$. :ref[Dominated convergence]{to=measure.dominated-convergence} then passes the limit through the integral, and $E \in \mathcal{C}$. **This is the step that uses finiteness of the measures.**

**Step 5: the monotone class lemma.** By steps 3 and 4, $\mathcal{C}$ is a monotone class; by step 2 it contains the algebra $\mathcal{A}$. :cite[Folland's]{work=folland-1999 loc="Lemma 2.35, p. 66"} monotone class lemma says that the monotone class generated by an algebra is already the $\sigma$-algebra generated by it, so $\mathcal{C} \supseteq \mathcal{M}\otimes\mathcal{N}$, which is the theorem for finite measures.

**Step 6: back to $\sigma$-finite measures.** Choose rectangles $X_j \times Y_j$ of finite product measure increasing to $X\times Y$; this is possible precisely because both factors are $\sigma$-finite. Step 5 applies to each restricted space and gives
$$
(\mu\times\nu)\bigl(E \cap (X_j\times Y_j)\bigr) = \int_X \chi_{X_j}(x)\,\nu(E_x \cap Y_j)\,d\mu(x) = \int_Y \chi_{Y_j}(y)\,\mu(E^y \cap X_j)\,d\nu(y) .
$$
Let $j \to \infty$. On the left, the sets $E \cap (X_j\times Y_j)$ increase to $E$, so $(\mu\times\nu)\bigl(E\cap(X_j\times Y_j)\bigr) \to (\mu\times\nu)(E)$ by **continuity of $\mu\times\nu$ from below**. On the right, the sections of the truncations increase to the sections of $E$, so both integrands increase pointwise to $\nu(E_x)$ and $\mu(E^y)$, and monotone convergence carries the limit inside the two integrals. Equating the three limits gives the identity. $\square$
:::

:::proof[Tonelli, then Fubini]{provenance=adapted src="folland-1999:Thm 2.37, p. 67"}
**Step 1: indicators.** For $f = \chi_E$ with $E \in \mathcal{M}\otimes\mathcal{N}$ we have $f_x = \chi_{E_x}$ and $f^y = \chi_{E^y}$, so $g(x) = \nu(E_x)$ and $h(y) = \mu(E^y)$ and the previous theorem is exactly Tonelli for $f$.

**Step 2: simple functions.** A non-negative simple function is a finite non-negative combination $\sum_k c_k \chi_{E_k}$. Sectioning, the integral over $X\times Y$, and both iterated integrals are all linear in $f$ with non-negative coefficients, so step 1 extends to this case. Measurability of $g$ and $h$ is preserved because finite sums of measurable functions are measurable.

**Step 3: general $f \in L^{+}$.** By the simple-function approximation of :ref[measurable functions]{to=measure.measurable-functions}, choose simple $0 \le f_1 \le f_2 \le \cdots$ with $f_n \to f$ pointwise on $X\times Y$. For each fixed $x$ the sections $(f_n)_x$ increase to $f_x$, so monotone convergence in the $Y$ variable gives $g_n(x) \uparrow g(x)$; in particular $g$ is a pointwise limit of measurable functions and so is measurable, and likewise $h_n \uparrow h$. Applying monotone convergence twice more,
$$
\int_X g\,d\mu = \lim_n \int_X g_n \,d\mu = \lim_n \int_{X\times Y} f_n\,d(\mu\times\nu) = \int_{X\times Y} f\,d(\mu\times\nu) ,
$$
where the middle equality is step 2. The same three lines in the other order give $\int_Y h\,d\nu = \int f\,d(\mu\times\nu)$. This is Tonelli. **Beyond the $\sigma$-finiteness already consumed in the previous proof, no hypothesis on $f$ other than $f \ge 0$ and measurability is used**, which is why Tonelli is the test one applies first.

**Step 4: integrable sections.** Suppose $f \in L^{+}$ with $\int f \,d(\mu\times\nu) < \infty$. By step 3, $\int_X g\,d\mu < \infty$, and a non-negative function with finite integral is finite almost everywhere. Hence $g(x) = \int_Y f_x\,d\nu < \infty$ for almost every $x$, that is $f_x \in L^1(\nu)$ for almost every $x$; symmetrically $f^y \in L^1(\mu)$ for almost every $y$.

**Step 5: Fubini.** Let $f \in L^1(\mu\times\nu)$ be complex valued and decompose it as
$$
f = (\operatorname{Re} f)^{+} - (\operatorname{Re} f)^{-} + i (\operatorname{Im} f)^{+} - i(\operatorname{Im} f)^{-} ,
$$
four functions in $L^{+}$ each dominated by $|f|$ and hence each of finite integral. Steps 3 and 4 apply to each of the four: their sections are integrable almost everywhere, their partial integrals are integrable functions, and for each of them the double integral equals both iterated integrals. Adding the four identities with the coefficients $1,-1,i,-i$ gives the result for $f$. The subtractions are legitimate because each of the four integrals is finite — **this is where $f \in L^1$, rather than merely $f$ measurable, is used**; and the exceptional null sets are discarded by taking the union of the four, which is again null. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="folland-1999:the remarks following Thm 2.37 and Exercises 46–48, pp. 68–69"}
- **$\sigma$-finiteness** is consumed at step 4 of the first proof, where dominated convergence needs a finite majorant, and again at step 6 where the exhausting rectangles are built. It cannot be dropped. :cite[Folland]{work=folland-1999 loc="Exercise 46, pp. 68–69"} gives the standard witness: take $X = Y = [0,1]$ with the Borel sets, $\mu$ Lebesgue measure and $\nu$ counting measure, and let $D = \{(x,x)\}$ be the diagonal. Counting measure on an uncountable set is not $\sigma$-finite. Each section $D^y = \{y\}$ has $\mu(D^y)=0$, so $\int_Y \mu(D^y)\,d\nu(y) = 0$; each section $D_x = \{x\}$ has $\nu(D_x)=1$, so $\int_X \nu(D_x)\,d\mu(x) = 1$. For the product measure itself we use the covering formula of the definition, which is legitimate here precisely because it is the Carathéodory outer measure attached to the premeasure $\pi$ and so does not presuppose the $\sigma$-finiteness that has just failed. Suppose $D \subseteq \bigcup_j A_j\times B_j$ with $\sum_j \mu(A_j)\nu(B_j) < \infty$. Every $j$ with $B_j$ infinite has $\nu(B_j)=\infty$ and hence $\mu(A_j)=0$; the union $S$ of the finite $B_j$ is countable, hence $\mu(S)=0$. Any $x \notin S$ lies in some $A_j$ with $B_j$ infinite, so $[0,1]\setminus S$ is covered by countably many $\mu$-null sets, which is impossible. Hence $(\mu\times\nu)(D) = \infty$, and the three numbers are $0$, $1$ and $\infty$: all different, as Folland asserts.
- **Non-negativity or integrability** is consumed at step 5 of the second proof. Folland notes two separate ways the conclusion can fail without it: the sections can all be measurable and both iterated integrals exist while $f$ is not even product-measurable, and $f$ can be product-measurable with both iterated integrals existing while $\int|f|\,d(\mu\times\nu) = \infty$. In both cases the two iterated integrals need not agree. The second failure already happens with counting measure on $\mathbb{N}\times\mathbb{N}$, a perfectly $\sigma$-finite space; see the example below.
- **Measurability of $f$ on the product** is not implied by measurability of all its sections, and the theorem says nothing about functions that are not product-measurable.
- **Completeness is not inherited.** Folland points out that $\mu\times\nu$ is almost never complete even when $\mu$ and $\nu$ are: if $\mu(A) = 0$ for some non-empty $A$ and $\mathcal{N}$ is not all of $\mathcal{P}(Y)$, then for $E \notin \mathcal{N}$ the set $A \times E$ is a subset of the null set $A\times Y$ but is not in $\mathcal{M}\otimes\mathcal{N}$. Lebesgue measure on $\mathbb{R}^2$ is the completion of the product of the two one-dimensional Lebesgue measures, not the product itself; for that setting Folland's Thm 2.39 restates Fubini–Tonelli for functions measurable with respect to the completion, concluding only that $f_x$ is $\mathcal{N}$-measurable for almost every $x$ and $f^y$ is $\mathcal{M}$-measurable for almost every $y$. That is the version implicitly used whenever one integrates over $\mathbb{R}^2$.
- **The conclusion of Tonelli is an identity between possibly infinite numbers**, so it never asserts convergence. It is used to decide convergence, not to assume it.
:::

:::example[A $\sigma$-finite counterexample: the two orders differ]{provenance=adapted src="folland-1999:Exercise 48, p. 69"}
Let $X = Y = \mathbb{N}$ with counting measure, which is $\sigma$-finite, so the only hypothesis available to fail is absolute integrability. The array used here is the one in :cite[Folland's]{work=folland-1999 loc="Exercise 48, p. 69"} exercise, with the roles of the two indices interchanged; the computation and the discussion are ours. Integration is summation, and $\mathcal{M}\otimes\mathcal{N}$ is the whole power set, so every $f$ is measurable. Put

$$
a_{m,n} = \begin{cases} \ \ 1, & n = m, \\ -1, & n = m+1, \\ \ \ 0, & \text{otherwise.}\end{cases}
$$

**Summing over $n$ first.** For each fixed $m$ the row has exactly the two non-zero entries $a_{m,m}=1$ and $a_{m,m+1}=-1$, so $\sum_n a_{m,n} = 0$ and therefore $\sum_m \sum_n a_{m,n} = 0$.

**Summing over $m$ first.** The column $n=1$ contains only $a_{1,1}=1$, so its sum is $1$. For $n \ge 2$ the column contains $a_{n,n}=1$ and $a_{n-1,n}=-1$ and nothing else, so its sum is $0$. Therefore $\sum_n\sum_m a_{m,n} = 1$.

The two iterated integrals are $0$ and $1$. Both exist, every section is integrable, and the space is $\sigma$-finite; what fails is that $\sum_{m,n}|a_{m,n}| = \sum_m 2 = \infty$, so $f \notin L^1(\mu\times\nu)$ and Fubini does not apply. Tonelli applied to $|a_{m,n}|$ detects this immediately: both iterated sums of $|a_{m,n}|$ equal $\infty$, in agreement with Tonelli and in warning against Fubini.
:::

:::method[Interchanging the order of integration]{provenance=original}
1. **Check product-measurability of $f$.** For an explicit formula built from continuous functions and countably many measurable sets this is automatic; it is a genuine hypothesis only for exotic constructions.
2. **Check that both factors are $\sigma$-finite.** Lebesgue measure on $\mathbb{R}^k$, any probability measure and counting measure on a countable set all are. Counting measure on an uncountable set is the usual offender.
3. **Apply Tonelli to $|f|$.** Compute $\int\!\int |f|$ in whichever order is easier; Tonelli guarantees the answer is the same in either order and equals $\int |f| \,d(\mu\times\nu)$, finite or not.
4. **If that number is finite**, $f \in L^1(\mu\times\nu)$ and Fubini licenses the interchange for $f$ itself. If it is infinite, stop: the interchange is not justified, and the example above shows it can genuinely be false.
5. **If $f \ge 0$ already**, skip steps 3 and 4: Tonelli applies directly, and an infinite answer is a legitimate conclusion rather than an obstruction.
6. **Term-by-term integration of a series** is the case $\mu$ = counting measure on $\mathbb{N}$: $\int \sum_n f_n = \sum_n \int f_n$ holds for non-negative $f_n$ with no further hypothesis, and for general $f_n$ as soon as $\sum_n \int |f_n| < \infty$.
:::

:::example[Evaluating a double integral by Tonelli]{provenance=original}
Compute

$$
I = \int_0^1\!\!\int_0^1 \frac{dx\,dy}{1 - xy} .
$$

**Step 1: the integrand is non-negative.** On the open square $(0,1)^2$ we have $0 < xy < 1$, so $1/(1-xy) > 0$, and it is continuous there, hence Borel measurable. Lebesgue measure on $(0,1)$ is finite, so both factors are $\sigma$-finite. Tonelli therefore applies with no integrability check.

**Step 2: expand in a geometric series.** For $0 < xy < 1$,
$$
\frac{1}{1-xy} = \sum_{k=0}^{\infty} (xy)^k = \sum_{k=0}^{\infty} x^k y^k ,
$$
a series of non-negative terms. Counting measure on $\{0,1,2,\dots\}$ is $\sigma$-finite, so Tonelli applies again, now to the product of counting measure with the two copies of Lebesgue measure: the sum and the two integrals may be done in any order.

**Step 3: integrate term by term.**
$$
I = \sum_{k=0}^{\infty} \int_0^1 x^k \,dx \int_0^1 y^k \,dy = \sum_{k=0}^{\infty} \frac{1}{k+1}\cdot\frac{1}{k+1} = \sum_{k=0}^{\infty}\frac{1}{(k+1)^2} = \sum_{n=1}^{\infty}\frac{1}{n^2} .
$$

**Step 4: the number.** The last series is $\zeta(2) = \pi^2/6$, so

$$
I = \frac{\pi^2}{6} = 1.6449340668\ldots
$$

Numerical quadrature of the double integral gives $1.6449340668$, agreeing to ten decimals.

**What would go wrong without Tonelli.** Nothing here is absolutely convergent by inspection: the integrand is unbounded near the corner $(1,1)$, and the naive justification "the series converges uniformly" is false on $(0,1)^2$. Non-negativity is the whole licence. Had the series been $\sum_k (-1)^k (xy)^k = 1/(1+xy)$ one would first apply Tonelli to the absolute values, find $\sum_k 1/(k+1)^2 = \pi^2/6 < \infty$, and only then interchange, obtaining $\int_0^1\!\int_0^1 (1+xy)^{-1} dx\,dy = \sum_{k\ge 0}(-1)^k/(k+1)^2 = \pi^2/12 = 0.8224670334\ldots$
:::

:::application{provenance=original}
**Convolution.** That $f * g (x) = \int f(x-y) g(y)\,dy$ is defined almost everywhere and satisfies $\|f*g\|_1 \le \|f\|_1\|g\|_1$ for $f,g \in L^1(\mathbb{R}^n)$ is proved by applying Tonelli to $|f(x-y)g(y)|$ on $\mathbb{R}^n\times\mathbb{R}^n$: the iterated integral in $x$ first factorises into $\|f\|_1\|g\|_1$, which is finite, and Fubini then gives the rest. Every manipulation of :ref[the convolution theorem]{to=fourier.convolution-theorem} and of Green's-function solutions written as convolutions rests on this.

**Fourier analysis in several variables.** Interchanging $\int_{\mathbb{R}^n}$ with $\int_{\mathbb{R}^n}$ is what turns the Fourier transform of a convolution into a product, and what lets the $n$-dimensional transform of :ref[the transform on $\mathbb{R}^n$]{to=fourier.fourier-transform-rn} be computed as $n$ one-dimensional transforms when the integrand factorises. For a Gaussian the factorisation plus Fubini reduces an $n$-dimensional integral to the $n$th power of a one-dimensional one.

**Statistical mechanics.** A classical partition function $Z = \int e^{-\beta H(q,p)} dq\,dp$ with $H = \sum_i H_i(q_i,p_i)$ factorises into $\prod_i \int e^{-\beta H_i}$ exactly by Tonelli, the integrand being positive; this is the mathematical content of "non-interacting degrees of freedom contribute multiplicatively to $Z$ and additively to $\log Z$".

**Probability.** Independence means exactly that the joint law factorises as a product measure, so $\mathbb{E}[XY] = \mathbb{E}[X]\mathbb{E}[Y]$ for independent integrable $X, Y$ is Fubini on the product space, and the density of a sum is the convolution of the densities. The same theorem justifies the ubiquitous identity $\mathbb{E}[X] = \int_0^\infty \mathbb{P}(X > t)\,dt$ for $X \ge 0$, obtained by applying Tonelli to $\chi_{\{X(\omega) > t\}}$ on $\Omega \times (0,\infty)$. See :ref[joint distributions]{to=prob.joint-distributions}.

**Changing the order in physics calculations.** Swapping a time integral with a space integral, a sum over modes with an integral over the domain, or a radial with an angular integral are all instances; the practical discipline step 3 of the method imposes — test the absolute value first — is what separates a safe interchange from a divergent one in, for instance, retarded-potential and perturbation-series calculations.
:::
