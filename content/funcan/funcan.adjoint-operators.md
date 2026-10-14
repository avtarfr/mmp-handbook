---
id: funcan.adjoint-operators
title: Adjoints, self-adjoint and unitary operators
kind: definition
level: core
summary: Builds the Hilbert adjoint $T^*$ from the Riesz representation theorem, proves the algebraic rules including $\|T^*T\| = \|T\|^2$, and characterises the three classes it defines — self-adjoint, unitary and orthogonal projection operators — together with the elementary consequences a physicist uses, namely real expectation values, norm preservation, and the correspondence between projections and closed subspaces.
prereqs: [funcan.bounded-operators, funcan.riesz-representation, funcan.projection-theorem, funcan.hilbert-spaces, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§3.9, pp. 195–200: Def. 3.9-1 (Hilbert-adjoint operator), Thm 3.9-2 (existence, uniqueness, $\\|T^*\\| = \\|T\\|$) with its sesquilinear-form proof, pp. 196–197; Lemma 3.9-3 (a) and (b) (the zero-operator lemma, and the rotation counterexample on $\\mathbb{R}^2$), pp. 197–198; Thm 3.9-4 (a)–(g) (the algebra of the adjoint, including $\\|T^*T\\| = \\|TT^*\\| = \\|T\\|^2$), pp. 198–200. §3.10, pp. 201–206: Def. 3.10-1 (self-adjoint, unitary, normal), Example 3.10-2 (matrices and the conjugate transpose), pp. 201–203; Thm 3.10-3 ($(Tx,x)$ real iff self-adjoint, on a complex space), p. 204; Thm 3.10-4 (product of self-adjoint operators), p. 204; Thm 3.10-5 (norm limits of self-adjoint operators), p. 205; Thm 3.10-6 (a)–(f) (unitary operators, and isometric-plus-surjective), pp. 205–206; Problems 4 and 12, pp. 207–208 (the splitting $T = T_1 + iT_2$ into self-adjoint parts, and normality as the commuting of those parts). §9.1–9.2: Thm 9.1-1 (real eigenvalues, orthogonal eigenvectors), p. 461; Thm 9.2-2 ($\\|T\\| = \\sup_{\\|x\\|=1}|(Tx,x)|$) with its $v \\pm w$ proof, pp. 466–467"
    pages: "195-208, 461, 466-467"
    role: the definition, the statements and proof routes for existence, for the algebraic rules, for the characterisations of self-adjointness and unitarity, and for the norm formula in terms of $(Tx,x)$; the $\\mathbb{R}^2$ rotation that shows a complex space is needed
  - work: reed-simon-1980
    loc: "§VI.2, pp. 185–188: the Banach-space adjoint $T'$ and Thm VI.2 (the map $T \\mapsto T'$ is an isometry), pp. 185–186; the construction of the Hilbert-space adjoint as $T^* = C^{-1}T'C$ and Thm VI.3 (a)–(f), with $(TS)^* = S^*T^*$, $T^{**} = T$, $(T^{-1})^* = (T^*)^{-1}$ and $\\|T^*T\\| = \\|T\\|^2$, pp. 186–187; the definition of a self-adjoint operator, of a projection ($P^2 = P$) and of an orthogonal projection ($P = P^*$), and the one-to-one correspondence between orthogonal projections and closed subspaces, pp. 187–188. §VI.4: the definition of a positive operator and the proof that a positive operator on a complex Hilbert space is self-adjoint, p. 195"
    pages: "185-188, 195"
    role: the distinction between the Banach and Hilbert adjoints, the conjugate-linearity of $T \\mapsto T^*$, the projection/closed-subspace correspondence, and positivity implying self-adjointness
  - work: stakgold-holst-2011
    loc: "§5.4, pp. 316–319: the construction of the adjoint from the Riesz representation theorem, (5.4.1)–(5.4.2), p. 316; the matrix formula $a^*_{ij} = \\bar a_{ji}$ (5.4.3) and the kernel formula $k^*(x,y) = \\overline{k(y,x)}$ (5.4.4)–(5.4.5), p. 316; the adjoint of the operator with kernel $H(x-y)$, p. 317; the definitions of self-adjoint and symmetric and the statement that a bounded symmetric operator is self-adjoint, p. 317; the rules $(\\alpha A)^* = \\bar\\alpha A^*$ and $(A + \\alpha I)^* = A^* + \\bar\\alpha I$ (5.4.10), p. 317. §5.1, Example 2 (the orthogonal projection, $\\|P\\| = 1$, $R_P = M$, $N_P = M^{\\perp}$), p. 302"
    pages: "302, 316-319"
    role: the explicit adjoint of an integral operator and of a matrix, the symmetric-versus-self-adjoint distinction for bounded operators, and the projection example
  - work: arfken-2013
    loc: "§5.4, pp. 283–286: the postulate that observables are Hermitian and the argument that $\\langle A\\rangle = \\langle\\psi|A|\\psi\\rangle$ is then real, p. 283; a Hermitian operator has a Hermitian matrix, $a_{\\nu\\mu} = a^*_{\\mu\\nu}$, pp. 283–284; Example 5.4.1 (the position and momentum operators $x$ and $p = -i\\,d/dx$ are self-adjoint on $L^2(-\\infty,\\infty)$, the latter by an integration by parts whose boundary terms vanish), pp. 284–285; Example 5.4.3(c) ($AB$ is self-adjoint iff $A$ and $B$ commute), p. 286. §5.5, pp. 287–288: a change between orthonormal bases is effected by a unitary matrix $u_{\\nu\\mu} = \\langle \\varphi'_\\nu | \\varphi_\\mu\\rangle$, with $V = U^{\\dagger}$ and $U^{\\dagger}U = 1$"
    pages: "283-288"
    role: the physics reading — observables, real expectation values, the explicit self-adjointness of $x$ and $p$, and unitary changes of orthonormal basis
  - work: hassani-2013
    loc: "§17.2.1, p. 517: the adjoint defined by $\\langle Tx|y\\rangle = \\langle x|T^{\\dagger}y\\rangle$, Thm 17.2.11 (existence for $T \\in \\mathcal{B}(H)$, with $\\|T\\| = \\|T^{\\dagger}\\|$), and the remark that in infinite dimensions existence has to be proved rather than read off a matrix"
    pages: "517"
    role: the physicists' dagger notation and the point that existence of the adjoint is a theorem, not a definition
---

:::definition[Hilbert adjoint, and the three classes it defines]{provenance=adapted src="kreyszig-1978:Def. 3.9-1, p. 196, and Def. 3.10-1, p. 201; reed-simon-1980:§VI.2, pp. 186–188; hassani-2013:§17.2.1, p. 517"}
Throughout, $H$, $H_1$, $H_2$ are complex Hilbert spaces and the inner product $(x,y)$ is linear in its first slot and conjugate-linear in its second, so that $(y,x) = \overline{(x,y)}$.

Let $T \in \mathcal{B}(H_1,H_2)$. The **Hilbert adjoint** of $T$ is the operator $T^* : H_2 \to H_1$ determined by

$$
(Tx, y) = (x, T^*y) \qquad \text{for all } x \in H_1,\ y \in H_2 .
$$

Part 1 of the statement below says that exactly one such operator exists. Physicists write $T^{\dagger}$ for $T^*$ and, with the inner product conjugate-linear in the *first* slot, state the same equation as $\langle Tx\mid y\rangle = \langle x\mid T^{\dagger}y\rangle$ (:cite[Hassani]{work=hassani-2013 loc="§17.2.1, p. 517"}); the operator defined is the same.

An operator $T \in \mathcal{B}(H)$ is

- **self-adjoint** (or **Hermitian**) if $T^* = T$, that is $(Tx,y) = (x,Ty)$ for all $x,y$;
- **unitary** if $T$ is bijective and $T^* = T^{-1}$;
- **normal** if $TT^* = T^*T$;
- **positive**, written $T \ge 0$, if $(Tx,x) \ge 0$ for all $x$.

Self-adjoint and unitary operators are normal; a normal operator need not be either, as $T = 2iI$ shows ($T^* = -2iI \ne T$, and $T^{-1} = -\tfrac{i}{2}I \ne T^*$).

$P \in \mathcal{B}(H)$ is a **projection** if $P^2 = P$, and an **orthogonal projection** if in addition $P = P^*$. Following the usual practice, "projection" below means orthogonal projection.

For an *unbounded* operator one must distinguish **symmetric** ($(Au,v) = (u,Av)$ for $u,v$ in the domain) from **self-adjoint** (the adjoint has the same domain as well); for bounded operators defined on all of $H$ the two coincide, as :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.4, p. 317"} note. The distinction is the subject of :ref[symmetric versus self-adjoint operators]{to=funcan.symmetric-self-adjoint}.
:::

:::statement[Existence and the algebra of the adjoint]{provenance=adapted src="kreyszig-1978:Thm 3.9-2, pp. 196–197, and Thm 3.9-4, pp. 198–200; reed-simon-1980:Thm VI.3, pp. 186–187; stakgold-holst-2011:(5.4.1)–(5.4.2) and (5.4.10), pp. 316–317"}
Let $S, T \in \mathcal{B}(H_1,H_2)$ and $\alpha$ a scalar.

1. **Existence.** $T^*$ exists, is unique, is linear and bounded, and $\|T^*\| = \|T\|$.
2. **Rules.** $(S+T)^* = S^* + T^*$, $(\alpha T)^* = \bar\alpha\,T^*$, $(T^*)^* = T$, and $(ST)^* = T^*S^*$ whenever the product is defined. If $T$ has a bounded inverse then so does $T^*$, with $(T^*)^{-1} = (T^{-1})^*$. The map $T \mapsto T^*$ is thus a conjugate-linear isometry of $\mathcal{B}(H_1,H_2)$ onto $\mathcal{B}(H_2,H_1)$.
3. **The $C^*$ identity.** $\|T^*T\| = \|TT^*\| = \|T\|^2$; in particular $T^*T = 0$ only if $T = 0$.
4. **Zero-operator lemma.** For $Q \in \mathcal{B}(H_1,H_2)$: $Q = 0$ if and only if $(Qx,y) = 0$ for all $x,y$. If moreover $H_1 = H_2 = H$ is **complex**, then $(Qx,x) = 0$ for all $x$ already forces $Q = 0$.
:::

:::statement[The three classes]{provenance=adapted src="kreyszig-1978:Thm 3.10-3, p. 204, Thm 3.10-4, p. 204, Thm 3.10-5, p. 205, Thm 3.10-6, pp. 205–206, Problems 4 and 12, pp. 207–208, Thm 9.1-1, p. 461, and Thm 9.2-2, pp. 466–467; reed-simon-1980:§VI.2, pp. 187–188, and §VI.4, p. 195"}
Let $H$ be a complex Hilbert space and $T, S, U, V, P \in \mathcal{B}(H)$.

1. **Self-adjointness is the reality of $(Tx,x)$.** $T$ is self-adjoint if and only if $(Tx,x) \in \mathbb{R}$ for every $x \in H$. Consequently every positive operator on a complex $H$ is self-adjoint.
2. **Elementary consequences.** If $T$ is self-adjoint, its eigenvalues are real and eigenvectors belonging to different eigenvalues are orthogonal; the norm is computable from the quadratic form,
   $$
   \|T\| \;=\; \sup_{\|x\| = 1} \bigl|(Tx,x)\bigr| .
   $$
3. **Stability of the class.** A real linear combination of self-adjoint operators is self-adjoint; $ST$ is self-adjoint if and only if $ST = TS$; and a norm limit of self-adjoint operators is self-adjoint. Every $T \in \mathcal{B}(H)$ splits uniquely as $T = T_1 + iT_2$ with $T_1 = \tfrac12(T+T^*)$ and $T_2 = \tfrac{1}{2i}(T - T^*)$ self-adjoint, and $T$ is normal exactly when $T_1T_2 = T_2T_1$; these last two are Problems 4 and 12 of :cite[Kreyszig]{work=kreyszig-1978 loc="§3.10, pp. 207–208"}, proved below.
4. **Unitary operators.** If $U$ and $V$ are unitary then $U$ is isometric, $\|Ux\| = \|x\|$ for all $x$; $\|U\| = 1$ when $H \ne \{0\}$; $U^{-1} = U^*$ is unitary; $UV$ is unitary; and $U$ is normal. Conversely, a bounded linear $T$ on a complex $H$ is unitary **if and only if it is both isometric and surjective**. An isometry need not be unitary, the right shift on $\ell^2$ being an isometry whose range is a proper closed subspace.
5. **Projections.** For $P \in \mathcal{B}(H)$ with $P^2 = P = P^*$, the range $R(P)$ is a closed subspace, $N(P) = R(P)^{\perp}$, $P$ acts as the identity on $R(P)$ and as $0$ on $R(P)^{\perp}$, and $\|P\| = 1$ unless $P = 0$. Conversely each closed subspace $M \subseteq H$ carries exactly one orthogonal projection $P_M$, namely the map sending $x$ to its component in $M$ under the decomposition $H = M \oplus M^{\perp}$ of :ref[the projection theorem]{to=funcan.projection-theorem}. Closed subspaces and orthogonal projections therefore label one another, each determining the other uniquely.
:::

:::idea{provenance=original}
The adjoint exists for one reason: in a Hilbert space every bounded linear functional is an inner product with a fixed vector. Hold $y$ fixed and look at $x \mapsto (Tx,y)$. It is linear in $x$ and bounded by $\|T\|\,\|y\|\,\|x\|$, so :ref[the Riesz representation theorem]{to=funcan.riesz-representation} hands us a unique vector to pair $x$ with. Calling that vector $T^*y$ defines the adjoint, and every algebraic rule is then obtained by moving operators across the inner product one at a time and appealing to uniqueness.

The three classes are what one gets by asking how $T$ interacts with the geometry. Self-adjointness says $T$ is "real" with respect to the inner product, and the honest version of that statement is part 1 of the second statement block: $(Tx,x)$, the quantity a physicist calls an expectation value, is a real number. Unitarity says $T$ preserves the geometry outright: lengths, hence angles, hence orthonormal bases. A projection says $T$ *is* a piece of the geometry — it names a closed subspace and forgets everything orthogonal to it.

Two proofs deserve advance warning. The $C^*$ identity $\|T^*T\| = \|T\|^2$ comes from reading $\|Tx\|^2 = (T^*Tx,x)$ in both directions, and it is much stronger than the submultiplicative bound. And the converse half of part 1 — $(Tx,x)$ real $\Rightarrow$ $T$ self-adjoint — needs complex scalars, because it is proved by evaluating a quadratic form at $x + y$ and at $x + iy$ and subtracting; a real space has no second evaluation to make.
:::

:::proof[Existence, the rules, and the $C^*$ identity]{provenance=adapted src="kreyszig-1978:Thm 3.9-2, pp. 196–197, Lemma 3.9-3, pp. 197–198, Thm 3.9-4, pp. 198–200; stakgold-holst-2011:(5.4.1)–(5.4.2), p. 316"}
**Part 1: existence and uniqueness.** Fix $y \in H_2$ and consider $\varphi_y : H_1 \to \mathbb{C}$, $\varphi_y(x) = (Tx,y)$. It is linear in $x$ because $T$ is linear and the inner product is linear in its first slot, and bounded because $|\varphi_y(x)| \le \|Tx\|\,\|y\| \le \|T\|\,\|y\|\,\|x\|$ by Cauchy-Schwarz. **Here $H_1$ must be complete**, since :ref[the Riesz representation theorem]{to=funcan.riesz-representation} is what we invoke next: there is exactly one $z \in H_1$ with $\varphi_y(x) = (x,z)$ for all $x$. Define $T^*y = z$; the defining identity holds by construction, and uniqueness of $z$ for each $y$ makes $T^*$ well defined. If $S$ also satisfies $(Tx,y) = (x,Sy)$ then $(x, (S - T^*)y) = 0$ for all $x$; taking $x = (S-T^*)y$ gives $S = T^*$.

*Linearity.* For scalars $\alpha,\beta$ and $y_1,y_2 \in H_2$ and every $x$,
$$
\bigl(x, T^*(\alpha y_1 + \beta y_2)\bigr) = (Tx, \alpha y_1 + \beta y_2) = \bar\alpha (Tx,y_1) + \bar\beta(Tx,y_2) = \bigl(x, \alpha T^*y_1 + \beta T^*y_2\bigr) ,
$$
using conjugate-linearity in the second slot twice, so the two vectors agree.

*The norm.* Putting $x = T^*y$ in the defining identity gives $\|T^*y\|^2 = (T(T^*y), y) \le \|T\|\,\|T^*y\|\,\|y\|$, whence $\|T^*y\| \le \|T\|\,\|y\|$ and $\|T^*\| \le \|T\|$. Rule $(T^*)^* = T$, proved next, then gives $\|T\| = \|(T^*)^*\| \le \|T^*\|$, so the two norms are equal.

**Part 4: the zero-operator lemma** (proved here because the rules use it). If $Q = 0$ then certainly $(Qx,y) = 0$ for all $x,y$. Conversely, taking $y = Qx$ gives $\|Qx\|^2 = 0$ for every $x$. For the second sentence, let $H$ be complex and $(Qv,v) = 0$ for every $v \in H$. Expand with $v = x + \alpha y$:
$$
0 = (Q(x+\alpha y), x + \alpha y) = (Qx,x) + \bar\alpha(Qx,y) + \alpha(Qy,x) + |\alpha|^2 (Qy,y) = \bar\alpha(Qx,y) + \alpha(Qy,x) .
$$
Taking $\alpha = 1$ gives $(Qx,y) + (Qy,x) = 0$. Taking $\alpha = i$, so $\bar\alpha = -i$, gives $-i(Qx,y) + i(Qy,x) = 0$, that is $(Qx,y) - (Qy,x) = 0$. Adding the two and halving gives $(Qx,y) = 0$ for all $x,y$, so $Q = 0$ by the first sentence. **The choice $\alpha = i$ is the step that needs complex scalars.**

**Part 2: the rules.** Each is the same move. For additivity, $(x,(S+T)^*y) = ((S+T)x,y) = (Sx,y) + (Tx,y) = (x,S^*y) + (x,T^*y) = (x,(S^*+T^*)y)$, and uniqueness finishes. For $(\alpha T)^*$, $(x,(\alpha T)^*y) = (\alpha Tx, y) = \alpha (Tx,y) = \alpha(x,T^*y) = (x,\bar\alpha T^*y)$ — the conjugate appears because the scalar must cross the second slot. For $(T^*)^*$, note first that the defining identity read backwards is $(T^*y,x) = \overline{(x,T^*y)} = \overline{(Tx,y)} = (y,Tx)$; comparing with the definition of $(T^*)^*$ applied to $T^*$ gives $(T^*)^* = T$. For the composite, $(x,(ST)^*y) = (STx,y) = (Tx,S^*y) = (x,T^*S^*y)$. For the inverse, apply the composite rule to $T^{-1}T = I = TT^{-1}$ and use $I^* = I$: $T^*(T^{-1})^* = I = (T^{-1})^*T^*$.

**Part 3: the $C^*$ identity.** By Cauchy-Schwarz and part 1,
$$
\|Tx\|^2 = (Tx,Tx) = (T^*Tx, x) \le \|T^*Tx\|\,\|x\| \le \|T^*T\|\,\|x\|^2 ,
$$
so taking the supremum over $\|x\| = 1$ gives $\|T\|^2 \le \|T^*T\|$. In the other direction submultiplicativity (:ref[bounded linear operators]{to=funcan.bounded-operators}) and $\|T^*\| = \|T\|$ give $\|T^*T\| \le \|T^*\|\,\|T\| = \|T\|^2$. Hence $\|T^*T\| = \|T\|^2$; replacing $T$ by $T^*$ and using $(T^*)^* = T$ gives $\|TT^*\| = \|T^*\|^2 = \|T\|^2$. Finally $T^*T = 0$ forces $\|T\|^2 = 0$. $\square$
:::

:::proof[The three classes]{provenance=adapted src="kreyszig-1978:Thm 3.10-3, p. 204, Thm 3.10-6, pp. 205–206, Thm 9.1-1, p. 461, Thm 9.2-2, pp. 466–467; reed-simon-1980:§VI.2, pp. 187–188, §VI.4, p. 195"}
**Part 1: self-adjointness and the reality of $(Tx,x)$.** Put $Q = T - T^*$. Using $(T^*x,x) = \overline{(x,T^*x)} = \overline{(Tx,x)}$,
$$
(Qx,x) = (Tx,x) - \overline{(Tx,x)} = 2i\,\operatorname{Im}(Tx,x) .
$$
So $(Tx,x)$ is real for every $x$ precisely when $(Qx,x) = 0$ for every $x$, and on a **complex** $H$ that is equivalent to $Q = 0$, that is $T = T^*$, by part 4 above. If $T \ge 0$ then $(Tx,x)$ is real by assumption, so $T$ is self-adjoint.

**Part 2: eigenvalues, eigenvectors and the norm.** Let $T = T^*$. If $Tx = \lambda x$ with $x \ne 0$, then $\lambda\|x\|^2 = (Tx,x)$ is real by part 1 and $\|x\|^2 > 0$, so $\lambda \in \mathbb{R}$. If also $Ty = \mu y$ with $\mu \ne \lambda$, then, $\mu$ being real,
$$
\lambda (x,y) = (Tx,y) = (x,Ty) = (x,\mu y) = \bar\mu (x,y) = \mu(x,y) ,
$$
so $(\lambda - \mu)(x,y) = 0$ and $(x,y) = 0$.

For the norm, write $K = \sup_{\|x\|=1}|(Tx,x)|$. Cauchy-Schwarz gives $|(Tx,x)| \le \|Tx\|\,\|x\| \le \|T\|$ on the unit sphere, so $K \le \|T\|$. For the reverse, note first that $|(Ty,y)| \le K\|y\|^2$ for every $y$, by scaling. Take a unit vector $z$ with $Tz \ne 0$ (if there is none, $T = 0$ and there is nothing to prove) and set
$$
v = \|Tz\|^{1/2}z, \qquad w = \|Tz\|^{-1/2}Tz, \qquad y_1 = v+w,\quad y_2 = v-w ,
$$
so $\|v\|^2 = \|w\|^2 = \|Tz\|$ and $(Tv,w) = (Tz,Tz) = \|Tz\|^2$. Expanding and using self-adjointness, $(Tw,v) = (w,Tv) = \overline{(Tv,w)} = \|Tz\|^2$, so the cross terms survive and the diagonal ones cancel:
$$
(Ty_1,y_1) - (Ty_2,y_2) = 2\bigl[(Tv,w) + (Tw,v)\bigr] = 4\|Tz\|^2 .
$$
On the other hand, by the triangle inequality, the bound $|(Ty,y)| \le K\|y\|^2$ and the parallelogram law $\|y_1\|^2 + \|y_2\|^2 = 2(\|v\|^2 + \|w\|^2)$,
$$
\bigl|(Ty_1,y_1) - (Ty_2,y_2)\bigr| \le K\bigl(\|y_1\|^2 + \|y_2\|^2\bigr) = 2K\bigl(\|v\|^2 + \|w\|^2\bigr) = 4K\|Tz\| .
$$
Comparing, $4\|Tz\|^2 \le 4K\|Tz\|$, so $\|Tz\| \le K$; taking the supremum over unit $z$ gives $\|T\| \le K$.

**Part 3: stability.** If $S^* = S$, $T^* = T$ and $a,b \in \mathbb{R}$, then $(aS+bT)^* = \bar a S^* + \bar b T^* = aS + bT$. For the product, $(ST)^* = T^*S^* = TS$, so $ST$ is self-adjoint exactly when $ST = TS$. For a norm limit $T_n \to T$ with each $T_n$ self-adjoint, $\|T - T^*\| \le \|T - T_n\| + \|T_n - T_n^*\| + \|T_n^* - T^*\| = 2\|T-T_n\| \to 0$, using $\|T_n^* - T^*\| = \|(T_n - T)^*\| = \|T_n - T\|$ from part 1 of the previous block; so $T = T^*$. The splitting $T = T_1 + iT_2$ is checked by computing $T_1^*$ and $T_2^*$ from the rules, and uniqueness follows because $T_1 + iT_2 = S_1 + iS_2$ with all four self-adjoint gives $T_1 - S_1 = i(S_2 - T_2)$, whose adjoint is $T_1 - S_1 = -i(S_2-T_2)$; adding, $T_1 = S_1$. Finally, expanding with $T_1^* = T_1$, $T_2^* = T_2$,
$$
TT^* = (T_1+iT_2)(T_1-iT_2) = T_1^2 + T_2^2 + i(T_2T_1 - T_1T_2) ,
$$
$$
T^*T = (T_1-iT_2)(T_1+iT_2) = T_1^2 + T_2^2 + i(T_1T_2 - T_2T_1) ,
$$
so $TT^* = T^*T$ if and only if $T_1T_2 = T_2T_1$.

**Part 4: unitary operators.** Let $U$ be unitary. Then $\|Ux\|^2 = (Ux,Ux) = (x,U^*Ux) = (x,x) = \|x\|^2$, so $U$ is isometric, and $\|U\| = 1$ once $H \ne \{0\}$. Since $U$ is bijective, $(U^{-1})^* = (U^*)^* = U = (U^{-1})^{-1}$, so $U^{-1}$ is unitary; and $(UV)^* = V^*U^* = V^{-1}U^{-1} = (UV)^{-1}$, so $UV$ is unitary. Normality is $U^*U = UU^* = I$.

Conversely let $T$ be isometric and surjective. Isometry gives injectivity, so $T$ is bijective. From $\|Tx\| = \|x\|$,
$$
(T^*Tx,x) = (Tx,Tx) = (x,x) = (Ix,x) \quad\text{for all } x ,
$$
so $((T^*T - I)x,x) = 0$ for all $x$ and, **$H$ being complex**, $T^*T = I$ by part 4 of the previous block. Multiplying on the right by $T^{-1}$, which exists, gives $T^* = T^{-1}$.

**Part 5: projections.** Let $P^2 = P = P^*$ and put $M = R(P)$. If $x \in M$, say $x = Pu$, then $Px = P^2u = Pu = x$: $P$ is the identity on $M$. Hence $M = \{x : Px = x\} = N(I - P)$, which is closed because $I - P$ is bounded (:ref[bounded linear operators]{to=funcan.bounded-operators}). For any $x$ and any $u$, $(x - Px, Pu) = (Px,u) - (P^*Px,u) = (Px,u) - (P^2x,u) = 0$, so $x - Px \perp M$; thus $x = Px + (x - Px)$ is the decomposition of $x$ in $H = M \oplus M^{\perp}$, which identifies $P$ as the orthogonal projection onto $M$ and gives $N(P) = M^{\perp}$. By Pythagoras $\|x\|^2 = \|Px\|^2 + \|x - Px\|^2 \ge \|Px\|^2$, so $\|P\| \le 1$, with equality as soon as $M \ne \{0\}$ because $P$ fixes the unit vectors of $M$.

Conversely, given a closed $M$, :ref[the projection theorem]{to=funcan.projection-theorem} writes each $x$ uniquely as $x = m + m^{\perp}$; set $P_Mx = m$. Linearity and $P_M^2 = P_M$ follow from uniqueness of the decomposition, and for $x = m + m^{\perp}$, $y = n + n^{\perp}$,
$$
(P_Mx, y) = (m, n + n^{\perp}) = (m,n) = (m + m^{\perp}, n) = (x, P_My) ,
$$
so $P_M^* = P_M$. Distinct closed subspaces give distinct projections because $M = R(P_M)$, so the correspondence is one-to-one. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Completeness of $H_1$ is used once, in the existence proof**, through the Riesz representation theorem. On an inner-product space that is not complete, a bounded operator can fail to have an adjoint, because the functional $x \mapsto (Tx,y)$ may have no representing vector.
- **Complex scalars are needed in two places**, and both are genuine. The implication "$(Tx,x)$ real $\Rightarrow$ $T$ self-adjoint" fails on $\mathbb{R}^2$: :cite[Kreyszig's]{work=kreyszig-1978 loc="§3.9, p. 198"} counterexample is the rotation $Q$ through a right angle, for which $Qx \perp x$ and hence $(Qx,x) = 0$ for every $x$, although $Q \ne 0$. (On a real space $(Tx,x)$ is automatically real, so the criterion has no content there.) The same gap closes the converse half of part 4 of the second statement: the argument that an isometric surjection is unitary runs through the same lemma.
- **Surjectivity is what separates "unitary" from "isometric".** The right shift $S$ on $\ell^2$ has $S^*S = I$, so it preserves norms and inner products, yet $SS^* \ne I$: $S^*$ is the left shift, and $SS^*$ is the projection killing the first coordinate. An isometry of a *finite-dimensional* space is automatically surjective, which is why the distinction is invisible for matrices.
- **Bounded plus everywhere-defined is what makes "symmetric" and "self-adjoint" the same.** For an unbounded operator the condition $(Au,v) = (u,Av)$ on a domain $D_A$ says only that $A^*$ extends $A$; self-adjointness additionally pins down the domain of $A^*$. :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§5.4, Example 1, pp. 318–319"} $T_1u = u'$ with $u(0) = 0$ on $L^2(0,1)$ has $T_1^*v = -v'$ with $v(1) = 0$: both the sign and the boundary condition move. See :ref[symmetric versus self-adjoint operators]{to=funcan.symmetric-self-adjoint}.
- **"Product of self-adjoint operators" needs commutativity, not merely self-adjointness.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.4, Example 5.4.3(c), p. 286"} make the point in the physics setting: $AB$ is an observable only when $A$ and $B$ commute. For $A = \hat x$ and $B = \hat p$ the product is not self-adjoint, while the symmetrised combination $\tfrac12(\hat x\hat p + \hat p\hat x)$ is.
- **$P^2 = P$ alone is weaker than $P^2 = P = P^*$.** On $\mathbb{C}^2$ the matrix $\begin{pmatrix}1&1\\0&0\end{pmatrix}$ is idempotent, so it is a projection in the algebraic sense, but it is not self-adjoint; it projects along a direction that is not orthogonal to its range, and its norm is $\sqrt2 > 1$. The identity $\|P\| = 1$ is therefore a statement about orthogonality, not about idempotence.
- **The $C^*$ identity is strictly stronger than submultiplicativity**, and it is what makes $\|T\|$ recoverable from the self-adjoint operator $T^*T$. It is also the reason the operator norm cannot be replaced by, say, the Hilbert-Schmidt norm in these arguments: that norm is submultiplicative but does not satisfy $\|T^*T\| = \|T\|^2$.
:::

:::method[Computing an adjoint]{provenance=original}
Write down $(Tu,v)$, push $T$ across the inner product by whatever identity the space provides, and read off what acts on $v$.

1. **Matrices.** In an orthonormal basis, the matrix of $T^*$ is the conjugate transpose of that of $T$: $a^*_{ij} = \overline{a_{ji}}$ (:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.4, (5.4.3), p. 316"}). Self-adjoint means Hermitian, unitary means $U^{\dagger}U = I$; see :ref[Hermitian matrices]{to=linalg.hermitian-spectral-theorem} and :ref[unitary and orthogonal matrices]{to=linalg.unitary-orthogonal-matrices}. In a *non*-orthonormal basis this is false — the Gram matrix intervenes.
2. **Integral operators.** For $(Ku)(x) = \int_a^b k(x,y)u(y)\,dy$ on $L^2(a,b)$, interchanging the order of integration (legitimate by :ref[Fubini's theorem]{to=measure.fubini-tonelli} when $k$ is square-integrable) gives
   $$
   k^*(x,y) = \overline{k(y,x)} ,
   $$
   so $K$ is self-adjoint exactly when $k(x,y) = \overline{k(y,x)}$ — for a real kernel, exactly when it is symmetric. Thus the Volterra kernel $k(x,y) = H(x-y)$ of :ref[bounded linear operators]{to=funcan.bounded-operators} has adjoint kernel $H(y-x)$, that is $(A^*z)(x) = \int_x^1 z(y)\,dy$.
3. **Shift and diagonal operators.** Read off the adjoint on an orthonormal basis from $(T^*e_j, e_i) = \overline{(Te_i,e_j)}$. The right shift's adjoint is the left shift; the adjoint of $u \mapsto (m_ju_j)_j$ on $\ell^2$ is $u \mapsto (\overline{m_j}u_j)_j$, which is self-adjoint exactly for real $m_j$.
4. **Differential operators.** Integrate by parts and keep the boundary terms: they decide the domain of the adjoint, and a formally self-adjoint expression may still fail to be self-adjoint. This is the route of :ref[adjoint and self-adjoint differential operators]{to=ode.self-adjoint-operators}.
5. **To check unitarity**, verify $\|Tx\| = \|x\|$ (equivalently $T^*T = I$) *and* surjectivity. Checking only the first gives an isometry.
6. **To recognise a projection**, verify $P^2 = P$ and $P = P^*$; then $R(P)$ is the subspace it projects onto and $\|P\| = 1$.
:::

:::example[A self-adjoint integral operator, diagonalised by hand]{provenance=original}
On $H = L^2(0,1)$ let

$$
(Ku)(x) = \int_0^1 (x+y)\,u(y)\,dy .
$$

**Step 1: $K$ is self-adjoint.** The kernel $k(x,y) = x+y$ is real and symmetric, so $\overline{k(y,x)} = y + x = k(x,y)$ and rule 2 of the method gives $K^* = K$. It is bounded, by the Hilbert-Schmidt estimate of :ref[bounded linear operators]{to=funcan.bounded-operators}:

$$
\|K\| \le \Bigl[\int_0^1\!\!\int_0^1 (x+y)^2dx\,dy\Bigr]^{1/2} = \Bigl[\tfrac13 + 2\cdot\tfrac14 + \tfrac13\Bigr]^{1/2} = \sqrt{7/6} = 1.0801234 .
$$

**Step 2: $K$ has rank two.** Writing $a = \int_0^1 u$ and $b = \int_0^1 y\,u(y)\,dy$,

$$
(Ku)(x) = a\,x + b ,
$$

so the range lies in $\operatorname{span}\{1,x\}$, and $N(K) = \{u : a = b = 0\} = \operatorname{span}\{1,x\}^{\perp}$.

**Step 3: the eigenvalue problem.** Look for $u = \alpha + \beta x$ with $Ku = \lambda u$. Then $a = \alpha + \beta/2$ and $b = \alpha/2 + \beta/3$, and matching the constant and linear coefficients of $Ku = b + ax$ against $\lambda\alpha + \lambda\beta x$ gives

$$
\lambda\begin{pmatrix}\alpha\\ \beta\end{pmatrix} = M\begin{pmatrix}\alpha\\ \beta\end{pmatrix},
\qquad
M = \begin{pmatrix} 1/2 & 1/3 \\ 1 & 1/2 \end{pmatrix} .
$$

(The matrix is not symmetric because $\{1,x\}$ is not orthonormal; self-adjointness of $K$ is a statement about the inner product, not about this array.) Its trace is $1$ and its determinant is $\tfrac14 - \tfrac13 = -\tfrac{1}{12}$, so $\lambda^2 - \lambda - \tfrac1{12} = 0$ and

$$
\lambda_{1,2} = \frac{1}{2} \pm \frac{1}{\sqrt3}:
\qquad \lambda_1 = 1.0773503, \qquad \lambda_2 = -0.0773503 .
$$

Both are real, as part 2 of the second statement requires. The eigenvectors come from $(\tfrac12 - \lambda)\alpha + \tfrac13\beta = 0$, that is $\beta = \pm\sqrt3\,\alpha$:

$$
u_1(x) = 1 + \sqrt3\,x \ \ (\lambda_1), \qquad u_2(x) = 1 - \sqrt3\,x \ \ (\lambda_2) .
$$

**Step 4: orthogonality, as predicted.** The eigenvalues differ, so the eigenvectors must be orthogonal, and they are:

$$
(u_1,u_2) = \int_0^1 (1+\sqrt3 x)(1-\sqrt3 x)\,dx = \int_0^1 (1 - 3x^2)\,dx = 1 - 1 = 0 .
$$

Their norms are $\|u_1\|^2 = \int_0^1(1+\sqrt3x)^2dx = 1 + \sqrt3 + 1 = 2+\sqrt3 = 3.7320508$ and, likewise, $\|u_2\|^2 = 2 - \sqrt3 = 0.2679492$.

**Step 5: the norm of $K$.** Put $\hat u_j = u_j/\|u_j\|$. Then $\{\hat u_1,\hat u_2\}$ is an orthonormal basis of $\operatorname{span}\{1,x\}$ and $H = \operatorname{span}\{\hat u_1,\hat u_2\}\oplus N(K)$. For $u = c_1\hat u_1 + c_2\hat u_2 + w$ with $w \in N(K)$,

$$
\|Ku\|^2 = \lambda_1^2|c_1|^2 + \lambda_2^2|c_2|^2 \le \lambda_1^2\bigl(|c_1|^2 + |c_2|^2\bigr) \le \lambda_1^2\|u\|^2 ,
$$

with equality at $u = \hat u_1$. Hence

$$
\|K\| = \lambda_1 = \frac12 + \frac{1}{\sqrt3} = 1.0773503 ,
$$

which is $99.74\%$ of the Hilbert-Schmidt bound $\sqrt{7/6}$ of step 1 — a much tighter bound than for the Volterra operator, because here one eigenvalue dominates the other by a factor of nearly $14$.

**Step 6: checks.** The quadratic-form formula of part 2 agrees: $(K\hat u_1,\hat u_1) = \lambda_1 = 1.0773503$, so the supremum $\sup_{\|u\|=1}|(Ku,u)|$ is at least $\|K\|$, and by the theorem it equals it. Directly, at $x = 0.4$, $\int_0^1(0.4+y)(1+\sqrt3y)\,dy = 1.8237604$ and $\lambda_1 u_1(0.4) = 1.0773503 \times 1.6928203 = 1.8237604$. Discretising the kernel on a $3000$-point grid and diagonalising numerically returns eigenvalues $1.0773503$ and $-0.0773503$ with all others of size $10^{-15}$, confirming both the values and the rank.
:::

:::example[A unitary operator and a projection on the same space]{provenance=original}
Still on $L^2(0,1)$, with $(e_n)_{n\ge1}$ the orthonormal basis $e_n(x) = \sqrt2\cos\bigl((2n-1)\pi x/2\bigr)$ used in :ref[bounded linear operators]{to=funcan.bounded-operators}.

**A unitary operator.** Let $(Uu)(x) = e^{2\pi i x}u(x)$. Then $|e^{2\pi ix}| = 1$ gives $\|Uu\| = \|u\|$, so $U$ is isometric; and $U$ is surjective because $v \mapsto e^{-2\pi ix}v$ inverts it. By part 4 of the second statement $U$ is unitary, and indeed $(U^*v)(x) = \overline{e^{2\pi ix}}\,v(x) = e^{-2\pi ix}v(x)$, which is $U^{-1}$. Note $U$ is not self-adjoint: $(Uu,u) = \int_0^1 e^{2\pi ix}|u(x)|^2dx$ is not real in general — for $u \equiv 1$ it is $0$, but for $u(x) = \sqrt{2}\,\chi_{(0,1/2)}(x)$ it is $2\int_0^{1/2}e^{2\pi ix}dx = 2i/\pi = 0.6366198\,i$, which is purely imaginary and non-zero.

**A projection.** Let $P$ be the orthogonal projection onto $M = \operatorname{span}\{e_1,e_2\}$, that is $Pu = (u,e_1)e_1 + (u,e_2)e_2$. Then $P^2 = P = P^*$ by direct computation, $\|P\| = 1$, and for the particular function $u \equiv 1$,

$$
(u,e_n) = \sqrt2\int_0^1\cos\bigl(\omega_n x\bigr)dx = \frac{\sqrt2}{\omega_n}\sin\omega_n = \frac{\sqrt2\,(-1)^{n+1}}{\omega_n}, \qquad \omega_n = \frac{(2n-1)\pi}{2} ,
$$

so $(u,e_1) = 2\sqrt2/\pi = 0.9003163$ and $(u,e_2) = -2\sqrt2/(3\pi) = -0.3001054$. Hence $\|Pu\|^2 = 0.8105695 + 0.0900633 = 0.9006328$ and $\|u - Pu\| = \sqrt{1 - 0.9006328} = 0.3152257$: two terms of the expansion already capture $90.06\%$ of the energy of the constant function. Parseval's identity (:ref[orthonormal bases]{to=funcan.orthonormal-bases}) confirms the total, since $\sum_{n\ge1} 8/\bigl((2n-1)^2\pi^2\bigr) = (8/\pi^2)(\pi^2/8) = 1 = \|u\|^2$.
:::

:::application{provenance=original}
**Quantum mechanics.** An observable is a self-adjoint operator, and part 1 of the second statement is the reason: the expectation value $\langle A\rangle = (A\psi,\psi)$ of an observable in a normalised state must be a real number, and self-adjointness is exactly the condition that makes it so for every state — this is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="§5.4, p. 283"} opening argument. Reality of eigenvalues says the possible measurement outcomes are real; orthogonality of eigenvectors for distinct eigenvalues says distinguishable outcomes correspond to orthogonal states. A measurement projects the state onto an eigenspace, which is an orthogonal projection, and $\|P\psi\|^2$ is the probability of the outcome. Time evolution $U(t) = e^{-iHt/\hbar}$ is unitary precisely because $H$ is self-adjoint, so probability is conserved; see :ref[Stone's theorem and unitary groups]{to=funcan.stone-theorem}. The position and momentum operators are shown self-adjoint on $L^2(\mathbb{R})$ by :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.4, Example 5.4.1, pp. 284–285"} — for $p = -i\,d/dx$ the integration by parts must have vanishing boundary terms, which is the first sign that domains will matter.

**Changes of basis.** A transformation between two orthonormal bases is a unitary operator with matrix $u_{\nu\mu} = (\varphi'_{\nu},\varphi_\mu)$, and $U^{\dagger}U = I$ is exactly the statement that going to the new basis and back is the identity (:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.5, pp. 287–288"}). The same fact is why the Fourier transform, being unitary on $L^2$ by :ref[Plancherel's theorem]{to=fourier.plancherel}, preserves energy, and why discrete orthogonal transforms used in signal compression are numerically stable.

**Least squares and the normal equations.** For $A \in \mathcal{B}(H_1,H_2)$, minimising $\|Ax - b\|$ leads to $A^*Ax = A^*b$, because the residual must be orthogonal to the range of $A$; the operator $A^*A$ is self-adjoint and positive, and $\|A^*A\| = \|A\|^2$ is the statement that the condition number squares. See :ref[projections and least squares]{to=linalg.projections-least-squares} and :ref[the singular value decomposition]{to=linalg.svd}.

**Boundary value problems.** A Sturm-Liouville operator is made self-adjoint by the right boundary conditions, and that self-adjointness is what delivers real eigenvalues, orthogonal eigenfunctions and a usable expansion; see :ref[Sturm-Liouville eigenvalue problems]{to=ode.sturm-liouville-theory} and :ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}. The same mechanism in integral form, with a symmetric kernel, is :ref[Hilbert-Schmidt theory]{to=green.hilbert-schmidt}; the general statement is :ref[the spectral theorem for compact self-adjoint operators]{to=funcan.compact-self-adjoint}.

**Statistics.** The covariance operator of a square-integrable random field is self-adjoint and positive, so its eigenfunctions are orthogonal and real-eigenvalued; that is the principal-component decomposition, and in finite dimensions it is the spectral theorem for the covariance matrix.
:::
