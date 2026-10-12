---
id: pde.similarity-solutions
title: Similarity and self-similar solutions
kind: method
level: core
summary: Shows how a dilation symmetry of a partial differential equation forces solutions of the form t^{-alpha} v(x/t^beta), reduces the equation to an ordinary differential equation for the profile v, and carries this out for the diffusion equation, for the porous medium equation (the Barenblatt solution) and for the Airy equation.
prereqs: [pde.classification, pde.heat-kernel, found.partial-derivatives-chain-rule]
provenance: adapted
sources:
  - work: evans-2010
    loc: "§2.3.1a, pp. 43–44: the dilation scaling $u(x,t)\\mapsto\\lambda^\\alpha u(\\lambda^\\beta x,\\lambda t)$, the ansatz (4), the reduced equation (5)–(6), the radial reduction and the integration to the heat kernel (7); §4.2, p. 167 (similarity solutions as solutions reflecting a symmetry of the equation); §4.2.2, pp. 175–177: the same programme for the porous medium equation, the exponent relations (30) and (33), the integration of (32) and the Barenblatt-Kompaneetz-Zeldovich formulas (35)–(36), with the remark on compact support and finite propagation speed"
    pages: "43-44, 167, 175-177"
    role: the scaling-invariance ansatz and the exponent bookkeeping; the derivation and final form of the Barenblatt solution; the heat-kernel case in n dimensions
  - work: strauss-2008
    loc: "§2.4, pp. 47–49: the five invariance properties of the diffusion equation, in particular the dilation $u(x,t)\\mapsto u(\\sqrt a\\,x, at)$ (property (e)); the argument that the step initial condition is itself dilation-invariant, so that $Q$ must depend on $x/\\sqrt{t}$ alone; the reduction to $g''+2pg'=0$ and the resulting error-function formula (5), and the differentiation to the source function (7)–(8)"
    pages: "47-49"
    role: the diffusion similarity solution, including the reasoning that selects the similarity variable from the invariance of the data
  - work: stakgold-holst-2011
    loc: "§8.2, Exercise 8.2.6(c), p. 488: the half-line heat problem, its invariance under $x^* = ax$, $t^* = a^2t$, the choice $a = 1/2\\sqrt{t}$, the reduced equation $h'' + 2\\xi h' = 0$ and the solution $h = 1 - \\operatorname{erf}\\xi$"
    pages: "488"
    role: the same method applied to a boundary-value problem on a half-line, where the similarity variable comes from the invariance of the boundary data
---

:::definition[Scaling symmetry, similarity variable, self-similar solution]{provenance=adapted src="evans-2010:§2.3.1a, p. 43, and §4.2.2, pp. 175–176; strauss-2008:§2.4, property (e), p. 47"}
Let an equation be posed for $u(x,t)$ with $x \in \mathbb{R}^n$, $t > 0$. Say that the equation has a **dilation symmetry** with exponents $(\alpha, \beta)$ if, whenever $u$ is a solution, so is

$$
u_\lambda(x,t) := \lambda^{\alpha}\,u\bigl(\lambda^{\beta}x,\ \lambda t\bigr) \qquad\text{for every } \lambda > 0 .
\tag{1}
$$

A solution is **self-similar**, or a **similarity solution**, if it is unchanged by the whole family: $u = u_\lambda$ for all $\lambda > 0$. Setting $\lambda = t^{-1}$ in that identity and writing $v(y) := u(y,1)$ gives the general form of such a solution,

$$
u(x,t) = \frac{1}{t^{\alpha}}\,v\!\left(\frac{x}{t^{\beta}}\right) ,
\tag{2}
$$

in which

$$
y = \frac{x}{t^{\beta}}
$$

is the **similarity variable** and $v$ the **profile**. The profile is a function of $n$ variables instead of $n+1$: the symmetry has been traded for a reduction in dimension. When $v$ is additionally radial, $v(y) = w(|y|)$, the reduction is to a single ordinary differential equation.

The name says what the picture is. At two different times the graph of $u$ is the same shape, rescaled: widened by the factor $(t_2/t_1)^{\beta}$ in $x$ and shortened by $(t_1/t_2)^{\alpha}$ in amplitude. Strauss states the symmetry of the diffusion equation $u_t = ku_{xx}$ in the equivalent form that $u(\sqrt a\,x, at)$ solves it whenever $u$ does, for every $a > 0$, which is (1) with $\alpha = 0$, $\beta = \tfrac12$ and $\lambda = a$; the chain rule gives it at once, since the dilation multiplies $u_t$ by $a$ and $u_{xx}$ by $(\sqrt a)^2 = a$.
:::

:::method[Finding a similarity solution]{provenance=adapted src="evans-2010:§2.3.1a, pp. 43–44, and §4.2.2, pp. 175–177; stakgold-holst-2011:Exercise 8.2.6(c), p. 488"}
1. **Find the dilation symmetry.** Substitute $u_\lambda$ from (1) into the equation and collect the powers of $\lambda$ that multiply each term. The equation is invariant exactly when all those powers agree; this gives one linear relation between $\alpha$ and $\beta$. (Equivalently: count the derivatives. One $t$-derivative scales like $\lambda$, one $x$-derivative like $\lambda^{\beta}$, so $u_t$ and $\Delta u$ balance when $\beta = \tfrac12$, which is the diffusive scaling $x \sim \sqrt{t}$.)
2. **Fix the remaining exponent from the side conditions.** One relation leaves a one-parameter family of candidate scalings. Choose within it by asking that the *data* be invariant too. Three cases recur:
   - a conserved quantity, usually $\int u \,dx$, forces $\alpha = n\beta$;
   - initial or boundary data that are themselves dilation-invariant — a step, a constant, a delta — force the exponent that leaves them unchanged;
   - a radial reduction that is to simplify the resulting ordinary differential equation may itself dictate the choice.
3. **Write the ansatz and substitute.** Put $u = t^{-\alpha}v(x\,t^{-\beta})$ into the equation and use the chain rule. With $y = x t^{-\beta}$ the time derivative contributes $-t^{-(\alpha+1)}\bigl(\alpha v + \beta\,y\cdot Dv\bigr)$, and each pair of space derivatives contributes a factor $t^{-2\beta}$.
4. **Check that the powers of $t$ cancel.** If steps 1 and 2 were done correctly, every term carries the same power of $t$; divide it out. What is left is an equation for $v$ in the variable $y$ alone.
5. **Reduce to an ordinary differential equation and integrate it.** If the equation and the data are rotation-invariant, look for $v(y) = w(r)$ with $r = |y|$; the reduced equation is then an ordinary differential equation in $r$, usually of the form $(r^{n-1}\,\cdot)' = 0$ after one regrouping, so it integrates once immediately. Decay as $r \to \infty$ sets the first constant of integration to zero.
6. **Fix the remaining constants and the domain.** Impose the normalisation (total mass, or a boundary value) and check the sign of $w$; where the formula would go negative for a non-negative quantity, the solution is the positive part, and the boundary of its support is a free boundary.
7. **Verify.** Substitute the closed form back into the original equation. This step is not optional: steps 3 and 4 are easy to get wrong by one power.
:::

:::example[The diffusion similarity solution]{provenance=adapted src="strauss-2008:§2.4, Steps 1–4, pp. 47–49"}
Solve $u_t = k u_{xx}$ on $-\infty < x < \infty$, $t > 0$, with the step initial datum $u(x,0) = 1$ for $x > 0$ and $0$ for $x < 0$. Call the solution $Q$.

1. *Symmetry, and why the data pick it out.* The equation admits $u(x,t) \mapsto u(\sqrt a\,x, at)$ for every $a > 0$. The step datum is also unchanged by $x \mapsto \sqrt a\,x$, because only the sign of $x$ matters. So the problem as a whole is dilation-invariant, and the solution it determines must be too. A function of $(x,t)$ invariant under $(x,t)\mapsto(\sqrt a\,x, at)$ for all $a>0$ depends on $x$ and $t$ only through the combination $x/\sqrt{t}$, since that combination is the invariant one. This is step 2 of the method in the form "invariant data".
2. *Ansatz.* Write $Q(x,t) = g(p)$ with $p = x/\sqrt{4kt}$, the constant $4k$ inserted only to tidy the algebra.
3. *Reduce.* By the chain rule, $\partial p/\partial t = -p/(2t)$ and $\partial p/\partial x = 1/\sqrt{4kt}$, so

   $$
   Q_t = -\frac{p}{2t}\,g'(p), \qquad Q_x = \frac{g'(p)}{\sqrt{4kt}}, \qquad Q_{xx} = \frac{g''(p)}{4kt} .
   $$

   Hence $0 = Q_t - kQ_{xx} = -\frac{1}{t}\Bigl(\frac{p}{2}g' + \frac14 g''\Bigr)$, and multiplying by $-4t$,

   $$
   g'' + 2p\,g' = 0 .
   $$

   Every power of $t$ has cancelled, as step 4 requires.
4. *Integrate.* The integrating factor is $e^{p^2}$, since $(e^{p^2}g')' = e^{p^2}(g'' + 2pg')$. So $g'(p) = c_1 e^{-p^2}$ and

   $$
   g(p) = c_1\int_0^p e^{-q^2}\,dq + c_2 .
   $$

5. *Match the data.* Letting $t \downarrow 0$ with $x > 0$ sends $p \to +\infty$, and with $x < 0$ sends $p \to -\infty$. Using $\int_0^{\pm\infty}e^{-q^2}dq = \pm\sqrt\pi/2$, the two requirements $1 = c_1\sqrt\pi/2 + c_2$ and $0 = -c_1\sqrt\pi/2 + c_2$ give $c_1 = 1/\sqrt\pi$ and $c_2 = \tfrac12$. Therefore

   $$
   Q(x,t) = \frac12 + \frac{1}{\sqrt\pi}\int_0^{x/\sqrt{4kt}} e^{-q^2}\,dq
   = \frac12\left[1 + \operatorname{erf}\!\left(\frac{x}{\sqrt{4kt}}\right)\right] \qquad (t > 0) .
   $$

6. *Differentiate to get the kernel.* Since the equation is linear with constant coefficients, $\partial Q/\partial x$ is again a solution, and

   $$
   S(x,t) = \frac{\partial Q}{\partial x} = \frac{1}{\sqrt{4\pi k t}}\,e^{-x^2/4kt} ,
   $$

   which is :ref[the heat kernel]{to=pde.heat-kernel}; convolving it with any initial datum $\varphi$ solves the general initial-value problem. Note that $S$ is itself self-similar, with $\alpha = \tfrac12$ and $\beta = \tfrac12$ in the notation of (2): $S(x,t) = t^{-1/2}\,\sigma(x/\sqrt t)$ with $\sigma(y) = (4\pi k)^{-1/2}e^{-y^2/4k}$, and $\alpha = n\beta$ with $n = 1$, which is the conserved-mass condition of step 2.
7. *Numbers.* For $k = 1$: $Q(1,1) = \tfrac12\bigl[1 + \operatorname{erf}(\tfrac12)\bigr] = \tfrac12(1 + 0.5204999) = 0.7602499$, and $S(1,1) = (4\pi)^{-1/2}e^{-1/4} = 0.2196956$. Substituting the closed form for $Q$ into $Q_t - kQ_{xx}$ gives zero identically.
8. *The same method on a half-line.* Stakgold and Holst treat $w_t = w_{xx}$ for $x > 0$ with $w(x,0) = 0$ and $w(0,t) = 1$, which is invariant under $x^* = ax$, $t^* = a^2t$; taking $a = 1/(2\sqrt t)$ turns the invariance into $w(x,t) = h\bigl(x/2\sqrt t\bigr)$, the reduced equation is $h'' + 2\xi h' = 0$ with $h(0) = 1$, $h(\infty) = 0$, and the solution is $h = 1 - \operatorname{erf}\xi$, so $w(x,t) = 1 - \operatorname{erf}\bigl(x/2\sqrt t\bigr)$. The same reduced equation appears, with different boundary conditions picking a different pair of constants.
:::

:::example[The Barenblatt solution of the porous medium equation]{provenance=adapted src="evans-2010:§4.2.2, Eqs. (27)–(36), pp. 175–177"}
The porous medium equation is

$$
u_t - \Delta\bigl(u^{\gamma}\bigr) = 0 \quad\text{in } \mathbb{R}^n\times(0,\infty), \qquad u \ge 0,\ \gamma > 1 ,
$$

a nonlinear diffusion in which the diffusivity grows with $u$. It is quasilinear and degenerate: where $u = 0$ the diffusion switches off.

1. *Symmetry.* Substituting $u_\lambda = \lambda^{\alpha}u(\lambda^{\beta}x, \lambda t)$, the term $u_t$ acquires $\lambda^{\alpha+1}$ while $\Delta(u^{\gamma})$ acquires $\lambda^{\alpha\gamma + 2\beta}$. The two balance exactly when

   $$
   \alpha + 1 = \alpha\gamma + 2\beta .
   \tag{3}
   $$

2. *Reduce.* With $u = t^{-\alpha}v(y)$, $y = t^{-\beta}x$, the chain rule gives

   $$
   \alpha\,t^{-(\alpha+1)}v + \beta\,t^{-(\alpha+1)}\,y\cdot Dv + t^{-(\alpha\gamma+2\beta)}\Delta\bigl(v^{\gamma}\bigr) = 0 ,
   $$

   so (3) makes every power of $t$ equal and leaves $\alpha v + \beta\,y\cdot Dv + \Delta(v^{\gamma}) = 0$.
3. *Go radial.* Put $v(y) = w(r)$, $r = |y|$. Using $\Delta f(r) = f'' + \frac{n-1}{r}f'$,

   $$
   \alpha w + \beta r w' + \bigl(w^{\gamma}\bigr)'' + \frac{n-1}{r}\bigl(w^{\gamma}\bigr)' = 0 .
   $$

4. *Choose the second exponent to make it integrable.* Multiply by $r^{n-1}$. The last two terms become $\bigl(r^{n-1}(w^{\gamma})'\bigr)'$, and the first two become $\alpha r^{n-1}w + \beta r^n w'$, which is the derivative $\beta\bigl(r^n w\bigr)' = \beta\bigl(n r^{n-1}w + r^n w'\bigr)$ precisely when

   $$
   \alpha = n\beta .
   \tag{4}
   $$

   This is the conserved-mass condition of step 2 of the method, and here it is also exactly what makes the equation a total derivative:

   $$
   \bigl(r^{n-1}(w^{\gamma})'\bigr)' + \beta\bigl(r^n w\bigr)' = 0 .
   $$

5. *Integrate twice.* Hence $r^{n-1}(w^{\gamma})' + \beta r^n w = a$ for a constant $a$, and $a = 0$ if $w, w' \to 0$ fast enough as $r \to \infty$. Dividing by $r^{n-1}$ leaves $(w^{\gamma})' = -\beta r w$. Writing $(w^{\gamma})' = \frac{\gamma}{\gamma-1}\,w\,(w^{\gamma-1})'$, which holds wherever $w > 0$, this becomes $(w^{\gamma-1})' = -\frac{\gamma-1}{\gamma}\beta r$, so

   $$
   w^{\gamma-1} = b - \frac{\gamma-1}{2\gamma}\beta r^2
   $$

   for a constant $b$, and taking the positive part to keep $w \ge 0$,

   $$
   w(r) = \left(b - \frac{\gamma-1}{2\gamma}\beta r^2\right)_{+}^{1/(\gamma-1)} .
   $$

6. *Solve (3) and (4) for the exponents.* Substituting $\alpha = n\beta$ into (3) gives $n\beta + 1 = n\beta\gamma + 2\beta$, so $\beta\bigl(n(\gamma-1) + 2\bigr) = 1$ and

   $$
   \alpha = \frac{n}{n(\gamma-1)+2}, \qquad \beta = \frac{1}{n(\gamma-1)+2} .
   $$

7. *Result.* Undoing the substitutions,

   $$
   u(x,t) = \frac{1}{t^{\alpha}}\left(b - \frac{\gamma-1}{2\gamma}\,\beta\,\frac{|x|^2}{t^{2\beta}}\right)_{+}^{1/(\gamma-1)}
   \qquad (x \in \mathbb{R}^n,\ t>0) ,
   $$

   the **Barenblatt-Kompaneetz-Zeldovich solution**, or Barenblatt solution, with $b > 0$ a free parameter fixing the total mass.
8. *Check, with numbers.* For $n = 1$, $\gamma = 2$ the exponents are $\alpha = \beta = \tfrac13$ and the formula reads $u = t^{-1/3}\bigl(b - x^2/(12\,t^{2/3})\bigr)_+$. Substituting into $u_t = (u^2)_{xx}$ inside the support confirms it, as does the case $n = 2$, $\gamma = 3$, where $\alpha = \tfrac13$, $\beta = \tfrac16$. With $b = 1$, $n = 1$, $\gamma = 2$: at $t = 1$ the support is $|x| \le \sqrt{12} = 3.4641$ and the peak is $u(0,1) = 1$; at $t = 8$ the support has widened to $|x| \le \sqrt{12}\cdot 8^{1/3} = 6.9282$ and the peak has dropped to $8^{-1/3} = 0.5$. The total mass $\int u\,dx$ is $\tfrac43\sqrt{12}\,b^{3/2}$ at both times, as $\alpha = n\beta$ guarantees.
9. *Why this matters.* The Barenblatt solution has **compact support** at each time: the region $\{u > 0\}$ is a ball whose radius grows like $t^{\beta}$, with $\beta < \tfrac12$ for $\gamma > 1$. Evans records that the same holds generally: start a non-negative weak solution of this equation from initial data supported in a bounded set, and the set $\{u>0\}$ stays bounded and spreads at finite speed — in contrast to the linear heat equation, whose kernel is positive everywhere for every $t>0$, so that a disturbance is felt instantly at arbitrary distance. For that reason the porous medium equation is sometimes preferred as a model of diffusive spreading.
:::

:::example{provenance=original}
**A dispersive similarity solution: the Airy equation from $u_t + u_{xxx} = 0$.** The method is not confined to diffusion. Take the linearised Korteweg-de Vries, or Airy, equation on the line, $u_t + u_{xxx} = 0$, and look for the self-similar solution of unit mass.

1. *Symmetry.* Under $u_\lambda = \lambda^{\alpha}u(\lambda^{\beta}x, \lambda t)$ the term $u_t$ picks up $\lambda^{\alpha+1}$ and $u_{xxx}$ picks up $\lambda^{\alpha+3\beta}$, so invariance requires $\beta = \tfrac13$: the natural scaling here is $x \sim t^{1/3}$, not $x\sim t^{1/2}$.
2. *Second exponent.* The equation conserves mass, because $\frac{d}{dt}\int u\,dx = -\int u_{xxx}\,dx = 0$ for $u$ decaying at infinity. With $n = 1$, step 2 of the method gives $\alpha = n\beta = \tfrac13$.
3. *Reduce.* Write $u = t^{-1/3}v(\xi)$ with $\xi = x\,t^{-1/3}$. Then

   $$
   u_t = -\tfrac13 t^{-4/3}\bigl(v + \xi v'\bigr), \qquad u_{xxx} = t^{-1/3}\cdot t^{-1}\,v''' = t^{-4/3}v''' ,
   $$

   so after dividing by $t^{-4/3}$ the equation becomes

   $$
   v''' = \tfrac13\bigl(\xi v\bigr)' .
   $$

4. *Integrate once.* Hence $v'' = \tfrac13\xi v + C$, and $C = 0$ if $v, v''\to 0$ as $\xi \to +\infty$. So $v'' = \tfrac13 \xi v$.
5. *Recognise it.* Put $s = \xi/3^{1/3}$, so $d^2/d\xi^2 = 3^{-2/3}d^2/ds^2$ and the equation becomes $3^{-2/3}v_{ss} = 3^{1/3}sv/3 = 3^{-2/3}sv$, that is

   $$
   \frac{d^2v}{ds^2} = s\,v ,
   $$

   which is Airy's equation (see :ref[Airy functions]{to=spec.airy-functions}). The solution decaying as $s \to +\infty$ is $v = c\,\mathrm{Ai}(s)$; the second solution $\mathrm{Bi}$ grows and is rejected.
6. *Normalise.* With $\int_0^\infty\mathrm{Ai} = \tfrac13$ and $\int_{-\infty}^0 \mathrm{Ai} = \tfrac23$ — the latter an improper integral, convergent only conditionally, since $\mathrm{Ai}(s)$ oscillates with envelope $|s|^{-1/4}$ as $s\to-\infty$ — the total is $\int_{-\infty}^{\infty}\mathrm{Ai}(s)\,ds = 1$. Since $\int v\,d\xi = c\,3^{1/3}\int \mathrm{Ai}(s)\,ds$, unit mass needs $c = 3^{-1/3}$, and

   $$
   u(x,t) = \frac{1}{(3t)^{1/3}}\,\mathrm{Ai}\!\left(\frac{x}{(3t)^{1/3}}\right) .
   $$

7. *Check.* Differentiating this expression numerically at $x = 0.7$, $t = 0.4$ gives $u_t = -0.04886036050$ and $u_{xxx} = +0.04886036050$, which sum to zero to the working precision. At $x = 0$, $t = \tfrac13$ the value is $\mathrm{Ai}(0) = 3^{-2/3}/\Gamma(2/3) = 0.3550280539$.
8. *Contrast with diffusion.* The profile is oscillatory on one side and exponentially small on the other, and it spreads like $t^{1/3}$ rather than $t^{1/2}$, with amplitude falling like $t^{-1/3}$. Nothing in the method changed; only the count of derivatives in step 1 did, and that is what sets the spreading rate.
:::

:::remark{provenance=original}
**What the method needs, and what it gives.**

- *A genuine symmetry.* Step 1 fails whenever the equation contains a dimensional constant that the dilation does not respect. The equation $u_t - u_{xx} = u$ has no dilation symmetry of the form (1), because the right-hand side scales like $\lambda^{\alpha}$ while $u_t$ scales like $\lambda^{\alpha+1}$; the fix is to remove the offending term first, here by substituting $u = e^{t}\tilde u$. A term with a fixed length or time scale in it always has to be absorbed or scaled away before step 1 can succeed.
- *Invariant data.* The construction produces a solution of the equation, not of an arbitrary initial-value problem. It solves exactly the problems whose data are themselves invariant under the same scaling: a step, a constant boundary value, a point mass. That is why the heat-kernel and Barenblatt cases come out as *fundamental* solutions, with a delta as the initial condition.
- *Two conditions, two exponents.* One relation comes from the equation (step 1), the second from the data or a conservation law (step 2). If both are supplied by the equation, as happens for some systems, there is no free exponent and the method either works outright or not at all; if neither is, a one-parameter family of similarity solutions results, which is the normal situation for second-kind self-similarity, where the exponent must be found by solving an eigenvalue problem for the profile.
- *Why these special solutions matter more than they look.* Self-similar solutions are usually the long-time attractors of their equations: general initial data forget their shape and approach the similarity profile, with the exponents $\alpha,\beta$ setting the rates. The heat kernel plays that role for the linear diffusion equation, and the Barenblatt profile for the porous medium equation. This is also why dimensional analysis so often predicts the right power law: it is step 1 of this method, done without writing the equation down.
- *Degeneracy and free boundaries.* In step 6 the positive part is not a cosmetic truncation: it is forced, because the equation degenerates where $u = 0$, and the edge of the support is a genuine moving interface. Taking the positive part of a formula is legitimate only for an equation that admits weak solutions of that kind; doing it to a solution of the linear heat equation would produce something that is not a solution at all.
:::

:::application{provenance=original}
Similarity solutions are the standard way of extracting a quantitative law from a diffusive or dispersive process when the geometry is simple enough to have no intrinsic length.

In heat transfer the half-line solution $w = 1 - \operatorname{erf}\bigl(x/2\sqrt{\kappa t}\bigr)$ is the textbook description of a semi-infinite body whose surface is suddenly brought to a new temperature; it gives the thermal penetration depth $\delta \simeq 2\sqrt{\kappa t}$ used in quenching, in welding and in estimating how deep the daily and annual temperature waves reach into soil and rock. The same formula, with $\kappa$ the chemical diffusivity, gives the carburising depth in steel and the junction depth in semiconductor dopant diffusion; because the profile depends only on $x/\sqrt{t}$, doubling the depth costs four times the time, a scaling that is read directly off the similarity variable.

In geophysics and hydrology the Barenblatt solution describes the spreading of a finite mass of fluid through a porous medium — a groundwater mound, an oil or gas pocket, a spreading viscous gravity current — and its finite propagation speed, with a front at radius $\propto t^{\beta}$, is what makes it usable: the linear diffusion equation would predict a trace of the pollutant everywhere immediately. Equations of porous-medium type also model radiative heat transport in a plasma, which is where Zeldovich and Kompaneetz met the solution.

In the theory of water waves the $t^{1/3}$ Airy similarity solution is the universal shape of the leading edge of a dispersive wave train: the oscillatory tail behind a front, with wavelength shrinking and amplitude decaying as $t^{-1/3}$, is seen in ship wakes, in tsunami records, and in the collapse of an initial step for the Korteweg-de Vries equation (see :ref[travelling-wave solutions]{to=pde.travelling-waves} for the other half of that story, the solitons that run ahead of it).
:::
