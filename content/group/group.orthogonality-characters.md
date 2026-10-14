---
id: group.orthogonality-characters
title: Orthogonality relations and characters
kind: theorem
level: core
summary: The matrix entries of the inequivalent irreducible representations of a finite group are orthogonal functions on the group, and their traces -- the characters -- form an orthonormal set that decides, by one sum, how any representation decomposes.
prereqs: [group.representations, group.schur-lemma, group.conjugacy-classes, linalg.inner-product-spaces, linalg.unitary-orthogonal-matrices]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§29.5, the orthogonality theorem Eq. (29.13) and its index conventions pp. 1090-1091; §29.6, definition of characters and the character table of the triangle group pp. 1092-1093; §29.6.1, Eqs. (29.14)-(29.16) p. 1094; §29.7, Eqs. (29.17)-(29.18) and the counting of irreps pp. 1095-1096; §29.7.1, the regular representation and Eq. (29.21) pp. 1098-1099"
    pages: "1090-1096, 1098-1099"
    role: the statement of the great orthogonality theorem in the index form we follow; characters as class functions; the multiplicity formula; the regular representation and the dimension sum rule
  - work: hassani-2013
    loc: "§24.3, the averaged operator and Eqs. (24.6)-(24.8) pp. 734-735, Def. 24.3.5 (character) and Box 24.3.6 p. 736, Eqs. (24.10)-(24.12) pp. 736-737, Prop. 24.3.7 p. 737; §24.4, Eqs. (24.14)-(24.17) pp. 737-738 and the regular representation with Eq. (24.18) p. 739; §24.5, the class-sum argument Eqs. (24.21)-(24.27) pp. 741-742 and Thm 24.5.2 p. 743"
    pages: "734-743"
    role: the derivation of the orthogonality theorem from Schur's lemma; the irreducibility criterion; the regular representation; the proof that the number of inequivalent irreducible representations equals the number of conjugacy classes, and the column relation
  - work: dummit-foote-2004
    loc: "§18.3, definition of class function and character p. 866, the permutation character and the regular character pp. 866-867, Eqs. (18.1)-(18.3) p. 867 and (18.7)-(18.10) pp. 868-870, the Hermitian inner product p. 870, Prop. 14 p. 872, Thm 15 (first orthogonality relation) and Thm 16 (second orthogonality relation) p. 872, the norm criterion p. 873"
    pages: "866-874"
    role: the normalised inner product we adopt; characters as a basis of the class functions; the conjugation identity for character values; the norm-one criterion for irreducibility; the permutation character as a fixed-point count
  - work: arfken-2013
    loc: "§17.4, the two orthogonality relations Eq. (17.9) and the dimensionality theorem Eq. (17.10) p. 831, the character table of the triangular group Table 17.3 p. 832, the decomposition of a reducible representation Eqs. (17.11)-(17.12) p. 833"
    pages: "831-833"
    role: the physicists' statement of the two relations and of the dimension sum rule; the decomposition procedure
---

:::definition[Character, class function, the inner product on class functions]{provenance=adapted src="dummit-foote-2004:§18.3, definition and Eqs. (18.1)-(18.3), pp. 866-867, and the Hermitian form, p. 870; rhb-2006:§29.6, p. 1092; hassani-2013:Def. 24.3.5 and Box 24.3.6, p. 736"}
Let $G$ be a finite group of order $|G|$ and let $T$ be a representation of $G$ on a finite-dimensional complex space $V$, with matrices $D(g)$ in some basis. The **character** of $T$ is
$$
\chi(g) \;=\; \operatorname{tr} T_g \;=\; \sum_{i} D(g)_{ii} .
$$
It is called **simple** (or irreducible) if $T$ is irreducible and **compound** otherwise. Three properties are immediate from $\operatorname{tr}(AB) = \operatorname{tr}(BA)$:

- **Basis independence.** $\operatorname{tr}(S^{-1} D S) = \operatorname{tr} D$, so equivalent representations have the same character.
- **Degree.** $\chi(e) = \operatorname{tr} I = \dim V$, the degree of the representation.
- **Class function.** $\chi(hgh^{-1}) = \operatorname{tr}\bigl(D(h) D(g) D(h)^{-1}\bigr) = \chi(g)$, so $\chi$ is constant on each conjugacy class (:ref[Conjugacy classes]{to=group.conjugacy-classes}). A function $G \to \mathbb{C}$ constant on conjugacy classes is a **class function**; they form a vector space of dimension $r$, the number of classes, a basis being the indicator functions of the classes.

On class functions put
$$
(\theta, \psi) \;=\; \frac{1}{|G|} \sum_{g \in G} \theta(g)\,\overline{\psi(g)} \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\, \theta_i \overline{\psi_i} ,
$$
linear in the first slot, where the second form collects the classes $\mathcal{K}_1, \dots, \mathcal{K}_r$, $c_i = |\mathcal{K}_i|$, and $\theta_i$ is the common value of $\theta$ on $\mathcal{K}_i$. This is an inner product (:ref[Inner product spaces]{to=linalg.inner-product-spaces}).

**Convention.** We follow Dummit and Foote in dividing by $|G|$. Riley, Hobson and Bence and Hassani write the same relations without the $1/|G|$, so where we write $(\chi^{(\lambda)}, \chi^{(\mu)}) = \delta_{\lambda\mu}$ they write $\sum_{g} \chi^{(\lambda)}(g)\overline{\chi^{(\mu)}(g)} = |G|\,\delta_{\lambda\mu}$. The two differ only by that factor.

Throughout, $T^{(1)}, \dots, T^{(\rho)}$ is a fixed complete list of pairwise inequivalent irreducible complex representations of $G$, $n_\lambda$ is the degree of $T^{(\lambda)}$, $\hat D^{(\lambda)}$ its matrices, and $\chi^{(\lambda)}$ its character. By part 1 of the statement in :ref[Representations of groups]{to=group.representations} we may and do take every $\hat D^{(\lambda)}(g)$ to be **unitary**, which changes no character.
:::

:::statement[The great orthogonality theorem and its consequences]{provenance=adapted src="rhb-2006:§29.5, Eq. (29.13), p. 1091, §29.6.1, Eqs. (29.14)-(29.16), p. 1094, §29.7, Eq. (29.18), p. 1095, §29.7.1, Eq. (29.21), p. 1099; hassani-2013:Eqs. (24.7)-(24.8), p. 735, Eq. (24.11), p. 736, Eqs. (24.15)-(24.17), pp. 737-738, Eq. (24.18), p. 739, Eq. (24.27), p. 742, Thm 24.5.2, p. 743; dummit-foote-2004:Thm 15 and Thm 16, p. 872"}
Let $G$ be a finite group, with notation as in the definition.

1. **Great orthogonality theorem.** For all indices $i, j, k, l$ in range and all $\lambda, \mu$,
$$
\sum_{g \in G} \overline{\bigl[\hat D^{(\lambda)}(g)\bigr]_{ij}} \; \bigl[\hat D^{(\mu)}(g)\bigr]_{kl} \;=\; \frac{|G|}{n_\lambda}\, \delta_{ik}\, \delta_{jl}\, \delta_{\lambda\mu} .
$$
Equivalently, without assuming unitarity, $\sum_{g} \bigl[\hat D^{(\lambda)}(g)\bigr]_{ij}\bigl[\hat D^{(\mu)}(g^{-1})\bigr]_{kl} = \dfrac{|G|}{n_\lambda}\delta_{jk}\delta_{il}\delta_{\lambda\mu}$.
2. **Character values.** For every character $\chi$ of $G$ and every $g$, $\chi(g^{-1}) = \overline{\chi(g)}$, and $\chi(g)$ is a sum of $\chi(e)$ roots of unity.
3. **First orthogonality relation.** $(\chi^{(\lambda)}, \chi^{(\mu)}) = \delta_{\lambda\mu}$: the simple characters are orthonormal, hence linearly independent, class functions.
4. **Decomposition and multiplicities.** If $T \simeq \bigoplus_\lambda m_\lambda T^{(\lambda)}$ has character $\chi$, then $\chi = \sum_\lambda m_\lambda \chi^{(\lambda)}$ and
$$
m_\lambda = (\chi, \chi^{(\lambda)}) = \frac{1}{|G|}\sum_{g \in G} \chi(g)\,\overline{\chi^{(\lambda)}(g)} , \qquad (\chi,\chi) = \sum_\lambda m_\lambda^2 .
$$
In particular the multiplicities, and hence the representation up to equivalence, are determined by $\chi$; and **$T$ is irreducible if and only if $(\chi,\chi) = 1$**.
5. **The regular representation.** Let $T^{\mathrm{reg}}$ be the representation of $G$ on the $|G|$-dimensional space with basis $\{e_h : h \in G\}$ given by $T^{\mathrm{reg}}_g e_h = e_{gh}$. Its character is
$$
\chi^{\mathrm{reg}}(e) = |G|, \qquad \chi^{\mathrm{reg}}(g) = 0 \ \text{ for } g \neq e ,
$$
so every irreducible representation occurs in it with multiplicity equal to its own degree, $m_\lambda = n_\lambda$, and therefore
$$
\sum_{\lambda=1}^{\rho} n_\lambda^2 \;=\; |G| .
$$
6. **Counting, and the column relation.** The number $\rho$ of inequivalent irreducible complex representations equals the number $r$ of conjugacy classes, and the simple characters are an orthonormal basis of the space of class functions. Writing $\chi^{(\lambda)}_i$ for the value of $\chi^{(\lambda)}$ on $\mathcal{K}_i$, the **second orthogonality relation** holds:
$$
\sum_{\lambda=1}^{\rho} \chi^{(\lambda)}_i \,\overline{\chi^{(\lambda)}_j} \;=\; \frac{|G|}{c_i}\, \delta_{ij} .
$$

Parts 1 to 5 are proved below. In part 6 we prove $\rho \le r$ and take the reverse inequality, with the column relation, from the sources.
:::

:::idea{provenance=original}
Everything comes from one observation, made in :ref[Schur's lemma]{to=group.schur-lemma}: for *any* linear map $X$, the group average $A = \sum_g \hat D^{(\lambda)}(g)\, X\, \hat D^{(\mu)}(g^{-1})$ intertwines two irreducible representations, so Schur's lemma evaluates it — zero if they are inequivalent, a known multiple of the identity if they are the same. Because $X$ is arbitrary, we may feed in the matrix units $E_{jk}$ one at a time, and each choice reads off one bilinear relation among the matrix entries. That is part 1, and it is the whole theorem; the rest is bookkeeping.

Characters are what survives a change of basis, and they are obtained from part 1 by setting the row index equal to the column index and summing, which is exactly taking traces. The orthogonality of entries collapses to orthogonality of characters, and since a character knows nothing but the multiplicities, a single sum extracts them.

The regular representation is then the one place where the counting closes: it contains every irreducible representation, and its character is so sparse — all of $|G|$ concentrated at the identity — that the multiplicity formula returns the degree itself, giving $\sum n_\lambda^2 = |G|$ in one line.
:::

:::proof{provenance=adapted src="hassani-2013:§24.3, Eqs. (24.6)-(24.8), pp. 734-735 and Eqs. (24.10)-(24.11), p. 736, §24.4, Eqs. (24.14)-(24.18), pp. 737-739; rhb-2006:§29.6.1, Eq. (29.14), p. 1094, §29.7, Eq. (29.18), p. 1095, §29.7.1, pp. 1098-1099; dummit-foote-2004:Prop. 14 and Thm 15, p. 872"}
**Part 1.** Fix $\lambda, \mu$ and let $X$ be any $n_\lambda \times n_\mu$ matrix. Put
$$
A \;=\; \sum_{x \in G} \hat D^{(\lambda)}(x)\, X\, \hat D^{(\mu)}(x^{-1}) .
$$
For $g \in G$, inserting $\hat D^{(\mu)}(g^{-1})\hat D^{(\mu)}(g) = I$ and using the homomorphism property twice,
$$
\hat D^{(\lambda)}(g)\,A = \sum_{x \in G} \hat D^{(\lambda)}(gx)\, X\, \hat D^{(\mu)}\bigl((gx)^{-1}\bigr)\, \hat D^{(\mu)}(g) = A\, \hat D^{(\mu)}(g) ,
$$
because $x \mapsto gx$ is a bijection of $G$, so the sum over $x$ is unchanged. Thus $A$ intertwines $T^{(\mu)}$ with $T^{(\lambda)}$, both irreducible.

- If $\lambda \neq \mu$ the two are inequivalent, so $A = 0$ by the first form of :ref[Schur's lemma]{to=group.schur-lemma}.
- If $\lambda = \mu$ then $A = c\,I$ by the second form, and taking traces, $c\, n_\lambda = \operatorname{tr} A = \sum_{x} \operatorname{tr}\bigl(\hat D^{(\lambda)}(x) X \hat D^{(\lambda)}(x)^{-1}\bigr) = |G| \operatorname{tr} X$, so $c = |G| \operatorname{tr}(X)/n_\lambda$.

Both cases combine into a single statement about the entries of $A$: for all $i$ and $l$,
$$
A_{il} = \frac{|G|\,\operatorname{tr} X}{n_\lambda}\,\delta_{\lambda\mu}\,\delta_{il} ,
$$
the factor $\delta_{\lambda\mu}$ disposing of the inequivalent case, where $\operatorname{tr}X$ need not even be defined because $X$ need not be square.

Now choose $X = E_{jk}$, the matrix with a single $1$ in row $j$ and column $k$, so that $(E_{jk})_{ab} = \delta_{aj}\delta_{bk}$ and $\operatorname{tr} E_{jk} = \delta_{jk}$. The $(i,l)$ entry of $A$ is
$$
A_{il} = \sum_{x \in G} \sum_{a,b} \bigl[\hat D^{(\lambda)}(x)\bigr]_{ia} (E_{jk})_{ab} \bigl[\hat D^{(\mu)}(x^{-1})\bigr]_{bl} = \sum_{x \in G} \bigl[\hat D^{(\lambda)}(x)\bigr]_{ij}\,\bigl[\hat D^{(\mu)}(x^{-1})\bigr]_{kl} ,
$$
while the formula for $A$ gives $A_{il} = (|G|/n_\lambda)\,\delta_{jk}\,\delta_{\lambda\mu}\,\delta_{il}$. That is the second display of part 1.

For the first display, use unitarity: $\hat D^{(\mu)}(x^{-1}) = \hat D^{(\mu)}(x)^{-1} = \hat D^{(\mu)}(x)^{\dagger}$, so $\bigl[\hat D^{(\mu)}(x^{-1})\bigr]_{kl} = \overline{\bigl[\hat D^{(\mu)}(x)\bigr]_{lk}}$. Substituting gives $\sum_{x} \bigl[\hat D^{(\lambda)}(x)\bigr]_{ij}\,\overline{\bigl[\hat D^{(\mu)}(x)\bigr]_{lk}} = (|G|/n_\lambda)\delta_{jk}\delta_{il}\delta_{\lambda\mu}$. Conjugate the whole identity, which leaves the right-hand side alone because it is real, and then interchange the names of the two free indices $k$ and $l$:
$$
\sum_{x \in G} \overline{\bigl[\hat D^{(\lambda)}(x)\bigr]_{ij}}\;\bigl[\hat D^{(\mu)}(x)\bigr]_{kl} = \frac{|G|}{n_\lambda}\,\delta_{ik}\delta_{jl}\delta_{\lambda\mu} .
$$
(The factor is $n_\lambda$ and not $n_\mu$; the two agree whenever the right-hand side is non-zero, since then $\lambda = \mu$.)

**Part 2.** Let $\chi$ be the character of $T$ and fix $g$ of order $m$, so $T_g^m = T_{g^m} = I$. The minimal polynomial of $T_g$ therefore divides $z^m - 1$, which has $m$ distinct roots, so $T_g$ is diagonalizable with eigenvalues $\varepsilon_1, \dots, \varepsilon_n$ that are $m$-th roots of unity, $n = \chi(e)$. Then $\chi(g) = \sum_s \varepsilon_s$, which is the second claim. Also $T_{g^{-1}} = T_g^{-1}$ has eigenvalues $\varepsilon_s^{-1} = \overline{\varepsilon_s}$, because $|\varepsilon_s| = 1$; summing, $\chi(g^{-1}) = \sum_s \overline{\varepsilon_s} = \overline{\chi(g)}$.

**Part 3.** In the first display of part 1 set $j = i$ and $l = k$, then sum over $i$ from $1$ to $n_\lambda$ and over $k$ from $1$ to $n_\mu$. The left-hand side becomes $\sum_{g} \overline{\chi^{(\lambda)}(g)}\,\chi^{(\mu)}(g)$, and the right-hand side becomes
$$
\frac{|G|}{n_\lambda}\,\delta_{\lambda\mu} \sum_{i=1}^{n_\lambda}\sum_{k=1}^{n_\mu} \delta_{ik}\delta_{ik} = \frac{|G|}{n_\lambda}\,\delta_{\lambda\mu}\, n_\lambda = |G|\,\delta_{\lambda\mu} ,
$$
where the double sum collapses to $n_\lambda$ because $\delta_{ik}^2 = \delta_{ik}$ and the term $\delta_{\lambda\mu}$ makes $n_\mu = n_\lambda$ in every surviving term. Dividing by $|G|$ and conjugating gives $(\chi^{(\lambda)}, \chi^{(\mu)}) = \delta_{\lambda\mu}$. Orthonormal vectors are linearly independent, so the $\chi^{(\lambda)}$ are independent class functions.

**Part 4.** Choose a basis in which every $D(g)$ is block diagonal with the blocks of the decomposition $T \simeq \bigoplus_\lambda m_\lambda T^{(\lambda)}$, which exists by part 4 of the statement in :ref[Representations of groups]{to=group.representations}. The trace of a block-diagonal matrix adds up the traces of the blocks along its diagonal, so $\chi = \sum_\lambda m_\lambda \chi^{(\lambda)}$. Pairing with $\chi^{(\mu)}$ and using part 3,
$$
(\chi, \chi^{(\mu)}) = \sum_\lambda m_\lambda\, (\chi^{(\lambda)}, \chi^{(\mu)}) = m_\mu ,
$$
the first step using linearity in the first slot and that the $m_\lambda$ are real integers. Likewise
$$
(\chi,\chi) = \sum_{\lambda,\mu} m_\lambda m_\mu\, (\chi^{(\lambda)}, \chi^{(\mu)}) = \sum_\lambda m_\lambda^2 .
$$
Since the $m_\lambda$ are non-negative integers, $\sum_\lambda m_\lambda^2 = 1$ holds exactly when one $m_\lambda$ is $1$ and the rest are $0$, that is exactly when $T$ is irreducible. And because $\chi$ determines every $m_\lambda$, two representations with the same character have the same multiplicities, hence are equivalent.

**Part 5.** In the basis $\{e_h\}_{h \in G}$ the operator $T^{\mathrm{reg}}_g$ permutes the basis, sending $e_h$ to $e_{gh}$. Its matrix therefore has diagonal entry $1$ in position $(h,h)$ exactly when $gh = h$, that is when $g = e$, and $0$ otherwise. Hence $\chi^{\mathrm{reg}}(e) = |G|$ and $\chi^{\mathrm{reg}}(g) = 0$ for $g \neq e$. (That this *is* a representation follows from associativity: $T^{\mathrm{reg}}_g T^{\mathrm{reg}}_{g'} e_h = e_{g(g'h)} = e_{(gg')h}$.) Part 4 now gives, with only the term $g = e$ surviving,
$$
m_\lambda = \frac{1}{|G|}\sum_{g \in G} \chi^{\mathrm{reg}}(g)\,\overline{\chi^{(\lambda)}(g)} = \frac{1}{|G|}\,|G|\,\overline{\chi^{(\lambda)}(e)} = n_\lambda ,
$$
using $\chi^{(\lambda)}(e) = n_\lambda$, which is real. Evaluating $\chi^{\mathrm{reg}} = \sum_\lambda n_\lambda \chi^{(\lambda)}$ at $g = e$ gives $|G| = \sum_\lambda n_\lambda \cdot n_\lambda$.

**Part 6, the inequality $\rho \le r$.** Each $\chi^{(\lambda)}$ is a class function, and by part 3 the $\rho$ of them are linearly independent. The space of class functions has dimension $r$, so $\rho \le r$. The reverse inequality $r \le \rho$ is proved by Hassani from the class sums $\kappa_i = \sum_{x \in \mathcal{K}_i} x$ in the group algebra: each $\sum_{x \in \mathcal{K}_i} \hat D^{(\lambda)}(x)$ commutes with the representation, hence is a scalar $\lambda_i^{(\lambda)} I$ by Schur's lemma, and chasing the resulting structure constants yields the column relation of part 6, in which the $r$ vectors $\bigl(\chi^{(\lambda)}_i\bigr)_{\lambda=1}^{\rho}$, one per class, are mutually orthogonal and non-zero, forcing $r \le \rho$ :cite{work=hassani-2013 loc="§24.5, Eqs. (24.21)-(24.27), pp. 741-742, and Thm 24.5.2, p. 743"}. With $\rho = r$ the $\rho$ orthonormal simple characters are a basis of the $r$-dimensional space of class functions :cite{work=dummit-foote-2004 loc="Eq. (18.10) and Thm 15, pp. 870-872"}. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Finiteness of $G$** is used in every sum over the group, and in the reindexing $x \mapsto gx$ that makes $A$ an intertwiner. Nothing survives verbatim for infinite groups; the correct replacement averages with an invariant measure instead of a sum, which is why the theory extends cleanly to compact groups and to the rotation group (:ref[The rotation group and SU(2)]{to=group.so3-su2}) but not to, say, $\mathbb{Z}$.

**The field must be $\mathbb{C}$**, because part 1 invokes the second form of Schur's lemma, which needs an algebraically closed field. The failure is easy to see. Let $G = C_3 = \{e, r, r^2\}$ act on $\mathbb{R}^2$ by rotations through $0$, $2\pi/3$, $4\pi/3$. This representation is irreducible over $\mathbb{R}$, and $\hat D(g)_{11} = \hat D(g)_{22} = \cos\theta_g$, so
$$
\sum_{g \in G} \hat D(g)_{11}\,\hat D(g)_{22} = 1 + \tfrac14 + \tfrac14 = \tfrac32 ,
$$
whereas part 1 with $(i,j) = (1,1)$ and $(k,l) = (2,2)$ predicts $(|G|/n)\delta_{12}\delta_{12} = 0$. The character version fails too: $\chi = (2, -1, -1)$ gives $\sum_g \chi(g)^2 = 4 + 1 + 1 = 6 = 2|G|$, so $(\chi,\chi) = 2$, not $1$. Read over $\mathbb{C}$, that $2$ is correct and informative: it says $(\chi,\chi) = \sum m_\lambda^2 = 1 + 1$, and indeed over $\mathbb{C}$ the representation splits into the two one-dimensional representations $r \mapsto \omega$ and $r \mapsto \omega^2$, $\omega = e^{2\pi i /3}$.

**Unitarity is used only for the conjugated form.** The version with $\hat D^{(\mu)}(g^{-1})$ needs no inner product at all; it is unitarity that converts $\hat D(g^{-1})$ into $\overline{\hat D(g)}^{\,\mathsf T}$ and so produces the Hermitian inner product. Since every complex representation of a finite group is equivalent to a unitary one and characters are unchanged by equivalence, this costs nothing.

**The list of irreducible representations must be complete and pairwise inequivalent.** Part 1 says nothing if the same representation is listed twice under different names, and the column relation of part 6 is false if any irreducible representation is omitted: the left-hand side is a sum over *all* of them.

**Part 4 needs complete reducibility**, which is Maschke's theorem from :ref[Representations of groups]{to=group.representations}, and with it the fact that the multiplicities are well defined. Over a field of characteristic dividing $|G|$ the character no longer determines the representation, and $(\chi,\chi)$ is not even defined in the same way.

**What characters forget.** A character determines a representation up to equivalence, but two non-isomorphic *groups* can have identical character tables: $D_8$ and the quaternion group $Q_8$, both of order $8$, do. Riley, Hobson and Bence note the same phenomenon for the point groups $C_{4v}$ and $D_{2d}$ :cite{work=rhb-2006 loc="§29.6, p. 1092"}. Characters are a complete invariant of a representation, not of a group.
:::

:::method[Decomposing a representation with characters]{provenance=original}
Given a representation $T$ of a finite group $G$ and the simple characters of $G$:

1. **List the conjugacy classes** $\mathcal{K}_1, \dots, \mathcal{K}_r$ with their sizes $c_i$, and pick one representative $g_i$ of each. Everything below uses only representatives, since characters are class functions.
2. **Compute $\chi(g_i)$, not the matrices.** For a permutation representation, $\chi(g)$ is just the number of basis elements $g$ fixes :cite{work=dummit-foote-2004 loc="§18.3, Example 3, p. 866"}. For an action on functions or on monomials, it is the sum of the diagonal weights, so only the diagonal of each matrix is needed :cite{work=rhb-2006 loc="§29.7, p. 1096"}.
3. **Test irreducibility first.** Compute $(\chi,\chi) = \frac{1}{|G|}\sum_i c_i |\chi(g_i)|^2$. If it is $1$, stop: $T$ is irreducible. If it is $k$, then $\sum_\lambda m_\lambda^2 = k$, which already limits the possibilities severely.
4. **Extract each multiplicity** by $m_\lambda = \frac{1}{|G|}\sum_{i=1}^{r} c_i\, \chi(g_i)\, \overline{\chi^{(\lambda)}(g_i)}$. Every $m_\lambda$ must come out a non-negative integer; a fraction means an arithmetic slip, a wrong class size, or an incomplete character table.
5. **Check twice.** Verify $\sum_\lambda m_\lambda n_\lambda = \chi(e) = \dim V$ and $\sum_\lambda m_\lambda^2 = (\chi,\chi)$. These two use different parts of the data and catch almost every error.

Constructing the simple characters in the first place is the business of :ref[Character tables]{to=group.character-tables}; the sum rules $\sum_\lambda n_\lambda^2 = |G|$ and $\rho = r$ from part 6 are the main tools there.
:::

:::example[Quadratic forms in three variables under $S_3$]{provenance=original}
**The group and its simple characters.** Take $G = S_3$, of order $6$, with the three conjugacy classes (:ref[Conjugacy classes]{to=group.conjugacy-classes})
$$
\mathcal{K}_1 = \{e\}\ (c_1 = 1), \qquad \mathcal{K}_2 = \{(1\,2),(1\,3),(2\,3)\}\ (c_2 = 3), \qquad \mathcal{K}_3 = \{(1\,2\,3),(1\,3\,2)\}\ (c_3 = 2) .
$$
By part 6 there are exactly three inequivalent irreducible representations, and by part 5 their degrees satisfy $n_1^2 + n_2^2 + n_3^2 = 6$, whose only solution in positive integers is $1, 1, 2$. All three are already in hand: the trivial representation; the sign representation $\sigma \mapsto \operatorname{sgn}\sigma$; and the two-dimensional representation $\hat D$ built in :ref[Representations of groups]{to=group.representations}, which is irreducible there. Taking traces of the six matrices listed in :ref[Schur's lemma]{to=group.schur-lemma} — $\operatorname{tr}\operatorname{diag}(-1,1) = 0$ for a reflection and $-\tfrac12 - \tfrac12 = -1$ for a rotation — the characters on $(\mathcal{K}_1, \mathcal{K}_2, \mathcal{K}_3)$ are
$$
\chi^{(1)} = (1,\,1,\,1), \qquad \chi^{(2)} = (1,\,-1,\,1), \qquad \chi^{(E)} = (2,\,0,\,-1) .
$$

**Part 3, checked.** With weights $(c_1,c_2,c_3) = (1,3,2)$,
$$
(\chi^{(E)}, \chi^{(E)}) = \tfrac16\bigl[1\cdot 2^2 + 3\cdot 0^2 + 2\cdot(-1)^2\bigr] = \tfrac{4+0+2}{6} = 1 ,
$$
$$
(\chi^{(1)}, \chi^{(2)}) = \tfrac16\bigl[1 - 3 + 2\bigr] = 0, \qquad (\chi^{(2)}, \chi^{(E)}) = \tfrac16\bigl[1\cdot1\cdot2 + 3\cdot(-1)\cdot 0 + 2\cdot 1 \cdot(-1)\bigr] = 0 .
$$

**The representation to decompose.** Let $V$ be the space of homogeneous quadratic polynomials in $x_1, x_2, x_3$, of dimension $6$ with basis
$$
x_1^2,\ x_2^2,\ x_3^2,\ x_1x_2,\ x_1x_3,\ x_2x_3 ,
$$
and let $\sigma \in S_3$ act by permuting the variables, $(T_\sigma p)(x_1,x_2,x_3) = p(x_{\sigma(1)}, x_{\sigma(2)}, x_{\sigma(3)})$. This permutes the six basis monomials, so by step 2 of the method $\chi(\sigma)$ counts the monomials $\sigma$ fixes.

- $\sigma = e$ fixes all six: $\chi_1 = 6$.
- $\sigma = (1\,2)$ swaps $x_1^2 \leftrightarrow x_2^2$ and $x_1x_3 \leftrightarrow x_2x_3$, and fixes $x_3^2$ and $x_1x_2$: $\chi_2 = 2$.
- $\sigma = (1\,2\,3)$ cycles $x_1^2 \to x_2^2 \to x_3^2 \to x_1^2$ and $x_1x_2 \to x_2x_3 \to x_1x_3 \to x_1x_2$, fixing nothing: $\chi_3 = 0$.

So $\chi = (6, 2, 0)$.

**Step 3: how far from irreducible.**
$$
(\chi,\chi) = \tfrac16\bigl[1\cdot 36 + 3 \cdot 4 + 2\cdot 0\bigr] = \tfrac{48}{6} = 8 .
$$
Not $1$, so $V$ is reducible, and $\sum_\lambda m_\lambda^2 = 8$.

**Step 4: the multiplicities.**
$$
m_1 = \tfrac16\bigl[1\cdot 6 \cdot 1 + 3 \cdot 2 \cdot 1 + 2\cdot 0 \cdot 1\bigr] = \tfrac{6+6+0}{6} = 2 ,
$$
$$
m_2 = \tfrac16\bigl[1\cdot 6 \cdot 1 + 3\cdot 2\cdot(-1) + 2\cdot 0\cdot 1\bigr] = \tfrac{6-6+0}{6} = 0 ,
$$
$$
m_E = \tfrac16\bigl[1\cdot 6\cdot 2 + 3\cdot 2\cdot 0 + 2\cdot 0\cdot(-1)\bigr] = \tfrac{12}{6} = 2 .
$$
All three are non-negative integers, as they must be. Hence
$$
V \;\simeq\; 2\,T^{(1)} \;\oplus\; 2\,T^{(E)} ,
$$
with no copy of the sign representation at all.

**Step 5: both checks.** Degrees: $m_1 n_1 + m_2 n_2 + m_E n_E = 2\cdot 1 + 0 \cdot 1 + 2 \cdot 2 = 6 = \dim V$. Norms: $m_1^2 + m_2^2 + m_E^2 = 4 + 0 + 4 = 8 = (\chi,\chi)$.

**Reading the answer off the polynomials.** The two copies of the trivial representation are the two independent symmetric quadratics,
$$
q_1 = x_1^2 + x_2^2 + x_3^2, \qquad q_2 = x_1x_2 + x_1x_3 + x_2x_3 ,
$$
and that there are exactly two of them is the statement $m_1 = 2$. That $m_2 = 0$ says no quadratic in three variables changes sign under every transposition — correct, since such a polynomial would be divisible by $(x_1-x_2)(x_1-x_3)(x_2-x_3)$, of degree $3$. The remaining four dimensions carry two copies of the two-dimensional representation, spanned for instance by the pairs
$$
\bigl(x_1^2 - x_2^2,\ \ x_1^2 + x_2^2 - 2x_3^2\bigr) \quad\text{and}\quad \bigl(x_1x_2 - x_1x_3,\ \ x_1x_2 + x_1x_3 - 2x_2x_3\bigr) .
$$
The structural reason is visible: $V$ is the direct sum of the two invariant subspaces $\operatorname{span}\{x_1^2, x_2^2, x_3^2\}$ and $\operatorname{span}\{x_2x_3, x_1x_3, x_1x_2\}$, and each is a copy of the permutation representation on three letters — in the second, $\sigma$ sends the monomial that omits $x_i$ to the monomial that omits $x_{\sigma(i)}$. That representation was decomposed as trivial $\oplus\, E$ in :ref[Representations of groups]{to=group.representations}, so $V \simeq 2(\text{trivial} \oplus E)$, which is the answer the characters gave. Reaching it by characters needed no matrix of $T$ at all, only three fixed-point counts.
:::

:::application{provenance=original}
**Counting normal modes by symmetry.** For a molecule with symmetry group $G$, the $3N$ Cartesian displacements of its $N$ atoms carry a representation whose character is computed atom by atom: only atoms left in place by a symmetry operation contribute, and each contributes a small universal number ($3$ for the identity, $1 + 2\cos\theta$ for a rotation by $\theta$, and so on). Step 4 then gives, with no dynamics at all, how many vibrational modes of each symmetry type the molecule has, and therefore how many distinct frequencies to expect and how degenerate each is. Subtracting the three translational and three rotational representations leaves the genuine vibrations. The entire calculation is one row of arithmetic per conjugacy class.

**Which transitions are allowed.** A matrix element $\int \psi_f^{*}\, \hat O\, \psi_i$ is invariant under the symmetry group, so it vanishes unless the trivial representation occurs in the product representation carried by the integrand; and by part 4 the multiplicity of the trivial representation in a product is $(\chi_f \chi_O \chi_i, \chi^{(1)})$, a single sum. This is the infrared and Raman selection rule, and the systematic version is :ref[Product representations and selection rules]{to=group.product-representations}. Arfken's discussion of why a molecule needs the right symmetry to have a dipole moment is the same computation :cite{work=arfken-2013 loc="§17.3, p. 830"}.

**Crystal field and level splitting.** An atomic level of angular momentum $\ell$ carries the $(2\ell+1)$-dimensional representation of the full rotation group. Put the atom in a crystal and the symmetry drops to a point group $G$ (:ref[Point groups and crystal symmetry]{to=group.point-groups}); the same $(2\ell+1)$ states now carry a representation of $G$, generally reducible, and step 4 says exactly how the level splits and what the new degeneracies are. The number of lines a spectroscopist sees, and their multiplicities, are read from a character table before any energy is computed.

**Counting orbits.** Applied to a permutation representation on a finite set $X$, part 4 with $\lambda$ the trivial representation says $m_1 = \frac{1}{|G|}\sum_g |\operatorname{Fix}(g)|$, since $\chi(g)$ is the fixed-point count. On the other hand $m_1$ is the dimension of the subspace of $G$-invariant vectors, which has the orbit sums as a basis. So the average number of fixed points is the number of orbits: Burnside's counting lemma, recovered from character theory (:ref[Group actions]{to=group.group-actions}).

**Fourier analysis is the abelian case.** For an abelian $G$ every irreducible representation is one-dimensional (:ref[Schur's lemma]{to=group.schur-lemma}), so characters *are* the representations, and part 6 says there are $|G|$ of them, forming an orthonormal basis of all functions on $G$. Expanding a function in that basis is the discrete Fourier transform, and part 3 is Parseval's relation for it. Replacing the finite group by the circle and the sum by an integral turns the same statements into the classical theory of :ref[Fourier series]{to=fourier.fourier-series} and :ref[Parseval's theorem for Fourier series]{to=fourier.parseval-mean-square}; Dummit and Foote set the analogy out in detail :cite{work=dummit-foote-2004 loc="§18.3, pp. 875-876"}. Non-abelian character theory is what replaces Fourier analysis when the symmetry group does not commute.
:::
