---
id: spec.airy-functions
title: Airy functions
kind: definition
level: core
summary: "Airy's equation $y''=zy$, its two standard solutions $\\mathrm{Ai}$ and $\\mathrm{Bi}$ as series, contour integrals and Bessel functions of order $1/3$, their opposite behaviour on the two sides of the origin, and the role of $\\mathrm{Ai}$ at a WKB turning point."
prereqs: [spec.bessel-first-kind, spec.gamma-function, ode.ordinary-point-series]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§25.6, Stokes' equation (25.32) and the qualitative behaviour of its solutions on the two sides of the origin, pp. 888–889; §25.6.2, the two power series, p. 890; §25.6.3, the Laplace-type contour solution, eqs. (25.33)–(25.36), the definitions of $\\mathrm{Ai}$ and $\\mathrm{Bi}$ and the real form (25.39), pp. 891–892; the asymptotic pair (25.40)–(25.41) and the worked evaluation of $\\mathrm{Ai}(0)$, pp. 893–894; the remark on Bessel functions of orders $\\pm1/3$, $\\pm2/3$, pp. 894–895; §25.7, the WKB solutions of Stokes' equation (25.50)–(25.51), the matched forms (25.52)–(25.53) and the Stokes lines, pp. 898–899; the worked turning-point problem giving the quantization condition and the spectrum of $V_0x^{2s}$, pp. 900–901"
    pages: "888-895, 898-901"
    role: the equation and the naming of its solutions, the curvature argument that singles out $\\mathrm{Ai}$, the two power series and their recurrences, the contour-integral construction with the three admissible sectors, the cosine integral representation, the exact value of $\\mathrm{Ai}(0)$ via a Gamma integral, the asymptotic forms on both sides of the origin, and the whole turning-point analysis including the Bohr–Sommerfeld condition
  - work: hassani-2013
    loc: "Problem 14.24 (Airy's DE $y''+xy=0$ by power series, infinite radius of convergence, and the oscillation dichotomy via the comparison theorem), p. 456; Problem 15.41 (the substitutions $z=\\beta t^{\\gamma}$, $w=t^{\\alpha}u$ reducing Bessel's equation to a general form, applied to Airy's equation), p. 490"
    pages: "456, 490"
    role: the statement that both series solutions are entire, the comparison-theorem dichotomy between infinitely many zeros on one side of the origin and at most one on the other, and the substitution scheme that converts Airy's equation into Bessel's equation of order $1/3$
  - work: strauss-2008
    loc: "Ch. 14, Exercise 10 (solving the linearized KdV equation $u_t+u_{xxx}=0$ by Fourier transform, with the Airy function written as the displayed integral $A(\\xi)=\\int \\mathrm{e}^{\\mathrm{i}k\\xi+\\mathrm{i}k^3/3}\\,\\mathrm{d}k/2\\pi$), p. 396, with Exercises 11 and 12 on the scaling $x\\to kx$, $t\\to k^3t$, p. 396"
    pages: "396"
    role: the Airy integral as the Fourier-transform solution kernel of the linearized Korteweg–de Vries equation, and the cube-root scaling $t^{1/3}$ that the kernel inherits
  - work: evans-2010
    loc: "Ch. 1, §1.2, the catalogue of linear partial differential equations, item 13, p. 4"
    pages: "4"
    role: the use of the name "Airy's equation" for the third-order dispersive partial differential equation $u_t+u_{xxx}=0$, a different equation from the ordinary differential equation of this unit
---

:::definition[Airy's equation, and the functions $\mathrm{Ai}$ and $\mathrm{Bi}$]{provenance=adapted src="rhb-2006:§25.6, eq. (25.32) and the behaviour of the solutions near the origin, pp. 888–889, §25.6.2, the two series, p. 890, and §25.6.3, eqs. (25.35)–(25.36) and (25.39), pp. 891–892; hassani-2013:Problem 14.24, p. 456"}
**Airy's equation** is
$$
\frac{\mathrm{d}^2y}{\mathrm{d}z^2} = z\,y .
\tag{A}
$$
Riley, Hobson and Bence call it **Stokes' equation** and list the variants $y''+\lambda xy=0$ and $y''+xy=0$, all of which reduce to (A) by a complex rescaling of the independent variable; we use (A) and write $\mathrm{Ai}(-x)$ when the oscillatory side is wanted.

Every finite point is an ordinary point of (A) — the only singularity is at $z=\infty$, and it is irregular — so by :ref[]{to=ode.ordinary-point-series} there are two power-series solutions about the origin, and both are **entire**. Writing a solution as $y=\sum_{n\ge0}c_nz^n$ and matching the coefficient of $z^{n+1}$ on the two sides of (A) gives the single recurrence
$$
(n+3)(n+2)\,c_{n+3} = c_n \quad (n\ge0), \qquad\text{together with}\qquad 2c_2 = 0
$$
from the coefficient of $z^0$; so $c_2=c_5=c_8=\cdots=0$, and the two seeds $(c_0,c_1)=(1,0)$ and $(c_0,c_1)=(0,1)$ give
$$
y_1(z) = 1 + \frac{z^3}{6} + \frac{z^6}{180} + \cdots = \sum_{k=0}^{\infty}\frac{z^{3k}}{\prod_{j=1}^{k}(3j-1)(3j)} ,
\qquad
y_2(z) = z + \frac{z^4}{12} + \frac{z^7}{504} + \cdots = \sum_{k=0}^{\infty}\frac{z^{3k+1}}{\prod_{j=1}^{k}(3j)(3j+1)} .
$$
Hassani sets the same computation for $y''+xy=0$ and asks for the radius of convergence, which is infinite by the ratio test: successive terms carry a factor $z^3/[(3k+2)(3k+3)]$, which tends to zero for every $z$.

These two series are a basis, but not a useful one, because both of them blow up as $z\to+\infty$. The standard basis is chosen by behaviour at infinity instead:

- $\mathrm{Ai}(z)$ is the solution that decays to zero as $z\to+\infty$ along the real axis, normalised as below;
- $\mathrm{Bi}(z)$ is the solution that grows there, normalised to be in quadrature with $\mathrm{Ai}$ on the other side.

Riley, Hobson and Bence motivate the first by a curvature argument that is worth repeating because it shows the solution is unique up to scale. On $z>0$ the equation says $y''$ has the sign of $y$, so wherever $y>0$ the graph is convex and bends away from the axis. If $y(0)>0$ and $y'(0)$ is positive or only slightly negative, the graph is carried up to $+\infty$; if $y'(0)$ is very negative the graph crosses the axis, after which the curvature reverses and carries it down to $-\infty$. Exactly one intermediate slope gives a graph that approaches the axis from above and never crosses it. That solution is $\mathrm{Ai}$. On $z<0$ the sign of $y''$ is opposite to that of $y$, so *every* solution bends back towards the axis, crosses it, and oscillates — with frequency increasing and amplitude decreasing as $-z$ grows. Hassani's Problem 14.24 asks for the same dichotomy, proved by the Sturm comparison theorem: infinitely many zeros on the oscillatory side, at most one on the other.

**Integral definitions.** The integrand $\exp(-\tfrac13t^3+zt)$ decays at infinity exactly in the three sectors $\lvert\arg t-2\pi n/3\rvert<\pi/6$, $n=0,1,2$, where $\operatorname{Re}(t^3)>0$. Let $C_1$ be a contour in the complex $t$-plane coming in from infinity in the sector about $\arg t = 4\pi/3$ and going back out to infinity in the sector about $\arg t = 2\pi/3$, and let $C_2$, $C_3$ be the two contours obtained from it by rotating through $\pm2\pi/3$. Then
$$
\mathrm{Ai}(z) = \frac{1}{2\pi\mathrm{i}}\int_{C_1}\exp\!\left(-\tfrac13 t^3+zt\right)\mathrm{d}t ,
\qquad
\mathrm{Bi}(z) = \frac{1}{2\pi}\int_{C_2}\exp\!\left(-\tfrac13 t^3+zt\right)\mathrm{d}t - \frac{1}{2\pi}\int_{C_3}\exp\!\left(-\tfrac13 t^3+zt\right)\mathrm{d}t .
$$
Deforming $C_1$ onto the imaginary axis, $t=\mathrm{i}s$, and discarding the odd part of the integrand gives the real form
$$
\mathrm{Ai}(x) = \frac{1}{\pi}\int_0^{\infty}\cos\!\left(\tfrac13 s^3+xs\right)\mathrm{d}s \qquad (x\in\mathbb{R}),
$$
which shows at once that $\mathrm{Ai}$ is real on the real axis. Strauss writes the same object, without the symmetrisation, as $A(\xi)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\mathrm{e}^{\mathrm{i}k\xi+\mathrm{i}k^3/3}\mathrm{d}k$.

**A name used twice.** Evans's catalogue of linear partial differential equations lists "Airy's equation" as $u_t+u_{xxx}=0$. That is a different equation — third order, a PDE, and dispersive — and the connection is that its solution kernel is the function of this unit. Context disambiguates, but the clash is real.
:::

:::statement[Values, Wronskian, Bessel form and asymptotics]{provenance=adapted src="rhb-2006:§25.6.3, the evaluation of Ai(0), pp. 893–894, the asymptotic forms (25.40)–(25.41), p. 893, the remark on Bessel functions of order 1/3, pp. 894–895, and §25.7, eqs. (25.52)–(25.53), p. 899; hassani-2013:Problem 15.41, p. 490"}
1. **Values at the origin, and the series.**
   $$
   \mathrm{Ai}(0) = \frac{3^{-2/3}}{\Gamma(2/3)} = \frac{3^{-1/6}\,\Gamma(1/3)}{2\pi} = 0.3550280539\ldots,
   \qquad
   \mathrm{Ai}'(0) = -\frac{3^{-1/3}}{\Gamma(1/3)} = -0.2588194038\ldots,
   $$
   $$
   \mathrm{Bi}(0) = \frac{3^{-1/6}}{\Gamma(2/3)} = \sqrt3\,\mathrm{Ai}(0), \qquad
   \mathrm{Bi}'(0) = \frac{3^{1/6}}{\Gamma(1/3)} = -\sqrt3\,\mathrm{Ai}'(0) ,
   $$
   and consequently $\mathrm{Ai} = \mathrm{Ai}(0)\,y_1 + \mathrm{Ai}'(0)\,y_2$ and $\mathrm{Bi} = \mathrm{Bi}(0)\,y_1+\mathrm{Bi}'(0)\,y_2$ in terms of the two series above.
2. **Wronskian.** $\mathrm{Ai}(z)\mathrm{Bi}'(z)-\mathrm{Ai}'(z)\mathrm{Bi}(z) = 1/\pi$, constant in $z$; in particular the pair is a basis.
3. **Bessel form.** Put $\zeta = \tfrac23 x^{3/2}$ for $x>0$. Then $\sqrt x\,\mathcal{Z}_{1/3}(\zeta)$ solves Airy's equation for any solution $\mathcal{Z}_{1/3}$ of the modified Bessel equation of order $1/3$, and $\sqrt x\,C_{1/3}(\zeta)$ solves $y''+xy=0$ for any solution $C_{1/3}$ of the ordinary Bessel equation of order $1/3$. With the standard normalisations,
   $$
   \mathrm{Ai}(x) = \frac{1}{\pi}\sqrt{\frac{x}{3}}\;K_{1/3}(\zeta)
   = \frac{\sqrt x}{3}\bigl[I_{-1/3}(\zeta)-I_{1/3}(\zeta)\bigr],
   \qquad
   \mathrm{Bi}(x) = \sqrt{\frac{x}{3}}\,\bigl[I_{-1/3}(\zeta)+I_{1/3}(\zeta)\bigr],
   $$
   $$
   \mathrm{Ai}(-x) = \frac{\sqrt x}{3}\bigl[J_{1/3}(\zeta)+J_{-1/3}(\zeta)\bigr],
   \qquad
   \mathrm{Bi}(-x) = \sqrt{\frac{x}{3}}\,\bigl[J_{-1/3}(\zeta)-J_{1/3}(\zeta)\bigr].
   $$
4. **Asymptotics.** As $x\to+\infty$ through real values,
   $$
   \mathrm{Ai}(x) \sim \frac{1}{2\sqrt{\pi}\,x^{1/4}}\exp\!\left(-\tfrac23 x^{3/2}\right),
   \qquad
   \mathrm{Ai}(-x) \sim \frac{1}{\sqrt{\pi}\,x^{1/4}}\sin\!\left(\tfrac23 x^{3/2}+\frac{\pi}{4}\right),
   $$
   and $\mathrm{Bi}(-x) \sim \pi^{-1/2}x^{-1/4}\cos\bigl(\tfrac23x^{3/2}+\pi/4\bigr)$, in quadrature with $\mathrm{Ai}(-x)$ as the choice of $\mathrm{Bi}$ was designed to make it.
5. **Turning points.** Let $k^2(x) = 2m[E-V(x)]/\hbar^2$ vanish simply at $x=a$, with $k^2>0$ to the left and $k^2<0$ to the right. Near $a$ the Schrödinger equation $\psi''+k^2\psi=0$ becomes Airy's equation in the stretched variable $z = (x-a)/\mu$ with $\mu = \bigl[\hbar^2/2mV'(a)\bigr]^{1/3}$, and the solution decaying on the forbidden side is $\mathrm{Ai}(z)$. For a well with two simple turning points $\pm a$, matching the $\mathrm{Ai}$ behaviour at each end to the WKB solution between them forces
   $$
   \int_{-a}^{a}k(x)\,\mathrm{d}x = \left(n+\tfrac12\right)\pi , \qquad n=0,1,2,\dots
   $$
:::

:::idea{provenance=original}
Airy's equation is the simplest equation whose character changes across a point: $y''=zy$ is exponential where $z>0$ and oscillatory where $z<0$, with the change happening at a single simple zero of the coefficient. Everything about the functions follows from that one fact, and so does their importance — *any* second-order equation $y''+k^2(x)y=0$ whose coefficient has a simple zero looks like Airy's equation when you zoom in on that zero and rescale. The scaling exponent $1/3$ in $\mu=[\hbar^2/2mV'(a)]^{1/3}$ is forced by dimensional balance between $y''$ and $zy$, and it is the same $1/3$ that appears in the order of the Bessel functions, in the $t^{1/3}$ of the dispersive kernel, and in the $\tfrac23 x^{3/2}$ of the asymptotics (which is $\int\sqrt{x}\,\mathrm{d}x$).

The two constructions of the functions answer two different questions. The power series answers "what are they near zero", and is useless far out. The contour integral answers "what are they far out", and is the natural object because the equation has an irregular singular point at infinity: solutions there are Laplace-type integrals $\int f(t)\mathrm{e}^{zt}\mathrm{d}t$, and substituting into (A) turns the differential equation for $y$ into a *first-order* equation for $f$, namely $f'+t^2f=0$, solved by $f=\mathrm{e}^{-t^3/3}$. The only freedom left is the contour, and the requirement that the boundary terms vanish admits exactly three directions to infinity, in which $\operatorname{Re}t^3>0$. Three endpoints give three contours, of which only two are independent because together the three form a closed loop. That is where the *two* named functions come from, and why they are naturally indexed by sectors of the complex plane.

The Bessel connection is the observation that $\int\sqrt{z}\,\mathrm{d}z = \tfrac23z^{3/2}$ is the phase, so the substitution $\zeta=\tfrac23z^{3/2}$ should straighten the equation out; it does, up to a factor $\sqrt z$ needed to remove the first-derivative term the substitution creates, and the residual order $\nu=1/3$ is $1/(2\cdot3/2)$, the reciprocal of twice the exponent.
:::

:::proof{provenance=adapted src="rhb-2006:§25.6.3, the Laplace-type construction (25.33)–(25.36), the deformation to (25.39) and the Gamma-integral evaluation of Ai(0), pp. 891–894, §25.7, the WKB solutions and the matching (25.50)–(25.53), pp. 898–899, and the turning-point worked example, pp. 900–901; hassani-2013:Problem 15.41, p. 490"}
**The contour solutions.** Try $y(z)=\int_a^b f(t)\mathrm{e}^{zt}\,\mathrm{d}t$. Then $y''=\int t^2f\mathrm{e}^{zt}$, while
$$
zy = \int_a^b f(t)\,z\mathrm{e}^{zt}\,\mathrm{d}t = \Bigl[f(t)\mathrm{e}^{zt}\Bigr]_a^b - \int_a^b f'(t)\mathrm{e}^{zt}\,\mathrm{d}t
$$
after one integration by parts. So (A) holds provided the bracket vanishes and $f'+t^2f=0$, that is $f(t)=A\mathrm{e}^{-t^3/3}$. The bracket vanishes only if $\lvert t\rvert\to\infty$ with $\operatorname{Re}(t^3)>0$, which holds in the three sectors $\lvert \arg t - 2\pi n/3\rvert<\pi/6$, $n=0,1,2$. A contour must begin in one sector and end in a different one, or the integral is zero; there are three such contours and their sum is a closed loop, so only two are independent. Defining $\mathrm{Ai}$ and $\mathrm{Bi}$ by the combinations in the definition fixes the basis.

**The real form.** Deform $C_1$ to run along the imaginary axis (permissible: the integrand is entire, and the ends can be swung inside the sectors without crossing a singularity). With $t=\mathrm{i}s$, $\mathrm{d}t=\mathrm{i}\,\mathrm{d}s$, and $-\tfrac13t^3+zt = \mathrm{i}(\tfrac13s^3+zs)$, so
$$
\mathrm{Ai}(z) = \frac{1}{2\pi}\int_{-\infty}^{\infty}\exp\!\left[\mathrm{i}\left(\tfrac13s^3+zs\right)\right]\mathrm{d}s .
$$
For real $z$ the exponent is an odd function of $s$, so the imaginary part of the integrand is odd and integrates to zero, leaving the cosine form with the range halved.

**The value at the origin.** Set $z=0$ and take $C_1$ as two rays, in along $\arg t = 4\pi/3$ and out along $\arg t=2\pi/3$. On each ray put $\tfrac13t^3=s$ with $s>0$ real, so that $t=(3s)^{1/3}\mathrm{e}^{\mathrm{i}\vartheta}$ and $\mathrm{d}t = \mathrm{e}^{\mathrm{i}\vartheta}(3s)^{-2/3}\mathrm{d}s$ with $\vartheta=4\pi/3$ on the first ray (traversed inwards) and $\vartheta=2\pi/3$ on the second. Then
$$
\mathrm{Ai}(0) = \frac{3^{-2/3}}{2\pi\mathrm{i}}\left(-\mathrm{e}^{4\pi\mathrm{i}/3}+\mathrm{e}^{2\pi\mathrm{i}/3}\right)\int_0^{\infty}\mathrm{e}^{-s}s^{-2/3}\,\mathrm{d}s .
$$
The bracket is $-(-\tfrac12-\tfrac{\sqrt3}{2}\mathrm{i})+(-\tfrac12+\tfrac{\sqrt3}{2}\mathrm{i}) = \mathrm{i}\sqrt3$, and the integral is $\Gamma(1/3)$ by the Euler integral of :ref[]{to=spec.gamma-function}. Hence
$$
\mathrm{Ai}(0) = \frac{3^{-2/3}\sqrt3}{2\pi}\,\Gamma(1/3) = \frac{3^{-1/6}\Gamma(1/3)}{2\pi} .
$$
This is Riley, Hobson and Bence's worked evaluation. The alternative form $3^{-2/3}/\Gamma(2/3)$ follows from the reflection formula $\Gamma(1/3)\Gamma(2/3)=\pi/\sin(\pi/3)=2\pi/\sqrt3$: substituting $\Gamma(1/3)=2\pi/[\sqrt3\,\Gamma(2/3)]$ into the display gives $3^{-1/6}\cdot2\pi/[\sqrt3\,\Gamma(2/3)\cdot2\pi] = 3^{-2/3}/\Gamma(2/3)$. The value of $\mathrm{Ai}'(0)$ comes from the same contour with an extra factor $t$ in the integrand, which turns the exponent $-2/3$ into $-1/3$ and the Gamma function into $\Gamma(2/3)$, and reverses the sign of the angular factor.

**The Wronskian.** $W=\mathrm{Ai}\,\mathrm{Bi}'-\mathrm{Ai}'\mathrm{Bi}$ satisfies $W' = \mathrm{Ai}\,\mathrm{Bi}''-\mathrm{Ai}''\mathrm{Bi} = z\,\mathrm{Ai}\,\mathrm{Bi}-z\,\mathrm{Ai}\,\mathrm{Bi} = 0$, since both functions satisfy (A) and the equation has no first-derivative term to damp the Wronskian. So $W$ equals its value at the origin,
$$
W = \frac{3^{-2/3}}{\Gamma(2/3)}\cdot\frac{3^{1/6}}{\Gamma(1/3)} + \frac{3^{-1/3}}{\Gamma(1/3)}\cdot\frac{3^{-1/6}}{\Gamma(2/3)}
= \frac{3^{-1/2}+3^{-1/2}}{\Gamma(1/3)\Gamma(2/3)} = \frac{2/\sqrt3}{2\pi/\sqrt3} = \frac{1}{\pi},
$$
the second term being positive because $\mathrm{Ai}'(0)$ and $\mathrm{Bi}(0)$ enter with a minus sign each. Equivalently $W = -2\sqrt3\,\mathrm{Ai}(0)\mathrm{Ai}'(0)$, which is $-2\sqrt3\,(0.3550281)(-0.2588194) = 0.3183099 = 1/\pi$.

**The Bessel form.** Follow Hassani's scheme. He records that the substitutions $z=\beta t^{\gamma}$ for the independent variable and $w=t^{\alpha}u$ for the dependent one — so that $w=\mathcal{Z}_{\nu}(z)$ is the Bessel function and $u=t^{-\alpha}w$ is the new unknown, a function of $t$ — turn Bessel's equation into
$$
t^2\frac{\mathrm{d}^2u}{\mathrm{d}t^2}+(2\alpha+1)t\frac{\mathrm{d}u}{\mathrm{d}t}+\bigl(\beta^2\gamma^2t^{2\gamma}+\alpha^2-\nu^2\gamma^2\bigr)u = 0 .
$$
We want this to be $t^2u''-t^3u=0$, which is Airy's equation multiplied by $t^2$. Matching term by term:
$$
2\alpha+1 = 0 \Rightarrow \alpha=-\tfrac12; \qquad
2\gamma = 3 \Rightarrow \gamma = \tfrac32; \qquad
\beta^2\gamma^2 = -1 \Rightarrow \beta = \pm\tfrac{2\mathrm{i}}{3}; \qquad
\alpha^2=\nu^2\gamma^2 \Rightarrow \nu = \pm\tfrac13 .
$$
(The last matching uses $\gamma=\tfrac32$: $\alpha^2=\tfrac14$ and $\nu^2\gamma^2=\tfrac94\nu^2$.) So the new unknown
$$
u = t^{-\alpha}w = t^{1/2}J_{\pm1/3}\bigl(\tfrac23\mathrm{i}t^{3/2}\bigr)
$$
solves Airy's equation. Since $J_\nu(\mathrm{i}\zeta) = \mathrm{i}^{\nu}I_\nu(\zeta)$, these are the same as $t^{1/2}I_{\pm1/3}(\tfrac23t^{3/2})$ up to constants, which is the modified form in part 3. (Hassani's Problem 15.41 states the conclusion as "$J_{1/3}(\tfrac23\mathrm{i}t^{3/2})$ and $J_{-1/3}(\tfrac23\mathrm{i}t^{3/2})$", without the factor $t^{-\alpha}$ that his own substitution $w=t^{\alpha}u$ introduces; with $\alpha=-\tfrac12$ that factor is $t^{1/2}=\sqrt t$, and without it the functions do not satisfy the equation. We follow the substitution rather than the printed conclusion; see the remark below.) Replacing $t$ by $-x$ throughout turns the modified Bessel functions into ordinary ones and gives the oscillatory pair. The particular combinations quoted for $\mathrm{Ai}$ and $\mathrm{Bi}$ are fixed by matching the values at $x=0$: as $\zeta\to0$, $I_{\mp1/3}(\zeta)\sim(\zeta/2)^{\mp1/3}/\Gamma(1\mp\tfrac13)$, and feeding $\zeta=\tfrac23x^{3/2}$ into $\tfrac13\sqrt x\,[I_{-1/3}-I_{1/3}]$ gives $3^{-2/3}/\Gamma(2/3)$ in the limit, which is $\mathrm{Ai}(0)$; the $x^{1/2}$ factors cancel against $\zeta^{\mp1/3}\propto x^{\mp1/2}$ exactly, which is why a finite limit exists at all.

**The asymptotics and the turning point.** Write the WKB solutions of (A) (:ref[]{to=asym.wkb-approximation}): for $y''=zy$ they are $z^{-1/4}\exp(\mp\tfrac23z^{3/2})$. Which fixed combination equals $\mathrm{Ai}$ depends on the sector, because $z^{3/2}$ has a branch point at the origin — this is the Stokes phenomenon, and for (A) the Stokes lines are $\arg z\in\{0,2\pi/3,4\pi/3\}$. Riley, Hobson and Bence record the two matched forms:
$$
\mathrm{Ai}(z)\ \sim\ \frac{1}{2\sqrt{\pi}z^{1/4}}\exp\!\left(-\tfrac23z^{3/2}\right)\ (z>0),
\qquad
\mathrm{Ai}(z)\ \sim\ \frac{1}{\sqrt{\pi}(-z)^{1/4}}\sin\!\left(\tfrac23(-z)^{3/2}+\tfrac{\pi}{4}\right)\ (z<0),
$$
their equations (25.52) and (25.53). Note the factor of $2$ between the two amplitudes: a decaying exponential on one side corresponds to a *full*-amplitude sine on the other, and this factor is the content of the connection formula.

For the turning point, expand $E-V(x) = -V'(a)(x-a)+O\bigl((x-a)^2\bigr)$ about the simple zero $x=a$, so that $\psi''+k^2\psi=0$ becomes
$$
\psi'' - \frac{2mV'(a)}{\hbar^2}(x-a)\psi = 0 .
$$
Setting $x-a=\mu z$ with $\mu^3 = \hbar^2/[2mV'(a)]$ reduces it to (A) exactly. The physically admissible solution is $\mathrm{Ai}(z)$, decaying on the forbidden side $z>0$. Its oscillatory form on the allowed side, continued outwards by WKB, is
$$
\psi \propto \frac{1}{\sqrt{k(x)}}\sin\!\left(\int_x^{a}k(u)\,\mathrm{d}u+\frac{\pi}{4}\right) ,
$$
and the mirror-image argument at the left turning point gives $\psi\propto k^{-1/2}\sin\bigl(\int_{-a}^{x}k+\pi/4\bigr)$. The two expressions describe the same function, so their phases must agree modulo $\pi$:
$$
\int_{x}^{a}k+\frac{\pi}{4} + \int_{-a}^{x}k+\frac{\pi}{4} = (n+1)\pi
\quad\Longrightarrow\quad
\int_{-a}^{a}k(u)\,\mathrm{d}u = \left(n+\tfrac12\right)\pi ,
$$
which is the Bohr–Sommerfeld condition with the half-integer that the two $\pi/4$'s supply — one from each turning point. $\square$
:::

:::remark[Where the hypotheses are used, and two things the sources print differently]{provenance=original}
- **Simple zero.** The turning-point reduction uses $V'(a)\ne0$ twice: to make $\mu$ finite and non-zero, and to make the linear term the leading one in the expansion. At a *quadratic* turning point ($V'(a)=0$, $V''(a)\ne0$) the local equation is the parabolic-cylinder equation instead, and the connection formula changes; this is the situation at the top of a barrier, which is why the WKB tunnelling formula degrades near the barrier maximum.
- **Separated turning points.** The matching argument treats the two turning points independently, which presumes the regions where the Airy approximation is valid do not overlap, i.e. that the classically allowed region is many de Broglie wavelengths wide. That is the usual $n\gg1$ condition; it is a pleasant accident, not a theorem, that the resulting formula is exact for the harmonic oscillator at every $n$.
- **$x>0$ in the Bessel form.** The identities of part 3 are stated for $x>0$ because $\zeta=\tfrac23x^{3/2}$ and $\sqrt x$ both need a branch choice otherwise. They extend to the cut plane but the oscillatory and exponential pairs are then different branches of the same analytic object.
- **Riley, Hobson and Bence print two different amplitudes for the same asymptotic.** Their equation (25.40), on p. 893, reads $\mathrm{Ai}(x)\sim\bigl(\sqrt{2\pi}\,x^{1/4}\bigr)^{-1}\sin\bigl(\tfrac23\lvert x\rvert^{3/2}+\pi/4\bigr)$ as $x\to-\infty$, while their equation (25.53), on p. 899, reads $\bigl(\sqrt{\pi}\,(-z)^{1/4}\bigr)^{-1}\sin\bigl(\tfrac23(-z)^{3/2}+\pi/4\bigr)$. The two differ by $\sqrt2$, and (25.40) additionally writes $x^{1/4}$ where the argument is negative. **We follow (25.53).** The choice is not arbitrary: at $x=-20$, numerical evaluation gives $\mathrm{Ai}(-20)=-0.1764061$, while (25.53) gives $-0.1766408$ and (25.40) gives $-0.1249039$. Only the first is an asymptotic approximation to the function. The same $\pi^{-1/2}$ is what makes the connection factor $2$ quoted in the proof come out, and it is forced by the Wronskian in part 2, since the product of the two asymptotic amplitudes must reproduce $1/\pi$.
- **Hassani's Problem 15.41 omits a factor.** Its substitution is $w=t^{\alpha}u$ with $w$ a Bessel function and $u$ the solution of Airy's equation, and matching forces $\alpha=-\tfrac12$, so that $u=t^{-\alpha}w=\sqrt t\,w$; but the problem's concluding sentence names $J_{\pm1/3}(\tfrac23\mathrm{i}t^{3/2})$ as the solutions of Airy's equation, with no $t^{1/2}$. Substituting $J_{1/3}(\tfrac23\mathrm{i}t^{3/2})$ alone into $\ddot u = tu$ does not satisfy it. We have used his substitution scheme and kept the factor; the statement as printed is recorded here rather than repeated.
:::

:::method[Recognising and using an Airy regime]{provenance=adapted src="rhb-2006:§25.7, the WKB solutions (25.49)–(25.51), the matched forms (25.52)–(25.53) and the worked bound-state problem, pp. 898–901"}
When a linear second-order problem $y''+Q(x)y=0$ has a coefficient that changes sign:

1. **Locate the zeros of $Q$** and check they are simple ($Q'(x_0)\ne0$). These are the turning points.
2. **Away from them, use WKB.** On $Q>0$ the solutions are $Q^{-1/4}\exp\bigl(\pm\mathrm{i}\int\sqrt Q\bigr)$, oscillatory; on $Q<0$ they are $\lvert Q\rvert^{-1/4}\exp\bigl(\pm\int\sqrt{\lvert Q\rvert}\bigr)$, one growing and one decaying. Both break down at a turning point, where $Q^{-1/4}$ blows up.
3. **Near a turning point, rescale.** With $Q(x)\approx Q'(x_0)(x-x_0)$, set $x-x_0 = \mu z$ and $\mu = \lvert Q'(x_0)\rvert^{-1/3}$; the equation becomes $y''\pm zy=0$, i.e. Airy's with the sign fixed by the direction of the sign change. The width of the Airy region is $\mu$, which is the geometric mean of the local wavelength and the scale on which $Q$ varies.
4. **Pick the Airy solution by the boundary condition at infinity.** Decay on the forbidden side selects $\mathrm{Ai}$; a condition that permits growth, or a problem posed only on the allowed side, may need $\mathrm{Bi}$ or a combination.
5. **Connect.** Use the asymptotic pair of part 4 of the statement to match the Airy solution's tails onto the WKB solutions on both sides, and read off the relative amplitude and the extra phase $\pi/4$.
6. **Count.** For a bound-state problem with two turning points, step 5 at each end gives the quantization condition $\oint p\,\mathrm{d}q = 2\pi\hbar(n+\tfrac12)$. For a one-sided problem — a hard wall at $x=0$ and a turning point at $x=a$ — only one $\pi/4$ appears and the condition is $\int_0^a k = (n+\tfrac34)\pi$ with $n\ge0$, because the wall contributes a phase $\pi/2$ rather than $\pi/4$.

**A worked consequence.** Riley, Hobson and Bence apply steps 1–6 to the symmetric well $V(x)=V_0x^{2s}$ and obtain $E_n = c_s\bigl(n+\tfrac12\bigr)^{2s/(s+1)}$ with $c_s$ independent of $n$: the scaling comes out of the quantization condition alone, before any integral is evaluated. For $s=1$ this is the exact harmonic spectrum $\propto(n+\tfrac12)$; for $s\to\infty$ it tends to $(n+\tfrac12)^2$, the infinite square well.
:::

:::example[Energy levels of a neutron bouncing in gravity]{provenance=original}
A slow neutron above a horizontal mirror feels $V(z)=mgz$ for $z>0$ and an impenetrable floor at $z=0$. This is the one-sided problem of step 6, and it is solved exactly by an Airy function. The experiment is real — ultracold neutrons over a polished surface — so the numbers are checkable against measurement as well as against arithmetic.

**Step 1: reduce to Airy's equation.** The stationary Schrödinger equation is
$$
-\frac{\hbar^2}{2m}\psi'' + mgz\,\psi = E\psi , \qquad \psi(0)=0,\quad \psi(\infty)=0 .
$$
Rearranged, $\psi'' = \dfrac{2m^2g}{\hbar^2}\left(z-\dfrac{E}{mg}\right)\psi$. Set
$$
\ell = \left(\frac{\hbar^2}{2m^2g}\right)^{1/3}, \qquad \zeta = \frac{z - E/(mg)}{\ell} ,
$$
and the equation is exactly $\mathrm{d}^2\psi/\mathrm{d}\zeta^2 = \zeta\psi$.

**Step 2: apply the boundary conditions.** Decay as $z\to\infty$ forces $\psi\propto\mathrm{Ai}(\zeta)$, discarding $\mathrm{Bi}$. The floor requires $\psi=0$ at $z=0$, that is at $\zeta = -E/(mg\ell)$. So
$$
\mathrm{Ai}\!\left(-\frac{E}{mg\ell}\right)=0 ,
$$
and the spectrum is read straight off the zeros of $\mathrm{Ai}$. Writing $a_n<0$ for the $n$th zero,
$$
E_n = -a_n\,mg\ell = \lvert a_n\rvert\left(\frac{m g^2\hbar^2}{2}\right)^{1/3} .
$$
The quantization is therefore *exact* here, not a WKB approximation: the potential is linear, so the local Airy equation is the global one.

**Step 3: numbers.** With $m = 1.67492750\times10^{-27}\ \mathrm{kg}$, $g = 9.80665\ \mathrm{m\,s^{-2}}$, $\hbar = 1.054571817\times10^{-34}\ \mathrm{J\,s}$,
$$
\left(\frac{mg^2\hbar^2}{2}\right)^{1/3} = \bigl(8.9569\times10^{-94}\bigr)^{1/3} = 9.6395\times10^{-32}\ \mathrm{J} = 0.601648\ \mathrm{peV} .
$$
The first three zeros of $\mathrm{Ai}$ are $a_1=-2.3381074$, $a_2=-4.0879494$, $a_3=-5.5205598$, so
$$
E_1 = 2.3381074\times0.601648\ \mathrm{peV} = \mathbf{1.4067\ peV}, \qquad E_2 = 2.4595\ \mathrm{peV}, \qquad E_3 = 3.3214\ \mathrm{peV} .
$$
The ground-state energy is $1.41$ picoelectronvolts, and the corresponding classical turning height is
$$
z_1 = \frac{E_1}{mg} = \frac{2.2538\times10^{-31}}{1.67493\times10^{-27}\times9.80665}\ \mathrm{m} = 13.72\ \mu\mathrm{m} ,
$$
while the Airy length is $\ell = 5.87\ \mu\mathrm{m}$. These are macroscopic distances, which is why the levels can be resolved by scanning an absorber across a beam.

**Step 4: check against WKB.** The one-sided quantization rule of step 6 of the method, with the levels numbered from $1$ rather than from $0$, reads $\int_0^{z_n}k\,\mathrm{d}z=(n-\tfrac14)\pi$ for $n=1,2,\dots$. With $k=\sqrt{2m(E-mgz)}/\hbar$ the integral is $\tfrac23\lvert a_n\rvert^{3/2}$ in the scaled variable, so WKB predicts
$$
\lvert a_n\rvert \approx \left[\frac{3\pi}{2}\left(n-\tfrac14\right)\right]^{2/3} .
$$
This gives $2.3203$, $4.0818$, $5.5172$ against the exact $2.3381$, $4.0879$, $5.5206$ — errors of $0.76\%$, $0.15\%$ and $0.06\%$, shrinking as $n$ grows, exactly as the "many wavelengths" hypothesis of the remark predicts. All of these values were computed to ten significant figures and cross-checked against independent evaluations of the Airy zeros.
:::

:::application{provenance=original}
**Light at a caustic.** Airy introduced these functions in 1838 to describe the intensity near a rainbow's caustic, where geometrical optics predicts an infinite brightness. Near a fold caustic the two interfering ray paths coalesce, the phase difference has a cubic stationary point, and the diffraction integral is exactly $\int\exp[\mathrm{i}(s^3/3+xs)]\mathrm{d}s$ — the Airy integral (:ref[]{to=asym.stationary-phase}). The resulting pattern, bright fringes on the lit side decaying as $x^{-1/4}$ in envelope with phase $\tfrac23\lvert x\rvert^{3/2}$, and a smooth exponential tail on the dark side, is the *supernumerary bows* visible inside a bright rainbow. The $\lvert x\rvert^{-1/4}$ and the $\tfrac23\lvert x\rvert^{3/2}$ in part 4 of the statement are the fringe amplitude and the fringe spacing as measured.

**Every turning point in quantum mechanics.** Wherever a classical particle stops and turns around, the wavefunction is locally an Airy function. The consequences are everywhere: the exponential tail under a barrier (and so the whole theory of tunnelling, including $\alpha$-decay and the scanning tunnelling microscope); the $\tfrac12$ in the Bohr–Sommerfeld rule, which is the zero-point energy; the shift of highly excited atomic levels in an external field; and the "Airy pattern" of the wavefunction just inside a classical turning point in the semiclassical limit. The quantum bouncer of the example is the cleanest realisation, because there the Airy function is the exact answer rather than a local approximation, and the measured level spacings in ultracold-neutron experiments agree with it.

**Dispersive wave tails.** Strauss's exercise solves the linearized Korteweg–de Vries equation $u_t+u_{xxx}=0$ by Fourier transform and finds the kernel to be an Airy function with the self-similar argument $(x-y)/t^{1/3}$: the solution is $u(x,t) = t^{-1/3}\int A\bigl((x-y)/t^{1/3}\bigr)\varphi(y)\,\mathrm{d}y$ up to a constant, and the $t^{1/3}$ is the scaling $x\to kx$, $t\to k^3t$ that the equation respects. Physically this is the oscillatory wave train that runs ahead of a solitary water wave or an undular bore, and its envelope decays as $t^{-1/3}$ — a decay rate measured in tidal bores and in the wake behind a ship in shallow water. The same kernel governs the leading edge of an optical pulse in a fibre with third-order dispersion.

**Numerics.** The two representations divide the work cleanly. For $\lvert z\rvert\lesssim5$ the entire series of the definition converge fast and are the method of choice, with the caveat that for $z$ negative and moderately large they suffer catastrophic cancellation: $\mathrm{Ai}(-10)=0.04024$ emerges from terms as large as $8.8\times10^{7}$, so double precision loses nine digits there. For larger $\lvert z\rvert$ the asymptotic forms of part 4, with their correction series, are both faster and more accurate — at $z=10$ the leading term alone already gives $\mathrm{Ai}(10)=1.1083\times10^{-10}$ against the true $1.1048\times10^{-10}$, an error of $0.3\%$. In between, the Bessel representation of part 3 lets a library reuse code it already has for $K_{1/3}$ and $J_{\pm1/3}$ (:ref[]{to=spec.modified-bessel}), which is how several standard implementations are in fact organised.
:::
