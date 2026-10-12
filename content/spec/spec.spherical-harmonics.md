---
id: spec.spherical-harmonics
title: Spherical harmonics
kind: theorem
level: core
summary: "The orthonormal basis of L^2 of the sphere made from the associated Legendre functions and e^{i m phi}: its definition and conventions, the Laplace series that expands any square-integrable function on the sphere, and the addition theorem that turns a Legendre polynomial of the angle between two directions into a sum of 2l+1 products."
prereqs: [spec.associated-legendre, spec.legendre-polynomials, funcan.orthonormal-bases]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§15.4, the definition (15.78) of P_l^m with the AMS-55 phase, p. 743; §15.5 (Spherical Harmonics), the azimuthal factors (15.132)–(15.134), pp. 756–757, the normalised polar factor (15.135)–(15.136) and the definition (15.137) with the orthonormality (15.138), p. 757, the Condon-Shortley phase discussion, p. 758, Table 15.4, p. 760, the Laplace expansion (15.144) with its coefficient formula (15.145) and Example 15.5.1, pp. 760–761, Example 15.5.2 (gravity fields of the Earth, Moon and Mars) with the series (15.146) and Table 15.5 — whose caption cites (15.145) rather than (15.146) — p. 762, the rotation matrices (15.147), p. 763, and the special values (15.148)–(15.149) and recurrences (15.150)–(15.152), p. 764"
    pages: "743, 756-764"
    role: the definition of Y_l^m as the product of a normalised associated Legendre function and a normalised complex exponential; the orthonormality over the sphere; the naming and purpose of the Condon-Shortley phase; the Laplace series and its use in matching boundary data on a sphere; the special values at the poles; the closure of the 2l+1 functions of a given l under rotations; the gravity-field application with its real-valued variant
  - work: rhb-2006
    loc: "§18.2.1, the phase-free definition (18.32) of P_l^m, p. 588; §18.3 (Spherical harmonics), the separated angular solution and the definition (18.45) with the conjugation rule, p. 593, the table of the first six, p. 593, the orthonormality (18.46) and the completeness (18.47)–(18.48), pp. 593–594, the addition theorem (18.49) with the angle identity (18.50) and the full proof via the closure relation (18.51)–(18.53) and a rigid rotation, pp. 594–595"
    pages: "588, 593-595"
    role: the definition with the phase factor carried in Y rather than in P; the orthonormality and completeness statements; the statement and complete proof of the addition theorem by expanding the delta function on the sphere in Legendre polynomials of the included angle and then equating the two sums term by term using the closure of each l-space under rotations
  - work: strauss-2008
    loc: "§10.3 (Solid vibrations in a ball), the separate orthogonality conditions in phi and theta and the normalising constant (23), p. 275, the unnormalised definition of Y_l^m and the completeness Theorem 1, p. 275, the first few harmonics in Cartesian form, p. 276, Example 2 (the Dirichlet problem in a ball) with the solution (24)–(25), pp. 276–277, and the proof that the solid harmonics r^l Y_l^m are polynomials in x, y, z, p. 277"
    pages: "275-277"
    role: the completeness theorem stated for every square-integrable function on a sphere; the convention with no normalising factor and |m| in the index; the interior Dirichlet problem solved by a spherical-harmonic series; the fact that r^l Y_l^m is a harmonic polynomial in Cartesian coordinates
  - work: hassani-2013
    loc: "§13.4 (Eigenvectors of L²: Spherical Harmonics), eqs. (13.25)–(13.34), pp. 406–409, the orthonormality integral (13.30)–(13.31), p. 408, Y_l^0 in terms of P_l, eq. (13.32), p. 408, Box 13.4.2, p. 409, and the conjugation relation (13.37), p. 410"
    pages: "406-410"
    role: the ladder-operator derivation, in which the spherical harmonics appear as the simultaneous eigenfunctions of the angular-momentum operators L² and L_z; the orthonormality in the Dirac bracket form; the relation Y_{l,-m} = (-1)^m conj(Y_{lm}); the identification of Y_l^0 with sqrt((2l+1)/4pi) P_l
---

:::definition[Spherical harmonics]{provenance=adapted src="arfken-2013:§15.5, eqs. (15.132), (15.135) and (15.137), pp. 756–757; hassani-2013:§13.4, eqs. (13.25)–(13.33), pp. 406–408"}
Let $(\theta,\varphi)$ be spherical polar angles on the unit sphere $S^{2}$: $\theta\in[0,\pi]$ the polar angle from the $z$-axis, $\varphi\in[0,2\pi)$ the azimuth. Write $\mathrm{d}\Omega=\sin\theta\,\mathrm{d}\theta\,\mathrm{d}\varphi=\mathrm{d}\varphi\,\mathrm{d}(\cos\theta)$ for the element of solid angle, so that $\int_{S^{2}}\mathrm{d}\Omega=4\pi$, and
$$
(f,g)=\int_{S^{2}}f(\theta,\varphi)\,\overline{g(\theta,\varphi)}\,\mathrm{d}\Omega
$$
for the inner product of $L^{2}(S^{2})$.

For integers $l\ge0$ and $-l\le m\le l$, the **spherical harmonic** is
$$
Y_{l}^{m}(\theta,\varphi)=\sqrt{\frac{2l+1}{4\pi}\,\frac{(l-m)!}{(l+m)!}}\;P_{l}^{m}(\cos\theta)\;\mathrm{e}^{\mathrm{i}m\varphi},
$$
with $P_{l}^{m}$ the associated Legendre function of :ref[]{to=spec.associated-legendre}, *including* its Condon-Shortley phase $(-1)^{m}$. There are $2l+1$ harmonics of each order $l$. This is Arfken, Weber and Harris's eq. (15.137) verbatim; books whose $P_{l}^{m}$ is phase-free display an extra $(-1)^{m}$ in front and arrive at the same function, as the remark below sets out. Equivalently $Y_{l}^{m}=\Theta_{l}^{m}(\theta)\,\Phi_{m}(\varphi)$ with the two separately normalised factors of Arfken, Weber and Harris,
$$
\Theta_{l}^{m}(\theta)=\sqrt{\frac{2l+1}{2}\frac{(l-m)!}{(l+m)!}}\,P_{l}^{m}(\cos\theta),
\qquad
\Phi_{m}(\varphi)=\frac{\mathrm{e}^{\mathrm{i}m\varphi}}{\sqrt{2\pi}} .
$$
The first few, with $x=\cos\theta$:
$$
Y_{0}^{0}=\frac{1}{\sqrt{4\pi}},
\qquad
Y_{1}^{0}=\sqrt{\frac{3}{4\pi}}\cos\theta,
\qquad
Y_{1}^{\pm1}=\mp\sqrt{\frac{3}{8\pi}}\sin\theta\,\mathrm{e}^{\pm\mathrm{i}\varphi},
$$
$$
Y_{2}^{0}=\sqrt{\frac{5}{16\pi}}\bigl(3\cos^{2}\theta-1\bigr),
\quad
Y_{2}^{\pm1}=\mp\sqrt{\frac{15}{8\pi}}\sin\theta\cos\theta\,\mathrm{e}^{\pm\mathrm{i}\varphi},
\quad
Y_{2}^{\pm2}=\sqrt{\frac{15}{32\pi}}\sin^{2}\theta\,\mathrm{e}^{\pm2\mathrm{i}\varphi}.
$$
They are the eigenfunctions of the angular part of the Laplacian:
$$
\Bigl[\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}\Bigl(\sin\theta\frac{\partial}{\partial\theta}\Bigr)+\frac{1}{\sin^{2}\theta}\frac{\partial^{2}}{\partial\varphi^{2}}\Bigr]Y_{l}^{m}=-l(l+1)\,Y_{l}^{m} ,
$$
which is why they appear in every separation of $\nabla^{2}$ in spherical polars (:ref[]{to=pde.separation-of-variables}). Hassani reaches the same functions as the simultaneous eigenfunctions of the quantum angular-momentum operators, $L^{2}Y_{l}^{m}=l(l+1)Y_{l}^{m}$ and $L_{z}Y_{l}^{m}=mY_{l}^{m}$, built by applying the lowering operator $L_{-}$ repeatedly to the top state $Y_{l}^{l}\propto\sin^{l}\theta\,\mathrm{e}^{\mathrm{i}l\varphi}$.
:::

:::remark[Conventions, and how to translate between books]{provenance=adapted src="arfken-2013:§15.4, eq. (15.78), p. 743, and §15.5, p. 757 and p. 758, and Table 15.4, p. 760; rhb-2006:§18.2.1, eq. (18.32), p. 588, and §18.3, eq. (18.45), p. 593; strauss-2008:§10.3, p. 275; hassani-2013:§13.4, Box 13.4.2, eqs. (13.34)–(13.35), p. 409, and eq. (13.37), p. 410"}
The function $Y_{l}^{m}$ above is the one almost universally used in physics, but it is reached by two different bookkeepings and there is a third, unnormalised, convention.

- **The phase in $P$.** Arfken, Weber and Harris put the $(-1)^{m}$ into $P_{l}^{m}$ (their eq. (15.78)) and so write $Y_{l}^{m}=\sqrt{\tfrac{2l+1}{4\pi}\tfrac{(l-m)!}{(l+m)!}}\,P_{l}^{m}(\cos\theta)\mathrm{e}^{\mathrm{i}m\varphi}$, eq. (15.137) — our definition.
- **The phase in $Y$.** Riley, Hobson and Bence and Hassani keep $P_{l}^{m}$ phase-free (eqs. (18.32) and (13.35) respectively; Hassani's $P_{1}^{1}=+\sin\theta$, where ours is $-\sin\theta$) and display the factor in the harmonic instead: $Y_{l}^{m}=(-1)^{m}\sqrt{\tfrac{2l+1}{4\pi}\tfrac{(l-m)!}{(l+m)!}}\,P_{l}^{m}(\cos\theta)\mathrm{e}^{\mathrm{i}m\varphi}$, which is Riley, Hobson and Bence's eq. (18.45) and Hassani's eq. (13.34) in Box 13.4.2.

The two bookkeepings give the *same* $Y_{l}^{m}$: the $(-1)^{m}$ sits in a different factor, not in the product. The tables agree, including $Y_{1}^{1}=-\sqrt{3/8\pi}\sin\theta\,\mathrm{e}^{\mathrm{i}\varphi}$. Arfken, Weber and Harris call the resulting signs the Condon-Shortley phase and note that its purpose is to simplify calculations in the quantum theory of angular momentum.

- **Strauss** uses $Y_{l}^{m}=P_{l}^{\lvert m\rvert}(\cos\theta)\mathrm{e}^{\mathrm{i}m\varphi}$ with no normalising factor and no phase, remarking that the constant coefficients are arbitrary anyway. His functions are orthogonal but not orthonormal, and his table lists real combinations such as $\sin^{2}\theta\cos2\varphi=(x^{2}-y^{2})/r^{2}$.

A fourth variant, the **real** spherical harmonics, replaces $\mathrm{e}^{\mathrm{i}m\varphi}$ by $\cos m\varphi$ and $\sin m\varphi$. Arfken, Weber and Harris use these in the geodesy application, writing $Y^{e}_{ml}=P_{l}^{m}(\cos\theta)\cos m\varphi$ and $Y^{o}_{ml}=P_{l}^{m}(\cos\theta)\sin m\varphi$ after Morse and Feshbach — note that those authors put the $m$ index first, a trap when reading tables of coefficients.

Everything below is stated in our convention. What is convention-independent: the eigenvalue equation, the orthonormality relation, the completeness statement, and the addition theorem (whose right-hand side is $\lvert Y\rvert^{2}$-like and so phase-blind). What is convention-dependent: every entry with odd $m$ in a table of $P_{l}^{m}$ (not of $Y_{l}^{m}$, which the first two bookkeepings agree on), and anything at all if Strauss's unnormalised functions are used — his lack of both the phase and the factorial factor turns the conjugation relation of part 2 below into the bare $\overline{Y_{l}^{m}}=Y_{l}^{-m}$, with no $(-1)^{m}$, and makes part 1 an orthogonality relation with a non-unit constant. Part 2 as stated is the same under the two conventions compared above, since both give the same $Y_{l}^{m}$; it is Hassani's eq. (13.37) and Riley, Hobson and Bence's relation on p. 593.
:::

:::statement[Orthonormality, completeness, closure and the addition theorem]{provenance=adapted src="arfken-2013:§15.5, eqs. (15.138), (15.144)–(15.145), (15.147)–(15.149), pp. 757–764; rhb-2006:§18.3, eqs. (18.46)–(18.53), pp. 593–595; strauss-2008:§10.3, Theorem 1, p. 275, and p. 277; hassani-2013:§13.4, eqs. (13.31)–(13.32) and (13.37), pp. 408–410"}
Let $l,l'\ge0$ and $\lvert m\rvert\le l$, $\lvert m'\rvert\le l'$ be integers, and write $\Omega=(\theta,\varphi)$.

1. **Orthonormality.**
   $$
   \bigl(Y_{l}^{m},Y_{l'}^{m'}\bigr)=\int_{S^{2}}Y_{l}^{m}(\Omega)\,\overline{Y_{l'}^{m'}(\Omega)}\,\mathrm{d}\Omega=\delta_{ll'}\,\delta_{mm'} .
   $$
2. **Conjugation and parity.**
   $$
   \overline{Y_{l}^{m}(\Omega)}=(-1)^{m}\,Y_{l}^{-m}(\Omega),
   \qquad
   Y_{l}^{m}(\pi-\theta,\varphi+\pi)=(-1)^{l}\,Y_{l}^{m}(\theta,\varphi).
   $$
3. **Values on the axis.**
   $$
   Y_{l}^{m}(0,\varphi)=\sqrt{\frac{2l+1}{4\pi}}\,\delta_{m0},
   \qquad
   Y_{l}^{m}(\pi,\varphi)=(-1)^{l}\sqrt{\frac{2l+1}{4\pi}}\,\delta_{m0},
   \qquad
   Y_{l}^{0}=\sqrt{\frac{2l+1}{4\pi}}\,P_{l}(\cos\theta).
   $$
4. **Completeness (the Laplace series).** The family $\{Y_{l}^{m}\}$ is a complete orthonormal system in $L^{2}(S^{2})$: every $f\in L^{2}(S^{2})$ has
   $$
   f(\Omega)=\sum_{l=0}^{\infty}\sum_{m=-l}^{l}a_{lm}\,Y_{l}^{m}(\Omega),
   \qquad
   a_{lm}=\int_{S^{2}}\overline{Y_{l}^{m}(\Omega)}\,f(\Omega)\,\mathrm{d}\Omega,
   $$
   the series converging in $L^{2}(S^{2})$, with $\lVert f\rVert^{2}=\sum_{l,m}\lvert a_{lm}\rvert^{2}$. This is Strauss's Theorem 1, stated for every function on a sphere whose square is integrable; Arfken, Weber and Harris call the expansion a **Laplace series** and state it as a uniformly convergent double series for $f$ with sufficient continuity, referring to Hobson for the proof. Riley, Hobson and Bence present it as the exact analogue of a Fourier series and a special case of the general Sturm-Liouville property. We state the $L^{2}$ version, which is what the orthonormality of part 1 plus the density of the trigonometric-times-polynomial system gives; pointwise and uniform statements need extra smoothness of $f$ and are not proved here.
5. **Closure.** As an identity of distributions on $S^{2}\times S^{2}$,
   $$
   \sum_{l=0}^{\infty}\sum_{m=-l}^{l}Y_{l}^{m}(\Omega)\,\overline{Y_{l}^{m}(\Omega')}=\delta(\Omega-\Omega'),
   $$
   where $\delta(\Omega-\Omega')$ is the Dirac delta on the sphere: $\delta(\Omega-\Omega')=0$ for $\Omega\neq\Omega'$ and $\int_{S^{2}}\delta(\Omega)\,\mathrm{d}\Omega=1$.
6. **Addition theorem.** Let $\Omega=(\theta,\varphi)$ and $\Omega'=(\theta',\varphi')$ be two directions separated by the angle $\gamma$, so that
   $$
   \cos\gamma=\cos\theta\cos\theta'+\sin\theta\sin\theta'\cos(\varphi-\varphi') .
   $$
   Then for every $l\ge0$,
   $$
   P_{l}(\cos\gamma)=\frac{4\pi}{2l+1}\sum_{m=-l}^{l}Y_{l}^{m}(\Omega)\,\overline{Y_{l}^{m}(\Omega')} .
   $$
   Equivalently, in terms of associated Legendre functions,
   $$
   P_{l}(\cos\gamma)=\sum_{m=-l}^{l}\frac{(l-m)!}{(l+m)!}\,P_{l}^{m}(\cos\theta)P_{l}^{m}(\cos\theta')\,\mathrm{e}^{\mathrm{i}m(\varphi-\varphi')} .
   $$
7. **Solid harmonics.** $r^{l}Y_{l}^{m}(\theta,\varphi)$ is a harmonic function on $\mathbb{R}^{3}$ and, in fact (Strauss), a homogeneous polynomial of degree $l$ in $x,y,z$. The general solution of $\nabla^{2}u=0$ regular at the origin is $\sum_{l,m}A_{lm}r^{l}Y_{l}^{m}$, and the general solution regular at infinity is $\sum_{l,m}B_{lm}r^{-l-1}Y_{l}^{m}$.
:::

:::idea{provenance=original}
Parts 1 to 3 are bookkeeping: the sphere's measure factorises as $\mathrm{d}\varphi\,\mathrm{d}(\cos\theta)$, so the double integral splits into the $\varphi$-integral $\int_{0}^{2\pi}\mathrm{e}^{\mathrm{i}(m-m')\varphi}\mathrm{d}\varphi=2\pi\delta_{mm'}$ and, once $m=m'$, the associated Legendre orthogonality already proved. The constant under the square root is exactly what makes the product come out as $1$.

Part 6 is the one real theorem, and the proof is a two-step trick.

*First step.* The closure relation of part 5 says $\sum_{l}\sum_{m}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}$ is the delta function on the sphere. But a delta function that depends only on the *relative* position of two directions can also be expanded in Legendre polynomials of the included angle $\gamma$, because $P_{l}(\cos\gamma)$ is a complete system for functions of one angle. Computing those coefficients needs only $P_{l}(1)=1$, and gives $(2l+1)/4\pi$. So the two expansions are
$$
\sum_{l}\Bigl[\sum_{m}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}\Bigr]
=\sum_{l}\frac{2l+1}{4\pi}P_{l}(\cos\gamma),
$$
two sums over $l$ with equal totals.

*Second step.* Equal totals are not equal terms. What makes the sums match term by term is that each $l$-block is **rotation invariant**: the $2l+1$ functions $Y_{l}^{m}$ of a fixed $l$ span a space that a rotation of the axes maps into itself and never mixes with another $l$. Choose the new polar axis along $\Omega'$; then $P_{l}(\cos\gamma)$ is a multiple of $Y_{l}^{0}$ in the new frame, hence a combination of the $Y_{l}^{m}$ of the old frame with the same $l$. So the $l$th term on the right lives in the $l$th block, matching the $l$th term on the left, and the sums agree block by block.
:::

:::proof[Parts 1–3, and part 5]{provenance=adapted src="arfken-2013:§15.5, eqs. (15.134), (15.136), (15.138) and (15.148)–(15.149), pp. 757–764; rhb-2006:§18.3, eqs. (18.46) and (18.51), pp. 593–594; hassani-2013:§13.4, eqs. (13.30)–(13.32) and (13.37), pp. 408–410"}
**Part 1.** Write the solid-angle element as $\mathrm{d}\Omega=\mathrm{d}\varphi\,\mathrm{d}(\cos\theta)$ and put $x=\cos\theta$. Then
$$
\bigl(Y_{l}^{m},Y_{l'}^{m'}\bigr)
=N_{lm}N_{l'm'}\int_{0}^{2\pi}\mathrm{e}^{\mathrm{i}(m-m')\varphi}\mathrm{d}\varphi
\int_{-1}^{1}P_{l}^{m}(x)P_{l'}^{m'}(x)\,\mathrm{d}x ,
$$
with $N_{lm}$ the square root in the definition, which is real so no conjugation touches it; the $P_{l}^{m}$ are real as well. The $\varphi$-integral is $2\pi\delta_{mm'}$ — this is where the azimuthal orthogonality lives, and it is the reason $m=m'$ may be assumed in the $x$-integral. With $m=m'$ the $x$-integral is part 6 of :ref[]{to=spec.associated-legendre}, namely $\dfrac{2}{2l+1}\dfrac{(l+m)!}{(l-m)!}\delta_{ll'}$. Hence
$$
\bigl(Y_{l}^{m},Y_{l'}^{m'}\bigr)
=\delta_{mm'}\delta_{ll'}\cdot 2\pi\cdot\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}\cdot\frac{2}{2l+1}\frac{(l+m)!}{(l-m)!}
=\delta_{ll'}\delta_{mm'} ,
$$
since $2\pi\cdot 2/(4\pi)=1$ and the factorials cancel.

**Part 2.** Conjugating, $\overline{Y_{l}^{m}}=N_{lm}P_{l}^{m}(\cos\theta)\mathrm{e}^{-\mathrm{i}m\varphi}$. On the other hand, by the negative-$m$ relation of :ref[]{to=spec.associated-legendre},
$$
Y_{l}^{-m}=N_{l,-m}P_{l}^{-m}(\cos\theta)\mathrm{e}^{-\mathrm{i}m\varphi}
=\sqrt{\frac{2l+1}{4\pi}\frac{(l+m)!}{(l-m)!}}\cdot(-1)^{m}\frac{(l-m)!}{(l+m)!}P_{l}^{m}(\cos\theta)\,\mathrm{e}^{-\mathrm{i}m\varphi} .
$$
The product of the two $m$-dependent factors is $(-1)^{m}\sqrt{\tfrac{2l+1}{4\pi}\tfrac{(l-m)!}{(l+m)!}}=(-1)^{m}N_{lm}$, so $Y_{l}^{-m}=(-1)^{m}\overline{Y_{l}^{m}}$, which rearranges to the stated relation because $(-1)^{m}=(-1)^{-m}$. Hassani records exactly this as his eq. (13.37). For the parity statement, the antipodal map is $\theta\mapsto\pi-\theta$, $\varphi\mapsto\varphi+\pi$, that is $x\mapsto-x$ and $\mathrm{e}^{\mathrm{i}m\varphi}\mapsto(-1)^{m}\mathrm{e}^{\mathrm{i}m\varphi}$; combining with $P_{l}^{m}(-x)=(-1)^{l+m}P_{l}^{m}(x)$ gives the factor $(-1)^{l+m}(-1)^{m}=(-1)^{l}$, with no $m$ left.

**Part 3.** At $\theta=0$ the azimuth is meaningless, so any harmonic with a genuine $\varphi$-dependence must vanish there; concretely $P_{l}^{m}(\pm1)=0$ for $m\neq0$, leaving only $m=0$. For $m=0$, $N_{l0}=\sqrt{(2l+1)/4\pi}$ and $P_{l}(1)=1$, $P_{l}(-1)=(-1)^{l}$, which gives the two displayed values. The identity $Y_{l}^{0}=\sqrt{(2l+1)/4\pi}\,P_{l}(\cos\theta)$ is the same statement without evaluating $\theta$; it is Hassani's eq. (13.32) and it is the bridge used repeatedly below.

**Part 5.** Substitute the coefficient formula of part 4 into the expansion of part 4 and exchange the order of summation and integration:
$$
f(\Omega)=\sum_{l,m}\Bigl[\int_{S^{2}}\overline{Y_{l}^{m}(\Omega')}f(\Omega')\,\mathrm{d}\Omega'\Bigr]Y_{l}^{m}(\Omega)
=\int_{S^{2}}f(\Omega')\Bigl[\sum_{l,m}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}\Bigr]\mathrm{d}\Omega' .
$$
The bracket therefore reproduces $f$ at $\Omega$ when integrated against $f$, for every $f$; that is the defining property of $\delta(\Omega-\Omega')$. (Read as an identity of distributions: the double series does not converge pointwise, exactly as $\sum_{n}\mathrm{e}^{\mathrm{i}n\theta}/2\pi$ does not. Riley, Hobson and Bence derive the relation in this way and use it immediately in the next proof.) $\square$
:::

:::proof[Part 6, the addition theorem]{provenance=adapted src="rhb-2006:§18.3, the proof of eq. (18.49) via eqs. (18.51)–(18.53), pp. 594–595; arfken-2013:§15.5, eq. (15.147) and the surrounding rotation argument, p. 763"}
We follow Riley, Hobson and Bence. Fix $\Omega'$ and let $\gamma$ be the polar angle of $\Omega$ measured from $\Omega'$.

**Step 1: expand the delta function in Legendre polynomials of $\gamma$.** The function $\delta(\Omega-\Omega')$ can only depend on $\Omega$ and $\Omega'$ through their relative position, which on a sphere means through $\gamma$ alone. Expanding a function of the single variable $\cos\gamma\in[-1,1]$ in Legendre polynomials (part 4 of :ref[]{to=spec.legendre-polynomials}),
$$
\delta(\Omega-\Omega')=\sum_{l\ge0}b_{l}\,P_{l}(\cos\gamma),
\qquad
b_{l}=\frac{2l+1}{2}\int_{-1}^{1}\delta(\Omega-\Omega')\,P_{l}(\cos\gamma)\,\mathrm{d}(\cos\gamma).
$$

**Step 2: evaluate $b_{l}$.** The integrand does not depend on the azimuth $\psi$ about the axis $\Omega'$, so multiplying by $2\pi/2\pi$ and inserting $\int_{0}^{2\pi}\mathrm{d}\psi=2\pi$ turns the one-dimensional integral into an integral over the whole sphere in the coordinates $(\gamma,\psi)$:
$$
b_{l}=\frac{2l+1}{4\pi}\int_{0}^{2\pi}\!\!\int_{-1}^{1}\delta(\Omega-\Omega')P_{l}(\cos\gamma)\,\mathrm{d}(\cos\gamma)\,\mathrm{d}\psi
=\frac{2l+1}{4\pi}\,P_{l}(\cos\gamma)\Big|_{\Omega=\Omega'} .
$$
At $\Omega=\Omega'$ the separation is $\gamma=0$, so $\cos\gamma=1$ and $P_{l}(1)=1$. Hence
$$
b_{l}=\frac{2l+1}{4\pi}\qquad\text{for every } l .
$$

**Step 3: compare with the closure relation.** Part 5 gives a second expansion of the same object, so
$$
\sum_{l}\sum_{m=-l}^{l}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}
=\sum_{l}\frac{2l+1}{4\pi}P_{l}(\cos\gamma) .
\tag{$\sharp$}
$$
Both sides are sums over $l$. It remains to show that the $l$th summands are *separately* equal; that is the whole content of the theorem, and it does not follow from $(\sharp)$ alone.

**Step 4: each $l$-block is closed under rotations.** Rotate the coordinate axes rigidly and call the new angular coordinates $\bar\Omega$ (the same physical direction, new numbers). The angular eigenvalue equation in the definition above is written in terms of the Laplacian on the sphere, which is rotation invariant; so $Y_{l}^{m}(\bar\Omega)$, as a function of direction, is again an eigenfunction with eigenvalue $-l(l+1)$. The eigenspace for that eigenvalue is spanned by the $2l+1$ functions $Y_{l}^{m'}(\Omega)$ of the *same* $l$ and no other, because distinct $l$ give distinct eigenvalues $-l(l+1)$. Therefore
$$
Y_{l}^{m}(\bar\Omega)=\sum_{m'=-l}^{l}D^{l}_{m'm}\,Y_{l}^{m'}(\Omega)
$$
for coefficients $D^{l}_{m'm}$ depending only on the rotation — Arfken, Weber and Harris's eq. (15.147), and the reason a rotation cannot change the radial behaviour of a solution of Laplace's equation.

**Step 5: identify $P_{l}(\cos\gamma)$ inside the $l$-block.** Choose the rotation that sends the polar axis to $\Omega'$. In the new frame the polar angle of $\Omega$ is exactly $\gamma$, so by part 3,
$$
P_{l}(\cos\gamma)=\sqrt{\frac{4\pi}{2l+1}}\;Y_{l}^{0}(\bar\Omega)
=\sqrt{\frac{4\pi}{2l+1}}\sum_{m'=-l}^{l}D^{l}_{m'0}\,Y_{l}^{m'}(\Omega) .
$$
So, as a function of $\Omega$ for fixed $\Omega'$, the $l$th term on the right of $(\sharp)$ lies in the span of $\{Y_{l}^{m'}(\Omega)\}_{m'}$; and the $l$th term on the left obviously does too. Since the spans for distinct $l$ are mutually orthogonal in $L^{2}(S^{2})$ by part 1, the two sums in $(\sharp)$ can be matched term by term: project both sides onto the $l$-block. This gives
$$
\sum_{m=-l}^{l}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}=\frac{2l+1}{4\pi}P_{l}(\cos\gamma)
$$
for each $l$ separately, which is the addition theorem.

**Step 6: the $P$-form.** Insert the definition and use $\overline{\mathrm{e}^{\mathrm{i}m\varphi'}}=\mathrm{e}^{-\mathrm{i}m\varphi'}$:
$$
\frac{4\pi}{2l+1}\sum_{m}\frac{2l+1}{4\pi}\frac{(l-m)!}{(l+m)!}P_{l}^{m}(\cos\theta)P_{l}^{m}(\cos\theta')\mathrm{e}^{\mathrm{i}m(\varphi-\varphi')},
$$
and the prefactors cancel, giving the stated second form. Note that the Condon-Shortley phase appears squared and so drops out: the theorem holds verbatim in either convention of :ref[]{to=spec.associated-legendre}. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$m$ integral, and $\lvert m\rvert\le l$.** Single-valuedness of the solution in $\varphi$ forces $\mathrm{e}^{\mathrm{i}m(\varphi+2\pi)}=\mathrm{e}^{\mathrm{i}m\varphi}$, hence $m\in\mathbb{Z}$; and regularity on the polar axis forces $l\in\mathbb{Z}_{\ge0}$ with $l\ge\lvert m\rvert$ (part 3 of :ref[]{to=spec.associated-legendre}). Hassani is careful about the first point: in classical physics the *function* must agree at $\varphi$ and $\varphi+2\pi$, which gives integer $m$; in quantum mechanics only the absolute value of the function is measurable, so on that criterion alone $m$ could also be a half-integer. He goes no further with it, and neither do we: his Box 13.4.1 assumes $m$ integral from that point on, and so does everything here. (Half-integer angular-momentum quantum numbers do occur in physics, but not as solutions of this equation on the sphere — single-valuedness of $Y_{l}^{m}$ still excludes them for orbital angular momentum.)

**Both factors normalised, and $P_{l}^{m}$ real.** Part 1 needs the constant $N_{lm}$ to be real so that it is unaffected by the conjugation, and the $x$-integral to be the *unit-weight* orthogonality relation. The second orthogonality of the associated Legendre functions, the one with weight $(1-x^{2})^{-1}$, plays no part here: the $\varphi$-integral has already separated the different $m$, which is why both books that state it call it useless in practice.

**Rotation invariance (Step 4).** This is the indispensable ingredient, and it is where the proof would fail if attempted by brute force. Without it one has only the aggregate identity $(\sharp)$, which is far weaker: it would be consistent with the $l$-terms being unequal and compensating. Arfken, Weber and Harris make the same point from the other direction, observing that the three $Y_{1}^{m}$ are proportional to $z/r$ and $(x\pm\mathrm{i}y)/r$, so that a rotation of the axes can only produce combinations of them — never a $Y_{2}^{m}$.

**$\Omega$ and $\Omega'$ enter only through $\gamma$ (Step 1).** This is what licenses a one-variable expansion of a two-variable object. It holds because $\delta(\Omega-\Omega')$ is defined by a rotation-invariant integral; it would fail for a kernel with a preferred direction, and then no addition theorem of this shape exists.

**$L^{2}$ rather than pointwise convergence in part 4.** Orthonormality plus density gives convergence in norm and nothing more. The uniformly convergent double series that Arfken, Weber and Harris quote carries an unquantified continuity requirement on $f$, for which they refer to Hobson rather than proving it; Strauss states the theorem for square-integrable $f$, which is the version we take. A discontinuous $f$ — say a hemisphere at one potential and the other at another, Strauss's Exercise 7 — gives a series that converges in $L^{2}$ and oscillates near the equator, exactly as a Fourier series does at a jump.

**Finitely many terms per $l$.** The inner sum in part 4 is finite ($2l+1$ terms) and this is used tacitly in Step 5, where "the $l$-block" is a *finite-dimensional* space, so that projecting onto it is unproblematic.
:::

:::method[Expanding a function on a sphere]{provenance=adapted src="arfken-2013:§15.5, Example 15.5.1, pp. 761–762; strauss-2008:§10.3, Example 2, pp. 276–277"}
To expand data $g(\theta,\varphi)$ on a sphere, or to solve a boundary-value problem with that data:

1. **Reduce by symmetry first.** If $g$ is independent of $\varphi$, only $m=0$ survives and the expansion is in $P_{l}(\cos\theta)$. If $g$ depends on $\varphi$ only through $\cos m_{0}\varphi$ or $\sin m_{0}\varphi$, only $m=\pm m_{0}$ survive. If $g$ is a polynomial in $x,y,z$ restricted to the sphere, the expansion terminates, by part 7.
2. **Identify, do not integrate.** Write $g$ in terms of $\cos\theta$, $\sin\theta$ and $\mathrm{e}^{\pm\mathrm{i}m\varphi}$ and match it against the table of $Y_{l}^{m}$. This is exact and much faster than evaluating $\int\overline{Y_{l}^{m}}g\,\mathrm{d}\Omega$.
3. **Otherwise project.** $a_{lm}=\int_{0}^{2\pi}\!\int_{0}^{\pi}\overline{Y_{l}^{m}(\theta,\varphi)}\,g(\theta,\varphi)\sin\theta\,\mathrm{d}\theta\,\mathrm{d}\varphi$. Do the $\varphi$-integral first: it is a Fourier coefficient and kills all but one $m$.
4. **For the interior Dirichlet problem** $\nabla^{2}u=0$ in $r<a$ with $u=g$ on $r=a$: discard the $r^{-l-1}$ solutions, which are singular at the origin, and write
   $$
   u(r,\theta,\varphi)=\sum_{l,m}a_{lm}\Bigl(\frac{r}{a}\Bigr)^{l}Y_{l}^{m}(\theta,\varphi) ,
   $$
   which matches $g$ at $r=a$ term by term. For the exterior problem, keep $r^{-l-1}$ instead and use $(a/r)^{l+1}$.
5. **For the Helmholtz or Schrödinger equation,** replace $r^{l}$ by the appropriate radial solution — $j_{l}(kr)$ and $y_{l}(kr)$ of :ref[]{to=spec.spherical-bessel} for Helmholtz (:ref[]{to=pde.helmholtz-equation}), the Laguerre-type radial function for the Coulomb problem — and keep the angular part unchanged. The angular factor never depends on which of these equations is being solved.
6. **To collapse a double sum over $m$** that has the structure $\sum_{m}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')}$, use the addition theorem backwards: it becomes $\frac{2l+1}{4\pi}P_{l}(\cos\gamma)$, a single term.
:::

:::example[A Dirichlet problem on a ball, and the addition theorem checked numerically]{provenance=original}
**Part 1: the boundary-value problem.** Solve $\nabla^{2}u=0$ inside the ball $r<a$ with
$$
u(a,\theta,\varphi)=\sin^{2}\theta\,\cos2\varphi .
$$

*Step 1: expand the data.* Write $\cos2\varphi=\tfrac12(\mathrm{e}^{2\mathrm{i}\varphi}+\mathrm{e}^{-2\mathrm{i}\varphi})$. From the table, $Y_{2}^{\pm2}=\sqrt{15/32\pi}\,\sin^{2}\theta\,\mathrm{e}^{\pm2\mathrm{i}\varphi}$, so
$$
\sin^{2}\theta\,\mathrm{e}^{\pm2\mathrm{i}\varphi}=\sqrt{\frac{32\pi}{15}}\;Y_{2}^{\pm2},
$$
and therefore
$$
g=\sin^{2}\theta\cos2\varphi=c\,\bigl(Y_{2}^{2}+Y_{2}^{-2}\bigr),
\qquad
c=\frac12\sqrt{\frac{32\pi}{15}}=\sqrt{\frac{8\pi}{15}}=1.2944173\ldots .
$$
Only $l=2$, $m=\pm2$ occur: by step 1 of the method this had to happen, since $g$ carries $\cos 2\varphi$ and is a quadratic polynomial on the sphere.

*Step 2: check the coefficient by projection.* By part 4, $a_{22}=\int_{S^{2}}\overline{Y_{2}^{2}}\,g\,\mathrm{d}\Omega$. Substituting the expansion and using orthonormality, $a_{22}=c$, and likewise $a_{2,-2}=c$. As an independent check, Parseval must give
$$
\lVert g\rVert^{2}=\lvert a_{22}\rvert^{2}+\lvert a_{2,-2}\rvert^{2}=2c^{2}=\frac{16\pi}{15} .
$$
Directly:
$$
\int_{S^{2}}\sin^{4}\theta\cos^{2}2\varphi\,\mathrm{d}\Omega
=\int_{0}^{2\pi}\cos^{2}2\varphi\,\mathrm{d}\varphi\int_{0}^{\pi}\sin^{5}\theta\,\mathrm{d}\theta
=\pi\cdot\frac{16}{15}=\frac{16\pi}{15},
$$
using $\int_{0}^{2\pi}\cos^{2}2\varphi\,\mathrm{d}\varphi=\pi$ and $\int_{0}^{\pi}\sin^{5}\theta\,\mathrm{d}\theta=\int_{-1}^{1}(1-x^{2})^{2}\mathrm{d}x=2-\tfrac43+\tfrac25=\tfrac{16}{15}$. The two agree.

*Step 3: solve.* By step 4 of the method, the interior solution is
$$
u(r,\theta,\varphi)=c\Bigl(\frac{r}{a}\Bigr)^{2}\bigl(Y_{2}^{2}+Y_{2}^{-2}\bigr)
=\Bigl(\frac{r}{a}\Bigr)^{2}\sin^{2}\theta\,\cos2\varphi .
$$

*Step 4: the checkable number, and a sanity check.* At $r=a/2$, $\theta=\pi/2$, $\varphi=0$:
$$
u=\Bigl(\tfrac12\Bigr)^{2}\cdot 1\cdot 1=\frac14 .
$$
That the answer is harmonic is visible in Cartesian form, which is part 7 at work: $r^{2}\sin^{2}\theta\cos2\varphi=r^{2}\sin^{2}\theta(\cos^{2}\varphi-\sin^{2}\varphi)=x^{2}-y^{2}$, so
$$
u=\frac{x^{2}-y^{2}}{a^{2}},
\qquad
\nabla^{2}u=\frac{2-2}{a^{2}}=0 ,
$$
and at the test point $(x,y,z)=(a/2,0,0)$ indeed $u=(a/2)^{2}/a^{2}=1/4$.

**Part 2: the addition theorem, numerically.** Take
$$
\Omega=(\theta,\varphi)=(\pi/3,\,0),
\qquad
\Omega'=(\theta',\varphi')=(\pi/4,\,\pi/2).
$$
From part 6,
$$
\cos\gamma=\cos\tfrac{\pi}{3}\cos\tfrac{\pi}{4}+\sin\tfrac{\pi}{3}\sin\tfrac{\pi}{4}\cos\bigl(-\tfrac{\pi}{2}\bigr)
=\tfrac12\cdot\tfrac{\sqrt2}{2}+0=\frac{\sqrt2}{4}=0.3535534\ldots,
$$
the second term vanishing because $\cos(\varphi-\varphi')=\cos(-\pi/2)=0$. Now evaluate both sides for $l=2$. The right-hand side of the theorem is a sum of five terms; computing them from the table gives
$$
\frac{4\pi}{5}\sum_{m=-2}^{2}Y_{2}^{m}(\Omega)\overline{Y_{2}^{m}(\Omega')}=-0.3125000 ,
$$
while the left-hand side is
$$
P_{2}(\cos\gamma)=\frac{3\cos^{2}\gamma-1}{2}=\frac{3\cdot\tfrac18-1}{2}=\frac{0.375-1}{2}=-0.3125
$$
exactly, since $\cos^{2}\gamma=2/16=1/8$. The same test at $l=1$ gives $0.3535534$ on both sides ($P_{1}(\cos\gamma)=\cos\gamma$), and at $l=3$ gives $-0.4198447$ on both. Note how much the theorem saves: the five-term sum on the right collapses to one evaluation of a quadratic. All numbers in this example were checked symbolically or to ten digits numerically.
:::

:::application{provenance=adapted src="arfken-2013:§15.5, Example 15.5.2 with eq. (15.146) and Table 15.5, p. 762, and eq. (15.152) with the dipole selection rule, p. 764; strauss-2008:§10.3, Example 2, pp. 276–277"}
**Geodesy and planetary science.** Arfken, Weber and Harris give the gravitational potential of the Earth, Moon and Mars as a Laplace series in the real spherical harmonics, their eq. (15.146),
$$
U(r,\theta,\varphi)=\frac{GM}{R}\Bigl[-\frac{R}{r}+\sum_{l\ge2}\sum_{m=0}^{l}\Bigl(\frac{R}{r}\Bigr)^{l+1}\bigl(C_{lm}Y^{e}_{ml}+S_{lm}Y^{o}_{ml}\bigr)\Bigr],
$$
with $M$ the mass, $R$ the equatorial radius. The coefficient $C_{20}$ measures the equatorial bulge and $C_{22}$, $S_{22}$ the azimuthal asymmetry. Their measured values illustrate how the shapes differ: $C_{20}=1.083\times10^{-3}$ for the Earth, $(0.200\pm0.002)\times10^{-3}$ for the Moon, $(1.96\pm0.01)\times10^{-3}$ for Mars. Every satellite geodesy mission, and every orbit propagator, is an exercise in estimating these numbers; the $l=1$ terms are absent because the origin is taken at the centre of mass.

**Multipole expansions and the addition theorem.** Combining the addition theorem with the inverse-distance expansion of :ref[]{to=spec.legendre-polynomials} turns
$$
\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert}=\sum_{l}\frac{r'^{\,l}}{r^{l+1}}P_{l}(\cos\gamma)
\quad\text{into}\quad
\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert}=\sum_{l,m}\frac{4\pi}{2l+1}\frac{r'^{\,l}}{r^{l+1}}Y_{l}^{m}(\Omega)\overline{Y_{l}^{m}(\Omega')} ,
$$
in which the two directions are *separated*: the source variables $(r',\Omega')$ and the field variables $(r,\Omega)$ no longer appear in a single entangled factor $P_{l}(\cos\gamma)$. This factorisation is what makes a multipole expansion computable at all (:ref[]{to=pde.multipole-expansion}) and is the mathematical core of the fast multipole method, which reduces an $N$-body potential evaluation from $O(N^{2})$ to $O(N)$ work.

**Quantum mechanics.** $Y_{l}^{m}$ is the angular part of every central-field wavefunction: the atomic orbitals $s,p,d,f$ are $l=0,1,2,3$, the $(2l+1)$-fold degeneracy in $m$ is the rotational symmetry, and the Condon-Shortley phase is in the tables so that the ladder operators act with uniform signs. Arfken, Weber and Harris's recurrence in $\cos\theta$ gives at once
$$
\int\overline{Y_{l'}^{m'}}\,\cos\theta\;Y_{l}^{m}\,\mathrm{d}\Omega
=\Bigl[\tfrac{(l-m+1)(l+m+1)}{(2l+1)(2l+3)}\Bigr]^{1/2}\delta_{m'm}\delta_{l',l+1}
+\Bigl[\tfrac{(l-m)(l+m)}{(2l-1)(2l+1)}\Bigr]^{1/2}\delta_{m'm}\delta_{l',l-1},
$$
which is the electric-dipole selection rule $\Delta l=\pm1$, $\Delta m=0$ for $z$-polarised light: the integral vanishes unless $l$ changes by one.
:::

:::application[Spherical harmonics as a storage format]{provenance=original}
**Geophysics, cosmology and graphics.** The cosmic microwave background temperature map is reported as the power spectrum $C_{l}=\frac{1}{2l+1}\sum_{m}\lvert a_{lm}\rvert^{2}$ of its Laplace series, and the rotation invariance of each $l$-block (Step 4 above) is precisely why $C_{l}$, and not the individual $a_{lm}$, is the statistically meaningful quantity. Global seismic tomography, atmospheric and ocean circulation models, and the ambient-light "irradiance probes" of real-time computer graphics all store a field on a sphere as the first few dozen of its spherical-harmonic coefficients, for the same reason a signal is stored as Fourier coefficients: the expansion is orthonormal, it is truncatable with controlled $L^{2}$ error, and the truncation is rotation-covariant.
:::
