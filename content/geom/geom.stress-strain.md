---
id: geom.stress-strain
title: Stress and strain tensors
kind: application
level: core
summary: Builds the infinitesimal strain tensor from a displacement field and the stress tensor from the traction on a surface element, reduces the generalised Hooke's law to the two Lamé constants for an isotropic medium, relates those to Young's modulus and Poisson's ratio, and computes the principal stresses in a loaded steel block.
prereqs: [geom.tensors, geom.pseudotensors, linalg.hermitian-spectral-theorem, linalg.eigenvalues-eigenvectors, vcalc.divergence-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§26.12 'Physical applications of tensors', pp. 950–954: the inertia tensor Eq. (26.42) and its principal axes, pp. 950–952; the strain tensor, the stress tensor $p_{ij}$ and the generalised Hooke's law Eq. (26.46), p. 953; the assumed form of the isotropic fourth-order tensor Eq. (26.47), the reduction to the Lamé constants, and Young's modulus and Poisson's ratio, Eqs. (26.48)–(26.49), pp. 953–954"
    pages: "950-954"
    role: the definitions of strain and stress, Hooke's law, the isotropic reduction, and the simple-tension computation of $E$ and $\sigma$
  - work: stakgold-holst-2011
    loc: "§0.4 'The impulse-momentum law', pp. 20–22: the continuum model and material coordinates, the surface traction $T(\\xi,t,n)$ and the tetrahedron argument giving its linear dependence on $n$, the component convention for $T_{ij}$ in Eq. (0.4.6), the divergence theorem step, and the momentum balance Eq. (0.4.8)"
    pages: "20-22"
    role: the traction definition of the stress tensor and the equation of motion it satisfies; they do not take up the symmetry of $T$, and the angular impulse–momentum law they leave unpursued for a general continuum is written down for rods on p. 23
  - work: arfken-2013
    loc: "§4.1 Exercise 4.1.4, p. 214 (an isotropic second-rank tensor in three dimensions is a multiple of $\\delta^i_j$) and §4.2 Exercise 4.2.4, p. 218 (the three fourth-rank tensors $\\delta^i_j\\delta^k_l$, $\\delta^i_k\\delta^j_l + \\delta^i_l\\delta^j_k$ and $\\delta^i_k\\delta^j_l - \\delta^i_l\\delta^j_k$ are isotropic; the bare products $\\delta_{ik}\\delta_{jl}$ and $\\delta_{il}\\delta_{jk}$ are half the sum and half the difference of the last two)"
    pages: "214, 218"
    role: the isotropic tensors that underlie the reduction of the elastic constants
  - work: evans-2010
    loc: "§1.2.2, p. 5: the equilibrium equations $\\mu\\Delta \\mathbf{u} + (\\lambda+\\mu)D(\\operatorname{div}\\mathbf{u}) = 0$ and the evolution equations $\\mathbf{u}_{tt} - \\mu\\Delta\\mathbf{u} - (\\lambda+\\mu)D(\\operatorname{div}\\mathbf{u}) = 0$ of linear elasticity; §2.5, Problem 21(b), p. 85: $\\operatorname{div}\\mathbf{u}$ and $\\operatorname{curl}\\mathbf{u}$ each solve wave equations with different propagation speeds"
    pages: "5, 85"
    role: the field equations Hooke's law produces, and the splitting into two wave speeds
---

:::definition[Displacement and the strain tensor]{provenance=adapted src="rhb-2006:§26.12, p. 953; stakgold-holst-2011:§0.4, 'Continuum model', p. 20"}
Model the body as a continuum: a material point is labelled by its position $x$ in a chosen **reference configuration** — whatever shape the body is taken to start from, usually its undeformed one — and is found afterwards at $x + u(x)$. The vector field $u$ is the **displacement**. Stakgold and Holst note that these are Lagrangian, or material, coordinates, and that their advantage is that integrals may be taken over the reference region, whose geometry is usually the simpler of the two.

Riley, Hobson and Bence describe the local deformation at an interior point by the symmetric second-order Cartesian tensor
$$
e_{ij} \;=\; \frac12\left(\frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i}\right) ,
$$
the **strain tensor**. Its trace $\theta = e_{kk} = \nabla\cdot u$ is called the **dilatation**; to first order in the displacement gradients it is the fractional change of volume, since the volume element is multiplied by $\det(I + Du) = 1 + \operatorname{tr}Du + O(|Du|^2)$.

Only the symmetric part of $\partial u_i/\partial x_j$ appears. The antisymmetric part $\omega_{ij} = \tfrac12(\partial_j u_i - \partial_i u_j)$ is discarded because it describes a rotation rather than a deformation: for the infinitesimal rigid motion $u_i = a_i + \epsilon_{ijk}\omega_j x_k$ one has $\partial u_i/\partial x_l = \epsilon_{ijl}\omega_j$, which is antisymmetric in $i$ and $l$, so $e_{ij}$ vanishes identically. (The pseudovector $\omega_j$ and the tensor $\omega_{ij}$ are the dual pair of :ref[]{to=geom.pseudotensors}, up to a sign that is worth fixing once: the same computation gives $\omega_{ij} = \tfrac12(\partial_ju_i - \partial_iu_j) = -\epsilon_{ijk}\omega_k$, so the dual in the sense used there is $\tfrac12\epsilon_{ijk}\omega_{jk} = -\omega_i$, not $+\omega_i$. For $\omega = (0,0,1)$, say, the rigid rotation is $u = (-x_2,x_1,0)$, giving $\omega_{12} = -1$ and a dual $(0,0,-1)$.)
:::

:::definition[Traction and the stress tensor]{provenance=adapted src="stakgold-holst-2011:§0.4, Eqs. (0.4.5)–(0.4.6) and the tetrahedron argument, pp. 20–21; rhb-2006:§26.12, p. 953"}
The forces one part of a body exerts on a neighbouring part are short-range, so they act, to the accuracy of the continuum model, across the shared surface. Let $B$ be a surface inside the body with unit normal $n$ at a point. The **traction** $T(n)$ is the force per unit area transmitted across $B$ at that point, so that the total force on a region $R$ from the material outside it is $\int_{\partial R} T(n)\,dS$.

To find how $T$ depends on $n$, Stakgold and Holst shrink a tetrahedron whose three short faces lie in the coordinate planes and whose slanted face is normal to $n$. Surface terms scale as the squared size of the tetrahedron and volume terms as its cube, so in the limit the tractions on the four faces must balance by themselves; since the three short faces have areas proportional to the components of $n$, what emerges is that $T(n)$ is a linear function of those components. Linearity in $n$ is precisely what makes the coefficients a tensor, here the **stress tensor**:
$$
T_j(n) \;=\; n_i\,p_{ij} .
$$
Both sources index it the same way, the first slot recording which plane the force is transmitted across and the second recording which way the force points; Riley, Hobson and Bence phrase this as $p_{ij}$ being the component along $x_j$ of the force per unit area on a surface element whose normal points along $x_i$. Riley, Hobson and Bence additionally take $p_{ij}$ to be symmetric, writing that into the definition, and this unit follows them; Stakgold and Holst, who get the tensor from linearity in $n$ alone, say nothing about the symmetry of $T$ on pp. 20–22. The remark below collects what that assumption buys and what it costs.

Feeding $T_j(n) = n_ip_{ij}$ into the impulse–momentum law for an arbitrary subregion and converting the surface integral with the divergence theorem (:ref[]{to=vcalc.divergence-theorem}), Stakgold and Holst arrive at the equation of motion
$$
\rho\,\frac{\partial^2 u_j}{\partial t^2} \;=\; \frac{\partial p_{ij}}{\partial x_i} + f_j ,
$$
with $\rho$ the density in the reference configuration and $f$ the body force per unit volume. This is three equations for the nine quantities $u_j$ and $p_{ij}$; a **constitutive law** relating stress to strain is what closes the system.
:::

:::statement[Hooke's law for an isotropic medium]{provenance=adapted src="rhb-2006:§26.12, Eqs. (26.46)–(26.49), pp. 953–954"}
The generalised **Hooke's law** takes the stress to be a linear function of the strain,
$$
p_{ij} = c_{ijkl}\,e_{kl} ,
$$
with $c_{ijkl}$ a fourth-order Cartesian tensor. Suppose the medium is **isotropic**, so that $c_{ijkl}$ is an isotropic tensor, and take — as Riley, Hobson and Bence do, assuming rather than proving it — the most general isotropic fourth-order tensor to be
$$
c_{ijkl} = \lambda\,\delta_{ij}\delta_{kl} + \eta\,\delta_{ik}\delta_{jl} + \nu\,\delta_{il}\delta_{jk} .
$$
Then, with $\theta = e_{kk}$ and $2\mu = \eta + \nu$:

1. **The law has two constants.**
   $$
   p_{ij} \;=\; \lambda\,\theta\,\delta_{ij} + 2\mu\,e_{ij} ,
   $$
   where $\lambda$ and $\mu$ are the **Lamé constants**. Only the combination $\eta + \nu$ survives, so an isotropic linear elastic solid has exactly two independent elastic constants.
2. **Stress and strain share their principal axes.** Every eigenvector of $e$ is an eigenvector of $p$, and if $\varepsilon_1,\varepsilon_2,\varepsilon_3$ are the principal strains then the principal stresses are $\lambda\theta + 2\mu\varepsilon_a$. In particular $e_{ij} = 0$ for $i \neq j$ forces $p_{ij} = 0$ for $i \neq j$.
3. **Young's modulus and Poisson's ratio.** Apply a simple tension $p_{11} = S$ with all other $p_{ij} = 0$, and assume $\mu \neq 0$, $\lambda + \mu \neq 0$ and $3\lambda + 2\mu \neq 0$. Define $E$ by $S = E\,e_{11}$ and $\sigma = -e_{22}/e_{11}$. Then
   $$
   E = \frac{\mu(3\lambda + 2\mu)}{\lambda + \mu} , \qquad \sigma = \frac{\lambda}{2(\lambda+\mu)} ,
   $$
   and solving these for $\lambda$ and $\mu$ puts the law in the form engineers use,
   $$
   p_{ij} \;=\; \frac{\sigma E}{(1+\sigma)(1-2\sigma)}\,\theta\,\delta_{ij} \;+\; \frac{E}{1+\sigma}\,e_{ij} ,
   \qquad\text{i.e.}\qquad
   \lambda = \frac{\sigma E}{(1+\sigma)(1-2\sigma)}, \quad \mu = \frac{E}{2(1+\sigma)} .
   $$

**A notation warning.** Riley, Hobson and Bence write $p_{ij}$ for the stress and reserve $\sigma$ for Poisson's ratio, and this unit follows them. Most engineering texts do the opposite, writing $\sigma_{ij}$ for the stress and $\nu$ for Poisson's ratio — and $\nu$ is one of the three constants in the isotropic tensor above. Check which convention a formula is in before using it.
:::

:::idea{provenance=original}
Isotropy is a very strong constraint, and the whole of statement 1 is an exercise in how little survives it. A fourth-order tensor has $81$ components; an isotropic one must be built from the only isotropic tensors available, which in three dimensions are multiples of $\delta_{ij}$ and products of them, leaving three constants; and because the strain it is contracted against is symmetric, two of those three constants are only ever seen in the combination $\eta+\nu$. Two constants remain. Statement 2 is then immediate: the law expresses $p$ as a linear combination of $e$ and the identity, and adding a multiple of the identity to a matrix does not move its eigenvectors. Statement 3 is a change of variables: $E$ and $\sigma$ are what a tension test measures, and reading the law in a state of simple tension converts one pair of constants into the other.
:::

:::proof{provenance=adapted src="rhb-2006:§26.12, the worked example on pp. 953–954"}
**1. The reduction.** Contract the assumed isotropic form against the strain:
$$
c_{ijkl}e_{kl} = \lambda\,\delta_{ij}\,\delta_{kl}e_{kl} + \eta\,\delta_{ik}\delta_{jl}e_{kl} + \nu\,\delta_{il}\delta_{jk}e_{kl}
= \lambda\,e_{kk}\,\delta_{ij} + \eta\,e_{ij} + \nu\,e_{ji} .
$$
The strain tensor is symmetric, so $e_{ji} = e_{ij}$ and the last two terms merge into $(\eta+\nu)e_{ij}$. Writing $\eta + \nu = 2\mu$ gives statement 1. The symmetry of $e$ is used exactly here, and it is why $\eta$ and $\nu$ cannot be separated by any experiment on an elastic solid.

**2. Principal axes.** In matrix form statement 1 reads $p = \lambda\theta\,I + 2\mu\,e$, with $\theta = \operatorname{tr}e$ a scalar. The strain tensor is real and symmetric, so by the spectral theorem (:ref[]{to=linalg.hermitian-spectral-theorem}) it has an orthonormal basis of eigenvectors $q_a$ with real eigenvalues $\varepsilon_a$. For each of them $p\,q_a = \lambda\theta\,q_a + 2\mu\varepsilon_a q_a = (\lambda\theta + 2\mu\varepsilon_a)q_a$, which is statement 2. Referred to those axes both matrices are diagonal, which is Riley, Hobson and Bence's observation that the principal axes of stress and strain coincide.

**3. Simple tension.** Suppose $p_{11} = S$ and every other $p_{ij} = 0$. For $i\neq j$ statement 1 gives $0 = p_{ij} = 2\mu e_{ij}$, so $e_{ij} = 0$ as well, using $\mu \neq 0$; both tensors are diagonal in the given axes. The three diagonal equations are
$$
S = \lambda\theta + 2\mu e_{11}, \qquad 0 = \lambda\theta + 2\mu e_{22}, \qquad 0 = \lambda\theta + 2\mu e_{33} .
$$
Add them. The left side is $S$; on the right $3\lambda\theta + 2\mu(e_{11}+e_{22}+e_{33}) = 3\lambda\theta + 2\mu\theta$, by the definition of $\theta$. Hence
$$
S = (3\lambda + 2\mu)\,\theta , \tag{1}
$$
and $\theta$ may be eliminated because $3\lambda+2\mu \neq 0$. Substituting $\theta = S/(3\lambda+2\mu)$ into the first equation and solving for $e_{11}$,
$$
e_{11} = \frac{1}{2\mu}\left(S - \frac{\lambda S}{3\lambda+2\mu}\right) = \frac{S}{2\mu}\cdot\frac{2(\lambda+\mu)}{3\lambda+2\mu} = \frac{S\,(\lambda+\mu)}{\mu(3\lambda+2\mu)} .
$$
Since $E = S/e_{11}$ by definition, this is the stated formula for $E$. For Poisson's ratio, the second equation gives $e_{22} = -\lambda\theta/(2\mu)$, so
$$
\sigma = -\frac{e_{22}}{e_{11}} = \frac{\lambda\theta}{2\mu\,e_{11}} = \frac{\lambda}{2\mu}\cdot\frac{S}{3\lambda+2\mu}\cdot\frac{\mu(3\lambda+2\mu)}{S(\lambda+\mu)} = \frac{\lambda}{2(\lambda+\mu)} ,
$$
which uses $\lambda+\mu \neq 0$. Finally, the two displayed relations are a pair of equations for $\lambda$ and $\mu$ in terms of $E$ and $\sigma$; solving them gives the engineering form of the law, and a convenient by-product of (1) is
$$
3\lambda + 2\mu = \frac{E}{1-2\sigma} , \qquad\text{so}\qquad p_{kk} = \frac{E}{1-2\sigma}\,\theta . \tag{2}
$$
$\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Small displacement gradients.* Neither source attaches a smallness condition to $e_{ij}$, but the definition is linear in $u$ while the actual change in the squared length of a material line element is read off from $dx' = (I + Du)\,dx$ as $\lvert dx'\rvert^2 - \lvert dx\rvert^2 = \bigl(Du + Du^{\mathsf T} + Du^{\mathsf T}Du\bigr)_{ij}dx_idx_j = 2e_{ij}\,dx_idx_j + \partial_iu_k\,\partial_ju_k\,dx_idx_j$, the Green–Lagrange strain. Note which slot the summed index sits in: it is $(Du^{\mathsf T}Du)_{ij} = \partial_iu_k\,\partial_ju_k$, not $(Du\,Du^{\mathsf T})_{ij} = \partial_ku_i\,\partial_ku_j$, and the two differ — for the simple shear $u = (x_2,0,0)$ and $dx = (1,0,0)$ the exact change is $0$, which the first reproduces and the second does not. The quadratic term has been dropped, so $e_{ij}$ measures deformation only when $|\partial u_i/\partial x_j| \ll 1$. This is why the whole theory is called *linear* elasticity, and why a thin strip bent through a right angle — small strains, large rotations — needs a different treatment.
- *Symmetry of $e_{ij}$* is used once, at the merging of $\eta$ and $\nu$ in step 1. It is built into the definition, and it is the reason an isotropic solid has two elastic constants rather than three.
- *Symmetry of $p_{ij}$* is assumed, not derived. Riley, Hobson and Bence make it part of the definition; Stakgold and Holst remark that an angular impulse–momentum law accompanies the linear one but do not pursue it for a general continuum, turning instead to rods, where they do write the one-component angular momentum equation (0.4.12) down. It is this symmetry that lets the spectral theorem be applied in step 2 and that makes "principal stress" meaningful. Media in which it fails — those supporting distributed body couples — need couple-stress tensors and lie outside this unit.
- *Isotropy* enters only through the assumed form of $c_{ijkl}$. Arfken, Weber and Harris set as Exercise 4.2.4 the verification that three independent combinations of Kronecker deltas are isotropic — $\delta_{ij}\delta_{kl}$, the sum $\delta_{ik}\delta_{jl} + \delta_{il}\delta_{jk}$ and the difference $\delta_{ik}\delta_{jl} - \delta_{il}\delta_{jk}$ — from which the bare products used above follow as half the sum and half the difference of the last two. That the three exhaust the isotropic fourth-order tensors is the part Riley, Hobson and Bence assume. The companion fact for second-order tensors, that an isotropic one is a multiple of $\delta_{ij}$, is their Exercise 4.1.4. For an anisotropic crystal $c_{ijkl}$ has up to $21$ independent components and statement 2 is false: the principal axes of stress and strain need not coincide.
- *$\mu \neq 0$* is needed in step 3 to conclude that the strain is diagonal; a material with $\mu = 0$ supports no shear stress and is a fluid, for which the whole construction degenerates. In the output variables $\mu = 0$ is exactly $\sigma = \tfrac12$, since $\sigma = \lambda/(2(\lambda+\mu))$ equals $\tfrac12$ precisely when $\mu$ vanishes. *$3\lambda+2\mu \neq 0$* is needed to solve (1); it is equivalent to $\sigma \neq -1$, and also to $E \neq 0$, because $\lambda = -\tfrac23\mu$ gives both. *$\lambda+\mu \neq 0$* is needed for the last step of the Poisson calculation, and on it $E$ and $\sigma$ are not even defined as finite numbers. None of the three excludes a real solid: ordinary materials have $\mu > 0$ and $-1 < \sigma < \tfrac12$.
- *The incompressible limit* is the one place where these conditions nearly bite. Holding $E$ fixed and letting $\sigma \to \tfrac12$ sends $\lambda \to \infty$ with $\mu \to E/3$ finite, and relation (2) shows what happens: $3\lambda+2\mu = E/(1-2\sigma)$ *diverges* rather than vanishes, so the bulk modulus $K = \tfrac13(3\lambda+2\mu)$ becomes infinite and the dilatation is forced to zero. Rubber, with $\sigma \approx 0.4999$, is close enough that naive finite-element formulations in the displacement $u$ alone lock up and must be replaced by mixed formulations carrying the pressure as a separate unknown.
- *The reference configuration* is where $x$, $\rho$ and all the derivatives live. Mixing reference and deformed coordinates is harmless at this order and disastrous beyond it.
:::

:::method[From a displacement field to principal stresses]{provenance=original}
1. **Differentiate the displacement.** Form the matrix $\partial u_i/\partial x_j$. Split it into its symmetric part $e_{ij}$ and its antisymmetric part; only the first carries stress, and inspecting the second tells you how much of the motion is a local rotation.
2. **Take the dilatation** $\theta = e_{kk}$. If the material is nearly incompressible this number should be small, and if it is not, suspect an error.
3. **Convert the elastic data.** Laboratory data come as $E$ and $\sigma$; the law needs $\mu = E/\bigl(2(1+\sigma)\bigr)$ and $\lambda = \sigma E/\bigl((1+\sigma)(1-2\sigma)\bigr)$. Keep the units straight: moduli in GPa, strains dimensionless, stresses in MPa, so a strain of $10^{-4}$ against a modulus of $200$ GPa is $20$ MPa.
4. **Assemble the stress**, $p_{ij} = \lambda\theta\delta_{ij} + 2\mu e_{ij}$.
5. **Diagonalise the strain.** Being real and symmetric it has an orthonormal eigenbasis (:ref[]{to=linalg.eigenvalues-eigenvectors}); the eigenvalues are the principal strains and the eigenvectors the principal directions. By statement 2 you do *not* need to diagonalise the stress separately: the principal stresses are $\lambda\theta + 2\mu\varepsilon_a$ on the same axes.
6. **Read off what the design question needs.** The largest principal stress governs brittle fracture; the maximum shear stress, which is half the difference between the largest and smallest principal stresses, governs yielding in the Tresca criterion.
7. **Check the trace.** By (2) the sum of the principal stresses must equal $E\theta/(1-2\sigma)$. This is a genuine independent check: it uses the dilatation computed in step 2 and never touches the eigenvectors.

**How it fails.** Step 1 is where engineering strain conventions bite: the *shear strain* $\gamma_{12}$ quoted by strain gauges and material data sheets is $2e_{12}$, not $e_{12}$, and a factor of two inserted here propagates into every shear stress. Step 3 is where the notation warning matters. Step 5 tempts one to diagonalise $p$ from scratch and then wonder why the axes agree.
:::

:::example[A sheared and stretched steel block]{provenance=original}
Take structural steel with Young's modulus $E = 200$ GPa and Poisson's ratio $\sigma = 0.3$, and the displacement field
$$
u = c\,\bigl(2x_1 + x_2,\;\; x_1 + 2x_2,\;\; 0\bigr), \qquad c = 10^{-4} .
$$

**Step 1.** The gradient matrix is $c\begin{pmatrix}2&1&0\\1&2&0\\0&0&0\end{pmatrix}$, already symmetric, so there is no rotational part and
$$
[e_{ij}] = 10^{-4}\begin{pmatrix}2&1&0\\1&2&0\\0&0&0\end{pmatrix} .
$$
The displacement gradients are of order $10^{-4}$, comfortably within the linear theory.

**Step 2.** $\theta = (2 + 2 + 0)\times 10^{-4} = 4\times10^{-4}$.

**Step 3.** $\mu = 200/(2\times1.3) = 1000/13 \approx 76.923$ GPa and $\lambda = (0.3\times200)/(1.3\times0.4) = 1500/13 \approx 115.385$ GPa.

**Step 4.** The hydrostatic part is $\lambda\theta = (1500/13)\times 4\times10^{-4}$ GPa $= 600/13 \approx 46.154$ MPa, and $2\mu = 2000/13$ GPa, so
$$
p_{11} = p_{22} = \frac{600}{13} + \frac{2000}{13}\times2\times10^{-4}\times10^{3}\ \text{MPa} = \frac{600 + 400}{13} = \frac{1000}{13} \approx 76.923\ \text{MPa},
$$
$$
p_{12} = \frac{2000}{13}\times10^{-4}\times10^{3} = \frac{200}{13} \approx 15.385\ \text{MPa}, \qquad p_{33} = \frac{600}{13} \approx 46.154\ \text{MPa},
$$
with $p_{13} = p_{23} = 0$. Note that $p_{33}$ is not zero even though $e_{33}$ is: stretching the block in the $x_1x_2$-plane while forbidding it to contract in $x_3$ requires a stress in $x_3$. This is the plane-strain condition.

**Step 5.** The upper-left $2\times2$ block of $[e_{ij}]/c$, namely $\left(\begin{smallmatrix}2&1\\1&2\end{smallmatrix}\right)$, has eigenvalues $3$ and $1$ with eigenvectors $(1,1,0)/\sqrt2$ and $(1,-1,0)/\sqrt2$, and the third principal direction is $(0,0,1)$ with eigenvalue $0$. So the principal strains are
$$
\varepsilon_1 = 3\times10^{-4}, \qquad \varepsilon_2 = 1\times10^{-4}, \qquad \varepsilon_3 = 0 ,
$$
and the principal stresses $\lambda\theta + 2\mu\varepsilon_a$ are
$$
\frac{600}{13} + \frac{600}{13} = \frac{1200}{13} \approx 92.308\ \text{MPa}, \qquad
\frac{600}{13} + \frac{200}{13} = \frac{800}{13} \approx 61.538\ \text{MPa}, \qquad
\frac{600}{13} \approx 46.154\ \text{MPa} .
$$

**Step 6.** The maximum principal stress is $1200/13 \approx 92.3$ MPa, and the maximum shear stress is
$$
\tfrac12\left(\frac{1200}{13} - \frac{600}{13}\right) = \frac{300}{13} \approx 23.1\ \text{MPa} ,
$$
both far below the roughly $250$ MPa yield stress of mild steel, so the block stays elastic.

**Step 7, the check.** The principal stresses sum to $(1200 + 800 + 600)/13 = 2600/13 = 200$ MPa exactly. Independently, $E\theta/(1-2\sigma) = 200\ \text{GPa}\times4\times10^{-4}/0.4 = 0.2$ GPa $= 200$ MPa. The two agree.
:::

:::application{provenance=original}
**The field equations of elasticity.** Substituting Hooke's law into the equation of motion closes the system. With $p_{ij} = \lambda u_{k,k}\delta_{ij} + \mu(u_{i,j} + u_{j,i})$,
$$
\frac{\partial p_{ij}}{\partial x_i} = \lambda\,\partial_j(\nabla\cdot u) + \mu\,\nabla^2 u_j + \mu\,\partial_j(\nabla\cdot u) = \mu\,\nabla^2u_j + (\lambda+\mu)\,\partial_j(\nabla\cdot u) ,
$$
so the motion of an isotropic elastic body with no body force obeys Navier's equation $\rho\,u_{tt} = \mu\nabla^2u + (\lambda+\mu)\nabla(\nabla\cdot u)$. With $\rho$ scaled to one these are exactly the evolution equations of linear elasticity that Evans lists among the basic linear systems, and dropping the time derivative gives his equilibrium equations. They are a coupled elliptic system, not three copies of Laplace's equation: the coupling term $(\lambda+\mu)\nabla(\nabla\cdot u)$ is what makes elasticity harder than electrostatics.

**Two wave speeds, and how seismologists use them.** Evans sets as a problem that $w = \nabla\cdot u$ and $\mathbf w = \nabla\times u$ each satisfy wave equations with different speeds. Taking the divergence of Navier's equation and using $\nabla\cdot\nabla(\nabla\cdot u) = \nabla^2(\nabla\cdot u)$ gives $\rho\,w_{tt} = (\lambda+2\mu)\nabla^2w$; taking the curl and using $\nabla\times\nabla\phi = 0$ gives $\rho\,\mathbf w_{tt} = \mu\nabla^2\mathbf w$. So compressional (P) disturbances travel at $c_P = \sqrt{(\lambda+2\mu)/\rho}$ and shear (S) disturbances at $c_S = \sqrt{\mu/\rho}$, and the ratio $c_P/c_S = \sqrt{(\lambda+2\mu)/\mu}$ depends only on Poisson's ratio. For the steel of the example, $\lambda + 2\mu = 3500/13 \approx 269.2$ GPa and $\rho = 7850$ kg m$^{-3}$ give $c_P \approx 5.86$ km s$^{-1}$ and $c_S \approx 3.13$ km s$^{-1}$, which is what an ultrasonic thickness gauge measures. For a "Poisson solid" with $\sigma = \tfrac14$ one has $\lambda = \mu$ and the ratio is exactly $\sqrt3$; most of the Earth's crust is close to this, which is why the delay between the P and S arrivals at a seismometer converts so simply into a distance to the epicentre, and why three stations suffice to locate an earthquake.

**Measuring the tensor.** A strain-gauge rosette measures the normal strain along three directions in a surface, which is three linear equations for the three independent components of the in-plane strain tensor; the gauge rotation formula it is read with is just the transformation law of a second-order Cartesian tensor (:ref[]{to=geom.tensors}). Photoelasticity does the same job optically: a transparent loaded model placed between crossed polarisers shows fringes along which the difference of the two in-plane principal stresses is constant, so the fringe pattern is a contour map of the maximum shear stress computed in step 6 of the method. Both techniques deliver principal directions, which is why the spectral theorem is the working tool of experimental stress analysis and not an ornament.

**Thermal and residual stress.** Adding a thermal term, $p_{ij} = \lambda\theta\delta_{ij} + 2\mu e_{ij} - \beta\,\Delta T\,\delta_{ij}$, is enough to explain why a constrained rail buckles on a hot day and why a thick weld retains stress after it has cooled: the body is in equilibrium, with $\partial_ip_{ij} = 0$, yet the stress is not zero, because the strain field that would relieve it is not compatible with the constraints. The same arithmetic, with the dilatation driven by swelling instead of heating, governs the cracking of drying mud and of lithium-ion battery electrodes.
:::
