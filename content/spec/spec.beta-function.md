---
id: spec.beta-function
title: The Beta function
kind: theorem
level: core
summary: The Beta integral $B(p,q) = \int_0^1 t^{p-1}(1-t)^{q-1}dt$ equals $\Gamma(p)\Gamma(q)/\Gamma(p+q)$, proved by writing the product of two Gamma integrals in polar coordinates; the trigonometric and $(1+u)^{-p-q}$ forms that follow give closed values for powers of sine and cosine and for a large family of algebraic integrals.
prereqs: [spec.gamma-function, found.change-of-variables]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§13.3, eqs. (13.45)-(13.51), pp. 617-618; the duplication formula derived from the Beta function, eqs. (13.52)-(13.54), pp. 618-619; Exercise 13.3.1 (the recurrences) and Exercises 13.3.13 and 13.3.16, pp. 619-622"
    pages: "617-622"
    role: the definition as a quotient of Gamma functions and the polar-coordinate computation that identifies it with the trigonometric integral; the three alternate forms obtained by substitution; the recurrences; the period of motion in an $A\lvert x\rvert^{n}$ potential and the Beta probability density
  - work: rhb-2006
    loc: "§18.12.2, eqs. (18.162)-(18.165) with the worked proof of (18.165), pp. 638-639"
    pages: "638-639"
    role: the Beta integral taken as the definition, the symmetry $B(m,n) = B(n,m)$ by $x \mapsto 1-x$, the $(1+y)^{-m-n}$ and trigonometric forms, and the polar-coordinate proof of the relation to $\Gamma$
  - work: hassani-2013
    loc: "§12.4, eqs. (12.16)-(12.20), pp. 380-381"
    pages: "380-381"
    role: the Beta integral for complex arguments ("Euler's integral of the first kind"), the substitutions $t \mapsto 1/t$ and $t = \sin^2\theta$, the relation $B(a,b) = \Gamma(a)\Gamma(b)/\Gamma(a+b)$, and its use to obtain the reflection formula
  - work: grimmett-stirzaker-2020
    loc: "§4.4, paragraphs (4.4.6) and (4.4.8) with Exercise 4.4.2, pp. 108-109"
    pages: "108-109"
    role: the Beta probability density on $[0,1]$ normalised by $B(a,b)$, the Gamma density, and the identification of $B(a,b)$ with $\Gamma(a)\Gamma(b)/\Gamma(a+b)$ as the normalising constant
---

:::definition[Euler's integral of the first kind]{provenance=adapted src="rhb-2006:eq. (18.162), p. 638; hassani-2013:eq. (12.16), p. 380; arfken-2013:eq. (13.45), p. 617; grimmett-stirzaker-2020:§4.4 (4.4.8), p. 108"}
For complex $p$ and $q$ with $\operatorname{Re} p > 0$ and $\operatorname{Re} q > 0$, the **Beta function** is

$$
B(p,q) \;=\; \int_0^1 t^{\,p-1}(1-t)^{\,q-1}\,dt .
$$

The integral converges absolutely under exactly those two conditions. Writing $a = \operatorname{Re}p$ and $b = \operatorname{Re}q$, the modulus of the integrand is $t^{\,a-1}(1-t)^{\,b-1}$; near $t = 0$ the second factor is bounded away from $0$ and $\infty$, so integrability there needs $a > 0$, and near $t = 1$ the same argument on the first factor needs $b > 0$.

:cite[Hassani]{work=hassani-2013 loc="§12.4, p. 380"} calls this Euler's integral of the first kind, the Gamma integral being the second. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.45), p. 617"} go the other way and *define* $B(p,q)$ as $\Gamma(p)\Gamma(q)/\Gamma(p+q)$, then prove that the integral above computes it; the content is the same, and part 2 of the statement is the bridge.
:::

:::statement[The Beta function and its forms]{provenance=adapted src="rhb-2006:eqs. (18.163)-(18.165), pp. 638-639; arfken-2013:eqs. (13.45)-(13.51) and Exercise 13.3.1, pp. 617-619; hassani-2013:eqs. (12.17)-(12.19), p. 380"}
Let $\operatorname{Re} p > 0$ and $\operatorname{Re} q > 0$.

1. **Symmetry.** $B(p,q) = B(q,p)$.
2. **Relation to $\Gamma$.**

   $$
   B(p,q) \;=\; \frac{\Gamma(p)\,\Gamma(q)}{\Gamma(p+q)} .
   $$
3. **Trigonometric form.**

   $$
   B(p,q) \;=\; 2\int_0^{\pi/2} \sin^{2p-1}\!\theta\;\cos^{2q-1}\!\theta\;d\theta .
   $$
4. **Form on the half-line.**

   $$
   B(p,q) \;=\; \int_0^{\infty}\frac{u^{\,p-1}}{(1+u)^{\,p+q}}\,du
   \;=\; \int_1^{\infty} s^{-p-q}\,(s-1)^{\,q-1}\,ds .
   $$
5. **Recurrences.**

   $$
   B(p,q) \;=\; B(p+1,q) + B(p,q+1), \qquad
   B(p,q+1) \;=\; \frac{q}{p+q}\,B(p,q) .
   $$
6. **Special values and extension.** $B(p,1) = 1/p$ and $B(\tfrac12,\tfrac12) = \pi$. Since the right-hand side of part 2 is a quotient of functions meromorphic on $\mathbb{C}$, it extends $B$ to all $(p,q)$ with $p, q \notin \{0,-1,-2,\dots\}$; in particular, for $0 < \operatorname{Re}p < 1$ the reflection formula of :ref[]{to=spec.gamma-function} gives

   $$
   B(p, 1-p) \;=\; \Gamma(p)\,\Gamma(1-p) \;=\; \frac{\pi}{\sin \pi p} .
   $$
:::

:::idea{provenance=original}
Part 2 is the whole unit, and it is proved by raising the dimension rather than by evaluating anything. A single Gamma integral, written with $e^{-y^2}$ instead of $e^{-t}$, is an integral over a half-line; the product of two such integrals is an integral over a quadrant of the plane. In polar coordinates that quadrant splits: the radial variable carries all the decay and reassembles into one more Gamma integral, of argument $p+q$ because the powers add, while the angular variable carries all the ratio information and leaves behind an integral in $\sin$ and $\cos$ that depends on $p$ and $q$ separately. Recognising that angular integral as $B(p,q)$ -- which is what the substitution $t = \sin^2\theta$ does -- finishes the proof.

The other forms are one substitution each, chosen by what the integrand must look like: $t = \sin^2\theta$ sends $[0,1]$ to a quarter period and turns $1-t$ into $\cos^2\theta$; $t = u/(1+u)$ sends $[0,1]$ to $[0,\infty)$ and turns $1-t$ into $1/(1+u)$. The recurrences need no integration at all: the first is the algebraic identity $t^{p-1}(1-t)^{q-1} = t^{p}(1-t)^{q-1} + t^{p-1}(1-t)^{q}$ under the integral sign, and the second is the functional equation of $\Gamma$ applied to part 2.
:::

:::proof{provenance=adapted src="rhb-2006:§18.12.2, pp. 638-639; arfken-2013:§13.3, eqs. (13.46)-(13.51), pp. 617-618; hassani-2013:eqs. (12.17)-(12.19), p. 380"}
**(1) Symmetry.** The substitution $t = 1-\tau$ maps $[0,1]$ to itself, reverses orientation and exchanges the two factors, so $B(p,q) = \int_0^1 \tau^{\,q-1}(1-\tau)^{\,p-1}d\tau = B(q,p)$.

**(3) Trigonometric form.** Put $t = \sin^2\theta$ for $\theta \in [0,\pi/2]$, a $C^1$ increasing bijection onto $[0,1]$ with $dt = 2\sin\theta\cos\theta\,d\theta$ and $1 - t = \cos^2\theta$. Then $t^{\,p-1}(1-t)^{\,q-1}dt = 2\sin^{2p-1}\theta\cos^{2q-1}\theta\,d\theta$, which is part 3.

**(4) Form on the half-line.** Put $t = u/(1+u)$ for $u \in [0,\infty)$, again an increasing bijection onto $[0,1)$, with $1-t = 1/(1+u)$ and $dt = (1+u)^{-2}du$. Then

$$
t^{\,p-1}(1-t)^{\,q-1}\,dt \;=\; \frac{u^{\,p-1}}{(1+u)^{\,p-1}}\cdot\frac{1}{(1+u)^{\,q-1}}\cdot\frac{du}{(1+u)^{2}}
\;=\; \frac{u^{\,p-1}\,du}{(1+u)^{\,p+q}} .
$$

For the second expression in part 4, substitute $s = 1+v$ with $v \in [0,\infty)$: it becomes $\int_0^{\infty} v^{\,q-1}(1+v)^{-p-q}\,dv$, which is the first expression with $p$ and $q$ interchanged, hence equal to it by part 1. That is the form in which :cite[Hassani]{work=hassani-2013 loc="eq. (12.17), p. 380"} records it, reached there by $t \mapsto 1/t$ in the definition.

**(2) Relation to $\Gamma$.** Use the squared form $\Gamma(w) = 2\int_0^\infty y^{\,2w-1}e^{-y^2}dy$ of Euler's integral (:ref[]{to=spec.gamma-function}) for both factors:

$$
\Gamma(p)\,\Gamma(q) \;=\; 4\int_0^{\infty}\!\!\int_0^{\infty} x^{\,2p-1} y^{\,2q-1} e^{-(x^2+y^2)}\,dx\,dy .
$$

The double integral converges absolutely: replacing $p$ and $q$ by $a = \operatorname{Re}p$ and $b = \operatorname{Re}q$ turns the integrand into its modulus, and the same display then evaluates to the finite number $\Gamma(a)\Gamma(b)$. So the iterated integral may be treated as a double integral and the variables changed (:ref[]{to=found.change-of-variables}). Pass to plane polar coordinates in the open first quadrant,

$$
x \;=\; \rho\sin\varphi, \qquad y \;=\; \rho\cos\varphi, \qquad
(\rho,\varphi) \in (0,\infty)\times(0,\tfrac\pi2), \qquad dx\,dy \;=\; \rho\,d\rho\,d\varphi .
$$

Then $x^2 + y^2 = \rho^2$, and the powers separate as $x^{\,2p-1}y^{\,2q-1} = \rho^{\,2p+2q-2}\sin^{2p-1}\varphi\,\cos^{2q-1}\varphi$. With the extra $\rho$ from the area element the radial exponent is $2(p+q)-1$, so

$$
\Gamma(p)\Gamma(q) \;=\;
\underbrace{\left(2\int_0^{\pi/2}\sin^{2p-1}\varphi\,\cos^{2q-1}\varphi\;d\varphi\right)}_{=\;B(p,q)\ \text{by part 3}}
\;\cdot\;
\underbrace{\left(2\int_0^{\infty}\rho^{\,2(p+q)-1}e^{-\rho^2}\,d\rho\right)}_{=\;\Gamma(p+q)}
$$

-- the first factor by part 3, the second by the squared form of Euler's integral at argument $p+q$, which converges because $\operatorname{Re}(p+q) > 0$. Since $\Gamma(p+q) \ne 0$ (:ref[]{to=spec.gamma-function}, part 7), dividing gives part 2.

**(5) Recurrences.** Inside the integral, $t^{\,p-1}(1-t)^{\,q-1} = \bigl(t + (1-t)\bigr)t^{\,p-1}(1-t)^{\,q-1} = t^{\,p}(1-t)^{\,q-1} + t^{\,p-1}(1-t)^{\,q}$; integrating gives the first recurrence, with both new integrals convergent because the exponents only increased. For the second, part 2 and the functional equation $\Gamma(q+1) = q\Gamma(q)$, $\Gamma(p+q+1) = (p+q)\Gamma(p+q)$ give

$$
B(p,q+1) \;=\; \frac{\Gamma(p)\,\Gamma(q+1)}{\Gamma(p+q+1)} \;=\; \frac{q}{p+q}\cdot\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)} \;=\; \frac{q}{p+q}\,B(p,q) .
$$

**(6) Special values.** $B(p,1) = \int_0^1 t^{\,p-1}dt = 1/p$, which also follows from part 2 since $\Gamma(1) = 1$ and $\Gamma(p+1) = p\Gamma(p)$. For $p = q = \tfrac12$, part 3 gives $B(\tfrac12,\tfrac12) = 2\int_0^{\pi/2}d\theta = \pi$, in agreement with part 2 and $\Gamma(\tfrac12)^2 = \pi$. The extension and the value of $B(p,1-p)$ are immediate from part 2 and the reflection formula. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\operatorname{Re}p > 0$ and $\operatorname{Re}q > 0$ are two separate endpoint conditions,** one per end of $[0,1]$, and each is needed on its own. Dropping only the first leaves an integral that diverges at $t = 0$ and converges at $t = 1$. In the trigonometric form of part 3 the same two conditions appear as integrability at $\theta = 0$ and at $\theta = \pi/2$; in the half-line form of part 4, as integrability at $u = 0$ and at $u = \infty$ -- there the decay at infinity is $u^{-q-1}$, so it is $\operatorname{Re}q > 0$ that controls the tail.
- **Absolute convergence is what licenses the polar change of variables** in part 2. The integrand is complex-valued whenever $p$ or $q$ is, so the interchange is not covered by any monotone argument; the bound by $x^{\,a-1}y^{\,b-1}e^{-(x^2+y^2)}$ with $a,b > 0$ is.
- **The identity $\Gamma(p)\Gamma(q) = B(p,q)\Gamma(p+q)$ is only divided by $\Gamma(p+q)$ at the end,** and that step uses the fact that $\Gamma$ has no zeros. Written as a product it also makes sense in the limiting cases, which is how part 2 extends to arguments where $\Gamma$ has poles: $B$ inherits those poles from the numerator and zeros from the denominator.
- **The extension in part 6 is by definition, not by continuation of the integral.** For $\operatorname{Re}p \le 0$ the Beta integral diverges; what is meromorphic in $p$ and $q$ is the quotient of Gamma functions, and that quotient is what $B$ means outside the quadrant of convergence.
:::

:::remark[A difference of convention between our sources]{provenance=original}
The two forms

$$
B(p,q) \;=\; 2\int_0^{\pi/2}\sin^{2p-1}\!\theta\,\cos^{2q-1}\!\theta\,d\theta
\qquad\text{and}\qquad
B(p,q) \;=\; 2\int_0^{\pi/2}\cos^{2p-1}\!\theta\,\sin^{2q-1}\!\theta\,d\theta
$$

are both correct and both in print: the first in :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="eq. (18.164), p. 638"} and :cite[Hassani]{work=hassani-2013 loc="eq. (12.18), p. 380"}, the second in :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="eq. (13.47), p. 617"}. They differ by which of $\sin$ and $\cos$ carries which parameter, and they agree because $B$ is symmetric (part 1) -- equivalently, because $\theta \mapsto \pi/2 - \theta$ swaps $\sin$ and $\cos$. We use the first throughout, so that $t = \sin^2\theta$ matches the order of the arguments in the definition. Only the pairing of exponent with parameter is at stake, and a formula taken from one source and used with the other's convention still gives the right number, because the two results are equal; but mixing them inside one calculation makes the bookkeeping unreadable, so we fix one.
:::

:::method[Evaluating an integral as a Beta function]{provenance=original}
1. **Powers of sine and cosine.** For $\int_0^{\pi/2}\sin^{m}\theta\cos^{n}\theta\,d\theta$ with $m, n > -1$, match exponents: $2p-1 = m$ and $2q-1 = n$, so

   $$
   \int_0^{\pi/2}\sin^{m}\!\theta\,\cos^{n}\!\theta\,d\theta
   \;=\; \tfrac12 B\!\left(\frac{m+1}{2},\frac{n+1}{2}\right)
   \;=\; \frac{\Gamma\!\left(\frac{m+1}{2}\right)\Gamma\!\left(\frac{n+1}{2}\right)}{2\,\Gamma\!\left(\frac{m+n}{2}+1\right)} .
   $$

   Integrals over $[0,\pi]$ or $[0,2\pi]$ reduce to this one by symmetry, with attention to signs when an exponent is odd.
2. **An algebraic integrand on $[0,1]$.** Bring $\int_0^1 x^{\alpha}(1-x^{k})^{\beta}dx$ to the standard shape with $t = x^{k}$: it becomes $k^{-1}B\bigl(\frac{\alpha+1}{k},\,\beta+1\bigr)$. The conditions for convergence are $\alpha > -1$ and $\beta > -1$.
3. **An algebraic integrand on $[0,\infty)$.** Use part 4 of the statement. The signature to look for is a numerator power and a denominator power of $1 + u$ (or, after scaling $u \to u/c$, of $c + u$): the numerator exponent fixes $p$ and the denominator exponent fixes $p+q$.
4. **Then evaluate the $\Gamma$'s.** Use part 2 and the method of :ref[]{to=spec.gamma-function}: step the arguments into $[1,2]$, use $\Gamma(\tfrac12) = \sqrt\pi$ for half-integers, and reflection when two arguments add to an integer. If $p+q$ is an integer the answer is elementary; if $p + q$ is a half-integer it carries a $\sqrt\pi$; if $p$ and $q$ have denominator $3$ or $4$ it carries a $\Gamma(\tfrac13)$ or $\Gamma(\tfrac14)$, which is not elementary.
5. **Check the easy cases.** Set one argument to $1$: $B(p,1) = 1/p$ should reproduce the integral of a pure power. This catches factor-of-$k$ errors from step 2 and swapped parameters from step 1.
:::

:::example[A trigonometric integral]{provenance=original}
*Goal:* evaluate $\displaystyle I = \int_0^{\pi/2}\sin^{4}\!\theta\,\cos^{6}\!\theta\;d\theta$.

1. *Match exponents.* Step 1 of the method with $m = 4$, $n = 6$ gives $p = \tfrac52$, $q = \tfrac72$, so $I = \tfrac12 B(\tfrac52,\tfrac72)$.
2. *Convert to $\Gamma$.*

   $$
   B\!\left(\tfrac52,\tfrac72\right) \;=\; \frac{\Gamma(\tfrac52)\,\Gamma(\tfrac72)}{\Gamma(6)} .
   $$
3. *Evaluate the Gammas.* By the functional equation from $\Gamma(\tfrac12) = \sqrt\pi$: $\Gamma(\tfrac52) = \tfrac34\sqrt\pi$ and $\Gamma(\tfrac72) = \tfrac{15}{8}\sqrt\pi$, while $\Gamma(6) = 5! = 120$. Hence

   $$
   B\!\left(\tfrac52,\tfrac72\right) \;=\; \frac{\tfrac34\cdot\tfrac{15}{8}\,\pi}{120} \;=\; \frac{45\pi}{3840} \;=\; \frac{3\pi}{256},
   \qquad
   I \;=\; \frac{3\pi}{512} \;=\; 0.018407769 .
   $$

   Note that the two half-integer arguments supplied $\sqrt\pi$ each, so the answer is a rational multiple of $\pi$, as step 4 of the method predicts for $p+q = 6$ an integer.
4. *Checks.* Numerical quadrature of $I$ returns $0.018407769$. The symmetry check also holds: swapping the exponents, $\int_0^{\pi/2}\sin^6\theta\cos^4\theta\,d\theta = \tfrac12 B(\tfrac72,\tfrac52)$, the same number, as it must be by $\theta \mapsto \pi/2-\theta$.
5. *The same formula for even powers of a single function.* Setting $n = 0$ in step 1 gives the Wallis values, for instance $\int_0^{\pi/2}\sin^{6}\theta\,d\theta = \tfrac12 B(\tfrac72,\tfrac12) = \Gamma(\tfrac72)\Gamma(\tfrac12)/(2\Gamma(4)) = \tfrac{15}{96}\pi = 0.4908739$.
:::

:::example[An algebraic integral on the half-line]{provenance=original}
*Goal:* evaluate $\displaystyle J = \int_0^{\infty}\frac{\sqrt{x}}{(1+x)^{3}}\,dx$ and $\displaystyle K = \int_{-1}^{1}\left(1-x^{2}\right)^{3/2}dx$.

1. *$J$ by part 4.* The numerator is $x^{\,p-1}$ with $p - 1 = \tfrac12$, so $p = \tfrac32$; the denominator is $(1+x)^{\,p+q}$ with $p + q = 3$, so $q = \tfrac32$. Both have positive real part, so

   $$
   J \;=\; B\!\left(\tfrac32,\tfrac32\right) \;=\; \frac{\Gamma(\tfrac32)^{2}}{\Gamma(3)} \;=\; \frac{(\tfrac12\sqrt\pi)^{2}}{2} \;=\; \frac{\pi}{8} \;=\; 0.3926991 .
   $$

   Numerical quadrature gives $0.3926991$.
2. *$K$ by step 2 of the method.* The integrand is even, so $K = 2\int_0^1 (1-x^2)^{3/2}dx$. Substituting $t = x^{2}$, that is $\int_0^1 t^{-1/2}(1-t)^{3/2}dt = B(\tfrac12,\tfrac52)$, so

   $$
   K \;=\; B\!\left(\tfrac12,\tfrac52\right) \;=\; \frac{\Gamma(\tfrac12)\Gamma(\tfrac52)}{\Gamma(3)} \;=\; \frac{\sqrt\pi\cdot\tfrac34\sqrt\pi}{2} \;=\; \frac{3\pi}{8} \;=\; 1.1780972 .
   $$
3. *Check $K$ geometrically.* $K$ is the area under $y = (1-x^2)^{3/2}$, and with $x = \sin\theta$ it is $\int_{-\pi/2}^{\pi/2}\cos^{4}\theta\,d\theta = 2\cdot\tfrac12 B(\tfrac12,\tfrac52)$ by step 1 with $m = 0$, $n = 4$ -- the same number by a different route. Numerical quadrature gives $1.1780972$.
4. *Check against the easy case.* Step 5 of the method: with the exponent $3/2$ replaced by $0$, step 2 gives $B(\tfrac12,1) = 2$, which is indeed $\int_{-1}^1 dx$.
:::

:::application{provenance=adapted src="arfken-2013:Exercises 13.3.13 and 13.3.16, pp. 621-622; grimmett-stirzaker-2020:§4.4 (4.4.8) and Exercise 4.4.2, pp. 108-109"}
**The period of an anharmonic oscillator.** A particle of mass $m$ in the symmetric potential $V(x) = A\lvert x\rvert^{n}$ ($A > 0$, $n > 0$) with energy $E$ turns at $x_{\max} = (E/A)^{1/n}$. From $\tfrac12 m\dot x^2 + V = E$, a quarter period takes the particle from $0$ to $x_{\max}$, so

$$
\tau \;=\; 4\int_0^{x_{\max}}\frac{dx}{\sqrt{2(E - A x^{n})/m}}
\;=\; 2\sqrt{2m}\int_0^{x_{\max}}\frac{dx}{\sqrt{E - Ax^{n}}} .
$$

Substitute $x = x_{\max}u^{1/n}$, so that $Ax^{n} = Eu$ and $dx = (x_{\max}/n)u^{1/n - 1}du$. The integral becomes a Beta integral with $p = 1/n$ and $q = \tfrac12$:

$$
\tau \;=\; \frac{2\sqrt{2m}\;x_{\max}}{n\sqrt E}\int_0^1 u^{\frac1n - 1}(1-u)^{-1/2}\,du
\;=\; \frac{2}{n}\sqrt{\frac{2\pi m}{E}}\left(\frac EA\right)^{1/n}\frac{\Gamma(1/n)}{\Gamma\!\left(\frac1n + \frac12\right)} ,
$$

using $B(1/n,\tfrac12) = \sqrt\pi\,\Gamma(1/n)/\Gamma(\frac1n+\frac12)$. This is the form given as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 13.3.13, p. 621"}. Two features are physics, not algebra. At $n = 2$ the Gamma quotient is $\Gamma(\tfrac12)/\Gamma(1) = \sqrt\pi$ and the energy dependence cancels, leaving $\tau = 2\pi/\omega$ with $A = m\omega^2/2$: the harmonic case is the only one whose period is amplitude-independent. For $n > 2$ the factor $E^{1/n - 1/2}$ makes a stiffer well oscillate faster at higher energy. Numerically, for $m = 1\ \mathrm{kg}$, $A = 1\ \mathrm{J\,m^{-4}}$, $n = 4$ and $E = 1\ \mathrm{J}$, the quotient is $\Gamma(\tfrac14)/\Gamma(\tfrac34) = 3.6256099/1.2254167 = 2.9586751$ and

$$
\tau \;=\; \tfrac12\sqrt{2\pi}\,(2.9586751) \;=\; 3.7081494\ \mathrm{s},
$$

which direct numerical integration of the quarter-period integral confirms to seven digits.

**The Beta distribution.** $B(a,b)$ is by construction the normaliser of the density $f(x) = x^{\,a-1}(1-x)^{\,b-1}/B(a,b)$ on $[0,1]$, for $a, b > 0$ (:cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§4.4 (4.4.8), p. 108"}). Its moments are ratios of Beta functions, and part 2 collapses them: $\mathbb{E}[X] = B(a+1,b)/B(a,b) = a/(a+b)$, and the same computation with $a+2$ gives

$$
\operatorname{Var}X \;=\; \frac{ab}{(a+b)^{2}(a+b+1)} .
$$

At $a = 3$, $b = 2$ this is a mean of $0.6$ and a variance of $6/150 = 0.04$, a standard deviation of $0.2$. The family contains the uniform distribution at $a = b = 1$, and because its density has the same shape as the likelihood of a sequence of independent trials, it is the conjugate prior for a success probability -- the reason Beta functions appear throughout Bayesian inference (:ref[]{to=stats.bayesian-inference}).

**Weakly singular kernels.** The kernel $(z-x)^{\alpha-1}$ of the Abel integral equation is inverted by convolving with $(y-z)^{-\alpha}$, and the computation that makes the inversion work is exactly $\int_0^1 s^{-\alpha}(1-s)^{\alpha-1}ds = B(1-\alpha,\alpha) = \pi/\sin\pi\alpha$, part 6 above (:ref[]{to=green.volterra-equations}). The same Beta integral is what gives the fractional integration operators their composition rule.
:::
