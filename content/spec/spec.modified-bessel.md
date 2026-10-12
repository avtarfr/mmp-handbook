---
id: spec.modified-bessel
title: Modified Bessel functions
kind: definition
level: core
summary: 'Rotating the argument of Bessel''s equation through a right angle turns the oscillating solutions into a growing one and a decaying one: $I_\nu(x) = i^{-\nu}J_\nu(ix)$ is finite at the origin and grows like $e^{x}/\sqrt{2\pi x}$, $K_\nu(x) = \tfrac{\pi}{2}i^{\nu+1}H^{(1)}_\nu(ix)$ is singular at the origin and decays like $\sqrt{\pi/2x}\,e^{-x}$, and their Wronskian is exactly $-1/x$.'
prereqs: [spec.bessel-second-kind-hankel, spec.gamma-function, ode.sturm-comparison]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§14.5: the modified Bessel equation, Eq. (14.97), p. 680; the series for $J_\\nu(ix)$ and the definition of $I_\\nu$, Eqs. (14.98)-(14.101) with the small-$x$ form (14.100), p. 681; the recurrences (14.104)-(14.105), pp. 681-682; the definition $K_\\nu(x) = \\tfrac{\\pi}{2}i^{\\nu+1}H^{(1)}_\\nu(ix)$, Eq. (14.106), p. 682; Eq. (14.107), the recurrences (14.108)-(14.109), the alternative $\\cos\\nu\\pi$ convention, and the small-$x$ forms (14.110)-(14.111), p. 683; the integral representations (14.112)-(14.113), p. 683; Example 14.5.1 and the value $-1/k\\rho$ of the Wronskian, pp. 684-685; Exercises 14.5.1, 14.5.6, 14.5.10 and 14.5.11, pp. 685-687; the leading large-$x$ forms, Eqs. (14.127), p. 690, and (14.143), p. 693"
    pages: "680-693"
    role: the modified Bessel equation and the statement that $k \to ik$ carries Bessel's equation into it; the normalisations $I_\nu = i^{-\nu}J_\nu(ix)$ and $K_\nu = \tfrac{\pi}{2}i^{\nu+1}H^{(1)}_\nu(ix)$, with the quotient form of $K_\nu$ and the integer limit; the four recurrences and the sign discrepancy between the $I$ and $K$ families; the alternative convention carrying an extra $\cos\nu\pi$ and its drawback; the small-argument forms of $I_\nu$, $K_0$ and $K_\nu$; the value $-1/x$ of the Wronskian; the generating function and the integral representations; the leading exponential behaviour at large argument; the cylindrical Green's function as the application
  - work: hassani-2013
    loc: "§15.5, after Eq. (15.46): the substitution $z \\to iz$ in Bessel's equation and the definitions of the modified Bessel functions of the first and second kinds, including the $\\nu \\to n$ limit and its power series, p. 484; §14.4, Corollary 14.4.12 and Example 14.4.13 (the Liouville normal form of Bessel's equation and the absence of oscillation when the coefficient is non-positive), p. 432; §19.6.3, the skin-depth equation (19.35) and the Kelvin equation (19.36), p. 589, with the Kelvin functions ber and bei obtained from $J_0(e^{-i\\pi/4}kx)$, p. 590"
    pages: "432, 484, 589-590"
    role: the route to the modified equation by rotating the argument, and the definitions of $I_\nu$ and $K_\nu$ in the quotient form with the integer case treated as a limit; the non-oscillation criterion applied to the Liouville normal form, which is what makes "not oscillatory" a theorem rather than a picture; the Kelvin equation of the circular-wire problem as the skin-effect application
---

:::definition[The modified Bessel equation and the functions $I_\nu$, $K_\nu$]{provenance=adapted src="arfken-2013:§14.5, Eq. (14.97), p. 680, Eqs. (14.98)-(14.99), p. 681, and Eqs. (14.106)-(14.107), pp. 682-683; hassani-2013:§15.5, the equation after Eq. (15.46) and the two definitions that follow it, p. 484"}
The **modified Bessel equation** of order $\nu$ is

$$
x^{2}y'' + x\,y' - (x^{2} + \nu^{2})\,y \;=\; 0 ,
\qquad x > 0 ,
$$

which differs from :ref[Bessel's equation]{to=spec.bessel-first-kind} only in the sign of the $x^{2}$ term. Equivalently, in a problem separated in cylindrical coordinates the radial equation

$$
\rho^{2}\frac{d^{2}P}{d\rho^{2}} + \rho\frac{dP}{d\rho} - (k^{2}\rho^{2} + \nu^{2})P \;=\; 0
$$

becomes the above with $x = k\rho$. Because the sign change is produced by replacing $k$ by $ik$, every solution of the modified equation is a solution of Bessel's equation evaluated at a rotated argument: if $Z_\nu$ solves Bessel's equation then $Z_\nu(ix)$ solves the modified one.

The **modified Bessel function of the first kind** is the real-valued normalisation of $J_\nu(ix)$,

$$
I_\nu(x) \;=\; i^{-\nu}J_\nu(ix) \;=\; e^{-i\nu\pi/2}J_\nu\bigl(xe^{i\pi/2}\bigr)
\;=\; \sum_{s=0}^{\infty}\frac{1}{s!\,\Gamma(s+\nu+1)}\Bigl(\frac{x}{2}\Bigr)^{\nu+2s} .
$$

The second solution is written $K_\nu$ and called the modified Bessel function of the second kind. Rather than being pinned to a series, it is pinned to the :ref[Hankel function]{to=spec.bessel-second-kind-hankel} $H^{(1)}_\nu$:

$$
K_\nu(x) \;=\; \frac{\pi}{2}\,i^{\nu+1}H^{(1)}_\nu(ix)
\;=\; \frac{\pi}{2}\,i^{\nu+1}\bigl[J_\nu(ix) + iY_\nu(ix)\bigr] ,
$$

the factor $i^{\nu+1}$ being chosen to make $K_\nu(x)$ real for real $x > 0$. An equivalent form, derived below, is

$$
K_\nu(x) \;=\; \frac{\pi}{2}\,\frac{I_{-\nu}(x) - I_\nu(x)}{\sin\nu\pi} ,
\qquad \nu \notin \mathbb{Z} ,
\qquad\qquad
K_n(x) \;=\; \lim_{\nu\to n}K_\nu(x) ,
$$

the limit being needed because $I_n = I_{-n}$ makes the quotient indeterminate at integer order. The pair $\{I_\nu, K_\nu\}$ is the standard basis.

Two names are in circulation. Because $I_\nu$ stands to $J_\nu$ as $\sinh$ stands to $\sin$, the two functions are sometimes called **hyperbolic Bessel functions**; $K_\nu$ is sometimes called a **Whittaker function** :cite[]{work=arfken-2013 loc="§14.5, pp. 682-683"}. We use $I_\nu$ and $K_\nu$ throughout. For the convention followed here, the branch of $K_n$ taken for real $x>0$ is the one that is real there.
:::

:::statement[Basic properties]{provenance=adapted src="arfken-2013:§14.5, Eqs. (14.100)-(14.101), p. 681, Eqs. (14.104)-(14.105), pp. 681-682, Eqs. (14.108)-(14.111), p. 683, and the Wronskian value on p. 685 (Exercise 14.5.11, p. 687); arfken-2013:the large-$x$ forms (14.127), p. 690, and (14.143), p. 693; hassani-2013:§14.4, Corollary 14.4.12 and Example 14.4.13, p. 432 (item 6)"}
Let $x > 0$.

1. **Symmetry in the order.** For every integer $n$, $I_n(x) = I_{-n}(x)$; for every $\nu$, $K_\nu(x) = K_{-\nu}(x)$. For non-integer $\nu$ the functions $I_\nu$ and $I_{-\nu}$ are linearly independent, and $\{I_\nu, I_{-\nu}\}$ is then also a basis; at integer order it collapses, which is the reason for introducing $K_\nu$.

2. **Recurrences.** For all $\nu$,

   $$
   I_{\nu-1}(x) - I_{\nu+1}(x) = \frac{2\nu}{x}\,I_\nu(x) ,
   \qquad
   I_{\nu-1}(x) + I_{\nu+1}(x) = 2\,I_\nu'(x) ,
   $$

   while the $K$ family satisfies the same two relations with both right-hand sides negated:

   $$
   K_{\nu-1}(x) - K_{\nu+1}(x) = -\frac{2\nu}{x}\,K_\nu(x) ,
   \qquad
   K_{\nu-1}(x) + K_{\nu+1}(x) = -2\,K_\nu'(x) .
   $$

   In particular $I_0' = I_1$ and $K_0' = -K_1$.

3. **Wronskian.** For every $\nu$,

   $$
   I_\nu(x)K_\nu'(x) - I_\nu'(x)K_\nu(x) \;=\; -\frac{1}{x} ,
   $$

   equivalently $I_\nu(x)K_{\nu+1}(x) + I_{\nu+1}(x)K_\nu(x) = 1/x$. The constant in Abel's identity — that is, $x$ times the Wronskian — is exactly $-1$, with no $\nu$ dependence; so $I_\nu$ and $K_\nu$ are independent for every order, integer or not.

4. **Behaviour at the origin.** As $x \to 0^{+}$,

   $$
   I_\nu(x) = \frac{x^{\nu}}{2^{\nu}\Gamma(\nu+1)} + \cdots ,
   \qquad
   K_0(x) = -\ln x - \gamma + \ln 2 + \cdots ,
   \qquad
   K_\nu(x) = 2^{\nu-1}\Gamma(\nu)\,x^{-\nu} + \cdots \ \ (\nu > 0) ,
   $$

   with $\gamma$ the Euler-Mascheroni constant. So for $\nu \ge 0$ the function $I_\nu$ is finite at $x = 0$ (and vanishes there unless $\nu = 0$, where $I_0(0) = 1$), while $K_\nu$ is singular: logarithmically at $\nu = 0$ and like $x^{-\nu}$ otherwise.

5. **Behaviour at infinity.** As $x \to +\infty$,

   $$
   I_\nu(x) \sim \frac{e^{x}}{\sqrt{2\pi x}} ,
   \qquad
   K_\nu(x) \sim \sqrt{\frac{\pi}{2x}}\;e^{-x} ,
   $$

   for every fixed $\nu$: one solution grows exponentially, the other decays exponentially, and the leading factor does not depend on the order. The full asymptotic expansions, and the derivations of these leading terms, are in :ref[]{to=spec.bessel-asymptotics}.

6. **Non-oscillation.** For $\nu \ge \tfrac12$ no non-trivial solution of the modified Bessel equation has more than one zero in $(0,\infty)$. This is the precise content of the informal statement that the modified Bessel functions are not oscillatory, in contrast to $J_\nu$ and $Y_\nu$, which have infinitely many zeros.
:::

:::idea{provenance=original}
Everything here follows from one move: turn the argument of Bessel's equation through a right angle. Bessel's equation says, in its Liouville normal form, that a solution divided by $\sqrt{x}$ obeys $v'' + (1 - \tfrac{4\nu^{2}-1}{4x^{2}})v = 0$, which at large $x$ is the harmonic oscillator; replacing $x$ by $ix$ flips the sign of that $1$ and gives $v'' - (1 + \tfrac{4\nu^{2}-1}{4x^{2}})v = 0$, which is $v'' = v$ at large $x$. An oscillator becomes a pair of real exponentials. All the oscillatory structure of $J_\nu$ and $Y_\nu$ — infinitely many zeros, orthogonality on an interval, a $1/\sqrt{x}$-damped sinusoid at infinity — disappears, and is replaced by a two-dimensional space of solutions in which one direction grows like $e^{x}$ and the other decays like $e^{-x}$.

What is left to do is bookkeeping, and it is where all the conventions live. The rotated function $J_\nu(ix)$ has a series whose terms all carry the same phase $i^{\nu}$, so dividing that phase out gives a real function with positive coefficients: that is $I_\nu$. For the second solution, taking $Y_\nu(ix)$ would be the obvious choice, but it is a bad one, because $Y_\nu(ix)$ contains both exponentials. The decaying solution is the one a physicist wants, and the function that decays at infinity is the rotated *Hankel* function $H^{(1)}_\nu$, whose asymptotic form is a single outgoing exponential $e^{ix}$: rotating that argument makes $e^{-x}$. So $K_\nu$ is defined from $H^{(1)}_\nu(ix)$, with a phase factor put in front to make it real. The price of defining $K_\nu$ by its behaviour at infinity rather than by a series is that it does not inherit the recurrences of $I_\nu$ unchanged; the two signs flip.

The Wronskian is then the only quantitative input needed to use the pair, and Abel's identity gives it for free up to a constant: the equation in self-adjoint form is $(xy')' - (x + \nu^{2}/x)y = 0$, so the Wronskian times $x$ is constant. The constant is fixed by multiplying the leading behaviours at the origin, where the Gamma-function identity $\nu\Gamma(\nu) = \Gamma(\nu+1)$ makes everything cancel and leaves exactly $-1$.
:::

:::proof[The series for $I_\nu$, and the quotient form of $K_\nu$]{provenance=adapted src="arfken-2013:§14.5, Eqs. (14.98)-(14.99), p. 681, and Eqs. (14.106)-(14.107), pp. 682-683"}
**Step 1 (the rotated series).** Putting $ix$ for $x$ in the series for $J_\nu$ gives

$$
J_\nu(ix) \;=\; \sum_{s=0}^{\infty}\frac{(-1)^{s}}{s!\,\Gamma(s+\nu+1)}\Bigl(\frac{ix}{2}\Bigr)^{\nu+2s}
\;=\; i^{\nu}\sum_{s=0}^{\infty}\frac{(-1)^{s}i^{2s}}{s!\,\Gamma(s+\nu+1)}\Bigl(\frac{x}{2}\Bigr)^{\nu+2s} ,
$$

and $i^{2s} = (-1)^{s}$ cancels the alternating sign term by term. Hence $i^{-\nu}J_\nu(ix)$ has the stated series, all of whose terms are positive for $x>0$ and $\nu > -1$; in particular it is real. This is the definition of $I_\nu$, and it converges for every $x$ because the $J_\nu$ series does.

**Step 2 (symmetry at integer order).** From $J_\nu(ix) = i^{\nu}I_\nu(x)$ and the integer-order relation $J_{-n} = (-1)^{n}J_n$,

$$
I_{-n}(x) \;=\; i^{\,n}J_{-n}(ix) \;=\; i^{\,n}(-1)^{n}J_n(ix) \;=\; i^{\,2n}(-1)^{n}I_n(x) \;=\; I_n(x) ,
$$

since $i^{2n}(-1)^{n} = (-1)^{n}(-1)^{n} = 1$. So the two solutions $I_\nu, I_{-\nu}$ coincide at integer order, exactly as $J_n$ and $J_{-n}$ do.

**Step 3 (from the Hankel definition to the quotient).** Write $H^{(1)}_\nu = J_\nu + iY_\nu$ with $Y_\nu = (\cos\nu\pi\,J_\nu - J_{-\nu})/\sin\nu\pi$, and evaluate at $ix$ with $\nu \notin\mathbb{Z}$:

$$
J_\nu(ix) + iY_\nu(ix)
\;=\; J_\nu(ix)\,\frac{\sin\nu\pi + i\cos\nu\pi}{\sin\nu\pi} \;-\; \frac{i}{\sin\nu\pi}\,J_{-\nu}(ix) .
$$

Now use three identities: $\sin\nu\pi + i\cos\nu\pi = i(\cos\nu\pi - i\sin\nu\pi) = ie^{-i\nu\pi}$; $J_\nu(ix) = i^{\nu}I_\nu(x)$; and $J_{-\nu}(ix) = i^{-\nu}I_{-\nu}(x)$. The first factor becomes $i^{\nu}e^{-i\nu\pi} = e^{i\nu\pi/2}e^{-i\nu\pi} = e^{-i\nu\pi/2} = i^{-\nu}$, so

$$
H^{(1)}_\nu(ix) \;=\; \frac{i\,i^{-\nu}}{\sin\nu\pi}\bigl[I_\nu(x) - I_{-\nu}(x)\bigr] .
$$

Multiplying by $\tfrac{\pi}{2}i^{\nu+1}$ and using $i\cdot i = -1$ gives

$$
K_\nu(x) \;=\; \frac{\pi}{2}\,\frac{I_{-\nu}(x) - I_\nu(x)}{\sin\nu\pi} ,
$$

which is the quotient form. Replacing $\nu$ by $-\nu$ changes the sign of both the numerator and $\sin\nu\pi$, so $K_{-\nu} = K_\nu$ for non-integer $\nu$, and by continuity of the limit also at integer order. At integer order the quotient is $0/0$, and the limit $\nu\to n$ exists by l'Hôpital's rule applied in $\nu$; carrying the differentiation out produces a term $(-1)^{n+1}I_n(x)\ln(x/2)$ alongside power series in $x$, which is the source of the logarithm in $K_0$ :cite[]{work=hassani-2013 loc="§15.5, the series for $K_n$, p. 484"}. $\square$
:::

:::proof[The recurrences]{provenance=adapted src="arfken-2013:§14.5, Eqs. (14.102)-(14.105), pp. 681-682, and Eqs. (14.108)-(14.109), p. 683"}
**Step 1 (the $I$ family).** Start from the two Bessel recurrences $J_{\nu-1}(z) + J_{\nu+1}(z) = (2\nu/z)J_\nu(z)$ and $J_{\nu-1}(z) - J_{\nu+1}(z) = 2J_\nu'(z)$, and set $z = ix$. Differentiating $J_\nu(ix) = i^{\nu}I_\nu(x)$ in $x$ gives $i\,J_\nu'(ix) = i^{\nu}I_\nu'(x)$, that is $J_\nu'(ix) = i^{\nu-1}I_\nu'(x)$.

In the first recurrence, $i^{\nu-1}I_{\nu-1} + i^{\nu+1}I_{\nu+1} = \frac{2\nu}{ix}i^{\nu}I_\nu$. Dividing by $i^{\nu-1}$ and using $i^{2} = -1$,

$$
I_{\nu-1}(x) - I_{\nu+1}(x) \;=\; \frac{2\nu}{x}\,I_\nu(x) .
$$

In the second, $i^{\nu-1}I_{\nu-1} - i^{\nu+1}I_{\nu+1} = 2i^{\nu-1}I_\nu'$; dividing by $i^{\nu-1}$ gives $I_{\nu-1} + I_{\nu+1} = 2I_\nu'$.

So the subtraction and addition have changed places relative to the $J$ family. That swap is bookkeeping, not an argument about zeros: neither relation on its own forbids $I_\nu$ from vanishing. What rules out zeros of $I_\nu$ on $(0,\infty)$ for $\nu\ge0$ is the series of Step 1, every term of which is positive.

**Step 2 (the $K$ family).** Work from the quotient form, for non-integer $\nu$; the integer case then follows by taking $\nu\to n$ in the finished identities. Since $\sin(\nu\pm1)\pi = -\sin\nu\pi$,

$$
K_{\nu-1} = \frac{\pi}{2\sin\nu\pi}\bigl(I_{\nu-1} - I_{1-\nu}\bigr) ,
\qquad
K_{\nu+1} = \frac{\pi}{2\sin\nu\pi}\bigl(I_{\nu+1} - I_{-\nu-1}\bigr) .
$$

Subtracting,

$$
K_{\nu-1} - K_{\nu+1} = \frac{\pi}{2\sin\nu\pi}\Bigl[\bigl(I_{\nu-1} - I_{\nu+1}\bigr) - \bigl(I_{1-\nu} - I_{-\nu-1}\bigr)\Bigr] .
$$

The first bracket is $\frac{2\nu}{x}I_\nu$ by Step 1. For the second, apply Step 1 at order $-\nu$: $I_{-\nu-1} - I_{-\nu+1} = \frac{-2\nu}{x}I_{-\nu}$, hence $I_{1-\nu} - I_{-\nu-1} = \frac{2\nu}{x}I_{-\nu}$. Therefore

$$
K_{\nu-1} - K_{\nu+1} = \frac{2\nu}{x}\cdot\frac{\pi}{2\sin\nu\pi}\bigl(I_\nu - I_{-\nu}\bigr) = -\frac{2\nu}{x}\,K_\nu .
$$

Adding instead of subtracting, $K_{\nu-1} + K_{\nu+1} = \frac{\pi}{2\sin\nu\pi}\bigl[(I_{\nu-1}+I_{\nu+1}) - (I_{1-\nu}+I_{-\nu-1})\bigr] = \frac{\pi}{2\sin\nu\pi}\bigl[2I_\nu' - 2I_{-\nu}'\bigr] = -2K_\nu'$, using $I_{\nu-1}+I_{\nu+1} = 2I_\nu'$ at orders $\nu$ and $-\nu$. $\square$
:::

:::proof[The Wronskian is exactly $-1/x$]{provenance=original}
**Step 1 (the $x$-dependence, from Abel's identity).** Multiplying the modified Bessel equation by $1/x$ puts it in self-adjoint form,

$$
\bigl(x\,y'\bigr)' - \Bigl(x + \frac{\nu^{2}}{x}\Bigr)y \;=\; 0 ,
$$

so the coefficient of $y''$ in self-adjoint form is $p(x) = x$, with $q(x) = -(x + \nu^{2}/x)$. For any two solutions $u, v$ of $(py')' + qy = 0$,

$$
\frac{d}{dx}\Bigl[p\bigl(uv' - u'v\bigr)\Bigr]
= u\,(pv')' - v\,(pu')'
= u\,(-qv) - v\,(-qu) = 0 ,
$$

the first equality because the terms $pu'v'$ cancel. Hence

$$
x\bigl[I_\nu(x)K_\nu'(x) - I_\nu'(x)K_\nu(x)\bigr] \;=\; C_\nu
$$

is constant on $(0,\infty)$.

**Step 2 (the constant, for $\nu > 0$).** Evaluate the constant from the behaviour at the origin, item 4 of the statement: $I_\nu(x) = a\,x^{\nu}(1+o(1))$ with $a = 1/\bigl(2^{\nu}\Gamma(\nu+1)\bigr)$, and $K_\nu(x) = b\,x^{-\nu}(1+o(1))$ with $b = 2^{\nu-1}\Gamma(\nu)$. Differentiating the leading terms,

$$
I_\nu K_\nu' - I_\nu' K_\nu
\;=\; a x^{\nu}\bigl(-\nu b x^{-\nu-1}\bigr) - \nu a x^{\nu-1}\bigl(b x^{-\nu}\bigr) + o(x^{-1})
\;=\; -\frac{2\nu ab}{x} + o(x^{-1}) .
$$

The product is

$$
2\nu ab \;=\; 2\nu\cdot\frac{2^{\nu-1}\Gamma(\nu)}{2^{\nu}\Gamma(\nu+1)} \;=\; \frac{\nu\,\Gamma(\nu)}{\Gamma(\nu+1)} \;=\; 1 ,
$$

by the functional equation $\Gamma(\nu+1) = \nu\Gamma(\nu)$ of the :ref[Gamma function]{to=spec.gamma-function}. So $C_\nu = -1$ for every $\nu > 0$.

**Step 3 (the remaining orders).** For $\nu = 0$ the same computation runs with $I_0 \to 1$ and $K_0 = -\ln x + O(1)$, $K_0' = -1/x + o(1/x)$: then $I_0K_0' - I_0'K_0 = -1/x + o(1/x)$, so $C_0 = -1$ as well, the $I_0'K_0$ term being $O(x\ln x)$ and negligible. For $\nu < 0$ use $K_{-\nu} = K_\nu$ and $I_{-\nu} = I_\nu + \tfrac{2}{\pi}\sin(\nu\pi)K_\nu$ — which is the quotient form of $K_\nu$ rearranged — so that $I_{-\nu}K_{-\nu}' - I_{-\nu}'K_{-\nu} = I_\nu K_\nu' - I_\nu'K_\nu$, the added multiple of $K_\nu$ contributing $\tfrac{2}{\pi}\sin(\nu\pi)(K_\nu K_\nu' - K_\nu'K_\nu) = 0$. Hence $C_\nu = -1$ for all $\nu$.

The second form in item 3 follows from the first with the recurrences: subtracting the two relations of each family in item 2 gives $K_\nu' = -K_{\nu+1} + \tfrac{\nu}{x}K_\nu$ and $I_\nu' = I_{\nu+1} + \tfrac{\nu}{x}I_\nu$. Substituting both,

$$
I_\nu K_\nu' - I_\nu' K_\nu = -I_\nu K_{\nu+1} + \frac{\nu}{x}I_\nu K_\nu - I_{\nu+1}K_\nu - \frac{\nu}{x}I_\nu K_\nu = -\bigl(I_\nu K_{\nu+1} + I_{\nu+1}K_\nu\bigr) ,
$$

the two $\tfrac{\nu}{x}I_\nu K_\nu$ terms cancelling against each other with nothing left over; and the left-hand side is $-1/x$ by Step 2. As a numerical check at $x = 1$: $I_0(1)K_1(1) + I_1(1)K_0(1) = (1.2660659)(0.6019072) + (0.5651591)(0.4210244) = 0.7620542 + 0.2379458 = 1.0000000$. $\square$
:::

:::remark[Where the hypotheses are used, and what the conventions cost]{provenance=adapted src="arfken-2013:§14.5, the footnotes on p. 683 and the alternative $\\cos\\nu\\pi$ convention, p. 683; hassani-2013:§14.4, Corollary 14.4.12 and Example 14.4.13, p. 432"}
**$x > 0$ throughout.** Every statement above is on the open half-line. At $x = 0$ the equation is singular (the coefficient of $y''$ vanishes), $K_\nu$ is not defined there, and the Wronskian identity $-1/x$ blows up — correctly, since two solutions cannot both stay bounded with bounded derivative at a point where the equation degenerates.

**Where $\nu\notin\mathbb{Z}$ is needed.** Only in the quotient form of $K_\nu$, whose denominator $\sin\nu\pi$ vanishes at integer order. Every *conclusion* about $K_\nu$ — the recurrences, the Wronskian, the asymptotics — holds at integer order too, but each is obtained as a limit $\nu\to n$ of an identity proved off the integers, or else (as in the Wronskian proof) directly. What does not survive the limit is the pair $\{I_\nu, I_{-\nu}\}$ as a basis: by item 1 it degenerates, and this is the whole reason $K_\nu$ is introduced.

**Where $\nu \ge \tfrac12$ is needed in item 6.** Setting $y = v/\sqrt{x}$ removes the first-derivative term and turns the modified equation into its Liouville normal form

$$
v'' - \Bigl(1 + \frac{4\nu^{2}-1}{4x^{2}}\Bigr)v \;=\; 0 ,
$$

the same calculation that turns Bessel's equation into $v'' + (1 - \tfrac{4\nu^{2}-1}{4x^{2}})v = 0$ :cite[Hassani]{work=hassani-2013 loc="Example 14.4.13, p. 432"}. The coefficient of $v$ is $\le 0$ precisely when $4x^{2} + 4\nu^{2} - 1 \ge 0$, which for $\nu \ge \tfrac12$ holds at every $x>0$, and :ref[Sturm's comparison theorem]{to=ode.sturm-comparison} then forbids more than one zero. For $\nu < \tfrac12$ the hypothesis fails only on the initial segment $0 < x < \tfrac12\sqrt{1-4\nu^{2}}$, so the conclusion still holds unchanged on $x \ge \tfrac12\sqrt{1-4\nu^{2}}$. On the initial segment it survives as well, but a bounded interval is not on its own a reason: a solution can have infinitely many zeros in one. What rules them out is a second comparison. Writing the normal form as $v'' + qv = 0$ with $q(x) = -1 + (1-4\nu^{2})/4x^{2} \le 1/4x^{2}$, compare with the Euler equation $w'' + w/4x^{2} = 0$, whose solutions are $\sqrt{x}$ and $\sqrt{x}\ln x$. If $v$ had two zeros in $(0,\tfrac12\sqrt{1-4\nu^{2}})$ then, since $q \le 1/4x^{2}$, Sturm's theorem would force *every* solution of the Euler equation to vanish strictly between them — and $w = \sqrt{x}$ never vanishes on $(0,\infty)$. So there is at most one zero there too.

**The price of defining $K_\nu$ by its behaviour at infinity.** Because $K_\nu$ is pinned to $H^{(1)}_\nu$ rather than to a power series, it fails to satisfy the recurrences of $I_\nu$: both right-hand signs flip. Some authors therefore insert an extra factor $\cos\nu\pi$ into the definition, which restores the $I$ recurrences but makes the function vanish identically at $\nu = \tfrac12, \tfrac32, \tfrac52, \dots$ :cite[]{work=arfken-2013 loc="§14.5, p. 683"}. We follow Arfken's convention, Eq. (14.106), with no such factor; with it, the identities of item 2 are the ones to use. A second consequence of the same choice: for non-integer $\nu$ the function $K_\nu$ has a branch point at the origin from the fractional power, and for integer $n$ from the logarithm, so "$K_n$" always means the branch that is real on the positive axis.

**What the sign change in the equation destroys.** Bessel's equation on a finite interval is a regular :ref[Sturm-Liouville problem]{to=ode.sturm-liouville-theory} with an infinite sequence of eigenvalues, which is what produces the zeros of $J_\nu$ and the Fourier-Bessel expansions of :ref[]{to=spec.bessel-orthogonality}. None of that transfers. The modified equation has no such spectrum on $(0,\infty)$: by item 6 its solutions do not oscillate, there are no interior zeros to impose a boundary condition at, and there is no analogue of a Fourier-Bessel series in $I_\nu$.
:::

:::method[Choosing the right modified Bessel function in a boundary-value problem]{provenance=original}
A separated radial problem produces the modified Bessel equation whenever the separation constant enters with the sign opposite to the oscillatory case — for instance a Laplace or Helmholtz problem in cylindrical coordinates whose $z$-dependence is $\cos kz$ rather than $e^{-kz}$, or a screened (Yukawa) operator $-\nabla^{2} + m^{2}$. Given

$$
\frac{1}{\rho}\frac{d}{d\rho}\Bigl(\rho\frac{du}{d\rho}\Bigr) - \Bigl(m^{2} + \frac{\nu^{2}}{\rho^{2}}\Bigr)u \;=\; 0 ,
$$

proceed as follows.

1. **Put it in standard form.** Substitute $x = m\rho$. The general solution is $u = A\,I_\nu(x) + B\,K_\nu(x)$.
2. **Impose the condition at the inner end.** If the domain includes the axis $\rho = 0$ and $u$ must be bounded there, set $B = 0$ by item 4: $K_\nu$ is the singular solution. If instead the axis is excluded (an annulus, a coaxial geometry), keep both constants.
3. **Impose the condition at the outer end.** If the domain is unbounded and $u$ must decay, set $A = 0$ by item 5: $I_\nu$ is the growing solution. If both conditions apply — bounded at the axis *and* decaying at infinity — there is no non-trivial solution, which is the statement that the homogeneous problem has no eigenvalues (see the last paragraph of the remark).
4. **Fix the surviving constants from the data.** With two boundary values $u(\rho_1) = u_1$, $u(\rho_2) = u_2$ on an annulus, solve the $2\times2$ system; the determinant is $I_\nu(x_1)K_\nu(x_2) - I_\nu(x_2)K_\nu(x_1)$, which is non-zero for $x_1\neq x_2$ because $I_\nu$ is increasing and $K_\nu$ decreasing.
5. **Differentiate with the recurrences, not by hand.** Fluxes and normal derivatives are wanted as often as values: use $I_0' = I_1$, $K_0' = -K_1$, and in general $I_\nu' = I_{\nu+1} + \tfrac{\nu}{x}I_\nu$, $K_\nu' = -K_{\nu+1} + \tfrac{\nu}{x}K_\nu$ — note the $+$ in the second, which is what item 2 gives and is easy to get wrong.
6. **Check against the Wronskian.** $I_\nu(x)K_{\nu+1}(x) + I_{\nu+1}(x)K_\nu(x) = 1/x$ at any $x$ catches a wrong function value or a mixed-up order immediately.
:::

:::example[Steady screened potential in an annulus]{provenance=original}
Solve

$$
\frac{1}{r}\frac{d}{dr}\Bigl(r\frac{du}{dr}\Bigr) - u \;=\; 0 \quad\text{on } 1 \le r \le 2 ,
\qquad u(1) = 1 , \qquad u(2) = 0 ,
$$

and report $u(1.5)$ and the flux $-u'(2)$ at the outer wall.

**Step 1 (identify the equation).** Expanding, $r^{2}u'' + ru' - r^{2}u = 0$: the modified Bessel equation with $\nu = 0$ and $x = r$ (so $m = 1$). Hence

$$
u(r) \;=\; A\,I_0(r) + B\,K_0(r) .
$$

The axis is not in the domain, so both constants survive — step 2 of the method.

**Step 2 (apply the boundary conditions).** The two conditions read

$$
A\,I_0(1) + B\,K_0(1) = 1 , \qquad A\,I_0(2) + B\,K_0(2) = 0 .
$$

With $I_0(1) = 1.2660659$, $K_0(1) = 0.4210244$, $I_0(2) = 2.2795853$, $K_0(2) = 0.1138939$, the determinant is

$$
D = I_0(1)K_0(2) - I_0(2)K_0(1) = 0.1441971 - 0.9597611 = -0.8155640 ,
$$

non-zero as step 4 of the method promised. Cramer's rule gives

$$
A = \frac{K_0(2)}{D} = \frac{0.1138939}{-0.8155640} = -0.1396504 ,
\qquad
B = \frac{-I_0(2)}{D} = \frac{-2.2795853}{-0.8155640} = 2.7951030 .
$$

**Step 3 (evaluate).** With $I_0(1.5) = 1.6467232$ and $K_0(1.5) = 0.2138056$,

$$
u(1.5) = (-0.1396504)(1.6467232) + (2.7951030)(0.2138056)
= -0.2299656 + 0.5976086 = 0.3676429 .
$$

**Step 4 (the flux).** By step 5 of the method, $u' = A I_0' + B K_0' = A\,I_1(r) - B\,K_1(r)$. At $r = 2$, with $I_1(2) = 1.5906369$ and $K_1(2) = 0.1398659$,

$$
u'(2) = (-0.1396504)(1.5906369) - (2.7951030)(0.1398659) = -0.2221331 - 0.3909395 = -0.6130727 ,
$$

so the outward flux is $-u'(2) = 0.6130727$.

**Step 5 (check).** Two independent checks. First, the solution must be positive and decreasing on the interval, since $u$ satisfies $(ru')' = ru > 0$ wherever $u>0$: and indeed $u(1) = 1 > u(1.5) = 0.3676 > u(2) = 0$ with $u'(2) < 0$. Second, the Wronskian check of step 6 at $x = 1.5$: $I_0(1.5)K_1(1.5) + I_1(1.5)K_0(1.5) = (1.6467232)(0.2773878) + (0.9816664)(0.2138056) = 0.4567809 + 0.2098857 = 0.6666667 = 1/1.5$, as required. All function values are rounded from a 15-digit computation; the quoted digits of $u(1.5) = 0.367643$ and $-u'(2) = 0.613073$ are correct.
:::

:::application[Where $I_\nu$ and $K_\nu$ turn up]{provenance=adapted src="arfken-2013:§14.5, Example 14.5.1 and the Wronskian factor, pp. 684-685, and the summary, p. 685; hassani-2013:§19.6.3, the skin-depth equation (19.35) and the Kelvin equation (19.36), p. 589, and the Kelvin functions ber, bei, p. 590"}
**The cylindrical Green's function.** The fundamental solution of the Laplacian in cylindrical coordinates, expanded in the azimuthal angle and Fourier-transformed in $z$, has radial factor $I_m(k\rho_<)K_m(k\rho_>)$, where $\rho_<$ and $\rho_>$ are the smaller and larger of the two radii. The reason is exactly items 4 and 5 above: the factor must be bounded on the axis, so $I_m$ is used for the inner point, and must decay at large radius, so $K_m$ is used for the outer. The normalising constant is set by the jump condition, which is the Wronskian $-1/(k\rho)$ of item 3 :cite[]{work=arfken-2013 loc="Example 14.5.1, pp. 684-685"}. This is a worked case of the construction in :ref[]{to=green.laplace-green-functions}.

**The two-dimensional screened Coulomb (Yukawa) potential.** For $(-\nabla^{2} + m^{2})G = \delta^{(2)}$ in the plane, $G$ must solve the modified Bessel equation of order zero away from the origin, must decay at infinity, and must have the planar logarithmic singularity $-\tfrac{1}{2\pi}\ln r$ at the origin. By items 4 and 5 the only candidate is a multiple of $K_0(mr)$, and matching $K_0(x) = -\ln x - \gamma + \ln 2 + \cdots$ against $-\tfrac{1}{2\pi}\ln r$ fixes it: $G = \tfrac{1}{2\pi}K_0(mr)$. The exponential decay of $K_0$ is the screening length $1/m$. This is the planar analogue of the three-dimensional $e^{-mr}/4\pi r$; the general construction is in :ref[]{to=green.helmholtz-green-functions}.

**Heat loss from a fin or a buried pipe.** A thin radial fin losing heat to its surroundings at a rate proportional to the local excess temperature satisfies, in the steady state, the modified Bessel equation of order zero with $m^{2}$ the loss coefficient over the conductivity. Bounded temperature on the axis selects $I_0$; a prescribed temperature at the rim normalises it, as in the worked example above. The engineering quantity of interest, the total heat flow, is the flux computed with $I_0' = I_1$.

**The skin effect.** The current density in a long cylindrical wire carrying alternating current satisfies a Bessel-type equation with purely imaginary parameter, $w'' + w'/x - ik^{2}w = 0$, whose solutions are Bessel functions of complex argument — the Kelvin functions $\operatorname{ber}$ and $\operatorname{bei}$, obtained from $J_0$ by rotating the argument through $45^{\circ}$ rather than $90^{\circ}$ :cite[Hassani]{work=hassani-2013 loc="§19.6.3, Eqs. (19.35)-(19.36) and the definition of ber and bei, pp. 589-590"}. The skin depth is the decay length of the resulting exponential, and the mechanism is the one in the idea above: a sign (here a phase) in front of the $x^{2}$ term decides whether the radial solutions oscillate or decay.
:::
