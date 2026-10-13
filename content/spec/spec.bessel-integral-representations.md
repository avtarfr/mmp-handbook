---
id: spec.bessel-integral-representations
title: Integral representations of Bessel functions
kind: theorem
level: advanced
summary: 'The loop integral $J_\nu(z) = (2\pi i)^{-1}\int_C e^{(z/2)(t-1/t)}t^{-\nu-1}dt$ over a contour wrapped round the cut on the negative axis reproduces $J_\nu$ at every order, collapses to Bessel''s integral $\tfrac1\pi\int_0^\pi\cos(n\theta - z\sin\theta)\,d\theta$ when $\nu$ is an integer, and splits along two halves of its contour into the Hankel functions.'
prereqs: [spec.bessel-first-kind, spec.bessel-second-kind-hankel, spec.gamma-function, complex.branch-points-cuts, complex.branch-cut-integrals, complex.cauchy-theorem, complex.analytic-continuation, found.termwise-operations, fourier.fourier-series, fourier.dirichlet-convergence]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§13.1, the contour integral for the Gamma function, Eqs. (13.30)-(13.31) and Fig. 13.2, pp. 604-606; §14.1, the integral representation from the generating function and Bessel's integral, Eqs. (14.16)-(14.20), p. 647; the Schlaefli integral for nonintegral order, Eq. (14.37), the total-derivative identity (14.38) and the normalisation (14.39)-(14.40), with Fig. 14.5, pp. 653-654; §14.4, the contour integrals for the Hankel functions, Eqs. (14.88)-(14.92), and the identification of the two halves with $H^{(1)}_\\nu$ and $H^{(2)}_\\nu$ completed in Eqs. (14.94)-(14.96), with Figs. 14.5 and 14.10, pp. 676-677, and the reasons given there for working with integral representations at all, p. 677"
    pages: "604-606, 647, 653-654, 676-677"
    role: the opened loop contour and the branch cut along the negative axis; the identity that turns Bessel's operator acting on the integrand into a total $t$-derivative, and the resulting criterion that any contour with vanishing endpoint term gives a solution; the fixing of the normalisation by the small-argument limit; the splitting of the loop into the two Hankel contours, the resulting $J_\nu = \tfrac12(H^{(1)}_\nu + H^{(2)}_\nu)$ and the identification of each half separately; the contour integral for $1/\Gamma$
  - work: hassani-2013
    loc: "§16.2, the kernel $\\exp(t - z^{2}/4t)$ and the contour of Fig. 16.1, the loop representation (16.12)-(16.13) with the condition $\\operatorname{Re}z>0$, pp. 498-499; the substitution $u = e^{w}$ giving (16.17), the contour $C'$ of Fig. 16.2, and the real form (16.18) with the integer specialisation, p. 501; the corresponding representations of $Y_\\nu$ (p. 501 displays the four uncombined integrals together with the substitution $\\pi-\\theta$ that combines them) and of $H^{(1)}_\\nu$, $H^{(2)}_\\nu$ with $\\operatorname{Re}z>0$, pp. 501-502; §12.5, Example 12.5.2, the Hankel contour integral used for steepest descent, p. 386"
    pages: "386, 498-502"
    role: the statement of the loop representation with its half-plane of validity; the change of variable $u = e^{w}$ and the three-leg contour it produces; the real form of the representation with the $\sin\nu\pi$ correction term; the representation of $Y_\nu$ obtained from it
  - work: rhb-2006
    loc: "§18.5.3, the derivation of Bessel's integral (18.99) for integer order from the generating function, and the special case $n = 0$, pp. 613-614"
    pages: "613-614"
    role: the integer-order representation and the $n = 0$ special case, quoted here as the limiting case of the general formula
---

:::definition[The Schläfli contour and the loop integral]{provenance=adapted src="arfken-2013:§14.1, Eq. (14.37) and Fig. 14.5, pp. 653-654; hassani-2013:§16.2, Eqs. (16.12)-(16.13) and Fig. 16.1, pp. 498-499"}
Fix $\nu \in \mathbb{C}$ and cut the $t$-plane along the negative real axis, so that $t^{-\nu-1} = e^{(-\nu-1)\log t}$ is single valued once we fix $\arg t \in [-\pi,\pi]$, reading $\arg t = -\pi$ on the lower edge of the cut and $\arg t = +\pi$ on the upper edge.

The **Schläfli contour** $C$ is the loop that comes in from $t = \infty e^{-i\pi}$ along the underside of the cut, encircles the origin once anticlockwise on a circle of some radius $\rho > 0$, and returns to $t = \infty e^{+i\pi}$ along the upper side. For $\operatorname{Re}z > 0$ define

$$
F_\nu(z) \;=\; \frac{1}{2\pi i}\int_{C} \exp\!\left[\frac{z}{2}\Bigl(t - \frac1t\Bigr)\right] t^{-\nu-1}\,dt .
$$

Two remarks on the set-up.

- **Why the loop is open.** At integer order the integrand is single valued and $C$ may be closed into a circle; the integral is then the Laurent coefficient of the generating function and returns $J_n(z)$ by the residue theorem (:ref[]{to=spec.bessel-first-kind}). At non-integer order $t = 0$ is a branch point, not a pole (:ref[]{to=complex.branch-points-cuts}), so no closed contour round the origin is available and the circle must be opened out along a cut, exactly as in a keyhole evaluation (:ref[]{to=complex.branch-cut-integrals}).
- **Why the cut is taken on the negative axis.** The exponent $\tfrac{z}{2}(t - 1/t)$ has real part $\approx -\tfrac12 s\operatorname{Re}z$ on the ray $t = -s$, $s \to +\infty$. So for $\operatorname{Re}z > 0$ the integrand decays like $e^{-s\operatorname{Re}z/2}$ at both ends of the loop and the integral converges absolutely; on the positive axis it would instead blow up. The condition $\operatorname{Re}z > 0$ is part of the definition and cannot be dropped.

Because $\rho$ may be changed and the rays displaced without crossing a singularity, $F_\nu$ does not depend on the shape of $C$, only on its class (:ref[]{to=complex.cauchy-theorem}). **We therefore fix $\rho = 1$ once and for all**, so that $|t| \ge 1$ everywhere on the two rays; this normalisation is what the bound of Step 2 and the substitution $t = e^{w}$ of Step 4 use. Statements about "a loop of this kind" below mean a loop of this shape with any radius $\rho>0$.
:::

:::statement[Schläfli's representations]{provenance=adapted src="arfken-2013:§14.1, Eqs. (14.37)-(14.40), pp. 653-654, and Eqs. (14.18)-(14.20), p. 647; hassani-2013:§16.2, Eqs. (16.13), (16.17), (16.18), pp. 499-501; rhb-2006:§18.5.3, Eq. (18.99), p. 613"}
Let $\operatorname{Re}z > 0$ and let $\nu \in \mathbb{C}$. Then $F_\nu(z) = J_\nu(z)$; that is,

$$
J_\nu(z) \;=\; \frac{1}{2\pi i}\int_{C}\exp\!\left[\frac{z}{2}\Bigl(t-\frac1t\Bigr)\right]t^{-\nu-1}\,dt .
\tag{S1}
$$

Substituting $t = e^{w}$ unrolls the loop into a strip and gives the **exponential form**

$$
J_\nu(z) \;=\; \frac{1}{2\pi i}\int_{C'} e^{\,z\sinh w \,-\, \nu w}\,dw ,
\tag{S2}
$$

where $C'$ runs from $w = +\infty - i\pi$ to $-i\pi$, up the imaginary axis to $+i\pi$, and out to $+\infty + i\pi$; this is the image of $C$ with its circle at the radius $\rho = 1$ fixed in the definition, the circle becoming the segment of the imaginary axis.

Evaluating (S2) leg by leg gives the **real form**, valid for $\operatorname{Re}z > 0$ and every $\nu \in \mathbb{C}$,

$$
J_\nu(z) \;=\; \frac{1}{\pi}\int_0^{\pi}\cos\bigl(\nu\theta - z\sin\theta\bigr)\,d\theta
\;-\; \frac{\sin \nu\pi}{\pi}\int_0^{\infty} e^{-\nu t \,-\, z\sinh t}\,dt .
\tag{S3}
$$

For real $\nu$ and real $z > 0$ both integrands are real, which is what makes (S3) the form to compute with.

At integer order $\nu = n$ the second term vanishes and (S3) reduces to **Bessel's integral**

$$
J_n(z) \;=\; \frac{1}{\pi}\int_0^{\pi}\cos\bigl(n\theta - z\sin\theta\bigr)\,d\theta ,
$$

which holds then for all $z$, not only in a half-plane (:ref[]{to=spec.bessel-first-kind}; :cite[]{work=rhb-2006 loc="§18.5.3, Eq. (18.99), p. 613"}).
:::

:::idea{provenance=original}
Everything rests on one algebraic accident: when Bessel's operator in $z$ is applied to the integrand $e^{(z/2)(t-1/t)}t^{-\nu-1}$, the result is an exact derivative in $t$. So the integral solves Bessel's equation for *any* contour whose endpoint term vanishes, and the whole question becomes which contour, and which multiple of which solution. The Schläfli loop is the one that answers both at once: it is the circle of the generating function, opened out so that it still works when $t^{-\nu-1}$ has a branch point, and rescaling $t$ by $z$ turns it into Hankel's loop integral for $1/\Gamma$, which delivers the series for $J_\nu$ coefficient by coefficient — normalisation included. Opening the loop costs exactly one thing, the $\sin\nu\pi$ term in (S3), which is the cut making itself felt and which disappears at integer order.
:::

:::proof[Steps 1-3: the loop integral is $J_\nu$]{provenance=adapted src="arfken-2013:§14.1, Eqs. (14.37)-(14.40), pp. 653-654; arfken-2013:§13.1, Eqs. (13.30)-(13.31), pp. 604-606; hassani-2013:§16.2, pp. 498-499"}
Write $\Phi(z,t) = e^{(z/2)(t-1/t)}\,t^{-\nu-1}$ and let $\mathcal{B}_z = z^{2}\partial_z^{2} + z\partial_z + (z^{2}-\nu^{2})$ be Bessel's operator.

**Step 1 (the integrand is annihilated up to a total derivative).** Differentiating $\Phi$ in $z$ brings down a factor $\tfrac12(t-1/t)$ each time, so

$$
\mathcal{B}_z\Phi = \Phi\left[\frac{z^{2}}{4}\Bigl(t-\frac1t\Bigr)^{2} + \frac{z}{2}\Bigl(t-\frac1t\Bigr) + z^{2} - \nu^{2}\right] .
$$

Since $(t-1/t)^{2} + 4 = (t+1/t)^{2}$, the two terms carrying $z^{2}$ combine into $\tfrac{z^{2}}{4}(t+1/t)^{2}$, leaving

$$
\mathcal{B}_z\Phi = \Phi\left[\frac{z^{2}}{4}\Bigl(t+\frac1t\Bigr)^{2} - \nu^{2} + \frac{z}{2}\Bigl(t-\frac1t\Bigr)\right] .
\tag{$*$}
$$

Now set $P(z,t) = e^{(z/2)(t-1/t)}\,t^{-\nu}\bigl[\nu + \tfrac{z}{2}(t+1/t)\bigr]$ and differentiate in $t$ by the product rule. Differentiating the prefactor,

$$
\frac{\partial}{\partial t}\Bigl(e^{(z/2)(t-1/t)}t^{-\nu}\Bigr)
= e^{(z/2)(t-1/t)}\Bigl[\frac{z}{2}\Bigl(1+\frac{1}{t^{2}}\Bigr)t^{-\nu} - \nu\,t^{-\nu-1}\Bigr]
= \Phi\Bigl[\frac{z}{2}\Bigl(t+\frac1t\Bigr) - \nu\Bigr] ,
$$

while differentiating the bracket gives $e^{(z/2)(t-1/t)}t^{-\nu}\cdot\tfrac{z}{2}(1-1/t^{2}) = \Phi\cdot\tfrac{z}{2}(t-1/t)$. Hence

$$
\frac{\partial P}{\partial t} = \Phi\left[\Bigl(\frac{z}{2}\Bigl(t+\frac1t\Bigr)-\nu\Bigr)\Bigl(\nu + \frac{z}{2}\Bigl(t+\frac1t\Bigr)\Bigr) + \frac{z}{2}\Bigl(t-\frac1t\Bigr)\right] ,
$$

and the product of the two brackets is $\tfrac{z^{2}}{4}(t+1/t)^{2}-\nu^{2}$. Comparing with $(*)$,

$$
\mathcal{B}_z\Phi(z,t) \;=\; \frac{\partial P}{\partial t}(z,t) .
$$

**Step 2 (so $F_\nu$ solves Bessel's equation).** Write $s = |t|$; on the two rays $s \ge 1$, since the circle of $C$ has radius $1$. Each $z$-derivative of $\Phi$ brings down a factor $\tfrac12(t-1/t)$, which on the rays has modulus at most $\tfrac12(s + 1/s) \le s$, so there the integrand and its first two $z$-derivatives are bounded in modulus by $\mathrm{const}\cdot(1+s^{2})\,e^{-s\delta/2}\,s^{-\operatorname{Re}\nu-1}$, uniformly for $z$ in a compact subset of $\{\operatorname{Re}z \ge \delta\}$ with $\delta>0$. That bound is integrable, so differentiation under the integral sign is legitimate and

$$
\mathcal{B}_zF_\nu(z) = \frac{1}{2\pi i}\int_{C}\frac{\partial P}{\partial t}\,dt = \frac{1}{2\pi i}\Bigl[P(z,t)\Bigr]_{\text{start}}^{\text{end}} .
$$

Both ends sit at $t = \infty e^{\mp i\pi}$, where $|e^{(z/2)(t-1/t)}| = e^{-(s-1/s)\operatorname{Re}z/2} \to 0$ faster than the algebraic factors $t^{-\nu}$ and $\tfrac{z}{2}(t+1/t)$ in $P$ can grow. So the bracket vanishes and $F_\nu$ solves Bessel's equation.

**Step 3 (it is $J_\nu$, with the right scale).** Take first $z = x$ real and positive, and substitute $t = 2u/x$. A positive scaling maps the cut plane to itself and carries $C$ to a loop $C_u$ of the same kind, which by Cauchy's theorem we may take with unit circle. Since $\tfrac{x}{2}(t-1/t) = u - x^{2}/(4u)$ and $t^{-\nu-1}dt = (x/2)^{\nu}u^{-\nu-1}du$,

$$
F_\nu(x) = \Bigl(\frac{x}{2}\Bigr)^{\nu}\,\frac{1}{2\pi i}\int_{C_u} e^{u}\,e^{-x^{2}/(4u)}\,u^{-\nu-1}\,du .
$$

Expand the middle factor, $e^{-x^{2}/(4u)} = \sum_{m\ge0}(-1)^{m}(x^{2}/4)^{m}u^{-m}/m!$. On $C_u$ we have $|u| \ge 1$, so the $m$th term is bounded by $(x^{2}/4)^{m}/m!$, a convergent series of constants; by the Weierstrass $M$-test the expansion converges uniformly on $C_u$, and since $e^{u}u^{-\nu-1}$ is absolutely integrable along $C_u$, the sum and the contour integral may be interchanged (:ref[]{to=found.termwise-operations}). Therefore

$$
F_\nu(x) = \Bigl(\frac{x}{2}\Bigr)^{\nu}\sum_{m=0}^{\infty}\frac{(-1)^{m}}{m!}\Bigl(\frac{x^{2}}{4}\Bigr)^{m}\cdot\frac{1}{2\pi i}\int_{C_u}e^{u}u^{-\nu-m-1}\,du .
$$

By the Lemma below each contour integral equals $1/\Gamma(\nu+m+1)$, so

$$
F_\nu(x) = \sum_{m=0}^{\infty}\frac{(-1)^{m}}{m!\,\Gamma(\nu+m+1)}\Bigl(\frac{x}{2}\Bigr)^{\nu+2m} = J_\nu(x) \qquad (x>0) .
$$

**Step 3a (from the ray to the half-plane).** The restriction to real $x$ was only a convenience: the scaling $t \mapsto 2u/z$ by a complex $z$ would tilt the two rays of $C$ and move the cut with them. It costs nothing, because the bound of Step 2 also makes $F_\nu$ analytic on $\operatorname{Re}z>0$, and $J_\nu$ is analytic there as well. Two functions analytic on a connected open set and agreeing on a subset with a limit point in it — here the ray $z>0$ — agree throughout (:ref[]{to=complex.analytic-continuation}), so $F_\nu = J_\nu$ throughout $\operatorname{Re}z>0$, which is (S1). $\square$
:::

:::proof[Lemma: Hankel's loop integral for $1/\Gamma$]{provenance=adapted src="arfken-2013:§13.1, Eqs. (13.30)-(13.31) and Fig. 13.2, pp. 604-606" label="Lemma"}
*For every $s \in \mathbb{C}$ and every loop $C_u$ of the kind described above,*

$$
\frac{1}{2\pi i}\int_{C_u} e^{u}\,u^{-s}\,du \;=\; \frac{1}{\Gamma(s)} .
$$

(:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§13.1, Eq. (13.31), p. 606"} state the same contour integral with the cut placed on the positive axis, in the form $\int e^{-t}t^{\nu}dt = 2ie^{i\nu\pi}\Gamma(\nu+1)\sin\nu\pi$; rotating $t \mapsto -u$ and using the reflection formula turns one into the other. The short direct proof is as follows.)

By Cauchy's theorem the value does not depend on the radius of the circle, so take $\operatorname{Re}s < 1$ and shrink that radius to $r$. On it $|e^{u}u^{-s}|\,|du| = O(r^{1-\operatorname{Re}s})$, which tends to $0$ as $r \to 0$ — this is the step that needs $\operatorname{Re}s<1$. On the lower edge $u = -\sigma$ with $\arg u = -\pi$ we have $u^{-s} = \sigma^{-s}e^{i\pi s}$ and $du = -d\sigma$ with $\sigma$ running from $\infty$ down to $r$; on the upper edge $\arg u = +\pi$, so $u^{-s} = \sigma^{-s}e^{-i\pi s}$, and $\sigma$ runs from $r$ out to $\infty$. Adding the two edges,

$$
\int_{C_u}e^{u}u^{-s}\,du \;\longrightarrow\; \bigl(e^{i\pi s} - e^{-i\pi s}\bigr)\int_0^{\infty}e^{-\sigma}\sigma^{-s}\,d\sigma = 2i\sin(\pi s)\,\Gamma(1-s) ,
$$

the Euler integral converging because $\operatorname{Re}(1-s) > 0$. Dividing by $2\pi i$ and applying the reflection formula $\Gamma(s)\Gamma(1-s) = \pi/\sin\pi s$ (:ref[]{to=spec.gamma-function}) gives $\sin(\pi s)\Gamma(1-s)/\pi = 1/\Gamma(s)$.

Finally, with $r > 0$ held fixed the contour integral is an entire function of $s$ (the integrand is entire in $s$ and dominated locally uniformly), and $1/\Gamma$ is entire (:ref[]{to=spec.gamma-function}). Two entire functions agreeing on the half-plane $\operatorname{Re}s<1$ agree everywhere. $\square$
:::

:::proof[Step 4: the exponential and real forms]{provenance=adapted src="hassani-2013:§16.2, Eqs. (16.17)-(16.18) and Fig. 16.2, p. 501"}
The circle of $C$ has radius $1$, by the normalisation fixed in the definition; put $t = e^{w}$. Then $t - 1/t = 2\sinh w$ and $t^{-\nu-1}dt = e^{-\nu w}dw$, which is (S2) once the image contour is identified: the lower ray $t = \sigma e^{-i\pi}$, $\sigma \ge 1$, becomes $w = x - i\pi$ with $x = \ln\sigma \ge 0$ traversed inwards; the unit circle becomes the segment $w = i\theta$, $\theta$ from $-\pi$ to $\pi$; the upper ray becomes $w = x + i\pi$ traversed outwards. That is the contour $C'$.

Now evaluate the three legs.

- **The segment.** With $w = i\theta$, $\sinh(i\theta) = i\sin\theta$ and $dw = i\,d\theta$, so this leg contributes
  $$
  \frac{1}{2\pi i}\int_{-\pi}^{\pi}e^{\,i(z\sin\theta - \nu\theta)}\,i\,d\theta = \frac{1}{2\pi}\int_{-\pi}^{\pi}e^{\,i(z\sin\theta-\nu\theta)}\,d\theta .
  $$
  Write $A(\theta) = z\sin\theta - \nu\theta$, so the integrand is $\cos A + i\sin A$. Replacing $\theta$ by $-\theta$ replaces $A$ by $-A$; since $\cos$ is even and $\sin$ odd as entire functions — no reality of $z$ or $\nu$ is needed — the first part is even in $\theta$ and the second odd. The odd part integrates to zero and the even part doubles, leaving $\tfrac1\pi\int_0^{\pi}\cos(\nu\theta - z\sin\theta)\,d\theta$: the first term of (S3).
- **The two rays.** Since $\cosh(\mp i\pi) = -1$ and $\sinh(\mp i\pi) = 0$, we get $\sinh(x \mp i\pi) = -\sinh x$ on both rays, while $e^{-\nu w} = e^{-\nu x}e^{\pm i\nu\pi}$. The lower ray runs inwards ($x$ from $\infty$ to $0$) and the upper outwards, so with $dw = dx$ their sum is
  $$
  \frac{1}{2\pi i}\Bigl(e^{-i\nu\pi} - e^{\,i\nu\pi}\Bigr)\int_0^{\infty}e^{-\nu x - z\sinh x}\,dx
  = -\frac{\sin\nu\pi}{\pi}\int_0^{\infty}e^{-\nu x - z\sinh x}\,dx ,
  $$
  using $e^{-i\nu\pi}-e^{i\nu\pi} = -2i\sin\nu\pi$. That is the second term of (S3).

Both integrals converge for $\operatorname{Re}z>0$, the second because $e^{-z\sinh x}$ decays doubly exponentially. Adding the three legs gives (S3), and at $\nu = n \in \mathbb{Z}$ the factor $\sin n\pi$ kills the second term. $\square$
:::

:::statement[Splitting the contour: Hankel and Neumann functions]{provenance=adapted src="arfken-2013:§14.4, Eqs. (14.88)-(14.96) and Fig. 14.10, pp. 676-677; hassani-2013:§16.2, pp. 501-502" label="Corollary"}
By Step 1 of the proof, *any* contour on which $P(z,t) = e^{(z/2)(t-1/t)}t^{-\nu}\bigl[\nu+\tfrac{z}{2}(t+1/t)\bigr]$ vanishes at both ends produces a solution of Bessel's equation. Besides $t = \infty e^{\pm i\pi}$, the point $t = 0$ approached along the **positive** real axis is such an end: there $|e^{(z/2)(t-1/t)}| = e^{-\operatorname{Re}z/2t\,+\,O(t)}$ vanishes faster than any power of $t$, so it beats both the $t^{-\nu}$ and the $z/2t$ inside $P$. So the Schläfli loop may be severed at the origin into

- $C_1$: from $t = 0^{+}$ through the upper half-plane out to $\infty e^{+i\pi}$, and
- $C_2$: from $\infty e^{-i\pi}$ through the lower half-plane back to $t = 0^{+}$,

each of which carries a solution in its own right. These solutions are the :ref[Hankel functions]{to=spec.bessel-second-kind-hankel}: for $\operatorname{Re}z > 0$,

$$
H^{(1)}_\nu(z) = \frac{1}{\pi i}\int_{C_1}e^{(z/2)(t-1/t)}t^{-\nu-1}\,dt ,
\qquad
H^{(2)}_\nu(z) = \frac{1}{\pi i}\int_{C_2}e^{(z/2)(t-1/t)}t^{-\nu-1}\,dt .
$$

Since $C_1$ and $C_2$ reassemble $C$ and the prefactor $1/\pi i$ is twice the $1/2\pi i$ of (S1), the two displayed integrals add to $J_\nu$, which matches $J_\nu = \tfrac12\bigl(H^{(1)}_\nu+H^{(2)}_\nu\bigr)$. That check pins down only the *sum* of the two halves, so it does not by itself establish the labelling; what completes it is a second computation, carried out in :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.4, Eqs. (14.94)-(14.96), p. 677"}, in which the substitution $t = e^{\pm i\pi}/s$ is applied to each half separately. It returns each half to its own contour and yields $H^{(1)}_\nu = e^{-i\nu\pi}H^{(1)}_{-\nu}$, $H^{(2)}_\nu = e^{i\nu\pi}H^{(2)}_{-\nu}$, hence a second linear combination giving $J_{-\nu}$; the two combinations together force the identification above and reproduce $Y_\nu = \tfrac{1}{2i}\bigl(H^{(1)}_\nu - H^{(2)}_\nu\bigr)$. The matching real form of $Y_\nu$ is then

$$
Y_\nu(z) = \frac{1}{\pi}\int_0^{\pi}\sin\bigl(z\sin\theta - \nu\theta\bigr)\,d\theta
\;-\; \frac{1}{\pi}\int_0^{\infty}\Bigl(e^{\nu t} + e^{-\nu t}\cos\nu\pi\Bigr)e^{-z\sinh t}\,dt
$$

for $\operatorname{Re}z>0$. (Page 501 of :cite[Hassani]{work=hassani-2013 loc="§16.2, p. 501"} displays this as four separate integrals, in the uncombined form $Y_\nu = (\cot\nu\pi)J_\nu - (\sin\nu\pi)^{-1}J_{-\nu}$, together with the substitution of $\pi-\theta$ for $\theta$ in the third of them; carrying out that substitution and collecting terms gives the two integrals displayed here. The half-plane $\operatorname{Re}z>0$ is the one Hassani states for the corresponding Hankel representations on p. 502; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.4, Eqs. (14.90)-(14.91), p. 676"} state the contour forms for real $x>0$.) The split is the practical payoff of the whole construction: the exponent $\tfrac{z}{2}(t-1/t)$ has saddle points at $t = \pm i$, one in each half-plane, so $C_1$ can be pushed over $t=+i$ and $C_2$ over $t=-i$ and each Hankel function gets its asymptotics from a single saddle (:ref[]{to=spec.bessel-asymptotics}, :ref[]{to=asym.steepest-descent}). On the undivided contour $C$ the two saddles interfere, which is why $J_\nu$ has an oscillatory and not a one-term large-$z$ form.
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$\operatorname{Re}z > 0$.** Used twice: to make the rays of $C$ converge at all, and to kill the endpoint term $P$ in Step 2. It cannot be weakened for general $\nu$. At integer order it is not needed, because the loop closes into a circle on which the integrand is entire in $z$; this is exactly why Bessel's integral holds for every complex $z$ while (S3) at non-integer order does not.

**$\nu \notin \mathbb{Z}$ versus $\nu \in \mathbb{Z}$.** The branch point at $t=0$ is what forces the cut and the open loop, and the second term of (S3) is its only trace. Dropping that term is not a harmless approximation: at $\nu = \tfrac12$, $z = 2$ the first integral alone is $0.6304911$, while $J_{1/2}(2) = 0.5130161$, so the correction $0.1174750$ carries $23\%$ of the answer.

**The vanishing endpoint term, not the contour.** Step 1 is an identity, not an estimate; it is the vanishing of $P$ at the ends that is the real hypothesis. This is why the same integrand on three different contours gives three different functions ($J_\nu$, $H^{(1)}_\nu$, $H^{(2)}_\nu$), and why a contour with one end at $t = 0^{-}$ would give nothing: there $|e^{-z/2t}| = e^{+\operatorname{Re}z/2|t|}$ blows up.

**$\operatorname{Re}s<1$ in the Lemma.** Needed only to discard the small circle, and removed afterwards by analytic continuation in $s$. Without that continuation step the Lemma would not cover the terms of Step 3 with large $m$.

**Real $z$ in Step 3.** The series computation is done on the positive real axis only, because a complex scaling $t \mapsto 2u/z$ would drag the branch cut with it. Nothing is lost: the bound of Step 2 makes $F_\nu$ analytic on the open half-plane, and the identity theorem carries the result off the axis. Drop the analyticity step and the proof would establish (S1) for real positive $z$ alone.
:::

:::method[Getting an answer out of a representation]{provenance=original}
1. **Match the form to the question.** The loop form (S1) is for questions about analyticity, normalisation and continuation in $\nu$; the exponential form (S2) is for order shifts and saddle points, because the order enters only through the linear factor $e^{-\nu w}$; the real form (S3) is for numerics and for bounds.
2. **For a relation between neighbouring orders**, write the shift as multiplication of the integrand of (S2) by an elementary function of $w$: $J_{\nu-1}+J_{\nu+1}$ pulls out $2\cosh w$, and $J_{\nu-1}-J_{\nu+1}$ pulls out $2\sinh w$.
3. **Remove the extra factor with a total derivative.** Use $\partial_w e^{z\sinh w-\nu w} = (z\cosh w - \nu)e^{z\sinh w-\nu w}$ to trade $\cosh w$ for a boundary term plus a multiple of $J_\nu$. Check that the boundary term vanishes: on $C'$ it does whenever $\operatorname{Re}z>0$.
4. **For a large-argument form**, deform onto a steepest-descent path through one saddle of $\tfrac{z}{2}(t-1/t)$ — which first requires splitting $C$ so that only one saddle is in play (:ref[]{to=asym.steepest-descent}).
5. **For a bound**, put absolute values inside (S3). At integer order this gives $|J_n(x)| \le 1$ for real $x$ immediately, with no series manipulation.
6. **To expand a periodic function in Bessel functions**, write its Fourier coefficient as an integral and change variables until the integrand is $\cos(n\theta - x\sin\theta)$; the coefficient is then $J_n(x)$ by inspection. The application below does this.
7. **Always re-check the scale.** An integral that solves Bessel's equation determines the function only up to a constant. Fix it by letting $z \to 0$ and comparing with the leading term $(z/2)^{\nu}/\Gamma(\nu+1)$.
:::

:::example[A recurrence at general order, and a numerical check at $\nu = \tfrac12$]{provenance=original}
**(a) The recurrence, from (S2).** Let $\operatorname{Re}z>0$ and write $G(w) = e^{z\sinh w-\nu w}$. Adding the representations of $J_{\nu-1}$ and $J_{\nu+1}$ and factoring out $G$,

$$
J_{\nu-1}(z) + J_{\nu+1}(z) = \frac{1}{2\pi i}\int_{C'}G(w)\bigl(e^{w}+e^{-w}\bigr)\,dw = \frac{1}{2\pi i}\int_{C'}2G(w)\cosh w\,dw .
$$

Now $G'(w) = (z\cosh w - \nu)G(w)$, so $z\,G\cosh w = G' + \nu G$ and

$$
\frac{z}{2}\bigl[J_{\nu-1}(z)+J_{\nu+1}(z)\bigr] = \frac{1}{2\pi i}\int_{C'}G'(w)\,dw \;+\; \nu\,\frac{1}{2\pi i}\int_{C'}G(w)\,dw .
$$

The first integral is the difference of $G$ at the two ends $w = \infty \pm i\pi$ of $C'$. There $\sinh w = -\sinh x$ with $x \to +\infty$, so $|G| = e^{-\sinh x\,\operatorname{Re}z\,-\,\operatorname{Re}(\nu) x} \to 0$ because $\operatorname{Re}z > 0$; the first integral is therefore zero. The second is $\nu J_\nu(z)$ by (S2). Dividing by $z/2$,

$$
J_{\nu-1}(z) + J_{\nu+1}(z) = \frac{2\nu}{z}J_\nu(z) ,
$$

the recurrence of :ref[]{to=spec.bessel-first-kind}, obtained here for every $\nu$ at once rather than from a generating function that exists only at integer order.

**(b) The numbers.** Take $\nu = \tfrac12$, $z = 2$.

1. *The target.* From the half-integer closed form $J_{1/2}(x) = \sqrt{2/\pi x}\,\sin x$ (:ref[]{to=spec.bessel-first-kind}),
   $$
   J_{1/2}(2) = \sqrt{1/\pi}\,\sin 2 = 0.5641896 \times 0.9092974 = 0.5130161 .
   $$
2. *First term of (S3).* $\displaystyle \frac1\pi\int_0^{\pi}\cos\Bigl(\frac{\theta}{2}-2\sin\theta\Bigr)d\theta = 0.6304911$.
3. *Second term.* Here $\sin\nu\pi = \sin(\pi/2) = 1$ and $\displaystyle\int_0^{\infty}e^{-t/2-2\sinh t}\,dt = 0.3690585$, so the term to subtract is $0.3690585/\pi = 0.1174750$.
4. *Combine.* $0.6304911 - 0.1174750 = 0.5130161$, agreeing with step 1 to all seven digits.
5. *Cross-check of (a) at the same point.* The neighbouring half-integer orders are $J_{-1/2}(x) = \sqrt{2/\pi x}\,\cos x$ and $J_{3/2}(x) = \sqrt{2/\pi x}\,(x^{-1}\sin x - \cos x)$, so $J_{-1/2}(2) = \sqrt{1/\pi}\cos 2 = -0.2347857$ and $J_{3/2}(2) = \sqrt{1/\pi}\bigl(\tfrac12\sin 2 - \cos 2\bigr) = 0.4912938$. Their sum is $0.2565081$, and $(2\nu/z)J_\nu(z) = \tfrac12 \times 0.5130161 = 0.2565081$.
:::

:::application[Kepler's equation and the Bessel series for the eccentric anomaly]{provenance=original}
A body on an elliptical orbit of eccentricity $e \in [0,1)$ has its position fixed by the **eccentric anomaly** $E$, which is related to the uniformly growing **mean anomaly** $M$ (proportional to elapsed time) by **Kepler's equation**

$$
M = E - e\sin E .
$$

This is transcendental in $E$, and the classical way to invert it is with Bessel's integral.

**The expansion.** Replacing $M$ by $-M$ sends $E$ to $-E$, and replacing $M$ by $M+2\pi$ sends $E$ to $E+2\pi$, so $E - M$ is an odd, $2\pi$-periodic, continuously differentiable function of $M$ (differentiable because $dM/dE = 1-e\cos E \ge 1-e > 0$). Its Fourier series is therefore a pure sine series converging to it (:ref[]{to=fourier.fourier-series}, :ref[]{to=fourier.dirichlet-convergence}), $E - M = \sum_{n\ge1}b_n\sin nM$, with

$$
b_n = \frac{2}{\pi}\int_0^{\pi}(E-M)\sin nM\,dM .
$$

Integrate by parts. The boundary term $\bigl[-(E-M)\cos nM / n\bigr]_0^{\pi}$ vanishes, because $E = M$ at both $M=0$ and $M=\pi$, and $\int_0^{\pi}\cos nM\,dM = 0$ for $n \ge 1$, so

$$
b_n = \frac{2}{n\pi}\int_0^{\pi}\cos(nM)\,\frac{dE}{dM}\,dM = \frac{2}{n\pi}\int_0^{\pi}\cos\bigl(nE - ne\sin E\bigr)\,dE ,
$$

where the second equality just changes the variable of integration from $M$ to $E$ using Kepler's equation, the limits $M = 0,\pi$ corresponding to $E = 0,\pi$. The last integral is Bessel's integral at order $n$ and argument $ne$. Hence

$$
E = M + 2\sum_{n=1}^{\infty}\frac{J_n(ne)}{n}\,\sin nM .
$$

Each Fourier coefficient of the solution of a transcendental equation is a Bessel function evaluated at a point that moves with the index — a fact that no series expansion of $J_n$ makes visible, and that follows in three lines from the integral representation.

**A worked value.** Take $e = 0.2$ and $M = 1$ radian. The first terms $2J_n(0.2n)\sin(n)/n$ are

| $n$ | $J_n(0.2n)$ | term | partial sum for $E$ |
|---|---|---|---|
| 1 | $0.0995008$ | $+0.1674541$ | $1.1674541$ |
| 2 | $0.0197347$ | $+0.0179447$ | $1.1853988$ |
| 3 | $0.0043997$ | $+0.0004139$ | $1.1858127$ |
| 4 | $0.0010330$ | $-0.0003909$ | $1.1854218$ |
| 5 | $0.0002498$ | $-0.0000958$ | $1.1853260$ |

The sum converges to $E = 1.1853242$, and the check is immediate: $E - 0.2\sin E = 1.1853242 - 0.2\times0.9266210 = 1.0000000 = M$.

**Where the contour forms are used instead.** In wave problems the real form is the wrong tool and the split contours of the statement above are the right one. Scattering of a plane wave by a cylinder, radiation from a line source, and guided modes in a cylindrical waveguide all require the *outgoing* solution at large $kr$, and the one-saddle contour integrals for $H^{(1)}_\nu$ and $H^{(2)}_\nu$ are what deliver its amplitude and phase (:ref[]{to=spec.bessel-asymptotics}). The same integrals, read as functions of $\nu$ rather than $z$, are the starting point for the uniform large-order expansions used when the order and the argument are comparable, as for a whispering-gallery mode or a grazing ray.
:::
