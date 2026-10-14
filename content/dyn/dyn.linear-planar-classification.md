---
id: dyn.linear-planar-classification
title: Classification of linear planar systems
kind: theorem
level: core
summary: Shows that the trace $T$ and the determinant $D$ of a real $2 \times 2$ matrix decide the entire orbit picture of $\dot x = Ax$ near the origin — saddle, node, spiral, centre, star node, degenerate node, or a line of fixed points — and places each type in the $(T,D)$ plane relative to the two axes and the parabola $T^2 = 4D$.
prereqs: [ode.linear-systems, linalg.eigenvalues-eigenvectors, linalg.jordan-form]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§5.1, the definitions of Liapunov stable, attracting and neutrally stable, p. 129; §5.2, Classification of Linear Systems, pp. 129-138: the eigenvalues in terms of the trace and determinant (p. 130), the names saddle, stable node, centre, spiral, star node and degenerate node (pp. 132-136), the slow and fast eigendirections at a node (p. 133), the summary diagram Fig. 5.2.8 and the observations that follow it (pp. 136-137), and Examples 5.2.6-5.2.7 (p. 138)"
    pages: "129-138"
    role: the trace-determinant classification, the name attached to each eigenvalue configuration, the tangency of node orbits to the slow eigendirection, the placement of the borderline cases on the parabola and the axes, and the stability vocabulary
  - work: hirsch-smale-devaney-2013
    loc: "§4.1, The Trace-Determinant Plane, pp. 61-63: the trace and determinant as the sum and product of the eigenvalues (p. 62), the inequality argument showing that $\\det A < 0$ forces eigenvalues of opposite sign (pp. 62-63), and the remark that one point of the $TD$-plane carries infinitely many matrices, which may differ in the sense of rotation or in the number of independent eigenvectors (p. 63); §8.4, the definitions of stable, asymptotically stable and unstable equilibrium, pp. 174-175"
    pages: "61-63, 174-175"
    role: the sign argument used for the saddle case, the reading of $T$ and $D$ as sum and product of the eigenvalues, the caveat about what the $(T,D)$ pair does not determine, and the neighbourhood form of the stability definitions
---

:::definition[The system, its fixed points and the two invariants]{provenance=adapted src="strogatz-1994:§5.2, p. 130; hirsch-smale-devaney-2013:§4.1, p. 62"}
A **linear planar system** is

$$
\dot x \;=\; A x ,
\qquad
x(t) \in \mathbb{R}^{2},
\qquad
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathbb{R}^{2\times 2}
\ \text{ constant.}
$$

A **fixed point** is a point $x_*$ with $Ax_* = 0$; the origin is always one, and it is **isolated** exactly when $A$ is invertible. The two numbers that will decide everything are

$$
T \;=\; \operatorname{tr} A \;=\; a + d ,
\qquad
D \;=\; \det A \;=\; ad - bc ,
\qquad
\Delta \;=\; T^{2} - 4D ,
$$

the trace, the determinant and the **discriminant**. An **eigenline** is a line $\mathbb{R}v$ spanned by a real eigenvector $v$ of $A$; it is invariant, because $x(0) \in \mathbb{R}v$ forces $x(t) = e^{\lambda t}x(0) \in \mathbb{R}v$.
:::

:::definition[Stability]{provenance=adapted src="strogatz-1994:§5.1, p. 129; hirsch-smale-devaney-2013:§8.4, pp. 174-175"}
Let $x_*$ be a fixed point of $\dot x = F(x)$ on $\mathbb{R}^{n}$.

- $x_*$ is **Lyapunov stable** if every neighbourhood $U$ of $x_*$ contains a neighbourhood $U_1$ of $x_*$ such that every solution starting in $U_1$ exists and stays in $U$ for all $t > 0$.
- $x_*$ is **attracting** if for some $\delta > 0$ every solution with $|x(0) - x_*| < \delta$ satisfies $x(t) \to x_*$ as $t \to \infty$.
- $x_*$ is **asymptotically stable** if it is both; **neutrally stable** if it is Lyapunov stable but not attracting; **unstable** if it is not Lyapunov stable.

The two halves are independent: :cite[Strogatz]{work=strogatz-1994 loc="p. 129"} notes that a fixed point may be attracting without being Lyapunov stable, and the centre below is Lyapunov stable without being attracting.
:::

:::definition[The six types]{provenance=adapted src="strogatz-1994:§5.2, pp. 132-136"}
Suppose $A$ is invertible, so that the origin is an isolated fixed point. It is called a

- **saddle** if the eigenvalues are real with opposite signs;
- **node** if they are real, distinct and of the same sign;
- **spiral** if they are a complex conjugate pair with nonzero real part;
- **centre** if they are a nonzero purely imaginary pair;
- **star node** if $A = \lambda I$ with $\lambda \neq 0$;
- **degenerate node** if the eigenvalue is real and repeated but the eigenspace is only one-dimensional.

These six cases are exhaustive and mutually exclusive. The theorem below says which region of the $(T,D)$ plane each occupies, what the orbits look like, and which are stable.
:::

:::statement[The trace-determinant classification]{provenance=adapted src="strogatz-1994:§5.2, pp. 136-137; hirsch-smale-devaney-2013:§4.1, pp. 62-63"}
Let $A$ be a real $2 \times 2$ matrix with $T = \operatorname{tr}A$, $D = \det A$, $\Delta = T^{2} - 4D$. The eigenvalues of $A$ are

$$
\lambda_{\pm} \;=\; \tfrac12\bigl(T \pm \sqrt{\Delta}\,\bigr) ,
\qquad\text{so}\qquad
\lambda_{+} + \lambda_{-} = T ,
\qquad
\lambda_{+}\lambda_{-} = D .
$$

1. **$D < 0$: saddle, unstable.** The eigenvalues are real with $\lambda_{-} < 0 < \lambda_{+}$. The eigenline of $\lambda_{-}$ (the **stable line**) consists of the origin and orbits tending to the origin as $t \to +\infty$; the eigenline of $\lambda_{+}$ (the **unstable line**) of orbits tending to it as $t \to -\infty$. Every other orbit leaves every bounded set in both time directions.
2. **$D > 0$ and $\Delta > 0$: node.** The eigenvalues are real, distinct and both of the sign of $T$ (in particular $T \neq 0$). The node is asymptotically stable if $T < 0$ and unstable if $T > 0$. Call the eigenvalue of smaller modulus **slow** and the other **fast**. For $T < 0$ every orbit tends to the origin; every orbit off the fast eigenline arrives at the origin tangent to the slow eigendirection, and every orbit off the slow eigenline has its direction tending to the fast eigendirection as $t \to -\infty$. The two halves exclude different orbits: an orbit on the slow eigenline satisfies the first and not the second, and an orbit on the fast eigenline the second and not the first. For $T > 0$ the same holds with time reversed.
3. **$\Delta < 0$: spiral or centre.** Then $D > T^{2}/4 \ge 0$ automatically. The eigenvalues are $\alpha \pm i\omega$ with

   $$
   \alpha = \tfrac12 T ,
   \qquad
   \omega = \tfrac12\sqrt{4D - T^{2}} \;>\; 0 .
   $$

   In a suitable linear coordinate system every orbit winds about the origin with constant angular speed $\omega$, its distance from the origin being multiplied by $e^{\alpha t}$. The sense of rotation is the same for every orbit, but it is not determined by $T$ and $D$; the remark below gives two matrices with the same $(T,D)$ that turn opposite ways. Hence the origin is an asymptotically stable **stable spiral** if $T < 0$, an **unstable spiral** if $T > 0$, and if $T = 0$ a **centre**: every orbit other than the origin is then a closed curve of period $2\pi/\omega = 2\pi/\sqrt{D}$, and the origin is neutrally stable.
4. **$D > 0$ and $\Delta = 0$: star or degenerate node.** The eigenvalue $\lambda = T/2$ is real, repeated and nonzero. If $A = \lambda I$ the origin is a star node and every orbit is an open ray from the origin along a straight line. Otherwise the eigenspace is a single line $\mathbb{R}v$, the origin is a degenerate node, and every orbit off that line has direction tending to $\pm v$ both as $t \to +\infty$ and as $t \to -\infty$. In both cases the origin is asymptotically stable if $T < 0$ and unstable if $T > 0$.
5. **$D = 0$: the fixed point is not isolated.** At least one eigenvalue vanishes. If $A \neq 0$ the fixed points fill the line $\ker A$; if $A = 0$ every point of the plane is fixed.

In the $(T,D)$ plane this reads off at a glance: the open half-plane $D < 0$ is saddles; above the $T$-axis the parabola $\Delta = 0$, that is $D = T^{2}/4$, separates nodes ($\Delta > 0$, outside the parabola) from spirals ($\Delta < 0$, inside it), with star and degenerate nodes on the parabola itself; the sign of $T$ gives stability throughout the region $D > 0$; and the positive $D$-axis $T = 0$ carries the centres.
:::

:::idea{provenance=original}
Everything comes from one line of algebra: the characteristic polynomial of a $2 \times 2$ matrix is $\lambda^{2} - T\lambda + D$, so the trace and the determinant *are* the sum and the product of the eigenvalues, and nothing else about $A$ enters the eigenvalues at all. The product tells us whether the eigenvalues have the same sign; the sign of the discriminant tells us whether they are real; and the sum then fixes which sign they share. Each of the resulting eigenvalue configurations has a general solution written down in :ref[]{to=ode.linear-systems} — a combination of two real exponentials, or an exponential times a rotation, or an exponential times a polynomial of degree one — and the shape of the orbits is read directly off that formula by asking which term dominates as $t \to \pm\infty$.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§4.1, pp. 62-63; strogatz-1994:§5.2, pp. 133-137"}
**Step 1 (the characteristic polynomial).** For $A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$,

$$
\det(A - \lambda I) = (a-\lambda)(d-\lambda) - bc = \lambda^{2} - (a+d)\lambda + (ad-bc) = \lambda^{2} - T\lambda + D .
$$

Its roots are $\lambda_{\pm} = \tfrac12(T \pm \sqrt{\Delta})$, and comparing with $(\lambda - \lambda_{+})(\lambda - \lambda_{-})$ gives $\lambda_{+}+\lambda_{-} = T$ and $\lambda_{+}\lambda_{-} = D$. This is the only place the entries of $A$ are used; from here on we argue with $T$ and $D$.

**Step 2 (case 1, $D < 0$).** Subtracting a negative number enlarges $T^{2}$, so $\Delta = T^{2} - 4D > T^{2} \ge 0$. A positive discriminant makes both roots real, and $\sqrt{\Delta} > |T|$. Hence $\lambda_{+} = \tfrac12(T + \sqrt{\Delta}) > 0$ and $\lambda_{-} = \tfrac12(T - \sqrt{\Delta}) < 0$. The eigenvalues are distinct, so eigenvectors $v_{\pm}$ for them are independent and, by :ref[]{to=ode.linear-systems}, every solution is

$$
x(t) = c_{+}e^{\lambda_{+}t}v_{+} + c_{-}e^{\lambda_{-}t}v_{-} .
$$

If $c_{+} = 0$ and $c_{-} \neq 0$ the orbit lies on $\mathbb{R}v_{-}$ and tends to $0$ as $t \to +\infty$; symmetrically for $c_{-} = 0$. If both coefficients are nonzero, then because $v_{+}, v_{-}$ are independent there is $m > 0$ with $|\alpha v_{+} + \beta v_{-}| \ge m\max(|\alpha|,|\beta|)$ for all real $\alpha,\beta$, so $|x(t)| \ge m|c_{+}|e^{\lambda_{+}t} \to \infty$ as $t \to +\infty$ and $|x(t)| \ge m|c_{-}|e^{\lambda_{-}t} \to \infty$ as $t \to -\infty$. In particular arbitrarily small initial data with $c_{+} \neq 0$ leave any fixed ball, so the origin is unstable.

**Step 3 (case 2, $D > 0$, $\Delta > 0$).** The eigenvalues are real and distinct. Their product is $D > 0$, so they share a sign; their sum is $T$, so that sign is the sign of $T$, and $T \ne 0$. (Consistently, $\Delta > 0$ and $D > 0$ force $T^{2} > 4D > 0$.) Take $T < 0$; the case $T > 0$ follows by replacing $t$ by $-t$, which replaces $A$ by $-A$ and so $T$ by $-T$ while leaving $D$ and $\Delta$ unchanged. So let $\lambda_{f} < \lambda_{s} < 0$, with eigenvectors $v_{f}, v_{s}$; here $|\lambda_{s}| < |\lambda_{f}|$, which is why $\lambda_{s}$ is called slow. Every solution $x(t) = c_{s}e^{\lambda_{s}t}v_{s} + c_{f}e^{\lambda_{f}t}v_{f}$ tends to $0$, and the origin is asymptotically stable because both exponentials are bounded by $1$ for $t \ge 0$, so $|x(t)| \le C|x(0)|$ with $C$ depending only on the eigenbasis. For the tangency, suppose $c_{s} \neq 0$ and divide by the leading scalar:

$$
\frac{x(t)}{c_{s}e^{\lambda_{s}t}} \;=\; v_{s} + \frac{c_{f}}{c_{s}}\,e^{(\lambda_{f}-\lambda_{s})t}\,v_{f}
\;\longrightarrow\; v_{s}
\qquad (t \to +\infty),
$$

since $\lambda_{f} - \lambda_{s} < 0$. Rescaling by a positive number does not change the direction of a vector, so the unit vector $x(t)/|x(t)|$ converges to $\pm v_{s}/|v_{s}|$: the orbit reaches the origin tangent to the slow eigendirection. This half of the claim used $c_{s} \neq 0$, that is, the orbit is off the fast eigenline.

For the backward-time half suppose instead that $c_{f} \neq 0$, that is, the orbit is off the slow eigenline, and divide by $c_{f}e^{\lambda_{f}t}$:

$$
\frac{x(t)}{c_{f}e^{\lambda_{f}t}} \;=\; v_{f} + \frac{c_{s}}{c_{f}}\,e^{(\lambda_{s}-\lambda_{f})t}\,v_{s}
\;\longrightarrow\; v_{f}
\qquad (t \to -\infty),
$$

since $\lambda_{s} - \lambda_{f} > 0$ makes the exponential tend to $0$ as $t \to -\infty$; so the unit vector $x(t)/|x(t)|$ converges to $\pm v_{f}/|v_{f}|$. The two exclusions are genuinely different, and neither can be dropped: on the slow eigenline ($c_{f} = 0$) the direction of the orbit is $\pm v_{s}/|v_{s}|$ for every $t$ and never approaches $v_{f}$, and on the fast eigenline ($c_{s} = 0$) it is $\pm v_{f}/|v_{f}|$ for every $t$ and never approaches $v_{s}$.

**Step 4 (case 3, $\Delta < 0$).** From $T^{2} - 4D < 0$ we get $D > T^{2}/4 \ge 0$, so $D > 0$ is automatic here. The eigenvalues are $\lambda_{\pm} = \alpha \pm i\omega$ with $\alpha = T/2$ and $\omega = \tfrac12\sqrt{-\Delta} = \tfrac12\sqrt{4D - T^{2}} > 0$. Let $v = p + iq$ be a complex eigenvector for $\lambda_{+}$; by :ref[]{to=ode.linear-systems} the real vectors $p$ and $q$ are independent and the general real solution is

$$
x(t) = e^{\alpha t}\Bigl[\,c_{1}\bigl(\cos\omega t\; p - \sin\omega t\; q\bigr) + c_{2}\bigl(\sin\omega t\; p + \cos\omega t\; q\bigr)\Bigr] .
$$

Collecting the coefficients of $p$ and of $q$, the coordinate pair of $x(t)$ in the basis $(p,q)$ is

$$
\begin{pmatrix} \xi(t) \\ \eta(t)\end{pmatrix}
= e^{\alpha t}
\begin{pmatrix} \cos\omega t & \sin\omega t \\ -\sin\omega t & \cos\omega t\end{pmatrix}
\begin{pmatrix} c_{1} \\ c_{2}\end{pmatrix} ,
$$

a rotation through the angle $-\omega t$ scaled by $e^{\alpha t}$. So in these coordinates $\xi^{2}+\eta^{2} = e^{2\alpha t}(c_1^2+c_2^2)$ and the polar angle decreases at the constant rate $\omega$. If $\alpha < 0$ the orbit spirals into the origin through infinitely many turns, and $|x(t)| \le Ce^{\alpha t}|x(0)|$ for a constant $C$ fixed by the basis $(p,q)$, so the origin is asymptotically stable; if $\alpha > 0$ it spirals out and is unstable. If $\alpha = 0$ then $\xi^{2}+\eta^{2}$ is constant: in the $(p,q)$ coordinates every orbit is a circle, hence in the original coordinates an ellipse, closed and of period $2\pi/\omega$, and $\omega = \tfrac12\sqrt{4D} = \sqrt{D}$. Such a fixed point is Lyapunov stable, because $|x(t)| \le M|x(0)|$ with $M = \max_{0 \le s \le 2\pi/\omega}\lVert e^{sA}\rVert$ by periodicity, but not attracting, because $x(2\pi k/\omega) = x(0)$ for every integer $k$: it is neutrally stable.

**Step 5 (case 4, $D > 0$, $\Delta = 0$).** Now $\lambda_{+} = \lambda_{-} = T/2 =: \lambda$, and $T^{2} = 4D > 0$ gives $\lambda \neq 0$. If the eigenspace of $\lambda$ is all of $\mathbb{R}^{2}$ then $Ax = \lambda x$ for every $x$, that is $A = \lambda I$; then $x(t) = e^{\lambda t}x(0)$, so each orbit is the open ray from the origin through $x(0)$, traversed inward if $\lambda < 0$ and outward if $\lambda>0$. Otherwise the eigenspace is a line $\mathbb{R}v$, and by :ref[]{to=linalg.jordan-form} there is a vector $w$ with $(A - \lambda I)w = v$, and $(v,w)$ is a basis. Solving in that basis gives

$$
x(t) = e^{\lambda t}\bigl[(c_{1} + c_{2}t)\,v + c_{2}\,w\bigr] ,
$$

as one checks by differentiating and using $Av = \lambda v$, $Aw = \lambda w + v$. For $c_{2} \neq 0$ the bracket has length growing like $|c_{2}t|$ and direction

$$
\frac{(c_{1}+c_{2}t)v + c_{2}w}{|c_{1}+c_{2}t|}
\;\longrightarrow\;
\operatorname{sgn}(c_{2})\,v \quad (t \to +\infty),
\qquad
\frac{(c_{1}+c_{2}t)v + c_{2}w}{|c_{1}+c_{2}t|}
\;\longrightarrow\;
-\operatorname{sgn}(c_{2})\,v \quad (t \to -\infty) ,
$$

because $(c_{1}+c_{2}t)/|c_{1}+c_{2}t|$ equals $\operatorname{sgn}(c_{2})$ once $t$ is large and positive and $-\operatorname{sgn}(c_{2})$ once $t$ is large and negative, while $c_{2}w/|c_{1}+c_{2}t| \to 0$ in both directions. The two limits are the two opposite directions along $\mathbb{R}v$, so the orbit is tangent to the eigenline at both ends. Since a polynomial times $e^{\lambda t}$ tends to $0$ as $t \to +\infty$ exactly when $\lambda < 0$, the fixed point is asymptotically stable for $T < 0$ and unstable for $T > 0$.

**Step 6 (case 5, $D = 0$).** Then $\lambda_{+}\lambda_{-} = 0$, so $A$ is singular and $\ker A \neq \{0\}$. Every $x_* \in \ker A$ satisfies $Ax_* = 0$ and is therefore a fixed point, so the origin is not isolated. If $A \neq 0$ then $\operatorname{rank}A = 1$ and $\ker A$ is a line; if $A = 0$ then $\ker A = \mathbb{R}^{2}$. $\square$
:::

:::remark[Where the hypotheses are used, and what $(T,D)$ does not decide]{provenance=adapted src="hirsch-smale-devaney-2013:§4.1, p. 63; strogatz-1994:§5.2, pp. 133, 136"}
- **$D \neq 0$ is what makes the fixed point isolated.** It is used in Steps 2-5 through $\lambda_{+}\lambda_{-} \neq 0$. Drop it and the classification collapses: for $A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ ($T = D = 0$) the whole $x$-axis consists of fixed points and $x(t) = x(0) + tA x(0)$ moves along horizontal lines at constant speed, so the fixed points are unstable; for $A = \begin{pmatrix}-1&0\\0&0\end{pmatrix}$ ($T = -1$, $D = 0$) every point of the $y$-axis is a fixed point and is neutrally stable. Both are excluded by $D \neq 0$.
- **$\Delta \neq 0$ is what gives two independent eigenvectors.** It is used in Steps 2-4 to write the solution in an eigenbasis. On the parabola $\Delta = 0$ the Jordan form is needed instead (Step 5), and the pair $(T,D)$ no longer determines the portrait: $\begin{pmatrix}-1&0\\0&-1\end{pmatrix}$ and $\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$ both have $T = -2$, $D = 1$, but the first is a star node and the second a degenerate node.
- **$(T,D)$ never decides the sense of rotation.** $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ and $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ both have $T = 0$, $D = 1$, and both are centres of period $2\pi$, but the first turns clockwise and the second counterclockwise. More generally, :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="p. 63"} point out that a single point of the $(T,D)$ plane carries infinitely many different matrices — the entries supply four parameters and $(T,D)$ imposes two conditions — all with the same eigenvalue configuration but with phase portraits that may differ in ways such as the sense of rotation or the number of independent eigenvectors. Those are examples, not a complete list: two matrices with the same $(T,D)$ also have, in general, different eigendirections, so their portraits agree only after a linear change of coordinates.
- **The two halves of the node tangency exclude different orbits.** Tangency to the slow eigendirection as $t \to +\infty$ needs $c_{s} \neq 0$, while convergence of the direction to the fast eigendirection as $t \to -\infty$ needs $c_{f} \neq 0$, and each hypothesis fails on one of the two eigenlines: for $A = \operatorname{diag}(-1,-2)$ the orbit $x(t) = (e^{-t},0)$ lies on the slow eigenline, so its direction is $(1,0)$ for every $t$ and tends to the slow, not the fast, eigendirection in backward time. :cite[Strogatz]{work=strogatz-1994 loc="pp. 133, 136"} hedges the forward-time half with "typically" and states the backward-time half for all trajectories; case 2 above instead names the excluded eigenline in each half, which is what makes both statements hold of every orbit they mention.
- **The centre is the fragile case.** It sits on the boundary $T = 0$ between the stable and unstable half of the region $D > 0$, so an arbitrarily small change of $A$ turns it into a spiral of either sign. What happens when nonlinear terms rather than linear ones are added is the subject of :ref[]{to=dyn.linearization}.
:::

:::method[Classifying a planar linear system]{provenance=original}
Given a real $2 \times 2$ matrix $A$:

1. Compute $T = \operatorname{tr}A$ and $D = \det A$. If $D = 0$, stop: the fixed points are not isolated, and they fill $\ker A$ (or the plane, if $A = 0$).
2. If $D < 0$, the origin is a saddle and unstable. Its stable and unstable lines are the eigenlines of $\lambda_{\mp} = \tfrac12(T \mp \sqrt{T^{2}-4D})$.
3. Otherwise $D > 0$; compute $\Delta = T^{2} - 4D$. The sign of $T$ now gives the stability: asymptotically stable for $T < 0$, unstable for $T > 0$, neutrally stable for $T = 0$.
4. If $\Delta > 0$: a node. Compute $\lambda_{\pm}$ and their eigenvectors; the one with the smaller $|\lambda|$ is the slow eigendirection, to which the orbits are tangent at the origin.
5. If $\Delta < 0$: a spiral, or a centre when $T = 0$. The decay rate is $\alpha = T/2$ and the angular speed is $\omega = \tfrac12\sqrt{4D-T^{2}}$, so one turn takes time $2\pi/\omega$ and multiplies the distance to the origin by $e^{2\pi\alpha/\omega}$.
6. If $\Delta = 0$: a star node when $A = (T/2)I$, otherwise a degenerate node, with orbits tangent to the single eigenline at both ends.
7. For a spiral or centre, get the sense of rotation from one vector of the field: evaluate $Ae_{1}$, where $e_{1} = (1,0)$. Its second component is positive for counterclockwise rotation and negative for clockwise.
:::

:::example[A stable spiral, solved and measured]{provenance=original}
Classify and solve $\dot x = Ax$ with

$$
A = \begin{pmatrix} -3 & 2 \\ -4 & 1\end{pmatrix} ,
\qquad
x(0) = \begin{pmatrix} 1 \\ 0 \end{pmatrix}.
$$

**Step 1 (invariants).** $T = -3 + 1 = -2$ and $D = (-3)(1) - (2)(-4) = -3 + 8 = 5$. Hence $\Delta = T^{2} - 4D = 4 - 20 = -16 < 0$. By case 3 of the theorem the origin is a spiral, and $T < 0$ makes it a stable one: asymptotically stable.

**Step 2 (rates).** $\alpha = T/2 = -1$ and $\omega = \tfrac12\sqrt{16} = 2$, so the eigenvalues are $-1 \pm 2i$. Indeed $\lambda^{2} + 2\lambda + 5 = (\lambda+1)^{2}+4$ vanishes at $\lambda = -1 \pm 2i$. One turn takes $2\pi/\omega = \pi$ units of time.

**Step 3 (eigenvector).** For $\lambda = -1+2i$,

$$
A - \lambda I = \begin{pmatrix} -2-2i & 2 \\ -4 & 2-2i\end{pmatrix} ,
$$

and the first row gives $(-2-2i)v_{1} + 2v_{2} = 0$, that is $v_{2} = (1+i)v_{1}$. Take $v = (1, 1+i)$; the second row is satisfied too, since $-4 + (2-2i)(1+i) = -4 + 4 = 0$. So $p = \operatorname{Re}v = (1,1)$ and $q = \operatorname{Im}v = (0,1)$.

**Step 4 (the two real solutions).** With $\alpha = -1$, $\omega = 2$ the formula of Step 4 of the proof gives the basis

$$
u_{1}(t) = e^{-t}\bigl(\cos 2t,\; \cos 2t - \sin 2t\bigr) ,
\qquad
u_{2}(t) = e^{-t}\bigl(\sin 2t,\; \sin 2t + \cos 2t\bigr) .
$$

**Step 5 (fit the data).** $u_{1}(0) = (1,1)$ and $u_{2}(0) = (0,1)$, so $c_{1}(1,1) + c_{2}(0,1) = (1,0)$ gives $c_{1} = 1$, $c_{2} = -1$ and

$$
x(t) = e^{-t}\bigl(\cos 2t - \sin 2t,\; -2\sin 2t\bigr) .
$$

Check: $\dot x_{1} = e^{-t}(-3\cos 2t - \sin 2t)$, and $-3x_{1} + 2x_{2} = e^{-t}(-3\cos 2t + 3\sin 2t - 4\sin 2t)$ agrees; $\dot x_{2} = e^{-t}(2\sin 2t - 4\cos 2t)$, and $-4x_{1} + x_{2} = e^{-t}(-4\cos 2t + 4\sin 2t - 2\sin 2t)$ agrees.

**Step 6 (sense of rotation and a number).** $Ae_{1} = (-3,-4)$ has negative second component, so the orbit turns clockwise. After one full turn, at $t = \pi$,

$$
x(\pi) = e^{-\pi}\bigl(\cos 2\pi - \sin 2\pi,\; -2\sin 2\pi\bigr) = e^{-\pi}\begin{pmatrix}1\\0\end{pmatrix} ,
$$

so the orbit returns to the positive $x_{1}$-axis with its distance to the origin multiplied by

$$
e^{-\pi} = 0.0432139182\ldots
$$

That is, one revolution leaves $4.32\%$ of the distance: the spiral is a tight one, as $|\alpha|/\omega = 1/2$ predicts.
:::

:::application{provenance=original}
The classification is the standard first move on any two-dimensional model, and the $(T,D)$ plane is where the familiar regimes of the damped oscillator live. Writing $\ddot y + 2\gamma\dot y + \omega_{0}^{2}y = 0$ of :ref[]{to=ode.harmonic-oscillator} as the planar system $\dot y = v$, $\dot v = -\omega_{0}^{2}y - 2\gamma v$ gives

$$
A = \begin{pmatrix} 0 & 1 \\ -\omega_{0}^{2} & -2\gamma\end{pmatrix} ,
\qquad
T = -2\gamma , \qquad D = \omega_{0}^{2} , \qquad \Delta = 4(\gamma^{2}-\omega_{0}^{2}) .
$$

So $D > 0$ always, and increasing the damping from $\gamma = 0$ drives the point $(T,D) = (-2\gamma,\omega_{0}^{2})$ horizontally across the $(T,D)$ plane: it starts on the positive $D$-axis (a centre: the undamped oscillator), moves into the spiral region (underdamped, $\gamma < \omega_{0}$, that is quality factor $Q = \omega_{0}/2\gamma > 1/2$), touches the parabola $\Delta = 0$ exactly at critical damping $\gamma = \omega_{0}$ (a degenerate node, since $A$ is then not a multiple of the identity), and passes into the node region beyond it (overdamped). The three classical regimes are thus three regions of one picture, and the same statement applies verbatim to a series $RLC$ circuit with $2\gamma = R/L$, $\omega_{0}^{2} = 1/(LC)$, and to any lightly damped mechanical mode.

The same reading is what makes the classification useful for nonlinear models: by :ref[]{to=dyn.linearization} the Jacobian at an equilibrium of a nonlinear planar system is a $2 \times 2$ matrix, and its trace and determinant decide the local picture whenever the equilibrium is hyperbolic. In an ecological or chemical model, where the Jacobian entries are measurable response coefficients, the sign of $D$ separates saddle-type coexistence states from genuine attractors and repellers, and the sign of $T$ then says whether the state is approached or left; whether the approach oscillates is the sign of $\Delta$.
:::
