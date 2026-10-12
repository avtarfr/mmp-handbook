---
id: pde.heat-bounded-domains
title: Diffusion in bounded domains
kind: method
level: core
summary: "How to solve the heat equation on an interval by separating variables: the eigenvalue problem set by the boundary condition, the exponentially decaying modes it produces, the rate at which the solution settles to its equilibrium, and two ways to handle boundary data that are not zero."
prereqs: [ode.eigenfunction-expansions, pde.heat-maximum-principle, found.uniform-convergence, found.termwise-operations]
provenance: adapted
sources:
  - work: strauss-2008
    loc: "§4.1, the Dirichlet eigenvalues and eigenfunctions, Eq. (8), p. 85; the diffusion problem (13)–(18), p. 87; the eigenvalue terminology and the matrix analogy, p. 88; §4.2, Neumann eigenvalues (2)–(6), pp. 89–90, and the mixed case (10), p. 91 with Exercises 1–2, p. 92; §5.6, expansion method (1)–(10) and method of shifting the data, pp. 147–150"
    pages: "85-92, 147-150"
    role: the separated solutions and series formulas for Dirichlet, Neumann and mixed conditions; the eigenvalue terminology; both methods for inhomogeneous boundary data, including the warning against term-by-term differentiation
  - work: stakgold-holst-2011
    loc: "§8.2, the eigenfunction form (8.2.36a) of the Dirichlet heat Green's function on $(0,\\ell)$, p. 482"
    pages: "482"
    role: the equivalence of the modal series with the Green's-function solution, quoted in the application
---

:::definition[The initial-boundary-value problem and its eigenvalue problem]{provenance=adapted src="strauss-2008:§4.1, Eqs. (13)–(16), p. 87; strauss-2008:§4.2, Eq. (1), p. 89"}
On an interval $0 < x < \ell$ with diffusivity $k > 0$ we consider

$$
u_t = k\,u_{xx} \quad (0 < x < \ell,\ t > 0), \qquad u(x,0) = \varphi(x),
$$

together with one boundary condition at each end. The three standard homogeneous choices are

- **Dirichlet** (ends held at the reference value): $u(0,t) = u(\ell,t) = 0$;
- **Neumann** (ends insulated, no flux): $u_x(0,t) = u_x(\ell,t) = 0$;
- **mixed**: one of each, for instance $u(0,t) = u_x(\ell,t) = 0$.

A **separated solution** is one of the form $u = X(x)\,T(t)$. Substituting and dividing by $kXT$ gives

$$
\frac{T'}{kT} = \frac{X''}{X} = -\lambda ,
$$

a quantity that depends on neither $x$ nor $t$ and so is a constant. Hence $T' = -\lambda k T$, so $T(t) = e^{-\lambda k t}$ up to a factor, and $X$ solves the **eigenvalue problem**

$$
-X'' = \lambda X \quad \text{on } (0,\ell), \qquad \text{plus the boundary condition.}
$$

A number $\lambda$ for which this has a solution $X \not\equiv 0$ is an **eigenvalue** and such an $X$ an **eigenfunction**; :cite[Strauss]{work=strauss-2008 loc="p. 88"} notes that physicists and engineers call the eigenfunctions **normal modes**, since they are the shapes that persist for all time, decaying as a whole. We write $\lambda_n$, $X_n$ for them.
:::

:::statement[The modes of an interval]{provenance=adapted src="strauss-2008:§4.1, Eq. (8), p. 85 and the eigenvalue terminology, p. 88; strauss-2008:§4.2, Eqs. (2)–(4), p. 90 and Eq. (10), p. 91"}
For $-X'' = \lambda X$ on $(0,\ell)$:

| condition | eigenvalues $\lambda_n$ | eigenfunctions $X_n(x)$ |
|---|---|---|
| $X(0)=X(\ell)=0$ | $(n\pi/\ell)^2$, $n = 1,2,\dots$ | $\sin(n\pi x/\ell)$ |
| $X'(0)=X'(\ell)=0$ | $(n\pi/\ell)^2$, $n = 0,1,2,\dots$ | $\cos(n\pi x/\ell)$ |
| $X(0)=X'(\ell)=0$ | $\bigl((n+\tfrac12)\pi/\ell\bigr)^2$, $n = 0,1,2,\dots$ | $\sin\bigl((n+\tfrac12)\pi x/\ell\bigr)$ |

In each case these are *all* the eigenvalues, including complex ones. The Dirichlet eigenvalues are strictly positive; the Neumann list contains $\lambda_0 = 0$, whose eigenfunction is any constant, and its smallest positive eigenvalue is $(\pi/\ell)^2$. There are infinitely many of them, in contrast with an $N\times N$ matrix, which has at most $N$ :cite{work=strauss-2008 loc="p. 88"}.
:::

:::note{provenance=adapted src="strauss-2008:§4.1, p. 88; strauss-2008:§4.2, p. 90 and Eq. (10), p. 91 with Exercises 1–2, p. 92"}
Strauss proves the Dirichlet claim by hand: $\lambda = 0$ would force $X = C + Dx$ with $C = D = 0$; $\lambda = -\gamma^2 < 0$ would force $D\sinh\gamma\ell = 0$ with $\sinh\gamma\ell \ne 0$; and for complex $\lambda$, writing $X = Ce^{\gamma x}+De^{-\gamma x}$ with $\gamma^2 = -\lambda$, the two boundary conditions give $e^{2\gamma\ell}=1$, hence $\gamma = n\pi i/\ell$ and $\lambda = n^2\pi^2/\ell^2$ :cite{work=strauss-2008 loc="p. 88"}. For the Neumann problem he verifies the positive eigenvalues and $\lambda = 0$ directly and states that the exclusion of negative and complex $\lambda$ goes the same way :cite{work=strauss-2008 loc="p. 90"}. For the mixed case he gives the eigenvalues $(n+\tfrac12)^2\pi^2/\ell^2$ and the eigenfunctions outright at Eq. (10) :cite{work=strauss-2008 loc="p. 91"}, leaving only their derivation to Exercises 1–2 :cite{work=strauss-2008 loc="p. 92"}. The general reason behind all three is that $-d^2/dx^2$ with any of these conditions is self-adjoint and non-negative, which is the subject of :ref[Sturm-Liouville theory]{to=ode.sturm-liouville-theory}.
:::

:::method[Separation of variables, homogeneous boundary data]{provenance=adapted src="strauss-2008:§4.1, pp. 87–88; strauss-2008:§4.2, Eqs. (5)–(6), p. 90"}
1. **Find the modes.** Solve $-X'' = \lambda X$ with the given boundary condition, obtaining $\lambda_n$ and $X_n$ from the table.
2. **Attach the time factors.** Each $X_n(x)\,e^{-\lambda_n k t}$ solves the equation and the boundary conditions. Write the candidate solution as the superposition
   $$
   u(x,t) = \sum_n A_n\, e^{-\lambda_n k t}\, X_n(x) .
   $$
3. **Match the initial data.** Setting $t = 0$ requires $\varphi = \sum_n A_n X_n$, so the $A_n$ are the eigenfunction coefficients of $\varphi$ (:ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}). For the interval these are Fourier sine or cosine coefficients:
   $$
   A_n = \frac{2}{\ell}\int_0^{\ell}\varphi(x)\,\sin\frac{n\pi x}{\ell}\,dx
   \quad\text{(Dirichlet)},
   \qquad
   A_n = \frac{2}{\ell}\int_0^{\ell}\varphi(x)\,\cos\frac{n\pi x}{\ell}\,dx
   \quad\text{(Neumann)},
   $$
   the Neumann series being written $u = \tfrac12 A_0 + \sum_{n\ge1}A_n e^{-\lambda_n kt}\cos(n\pi x/\ell)$ so that the same formula gives $A_0$.
4. **Read off the long-time behaviour.** The slowest-decaying mode dominates. Under Dirichlet conditions every $\lambda_n > 0$, so $u \to 0$ at the rate $e^{-\lambda_1 k t}$ with $\lambda_1 = (\pi/\ell)^2$. Under Neumann conditions the $n=0$ mode does not decay, so $u \to \tfrac12 A_0 = \frac{1}{\ell}\int_0^\ell \varphi$, the average of the initial data: nothing escapes through an insulated end, so the substance spreads out uniformly.
5. **Check.** Verify the series term by term against the equation and the boundary conditions, and bound the answer with the :ref[maximum principle]{to=pde.heat-maximum-principle}, which also guarantees that no second solution continuous on the closed rectangle $[0,\ell]\times[0,T]$ takes the same initial and boundary values.
:::

:::statement[The series is a solution, and how fast it decays]{provenance=original}
Let $k>0$, $\ell>0$, let $\varphi$ be square-integrable on $(0,\ell)$, let $A_n$ be its sine coefficients and $\lambda_n = (n\pi/\ell)^2$, and put

$$
u(x,t) = \sum_{n=1}^{\infty} A_n\,e^{-\lambda_n k t}\,\sin\frac{n\pi x}{\ell}, \qquad t > 0 .
$$

Then:

1. The series, and the series obtained by differentiating it term by term any number of times in $x$ and $t$, converge absolutely and uniformly on $[0,\ell]\times[\delta,\infty)$ for every $\delta > 0$. Hence $u$ is infinitely differentiable on $[0,\ell]\times(0,\infty)$.
2. $u_t = k\,u_{xx}$ for $0<x<\ell$, $t>0$, and $u(0,t) = u(\ell,t) = 0$ for every $t>0$.
3. $\|u(\cdot,t) - \varphi\|_{L^2(0,\ell)} \to 0$ as $t \to 0^{+}$.
4. $\|u(\cdot,t)\|_{L^2(0,\ell)} \le e^{-\lambda_1 k t}\,\|\varphi\|_{L^2(0,\ell)}$ for all $t>0$, with $\lambda_1 = (\pi/\ell)^2$. The **relaxation time** is therefore
   $$
   \tau = \frac{1}{\lambda_1 k} = \frac{\ell^2}{\pi^2 k} .
   $$

The same statements hold for the cosine series under Neumann conditions, with part 4 applied to $u - \tfrac12 A_0$ and $\varphi - \tfrac12 A_0$, the first positive Neumann eigenvalue again being $(\pi/\ell)^2$.
:::

:::idea{provenance=original}
Everything rests on the factor $e^{-\lambda_n k t} = e^{-(n\pi/\ell)^2 k t}$. For any fixed positive time it beats every power of $n$, so differentiating the series as often as one likes, which multiplies the $n$-th term by a power of $n$, cannot stop it converging uniformly. That makes term-by-term differentiation legal for $t>0$, and then each term does the work. At $t = 0$ the factor is $1$ and this argument collapses, which is why the initial condition is recovered only in the mean-square sense, from Parseval's identity rather than from any smoothness. The decay rate is Parseval again: every coefficient is multiplied by at most $e^{-\lambda_1 kt}$.
:::

:::proof{provenance=original}
Write $S_n(x) = \sin(n\pi x/\ell)$ and $c = k\delta$.

**Step 1 (the coefficients are bounded).** By Parseval's identity for the sine system on $(0,\ell)$ (:ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}),

$$
\frac{\ell}{2}\sum_{n\ge1} A_n^2 = \int_0^\ell \varphi^2\,dx < \infty ,
$$

so $A_n \to 0$; in particular $|A_n| \le C$ for all $n$, with $C = \sup_n |A_n|$.

**Step 2 (uniform convergence of every derived series).** Differentiating the $n$-th term $j$ times in $t$ and $m$ times in $x$ multiplies it by $(-\lambda_n k)^{j}$ and by $(n\pi/\ell)^{m}$ up to replacing the sine by a cosine, so for $t \ge \delta$ its absolute value is at most

$$
C\,(k\pi^2/\ell^2)^{j}\,(\pi/\ell)^{m}\; n^{2j+m}\, e^{-c\,n^2\pi^2/\ell^2} ,
$$

using $|A_n| \le C$ from Step 1 and $e^{-\lambda_n k t} \le e^{-\lambda_n c}$ from $t \ge \delta$. The numbers $n^{p}e^{-cn^2\pi^2/\ell^2}$ are summable for every fixed $p$, because $n^{p}e^{-an^2} \le n^p e^{-an}$ for $n \ge 1$ and $a>0$. So each derived series is dominated by a convergent series of constants, hence converges absolutely and uniformly on $[0,\ell]\times[\delta,\infty)$ (:ref[uniform convergence]{to=found.uniform-convergence}). The three hypotheses of the :ref[term-by-term differentiation theorem]{to=found.termwise-operations} are therefore met in each variable separately on every closed interval inside that region — the series converges uniformly, each term is continuously differentiable, and the differentiated series converges uniformly — so the series may be differentiated term by term, once in each variable and then, by the same argument applied to the differentiated series, as often as one likes. Hence $u$ is $C^\infty$ on $[0,\ell]\times(\delta,\infty)$; as $\delta>0$ was arbitrary, part 1 follows.

**Step 3 (equation and boundary conditions).** By Step 2 we may compute

$$
u_t - k\,u_{xx} = \sum_{n\ge1} A_n\Bigl[(-\lambda_n k) + k\lambda_n\Bigr] e^{-\lambda_n kt} S_n(x) = 0 ,
$$

because $-S_n'' = \lambda_n S_n$ by the choice of $\lambda_n$. Each $S_n$ vanishes at $x = 0$ and $x = \ell$, and the series converges uniformly up to those endpoints for $t \ge \delta$, so $u(0,t) = u(\ell,t) = 0$. This is part 2.

**Step 4 (the initial data, in mean square).** By Parseval again, applied to the function $u(\cdot,t)-\varphi$ whose $n$-th sine coefficient is $A_n(e^{-\lambda_n kt}-1)$,

$$
\|u(\cdot,t)-\varphi\|_{L^2}^2 = \frac{\ell}{2}\sum_{n\ge1}A_n^2\bigl(1 - e^{-\lambda_n k t}\bigr)^2 .
$$

Let $\varepsilon>0$. Choose $N$ with $\frac{\ell}{2}\sum_{n>N}A_n^2 < \varepsilon/2$, possible by Step 1; the tail of the sum above is then $< \varepsilon/2$ as well, since $0 \le 1-e^{-\lambda_n kt} \le 1$. The remaining finite sum has at most $N$ terms, each tending to $0$ as $t\to0^+$, so it is $<\varepsilon/2$ for $t$ small. This is part 3.

**Step 5 (decay).** Since $\lambda_1 \le \lambda_n$ for all $n$ and $k, t > 0$, we have $e^{-\lambda_n kt} \le e^{-\lambda_1 kt}$, so

$$
\|u(\cdot,t)\|^2_{L^2} = \frac{\ell}{2}\sum_{n\ge1}A_n^2 e^{-2\lambda_n kt}
\le e^{-2\lambda_1 kt}\,\frac{\ell}{2}\sum_{n\ge1}A_n^2
= e^{-2\lambda_1 kt}\,\|\varphi\|^2_{L^2} ,
$$

which is part 4. For the Neumann case, replace the sine system by the cosine system; Parseval reads $\int_0^\ell f^2 = \ell(A_0/2)^2 + \frac{\ell}{2}\sum_{n\ge1}A_n^2$, the $n = 0$ term is unaffected by the time factor $e^{-\lambda_0 kt} = 1$, and the estimate above applies to the remaining terms, whose eigenvalues are all at least $(\pi/\ell)^2$. $\square$
:::

:::remark[Where the hypotheses are used, and two warnings]{provenance=original}
- *Only square-integrability of $\varphi$* is used, through Step 1. No continuity, and certainly no compatibility with the boundary conditions, is needed: the solution is smooth for every $t>0$ regardless, which is the smoothing already seen in :ref[the heat kernel]{to=pde.heat-kernel}.
- *$t \ge \delta > 0$ is essential in Step 2*, and so part 1 says nothing at $t = 0$. If $\varphi$ is continuous with $\varphi(0)=\varphi(\ell)=0$ and piecewise $C^1$, its sine series converges uniformly and then $u \to \varphi$ uniformly as well; without such a hypothesis part 3 is all that is available.
- *$k>0$ again.* Reversing the sign of $k$ turns every factor $e^{-\lambda_n kt}$ into $e^{+\lambda_n|k|t}$, and the series diverges for every $t>0$ unless the coefficients decay faster than every exponential. Backwards diffusion on an interval is as ill-posed as on the line.
- *Uniqueness is not part of the construction.* It comes from the :ref[maximum principle]{to=pde.heat-maximum-principle}, which also gives the bound $\min\{0,\inf\varphi\} \le u \le \max\{0,\sup\varphi\}$ under Dirichlet conditions — a useful check on a truncated series, which can oscillate. Both need more than this statement supplies: the principle is about functions continuous on the closed rectangle $[0,\ell]\times[0,T]$ with finite data, so it applies when $\varphi$ is bounded with $\varphi(0)=\varphi(\ell)=0$ and $u$ extends continuously to $t=0$, as in the previous bullet, and not to a merely square-integrable $\varphi$, for which $\inf\varphi$ and $\sup\varphi$ may be infinite and $u$ need have no limit at $t=0$ at each point.
- *Term-by-term differentiation at the boundary.* :cite[Strauss]{work=strauss-2008 loc="§5.6, p. 147"} makes this a cautionary tale: with inhomogeneous boundary data, inserting the sine series into the equation and differentiating twice term by term yields $u_n' + k\lambda_n u_n = 0$, which cannot meet the boundary data at all, and he draws the moral that the differentiation step is the illegal one. The correct version is in the next method.
:::

:::method[Inhomogeneous boundary data]{provenance=adapted src="strauss-2008:§5.6, Method of shifting the data, pp. 149–150; strauss-2008:§5.6, Expansion method, Eqs. (2)–(10), pp. 147–148"}
Now let the ends be driven:

$$
u_t = k\,u_{xx}, \qquad u(0,t) = h(t), \quad u(\ell,t) = j(t), \qquad u(x,0) = \varphi(x) .
$$

No separated solution can satisfy these boundary conditions, so one of two routes is needed.

**Route A: shift the data.** Subtract any known function that meets the boundary conditions. With

$$
\bar u(x,t) = \Bigl(1 - \frac{x}{\ell}\Bigr)h(t) + \frac{x}{\ell}\,j(t) ,
$$

the difference $v = u - \bar u$ has homogeneous Dirichlet conditions, initial data $\varphi - \bar u(\cdot,0)$, and the source term $-(\bar u_t - k\bar u_{xx}) = -\bar u_t$ on the right-hand side. When $h$ and $j$ are *constants* this is the best possible choice: $\bar u$ is then the steady state, $\bar u_t = 0$, and $v$ solves the homogeneous problem of the previous method exactly. The physical reading is that the solution is the equilibrium profile plus a transient that dies at the rate $e^{-t/\tau}$, $\tau = \ell^2/\pi^2 k$.

**Route B: expand, and keep the boundary terms.** Expand the unknown itself, $u(x,t) = \sum_{n\ge1}u_n(t)\sin(n\pi x/\ell)$ with $u_n(t) = \frac2\ell\int_0^\ell u(x,t)\sin(n\pi x/\ell)dx$, and differentiate *under the integral sign* rather than term by term. Then $u_n' = \frac2\ell\int_0^\ell u_t\, S_n\,dx = \frac{2k}{\ell}\int_0^\ell u_{xx}S_n\,dx$, and integrating by parts twice, with $S_n(0)=S_n(\ell)=0$ and $S_n'(0) = n\pi/\ell$, $S_n'(\ell) = (-1)^n n\pi/\ell$:

$$
\int_0^\ell u_{xx}S_n\,dx = -\bigl[u\,S_n'\bigr]_0^{\ell} - \lambda_n\int_0^\ell u\,S_n\,dx
= \frac{n\pi}{\ell}\Bigl(h(t) - (-1)^n j(t)\Bigr) - \frac{\ell\lambda_n}{2}u_n(t) .
$$

The boundary data enter here, and nowhere else. So each coefficient obeys a forced linear ordinary differential equation,

$$
u_n'(t) + k\lambda_n u_n(t) = \frac{2n\pi k}{\ell^2}\Bigl(h(t) - (-1)^n j(t)\Bigr),
\qquad u_n(0) = \frac{2}{\ell}\int_0^\ell \varphi\, S_n\,dx ,
$$

whose solution by the integrating factor $e^{k\lambda_n t}$ is

$$
u_n(t) = u_n(0)\,e^{-k\lambda_n t} + \frac{2n\pi k}{\ell^2}\int_0^t e^{-k\lambda_n(t-s)}\Bigl(h(s) - (-1)^n j(s)\Bigr)\,ds .
$$

Route B needs no guess and handles time-dependent data directly; Route A is quicker whenever the data are steady or share a single time dependence, for instance $h = H\cos\omega t$, $j = J\cos\omega t$, when one looks for $\bar u = u_0(x)\cos\omega t$ :cite{work=strauss-2008 loc="p. 150"}.
:::

:::example[A Dirichlet transient, with numbers]{provenance=original}
Take $\ell = 1$, $k = 1$, Dirichlet ends, and $\varphi(x) = x(1-x)$.

1. *Coefficients.* $A_n = 2\int_0^1 x(1-x)\sin(n\pi x)\,dx = \dfrac{4\bigl(1-(-1)^n\bigr)}{n^3\pi^3}$, which is $8/(n^3\pi^3)$ for odd $n$ and $0$ for even $n$ — as it must be, since $\varphi$ is symmetric about $x = \tfrac12$ and the even modes are antisymmetric.
2. *Solution.* $u(x,t) = \displaystyle\sum_{n \text{ odd}} \frac{8}{n^3\pi^3}\,e^{-n^2\pi^2 t}\sin(n\pi x)$.
3. *Numbers at the midpoint.* $u(\tfrac12,0) = \tfrac14$. At $t = 0.1$ the series gives $u(\tfrac12,0.1) = 0.0961619$, of which the first mode alone contributes $\frac{8}{\pi^3}e^{-\pi^2/10} = 0.0961632$: after one relaxation time the higher modes have gone, the error from truncating after one term being $1.3\times10^{-6}$. At $t = 0.5$, $u(\tfrac12,0.5) = 0.00185559$.
4. *Decay bound, checked.* Here $\|\varphi\|_{L^2} = 1/\sqrt{30} = 0.1825742$ and $\lambda_1 = \pi^2$. Part 4 of the statement predicts $\|u(\cdot,0.1)\|_{L^2} \le e^{-\pi^2/10}/\sqrt{30} = 0.0680468$; the actual value from Parseval is $0.0679976$, just inside, the small slack being the contribution of the third mode.
5. *Relaxation time.* $\tau = 1/\pi^2 = 0.101321$. Doubling the length to $\ell = 2$ multiplies $\tau$ by four: a bar twice as long takes four times as long to cool, the same quadratic law as the diffusion length.
6. *Maximum principle, checked.* $0 \le u \le \tfrac14$ everywhere, consistent with the bound from the data.
:::

:::example[Insulated ends settle to the mean]{provenance=original}
Same interval and diffusivity, but with insulated ends $u_x(0,t) = u_x(1,t) = 0$ and the initial ramp $\varphi(x) = x$.

Cosine coefficients: $A_0 = 2\int_0^1 x\,dx = 1$ and $A_n = 2\int_0^1 x\cos(n\pi x)\,dx = 2\bigl((-1)^n-1\bigr)/(n^2\pi^2)$, which is $-4/(n^2\pi^2)$ for odd $n$ and $0$ for even $n$. Hence

$$
u(x,t) = \frac12 - \sum_{n\text{ odd}}\frac{4}{n^2\pi^2}\,e^{-n^2\pi^2 t}\cos(n\pi x) .
$$

The $n=0$ term is $\tfrac12 A_0 = \tfrac12 = \int_0^1 x\,dx$: the average of the data, which is conserved because no flux leaves through an insulated end. Indeed $\frac{d}{dt}\int_0^1 u\,dx = k\int_0^1 u_{xx}dx = k[u_x]_0^1 = 0$.

*Numbers at the cold end.* $u(0,t)$ rises from $0$ towards $\tfrac12$: $u(0,0.05) = 0.252044$, $u(0,0.5) = 0.497085$. At the hot end $u(1,0.05) = 0.747956$, and $u(0,t)+u(1,t) = 1$ exactly for every $t$, by the antisymmetry of $\varphi - \tfrac12$ about $x = \tfrac12$. The deviation from the mean decays like $e^{-\pi^2 t}$, so after $t = 3\tau = 3/\pi^2 = 0.304$ it has fallen by a factor $e^{-3} \approx 0.05$, which is what "settled" means in practice.
:::

:::example[A driven end: the steady state plus a transient]{provenance=original}
Take $\ell = 1$, $k = 1$, $u(0,t) = 0$, $u(1,t) = 1$ (a bar with one end suddenly clamped at temperature $1$), and $u(x,0) = 0$. The boundary data are inhomogeneous but constant, so Route A applies with the steady state $\bar u(x) = x$.

1. *Shift.* $v = u - x$ has $v(0,t)=v(1,t)=0$ and $v(x,0) = -x$.
2. *Expand.* The sine coefficients of $-x$ on $(0,1)$ are $-2\int_0^1 x\sin(n\pi x)dx = 2(-1)^{n}/(n\pi)$.
3. *Solution.*
   $$
   u(x,t) = x + \frac{2}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^n}{n}\,e^{-n^2\pi^2 t}\,\sin(n\pi x) .
   $$
   At $t=0$ the series is the sine series of $-x$, so $u(x,0)=0$, as required; for $t>0$ it decays and $u \to x$.
4. *Numbers at the midpoint.* $u(\tfrac12,0.01) = 0.000407$, $u(\tfrac12,0.05) = 0.113844$, $u(\tfrac12,0.2) = 0.4115664$. The last value is $\tfrac12 - \tfrac{2}{\pi}e^{-\pi^2/5} = 0.5 - 0.0884336$ to seven digits, again because only the first mode survives. The midpoint reaches $99\%$ of its final value $\tfrac12$ when $\frac{2}{\pi}e^{-\pi^2 t} < 0.005$, that is $t > 0.4911$, about five relaxation times.
5. *Where the modes come from.* Note that the $n$-th coefficient decays only like $1/n$, because $-x$ does not vanish at $x=1$: the shifted initial data are incompatible with the boundary condition there. The series therefore converges slowly at $t = 0$ — and converges beautifully for every $t>0$, which is exactly the content of part 1 of the statement.
:::

:::application{provenance=original}
**Which number actually matters.** For a bounded body the whole of the long-time behaviour is in the smallest eigenvalue: the solution relaxes as $e^{-t/\tau}$ with $\tau = 1/\lambda_1 k$, and $\lambda_1$ is set by the geometry alone. For an interval of length $\ell$ with both ends held fixed, $\tau = \ell^2/\pi^2 k$. A $2\,\mathrm{cm}$ copper rod ($k \approx 1.1\,\mathrm{cm^2/s}$) has $\tau = 4/(\pi^2\cdot1.1) = 0.37\,\mathrm{s}$; a $2\,\mathrm{cm}$ layer of dry soil ($k \approx 2\times10^{-3}\,\mathrm{cm^2/s}$) has $\tau = 200\,\mathrm{s}$. Designers of thermal insulation, annealing schedules and reactor shields quote this one number.

**Mode truncation is a numerical method.** Because mode $n$ decays as $e^{-n^2 t/\tau}$, the series is its own error estimate: after one relaxation time the second mode is down by $e^{-3} = 0.05$ relative to the first and the third by $e^{-8} = 3\times10^{-4}$. Two or three terms then give several digits, as the examples show, which is why spectral methods are so efficient for diffusion and so delicate at $t = 0$ (see :ref[spectral methods]{to=num.spectral-methods}).

**Insulated versus open ends.** The difference between the Dirichlet and Neumann tables is a single eigenvalue, $\lambda_0 = 0$, and it changes the physics entirely: with open ends the contents of the interval drain away to zero; with insulated ends the total amount is conserved and the profile flattens to its average. A calorimeter is designed to realise the second case, a diffusion cell with large reservoirs at both ends the first.

**The same answer as the Green's function.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Eq. (8.2.36a), p. 482"} write the Dirichlet heat Green's function for $(0,\ell)$ both as an image sum of Gaussians and as the eigenfunction series $\frac{2}{\ell}\sum_{n\ge1}\sin\frac{n\pi x}{\ell}\sin\frac{n\pi \xi}{\ell}e^{-k\lambda_n t}$, the two being linked by the theta-function identity. Convolving either against $\varphi$ reproduces the series of this unit, so the modal method and the Green's-function method (:ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}) are two faces of one formula; the Gaussian form is the practical one at very early times, the modal form at late times.

**Beyond the interval.** Steps 1 to 5 are unchanged in higher dimensions and in other coordinate systems: only the eigenvalue problem changes, giving Bessel functions on a disc and spherical harmonics with spherical Bessel functions on a ball (:ref[separation of variables]{to=pde.separation-of-variables}). The decay law $e^{-\lambda_1 k t}$ and the identification of the limit with the $\lambda = 0$ mode survive verbatim.
:::
