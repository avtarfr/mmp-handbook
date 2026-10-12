---
id: complex.series-summation
title: Summing series with residues
kind: method
level: core
summary: Multiplying a function by $\pi\cot\pi z$, whose residue at every integer is $1$, turns an infinite sum over the integers into a contour integral that vanishes; the sum is then minus the residues at the poles of the function, and $\pi\csc\pi z$ does the same for alternating sums.
prereqs: [complex.residue-theorem, complex.singularities, complex.contour-integrals, complex.liouville-maximum-modulus]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§25.4, Summation of series, and the worked evaluation of $\\sum_{n}(a+n)^{-2}$ via $\\oint \\pi\\cot\\pi z\\,(a+z)^{-2}dz$, Eq. (25.23), pp. 882-883"
    pages: "882-883"
    role: the method; the residue of $\\cot\\pi z$ at an integer by local expansion; the large-circle estimate; the remark that $\\csc\\pi z$ handles alternating series because its residue at $n$ is $(-1)^n/\\pi$
  - work: arfken-2013
    loc: "§11.7, Pole Expansion of Meromorphic Functions and Examples 11.7.3-11.7.4, Eqs. (11.79)-(11.83), pp. 515-518"
    pages: "515-518"
    role: the residues of $\\cot z$ and $\\csc z$ at their poles, computed by l'Hopital's rule; the pole expansions of $\\cot$, $\\tan$, $\\sec$ and $\\csc$
  - work: ahlfors-1979
    loc: "Ch. 4, §5.1, Exercise 1(d),(e) (poles and residues of $\\cot z$ and $\\sin^{-2}z$), p. 161"
    pages: "161"
    role: cross-check of the pole structure of the cotangent kernel
---

:::note{provenance=original}
**What it means.** A contour integral that vanishes is a statement that a sum of residues is zero. If the integrand has one simple pole at each integer, with residue $f(n)$, and a few more poles elsewhere, then that statement reads: the whole infinite sum $\sum_n f(n)$ equals minus the finitely many remaining residues. The kernel that supplies a residue $1$ at every integer is $\pi\cot\pi z$; replacing it by $\pi\csc\pi z$ gives residue $(-1)^n$ instead and therefore sums alternating series. The work is then a handful of residue computations, and the answers come out in closed form -- $\coth$ and $\operatorname{csch}$ for the two kernels -- where elementary methods give nothing.
:::

:::definition[The two kernels]{provenance=adapted src="arfken-2013:§11.7, Examples 11.7.3-11.7.4, pp. 517-518; rhb-2006:§25.4, p. 883"}
Define

$$
\kappa(z) \;=\; \pi\cot\pi z \;=\; \frac{\pi\cos\pi z}{\sin\pi z} ,
\qquad
\kappa_{\mathrm{alt}}(z) \;=\; \pi\csc\pi z \;=\; \frac{\pi}{\sin\pi z} .
$$

Both are meromorphic on $\mathbb{C}$ with poles exactly at the integers, all simple (:ref[]{to=complex.singularities}), and

$$
\operatorname*{Res}_{z=n}\kappa \;=\; 1 ,
\qquad
\operatorname*{Res}_{z=n}\kappa_{\mathrm{alt}} \;=\; (-1)^{n} ,
\qquad n \in \mathbb{Z} .
$$

For $N \in \mathbb{N}_0$ let $S_N$ be the positively oriented boundary of the square with vertices $\pm(N+\tfrac12)\pm i(N+\tfrac12)$. It encloses exactly the integers $-N, \dots, N$ and passes through no integer.
:::

:::statement[The kernels are bounded on the squares]{provenance=original}
On $S_N$, for every $N \ge 0$,

$$
\lvert \kappa(z)\rvert \;\le\; \pi\coth\frac{\pi}{2} \;\approx\; 3.4254 ,
\qquad
\lvert \kappa_{\mathrm{alt}}(z)\rvert \;\le\; \pi .
$$

In particular both are bounded on $\bigcup_N S_N$ by a constant independent of $N$.
:::

:::statement[Summation by residues]{provenance=adapted src="rhb-2006:§25.4, pp. 882-883"}
Let $f$ be meromorphic on $\mathbb{C}$ with finitely many poles, none of them at an integer, and suppose

$$
z\,f(z) \;\longrightarrow\; 0 \qquad\text{as } \lvert z\rvert\to\infty .
$$

Then both series below converge and

$$
\sum_{n=-\infty}^{\infty} f(n) \;=\; -\sum_{k}\operatorname*{Res}_{z=z_k}\Bigl[\pi\cot(\pi z)\, f(z)\Bigr] ,
\qquad
\sum_{n=-\infty}^{\infty} (-1)^{n} f(n) \;=\; -\sum_{k}\operatorname*{Res}_{z=z_k}\Bigl[\pi\csc(\pi z)\, f(z)\Bigr] ,
$$

the sums on the right running over the poles $z_k$ of $f$.

**If $f$ has a pole at an integer $m$.** The formula still holds in the form "all residues of the integrand sum to zero", with the integer $m$ now contributing the residue of $\kappa f$ at $m$ rather than the term $f(m)$: that is,

$$
\sum_{\substack{n \in \mathbb{Z} \\ n \text{ not a pole of } f}} f(n) \;+\; \sum_{k}\operatorname*{Res}_{z=z_k}\bigl[\kappa(z)f(z)\bigr] \;=\; 0 ,
$$

where now the $z_k$ include the integer poles of $f$. The same holds with $\kappa_{\mathrm{alt}}$.
:::

:::idea{provenance=original}
Build a function whose residues are the terms of the series. Since $\sin\pi z$ has a simple zero at each integer, $\pi/\sin\pi z$ and $\pi\cot\pi z$ have a simple pole at each integer, and their residues are $(-1)^n$ and $1$. Multiplying by $f$, which is regular at the integers, gives an integrand with residue $(-1)^nf(n)$ or $f(n)$ there -- the terms of the series, laid out one per pole.

Now integrate over a contour that grows to swallow the whole integer lattice. The residue theorem equates the integral to $2\pi i$ times (the partial sum plus the finitely many residues at the poles of $f$). If the integral tends to zero, the infinite sum must equal minus those finitely many residues.

For the integral to tend to zero, two things are needed: the kernel must stay bounded on the growing contour -- which it does, because $\cot$ and $\csc$ approach $\mp i$ and $0$ as $\lvert\operatorname{Im}z\rvert$ grows, and are controlled on the vertical sides by the half-integer offset -- and $f$ must decay faster than $1/\lvert z\rvert$, so that the perimeter growth is beaten.
:::

:::proof{provenance=adapted src="rhb-2006:§25.4, pp. 882-883; arfken-2013:§11.7, pp. 517-518"}
**Step 1: residues of the kernels.** The function $\sin\pi z$ has a zero at each integer $n$, and $\frac{d}{dz}\sin\pi z\big|_{z=n} = \pi\cos\pi n = \pi(-1)^{n}\ne 0$, so the zero is simple and these are all its zeros. By the quotient rule for residues (:ref[]{to=complex.residue-theorem}),

$$
\operatorname*{Res}_{z=n}\frac{\pi\cos\pi z}{\sin\pi z} \;=\; \frac{\pi\cos\pi n}{\pi\cos\pi n} \;=\; 1 ,
\qquad
\operatorname*{Res}_{z=n}\frac{\pi}{\sin\pi z} \;=\; \frac{\pi}{\pi\cos\pi n} \;=\; (-1)^{n} .
$$

(Riley, Hobson and Bence obtain the first by writing $z = n+\xi$ and expanding, which gives $\cot\pi z \approx 1/(\pi\xi)$; the two routes agree.) Since $\cos\pi z$ and $\sin\pi z$ have no common zero, the poles of both kernels are exactly the integers.

**Step 2: the bounds on $S_N$.** Write $z = x+iy$. From $\sin\pi z = \sin\pi x\cosh\pi y + i\cos\pi x\sinh\pi y$ and $\cos\pi z = \cos\pi x\cosh\pi y - i \sin\pi x\sinh\pi y$,

$$
\lvert \sin\pi z\rvert^{2} = \sin^{2}\pi x + \sinh^{2}\pi y ,
\qquad
\lvert \cos\pi z\rvert^{2} = \cos^{2}\pi x + \sinh^{2}\pi y ,
$$

using $\cosh^2 = 1+\sinh^2$. Hence

$$
\lvert\cot\pi z\rvert^{2} \;=\; \frac{\cos^{2}\pi x + \sinh^{2}\pi y}{\sin^{2}\pi x+\sinh^{2}\pi y} .
$$

*Horizontal sides*, $\lvert y\rvert = N+\tfrac12 \ge \tfrac12$: dropping $\sin^2\pi x \ge 0$ below and bounding $\cos^2\pi x\le1$ above,

$$
\lvert \cot\pi z\rvert^{2} \;\le\; \frac{1+\sinh^{2}\pi y}{\sinh^{2}\pi y} \;=\; \coth^{2}\pi\lvert y\rvert \;\le\; \coth^{2}\frac{\pi}{2} ,
$$

$\coth$ being decreasing on $(0,\infty)$. Likewise $\lvert \csc \pi z\rvert \le 1/\lvert\sinh\pi y\rvert \le 1/\sinh(\pi/2) < 1$.

*Vertical sides*, $x = \pm(N+\tfrac12)$: then $\sin^2\pi x = 1$ and $\cos^2 \pi x = 0$, so

$$
\lvert\cot\pi z\rvert^{2} \;=\; \frac{\sinh^{2}\pi y}{1+\sinh^{2}\pi y} \;=\; \tanh^{2}\pi y \;\le\; 1 ,
\qquad
\lvert\csc\pi z\rvert^{2} \;=\; \frac{1}{1+\sinh^{2}\pi y} \;\le\; 1 .
$$

Since $\coth(\pi/2) = 1.0903 > 1$, the stated bounds hold on all of $S_N$: $\lvert\kappa\rvert\le\pi\coth(\pi/2)$ and $\lvert\kappa_{\mathrm{alt}}\rvert\le\pi$. The half-integer offset is what forces $\sin^2\pi x = 1$ on the vertical sides and so keeps the contour away from the zeros of $\sin\pi z$; a square through the integers would give no bound at all.

**Step 3: the integral vanishes.** Let $g = \kappa f$ and take $N$ large enough that all poles of $f$ lie inside $S_N$. The perimeter of $S_N$ has length $8(N+\tfrac12)$, and every point of $S_N$ has $\lvert z\rvert \ge N+\tfrac12$. By the $ML$ estimate (:ref[]{to=complex.contour-integrals}),

$$
\left\lvert \oint_{S_N} \kappa(z) f(z)\, dz\right\rvert
\;\le\; 8\Bigl(N+\tfrac12\Bigr)\cdot \pi\coth\frac\pi2 \cdot \max_{S_N}\lvert f\rvert
\;\le\; 8\pi\coth\frac{\pi}{2}\cdot \max_{\lvert z\rvert \ge N+1/2}\lvert z f(z)\rvert ,
$$

where the last step uses $(N+\tfrac12)\lvert f(z)\rvert \le \lvert z f(z)\rvert$ on $S_N$. By hypothesis the right-hand side tends to $0$ as $N\to\infty$. The same bound holds with $\kappa_{\mathrm{alt}}$ and the constant $\pi$.

**Step 4: apply the residue theorem.** $S_N$ is a positively oriented simple closed contour, and the integrand $\kappa f$ is analytic on and inside it except at the integers $-N,\dots,N$ -- where, $f$ being analytic there, the residue is $f(n)\cdot 1 = f(n)$ -- and at the poles $z_k$ of $f$. Hence (:ref[]{to=complex.residue-theorem})

$$
\frac{1}{2\pi i}\oint_{S_N}\kappa(z) f(z)\, dz \;=\; \sum_{n=-N}^{N} f(n) \;+\; \sum_{k}\operatorname*{Res}_{z=z_k}\bigl[\kappa f\bigr] .
$$

Letting $N\to\infty$, the left-hand side tends to $0$ by Step 3, so the symmetric partial sums converge and

$$
\sum_{n=-\infty}^{\infty} f(n) \;=\; -\sum_k \operatorname*{Res}_{z=z_k}\bigl[\kappa f\bigr] .
$$

**Step 5: the two series converge absolutely.** So far only the symmetric partial sums have been shown to converge. In fact the stated hypotheses force $f$ to be a rational function, and then absolute convergence is immediate. Let $z_1,\dots,z_J$ be the poles of $f$, with principal parts $P_j$ at $z_j$ -- each $P_j$ a finite sum of negative powers of $z - z_j$ (:ref[]{to=complex.singularities}) -- and put

$$
P \;=\; \sum_{j=1}^{J} P_j , \qquad h \;=\; f - P .
$$

Each $P_j$ is analytic off $z_j$, and $f - P_j$ has a removable singularity at $z_j$ by the definition of the principal part, so $h$ extends to an entire function. Both $f$ and $P$ tend to $0$ as $\lvert z\rvert\to\infty$ -- $f$ because $zf(z)\to0$, and $P$ because every term is a negative power -- so $h(z)\to0$ at infinity and is therefore bounded on $\mathbb{C}$. By Liouville's theorem (:ref[]{to=complex.liouville-maximum-modulus}) $h$ is constant, and the constant is its limit at infinity, namely $0$. Hence $f = P$ is rational.

Write $f = p/q$ in lowest terms. Then $zf(z)\to0$ forces $\deg q \ge \deg p + 2$, so there are $C$ and $N_0$ with $\lvert f(x)\rvert \le C x^{-2}$ for real $\lvert x\rvert \ge N_0$. Therefore $\sum_{n}\lvert f(n)\rvert < \infty$: both series converge absolutely, and the symmetric limit found in Step 4 is their sum. The alternating case is identical with $\kappa_{\mathrm{alt}}$, whose residue at $n$ is $(-1)^n$, and $\lvert(-1)^nf(n)\rvert = \lvert f(n)\rvert$.

**The case of a pole at an integer.** Nothing in Step 4 used that the integers are not poles of $f$ except the identification of the residue at $n$ as $f(n)$. If $f$ has a pole at $m \in \mathbb{Z}$ then $\kappa f$ has a pole of higher order there, and that point simply joins the list of $z_k$; the displayed identity becomes the statement that all residues of $\kappa f$ sum to zero. $\square$
:::

:::method[Recipe]{provenance=adapted src="rhb-2006:§25.4, pp. 882-883"}
1. **Write the series as $\sum_{n\in\mathbb{Z}} f(n)$ or $\sum_{n\in\mathbb{Z}}(-1)^n f(n)$** for a single meromorphic $f$. A one-sided sum $\sum_{n\ge1}$ is obtained afterwards from the two-sided one using the symmetry of $f$; for even $f$, $\sum_{n\ge1} f(n) = \tfrac12\bigl(\sum_{n\in\mathbb{Z}}f(n) - f(0)\bigr)$.
2. **Check the decay.** Verify $z f(z)\to0$; for a rational $f = p/q$ this means $\deg q \ge \deg p + 2$.
3. **Choose the kernel:** $\pi\cot\pi z$ for a plain sum, $\pi\csc\pi z$ for an alternating one.
4. **Find the poles of $f$** and compute the residue of (kernel)$\times f$ at each, using $\cot(iu) = -i\coth u$ and $\csc(iu) = -i\operatorname{csch} u$ when the poles are imaginary. If $f$ has a pole at an integer, include it and remember to omit that term from the sum.
5. **The two-sided sum is minus the total of those residues.**
6. **Check.** The answer must be real and of the right sign; summing twenty or so terms numerically settles it. A useful limiting check: as the parameter that moves $f$'s poles to infinity is taken to its limit, the closed form should reduce to something known.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Half-integer sides.** The whole method rests on the contour avoiding the zeros of $\sin\pi z$ by a fixed margin. On a square through the integers the kernel is unbounded and Step 3 fails.
- **$zf(z)\to0$, not merely $f\to0$.** The perimeter grows like $N$, so $f$ must beat $1/N$. For $f(z) = 1/z$ the method fails -- as it must, since $\sum_{n\ne0}1/n$ is only conditionally summable and $\sum_{n\in\mathbb Z}$ is not defined.
- **The hypotheses are more restrictive than they look.** Step 5 shows that a function meromorphic on $\mathbb{C}$ with finitely many poles and $zf(z)\to0$ is necessarily *rational*, with $\deg q \ge \deg p + 2$. So the natural domain of the method is rational summands, and the convergence of the two series is not an extra assumption but a consequence. A summand like $1/(e^{n}+1)$, decaying far faster, is not covered: it is not the restriction to $\mathbb{Z}$ of a function with finitely many poles, and summing it needs a kernel adapted to its own poles.
- **No pole of $f$ at an integer, unless handled explicitly.** Otherwise a term of the series is infinite. The corrected form of the statement is what makes the classical evaluation of $\sum 1/n^2$ work, where $f = 1/z^2$ has its pole exactly at $n=0$.
- **Boundedness of the kernel is uniform, the decay of $f$ is not automatic.** Riley, Hobson and Bence use a large circle rather than a square and argue that $\cot\pi z \to \mp i$ as $\operatorname{Im}z \to \pm\infty$ (p. 883). On a circle one must still keep away from the real axis near the integers; the square makes that control explicit, which is why we use it.
- **$\csc$ rather than $\cot$ for alternating sums** because its residue carries the sign: Riley, Hobson and Bence record exactly this ($(-1)^n\pi^{-1}$ for $\csc\pi z$, p. 883).
:::

:::example[A Lorentzian sum: $\sum (n^2+a^2)^{-1}$]{provenance=original}
Evaluate $\displaystyle \Sigma_1 = \sum_{n=1}^{\infty}\frac{1}{n^{2}+4}$.

**Steps 1-2.** Take $f(z) = 1/(z^{2}+4)$, which is even, so

$$
\sum_{n=1}^{\infty} f(n) \;=\; \tfrac12\left( \sum_{n=-\infty}^{\infty} f(n) - f(0)\right) \;=\; \tfrac12\left(\sum_{n\in\mathbb{Z}} f(n) - \tfrac14\right) .
$$

Here $z f(z) = z/(z^2+4) \to 0$, and $f$ has simple poles at $z = \pm 2i$, neither an integer. Both hypotheses hold.

**Steps 3-4: residues.** With $\kappa(z) = \pi\cot\pi z$ and $z^2+4 = (z-2i)(z+2i)$,

$$
\operatorname*{Res}_{z=2i}\bigl[\kappa f\bigr] \;=\; \frac{\pi\cot(2\pi i)}{2\cdot 2i} \;=\; \frac{\pi\cot(2\pi i)}{4i} .
$$

Now $\cot(iu) = \cos(iu)/\sin(iu) = \cosh u/(i\sinh u) = -i\coth u$, so $\cot(2\pi i) = -i\coth 2\pi$ and

$$
\operatorname*{Res}_{z=2i}\bigl[\kappa f\bigr] \;=\; \frac{\pi(-i\coth2\pi)}{4i} \;=\; -\frac{\pi\coth2\pi}{4} .
$$

At $z = -2i$: $\cot(-2\pi i) = +i\coth2\pi$ (the cotangent is odd) and the denominator is $-4i$, giving the same value $-\tfrac14\pi\coth2\pi$. The two residues are equal, as the evenness of $f$ and the oddness of $\cot$ together require.

**Step 5.**

$$
\sum_{n\in\mathbb{Z}}\frac{1}{n^{2}+4} \;=\; -\left(-\frac{\pi\coth2\pi}{4}-\frac{\pi\coth2\pi}{4}\right) \;=\; \frac{\pi\coth 2\pi}{2} ,
$$

and therefore

$$
\Sigma_1 \;=\; \frac12\left(\frac{\pi\coth2\pi}{2} - \frac14\right) \;=\; \frac{\pi\coth 2\pi}{4} - \frac18 .
$$

**Step 6: check.** $\coth2\pi = 1.0000069747$, so $\Sigma_1 = 0.7854036413 - 0.125 = 0.6604036413$. Direct numerical summation gives $0.6604036413$. Two sanity checks: $\coth2\pi$ is barely above $1$, so $\Sigma_1 \approx \pi/4 - 1/8 = 0.6603982$, and the first four terms already give $1/5+1/8+1/13+1/20 = 0.4519231$, below the total as they must be. The general formula is $\sum_{n\in\mathbb{Z}}(n^2+a^2)^{-1} = (\pi/a)\coth\pi a$; the limit $a\to0$ reproduces the divergence of $\sum n^{-2}+a^{-2}$ correctly, since $(\pi/a)\coth\pi a = a^{-2}+\pi^2/3+O(a^2)$.
:::

:::example[The alternating version]{provenance=original}
Evaluate $\displaystyle \Sigma_2 = \sum_{n=1}^{\infty}\frac{(-1)^{n}}{n^{2}+4}$.

The set-up is identical, with $\kappa_{\mathrm{alt}}(z) = \pi\csc\pi z$ in place of $\kappa$. Using $\csc(iu) = 1/\sin(iu) = 1/(i\sinh u) = -i\operatorname{csch}u$,

$$
\operatorname*{Res}_{z=2i}\bigl[\kappa_{\mathrm{alt}}f\bigr] \;=\; \frac{\pi\csc(2\pi i)}{4i} \;=\; \frac{\pi(-i\operatorname{csch}2\pi)}{4i} \;=\; -\frac{\pi\operatorname{csch}2\pi}{4} ,
$$

and the residue at $-2i$ is the same. Hence

$$
\sum_{n\in\mathbb{Z}}\frac{(-1)^{n}}{n^{2}+4} \;=\; \frac{\pi\operatorname{csch}2\pi}{2} ,
\qquad
\Sigma_2 \;=\; \frac12\left(\frac{\pi\operatorname{csch}2\pi}{2} - \frac14\right) \;=\; \frac{\pi\operatorname{csch}2\pi}{4} - \frac18 .
$$

**Check.** $\operatorname{csch}2\pi = 1/\sinh 2\pi = 0.0037348985$, so $\Sigma_2 = 0.0029333824 - 0.125 = -0.1220666176$. Direct numerical summation gives $-0.1220666176$. The sign is right: the first term $-1/5$ dominates. Note how the two answers differ -- $\coth$ for the plain sum, $\operatorname{csch}$ for the alternating one -- which is the whole effect of swapping the kernel.
:::

:::example[A pole at an integer: $\sum n^{-2} = \pi^2/6$]{provenance=original}
Take $f(z) = 1/z^{2}$, whose only pole, a double one, sits at the integer $z=0$. Then $zf(z) = 1/z \to 0$, so the contour estimate of Step 3 applies, and the corrected form of the statement says that all residues of $\kappa(z)/z^{2}$ sum to zero.

**Residues at $n \ne 0$.** These are $f(n) = 1/n^{2}$, as before.

**Residue at $0$.** The Laurent series of the cotangent about the origin is obtained from $\cos\pi z = 1 - \tfrac12\pi^2z^2+O(z^4)$ and $\sin\pi z = \pi z\bigl(1 - \tfrac16\pi^2z^2+O(z^4)\bigr)$:

$$
\pi\cot\pi z \;=\; \frac{1 - \tfrac12\pi^{2}z^{2}+O(z^4)}{z\bigl(1-\tfrac16\pi^{2}z^{2}+O(z^4)\bigr)}
\;=\; \frac1z\Bigl(1-\tfrac12\pi^2z^2\Bigr)\Bigl(1+\tfrac16\pi^2z^2+O(z^4)\Bigr)
\;=\; \frac1z - \frac{\pi^{2}z}{3} + O(z^{3}) .
$$

Dividing by $z^{2}$,

$$
\frac{\pi\cot\pi z}{z^{2}} \;=\; \frac{1}{z^{3}} - \frac{\pi^{2}}{3z} + O(z) ,
\qquad\text{so}\qquad
\operatorname*{Res}_{z=0}\frac{\pi\cot\pi z}{z^{2}} \;=\; -\frac{\pi^{2}}{3} .
$$

**Assemble.** All residues sum to zero:

$$
\sum_{n\ne0}\frac{1}{n^{2}} \;-\; \frac{\pi^{2}}{3} \;=\; 0 ,
\qquad\text{i.e.}\qquad
2\sum_{n=1}^{\infty}\frac{1}{n^{2}} \;=\; \frac{\pi^{2}}{3} ,
\qquad
\sum_{n=1}^{\infty}\frac{1}{n^{2}} \;=\; \frac{\pi^{2}}{6} .
$$

**Check.** $\pi^2/6 = 1.6449340668$, the known value of $\zeta(2)$. The same computation with $f(z) = 1/z^{4}$ needs the next coefficient of the cotangent expansion, $-\pi^{4}z^{3}/45$, and yields $\zeta(4) = \pi^{4}/90$; carrying the expansion further gives every $\zeta(2m)$, each a rational multiple of $\pi^{2m}$. Replacing $\kappa$ by $\kappa_{\mathrm{alt}}$ in the same computation gives $\sum_{n\ge1}(-1)^{n-1}n^{-2} = \pi^{2}/12$, since $\pi\csc\pi z = 1/z + \pi^{2}z/6+O(z^3)$ has residue $+\pi^2/6$ against $1/z^2$.
:::

:::application[Matsubara sums, lattice energies and Casimir forces]{provenance=original}
- **Matsubara sums.** In finite-temperature quantum field theory and in many-body perturbation theory, every diagram carries a sum over discrete imaginary frequencies $\omega_n = 2\pi n/\beta$ (bosonic) or $(2n+1)\pi/\beta$ (fermionic). These are converted into contour integrals by exactly this device, with $\coth(\beta z/2)$ and $\tanh(\beta z/2)$ -- the kernels whose poles sit at the Matsubara frequencies with residue $2/\beta$ -- playing the role of $\pi\cot\pi z$. The Bose and Fermi distribution functions that appear in the final answer are nothing but these kernels, and the frequency sum becomes a few residues at the poles of the propagators.
- **Lattice sums and Madelung constants.** The electrostatic energy of a one-dimensional ionic chain is $\sum_{n\ne0}(-1)^n/\lvert n\rvert$-type, and its screened or regularised versions are sums of the form treated here. The alternating kernel is the one that encodes the alternation of charge, and the closed forms in $\operatorname{csch}$ reproduce the exponential screening.
- **Casimir energies.** Mode sums $\sum_n \omega_n$ over the standing waves in a cavity are regularised and evaluated by writing them as contour integrals with a $\cot$-type kernel; the finite part, after the divergent pieces are identified as residues at the origin, is the Casimir energy. The appearance of $\zeta(2m)$ and hence of powers of $\pi$ in such results traces back to the cotangent expansion used in the third example.
- **Closed forms for sums that resist elementary methods.** $\sum_{n\ge1}(n^2+a^2)^{-1} = (\pi/2a)\coth\pi a - 1/2a^2$, derived above, is the workhorse formula behind the summation of Lorentzian lineshapes over an equally spaced comb -- a frequency comb, a set of cavity modes, or the images in a periodic Green's function -- and it converts a slowly converging sum into a function that can be differentiated and expanded.
:::
