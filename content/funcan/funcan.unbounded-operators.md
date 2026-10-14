---
id: funcan.unbounded-operators
title: Unbounded and closed operators
kind: definition
level: advanced
summary: "Sets up the bookkeeping that unbounded operators force on us: an operator is a linear map on a dense domain, its graph decides whether it is closed or closable, its adjoint exists only because the domain is dense, and the adjoint determines the closure; the two running examples are multiplication by $x$ and $-i\\,d/dx$."
prereqs: [funcan.adjoint-operators, funcan.bounded-operators, funcan.hilbert-spaces, funcan.projection-theorem, funcan.riesz-representation, funcan.uniform-boundedness-open-mapping, measure.lp-spaces]
provenance: adapted
sources:
  - work: reed-simon-1980
    loc: "§VIII.1, pp. 249–254: the opening remark that the Hellinger-Toeplitz theorem forces an everywhere-defined symmetric operator to be bounded, and hence that an unbounded operator is given on a dense linear subset; Example 1 (the position operator on $L^2(\\mathbb{R})$ with the largest domain for which the range is in $L^2$) and Example 2 (the harmonic-oscillator operator, unbounded because its Hermite eigenvalues $2n+1$ are unbounded); von Neumann's graph $\\Gamma(T) \\subseteq \\mathcal{H}\\times\\mathcal{H}$ with the inner product of the product space; the definitions of closed operator, of extension $T_1 \\supseteq T$, of closable operator and of the closure, with the warning that the closure of a graph need not be a graph; the Proposition $\\Gamma(\\bar T) = \\overline{\\Gamma(T)}$; Example 3 ($i\\,d/dx$ on $C_0^\\infty$ versus $C_0^1$, with the mollifier argument); the definition of the adjoint of a densely defined operator and the remark that $\\varphi \\in D(T^*)$ exactly when $|(T\\psi,\\varphi)| \\le C\\|\\psi\\|$; the note that $S \\subseteq T$ implies $T^* \\subseteq S^*$; Example 4, an operator whose adjoint has a non-dense domain; Thm VIII.1 (a) $T^*$ is closed, (b) $T$ is closable iff $D(T^*)$ is dense and then $\\bar T = T^{**}$, (c) $(\\bar T)^* = T^*$, with the proof via the unitary $V\\langle\\varphi,\\psi\\rangle = \\langle-\\psi,\\varphi\\rangle$ and $\\Gamma(T^*) = V[\\Gamma(T)]^\\perp$; Example 5 (the same formal operator $i\\,d/dx$ on $AC[0,1]$ and on $\\{\\varphi \\in AC[0,1] : \\varphi(0)=0\\}$ has spectrum $\\mathbb{C}$ in one case and empty spectrum in the other, pp. 254–255); and, from §VIII.2, p. 256, the definition of a **core**: a subset $D \\subseteq D(T)$ of the domain of a closed $T$ with $\\overline{T|_{D}} = T$"
    pages: "249-256"
    role: the whole framework — domain, graph, closed, closable, closure, adjoint — with the graph proof of the three parts of Thm VIII.1; the example of a non-densely-defined adjoint; the position operator; the definition of a core; the warning that the spectrum depends on the domain
  - work: kreyszig-1978
    loc: "Ch. 10, pp. 523–545: the chapter orientation (an unbounded $T$ satisfying $(Tx,y)=(x,Ty)$ cannot be defined on all of $H$); Thm 10.1-1 (Hellinger-Toeplitz) with its proof from the uniform boundedness theorem; the argument on p. 527 that $T^*y$ is unique precisely when $D(T)$ is dense, and Def. 10.1-2 of the Hilbert-adjoint of a densely defined operator; the definitions of $S+T$ and $TS$ with their domains, pp. 528–529; Thm 10.2-1 ($S \\subseteq T$ implies $T^* \\subseteq S^*$; $T \\subseteq T^{**}$ when $D(T^*)$ is dense); Def. 10.3-1 (closed operator via the graph), Thm 10.3-2 (the sequence criterion; a closed operator with closed domain is bounded; a bounded operator is closed iff its domain is closed), Thm 10.3-3 ($T^*$ is closed, proved directly from the continuity of the inner product), Def. 10.3-4 (closable operator and closure), Problem 7 of §10.3, p. 541 (the graph of $T^*$ as $[U(\\mathcal{G}(T))]^\\perp$). §10.7, pp. 562–569: the multiplication operator $x \\mapsto tx$ on $L^2(-\\infty,\\infty)$ with domain $\\{x : tx \\in L^2\\}$, Lemma 10.7-1 (it is unbounded, via indicator functions of $[n,n+1]$), Thm 10.7-2 (it is self-adjoint, with the full proof), the remark that multiplication by $t$ on a compact interval is bounded and everywhere defined; the differentiation operator $D x = i x'$ with domain the locally absolutely continuous $x$ with $x' \\in L^2$, Lemma 10.7-4 (unbounded, via the functions $1-nt$ on $[0,1/n]$) and Thm 10.7-5 (self-adjoint, quoted without proof)"
    pages: "523-545, 562-569"
    role: the Hellinger-Toeplitz theorem with proof; the uniqueness argument that makes density of the domain the right hypothesis for the adjoint; the definitions of sum and product of unbounded operators; the closedness of the adjoint proved without graphs; the two concrete operators, their domains, and the proofs that they are unbounded
  - work: stakgold-holst-2011
    loc: "§5.2, pp. 307–310: the three ways out of the difficulty that differential operators are unbounded; the definition of an extension; the null-sequence definition of a closable operator and the construction of the closure by adjoining limits of sequences $u_n \\to u$ with $Au_n \\to f$; the proof that $d/dx$ on $C^1[0,1]$ is closable, by integrating by parts against test functions; the definition of a closed operator; Remarks 1-5, in particular that a closed operator on a closed domain is bounded and that the graph characterisation is where the name comes from; the identification of the domain of the closure of $d/dx$ as the absolutely continuous functions with derivative in $L^2$, via $u(x) = \\int_0^x v + u(0)$. §5.3, pp. 311–315: Thms 5.3.1-5.3.5 (existence of an inverse, bounded inverse iff bounded away from zero, closed operator on a closed domain is bounded, the inverse of a closed operator is closed, closed range iff bounded inverse) and Example 1(a)-(d), the differentiation operator under four different boundary conditions, with the principle that conditions on derivatives of order below the order of the operator survive closure while higher-order ones do not. §5.4, pp. 316–320: the adjoint of a bounded operator from the Riesz representation; admissible pairs $(v,g)$ and the construction of the adjoint of a densely defined closed operator; the properties $(\\alpha A)^* = \\bar\\alpha A^*$, $(A+\\alpha I)^* = A^* + \\bar\\alpha I$, $A^{**}=A$, and that $A$ and its closure have the same adjoint; the heuristic and the precise integration-by-parts calculation of the adjoint of $d/dx$ with $u(0)=0$, and Examples 2 and 3 for the boundary conditions $u(0)=au(1)$ and $u(0)=u(1)=0$"
    pages: "307-320"
    role: the null-sequence picture of closability and the concrete construction of the closure; the fate of boundary conditions under closure; the integration-by-parts recipe for the adjoint of a differential operator, in both its heuristic and its precise form; the worked adjoints with boundary conditions
  - work: hassani-2013
    loc: "§19.1, pp. 563–564: Def. 19.1.1 (a linear operator *in* $H$ is a map from a linear manifold $D \\subseteq H$, the domain, into $H$) and the footnote distinguishing an operator in $H$ from an operator on $H$; Example 19.1.2 (the derivative operator on $L^2(a,b)$ cannot have the whole space as domain, but is defined on the dense manifold spanned by the exponentials $e^{i2n\\pi x/L}$); Def. 19.1.3 (closed operator, in sequence form); Thm 19.1.4 (a closed operator defined at every point of $H$ is bounded), quoted from another source; Def. 19.1.5 (hermitian means $T^\\dagger$ extends $T$; self-adjoint means the domains agree) with the footnote warning that the two words are used interchangeably later in the book"
    pages: "563-564"
    role: the terminology *operator in* a Hilbert space and the Fourier-series example of a dense domain for $d/dx$; the sequence form of closedness; the physicists' convention that hermitian and self-adjoint are not distinguished
  - work: evans-2010
    loc: "§D.1, p. 674 (norms, completeness, Banach spaces) and §D.3, pp. 676–678: bounded linear operators between Banach spaces, the operator norm and the remark that a bounded operator is continuous; the sequence form of the definition of a closed operator; Thm 1 of §D.3, the closed graph theorem, stated as: an everywhere-defined closed linear operator between Banach spaces is bounded"
    pages: "674, 676-678"
    role: the Banach-space statement of the closed graph theorem that stands behind the fact that a closed operator with closed domain is bounded
---

:::definition[Operators in a Hilbert space: domain, graph, extension]{provenance=adapted src="reed-simon-1980:§VIII.1, pp. 249–250; kreyszig-1978:§10.1, pp. 524–526, and Def. 10.3-1, pp. 535–536; hassani-2013:Def. 19.1.1 and its footnotes, p. 563"}
Let $H$ be a complex Hilbert space. An **operator in $H$** is a linear map
$$
T : D(T) \longrightarrow H
$$
defined on a linear subspace $D(T) \subseteq H$, the **domain** of $T$. Following :cite[Kreyszig]{work=kreyszig-1978 loc="§10.1, p. 527"} and :cite[Hassani]{work=hassani-2013 loc="Def. 19.1.1 and footnote 2, p. 563"} we say *in* $H$ when $D(T)$ may be a proper subspace and *on* $H$ when $D(T) = H$. The domain is part of the data: two different domains carrying the same formula are two different operators, and almost every question below has a different answer for each of them.

Unless we say otherwise, $D(T)$ is assumed **dense** in $H$; the reason is given in the adjoint definition below.

$T$ is **unbounded** if there is no constant $c$ with $\|T\psi\| \le c\|\psi\|$ for all $\psi \in D(T)$; equivalently, if the quotients $\|T\psi\|/\|\psi\|$ are not bounded above on $D(T)\setminus\{0\}$.

**Extension.** For operators $S, T$ in $H$ we write $S \subseteq T$, and call $T$ an **extension** of $S$, when $D(S) \subseteq D(T)$ and $T\psi = S\psi$ for every $\psi \in D(S)$.

**Graph.** Von Neumann's device for handling all of this at once is the **graph**
$$
\Gamma(T) = \bigl\{\, \langle \psi, T\psi\rangle : \psi \in D(T) \,\bigr\} \subseteq H \times H ,
$$
where $H \times H$ is a Hilbert space under
$$
\bigl(\langle \varphi_1,\psi_1\rangle, \langle \varphi_2,\psi_2\rangle\bigr) = (\varphi_1,\varphi_2) + (\psi_1,\psi_2) .
$$
Then $S \subseteq T$ says exactly $\Gamma(S) \subseteq \Gamma(T)$, and a subspace $\Gamma \subseteq H\times H$ is the graph of an operator precisely when $\langle 0, \psi\rangle \in \Gamma$ forces $\psi = 0$, that is, when it is single-valued.

**Sums and products.** Following :cite[Kreyszig]{work=kreyszig-1978 loc="§10.1, pp. 528–529"}, $S+T$ has domain $D(S)\cap D(T)$ and $TS$ has domain $\{\psi \in D(S) : S\psi \in D(T)\}$, the largest sets on which the formulas make sense. These domains can be small, and in extreme cases trivial.
:::

:::definition[Closed, closable, closure]{provenance=adapted src="reed-simon-1980:§VIII.1, p. 250, and the definition of a core, §VIII.2, p. 256; kreyszig-1978:Def. 10.3-1, Thm 10.3-2(a) and (c), and Def. 10.3-4, pp. 535–537; stakgold-holst-2011:§5.2, pp. 308–309, Remark 2, p. 309; hassani-2013:Def. 19.1.3, p. 564"}
$T$ is **closed** if $\Gamma(T)$ is a closed subset of $H\times H$. Spelled out in sequences, which is the form one checks in practice:

> whenever $\psi_n \in D(T)$, $\psi_n \to \psi$ and $T\psi_n \to \chi$, it follows that $\psi \in D(T)$ and $T\psi = \chi$.

Closedness is a *different* condition from continuity, not a weaker one. Continuity would make $T\psi_n$ converge whenever $\psi_n$ does, but it says nothing about where the limit $\psi$ lives; closedness says only that *if* both limits exist, then $\psi$ is back in the domain and the two limits are related correctly. Neither implies the other: the identity restricted to a dense proper subspace $D \subsetneq H$ is bounded, and $T\psi_n$ converges whenever $\psi_n$ does, yet it is not closed, because any $\psi \in H \setminus D$ is the limit of a sequence in $D$ and is not in the domain. The two conditions meet exactly when the domain is closed: :cite[Kreyszig's Thm 10.3-2(c)]{work=kreyszig-1978 loc="Thm 10.3-2(c), p. 536"} says that a bounded operator is closed exactly when its domain $D(T)$ is a closed subspace, and :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.2, Remark 2, p. 309"} record the half of this we use most: a bounded operator defined on a closed set is closed.

$T$ is **closable** if it has at least one closed extension. Whenever there is one there is a smallest one — that is part of the theorem proved below — and it is the **closure** $\bar{T}$, characterised by
$$
\Gamma(\bar{T}) = \overline{\Gamma(T)} .
$$
The subtlety, which is why "closable" is not automatic, is that $\overline{\Gamma(T)}$ is always a closed subspace but need not be a graph: it may contain a pair $\langle 0, \chi\rangle$ with $\chi \ne 0$. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.2, p. 308"} phrase the condition in exactly those terms: $A$ is closable when, for every **null sequence** $u_n \to 0$ in $D(A)$, the image sequence $Au_n$ either tends to $0$ or has no limit at all. Their construction of the closure is the direct one: adjoin to the domain every $u$ that is a limit of some $u_n \in D(A)$ for which $Au_n$ also converges, and let $\bar{A}u$ be that second limit.

If $T$ is closed, a subspace $D \subseteq D(T)$ is a **core** for $T$ when $\overline{T|_{D}} = T$: the operator is already determined by its values on $D$.
:::

:::definition[The adjoint of a densely defined operator]{provenance=adapted src="kreyszig-1978:p. 527 and Def. 10.1-2, pp. 527–528; reed-simon-1980:§VIII.1, p. 252; stakgold-holst-2011:§5.4, p. 317"}
Let $T$ be densely defined in $H$. Put
$$
D(T^{*}) = \bigl\{\, \varphi \in H : \text{there is } \eta \in H \text{ with } (T\psi, \varphi) = (\psi, \eta) \text{ for all } \psi \in D(T) \,\bigr\} ,
$$
and for such $\varphi$ set $T^{*}\varphi = \eta$. The map $T^{*}$ is the **adjoint** of $T$.

Two remarks make the definition work.

- **Density is exactly what makes $\eta$ unique.** If $\eta_1$ and $\eta_2$ both serve, then $(\psi, \eta_1 - \eta_2) = 0$ for every $\psi \in D(T)$, so $\eta_1 - \eta_2 \in D(T)^{\perp} = \{0\}$ by :ref[]{to=funcan.projection-theorem}. Conversely, if $D(T)$ were not dense, any non-zero $\eta_0 \perp D(T)$ could be added to $\eta$, and $T^{*}$ would not be a map at all. :cite[Kreyszig]{work=kreyszig-1978 loc="§10.1, p. 527"} gives precisely this two-sided argument.
- **A boundedness test for membership.** $\varphi \in D(T^{*})$ if and only if $|(T\psi,\varphi)| \le C\|\psi\|$ for all $\psi \in D(T)$, with $C$ depending on $\varphi$. The bound makes $\psi \mapsto (T\psi,\varphi)$ a bounded linear functional on $D(T)$; being uniformly continuous there, it extends uniquely to a bounded linear functional on all of $H$, because $D(T)$ is dense, and the Riesz representation (:ref[]{to=funcan.riesz-representation}) applied to the extension produces $\eta$ with $(T\psi,\varphi) = (\psi,\eta)$ on $D(T)$. Conversely the representation gives the bound back, with $C = \|\eta\|$. This is :cite[Reed and Simon's]{work=reed-simon-1980 loc="§VIII.1, p. 252"} formulation.

For bounded everywhere-defined operators this reduces to the Hilbert adjoint of :ref[]{to=funcan.adjoint-operators}, with $D(T^{*}) = H$. In the unbounded case $D(T^{*})$ must be computed, and reversing an inclusion is the first thing it does:
$$
S \subseteq T \quad\Longrightarrow\quad T^{*} \subseteq S^{*} ,
$$
because the defining condition for $\varphi \in D(T^*)$ is a requirement over the larger set $D(T)$. The algebra also picks up conjugates, as :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="eq. (5.4.10), p. 317"} record: $(\alpha A)^{*} = \bar\alpha A^{*}$ and $(A + \alpha I)^{*} = A^{*} + \bar\alpha I$, both on the domain $D(A^{*})$.
:::

:::statement[Hellinger-Toeplitz: why unbounded operators need small domains]{provenance=adapted src="kreyszig-1978:Thm 10.1-1, p. 525; reed-simon-1980:§VIII.1, p. 249; hassani-2013:Thm 19.1.4, p. 564"}
Let $T$ be a linear operator defined on **all** of a complex Hilbert space $H$ with
$$
(T\varphi, \psi) = (\varphi, T\psi) \qquad \text{for all } \varphi, \psi \in H .
$$
Then $T$ is bounded.

Equivalently: an unbounded operator obeying that identity cannot be defined everywhere. :cite[Hassani]{work=hassani-2013 loc="Thm 19.1.4, p. 564"} records the companion statement, which he quotes from another source: a **closed** operator defined at every point of $H$ is bounded. The same conclusion is in :cite[Kreyszig's Thm 10.3-2(b)]{work=kreyszig-1978 loc="Thm 10.3-2(b), p. 536"} and :cite[Stakgold and Holst's Thm 5.3.3]{work=stakgold-holst-2011 loc="Thm 5.3.3, p. 313"} in the sharper form: a closed operator whose domain is a closed subspace is bounded.
:::

:::statement[The adjoint controls closability]{provenance=adapted src="reed-simon-1980:Thm VIII.1, pp. 252–253; kreyszig-1978:Thm 10.3-3, p. 536, and §10.3, Problems 7–8, p. 541; stakgold-holst-2011:Properties of the Adjoint 1–2, p. 318"}
Let $T$ be densely defined in $H$. Then:

**(a)** $T^{*}$ is closed, whether or not $T$ is.

**(b)** $T$ has a closed extension precisely when the domain of $T^{*}$ is dense, and in that case $\bar{T} = T^{**}$.

**(c)** If $T$ is closable then $(\bar{T})^{*} = T^{*}$.

:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Properties of the Adjoint 1–2, p. 318"} state (a) only for a *closed* densely defined $A$ — p. 317 announces a standing restriction to closed operators on dense domains — together with $A^{**} = A$ for such an $A$, which is (b) specialised to a closed operator; their Property 2 is (c), stated for any closable $A$. Our (a) assumes nothing beyond density of $D(T)$, and in that generality it is :cite[Reed and Simon's Thm VIII.1(a)]{work=reed-simon-1980 loc="Thm VIII.1(a), p. 253"} and :cite[Kreyszig's Thm 10.3-3]{work=kreyszig-1978 loc="Thm 10.3-3, p. 536"}, which Kreyszig states for a densely defined $T$ whether or not $T$ is closed. Stakgold and Holst draw the practical conclusion: to find the closure of a closable operator, compute $A^{**}$.
:::

:::idea{provenance=original}
Three facts drive everything in this unit, and all three are statements about *graphs*.

First, the adjoint is a graph construction in disguise. The condition $(T\psi,\varphi) = (\psi,\eta)$ says that $\langle\varphi,\eta\rangle$ is orthogonal in $H\times H$ to $\langle -T\psi, \psi\rangle$. So if $V$ is the rotation $V\langle\varphi,\psi\rangle = \langle -\psi,\varphi\rangle$ of the product space, the graph of $T^{*}$ is $V[\Gamma(T)]^{\perp}$. An orthogonal complement is always closed, which gives (a) at once and with no analysis.

Second, applying the construction twice brings you back to the closure. Because $V$ is unitary and $V^{2} = -I$, two applications of "rotate and take the complement" amount to taking the closure of the original subspace. That is (b), once one knows that the resulting closed subspace is single-valued, which is precisely the condition that $D(T^{*})$ be dense.

Third, closedness is not continuity but is what survives of it. A bounded operator defined on a closed subspace is closed, and conversely a closed operator defined on a closed subspace is bounded — that is the closed graph theorem of :ref[]{to=funcan.uniform-boundedness-open-mapping}. So for an unbounded operator, "closed" and "defined everywhere" are mutually exclusive, and since we want closedness (it is what makes limits behave), the domain must be a proper, non-closed, dense subspace. That is the whole reason for the bookkeeping.
:::

:::proof[Hellinger-Toeplitz]{provenance=adapted src="kreyszig-1978:Thm 10.1-1, pp. 525–526"}
Suppose $T$ is defined on all of $H$, satisfies $(T\varphi,\psi) = (\varphi,T\psi)$, and is unbounded. Then there are unit vectors $\psi_{n}$ with $\|T\psi_{n}\| \to \infty$.

**Step 1: a family of bounded functionals.** For each $n$ define $f_{n} : H \to \mathbb{C}$ by
$$
f_{n}(\varphi) = (\varphi, T\psi_{n}) = (T\varphi, \psi_{n}) ,
$$
the second expression by the hypothesis. Each $f_{n}$ is linear and defined on all of $H$. From the first expression and Cauchy-Schwarz, $|f_{n}(\varphi)| \le \|T\psi_{n}\|\,\|\varphi\|$, so each $f_{n}$ is bounded (with a constant that may be huge).

**Step 2: pointwise boundedness.** From the *second* expression and Cauchy-Schwarz, for each fixed $\varphi$,
$$
|f_{n}(\varphi)| = |(T\varphi,\psi_{n})| \le \|T\varphi\| \,\|\psi_{n}\| = \|T\varphi\| ,
$$
a bound independent of $n$. This is the step that uses the symmetry hypothesis: without it there would be no way to move $T$ off $\psi_n$.

**Step 3: uniform boundedness.** $H$ is complete, so by the uniform boundedness theorem (:ref[]{to=funcan.uniform-boundedness-open-mapping}) the family $\{\|f_{n}\|\}$ is bounded, say $\|f_{n}\| \le k$ for all $n$.

**Step 4: the contradiction.** Apply this to $\varphi = T\psi_{n}$:
$$
\|T\psi_{n}\|^{2} = (T\psi_{n}, T\psi_{n}) = f_{n}(T\psi_{n}) \le k\,\|T\psi_{n}\| ,
$$
so $\|T\psi_{n}\| \le k$ for every $n$, contradicting $\|T\psi_{n}\| \to \infty$. Hence $T$ is bounded. $\square$
:::

:::proof[The adjoint controls closability]{provenance=adapted src="reed-simon-1980:Thm VIII.1 and its proof, pp. 252–253; kreyszig-1978:§10.3, Problem 7, p. 541"}
Define $V : H\times H \to H \times H$ by $V\langle \varphi,\psi\rangle = \langle -\psi, \varphi\rangle$. It is linear, preserves the product inner product, and is onto, hence unitary; and $V^{2} = -I$, so $V[E]^{\perp} = V[E^{\perp}]$ for every subspace $E$, and $V[E]$ is closed whenever $E$ is.

**Step 1: identify the graph of the adjoint.** For $\varphi,\eta \in H$,
$$
\langle\varphi,\eta\rangle \perp V[\Gamma(T)]
\iff
\bigl(\langle\varphi,\eta\rangle, \langle -T\psi, \psi\rangle\bigr) = 0 \ \ \text{for all } \psi \in D(T)
\iff
-(\varphi, T\psi) + (\eta,\psi) = 0 \ \ \text{for all } \psi \in D(T) .
$$
Taking complex conjugates, the last condition is $(T\psi,\varphi) = (\psi,\eta)$ for all $\psi \in D(T)$, which is exactly the statement that $\varphi \in D(T^{*})$ with $T^{*}\varphi = \eta$. Hence
$$
\Gamma(T^{*}) = V[\Gamma(T)]^{\perp} .
$$

**Step 2: part (a).** An orthogonal complement is a closed subspace, so $\Gamma(T^{*})$ is closed, that is, $T^{*}$ is a closed operator. (It is single-valued by the density argument in the definition.)

**Step 3: a formula for the closure of the graph.** Apply Step 1 to get $\Gamma(T^{*}) = V[\Gamma(T)]^{\perp}$, then push $V$ through the complement and use $V^{2} = -I$ together with $-E = E$ for a subspace $E$:
$$
V[\Gamma(T^{*})] = V\bigl[\,V[\Gamma(T)]^{\perp}\,\bigr] = \bigl(V[V[\Gamma(T)]]\bigr)^{\perp} = \bigl(V^{2}[\Gamma(T)]\bigr)^{\perp} = \Gamma(T)^{\perp} .
$$
Taking complements once more and using $E^{\perp\perp} = \overline{E}$,
$$
V[\Gamma(T^{*})]^{\perp} = \Gamma(T)^{\perp\perp} = \overline{\Gamma(T)} .
$$
This holds whether or not $D(T^{*})$ is dense: $\Gamma(T^{*})$ is a subspace of $H \times H$ in any case.

**Step 4: part (b), the easy direction.** Suppose $D(T^{*})$ is dense. Then $T^{**}$ is defined, and Step 1 applied to $T^{*}$ in place of $T$ gives $\Gamma(T^{**}) = V[\Gamma(T^{*})]^{\perp}$, which by Step 3 is $\overline{\Gamma(T)}$. So the closure of the graph *is* a graph, and $T^{**}$ is a closed extension of $T$. Any closed extension $S \supseteq T$ has $\Gamma(S) \supseteq \overline{\Gamma(T)} = \Gamma(T^{**})$, because $\Gamma(S)$ is closed and contains $\Gamma(T)$; hence $S \supseteq T^{**}$. So $T^{**}$ is the smallest closed extension: $T$ is closable and $\bar{T} = T^{**}$.

**Step 5: part (b), the converse.** Suppose $D(T^{*})$ is not dense, and pick $\chi \ne 0$ with $\chi \perp D(T^{*})$. A typical element of $V[\Gamma(T^{*})]$ is $V\langle\varphi, T^{*}\varphi\rangle = \langle -T^{*}\varphi, \varphi\rangle$ with $\varphi \in D(T^{*})$, and
$$
\bigl(\langle 0,\chi\rangle,\ \langle -T^{*}\varphi,\varphi\rangle\bigr) = (0, -T^{*}\varphi) + (\chi,\varphi) = (\chi,\varphi) = 0
$$
because $\chi \perp D(T^{*})$. So $\langle 0,\chi\rangle \in V[\Gamma(T^{*})]^{\perp}$, which by Step 3 is $\overline{\Gamma(T)}$. Any closed extension of $T$ would have a graph containing $\overline{\Gamma(T)}$ and hence the pair $\langle 0,\chi\rangle$ with $\chi \ne 0$, which no graph of a map can contain. So $T$ has no closed extension: it is not closable.

**Step 6: part (c).** Let $T$ be closable, so $D(T^{*})$ is dense and $\bar{T} = T^{**}$ by (b). Then
$$
(\bar{T})^{*} = (T^{**})^{*} = (T^{*})^{**} .
$$
Now apply (b) to the operator $T^{*}$: it is densely defined, and its own adjoint $T^{**} = \bar{T}$ has domain containing the dense set $D(T)$, so $T^{*}$ is closable with closure $(T^{*})^{**}$. But $T^{*}$ is already closed by (a), so its closure is itself: $(T^{*})^{**} = T^{*}$. Hence $(\bar{T})^{*} = T^{*}$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="reed-simon-1980:Example 4, p. 252, and Example 5, pp. 254–255; stakgold-holst-2011:§5.3, Example 1(a)–(d), pp. 314–315; kreyszig-1978:Thm 10.3-2(b), p. 536; evans-2010:Thm 1 of §D.3, p. 677"}
- **Density of $D(T)$** is used first of all to define $T^{*}$: drop it and $T^{*}$ is a relation, not an operator. It is then used once more, in Step 6 of the second proof, where part (b) is applied to $T^{*}$ and one needs $D(T^{**}) \supseteq D(T)$ to be dense.
- **Density of $D(T^{*})$** is the hypothesis in part (b), and it genuinely fails for some operators. :cite[Reed and Simon's Example 4]{work=reed-simon-1980 loc="Example 4, p. 252"} takes a bounded measurable $f \notin L^{2}(\mathbb{R})$, fixes $\psi_{0} \in L^{2}$, and defines a rank-one operator by pairing $\psi$ against $f$ and scaling $\psi_{0}$ by the result, on the dense domain $D(T) = \{\psi : f\psi \in L^{1}\}$, which contains every $L^{2}$ function of compact support. Their inner product is linear in its *second* slot, ours in the first (see the style guide), so in our convention the operator is
$$
T\psi = (\psi, f)\,\psi_{0}, \qquad \psi \in D(T) ,
$$
and the domain is exactly the set on which $(\psi,f) = \int \psi\bar f$ converges absolutely. Then $(T\psi,\varphi) = (\psi,f)\,(\psi_{0},\varphi) = \bigl(\psi,\ \overline{(\psi_{0},\varphi)}\,f\bigr)$, so
$$
T^{*}\varphi = (\varphi, \psi_{0})\,f ,
$$
and since $f \notin L^{2}$ this lies in $L^{2}$ only when the scalar $(\varphi,\psi_{0})$ vanishes. So $D(T^{*}) = \{\psi_{0}\}^{\perp}$, and for a non-zero $\psi_{0}$ — which is what the conclusion needs, since $\psi_{0} = 0$ would make $T$ the zero operator and $\{\psi_0\}^\perp = H$ — this is a closed hyperplane and so not dense, $T^{*}$ is the zero operator on that domain, and $T$ is not closable. Reed and Simon remark that one can even arrange $D(T^{*}) = \{0\}$.
- **Symmetry in Hellinger-Toeplitz** is used only in Step 2 of its proof, and it is essential: an everywhere-defined unbounded linear operator on $H$ exists (build one on a Hamel basis), it simply cannot satisfy $(T\varphi,\psi) = (\varphi,T\psi)$.
- **Closed is not the same as closed domain.** A closed operator with a *closed* domain is bounded (:cite[Kreyszig Thm 10.3-2(b)]{work=kreyszig-1978 loc="Thm 10.3-2(b), p. 536"}; the everywhere-defined case is the closed graph theorem as :cite[Evans]{work=evans-2010 loc="Thm 1 of §D.3, p. 677"} states it), so an unbounded closed operator must have a domain that is dense and not closed. This is why one never gets to work on a Banach space of nice functions and be done.
- **The domain decides the answer, not the formula.** Two warnings from the library. :cite[Reed and Simon's Example 5]{work=reed-simon-1980 loc="Example 5, pp. 254–255"} puts $i\,d/dx$ on $L^{2}[0,1]$ with two domains, the absolutely continuous functions with $L^2$ derivative, and the same with $\varphi(0)=0$; both operators are closed and densely defined, the spectrum of the first is all of $\mathbb{C}$ and the spectrum of the second is empty. (For the vocabulary see :ref[]{to=funcan.spectrum}.) And :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.3, Example 1(a)–(d) and the principle stated after it, pp. 314–315"} show that boundary conditions do not all survive closure: for a differential operator of order $n$, conditions involving derivatives of order below $n$ survive, while conditions on derivatives of order $n$ or higher are lost, so that imposing $u'(0)=0$ on $d/dx$ gives an operator whose closure is the one with no boundary condition at all.
- **A closed operator need not be closable-to-anything-useful.** Closability is about the *existence* of a closed extension, not about self-adjointness; which closed extensions are self-adjoint is a separate question, taken up in :ref[]{to=funcan.symmetric-self-adjoint}.
:::

:::method[Computing the adjoint of a differential operator]{provenance=adapted src="stakgold-holst-2011:§5.4, the Heuristic Method and the Precise Method, pp. 318–319"}
:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.4, pp. 318–319"} give two versions of the same calculation, a quick one and a rigorous one. As a recipe:

1. **Write the defining identity.** You are looking for all pairs $(v, g)$ — Stakgold and Holst call them *admissible pairs* — with
   $$
   (Tu, v) = (u, g) \qquad \text{for every } u \in D(T) .
   $$
   Every such $v$ lies in $D(T^{*})$, with $T^{*}v = g$.
2. **Integrate by parts, keeping the boundary terms.** For $T$ of order $n$ this produces
   $$
   (Tu,v) = (u, T^{\dagger}v) + \bigl[\text{boundary form in } u,\dots,u^{(n-1)},\, \bar v,\dots,\bar v^{(n-1)}\bigr] ,
   $$
   where $T^{\dagger}$ is the formal adjoint of :ref[]{to=ode.self-adjoint-operators}. At this stage one is assuming $v$ smooth enough; that is the heuristic step.
3. **Kill the interior term first.** Restrict to those $u \in D(T)$ that vanish near both endpoints. The boundary form vanishes for them, so $(u, g - T^{\dagger}v) = 0$ on a dense set, giving $g = T^{\dagger}v$. The formal adjoint is therefore forced: the formula for $T^{*}$ is $T^{\dagger}$, whatever the boundary conditions are.
4. **Read the adjoint boundary conditions off the boundary form.** Now let $u$ range over all of $D(T)$. The surviving requirement is that the boundary form vanish for every such $u$; imposing the boundary conditions that define $D(T)$ and demanding the result vanish for all remaining free boundary values of $u$ yields the conditions defining $D(T^{*})$.
5. **Confirm with no smoothness assumed.** The precise version avoids assuming $v$ differentiable: integrate by parts on the *other* side instead, writing $G(x) = -\int_{x}^{b} g$, and deduce $v + G = 0$ by testing with a $u$ built from $v + G$ itself. Then $v$ is absolutely continuous because it equals an indefinite integral, and the regularity is a conclusion rather than an assumption.
6. **Count the conditions.** Imposing *more* conditions on $D(T)$ makes $D(T)$ smaller, hence $D(T^{*})$ larger: the number of adjoint boundary conditions goes down as the number of direct ones goes up. The operator is a candidate for self-adjointness only when the two counts balance.
:::

:::example[Multiplication by $x$, and $d/dx$ with one boundary condition]{provenance=adapted src="reed-simon-1980:Example 1, pp. 249–250; kreyszig-1978:Lemma 10.7-1 and §10.7, eq. (3), pp. 563–564; stakgold-holst-2011:§5.4, Example 1 and eq. (5.4.13), pp. 318–319"}
**(i) The position operator is unbounded.** On $H = L^{2}(\mathbb{R})$ let
$$
D(X) = \Bigl\{\, \psi \in L^{2}(\mathbb{R}) : \int_{\mathbb{R}} x^{2}|\psi(x)|^{2}\,dx < \infty \,\Bigr\}, \qquad (X\psi)(x) = x\,\psi(x) ,
$$
the largest domain on which the formula lands back in $L^{2}$, as in :cite[Reed and Simon's Example 1]{work=reed-simon-1980 loc="Example 1, p. 249"}. For $n \in \mathbb{N}$ take $\psi_{n} = \mathbf{1}_{[n,n+1]}$. Then $\|\psi_{n}\|^{2} = 1$ and
$$
\|X\psi_{n}\|^{2} = \int_{n}^{n+1} x^{2}\,dx = \frac{(n+1)^{3}-n^{3}}{3} = n^{2}+n+\frac{1}{3} .
$$
For $n = 5$ this is $25+5+\tfrac13 = \tfrac{91}{3}$, so $\|X\psi_{5}\|/\|\psi_{5}\| = \sqrt{91/3} \approx 5.5076$; as $n$ grows the ratio exceeds $n$, so $X$ is unbounded. (:cite[Kreyszig's Lemma 10.7-1]{work=kreyszig-1978 loc="Lemma 10.7-1, p. 563"} runs the same argument with the cruder bound $\|T x_n\| > n$.) Note where the unboundedness comes from: the interval is infinite. On $L^{2}[a,b]$ multiplication by $x$ is bounded with norm at most $\max(|a|,|b|)$ and is defined on the whole space, as :cite[Kreyszig]{work=kreyszig-1978 loc="§10.7, eq. (3), p. 564"} points out.

**(ii) A differentiation operator and its adjoint, computed by the recipe.** On $H = L^{2}(0,1)$ put
$$
D(T) = \{\, u \in AC[0,1] : u' \in L^{2}(0,1),\ u(0)=0 \,\}, \qquad Tu = u' .
$$
Step 2 of the method gives, for $u \in D(T)$ and $v$ absolutely continuous,
$$
(Tu, v) = \int_{0}^{1} u'\bar v \,dx = \bigl[u\bar v\bigr]_{0}^{1} - \int_{0}^{1} u\,\bar{v}'\,dx = u(1)\overline{v(1)} + (u, -v') ,
$$
where $u(0)=0$ removed the lower endpoint. Step 3: for $u$ supported away from the endpoints the boundary term is absent, so $T^{*}v = -v'$. Step 4: the remaining requirement is $u(1)\overline{v(1)} = 0$ for every $u \in D(T)$, and $u(1)$ is unrestricted — take $u(x) = x$ — so $v(1) = 0$. Hence
$$
T^{*}v = -v', \qquad D(T^{*}) = \{\, v \in AC[0,1] : v' \in L^{2},\ v(1) = 0 \,\} ,
$$
which is :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="eq. (5.4.13), p. 318"} result: the formal operator changes sign and the boundary condition moves to the other endpoint.

**A numerical check of the identity.** Take $u(x) = x^{2}$, which satisfies $u(0)=0$, and $v(x) = 1-x^{3}$, which satisfies $v(1)=0$. Both are real, so conjugation does nothing. Then
$$
(Tu, v) = \int_{0}^{1} 2x\,(1-x^{3})\,dx = \Bigl[x^{2} - \tfrac{2}{5}x^{5}\Bigr]_{0}^{1} = 1 - \tfrac{2}{5} = \tfrac{3}{5} ,
$$
$$
(u, T^{*}v) = \int_{0}^{1} x^{2}\cdot\bigl(3x^{2}\bigr)\,dx = \Bigl[\tfrac{3}{5}x^{5}\Bigr]_{0}^{1} = \tfrac{3}{5} .
$$
They agree: $\tfrac{3}{5} = 0.6$.

**A check that the boundary condition on $v$ is not optional.** Take $v \equiv 1$, so $-v' = 0$. For $u(x) = x^{2}$ we get $(Tu, v) = \int_{0}^{1} 2x\,dx = 1$, while $(u, 0) = 0$. Since $1 \ne 0$, no $\eta$ can represent the functional $u \mapsto (Tu, 1)$ in the required way for this $u$; indeed $|(Tu,1)| = |u(1)|$ is not bounded by any multiple of $\|u\|_{2}$, as the functions $u_{k}(x) = x^{k}$ show: $u_k(1) = 1$ while $\|u_{k}\|_{2} = (2k+1)^{-1/2} \to 0$. So $v \equiv 1 \notin D(T^{*})$.

**(iii) Unboundedness of $T$, with a number.** Parts (i) and (ii) follow set-ups from the books cited in them; this one is ours. Let $u_{n}(x) = \sqrt{2}\,\sin(n\pi x)$ for $n \in \mathbb{N}$. Each lies in $D(T)$: it is smooth and $u_{n}(0) = 0$. Then $\|u_{n}\|^{2} = 2\int_{0}^{1}\sin^{2}(n\pi x)\,dx = 1$ and
$$
\|Tu_{n}\|^{2} = 2n^{2}\pi^{2}\int_{0}^{1}\cos^{2}(n\pi x)\,dx = n^{2}\pi^{2} ,
$$
so $\|Tu_{n}\|/\|u_{n}\| = n\pi$. At $n = 3$ this is $3\pi \approx 9.42478$, and it grows without bound: $T$ is unbounded, on a bounded interval, which is the contrast :cite[Kreyszig]{work=kreyszig-1978 loc="§10.7, p. 569"} draws with the multiplication operator.
:::

:::application[Why quantum mechanics cannot avoid this]{provenance=original}
The observables of a one-particle quantum system are position and momentum,
$$
(X\psi)(x) = x\,\psi(x), \qquad (P\psi)(x) = -i\hbar\,\psi'(x) ,
$$
and the Hamiltonian built from them. Example (i) above shows $X$ is unbounded, and example (iii) shows that differentiation is already unbounded on the unit interval; $P$ inherits this, because the functions $u_{n}(x) = \sqrt{2}\,\sin(n\pi x)$ of example (iii), extended by zero outside $[0,1]$, vanish at both endpoints and so are absolutely continuous on all of $\mathbb{R}$ with derivative in $L^{2}(\mathbb{R})$, and satisfy $\|Pu_{n}\|/\|u_{n}\| = \hbar n\pi$. By the Hellinger-Toeplitz theorem neither $X$ nor $P$ can be defined on all of $L^{2}$ while obeying $(T\varphi,\psi) = (\varphi,T\psi)$. So a quantum observable is *not* specified by writing down a formula: it is specified by a formula together with a domain, and :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.1, p. 254"} warn that the choice of domain is usually dictated by the physics rather than by convenience, since the properties one cares about — the spectrum above all — change with it.

Three concrete consequences for practice.

- **Boundary conditions are the domain.** A particle in a box, a particle on a ring, and a particle on a half-line all carry the same differential expression $-\hbar^{2}\psi''/2m$ and differ only in the domain. The energy levels differ because the operators differ. This is the same phenomenon as the dependence of eigenvalues on boundary conditions in :ref[]{to=ode.sturm-liouville-theory}, now stated in the language that makes the spectral theorem applicable.
- **A core is enough.** Because a closed operator is determined by its restriction to any core, one may do calculations on a convenient dense set — smooth compactly supported functions, or the Hermite functions of the harmonic oscillator used in :cite[Reed and Simon's Example 2]{work=reed-simon-1980 loc="Example 2, p. 250"}, or the Fourier modes that :cite[Hassani]{work=hassani-2013 loc="Example 19.1.2, p. 563"} uses for $d/dx$ — and let the closure supply the rest. In practice this is how an operator is specified: give a formula, give a core, close.
- **Time evolution needs more than closedness.** Solving $i\hbar\,\partial_{t}\psi = H\psi$ means exponentiating $H$, and that requires the spectral theorem, which holds for self-adjoint operators and not for merely closed symmetric ones (:ref[]{to=funcan.spectral-theorem-general}, :ref[]{to=funcan.stone-theorem}). The gap between the two conditions is the subject of :ref[]{to=funcan.symmetric-self-adjoint}, and it is a real gap, not a technicality: it decides whether a given Hamiltonian determines a dynamics at all.

The same framework serves outside quantum mechanics. Parabolic and hyperbolic evolution equations are first-order systems $\dot{u} = Au$ with $A$ an unbounded closed operator on a function space, and the generation theory for the resulting semigroups (:ref[]{to=pde.operator-semigroups}) is stated entirely in terms of the domain, the closedness and the resolvent of $A$. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.2, p. 307"} list the alternatives honestly: work with the inverse operator, which is usually compact and bounded; or close the operator, as here; or change the norm on the domain, which is the Sobolev-space route of :ref[]{to=pde.weak-solutions-sobolev}. All three are used, and they are not in competition.
:::
