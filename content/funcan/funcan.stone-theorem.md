---
id: funcan.stone-theorem
title: Stone's theorem
kind: theorem
level: advanced
summary: "Identifies the strongly continuous one-parameter unitary groups on a Hilbert space with the self-adjoint operators: every self-adjoint $A$ exponentiates to a group $U(t)=e^{itA}$ whose strong derivative at the origin recovers $A$ on exactly its own domain, and conversely every such group is of that form for one and only one self-adjoint operator, which is the mathematical content of the statement that a quantum Hamiltonian generates the time evolution."
prereqs: [funcan.spectral-theorem-general, funcan.symmetric-self-adjoint, funcan.unbounded-operators, funcan.adjoint-operators, funcan.bounded-operators, funcan.hilbert-spaces, funcan.orthonormal-bases, measure.dominated-convergence, measure.lebesgue-integral]
provenance: adapted
sources:
  - work: reed-simon-1980
    loc: "Ch. VIII, §VIII.4 (\"Stone's theorem\"), pp. 264-270: the opening remark that $e^{itA}$ can be defined by its power series only when $A$ is bounded and must otherwise be built from the functional calculus of the previous section, p. 264; Thm VIII.7, with its four parts (a) the group and unitarity laws, (b) strong continuity, (c) differentiability of $e^{itA}\\psi$ at the origin for $\\psi \\in D(A)$, (d) the converse that the existence of the strong derivative forces $\\psi \\in D(A)$, together with its proof by dominated convergence applied to $|e^{it\\lambda}-1|^2$ and $|e^{it\\lambda}-1| \\le |t\\lambda|$ and the closing symmetry-plus-maximality argument $B \\supseteq A \\Rightarrow B = A$, p. 265; the definition of a strongly continuous one-parameter unitary group as an operator-valued function satisfying (a) and (b), p. 265; Thm VIII.8 (Stone's theorem) with its full proof, pp. 266-267, namely the smoothed vectors $\\varphi_f = \\int f(t)U(t)\\varphi\\,dt$ for $f \\in C_0^\\infty(\\mathbb{R})$ taken as a Riemann integral, the density of their span through an approximate identity $j_\\varepsilon$, the difference-quotient computation $s^{-1}(U(s)-I)\\varphi_f \\to \\varphi_{-f'}$ and the definition $A\\varphi_f = i^{-1}\\varphi_{-f'}$, the symmetry of $A$ on that domain, the deficiency argument in which $f(t) = (U(t)\\varphi, u)$ solves $f' = f$ and boundedness of $U$ forces $f(0)=0$, and the final energy argument $\\frac{d}{dt}\\lVert w(t)\\rVert^2 = 0$ for $w(t) = U(t)\\varphi - e^{itA}\\varphi$; the definition of the infinitesimal generator, p. 268; the calculation showing weak continuity implies strong continuity and Thm VIII.9 (von Neumann), that weak measurability of $(U(t)\\psi,\\varphi)$ on a separable space already implies strong continuity, pp. 268-269; Thm VIII.10 (essential self-adjointness of $i^{-1}$ times the strong derivative on an invariant dense domain) and Thm VIII.11 (an invariant dense subset of $D(A)$ is a core), p. 269; Thm VIII.12, the $n$-parameter version with its joint projection-valued measure on $\\mathbb{R}^n$, p. 270. Also §VIII.2, pp. 255-256, for the remark that only self-adjoint operators generate unitary groups, and the Notes to §VIII.4, p. 306, for the attribution of this proof to Gårding and Wightmann (unpublished) and of the group-invariance idea to Nelson, together with the name \"Gårding domain\" for the set of smoothed vectors"
    pages: "255-256, 264-271, 306"
    role: "all statements and both proof routes; the definition of the generator; the measurability refinement and the core criteria; the attribution of the proof. Note for reviewers: in the scanned copy of this edition the leaves carrying pp. 264-271 are bound out of order, so `tools/corpus/pages.mjs` prints Thm VIII.8 under its label `p. 270` and Thm VIII.7 under `p. 267`. The page numbers cited here and in the blocks are the ones printed in the book's own running heads, as read off the page images."
  - work: arfken-2013
    loc: "§17.7 (\"Continuous Groups\"), pp. 845-847: the definition of a one-parameter continuous group, Lie's idea of describing a group by generators, Eq. (17.35) $U(\\delta\\varphi) = 1 + i\\,\\delta\\varphi\\,S$ with the remark that the factor $i$ is placed outside $S$ for convenience, the limit $U(\\varphi) = \\lim_{N\\to\\infty}(1 + i\\varphi S/N)^N$ leading to Eq. (17.36) $U(\\varphi) = \\exp(i\\varphi S)$, Eq. (17.37) $-i\\,dU/d\\varphi|_{\\varphi=0} = S$ recovering the generator by differentiation at the identity, and Eq. (17.40), the argument that unitarity of $U$ forces $S = S^\\dagger$; Example 17.7.1, which carries this out for $SO(2)$, where $S = \\sigma_2$ and $U(\\varphi) = 1_2\\cos\\varphi + i\\sigma_2\\sin\\varphi$ is the $2\\times 2$ rotation matrix"
    pages: "845-847"
    role: the physicists' finite-dimensional version of the theorem, including the exponential limit, the differentiation formula for the generator, and the argument that unitarity makes the generator Hermitian
  - work: lee-2013
    loc: "Ch. 9 (\"Integral Curves and Flows\"), pp. 209-210: the definition of a global flow on a smooth manifold as a continuous left action of the additive group $\\mathbb{R}$, with the group laws (9.3) $\\theta_t \\circ \\theta_s = \\theta_{t+s}$ and $\\theta_0 = \\mathrm{Id}_M$ and the observation that each $\\theta_t$ is then a homeomorphism (a diffeomorphism when the flow is smooth); the definition of the infinitesimal generator of a flow as the vector field $V_p = \\theta^{(p)\\prime}(0)$; and Proposition 9.7, that the infinitesimal generator of a smooth global flow is a smooth vector field whose integral curves are the orbits of the flow"
    pages: "209-210"
    role: the parallel statement in differential geometry, where the same correspondence runs between global flows and vector fields, used in the application block
---

:::definition[One-parameter unitary groups and their generators]{provenance=adapted src="reed-simon-1980:§VIII.4, the definition following Thm VIII.7, p. 265, and the definition of the infinitesimal generator, p. 268"}
Throughout, $\mathcal{H}$ is a complex Hilbert space, the inner product $(\varphi,\psi)$ is taken linear in its first argument, and $\mathcal{D}(A)$ denotes the domain of an operator $A$ (:ref[]{to=funcan.unbounded-operators}).

A map $t \mapsto U(t)$ from $\mathbb{R}$ into the operators on $\mathcal{H}$ is a **strongly continuous one-parameter unitary group** if

1. every $U(t)$ is unitary and $U(t+s) = U(t)U(s)$ for all real $s,t$; and
2. $U(t)\varphi \to U(t_0)\varphi$ in the norm of $\mathcal{H}$ whenever $t \to t_0$, for each fixed $\varphi \in \mathcal{H}$.

Condition 1 forces $U(0) = I$ and $U(-t) = U(t)^{-1} = U(t)^{*}$. Condition 2 is continuity of each *orbit* $t \mapsto U(t)\varphi$, not continuity of $t \mapsto U(t)$ in the operator norm; the distinction matters, because norm continuity is a much stronger demand that the interesting groups do not meet (see the remark below).

Given a self-adjoint $A$, the operator
$$
e^{itA} \;=\; h_t(A) , \qquad h_t(\lambda) = e^{it\lambda} ,
$$
is defined by the Borel functional calculus of :ref[]{to=funcan.spectral-theorem-general}; $h_t$ is bounded with $\lVert h_t\rVert_\infty = 1$, so $e^{itA}$ is a bounded operator defined on all of $\mathcal{H}$, whatever the domain of $A$. When $A$ is bounded this agrees with the norm-convergent power series $\sum_{n\ge 0}(it)^nA^n/n!$, but for unbounded $A$ the series is unavailable and the functional calculus is the definition.

If $U(t)$ is a strongly continuous one-parameter unitary group and $A$ is the self-adjoint operator with $U(t) = e^{itA}$, then $A$ is the **infinitesimal generator** of $U$. Part C of the statement below says that there is only one such $A$, so the definite article is justified.
:::

:::statement[Stone's theorem]{provenance=adapted src="reed-simon-1980:§VIII.4, Thm VIII.7, p. 265, Thm VIII.8, p. 266, and Thms VIII.10 and VIII.11, p. 269"}
**A. Exponentiating a self-adjoint operator.** Let $A$ be self-adjoint on $\mathcal{H}$ and set $U(t) = e^{itA}$. Then

1. each $U(t)$ is unitary and $U(t+s) = U(t)U(s)$ for all $s,t \in \mathbb{R}$;
2. $U(t)\varphi \to U(t_0)\varphi$ for every $\varphi \in \mathcal{H}$ as $t \to t_0$;
3. for every $\psi \in \mathcal{D}(A)$,
$$
\frac{U(t)\psi - \psi}{t} \;\longrightarrow\; iA\psi \qquad (t \to 0) ;
$$
4. conversely, if $\psi \in \mathcal{H}$ is such that $\lim_{t\to 0} t^{-1}\bigl(U(t)\psi - \psi\bigr)$ exists in $\mathcal{H}$, then $\psi \in \mathcal{D}(A)$.

So $U$ is a strongly continuous one-parameter unitary group, and parts 3 and 4 together say that the strong derivative of $U$ at the origin exists on $\mathcal{D}(A)$ and nowhere else.

**B. The converse (Stone).** Conversely, suppose $t \mapsto U(t)$ is a unitary group in the sense of the definition above, strong continuity included. Then some self-adjoint operator $A$ satisfies
$$
U(t) \;=\; e^{itA} \qquad \text{for every real } t .
$$

**C. Uniqueness.** The operator $A$ of part B is unique. Indeed, if $e^{itA} = e^{itB} = U(t)$ with $A$ and $B$ self-adjoint, then by part A.4 applied to each of them, $\mathcal{D}(A)$ and $\mathcal{D}(B)$ are both equal to the set of $\psi$ for which $t^{-1}(U(t)\psi-\psi)$ converges; and on that common domain part A.3 gives $iA\psi = iB\psi$. Hence $A = B$ as operators, domains included.

**D. Cores.** Two statements let one compute the generator on a convenient dense set rather than on all of $\mathcal{D}(A)$.

1. Suppose $D \subseteq \mathcal{H}$ is dense, every $U(t)$ carries $D$ into itself, and $t \mapsto U(t)\varphi$ has a strong derivative for each $\varphi \in D$. Then $i^{-1}$ times that derivative at $t=0$, taken with domain $D$, is an essentially self-adjoint operator whose closure generates $U$.
2. Let $A$ be self-adjoint and let $D$ be a dense linear subset of $\mathcal{D}(A)$. If $e^{itA}D \subseteq D$ for every $t$, then $D$ is a core for $A$, that is, $A$ is the closure of its restriction to $D$.
:::

:::note[How little continuity is needed, and the $n$-parameter version]{provenance=adapted src="reed-simon-1980:§VIII.4, the computation preceding Thm VIII.9 and the statement of Thm VIII.9 itself, both on p. 268, whose proof runs onto p. 269, and Thm VIII.12, p. 270"}
Hypothesis 2 of the definition looks like the substantial one. It is not.

- **Weak continuity suffices.** Expanding $\lVert U(t)\varphi - \varphi\rVert^2$ and using $\lVert U(t)\varphi\rVert = \lVert\varphi\rVert$ gives
$$
\lVert U(t)\varphi - \varphi\rVert^2 \;=\; 2\lVert\varphi\rVert^2 - (U(t)\varphi,\varphi) - (\varphi, U(t)\varphi) ,
$$
so if each $t \mapsto (U(t)\varphi,\psi)$ is continuous, the right side tends to $0$ as $t \to 0$ and the group is strongly continuous. Unitarity is what makes this work: it keeps the first term constant.
- **Measurability suffices.** :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm VIII.9, p. 268"} record von Neumann's theorem: if $\mathcal{H}$ is separable, $U$ is a one-parameter group of unitaries, and $(U(t)\psi,\varphi)$ is a measurable function of $t$ for every $\psi,\varphi$, then $U$ is strongly continuous. They note that this is useful in practice because one can often exhibit $(U(t)\psi,\varphi)$ as a pointwise limit of continuous functions, which settles measurability at once.
- **Several parameters.** For a strongly continuous unitary representation of $\mathbb{R}^n$ on a separable $\mathcal{H}$, :cite[Theorem VIII.12]{work=reed-simon-1980 loc="p. 270"} gives $n$ commuting self-adjoint generators $A_1,\dots,A_n$, all essentially self-adjoint on the common domain of smoothed vectors used in the proof below, and a single projection-valued measure $P$ on $\mathbb{R}^n$ with $(U(t)\varphi,\psi) = \int_{\mathbb{R}^n} e^{it\cdot\lambda}\,d(P_\lambda\varphi,\psi)$.
:::

:::note[The physicists' version]{provenance=adapted src="arfken-2013:§17.7, Eqs. (17.35)-(17.37) and (17.40) with Example 17.7.1, pp. 846-847"}
In the physics literature the same correspondence is usually met in finite dimensions and derived in one line. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§17.7, pp. 846-847"} start from an infinitesimal group element $U(\delta\varphi) = 1 + i\,\delta\varphi\,S$ - the factor $i$ kept outside $S$ by convention - compose $N$ copies at parameter $\varphi/N$, and pass to the limit
$$
U(\varphi) \;=\; \lim_{N\to\infty}\Bigl(1 + \frac{i\varphi S}{N}\Bigr)^{\!N} \;=\; \exp(i\varphi S) ,
$$
recovering the generator by $S = -i\,dU/d\varphi$ at the identity. Unitarity of $U(\varphi)$ gives $\exp(-i\varphi S) = \exp(-i\varphi S^{\dagger})$, hence $S = S^{\dagger}$. Their Example 17.7.1 runs the argument on $SO(2)$, where $S$ is the Pauli matrix $\sigma_2$ and $U(\varphi) = 1_2\cos\varphi + i\sigma_2\sin\varphi$ is the familiar rotation matrix.

Every step of that derivation is sound in finite dimensions, where $S$ is a matrix, "Hermitian" and "self-adjoint" mean the same thing (:ref[]{to=funcan.symmetric-self-adjoint}) and the exponential series converges. In infinite dimensions each step needs replacing: the series by the functional calculus, "Hermitian" by self-adjoint rather than merely symmetric, and the derivative by a strong derivative that exists only on a domain. Stone's theorem is exactly the price and the reward of doing so.
:::

:::idea{provenance=original}
**One direction is the functional calculus and nothing else.** Once $A$ is unitarily a multiplication operator by a real function, $e^{itA}$ is multiplication by $e^{it\lambda}$, which has modulus one; so it is unitary, the group law is $e^{i(t+s)\lambda} = e^{it\lambda}e^{is\lambda}$, and every claim about $U$ becomes a claim about the scalar function $e^{it\lambda}$ integrated against the spectral measure $\mu_\psi$. The two analytic facts needed are $\lvert e^{it\lambda}-1\rvert \le 2$ and $\lvert e^{it\lambda}-1\rvert \le \lvert t\lambda\rvert$: the first gives a dominating function on $\mathcal{H}$, the second a dominating function on $\mathcal{D}(A)$, and dominated convergence does the rest.

**The converse must manufacture a domain out of nothing.** (The route we take is the one :cite[Reed and Simon]{work=reed-simon-1980 loc="the preamble to the proof of Thm VIII.8, p. 266"} set out before their proof; the estimates and the commentary below are ours.) Going the other way we are handed only the group. Differentiating it at $t=0$ is the obvious move, but a priori the derivative might exist at no vector except $0$. The fix is averaging: replace $\varphi$ by
$$
\varphi_f \;=\; \int_{-\infty}^{\infty} f(t)\,U(t)\varphi\,dt ,
$$
with $f$ smooth and compactly supported. Such vectors are smooth along the group by construction, because translating the group parameter now only translates $f$, and differentiation can be moved off $U$ and onto $f$, where it is harmless. Taking $f$ to run through an approximate identity recovers $\varphi$ in the limit, so these vectors are dense.

**Then the hard part is self-adjointness, not symmetry.** On that dense set the derivative defines a symmetric operator at once. To upgrade symmetry to essential self-adjointness we use the criterion of :ref[]{to=funcan.symmetric-self-adjoint}: show that $A^{*}u = \pm iu$ has only the zero solution. The group makes this a one-line ordinary differential equation. If $A^{*}u = iu$, then $g(t) = (U(t)\varphi,u)$ satisfies $g' = g$, so $g$ grows like $e^{t}$; but $\lvert g(t)\rvert \le \lVert\varphi\rVert\,\lVert u\rVert$ because $U(t)$ is unitary, and a bounded solution of $g'=g$ is identically zero. Boundedness of the group kills the deficiency.

**Finally the two groups are compared by an energy argument.** With $A$ in hand, $w(t) = U(t)\varphi - e^{itA}\varphi$ is differentiable and satisfies $w' = iAw$, whence $\frac{d}{dt}\lVert w\rVert^2 = 0$. Since $w(0)=0$, $w$ vanishes for all $t$.
:::

:::proof[Part A: the exponential of a self-adjoint operator]{provenance=adapted src="reed-simon-1980:§VIII.4, Thm VIII.7 with its proof, p. 265"}
Write $P$ for the projection-valued measure of $A$ and $\mu_\psi(\Omega) = (P_\Omega\psi,\psi)$ for the spectral measure of a vector $\psi$, as in :ref[]{to=funcan.spectral-theorem-general}. Recall from that unit that $h \mapsto h(A)$ is a $*$-homomorphism, that $\lVert h(A)\rVert \le \lVert h\rVert_\infty$, and that $\bigl(h(A)\psi,\psi\bigr) = \int h\,d\mu_\psi$ for bounded Borel $h$.

**Step 1 (part 1): unitarity and the group law.** For each real $t$ the function $h_t(\lambda) = e^{it\lambda}$ satisfies $\overline{h_t}h_t = 1$ and $h_th_s = h_{t+s}$ pointwise on $\mathbb{R}$. Applying the $*$-homomorphism property:
$$
e^{itA}\bigl(e^{itA}\bigr)^{*} = (h_t\overline{h_t})(A) = 1(A) = I ,
\qquad
e^{itA}e^{isA} = (h_th_s)(A) = e^{i(t+s)A} .
$$
The first identity, together with the same computation in the other order, says $e^{itA}$ is unitary; the second is the group law.

**Step 2 (part 2): strong continuity at the origin.** Fix $\varphi \in \mathcal{H}$. Since $\lvert h_t - 1\rvert^2$ is a bounded Borel function,
$$
\lVert U(t)\varphi - \varphi\rVert^2
= \bigl( (h_t-1)(A)\varphi, (h_t-1)(A)\varphi \bigr)
= \int_{\mathbb{R}} \bigl\lvert e^{it\lambda} - 1 \bigr\rvert^2 \, d\mu_\varphi(\lambda) ,
$$
the last equality because $(h_t-1)^{*}(h_t-1) = \lvert h_t-1\rvert^2$ under the functional calculus. For each fixed $\lambda$ the integrand tends to $0$ as $t \to 0$, and it is bounded above by the constant $4$, which is $\mu_\varphi$-integrable because $\mu_\varphi$ is a finite measure of total mass $\lVert\varphi\rVert^2$. By dominated convergence (:ref[]{to=measure.dominated-convergence}) the integral tends to $0$. So $U(t)\varphi \to \varphi$.

**Step 3 (part 2 in general).** For arbitrary $t_0$, the group law gives $U(t)\varphi - U(t_0)\varphi = U(t_0)\bigl(U(t-t_0)\varphi - \varphi\bigr)$, and $U(t_0)$ preserves norms, so continuity at $0$ propagates to every $t_0$. This is the only place the group law is used in part 2, and it is indispensable: continuity at one point of a group is continuity everywhere, but without the group law nothing connects the two.

**Step 4 (part 3): the derivative on $\mathcal{D}(A)$.** Let $\psi \in \mathcal{D}(A)$, which by the spectral theorem means $\int\lambda^2\,d\mu_\psi(\lambda) < \infty$. The same computation as in Step 2 gives
$$
\Bigl\lVert \frac{U(t)\psi-\psi}{t} - iA\psi \Bigr\rVert^2
= \int_{\mathbb{R}} \Bigl\lvert \frac{e^{it\lambda}-1}{t} - i\lambda \Bigr\rvert^2 d\mu_\psi(\lambda) .
$$
The integrand tends to $0$ pointwise, since $\frac{d}{dt}e^{it\lambda}\big|_{t=0} = i\lambda$. For the dominating function use $\lvert e^{i\theta}-1\rvert \le \lvert\theta\rvert$ for real $\theta$, which follows from $e^{i\theta}-1 = i\int_0^{\theta}e^{iu}\,du$; it gives $\lvert (e^{it\lambda}-1)/t\rvert \le \lvert\lambda\rvert$, hence the integrand is at most $(2\lvert\lambda\rvert)^2 = 4\lambda^2$. That bound is $\mu_\psi$-integrable precisely because $\psi \in \mathcal{D}(A)$. Dominated convergence again gives the limit $0$.

**Step 5 (part 4): nothing outside $\mathcal{D}(A)$ is differentiable.** Let $\mathcal{D}(B)$ be the set of $\psi$ for which $t^{-1}(U(t)\psi-\psi)$ converges as $t \to 0$, and define $iB\psi$ to be that limit. $\mathcal{D}(B)$ is a linear subspace and $B$ is linear. $B$ is symmetric: for $\psi,\chi \in \mathcal{D}(B)$,
$$
(B\psi,\chi) = \lim_{t\to 0}\Bigl(\frac{U(t)\psi-\psi}{it},\chi\Bigr)
= \lim_{t\to 0}\Bigl(\psi, \frac{U(-t)\chi-\chi}{-it}\Bigr) = (\psi,B\chi) ,
$$
where the middle equality moves $U(t)$ across the inner product as $U(t)^{*} = U(-t)$ and uses that $\overline{1/(it)} = -1/(it)$. By Step 4, $\mathcal{D}(A) \subseteq \mathcal{D}(B)$ and $B$ agrees with $A$ there, that is, $B$ extends $A$. But a self-adjoint operator has no proper symmetric extension: if $A \subseteq B$ with $B$ symmetric, then taking adjoints reverses the inclusion, $B^{*} \subseteq A^{*} = A \subseteq B \subseteq B^{*}$, forcing $B = A$ (:ref[]{to=funcan.symmetric-self-adjoint}). Hence $\mathcal{D}(B) = \mathcal{D}(A)$, which is part 4. $\square$
:::

:::proof[Part B: every group is an exponential]{provenance=adapted src="reed-simon-1980:§VIII.4, Thm VIII.8 with its proof, pp. 266-267, the route Reed and Simon attribute in their Notes, p. 306, to Gårding and Wightmann"}
Let $U$ be as in part B.

**Step 1: a supply of smooth vectors.** For $f \in C_0^{\infty}(\mathbb{R})$ and $\varphi \in \mathcal{H}$ put
$$
\varphi_f \;=\; \int_{-\infty}^{\infty} f(t)\,U(t)\varphi\,dt .
$$
The integrand is a continuous $\mathcal{H}$-valued function of $t$ (strong continuity) supported in the compact support of $f$, so the integral exists as a Riemann integral of a Banach-space-valued function, and it obeys $\bigl\lVert\int h\bigr\rVert \le \int\lVert h\rVert$, proved from Riemann sums exactly as for scalar integrals. Write $D$ for the linear span of all these $\varphi_f$, as $\varphi$ and $f$ vary.

**Step 2: $D$ is dense.** Let $j_\varepsilon \ge 0$ be smooth, supported in $[-\varepsilon,\varepsilon]$, with $\int j_\varepsilon = 1$. Then
$$
\lVert \varphi_{j_\varepsilon} - \varphi\rVert
= \Bigl\lVert \int j_\varepsilon(t)\bigl(U(t)\varphi - \varphi\bigr)\,dt \Bigr\rVert
\;\le\; \sup_{\lvert t\rvert \le \varepsilon} \lVert U(t)\varphi - \varphi\rVert ,
$$
using $\int j_\varepsilon = 1$ to subtract $\varphi$ inside the integral and then the norm inequality of Step 1. Strong continuity at $0$ makes the right side tend to $0$ with $\varepsilon$. So every $\varphi$ is a limit of elements of $D$.

**Step 3: differentiating along the group moves onto $f$.** For $\varphi_f \in D$ and $s \ne 0$, apply the group law and substitute $\tau = s+t$:
$$
\frac{U(s)-I}{s}\,\varphi_f
= \int f(t)\,\frac{U(s+t)-U(t)}{s}\,\varphi\,dt
= \int \frac{f(\tau-s) - f(\tau)}{s}\,U(\tau)\varphi\,d\tau .
$$
As $s \to 0$ the difference quotient $\bigl(f(\tau-s)-f(\tau)\bigr)/s$ converges to $-f'(\tau)$ *uniformly* in $\tau$, with supports in one fixed compact set; by the norm inequality the integral therefore converges to $\varphi_{-f'}$. So the strong derivative exists on $D$, and we may define
$$
A\varphi_f \;=\; i^{-1}\varphi_{-f'} , \qquad \mathcal{D}(A) = D ,
$$
extended linearly. The right-hand side involves $f$, while a single vector of $D$ may be written as $\varphi_f$ for several pairs $(\varphi,f)$; the formula is nevertheless well defined, because the left-hand side has just been identified as $-i$ times the strong derivative of $s \mapsto U(s)$ at that vector, a quantity depending on the vector alone and not on how it was presented. Three consequences are immediate from the formula: $A$ maps $D$ into $D$, because $-f' \in C_0^{\infty}(\mathbb{R})$; $U(t)$ maps $D$ into $D$, because $U(t)\varphi_f = \varphi_{f(\cdot - t)}$ by the same substitution; and $U(t)A\varphi_f = AU(t)\varphi_f$, since $U(t)$ commutes with the integral.

**Step 4: $A$ is symmetric on $D$.** For $\varphi_f, \varphi_g \in D$, Step 3 gives
$$
(A\varphi_f,\varphi_g) = \lim_{s\to 0}\Bigl( \frac{U(s)-I}{is}\varphi_f , \varphi_g \Bigr)
= \lim_{s\to 0}\Bigl( \varphi_f , \frac{U(-s)-I}{i(-s)}\varphi_g \Bigr) = (\varphi_f, A\varphi_g) ,
$$
moving $U(s)$ across the inner product as $U(s)^{*} = U(-s)$, and then noting that a scalar leaves the first argument as itself and enters the second as its conjugate, so that $1/(is)$ becomes $\overline{1/(is)} = 1/(i(-s))$. Writing $s' = -s$, the last limit is the difference quotient of Step 3 at $s'$, which converges to $A\varphi_g$.

**Step 5: $A$ is essentially self-adjoint on $D$.** By the basic criterion (:ref[]{to=funcan.symmetric-self-adjoint}) it is enough to show that $A^{*}u = iu$ and $A^{*}u = -iu$ have only the solution $u=0$. Suppose $A^{*}u = iu$ and let $\varphi \in D$. Put $g(t) = (U(t)\varphi, u)$. Since $U(t)\varphi \in D = \mathcal{D}(A)$ and $\frac{d}{dt}U(t)\varphi = iAU(t)\varphi$ by Step 3 and the group law,
$$
g'(t) = \bigl(iAU(t)\varphi,\, u\bigr) = i\bigl(AU(t)\varphi,\, u\bigr) = i\bigl(U(t)\varphi,\, A^{*}u\bigr) = i\bigl(U(t)\varphi,\, iu\bigr) = i\cdot(-i)\,\bigl(U(t)\varphi,\, u\bigr) = g(t) ,
$$
the third equality being the definition of the adjoint, and the scalar $i$ leaving the first argument unchanged while leaving the second as its conjugate $-i$, so that the two cancel to $+1$. Hence $g(t) = g(0)e^{t}$. But $\lvert g(t)\rvert \le \lVert U(t)\varphi\rVert\,\lVert u\rVert = \lVert\varphi\rVert\,\lVert u\rVert$ for every $t$, because $U(t)$ is unitary; a multiple of $e^{t}$ is bounded on $\mathbb{R}$ only if it vanishes, so $g(0) = (\varphi,u) = 0$. As $\varphi$ ranged over the dense set $D$, $u = 0$. The case $A^{*}u = -iu$ runs identically, with $i\cdot(+i) = -1$ in place of $i\cdot(-i)$, so $g' = -g$ and $g(t) = g(0)e^{-t}$, which is again bounded only if $g(0)=0$. So $A$ is essentially self-adjoint on $D$; write $A$ again for its closure, which is self-adjoint.

**Step 6: the two groups agree.** Let $V(t) = e^{itA}$, which is a strongly continuous unitary group by part A, and fix $\varphi \in D \subseteq \mathcal{D}(A)$. By part A.3 and the group law, $V(t)\varphi \in \mathcal{D}(A)$ and $\frac{d}{dt}V(t)\varphi = iAV(t)\varphi$; by Step 3, $U(t)\varphi \in D$ and $\frac{d}{dt}U(t)\varphi = iAU(t)\varphi$. So $w(t) = U(t)\varphi - V(t)\varphi$ is a strongly differentiable curve in $\mathcal{D}(A)$ with $w'(t) = iAw(t)$, and
$$
\frac{d}{dt}\lVert w(t)\rVert^2 = \bigl(w'(t),w(t)\bigr) + \bigl(w(t),w'(t)\bigr)
= \bigl(iAw,w\bigr) + \bigl(w,iAw\bigr)
= i\bigl[(Aw,w) - \overline{(Aw,w)}\,\bigr] = 0 ,
$$
because $(Aw,w)$ is real for self-adjoint $A$. Since $w(0) = 0$ we get $w \equiv 0$, so $U(t)\varphi = V(t)\varphi$ for all $\varphi \in D$; both operators are bounded and $D$ is dense, so $U(t) = V(t) = e^{itA}$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Self-adjointness, not symmetry (part A).** The functional calculus that defines $e^{itA}$ exists only for self-adjoint $A$. A symmetric operator that is not essentially self-adjoint has no spectral measure, hence no $e^{itA}$, and the deficiency can be seen directly. On $L^2(0,\infty)$ let $B = -i\,d/dx$ on the absolutely continuous $\psi$ with $\psi$ and $\psi'$ both in $L^2(0,\infty)$ and $\psi(0)=0$ - the integrability of $\psi'$ is what makes the deficiency computation available - which is symmetric with deficiency indices $(1,0)$ (:ref[]{to=funcan.symmetric-self-adjoint}) and so has no self-adjoint extension at all. The family that would have to play the part of $e^{-itB}$ is the shift $\bigl(S(t)\psi\bigr)(x) = \psi(x-t)$ for $x \ge t$ and $0$ for $x < t$, whose strong derivative at $t=0$ is $-\psi' = -iB\psi$, as it should be. For $t \ge 0$ each $S(t)$ is isometric and $S(t)S(s) = S(t+s)$, but the range of $S(t)$ consists of the functions vanishing on $[0,t)$, so $S(t)$ is not onto and therefore not unitary, and there is no way to define $S(t)$ for $t<0$. One gets a semigroup, never a group.
- **Unitarity (part B, Steps 4 and 5).** Unitarity enters the converse twice, and in two different strengths. Step 4 uses the identity $U(s)^{*} = U(-s)$ to move the group across the inner product; that is unitarity itself, and without it $A$ need not be symmetric on $D$. Step 5 needs no more than the norm bound $\lVert U(t)\rVert = 1$, whose only role is to bound $g(t) = (U(t)\varphi,u)$ and so defeat the exponentially growing solution of $g'=g$. Drop unitarity and keep only a strongly continuous group of bounded operators and the conclusion fails: $\mathcal{H} = \mathbb{C}$ and $U(t) = e^{t}$ is such a group whose generator $A = -i$ is not self-adjoint. What survives in that generality is the Hille-Yosida theory of semigroups, which replaces self-adjointness by resolvent bounds.
- **Strong continuity (part B, Steps 1 and 2).** It is used twice: to make $t \mapsto U(t)\varphi$ Riemann integrable, and to make $\varphi_{j_\varepsilon} \to \varphi$, which is what makes $D$ dense. Without a dense $D$ there is no operator to construct. By the note above, the hypothesis can be weakened to measurability of the matrix elements on a separable space, but it cannot be dropped: the construction has no starting point.
- **Compact support and smoothness of $f$ (part B, Step 3).** Smoothness gives the uniform convergence of the difference quotients of $f$; compact support keeps all the integrands inside one fixed compact set, so uniform convergence of the integrands implies convergence of the integrals. With $f$ merely integrable neither step is available.
- **Strong, not norm, continuity (the definition).** Requiring $\lVert U(t)-I\rVert \to 0$ would make the theorem nearly empty: norm continuity of a unitary group forces its generator to be bounded, so every unbounded Hamiltonian would be excluded. In the example below $U(t)$ moves the basis vector $e_n$ to $e^{int}e_n$, so $U(t)-I$ is diagonal in that basis and
$$
\lVert U(t)-I\rVert \;=\; \sup_{n\in\mathbb{Z}}\bigl\lvert e^{int}-1\bigr\rvert \;=\; \sup_{n\in\mathbb{Z}} 2\bigl\lvert \sin(nt/2)\bigr\rvert .
$$
This is not always $2$. If $t/2\pi$ is irrational the points $nt$ are dense modulo $2\pi$ and the supremum is indeed $2$. If instead $t = 2\pi p/q$ in lowest terms with $q \ge 2$, the points $nt$ run through the multiples of $2\pi/q$ and the supremum is $2\sin\bigl(\pi\lfloor q/2\rfloor/q\bigr)$: that is $2$ for even $q$, but $\sqrt3 = 1.7320508\ldots$ at $q=3$ and $1.9021130\ldots$ at $q=5$, and it increases with $q$ thereafter. So the sharp statement is
$$
\lVert U(t)-I\rVert \;\ge\; \sqrt3 \qquad \text{for every } t \notin 2\pi\mathbb{Z} ,
$$
with equality exactly at $t \equiv \pm 2\pi/3 \pmod{2\pi}$. The distance from the identity therefore never shrinks as $t \to 0$ - it stays bounded below by $\sqrt3$ - so $U$ is not norm continuous at the origin, though it is strongly continuous.
- **Part D.1 needs invariance.** If $D$ is not invariant under the group, the derivative computed on $D$ need not have anything to do with a self-adjoint operator: the restriction of $-i\,d/dx$ to functions vanishing at both ends of an interval is symmetric but not essentially self-adjoint, and the reason is exactly that the translations do not leave that domain, so part D.1 does not apply to it.
:::

:::method[Identifying the generator of a given group]{provenance=original}
Given a concrete group $U(t)$, the following produces its generator together with a proof that it is the generator, without ever computing a spectral measure.

1. **Check the two axioms.** Verify $U(t+s) = U(t)U(s)$ and that each $U(t)$ is unitary (an isometry which is onto). Then verify $U(t)\varphi \to \varphi$ as $t \to 0$ for $\varphi$ in some dense set only; boundedness of the $U(t)$ by $1$ and an $\varepsilon/3$ argument extend it to all of $\mathcal{H}$, and the group law extends it to all $t_0$.
2. **Guess the generator by differentiating.** Pick a convenient dense set $D$ - test functions, finite linear combinations of an orthonormal basis, or the smoothed vectors $\varphi_f$ of the proof - and compute $A_0\varphi = -i\frac{d}{dt}U(t)\varphi\big|_{t=0}$ on it.
3. **Check that $D$ is invariant**, that is, $U(t)D \subseteq D$ for every $t$.
4. **Conclude by part D.1.** Steps 2 and 3 say $A_0$ is essentially self-adjoint on $D$ and that $\overline{A_0}$ is the generator. There is nothing left to prove: in particular you need not verify self-adjointness of $\overline{A_0}$ separately.
5. **Or, if a self-adjoint $A$ is already in hand**, check instead that $D \subseteq \mathcal{D}(A)$ is dense and $e^{itA}D \subseteq D$; part D.2 then says $D$ is a core, so an identity verified on $D$ extends to $\mathcal{D}(A)$ by closure.
6. **Read off the spectrum when the group is periodic.** If $U(T) = I$ for some $T>0$, then $e^{iT\lambda} = 1$ for $\mu_\psi$-almost every $\lambda$ and every $\psi$, so $\sigma(A) \subseteq (2\pi/T)\mathbb{Z}$: periodicity in $t$ quantises the generator.
:::

:::example[The rotation group on a circle, and the quantisation of angular momentum]{provenance=original}
Take $\mathcal{H} = L^2(0,2\pi)$ with functions regarded as $2\pi$-periodic, and let
$$
\bigl(U(t)\psi\bigr)(\theta) \;=\; \psi(\theta + t) .
$$

**Step 1: it is a strongly continuous unitary group.** Each $U(t)$ preserves the integral of $\lvert\psi\rvert^2$ over a period and is inverted by $U(-t)$, so it is unitary; $U(t+s) = U(t)U(s)$ is the associativity of adding angles. For $\psi$ continuous and periodic, $U(t)\psi \to \psi$ uniformly, hence in $L^2$; such $\psi$ are dense, so by Step 1 of the method the group is strongly continuous.

**Step 2: the generator.** Let $e_n(\theta) = (2\pi)^{-1/2}e^{in\theta}$, $n \in \mathbb{Z}$, the orthonormal basis of :ref[]{to=funcan.orthonormal-bases}, and let $D$ be the finite linear combinations of the $e_n$. Then $U(t)e_n = e^{int}e_n$, so $D$ is invariant, and
$$
-i\frac{d}{dt}\,U(t)e_n\Big|_{t=0} \;=\; -i(in)e_n \;=\; n\,e_n .
$$
So $A_0 e_n = n e_n$ on $D$, that is, $A_0 = -i\,d/d\theta$. By part D.1 its closure $A$ is the generator, with $Ae_n = ne_n$ and
$$
\mathcal{D}(A) = \Bigl\{ \psi = \sum_n c_n e_n \;:\; \sum_n n^2\lvert c_n\rvert^2 < \infty \Bigr\} .
$$

**Step 3: the spectrum is the integers.** Here $U(2\pi) = I$, so by Step 6 of the method $\sigma(A) \subseteq \mathbb{Z}$; and every integer is an eigenvalue, witnessed by $e_n$. This is the whole of the quantisation of angular momentum: the eigenvalues of $-i\,d/d\theta$ are integers *because* a rotation by $2\pi$ is the identity, not because of any extra assumption.

**Step 4: a state, and three numbers.** Take
$$
\psi(\theta) \;=\; \frac{1 + \cos\theta}{\sqrt{3\pi}} .
$$
It is normalised: $\int_0^{2\pi}(1+\cos\theta)^2 d\theta = \int_0^{2\pi}\bigl(1 + 2\cos\theta + \tfrac12 + \tfrac12\cos 2\theta\bigr)d\theta = 2\pi + 0 + \pi + 0 = 3\pi$. Writing $1+\cos\theta = 1 + \tfrac12 e^{i\theta} + \tfrac12 e^{-i\theta}$ and multiplying by $\sqrt{2\pi}/\sqrt{3\pi}$ gives the coefficients
$$
c_0 = \sqrt{\tfrac23} , \qquad c_{1} = c_{-1} = \tfrac12\sqrt{\tfrac23} , \qquad
\lvert c_0\rvert^2 + 2\lvert c_1\rvert^2 = \tfrac23 + 2\cdot\tfrac14\cdot\tfrac23 = 1 .
$$
The spectral measure of $\psi$ is therefore the three-point measure putting mass $\tfrac23$ at $\lambda = 0$ and $\tfrac16$ at $\lambda = \pm 1$.

- **A matrix element of the group.** By the functional calculus, $\bigl(U(t)\psi,\psi\bigr) = \sum_n e^{int}\lvert c_n\rvert^2 = \tfrac23 + \tfrac13\cos t$. Checking this directly at $t = 0.7$: the integral $\frac{1}{3\pi}\int_0^{2\pi}(1+\cos(\theta+0.7))(1+\cos\theta)\,d\theta$ evaluates to $0.921614062428\ldots$, and $\tfrac23 + \tfrac13\cos(0.7) = 0.921614062428\ldots$ as well.
- **How far the state moves.** $\lVert U(t)\psi - \psi\rVert^2 = 2 - 2\operatorname{Re}\bigl(U(t)\psi,\psi\bigr) = \tfrac23(1-\cos t)$. At $t = \pi/3$ this is $\tfrac23\cdot\tfrac12 = \tfrac13 = 0.3333\ldots$, so the rotation by $60^{\circ}$ displaces this state by $\lVert U(\pi/3)\psi-\psi\rVert = 1/\sqrt3 = 0.57735\ldots$ in $L^2$.
- **The derivative, verified numerically.** Part A.3 predicts $t^{-1}(U(t)\psi-\psi) \to iA\psi$. In the basis the error has squared norm $\sum_n \lvert c_n\rvert^2\bigl\lvert (e^{int}-1)/t - in\bigr\rvert^2$; the $n=0$ term vanishes and the two others are equal, so the error equals
$$
\Bigl\lVert \frac{U(t)\psi-\psi}{t} - iA\psi \Bigr\rVert
= \frac{1}{\sqrt3}\Bigl\lvert \frac{e^{it}-1}{t} - i \Bigr\rvert
= \frac{1}{\sqrt3}\sqrt{\Bigl(\frac{\cos t - 1}{t}\Bigr)^2 + \Bigl(\frac{\sin t}{t}-1\Bigr)^2} .
$$
At $t = 0.1$ this is $0.028859495597\ldots$, about $t/(2\sqrt3) = 0.02887$, the first-order behaviour one expects. For comparison, $\lVert A\psi\rVert^2 = \sum n^2\lvert c_n\rvert^2 = \tfrac13$, matching the direct computation $\int_0^{2\pi}\lvert\psi'\rvert^2 d\theta = \frac{1}{3\pi}\int_0^{2\pi}\sin^2\theta\,d\theta = \tfrac13$.

**Step 5: why the convergence in Step 4 is not uniform in $\psi$.** Applied to $e_n$ alone the error is $\lvert (e^{int}-1)/t - in\rvert$, which at fixed $t$ grows with $n$. This is the failure of norm continuity recorded in the remark, seen from the other side: the derivative exists at each vector of $\mathcal{D}(A)$ but at no uniform rate, which is exactly why $A$ is unbounded.
:::

:::application[Dynamics, symmetry and conservation]{provenance=original}
**Time evolution.** In the Hilbert-space model of quantum mechanics (:ref[]{to=funcan.quantum-mechanics-framework}) the states of a system are unit vectors and the evolution over a time $t$ is a map $\varphi \mapsto U(t)\varphi$. Three physical demands pin down $U$: probabilities must be preserved ($U(t)$ unitary), evolving for $t$ and then for $s$ must equal evolving for $t+s$ (the group law), and the state must not jump ($U(t)\varphi$ continuous in $t$). Stone's theorem converts these three demands into a single object, a self-adjoint $H$ with $U(t) = e^{-itH}$, and part A.3 then says that for $\varphi \in \mathcal{D}(H)$,
$$
\frac{d}{dt}\,U(t)\varphi \;=\; -iH\,U(t)\varphi ,
$$
the Schrödinger equation (:ref[]{to=pde.schrodinger-equation}; we write $e^{-itH}$ rather than $e^{itH}$ because physics fixes the sign of the Hamiltonian, and units are chosen with $\hbar = 1$). The logical direction is worth stating plainly: one does not postulate the Schrödinger equation and hope a solution exists. One postulates unitary, continuous, composable dynamics, and the equation together with its generator is handed back, with a domain attached saying precisely which states are differentiable in time.

This also explains why quantisation insists on *self-adjoint* rather than merely symmetric operators, and why the deficiency-index analysis of :ref[]{to=funcan.symmetric-self-adjoint} is physics and not pedantry. A symmetric Hamiltonian with deficiency indices $(1,1)$ - a particle on a half-line, say - generates no dynamics until a boundary condition is chosen; the circle of self-adjoint extensions is a circle of physically different theories, and the theorem says nothing can decide between them except more physics.

**Symmetry and conservation.** A symmetry is a one-parameter group $V(s) = e^{isG}$ commuting with the dynamics, $V(s)U(t) = U(t)V(s)$ for all $s,t$. Differentiating $U(-t)V(s)U(t) = V(s)$ in $s$ at $s = 0$ on a common core shows that $G$ is constant along the motion, so its distribution in the state $U(t)\varphi$ does not depend on $t$: the generator of a symmetry is a conserved quantity. This is Noether's theorem in its quantum form, and Stone's theorem is what makes the phrase "the generator of the symmetry" refer to an operator rather than to a formal expression. Translations give momentum, rotations give angular momentum - quantised to the integers by the periodicity computation in the example above - and time translation gives the energy, which is why $H$ is both the generator of the dynamics and the observable called energy.

**The same statement in geometry.** On a smooth manifold the analogous correspondence runs between global flows and vector fields: :cite[Lee]{work=lee-2013 loc="Ch. 9, pp. 209-210"} defines a global flow as a continuous action of the additive group $\mathbb{R}$, so that $\theta_t\circ\theta_s = \theta_{t+s}$ and $\theta_0$ is the identity, and its infinitesimal generator as the vector field obtained by differentiating each orbit at time $0$; Proposition 9.7 there shows this vector field is smooth and that the orbits are its integral curves (:ref[]{to=geom.flows-integral-curves}). The dictionary is exact - group of transformations on the left, generator on the right - and so is the difference: on a compact manifold every smooth vector field generates a global flow, whereas on a Hilbert space the generator must be self-adjoint and not merely symmetric, and a merely symmetric generator is the infinite-dimensional analogue of a vector field whose integral curves escape to infinity in finite time.
:::
