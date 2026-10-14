---
id: funcan.spectrum
title: Spectrum and resolvent
kind: definition
level: core
summary: Splits the complex plane into the resolvent set and the point, continuous and residual spectrum of a bounded operator, shows the spectrum is a non-empty compact subset of the disc of radius $\|T\|$, and proves that a bounded self-adjoint operator has real spectrum and no residual spectrum.
prereqs: [funcan.adjoint-operators, funcan.bounded-operators, funcan.normed-banach-spaces, funcan.hilbert-spaces, funcan.projection-theorem, funcan.riesz-representation, funcan.hahn-banach, complex.liouville-maximum-modulus]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§7.2, pp. 370–373: $T_\\lambda = T - \\lambda I$, the resolvent $R_\\lambda(T) = T_\\lambda^{-1}$ and the footnote on competing sign conventions, p. 370; Def. 7.2-1 (regular value by the three conditions (R1), (R2), (R3); resolvent set; point, continuous and residual spectrum) with the table, p. 371; the disjointness of the four sets and the remark that $\\sigma_c = \\sigma_r = \\varnothing$ in finite dimensions, p. 372; Example 7.2-2 (the right shift has $0 \\in \\sigma_r$), pp. 372–373; Lemma 7.2-3 (for bounded $T$ on a Banach space, $R_\\lambda$ is defined on all of $X$), p. 373. §7.3, pp. 374–378: Thm 7.3-1 (Neumann series for $(I-T)^{-1}$ when $\\|T\\|<1$), p. 375; Thm 7.3-2 ($\\rho(T)$ open) and Representation Thm 7.3-3, pp. 376–377; Thm 7.3-4 ($\\sigma(T)$ compact, inside $|\\lambda| \\le \\|T\\|$), pp. 377–378; Def. 7.3-5 (spectral radius) and (11), p. 378. §7.5: Thm 7.5-3 (the resolvent blows up at the spectrum), Thm 7.5-4 ($\\sigma(T) \\ne \\varnothing$, by Liouville's theorem) and Thm 7.5-5 (Gelfand's formula), pp. 390–391. §9.1–9.2: Thm 9.1-2 (the criterion $\\|T_\\lambda x\\| \\ge c\\|x\\|$ for $\\lambda \\in \\rho(T)$), pp. 461–463; Thm 9.1-3 (the spectrum of a bounded self-adjoint operator is real), pp. 463–464; Thm 9.2-1 ($\\sigma(T) \\subseteq [m,M]$), pp. 465–466; Thm 9.2-3 ($m, M \\in \\sigma(T)$), p. 467; Thm 9.2-4 (no residual spectrum), p. 468"
    pages: "370-378, 390-391, 461-468"
    role: the classification we follow, the Neumann-series and openness arguments, the compactness and non-emptiness of the spectrum, and the statements and proof routes for the self-adjoint case
  - work: reed-simon-1980
    loc: "§VI.3, pp. 188–194: the definition of $\\rho(T)$ as the set where $\\lambda I - T$ is a bijection with bounded inverse, the resolvent $R_\\lambda(T)$, and the definitions of point and residual spectrum, p. 188; Thm VI.5 ($\\rho(T)$ open, $R_\\lambda$ analytic) and the first resolvent formula (VI.1), pp. 190–191; the corollary that $\\sigma(T) \\ne \\varnothing$, proved from the Neumann series (VI.2) and Liouville's theorem, p. 191; Thm VI.6 (spectral radius $r(T) = \\lim\\|T^n\\|^{1/n}$, and $r(A) = \\|A\\|$ for self-adjoint $A$), p. 192; Thm VI.7 (Phillips) and the worked shift example with its table, pp. 192–194; the proposition relating the residual spectrum of $T$ to the point spectrum of $T^*$, p. 194; Thm VI.8 (a self-adjoint operator has no residual spectrum, real spectrum, orthogonal eigenvectors), p. 194"
    pages: "188-194"
    role: the analytic structure of the resolvent, the non-emptiness proof, the duality between residual and point spectrum, the shift example and its table, and an alternative route to the self-adjoint theorem
  - work: stakgold-holst-2011
    loc: "§5.6, pp. 326–331: the resolvent set and spectrum of a closed densely defined operator, p. 326; the classification into point, continuous and *compression* spectrum, with the warning that these sets need not be disjoint, and the approximate point spectrum characterised by $\\|Au_n - \\lambda u_n\\| \\to 0$ for unit vectors $u_n$, p. 327; Thm 5.6.1 (deficiency in the compression spectrum equals multiplicity as an eigenvalue of $A^*$), Thm 5.6.2 (a symmetric operator has real approximate spectrum and orthogonal eigenvectors) and Thm 5.6.3 (self-adjoint operators), pp. 327–328; Example 5 (multiplication by $x$ on $L_2(0,1)$ has no eigenvalues and continuous spectrum $[0,1]$), p. 329; Example 6 (the approximating sequence of indicator functions), pp. 330–331; Example 8 (the right shift, $0$ in the compression spectrum, $|\\lambda|<1$ in the compression spectrum, $|\\lambda| = 1$ continuous), pp. 331–332. §5.9, Lemma 5.9.1 (Banach lemma: $\\|A\\|<1$ makes $I-A$ invertible with $\\|(I-A)^{-1}\\| \\le (1-\\|A\\|)^{-1}$), pp. 348–349"
    pages: "326-332, 348-349"
    role: the competing classification by operator states, the approximate point spectrum, the quantitative Neumann bound, and the two standard examples
  - work: hassani-2013
    loc: "§17.3, Def. 17.3.1 (regular point, resolvent set, spectrum) and the remark that $|\\lambda| \\le \\|T\\|$ on the spectrum, p. 517; the contrast with finite dimensions, where $\\sigma(T)$ is exactly the set of eigenvalues, p. 518; §17.4, Prop. 17.4.7 ($\\rho(T)$ open and $\\sigma(T)$ closed and bounded), p. 521"
    pages: "517-518, 521"
    role: a definition that asks only for a bounded inverse, and the finite-dimensional contrast
  - work: evans-2010
    loc: "Appendix D.3a, p. 677: the resolvent set of a bounded operator on a *real* Banach space defined as the $\\eta \\in \\mathbb{R}$ for which $A - \\eta I$ is one-to-one and onto, the spectrum as its complement in $\\mathbb{R}$, the appeal to the closed graph theorem to make $(A-\\eta I)^{-1}$ bounded, and the point spectrum $\\sigma_p(A)$ defined by $N(A-\\eta I) \\ne \\{0\\}$"
    pages: "677"
    role: the real-scalar convention used in partial differential equations, and the closed-graph argument that automatic boundedness of the inverse rests on
---

:::definition[Resolvent set and the three parts of the spectrum]{provenance=adapted src="kreyszig-1978:§7.2, Def. 7.2-1 and the table, pp. 370–371"}
Let $X \ne \{0\}$ be a **complex** normed space and $T : \mathcal{D}(T) \to X$ linear, with $\mathcal{D}(T) \subseteq X$. For $\lambda \in \mathbb{C}$ write

$$
T_\lambda = T - \lambda I , \qquad R_\lambda(T) = T_\lambda^{-1} \ \text{ (when it exists)} ,
$$

and call $R_\lambda(T)$, or simply $R_\lambda$, the **resolvent** of $T$ at $\lambda$. Its domain is the range of $T_\lambda$. We follow :cite[Kreyszig]{work=kreyszig-1978 loc="§7.2, p. 370"} in using $T - \lambda I$; some authors use $\lambda I - T$, and the older integral-equation literature uses $(I - \mu T)^{-1}$, so the sign and the role of $\lambda$ must be checked before comparing formulas between books.

$\lambda$ is a **regular value** of $T$ when all three hold:

- (R1) $R_\lambda$ exists;
- (R2) $R_\lambda$ is bounded;
- (R3) $R_\lambda$ is defined on a dense subset of $X$.

The **resolvent set** $\rho(T)$ is the set of regular values; the **spectrum** is $\sigma(T) = \mathbb{C}\setminus\rho(T)$. It splits into three disjoint pieces:

| | (R1) | (R2) | (R3) | $\lambda$ lies in |
|---|---|---|---|---|
| regular | yes | yes | yes | $\rho(T)$ |
| point spectrum | **no** | — | — | $\sigma_p(T)$ |
| continuous spectrum | yes | **no** | yes | $\sigma_c(T)$ |
| residual spectrum | yes | — | **no** | $\sigma_r(T)$ |

- **Point spectrum.** (R1) fails exactly when $T_\lambda x = 0$ for some $x \ne 0$, that is when $\lambda$ is an **eigenvalue** with **eigenvector** $x$. The **eigenspace** is $N(T_\lambda)$ and its dimension is the (geometric) multiplicity of $\lambda$.
- **Continuous spectrum.** $T_\lambda$ is injective with dense range, but the inverse is unbounded: the equation $T_\lambda x = y$ is solvable for a dense set of data, and the solution does not depend continuously on them.
- **Residual spectrum.** $T_\lambda$ is injective but its range misses a whole closed subspace: there is a $y \ne 0$ with $y \perp R(T_\lambda)$ (in a Hilbert space), so a set of data of positive "thickness" admits no solution even approximately.

The four sets are disjoint and cover $\mathbb{C}$. In finite dimensions $\sigma_c = \sigma_r = \varnothing$ and the spectrum is exactly the set of eigenvalues, because an injective linear map of a finite-dimensional space onto itself is surjective with bounded inverse; :cite[Hassani]{work=hassani-2013 loc="§17.3, p. 518"} emphasises that it is precisely this implication which fails in infinite dimensions. See :ref[eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors} for the finite-dimensional theory.
:::

:::note[Three other conventions in the library]{provenance=adapted src="reed-simon-1980:§VI.3, p. 188, and the proposition on p. 194; stakgold-holst-2011:§5.6, pp. 326–327; evans-2010:Appendix D.3a, p. 677; hassani-2013:Def. 17.3.1, p. 517"}
The definition above is :cite[Kreyszig's]{work=kreyszig-1978 loc="Def. 7.2-1, p. 371"}, and it is the one used throughout this unit. Three others appear in the books cited here; they are not in conflict about any concrete operator, but their words differ, so a result must be read with its author's definition in hand.

- **Bijection with bounded inverse.** :cite[Reed and Simon]{work=reed-simon-1980 loc="§VI.3, p. 188"} put $\lambda \in \rho(T)$ when $\lambda I - T$ is a bijection of $X$ with a bounded inverse, and note that for $T \in \mathcal{B}(X)$ with $X$ complete the boundedness is automatic, by the inverse mapping theorem (:ref[open mapping and bounded inverse]{to=funcan.uniform-boundedness-open-mapping}). :cite[Hassani]{work=hassani-2013 loc="Def. 17.3.1, p. 517"} asks only that $(T - \lambda\mathbf 1)^{-1}$ exist and be bounded. His "exists" has to be read as *exists as a two-sided inverse defined on all of $H$*, which is how he uses it: in Example 17.3.2, p. 518, he disqualifies a $\lambda$ from $\rho(T_r)$ precisely by showing that $T_r - \lambda\mathbf 1$ is not onto. Read literally — an inverse on the range alone — the right shift would be regular at $\lambda = 0$, since it is injective with $\|Su\| = \|u\|$, whereas the example below puts $0$ in the residual spectrum. (A related slip: that same Example 17.3.2 reads off $\sigma(T_r) = \{0 < |\lambda| \le 1\}$, with $\lambda = 0$ omitted, which also contradicts his own Prop. 17.4.7, p. 521, that the spectrum is closed.) With that reading, all three definitions pick out the same set $\rho(T)$ for a bounded operator on a Banach space: by Lemma 7.2-3 of :cite[Kreyszig]{work=kreyszig-1978 loc="§7.2, p. 373"}, (R1)–(R3) already force $R_\lambda$ to be defined on all of $X$, and conversely a bounded two-sided inverse on all of $X$ satisfies (R1)–(R3) at once. They can differ for unbounded operators, which is why :ref[unbounded and closed operators]{to=funcan.unbounded-operators} restates the definition in that setting.
- **Compression spectrum instead of residual.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.6, p. 327"} classify by the *state* of $T_\lambda$ and use three sets that are deliberately **not** disjoint: the point spectrum, the continuous spectrum (inverse exists but is unbounded) and the **compression spectrum** ($R(\lambda) \ne H$, the codimension of the range being the *deficiency* of $\lambda$). Point and continuous spectrum are disjoint, and their union is the **approximate point spectrum**, characterised by the existence of unit vectors $u_n$ with $\|Au_n - \lambda u_n\| \to 0$. Their Theorem 5.6.1 says that $\lambda$ has deficiency $m$ in the compression spectrum exactly when $\bar\lambda$ is an eigenvalue of $A^*$ of multiplicity $m$ — their printed statement has $\lambda$ rather than $\bar\lambda$ there, while their own one-line proof, $R(A-\lambda I)^{\perp} = N\bigl((A-\lambda I)^*\bigr) = N(A^* - \bar\lambda I)$, delivers the conjugate, which is the form we use and the form :cite[Reed and Simon]{work=reed-simon-1980 loc="§VI.3, p. 194"} state; the two agree in the only case the book applies the theorem, $\lambda$ real; in Kreyszig's language, a $\lambda$ in the residual spectrum is a $\lambda$ in the compression spectrum but not the point spectrum. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VI.3, p. 194"} record the same duality: if $\lambda$ lies in the residual spectrum of $T$ then $\bar\lambda$ lies in the point spectrum of $T^*$.
- **Real scalars.** :cite[Evans]{work=evans-2010 loc="Appendix D.3a, p. 677"} works on a real Banach space and defines $\rho(A) = \{\eta \in \mathbb{R} : A - \eta I \text{ is one-to-one and onto}\}$, $\sigma(A) = \mathbb{R}\setminus\rho(A)$, invoking the closed graph theorem for boundedness of the inverse. This is the convention of partial differential equations, where the operators are real and self-adjoint and nothing is lost. It is not interchangeable with the complex definition: over $\mathbb{R}$ a rotation of the plane has empty spectrum, whereas over $\mathbb{C}$ no bounded operator does (part 4 of the statement below).
:::

:::statement[The geometry of the resolvent set]{provenance=adapted src="kreyszig-1978:Thm 7.3-1, p. 375, Thm 7.3-2, p. 376, Thm 7.3-3, p. 377, Thm 7.3-4, pp. 377–378, Thm 7.5-4, pp. 390–391; reed-simon-1980:Thm VI.5 with (VI.1), pp. 190–191, and its corollary, p. 191; stakgold-holst-2011:Lemma 5.9.1, pp. 348–349"}
Let $X$ be a complex Banach space and $T \in \mathcal{B}(X)$.

1. **Neumann series.** If $\|T\| < 1$ then $I - T$ is invertible, $(I-T)^{-1} \in \mathcal{B}(X)$ is given by the norm-convergent series $\sum_{j\ge0}T^j$, and
   $$
   \bigl\|(I-T)^{-1}\bigr\| \;\le\; \frac{1}{1 - \|T\|} .
   $$
2. **$\rho(T)$ is open and $R_\lambda$ is analytic on it.** If $\lambda_0 \in \rho(T)$ then every $\lambda$ with $|\lambda - \lambda_0| < 1/\|R_{\lambda_0}\|$ lies in $\rho(T)$ and
   $$
   R_\lambda = \sum_{j=0}^{\infty}(\lambda - \lambda_0)^{\,j}\,R_{\lambda_0}^{\,j+1} ,
   $$
   absolutely convergent in $\mathcal{B}(X)$ on that disc. Hence $\sigma(T)$ is closed. For $\lambda,\mu \in \rho(T)$ the resolvents commute and satisfy the **first resolvent identity**
   $$
   R_\lambda - R_\mu = (\lambda - \mu)\,R_\lambda R_\mu .
   $$
   (:cite[Reed and Simon]{work=reed-simon-1980 loc="(VI.1), p. 190"} write the right-hand side with the opposite sign, because their resolvent is $(\lambda I - T)^{-1}$.)
3. **$\sigma(T)$ is compact.** Every $\lambda$ with $|\lambda| > \|T\|$ is regular, with $R_\lambda = -\lambda^{-1}\sum_{j\ge0}(T/\lambda)^j$; so $\sigma(T)$ lies in the closed disc of radius $\|T\|$ and, being closed and bounded, is compact.
4. **$\sigma(T)$ is not empty**, provided $X \ne \{0\}$.
:::

:::statement[Bounded self-adjoint operators]{provenance=adapted src="kreyszig-1978:Thm 9.1-2, pp. 461–463, Thm 9.1-3, pp. 463–464, Thm 9.2-4, p. 468; reed-simon-1980:Thm VI.8, p. 194; stakgold-holst-2011:Thm 5.6.2 and Thm 5.6.3, pp. 327–328"}
Let $H \ne \{0\}$ be a complex Hilbert space and $T \in \mathcal{B}(H)$ self-adjoint, $T = T^*$.

1. **A quantitative criterion for regularity.** $\lambda \in \rho(T)$ if and only if there is a $c > 0$ with
   $$
   \|T_\lambda x\| \ge c\,\|x\| \qquad \text{for every } x \in H .
   $$
2. **The spectrum is real.** $\sigma(T) \subset \mathbb{R}$. More precisely, if $\lambda = \alpha + i\beta$ with $\beta \ne 0$ then $\|T_\lambda x\| \ge |\beta|\,\|x\|$, so $\lambda \in \rho(T)$ and $\|R_\lambda\| \le 1/|\beta|$.
3. **There is no residual spectrum.** $\sigma_r(T) = \varnothing$, so $\sigma(T) = \sigma_p(T)\,\dot\cup\,\sigma_c(T)$, a disjoint union of real sets.
4. Eigenvalues of $T$ are real and eigenvectors belonging to distinct eigenvalues are orthogonal; this was proved in :ref[adjoints, self-adjoint and unitary operators]{to=funcan.adjoint-operators} and is used below.

A self-adjoint operator may have **no eigenvalues at all** — the multiplication operator of the first example has $\sigma_p = \varnothing$ — so part 4 is not a substitute for parts 2 and 3.
:::

:::note[Three further facts, used but not proved here]{provenance=adapted src="kreyszig-1978:Def. 7.3-5 and (11), p. 378, Thm 7.5-5, p. 391, Thm 9.2-1, pp. 465–466, Thm 9.2-3, p. 467; reed-simon-1980:Thm VI.6, p. 192, Thm VI.7, p. 192"}
- **Spectral radius.** $r_\sigma(T) = \sup\{|\lambda| : \lambda \in \sigma(T)\}$ satisfies $r_\sigma(T) \le \|T\|$ by part 3 above, and in fact **Gelfand's formula** $r_\sigma(T) = \lim_{n\to\infty}\|T^n\|^{1/n}$ holds (:cite[Kreyszig]{work=kreyszig-1978 loc="Thm 7.5-5, p. 391"}; :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm VI.6, p. 192"}). Both obtain it by identifying $r_\sigma(T)^{-1}$ with the radius within which the expansion of part 3, read as a Laurent expansion at $\lambda = \infty$, converges; that argument belongs to complex analysis rather than operator theory, and we do not reproduce it. For self-adjoint $A$ it gives $r_\sigma(A) = \|A\|$: the $C^*$ identity of :ref[adjoints]{to=funcan.adjoint-operators} gives $\|A^2\| = \|A\|^2$, hence $\|A^{2^k}\| = \|A\|^{2^k}$, and the limit along that subsequence is $\|A\|$. So for a self-adjoint operator the spectrum reaches the boundary of the disc of part 3, while for the nilpotent matrix $\bigl(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\bigr)$, with $\|T\| = 1$ and $\sigma(T) = \{0\}$, it does not.
- **Location between the extremes of the quadratic form.** With $m = \inf_{\|x\|=1}(Tx,x)$ and $M = \sup_{\|x\|=1}(Tx,x)$, :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 9.2-1, pp. 465–466, and Thm 9.2-3, p. 467"} shows $\sigma(T) \subseteq [m,M]$ for self-adjoint $T$, and that both endpoints belong to $\sigma(T)$; combined with $\|T\| = \sup_{\|x\|=1}|(Tx,x)|$ from :ref[adjoints]{to=funcan.adjoint-operators}, this is the same statement as $r_\sigma(T) = \|T\|$ with the sign resolved.
- **Adjoints.** :cite[Reed and Simon's]{work=reed-simon-1980 loc="Thm VI.7, p. 192"} theorem of Phillips gives $\sigma(T^*) = \{\bar\lambda : \lambda \in \sigma(T)\}$ and $R_\lambda(T^*) = R_{\bar\lambda}(T)^*$ in the Hilbert-space case. It is what makes the shift example below computable from its adjoint.
:::

:::idea{provenance=original}
Three ideas carry the whole unit.

*Invertibility is an open condition, because of the geometric series.* If $\|T\| < 1$ then $\sum T^j$ converges and inverts $I - T$, exactly as $(1-t)^{-1} = \sum t^j$ for a number. Writing $T - \lambda I = (T - \lambda_0 I)\bigl[I - (\lambda-\lambda_0)R_{\lambda_0}\bigr]$ turns "invertible at $\lambda_0$" into "invertible near $\lambda_0$", which is why $\rho(T)$ is open; and factoring out $\lambda$ instead turns "$|\lambda|$ large" into "invertible", which is why $\sigma(T)$ is bounded.

*Non-emptiness is Liouville's theorem.* The same series shows $R_\lambda \to 0$ as $|\lambda| \to \infty$. If the spectrum were empty, $R_\lambda$ would be an entire, bounded, operator-valued function, hence constant and hence $0$ — but $0$ is not invertible. The spectrum exists because an entire bounded function is constant.

*Self-adjointness pushes the spectrum onto the real axis by a direct estimate.* For self-adjoint $T$ the number $(Tx,x)$ is real, so the imaginary part of $((T-\lambda I)x,x)$ is $-\beta\|x\|^2$, where $\beta = \operatorname{Im}\lambda$. Cauchy-Schwarz then forces $\|T_\lambda x\| \ge |\beta|\,\|x\|$. The work is in knowing that such a lower bound is *enough* for regularity — it gives injectivity and boundedness of the inverse at once, and self-adjointness is used a second time to show that the range is dense, and completeness a third time to show it is closed.
:::

:::proof[The geometry of the resolvent set]{provenance=adapted src="kreyszig-1978:Thm 7.3-1, p. 375, Thm 7.3-2, p. 376, Thm 7.3-4, pp. 377–378, Thm 7.5-4, pp. 390–391; reed-simon-1980:Thm VI.5, pp. 190–191, and its corollary, p. 191; stakgold-holst-2011:Lemma 5.9.1, pp. 348–349"}
**Part 1: Neumann series.** Submultiplicativity gives $\|T^j\| \le \|T\|^j$ (:ref[bounded linear operators]{to=funcan.bounded-operators}), so $\sum_j\|T^j\| \le \sum_j\|T\|^j = (1-\|T\|)^{-1} < \infty$: the series is absolutely convergent. **Because $X$ is complete, $\mathcal{B}(X)$ is complete**, and in a Banach space absolute convergence implies convergence; call the sum $S$. Telescoping the partial sums,
$$
(I-T)\sum_{j=0}^n T^j = \Bigl(\sum_{j=0}^n T^j\Bigr)(I-T) = I - T^{n+1} ,
$$
and $\|T^{n+1}\| \le \|T\|^{n+1} \to 0$ since $\|T\| < 1$. Letting $n \to \infty$ gives $(I-T)S = S(I-T) = I$, so $S = (I-T)^{-1}$, and $\|S\| \le \sum_j\|T\|^j = (1-\|T\|)^{-1}$, which is the quantitative form recorded by :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Lemma 5.9.1, pp. 348–349"}.

**Part 2: $\rho(T)$ open.** Let $\lambda_0 \in \rho(T)$. For a bounded $T$ on a Banach space, $R_{\lambda_0} \in \mathcal{B}(X)$ is defined on all of $X$ (:cite[Kreyszig]{work=kreyszig-1978 loc="Lemma 7.2-3, p. 373"}). Write
$$
T - \lambda I = (T - \lambda_0 I) - (\lambda - \lambda_0)I = (T-\lambda_0 I)\bigl[I - (\lambda-\lambda_0)R_{\lambda_0}\bigr] ,
$$
which is legitimate because $R_{\lambda_0}$ is a genuine two-sided inverse of $T - \lambda_0 I$. If $|\lambda - \lambda_0|\,\|R_{\lambda_0}\| < 1$, part 1 inverts the bracket as $\sum_j (\lambda-\lambda_0)^jR_{\lambda_0}^{\,j}$, and a product of invertible operators is invertible with
$$
R_\lambda = \bigl[I - (\lambda-\lambda_0)R_{\lambda_0}\bigr]^{-1}R_{\lambda_0} = \sum_{j=0}^{\infty}(\lambda-\lambda_0)^jR_{\lambda_0}^{\,j+1} \in \mathcal{B}(X) .
$$
So the disc $|\lambda - \lambda_0| < 1/\|R_{\lambda_0}\|$ lies in $\rho(T)$, which is therefore open, and $\sigma(T)$ is closed. The displayed power series shows $\lambda \mapsto R_\lambda$ is analytic on $\rho(T)$. For the resolvent identity, start from $R_\lambda T_\mu R_\mu = R_\lambda$ and $R_\lambda T_\lambda R_\mu = R_\mu$ and subtract:
$$
R_\lambda - R_\mu = R_\lambda\bigl(T_\mu - T_\lambda\bigr)R_\mu = (\lambda-\mu)\,R_\lambda R_\mu ,
$$
since $T_\mu - T_\lambda = (\lambda-\mu)I$ with the convention $T_\lambda = T - \lambda I$. Swapping the names $\lambda$ and $\mu$ negates the left side and also the factor $\lambda - \mu$, so $R_\lambda R_\mu = R_\mu R_\lambda$.

**Part 3: compactness.** Let $|\lambda| > \|T\|$. Then $\|T/\lambda\| < 1$ and
$$
T - \lambda I = -\lambda\Bigl(I - \frac{T}{\lambda}\Bigr) ,
$$
so by part 1 it is invertible with $R_\lambda = -\lambda^{-1}\sum_{j\ge0}(T/\lambda)^j$ and $\|R_\lambda\| \le (|\lambda| - \|T\|)^{-1}$. Hence $\sigma(T) \subseteq \{|\lambda| \le \|T\|\}$ is bounded, and closed by part 2, hence compact (:ref[compactness]{to=found.compactness}).

**Part 4: non-emptiness.** Suppose $\sigma(T) = \varnothing$, so $\rho(T) = \mathbb{C}$ and $\lambda \mapsto R_\lambda$ is analytic on all of $\mathbb{C}$. Fix $x \in X$ and a bounded linear functional $f$ on $X$, and set $h(\lambda) = f(R_\lambda x)$. Composing an analytic $\mathcal{B}(X)$-valued function with the bounded linear maps $S \mapsto Sx$ and $f$ makes $h$ an entire scalar function. It is bounded: on the compact disc $|\lambda| \le 2\|T\|$ it is continuous, hence bounded; and for $|\lambda| > 2\|T\|$ the estimate of part 3 gives $\|R_\lambda\| \le (|\lambda|-\|T\|)^{-1} \le 1/\|T\|$, so $|h(\lambda)| \le \|f\|\,\|x\|/\|T\|$ (if $T = 0$ then $\sigma(T) = \{0\} \ne \varnothing$ already). By :ref[Liouville's theorem]{to=complex.liouville-maximum-modulus}, $h$ is constant; and since $h(\lambda) \to 0$ as $|\lambda| \to \infty$, that constant is $0$. As $f$ was an arbitrary bounded functional, and the bounded functionals separate the points of a normed space — the one consequence of :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach} used here, and the only result quoted in this unit that is proved later in this part rather than earlier — we get $R_\lambda x = 0$ for every $x$ and every $\lambda$, that is $R_\lambda = 0$. But $R_\lambda(T - \lambda I) = I \ne 0$ because $X \ne \{0\}$ — a contradiction. $\square$
:::

:::proof[Bounded self-adjoint operators]{provenance=adapted src="kreyszig-1978:Thm 9.1-2, pp. 461–463, Thm 9.1-3, pp. 463–464, Thm 9.2-4, p. 468"}
Throughout, $T = T^*$ on a complex Hilbert space $H$, and $T_\lambda = T - \lambda I$.

**Part 1, necessity.** Let $\lambda \in \rho(T)$, so $R_\lambda$ exists and is bounded with $\|R_\lambda\| = k$; and $k > 0$, since $R_\lambda \ne 0$. For any $x \in H$ the vector $y = T_\lambda x$ lies in the domain of $R_\lambda$ and $R_\lambda y = x$, so $\|x\| \le k\,\|T_\lambda x\|$. Thus the criterion holds with $c = 1/k$.

**Part 1, sufficiency.** Suppose $\|T_\lambda x\| \ge c\|x\|$ for all $x$, with $c > 0$. We verify (R1), (R3), (R2) in turn.

*(a) $T_\lambda$ is injective.* If $T_\lambda x_1 = T_\lambda x_2$ then $c\|x_1 - x_2\| \le \|T_\lambda(x_1-x_2)\| = 0$, so $x_1 = x_2$. Hence $R_\lambda$ exists on $R(T_\lambda)$.

*(b) $R(T_\lambda)$ is dense.* Let $x_0 \perp R(T_\lambda)$. Then $(T_\lambda x, x_0) = 0$ for every $x$, that is $(Tx,x_0) = \lambda(x,x_0)$. **Here self-adjointness enters:** $(Tx,x_0) = (x,Tx_0)$, while $\lambda(x,x_0) = (x,\bar\lambda x_0)$, so $(x, Tx_0 - \bar\lambda x_0) = 0$ for all $x$ and therefore $Tx_0 = \bar\lambda x_0$. If $x_0 \ne 0$ this makes $\bar\lambda$ an eigenvalue of $T$, hence real by part 4 of the statement, hence $\bar\lambda = \lambda$ and $T_\lambda x_0 = 0$; but then the hypothesis gives $0 = \|T_\lambda x_0\| \ge c\|x_0\| > 0$, a contradiction. So $x_0 = 0$, and $R(T_\lambda)^{\perp} = \{0\}$, which by :ref[the projection theorem]{to=funcan.projection-theorem} means $R(T_\lambda)$ is dense.

*(c) $R(T_\lambda)$ is closed.* Let $y_n = T_\lambda x_n \to y$. Then $c\|x_n - x_m\| \le \|y_n - y_m\|$, so $(x_n)$ is Cauchy; **here $H$ must be complete**, and $x_n \to x$ for some $x$. Since $T_\lambda$ is continuous, $y_n = T_\lambda x_n \to T_\lambda x$, so $y = T_\lambda x \in R(T_\lambda)$. With (b) this gives $R(T_\lambda) = H$.

*(d) $R_\lambda$ is bounded.* For $y \in H$ write $y = T_\lambda x$; then $\|R_\lambda y\| = \|x\| \le c^{-1}\|T_\lambda x\| = c^{-1}\|y\|$. So (R1), (R2), (R3) all hold and $\lambda \in \rho(T)$, with $\|R_\lambda\| \le 1/c$.

**Part 2: the spectrum is real.** Let $\lambda = \alpha + i\beta$ with $\alpha,\beta$ real and $\beta \ne 0$, and let $x \ne 0$. Since $T$ is self-adjoint, $(Tx,x)$ is real (:ref[adjoints]{to=funcan.adjoint-operators}), and $(x,x) = \|x\|^2$ is real, so
$$
(T_\lambda x, x) = (Tx,x) - \lambda\|x\|^2
\quad\Longrightarrow\quad
\operatorname{Im}(T_\lambda x, x) = -\beta\,\|x\|^2 .
$$
The imaginary part of a complex number is at most its modulus, so by Cauchy-Schwarz
$$
|\beta|\,\|x\|^2 = \bigl|\operatorname{Im}(T_\lambda x,x)\bigr| \le \bigl|(T_\lambda x,x)\bigr| \le \|T_\lambda x\|\,\|x\| .
$$
Dividing by $\|x\| \ne 0$ gives $\|T_\lambda x\| \ge |\beta|\,\|x\|$, which also holds trivially at $x = 0$. By part 1 with $c = |\beta| > 0$, $\lambda \in \rho(T)$ and $\|R_\lambda\| \le 1/|\beta|$. Hence every spectral value has $\beta = 0$.

**Part 3: no residual spectrum.** Suppose $\lambda \in \sigma_r(T)$. By part 2, $\lambda$ is real. By the definition of $\sigma_r$, $R_\lambda$ exists but its domain $R(T_\lambda)$ is not dense, so by :ref[the projection theorem]{to=funcan.projection-theorem} there is $y \ne 0$ with $y \perp R(T_\lambda)$:
$$
(T_\lambda x, y) = 0 \qquad \text{for every } x \in H .
$$
Since $T$ is self-adjoint and $\lambda$ is real, $T_\lambda$ is self-adjoint too, so $(x, T_\lambda y) = 0$ for every $x$. Taking $x = T_\lambda y$ gives $T_\lambda y = 0$ with $y \ne 0$, so $\lambda$ is an eigenvalue, that is $\lambda \in \sigma_p(T)$. But $\sigma_p$ and $\sigma_r$ are disjoint by definition — a $\lambda$ in $\sigma_p$ fails (R1), a $\lambda$ in $\sigma_r$ satisfies it. The contradiction shows $\sigma_r(T) = \varnothing$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Complex scalars are used in every part.** Over $\mathbb{R}$ the non-emptiness argument has no Liouville theorem to appeal to, and the conclusion is false: the rotation of $\mathbb{R}^2$ through a right angle has $A - \eta I$ invertible for every real $\eta$, so its real spectrum is empty. This is the price of :cite[Evans's]{work=evans-2010 loc="Appendix D.3a, p. 677"} real-scalar convention, and it costs nothing in his setting because there the operators are self-adjoint and part 2 says the spectrum was going to be real anyway.
- **Completeness of $X$ is used three times**: to sum the Neumann series (an absolutely convergent series needs a complete space to converge in), to make $R_{\lambda_0}$ defined on all of $X$ in the openness proof, and in step (c) of the self-adjoint proof, where the Cauchy sequence $(x_n)$ must have a limit. Without it the three parts of the spectrum do not even partition the plane in a stable way.
- **Boundedness of $T$ is what makes $\sigma(T)$ bounded**, and nothing more. For an unbounded operator the spectrum can be all of $\mathbb{C}$, or empty, or a half-plane; see :ref[unbounded and closed operators]{to=funcan.unbounded-operators}.
- **Self-adjointness is used twice in the real-spectrum proof**, at different strengths. Part 2 needs only that $(Tx,x)$ is real, which is *symmetry*; step (b) of part 1 needs $(Tx,x_0) = (x,Tx_0)$ for all $x$, which for a bounded everywhere-defined operator is the same thing. For unbounded operators the two separate, and the conclusion separates with them: a symmetric operator that is not self-adjoint can have spectrum equal to a half-plane or to all of $\mathbb{C}$. This is the point of :ref[symmetric versus self-adjoint operators]{to=funcan.symmetric-self-adjoint}. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 5.6.2 and Thm 5.6.3, pp. 327–328"} state the split carefully: for a merely symmetric operator it is the *approximate* spectrum that is real, while full self-adjointness is what puts every non-real $\lambda$ in the resolvent set.
- **The three parts of the spectrum are defined by conditions on $R_\lambda$, not on $T_\lambda$ alone**, and the order in the table matters: a $\lambda$ failing both (R2) and (R3) is counted as residual, not continuous. Changing that choice is what produces the overlapping sets of :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.6, p. 327"}.
- **A non-empty spectrum is not a non-empty point spectrum.** The multiplication operator below is bounded and self-adjoint with $\sigma(T) = [0,1]$ and not a single eigenvector. Eigenvalues return in force only under compactness: see :ref[compact operators]{to=funcan.compact-operators} and :ref[the spectral theorem for compact self-adjoint operators]{to=funcan.compact-self-adjoint}.
:::

:::method[Locating the spectrum of a concrete operator]{provenance=original}
1. **Bound the region.** Compute or estimate $\|T\|$; the spectrum lies in $|\lambda| \le \|T\|$. If $T$ is self-adjoint, it lies in the real interval $[-\|T\|,\|T\|]$, and in fact in $[m,M]$ with $m,M$ the extremes of the quadratic form.
2. **Find the eigenvalues.** Solve $Tx = \lambda x$ in the space concerned. Membership of the space, not the formal solvability of the equation, is what decides: the recursion for the right shift has solutions for every $\lambda$, but only the zero one lies in $\ell^2$.
3. **Invert explicitly where you can.** Solve $T_\lambda x = y$ for $x$ and inspect the formula. If it defines a bounded operator on all of $X$, then $\lambda \in \rho(T)$, and the formula usually also gives $\|R_\lambda\|$.
4. **For the remaining $\lambda$, test (R2) and (R3) separately.** (R2) fails exactly when there are unit vectors $u_n$ with $\|T_\lambda u_n\| \to 0$ — :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§5.6, p. 327"} approximate point spectrum. (R3) fails exactly when some $y \ne 0$ is orthogonal to $R(T_\lambda)$; in a Hilbert space that happens exactly when $\bar\lambda$ is an eigenvalue of $T^*$, which converts a question about ranges into a question about eigenvectors.
5. **Use closedness to fill in the boundary.** Having found the spectrum on an open set, remember that $\sigma(T)$ is closed: boundary points obtained as limits of spectral values are themselves spectral values, and they are usually the continuous spectrum.
6. **Sanity checks.** $\sigma(T) \ne \varnothing$; $\sigma(T^*) = \overline{\sigma(T)}$; for self-adjoint $T$, $\sigma(T) \subset \mathbb{R}$, $\sigma_r(T) = \varnothing$ and $\max|\sigma(T)| = \|T\|$.
:::

:::example[A self-adjoint operator that is all continuous spectrum]{provenance=original}
On $H = L^2(0,1)$ let $(Mu)(x) = x\,u(x)$. It is self-adjoint, since the multiplier $x$ is real: $(Mu,v) = \int_0^1 x\,u\bar v = (u,Mv)$. Its norm is $1$ (worked out in :ref[bounded linear operators]{to=funcan.bounded-operators}), so $\sigma(M) \subseteq [-1,1]$, and since $(Mu,u) = \int_0^1 x|u|^2 \in [0,\|u\|^2]$, the sharper bound of the note gives $\sigma(M) \subseteq [0,1]$.

**Step 1: no eigenvalues.** $Mu = \lambda u$ means $(x-\lambda)u(x) = 0$ almost everywhere. The factor $x - \lambda$ vanishes at a single point, a set of measure zero, so $u = 0$ almost everywhere: $u$ is the zero element of $L^2$. Hence $\sigma_p(M) = \varnothing$ and $M_\lambda = M - \lambda I$ is injective for every $\lambda$.

**Step 2: $\lambda \notin [0,1]$ is regular.** Let $d = \operatorname{dist}(\lambda,[0,1]) > 0$. The function $x \mapsto (x-\lambda)^{-1}$ is continuous on $[0,1]$ with modulus at most $1/d$, so $(R_\lambda f)(x) = f(x)/(x-\lambda)$ defines a bounded operator on all of $L^2(0,1)$ inverting $M_\lambda$, and
$$
\|R_\lambda\| = \sup_{x\in[0,1]}\frac{1}{|x-\lambda|} = \frac{1}{d} .
$$
(The supremum is attained at the nearest point of $[0,1]$ and is a genuine operator norm because multiplication operators have norm equal to the essential supremum of the multiplier.) For instance at $\lambda = 1.25$, $d = 0.25$ and $\|R_\lambda\| = 4$; the general bound $\|R_\lambda\| \le (|\lambda|-\|M\|)^{-1} = (1.25 - 1)^{-1} = 4$ of part 3 is attained here.

**Step 3: $\lambda \in [0,1)$ lies in the continuous spectrum.** Take $u_n = \sqrt{n}\,\chi_{(\lambda,\lambda+1/n)}$ for $n > (1-\lambda)^{-1}$, a unit vector since $n\cdot(1/n) = 1$. Then
$$
\|M_\lambda u_n\|^2 = n\int_\lambda^{\lambda+1/n}(x-\lambda)^2dx = n\int_0^{1/n}t^2dt = \frac{1}{3n^2} ,
\qquad \|M_\lambda u_n\| = \frac{1}{n\sqrt3} .
$$
At $n = 100$ this is $0.005773503$ while $\|u_n\| = 1$, so no inequality $\|M_\lambda x\| \ge c\|x\|$ with $c > 0$ can hold: $R_\lambda$ is unbounded and (R2) fails. (By part 1 of the self-adjoint statement this *already* proves $\lambda \in \sigma(M)$.) The range is nevertheless dense: every $f \in L^2$ vanishing on a neighbourhood of $\lambda$ is $M_\lambda u$ for $u = f/(x-\lambda) \in L^2$, and such $f$ are dense, since truncating a general $f$ to zero on $(\lambda - \varepsilon, \lambda+\varepsilon)$ changes it by at most $\bigl(\int_{|x-\lambda|<\varepsilon}|f|^2\bigr)^{1/2} \to 0$ by absolute continuity of the integral. So (R3) holds and $\lambda \in \sigma_c(M)$. The endpoint $\lambda = 1$ is handled by the same sequence placed to the left, $u_n = \sqrt n\,\chi_{(1-1/n,1)}$, or simply by closedness of $\sigma(M)$.

**Conclusion.**
$$
\sigma(M) = \sigma_c(M) = [0,1], \qquad \sigma_p(M) = \sigma_r(M) = \varnothing .
$$
This matches part 3 of the self-adjoint statement, which forbids a residual spectrum, and it is the example :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.6, Example 5, p. 329"} use for the same purpose. The lesson for applications is blunt: a perfectly well-behaved self-adjoint operator can have a spectrum with no eigenvectors anywhere in it, so "diagonalise it" must mean something other than "find its eigenvectors". What it means is the subject of :ref[the spectral theorem]{to=funcan.spectral-theorem-general}.
:::

:::example[The right shift: all three parts at once]{provenance=original}
On $H = \ell^2$ with orthonormal basis $(e_j)_{j\ge1}$ let $S$ be the right shift, $S(\xi_1,\xi_2,\dots) = (0,\xi_1,\xi_2,\dots)$. Then $\|Su\| = \|u\|$, so $\|S\| = 1$ and $\sigma(S) \subseteq \{|\lambda| \le 1\}$. Its adjoint is the left shift, $S^*(\xi_1,\xi_2,\dots) = (\xi_2,\xi_3,\dots)$, since $(Su,v) = \sum_j \xi_j\bar\eta_{j+1} = (u,S^*v)$.

**Step 1: $S$ has no eigenvalues.** $Su = \lambda u$ reads $0 = \lambda\xi_1$ and $\xi_j = \lambda\xi_{j+1}$ for $j \ge 1$. If $\lambda = 0$ all $\xi_j$ vanish at once. If $\lambda \ne 0$ then $\xi_1 = 0$, and the recursion propagates $\xi_j = 0$ upwards. So $\sigma_p(S) = \varnothing$ and $S_\lambda$ is injective for every $\lambda$.

**Step 2: the eigenvectors of $S^*$.** $S^*v = \mu v$ reads $\eta_{j+1} = \mu\eta_j$, so $\eta_j = \mu^{\,j-1}\eta_1$, and
$$
\|v\|^2 = |\eta_1|^2\sum_{j\ge0}|\mu|^{2j} = \frac{|\eta_1|^2}{1-|\mu|^2} \quad \text{is finite exactly when } |\mu| < 1 .
$$
So $\sigma_p(S^*) = \{|\mu| < 1\}$, with eigenvector $v_\mu = (1,\mu,\mu^2,\dots)$ of norm $(1-|\mu|^2)^{-1/2}$; at $\mu = 1/2$ this is $2/\sqrt3 = 1.1547005$.

**Step 3: $|\lambda| < 1$ lies in the residual spectrum.** Put $\mu = \bar\lambda$, so $|\mu| < 1$ and $v_\mu \ne 0$ exists by step 2. For every $u$,
$$
(S_\lambda u, v_\mu) = (u, (S^* - \bar\lambda I)v_\mu) = (u, (S^*-\mu I)v_\mu) = 0 ,
$$
so $v_\mu \perp R(S_\lambda)$ and the range is not dense: (R3) fails while (R1) holds by step 1. Hence $\lambda \in \sigma_r(S)$.

**Step 4: $|\lambda| = 1$ lies in the continuous spectrum.** The spectrum is closed by part 2 of the first statement, and it contains the open unit disc by step 3, so it contains the closed disc; in particular the circle. A $\lambda$ on the circle is not in $\sigma_p(S)$ by step 1. Nor is it in $\sigma_r(S)$: a non-zero $v \perp R(S_\lambda)$ would satisfy $(S^* - \bar\lambda I)v = 0$, making $\bar\lambda$ an eigenvalue of $S^*$, which step 2 excludes for $|\lambda| = 1$. So (R1) and (R3) hold, (R2) must fail, and $\lambda \in \sigma_c(S)$.

**The table.**

| | $\sigma$ | $\sigma_p$ | $\sigma_c$ | $\sigma_r$ |
|---|---|---|---|---|
| right shift $S$ | $\lvert\lambda\rvert\le 1$ | $\varnothing$ | $\lvert\lambda\rvert = 1$ | $\lvert\lambda\rvert<1$ |
| left shift $S^*$ | $\lvert\lambda\rvert\le 1$ | $\lvert\lambda\rvert<1$ | $\lvert\lambda\rvert = 1$ | $\varnothing$ |

The second row follows from the first by :cite[Reed and Simon's]{work=reed-simon-1980 loc="Thm VI.7, p. 192"} theorem of Phillips, $\sigma(S^*) = \overline{\sigma(S)}$, together with steps 1 and 2. :cite[Reed and Simon]{work=reed-simon-1980 loc="§VI.3, pp. 192–194"} work the same pair of shifts on a different space — the left shift on $\ell^1$ and its adjoint, the right shift, on $\ell^\infty$ — and their table on p. 194 agrees with our second row but **not** with our first: they put the whole closed disc $|\lambda| \le 1$ in the residual spectrum of the right shift, with no continuous spectrum, proving the circle case separately on pp. 193–194 by exhibiting a ball of radius $1/4$ about the vector $(\lambda^n)_n \in \ell^\infty$ that misses the range of $\lambda I - T'$. Both tables are right; what differs is the space. On $\ell^2$, failure of (R3) at $|\lambda| = 1$ would hand us a non-zero vector orthogonal to $R(S_\lambda)$, hence an eigenvector of $S^*$ on the unit circle, which step 2 forbids. That argument needs the inner product twice over: :ref[the projection theorem]{to=funcan.projection-theorem} turns a non-dense range into an orthogonal vector, and :ref[the Riesz representation theorem]{to=funcan.riesz-representation} turns that vector back into an eigenvector of the Hilbert adjoint. On $\ell^\infty$ neither step is available — the functional that cuts the range off is produced by the Hahn-Banach theorem and need not be given by a sequence — and there the circle is residual after all. So when comparing with their table, compare the spaces first. Three checks: the spectral radius is $1 = \|S\|$, as it must be for an isometry; $\sigma_r(S) \ne \varnothing$ shows $S$ is not self-adjoint, consistent with $SS^* \ne S^*S$; and $\sigma_p(S)$ is empty while $\sigma(S)$ is a full disc, so the spectrum of an infinite-dimensional operator carries far more than its eigenvalues. In finite dimensions a square matrix with no eigenvalues would have empty spectrum, which part 4 of the first statement forbids — there is no contradiction only because $\ell^2$ is infinite-dimensional.
:::

:::application{provenance=original}
**Quantum mechanics.** The spectrum of the Hamiltonian is the set of measurable energies. Its point spectrum gives the bound states, whose eigenfunctions are normalisable; its continuous spectrum gives the scattering states, which are not normalisable and are exactly the reason the multiplication-operator example above matters — the position operator is multiplication by $x$, and it has no eigenvectors in $L^2$, only the "eigenfunctions" $\delta(x-\lambda)$ of :ref[distributions]{to=fourier.distributions}. Self-adjointness is what guarantees real energies and the absence of a residual spectrum, so that the spectrum splits cleanly into the discrete and continuous parts a physicist draws on an energy diagram. See :ref[the mathematical framework of quantum mechanics]{to=funcan.quantum-mechanics-framework}.

**Stability of equilibria and of numerical schemes.** A linear evolution $\dot u = Au$ decays when the spectrum of $A$ sits in the left half-plane, and a time-stepping scheme $u^{n+1} = Bu^n$ can be stable only when $r_\sigma(B) \le 1$ — the von Neumann condition is necessary and not sufficient, as $B = \bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$ shows, with $r_\sigma(B) = 1$ and $B^n = \bigl(\begin{smallmatrix}1&n\\0&1\end{smallmatrix}\bigr)$ growing linearly; what stability asks for is $\sup_n\|B^n\| < \infty$; the Neumann series of part 1 is the same computation that makes a fixed-point iteration converge. The gap between $r_\sigma(B)$ and $\|B\|$ is why a scheme with spectral radius below $1$ can still amplify errors transiently, and why practitioners check $\|B^n\|$ and not only the eigenvalues. See :ref[von Neumann stability analysis]{to=num.von-neumann-stability} and :ref[matrix norms and condition numbers]{to=linalg.matrix-norms-conditioning}.

**Integral equations.** For $u - \lambda K u = f$ the solvable $\lambda$ are those with $1/\lambda \in \rho(K)$, and the Neumann series of part 1 is exactly the iterative solution of :ref[the Neumann series method]{to=green.neumann-series}, convergent when $|\lambda|\,\|K\| < 1$. Which $\lambda$ break this, and what replaces the series there, is the Fredholm alternative of :ref[Hilbert-Schmidt theory]{to=green.hilbert-schmidt}.

**Resonances and the resolvent as a transfer function.** The resolvent $R_\lambda$ is the Green's function of the operator in the spectral parameter, and the statement of :cite[Kreyszig's]{work=kreyszig-1978 loc="Thm 7.5-3, p. 390"} Theorem 7.5-3 — $\|R_\lambda\| \ge 1/\operatorname{dist}(\lambda,\sigma(T))$ — is the precise form of the engineer's rule that the response of a linear system blows up as the driving frequency approaches a resonance. Analyticity of $\lambda \mapsto R_\lambda$ on $\rho(T)$ is what licenses the contour-integral manipulations of :ref[residues]{to=complex.residue-theorem} in scattering theory and in semigroup theory (:ref[operator semigroups]{to=pde.operator-semigroups}).

**Boundary value problems.** For a Sturm-Liouville problem the spectrum is the set of $\lambda$ for which the boundary value problem fails to be uniquely solvable, and the eigenvalues are the frequencies of the modes; the resolvent is the Green's function. See :ref[Sturm-Liouville eigenvalue problems]{to=ode.sturm-liouville-theory} and :ref[Green's functions for boundary value problems]{to=green.green-function-bvp}.
:::
