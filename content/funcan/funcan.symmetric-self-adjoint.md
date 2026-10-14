---
id: funcan.symmetric-self-adjoint
title: Symmetric versus self-adjoint operators
kind: theorem
level: advanced
summary: "Separates the identity $(T\\varphi,\\psi)=(\\varphi,T\\psi)$ from the equality of operators $T=T^{*}$, proves the criterion that decides between them — a closed symmetric operator is self-adjoint exactly when $T^{*}\\varphi = \\pm i\\varphi$ has only the zero solution — introduces the deficiency indices that count the failures, and settles the momentum operator on an interval, where a circle of self-adjoint extensions exists, and on a half-line, where none does."
prereqs: [funcan.unbounded-operators, funcan.adjoint-operators, funcan.orthonormal-bases, funcan.spectrum, measure.lp-spaces]
provenance: adapted
sources:
  - work: reed-simon-1980
    loc: "§VIII.2, pp. 255–259: the definition of a symmetric (Hermitian) operator as $T \\subseteq T^*$, equivalently $(T\\varphi,\\psi)=(\\varphi,T\\psi)$ on $D(T)$, and of a self-adjoint operator as $T = T^*$; the observation that a symmetric operator is automatically closable with $T \\subseteq T^{**} \\subseteq T^*$, that a closed symmetric $T$ satisfies $T = T^{**} \\subseteq T^*$, and that a closed symmetric operator is self-adjoint exactly when $T^*$ is symmetric; the remark that only self-adjoint operators have a spectral theorem and generate one-parameter unitary groups; the definitions of essential self-adjointness and of a core, and the argument that an essentially self-adjoint operator has exactly one self-adjoint extension; the computation that $T^*\\varphi = \\pm i\\varphi$ has no solutions when $T$ is self-adjoint; Thm VIII.3, the basic criterion, with the equivalence of (a) self-adjointness, (b) closedness together with $\\operatorname{Ker}(T^*\\pm i)=\\{0\\}$, and (c) $\\operatorname{Ran}(T\\pm i)=\\mathcal{H}$, and its full proof using the identity $\\|(T-i)\\varphi\\|^2 = \\|T\\varphi\\|^2+\\|\\varphi\\|^2$; the corollary for essential self-adjointness; the example $T = i\\,d/dx$ on $\\{\\varphi \\in AC[0,1] : \\varphi(0)=\\varphi(1)=0\\}$, the identification of $T^*$ as $i\\,d/dx$ on all of $AC[0,1]$, the failure of essential self-adjointness because $e^{\\pm x}$ lie in the domain of $T^*$, and the family $T_\\alpha$ with $\\varphi(0)=\\alpha\\varphi(1)$, $|\\alpha|=1$, of distinct self-adjoint extensions, with Figure VIII.1 and the forward reference to Section X.1 of the second volume for the reason there is exactly a circle of them"
    pages: "255-259"
    role: the definitions and the chain of inclusions; the basic criterion with its proof route; the warning that only self-adjointness supports the spectral theorem and the dynamics; the interval example with its circle of self-adjoint extensions
  - work: kreyszig-1978
    loc: "§10.2, pp. 533–534: Def. 10.2-3 (symmetric), Lemma 10.2-4 (symmetric $\\iff T \\subseteq T^*$, with proof), Def. 10.2-5 (self-adjoint), the remarks that every self-adjoint operator is symmetric, that the two notions coincide for operators defined on all of $H$, and that a densely defined $T$ is symmetric if and only if $(Tx,x)$ is real for every $x \\in D(T)$; §10.3, Thm 10.3-5 (a densely defined symmetric operator has a unique closure) and Thm 10.3-6 ($(\\bar T)^* = T^*$), pp. 537–540; §10.4, Thm 10.4-1 (regular values of a self-adjoint operator), pp. 541–542; §10.6, pp. 556–558: the Cayley transform $U = (T-iI)(T+iI)^{-1}$, the Möbius map $u = (t-i)/(t+i)$ that motivates it, and Lemma 10.6-1, that the Cayley transform of a self-adjoint operator is unitary on $H$, with the isometry computation $\\|(T-iI)y\\|=\\|(T+iI)y\\|$; §10.6, Problems 5–9, pp. 561–562: the Cayley transform of a symmetric operator exists and is isometric, its domain and range are closed when $T$ is closed, $T$ is self-adjoint when its Cayley transform is unitary, and the definition of the deficiency indices as the Hilbert dimensions of $\\mathcal{D}(U)^\\perp$ and $\\mathcal{R}(U)^\\perp$, which vanish together exactly when $T$ is self-adjoint; §10.7, Thm 10.7-2 and Thm 10.7-5, pp. 564–569, the self-adjointness of multiplication by $t$ and of $i\\,d/dx$ on the whole line"
    pages: "533-534, 537-542, 556-558, 561-562, 564-569"
    role: the equivalent forms of symmetry, including the reality of $(Tx,x)$; the uniqueness of the closure of a symmetric operator; the Cayley transform and the definition of the deficiency indices used here, with the statement that both vanish exactly for self-adjoint operators; the self-adjointness of the momentum operator on the whole line
  - work: stakgold-holst-2011
    loc: "§5.4, pp. 317–320: the definitions of self-adjoint and of symmetric for an operator on a dense domain, the statements that every self-adjoint operator is symmetric and every bounded symmetric operator is self-adjoint while unbounded symmetric operators need not be, and the rule $(\\alpha A)^* = \\bar\\alpha A^*$; Example 2, the operator $S_2 = -i\\,d/dx$ with the boundary condition $u(0) = au(1)$ for real $a$, whose adjoint carries the condition $v(1) = av(0)$, so that $S_2$ is self-adjoint exactly for $a = 1$ and $a = -1$; Example 3, the operator $S_3 = -i\\,d/dx$ on $\\{u \\in AC[0,1] : u(0)=u(1)=0\\}$, whose adjoint is $-i\\,d/dx$ with no boundary condition at all, presented as the standard example of a symmetric operator that is not self-adjoint, together with the remark that $A^*$ always extends a symmetric $A$. §5.6, pp. 326–328: the classification of the spectrum of a closed operator, the deficiency of $\\lambda$ as the codimension of the range of $A - \\lambda I$, Thm 5.6.1 relating it to the multiplicity of $\\lambda$ as an eigenvalue of $A^*$, Thm 5.6.2 (for symmetric $A$: $(Au,u)$ is real, the approximate spectrum is real, eigenvectors for distinct eigenvalues are orthogonal) with proofs, and Thm 5.6.3 (for self-adjoint $A$ every non-real $\\lambda$ is in the resolvent set)"
    pages: "317-320, 326-328"
    role: the adjoint computations for $-i\\,d/dx$ under the three boundary conditions used in the worked example; the real-$a$ form of the circle of extensions; the proof that symmetry forces $(Au,u)$ real and keeps the approximate spectrum on the real axis
  - work: hassani-2013
    loc: "§19.1, Def. 19.1.5 and footnote 3, p. 564: the definition of a hermitian operator as one whose adjoint extends it and of a self-adjoint operator as one whose adjoint has the same domain, with the explicit warning that the distinction is made only at that point and that the two words are used interchangeably in the rest of the book"
    pages: "564"
    role: the terminological warning, and the physicists' convention that *hermitian* is used for what we call symmetric
  - work: arfken-2013
    loc: "§5.4, pp. 283–284: self-adjoint (Hermitian) operators as the carriers of observables, the argument that the expectation value $\\langle A\\rangle = \\langle\\psi|A|\\psi\\rangle$ is real for a Hermitian $A$, the matrix condition $a_{\\nu\\mu} = a_{\\mu\\nu}^*$, and Example 5.4.1, which checks on $L^2(-\\infty,\\infty)$ that multiplication by $x$ is self-adjoint and that $p = -i\\,d/dx$ is self-adjoint by integrating by parts and discarding the boundary term at infinity"
    pages: "283-284"
    role: the physicists' statement of the role of self-adjointness and the formal integration-by-parts check for $x$ and $p$ on the whole line, which is the calculation our boundary analysis refines on an interval
---

:::definition[Symmetric, self-adjoint, essentially self-adjoint]{provenance=adapted src="reed-simon-1980:§VIII.2, pp. 255–256; kreyszig-1978:Def. 10.2-3, Lemma 10.2-4 and Def. 10.2-5, pp. 533–534; stakgold-holst-2011:§5.4, eqs. (5.4.8)–(5.4.9), p. 317; hassani-2013:Def. 19.1.5, p. 564"}
Let $T$ be densely defined in a complex Hilbert space $H$, with adjoint $T^{*}$ as in :ref[]{to=funcan.unbounded-operators}.

- $T$ is **symmetric** if
  $$
  (T\varphi, \psi) = (\varphi, T\psi) \qquad \text{for all } \varphi, \psi \in D(T) ,
  $$
  equivalently if $T \subseteq T^{*}$: the adjoint is an extension of $T$. :cite[Kreyszig's Lemma 10.2-4]{work=kreyszig-1978 loc="Lemma 10.2-4, pp. 533–534"} is exactly this equivalence, and he adds a third form: $T$ is symmetric if and only if $(T\varphi,\varphi)$ is real for every $\varphi \in D(T)$.
- $T$ is **self-adjoint** if $T = T^{*}$, that is, $T$ is symmetric *and* $D(T^{*}) = D(T)$.
- $T$ is **essentially self-adjoint** if it is symmetric and its closure $\bar{T}$ is self-adjoint. A subspace $D \subseteq D(T)$ with $\overline{T|_{D}} = T$ is a **core**.

The whole content of this unit is in the two words "and $D(T^{*}) = D(T)$". For a symmetric $T$, $T^{*}$ is always defined on at least $D(T)$ and may be defined on much more; self-adjointness is the statement that it is defined on no more.

**The chain of inclusions.** Let $T$ be symmetric. Then $D(T^{*}) \supseteq D(T)$ is dense, so by part (b) of the theorem in :ref[]{to=funcan.unbounded-operators} $T$ is closable, with $\bar{T} = T^{**}$; and applying $S \subseteq T \Rightarrow T^{*} \subseteq S^{*}$ to $T \subseteq T^{*}$ gives $T^{**} \subseteq T^{*}$. Hence
$$
T \ \subseteq\ \bar{T} = T^{**}\ \subseteq\ T^{*} ,
$$
with $T = T^{**} \subseteq T^{*}$ when $T$ is closed and $T = T^{**} = T^{*}$ when $T$ is self-adjoint. Every symmetric operator therefore has a smallest closed symmetric extension, a fact :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 10.3-5, pp. 537–539"} proves directly, by constructing the closure and checking that symmetry survives the limit.

For **bounded** everywhere-defined operators the distinction collapses: $D(T) = D(T^{*}) = H$ automatically, so symmetric and self-adjoint mean the same thing, which is why the question does not arise in :ref[]{to=funcan.adjoint-operators}. By the Hellinger-Toeplitz theorem, an unbounded symmetric operator can never be defined everywhere, so for unbounded operators the question always arises.
:::

:::definition[Deficiency subspaces and deficiency indices]{provenance=adapted src="kreyszig-1978:§10.6, eq. (1), p. 556, and Problems 7 and 9, pp. 561–562"}
Let $T$ be a closed symmetric operator in $H$. The **deficiency subspaces** of $T$ are
$$
\mathcal{N}_{+} = \ker(T^{*} - iI) , \qquad \mathcal{N}_{-} = \ker(T^{*} + iI) ,
$$
and the **deficiency indices** are the pair of Hilbert dimensions
$$
n_{+} = \dim \mathcal{N}_{+} , \qquad n_{-} = \dim \mathcal{N}_{-} .
$$
Equivalently, as the proof below records,
$$
\mathcal{N}_{\pm} = \operatorname{Ran}(T \pm iI)^{\perp} ,
$$
so $n_{\pm}$ measures how far $T \pm iI$ is from being onto: the indices are zero exactly when the two ranges are dense.

:cite[Kreyszig]{work=kreyszig-1978 loc="§10.6, Problems 7 and 9, pp. 561–562"} introduces them through the **Cayley transform**
$$
U_{T} = (T - iI)(T + iI)^{-1} ,
$$
defining the deficiency indices as the Hilbert dimensions of $\mathcal{D}(U_{T})^{\perp}$ and $\mathcal{R}(U_{T})^{\perp}$, and states that both vanish exactly when $T$ is self-adjoint. Since $\mathcal{D}(U_{T}) = \operatorname{Ran}(T+iI)$ and $\mathcal{R}(U_{T}) = \operatorname{Ran}(T-iI)$, that is the same pair of numbers as above. The motivation for the transform, which :cite[Kreyszig]{work=kreyszig-1978 loc="§10.6, eq. (2), p. 556"} gives, is that the Möbius map $t \mapsto (t-i)/(t+i)$ carries the real axis to the unit circle, so it should carry self-adjoint operators to unitary ones; Lemma 10.6-1 confirms this.

Conventions differ over which index carries which sign, so the pairing $\mathcal{N}_{+} = \ker(T^{*}-iI)$ fixed here should be checked against any other source before its results are quoted.
:::

:::statement[Self-adjointness is decided at the two points $\pm i$]{provenance=adapted src="reed-simon-1980:Thm VIII.3 and its corollary, pp. 256–257"}
Let $H$ be a complex Hilbert space and let $T$ be symmetric in $H$. The three conditions below are equivalent; the result is :cite[Reed and Simon's basic criterion]{work=reed-simon-1980 loc="Thm VIII.3, pp. 256–257"}.

**(a)** $T$ is self-adjoint.

**(b)** $T$ is closed and $\ker(T^{*} \pm iI) = \{0\}$.

**(c)** $\operatorname{Ran}(T \pm iI) = H$.

In the language of the previous block: a **closed** symmetric operator is self-adjoint exactly when $n_{+} = n_{-} = 0$.

The corresponding statement for a symmetric operator that is not assumed closed is :cite[Reed and Simon's corollary]{work=reed-simon-1980 loc="Corollary to Thm VIII.3, p. 257"}: $T$ is essentially self-adjoint $\iff$ $\ker(T^{*} \pm iI) = \{0\}$ $\iff$ both ranges $\operatorname{Ran}(T \pm iI)$ are dense.

The number $i$ plays no special role beyond being non-real; what the proof uses is that $T \pm \lambda I$ is bounded below when $\operatorname{Im}\lambda \ne 0$, which is also the content of :cite[Stakgold and Holst's Thm 5.6.2(b)]{work=stakgold-holst-2011 loc="Thm 5.6.2(b), p. 328"}: for a symmetric operator the approximate spectrum lies on the real axis.
:::

:::statement[Equal deficiency indices are necessary for a self-adjoint extension]{provenance=adapted src="kreyszig-1978:Lemma 10.6-1, pp. 556–557, and §10.6, Problems 5–9, pp. 561–562; reed-simon-1980:Thm VIII.3, pp. 256–257"}
Let $T$ be a closed symmetric operator in $H$. If $T$ has a self-adjoint extension, then $n_{+} = n_{-}$.

Consequently a closed symmetric operator with $n_{+} \ne n_{-}$ has **no** self-adjoint extension at all, and in particular is not essentially self-adjoint and generates no unitary dynamics.

The converse — that $n_{+} = n_{-} = n$ implies a family of self-adjoint extensions parametrised by the unitary maps $\mathcal{N}_{+} \to \mathcal{N}_{-}$ — is von Neumann's extension theorem. Our library does not contain a statement of it: :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, p. 259"} exhibit a circle of self-adjoint extensions for the operator $i\,d/dx$ on $[0,1]$ and refer the explanation forward to Section X.1 of their second volume, which is not held here. In the worked example below we therefore verify the extensions directly, by computing adjoints, rather than quoting the general theorem.
:::

:::note[Symmetric, hermitian, self-adjoint: what the books mean]{provenance=adapted src="reed-simon-1980:§VIII.2, p. 255; hassani-2013:Def. 19.1.5 and footnote 3, p. 564; stakgold-holst-2011:§5.4, p. 317; arfken-2013:§5.4 and Example 5.4.1, pp. 283–284"}
The vocabulary is not uniform across our sources, and misreading it is the commonest way to misread a statement about an unbounded operator.

- :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, p. 255"} define *symmetric* and give *Hermitian* as a synonym for it, reserving *self-adjoint* for $T = T^{*}$.
- :cite[Hassani]{work=hassani-2013 loc="Def. 19.1.5 and footnote 3, p. 564"} uses *hermitian* for $T \subseteq T^{\dagger}$ and *self-adjoint* for $D(T)=D(T^{\dagger})$, and then says plainly that the distinction is confined to that one discussion and that the two words are used interchangeably in the rest of his book.
- :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.4, p. 317"} keep the two apart, and state the three facts to remember: every self-adjoint operator is symmetric; every bounded symmetric operator is self-adjoint; there are unbounded symmetric operators that are not self-adjoint.
- :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.4 and Example 5.4.1, pp. 283–284"} write *self-adjoint (Hermitian)* as one term, and check in Example 5.4.1 that multiplication by $x$ and $p = -i\,d/dx$ are self-adjoint on $L^{2}(-\infty,\infty)$ by comparing $\langle f | pg\rangle$ with $\langle pf | g\rangle$, integrating by parts and discarding the integrated term at $\pm\infty$. That calculation is the symmetry computation, performed on functions for which the boundary term vanishes; on the whole line its conclusion is also correct for self-adjointness, since :cite[Kreyszig's Thm 10.7-5]{work=kreyszig-1978 loc="Thm 10.7-5, p. 569"} states that $i\,d/dx$ on its natural domain — the locally absolutely continuous $L^{2}$ functions with $L^{2}$ derivative — is self-adjoint. On an interval or a half-line the same computation no longer settles the question, and the example below shows what it misses.

In this unit *symmetric* always means $T \subseteq T^{*}$ and nothing more.
:::

:::idea{provenance=original}
Why should the two particular numbers $\pm i$ decide everything?

Because for a symmetric operator they are the two points where $T - \lambda$ is as invertible as it can possibly be. Expanding the square and using that $(T\varphi,\varphi)$ is real,
$$
\|(T \pm i)\varphi\|^{2} = \|T\varphi\|^{2} + \|\varphi\|^{2} ,
$$
with no cross term. So $T \pm i$ is injective, bounded below, and — if $T$ is closed — has closed range. A closed subspace is the whole space exactly when its orthogonal complement vanishes, and that complement is a kernel of $T^{*} \mp i$. The three conditions of the criterion are therefore three readings of one geometric fact: how much of $H$ the ranges of $T \pm i$ miss.

The proof that self-adjointness is equivalent to missing nothing then runs in a circle. If $T = T^{*}$, an eigenvector of $T$ for the eigenvalue $i$ would make $(T\varphi,\varphi)$ non-real, so there is none. If there is none, the ranges are dense, and closedness upgrades dense to everything. If the ranges are everything, then any $\varphi \in D(T^{*})$ can be corrected by an element of $D(T)$ so that the difference is killed by $T^{*}-i$, and injectivity of $T^{*}-i$ forces the difference to vanish, putting $\varphi$ in $D(T)$.

Deficiency indices measure the failure, and the Cayley transform explains why they must be *equal* for an extension to exist. The transform turns $T$ into an isometry $U_{T}$ from $\operatorname{Ran}(T+i)$ onto $\operatorname{Ran}(T-i)$, and self-adjoint extensions of $T$ correspond to unitary extensions of $U_{T}$ to all of $H$. A unitary extension must carry the leftover space on one side isometrically onto the leftover space on the other; two leftover spaces of different dimension cannot be matched up, and no extension exists.
:::

:::proof[The chain and the reality of $(T\varphi,\varphi)$]{provenance=adapted src="kreyszig-1978:Lemma 10.2-4, pp. 533–534, and §10.2, p. 534; stakgold-holst-2011:Thm 5.6.2(a), pp. 327–328"}
**Symmetry as an inclusion.** If $T \subseteq T^{*}$ then for $\varphi,\psi \in D(T) \subseteq D(T^{*})$ we have $(T\varphi,\psi) = (\varphi, T^{*}\psi) = (\varphi,T\psi)$, since $T^{*}$ agrees with $T$ on $D(T)$. Conversely, if $(T\varphi,\psi) = (\varphi,T\psi)$ for all $\varphi,\psi \in D(T)$, then each $\psi \in D(T)$ satisfies the defining condition for membership of $D(T^{*})$, with $T^{*}\psi = T\psi$; so $D(T) \subseteq D(T^{*})$ and $T \subseteq T^{*}$.

**Reality.** If $T$ is symmetric and $\varphi \in D(T)$ then $(T\varphi,\varphi) = (\varphi,T\varphi) = \overline{(T\varphi,\varphi)}$, the first equality by symmetry and the second by the conjugate symmetry of the inner product; a number equal to its own conjugate is real. The converse uses polarisation: if $(T\varphi,\varphi)$ is real for all $\varphi \in D(T)$, then writing the sesquilinear form $B(\varphi,\psi) = (T\varphi,\psi) - (\varphi,T\psi)$ one checks that $B(\varphi,\varphi) = 0$ for all $\varphi$ and that $B$ is determined by its diagonal through the polarisation identity, so $B \equiv 0$. This is the third characterisation quoted from :cite[Kreyszig]{work=kreyszig-1978 loc="§10.2, p. 534"}. $\square$
:::

:::proof[The basic criterion]{provenance=adapted src="reed-simon-1980:Thm VIII.3, pp. 256–257"}
Throughout, $T$ is symmetric, so $(T\varphi,\varphi)$ is real for $\varphi \in D(T)$.

**Step 0: the identity with no cross term.** For $\varphi \in D(T)$,
$$
\|(T \pm i)\varphi\|^{2} = \|T\varphi\|^{2} \pm \overline{i}\,(T\varphi,\varphi) \pm i\,(\varphi,T\varphi) + \|\varphi\|^{2} = \|T\varphi\|^{2} + \|\varphi\|^{2} ,
$$
because $(T\varphi,\varphi) = (\varphi,T\varphi)$ is real and $\bar i + i = 0$. In particular $\|(T\pm i)\varphi\| \ge \|\varphi\|$, so $T \pm i$ is injective.

**Step 1: the orthogonal complement of a range is a kernel.** For $\psi \in H$,
$$
\psi \perp \operatorname{Ran}(T - i)
\iff ((T-i)\varphi, \psi) = 0 \ \text{ for all } \varphi \in D(T)
\iff (T\varphi,\psi) = i(\varphi,\psi) = (\varphi, -i\psi) \ \text{ for all } \varphi \in D(T) ,
$$
and the last statement says exactly that $\psi \in D(T^{*})$ with $T^{*}\psi = -i\psi$. So $\operatorname{Ran}(T-i)^{\perp} = \ker(T^{*}+i) = \mathcal{N}_{-}$, and the same computation with the signs reversed gives $\operatorname{Ran}(T+i)^{\perp} = \ker(T^{*}-i) = \mathcal{N}_{+}$.

**Step 2: (a) implies (b).** Let $T = T^{*}$. Then $T$ is closed, because an adjoint is always closed. If $T^{*}\varphi = i\varphi$ then $\varphi \in D(T^{*}) = D(T)$ and $T\varphi = i\varphi$, so
$$
i\|\varphi\|^{2} = (i\varphi,\varphi) = (T\varphi,\varphi) = (\varphi,T\varphi) = (\varphi, i\varphi) = -i\|\varphi\|^{2} ,
$$
forcing $\|\varphi\|^{2} = 0$. The same with $-i$ in place of $i$. Hence both kernels are trivial.

**Step 3: (b) implies (c).** By Step 1, $\ker(T^{*}+i) = \{0\}$ says $\operatorname{Ran}(T-i)^{\perp} = \{0\}$, that is, $\operatorname{Ran}(T-i)$ is dense. It is also closed: if $(T-i)\varphi_{n} \to \chi$, then by Step 0
$$
\|\varphi_{n}-\varphi_{m}\|^{2} + \|T\varphi_{n}-T\varphi_{m}\|^{2} = \|(T-i)(\varphi_{n}-\varphi_{m})\|^{2} \to 0 ,
$$
so both $(\varphi_{n})$ and $(T\varphi_{n})$ are Cauchy; let $\varphi_{n} \to \varphi$ and $T\varphi_{n}\to\eta$. Here the hypothesis that $T$ is **closed** enters: it gives $\varphi \in D(T)$ and $T\varphi = \eta$, whence $(T-i)\varphi = \chi$ and $\chi \in \operatorname{Ran}(T-i)$. A dense closed subspace is the whole space, so $\operatorname{Ran}(T-i) = H$; likewise $\operatorname{Ran}(T+i) = H$.

**Step 4: (c) implies (a).** Assume both ranges are all of $H$. First, $\ker(T^{*}-i) = \operatorname{Ran}(T+i)^{\perp} = H^{\perp} = \{0\}$ by Step 1. Now take any $\varphi \in D(T^{*})$. Since $\operatorname{Ran}(T-i) = H$, there is $\eta \in D(T)$ with
$$
(T - i)\eta = (T^{*}-i)\varphi .
$$
Because $T$ is symmetric, $D(T) \subseteq D(T^{*})$ and $T^{*}\eta = T\eta$; so $\varphi - \eta \in D(T^{*})$ and $(T^{*}-i)(\varphi-\eta) = 0$. By the triviality of $\ker(T^{*}-i)$ just established, $\varphi = \eta \in D(T)$. Hence $D(T^{*}) \subseteq D(T)$; the reverse inclusion is symmetry, and the two operators agree where both are defined. So $T = T^{*}$.

**The corollary.** Apply the theorem to $\bar{T} = T^{**}$, which is closed and symmetric, and use $(\bar{T})^{*} = T^{*}$ from :ref[]{to=funcan.unbounded-operators}: then $\bar{T}$ is self-adjoint $\iff$ $\ker(T^{*}\pm i) = \{0\}$ $\iff$ $\operatorname{Ran}(\bar T \pm i) = H$. Finally $\operatorname{Ran}(\bar{T}\pm i)$ is the closure of $\operatorname{Ran}(T \pm i)$, since $\bar T$ is the closure of $T$ and Step 0 makes $T\pm i$ bounded below; so the last condition is that $\operatorname{Ran}(T\pm i)$ be dense. $\square$
:::

:::proof[Equal indices are necessary]{provenance=adapted src="kreyszig-1978:Lemma 10.6-1, pp. 556–557, and §10.6, Problems 5–7, pp. 561–562; reed-simon-1980:Thm VIII.3, pp. 256–257"}
Let $T$ be closed and symmetric.

**Step 1: the Cayley transform of $T$ is an isometry between two closed subspaces.** By Step 0 of the previous proof, $T+i$ is injective, so
$$
U_{T} = (T-i)(T+i)^{-1} : \operatorname{Ran}(T+i) \longrightarrow \operatorname{Ran}(T-i)
$$
is a well-defined linear bijection, and Step 3 of that proof shows both ranges are closed (that step used only closedness of $T$, not the triviality of the kernels). It is isometric: writing $\chi = (T+i)\varphi$, Step 0 gives
$$
\|U_{T}\chi\|^{2} = \|(T-i)\varphi\|^{2} = \|T\varphi\|^{2}+\|\varphi\|^{2} = \|(T+i)\varphi\|^{2} = \|\chi\|^{2} .
$$
This is the computation :cite[Kreyszig]{work=kreyszig-1978 loc="Lemma 10.6-1, p. 557"} performs for a self-adjoint $T$; it uses only that $(T\varphi,\varphi)$ is real, hence only symmetry.

**Step 2: a self-adjoint extension gives a unitary extension of $U_{T}$.** Let $S \supseteq T$ be self-adjoint. By the criterion, $\operatorname{Ran}(S \pm i) = H$, so $U_{S} = (S-i)(S+i)^{-1}$ is defined on all of $H$, maps onto $H$, and is isometric by Step 1 applied to $S$: it is unitary. And $U_{S}$ extends $U_{T}$: if $\chi = (T+i)\varphi$ with $\varphi \in D(T) \subseteq D(S)$, then $(S+i)\varphi = (T+i)\varphi = \chi$, so $U_{S}\chi = (S-i)\varphi = (T-i)\varphi = U_{T}\chi$.

**Step 3: a unitary matches the leftovers.** Write $M = \operatorname{Ran}(T+i)$ and $N = \operatorname{Ran}(T-i)$, both closed. By Step 2, $U_{S}[M] = U_{T}[M] = N$. A unitary operator is a surjective isometry, so it carries orthogonal complements to orthogonal complements: if $x \perp M$ then $(U_{S}x, U_{S}y) = (x,y) = 0$ for every $y \in M$, so $U_{S}x \perp N$; and applying the same argument to $U_{S}^{-1}$ gives the reverse inclusion. Hence $U_{S}$ restricts to a unitary map $M^{\perp} \to N^{\perp}$, and these two spaces have the same Hilbert dimension:
$$
n_{+} = \dim \mathcal{N}_{+} = \dim \operatorname{Ran}(T+i)^{\perp} = \dim M^{\perp} = \dim N^{\perp} = \dim \operatorname{Ran}(T-i)^{\perp} = \dim\mathcal{N}_{-} = n_{-} ,
$$
using Step 1 of the previous proof to identify the complements with the deficiency subspaces. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Symmetry** is used in Step 0 of the criterion, to kill the cross term; everything else follows from that identity. Without it, $T \pm i$ need not be bounded below and no part of the argument survives.
- **Closedness** is used exactly once, in Step 3, to pass from *dense range* to *full range*. This is the whole difference between self-adjointness and essential self-adjointness: $-i\,d/dx$ on $C_{c}^{\infty}(\mathbb{R})$ has trivial deficiency subspaces and dense ranges, hence is essentially self-adjoint, but is not self-adjoint, because it is not closed. Its closure is.
- **Complex scalars** are essential. On a *real* Hilbert space $\pm i$ do not exist, the criterion has no statement, and the reality of $(T\varphi,\varphi)$ carries no information. Every result here presupposes the complex field, as :cite[Kreyszig]{work=kreyszig-1978 loc="Ch. 10, p. 524"} states at the head of his chapter.
- **Density of $D(T)$** is needed before $T^{*}$ exists at all, and hence before "symmetric" can be phrased as $T \subseteq T^{*}$.
- **Equal indices do not come for free.** The half-line example below has $(n_{+},n_{-}) = (1,0)$. For *real* operators — those commuting with a conjugation, such as a Schrödinger operator with real potential — the two indices are always equal and self-adjoint extensions always exist; that fact is not proved here and is not stated in our library.
- **Essential self-adjointness is a uniqueness statement.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, p. 256"} note that an essentially self-adjoint $T$ has exactly one self-adjoint extension: if $S$ is self-adjoint with $S \supseteq T$ then $S$ is closed, so $S \supseteq T^{**}$, hence $S = S^{*} \subseteq (T^{**})^{*} = T^{***} = T^{**}$, giving $S = T^{**}$. This is what makes it the useful property in practice: it says that specifying the operator on a convenient small domain already specifies the physics.
- **What is at stake.** The spectral theorem (:ref[]{to=funcan.spectral-theorem-general}) and the exponentiation $e^{-itT}$ that produces a unitary dynamics (:ref[]{to=funcan.stone-theorem}) hold for self-adjoint operators and fail for merely closed symmetric ones; :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, p. 256"} make this the reason the distinction matters. Note also that a closed symmetric $T$ falling short of self-adjointness has non-real points in its spectrum, even though $(T\varphi,\varphi)$ is real throughout its domain: Step 1 of the proof gives $\operatorname{Ran}(T+i)^{\perp} = \mathcal{N}_{+}$ and $\operatorname{Ran}(T-i)^{\perp} = \mathcal{N}_{-}$, so $n_{+} \ne 0$ makes $T+i$ fail to be onto and puts $-i$ in the spectrum, while $n_{-} \ne 0$ puts $+i$ there (:ref[]{to=funcan.spectrum}).
:::

:::method[Deciding whether a differential operator is self-adjoint]{provenance=original}
For a formally self-adjoint differential expression $\tau$ on an interval $(a,b)$, finite or infinite, and a proposed domain $D$:

1. **Check symmetry.** Integrate by parts to isolate the boundary form, as in the method of :ref[]{to=funcan.unbounded-operators}. The operator is symmetric exactly when the boundary form vanishes for all pairs $u, v \in D$.
2. **Compute the adjoint.** Repeat the integration by parts with $u \in D$ and $v$ unrestricted, and read off the boundary conditions on $v$. The formula for $T^{*}$ is always $\tau$; only the domain is in question.
3. **Compare the two domains.** If they coincide, $T$ is self-adjoint and you are finished. If $D(T^{*})$ is strictly larger, continue.
4. **Compute the deficiency indices.** Solve $\tau v = \pm i v$ — an ordinary differential equation with constant or variable coefficients, solvable in closed form in the easy cases — and count how many of its solutions lie in $L^{2}(a,b)$ *and* in $D(T^{*})$. Those counts are $n_{+}$ and $n_{-}$. Solutions are discarded when they fail to be square-integrable, which is why the answer differs between a bounded interval, a half-line and the whole line.
5. **Read off the verdict.** If $n_{+} = n_{-} = 0$ and $T$ is closed, $T$ is self-adjoint; if $n_{+} = n_{-} = 0$ and $T$ is not closed, it is essentially self-adjoint and the closure is the operator you want. If $n_{+} \ne n_{-}$, stop: there is no self-adjoint extension.
6. **If $n_{+} = n_{-} = n > 0$, hunt for the extensions by hand.** Enlarge $D$ by imposing $n$ boundary conditions containing a parameter, recompute the adjoint domain as in step 2, and solve for the parameter values that make the two domains agree. For a first-order operator on a bounded interval this is a single equation in one unknown, done below.
:::

:::example[Momentum on an interval and on a half-line]{provenance=original}
Throughout, $p = -i\,\dfrac{d}{dx}$, the physicists' momentum with $\hbar = 1$, and $(f,g) = \int f\bar g$. For any $u,v$ absolutely continuous on $[c,d]$ with $L^{2}$ derivatives,
$$
(pu, v) - (u, pv) = -i\int_{c}^{d}\bigl(u'\bar v + u \bar v'\bigr)\,dx = -i\Bigl[u\bar v\Bigr]_{c}^{d} ,
\tag{$\ast$}
$$
since $\overline{-i v'} = i\bar v'$. Everything below is read off from $(\ast)$.

---

**(A) Dirichlet domain on $[0,1]$: symmetric, not self-adjoint.** Let
$$
D(p_{0}) = \{\, u \in AC[0,1] : u' \in L^{2},\ u(0) = u(1) = 0 \,\} , \qquad p_{0}u = -iu' .
$$
By $(\ast)$ the boundary term vanishes for all $u,v \in D(p_{0})$, so $p_{0}$ is symmetric. Its adjoint, computed as in :cite[Stakgold and Holst's Example 3]{work=stakgold-holst-2011 loc="Example 3, p. 320"}, carries **no** boundary condition:
$$
p_{0}^{*}v = -iv' , \qquad D(p_{0}^{*}) = \{\, v \in AC[0,1] : v' \in L^{2} \,\} .
$$
Indeed $(\ast)$ shows the boundary term $-i[u\bar v]_{0}^{1}$ already vanishes for every $u \in D(p_{0})$, whatever $v$ does. The domains are therefore different by two complex dimensions' worth of boundary values, and $p_{0}$ is not self-adjoint. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, pp. 257–258"} obtain the same adjoint for $i\,d/dx$ on the same domain.

**Deficiency indices.** Solve $p_{0}^{*}v = \pm iv$, that is $-iv' = \pm i v$:
$$
v' = -v \ \Rightarrow\ v = e^{-x} \quad (\text{for } +i), \qquad
v' = +v \ \Rightarrow\ v = e^{x} \quad (\text{for } -i) .
$$
Both are absolutely continuous on $[0,1]$ with $L^{2}$ derivative, so both lie in $D(p_{0}^{*})$, and each solution space is one-dimensional:
$$
n_{+} = \dim\ker(p_{0}^{*}-i) = 1 , \qquad n_{-} = \dim\ker(p_{0}^{*}+i) = 1 .
$$
The indices are equal, so a self-adjoint extension is not excluded; we now produce them.

---

**(B) The circle of self-adjoint extensions.** For a complex number $\alpha \ne 0$ put
$$
D(p_{\alpha}) = \{\, u \in AC[0,1] : u' \in L^{2},\ u(1) = \alpha\,u(0) \,\} , \qquad p_{\alpha}u = -iu' .
$$
Each $p_{\alpha}$ extends $p_{0}$, since $u(0)=u(1)=0$ satisfies the condition. By $(\ast)$, for $u, v \in D(p_{\alpha})$,
$$
(p_{\alpha}u,v) - (u,p_{\alpha}v) = -i\bigl[u(1)\overline{v(1)} - u(0)\overline{v(0)}\bigr]
= -i\,u(0)\overline{v(0)}\bigl(|\alpha|^{2} - 1\bigr) ,
$$
using $u(1) = \alpha u(0)$ and $\overline{v(1)} = \bar\alpha\,\overline{v(0)}$. Since $u(0)$ and $v(0)$ are free, this vanishes identically **exactly when $|\alpha| = 1$**. So $p_{\alpha}$ is symmetric precisely on the unit circle of parameters.

For $|\alpha|=1$ the operator is in fact self-adjoint. Let $v \in D(p_{\alpha}^{*})$; as in step 3 of the method the formula is forced to be $-iv'$ with $v \in AC[0,1]$, and the remaining requirement from $(\ast)$ is
$$
u(1)\overline{v(1)} - u(0)\overline{v(0)} = 0 \quad\text{for all } u \in D(p_{\alpha}) ,
$$
that is $u(0)\bigl[\alpha\overline{v(1)} - \overline{v(0)}\bigr] = 0$ for all values of $u(0)$, hence $\alpha \overline{v(1)} = \overline{v(0)}$, hence $v(1) = \bar\alpha^{-1} v(0) = \alpha\,v(0)$ because $|\alpha|=1$. The adjoint domain is $D(p_{\alpha})$ itself: $p_{\alpha}^{*} = p_{\alpha}$.

This reproduces, with $\alpha = e^{i\theta}$, the circle of distinct self-adjoint extensions that :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, p. 259"} exhibit for $i\,d/dx$. :cite[Stakgold and Holst's Example 2]{work=stakgold-holst-2011 loc="Example 2, p. 319"} run the same computation but allow only **real** $a$ in the boundary condition, and therefore find exactly two self-adjoint members, $a = 1$ and $a = -1$; these are the points $\theta = 0$ and $\theta = \pi$ of the circle, and the two statements agree.

**Spectrum of $p_{\alpha}$.** Write $\alpha = e^{i\theta}$ with $\theta \in [0,2\pi)$. Solving $-iu' = \lambda u$ gives $u(x) = c\,e^{i\lambda x}$, and the boundary condition $u(1) = \alpha u(0)$ reads $e^{i\lambda} = e^{i\theta}$, so
$$
\lambda_{n} = \theta + 2\pi n , \qquad n \in \mathbb{Z} ,
$$
all real, as they must be for a self-adjoint operator. The normalised eigenfunctions are $e_{n}(x) = e^{i\lambda_{n}x}$: they satisfy $\|e_{n}\|=1$ and
$$
(e_{n},e_{m}) = \int_{0}^{1} e^{i(\lambda_{n}-\lambda_{m})x}\,dx = \int_{0}^{1} e^{2\pi i (n-m)x}\,dx = \delta_{nm} .
$$
They are a complete orthonormal set, because $e_{n}(x) = e^{i\theta x}\,e^{2\pi i n x}$ and multiplication by the unimodular function $e^{i\theta x}$ is a unitary map of $L^{2}(0,1)$ onto itself, which carries the Fourier basis $\{e^{2\pi i n x}\}$ of :ref[]{to=fourier.fourier-series} to $\{e_{n}\}$ (see :ref[]{to=funcan.orthonormal-bases}). So each $p_{\alpha}$ has a complete set of eigenfunctions and a purely real, purely discrete spectrum — and the spectra of different $\alpha$ are genuinely different sets, which is the sharpest possible statement that these are different operators.

**A numerical check.** Take $\alpha = i$, that is $\theta = \pi/2$, and
$$
u(x) = 1 + (i-1)x ,
$$
so $u(0) = 1$ and $u(1) = i = \alpha\,u(0)$: thus $u \in D(p_{i})$. Then $|u(x)|^{2} = (1-x)^{2} + x^{2}$ and
$$
\|u\|^{2} = \int_{0}^{1}\bigl[(1-x)^{2}+x^{2}\bigr]dx = \tfrac13 + \tfrac13 = \tfrac23 .
$$
Also $p_{i}u = -i(i-1) = 1+i$, a constant, so
$$
(p_{i}u, u) = (1+i)\int_{0}^{1}\overline{1+(i-1)x}\,dx = (1+i)\Bigl(1 + \frac{-1-i}{2}\Bigr) = (1+i)\cdot\frac{1-i}{2} = \frac{1+1}{2} = 1 .
$$
This is real, as symmetry requires, and the expectation value is
$$
\langle p \rangle = \frac{(p_{i}u,u)}{\|u\|^{2}} = \frac{1}{2/3} = \frac{3}{2} = 1.5 .
$$
For comparison, the eigenvalues of $p_{i}$ are $\lambda_{n} = \tfrac{\pi}{2} + 2\pi n$; the two nearest zero are $\lambda_{-1} = -3\pi/2 \approx -4.7124$ and $\lambda_{0} = \pi/2 \approx 1.5708$, and the value $1.5$ falls between them. Had the same calculation produced a complex number, or had it produced a real number for one state and a complex one for another, the operator would not have been symmetric.

**Contrast with $|\alpha| \ne 1$.** Take $\alpha = 2$ and $u(x) = 1+x$, so $u(0)=1$, $u(1) = 2 = 2u(0)$ and $u \in D(p_{2})$. Then $p_{2}u = -i$ and
$$
(p_{2}u, u) = -i\int_{0}^{1}(1+x)\,dx = -\tfrac{3}{2}i ,
$$
which is not real. By the reality criterion, $p_{2}$ is not symmetric — exactly as the boundary-form computation predicted, since $|2|^{2}-1 = 3 \ne 0$.

---

**(C) The half-line: no self-adjoint extension exists.** On $H = L^{2}(0,\infty)$ let
$$
D(p_{+}) = \{\, u : u \text{ locally absolutely continuous on } [0,\infty),\ u, u' \in L^{2}(0,\infty),\ u(0)=0 \,\} , \qquad p_{+}u = -iu' .
$$
The domain contains $C_{c}^{\infty}(0,\infty)$ and is therefore dense.

**A lemma: functions in the domain vanish at infinity.** If $u$ and $u'$ are both in $L^{2}(0,\infty)$ and $u$ is locally absolutely continuous, then for $x > 0$
$$
|u(x)|^{2} = |u(0)|^{2} + 2\operatorname{Re}\int_{0}^{x} u'(t)\overline{u(t)}\,dt ,
$$
and $u'\bar u \in L^{1}(0,\infty)$ by Cauchy-Schwarz, so the right-hand side converges as $x \to \infty$; the limit of $|u(x)|^{2}$ must be $0$, since a positive limit would contradict $u \in L^{2}$.

**Symmetry.** Apply $(\ast)$ on $[0,R]$ and let $R \to \infty$: the term at $R$ vanishes by the lemma and the term at $0$ vanishes because $u(0)=0$. So $p_{+}$ is symmetric.

**Deficiency indices.** Let $v \in \ker(p_{+}^{*} - i)$, so $(p_{+}u, v) = (u, iv)$ for every $u \in D(p_{+})$. Testing with $u \in C_{c}^{\infty}(0,\infty)$ gives $-i\int u'\bar v = -i\int u \bar v$, hence $\int u'\bar v = \int u\bar v$ for all test functions $u$; by the definition of the weak derivative (:ref[]{to=pde.weak-solutions-sobolev}) this says $-\bar v' = \bar v$, so $v(x) = c\,e^{-x}$. And $e^{-x}$ really does belong: for $u \in D(p_{+})$,
$$
(p_{+}u, e^{-x}) = -i\int_{0}^{\infty} u'e^{-x}dx = -i\Bigl(\bigl[ue^{-x}\bigr]_{0}^{\infty} + \int_{0}^{\infty}u e^{-x}dx\Bigr) = -i\int_{0}^{\infty}ue^{-x}dx = (u,\, i\,e^{-x}) ,
$$
the boundary terms vanishing by $u(0)=0$ and the lemma. So $\mathcal{N}_{+} = \mathbb{C}\,e^{-x}$ and $n_{+} = 1$; for the record $\|e^{-x}\|^{2}_{L^{2}(0,\infty)} = \int_{0}^{\infty}e^{-2x}dx = \tfrac12$.

The same computation with $-i$ gives $v(x) = c\,e^{x}$, and
$$
\int_{0}^{\infty} e^{2x}\,dx = \infty ,
$$
so no non-zero multiple lies in $L^{2}(0,\infty)$: $\mathcal{N}_{-} = \{0\}$ and $n_{-} = 0$.

**Verdict.** $(n_{+}, n_{-}) = (1,0)$. The indices are unequal, so by the theorem above the closure of $p_{+}$ has no self-adjoint extension whatever. The momentum of a particle confined to a half-line is not an observable — not because we have failed to find the right boundary condition, but because the count forbids one. Compare the three cases: on $(0,1)$ the indices are $(1,1)$ and there is a circle of answers; on $(0,\infty)$ they are $(1,0)$ and there is none; on $\mathbb{R}$ neither $e^{-x}$ nor $e^{x}$ is square-integrable, the indices are $(0,0)$, and the operator is essentially self-adjoint on the smooth compactly supported functions, with the unique self-adjoint realisation that :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 10.7-5, p. 569"} states for $i\,d/dx$ on the line.
:::

:::application[Boundary conditions as physics]{provenance=original}
**Why a physicist should care about a domain.** An observable in quantum mechanics is a self-adjoint operator, not a symmetric one, because it is self-adjointness that delivers the spectral measure from which measurement probabilities are read (:ref[]{to=funcan.spectral-theorem-general}, :ref[]{to=funcan.quantum-mechanics-framework}) and the unitary group $e^{-iHt/\hbar}$ that moves states in time (:ref[]{to=funcan.stone-theorem}). :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.4, p. 283"} state the requirement in its physical form: the expectation value of an observable must be real. Reality of $\langle A \rangle$ is symmetry, and the calculation above shows that on a bounded region symmetry alone leaves a whole circle of inequivalent operators, each with a different spectrum.

**The particle in a box.** For a particle confined to $0 \le x \le 1$ with the usual walls, the wavefunction satisfies $\psi(0) = \psi(1) = 0$, and the momentum operator on that domain is case (A): symmetric, with deficiency indices $(1,1)$, and not self-adjoint. There is no momentum observable for a particle in a box, and the familiar fact that the energy eigenfunctions $\sin(n\pi x)$ are not momentum eigenfunctions is the visible symptom. The Hamiltonian $-\tfrac{\hbar^{2}}{2m}\,d^{2}/dx^{2}$ on the same domain *is* self-adjoint, which is why the energies are well defined even though the momentum is not; a formally self-adjoint expression can thus be self-adjoint at one order and not at another on the same boundary conditions.

**The particle on a ring.** Identify $x=0$ with $x=1$ and the natural domains are the $p_{\alpha}$ of case (B). The parameter $\alpha = e^{i\theta}$ is a physical quantity: it is the phase a wavefunction picks up on going once round, and the spectrum $\theta + 2\pi n$ shifts rigidly with it. A magnetic flux threading the ring produces exactly this, because the gauge transformation $\psi \mapsto e^{i\theta x}\psi$ carries the periodic domain $\theta = 0$ to the twisted domain of parameter $\theta$ while preserving the inner product; the flux is not a term in the operator but a choice of self-adjoint extension. The same structure appears as the Bloch phase of a band electron in a periodic crystal, where $\theta$ is the crystal momentum.

**Half-lines and radial problems.** Case (C) is the reason a radial coordinate has to be handled with care: the radial momentum $-i\partial_{r}$ on $(0,\infty)$ has unequal deficiency indices and is not an observable, although the radial kinetic energy is. More generally, the deficiency-index count is the rigorous content of the physicist's question "which boundary conditions are allowed?": for a singular Sturm-Liouville problem (:ref[]{to=ode.sturm-liouville-theory}) it is the number of solutions of $\tau v = \pm i v$ that survive in $L^{2}$ near each singular endpoint that decides how many conditions must be imposed, and whether the problem is determined at all. The limit-point and limit-circle vocabulary of that theory is the same count under another name.

**And in applied mathematics generally.** The pattern recurs wherever an evolution equation is posed on a bounded domain. A diffusion or wave problem is well posed only when the generator with its boundary conditions is a genuine self-adjoint (or generating) operator; the family of admissible boundary conditions is the family of extensions, and each one encodes a different physical boundary — reflecting, absorbing, periodic. The operator-semigroup framework of :ref[]{to=pde.operator-semigroups} takes this as its starting hypothesis, and the work of verifying it is precisely the work done in this unit.
:::
