---
id: funcan.spectral-theorem-general
title: The spectral theorem
kind: theorem
level: advanced
summary: States and proves the spectral theorem for a possibly unbounded self-adjoint operator in its three equivalent forms - unitary equivalence with a multiplication operator, a Borel functional calculus, and a projection-valued measure - and shows on the momentum operator how the three are read off from one another.
prereqs: [funcan.symmetric-self-adjoint, funcan.unbounded-operators, funcan.adjoint-operators, funcan.bounded-operators, funcan.spectrum, funcan.hilbert-spaces, funcan.orthonormal-bases, funcan.uniform-boundedness-open-mapping, found.zorn-lemma, measure.lebesgue-integral, measure.sigma-algebras-measures, measure.lp-spaces, measure.monotone-convergence-fatou, measure.dominated-convergence]
provenance: adapted
sources:
  - work: reed-simon-1980
    loc: "Ch. VI, §VI.3, Thm VI.6 (spectral radius; $r(A)=\\lVert A\\rVert$ for self-adjoint $A$), p. 192. Ch. VII: §VII.1, Thm VII.1 (continuous functional calculus) with Lemmas 1 and 2 and their proofs, pp. 221-224; §VII.2, the spectral measures $\\mu_\\psi$ built from the Riesz-Markov theorem and Thm VII.2 (Borel functional calculus), pp. 224-225, the definition of a cyclic vector, Lemma 1 (cyclic case) with its proof and Lemma 2 (cyclic decomposition), pp. 226-227, Thm VII.3 (multiplication-operator form) with its corollary and the Dirac-notation remark, pp. 227-228, the essential range, the proposition $\\sigma(A)=\\operatorname{supp}\\{\\mu_n\\}$ and Example 4 (the Fourier transform as a spectral representation), p. 229, and Thm VII.4 with the definitions of $\\sigma_{\\mathrm{pp}},\\sigma_{\\mathrm{ac}},\\sigma_{\\mathrm{sing}}$, pp. 230-231; §VII.3, spectral projections, the four axioms of a projection-valued measure, Thm VII.7 and Thm VII.8 (p.v.m. form), pp. 234-235, and Weyl's criterion Thm VII.12 and Stone's formula Thm VII.13, p. 237; Problems 3-5 of Ch. VII, which set the extension of the bounded spectral theorem to bounded normal operators as an exercise, p. 246. Ch. VIII: §VIII.2, Thm VIII.3 (basic criterion) and the example of the circle of self-adjoint extensions of $i\\,d/dx$, pp. 256-259; §VIII.3, Proposition 1 (multiplication operators are self-adjoint) and Proposition 2, pp. 259-260, Thm VIII.4 (multiplication-operator form) with its proof, pp. 260-261, Thm VIII.5 (functional calculus form) and the construction of the p.v.m. with formulas (VIII.4) and (VIII.5), pp. 262-263, Thm VIII.6 (p.v.m. form) and Proposition 3, p. 266"
    pages: "192, 221-231, 234-235, 237, 246, 256-263, 266"
    role: the statement of all three forms of the theorem, exactly as given there, including the finiteness of the measure and the two domain conditions; the proof route followed here (continuous functional calculus, spectral measures by Riesz-Markov, cyclic decomposition, then the reduction of the unbounded case to the bounded normal operator $(A+i)^{-1}$); the definitions of cyclic vector, spectral measure, essential range and projection-valued measure; the decomposition of the Hilbert space into pure point, absolutely continuous and singular parts; the observation that the Fourier transform is the spectral representation of $-i\,d/dx$
  - work: folland-1999
    loc: "§4.7, Thm 4.45 (the Stone-Weierstrass theorem), p. 139; §7.1, Thm 7.2 (the Riesz representation theorem for positive linear functionals on $C_c(X)$, the Riesz-Markov theorem), p. 212"
    pages: "139, 212"
    role: the two standard tools the bounded proof rests on - uniform density of a separating self-adjoint subalgebra, and the passage from a positive linear functional to a measure - cited rather than reproved
  - work: kreyszig-1978
    loc: "§9.7, Definition 9.7-1 (spectral family or decomposition of unity) with conditions (7)-(9) and the finite-dimensional motivation (6), pp. 494-496; §9.9, Thm 9.9-1 (spectral theorem for bounded self-adjoint operators) with (1), (1*) and (2), and Thm 9.9-2 on the properties of $p(T)$, pp. 505-509; §10.6, the Cayley transform (1), Lemma 10.6-2 with (4), and Thm 10.6-3 (spectral theorem for self-adjoint operators) with (8) and $F_\\lambda = E_{2\\arctan\\lambda}$, pp. 556-561; §10.7, Thm 10.7-2 (the multiplication operator is self-adjoint), Thm 10.7-3 (no eigenvalues, $\\sigma(T)=\\mathbb{R}$) and the spectral family (6) of that operator, pp. 563-567"
    pages: "494-496, 505-509, 556-561, 563-567"
    role: the spectral-family (resolution of the identity) form of the theorem and the Cayley-transform route to it, reported in the note as the second standard formulation; the Riemann-Stieltjes reading $(Tx,x)=\int\lambda\,d(F_\lambda x,x)$; the worked fact that multiplication by the coordinate is self-adjoint with no eigenvalues and spectrum the whole real line
---

:::note[What the theorem does]{provenance=original}
A Hermitian matrix can be diagonalised: there is an orthonormal basis of eigenvectors, and in that basis the matrix acts by multiplying each coordinate by a real number (:ref[]{to=linalg.hermitian-spectral-theorem}). A compact self-adjoint operator behaves the same way, with a sequence of eigenvalues tending to zero (:ref[]{to=funcan.compact-self-adjoint}). But most of the operators that matter in physics have no eigenvectors at all. Multiplication by the coordinate on $L^2(\mathbb{R})$ has none, and neither does $-i\,d/dx$; their spectra are the whole real line, filled with "eigenvalues" whose "eigenfunctions" are not square-integrable.

The spectral theorem says that nothing essential is lost. Every self-adjoint operator, bounded or not, still *is* a multiplication operator - not on a sequence space indexed by eigenvalues, but on an $L^2$ space over a measure space that the operator itself determines. Sums over an eigenbasis become integrals against a measure. Once that is known, one can form $h(A)$ for any bounded Borel function $h$, and in particular the spectral projections $P_\Omega$ that answer "how much of $\psi$ lives in the part of the spectrum lying in $\Omega$?" - the question quantum mechanics asks of every measurement.
:::

:::definition[Multiplication operators, spectral representations, spectral measures]{provenance=adapted src="reed-simon-1980:§VII.2, the definitions of cyclic vector and of spectral measure, pp. 226-228, the essential range, p. 229, and §VIII.3, Proposition 1 and the p.v.m. axioms, pp. 259, 263"}
Throughout, $\mathcal{H}$ is a complex separable Hilbert space and the inner product $(\varphi,\psi)$ is linear in the first slot, as elsewhere in this handbook (:ref[]{to=linalg.inner-product-spaces}). An operator $A$ is **self-adjoint** when $A = A^{*}$ as operators *with their domains*, so that $\mathcal{D}(A) = \mathcal{D}(A^{*})$; symmetry alone is not enough (:ref[]{to=funcan.symmetric-self-adjoint}).

**Multiplication operator.** Let $(M,\mu)$ be a measure space and let $f : M \to \mathbb{R}$ be measurable and finite $\mu$-almost everywhere. The **multiplication operator** $T_f$ on $L^2(M,d\mu)$ is
$$
(T_f \varphi)(m) \;=\; f(m)\,\varphi(m) , \qquad
\mathcal{D}(T_f) \;=\; \bigl\{ \varphi \in L^2(M,d\mu) \;:\; f\varphi \in L^2(M,d\mu) \bigr\} .
$$
The domain is forced on us: if $f$ is unbounded, $f\varphi$ leaves $L^2$ for some $\varphi$, and there is nothing to be done about it.

**Essential range.** A real number $\lambda$ lies in the **essential range** of $f$ if
$$
\mu\bigl( \{ m : \lvert f(m) - \lambda\rvert < \varepsilon \} \bigr) \;>\; 0 \qquad \text{for every } \varepsilon > 0 .
$$
This is the set of values $f$ takes "on a set of positive measure, up to an arbitrarily small error"; changing $f$ on a null set does not change it.

**Spectral representation.** A **spectral representation** of a self-adjoint operator $A$ is a triple $\bigl((M,\mu),\,U,\,f\bigr)$ with $U : \mathcal{H} \to L^2(M,d\mu)$ unitary and $U A U^{-1} = T_f$, domains included.

**Cyclic vector.** A vector $\psi \in \mathcal{H}$ is **cyclic** for a bounded self-adjoint $A$ if the finite linear combinations of $\psi, A\psi, A^2\psi, \dots$ are dense in $\mathcal{H}$. For unbounded $A$, :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.3, p. 262"} use instead the condition that $\{ g(A)\psi : g \in C_\infty(\mathbb{R})\}$ be dense, $C_\infty$ being the continuous functions vanishing at infinity.

**Projection-valued measure.** A family $\{P_\Omega\}$ of operators indexed by the Borel sets $\Omega \subseteq \mathbb{R}$ is a **projection-valued measure** (p.v.m.) if

1. every $P_\Omega$ is an orthogonal projection;
2. $P_{\varnothing} = 0$ and $P_{\mathbb{R}} = I$;
3. if $\Omega = \bigcup_{n\ge 1}\Omega_n$ with the $\Omega_n$ pairwise disjoint, then $P_\Omega = \lim_{N\to\infty}\sum_{n=1}^{N} P_{\Omega_n}$ in the strong sense, that is, applied to each fixed vector;
4. $P_{\Omega_1}P_{\Omega_2} = P_{\Omega_1 \cap \Omega_2}$.

**Spectral measure of a vector.** Given a p.v.m. and $\psi \in \mathcal{H}$, put
$$
\mu_\psi(\Omega) \;=\; (P_\Omega \psi, \psi) \;=\; \lVert P_\Omega \psi\rVert^2 ,
$$
the second equality because $P_\Omega$ is an orthogonal projection, so $P_\Omega = P_\Omega^{*} = P_\Omega^2$. By axioms 1-3, $\mu_\psi$ is a finite positive Borel measure on $\mathbb{R}$ of total mass $\lVert\psi\rVert^2$; it is the **spectral measure** of $\psi$. Because $\mu_\psi(\Omega)$ is a squared norm it is real, so it does not matter which slot of the inner product is taken linear - a point worth recording, since the sources differ (see the note below).
:::

:::statement[The spectral theorem]{provenance=adapted src="reed-simon-1980:§VIII.3, Proposition 1, p. 259, Thm VIII.4, pp. 260-261, Thm VIII.5, p. 262, Thm VIII.6 and Proposition 3, pp. 263 and 266; reed-simon-1980:§VII.2, Thm VII.3 and the essential-range proposition, pp. 227-229"}
Let $A$ be a self-adjoint operator on a complex separable Hilbert space $\mathcal{H}$, with domain $\mathcal{D}(A)$.

**A. Multiplication-operator form.** There are a measure space $(M,\mu)$ with $\mu$ a **finite** measure, a unitary $U : \mathcal{H} \to L^2(M,d\mu)$, and a real-valued measurable $f$ on $M$, finite $\mu$-a.e., such that

1. $\psi \in \mathcal{D}(A)$ if and only if $f\cdot(U\psi) \in L^2(M,d\mu)$, and
2. $\bigl(UAU^{-1}\varphi\bigr)(m) = f(m)\varphi(m)$ for every $\varphi \in U[\mathcal{D}(A)]$.

Conversely every $T_f$ of the definition above, on a finite measure space and with $f$ real and a.e. finite, is self-adjoint; so "self-adjoint operator" and "multiplication by a real function" name the same class of objects up to unitary equivalence. One clause here is ours and not Reed and Simon's: their Theorem VIII.4 says nothing about integrability of $f$, but their Proposition 2 (p. 260), which identifies cores of $T_f$, assumes it. The measure space and $f$ may in addition be chosen so that $f \in L^p(M,d\mu)$ for every $p$ with $1 \le p < \infty$; this is proved in Step 11.

**B. The spectrum.** $\sigma(A)$ is the essential range of $f$. In particular $\sigma(A) \subseteq \mathbb{R}$, as it must be for a self-adjoint operator (:ref[]{to=funcan.spectrum}).

**C. Borel functional calculus.** There is exactly one map $h \mapsto h(A)$ from the bounded Borel functions on $\mathbb{R}$ into the bounded operators on $\mathcal{H}$ with these properties:

1. it is an algebraic $*$-homomorphism: $(h_1h_2)(A) = h_1(A)h_2(A)$, $(\alpha h)(A) = \alpha\,h(A)$, $1(A) = I$ and $\bar h(A) = h(A)^{*}$;
2. it is norm-continuous, $\lVert h(A)\rVert \le \lVert h\rVert_\infty$;
3. if $h_n$ are bounded Borel functions with $h_n(x) \to x$ for every $x$ and $\lvert h_n(x)\rvert \le \lvert x\rvert$ for all $x$ and $n$, then $h_n(A)\psi \to A\psi$ for every $\psi \in \mathcal{D}(A)$;
4. if $h_n \to h$ pointwise and $\sup_n \lVert h_n\rVert_\infty < \infty$, then $h_n(A) \to h(A)$ strongly.

It automatically satisfies two more: if $A\psi = \lambda\psi$ then $h(A)\psi = h(\lambda)\psi$; and $h \ge 0$ implies $h(A) \ge 0$. Concretely $h(A) = U^{-1} T_{h \circ f} U$.

**D. Projection-valued-measure form.** Setting $P_\Omega = \chi_\Omega(A)$ for Borel $\Omega \subseteq \mathbb{R}$ gives a projection-valued measure, and
$$
A \;=\; \int_{\mathbb{R}} \lambda \, dP_\lambda ,
$$
meaning that $\mathcal{D}(A) = \bigl\{\psi : \int \lambda^2 \, d\mu_\psi(\lambda) < \infty\bigr\}$ and $(A\psi,\varphi) = \int \lambda \, d(P_\lambda\psi,\varphi)$ for $\psi \in \mathcal{D}(A)$ and $\varphi \in \mathcal{H}$. This correspondence is one-to-one: every projection-valued measure on $\mathbb{R}$ is the one belonging to exactly one self-adjoint operator. More generally, for a real Borel $g$ (not necessarily bounded), $g(A) = \int g(\lambda)\,dP_\lambda$ is self-adjoint on $\mathcal{D}_g = \bigl\{\psi : \int \lvert g(\lambda)\rvert^2 d\mu_\psi(\lambda) < \infty \bigr\}$, and for bounded $h$ this agrees with part C:
$$
\bigl( h(A)\psi, \psi \bigr) \;=\; \int_{\mathbb{R}} h(\lambda)\, d\mu_\psi(\lambda) .
$$

**E. Direct-sum form.** One may take $(M,\mu)$ to be a disjoint union of at most countably many copies of $\mathbb{R}$, so that $U$ becomes a unitary from $\mathcal{H}$ onto $\bigoplus_{n=1}^{N} L^2(\mathbb{R}, d\mu_n)$, with $N \in \{1,2,\dots\} \cup \{\infty\}$, carrying $A$ to multiplication by the variable $\lambda$ in each summand. The measures $\mu_n$ are the spectral measures of a family of cyclic vectors; $N = 1$ is possible exactly when $A$ has a cyclic vector.
:::

:::note[The spectral-family form, and the two sources]{provenance=adapted src="kreyszig-1978:§9.7, Definition 9.7-1 with (7)-(9), pp. 494-495; kreyszig-1978:§9.9, Thm 9.9-1 with (1) and (1*), pp. 505-506; kreyszig-1978:§10.6, the Cayley transform (1) and Thm 10.6-3 with (8), pp. 556-561"}
There is a second standard way to package part D, used by :cite[Kreyszig]{work=kreyszig-1978 loc="§9.7 and §10.6, pp. 494-495, 558-561"} and by much of the older literature. A **spectral family** (or **decomposition of unity**) is a one-parameter family $(E_\lambda)_{\lambda\in\mathbb{R}}$ of projections with
$$
E_\lambda E_\nu = E_{\min(\lambda,\nu)} , \qquad
E_\lambda \to 0 \ \ (\lambda\to-\infty) , \qquad
E_\lambda \to I \ \ (\lambda\to+\infty) , \qquad
E_{\nu} \to E_\lambda \ \ (\nu \to \lambda{+}0) ,
$$
the last three limits taken strongly. A spectral family and a projection-valued measure are the same data: $E_\lambda = P_{(-\infty,\lambda]}$ and, conversely, $P_{(a,b]} = E_b - E_a$. Kreyszig's Theorem 10.6-3 then states, for a densely defined self-adjoint $T$,
$$
(Tx,x) \;=\; \int_{-\infty}^{\infty} \lambda \, dv(\lambda) , \qquad v(\lambda) = (F_\lambda x, x) , \qquad x \in \mathcal{D}(T),
$$
an ordinary Riemann-Stieltjes integral, where $F_\lambda = E_{2\arctan\lambda}$ and $(E_\theta)$ is the spectral family in the spectral representation of $-U$, with $U = (T-iI)(T+iI)^{-1}$ the Cayley transform of $T$. The minus sign is Kreyszig's and is load-bearing. His Lemma 10.6-2 (p. 557) shows that $1$ is not an eigenvalue of $U$, hence that $-1$ is not an eigenvalue of $-U$; that is what lets him prove $(E_\theta)$ continuous at $\theta = \pm\pi$, and the continuity at the endpoints is what makes the substitution $\theta = 2\arctan\lambda$, which sweeps $(-\pi,\pi)$ as $\lambda$ sweeps $\mathbb{R}$, lose nothing.

Two differences between the sources should be recorded, because they look like disagreements and are not.

- **Which slot is linear.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§II.1, p. 37"} take the inner product conjugate-linear in the first slot and write the functional calculus as $(\psi, h(A)\psi) = \int h \, d\mu_\psi$. Kreyszig, and this handbook, take it linear in the first slot, giving $(h(A)\psi,\psi)$. These two *expressions* denote the same number, because the conjugation sits in the first slot for them and in the second for us. What is not true, and would be an easy slip, is that the two orders agree inside one convention: in ours $(\psi, h(A)\psi) = \overline{(h(A)\psi,\psi)}$, and for complex-valued $h$ those differ. So the order has to be written as each book writes it; we write $(h(A)\psi,\psi) = \int h\,d\mu_\psi$ throughout. For real $h$ both numbers are real and equal, which is why $\mu_\psi$ itself is free of the convention.
- **Which route to the proof.** Reed and Simon reduce the unbounded case to the bounded one through the *resolvent* $(A+i)^{-1}$; Kreyszig reduces it through the *Cayley transform* $(A-i)(A+i)^{-1}$, which is unitary rather than merely bounded and normal. The two are visibly relatives of one another, and they deliver the same object. We follow Reed and Simon, because their route produces the multiplication-operator form directly, and the multiplication-operator form is the one that makes the functional calculus a triviality.
:::

:::idea{provenance=original}
**First make sense of $h(A)$ for polynomials, then for everything else.** For a bounded self-adjoint $A$ there is one inequality that does all the work: for a polynomial $P$,
$$
\lVert P(A)\rVert \;=\; \sup_{\lambda \in \sigma(A)} \lvert P(\lambda)\rvert .
$$
The left-hand side is an operator norm, the right-hand side a supremum of numbers; the identity says that the map $P \mapsto P(A)$ is an isometry for the supremum norm on $\sigma(A)$. Polynomials are dense in $C(\sigma(A))$ by Weierstrass, so the map extends to all continuous functions by continuity, and we have a continuous functional calculus.

**Numbers out of operators: the spectral measures.** For fixed $\psi$, the assignment $h \mapsto (h(A)\psi,\psi)$ is a positive linear functional on $C(\sigma(A))$. The Riesz-Markov theorem turns a positive linear functional on continuous functions into integration against a measure, and that measure $\mu_\psi$ is the whole content of $A$ as seen from $\psi$.

**From measures back to a multiplication operator.** If a single $\psi$ is cyclic, the map $h(A)\psi \mapsto h$ sends $\mathcal{H}$ onto $L^2(\sigma(A), d\mu_\psi)$ and is isometric by the previous paragraph; under it $A$ becomes multiplication by $\lambda$. A general $A$ splits $\mathcal{H}$ into countably many subspaces on each of which some vector is cyclic, and the pieces are reassembled as a direct sum.

**The unbounded case costs one trick.** If $A$ is self-adjoint and unbounded, $A \pm i$ are bijections of $\mathcal{D}(A)$ onto $\mathcal{H}$ with bounded inverses, and $R = (A+i)^{-1}$ is a bounded *normal* operator with trivial kernel. Diagonalise $R$: it becomes multiplication by some bounded $g \ne 0$ a.e. Then $A$ must be multiplication by $f = g^{-1} - i$, which is finite a.e. but need not be bounded - exactly as it should be. The domain condition $f\cdot(U\psi) \in L^2$ is nothing but a restatement of $\psi \in \mathrm{Ran}\,R$.
:::

:::proof[Part A for bounded operators]{provenance=adapted src="reed-simon-1980:§VII.1, Thm VII.1 with Lemmas 1 and 2, pp. 222-224; reed-simon-1980:§VII.2, Lemma 1 with its proof, Lemma 2 and Thm VII.3 with its corollary, pp. 226-228; reed-simon-1980:§VI.3, Thm VI.6, p. 192; folland-1999:Thm 4.45, p. 139, and Thm 7.2, p. 212"}
Let $A$ be bounded and self-adjoint, so $\sigma(A)$ is a compact subset of $\mathbb{R}$ (:ref[]{to=funcan.spectrum}).

**Step 1: the spectrum of a polynomial in $A$.** For any bounded operator $B$ and polynomial $P$ one has $\sigma(P(B)) = \{P(\lambda) : \lambda \in \sigma(B)\}$. For "$\supseteq$": $P(x) - P(\lambda)$ vanishes at $x=\lambda$, so $P(x)-P(\lambda) = (x-\lambda)Q(x)$ for a polynomial $Q$, whence $P(B)-P(\lambda) = (B-\lambda)Q(B)$ with the two factors commuting; if this product had an inverse, $B-\lambda$ would have one too, so $\lambda \in \sigma(B)$ forces $P(\lambda)\in\sigma(P(B))$. For "$\subseteq$": a constant $P \equiv c$ gives $\sigma(cI) = \{c\}$ and $\{P(\lambda)\} = \{c\}$, since $\sigma(B) \ne \varnothing$, so assume $P$ non-constant and factor $P(x) - \nu = c\prod_{j}(x-\lambda_j)$ with $c \ne 0$; if no $\lambda_j$ were in $\sigma(B)$ the product of the inverses would invert $P(B)-\nu$, so some $\lambda_j \in \sigma(B)$ and $\nu = P(\lambda_j)$.

**Step 2: the isometry.** Let $P$ be a polynomial. Since $P(A)^{*}P(A) = (\bar P P)(A)$ and $\bar P P$ has real coefficients on $\sigma(A)\subseteq\mathbb{R}$, the operator $(\bar PP)(A)$ is self-adjoint, so by the equality of norm and spectral radius for self-adjoint operators (:cite[Reed and Simon]{work=reed-simon-1980 loc="Thm VI.6, p. 192"}),
$$
\lVert P(A)\rVert^2 = \bigl\lVert (\bar P P)(A)\bigr\rVert = \sup\bigl\{ \lvert\nu\rvert : \nu \in \sigma\bigl((\bar PP)(A)\bigr)\bigr\} = \sup_{\lambda\in\sigma(A)} \lvert P(\lambda)\rvert^2 ,
$$
the last equality by Step 1. This is the inequality the idea promised, and it is where self-adjointness of $A$ enters: for a general bounded operator the norm exceeds the spectral radius.

**Step 3: continuous functions.** The polynomials form a subalgebra of $C(\sigma(A))$ that contains the constants, is closed under complex conjugation and separates points, so it is dense by the Stone-Weierstrass theorem (:cite[Folland]{work=folland-1999 loc="Thm 4.45, p. 139"}), which we use here and do not reprove. By Step 2 the map $P \mapsto P(A)$ is isometric for $\lVert\cdot\rVert_\infty$ on $\sigma(A)$; a densely defined isometry into a complete space extends uniquely to the closure. This gives a map $h \mapsto h(A)$ on $C(\sigma(A))$, isometric and multiplicative, with $x \mapsto x$ sent to $A$.

**Step 4: the spectral measures.** Fix $\psi \in \mathcal{H}$. The functional $h \mapsto (h(A)\psi,\psi)$ is linear on $C(\sigma(A))$ and positive: if $h \ge 0$ then $h = g^2$ with $g$ real and continuous, so $(h(A)\psi,\psi) = (g(A)^{*}g(A)\psi,\psi) = \lVert g(A)\psi\rVert^2 \ge 0$, using that $g(A)$ is self-adjoint because $g$ is real. By the Riesz-Markov theorem - the Riesz representation theorem for positive linear functionals on continuous functions, :cite[Folland]{work=folland-1999 loc="Thm 7.2, p. 212"} - there is a unique finite positive Borel measure $\mu_\psi$ on the compact set $\sigma(A)$ with
$$
\bigl( h(A)\psi,\psi \bigr) \;=\; \int_{\sigma(A)} h\, d\mu_\psi \qquad \text{for all } h \in C(\sigma(A)) .
$$

**Step 5: the cyclic case.** Suppose some $\psi$ is cyclic, and normalise $\lVert\psi\rVert = 1$. Define $V$ on the dense set $\{h(A)\psi : h \in C(\sigma(A))\}$ by $V\bigl(h(A)\psi\bigr) = h$. It is isometric, because by Step 4
$$
\bigl\lVert h(A)\psi \bigr\rVert^2 = \bigl( (\bar h h)(A)\psi,\psi\bigr) = \int \lvert h\rvert^2 d\mu_\psi = \lVert h\rVert^2_{L^2(d\mu_\psi)} ,
$$
and the same computation shows $V$ is well defined: if $h = h'$ in $L^2(d\mu_\psi)$ then $h(A)\psi = h'(A)\psi$. An isometry defined on a dense subspace extends to an isometry of $\mathcal{H}$, and its range contains $C(\sigma(A))$, which is dense in $L^2(\sigma(A), d\mu_\psi)$; so the extension is unitary onto $L^2(\sigma(A),d\mu_\psi)$. Finally, for continuous $h$,
$$
\bigl(VAV^{-1}h\bigr)(\lambda) = \bigl(V A h(A)\psi\bigr)(\lambda) = \bigl( V (x h)(A)\psi \bigr)(\lambda) = \lambda\, h(\lambda) ,
$$
and by continuity this extends from $C(\sigma(A))$ to all of $L^2$. So $A$ is multiplication by $\lambda$.

**Step 6: removing the cyclicity assumption.** Separability gives a decomposition $\mathcal{H} = \bigoplus_{n=1}^{N}\mathcal{H}_n$, $N \le \infty$, into closed subspaces each invariant under $A$ and each carrying a vector $\varphi_n$ cyclic for the restriction of $A$ to it: take a maximal family of mutually orthogonal cyclic subspaces, which exists by :ref[Zorn's lemma]{to=found.zorn-lemma}, and note that if their sum were not all of $\mathcal{H}$, any unit vector in the orthogonal complement would generate one more such subspace, contradicting maximality. Applying Step 5 in each summand and writing $\mu_n = \mu_{\varphi_n}$ gives a unitary $U : \mathcal{H} \to \bigoplus_{n} L^2(\mathbb{R},d\mu_n)$ carrying $A$ to multiplication by $\lambda$ in each slot. This is part E.

**Step 7: one finite measure space.** Choose the cyclic vectors with $\lVert\varphi_n\rVert = 2^{-n}$, so $\mu_n(\mathbb{R}) = 4^{-n}$. Let $M$ be the disjoint union of $N$ copies of $\mathbb{R}$ and let $\mu$ restrict to $\mu_n$ on the $n$th copy; then $\mu(M) = \sum_n 4^{-n} < \infty$, so $\mu$ is finite, and $f(m) = \lambda$ on each copy. This is part A for bounded $A$. $\square$
:::

:::proof[Part A in general, and parts B, C, D]{provenance=adapted src="reed-simon-1980:§VIII.3, Proposition 1 with its proof and Thm VIII.4 with its proof, pp. 259-261, Thm VIII.5 and the construction of the p.v.m., pp. 262-263, and Proposition 3, p. 266; reed-simon-1980:Ch. VII, Problems 3-5, p. 246"}
**Step 8: multiplication operators are self-adjoint.** Let $\mu$ be finite and $f$ real and a.e. finite. $T_f$ is densely defined, since the sets $\{\lvert f\rvert \le n\}$ exhaust $M$ up to a null set and every $\varphi\in L^2$ is the $L^2$-limit of its restrictions to them; and $T_f$ is symmetric because $f$ is real. Let $\chi_n$ be the indicator of $\{\lvert f\rvert \le n\}$ and let $\psi \in \mathcal{D}(T_f^{*})$. For every $\varphi$ with $\lVert\varphi\rVert \le 1$ we have $\chi_n\varphi \in \mathcal{D}(T_f)$, so
$$
\bigl\lvert (\chi_n f \psi, \varphi) \bigr\rvert = \bigl\lvert (\psi, T_f \chi_n\varphi) \bigr\rvert = \bigl\lvert (T_f^{*}\psi, \chi_n \varphi)\bigr\rvert \le \lVert T_f^{*}\psi\rVert .
$$
Taking the supremum over such $\varphi$ gives $\lVert \chi_n f\psi\rVert \le \lVert T_f^{*}\psi\rVert$ for every $n$, and $\lvert \chi_n f \psi\rvert$ increases pointwise a.e. to $\lvert f\psi\rvert$; by the monotone convergence theorem (:ref[]{to=measure.monotone-convergence-fatou}) $f\psi \in L^2$, that is $\psi \in \mathcal{D}(T_f)$. Hence $\mathcal{D}(T_f^{*}) \subseteq \mathcal{D}(T_f)$, which with symmetry gives $T_f = T_f^{*}$.

**Step 9: the resolvent at $\pm i$.** Let $A$ be self-adjoint. By the basic criterion for self-adjointness (:ref[]{to=funcan.symmetric-self-adjoint}), $A \pm i$ map $\mathcal{D}(A)$ *onto* $\mathcal{H}$, and they are injective because $\lVert (A\pm i)\psi\rVert^2 = \lVert A\psi\rVert^2 + \lVert\psi\rVert^2 \ge \lVert\psi\rVert^2$ for $\psi \in \mathcal{D}(A)$, the cross terms cancelling since $A$ is symmetric. So $R = (A+i)^{-1}$ is defined on all of $\mathcal{H}$; it is closed because $A+i$ is, and therefore bounded by the closed graph theorem (:ref[]{to=funcan.uniform-boundedness-open-mapping}). The identity
$$
\bigl( (A-i)^{-1}\psi, (A+i)\varphi \bigr) = \bigl( (A-i)(A-i)^{-1}\psi, \varphi \bigr) = (\psi,\varphi) \qquad \bigl(\psi\in\mathcal{H},\ \varphi\in\mathcal{D}(A)\bigr)
$$
identifies $R^{*} = (A-i)^{-1}$, since $\mathrm{Ran}(A+i) = \mathcal{H}$. The first equality moves $A+i$ out of the second slot as its adjoint $(A+i)^{*} = A-i$, which is legitimate because $(A-i)^{-1}\psi$ lies in $\mathcal{D}(A)$; the second is $(A-i)(A-i)^{-1} = I$ on $\mathcal{H}$. (:cite[Reed and Simon]{work=reed-simon-1980 loc="p. 261"} print the two factors in the opposite order at this point; the order above is the one the manipulation produces, and only this order is a composition of maps that can be applied.) The two resolvents commute, so $R^{*}R = RR^{*}$: $R$ is a bounded **normal** operator. Finally $\ker R = \{0\}$, since $R$ is a bijection onto $\mathcal{D}(A)$.

**Step 10: diagonalising $R$.** Steps 1-7 need one extension before they can be used, from bounded self-adjoint to bounded normal operators; :cite[Reed and Simon]{work=reed-simon-1980 loc="Ch. VII, Problems 3-5, p. 246"} set that extension as an exercise rather than proving it, and this is the route. Write $R = B + iC$ with $B = \tfrac12(R+R^{*})$ and $C = \tfrac1{2i}(R-R^{*})$; both are self-adjoint, and they commute because $R$ is normal. The argument then changes in two places, and only two. Step 2 becomes its two-variable form: for a polynomial $P$ in two commuting self-adjoint variables, $P(B,C)$ is normal, so $\lVert P(B,C)\rVert$ equals its spectral radius, and that is the supremum of $\lvert P\rvert$ over the joint spectrum $K \subseteq \mathbb{R}^2$ of the pair. Steps 3-5 then run over $C(K)$ instead of $C(\sigma(A))$, the polynomials in two real variables being dense there by Stone-Weierstrass for the same three reasons as before. Steps 6 and 7 use only the functional calculus and separability and are unchanged. The outcome is a finite measure space $(M,\mu)$, a unitary $U : \mathcal{H}\to L^2(M,d\mu)$ and a bounded measurable complex $g$ with $URU^{-1} = T_g$.

**Step 11: back to $A$.** Put $f := g^{-1} - i$, which is defined and finite a.e. because $\ker R = \{0\}$ makes $\{g = 0\}$ a $\mu$-null set. By Step 9, $\varphi \mapsto \psi = R\varphi$ is a bijection of $\mathcal{H}$ onto $\mathcal{D}(A)$, and it carries two identities with it: $U\psi = g\,U\varphi$, because $URU^{-1} = T_g$, and $A\psi = \varphi - i\psi$, because $(A+i)\psi = \varphi$. Four things remain.

*The action, condition 2.* Apply $U$ to $A\psi = \varphi - i\psi$ and substitute $U\varphi = g^{-1}U\psi$:
$$
(UA\psi)(m) = (U\varphi)(m) - i (U\psi)(m) = \bigl( g(m)^{-1} - i \bigr)(U\psi)(m) = f(m)\,(U\psi)(m) .
$$

*The domain, condition 1.* For $\psi \in \mathcal{D}(A)$ the display just obtained reads $f\,U\psi = U(A\psi)$, which is in $L^2$. Conversely let $\psi \in \mathcal{H}$ with $f\,U\psi \in L^2$. Then $g^{-1}U\psi = (f+i)U\psi \in L^2$, so it equals $U\varphi$ for exactly one $\varphi \in \mathcal{H}$; multiplying by $g$ gives $U(R\varphi) = g\,U\varphi = U\psi$, so $\psi = R\varphi \in \mathcal{D}(A)$.

*$f$ is real.* By the two conditions $T_f = UAU^{-1}$ is self-adjoint. Suppose $\mathrm{Im}\,f > 0$ on a set of positive measure. That set is the countable union of the sets $S_{k,n} = \{\mathrm{Im}\,f \ge 1/k\} \cap \{\lvert f\rvert \le n\}$, so some $S = S_{k,n}$ has $\mu(S) > 0$; on it $f$ is bounded, so $\chi_S \in \mathcal{D}(T_f)$, and
$$
\mathrm{Im}\,(T_f \chi_S, \chi_S) = \int_S \mathrm{Im}\,f \, d\mu \;\ge\; \mu(S)/k \;>\; 0 ,
$$
which no self-adjoint operator permits. Applying this to $-f$ rules out $\mathrm{Im}\,f < 0$.

*The integrability clause.* This part is our addition, as the statement says. Keep $f$ and replace $\mu$ by $d\tilde\mu = e^{-f^2}d\mu$ and $U$ by $VU$, where $(V\varphi)(m) = e^{f(m)^2/2}\varphi(m)$. Then $\int \lvert V\varphi\rvert^2 d\tilde\mu = \int\lvert\varphi\rvert^2 d\mu$, so $V$ is unitary from $L^2(d\mu)$ onto $L^2(d\tilde\mu)$; it commutes with multiplication by $f$, so conditions 1 and 2 survive verbatim, and $\tilde\mu(M) \le \mu(M) < \infty$. Finally $c_p := \sup_{t\ge0} t^p e^{-t^2}$ is finite for every $p \in [1,\infty)$, so $\int \lvert f\rvert^p d\tilde\mu = \int \lvert f\rvert^p e^{-f^2} d\mu \le c_p\,\mu(M) < \infty$, that is, $f \in L^p(M,d\tilde\mu)$ for every such $p$.

**Step 12: the spectrum.** By part A it suffices to compute $\sigma(T_f)$. If $\lambda$ is not in the essential range of $f$, then $\lvert f-\lambda\rvert \ge \varepsilon$ a.e. for some $\varepsilon>0$, so $(f-\lambda)^{-1}$ is bounded and multiplication by it inverts $T_f - \lambda$; thus $\lambda \in \rho(T_f)$. If $\lambda$ *is* in the essential range, put $S_n = \{\lvert f - \lambda\rvert < 1/n\}$, which has positive measure, and $\varphi_n = \chi_{S_n}/\lVert\chi_{S_n}\rVert$. Then $\lVert\varphi_n\rVert = 1$ and $\lVert (T_f-\lambda)\varphi_n\rVert \le 1/n$, so $T_f-\lambda$ has no bounded inverse and $\lambda\in\sigma(T_f)$. (This is Weyl's criterion in a concrete case.)

**Step 13: the functional calculus.** Define $h(A) = U^{-1}T_{h\circ f}U$ for bounded Borel $h$. Properties 1 and 2 of part C are immediate from the corresponding statements for multiplication operators, $\lVert T_{h\circ f}\rVert \le \lVert h\rVert_\infty$ because $h\circ f$ is bounded by $\lVert h\rVert_\infty$. For property 4, if $h_n \to h$ pointwise with $\sup_n\lVert h_n\rVert_\infty = C < \infty$, then for fixed $\varphi \in L^2$ the functions $\lvert (h_n\circ f) \varphi - (h\circ f)\varphi\rvert^2$ tend to $0$ a.e. and are dominated by $4C^2\lvert\varphi\rvert^2 \in L^1$, so the dominated convergence theorem (:ref[]{to=measure.dominated-convergence}) gives $T_{h_n\circ f}\varphi \to T_{h\circ f}\varphi$. Property 3 is the same argument with the domination $\lvert h_n(f)\varphi\rvert \le \lvert f \varphi\rvert$, which is in $L^2$ precisely when $\psi = U^{-1}\varphi \in \mathcal{D}(A)$ - this is the one place where the domain condition of part A is used. 

**Step 13a: the calculus is unique.** Polynomials are not available here: they are not bounded on $\mathbb{R}$, and properties 1, 2 and 4 alone mention $A$ nowhere. Property 3 is the only link to $A$, and the argument has to start from it. Let $\Phi$ and $\Phi'$ be two maps with properties 1-4.

*They agree on one resolvent function.* Let $r(x) = (x-i)^{-1}$, which is bounded and continuous on $\mathbb{R}$, and let $h_n(x) = x\chi_{[-n,n]}(x)$, which are bounded Borel with $h_n(x)\to x$ for every $x$ and $\lvert h_n\rvert \le \lvert x\rvert$ - exactly the hypotheses of property 3. Fix $\psi \in \mathcal{D}(A)$. Property 3 gives $\Phi(h_n)\psi \to A\psi$, and $\Phi(r)$ is bounded, so
$$
\Phi(r)(A-i)\psi \;=\; \lim_{n\to\infty} \Phi(r)\bigl(\Phi(h_n)\psi - i\psi\bigr) \;=\; \lim_{n\to\infty}\Phi(r\,h_n)\psi \;-\; i\,\Phi(r)\psi ,
$$
the second equality by property 1. Now $\lvert r h_n\rvert \le \lvert x\rvert/\sqrt{x^2+1} \le 1$ and $r h_n \to x/(x-i)$ pointwise, so property 4 turns the limit into $\Phi\bigl(x/(x-i)\bigr)\psi$. Since $x/(x-i) - i/(x-i) = 1$ and $\Phi(1) = I$,
$$
\Phi(r)(A-i)\psi = \psi \qquad \text{for all } \psi \in \mathcal{D}(A) .
$$
By Step 9, $A-i$ maps $\mathcal{D}(A)$ onto $\mathcal{H}$, so $\Phi(r) = (A-i)^{-1}$: a bounded operator fixed by $A$ alone. The same holds for $\Phi'$, and by property 1, $\Phi(\bar r) = \Phi(r)^{*} = \Phi'(\bar r)$.

*They agree on continuous functions.* Read $r$ as a continuous function on the one-point compactification $\mathbb{R}\cup\{\infty\}$ with $r(\infty) = 0$. The unital $*$-algebra generated by $r$ contains the constants, is closed under conjugation, and separates the points of $\mathbb{R}\cup\{\infty\}$, because $x \mapsto (x-i)^{-1}$ is injective there. By Stone-Weierstrass (:cite[Folland]{work=folland-1999 loc="Thm 4.45, p. 139"}) it is dense in $C(\mathbb{R}\cup\{\infty\})$ for the supremum norm. Property 1 makes $\Phi$ and $\Phi'$ agree on that algebra, and property 2 makes both contractions for $\lVert\cdot\rVert_\infty$, so they agree on its uniform closure: on every continuous $h$ with a limit at infinity.

*They agree everywhere.* The bounded Borel functions on which $\Phi$ and $\Phi'$ agree form a vector space, and property 4 closes it under uniformly bounded pointwise limits. It contains $C(\mathbb{R}\cup\{\infty\})$, an algebra which separates points, contains the constants, and generates the Borel $\sigma$-algebra. By the functional form of the monotone class theorem, such a class contains every bounded Borel function. So $\Phi = \Phi'$.

**Step 14: the projection-valued measure.** Put $P_\Omega = \chi_\Omega(A)$. Axiom 1 holds since $\chi_\Omega^2 = \bar\chi_\Omega = \chi_\Omega$, so $P_\Omega$ is idempotent and self-adjoint; axiom 2 and axiom 4 are the identities $\chi_{\varnothing}=0$, $\chi_{\mathbb{R}}=1$, $\chi_{\Omega_1}\chi_{\Omega_2} = \chi_{\Omega_1\cap\Omega_2}$ transported through the homomorphism; axiom 3 is property 4 applied to the partial sums $\sum_{n\le N}\chi_{\Omega_n}$, which are uniformly bounded by $1$ and converge pointwise to $\chi_\Omega$. For $\psi\in\mathcal{H}$ the set function $\mu_\psi(\Omega) = (P_\Omega\psi,\psi)$ is therefore a finite positive Borel measure, and by construction $\mu_\psi$ is the image under $f$ of the measure $\lvert U\psi\rvert^2 d\mu$; hence for bounded Borel $h$,
$$
\bigl(h(A)\psi,\psi\bigr) = \int_M h(f(m))\,\lvert (U\psi)(m)\rvert^2 d\mu(m) = \int_{\mathbb{R}} h(\lambda)\, d\mu_\psi(\lambda) ,
$$
by the change-of-variables formula for an image measure. Taking $h(\lambda) = \lambda\chi_{[-n,n]}(\lambda)$ and letting $n\to\infty$ gives $(A\psi,\psi) = \int\lambda\,d\mu_\psi$ for $\psi\in\mathcal{D}(A)$, with $\mathcal{D}(A) = \{\psi : \int\lambda^2 d\mu_\psi<\infty\}$ because that integral equals $\int_M \lvert f\,U\psi\rvert^2 d\mu$; polarisation gives the version with two vectors. That the correspondence is a bijection is the converse direction: given a p.v.m., define $A$ by this formula; $A$ is self-adjoint because it is unitarily a multiplication by a real function, and its spectral projections are the $P_\Omega$ one started from. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Self-adjointness, not symmetry.** Step 9 is the whole of it: the proof needs $A \pm i$ to be *onto*, which is precisely the basic criterion for self-adjointness (:ref[]{to=funcan.symmetric-self-adjoint}), and nothing weaker will do. The failure is not technical. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, pp. 257-259"} exhibit $T = i\,d/dx$ on the absolutely continuous functions on $[0,1]$ vanishing at both ends: it is closed and symmetric, and it has a whole circle of distinct self-adjoint extensions $T_\alpha$, indexed by $\lvert\alpha\rvert=1$, with different spectra. There is no single spectral decomposition of $T$ to be had, because there is no single operator.
- **Separability.** Used only in Step 6, to get an at most countable family of cyclic subspaces. Dropping it costs the countability of the direct sum in part E, not the theorem.
- **Finiteness of $\mu$.** This is part of the statement as Reed and Simon give it, and Step 7 is where it is arranged. It is a convenience, not a constraint: the example below realises the momentum operator on $L^2(\mathbb{R}, dk)$, with Lebesgue measure, which is only $\sigma$-finite, and the reweighting at the end of Step 11 converts that to a finite measure without changing the operator.
- **Boundedness of $h$ in part C.** Needed for $h(A)$ to be everywhere defined and bounded. For unbounded $h$ the operator $h(A) = \int h\,dP$ exists but only on $\mathcal{D}_h$, and $\mathcal{D}_h = \mathcal{H}$ if and only if $h$ is bounded on the spectrum. Part A is the case $h(\lambda)=\lambda$.
- **The two conditions in part A are not interchangeable.** Condition 1 fixes the domain and condition 2 the action. Giving only condition 2 would leave the operator undetermined: multiplication by $f$ restricted to a smaller dense domain is a symmetric operator with the same formula and a different, usually much larger, spectrum.
:::

:::method[Finding a spectral representation]{provenance=original}
1. **Check self-adjointness on the stated domain.** Symmetric is not enough. In practice one exhibits a core and applies the basic criterion, or quotes a known result (:ref[]{to=funcan.symmetric-self-adjoint}).
2. **Look for a unitary that already diagonalises.** A translation-invariant operator on $\mathbb{R}^n$ is diagonalised by the Fourier transform; a Sturm-Liouville operator on a finite interval by its eigenfunction expansion (:ref[]{to=ode.sturm-liouville-theory}); a compact self-adjoint operator by its eigenbasis (:ref[]{to=funcan.compact-self-adjoint}). In each case read off $M$, $\mu$ and $f$.
3. **Read the spectrum.** $\sigma(A)$ is the essential range of $f$ - the set of values $f$ takes on sets of positive measure. Atoms of $\mu$ at which $f$ is constant give eigenvalues; a continuous part gives continuous spectrum.
4. **Compute the spectral measure of the state you care about.** $\mu_\psi$ is the image under $f$ of $\lvert U\psi\rvert^2 d\mu$. Everything about $A$ that $\psi$ can see is in this one finite measure.
5. **Apply functions.** For bounded Borel $h$, $h(A) = U^{-1}T_{h\circ f}U$ and $(h(A)\psi,\psi) = \int h\,d\mu_\psi$. For unbounded $h$, first check $\int \lvert h\rvert^2 d\mu_\psi < \infty$.
:::

:::example[The momentum operator and its spectral data]{provenance=original}
Take $\mathcal{H} = L^2(\mathbb{R})$ and
$$
A = -i\frac{d}{dx} , \qquad \mathcal{D}(A) = \{ \psi \in L^2(\mathbb{R}) : \psi \text{ is absolutely continuous and } \psi' \in L^2(\mathbb{R}) \} ,
$$
which is self-adjoint (:ref[]{to=funcan.symmetric-self-adjoint}).

**Step 1: the spectral representation.** Let $U$ be the Fourier-Plancherel transform in the unitary convention
$$
(U\psi)(k) = \hat\psi(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}\psi(x)\,e^{-ikx}\,dx ,
$$
a unitary of $L^2(\mathbb{R},dx)$ onto $L^2(\mathbb{R},dk)$ (:ref[]{to=fourier.plancherel}). Differentiation becomes multiplication: $\widehat{\psi'}(k) = ik\hat\psi(k)$, so $\widehat{A\psi}(k) = k\hat\psi(k)$. So $M = \mathbb{R}$, $f(k) = k$, and condition 1 of part A reads: $\psi \in \mathcal{D}(A)$ exactly when $k\hat\psi(k) \in L^2$ - which is the Plancherel statement that $\psi' \in L^2$. The measure $dk$ is $\sigma$-finite but not finite; to match the statement literally, replace it by $d\tilde\mu(k) = \pi^{-1/2}e^{-k^2}dk$, a probability measure, and conjugate by the unitary $V : L^2(dk)\to L^2(d\tilde\mu)$, $(V\varphi)(k) = \pi^{1/4}e^{k^2/2}\varphi(k)$. Since $V$ commutes with multiplication by $k$, the operator is unchanged.

**Step 2: the spectrum.** The essential range of $f(k)=k$ is all of $\mathbb{R}$: every interval around every $\lambda$ has positive Lebesgue measure. So $\sigma(A) = \mathbb{R}$, and there are no eigenvalues, since $\{k=\lambda\}$ is Lebesgue-null and $k\hat\psi = \lambda\hat\psi$ forces $\hat\psi = 0$ a.e.

**Step 3: a state and its spectral measure.** Take the normalised Gaussian
$$
\psi(x) = \pi^{-1/4} e^{-x^2/2} , \qquad \int_{-\infty}^{\infty}\lvert\psi\rvert^2 dx = 1 .
$$
Its transform is $\hat\psi(k) = \pi^{-1/4}e^{-k^2/2}$ (the Gaussian is a fixed point of this convention), so
$$
d\mu_\psi(k) = \lvert\hat\psi(k)\rvert^2 dk = \frac{1}{\sqrt\pi}\,e^{-k^2}\,dk ,
$$
a Gaussian probability measure of mean $0$ and variance $\tfrac12$. Three checks follow directly from it.

- **Total mass.** $\mu_\psi(\mathbb{R}) = \pi^{-1/2}\int e^{-k^2}dk = 1 = \lVert\psi\rVert^2$.
- **A spectral projection.** With $\Omega = [-1,1]$,
$$
(P_{[-1,1]}\psi,\psi) = \frac{1}{\sqrt\pi}\int_{-1}^{1} e^{-k^2}dk = \operatorname{erf}(1) = 0.842700792950\ldots
$$
- **A second moment.** $\int k^2 d\mu_\psi = \tfrac12$, and indeed $\lVert A\psi\rVert^2 = \int\lvert\psi'\rvert^2 dx = \pi^{-1/2}\int x^2 e^{-x^2}dx = \tfrac12$.

**Step 4: a bounded function of $A$, checked two ways.** Take $h(\lambda) = e^{i\lambda}$, which is bounded with $\lVert h\rVert_\infty = 1$. By the recipe, $h(A) = U^{-1}T_{e^{ik}}U$, and
$$
\bigl(h(A)\psi,\psi\bigr) = \int_{\mathbb{R}} e^{ik}\,d\mu_\psi(k) = \frac{1}{\sqrt\pi}\int_{-\infty}^{\infty} e^{ik}e^{-k^2}dk = e^{-1/4} .
$$
Independently, multiplying $\hat\psi$ by $e^{ik}$ is translation: $\bigl(h(A)\psi\bigr)(x) = \psi(x+1)$, so
$$
\bigl(h(A)\psi,\psi\bigr) = \int_{-\infty}^{\infty}\psi(x+1)\psi(x)\,dx = \frac{1}{\sqrt\pi}\int_{-\infty}^{\infty} e^{-(x+1)^2/2}e^{-x^2/2}dx = \frac{1}{\sqrt\pi}\,e^{-1/4}\!\int e^{-(x+\frac12)^2}dx = e^{-1/4} .
$$
Both routes give
$$
\bigl(e^{iA}\psi,\psi\bigr) = e^{-1/4} = 0.778800783071\ldots ,
$$
which is the functional calculus delivering a number that can be checked without it. (That $e^{iA}$ should be the translation by one unit is no accident; it is :ref[Stone's theorem]{to=funcan.stone-theorem}.)
:::

:::application[Why unbounded domains give integrals and not series]{provenance=original}
Separation of variables on a bounded domain produces a *series*: a Fourier series, a Bessel series, a sum over normal modes. On an unbounded domain it produces an *integral* - a Fourier transform, a Hankel transform, a Weyl-Titchmarsh expansion. Students usually meet this as a change of technique. The spectral theorem says it is a change in the operator's spectral measure, and nothing else.

A Sturm-Liouville operator on a finite interval with sensible boundary conditions has compact resolvent, hence a purely atomic spectral measure; part E then has $\mu_n$ a sum of point masses and the $L^2$ space is a sequence space, which is the eigenfunction series. On $\mathbb{R}$ the same differential expression has a spectral measure with a density, as in the example above, and $L^2(\mathbb{R},d\mu)$ is a genuine function space: the expansion is an integral. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VII.2, Example 4, p. 229"} put the point bluntly by observing that the Fourier transform *is* the spectral representation of $-i\,d/dx$, and that the multiplication-operator form is a rigorous version of the physicists' continuum of improper eigenstates.

This also supplies the standard vocabulary for scattering. Decomposing each $\mu_\psi$ into its pure point, absolutely continuous and continuous singular parts (:ref[]{to=measure.radon-nikodym}) splits the Hilbert space as
$$
\mathcal{H} = \mathcal{H}_{\mathrm{pp}} \oplus \mathcal{H}_{\mathrm{ac}} \oplus \mathcal{H}_{\mathrm{sing}} ,
$$
each summand invariant under $A$; on the first, $A$ has a complete set of eigenvectors. For a Hamiltonian, $\mathcal{H}_{\mathrm{pp}}$ holds the bound states - the discrete energy levels a spectroscope measures - and $\mathcal{H}_{\mathrm{ac}}$ holds the states that escape to infinity. The singular part is the pathological case one works to rule out. None of this vocabulary is available without the theorem, because without it a Hamiltonian with no eigenvectors has no decomposition at all.
:::
