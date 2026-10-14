---
id: group.symmetric-group
title: The symmetric group
kind: definition
level: core
summary: Defines the group of permutations of n symbols, establishes the disjoint-cycle decomposition and its uniqueness, and constructs the sign homomorphism whose kernel is the alternating group of index two.
prereqs: [group.groups-subgroups, group.cosets-lagrange, group.homomorphisms-quotients]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§1.3, pp. 29-31 (the symmetric group on a set, the order n!, cycle notation and the decomposition algorithm, disjoint cycles); §3.5, pp. 107-110 (transpositions, an m-cycle as m-1 transpositions, the polynomial Delta, Prop. 23 that the sign is a homomorphism, Prop. 24 that transpositions are odd, the definition of A_n and its order, Prop. 25 on even-length cycles); §4.3, pp. 125-126 (Prop. 10 on conjugation and Prop. 11 on cycle type)"
    pages: "29-31, 107-110, 125-126"
    role: the definition and order of S_n; cycle notation; the decomposition of a cycle into transpositions; the Vandermonde-polynomial construction of the sign and the route to its multiplicativity; the alternating group; the parity rule from cycle lengths; conjugacy and cycle type
  - work: hassani-2013
    loc: "§23.4, pp. 715-720: the two-row notation (23.1), Def. 23.4.2 and Prop. 23.4.3 (cycles and decomposition into disjoint cycles), Def. 23.4.6 (transposition), Prop. 23.4.8 (an r-cycle as r-1 transpositions), Prop. 23.4.9 and Def. 23.4.10 (uniqueness of parity, even and odd), Box 23.4.11 (A_n is normal), Thm 23.4.12 and the discussion of partitions, pp. 719-720"
    pages: "715-720"
    role: the two-row notation; the explicit factorisation of an r-cycle into transpositions; the statement that parity is well defined and that A_n is normal; conjugacy classes and partitions of n
  - work: rhb-2006
    loc: "§28.4 'Permutation groups', pp. 1056-1058: permutations of degree n, the order n! of S_n, the cycle notation, and the order of a permutation as the lowest common multiple of its cycle lengths"
    pages: "1056-1058"
    role: the order of a permutation as the lcm of its cycle lengths; the alternative positional convention for cycle notation recorded in the remark
  - work: arfken-2013
    loc: "§17.6 'Symmetric Group', pp. 840-841: the order n! of S_n and the symmetric and antisymmetric wavefunctions of identical bosons and fermions, Eqs (17.23) and (17.24)"
    pages: "840-841"
    role: the identical-particle application and the appearance of the sign as the Levi-Civita symbol
---

:::definition[Permutations, cycles and cycle type]{provenance=adapted src="dummit-foote-2004:§1.3, pp. 29-31 and §3.5, p. 107; hassani-2013:§23.4, pp. 715-717; rhb-2006:§28.4, pp. 1056-1057"}
Let $\Omega$ be a non-empty set. The set $S_\Omega$ of all bijections $\Omega \to \Omega$ is a group under composition: composition of bijections is a bijection and is associative, the identity map is a neutral element, and the inverse function is an inverse. It is the **symmetric group** on $\Omega$. For $\Omega = \{1, 2, \dots, n\}$ we write $S_n$ and call its elements **permutations of degree $n$**; its order is
$$
\lvert S_n\rvert = n! ,
$$
since a bijection may send $1$ to any of $n$ values, then $2$ to any of the $n-1$ remaining values, and so on.

**Notation and composition order.** A permutation is displayed either in two rows, with $\sigma(i)$ under $i$, or in one row as the list $\sigma(1)\,\sigma(2)\cdots\sigma(n)$. Products are compositions of functions, so $\sigma\tau$ means "first $\tau$, then $\sigma$": $(\sigma\tau)(i) = \sigma(\tau(i))$, and a product is read from right to left.

**Cycles.** For distinct $a_1, \dots, a_m \in \{1,\dots,n\}$, the **cycle** $(a_1\,a_2\,\cdots\,a_m)$ is the permutation sending $a_1 \mapsto a_2 \mapsto \cdots \mapsto a_m \mapsto a_1$ and fixing everything else; $m$ is its **length**, and it is called an $m$-cycle. Two cycles are **disjoint** if no symbol occurs in both. A **transposition** is a $2$-cycle. By convention $1$-cycles are omitted from a written product, so a symbol not appearing is understood to be fixed; the same expression therefore denotes a permutation of $S_n$ for every $n$ large enough to contain its symbols.

**Cycle type.** If $\sigma$ is a product of disjoint cycles of lengths $n_1, n_2, \dots, n_r$, counting the $1$-cycles of its fixed points, then $n_1 + \cdots + n_r = n$ and the multiset $\{n_1, \dots, n_r\}$ is the **cycle type** of $\sigma$. A **partition** of $n$ is a way of writing $n$ as a sum of positive integers without regard to order, so a cycle type is a partition of $n$. We list cycle types in non-decreasing order, as :cite{work=dummit-foote-2004 loc="§4.3, p. 126"} does; :cite{work=hassani-2013 loc="§23.4, p. 720"} writes partitions in non-increasing order instead. The two record the same data.
:::

:::statement[Disjoint cycle decomposition]{provenance=adapted src="dummit-foote-2004:§1.3, pp. 29-31; hassani-2013:Prop. 23.4.3, p. 717; rhb-2006:§28.4, p. 1058"}
Let $\sigma \in S_n$.

1. $\sigma$ is a product of pairwise disjoint cycles, and this product is unique up to the order in which the cycles are written and the symbol at which each cycle is started, provided $1$-cycles are included.
2. Disjoint cycles commute.
3. If the cycles of $\sigma$ have lengths $n_1, \dots, n_r$, then the order of $\sigma$ in $S_n$ is $\mathrm{lcm}(n_1, \dots, n_r)$.
:::

:::idea{provenance=original}
The cyclic group $\langle \sigma\rangle$ acts on $\{1, \dots, n\}$, and the cycles of $\sigma$ are nothing but the orbits of that action, each traversed in the order $a, \sigma(a), \sigma^2(a), \dots$. Existence and uniqueness of the decomposition are therefore not a separate fact: they are the statement that orbits partition a set, which is part 1 of the orbit–stabilizer theorem. Disjoint cycles commute because they alter disjoint sets of symbols, and the order of $\sigma$ is then determined cycle by cycle.
:::

:::proof{provenance=original}
**Part 1: existence.** Let the cyclic subgroup $\langle\sigma\rangle$ act on $A = \{1,\dots,n\}$ by $\sigma^{k}\cdot a = \sigma^{k}(a)$; this is an action because $\sigma^{j}(\sigma^{k}(a)) = \sigma^{j+k}(a)$ and $\sigma^0 = \mathrm{id}$. By :ref[]{to=group.group-actions} the orbits partition $A$. Fix an orbit and a point $a$ in it. The powers $a, \sigma(a), \sigma^2(a), \dots$ cannot all be distinct, $A$ being finite, so there are $0 \leq i < j$ with $\sigma^{i}(a) = \sigma^{j}(a)$; applying the bijection $\sigma^{-i}$ gives $\sigma^{j-i}(a) = a$ with $j - i \geq 1$. Let $m$ be the least positive integer with $\sigma^{m}(a) = a$. Then $a, \sigma(a), \dots, \sigma^{m-1}(a)$ are distinct — an equality $\sigma^{p}(a) = \sigma^{q}(a)$ with $0 \le p < q \le m-1$ would give $\sigma^{q-p}(a) = a$ with $0 < q-p < m$, contradicting minimality — and they are the whole orbit, because any $\sigma^{k}(a)$ equals $\sigma^{k \bmod m}(a)$ by division with remainder. On this orbit $\sigma$ acts exactly as the cycle $(a\ \sigma(a)\ \cdots\ \sigma^{m-1}(a))$. Doing this for every orbit produces pairwise disjoint cycles — disjoint because distinct orbits are disjoint — whose product agrees with $\sigma$ at every symbol, since every symbol lies in exactly one orbit.

**Part 1: uniqueness.** Suppose $\sigma$ is written as a product of pairwise disjoint cycles, $1$-cycles included. Let $a$ be a symbol and let $(a_1\,\cdots\,a_m)$ be the cycle containing it, say $a = a_1$ after a cyclic rotation of the way it is written. The other cycles do not contain any $a_i$, so they fix each of them, and the product therefore sends $a_i \mapsto a_{i+1}$ for $i<m$ and $a_m \mapsto a_1$. Hence $a_{i+1} = \sigma^{i}(a)$ for every $i$, and $m$ is the least positive integer with $\sigma^{m}(a) = a$. Both the set of symbols of the cycle and their cyclic order are thus determined by $\sigma$ and $a$ alone; the only freedom is which of its symbols is written first, and in what order the cycles are listed.

**Part 2.** Let $\gamma$ and $\delta$ be disjoint cycles and let $a$ be any symbol. If $a$ occurs in $\gamma$, then so does $\gamma(a)$, so $\delta$ fixes both and $\gamma\delta(a) = \gamma(a) = \delta\gamma(a)$. The case $a$ in $\delta$ is the same with the roles exchanged, and if $a$ occurs in neither then both sides fix it. So $\gamma\delta = \delta\gamma$.

**Part 3.** Write $\sigma = \gamma_1\cdots\gamma_r$ with the $\gamma_t$ disjoint of lengths $n_t$. Because they commute, $\sigma^{k} = \gamma_1^{k}\cdots\gamma_r^{k}$, and the factors still move disjoint sets of symbols, so $\sigma^{k} = \mathrm{id}$ if and only if $\gamma_t^{k} = \mathrm{id}$ for every $t$. A single $m$-cycle $\gamma$ satisfies $\gamma^{k} = \mathrm{id}$ exactly when $m \mid k$, by the minimality established in part 1. So $\sigma^k = \mathrm{id}$ if and only if every $n_t$ divides $k$, and the least such positive $k$ is $\mathrm{lcm}(n_1, \dots, n_r)$. $\square$
:::

:::statement[Transpositions, the sign, and the alternating group]{provenance=adapted src="dummit-foote-2004:§3.5, pp. 107-110, Props 23, 24 and 25; hassani-2013:Props 23.4.8 and 23.4.9, Box 23.4.11, pp. 718-719"}
Let $n \geq 2$.

1. Every $m$-cycle factors into $m-1$ transpositions:
$$
(a_1\,a_2\,\cdots\,a_m) = (a_1\,a_m)(a_1\,a_{m-1})\cdots(a_1\,a_3)(a_1\,a_2) .
$$
Consequently every element of $S_n$ is a product of transpositions, so the transpositions generate $S_n$. (The identity is the empty product.)
2. There is a homomorphism $\varepsilon \colon S_n \to \{+1, -1\}$, the **sign**, with $\varepsilon(\tau) = -1$ for every transposition $\tau$. It satisfies $\varepsilon(\sigma) = (-1)^{k}$ whenever $\sigma$ is a product of $k$ transpositions; in particular the **parity** of $k$ depends only on $\sigma$ and not on the factorisation chosen. A permutation is called **even** if $\varepsilon(\sigma) = +1$ and **odd** if $\varepsilon(\sigma) = -1$.
3. If $\sigma$ has $c(\sigma)$ cycles in its disjoint decomposition, $1$-cycles included, then
$$
\varepsilon(\sigma) = (-1)^{\,n - c(\sigma)} .
$$
Equivalently, $\sigma$ is odd precisely when the number of even-length cycles in its decomposition is odd.
4. $\varepsilon$ is surjective, and the **alternating group** $A_n = \ker\varepsilon$, the set of even permutations, is a normal subgroup of $S_n$ with
$$
\lvert A_n\rvert = \tfrac{1}{2}\,n! , \qquad [\,S_n : A_n\,] = 2 .
$$
:::

:::idea{provenance=original}
Part 1 is a computation: peeling off one symbol at a time with transpositions through a fixed base point rebuilds the cycle. The delicate point is part 2, since the same permutation factors into transpositions in infinitely many ways; what is needed is a quantity attached to $\sigma$ itself that changes sign under every transposition. The Vandermonde polynomial $\Delta = \prod_{i<j}(x_i - x_j)$ supplies one: permuting its variables can only permute the factors and flip some of their signs, so it returns $\pm\Delta$, and that sign is multiplicative. Part 3 then follows by counting how many transpositions each cycle costs, and part 4 from the first isomorphism theorem.
:::

:::proof{provenance=adapted src="dummit-foote-2004:§3.5, pp. 107-110; hassani-2013:Prop. 23.4.8, p. 718"}
**Part 1.** Apply the right-hand side to $a_1$, remembering that products act from the right. The rightmost factor $(a_1\,a_2)$ sends $a_1 \mapsto a_2$, and no later factor contains $a_2$, so the product sends $a_1 \mapsto a_2$. For $2 \leq i \leq m-1$, the factors to the right of $(a_1\,a_{i})$ fix $a_i$; then $(a_1\,a_i)$ sends $a_i \mapsto a_1$, and the next factor $(a_1\,a_{i+1})$ sends $a_1 \mapsto a_{i+1}$, which the remaining factors fix. So $a_i \mapsto a_{i+1}$. Finally $a_m$ is fixed by every factor except the leftmost, $(a_1\,a_m)$, which sends it to $a_1$. Any symbol outside $\{a_1,\dots,a_m\}$ is fixed by all factors. The right-hand side therefore agrees with the cycle everywhere, and it has $m-1$ factors. Since every permutation is a product of disjoint cycles, factoring each cycle this way writes it as a product of transpositions.

**Part 2: constructing $\varepsilon$.** Work in the polynomial ring $\mathbb{Z}[x_1, \dots, x_n]$ and set
$$
\Delta = \prod_{1 \le i < j \le n} (x_i - x_j) ,
$$
a non-zero polynomial. Let $S_n$ act on polynomials by permuting the indices of the variables, $(\sigma \cdot f)(x_1, \dots, x_n) = f(x_{\sigma(1)}, \dots, x_{\sigma(n)})$; this is an action because the indices compose correctly. Now
$$
\sigma\cdot\Delta = \prod_{i<j}\bigl(x_{\sigma(i)} - x_{\sigma(j)}\bigr) .
$$
As $\{i,j\}$ runs over all unordered pairs, so does $\{\sigma(i), \sigma(j)\}$, because $\sigma$ is a bijection; so the factors of $\sigma\cdot\Delta$ are those of $\Delta$ up to sign, each occurring once. A factor is reversed exactly when $i<j$ but $\sigma(i) > \sigma(j)$ — an **inversion** of $\sigma$. Writing $\mathrm{inv}(\sigma)$ for the number of inversions,
$$
\sigma \cdot \Delta = (-1)^{\mathrm{inv}(\sigma)}\,\Delta .
$$
Define $\varepsilon(\sigma)$ to be this sign, so $\sigma\cdot\Delta = \varepsilon(\sigma)\Delta$ and $\varepsilon(\sigma) = (-1)^{\mathrm{inv}(\sigma)}$.

**Part 2: $\varepsilon$ is a homomorphism.** Since $f \mapsto \sigma\cdot f$ is an action and multiplication by a constant commutes with it,
$$
\varepsilon(\sigma\tau)\,\Delta = (\sigma\tau)\cdot\Delta = \sigma\cdot(\tau\cdot\Delta) = \sigma\cdot\bigl(\varepsilon(\tau)\Delta\bigr) = \varepsilon(\tau)\,\bigl(\sigma\cdot\Delta\bigr) = \varepsilon(\tau)\varepsilon(\sigma)\,\Delta .
$$
$\Delta \neq 0$ and $\mathbb{Z}[x_1,\dots,x_n]$ has no zero divisors, so $\varepsilon(\sigma\tau) = \varepsilon(\sigma)\varepsilon(\tau)$.

**Part 2: transpositions are odd.** First take $\tau = (1\,2)$. It reverses the factor $x_1 - x_2$; a factor $x_1 - x_j$ with $j \geq 3$ becomes $x_2 - x_j$ and a factor $x_2 - x_j$ becomes $x_1 - x_j$, so these are exchanged in pairs with no sign change; and factors with neither index are untouched. Hence exactly one factor is reversed, $\mathrm{inv}((1\,2)) = 1$ and $\varepsilon((1\,2)) = -1$. For a general transposition $(i\,j)$ choose $\lambda \in S_n$ with $\lambda(1) = i$ and $\lambda(2) = j$. Then $\lambda(1\,2)\lambda^{-1} = (i\,j)$, since the left-hand side sends $i \mapsto 1 \mapsto 2 \mapsto j$, sends $j \mapsto i$ in the same way, and fixes everything else. Because $\varepsilon$ is a homomorphism into an abelian group,
$$
\varepsilon\bigl((i\,j)\bigr) = \varepsilon(\lambda)\,\varepsilon\bigl((1\,2)\bigr)\,\varepsilon(\lambda)^{-1} = \varepsilon\bigl((1\,2)\bigr) = -1 .
$$
If now $\sigma = \tau_1\cdots\tau_k$ with each $\tau_t$ a transposition, multiplicativity gives $\varepsilon(\sigma) = (-1)^{k}$. The left-hand side does not refer to the factorisation, so the parity of $k$ is an invariant of $\sigma$.

**Part 3.** Let $\sigma$ have disjoint cycles of lengths $n_1, \dots, n_c$ with $c = c(\sigma)$ and $\sum_t n_t = n$ ($1$-cycles included). By part 1 the $t$-th cycle is a product of $n_t - 1$ transpositions, so $\sigma$ is a product of $\sum_t (n_t - 1) = n - c$ of them, and part 2 gives $\varepsilon(\sigma) = (-1)^{n-c}$. For the restatement: a cycle of length $n_t$ contributes the factor $(-1)^{n_t-1}$, which is $-1$ exactly when $n_t$ is even, so $\varepsilon(\sigma) = -1$ exactly when an odd number of the cycles have even length. (The $1$-cycles contribute $(-1)^0 = 1$ and may be ignored in this count.)

**Part 4.** Since $n \geq 2$ the transposition $(1\,2)$ exists and has sign $-1$, while $\varepsilon(\mathrm{id}) = +1$; so $\varepsilon$ is onto $\{\pm 1\}$. A kernel is a normal subgroup, so $A_n = \ker\varepsilon \trianglelefteq S_n$, and the first isomorphism theorem (:ref[]{to=group.homomorphisms-quotients}) gives $S_n/A_n \cong \{\pm 1\}$, a group of order $2$. Hence $[S_n : A_n] = 2$ and, by :ref[Lagrange's theorem]{to=group.cosets-lagrange}, $\lvert A_n\rvert = \lvert S_n\rvert/2 = n!/2$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$n \geq 2$ is needed for part 4 only.** $S_1$ is the trivial group, it contains no transposition, $\varepsilon$ is not surjective, and $A_1 = S_1$ has index $1$, not $2$. Parts 1 to 3 are vacuous or trivially true there. Note also that the identity is the empty product of transpositions and is even, consistently with $c(\mathrm{id}) = n$ in part 3.

**Finiteness of $\Omega$ is used in the cycle decomposition, not in the group axioms.** $S_\Omega$ is a group for any $\Omega$, but the argument in part 1 of the decomposition theorem needs $\{1,\dots,n\}$ finite twice: to force a repetition among $a, \sigma(a), \sigma^2(a), \dots$, and to make the product of the cycles a finite product. A bijection of an infinite set need not decompose into cycles at all — translation $k \mapsto k+1$ on $\mathbb{Z}$ has a single infinite orbit and no finite cycle — and it has no sign.

**$\Delta \neq 0$ and the absence of zero divisors** are what let us cancel $\Delta$ and conclude multiplicativity. Working with *distinct* indeterminates is essential: substituting numbers for the $x_i$ could make $\Delta$ vanish and destroy the argument.

**Composition order.** We compose right to left, as :cite{work=dummit-foote-2004 loc="§1.3, p. 31"} and :cite{work=hassani-2013 loc="§23.4, p. 715"} do. Many physics texts compose left to right; the two conventions give anti-isomorphic products, so a formula such as $\tau\sigma\tau^{-1}$ must be read with the convention of its source. The sign is unaffected, being a homomorphism to an abelian group.

**A second convention clash: what a cycle permutes.** We follow Dummit and Foote and Hassani in letting $\sigma$ act on *symbols*, so $(1\,2\,5\,4)$ means $1\mapsto 2 \mapsto 5\mapsto 4 \mapsto 1$. :cite{work=rhb-2006 loc="§28.4, p. 1057"} instead lets the entries record *positions*, so that their $(1\,2\,5\,4)$ means the object in position 2 moves to position 1, the object in position 5 to position 2, and so on. The resulting permutation is the inverse of ours. Cycle lengths, cycle type, order and sign are the same under both readings, so the results above are unaffected, but the explicit image of a given symbol is not.

**Parity is not the parity of the order.** $(1\,2)$ and $(1\,2)(3\,4)$ both have order $2$, yet the first is odd and the second even. Part 3 counts cycles of even length, not the order of the element.
:::

:::note[Conjugacy classes of $S_n$]{provenance=adapted src="dummit-foote-2004:§4.3, Props 10 and 11, pp. 125-126; hassani-2013:Thm 23.4.12, p. 719"}
Conjugation relabels cycles: if $\sigma$ has a cycle $(a_1\,\cdots\,a_m)$ then $\tau\sigma\tau^{-1}$ has the cycle $(\tau(a_1)\,\cdots\,\tau(a_m))$, because $\sigma(a) = b$ gives $\tau\sigma\tau^{-1}(\tau(a)) = \tau(b)$. Hence conjugate permutations have the same cycle type, and conversely any two permutations of the same cycle type are conjugate — align their decompositions and let $\tau$ be the map taking each symbol to the one in the corresponding position. So the :ref[conjugacy classes]{to=group.conjugacy-classes} of $S_n$ are exactly the cycle types, and their number is the number of partitions of $n$. The sign is constant on each class, as it must be, since $\varepsilon$ is a homomorphism into an abelian group and part 3 depends only on the cycle lengths.
:::

:::method[Working with a permutation]{provenance=original}
Given $\sigma \in S_n$ in two-row or one-line form:

1. **Decompose into cycles.** Start at the smallest symbol not yet used, say $a$; write $a, \sigma(a), \sigma^2(a), \dots$ until $a$ reappears, and close the bracket. Repeat with the smallest unused symbol until all $n$ symbols are used. Keep a note of the $1$-cycles even if they are not written.
2. **Read off the cycle type**, the list of lengths including the $1$-cycles. It must sum to $n$; this is the check that nothing has been dropped.
3. **Order:** take the lowest common multiple of the cycle lengths.
4. **Sign:** count the cycles, $1$-cycles included, as $c$; then $\varepsilon(\sigma) = (-1)^{n-c}$. Equivalently, count the cycles of even length: $\sigma$ is odd when that count is odd.
5. **Factor into transpositions** when needed, with $(a_1\,\cdots\,a_m) = (a_1\,a_m)\cdots(a_1\,a_2)$ cycle by cycle. The total number of factors is $n - c$, which re-checks the sign.
6. **Inverse:** reverse the symbols inside each cycle.
7. **Size of the conjugacy class:** for a cycle type with $\nu_k$ cycles of length $k$,
$$
\lvert K_\sigma\rvert = \frac{n!}{\prod_{k\ge 1} k^{\nu_k}\,\nu_k!} ,
\qquad
\lvert C_{S_n}(\sigma)\rvert = \prod_{k\ge 1} k^{\nu_k}\,\nu_k! ,
$$
the denominator counting the cyclic rotations within each cycle and the permutations of equal-length cycles among themselves.
:::

:::example[A permutation of nine symbols]{provenance=original}
Let $\sigma \in S_9$ be given by
$$
\sigma = \begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 \\ 5 & 9 & 7 & 2 & 1 & 3 & 6 & 4 & 8 \end{pmatrix} .
$$

**Step 1: cycles.** Start at $1$: $1 \mapsto 5 \mapsto 1$, giving $(1\,5)$. The smallest unused symbol is $2$: $2 \mapsto 9 \mapsto 8 \mapsto 4 \mapsto 2$, giving $(2\,9\,8\,4)$. Next is $3$: $3 \mapsto 7 \mapsto 6 \mapsto 3$, giving $(3\,7\,6)$. All nine symbols are now used, so
$$
\sigma = (1\,5)(2\,9\,8\,4)(3\,7\,6) .
$$
Check: the lengths are $2 + 4 + 3 = 9 = n$, and there are no fixed points.

**Step 2: cycle type and number of cycles.** The cycle type is $2,3,4$, a partition of $9$, and $c(\sigma) = 3$.

**Step 3: order.** $\mathrm{lcm}(2,3,4) = 12$, so $\sigma$ has order $12$. (Direct check: $\sigma^{12}$ acts as the identity on each cycle because $2 \mid 12$, $4\mid 12$ and $3\mid 12$; and no proper divisor of $12$ is a multiple of both $3$ and $4$.)

**Step 4: sign, three ways.**
- From part 3: $\varepsilon(\sigma) = (-1)^{\,9-3} = (-1)^{6} = +1$.
- By counting even-length cycles: the $2$-cycle and the $4$-cycle are the even ones, two of them, an even number; so $\sigma$ is even.
- From the inversions of the one-line form $5\,9\,7\,2\,1\,3\,6\,4\,8$: the pairs $i<j$ with $\sigma(i) > \sigma(j)$ number $4+7+5+1+0+0+1+0 = 18$ (counting, for each position in turn, the smaller entries to its right), and $(-1)^{18} = +1$.

All three agree: $\sigma$ is **even**, $\varepsilon(\sigma) = +1$, so $\sigma \in A_9$.

**Step 5: as a product of transpositions.**
$$
(1\,5) , \qquad (2\,9\,8\,4) = (2\,4)(2\,8)(2\,9), \qquad (3\,7\,6) = (3\,6)(3\,7) ,
$$
so
$$
\sigma = (1\,5)(2\,4)(2\,8)(2\,9)(3\,6)(3\,7) ,
$$
a product of $6$ transpositions — and $6 = n - c = 9 - 3$, as step 4 of the method predicts, with $6$ even, confirming once more that $\sigma$ is even.

**Step 6: the inverse.** Reversing each cycle, $\sigma^{-1} = (5\,1)(4\,8\,9\,2)(6\,7\,3)$, that is $\sigma^{-1} = (1\,5)(2\,4\,8\,9)(3\,6\,7)$ after rotating each bracket to start at its smallest symbol. Spot check: $\sigma(2) = 9$ and $\sigma^{-1}(9) = 2$.

**Step 7: the conjugacy class.** The cycle type $2,3,4$ has $\nu_2 = \nu_3 = \nu_4 = 1$ and no repetitions, so
$$
\lvert C_{S_9}(\sigma)\rvert = 2^1 1! \cdot 3^1 1!\cdot 4^1 1! = 24 ,
\qquad
\lvert K_\sigma\rvert = \frac{9!}{24} = \frac{362\,880}{24} = 15\,120 .
$$
There are therefore exactly $15\,120$ permutations of nine symbols with one $2$-cycle, one $3$-cycle and one $4$-cycle, and $15\,120$ divides $9! = 362\,880$ with quotient $24$, as the orbit–stabilizer theorem requires. All $15\,120$ of them are even, since the sign depends only on the cycle type.
:::

:::application{provenance=original}
**Identical particles and the sign.** The state of $n$ indistinguishable particles must be unchanged in physical content when the particle labels are permuted, so $S_n$ acts on the $n$-particle state space. :cite{work=arfken-2013 loc="§17.6, Eqs (17.23)-(17.24), pp. 840-841"} records the two one-dimensional possibilities that nature uses: a boson wavefunction satisfies $P\Psi_B = \Psi_B$ for every permutation $P$, and a fermion wavefunction satisfies $P\Psi_F = \varepsilon(P)\,\Psi_F$, with exactly the sign constructed above. The factor $\varepsilon(P)$ is the $n$-index Levi-Civita symbol. Everything that follows from antisymmetry follows from the single fact that $\varepsilon$ is a homomorphism taking the value $-1$ on transpositions: exchanging two fermions reverses the sign, so two fermions in the same one-particle state give $\Psi_F = -\Psi_F = 0$, which is the Pauli exclusion principle.

**The Slater determinant and the determinant itself.** The antisymmetric state built from $n$ one-particle orbitals $\phi_1, \dots, \phi_n$ is
$$
\Psi_F(1,\dots,n) = \frac{1}{\sqrt{n!}} \sum_{\sigma \in S_n} \varepsilon(\sigma)\, \phi_{\sigma(1)}(1)\cdots\phi_{\sigma(n)}(n) ,
$$
which is $1/\sqrt{n!}$ times the determinant of the matrix $[\phi_j(i)]$. That is no coincidence: the Leibniz formula $\det A = \sum_{\sigma\in S_n}\varepsilon(\sigma)\,A_{1\sigma(1)}\cdots A_{n\sigma(n)}$ defines the determinant as the unique alternating multilinear function normalised at the identity, and the sign in it is the sign homomorphism of this unit (:ref[]{to=linalg.determinants}). The vanishing of a determinant with two equal columns and the Pauli principle are the same statement about $\varepsilon$. The sign is likewise what makes the Levi-Civita symbol $\epsilon_{ijk}$ of vector calculus well defined, and hence the cross product and the curl.

**Permutation symmetry beyond the two extremes.** For $n \geq 3$ the symmetric group has irreducible representations of dimension greater than one, labelled by the partitions of $n$ — equivalently by the conjugacy classes, as the note above explains. When a many-electron state is split into a spatial and a spin factor, each factor transforms under one of these higher-dimensional representations and only the product is antisymmetric; the resulting bookkeeping of Young tableaux governs the term symbols of atomic spectra and the exchange splitting responsible for Hund's rules. :ref[]{to=group.representations} and :ref[]{to=group.character-tables} set up the machinery.

**Sorting, parity and the sign in computation.** Numerically, the sign of a permutation is read off during Gaussian elimination: each row interchange is a transposition and multiplies the determinant by $-1$, so an implementation tracks a single boolean. The decomposition into disjoint cycles is also how a permutation is applied in place, cycle by cycle, with one temporary variable, and the number of transpositions needed, $n - c(\sigma)$, is the minimum number of swaps that will sort the data.
:::
