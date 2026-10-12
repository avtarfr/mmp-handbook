---
id: spec.bessel-second-kind-hankel
title: Neumann and Hankel functions
kind: definition
level: core
summary: 'The Neumann function $Y_\nu = (\cos\nu\pi\,J_\nu - J_{-\nu})/\sin\nu\pi$, defined at integer order by its limit, is a second solution of Bessel''s equation with a logarithmic singularity at the origin; the Wronskian $J_\nu Y_\nu'' - J_\nu'' Y_\nu = 2/\pi x$ is independent of $\nu$ and never vanishes, and the combinations $H^{(1,2)}_\nu = J_\nu \pm iY_\nu$ are the cylindrical analogues of $e^{\pm ix}$, carrying energy outward and inward.'
prereqs: [spec.bessel-first-kind, ode.reduction-of-order, ode.self-adjoint-operators, spec.digamma-polygamma, spec.gamma-function]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§14.1, the footnote on the $Y_\\nu$ and $N_\\nu$ notations and the name *Neumann function*, p. 644; §14.3, the definition (14.57) of $Y_\\nu$, the small-$x$ form (14.58), the integer-order limit (14.59)-(14.60), the series (14.61) and the special case (14.62) for $Y_0$, pp. 667-668; the graphs and the phase relation to $J_n$, p. 669; the Wronskian argument (14.64)-(14.71) with $p(x)=x$ and the limiting forms (14.66), pp. 670-671; the list of uses of $Y_\\nu$ and Example 14.3.1 (coaxial wave guides) with the boundary conditions (14.74)-(14.75), pp. 671-672; Exercises 14.3.1-14.3.6 and 14.3.10, pp. 672-674; §14.4, the definitions (14.76)-(14.77) of the Hankel functions, the analogy with $e^{\\pm i\\theta}$, the small-$x$ forms (14.79)-(14.82), the recurrences (14.83)-(14.84) and the Wronskians (14.85)-(14.87), pp. 674-675; §14.6, the asymptotic forms (14.138)-(14.141) and the remark that $P_\\nu, Q_\\nu$ terminate at half-integer order, pp. 692-694; Example 14.6.1 (cylindrical travelling waves), pp. 694-695"
    pages: "644, 667-675, 692-695"
    role: the definition of $Y_\nu$ and of $Y_n$ as a limit; the explicit logarithmic series at integer order; the Abel/Wronskian computation with the self-adjoint weight $p(x)=x$ and the evaluation of the constant from the leading series terms; the Wronskian identities; the definition and asymptotic forms of the Hankel functions and their reading as outgoing and incoming cylindrical waves; the coaxial-waveguide boundary conditions
  - work: rhb-2006
    loc: "§18.5.2, the definition (18.81) of $Y_\\nu$, the statement that its Wronskian with $J_\\nu$ is nonzero for every $\\nu$, the indeterminacy at integer order and the limit definition (18.82), the general solution (18.83) and the Hankel functions, pp. 606-607; the worked identity $Y_{n+1/2} = (-1)^{n+1}J_{-n-1/2}$, p. 607; §18.5.3, the singularity of $Y_\\nu$ at the origin and the consequent choice $c_2=0$ in physical problems, p. 608; the remark that $Y_\\nu$ satisfies the same recurrences as $J_\\nu$, p. 612"
    pages: "606-608, 612"
    role: the same definition with the numerator written $J_\nu\cos\nu\pi - J_{-\nu}$; the statement that $\{J_\nu, Y_\nu\}$ is a basis for every $\nu$; the half-integer identity; the physical criterion that selects $J_\nu$ when the axis is inside the domain
  - work: hassani-2013
    loc: "§15.5, the definition (15.44) of the Neumann function, the l'Hopital limit at integer order, the series (15.45) with the $\\Psi$ terms, and the definition (15.46) of the Hankel functions as Bessel functions of the third kind, pp. 483-484; the recurrence (15.48) valid for all three kinds, p. 485; Problems 15.34 (the Wronskian route to a second solution), 15.36 (the values $2/\\pi z$ and $4/i\\pi z$) and 15.37 (the half-integer and reflection identities), pp. 488-489"
    pages: "483-485, 488-489"
    role: the derivative-with-respect-to-order route to $Y_n$ and the resulting series; the name "Bessel functions of the third kind"; the Wronskian values for $(J_\nu,Y_\nu)$ and for the Hankel pair; the identities $Y_{-n}=(-1)^nY_n$ and $Y_{n+1/2}=(-1)^{n+1}J_{-n-1/2}$
  - work: strauss-2008
    loc: "§10.5, the Neumann function (13) for noninteger order and its large-$z$ form (14), the Hankel pair (15) with the remark that their large-$z$ behaviour is what distinguishes them, and the integer-order definition (16) exhibiting the $\\log$ term, pp. 285-286"
    pages: "285-286"
    role: the statement that the defining property of the Neumann and Hankel functions is their behaviour at large argument; the $N_\nu$ notation and the $H^{\pm}$ notation for the Hankel pair; the explicit large-argument forms with their error terms
  - work: stakgold-holst-2011
    loc: "§7.3, the Hankel transform of order zero: the singular Bessel operator on $0<x<\\infty$ (7.3.31), its Green's function (7.3.33) built from $H^{(1)}_0$, and the resulting transform pair (7.3.38)-(7.3.39), pp. 450-451"
    pages: "450-451"
    role: the appearance of $H^{(1)}_0$ as the Green's function of the singular Bessel operator on the half-line and the Hankel transform it generates
---

:::definition[The Neumann function $Y_\nu$]{provenance=adapted src="arfken-2013:§14.3, Eqs. (14.57) and (14.59)-(14.60), pp. 667-668; rhb-2006:§18.5.2, Eqs. (18.81)-(18.83), pp. 606-607; hassani-2013:§15.5, Eq. (15.44), p. 483"}
At non-integer order the two Frobenius solutions $J_\nu$ and $J_{-\nu}$ of Bessel's equation are independent (:ref[]{to=spec.bessel-first-kind}), but at integer order $J_{-n} = (-1)^{n}J_n$ and one solution is missing. The standard repair is not to construct the second solution by :ref[reduction of order]{to=ode.reduction-of-order} but to choose a particular combination of $J_{\pm\nu}$ which has a finite limit as $\nu$ approaches an integer.

The **Neumann function**, or **Bessel function of the second kind of order $\nu$**, is

$$
Y_\nu(x) \;=\; \frac{\cos(\nu\pi)\,J_\nu(x) - J_{-\nu}(x)}{\sin(\nu\pi)} \qquad (\nu \notin \mathbb{Z}) ,
$$

and at integer order

$$
Y_n(x) \;=\; \lim_{\nu \to n} Y_\nu(x) .
$$

For $\nu \notin \mathbb{Z}$ this is a linear combination of two solutions, hence a solution, and it is independent of $J_\nu$ because $J_{-\nu}$ enters with the non-zero coefficient $-1/\sin\nu\pi$. The content of the definition is therefore entirely in the limit: that it exists, and that what it produces is independent of $J_n$.

At $\nu = n$ both numerator and denominator vanish — $\cos n\pi = (-1)^{n}$ and $J_{-n} = (-1)^{n}J_n$ — so l'Hopital's rule in the variable $\nu$ applies and gives

$$
Y_n(x) = \frac{1}{\pi}\left[\frac{\partial J_\nu}{\partial\nu} - (-1)^{n}\frac{\partial J_{-\nu}}{\partial\nu}\right]_{\nu = n} ,
$$

which, reading $\partial J_{-\nu}/\partial\nu$ as the derivative of $\nu \mapsto J_{-\nu}$, is the same as $\pi^{-1}\bigl[\partial_\nu J_\nu|_{\nu=n} + (-1)^{n}\partial_\nu J_\nu|_{\nu=-n}\bigr]$. Differentiating the defining series with respect to $\nu$ brings down a factor $\ln(x/2)$ from $(x/2)^{\nu+2m}$ and a digamma function from $1/\Gamma(\nu+m+1)$ (:ref[]{to=spec.digamma-polygamma}), and the result is a convergent series:

$$
Y_n(x) = \frac{2}{\pi}J_n(x)\ln\frac{x}{2}
- \frac{1}{\pi}\sum_{k=0}^{n-1}\frac{(n-k-1)!}{k!}\left(\frac{x}{2}\right)^{2k-n}
- \frac{1}{\pi}\sum_{k=0}^{\infty}\frac{(-1)^{k}\bigl[\psi(k+1)+\psi(n+k+1)\bigr]}{k!\,(n+k)!}\left(\frac{x}{2}\right)^{2k+n} .
$$

For $n = 0$ the finite sum is empty and, using $\psi(k+1) = -\gamma + H_k$ with $H_k = \sum_{j\le k}j^{-1}$ the harmonic number and $\gamma$ the Euler-Mascheroni constant, this collapses to

$$
Y_0(x) = \frac{2}{\pi}J_0(x)\left(\gamma + \ln\frac{x}{2}\right) - \frac{2}{\pi}\sum_{k=1}^{\infty}\frac{(-1)^{k}H_k}{(k!)^{2}}\left(\frac{x}{2}\right)^{2k} .
$$

**Notation.** $Y_\nu$ is the notation of the standard tables and of :cite{work=arfken-2013 loc="§14.1, p. 644, footnote 1"}, which also records $N_\nu$ as a common alternative; :cite[Strauss]{work=strauss-2008 loc="§10.5, Eq. (13), p. 285"} writes $N_s$. The names *Neumann function* and *Weber function* are also in use for the same object (:cite{work=rhb-2006 loc="§18.5.2, p. 607"}). The handbook uses $Y_\nu$ throughout.
:::

:::statement[Behaviour at the origin, and independence from $J_\nu$]{provenance=adapted src="arfken-2013:§14.3, Eqs. (14.58) and (14.61)-(14.62), pp. 667-668; rhb-2006:§18.5.3, p. 608; strauss-2008:§10.5, Eq. (16), p. 286"}
As $x \downarrow 0$,

$$
Y_\nu(x) = -\frac{\Gamma(\nu)}{\pi}\left(\frac{2}{x}\right)^{\nu} + \cdots \quad (\nu > 0) ,
\qquad
Y_0(x) = \frac{2}{\pi}\left(\ln\frac{x}{2}+\gamma\right) + \cdots .
$$

So $Y_\nu$ is unbounded at the origin for every $\nu \ge 0$: algebraically for $\nu > 0$, logarithmically for $\nu = 0$. Consequently

- $Y_\nu$ cannot be a multiple of $J_\nu$, which is bounded there for $\nu \ge 0$; so $\{J_\nu, Y_\nu\}$ is a basis of solutions of Bessel's equation **for every** $\nu$, integer or not, and the general solution is $c_1J_\nu + c_2Y_\nu$;
- in a problem whose domain contains the axis $x = 0$ and whose solution must be bounded there, $c_2 = 0$ and only $J_\nu$ survives (:cite{work=rhb-2006 loc="§18.5.3, p. 608"}). $Y_\nu$ earns its place when the axis is *excluded* — an annulus, a coaxial line, the exterior of a cylinder — or when the singular behaviour is physically wanted, as at a line source.

Since $Y_\nu$ is a fixed linear combination of $J_{\pm\nu}$ with coefficients independent of $x$, it satisfies the same recurrence relations as $J_\nu$ (:cite{work=rhb-2006 loc="§18.5.3, p. 612"}; :cite{work=arfken-2013 loc="§14.3, p. 669"}):

$$
Y_{\nu-1}+Y_{\nu+1} = \frac{2\nu}{x}Y_\nu , \qquad Y_{\nu-1}-Y_{\nu+1} = 2Y_\nu' , \qquad Y_0' = -Y_1 .
$$

Two identities at special orders, from :cite{work=hassani-2013 loc="§15.5, Problem 15.37, p. 489"} and :cite{work=rhb-2006 loc="§18.5.2, p. 607"}: $Y_{-n} = (-1)^{n}Y_n$ for $n \in \mathbb{Z}$, and

$$
Y_{n+1/2}(x) = (-1)^{n+1}J_{-n-1/2}(x) ,
$$

so at half-integer order the Neumann functions are elementary as well. Their singularity at the origin is then a **pure power and no logarithm**: $J_{-n-1/2}$ has leading term $(x/2)^{-n-1/2}/\Gamma(\tfrac12-n)$, so $Y_{n+1/2}(x) = O(x^{-n-1/2})$, exactly the power $x^{-\nu}$ of the display above with $\nu = n+\tfrac12$. The power does grow with the order — $Y_{1/2} = -\sqrt{2/\pi x}\,\cos x$ is only $O(x^{-1/2})$, but $Y_{3/2}(x) = -\sqrt{2/\pi x}\,\bigl(x^{-1}\cos x + \sin x\bigr)$ is $O(x^{-3/2})$, with $Y_{3/2}(0.001) = -2.5231\times10^{4}$. The special feature of half-integer order is the absence of the $\ln x$ that the integer orders carry, not a bound on the power.
:::

:::statement[Wronskians]{provenance=adapted src="arfken-2013:§14.3, Eqs. (14.64)-(14.71), pp. 670-671, and §14.4, Eqs. (14.85)-(14.87), p. 675; hassani-2013:§15.5, Problem 15.36, p. 489"}
Write $W[u,v] = uv' - u'v$. For all $x > 0$,

$$
W\bigl[J_\nu, J_{-\nu}\bigr](x) = -\frac{2\sin(\nu\pi)}{\pi x} ,
\qquad
W\bigl[J_\nu, Y_\nu\bigr](x) = \frac{2}{\pi x} ,
\qquad
W\bigl[H^{(1)}_\nu, H^{(2)}_\nu\bigr](x) = -\frac{4i}{\pi x} ,
$$

the second and third holding for every $\nu$ including integers. In particular:

1. $W[J_\nu, J_{-\nu}]$ vanishes identically exactly when $\nu \in \mathbb{Z}$ — a quantitative statement of the collapse $J_{-n} = (-1)^{n}J_n$, and the reason a second solution must be manufactured.
2. $W[J_\nu, Y_\nu] = 2/\pi x$ is never zero and does not depend on $\nu$. This is the cleanest proof that $\{J_\nu, Y_\nu\}$ is a basis at every order.
3. Equivalent forms follow from the recurrences, for instance

   $$
   J_\nu(x)Y_{\nu+1}(x) - J_{\nu+1}(x)Y_\nu(x) = -\frac{2}{\pi x} ,
   \qquad
   J_{\nu-1}(x)H^{(1)}_\nu(x) - J_\nu(x)H^{(1)}_{\nu-1}(x) = \frac{2}{i\pi x} .
   $$
:::

:::idea{provenance=original}
Both Wronskian formulas come from one observation and one evaluation. The observation is that Bessel's equation in self-adjoint form is $(xy')' + (x - \nu^{2}/x)y = 0$, so the coefficient of $y''$ is $p(x) = x$ and Abel's identity gives $W = A/x$ with $A$ a constant: the whole $x$-dependence is settled before any series is written. The evaluation then needs only the leading term of each series, because multiplying $W$ by $x$ makes the limit at the origin finite, and the Gamma-function reflection formula $\Gamma(1+\nu)\Gamma(1-\nu) = \pi\nu/\sin\nu\pi$ converts what comes out into $\sin\nu\pi$. Everything else -- the value for $(J_\nu,Y_\nu)$, for the Hankel pair, and the independence statements -- is then linear algebra on the definitions.
:::

:::proof[The Wronskians]{provenance=adapted src="arfken-2013:§14.3, Eqs. (14.64)-(14.67), pp. 670-671; hassani-2013:§15.5, Problem 15.34, p. 489"}
**Step 1: the shape of the Wronskian.** Divide Bessel's equation by $x$ and rewrite it as

$$
(x\,y')' + \left(x - \frac{\nu^{2}}{x}\right)y = 0 ,
$$

which is self-adjoint with $p(x) = x$ (:ref[]{to=ode.self-adjoint-operators}). If $u$ and $v$ both solve it, then multiplying $u$'s equation by $v$, $v$'s by $u$ and subtracting gives

$$
v\,(xu')' - u\,(xv')' = 0 , \qquad\text{that is}\qquad \frac{d}{dx}\Bigl[x\bigl(u'v - uv'\bigr)\Bigr] = 0 ,
$$

since the two first-order terms cancel in the derivative. Hence $x\,W[u,v](x)$ is constant: $W[u,v] = A/x$ with $A$ depending on $\nu$ and on the pair, not on $x$.

**Step 2: the constant for $(J_\nu, J_{-\nu})$, at non-integer $\nu$.** Because $xW$ is constant, we may compute $A = \lim_{x \downarrow 0}xW$. From the defining series,

$$
J_{\pm\nu}(x) = \frac{1}{\Gamma(1\pm\nu)}\left(\frac{x}{2}\right)^{\pm\nu}\bigl[1 + O(x^{2})\bigr] ,
\qquad
J_{\pm\nu}'(x) = \frac{\pm\nu}{2\,\Gamma(1\pm\nu)}\left(\frac{x}{2}\right)^{\pm\nu-1}\bigl[1 + O(x^{2})\bigr] .
$$

The two products in $W = J_\nu J_{-\nu}' - J_\nu' J_{-\nu}$ have leading terms of the same order $x^{-1}$, the powers $x^{\nu}$ and $x^{-\nu}$ cancelling:

$$
J_\nu J_{-\nu}' = \frac{-\nu}{x\,\Gamma(1+\nu)\Gamma(1-\nu)}\bigl[1+O(x^{2})\bigr],
\qquad
J_\nu' J_{-\nu} = \frac{+\nu}{x\,\Gamma(1+\nu)\Gamma(1-\nu)}\bigl[1+O(x^{2})\bigr] .
$$

Subtracting and multiplying by $x$, the corrections are $O(x^{2})$ and drop out in the limit:

$$
A = \frac{-2\nu}{\Gamma(1+\nu)\Gamma(1-\nu)} .
$$

Now $\Gamma(1+\nu) = \nu\Gamma(\nu)$ and the reflection formula $\Gamma(\nu)\Gamma(1-\nu) = \pi/\sin\nu\pi$ (:ref[]{to=spec.gamma-function}) give $\Gamma(1+\nu)\Gamma(1-\nu) = \pi\nu/\sin\nu\pi$, so $A = -2\sin(\nu\pi)/\pi$ and

$$
W[J_\nu,J_{-\nu}](x) = -\frac{2\sin(\nu\pi)}{\pi x} .
$$

**Step 3: the constant for $(J_\nu, Y_\nu)$.** The Wronskian is bilinear and antisymmetric, and $W[u,u] = 0$. So for $\nu \notin \mathbb{Z}$, using the definition of $Y_\nu$,

$$
W[J_\nu, Y_\nu] = \frac{1}{\sin\nu\pi}\Bigl(\cos\nu\pi\,W[J_\nu,J_\nu] - W[J_\nu,J_{-\nu}]\Bigr)
= \frac{1}{\sin\nu\pi}\cdot\frac{2\sin\nu\pi}{\pi x} = \frac{2}{\pi x} ,
$$

independent of $\nu$ — the factors $\sin\nu\pi$ cancel exactly, which is the point of the normalisation in the definition.

**Step 4: integer order.** The right-hand side $2/\pi x$ has no $\nu$ in it, and both $Y_\nu(x)$ and $Y_\nu'(x)$ converge as $\nu \to n$ (the series above converges locally uniformly in $x$ and is continuous in $\nu$, and $\partial_\nu$ of the defining series of $J_\nu$ is again a locally uniformly convergent series). Letting $\nu \to n$ in Step 3 therefore gives

$$
W[J_n,Y_n](x) = \frac{2}{\pi x} \ne 0 ,
$$

so $Y_n$ exists as a genuine second solution and is independent of $J_n$. (This is an alternative to reading the independence off the logarithm in the series, and it does not require the series at all.)

**Step 5: the Hankel pair.** For constants $a,b,c,d$ the bilinearity and antisymmetry of $W$ give $W[aU+bV,\;cU+dV] = (ad-bc)\,W[U,V]$, because the $W[U,U]$ and $W[V,V]$ terms vanish. With $U = J_\nu$, $V = Y_\nu$ and $(a,b,c,d) = (1,i,1,-i)$ we have $ad-bc = -i-i = -2i$, so

$$
W\bigl[H^{(1)}_\nu,H^{(2)}_\nu\bigr] = -2i\,W[J_\nu,Y_\nu] = -\frac{4i}{\pi x} .
$$

Being non-zero, this confirms that $H^{(1)}_\nu$ and $H^{(2)}_\nu$ are also a basis. $\square$
:::

:::definition[Hankel functions]{provenance=adapted src="arfken-2013:§14.4, Eqs. (14.76)-(14.78), pp. 674-675; rhb-2006:§18.5.2, p. 607; hassani-2013:§15.5, Eq. (15.46), p. 484"}
The **Hankel functions of the first and second kind** (also, in older usage, *Bessel functions of the third kind*) are

$$
H^{(1)}_\nu(x) = J_\nu(x) + i\,Y_\nu(x) ,
\qquad
H^{(2)}_\nu(x) = J_\nu(x) - i\,Y_\nu(x) .
$$

They stand to $J_\nu, Y_\nu$ exactly as $e^{\pm i\theta}$ stands to $\cos\theta, \sin\theta$ (:cite{work=arfken-2013 loc="§14.4, Eq. (14.78), p. 675"}), and the analogy is not merely formal: it is reproduced in their large-argument behaviour. For real $x$ and real $\nu$ they are complex conjugates of one another. Being constant-coefficient combinations of $J_\nu$ and $Y_\nu$ they satisfy the same recurrence relations,

$$
H_{\nu-1}+H_{\nu+1} = \frac{2\nu}{x}H_\nu , \qquad H_{\nu-1}-H_{\nu+1} = 2H_\nu' ,
$$

for either superscript, and both are singular at the origin, with $H^{(1)}_0(x) \approx 1 + (2i/\pi)(\ln(x/2)+\gamma)$ and $H^{(1)}_\nu(x) \approx -i\Gamma(\nu)(2/x)^{\nu}/\pi$ for $\nu > 0$ (:cite{work=arfken-2013 loc="§14.4, Eqs. (14.79)-(14.82), p. 675"}).
:::

:::statement[Outgoing and incoming cylindrical waves]{provenance=adapted src="arfken-2013:§14.6, Eqs. (14.138)-(14.139), p. 692, and Example 14.6.1, pp. 694-695; strauss-2008:§10.5, Eq. (15), p. 285"}
As $x \to +\infty$, with $\nu$ fixed and real,

$$
H^{(1)}_\nu(x) = \sqrt{\frac{2}{\pi x}}\;\exp\!\left[\,i\Bigl(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\Bigr)\right]\bigl[1 + O(x^{-1})\bigr] ,
$$

$$
H^{(2)}_\nu(x) = \sqrt{\frac{2}{\pi x}}\;\exp\!\left[-i\Bigl(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\Bigr)\right]\bigl[1 + O(x^{-1})\bigr] ,
$$

and taking real and imaginary parts recovers $J_\nu \sim \sqrt{2/\pi x}\cos(x - \nu\pi/2 - \pi/4)$ and $Y_\nu \sim \sqrt{2/\pi x}\sin(x - \nu\pi/2 - \pi/4)$ (:ref[]{to=spec.bessel-asymptotics} develops the full expansions). :cite[Strauss]{work=strauss-2008 loc="§10.5, p. 285"} identifies this behaviour at large argument as the property that singles the Hankel and Neumann functions out among all the solutions of Bessel's equation.

**The wave reading.** In a time-harmonic problem with the convention $u(\rho,t) = R(\rho)e^{-i\omega t}$ and $k = \omega/c$, the choice $R = H^{(1)}_\nu(k\rho)$ gives, at large $k\rho$,

$$
u \sim \sqrt{\frac{2}{\pi k\rho}}\;e^{\,i(k\rho - \omega t)}\,e^{-i(\nu\pi/2+\pi/4)} ,
$$

a wave whose surfaces of constant phase $k\rho - \omega t = \text{const}$ move outwards at speed $c$, with the amplitude falling like $\rho^{-1/2}$ as the energy spreads over a circle of circumference $2\pi\rho$. $H^{(2)}_\nu(k\rho)e^{-i\omega t}$ is the incoming wave. So:

- **radiation from a source near the axis** is $H^{(1)}$, with the $e^{-i\omega t}$ convention; this is the boundary condition at infinity, and it replaces the regularity condition at the origin that selects $J_\nu$ in an interior problem (:cite{work=arfken-2013 loc="§14.6, Example 14.6.1, pp. 694-695"});
- **standing waves** are real combinations, $J_\nu$ and $Y_\nu$;
- with the opposite time convention $e^{+i\omega t}$ the roles of $H^{(1)}$ and $H^{(2)}$ are exchanged. The convention must be stated.

At half-integer order the asymptotic *expansions* terminate: the series $P_\nu$ and $Q_\nu$ that multiply the trigonometric factors become polynomials in $1/x$, so the asymptotic solution is an exact one (:cite{work=arfken-2013 loc="§14.6, p. 694"}). Be careful what this licenses. The displays above keep only the leading term, and that term alone is exact only at $\nu = \pm\tfrac12$, where the polynomials reduce to the constant $1$: there $H^{(1)}_{1/2}(x) = -i\sqrt{2/\pi x}\,e^{ix}$ with no error term at all. At $\nu = \tfrac32$ the terminating expansion has two terms, and dropping the second leaves a genuine $O(x^{-1})$ relative error — as the closed form $Y_{3/2} = -\sqrt{2/\pi x}(x^{-1}\cos x + \sin x)$ shows directly. Example (a) below checks the exact case at $\nu = \tfrac12$.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\nu \notin \mathbb{Z}$, in the formula for $Y_\nu$.** The denominator $\sin\nu\pi$ is the whole difficulty. For $\nu \notin \mathbb{Z}$ it is harmless and $Y_\nu$ is an ordinary linear combination; at $\nu = n$ the numerator vanishes too, and the definition is the limit, not the formula. Anything proved from the formula must therefore be extended to integer order by a continuity argument — which is exactly what Step 4 of the proof does for the Wronskian, and what fails for naive manipulations like "divide by $\sin\nu\pi$".
- **Self-adjoint form, in Step 1.** Abel's identity needs the equation written with $p(x) = x$; if one works with the normalised form $y'' + x^{-1}y' + \cdots$ instead, the conclusion is $W = A\exp(-\int x^{-1}) = A/x$, the same thing. The reason the answer is $1/x$ and not, say, a constant is purely that the first-derivative coefficient is $1/x$.
- **$x > 0$ and the limit at the origin, in Step 2.** The constant $A$ is extracted at $x \downarrow 0$, where the series are at their most usable. The step needs the *leading* behaviour of all four of $J_{\pm\nu}, J_{\pm\nu}'$, and it needs the two leading terms to cancel in the powers of $x$ but not in the coefficients. The corrections are relatively $O(x^{2})$, not $O(x)$, because the series contain only even powers beyond the leading one — so there is room to spare. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.3, Exercise 14.3.6, p. 673"} suggest checking the same thing by showing the coefficients of $x^{0}$ and $x^{1}$ in $xW$ vanish.
- **Why not reduction of order?** :ref[Reduction of order]{to=ode.reduction-of-order} gives a second solution $J_n(x)\int dx/[xJ_n(x)^{2}]$ (:cite{work=hassani-2013 loc="§15.5, Problem 15.34, p. 489"}). It is a perfectly good solution, but its scale is arbitrary and it is useless at the zeros of $J_n$; the point of the $Y_\nu$ normalisation is that it fixes the scale so that the recurrences, the Wronskian and the asymptotic phase all come out in the form stated, uniformly in $\nu$.
- **Fixed real $\nu$, in the asymptotic statement.** The forms above are asymptotic in $x$ at *fixed* order. They are useless in the regime $\nu \gtrsim x$. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.6, Eq. (14.145), p. 694"} give the honest condition for the leading term alone to be accurate, and they print it at integer order and without a modulus: $8x \gg 4n^{2}-1$. Read as it stands it is the condition that the first correction be small compared with the leading term, so for the fractional orders $|\nu| < \tfrac12$, where $4\nu^{2}-1$ is negative, what is wanted is $8x \gg |4\nu^{2}-1|$; that modulus is ours, not theirs, and is recorded in the project's discrepancy ledger rather than attributed to them. Uniform-in-order asymptotics is a different and harder problem.
- **The time convention, in the wave reading.** "Outgoing" is a statement about $H^{(1)}_\nu(k\rho)e^{-i\omega t}$, not about $H^{(1)}$ alone. The function $H^{(1)}_\nu$ knows nothing about time; swapping the convention to $e^{+i\omega t}$ makes $H^{(2)}$ the outgoing solution. A paper that fixes no convention cannot be read.
- **Negative order needs nothing new.** Nothing goes wrong below $\nu = 0$, provided one does not expect $Y_{-\nu}$ to be $\pm Y_\nu$. For non-integer $\nu < 0$ the defining formula applies verbatim: it is written for any order whose sine is non-zero, and $-\nu$ is such an order whenever $\nu$ is. What it does *not* do is reproduce $Y_\nu$ up to a sign. Substituting $-\nu$ for $\nu$ in the definition and using $J_{-\nu}$, $\cos$ and $\sin$ parities gives $Y_{-\nu} = \sin(\nu\pi)\,J_\nu + \cos(\nu\pi)\,Y_\nu$ (:cite{work=hassani-2013 loc="§15.5, Problem 15.37, p. 489"}), so $Y_{-\nu}$ is a genuine mixture of the two solutions, degenerating to $\pm Y_\nu$ only when $\sin\nu\pi = 0$. At integer order that limit is the identity $Y_{-n} = (-1)^{n}Y_n$, which reduces negative integer order to positive; and the finite sum $\sum_{k<n}$ in the integer-order series is simply empty for $n = 0$, which is how $Y_0$ comes out purely logarithmic.
:::

:::method[Choosing the right pair of solutions]{provenance=adapted src="arfken-2013:§14.3, the list of uses of $Y_\nu$, p. 671, and §14.6, Example 14.6.1, pp. 694-695; rhb-2006:§18.5.3, p. 608"}
Given a radial equation that reduces to Bessel's equation of order $\nu$ in the variable $k\rho$:

1. **Is $\rho = 0$ in the domain, and must the solution be bounded there?** If yes, write the solution as $c\,J_\nu(k\rho)$ and stop. $Y_\nu$, $H^{(1)}_\nu$ and $H^{(2)}_\nu$ are all excluded by the singularity.
2. **Is the domain an annulus $a \le \rho \le b$, or the exterior of a cylinder, with a condition at each end?** Use $c_1J_\nu(k\rho) + c_2Y_\nu(k\rho)$. Imposing the two homogeneous boundary conditions gives a $2\times2$ homogeneous system; a non-trivial solution requires its determinant to vanish, which is the transcendental equation that quantises $k$. The ratio $c_2/c_1$ then comes from either row.
3. **Does the domain extend to infinity with radiation outwards and no incoming wave?** Fix the time convention; with $e^{-i\omega t}$, take $c\,H^{(1)}_\nu(k\rho)$ and discard $H^{(2)}_\nu$. If the source is on the axis, the resulting singularity at $\rho = 0$ is the source, not an error.
4. **Is the problem a decaying one rather than an oscillatory one** (the equation has $-k^{2}\rho^{2}$ where Bessel's has $+x^{2}$)? Then the relevant pair is $I_\nu, K_\nu$: see :ref[]{to=spec.modified-bessel}.
5. **To evaluate $Y_\nu$,** use the series above for small $x$, the recurrences to move in $\nu$ (downwards, for the same stability reason as for $J_\nu$), and :ref[]{to=spec.bessel-asymptotics} for large $x$. The Wronskian $J_\nu Y_\nu' - J_\nu'Y_\nu = 2/\pi x$ is a cheap and very sharp check on any table or routine.
:::

:::example[Three checks and a waveguide]{provenance=original}
**(a) Half-integer order: the asymptotic form made exact.** Take $\nu = \tfrac12$. From the definition, $\cos(\pi/2) = 0$ and $\sin(\pi/2) = 1$, so

$$
Y_{1/2}(x) = -J_{-1/2}(x) = -\sqrt{\frac{2}{\pi x}}\,\cos x ,
$$

consistent with the identity $Y_{n+1/2} = (-1)^{n+1}J_{-n-1/2}$ at $n = 0$. Hence

$$
H^{(1)}_{1/2}(x) = J_{1/2}+iY_{1/2} = \sqrt{\frac{2}{\pi x}}\bigl(\sin x - i\cos x\bigr) = -i\sqrt{\frac{2}{\pi x}}\;e^{\,ix} ,
$$

using $\sin x - i\cos x = -i(\cos x + i\sin x)$. Compare the asymptotic formula at $\nu = \tfrac12$: the phase is $x - \pi/4 - \pi/4 = x - \pi/2$, and $e^{\,i(x-\pi/2)} = -ie^{\,ix}$. The two agree *exactly*, with no error term — the promised termination of the asymptotic series at half-integer order. Numerically at $x = 3$: $J_{1/2}(3) = 0.0650082$, $Y_{1/2}(3) = -0.4606589 \times (-0.9899925) = 0.4560489$, and $-i(0.4606589)e^{3i} = 0.0650082 + 0.4560489\,i$. The real and imaginary parts match to seven figures.

**(b) The Wronskian as a numerical check.** At $x = 2$, tables give $J_0(2) = 0.2238908$, $J_1(2) = 0.5767248$, $Y_0(2) = 0.5103757$, $Y_1(2) = -0.1070324$. Using $J_0' = -J_1$ and $Y_0' = -Y_1$,

$$
J_0(2)Y_0'(2) - J_0'(2)Y_0(2) = -J_0(2)Y_1(2) + J_1(2)Y_0(2)
= 0.0239636 + 0.2943463 = 0.3183099 ,
$$

while $2/(2\pi) = 1/\pi = 0.3183099$. Four tabulated numbers, one exact identity, agreement to seven figures: this is how a Bessel routine is validated.

**(c) The cutoff of a coaxial line.** A coaxial line has inner conductor of radius $a = 1.0$ cm and outer conductor of radius $b = 2.5$ cm. For the lowest transverse-magnetic mode with no azimuthal variation ($\nu = 0$), the axial electric field is $E_z(\rho) = c_1J_0(\gamma\rho) + c_2Y_0(\gamma\rho)$, and the perfect-conductor condition $E_z = 0$ at $\rho = a$ and $\rho = b$ gives

$$
\begin{pmatrix} J_0(\gamma a) & Y_0(\gamma a) \\ J_0(\gamma b) & Y_0(\gamma b)\end{pmatrix}
\begin{pmatrix}c_1\\c_2\end{pmatrix} = 0 ,
\qquad\text{so}\qquad
J_0(\gamma a)\,Y_0(\gamma b) - J_0(\gamma b)\,Y_0(\gamma a) = 0 .
$$

Writing $z = \gamma a$ and $b/a = 2.5$, the eigenvalue condition is $F(z) = J_0(z)Y_0(2.5z) - J_0(2.5z)Y_0(z) = 0$. The radial problem is essentially a string of length $b - a$, so the first root should be near $\pi a/(b-a) = \pi/1.5 = 2.0944$; solving numerically from that start gives

$$
z_1 = 2.073228849 , \qquad z_2 = 4.177298828 .
$$

Check $z_1$: $J_0(z_1) = 0.181856837$, $Y_0(z_1) = 0.516714999$, $J_0(2.5z_1) = -0.116093857$, $Y_0(2.5z_1) = -0.329860777$, and

$$
(0.181856837)(-0.329860777) - (-0.116093857)(0.516714999) = -0.059987437 + 0.059987437 = 0 ,
$$

both products agreeing to nine figures. The mode shape is $E_z \propto J_0(\gamma\rho) - 0.351948051\,Y_0(\gamma\rho)$, the ratio being $-J_0(z_1)/Y_0(z_1)$; the same ratio computed from the outer row, $-J_0(2.5z_1)/Y_0(2.5z_1) = -0.351948051$, agrees, which is the consistency check that the determinant vanished.

Finally the cutoff frequency. With $\gamma_1 = z_1/a = 2.0732288\ \mathrm{cm^{-1}}$ and $c = 2.99792458\times10^{10}\ \mathrm{cm\,s^{-1}}$,

$$
f_c = \frac{c\,\gamma_1}{2\pi} = \frac{(2.99792458\times10^{10})(2.0732288)}{2\pi}\ \mathrm{s^{-1}} = 9.892\ \mathrm{GHz} .
$$

Below $9.892$ GHz this TM mode cannot propagate. Note that the cutoff is a statement about $Y_0$ as much as about $J_0$: had we kept only $J_0$, as regularity on the axis would demand in a hollow pipe, there would be no second constant with which to satisfy the second boundary condition and no mode at all.
:::

:::application{provenance=original}
**Coaxial lines and annular cavities.** Example (c) is the design calculation for a coaxial cable or a coaxial resonator: the TEM mode of a coaxial line has no cutoff, which is why such cables carry signals from DC upwards, but the first higher mode does, and the usable bandwidth of the cable ends there. The same determinant condition, with $J_\nu'$ and $Y_\nu'$ in place of $J_\nu$ and $Y_\nu$, gives the TE modes and the acoustic modes of an annular duct; with $\nu = m$ it gives the modes with $m$ azimuthal nodal lines.

**Line sources and the two-dimensional Helmholtz Green's function.** The outgoing solution of $(\nabla^{2}+k^{2})G = -\delta^{(2)}(\boldsymbol{\rho})$ in the plane is $G = \tfrac{i}{4}H^{(1)}_0(k\rho)$. Both features of $H^{(1)}_0$ are needed: the logarithmic singularity at $\rho = 0$ reproduces the delta function (it matches the two-dimensional Laplace Green's function $-\ln\rho/2\pi$ near the source), and the outgoing phase at large $\rho$ enforces the Sommerfeld radiation condition. This is the kernel of every two-dimensional scattering calculation and of the boundary-element method in acoustics and electromagnetics, and $H^{(1)}_0$ likewise appears in the Hankel-transform solution of axisymmetric problems on $0 < \rho < \infty$, where it supplies the Green's function of the singular Bessel operator (:cite{work=stakgold-holst-2011 loc="§7.3, Eq. (7.3.33), p. 450"}).

**Scattering off a cylinder.** Expand the incident plane wave in $J_m(k\rho)e^{im\varphi}$ (:ref[]{to=spec.bessel-first-kind}) and the scattered field in $H^{(1)}_m(k\rho)e^{im\varphi}$: one is regular everywhere, the other purely outgoing, and the boundary condition on the cylinder surface fixes one coefficient per $m$. The resulting partial-wave series is the textbook solution for radar cross-sections of wires, for the scattering of sound by a pipe, and -- with $\nu$ half-integral and spherical Bessel functions -- for Mie scattering off a sphere (:ref[]{to=spec.spherical-bessel}).

**Where the singularity is the physics.** In a dislocation core, at a crack tip, along a vortex line in a superfluid or at a current-carrying filament, the field genuinely diverges on an axis, and the solution one wants is the singular one. $Y_\nu$ and the Hankel functions are the admissible solutions there, and the coefficient of the singular part is the strength of the source -- the Burgers vector, the stress-intensity factor, the circulation, the current.

**Quantum scattering and the phase shift.** For a radial Schrodinger problem the pair $(J,Y)$ or $(H^{(1)},H^{(2)})$ at large $r$ defines the scattering phase shift: the exterior solution is a combination $\cos\delta_\ell\,j_\ell - \sin\delta_\ell\,y_\ell$, and $\delta_\ell$ is read off by matching to the interior solution. The constancy of the Wronskian is what makes this matching well posed, and the same quantity appears as the flux normalisation of the continuum states.
:::
