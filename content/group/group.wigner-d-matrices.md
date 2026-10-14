---
id: group.wigner-d-matrices
title: Rotation matrices of angular momentum
kind: definition
level: advanced
summary: Defines the Wigner matrices $D^{j}_{m'm}(\alpha,\beta,\gamma)=\langle jm'|\mathrm{e}^{-\mathrm{i}\alpha J_z}\mathrm{e}^{-\mathrm{i}\beta J_y}\mathrm{e}^{-\mathrm{i}\gamma J_z}|jm\rangle$ of a rotation in Euler angles, reduces them to the single real matrix $d^{j}(\beta)$, derives Wigner's closed formula for $d^{j}$ by expanding a monomial in two variables, and identifies the column $m=0$ of the integer-$j$ matrices with the spherical harmonics.
prereqs: [group.angular-momentum, spec.spherical-harmonics, group.so3-su2, group.lie-groups-algebras, group.representations, linalg.matrix-exponential, linalg.unitary-orthogonal-matrices, spec.associated-legendre, spec.legendre-polynomials]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§3.4, pp. 139–142: the three-step description of the Euler angles $\\alpha$ about $\\hat e_3$, $\\beta$ about $\\hat e_2'$ and $\\gamma$ about $\\hat e_3''$ with their ranges, the individual matrices $S_1(\\alpha)$, $S_2(\\beta)$, $S_3(\\gamma)$, the product $S(\\alpha,\\beta,\\gamma)=S_3(\\gamma)S_2(\\beta)S_1(\\alpha)$, Eq. (3.36), and the explicit nine entries of Eq. (3.37), together with the statement that the final polar axis sits at $\\theta=\\beta$, $\\varphi=\\alpha$, and Example 3.4.1 ($\\alpha=\\beta=\\gamma=\\pi/2$); §16.3, pp. 796–797: the defining equation $R|L,M\\rangle=\\sum_{M'}D^{L}_{M'M}(R)|L,M'\\rangle$, Eq. (16.51), its spherical-harmonic form $Y_l^m(R\\Omega)=\\sum_{m'}D^{l}_{m'm}(R)Y_l^{m'}(\\Omega)$, Eq. (16.52), the row and column labelling from $-l$ to $+l$, the unitarity of $D^l$ and the name 'Wigner matrices'; §16.3, pp. 803–804: the lemma $D^{l}_{m0}(R)=\\sqrt{4\\pi/(2l+1)}\\,Y_l^m(\\Omega_1)^*$, Eq. (16.78), for a rotation $R$ carrying $\\Omega_1$ to the polar direction, and the remark that it extends unchanged to any angular-momentum functions of integer $l$; §16.3, pp. 805–806: the product formula Eq. (16.83), the three-harmonic integral Eq. (16.84) and the three conditions listed on p. 806"
    pages: "139-142, 796-797, 803-806"
    role: the Euler-angle convention and the explicit $3\times3$ rotation matrix against which ours is checked; the definition of the rotation matrices by their action on an angular-momentum multiplet and on spherical harmonics, with the index placement and unitarity; the identification of the $m=0$ column with a spherical harmonic; the product formula for two harmonics of the same argument used in the application
  - work: hassani-2013
    loc: "§30.3.3, pp. 972–973: the Euler factorisation $R(\\psi,\\theta,\\varphi)=\\exp(M_{12}\\psi)\\exp(M_{31}\\theta)\\exp(M_{12}\\varphi)$ of a general rotation and the corresponding operator $\\mathrm{e}^{\\mathrm{i}J_z\\psi}\\mathrm{e}^{\\mathrm{i}J_y\\theta}\\mathrm{e}^{\\mathrm{i}J_z\\varphi}$; the definition $D^{(j)}_{m'm}(\\psi,\\theta,\\varphi)=\\langle jm'|R(\\psi,\\theta,\\varphi)|jm\\rangle$ and its reduction to $\\mathrm{e}^{\\mathrm{i}(m'\\psi+m\\varphi)}d^{(j)}_{m'm}(\\theta)$, Eq. (30.15); the Wigner formula Eq. (30.16) with the coefficient $\\phi(j,m,m';\\mu)=(-1)^{\\mu}[(j+m)!(j-m)!(j+m')!(j-m')!]^{1/2}/[(j+m-\\mu)!\\mu!(j-m'-\\mu)!(m'-m+\\mu)!]$, the statement that $\\mu$ runs over all values making the factorials meaningful, and the count $1+\\tau$ of terms with $\\tau$ the smallest of $j\\pm m$, $j\\pm m'$; the character $\\chi^{(j)}(\\varphi)=\\sin((j+\\tfrac12)\\varphi)/\\sin(\\varphi/2)$, Eq. (30.17), p. 973"
    pages: "972-973"
    role: the reduction of a rotation matrix to the one-angle matrix $d^{j}(\beta)$, Wigner's closed formula for $d^{j}$ and the count of its terms, and the character of a rotation; the opposite sign convention in the exponents, which the remark on conventions compares with ours
  - work: rhb-2006
    loc: "§28.7.3, pp. 1069–1070: conjugacy classes, with the observation that in the continuous rotation group two rotations through the same angle about different axes lie in the same class, because the group contains a rotation carrying the first axis to the second"
    pages: "1069-1070"
    role: the conjugacy of equal-angle rotations about different axes, which licenses computing the character on a rotation about $z$
---

:::definition[Euler angles]{provenance=adapted src="arfken-2013:§3.4, Eqs. (3.35)–(3.37), pp. 140–141; hassani-2013:§30.3.3, p. 972"}
Write $R_z(\theta)$ and $R_y(\theta)$ for the rotations of $\mathbb{R}^3$ through $\theta$ about the third and second coordinate axes, counterclockwise seen from the tip of the axis, in the active convention of :ref[the rotation group and SU(2)]{to=group.so3-su2}: $R_{\mathbf{n}}(\theta)=\exp(-\mathrm{i}\theta\,\mathbf{n}\cdot\mathbf{J})$ moves a vector and leaves the axes alone.

Given three numbers
$$
0\le\alpha<2\pi,\qquad 0\le\beta\le\pi,\qquad 0\le\gamma<2\pi,
$$
the **Euler angles**, put
$$
R(\alpha,\beta,\gamma)=R_z(\alpha)\,R_y(\beta)\,R_z(\gamma)\;\in SO(3).
$$
Every element of $SO(3)$ is of this form, and the angles are unique unless $\beta\in\{0,\pi\}$, where only $\alpha\pm\gamma$ is determined. The last column is easy to read off:
$$
R(\alpha,\beta,\gamma)\,\hat{\mathbf{z}}=(\sin\beta\cos\alpha,\;\sin\beta\sin\alpha,\;\cos\beta),
$$
so $(\beta,\alpha)$ are the polar and azimuthal angles of the image of the polar axis, and $\gamma$ is the extra turn about the old polar axis made before tipping it.

**Comparison with the usual bookkeeping.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§3.4, pp. 140–141"} describe the same three angles as successive rotations *of the coordinate axes*: first by $\alpha$ about $\hat e_3$, then by $\beta$ about the new $\hat e_2'$, then by $\gamma$ about the newer $\hat e_3''$, with exactly the ranges above. Their matrix is the triple product $S(\alpha,\beta,\gamma)=S_3(\gamma)S_2(\beta)S_1(\alpha)$ of their Eq. (3.36). Each $S_k$ turns the axes one way where $R_z,R_y$ turn vectors the other, and reversing the order of a product of inverses gives
$$
S(\alpha,\beta,\gamma)=R(\alpha,\beta,\gamma)^{-1}=R(\alpha,\beta,\gamma)^{\mathsf{T}} .
$$
Multiplying out $R_z(\alpha)R_y(\beta)R_z(\gamma)$ and transposing reproduces their Eq. (3.37) entry by entry; at $\alpha=\beta=\gamma=\pi/2$ both give $S=\bigl(\begin{smallmatrix}-1&0&0\\0&0&1\\0&1&0\end{smallmatrix}\bigr)$, their Example 3.4.1. :cite[Hassani]{work=hassani-2013 loc="§30.3.3, p. 972"} factorises a rotation the same way, as $\exp(M_{12}\psi)\exp(M_{31}\theta)\exp(M_{12}\varphi)$, and $M_{12}$, $M_{31}$ generate exactly our $R_z$, $R_y$; his $(\psi,\theta,\varphi)$ is our $(\alpha,\beta,\gamma)$.
:::

:::definition[The rotation matrices $D^{j}$ and $d^{j}$]{provenance=adapted src="arfken-2013:§16.3, Eqs. (16.51)–(16.52), pp. 796–797; hassani-2013:§30.3.3, Eq. (30.15), p. 972"}
Let $J_1,J_2,J_3$ be an angular momentum (:ref[angular momentum algebra]{to=group.angular-momentum}) acting irreducibly on a space of dimension $2j+1$, with the orthonormal basis $|j,m\rangle$ of that unit and the Condon-Shortley phases. Inner products are linear in the ket, as there. The **rotation operator** of the Euler angles $(\alpha,\beta,\gamma)$ is
$$
\mathcal{D}^{(j)}(\alpha,\beta,\gamma)
=\mathrm{e}^{-\mathrm{i}\alpha J_z}\,\mathrm{e}^{-\mathrm{i}\beta J_y}\,\mathrm{e}^{-\mathrm{i}\gamma J_z},
$$
and its matrix in that basis,
$$
D^{j}_{m'm}(\alpha,\beta,\gamma)=\bigl\langle j,m'\bigm|\mathcal{D}^{(j)}(\alpha,\beta,\gamma)\bigm|j,m\bigr\rangle
\qquad(-j\le m,m'\le j),
$$
is the **Wigner $D$-matrix** of order $j$. Rows and columns are labelled by $m'$ and $m$ running from $-j$ to $j$, not from $1$ to $2j+1$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 797"} flag the same unusual labelling, define the matrix by $R|L,M\rangle=\sum_{M'}D^{L}_{M'M}(R)|L,M'\rangle$ — the same index placement as ours — and record the name, which is Eugene Wigner's.

The **reduced rotation matrix** is the one-angle matrix
$$
d^{j}_{m'm}(\beta)=\bigl\langle j,m'\bigm|\mathrm{e}^{-\mathrm{i}\beta J_y}\bigm|j,m\bigr\rangle .
$$
Both are $(2j+1)\times(2j+1)$. For half-integer $j$ the matrices are two-valued on $SO(3)$ and single-valued on $SU(2)$; the natural domain is $SU(2)$, with $\alpha,\gamma$ running to $4\pi$.
:::

:::statement[Structure of the rotation matrices]{provenance=adapted src="hassani-2013:Eqs. (30.15)–(30.17), pp. 972–973; arfken-2013:Eq. (16.52), p. 796, Eq. (16.78), p. 803"}
With the notation above:

1. **Factorisation.** Only the middle angle is non-trivial:
$$
D^{j}_{m'm}(\alpha,\beta,\gamma)=\mathrm{e}^{-\mathrm{i}m'\alpha}\;d^{j}_{m'm}(\beta)\;\mathrm{e}^{-\mathrm{i}m\gamma},
$$
and $d^{j}_{m'm}(\beta)$ is **real**.

2. **Wigner's formula.** With $c=\cos\tfrac\beta2$ and $s=\sin\tfrac\beta2$,
$$
d^{j}_{m'm}(\beta)=\sum_{k}(-1)^{k+m'-m}\,
\frac{\sqrt{(j+m)!\,(j-m)!\,(j+m')!\,(j-m')!}}{(j+m-k)!\;k!\;(j-m'-k)!\;(m'-m+k)!}\;
c^{\,2j-2k+m-m'}\,s^{\,2k+m'-m},
$$
the sum running over every integer $k$ for which all four factorials have non-negative arguments. The factorials make sense for half-integer $j$ as well, because $m$ and $m'$ always differ from $j$ by an integer, so each of $j+m$, $j-m$, $j+m'$, $j-m'$ is a non-negative integer; in the worked example below $j=\tfrac32$ and these four numbers run over $0,1,2,3$. The number of terms is $1+\tau$, where $\tau$ is the smallest of $j+m$, $j-m$, $j+m'$, $j-m'$.

3. **A unitary representation.** $D^{j}$ is unitary, $d^{j}$ is real orthogonal, and $R\mapsto D^{j}(R)$ is an irreducible representation of $SU(2)$ of dimension $2j+1$; every irreducible representation of $SU(2)$ is one of these. The character depends only on the rotation angle $\varphi$:
$$
\chi^{(j)}(\varphi)=\operatorname{tr}D^{j}=\frac{\sin\bigl((j+\tfrac12)\varphi\bigr)}{\sin(\varphi/2)} .
$$

4. **Symmetries and special values.**
$$
d^{j}_{m'm}(-\beta)=d^{j}_{mm'}(\beta)=(-1)^{m-m'}d^{j}_{m'm}(\beta),
\qquad
d^{j}_{m'm}(0)=\delta_{m'm},
\qquad
d^{j}_{m'm}(\pi)=(-1)^{j-m}\,\delta_{m',-m},
$$
and a turn through $2\pi$ about any axis gives $(-1)^{2j}$ times the identity — the sign change of a spinor.

5. **Integer $j$: the spherical harmonics.** Let $l\ge0$ be an integer and let $\mathcal{D}(R)$ act on functions on the sphere by $(\mathcal{D}(R)f)(\hat{\mathbf{n}})=f(R^{-1}\hat{\mathbf{n}})$. Then the span of $Y_l^{-l},\dots,Y_l^{l}$ (:ref[spherical harmonics]{to=spec.spherical-harmonics}) carries exactly the representation $D^{l}$:
$$
Y_l^{m}\bigl(R^{-1}\hat{\mathbf{n}}\bigr)=\sum_{m'=-l}^{l}D^{l}_{m'm}(R)\;Y_l^{m'}(\hat{\mathbf{n}}),
$$
and the two middle lines of the matrix are harmonics outright:
$$
D^{l}_{0m}(R)=\sqrt{\frac{4\pi}{2l+1}}\;Y_l^{m}\bigl(R^{-1}\hat{\mathbf{z}}\bigr),
\qquad
D^{l}_{m0}(\alpha,\beta,\gamma)=\sqrt{\frac{4\pi}{2l+1}}\;\overline{Y_l^{m}(\beta,\alpha)} .
$$
In particular $d^{l}_{m0}(\beta)=\sqrt{(l-m)!/(l+m)!}\;P_l^{m}(\cos\beta)$ with the Condon-Shortley-phased $P_l^m$ of :ref[associated Legendre functions]{to=spec.associated-legendre}, and $D^{l}_{00}(\alpha,\beta,\gamma)=P_l(\cos\beta)$.
:::

:::idea{provenance=original}
Two observations do all the work.

The first is that $|j,m\rangle$ is an eigenvector of $J_z$, so the outer two exponentials in $\mathcal{D}^{(j)}$ never mix anything: they only multiply the bra and the ket by phases. That is why a function of three angles collapses to a matrix of functions of one angle, and why the whole subject is the study of $d^{j}(\beta)$.

The second is that the spin-$j$ multiplet is the $2j$-fold symmetric product of the spin-$\tfrac12$ one. A product of $2j$ spins, all of them up or down, is recorded by a monomial $x^{a}y^{b}$ with $a+b=2j$, and a rotation acts on the two spin-$\tfrac12$ states by a $2\times2$ matrix, hence on the monomial by substituting two linear forms for $x$ and $y$. Expanding $(cx+sy)^{j+m}(-sx+cy)^{j-m}$ by the binomial theorem and collecting the coefficient of $x^{j+m'}y^{j-m'}$ *is* Wigner's formula; the alternating sign comes from the minus in the second linear form, and the four factorials in the denominator are the two binomial coefficients, with the square root supplied by the normalisation of the monomials.

Everything else follows: unitarity because $J_y$ is Hermitian, reality because $J_y$ is purely imaginary in this basis, and the spherical-harmonic formulas because the $2l+1$ harmonics of order $l$ are a spin-$l$ multiplet for the orbital angular momentum, so their rotation matrix has to be $D^{l}$.
:::

:::proof[Part 1: the factorisation]{provenance=adapted src="hassani-2013:Eq. (30.15), p. 972"}
**Step 1: the phases.** $J_z|j,m\rangle=m|j,m\rangle$, so $\mathrm{e}^{-\mathrm{i}\gamma J_z}|j,m\rangle=\mathrm{e}^{-\mathrm{i}m\gamma}|j,m\rangle$. Taking the adjoint of the same statement for $m'$, and using that $J_z$ is Hermitian with real eigenvalue $m'$, gives $\langle j,m'|\mathrm{e}^{-\mathrm{i}\alpha J_z}=\mathrm{e}^{-\mathrm{i}m'\alpha}\langle j,m'|$. Hence
$$
D^{j}_{m'm}(\alpha,\beta,\gamma)=\mathrm{e}^{-\mathrm{i}m'\alpha}\,\mathrm{e}^{-\mathrm{i}m\gamma}\,\bigl\langle j,m'\bigm|\mathrm{e}^{-\mathrm{i}\beta J_y}\bigm|j,m\bigr\rangle,
$$
which is the claim. :cite[Hassani]{work=hassani-2013 loc="Eq. (30.15), p. 972"} performs the same collapse.

**Step 2: $d^{j}$ is real.** In the basis $|j,m\rangle$ the matrices of $J_{\pm}$ have real non-negative entries (Condon-Shortley), so $J_y=\tfrac{1}{2\mathrm{i}}(J_+-J_-)$ has purely imaginary entries, and $-\mathrm{i}\beta J_y$ has real ones. The exponential of a real matrix is real. $\square$
:::

:::proof[Part 2: Wigner's formula]{provenance=adapted src="hassani-2013:Eq. (30.16), p. 972"}
**Step 1: a model for the multiplet.** Let $W_{2j}$ be the space of homogeneous polynomials of degree $2j$ in two variables $x,y$, of dimension $2j+1$, and define operators on it by
$$
J_+=x\,\partial_y,\qquad J_-=y\,\partial_x,\qquad J_z=\tfrac12\bigl(x\,\partial_x-y\,\partial_y\bigr).
$$
These satisfy the angular-momentum relations: $[J_z,J_\pm]=\pm J_\pm$ because $J_z$ measures half the difference of the degrees and $J_\pm$ shifts it by $\pm1$, and $[J_+,J_-]=x\partial_x-y\partial_y=2J_z$ by differentiating the products. Set
$$
\phi_{m}(x,y)=\frac{x^{j+m}\,y^{j-m}}{\sqrt{(j+m)!\,(j-m)!}},\qquad m=-j,\dots,j .
$$
Then $J_z\phi_m=m\phi_m$, and
$$
J_+\phi_m=\frac{(j-m)\,x^{j+m+1}y^{j-m-1}}{\sqrt{(j+m)!(j-m)!}}
=(j-m)\sqrt{\frac{(j+m+1)!\,(j-m-1)!}{(j+m)!\,(j-m)!}}\;\phi_{m+1}
=\sqrt{(j-m)(j+m+1)}\;\phi_{m+1},
$$
which is exactly the coefficient of part 3 of :ref[angular momentum algebra]{to=group.angular-momentum}, with the Condon-Shortley sign. The same computation for $J_-=y\partial_x$ gives the lowering coefficient. So $\phi_m\leftrightarrow|j,m\rangle$ is an isomorphism of multiplets, and any matrix element computed in $W_{2j}$ is the one we want.

**Step 2: how a rotation acts on a monomial.** Let $U$ be the spin-$\tfrac12$ matrix of the rotation, acting on the two basis states by $U e_{\pm1/2}=\sum_{\mu}U_{\mu,\pm1/2}e_{\mu}$. Writing $x$ for $e_{1/2}$ and $y$ for $e_{-1/2}$, the degree-$2j$ monomials stand for the symmetrised products of $2j$ spins, and $U$ acts on all $2j$ factors at once; in the polynomial language this is the algebra homomorphism $\rho(U)$ determined by
$$
\rho(U)\,x=U_{+ +}\,x+U_{-+}\,y,
\qquad
\rho(U)\,y=U_{+-}\,x+U_{--}\,y .
$$
It *is* a homomorphism of groups: applying $\rho(U_1)$ to the images above reproduces the columns of $U_1U_2$, by the definition of matrix multiplication. **Here it matters that the substitution carries the columns of $U$, not its rows**; the opposite choice gives an anti-homomorphism.

**Step 3: the substitution for $\mathrm{e}^{-\mathrm{i}\beta J_y}$.** In the spin-$\tfrac12$ case $J_y=\tfrac12\sigma_2$, and the half-angle formula of :ref[the rotation group and SU(2)]{to=group.so3-su2} gives
$$
U=\mathrm{e}^{-\mathrm{i}\beta\sigma_2/2}=I\cos\tfrac\beta2-\mathrm{i}\sigma_2\sin\tfrac\beta2
=\begin{pmatrix}c&-s\\ s&c\end{pmatrix},
\qquad c=\cos\tfrac\beta2,\ s=\sin\tfrac\beta2 ,
$$
in the basis ordered $(+\tfrac12,-\tfrac12)$. Reading its columns, step 2 becomes the substitution $x\mapsto cx+sy$, $y\mapsto -sx+cy$.

**Step 4: expand.** Therefore
$$
\mathrm{e}^{-\mathrm{i}\beta J_y}\phi_m=\frac{(cx+sy)^{j+m}\,(-sx+cy)^{j-m}}{\sqrt{(j+m)!\,(j-m)!}} .
$$
Apply the binomial theorem to each factor,
$$
(cx+sy)^{j+m}=\sum_{p}\binom{j+m}{p}c^{p}s^{j+m-p}\,x^{p}y^{j+m-p},
\qquad
(-sx+cy)^{j-m}=\sum_{q}\binom{j-m}{q}(-s)^{q}c^{j-m-q}\,x^{q}y^{j-m-q},
$$
and collect the terms with $x^{j+m'}y^{j-m'}$, that is $p+q=j+m'$. Substituting the single index $k=j+m-p$, so that $p=j+m-k$ and $q=k+m'-m$, the powers become
$$
c^{\,p+(j-m-q)}=c^{\,2j-2k+m-m'},\qquad s^{\,(j+m-p)+q}=s^{\,2k+m'-m},
$$
the sign is $(-1)^{q}=(-1)^{k+m'-m}$, and the two binomial coefficients combine to
$$
\frac{(j+m)!}{(j+m-k)!\,k!}\cdot\frac{(j-m)!}{(m'-m+k)!\,(j-m'-k)!} .
$$
Dividing by $\sqrt{(j+m)!(j-m)!}$ from $\phi_m$ and multiplying by $\sqrt{(j+m')!(j-m')!}$ to express the result in terms of $\phi_{m'}$ leaves precisely the stated coefficient of $\phi_{m'}$, and by step 1 that coefficient is $d^{j}_{m'm}(\beta)$.

**Step 5: the range and the number of terms.** A binomial coefficient $\binom{n}{r}$ is zero unless $0\le r\le n$, so the four quantities $j+m-k$, $k$, $j-m'-k$ and $m'-m+k$ must all be non-negative integers; this is the stated range, and it is non-empty exactly when $|m|,|m'|\le j$. The constraints read $\max(0,m-m')\le k\le\min(j+m,\,j-m')$, so the number of terms is
$$
\min(j+m,j-m')-\max(0,m-m')+1=\min\bigl(j+m,\,j-m',\,j-m,\,j+m'\bigr)+1,
$$
which is :cite[Hassani's]{work=hassani-2013 loc="p. 972"} count $1+\tau$. $\square$
:::

:::proof[Parts 3 and 4]{provenance=original}
**Unitarity and orthogonality.** $J_y$ and $J_z$ are Hermitian, so each exponential $\mathrm{e}^{-\mathrm{i}\theta J}$ is unitary and so is the product; $d^{j}$ is unitary and real by part 1, hence real orthogonal. (Orthogonality also says $\sum_{m'}\bigl(d^{j}_{m'm}\bigr)^2=1$, which is the statement that the squared amplitudes in a rotated basis sum to one.)

**Representation and irreducibility.** $R\mapsto\mathcal{D}^{(j)}(R)$ is the restriction to the multiplet of the group representation generated by $\mathbf{J}$, so it is a representation; it is irreducible because the multiplet is, by part 2 of :ref[angular momentum algebra]{to=group.angular-momentum}. That every irreducible representation of $SU(2)$ arises this way is part 2 of the same unit applied to the generators.

**Character.** Conjugate so that the rotation is about $z$ through $\varphi$; traces are unchanged by conjugation, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§28.7.3, pp. 1069–1070"} note (as used in :ref[the rotation group and SU(2)]{to=group.so3-su2}) that equal-angle rotations about different axes are conjugate. Then $\mathcal{D}^{(j)}=\mathrm{e}^{-\mathrm{i}\varphi J_z}$ is diagonal and
$$
\chi^{(j)}(\varphi)=\sum_{m=-j}^{j}\mathrm{e}^{-\mathrm{i}m\varphi}
=\mathrm{e}^{\mathrm{i}j\varphi}\sum_{r=0}^{2j}\mathrm{e}^{-\mathrm{i}r\varphi}
=\mathrm{e}^{\mathrm{i}j\varphi}\frac{1-\mathrm{e}^{-\mathrm{i}(2j+1)\varphi}}{1-\mathrm{e}^{-\mathrm{i}\varphi}}
=\frac{\mathrm{e}^{\mathrm{i}(j+\frac12)\varphi}-\mathrm{e}^{-\mathrm{i}(j+\frac12)\varphi}}{\mathrm{e}^{\mathrm{i}\varphi/2}-\mathrm{e}^{-\mathrm{i}\varphi/2}},
$$
after multiplying numerator and denominator by $\mathrm{e}^{\mathrm{i}\varphi/2}$; both differences are $2\mathrm{i}\sin$ of half the exponent, giving the stated ratio. This is :cite[Hassani's]{work=hassani-2013 loc="Eq. (30.17), p. 973"} Eq. (30.17), and it is the sum used there to prove the Clebsch-Gordan series of :ref[addition of angular momenta]{to=group.clebsch-gordan}.

**Symmetries.** Replacing $\beta$ by $-\beta$ inverts the operator, and the inverse of a real orthogonal matrix is its transpose: $d^{j}(-\beta)=d^{j}(\beta)^{-1}=d^{j}(\beta)^{\mathsf{T}}$. The relation $d^{j}_{mm'}=(-1)^{m-m'}d^{j}_{m'm}$ is read off Wigner's formula: interchanging $m$ and $m'$ sends the summation index $k$ to $k'=k+m'-m$, which leaves the four factorials and the two powers unchanged and multiplies the sign by $(-1)^{m-m'}$.

**Special values.** At $\beta=0$ only $k$ with $s^{2k+m'-m}$ of exponent $0$ survives, forcing $m'=m$ and $k=0$, and the coefficient is $1$. At $\beta=\pi$ we have $c=0$, so only $2j-2k+m-m'=0$ contributes, i.e. $k=j+\tfrac{m-m'}{2}$; substituting this into the non-negativity constraint $j-m'-k\ge0$ gives $m'\le-m$ and $j+m-k\ge0$ gives $m'\ge-m$, so $m'=-m$, $k=j+m$, and the surviving term is $(-1)^{j+m-2m}\sqrt{\cdots}/[0!\,(j+m)!\,(j-m)!\,0!]\cdot s^{2j}$ with $s=1$, which is $(-1)^{j-m}$. Finally $\mathcal{D}^{(j)}$ of a $2\pi$ turn about $z$ is $\mathrm{e}^{-2\pi\mathrm{i}J_z}$, diagonal with entries $\mathrm{e}^{-2\pi\mathrm{i}m}=(-1)^{2m}=(-1)^{2j}$, since $m$ and $j$ differ by an integer; a general axis is conjugate to $z$. $\square$
:::

:::proof[Part 5: the spherical harmonics]{provenance=adapted src="arfken-2013:Eq. (16.52), p. 796, and Eq. (16.78), p. 803"}
**Step 1: $\mathcal{D}$ is a unitary representation on functions.** $(\mathcal{D}(R)f)(\hat{\mathbf{n}})=f(R^{-1}\hat{\mathbf{n}})$ defines a representation — the inverse is what makes $\mathcal{D}(R_1)\mathcal{D}(R_2)=\mathcal{D}(R_1R_2)$ rather than the reverse — and it is unitary on $L^2(S^2)$ because a rotation preserves the element of solid angle.

**Step 2: the span of the $Y_l^m$ is a spin-$l$ multiplet.** By :ref[spherical harmonics]{to=spec.spherical-harmonics} the space $\mathcal{H}_l=\operatorname{span}\{Y_l^{m}\}$ is $(2l+1)$-dimensional and invariant under all rotations, which is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Eq. (15.147), p. 763"} Eq. (15.147). Its generators are the orbital angular momentum $\mathbf{L}=-\mathrm{i}\,\mathbf{r}\times\nabla$, for which $L^2Y_l^m=l(l+1)Y_l^m$ and $L_zY_l^m=mY_l^m$ with the $2l+1$ values of $m$ each occurring once. So $\mathcal{H}_l$ is an irreducible multiplet of spin $l$, and the $Y_l^m$ are its basis $|l,m\rangle$ — with the *correct phases*, because the Condon-Shortley factor $(-1)^m$ carried by $P_l^m$ is put there exactly so that $L_\pm$ acts with positive coefficients, as the remark on conventions in :ref[spherical harmonics]{to=spec.spherical-harmonics} records. Hence the matrix of $\mathcal{D}(R)$ on $\mathcal{H}_l$ is $D^{l}(R)$:
$$
Y_l^{m}(R^{-1}\hat{\mathbf{n}})=\bigl(\mathcal{D}(R)Y_l^m\bigr)(\hat{\mathbf{n}})=\sum_{m'}D^{l}_{m'm}(R)\,Y_l^{m'}(\hat{\mathbf{n}}).
$$
:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Eq. (16.52), p. 796"} write the same identity as $Y_l^m(R\Omega)=\sum_{m'}D^l_{m'm}(R)Y_l^{m'}(\Omega)$, their $R\Omega$ being the *new coordinates* of the old point, which is our $R^{-1}\hat{\mathbf{n}}$.

**Step 3: evaluate at the pole.** Put $\hat{\mathbf{n}}=\hat{\mathbf{z}}$. Only $m'=0$ survives on the right, because $Y_l^{m'}(0,\varphi)=\sqrt{(2l+1)/4\pi}\,\delta_{m'0}$ (:ref[spherical harmonics]{to=spec.spherical-harmonics}, special values). Hence
$$
D^{l}_{0m}(R)=\sqrt{\frac{4\pi}{2l+1}}\;Y_l^{m}\bigl(R^{-1}\hat{\mathbf{z}}\bigr).
$$

**Step 4: transpose it.** $D^{l}$ is unitary and $D^{l}(R)^{-1}=D^{l}(R^{-1})$, so $D^{l}_{m0}(R)=\overline{D^{l}_{0m}(R^{-1})}$. Applying step 3 to $R^{-1}$,
$$
D^{l}_{m0}(R)=\sqrt{\frac{4\pi}{2l+1}}\;\overline{Y_l^{m}\bigl(R\hat{\mathbf{z}}\bigr)}
=\sqrt{\frac{4\pi}{2l+1}}\;\overline{Y_l^{m}(\beta,\alpha)},
$$
the last step by the formula for $R(\alpha,\beta,\gamma)\hat{\mathbf{z}}$ in the first definition. This is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="Eq. (16.78), p. 803"} lemma, which they state as $D^{l}_{m0}(R)=\sqrt{4\pi/(2l+1)}\,Y_l^m(\Omega_1)^*$ for a coordinate rotation $R$ carrying the direction $\Omega_1$ to the pole — and a coordinate rotation carrying $\Omega_1$ to the pole is our active $R$ carrying the pole to $\Omega_1$, so $\Omega_1=(\beta,\alpha)$ and the two statements coincide.

**Step 5: read off $d^{l}_{m0}$ and $D^{l}_{00}$.** Setting $\gamma=0$ in part 1, $D^{l}_{m0}(\alpha,\beta,0)=\mathrm{e}^{-\mathrm{i}m\alpha}d^{l}_{m0}(\beta)$. Inserting the definition of $Y_l^m$, whose only complex factor is $\mathrm{e}^{\mathrm{i}m\alpha}$,
$$
\mathrm{e}^{-\mathrm{i}m\alpha}d^{l}_{m0}(\beta)
=\sqrt{\frac{4\pi}{2l+1}}\sqrt{\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}}\;P_l^{m}(\cos\beta)\,\mathrm{e}^{-\mathrm{i}m\alpha},
$$
and cancelling the phase gives $d^{l}_{m0}(\beta)=\sqrt{(l-m)!/(l+m)!}\,P_l^m(\cos\beta)$. At $m=0$ this is $P_l(\cos\beta)$, and by part 1 the two outer phases are then trivial, so $D^{l}_{00}=P_l(\cos\beta)$. $\square$
:::

:::remark[Where the hypotheses are used, and the conventions]{provenance=original}
- **Irreducibility of the multiplet** is what makes $D^{j}$ a square matrix of a single size and the label $j$ meaningful. On a reducible space the same construction gives a block-diagonal matrix, one block per irreducible summand, by part 4 of :ref[angular momentum algebra]{to=group.angular-momentum}.
- **The Condon-Shortley phases** are used twice and are not cosmetic. They make $d^{j}$ *real* (step 2 of the first proof): with arbitrary phases $|j,m\rangle\to\mathrm{e}^{\mathrm{i}\chi_m}|j,m\rangle$ the matrix picks up $\mathrm{e}^{\mathrm{i}(\chi_{m'}-\chi_m)}$ and is no longer real, and Wigner's formula is simply false. They are used again in step 2 of the last proof, to identify $Y_l^m$ with $|l,m\rangle$ rather than with some rephasing of it.
- **Hermiticity of $J_y$ and $J_z$** gives unitarity; it is the hypothesis behind $\sum_{m'}|D^{j}_{m'm}|^2=1$, that is, behind the amplitudes being probabilities.
- **The ranges of the Euler angles** matter only for uniqueness, not for the formulas. At $\beta=0$ the two outer rotations are about the same axis and only $\alpha+\gamma$ is defined; this is the familiar coordinate degeneracy of Euler angles, and it is why numerical work near $\beta=0$ or $\pi$ is better done with quaternions (:ref[quaternions]{to=group.quaternions}) than with angles.
- **Half-integer $j$ needs $SU(2)$.** Part 4 gives $\mathcal{D}^{(j)}(2\pi)=(-1)^{2j}$, so for half-integer $j$ the assignment $R\mapsto D^{j}(R)$ is not a function on $SO(3)$ at all: it is a genuine representation only of the double cover, as :ref[the rotation group and SU(2)]{to=group.so3-su2} explains. The $3\times3$ rotation matrix of the first definition is $D^{1}$ written in the Cartesian rather than the spherical basis.
- **Sign conventions.** We put $\mathcal{D}=\mathrm{e}^{-\mathrm{i}\alpha J_z}\mathrm{e}^{-\mathrm{i}\beta J_y}\mathrm{e}^{-\mathrm{i}\gamma J_z}$, to match the active convention $R_{\mathbf{n}}(\theta)=\exp(-\mathrm{i}\theta\,\mathbf{n}\cdot\mathbf{J})$ of :ref[the rotation group and SU(2)]{to=group.so3-su2}. :cite[Hassani]{work=hassani-2013 loc="Eq. (30.15), p. 972"} writes the operator with the opposite sign in all three exponents, $\mathrm{e}^{\mathrm{i}J_z\psi}\mathrm{e}^{\mathrm{i}J_y\theta}\mathrm{e}^{\mathrm{i}J_z\varphi}$, so that $D^{(j)}_{m'm}=\mathrm{e}^{\mathrm{i}(m'\psi+m\varphi)}d^{(j)}_{m'm}(\theta)$; correspondingly his coefficient $\phi(j,m,m';\mu)$ in Eq. (30.16) carries $(-1)^{\mu}$ where ours carries $(-1)^{k+m'-m}$. The two are consistent: by part 4, dropping the factor $(-1)^{m'-m}$ turns $d^{j}_{m'm}(\beta)$ into $d^{j}_{m'm}(-\beta)$, which is exactly the effect of reversing the sign of the angle in the exponent. Reading his angles as ours, $\mathcal{D}^{\text{Hassani}}(\psi,\theta,\varphi)=\mathcal{D}(-\psi,-\theta,-\varphi)$. Nothing below depends on the choice provided one keeps it; what is not safe is to mix a $D$-matrix from one book with a Clebsch-Gordan coefficient from another without checking.
- **A further convention.** Many texts define the Euler angles by rotating about $x'$ rather than $y'$ in the middle step. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 3.4.1, p. 142"} record the dictionary: that convention's $(\varphi,\theta,\psi)$ equals our $(\alpha+\pi/2,\ \beta,\ \gamma-\pi/2)$, which multiplies $D^{j}_{m'm}$ by $\mathrm{e}^{-\mathrm{i}(m'-m)\pi/2}$ and spoils the reality of the middle matrix.
:::

:::method[Computing $D^{j}$ for a given $j$ and rotation]{provenance=original}
1. **Get the Euler angles.** If the rotation is given as an axis $\mathbf{n}$ and angle $\theta$, or as a $3\times3$ matrix $R$, read $\beta=\arccos R_{33}$, and then $\alpha=\operatorname{atan2}(R_{23},R_{13})$ and $\gamma=\operatorname{atan2}(R_{32},-R_{31})$ from the last column and last row. (Check against $R\hat{\mathbf{z}}$, whose polar angles must be $(\beta,\alpha)$.) If $\beta=0$ or $\pi$, set $\gamma=0$ and put the whole turn into $\alpha$.
2. **Build $d^{j}(\beta)$.** Either exponentiate — form the $(2j+1)\times(2j+1)$ matrix $J_y$ by the recipe of :ref[angular momentum algebra]{to=group.angular-momentum} and compute $\exp(-\mathrm{i}\beta J_y)$ — or use Wigner's formula entry by entry. Exponentiating is better for large $j$: the closed formula alternates in sign and loses accuracy by cancellation.
3. **Fill in the top-left quadrant only.** The symmetries of part 4, together with $d^{j}_{-m',-m}=(-1)^{m'-m}d^{j}_{m'm}$, reduce the work by a factor of about four. That last identity comes straight out of Wigner's formula: reindex the sum by $k\mapsto k+m'-m$, which permutes the four denominator factorials among themselves, leaves the powers of $c$ and $s$ untouched, and changes the overall sign by $(-1)^{m'-m}$.
4. **Attach the phases:** $D^{j}_{m'm}=\mathrm{e}^{-\mathrm{i}m'\alpha}d^{j}_{m'm}(\beta)\mathrm{e}^{-\mathrm{i}m\gamma}$.
5. **Check.** Verify $D^{j}D^{j\dagger}=I$; verify one row sum $\sum_{m'}\bigl(d^{j}_{m'm}\bigr)^2=1$; verify $\operatorname{tr}D^{j}$ against the character formula of part 3 evaluated at the rotation angle $\varphi$, where $\cos\tfrac\varphi2=\cos\tfrac\beta2\cos\tfrac{\alpha+\gamma}{2}$.
6. **For integer $j$**, check the $m=0$ column against $d^{l}_{m0}(\beta)=\sqrt{(l-m)!/(l+m)!}\,P_l^m(\cos\beta)$, which costs nothing and catches phase errors at once.
:::

:::example[The spin-$\tfrac32$ rotation matrix, and a quarter turn]{provenance=original}
**Step 1: the matrix from Wigner's formula.** Take $j=\tfrac32$, basis ordered $m=\tfrac32,\tfrac12,-\tfrac12,-\tfrac32$, and write $c=\cos\tfrac\beta2$, $s=\sin\tfrac\beta2$. The corner entry has $m=m'=\tfrac32$, so $j+m-k=3-k$, $j-m'-k=-k$ and $m'-m+k=k$ force $k=0$ and leave
$$
d^{3/2}_{3/2,3/2}=\frac{\sqrt{3!\,0!\,3!\,0!}}{3!\,0!\,0!\,0!}\,c^{3}=c^{3}.
$$
Running through the other fifteen entries the same way gives
$$
d^{3/2}(\beta)=
\begin{pmatrix}
c^{3} & -\sqrt3\,c^{2}s & \sqrt3\,cs^{2} & -s^{3}\\[2pt]
\sqrt3\,c^{2}s & c\,(3c^{2}-2) & s\,(3s^{2}-2) & \sqrt3\,cs^{2}\\[2pt]
\sqrt3\,cs^{2} & s\,(2-3s^{2}) & c\,(3c^{2}-2) & -\sqrt3\,c^{2}s\\[2pt]
s^{3} & \sqrt3\,cs^{2} & \sqrt3\,c^{2}s & c^{3}
\end{pmatrix}.
$$
Two checks: the top row and left column are related by $d_{mm'}=(-1)^{m-m'}d_{m'm}$ (signs $-,+,-$ down the first column against $-,+,-$ across the first row, each pair differing by $(-1)^{m-m'}$ as required), and the first column of squares sums to
$$
c^{6}+3c^{4}s^{2}+3c^{2}s^{4}+s^{6}=(c^{2}+s^{2})^{3}=1 .
$$

**Step 2: a quarter turn.** At $\beta=\pi/2$, $c=s=1/\sqrt2$, so $c^3=s^3=2^{-3/2}=\tfrac{\sqrt2}{4}$, $\sqrt3c^2s=\sqrt3\cdot2^{-3/2}=\tfrac{\sqrt6}{4}$, and $3c^2-2=\tfrac32-2=-\tfrac12$, giving $c(3c^2-2)=-\tfrac{1}{2\sqrt2}=-\tfrac{\sqrt2}{4}$. Hence
$$
d^{3/2}(\tfrac\pi2)=\frac14
\begin{pmatrix}
\sqrt2 & -\sqrt6 & \sqrt6 & -\sqrt2\\
\sqrt6 & -\sqrt2 & -\sqrt2 & \sqrt6\\
\sqrt6 & \sqrt2 & -\sqrt2 & -\sqrt6\\
\sqrt2 & \sqrt6 & \sqrt6 & \sqrt2
\end{pmatrix},
\qquad
\bigl(d^{3/2}_{m'm}(\tfrac\pi2)\bigr)^{2}=
\begin{pmatrix}
\tfrac18&\tfrac38&\tfrac38&\tfrac18\\
\tfrac38&\tfrac18&\tfrac18&\tfrac38\\
\tfrac38&\tfrac18&\tfrac18&\tfrac38\\
\tfrac18&\tfrac38&\tfrac38&\tfrac18
\end{pmatrix}.
$$
Every row and every column of the table of squares sums to $\tfrac18+\tfrac38+\tfrac38+\tfrac18=1$, as orthogonality demands. **The physical reading:** a spin-$\tfrac32$ nucleus prepared with $m=+\tfrac32$ along $z$ and then measured along an axis at $90^{\circ}$ gives $m'=+\tfrac32$ with probability $\tfrac18$, $m'=+\tfrac12$ with probability $\tfrac38$, $m'=-\tfrac12$ with probability $\tfrac38$ and $m'=-\tfrac32$ with probability $\tfrac18$ — a binomial $(1,3,3,1)/8$, which is no accident: the model of step 1 of the second proof realises the spin-$\tfrac32$ state as three independent spin-$\tfrac12$ coin flips, each giving heads with probability $c^2=\tfrac12$.

**Step 3: a composition check.** Squaring the matrix of step 2 must give $d^{3/2}(\pi)$, and by part 4 that is the antidiagonal matrix whose entry in column $m$ is $(-1)^{3/2-m}$: reading the columns from $m=\tfrac32$ across to $m=-\tfrac32$, the antidiagonal is $+1,-1,+1,-1$. (Reading the same four numbers down the rows, from $m'=\tfrac32$ to $m'=-\tfrac32$, reverses the list to $-1,+1,-1,+1$, so it matters which way one reads.) Taking the $(1,4)$ entry of the square,
$$
\tfrac{1}{16}\bigl(\sqrt2\cdot(-\sqrt2)+(-\sqrt6)\cdot\sqrt6+\sqrt6\cdot(-\sqrt6)+(-\sqrt2)\cdot\sqrt2\bigr)
=\tfrac{1}{16}(-2-6-6-2)=-1 ,
$$
and the $(1,1)$ entry,
$$
\tfrac1{16}\bigl(\sqrt2\cdot\sqrt2+(-\sqrt6)\cdot\sqrt6+\sqrt6\cdot\sqrt6+(-\sqrt2)\cdot\sqrt2\bigr)=\tfrac1{16}(2-6+6-2)=0 ,
$$
both as required.

**Step 4: the spherical-harmonic check at $j=l=2$.** Part 5 predicts $d^{2}_{10}(\beta)=\sqrt{1!/3!}\,P_2^{1}(\cos\beta)$. With the Condon-Shortley convention $P_2^{1}(x)=-3x\sqrt{1-x^{2}}$, so $P_2^1(\cos\beta)=-3\cos\beta\sin\beta=-\tfrac32\sin2\beta$ and
$$
d^{2}_{10}(\beta)=\frac{1}{\sqrt6}\Bigl(-\frac32\sin2\beta\Bigr)=-\sqrt{\frac{3}{8}}\;\sin2\beta .
$$
Wigner's formula gives the same thing: with $j=2$, $m=0$, $m'=1$ the constraints $2-k\ge0$, $k\ge0$, $1-k\ge0$, $1+k\ge0$ allow $k=0,1$, and
$$
d^{2}_{10}=(-1)^{1}\frac{\sqrt{2!\,2!\,3!\,1!}}{2!\,0!\,1!\,1!}c^{3}s+(-1)^{2}\frac{\sqrt{2!\,2!\,3!\,1!}}{1!\,1!\,0!\,2!}c\,s^{3}
=-\sqrt6\,c^{3}s+\sqrt6\,cs^{3}
=-\sqrt6\,cs\,(c^{2}-s^{2}),
$$
and $cs=\tfrac12\sin\beta$, $c^{2}-s^{2}=\cos\beta$, so this is $-\tfrac{\sqrt6}{2}\sin\beta\cos\beta=-\tfrac{\sqrt6}{4}\sin2\beta=-\sqrt{3/8}\,\sin2\beta$, since $\sqrt6/4=\sqrt{6/16}=\sqrt{3/8}$. The two routes agree, which tests the phase conventions of both this unit and :ref[spherical harmonics]{to=spec.spherical-harmonics} at once.
:::

:::application{provenance=original}
**Magnetic resonance.** Every pulse in an NMR or ESR sequence is a rotation of the spin multiplet, so a sequence is a product of $D^{j}$ matrices and the observed signal is a matrix element of that product. For $j=\tfrac12$ the $90^{\circ}$ pulse is $d^{1/2}(\pi/2)=\tfrac{1}{\sqrt2}\bigl(\begin{smallmatrix}1&-1\\1&1\end{smallmatrix}\bigr)$; for the quadrupolar nuclei of solid-state NMR ($^{23}$Na, $^{27}$Al, both $j=\tfrac52$) the line intensities are the squares computed as in the example.

**Rotational spectroscopy.** The wavefunctions of a symmetric-top molecule are literally rotation matrices: $\psi_{JKM}(\alpha,\beta,\gamma)\propto\overline{D^{J}_{MK}(\alpha,\beta,\gamma)}$, with $K$ the angular momentum along the molecular symmetry axis and $M$ that along the laboratory axis. Microwave selection rules, line strengths and Stark patterns are then integrals of products of three $D$ matrices.

**Angular distributions.** In a scattering or decay experiment the laboratory frame and the frame picked out by the beam differ by a rotation, so every measured angular distribution is a sum $\sum_{m}|{\textstyle\sum_{m'}}D^{j}_{m'm}a_{m'}|^2$. The $(1,3,3,1)/8$ pattern of the example is the simplest instance: it is what a spin-$\tfrac32$ resonance produces when observed at right angles to its polarisation axis.

**Orientational averaging.** Averaging a tensor property over all orientations of a molecule — in a liquid, a powder or a glass — means integrating products of $D$ matrices over the group, and the orthogonality of the $D^{j}$ turns those integrals into Clebsch-Gordan coefficients. This is the machinery behind powder line shapes, Raman depolarisation ratios and the theory of liquid crystals, where the order parameter is the average of $D^{2}_{00}=P_2(\cos\beta)$.

**Products of harmonics.** The lemma of part 5 is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="pp. 803–806"} route to the product formula
$$
Y_{l_1}^{m_1}(\Omega)\,Y_{l_2}^{m_2}(\Omega)=\sum_{L}\sqrt{\frac{(2l_1+1)(2l_2+1)}{4\pi(2L+1)}}\,C(l_1l_2L\,|\,000)\,C(l_1l_2L\,|\,m_1m_2,m_1{+}m_2)\,Y_{L}^{m_1+m_2}(\Omega),
$$
and hence to the integral of three harmonics of the same argument, their Eq. (16.84); it is non-zero only when $|l_1-l_2|\le l_3\le l_1+l_2$, $m_3=m_1+m_2$, and $l_1+l_2+l_3$ is even. Those integrals are the angular part of every two-electron Coulomb matrix element in atomic structure, and they are the reason a closed subshell is spherically symmetric. The coefficients $C$ are those of :ref[addition of angular momenta]{to=group.clebsch-gordan}, and the general statement behind the pattern is :ref[the Wigner-Eckart theorem]{to=group.wigner-eckart}.

**Geodesy and climate.** The same matrices re-express a spherical-harmonic expansion of a field on the Earth in a rotated frame. Gravity-field models, geomagnetic models and the spectral dynamical cores of atmosphere models all need this when a pole is moved or a grid is rotated, and they use $D^{l}$ (there usually written as "Wigner rotation of spherical-harmonic coefficients") for degrees $l$ into the thousands — which is why the stable route of step 2 of the method, exponentiating rather than summing the closed formula, matters in practice.
:::
