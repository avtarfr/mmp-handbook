---
id: group.character-tables
title: Character tables
kind: method
level: core
summary: Shows how the square array of irreducible characters of a finite group is pinned down by orthogonality of its rows and of its columns together with a few arithmetic constraints, and how, once built, it reduces any representation to a list of multiplicities.
prereqs: [group.orthogonality-characters, group.conjugacy-classes, group.representations, group.group-actions]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§29.8 Construction of a character table, pp. 1100-1102: the list of six properties (i)-(vi) used to build a table -- number of classes equals number of irreps, orthogonality of the character vectors of two irreps, $\\sum_\\mu n_\\mu^2 = g$, the identity irrep is always present, $\\sum_X |\\chi^{(\\mu)}(X)|^2 = g$, and $\\chi^{(\\mu)}(X)$ a sum of $n_\\mu$ $m$th roots of unity with $m$ the order of $X$; the argument on p. 1100 that the eigenvalues of $D(X)$ are $m$th roots of unity because $D(X)^m = I$; the worked construction of the table of $4mm$ ($C_{4v}$), table 29.4, pp. 1101-1102; §29.9, p. 1102, on nomenclature: $A$ and $B$ for one-dimensional irreps with $B$ when the principal rotation has character $-1$, $E$ for two-dimensional and $T$ for three-dimensional irreps, and the warning that $E$ is also used for the identity operation; §29.11.3, pp. 1110-1111, that degenerate normal modes span an irrep and the degeneracy equals its dimension"
    pages: "1100-1102, 1110-1111"
    role: the list of constraints that determine a table and the order in which they are applied; the Mulliken-style naming of irreps and the warning about published notation; the normal-mode application
  - work: dummit-foote-2004
    loc: "Corollary 5, §19.2, p. 888: the degree of each complex irreducible representation of a finite group divides the order of the group; §19.1, p. 880: the layout of the character table -- class representatives along the top, irreducible characters down the side, entry $\\chi_i(g_j)$, uniqueness up to permutation of rows and columns, the conventions of putting the principal character first and the identity column first and ordering by degree, the row of class sizes, and the first and second orthogonality relations in the forms $(\\chi_i,\\chi_j) = |G|^{-1}\\sum_k d_k\\chi_i(g_k)\\overline{\\chi_j(g_k)}$ and 'the Hermitian product of any two distinct columns is zero'; Corollary 11(2), p. 861: the number of inequivalent degree 1 complex representations of $G$ equals $|G : G'|$; p. 882: the character tables of $D_8$ and $Q_8$ coincide although the groups are not isomorphic"
    pages: "861, 880-882, 888"
    role: the layout conventions; the count of degree-one characters by the commutator quotient; the divisibility of the degrees; the fact that the table does not determine the group
  - work: hassani-2013
    loc: "Table 24.1 and the text above it, p. 743: rows labelled by irreducible representations, columns by conjugacy classes, the class order $c_i$ carried as a left superscript on the column heading, and the remark that any two rows and any two columns are orthogonal; Eq. (24.27), p. 742, the column relation $\\sum_{\\alpha} \\chi_i^{(\\alpha)}\\chi_j^{(\\alpha)*} = (|G|/c_j)\\,\\delta_{ij}$, derived there from the class sums of the group algebra; Theorem 24.5.3, p. 743: a finite group is abelian if and only if all its inequivalent irreducible representations are one-dimensional"
    pages: "742-743"
    role: the statement of the column (second) orthogonality relation in the weighted form used here, and the abelian criterion
  - work: arfken-2013
    loc: "§17.4, pp. 831-833: the character table of $D_3$ (Table 17.3, p. 832) with columns headed by a class representative preceded by the number of elements in the class; the naming of irreps $A$, $B$ (one-dimensional), $E$ (two-dimensional), $T$ (three-dimensional), p. 832; the remark that the identity column gives the dimensions; the dimensionality theorem Eq. (17.10), p. 831; the decomposition of a reducible representation, Eqs. (17.11)-(17.12), p. 833, and Example 17.4.4, p. 834"
    pages: "831-834"
    role: the column-heading convention with class sizes, the irrep naming, and the extraction of multiplicities from a reducible character
---

:::definition[The character table]{provenance=adapted src="dummit-foote-2004:§19.1, p. 880; hassani-2013:Table 24.1 and preceding text, p. 743; arfken-2013:Table 17.3 and surrounding text, pp. 831-832"}
Let $G$ be a finite group of order $|G|$, with conjugacy classes $K_1, \dots, K_r$ of sizes $c_1, \dots, c_r$, numbered so that $K_1 = \{1\}$ and $c_1 = 1$. A character is constant on each class (:ref[]{to=group.orthogonality-characters}), so an irreducible character $\chi$ is determined by the $r$ numbers
$$
\chi_i \;:=\; \chi(g_i) , \qquad g_i \in K_i \ \text{ any representative} .
$$

By :ref[]{to=group.orthogonality-characters} the number of inequivalent irreducible representations is also $r$. The **character table** of $G$ is the resulting $r \times r$ array: one row for each irreducible character $\chi^{(1)}, \dots, \chi^{(r)}$, one column for each class, and the entry in row $\mu$ and column $i$ equal to $\chi^{(\mu)}_i$. It is square, and it is this squareness that makes a *table* of it rather than a list.

Four conventions are almost universal and are used throughout the handbook.

- **The first row is the trivial (principal) character**, $\chi^{(1)}_i = 1$ for every $i$; the first column is the class of the identity. The remaining rows are ordered by increasing degree.
- **The identity column gives the degrees.** $\chi^{(\mu)}(1) = \operatorname{tr} I_{n_\mu} = n_\mu$, so reading down the first column reads off the dimensions of the irreducible representations.
- **Each column heading carries the size of its class**, written as a prefix ($2C_3$, $3\sigma_v$) in the physics and chemistry literature and as a separate row of sizes $c_i$ in the algebra literature. Without it the table cannot be used, because every inner product below is weighted by the $c_i$.
- **Rows are named, not numbered.** A one-dimensional irrep is called $A$ if the principal rotation has character $+1$ and $B$ if it has character $-1$; a two-dimensional irrep is called $E$ and a three-dimensional one $T$.

The inner product of two class functions $\theta, \psi : G \to \mathbb{C}$ is
$$
(\theta, \psi) \;=\; \frac{1}{|G|}\sum_{g \in G} \theta(g)\,\overline{\psi(g)} \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\theta_i\,\overline{\psi_i} ,
$$
linear in the first slot, as everywhere in this handbook. The second form is the one a table is read with: the sum runs over the $r$ columns, each weighted by its class size.
:::

:::statement[The constraints that determine a table]{provenance=adapted src="rhb-2006:§29.8, properties (i)-(vi), p. 1100; hassani-2013:Eq. (24.27), p. 742, and Theorem 24.5.3, p. 743; dummit-foote-2004:Corollary 11(2), p. 861, Corollary 5, p. 888, and §19.1, p. 880; arfken-2013:Eq. (17.10), p. 831"}
Let $G$ be a finite group with the notation of the definition, and let $G' = [G,G]$ be its commutator subgroup. The following hold.

- **(C1) Shape.** The table is $r \times r$, where $r$ is the number of conjugacy classes.
- **(C2) Rows are orthonormal.** $(\chi^{(\mu)}, \chi^{(\nu)}) = \delta_{\mu\nu}$, that is
  $$
  \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\chi^{(\mu)}_i\,\overline{\chi^{(\nu)}_i} \;=\; \delta_{\mu\nu} .
  $$
- **(C3) Degrees.** $\sum_{\mu=1}^{r} n_\mu^{2} = |G|$ with $n_\mu = \chi^{(\mu)}(1) \ge 1$, and each $n_\mu$ divides $|G|$ (Dummit and Foote, Corollary 5, p. 888). The number of $\mu$ with $n_\mu = 1$ is exactly the index $|G : G'|$; in particular every group has at least one, the trivial character, and $G$ is abelian precisely when every $n_\mu = 1$.
- **(C4) Columns are orthogonal.** For all $i, j$,
  $$
  \sum_{\mu=1}^{r} \chi^{(\mu)}_i\,\overline{\chi^{(\mu)}_j} \;=\; \frac{|G|}{c_i}\,\delta_{ij} .
  $$
- **(C5) Entries are sums of roots of unity.** If $g \in K_i$ has order $m$, then $\chi^{(\mu)}_i$ is a sum of $n_\mu$ complex $m$th roots of unity. Consequently
  $$
  \bigl|\chi^{(\mu)}_i\bigr| \;\le\; n_\mu , \qquad \chi^{(\mu)}\bigl(g^{-1}\bigr) \;=\; \overline{\chi^{(\mu)}(g)} ,
  $$
  and $\chi^{(\mu)}_i$ is real whenever $K_i$ is closed under inversion. The order $m$ divides $|G|$, by Lagrange's theorem (:ref[]{to=group.cosets-lagrange}).
- **(C6) Reading off multiplicities.** If $D$ is any representation of $G$ with character $\psi$, then $D \simeq \bigoplus_\mu m_\mu\, D^{(\mu)}$ with
  $$
  m_\mu \;=\; \bigl(\psi, \chi^{(\mu)}\bigr) \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\psi_i\,\overline{\chi^{(\mu)}_i} \;\in\; \{0, 1, 2, \dots\} ,
  $$
  and $D$ is irreducible if and only if $(\psi, \psi) = 1$.

Every one of these is established in :ref[]{to=group.orthogonality-characters}; they are collected here because the method below is nothing but their repeated use. Specifically, that unit proves the count of irreducible representations (C1), the first orthogonality relation (C2), the decomposition formula (C6) and the degree sum in (C3) -- Arfken's dimensionality theorem -- and it states the column relation (C4), which is Hassani's Eq. (24.27) and the "orthogonality of columns" of Dummit and Foote, and the roots-of-unity form in (C5), which is Riley, Hobson and Bence's property (vi). The divisibility in (C3) is Dummit and Foote's Corollary 5, the count of one-dimensional characters their Corollary 11(2), and the abelian criterion Hassani's Theorem 24.5.3.

The proof below supplies the two things a table-builder cannot do without and that are left open there: a proof of the column relation (C4), which :ref[]{to=group.orthogonality-characters} states but takes from its sources, and the two consequences of (C5) -- the bound $|\chi^{(\mu)}_i| \le n_\mu$ and the reality criterion -- that cut the search for unknown entries down to a finite list.
:::

:::idea{provenance=original}
Assemble the table into a matrix $U$ with entries $U_{\mu i} = \sqrt{c_i/|G|}\;\chi^{(\mu)}_i$, that is, the table with each column scaled by the square root of its class size. Row orthonormality (C2) says exactly that $UU^{\dagger} = I$. A square matrix with orthonormal rows is unitary, so $U^{\dagger}U = I$ as well — and that is the column relation (C4). Nothing is needed beyond (C1) and (C2): *squareness is what converts orthogonality of rows into orthogonality of columns*, and the number of classes equalling the number of irreps is therefore the hinge of the whole construction.

The second statement, (C5), comes from an even shorter observation. An element of order $m$ is sent by a representation to a matrix $D$ with $D^{m} = I$, which forces every eigenvalue of $D$ to satisfy $\lambda^{m} = 1$. The character is the sum of those eigenvalues, so it is a sum of $n_\mu$ roots of unity; the triangle inequality then bounds it by $n_\mu$, and replacing $g$ by $g^{-1}$ inverts each eigenvalue, which for a root of unity is the same as conjugating it.
:::

:::proof{provenance=original}
**(C4), columns.** :ref[]{to=group.orthogonality-characters} states this relation and takes it from its sources; here is a proof from (C1) and (C2) alone. Define the $r \times r$ matrix
$$
U_{\mu i} \;=\; \sqrt{\frac{c_i}{|G|}}\;\chi^{(\mu)}_i , \qquad \mu, i \in \{1, \dots, r\} ,
$$
which is square by (C1).

*Step 1 (rows).* By (C2),
$$
\bigl(UU^{\dagger}\bigr)_{\mu\nu} \;=\; \sum_{i=1}^{r} U_{\mu i}\,\overline{U_{\nu i}} \;=\; \frac{1}{|G|}\sum_{i=1}^{r} c_i\,\chi^{(\mu)}_i\,\overline{\chi^{(\nu)}_i} \;=\; \delta_{\mu\nu} ,
$$
so $UU^{\dagger} = I$.

*Step 2 (squareness).* For square matrices a right inverse is a left inverse: $UU^{\dagger} = I$ gives $\det U \ne 0$, hence $U^{-1}$ exists, and multiplying $UU^{\dagger} = I$ on the left by $U^{-1}$ gives $U^{\dagger} = U^{-1}$, so also $U^{\dagger}U = I$. This step, and only this step, uses (C1).

*Step 3 (read off).* Writing out $\bigl(U^{\dagger}U\bigr)_{ij} = \delta_{ij}$,
$$
\delta_{ij} \;=\; \sum_{\mu=1}^{r} \overline{U_{\mu i}}\,U_{\mu j} \;=\; \frac{\sqrt{c_ic_j}}{|G|}\sum_{\mu=1}^{r} \overline{\chi^{(\mu)}_i}\,\chi^{(\mu)}_j .
$$
For $i = j$ this is $\sum_\mu |\chi^{(\mu)}_i|^{2} = |G|/c_i$, and for $i \ne j$ it is $\sum_\mu \overline{\chi^{(\mu)}_i}\chi^{(\mu)}_j = 0$. Taking complex conjugates gives the form stated in (C4).

**(C5), the consequences of the roots-of-unity form.** Let $g \in K_i$ have order $m$ and let $D = D^{(\mu)}(g)$, an $n_\mu \times n_\mu$ matrix. That $\chi^{(\mu)}_i$ is a sum of $n_\mu$ complex $m$th roots of unity is proved in :ref[]{to=group.orthogonality-characters}; the one-line reason is that $D^{m} = D^{(\mu)}(g^{m}) = I$, so the polynomial $t^{m}-1$, which has $m$ simple roots, annihilates $D$ and makes it diagonalisable with every eigenvalue a root of $t^{m} = 1$ (:ref[]{to=linalg.eigenvalues-eigenvectors}). Write $\lambda_1, \dots, \lambda_{n_\mu}$ for those eigenvalues, so that $\chi^{(\mu)}_i = \operatorname{tr} D = \sum_k \lambda_k$. What the method below actually uses are the two consequences.

*The bound.* Each $|\lambda_k| = 1$, so the triangle inequality gives
$$
\bigl|\chi^{(\mu)}_i\bigr| \;\le\; \sum_{k=1}^{n_\mu} |\lambda_k| \;=\; n_\mu ,
$$
with equality only when all $n_\mu$ eigenvalues coincide, that is when $D$ is a scalar matrix.

*The reality criterion.* $D^{(\mu)}(g^{-1}) = D^{-1}$ has eigenvalues $\lambda_k^{-1} = \overline{\lambda_k}$, again because $|\lambda_k| = 1$; summing, $\chi^{(\mu)}(g^{-1}) = \overline{\chi^{(\mu)}(g)}$. If the class $K_i$ contains $g^{-1}$ along with $g$, the left-hand side is $\chi^{(\mu)}_i$ itself, so $\chi^{(\mu)}_i = \overline{\chi^{(\mu)}_i}$ and the whole column is real. $\square$
:::

:::remark[Where the hypotheses are used, and what the table does not tell you]{provenance=original}
- **Finiteness, twice.** It enters through Maschke's theorem, which needs $|G|$ to be invertible in the field and gives complete reducibility (:ref[]{to=group.representations}), and again in (C5), where an element of a finite group has finite order. Over a field of characteristic $p$ dividing $|G|$ both fail: the representation of $\mathbb{Z}/p$ on $\mathbb{F}_p^{2}$ sending the generator to $\left(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\right)$ has no invariant complement to the span of the first basis vector, so there is no decomposition for a character to record, and modular character theory is a different subject.
- **$\mathbb{C}$, not $\mathbb{R}$.** (C1) is false over $\mathbb{R}$. The cyclic group $C_3 = \langle a \rangle$ has three classes, but only two irreducible *real* representations: the trivial one and the two-dimensional rotation by $2\pi/3$, which is irreducible over $\mathbb{R}$ because a real $2\times 2$ rotation by an angle that is not a multiple of $\pi$ has no real eigenvector. The complex table is $3 \times 3$ with entries $1, \omega, \omega^{2}$; the real array is not square, Step 2 of the proof of (C4) collapses, and the columns are not orthogonal. Everything in this unit is over $\mathbb{C}$.
- **Squareness is exactly Step 2.** If one knew only that rows are orthonormal, the characters would span an $r'$-dimensional subspace of the $r$-dimensional space of class functions with $r' \le r$, and the columns of the resulting $r' \times r$ array would satisfy no relation. The theorem that $r' = r$ — equivalently, that the irreducible characters are a *basis* of the class functions and not merely an orthonormal set — is what (C4) is built on, and it is proved in :ref[]{to=group.orthogonality-characters}.
- **(C5) constrains but does not determine.** Knowing that an entry is a sum of $n_\mu$ $m$th roots of unity cuts the search to a finite set, which is why it is useful by hand, but it alone never finishes a table. In the worked example below it is used only to know that the one-dimensional characters of an element of order $2$ are $\pm 1$.
- **A table is not a group.** The dihedral group of order $8$ and the quaternion group of order $8$ have identical character tables, as Dummit and Foote note on p. 882, yet they are not isomorphic. So no construction in this unit can be inverted: the table records how $G$ acts on complex vector spaces, which is strictly less information than $G$. What the table *does* determine includes the degrees, the class sizes, which classes are inverse to which, the order of $G$, the normal subgroups (as intersections of kernels $\{g : \chi^{(\mu)}(g) = n_\mu\}$), and hence whether $G$ is simple or soluble.
- **Reality is not automatic.** (C5) gives real entries only for classes closed under inversion. The table of $C_3$ above has entries $\omega = e^{2\pi i/3}$, and the two non-trivial characters are complex conjugates of one another, as they must be since $\overline{\chi}$ is again an irreducible character.
:::

:::note[Published tables, and the notation you will meet]{provenance=adapted src="rhb-2006:§29.9, pp. 1102-1103; arfken-2013:§17.4, p. 832"}
Printed tables for the crystallographic point groups are the working form of this material, and their notation is not standardised. Three warnings are worth carrying.

- **$E$ means two things.** It labels a two-dimensional irrep (row heading) and, in chemistry notation, also the identity operation (column heading), so the same symbol can appear in both margins of one table with unrelated meanings. Riley, Hobson and Bence write $I$ for the identity to avoid this, and so does this handbook.
- **Classes are named differently by field.** Crystallographers write $n_z$ for a rotation by $2\pi/n$ about $z$, $\bar n_z$ for the same followed by inversion, and $m_x$ for a mirror in the plane $x = 0$. Chemists write $C_n$, $S_n$ and $\sigma$, with a prefix giving the number of elements in the class, and subscripts $v$, $d$, $h$ distinguishing the orientation of mirror planes.
- **Groups are named differently too.** The symmetries of a square in the plane are $4mm$ to a crystallographer and $C_{4v}$ to a chemist. The same abstract group of order $8$ is $D_4$ to a physicist (the dihedral group of the square) and $D_8$ to an algebraist, who indexes by the order of the group rather than by the order of the rotation. The example below uses the physicist's convention, $D_6$ for the group of order $12$; Dummit and Foote would call it $D_{12}$.

A published table often carries extra right-hand columns listing functions — $z$, $(x,y)$, $x^{2}-y^{2}$, $R_z$ — against the irrep they span. Those columns are not part of the table in the sense of this unit; they are a precomputed answer to the question the next unit asks, and they are what makes selection rules quick to apply (:ref[]{to=group.product-representations}).
:::

:::method[Constructing a character table by hand]{provenance=adapted src="rhb-2006:§29.8, pp. 1100-1102"}
Given a finite group $G$, presented by generators and relations or as a concrete symmetry group:

1. **Find the classes.** Compute the conjugacy classes $K_1, \dots, K_r$ and their sizes $c_i$ (:ref[]{to=group.conjugacy-classes}); check $\sum_i c_i = |G|$. The table will be $r \times r$. If $G$ is abelian, stop and go to step 3: there are $|G|$ classes and $|G|$ characters, all of degree one.
2. **Find the degrees.** The number of degree-one characters is $|G : G'|$, with $G' = [G,G]$ the commutator subgroup; call it $d$. The remaining $r - d$ degrees $n_\mu \ge 2$ satisfy $\sum n_\mu^{2} = |G| - d$ and each $n_\mu$ divides $|G|$, which in small cases leaves one possibility. (Riley, Hobson and Bence reach the same place without computing $G'$, by testing which lists of degrees are compatible with $\sum_\mu n_\mu^{2} = |G|$, with $r$, and with the presence of the trivial character.)
3. **Write down the degree-one characters.** They are the characters of the abelian quotient $G/G'$, pulled back to $G$: choose a decomposition of $G/G'$ into cyclic factors and send a generator of a factor of order $k$ to a $k$th root of unity, in all $d$ possible ways. Each is constant on classes automatically, since $G/G'$ is abelian.
4. **Fill the rest with column orthogonality.** Write unknowns for the remaining rows. Column $i$ against column $1$ gives one linear equation; column $i$ against itself gives $\sum_\mu |\chi^{(\mu)}_i|^{2} = |G|/c_i$, a quadratic one. The already-known rows contribute known numbers to both. Use (C5) to restrict the unknowns to sums of roots of unity before solving.
5. **If a row is still undetermined, use row orthogonality.** The last row of a table is always forced: it must be orthogonal to the $r-1$ rows above it in the weighted inner product, and normalised. (Equivalently, subtract the known rows from the regular character $\chi^{\mathrm{reg}}_i = |G|\,\delta_{i1}$ weighted by degrees.)
6. **Fix the labels.** Assign names $A$, $B$, $E$, $T$ by degree and by the character of the principal rotation, and record the class sizes in the column headings. Permuting rows or columns gives the same table.
7. **Check before using.** Verify every row against every other row with (C2), every column with (C4), and $\sum_\mu n_\mu^{2} = |G|$. Together with the degree sum these are a few dozen arithmetic identities, heavily redundant, and they catch essentially every slip.

To **use** a finished table on a representation $D$ whose character $\psi$ you can compute:

8. **Get $\psi$ class by class.** For a permutation or natural representation, no matrix is needed: $\psi(g)$ is the sum of the diagonal entries, so only basis vectors that $g$ maps into a multiple of themselves contribute. For a permutation action, $\psi(g)$ is the number of fixed points.
9. **Apply (C6)** to get each $m_\mu = (\psi, \chi^{(\mu)})$, and check $\sum_\mu m_\mu n_\mu = \dim D$ and $(\psi,\psi) = \sum_\mu m_\mu^{2}$. If any $m_\mu$ fails to be a non-negative integer, the character $\psi$ was computed wrongly.
:::

:::example[The hexagon group: building the table and using it]{provenance=original}
Let $G = D_6$ be the symmetry group of a regular hexagon,
$$
D_6 \;=\; \bigl\langle\, r, s \;\bigm|\; r^{6} = s^{2} = 1, \ srs^{-1} = r^{-1} \,\bigr\rangle , \qquad |G| = 12 ,
$$
with $r$ the rotation by $\pi/3$ about the centre and $s$ the reflection fixing a pair of opposite vertices. Its twelve elements are $r^{k}$ and $sr^{k}$ for $k = 0, \dots, 5$. (An algebraist writes this group $D_{12}$.)

**Step 1: classes.** From $srs^{-1} = r^{-1}$ we get $r^{j}\,r^{k}r^{-j} = r^{k}$ and $s\,r^{k}s^{-1} = r^{-k}$, so the rotations fall into classes $\{1\}$, $\{r, r^{5}\}$, $\{r^{2}, r^{4}\}$, $\{r^{3}\}$. For the reflections, $r^{j}(sr^{k})r^{-j} = sr^{k-2j}$ and $s(sr^{k})s^{-1} = sr^{-k}$, so $k$ may be shifted by any even number and negated: the reflections split by the parity of $k$ into $\{s, sr^{2}, sr^{4}\}$ and $\{sr, sr^{3}, sr^{5}\}$. Geometrically the first three are the reflections through opposite vertices and the last three those through opposite edge midpoints. Thus $r = 6$ classes with sizes
$$
(c_1, \dots, c_6) \;=\; (1,\,1,\,2,\,2,\,3,\,3) , \qquad \textstyle\sum_i c_i = 12 \ \checkmark
$$
in the order $K_1 = \{1\}$, $K_2 = \{r^{3}\}$, $K_3 = \{r, r^{5}\}$, $K_4 = \{r^{2}, r^{4}\}$, $K_5 = \{s, sr^{2}, sr^{4}\}$, $K_6 = \{sr, sr^{3}, sr^{5}\}$. The table is $6 \times 6$.

**Step 2: degrees.** The commutator $r^{-1}s^{-1}rs = r^{-1}\cdot r^{-1} = r^{-2}$ lies in $G'$, so $G' \supseteq \langle r^{2}\rangle = \{1, r^{2}, r^{4}\}$; and $G/\langle r^{2}\rangle$ has order $4$ and is generated by two commuting involutions, hence abelian, so $G' = \langle r^{2}\rangle$ exactly and $|G : G'| = 4$. There are therefore four degree-one characters, and the other two degrees satisfy $n^{2} + n'^{2} = 12 - 4 = 8$ with $n, n' \ge 2$: the only solution is $n = n' = 2$. Degrees $(1,1,1,1,2,2)$, and indeed $4 \cdot 1 + 2 \cdot 4 = 12 \ \checkmark$.

**Step 3: the four one-dimensional rows.** They are the characters of $G/G' \cong \mathbb{Z}_2 \times \mathbb{Z}_2$, generated by the images of $r$ and $s$, so $\chi(r) = \varepsilon = \pm 1$ and $\chi(s) = \eta = \pm 1$ independently. Then $\chi(r^{3}) = \varepsilon^{3} = \varepsilon$, $\chi(r^{2}) = 1$, $\chi(sr^{k}) = \eta\varepsilon^{k}$. Naming by the convention of the note ($A$ if $\varepsilon = +1$, $B$ if $\varepsilon = -1$):
$$
\begin{array}{l|rrrrrr}
 & K_1 & K_2 & K_3 & K_4 & K_5 & K_6 \\ \hline
A_1 & 1 & 1 & 1 & 1 & 1 & 1\\
A_2 & 1 & 1 & 1 & 1 & -1 & -1\\
B_1 & 1 & -1 & -1 & 1 & 1 & -1\\
B_2 & 1 & -1 & -1 & 1 & -1 & 1
\end{array}
$$

**Step 4: the two two-dimensional rows, from columns alone.** Write the unknown rows as $E_1 = (2, a, b, c, d, e)$ and $E_2 = (2, a', b', c', d', e')$. All entries are real by (C5), because every class here is closed under inversion ($r^{-1} = r^{5}$ lies in $K_3$, and every reflection is its own inverse). Apply (C4) to the pairs of columns $(K_1, K_j)$, using the four known rows:
$$
\underbrace{1 + 1 - 1 - 1}_{\text{from } A_1,A_2,B_1,B_2} + 2a + 2a' = 0 \;\Rightarrow\; a' = -a ,
$$
and in the same way $b' = -b$, $d' = -d$, $e' = -e$, while column $K_4$ gives $1+1+1+1 + 2c + 2c' = 0$, so $c + c' = -2$. Now take each column against itself, where (C4) gives $|G|/c_i$:
$$
\begin{aligned}
K_2 \ (c_2 = 1): &\quad 4 + a^{2} + a'^{2} = 12 \;\Rightarrow\; 2a^{2} = 8 \;\Rightarrow\; a = \pm 2 ,\\
K_3 \ (c_3 = 2): &\quad 4 + b^{2} + b'^{2} = 6 \;\Rightarrow\; b = \pm 1 ,\\
K_4 \ (c_4 = 2): &\quad 4 + c^{2} + c'^{2} = 6 \ \text{ with } c + c' = -2 \;\Rightarrow\; c = c' = -1 ,\\
K_5 \ (c_5 = 3): &\quad 4 + d^{2} + d'^{2} = 4 \;\Rightarrow\; d = d' = 0 , \quad\text{and likewise } e = e' = 0 .
\end{aligned}
$$
One sign is still free in each of $a$ and $b$; the columns $K_2$ and $K_3$ against each other tie them together:
$$
\underbrace{1 \cdot 1 + 1 \cdot 1 + (-1)(-1) + (-1)(-1)}_{A_1,A_2,B_1,B_2} + ab + a'b' \;=\; 4 + 2ab \;=\; 0 \;\Longrightarrow\; ab = -2 .
$$
So $(a,b) = (-2, 1)$ or $(2,-1)$, the two choices differing only by which row is called $E_1$. Taking the first,
$$
\boxed{
\begin{array}{l|rrrrrr}
D_6 & \{1\} & \{r^{3}\} & 2\{r\} & 2\{r^{2}\} & 3\{s\} & 3\{sr\} \\ \hline
A_1 & 1 & 1 & 1 & 1 & 1 & 1\\
A_2 & 1 & 1 & 1 & 1 & -1 & -1\\
B_1 & 1 & -1 & -1 & 1 & 1 & -1\\
B_2 & 1 & -1 & -1 & 1 & -1 & 1\\
E_1 & 2 & -2 & 1 & -1 & 0 & 0\\
E_2 & 2 & 2 & -1 & -1 & 0 & 0
\end{array}}
$$

**Step 5: identify the two-dimensional rows geometrically** (a check, not part of the construction). $E_1$ is the defining action on the plane: $r$ is the rotation by $\pi/3$, of trace $2\cos(\pi/3) = 1 = \chi_{E_1}(K_3)$, $r^{3}$ is the rotation by $\pi$, of trace $-2$, $r^{2}$ has trace $2\cos(2\pi/3) = -1$, and every reflection has trace $0$. $E_2$ sends $r$ to the rotation by $2\pi/3$: this is a homomorphism because $(2\pi/3)\cdot 6 = 4\pi$, and its kernel is $\{1, r^{3}\}$, so $E_2$ is the two-dimensional irrep of $D_6/\langle r^{3}\rangle \cong D_3$ pulled back along the quotient map (:ref[]{to=group.homomorphisms-quotients}). Its characters are $2\cos(2\pi/3) = -1$ on $K_3$, $2\cos(4\pi/3) = -1$ on $K_4$ and $\chi(r^{3}) = \operatorname{tr} I = 2$, as the table says.

**Step 6: the checks of step 7 of the method.** Row $E_1$ against itself: $\tfrac{1}{12}\bigl[1\cdot 4 + 1 \cdot 4 + 2 \cdot 1 + 2 \cdot 1 + 0 + 0\bigr] = \tfrac{12}{12} = 1$. Rows $E_1$ against $E_2$: $\tfrac{1}{12}[1\cdot 4 + 1\cdot(-4) + 2\cdot(-1) + 2\cdot 1] = 0$. Rows $B_1$ against $E_1$: $\tfrac{1}{12}[2 + 2 - 2 - 2 + 0 + 0] = 0$. Column $K_5$ against itself: $1 + 1 + 1 + 1 + 0 + 0 = 4 = 12/3$. Degrees: $1+1+1+1+4+4 = 12$. Every row pair, every column pair and the degree sum check out; the five displayed are representative.

**Step 7: using the table.** Let $D$ be the six-dimensional permutation representation of $D_6$ on the vertices of the hexagon, so $\psi(g)$ is the number of vertices $g$ fixes. Label the vertices $0, \dots, 5$ so that $r$ sends vertex $k$ to vertex $k+1 \pmod 6$ and $s$ sends $k$ to $-k$. Then:
$\psi(1) = 6$; a rotation by $\pi/3$, $2\pi/3$ or $\pi$ moves every vertex, so $\psi = 0$ on $K_2, K_3, K_4$; the reflection $sr^{2m}$ fixes $k$ when $2k \equiv -2m$, which has two solutions, so $\psi = 2$ on $K_5$; the reflection $sr^{2m+1}$ fixes $k$ when $2k \equiv -2m-1 \pmod 6$, which has none, so $\psi = 0$ on $K_6$. Hence
$$
\psi \;=\; (6,\,0,\,0,\,0,\,2,\,0) .
$$
Now (C6), with the weights $c_i$:
$$
\begin{aligned}
m_{A_1} &= \tfrac{1}{12}\bigl[1\cdot 1\cdot 6 + 3\cdot 1 \cdot 2\bigr] = \tfrac{12}{12} = 1 , &
m_{A_2} &= \tfrac{1}{12}\bigl[6 + 3\cdot(-1)\cdot 2\bigr] = 0 ,\\
m_{B_1} &= \tfrac{1}{12}\bigl[6 + 3\cdot 1 \cdot 2\bigr] = 1 , &
m_{B_2} &= \tfrac{1}{12}\bigl[6 + 3\cdot(-1)\cdot 2\bigr] = 0 ,\\
m_{E_1} &= \tfrac{1}{12}\bigl[2 \cdot 6 + 3 \cdot 0 \cdot 2\bigr] = 1 , &
m_{E_2} &= \tfrac{1}{12}\bigl[2\cdot 6 + 3\cdot 0\cdot 2\bigr] = 1 ,
\end{aligned}
$$
(only $K_1$ and $K_5$ contribute, since $\psi$ vanishes elsewhere), so
$$
D \;\simeq\; A_1 \oplus B_1 \oplus E_1 \oplus E_2 , \qquad 1 + 1 + 2 + 2 = 6 = \dim D \ \checkmark .
$$

**Step 8: the checkable number.** The consistency test $(\psi,\psi) = \sum_\mu m_\mu^{2}$ reads
$$
(\psi, \psi) \;=\; \frac{1}{12}\Bigl[1 \cdot 6^{2} + 3 \cdot 2^{2}\Bigr] \;=\; \frac{36 + 12}{12} \;=\; 4 \;=\; 1^{2} + 1^{2} + 1^{2} + 1^{2} .
$$
This number can be obtained a second way, without any character theory. Since $\psi(g)^{2}$ counts the ordered pairs of vertices fixed by $g$, Burnside's counting lemma (:ref[]{to=group.group-actions}) says $(\psi,\psi) = \frac{1}{|G|}\sum_g \psi(g)^{2}$ is the number of orbits of $D_6$ on ordered pairs of vertices. A pair $(j, k)$ is carried by rotations to any pair with the same difference $k - j \bmod 6$, and by reflections to one with the opposite difference, so the orbits are labelled by $\{0\}, \{1,5\}, \{2,4\}, \{3\}$ — the separations $0, 1, 2, 3$ around the hexagon. There are
$$
4
$$
orbits, matching the character computation exactly.
:::

:::application[Degeneracies, spectra and the hexagon that is benzene]{provenance=original}
**Normal modes.** Two normal modes of a vibrating system that some symmetry operation carries into one another must be degenerate in frequency; each such degenerate family spans an irreducible representation of the symmetry group, and its multiplicity of states is that representation's dimension :cite[]{work=rhb-2006 loc="§29.11.3, pp. 1110-1111"}. The recipe is exactly steps 8-9 above: write the $3N$-dimensional representation on the Cartesian displacements of $N$ atoms, compute its character class by class (only atoms left in place by a symmetry operation contribute), decompose, and then subtract the three translations and three rotations, which span known irreps. What is left is the list of vibrational symmetry species with their degeneracies — obtained without ever writing down a force constant, because the character table knows the symmetry and nothing else. The eigenvalue problem itself is :ref[]{to=linalg.normal-modes}.

**Splitting of degenerate levels.** A free atom has $(2\ell+1)$-fold degenerate levels, carrying the irreducible representations of the full rotation group (:ref[]{to=group.so3-su2}). Put the atom in a crystal and only a finite point group $G$ survives; the $(2\ell+1)$-dimensional space is still a representation of $G$, but usually a reducible one, and the multiplicities computed by (C6) say into how many levels the degeneracy splits and what the new degeneracies are. Which of the resulting levels can be reached from which by a given perturbation is the question of :ref[]{to=group.product-representations}.

**Benzene, from the example.** Take the planar group $C_{6v}$ — the same abstract group as the $D_6$ above, with the six vertical mirror planes in the role of the reflections — and the six carbon $2p_z$ orbitals of a benzene ring as basis. These orbitals are unchanged in form by every operation of $C_{6v}$, so a symmetry operation merely permutes them, and the representation they carry is precisely the permutation representation $D$ decomposed in the example:
$$
\Gamma_\pi \;=\; A_1 \oplus B_1 \oplus E_1 \oplus E_2 , \qquad \text{degeneracies } 1, 1, 2, 2 .
$$
Symmetry therefore predicts, before any Hamiltonian is chosen, that the six $\pi$ levels come in a pattern $1, 2, 2, 1$. The Hückel model, in which the matrix is the adjacency matrix of the hexagon scaled by a resonance integral $\beta < 0$ and shifted by $\alpha$, gives energies $\alpha + 2\beta\cos(2\pi k/6)$ for $k = 0, \dots, 5$, that is
$$
\alpha + 2\beta, \qquad \alpha + \beta \ (\text{twice}), \qquad \alpha - \beta \ (\text{twice}), \qquad \alpha - 2\beta ,
$$
degeneracies $1, 2, 2, 1$ — the pattern the table predicted. The all-in-phase combination is the $A_1$ row and the alternating one $(1,-1,1,-1,1,-1)$ is $B_1$: it changes sign under the rotation $r$, as the $-1$ in the $B_1$ row at $K_3$ requires, and is unchanged by a mirror through two opposite atoms, as the $+1$ at $K_5$ requires. Six $\pi$ electrons fill the $A_1$ and $E_1$ levels, leaving the degenerate $E_2$ pair empty as the lowest unoccupied orbitals: the aromatic stability of benzene and the degeneracy of its frontier orbitals are both consequences of the one $6 \times 6$ array built above.

**Where else tables are indispensable.** Crystal and molecular spectroscopy (which lines are allowed, and how many), the classification of electronic bands at symmetry points of a Brillouin zone, the construction of symmetry-adapted basis functions, and the counting of independent components of a material tensor allowed by a crystal class (:ref[]{to=group.point-groups}) all start from a character table and the two inner products of this unit.
:::
