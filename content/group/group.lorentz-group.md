---
id: group.lorentz-group
title: The Lorentz group
kind: definition
level: advanced
summary: Defines $O(3,1)$ as the matrices preserving $\eta=\mathrm{diag}(1,-1,-1,-1)$, separates its four pieces by the signs of $\det\Lambda$ and $\Lambda^{0}{}_{0}$, computes the six generators and the brackets $[J_j,J_k]=\mathrm{i}\epsilon_{jkl}J_l$, $[J_j,K_k]=\mathrm{i}\epsilon_{jkl}K_l$, $[K_j,K_k]=-\mathrm{i}\epsilon_{jkl}J_l$, factorises every proper orthochronous transformation uniquely as a boost times a rotation, and builds the two-to-one covering $SL(2,\mathbb{C})\to SO^{+}(3,1)$.
prereqs: [group.lie-groups-algebras, group.so3-su2, group.homomorphisms-quotients, linalg.matrix-exponential, linalg.determinants, linalg.quadratic-forms, linalg.unitary-orthogonal-matrices]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§23.2, Example 23.2.2 item 6, pp. 706–707: the bilinear form $-x_1y_1-\\dots-x_py_p+x_{p+1}y_{p+1}+\\dots+x_ny_n$, the subgroup $O(p,n-p)$ of $GL(n,\\mathbb{R})$ preserving it, the warning that other authors order the arguments differently, and the identification of $O(3,1)$ as the Lorentz group with $P(3,1)$ the Poincaré group; §29.2.1, pp. 940–943: the matrix $\\eta=\\mathrm{diag}(-1,\\dots,-1,1,\\dots,1)$, the condition $A^{t}\\eta A=\\eta$ with its consequences $(\\det A)^2=1$ and $A\\eta A^{t}=\\eta$, Eqs. (29.38)–(29.39); Example 29.2.10, the invariant $x_0^2-x_1^2-x_2^2-x_3^2$ with the footnote that the time index is written $0$, the two relations Eq. (29.40) for the $(0,0)$ components, the dichotomy $a_{00}\\ge1$ or $a_{00}\\le-1$, the names orthochronous and proper orthochronous, the statement that the latter form a subgroup reachable continuously from the identity, and the classification of vectors and of the five regions at an event, pp. 940–942; the prototype $\\eta$-orthogonal matrix $A^{(ij)}$ whose $2\\times2$ block is a rotation when both indices are spatial and a boost $\\bigl(\\begin{smallmatrix}\\cosh\\xi&-\\sinh\\xi\\\\-\\sinh\\xi&\\cosh\\xi\\end{smallmatrix}\\bigr)$ with $\\xi=\\tanh^{-1}(v/c)$ when one is temporal, pp. 942–943; the generators $(M_{ij})_{kl}=\\eta_{il}\\eta_{jk}-\\eta_{jl}\\eta_{ik}$, $M_{ij}=-M_{ji}$, Eq. (29.41), and their brackets $[M_{ij},M_{kl}]=\\eta_{ik}M_{jl}-\\eta_{il}M_{jk}+\\eta_{jl}M_{ik}-\\eta_{jk}M_{il}$, Eq. (29.42), p. 943, with the Poincaré extension Eqs. (29.44)–(29.45); §30.3.3, pp. 974–975: the real generators $\\mathbf{M}=(M_{23},M_{31},M_{12})$ and $\\mathbf{N}=(M_{01},M_{02},M_{03})$ with their brackets, the two Casimir operators $\\mathbf{M}^2-\\mathbf{N}^2$ and $\\mathbf{M}\\cdot\\mathbf{N}$, the combinations $\\tfrac{1}{2\\mathrm{i}}(\\mathbf{M}\\pm\\mathrm{i}\\mathbf{N})$ generating two independent angular-momentum algebras, the resulting statement that $\\mathfrak{so}(3,1)$ is a direct sum of them, and the labelling of its irreducible representations by a pair $T^{(jj')}$ of integers or half-odd integers; Thm 31.2.6, p. 996: the surjective homomorphism $\\mathrm{Spin}(\\mu,\\nu)\\to SO(\\mu,\\nu)$ with kernel $\\{1,-1\\}$"
    pages: "706-707, 940-943, 974-975, 996"
    role: the definition of $O(p,n-p)$ and of the Lorentz group as $O(3,1)$; the two conditions on the $(0,0)$ entry; the orthochronous and proper orthochronous terminology and the statement that the proper orthochronous transformations are the ones continuously connected to the identity; the covariant generators and the bracket relations of $\mathfrak{so}(3,1)$ from which ours are obtained; the splitting into two commuting angular-momentum algebras, the two Casimir invariants and the labelling of the irreducible representations by a pair of spins; the general $\mathrm{Spin}\to SO$ covering theorem, which is the nearest thing in our library to part 6; the light-cone vocabulary
  - work: arfken-2013
    loc: "§17.8, pp. 862–865: the homogeneous Lorentz group as the transformations consistent with the symmetry of space-time, with the Poincaré group as its inhomogeneous extension, p. 862; the derivation of the infinitesimal boost from $z^{2}-x_0^{2}$ invariance with $x_0=ct$, the generator $S=\\mathrm{i}\\sigma_1$ of Eq. (17.69), the finite boost $U(\\rho)=\\exp(\\mathrm{i}\\rho[\\mathrm{i}\\sigma_1])=\\bigl(\\begin{smallmatrix}\\cosh\\rho&-\\sinh\\rho\\\\-\\sinh\\rho&\\cosh\\rho\\end{smallmatrix}\\bigr)$ of Eq. (17.70), the identifications $\\beta=v/c=\\tanh\\rho$, $\\gamma=\\cosh\\rho=(1-\\beta^2)^{-1/2}$, $\\sinh\\rho=\\beta\\gamma$ of Eq. (17.71), the name 'rapidity' and the remark that $\\tanh\\rho<1$ bounds $v$ by $c$, pp. 863; the additivity $U(\\rho')U(\\rho)=U(\\rho+\\rho')$ of Eq. (17.72), the term 'boost' or 'pure Lorentz transformation', Example 17.8.1 on collinear velocity addition, and the statement that successive boosts in different directions give a boost together with a spatial rotation, the origin of the Thomas precession, pp. 863–864; the Minkowski metric tensor $(g^{\\mu\\nu})=(g_{\\mu\\nu})=\\mathrm{diag}(1,-1,-1,-1)$ of Eq. (17.74) with the warning that the opposite overall sign is equally valid but must not be mixed, and the remark that a pure-boost matrix is symmetric, pp. 864–865; Exercises 17.8.1–17.8.3, p. 865–866; §17.9, pp. 866–868: the field tensor $F^{\\mu\\lambda}$ of Eqs. (17.77)–(17.79), the transformation $F'=UFU$ of Eq. (17.81) with the boost matrix Eq. (17.80), and the component rules Eqs. (17.82)–(17.85) for $\\mathbf{E}$ and $\\mathbf{B}$"
    pages: "862-868"
    role: the rapidity parametrisation of a boost and the additivity that makes it the natural parameter; the Minkowski metric and its sign warning; the statement that a composition of non-collinear boosts is a boost together with a rotation; the electromagnetic field tensor and the transformation law of $\mathbf{E}$ and $\mathbf{B}$ used in the application
---

:::definition[Minkowski space and the Lorentz group]{provenance=adapted src="hassani-2013:Example 23.2.2 item 6, pp. 706–707, and Example 29.2.10 with Eqs. (29.38)–(29.39), pp. 940–941; arfken-2013:Eq. (17.74), p. 865"}
Write a point of space-time as a column $x=(x^{0},x^{1},x^{2},x^{3})^{\mathsf{T}}\in\mathbb{R}^4$ with $x^{0}=ct$, and give $\mathbb{R}^4$ the symmetric bilinear form
$$
\langle x,y\rangle_{\eta}=x^{\mathsf{T}}\eta\,y,
\qquad
\eta=\operatorname{diag}(1,-1,-1,-1),
\qquad
\langle x,x\rangle_{\eta}=(x^{0})^{2}-(x^{1})^{2}-(x^{2})^{2}-(x^{3})^{2} .
$$
This is **Minkowski space**. A vector is **timelike**, **null** or **spacelike** as $\langle x,x\rangle_{\eta}$ is positive, zero or negative.

The **Lorentz group** is the set of real $4\times4$ matrices preserving the form,
$$
O(3,1)=\bigl\{\,\Lambda\in M_4(\mathbb{R}) : \Lambda^{\mathsf{T}}\eta\,\Lambda=\eta \,\bigr\} ,
$$
a subgroup of $GL(4,\mathbb{R})$ because the defining condition is preserved by products and inverses. Its elements are **Lorentz transformations**. Taking $\eta=\operatorname{diag}(1,-1,\dots,-1)$ to $\operatorname{diag}(\underbrace{-1,\dots,-1}_{p},\underbrace{1,\dots,1}_{n-p})$ gives the general pseudo-orthogonal group $O(p,n-p)$ of :cite[Hassani]{work=hassani-2013 loc="Example 23.2.2 item 6, p. 706"}, of which $O(3,1)$ is the case $n=4$, $p=3$; see also :ref[the classical matrix groups]{to=group.matrix-group-catalogue} for the definite case $O(n)$.

**Two conventions, stated once.** Hassani numbers the three spatial coordinates $1,2,3$ with $\eta_{ii}=-1$ and the time coordinate last, then records in a footnote that he relabels it $0$, which is what we do; his invariant on p. 940 is our $\langle x,x\rangle_{\eta}$ exactly. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (17.74), p. 865"} write the same $\operatorname{diag}(1,-1,-1,-1)$ and warn that the opposite overall sign is equally correct provided it is used consistently; we never use it. Indices are raised and lowered with $\eta$, and we write $\Lambda^{\mu}{}_{\nu}$ for the entry in row $\mu$, column $\nu$, so that $x'^{\mu}=\Lambda^{\mu}{}_{\nu}x^{\nu}$.

**Rotations sit inside.** For $R\in SO(3)$ the matrix $\widehat R=\bigl(\begin{smallmatrix}1&0\\0&R\end{smallmatrix}\bigr)$ satisfies $\widehat R^{\mathsf{T}}\eta\widehat R=\eta$, so :ref[the rotation group]{to=group.so3-su2} embeds in $O(3,1)$ as the transformations fixing the time axis.
:::

:::definition[Boosts and rapidity]{provenance=adapted src="arfken-2013:Eqs. (17.69)–(17.72), pp. 863–864; hassani-2013:pp. 942–943"}
For a rapidity $\rho\in\mathbb{R}$ the **boost along the third axis** is
$$
B_3(\rho)=
\begin{pmatrix}
\cosh\rho&0&0&\sinh\rho\\
0&1&0&0\\
0&0&1&0\\
\sinh\rho&0&0&\cosh\rho
\end{pmatrix},
$$
and $B_{\hat{\mathbf{n}}}(\rho)=\widehat R\,B_3(\rho)\,\widehat R^{-1}$ for any $R\in SO(3)$ carrying $\hat{\mathbf{z}}$ to $\hat{\mathbf{n}}$. A **pure Lorentz transformation**, or **boost**, is a transformation of this form. Writing $\boldsymbol{\beta}=\hat{\mathbf{n}}\tanh\rho$, so that
$$
\beta=|\boldsymbol{\beta}|=\tanh\rho=\frac{v}{c},
\qquad
\gamma=\cosh\rho=\frac{1}{\sqrt{1-\beta^{2}}},
\qquad
\sinh\rho=\beta\gamma,
$$
the boost is given in block form by
$$
B(\boldsymbol{\beta})=
\begin{pmatrix}
\gamma & \gamma\,\boldsymbol{\beta}^{\mathsf{T}}\\[2pt]
\gamma\,\boldsymbol{\beta} & I_3+(\gamma-1)\dfrac{\boldsymbol{\beta}\boldsymbol{\beta}^{\mathsf{T}}}{|\boldsymbol{\beta}|^{2}}
\end{pmatrix},
$$
a symmetric matrix, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 865"} note every single boost must be. The parametrisation by $\rho$ rather than $v$ is :cite[their Eq. (17.71)]{work=arfken-2013 loc="p. 863"}; they call $\rho$ the **rapidity** and point out that $\tanh\rho<1$ for every finite $\rho$, which is why $c$ bounds $v$ and is never attained. Along one fixed direction the boosts form a one-parameter group, $B_{\hat{\mathbf{n}}}(\rho')B_{\hat{\mathbf{n}}}(\rho)=B_{\hat{\mathbf{n}}}(\rho+\rho')$ — rapidities add where velocities do not, which is their Eq. (17.72). :cite[Hassani]{work=hassani-2013 loc="pp. 942–943"} builds the same object as the $2\times2$ block $\bigl(\begin{smallmatrix}\cosh\xi&-\sinh\xi\\-\sinh\xi&\cosh\xi\end{smallmatrix}\bigr)$ sitting in one time and one space index, with $\xi=\tanh^{-1}(v/c)$.

**Active or passive.** Ours is the **active** convention: $B_3(\rho)$ moves a point, and a particle at rest at the origin acquires velocity $+v\hat{\mathbf{z}}$. Both sources write the matrix the other way round, as the change of coordinates to a frame moving at $+v$: Arfken's $U(\rho)$ of Eq. (17.70) and Hassani's block carry the minus signs off the diagonal. The two differ by the sign of $\rho$,
$$
B_3(\rho)=U(\rho)^{-1}=U(-\rho),
$$
and nothing below depends on the choice provided it is not mixed.
:::

:::statement[Structure of the Lorentz group]{provenance=adapted src="hassani-2013:Example 29.2.10 with Eq. (29.40), pp. 940–941, Eqs. (29.41)–(29.42), p. 943, and §30.3.3, pp. 974–975; arfken-2013:§17.8, pp. 863–865"}
Let $\Lambda\in O(3,1)$ and write $a_{00}=\Lambda^{0}{}_{0}$.

1. **Two discrete invariants.** $(\det\Lambda)^{2}=1$ and
$$
a_{00}^{2}-\sum_{i=1}^{3}(\Lambda^{i}{}_{0})^{2}=1,
\qquad
a_{00}^{2}-\sum_{i=1}^{3}(\Lambda^{0}{}_{i})^{2}=1 ,
$$
so $|a_{00}|\ge1$ and in particular $a_{00}\neq0$. $\Lambda$ is **proper** if $\det\Lambda=+1$ and **orthochronous** if $a_{00}\ge1$.

2. **Four pieces.** The pair $(\operatorname{sgn}\det\Lambda,\operatorname{sgn}a_{00})$ is multiplicative, so the **proper orthochronous** transformations form a subgroup
$$
SO^{+}(3,1)=\{\Lambda\in O(3,1):\det\Lambda=1,\ \Lambda^{0}{}_{0}\ge1\}
$$
of index four in $O(3,1)$, the other three cosets being represented by space inversion $P=\operatorname{diag}(1,-1,-1,-1)$, time reversal $T=\operatorname{diag}(-1,1,1,1)$ and $PT=-I$. :cite[Hassani]{work=hassani-2013 loc="p. 941"} names the orthochronous and the proper orthochronous transformations and records that the proper orthochronous ones form a subgroup each of whose elements is joined to the identity by a continuous path; $P$, $T$ and $PT$ are of course not among them. The converse is ours and follows from part 1: $\det$ and $\operatorname{sgn}\Lambda^{0}{}_{0}$ are continuous on $O(3,1)$ — the second because $a_{00}$ never vanishes there — and take only the values $\pm1$, so each of the four pieces is open and closed in $O(3,1)$ and nothing outside $SO^{+}(3,1)$ can be joined to $I$ by a path. Hence $SO^{+}(3,1)$ is exactly the identity component.

3. **Polar decomposition.** Every $\Lambda\in SO^{+}(3,1)$ factors
$$
\Lambda=B(\boldsymbol{\beta})\,\widehat R
$$
with a unique boost $B(\boldsymbol{\beta})$ and a unique rotation $R\in SO(3)$, namely $\gamma=\Lambda^{0}{}_{0}$ and $\gamma\beta_i=\Lambda^{i}{}_{0}$. Consequently $SO^{+}(3,1)$ is six-dimensional and connected, and the boosts, which do not form a subgroup, are a set of coset representatives for $SO(3)$ in it.

4. **The Lie algebra.** $\mathfrak{so}(3,1)=\{X\in M_4(\mathbb{R}):X^{\mathsf{T}}\eta+\eta X=0\}$ has dimension six, with basis the antisymmetric family of :cite[Hassani's mixed-index generators]{work=hassani-2013 loc="the unnumbered line above Eq. (29.41), p. 943"},
$$
(M_{\mu\nu})^{\alpha}{}_{\beta}=\delta^{\alpha}_{\nu}\,\eta_{\mu\beta}-\delta^{\alpha}_{\mu}\,\eta_{\nu\beta},
\qquad M_{\mu\nu}=-M_{\nu\mu},
$$
which is his Eq. (29.41) with the first index raised by $\eta$ (he prints the all-lower-index form $(M_{\mu\nu})_{\alpha\beta}=\eta_{\mu\beta}\eta_{\nu\alpha}-\eta_{\nu\beta}\eta_{\mu\alpha}$ as the numbered equation). They obey his Eq. (29.42),
$$
[M_{\mu\nu},M_{\kappa\lambda}]=\eta_{\mu\kappa}M_{\nu\lambda}-\eta_{\mu\lambda}M_{\nu\kappa}+\eta_{\nu\lambda}M_{\mu\kappa}-\eta_{\nu\kappa}M_{\mu\lambda}.
$$
In the physicists' Hermitian-style normalisation
$$
J_i=-\tfrac{\mathrm{i}}{2}\epsilon_{ijk}M_{jk},
\qquad
K_i=\mathrm{i}\,M_{0i}\qquad(i,j,k=1,2,3),
$$
so that $\widehat R_{\hat{\mathbf{n}}}(\theta)=\exp(-\mathrm{i}\theta\,\hat{\mathbf{n}}\cdot\mathbf{J})$ and $B_{\hat{\mathbf{n}}}(\rho)=\exp(-\mathrm{i}\rho\,\hat{\mathbf{n}}\cdot\mathbf{K})$, the brackets are
$$
[J_j,J_k]=\mathrm{i}\,\epsilon_{jkl}J_l,
\qquad
[J_j,K_k]=\mathrm{i}\,\epsilon_{jkl}K_l,
\qquad
[K_j,K_k]=-\,\mathrm{i}\,\epsilon_{jkl}J_l .
$$
The three $J_i$ are Hermitian and the three $K_i$ are **anti**-Hermitian, which is the algebraic record of the group being non-compact. Neither family lies in $\mathfrak{so}(3,1)$ itself, which was defined just above as a set of *real* matrices: each of $J_i,K_i$ is $\mathrm{i}$ times a real matrix, and it is the $-\mathrm{i}J_i$ — real and antisymmetric — that span over $\mathbb{R}$ the $\mathfrak{so}(3)$ of the embedded rotations, while the $-\mathrm{i}K_i$ are real symmetric and give the three remaining real directions.

5. **Two commuting copies of $\mathfrak{su}(2)$, after complexifying.** Put
$$
N^{\pm}_{i}=\tfrac12\bigl(J_i\pm\mathrm{i}K_i\bigr).
$$
Then $[N^{\pm}_j,N^{\pm}_k]=\mathrm{i}\epsilon_{jkl}N^{\pm}_l$ and $[N^{+}_j,N^{-}_k]=0$. The two sets are *not* real combinations of $J$ and $K$, so this is an isomorphism of the **complexified** algebra, $\mathfrak{so}(3,1)\otimes\mathbb{C}\cong\mathfrak{sl}(2,\mathbb{C})\oplus\mathfrak{sl}(2,\mathbb{C})$, not a splitting of the real one. The two quantities $\mathbf{J}^2-\mathbf{K}^2$ and $\mathbf{J}\cdot\mathbf{K}$ commute with all six generators and are the Casimir invariants, so the irreducible representations are labelled by a pair $(j_1,j_2)$ of spins. The splitting, the Casimir pair and that labelling are :cite[Hassani's]{work=hassani-2013 loc="§30.3.3, pp. 974–975"}, in a notation and normalisation different from ours and without the word *complexified*; the remark below gives the dictionary and says where we part from him.

6. **The covering group $SL(2,\mathbb{C})$.** For $x\in\mathbb{R}^4$ set
$$
X(x)=x^{0}I+\mathbf{x}\cdot\boldsymbol{\sigma}
=\begin{pmatrix}x^{0}+x^{3}&x^{1}-\mathrm{i}x^{2}\\x^{1}+\mathrm{i}x^{2}&x^{0}-x^{3}\end{pmatrix},
$$
a bijection from $\mathbb{R}^4$ onto the Hermitian $2\times2$ matrices with $\det X(x)=\langle x,x\rangle_{\eta}$. For $A\in SL(2,\mathbb{C})$ the map $X\mapsto AXA^{\dagger}$ preserves Hermiticity and the determinant, so there is a unique $\Lambda(A)\in O(3,1)$ with
$$
A\,X(x)\,A^{\dagger}=X\bigl(\Lambda(A)\,x\bigr),
\qquad
\Lambda(A)^{\mu}{}_{\nu}=\tfrac12\operatorname{tr}\bigl(\sigma_{\mu}A\,\sigma_{\nu}A^{\dagger}\bigr)
$$
where $\sigma_0=I$ and $\sigma_1,\sigma_2,\sigma_3$ are the Pauli matrices, with no index raising intended. The map
$$
\Lambda:SL(2,\mathbb{C})\longrightarrow SO^{+}(3,1)
$$
is a surjective group homomorphism with kernel $\{\pm I\}$, so $SO^{+}(3,1)\cong SL(2,\mathbb{C})/\{\pm I\}$ and the covering is two-to-one. On the two generating families
$$
\Lambda\Bigl(\exp\bigl(-\tfrac{\mathrm{i}}{2}\theta\,\hat{\mathbf{n}}\cdot\boldsymbol{\sigma}\bigr)\Bigr)=\widehat R_{\hat{\mathbf{n}}}(\theta),
\qquad
\Lambda\Bigl(\exp\bigl(\tfrac12\rho\,\hat{\mathbf{n}}\cdot\boldsymbol{\sigma}\bigr)\Bigr)=B_{\hat{\mathbf{n}}}(\rho) ,
$$
so the restriction to $SU(2)$ is exactly the covering $SU(2)\to SO(3)$ of :ref[the rotation group and SU(2)]{to=group.so3-su2}, and the boosts come from the Hermitian positive-definite elements.

This part is ours, not our sources': neither book covers $SO^{+}(3,1)$ by $SL(2,\mathbb{C})$, and the proof below is the $SU(2)\to SO(3)$ construction of :ref[the rotation group and SU(2)]{to=group.so3-su2} with "traceless Hermitian" widened to "Hermitian". The nearest statement in our library is :cite[Hassani's Theorem 31.2.6]{work=hassani-2013 loc="p. 996"}, that $\mathrm{Spin}(\mu,\nu)\to SO(\mu,\nu)$ is a surjective homomorphism with kernel $\{1,-1\}$; it is stated for the full $SO(\mu,\nu)$ rather than for the identity component, and it is not accompanied there by the identification of $\mathrm{Spin}(3,1)$ with $SL(2,\mathbb{C})$, so we prove what we need from scratch.
:::

:::idea{provenance=original}
Three observations organise everything.

The first is that $\eta$ has one plus sign and three minuses, and that asymmetry alone produces the discrete structure. Reading the condition $\Lambda^{\mathsf{T}}\eta\Lambda=\eta$ in its $(0,0)$ entry says that the first column is a *unit timelike* vector: its time part beats its space part by exactly one. A unit timelike vector cannot have zero time component, so the sign of $\Lambda^{0}{}_{0}$ can never change continuously — and that sign, together with the sign of the determinant, cuts the group into four pieces.

The second is that a unit timelike vector is precisely what a boost is built from. Every $\Lambda$ sends the time axis somewhere, and wherever it sends it, there is a boost doing the same thing; dividing that boost out leaves a transformation fixing the time axis, which can only be a rotation. That is the whole of the polar decomposition, and it says that the Lorentz group is the rotations plus three more directions, one per boost parameter.

The third is that the traceless Hermitian $2\times2$ matrices form a three-dimensional real vector space, and adding the real scalars gives all $2\times2$ Hermitian matrices, four-dimensional over $\mathbb{R}$ — and on that four-dimensional space the determinant is exactly the Minkowski form. The construction that covers $SO(3)$ by $SU(2)$ therefore runs again verbatim with "traceless Hermitian" widened to "Hermitian", "unitary" widened to "unimodular", and $U\cdot U^{\dagger}$ left unchanged. Unitarity was what kept the trace — the time coordinate — fixed; dropping it is exactly what lets the time coordinate move, and the boosts are what appears.
:::

:::proof[Parts 1 and 2: the four pieces]{provenance=adapted src="hassani-2013:Eqs. (29.38)–(29.40), pp. 940–941"}
**Step 1: the determinant.** Taking determinants in $\Lambda^{\mathsf{T}}\eta\Lambda=\eta$ and using $\det\Lambda^{\mathsf{T}}=\det\Lambda$ gives $(\det\Lambda)^{2}\det\eta=\det\eta$, and $\det\eta=-1\neq0$, so $(\det\Lambda)^{2}=1$. This is :cite[Hassani's Eq. (29.38)]{work=hassani-2013 loc="p. 940"}.

**Step 2: the two relations on $a_{00}$.** The $(0,0)$ entry of $\Lambda^{\mathsf{T}}\eta\Lambda=\eta$ reads $\sum_{\mu}\Lambda^{\mu}{}_{0}\,\eta_{\mu\mu}\,\Lambda^{\mu}{}_{0}=\eta_{00}=1$, that is $a_{00}^{2}-\sum_i(\Lambda^{i}{}_{0})^{2}=1$. Since $\eta^{2}=I$, the defining condition also gives $\Lambda\eta\Lambda^{\mathsf{T}}=\eta$: right-multiplying $\Lambda^{\mathsf{T}}\eta\Lambda=\eta$ by $\Lambda^{-1}\eta$ turns the left side into $\Lambda^{\mathsf{T}}$ and the right into $\eta\Lambda^{-1}\eta$, so
$$
\Lambda^{\mathsf{T}}=\eta\,\Lambda^{-1}\eta,
\qquad\text{equivalently}\qquad
\Lambda^{-1}=\eta\,\Lambda^{\mathsf{T}}\eta ,
$$
and sandwiching the second form, $\Lambda\cdot(\Lambda^{-1}=\eta\Lambda^{\mathsf{T}}\eta)\cdot\eta$, gives $\Lambda\eta\Lambda^{\mathsf{T}}=\eta$. Its $(0,0)$ entry is the second relation. These are :cite[Hassani's Eqs. (29.39)–(29.40)]{work=hassani-2013 loc="pp. 940–941"}. Both force $a_{00}^{2}\ge1$.

**Step 3: orthochronicity is multiplicative.** Let $\Lambda,\Lambda'$ be orthochronous, $a=\Lambda^{0}{}_{0}\ge1$ and $b=\Lambda'^{0}{}_{0}\ge1$. Put $u_i=\Lambda^{0}{}_{i}$ and $v_i=\Lambda'^{i}{}_{0}$, so that by step 2, $|\mathbf{u}|^{2}=a^{2}-1$ and $|\mathbf{v}|^{2}=b^{2}-1$. Then
$$
(\Lambda\Lambda')^{0}{}_{0}=\Lambda^{0}{}_{\mu}\Lambda'^{\mu}{}_{0}=ab+\mathbf{u}\cdot\mathbf{v}
\;\ge\; ab-|\mathbf{u}||\mathbf{v}|
= ab-\sqrt{(a^{2}-1)(b^{2}-1)} ,
$$
by Cauchy-Schwarz. The right-hand side is positive, because $a^{2}b^{2}-(a^{2}-1)(b^{2}-1)=a^{2}+b^{2}-1\ge1>0$. **Here both relations of step 2 are used**, one for each factor. So $(\Lambda\Lambda')^{0}{}_{0}>0$; and part 1, applied to the Lorentz transformation $\Lambda\Lambda'$, gives $|(\Lambda\Lambda')^{0}{}_{0}|\ge1$, so the entry is in fact $\ge1$ and the product is orthochronous. Since $a_{00}$ never vanishes, the same computation applied to $\Lambda^{-1}=\eta\Lambda^{\mathsf{T}}\eta$ (step 2) — whose $(0,0)$ entry is again $a_{00}$ — shows the orthochronous transformations are closed under inverses.

**Step 4: four cosets.** $\det$ is multiplicative, so $\Lambda\mapsto(\operatorname{sgn}\det\Lambda,\operatorname{sgn}\Lambda^{0}{}_{0})$ is a homomorphism onto $\{\pm1\}\times\{\pm1\}$ with kernel $SO^{+}(3,1)$; it is onto because $P$, $T$ and $PT$ realise the three non-trivial values, as their diagonal entries show. By :ref[the first isomorphism theorem]{to=group.homomorphisms-quotients} the kernel has index four. That every element of the kernel is joined to the identity by a continuous path is :cite[Hassani's]{work=hassani-2013 loc="p. 941"} statement, which part 3 makes concrete by writing each one as a boost times a rotation and joining both factors to $I$; the converse, that nothing else can be, is the continuity argument of part 2 above, so the kernel is the identity component. $\square$
:::

:::proof[Part 3: boost times rotation]{provenance=original}
**Step 1: read off the boost.** Let $\Lambda\in SO^{+}(3,1)$ and let $c=\Lambda e_0$ be its first column, $c=(\gamma,\gamma\boldsymbol{\beta})$ with $\gamma=\Lambda^{0}{}_{0}\ge1$ and $\gamma\beta_i=\Lambda^{i}{}_{0}$. Step 2 of the previous proof gives $\gamma^{2}(1-|\boldsymbol{\beta}|^{2})=1$, so $|\boldsymbol{\beta}|<1$ and $\gamma=(1-|\boldsymbol{\beta}|^{2})^{-1/2}$, exactly the relation the boost $B(\boldsymbol{\beta})$ requires. Its first column is $(\gamma,\gamma\boldsymbol{\beta})=c$ as well. (For $\boldsymbol{\beta}=\mathbf{0}$ read $B=I$.)

**Step 2: what is left fixes the time axis.** Put $\widehat R:=B(\boldsymbol{\beta})^{-1}\Lambda$. It lies in $SO^{+}(3,1)$, being a product of two such, and $\widehat R e_0=B(\boldsymbol{\beta})^{-1}c=e_0$ by step 1, so its first column is $\delta^{\mu}_{0}$. The first *row* vanishes off the diagonal too: the $(0,j)$ entry of $\widehat R^{\mathsf{T}}\eta\widehat R=\eta$ reads
$$
\sum_{\mu}\widehat R^{\mu}{}_{0}\,\eta_{\mu\mu}\,\widehat R^{\mu}{}_{j}=\eta_{0j}=0\qquad(j=1,2,3),
$$
and the first factor is $\delta^{\mu}_{0}$, leaving $\widehat R^{0}{}_{j}=0$. So $\widehat R=\bigl(\begin{smallmatrix}1&0\\0&R\end{smallmatrix}\bigr)$, the remaining entries of $\widehat R^{\mathsf{T}}\eta\widehat R=\eta$ collapse to $-R^{\mathsf{T}}R=-I_3$, and $\det R=\det\widehat R=1$: $R\in SO(3)$.

**Step 3: uniqueness.** In any factorisation $\Lambda=B(\boldsymbol{\beta}')\widehat R'$ the first column is $B(\boldsymbol{\beta}')e_0=(\gamma',\gamma'\boldsymbol{\beta}')$, so $\gamma'=\gamma$ and $\boldsymbol{\beta}'=\boldsymbol{\beta}$, whence $\widehat R'=\widehat R$.

**Step 4: dimension and connectedness.** The boosts are parametrised by the open unit ball $|\boldsymbol{\beta}|<1$ in $\mathbb{R}^3$ and the rotations by the connected three-dimensional $SO(3)$, so step 3 is a bijection $SO^{+}(3,1)\leftrightarrow\{|\boldsymbol{\beta}|<1\}\times SO(3)$, continuous both ways. Hence $\dim SO^{+}(3,1)=3+3=6$ and $SO^{+}(3,1)$ is connected, both factors being so. **Here orthochronicity is used**: without $\gamma\ge1$ the first column could be $(-\gamma,\dots)$ and no boost would match it. $\square$
:::

:::proof[Part 4: the generators and their brackets]{provenance=adapted src="hassani-2013:Eqs. (29.41)–(29.42), p. 943, and §30.3.3, pp. 974–975"}
**Step 1: the algebra as a matrix condition.** Differentiating $\Lambda(t)^{\mathsf{T}}\eta\Lambda(t)=\eta$ at $t=0$ along a curve through the identity gives $X^{\mathsf{T}}\eta+\eta X=0$, that is, $\eta X$ is antisymmetric (:ref[matrix Lie groups and Lie algebras]{to=group.lie-groups-algebras}). The antisymmetric $4\times4$ matrices form a space of dimension $\binom42=6$, and $X\mapsto\eta X$ is a bijection onto it, so $\dim\mathfrak{so}(3,1)=6$. Conversely $\exp$ of such an $X$ lies in $O(3,1)$, since $\mathrm{e}^{tX^{\mathsf{T}}}\eta\,\mathrm{e}^{tX}$ has vanishing $t$-derivative.

**Step 2: a basis.** Hassani's matrices $(M_{\mu\nu})^{\alpha}{}_{\beta}=\delta^{\alpha}_{\nu}\eta_{\mu\beta}-\delta^{\alpha}_{\mu}\eta_{\nu\beta}$ satisfy $\eta M_{\mu\nu}$ antisymmetric and $M_{\mu\nu}=-M_{\nu\mu}$, and the six with $\mu<\nu$ are independent, hence a basis. Spelling out two of them,
$$
M_{03}=\begin{pmatrix}0&0&0&1\\0&0&0&0\\0&0&0&0\\1&0&0&0\end{pmatrix},
\qquad
M_{12}=\begin{pmatrix}0&0&0&0\\0&0&1&0\\0&-1&0&0\\0&0&0&0\end{pmatrix} ,
$$
and exponentiating: $\exp(\rho M_{03})=B_3(\rho)$ is the boost of the definition, since $M_{03}^{2}$ is the projector on the $(0,3)$ plane so the series sums to $\cosh$ and $\sinh$; and $\exp(\theta M_{12})$ is the rotation by $-\theta$ about the third axis, since $M_{12}^{2}$ is minus the projector on the $(1,2)$ plane.

**Step 3: the covariant brackets.** Contracting the index $\sigma$,
$$
(M_{\mu\nu}M_{\kappa\lambda})^{\alpha}{}_{\beta}
=\bigl(\delta^{\alpha}_{\nu}\eta_{\mu\sigma}-\delta^{\alpha}_{\mu}\eta_{\nu\sigma}\bigr)\bigl(\delta^{\sigma}_{\lambda}\eta_{\kappa\beta}-\delta^{\sigma}_{\kappa}\eta_{\lambda\beta}\bigr)
=\delta^{\alpha}_{\nu}\eta_{\mu\lambda}\eta_{\kappa\beta}
-\delta^{\alpha}_{\nu}\eta_{\mu\kappa}\eta_{\lambda\beta}
-\delta^{\alpha}_{\mu}\eta_{\nu\lambda}\eta_{\kappa\beta}
+\delta^{\alpha}_{\mu}\eta_{\nu\kappa}\eta_{\lambda\beta}.
$$
Subtracting the same expression with $(\mu\nu)$ and $(\kappa\lambda)$ exchanged gives eight terms, which pair off two at a time: the terms carrying $\eta_{\mu\kappa}$ are $-\delta^{\alpha}_{\nu}\eta_{\mu\kappa}\eta_{\lambda\beta}+\delta^{\alpha}_{\lambda}\eta_{\mu\kappa}\eta_{\nu\beta}=\eta_{\mu\kappa}(M_{\nu\lambda})^{\alpha}{}_{\beta}$, and the three other pairs assemble the same way. Hence
$$
[M_{\mu\nu},M_{\kappa\lambda}]=\eta_{\mu\kappa}M_{\nu\lambda}-\eta_{\mu\lambda}M_{\nu\kappa}+\eta_{\nu\lambda}M_{\mu\kappa}-\eta_{\nu\kappa}M_{\mu\lambda},
$$
which is Hassani's Eq. (29.42). We have also checked the identity entry by entry for all $4^{4}$ index choices.

**Step 4: the physicists' basis.** With $J_i=-\tfrac{\mathrm{i}}{2}\epsilon_{ijk}M_{jk}$ and $K_i=\mathrm{i}M_{0i}$, each bracket follows from step 3 by contracting with Levi-Civita symbols and using $\eta_{jk}=-\delta_{jk}$ for spatial indices and $\eta_{00}=1$. Explicitly, $J_3=-\mathrm{i}M_{12}$ so $\exp(-\mathrm{i}\theta J_3)=\exp(-\theta M_{12})$ is the rotation by $+\theta$, matching :ref[the convention of the rotation group]{to=group.so3-su2}; and $K_3=\mathrm{i}M_{03}$ so $\exp(-\mathrm{i}\rho K_3)=\exp(\rho M_{03})=B_3(\rho)$. The three relations are
$$
[J_j,J_k]=\mathrm{i}\epsilon_{jkl}J_l,
\qquad
[J_j,K_k]=\mathrm{i}\epsilon_{jkl}K_l,
\qquad
[K_j,K_k]=-\mathrm{i}\epsilon_{jkl}J_l ,
$$
verified matrix by matrix for all nine pairs in each line. The middle one says that $\mathbf{K}$ is a vector under rotations; the last one, with its minus sign, is where the signature enters — in $\mathfrak{so}(4)$ the sign is $+$. Hermiticity: $M_{jk}$ is real antisymmetric so $J_i=-\tfrac{\mathrm{i}}{2}\epsilon_{ijk}M_{jk}$ is Hermitian; $M_{0i}$ is real **symmetric** so $K_i=\mathrm{i}M_{0i}$ is anti-Hermitian.

**Step 5: part 5.** The splitting is :cite[Hassani's]{work=hassani-2013 loc="§30.3.3, pp. 974–975"}, who forms it from his real generators; we do it in the Hermitian normalisation of step 4. Expanding and using $(\pm\mathrm{i})^{2}=-1$,
$$
[N^{\pm}_j,N^{\pm}_k]=\tfrac14\Bigl([J_j,J_k]-[K_j,K_k]\pm\mathrm{i}\bigl([J_j,K_k]+[K_j,J_k]\bigr)\Bigr).
$$
The first two brackets contribute $\mathrm{i}\epsilon_{jkl}J_l-(-\mathrm{i}\epsilon_{jkl}J_l)=2\mathrm{i}\epsilon_{jkl}J_l$, and since $[K_j,J_k]=-[J_k,K_j]=-\mathrm{i}\epsilon_{kjl}K_l=\mathrm{i}\epsilon_{jkl}K_l$ the last two contribute $2\mathrm{i}\epsilon_{jkl}K_l$. Hence
$$
[N^{\pm}_j,N^{\pm}_k]=\tfrac14\bigl(2\mathrm{i}\epsilon_{jkl}J_l\pm\mathrm{i}\cdot2\mathrm{i}\epsilon_{jkl}K_l\bigr)
=\tfrac{\mathrm{i}}{2}\epsilon_{jkl}\bigl(J_l\pm\mathrm{i}K_l\bigr)=\mathrm{i}\epsilon_{jkl}N^{\pm}_l .
$$
For the mixed bracket the same expansion gives $\tfrac14\bigl([J_j,J_k]+[K_j,K_k]-\mathrm{i}[J_j,K_k]+\mathrm{i}[K_j,J_k]\bigr)$, in which the first pair is $\mathrm{i}\epsilon_{jkl}J_l-\mathrm{i}\epsilon_{jkl}J_l=0$ and the second is $-\mathrm{i}\cdot\mathrm{i}\epsilon_{jkl}K_l+\mathrm{i}\cdot\mathrm{i}\epsilon_{jkl}K_l=0$: the two families commute. $\square$
:::

:::proof[Part 6: the covering by $SL(2,\mathbb{C})$]{provenance=original}
This is the argument of :ref[the rotation group and SU(2)]{to=group.so3-su2} with "traceless Hermitian" relaxed to "Hermitian".

**Step 1: $X$ is the right dictionary.** A $2\times2$ matrix is Hermitian exactly when it is $x^{0}I+\mathbf{x}\cdot\boldsymbol{\sigma}$ for real $x^{0},\mathbf{x}$, since $I,\sigma_1,\sigma_2,\sigma_3$ are Hermitian and a real basis of that four-dimensional real space. Expanding the $2\times2$ determinant of the displayed matrix,
$$
\det X(x)=(x^{0}+x^{3})(x^{0}-x^{3})-(x^{1}-\mathrm{i}x^{2})(x^{1}+\mathrm{i}x^{2})=(x^{0})^{2}-|\mathbf{x}|^{2}=\langle x,x\rangle_{\eta} .
$$
The inverse dictionary is $x^{0}=\tfrac12\operatorname{tr}X$ and $x^{i}=\tfrac12\operatorname{tr}(\sigma_iX)$, from $\operatorname{tr}(\sigma_i\sigma_j)=2\delta_{ij}$ and $\operatorname{tr}\sigma_i=0$.

**Step 2: the action.** For $A\in SL(2,\mathbb{C})$, $(AXA^{\dagger})^{\dagger}=AX^{\dagger}A^{\dagger}=AXA^{\dagger}$, so $AXA^{\dagger}$ is Hermitian, and $\det(AXA^{\dagger})=|\det A|^{2}\det X=\det X$. By step 1 there is a unique real linear $\Lambda(A)$ with $AX(x)A^{\dagger}=X(\Lambda(A)x)$, and it preserves $\langle\cdot,\cdot\rangle_{\eta}$ — a quadratic form determines its bilinear form by polarisation — so $\Lambda(A)\in O(3,1)$. The entry formula follows by applying $x^{\mu}=\tfrac12\operatorname{tr}(\sigma^{\mu}X)$ to $A\sigma_{\nu}A^{\dagger}$. Composition: $(AB)X(AB)^{\dagger}=A(BXB^{\dagger})A^{\dagger}$, so $\Lambda(AB)=\Lambda(A)\Lambda(B)$.

**Step 3: the image.** Both generating families are direct computations. For $A=\exp(-\tfrac{\mathrm{i}}{2}\theta\hat{\mathbf{n}}\cdot\boldsymbol{\sigma})\in SU(2)$ we have $A^{\dagger}=A^{-1}$, so $\operatorname{tr}(AXA^{\dagger})=\operatorname{tr}X$ and $x^{0}$ is untouched, while on the traceless part the action is the rotation $R_{\hat{\mathbf{n}}}(\theta)$ of :ref[the rotation group and SU(2)]{to=group.so3-su2}; hence $\Lambda(A)=\widehat R_{\hat{\mathbf{n}}}(\theta)$. For $A=\exp(\tfrac12\rho\,\hat{\mathbf{n}}\cdot\boldsymbol{\sigma})$, take $\hat{\mathbf{n}}=\hat{\mathbf{z}}$ (the general case follows by conjugating with the previous family): $A=\operatorname{diag}(\mathrm{e}^{\rho/2},\mathrm{e}^{-\rho/2})$ is Hermitian, and $AX A^{\dagger}$ multiplies the diagonal entries $x^{0}\pm x^{3}$ of $X$ by $\mathrm{e}^{\pm\rho}$, which is
$$
x'^{0}=x^{0}\cosh\rho+x^{3}\sinh\rho,\qquad x'^{3}=x^{0}\sinh\rho+x^{3}\cosh\rho,
$$
that is $B_3(\rho)$. By part 3 every element of $SO^{+}(3,1)$ is a boost times a rotation, so $\Lambda$ is onto $SO^{+}(3,1)$. It lands in no other piece: every $A\in SL(2,\mathbb{C})$ is $\mathrm{e}^{h}U$ with $h$ traceless Hermitian and $U\in SU(2)$ — take $\mathrm{e}^{h}=(AA^{\dagger})^{1/2}$, which is positive-definite Hermitian with determinant $|\det A|=1$, and $U=\mathrm{e}^{-h}A$ — so $SL(2,\mathbb{C})$ is connected, being a product of two connected sets; $\Lambda$ is continuous and $\Lambda(I)=I$, so the image lies in the connected component of the identity.

**Step 4: the kernel.** Suppose $AXA^{\dagger}=X$ for every Hermitian $X$. Taking $X=I$ gives $AA^{\dagger}=I$, so $A\in SU(2)$; then $A\sigma_iA^{\dagger}=\sigma_i$ for each $i$, and the kernel computation of :ref[the rotation group and SU(2)]{to=group.so3-su2} gives $A=\pm I$. Both are in $SL(2,\mathbb{C})$, so the kernel is $\{\pm I\}$ and the homomorphism is two-to-one; the isomorphism $SO^{+}(3,1)\cong SL(2,\mathbb{C})/\{\pm I\}$ is :ref[the first isomorphism theorem]{to=group.homomorphisms-quotients}. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**The signature, not just the non-degeneracy.** The bound $|\Lambda^{0}{}_{0}|\ge1$ of part 1 comes from $\eta$ having exactly one positive entry: the relation $a_{00}^{2}=1+\sum_i(\Lambda^{i}{}_{0})^{2}$ puts all the squares on one side only because the three space-space entries of $\eta$ share a sign. For a form of signature $(2,2)$ the same $(0,0)$ entry reads $a_{00}^{2}+a_{10}^{2}-a_{20}^{2}-a_{30}^{2}=1$, which does not keep $a_{00}$ away from zero — the rotation mixing the two positive directions drives it through $0$ — so there is no orthochronous/antichronous dichotomy of this shape, and the second discrete label of $O(2,2)$ has to be built from the determinant of its $2\times2$ time block instead. One time direction is what makes the sign of $\Lambda^{0}{}_{0}$ meaningful, and with it the statement that an observer's future stays the future. The minus sign in $[K_j,K_k]=-\mathrm{i}\epsilon_{jkl}J_l$ has the same origin, and flipping it gives $\mathfrak{so}(4)\cong\mathfrak{su}(2)\oplus\mathfrak{su}(2)$ as a *real* direct sum.

**Both signs are needed, separately.** Neither invariant alone cuts out the identity component. $PT=-I$ has $\det=+1$ yet $\Lambda^{0}{}_{0}=-1$, so "proper" does not imply "connected to the identity"; $P=\operatorname{diag}(1,-1,-1,-1)$ has $\Lambda^{0}{}_{0}=1$ yet $\det=-1$, so "orthochronous" does not either. This is why the physically relevant group carries two decorations, $S$ and $+$.

**Orthochronicity in the polar decomposition.** Step 4 of that proof flags it: a boost has $\gamma\ge1$ by construction, so an antichronous $\Lambda$ can never be written as boost times rotation. It is $T$ times one that can.

**Non-compactness, and why there are no finite-dimensional unitary representations.** The $K_i$ are anti-Hermitian in the defining representation, so $\exp(-\mathrm{i}\rho\hat{\mathbf{n}}\cdot\mathbf{K})$ grows like $\mathrm{e}^{|\rho|}$ and the matrix entries of $SO^{+}(3,1)$ are unbounded. No change of basis repairs this, but the reason is subtler than a clash of Hermiticity. Suppose a finite-dimensional representation of the algebra were unitary, so that all six of $J_i,K_i$ act as Hermitian matrices. The three brackets raise no objection on their own: for Hermitian $A,B$ the commutator $[A,B]$ is *anti*-Hermitian, so each of $[J_j,J_k]=\mathrm{i}\epsilon_{jkl}J_l$ and $[K_j,K_k]=-\mathrm{i}\epsilon_{jkl}J_l$ says only that $J_l$ is Hermitian, which was the assumption. What Hermiticity really does is act on the splitting of part 5: it gives
$$
(N^{+}_i)^{\dagger}=\tfrac12\bigl(J_i+\mathrm{i}K_i\bigr)^{\dagger}=\tfrac12\bigl(J_i-\mathrm{i}K_i\bigr)=N^{-}_i ,
$$
so the adjoint carries each $\mathfrak{sl}(2,\mathbb{C})$ factor onto the *other* one — and the other one commutes with it. Now use $N^{+}_3=-\mathrm{i}[N^{+}_1,N^{+}_2]$ together with the trace identity $\operatorname{tr}\bigl([A,B]C\bigr)=\operatorname{tr}\bigl(A[B,C]\bigr)$, valid for any three matrices:
$$
\operatorname{tr}\bigl(N^{+}_3(N^{+}_3)^{\dagger}\bigr)
=\operatorname{tr}\bigl(N^{+}_3N^{-}_3\bigr)
=-\mathrm{i}\operatorname{tr}\bigl([N^{+}_1,N^{+}_2]\,N^{-}_3\bigr)
=-\mathrm{i}\operatorname{tr}\bigl(N^{+}_1\,[N^{+}_2,N^{-}_3]\bigr)=0 .
$$
The left-hand side is the sum of $|\cdot|^{2}$ over the entries of $N^{+}_3$ — **this is where finite-dimensionality is used**, since the trace has to exist — so $N^{+}_3=0$, and cycling the indices gives $N^{+}_1=N^{+}_2=0$ and then $N^{-}_i=(N^{+}_i)^{\dagger}=0$. Hence $J_i=N^{+}_i+N^{-}_i=0$ and $K_i=-\mathrm{i}(N^{+}_i-N^{-}_i)=0$: the representation of the algebra is trivial, and since $SO^{+}(3,1)$ is connected (part 3), the representation of the group is trivial too. This is the special case for $\mathfrak{so}(3,1)$ of the standard fact that a connected non-compact simple Lie group has no non-trivial finite-dimensional unitary representation. The unitary representations of physical interest are therefore infinite-dimensional, and the finite-dimensional ones — the ones that carry fields — are not unitary.

**The sign in $[K,K]$ is what does the work.** Running the previous paragraph on $\mathfrak{so}(4)$ must fail, because $\mathfrak{su}(2)\oplus\mathfrak{su}(2)$ has unitary representations in every dimension, and it does fail at exactly the step the sign controls. With $[K_j,K_k]=+\mathrm{i}\epsilon_{jkl}J_l$ the two commuting families are the *real* combinations $A^{\pm}_i=\tfrac12(J_i\pm K_i)$, not $\tfrac12(J_i\pm\mathrm{i}K_i)$, so Hermitian $J,K$ give $(A^{+}_i)^{\dagger}=A^{+}_i$ instead of $(A^{+}_i)^{\dagger}=A^{-}_i$: the adjoint fixes each factor rather than swapping them. The trace then reads $\operatorname{tr}\bigl(A^{+}_3(A^{+}_3)^{\dagger}\bigr)=-\mathrm{i}\operatorname{tr}\bigl(A^{+}_1[A^{+}_2,A^{+}_3]\bigr)=\operatorname{tr}\bigl((A^{+}_1)^{2}\bigr)$, with no commuting partner to annihilate it and no conclusion to draw. The two-dimensional example $A^{+}_i=\tfrac12\sigma_i$, $A^{-}_i=0$, that is $J_i=K_i=\tfrac12\sigma_i$, satisfies the $\mathfrak{so}(4)$ brackets with both families Hermitian.

**Complexified, not real.** Part 5 is an isomorphism of complexifications. The combinations $N^{\pm}=\tfrac12(J\pm\mathrm{i}K)$ require the imaginary unit, and no real change of basis splits $\mathfrak{so}(3,1)$: it is a *simple* real Lie algebra, isomorphic to $\mathfrak{sl}(2,\mathbb{C})$ regarded as a six-dimensional **real** algebra. Saying "$\mathfrak{so}(3,1)=\mathfrak{su}(2)\oplus\mathfrak{su}(2)$" without the word "complexified" is a false statement, and it is the statement that would be true for $\mathfrak{so}(4)$.

**Hassani's notation in part 5, and where we leave him.** :cite[Hassani]{work=hassani-2013 loc="§30.3.3, pp. 974–975"} reaches the same splitting from the real generators $\mathbf{M}=(M_{23},M_{31},M_{12})$ and $\mathbf{N}=(M_{01},M_{02},M_{03})$, which in our normalisation are $\mathrm{i}\mathbf{J}$ and $-\mathrm{i}\mathbf{K}$. His two families $\tfrac{1}{2\mathrm{i}}(\mathbf{M}+\mathrm{i}\mathbf{N})$ and $\tfrac{1}{2\mathrm{i}}(\mathbf{M}-\mathrm{i}\mathbf{N})$ — which he calls $\mathbf{J}$ and $\mathbf{K}$, our symbols for something else — are exactly our $\mathbf{N}^{-}$ and $\mathbf{N}^{+}$; we checked all four identifications on the matrices of part 4. His Casimir pair $\mathbf{M}^{2}-\mathbf{N}^{2}$, $\mathbf{M}\cdot\mathbf{N}$ is our $\mathbf{K}^{2}-\mathbf{J}^{2}$, $\mathbf{J}\cdot\mathbf{K}$: the same two invariants, the first with the opposite overall sign (in the defining representation his is $-3I$ where ours is $+3I$). Two further differences. His brackets are written for real generators and so carry no factor $\mathrm{i}$, and he keeps that form for the two complex families as well, where his own relations for $\mathbf{M}$ and $\mathbf{N}$ give the factor back; ours is the Hermitian normalisation, in which $[N^{\pm}_j,N^{\pm}_k]=\mathrm{i}\epsilon_{jkl}N^{\pm}_l$, and the difference is recorded in `verification/discrepancies.md`. And he calls $\mathfrak{so}(3,1)$ the direct sum of the two algebras without the qualifier *complexified*; by the previous paragraph that reading is the one we do not take, which is why part 5 says "after complexifying" and why this unit states the isomorphism for $\mathfrak{so}(3,1)\otimes\mathbb{C}$. The labelling of the irreducible representations by a pair of spins, which the application uses, is his and is unaffected.

**One boost is symmetric; two need not be.** $B(\boldsymbol{\beta})$ is symmetric, as both sources note. A product of two boosts in different directions is not symmetric, so by part 3 it is not a boost: the leftover rotation is unavoidable. The worked example computes it.
:::

:::method[Identifying and decomposing a Lorentz transformation]{provenance=original}
Given a real $4\times4$ matrix $\Lambda$:

1. **Is it Lorentz?** Compute $\Lambda^{\mathsf{T}}\eta\Lambda$ and compare with $\eta$. Sixteen entries, ten of them independent by symmetry.
2. **Which piece?** Read $\det\Lambda$ and $\Lambda^{0}{}_{0}$. The pair of signs names the coset: $(+,+)$ is $SO^{+}(3,1)$, $(-,+)$ is $P\,SO^{+}(3,1)$, $(+,-)$ is $PT\,SO^{+}(3,1)$, $(-,-)$ is $T\,SO^{+}(3,1)$. If the signs are not $(+,+)$, multiply by whichever of $P$, $T$, $PT$ restores them and continue with the result.
3. **Is it a pure boost?** A boost is symmetric. If $\Lambda\neq\Lambda^{\mathsf{T}}$, it is not one, and a rotation is hiding in it.
4. **Extract the boost.** From the first column set $\gamma=\Lambda^{0}{}_{0}$ and $\beta_i=\Lambda^{i}{}_{0}/\gamma$; check $\gamma=(1-|\boldsymbol{\beta}|^{2})^{-1/2}$ as an arithmetic test of step 1. Build $B(\boldsymbol{\beta})$ from the block formula, and the rapidity is $\rho=\operatorname{artanh}|\boldsymbol{\beta}|$.
5. **Extract the rotation.** $\widehat R=B(\boldsymbol{\beta})^{-1}\Lambda$, whose first row and column must come out $(1,0,0,0)$; the lower block is $R\in SO(3)$, and its angle is $\cos\theta=\tfrac12(\operatorname{tr}R-1)$ with axis the eigenvector of eigenvalue $1$.
6. **Lift to $SL(2,\mathbb{C})$ if spinors are wanted.** $A=\pm\exp\bigl(\tfrac12\rho\,\hat{\boldsymbol{\beta}}\cdot\boldsymbol{\sigma}\bigr)\exp\bigl(-\tfrac{\mathrm{i}}{2}\theta\,\hat{\mathbf{m}}\cdot\boldsymbol{\sigma}\bigr)$, with $\hat{\mathbf{m}}$ the rotation axis. The two signs are the whole content of the double cover; neither is preferred.
7. **Check.** Recover $\Lambda$ as $\tfrac12\operatorname{tr}(\sigma_{\mu}A\sigma_{\nu}A^{\dagger})$, or simply re-multiply $B(\boldsymbol{\beta})\widehat R$.
:::

:::example[Two perpendicular boosts, and the rotation they leave behind]{provenance=original}
Boost along the first axis with $\beta_1=3/5$, then along the second with $\beta_2=4/5$, so that
$$
\gamma_1=\tfrac54,\qquad \gamma_2=\tfrac53,\qquad
\rho_1=\operatorname{artanh}\tfrac35=0.6931472,\qquad \rho_2=\operatorname{artanh}\tfrac45=1.0986123 .
$$

**Step 1: the composite.** Multiplying $B(\beta_2\hat{\mathbf{e}}_2)\,B(\beta_1\hat{\mathbf{e}}_1)$ out,
$$
\Lambda=
\begin{pmatrix}
\tfrac{25}{12}&\tfrac54&\tfrac43&0\\[2pt]
\tfrac34&\tfrac54&0&0\\[2pt]
\tfrac53&1&\tfrac53&0\\[2pt]
0&0&0&1
\end{pmatrix},
\qquad
\Lambda^{\mathsf{T}}\eta\Lambda=\eta,\qquad \det\Lambda=1,\qquad \Lambda^{0}{}_{0}=\tfrac{25}{12}=2.0833333 .
$$
It is proper and orthochronous — but it is **not symmetric** ($\Lambda^{0}{}_{1}=\tfrac54$ against $\Lambda^{1}{}_{0}=\tfrac34$), so by part 3 and the last remark it is not a pure boost.

**Step 2: extract the boost.** The first column gives $\gamma=\tfrac{25}{12}$ and
$$
\boldsymbol{\beta}=\frac{1}{\gamma}\Bigl(\tfrac34,\tfrac53,0\Bigr)=\Bigl(\tfrac{9}{25},\tfrac45,0\Bigr),
\qquad |\boldsymbol{\beta}|^{2}=\frac{81}{625}+\frac{16}{25}=\frac{481}{625}=0.7696 ,
$$
and indeed $(1-481/625)^{-1/2}=(144/625)^{-1/2}=25/12$, confirming the consistency relation of step 1 of that proof. Note in passing that $\gamma=\gamma_1\gamma_2$, which is special to perpendicular boosts. With $(\gamma-1)/|\boldsymbol{\beta}|^{2}=(13/12)(625/481)=625/444$ the block formula gives
$$
B(\boldsymbol{\beta})=
\begin{pmatrix}
\tfrac{25}{12}&\tfrac34&\tfrac53&0\\[2pt]
\tfrac34&\tfrac{175}{148}&\tfrac{15}{37}&0\\[2pt]
\tfrac53&\tfrac{15}{37}&\tfrac{211}{111}&0\\[2pt]
0&0&0&1
\end{pmatrix}
=
\begin{pmatrix}
2.0833333&0.75&1.6666667&0\\
0.75&1.1824324&0.4054054&0\\
1.6666667&0.4054054&1.9009009&0\\
0&0&0&1
\end{pmatrix},
$$
symmetric and $\eta$-orthogonal, as checked directly.

**Step 3: the leftover rotation.** Inverting and multiplying,
$$
\widehat R=B(\boldsymbol{\beta})^{-1}\Lambda=
\begin{pmatrix}
1&0&0&0\\
0&\tfrac{35}{37}&-\tfrac{12}{37}&0\\
0&\tfrac{12}{37}&\tfrac{35}{37}&0\\
0&0&0&1
\end{pmatrix} ,
$$
a rotation about the third axis through the angle $\theta$ with
$$
\cos\theta=\tfrac{35}{37}=0.9459459,
\qquad
\sin\theta=\tfrac{12}{37}=0.3243243,
\qquad
\tan\theta=\tfrac{12}{35},
$$
$$
\theta=0.3302974\ \text{rad}=18.9246^{\circ} .
$$
The Pythagorean triple $(12,35,37)$ is an accident of the chosen velocities, not of the construction. This angle is the **Wigner rotation**; accumulated around a closed orbit it is the Thomas precession that :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 864"} identify as the origin of the spin-orbit factor in atomic fine structure, and its appearance here is their statement that non-collinear boosts compose into a boost plus a rotation.

**Step 4: the same number from $SL(2,\mathbb{C})$.** Repeating the calculation in the covering group, $A=\exp(\tfrac12\rho_2\sigma_2)\exp(\tfrac12\rho_1\sigma_1)$ has $\det A=1$, and $\Lambda(A)$ computed from $\tfrac12\operatorname{tr}(\sigma_{\mu}A\sigma_{\nu}A^{\dagger})$ reproduces the matrix $\Lambda$ of step 1 entry for entry. Its polar decomposition $A=HU$ has
$$
U=\begin{pmatrix}\mathrm{e}^{-\mathrm{i}\theta/2}&0\\0&\mathrm{e}^{\mathrm{i}\theta/2}\end{pmatrix},
\qquad
\cos\tfrac{\theta}{2}=0.9863939 ,
$$
and $2\arccos(0.9863939)=0.3302974$: the same angle, as it must be, and the half-angle is the visible sign that $SL(2,\mathbb{C})$ is the double cover.

**Step 5: a general formula, checked.** For two perpendicular boosts the construction above gives
$$
\tan\theta=\frac{\gamma_1\gamma_2\beta_1\beta_2}{\gamma_1+\gamma_2} ,
$$
which at our values is $\dfrac{(25/12)(12/25)}{35/12}=\dfrac{12}{35}$, as found. Repeating steps 1–3 numerically at $(\beta_1,\beta_2)=(\tfrac12,\tfrac12)$ gives $\theta=0.1433476$ against $\arctan\bigl((4/3)(1/4)/(4/\sqrt3)\bigr)=0.1433476$, and at $(\tfrac{9}{10},\tfrac13)$ gives $0.2142566$ from both routes.
:::

:::application{provenance=original}
**Electromagnetism is a two-index Lorentz tensor.** The electric and magnetic fields are not separately Lorentz objects; the antisymmetric field tensor $F^{\mu\lambda}$ of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eqs. (17.77)–(17.79), p. 866"} holds both, with $\mathbf{E}$ in the time row and $c\mathbf{B}$ in the spatial block, and it transforms with one copy of $\Lambda$ on each index. Their Eq. (17.79) carries an overall factor $\varepsilon_0$, which we drop: a constant multiple of $F$ transforms in exactly the same way, and the factor cancels in the ratios of components and in the two invariants below. Their component rules, Eqs. (17.82)–(17.83), are written in the **passive** convention: there $v$ is the velocity, along the third axis, of the transformed coordinate system relative to the original, so the matrix used is Arfken's $U(\rho)$ and not our $B_3(\rho)$. As printed they read
$$
E'_x=\gamma(E_x-vB_y),\quad E'_y=\gamma(E_y+vB_x),\quad E'_z=E_z,
$$
$$
B'_x=\gamma\bigl(B_x+\tfrac{v}{c^{2}}E_y\bigr),\quad B'_y=\gamma\bigl(B_y-\tfrac{v}{c^{2}}E_x\bigr),\quad B'_z=B_z .
$$
Since $B_3(\rho)=U(-\rho)$, the active rules are these with $v$ replaced by $-v$; we keep the active convention declared above, so every sign below is the $-v$ one.

Take a lab field that is purely electric, $\mathbf{E}=(E_0,0,0)$ and $\mathbf{B}=\mathbf{0}$, and boost it actively along the third axis with $\beta=3/5$, $\gamma=5/4$, $\beta\gamma=3/4$. Evaluating $F'=\Lambda F\Lambda^{\mathsf{T}}$ with $\Lambda=B_3(\operatorname{artanh}\tfrac35)$ and $F$ the matrix of Eq. (17.79) gives
$$
\mathbf{E}'=(1.25\,E_0,0,0),\qquad c\mathbf{B}'=(0,+0.75\,E_0,0) ,
$$
a magnetic field out of nothing. (In Arfken's passive convention the same arithmetic returns $cB'_y=-0.75\,E_0$; the magnitude is the one he prints and only the sign tracks the convention.) The two Lorentz invariants of $F$ survive the change:
$$
|\mathbf{E}'|^{2}-c^{2}|\mathbf{B}'|^{2}=(1.25^{2}-0.75^{2})E_0^{2}=1.0\,E_0^{2}=|\mathbf{E}|^{2}-c^{2}|\mathbf{B}|^{2},
\qquad
\mathbf{E}'\cdot\mathbf{B}'=0=\mathbf{E}\cdot\mathbf{B} .
$$
Because $|\mathbf{E}|^{2}-c^{2}|\mathbf{B}|^{2}>0$ is invariant, no boost can remove this electric field, and no boost can turn a light wave (where both invariants vanish) into a static field. The coordinate-free statement of the same facts is in :ref[the Hodge star and Maxwell's equations]{to=geom.hodge-star-maxwell}.

**Spin, and why half-integers are allowed.** Part 6 says that the symmetry group acting on quantum states is $SL(2,\mathbb{C})$, not $SO^{+}(3,1)$: a state need only return to itself up to a phase, so a double-valued representation of the Lorentz group is a single-valued representation of its cover. The two-component objects on which $SL(2,\mathbb{C})$ acts by $A$ and by $(A^{\dagger})^{-1}$ are the two kinds of Weyl spinor, and part 5 labels every finite-dimensional representation by the pair of spins $(j_1,j_2)$ of the two commuting $\mathfrak{su}(2)$ factors: $(0,0)$ is a scalar, $(\tfrac12,0)$ and $(0,\tfrac12)$ the Weyl spinors, their sum the Dirac spinor of :ref[Clifford algebras and spinors]{to=group.clifford-algebras}, and $(\tfrac12,\tfrac12)$ the four-vector — which is the defining representation of this unit, consistent with its Casimir value $\mathbf{J}^{2}-\mathbf{K}^{2}=2\bigl(j_1(j_1+1)+j_2(j_2+1)\bigr)I=3I$, verified directly from the matrices of part 4.

**What the four pieces mean physically.** Electromagnetism and gravity are invariant under all of $O(3,1)$; the weak interaction is not, violating $P$ and $CP$ and so distinguishing the cosets. Hassani's classification of the five regions around an event — inside and on the future and past light cones, and "elsewhere" — is preserved exactly by the orthochronous transformations, which is the group-theoretic content of causality: no observer related to another by a proper orthochronous transformation disagrees about which of two causally connected events came first.
:::

:::note[What lies just outside]{provenance=adapted src="hassani-2013:p. 707 and Eqs. (29.43)–(29.45), p. 943; arfken-2013:p. 862"}
Adjoining the four translations gives the **Poincaré group** $P(3,1)$, the inhomogeneous Lorentz group: :cite[Hassani]{work=hassani-2013 loc="Eq. (29.43), p. 943"} represents its elements as $5\times5$ matrices $\bigl(\begin{smallmatrix}\Lambda&u\\0&1\end{smallmatrix}\bigr)$ and obtains the algebra
$$
[M_{\mu\nu},P_{\kappa}]=\eta_{\mu\kappa}P_{\nu}-\eta_{\nu\kappa}P_{\mu},
\qquad
[P_{\mu},P_{\nu}]=0,
$$
alongside Eq. (29.42). :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 862"} reserve "homogeneous Lorentz group" for the group of this unit when the distinction matters. The Poincaré algebra is not semisimple, so its invariants are not built by the recipe of :ref[Casimir operators]{to=group.casimir-operators}, which treats that case separately; the two invariants that replace the quadratic one there are what the words *mass* and *spin* name.
:::
