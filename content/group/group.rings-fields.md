---
id: group.rings-fields
title: Rings and fields
kind: definition
level: core
summary: Defines rings, ideals, quotient rings, integral domains and fields, records that a quotient by an ideal is a field exactly when the ideal is maximal, and identifies the fields the handbook uses.
prereqs: [group.homomorphisms-quotients, group.groups-subgroups, linalg.vector-spaces-bases]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§7.1, the definitions of a ring, a division ring and a field, and Proposition 1, pp. 223-226"
    pages: "223-226"
    role: the ring axioms; commutative ring; identity; division ring and field; units and zero divisors; the elementary consequences of the axioms
  - work: dummit-foote-2004
    loc: "§7.1, the definition of an integral domain, Proposition 2 and Corollary 3, and the definition of a subring, p. 228"
    pages: "228"
    role: integral domain; cancellation; a finite integral domain is a field; subring
  - work: dummit-foote-2004
    loc: "§7.2 'Polynomial Rings' and Proposition 4, pp. 234-235"
    pages: "234-235"
    role: the polynomial ring R[x], degree, leading coefficient, monic; degree of a product and the units of R[x] over an integral domain
  - work: dummit-foote-2004
    loc: "§7.3, the definition of an ideal, Proposition 6 and Theorem 7, pp. 241-243"
    pages: "241-243"
    role: why an ideal is the right object for a quotient ring; left, right and two-sided ideals; the quotient ring; the first isomorphism theorem for rings
  - work: dummit-foote-2004
    loc: "§7.4, Propositions 11, 12 and 13 and the following examples, pp. 254-255"
    pages: "254-255"
    role: maximal ideals and R/M a field; prime ideals and R/P an integral domain; Z/nZ a field iff n is prime
  - work: dummit-foote-2004
    loc: "§13.1, Theorems 3 and 4, pp. 512-513"
    pages: "512-513"
    role: adjoining a root of an irreducible polynomial as F[x]/(p(x)); the basis 1, t, ..., t^{n-1} and the degree of the extension
---

:::definition[Rings]{provenance=adapted src="dummit-foote-2004:§7.1, pp. 223-224"}
A **ring** is a set $R$ carrying two operations, written $+$ and $\times$ (we usually write $ab$ for $a \times b$), such that

1. $(R, +)$ is an abelian group, with identity $0$ and with $-a$ the additive inverse of $a$;
2. multiplication is associative: $(ab)c = a(bc)$ for all $a, b, c \in R$;
3. the two distributive laws hold: $(a+b)c = ac + bc$ and $a(b+c) = ab + ac$ for all $a,b,c \in R$.

$R$ is **commutative** if $ab = ba$ always, and $R$ **has an identity** (or "has a $1$") if there is $1 \in R$ with $1a = a1 = a$ for all $a$. Dummit and Foote note that for a ring with a $1$ the commutativity of addition is not an extra assumption: expanding $(1+1)(a+b)$ by the two distributive laws in the two possible orders gives $a + b + a + b$ and $a + a + b + b$, and cancelling in the additive group leaves $b + a = a + b$.

Three facts follow from the axioms alone :cite{work=dummit-foote-2004 loc="Prop. 1, p. 226"}: $0a = a0 = 0$; $(-a)b = a(-b) = -(ab)$; and if $R$ has an identity then it is unique and $-a = (-1)a$.

Let $R$ have an identity $1 \neq 0$.

- A **unit** is an element $u$ with $uv = vu = 1$ for some $v \in R$. The units form a group $R^\times$ under multiplication.
- A nonzero $a \in R$ is a **zero divisor** if $ab = 0$ or $ba = 0$ for some nonzero $b \in R$.
- $R$ is a **division ring** — also called a skew field — when each $a \ne 0$ is a unit. Such an $R$ that is commutative as well is a **field**.
- A commutative $R$ with no zero divisors is an **integral domain** :cite{work=dummit-foote-2004 loc="p. 228"}.

A zero divisor is never a unit: if $va = 1$ and $ab = 0$ with $b \neq 0$, then $b = (va)b = v(ab) = 0$, a contradiction. So a field has no zero divisors, and every field is an integral domain.

A **subring** of $R$ is a subgroup of $(R,+)$ closed under multiplication; to check a non-empty subset is a subring it suffices to check closure under subtraction and under multiplication :cite{work=dummit-foote-2004 loc="p. 228"}.
:::

:::definition[Ideals and quotient rings]{provenance=adapted src="dummit-foote-2004:§7.3, pp. 241-243"}
Let $R$ be a ring. A subset $I \subseteq R$ is a **left ideal** if it is a subring and $rI \subseteq I$ for every $r \in R$; a **right ideal** if it is a subring and $Ir \subseteq I$ for every $r \in R$; and a **(two-sided) ideal** if it is both. In a commutative ring the three notions coincide.

If $I$ is an ideal, the additive cosets $r + I$ form a ring, the **quotient ring** $R/I$, under
$$
(r + I) + (s + I) = (r+s) + I, \qquad (r+I)(s+I) = rs + I .
$$
The additive part is the quotient group of :ref[]{to=group.homomorphisms-quotients}, which needs no hypothesis beyond $I$ being a subgroup, because $(R,+)$ is abelian and every subgroup of it is normal. What the ideal condition buys is that the *multiplication* is well defined. Dummit and Foote show this is exactly the right condition: writing $r' = r + \alpha$, $s' = s + \beta$ with $\alpha, \beta \in I$,
$$
r's' = rs + r\beta + \alpha s + \alpha\beta ,
$$
and for $r's' + I = rs + I$ for all choices one needs $r\beta$, $\alpha s$ and $\alpha\beta$ to lie in $I$ for all $r, s \in R$ and $\alpha, \beta \in I$ — that is, precisely that $I$ absorbs multiplication from both sides.

A map $\varphi : R \to S$ of rings is a **ring homomorphism** if $\varphi(a+b) = \varphi(a) + \varphi(b)$ and $\varphi(ab) = \varphi(a)\varphi(b)$, and its **kernel** is $\varphi^{-1}(0)$.

Two kinds of ideal of a commutative ring $R$ with $1 \neq 0$ are singled out :cite{work=dummit-foote-2004 loc="pp. 253-255"}:

- $M \subsetneq R$ is **maximal** if no ideal lies strictly between $M$ and $R$;
- $P \subsetneq R$ is **prime** if $ab \in P$ implies $a \in P$ or $b \in P$.
:::

:::statement[Quotients, isomorphism, and when a quotient is a field]{provenance=adapted src="dummit-foote-2004:§7.3, Thm 7, p. 243; dummit-foote-2004:§7.4, Props 12 and 13, pp. 254-255"}
Let $R$ be a ring.

1. **(First isomorphism theorem for rings.)** If $\varphi : R \to S$ is a ring homomorphism, then $\ker\varphi$ is an ideal of $R$, $\varphi(R)$ is a subring of $S$, and $R/\ker\varphi \cong \varphi(R)$ as rings. Conversely, for every ideal $I$ the map $r \mapsto r + I$ is a surjective ring homomorphism $R \to R/I$ with kernel $I$. An ideal is therefore nothing other than a kernel, and a kernel nothing other than an ideal.
2. Now let $R$ be commutative with $1 \neq 0$, and let $I$ be an ideal. Then
   - $I$ is **maximal** $\iff$ $R/I$ is a **field**;
   - $I$ is **prime** $\iff$ $R/I$ is an **integral domain**.

   Since fields are integral domains, maximality implies primality.
3. Every finite integral domain is a field :cite{work=dummit-foote-2004 loc="Cor. 3, p. 228"}.
:::

:::idea{provenance=original}
A commutative ring with $1 \ne 0$ is a field exactly when it has no ideals except $0$ and itself: a nonzero element $a$ generates the ideal $aR$, and $a$ is invertible precisely when that ideal is everything. Quotienting by $I$ collapses the ideals between $I$ and $R$ onto the ideals of $R/I$, so "nothing strictly between $I$ and $R$" becomes "no ideals except $0$ and everything" becomes "field". The prime statement is the same translation one level down: "$ab \in P$ forces $a \in P$ or $b \in P$" is literally "$\bar a \bar b = 0$ forces $\bar a = 0$ or $\bar b = 0$" in the quotient, which is the absence of zero divisors. Part 3 is a pigeonhole: in a finite domain the map $x \mapsto ax$ is injective by cancellation, hence surjective, so $1$ is hit.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§7.3, Thm 7, p. 243; dummit-foote-2004:§7.4, Props 12 and 13, pp. 254-255; dummit-foote-2004:§7.1, Cor. 3, p. 228"}
**Part 1.** Let $I = \ker\varphi$. It is an additive subgroup, and for $r \in R$, $\alpha \in I$ we get $\varphi(r\alpha) = \varphi(r)\varphi(\alpha) = \varphi(r)\cdot 0 = 0$ and likewise $\varphi(\alpha r) = 0$, so $rI \subseteq I$ and $Ir \subseteq I$: $I$ is a two-sided ideal. Define $\Phi : R/I \to \varphi(R)$ by $\Phi(r + I) = \varphi(r)$. It is well defined and injective because the three conditions $\varphi(r) = \varphi(s)$, $r - s \in I$ and $r + I = s + I$ are mutually equivalent; it is surjective onto $\varphi(R)$ by construction; and it respects both operations, since $\Phi((r+I)(s+I)) = \Phi(rs + I) = \varphi(rs) = \varphi(r)\varphi(s)$, using that $\varphi$ is multiplicative. The converse statement is the definition of the quotient together with the observation that $r + I = 0 + I$ exactly when $r \in I$.

**Part 2, the field case.** Write $\bar{\phantom{x}}$ for the image in $R/I$, a commutative ring with identity $\bar1$.

*If $I$ is maximal, $R/I$ is a field.* First $\bar 1 \neq \bar 0$, since $1 \in I$ would force $r = r\cdot 1 \in I$ for every $r$ and hence $I = R$, contradicting $I \subsetneq R$. Let $\bar a \neq \bar 0$, that is $a \notin I$. The set
$$
J = I + aR = \{\, \alpha + ar : \alpha \in I,\ r \in R \,\}
$$
is an ideal: it is closed under subtraction, and $s(\alpha + ar) = s\alpha + a(sr) \in J$ for every $s \in R$, using commutativity to move $s$ past $a$. It contains $I$ and also $a = 0 + a\cdot 1$, so $J \supsetneq I$. **Maximality** now forces $J = R$, so $1 = \alpha + ab$ for some $\alpha \in I$, $b \in R$. Reducing modulo $I$ gives $\bar 1 = \bar a \bar b$, so $\bar a$ is a unit. Every nonzero element of $R/I$ is a unit, so $R/I$ is a field.

*If $R/I$ is a field, $I$ is maximal.* Since $\bar 1 \neq \bar 0$ we have $I \neq R$. Let $J$ be an ideal with $I \subsetneq J \subseteq R$ and pick $a \in J \setminus I$. Then $\bar a \neq \bar 0$, so by the **field** hypothesis there is $b$ with $\bar a\bar b = \bar 1$, i.e. $1 - ab \in I \subseteq J$. Also $ab \in J$ because $J$ is an ideal and $a \in J$. Hence $1 = (1 - ab) + ab \in J$, and then $r = r \cdot 1 \in J$ for every $r$, so $J = R$. No ideal lies strictly between $I$ and $R$.

**Part 2, the domain case.** $R/I$ is commutative with identity. $I$ prime means $I \neq R$, which as above is $\bar1 \neq \bar 0$, together with: $ab \in I \Rightarrow a \in I$ or $b \in I$. Translating, $ab \in I$ says $\bar a\bar b = \bar 0$ and $a \in I$ says $\bar a = \bar 0$, so the condition reads: $\bar a \bar b = \bar 0 \Rightarrow \bar a = \bar 0$ or $\bar b = \bar 0$, which is exactly the absence of zero divisors in $R/I$. Both directions are this one translation.

**Part 3.** Let $R$ be a finite integral domain and $a \neq 0$. If $ax = ay$ then $a(x - y) = 0$, and $a$ is not a zero divisor, so $x = y$: the map $x \mapsto ax$ from $R$ to $R$ is injective. A injective map of a **finite** set to itself is surjective, so $ab = 1$ for some $b$, and $a$ is a unit. Hence $R$ is a field. $\square$
:::

:::definition[Polynomial rings]{provenance=adapted src="dummit-foote-2004:§7.2, pp. 234-235"}
Let $R$ be a commutative ring with identity and $x$ an indeterminate. A **polynomial** is a formal sum $f = a_nx^n + \cdots + a_1x + a_0$ with $a_i \in R$. If $a_n \neq 0$ then $f$ has **degree** $n$, **leading coefficient** $a_n$, and is **monic** if $a_n = 1$; the degree of the zero polynomial is left undefined and its leading coefficient taken to be $0$. The set $R[x]$ of all polynomials is a ring under coefficientwise addition and the multiplication determined by $(ax^i)(bx^j) = abx^{i+j}$, so that the coefficient of $x^k$ in a product is $\sum_{i=0}^{k} a_i b_{k-i}$. It is commutative with the identity $1$ of $R$, and $R$ sits inside it as the constant polynomials.

If $R$ is an integral domain then :cite{work=dummit-foote-2004 loc="Prop. 4, p. 235"}
$$
\deg(fg) = \deg f + \deg g \quad (f, g \neq 0), \qquad R[x]^\times = R^\times, \qquad R[x] \text{ is an integral domain,}
$$
all three because the leading coefficient of $fg$ is the product of the leading coefficients, which cannot vanish.

For a **field** $F$, division with remainder works in $F[x]$: given $f$ and $g \neq 0$ there are unique $q, r \in F[x]$ with $f = qg + r$ and either $r = 0$ or $\deg r < \deg g$. A polynomial $p \in F[x]$ of degree $\ge 1$ is **irreducible** if it is not a product of two polynomials of strictly smaller degree.
:::

:::statement[The fields this handbook uses]{provenance=adapted src="dummit-foote-2004:§7.1, p. 224; dummit-foote-2004:§7.4, p. 255; dummit-foote-2004:§13.1, Thms 3 and 4, pp. 512-513"}
1. $\mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$ are fields, each a subring of the next, while $\mathbb{Z}$, whose only units are $\pm 1$, is an integral domain but not a field. Almost every structure in this handbook — a vector space, a Hilbert space, a solution of a differential equation — has its scalars in $\mathbb{R}$ or $\mathbb{C}$.
2. $\mathbb{C} \cong \mathbb{R}[x]/(x^2+1)$.
3. For an integer $n \ge 2$: $\mathbb{Z}/n\mathbb{Z}$ is a field exactly when $n$ is prime :cite{work=dummit-foote-2004 loc="p. 255"}. The field with $p$ elements is written $\mathbb{F}_p$.
4. Let $F$ be a field and $p \in F[x]$ irreducible of degree $n$. Then $K = F[x]/(p)$ is a field. It contains a copy of $F$, and the class $t = x + (p)$ is a root of $p$ inside $K$; and $1, t, t^2, \dots, t^{n-1}$ is a basis of $K$ as an $F$-vector space, so $\dim_F K = n$ :cite{work=dummit-foote-2004 loc="Thms 3 and 4, pp. 512-513"}. Taking $F = \mathbb{F}_p$ gives a field with $p^n$ elements, written $\mathbb{F}_{p^n}$.
:::

:::idea{provenance=original}
Parts 2 and 4 are the same construction. To make a root of $p$ exist, work with polynomials and declare $p$ to be zero; "declaring an element zero" in ring language means passing to the quotient by the ideal it generates. Irreducibility of $p$ is what makes that ideal maximal in $F[x]$, and a quotient by a maximal ideal is a field by the statement above. The basis $1, t, \dots, t^{n-1}$ is then just division with remainder: every polynomial is congruent modulo $p$ to its remainder, which has degree below $n$.
:::

:::proof[Parts 2 and 4]{provenance=adapted src="dummit-foote-2004:§13.1, Thms 3 and 4, pp. 512-513"}
**$(p)$ is maximal in $F[x]$ when $p$ is irreducible.** Let $J$ be an ideal with $(p) \subseteq J \subseteq F[x]$ and let $g \in J$ be nonzero of least degree. Dividing, $p = qg + r$ with $r = 0$ or $\deg r < \deg g$; since $p \in (p) \subseteq J$ and $qg \in J$, also $r = p - qg \in J$, and minimality of $\deg g$ forces $r = 0$. So $p = qg$, and **irreducibility** leaves two cases: $\deg g = 0$, in which case $g$ is a nonzero constant, hence a unit, and $J = F[x]$; or $\deg g = \deg p$, in which case $q$ is a constant and $(g) = (p)$. The same division argument shows $J = (g)$ — every $f \in J$ has remainder $0$ on division by $g$ — so $J$ is $(p)$ or $F[x]$. Hence $(p)$ is maximal, and $K = F[x]/(p)$ is a field by part 2 of the previous statement.

**$F$ embeds and $p$ acquires a root.** The composite $F \hookrightarrow F[x] \to K$ is a ring homomorphism sending $1$ to $1$, so it is not identically zero; its kernel is an ideal of the field $F$, and a field has only the ideals $0$ and $F$, so the kernel is $0$ and the map is injective. Identify $F$ with its image. Writing $t$ for the class of $x$ and using that reduction modulo $(p)$ is a ring homomorphism fixing the coefficients,
$$
p(t) = p(x) + (p) = 0 + (p) ,
$$
so $t$ is a root of $p$ in $K$.

**The basis.** Let $n = \deg p$. *Spanning:* any $f \in F[x]$ divides as $f = qp + r$ with $r = 0$ or $\deg r < n$, and $qp \in (p)$, so the class of $f$ equals the class of $r$, which is an $F$-combination of $1, t, \dots, t^{n-1}$. *Independence:* if $c_0 + c_1t + \cdots + c_{n-1}t^{n-1} = 0$ in $K$ with $c_i \in F$, then the polynomial $c_0 + \cdots + c_{n-1}x^{n-1}$ lies in $(p)$, so it is $hp$ for some $h$; if $h \neq 0$ then its degree is $\deg h + n \ge n$, impossible for a polynomial of degree at most $n-1$, so $h = 0$ and every $c_i = 0$. Hence $\dim_F K = n$ (:ref[]{to=linalg.vector-spaces-bases}).

**Part 2.** $x^2 + 1$ is irreducible over $\mathbb{R}$: a factorisation into two degree-one factors would give a real root, and $a^2 + 1 \ge 1 > 0$ for every real $a$. So $K = \mathbb{R}[x]/(x^2+1)$ is a field with basis $1, t$ over $\mathbb{R}$ and $t^2 = -1$. The map $a + bt \mapsto a + bi$ is an $\mathbb{R}$-linear bijection $K \to \mathbb{C}$, and it is multiplicative because both products are computed by expanding and using $t^2 = -1$, $i^2 = -1$:
$$
(a+bt)(c+dt) = (ac - bd) + (ad + bc)t \ \longmapsto\ (ac-bd) + (ad+bc)i = (a+bi)(c+di) .
$$
So $K \cong \mathbb{C}$.

**Part 4, the count.** If $F = \mathbb{F}_p$ then $K$ has basis $1, t, \dots, t^{n-1}$ over a field of $p$ elements, so its elements are the $p^n$ tuples of coefficients. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Commutativity in the maximal-ideal criterion.** The proof that a maximal $I$ gives a field used commutativity twice: to know $I + aR$ is a two-sided ideal, and to conclude from $\bar a\bar b = \bar 1$ that $\bar a$ is a *two-sided* unit. Dummit and Foote state Proposition 12 for commutative rings for this reason, while noting that one half — $R/I$ a field implies $I$ maximal — holds in any ring :cite{work=dummit-foote-2004 loc="p. 255"}.

**$1 \neq 0$.** Without it the zero ring would be a field, and every statement about maximal ideals would acquire an exception; the zero ring has no maximal ideals at all :cite{work=dummit-foote-2004 loc="p. 254"}.

**A subring is not enough for a quotient.** $\mathbb{Z}$ is a subring of $\mathbb{Q}$ but not an ideal, and $\mathbb{Q}/\mathbb{Z}$ has no well-defined multiplication: $\tfrac12 + \mathbb{Z} = \tfrac32 + \mathbb{Z}$, yet $\tfrac12\cdot\tfrac12 = \tfrac14$ and $\tfrac32\cdot\tfrac12 = \tfrac34$ differ by $\tfrac12 \notin \mathbb{Z}$. This is exactly the absorption condition failing.

**Irreducibility in part 4.** Drop it and the quotient is not a field. In $\mathbb{R}[x]$ take $p = x^2 - 1 = (x-1)(x+1)$. In $\mathbb{R}[x]/(p)$ the classes of $x-1$ and $x+1$ are nonzero but their product is zero, so the quotient has zero divisors; it is in fact isomorphic to $\mathbb{R}\times\mathbb{R}$.

**Finiteness in "a finite integral domain is a field".** $\mathbb{Z}$ is an infinite integral domain and is not a field; the injective map $x \mapsto 2x$ is not surjective.

**Division rings that are not fields exist, but not finite ones.** The quaternions (:ref[]{to=group.quaternions}) are a non-commutative division ring :cite{work=dummit-foote-2004 loc="p. 224"}. Dummit and Foote record Wedderburn's theorem, that a *finite* division ring is necessarily commutative, hence a field :cite{work=dummit-foote-2004 loc="p. 228"}; we quote it and do not prove it.

**Two conventions for "ring".** Many texts, including Dummit and Foote, allow a ring without an identity (their example is $2\mathbb{Z}$). Others build $1$ into the axioms. We follow Dummit and Foote: a ring need not have a $1$, and every statement that needs one says so.
:::

:::method[Deciding what a quotient ring is]{provenance=original}
Given a commutative ring $R$ with $1$ and an ideal $I$:

1. **Find a convenient set of coset representatives.** In $\mathbb{Z}/n\mathbb{Z}$ take $0, \dots, n-1$ (division with remainder by $n$); in $F[x]/(p)$ with $\deg p = n$ take the polynomials of degree $< n$ (division with remainder by $p$).
2. **Write down the multiplication rule** on those representatives: multiply in $R$ and then reduce. In $F[x]/(p)$ this means using $p(t) = 0$ to rewrite $t^n$ and higher powers.
3. **Test for zero divisors.** A product of two nonzero representatives that reduces to $0$ exhibits a zero divisor; then $I$ is not prime, and in particular not maximal.
4. **Test for a field.** If $R/I$ is finite and has no zero divisors, part 3 of the statement above makes it a field at once, with no inverses to compute. Otherwise, invert a general nonzero element directly, or factor $I$'s generator and use step 3.
5. **Identify it.** If you can produce a surjective homomorphism $\varphi: R \to S$ with $\ker\varphi = I$, the first isomorphism theorem gives $R/I \cong S$ outright. Evaluation maps $f \mapsto f(c)$ are the usual source of these.
:::

:::example[Two quotients of a polynomial or integer ring]{provenance=original}
**Part A: $\mathbb{Z}/12\mathbb{Z}$ is not a field, and exactly how it fails.** Represent the classes by $0, 1, \dots, 11$. The class $\bar a$ is a unit if and only if $\gcd(a, 12) = 1$: if $\gcd(a,12) = 1$ then $ua + v\cdot 12 = 1$ for integers $u, v$ by Bézout, so $\bar u\bar a = \bar 1$; and if $d = \gcd(a,12) > 1$ then with $b = 12/d$ we have $0 < b < 12$, so $\bar b \neq \bar 0$, while $ab = (a/d)\cdot 12$ is a multiple of $12$, so $\bar a\bar b = \bar 0$ and $\bar a$ is a zero divisor rather than a unit. Counting,
$$
(\mathbb{Z}/12\mathbb{Z})^\times = \{\bar1, \bar5, \bar7, \bar{11}\}, \qquad \bigl|(\mathbb{Z}/12\mathbb{Z})^\times\bigr| = 4 ,
$$
and the remaining seven nonzero classes $\bar2, \bar3, \bar4, \bar6, \bar8, \bar9, \bar{10}$ are all zero divisors, for instance $\bar3\cdot\bar4 = \bar{12} = \bar0$. So $12\mathbb{Z}$ is neither a prime nor a maximal ideal of $\mathbb{Z}$, in accordance with $12$ not being prime.

**Part B: building the field of four elements.** Take $F = \mathbb{F}_2 = \{0,1\}$ and $p(x) = x^2 + x + 1 \in \mathbb{F}_2[x]$. It is irreducible over $\mathbb{F}_2$: a factorisation of a quadratic into smaller degrees would give a root in $\mathbb{F}_2$, and $p(0) = 1$, $p(1) = 1 + 1 + 1 = 1$ (recall $1 + 1 = 0$ here), so there is none. By part 4 of the statement,
$$
K = \mathbb{F}_2[x]/(x^2+x+1) = \{\, 0,\ 1,\ \alpha,\ 1+\alpha \,\}
$$
is a field with $2^2 = 4$ elements, where $\alpha$ is the class of $x$ and satisfies $\alpha^2 = \alpha + 1$ (because $\alpha^2 + \alpha + 1 = 0$ and $-1 = 1$ in characteristic $2$).

*Multiplication table.* Using $\alpha^2 = \alpha+1$ and $1+1 = 0$:
$$
\alpha\cdot\alpha = \alpha+1, \qquad
\alpha(1+\alpha) = \alpha + \alpha^2 = \alpha + \alpha + 1 = 1, \qquad
(1+\alpha)^2 = 1 + \alpha^2 = 1 + \alpha + 1 = \alpha .
$$
Together with the trivial products $1\cdot\alpha = \alpha$ and $1\cdot(1+\alpha) = 1+\alpha$, these cover every product of two nonzero elements, and none of them is $0$; so $K$ has no zero divisors. The middle identity exhibits the inverses:
$$
\alpha^{-1} = 1 + \alpha, \qquad (1+\alpha)^{-1} = \alpha .
$$
*The multiplicative group.* $\alpha^1 = \alpha$, $\alpha^2 = 1+\alpha$, $\alpha^3 = \alpha\cdot\alpha^2 = \alpha(1+\alpha) = 1$. So $K^\times$ is cyclic of order $3$, generated by $\alpha$, and $|K^\times| = 3 = 4 - 1$, as it must be for a field with $4$ elements.

*A check against part 3 of the statement.* $K$ is finite, commutative, with $1 \neq 0$ and no zero divisors, so it is a field by "a finite integral domain is a field" — without computing a single inverse. The inverses above confirm the conclusion.

*What goes wrong with a reducible modulus.* Replace $p$ by $g(x) = x^2 + 1 = (x+1)^2$ in $\mathbb{F}_2[x]$ (expand: $x^2 + 2x + 1 = x^2 + 1$ since $2 = 0$). Then in $\mathbb{F}_2[x]/(g)$ the class $\beta$ of $x+1$ is nonzero but $\beta^2 = 0$: a ring with $4$ elements that is not a field, confirming that irreducibility is the hypothesis doing the work.
:::

:::application{provenance=original}
**The complex numbers are a quotient ring, and so is every "adjoin a root".** Part 2 is the construction of $\mathbb{C}$ that physics uses implicitly whenever it writes $i^2 = -1$ and manipulates $a + bi$ by ordinary algebra: the legitimacy of those manipulations is exactly the statement that $\mathbb{R}[x]/(x^2+1)$ is a ring, and the existence of $1/z$ for $z \neq 0$ is the statement that the ideal $(x^2+1)$ is maximal. The same construction gives the splitting fields behind the Galois-theoretic proof that the general quintic has no solution in radicals, and, for a rational $D$ that is not a square, the quadratic field $\mathbb{Q}(\sqrt{D}) = \mathbb{Q}[x]/(x^2-D)$.

**Finite fields carry error correction.** Reed-Solomon codes, used on compact discs, in QR codes, in DVB and ATSC broadcasting and on deep-space links, treat a block of data as the coefficients of a polynomial over $\mathbb{F}_{2^8}$ — the field with $256$ elements, built as $\mathbb{F}_2[x]/(p)$ for an irreducible $p$ of degree $8$, so that one field element is one byte. The code word is the list of values of that polynomial at distinct field points, and the decoder recovers the data by polynomial interpolation. The whole scheme rests on part 4: in a field, a nonzero polynomial of degree $k$ has at most $k$ roots, so two distinct messages disagree in many places. Over $\mathbb{Z}/256\mathbb{Z}$, which is not a field, this fails — $\bar{16}^2 = \bar 0$ there — and the construction collapses.

**Modular arithmetic in computation.** The number-theoretic transform replaces the complex roots of unity of the discrete Fourier transform (:ref[]{to=fourier.dft-fft}) by roots of unity in $\mathbb{Z}/p\mathbb{Z}$ for a suitable prime $p$, giving an exact convolution algorithm with no rounding error at all; it is how large-integer multiplication is done in computer-algebra systems. Linear congruential pseudo-random generators are iterations $x \mapsto ax + c$ in $\mathbb{Z}/m\mathbb{Z}$, and their period is controlled by the unit group $(\mathbb{Z}/m\mathbb{Z})^\times$ computed in Part A of the example above. Public-key cryptography works in $(\mathbb{Z}/p\mathbb{Z})^\times$ and in groups built from fields.

**Ideals organise operator algebras and PDE theory.** The bounded operators on a Hilbert space form a non-commutative ring in which the compact operators are a two-sided ideal (:ref[]{to=funcan.compact-operators}); the quotient, the Calkin algebra, is where the essential spectrum lives, and Fredholm theory is the statement that an operator is invertible in that quotient. In the theory of linear partial differential equations with constant coefficients, a system of equations corresponds to an ideal of the polynomial ring $\mathbb{C}[\xi_1,\dots,\xi_n]$ after Fourier transform, and the quotient ring records exactly the solvability and compatibility conditions of the system.
:::
