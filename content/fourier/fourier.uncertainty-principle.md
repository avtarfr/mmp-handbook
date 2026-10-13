---
id: fourier.uncertainty-principle
title: The uncertainty principle
kind: theorem
level: core
summary: "A normalised function and its Fourier transform cannot both be sharply concentrated: the product of their two variances is at least $1/16\\pi^2$, with equality exactly for Gaussians."
prereqs: [fourier.fourier-transform, fourier.plancherel, found.gaussian-integrals]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §4, Thm 4.1 and its proof, pp. 158–159; the heuristic statement preceding it, p. 158; the quantum-mechanical reading, the definitions (11)–(13) of probability density, expectation and uncertainty, and the physical conclusion, pp. 159–161; the Gaussian dilation remark, Cor. 1.5 and the paragraph after it, p. 139"
    pages: "139, 158-161"
    role: the statement followed here, including the normalisation, the constant $1/16\\pi^2$, the translated form with arbitrary $x_0,\\xi_0$ and the characterisation of the equality case; the proof route (integrate by parts, Cauchy-Schwarz, Plancherel); the reading of the two integrals as position and momentum variances
  - work: strauss-2008
    loc: "§12.3, 'The Heisenberg uncertainty principle', inequality (16) with its proof (17)–(19), pp. 346–347; Parseval's equality (14)–(15) and the transform properties table (i)–(vi), p. 346"
    pages: "346-347"
    role: the same inequality in the angular-frequency convention, $\\Delta x\\,\\Delta k \\ge 1/2$, with the definitions of $\\Delta x$ and $\\Delta k$ used there; the version of the integration-by-parts step we quote in the note on conventions
  - work: rhb-2006
    loc: "§13.1.1, the Fourier transform of a normalised Gaussian (13.7) and the relation $\\Delta\\omega\\,\\Delta t = 1$, with the intensity widths and $\\Delta E\\,\\Delta t = \\hbar/2$, $\\Delta p\\,\\Delta x = \\hbar/2$, pp. 435–437; §19.2, the generalised uncertainty relation (19.38) and the worked example giving $\\Delta p_x\\,\\Delta x \\ge \\tfrac12\\hbar$ and the minimising wavefunction, pp. 665–666"
    pages: "435-437, 665-666"
    role: the Gaussian computation showing that the widths are reciprocal independently of the width parameter; the physical form of the relation in terms of $\\hbar$; the operator form for a general pair of observables and the statement that the Gaussian value is the smallest possible
  - work: kreyszig-1978
    loc: "§11.2, the momentum operator (2), the commutator relation (8), Thm 11.2-1 (Commutator) with (10) and Thm 11.2-2 (Heisenberg uncertainty principle) with (11), pp. 576–581"
    pages: "576-581"
    role: the operator form of the principle, with the commutator inequality it rests on and the physical reading of the standard deviations as measurement precisions
  - work: arfken-2013
    loc: "§20.2, the frequency spread $\\Delta\\omega = \\omega_0/N$ of a finite wave train (20.35) and the remark relating pulse length to frequency precision, p. 973"
    pages: "973"
    role: the signal-processing reading, that the frequency content of a pulse broadens as the pulse is shortened, and the remark that the quantum principle is a consequence of wave behaviour rather than an extra postulate
---

:::definition[Dispersion about a point, and the convention used here]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, §4, (11)–(13), pp. 159–160"}
Throughout this unit the Fourier transform of $\psi \in \mathcal{S}(\mathbb{R})$, the Schwartz space of smooth functions all of whose derivatives decay faster than every power of $1/\lvert x\rvert$, is taken in the form

$$
\hat\psi(\xi) = \int_{-\infty}^{\infty} \psi(x)\,e^{-2\pi i x\xi}\,dx ,
$$

the convention of :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1, p. 134"}. In it the derivative rule reads $\widehat{\psi'}(\xi) = 2\pi i \xi\,\hat\psi(\xi)$ and :ref[Plancherel's theorem]{to=fourier.plancherel} reads $\int \lvert \psi\rvert^2 = \int \lvert\hat\psi\rvert^2$, with no stray constants in either. The other conventions in use change the numerical constant in the theorem but not its content; see the note below and :ref[the Fourier transform]{to=fourier.fourier-transform}.

Call $\psi$ **normalised** if $\int_{-\infty}^{\infty} \lvert\psi(x)\rvert^2\,dx = 1$. Then $\lvert\psi(x)\rvert^2\,dx$ and, by Plancherel, $\lvert\hat\psi(\xi)\rvert^2\,d\xi$ are both probability densities, and for $x_0, \xi_0 \in \mathbb{R}$ we write

$$
V_x(\psi; x_0) = \int_{-\infty}^{\infty}(x-x_0)^2\lvert\psi(x)\rvert^2\,dx ,
\qquad
V_\xi(\psi; \xi_0) = \int_{-\infty}^{\infty}(\xi-\xi_0)^2\lvert\hat\psi(\xi)\rvert^2\,d\xi
$$

for the two **dispersions**, or variances. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §4, (13), p. 160"} call $V_x$ the uncertainty attached to the expected position $\overline{x} = \int x\lvert\psi\rvert^2\,dx$, and record that $x_0 = \overline{x}$ is the choice that makes $V_x(\psi;x_0)$ smallest, since differentiating in $x_0$ gives $\int (x-x_0)\lvert\psi\rvert^2 = 0$. A small $V_x$ means that nearly all of the mass of $\lvert\psi\rvert^2$ sits close to $x_0$; a large one means it is spread out.
:::

:::statement[Heisenberg inequality]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 4.1, p. 158"}
Let $\psi \in \mathcal{S}(\mathbb{R})$ satisfy $\int_{-\infty}^{\infty}\lvert\psi(x)\rvert^2\,dx = 1$. Then

$$
\left(\int_{-\infty}^{\infty} x^2\lvert\psi(x)\rvert^2\,dx\right)
\left(\int_{-\infty}^{\infty} \xi^2\lvert\hat\psi(\xi)\rvert^2\,d\xi\right)
\;\ge\; \frac{1}{16\pi^2} ,
$$

with equality attained exactly when $\psi(x) = A e^{-Bx^2}$, where $B > 0$ and $\lvert A\rvert^2 = \sqrt{2B/\pi}$. More generally, for every $x_0, \xi_0 \in \mathbb{R}$,

$$
V_x(\psi;x_0)\,V_\xi(\psi;\xi_0) \;\ge\; \frac{1}{16\pi^2} .
$$
:::

:::note[The same inequality in other conventions]{provenance=adapted src="strauss-2008:§12.3, (16), p. 346; rhb-2006:§13.1.1, pp. 436–437, and §19.2, pp. 665–666; kreyszig-1978:§11.2, Thm 11.2-2, p. 580"}
The constant $1/16\pi^2$ belongs to the convention above and to nothing else. Three other statements of the same fact appear in the sources, and they are reconciled here so that no two of them are mixed later.

- **Angular frequency.** :cite[Strauss]{work=strauss-2008 loc="§12.3, (16), p. 346"} writes $F(k) = \int f(x)e^{-ikx}dx$, so that Parseval reads $\int\lvert f\rvert^2 dx = \int \lvert F\rvert^2 dk/2\pi$, sets $\Delta x^2 = \int \lvert x f(x)\rvert^2 dx$ and $\Delta k^2 = \int\lvert kF(k)\rvert^2 dk/2\pi$ for normalised $f$, and states the principle as $\Delta x\cdot\Delta k \ge \tfrac12$. Since $k = 2\pi\xi$ and $\lvert F(2\pi\xi)\rvert^2 d k/2\pi = \lvert \hat f(\xi)\rvert^2 d\xi$, his $\Delta k^2$ is $4\pi^2$ times our second integral, and $\Delta x\,\Delta k \ge \tfrac12$ is the inequality above word for word.
- **Gaussian widths.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§13.1.1, pp. 436–437"} work with the symmetric convention and the normalised Gaussian $f(t) = (\tau\sqrt{2\pi})^{-1}e^{-t^2/2\tau^2}$, whose transform is $(2\pi)^{-1/2}e^{-\tau^2\omega^2/2}$; the root-mean-square widths of $f$ and $\tilde f$ satisfy $\Delta\omega\,\Delta t = 1$ whatever $\tau$ is, while the widths of the *intensities* $\lvert f\rvert^2$ and $\lvert\tilde f\rvert^2$ are $\tau/\sqrt2$ and $1/(\sqrt2\,\tau)$. With $p = \hbar k$ and $E = \hbar\omega$ they obtain $\Delta E\,\Delta t = \hbar/2$ and $\Delta p\,\Delta x = \hbar/2$, and note that the factor $\tfrac12$ is special to the Gaussian and is the least value attainable.
- **Operators.** :cite[Kreyszig]{work=kreyszig-1978 loc="§11.2, Thm 11.2-2 with (11), p. 580"} takes $Q$ to be multiplication by the coordinate $q$ and $D\psi = (h/2\pi i)\,d\psi/dq$, and writes the principle as $\mathrm{sd}_\psi(D)\,\mathrm{sd}_\psi(Q) \ge h/4\pi$, that is $\ge \hbar/2$, which agrees with the previous item. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§19.2, (19.38), p. 665"} give the general two-observable form $(\Delta A)^2(\Delta B)^2 \ge \tfrac14\lvert\langle\psi\lvert[A,B]\rvert\psi\rangle\rvert^2$, of which $\Delta p_x\,\Delta x \ge \tfrac12\hbar$ is the case $[p_x,x] = -i\hbar$.

**A difference between the sources.** :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §4, p. 161"}, having rescaled units to remove Planck's constant, restore it by writing the physical conclusion as $(\text{uncertainty of position})\times(\text{uncertainty of momentum}) \ge \hbar/16\pi^2$, their "uncertainty" being the variance (13) rather than its square root. :cite[Kreyszig]{work=kreyszig-1978 loc="§11.2, (11), p. 580"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§19.2, p. 666"} write $\hbar/2$ for the product of the two standard deviations. The two statements are not the same inequality, and the physical form used in the application below is the one with $\hbar/2$, taken from Kreyszig and from Riley, Hobson and Bence. The mathematical theorem proved here is Stein and Shakarchi's and is stated exactly as they give it.
:::

:::idea{provenance=original}
A normalised $\psi$ carries unit mass, and the whole of that mass can be produced by one integration by parts: $1 = -\int x\,\frac{d}{dx}\lvert\psi\rvert^2\,dx$. The derivative on the right brings in $\psi'$, so the number $1$ has been written as a pairing of $x\psi$ against $\psi'$. Cauchy-Schwarz then says that this pairing cannot exceed the product of the two lengths $\lVert x\psi\rVert$ and $\lVert\psi'\rVert$, and neither length can be small if their product must beat $1$. The last move translates the second length into the frequency side: differentiation is multiplication by $2\pi i\xi$ on the transform, so $\lVert\psi'\rVert = 2\pi\lVert\xi\hat\psi\rVert$ by Plancherel. That is the inequality. Equality demands equality in Cauchy-Schwarz, which forces $\psi'$ to be a constant multiple of $x\psi$, and the only decaying solutions of that differential equation are the Gaussians.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 4.1, pp. 158–159"}
**Step 1: write the normalisation as a boundary-free integration by parts.** Take $u(x) = x$ and $v(x) = \lvert\psi(x)\rvert^2$. Because $\psi$ is a Schwartz function, $x\lvert\psi(x)\rvert^2 \to 0$ as $\lvert x\rvert\to\infty$, so the boundary term vanishes and

$$
1 = \int_{-\infty}^{\infty}\lvert\psi(x)\rvert^2\,dx
= -\int_{-\infty}^{\infty} x\,\frac{d}{dx}\lvert\psi(x)\rvert^2\,dx .
$$

This is the only place the normalisation is used, and the only place rapid decay is needed.

**Step 2: differentiate the modulus squared.** From $\lvert\psi\rvert^2 = \psi\overline{\psi}$ and the product rule,

$$
\frac{d}{dx}\lvert\psi(x)\rvert^2 = \psi'(x)\overline{\psi(x)} + \psi(x)\overline{\psi'(x)} = 2\,\mathrm{Re}\bigl(\psi'(x)\overline{\psi(x)}\bigr) ,
$$

so step 1 reads $1 = -2\int x\,\mathrm{Re}\bigl(\psi'\overline{\psi}\bigr)\,dx$. A real number is at most its own modulus, and $\lvert\mathrm{Re}\,z\rvert \le \lvert z\rvert$, hence

$$
1 \;\le\; 2\int_{-\infty}^{\infty} \lvert x\rvert\,\lvert\psi(x)\rvert\,\lvert\psi'(x)\rvert\,dx .
$$

**Step 3: Cauchy-Schwarz.** Pair the factor $\lvert x\psi\rvert$ against $\lvert\psi'\rvert$ in $L^2(\mathbb{R})$:

$$
1 \;\le\; 2\left(\int_{-\infty}^{\infty} x^2\lvert\psi(x)\rvert^2\,dx\right)^{1/2}
\left(\int_{-\infty}^{\infty} \lvert\psi'(x)\rvert^2\,dx\right)^{1/2} .
$$

Both integrals are finite because $\psi \in \mathcal{S}(\mathbb{R})$.

**Step 4: move the second factor to the frequency side.** Since $\psi$ is Schwartz, so is $\psi'$, and the derivative rule gives $\widehat{\psi'}(\xi) = 2\pi i\xi\,\hat\psi(\xi)$. Applying :ref[Plancherel's theorem]{to=fourier.plancherel} to $\psi'$,

$$
\int_{-\infty}^{\infty}\lvert\psi'(x)\rvert^2\,dx
= \int_{-\infty}^{\infty}\lvert 2\pi i \xi\,\hat\psi(\xi)\rvert^2\,d\xi
= 4\pi^2\int_{-\infty}^{\infty}\xi^2\lvert\hat\psi(\xi)\rvert^2\,d\xi .
$$

**Step 5: combine.** Substituting step 4 into step 3 and squaring both sides of the resulting inequality $1 \le 4\pi\,\lVert x\psi\rVert\,\lVert \xi\hat\psi\rVert$ gives

$$
1 \;\le\; 16\pi^2 \left(\int x^2\lvert\psi\rvert^2 dx\right)\left(\int\xi^2\lvert\hat\psi\rvert^2 d\xi\right) ,
$$

which is the first inequality.

**Step 6: arbitrary centres.** Put $\varphi(x) = e^{-2\pi i x\xi_0}\psi(x+x_0)$. Translation and modulation are the two rules $\widehat{\psi(\cdot + x_0)}(\xi) = e^{2\pi i x_0\xi}\hat\psi(\xi)$ and $\widehat{e^{-2\pi i x\xi_0}g}(\xi) = \hat g(\xi+\xi_0)$, so $\hat\varphi(\xi) = e^{2\pi i x_0(\xi+\xi_0)}\hat\psi(\xi+\xi_0)$. Both operations leave moduli alone, so $\varphi$ is again a normalised Schwartz function, $\int x^2\lvert\varphi\rvert^2 dx = V_x(\psi;x_0)$ and $\int\xi^2\lvert\hat\varphi\rvert^2 d\xi = V_\xi(\psi;\xi_0)$ after the substitutions $x \mapsto x - x_0$ and $\xi\mapsto \xi-\xi_0$. The first inequality applied to $\varphi$ is the second.

**Step 7: when equality holds.** Suppose the product equals $1/16\pi^2$. Then step 3 must be an equality, so by the equality case of Cauchy-Schwarz the two functions $x\psi$ and $\psi'$ are proportional: there is a constant $\beta$ with

$$
\psi'(x) = \beta\,x\,\psi(x) \qquad\text{for all } x .
$$

Separating variables, $\bigl(\log\psi\bigr)' = \beta x$ wherever $\psi \neq 0$, so $\psi(x) = Ae^{\beta x^2/2}$ for a constant $A$, and this formula also covers the case $A = 0$, excluded by normalisation. For $\psi$ to be a Schwartz function $\beta$ must be real and negative; writing $\beta = -2B$ with $B > 0$ gives $\psi(x) = Ae^{-Bx^2}$. Finally the normalisation fixes $\lvert A\rvert$: by the :ref[Gaussian integral]{to=found.gaussian-integrals} $\int e^{-2Bx^2}dx = \sqrt{\pi/2B}$, so $1 = \lvert A\rvert^2\sqrt{\pi/2B}$, that is $\lvert A\rvert^2 = \sqrt{2B/\pi}$.

Conversely let $\psi(x) = Ae^{-Bx^2}$ with these constants. Then $\psi' = -2Bx\psi$, so $\int\lvert\psi'\rvert^2 = 4B^2\int x^2\lvert\psi\rvert^2$. The Gaussian moment $\int x^2 e^{-2Bx^2}dx = \tfrac{1}{4B}\sqrt{\pi/2B}$ gives $\int x^2\lvert\psi\rvert^2 dx = 1/4B$, hence $\int\lvert\psi'\rvert^2 = B$ and, by step 4, $\int\xi^2\lvert\hat\psi\rvert^2 d\xi = B/4\pi^2$. The product is $(1/4B)(B/4\pi^2) = 1/16\pi^2$ for every $B$, so every such Gaussian attains the bound. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Rapid decay is used once, in step 1**, to discard the boundary term $\bigl[x\lvert\psi\rvert^2\bigr]_{-\infty}^{\infty}$. It is not a technicality: for a normalised $\psi$ with $\lvert\psi(x)\rvert^2 \sim c/\lvert x\rvert^{3}$ the boundary term still vanishes, but for slower decay the first integral $\int x^2\lvert\psi\rvert^2$ is infinite and the inequality says nothing. The theorem is therefore vacuous exactly when it would be hardest to prove, which is why the Schwartz class costs nothing here. :cite[Strauss]{work=strauss-2008 loc="§12.3, (19), p. 347"} runs the same step for a test function and gets the same boundary-free value $-\tfrac12$ for $\int x f f'\,dx$ when $f$ is real.
- **Normalisation sets the constant and nothing else.** For a general $\psi$ with $\lVert\psi\rVert^2 = N$, running the proof on $\psi/\sqrt N$ gives $\bigl(\int x^2\lvert\psi\rvert^2\bigr)\bigl(\int\xi^2\lvert\hat\psi\rvert^2\bigr) \ge N^2/16\pi^2$: the bound scales with the square of the mass, as it must, since both sides are quadratic in $\lvert\psi\rvert^2$.
- **Dilation invariance is the reason a bound on the product is the only bound available.** If $\psi_\delta(x) = \delta^{-1/2}\psi(x/\delta)$ then $\psi_\delta$ is still normalised, its position variance is $\delta^2$ times that of $\psi$ and its frequency variance is $\delta^{-2}$ times that of $\psi$. So each factor separately can be made as small as we please, and only the product is constrained. :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, Cor. 1.5 and the following paragraph, p. 139"} make the same observation for the Gaussian kernels $K_\delta(x) = \delta^{-1/2}e^{-\pi x^2/\delta}$: as $\delta\to 0$ the kernel spikes and its transform flattens.
- **Equality needs two things, not one.** The proof above follows Stein and Shakarchi in reading the equality case off Cauchy-Schwarz in step 3. Equality also has to hold in step 2, where $\mathrm{Re}(\psi'\overline\psi)$ was replaced by $\lvert\psi'\rvert\lvert\psi\rvert$ (up to sign). That costs nothing: for $\psi' = \beta x\psi$ with $\beta$ real, $\psi'\overline\psi = \beta x\lvert\psi\rvert^2$ is already real and of constant sign against $x$, so step 2 is an equality automatically. Had $\beta$ been complex, step 2 would be strict, which is a second way of seeing why the minimiser cannot carry a chirp $e^{i\gamma x^2}$.
- **The two integrals must be computed about the right centres.** The constant-centre version with $x_0 = \xi_0 = 0$ is weaker, not stronger, than it looks: for a Gaussian shifted to sit at $x = 10$ the integral $\int x^2\lvert\psi\rvert^2$ is about $100$, so the product beats $1/16\pi^2$ by a wide margin without saying anything about the width. Step 6 is what makes the inequality say something about spreads rather than about distances from the origin.
- **Nothing here is special to one dimension or to this pair of variables.** The operator form of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§19.2, (19.38), p. 665"} shows that the obstruction is the commutator: two observables that commute carry no joint restriction, and if $[A,B]$ is a non-zero constant then no state makes both spreads vanish.
:::

:::method[Testing a given profile against the bound]{provenance=original}
1. Normalise: replace $\psi$ by $\psi/\lVert\psi\rVert_{L^2}$, so that $\int\lvert\psi\rvert^2 = 1$.
2. Find the two centres $\overline{x} = \int x\lvert\psi\rvert^2 dx$ and $\overline{\xi} = \int\xi\lvert\hat\psi\rvert^2 d\xi$. For real even or real odd $\psi$ both are $0$ by symmetry, and the step can be skipped.
3. Compute the position variance $V_x = \int (x-\overline x)^2\lvert\psi\rvert^2\,dx$ directly.
4. Compute the frequency variance **without** computing $\hat\psi$, using step 4 of the proof: if $\overline\xi = 0$ then $V_\xi = \frac{1}{4\pi^2}\int\lvert\psi'(x)\rvert^2\,dx$. This is usually much less work than transforming, and it is the standard route when $\psi$ is given in closed form but its transform is not. If $\overline{\xi}\neq 0$, apply it to $e^{-2\pi i \overline\xi x}\psi(x)$ instead.
5. Form the ratio $R = 16\pi^2 V_x V_\xi$. Then $R \ge 1$, with $R = 1$ precisely for Gaussians. The size of $R$ is a dimensionless measure of how far the profile is from optimal; it is unchanged by translating, modulating or dilating $\psi$, so it is a property of the shape alone.
6. Check your arithmetic against the invariance in step 5: recompute $R$ for $\psi(x/\delta)$ with some $\delta \neq 1$ and confirm that it does not move.
:::

:::example[A profile with $R = 9$, and the Gaussian with $R = 1$]{provenance=original}
Take the odd profile

$$
\psi(x) = c\,x\,e^{-\pi x^2} , \qquad c > 0 ,
$$

which is a Schwartz function and is not a Gaussian.

**Normalisation.** $\int x^2 e^{-2\pi x^2}dx = \frac{1}{4\pi}\sqrt{\pi/2\pi} = \frac{1}{4\pi\sqrt2}$, using $\int x^2 e^{-\alpha x^2}dx = \tfrac12\sqrt{\pi}\,\alpha^{-3/2}$ with $\alpha = 2\pi$. Hence $c^2 = 4\pi\sqrt2$, and we may take $c = (4\pi\sqrt{2})^{1/2} = 4.2156\ldots$

**Centres.** $\lvert\psi\rvert^2$ is even, so $\overline x = 0$. Since $\psi$ is real and odd, $\hat\psi$ is odd times $i$, so $\lvert\hat\psi\rvert^2$ is even and $\overline\xi = 0$. Step 2 of the method is therefore trivial.

**Position variance.** With $\alpha = 2\pi$ and $\int x^4 e^{-\alpha x^2}dx = \tfrac34\sqrt{\pi}\,\alpha^{-5/2}$,

$$
V_x = c^2\int_{-\infty}^{\infty} x^4 e^{-2\pi x^2}dx = 4\pi\sqrt2 \cdot \frac{3\sqrt\pi}{4(2\pi)^{5/2}} = \frac{3}{4\pi} = 0.2387324\ldots
$$

**Frequency variance.** Differentiating, $\psi'(x) = c\,(1-2\pi x^2)e^{-\pi x^2}$, so

$$
\int \lvert\psi'\rvert^2 dx = c^2\int (1 - 4\pi x^2 + 4\pi^2 x^4)e^{-2\pi x^2}dx
= c^2\Bigl(\tfrac{1}{\sqrt2} - 4\pi\cdot\tfrac{1}{4\pi\sqrt2} + 4\pi^2\cdot\tfrac{3\sqrt\pi}{4(2\pi)^{5/2}}\Bigr) ,
$$

using $\int e^{-2\pi x^2}dx = 1/\sqrt2$ together with the two moments already quoted. The first two terms cancel exactly, and the third collapses to $3\pi^{5/2}/(2\pi)^{5/2} = 3/2^{5/2} = 3/(4\sqrt2) = 0.5303301$. With $c^2 = 4\pi\sqrt2$ this gives $\int\lvert\psi'\rvert^2 = 4\pi\sqrt2\cdot 3/(4\sqrt2) = 3\pi = 9.424778$. By step 4 of the method,

$$
V_\xi = \frac{3\pi}{4\pi^2} = \frac{3}{4\pi} = 0.2387324\ldots
$$

**The ratio.**

$$
V_x V_\xi = \left(\frac{3}{4\pi}\right)^2 = \frac{9}{16\pi^2} = 0.05699317 ,
\qquad
R = 16\pi^2 V_x V_\xi = 9 .
$$

So this profile misses the bound by a factor of exactly nine: it is $3$ times too wide in position and frequency together. (The pattern continues: the $n$th Hermite function has $R = (2n+1)^2$, and the case $n = 0$ below is the Gaussian.)

**The Gaussian, for comparison.** Take $B = \pi$ in the equality case, so $\lvert A\rvert^2 = \sqrt{2\pi/\pi} = \sqrt2$ and $\psi_0(x) = 2^{1/4}e^{-\pi x^2}$. From the closing paragraph of the proof, $V_x = 1/4B = 1/4\pi$ and $V_\xi = B/4\pi^2 = 1/4\pi$, so

$$
V_xV_\xi = \frac{1}{16\pi^2} = 0.006332574 ,\qquad R = 1 ,
$$

and indeed $\hat\psi_0(\xi) = 2^{1/4}e^{-\pi\xi^2} = \psi_0(\xi)$: this Gaussian is its own transform. The two computations differ by the factor $9$, which is the whole content of the theorem in one number.
:::

:::application{provenance=original}
**Position and momentum.** In one-dimensional quantum mechanics a state is a normalised $\psi$, $\lvert\psi(x)\rvert^2$ is the probability density of position and, with $p = h\xi$, $\lvert\hat\psi(\xi)\rvert^2$ is the density of momentum; this is the reading :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §4, pp. 159–161"} set out. The theorem then says that the product of the two standard deviations is bounded below, and in the physical normalisation of :cite[Kreyszig]{work=kreyszig-1978 loc="§11.2, Thm 11.2-2, p. 580"} and :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§19.2, p. 666"} the bound is $\Delta x\,\Delta p \ge \hbar/2$. The equality case identifies the minimum-uncertainty states as the Gaussian wave packets, which is why coherent states of the harmonic oscillator are the ones used to model a classical trajectory as closely as quantum mechanics allows. Kreyszig stresses the correct reading: the limit is not an imperfection of instruments but a property of the state.

**Pulse length against bandwidth.** The same inequality with $(t,\omega)$ in place of $(x,\xi)$ is the duration-bandwidth theorem of signal processing. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§20.2, (20.35), p. 973"} make the point with a wave train of $N$ cycles at frequency $\omega_0$: its spectrum has width $\Delta\omega \approx \omega_0/N$, so clipping the pulse short necessarily broadens its frequency content. A radar or ultrasound designer who wants both a sharp range gate (short pulse) and a sharp Doppler estimate (narrow band) is asking for something the theorem forbids, and chirped pulses with matched filtering are the standard way to buy back resolution without violating it.

**Spectral line widths.** A transition with finite lifetime $\tau$ emits a wave train of finite duration, so its spectral line cannot be narrower than about $1/\tau$ in frequency; this natural linewidth, and the analogous broadening of nuclear magnetic resonance lines by short relaxation times, is the uncertainty principle used as a measuring tool rather than as a limitation, since the observed width yields the lifetime.

**Diffraction and beam divergence.** For light passing an aperture, the transverse coordinate $y$ and the transverse wave number $k_y = k\sin\theta$ are Fourier conjugates, so an aperture of width $\Delta y$ produces an angular spread $\Delta\theta \gtrsim 1/(k\,\Delta y) = \lambda/(2\pi\Delta y)$. Narrowing a slit to localise a beam therefore spreads it, and the Gaussian equality case is exactly the beam profile that diverges least, which is why laser cavities are designed around Gaussian modes.
:::
