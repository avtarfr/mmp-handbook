---
id: group.angular-momentum
title: Angular momentum algebra
kind: theorem
level: core
summary: From the commutation relations $[J_j,J_k]=i\epsilon_{jkl}J_l$ alone, derives the whole spectrum of angular momentum — $J^2$ has eigenvalue $j(j+1)$ with $2j$ a non-negative integer, $J_z$ runs in unit steps from $-j$ to $j$, and the ladder operators act with coefficients $\sqrt{j(j+1)-m(m\pm1)}$ — and shows by an explicit counterexample which hypothesis forces the ladder to terminate.
prereqs: [group.so3-su2, group.lie-groups-algebras, linalg.inner-product-spaces, linalg.hermitian-spectral-theorem, linalg.eigenvalues-eigenvectors]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§16.1, pp. 776–782: the commutators $[L_j,L_k]=i\\epsilon_{jkn}L_n$ and $[\\mathbf{L}^2,L_j]=0$, Eq. (16.11), p. 776; the ladder operators $L_\\pm=L_x\\pm iL_y$ and the commutators $[L_z,L_\\pm]=\\pm L_\\pm$, Eqs. (16.15)–(16.19), p. 777; the rearrangement $\\mathbf{L}^2=L_-L_++\\tfrac12[L_+,L_-]+L_z^2$ and $[L_+,L_-]=2L_z$, giving $L_-L_+=\\mathbf{L}^2-L_z^2-L_z$, Eqs. (16.20)–(16.22), pp. 778; the norm computations $\\langle L_\\pm\\psi_l^m|L_\\pm\\psi_l^m\\rangle=\\lambda_l-m^2\\mp m$ and the coefficients of Eq. (16.25), pp. 778–779; the termination argument giving $\\lambda_l=l(l+1)$, $m_{\\min}=-l$, and $l$ integral or half-integral with $2l+1$ values of $m$, pp. 778–779; the spin-$\\tfrac12$ matrices $S_i=\\tfrac12\\sigma_i$ with $\\mathbf{S}^2=\\tfrac34 1$, Example 16.1.2, pp. 780–781; the summary list, Eqs. (16.28)–(16.31), p. 782"
    pages: "776-782"
    role: the statement of the theorem in the generality of any operators obeying the commutation relations, the ladder-operator route, the identity $J_\mp J_\pm = J^2-J_z^2\mp J_z$, the termination argument, and the Condon-Shortley phase convention for the matrix elements
  - work: rhb-2006
    loc: "§19.2.1, pp. 658–663: the commutators $[L_x,L_y]=i\\hbar L_z$ obtained from the differential operators, Eqs. (19.26)–(19.27), pp. 658–659; $[\\mathbf{L}^2,L_i]=0$, Eq. (19.29), p. 660; the ladder operators $U=L_x+iL_y$, $D=L_x-iL_y$ with $UD=\\mathbf{L}^2-L_z^2+\\hbar L_z$, $DU=\\mathbf{L}^2-L_z^2-\\hbar L_z$, $[L_z,U]=\\hbar U$, $[L_z,D]=-\\hbar D$, Eqs. (19.30)–(19.33), p. 660; the two-ended termination argument giving $c=\\tfrac12 n\\hbar$ and the spectrum $\\ell\\hbar,(\\ell-1)\\hbar,\\dots,-\\ell\\hbar$ with $a=\\ell(\\ell+1)\\hbar^2$ over $2\\ell+1$ states, p. 662; the normalisation coefficients, Eqs. (19.34)–(19.35), p. 663"
    pages: "658-663"
    role: a second derivation of the spectrum, with $\hbar$ kept explicitly and with the quantisation obtained by counting the steps between the top and bottom of the ladder; the remark that only the commutator structure is used
  - work: hassani-2013
    loc: "§30.3.2, Example 30.3.6, p. 970: the structure constants $c_{ij}^{\\,k}=i\\epsilon_{ijk}$ of $SO(3)$, the Cartan metric $g_{ij}=2\\delta_{ij}$, the identification of $\\mathbf{L}^2=L_1^2+L_2^2+L_3^2$ as the quadratic Casimir, the rank-one statement that $\\mathbf{L}^2$ is the only Casimir operator, and the conclusion that the irreducible representations $T^{(j)}$ are labelled by $j$ integer or half-odd-integer with $\\dim T^{(j)}=2j+1$; §30.3.3, p. 972, the same labelling for $\\mathfrak{so}(3)$ and the finite-dimensionality from compactness of $SO(3)$"
    pages: "969-972"
    role: the reading of $J^2$ as the quadratic Casimir of a rank-one algebra, which is why a single label $j$ classifies the irreducible representations and a single label $m$ distinguishes the states within one
---

:::definition[An angular momentum]{provenance=adapted src="arfken-2013:Eqs. (16.28)–(16.29), p. 782"}
Let $V$ be a complex vector space with an inner product (:ref[inner-product spaces]{to=linalg.inner-product-spaces}), linear in the second slot in the physicists' way, so that $\langle u|Au\rangle = \langle A^{\dagger}u|u\rangle$. An **angular momentum** on $V$ is a triple $J_1,J_2,J_3$ of Hermitian operators on $V$ satisfying
$$
[J_j,J_k] = i\,\epsilon_{jkl}\,J_l \qquad (j,k = 1,2,3),
$$
with $\epsilon$ the Levi-Civita symbol and summation over $l$. We write $J_x,J_y,J_z$ for $J_1,J_2,J_3$ and set
$$
J^2 = J_1^2+J_2^2+J_3^2, \qquad J_{\pm} = J_x \pm i J_y .
$$
Units with $\hbar = 1$ are used throughout; to restore them, multiply every $J_k$ by $\hbar$, so that $[J_x,J_y] = i\hbar J_z$ and $J^2$ has the dimensions of $\hbar^2$, as in :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Eq. (19.27), p. 659"}.

Nothing else is assumed: $V$ may be any space on which three such operators act. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 782"} stress this point — beyond the commutation relations the operators are arbitrary, and the three standard realisations are the orbital angular momentum $\mathbf{L} = -i\,\mathbf{r}\times\nabla$ on functions, the spin $\mathbf{S} = \tfrac12\boldsymbol{\sigma}$ on $\mathbb{C}^2$ of :ref[the rotation group and SU(2)]{to=group.so3-su2}, and sums of these.

By that unit, the relations above are exactly the structure constants of $\mathfrak{so}(3)\cong\mathfrak{su}(2)$ in the Hermitian normalisation, so "an angular momentum on $V$" and "a representation of the Lie algebra of the rotation group on $V$" are the same thing, with the group element $\exp(-i\theta\,\mathbf{n}\cdot\mathbf{J})$ implementing the rotation by $\theta$ about $\mathbf{n}$.

$J_{\pm}$ are **ladder operators**. They are not Hermitian; rather $(J_+)^{\dagger} = J_-$, since $J_x$ and $J_y$ are Hermitian. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 660"} write them $U$ and $D$ for "up" and "down".
:::

:::statement[The spectrum of an angular momentum]{provenance=adapted src="arfken-2013:pp. 778–779 and Eqs. (16.28)–(16.31), p. 782; rhb-2006:p. 662 and Eqs. (19.34)–(19.35), p. 663; hassani-2013:Example 30.3.6, p. 970"}
Let $J_1,J_2,J_3$ be an angular momentum on a finite-dimensional complex inner-product space $V\neq\{0\}$. Then:

1. **$J^2$ is a Casimir operator.** $[J^2,J_k] = 0$ for $k=1,2,3$, so $J^2$ and $J_z$ have a common eigenbasis. Moreover
$$
[J_z,J_{\pm}] = \pm J_{\pm}, \qquad [J_+,J_-] = 2J_z, \qquad J_{\mp}J_{\pm} = J^2 - J_z^2 \mp J_z .
$$

2. **Quantisation.** If $V$ is irreducible — it has no proper non-zero subspace invariant under all three $J_k$ — then there is a number $j$ with $2j \in \{0,1,2,3,\dots\}$ such that
$$
J^2 = j(j+1)\,\mathrm{Id}_V, \qquad \dim V = 2j+1 ,
$$
and $V$ has an orthonormal basis $|j,m\rangle$ with $m = -j, -j+1,\dots, j-1, j$ and
$$
J_z|j,m\rangle = m\,|j,m\rangle, \qquad J^2|j,m\rangle = j(j+1)\,|j,m\rangle .
$$
In particular the eigenvalues of $J_z$ are all integers or all half-odd-integers, never mixed, and they are non-degenerate within one irreducible $V$.

3. **Matrix elements.** With the phases fixed by the **Condon-Shortley convention** — the coefficients below are taken real and non-negative —
$$
J_{\pm}|j,m\rangle = \sqrt{\,j(j+1) - m(m\pm1)\,}\;|j,m\pm1\rangle
= \sqrt{(j\mp m)(j\pm m+1)}\;|j,m\pm1\rangle ,
$$
so that $J_+|j,j\rangle = 0$ and $J_-|j,-j\rangle = 0$. Equivalently
$$
\langle j,m'|J_{\pm}|j,m\rangle = \sqrt{(j\mp m)(j\pm m+1)}\,\delta_{m',m\pm1},
\qquad
\langle j,m'|J_z|j,m\rangle = m\,\delta_{m'm} ,
$$
and $J_x = \tfrac12(J_++J_-)$, $J_y = \tfrac{1}{2i}(J_+-J_-)$ supply the remaining matrices.

4. **Decomposition.** A general finite-dimensional $V$ is an orthogonal direct sum of irreducible subspaces, so it is described by the list of its $j$ values with multiplicities.

:cite[Hassani]{work=hassani-2013 loc="Example 30.3.6, p. 970"} reaches parts 2 and 4 from the Lie-theoretic side: $\mathfrak{so}(3)$ has rank one, $J^2$ is its one quadratic Casimir, and by Chevalley's theorem its eigenvalue alone labels the irreducible representations, the $j$th having dimension $2j+1$.
:::

:::idea{provenance=original}
Only two facts drive everything, and both are one-line consequences of the commutation relations.

The first is that $J_{\pm}$ shifts the $J_z$ eigenvalue by $\pm1$ and leaves the $J^2$ eigenvalue alone. That is the content of $[J_z,J_\pm] = \pm J_\pm$ and $[J^2,J_\pm]=0$: applying $J_+$ to an eigenvector moves it one rung up a ladder of states all sharing the same $J^2$.

The second is that the ladder cannot be infinite, and this is where Hermiticity enters. The number $\|J_+v\|^2$ is a norm, hence non-negative, and the identity $J_-J_+ = J^2 - J_z^2 - J_z$ evaluates it as $\lambda - m^2 - m$ for a state of $J^2$-eigenvalue $\lambda$ and $J_z$-eigenvalue $m$. That expression turns negative for large $m$, so the ladder must stop; and it can only stop by the coefficient vanishing exactly, which pins $\lambda = m_{\max}(m_{\max}+1)$. The same argument at the bottom gives $\lambda = m_{\min}(m_{\min}-1)$, and the two together force $m_{\min} = -m_{\max}$. Since the rungs are spaced by $1$, the distance $2m_{\max}$ from bottom to top is a whole number — which is why $j$ is an integer or a half-integer and nothing else.

Everything after that is bookkeeping: the same norm computation that forced termination also *supplies* the coefficients.
:::

:::proof[Part 1: the commutator identities]{provenance=adapted src="arfken-2013:Eqs. (16.11), (16.16)–(16.17), (16.20)–(16.22), pp. 776–778"}
**Step 1: $[J^2,J_k]=0$.** Use $[AB,C] = A[B,C]+[A,C]B$. For $k=z$,
$$
[J^2,J_z] = [J_x^2,J_z]+[J_y^2,J_z]+[J_z^2,J_z]
= J_x[J_x,J_z] + [J_x,J_z]J_x + J_y[J_y,J_z] + [J_y,J_z]J_y .
$$
Now $[J_x,J_z] = -iJ_y$ and $[J_y,J_z] = iJ_x$, so the four terms are $-iJ_xJ_y - iJ_yJ_x + iJ_yJ_x + iJ_xJ_y = 0$. The cases $k=x,y$ follow by cycling the labels, which the relations permit. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 660"} carry out the same cancellation.

**Step 2: $[J_z,J_{\pm}] = \pm J_{\pm}$.**
$$
[J_z,J_\pm] = [J_z,J_x] \pm i[J_z,J_y] = iJ_y \pm i(-iJ_x) = \pm\bigl(J_x\pm iJ_y\bigr) = \pm J_\pm .
$$

**Step 3: $[J_+,J_-] = 2J_z$.** Expanding, $[J_x+iJ_y,\;J_x-iJ_y] = -i[J_x,J_y] + i[J_y,J_x] = -2i[J_x,J_y] = -2i(iJ_z) = 2J_z$.

**Step 4: $J_{\mp}J_{\pm} = J^2 - J_z^2 \mp J_z$.** Multiply out:
$$
J_-J_+ = (J_x-iJ_y)(J_x+iJ_y) = J_x^2+J_y^2 + i[J_x,J_y] = (J^2 - J_z^2) - J_z ,
$$
using $[J_x,J_y]=iJ_z$ in the last step; the sign of the $iJ_y$ terms reverses for $J_+J_-$, giving $J^2-J_z^2+J_z$. **Here the definition $J^2 = J_x^2+J_y^2+J_z^2$ is used** and nothing else.

**Step 5: $[J^2,J_\pm]=0$** is immediate from step 1 and the definition of $J_\pm$. $\square$
:::

:::proof[Parts 2 and 3: the spectrum and the matrix elements]{provenance=adapted src="arfken-2013:pp. 778–779; rhb-2006:p. 662"}
Let $V$ be finite-dimensional, non-zero and irreducible.

**Step 1: a simultaneous eigenvector exists.** $J^2$ is Hermitian, being a sum of squares of Hermitian operators, so by the :ref[spectral theorem for Hermitian matrices]{to=linalg.hermitian-spectral-theorem} it has an eigenvalue $\lambda$, necessarily real, with eigenspace $W\neq\{0\}$. By step 1 of part 1 each $J_k$ maps $W$ into itself, so $W$ is invariant under all three; irreducibility forces $W = V$, that is
$$
J^2 = \lambda\,\mathrm{Id}_V .
$$
Also $\lambda\ge0$, since $\langle v|J^2v\rangle = \|J_xv\|^2+\|J_yv\|^2+\|J_zv\|^2 \ge 0$. Now $J_z$ is Hermitian on $V\ne\{0\}$, so it has a real eigenvalue $m_0$ with a unit eigenvector $v_0$.

**Step 2: the ladder.** Let $v$ be a unit vector with $J_zv = mv$. Then by step 2 of part 1,
$$
J_z\bigl(J_\pm v\bigr) = J_\pm J_z v \pm J_\pm v = (m\pm1)\,J_\pm v ,
$$
so $J_\pm v$ is either zero or a $J_z$-eigenvector of eigenvalue $m\pm1$. It remains in the same $J^2$-eigenspace because $J^2$ is a multiple of the identity.

**Step 3: the key norm.** Using $(J_+)^{\dagger}=J_-$ and step 4 of part 1,
$$
\|J_+v\|^2 = \langle J_+v|J_+v\rangle = \langle v|J_-J_+v\rangle = \langle v|(J^2-J_z^2-J_z)v\rangle = \lambda - m^2 - m ,
$$
and symmetrically
$$
\|J_-v\|^2 = \lambda - m^2 + m .
$$
**Here Hermiticity of $J_x$ and $J_y$ is used**, to identify $(J_+)^{\dagger}$ with $J_-$; without it the left-hand sides are not norms and the inequalities below are unavailable.

**Step 4: the ladder terminates at both ends.** Starting from $v_0$ and applying $J_+$ repeatedly produces eigenvectors of eigenvalues $m_0, m_0+1, m_0+2,\dots$ as long as they are non-zero. Eigenvectors of a Hermitian operator for distinct eigenvalues are orthogonal, hence independent, so in a finite-dimensional $V$ the process must produce zero after finitely many steps. (Equivalently and without using finite dimension: $\lambda - m^2 - m \ge 0$ bounds $m$ above.) Let $m_{\max}$ be the largest $m$ reached, with unit eigenvector $v_{\max}$, so $J_+v_{\max}=0$ and by step 3
$$
\lambda = m_{\max}(m_{\max}+1) .
$$
The same argument downwards gives a smallest $m_{\min}$ with $J_-v_{\min}=0$ and
$$
\lambda = m_{\min}(m_{\min}-1) .
$$

**Step 5: $m_{\min} = -m_{\max}$, and $2m_{\max}$ is a non-negative integer.** Write $j = m_{\max}$, so $\lambda = j(j+1)$ with $j \ge 0$ (the other root of $\lambda = x(x+1)$ with $\lambda\ge0$ is negative, and $m_{\max}\ge m_{\min}$ forces the non-negative one). Solving $m_{\min}(m_{\min}-1) = j(j+1)$ gives $m_{\min} = -j$ or $m_{\min} = j+1$; the latter exceeds $m_{\max}$ and is impossible, so $m_{\min} = -j$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="pp. 778–779"} dispose of the spurious root the same way. Since the rungs from $m_{\min}$ to $m_{\max}$ are spaced by exactly $1$, their number is $m_{\max}-m_{\min}+1 = 2j+1$, a positive integer; hence $2j$ is a non-negative integer and $j\in\{0,\tfrac12,1,\tfrac32,\dots\}$.

:cite[Riley, Hobson and Bence]{work=rhb-2006 loc="p. 662"} obtain the quantisation by a direct count instead: if the top eigenvalue is $c$ and the bottom is reached after $n$ lowerings, then $c = m_{\max}$ and $c-n = m_{\min}$, and equating the two expressions for $\lambda$ gives $c^2+c = (c-n)^2-(c-n)$, which simplifies to $2c(n+1) = n(n+1)$ and hence $c = \tfrac12 n$. The integer $n$ is the number of steps; our $2j$ is their $n$.

**Step 6: the states span $V$, and the coefficients.** Define
$$
|j,j\rangle = v_{\max}, \qquad |j,m-1\rangle = \frac{1}{\sqrt{\lambda - m^2+m}}\;J_-|j,m\rangle \quad (m = j, j-1,\dots,-j+1),
$$
which is legitimate because step 3 makes the denominator the norm of $J_-|j,m\rangle$, positive for $m>-j$. These $2j+1$ vectors are unit vectors, mutually orthogonal (distinct $J_z$-eigenvalues), and their span is invariant under $J_z$, under $J_-$ by construction, and under $J_+$ because $J_+J_-|j,m\rangle = (\lambda-m^2+m)|j,m\rangle$ after re-indexing; hence invariant under $J_x$ and $J_y$ too. Irreducibility forces the span to be all of $V$, so $\dim V = 2j+1$ and each $J_z$-eigenvalue occurs once.

By construction $J_-|j,m\rangle = \sqrt{\lambda-m^2+m}\,|j,m-1\rangle = \sqrt{j(j+1)-m(m-1)}\,|j,m-1\rangle$, and applying $J_+$ to this identity and using $J_+J_- = J^2-J_z^2+J_z$ gives $J_+|j,m-1\rangle = \sqrt{j(j+1)-m(m-1)}\,|j,m\rangle$, which is the stated formula with $m-1$ in place of $m$. The two forms of the coefficient agree because
$$
j(j+1)-m(m\pm1) = (j\mp m)(j\pm m+1) ,
$$
as expanding both sides confirms. The choice of positive square roots is the **Condon-Shortley convention**; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 779"} note that it is a choice of the relative signs of the $|j,m\rangle$, made so that the spherical harmonics of :ref[spherical harmonics]{to=spec.spherical-harmonics} come out with their tabulated signs.

**Part 4.** If $V$ is not irreducible it has a non-zero invariant subspace $W\subsetneq V$. Because every $J_k$ is Hermitian, $W^{\perp}$ is invariant too: for $u\in W^{\perp}$ and $w\in W$, $\langle w|J_ku\rangle = \langle J_kw|u\rangle = 0$ since $J_kw\in W$. So $V = W\oplus W^{\perp}$ orthogonally, with both summands invariant, and induction on the dimension finishes the decomposition. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Hermiticity is the hypothesis that quantises the spectrum**, and it enters only in step 3, through $(J_+)^{\dagger}=J_-$. Dropping it destroys the conclusion completely. On the space with basis $\{e_n : n\in\mathbb{Z}\}$ fix complex numbers $\lambda$ and $\mu$ and define
$$
J_ze_n = (\mu+n)e_n, \qquad J_+e_n = e_{n+1}, \qquad J_-e_n = \bigl(\lambda-(\mu+n)(\mu+n-1)\bigr)e_{n-1} .
$$
Then $[J_z,J_\pm] = \pm J_\pm$ by inspection, and
$$
(J_+J_- - J_-J_+)e_n = \Bigl[\bigl(\lambda-(\mu+n)(\mu+n-1)\bigr) - \bigl(\lambda-(\mu+n+1)(\mu+n)\bigr)\Bigr]e_n = 2(\mu+n)e_n = 2J_ze_n ,
$$
so $[J_+,J_-]=2J_z$ and the full set of angular momentum relations holds for $J_x = \tfrac12(J_++J_-)$, $J_y = \tfrac1{2i}(J_+-J_-)$, $J_z$. One checks likewise that $J_-J_++J_z^2+J_z = \lambda\,\mathrm{Id}$, so "$J^2$" is the constant $\lambda$ — an *arbitrary complex number*, not of the form $j(j+1)$ with $2j$ an integer — and the ladder never terminates in either direction. No inner product on this space can make all three operators Hermitian, and the reason is exactly the step that is missing: were they Hermitian, $J_z$ would have real eigenvalues, forcing $\mu$ real, and $J^2 = \lambda\,\mathrm{Id}$ would be Hermitian, forcing $\lambda$ real; but then
$$
\|J_+e_n\|^2 = \langle e_n|J_-J_+e_n\rangle = \bigl(\lambda-(\mu+n)(\mu+n+1)\bigr)\,\|e_n\|^2
$$
is negative for all large $n$, which is impossible.
- **Finite dimension** is used in step 4 to stop the ladder, and in step 6 to conclude that the states span. It can be traded for compactness of the group — :cite[Hassani]{work=hassani-2013 loc="§30.3.3, p. 972"} notes that the irreducible representations of $\mathfrak{so}(3)$ are finite-dimensional because $SO(3)$ is compact — or for the boundedness of $\lambda-m^2-m$ noted parenthetically in step 4, which is what one uses for the infinite-dimensional spaces of quantum mechanics. There the operators are unbounded and the correct statement needs the domain conditions of :ref[symmetric and self-adjoint operators]{to=funcan.symmetric-self-adjoint}; the algebra above is then valid on a suitable dense invariant domain.
- **Irreducibility** is what makes $J^2$ a *number* in step 1. Without it, $J^2$ is only block-diagonal, and part 4 says that the general case is a direct sum of the irreducible ones — so one does not lose anything, only the right to speak of "the" value of $j$.
- **Half-integer $j$ is permitted by the algebra and excluded by geometry.** Nothing in the proof rules out $j=\tfrac12$. What rules it out for *orbital* angular momentum is that $L_z = -i\,\partial/\partial\varphi$ acting on single-valued functions on the sphere has eigenfunctions $e^{im\varphi}$ with $m$ an integer. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 779"} make the same distinction: the half-integral multiplets are consistent with the commutation rules but cannot be realised as functions in three-dimensional space. In the language of :ref[the rotation group and SU(2)]{to=group.so3-su2}, half-integer $j$ gives a representation of $SU(2)$ that is not a representation of $SO(3)$.
- **$\hbar$.** With units restored, $J^2$ has eigenvalue $j(j+1)\hbar^2$, $J_z$ has $m\hbar$, and the ladder coefficients carry one factor of $\hbar$. The quantum number $j$ is dimensionless; $\hbar$ never appears inside a square root in a way that could change the arithmetic.
- **The two ends of the ladder must be consistent.** It is the *pair* of conditions in step 4 that forces quantisation. A single one would only relate $\lambda$ to one endpoint and would leave $j$ arbitrary; the integrality comes from the two endpoints being separated by a whole number of unit steps.
:::

:::method[Building the matrices of a spin-$j$ multiplet]{provenance=original}
To write down the $(2j+1)\times(2j+1)$ matrices for a given $j$:

1. **Order the basis** $|j,j\rangle, |j,j-1\rangle,\dots,|j,-j\rangle$, so that row and column $k$ (counting from $1$) correspond to $m = j-k+1$.
2. **$J_z$ is diagonal** with entries $j, j-1,\dots,-j$.
3. **$J_+$ is strictly upper bidiagonal**: its only non-zero entries sit just above the diagonal, in column $k$ and row $k-1$, with value $\sqrt{(j-m)(j+m+1)}$ where $m = j-k+1$ is the $m$ of column $k$. Equivalently, read off the numbers $\sqrt{2j},\sqrt{2(2j-1)},\sqrt{3(2j-2)},\dots$ from the top.
4. **$J_- = (J_+)^{\mathsf{T}}$**, since the coefficients are real; it is strictly lower bidiagonal with the same numbers.
5. **$J_x = \tfrac12(J_++J_-)$ and $J_y = \tfrac{1}{2i}(J_+-J_-)$**, so $J_x$ is real symmetric tridiagonal with zero diagonal and $J_y$ is purely imaginary.
6. **Check.** Verify $J^2 = j(j+1)I$, verify $[J_x,J_y] = iJ_z$ on one entry, and verify $\mathrm{tr}\,J_z^2 = \tfrac13 j(j+1)(2j+1)$, which is the sum $\sum_{m=-j}^{j}m^2$.
7. **For a rotation**, exponentiate: $\exp(-i\theta\,\mathbf{n}\cdot\mathbf{J})$ gives the Wigner matrices of :ref[rotation matrices of angular momentum]{to=group.wigner-d-matrices}; for $\mathbf{n}=\mathbf{e}_3$ this is just the diagonal matrix $\mathrm{diag}(e^{-ij\theta},\dots,e^{ij\theta})$.
:::

:::example[The spin-$\tfrac32$ multiplet, built from the commutators alone]{provenance=original}
Take $j = \tfrac32$, so $\dim V = 2j+1 = 4$ and the basis is $|{\tfrac32},{\tfrac32}\rangle, |{\tfrac32},{\tfrac12}\rangle, |{\tfrac32},{-\tfrac12}\rangle, |{\tfrac32},{-\tfrac32}\rangle$ in that order.

**Step 1: the ladder coefficients.** With $j(j+1) = \tfrac32\cdot\tfrac52 = \tfrac{15}{4}$, the formula $\sqrt{j(j+1)-m(m-1)}$ for $J_-$ gives, for $m = \tfrac32,\tfrac12,-\tfrac12$,
$$
\sqrt{\tfrac{15}{4}-\tfrac32\cdot\tfrac12} = \sqrt{3},
\qquad
\sqrt{\tfrac{15}{4}-\tfrac12\cdot\bigl(-\tfrac12\bigr)} = \sqrt{4} = 2,
\qquad
\sqrt{\tfrac{15}{4}-\bigl(-\tfrac12\bigr)\bigl(-\tfrac32\bigr)} = \sqrt{3} .
$$

**Step 2: the matrices.**
$$
J_z = \tfrac12\begin{pmatrix}3&&&\\&1&&\\&&-1&\\&&&-3\end{pmatrix},
\qquad
J_+ = \begin{pmatrix}0&\sqrt3&0&0\\0&0&2&0\\0&0&0&\sqrt3\\0&0&0&0\end{pmatrix},
\qquad
J_- = J_+^{\mathsf{T}} ,
$$
$$
J_x = \frac12\begin{pmatrix}0&\sqrt3&0&0\\ \sqrt3&0&2&0\\ 0&2&0&\sqrt3\\ 0&0&\sqrt3&0\end{pmatrix},
\qquad
J_y = \frac{i}{2}\begin{pmatrix}0&-\sqrt3&0&0\\ \sqrt3&0&-2&0\\ 0&2&0&-\sqrt3\\ 0&0&\sqrt3&0\end{pmatrix}.
$$

**Step 3: three checks.**

- $J^2 = J_x^2+J_y^2+J_z^2$. The $(1,1)$ entry is $\tfrac14\cdot3 + \tfrac14\cdot3 + \tfrac94 = \tfrac34+\tfrac34+\tfrac94 = \tfrac{15}{4}$, and carrying out the full multiplication gives $J^2 = \tfrac{15}{4}I$ exactly, as $j(j+1) = \tfrac{15}{4}$ requires.
- $[J_x,J_y] = iJ_z$. The commutator comes out diagonal with entries $\tfrac{3i}{2},\tfrac{i}{2},-\tfrac{i}{2},-\tfrac{3i}{2}$, which is $i$ times the diagonal of $J_z$. The $(1,1)$ entry, for instance, is $(J_xJ_y)_{11}-(J_yJ_x)_{11} = \tfrac{\sqrt3}{2}\cdot\tfrac{\sqrt3 i}{2} - \bigl(-\tfrac{\sqrt3 i}{2}\bigr)\cdot\tfrac{\sqrt3}{2} = \tfrac{3i}{4}+\tfrac{3i}{4} = \tfrac{3i}{2} = i\cdot\tfrac32$.
- $\mathrm{tr}\,J_z^2 = 2\bigl(\tfrac94+\tfrac14\bigr) = 5$, which matches $\tfrac13 j(j+1)(2j+1) = \tfrac13\cdot\tfrac32\cdot\tfrac52\cdot4 = 5$.

**Step 4: a number to check the ladder against.** Climbing the whole ladder from the top in one go,
$$
(J_-)^3\,\bigl|{\tfrac32},{\tfrac32}\bigr\rangle = \sqrt3\cdot2\cdot\sqrt3\;\bigl|{\tfrac32},{-\tfrac32}\bigr\rangle = 6\,\bigl|{\tfrac32},{-\tfrac32}\bigr\rangle ,
$$
and indeed the matrix $(J_-)^3$ has a single non-zero entry, the $(4,1)$ entry $6$. A fourth application gives zero, as it must: $J_-|{\tfrac32},{-\tfrac32}\rangle = 0$.

**Step 5: the spectrum of $J_x$ is the same as that of $J_z$.** It has to be, since $J_x$ is carried to $J_z$ by the rotation of :ref[the rotation group and SU(2)]{to=group.so3-su2} that takes $\mathbf{e}_1$ to $\mathbf{e}_3$, and conjugation preserves eigenvalues. Computing the characteristic polynomial of the matrix $J_x$ above gives
$$
\det(J_x - tI) = t^4 - \tfrac52 t^2 + \tfrac{9}{16} = \bigl(t^2-\tfrac94\bigr)\bigl(t^2-\tfrac14\bigr) ,
$$
with roots $\pm\tfrac32, \pm\tfrac12$ — the same four numbers. A measurement of the spin component along any axis gives one of $\pm\tfrac32,\pm\tfrac12$, and only the probabilities depend on the axis.

**Step 6: the special case $j=\tfrac12$.** Running the same recipe with $j=\tfrac12$ gives $J_+ = \bigl(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\bigr)$, $J_z = \tfrac12\bigl(\begin{smallmatrix}1&0\\0&-1\end{smallmatrix}\bigr)$ and $J_k = \tfrac12\sigma_k$, with $J^2 = \tfrac34 I$ — :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Example 16.1.2, pp. 780–781"} spinor example, and the Pauli matrices of :ref[the rotation group and SU(2)]{to=group.so3-su2} recovered from the commutation relations with no geometry at all.
:::

:::application{provenance=original}
**Atomic and molecular spectra.** The electronic states of an atom are labelled by $j$ and $m$ because the Hamiltonian commutes with $\mathbf{J}$; the $2j+1$ states of a level are degenerate until a field singles out an axis. In the Zeeman effect a magnetic field $B\mathbf{e}_3$ adds $\gamma B J_z$ to the Hamiltonian, splitting the level into $2j+1$ equally spaced lines, and simply counting those lines measures $j$. This is the experiment that forced half-integer $j$ on physics: silver atoms in a Stern-Gerlach apparatus split into two beams, not three.

**Magnetic resonance and quantum control.** Nuclear magnetic resonance, electron spin resonance and magnetic-resonance imaging all work in a single $j$-multiplet, usually $j=\tfrac12$ or $j=\tfrac32$ (for quadrupolar nuclei), and every pulse sequence is a product of operators $\exp(-i\theta\,\mathbf{n}\cdot\mathbf{J})$ built from the matrices of the method above. The ladder coefficients are exactly the transition amplitudes between adjacent levels and therefore fix the relative line intensities.

**Quantum information.** A spin-$j$ system is a $(2j+1)$-level "qudit"; the matrices of the example are the standard generators used to describe its gates. The $j=\tfrac12$ case is the qubit, and the fact that the spectrum of $\mathbf{n}\cdot\mathbf{J}$ is independent of $\mathbf{n}$ (step 5 of the example) is why any measurement direction yields the same set of outcomes with different probabilities — the geometry of the Bloch sphere.

**Selection rules.** Because the components of a vector operator shift $m$ by $0$ or $\pm1$ and nothing else, only certain transitions have non-zero amplitude. Turning that observation into a theorem — with every matrix element of a tensor operator reduced to a single number times a Clebsch-Gordan coefficient — is the Wigner-Eckart theorem of :ref[spherical tensors and the Wigner-Eckart theorem]{to=group.wigner-eckart}, and the coupling machinery it needs is built in :ref[addition of angular momenta]{to=group.clebsch-gordan}.

**Beyond rotations.** The same algebra appears wherever a rank-one Lie algebra does. The raising and lowering operators of the harmonic oscillator obey the closely related Heisenberg relations; the isospin of nuclear physics is a copy of this algebra acting on the proton-neutron doublet; and in $\mathfrak{su}(3)$ three copies of it, the $I$-, $U$- and $V$-spins, organise the quark multiplets. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="pp. 855–856"} run the $\mathfrak{su}(3)$ ladders in exactly the way done here.

**Rigid rotors and molecular spectroscopy.** The rotational levels of a diatomic molecule have energies $B\,j(j+1)$, so the observed line spacing is $2B(j+1)$ — a linear progression whose slope measures the moment of inertia and hence the bond length. The $j(j+1)$ of the theorem is directly visible in a microwave spectrum.
:::
