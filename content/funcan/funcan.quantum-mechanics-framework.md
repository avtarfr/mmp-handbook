---
id: funcan.quantum-mechanics-framework
title: The mathematical framework of quantum mechanics
kind: application
level: core
summary: "Assembles the Hilbert-space model of a quantum system - unit vectors up to a phase as states, densely defined self-adjoint operators as observables, the projection-valued measure of an observable as the probability distribution of measuring it, and a strongly continuous unitary group as the dynamics - and derives from it the expectation and variance of a measurement, the commutator inequality, and the Heisenberg uncertainty relation, with the statistics of two concrete states computed in full."
prereqs: [funcan.spectral-theorem-general, funcan.stone-theorem, funcan.symmetric-self-adjoint, funcan.unbounded-operators, funcan.adjoint-operators, funcan.hilbert-spaces, funcan.orthonormal-bases, measure.sigma-algebras-measures, measure.lp-spaces, prob.expectation-variance, fourier.plancherel]
provenance: adapted
sources:
  - work: reed-simon-1980
    loc: "Ch. VIII, §VIII.11 (\"Three mathematical problems in quantum mechanics\"), pp. 302-305: the model itself - a separable Hilbert space $\\mathcal{H}$, a physical state for every vector of norm one, two such vectors giving the same state exactly when they differ by a complex factor of modulus one, a self-adjoint operator for each observable, and the probability distribution of a measurement of the observable $A$ in the state $\\varphi$ given by the projection-valued measure of $A$, so that the probability of a value in $[a,b]$ is the number $(\\varphi, P_{[a,b]}\\varphi)$; the dynamics as a continuous one-parameter unitary group $U(t)$ carrying the state at time $0$ to the state at time $t_0$; the self-adjoint generator $H$ of that group, called the Hamiltonian and corresponding to the classical energy, with the equation $\\frac{d}{dt}[U(t)\\varphi] = iH[U(t)\\varphi]$ for $\\varphi \\in D(H)$ named as the Schrödinger equation, and the remark that the point spectrum of $H$ holds the stationary states, transitions between which emit light of proportional frequency; the three general problems - self-adjointness (choosing the right self-adjoint extension of a formal expression), spectral analysis, and scattering theory - with the comment that physical reasoning supplies formal expressions in which domains are not specified; and the $n$-electron atom example, pp. 304-305, in which $\\mathcal{H} = L^2(\\mathbb{R}^{3n})$, the classical energy $\\sum_k (p_k^2/2m) - \\sum_k ne^2/|r_k| + \\sum_{k<l} e^2/|r_k - r_l|$ is replaced by $H = -\\sum_k \\frac{1}{2m}\\Delta_k + V$ in units with $\\hbar = 1$, all operators are essentially self-adjoint on the Schwartz space although the proof for $H$ is deferred to the second volume, the dynamics is written $U(t) = e^{-itH}$, and the position probabilities at times $0$ and $t_0$ are displayed as integrals of $|\\varphi|^2$ and $|U(t_0)\\varphi|^2$; with the closing remark that the model ignores spin, the exclusion principle, nuclear motion and relativity"
    pages: "302-306"
    role: the statement of the model, the measurement rule, the dynamics and the Hamiltonian, the three problems, and the $n$-electron example used in the application
  - work: kreyszig-1978
    loc: "Ch. 11 (\"Unbounded Linear Operators in Quantum Mechanics\"), pp. 571-581: §11.1, the one-dimensional single-particle system on $L^2(-\\infty,+\\infty)$, the probabilistic reading of $|\\psi(q)|^2$ in eq. (1), the normalisation (2), the definition (3) of a state as an equivalence class of unit vectors under multiplication by a unimodular factor and the equivalent description as a one-dimensional subspace, the mean value (4), variance (5) and standard deviation of the position distribution, eq. (6)-(7) identifying the mean with $(Q\\psi,\\psi)$ for the position operator $Q\\psi(q) = q\\psi(q)$ on its maximal domain, the remark that $Q$ is unbounded, self-adjoint and densely defined, eq. (8) for its variance, and the definition of an observable as a densely defined self-adjoint operator $T$ with mean value (9) $\\mu_\\psi(T) = (T\\psi,\\psi)$, variance (10) and standard deviation (11), pp. 572-576; §11.2, the momentum operator $D\\psi = (h/2\\pi i)\\,d\\psi/dq$ with its absolute-continuity domain and the de Broglie motivation, pp. 576-578, the definition of the commutator $C = ST - TS$ on $D(ST)\\cap D(TS)$, p. 578, the Heisenberg commutation relation (8) $DQ - QD = (h/2\\pi i)\\tilde I$ with the domain (9), p. 579, Thm 11.2-1 (Commutator), that $|\\mu_\\psi(C)| \\le 2\\,\\mathrm{sd}_\\psi(S)\\,\\mathrm{sd}_\\psi(T)$ for every $\\psi$ in the domain of $C$, with its proof through $A = S - \\mu_1 I$, $B = T - \\mu_2 I$, $C = AB - BA$ and the Schwarz inequality, pp. 579-580, and Thm 11.2-2 (Heisenberg uncertainty principle) $\\mathrm{sd}_\\psi(D)\\,\\mathrm{sd}_\\psi(Q) \\ge h/4\\pi$ with the discussion of what it does and does not assert about measurement error, pp. 580-581"
    pages: "571-581"
    role: the definitions of state, observable, mean value, variance and standard deviation in this notation; the commutator theorem and the Heisenberg relation with their proof route
  - work: arfken-2013
    loc: "§5.3, pp. 276-277: the definition (5.42) of the commutator $[A,B] = AB - BA$, the remark that an operator equation asserts equality of the effect on every function in the domain, the evaluation of $[x,p]$ for $p = -i\\,d/dx$ in units with $\\hbar = h/2\\pi = 1$ giving (5.43) $[x,p] = i$, and the algebraic rules (5.44) for commutators"
    pages: "276-277"
    role: the commutator in the physicists' $\\hbar = 1$ notation, and the sign of $[x,p]$ used in our examples
---

:::definition[The model]{provenance=adapted src="reed-simon-1980:§VIII.11, pp. 302-303; kreyszig-1978:§11.1, eqs. (1)-(3) and (9)-(11), pp. 573-576"}
A quantum system is described by four pieces of data in a complex separable Hilbert space $\mathcal{H}$, with the inner product $(\varphi,\psi)$ linear in the first slot as elsewhere in this handbook.

**States.** Every vector of norm one in $\mathcal{H}$ determines a physical state, and two unit vectors determine the same state exactly when they differ by a complex factor of modulus one. A state is therefore an equivalence class $\{\beta\varphi : \lvert\beta\rvert = 1\}$, equivalently the one-dimensional subspace that $\varphi$ spans. In the one-particle model on $\mathcal{H} = L^2(\mathbb{R})$ the vector itself is the wave function $\psi(q)$, and $\lvert\psi(q)\rvert^2$ is a probability density on the line: the probability of finding the particle in a set $J$ is $\int_J \lvert\psi\rvert^2\,dq$, which is why unit norm is demanded and why the unimodular factor is invisible.

**Observables.** Every observable is a self-adjoint operator $A$ on $\mathcal{H}$, densely defined, with $\mathcal{D}(A) = \mathcal{D}(A^{*})$ (:ref[]{to=funcan.symmetric-self-adjoint}). Symmetry is not enough, and this is not a technicality: the whole of what follows is read off the projection-valued measure of $A$, which exists only for self-adjoint operators (:ref[]{to=funcan.spectral-theorem-general}).

**Measurement.** Let $\{P_\Omega\}$ be the projection-valued measure of $A$. When the state is $\varphi$ and we measure the observable $A$, the value obtained is a random variable whose distribution is the spectral measure of $\varphi$:
$$
\operatorname{Prob}\bigl(\text{value} \in \Omega\bigr) \;=\; \mu_\varphi(\Omega) \;=\; (P_\Omega\varphi,\varphi) , \qquad \Omega \subseteq \mathbb{R} \text{ Borel} ;
$$
in particular the probability of a value in $[a,b]$ is $(P_{[a,b]}\varphi,\varphi)$.

**Dynamics.** Time evolution is a strongly continuous one-parameter unitary group $U(t)$: a system in the state $\varphi$ at time $0$ is in the state $U(t_0)\varphi$ at time $t_0$. By :ref[Stone's theorem]{to=funcan.stone-theorem} there is exactly one self-adjoint operator generating it. That operator is the **Hamiltonian** $H$, the observable corresponding to the classical energy, and for $\varphi \in \mathcal{D}(H)$ the orbit satisfies the **Schrödinger equation**; :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.11, p. 303"} write it as
$$
\frac{d}{dt}\bigl[U(t)\varphi\bigr] \;=\; iH\bigl[U(t)\varphi\bigr] ,
$$
while on p. 305 of the same section they write the group of the $n$-electron atom as $U(t) = e^{-itH}$. **This unit takes $U(t) = e^{-itH}$**, the form used on p. 305 and in the physics literature; the note below explains why both appear and why nothing measurable depends on the choice.

Following :cite[Kreyszig]{work=kreyszig-1978 loc="§11.1, eqs. (9)-(11), pp. 575-576"}, write for an observable $T$ and a state $\psi$
$$
\mu_\psi(T) = (T\psi,\psi) , \qquad
\operatorname{var}_\psi(T) = \bigl( (T - \mu_\psi(T)I)^2\psi, \psi \bigr) , \qquad
\operatorname{sd}_\psi(T) = \sqrt{\operatorname{var}_\psi(T)} ,
$$
for the mean value, variance and standard deviation of the observable in that state. The **commutator** of two observables is $C = ST - TS$ with domain $\mathcal{D}(C) = \mathcal{D}(ST)\cap\mathcal{D}(TS)$.
:::

:::statement[What the model yields]{provenance=adapted src="reed-simon-1980:§VIII.11, pp. 302-303; kreyszig-1978:§11.1, eqs. (6)-(11), pp. 575-576, and §11.2, Thm 11.2-1 and Thm 11.2-2 with eq. (8), pp. 579-581"}
Let $A$, $S$, $T$ be observables on $\mathcal{H}$ and $\psi$ a state.

**A. The measurement rule is consistent.** $\mu_\psi^{A}(\Omega) = (P_\Omega\psi,\psi) = \lVert P_\Omega\psi\rVert^2$ defines a probability measure on the Borel sets of $\mathbb{R}$, supported in $\sigma(A)$. So a measurement of $A$ never returns a value outside the spectrum, and every neighbourhood of every spectral point has positive probability for some state.

**B. Mean and variance are matrix elements.** If $\psi \in \mathcal{D}(A)$ then the distribution $\mu_\psi^{A}$ has a finite first moment and
$$
\int_{\mathbb{R}} \lambda \, d\mu_\psi^{A}(\lambda) \;=\; (A\psi,\psi) \;=\; \mu_\psi(A) ,
$$
which is real; and $\operatorname{var}_\psi(A) = \int (\lambda - \mu_\psi(A))^2 d\mu_\psi^{A}(\lambda) = \lVert A\psi\rVert^2 - \mu_\psi(A)^2$, finite for the same reason. So the probabilistic mean and variance of the measurement agree with the operator expressions of the definition.

**C. Sharp values are eigenvalues.** $\operatorname{var}_\psi(A) = 0$ if and only if $A\psi = \mu_\psi(A)\,\psi$, that is, exactly when $\psi$ is an eigenvector. A state in which $A$ has a certain, dispersion-free value is an eigenvector of $A$, and the value is the eigenvalue; if $A$ has no point spectrum no state gives a sharp value.

**D. Stationary states.** If $H\psi = E\psi$ then $U(t)\psi = e^{-itE}\psi$ in the sign convention adopted above (and $e^{+itE}\psi$ in the other one), which in either case is the same state for every $t$. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.11, p. 303"} note that the point spectrum of $H$ therefore holds the stationary states, and that a system stimulated from outside typically responds by moving between two of them and radiating at a frequency proportional to the gap between the corresponding eigenvalues.

**E. The commutator inequality.** :cite[Theorem 11.2-1 of Kreyszig]{work=kreyszig-1978 loc="§11.2, p. 579"} states: let $S$ and $T$ be self-adjoint operators with domain and range in $L^2(-\infty,+\infty)$, and $C = ST - TS$. Then
$$
\bigl\lvert \mu_\psi(C) \bigr\rvert \;\le\; 2\,\operatorname{sd}_\psi(S)\,\operatorname{sd}_\psi(T)
$$
for every $\psi$ in the domain of $C$. Two observables whose commutator has a non-zero mean in a state cannot both be sharp in that state.

**F. The Heisenberg relation.** On $L^2(-\infty,+\infty)$ let $Q$ be multiplication by $q$ and let $D\psi = \frac{h}{2\pi i}\frac{d\psi}{dq}$ on the absolutely continuous functions with $D\psi \in L^2$. A differentiation gives the commutation relation
$$
DQ - QD \;=\; \frac{h}{2\pi i}\,\tilde I
$$
on $\mathcal{D}(DQ)\cap\mathcal{D}(QD)$, where $\tilde I$ is the identity on that domain, and :cite[Theorem 11.2-2]{work=kreyszig-1978 loc="§11.2, p. 580"} then gives
$$
\operatorname{sd}_\psi(D)\,\operatorname{sd}_\psi(Q) \;\ge\; \frac{h}{4\pi} .
$$
In the units of the examples below, where $\hbar = h/2\pi = 1$ and $P = -i\,d/dq$, this reads $\operatorname{sd}_\psi(P)\operatorname{sd}_\psi(Q) \ge \tfrac12$.
:::

:::note[Three conventions, and one sign that is not a disagreement]{provenance=adapted src="reed-simon-1980:§VIII.11, pp. 303 and 305, and §II.1, p. 37; kreyszig-1978:§11.2, eq. (2) and footnote 2, p. 576; arfken-2013:§5.3, eq. (5.43), p. 276"}
- **Which slot is linear.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§II.1, p. 37"} make the inner product conjugate-linear in the first slot and write the measurement probability as $(\varphi, P_{[a,b]}\varphi)$; Kreyszig and this handbook take the first slot linear and write $(P_{[a,b]}\varphi,\varphi)$. The number is the same, since it equals $\lVert P_{[a,b]}\varphi\rVert^2$, and no statement above changes.
- **$h$ or $\hbar$.** Kreyszig keeps Planck's constant $h$ and defines $D = \frac{h}{2\pi i}\frac{d}{dq}$, writing $P$ for projections instead; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.3, p. 276"} and Reed and Simon work in units with $\hbar = h/2\pi = 1$ and $p = -i\,d/dx$, in which $[x,p] = i$. Setting $\hbar = 1$ turns Kreyszig's $h/4\pi$ into $\tfrac12$ and his $DQ-QD = \frac{h}{2\pi i}\tilde I$ into $PQ - QP = -i\tilde I$, which is Arfken's (5.43) with the two entries exchanged. The examples below use $\hbar = 1$ and $P = -i\,d/dq$ throughout.
- **The sign in the exponent.** On p. 303 Reed and Simon write the Schrödinger equation as $\frac{d}{dt}[U(t)\varphi] = iH[U(t)\varphi]$, which by :ref[Stone's theorem]{to=funcan.stone-theorem} means $U(t) = e^{itH}$; two pages later, for the $n$-electron atom, they write $U(t) = e^{-itH}$. The two differ by replacing $H$ with $-H$, and the second is the one the physics literature uses, since $i\hbar\,\partial_t\psi = H\psi$ gives $\psi(t) = e^{-itH/\hbar}\psi(0)$. **This unit follows the $p.\,305$ form,** $U(t) = e^{-itH}$ with $\frac{d}{dt}U(t)\varphi = -iHU(t)\varphi$, and states part D with that sign; the only quantity affected is the sign of the phase $e^{-itE}$ of a stationary state, which is unobservable because states are defined up to a unimodular factor. Nothing else in this unit, and no expectation value or probability anywhere, depends on the choice.
:::

:::idea{provenance=original}
**The spectral theorem is what turns an operator into a random variable.** A classical observable is a function on phase space, and a state is a probability measure there; the observable's distribution is the push-forward of the state along the function. Quantum mechanics has no phase space, but the spectral theorem supplies the missing push-forward: the projection-valued measure of $A$ turns each unit vector $\psi$ into an honest probability measure $\mu_\psi^A$ on the real line, and everything statistical - probabilities, means, variances, sharp values - is read off that one measure. The model is not "operators instead of numbers"; it is "one probability measure per observable per state, manufactured by the spectral theorem".

**Why variances cannot both vanish.** Centre $S$ and $T$ at their means. Centring changes neither the variances nor the commutator, because constants commute with everything. The commutator of the centred operators is then sandwiched between two inner products that the Schwarz inequality bounds by the product of the two centred norms - which are exactly the two standard deviations. The commutator is thus a lower bound on the product of the spreads, and when it is a non-zero constant, as for position and momentum, neither spread can be made small without the other growing.

**Where the difficulty really sits.** Nothing in the model is hard once the observables are known to be self-adjoint. The hard part comes before: physics hands over a formal differential expression with no domain attached, and whether it has one self-adjoint realisation, many, or none is a genuine mathematical question whose answer is physics (:ref[]{to=funcan.symmetric-self-adjoint}).
:::

:::proof[Parts A to D]{provenance=adapted src="reed-simon-1980:§VIII.11, pp. 302-303, read against the projection-valued-measure form of the spectral theorem, §VIII.3, pp. 262-263"}
Throughout, $P$ is the projection-valued measure of $A$ and $\mu_\psi(\Omega) = (P_\Omega\psi,\psi)$.

**Part A.** The axioms of a projection-valued measure (:ref[]{to=funcan.spectral-theorem-general}) give exactly the axioms of a measure. Each $P_\Omega$ is an orthogonal projection, so $(P_\Omega\psi,\psi) = (P_\Omega^2\psi,\psi) = (P_\Omega\psi,P_\Omega\psi) = \lVert P_\Omega\psi\rVert^2 \ge 0$, which is both non-negativity and the stated identity. $P_{\varnothing} = 0$ gives $\mu_\psi(\varnothing) = 0$, and $P_{\mathbb{R}} = I$ gives total mass $\lVert\psi\rVert^2 = 1$. For countable additivity, let $\Omega = \bigcup_n \Omega_n$ with the $\Omega_n$ disjoint; strong $\sigma$-additivity of $P$ gives $P_\Omega\psi = \lim_N \sum_{n\le N}P_{\Omega_n}\psi$, and taking the inner product with $\psi$, which is continuous, gives $\mu_\psi(\Omega) = \sum_n \mu_\psi(\Omega_n)$. Finally, if $\Omega$ misses $\sigma(A)$ then $P_\Omega = 0$, so the measure is supported in the spectrum.

**Part B.** By the spectral theorem, $\psi \in \mathcal{D}(A)$ is equivalent to $\int\lambda^2\,d\mu_\psi(\lambda) < \infty$, and then $\int\lvert\lambda\rvert\,d\mu_\psi \le \bigl(\int\lambda^2 d\mu_\psi\bigr)^{1/2} < \infty$ by Cauchy-Schwarz against the finite measure $\mu_\psi$, so the first moment exists. The spectral theorem also gives $(A\psi,\psi) = \int\lambda\,d\mu_\psi(\lambda)$ and $\lVert A\psi\rVert^2 = \int\lambda^2 d\mu_\psi(\lambda)$. The first integral is real because $\mu_\psi$ is a positive measure on $\mathbb{R}$; expanding the square in the definition of the variance,
$$
\int(\lambda-m)^2 d\mu_\psi = \int\lambda^2 d\mu_\psi - 2m\int\lambda\,d\mu_\psi + m^2 = \lVert A\psi\rVert^2 - m^2 ,
\qquad m = \mu_\psi(A) ,
$$
using $\mu_\psi(\mathbb{R}) = 1$ in the last term. The same expansion performed on operators gives $\bigl((A-mI)^2\psi,\psi\bigr) = \lVert (A-mI)\psi\rVert^2$, which is the operator form of the same number.

**Part C.** By part B, $\operatorname{var}_\psi(A) = \lVert (A - mI)\psi\rVert^2$ with $m = \mu_\psi(A)$. A squared norm vanishes exactly when the vector does, that is, exactly when $A\psi = m\psi$. Conversely an eigenvector has $\mu_\psi(A) = (A\psi,\psi) = m\lVert\psi\rVert^2 = m$, so the sharp value is the eigenvalue.

**Part D.** If $H\psi = E\psi$ then $h(H)\psi = h(E)\psi$ for every bounded Borel $h$, a property of the functional calculus recorded in :ref[]{to=funcan.spectral-theorem-general}; applying it to $h(\lambda) = e^{-it\lambda}$ gives $U(t)\psi = e^{-itE}\psi$. Since $\lvert e^{-itE}\rvert = 1$ and states are unit vectors up to a unimodular factor, $U(t)\psi$ is the same state as $\psi$ for every $t$. $\square$
:::

:::proof[Parts E and F]{provenance=adapted src="kreyszig-1978:§11.2, Thm 11.2-1 with its proof and eq. (8), pp. 579-580, and Thm 11.2-2, p. 580"}
**Part E.** Let $\psi \in \mathcal{D}(C)$, so $\psi \in \mathcal{D}(ST)\cap\mathcal{D}(TS)$; since $\mathcal{D}(ST)\subseteq\mathcal{D}(T)$ and $\mathcal{D}(TS)\subseteq\mathcal{D}(S)$, every quantity below is defined.

*Step 1: centre the operators.* Put $m_1 = \mu_\psi(S)$, $m_2 = \mu_\psi(T)$ and
$$
A = S - m_1 I , \qquad B = T - m_2 I .
$$
Both $m_1$ and $m_2$ are real, being mean values of self-adjoint operators (part B), so $A$ and $B$ are self-adjoint. Expanding and cancelling the terms in which a scalar meets an operator,
$$
AB - BA = ST - m_2 S - m_1 T + m_1m_2 I - \bigl(TS - m_1T - m_2S + m_1m_2I\bigr) = ST - TS = C ,
$$
so centring changes nothing on the left-hand side of the inequality.

*Step 2: write the mean of $C$ as a difference of two inner products.* Using self-adjointness of $A$ and of $B$ to move each across the inner product,
$$
\mu_\psi(C) = \bigl((AB - BA)\psi,\psi\bigr) = (AB\psi,\psi) - (BA\psi,\psi) = (B\psi, A\psi) - (A\psi, B\psi) .
$$

*Step 3: bound it.* The two terms are complex conjugates of one another, so they have equal modulus; by the triangle inequality and then the Schwarz inequality,
$$
\lvert\mu_\psi(C)\rvert \;\le\; \lvert (B\psi,A\psi)\rvert + \lvert (A\psi,B\psi)\rvert \;\le\; 2\,\lVert A\psi\rVert\,\lVert B\psi\rVert .
$$

*Step 4: identify the two norms as standard deviations.* By the computation in part B, $\lVert B\psi\rVert^2 = \bigl((T-m_2I)^2\psi,\psi\bigr) = \operatorname{var}_\psi(T)$, so $\lVert B\psi\rVert = \operatorname{sd}_\psi(T)$, and likewise $\lVert A\psi\rVert = \operatorname{sd}_\psi(S)$. Substituting into Step 3 gives the inequality.

**Part F.** For $\psi$ in the common domain, the product rule gives
$$
DQ\psi(q) = \frac{h}{2\pi i}\frac{d}{dq}\bigl(q\psi(q)\bigr) = \frac{h}{2\pi i}\psi(q) + q\,\frac{h}{2\pi i}\psi'(q) = \frac{h}{2\pi i}\psi(q) + QD\psi(q) ,
$$
which is the commutation relation. Hence $C = DQ - QD$ acts as multiplication by the constant $h/2\pi i$, so $\mu_\psi(C) = \frac{h}{2\pi i}\lVert\psi\rVert^2$ and $\lvert\mu_\psi(C)\rvert = h/2\pi$ for every state in the domain. Part E with $S = D$ and $T = Q$ gives $h/2\pi \le 2\operatorname{sd}_\psi(D)\operatorname{sd}_\psi(Q)$, which is the Heisenberg relation. $\square$
:::

:::remark[Where the hypotheses are used, and what the relation does not say]{provenance=original}
- **Self-adjointness, in every part.** Part A needs the projection-valued measure, which exists only for self-adjoint operators; part B needs $\mu_\psi(A)$ real, which is reality of the spectrum; parts E and F need $A$ and $B$ self-adjoint in order to move them across the inner product in Step 2. A merely symmetric operator fails all three. The point is not academic: the momentum of a particle confined to a box is symmetric with deficiency indices $(1,1)$ and the momentum on a half-line has indices $(1,0)$, so neither is an observable in this model (:ref[]{to=funcan.symmetric-self-adjoint}), while the Hamiltonian on the same domains is self-adjoint and is one.
- **The domain of the commutator, in part E.** The inequality is asserted only for $\psi \in \mathcal{D}(C)$. For $\psi$ outside it, one or more of the four quantities in the statement may be undefined, and the inequality is not merely unproved but meaningless. :cite[Kreyszig]{work=kreyszig-1978 loc="§11.2, p. 579"} records without proof that $\mathcal{D}(DQ)\cap\mathcal{D}(QD)$ is dense in $L^2(-\infty,+\infty)$, so there are plenty of such $\psi$; he observes that it contains the Hermite functions (:ref[]{to=spec.hermite-polynomials}), which are total in the space.
- **Finite variance, in parts B, E and F.** If $\psi \notin \mathcal{D}(A)$ the distribution $\mu_\psi^A$ may have an infinite second moment - and even an infinite first moment - while remaining a perfectly good probability measure. Part A survives, parts B onwards do not. A state can therefore have well-defined measurement probabilities and no expected value, which is the Hilbert-space shadow of a heavy-tailed distribution (:ref[]{to=prob.expectation-variance}).
- **What the uncertainty relation is about.** It is a statement about two *distributions* determined by one state, not about the disturbance caused by an apparatus. :cite[Kreyszig]{work=kreyszig-1978 loc="§11.2, pp. 580-581"} is careful on this: the standard deviations measure the precision attainable *in principle*, and the limitation is not an imperfection of instruments. The derivation above uses no model of a measuring device at all; it uses the Schwarz inequality.
- **Non-commuting is not the same as never simultaneously sharp.** Part E bounds $\operatorname{sd}_\psi(S)\operatorname{sd}_\psi(T)$ below by $\lvert\mu_\psi(C)\rvert/2$, which is useless in states where $\mu_\psi(C) = 0$. For position and momentum, $\mu_\psi(C)$ is a non-zero constant and the bound bites in every state; for a pair such as two components of angular momentum, $\mu_\psi(C)$ does vanish in some states, and in those the inequality permits both spreads to be small.
:::

:::method[Computing the statistics of a measurement]{provenance=original}
Given a state $\psi$ and an observable $A$, the following produces every number the model predicts.

1. **Check that $A$ is self-adjoint on a stated domain**, not merely symmetric. If it is a differential expression on an interval or a half-line, count deficiency indices first (:ref[]{to=funcan.symmetric-self-adjoint}). If this step fails there is nothing to compute.
2. **Find a spectral representation** of $A$: an orthonormal basis of eigenvectors if the spectrum is a point spectrum, a unitary carrying $A$ to multiplication by a real function otherwise (:ref[]{to=funcan.spectral-theorem-general}).
3. **Write down $\mu_\psi^{A}$.** With eigenvectors $\varphi_n$ and $\psi = \sum_n c_n\varphi_n$, it is the point measure giving mass $\lvert c_n\rvert^2$ to the eigenvalue $\lambda_n$; with $U\psi = \tilde\psi$ and $UAU^{-1}$ multiplication by $f$, it is the push-forward of $\lvert\tilde\psi\rvert^2 d\mu$ along $f$.
4. **Read off probabilities** as $\mu_\psi^{A}(\Omega)$, summing $\lvert c_n\rvert^2$ over the eigenvalues in $\Omega$ or integrating $\lvert\tilde\psi\rvert^2$ over $f^{-1}(\Omega)$.
5. **Read off the mean and variance** as $\int\lambda\,d\mu_\psi^A$ and $\int\lambda^2 d\mu_\psi^A - (\int\lambda\,d\mu_\psi^A)^2$, and check them independently against $(A\psi,\psi)$ and $\lVert A\psi\rVert^2 - (A\psi,\psi)^2$. The two routes must agree, which is a strong arithmetic check on the whole computation.
6. **Evolve the state** by multiplying each coefficient by $e^{-it\lambda_n}$, or $\tilde\psi$ by $e^{-itf}$, when $A = H$. The distribution of the energy is then unchanged in time, while the distribution of any observable not commuting with $H$ generally moves.
:::

:::example[A particle in a box: the energy and the position]{provenance=original}
Take $\mathcal{H} = L^2(0,1)$, units with $\hbar = 1$ and mass $m = 1$, and the Hamiltonian
$$
H = -\tfrac12\,\frac{d^2}{dq^2} , \qquad
\mathcal{D}(H) = \{\varphi : \varphi,\varphi' \text{ absolutely continuous}, \ \varphi'' \in L^2,\ \varphi(0)=\varphi(1)=0\} ,
$$
which is self-adjoint on that domain (:ref[]{to=funcan.symmetric-self-adjoint}), with
$$
\varphi_n(q) = \sqrt2\,\sin(n\pi q) , \qquad E_n = \tfrac12 n^2\pi^2 , \qquad n = 1,2,\dots,
$$
an orthonormal basis of eigenvectors (:ref[]{to=ode.sturm-liouville-theory}). Take the state
$$
\psi = \frac{3\varphi_1 + 2\varphi_2 + \varphi_3}{\sqrt{14}} ,
$$
which has norm one because $9 + 4 + 1 = 14$.

**Step 1: the spectral measure of $\psi$ for $H$.** By step 3 of the method it is the three-point measure with masses
$$
\tfrac{9}{14} \text{ at } E_1, \qquad \tfrac{4}{14} \text{ at } E_2 , \qquad \tfrac{1}{14} \text{ at } E_3 ,
$$
and numerically $E_1 = 4.934802200545\ldots$, $E_2 = 19.739208802179\ldots$, $E_3 = 44.413219804902\ldots$.

**Step 2: probabilities.** The probability of measuring the ground-state energy is $9/14 = 0.642857\ldots$. The probability of a result below $20$ is $\mu_\psi^H\bigl((-\infty,20)\bigr) = (9+4)/14 = 13/14 = 0.928571\ldots$, since $E_1$ and $E_2$ lie below $20$ and $E_3$ does not.

**Step 3: mean and variance of the energy, two ways.** From the measure,
$$
\mu_\psi(H) = \frac{9E_1 + 4E_2 + E_3}{14} = \frac{\pi^2}{28}\bigl(9\cdot 1 + 4\cdot 4 + 1\cdot 9\bigr) = \frac{34\pi^2}{28} = \frac{17\pi^2}{14} = 11.984519629894\ldots
$$
Independently, each $\varphi_n$ is multiplied by $n^2\pi^2/2$, so $H\psi = \frac{\pi^2}{2\sqrt{14}}(3\varphi_1 + 8\varphi_2 + 9\varphi_3)$ and $(H\psi,\psi) = \frac{\pi^2}{2\cdot 14}(3\cdot 3 + 8\cdot 2 + 9\cdot 1) = \frac{34\pi^2}{28}$, the same number. For the variance,
$$
\int\lambda^2\,d\mu_\psi^H = \frac{\pi^4}{4}\cdot\frac{9\cdot 1 + 4\cdot 16 + 1\cdot 81}{14} = \frac{154\pi^4}{56} = \frac{11\pi^4}{4} ,
$$
so
$$
\operatorname{var}_\psi(H) = \frac{11\pi^4}{4} - \frac{289\pi^4}{196} = \frac{539 - 289}{196}\pi^4 = \frac{125\pi^4}{98} = 124.246289584187\ldots ,
\qquad \operatorname{sd}_\psi(H) = \frac{5\pi^2\sqrt{10}}{14} = 11.146581968666\ldots
$$
The spread is comparable to the mean, as it must be for a state spread over three widely separated levels.

**Step 4: the position in the same state.** Position and energy are different observables of the same state, so they are read from different spectral measures. $Q\psi(q) = q\psi(q)$ has purely continuous spectrum $[0,1]$, and $\mu_\psi^{Q}$ has density $\lvert\psi(q)\rvert^2$ on $[0,1]$. Its mean needs the integrals
$$
\int_0^1 2q\,\sin(m\pi q)\sin(n\pi q)\,dq =
\begin{cases}
\tfrac12 , & m = n , \\[2pt]
-\dfrac{2}{\pi^2}\Bigl(\dfrac{1}{(m-n)^2} - \dfrac{1}{(m+n)^2}\Bigr), & m+n \text{ odd} , \\[6pt]
0 , & m \ne n,\ m+n \text{ even} ,
\end{cases}
$$
which follow from $2\sin a\sin b = \cos(a-b) - \cos(a+b)$ and $\int_0^1 q\cos(k\pi q)\,dq = \bigl((-1)^k-1\bigr)/(k^2\pi^2)$ for $k \ne 0$. Only the pairs $(1,2)$ and $(2,3)$ have $m+n$ odd, contributing $-16/(9\pi^2)$ and $-48/(25\pi^2)$, each weighted by twice the product of the coefficients, $2\cdot\frac{3\cdot 2}{14} = \frac67$ and $2\cdot\frac{2\cdot 1}{14} = \frac27$. The diagonal contributes $\tfrac12\sum_n \lvert c_n\rvert^2 = \tfrac12$. Hence
$$
\mu_\psi(Q) = \frac12 - \frac67\cdot\frac{16}{9\pi^2} - \frac27\cdot\frac{48}{25\pi^2}
= \frac12 - \frac{1088}{525\pi^2} = 0.290023908947\ldots
$$
The particle sits left of centre: the interference between $\varphi_1$ and $\varphi_2$ piles probability into the left half, and nothing in the energy distribution of Step 1 shows this, because the energy distribution is blind to the relative phases that the position distribution sees.

**Step 5: what is not computed, and why.** The momentum $-i\,d/dq$ on this domain is symmetric with deficiency indices $(1,1)$ and is not self-adjoint (:ref[]{to=funcan.symmetric-self-adjoint}). By step 1 of the method the computation stops there: the model assigns this system no momentum distribution at all, and the familiar observation that $\sin(n\pi q)$ is not a momentum eigenfunction is the visible symptom.
:::

:::example[A Gaussian on the line: equality in the uncertainty relation]{provenance=original}
Take $\mathcal{H} = L^2(\mathbb{R})$, $\hbar = 1$, $Q\psi(q) = q\psi(q)$ and $P = -i\,d/dq$, both self-adjoint on their natural domains (:ref[]{to=funcan.symmetric-self-adjoint}), and the state
$$
\psi_\sigma(q) = \bigl(2\pi\sigma^2\bigr)^{-1/4} e^{-q^2/(4\sigma^2)} , \qquad \sigma > 0 .
$$

**Step 1: the position distribution.** $\lvert\psi_\sigma(q)\rvert^2 = (2\pi\sigma^2)^{-1/2}e^{-q^2/(2\sigma^2)}$, the normal density of mean $0$ and variance $\sigma^2$; in particular $\lVert\psi_\sigma\rVert = 1$, $\mu_\psi(Q) = 0$ and $\operatorname{var}_\psi(Q) = \sigma^2$, so $\operatorname{sd}_\psi(Q) = \sigma$.

**Step 2: the momentum distribution.** The Fourier-Plancherel transform in the unitary convention $\hat\psi(p) = (2\pi)^{-1/2}\int\psi(q)e^{-ipq}dq$ carries $P$ to multiplication by $p$ (:ref[]{to=fourier.plancherel}), so it is the spectral representation of $P$ and $\mu_\psi^{P}$ has density $\lvert\hat\psi_\sigma(p)\rvert^2$. Using $\int e^{-aq^2}e^{-ipq}dq = \sqrt{\pi/a}\,e^{-p^2/(4a)}$ with $a = 1/(4\sigma^2)$,
$$
\hat\psi_\sigma(p) = (2\pi\sigma^2)^{-1/4}\,\sigma\sqrt2\;e^{-\sigma^2p^2} ,
\qquad
\lvert\hat\psi_\sigma(p)\rvert^2 = \sigma\sqrt{\tfrac{2}{\pi}}\;e^{-2\sigma^2p^2} ,
$$
which is the normal density of mean $0$ and variance $1/(4\sigma^2)$. Hence $\operatorname{sd}_\psi(P) = 1/(2\sigma)$.

**Step 3: the uncertainty product.** $\operatorname{sd}_\psi(P)\operatorname{sd}_\psi(Q) = \frac{1}{2\sigma}\cdot\sigma = \tfrac12$ for every $\sigma$, which is equality in part F. Squeezing the position distribution by shrinking $\sigma$ widens the momentum distribution by exactly the reciprocal factor.

**Step 4: the commutator inequality is also an equality here.** $C = PQ - QP$ acts as $(PQ-QP)\psi = -i(q\psi)' + iq\psi' = -i\psi$, so $C = -i\tilde I$ and $\lvert\mu_\psi(C)\rvert = 1$, while $2\operatorname{sd}_\psi(P)\operatorname{sd}_\psi(Q) = 2\cdot\tfrac12 = 1$. Part E is saturated, and one can see both of its inequalities become equalities. Here $\mu_\psi(P) = \mu_\psi(Q) = 0$, so $A = P$ and $B = Q$ in the proof. Differentiating gives
$$
P\psi_\sigma = -i\psi_\sigma' = \frac{i}{2\sigma^2}\,q\,\psi_\sigma = \frac{i}{2\sigma^2}\,Q\psi_\sigma ,
$$
so $P\psi_\sigma$ and $Q\psi_\sigma$ are parallel and the Schwarz inequality is sharp; and
$$
(Q\psi_\sigma, P\psi_\sigma) = \int q\psi_\sigma \overline{\Bigl(\frac{iq}{2\sigma^2}\psi_\sigma\Bigr)}\,dq = -\frac{i}{2\sigma^2}\int q^2\lvert\psi_\sigma\rvert^2 dq = -\frac{i}{2\sigma^2}\cdot\sigma^2 = -\frac{i}{2}
$$
is purely imaginary, so in Step 2 of that proof the two conjugate terms add rather than cancel. Gaussians are exactly the states of minimum uncertainty, which is the operator form of the equality case in :ref[]{to=fourier.uncertainty-principle}.

**Step 5: numbers, with $\sigma = 2$.** Then $\operatorname{sd}_\psi(Q) = 2$ and $\operatorname{sd}_\psi(P) = 1/4$, and $\psi_2(q) = (8\pi)^{-1/4}e^{-q^2/16}$.

- The probability that a position measurement returns a value within one standard deviation of the mean is
$$
\int_{-2}^{2}\lvert\psi_2(q)\rvert^2 dq = \operatorname{erf}\bigl(1/\sqrt2\bigr) = 0.682689492137\ldots ,
$$
and the probability that a momentum measurement returns a value in $[-\tfrac14,\tfrac14]$ is the same number, both distributions being normal and both intervals being one standard deviation wide.
- For a free particle of unit mass, $H = \tfrac12 P^2$, so by part B and Step 2
$$
\mu_\psi(H) = \tfrac12\int_{\mathbb{R}} p^2\,d\mu_\psi^{P}(p) = \tfrac12\operatorname{var}_\psi(P) = \frac{1}{8\sigma^2} = \frac{1}{32} = 0.03125 .
$$
Checking this on the other side of the Fourier transform: $\psi_2'(q) = -\frac{q}{2\sigma^2}\psi_2(q) = -\frac{q}{8}\psi_2(q)$, so
$$
\tfrac12\lVert P\psi_2\rVert^2 = \tfrac12\int_{\mathbb{R}}\lvert\psi_2'\rvert^2 dq = \frac{1}{2}\cdot\frac{1}{64}\int_{\mathbb{R}} q^2\lvert\psi_2\rvert^2 dq = \frac{1}{128}\cdot\sigma^2 = \frac{4}{128} = \frac{1}{32} ,
$$
the same $0.03125$. The agreement is Plancherel's theorem doing the arithmetic twice.
:::

:::application[The three problems, and why the model is not the physics]{provenance=adapted src="reed-simon-1980:§VIII.11, the three problems and the n-electron atom example, pp. 303-305"}
:cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.11, pp. 303-304"} isolate three mathematical problems that any quantum model raises, and the division still organises the subject.

1. **Self-adjointness.** Physical reasoning supplies a formal expression - a differential operator - with no domain attached. The first task is to prove essential self-adjointness on some natural domain; failing that, to survey the self-adjoint extensions and decide which of them deserves the name of the observable. Everything in this unit is unavailable until that is settled.
2. **Spectral analysis.** The second task is to locate the spectra of the observables, that of $H$ before all others, and to pin down where the eigenvalues sit and how degenerate each one is. That is where the energy levels of a spectroscope come from.
3. **Scattering theory.** The third is to describe the behaviour of $U(t)\varphi$ for large $t$.

Their worked case is the $n$-electron atom. The Hilbert space is $L^2(\mathbb{R}^{3n})$; each classical momentum component is replaced by $-i\partial$ in the corresponding variable and each coordinate by multiplication, in units with $\hbar = 1$; and the classical energy, the sum of the kinetic terms, the attraction $-ne^2/\lvert r_k\rvert$ of each electron to the nucleus and the repulsion $e^2/\lvert r_k - r_l\rvert$ between pairs, becomes
$$
H = -\sum_{k=1}^{n}\frac{1}{2m}\Delta_k + V , \qquad \text{dynamics } U(t) = e^{-itH} .
$$
All of these operators are essentially self-adjoint on the Schwartz space, although Reed and Simon note that for $H$ this is far from immediate and defer the proof. The probability that the $x$-coordinate of the $k$-th electron is found in $(a,b)$ at time $t_0$ is then the integral of $\lvert U(t_0)\varphi\rvert^2$ over that slab, exactly as the measurement rule requires.

The honest closing observation is theirs: this model ignores electron spin and the Pauli exclusion principle, treats the nucleus as fixed, and is non-relativistic. The Hilbert-space framework is therefore a *frame* rather than a physical theory. It says what a state, an observable and a measurement are, and guarantees that the predictions are consistent probabilities; which Hilbert space, which operators and which Hamiltonian describe a given piece of the world is a separate question that no amount of functional analysis will answer.
:::
