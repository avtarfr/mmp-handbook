---
id: pde.radon-transform
title: The Radon transform
kind: method
level: advanced
summary: Defines the integral of a function over every hyperplane of $\mathbb{R}^n$, proves the projection-slice theorem that identifies its one-dimensional Fourier transform with a radial slice of the $n$-dimensional one, inverts it by filtering and back-projecting, and applies the inversion to computed tomography and to the plane-wave solution of the wave equation.
prereqs: [fourier.fourier-transform-rn, fourier.fourier-inversion, measure.fubini-tonelli, pde.wave-three-dimensions]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§4.3.2a, the notation $\\Pi(s,\\omega)$ and the definition (30) of $\\mathcal{R}u$, p. 186; Theorem 3 (properties) with its proof, pp. 186–187; Theorem 4 (Radon and Fourier transforms), (31), and its proof, pp. 187–188; Theorem 5 (inverting the Radon transform), (32)–(34), with its proof, pp. 188–189; the support corollary (35), pp. 189–190; §4.3.2b, Example 6 (representation formula for the wave equation), (36)–(38), p. 190"
    pages: "186-191"
    role: the definition in $\\mathbb{R}^n$ and the hyperplane parametrisation; the differentiation and support rules; the projection-slice identity; the inversion formula and its odd-dimensional plane-wave form; the superposition-of-plane-waves solution of the wave equation
  - work: stein-shakarchi-2003
    loc: "Ch. 6, §5.1, the attenuation law for an X-ray beam and the X-ray transform $X(\\rho)(L)=\\int_L\\rho$, pp. 199–200, with the degrees-of-freedom count on pp. 200–201; §5.2, the plane $\\mathcal{P}_{t,\\gamma}$ and the definition (12) of the integral over it, p. 202; Prop. 5.1 and the remark that the X-ray transform determines the Radon transform, p. 203; Lemma 5.2 and its proof, pp. 204–205; Cor. 5.3 (uniqueness) and the dual Radon transform (13), p. 205; Thm 5.4, $\\triangle(R^*R(f))=-8\\pi^2f$, with its proof, p. 206; §5.3, plane waves and the wave equation, p. 207"
    pages: "199-207"
    role: the tomographic motivation and the attenuation law; the integral over a plane and its independence of the chosen basis; the dual (back-projection) transform; the uniqueness corollary; the three-dimensional reconstruction theorem used as an independent check on our constant; the remark on plane waves
---

:::definition[Hyperplanes, the Radon transform and back-projection]{provenance=adapted src="evans-2010:§4.3.2a, the notation and Eq. (30), p. 186; stein-shakarchi-2003:Ch. 6, §5.2, Eq. (12), p. 202, and Eq. (13), p. 205"}
Write $S^{n-1}$ for the unit sphere of $\mathbb{R}^n$ and, for $\omega\in S^{n-1}$ and $s\in\mathbb{R}$,

$$
\Pi(s,\omega) \;=\; \{\,y\in\mathbb{R}^n \;:\; y\cdot\omega = s\,\} ,
$$

the hyperplane with unit normal $\omega$ at signed distance $s$ from the origin; $s$ is allowed to be negative, and $\Pi(s,\omega)=\Pi(-s,-\omega)$, so every hyperplane is named exactly twice.

To integrate over $\Pi(s,\omega)$, pick an orthonormal basis $b_1,\dots,b_{n-1}$ of the subspace $\omega^{\perp}$. Every point of $\Pi(s,\omega)$ is $s\omega + y_1b_1+\cdots+y_{n-1}b_{n-1}$ for exactly one $y\in\mathbb{R}^{n-1}$, and the **Radon transform** of $f\in C_c^{\infty}(\mathbb{R}^n)$ is

$$
\mathcal{R}f(s,\omega) \;=\; \int_{\Pi(s,\omega)} f\, dS
\;=\; \int_{\mathbb{R}^{n-1}} f\Bigl(s\omega + \sum_{j=1}^{n-1} y_j b_j\Bigr)\,dy ,
\qquad s\in\mathbb{R},\ \omega\in S^{n-1},
$$

a function on $\mathbb{R}\times S^{n-1}$ satisfying $\mathcal{R}f(-s,-\omega)=\mathcal{R}f(s,\omega)$. The value does not depend on which orthonormal basis of $\omega^{\perp}$ is used: two such bases differ by an orthogonal map of $\mathbb{R}^{n-1}$, and Lebesgue measure on $\mathbb{R}^{n-1}$ is invariant under orthogonal maps.

Going the other way, the **back-projection** (or **dual Radon transform**) of a function $F$ on $\mathbb{R}\times S^{n-1}$ is

$$
\mathcal{R}^{*}F(x) \;=\; \int_{S^{n-1}} F(x\cdot\omega,\omega)\, dS(\omega) ,
\qquad x\in\mathbb{R}^n .
$$

Because $x\in\Pi(s,\omega)$ exactly when $s=x\cdot\omega$, this averages $F$ over the hyperplanes through $x$: it smears each measurement back along the hyperplane it came from. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §5.2, p. 206"} call it dual because $(\mathcal{R}f,F) = (f,\mathcal{R}^{*}F)$ for the natural inner products on $\mathbb{R}\times S^{n-1}$ and on $\mathbb{R}^n$.

**Fourier convention.** Throughout, $\tilde f$ is the $n$-dimensional Fourier transform in the symmetric convention of :ref[]{to=fourier.fourier-transform-rn},

$$
\tilde f(k) = \frac{1}{(2\pi)^{n/2}}\int_{\mathbb{R}^n} f(x)\,e^{-ik\cdot x}\,d^nx ,
$$

and $\mathcal{F}_1$ is the **same** convention with $n=1$, applied to the variable $s$ with $\omega$ held fixed:

$$
\mathcal{F}_1 g(\sigma) = \frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}} g(s)\,e^{-i\sigma s}\,ds .
$$

(The one-variable unit :ref[]{to=fourier.fourier-transform} puts the whole $2\pi$ on the inverse instead, so its $\hat g$ is $\sqrt{2\pi}\,\mathcal{F}_1g$; we use $\mathcal{F}_1$ here so that the two transforms in play are normalised alike.)
:::

:::statement[Properties, projection-slice, and inversion by filtered back-projection]{provenance=adapted src="evans-2010:§4.3.2a, Thm 3, pp. 186–187, Thm 4 and Eq. (31), p. 187, and Thm 5 and Eq. (32)–(34), p. 188; stein-shakarchi-2003:Ch. 6, Lemma 5.2, p. 204, Cor. 5.3, p. 205, and Thm 5.4, p. 206"}
Let $f\in C_c^{\infty}(\mathbb{R}^n)$ with $n\ge 2$.

1. **Support.** If $f = 0$ outside the ball $B(0,R)$ then $\mathcal{R}f(s,\omega)=0$ for $\lvert s\rvert\ge R$. In particular $\mathcal{R}f(\cdot,\omega)\in C_c^{\infty}(\mathbb{R})$ for each $\omega$.
2. **Derivatives.** $\mathcal{R}\bigl(\partial_{i}f\bigr)(s,\omega) = \omega_i\,\partial_s\,\mathcal{R}f(s,\omega)$ for $i = 1,\dots,n$, and hence $\mathcal{R}(\Delta f) = \partial_s^2\,\mathcal{R}f$.
3. **Projection-slice theorem.** For every $\sigma\in\mathbb{R}$ and $\omega\in S^{n-1}$,
   $$
   \mathcal{F}_1\bigl[\mathcal{R}f(\cdot,\omega)\bigr](\sigma) \;=\; (2\pi)^{(n-1)/2}\,\tilde f(\sigma\omega) .
   \tag{PS}
   $$
   The one-dimensional transform of one projection is the $n$-dimensional transform restricted to the line $\mathbb{R}\omega$ through the origin.
4. **Uniqueness.** If $\mathcal{R}f = \mathcal{R}g$ for $f,g\in C_c^{\infty}(\mathbb{R}^n)$, then $f=g$.
5. **Filtered back-projection.** Let $\Lambda_n$ be the one-dimensional operator with Fourier multiplier $\lvert\sigma\rvert^{\,n-1}$, that is $\mathcal{F}_1[\Lambda_n g](\sigma) = \lvert\sigma\rvert^{\,n-1}\mathcal{F}_1 g(\sigma)$. Then
   $$
   f \;=\; \frac{1}{2(2\pi)^{\,n-1}}\;\mathcal{R}^{*}\bigl[\Lambda_n\,\mathcal{R}f\bigr] .
   \tag{FBP}
   $$
6. **Odd dimensions: a local filter.** If $n = 2k+1$ is odd then $\lvert\sigma\rvert^{n-1}=\sigma^{2k}$, so $\Lambda_n = (-1)^k\partial_s^{2k}$ and (FBP) becomes the decomposition of $f$ into plane waves
   $$
   f(x) \;=\; \int_{S^{n-1}} \gamma(x\cdot\omega,\omega)\,dS(\omega),
   \qquad
   \gamma(s,\omega) \;=\; \frac{(-1)^k}{2(2\pi)^{2k}}\,\frac{\partial^{2k}}{\partial s^{2k}}\,\mathcal{R}f(s,\omega) .
   \tag{PW}
   $$
   For $n=3$ this reads $f = -\dfrac{1}{8\pi^2}\,\Delta\bigl(\mathcal{R}^{*}\mathcal{R}f\bigr)$.
:::

:::idea{provenance=original}
A hyperplane integral kills all the oscillation of $f$ transverse to $\omega$ and keeps only the oscillation along $\omega$. That one sentence is the projection-slice theorem: the exponential $e^{-i\sigma s}$ in the one-dimensional transform of $\mathcal{R}f(\cdot,\omega)$ is constant on each hyperplane $\Pi(s,\omega)$, so it may be pulled inside the hyperplane integral, where it becomes $e^{-i(\sigma\omega)\cdot x}$; collapsing the iterated integral back to one over $\mathbb{R}^n$ then gives $\tilde f(\sigma\omega)$. Everything else follows from it. Uniqueness, because the slices $\sigma\mapsto\tilde f(\sigma\omega)$ over all $\omega$ cover $\mathbb{R}^n$. Inversion, because Fourier inversion is an integral over $\mathbb{R}^n$, and writing it in polar coordinates $k=\sigma\omega$ splits it into a radial integral — which is a one-dimensional inverse transform of the projection, weighted by the Jacobian $\lvert\sigma\rvert^{n-1}$ — and an angular integral, which is exactly back-projection. The Jacobian is the filter: back-projection alone over-counts low frequencies, because many hyperplanes pass near the origin and few pass far from it, and $\lvert\sigma\rvert^{n-1}$ is the precise correction.
:::

:::proof{provenance=adapted src="evans-2010:§4.3.2a, proofs of Thm 3, p. 187, Thm 4, p. 188, and Thm 5, p. 189"}
Fix $\omega$ and an orthonormal basis $b_1,\dots,b_{n-1}$ of $\omega^{\perp}$. The map $T_\omega(s,y)= s\omega+\sum_j y_jb_j$ is an orthogonal linear map of $\mathbb{R}\times\mathbb{R}^{n-1}$ onto $\mathbb{R}^n$, so it has Jacobian determinant of modulus $1$ and $\int_{\mathbb{R}^n}h\,dx = \int_{\mathbb{R}}\int_{\mathbb{R}^{n-1}} h(T_\omega(s,y))\,dy\,ds$ for every integrable $h$.

**Step 1 (support, part 1).** If $\lvert s\rvert\ge R$ then every point of $\Pi(s,\omega)$ has $\lvert y\rvert\ge\lvert y\cdot\omega\rvert = \lvert s\rvert \ge R$, so the hyperplane misses $B(0,R)$ and the integrand vanishes identically. Hence $\mathcal{R}f(s,\omega)=0$. Smoothness in $s$ holds because $f$ is smooth and compactly supported, so differentiation under the integral sign is legitimate.

**Step 2 (derivatives, part 2).** Differentiating under the integral sign in the direction $\omega$,

$$
\partial_s\,\mathcal{R}f(s,\omega) = \int_{\mathbb{R}^{n-1}} \nabla f\bigl(T_\omega(s,y)\bigr)\cdot\omega \;dy
= \int_{\Pi(s,\omega)} \nabla f\cdot\omega\; dS .
$$

For a tangential direction the corresponding integral vanishes: for fixed $j$ and fixed values of the other coordinates, $t\mapsto f(T_\omega(s,y)+tb_j)$ is a smooth compactly supported function of one variable, so $\int_{\mathbb{R}} \nabla f\cdot b_j\,dt = 0$ by the fundamental theorem of calculus, and integrating over the remaining $n-2$ coordinates gives $\int_{\Pi(s,\omega)}\nabla f\cdot b_j\,dS = 0$. **Here the compact support of $f$ is used.** Expanding $\nabla f$ in the orthonormal basis $b_1,\dots,b_{n-1},\omega$ of $\mathbb{R}^n$ and taking the $i$-th component,

$$
\mathcal{R}(\partial_i f)(s,\omega)
= \sum_{j=1}^{n-1} (b_j\cdot e_i)\int_{\Pi(s,\omega)}\nabla f\cdot b_j\,dS \;+\; \omega_i\int_{\Pi(s,\omega)}\nabla f\cdot\omega\,dS
= \omega_i\,\partial_s\,\mathcal{R}f(s,\omega) .
$$

Applying this twice gives $\mathcal{R}(\partial_i^2f)=\omega_i^2\partial_s^2\mathcal{R}f$, and summing over $i$ gives $\mathcal{R}(\Delta f)=\partial_s^2\mathcal{R}f$ because $\sum_i\omega_i^2=\lvert\omega\rvert^2=1$.

**Step 3 (projection-slice, part 3).** Every $x=T_\omega(s,y)$ has $x\cdot\omega = s$, since $\omega\cdot\omega=1$ and $b_j\cdot\omega=0$. So the factor $e^{-i\sigma s}$ is the restriction to $\Pi(s,\omega)$ of the function $x\mapsto e^{-i(\sigma\omega)\cdot x}$, and may be carried inside the hyperplane integral:

$$
\mathcal{F}_1\bigl[\mathcal{R}f(\cdot,\omega)\bigr](\sigma)
= \frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\int_{\mathbb{R}^{n-1}} f\bigl(T_\omega(s,y)\bigr)\,e^{-i(\sigma\omega)\cdot T_\omega(s,y)}\,dy\,ds
= \frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}^n} f(x)\,e^{-i(\sigma\omega)\cdot x}\,dx ,
$$

the last equality by the change of variables above. The right-hand side is $(2\pi)^{n/2}(2\pi)^{-1/2}\tilde f(\sigma\omega)$, which is (PS). The double integral converges absolutely because $f$ is continuous with compact support, so Fubini's theorem (:ref[]{to=measure.fubini-tonelli}) licenses the rearrangement.

**Step 4 (uniqueness, part 4).** If $\mathcal{R}f=\mathcal{R}g$ then by (PS) $\tilde f(\sigma\omega)=\tilde g(\sigma\omega)$ for all $\sigma\in\mathbb{R}$, $\omega\in S^{n-1}$. Every $k\in\mathbb{R}^n$ is of the form $\sigma\omega$, so $\tilde f=\tilde g$, and $f=g$ by :ref[Fourier inversion]{to=fourier.fourier-inversion}.

**Step 5 (inversion, part 5).** Since $f\in C_c^\infty(\mathbb{R}^n)$, $\tilde f$ is a Schwartz function, so $\lvert k\rvert^{\,m}\lvert\tilde f(k)\rvert$ is integrable for every $m$ and all the integrals below converge absolutely. Fourier inversion in polar coordinates $k=\sigma\omega$, $\sigma>0$, with $d^nk = \sigma^{n-1}d\sigma\,dS(\omega)$, gives

$$
f(x) = \frac{1}{(2\pi)^{n/2}}\int_{0}^{\infty}\!\!\int_{S^{n-1}} \tilde f(\sigma\omega)\,e^{i\sigma(\omega\cdot x)}\,\sigma^{n-1}\,dS(\omega)\,d\sigma .
$$

The integrand of

$$
J \;=\; \int_{\mathbb{R}}\int_{S^{n-1}} \tilde f(\sigma\omega)\,e^{i\sigma(\omega\cdot x)}\,\lvert\sigma\rvert^{\,n-1}\,dS(\omega)\,d\sigma
$$

is unchanged by $(\sigma,\omega)\mapsto(-\sigma,-\omega)$, which also preserves $dS$; hence the part of $J$ with $\sigma<0$ equals the part with $\sigma>0$, and $f(x) = J/\bigl(2(2\pi)^{n/2}\bigr)$. **Here the evenness built into the pair $(s,\omega)$ is used**, and it is what makes $\lvert\sigma\rvert^{n-1}$, rather than $\sigma^{n-1}$, the right weight in even dimensions.

Now substitute $\tilde f(\sigma\omega) = (2\pi)^{-(n-1)/2}\mathcal{F}_1[\mathcal{R}f(\cdot,\omega)](\sigma)$ from (PS) and exchange the order of integration:

$$
f(x) = \frac{1}{2(2\pi)^{n/2}(2\pi)^{(n-1)/2}}\int_{S^{n-1}}\left[\int_{\mathbb{R}} \lvert\sigma\rvert^{\,n-1}\,\mathcal{F}_1[\mathcal{R}f(\cdot,\omega)](\sigma)\,e^{i\sigma(\omega\cdot x)}\,d\sigma\right] dS(\omega) .
$$

The inner bracket is $\sqrt{2\pi}$ times the inverse one-dimensional transform of $\lvert\sigma\rvert^{n-1}\mathcal{F}_1[\mathcal{R}f(\cdot,\omega)]$ evaluated at $s=\omega\cdot x$, that is $\sqrt{2\pi}\,(\Lambda_n\mathcal{R}f)(\omega\cdot x,\omega)$. Since $(2\pi)^{n/2}(2\pi)^{(n-1)/2}(2\pi)^{-1/2} = (2\pi)^{\,n-1}$, we get

$$
f(x) = \frac{1}{2(2\pi)^{\,n-1}}\int_{S^{n-1}} (\Lambda_n\mathcal{R}f)(x\cdot\omega,\omega)\,dS(\omega)
= \frac{1}{2(2\pi)^{\,n-1}}\,\mathcal{R}^{*}\bigl[\Lambda_n\mathcal{R}f\bigr](x) ,
$$

which is (FBP).

**Step 6 (odd dimensions, part 6).** Let $n=2k+1$. By the derivative rule for $\mathcal{F}_1$, $\mathcal{F}_1[\partial_s^{2k}g](\sigma) = (i\sigma)^{2k}\mathcal{F}_1g(\sigma) = (-1)^k\sigma^{2k}\mathcal{F}_1g(\sigma)$, and $\sigma^{2k}=\lvert\sigma\rvert^{\,n-1}$; so $\Lambda_n g = (-1)^k\partial_s^{2k}g$, and (FBP) becomes (PW) with the stated $\gamma$. For $n=3$, $k=1$, the factor is $-1/(2(2\pi)^2) = -1/(8\pi^2)$, and $\partial_s^{2}\mathcal{R}f(x\cdot\omega,\omega) = \Delta_x\bigl[\mathcal{R}f(x\cdot\omega,\omega)\bigr]$ because $\lvert\omega\rvert=1$; moving $\Delta_x$ outside the $\omega$-integral gives $f = -(8\pi^2)^{-1}\Delta(\mathcal{R}^{*}\mathcal{R}f)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Compact support** enters only once, in Step 2, where the tangential integrals $\int_{\Pi}\nabla f\cdot b_j\,dS$ are made to vanish. Without decay in the tangential directions the derivative rule fails, and so does the whole scheme: a plane wave $f(x)=F(x\cdot\omega_0)$ is constant along the hyperplanes $\Pi(s,\omega_0)$, so $\mathcal{R}f(s,\omega_0)=\pm\infty$ and the transform is not even defined. The transform needs decay in $n-1$ directions at once, which is more than the integrability that defines the Fourier transform.
- **Smoothness** enters in Step 1 (differentiating under the integral sign) and in Step 5, where rapid decay of $\tilde f$ makes $\lvert\sigma\rvert^{n-1}\tilde f(\sigma\omega)$ integrable. Merely integrable $f$ has $\tilde f$ bounded but with no decay at all, and the filtered integral need not converge. This is the mathematical face of the practical fact that filtering amplifies high frequencies, so the ramp filter must be tapered before it is applied to noisy data.
- **$\lvert\sigma\rvert$, not $\sigma$**, in part 5: with $\sigma^{n-1}$ in place of $\lvert\sigma\rvert^{n-1}$ the symmetry step would produce a cancellation rather than a doubling whenever $n$ is even, and $J$ would be $0$. The two agree exactly when $n$ is odd, which is the case treated in (PW).
- **Odd versus even $n$.** The filter $\Lambda_n$ is a differential operator, hence local, only when $n-1$ is even. For even $n$ — the case of planar computed tomography, $n=2$, where $\Lambda_2$ has multiplier $\lvert\sigma\rvert$ — it is a non-local operator, and reconstructing $f$ near a point needs the projections of the whole object, not just those passing nearby. :cite[Evans]{work=evans-2010 loc="§4.3.2a, (35), pp. 189–190"} draws the same contrast from the support side: in odd dimensions $\mathcal{R}f(s,\omega)=0$ for all $\lvert s\rvert\le R$ forces $f\equiv0$ on $B(0,R)$, which (PW) gives at once and which has no such one-line proof in even dimensions.
:::

:::note[Conventions, and a difference between the two sources]{provenance=adapted src="evans-2010:§4.3.2a, Eq. (31)–(32), pp. 187–188; stein-shakarchi-2003:Ch. 6, Lemma 5.2, p. 204, and Thm 5.4, p. 206"}
The Radon transform itself involves no Fourier convention, so $\mathcal{R}$ is the same object in both sources; only the statements that mention $\tilde f$ change shape.

- :cite[Evans]{work=evans-2010 loc="§4.3.1, pp. 177–178"} uses the same symmetric transform as this handbook, but states (PS) with the **unnormalised** one-dimensional transform $\bar u(r,\omega)=\int\tilde u(s,\omega)e^{-irs}ds$, in the form $\bar u(r,\omega)=(2\pi)^{n/2}\hat u(r\omega)$. Since $\bar u = \sqrt{2\pi}\,\mathcal{F}_1[\mathcal{R}u]$, this is (PS). He writes $\tilde u$ for what we write $\mathcal{R}u$; we avoid the tilde for the Radon transform because this handbook already uses it for the Fourier transform on $\mathbb{R}^n$.
- :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, Lemma 5.2, p. 204"} work in $\mathbb{R}^3$ with the $2\pi$-in-the-exponent transform, in which (PS) carries no constant at all: $\widehat{R(f)}(s,\gamma) = \hat f(s\gamma)$. They also prove the $n=3$ results for all $f$ in the Schwartz class $\mathcal{S}(\mathbb{R}^3)$, a larger class than the $C_c^{\infty}(\mathbb{R}^n)$ of Evans and of the statement above.
- In the inversion formula Evans writes $r^{n-1}$ where part 5 above has $\lvert\sigma\rvert^{\,n-1}$. He applies the formula only for odd $n$, where the two coincide, and the $(-1)^k$ in his (34) matches ours; readers transporting his (32) to even $n$ should use the modulus, for the reason given in the remark.
- The two constants can be checked against each other. :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 6, Thm 5.4, p. 206"} Theorem 5.4 says $\triangle(R^{*}R(f)) = -8\pi^2 f$, which is exactly the $n=3$ case of (PW) rearranged. Their result is derived in a different Fourier convention from ours, and the agreement is a genuine check: the identity contains no transform, so it must come out the same either way.
:::

:::method[Reconstructing an object from its projections]{provenance=original}
Given measured projections $p(s,\omega)=\mathcal{R}f(s,\omega)$ for $\omega$ in a set of directions and $s$ on a grid, recover $f$ as follows. Steps 2–4 are filtered back-projection; steps 1 and 5 are what practice adds to the theorem.

1. **Fix the geometry.** Decide $n$, the sampling in $s$, and the directions $\omega$. Hyperplanes are named twice, $\Pi(s,\omega)=\Pi(-s,-\omega)$, so for $n=2$ the angles need only cover a half-turn.
2. **Transform each projection.** For each fixed $\omega$, compute $\mathcal{F}_1[p(\cdot,\omega)]$, in practice by the :ref[FFT]{to=fourier.dft-fft}.
3. **Filter.** Multiply by $\lvert\sigma\rvert^{\,n-1}$ and transform back, giving $q(\cdot,\omega) = \Lambda_n p(\cdot,\omega)$. In odd dimensions the same thing is done in the $s$ variable directly, as $(-1)^k\partial_s^{2k}$ with $n=2k+1$.
4. **Back-project and scale.** Form $\mathcal{R}^{*}q(x)=\int_{S^{n-1}}q(x\cdot\omega,\omega)\,dS(\omega)$ by summing, for each reconstruction point $x$, the filtered value of the hyperplane through it in each measured direction; then multiply by $1/\bigl(2(2\pi)^{n-1}\bigr)$. By (FBP) the result is $f$.
5. **Temper the filter.** $\lvert\sigma\rvert^{n-1}$ grows without bound, so with noisy data replace it by $\lvert\sigma\rvert^{n-1}w(\sigma)$ for a window $w$ that cuts off above the frequency the sampling supports. This is a deliberate departure from the exact formula: it reconstructs a smoothed version of $f$ in exchange for stability.

The order matters only for cost, not for the answer: filtering and back-projection commute with each other in the sense that one may instead back-project first and apply the corresponding $n$-dimensional filter afterwards, but filtering the one-dimensional projections is far cheaper.
:::

:::example[Exact reconstruction of a Gaussian in three dimensions]{provenance=original}
Take $n=3$ and $f(x)=e^{-\lvert x\rvert^{2}}$ on $\mathbb{R}^3$. (This is Schwartz rather than compactly supported; every integral below converges absolutely, and the reconstruction formula holds, as :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, Thm 5.4, p. 206"} prove it for the whole Schwartz class.)

**Step 1: the projections.** Fix $\omega$ and write $x = s\omega+u$ with $u\in\omega^{\perp}$. Then $\lvert x\rvert^2 = s^2+\lvert u\rvert^2$ by orthogonality, so the integrand factorises and

$$
\mathcal{R}f(s,\omega) = e^{-s^2}\int_{\mathbb{R}^{2}} e^{-\lvert u\rvert^{2}}\,du = \pi\,e^{-s^{2}} ,
$$

using $\int_{\mathbb{R}^2}e^{-|u|^2}du = (\sqrt{\pi})^2=\pi$. The projections do not depend on $\omega$, as they must not, since $f$ is radial.

**Step 2: the filter.** Here $k=1$, so $\Lambda_3 = -\partial_s^2$. Differentiating twice,

$$
\partial_s^2\bigl(\pi e^{-s^2}\bigr) = \pi\,(4s^{2}-2)\,e^{-s^{2}},
\qquad\text{so}\qquad
\gamma(s,\omega) = -\frac{1}{8\pi^{2}}\,\pi(4s^{2}-2)e^{-s^{2}} = \frac{(1-2s^{2})\,e^{-s^{2}}}{4\pi} .
$$

**Step 3: back-projection.** Let $\rho=\lvert x\rvert>0$. For a function $h$ of one variable, writing $t=\cos\theta$ for the angle between $\omega$ and $x$,

$$
\int_{S^{2}} h(x\cdot\omega)\,dS(\omega) = 2\pi\int_{-1}^{1} h(\rho t)\,dt = \frac{2\pi}{\rho}\int_{-\rho}^{\rho} h(v)\,dv ,
$$

the first equality because the area element of $S^2$ is $2\pi\,dt$ in the variable $t=\cos\theta$. With $h=\gamma$ and the antiderivative $\int (1-2v^2)e^{-v^2}dv = v\,e^{-v^{2}}$ — check by differentiating: $\frac{d}{dv}\bigl(ve^{-v^2}\bigr) = (1-2v^2)e^{-v^2}$ — we get

$$
\int_{S^{2}}\gamma(x\cdot\omega,\omega)\,dS(\omega)
= \frac{2\pi}{\rho}\cdot\frac{1}{4\pi}\Bigl[v\,e^{-v^{2}}\Bigr]_{-\rho}^{\rho}
= \frac{1}{2\rho}\cdot 2\rho\,e^{-\rho^{2}}
= e^{-\rho^{2}} ,
$$

which is $f(x)$. The reconstruction is exact at every point.

**A number to check.** At $\lvert x\rvert = 1$ the back-projected filtered data is

$$
-\frac{1}{8\pi^{2}}\int_{S^{2}}\partial_s^{2}\mathcal{R}f(x\cdot\omega,\omega)\,dS(\omega)
= -\frac{1}{4}\int_{-1}^{1}(4t^{2}-2)e^{-t^{2}}\,dt
= -\frac{1}{4}\Bigl[-2t\,e^{-t^{2}}\Bigr]_{-1}^{1}
= -\frac{1}{4}\bigl(-4e^{-1}\bigr)
= e^{-1} = 0.367879441\ldots,
$$

and $f(x) = e^{-1}$ as well.

**What back-projection alone would give.** Omitting the filter and the constant, $\mathcal{R}^{*}\mathcal{R}f(x) = \pi\int_{S^2}e^{-(x\cdot\omega)^2}dS(\omega) = (2\pi^{2}/\rho)\int_{-\rho}^{\rho}e^{-v^{2}}dv = 2\pi^{5/2}\operatorname{erf}(\rho)/\rho$. At $\rho=1$ this is $2\pi^{5/2}\operatorname{erf}(1) = 2(17.493418\ldots)(0.8427008\ldots) = 29.483435\ldots$, and it decays like $1/\rho$ rather than like a Gaussian: back-projection smears the object out, and the filter is what undoes the smearing.
:::

:::application[Computed tomography, and plane waves for the wave equation]{provenance=adapted src="stein-shakarchi-2003:Ch. 6, §5.1, pp. 199–200, and §5.3, p. 207; evans-2010:§4.3.2b, Example 6, Eq. (36)–(38), p. 190"}
**X-ray tomography.** A narrow X-ray beam of incident intensity $I_0$ traversing an object of attenuation coefficient $\rho$ along a line $L$ emerges with intensity $I = I_0\exp\bigl(-\int_L\rho\bigr)$; this is the law :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §5.1, pp. 199–200"} start from. A scanner measures $I$ and $I_0$, so each beam returns the line integral $\int_L\rho = \log(I_0/I)$, and a scan returns these for a large family of lines through one planar slice. In the plane that family of line integrals is the Radon transform, $n=2$, and the method above with the ramp filter $\lvert\sigma\rvert$ is the reconstruction algorithm that turns the measurements into the image. The degrees of freedom match: a function on $\mathbb{R}^2$ and a function of lines in $\mathbb{R}^2$ each depend on two parameters. In $\mathbb{R}^3$ the line data is over-determined — four parameters for a line against three for a point — and :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 6, §5.2, p. 203"} note that integrals over all lines determine integrals over all planes, since a plane integral is an iterated line integral; this is why the clean three-dimensional theory above is stated for hyperplanes.

As an illustration of forward data, a uniform ball $B(0,R)\subset\mathbb{R}^3$ of unit density has $\mathcal{R}\mathbf{1}_{B(0,R)}(s,\omega) = \pi(R^{2}-s^{2})$ for $\lvert s\rvert\le R$ and $0$ otherwise, because $\Pi(s,\omega)\cap B(0,R)$ is a disc of radius $\sqrt{R^2-s^2}$. For $R=2$ and $s=1$ this is $3\pi = 9.42477796\ldots$ — a parabolic profile in $s$, which is the signature of a sphere in a projection and is used to calibrate scanners.

**Plane-wave solution of the wave equation.** For a unit vector $\omega$ and a $C^2$ function $\gamma$ of one variable, the plane wave $u(x,t)=\gamma(x\cdot\omega-t)$ solves $u_{tt}=\Delta u$: both sides equal $\gamma''$, the right-hand side because $\lvert\omega\rvert=1$. Superposing over all directions, :cite[Evans]{work=evans-2010 loc="§4.3.2b, Example 6, Eq. (36)–(38), p. 190"} observes that for odd $n$ the function

$$
u(x,t) = \int_{S^{n-1}} \gamma(x\cdot\omega - t,\omega)\, dS(\omega) ,
\qquad \gamma = \frac{(-1)^k}{2(2\pi)^{2k}}\,\partial_s^{2k}\mathcal{R}g,\quad n=2k+1,
$$

solves $u_{tt}=\Delta u$ with $u=g$ and $u_t=0$ at $t=0$. The initial value is right by (PW); the initial velocity vanishes by an antipodal cancellation. Indeed part 2 of the statement gives $\partial_s^{2k}\mathcal{R}g = \mathcal{R}(\Delta^kg)$, so $\gamma = \mathcal{R}l$ for $l = (-1)^k(2(2\pi)^{2k})^{-1}\Delta^kg$, and Step 2 of the proof then gives $\partial_s\gamma(s,\omega)=\int_{\Pi(s,\omega)}\nabla l\cdot\omega\,dS$. Replacing $\omega$ by $-\omega$ leaves the hyperplane $\Pi(x\cdot\omega,\omega)$ unchanged and reverses the sign of $\nabla l\cdot\omega$, so $u_t(x,0) = -\int_{S^{n-1}}\partial_s\gamma(x\cdot\omega,\omega)\,dS(\omega) = 0$. Where :ref[Kirchhoff's formula]{to=pde.wave-three-dimensions} builds the solution out of spherical means, this builds it out of plane waves; for a problem whose data are known through their projections, the second is the one to use.

A check on the two. Take $n=3$ and $g(x)=e^{-\lvert x\rvert^2}$, so that $\gamma(s,\omega) = (1-2s^2)e^{-s^2}/(4\pi)$ from the example above. At the origin all directions give the same value, so

$$
u(0,t) = 4\pi\,\gamma(-t,\omega) = (1-2t^{2})\,e^{-t^{2}} .
$$

Kirchhoff's formula with $c=1$, $\psi=0$ gives $u(0,t)=\partial_t\bigl[t\,\mathcal{M}_t g(0)\bigr]$, and the spherical mean of $e^{-|y|^2}$ over $\lvert y\rvert=t$ is $e^{-t^2}$, so $u(0,t)=\partial_t\bigl(te^{-t^{2}}\bigr) = (1-2t^{2})e^{-t^{2}}$ — the same function. At $t=1$ both give $u(0,1) = -e^{-1} = -0.367879441\ldots$: the wave has passed and the signal at the origin has gone negative.
:::
