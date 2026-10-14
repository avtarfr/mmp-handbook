---
id: geom.pseudotensors
title: Pseudotensors and the Levi-Civita tensor
kind: definition
level: core
summary: Defines Cartesian pseudotensors by the extra factor of $\det L$ they carry under improper rotations, proves that the permutation symbol is an isotropic third-order pseudotensor and that it pairs antisymmetric tensors with axial vectors, extends both to relative tensors of arbitrary weight in general coordinates, and separates the passive notion of a pseudovector from the active notion of an axial vector.
prereqs: [geom.tensors, geom.metric-tensor, linalg.determinants, vcalc.vector-algebra]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§26.10 'Improper rotations and pseudotensors', pp. 946–949, including Eq. (26.38) for the inversion, the general transformation law (26.39), the worked example showing $\\epsilon_{ijk}b_jc_k$ is a pseudovector, the active/passive discussion and the polar/axial distinction on p. 949 with its footnote on parity in $\\beta$-decay; §26.11 'Dual tensors', pp. 949–950, Eqs. (26.40)–(26.41); §26.12, p. 950, Eq. (26.42) for the inertia tensor; §26.17 'Relative tensors', pp. 963–965, the weight-$w$ law (26.74), the weight of $g$, and the weights of $\\epsilon_{ijk}$ and $\\epsilon^{ijk}$"
    pages: "946-950, 963-965"
    role: the definitions of improper rotation, Cartesian pseudotensor, dual and relative tensor; the polar/axial discussion; the weights
  - work: arfken-2013
    loc: "§4.2 'Pseudotensors, Dual Tensors', pp. 215–218: the pseudovector rule Eq. (4.26), the composition rule Eq. (4.27), Example 4.2.1 on the Levi-Civita symbol with Eqs. (4.28)–(4.30), the dual of an antisymmetric tensor Eqs. (4.31)–(4.33), the scalar triple product as a dual Eqs. (4.34)–(4.36), and Exercises 4.2.2, 4.2.5 and 4.2.7, pp. 217–218"
    pages: "215-218"
    role: the second route to the pseudotensor law, the composition rule for products, the determinant argument for the permutation symbol, and the dual correspondence
---

:::definition[Improper rotations and Cartesian pseudotensors]{provenance=adapted src="rhb-2006:§26.10, Eqs. (26.38)–(26.39), pp. 946–947; arfken-2013:§4.2, Eqs. (4.25)–(4.27), pp. 215–216"}
Throughout this unit the transformations are **passive**: the physical situation is left alone and only the Cartesian axes used to describe it are changed. Let the new axes be given by $x_i' = L_{ij}x_j$ with $L$ orthogonal, so that $\det L = \pm 1$. Following Riley, Hobson and Bence we write $|L|$ for $\det L$ and call the transformation a **proper rotation** when $|L| = +1$ and an **improper rotation** when $|L| = -1$. Every improper rotation is the inversion $x_i' = -x_i$, for which $L_{ij} = -\delta_{ij}$, composed with a proper rotation; equivalently, an improper rotation is one that turns a right-handed set of axes into a left-handed one.

A set of $3^n$ numbers attached to each choice of axes is

- a **Cartesian tensor of order $n$** if, under *every* orthogonal $L$, proper or improper,
  $$
  T'_{ij\cdots k} = L_{ip}L_{jq}\cdots L_{kr}\,T_{pq\cdots r} ;
  $$
- a **Cartesian pseudotensor of order $n$** if instead
  $$
  T'_{ij\cdots k} = |L|\;L_{ip}L_{jq}\cdots L_{kr}\,T_{pq\cdots r} .
  $$

The two laws agree on proper rotations and differ by a sign on improper ones. A pseudotensor of order $0$ is a **pseudoscalar**: invariant under rotation, sign-reversing under reflection. A pseudotensor of order $1$ is a **pseudovector**, for which Arfken, Weber and Harris write the rule in matrix form as $A' = \det(S)\,SA$.

Because the extra factor is multiplicative and $|L|^2 = 1$, the status of a product is settled by a sign rule, which Arfken, Weber and Harris state as $T\otimes T = P\otimes P = T$ and $T\otimes P = P\otimes T = P$, with $T$ for tensor and $P$ for pseudotensor: an outer product or a contraction of two tensors or of two pseudotensors is a tensor, and of one of each is a pseudotensor.
:::

:::definition[Relative tensors and their weights in general coordinates]{provenance=adapted src="rhb-2006:§26.17, Eq. (26.74) and the worked example on the determinant of the metric, pp. 963–965"}
Outside Cartesian coordinates the transformation matrices are the Jacobian matrices of :ref[]{to=geom.tensors}, whose determinants are not $\pm1$, and the single sign $|L|$ generalises to a power of the Jacobian. For a change of general coordinates $u^i \mapsto u'^i$, write $J = \lvert \partial u'/\partial u\rvert$ for the determinant of $[\partial u'^i/\partial u^j]$, so that $\lvert \partial u/\partial u'\rvert = 1/J$.

A **relative tensor of weight $w$** is a set of components transforming by the usual tensor rule multiplied by $\lvert \partial u/\partial u'\rvert^{\,w}$; for example, for one contravariant and one covariant index,
$$
T'^{\,i}{}_{l} \;=\; \frac{\partial u'^i}{\partial u^a}\,\frac{\partial u^d}{\partial u'^l}\;T^{a}{}_{d}\;\left\lvert \frac{\partial u}{\partial u'}\right\rvert^{\,w} .
$$
Riley, Hobson and Bence call a relative tensor of weight $0$ an **absolute** (or true) tensor, one of weight $-1$ a **general pseudotensor**, and one of weight $+1$ a **tensor density**; they note that a Cartesian pseudotensor, where $J = \pm1$, satisfies both of the last two descriptions at once. Weights add under outer products and are unchanged by contraction.
:::

:::statement[The permutation symbol, its weights, and the dual correspondence]{provenance=adapted src="rhb-2006:§26.10, pp. 947–948; rhb-2006:§26.11, Eqs. (26.40)–(26.41), pp. 949–950; rhb-2006:§26.17, pp. 964–965; arfken-2013:§4.2, Example 4.2.1 and Eqs. (4.31)–(4.33), pp. 216–217"}
Let $\epsilon_{ijk}$ denote the **permutation symbol**: $\epsilon_{123} = \epsilon_{231} = \epsilon_{312} = +1$, $\epsilon_{132} = \epsilon_{213} = \epsilon_{321} = -1$, and $\epsilon_{ijk} = 0$ whenever two indices are equal. It is the *same* array of numbers in every coordinate system, by decree.

1. **It is an isotropic third-order Cartesian pseudotensor.** For every orthogonal $L$,
   $$
   \epsilon_{ijk} \;=\; |L|\,L_{ip}L_{jq}L_{kr}\,\epsilon_{pqr} ,
   $$
   which is the pseudotensor law of the definition with $T' = T = \epsilon$. It is *not* a tensor: without the factor $|L|$ the right-hand side equals $-\epsilon_{ijk}$ under every improper rotation.
2. **Cross products are pseudovectors.** If $b_j$ and $c_k$ are the components of (true) vectors, then $a_i = \epsilon_{ijk}b_jc_k$ are the components of a pseudovector, and $\epsilon_{ijk}b_ic_jd_k$ is a pseudoscalar.
3. **Duality.** To an antisymmetric second-order Cartesian tensor $A_{ij}$ associate
   $$
   p_i = \tfrac12\,\epsilon_{ijk}A_{jk} , \qquad\text{so that}\qquad (p_1,p_2,p_3) = (A_{23},\,A_{31},\,A_{12}) .
   $$
   Then $p$ is a pseudovector, called the **dual** of $A$, and the correspondence is invertible: $A_{ij} = \epsilon_{ijk}p_k$. Likewise the dual of a totally antisymmetric third-order tensor $A_{ijk}$ is the pseudoscalar $s = \tfrac1{3!}\epsilon_{ijk}A_{ijk}$, and then $A_{ijk} = s\,\epsilon_{ijk}$.
4. **Weights in general coordinates.** $\epsilon_{ijk}$ is a covariant relative tensor of weight $-1$; the numerically identical array $\epsilon^{ijk}$, carried with upper indices, is a contravariant relative tensor of weight $+1$; and the determinant $g = \det[g_{ij}]$ of the metric is a relative scalar of weight $2$. Consequently $\epsilon_{ijk}$ and $\epsilon^{ijk}$ may be used to pass between antisymmetric tensors and pseudovectors in general coordinates exactly as in the Cartesian case, the weights bookkeeping the extra Jacobian factors.
:::

:::idea{provenance=original}
Everything here comes from one identity about determinants: contracting the three indices of $\epsilon$ with three copies of the same matrix reproduces $\epsilon$ times the determinant of that matrix. For an orthogonal $L$ that determinant is $\pm 1$, which is precisely the extra sign in the pseudotensor law; for a Jacobian matrix it is the Jacobian, which is precisely the weight. The identity itself holds because the contraction is a totally antisymmetric three-index array in three dimensions, and there is only a one-dimensional space of those, so it must be a multiple of $\epsilon$ — and evaluating at $(1,2,3)$ names the multiple as the determinant. Duality is then arithmetic: an antisymmetric $3\times3$ array and a vector both have three independent entries, and $\epsilon$ is the only isotropic object that can match them up.
:::

:::proof{provenance=adapted src="arfken-2013:§4.2, Eqs. (4.29)–(4.30) and Exercise 4.2.7, pp. 216–218; rhb-2006:§26.10, the worked example on p. 948; rhb-2006:§26.11, the worked example on p. 950; rhb-2006:§26.17, pp. 964–965"}
**0. The determinant identity.** Let $M$ be any $3\times3$ matrix and set $f_{ijk} = M_{ip}M_{jq}M_{kr}\epsilon_{pqr}$. Interchanging $i$ and $j$ and then renaming the dummy indices $p \leftrightarrow q$ turns $f_{jik}$ into $M_{iq}M_{jp}M_{kr}\epsilon_{pqr} = M_{ip}M_{jq}M_{kr}\epsilon_{qpr} = -f_{ijk}$, by the antisymmetry of $\epsilon$; the same works for the other two pairs. So $f_{ijk}$ is totally antisymmetric. In three dimensions such an array is determined by its value at $(1,2,3)$, since every non-zero entry is reached from that one by permuting indices and every entry with a repeated index vanishes; hence $f_{ijk} = f_{123}\,\epsilon_{ijk}$. Finally $f_{123} = \epsilon_{pqr}M_{1p}M_{2q}M_{3r}$ is the Leibniz expansion of $\det M$ (:ref[]{to=linalg.determinants}). Therefore
$$
M_{ip}M_{jq}M_{kr}\,\epsilon_{pqr} \;=\; (\det M)\,\epsilon_{ijk} \tag{$\ast$}
$$
for every $3\times3$ matrix $M$.

**1. The permutation symbol.** Put $M = L$ in $(\ast)$: $L_{ip}L_{jq}L_{kr}\epsilon_{pqr} = |L|\,\epsilon_{ijk}$. Multiply both sides by $|L|$. Orthogonality is used here, and only here: it forces $|L| = \pm1$, so $|L|^2 = 1$ and the left-hand side acquires the factor $|L|$ while the right-hand side becomes $\epsilon_{ijk}$. That is statement 1. If instead $\epsilon$ were asked to obey the plain tensor law, $(\ast)$ would give $\epsilon'_{ijk} = |L|\epsilon_{ijk} = -\epsilon_{ijk}$ for improper $L$, contradicting the decree that the array is the same in every frame.

**2. Cross products.** In the new axes $a'_i = \epsilon_{ijk}b'_jc'_k$, with the *same* numbers $\epsilon_{ijk}$. Substitute statement 1 for $\epsilon_{ijk}$ and $b'_j = L_{jm}b_m$, $c'_k = L_{kn}c_n$:
$$
a'_i = |L|\,L_{ip}L_{jq}L_{kr}\epsilon_{pqr}\,L_{jm}b_m\,L_{kn}c_n .
$$
Now use orthogonality in its second role, $L_{jq}L_{jm} = \delta_{qm}$ and $L_{kr}L_{kn} = \delta_{rn}$, which collapses the sums over $j$ and $k$:
$$
a'_i = |L|\,L_{ip}\,\epsilon_{pqr}b_qc_r = |L|\,L_{ip}\,a_p ,
$$
the pseudovector law. Contracting once more with a true vector $d$ gives $\epsilon_{ijk}b_ic_jd_k$, which by the sign rule (pseudotensor times tensor) is a pseudoscalar; Arfken, Weber and Harris identify it as the scalar triple product, the determinant of the three rows $b$, $c$, $d$.

**3. Duality.** That $p_i = \tfrac12\epsilon_{ijk}A_{jk}$ is a pseudovector is again the sign rule. The explicit components follow by writing out the sum: for $i=1$ only $(j,k) = (2,3)$ and $(3,2)$ contribute, giving $\tfrac12(A_{23} - A_{32}) = A_{23}$ by antisymmetry, and cyclically. For the inverse, contract with $\epsilon_{ijk}$ and use the standard identity $\epsilon_{ijk}\epsilon_{klm} = \delta_{il}\delta_{jm} - \delta_{im}\delta_{jl}$ (:ref[]{to=vcalc.vector-algebra}):
$$
\epsilon_{ijk}p_k = \tfrac12\,\epsilon_{ijk}\epsilon_{klm}A_{lm} = \tfrac12\bigl(A_{ij} - A_{ji}\bigr) = A_{ij} ,
$$
the last step using the antisymmetry of $A$. The third-order case is the same computation with $\epsilon_{ijk}\epsilon_{ijk} = 3!$.

**4. Weights.** Apply $(\ast)$ with $M = [\partial u^p/\partial u'^i]$, whose determinant is $\lvert\partial u/\partial u'\rvert$:
$$
\frac{\partial u^p}{\partial u'^i}\frac{\partial u^q}{\partial u'^j}\frac{\partial u^r}{\partial u'^k}\,\epsilon_{pqr} \;=\; \left\lvert \frac{\partial u}{\partial u'}\right\rvert\,\epsilon_{ijk} .
$$
The left-hand side is the plain covariant tensor law applied to $\epsilon$; the array in the new coordinates is again $\epsilon_{ijk}$, so to match we must supply a further factor $\lvert\partial u/\partial u'\rvert^{-1}$, which is the weight-$(-1)$ law. The contravariant array is the same computation with $M = [\partial u'^i/\partial u^p]$ and gives weight $+1$. For the metric determinant, the transformation $g'_{ij} = (\partial u^k/\partial u'^i)(\partial u^l/\partial u'^j)g_{kl}$ reads in matrix form $G' = U^{\mathsf T}GU$ with $U = [\partial u^i/\partial u'^j]$; taking determinants, $g' = \lvert\partial u/\partial u'\rvert^{2}g$, which is weight $2$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Orthogonality of $L$* is used twice in step 2 and nowhere else in step 1: once as $|L|^2 = 1$ and once as $L_{jq}L_{jm} = \delta_{qm}$. Identity $(\ast)$ itself needs no orthogonality, which is exactly why the general-coordinate statement 4 comes out of the same line of algebra with a Jacobian in place of a sign.
- *Three dimensions* is a real hypothesis for statement 3, not a convenience. In $n$ dimensions $\epsilon$ carries $n$ indices, an antisymmetric second-order tensor has $\tfrac12 n(n-1)$ independent components and a vector has $n$, and these agree only at $n = 3$. Arfken, Weber and Harris set this as Exercise 4.2.2, and it is the reason the vector cross product has no $n$-dimensional analogue. Statements 1, 2 and 4 generalise to $n$ indices without change; so does $(\ast)$, which is the Leibniz formula.
- *Antisymmetry of $A_{ij}$* is used at the last equality of step 3. Drop it and the computation returns $\tfrac12(A_{ij} - A_{ji})$: the dual sees only the antisymmetric part, and a symmetric tensor has dual zero.
- *$g > 0$* is needed before $\sqrt{g}$ can be used to build absolute tensors from $\epsilon$, as in the curl formula of :ref[]{to=geom.tensor-operators-general-coordinates}: non-vanishing is not enough, because a real positive root is wanted. That unit records where positivity holds and what replaces it when the metric is indefinite.
- *Orientation and the square root.* Riley, Hobson and Bence state that $g$ is a relative scalar of weight $2$. Taking the positive square root gives $\sqrt{g'} = \bigl\lvert\det[\partial u/\partial u']\bigr\rvert\sqrt{g}$ — with a modulus, because the root is positive by definition. So $\sqrt{g}$ behaves as a relative scalar of weight $1$ for coordinate changes with positive Jacobian, and acquires an extra minus sign for those with negative Jacobian. The combinations $\varepsilon_{ijk} = \sqrt{g}\,\epsilon_{ijk}$ and $\varepsilon^{ijk} = \epsilon^{ijk}/\sqrt{g}$, whose weights cancel to $0$, are therefore absolute tensors under orientation-preserving changes of coordinates and change sign under orientation-reversing ones. This is the general-coordinate form of "pseudo", and it is why an orientation must be chosen before the curl, the vector area or the volume element can be written down.
:::

:::remark[Polar and axial vectors: what is physical and what is bookkeeping]{provenance=adapted src="rhb-2006:§26.10, pp. 947–949, including the footnotes on p. 948 and p. 949"}
Riley, Hobson and Bence are emphatic that a pseudovector is not a geometrical object in the ordinary sense: it is not an arrow in space, because a mere relabelling of the axes reverses it, and they draw it with a broken line to make the point. Their conclusion is that real physical quantities are described by tensors — temperature and density by scalars, velocity, magnetic field strength and angular momentum by vectors — and not by pseudotensors.

The genuinely physical distinction they then draw is a different one, and it concerns **active** transformations, in which the system itself is inverted rather than the axes. Under an active inversion through the origin, a **polar vector** such as position or velocity reverses direction, while an **axial vector** such as the angular momentum $J = m\,(x\times\dot x)$ does not, because both factors of the cross product have reversed. The words *polar* and *axial* therefore classify physical quantities; the words *tensor* and *pseudotensor* classify transformation laws under a change of description. The two are often conflated, and this unit keeps them apart in the way the source does.

Two further points from the same pages, both reported as the source gives them. First, in a left-handed Cartesian system the array $\epsilon_{ijk}b_jc_k$ fails to represent the arrow $b\times c$ at all: each of its three entries comes out with the opposite sign. The handedness of the axes must therefore be fixed before the cross product is written in components, even though the vector relation $a = b\times c$ itself needs no coordinates. Second, a footnote records that pairing an axial with a polar vector in a dot product yields a pseudoscalar, and that parity was shown not to be conserved by detecting a dependence of the angular distribution of $\beta$-decay electrons, of momentum $p_e$ and emitted by polarised nuclei of spin $J_N$, on the pseudoscalar quantity $J_N\cdot p_e$. The footnote does not say which transformation it has in mind; it is the active one — under an active inversion $p_e$ reverses and $J_N$ does not, so the product changes sign — since under the passive reading of the rest of the section both are ordinary vectors and their product would be invariant.
:::

:::example[A reflection, worked in numbers]{provenance=original}
Work in a right-handed Cartesian frame $S$ with three true vectors
$$
b = (1,2,3), \qquad c = (4,5,6), \qquad d = (1,0,1) .
$$

**The cross product.** $a_i = \epsilon_{ijk}b_jc_k$ gives $a_1 = 2\cdot6 - 3\cdot5 = -3$, $a_2 = 3\cdot4 - 1\cdot6 = 6$, $a_3 = 1\cdot5 - 2\cdot4 = -3$, so $a = (-3, 6, -3)$.

**Change to a left-handed frame.** Take $L = \operatorname{diag}(1,1,-1)$, the reflection in the plane $x_3 = 0$; it is orthogonal with $|L| = -1$, hence improper. Since $b$, $c$, $d$ are true vectors their new components are $b' = (1,2,-3)$, $c' = (4,5,-6)$, $d' = (1,0,-1)$.

**Evaluate both candidate laws.** Computing the cross product afresh from the primed components, with the same numerical array $\epsilon_{ijk}$:
$$
a'_1 = 2(-6) - (-3)5 = 3, \qquad a'_2 = (-3)4 - 1(-6) = -6, \qquad a'_3 = 1\cdot5 - 2\cdot4 = -3 ,
$$
so $a' = (3,-6,-3)$. The tensor law would predict $L_{ip}a_p = (-3, 6, 3)$, which is wrong in all three entries. The pseudotensor law predicts $|L|\,L_{ip}a_p = -(-3,6,3) = (3,-6,-3)$, which is right. The same test with the improper matrix $M = -R$, where $R$ is the quarter turn about $x_3$, gives $M b = (2,-1,-3)$ and $Mc = (5,-4,-6)$, whose cross product is $(-6,-3,-3)$, and $|M|\,Ma = -(6,3,3) = (-6,-3,-3)$ again.

**A pseudoscalar.** The triple product $s = \epsilon_{ijk}b_ic_jd_k = a\cdot d = -3 + 0 - 3 = -6$, which is also the determinant of the matrix with rows $b$, $c$, $d$. In the primed frame $s' = a'\cdot d' = 3 + 0 + 3 = +6 = -s$: a single number that reverses sign when the axes are reflected, which no scalar does.

**The dual.** The antisymmetric tensor dual to $a$ is $A_{ij} = \epsilon_{ijk}a_k$, that is
$$
[A_{ij}] = \begin{pmatrix} 0 & -3 & -6 \\ 3 & 0 & -3 \\ 6 & 3 & 0 \end{pmatrix} ,
$$
since $A_{12} = a_3 = -3$, $A_{23} = a_1 = -3$ and $A_{31} = a_2 = 6$. Reading off $(A_{23}, A_{31}, A_{12}) = (-3, 6, -3)$ returns $a$, as statement 3 requires. Here $A$ is a true tensor, being the product of the pseudotensor $\epsilon$ with the pseudovector $a$.

**A general-coordinate check.** Take the skew chart $x = u$, $y = uv$, $z = w$ of :ref[]{to=geom.tensor-operators-general-coordinates}, on which $g = u^2$ and $\sqrt g = u$. The absolute tensor of statement 4 and the remark is $\varepsilon_{ijk} = u\,\epsilon_{ijk}$, so $\varepsilon_{123} = u$; and indeed $e_u\cdot(e_v\times e_w) = u$, the signed volume of the cell that the three basis vectors span — which is the coordinate-free quantity $\varepsilon_{123}$ is meant to record. At the point $u = 2$ the three numbers $\varepsilon_{123} = 2$, $\varepsilon^{123} = \tfrac12$ and $\epsilon_{123} = 1$ are all different, and only the first two are components of tensors.
:::

:::application{provenance=original}
**Parity, and why the distinction is not pedantic.** In electromagnetism the electric field is polar and the magnetic field is axial: under an active inversion of a current loop the circulating charges reverse their velocities, and $B$ is unchanged. The product $E\cdot B$ is therefore a pseudoscalar, and a term proportional to it in a Lagrangian violates parity. That observation is the whole content of the $\beta$-decay experiment the previous remark describes, and it is also why the axion is introduced as a pseudoscalar field: it is allowed to couple to $E\cdot B$ and so to shift the parity-violating angle of quantum chromodynamics. In optics the same arithmetic explains why a chiral molecule rotates the plane of polarisation: the rotation angle per unit length is a pseudoscalar property of the medium, so the two enantiomers of a sugar necessarily rotate it by equal and opposite amounts, and a racemic mixture does not rotate it at all.

**Rotation and the hat map.** The angular velocity of a rigid body is the dual of an antisymmetric tensor, and in computation it is almost always the tensor that is stored. If $R(t)$ is the rotation taking body axes to space axes, then differentiating $RR^{\mathsf T} = I$ shows that $\Omega = \dot R R^{\mathsf T}$ is antisymmetric, and the angular velocity is the pseudovector $\omega$ with $\Omega v = \omega\times v$, that is $\Omega_{ik} = \epsilon_{ijk}\omega_j$ in components. Beware the sign: contracting that with $\tfrac12\epsilon_{lik}$ and using $\epsilon_{ilk}\epsilon_{ijk} = 2\delta_{lj}$ gives $\tfrac12\epsilon_{lik}\Omega_{ik} = -\omega_l$, so the dual of $\Omega$ in the sense of statement 3 is $-\omega$, and the angular velocity is recovered as $\omega_i = -\tfrac12\epsilon_{ijk}\Omega_{jk} = \tfrac12\epsilon_{ijk}\Omega_{kj}$. Robotics and graphics libraries call the passage from $\omega$ to $\Omega$ the "hat map"; it is statement 3 read backwards, with that minus sign kept in view — transposing the two indices of $\Omega$ is exactly what hides it. The same algebra puts the inertia tensor on a sound footing: Riley, Hobson and Bence obtain $J_i = I_{il}\omega_l$ with $I_{il} = \sum_\alpha m^{(\alpha)}\bigl(r_{(\alpha)}^2\delta_{il} - x^{(\alpha)}_ix^{(\alpha)}_l\bigr)$ by contracting two permutation symbols, and since $J$ and $\omega$ are both pseudovectors the sign rule makes $I$ an ordinary tensor — which is what licenses the use of the spectral theorem to find its principal axes, as in :ref[]{to=geom.stress-strain}.

**Crystal and continuum physics.** Material properties are tensors whose form is constrained by the symmetry group of the material, and whether the property is a tensor or a pseudotensor decides the constraint. The arithmetic is one line: put $L = -I$ in the two laws of the definition. A true tensor of order $n$ is multiplied by $(-1)^n$ and a pseudotensor of order $n$ by $|L|(-1)^n = (-1)^{n+1}$. A **centrosymmetric** crystal — one whose point group contains the inversion — requires the property to come back to itself, so in such a crystal every true tensor of *odd* order and every pseudotensor of *even* order vanishes identically, while a pseudotensor of odd order is unconstrained by the inversion.

Each half has its standard consequence. No centrosymmetric crystal is piezoelectric, because the piezoelectric moduli $d_{ijk}$ form a true third-order tensor. Nor is one optically active, because optical rotation is carried by the second-order gyration pseudotensor $g_{ij}$: quartz, whose point group $32$ has no centre, rotates the plane of polarisation, and calcite, whose group $\bar3m$ does, does not. The surviving case is odd-order and pseudo: the spontaneous magnetisation of a ferromagnet is an axial vector, order $1$, and the inversion leaves it alone — which is why iron can be both centrosymmetric and magnetically ordered. In continuum mechanics the same bookkeeping distinguishes the ordinary stress tensor from the couple-stress tensors of micropolar media.

**In the language of forms.** Everything in this unit is said more economically with differential forms, where duality is the Hodge star and the factor $\sqrt g$ appears by itself: see :ref[]{to=geom.differential-forms} and :ref[]{to=geom.hodge-star-maxwell}. The payoff of that language is exactly the point of the remark on orientation — the pseudo-ness is isolated into the single choice of an orientation on the manifold, rather than being carried as a sign on every object.
:::
