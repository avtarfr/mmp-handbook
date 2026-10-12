---
id: pde.poisson-integral-formula
title: Poisson's integral formula
kind: theorem
level: core
summary: Solves the Dirichlet problem for Laplace's equation in a disk by separating variables and summing the resulting Fourier series into the Poisson kernel, proves from the kernel's three properties that the integral has the prescribed continuous boundary values, records the corresponding formula for a ball in three dimensions, and deduces that every harmonic function is infinitely differentiable inside its domain.
prereqs: [pde.harmonic-functions, vcalc.cylindrical-spherical, fourier.fourier-series]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§6.3, pp. 165–171: the Dirichlet problem for the disk of radius $a$, the separation $u = R(r)\\Theta(\\theta)$ with periodic conditions giving $\\lambda = n^2$, the Euler equation $r^2R''+rR'-n^2R=0$ with the solutions $r^{\\pm n}$ and $\\log r$, the rejection of the singular ones at $r=0$, the Fourier coefficients (11)–(12), the summation of the series into Poisson's formula (13) and its geometric form (14); Theorem 1, p. 169, with the limit statement (15); the mean value property and the strong maximum principle deduced from it, p. 169; the differentiability argument, p. 170; the Poisson kernel $P(r,\\theta)$ (17) with properties (i)–(iii) and the $\\varepsilon$–$\\delta$ proof of (15), pp. 170–171; §7.4, Eqs. (16)–(17), p. 195, Poisson's formula for the ball $\\{|x|<a\\}$ in three dimensions, derived there from the Green's function of the ball"
    pages: "165-171, 193-196"
    role: the whole route for the disk — separation, summation, kernel properties, boundary limit, differentiability — and the three-dimensional formula for the ball
  - work: stein-shakarchi-2003
    loc: "§1.2.2, pp. 20–21, the steady-state heat equation in the unit disc and the Dirichlet problem for it; §2.5.4, pp. 55–57: the Abel means $A_r(f) = \\sum r^{|n|}a_ne^{in\\theta}$, their identification with $f * P_r$, Lemma 5.5 giving $P_r(\\theta) = (1-r^2)/(1-2r\\cos\\theta+r^2)$ and the proof that $P_r$ is a good kernel via $1-2r\\cos\\theta+r^2 = (1-r)^2+2r(1-\\cos\\theta)$, and Theorem 5.7, that $u = f*P_r$ is twice (indeed infinitely) differentiable with $\\Delta u = 0$, that $u(r,\\theta) \\to f(\\theta)$ at every point of continuity of $f$ and uniformly for continuous $f$, and that it is the unique such solution; Exercise 18, p. 64, the function $u = \\partial P_r/\\partial\\theta$"
    pages: "20-21, 55-57, 64"
    role: the Poisson kernel as the Abel-summation kernel of Fourier series, the 'good kernel' estimate, the theorem for merely integrable data, and the counterexample showing that radial boundary limits do not determine a harmonic function
  - work: ahlfors-1979
    loc: "§4.6.3, Theorem 22 and Eq. (64), p. 168: Poisson's formula $u(a) = \\frac{1}{2\\pi}\\int_{|z|=R}\\frac{R^2-|a|^2}{|z-a|^2}u(z)\\,d\\theta$ for $u$ harmonic in $|z|<R$ and continuous on $|z|\\le R$, derived by moving an arbitrary point to the centre with a linear transformation; Eq. (67), the case $u \\equiv 1$; §4.6.4, the Poisson integral $P_U$ as a positive linear functional, and Theorem 23 (Schwarz), that $P_U$ is harmonic in the unit disc and $P_U(z) \\to U(\\theta_0)$ as $z \\to e^{i\\theta_0}$ provided $U$ is continuous at $\\theta_0$, with the proof by splitting the circle into two complementary arcs, pp. 168–170; §6.3.2, Eqs. (10)–(11), p. 243, the elementary bounds on the kernel and Harnack's inequality for positive harmonic functions"
    pages: "168-170, 243"
    role: the formula as a consequence of the mean value property plus a Möbius change of variable, the arc-splitting proof of the boundary limit, and Harnack's inequality
  - work: stakgold-holst-2011
    loc: "§8.3, pp. 490–493: the Dirichlet problem $-\\Delta u = q$ in $\\Omega$, $u = f$ on $\\Gamma$ and its well-posedness, the three examples of failure (gradient unbounded at the boundary of the unit disk, the punctured disk with $f=0$ on the circle and $f=1$ at the puncture, and a domain with an inner spike), the exterior sphere condition as a sufficient condition on $\\Gamma$, and the separation of variables for the unit disk with the periodic conditions (8.3.5), the boundedness requirement at $r=0$, and the series (8.3.6)–(8.3.7); §8.3, p. 495, the mean value theorem read off from Poisson's formula"
    pages: "490-493, 495"
    role: the precise conditions under which the Dirichlet problem is solvable, the three counterexamples, and the same separation in the complex-exponential form
  - work: evans-2010
    loc: "§2.2.3b, Theorem 6 (Smoothness), p. 27: if $u \\in C(U)$ satisfies the mean value property for each ball $B(x,r)\\subseteq U$ then $u \\in C^\\infty(U)$, proved by showing that $u$ coincides with its mollification $\\eta_\\varepsilon * u$ on $U_\\varepsilon$, together with the warning that $u$ need not be smooth or even continuous up to $\\partial U$"
    pages: "27"
    role: the alternative proof of interior smoothness from the mean value property alone, and the statement that it says nothing at the boundary
---

:::definition[The Dirichlet problem for a disk, and the Poisson kernel]{provenance=adapted src="strauss-2008:§6.3, Eqs. (1)–(2), p. 165 and Eq. (17), p. 170; stein-shakarchi-2003:§2.5.4, Lemma 5.5, p. 55; stakgold-holst-2011:§8.3, Eq. (8.3.2), p. 491"}
Let $D = \{\,\mathbf{x}\in\mathbb{R}^2 : \lvert\mathbf{x}\rvert < a\,\}$ be the open disk of radius $a$ and $C = \partial D$ its boundary circle, with polar coordinates $(r,\theta)$ on $D$. Given a function $h$ on $C$, the **Dirichlet problem** for the disk is

$$
u_{xx} + u_{yy} = 0 \quad\text{in } D, \qquad u = h \quad\text{on } C . \tag{1}
$$

The **Poisson kernel** of the disk of radius $a$ is

$$
P(r,\theta) \;=\; \frac{a^2 - r^2}{a^2 - 2ar\cos\theta + r^2} \;=\; 1 + 2\sum_{n=1}^\infty \left(\frac{r}{a}\right)^{\!n}\cos n\theta \qquad (0 \le r < a) . \tag{2}
$$

For $a = 1$ and with the angle written as a single variable, Stein and Shakarchi's normalization is

$$
P_r(\theta) = \sum_{n=-\infty}^{\infty} r^{\lvert n\rvert}e^{in\theta} = \frac{1-r^2}{1-2r\cos\theta+r^2} ,
$$

the same function: they arrive at it as the kernel whose convolution with $f$ produces the **Abel means** $A_r(f)(\theta) = \sum_n r^{\lvert n\rvert}a_n e^{in\theta}$ of the Fourier series of $f$. So the Poisson kernel of the disk and the Abel-summation kernel of Fourier series are one object, and Poisson's formula below is Abel summation of the boundary data's Fourier series.

Stakgold and Holst write the interior Dirichlet problem for $-\nabla^2$ and warn about an artefact of polar coordinates: the lines $\theta = \pi$ and $\theta = -\pi$ are the same ray and $r = 0$ is an interior point, so a candidate solution must be checked for good behaviour at both — which is where the periodic conditions and the boundedness requirement at the origin come from, rather than from any physical boundary.
:::

:::statement[Poisson's integral formula for a disk]{provenance=adapted src="strauss-2008:§6.3, Thm 1 with Eqs. (13)–(15), pp. 168–169; ahlfors-1979:§4.6.3, Thm 22, Eq. (64), p. 168 and §4.6.4, Thm 23, p. 169"}
Let $h$ be continuous on the circle $C = \{r = a\}$ and define, for $r < a$,

$$
u(r,\theta) \;=\; \bigl(a^2 - r^2\bigr)\int_0^{2\pi} \frac{h(\varphi)}{a^2 - 2ar\cos(\theta-\varphi) + r^2}\;\frac{d\varphi}{2\pi}
\;=\;\int_0^{2\pi} P(r,\theta-\varphi)\,h(\varphi)\,\frac{d\varphi}{2\pi} . \tag{3}
$$

Then $u$ is harmonic in $D$, it is infinitely differentiable there, and

$$
\lim_{\mathbf{x}\to\mathbf{x}_0} u(\mathbf{x}) = h(\mathbf{x}_0) \qquad\text{for every } \mathbf{x}_0 \in C , \tag{4}
$$

so that $u$ extends to a continuous function on $\overline D$ with boundary values $h$. It is the **only** harmonic function in $D$ with this property.

Writing $\mathbf{x}$ for the point with polar coordinates $(r,\theta)$ and $\mathbf{x}'$ for the boundary point with polar coordinates $(a,\varphi)$, the law of cosines gives $\lvert\mathbf{x}-\mathbf{x}'\rvert^2 = a^2 + r^2 - 2ar\cos(\theta-\varphi)$, and since arc length on $C$ is $ds = a\,d\varphi$, formula (3) takes the geometric form

$$
u(\mathbf{x}) \;=\; \frac{a^2 - \lvert\mathbf{x}\rvert^2}{2\pi a}\oint_{\lvert\mathbf{x}'\rvert = a} \frac{u(\mathbf{x}')}{\lvert\mathbf{x}-\mathbf{x}'\rvert^2}\; ds . \tag{5}
$$

Ahlfors states (5) the other way round — as a representation of a *given* harmonic function through its boundary values, for $u$ harmonic in $\lvert z\rvert < R$ and continuous on $\lvert z\rvert\le R$ — and then proves separately (his Theorem 23, due to Schwarz) that the integral on the right has the right boundary limits whenever the data are merely piecewise continuous and continuous at the point in question. Stein and Shakarchi prove the same for any integrable $f$ on the circle, with the boundary limit holding at every point of continuity of $f$ and uniformly if $f$ is continuous.
:::

:::idea{provenance=original}
Two different things have to happen, and it is worth keeping them apart.

*Finding the formula.* Separating variables in polar coordinates gives $\Theta'' + \lambda\Theta = 0$ with periodic conditions, hence $\lambda = n^2$, and an Euler equation for the radial factor, hence $r^{\pm n}$ (and $1, \log r$ for $n = 0$). Half of these blow up at the centre and are discarded — the regularity requirement at $r = 0$ is doing the work that a boundary condition would do. What survives is $r^n\cos n\theta$ and $r^n\sin n\theta$, and matching at $r = a$ identifies the coefficients as the Fourier coefficients of $h$ divided by $a^n$. Substituting them back and exchanging the sum with the integral produces an explicit series in $(r/a)^n\cos n(\theta-\varphi)$, which is the real part of two geometric series and therefore sums in closed form. The result is the kernel (2).

*Proving that the formula works.* Harmonicity is easy, because each term of the series is harmonic and one may differentiate the integral (3) under the integral sign: the integrand is smooth in $\mathbf{x}$ for $\mathbf{x}$ inside and $\mathbf{x}'$ on the circle, so they never collide. The boundary limit is the real content, and it follows from three properties of the kernel: it is positive, it has total mass one, and for angles bounded away from zero it becomes uniformly small as $r \to a$. A kernel with those three properties concentrates all of its mass near $\theta = 0$, so the integral (3) is a weighted average of values of $h$ taken almost entirely from a small arc around the point being approached; continuity of $h$ then pins the average to $h$ at that point. Uniqueness is immediate from the maximum principle.
:::

:::proof[Derivation of the formula]{provenance=adapted src="strauss-2008:§6.3, pp. 165–167; stakgold-holst-2011:§8.3, pp. 492–493"}
**Step 1 (separate).** In polar coordinates $\nabla^2 u = u_{rr} + r^{-1}u_r + r^{-2}u_{\theta\theta}$ (see :ref[cylindrical and spherical coordinates]{to=vcalc.cylindrical-spherical}). Substituting $u = R(r)\Theta(\theta)$, dividing by $R\Theta$ and multiplying by $r^2$ gives

$$
\frac{r^2R'' + rR'}{R} = -\frac{\Theta''}{\Theta} .
$$

The two sides depend on different variables, so each is a constant $\lambda$:

$$
\Theta'' + \lambda\Theta = 0, \qquad r^2R'' + rR' - \lambda R = 0 . \tag{6}
$$

**Step 2 (the angular factor).** The coordinate $\theta$ is an angle, so $u$ must be unchanged by $\theta\mapsto\theta+2\pi$; the natural conditions on $\Theta$ are therefore the periodic ones, $\Theta(\theta+2\pi) = \Theta(\theta)$ for all $\theta$ (Stakgold and Holst impose $\Theta(-\pi) = \Theta(\pi)$ and $\Theta'(-\pi) = \Theta'(\pi)$, which is the same requirement). The solutions of $\Theta''+\lambda\Theta = 0$ are periodic with period $2\pi$ exactly when $\lambda = n^2$ with $n = 0, 1, 2, \dots$, and then

$$
\Theta(\theta) = A\cos n\theta + B\sin n\theta \quad (n \ge 1), \qquad \Theta = A \quad (n = 0) .
$$

**Step 3 (the radial factor).** With $\lambda = n^2$ the radial equation in (6) is of Euler type, so we try $R = r^\alpha$: substituting gives $\alpha(\alpha-1) + \alpha - n^2 = 0$, that is $\alpha^2 = n^2$ and $\alpha = \pm n$. For $n \ge 1$ this gives $R = Cr^n + Dr^{-n}$; for $n = 0$ the two roots coincide and the second solution is $\log r$, so $R = C + D\log r$.

**Step 4 (reject the singular solutions).** We want $u$ harmonic on all of $D$, including the centre. Both $r^{-n}$ and $\log r$ are unbounded as $r \to 0$, so $D = 0$ in each case. Strauss calls this the "boundary condition" at $r = 0$; it is not a boundary condition at all, but the demand that the solution be a genuine function on the disk. Superposing what is left,

$$
u(r,\theta) = \tfrac12 A_0 + \sum_{n=1}^\infty r^n\bigl(A_n\cos n\theta + B_n\sin n\theta\bigr) . \tag{7}
$$

**Step 5 (match the boundary data).** Setting $r = a$ in (7), the requirement $u = h$ on $C$ reads

$$
h(\theta) = \tfrac12 A_0 + \sum_{n=1}^\infty a^n\bigl(A_n\cos n\theta + B_n\sin n\theta\bigr) ,
$$

which is the Fourier series of $h$ with coefficients $a^nA_n$ and $a^nB_n$. Hence (:ref[Fourier series]{to=fourier.fourier-series})

$$
A_n = \frac{1}{\pi a^n}\int_0^{2\pi}h(\varphi)\cos n\varphi\; d\varphi,
\qquad
B_n = \frac{1}{\pi a^n}\int_0^{2\pi}h(\varphi)\sin n\varphi\; d\varphi . \tag{8}
$$

**Step 6 (substitute and sum).** Putting (8) into (7) and using $\cos n\varphi\cos n\theta + \sin n\varphi\sin n\theta = \cos n(\theta-\varphi)$,

$$
u(r,\theta) = \int_0^{2\pi} h(\varphi)\left[1 + 2\sum_{n=1}^\infty\left(\frac ra\right)^{\!n}\cos n(\theta-\varphi)\right]\frac{d\varphi}{2\pi} .
$$

The interchange of sum and integral is legitimate because $r/a < 1$ is fixed and the series converges uniformly in $\varphi$ ($h$ is bounded, being continuous on a circle). The bracket is the second expression in (2); to sum it, write $\cos n\psi = \tfrac12(e^{in\psi}+e^{-in\psi})$ with $\psi = \theta-\varphi$ and use the geometric series with ratio $(r/a)e^{\pm i\psi}$, of modulus $r/a < 1$:

$$
1 + \sum_{n=1}^\infty\left(\frac ra\right)^{\!n}e^{in\psi} + \sum_{n=1}^\infty\left(\frac ra\right)^{\!n}e^{-in\psi}
= 1 + \frac{re^{i\psi}}{a - re^{i\psi}} + \frac{re^{-i\psi}}{a-re^{-i\psi}} .
$$

Putting the three terms over the common denominator $(a-re^{i\psi})(a-re^{-i\psi}) = a^2 - 2ar\cos\psi + r^2$, the numerator is

$$
(a^2 - 2ar\cos\psi + r^2) + re^{i\psi}(a - re^{-i\psi}) + re^{-i\psi}(a-re^{i\psi}) = a^2 - r^2 ,
$$

since the two added terms contribute $2ar\cos\psi - 2r^2$. So the bracket equals $(a^2-r^2)/(a^2-2ar\cos\psi+r^2) = P(r,\psi)$, which turns the display into (3). $\square$
:::

:::proof[The three kernel properties, and the boundary limit]{provenance=adapted src="strauss-2008:§6.3, properties (i)–(iii) and Eqs. (18)–(20), pp. 170–171; stein-shakarchi-2003:§2.5.4, Lemma 5.5, p. 56"}
**Step 1 (positivity).** For $0\le r<a$,

$$
a^2 - 2ar\cos\theta + r^2 = (a-r)^2 + 2ar(1-\cos\theta) = (a-r)^2 + 4ar\sin^2(\theta/2) \;\ge\; (a-r)^2 > 0 , \tag{9}
$$

so the denominator of $P$ is positive and bounded below, and since $a^2 - r^2 > 0$,

$$
P(r,\theta) > 0 \qquad (r < a) .
$$

The middle expression in (9) is Stein and Shakarchi's split; the right-hand one is Strauss's, and it is the sharper of the two for what follows.

**Step 2 (unit mass).** Integrating the series in (2) term by term — legitimate for fixed $r<a$, where it converges uniformly — and using $\int_0^{2\pi}\cos n\theta\,d\theta = 0$ for $n\ge1$,

$$
\int_0^{2\pi} P(r,\theta)\,\frac{d\theta}{2\pi} = 1 \qquad (0\le r<a) . \tag{10}
$$

(Ahlfors obtains the same identity as the special case $u\equiv1$ of the representation formula.)

**Step 3 (concentration).** Let $\delta > 0$. For $\delta \le \lvert\theta\rvert \le \pi$ we have $\sin^2(\theta/2) \ge \sin^2(\delta/2)$, so by (9)

$$
0 < P(r,\theta) \;\le\; \frac{a^2-r^2}{4ar\sin^2(\delta/2)} \qquad (\delta\le\lvert\theta\rvert\le\pi) . \tag{11}
$$

The right-hand side tends to $0$ as $r \to a^-$, uniformly in such $\theta$. So: given $\delta>0$ and $\eta>0$, there is $r_0 < a$ with $P(r,\theta) < \eta$ for all $r_0 < r < a$ and all $\delta\le\lvert\theta\rvert\le\pi$.

**Step 4 (harmonicity).** Each term $r^n\cos n\theta$, $r^n\sin n\theta$ of (7) is harmonic — they are the real and imaginary parts of $z^n$, or directly: $\nabla^2(r^n\cos n\theta) = n(n-1)r^{n-2}\cos n\theta + nr^{n-2}\cos n\theta - n^2r^{n-2}\cos n\theta = 0$. On any disk $r \le \rho < a$ the series (7) and all of its term-by-term derivatives converge uniformly, because the coefficients $a^nA_n, a^nB_n$ are bounded (they are Fourier coefficients of a bounded function) and $(\rho/a)^n$ decays geometrically. Hence $u$ may be differentiated term by term any number of times, and $\nabla^2u = 0$ on $r<\rho$ for every $\rho<a$, so on $D$. The same argument applied to the series in (2) shows that $P(r,\theta)$ is itself harmonic in the disk, which is Strauss's third property of the kernel: each term $(r/a)^n\cos n\theta$ is harmonic, and so is the sum.

**Step 5 (the boundary limit: set-up).** Fix $\theta_0$. By (10),

$$
u(r,\theta_0) - h(\theta_0) = \int_0^{2\pi} P(r,\theta_0-\varphi)\bigl[h(\varphi) - h(\theta_0)\bigr]\frac{d\varphi}{2\pi} . \tag{12}
$$

Let $\varepsilon > 0$ and let $H = \max_C\lvert h\rvert$, finite since $h$ is continuous on a circle. By continuity of $h$ at $\theta_0$ choose $\delta>0$ with $\lvert h(\varphi)-h(\theta_0)\rvert < \varepsilon$ whenever $\lvert\varphi-\theta_0\rvert<\delta$.

**Step 6 (split the integral).** Split (12) at $\lvert\varphi-\theta_0\rvert = \delta$ and bound each piece.

- *Near part.* On $\lvert\varphi-\theta_0\rvert<\delta$ the bracket is smaller than $\varepsilon$ in absolute value, and $P>0$, so this piece is at most $\varepsilon\int_0^{2\pi}P(r,\theta_0-\varphi)\frac{d\varphi}{2\pi} = \varepsilon$ by (10). (Positivity, Step 1, is what allows the bracket to be bounded and the kernel left alone.)
- *Far part.* On $\lvert\varphi-\theta_0\rvert\ge\delta$ the bracket is at most $2H$, and by Step 3 the kernel is less than $\eta$ once $r$ is close enough to $a$; so this piece is at most $2H\eta$.

Choosing $\eta = \varepsilon$ gives $\lvert u(r,\theta_0) - h(\theta_0)\rvert \le \varepsilon(1 + 2H)$ for all $r$ sufficiently close to $a$. Since $\varepsilon$ was arbitrary, $u(r,\theta_0)\to h(\theta_0)$ as $r\to a^-$.

**Step 7 (from radial to unrestricted limits).** The estimate in Step 6 is uniform in $\theta_0$ if $\delta$ is chosen by *uniform* continuity of $h$, which holds since $C$ is compact. Hence $u(r,\theta) \to h(\theta)$ uniformly in $\theta$, and therefore for any sequence $\mathbf{x}_k\to\mathbf{x}_0\in C$ with $\mathbf{x}_k = (r_k,\theta_k)$,

$$
\lvert u(\mathbf{x}_k) - h(\mathbf{x}_0)\rvert \le \sup_\theta\lvert u(r_k,\theta)-h(\theta)\rvert + \lvert h(\theta_k)-h(\theta_0)\rvert \to 0 ,
$$

the first term by uniformity and the second by continuity of $h$. This is (4), and it also shows $u$ extends continuously to $\overline D$.

**Step 8 (uniqueness).** If $u_1,u_2$ are harmonic in $D$ and both satisfy (4) with the same $h$, then each extends continuously to $\overline D$ with the same boundary values, so $w = u_1-u_2$ is harmonic in $D$, continuous on $\overline D$, and zero on $C$. Since $D$ is bounded, the weak maximum principle of :ref[harmonic functions]{to=pde.harmonic-functions} gives $\max_{\overline D}w = \min_{\overline D}w = 0$, hence $w \equiv 0$. $\square$
:::

:::remark{provenance=original}
Ahlfors's derivation of (5) is shorter than the one above and uses no Fourier series at all, at the price of assuming that a solution exists. The mean value property gives the value of a harmonic function at the *centre* of the disk; a Möbius transformation of the disk onto itself carries any interior point to the centre, and transplanting the mean value identity through it produces (5), with the kernel appearing as the Jacobian $d\theta^*/d\theta$ of the induced map of the boundary circle. Ahlfors even gives the resulting picture: to compute $P_U(z)$, replace each boundary value $U(\theta)$ by the value at the point diametrically opposite *with respect to $z$* — the second intersection with the circle of the line through $e^{i\theta}$ and $z$ — and take the ordinary average. Our Step 6 is instead his and Schwarz's arc-splitting argument in the language of kernels.
:::

:::statement[Poisson's formula for a ball in three dimensions]{provenance=adapted src="strauss-2008:§7.4, Eqs. (16)–(17), p. 195"}
Let $D = \{\,\mathbf{x}\in\mathbb{R}^3 : \lvert\mathbf{x}\rvert < a\,\}$ and let $h$ be continuous on the sphere $\lvert\mathbf{x}\rvert = a$. Then the solution of $\nabla^2u = 0$ in $D$, $u = h$ on $\partial D$, is

$$
u(\mathbf{x}_0) \;=\; \frac{a^2 - \lvert\mathbf{x}_0\rvert^2}{4\pi a}\oint_{\lvert\mathbf{x}\rvert=a}\frac{h(\mathbf{x})}{\lvert\mathbf{x}-\mathbf{x}_0\rvert^3}\; dS \qquad (\lvert\mathbf{x}_0\rvert < a) . \tag{13}
$$

In spherical coordinates, with $r_0 = \lvert\mathbf{x}_0\rvert$ and $\psi$ the angle between $\mathbf{x}$ and $\mathbf{x}_0$, this reads

$$
u(r_0,\theta_0,\phi_0) = \frac{a\,(a^2-r_0^2)}{4\pi}\int_0^{2\pi}\!\!\int_0^\pi \frac{h(\theta,\phi)}{\bigl(a^2+r_0^2-2ar_0\cos\psi\bigr)^{3/2}}\;\sin\theta\, d\theta\, d\phi . \tag{14}
$$

Compare the disk, formula (5): the kernel is $\lvert\mathbf{x}-\mathbf{x}_0\rvert^{-2}$ over $2\pi a$ in two dimensions and $\lvert\mathbf{x}-\mathbf{x}_0\rvert^{-3}$ over $4\pi a$ in three, in each case multiplied by $a^2 - \lvert\mathbf{x}_0\rvert^2$. At the centre, $\mathbf{x}_0 = \mathbf{0}$, formula (13) collapses to $u(\mathbf{0}) = \frac{1}{4\pi a^2}\oint h\, dS$, the mean value property.
:::

:::note{provenance=original}
Strauss obtains (13) not by separating variables but from the Green's function of the ball, which he constructs by reflecting the source point $\mathbf{x}_0$ across the sphere to $\mathbf{x}_0^* = a^2\mathbf{x}_0/\lvert\mathbf{x}_0\rvert^2$ and taking $G = -\frac{1}{4\pi\rho} + \frac{a}{\lvert\mathbf{x}_0\rvert}\frac{1}{4\pi\rho^*}$ with $\rho = \lvert\mathbf{x}-\mathbf{x}_0\rvert$ and $\rho^* = \lvert\mathbf{x}-\mathbf{x}_0^*\rvert$; formula (13) is then $\oint h\,\partial G/\partial n\,dS$. That construction belongs to :ref[the method of images]{to=green.method-of-images}, and the general representation formula it uses to :ref[Green's functions for Laplace and Poisson problems]{to=green.laplace-green-functions}, so we state (13) here and do not reprove it. Strauss notes that the same reflection carried out in two dimensions, starting from $\frac{1}{2\pi}\log r$, reproduces formula (5) — the disk formula obtained in this unit by a completely different route.
:::

:::statement[Harmonic functions are infinitely differentiable]{provenance=adapted src="strauss-2008:§6.3, 'Differentiability', p. 170; evans-2010:§2.2.3b, Thm 6, p. 27"}
Let $U$ be any open subset of the plane and let $u$ be harmonic in $U$. Then $u$ has partial derivatives of every order at every point of $U$; that is, $u \in C^\infty(U)$.

Evans proves the corresponding statement in $\mathbb{R}^n$ under a weaker hypothesis — $u \in C(U)$ satisfying the mean value property for every ball in $U$ — and warns that nothing follows about the boundary: $u$ may fail to extend smoothly to $\partial U$, and may fail even to extend continuously. The conclusion is interior and only interior.
:::

:::idea{provenance=original}
Smoothness is not visible in Laplace's equation, which mentions only two derivatives; it has to be imported from a formula. Poisson's formula is that formula. Its integrand, as a function of the interior point $\mathbf{x}$, is a smooth function of $\mathbf{x}$ — the only thing that could spoil it is the vanishing of $\lvert\mathbf{x}-\mathbf{x}'\rvert$, and that cannot happen because $\mathbf{x}$ is inside and $\mathbf{x}'$ is on the circle. So one may differentiate under the integral sign as often as one likes. Since every point of an open set is the centre of some small disk contained in it, and a function differentiable on each of a family of disks covering $U$ is differentiable on $U$, the local statement gives the global one.
:::

:::proof{provenance=adapted src="strauss-2008:§6.3, p. 170"}
**Step 1 (a disk about the point).** Let $\mathbf{x}_0 \in U$. Since $U$ is open, choose $\rho>0$ with the closed disk $\overline B(\mathbf{x}_0,\rho) \subset U$, and let $B = B(\mathbf{x}_0,\rho)$.

**Step 2 ($u$ on $B$ is a Poisson integral).** $u$ is harmonic on $B$ and continuous on $\overline B$ (it is $C^2$ on $U \supseteq \overline B$). Let $v$ be the Poisson integral (5) on $B$ built from the boundary values $u|_{\partial B}$. By Step 8 of the earlier proof — uniqueness — $v = u$ on $B$. So on $B$,

$$
u(\mathbf{x}) = \frac{\rho^2 - \lvert\mathbf{x}-\mathbf{x}_0\rvert^2}{2\pi\rho}\oint_{\partial B}\frac{u(\mathbf{x}')}{\lvert\mathbf{x}-\mathbf{x}'\rvert^2}\; ds(\mathbf{x}') . \tag{15}
$$

**Step 3 (differentiate under the integral sign).** Fix a closed disk $\overline B(\mathbf{x}_0,\sigma)$ with $\sigma<\rho$. For $\mathbf{x}$ in it and $\mathbf{x}'\in\partial B$ we have $\lvert\mathbf{x}-\mathbf{x}'\rvert \ge \rho-\sigma > 0$, so the integrand of (15) is a $C^\infty$ function of $\mathbf{x}$ there, and every $\mathbf{x}$-derivative of it is bounded on $\overline B(\mathbf{x}_0,\sigma)\times\partial B$ (a product of compact sets) and continuous. The hypotheses of the theorem on differentiating an integral with respect to a parameter are therefore met, for derivatives of every order, and

$$
D^\alpha u(\mathbf{x}) = \oint_{\partial B} D^\alpha_{\mathbf{x}}\!\left[\frac{\rho^2-\lvert\mathbf{x}-\mathbf{x}_0\rvert^2}{2\pi\rho\,\lvert\mathbf{x}-\mathbf{x}'\rvert^2}\right] u(\mathbf{x}')\; ds(\mathbf{x}')
$$

for every multi-index $\alpha$, each such derivative being continuous in $\mathbf{x}$. Hence $u \in C^\infty\bigl(B(\mathbf{x}_0,\sigma)\bigr)$, and in particular all derivatives of $u$ exist at $\mathbf{x}_0$.

**Step 4 (globalize).** $\mathbf{x}_0$ was an arbitrary point of $U$, and differentiability of all orders is a pointwise property, so $u \in C^\infty(U)$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Continuity of $h$, in Steps 5–6 of the kernel proof.* It is used only at the point $\theta_0$ being approached, which is why Ahlfors's Theorem 23 and Stein and Shakarchi's Theorem 5.7 can take $h$ merely piecewise continuous or integrable and still conclude the limit at every point of continuity. The example below has a two-point jump and illustrates exactly this.
- *Unrestricted versus radial limits, in Step 7.* Condition (4) demands $u(\mathbf{x})\to h(\mathbf{x}_0)$ as $\mathbf{x}\to\mathbf{x}_0$ in any manner, and that is what makes the solution unique. If one asks only for the radial limit $\lim_{r\to1}u(r,\theta) = h(\theta)$ for each fixed $\theta$, uniqueness fails: Stein and Shakarchi's Exercise 18 points out that
  $$
  u(r,\theta) = \frac{\partial P_r}{\partial\theta}(\theta) = \frac{-2r(1-r^2)\sin\theta}{(1-2r\cos\theta+r^2)^2}
  $$
  is harmonic in the unit disc (a derivative of a harmonic function with respect to the rotation parameter), satisfies $\lim_{r\to1}u(r,\theta) = 0$ for every $\theta$, and is not identically zero. It is unbounded near $z = 1$, so it has no continuous extension to $\overline D$ and (4) fails for it at that one boundary point. One boundary point is enough.
- *Boundedness of the domain, in Step 8 only.* Uniqueness is the maximum principle's contribution and inherits its need for a bounded domain.
- *Existence can fail for other domains.* Poisson's formula settles the disk and the ball completely, and it is tempting to assume a continuous $h$ on a nice-looking boundary always has a solution. Stakgold and Holst give three warnings. For the punctured unit disk $0<\lvert\mathbf{x}\rvert<1$, whose boundary consists of the circle $\lvert\mathbf{x}\rvert=1$ plus the one extra point $\mathbf{0}$, the data $h=0$ on the circle and $h=1$ at the puncture admit no solution at all. For the unit disk with suitable continuous $h$, $\lvert\nabla u\rvert$ can blow up at the boundary, so the solution lies in $C^2(\Omega)\cap C(\overline\Omega)$ but not in $C^2(\overline\Omega)$. And for a three-dimensional domain with a sharp inward spike — in the extreme case, the unit ball with a radial segment removed — there are continuous data with no solution; they interpret this physically as charge leaking out along the spike. Their sufficient condition is the **exterior sphere condition**: if at every boundary point there is an open ball outside $\Omega$ whose boundary touches $\Gamma$ at that point and nowhere else, then continuous data on $\Gamma$ always admit a harmonic solution lying in $C^2(\Omega)\cap C(\overline\Omega)$.
- *The kernel's two-sided bound gives more than the boundary limit.* Ahlfors notes the elementary inequalities, in our notation with $\lvert\mathbf{x}\rvert = r$ and radius $a$,
  $$
  \frac{a-r}{a+r} \;\le\; \frac{a^2-r^2}{\lvert\mathbf{x}-\mathbf{x}'\rvert^2} \;\le\; \frac{a+r}{a-r} ,
  $$
  which follow from $a - r \le \lvert\mathbf{x}-\mathbf{x}'\rvert \le a+r$. For $u \ge 0$ they turn (5) into **Harnack's inequality**
  $$
  \frac{a-r}{a+r}\,u(\mathbf{0}) \;\le\; u(\mathbf{x}) \;\le\; \frac{a+r}{a-r}\,u(\mathbf{0}) ,
  $$
  since the average of $u$ over the circle is $u(\mathbf{0})$. Ahlfors emphasises that this holds *only* for positive harmonic functions, and uses it to prove Harnack's principle: a monotone sequence of harmonic functions either tends to $+\infty$ uniformly on compact sets or converges to a harmonic limit, uniformly on compact sets.
- *Conventions.* Strauss writes the kernel as $P(r,\theta)$ for a disk of radius $a$ and divides by $2\pi$ inside the integral; Stein and Shakarchi write $P_r(\theta)$ for the unit disc and define convolution with the same $\frac{1}{2\pi}$; Ahlfors writes the kernel as $(R^2-\lvert a\rvert^2)/\lvert z-a\rvert^2$ with the interior point called $a$ and the radius $R$. Only names differ.
:::

:::example[A jump on the boundary circle: harmonic measure of a semicircle]{provenance=original}
Take $a = 1$ and the discontinuous data

$$
h(\varphi) = \begin{cases} 1, & 0 < \varphi < \pi,\\ 0, & -\pi < \varphi < 0,\end{cases}
$$

so $h$ is continuous except at the two points $\varphi = 0$ and $\varphi = \pi$. Poisson's formula still makes sense — $h$ is bounded and integrable — and gives

$$
u(r,\theta) = \frac{1}{2\pi}\int_0^\pi P(r,\theta-\varphi)\; d\varphi .
$$

**Evaluation.** Write $z = re^{i\theta}$. Then

$$
\frac{1+z}{1-z} = \frac{(1+z)(1-\bar z)}{\lvert 1-z\rvert^2} = \frac{(1 - r^2) + 2i\,r\sin\theta}{\lvert 1-z\rvert^2} ,
$$

whose real part is positive for $\lvert z\rvert<1$; so $w = \log\frac{1+z}{1-z}$ is analytic on the unit disc with the principal branch, and

$$
\operatorname{Im}w = \arg\frac{1+z}{1-z} = \arctan\frac{2r\sin\theta}{1-r^2} .
$$

Set

$$
U(r,\theta) = \frac12 + \frac1\pi\arctan\frac{2r\sin\theta}{1-r^2} .
$$

*$U$ is harmonic:* it is an affine function of the imaginary part of an analytic function. *$U$ has the right boundary values:* at $z = e^{i\varphi}$ with $\sin\varphi \neq 0$, the real part of $(1+z)/(1-z)$ is $(1-r^2)/\lvert1-z\rvert^2 = 0$ while the imaginary part has the sign of $\sin\varphi$, so $\arg = \pm\pi/2$ and $U \to \tfrac12\pm\tfrac12$, which is $1$ on the upper semicircle and $0$ on the lower. *$U$ is bounded,* by $0 \le U \le 1$. By the uniqueness argument of Step 8, applied on the disc minus two boundary points (or simply by checking against the integral), $u = U$.

**Numerical check of the identification.** Evaluating the integral $\frac{1}{2\pi}\int_0^\pi P(r,\theta-\varphi)d\varphi$ numerically against $U$:

| $r$ | $\theta$ | integral | $U(r,\theta)$ |
|---|---|---|---|
| $0$ | $0.3$ | $0.500000$ | $0.500000$ |
| $0.5$ | $\pi/2$ | $0.7951672$ | $0.7951672$ |
| $0.5$ | $0.3$ | $0.6194765$ | $0.6194765$ |
| $0.9$ | $-1.0$ | $0.0397219$ | $0.0397219$ |

At the centre, $u(0,\theta) = \tfrac12$, which is the mean value property: half the boundary circle carries the value $1$. At $r = \tfrac12$, $\theta = \tfrac\pi2$ the exact value is

$$
u = \frac12 + \frac1\pi\arctan\frac{2\cdot\frac12\cdot1}{1-\frac14} = \frac12 + \frac{1}{\pi}\arctan\frac43 = 0.7951672 .
$$

**What the example illustrates.** The function $u$ is $C^\infty$ everywhere inside the disc, as the smoothness theorem demands, even though its boundary data have two jumps: smoothness is an interior statement and knows nothing about the boundary. The boundary limit (4) holds at every point of the circle except $z = \pm1$, in agreement with Ahlfors's and Stein–Shakarchi's versions of the theorem, which ask for continuity of the data only at the point approached. At $z = 1$ the limit genuinely fails: approaching along the upper semicircle gives $1$, along the lower gives $0$, and approaching along the real axis gives $\tfrac12$ — the average of the two one-sided values, which is the general rule for a jump (Stein and Shakarchi's Exercise 17). The level sets $u = c$ are the circular arcs through $\pm1$, so $u$ is the harmonic measure of the upper semicircle.
:::

:::example[A ball in three dimensions, checked against an explicit harmonic polynomial]{provenance=original}
Take $a = 1$ in (13) and the axially symmetric data $h = \cos^2\theta$ on the unit sphere, i.e. $h = z^2$ in Cartesian coordinates.

**The answer, found by inspection.** Write $\cos^2\theta = \tfrac13\bigl(2P_2(\cos\theta) + 1\bigr)$, using $P_2(t) = \tfrac12(3t^2-1)$. The function

$$
u = \frac13 + \frac{2}{3}\,r^2P_2(\cos\theta) = \frac13 + \frac{r^2(3\cos^2\theta - 1)}{3} = \frac13 + \frac{2z^2 - x^2 - y^2}{3}
$$

is a polynomial, harmonic because $\nabla^2(2z^2-x^2-y^2) = 4-2-2 = 0$, and equals $\tfrac13 + \tfrac13(3\cos^2\theta-1) = \cos^2\theta$ on $r=1$. By uniqueness it is the solution.

**Checking Poisson's formula.** Put $\mathbf{x}_0 = (0,0,\tfrac12)$, so $r_0 = \tfrac12$ and $\psi = \theta$. With $\lvert\mathbf{x}-\mathbf{x}_0\rvert^2 = 1 + \tfrac14 - \cos\theta$ and $dS = \sin\theta\,d\theta\,d\phi$ on the unit sphere, (14) gives

$$
u(\mathbf{x}_0) = \frac{1 - \tfrac14}{4\pi}\cdot 2\pi\int_{-1}^{1}\frac{t^2\, dt}{\bigl(\tfrac54 - t\bigr)^{3/2}}
= \frac{3}{8}\int_{-1}^1\frac{t^2\,dt}{(\tfrac54-t)^{3/2}} ,
$$

substituting $t = \cos\theta$. The integral evaluates to exactly $\tfrac43$ (numerically $1.3333333$), so $u(\mathbf{x}_0) = \tfrac38\cdot\tfrac43 = \tfrac12$; and the polynomial gives $\tfrac13 + \tfrac14(3-1)/3 = \tfrac13+\tfrac16 = \tfrac12$. The two agree.

**The centre, and the mean value property.** Setting $\mathbf{x}_0 = \mathbf{0}$ in (13) gives $u(\mathbf{0}) = \frac{1}{4\pi}\oint\cos^2\theta\,dS = \frac12\int_{-1}^1t^2\,dt = \tfrac13$, which is the constant term of the polynomial, as it must be: the degree-$2$ solid harmonic $r^2P_2(\cos\theta)$ vanishes at the origin and averages to zero on every sphere about it.
:::

:::application{provenance=original}
**Heat, and why the Dirichlet problem is the natural one.** Stein and Shakarchi reach Laplace's equation in the disc as the long-time limit of the heat equation: hold a prescribed temperature distribution $f$ on the rim of a disc, wait, and the interior settles into the steady state $u$ with $\nabla^2u = 0$ and $u = f$ on the rim. Poisson's formula says what the equilibrium temperature at an interior point is — a weighted average of the rim temperatures, weighted by $(a^2-r^2)/\lvert\mathbf{x}-\mathbf{x}'\rvert^2$, which favours the part of the rim nearest the point and does so more and more sharply as the point approaches the rim. The same formula with the same reading describes the electrostatic potential inside a cylindrical capacitor whose surface potential is prescribed and which is long enough to be treated as two-dimensional, which is Strauss's reading of his formula (14).

**Probability: harmonic measure and exit distributions.** Because the kernel is positive and integrates to one, Poisson's formula exhibits $u(\mathbf{x})$ as the expectation of $h$ against a probability measure on the boundary — the *harmonic measure* seen from $\mathbf{x}$. That measure is exactly the exit distribution of a Brownian particle started at $\mathbf{x}$: the probability that it first touches the circle in the arc $A$ is $\frac{1}{2\pi a}\int_A \frac{a^2-\lvert\mathbf{x}\rvert^2}{\lvert\mathbf{x}-\mathbf{x}'\rvert^2}ds$. The worked example computes exactly this for $A$ a semicircle, and the answer $\tfrac12 + \tfrac1\pi\arctan\frac{2r\sin\theta}{1-r^2}$ is the probability that a Brownian particle started at $re^{i\theta}$ leaves the disc through the upper half of the circle. This is the probabilistic reading of Strauss's fourth motivating example for Laplace's equation, and it underlies walk-on-spheres Monte Carlo solvers, which sample exit points of successive spheres instead of discretizing the equation.

**Summability of Fourier series.** Read with the roles reversed, (3) is a statement about Fourier series, and this is Stein and Shakarchi's reason for introducing it. A continuous function's Fourier series may diverge at some points; but $u(r,\theta)$, which is its Abel mean $\sum_n r^{\lvert n\rvert}a_ne^{in\theta}$, converges to $f$ at every point of continuity and uniformly for continuous $f$. So "evaluate the Fourier series inside the disc and then let $r\to1$" always works where termwise summation on the circle may not. Damping the $n$th coefficient by $r^{\lvert n\rvert}$ is the oldest and simplest of the summability methods, and solving a Dirichlet problem is what it amounts to geometrically.

**Interior regularity as a tool.** The smoothness theorem is used constantly without being mentioned: it is what licenses differentiating a harmonic function as many times as an argument needs, and what makes the term-by-term manipulations of multipole and spherical-harmonic expansions legitimate inside the region of harmonicity (:ref[multipole expansions]{to=pde.multipole-expansion}). It also marks the difference between elliptic and hyperbolic equations: Strauss points out that the analogous smoothing holds for the diffusion equation but is simply false for the wave equation, where a kink in the initial data travels along a characteristic for ever (:ref[the one-dimensional wave equation]{to=pde.dalembert}). In numerical analysis, interior smoothness is why spectral methods converge so fast for elliptic problems away from the boundary, and why the loss of accuracy in such a computation is almost always a boundary effect.
:::
