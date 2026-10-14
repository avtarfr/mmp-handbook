---
id: group.clebsch-gordan
title: Addition of angular momenta
kind: method
level: core
summary: Gives the recipe for passing between the uncoupled basis $|j_1m_1\rangle|j_2m_2\rangle$ and the coupled basis $|J,M\rangle$ — the triangle rule $|j_1-j_2|\le J\le j_1+j_2$, the ladder-and-orthogonalise construction, the closed formula and the $3j$-symbol symmetries — with the Clebsch-Gordan series proved twice, by counting states and by multiplying characters.
prereqs: [group.angular-momentum, group.product-representations, group.so3-su2, group.orthogonality-characters, linalg.gram-schmidt, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§16.2, pp. 784–795: the commutators $[j_{1k},j_{2l}]=0$ and the two commuting sets $\\{j_1^2,j_2^2,j_{1z},j_{2z}\\}$ and $\\{J^2,j_1^2,j_2^2,J_z\\}$, Eqs. (16.32)–(16.35), pp. 784–786; the $M$-table and the vector model giving $J_{\\max}=j_1+j_2$, pp. 786–787; the state count $\\sum_{J=J_{\\min}}^{J_{\\max}}(2J+1)=(2j_1+1)(2j_2+1)$ and $J_{\\min}=|j_1-j_2|$, Eq. (16.37), p. 787; the ladder construction from the stretched state and the orthogonalisation step, Eqs. (16.38)–(16.42), pp. 788–789; the definition of the Clebsch-Gordan coefficients, their reality, the inverse transformation and the unitarity of the transformation, Eqs. (16.43)–(16.45), pp. 789–790; the closed formula $C=F_1F_2F_3$, Eq. (16.46), p. 790; the Wigner $3j$-symbols, Eq. (16.47), their permutation and sign symmetries, Eqs. (16.48)–(16.49), and Table 16.1, pp. 790–791; Examples 16.2.2 (two spinors) and 16.2.3 (coupling $p$ and $d$ electrons), pp. 792–795"
    pages: "784-795"
    role: the whole structure of the unit — the two bases, the triangle rule and its two proofs, the ladder-and-orthogonalise recipe, the closed formula for the coefficients, and the $3j$-symbol symmetries
  - work: hassani-2013
    loc: "§24.8.1, pp. 753–756: the Clebsch-Gordan decomposition of a tensor product of irreducible representations of a group $G$ via characters, $\\chi^{(\\alpha\\times\\beta)}=\\sum_\\sigma m_\\sigma^{\\alpha\\beta}\\chi^{(\\sigma)}$ and the projection formula for $m_\\sigma^{\\alpha\\beta}$, Eqs. (24.44)–(24.45), pp. 753–754, the notion of a simply reducible group, p. 753, and the general definition of Clebsch-Gordan coefficients $C(\\alpha\\beta;\\sigma,q|ij;k)$ with their two orthonormality relations and the inverse expansion, Eqs. (24.46)–(24.47), p. 756; §30.3.3, pp. 973–974: the character of a rotation, $\\chi^{(j)}(\\varphi)=\\sin\\bigl((j+\\tfrac12)\\varphi\\bigr)/\\sin(\\varphi/2)$, Eq. (30.17), and its use to obtain the addition theorem for angular momenta from $\\chi^{(j_1\\times j_2)}=\\chi^{(j_1)}\\chi^{(j_2)}$, together with the singlet coefficient $C(ll;0|m,-m;0)=(-1)^{l-m}/\\sqrt{2l+1}$, p. 974"
    pages: "753-756, 973-974"
    role: the character proof of the Clebsch-Gordan series for the rotation group, the general-group definition of the coefficients and their orthonormality relations, the vocabulary of a simply reducible group, and the closed value of the singlet coefficients used as a check
---

:::definition[The two bases and the coefficients]{provenance=adapted src="arfken-2013:pp. 784–786 and Eqs. (16.43)–(16.45), pp. 789–790; hassani-2013:Eqs. (24.46)–(24.47), p. 756"}
Let $\mathbf{j}_1$ and $\mathbf{j}_2$ be two angular momenta in the sense of :ref[angular momentum algebra]{to=group.angular-momentum}, acting on spaces $V_1$ and $V_2$ and **commuting with each other**:
$$
[j_{1k},\,j_{2l}] = 0 \qquad\text{for all } k,l\in\{1,2,3\} .
$$
This holds automatically when they act on different tensor factors, $j_{1k}\otimes I$ and $I\otimes j_{2l}$, which is the situation of two particles or of the orbit and the spin of one particle. The **total angular momentum** is
$$
\mathbf{J} = \mathbf{j}_1+\mathbf{j}_2, \qquad J_k = j_{1k}+j_{2k} ,
$$
and it is again an angular momentum: $[J_k,J_l] = [j_{1k},j_{1l}] + [j_{2k},j_{2l}] = i\epsilon_{klm}(j_{1m}+j_{2m}) = i\epsilon_{klm}J_m$, the cross terms vanishing by the commuting hypothesis.

Fix irreducible $V_1$ and $V_2$ of spins $j_1$ and $j_2$, of dimensions $2j_1+1$ and $2j_2+1$, and work on $V = V_1\otimes V_2$, of dimension $(2j_1+1)(2j_2+1)$.

- The **uncoupled basis** diagonalises $j_1^2, j_2^2, j_{1z}, j_{2z}$:
$$
|j_1 m_1; j_2 m_2\rangle := |j_1,m_1\rangle\otimes|j_2,m_2\rangle,
\qquad -j_i \le m_i \le j_i .
$$
- The **coupled basis** diagonalises $j_1^2, j_2^2, J^2, J_z$ and is written $|J,M\rangle$ (with $j_1,j_2$ understood).

Both are orthonormal bases of $V$. The **Clebsch-Gordan coefficients** are the entries of the change of basis,
$$
|J,M\rangle = \sum_{m_1,m_2} C(j_1 j_2 J\,|\,m_1 m_2 M)\;|j_1m_1;j_2m_2\rangle ,
\qquad
C(j_1 j_2 J\,|\,m_1 m_2 M) = \langle j_1m_1;j_2m_2\,|\,J,M\rangle .
$$
The sum looks double but is single: the coefficient vanishes unless $m_1+m_2 = M$.

:cite[Hassani]{work=hassani-2013 loc="Eqs. (24.46)–(24.47), p. 756"} defines the same objects for an arbitrary group $G$, as the coefficients $C(\alpha\beta;\sigma,q|ij;k)$ expanding a basis of the tensor product in vectors transforming by the irreducible representations, with a further label $q$ to separate repeated copies. For $SU(2)$ no copy is ever repeated — the group is **simply reducible** in Hassani's terminology — so $q$ is unnecessary. That is part 1 of the statement below.
:::

:::statement[The Clebsch-Gordan series and the properties of the coefficients]{provenance=adapted src="arfken-2013:Eq. (16.37), p. 787, Eqs. (16.43)–(16.49) and Table 16.1, pp. 789–791; hassani-2013:Eq. (30.17), p. 973, and p. 974"}
With the notation above:

1. **The series (triangle rule).** $V_1\otimes V_2$ decomposes into irreducible subspaces, one for each
$$
J = |j_1-j_2|,\ |j_1-j_2|+1,\ \dots,\ j_1+j_2 ,
$$
each occurring exactly once. In the notation of representations, $D^{(j_1)}\otimes D^{(j_2)} \cong \bigoplus_{J=|j_1-j_2|}^{j_1+j_2} D^{(J)}$, and the dimensions check:
$$
\sum_{J=|j_1-j_2|}^{j_1+j_2}(2J+1) = (2j_1+1)(2j_2+1) .
$$

2. **Selection rules.** $C(j_1j_2J|m_1m_2M) = 0$ unless $M = m_1+m_2$ and $|j_1-j_2|\le J\le j_1+j_2$ with $j_1+j_2+J$ an integer.

3. **Reality, orthogonality and inversion.** With the Condon-Shortley phase convention — which fixes the signs by requiring $C(j_1j_2J|j_1,J-j_1,J) > 0$ for every $J$ — all the coefficients are real, the transformation matrix is orthogonal, and
$$
\sum_{m_1m_2} C(j_1j_2J|m_1m_2M)\,C(j_1j_2J'|m_1m_2M') = \delta_{JJ'}\delta_{MM'} ,
$$
$$
\sum_{J M} C(j_1j_2J|m_1m_2M)\,C(j_1j_2J|m_1'm_2'M) = \delta_{m_1m_1'}\delta_{m_2m_2'} ,
$$
so that the inverse expansion is
$$
|j_1m_1;j_2m_2\rangle = \sum_{J,M} C(j_1j_2J|m_1m_2M)\,|J,M\rangle .
$$

4. **Closed formula** (:cite[Arfken, Weber and Harris, Eq. (16.46)]{work=arfken-2013 loc="p. 790"}): $C(j_1j_2J|m_1m_2M) = F_1F_2F_3$ with
$$
F_1 = \left[\frac{(j_1+j_2-J)!\,(J+j_1-j_2)!\,(J+j_2-j_1)!\,(2J+1)}{(j_1+j_2+J+1)!}\right]^{1/2},
$$
$$
F_2 = \bigl[(J+M)!\,(J-M)!\,(j_1+m_1)!\,(j_1-m_1)!\,(j_2+m_2)!\,(j_2-m_2)!\bigr]^{1/2},
$$
$$
F_3 = \sum_{s}\frac{(-1)^s}{(j_1-m_1-s)!\,(j_2+m_2-s)!\,(J-j_2+m_1+s)!\,(J-j_1-m_2+s)!\,(j_1+j_2-J-s)!\,s!},
$$
the sum running over the finitely many integers $s$ for which every factorial has a non-negative argument.

5. **Symmetries, through the $3j$-symbol.** Define
$$
\begin{pmatrix} j_1& j_2& j_3\\ m_1&m_2&m_3\end{pmatrix}
= \frac{(-1)^{\,j_1-j_2-m_3}}{(2j_3+1)^{1/2}}\;C(j_1j_2j_3\,|\,m_1m_2,-m_3) .
$$
Then the $3j$-symbol is unchanged under an even permutation of its three columns, is multiplied by $(-1)^{j_1+j_2+j_3}$ under an odd permutation, and is multiplied by the same factor when all three $m$'s change sign. It vanishes unless $m_1+m_2+m_3 = 0$.

6. **A closed family worth remembering** (:cite[Hassani]{work=hassani-2013 loc="p. 974"}): coupling two equal angular momenta to a scalar,
$$
C(ll\,0\,|\,m,-m,0) = \frac{(-1)^{l-m}}{\sqrt{2l+1}} .
$$
:::

:::idea{provenance=original}
Both bases diagonalise $J_z$, so the change of basis cannot mix different $M$: the big matrix splits into one small block per value of $M$. Listing the uncoupled states by $M$ therefore tells you the whole answer, because the number of coupled states with a given $M$ must match.

There is exactly one uncoupled state with the largest possible $M = j_1+j_2$, namely the one with both $m$'s maximal. Being alone in its block it must already be a coupled state, and it must belong to $J = j_1+j_2$. Lowering it with $J_-$ generates that whole multiplet. At $M = j_1+j_2-1$ there are two uncoupled states but the first multiplet has used only one combination, so the leftover direction is a new top state, of $J = j_1+j_2-1$. Repeat. The process stops when the supply of uncoupled states at the next $M$ stops growing, which happens at $J = |j_1-j_2|$; counting dimensions confirms it.

So there are two ways to see the series, and this unit gives both. The counting argument is elementary and constructive — it *is* the algorithm. The character argument is slicker and generalises: multiply two characters $\sin\bigl((j+\tfrac12)\varphi\bigr)/\sin(\varphi/2)$ and watch the product collapse, by a telescoping trigonometric identity, into a sum of characters with $J$ running over exactly the triangle range.
:::

:::proof[Part 1 by counting states]{provenance=adapted src="arfken-2013:pp. 786–787 and Eq. (16.37), p. 787"}
**Step 1: $J^2$, $J_z$, $j_1^2$, $j_2^2$ commute.** $J^2 = j_1^2+j_2^2+2\,\mathbf{j}_1\!\cdot\!\mathbf{j}_2$ by the commuting hypothesis, and $j_1^2$ commutes with every $j_{1k}$ and with everything carrying index $2$; the same for $j_2^2$. That $[J^2,J_k]=0$ is part 1 of :ref[angular momentum algebra]{to=group.angular-momentum} applied to $\mathbf{J}$. So the four operators have a common eigenbasis, which is the coupled basis. Note that $j_{1z}$ does **not** commute with $J^2$: as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 16.2.1, p. 785"} compute, $[J^2,j_{1z}] = 2i(j_{1x}j_{2y}-j_{1y}j_{2x})$, non-zero, and it is cancelled by $[J^2,j_{2z}]$. This is why the two bases genuinely differ.

**Step 2: count uncoupled states at each $M$.** Let $n(M)$ be the number of pairs $(m_1,m_2)$ with $m_1+m_2 = M$, $|m_i|\le j_i$. Assume $j_1\ge j_2$ without loss. As $M$ decreases from $j_1+j_2$, the count rises by one at each step until $m_2$ runs out of room:
$$
n(M) = \begin{cases} j_1+j_2-M+1, & j_1-j_2 \le M \le j_1+j_2,\\ 2j_2+1, & |M|\le j_1-j_2,\end{cases}
$$
and $n(-M) = n(M)$.

**Step 3: the largest $J$.** Since $M = m_1+m_2$ for every uncoupled state, no state has $M > j_1+j_2$; and $n(j_1+j_2) = 1$. A coupled multiplet of spin $J$ contributes exactly one state at each $M$ with $|M|\le J$, so the number of multiplets with $J\ge M$ equals $n(M)$. Taking $M = j_1+j_2$ gives exactly one multiplet with $J \ge j_1+j_2$, and none can have $J > j_1+j_2$ because it would contribute a state of that $M$. Hence $J_{\max} = j_1+j_2$, occurring once.

**Step 4: every $J$ down to $j_1-j_2$ occurs once.** The number of multiplets with $J$ exactly equal to $M$ is $n(M)-n(M+1)$, which by step 2 is $1$ for $j_1-j_2\le M\le j_1+j_2$ and $0$ for $M < j_1-j_2$. So the multiplets are $J = j_1-j_2,\dots,j_1+j_2$, each once. With the assumption $j_1\ge j_2$ dropped, $J_{\min} = |j_1-j_2|$.

**Step 5: the dimension check.** Independently of step 4, write $J_{\min}$ for the smallest $J$ and sum the dimensions:
$$
\sum_{J=J_{\min}}^{J_{\max}}(2J+1) = (J_{\max}-J_{\min}+1)(J_{\max}+J_{\min}+1) = J_{\max}^2 + 2J_{\max} - J_{\min}^2 + 1 ,
$$
the middle expression being the number of terms times their average. Setting this equal to $\dim V = (2j_1+1)(2j_2+1)$ with $J_{\max}=j_1+j_2$ gives $J_{\min}^2 = (j_1-j_2)^2$, hence $J_{\min} = |j_1-j_2|$ — :cite[Arfken, Weber and Harris's Eq. (16.37)]{work=arfken-2013 loc="p. 787"}. This is the same conclusion as step 4 by a shorter route, and it is a useful arithmetic check on any decomposition.

**Step 6: part 2.** $M = m_1+m_2$ because $J_z = j_{1z}+j_{2z}$ acts on $|j_1m_1;j_2m_2\rangle$ with eigenvalue $m_1+m_2$, and $\langle j_1m_1;j_2m_2|J,M\rangle$ is an inner product of eigenvectors of the Hermitian $J_z$ with eigenvalues $m_1+m_2$ and $M$, hence zero unless they agree. The triangle condition is step 4; that $j_1+j_2+J$ is an integer follows because the $2j_i$ are integers and $J$ differs from $j_1+j_2$ by an integer. $\square$
:::

:::proof[Part 1 again, by characters]{provenance=adapted src="hassani-2013:Eq. (30.17), p. 973, and p. 974; arfken-2013:Eq. (16.43), p. 789"}
This route uses the character theory of :ref[orthogonality relations and characters]{to=group.orthogonality-characters} and gives the series without constructing anything.

**Step 1: the character of a rotation in the spin-$j$ representation.** A rotation through $\varphi$ about the $z$-axis acts on $|j,m\rangle$ by $e^{-im\varphi}$, so, writing the sum as a geometric series,
$$
\chi^{(j)}(\varphi) = \sum_{m=-j}^{j} e^{-im\varphi}
= e^{ij\varphi}\,\frac{1-e^{-i(2j+1)\varphi}}{1-e^{-i\varphi}}
= \frac{e^{i(j+\frac12)\varphi}-e^{-i(j+\frac12)\varphi}}{e^{i\varphi/2}-e^{-i\varphi/2}}
= \frac{\sin\bigl((j+\tfrac12)\varphi\bigr)}{\sin(\varphi/2)} .
$$
This is :cite[Hassani's Eq. (30.17)]{work=hassani-2013 loc="p. 973"} (he writes $e^{+im\varphi}$, which gives the same real sum). Because every rotation through $\varphi$ is conjugate to this one, as noted in :ref[conjugacy classes]{to=group.conjugacy-classes}, the character depends only on $\varphi$.

**Step 2: characters multiply under $\otimes$.** In the product basis the matrix of $R\otimes R$ has diagonal entries $D^{(j_1)}_{m_1m_1}D^{(j_2)}_{m_2m_2}$, so summing over the pairs $(m_1,m_2)$ factorises the trace into $\chi^{(j_1)}\chi^{(j_2)}$. This is the general fact recorded in :ref[product representations and selection rules]{to=group.product-representations}.

**Step 3: collapse the product.** Assume $j_1\ge j_2$ and abbreviate $s = \sin(\varphi/2)$. Keep the first factor in closed form and the second as its sum:
$$
\chi^{(j_1)}(\varphi)\,\chi^{(j_2)}(\varphi)
= \frac{\sin\bigl((j_1+\tfrac12)\varphi\bigr)}{s}\;\sum_{m=-j_2}^{j_2}e^{-im\varphi}
= \frac{1}{s}\sum_{m=-j_2}^{j_2}\sin\bigl((j_1+\tfrac12)\varphi\bigr)\,e^{-im\varphi} .
$$
The terms $m$ and $-m$ have conjugate exponentials with the same real prefactor, so the imaginary parts cancel in pairs and $e^{-im\varphi}$ may be replaced by $\cos(m\varphi)$. The product-to-sum identity $\sin A\cos B = \tfrac12\bigl[\sin(A+B)+\sin(A-B)\bigr]$ then turns the term with index $m$ into
$$
\tfrac12\Bigl[\sin\bigl((j_1+m+\tfrac12)\varphi\bigr) + \sin\bigl((j_1-m+\tfrac12)\varphi\bigr)\Bigr] .
$$
As $m$ runs from $-j_2$ to $j_2$, the quantity $j_1+m$ runs over $j_1-j_2,\dots,j_1+j_2$, and so does $j_1-m$. Each value $J$ in that range is therefore produced exactly twice, once by each of the two families, and the factor $\tfrac12$ is absorbed:
$$
\chi^{(j_1)}(\varphi)\,\chi^{(j_2)}(\varphi) = \frac{1}{s}\sum_{J=j_1-j_2}^{j_1+j_2}\sin\Bigl(\bigl(J+\tfrac12\bigr)\varphi\Bigr) = \sum_{J=j_1-j_2}^{j_1+j_2}\chi^{(J)}(\varphi) ,
$$
the last step by step 1 read backwards.

**Step 4: read off the multiplicities.** Two representations of a compact group with the same character are equivalent, and by the orthogonality of characters the multiplicity of $D^{(J)}$ in the product is the coefficient of $\chi^{(J)}$ in this expansion, namely $1$ for each $J$ in the triangle range and $0$ otherwise. That is :cite[Hassani's]{work=hassani-2013 loc="Eqs. (24.44)–(24.45), pp. 753–754"} general projection formula $m^{\alpha\beta}_{\sigma} = \frac{1}{|G|}\sum_i c_i\,\overline{\chi_i^{(\sigma)}}\chi_i^{(\alpha)}\chi_i^{(\beta)}$ specialised to the rotation group, with the sum over classes replaced by an integral over $\varphi$. Since every multiplicity is $0$ or $1$, $SU(2)$ is **simply reducible** in Hassani's sense, which is exactly why the Clebsch-Gordan coefficients need no extra label to separate repeated copies. $\square$
:::

:::proof[Part 3: reality, orthogonality and inversion]{provenance=adapted src="arfken-2013:Eqs. (16.44)–(16.45), pp. 789–790; hassani-2013:p. 756"}
**Reality.** The construction of the method below produces each $|J,M\rangle$ from $|j_1j_1;j_2j_2\rangle$ by applying $J_- = j_{1-}+j_{2-}$, whose matrix elements are real and non-negative, and by orthogonalising against previously built states — a Gram-Schmidt step (:ref[Gram-Schmidt]{to=linalg.gram-schmidt}) with real coefficients. Starting from a basis whose expansion coefficients are real, every subsequent vector has real coefficients; the only freedom is an overall sign at each orthogonalisation, and the Condon-Shortley convention fixes it. Hence all $C$ are real, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 789"} note, even when the underlying kets are complex.

**Orthogonality.** Both $\{|J,M\rangle\}$ and $\{|j_1m_1;j_2m_2\rangle\}$ are orthonormal bases of the same space, so the matrix $C$ taking one to the other is unitary; being real, it is orthogonal. The two displayed sums are $C^{\mathsf{T}}C = I$ and $CC^{\mathsf{T}} = I$ written out. They are the specialisation of :cite[Hassani's]{work=hassani-2013 loc="p. 756"} two normalisation relations for a general group, with the labels $q$ dropped.

**Inversion.** For an orthogonal matrix the inverse is the transpose, so expanding $|j_1m_1;j_2m_2\rangle$ in the coupled basis uses the *same* numbers with the roles of the index sets exchanged, which is the displayed formula; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (16.45), p. 790"} make the same remark. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$[j_{1k},j_{2l}]=0$ is used everywhere.** It is what makes $\mathbf{J}=\mathbf{j}_1+\mathbf{j}_2$ an angular momentum at all (the cross terms in the commutator cancel only because they vanish), and what makes $j_1^2$ and $j_2^2$ commute with $J^2$ so that $j_1,j_2$ remain good labels after coupling. Two angular momenta acting on the *same* degree of freedom — say $\mathbf{L}$ and $\mathbf{L}$ itself — do not satisfy it, and nothing in this unit applies to them.
- **$j_1$ and $j_2$ may independently be integer or half-integer**, and the construction never cares. What the parities do control is the parity of $J$: $J$ differs from $j_1+j_2$ by an integer, so coupling two half-integers gives integer $J$ (two spin-$\tfrac12$ particles make a spin-$0$ or spin-$1$ system, a boson), and coupling a half-integer with an integer gives half-integer $J$. This is the $SU(2)$-versus-$SO(3)$ distinction of :ref[the rotation group and SU(2)]{to=group.so3-su2} again: the product of two representations on which $-I$ acts as $-1$ is one on which it acts as $+1$.
- **Multiplicity one is special to $SU(2)$.** The counting argument used that $n(M)-n(M+1)\in\{0,1\}$, which is a fact about this particular group. For a general group the multiplicity $m^{\alpha\beta}_{\sigma}$ of :cite[Hassani]{work=hassani-2013 loc="Eq. (24.45), p. 754"} can exceed one, and then a further label $q$ is needed and the "Clebsch-Gordan coefficients" are defined only up to a choice of basis in the multiplicity space. The method below would break at the orthogonalisation step, which assumes the leftover direction is unique up to sign.
- **The phase convention is a convention, but not an optional one.** Step 4 of the method leaves the sign of each new highest state free; the formulas of part 4 and the symmetries of part 5 are true only with Condon-Shortley. A table of coefficients from another source may differ by a sign in whole multiplets. The test is $C(j_1j_2J|j_1,J-j_1,J)>0$.
- **The closed formula is exact but badly conditioned.** $F_3$ is an alternating sum of large factorials, so computing it in floating point loses digits catastrophically for $j\gtrsim 10$; use exact rational arithmetic, or recursion in $M$, or logarithms of factorials with the signs handled separately.
- **The triangle rule is not the classical vector inequality.** As :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 786"} point out, the classical picture — that the length of $\mathbf{j}_1+\mathbf{j}_2$ lies between the sum and the difference of the lengths — is only a mnemonic, because the length of a quantum angular momentum is $\sqrt{j(j+1)}$ and not $j$. The rule $|j_1-j_2|\le J\le j_1+j_2$ is exact for the *quantum numbers*, not for the lengths.
:::

:::method[Coupling two angular momenta]{provenance=adapted src="arfken-2013:Eqs. (16.38)–(16.42), pp. 788–789"}
Given $j_1$ and $j_2$:

1. **List the uncoupled states by $M$.** Make a table with one row per value of $M = m_1+m_2$, from $j_1+j_2$ down to $-(j_1+j_2)$, listing in each row the pairs $(m_1,m_2)$ that produce it. The row lengths tell you the answer in advance: the number of multiplets with $J\ge M$ is the length of row $M$.
2. **Start from the stretched state.** The single entry in the top row is already a coupled state,
$$
|J_{\max},J_{\max}\rangle = |j_1 j_1; j_2 j_2\rangle, \qquad J_{\max}=j_1+j_2 ,
$$
so $C(j_1j_2J_{\max}|j_1 j_2 J_{\max}) = 1$.
3. **Lower.** Apply $J_- = j_{1-}+j_{2-}$ to both sides and divide by the coefficient on the left. With the matrix elements of :ref[angular momentum algebra]{to=group.angular-momentum},
$$
|J,M-1\rangle = \frac{1}{\sqrt{(J+M)(J-M+1)}}\bigl(j_{1-}+j_{2-}\bigr)|J,M\rangle ,
$$
each $j_{i-}$ acting on its own factor with coefficient $\sqrt{(j_i+m_i)(j_i-m_i+1)}$. Repeat down to $M = -J$.
4. **Orthogonalise to get the next multiplet.** In the row $M = J-1$ there is one more uncoupled state than coupled states built so far. The new highest state $|J-1,J-1\rangle$ is the unit vector in that row orthogonal to all the $|J',J-1\rangle$ already constructed; by part 3 it is unique up to sign, and the sign is fixed by requiring the coefficient of the state with the largest $m_1$ to be positive.
5. **Repeat** steps 3 and 4, lowering the new top state and orthogonalising again, until $J$ reaches $|j_1-j_2|$. Stop; the table is exhausted.
6. **Or use the closed formula** of part 4 for a single coefficient, in exact arithmetic.
7. **Or use a $3j$ table.** Convert with part 5, $C(j_1j_2J|m_1m_2M) = (-1)^{\,j_1-j_2+M}\sqrt{2J+1}\begin{pmatrix}j_1&j_2&J\\ m_1&m_2&-M\end{pmatrix}$, and use the permutation and sign symmetries to reach whichever entry the table actually lists. This is why tables are published as $3j$-symbols: one entry serves many coefficients.
8. **Check.** Each $|J,M\rangle$ has coefficients whose squares sum to $1$; states with the same $M$ and different $J$ are orthogonal; and the total number of coupled states equals $(2j_1+1)(2j_2+1)$.
:::

:::example[Coupling $j_1=1$ to $j_2=\tfrac12$, by hand and three ways checked]{provenance=original}
This is the orbit-plus-spin coupling of a $p$ electron. Write the uncoupled states as $|m_1,m_2\rangle$ with $m_1\in\{1,0,-1\}$ and $m_2 = \pm\tfrac12$. There are $3\times2 = 6$ of them.

**Step 1: the table.**

| $M$ | uncoupled states |
|---|---|
| $+\tfrac32$ | $\lvert 1,+\tfrac12\rangle$ |
| $+\tfrac12$ | $\lvert 1,-\tfrac12\rangle$, $\lvert 0,+\tfrac12\rangle$ |
| $-\tfrac12$ | $\lvert 0,-\tfrac12\rangle$, $\lvert -1,+\tfrac12\rangle$ |
| $-\tfrac32$ | $\lvert -1,-\tfrac12\rangle$ |

Row lengths $1,2,2,1$: one multiplet with $J\ge\tfrac32$ and two with $J\ge\tfrac12$, so $J = \tfrac32$ and $J=\tfrac12$, of dimensions $4+2 = 6$, as required, and this agrees with the triangle rule $|1-\tfrac12|\le J\le 1+\tfrac12$.

**Step 2: the stretched state and one lowering.** $|\tfrac32,\tfrac32\rangle = |1,+\tfrac12\rangle$. Apply $J_-$. On the left, with $J = M = \tfrac32$, the coefficient is $\sqrt{(J+M)(J-M+1)} = \sqrt{3\cdot1} = \sqrt3$. On the right, $j_{1-}|1\rangle$ has coefficient $\sqrt{(1+1)(1-1+1)} = \sqrt2$ and $j_{2-}|{+\tfrac12}\rangle$ has coefficient $\sqrt{(\tfrac12+\tfrac12)(\tfrac12-\tfrac12+1)} = 1$. So
$$
\sqrt3\,\bigl|\tfrac32,\tfrac12\bigr\rangle = \sqrt2\,\bigl|0,+\tfrac12\bigr\rangle + 1\cdot\bigl|1,-\tfrac12\bigr\rangle ,
\qquad
\bigl|\tfrac32,\tfrac12\bigr\rangle = \sqrt{\tfrac23}\,\bigl|0,+\tfrac12\bigr\rangle + \sqrt{\tfrac13}\,\bigl|1,-\tfrac12\bigr\rangle .
$$

**Step 3: orthogonalise for $J=\tfrac12$.** In the $M=\tfrac12$ row the orthogonal direction is
$$
\bigl|\tfrac12,\tfrac12\bigr\rangle = \sqrt{\tfrac23}\,\bigl|1,-\tfrac12\bigr\rangle - \sqrt{\tfrac13}\,\bigl|0,+\tfrac12\bigr\rangle ,
$$
with the sign fixed by Condon-Shortley: the state with the largest $m_1$ here is $|1,-\tfrac12\rangle$, and its coefficient must be positive. Check orthogonality: $\sqrt{\tfrac23}\sqrt{\tfrac13} - \sqrt{\tfrac13}\sqrt{\tfrac23} = 0$, as required, and $\tfrac23+\tfrac13 = 1$.

**Step 4: lower both multiplets.** For $J=\tfrac32$, $M=\tfrac12$: the left coefficient is $\sqrt{(\tfrac32+\tfrac12)(\tfrac32-\tfrac12+1)} = \sqrt{2\cdot2} = 2$, and
$$
2\bigl|\tfrac32,-\tfrac12\bigr\rangle = \sqrt{\tfrac23}\Bigl(\sqrt2\bigl|-1,\tfrac12\bigr\rangle + \bigl|0,-\tfrac12\bigr\rangle\Bigr) + \sqrt{\tfrac13}\Bigl(\sqrt2\bigl|0,-\tfrac12\bigr\rangle\Bigr) ,
$$
using $j_{2-}|{-\tfrac12}\rangle = 0$. Collecting, the coefficient of $|0,-\tfrac12\rangle$ is $\sqrt{\tfrac23}+\sqrt{\tfrac23} = 2\sqrt{\tfrac23}$ and that of $|-1,\tfrac12\rangle$ is $\sqrt{\tfrac43} = 2\sqrt{\tfrac13}$, so after dividing by $2$,
$$
\bigl|\tfrac32,-\tfrac12\bigr\rangle = \sqrt{\tfrac23}\,\bigl|0,-\tfrac12\bigr\rangle + \sqrt{\tfrac13}\,\bigl|-1,\tfrac12\bigr\rangle .
$$
For $J=\tfrac12$, $M=\tfrac12$: the left coefficient is $\sqrt{(\tfrac12+\tfrac12)(\tfrac12-\tfrac12+1)} = 1$, and
$$
\bigl|\tfrac12,-\tfrac12\bigr\rangle = \sqrt{\tfrac23}\cdot\sqrt2\,\bigl|0,-\tfrac12\bigr\rangle - \sqrt{\tfrac13}\Bigl(\sqrt2\,\bigl|-1,\tfrac12\bigr\rangle + \bigl|0,-\tfrac12\bigr\rangle\Bigr)
= \sqrt{\tfrac13}\,\bigl|0,-\tfrac12\bigr\rangle - \sqrt{\tfrac23}\,\bigl|-1,\tfrac12\bigr\rangle ,
$$
because $\tfrac{2}{\sqrt3}-\tfrac{1}{\sqrt3} = \tfrac{1}{\sqrt3}$. Finally $|\tfrac32,-\tfrac32\rangle = |-1,-\tfrac12\rangle$.

**Step 5: the table of coefficients.** Writing $C(1\,\tfrac12\,J|m_1m_2M)$,

| $J$ | $M$ | $C$ for $m_1 = M+\tfrac12$ | $C$ for $m_1 = M-\tfrac12$ |
|---|---|---|---|
| $\tfrac32$ | $+\tfrac12$ | $\sqrt{1/3}$ | $\sqrt{2/3}$ |
| $\tfrac32$ | $-\tfrac12$ | $\sqrt{2/3}$ | $\sqrt{1/3}$ |
| $\tfrac12$ | $+\tfrac12$ | $\sqrt{2/3}$ | $-\sqrt{1/3}$ |
| $\tfrac12$ | $-\tfrac12$ | $\sqrt{1/3}$ | $-\sqrt{2/3}$ |

(The first numeric column is the state with $m_2 = -\tfrac12$, the second the one with $m_2=+\tfrac12$.) Numerically $\sqrt{1/3} = 0.5773503$ and $\sqrt{2/3} = 0.8164966$, and each row satisfies $\tfrac13+\tfrac23 = 1$. The $2\times2$ block at $M=+\tfrac12$ is
$$
\begin{pmatrix} \sqrt{1/3} & \sqrt{2/3}\\ \sqrt{2/3} & -\sqrt{1/3}\end{pmatrix},
$$
an orthogonal matrix of determinant $-1$, as part 3 promises.

**Step 6: check against the closed formula.** Take $J=\tfrac32$, $m_1 = 1$, $m_2 = -\tfrac12$, $M = \tfrac12$. Then $j_1+j_2-J = 0$, $J+j_1-j_2 = 2$, $J+j_2-j_1 = 1$, $2J+1 = 4$, $j_1+j_2+J+1 = 4$, so
$$
F_1 = \left[\frac{0!\,2!\,1!\,\cdot 4}{4!}\right]^{1/2} = \left[\frac{8}{24}\right]^{1/2} = \frac{1}{\sqrt3} .
$$
Next $F_2 = [2!\cdot1!\cdot2!\cdot0!\cdot0!\cdot1!]^{1/2} = \sqrt4 = 2$, using $(J+M)! = 2!$, $(J-M)! = 1!$, $(j_1+m_1)! = 2!$, $(j_1-m_1)! = 0!$, $(j_2+m_2)! = 0!$, $(j_2-m_2)! = 1!$. For $F_3$ the six factorial arguments are $j_1-m_1-s = -s$, $j_2+m_2-s = -s$, $J-j_2+m_1+s = 2+s$, $J-j_1-m_2+s = 1+s$, $j_1+j_2-J-s = -s$ and $s$, so only $s=0$ survives and
$$
F_3 = \frac{1}{0!\,0!\,2!\,1!\,0!\,0!} = \frac12 .
$$
Hence $C = \tfrac{1}{\sqrt3}\cdot2\cdot\tfrac12 = \tfrac{1}{\sqrt3} = \sqrt{1/3}$, matching step 2.

**Step 7: check against a $3j$-symbol.** With $j_1=1$, $j_2=\tfrac12$, $J=\tfrac32$, $m_1=1$, $m_2=-\tfrac12$, $M=\tfrac12$, part 5 gives
$$
C = (-1)^{\,1-\frac12+\frac12}\sqrt{2J+1}\begin{pmatrix}1&\tfrac12&\tfrac32\\ 1&-\tfrac12&-\tfrac12\end{pmatrix} = -2\begin{pmatrix}1&\tfrac12&\tfrac32\\ 1&-\tfrac12&-\tfrac12\end{pmatrix} ,
$$
and the $3j$-symbol equals $-\tfrac{1}{2\sqrt3}$, returning $C = 1/\sqrt3$ once more.

**Step 8: an independent check from Hassani's singlet formula.** Couple $j_1=j_2=1$ instead and look at the scalar $J=0$. Writing the uncoupled states of this second problem in the full notation $|j_1m_1;j_2m_2\rangle$ of the definition block, to keep them apart from the coupled $|J,M\rangle$, the method gives
$$
|0,0\rangle = \tfrac{1}{\sqrt3}\Bigl(|1,1;1,-1\rangle - |1,0;1,0\rangle + |1,-1;1,1\rangle\Bigr) ,
$$
the three coefficients being $C(1\,1\,0|m,-m,0)$ for $m=1,0,-1$. :cite[Hassani's]{work=hassani-2013 loc="p. 974"} closed value $C(ll\,0|m,-m,0) = (-1)^{l-m}/\sqrt{2l+1}$ with $l=1$ predicts $+\tfrac{1}{\sqrt3}, -\tfrac{1}{\sqrt3}, +\tfrac{1}{\sqrt3}$ — the same three numbers, with $1/\sqrt3 = 0.5773503$. The alternating signs are what make the combination rotationally invariant: it is the scalar product $\mathbf{a}\cdot\mathbf{b}$ written in the spherical basis.
:::

:::application{provenance=original}
**Atomic structure.** In the Russell-Saunders scheme the orbital angular momenta of the electrons are coupled to a total $L$, their spins to a total $S$, and then $L$ and $S$ to $J$; the resulting terms $^{2S+1}L_J$ are the labels on every line in an atomic spectrum. The spin-orbit interaction $\xi\,\mathbf{L}\cdot\mathbf{S}$ is diagonal in the coupled basis and not in the uncoupled one, with eigenvalue
$$
\tfrac12\xi\bigl[J(J+1)-L(L+1)-S(S+1)\bigr]
$$
read straight off $\mathbf{L}\cdot\mathbf{S} = \tfrac12(J^2-L^2-S^2)$ — which is why one couples at all. For the $p$ electron of the example, $L=1$ and $S=\tfrac12$ give the doublet $^2P_{3/2}$ and $^2P_{1/2}$, split by $\tfrac32\xi$; this is the splitting of the sodium D lines.

**Two spins, singlets and entanglement.** Coupling two spin-$\tfrac12$ particles gives $J=1$ (a triplet) and $J=0$ (a singlet), and the singlet $(|{\uparrow\downarrow}\rangle-|{\downarrow\uparrow}\rangle)/\sqrt2$ is the maximally entangled Bell state on which the Einstein-Podolsky-Rosen argument and Bell's inequality are built. The same singlet is the chemical covalent bond: two electrons in a bonding orbital must pair their spins to a singlet for the spatial wavefunction to be symmetric.

**Nuclear and particle physics.** Isospin coupling uses the identical mathematics with the proton-neutron doublet in place of spin, and the Clebsch-Gordan coefficients give the relative cross-sections of reactions related by isospin — for example the factor of $3$ between $\pi^+p$ and $\pi^-p$ scattering at the $\Delta$ resonance comes straight from a squared coefficient. Coupling a quark and an antiquark, each a doublet, produces the meson triplet and singlet; :cite[Hassani]{work=hassani-2013 loc="p. 753"} gives this as the motivating example.

**Multipole expansions and spectroscopy.** Combining a spherical harmonic of order $l_1$ with one of order $l_2$ expands their product in harmonics of order $l_1+l_2$ down to $|l_1-l_2|$, which is the Gaunt-coefficient formula behind every multipole matrix element; the special case $J=0$ reproduces the addition theorem for spherical harmonics, as :cite[Hassani]{work=hassani-2013 loc="p. 974"} derives from the singlet coefficients. Selection rules such as $\Delta J = 0,\pm1$ with $J=0\not\to J=0$ are the statement that a coefficient vanishes, and the general machine for such statements is :ref[spherical tensors and the Wigner-Eckart theorem]{to=group.wigner-eckart}.

**Condensed matter and computation.** In exact diagonalisation of spin chains the coupled basis block-diagonalises the Hamiltonian by total $J$, reducing a matrix of size $2^N$ to blocks of much smaller size; tensor-network algorithms exploit the same decomposition to carry $SU(2)$ symmetry explicitly, storing one reduced number per multiplet instead of all $2J+1$ components. The coefficients are generated once, in exact arithmetic, by the recipe above.
:::
