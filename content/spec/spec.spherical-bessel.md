---
id: spec.spherical-bessel
title: Spherical Bessel functions
kind: definition
level: core
summary: 'The radial part of the Helmholtz equation in spherical coordinates is Bessel''s equation of half-integer order; normalised as $j_n(x) = \sqrt{\pi/2x}\,J_{n+1/2}(x)$ the solutions are elementary — $j_0 = \sin x/x$ and all the rest obtained from it by the Rayleigh formula $f_n = (-1)^nx^n(x^{-1}d/dx)^nf_0$ — and they expand a plane wave as $e^{ikr\cos\theta} = \sum_l(2l+1)i^lj_l(kr)P_l(\cos\theta)$.'
prereqs: [spec.bessel-second-kind-hankel, spec.legendre-polynomials]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§14.7: the radial Helmholtz equation Eq. (14.148), the substitution (14.149) and the reduction to Bessel's equation of order $l+\\tfrac12$, Eq. (14.150), pp. 698-699; the definitions, Eq. (14.151), and $y_n = (-1)^{n+1}j_{-n-1}$, Eq. (14.152), p. 699; the series Eqs. (14.153)-(14.156), pp. 699-701; the closed forms $j_0$, $y_0$, $h^{(1)}_0$, $h^{(2)}_0$, Eqs. (14.157)-(14.160), p. 701; the terminating Hankel sum Eqs. (14.161)-(14.162) and the explicit $j_1, j_2, y_1, y_2$, Eqs. (14.163)-(14.168), pp. 701-702; the recurrences (14.169)-(14.172), p. 702; the Rayleigh formulas (14.173)-(14.176), p. 703; the small- and large-argument values (14.177)-(14.182) with the condition $x \\gg n(n+1)/2$, p. 703; the orthogonality integral with weight $r^{2}$, Eq. (14.183), and the table of zeros, p. 704; Example 14.7.1 (particle in a sphere), pp. 705-706; the modified spherical functions, Eqs. (14.193)-(14.198), pp. 706-708"
    pages: "698-708"
    role: the reduction of the radial Helmholtz equation to half-integer Bessel order; the standard normalisations of $j_n$, $y_n$, $h^{(1)}_n$, $h^{(2)}_n$ and the relation $y_n = (-1)^{n+1}j_{-n-1}$; the two series with their double-factorial prefactors; the closed forms and the terminating sum for $h^{(1)}_n$; the four recurrences and the Rayleigh formulas; the behaviour at both ends with the stated validity condition; the orthogonality with weight $r^{2}$, the zeros, and the quantum particle in a sphere; the existence and normalisation of the modified spherical functions
  - work: hassani-2013
    loc: "§19.7.2, the radial Helmholtz equation (19.39), the generic normalisation (19.40) and the general solution (19.41)-(19.42), p. 593; §19.7.4, the derivation of the plane-wave expansion, Eqs. (19.43)-(19.45) and the integral $\\int_{-1}^{1}P_n(u)u^{n}\\,du$, pp. 594-595; §19.7.3, the hard-sphere energy levels, pp. 593-594; §22, Problem 22.35, the spherical Helmholtz Green's function and the plane-wave expansion in spherical harmonics, p. 698"
    pages: "593-595, 698"
    role: the generic definition $z_l(x) = \sqrt{\pi/2}\,Z_{l+1/2}(x)/\sqrt{x}$ covering all four kinds at once; the full derivation of the Rayleigh plane-wave expansion by Legendre orthogonality and small-argument matching, including the value of $\int_{-1}^{1}P_n(u)u^{n}du$ and the resulting coefficient $i^{l}(2l+1)$; the form of the expansion for a general direction of $\mathbf{k}$; the hard-sphere quantisation and the Green's-function application
  - work: rhb-2006
    loc: "§18.6: the radial equation (18.101), the substitution $R = r^{-1/2}S$ and the reduction to Bessel's equation of order $\\ell+\\tfrac12$, p. 614; the definitions (18.102)-(18.103) in the notation $j_\\ell$, $n_\\ell$, the relation $Y_{\\ell+1/2} = (-1)^{\\ell+1}J_{-\\ell-1/2}$ and the closed forms (18.104)-(18.105), p. 615; the worked derivation of the Rayleigh formula (18.106) from the recurrence $J_{\\nu+1} = -x^{\\nu}(d/dx)(x^{-\\nu}J_\\nu)$ and the resulting $j_1, j_2, n_1, n_2$, p. 616"
    pages: "614-616"
    role: the $n_\ell$ notation for the spherical Neumann function, which is the convention clash recorded in the remark; the derivation of the Rayleigh formula by iterating the descending derivative recurrence, which is the route followed in our proof; the explicit low-order closed forms as a cross-check
  - work: strauss-2008
    loc: "§10.5: the half-integer substitution $u = z^{-1/2}v$ reducing Bessel's equation to Eq. (10), p. 284; $J_{1/2}(z) = \\sqrt{2/\\pi z}\\sin z$, $J_{-1/2}(z) = \\sqrt{2/\\pi z}\\cos z$, and the closed-form family Eq. (12), p. 285"
    pages: "284-285"
    role: the half-integer closed forms $J_{\pm1/2}$ that start the whole family, obtained from the elementary normal form of Bessel's equation at $\nu = \tfrac12$; the compact statement of the Rayleigh-type formula for $J_{n+1/2}$
---

:::definition[The spherical Bessel equation and its four solutions]{provenance=adapted src="arfken-2013:§14.7, Eqs. (14.148)-(14.151), pp. 698-699; hassani-2013:§19.7.2, Eqs. (19.39)-(19.40), p. 593; rhb-2006:§18.6, Eqs. (18.101)-(18.103), pp. 614-615"}
Separating the :ref[Helmholtz equation]{to=pde.helmholtz-equation} $\nabla^{2}\psi + k^{2}\psi = 0$ in spherical coordinates leaves, for the radial factor, the **spherical Bessel equation**

$$
r^{2}\frac{d^{2}R}{dr^{2}} + 2r\frac{dR}{dr} + \bigl[k^{2}r^{2} - n(n+1)\bigr]R \;=\; 0 ,
$$

in which $n(n+1)$ is the separation constant of the angular equation and $n$ is a non-negative integer whenever the angular factor is required to be single-valued on the whole sphere. Substituting

$$
R(kr) \;=\; \frac{Z(kr)}{(kr)^{1/2}}
$$

turns it into Bessel's equation of order $n + \tfrac12$ (the computation is in the proof below), so the solutions are $(kr)^{-1/2}$ times Bessel functions of half-integer order. Because the equation is homogeneous, the overall scale is a matter of convention; the standard choice fixes the factor $\sqrt{\pi/2x}$. For integer $n$ (not necessarily non-negative) define

$$
j_n(x) = \sqrt{\frac{\pi}{2x}}\,J_{n+1/2}(x) ,
\qquad
y_n(x) = \sqrt{\frac{\pi}{2x}}\,Y_{n+1/2}(x) ,
$$

$$
h^{(1)}_n(x) = \sqrt{\frac{\pi}{2x}}\,H^{(1)}_{n+1/2}(x) = j_n(x) + i\,y_n(x) ,
\qquad
h^{(2)}_n(x) = \sqrt{\frac{\pi}{2x}}\,H^{(2)}_{n+1/2}(x) = j_n(x) - i\,y_n(x) .
$$

These are the **spherical Bessel function** $j_n$, the **spherical Neumann function** $y_n$, and the **spherical Hankel functions** $h^{(1)}_n$, $h^{(2)}_n$. All four are covered at once by writing $z_n(x) = \sqrt{\pi/2}\;Z_{n+1/2}(x)/\sqrt{x}$ with $Z$ any solution of Bessel's equation of order $n+\tfrac12$ :cite[Hassani]{work=hassani-2013 loc="Eq. (19.40), p. 593"}. The general solution of the radial equation is $R(r) = A\,j_n(kr) + B\,y_n(kr)$.

Throughout, $f_n$ stands for any one of $j_n$, $y_n$, $h^{(1)}_n$, $h^{(2)}_n$, since all four satisfy the same recurrences. Double factorials are used in the form

$$
(2n+1)!! = 1\cdot3\cdot5\cdots(2n+1) ,
\qquad
(2n-1)!! = 1\cdot3\cdot5\cdots(2n-1) ,
\qquad (-1)!! = 1 .
$$

**Notation.** We write $y_n$ for the spherical Neumann function, with Arfken and Hassani. Riley, Hobson and Bence write $n_\ell$ for the same function :cite[]{work=rhb-2006 loc="§18.6, Eq. (18.103), p. 615"}, and in quantum-scattering literature $n_\ell$ is at least as common as $y_\ell$; the functions are identical, only the letter differs. The index is written $n$ here and $\ell$ or $l$ in texts that reserve $\ell$ for angular momentum.
:::

:::statement[Closed forms, recurrences and the two ends]{provenance=adapted src="arfken-2013:§14.7, Eqs. (14.152)-(14.162), pp. 699-702, Eqs. (14.169)-(14.182), pp. 702-703; rhb-2006:§18.6, Eqs. (18.104)-(18.106) and the low-order list, pp. 615-616; strauss-2008:§10.5, Eq. (12), p. 285"}
Let $n$ be an integer and $x > 0$.

1. **Reflection in the index.** $y_n(x) = (-1)^{n+1}j_{-n-1}(x)$. So the second kind is not an independent object: negative indices of $j$ already supply it.

2. **Series.** With $(a)_s = a(a+1)\cdots(a+s-1)$ the Pochhammer symbol,

   $$
   j_n(x) = \frac{x^{n}}{(2n+1)!!}\sum_{s=0}^{\infty}\frac{(-1)^{s}}{s!\,\bigl(n+\tfrac32\bigr)_s}\Bigl(\frac{x}{2}\Bigr)^{2s} ,
   \qquad
   y_n(x) = -\frac{(2n-1)!!}{x^{n+1}}\sum_{s=0}^{\infty}\frac{(-1)^{s}}{s!\,\bigl(\tfrac12-n\bigr)_s}\Bigl(\frac{x}{2}\Bigr)^{2s} .
   $$

3. **Elementary closed forms.** Every spherical Bessel function is a finite combination of $\sin x$, $\cos x$ and powers of $1/x$:

   $$
   j_0(x) = \frac{\sin x}{x} ,
   \qquad
   y_0(x) = -\frac{\cos x}{x} ,
   \qquad
   h^{(1)}_0(x) = -\frac{i}{x}e^{ix} ,
   \qquad
   h^{(2)}_0(x) = \frac{i}{x}e^{-ix} ,
   $$

   $$
   j_1(x) = \frac{\sin x}{x^{2}} - \frac{\cos x}{x} ,
   \qquad
   j_2(x) = \Bigl(\frac{3}{x^{3}} - \frac{1}{x}\Bigr)\sin x - \frac{3}{x^{2}}\cos x ,
   $$

   $$
   y_1(x) = -\frac{\cos x}{x^{2}} - \frac{\sin x}{x} ,
   \qquad
   y_2(x) = -\Bigl(\frac{3}{x^{3}} - \frac{1}{x}\Bigr)\cos x - \frac{3}{x^{2}}\sin x .
   $$

   In general the spherical Hankel function is given by a *terminating* sum,

   $$
   h^{(1)}_n(x) = (-i)^{n+1}\,\frac{e^{ix}}{x}\sum_{s=0}^{n}\frac{i^{s}(n+s)!}{s!\,(2x)^{s}\,(n-s)!} ,
   $$

   with $h^{(2)}_n = \overline{h^{(1)}_n}$ for real $x$; $j_n$ and $y_n$ are the real and imaginary parts of $h^{(1)}_n$.

4. **Recurrences.** For $f_n$ any of the four kinds,

   $$
   f_{n-1}(x) + f_{n+1}(x) = \frac{2n+1}{x}f_n(x) ,
   \qquad
   n\,f_{n-1}(x) - (n+1)f_{n+1}(x) = (2n+1)f_n'(x) ,
   $$

   $$
   \frac{d}{dx}\bigl[x^{n+1}f_n(x)\bigr] = x^{n+1}f_{n-1}(x) ,
   \qquad
   \frac{d}{dx}\bigl[x^{-n}f_n(x)\bigr] = -x^{-n}f_{n+1}(x) .
   $$

5. **Rayleigh formulas.** For every $n \ge 0$,

   $$
   j_n(x) = (-1)^{n}x^{n}\Bigl(\frac{1}{x}\frac{d}{dx}\Bigr)^{n}\frac{\sin x}{x} ,
   \qquad
   y_n(x) = -(-1)^{n}x^{n}\Bigl(\frac{1}{x}\frac{d}{dx}\Bigr)^{n}\frac{\cos x}{x} ,
   $$

   $$
   h^{(1)}_n(x) = -i\,(-1)^{n}x^{n}\Bigl(\frac{1}{x}\frac{d}{dx}\Bigr)^{n}\frac{e^{ix}}{x} ,
   \qquad
   h^{(2)}_n(x) = i\,(-1)^{n}x^{n}\Bigl(\frac{1}{x}\frac{d}{dx}\Bigr)^{n}\frac{e^{-ix}}{x} .
   $$

6. **Small argument.** For $x \ll 1$,

   $$
   j_n(x) \approx \frac{x^{n}}{(2n+1)!!} ,
   \qquad
   y_n(x) \approx -\frac{(2n-1)!!}{x^{n+1}} ,
   $$

   so $j_n$ is regular at the origin and vanishes there like $x^{n}$ (and $j_0(0) = 1$), while $y_n$ diverges like $x^{-n-1}$. The spherical Hankel functions diverge at the same rate, going as $\pm i\,y_n(x)$: $h^{(1)}_n \approx i\,y_n$ and $h^{(2)}_n \approx -i\,y_n$, since the regular part $j_n$ is negligible there.

7. **Large argument.** For $x \gg n(n+1)/2$,

   $$
   j_n(x) \sim \frac{1}{x}\sin\Bigl(x - \frac{n\pi}{2}\Bigr) ,
   \qquad
   y_n(x) \sim -\frac{1}{x}\cos\Bigl(x - \frac{n\pi}{2}\Bigr) ,
   $$

   $$
   h^{(1)}_n(x) \sim -i\,\frac{e^{i(x-n\pi/2)}}{x} ,
   \qquad
   h^{(2)}_n(x) \sim i\,\frac{e^{-i(x-n\pi/2)}}{x} .
   $$

   So $j_n$ and $y_n$ describe standing spherical waves and $h^{(1)}_n$, $h^{(2)}_n$ travelling ones: with a time factor $e^{-i\omega t}$, $h^{(1)}_n$ is outgoing and $h^{(2)}_n$ incoming.
:::

:::statement[The Rayleigh plane-wave expansion]{provenance=adapted src="hassani-2013:§19.7.4, Eqs. (19.43)-(19.45), pp. 594-595"}
Let $k > 0$, let $\mathbf{k}$ be a vector with $|\mathbf{k}| = k$, and let $\gamma$ be the angle between $\mathbf{k}$ and $\mathbf{r}$, so that $\mathbf{k}\cdot\mathbf{r} = kr\cos\gamma$. Then

$$
e^{i\mathbf{k}\cdot\mathbf{r}} \;=\; \sum_{l=0}^{\infty}(2l+1)\,i^{\,l}\,j_l(kr)\,P_l(\cos\gamma) ,
$$

with $P_l$ the :ref[Legendre polynomials]{to=spec.legendre-polynomials}. In particular, taking $\mathbf{k}$ along the polar axis,

$$
e^{ikr\cos\theta} \;=\; \sum_{l=0}^{\infty}(2l+1)\,i^{\,l}\,j_l(kr)\,P_l(\cos\theta) .
$$

Applying the addition theorem for spherical harmonics to $P_l(\cos\gamma)$ turns this into the expansion of a plane wave in :ref[spherical harmonics]{to=spec.spherical-harmonics}, which is the form used in scattering theory.
:::

:::idea{provenance=original}
Three facts are doing all the work, and they are worth separating.

**Why the functions are elementary.** Bessel's equation at order $\nu$ becomes, after the substitution that removes the first-derivative term, $v'' + \bigl(1 - \tfrac{4\nu^{2}-1}{4x^{2}}\bigr)v = 0$. At $\nu = \tfrac12$ the bracket is exactly $1$: the equation is $v'' + v = 0$, whose solutions are $\sin x$ and $\cos x$. Half-integer order is the one place where Bessel's equation degenerates to the harmonic oscillator, and that is the whole reason $j_0 = \sin x/x$ rather than a transcendental new function. Everything else in the family descends from that one coincidence.

**Why the Rayleigh formula is the right way down the family.** Among the recurrences, the one that matters is $\frac{d}{dx}[x^{-n}f_n] = -x^{-n}f_{n+1}$, because it expresses $f_{n+1}$ in terms of a single differentiation of $f_n$ — no second function, no second index. Rearranged it reads $f_{n+1} = -x^{n}\frac{d}{dx}(x^{-n}f_n)$, and iterating from $n = 0$ collapses the whole chain of operators $-x^{n}\frac{d}{dx}x^{-n}$ into one clean expression $(-1)^{n}x^{n}(x^{-1}d/dx)^{n}$. This is the same mechanism as a Rodrigues formula for orthogonal polynomials: a first-order ladder operator applied $n$ times to the seed.

**Why the plane-wave expansion has the coefficients it has.** A plane wave solves the Helmholtz equation, so it must be a superposition of the regular solutions $j_l(kr)$ times angular functions; the exponential is finite everywhere, which excludes $y_l$, and it is axially symmetric about $\mathbf{k}$, which leaves only the $m = 0$ harmonics, that is the Legendre polynomials. So the *form* $\sum_lA_lj_l(kr)P_l(\cos\theta)$ is forced before any computation. To find $A_l$, project with $P_l$ and then look at small $kr$: on the left the lowest power of $kr$ that survives the projection is $(kr)^{l}$, because $\int_{-1}^{1}P_l(u)u^{m}\,du$ vanishes for $m < l$ by orthogonality; on the right $j_l(kr)$ also starts at $(kr)^{l}$. Matching the two coefficients of $(kr)^{l}$ is one line of factorials, and the double factorial identity $(2l+1)! = (2l+1)!!\,2^{l}l!$ makes everything cancel down to $i^{l}(2l+1)$.
:::

:::proof[Reduction to half-integer order, and $j_0$, $y_0$]{provenance=adapted src="rhb-2006:§18.6, p. 614; arfken-2013:§14.7, Eqs. (14.149)-(14.151), pp. 698-699; strauss-2008:§10.5, Eq. (11) and the line after it, p. 285"}
**Step 1 (change of dependent variable).** Put $x = kr$ and write $R = x^{-1/2}Z(x)$. Then

$$
R' = x^{-1/2}Z' - \tfrac12 x^{-3/2}Z ,
\qquad
R'' = x^{-1/2}Z'' - x^{-3/2}Z' + \tfrac34 x^{-5/2}Z ,
$$

where the prime is $d/dx$. Substituting into $x^{2}R'' + 2xR' + [x^{2}-n(n+1)]R = 0$ and collecting,

$$
x^{3/2}Z'' + \bigl(-x^{1/2} + 2x^{1/2}\bigr)Z' + \Bigl(\tfrac34x^{-1/2} - x^{-1/2} + x^{3/2} - n(n+1)x^{-1/2}\Bigr)Z = 0 .
$$

Multiplying by $x^{1/2}$,

$$
x^{2}Z'' + xZ' + \Bigl(x^{2} - n(n+1) - \tfrac14\Bigr)Z = 0 .
$$

**Step 2 (identify the order).** Since $n(n+1) + \tfrac14 = \bigl(n+\tfrac12\bigr)^{2}$, this is Bessel's equation of order $\nu = n+\tfrac12$. Hence $Z$ is a combination of $J_{n+1/2}$ and $Y_{n+1/2}$, and $R = x^{-1/2}Z$ is the corresponding combination of $j_n$ and $y_n$ up to the constant $\sqrt{\pi/2}$ built into the definitions.

**Step 3 (the seed functions).** Half-integer order is the one case in which Bessel's equation is elementary. Removing the first-derivative term from $z^{2}u'' + zu' + (z^{2}-s^{2})u = 0$ by $u = z^{-1/2}v$ gives

$$
v'' + \Bigl(1 - \frac{s^{2}-\tfrac14}{z^{2}}\Bigr)v \;=\; 0
$$

:cite[]{work=strauss-2008 loc="§10.5, Eq. (10), p. 284"}, and at $s = \tfrac12$ the bracket is exactly $1$: the equation is $v'' + v = 0$. So $J_{1/2}$ and $J_{-1/2}$ are $z^{-1/2}\sin z$ and $z^{-1/2}\cos z$ up to normalisation, and the standard normalisation makes this

$$
J_{1/2}(x) = \sqrt{\frac{2}{\pi x}}\,\sin x ,
\qquad
J_{-1/2}(x) = \sqrt{\frac{2}{\pi x}}\,\cos x
$$

:cite[]{work=strauss-2008 loc="§10.5, Eq. (11) and the sentence after it, p. 285"}. Therefore

$$
j_0(x) = \sqrt{\frac{\pi}{2x}}\cdot\sqrt{\frac{2}{\pi x}}\sin x = \frac{\sin x}{x} .
$$

For $y_0$, note that at half-integer order the definition of $Y_\nu$ simplifies: with $\nu = n+\tfrac12$ one has $\cos\nu\pi = 0$ and $\sin\nu\pi = (-1)^{n}$, so

$$
Y_{n+1/2}(x) = \frac{\cos\nu\pi\,J_\nu(x) - J_{-\nu}(x)}{\sin\nu\pi}\bigg|_{\nu = n+1/2} = (-1)^{n+1}J_{-n-1/2}(x) ,
$$

which is item 1 of the statement after multiplying by $\sqrt{\pi/2x}$. At $n = 0$ it gives $Y_{1/2} = -J_{-1/2}$ and hence $y_0(x) = -\cos x/x$. $\square$
:::

:::proof[The recurrences and the Rayleigh formulas]{provenance=adapted src="arfken-2013:§14.7, Eqs. (14.169)-(14.176), pp. 702-703; rhb-2006:§18.6, the derivation of Eq. (18.106), p. 616"}
**Step 1 (transfer the Bessel recurrences).** The :ref[Bessel functions of the first kind]{to=spec.bessel-first-kind} satisfy

$$
J_{\nu-1} + J_{\nu+1} = \frac{2\nu}{x}J_\nu ,
\qquad
\frac{d}{dx}\bigl[x^{\nu}J_\nu\bigr] = x^{\nu}J_{\nu-1} ,
\qquad
\frac{d}{dx}\bigl[x^{-\nu}J_\nu\bigr] = -x^{-\nu}J_{\nu+1} ,
$$

and so does $Y_\nu$, hence also $H^{(1)}_\nu$ and $H^{(2)}_\nu$, which are constant-coefficient combinations of the two. Put $\nu = n+\tfrac12$.

For the first, multiply through by $\sqrt{\pi/2x}$: the factor is the same at every order, and $2\nu = 2n+1$, so

$$
f_{n-1}(x) + f_{n+1}(x) = \frac{2n+1}{x}f_n(x) .
$$

For the third, observe that $x^{-n}f_n = \sqrt{\pi/2}\;x^{-n-1/2}J_{n+1/2} = \sqrt{\pi/2}\;x^{-\nu}J_\nu$ — the half-power in the definition of $f_n$ is exactly what is needed to turn $x^{-n}$ into $x^{-\nu}$. Hence

$$
\frac{d}{dx}\bigl[x^{-n}f_n\bigr] = \sqrt{\pi/2}\;\frac{d}{dx}\bigl[x^{-\nu}J_\nu\bigr] = -\sqrt{\pi/2}\;x^{-\nu}J_{\nu+1} = -x^{-n}\sqrt{\frac{\pi}{2x}}J_{n+3/2} = -x^{-n}f_{n+1} .
$$

The same device on the second gives $\frac{d}{dx}[x^{n+1}f_n] = x^{n+1}f_{n-1}$, since $x^{n+1}f_n = \sqrt{\pi/2}\,x^{\nu}J_\nu$. Carrying out the two differentiations by the product rule turns them into

$$
f_{n-1} = f_n' + \frac{n+1}{x}f_n ,
\qquad
f_{n+1} = -f_n' + \frac{n}{x}f_n ,
$$

whose sum reproduces $f_{n-1}+f_{n+1} = \tfrac{2n+1}{x}f_n$ once more (the $f_n'$ cancels), and whose combination $n\times(\text{first}) - (n+1)\times(\text{second})$ cancels the $f_n$ terms instead and leaves the remaining recurrence $nf_{n-1} - (n+1)f_{n+1} = (2n+1)f_n'$.

**Step 2 (one step of the ladder).** Rearranging the third identity,

$$
f_{n+1}(x) = -x^{n}\frac{d}{dx}\bigl[x^{-n}f_n(x)\bigr] .
$$

**Step 3 (induction).** Claim: $f_n(x) = (-1)^{n}x^{n}\bigl(\tfrac1x\tfrac{d}{dx}\bigr)^{n}f_0(x)$ for every $n \ge 0$. For $n = 0$ both sides are $f_0$. Assume it for $n$. Then by Step 2,

$$
f_{n+1} = -x^{n}\frac{d}{dx}\Bigl[x^{-n}\cdot(-1)^{n}x^{n}\bigl(\tfrac1x\tfrac{d}{dx}\bigr)^{n}f_0\Bigr]
= (-1)^{n+1}x^{n}\frac{d}{dx}\bigl(\tfrac1x\tfrac{d}{dx}\bigr)^{n}f_0 ,
$$

the $x^{-n}$ and $x^{n}$ cancelling inside the bracket. Writing $x^{n}\frac{d}{dx} = x^{n+1}\cdot\tfrac1x\tfrac{d}{dx}$ gives

$$
f_{n+1} = (-1)^{n+1}x^{n+1}\bigl(\tfrac1x\tfrac{d}{dx}\bigr)^{n+1}f_0 ,
$$

which is the claim at $n+1$. Inserting the seeds $j_0 = \sin x/x$, $y_0 = -\cos x/x$, $h^{(1)}_0 = -ie^{ix}/x$ and $h^{(2)}_0 = ie^{-ix}/x$ from the previous proof gives the four Rayleigh formulas of item 5. Since each application of $\tfrac1x\tfrac{d}{dx}$ to a combination of $\sin x$, $\cos x$ and inverse powers of $x$ returns another such combination, item 3 follows: every $j_n$ and $y_n$ is elementary. $\square$
:::

:::proof[The plane-wave expansion]{provenance=adapted src="hassani-2013:§19.7.4, Eqs. (19.43)-(19.45) and the two integrals quoted on p. 595, pp. 594-595"}
Take $\mathbf{k} = k\hat{\mathbf{z}}$, so that $\mathbf{k}\cdot\mathbf{r} = kr\cos\theta$; the general case follows by rotating the coordinate frame, which changes $\theta$ into the angle $\gamma$ between $\mathbf{k}$ and $\mathbf{r}$ and leaves the right-hand side unchanged in form. Write $u = \cos\theta$.

**Step 1 (the form of the expansion).** The function $e^{i\mathbf{k}\cdot\mathbf{r}}$ satisfies $\nabla^{2}\psi + k^{2}\psi = 0$, since $\nabla^{2}e^{i\mathbf{k}\cdot\mathbf{r}} = -|\mathbf{k}|^{2}e^{i\mathbf{k}\cdot\mathbf{r}}$. Hence it is a superposition of the separated solutions $j_l(kr)Y_{lm}(\theta,\varphi)$ and $y_l(kr)Y_{lm}(\theta,\varphi)$. Two restrictions apply. The plane wave is finite at $r = 0$, so by item 6 the $y_l$ terms are absent. And it is independent of $\varphi$ with this choice of $\mathbf{k}$, so only $m = 0$ survives, and $Y_{l0}$ is a multiple of $P_l(u)$. Therefore

$$
e^{ikru} \;=\; \sum_{l=0}^{\infty}A_l\,j_l(kr)\,P_l(u)
$$

for some constants $A_l$, independent of $r$ and $u$.

**Step 2 (project with $P_n$).** Multiply by $P_n(u)$ and integrate over $u \in [-1,1]$, using the orthogonality $\int_{-1}^{1}P_nP_l\,du = \frac{2}{2n+1}\delta_{nl}$ of the Legendre polynomials:

$$
\int_{-1}^{1}P_n(u)\,e^{ikru}\,du \;=\; A_n\,j_n(kr)\,\frac{2}{2n+1} ,
\qquad\text{so}\qquad
A_n\,j_n(kr) = \frac{2n+1}{2}\int_{-1}^{1}P_n(u)\,e^{ikru}\,du .
$$

**Step 3 (expand the exponential and use orthogonality again).** Insert $e^{ikru} = \sum_{m\ge0}(ikr)^{m}u^{m}/m!$ and integrate term by term (legitimate because the series converges uniformly in $u$ on $[-1,1]$ for each fixed $r$):

$$
A_n\,j_n(kr) = \frac{2n+1}{2}\sum_{m=0}^{\infty}\frac{(ikr)^{m}}{m!}\int_{-1}^{1}P_n(u)\,u^{m}\,du .
$$

Now $u^{m}$ is a polynomial of degree $m$, and $P_n$ is orthogonal to every polynomial of degree less than $n$; so all the terms with $m < n$ vanish, and the series begins at $m = n$ with

$$
\int_{-1}^{1}P_n(u)\,u^{n}\,du = \frac{2^{n+1}(n!)^{2}}{(2n+1)!}
$$

:cite[]{work=hassani-2013 loc="§19.7.4, the second integral quoted on p. 595"}.

**Step 4 (match the lowest power of $kr$).** Both sides of Step 3 are power series in $kr$ beginning at order $n$: on the left, by item 6, $j_n(kr) = (kr)^{n}/(2n+1)!! + O\bigl((kr)^{n+2}\bigr)$. Equating the coefficients of $(kr)^{n}$,

$$
\frac{A_n}{(2n+1)!!} \;=\; \frac{2n+1}{2}\cdot\frac{i^{\,n}}{n!}\cdot\frac{2^{n+1}(n!)^{2}}{(2n+1)!}
\;=\; \frac{(2n+1)\,i^{\,n}\,2^{n}\,n!}{(2n+1)!} .
$$

**Step 5 (simplify with the double factorial).** Splitting $(2n+1)!$ into its odd and even factors, $(2n+1)! = (2n+1)!!\,(2n)!! = (2n+1)!!\,2^{n}n!$. Hence $2^{n}n!/(2n+1)! = 1/(2n+1)!!$ and

$$
A_n = (2n+1)!!\cdot\frac{(2n+1)\,i^{\,n}}{(2n+1)!!} = (2n+1)\,i^{\,n} .
$$

Substituting back into Step 1 gives the expansion. $\square$
:::

:::remark[Where the hypotheses are used, and what the conventions cost]{provenance=original}
**Integer $n$.** The definitions make sense for any index, but two things depend on $n$ being an integer. Item 1, $y_n = (-1)^{n+1}j_{-n-1}$, uses $\cos(n+\tfrac12)\pi = 0$ and $\sin(n+\tfrac12)\pi = (-1)^{n}$, which fail off the integers. And the terminating sum of item 3 exists only because the asymptotic series for $H^{(1)}_\nu$ truncates at half-integer $\nu$ — see :ref[]{to=spec.bessel-asymptotics}. Non-integer indices are not useful here anyway: the index comes from the angular separation constant $n(n+1)$, and single-valuedness on the sphere forces it to be a non-negative integer.

**$x > 0$.** The functions $y_n$ and $h^{(j)}_n$ are singular at the origin (item 6), and $j_n$ is defined there only by its series. In a problem posed on a ball including the centre, item 6 is what excludes $y_n$; in a spherical shell it does not, and both must be kept.

**Where the plane-wave proof uses what.** Step 1 uses completeness of the separated solutions of the Helmholtz equation and regularity of the exponential at the origin; drop regularity and $y_l$ terms reappear with arbitrary coefficients. Step 2 uses Legendre orthogonality on $[-1,1]$, which is where the weight $du = -\sin\theta\,d\theta$ of the sphere enters. Step 3 uses term-by-term integration, justified by uniform convergence of the exponential series on the compact interval. Step 4 uses that *both* sides start at order $(kr)^{n}$ — if $j_n$ began at a lower power the matching would be between different powers and would give nothing. Nothing in the argument shows the expansion converges for large $kr$; what it shows is that *if* the expansion holds, the coefficients are these. Convergence is the content of the completeness statement invoked in Step 1.

**The $x \gg n(n+1)/2$ in item 7.** The asymptotic forms are stated with this condition :cite[]{work=arfken-2013 loc="§14.7, the line after Eq. (14.182), p. 703"}, and it is not a formality: at fixed $x$ the functions $j_n$ switch, as $n$ grows past about $x$, from oscillating with amplitude $1/x$ to decaying like $x^{n}/(2n+1)!!$. Using item 7 in the regime $n \gtrsim x$ gives answers that are wrong by many orders of magnitude. The crossover is why partial-wave sums in scattering can be truncated at $l \approx kR$.

**A numerical trap in item 4.** The recurrence $f_{n+1} = \frac{2n+1}{x}f_n - f_{n-1}$ run upwards is unstable for $j_n$ when $n \gtrsim x$, because then $j_{n+1}$ is much smaller than either term on the right and is computed as the difference of two nearly equal numbers. In the worked example below, $j_3(1)$ comes out as $0.31017525 - 0.30116867$, already a loss of one and a half digits, and $j_2(1)$ loses two before that. For $n \gtrsim x$ one runs the recurrence *downwards* instead, starting from a guessed pair at high $n$ and normalising at the end against the exact $j_0$; downward recurrence is stable because it amplifies the wanted solution. This is our observation, not a statement taken from the sources.

**Conventions to watch.** Three. (i) $y_n$ versus $n_\ell$, recorded in the definition; the functions are the same. (ii) The scale factor: $j_n$, $y_n$, $h^{(1)}_n$ and $h^{(2)}_n$ all carry $\sqrt{\pi/2x}$, but the *modified* spherical functions do not match each other — Arfken defines $i_n(x) = \sqrt{\pi/2x}\,I_{n+1/2}(x)$ and $k_n(x) = \sqrt{2/\pi x}\,K_{n+1/2}(x)$, and notes explicitly that the factor in $k_n$ differs from the rest of the family :cite[]{work=arfken-2013 loc="§14.7, Eqs. (14.193)-(14.194) and the sentence after them, p. 706"}; see :ref[]{to=spec.modified-bessel} for $I_\nu$ and $K_\nu$ themselves. (iii) In the plane-wave expansion the sign convention of the exponent matters: with $e^{-i\mathbf{k}\cdot\mathbf{r}}$ the coefficients become $(2l+1)(-i)^{l}$, as conjugating the expansion shows.
:::

:::method[Solving a radial Helmholtz problem with spherical Bessel functions]{provenance=original}
Given $\nabla^{2}\psi + k^{2}\psi = 0$ on a spherical domain with data on the boundary:

1. **Separate.** Write $\psi = R(r)Y_{lm}(\theta,\varphi)$; the angular factor is a :ref[spherical harmonic]{to=spec.spherical-harmonics} and the radial factor satisfies the spherical Bessel equation with $n = l$.
2. **Write the general radial solution.** $R(r) = A\,j_l(kr) + B\,y_l(kr)$ on a shell; equivalently $A'h^{(1)}_l(kr) + B'h^{(2)}_l(kr)$ if the natural conditions are at infinity.
3. **Kill one solution with the condition at the inner end.** If the origin is in the domain and $\psi$ must be finite, item 6 forces $B = 0$.
4. **Kill one solution with the condition at the outer end.** If the domain is unbounded and only outgoing radiation is allowed, item 7 forces the combination $h^{(1)}_l$ (with the time convention $e^{-i\omega t}$).
5. **Impose the remaining boundary condition and read off the eigenvalues.** A Dirichlet condition $R(a) = 0$ with $B = 0$ requires $j_l(ka) = 0$, so $k = \alpha_{lp}/a$ where $\alpha_{lp}$ is the $p$-th positive zero of $j_l$; these are tabulated :cite[]{work=arfken-2013 loc="§14.7, Table 14.2, p. 704"}. For $l = 0$ they are exactly $p\pi$, since $j_0(x) = \sin x/x$.
6. **Expand the data.** The eigenfunctions $j_l(\alpha_{lp}r/a)$ are orthogonal on $(0,a)$ with weight $r^{2}$ — the volume element of the ball rather than the area element of the disc, which is why the weight is $r^{2}$ and not $r$ as in :ref[]{to=spec.bessel-orthogonality} :cite[]{work=arfken-2013 loc="§14.7, Eq. (14.183), p. 704"}.
7. **Evaluate with closed forms or the Rayleigh formula, not with the series.** For small $l$ use item 3 directly; for larger $l$ use item 4 upwards if $x \gtrsim l$ and downwards otherwise (see the remark).
:::

:::example[Checking a closed form, then truncating the plane-wave expansion]{provenance=original}
**Part (a): $j_2(3)$ two ways.**

From the Rayleigh formula with $n = 2$: applying $\tfrac1x\tfrac{d}{dx}$ to $j_0 = \sin x/x$ gives

$$
\frac1x\frac{d}{dx}\frac{\sin x}{x} = \frac{1}{x}\Bigl(\frac{\cos x}{x} - \frac{\sin x}{x^{2}}\Bigr) = \frac{\cos x}{x^{2}} - \frac{\sin x}{x^{3}} ,
$$

and applying it once more,

$$
\Bigl(\frac1x\frac{d}{dx}\Bigr)^{2}\frac{\sin x}{x}
= \frac{1}{x}\Bigl(-\frac{\sin x}{x^{2}} - \frac{2\cos x}{x^{3}} - \frac{\cos x}{x^{3}} + \frac{3\sin x}{x^{4}}\Bigr)
= \Bigl(\frac{3}{x^{5}} - \frac{1}{x^{3}}\Bigr)\sin x - \frac{3}{x^{4}}\cos x .
$$

Multiplying by $(-1)^{2}x^{2} = x^{2}$ reproduces the closed form of item 3,

$$
j_2(x) = \Bigl(\frac{3}{x^{3}} - \frac{1}{x}\Bigr)\sin x - \frac{3}{x^{2}}\cos x .
$$

At $x = 3$, with $\sin 3 = 0.14112001$ and $\cos 3 = -0.98999250$:

$$
j_2(3) = \Bigl(\frac{3}{27} - \frac13\Bigr)(0.14112001) - \frac{3}{9}(-0.98999250)
= (-0.22222222)(0.14112001) + 0.32999750 = 0.29863750 .
$$

Independently, from the recurrence of item 4 with $n = 1$, that is $j_2 = \frac{3}{x}j_1 - j_0$: at $x = 3$ one has $j_0(3) = \sin 3/3 = 0.04704000$ and $j_1(3) = \sin3/9 - \cos3/3 = 0.01568000 + 0.32999750 = 0.34567750$, so

$$
j_2(3) = \frac{3}{3}(0.34567750) - 0.04704000 = 0.29863750 .
$$

The two routes agree to all eight digits shown, and the exact value is $j_2(3) = 0.2986375$.

**Part (b): how fast the Rayleigh expansion converges.**

Take $kr = 1$ and $\cos\gamma = \tfrac12$, so that the exact answer is $e^{i/2} = \cos\tfrac12 + i\sin\tfrac12 = 0.8775826 + 0.4794255\,i$.

The needed function values come from item 3 and then item 4 upwards, with $\sin1 = 0.84147098$ and $\cos1 = 0.54030231$:

$$
j_0(1) = \sin 1 = 0.84147098 ,
\qquad
j_1(1) = \sin1 - \cos1 = 0.30116867 ,
$$

$$
j_2(1) = 3j_1(1) - j_0(1) = 0.90350601 - 0.84147098 = 0.06203503 ,
$$

$$
j_3(1) = 5j_2(1) - j_1(1) = 0.31017525 - 0.30116867 = 0.00900658 .
$$

(The true values are $j_2(1) = 0.06203505$ and $j_3(1) = 0.00900658$: the eight digits carried through the subtractions have already become six in $j_2$, which is the instability noted in the remark.)

The Legendre values at $u = \tfrac12$ are $P_0 = 1$, $P_1 = u = 0.5$, $P_2 = \tfrac{3u^{2}-1}{2} = -0.125$ and $P_3 = \tfrac{5u^{3}-3u}{2} = -0.4375$. The terms $(2l+1)i^{\,l}j_l(1)P_l(\tfrac12)$ are therefore

- $l = 0$: $1\cdot1\cdot0.84147098\cdot1 = +0.8414710$;
- $l = 1$: $3\cdot i\cdot0.30116867\cdot0.5 = +0.4517530\,i$;
- $l = 2$: $5\cdot(-1)\cdot0.06203505\cdot(-0.125) = +0.0387719$;
- $l = 3$: $7\cdot(-i)\cdot0.00900658\cdot(-0.4375) = +0.0275827\,i$.

Summing,

$$
\sum_{l=0}^{3} \;=\; 0.8802429 + 0.4793357\,i ,
$$

against the exact $0.8775826 + 0.4794255\,i$: an error of modulus $2.7\times10^{-3}$. Continuing with $j_4(1) = 0.00101102$ and $j_5(1) = 0.00009256$ (computed from the series of item 2, which is stable where the upward recurrence is not), together with $P_4(\tfrac12) = -0.2890625$ and $P_5(\tfrac12) = 0.0898438$, the next two terms are

$$
9\cdot1\cdot0.00101102\cdot(-0.2890625) = -0.0026302 ,
\qquad
11\cdot i\cdot0.00009256\cdot0.0898438 = +0.0000915\,i ,
$$

giving

$$
\sum_{l=0}^{5} \;=\; 0.8776127 + 0.4794272\,i ,
$$

an error of modulus $3.0\times10^{-5}$, a hundredfold improvement for two more terms. The reason is item 6: at $kr = 1$ the factor $j_l(1) \approx 1/(2l+1)!!$ shrinks by roughly an order of magnitude at each step, as the list $0.841$, $0.301$, $0.0620$, $0.00901$, $0.00101$, $0.0000926$ shows. All function values are rounded from a 25-digit computation.
:::

:::application[Scattering, radiation, and bound states in a sphere]{provenance=adapted src="arfken-2013:§14.7, Example 14.7.1, pp. 705-706, and Eqs. (14.179)-(14.182), p. 703; hassani-2013:§19.7.3, the hard-sphere energy levels, pp. 593-594, and Problem 22.35, p. 698"}
**Partial-wave analysis.** The reason the Rayleigh expansion matters in physics is that it converts an incoming plane wave into a sum over angular momenta, each term of which a spherically symmetric scatterer treats independently. Writing the incident wave as $\sum_l(2l+1)i^{l}j_l(kr)P_l(\cos\theta)$ and the scattered field as a sum of outgoing $h^{(1)}_l(kr)$, the effect of the target on the $l$-th channel reduces, by item 7, to a single phase shift: $j_l(kr) \sim \sin(kr - l\pi/2)/kr$ becomes $\sin(kr - l\pi/2 + \delta_l)/kr$. Because $j_l(kr)$ is tiny for $l \gtrsim kR$ (item 6, and the crossover discussed in the remark), only a finite number of channels contribute to scattering from a target of radius $R$, and that is what makes the method practical.

**Multipole radiation.** The outgoing solutions $h^{(1)}_l(kr)Y_{lm}$ are the electric and magnetic multipole fields. Item 7 gives their far field, $h^{(1)}_l(kr) \sim -i\,e^{i(kr - l\pi/2)}/kr$, so every multipole radiates as $1/r$ with an $l$-dependent phase; item 6 gives their behaviour near the source, $h^{(1)}_l \approx i\,y_l \approx -i(2l-1)!!/(kr)^{l+1}$, which is the static $2^{l}$-pole field. The single function $h^{(1)}_l$ interpolates between the static multipole and the radiation field.

**The Helmholtz Green's function.** The free Green's function of $\nabla^{2}+k^{2}$ in three dimensions decomposes as a sum over $l$ and $m$ of $j_l(kr_<)h^{(1)}_l(kr_>)$ times spherical harmonics of the two directions, the regular solution being used for the inner point and the outgoing one for the outer :cite[Hassani]{work=hassani-2013 loc="Problem 22.35, p. 698"}. Letting the outer point go to infinity in that identity reproduces the plane-wave expansion, now in spherical-harmonic form; the construction itself is in :ref[]{to=green.helmholtz-green-functions}.

**Bound states in a sphere.** For a particle confined to a hard sphere of radius $a$, the Schrödinger equation is the Helmholtz equation with $k^{2} = 2mE/\hbar^{2}$, and the method above applies verbatim: regularity at the centre leaves $j_l$, the wall condition requires $j_l(ka) = 0$, and the energies are $E_{lp} = \hbar^{2}\alpha_{lp}^{2}/(2ma^{2})$ with $\alpha_{lp}$ the zeros of $j_l$ :cite[]{work=hassani-2013 loc="§19.7.3, pp. 593-594"}; :cite[Arfken]{work=arfken-2013 loc="Example 14.7.1, pp. 705-706"} works the ground state. The lowest level is $l = 0$, where $\alpha_{01} = \pi$ exactly because $j_0 = \sin x/x$, giving $E_{\min} = \pi^{2}\hbar^{2}/(2ma^{2})$. The pattern — a zero-point energy set by the first zero of $j_0$, a discrete spectrum, and an $l$-dependence that pushes higher angular momenta up in energy — is the generic shape of a three-dimensional bound-state problem. The related :ref[Schrödinger problems]{to=pde.schrodinger-equation} with a finite well use the modified spherical functions outside the well, where the solution must decay.
:::
