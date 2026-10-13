---
id: asym.boundary-layers
title: Singular perturbations and boundary layers
kind: method
level: advanced
summary: 'Treats problems in which setting the small parameter to zero lowers the order of the equation, so that a boundary condition can no longer be imposed: the unit proves that the solution of a linear model problem splits into a smooth outer part plus a correction confined to a layer of width $\epsilon$, gives the recipe of inner and outer expansions and matching, and shows how dominant balance fixes the width of the layer.'
prereqs: [asym.regular-perturbation, asym.asymptotic-series, asym.watson-lemma, ode.constant-coefficients, ode.first-order-methods]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§3.5 Overdamped bead on a rotating hoop, pp. 64-69: the nondimensionalisation of $mr\\ddot\\phi + b\\dot\\phi = -mg\\sin\\phi + mr\\omega^2\\sin\\phi\\cos\\phi$ with time scale $T = b/mg$, Eq. (3) and the requirement $r/gT^2 \\ll 1$ (pp. 64-65); the dimensionless groups $\\gamma = r\\omega^2/g$ and $\\epsilon = m^2gr/b^2$ and the resulting equation (6) (p. 66); the paradox that the reduced first-order equation (7) cannot accept both initial conditions (p. 66); the phase-plane argument that off the curve $C:\\Omega = f(\\phi)$ the acceleration is $O(1/\\epsilon)$, so trajectories reach $C$ almost instantly and then drift slowly along it (pp. 67-68); and the subsection *A Singular Limit*, which runs from the foot of p. 68 onto p. 69, where the loss of the highest derivative is named a *singular* limit, the rapid transient is called a boundary layer in time, the subject is named singular perturbation theory, and the high-Reynolds-number limit is given as the example that produces thin layers on a wing"
    pages: "64-69"
    role: the worked physical example of an initial layer, including its nondimensionalisation and the two-time-scale diagnosis; the name *singular*, the name *boundary layer* and its extension to a layer in time, the name *singular perturbation theory*, and the fluid-mechanical instance
  - work: evans-2010
    loc: "§4.5.1 Singular perturbations, pp. 200-204: the description of a singular perturbation as the addition of $\\epsilon$ times a term of higher order, together with the informal principle that the terms of highest order are what mainly decides how a solution behaves (p. 200); Example 1, the dye problem $-\\epsilon\\Delta u^\\epsilon + \\operatorname{div}(u^\\epsilon\\mathbf{b}) = \\delta_0$ in $\\mathbb{R}^2$, Eqs. (1)-(2) (pp. 200-201); the estimate that the plume has width $O((\\epsilon t)^{1/2})$ and hence amplitude $O(\\epsilon^{-1/2})$, the rescaling $z = \\epsilon^{-1/2}y$, $v^\\epsilon = \\epsilon^{1/2}u^\\epsilon$ chosen so that both are $O(1)$, Eq. (9), and the parabolic limit equation (17) obtained in those variables (pp. 203-204)"
    pages: "200-204"
    role: the definition of a singular perturbation as a small multiple of a higher-order term, with the principle that the highest-order terms govern; the practice of rescaling the transverse variable and the amplitude by the powers of $\epsilon$ that make both quantities of order one, which is the rescaling step of the method; a two-dimensional instance in which the layer has width $\epsilon^{1/2}$ rather than $\epsilon$
  - work: stakgold-holst-2011
    loc: "§6.1, Example 5, p. 353: the diffusion-absorption problem $-u'' + q(x)u = f(x)$ on $0<x<1$ with $u(0)=\\gamma_1$, $u(1)=\\gamma_2$, and the closing statement that small $q$ admits a regular perturbation scheme whereas very large $q$ -- equivalently a small diffusion constant -- requires the techniques of singular perturbation; §9.4, p. 612 and Remark 1, p. 616: for the absorption problem $-\\Delta U = -\\lambda U^p$, (9.4.55), on a bounded convex $\\Omega$, the set where $U$ vanishes -- the dead core -- is non-empty for large $\\lambda$ only when $p<1$ (p. 612, with the solution $U = \\cosh(\\sqrt\\lambda x)/\\cosh(\\sqrt\\lambda a)$ of the case $p=1$ as the counterexample), and in that case it covers $\\Omega$ apart from a thin collar against $\\partial\\Omega$, of thickness $\\lambda^{-1/2}$ (p. 616)"
    pages: "353, 612, 616"
    role: the identification of a small diffusion constant as the singular-perturbation regime of a diffusion-absorption problem; a quantitative boundary-layer thickness, $\lambda^{-1/2}$, in a nonlinear elliptic problem with $p<1$, used as an independent check of the dominant-balance rule for the width
---

:::definition[Singular perturbation, outer region, boundary layer]{provenance=adapted src="evans-2010:§4.5.1, p. 200; strogatz-1994:§3.5, A Singular Limit, pp. 68-69"}
Let $P(\epsilon)$ be a family of differential equations depending on a parameter $\epsilon > 0$. The feature that earns the name **singular perturbation** is a failure of continuity in $\epsilon$: however small the parameter is taken, the solution of $P(\epsilon)$ need not resemble the solution of $P(0)$. Evans accounts for this by the weight carried by the derivatives of highest order, which are informally the terms that settle how a solution behaves; the perturbations he calls singular are exactly those that attach the factor $\epsilon$ to a term of order *higher* than any already present, so that the term governing the perturbed equation is the one that vanishes in the limit.

For a two-point problem on an interval the consequence is concrete. If the equation is of second order for every $\epsilon > 0$ but of first order at $\epsilon = 0$, then the limit problem accepts one boundary condition and not two. Strogatz calls such a limit **singular**, precisely because the data can no longer be imposed, and names the subject that deals with it *singular perturbation theory*. The method of :ref[]{to=asym.regular-perturbation} does not apply: its first requirement is that $P(0)$ be a problem of the same type as $P(\epsilon)$.

What happens instead is that the solution ceases to have a single scale. Fix a point $x_0$ of the closed interval and a positive function $\delta(\epsilon)$ with $\delta(\epsilon) \to 0$.

- The **outer region** is the part of the interval on which $x - x_0$ is of order $1$. There the solution is smooth and has a :ref[regular expansion]{to=asym.regular-perturbation} in powers of $\epsilon$, called the **outer expansion**, whose leading term solves the limit problem $P(0)$.
- The **inner region**, or **boundary layer**, is the set where $x - x_0$ is of order $\delta(\epsilon)$. There the right variable is the **inner variable** $X = (x - x_0)/\delta(\epsilon)$, and the expansion of the solution as a function of $X$ is the **inner expansion**. The number $\delta(\epsilon)$ is the **width** of the layer.
- **Matching** is the requirement that the two expansions describe the same function in the intermediate range $\delta(\epsilon) \ll |x - x_0| \ll 1$, where both are supposed to hold.

Strogatz's term *boundary layer* comes from fluid mechanics, where such a region is a thin sheet of fluid next to a solid surface; he also applies it to a thin interval of *time* at the start of a motion, and we shall do the same. Nothing in the definition requires $x_0$ to be an endpoint: layers can sit at an interior point, or, as in Evans's dye problem, along a curve inside a two-dimensional region.
:::

:::statement[A linear model problem]{provenance=original}
Let $a > 0$ and $b, \alpha, \beta$ be real constants, and for $\epsilon > 0$ consider

$$
\epsilon y'' + a y' + b y \;=\; 0 \quad \text{on } [0,1] , \qquad y(0) = \alpha , \quad y(1) = \beta .
$$

Define the **outer solution** $y_{\mathrm{out}}$ as the solution of the limit problem $a y' + by = 0$, $y(1) = \beta$, namely

$$
y_{\mathrm{out}}(x) \;=\; \beta\, e^{(b/a)(1-x)} ,
$$

and the **composite approximation**

$$
y_{\mathrm{comp}}(x) \;=\; y_{\mathrm{out}}(x) \;+\; \bigl(\alpha - y_{\mathrm{out}}(0)\bigr)\, e^{-ax/\epsilon} .
$$

Then there are numbers $\epsilon_0 > 0$ and $C$, both depending only on $a$, $b$, $\alpha$, $\beta$ and not on $\epsilon$, such that for every $\epsilon \in (0,\epsilon_0)$ the boundary-value problem has exactly one solution $y_\epsilon$ and

$$
\sup_{0 \le x \le 1} \bigl| y_\epsilon(x) - y_{\mathrm{comp}}(x) \bigr| \;\le\; C\,\epsilon .
$$

The approximation is therefore uniform on the whole interval, including inside the layer. Note what each piece does: $y_{\mathrm{out}}$ satisfies the condition at $x = 1$ exactly and the one at $x = 0$ not at all; the added exponential is of size $\alpha - y_{\mathrm{out}}(0)$ at $x = 0$, repairs the condition there, and is smaller than any power of $\epsilon$ once $x$ is of order $1$.
:::

:::idea{provenance=original}
A constant-coefficient equation can be solved exactly, so the whole phenomenon is visible in the two roots of $\epsilon m^{2} + am + b = 0$. Their product is $b/\epsilon$ and their sum is $-a/\epsilon$, so one of them must be enormous: as $\epsilon \to 0$ one root stays near $-b/a$, which is the root of the limit equation $am + b = 0$, while the other runs off to $-a/\epsilon$. The first gives a smooth function of $x$; the second gives $e^{-ax/\epsilon}$, which equals $1$ at $x = 0$ and is beyond-all-orders small as soon as $x$ exceeds a few multiples of $\epsilon$. So the exact solution is a smooth outer part plus a spike at the left end whose only duty is to fix the value at $x = 0$, and the layer width $\epsilon$ is not assumed but read off from the lost root.

The proof has only to make this quantitative. Two estimates do it: each root differs from its stated limit by $O(\epsilon)$, and the coefficients in front of the two exponentials differ from the ones in $y_{\mathrm{comp}}$ by $O(\epsilon)$. One subtlety is that the fast exponential is $e^{m_-x}$ rather than $e^{-ax/\epsilon}$, and these differ by a factor $e^{cx}$ with $c$ of order $1$ — an $O(x)$ relative error, not an $O(\epsilon)$ one. It is harmless because it is multiplied by $e^{-ax/\epsilon}$, and $x e^{-ax/\epsilon}$ never exceeds $\epsilon/(ea)$.
:::

:::proof{provenance=original}
Throughout, $0 < \epsilon < \epsilon_1 := a^{2}/\bigl(8(1+|b|)\bigr)$, and $C_1, C_2, \dots$ denote constants built from $a,b,\alpha,\beta$ alone. A second explicit restriction on $\epsilon$ is imposed in step 6; the $\epsilon_0$ of the statement is the smaller of the two bounds.

1. **The two roots.** The characteristic equation $\epsilon m^{2} + am + b = 0$ has discriminant $a^{2} - 4\epsilon b$. Since $4\epsilon|b| \le 4\epsilon_1(1+|b|) = a^{2}/2$, we have
   $$
   \tfrac12 a^{2} \;\le\; a^{2} - 4\epsilon b \;\le\; \tfrac32 a^{2} ,
   $$
   so $s := \sqrt{a^{2}-4\epsilon b}$ is real and $a/2 \le s \le 2a$. The roots $m_\pm = (-a \pm s)/(2\epsilon)$ are real and distinct.

2. **The slow root.** Rationalising, $m_+ = \dfrac{s^{2}-a^{2}}{2\epsilon(s+a)} = \dfrac{-4\epsilon b}{2\epsilon(s+a)} = \dfrac{-2b}{s+a}$. Hence, using $a - s = (a^{2}-s^{2})/(a+s) = 4\epsilon b/(a+s)$ and $s + a \ge a$,
   $$
   \Bigl| m_+ + \frac{b}{a} \Bigr| \;=\; |b|\,\frac{|a - s|}{a(s+a)} \;=\; \frac{4\epsilon b^{2}}{a(s+a)^{2}} \;\le\; \frac{4b^{2}}{a^{3}}\,\epsilon \;=:\; K_1\epsilon .
   $$
   In particular $|m_+| \le |b|/a + K_1\epsilon_1 =: K_2$, a bound independent of $\epsilon$.

3. **The fast root.** From $m_- = -(a+s)/(2\epsilon)$ and $s \ge a/2$ we get $m_- \le -3a/(4\epsilon) < 0$. Also
   $$
   m_- + \frac{a}{\epsilon} \;=\; \frac{a - s}{2\epsilon} \;=\; \frac{2b}{a+s} \;=:\; c , \qquad |c| \;\le\; \frac{2|b|}{a} \;=:\; c_0 ,
   $$
   so that $e^{m_-x} = e^{-ax/\epsilon}e^{cx}$ exactly. **This is where $a > 0$ is used**: it makes $m_-$ negative, so the fast mode decays as $x$ increases and the layer sits at the left endpoint.

4. **Existence and uniqueness.** Because the roots are distinct, every solution is $y = Ae^{m_+x} + Be^{m_-x}$. The boundary conditions give the linear system $A + B = \alpha$, $Ae^{m_+} + Be^{m_-} = \beta$, whose determinant is $e^{m_-} - e^{m_+} \ne 0$ since $m_- \ne m_+$ and the exponential is injective on $\mathbb{R}$. So there is exactly one solution $y_\epsilon$.

5. **A name for the exponentially small quantity.** Put $E := e^{m_-} \le e^{-3a/(4\epsilon)}$. For every $k$ there is a constant with $E \le C_k\epsilon^{k}$, so any term of size $O(E)$ may be absorbed into the $O(\epsilon)$ of the conclusion.

6. **The coefficient of the slow mode.** Solving the system, $A = (\beta - \alpha E)/(e^{m_+} - E)$. Let $A_0 := y_{\mathrm{out}}(0) = \beta e^{b/a}$, so that $y_{\mathrm{out}}(x) = A_0e^{-(b/a)x}$. First compare $A$ with $\beta e^{-m_+}$:
   $$
   A - \beta e^{-m_+} \;=\; \frac{\beta - \alpha E}{e^{m_+}-E} - \frac{\beta}{e^{m_+}} \;=\; \frac{E\bigl(\beta - \alpha e^{m_+}\bigr)}{e^{m_+}\bigl(e^{m_+}-E\bigr)} .
   $$
   By step 2, $e^{-K_2} \le e^{m_+} \le e^{K_2}$. By step 5, $E \le e^{-3a/(4\epsilon)}$, and this is at most $\tfrac12 e^{-K_2}$ as soon as $\epsilon < \epsilon_2 := 3a/\bigl(4(K_2+\ln 2)\bigr)$. **Set $\epsilon_0 := \min(\epsilon_1,\epsilon_2)$ and assume $\epsilon < \epsilon_0$ from here on.** Then $|e^{m_+} - E| \ge \tfrac12 e^{-K_2}$, the numerator is at most $E(|\beta| + |\alpha|e^{K_2})$, and $|A - \beta e^{-m_+}| \le C_3E$. Next, by step 2 and $|e^{u}-e^{v}| \le e^{\max(u,v)}|u-v|$,
   $$
   \bigl| \beta e^{-m_+} - A_0 \bigr| \;=\; |\beta|\,\bigl| e^{-m_+} - e^{b/a} \bigr| \;\le\; |\beta|e^{K_2}K_1\epsilon .
   $$
   Adding, $|A - A_0| \le C_4\epsilon$. Since $A + B = \alpha$ and $B_0 := \alpha - A_0$, also $|B - B_0| \le C_4\epsilon$.

7. **The slow part of the error.** For $0 \le x \le 1$,
   $$
   A e^{m_+x} - y_{\mathrm{out}}(x) \;=\; (A - A_0)e^{m_+x} \;+\; A_0\bigl( e^{m_+x} - e^{-(b/a)x} \bigr) .
   $$
   The first term is at most $C_4\epsilon\,e^{K_2}$ in absolute value. For the second, $|m_+x + (b/a)x| \le K_1\epsilon$ by step 2 and $x \le 1$, so again by $|e^{u}-e^{v}| \le e^{\max(u,v)}|u-v|$ the bracket is at most $e^{K_2}K_1\epsilon$. Hence this part of the error is $\le C_5\epsilon$, uniformly in $x$.

8. **The fast part of the error.** Using step 3,
   $$
   B e^{m_-x} - B_0e^{-ax/\epsilon} \;=\; e^{-ax/\epsilon}\Bigl[ (B - B_0)e^{cx} + B_0\bigl(e^{cx}-1\bigr) \Bigr] .
   $$
   Since $e^{-ax/\epsilon} \le 1$ and $|e^{cx}| \le e^{c_0}$, the first inner term contributes at most $C_4e^{c_0}\epsilon$. For the second, $|e^{cx}-1| \le |c|x\,e^{c_0} \le c_0e^{c_0}x$, so its contribution is at most
   $$
   |B_0|c_0e^{c_0}\,\sup_{x \ge 0} x\,e^{-ax/\epsilon} \;=\; |B_0|c_0e^{c_0}\,\frac{\epsilon}{ea} ,
   $$
   the supremum being attained at $x = \epsilon/a$. So this part of the error is also $\le C_6\epsilon$.

9. **Conclusion.** Since $y_\epsilon = Ae^{m_+x}+Be^{m_-x}$ and $y_{\mathrm{comp}} = y_{\mathrm{out}} + B_0e^{-ax/\epsilon}$, steps 7 and 8 give $|y_\epsilon - y_{\mathrm{comp}}| \le (C_5+C_6)\epsilon$ for every $x \in [0,1]$. Take $C = C_5 + C_6$. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Two boundary conditions against a first-order limit.** This is the singularity itself, and it is why :ref[]{to=asym.regular-perturbation} cannot be used. A regular expansion $y = Y_0 + \epsilon Y_1 + \cdots$ with coefficients independent of $\epsilon$ puts $aY_0' + bY_0 = 0$ at leading order, a first-order equation; it can meet $y(0)=\alpha$ or $y(1)=\beta$, not both, and no later term can help, because every $Y_j$ obeys the same first-order operator with homogeneous data at whichever end was used. The expansion does not fail by being inaccurate; it fails by not existing.
- **$a > 0$ decides which condition the outer solution keeps.** It enters at step 3, where it makes the fast root negative. If $a < 0$ the fast mode is $e^{|a|x/\epsilon}$, which is negligible except near $x = 1$: the layer moves to the right endpoint and the outer solution must carry $y(0) = \alpha$ instead. The stated formula is then not merely inaccurate but divergent. Take $a = -1$, $b = 0$, $\alpha = 1$, $\beta = 0$. The exact solution of $\epsilon y'' - y' = 0$ with these data is $y_\epsilon(x) = \bigl(e^{1/\epsilon} - e^{x/\epsilon}\bigr)/\bigl(e^{1/\epsilon}-1\bigr)$, which is close to $1$ for $x$ away from $1$ and drops to $0$ in a layer of width $\epsilon$ at $x = 1$; the formula of the statement would return $y_{\mathrm{out}} \equiv 0$ plus $e^{x/\epsilon}$, which at $x=1$ is $e^{1/\epsilon}$.
- **$a$ must not vanish, and the width depends on which terms balance.** Every bound in steps 2 and 3 is expressed through $1/a$ and becomes vacuous as $a$ shrinks. If $a = 0$ the equation is $\epsilon y'' + by = 0$ and the analysis above says nothing, correctly so: for $b < 0$ the solution has layers of width $\epsilon^{1/2}$ at *both* ends, and for $b > 0$ it oscillates with wavelength of order $\epsilon^{1/2}$ over the whole interval and the problem is not even uniquely solvable at the values $\epsilon = b/(n^{2}\pi^{2})$, $n \in \mathbb{N}$. The lesson is that $\epsilon$ is the width only when the first-derivative term is present; step 4 of the method below computes the width in general.
- **A coefficient that changes sign.** If $a$ is replaced by a function $a(x)$ the statement goes through, with $e^{-ax/\epsilon}$ replaced by $\exp\Bigl(-\frac{1}{\epsilon}\int_0^{x} a(t)\,dt\Bigr)$, as long as $a(x) \ge a_0 > 0$ throughout; the worked example below is of this kind. Where $a$ changes sign the structure is different again: the layer moves into the interior, and whether it exists at all depends on the direction of the sign change.
- **The bound is asymptotic, not a guarantee at a given $\epsilon$.** The conclusion is $C\epsilon$ with $C$ unknown, and the example below settles at $C \approx 1.88$. At $\epsilon = 0.1$ that is an absolute error of $0.13$ at a point where the solution itself is about $1.5$. Nothing in the theorem forbids that, and nothing in it says when $\epsilon$ is small enough.
- **$\epsilon > 0$.** For $\epsilon < 0$ the fast root is large and positive and the two-point problem is badly behaved: the sign of the small parameter is part of the data, not a detail.
:::

:::method[Matched asymptotic expansions]{provenance=adapted src="evans-2010:§4.5.1, pp. 200, 203-204; strogatz-1994:§3.5, pp. 64-68"}
Steps 1 and 4 follow the two cited works: the nondimensionalisation and two-scale diagnosis are Strogatz's, and the choice of rescaled variables that makes every quantity of order one is the step Evans carries out for the dye plume. Steps 2, 3 and 5 to 8 are the standard practice of the subject and are not taken from either work; they are our responsibility.

1. **Nondimensionalise, then identify $\epsilon$.** Scale the variables so that the small parameter is a dimensionless group. Strogatz's warning is worth repeating. Sending the mass to zero is not a usable limit, because the mass multiplies more than one term and several of them vanish together; only after dividing through by a reference force, and choosing the time scale so that the derivatives are of order one, does a single dimensionless group appear whose smallness means something.
2. **Check that the limit is singular.** Set $\epsilon = 0$. If the order of the equation drops, or a boundary or initial condition becomes unenforceable, continue here; otherwise use :ref[]{to=asym.regular-perturbation}.
3. **Outer expansion.** In the region where the independent variable is of order $1$, write $y \sim Y_0 + \epsilon Y_1 + \cdots$ and solve the reduced problem, imposing the condition at the end *away* from the layer. Which end that is, is fixed by the sign of the coefficient of the highest surviving derivative: the layer sits where the discarded fast mode decays into the interior. If you guess wrong, step 6 will have no solution — that is the diagnostic.
4. **Fix the position and width by dominant balance.** Put $x = x_0 + \delta(\epsilon)X$ and rewrite the equation in $X$. Choose $\delta$ as the largest gauge for which the highest derivative returns at the same order as some other term; at that $\delta$ the lost term is back in play. For $\epsilon y'' + ay'$ this means $\epsilon/\delta^{2} \sim 1/\delta$, so $\delta = \epsilon$. For $\epsilon y'' + by$, with no first derivative, it means $\epsilon/\delta^{2} \sim 1$, so $\delta = \epsilon^{1/2}$. Evans does exactly this for the dye plume, rescaling the transverse coordinate by $\epsilon^{-1/2}$ and the amplitude by $\epsilon^{1/2}$ so that both become quantities of order one; rescaling the *unknown* as well as the variable is often necessary, and the right powers are those that leave no large and no vanishing coefficient in the leading inner equation.
5. **Inner expansion.** Expand $y \sim \mathcal{Y}_0(X) + \delta\,\mathcal{Y}_1(X) + \cdots$ and impose the boundary condition at $x_0$. The leading inner equation has constant coefficients in the typical case, because the coefficient functions are frozen at their values at $x_0$, so it can be solved in closed form. It will leave one constant free: the inner problem has lost the boundary condition at the far end.
6. **Match.** Require that the two descriptions agree in the overlap. At leading order this is Prandtl's condition
   $$
   \lim_{X \to \infty} \mathcal{Y}_0(X) \;=\; \lim_{x \to x_0} Y_0(x) ,
   $$
   and it is exactly what determines the constant left free in step 5. (If the limit on the left does not exist, the width chosen in step 4 is wrong.)
7. **Composite approximation.** Add the two and subtract what they share, so that the shared part is not counted twice:
   $$
   y_{\mathrm{comp}}(x) \;=\; Y_0(x) \;+\; \mathcal{Y}_0\!\left(\frac{x-x_0}{\delta}\right) \;-\; \lim_{X\to\infty}\mathcal{Y}_0(X) .
   $$
   In the outer region the last two terms cancel to leading order and $Y_0$ survives; in the layer the first and last cancel and $\mathcal{Y}_0$ survives.
8. **Check afterwards.** Verify that $y_{\mathrm{comp}}$ meets both boundary conditions to the claimed order; that the terms dropped in each region really are smaller there than the ones kept; and that the inner solution settles to its limit over $X$ of order $1$ and not over some larger range, which would mean the width is wrong.
:::

:::example[A variable-coefficient problem solved exactly and asymptotically]{provenance=original}
Take

$$
\epsilon y'' + (1+x)\,y' + y \;=\; 0 \quad \text{on } [0,1] , \qquad y(0) = 0 , \quad y(1) = 1 ,
$$

with $0 < \epsilon \ll 1$. Here $a(x) = 1 + x \ge 1 > 0$, so by the remark above the layer is at $x = 0$.

**The method.** *Outer.* The reduced equation is $(1+x)Y_0' + Y_0 = 0$, that is $\bigl[(1+x)Y_0\bigr]' = 0$, so $Y_0 = c/(1+x)$; the condition at the far end, $Y_0(1) = 1$, gives $c = 2$ and

$$
Y_0(x) \;=\; \frac{2}{1+x} .
$$

It fails the condition at $x = 0$, where it takes the value $2$ instead of $0$.

*Width.* With $x = \delta X$ the equation becomes $(\epsilon/\delta^{2})\mathcal{Y}'' + (1/\delta)(1+\delta X)\mathcal{Y}' + \mathcal{Y} = 0$; the first two coefficients match when $\delta = \epsilon$, which is step 4.

*Inner.* With $X = x/\epsilon$ and $y(x) = \mathcal{Y}(X)$, multiplying through by $\epsilon$ gives exactly

$$
\mathcal{Y}'' + \mathcal{Y}' + \epsilon\bigl(X\mathcal{Y}' + \mathcal{Y}\bigr) \;=\; 0 ,
$$

so at leading order $\mathcal{Y}_0'' + \mathcal{Y}_0' = 0$, whence $\mathcal{Y}_0 = A + Be^{-X}$. The boundary condition $\mathcal{Y}_0(0) = 0$ gives $B = -A$.

*Matching and composite.* Step 6 requires $\lim_{X\to\infty}\mathcal{Y}_0 = A$ to equal $\lim_{x\to0}Y_0 = 2$, so $A = 2$ and $\mathcal{Y}_0(X) = 2\bigl(1-e^{-X}\bigr)$. The shared limit is $2$, so

$$
y_{\mathrm{comp}}(x) \;=\; \frac{2}{1+x} \;+\; 2\bigl(1-e^{-x/\epsilon}\bigr) \;-\; 2 \;=\; \frac{2}{1+x} \;-\; 2e^{-x/\epsilon} .
$$

It satisfies $y(0) = 0$ exactly and $y(1) = 1 - 2e^{-1/\epsilon}$, in error by an amount smaller than every power of $\epsilon$.

**An exact solution to test it against.** This problem can be integrated in closed form, which is why it was chosen. Because $(1+x)y' + y = \bigl[(1+x)y\bigr]'$, the equation is $\bigl[\epsilon y' + (1+x)y\bigr]' = 0$, so $\epsilon y' + (1+x)y$ is a constant $K$. That first-order linear equation, with $y(0)=0$ and the integrating factor $e^{\varphi(x)/\epsilon}$ where $\varphi(x) = x + \tfrac12x^{2}$, gives

$$
y(x) \;=\; \frac{K}{\epsilon}\,I(x) , \qquad I(x) \;:=\; \int_0^{x} e^{-(\varphi(x)-\varphi(t))/\epsilon}\,dt ,
$$

and $y(1) = 1$ fixes $K/\epsilon = 1/I(1)$, so that $y_\epsilon = I(x)/I(1)$ with no unknown constants. (Evaluating $I$ in terms of the imaginary error function is what we used for the numbers below.)

The same formula reproduces both expansions, which is a check on the method rather than on the arithmetic. For $x$ of order $1$ the integrand is concentrated within $O(\epsilon)$ of the upper limit, where $\varphi(x)-\varphi(t) \approx (1+x)(x-t)$; :ref[Watson's lemma]{to=asym.watson-lemma} gives $I(x) = \epsilon/(1+x) + O(\epsilon^{2})$ and $I(1) = \epsilon/2 + O(\epsilon^{2})$, so $y_\epsilon(x) \to 2/(1+x)$, the outer solution. For $x = \epsilon X$ the exponent is $\varphi(x)-\varphi(t) = (x-t) + O(\epsilon^{2})$, so $I(\epsilon X) = \epsilon(1-e^{-X}) + O(\epsilon^{2})$ and $y_\epsilon \to 2(1-e^{-X})$, the inner solution.

**Numbers at $\epsilon = 0.01$.** The layer occupies roughly $0 \le x \lesssim 0.05$, where the solution climbs from $0$ to about $1.9$; the outer part then decays slowly to $1$.

| $x$ | exact $y_\epsilon(x)$ | $y_{\mathrm{comp}}(x)$ | $y_{\mathrm{comp}} - y_\epsilon$ |
|---|---|---|---|
| $0.005$ | $0.784349$ | $0.776988$ | $-7.36\times10^{-3}$ |
| $0.02$ | $1.707852$ | $1.690114$ | $-1.77\times10^{-2}$ |
| $0.05$ | $1.905716$ | $1.891286$ | $-1.44\times10^{-2}$ |
| $0.10$ | $1.828934$ | $1.818091$ | $-1.08\times10^{-2}$ |
| $0.25$ | $1.606397$ | $1.600000$ | $-6.40\times10^{-3}$ |
| $0.50$ | $1.335975$ | $1.333333$ | $-2.64\times10^{-3}$ |
| $0.75$ | $1.143745$ | $1.142857$ | $-8.88\times10^{-4}$ |

**The rate.** Scanning the whole interval:

| $\epsilon$ | $\max_{[0,1]}\lvert y_{\mathrm{comp}}-y_\epsilon\rvert$ | located at $x =$ | error$/\epsilon$ |
|---|---|---|---|
| $0.1$ | $1.328\times10^{-1}$ | $0.170$ | $1.33$ |
| $0.01$ | $1.801\times10^{-2}$ | $0.0239$ | $1.80$ |
| $0.001$ | $1.881\times10^{-3}$ | $0.00255$ | $1.88$ |

The error falls by a factor of ten each time $\epsilon$ does, and the ratio settles near $1.88$: the uniform $O(\epsilon)$ of the model theorem, with an observed constant slightly below $2$. The worst point moves towards the origin with $\epsilon$, as it must, since the error lives in the layer.

One further number shows that the layer is genuinely of width $\epsilon$ and not an artefact. Differentiating the exact formula at the origin gives $y_\epsilon'(0) = 1/I(1)$; at $\epsilon = 0.01$ this is $199.4975$, against $y_{\mathrm{comp}}'(0) = 2/\epsilon - 2 = 198$, a relative discrepancy of $0.75\%$. A slope of order $1/\epsilon$ across a rise of order $1$ is a layer of width $\epsilon$.
:::

:::application[Strong damping, fast flow, and why centred differences oscillate]{provenance=adapted src="strogatz-1994:§3.5, pp. 64-69; evans-2010:§4.5.1, pp. 200-204; stakgold-holst-2011:§6.1 Example 5, p. 353; stakgold-holst-2011:§9.4, p. 612 and Remark 1, p. 616"}
**An initial layer: the overdamped limit.** Strogatz's bead of mass $m$ sliding on a hoop of radius $r$ spinning at rate $\omega$, with damping constant $b$, obeys $mr\ddot\phi + b\dot\phi = -mg\sin\phi + mr\omega^{2}\sin\phi\cos\phi$. Measuring time in units of $T = b/mg$ and dividing by $mg$ turns this into

$$
\epsilon\,\frac{d^{2}\phi}{d\tau^{2}} + \frac{d\phi}{d\tau} \;=\; f(\phi) , \qquad f(\phi) = \sin\phi\,(\gamma\cos\phi - 1) , \qquad \epsilon = \frac{m^{2}gr}{b^{2}} , \quad \gamma = \frac{r\omega^{2}}{g} ,
$$

so "overdamped" has the precise meaning $b^{2} \gg m^{2}gr$. This is step 1 of the method, and it is Strogatz's point that it cannot be skipped: the naive limit $m \to 0$ removes the gravitational and centrifugal terms along with the inertia.

The limit $\epsilon = 0$ leaves $d\phi/d\tau = f(\phi)$, of first order, which cannot accept both the initial position and the initial velocity. The resolution is a layer at $\tau = 0$ of width $\epsilon$. In the inner variable $\Theta = \tau/\epsilon$, writing $\Omega = d\phi/d\tau$, the system becomes $d\phi/d\Theta = \epsilon\Omega$ and $d\Omega/d\Theta = f(\phi) - \Omega$, so at leading order the position is frozen at $\phi_0$ while the velocity relaxes,

$$
\Omega(\Theta) \;=\; f(\phi_0) + \bigl(\Omega_0 - f(\phi_0)\bigr)e^{-\Theta} .
$$

The velocity therefore forgets its initial value over a time $\tau \sim \epsilon$ and arrives at the value the reduced equation demands; after that the slow drift $d\phi/d\tau = f(\phi)$ is correct. This is precisely Strogatz's phase-plane picture: a trajectory starting off the curve $\Omega = f(\phi)$ feels an acceleration of order $1/\epsilon$ and is thrown onto that curve almost at once, then creeps along it to a fixed point. He calls the transient a boundary layer in time, a thin interval near $\tau = 0$. The same calculation is the justification of what is called adiabatic elimination of a fast variable in chemical kinetics and in laser physics.

**Fluid mechanics, where the name comes from.** Strogatz names the high-Reynolds-number limit of fluid flow as the singular limit that produces the thin layers over an aircraft wing. The structure is the one above: dropping the viscous term lowers the order of the Navier–Stokes equations, so the no-slip condition at the surface can no longer be imposed, and it is restored inside a layer. Step 4 gives the thickness. With $U$ a free-stream speed, $L$ a chord length and $\nu$ the kinematic viscosity, the balance inside the layer is viscous diffusion across it against advection along it, $\nu U/\delta^{2} \sim U^{2}/L$, so $\delta \sim \sqrt{\nu L/U} = L\,\mathrm{Re}^{-1/2}$. The small parameter is $\epsilon = 1/\mathrm{Re}$ and the width is $\epsilon^{1/2}$, not $\epsilon$, because the advection that opposes diffusion runs along the wall rather than across it.

**Transport with weak diffusion.** Stakgold and Holst's diffusion-absorption problem $-u'' + q(x)u = f(x)$ on $0 < x < 1$, with prescribed concentrations at two walls, is their standard illustration: small $q$ is a regular perturbation, whereas very large $q$ — the same thing as a small diffusion constant — requires singular perturbation. Take $q$ constant for the purpose of the scaling and divide by it: the equation becomes $\epsilon u'' - u = -f/q$ with $\epsilon = 1/q$, which has no first-derivative term, so step 4 predicts layers of width $q^{-1/2}$ at both walls, with the interior settled at $u \approx f/q$. Their Remark 1 on the nonlinear absorption problem $-\Delta U = -\lambda U^{p}$ on a bounded convex domain gives the corresponding statement independently, for *absorption exponents $p<1$ only*: in that range large $\lambda$ produces a dead core, a set on which $U$ vanishes identically, and the core grows until it covers all of the domain apart from a thin collar next to the boundary, whose thickness they give as $\lambda^{-1/2}$. That the same power comes out of a one-line dominant balance is a useful check that step 4 is doing real work. The restriction on $p$ is not a technicality, and Stakgold and Holst make the point with the case $p = 1$ on $|x| < a$, whose solution $U = \cosh(\sqrt{\lambda}x)/\cosh(\sqrt{\lambda}a)$ is strictly positive for every $\lambda$: no dead core, and therefore no collar, although $U$ is still exponentially small away from the walls in a layer of the same width. What the two cases differ in is the Lipschitz behaviour of the absorption term at $U = 0$, which they identify as the source of the phenomenon: the derivative of $U^{p}$ is infinite at $U = 0+$ only when $p < 1$, and it is that infinite slope which lets a solution reach zero at a finite distance instead of merely approaching it.

Evans's example is of the same family but with the layer along a curve rather than at a wall. Dye injected at the origin into a steady plane flow $\mathbf{b}$ satisfies $\operatorname{div}(u\mathbf{b}) = \delta_0$, which concentrates it on the streamline through the origin; adding a small diffusion, $-\epsilon\Delta u^{\epsilon} + \operatorname{div}(u^{\epsilon}\mathbf{b}) = \delta_0$, spreads it into a plume. Evans estimates the plume's width at time $t$ along the streamline as $O\bigl((\epsilon t)^{1/2}\bigr)$, and hence, the total mass being fixed, its height as $O(\epsilon^{-1/2})$; rescaling the normal coordinate by $\epsilon^{-1/2}$ and the density by $\epsilon^{1/2}$ so that both are of order one turns the elliptic equation into a parabolic one in the inner variables. The width is again $\epsilon^{1/2}$, for the reason given above: across the plume the flow has no component to oppose the diffusion.

**A numerical consequence.** Discretising $\epsilon y'' + ay' = 0$ with centred differences on a uniform mesh of spacing $h$ gives $(1+P)y_{j+1} - 2y_j + (1-P)y_{j-1} = 0$ with $P = ah/(2\epsilon)$, half the cell Péclet number $\mathrm{Pe} = ah/\epsilon$, whose decaying mode is $r = (1-P)/(1+P)$ in place of the true $e^{-ah/\epsilon}$. For $P > 1$, that is for $\mathrm{Pe} > 2$ — any mesh that does not resolve the layer, $h > 2\epsilon/a$ — this is *negative*, and the computed solution oscillates from node to node instead of decaying. The remedies are the standard ones: upwind the first-derivative term, or refine the mesh inside the layer where the asymptotics say the layer is. The analysis of this unit is what tells one where to refine, and the composite approximation is a good initial guess for the iteration. See :ref[]{to=num.finite-differences}, :ref[]{to=num.stiffness} and :ref[]{to=pde.advection-diffusion}; the companion technique for problems whose small parameter multiplies the highest derivative but whose solutions oscillate rather than decay is :ref[]{to=asym.wkb-approximation}.
:::
