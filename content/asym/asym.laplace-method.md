---
id: asym.laplace-method
title: Laplace's method
kind: method
level: core
summary: Gives the leading large-parameter behaviour of an integral of the form $\int g\,e^{xf}$ whose exponent has a single non-degenerate interior maximum, by showing that the integral is controlled by a shrinking neighbourhood of that maximum on which the exponent is a Gaussian.
prereqs: [asym.watson-lemma, found.gaussian-integrals, found.taylor-theorem, asym.asymptotic-series]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§12.5 Method of steepest descent, pp. 383-387: the reduction $f(z)-f(z_0) = -t^2 = \\tfrac12(z-z_0)^2f''(z_0)$ and the resulting form (12.30) of the integral; the term-by-term evaluation using $\\int_{-\\infty}^{\\infty}e^{-\\alpha t^2}t^{n}dt = \\alpha^{-(n+1)/2}\\Gamma((n+1)/2)$ for even $n$ and $0$ for odd $n$; the series (12.33) in powers of $\\alpha^{-k-1/2}$ with coefficients $\\Gamma(k+\\tfrac12)$, p. 385, which Hassani calls 'in reality inconsistent' on p. 386 and replaces by (12.36) on p. 387, of the same form $\\sum_k a_{2k}\\alpha^{-k-1/2}\\Gamma(k+\\tfrac12)$ but with coefficients that also expand $z(t)$; and the leading term (12.34), $I(\\alpha)\\approx e^{\\alpha f(z_0)}e^{i\\theta_1}g(z_0)\\sqrt{2\\pi/(\\alpha|f''(z_0)|)}$, p. 385; the remark that the limits may be extended to infinity because $\\alpha$ is large and positive"
    pages: "383-387"
    role: the leading-order formula and the structure of the correction series in half-integer powers of the large parameter, which we specialise from Hassani's complex saddle point to a real interior maximum; the legitimacy of extending the Gaussian integral to the whole line
  - work: evans-2010
    loc: "§4.5.2 Laplace's method, pp. 205-206: the sentence defining the method as the study of integrals involving $e^{-I/\\varepsilon}$ as $\\varepsilon\\to0$; the Lemma (Asymptotics) on p. 206 with hypotheses that $k,l$ are continuous, $l$ grows at most linearly, $k$ grows at least quadratically and $k$ has a unique minimiser $y_0$, concluding that the ratio of $\\int l e^{-k/\\varepsilon}$ to $\\int e^{-k/\\varepsilon}$ tends to $l(y_0)$; the proof, which reads $\\mu_\\varepsilon = e^{(k_0-k)/\\varepsilon}/\\int e^{(k_0-k)/\\varepsilon}$ as a probability density collapsing onto $y_0$; and Example 2 (pp. 205-206), where the method is applied to the Cole-Hopf formula (21)-(22) for viscous Burgers' equation and yields the Lax-Oleinik formula (26) in the vanishing-viscosity limit"
    pages: "205-206"
    role: the ratio form of the result, which needs neither smoothness nor non-degeneracy of the exponent; the concentration-of-measure reading of the proof; and the vanishing-viscosity application
  - work: grimmett-stirzaker-2020
    loc: "Exercise 5.9.6, p. 216: Laplace's method of steepest descent, for $f_n$ differentiable with a global maximum at $a>0$ and $\\int_0^\\infty e^{f_n}<\\infty$, asserted under mild conditions in the form $\\int_0^\\infty e^{f_n(x)}dx \\sim \\int_0^\\infty \\exp\\{f_n(a)+\\tfrac12(x-a)^2f_n''(a)\\}dx$"
    pages: "216"
    role: the formulation of the method as the replacement of the exponent by its second-order Taylor polynomial at the maximum; the hedge 'under mild conditions' that the statement below makes explicit; and their use of the name 'Laplace's method of steepest descent' for this purely real statement
  - work: rhb-2006
    loc: "pp. 637-638: the evaluation of $n! = \\int_0^\\infty e^{n\\ln x - x}dx$ by setting $x = n+y$, expanding $\\ln(n+y) = \\ln n + y/n - y^2/(2n^2)+\\cdots$, discarding the cubic and higher terms, and extending the resulting Gaussian integral from $[-n,\\infty)$ to $(-\\infty,\\infty)$"
    pages: "637-638"
    role: the concrete recipe -- shift to the maximum, expand the exponent to second order, extend the limits -- in the form in which a physicist carries it out
---

:::definition[The set-up]{provenance=original}
Throughout, $-\infty \le a < b \le +\infty$ and
$$
I(x) \;=\; \int_a^{b} g(t)\,e^{\,x f(t)}\,dt ,
$$
with $f : (a,b) \to \mathbb{R}$ real-valued, $g : (a,b) \to \mathbb{C}$, and $x \to +\infty$. The exponent is real, so $e^{xf}$ is positive and the large-$x$ competition is purely one of size: the integrand is largest where $f$ is largest, and raising $x$ sharpens that preference without moving it.

A point $t_0 \in (a,b)$ is an **interior non-degenerate maximum** of $f$ if $f$ is twice continuously differentiable near $t_0$ with
$$
f'(t_0) = 0 , \qquad f''(t_0) < 0 .
$$
We write $A = |f''(t_0)| = -f''(t_0) > 0$ for the curvature of the exponent at the top.

Evans states the method for the equivalent form $e^{-k/\varepsilon}$ with $\varepsilon \downarrow 0$, which is the same thing with $x = 1/\varepsilon$ and $f = -k$. The name under which the method travels is not uniform. Hassani develops it in the complex plane, where *method of steepest descent* means the deformation of a contour so that it crosses a saddle point of $f$ along the direction in which $\operatorname{Re}f$ falls fastest. Grimmett and Stirzaker attach the same name, "Laplace's method of steepest descent", to the real-axis statement itself — their Exercise 5.9.6 is about $\int_0^{\infty}e^{f_n(x)}dx$ for a real differentiable $f_n$, with no contour anywhere in sight. So the two names overlap, and the real case treated here is the one in which no contour has to be moved; :ref[]{to=asym.steepest-descent} takes up the complex case.
:::

:::statement[Laplace's method, leading order]{provenance=adapted src="hassani-2013:§12.5, Eq. (12.34), p. 385, and Eq. (12.36), p. 387; grimmett-stirzaker-2020:Exercise 5.9.6, p. 216"}
Let $t_0 \in (a,b)$ and suppose:

- **(L1)** $f$ is of class $C^{2}$ on a neighbourhood of $t_0$, with $f'(t_0) = 0$ and $A := -f''(t_0) > 0$;
- **(L2)** $g$ is continuous at $t_0$, and $g(t_0) \ne 0$;
- **(L3)** $t_0$ is the strict global maximum of $f$ with a gap: for every $\delta > 0$,
  $$
  \sup\bigl\{\,f(t) \;:\; t \in (a,b),\ |t - t_0| \ge \delta \,\bigr\} \;<\; f(t_0) ;
  $$
- **(L4)** $\int_a^{b}|g(t)|\,e^{\,x_0f(t)}\,dt < \infty$ for some $x_0 > 0$.

Then
$$
\boxed{\;
I(x) \;=\; \int_a^{b} g(t)e^{\,xf(t)}dt \;\sim\; g(t_0)\,e^{\,xf(t_0)}\,\sqrt{\frac{2\pi}{x\,A}} \qquad (x \to +\infty) . \;}
$$

This is Hassani's steepest-descent formula (12.34) in the case of a real maximum on the real axis, with $|f''(z_0)|$ our $A$ and his phase $\theta_1$ equal to $0$. That phase records the direction in which the contour leaves the saddle: Hassani writes $\tfrac12f''(z_0) = r_2e^{i\theta_2}$ and fixes $\theta_1$ by $2\theta_1 + \theta_2 \in \{\pi, 3\pi\}$ together with the convention $0 \le \theta_1 < \pi$. Here $f''(t_0) = -A < 0$, so $\theta_2 = \pi$ and the two candidate directions are $\theta_1 = 0$ and $\theta_1 = \pi$; the convention excludes the second, which is why $\theta_1 = 0$ -- at a real maximum the descent direction is along the real axis, taken in the direction of increasing $t$. The formula is also the precise form of the replacement Grimmett and Stirzaker state "under mild conditions", conditions (L1)-(L4) being one sufficient set.

**The correction series.** When $f$ and $g$ are smooth near $t_0$, the leading term is the first of an asymptotic expansion in integer powers of $1/x$,
$$
I(x) \;\sim\; e^{\,xf(t_0)}\sqrt{\frac{2\pi}{xA}}\;\Bigl( c_0 + \frac{c_1}{x} + \frac{c_2}{x^{2}} + \cdots \Bigr) , \qquad c_0 = g(t_0) ,
$$
which is Hassani's series in half-integer powers of the large parameter, specialised to the real axis. The pointer there should be to his corrected form (12.36), p. 387: Hassani first writes the expansion as (12.33), p. 385, then observes on p. 386 that "that infinite sum is in reality inconsistent", because only the first power of $t$ was kept in the expansion of $z(t)$ inside $g(z)\,dz$, and restores consistency by expanding $z(t)$ as well. The powers $\alpha^{-k-1/2}$ with coefficients $\Gamma(k+\tfrac12)$ are the same in both, so the structure claimed here is unaffected; only the coefficients change. The remark below says where the expansion comes from.
:::

:::idea{provenance=original}
Write the integrand as $e^{xf(t_0)}$ times $e^{x(f(t)-f(t_0))}$. The second factor is $1$ at $t_0$ and strictly less than $1$ elsewhere, and raising $x$ pushes it towards zero everywhere except at $t_0$. Two things follow. Away from $t_0$ the integrand is smaller than its peak value by a factor $e^{-x\eta}$ for some fixed $\eta > 0$, so that region contributes exponentially little. Near $t_0$ Taylor's theorem says $f(t) - f(t_0) \approx -\tfrac12A(t-t_0)^{2}$, so the integrand is a Gaussian of width $1/\sqrt{xA}$; as $x$ grows the Gaussian narrows, the window over which $g$ is sampled shrinks onto $t_0$, and $g$ may be replaced by the constant $g(t_0)$. What remains is $g(t_0)e^{xf(t_0)}\int e^{-xA u^{2}/2}du = g(t_0)e^{xf(t_0)}\sqrt{2\pi/(xA)}$. The proof is this picture with $\varepsilon$'s: a tolerance $\varepsilon$ is fixed, a $\delta$ is chosen within which $g$ varies by less than $\varepsilon$ and $f''$ by less than $\varepsilon$, the integral is squeezed between two Gaussians of curvature $A \pm \varepsilon$, and $\varepsilon$ is then sent to zero *after* $x$.
:::

:::proof{provenance=original}
Set $J(x) = x^{1/2}e^{-xf(t_0)}I(x)$; the claim is $J(x) \to g(t_0)\sqrt{2\pi/A}$.

**Step 1 (choose $\delta$ for a given tolerance).** Let $0 < \varepsilon < A/2$. By (L1) $f''$ is continuous at $t_0$, so there is $\delta_1 > 0$ with $|f''(\tau) + A| \le \varepsilon$ for $|\tau - t_0| \le \delta_1$. For such $t$, Taylor's theorem with the Lagrange remainder (:ref[]{to=found.taylor-theorem}) and $f'(t_0) = 0$ give $f(t) - f(t_0) = \tfrac12f''(\tau)(t-t_0)^{2}$ for some $\tau$ between $t_0$ and $t$, whence
$$
-\tfrac12(A+\varepsilon)(t-t_0)^{2} \;\le\; f(t) - f(t_0) \;\le\; -\tfrac12(A-\varepsilon)(t-t_0)^{2} . \tag{1}
$$
By (L2) there is $\delta_2 > 0$ with $|g(t) - g(t_0)| \le \varepsilon$ for $|t-t_0| \le \delta_2$. Put $\delta = \min(\delta_1,\delta_2)$, small enough that $[t_0-\delta, t_0+\delta] \subset (a,b)$.

**Step 2 (the outside is exponentially small).** By (L3) there is $\eta > 0$ with $f(t) \le f(t_0) - \eta$ for $t$ in the outer set $O = \{t \in (a,b): |t-t_0| \ge \delta\}$. For $x \ge x_0$, split the exponent as $xf = x_0f + (x-x_0)f$ and bound the second factor on $O$:
$$
\int_O |g|e^{xf}\,dt \;\le\; e^{(x-x_0)(f(t_0)-\eta)}\int_a^{b}|g|e^{x_0f}\,dt \;=\; K\,e^{x(f(t_0)-\eta)} ,
$$
where $K = e^{-x_0(f(t_0)-\eta)}\int|g|e^{x_0f}$ is finite by (L4). Hence
$$
x^{1/2}e^{-xf(t_0)}\int_O|g|e^{xf} \;\le\; K\,x^{1/2}e^{-x\eta} \;\xrightarrow[x\to\infty]{}\; 0 . \tag{2}
$$
This is the only place (L3) and (L4) are used, and it is where the hypothesis that $t_0$ is the *global* maximum earns its keep.

**Step 3 (the Gaussian comparison).** For $C > 0$ let $G_\delta(C) = \int_{-\delta}^{\delta}e^{-xCu^{2}/2}du$. Extending to the whole line costs little:
$$
0 \;\le\; \sqrt{\frac{2\pi}{xC}} - G_\delta(C) \;=\; 2\int_{\delta}^{\infty}e^{-xCu^{2}/2}du \;\le\; \frac{2}{xC\delta}\,e^{-xC\delta^{2}/2} ,
$$
using $e^{-xCu^2/2} \le (u/\delta)e^{-xCu^2/2}$ on $[\delta,\infty)$ and integrating exactly. Therefore
$$
x^{1/2}G_\delta(C) \;\xrightarrow[x\to\infty]{}\; \sqrt{\frac{2\pi}{C}} , \qquad\text{and}\qquad G_\delta(C) \le \sqrt{\frac{2\pi}{xC}} , \tag{3}
$$
the Gaussian integral being the one evaluated in :ref[]{to=found.gaussian-integrals}.

**Step 4 (the inside).** Write $u = t - t_0$ and $P(x) = \int_{-\delta}^{\delta}e^{x(f(t_0+u)-f(t_0))}du$, a positive quantity. The two-sided Taylor bound (1) gives at once
$$
G_\delta(A+\varepsilon) \;\le\; P(x) \;\le\; G_\delta(A-\varepsilon) . \tag{4}
$$
Splitting $g = g(t_0) + \bigl(g - g(t_0)\bigr)$ on $[t_0-\delta,t_0+\delta]$ and using $|g - g(t_0)| \le \varepsilon$ there,
$$
\Bigl| e^{-xf(t_0)}\int_{|t-t_0|\le\delta} g\,e^{xf}\,dt \;-\; g(t_0)P(x) \Bigr| \;\le\; \varepsilon\,P(x) . \tag{5}
$$

**Step 5 (combine and let $\varepsilon \to 0$).** Adding (2) and (5) and multiplying by $x^{1/2}$,
$$
\bigl| J(x) - g(t_0)\,x^{1/2}P(x) \bigr| \;\le\; \varepsilon\,x^{1/2}P(x) \;+\; Kx^{1/2}e^{-x\eta} .
$$
By (3) and (4), $x^{1/2}P(x)$ lies between $x^{1/2}G_\delta(A+\varepsilon)$ and $x^{1/2}G_\delta(A-\varepsilon)$, hence
$$
\sqrt{\frac{2\pi}{A+\varepsilon}} \;\le\; \liminf_{x\to\infty} x^{1/2}P(x) \;\le\; \limsup_{x\to\infty}x^{1/2}P(x) \;\le\; \sqrt{\frac{2\pi}{A-\varepsilon}} .
$$
Consequently
$$
\limsup_{x\to\infty}\Bigl| J(x) - g(t_0)\sqrt{\tfrac{2\pi}{A}} \Bigr|
\;\le\; |g(t_0)|\left(\sqrt{\tfrac{2\pi}{A-\varepsilon}} - \sqrt{\tfrac{2\pi}{A+\varepsilon}}\right) \;+\; \varepsilon\sqrt{\tfrac{2\pi}{A-\varepsilon}} .
$$
The right-hand side is a fixed number depending only on $\varepsilon$ (and on $A$, $g(t_0)$), and it tends to $0$ as $\varepsilon \downarrow 0$. Since the left-hand side does not depend on $\varepsilon$ at all, it is zero. That is $J(x) \to g(t_0)\sqrt{2\pi/A}$, which is the assertion. $\square$
:::

:::remark[Where the hypotheses are used, and what each failure does to the answer]{provenance=original}
Each hypothesis controls one feature of the answer, and dropping it changes the answer in a specific, computable way rather than merely breaking the proof.

- **(L1), $f''(t_0) \ne 0$, fixes the power of $x$.** If $f''(t_0) = 0$ and the first non-vanishing derivative is of order $2m$, the local shape is $f(t_0) - \gamma(t-t_0)^{2m}$ and the width of the peak is $x^{-1/(2m)}$, not $x^{-1/2}$. For instance
  $$
  \int_{-\infty}^{\infty} e^{-xt^{4}}dt \;=\; \tfrac12\Gamma(\tfrac14)\,x^{-1/4} ,
  $$
  obtained from $u = xt^{4}$. The general degenerate leading term is $g(t_0)e^{xf(t_0)}\frac{1}{m}\Gamma\!\left(\frac{1}{2m}\right)(\gamma x)^{-1/(2m)}$, with $\gamma = |f^{(2m)}(t_0)|/(2m)!$; the Gaussian is replaced by a different one-dimensional integral, and the Gamma function appears for the same reason as in :ref[]{to=asym.watson-lemma}.
- **An interior maximum, as opposed to an endpoint one, fixes the constant.** If the maximum sits at $t_0 = a$ with $f'(a) = 0$, only half the Gaussian lies in the range and the leading term is halved. If instead $f'(a) < 0$, so that $f$ simply decreases from the endpoint, the peak is one-sided and exponential rather than Gaussian, and integration by parts (or :ref[]{to=asym.watson-lemma} with $\lambda = 1$) gives
  $$
  \int_a^{b}g\,e^{xf}\,dt \;\sim\; \frac{g(a)\,e^{xf(a)}}{x\,|f'(a)|} ,
  $$
  with $x^{-1}$ in place of $x^{-1/2}$. Endpoint and interior contributions must both be examined before one is discarded.
- **(L2), $g(t_0) \ne 0$, is what makes the leading term leading.** If $g(t_0) = 0$ the formula gives $0$, correctly but uselessly: the proof then yields only $I(x) = o\bigl(e^{xf(t_0)}x^{-1/2}\bigr)$, and one must go to the next term of the correction series. If $g$ vanishes to order $k$ at $t_0$, which Gaussian moment survives decides the order. For *even* $k$ the moment $\int u^{k}e^{-xAu^{2}/2}du$ is a positive multiple of $x^{-(k+1)/2}$ and that is the true order of $e^{-xf(t_0)}I(x)$; for *odd* $k$ that moment vanishes by symmetry, the next term of the expansion takes over, and the order drops to $x^{-(k+2)/2}$. It can be smaller still -- zero -- when the symmetry is exact: for $f(t) = -t^{2}/2$ on $\mathbb{R}$ and $g$ odd, every moment vanishes and $I(x) = 0$ identically.
- **(L3) is global, and no local hypothesis can replace it.** The condition compares $f(t_0)$ with $f$ everywhere else, with a gap. Without it a distant region can dominate: $f(t) = -t^{2}$ on $(-\infty,\infty)$ has a fine maximum at $0$, but take instead a continuous $f$ that equals $-t^{2}$ on $(-\infty,10]$ and then climbs, with $f(t) \to +\infty$ as $t \to +\infty$. It still has a local maximum at $0$ satisfying (L1), and (L2) still holds there with $g \equiv 1$, but it has no global maximum, so (L3) fails -- and so does (L4): $I(x) = +\infty$ for every $x > 0$. If two separated points share the maximum value, each contributes its own Gaussian and the two contributions are *added* — with their relative phase, if $g$ is complex.
- **(L4) is the hypothesis that the integral exists at all**, for at least one $x$; once it holds at $x_0$ it holds for every $x \ge x_0$, since $f \le f(t_0)$.
- **Where the correction series comes from.** Substitute $s = f(t_0) - f(t)$ separately on each side of $t_0$. Near $t_0$ this is a two-to-one change of variable with $t - t_0 = \pm\sqrt{2s/A}\,\bigl(1 + O(\sqrt{s}\,)\bigr)$, and it converts the integral into
  $$
  I(x) \;=\; e^{xf(t_0)}\int_0^{\sigma} e^{-xs}\,\Phi(s)\,ds \;+\; (\text{exponentially small}) ,
  \qquad
  \Phi(s) = \frac{g(t_+(s))}{|f'(t_+(s))|} + \frac{g(t_-(s))}{|f'(t_-(s))|} ,
  $$
  where $t_\pm(s)$ are the two solutions. Each branch on its own contributes every power $s^{-1/2}, s^{0}, s^{1/2}, s^{1}, \dots$. But $\Phi$ is the *sum* over the two branches, and $t_+ - t_0$ and $t_- - t_0$ differ precisely in the sign of $\sqrt{s}$, so when $f$ and $g$ are smooth the terms carrying an odd power of $\sqrt{s}$ — those coming from the odd Taylor coefficients of $g$ and of the map $s \mapsto t$ — cancel between the branches and only the powers $s^{\,n-1/2}$, $n \ge 0$, survive, beginning with $\sqrt{2/A}\,g(t_0)s^{-1/2}$. That is exactly the shape (W2) of :ref[]{to=asym.watson-lemma} requires with $\lambda = \tfrac12$, and the lemma then returns a series in $x^{-n-1/2}$ — integer powers of $1/x$ relative to the leading $x^{-1/2}$. This is why Watson's lemma is listed as the prerequisite of this unit: Laplace's method is Watson's lemma plus a change of variable.
:::

:::note[Evans's ratio form: no smoothness needed]{provenance=adapted src="evans-2010:§4.5.2, Lemma (Asymptotics) and its proof, p. 206"}
Many applications want not the integral itself but a weighted average against the same exponential, and for those much less is needed. Evans states and proves the following. Let $k, l : \mathbb{R} \to \mathbb{R}$ be continuous, with $l$ growing at most linearly and $k$ growing at least quadratically, and suppose $k$ attains its minimum over $\mathbb{R}$ at a *unique* point $y_0$. Then
$$
\lim_{\varepsilon \to 0} \;\frac{\displaystyle\int_{-\infty}^{\infty} l(y)\,e^{-k(y)/\varepsilon}\,dy}{\displaystyle\int_{-\infty}^{\infty} e^{-k(y)/\varepsilon}\,dy} \;=\; l(y_0) .
$$
There is no hypothesis of differentiability, let alone of non-degeneracy, on $k$ — the price being that nothing is claimed about the *size* of either integral, only about their ratio. Evans's proof is worth remembering as the probabilistic reading of this whole unit: the normalised integrand
$$
\mu_{\varepsilon}(y) \;=\; \frac{e^{(k(y_0)-k(y))/\varepsilon}}{\int e^{(k(y_0)-k(z))/\varepsilon}\,dz}
$$
is a probability density on $\mathbb{R}$ which tends to $0$ exponentially fast at every $y \ne y_0$, so the family $\{\mu_\varepsilon\}$ concentrates all its mass at $y_0$ and the average of any continuous $l$ against it tends to $l(y_0)$. Laplace's method is concentration of measure; the statement proved above adds the extra information, bought with (L1), of how *fast* the mass concentrates and how large the integrals are.
:::

:::method[Carrying out Laplace's method]{provenance=adapted src="rhb-2006:pp. 637-638; hassani-2013:§12.5, Eqs. (12.30)-(12.34), pp. 384-385"}
1. **Put the integral in the form $\int g\,e^{xf}$** with a single large parameter $x$ multiplying a fixed real function $f$, and with any $x$-dependence of the prefactor removed. An integrand such as $t^{x}h(t)$ becomes $h(t)e^{x\ln t}$: *all* of the $x$-dependence must be moved into the exponent before the exponent is maximised.
2. **Locate the maximum.** Solve $f'(t) = 0$ and compare the values of $f$ at the roots and at the endpoints. Keep the global maximum; if several points tie, treat each and add.
3. **Check the three things that change the answer**: that the maximum is interior (otherwise halve, or use the endpoint formula of the remark), that $f''(t_0) < 0$ (otherwise the power of $x$ changes), and that $g(t_0) \ne 0$.
4. **Shift and expand.** Put $t = t_0 + u$ and expand the exponent, $f(t_0+u) = f(t_0) - \tfrac12Au^{2} + \tfrac16f'''(t_0)u^{3} + \cdots$. This is the step Riley, Hobson and Bence carry out explicitly when they set $x = n+y$ in the Gamma integral.
5. **Extend the limits to $\pm\infty$ and integrate.** The added region is exponentially small (Step 2 of the proof), and Hassani makes the same remark about extending the range. The leading result is
   $$
   I(x) \;\approx\; g(t_0)\,e^{xf(t_0)}\sqrt{\frac{2\pi}{xA}} , \qquad A = -f''(t_0) .
   $$
6. **If a correction is wanted**, keep the cubic and quartic terms of the exponent and the linear and quadratic terms of $g$. The whole exponent is $xf$, so the factor left over beside the Gaussian carries the large parameter too:
   $$
   \exp\Bigl\{x\bigl(\tfrac16f'''u^{3} + \tfrac1{24}f''''u^{4}\bigr)\Bigr\} \;=\; 1 + \frac{x}{6}f'''u^{3} + \frac{x}{24}f''''u^{4} + \frac{x^{2}}{72}(f''')^{2}u^{6} + \cdots .
   $$
   Integrate term by term against the Gaussian using $\int_{-\infty}^{\infty}u^{2m}e^{-Axu^{2}/2}du = (2m-1)!!\,(Ax)^{-m}\sqrt{2\pi/(Ax)}$. Odd powers integrate to zero, killing the $u^{3}$ term; the surviving $u^{4}$ and $u^{6}$ terms contribute $x\cdot x^{-2}$ and $x^{2}\cdot x^{-3}$ relative to the leading Gaussian, so both land at relative order $1/x$ and the first correction is of that order. (Dropping the $x$ from the exponential here is the standard slip: it would make the $u^{4}$ term look like a relative $x^{-2}$ and lose half of the genuine first correction.)
7. **Sanity-check the scaling.** The answer must be $e^{xf(t_0)}$ times $x^{-1/2}$ times something independent of $x$; if a stray power of $x$ survives, some $x$-dependence was left outside the exponent at step 1.
:::

:::example[The central Beta integral]{provenance=original}
Let
$$
I(x) \;=\; \int_0^{1} \bigl[t(1-t)\bigr]^{x}\,dt \;=\; B(x+1,\,x+1) \;=\; \frac{\Gamma(x+1)^{2}}{\Gamma(2x+2)} \qquad (x > 0) .
$$
This is the normalising constant of a symmetric Beta distribution and the continuous analogue of the central binomial coefficient; the closed form gives exact values to check against.

**Step 1: all the $x$-dependence into the exponent.** $\bigl[t(1-t)\bigr]^{x} = e^{xf(t)}$ with
$$
f(t) \;=\; \ln t + \ln(1-t) , \qquad g(t) \equiv 1 \quad\text{on } (0,1) .
$$

**Step 2: the maximum.** $f'(t) = 1/t - 1/(1-t) = 0$ gives $t_0 = \tfrac12$, and
$$
f(\tfrac12) = -2\ln 2 , \qquad f''(t) = -\frac{1}{t^{2}} - \frac{1}{(1-t)^{2}} , \qquad f''(\tfrac12) = -8 , \quad\text{so } A = 8 .
$$

**Step 3: the hypotheses.** $f$ is smooth on $(0,1)$, strictly increasing on $(0,\tfrac12)$ and strictly decreasing on $(\tfrac12,1)$, and $f(t) \to -\infty$ at both ends, so $t_0 = \tfrac12$ is the strict global maximum with a gap: (L3) holds. $g \equiv 1$ gives (L2), and (L4) holds with $x_0 = 1$ since $\int_0^1 t(1-t)dt = \tfrac16 < \infty$. (L1) is Step 2.

**Step 4: the leading term.**
$$
I(x) \;\sim\; 1 \cdot e^{-2x\ln 2}\sqrt{\frac{2\pi}{8x}} \;=\; \frac{1}{4^{x}}\cdot\frac{1}{2}\sqrt{\frac{\pi}{x}} .
$$

**Step 5: the first correction.** With $u = t - \tfrac12$ one has $t(1-t) = \tfrac14(1-4u^{2})$, so the exponent is exactly
$$
f(t) - f(t_0) \;=\; \ln\bigl(1-4u^{2}\bigr) \;=\; -4u^{2} - 8u^{4} - \tfrac{64}{3}u^{6} - \cdots \qquad (|u| < \tfrac12) .
$$
Keeping the quartic term as a factor, $e^{x\ln(1-4u^2)} = e^{-4xu^{2}}\bigl(1 - 8xu^{4} + O(x u^{6}, x^{2}u^{8})\bigr)$, and with $\int_{-\infty}^{\infty}e^{-4xu^{2}}du = \tfrac12\sqrt{\pi/x}$ and $\int_{-\infty}^{\infty}u^{4}e^{-4xu^{2}}du = \frac{3}{64x^{2}}\cdot\tfrac12\sqrt{\pi/x}$,
$$
I(x) \;=\; \frac{1}{4^{x}}\cdot\frac{1}{2}\sqrt{\frac{\pi}{x}}\;\left(1 - \frac{3}{8x} + O(x^{-2})\right) .
$$

**Step 6: the numbers.** Exact values from $\Gamma(x+1)^{2}/\Gamma(2x+2)$:

| $x$ | exact $B(x+1,x+1)$ | leading term | relative error | with $1-\tfrac{3}{8x}$ | relative error |
|---|---|---|---|---|---|
| $10$ | $2.57740196\times10^{-7}$ | $2.67266808\times10^{-7}$ | $+3.70\%$ | $2.57244303\times10^{-7}$ | $-0.192\%$ |
| $25$ | $1.55112326\times10^{-16}$ | $1.57425526\times10^{-16}$ | $+1.49\%$ | $1.55064143\times10^{-16}$ | $-0.031\%$ |
| $100$ | $5.49442959\times10^{-62}$ | $5.51500370\times10^{-62}$ | $+0.374\%$ | $5.49432243\times10^{-62}$ | $-0.0020\%$ |

At $x = 10$, for instance, the leading term alone is $2.67266808\times10^{-7}$ against the exact $2.57740196\times10^{-7}$. The relative error of the leading term falls as $0.375/x$ — exactly the coefficient $3/8$ predicted in Step 5 — and including that one correction improves each row by roughly a further factor $x$, as an expansion in $1/x$ should.
:::

:::application[Vanishing viscosity, Bayesian asymptotics and the saddle point of statistical mechanics]{provenance=original}
**The vanishing-viscosity limit of Burgers' equation.** The Cole-Hopf formula solves the viscous conservation law $u^{\varepsilon}_t + u^{\varepsilon}u^{\varepsilon}_x = \varepsilon u^{\varepsilon}_{xx}$ explicitly as a ratio of two integrals,
$$
u^{\varepsilon}(x,t) \;=\; \frac{\int_{\mathbb{R}}\frac{x-y}{t}\,e^{-K(x,y,t)/(2\varepsilon)}\,dy}{\int_{\mathbb{R}} e^{-K(x,y,t)/(2\varepsilon)}\,dy} , \qquad K(x,y,t) = \frac{|x-y|^{2}}{2t} + h(y) ,
$$
with $h$ an antiderivative of the initial datum. This is precisely the ratio Evans's lemma evaluates, with $l(y) = (x-y)/t$ growing linearly and $K$ growing quadratically in $y$. Whenever $y \mapsto K(x,y,t)$ has a unique minimiser $y(x,t)$ — which Evans shows holds for all but countably many $x$ at each fixed $t > 0$ — the limit is $\bigl(x - y(x,t)\bigr)/t$. That expression is the Lax-Oleinik formula, and it picks out exactly the entropy solution -- the unique admissible one -- of the inviscid law :cite[]{work=evans-2010 loc="§4.5.2, Example 2 and Eq. (26), pp. 205-206"}. Laplace's method is therefore the mechanism by which an artificial viscosity selects the physically correct shock (:ref[]{to=pde.conservation-laws-shocks}). Note which version of the method is needed: the exponent $K$ is only continuous, not smooth, at the points where the minimiser jumps, so the ratio form of the note is doing the work and the non-degeneracy hypothesis (L1) would be false.

**Bayesian asymptotics and the normal approximation.** With $n$ independent observations, a posterior density is proportional to $\pi(\theta)\,e^{n\ell_n(\theta)}$, where $\ell_n$ is the average log-likelihood (:ref[]{to=stats.maximum-likelihood}). Applying the theorem with $x = n$, $f = \ell_n$ and $g = \pi$ about the maximum-likelihood estimate $\hat\theta$ gives the model evidence
$$
\int \pi(\theta)\,e^{n\ell_n(\theta)}\,d\theta \;\sim\; \pi(\hat\theta)\,e^{n\ell_n(\hat\theta)}\sqrt{\frac{2\pi}{n\,|\ell_n''(\hat\theta)|}} ,
$$
and, applied to numerator and denominator at once, the statement that the posterior itself is asymptotically Gaussian with variance $1/\bigl(n|\ell_n''(\hat\theta)|\bigr)$ — the observed-information formula. Taking logarithms of the evidence and keeping the terms that grow with $n$ produces the $-\tfrac12\log n$ per parameter of the Bayesian information criterion. See :ref[]{to=stats.bayesian-inference}.

**The saddle point in statistical mechanics.** A partition function written as an integral over an extensive variable, $Z(N) = \int e^{N s(m)}dm$ with $s$ an entropy per particle, is evaluated by this method with $x = N$: the free energy per particle is $\max_m s(m)$ and the corrections are $O(\log N/N)$, which is the statement that the thermodynamic limit exists and that fluctuations about the most probable state are Gaussian of width $N^{-1/2}$. Two separated maxima with equal $s$ is a first-order phase transition, and the remark above says what then happens to the formula: the two contributions add. The large-deviation rate function of :ref[]{to=prob.large-deviations} is the same object seen from probability theory, and the complex-plane version needed when the exponent is not real is :ref[]{to=asym.steepest-descent}.
:::
