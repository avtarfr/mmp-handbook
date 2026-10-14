---
id: geom.hodge-star-maxwell
title: The Hodge star and Maxwell's equations
kind: application
level: core
summary: Builds the Hodge star from a metric and an orientation, proves the two sign rules $\star\star = (-1)^{\nu}(-1)^{p(n-p)}$ and the adjointness of the codifferential $\delta$ to $d$, and uses them to compress the four Maxwell equations into $dF = 0$ and $d\star F = 4\pi \star J$, with charge conservation falling out of $d \circ d = 0$.
prereqs: [geom.exterior-derivative, geom.metric-tensor, geom.differential-forms, geom.stokes-forms, vcalc.divergence-curl, vcalc.surface-integrals, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: lee-2013
    loc: "Ch. 16, Problem 16-13 with its closing remark, p. 436 (the geometric Laplacian $\\Delta u = -\\operatorname{div}(\\operatorname{grad} u)$, the absence of any agreed sign convention for it, and the two reasons given for this one: non-negative eigenvalues and agreement with the Laplace–Beltrami operator on forms); Problem 16-18, pp. 437–438 (the inner product induced on $\\Lambda^k(T_p^*M)$ by a Riemannian metric, the characterisation of the volume form, the existence and uniqueness of the star operator through $\\omega \\wedge \\star\\eta = \\langle \\omega, \\eta\\rangle\\, dV_g$, $\\star f = f\\, dV_g$, and $\\star\\star\\omega = (-1)^{k(n-k)}\\omega$); Problem 16-21, p. 438 (the dictionary $\\operatorname{div} X = \\star d \\star X^\\flat$ and $\\operatorname{curl} X = (\\star d X^\\flat)^\\sharp$ in three dimensions); Problem 16-22, pp. 438–439 (the codifferential $d^*\\omega = (-1)^{n(k+1)+1}\\star d \\star \\omega$, $d^* \\circ d^* = 0$, the $L^2$ inner product on $\\Omega^k(M)$ and the adjointness $(d^*\\omega, \\eta) = (\\omega, d\\eta)$)"
    pages: "436-439"
    role: the inner-product characterisation of the star, which is the definition we adopt; the $\star\star$ sign rule in the Riemannian case; the vector-calculus dictionary; the codifferential and its adjointness to $d$
  - work: hassani-2013
    loc: "§26.5.3, Eq. (26.52), p. 819 (the inner product induced on $\\Lambda^p$, $\\tilde g(\\alpha,\\beta) = \\tfrac{1}{p!}\\alpha_{j_1\\dots j_p}\\beta^{j_1\\dots j_p}$); §26.6, Definition 26.6.1, p. 820 (the star in a $g$-orthonormal coframe), Eq. (26.56), p. 821 (the $|G|^{1/2}$ form in a general basis), Theorem 26.6.3, p. 822 ($\\star\\star A = (-1)^{\\nu}(-1)^{p(N-p)}A$, with $\\nu$ the index of $g$), Theorem 26.6.4, p. 822 ($\\alpha \\wedge \\star\\beta = \\tilde g(\\alpha,\\beta)\\mu$) and Example 26.6.5, p. 822 (the cross product as $\\star(a\\wedge b)$); §28.5, Example 28.5.5, Eq. (28.38) and Box 28.5.6, pp. 889–890 (the Faraday 2-form and $dF = 0$), Example 28.5.13, Eqs. (28.43)–(28.44), pp. 893–894 ($\\star F$ and $d\\star F$ in terms of $E$ and $B$), Eqs. (28.45)–(28.46) and Box 28.5.14, p. 894 (the four-current 1-form, $\\star J$, and $d \\star F = 4\\pi \\star J$), Example 28.5.16, p. 895 (the four-potential $F = dA$ and the gauge freedom $A \\mapsto A + d\\chi$); §28.6, Definition 28.6.4, p. 900 (the codifferential $\\delta = (-1)^{\\nu+1}(-1)^{n(p+1)}\\star d \\star$), Proposition 28.6.5, pp. 900–901 (its coordinate form for a constant metric) and Theorem 28.6.6, p. 901 (the integrated adjointness, with its proof through $d(\\alpha \\wedge \\star\\beta)$); §28.8, Problem 28.24, p. 911 (charge conservation as a consequence of $d\\star F = 4\\pi \\star J$)"
    pages: "819-822, 889-895, 900-901, 911"
    role: the sign conventions we follow throughout (index $\nu$, the codifferential, the Faraday 2-form, Gaussian units with $c = 1$); the $\star\star$ theorem; the proof route for the adjointness of $\delta$ to $d$; the whole translation of Maxwell's equations into $dF = 0$ and $d\star F = 4\pi\star J$, and charge conservation from it
  - work: arfken-2013
    loc: "§4.5, 'Complementary Differential Forms', pp. 235–236 (the complementary form, the permutation sign and the metric sign factor), Example 4.5.2, pp. 236–237 (the Minkowski table, Eq. (4.82), and the observation that $\\star\\star$ is not always $+1$), Eq. (4.81), p. 236 (the Euclidean $\\mathbb{R}^3$ table), Example 4.5.3, Eqs. (4.83)–(4.84), pp. 237–238 (cross and triple scalar products as starred wedge products); §4.6, Eqs. (4.86)–(4.90), pp. 239–240 (gradient, curl and divergence read off from $d$ and $\\star$)"
    pages: "235-240"
    role: the practical recipe for computing the star in an orthonormal coframe, the explicit tables in $\mathbb{R}^3$ and Minkowski space that fix our signs, and the vector-calculus dictionary
---

:::note[What the star is for]{provenance=original}
The exterior derivative of :ref[The exterior derivative]{to=geom.exterior-derivative} needs no metric: $d$ is defined on any smooth manifold. That is its strength and its limitation. A $p$-form can only be differentiated *up* the ladder $\Lambda^0 \to \Lambda^1 \to \dots \to \Lambda^n$. In $\mathbb{R}^3$ the three rungs $d: \Omega^0 \to \Omega^1 \to \Omega^2 \to \Omega^3$ do carry the gradient, the curl and the divergence, so all three operators of vector calculus are there; but only the first of them acts on an object $d$ supplies by itself. To feed a *vector field* to the second rung one must first turn it into a 1-form, and to feed one to the third rung one must turn it into a 2-form, and neither identification exists without extra structure. Nor is there any way back down the ladder, so no Laplacian.

A metric repairs this. The spaces $\Lambda^p$ and $\Lambda^{n-p}$ of a fixed $n$-dimensional vector space have the same dimension $\binom np = \binom{n}{n-p}$, so they are isomorphic; a metric and an orientation single out one isomorphism between them, the **Hodge star** $\star$. Conjugating $d$ by $\star$ turns it round, giving an operator $\delta$ that lowers degree, and the pair $(d, \delta)$ is enough to write every first-order differential operator of classical field theory.

The payoff this unit is built around is Maxwell's four equations. Two of them are vector equations and two are scalar, eight scalar equations in all; in the language of forms they are two equations, $dF = 0$ and $d\star F = 4\pi\star J$, and the first of them says only that a 2-form on spacetime is closed.
:::

:::definition[Orientation, index, and the inner product on $p$-forms]{provenance=adapted src="hassani-2013:§26.5.3, Eq. (26.52), p. 819, and §26.6, p. 820; lee-2013:Problem 16-18(a)–(b), pp. 437–438"}
Let $M$ be a smooth $n$-manifold carrying a **pseudo-Riemannian metric** $g$: a smooth field of nondegenerate symmetric bilinear forms on the tangent spaces (:ref[The metric tensor]{to=geom.metric-tensor}). At each point $g$ can be diagonalised to $\operatorname{diag}(+1,\dots,+1,-1,\dots,-1)$, and the number $\nu$ of $-1$'s is the **index** of $g$; it is the same at every point of a connected $M$. Hassani writes $\nu$ for this number and we follow him. Two cases matter here: Euclidean $\mathbb{R}^3$, with $n = 3$ and $\nu = 0$, and Minkowski spacetime $\mathbb{R}^{1,3}$ with coordinates $(t, x, y, z)$, signature $(+,-,-,-)$, $n = 4$ and $\nu = 3$.

Assume in addition that $M$ is **oriented**, that is, equipped with a nowhere-vanishing $n$-form up to positive rescaling. A **$g$-orthonormal coframe** on an open set is an $n$-tuple $(\varepsilon^1,\dots,\varepsilon^n)$ of 1-forms with

$$
\langle \varepsilon^i, \varepsilon^j\rangle \;=\; \epsilon_i\,\delta^{ij}, \qquad \epsilon_i \in \{+1,-1\},
$$

where $\langle\cdot,\cdot\rangle$ is the inner product that $g$ induces on the cotangent space by raising indices, and exactly $\nu$ of the signs $\epsilon_i$ equal $-1$. The coframe is **positively oriented** if $\varepsilon^1\wedge\dots\wedge\varepsilon^n$ represents the chosen orientation; that $n$-form is then the **volume form** $\mu$, which Lee writes $dV_g$ and characterises, in the Riemannian case, as the only positively oriented $n$-form whose norm is $1$. For indefinite $g$ the corresponding normalisation is $\langle\mu,\mu\rangle = (-1)^\nu$.

The metric induces an inner product on each $\Lambda^p(T_q^*M)$ by the determinant rule

$$
\bigl\langle \omega^1\wedge\dots\wedge\omega^p,\ \theta^1\wedge\dots\wedge\theta^p \bigr\rangle
\;=\; \det\bigl( \langle \omega^a, \theta^b\rangle \bigr)_{a,b=1}^{p} .
$$

In components this is Hassani's $\tilde g(\alpha,\beta) = \tfrac{1}{p!}\,\alpha_{j_1\dots j_p}\beta^{j_1\dots j_p}$. For $p = 0$ it is ordinary multiplication of functions. Writing $\varepsilon^I = \varepsilon^{i_1}\wedge\dots\wedge\varepsilon^{i_p}$ for an increasing multi-index $I = (i_1 < \dots < i_p)$, the rule gives at once

$$
\langle \varepsilon^I, \varepsilon^{I'}\rangle = 0 \ \ (I \ne I'), \qquad
\langle \varepsilon^I, \varepsilon^{I}\rangle = \epsilon_I := \prod_{i \in I}\epsilon_i ,
$$

because the matrix $(\langle\varepsilon^{i_a},\varepsilon^{i'_b}\rangle)$ is diagonal when $I = I'$ and has a zero row otherwise. So the $\binom np$ forms $\varepsilon^I$ are orthogonal, of norm-squared $\pm 1$; in the Riemannian case $\nu = 0$ they are orthonormal, which is how Lee sets the inner product up.
:::

:::definition[The Hodge star]{provenance=adapted src="lee-2013:Problem 16-18(c)–(d), p. 438; hassani-2013:§26.6, Definition 26.6.1 and Theorem 26.6.4, pp. 820, 822"}
Let $(M, g)$ be oriented with volume form $\mu$. The **Hodge star** is the unique bundle map

$$
\star : \Lambda^p T^*M \longrightarrow \Lambda^{n-p}T^*M, \qquad 0 \le p \le n,
$$

such that

$$
\boxed{\;\alpha \wedge \star\beta \;=\; \langle \alpha, \beta\rangle\,\mu \;}
\qquad\text{for all } \alpha, \beta \in \Lambda^p .
$$

Both sides are $n$-forms, and the equation is required to hold pointwise for every $\alpha$ of the same degree as $\beta$; since the pairing $\Lambda^p \times \Lambda^{n-p} \to \Lambda^n$ is nondegenerate, this determines $\star\beta$ completely. Lee takes exactly this as the definition (for a Riemannian metric); Hassani instead writes down the coframe formula and then checks that it is basis-independent, and his Theorem 26.6.4 is the displayed identity. We adopt the identity as the definition because it makes the signs unambiguous, and derive the coframe formula from it below.

Three immediate consequences:

$$
\star 1 = \mu, \qquad \star f = f\,\mu \ \ \text{for a function } f, \qquad \star\mu = \langle \mu, \mu\rangle = (-1)^{\nu} .
$$

The second is Lee's Problem 16-18(d), $\star f = f\,dV_g$, and the first is the case $f = 1$ of it. The third is not part of that problem, and we read it off the definition instead: $\star\mu$ is a $0$-form, say the function $c$, and putting $\alpha = \beta = \mu$ in the defining identity gives $\mu\wedge c = c\,\mu$ on the left and $\langle\mu,\mu\rangle\,\mu$ on the right, so $c = \langle\mu,\mu\rangle = \epsilon_1\cdots\epsilon_n = (-1)^\nu$.

**A caution on generality.** Lee states the construction for a Riemannian metric, where $\nu = 0$. The same characterisation is used verbatim for indefinite metrics by Hassani and by Arfken, who both tabulate the Minkowski case; the only thing that changes is that $\langle\cdot,\cdot\rangle$ is then indefinite, and nondegeneracy, which is all the argument needs, still holds. Where a sign below depends on the index we display $\nu$ explicitly.
:::

:::definition[The codifferential]{provenance=adapted src="hassani-2013:§28.6, Definition 28.6.4, p. 900; lee-2013:Problem 16-13 with its remark, p. 436, and Problem 16-22, pp. 438–439"}
Let $(M,g)$ be an oriented pseudo-Riemannian $n$-manifold of index $\nu$. The **codifferential** is

$$
\delta : \Omega^p(M) \to \Omega^{p-1}(M), \qquad
\delta\omega \;=\; (-1)^{\nu+1}\,(-1)^{\,n(p+1)}\;\star d \star \omega ,
$$

with $\delta f = 0$ for a $0$-form $f$ (there are no $(-1)$-forms). This is Hassani's definition. Lee writes $d^*$ for the same operator and gives $d^*\omega = (-1)^{\,n(k+1)+1}\star d\star\omega$ on $k$-forms; the two agree, since Lee works with a Riemannian metric, for which $\nu = 0$ and $(-1)^{\nu+1} = -1$.

The sign is chosen so that $\delta$ is the formal adjoint of $d$, which is the content of the statement below. Two specialisations worth recording:

- **Euclidean $\mathbb{R}^3$** ($n = 3$, $\nu = 0$): $(-1)^{\nu+1} = -1$ and $(-1)^{3(p+1)} = (-1)^{p+1}$, so $\delta = -\star d\star$ on 1-forms and on 3-forms, and $\delta = +\star d\star$ on 2-forms. The degree-dependence of the sign in odd dimensions is a standing trap.
- **Minkowski spacetime** ($n = 4$, $\nu = 3$): $(-1)^{\nu+1} = +1$ and $(-1)^{4(p+1)} = +1$, so $\delta = \star d \star$ in every degree.

The operator $\Delta = d\delta + \delta d$ on $\Omega^p(M)$ is the **Hodge Laplacian**. On functions in Euclidean $\mathbb{R}^3$ it is $\Delta f = \delta\, df = -\star d \star df = -\nabla^2 f$, the negative of the Laplacian of vector calculus. Lee notes that there is no agreement in the literature about this sign and that the "geometric" sign used here is the one that makes the eigenvalues non-negative; we flag the convention wherever it is used rather than silently choosing one.
:::

:::statement[The two sign rules and the adjointness of $\delta$]{provenance=adapted src="hassani-2013:§26.6, Theorem 26.6.3, p. 822, and §28.6, Theorem 28.6.6, p. 901; lee-2013:Problem 16-18(e) and Problem 16-22, pp. 438–439"}
Let $(M,g)$ be an oriented pseudo-Riemannian $n$-manifold of index $\nu$.

**(a) The coframe formula.** Let $(\varepsilon^1,\dots,\varepsilon^n)$ be a positively oriented $g$-orthonormal coframe, let $I$ be an increasing multi-index of length $p$ and let $J$ be its increasing complement. Then

$$
\star\,\varepsilon^I \;=\; \epsilon_I\,\sigma(I,J)\;\varepsilon^J ,
\qquad \epsilon_I = \prod_{i\in I}\epsilon_i ,
$$

where $\sigma(I,J) = \pm 1$ is the sign of the permutation carrying $(1,\dots,n)$ to $(I, J)$, that is, $\varepsilon^I \wedge \varepsilon^J = \sigma(I,J)\,\mu$.

**(b) Applying the star twice.** On $p$-forms,

$$
\star\star \;=\; (-1)^{\nu}\,(-1)^{\,p(n-p)}\,\mathrm{id} .
$$

In particular $\star\star = \mathrm{id}$ on every Euclidean space of odd dimension, and $\star\star = -\,\mathrm{id}$ on $2$-forms over Minkowski spacetime.

**(c) $\delta$ is the formal adjoint of $d$.** Let $\alpha \in \Omega^{p}(M)$ and $\beta \in \Omega^{p+1}(M)$, and suppose $\alpha\wedge\star\beta$ has compact support. If $\partial M = \varnothing$, then

$$
\int_M \langle d\alpha, \beta\rangle\,\mu \;=\; \int_M \langle \alpha, \delta\beta\rangle\,\mu .
$$

For a compact oriented Riemannian manifold without boundary this is Lee's $(d^*\omega, \eta) = (\omega, d\eta)$ with respect to the $L^2$ inner product $(\omega,\eta) = \int_M \langle\omega,\eta\rangle\,dV_g$; Hassani states it in the form above, for a general index and with the compact-support hypothesis in place of compactness of $M$.

**(d)** $\delta \circ \delta = 0$, as $d\circ d = 0$ and $\star$ is invertible by (b).
:::

:::idea{provenance=original}
All three parts come from one observation: in an orthonormal coframe, the wedge product of basis forms is as rigid as it could be. For increasing multi-indices $I$ and $K$ of complementary lengths, $\varepsilon^I\wedge\varepsilon^K$ is zero unless $K$ is exactly the complement $J$ of $I$, and then it is $\pm\mu$. So the defining equation $\alpha\wedge\star\beta = \langle\alpha,\beta\rangle\mu$, tested on the $\binom np$ basis forms $\alpha = \varepsilon^I$, is a diagonal system: it determines the coefficient of $\varepsilon^J$ in $\star\varepsilon^I$ and forces every other coefficient to vanish, which is what Step 2 of the proof carries out. That gives (a), and existence and uniqueness of $\star$ with it.

Part (b) is then bookkeeping with two signs. Starring twice multiplies the norm factors $\epsilon_I\epsilon_J$, which is the product of *all* the $\epsilon_i$ and hence $(-1)^\nu$; and it multiplies the two permutation signs $\sigma(I,J)\sigma(J,I)$, which differ by the cost of sliding a block of $p$ letters past a block of $n-p$ letters, namely $(-1)^{p(n-p)}$.

Part (c) is Stokes' theorem wearing a disguise. The Leibniz rule applied to the $(n-1)$-form $\alpha\wedge\star\beta$ produces the two terms $d\alpha\wedge\star\beta$ and $\pm\,\alpha\wedge d\star\beta$; the first is $\langle d\alpha,\beta\rangle\mu$ by definition of $\star$, and the sign in $\delta$ is rigged precisely so that the second is $-\langle\alpha,\delta\beta\rangle\mu$. The difference of the two integrands is then an exact $n$-form, whose integral vanishes.
:::

:::proof[Parts (a) and (b)]{provenance=adapted src="hassani-2013:§26.6, Definition 26.6.1 and Theorem 26.6.3, pp. 820, 822; lee-2013:Problem 16-18(c), (e), p. 438"}
**Step 1 (the candidate satisfies the defining identity).** Fix an increasing multi-index $I$ of length $p$ with complement $J$, and put $\tau = \epsilon_I\,\sigma(I,J)\,\varepsilon^J$. Let $I'$ be any increasing multi-index of length $p$. If $I' \ne I$ then $I'$ contains some index belonging to $J$, so $\varepsilon^{I'}\wedge\varepsilon^J = 0$ because a basis 1-form is repeated; and $\langle\varepsilon^{I'},\varepsilon^I\rangle = 0$ as well. If $I' = I$ then

$$
\varepsilon^{I}\wedge\tau = \epsilon_I\,\sigma(I,J)\,\varepsilon^I\wedge\varepsilon^J = \epsilon_I\,\sigma(I,J)^2\,\mu = \epsilon_I\,\mu = \langle\varepsilon^I,\varepsilon^I\rangle\,\mu ,
$$

using $\sigma(I,J)^2 = 1$ and the value of $\langle\varepsilon^I,\varepsilon^I\rangle$ from the first definition. So $\varepsilon^{I'}\wedge\tau = \langle\varepsilon^{I'},\varepsilon^I\rangle\mu$ for every $I'$, and by linearity for every $\alpha \in \Lambda^p$. Hence $\tau$ is a legitimate value for $\star\varepsilon^I$.

**Step 2 (nothing else will do).** Suppose $\tau$ and $\tau'$ both satisfy the identity for a given $\beta$. Then $\alpha\wedge(\tau - \tau') = 0$ for every $\alpha \in \Lambda^p$. Write $\tau - \tau' = \sum_K c_K\,\varepsilon^K$ over increasing multi-indices $K$ of length $n-p$. Taking $\alpha = \varepsilon^{I}$ with $I$ the complement of a particular $K_0$ kills every term except $K = K_0$ and leaves $c_{K_0}\,\sigma(I,K_0)\,\mu = 0$, so $c_{K_0} = 0$. Thus $\tau = \tau'$, and $\star$ is well defined on basis forms and extends uniquely by linearity. The formula was derived in one coframe, but the object it defines satisfies a coframe-free characterisation, so it does not depend on the coframe chosen — this is the point Hassani verifies by hand on his p. 821, where he also records the general-basis version

$$
\star\omega \;=\; |G|^{1/2}\,\frac{1}{p!\,(n-p)!}\;\bar\omega_{i_1\dots i_p}\;\mathcal{E}_{i_1 i_2\dots i_n}\;\theta^{i_{p+1}}\wedge\dots\wedge\theta^{i_n} ,
$$

for a dual basis $(\theta^1,\dots,\theta^n)$ that need not be orthonormal; the determinant $|G|$ of the metric in that basis appears because $|G|^{1/2} = 1$ in an orthonormal one. Two notational warnings about this quotation. First, $\mathcal{E}_{i_1\dots i_n}$ is the Levi-Civita symbol: Hassani writes it $\epsilon$, and we have renamed it because $\epsilon_i$ (the metric signs) and $\varepsilon^i$ (the coframe) are both in use here. Second, the indices on $\bar\omega_{i_1\dots i_p}$ are lowered, exactly as the page prints them, because in his notation they are obtained by evaluating the index-raised form $\tilde\omega = g^{-1}\omega$ on the basis covectors $\theta^{i_1},\dots,\theta^{i_p}$; the companion line of his Eq. (26.56) writes the same object with raised $\bar\omega^{i_1\dots i_p}$, a prefactor $1/p!$ and tensor products in place of the wedge.

**Step 3 (starring twice).** Apply (a) twice. The complement of $J$ is $I$, so

$$
\star\star\varepsilon^I \;=\; \epsilon_I\,\sigma(I,J)\;\star\varepsilon^J \;=\; \epsilon_I\,\epsilon_J\;\sigma(I,J)\,\sigma(J,I)\;\varepsilon^I .
$$

Now $\epsilon_I\epsilon_J = \prod_{i=1}^n \epsilon_i = (-1)^{\nu}$, since $I$ and $J$ partition $\{1,\dots,n\}$ and exactly $\nu$ of the signs are negative — this is where the index enters, and it is the only place it does. For the permutation signs, moving the block $J$ of $n-p$ letters in front of the block $I$ of $p$ letters takes $p(n-p)$ adjacent transpositions, so $\sigma(J,I) = (-1)^{p(n-p)}\sigma(I,J)$ and

$$
\sigma(I,J)\,\sigma(J,I) = (-1)^{p(n-p)}\sigma(I,J)^2 = (-1)^{p(n-p)} .
$$

Hence $\star\star\varepsilon^I = (-1)^\nu(-1)^{p(n-p)}\varepsilon^I$ for every $I$, and by linearity on all of $\Lambda^p$. $\square$
:::

:::proof[Part (c)]{provenance=adapted src="hassani-2013:§28.6, Theorem 28.6.6 and its proof, p. 901"}
Let $\alpha$ be a $p$-form and $\beta$ a $(p+1)$-form, with $\alpha\wedge\star\beta$ compactly supported.

**Step 1 (star the codifferential).** Apply the definition of $\delta$ in degree $p+1$:

$$
\star\,\delta\beta \;=\; (-1)^{\nu+1}(-1)^{\,n(p+2)}\ \star\star\,(d\star\beta) .
$$

Now $\star\beta$ is an $(n-p-1)$-form, so $d\star\beta$ is an $(n-p)$-form, and part (b) in degree $n-p$ gives the factor $(-1)^{\nu}(-1)^{(n-p)p}$. Multiplying the signs,

$$
(-1)^{\nu+1}(-1)^{\nu}\,(-1)^{\,n(p+2)}(-1)^{\,p(n-p)}
= -\,(-1)^{\,n(p+2)+p(n-p)}
= -\,(-1)^{\,2n(p+1)-p^{2}}
= -\,(-1)^{\,p^{2}}
= -(-1)^{p},
$$

where $(-1)^{\nu+1}(-1)^{\nu} = -1$ whatever $\nu$ is, the exponent collects as $n(p+2)+p(n-p) = 2n(p+1) - p^2$, the even part $2n(p+1)$ contributes nothing, and $(-1)^{p^2} = (-1)^p$. Therefore

$$
\star\,\delta\beta \;=\; -(-1)^{p}\, d\star\beta .
$$

This is the one computation in which the exact constant in the definition of $\delta$ matters; every other sign in the unit is forced.

**Step 2 (the Leibniz rule).** $\alpha$ is a $p$-form and $\star\beta$ an $(n-p-1)$-form, so the antiderivation property of $d$ (:ref[The exterior derivative]{to=geom.exterior-derivative}) gives

$$
d(\alpha\wedge\star\beta) \;=\; d\alpha\wedge\star\beta \;+\; (-1)^{p}\,\alpha\wedge d\star\beta .
$$

**Step 3 (identify the two terms).** By the defining property of $\star$ in degree $p+1$, $d\alpha\wedge\star\beta = \langle d\alpha,\beta\rangle\mu$. By Step 1, $(-1)^p\,\alpha\wedge d\star\beta = (-1)^p \alpha \wedge \bigl(-(-1)^p \star\delta\beta\bigr) = -\,\alpha\wedge\star\delta\beta = -\langle\alpha,\delta\beta\rangle\mu$, the last equality being the defining property of $\star$ in degree $p$. Hence

$$
\langle d\alpha,\beta\rangle\,\mu \;-\; \langle\alpha,\delta\beta\rangle\,\mu \;=\; d\bigl(\alpha\wedge\star\beta\bigr) .
$$

**Step 4 (integrate).** On the right-hand side stands $d$ applied to an $(n-1)$-form of compact support, and $M$ is oriented with empty boundary, so that integral is zero by :ref[the general Stokes theorem]{to=geom.stokes-forms}. Integrating the identity of Step 3 therefore gives

$$
\int_M \langle d\alpha,\beta\rangle\,\mu = \int_M \langle\alpha,\delta\beta\rangle\,\mu . \qquad\square
$$
:::

:::remark[Where each hypothesis is used]{provenance=original}
- **Nondegeneracy of $g$.** Used to raise indices at all, hence to define $\langle\cdot,\cdot\rangle$ on 1-forms, and used again in Step 2 of the first proof: if the pairing $\Lambda^p\times\Lambda^{n-p}\to\Lambda^n$ were degenerate, $\star\beta$ would not be unique. A degenerate "metric" has no orthonormal coframe in the sense used here and no Hodge star.
- **Orientability.** $\star$ depends on $\mu$, and reversing the orientation replaces $\mu$ by $-\mu$ and therefore $\star$ by $-\star$. There is no Hodge star on a non-orientable manifold such as the Möbius band, although $\star\star$, $\delta$ and the Hodge Laplacian, in each of which $\star$ occurs twice, survive the sign flip and do make sense there.
- **The index $\nu$.** It enters only through $\epsilon_I\epsilon_J = (-1)^\nu$ in Step 3 of the first proof. Dropping it — using the Riemannian sign rule in Minkowski space, where $\nu = 3$ and the omitted factor is $(-1)^3 = -1$ — would flip the sign of $\star\star$ in *every* degree, odd and even alike, and with it the sign of $\delta$ and hence of the source term in Maxwell's equations below.
- **Compact support in part (c).** Used only at Step 4, to kill $\int_M d(\alpha\wedge\star\beta)$. Without it the identity acquires a boundary term $\int_{\partial M}\alpha\wedge\star\beta$, and the operators are adjoint only up to that term; this is the differential-forms version of the boundary terms in :ref[Green's identities]{to=vcalc.green-identities}. On a manifold with boundary the same proof gives $\int_M\langle d\alpha,\beta\rangle\mu - \int_M\langle\alpha,\delta\beta\rangle\mu = \int_{\partial M}\alpha\wedge\star\beta$.
- **$\partial M = \varnothing$ in part (c).** Same step, same reason. Hassani assumes only that $\alpha\wedge\star\beta$ has compact support and quotes Stokes' theorem in the form $\int_M d\omega = 0$; Lee assumes $M$ compact without boundary instead, which makes the compact-support hypothesis automatic.
- **Positive orientation of the coframe in part (a).** If the coframe is negatively oriented, $\varepsilon^1\wedge\dots\wedge\varepsilon^n = -\mu$ and every sign in (a) reverses. In practice this is the most common source of error, and it is why Arfken insists on fixing a "standard order" of the basis differentials before starting.
:::

:::method[Computing $\star$ by hand]{provenance=adapted src="arfken-2013:§4.5, pp. 235–237, Eqs. (4.81) and (4.82)"}
Arfken's recipe, which is part (a) of the statement in practical dress:

1. **Fix the standard order** of the basis 1-forms, so that $\mu = \varepsilon^1\wedge\dots\wedge\varepsilon^n$ in that order, and record the metric signs $\epsilon_1,\dots,\epsilon_n$.
2. Write the form to be starred as a combination of basis monomials $\varepsilon^I$ with the factors in increasing order; linearity handles the rest.
3. **Take the complement.** For each $\varepsilon^I$, write the wedge $\varepsilon^J$ of all the basis 1-forms *not* appearing in $\varepsilon^I$, in increasing order.
4. **Permutation sign.** Attach $\sigma(I,J)$: the sign of the permutation that brings the list (indices of $\varepsilon^I$, then indices of $\varepsilon^J$) back to standard order.
5. **Metric sign.** Multiply by $\epsilon_I = (-1)^{m_I}$, where $m_I$ is the number of indices *in $I$*, that is, in the form being starred, whose metric sign is $-1$ (the letter $\mu$ is reserved here for the volume form). In Euclidean space this factor is always $+1$ and step 5 may be skipped.

A note on Arfken's wording in step 5: his prose on p. 236 says to count the negative metric entries among the differentials of the *complementary* form, but each of his worked cases on pp. 236–237 counts them among the differentials of the form being starred. For $\star 1$ he takes the count to be $0$ on the ground that $\omega = 1$ carries no differentials at all — although its complement $dt\wedge dx\wedge dy\wedge dz$ carries three with negative metric sign — and for $\star(dt\wedge dx)$ he attributes the minus sign to the $dx$ inside the form being starred. The two prescriptions differ by the overall factor $(-1)^\nu$ and cannot both be right. We follow his examples, whose results are Eq. (4.82) and agree term by term with Hassani's Definition 26.6.1 and with the characterisation $\alpha\wedge\star\beta = \langle\alpha,\beta\rangle\mu$ adopted above; the discrepancy in his prose is recorded in `verification/discrepancies.md`.

In Euclidean $\mathbb{R}^3$ with $\mu = dx\wedge dy\wedge dz$ this gives Arfken's Eq. (4.81):

$$
\star 1 = dx\wedge dy\wedge dz, \quad
\star\,dx = dy\wedge dz, \quad \star\,dy = dz\wedge dx, \quad \star\,dz = dx\wedge dy,
$$
$$
\star(dy\wedge dz) = dx, \quad \star(dz\wedge dx) = dy, \quad \star(dx\wedge dy) = dz, \quad
\star(dx\wedge dy\wedge dz) = 1 ,
$$

all signs coming out $+$ because the indices have been written in cyclic order. In Minkowski spacetime with $\mu = dt\wedge dx\wedge dy\wedge dz$, $\epsilon_t = +1$ and $\epsilon_x = \epsilon_y = \epsilon_z = -1$, one gets Arfken's Eq. (4.82); with $(i,j,k)$ any cyclic permutation of $(x,y,z)$,

$$
\star\,dt = dx\wedge dy\wedge dz, \qquad \star\,dx^i = dt\wedge dx^j\wedge dx^k ,
$$
$$
\star(dx^j\wedge dx^k) = dt\wedge dx^i, \qquad \star(dt\wedge dx^i) = -\,dx^j\wedge dx^k ,
$$
$$
\star(dt\wedge dx^i\wedge dx^j) = dx^k, \qquad \star(dx\wedge dy\wedge dz) = dt, \qquad \star\,\mu = -1 .
$$

A worked instance of step 5: for $\star(dt\wedge dx)$ the complement is $dy\wedge dz$, already in standard order so $\sigma = +1$; one index of $I = (t,x)$, namely $x$, has metric sign $-1$, so $\epsilon_I = -1$ and $\star(dt\wedge dx) = -dy\wedge dz$. These tables are what the Maxwell computation below runs on.

**Reading off the vector operators.** In Euclidean $\mathbb{R}^3$, write $X^\flat$ for the 1-form $X_1\,dx + X_2\,dy + X_3\,dz$ obtained from a vector field $X$ by lowering its index, and $\omega^\sharp$ for the inverse operation. Then Arfken's Eqs. (4.86)–(4.90) and Lee's Problem 16-21 read

$$
df = (\nabla f)^\flat, \qquad
\star\,d\,X^\flat = (\nabla\times X)^\flat, \qquad
\star\,d\star X^\flat = \nabla\cdot X , \qquad
\star(X^\flat\wedge Y^\flat) = (X\times Y)^\flat ,
$$

the last being Arfken's Eq. (4.83) and Hassani's Example 26.6.5, and also the reason the cross product exists only in three dimensions: only there do $\Lambda^1$ and $\Lambda^{2}$ have the same dimension. Combining the second and third, $\delta\,df = -\star d\star df = -\nabla^2 f$, and the vector identities $\nabla\times\nabla f = 0$ and $\nabla\cdot(\nabla\times X) = 0$ of :ref[Vector identities]{to=vcalc.vector-identities} are both the single statement $d\circ d = 0$.
:::

:::example[The star of an electromagnetic field, and the two invariants]{provenance=original}
Work in Minkowski spacetime with coordinates $(t,x,y,z)$, signature $(+,-,-,-)$, orientation $\mu = dt\wedge dx\wedge dy\wedge dz$, and Gaussian units with $c = 1$, following Hassani. The **Faraday 2-form** of an electric field $E = (E_x,E_y,E_z)$ and a magnetic field $B = (B_x,B_y,B_z)$ is Hassani's Eq. (28.38),

$$
F \;=\; -E_x\,dt\wedge dx - E_y\,dt\wedge dy - E_z\,dt\wedge dz
\;+\; B_z\,dx\wedge dy - B_y\,dx\wedge dz + B_x\,dy\wedge dz .
$$

Take the uniform field

$$
E = (0,\,0,\,3), \qquad B = (2,\,0,\,5)
$$

in those units, so that

$$
F = -3\,dt\wedge dz \;+\; 5\,dx\wedge dy \;+\; 2\,dy\wedge dz .
$$

**Step 1: apply the star term by term**, using the Minkowski table of the method block.

$$
\star(dt\wedge dz) = -\,dx\wedge dy, \qquad \star(dx\wedge dy) = dt\wedge dz, \qquad \star(dy\wedge dz) = dt\wedge dx .
$$

Hence

$$
\star F = -3\,(-dx\wedge dy) + 5\,(dt\wedge dz) + 2\,(dt\wedge dx)
= 3\,dx\wedge dy + 5\,dt\wedge dz + 2\,dt\wedge dx .
$$

Comparing with the general form of $F$, this is the field with $E' = -B = (-2,0,-5)$ and $B' = E = (0,0,3)$: indeed $-E'_x\,dt\wedge dx = 2\,dt\wedge dx$, $-E'_z\,dt\wedge dz = 5\,dt\wedge dz$ and $B'_z\,dx\wedge dy = 3\,dx\wedge dy$ reproduce the three terms. In general

$$
\star F \;=\; E_x\,dy\wedge dz - E_y\,dx\wedge dz + E_z\,dx\wedge dy + B_x\,dt\wedge dx + B_y\,dt\wedge dy + B_z\,dt\wedge dz ,
$$

which is $F$ with $E \mapsto -B$ and $B \mapsto E$. (Hassani computes the same object in index notation in his Example 28.5.13, pp. 893–894, which the proof of the translation below follows; here it drops out of the Minkowski table of the method block.) Matching coefficients term by term, the $dt\wedge dx^i$ part of $\star F$ carries $B_i$ where $F$ carries $-E_i$, and the spatial part carries $E$ where $F$ carries $B$. This is the electromagnetic duality rotation by a quarter turn, and a quarter turn squared is $-1$, which is the next step.

**Step 2: check $\star\star F = -F$.** Starring again, with $\star(dx\wedge dy) = dt\wedge dz$, $\star(dt\wedge dz) = -dx\wedge dy$ and $\star(dt\wedge dx) = -dy\wedge dz$,

$$
\star\star F = 3\,dt\wedge dz - 5\,dx\wedge dy - 2\,dy\wedge dz = -F ,
$$

as part (b) predicts: $n = 4$, $p = 2$, $\nu = 3$ give $(-1)^3(-1)^{2\cdot 2} = -1$.

**Step 3: the first invariant, $F\wedge\star F$.** Only terms whose index sets are complementary survive. Writing $\mu = dt\wedge dx\wedge dy\wedge dz$ and reducing each product to $\mu$ by counting transpositions,

$$
(dt\wedge dz)\wedge(dx\wedge dy) = \mu, \qquad
(dx\wedge dy)\wedge(dt\wedge dz) = \mu, \qquad
(dy\wedge dz)\wedge(dt\wedge dx) = \mu .
$$

Therefore

$$
F\wedge\star F = (-3)(3)\,\mu + (5)(5)\,\mu + (2)(2)\,\mu = (-9 + 25 + 4)\,\mu = 20\,\mu .
$$

Since $F\wedge\star F = \langle F,F\rangle\mu$ by the definition of $\star$, we read off

$$
\langle F, F\rangle = 20 = \lvert B\rvert^2 - \lvert E\rvert^2 = (4 + 0 + 25) - 9 .
$$

The general identity $\langle F,F\rangle = \lvert B\rvert^2 - \lvert E\rvert^2$ follows the same way with symbols in place of numbers.

**Step 4: the second invariant, $F\wedge F$.** Now the surviving products pair an $E$ term with a $B$ term:

$$
F\wedge F = 2\,(-3\,dt\wedge dz)\wedge(5\,dx\wedge dy) = -30\,\mu ,
$$

the factor $2$ because the two cross terms of the square are equal ($F\wedge F$ is symmetric for a $2$-form), and the $dy\wedge dz$ term contributing nothing because it shares $dz$ with the $dt\wedge dz$ term. In general $F\wedge F = -2\,(E\cdot B)\,\mu$, and here $E\cdot B = 3\times 5 = 15$ gives $-30$, which is what we got.

**Step 5: the number.** The free-field Lagrangian density of electromagnetism in these units is $\mathcal{L} = (\lvert E\rvert^2 - \lvert B\rvert^2)/8\pi = -\langle F,F\rangle/8\pi$, so for this field

$$
\mathcal{L} = -\frac{20}{8\pi} = -\frac{5}{2\pi} \approx \boxed{-0.79577} ,
$$

while the energy density is $(\lvert E\rvert^2 + \lvert B\rvert^2)/8\pi = 38/(8\pi) = 19/(4\pi) \approx 1.5120$. Both invariants are frame-independent: $\langle F,F\rangle = 20 > 0$ says the field is magnetically dominated in every inertial frame, and $E\cdot B = 15 \ne 0$ says that no boost can make either field vanish.
:::

:::statement[Maxwell's equations in the language of forms]{provenance=adapted src="hassani-2013:§28.5, Eq. (28.38) and Box 28.5.6, pp. 889–890, with Eqs. (28.43)–(28.46) and Box 28.5.14, pp. 893–894"}
On Minkowski spacetime with signature $(+,-,-,-)$, orientation $dt\wedge dx\wedge dy\wedge dz$ and Gaussian units with $c = 1$, let $F$ be the Faraday 2-form built from $(E, B)$ as above, and let

$$
J = J_\alpha\,dx^\alpha, \qquad J_0 = \rho, \quad (J_x, J_y, J_z) = -(J^x, J^y, J^z),
$$

be the four-current 1-form assembled from the charge density $\rho$ and the current density $\mathbf J = (J^x,J^y,J^z)$. Then

$$
\boxed{\;dF = 0\;} \quad\Longleftrightarrow\quad \nabla\times E + \frac{\partial B}{\partial t} = 0 \ \text{ and } \ \nabla\cdot B = 0 ,
$$

$$
\boxed{\;d\star F = 4\pi\star J\;} \quad\Longleftrightarrow\quad \nabla\times B = \frac{\partial E}{\partial t} + 4\pi \mathbf J \ \text{ and } \ \nabla\cdot E = 4\pi\rho .
$$

Equivalently, since $\delta = \star d\star$ in this signature and dimension and $\star\star J = J$ on 1-forms, the second equation reads $\delta F = 4\pi J$. Hassani states the first as his Box 28.5.6 and the second as his Box 28.5.14.
:::

:::idea{provenance=original}
Both equivalences are bookkeeping, and the shape of the bookkeeping is forced by counting. A $2$-form in four dimensions has six components, which $F$ splits into the three $dt\wedge dx^i$ carrying $E$ and the three spatial ones carrying $B$; its exterior derivative is a $3$-form, which has exactly four components. One of those four carries no $dt$, so it can only collect spatial derivatives of the spatial part of $F$ — a divergence; the other three carry a $dt$, so each collects one time derivative of the spatial part and one spatial derivative of the mixed part — a curl. That is why $dF = 0$ can only say "$\nabla\cdot B = 0$ and $\nabla\times E + \partial_t B = 0$", with no room for anything else.

The second equivalence is then the first one dualised. By Step 1 of the worked example, $\star$ sends $F$ to the Faraday form of $(-B, E)$, so $d\star F$ is $dF$ with $E \mapsto -B$ and $B\mapsto E$, which turns Faraday's law into Ampère's and $\nabla\cdot B = 0$ into Gauss's law. All that remains is to star $J$ and read off the factor $4\pi$, which is the Gaussian-units convention and nothing more.
:::

:::proof[The translation]{provenance=adapted src="hassani-2013:§28.5, Example 28.5.5, pp. 889–890 and Example 28.5.13, pp. 893–894"}
**Step 1: the homogeneous pair.** Differentiate $F$ term by term, using $d(f\,dx^\alpha\wedge dx^\beta) = df\wedge dx^\alpha\wedge dx^\beta$ and discarding every term in which a differential repeats. From $-E_z\,dt\wedge dz$ only $\partial_x E_z$ and $\partial_y E_z$ survive; from $B_z\,dx\wedge dy$ only $\partial_t B_z$ and $\partial_z B_z$; and so on. Reordering each surviving product into the standard order and collecting, the result is

$$
dF = \Bigl(\nabla\times E + \frac{\partial B}{\partial t}\Bigr)_{\!z} dt\wedge dx\wedge dy
+ \Bigl(\nabla\times E + \frac{\partial B}{\partial t}\Bigr)_{\!y} dt\wedge dz\wedge dx
+ \Bigl(\nabla\times E + \frac{\partial B}{\partial t}\Bigr)_{\!x} dt\wedge dy\wedge dz
+ (\nabla\cdot B)\,dx\wedge dy\wedge dz .
$$

The four basis $3$-forms $dt\wedge dx\wedge dy$, $dt\wedge dz\wedge dx$, $dt\wedge dy\wedge dz$ and $dx\wedge dy\wedge dz$ are linearly independent, so $dF = 0$ holds if and only if all four coefficients vanish, which is Faraday's law together with the absence of magnetic monopoles. This is Hassani's Example 28.5.5.

**Step 2: star $F$.** By Step 1 of the worked example,

$$
\star F = E_x\,dy\wedge dz - E_y\,dx\wedge dz + E_z\,dx\wedge dy + B_x\,dt\wedge dx + B_y\,dt\wedge dy + B_z\,dt\wedge dz .
$$

**Step 3: differentiate $\star F$.** The spatial terms contribute $\partial_x E_x + \partial_y E_y + \partial_z E_z$ to $dx\wedge dy\wedge dz$, together with their time derivatives; the $B$ terms contribute spatial derivatives only. Collecting as in Step 1,

$$
d\star F = \Bigl(\frac{\partial E}{\partial t} - \nabla\times B\Bigr)_{\!z} dt\wedge dx\wedge dy
+ \Bigl(\frac{\partial E}{\partial t} - \nabla\times B\Bigr)_{\!y} dt\wedge dz\wedge dx
+ \Bigl(\frac{\partial E}{\partial t} - \nabla\times B\Bigr)_{\!x} dt\wedge dy\wedge dz
+ (\nabla\cdot E)\,dx\wedge dy\wedge dz ,
$$

which is Hassani's Eq. (28.44). Note that this is the same pattern as Step 1 with $E \mapsto -B$, $B \mapsto E$, exactly as the duality in Step 1 of the example predicts: substituting those into Step 1's coefficients $\nabla\times E + \partial_t B$ and $\nabla\cdot B$ gives $\partial_t E - \nabla\times B$ and $\nabla\cdot E$, the coefficients above.

**Step 4: star $J$.** From the Minkowski table, $\star\,dt = dx\wedge dy\wedge dz$, $\star\,dx = dt\wedge dy\wedge dz$, $\star\,dy = dt\wedge dz\wedge dx$ and $\star\,dz = dt\wedge dx\wedge dy$. Hence, using $J_0 = \rho$ and $J_i = -J^i$,

$$
\star J = \rho\,dx\wedge dy\wedge dz \;-\; J^x\,dt\wedge dy\wedge dz \;-\; J^y\,dt\wedge dz\wedge dx \;-\; J^z\,dt\wedge dx\wedge dy ,
$$

Hassani's Eq. (28.46).

**Step 5: match coefficients.** Setting $d\star F = 4\pi\star J$ and equating the coefficients of the four independent basis $3$-forms gives

$$
\nabla\cdot E = 4\pi\rho , \qquad \Bigl(\frac{\partial E}{\partial t} - \nabla\times B\Bigr)_{\!i} = -4\pi J^i \ \ (i = x,y,z),
$$

the second of which is the Ampère–Maxwell law $\nabla\times B = \partial_t E + 4\pi\mathbf J$. $\square$
:::

:::remark[Conventions, and what changes in SI units]{provenance=original}
Three conventions have been fixed, and all three are visible in the formulas:

1. **Signature and orientation.** $(+,-,-,-)$ with $\mu = dt\wedge dx\wedge dy\wedge dz$, so $\nu = 3$. Hassani and Arfken both use this; a reader following a book with signature $(-,+,+,+)$ will find $\nu = 1$, so $(-1)^\nu = -1$ is the same as ours and every $\star\star$ rule is unchanged, $\star\star = -\mathrm{id}$ on $2$-forms included. The star itself does change: the count $m_I$ of negative metric signs in $I$ changes parity for $I$ of length $1$ and of length $3$, so $\star$ reverses sign on $1$-forms and on $3$-forms, while on $2$-forms the two changes cancel and $\star$ — hence $\star F$ — is unaffected. The safest practice is to recompute the short table of the method block in whatever convention is in force before trusting any formula containing a star.
2. **Units.** Gaussian with $c = 1$, which is why $4\pi$ appears on the right of $d\star F = 4\pi\star J$ and the Lagrangian carries $1/8\pi$. In SI units the same equations read $dF = 0$ and $d\star F = \mu_0\star J$, where $\mu_0$ — in this sentence only, the letter $\mu$ being the volume form everywhere else in the unit — denotes the vacuum permeability; $c$ is restored by using $x^0 = ct$ and measuring $E/c$ rather than $E$ against $B$.
3. **$F$ versus $\star F$.** Hassani's $F$ is the one whose $E$ components sit on $dt\wedge dx^i$. Some treatments start from the dual 2-form instead; the equations then swap, $d\star F = 0$ becoming the homogeneous pair. The physical content is the same, but the *statement* "the homogeneous equations say $F$ is closed" is not convention-free.

The quantity $\lvert B\rvert^2 - \lvert E\rvert^2 = \langle F,F\rangle$ and the quantity $E\cdot B$, extracted in the worked example, are the only two independent invariants one can build pointwise from $F$ alone with the metric and the orientation. The count of $4$-forms proves only half of that: $F\wedge\star F$ and $F\wedge F$ are the only two natural $4$-forms *quadratic* in $F$, so there are exactly two independent quadratic invariants, and nothing in the count excludes an independent invariant of higher degree. That none exists is a separate standard fact which we quote rather than prove; for a $2$-form in four dimensions it follows from the Cayley–Hamilton theorem, which expresses the trace of every power of the mixed tensor $F^{\alpha}{}_{\beta}$ in terms of $\operatorname{tr}(F^2)$ and $\det F$ — and those two are, up to constants, $\langle F,F\rangle$ and $(E\cdot B)^2$.
:::

:::application[Gauss's law, charge conservation, and the four-potential]{provenance=original}
**Gauss's law is Stokes' theorem.** Let a point charge $q$ sit at rest at the origin, so that $E = q\,\mathbf r/r^3$ and $B = 0$. Then by Step 2 of the translation,

$$
\star F = \frac{q}{r^3}\bigl( x\,dy\wedge dz + y\,dz\wedge dx + z\,dx\wedge dy \bigr)
$$

on the slice $t = \text{const}$, where $r^2 = x^2+y^2+z^2$. This is a 2-form, and we integrate it over the sphere $S_R$ of radius $R$ in that slice, oriented outwards. The bracket is the flux 2-form of the position field $\mathbf r$, whose restriction to $S_R$ is $\mathbf r\cdot\hat{\mathbf n}\,dA = R\,dA$ with $dA$ the area element (:ref[Surface integrals]{to=vcalc.surface-integrals}). Hence the restriction of $\star F$ to $S_R$ is the constant $q R^{-3}\cdot R = q/R^2$ times $dA$, and

$$
\int_{S_R} \star F = \frac{q}{R^2}\cdot 4\pi R^2 = 4\pi q ,
$$

independently of $R$. For $q = 3$ in Gaussian units this is $12\pi \approx 37.699$. The same number comes out of the field equation: by :ref[the general Stokes theorem]{to=geom.stokes-forms} applied to the ball $B_R$ in the slice,

$$
\int_{S_R}\star F = \int_{B_R} d\star F = 4\pi\int_{B_R}\star J = 4\pi\!\!\int_{B_R}\!\! \rho\,dx\wedge dy\wedge dz = 4\pi q ,
$$

where the three terms of $\star J$ containing $dt$ drop out on restriction to a slice of constant $t$, and the last step is that $\int_{B_R}\rho\,dx\wedge dy\wedge dz = q$ is the enclosed charge.

This second chain needs one word of care that the first does not. A point charge is not a smooth source: $\star F$ blows up at the origin and $\rho$ is there not a function but the point density $q\,\delta^3$ (:ref[The Dirac delta in calculations]{to=vcalc.dirac-delta-basics}), so the equation $d\star F = 4\pi\star J$ on $B_R$, the appeal to Stokes over the whole ball, and the reading $\int_{B_R}\rho\,dx\wedge dy\wedge dz = q$ all hold in the distributional sense only. The surface integral $\int_{S_R}\star F = 4\pi q$ computed first uses nothing but the smooth field on $S_R$ and needs no such reading; and on a shell $\{R_1 \le r \le R_2\}$, where $\star F$ is smooth with $d\star F = 0$, Stokes applies literally and already delivers the radius-independence. Gauss's law is thus not an extra postulate but the integrated form of $d\star F = 4\pi\star J$, and the radius-independence is the statement that $\star F$ is closed where there is no charge.

**Charge conservation is $d\circ d = 0$.** Apply $d$ to the inhomogeneous equation. The left-hand side gives $d(d\star F) = 0$ automatically, so $d\star J = 0$. Expanding $\star J$ as in Step 4 of the translation,

$$
d\star J = \Bigl(\frac{\partial\rho}{\partial t} + \nabla\cdot\mathbf J\Bigr)\,dt\wedge dx\wedge dy\wedge dz ,
$$

so the continuity equation $\partial_t\rho + \nabla\cdot\mathbf J = 0$ is forced by the field equation. Equivalently $\delta J = 0$, by part (d) of the statement. This is Hassani's Problem 28.24, and it is the cleanest illustration of what the formalism buys: a conservation law that in components needs a short calculation becomes a one-line consequence of a structural identity. The same mechanism — a source coupled to a closed-by-construction object — is how conserved currents arise throughout field theory; the Lagrangian route to the same conclusion is :ref[Noether's theorem]{to=var.noether-theorem}.

**The four-potential, and what it costs.** The homogeneous equation says $F$ is closed. On a region of spacetime simple enough for :ref[the Poincaré lemma]{to=geom.poincare-lemma} to apply, a closed 2-form is exact, so there is a 1-form $A = A_\alpha\,dx^\alpha$ with $F = dA$, that is, $F_{\alpha\beta} = \partial_\alpha A_\beta - \partial_\beta A_\alpha$. Its components are the scalar and vector potentials of electromagnetism, and the gauge freedom $A \mapsto A + d\chi$ is exactly the non-uniqueness of a primitive: $d(A + d\chi) = dA$ because $d\circ d = 0$. Hassani makes this his Example 28.5.16. In the Lorenz gauge $\delta A = 0$ the remaining equation $\delta F = 4\pi J$ becomes $\delta dA = 4\pi J$, hence $(d\delta + \delta d)A = 4\pi J$: the potential satisfies a wave equation with the current as source, which is the starting point of retarded potentials and of :ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}.

**Beyond electromagnetism.** The adjointness of part (c) is the reason $\delta$ and not $\star d\star$ is the natural partner of $d$: it makes $\Delta = d\delta + \delta d$ formally self-adjoint and non-negative on a compact Riemannian manifold, and its kernel — the **harmonic forms** — is the subject of Hodge theory, which identifies that kernel with the de Rham cohomology of :ref[Closed and exact forms]{to=geom.poincare-lemma}. In numerical analysis the same pairing underlies finite element exterior calculus, where discretising $d$ and $\delta$ as genuine adjoints is what makes a scheme for Maxwell's equations preserve $\nabla\cdot B = 0$ exactly rather than approximately.
:::
