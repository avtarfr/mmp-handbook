---
id: fourier.laplace-transform
title: The Laplace transform
kind: definition
level: core
summary: "The one-sided transform $\\bar f(s)=\\int_0^\\infty f(t)e^{-st}dt$, the half-plane on which it converges, its standard pairs and its derivative, shift and scaling rules, together with the Bromwich contour integral that inverts it."
prereqs: [fourier.fourier-transform, fourier.fourier-inversion, fourier.heaviside-step, complex.residue-theorem, complex.infinite-integrals, spec.gamma-function]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§13.2, the definition (13.53) and the abscissa $s_0$, the linearity (13.54) and the transforms of $1$, $e^{at}$ and $t^n$, pp. 453–454; Table 13.1 of standard transforms with their $s_0$, p. 455; §13.2.1, the derivative rules (13.57)–(13.58) and the integral rule (13.59), pp. 455–456; §13.2.2, the shift rules (13.60) and the delay rule, the scaling (13.61), the rules (13.62)–(13.63) and the convolution theorem, pp. 456–459; §25.5, the Bromwich integral (25.25), the position of the contour and the choice of completion, pp. 884–885; §15.1.5, the transform method for constant-coefficient ODEs, (15.31)–(15.32), p. 501"
    pages: "453-459, 501, 884-885"
    role: the definition and convention followed here, the abscissa of convergence, the table of standard pairs, all of the operational rules, the Bromwich inversion integral with the rule for placing the contour, and the scheme for solving an initial-value problem
  - work: arfken-2013
    loc: "§20.7, the definition (20.126), the exponential-order condition (20.127), the counterexample $e^{t^2}$ and the failure for $t^n$ with $n\\le-1$, p. 1008; the elementary transforms (20.129)–(20.136) and the remark that $\\bar f(s)\\to0$ as $s\\to\\infty$, pp. 1009–1010; the Heaviside and delta transforms (20.137)–(20.140), pp. 1010–1011; §20.10, the derivation of the Bromwich integral (20.198)–(20.203), the residue form (20.204), and Examples 20.10.1–20.10.2, pp. 1038–1041"
    pages: "1008-1011, 1038-1041"
    role: the existence condition and the two ways it can fail, the transform of $t^n$ through the gamma function, the derivation of the Bromwich integral from the Fourier inversion formula, and the evaluation of that integral by residues
  - work: strauss-2008
    loc: "§12.5, the definition (1) and the table of transforms (2)–(12) including the pairs with $e^{-a\\sqrt s}$, p. 353; the table of properties (i)–(ix), p. 354; the inversion formula (13) and Example 2, p. 354; Examples 3–5, solving the diffusion and wave equations on an interval and a half-line, pp. 355–356"
    pages: "353-356"
    role: the property table used to cross-check the rules, the transform pairs involving $\\sqrt s$, and the application to partial differential equations in time
  - work: evans-2010
    loc: "§4.3.3, the definition (43) of the Laplace transform of $u\\in L^1(\\mathbb{R}_+)$, the remark on when it is preferable to the Fourier transform, and Example 8 (resolvents and the Laplace transform), (44)–(45), pp. 192–193"
    pages: "192-193"
    role: the measure-theoretic form of the definition, the reason the transform suits functions defined only on $(0,\\infty)$, and the identification of the transform of a heat semigroup with the resolvent of the Laplacian
---

:::definition[The transform and its abscissa of convergence]{provenance=adapted src="rhb-2006:§13.2, (13.53), p. 453; arfken-2013:§20.7, (20.126)–(20.127), p. 1008; evans-2010:§4.3.3, (43), p. 192"}
For $f$ defined on $(0,\infty)$, the **Laplace transform** is

$$
\bar f(s) = \mathcal{L}[f(t)] = \int_0^\infty f(t)\,e^{-st}\,dt ,
$$

whenever the integral exists. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.2, (13.53), p. 453"} write it this way and take $s$ real; :cite[Evans]{work=evans-2010 loc="§4.3.3, (43), p. 192"} defines it for $u \in L^1(\mathbb{R}_+)$ and $s \ge 0$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, p. 1008 and footnote 6"} allow complex $s$. Only the values of $f$ on $(0,\infty)$ enter, which is why the transform suits an initial-value problem, where data are given at $t = 0$ and nothing is known for $t<0$. It is linear: $\mathcal{L}[af_1+bf_2] = a\bar f_1 + b\bar f_2$ wherever both transforms exist.

$f$ is of **exponential order** if there are constants $s_0$, $M$ and $t_0\ge 0$ such that

$$
\bigl\lvert e^{-s_0t}f(t)\bigr\rvert \le M \qquad\text{for all } t > t_0 ,
$$

the condition of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, (20.127), p. 1008"}. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.2, p. 453"} record the resulting picture: for a given $f$ there is in practice a real number $s_0$, the **abscissa of convergence**, with the integral existing for $s > s_0$ and diverging for $s \le s_0$. Each line of the table below carries its own $s_0$.
:::

:::statement[Existence, and standard pairs]{provenance=adapted src="arfken-2013:§20.7, (20.127)–(20.140), pp. 1008–1011; rhb-2006:§13.2, Table 13.1, p. 455; strauss-2008:§12.5, (2)–(12), p. 353"}
**Existence.** If $f$ is of exponential order with constant $s_0$, and is integrable on $(0,t_0)$, then $\bar f(s)$ exists for $s > s_0$. Allowing complex $s$, :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, p. 1039"} require $\mathrm{Re}\,s \ge \beta$ for convergence when $f$ grows no faster than $e^{\beta t}$, so the natural domain is a right half-plane.

**Decay of the transform.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, p. 1010"} state that whenever $\bar f$ is a Laplace transform, $\bar f(s)\to 0$ as $s\to\infty$, and conclude that a function of $s$ growing like a positive power of $s$ is the transform of nothing. Step 1 of the proof below establishes this for every $f$ of exponential order, which is the case the statement is about. It does not cover the last row of the table: the same book's convention $\mathcal{L}[\delta(t)] = 1$ for an impulse at the endpoint produces a transform that does not decay, and $\delta$ is not a function of exponential order. The two statements sit side by side in :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, pp. 1010–1011"} without being reconciled; we report both and read the decay claim as a statement about transforms of functions.

**Standard pairs.** With $s_0$ as given by :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.2, Table 13.1, p. 455"}:

| $f(t)$ | $\bar f(s)$ | $s_0$ |
|---|---|---|
| $1$ | $1/s$ | $0$ |
| $t^n$ $(n > -1)$ | $\Gamma(n+1)/s^{n+1}$ | $0$ |
| $e^{at}$ | $1/(s-a)$ | $a$ |
| $t^ne^{at}$ | $n!/(s-a)^{n+1}$ | $a$ |
| $\sin bt$ | $b/(s^2+b^2)$ | $0$ |
| $\cos bt$ | $s/(s^2+b^2)$ | $0$ |
| $\sinh at$ | $a/(s^2-a^2)$ | $\lvert a\rvert$ |
| $\cosh at$ | $s/(s^2-a^2)$ | $\lvert a\rvert$ |
| $e^{at}\sin bt$ | $b/[(s-a)^2+b^2]$ | $a$ |
| $t^{-1/2}$ | $(\pi/s)^{1/2}$ | $0$ |
| $H(t-t_0)$ | $e^{-st_0}/s$ | $0$ |
| $\delta(t-t_0)$ | $e^{-st_0}$ | $0$ |

The entry for $t^n$ is :cite[Arfken, Weber and Harris']{work=arfken-2013 loc="§20.7, (20.136), p. 1009"} (20.136), valid for every real $n > -1$ through the :ref[gamma function]{to=spec.gamma-function}; for integer $n$ it reduces to $n!/s^{n+1}$. The entries for $H$ and $\delta$ use :ref[the Heaviside step]{to=fourier.heaviside-step}, and $\mathcal{L}[\delta(t)] = 1$ is the convention :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, (20.140), p. 1011"} adopt for an impulse sitting at the endpoint. :cite[Strauss]{work=strauss-2008 loc="§12.5, (10)–(12), p. 353"} adds the pairs $a(4\pi t^3)^{-1/2}e^{-a^2/4t}\leftrightarrow e^{-a\sqrt s}$ and $(\pi t)^{-1/2}e^{-a^2/4t}\leftrightarrow s^{-1/2}e^{-a\sqrt s}$, which are what make the transform useful for diffusion on a half-line.
:::

:::statement[Operational rules]{provenance=adapted src="rhb-2006:§13.2.1–§13.2.2, (13.57)–(13.64), pp. 455–459; strauss-2008:§12.5, properties (i)–(ix), p. 354"}
Let $\bar f = \mathcal{L}[f]$ and $\bar g = \mathcal{L}[g]$, let $a$ be a real constant, $b > 0$ and $n \in \mathbb{N}$. Only rule 5 needs $a > 0$; rule 3 and the table entries built on $e^{at}$ hold for either sign, and the half-plane moves with $a$, which is why the table's $s_0$ column reads $a$ and not $\lvert a\rvert$ for those rows.

1. **Derivatives.** $\mathcal{L}[f'] = s\bar f(s) - f(0)$, and in general
   $$
   \mathcal{L}\bigl[f^{(n)}\bigr] = s^n\bar f(s) - s^{n-1}f(0) - s^{n-2}f'(0) - \cdots - f^{(n-1)}(0) .
   $$
2. **Integral.** $\displaystyle \mathcal{L}\left[\int_0^t f(u)\,du\right] = \frac{1}{s}\,\bar f(s)$.
3. **Shift in $s$.** $\mathcal{L}\bigl[e^{at}f(t)\bigr] = \bar f(s-a)$: multiplying by $e^{at}$ moves the origin of $s$.
4. **Delay in $t$.** $e^{-bs}\bar f(s) = \mathcal{L}[g]$ where $g(t) = 0$ for $0<t\le b$ and $g(t) = f(t-b)$ for $t > b$; equivalently $\mathcal{L}[H(t-b)f(t-b)] = e^{-bs}\bar f(s)$.
5. **Scaling.** For $a > 0$, $\mathcal{L}[f(at)] = a^{-1}\bar f(s/a)$.
6. **Multiplication by $t^n$.** $\mathcal{L}[t^nf(t)] = (-1)^n\,d^n\bar f/ds^n$.
7. **Division by $t$.** $\displaystyle \mathcal{L}\left[\frac{f(t)}{t}\right] = \int_s^\infty \bar f(u)\,du$, provided $\lim_{t\to0}f(t)/t$ exists.
8. **Convolution.** $\displaystyle \mathcal{L}\left[\int_0^t f(u)g(t-u)\,du\right] = \bar f(s)\,\bar g(s)$.

Rules 1–7 are :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§13.2.1–§13.2.2, pp. 455–457"} (13.57)–(13.63) and rule 8 their convolution theorem. :cite[Strauss']{work=strauss-2008 loc="§12.5, properties (i)–(ix), p. 354"} table of properties carries seven of the eight — all but the integral rule 2 — as (ii)–(ix), with rule 1 written out only for $n = 1, 2$ and rule 6 only for $n = 1$; his remaining entry (i) is linearity, which we have put in the definition block above.
:::

:::statement[The Bromwich inversion integral]{provenance=adapted src="rhb-2006:§25.5, (25.24)–(25.25), p. 884; arfken-2013:§20.10, (20.203)–(20.204), pp. 1039–1040"}
Let $f$ be of exponential order, so that $\bar f(s) = \int_0^\infty e^{-st}f(t)\,dt$ converges for $\mathrm{Re}\,s > s_0$, and let $f$ in addition be piecewise smooth on every bounded subinterval of $(0,\infty)$. Then for every $t>0$

$$
\frac{f(t^{+}) + f(t^{-})}{2} = \frac{1}{2\pi i}\int_{\lambda-i\infty}^{\lambda+i\infty} e^{st}\,\bar f(s)\,ds ,
$$

the **Bromwich integral**, taken as a symmetric limit up the vertical line $\mathrm{Re}\,s = \lambda$, where $\lambda$ is chosen so that every singularity of $\bar f$ lies strictly to its left. At every $t$ where $f$ is continuous the left-hand side is $f(t)$, so the formula recovers $f$ at every point of continuity. At a jump it returns the midpoint, which is in general not $f(t)$; the remark below explains why no formula built from $\bar f$ could do better.

The regularity hypothesis is not decoration. Both sources hedge at exactly this point: :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, (20.199)–(20.201), pp. 1038–1039"} ask of the damped function exactly the restriction its Fourier-integral representation needs, which at the opening of the section they name as the Dirichlet conditions, and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.5, p. 884"} call a proof valid for arbitrary $f$ and $\bar f$ hard to come by, and offer a verification in its place. Piecewise smoothness is the hypothesis under which :ref[Fourier inversion]{to=fourier.fourier-inversion} is available in this handbook, and it is what step 4 of the proof below uses.

On the contour: :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.5, (25.25), p. 884"} state the formula with $\lambda > 0$ and all singularities of $\bar f$ to the left of the line; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, (20.203), p. 1039"} write $\beta$ for $\lambda$ and note that $\bar f$ is analytic in $\mathrm{Re}\,s\ge\beta$, so the integrand can be singular only to the left. It is also called the Fourier-Mellin integral.

**Evaluation by residues.** If $t > 0$ and $\bar f$ is analytic apart from isolated singularities, has no branch points, and is small for large $\lvert s\rvert$, the contour may be closed by a large semicircle in the left half-plane which contributes nothing, and then

$$
\frac{f(t^{+})+f(t^{-})}{2} = \sum \text{(residues of } e^{st}\bar f(s)\text{ at the singularities with } \mathrm{Re}\,s < \lambda) ,
$$

which is :cite[Arfken, Weber and Harris']{work=arfken-2013 loc="§20.10, (20.204), p. 1039"} equation (20.204), written by them with $F(t)$ on the left under the same reading as above. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.5, p. 885"} describe the completions to use when instead $\bar f$ has infinitely many poles (a sequence of arcs threading between them, giving $f$ as a series) or branch points (a cut plane with a keyhole contour).
:::

:::idea{provenance=original}
The Laplace transform is the Fourier transform in disguise, and the disguise is a single exponential factor. Given $f$ on $(0,\infty)$ that may grow like $e^{\beta t}$, the product $e^{-\beta t}f(t)$, extended by zero to $t<0$, decays and so has a Fourier transform. Writing that transform out and renaming the variable $s = \beta + iu$ turns it into $\bar f(s)$: the Laplace transform is the Fourier transform evaluated along a vertical line in the complex plane rather than along the real axis. Everything then follows. Existence needs only that the damping beat the growth, which is the exponential-order condition. Inversion is the Fourier inversion formula with the same change of variable, and the real line of frequencies becomes the vertical Bromwich line, which must be far enough to the right that the damping still works. The derivative rule is integration by parts, and the boundary term at $t = 0$ — absent for the Fourier transform, which has no boundary — is exactly what lets initial data enter an algebraic equation.
:::

:::proof[Existence, the derivative rule, and the Bromwich formula]{provenance=adapted src="arfken-2013:§20.7, p. 1008 and §20.10, (20.199)–(20.203), pp. 1038–1039; rhb-2006:§13.2.1, (13.57), p. 455"}
**Step 1: existence.** Suppose $\lvert f(t)\rvert \le Me^{s_0t}$ for $t > t_0$ and $f$ is integrable on $(0,t_0)$. For real $s > s_0$,

$$
\int_{t_0}^\infty \lvert f(t)e^{-st}\rvert\,dt \le M\int_{t_0}^\infty e^{-(s-s_0)t}\,dt = \frac{M e^{-(s-s_0)t_0}}{s-s_0} < \infty ,
$$

and the integral over $(0,t_0)$ is finite by assumption. The same bound holds for complex $s$ with $\mathrm{Re}\,s > s_0$, since $\lvert e^{-st}\rvert = e^{-t\,\mathrm{Re}\,s}$, so the transform converges absolutely on a right half-plane. Differentiating under the integral sign, which the same bound justifies, shows $\bar f$ is analytic there. The estimate also gives $\bar f(s)\to 0$ as $\mathrm{Re}\,s\to\infty$.

**Step 2: the derivative rule.** Integrate by parts, assuming $f$ is differentiable with $f'$ again of exponential order:

$$
\int_0^\infty f'(t)e^{-st}dt = \bigl[f(t)e^{-st}\bigr]_0^\infty + s\int_0^\infty f(t)e^{-st}dt = -f(0) + s\bar f(s) ,
$$

the boundary term at infinity vanishing for $\mathrm{Re}\,s$ large enough. Applying this to $f'$ in place of $f$ gives $\mathcal{L}[f''] = s^2\bar f - sf(0)-f'(0)$, and induction gives rule 1 in general. The initial values appear because the integral starts at $t=0$: the transform of a derivative remembers where the function started.

**Step 3: damp the function.** Let $f$ be of exponential order and piecewise smooth, and choose $\beta > s_0$. Put

$$
g(t) = \begin{cases} e^{-\beta t}f(t), & t > 0,\\ 0, & t \le 0.\end{cases}
$$

Then $g$ is absolutely integrable on $\mathbb{R}$, since $\int_0^\infty e^{-\beta t}\lvert f\rvert dt$ converges by step 1. It is also piecewise smooth on every bounded interval: multiplying by the smooth factor $e^{-\beta t}$ and cutting off at $t=0$ creates at worst one further jump, at the origin.

**Step 4: apply Fourier inversion to $g$.** Integrability of $g$ by itself does not license a pointwise inversion formula — the inversion integral need not even converge — so we use the piecewise-smooth version of :ref[Fourier inversion]{to=fourier.fourier-inversion}, whose hypotheses are exactly what step 3 supplies: $g \in L^1(\mathbb{R})$ satisfying Dirichlet conditions. It returns the midpoint value and requires the integral to be read as a symmetric limit. In the angular-frequency convention of :ref[the Fourier transform]{to=fourier.fourier-transform},

$$
\frac{g(t^{+})+g(t^{-})}{2} = \lim_{R\to\infty}\frac{1}{2\pi}\int_{-R}^{R} e^{iut}\left(\int_{-\infty}^{\infty} g(v)\,e^{-iuv}\,dv\right)du
= \lim_{R\to\infty}\frac{1}{2\pi}\int_{-R}^{R} e^{iut}\left(\int_0^{\infty} f(v)\,e^{-(\beta+iu)v}\,dv\right)du .
$$

The inner integral is exactly $\bar f(\beta+iu)$.

**Step 5: undo the damping and change variable.** Fix $t>0$. The factor $e^{\beta t}$ is continuous, so multiplying the last display by it turns the left-hand side into the midpoint value of $f$ at $t$:

$$
\frac{f(t^{+})+f(t^{-})}{2} = \lim_{R\to\infty}\frac{1}{2\pi}\int_{-R}^{R} e^{(\beta+iu)t}\,\bar f(\beta+iu)\,du ,
$$

which is $f(t)$ at every $t$ where $f$ is continuous.

Now set $s = \beta+iu$, so that $ds = i\,du$ and $u$ running from $-\infty$ to $\infty$ corresponds to $s$ running up the vertical line $\mathrm{Re}\,s = \beta$. Then $du = ds/i$ and

$$
\frac{f(t^{+})+f(t^{-})}{2} = \frac{1}{2\pi i}\int_{\beta-i\infty}^{\beta+i\infty} e^{st}\,\bar f(s)\,ds ,
$$

the Bromwich integral, the contour integral again being a symmetric limit. This is the route of :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, (20.200)–(20.203), pp. 1038–1039"}. For $t < 0$ the same computation returns $0$, because $g$ vanishes there; the formula reconstructs the one-sided function, not a two-sided one.

**Step 6: residues.** Fix $t>0$ and suppose $\bar f$ is analytic except at finitely many isolated singularities, all with real part less than $\beta$, and that $\lvert\bar f(s)\rvert\to 0$ uniformly as $\lvert s\rvert\to\infty$. Close the vertical segment from $\beta-iR$ to $\beta+iR$ with the semicircular arc $\Gamma_R$ of radius $R$ to the **left**, parametrised by $s = \beta + Re^{i\theta}$, $\tfrac{\pi}{2}\le\theta\le\tfrac{3\pi}{2}$. The crude bound $\lvert e^{st}\rvert \le e^{\beta t}$ is not enough, because the arc has length $\pi R$; what saves it is that $\lvert e^{st}\rvert = e^{\beta t}e^{tR\cos\theta}$ is exponentially small except near the two ends. Writing $\theta = \tfrac{\pi}{2}+\varphi$ and using $\sin\varphi \ge 2\varphi/\pi$ on $[0,\tfrac{\pi}{2}]$,

$$
\int_{\Gamma_R}\bigl\lvert e^{st}\bigr\rvert\,\lvert ds\rvert
= e^{\beta t}R\int_0^{\pi}e^{-tR\sin\varphi}\,d\varphi
\le e^{\beta t}R\cdot\frac{\pi}{tR}
= \frac{\pi e^{\beta t}}{t} ,
$$

a bound independent of $R$. With $M(R) = \max_{\Gamma_R}\lvert\bar f\rvert \to 0$ the arc contributes at most $M(R)\pi e^{\beta t}/t \to 0$. This is Jordan's lemma; see :ref[infinite real integrals and Jordan's lemma]{to=complex.infinite-integrals}. The closed contour encircles every singularity once, counter-clockwise, so :ref[the residue theorem]{to=complex.residue-theorem} gives

$$
\frac{f(t^{+})+f(t^{-})}{2} = \sum_j \mathrm{Res}_{s=s_j}\bigl(e^{st}\bar f(s)\bigr) ,
$$

which is $f(t)$ at every $t>0$ where $f$ is continuous. When $\bar f$ is rational the right-hand side is a finite sum of terms $p_j(t)e^{s_jt}$ and hence smooth: it is then the continuous representative of $f$, which is what the method below reads off. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Exponential order is what makes step 1 work, and it can fail.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.7, p. 1008"} give $f(t) = e^{t^2}$: no $s_0$ dominates it, and $\mathcal{L}[e^{t^2}]$ exists for no $s$ at all. The transform can also fail at the other end, from a singularity at the origin rather than growth at infinity: $\int_0^\infty t^ne^{-st}dt$ diverges at $0$ for $n\le -1$, so $\mathcal{L}[t^{-1}]$ does not exist, which is why the table entry for $t^n$ carries the restriction $n>-1$.
- **The abscissa is a property of $f$, not of the formula.** $\mathcal{L}[e^{at}] = 1/(s-a)$ was derived for $s>a$, but the right-hand side is defined and analytic for all $s\ne a$. The transform is the analytic continuation of the integral, and the integral's half-plane of convergence is recorded only so that the Bromwich line can be placed correctly. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, p. 1040"} address exactly this apparent paradox when closing the contour through $\mathrm{Re}\,s<0$: the restriction $\mathrm{Re}\,s\ge\beta$ defined $\bar f$, and once defined it may be used wherever it is analytic.
- **The contour must be to the right of everything.** If $\lambda$ is placed to the left of a pole of $\bar f$, step 3 fails — the damping $e^{-\lambda t}$ no longer beats the growth of $f$ — and the integral returns a different function. For $\bar f(s) = 1/(s-2)$ the correct choice $\lambda>2$ gives $e^{2t}$, while closing to the right of the pole with $\lambda<2$ gives $-e^{2t}H(-t)$.
- **Closing to the left needs $t>0$ and decay of $\bar f$.** Both are used in step 6: for $t<0$ the exponential $e^{st}$ grows in the left half-plane and the arc does not vanish, which is the mechanism by which the formula returns $0$ there. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.10, Example 20.10.2, p. 1041"} show a case, $\bar f(s) = (1-e^{-as})/s$, where the two terms of the integrand must be closed on opposite sides depending on whether $t<a$ or $t>a$, producing a square pulse.
- **No branch points is a real restriction.** Transforms such as $e^{-a\sqrt s}$ from :cite[Strauss']{work=strauss-2008 loc="§12.5, (10), p. 353"} diffusion table have a branch point at $s=0$ and are not inverted by a finite residue sum; a keyhole contour around the cut is needed, as :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§25.5, p. 885"} describe.
- **Inversion is unique only up to negligible sets, which is why the Bromwich statement is a midpoint statement.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.2, footnote, p. 454"} note that two functions differing at finitely many isolated points have the same transform. No formula built from $\bar f$ can therefore distinguish them, and the one the Bromwich integral picks is the midpoint: at a jump it returns $\tfrac12[f(t^{+})+f(t^{-})]$, not $f(t)$. A table lookup likewise recovers $f$ only where $f$ is continuous. This is also why the statement block assumes $f$ piecewise smooth: that is what makes the one-sided limits exist and the symmetric limit converge, by the piecewise-smooth form of :ref[Fourier inversion]{to=fourier.fourier-inversion} used in step 4.
- **Finally, the derivative rule needs $f$ to be differentiable with $f'$ of exponential order**, and it needs $f(0)$ to exist. A forcing term with a jump at $t=0$ must be written with a Heaviside factor and handled by rule 4, not by rule 1.
:::

:::method[Solving a linear constant-coefficient initial-value problem]{provenance=adapted src="rhb-2006:§15.1.5, (15.31)–(15.32) and the surrounding scheme, p. 501"}
For $a_ny^{(n)}+\cdots+a_1y'+a_0y = g(t)$ with $y(0),\dots,y^{(n-1)}(0)$ given:

1. Transform both sides, using rule 1 on each derivative. The initial data enter as the polynomial $\sum_k s^{n-1-k}y^{(k)}(0)$ terms; no separate step is needed to impose them. This is the advantage :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§15.1.5, p. 501"} stress: the solution arrives in one piece rather than as a complementary function plus a particular integral.
2. Solve the resulting algebraic equation for $\bar y(s)$. It is always $\bar y = \bigl[P(s) + \bar g(s)\bigr]/Q(s)$, with $Q$ the characteristic polynomial and $P$ carrying the initial data.
3. Put $\bar y$ over a common denominator and record the poles. The poles of $Q$ are the natural frequencies of the system; those coming from $\bar g$ are the driven response.
4. Invert. If $\bar y$ is rational, split it by :ref[partial fractions]{to=fourier.partial-fractions} and read off each piece from the table; equivalently, and often faster when the poles are simple, evaluate the Bromwich integral as a sum of residues. If $\bar y$ contains a factor $e^{-bs}$, strip it off, invert the rest, and reinstate it with the delay rule 4.
5. Check three things: $y(0)$ and the other initial values against the data; the residual $a_ny^{(n)}+\cdots-g$ at one value of $t$; and $\lim_{s\to\infty}s\bar y(s)$, which must equal $y(0)$.
:::

:::example[A driven damped system, inverted by residues]{provenance=original}
Solve

$$
y'' + 3y' + 2y = e^{-3t} , \qquad y(0) = 1,\quad y'(0) = 0 .
$$

**Step 1: transform.** By rule 1, $\mathcal{L}[y''] = s^2\bar y - s\cdot 1 - 0$ and $\mathcal{L}[y'] = s\bar y - 1$, while $\mathcal{L}[e^{-3t}] = 1/(s+3)$ for $s>-3$. Hence

$$
\bigl(s^2+3s+2\bigr)\bar y(s) - s - 3 = \frac{1}{s+3} .
$$

**Step 2: solve.** Since $s^2+3s+2 = (s+1)(s+2)$,

$$
\bar y(s) = \frac{s+3}{(s+1)(s+2)} + \frac{1}{(s+1)(s+2)(s+3)}
= \frac{(s+3)^2+1}{(s+1)(s+2)(s+3)} ,
$$

obtained by putting the two terms over the common denominator. The poles are at $s = -1, -2, -3$, all simple, so the abscissa of convergence is $s_0 = -1$ and any $\lambda > -1$ serves as the Bromwich line.

**Step 3: invert by residues.** The numerator is quadratic and the denominator cubic, so $\bar y(s) = O(1/\lvert s\rvert)$ at infinity and the contour may be closed to the left for $t>0$. Each pole is simple, so the residue of $e^{st}\bar y(s)$ at $s_j$ is $e^{s_jt}$ times the numerator over the product of the other two factors:

$$
\begin{aligned}
s = -1 &: \quad e^{-t}\,\frac{(-1+3)^2+1}{(-1+2)(-1+3)} = e^{-t}\,\frac{5}{2} ,\\
s = -2 &: \quad e^{-2t}\,\frac{(-2+3)^2+1}{(-2+1)(-2+3)} = e^{-2t}\,\frac{2}{-1} = -2e^{-2t} ,\\
s = -3 &: \quad e^{-3t}\,\frac{(-3+3)^2+1}{(-3+1)(-3+2)} = e^{-3t}\,\frac{1}{2} .
\end{aligned}
$$

Summing,

$$
y(t) = \tfrac52 e^{-t} - 2e^{-2t} + \tfrac12 e^{-3t} .
$$

**Step 4: the checks of the method.** $y(0) = 2.5-2+0.5 = 1$, as required. $y'(t) = -\tfrac52e^{-t}+4e^{-2t}-\tfrac32e^{-3t}$, so $y'(0) = -2.5+4-1.5 = 0$. Substituting the $e^{-3t}$ term alone into the left-hand side gives $\tfrac12(9-9+2)e^{-3t} = e^{-3t}$, and the $e^{-t}$ and $e^{-2t}$ terms are annihilated by $(d/dt+1)(d/dt+2)$, so the equation holds. Finally $s\bar y(s) \to 1 = y(0)$ as $s\to\infty$.

**A number.** At $t = 1$,

$$
y(1) = 2.5(0.3678794412) - 2(0.1353352832) + 0.5(0.0497870684) = 0.6739215706 .
$$

**A second, shorter check of the table.** The entry $\mathcal{L}[t^n] = \Gamma(n+1)/s^{n+1}$ at $n = \tfrac12$ gives $\mathcal{L}[t^{1/2}] = \Gamma(3/2)/s^{3/2} = \tfrac12\sqrt{\pi/s^3}$, which is :cite[Riley, Hobson and Bence's]{work=rhb-2006 loc="§13.2, Table 13.1, p. 455"} table entry. At $s = 4$ this is $\tfrac12\sqrt{\pi/64} = 0.1107784$, and the direct integral $\int_0^\infty t^{1/2}e^{-4t}dt = (\sqrt\pi/2)/8 = \sqrt\pi/16 = 0.1107784$ agrees.
:::

:::application{provenance=original}
**Circuit and mechanical transients.** A series $RLC$ circuit driven by a source obeys a constant-coefficient equation in the charge, and transforming it turns the circuit into an algebraic divider: the transform of the response is the transform of the drive divided by $Ls^2+Rs+1/C$. The roots of that quadratic are the natural frequencies, the residues at them are the amplitudes of the transient, and the poles contributed by the drive are the steady state. Switching an input on at time $b$ costs only a factor $e^{-bs}$, by rule 4, and that is why a system started from rest is handled with this one-sided transform instead of its two-sided relative.

**Transfer functions and stability.** In control theory the ratio $\bar y(s)/\bar g(s) = 1/Q(s)$ is the transfer function, and the residue calculation of the worked example shows why its poles decide everything: each pole $s_j$ contributes a term $e^{s_jt}$, so the response decays exactly when every pole has $\mathrm{Re}\,s_j < 0$. The Bromwich line, which must lie to the right of all poles, is then in the right half-plane only for an unstable system.

**Diffusion and waves on a half-line.** Transforming in time rather than in space turns a partial differential equation into an ordinary one in $x$ with $s$ as a parameter. :cite[Strauss]{work=strauss-2008 loc="§12.5, Examples 4–5, pp. 355–356"} solves $u_{tt}=c^2u_{xx}$ on $x>0$ with boundary data $f(t)$ this way: the transformed equation gives $U(x,s) = \bar f(s)e^{-sx/c}$, and the delay rule reads off $u(x,t) = H(t-x/c)f(t-x/c)$, a signal travelling at speed $c$. The same method on the diffusion equation produces $e^{-x\sqrt{s/k}}$ and, through the $\sqrt s$ pairs in the table, the error-function solution. This is the technique that handles inhomogeneous boundary conditions most cleanly.

**Resolvents and semigroups.** :cite[Evans]{work=evans-2010 loc="§4.3.3, Example 8, pp. 192–193"} observes that transforming the heat equation $v_t = \Delta v$, $v|_{t=0}=f$, in time yields $-\Delta u + su = f$ for $u = \bar v(\cdot,s)$: the Laplace transform of the heat flow is the resolvent of the Laplacian. This is the bridge between the transform and :ref[operator semigroup theory]{to=pde.operator-semigroups}, where the Bromwich integral reappears as the contour formula recovering a semigroup from its resolvent.

**Probability and renewal problems.** For a non-negative random variable with density $p$, $\bar p(s) = \mathbb{E}[e^{-sT}]$ is the moment generating function at $-s$, and rule 6 turns differentiation in $s$ at $s=0$ into the moments. Because the convolution rule 8 matches the sum of independent waiting times, renewal equations become algebraic, which is the standard route through queueing and reliability calculations.
:::
