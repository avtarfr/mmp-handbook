---
id: spec.bessel-first-kind
title: Bessel functions of the first kind
kind: definition
level: core
summary: 'Bessel''s equation has the Frobenius solution $J_\nu(x) = \sum_m (-1)^m (x/2)^{\nu+2m}/[m!\,\Gamma(\nu+m+1)]$, convergent for all $x$ and regular at the origin when $\nu \ge 0$; for integer order the whole family is packed into the generating function $e^{(x/2)(t-1/t)} = \sum_n J_n(x)t^n$, and four recurrence relations connect neighbouring orders and derivatives.'
prereqs: [ode.frobenius-method, spec.gamma-function, ode.singular-points-infinity]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.5, Bessel's equation (18.73)-(18.74), the Frobenius substitution, the indicial equation and the recurrence relations (18.75)-(18.78), pp. 602-603; §18.5.1, the normalising choice of $a_0$ and the series (18.79), pp. 604-605, with the worked reduction of $J_{\\pm1/2}$ to trigonometric functions, p. 605; §18.5.2, $J_{-\\nu} = (-1)^{\\nu}J_\\nu$ for integer $\\nu$, p. 606; §18.5.3, the derivative recurrences (18.92)-(18.97) and their integrated forms, pp. 611-612, the worked reduction of $J_{\\pm3/2}$, p. 612, and the generating function (18.98) with the derivation of (18.97) from it, pp. 612-613"
    pages: "602-613"
    role: the Frobenius derivation of the series from the indicial equation and the two-term recurrence; the conventional choice of $a_0$ in terms of the Gamma function; the derivation of the derivative recurrences by differentiating the series term by term and the algebra that turns them into the three-term and derivative forms; the generating function and the route from it to a recurrence
  - work: arfken-2013
    loc: "§14.1, Bessel's ODE (14.1) and the meaning of \"first kind\", pp. 643-644; the generating function (14.2) and the rearrangement (14.3)-(14.6) giving $J_n$, $J_{-n} = (-1)^nJ_n$ and the extension to noninteger $\\nu$, pp. 644-645; the recurrences (14.7)-(14.12) from $\\partial g/\\partial t$ and $\\partial g/\\partial x$, including $J_0' = -J_1$, pp. 645-646; the converse (14.13)-(14.15) that any family satisfying the two basic recurrences solves Bessel's equation, pp. 646-647; the integral representation (14.18)-(14.20), p. 647; Table 14.1 (zeros of $J_n$ and $J_n'$), p. 648; Exercise 14.1.5 (Jacobi-Anger), p. 655; the remark on noninteger order and the scale convention, p. 653"
    pages: "643-648, 653, 655"
    role: the generating function as the starting point, the Laurent-series computation that identifies its coefficients with the Frobenius solution, and the derivation of the two basic recurrences from its two partial derivatives; the converse theorem that the recurrences characterise solutions of Bessel's equation; the convention fixing the scale of $J_\nu$ for noninteger $\nu$; the Jacobi-Anger expansion; numerical values of the zeros
  - work: strauss-2008
    loc: "§10.5, Bessel's equation (1), the series (4) and the restriction to non-negative-integer order, pp. 282-283; the recursion relations (6)-(7), p. 284; $J_{1/2}$ and the half-integer closed forms (11)-(12), p. 285; the identities (17)-(18), p. 286; §10.2, the Frobenius computation (11)-(14) for integer order and the statement that $J_n$ is the only solution finite at the origin, pp. 266-267"
    pages: "266-267, 282-286"
    role: the statement that the series fails only for negative integer order and that $J_\nu$, $J_{-\nu}$ span the solution space otherwise; the compact form of the derivative recurrences; the half-integer closed forms; the statement that $J_n$ is, up to scale, the only solution regular at the origin
  - work: hassani-2013
    loc: "§15.5, the Bessel equation as a confluent hypergeometric equation, the definition (15.42) of $J_\\nu$ and the series (15.43), pp. 483-484; the recurrence relations (15.47)-(15.48) for any solution of the Bessel equation and the operator form, p. 485, with Problems 15.28-15.31 and 15.40, pp. 488-490"
    pages: "483-485, 488-490"
    role: the identification of Bessel's equation as a confluent hypergeometric equation; the observation that the recurrences hold for every kind of Bessel function, not only $J_\nu$, and the raising and lowering operators $z^{\pm\nu}(d/dz)z^{\mp\nu}$ behind them
---

:::definition[Bessel's equation and the function $J_\nu$]{provenance=adapted src="rhb-2006:§18.5-18.5.1, Eqs. (18.73)-(18.79), pp. 602-605; arfken-2013:§14.1, Eqs. (14.1) and (14.6), pp. 643-645; strauss-2008:§10.5, Eqs. (1) and (4), pp. 282-283"}
**Bessel's equation of order $\nu$** is

$$
x^{2}y'' + x\,y' + (x^{2}-\nu^{2})\,y = 0 ,
$$

with $\nu$ a fixed parameter. Dividing by $x^{2}$ puts it in the normalised form $y'' + x^{-1}y' + (1-\nu^{2}x^{-2})y = 0$, so $x = 0$ is a regular singular point and $x = \infty$ is an irregular one (:ref[]{to=ode.singular-points-infinity}). Replacing $\nu$ by $-\nu$ changes nothing, so we may take $\mathrm{Re}\,\nu \ge 0$ without loss.

Substituting a Frobenius series $y = x^{\sigma}\sum_{n\ge0}a_nx^{n}$ (:ref[]{to=ode.frobenius-method}) gives the indicial equation $\sigma^{2}-\nu^{2} = 0$, so the exponents are $\sigma = \pm\nu$; the coefficient of $x^{\sigma+1}$ gives $\bigl[(\sigma+1)^{2}-\nu^{2}\bigr]a_1 = 0$, and for $n \ge 2$

$$
\bigl[(\sigma+n)^{2}-\nu^{2}\bigr]a_n + a_{n-2} = 0 .
$$

Take the larger exponent $\sigma = \nu$. Then the $n = 1$ equation reads $(1+2\nu)a_1 = 0$ and we set $a_1 = 0$; the recurrence becomes $n(n+2\nu)\,a_n = -a_{n-2}$, which kills every odd coefficient and determines the even ones from $a_0$. The conventional normalisation is

$$
a_0 = \frac{1}{2^{\nu}\,\Gamma(1+\nu)} ,
$$

with $\Gamma$ the :ref[Gamma function]{to=spec.gamma-function}; iterating the recurrence then gives $a_{2m} = (-1)^{m}\bigl[2^{\nu+2m}\,m!\,\Gamma(\nu+m+1)\bigr]^{-1}$. The resulting function is the **Bessel function of the first kind of order $\nu$**,

$$
J_\nu(x) \;=\; \sum_{m=0}^{\infty}\frac{(-1)^{m}}{m!\;\Gamma(\nu+m+1)}\left(\frac{x}{2}\right)^{\nu+2m} .
$$

Four facts about this series:

- **It converges for every $x$.** The ratio of consecutive terms is $-x^{2}/\bigl[4m(\nu+m)\bigr]$, which tends to $0$; the singularity at $x=\infty$ is what the Frobenius series near $x=0$ cannot see.
- **It is defined for every real order, once one convention is fixed.** The convention is that $1/\Gamma$ is read as the entire function it is, so that $1/\Gamma(z) = 0$ at each pole $z = 0,-1,-2,\dots$ of $\Gamma$ (:ref[]{to=spec.gamma-function}). **This handbook adopts that reading throughout**, and the identity below and the generating function depend on it. With it, $\nu = -n$ for $n \in \mathbb{N}$ causes no trouble: the first $n$ coefficients are $0$ rather than undefined, so the sum begins at $m = n$, and shifting $m \to m+n$ gives
  $$
  J_{-n}(x) = (-1)^{n}J_n(x) \qquad (n \in \mathbb{Z}) ,
  $$
  so at integer order the two exponents $\pm n$ produce the *same* solution up to sign, and :ref[a second solution must be built differently]{to=spec.bessel-second-kind-hankel}. The other reading is also in print: :cite[Strauss]{work=strauss-2008 loc="§10.5, p. 283"} declares the series *undefined* at negative integer order, on the ground that $\Gamma(\nu+m+1)$ is infinite there, and so states his existence claim for every real order except the negative integers. Nothing mathematical separates the two; what follows is written in the $1/\Gamma$ convention, and where a statement is taken from Strauss it is quoted at his orders, not at ours.
- **Behaviour at the origin.** The leading term is $(x/2)^{\nu}/\Gamma(1+\nu)$, so $J_0(0) = 1$, $J_\nu(0) = 0$ for $\nu > 0$, and $J_\nu$ is unbounded at $0$ for $\nu < 0$ **and not an integer**, the leading power $x^{\nu}$ then being genuinely negative. The exception matters: at $\nu = -n$ the leading term displayed above is $0$, the bullet above gives $J_{-n} = (-1)^{n}J_n$, and $J_{-n}$ is as bounded at the origin as $J_n$ is — for instance $J_{-1}(0.001) = -5.0\times10^{-4}$ and $J_{-2}(0.5) = J_2(0.5) = 0.0306040$. :cite[Strauss]{work=strauss-2008 loc="§10.2, p. 267"} records that for integer order $J_n$ is, up to a constant factor, the only solution of Bessel's equation finite at $x = 0$ — which is why it is the one that survives in a problem whose domain contains the axis.
- **The name.** "First kind" is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="§14.1, p. 643"} label for exactly these solutions, the ones regular at the origin for non-negative integer order; every solution independent of $J_\nu$ is irregular there.

For $\nu \notin \mathbb{Z}$ the exponents $\nu$ and $-\nu$ differ by a non-integer, so $J_\nu$ and $J_{-\nu}$ are two independent Frobenius solutions and the general solution of Bessel's equation is $c_1J_\nu + c_2J_{-\nu}$. The independence is confirmed by a Wronskian computation, carried out in :ref[]{to=spec.bessel-second-kind-hankel}.
:::

:::statement[Generating function for integer order]{provenance=adapted src="arfken-2013:§14.1, Eqs. (14.2)-(14.5), pp. 644-645; rhb-2006:§18.5.3, Eq. (18.98), pp. 612-613"}
For every $x \in \mathbb{C}$ and every $t \ne 0$,

$$
\exp\!\left[\frac{x}{2}\left(t - \frac{1}{t}\right)\right] \;=\; \sum_{n=-\infty}^{\infty} J_n(x)\,t^{n} ,
$$

the series converging absolutely. That is, the Laurent coefficients in $t$ of the left-hand side are precisely the Bessel functions of integer order, at exactly the scale fixed by the choice of $a_0$ above.

Setting $t = e^{i\theta}$ turns this into the **Jacobi-Anger expansion**

$$
e^{\,ix\sin\theta} \;=\; \sum_{n=-\infty}^{\infty} J_n(x)\,e^{\,in\theta} ,
$$

whose real and imaginary parts, combined with the orthogonality of $\{e^{in\theta}\}$, give the integral representation

$$
J_n(x) \;=\; \frac{1}{\pi}\int_0^{\pi}\cos\bigl(x\sin\theta - n\theta\bigr)\,d\theta \qquad (n \in \mathbb{Z}) .
$$

Nothing of the kind is available at non-integer order: there is no Laurent series, and the scale of $J_\nu$ is then fixed by convention alone, chosen to agree with the integer case (:cite{work=arfken-2013 loc="§14.1, p. 653"}). Further representations, valid for general $\nu$, are the subject of :ref[]{to=spec.bessel-integral-representations}.
:::

:::idea{provenance=original}
The generating function works because $e^{xt/2}$ and $e^{-x/(2t)}$ are each a single geometric-looking series, one in positive powers of $t$ and one in negative powers. Multiplying them and collecting the coefficient of $t^{n}$ pairs an $r$ from the first factor with an $s = r-n$ from the second; the double sum collapses to a single sum over $s$, and what is left is literally the Frobenius series with $m = s$. The two recurrence relations then come for free: differentiating the exponential with respect to $t$ and with respect to $x$ reproduces the same exponential times an elementary factor, so equating Laurent coefficients turns calculus into algebra among neighbouring orders.
:::

:::proof[The generating function]{provenance=adapted src="arfken-2013:§14.1, Eqs. (14.2)-(14.5), pp. 644-645; rhb-2006:§18.5.3, p. 613"}
Fix $x$ and $t \ne 0$ and expand each factor of $e^{xt/2}\,e^{-x/(2t)}$ by the exponential series:

$$
e^{xt/2} = \sum_{r=0}^{\infty}\frac{1}{r!}\left(\frac{x}{2}\right)^{r}t^{r} ,
\qquad
e^{-x/(2t)} = \sum_{s=0}^{\infty}\frac{(-1)^{s}}{s!}\left(\frac{x}{2}\right)^{s}t^{-s} .
$$

Both converge absolutely, so their product may be multiplied out and the terms rearranged at will. Doing so,

$$
\exp\!\left[\frac{x}{2}\left(t-\frac1t\right)\right]
= \sum_{r=0}^{\infty}\sum_{s=0}^{\infty}\frac{(-1)^{s}}{r!\,s!}\left(\frac{x}{2}\right)^{r+s}t^{\,r-s} .
$$

Now collect the terms with a fixed power $t^{n}$, that is, those with $r = n+s$. Since $r \ge 0$, the admissible $s$ are $s \ge \max(0,-n)$, and $r+s = n+2s$. Hence the coefficient of $t^{n}$ is

$$
\sum_{s \ge \max(0,-n)}\frac{(-1)^{s}}{(n+s)!\,s!}\left(\frac{x}{2}\right)^{n+2s} .
$$

Two cases finish the identification.

- **$n \ge 0$.** The sum runs over all $s \ge 0$, and since $(n+s)! = \Gamma(n+s+1)$ it is exactly the series defining $J_n(x)$.
- **$n < 0$.** Write $n = -k$ with $k > 0$. The sum runs over $s \ge k$; substituting $s = k+m$ turns it into $\sum_{m\ge0}(-1)^{k+m}\bigl[m!\,(k+m)!\bigr]^{-1}(x/2)^{k+2m} = (-1)^{k}J_k(x)$, which by the identity $J_{-k} = (-1)^{k}J_k$ established in the definition is $J_{-k}(x) = J_n(x)$.

So in both cases the coefficient of $t^{n}$ is $J_n(x)$, which is the claim. Absolute convergence of the double series gives absolute convergence of the Laurent series.

For the Jacobi-Anger form put $t = e^{i\theta}$, so that $t - 1/t = 2i\sin\theta$ and the exponent becomes $ix\sin\theta$. Multiplying the resulting identity by $e^{-in\theta}$ and integrating over $\theta \in [-\pi,\pi]$, the orthogonality $\int_{-\pi}^{\pi}e^{i(m-n)\theta}d\theta = 2\pi\delta_{mn}$ leaves

$$
J_n(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi}e^{\,i(x\sin\theta - n\theta)}\,d\theta .
$$

The imaginary part of the integrand, $\sin(x\sin\theta-n\theta)$, is odd in $\theta$ for integer $n$ and integrates to zero; the real part is even, which halves the range and gives the stated formula. $\square$
:::

:::statement[Recurrence relations]{provenance=adapted src="rhb-2006:§18.5.3, Eqs. (18.92)-(18.97), pp. 611-612; arfken-2013:§14.1, Eqs. (14.7)-(14.12), pp. 645-646; hassani-2013:§15.5, Eqs. (15.47)-(15.48), p. 485"}
For every $\nu$ for which the functions are defined,

$$
\frac{d}{dx}\bigl[x^{\nu}J_\nu(x)\bigr] = x^{\nu}J_{\nu-1}(x) ,
\qquad
\frac{d}{dx}\bigl[x^{-\nu}J_\nu(x)\bigr] = -x^{-\nu}J_{\nu+1}(x) ,
$$

equivalently

$$
x\,J_\nu'(x) + \nu\,J_\nu(x) = x\,J_{\nu-1}(x) ,
\qquad
x\,J_\nu'(x) - \nu\,J_\nu(x) = -x\,J_{\nu+1}(x) .
$$

Subtracting and adding these two gives the **three-term recurrence** and the **derivative recurrence**

$$
J_{\nu-1}(x) + J_{\nu+1}(x) = \frac{2\nu}{x}J_\nu(x) ,
\qquad
J_{\nu-1}(x) - J_{\nu+1}(x) = 2J_\nu'(x) ,
$$

of which the case $\nu = 0$ of the second, with $J_{-1} = -J_1$, is

$$
J_0'(x) = -J_1(x) .
$$

Two remarks on how far this reaches.

1. **The relations do not single out $J_\nu$.** They hold for $Y_\nu$ and for the Hankel functions as well, and more generally for any family built from solutions of Bessel's equation at the standard scale (:cite{work=hassani-2013 loc="§15.5, p. 485"}); the pair of first-order relations says that $x^{\pm\nu}\frac{d}{dx}x^{\mp\nu}$ raises and lowers the order.
2. **Conversely they force Bessel's equation.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.1, Eqs. (14.13)-(14.14), pp. 646-647"} show that any family $Z_\nu$ satisfying the three-term and derivative recurrences satisfies $x^{2}Z_\nu'' + xZ_\nu' + (x^{2}-\nu^{2})Z_\nu = 0$. So the recurrences are not a by-product of the equation; they are equivalent to it.

Read backwards, the first pair are antiderivatives:

$$
\int x^{\nu}J_{\nu-1}(x)\,dx = x^{\nu}J_\nu(x) , \qquad
\int x^{-\nu}J_{\nu+1}(x)\,dx = -x^{-\nu}J_\nu(x) .
$$
:::

:::idea{provenance=original}
Only two of the four recurrences need proving; the rest is algebra. The two that do are the ones with a prefactor $x^{\pm\nu}$, and the reason they are the right ones is that $x^{\pm\nu}$ cancels the fractional power in the series and leaves a power series in $x^{2}$ whose exponents are $2\nu+2m$ and $2m$. Differentiating then multiplies the $m$-th term by that exponent — by $2(\nu+m)$ in the first case, by $2m$ in the second — and in each case the new factor is exactly what the Gamma function needs to shift its argument by one, because $\Gamma(\nu+m+1) = (\nu+m)\Gamma(\nu+m)$ and $m! = m\,(m-1)!$. So differentiation shifts the order by one. The two cases differ in one detail with a large consequence: the factor $2m$ annihilates the $m = 0$ term, so the second series has to be relabelled, and the relabelling is where the minus sign comes from.
:::

:::proof[The recurrences from the series]{provenance=adapted src="rhb-2006:§18.5.3, Eqs. (18.92)-(18.95), pp. 611-612; arfken-2013:§14.1, pp. 645-646"}
We prove the two first-order relations directly from the power series; everything else is algebra.

**Step 1: raising the order downwards.** Multiply the series by $x^{\nu}$ and differentiate term by term, which is legitimate because the series converges locally uniformly:

$$
\frac{d}{dx}\bigl[x^{\nu}J_\nu(x)\bigr]
= \frac{d}{dx}\sum_{m\ge0}\frac{(-1)^{m}\,x^{2\nu+2m}}{m!\,\Gamma(\nu+m+1)\,2^{\nu+2m}}
= \sum_{m\ge0}\frac{(-1)^{m}\,(2\nu+2m)\,x^{2\nu+2m-1}}{m!\,\Gamma(\nu+m+1)\,2^{\nu+2m}} .
$$

Use $\Gamma(\nu+m+1) = (\nu+m)\Gamma(\nu+m)$ to cancel the factor $2(\nu+m)$ against the denominator:

$$
= x^{\nu}\sum_{m\ge0}\frac{(-1)^{m}}{m!\,\Gamma(\nu+m)}\left(\frac{x}{2}\right)^{\nu-1+2m}
= x^{\nu}J_{\nu-1}(x) ,
$$

since $\Gamma(\nu+m) = \Gamma\bigl((\nu-1)+m+1\bigr)$ is exactly the Gamma factor for order $\nu-1$.

**Step 2: lowering the order.** The same computation on $x^{-\nu}J_\nu$ gives

$$
\frac{d}{dx}\bigl[x^{-\nu}J_\nu(x)\bigr]
= \sum_{m\ge0}\frac{(-1)^{m}\,2m\,x^{2m-1}}{m!\,\Gamma(\nu+m+1)\,2^{\nu+2m}} .
$$

The $m = 0$ term drops out — this is the one asymmetry between the two computations — so the sum starts at $m = 1$; cancelling $2m$ against $m! = m\,(m-1)!$ and relabelling $m = k+1$,

$$
= -x^{-\nu}\sum_{k\ge0}\frac{(-1)^{k}}{k!\,\Gamma(\nu+k+2)}\left(\frac{x}{2}\right)^{\nu+1+2k}
= -x^{-\nu}J_{\nu+1}(x) ,
$$

because $\Gamma(\nu+k+2) = \Gamma\bigl((\nu+1)+k+1\bigr)$.

**Step 3: the other two relations.** Expanding the derivative in Step 1 and dividing by $x^{\nu-1}$ gives $xJ_\nu' + \nu J_\nu = xJ_{\nu-1}$; expanding Step 2 and multiplying by $x^{\nu+1}$ gives $xJ_\nu' - \nu J_\nu = -xJ_{\nu+1}$. Subtract the second from the first and divide by $x$:

$$
\frac{2\nu}{x}J_\nu = J_{\nu-1}+J_{\nu+1} .
$$

Add them and divide by $x$: $2J_\nu' = J_{\nu-1}-J_{\nu+1}$. Finally, at $\nu = 0$ the identity $J_{-1} = -J_1$ turns the last relation into $2J_0' = -2J_1$. $\square$

**The same relations from the generating function.** For integer order there is a shorter route, and it is worth recording because it generalises to other generating functions. Differentiating $g(x,t) = e^{(x/2)(t-1/t)}$ in $t$ and in $x$ gives

$$
\frac{\partial g}{\partial t} = \frac{x}{2}\left(1+\frac{1}{t^{2}}\right)g ,
\qquad
\frac{\partial g}{\partial x} = \frac{1}{2}\left(t-\frac{1}{t}\right)g .
$$

Replacing $g$ on both sides by $\sum_n J_n(x)t^{n}$ and equating the coefficient of $t^{n-1}$ in the first and of $t^{n}$ in the second yields $nJ_n = \tfrac{x}{2}(J_{n-1}+J_{n+1})$ and $2J_n' = J_{n-1}-J_{n+1}$ at once (:cite{work=rhb-2006 loc="§18.5.3, p. 613"}; :cite{work=arfken-2013 loc="§14.1, p. 646"}).
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The $1/\Gamma$ convention, in the definition.** The series needs $1/\Gamma(\nu+m+1)$ to have a value for every $m \ge 0$. Off the negative integers this is automatic; at $\nu = -n$ the first $n$ of those reciprocals are $1/\Gamma$ of a non-positive integer, and the convention adopted in the definition reads them as $0$ rather than as undefined, which is legitimate because $1/\Gamma$ is entire (:ref[]{to=spec.gamma-function}). What comes out is then $\pm J_{|\nu|}$ — a solution, but not a new one, so the restriction that really bites is on finding a *second* solution, not on defining the first. :cite[Strauss]{work=strauss-2008 loc="§10.5, p. 283"} draws the line in the other place, calling the series undefined at negative integer order and stating his existence claim for every real order except those; the difference is one of convention, and the consequence — no second solution at integer order — is the same either way.
- **$\nu \notin \mathbb{Z}$, for a basis from $J_{\pm\nu}$.** This is the Frobenius dichotomy (:ref[]{to=ode.frobenius-method}): exponents differing by a non-integer give two independent series. For $\nu = n$ the exponents differ by $2n \in \mathbb{Z}$, the smaller one fails, and the second solution acquires a logarithm. Half-integer $\nu$ is the instructive near-miss: the exponents differ by the odd integer $2\nu$, so the theorem gives no guarantee, yet the second series survives because the recurrence $n(n-2\nu)a_n = -a_{n-2}$ advances $n$ in steps of two and therefore steps over the obstruction at $n = 2\nu$ (:cite{work=rhb-2006 loc="§18.5.1, pp. 603-604"}). That is why $J_{1/2}$ and $J_{-1/2}$ are independent while $J_1$ and $J_{-1}$ are not.
- **$a_1 = 0$.** For $\nu \ne -\tfrac12$ the $n=1$ equation forces it. At $\nu = -\tfrac12$ it does not, and $a_1$ is free; choosing $a_1 = 0$ is then a choice, and the series obtained is $J_{-1/2}$, with the admitted odd part being a multiple of $J_{1/2}$. Nothing is lost, but the step is a convention, not a deduction.
- **Integer order, for the generating function.** A Laurent series in $t$ has integer powers, so no expansion of this shape can produce non-integer orders. The identity $J_{-n} = (-1)^nJ_n$ is what makes the doubly infinite sum consistent; for non-integer $\nu$ there is no such relation and the generating function is silent. Any statement about $J_\nu$ at general $\nu$ proved "by the generating function" is therefore proved only for integer order, and must be extended by the series (or by analytic continuation in $\nu$) before it may be used.
- **Absolute convergence, in the proof.** The rearrangement of the double sum into Laurent coefficients is the one analytic step; it is justified by absolute convergence of both exponential series, which holds for all $x$ and all $t \ne 0$. At $t = 0$ the left-hand side has an essential singularity, so the Laurent series has no constant-radius disc of convergence around $t=0$ — only the punctured plane.
- **Term-by-term differentiation.** Step 1 and Step 2 differentiate a power series inside its disc of convergence, which here is all of $\mathbb{C}$; no separate justification is needed. The loss of the $m=0$ term in Step 2 is not a technicality but the source of the minus sign, and hence of the asymmetry between raising and lowering.
- **A numerical warning.** The three-term recurrence is exact but not safe to iterate upwards in $\nu$: $J_\nu(x)$ decays very fast once $\nu > x$, so forward recursion amplifies rounding error into a spurious multiple of the :ref[second solution $Y_\nu$]{to=spec.bessel-second-kind-hankel}, which grows as $\nu$ increases instead of decaying. Recursion *downwards* in $\nu$ is stable, which is the basis of the standard algorithms.
:::

:::method[Working with $J_\nu$]{provenance=adapted src="rhb-2006:§18.5.3, pp. 611-612; arfken-2013:§14.1, Eqs. (14.10)-(14.11), p. 646"}
1. **To find the order.** Put the equation in the form $x^{2}y''+xy'+(x^{2}-\nu^{2})y = 0$; the order is $\nu = \sqrt{\text{(the constant subtracted from }x^{2})}$. If the independent variable appears as $k\rho$ rather than $x$, the solutions are $J_\nu(k\rho)$ and the equation reads $\rho^{2}\frac{d^2}{d\rho^2} + \rho\frac{d}{d\rho} + (k^{2}\rho^{2}-\nu^{2})$.
2. **To choose the solution.** If the domain includes $\rho = 0$ and the solution must be bounded there, take $J_\nu$ with $\nu \ge 0$ and discard everything else. Otherwise a second solution is needed (:ref[]{to=spec.bessel-second-kind-hankel}).
3. **To evaluate for small or moderate $x$.** Sum the defining series; the terms alternate and fall off like $(x/2)^{2m}/[m!\,\Gamma(\nu+m+1)]$, so a handful suffice for $x \lesssim \nu+5$. For large $x$ use the asymptotic forms of :ref[]{to=spec.bessel-asymptotics} instead.
4. **To move between orders.** Use $J_{\nu+1} = (2\nu/x)J_\nu - J_{\nu-1}$ to go up, or the same relation solved for $J_{\nu-1}$ to go down; in floating point, go down (see the remark above). For half-integer $\nu$, start from $J_{1/2} = \sqrt{2/\pi x}\,\sin x$ and $J_{-1/2} = \sqrt{2/\pi x}\,\cos x$, and every $J_{n+1/2}$ comes out in closed form.
5. **To integrate.** Look for the pattern $x^{\nu}J_{\nu-1}$ or $x^{-\nu}J_{\nu+1}$, which integrate exactly to $x^{\nu}J_\nu$ and $-x^{-\nu}J_\nu$. A power that does not match is reduced by writing $x^{\mu+1} = x^{\mu-\nu}\cdot x^{\nu+1}$ and integrating by parts.
6. **To expand a plane wave or a phase-modulated signal.** Apply the Jacobi-Anger expansion: any $e^{\,i\beta\sin\theta}$ is a Fourier series in $\theta$ whose coefficients are $J_n(\beta)$.
:::

:::example[Closed forms at half-integer order]{provenance=adapted src="rhb-2006:§18.5.1, the reduction of $J_{\pm1/2}$ to trigonometric functions, p. 605, and §18.5.3, the reduction of $J_{\pm3/2}$ by the three-term recurrence, p. 612"}
**(a) Closed forms at half-integer order.** The route — collapse $J_{\pm1/2}$ to sine and cosine from the series, then climb the three-term recurrence — is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§18.5.1, p. 605; §18.5.3, p. 612"}; the Gamma-factor identity used to collapse the series, the order $\tfrac52$, and every number below are ours.

With $\nu = \tfrac12$ the Gamma factors telescope. Using $\Gamma(\tfrac32+m) = \frac{(2m+1)!}{m!\,4^{m}}\cdot\frac{\sqrt{\pi}}{2}$,

$$
J_{1/2}(x) = \sum_{m\ge0}\frac{(-1)^{m}}{m!\,\Gamma(m+\tfrac32)}\left(\frac{x}{2}\right)^{1/2+2m}
= \sqrt{\frac{2}{\pi x}}\sum_{m\ge0}\frac{(-1)^{m}x^{2m+1}}{(2m+1)!}
= \sqrt{\frac{2}{\pi x}}\,\sin x ,
$$

and the same computation at $\nu = -\tfrac12$ gives $J_{-1/2}(x) = \sqrt{2/\pi x}\,\cos x$. Now climb with $J_{\nu+1} = (2\nu/x)J_\nu - J_{\nu-1}$:

$$
J_{3/2}(x) = \frac{1}{x}J_{1/2}(x) - J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}}\left(\frac{\sin x}{x} - \cos x\right) ,
$$

$$
J_{5/2}(x) = \frac{3}{x}J_{3/2}(x) - J_{1/2}(x) = \sqrt{\frac{2}{\pi x}}\left[\left(\frac{3}{x^{2}}-1\right)\sin x - \frac{3\cos x}{x}\right] .
$$

Check at $x = 3$, where $\sin 3 = 0.1411200$ and $\cos 3 = -0.9899925$. Then $\sqrt{2/3\pi} = 0.4606589$ and

$$
J_{5/2}(3) = 0.4606589\left[\left(\tfrac13 - 1\right)(0.1411200) - (-0.9899925)\right] = 0.4606589 \times 0.8959125 = 0.4127100 .
$$

Summing the defining series at $\nu = \tfrac52$, $x = 3$ term by term gives $0.4127100$ to seven places, as it must.
:::

:::example[An integral, and a modulation index]{provenance=original}
**(b) A definite integral.** Evaluate $\int_0^1 x^{2}J_1(x)\,dx$. The integrand matches $x^{\nu}J_{\nu-1}$ with $\nu = 2$, so by the first recurrence $x^{2}J_1 = \frac{d}{dx}\bigl[x^{2}J_2\bigr]$ and

$$
\int_0^1 x^{2}J_1(x)\,dx = \bigl[x^{2}J_2(x)\bigr]_0^1 = J_2(1) .
$$

To get a number without a table, use the three-term recurrence at $\nu = 1$: $J_2(1) = 2J_1(1) - J_0(1)$. Summing the series at $x = 1$ gives $J_0(1) = 0.7651977$ and $J_1(1) = 0.4400506$, so

$$
\int_0^1 x^{2}J_1(x)\,dx = 2(0.4400506) - 0.7651977 = \boxed{0.1149035} .
$$

Numerical quadrature of the left-hand side returns $0.11490348$, agreeing to eight figures.

**(c) The modulation index that kills a carrier.** A signal of carrier frequency $\omega_c$ whose phase is modulated at frequency $\omega_m$ with peak deviation $\beta$ is $s(t) = \mathrm{Re}\,e^{\,i(\omega_ct + \beta\sin\omega_mt)}$. By Jacobi-Anger with $\theta = \omega_mt$,

$$
e^{\,i\beta\sin\omega_mt} = \sum_{n=-\infty}^{\infty}J_n(\beta)\,e^{\,in\omega_mt} ,
\qquad\text{so}\qquad
s(t) = \sum_{n=-\infty}^{\infty}J_n(\beta)\cos\bigl[(\omega_c+n\omega_m)t\bigr] .
$$

The spectrum is a comb of sidebands spaced by $\omega_m$, the $n$-th with amplitude $J_n(\beta)$. The carrier itself ($n=0$) has amplitude $J_0(\beta)$, so it disappears exactly when $\beta$ is a zero of $J_0$: the smallest such $\beta$ is $2.404826$. Setting $\beta = 2.404826$ and summing $\sum_n J_n(\beta)^{2}$ over $|n| \le 20$ returns $1.0000000$, as the total power must, with $J_0 = 0$ and the first sidebands carrying $J_{\pm1}(\beta)^{2} = (0.5191475)^{2} = 0.2695141$ each — that is, $53.9\%$ of the power in the first pair of sidebands and none at all in the carrier.
:::

:::application{provenance=original}
**Anything cylindrical.** Separating the Helmholtz equation $\nabla^{2}u + k^{2}u = 0$ in cylindrical polars $(\rho,\varphi,z)$ with $u = P(\rho)e^{im\varphi}e^{i\ell z}$ leaves $\rho^{2}P'' + \rho P' + \bigl[(k^{2}-\ell^{2})\rho^{2}-m^{2}\bigr]P = 0$, which is Bessel's equation of order $m$ in the variable $\sqrt{k^{2}-\ell^{2}}\,\rho$. Single-valuedness in $\varphi$ forces $m \in \mathbb{Z}$, and regularity on the axis forces $P \propto J_m$. This one calculation underlies the vibrating circular membrane, the cylindrical resonant cavity of a particle accelerator, the acoustic modes of an organ pipe of circular cross-section, the temperature in a cooling cylindrical billet, and the TE and TM modes of a circular waveguide; the radial boundary condition at $\rho = a$ then quantises $k$ through the zeros of $J_m$ or $J_m'$ (:ref[]{to=spec.bessel-orthogonality}, :ref[]{to=pde.separation-of-variables}).

**Diffraction by a circular aperture.** The Fraunhofer amplitude from a uniformly illuminated circular hole of radius $a$ is the two-dimensional Fourier transform of a disc. The angular integral turns into $J_0$ by the integral representation above, and the radial integral is then done exactly by $\int_0^a J_0(br)r\,dr = aJ_1(ab)/b$ — the antiderivative $\frac{d}{dr}[rJ_1(br)] = brJ_0(br)$. The result is the Airy pattern, intensity $\propto [J_1(ka\sin\alpha)/\sin\alpha]^{2}$, whose first dark ring sits at $ka\sin\alpha = 3.831706$, the first zero of $J_1$. That number is the diffraction limit of every circular lens, telescope and microscope objective, and the same formula with $k$ a particle wavenumber describes the diffraction minima in low-energy nuclear scattering.

**Frequency modulation and sidebands.** Example (c) is how FM radio, laser phase modulators and optical frequency combs are analysed, and the Bessel-zero trick is a standard laboratory method for calibrating a modulator: increase the drive until the carrier vanishes on a spectrum analyser, and the modulation index is known to be $2.404826$ without measuring the drive at all. The same expansion gives the Debye-Waller-like sidebands in acousto-optic deflection and the Rabi sidebands of a two-level atom driven by a frequency-modulated field.

**Hankel transforms and axisymmetric problems.** The integral $\int_0^\infty f(\rho)J_\nu(\gamma\rho)\rho\,d\rho$ is to an axisymmetric problem what the Fourier transform is to a translation-invariant one: it diagonalises the radial part of the Laplacian. Potential problems for a charged disc, the stress field under a circular punch, and the diffusion of heat from a circular source are all solved this way (:ref[]{to=fourier.hankel-mellin}).

**Where the order is not an integer.** Half-integer orders arise whenever a three-dimensional problem is separated in spherical polars, since the radial factor $r^{-1/2}$ converts the spherical Bessel equation into Bessel's equation of order $\ell+\tfrac12$ (:ref[]{to=spec.spherical-bessel}); order $\tfrac13$ appears in the solution of Airy's equation and so in every turning-point problem of wave optics and quantum mechanics (:ref[]{to=spec.airy-functions}); and continuous orders appear in the normal modes of a hanging chain and in the Kelvin functions of eddy-current theory.
:::
