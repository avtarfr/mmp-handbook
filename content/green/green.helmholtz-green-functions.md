---
id: green.helmholtz-green-functions
title: Green's functions for the Helmholtz equation
kind: method
level: core
summary: Computes the free-space outgoing Green's function of $\nabla^2+k^2$ by Fourier transforming and evaluating the remaining integral by residues with the poles displaced off the real axis, giving $-\tfrac{i}{2k}e^{ik|x|}$ in one dimension, $-\tfrac{i}{4}H_0^{(1)}(k\varrho)$ in two and $-e^{ikr}/(4\pi r)$ in three, and reads off the modified Helmholtz case by $k\mapsto i\kappa$.
prereqs: [pde.helmholtz-equation, complex.infinite-integrals, green.laplace-green-functions, fourier.fourier-transform-rn]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§9.3, p. 413, the remark that the Dirichlet problem for $\\nabla^2\\psi\\pm k^2\\psi=0$ on a closed boundary has solutions 'only for certain values' of $k$; §10.1, Example 10.1.3 (Boundary at Infinity), pp. 454-455, where the outgoing-wave Green's function $-\\tfrac{i}{2k}\\exp(ik\\lvert x-x'\\rvert)$ of $d^2/dx^2+k^2$ is built from $y_1 = e^{-ikx}$, $y_2 = e^{ikx}$ and $A = [y_2'y_1-y_1'y_2]^{-1} = -i/2k$, Eq. (10.28); Exercise 10.1.9, p. 457, the modified Helmholtz answer $-\\tfrac{1}{2k}\\exp(-k\\lvert x_1-x_2\\rvert)$; §10.2, p. 462, the 'flatland' remark on two- versus three-dimensional Green's functions; Table 10.1, p. 463, the fundamental Green's functions of $\\nabla^2$, $\\nabla^2+k^2$ and $\\nabla^2-k^2$ in one, two and three dimensions with the stated boundary conditions (outgoing wave for Helmholtz, $G\\to0$ at infinity for modified Helmholtz), and the note that the two-dimensional Helmholtz forms are not derived there; Exercises 10.2.3-10.2.4, p. 466, and Exercise 10.2.5 (the standing-wave Green's function), p. 467"
    pages: "413, 454-457, 462-463, 466-467"
    role: the one-dimensional outgoing Green's function, the table of all nine free-space Green's functions against which our derivations are checked, the choice of boundary condition in each case, the remark that $\\pm k^2$ does not affect the behaviour near the singular point, the standing-wave variant, and the two remarks quoted on two-dimensional physics and on the Helmholtz Dirichlet problem
  - work: hassani-2013
    loc: "§22.4.2, pp. 682-683: the Fourier representation $G_s(\\mathbf{r}) = -(2\\pi)^{-m}\\int d^mk\\, e^{i\\mathbf{k}\\cdot\\mathbf{r}}/(\\mu^2+k^2)$ for $\\nabla^2-\\mu^2$ in $m$ dimensions, its reduction to a Bessel integral, the general-$m$ answer in terms of $H^{(1)}_{m/2-1}$, the three-dimensional Yukawa result $-e^{-\\mu r}/(4\\pi r)$, and the substitution $\\mu\\to\\pm i\\mu$ giving $\\nabla^2+\\mu^2$ with $G_s(r) = -e^{\\pm i\\mu r}/(4\\pi r)$ for $m=3$, the two signs being the incoming and outgoing waves; §22.4.1, p. 682, the same technique for $\\nabla^2$; §22.4.4, p. 685, the warning stated there for the $m$-dimensional **wave** operator (with Problem 22.25) that the principal value of its $\\omega$ integral yields a function satisfying only the homogeneous wave equation, with no delta function on the right-hand side, because a principal value fixes a contour that need not match the physical situation, and that the useful Green's functions come instead from giving the poles small imaginary parts"
    pages: "682-683, 685"
    role: the Fourier-transform route, the general-dimension structure of the answer, the three-dimensional outgoing and incoming forms, the modified-Helmholtz (Yukawa) case, and the principal-value warning, which belongs to the wave operator and is reported here as such
  - work: rhb-2006
    loc: "§21.5, pp. 752-753: the statement that the Green's function of a linear PDE operator $L$ satisfies $LG(\\mathbf{r},\\mathbf{r}_0) = \\delta(\\mathbf{r}-\\mathbf{r}_0)$ with $L = \\nabla^2+k^2$ for Helmholtz's equation named explicitly, and the solution $u(\\mathbf{r}) = \\int G(\\mathbf{r},\\mathbf{r}_0)\\rho(\\mathbf{r}_0)\\, dV(\\mathbf{r}_0)$ for homogeneous boundary conditions"
    pages: "752-753"
    role: the convention $LG = \\delta$ for a general operator, Helmholtz included, and the superposition formula used in the examples
  - work: strauss-2008
    loc: "§7.3, Theorem 2 and Eq. (7), p. 190: the Green's function representation of the solution of an inhomogeneous elliptic problem, applied here with $\\nabla^2+k^2$ in place of $\\nabla^2$"
    pages: "190"
    role: the form of the solution formula that the examples use once $G$ is known
---

:::note[Which Green's function, and the sign convention]{provenance=original}
The operator $\nabla^2 + k^2$ with $k > 0$ real has non-trivial solutions of the homogeneous equation that decay in no direction — plane waves — so a Green's function is *not* fixed by asking it to vanish at infinity. One must say which waves are allowed, and the physical choice is **outgoing**: the Green's function should behave like a wave travelling away from its source, so that when multiplied by the time factor $e^{-i\omega t}$ with $\omega = ck$ it describes radiation leaving the source rather than converging on it. That is the convention of Arfken, Weber and Harris and of Hassani, and the one adopted here. The opposite choice, $e^{-ikr}$ in place of $e^{ikr}$, gives the **incoming** Green's function, which is the complex conjugate; their average is the **standing-wave** Green's function.

As in :ref[]{to=green.laplace-green-functions} we write the defining equation as

$$
\bigl(\nabla^2 + k^2\bigr) G(\mathbf{r}) = \delta(\mathbf{r}) ,
$$

which is the convention of Riley, Hobson and Bence, of Arfken and of Hassani, and which makes $G$ negative-definite in sign at short range in three dimensions. Because the free-space problem is translation invariant, $G(\mathbf{r},\mathbf{r}') = G(\mathbf{r}-\mathbf{r}')$ and we may put the source at the origin throughout; and because it is also rotation invariant, $G$ depends only on $\lvert\mathbf{r}\rvert$.
:::

:::definition[Free-space Green's function and the outgoing condition]{provenance=adapted src="arfken-2013:§10.2, Table 10.1 and its footnotes, p. 463; hassani-2013:§22.4.2, p. 683"}
Let $n \in\{1,2,3\}$ and $k>0$. A distribution $G$ on $\mathbb{R}^n$ is the **outgoing (or retarded) free-space Green's function** of the Helmholtz operator if

1. $\bigl(\nabla^2+k^2\bigr)G = \delta$ on $\mathbb{R}^n$ in the sense of distributions, so that $G$ is smooth and solves $(\nabla^2+k^2)G=0$ away from the origin and carries at the origin the same singularity as the :ref[fundamental solution of $\nabla^2$]{to=pde.laplace-fundamental-solution}; and
2. $G$ satisfies the **outgoing radiation condition**: as $r = \lvert\mathbf{r}\rvert\to\infty$ its asymptotic dependence on $r$ is through $e^{+ikr}$ and not $e^{-ikr}$ (equivalently, $\partial G/\partial r - ikG = o(r^{-(n-1)/2})$, the Sommerfeld condition of :ref[]{to=pde.helmholtz-equation}). In one dimension, where this reads $o(1)$, the symbols are to be understood in the same radial sense: $r = \lvert x\rvert$ and $\partial/\partial r$ is the *outward* derivative, $+\partial_x$ on $x>0$ and $-\partial_x$ on $x<0$. With that reading the condition does its work even at $n=1$: for $G = -\tfrac{i}{2k}e^{ik\lvert x\rvert}$ the combination $\partial G/\partial r - ikG$ vanishes identically, while for the incoming function $-\tfrac{i}{2k}e^{-ik\lvert x\rvert}$ it equals $-e^{-ik\lvert x\rvert}$, of modulus $1$, which is not $o(1)$.

For the **modified Helmholtz operator** $\nabla^2-\kappa^2$ with $\kappa>0$, condition 2 is replaced by the requirement that $G\to0$ in every direction, which is now available because the homogeneous solutions grow or decay exponentially.

Condition 1 has the useful corollary, which Arfken, Weber and Harris set as an exercise, that the term $\pm k^2 G$ contributes nothing to the delta function: its integral over a small ball about the origin tends to $0$, so the local structure of $G$ at its pole is exactly that of the Laplace Green's function, namely $\tfrac12\lvert x\rvert$, $(2\pi)^{-1}\ln\varrho$ and $-1/(4\pi r)$ in one, two and three dimensions. This is what fixes the normalisation in every derivation below.
:::

:::method[Fourier transform and residues]{provenance=adapted src="hassani-2013:§22.4.1-22.4.2, pp. 682-683 (the Fourier representation and its angular reduction); arfken-2013:§10.1, Example 10.1.3, pp. 454-455 (the identification of the outgoing solution)"}
1. **Transform.** Write $G(\mathbf{r}) = \displaystyle\int\frac{d^n q}{(2\pi)^n}\,\tilde G(\mathbf{q})\,e^{i\mathbf{q}\cdot\mathbf{r}}$ and use $\delta(\mathbf{r}) = \int\frac{d^nq}{(2\pi)^n}e^{i\mathbf{q}\cdot\mathbf{r}}$ (:ref[]{to=fourier.fourier-transform-rn}). Since $\nabla^2 \mapsto -q^2$,
   $$
   \bigl(k^2 - q^2\bigr)\tilde G(\mathbf{q}) = 1,
   \qquad
   \tilde G(\mathbf{q}) = \frac{1}{k^2-q^2} .
   $$
2. **Notice the obstruction.** $\tilde G$ is singular on the whole sphere $q = k$, so the inverse transform is not an ordinary integral. This is the analytic face of the fact that the Green's function is not unique: the homogeneous solutions live exactly on that sphere.
3. **Displace the poles.** Impose the outgoing condition by giving $k$ a small positive imaginary part, $k \to k+i\delta$ with $\delta\downarrow0$ (equivalently $k^2\to k^2+i\epsilon$). The poles then sit at $q = \pm(k+i\delta)$, one in each half-plane, and the integral is well defined.
4. **Reduce to one radial integral.** Do the angular integration. In three dimensions $\int e^{i\mathbf{q}\cdot\mathbf{r}}\, d\Omega_{\mathbf q} = 4\pi\dfrac{\sin qr}{qr}$, in two it gives $2\pi J_0(q\varrho)$, and in one there is nothing to do.
5. **Close the contour.** Extend the radial integral to the whole real line using the parity of the integrand, write the trigonometric factor in exponentials, and apply :ref[Jordan's lemma and the residue theorem]{to=complex.infinite-integrals}, closing in the half-plane in which the exponential decays. Only one pole is enclosed, and it is the one that produces $e^{+ikr}$.
6. **Let $\delta\to0$** and check the normalisation against the short-range behaviour of step 1 of the definition.
7. **For $\nabla^2-\kappa^2$**, substitute $k = i\kappa$ in the answer. The outgoing condition becomes decay, and no pole displacement is needed, since $\tilde G = -1/(\kappa^2+q^2)$ has no real poles at all.
:::

:::statement[The nine free-space Green's functions]{provenance=adapted src="arfken-2013:§10.2, Table 10.1, p. 463, and §10.1, Eq. (10.28), p. 454 and Exercise 10.1.9, p. 457; hassani-2013:§22.4.2, p. 683"}
With the conventions above — outgoing waves for $\nabla^2+k^2$, decay at infinity for $\nabla^2-\kappa^2$ and for $\nabla^2$ in three dimensions, and an arbitrary additive constant for $\nabla^2$ in one and two dimensions — the free-space Green's functions are

| | $\nabla^2$ | $\nabla^2+k^2$ | $\nabla^2-\kappa^2$ |
|---|---|---|---|
| one dimension | $\tfrac12\lvert x\rvert$ | $-\dfrac{i}{2k}e^{ik\lvert x\rvert}$ | $-\dfrac{1}{2\kappa}e^{-\kappa\lvert x\rvert}$ |
| two dimensions | $\dfrac{1}{2\pi}\ln\varrho$ | $-\dfrac{i}{4}H_0^{(1)}(k\varrho)$ | $-\dfrac{1}{2\pi}K_0(\kappa\varrho)$ |
| three dimensions | $-\dfrac{1}{4\pi r}$ | $-\dfrac{e^{ikr}}{4\pi r}$ | $-\dfrac{e^{-\kappa r}}{4\pi r}$ |

Here $H_0^{(1)} = J_0+iY_0$ is the :ref[Hankel function of the first kind]{to=spec.bessel-second-kind-hankel} and $K_0$ the :ref[modified Bessel function]{to=spec.modified-bessel}. This is Table 10.1 of Arfken, Weber and Harris. Each column is obtained from the next by a substitution: setting $k=i\kappa$ in the middle column gives the right-hand one, and letting $k\to0$ in the middle column recovers the left-hand one up to the additive constants that the one- and two-dimensional Laplace Green's functions carry anyway. In three dimensions Hassani writes the middle entry as $-e^{\pm i\mu r}/(4\pi r)$ and identifies the two signs with incoming and outgoing waves; with the time convention $e^{-i\omega t}$ it is the upper sign that is outgoing.

Once $G$ is known, the solution of $(\nabla^2+k^2)\psi = f$ on all of $\mathbb{R}^n$ with outgoing behaviour is

$$
\psi(\mathbf{r}) = \int G(\mathbf{r}-\mathbf{r}')\, f(\mathbf{r}')\; d^n r' ,
$$

for $f$ of compact support, by the superposition principle of Riley, Hobson and Bence; any solution of the homogeneous equation may be added, and is added in scattering problems to supply the incident wave.
:::

:::idea{provenance=original}
In free space the operator is diagonal in Fourier variables, so inverting it is a division — except that $k^2-q^2$ vanishes on a sphere, which is precisely the statement that the homogeneous equation has solutions and the Green's function is therefore not unique. Everything interesting is in how one steps around that sphere of poles, and the rule is: the choice of contour *is* the choice of boundary condition.

Pushing the pole at $q=+k$ up into the upper half-plane and the one at $q=-k$ down means that, when the remaining radial integral is closed in the upper half-plane (which is where $e^{iqr}$ decays, for $r>0$), only the pole at $+k$ is caught, and it contributes $e^{+ikr}$ — an outgoing wave. Pushing them the other way catches $-k$ and gives $e^{-ikr}$, the incoming solution. Taking the principal value catches half of each and gives the standing wave, in three dimensions $-\cos(kr)/(4\pi r)$. Being the half-sum of two Green's functions, that is itself a Green's function: it carries the same $-1/(4\pi r)$ singularity and solves the homogeneous equation away from the origin. So nothing is wrong with it as a solution of $(\nabla^2+k^2)G=\delta$; what it is not is *outgoing*. It is as much incoming as outgoing, so it fails condition 2 of the definition and describes a cavity, where waves return, rather than radiation into free space. The contour is thus not chosen to make $G$ a Green's function at all, but to say which of the many Green's functions one wants.

In two dimensions the contour integral runs into Bessel functions, and it is quicker to work in position space: away from the source $G$ obeys Bessel's equation of order zero, so it is a combination of the two Hankel functions; the outgoing condition picks $H_0^{(1)}$ by its asymptotics, and the strength is fixed by matching the logarithmic singularity at the origin to the Laplace Green's function, which is legitimate because the $k^2G$ term is too weak to affect the singularity.
:::

:::proof[One dimension]{provenance=adapted src="hassani-2013:§22.4.2, the Fourier representation and the pole displacement, pp. 682-683; arfken-2013:§10.1, Example 10.1.3, Eq. (10.28), pp. 454-455"}
**Step 1 (transform).** With $n=1$, step 1 of the method gives

$$
G(x) = \int_{-\infty}^{\infty}\frac{dq}{2\pi}\;\frac{e^{iqx}}{k^2-q^2} ,
$$

and after the displacement $k\to k+i\delta$ the integrand acquires simple poles at $q = k+i\delta$, above the real axis, and at $q = -k-i\delta$, below it.

**Step 2 (close the contour).** The factor $1/(k^2-q^2)$ tends to $0$ as $\lvert q\rvert\to\infty$, so for $x>0$ Jordan's lemma applies with the factor $e^{iqx}$ and the semicircle in the upper half-plane contributes nothing; the contour may be closed there. For $x<0$ the exponential decays in the lower half-plane and the contour closes there instead, with the opposite orientation.

**Step 3 (residues).** Writing $k^2-q^2 = -(q-q_0)(q+q_0)$ with $q_0 = k+i\delta$, the residue at $q=q_0$ is

$$
\lim_{q\to q_0}(q-q_0)\,\frac{e^{iqx}}{-(q-q_0)(q+q_0)} = -\frac{e^{iq_0x}}{2q_0} ,
$$

and at $q=-q_0$ it is $+e^{-iq_0x}/(2q_0)$ by the same computation. Hence for $x>0$,

$$
G(x) = \frac{1}{2\pi}\cdot 2\pi i\left(-\frac{e^{iq_0x}}{2q_0}\right) \xrightarrow[\delta\to0]{} -\frac{i}{2k}\,e^{ikx} ,
$$

while for $x<0$ the clockwise contour supplies $-2\pi i$ and

$$
G(x) = \frac{1}{2\pi}(-2\pi i)\,\frac{e^{-iq_0x}}{2q_0}\xrightarrow[\delta\to0]{} -\frac{i}{2k}\,e^{-ikx} .
$$

The two cases combine into $G(x) = -\dfrac{i}{2k}e^{ik\lvert x\rvert}$, which is outgoing on both sides, as the displacement was chosen to arrange.

**Step 4 (check).** $G$ is continuous at $0$ with $G(0) = -i/2k$; differentiating the two branches gives $G'(x) = \tfrac12 e^{ikx}$ for $x>0$ and $G'(x) = -\tfrac12 e^{-ikx}$ for $x<0$, so $G'(0^+)-G'(0^-) = \tfrac12+\tfrac12 = 1$, which is the jump that $G''=\delta$ demands; away from $0$, $G'' = -k^2G$. Arfken, Weber and Harris reach the same function by the one-dimensional construction from the two homogeneous solutions $e^{\mp ikx}$ with the Wronskian factor $A = -i/2k$, a route that does not use a contour at all. $\square$
:::

:::proof[Three dimensions]{provenance=adapted src="hassani-2013:§22.4.2, pp. 682-683, the angular reduction and the three-dimensional result; arfken-2013:§10.2, Table 10.1 and Exercise 10.2.4, pp. 463, 466"}
**Step 1 (angular integration).** With the source at the origin and $r = \lvert\mathbf{r}\rvert$, taking the polar axis of $\mathbf{q}$ along $\mathbf{r}$ gives $\int e^{i\mathbf{q}\cdot\mathbf{r}}d\Omega_{\mathbf{q}} = 2\pi\int_{-1}^{1}e^{iqr\mu}d\mu = 4\pi\,\dfrac{\sin qr}{qr}$. Hence

$$
G(r) = \frac{1}{(2\pi)^3}\int_0^\infty dq\; q^2\,\frac{1}{k^2-q^2}\cdot\frac{4\pi\sin qr}{qr}
= \frac{1}{2\pi^2 r}\int_0^\infty \frac{q\,\sin qr}{k^2-q^2}\; dq ,
$$

using $4\pi/(2\pi)^3 = 1/(2\pi^2)$.

**Step 2 (extend to the whole line).** The integrand $q\sin(qr)/(k^2-q^2)$ is even in $q$, so

$$
G(r) = \frac{1}{4\pi^2 r}\int_{-\infty}^{\infty}\frac{q\,\sin qr}{k^2-q^2}\; dq .
$$

**Step 3 (to a single exponential).** Put $\sin qr = (e^{iqr}-e^{-iqr})/2i$ and let $J = \int_{-\infty}^\infty q\,e^{iqr}(k^2-q^2)^{-1}dq$. Substituting $q\to-q$ in the second piece turns $\int q e^{-iqr}(k^2-q^2)^{-1}dq$ into $-J$, so the whole integral is $\tfrac{1}{2i}\bigl(J-(-J)\bigr) = -iJ$.

**Step 4 (residues).** After the displacement $k\to k+i\delta$, the integrand of $J$ has poles at $\pm(k+i\delta)$, and $q/(k^2-q^2) \to 0$ at large $\lvert q\rvert$, so Jordan's lemma permits closing in the upper half-plane for $r>0$. Only $q_0 = k+i\delta$ is enclosed, with residue

$$
\lim_{q\to q_0}(q-q_0)\frac{q\,e^{iqr}}{-(q-q_0)(q+q_0)} = -\frac{q_0 e^{iq_0 r}}{2q_0} = -\frac{e^{iq_0r}}{2} ,
$$

so $J = 2\pi i\cdot(-\tfrac12 e^{iq_0r}) \to -i\pi e^{ikr}$ as $\delta\to0$.

**Step 5 (assemble).** The radial integral is $-iJ = -i(-i\pi e^{ikr}) = -\pi e^{ikr}$, whence

$$
G(r) = \frac{-\pi e^{ikr}}{4\pi^2 r} = -\frac{e^{ikr}}{4\pi r} .
$$

**Step 6 (checks).** As $k\to0$ this is the Laplace Green's function $-1/(4\pi r)$, and as $r\to0$ it behaves like $-1/(4\pi r)$ for any $k$, confirming the normalisation demanded by condition 1 of the definition. Away from the origin, $\nabla^2(e^{ikr}/r) = r^{-1}(d^2/dr^2)(e^{ikr}) = -k^2 e^{ikr}/r$, so $(\nabla^2+k^2)G=0$ there. Finally $\partial G/\partial r - ikG = e^{ikr}/(4\pi r^2) = O(r^{-2})$, so the Sommerfeld condition holds. Had we displaced the poles the other way, the enclosed pole would have been $-k$ and the answer $-e^{-ikr}/(4\pi r)$: the incoming Green's function, which is the complex conjugate, as Hassani's two signs record. $\square$
:::

:::proof[Two dimensions]{provenance=adapted src="arfken-2013:§10.2, Table 10.1 and footnote b, p. 463, and Exercise 10.2.3, p. 466; hassani-2013:§22.4.2, the general-$m$ Hankel form, p. 682"}
Here the contour route runs into Bessel integrals — the method of step 4 leaves $G = (2\pi)^{-1}\int_0^\infty q J_0(q\varrho)(k^2-q^2)^{-1}dq$, and Hassani's general-dimension computation of that integral produces a Hankel function $H^{(1)}_{m/2-1}$, whose $m=2$ case is $H_0^{(1)}$. We instead fix the answer in position space, which needs only the radial equation and the two facts about $H_0^{(1)}$ that are proved in the Bessel chapter.

**Step 1 (the radial equation).** Away from the source $G$ depends only on $\varrho$ and satisfies

$$
\frac{1}{\varrho}\frac{d}{d\varrho}\left(\varrho\,\frac{dG}{d\varrho}\right) + k^2 G = 0 ,
$$

which is Bessel's equation of order zero in the variable $k\varrho$. Its solutions are spanned by $H_0^{(1)}(k\varrho)$ and $H_0^{(2)}(k\varrho)$, so $G = A\,H_0^{(1)}(k\varrho) + B\,H_0^{(2)}(k\varrho)$ for $\varrho>0$.

**Step 2 (the outgoing condition fixes $B=0$).** By the :ref[large-argument asymptotics]{to=spec.bessel-asymptotics}, $H_0^{(1)}(z)\sim\sqrt{2/\pi z}\;e^{i(z-\pi/4)}$ and $H_0^{(2)}(z)\sim\sqrt{2/\pi z}\;e^{-i(z-\pi/4)}$. The first depends on $\varrho$ through $e^{+ik\varrho}$ and the second through $e^{-ik\varrho}$, so condition 2 of the definition forces $B=0$.

**Step 3 (the singularity fixes $A$).** By the corollary in the definition, $G$ must have the same singularity at $\varrho=0$ as the two-dimensional Laplace Green's function, that is $G = (2\pi)^{-1}\ln\varrho + O(1)$. The small-argument behaviour of the Hankel function is $H_0^{(1)}(z) = 1 + \tfrac{2i}{\pi}\bigl(\ln(z/2)+\gamma\bigr) + O(z^2\ln z)$, since $J_0(z)\to1$ and $Y_0(z) = \tfrac{2}{\pi}(\ln(z/2)+\gamma) + O(z^2)$. So

$$
A\,H_0^{(1)}(k\varrho) = \frac{2iA}{\pi}\ln\varrho + \text{(constant)} + o(1) ,
$$

and matching the coefficient of $\ln\varrho$ gives $2iA/\pi = 1/(2\pi)$, that is

$$
A = \frac{1}{4i} = -\frac{i}{4},
\qquad
G(\varrho) = -\frac{i}{4}\,H_0^{(1)}(k\varrho) ,
$$

which is the entry in Arfken's Table 10.1. $\square$
:::

:::remark[Where the choices enter, and what else they could have been]{provenance=original}
- *The pole displacement is the boundary condition, nothing more.* $\tilde G = (k^2-q^2)^{-1}$ is the same in all cases; outgoing, incoming and standing-wave Green's functions differ only in how the contour passes the two poles. In three dimensions they are $-e^{ikr}/(4\pi r)$, its conjugate, and the average $-\cos(kr)/(4\pi r)$; the last is what Arfken, Weber and Harris ask for in the exercise on standing waves, and it is the one relevant to a cavity rather than to radiation into free space.
- *A principal value is not a **radiation** Green's function — and for the wave operator it is not a Green's function at all.* For $\nabla^2+k^2$ the symmetric contour gives the standing wave $-\cos(kr)/(4\pi r)$ of the previous bullet, which does solve $(\nabla^2+k^2)G=\delta$; it is only the radiation condition that it fails, so here one must choose a side, and the physics chooses it. The analogous prescription for the *wave* operator is worse, and it is there that Hassani places his warning: the principal value of his $\omega$ integral produces a function with no delta source whatever, so it solves the *homogeneous* wave equation and is no Green's function at all (his Problem 22.25); the useful ones, he concludes, come from displacing the poles instead. The difference is that for the wave operator the contour must be closed in opposite half-planes according to the sign of $t$, so the symmetric prescription combines the retarded and advanced functions in a way that cancels their delta functions; in the spatial integral above the contour closes in the upper half-plane for every $r>0$, and no such cancellation can occur.
- *Why $\pm k^2$ cannot change the singularity.* Near the pole, $G$ blows up like the Laplace Green's function, which in $n$ dimensions is integrable; multiplying by $k^2$ and integrating over a ball of radius $\varepsilon$ gives $O(\varepsilon^2)$ in three dimensions, $O(\varepsilon^2\ln\varepsilon)$ in two and $O(\varepsilon^2)$ in one. So the $k^2G$ term contributes nothing to the delta function, which is why the normalisation can always be read off from the Laplace case. The qualitative statement is Exercise 10.2.3 of Arfken, Weber and Harris, which asks one to show that neither $+k^2$ nor $-k^2$ alters how $G$ behaves in "the immediate vicinity of the singular point"; the $\varepsilon$-ball estimates just given are our own, and are not the integral that the exercise goes on to display.
- *Dimension matters more than one expects.* The three answers in the Helmholtz column are of three different kinds: a bounded oscillation of constant amplitude in one dimension, a logarithmically singular function with $\varrho^{-1/2}$ decay in two, and a $1/r$ decay in three. This is the same difference that Arfken, Weber and Harris stress for the Laplace column: "flatland" physics is genuinely different, even for problems with translational symmetry in one direction. Indeed the two-dimensional Green's function *is* the three-dimensional one integrated along a line, which is how $H_0^{(1)}$ arises from $e^{ikr}/r$.
- *Why $-i/4$ and not $-1/4$.* The factor of $i$ is an artefact of writing the outgoing solution as a Hankel function rather than as an exponential: $H_0^{(1)}$ is complex at small argument, and its real part $J_0$ is regular there while the singular part sits in $iY_0$. Matching a real logarithm therefore demands an imaginary coefficient.
- *Bounded regions.* All of the above is free space. On a bounded region one adds a solution of the homogeneous Helmholtz equation to meet the boundary condition, exactly as for Laplace's equation; but unlike the Laplace case this fails when $k^2$ is an eigenvalue of $-\nabla^2$ on the region, for then the corrector problem is unsolvable and no Green's function exists. Arfken, Weber and Harris note the same phenomenon in the form that the Dirichlet problem for Helmholtz's equation on a closed boundary has solutions "only for certain values of $k$", and the resolution is the :ref[Fredholm alternative]{to=green.fredholm-alternative}; the eigenfunction expansion $G = \sum_n \varphi_n(\mathbf{r})\varphi_n^*(\mathbf{r}')/(\lambda_n-\lambda)$ of :ref[]{to=green.eigenfunction-expansion-green} shows the breakdown as a vanishing denominator.
- *Modified Helmholtz needs no prescription.* For $\nabla^2-\kappa^2$ the transform is $-(\kappa^2+q^2)^{-1}$, which has no real poles; the contour is unambiguous and the answer decays. Substituting $k=i\kappa$ in the middle column reproduces the right-hand one: $-\tfrac{i}{2k}e^{ik\lvert x\rvert}\mapsto -\tfrac{1}{2\kappa}e^{-\kappa\lvert x\rvert}$, $-e^{ikr}/(4\pi r)\mapsto -e^{-\kappa r}/(4\pi r)$, and, using $K_0(z) = \tfrac{i\pi}{2}H_0^{(1)}(iz)$, $-\tfrac i4 H_0^{(1)}(i\kappa\varrho)\mapsto -\tfrac{1}{2\pi}K_0(\kappa\varrho)$. Hassani obtains the three-dimensional case directly as the Yukawa potential of a unit charge.
:::

:::example[A uniform source in a slab, in one dimension]{provenance=original}
Solve $\psi'' + k^2\psi = f$ on $\mathbb{R}$ with outgoing behaviour, where $f(x) = 1$ for $\lvert x\rvert<L$ and $f=0$ outside.

1. *Superpose.* $\displaystyle\psi(x) = -\frac{i}{2k}\int_{-L}^{L}e^{ik\lvert x-y\rvert}\, dy .$
2. *Outside, $x>L$.* Then $\lvert x-y\rvert = x-y$ throughout, so
   $$
   \psi(x) = -\frac{i}{2k}e^{ikx}\int_{-L}^{L}e^{-iky}\, dy = -\frac{i}{2k}e^{ikx}\cdot\frac{2\sin kL}{k} = -\frac{i\sin kL}{k^2}\,e^{ikx} ,
   $$
   and by symmetry $\psi(x) = -i\sin(kL)k^{-2}e^{-ikx}$ for $x<-L$; both are outgoing, with the amplitude $\lvert\sin kL\rvert/k^2$.
3. *Inside, $\lvert x\rvert<L$.* Split the integral at $y=x$:
   $$
   \int_{-L}^{x}e^{ik(x-y)}dy = \frac{e^{ik(x+L)}-1}{ik},
   \qquad
   \int_{x}^{L}e^{ik(y-x)}dy = \frac{e^{ik(L-x)}-1}{ik} ,
   $$
   whose sum is $\bigl(2e^{ikL}\cos kx - 2\bigr)/ik$. Multiplying by $-i/2k$,
   $$
   \psi(x) = \frac{1 - e^{ikL}\cos kx}{k^2} .
   $$
4. *Check the equation.* Inside, $\psi'' = e^{ikL}\cos kx$ and $k^2\psi = 1-e^{ikL}\cos kx$, so $\psi''+k^2\psi = 1 = f$. Outside, $\psi''+k^2\psi=0$. Both hold, so $\psi$ solves the problem.
5. *Check the matching.* At $x=L$ the inside formula gives $(1-e^{ikL}\cos kL)/k^2$ and the outside one $-i\sin(kL)e^{ikL}/k^2$; these agree because $e^{ikL}\cos kL - ie^{ikL}\sin kL = e^{ikL}e^{-ikL} = 1$. The first derivative matches too, as it must: $f$ is bounded, so $\psi''$ is bounded and $\psi'$ continuous.
6. *Numbers, and the silent slab.* Take $k=1$ and $L = \pi/2$. Then $\psi(0) = 1 - e^{i\pi/2} = 1-i$, of modulus $\sqrt2 = 1.414214$, and for $x>\pi/2$, $\psi(x) = -ie^{ix}$, of modulus exactly $1$ — the largest value the outgoing amplitude $\lvert\sin kL\rvert/k^2$ can take at $k=1$. For $k=1$ and $L=\pi$, by contrast, $\sin kL$ vanishes and the slab radiates nothing at all: $\psi = (1-e^{i\pi}\cos x)/1 = 1+\cos x$ inside, identically $0$ outside. The silent case is $kL = n\pi$, that is $L = n\lambda/2$ with $\lambda = 2\pi/k$: the *half*-width $L$ must be a whole number of half-wavelengths, so that the slab's full width $2L$ is a whole number of full wavelengths. (The $L=\pi/2$ case above has width $2L = \pi = \lambda/2$, one half-wavelength, and radiates the maximum, which shows that the condition is on $L$ and not on the width.) The two edges then interfere destructively.
:::

:::example[A spherical shell source in three dimensions]{provenance=original}
Solve $(\nabla^2+k^2)\psi = \sigma\,\delta(r-b)$ on $\mathbb{R}^3$ with outgoing behaviour: a uniform source of strength $\sigma$ per unit area spread over the sphere of radius $b$ about the origin. (Total source strength $4\pi b^2\sigma$.)

1. *The one integral needed.* By symmetry $\psi$ depends only on $r$, and
   $$
   \psi(r) = -\frac{\sigma}{4\pi}\oint_{\lvert\mathbf{r}'\rvert=b}\frac{e^{ik s}}{s}\; dS',
   \qquad s = \lvert\mathbf{r}-\mathbf{r}'\rvert .
   $$
   Write $dS' = 2\pi b^2\sin\theta\, d\theta$ with $\theta$ the angle at the origin, so $s^2 = r^2+b^2-2rb\cos\theta$ and $s\, ds = rb\sin\theta\, d\theta$. The measure converts exactly:
   $$
   \oint\frac{e^{iks}}{s}\, dS' = 2\pi b^2\int\frac{e^{iks}}{s}\cdot\frac{s\, ds}{rb} = \frac{2\pi b}{r}\int_{\lvert r-b\rvert}^{r+b}e^{iks}\, ds
   = \frac{2\pi b}{ikr}\Bigl(e^{ik(r+b)} - e^{ik\lvert r-b\rvert}\Bigr) .
   $$
   This is the whole computation; no Bessel functions are needed.
2. *Outside, $r>b$.* Then $\lvert r-b\rvert = r-b$ and the bracket is $e^{ikr}(e^{ikb}-e^{-ikb}) = 2i\sin(kb)\,e^{ikr}$, so
   $$
   \psi(r) = -\frac{\sigma}{4\pi}\cdot\frac{4\pi b\sin kb}{kr}e^{ikr} = -\frac{\sigma b\sin kb}{k}\,\frac{e^{ikr}}{r} .
   $$
3. *Inside, $r<b$.* Then $\lvert r-b\rvert = b-r$ and the bracket is $e^{ikb}(e^{ikr}-e^{-ikr}) = 2i\sin(kr)e^{ikb}$, so
   $$
   \psi(r) = -\frac{\sigma b\, e^{ikb}}{k}\,\frac{\sin kr}{r} ,
   $$
   which is finite at the origin, with $\psi(0) = -\sigma b\,e^{ikb}$.
4. *Check the equation away from the shell.* For any $g$, $\nabla^2\bigl(g(r)/r\bigr) = r^{-1}g''(r)$. With $g = e^{ikr}$ outside and $g=\sin kr$ inside, $g'' = -k^2g$ in both cases, so $(\nabla^2+k^2)\psi=0$ on $r\neq b$. The outside form is outgoing and the inside form regular, as required.
5. *Check the jump.* Integrating $(\nabla^2+k^2)\psi = \sigma\delta(r-b)$ over a thin shell and using the divergence theorem gives $4\pi b^2[\psi'(b^+)-\psi'(b^-)] = 4\pi b^2\sigma$, so the radial derivative must jump by $\sigma$. From steps 2 and 3,
   $$
   \psi'(b^+) = -\frac{\sigma\sin kb\;e^{ikb}(ikb-1)}{kb},
   \qquad
   \psi'(b^-) = -\frac{\sigma e^{ikb}(kb\cos kb - \sin kb)}{kb} ,
   $$
   and the difference is $-\dfrac{\sigma e^{ikb}}{kb}\bigl[ikb\sin kb - kb\cos kb\bigr] = \sigma e^{ikb}\bigl(\cos kb - i\sin kb\bigr) = \sigma$, using $e^{ikb}e^{-ikb}=1$. The two formulas also agree at $r=b$, both giving $-\sigma b\sin(kb)e^{ikb}/(kb)$, so $\psi$ is continuous there.
6. *Numbers.* Take $\sigma=1$ and $k=1$. For $b = 0.7$: $\psi(0) = -0.7\,e^{0.7i} = -0.5353895 - 0.4509524\,i$, and the far field has amplitude $b\sin(kb)/k = 0.7\sin 0.7 = 0.4509524$. For $b = \pi$, $\sin kb = 0$ and the shell is **silent**: $\psi\equiv0$ outside, while inside $\psi = -\pi e^{i\pi}\sin(r)/r = \pi\sin(r)/r$, which rises to $\psi(0) = \pi$. The silent radii are $kb = n\pi$, that is $b = n\lambda/2$: a breathing sphere whose radius is a whole number of half-wavelengths radiates nothing, and $b=\pi$ at $k=1$ is the first of them ($\lambda = 2\pi$, $b = \lambda/2$), with $b = \lambda, \tfrac32\lambda,\dots$ equally silent. This is the direct analogue of the one-dimensional slab of the previous example, and the reason a monopole radiator has a comb of blind sizes.
:::

:::application{provenance=original}
**Radiation and antennas.** The three-dimensional outgoing Green's function *is* the radiation field of a point monopole: a time-harmonic source $f(\mathbf{r})e^{-i\omega t}$ produces $\psi(\mathbf{r})e^{-i\omega t}$ with $\psi = \int G f$, and at large $r$, $e^{ikr}/r$ times an angular factor $\int f(\mathbf{r}')e^{-i\mathbf{k}\cdot\mathbf{r}'}d^3r'$ — the Fourier transform of the source evaluated on the sphere $\lvert\mathbf{k}\rvert = k$. That one observation is the whole far-field theory of acoustic and electromagnetic radiators: the radiation pattern is the source's spatial spectrum restricted to the shell of radiating wavenumbers, the rest of the spectrum being evanescent. The silent shell of the second example is the extreme case of destructive interference between parts of a source, and the same arithmetic sets the directivity of a phased array.

**Scattering.** Writing the Schrödinger equation as $(\nabla^2+k^2)\psi = (2m/\hbar^2)V\psi$ and applying the outgoing Green's function turns it into the integral equation
$$
\psi(\mathbf{r}) = e^{i\mathbf{k}_0\cdot\mathbf{r}} - \frac{2m}{\hbar^2}\int\frac{e^{ik\lvert\mathbf{r}-\mathbf{r}'\rvert}}{4\pi\lvert\mathbf{r}-\mathbf{r}'\rvert}V(\mathbf{r}')\psi(\mathbf{r}')\; d^3r' ,
$$
the plane wave being the added homogeneous solution that supplies the incident beam. This is the Lippmann-Schwinger equation; iterating it once gives the Born approximation (:ref[]{to=green.born-approximation}), and iterating it indefinitely gives the :ref[Neumann series]{to=green.neumann-series}. The outgoing condition is what makes the scattered part a wave leaving the target, and hence what makes the cross-section come out positive.

**Screening, and why the modified operator appears.** $\nabla^2-\kappa^2$ with the Green's function $-e^{-\kappa r}/(4\pi r)$ is the screened Coulomb or Yukawa kernel: $\kappa^{-1}$ is the Debye length in a plasma or electrolyte, the Thomas-Fermi screening length in a metal, and $\hbar/m_\pi c$ in Yukawa's original nuclear force. In two dimensions the same Green's function is $-K_0(\kappa\varrho)/2\pi$, which is the response of a membrane on an elastic foundation and the kernel of linearised groundwater flow with leakage. The replacement $k\to i\kappa$ that connects the two columns of the table is, physically, the passage from a propagating wave to an evanescent one, and in a waveguide it happens exactly at cut-off.

**Seismology, acoustics and optics in two dimensions.** $-\tfrac i4 H_0^{(1)}(k\varrho)$ is the two-dimensional point-source field used in full-waveform inversion, in the boundary-element modelling of noise barriers, and in the analysis of surface waves; its $\varrho^{-1/2}$ decay and its $-\pi/4$ phase lag relative to a three-dimensional source are the signatures of a line source, and getting that phase right is what distinguishes a two-dimensional from a three-dimensional forward model. The same function, continued to imaginary argument, is the $K_0$ of the screened problem.

**Time-dependent problems.** Because a time-harmonic factor $e^{-i\omega t}$ converts the wave equation into Helmholtz's equation with $k=\omega/c$, the outgoing Green's function here is the Fourier transform in time of the retarded Green's function of the wave equation; that correspondence, and the delta-function on the light cone that it implies, is the subject of :ref[]{to=green.wave-heat-green-functions}.
:::
