---
id: measure.measurable-functions
title: Measurable functions
kind: definition
level: core
summary: Defines a measurable function as one whose preimages of Borel sets are measurable, shows that the class survives sums, products, suprema and pointwise limits, and builds every non-negative measurable function as an increasing pointwise limit of simple functions — the staircase on which the Lebesgue integral is erected.
prereqs: [measure.sigma-algebras-measures, measure.lebesgue-measure, found.limits-of-sequences, found.continuity-homeomorphism]
provenance: adapted
sources:
  - work: folland-1999
    loc: "Ch. 2, §2.1: measurable mappings and Prop. 2.1, p. 43; Cor. 2.2, the Lebesgue/Borel warning and Prop. 2.3, p. 44; the extended real line and Props. 2.6 and 2.7, p. 45; Cor. 2.8, Cor. 2.9, positive and negative parts, characteristic and simple functions, p. 46; Cor. 2.5 (a complex function is measurable exactly when its real and imaginary parts are), p. 45; Thm 2.10 and Prop. 2.11, p. 47; Exercises 2, 3, 4, 5, 6 and 9, p. 48"
    pages: "43-48"
    role: the definition of a measurable mapping between measurable spaces; the criterion that it is enough to test preimages of a generating family, and its corollaries for continuous functions and for the four families of rays; the Borel structure on the extended real line; closure under sums, products, suprema, infima, upper and lower limits and pointwise limits; characteristic and simple functions; the explicit dyadic construction of an increasing sequence of simple functions converging to a non-negative measurable function, with the monotonicity and the error bound it satisfies; the fact that almost-everywhere limits are measurable exactly when the measure is complete; the warning that a composition of Lebesgue measurable functions need not be measurable, with the Cantor-function counterexample, and that an uncountable supremum can fail to be measurable; the equivalence of measurability of a complex function with measurability of its two real parts; the reduction of measurability to the two pieces of a measurable splitting of the domain; the sufficiency of testing the rays at rational levels only
  - work: reed-simon-1980
    loc: "§I.3, the definition of a Borel function and the proposition characterising it by preimages of Borel sets, p. 15; the proposition on closure of the Borel class under algebraic operations and pointwise limits, p. 16"
    pages: "15-16"
    role: the definition of a Borel function by preimages of intervals; the equivalence with preimages of all Borel sets and the resulting stability of the class under composition; the list of operations (sum, product, scalar multiple, maximum, minimum, pointwise limit, absolute value) under which Borel functions are closed; the remark that for Lebesgue measurable functions composition is no longer safe
  - work: evans-2010
    loc: "Appendix E, §E.2, the definition of a measurable function and the statements following it, p. 685; the use of simple-function approximation to define the integral, p. 686"
    pages: "685-686"
    role: the open-set form of the definition used in the PDE literature; the statements that continuous functions are measurable, that sums and products of measurable functions are measurable and that upper and lower limits of a sequence of measurable functions are measurable; the role of simple-function approximation in defining the integral of a non-negative measurable function
  - work: stakgold-holst-2011
    loc: "§0.7, the shopkeeper analogy and the partition of the range, p. 42; the definition of a set of measure zero and of a measurable function by modification on a small set, with Examples 1 and 2 (piecewise continuous and Dirichlet functions), pp. 43–44"
    pages: "42-44"
    role: the image of sorting the takings by denomination rather than by transaction, which is the idea of partitioning the range; the alternative, Littlewood-style definition of a measurable function on [0, 1] as one that becomes continuous after its values are changed on a set of arbitrarily small measure, and the two worked examples that go with it
---

:::definition[Measurable mappings and measurable functions]{provenance=adapted src="folland-1999:§2.1, pp. 43–46; reed-simon-1980:§I.3, p. 15; evans-2010:Appendix E.2, p. 685"}
Any map $f : X \to Y$ between sets pulls subsets back: $f^{-1}(E) = \{x \in X : f(x) \in E\}$. Preimage commutes with every set operation — $f^{-1}(\bigcup_j E_j) = \bigcup_j f^{-1}(E_j)$, $f^{-1}(E^{c}) = \bigl(f^{-1}(E)\bigr)^{c}$ — and this single fact drives the whole unit.

**Measurable mapping.** Let $(X,\mathcal{M})$ and $(Y,\mathcal{N})$ be measurable spaces. A map $f : X \to Y$ is **$(\mathcal{M},\mathcal{N})$-measurable** if $f^{-1}(E) \in \mathcal{M}$ for every $E \in \mathcal{N}$. Because preimage composes, $(g \circ f)^{-1}(E) = f^{-1}\bigl(g^{-1}(E)\bigr)$, a composition of measurable mappings is measurable.

**Measurable function.** When $Y = \mathbb{R}$ or $\mathbb{C}$ we always take $\mathcal{N}$ to be the Borel $\sigma$-algebra, and call $f$ **$\mathcal{M}$-measurable**, or just measurable. On the line two different $\sigma$-algebras compete for the *domain*: $f : \mathbb{R}\to\mathbb{C}$ is **Borel measurable** if it is $(\mathcal{B}_{\mathbb{R}}, \mathcal{B}_{\mathbb{C}})$-measurable and **Lebesgue measurable** if it is $(\mathcal{L}, \mathcal{B}_{\mathbb{C}})$-measurable, with $\mathcal{L}$ the Lebesgue measurable sets of :ref[Lebesgue measure]{to=measure.lebesgue-measure}. Since $\mathcal{B}_{\mathbb{R}} \subseteq \mathcal{L}$, Borel measurable implies Lebesgue measurable but not conversely.

**Extended-real-valued functions.** It is convenient to allow the values $\pm\infty$. Put $\overline{\mathbb{R}} = [-\infty,\infty]$ and
$$
\mathcal{B}_{\overline{\mathbb{R}}} = \bigl\{\, E \subseteq \overline{\mathbb{R}} \;:\; E \cap \mathbb{R} \in \mathcal{B}_{\mathbb{R}} \,\bigr\} ,
$$
which is generated by the rays $(a,\infty]$, $a \in \mathbb{R}$, and also by the rays $[-\infty,a)$. A function $f : X \to \overline{\mathbb{R}}$ is measurable if it is $(\mathcal{M}, \mathcal{B}_{\overline{\mathbb{R}}})$-measurable.

**Characteristic and simple functions.** For $E \subseteq X$ the **characteristic function** $\chi_E$ takes the value $1$ on $E$ and $0$ off $E$; it is measurable exactly when $E \in \mathcal{M}$, since its only non-trivial preimages are $E$, $E^{c}$, $X$ and $\varnothing$. A **simple function** is any $\varphi$ that can be written as $\varphi = \sum_{j=1}^{n} c_j \chi_{A_j}$ for some finite $n$, some $c_j \in \mathbb{C}$ and some $A_j \in \mathcal{M}$. Equivalently, $\varphi$ is simple when it is measurable and its range is a finite subset of $\mathbb{C}$; in that case, writing the distinct values as $z_1,\dots,z_n$ and $E_j = \varphi^{-1}(\{z_j\})$ gives the **standard representation** $\varphi = \sum_{j=1}^{n} z_j \chi_{E_j}$ with the $E_j$ disjoint and measurable. Simple functions are never allowed the values $\pm\infty$.

**Positive and negative parts.** For $f : X \to \overline{\mathbb{R}}$ set $f^{+} = \max(f,0)$ and $f^{-} = \max(-f,0)$, so that $f = f^{+} - f^{-}$ and $\lvert f \rvert = f^{+} + f^{-}$, with both parts non-negative. This decomposition and the simple-function approximation below are what reduce :ref[the Lebesgue integral]{to=measure.lebesgue-integral} to the integral of a non-negative simple function.
:::

:::note[A different-looking definition]{provenance=adapted src="stakgold-holst-2011:§0.7, p. 43"}
:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 43"} do not build a $\sigma$-algebra at all. They call a set $E \subseteq [0,1]$ of **measure zero** if for every $\varepsilon > 0$ it can be covered by finitely or countably many intervals of total length below $\varepsilon$, and they then call $f$ **measurable** if for every $\varepsilon > 0$ its values can be changed on a set of measure less than $\varepsilon$ so as to produce a continuous function. Their two examples are a piecewise continuous $f$ with finitely many jumps, repaired by replacing it near each jump with a straight segment, and the Dirichlet function (one at the rationals, zero at the irrationals), repaired by resetting it to zero on the rationals, a set of measure zero.

On $[0,1]$ the two definitions agree for finite-valued $f$. One direction is elementary. Apply their condition with $\varepsilon = 2^{-n}$: there are a continuous $g_n$ and a set $A_n$ with $m^{*}(A_n) < 2^{-n}$ such that $f = g_n$ off $A_n$. Put $B_K = \bigcup_{n \ge K}A_n$ and $A = \bigcap_{K \ge 1}B_K$. Countable subadditivity gives $m^{*}(B_K) \le \sum_{n \ge K}2^{-n} = 2^{\,1-K}$, hence $m^{*}(A) = 0$, so $A$ is a Lebesgue null set. If $x \notin A$ then $x \notin B_K$ for some $K$, so $x$ lies in no $A_n$ with $n \ge K$ and therefore $g_n(x) = f(x)$ for every $n \ge K$. Thus $g_n \to f$ pointwise off the null set $A$; the $g_n$ are continuous, hence measurable, so $f$ is Lebesgue measurable by the limit statement below together with the completeness of Lebesgue measure. The converse direction is Lusin's theorem, which is not proved in this handbook. **We use the $\sigma$-algebra definition throughout**, because it is the one that makes sense on an abstract measure space, where there is no notion of continuity to fall back on.
:::

:::statement[It is enough to test a generating family]{label="Proposition" provenance=adapted src="folland-1999:Prop. 2.1 and Cor. 2.2, pp. 43–44, and Prop. 2.3, p. 44; reed-simon-1980:§I.3, pp. 15–16"}
Let $(X,\mathcal{M})$ and $(Y,\mathcal{N})$ be measurable spaces and suppose $\mathcal{N} = \mathcal{M}(\mathcal{E})$ is generated by $\mathcal{E}$. Then $f : X \to Y$ is $(\mathcal{M},\mathcal{N})$-measurable **if and only if** $f^{-1}(E) \in \mathcal{M}$ for every $E \in \mathcal{E}$.

Three consequences:

a. **Continuity suffices.** Let $X$ and $Y$ carry topologies — they may be metric spaces, for instance. Any map between them that is continuous is then measurable for the two Borel $\sigma$-algebras, that is, $(\mathcal{B}_X,\mathcal{B}_Y)$-measurable.
b. **One family of rays suffices.** For $f : X \to \mathbb{R}$ (or $\overline{\mathbb{R}}$), measurability is equivalent to each one of
   $$
   f^{-1}\bigl((a,\infty]\bigr) \in \mathcal{M}, \quad
   f^{-1}\bigl([a,\infty]\bigr) \in \mathcal{M}, \quad
   f^{-1}\bigl([-\infty,a)\bigr) \in \mathcal{M}, \quad
   f^{-1}\bigl([-\infty,a]\bigr) \in \mathcal{M}
   $$
   holding for all $a \in \mathbb{R}$ — only one of the four lists need be checked. In the notation of :cite[Evans]{work=evans-2010 loc="Appendix E.2, p. 685"}, it is likewise enough that $f^{-1}(U) \in \mathcal{M}$ for every open $U \subseteq \mathbb{R}$.
c. **Composition with a Borel function is safe.** If $f : X \to \mathbb{R}$ is $\mathcal{M}$-measurable and $h : \mathbb{R}\to\mathbb{R}$ is Borel measurable, then $h \circ f$ is $\mathcal{M}$-measurable. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 16"} record this as the statement that a composition of two Borel functions is Borel.
:::

:::statement[Closure under the usual operations]{provenance=adapted src="folland-1999:Props. 2.6 and 2.7 and Cors. 2.8 and 2.9, pp. 45–46; reed-simon-1980:§I.3, p. 16; evans-2010:Appendix E.2, p. 685"}
Let $(X,\mathcal{M})$ be a measurable space.

a. **Algebra.** A function $f : X \to \mathbb{C}$ is measurable **if and only if** $\operatorname{Re}f$ and $\operatorname{Im}f$ are measurable :cite[]{work=folland-1999 loc="Cor. 2.5, p. 45"}. If $f, g : X \to \mathbb{C}$ are measurable, so are $f + g$ and $fg$, and so are $\lambda f$ for $\lambda \in \mathbb{C}$ and $\lvert f \rvert$. For $\overline{\mathbb{R}}$-valued functions the same holds once the indeterminate expressions are fixed by convention: $0 \cdot (\pm\infty) = 0$, and the value of $f+g$ is assigned by hand at the points where $f$ and $g$ are infinite of opposite sign :cite[]{work=folland-1999 loc="Exercise 2, p. 48"}.
b. **Lattice.** If $f,g : X \to \overline{\mathbb{R}}$ are measurable, so are $\max(f,g)$ and $\min(f,g)$; in particular $f^{+}$, $f^{-}$ and $\lvert f\rvert$ are measurable.
c. **Countable suprema and limits.** If $f_1, f_2, \dots : X \to \overline{\mathbb{R}}$ are measurable, then so are
   $$
   \sup_j f_j, \qquad \inf_j f_j, \qquad \limsup_{j\to\infty} f_j, \qquad \liminf_{j\to\infty} f_j ,
   $$
   and if $f(x) = \lim_{j\to\infty} f_j(x)$ exists at every $x$, then $f$ is measurable. The same holds for complex-valued $f_j$ with a pointwise limit, by applying the real case to the real and imaginary parts and recombining them with the equivalence in (a) :cite[]{work=folland-1999 loc="Cor. 2.9, p. 46"}.
d. **The set where the limit exists** is measurable: $\{x : \lim_j f_j(x) \text{ exists in } \mathbb{R}\} \in \mathcal{M}$ :cite[]{work=folland-1999 loc="Exercise 3, p. 48"}.
:::

:::statement[Approximation by simple functions]{provenance=adapted src="folland-1999:Thm 2.10, p. 47"}
Let $(X,\mathcal{M})$ be a measurable space.

a. **Non-negative case.** Let $f : X \to [0,\infty]$ be measurable. Then $f$ is the limit of a staircase that only ever rises: simple functions $\varphi_n$, $n \ge 0$, may be chosen so that
   $$
   0 \le \varphi_0 \le \varphi_1 \le \varphi_2 \le \cdots, \qquad \varphi_n \le f \ \text{ for each } n, \qquad \lim_{n \to \infty}\varphi_n(x) = f(x) \ \text{ for each } x \in X,
   $$
   and so that on any $A \subseteq X$ with $\sup_A f < \infty$ the convergence is uniform.
b. **Complex case.** Let $f : X \to \mathbb{C}$ be measurable. Then simple $\varphi_n$ may be chosen whose moduli rise towards that of $f$, $0 \le \lvert\varphi_0\rvert \le \lvert \varphi_1 \rvert \le \cdots \le \lvert f \rvert$, with $\varphi_n(x) \to f(x)$ at each $x$, the convergence again being uniform wherever $f$ stays bounded.
:::

:::idea{provenance=original}
Everything here rests on one observation: a preimage is a perfect homomorphism of set operations. So the collection $\{E \subseteq Y : f^{-1}(E) \in \mathcal{M}\}$ is automatically a $\sigma$-algebra, whatever $f$ is. To prove a function measurable one therefore never has to look at all Borel sets; it is enough to catch a generating family in that collection, and the $\sigma$-algebra generated takes care of the rest. Continuity, the rays $(a,\infty]$, and the open sets are three different ways of supplying such a family.

Closure under limits comes from writing a limit operation as a countable set operation. The point $x$ satisfies $\sup_j f_j(x) > a$ exactly when *some* $f_j(x) > a$, which is a countable union; upper and lower limits are an infimum of suprema, hence two such operations in a row. That is the whole proof, and it is why *countable* families are the natural ones: an uncountable supremum would need an uncountable union, which a $\sigma$-algebra does not supply.

Simple approximation is Lebesgue's original idea turned into a formula: instead of chopping the domain, chop the *range* into dyadic steps of height $2^{-n}$ and read off which step each value falls on, capping the result at height $2^{n}$ so that only finitely many steps are used. Refining $n$ halves the step height and doubles the cap, so the staircase climbs and the error on the region where $f$ is already below the cap is at most one step.
:::

:::proof[The generating criterion and its consequences]{provenance=adapted src="folland-1999:Prop. 2.1 and Cor. 2.2, pp. 43–44, and Prop. 2.3, p. 44"}
**The criterion.** "Only if" is immediate, as $\mathcal{E} \subseteq \mathcal{N}$. For "if", consider
$$
\mathcal{G} = \bigl\{\, E \subseteq Y \;:\; f^{-1}(E) \in \mathcal{M} \,\bigr\} .
$$
$\mathcal{G}$ is a $\sigma$-algebra: $f^{-1}(Y) = X \in \mathcal{M}$; $f^{-1}(E^{c}) = \bigl(f^{-1}(E)\bigr)^{c}$ lies in $\mathcal{M}$ whenever $f^{-1}(E)$ does, since $\mathcal{M}$ is closed under complements; and $f^{-1}(\bigcup_j E_j) = \bigcup_j f^{-1}(E_j) \in \mathcal{M}$ for a sequence, since $\mathcal{M}$ is closed under countable unions. By hypothesis $\mathcal{E} \subseteq \mathcal{G}$, so $\mathcal{N} = \mathcal{M}(\mathcal{E}) \subseteq \mathcal{G}$ because $\mathcal{M}(\mathcal{E})$ is the smallest $\sigma$-algebra containing $\mathcal{E}$. That is exactly measurability.

**(a) Continuity.** $\mathcal{B}_Y$ is generated by the open subsets of $Y$, and continuity of $f$ says precisely that $f^{-1}(U)$ is open in $X$ — hence Borel — for every open $U \subseteq Y$; see :ref[continuity in topological terms]{to=found.continuity-homeomorphism}. Apply the criterion with $\mathcal{E} = \{\text{open sets of } Y\}$.

**(b) Rays.** $\mathcal{B}_{\mathbb{R}}$ is generated by each of the four families of rays, by :ref[the generator list]{to=measure.sigma-algebras-measures}; and $\mathcal{B}_{\overline{\mathbb{R}}}$ is generated by the rays $(a,\infty]$, $a \in \mathbb{R}$, because the $\sigma$-algebra these generate contains $\{\infty\} = \bigcap_{n}(n,\infty]$, hence also $\{-\infty\} = \bigl(\bigcup_n (-n,\infty]\bigr)^{c}$, hence every Borel subset of $\mathbb{R}$ as well. Apply the criterion to each family in turn. The open-set version is the same argument with $\mathcal{E}$ the open sets.

**(c) Composition.** $h$ Borel measurable means $h^{-1}(B) \in \mathcal{B}_{\mathbb{R}}$ for Borel $B$, and $f$ measurable means $f^{-1}(\mathcal{B}_{\mathbb{R}}) \subseteq \mathcal{M}$; so $(h \circ f)^{-1}(B) = f^{-1}\bigl(h^{-1}(B)\bigr) \in \mathcal{M}$. $\square$
:::

:::proof[Algebra and lattice operations]{provenance=original}
:cite[Folland]{work=folland-1999 loc="Prop. 2.6, p. 45"} derives these from the product $\sigma$-algebra on $\mathbb{C}\times\mathbb{C}$. The following direct argument on the line uses only the ray criterion and the countability of $\mathbb{Q}$. The complex case is then reduced to the real one by splitting into real and imaginary parts, and that reduction needs both directions of the equivalence in (a), so we prove it first.

**Real and imaginary parts.** If $f : X \to \mathbb{C}$ is measurable, so are $\operatorname{Re}f$ and $\operatorname{Im}f$: the maps $z \mapsto \operatorname{Re}z$ and $z \mapsto \operatorname{Im}z$ are continuous, hence Borel, and part (c) of the previous statement applies. Conversely, let $u, v : X \to \mathbb{R}$ be measurable and put $f = u + iv$. Identify $\mathbb{C}$ with $\mathbb{R}^{2}$ and call a set of the form $R = (p,q)\times(r,s)$ with $p<q$ and $r<s$ all rational a **rational rectangle**. There are only countably many of them, and every open $W \subseteq \mathbb{C}$ is a countable union of rational rectangles: around each $w \in W$ put an open disc contained in $W$, and inside that disc a rational rectangle containing $w$. Rational rectangles are themselves open, hence Borel, so the $\sigma$-algebra they generate sits inside $\mathcal{B}_{\mathbb{C}}$; and since every open set is a countable union of them, that $\sigma$-algebra contains all open sets and therefore equals $\mathcal{B}_{\mathbb{C}}$. Finally
$$
f^{-1}(R) = u^{-1}\bigl((p,q)\bigr) \cap v^{-1}\bigl((r,s)\bigr) \in \mathcal{M},
$$
each factor being measurable by the ray criterion, since $u^{-1}((p,q)) = \{u > p\}\setminus\{u \ge q\}$. By the generating criterion, $f$ is measurable. This is :cite[Folland]{work=folland-1999 loc="Cor. 2.5, p. 45"}, which he obtains from $\mathcal{B}_{\mathbb{C}} = \mathcal{B}_{\mathbb{R}}\otimes\mathcal{B}_{\mathbb{R}}$; the route just taken replaces the product $\sigma$-algebra by the countable family of rational rectangles.

**Sums.** Let $f,g : X \to \mathbb{R}$ be measurable and $a \in \mathbb{R}$. Then
$$
\{x : f(x) + g(x) > a\} \;=\; \bigcup_{q \in \mathbb{Q}} \Bigl( \{x: f(x) > q\} \cap \{x : g(x) > a - q\} \Bigr).
$$
*Right to left*: if $f(x) > q$ and $g(x) > a-q$ then $f(x)+g(x) > a$. *Left to right*: if $f(x)+g(x) > a$ then $f(x) > a - g(x)$, and the density of $\mathbb{Q}$ in $\mathbb{R}$ supplies a rational $q$ with $a - g(x) < q < f(x)$, whence $f(x) > q$ and $g(x) > a-q$. The union is over a countable index set, and each term is an intersection of two members of $\mathcal{M}$ by the ray criterion; so $\{f+g>a\} \in \mathcal{M}$ for every $a$, and the ray criterion applied in the other direction makes $f+g$ measurable.

**Scalar multiples.** Let $c \in \mathbb{R}$ and $f$ real measurable. If $c > 0$ then $\{cf > a\} = \{f > a/c\}$; if $c < 0$ then $\{cf > a\} = \{f < a/c\}$, measurable because the rays $[-\infty,a)$ test measurability just as well; if $c = 0$ then $cf \equiv 0$ and $\{cf > a\}$ is $X$ or $\varnothing$. So $cf$ is measurable for every real $c$. In particular $-g$ is measurable, and so is $\tfrac14 h$ for any measurable $h$.

**Squares, hence products.** For $a < 0$, $\{f^{2} > a\} = X$; for $a \ge 0$, $\{f^{2} > a\} = \{f > \sqrt{a}\} \cup \{f < -\sqrt{a}\}$, a union of two measurable sets. So $f^{2}$ is measurable, and the polarisation identity
$$
fg = \tfrac14\bigl[(f+g)^{2} - (f-g)^{2}\bigr]
$$
makes $fg$ measurable: $f+g$ and $f - g = f + (-1)g$ are measurable by the sum and scalar cases, their squares by the previous sentence, the difference of the squares by the sum and scalar cases again, and the factor $\tfrac14$ by the scalar case.

**Lattice.** $\{\max(f,g) > a\} = \{f>a\}\cup\{g>a\}$ and $\{\min(f,g) > a\} = \{f>a\}\cap\{g>a\}$, both measurable. Taking $g \equiv 0$ gives $f^{+}$, and $f^{-} = \max(-f,0)$; then $\lvert f \rvert = f^{+}+f^{-}$. This lattice paragraph holds verbatim for $\overline{\mathbb{R}}$-valued functions, the rays being $(a,\infty]$: no arithmetic is performed in it. The sum and product paragraphs do not transfer so cheaply, because $f+g$ and $fg$ must first be *defined* where $\infty - \infty$ or $0\cdot\infty$ occurs; with the conventions listed in statement (a) in force, measurability still holds :cite[]{work=folland-1999 loc="Exercise 2, p. 48"}. $\square$
:::

:::proof[Suprema, limits, and the set where a limit exists]{provenance=adapted src="folland-1999:Prop. 2.7, p. 45, and Exercise 3, p. 48"}
**Suprema and infima.** For measurable $f_j : X \to \overline{\mathbb{R}}$ and $a \in \mathbb{R}$,
$$
\Bigl\{\sup_j f_j > a\Bigr\} = \bigcup_{j \ge 1}\{f_j > a\},
\qquad
\Bigl\{\inf_j f_j < a\Bigr\} = \bigcup_{j \ge 1}\{f_j < a\} .
$$
The first holds because a supremum exceeds $a$ exactly when some member does; the second is its mirror image. Each right-hand side is a countable union of measurable sets, so by the ray criterion — $(a,\infty]$ for the first, $[-\infty,a)$ for the second — both $\sup_j f_j$ and $\inf_j f_j$ are measurable. **This is where countability is used, and it is used nowhere else in the proof.**

**Upper and lower limits.** Set $h_k = \sup_{j > k} f_j$, measurable by the previous paragraph applied to the sequence $(f_{k+1}, f_{k+2},\dots)$. Then $\limsup_j f_j = \inf_k h_k$ is measurable, being an infimum of countably many measurable functions. Likewise $\liminf_j f_j = \sup_k \inf_{j>k} f_j$.

**Limits.** If the pointwise limit $f(x) = \lim_j f_j(x)$ exists for every $x$, then $f = \limsup_j f_j$, which has just been shown measurable.

**The set where the limit exists.** A real sequence converges in $\mathbb{R}$ if and only if its upper and lower limits are equal and finite. Write $L = \limsup_j f_j$ and $\ell = \liminf_j f_j$, both measurable by the previous paragraphs. Then
$$
\Bigl\{x : \lim_j f_j(x) \text{ exists in } \mathbb{R}\Bigr\}
= \{x : L(x) = \ell(x)\} \cap \{x : \lvert L(x)\rvert < \infty\} .
$$
The second set is $L^{-1}(\mathbb{R})$, a preimage of a Borel subset of $\overline{\mathbb{R}}$. For the first, note that $\ell \le L$ everywhere, so the two differ at $x$ exactly when some rational lies strictly between them:
$$
\{x : L(x) \ne \ell(x)\} = \bigcup_{q \in \mathbb{Q}} \bigl(\{\ell < q\} \cap \{q < L\}\bigr),
$$
a countable union of measurable sets, so its complement $\{L = \ell\}$ is measurable. We do not write the first set as $\{L - \ell = 0\}$: that difference is undefined at points where $L$ and $\ell$ are both $+\infty$ or both $-\infty$. $\square$
:::

:::proof[Approximation by simple functions]{provenance=adapted src="folland-1999:Thm 2.10, p. 47"}
**(a) The construction.** Following :cite[Folland]{work=folland-1999 loc="Thm 2.10, p. 47"}, for $n = 0, 1, 2, \dots$ and $0 \le k \le 2^{2n}-1$ put
$$
E^{k}_{n} = f^{-1}\Bigl(\bigl(k2^{-n},\,(k+1)2^{-n}\bigr]\Bigr),
\qquad
F_n = f^{-1}\bigl((2^{n},\infty]\bigr),
\qquad
\varphi_n = \sum_{k=0}^{2^{2n}-1} k2^{-n}\,\chi_{E^{k}_{n}} \;+\; 2^{n}\chi_{F_n}.
$$
In words: cut the range into steps of height $2^{-n}$ up to the height $2^{n}$, round each value *down* to the step below it, and flatten everything above $2^{n}$ to $2^{n}$. All the sets are measurable, being preimages of Borel subsets of $[0,\infty]$, and the intervals $(k2^{-n},(k+1)2^{-n}]$ for $0 \le k \le 2^{2n}-1$ together with $(2^{n},\infty]$ partition $(0,\infty]$; adding $f^{-1}(\{0\})$, on which $\varphi_n = 0$, partitions $X$. So each $\varphi_n$ is a simple function with values among the $2^{2n}+1$ numbers $0, 2^{-n}, \dots, 2^{n}-2^{-n}, 2^{n}$, and $\varphi_n \ge 0$.

**Step 1: $\varphi_n \le f$.** On $E^{k}_{n}$ we have $f > k2^{-n} = \varphi_n$; on $F_n$ we have $f > 2^{n} = \varphi_n$; on $f^{-1}(\{0\})$ both sides vanish.

**Step 2: $\varphi_n \le \varphi_{n+1}$.** Fix $x$ and compare the two roundings.
- If $f(x) = 0$ both are $0$.
- If $0 < f(x) \le 2^{n}$, let $k$ be the index with $f(x) \in (k2^{-n},(k+1)2^{-n}]$, so $\varphi_n(x) = k2^{-n}$. That interval is the disjoint union of $\bigl(2k\,2^{-(n+1)}, (2k+1)2^{-(n+1)}\bigr]$ and $\bigl((2k+1)2^{-(n+1)}, (2k+2)2^{-(n+1)}\bigr]$, so at level $n+1$ the index of $f(x)$ is $2k$ or $2k+1$, and both lie below $2^{2(n+1)}-1$ because $k \le 2^{2n}-1$. Hence $\varphi_{n+1}(x)$ equals $2k\,2^{-(n+1)} = k2^{-n} = \varphi_n(x)$ or $(2k+1)2^{-(n+1)} > \varphi_n(x)$.
- If $2^{n} < f(x) \le 2^{n+1}$, then $\varphi_n(x) = 2^{n}$, while at level $n+1$ the index $k'$ of $f(x)$ satisfies $k'2^{-(n+1)} \ge 2^{n}$ — because $k'$ is the largest index with $k'2^{-(n+1)} < f(x)$, and $2^{2n+1}2^{-(n+1)} = 2^{n} < f(x)$ forces $k' \ge 2^{2n+1}$. So $\varphi_{n+1}(x) \ge 2^{n} = \varphi_n(x)$.
- If $f(x) > 2^{n+1}$, then $\varphi_n(x) = 2^{n} < 2^{n+1} = \varphi_{n+1}(x)$.

**Step 3: the error bound.** Suppose $f(x) \le 2^{n}$. If $f(x) = 0$ then $f(x)-\varphi_n(x) = 0$; otherwise $f(x) \in (k2^{-n},(k+1)2^{-n}]$ for some $k \le 2^{2n}-1$ and
$$
0 \;<\; f(x) - \varphi_n(x) \;=\; f(x) - k2^{-n} \;\le\; 2^{-n} .
$$
So $0 \le f - \varphi_n \le 2^{-n}$ on the set $\{f \le 2^{n}\}$.

**Step 4: pointwise and uniform convergence.** If $f(x) < \infty$, then $f(x) \le 2^{n}$ for all large $n$, and step 3 gives $0 \le f(x)-\varphi_n(x) \le 2^{-n} \to 0$. If $f(x) = \infty$, then $x \in F_n$ for every $n$ and $\varphi_n(x) = 2^{n} \to \infty = f(x)$. If $f \le M$ on a set $A$, then for every $n$ with $2^{n}\ge M$ step 3 gives $\sup_{A}\lvert f - \varphi_n\rvert \le 2^{-n}$, which is :ref[uniform convergence]{to=found.uniform-convergence} on $A$.

**(b) The complex case.** Write $f = g + ih$ with $g = \operatorname{Re}f$ and $h = \operatorname{Im}f$ measurable, and split each into positive and negative parts, obtaining four non-negative measurable functions $g^{+},g^{-},h^{+},h^{-}$. Apply part (a) to each, getting increasing sequences $\psi^{\pm}_n \uparrow g^{\pm}$ and $\zeta^{\pm}_n \uparrow h^{\pm}$ of simple functions, and set $\varphi_n = (\psi^{+}_n - \psi^{-}_n) + i(\zeta^{+}_n - \zeta^{-}_n)$, a simple function. Then $\varphi_n \to f$ pointwise, and uniformly wherever $f$ is bounded, because each of the four parts converges that way. For the monotonicity of $\lvert \varphi_n\rvert$, note that at each point at most one of $g^{+},g^{-}$ is non-zero and at most one of $h^{+},h^{-}$ is, so $\lvert\varphi_n\rvert^{2} = (\psi^{+}_n+\psi^{-}_n)^{2} + (\zeta^{+}_n+\zeta^{-}_n)^{2}$ increases in $n$ and is bounded by $g^{2}+h^{2} = \lvert f\rvert^{2}$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Countability of the index set** is used exactly once, in the identity $\{\sup_j f_j > a\} = \bigcup_j \{f_j > a\}$, and it cannot be removed: an uncountably indexed supremum of measurable functions need not be measurable at all :cite[]{work=folland-1999 loc="Exercise 6, p. 48"}. A one-line example: let $N \subseteq \mathbb{R}$ be the non-measurable set of :ref[Lebesgue measure]{to=measure.lebesgue-measure} and let $f_t = \chi_{\{t\}}$ for $t \in N$. Each $f_t$ is Lebesgue measurable, since a singleton is Borel, but $\sup_{t \in N} f_t = \chi_N$ is not.
- **Measurability of the domain $\sigma$-algebra, not of the range, is what is being asserted.** The definition does *not* require $f(E)$ to be measurable for measurable $E$; images behave badly, preimages do not.
- **The generating criterion needs $\mathcal{E}$ to generate, not merely to be contained in, $\mathcal{N}$.** Checking $f^{-1}((a,\infty])\in\mathcal{M}$ for $a$ in a *dense* set $D$ of reals is still enough, because for any real $a$ one may pick $a_n \in D$ with $a_n > a$ and $a_n \to a$, and then $(a,\infty] = \bigcup_{n}(a_n,\infty]$ — but checking it for finitely many $a$ is not. :cite[Folland]{work=folland-1999 loc="Exercise 4, p. 48"} poses this for $D = \mathbb{Q}$; the one-line argument just given needs only density, so we state it for a general dense $D$.
- **Composition is safe on the right, not on the left.** If $g$ is measurable and $h$ is *Borel*, $h\circ g$ is measurable. If $h$ is merely Lebesgue measurable the conclusion fails, even for continuous $g$: $h^{-1}(B)$ is then only in $\mathcal{L}$, and $g^{-1}$ of a set in $\mathcal{L}$ need not be in $\mathcal{L}$. :cite[Folland]{work=folland-1999 loc="§2.1, p. 44 and Exercise 9, p. 48"} gives the counterexample built from the Cantor function, and :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.3, p. 16"} cite exactly this as their reason for working with Borel sets and Borel functions only. The asymmetry traces back to the fact that $\mathcal{L}$ is a completion and so is tied to one particular measure.
- **Completeness is what makes "almost everywhere" harmless.** If $f$ is measurable and $g = f$ off a null set, or if $f_n \to f$ only almost everywhere, then $g$ and $f$ are measurable **provided the measure is complete** — and these implications hold for *all* such $g$ and $f_n$ only when it is :cite[]{work=folland-1999 loc="Prop. 2.11, p. 47"}. Without completeness, the exceptional set can hide a non-measurable subset. This is one reason the Lebesgue $\sigma$-algebra $\mathcal{L}$, rather than $\mathcal{B}_{\mathbb{R}}$, is the default on the line, and it is why the modes of convergence compared in :ref[modes of convergence]{to=measure.modes-of-convergence} are all stated almost everywhere.
- **In the approximation theorem the two hypotheses do different jobs.** Non-negativity is what lets the staircase increase; for a signed or complex $f$ one must split first, and then only $\lvert\varphi_n\rvert$ increases, not $\varphi_n$. Boundedness of $f$ on a set is what upgrades pointwise to uniform convergence; where $f$ is unbounded the cap $2^{n}$ is binding and the error is $f - 2^{n}$, which is as large as one likes. No measure appears anywhere in the construction: the theorem is about $(X,\mathcal{M})$ alone.
:::

:::method[Showing that a given function is measurable]{provenance=original}
1. **Identify the $\sigma$-algebra on the domain.** Borel or Lebesgue on the line; in probability, the $\sigma$-field of the model. The answer can differ between the two.
2. **Try continuity first.** A continuous function is Borel measurable, hence Lebesgue measurable. A function that is continuous at every point outside a countable set $D$ is measurable too: if $X = A \cup B$ with $A, B \in \mathcal{M}$, a function on $X$ is measurable as soon as it is measurable on $A$ and on $B$ :cite[]{work=folland-1999 loc="Exercise 5, p. 48"}, so take $A = D$ and $B = X\setminus D$. On $D$ every subset is Borel, so $f$ is measurable there; on $X \setminus D$ the restriction of $f$ is continuous.
3. **Otherwise test one family of rays.** Show $\{f > a\} \in \mathcal{M}$ for every real $a$ — or for every rational $a$, which is enough. This is usually the shortest route for a function defined by a formula or by cases.
4. **Build it from measurable pieces.** Sums, products, scalar multiples, maxima, minima, absolute values, positive and negative parts, and compositions $h\circ f$ with $h$ Borel all stay inside the class.
5. **Or exhibit it as a countable limit.** $\sup$, $\inf$, $\limsup$, $\liminf$ and pointwise limits of sequences of measurable functions are measurable. For an almost-everywhere limit, check that the measure is complete, or modify the function on the exceptional null set first.
6. **For an integral, pass to the staircase.** Apply the approximation theorem to $f^{+}$ and $f^{-}$ separately; everything in :ref[the Lebesgue integral]{to=measure.lebesgue-integral} and :ref[monotone convergence]{to=measure.monotone-convergence-fatou} is then proved for simple functions first and transported by the increasing limit.
7. **Do not try to prove measurability by looking at images**, and do not compose two Lebesgue measurable functions without checking that the inner one is Borel.
:::

:::example[Building the staircase for f(x) = x^2 on [0,3]]{provenance=original}
Take $X = [0,3]$ with the Lebesgue measurable sets and $f(x) = x^{2}$. It is continuous, hence Borel measurable, so the construction of the approximation theorem applies.

**The level sets at $n = 2$.** Here $2^{-n} = \tfrac14$ and the cap is $2^{n} = 4$, so $k$ runs from $0$ to $2^{4}-1 = 15$ and
$$
E^{k}_{2} = \Bigl\{x \in [0,3] : \tfrac{k}{4} < x^{2} \le \tfrac{k+1}{4}\Bigr\} = \Bigl(\tfrac{\sqrt{k}}{2},\ \tfrac{\sqrt{k+1}}{2}\Bigr],
\qquad
F_2 = \{x : x^{2} > 4\} = (2,3] .
$$
For instance $E^{0}_{2} = (0,\tfrac12]$ with $m = 0.5$, $E^{1}_{2} = (\tfrac12, \tfrac{\sqrt2}{2}]$ with $m = 0.2071068\ldots$, and $E^{15}_{2} = \bigl(\tfrac{\sqrt{15}}{2}, 2\bigr] = (1.9364917\ldots,\, 2]$ with $m = 0.0635083\ldots$.

**Check that the pieces account for all of $[0,3]$.** The measures telescope:
$$
\sum_{k=0}^{15} m\bigl(E^{k}_{2}\bigr) = \sum_{k=0}^{15}\frac{\sqrt{k+1}-\sqrt{k}}{2} = \frac{\sqrt{16}-\sqrt{0}}{2} = 2,
$$
and $m(F_2) = 1$, while the remaining point $f^{-1}(\{0\}) = \{0\}$ has measure $0$. The total is $2 + 1 + 0 = 3 = m([0,3])$, as it must be.

**Values at a point.** Take $x = 1.3$, so $f(x) = 1.69$.

| $n$ | cap $2^{n}$ | step $2^{-n}$ | index $k$ with $k2^{-n} < 1.69 \le (k+1)2^{-n}$ | $\varphi_n(1.3)$ | $f-\varphi_n$ |
|---|---|---|---|---|---|
| $0$ | $1$ | $1$ | — ($1.69 > 1$, so $x \in F_0$) | $1$ | $0.69$ |
| $1$ | $2$ | $0.5$ | $3$ | $1.5$ | $0.19$ |
| $2$ | $4$ | $0.25$ | $6$ | $1.5$ | $0.19$ |
| $3$ | $8$ | $0.125$ | $13$ | $1.625$ | $0.065$ |
| $4$ | $16$ | $0.0625$ | $27$ | $1.6875$ | $0.0025$ |

The column of values increases, as step 2 of the proof requires, and from $n = 1$ onwards — the first $n$ with $2^{n} \ge f(1.3)$ — the error obeys the bound $f - \varphi_n \le 2^{-n}$ of step 3: $0.19 \le 0.5$, $0.19 \le 0.25$, $0.065 \le 0.125$, $0.0025 \le 0.0625$.

**Where the cap bites.** At $x = 2.5$ we have $f(x) = 6.25 > 4 = 2^{2}$, so $x \in F_2$ and $\varphi_2(2.5) = 4$, an error of $2.25$ — far larger than the step height $0.25$. On $[0,2]$, where $f \le 4 = 2^{2}$, the error is at most $0.25$ everywhere, so $\varphi_2$ approximates $f$ *uniformly* there; on all of $[0,3]$ it does not, and uniformity returns only for $n \ge 4$, when $2^{n} \ge 9 = \max_{[0,3]} f$. This is exactly the restriction "on any set on which $f$ is bounded" in the statement: here $f$ is bounded on $[0,3]$, so uniform convergence does hold on the whole interval — but only once $n$ is large enough that the cap has cleared the maximum.
:::

:::application{provenance=original}
**Random variables are measurable functions.** A real random variable on a probability space $(\Omega,\mathcal{F},\mathbb{P})$ is by definition an $\mathcal{F}$-measurable $X : \Omega \to \mathbb{R}$, and the ray criterion is why the distribution function $F(a) = \mathbb{P}(X \le a)$ determines the whole law: the events $\{X \le a\}$ generate everything one can ask about $X$. Closure under pointwise limits is what makes limit theorems well posed — $\limsup_n X_n$ is an honest random variable, so statements like "the sample average converges" are about measurable sets and have probabilities. See :ref[random variables and distributions]{to=prob.random-variables}.

**Quantisation and detector binning.** A simple function is a measurement reported to finite precision: finitely many values, each on a measurable set of the sample space. The approximation theorem says every non-negative measurable observable is the increasing limit of such reports, with the error bounded by one quantisation step wherever the signal is below the full-scale range, and uncontrolled above it. That is precisely the behaviour of an analogue-to-digital converter: resolution $2^{-n}$, full scale $2^{n}$, and clipping beyond it. The requirement that the staircase *increase* is what makes :ref[monotone convergence]{to=measure.monotone-convergence-fatou} applicable to the resulting integrals, so that finer and finer quantisation gives an increasing and convergent sequence of estimates.

**Why a measurability hypothesis appears in every theorem of this chapter.** The convergence theorems — :ref[Fatou and monotone convergence]{to=measure.monotone-convergence-fatou}, :ref[dominated convergence]{to=measure.dominated-convergence} — each assume the functions involved are measurable, and part (c) above is what makes the assumption cheap: a limit of measurable functions is measurable automatically, so one never has to re-verify it along a limiting argument. In the theory of partial differential equations this is used constantly; :cite[Evans]{work=evans-2010 loc="Appendix E.2, pp. 685–686"} lists it alongside the fact that the Lebesgue integral of a non-negative measurable function is defined by approximation with simple functions.

**Lebesgue's idea restated.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 42"} describe the contrast with Riemann's construction as a shopkeeper counting a day's takings either transaction by transaction or by sorting the money into denominations first. Partitioning the range rather than the domain is exactly what the sets $E^{k}_{n}$ do, and it is why the construction never had to assume anything about the regularity of $f$ as a function of $x$ — only that the sorting itself is legitimate, that is, that each $E^{k}_{n}$ is a measurable set.
:::
