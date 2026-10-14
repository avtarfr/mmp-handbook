---
id: group.product-representations
title: Product representations and selection rules
kind: method
level: core
summary: Builds the tensor product of two representations of a finite group, shows that its character is the pointwise product of the two characters, decomposes it into irreducibles by the Clebsch-Gordan series, and turns the resulting multiplicity of the trivial representation into a rule that forbids matrix elements.
prereqs: [group.orthogonality-characters, group.character-tables, group.representations, linalg.linear-maps-matrices]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§24.8 Tensor Product of Representations, pp. 750-752: the definition $(T\\otimes S)(g)(|v\\rangle,|w\\rangle) = (T(g)|v\\rangle, S(g)|w\\rangle)$, the verification that it is a homomorphism, the names tensor, direct and Kronecker product, the matrix elements $(T\\otimes S)_{ia,jb}(g) = T_{ij}(g)S_{ab}(g)$ with double indices and size $mn \\times mn$, and Eq. (24.42), $\\chi^{T\\otimes S}(g) = \\chi^T(g)\\chi^S(g)$; pp. 752, the symmetry $(T\\otimes T)_{ia,jb} = (T\\otimes T)_{ai,bj}$, the splitting $V\\otimes V = (V\\otimes V)_s \\oplus (V\\otimes V)_a$ and Box 24.8.1, that the Kronecker product of a representation with itself always reduces into the symmetrized and antisymmetrized products; §24.8.1 Clebsch-Gordan Decomposition, pp. 753-754: $\\chi^{(\\alpha\\times\\beta)}_i = \\chi^{(\\alpha)}_i\\chi^{(\\beta)}_i = \\sum_\\sigma m^{\\alpha\\beta}_\\sigma \\chi^{(\\sigma)}_i$, the formula $m^{\\alpha\\beta}_\\sigma = |G|^{-1}\\sum_i c_i \\bar\\chi^{(\\sigma)}_i\\chi^{(\\alpha)}_i\\chi^{(\\beta)}_i$ (24.44), the Clebsch-Gordan series (24.45), the term 'simply reducible' for $m^{\\alpha\\beta}_\\sigma \\in \\{0,1\\}$, the selection-rule reading of the decomposition, Example 24.8.2 decomposing a product character of $S_4$, and p. 755 with Box 24.8.3, $m^{\\alpha\\beta}_1 = \\delta_{\\alpha\\beta}$ for the product of a representation with the adjoint; Eq. (24.40), p. 749, the projector $P^{(\\alpha)} = (n_\\alpha/|G|)\\sum_g \\chi^{(\\alpha)*}(g)T_g$ onto the $\\alpha$th irreducible subspace"
    pages: "749-755"
    role: the definition of the tensor product representation and its matrix elements, the character multiplication rule, the Clebsch-Gordan series and its multiplicity formula, the invariant-state criterion, and the projection operator used to prove the selection rule
  - work: rhb-2006
    loc: "§29.10 Product representations, pp. 1103-1105: the setting of overlap integrals $J=\\int\\Psi\\phi\\,d\\tau$ and matrix elements $J=\\int\\Psi\\xi\\phi\\,d\\tau$ over all space for a system invariant under $G$; the criterion that the integrand must transform as the identity representation $A_1$, that $J=0$ if the representation $D$ carried by the integrand does not contain $A_1$, and the explicit warning that the converse fails; the Theorem on p. 1104 that for each group element the character in a product representation is the product of the corresponding characters, with its proof via product basis functions $w_k = u_iv_j$ and Eq. (29.23); §29.11.2 Matrix elements in quantum mechanics, pp. 1108-1109, the dipole example $J=\\int\\Psi_{d_1}x\\Psi_{d_2}d\\tau$ worked in $C_{3v}$ (allowed) and in $C_{4v}$ (forbidden), with tables 29.6 and 29.7 multiplying three character sets class by class; the character table 29.5 of $4mm$ with its column of functions"
    pages: "1103-1105, 1108-1109"
    role: the selection-rule statement and the warning about its converse; the row-by-row recipe of multiplying the characters of the factors class by class and then projecting on the identity irrep
  - work: arfken-2013
    loc: "§2.2, pp. 108-109: the direct (Kronecker) product of an $m\\times n$ matrix $A$ and an $m'\\times n'$ matrix $B$, $C_{\\alpha\\beta} = A_{ij}B_{kl}$ with $\\alpha = m'(i-1)+k$, $\\beta = n'(j-1)+l$, Eq. (2.55); the remark that the first factor supplies the major index so the construction is noncommutative but associative; and Eq. (2.57), $(A\\otimes B)(A'\\otimes B') = (AA')\\otimes(BB')$; §17.5 Direct Products, pp. 837-839: the multiparticle basis of all products of one member of each single-particle basis, the notation $K = K_1\\otimes K_2$, the theorem that for finite groups the characters of a direct product are the products of the individual characters class by class, Example 17.5.1 on even-odd ($g$/$u$) symmetry under $C_i$, and Example 17.5.2, $e\\otimes e = A_1\\oplus A_2\\oplus E$ in $D_3$ with explicit basis functions (17.20)-(17.22)"
    pages: "108-109, 837-839"
    role: the index convention and algebra of the Kronecker product of matrices; the physical reading of a product representation as a multiparticle basis, and the model of decomposing $e\\otimes e$ with explicit basis functions
  - work: dummit-foote-2004
    loc: "Proposition 17 and its proof, §18.3, p. 874: if $\\psi_1$ and $\\psi_2$ are characters then so is $\\psi_1\\psi_2$, proved by making $V_1\\otimes_{\\mathbb{C}}V_2$ a $\\mathbb{C}G$-module via $g(v_1\\otimes v_2) = (gv_1)\\otimes(gv_2)$; Exercise 13, §18.3, p. 878: for a degree 1 representation $\\chi$ and a representation $\\varphi$, $\\chi\\varphi$ is a representation, is irreducible exactly when $\\varphi$ is, and so the product of an irreducible character with a degree 1 character is irreducible; Exercise 27, §18.3, p. 879: for $G = H\\times K$ the products $\\bar\\chi\\bar\\psi$ of characters pulled back from the two factors are irreducible characters of $G$ and every irreducible character of $G$ arises this way"
    pages: "874, 878-879"
    role: the module-theoretic construction behind the product of characters; the degree-one special case; and the contrast with the outer product over a direct product of groups
---

:::definition[Kronecker product, and the product representation]{provenance=adapted src="arfken-2013:§2.2, Eq. (2.55)-(2.57), pp. 108-109; hassani-2013:§24.8, p. 751"}
**Of matrices.** For $A$ of size $m \times n$ and $B$ of size $m' \times n'$, the **Kronecker product** (also called the direct or direct tensor product) is the $mm' \times nn'$ matrix $A \otimes B$ with entries
$$
(A \otimes B)_{\alpha\beta} \;=\; A_{ij}\,B_{kl} , \qquad \alpha = m'(i-1) + k , \quad \beta = n'(j-1) + l .
$$
The index of the first factor is the major one and the index of the second the minor one, so $A \otimes B$ and $B \otimes A$ differ by a permutation of rows and of columns and the operation is not commutative; it is associative, and it satisfies the two rules used throughout below,
$$
(A \otimes B)(A' \otimes B') \;=\; (AA') \otimes (BB') , \qquad
C \otimes (A + B) \;=\; C\otimes A + C\otimes B ,
$$
whenever the products on the right are defined. It is cleaner to drop Arfken's flattening $\alpha = m'(i-1)+k$ and simply label rows and columns by *pairs*, writing $(A\otimes B)_{(i,k),(j,l)} = A_{ij}B_{kl}$; the flattening is then only a choice of how to print the matrix. This unit uses the pair labelling.

**Of representations.** Let $T : G \to GL(V)$ and $S : G \to GL(W)$ be representations of the *same* finite group $G$ on complex spaces of dimensions $m$ and $n$. On the tensor product $V \otimes W$ define
$$
(T \otimes S)(g)\,(v \otimes w) \;=\; \bigl(T(g)v\bigr) \otimes \bigl(S(g)w\bigr) ,
$$
extended linearly. In bases $\{v_i\}$ of $V$ and $\{w_a\}$ of $W$, the products $v_i \otimes w_a$ are a basis of $V \otimes W$ and the matrix of $(T\otimes S)(g)$ in it is the Kronecker product of the matrices of $T(g)$ and $S(g)$:
$$
\bigl[(T\otimes S)(g)\bigr]_{(i,a),(j,b)} \;=\; T_{ij}(g)\,S_{ab}(g) .
$$
This is the **tensor product**, **direct product** or **Kronecker product representation**, of degree $mn$. Physically $V$ and $W$ are the state spaces of two subsystems, $V \otimes W$ is the state space of the pair, and the group acts on both subsystems at once; Arfken's multiparticle basis consists of all products of one basis member from each factor.

**Two things that are not this, and one that is.** (i) The **direct sum** $T \oplus S$ acts on $V \oplus W$ with character $\chi^{T} + \chi^{S}$; the tensor product acts on $V \otimes W$ and has degree $mn$, not $m+n$. (ii) The **outer** product, in which $T$ is a representation of $H$, $S$ one of $K$, and $T \boxtimes S$ a representation of the *direct product group* $H \times K$ by $(h,k) \mapsto T(h)\otimes S(k)$; its character is $\chi^{T}(h)\chi^{S}(k)$, a function of two arguments, and Dummit and Foote's Exercise 27 records that these exhaust the irreducible characters of $H \times K$. The product of this unit is the **inner** one: both factors are representations of one group $G$, both are evaluated at the same $g$, and the result is usually reducible even when both factors are irreducible. (iii) The product $\chi\varphi$ of a representation $\varphi$ with a degree-one character $\chi$, which *is* an instance of the inner product above, with $S = \chi$ acting on a one-dimensional space; it is worth naming separately because it behaves unusually well (see the remark).
:::

:::statement[Characters multiply; the Clebsch-Gordan series; the selection rule]{provenance=adapted src="hassani-2013:§24.8, Eq. (24.42), p. 751, and §24.8.1, Eqs. (24.44)-(24.45), pp. 753-754, with Box 24.8.3, p. 755; rhb-2006:§29.10, Theorem and Eq. (29.23), pp. 1103-1105; arfken-2013:§17.5, p. 838; dummit-foote-2004:Proposition 17, §18.3, p. 874"}
Let $G$ be a finite group with classes $K_1, \dots, K_r$ of sizes $c_i$, irreducible characters $\chi^{(1)}, \dots, \chi^{(r)}$ with $\chi^{(1)} \equiv 1$ the trivial one, and the inner product $(\theta,\psi) = |G|^{-1}\sum_i c_i\,\theta_i\overline{\psi_i}$ of :ref[]{to=group.character-tables}. Let $T$ and $S$ be representations of $G$ with characters $\chi^{T}$ and $\chi^{S}$.

- **(P1)** $T \otimes S$ is a representation of $G$ of degree $(\deg T)(\deg S)$.
- **(P2) Characters multiply pointwise.** For every $g \in G$,
  $$
  \chi^{T \otimes S}(g) \;=\; \chi^{T}(g)\,\chi^{S}(g) .
  $$
  In particular the product of two characters is again a character, which is Dummit and Foote's Proposition 17.
- **(P3) Clebsch-Gordan series.** For irreducible $T^{(\alpha)}, T^{(\beta)}$,
  $$
  T^{(\alpha)} \otimes T^{(\beta)} \;\simeq\; \bigoplus_{\sigma=1}^{r} m^{\alpha\beta}_{\sigma}\, T^{(\sigma)} ,
  \qquad
  m^{\alpha\beta}_{\sigma} \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\overline{\chi^{(\sigma)}_i}\;\chi^{(\alpha)}_i\,\chi^{(\beta)}_i ,
  $$
  with $m^{\alpha\beta}_\sigma$ non-negative integers satisfying $\sum_\sigma m^{\alpha\beta}_\sigma n_\sigma = n_\alpha n_\beta$. Hassani calls $G$ **simply reducible** when every $m^{\alpha\beta}_\sigma$ is $0$ or $1$.
- **(P4) When the product contains an invariant.** The trivial representation occurs in $T^{(\alpha)}\otimes T^{(\beta)}$ with multiplicity
  $$
  m^{\alpha\beta}_{1} \;=\; \begin{cases} 1 & \text{if } \chi^{(\beta)} = \overline{\chi^{(\alpha)}} ,\\[2pt] 0 & \text{otherwise.}\end{cases}
  $$
  That is, an irreducible representation must be combined with its conjugate (its adjoint, in Hassani's wording) to produce an invariant, and then there is exactly one.
- **(P5) Selection rule.** Suppose a physical system occupies a region $\Omega$ carried to itself by every element of $G$, with a measure $G$ preserves, and let $f_1, \dots, f_k$ be functions on $\Omega$ such that $f_1 \cdots f_k$ lies in a finite-dimensional space of functions carrying a representation $D$ of $G$ -- for instance each $f_j$ spans part of a basis of a representation $D_j$, in which case $D = D_1 \otimes \cdots \otimes D_k$ and, by (P2), $\chi^{D}(g) = \prod_j \chi^{D_j}(g)$. If the trivial representation does not occur in $D$, then
  $$
  J \;=\; \int_{\Omega} f_1 f_2 \cdots f_k \,d\tau \;=\; 0 .
  $$
  The converse is false: $J$ may vanish although the trivial representation is present, so the rule forbids but never guarantees.
:::

:::idea{provenance=original}
Everything follows from one line of index bookkeeping. The matrix of $(T\otimes S)(g)$ has rows and columns labelled by pairs, and its diagonal entries are the products $T_{ii}(g)S_{aa}(g)$. Summing over the pair $(i,a)$ is summing over $i$ and over $a$ separately, and a double sum of a product of a function of $i$ and a function of $a$ factorises. So the trace factorises, and that is (P2).

Once characters multiply, the rest is the machinery already in place. Multiplicities of a representation are inner products of its character with the irreducible ones (:ref[]{to=group.character-tables}), so the Clebsch-Gordan multiplicities are inner products of a *triple* product of characters — the formula in (P3), which is why a product decomposition costs one pass along a row of the character table rather than any matrix algebra. For (P4), pairing with the trivial character turns the triple product into an ordinary inner product of $\chi^{(\beta)}$ against $\overline{\chi^{(\alpha)}}$, and $\overline{\chi^{(\alpha)}}$ is itself an irreducible character, so orthonormality of rows answers the question at once.

The selection rule (P5) is the same fact wearing physical clothes. The integral $J$ does not change when the integrand is transported by a symmetry, because the region and the measure do not; so $J$ equals the average of the transported integrands over the whole group. That average is precisely the projection of the integrand onto its $G$-invariant part. If the product representation contains no invariant vector, the projection is zero and so is $J$ — which also makes clear why the converse must fail: an invariant part can exist and still integrate to zero for reasons that have nothing to do with symmetry.
:::

:::proof{provenance=original}
Write $D = T \otimes S$, with $T$ of degree $m$ and $S$ of degree $n$, in bases $\{v_i\}$ and $\{w_a\}$.

**(P1).** The products $v_i \otimes w_a$, $1 \le i \le m$, $1 \le a \le n$, are a basis of $V\otimes W$, so $\deg D = mn$. For $g, h \in G$ and a basis vector,
$$
D(g)D(h)(v\otimes w) \;=\; D(g)\bigl(T(h)v \otimes S(h)w\bigr) \;=\; T(g)T(h)v \otimes S(g)S(h)w \;=\; T(gh)v \otimes S(gh)w ,
$$
using that $T$ and $S$ are homomorphisms, and the right-hand side is $D(gh)(v\otimes w)$. Both sides are linear, so $D(g)D(h) = D(gh)$ on all of $V\otimes W$. Also $D(1) = I \otimes I = I$, and $D(g)D(g^{-1}) = D(1) = I$ shows each $D(g)$ is invertible. In matrices this is Arfken's rule $(A\otimes B)(A'\otimes B') = (AA')\otimes(BB')$ applied to $A = T(g)$, $A' = T(h)$.

**(P2).** The diagonal entries of the matrix of $D(g)$ are those with equal row and column labels, $(i,a) = (j,b)$:
$$
\chi^{D}(g) \;=\; \sum_{i=1}^{m}\sum_{a=1}^{n} \bigl[D(g)\bigr]_{(i,a),(i,a)}
\;=\; \sum_{i=1}^{m}\sum_{a=1}^{n} T_{ii}(g)\,S_{aa}(g)
\;=\; \Bigl(\sum_{i} T_{ii}(g)\Bigr)\Bigl(\sum_{a} S_{aa}(g)\Bigr) ,
$$
the last step because the summand is a product of one factor depending only on $i$ and one depending only on $a$. The two sums are $\chi^{T}(g)$ and $\chi^{S}(g)$. The trace is basis-independent, so the identity does not depend on the bases chosen. Since a product of characters is the character of the representation just constructed, it is a character.

**(P3).** $T^{(\alpha)}\otimes T^{(\beta)}$ is a representation of a finite group over $\mathbb{C}$, hence completely reducible (:ref[]{to=group.representations}), so $T^{(\alpha)}\otimes T^{(\beta)} \simeq \bigoplus_\sigma m_\sigma T^{(\sigma)}$ for some non-negative integers $m_\sigma$. By the multiplicity formula of :ref[]{to=group.character-tables},
$$
m_\sigma \;=\; \bigl(\chi^{(\alpha)}\chi^{(\beta)},\, \chi^{(\sigma)}\bigr) \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\chi^{(\alpha)}_i\chi^{(\beta)}_i\,\overline{\chi^{(\sigma)}_i} ,
$$
where (P2) was used to replace the character of the product by the product of the characters. Evaluating both sides of the decomposition at $g = 1$ gives $n_\alpha n_\beta = \sum_\sigma m_\sigma n_\sigma$.

**(P4).** Put $\sigma = 1$, so $\chi^{(1)}_i = 1$ for every $i$ and the conjugate factor disappears:
$$
m^{\alpha\beta}_1 \;=\; \frac{1}{|G|}\sum_{i} c_i\,\chi^{(\alpha)}_i\chi^{(\beta)}_i \;=\; \frac{1}{|G|}\sum_i c_i\,\chi^{(\beta)}_i\,\overline{\overline{\chi^{(\alpha)}_i}} \;=\; \bigl(\chi^{(\beta)},\, \overline{\chi^{(\alpha)}}\bigr) .
$$
Now $\overline{\chi^{(\alpha)}}$ is the character of the conjugate representation $\overline{T^{(\alpha)}}$, obtained by conjugating every matrix entry; this is a representation because conjugation is a ring homomorphism of $\mathbb{C}$, and it is irreducible because $(\overline{\chi^{(\alpha)}}, \overline{\chi^{(\alpha)}}) = \overline{(\chi^{(\alpha)}, \chi^{(\alpha)})} = 1$. So both arguments of the inner product are irreducible characters, and orthonormality of the rows of the character table gives $1$ when they coincide and $0$ otherwise. $\;$ For a *unitary* representation, $\overline{\chi^{(\alpha)}(g)} = \chi^{(\alpha)}(g^{-1})$, so the condition $\chi^{(\beta)} = \overline{\chi^{(\alpha)}}$ can be tested on the character table by comparing row $\beta$ with row $\alpha$ read with each class replaced by the class of inverses.

**(P5).** Let $\mathcal{F}$ be the finite-dimensional space of functions on $\Omega$ carrying $D$, with the action $(gf)(x) = f(g^{-1}x)$, and define
$$
P \;=\; \frac{1}{|G|}\sum_{g \in G} D(g) ,
$$
which is Hassani's projector onto the $\alpha$th irreducible subspace in the case $\alpha = 1$, where $n_1 = 1$ and $\chi^{(1)} \equiv 1$.

*Step 1 ($P$ projects onto the invariants).* For $h \in G$, $D(h)P = |G|^{-1}\sum_g D(hg) = P$, since $g \mapsto hg$ permutes $G$. Hence $PF$ is $G$-invariant for every $F \in \mathcal{F}$, and $PF = F$ when $F$ is already invariant; so $P$ is the projection onto the subspace $\mathcal{F}^{G}$ of invariant functions.

*Step 2 ($\mathcal{F}^{G} = 0$ by hypothesis).* An invariant function spans a one-dimensional subrepresentation on which every $D(g)$ acts as the identity, that is, a copy of the trivial representation. By hypothesis $D$ contains none, so $\mathcal{F}^{G} = \{0\}$ and $P = 0$ on $\mathcal{F}$.

*Step 3 (the integral is unchanged by the group).* Let $F = f_1\cdots f_k \in \mathcal{F}$. For each $g$, substituting $x \mapsto g^{-1}x$ in the integral and using that $g^{-1}\Omega = \Omega$ and that the measure is preserved,
$$
\int_{\Omega} (gF)(x)\,d\tau(x) \;=\; \int_{\Omega} F(g^{-1}x)\,d\tau(x) \;=\; \int_{\Omega} F(y)\,d\tau(y) \;=\; J .
$$

*Step 4 (average and conclude).* Averaging Step 3 over the $|G|$ elements and using linearity of the integral,
$$
J \;=\; \frac{1}{|G|}\sum_{g\in G} \int_\Omega (gF)\,d\tau \;=\; \int_\Omega (PF)\,d\tau \;=\; \int_\Omega 0 \,d\tau \;=\; 0 . \qquad \square
$$
:::

:::remark[Where the hypotheses are used, and the standing traps]{provenance=original}
- **Same group, same element.** (P2) multiplies the two characters *at the same $g$*. This is what makes the inner product in (P3) a sum of triple products and what makes the answer usually reducible. For the outer product over $H \times K$ the two characters are evaluated at different arguments, nothing is summed together, and the product of two irreducibles is always irreducible (Dummit and Foote, Exercise 27, p. 879). Confusing the two is the commonest error in this subject; the giveaway is the degree, $n_\alpha n_\beta$ in both cases but over a group of order $|G|$ in one and $|H||K|$ in the other.
- **Finiteness and $\mathbb{C}$** enter in (P3), through complete reducibility, and in (P5), through the average $|G|^{-1}\sum_g$. Over a field whose characteristic divides $|G|$ neither is available: the sum defining $P$ cannot be normalised, and the product need not decompose. Compactness replaces finiteness for continuous groups, with $|G|^{-1}\sum_g$ becoming the Haar integral; that is how the same statements carry over to $SU(2)$ in :ref[]{to=group.clebsch-gordan}.
- **The converse of (P5) genuinely fails**, as Riley, Hobson and Bence are careful to say. Symmetry can only certify that a quantity vanishes; when it does not forbid, the integral must be computed. A one-line example: $G$ trivial, $\Omega = [-1,1]$, $f = x$. Every representation is trivial, so the rule forbids nothing, and yet $J = 0$. The vanishing there comes from a symmetry of the *integrand* that was not in the group used.
- **The invariant region matters as much as the group.** Step 3 uses $g^{-1}\Omega = \Omega$ and invariance of $d\tau$. For integrals over all of $\mathbb{R}^{3}$ with Lebesgue measure and $G$ a point group these hold automatically, which is why the rule is quoted without them in the physics literature; for an integral over a half-space, or with a weight that is not invariant, the conclusion is simply false.
- **Multiplying by a one-dimensional character preserves irreducibility.** If $\deg T^{(\beta)} = 1$ then $|\chi^{(\beta)}(g)| = 1$ for every $g$, since $\chi^{(\beta)}(g)$ is a root of unity, so
  $$
  \bigl(\chi^{(\alpha)}\chi^{(\beta)},\, \chi^{(\alpha)}\chi^{(\beta)}\bigr) \;=\; \frac{1}{|G|}\sum_g \bigl|\chi^{(\alpha)}(g)\bigr|^{2}\bigl|\chi^{(\beta)}(g)\bigr|^{2} \;=\; \bigl(\chi^{(\alpha)},\chi^{(\alpha)}\bigr) \;=\; 1 ,
  $$
  so $\chi^{(\alpha)}\chi^{(\beta)}$ is irreducible. This is Dummit and Foote's Exercise 13, p. 878, and it is how half the rows of many character tables are produced: in the table of $D_6$ in :ref[]{to=group.character-tables}, $A_2 \cdot B_1 = B_2$, while $E_1 \otimes A_2 = E_1$ and $E_1 \otimes B_1 = E_2$.
- **Degree bookkeeping is the cheapest check.** $\sum_\sigma m^{\alpha\beta}_\sigma n_\sigma$ must equal $n_\alpha n_\beta$ exactly. A decomposition that fails it has a wrong character somewhere.
:::

:::note[Squaring a representation: the symmetric and antisymmetric parts]{provenance=original}
When both factors are the same representation $T$ on $V$, the product space splits further, because swapping the two tensor slots commutes with the group action: $\tau(v\otimes v') = v'\otimes v$ satisfies $\tau\,(T\otimes T)(g) = (T\otimes T)(g)\,\tau$. Since $\tau^{2} = I$, its eigenspaces for $\pm 1$ are invariant and
$$
V \otimes V \;=\; \operatorname{Sym}^{2}V \;\oplus\; \Lambda^{2}V ,
$$
spanned respectively by the $v_i\otimes v_j + v_j \otimes v_i$ and the $v_i \otimes v_j - v_j\otimes v_i$ — Hassani's Box 24.8.1, that a Kronecker square always reduces into a symmetrised and an antisymmetrised part. Their dimensions are $\tfrac12 n(n+1)$ and $\tfrac12 n(n-1)$ for $n = \deg T$, and their characters are
$$
\chi_{\mathrm{sym}}(g) \;=\; \tfrac12\bigl[\chi(g)^{2} + \chi(g^{2})\bigr] ,
\qquad
\chi_{\mathrm{anti}}(g) \;=\; \tfrac12\bigl[\chi(g)^{2} - \chi(g^{2})\bigr] ,
$$
with $\chi = \chi^{T}$. *Proof.* Fix $g$. Because $g$ has finite order, $T(g)$ is diagonalisable (see the proof of (C5) in :ref[]{to=group.character-tables}); choose a basis $\{v_i\}$ of $V$ with $T(g)v_i = \lambda_i v_i$. Then the vectors $v_iv_j := v_i\otimes v_j + v_j\otimes v_i$ with $i \le j$ are a basis of $\operatorname{Sym}^{2}V$ and are eigenvectors with eigenvalue $\lambda_i\lambda_j$, so
$$
\chi_{\mathrm{sym}}(g) \;=\; \sum_{i \le j}\lambda_i\lambda_j \;=\; \tfrac12\Bigl[\Bigl(\sum_i \lambda_i\Bigr)^{2} + \sum_i \lambda_i^{2}\Bigr] \;=\; \tfrac12\bigl[\chi(g)^{2} + \chi(g^{2})\bigr] ,
$$
since $\sum_i\lambda_i^{2} = \operatorname{tr} T(g)^{2} = \chi(g^{2})$. The same computation over $i < j$ gives the antisymmetric case, and the two add to $\chi(g)^{2} = \chi^{T\otimes T}(g)$ as they must. $\square$

The split is not optional bookkeeping: for two identical particles it is the whole content of Bose and Fermi statistics, and the two halves of the product decompose into different irreducibles, as the example shows.
:::

:::method[Deciding whether a matrix element can be non-zero]{provenance=adapted src="rhb-2006:§29.10 and §29.11.2, pp. 1103-1105, 1108-1109; hassani-2013:§24.8.1, Eq. (24.44), pp. 753-754"}
Given a symmetry group $G$, a character table for it, and an integral $J = \int f_1 f_2 \cdots f_k \, d\tau$ over an invariant region:

1. **Identify the symmetry species of each factor.** Find, for each $f_j$, the irrep (or reducible representation) $D_j$ it belongs to. Published tables list the common ones — $z$, $(x,y)$, $xy$, $x^{2}-y^{2}$, $R_z$ — in a right-hand column, which is the fastest route for Cartesian and $d$-orbital factors. Factors invariant under the whole group, such as a purely radial $f(r)$ for a point group, carry the trivial irrep and may be dropped.
2. **Multiply the characters class by class.** Write one row per factor and one column per class, then form the product row $\chi^{D}_i = \prod_{j}\chi^{D_j}_i$. This is (P2) extended to $k$ factors by induction. Nothing else about the factors is needed.
3. **Project onto the trivial irrep.** Compute
   $$
   m_1 \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\chi^{D}_i
   $$
   (the conjugate character of the trivial irrep is $1$, so no conjugation appears). Often inspection suffices: if the product row is itself a row of the table other than the trivial one, then $m_1 = 0$ by orthogonality.
4. **Conclude.** If $m_1 = 0$, the integral vanishes identically, for every radial dependence and every choice of the unspecified parts of the factors — this is the content of a selection rule. If $m_1 \ge 1$, symmetry permits it and nothing more can be said without computing.
5. **For a two-factor overlap,** steps 2-4 reduce to (P4): $\int \overline{\Psi}\,\phi\,d\tau$ can be non-zero only if $\Psi$ and $\phi$ belong to the same irrep; different irreps never overlap. This is why wavefunctions of different symmetry species do not mix and why a Hamiltonian commuting with $G$ is block-diagonal in a symmetry-adapted basis.
6. **For a full Clebsch-Gordan decomposition** rather than one multiplicity, repeat step 3 with each $\overline{\chi^{(\sigma)}}$ in place of $1$, which is (P3). Check with $\sum_\sigma m_\sigma n_\sigma = n_\alpha n_\beta$.
7. **If the two factors are the same irrep and the physical situation distinguishes symmetric from antisymmetric combinations** (identical particles, or a symmetric operator such as a polarizability), split first with the note above: compute $\chi(g^{2})$ by squaring each class representative and reading off which class the square lands in, then decompose $\chi_{\mathrm{sym}}$ and $\chi_{\mathrm{anti}}$ separately.
:::

:::example[Products in the hexagon group, and a dipole selection rule]{provenance=original}
Work in the group $D_6$ of order $12$ whose character table was constructed in :ref[]{to=group.character-tables}:
$$
\begin{array}{l|rrrrrr}
D_6 & K_1 = \{1\} & K_2 = \{r^{3}\} & K_3 = 2\{r\} & K_4 = 2\{r^{2}\} & K_5 = 3\{s\} & K_6 = 3\{sr\} \\ \hline
A_1 & 1 & 1 & 1 & 1 & 1 & 1\\
A_2 & 1 & 1 & 1 & 1 & -1 & -1\\
B_1 & 1 & -1 & -1 & 1 & 1 & -1\\
B_2 & 1 & -1 & -1 & 1 & -1 & 1\\
E_1 & 2 & -2 & 1 & -1 & 0 & 0\\
E_2 & 2 & 2 & -1 & -1 & 0 & 0
\end{array}
\qquad (c_1,\dots,c_6) = (1,1,2,2,3,3) .
$$
Here $E_1$ is the defining action on the plane, with basis $(x, y)$.

**(a) $E_1 \otimes E_1$.** Squaring the $E_1$ row entry by entry gives
$$
\chi^{E_1\otimes E_1} \;=\; (4,\,4,\,1,\,1,\,0,\,0) , \qquad \text{degree } 4 = 2\times 2 .
$$
Applying step 3 of the method once for each row (only $K_1,\dots,K_4$ contribute, since the last two entries vanish):
$$
\begin{aligned}
m_{A_1} &= \tfrac{1}{12}\bigl[1\cdot 4 + 1\cdot 4 + 2\cdot 1\cdot 1 + 2\cdot 1\cdot 1\bigr] = \tfrac{12}{12} = 1 , \\
m_{A_2} &= \tfrac{1}{12}\bigl[4 + 4 + 2 + 2\bigr] = 1 , \\
m_{B_1} &= \tfrac{1}{12}\bigl[1\cdot 4 + (-1)\cdot 4 + 2\cdot(-1)\cdot 1 + 2\cdot 1 \cdot 1\bigr] = \tfrac{4-4-2+2}{12} = 0 , \qquad m_{B_2} = 0 \ \text{likewise},\\
m_{E_1} &= \tfrac{1}{12}\bigl[2\cdot 4 + (-2)\cdot 4 + 2\cdot 1\cdot 1 + 2\cdot(-1)\cdot 1\bigr] = \tfrac{8-8+2-2}{12} = 0 ,\\
m_{E_2} &= \tfrac{1}{12}\bigl[2\cdot 4 + 2 \cdot 4 + 2\cdot(-1)\cdot 1 + 2\cdot(-1)\cdot 1\bigr] = \tfrac{8+8-2-2}{12} = 1 .
\end{aligned}
$$
Hence
$$
E_1 \otimes E_1 \;=\; A_1 \oplus A_2 \oplus E_2 , \qquad 1 + 1 + 2 = 4 \ \checkmark .
$$

**(b) The symmetric and antisymmetric halves.** Square each class representative: $1^{2} = 1$, $(r^{3})^{2} = 1$, $r^{2} \in K_4$, $(r^{2})^{2} = r^{4} \in K_4$, and every reflection squares to $1$. Reading $\chi^{E_1}$ at those classes,
$$
\chi^{E_1}(g^{2}) \;=\; (2,\,2,\,-1,\,-1,\,2,\,2) ,
$$
so by the note
$$
\chi_{\mathrm{sym}} = \tfrac12\bigl[(4,4,1,1,0,0) + (2,2,-1,-1,2,2)\bigr] = (3,3,0,0,1,1) ,
\qquad
\chi_{\mathrm{anti}} = (1,1,1,1,-1,-1) .
$$
The dimensions are $3 = \tfrac12\cdot 2\cdot 3$ and $1 = \tfrac12\cdot 2\cdot 1 \ \checkmark$. The antisymmetric row *is* the $A_2$ row of the table, so $\Lambda^{2}E_1 = A_2$; and
$$
m_{A_1}(\chi_{\mathrm{sym}}) = \tfrac1{12}\bigl[3 + 3 + 0 + 0 + 3\cdot 1 + 3\cdot 1\bigr] = 1 ,
\qquad
m_{E_2}(\chi_{\mathrm{sym}}) = \tfrac1{12}\bigl[2\cdot 3 + 2\cdot 3\bigr] = 1 ,
$$
all other multiplicities being zero, so $\operatorname{Sym}^{2}E_1 = A_1 \oplus E_2$. Both halves can be seen directly in coordinates: with $(x,y)$ the basis of $E_1$, the symmetric square is spanned by $x^{2}, xy, y^{2}$, in which $x^{2}+y^{2}$ is invariant ($A_1$) and the pair $(x^{2}-y^{2},\, 2xy)$ rotates by $2\theta$ when the plane rotates by $\theta$ — character $2\cos(2\pi/3) = -1$ at $K_3$, which is the $E_2$ row; the antisymmetric square is spanned by $x\wedge y$, which rotations fix and reflections negate, i.e. $A_2$. The two readings agree.

**(c) $E_1 \otimes E_2$.** Multiplying the two rows entry by entry, $\chi^{E_1\otimes E_2} = (4, -4, -1, 1, 0, 0)$, and the same four-line computation gives
$$
m_{A_1} = \tfrac{4-4-2+2}{12} = 0 , \quad m_{A_2} = 0 , \quad m_{B_1} = \tfrac{4+4+2+2}{12} = 1 , \quad m_{B_2} = 1 , \quad m_{E_1} = \tfrac{8+8-2-2}{12} = 1 , \quad m_{E_2} = 0 ,
$$
so $E_1 \otimes E_2 = B_1 \oplus B_2 \oplus E_1$, of degree $1+1+2 = 4\ \checkmark$. That $m_{A_1} = 0$ is (P4) in action: $E_1$ and $E_2$ have real characters, so each is its own conjugate, and an invariant appears only in $E_1\otimes E_1$ or $E_2\otimes E_2$, never in the mixed product.

**(d) The selection rule.** Consider a planar system with symmetry $D_6$ and an in-plane electric dipole operator, whose components $(x, y)$ span $E_1$. Ask which transitions are allowed out of a state $\phi$ of symmetry $E_2$, that is, for which final state $\Psi$ of symmetry $\Gamma_f$ the matrix element
$$
J \;=\; \int \overline{\Psi}\,x\,\phi \; d\tau
$$
is not forced to vanish. By the method, build the product row $\chi^{\Gamma_f}_i\,\chi^{E_1}_i\,\chi^{E_2}_i$ and project on $A_1$. (Step 5 of the method asks for the conjugate of $\chi^{\Gamma_f}$; every character of $D_6$ is real, as every class is closed under inversion, so the conjugation changes nothing here.)

*Final state of symmetry $E_2$.* The product row is $(2,2,-1,-1,0,0)\cdot(2,-2,1,-1,0,0)\cdot(2,2,-1,-1,0,0) = (8,\,-8,\,1,\,-1,\,0,\,0)$ and
$$
m_{A_1} \;=\; \tfrac{1}{12}\bigl[1\cdot 8 + 1\cdot(-8) + 2\cdot 1 + 2\cdot(-1)\bigr] \;=\; \frac{8-8+2-2}{12} \;=\; \boxed{0} ,
$$
so the transition is **forbidden**: the integral vanishes for every radial profile of the two states.

*Final state of symmetry $E_1$.* The product row is $(2,-2,1,-1,0,0)\cdot(2,-2,1,-1,0,0)\cdot(2,2,-1,-1,0,0) = (8,\,8,\,-1,\,-1,\,0,\,0)$ and
$$
m_{A_1} \;=\; \tfrac{1}{12}\bigl[1\cdot 8 + 1\cdot 8 + 2\cdot(-1) + 2\cdot(-1)\bigr] \;=\; \frac{16 - 4}{12} \;=\; \boxed{1} ,
$$
so the transition is **allowed by symmetry**. Both answers can be read off part (c) instead: the multiplicity of $A_1$ in $\Gamma_f\otimes E_1\otimes E_2$ equals the multiplicity of (the conjugate of) $\Gamma_f$ in $E_1\otimes E_2 = B_1\oplus B_2\oplus E_1$, which is $0$ for $\Gamma_f = E_2$ and $1$ for $\Gamma_f = E_1$ — a consistency check on the three-factor computation, and an illustration of step 5 of the method.
:::

:::application[Spectroscopy, identical particles and the composition of angular momenta]{provenance=original}
**Which spectral lines appear.** An electric dipole transition rate is proportional to $|\langle \Psi_f | \hat{\mathbf{d}} | \Psi_i\rangle|^{2}$, a matrix element of exactly the three-factor form of (P5). The method above decides, from the character table alone and before any wavefunction is written down, which pairs of levels can be connected: this is the origin of the familiar "allowed" and "forbidden" labels in atomic and molecular spectra, of the $g \leftrightarrow u$ parity rule (Arfken's $C_i$ example: a product of $u$ factors is $g$ exactly when their number is even, so the dipole operator, which is $u$, connects only states of opposite parity), and of the complementary selection rules for Raman scattering, where the operator is the polarizability and transforms as the *symmetric square* of the vector representation, so that the relevant decomposition is a symmetric square of the kind computed in part (b) of the example. In a centrosymmetric molecule the two rules exclude one another, which is the rule of mutual exclusion between infrared and Raman activity.

**Identical particles.** The state of two identical particles lives in $V\otimes V$, and the exchange operator is the $\tau$ of the note. With $V$ the full one-particle space, spin included, bosons occupy $\operatorname{Sym}^{2}V$ and fermions $\Lambda^{2}V$, so the symmetry species available to a two-particle configuration are not all of those in $V\otimes V$ but only those in the appropriate half. When spin is carried along, the two halves are combined crosswise: for two electrons in a doubly degenerate orbital of $E_1$ symmetry in the hexagonal system of the example, the antisymmetric spin singlet must multiply the symmetric spatial part $\operatorname{Sym}^{2}E_1 = A_1 \oplus E_2$, and the symmetric spin triplet the antisymmetric spatial part $\Lambda^{2}E_1 = A_2$. The configuration therefore yields the terms $^{1}A_1$, $^{1}E_2$ and $^{3}A_2$ and no others, carrying $1 + 2 + 3 = 6$ states in all — exactly $\binom{4}{2} = 6$, the number of ways of putting two electrons into the four spin-orbitals of the shell. Hassani makes the same kind of point for the strong interaction: a quark and an antiquark carry an irreducible representation and its conjugate, so by (P4) their product contains exactly one invariant, the singlet :cite[]{work=hassani-2013 loc="§24.8.1, Box 24.8.3, p. 755"}.

**Composition of angular momenta.** For the compact continuous groups the whole of this unit survives with the group average replaced by the Haar integral, and (P3) becomes the Clebsch-Gordan series of :ref[]{to=group.clebsch-gordan}: the product $D^{(j_1)}\otimes D^{(j_2)}$ of two irreducible representations of $SU(2)$ decomposes as $\bigoplus_{j=|j_1-j_2|}^{j_1+j_2} D^{(j)}$, each multiplicity being $1$ — the compact-group analogue of Hassani's *simply reducible*, a term he defines for finite groups. The coefficients that make the change of basis explicit are the Clebsch-Gordan coefficients, and the selection rule (P5), applied to a tensor operator rather than a single function, becomes the Wigner-Eckart theorem (:ref[]{to=group.wigner-eckart}), which not only forbids but factorises the surviving matrix elements into a geometric coefficient and one reduced matrix element.

**Elsewhere.** Product representations also carry the classification of coupled normal modes and of anharmonic couplings between them, the counting of symmetry-allowed terms in a Landau free energy (the invariants are the $A_1$ components of products of order-parameter representations), and the decomposition of tensors into irreducible pieces that :ref[]{to=geom.tensors} performs by hand for the rotation group.
:::
