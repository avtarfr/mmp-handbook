---
id: dyn.poincare-bendixson
title: Limit cycles and the Poincare-Bendixson theorem
kind: theorem
level: core
summary: "Settles the long-run behaviour of a planar flow: a trajectory trapped in a compact region free of fixed points must be, or spiral onto, a closed orbit, which gives a constructive test for self-sustained oscillation, while gradient structure and Dulac's criterion give two tests that rule oscillation out."
prereqs: [dyn.linearization, dyn.linear-planar-classification, dyn.lyapunov-functions, ode.existence-uniqueness, ode.continuous-dependence, found.compactness, found.implicit-inverse-function, vcalc.stokes-theorem]
provenance: adapted
sources:
  - work: strogatz-1994
    loc: "§7.0, pp. 196-197: a limit cycle defined as an isolated closed trajectory, stable, unstable or half-stable according to the behaviour of neighbouring trajectories, with the observation that a linear system's closed orbits are never isolated because $cx(t)$ is a solution whenever $x(t)$ is, so limit cycles are inherently nonlinear; the list of self-sustained oscillators they model. §7.2 Ruling Out Closed Orbits, pp. 199-203: a gradient system $\\dot x=-\\nabla V$ with single-valued continuously differentiable $V$, Theorem 7.2.1 that it has no closed orbits, and the proof by computing $\\Delta V$ around a putative circuit in two ways; Example 7.2.2, the same energy argument for $\\ddot x+(\\dot x)^3+x=0$; the use of a Liapunov function to the same end; DULAC'S CRITERION - if $g$ is continuously differentiable and real-valued on a simply connected region $R$ of the plane and $\\nabla\\cdot(g\\dot x)$ has one sign throughout $R$, then $R$ contains no closed orbit lying entirely in it - with the proof by Green's theorem using $\\dot x\\cdot n=0$ on a closed orbit, and the remark that candidate weights are $1$, $1/x^ay^b$, $e^{ax}$ and $e^{ay}$; Examples 7.2.4 and 7.2.5. §7.3, pp. 203-210: the Poincare-Bendixson theorem in the form with hypotheses (1) $R$ closed and bounded, (2) $\\dot x=f(x)$ continuously differentiable on an open set containing $R$, (3) $R$ contains no fixed points, (4) a trajectory $C$ confined in $R$ for all future time, with conclusion that $C$ is a closed orbit or spirals toward one, so that $R$ contains a closed orbit; the statement that its proof needs advanced ideas from topology and the references given for it; the trapping-region construction with the field pointing inward on the boundary; the remark that $R$ is drawn ring-shaped because a closed orbit must encircle a fixed point; Example 7.3.1, the annulus $0.999\\sqrt{1-\\mu}<r<1.001\\sqrt{1+\\mu}$ for $\\dot r=r(1-r^2)+\\mu r\\cos\\theta$, $\\dot\\theta=1$; Examples 7.3.2-7.3.3, the Selkov glycolysis model, its nullclines, the inward diagonal obtained from $\\dot x-(-\\dot y)=b-x$, and the punctured region used when the enclosed fixed point is a repeller; and No Chaos in the Phase Plane, p. 210"
    pages: "196-210"
    role: the definition of a limit cycle as an isolated closed orbit and of its stability; the two exclusion results (gradient systems, Dulac) with their proofs; the trapping-region form of the Poincare-Bendixson theorem and the punctured-region device; the deduction that chaos is impossible in the plane
  - work: hirsch-smale-devaney-2013
    loc: "§10.1-10.2, pp. 215-218: limit sets are closed and invariant; the proposition that $\\omega(X)=\\omega(Z)$ when $X$ and $Z$ lie on one solution, that $\\omega(Z)\\subset D$ for closed positively invariant $D$ containing $Z$, and that a closed invariant set contains the limit sets of its points; the transverse line at a non-equilibrium point $X_0$, parametrized by $h(u)=X_0+uV_0$, the local section $S$ at $X_0$ on which the field is nowhere tangent, and the flow box $\\Psi(s,u)=\\phi_s(h(u))$ with the property that each $X$ in it meets $S$ at a unique $t\\in(-\\sigma,\\sigma)$; and the proposition, proved with the implicit function theorem applied to $G(X,t)=\\phi_t(X)\\cdot F(X_0)$ whose $t$-derivative at $(Z_0,t_0)$ is $|F(X_0)|^2\\neq0$, that the time of first arrival at $S$ is a continuous function of the initial point. §10.4, pp. 220-222: the proposition that a sequence of distinct points of a local section lying on one solution and monotone along the solution is monotone along the section, proved by the Jordan-curve argument on the region $D$ bounded by the solution arc from $Y_0$ to $Y_1$ together with the segment $T\\subset S$; and the proposition that the solution through a point of $\\omega(X)$ crosses any local section at most once. §10.5, pp. 222-224: the Poincare-Bendixson theorem, that a nonempty closed and bounded limit set of a planar system containing no equilibrium point is a closed orbit, with its full proof in two halves - first that any $Y\\in\\omega(X)$ lies on a closed orbit, then that $d(\\phi_t(X),\\gamma)\\to0$, using the bound $t_{n+1}-t_n\\le\\tau+\\epsilon$ on successive section times and continuity with respect to initial conditions. §10.6, pp. 225-228: a limit cycle defined as a closed orbit $\\gamma$ with $\\gamma\\subset\\omega(X)$ or $\\gamma\\subset\\alpha(X)$ for some $X\\notin\\gamma$; Corollary 1 (p. 226), that $\\{Y:\\omega(Y)=\\gamma\\}-\\gamma$ is open; Corollary 2 (p. 227), that a closed and bounded positively or negatively invariant set contains a limit cycle or an equilibrium; Corollary 3 (p. 227), that the open region inside a closed orbit contains an equilibrium or a limit cycle; and Corollaries 5 and 6 (p. 228), that a first integral nonconstant on open sets, and a strict Liapunov function, each forbid limit cycles. pp. 224-225: the example whose $\\omega$-limit set consists of an equilibrium together with a homoclinic solution. §10.7, pp. 228-229: the Belousov-Zhabotinsky reaction as the historical example of a chemical oscillator, and the two-variable chlorine dioxide-iodine-malonic acid model $x'=a-x-4xy/(1+x^2)$, $y'=bx(1-y/(1+x^2))$, whose stable limit cycle is to be found from the nullclines and the Poincare-Bendixson theorem"
    pages: "215-229"
    role: the limit-set formulation of the theorem and the complete proof followed below, including the local section, the flow box, the continuity of the arrival time, the monotone-sequence lemma and the one-crossing lemma; the alternative definition of a limit cycle, compared with Strogatz's in a remark; the description on p. 215 of a closed and bounded planar limit set that is not a closed orbit, and the homoclinic example of pp. 224-225, both used in the remark on why the no-fixed-point hypothesis cannot be dropped; the oscillating chemical reactions of §10.7, cited in the application
---

:::definition[Closed orbits, limit sets, limit cycles, trapping regions]{provenance=adapted src="strogatz-1994:§7.0, pp. 196-197; hirsch-smale-devaney-2013:§10.1, p. 215, and §10.6, p. 225"}
Let $f$ be a vector field with continuous first partial derivatives on an open set $U \subseteq \mathbb{R}^2$, and write $\phi_t$ for the flow of $\dot x = f(x)$, so that $t \mapsto \phi_t(X)$ is the solution through $X$ (:ref[]{to=ode.existence-uniqueness}).

A **closed orbit** (or periodic orbit, or cycle) is the image of a nonconstant periodic solution. A **limit cycle** is a closed orbit that is **isolated**: some annular neighbourhood of it contains no other closed orbit. It is **stable** or **attracting** if all nearby trajectories approach it, **unstable** if all recede, and **half-stable** if those on one side approach and those on the other recede. Linear systems never have limit cycles: if $x(t)$ solves $\dot x = Ax$ and is periodic, so is $cx(t)$ for every $c \neq 0$, so each closed orbit sits in a one-parameter family and none is isolated. A limit cycle is a genuinely nonlinear object.

The **$\omega$-limit set** of $X$ is

$$
\omega(X) \;=\; \bigl\{\,Y : \phi_{t_n}(X)\to Y \text{ for some } t_n \to +\infty \,\bigr\}
\;=\; \bigcap_{T\ge0}\ \overline{\{\phi_t(X) : t \ge T\}} ,
$$

defined when the forward solution exists for all $t \ge 0$; the **$\alpha$-limit set** $\alpha(X)$ is the same with $t_n \to -\infty$. A **limit set** means either of these.

A set $D \subseteq U$ is **positively invariant** if $\phi_t(D) \subseteq D$ for all $t \ge 0$. A **trapping region** is a compact, connected, positively invariant set; in practice one is produced by exhibiting a compact region with piecewise smooth boundary on which $f$ points strictly inward, that is, $f \cdot n < 0$ at every boundary point where the outward normal $n$ is defined.

Finally, let $X_0$ be a point with $f(X_0) \neq 0$. Let $L$ be the straight line through $X_0$ **perpendicular to $f(X_0)$**, so that $f(X_0)$ is by construction not tangent to $L$: writing $w = f(X_0)$, the line is $L = \{Y : Y\cdot w = X_0\cdot w\}$ and $f(X_0)\cdot w = |w|^2 > 0$. Since $f$ is continuous, $f(Y)\cdot w > 0$ for all $Y$ in some neighbourhood of $X_0$. A **local section** at $X_0$ is an open segment $S \subseteq L$ containing $X_0$ and short enough to lie in that neighbourhood. Trajectories therefore cross $S$ transversally, and all in the same direction, namely the direction of increasing $Y\cdot w$.
:::

:::statement[Gradient systems have no closed orbits]{provenance=adapted src="strogatz-1994:§7.2, Thm 7.2.1, p. 199"}
Suppose $\dot x = -\nabla V$ on $U$, with $V : U \to \mathbb{R}$ single-valued and continuously differentiable. Then the system has no closed orbit.
:::

:::statement[Dulac's criterion]{provenance=adapted src="strogatz-1994:§7.2, Dulac's criterion, p. 202"}
Suppose that $R \subseteq \mathbb{R}^2$ is **simply connected**, and that on $R$

1. the field $f$ of the system $\dot x = f(x)$ has continuous first partial derivatives, and
2. some real-valued **weight** $g$, also with continuous first partial derivatives, makes the divergence of the weighted field take one strict sign: either $\nabla\cdot(gf) > 0$ at every point of $R$, or $\nabla\cdot(gf) < 0$ at every point of $R$, where
$$
\nabla\cdot\bigl(g f\bigr) \;=\; \frac{\partial (g f_1)}{\partial x} + \frac{\partial (g f_2)}{\partial y} .
$$

Then no periodic solution of the system has its whole trajectory inside $R$.

Strogatz phrases condition 2 as the requirement that the divergence of the weighted field have one sign on $R$. The weight is entirely at the user's disposal, and the criterion is worth only as much as the choice of $g$.
:::

:::statement[Poincare-Bendixson theorem]{provenance=adapted src="hirsch-smale-devaney-2013:§10.5, p. 222; strogatz-1994:§7.3, p. 203"}
**Limit-set form** (the version proved here, following Hirsch, Smale and Devaney). Let $f$ have continuous first partial derivatives on an open subset of the plane, and let $\Lambda$ be a nonempty, closed and bounded limit set of the system that contains no fixed point. Then $\Lambda$ is a closed orbit.

**Trapping-region form** (the version used in practice, following Strogatz). Suppose that

1. $R \subseteq \mathbb{R}^2$ is compact;
2. $f$ has continuous first partial derivatives on some neighbourhood of $R$;
3. no point of $R$ is a fixed point of $f$;
4. for some $X \in R$ the forward trajectory never leaves $R$: $\phi_t(X) \in R$ for every $t \ge 0$. Call that trajectory $C$.

Then $C$ is itself a closed orbit, or it spirals towards one as $t \to \infty$; in either case $R$ contains a closed orbit.

The second form follows from the first, as shown below. Both are statements about the **plane** and both are false in $\mathbb{R}^3$.
:::

:::idea{provenance=original}
Two exclusion results and one existence result, with three quite different mechanisms.

For a gradient system the quantity $V$ decreases strictly along every nonstationary trajectory, while going once round a closed orbit must return it to its starting value. Dulac's criterion replaces "$V$ decreases" by a flux computation: a closed orbit is tangent to the field, so the flux of $gf$ through it vanishes, and Green's theorem turns that into the vanishing of the integral of $\nabla\cdot(gf)$ over the inside — impossible if the integrand never changes sign.

The Poincare-Bendixson theorem is where planarity enters. Its engine is the fact that a trajectory and a transversal segment cannot be interleaved: if a trajectory crosses a short transversal at three points in time order, the second must lie between the first and the third **along the segment**, because the loop formed by the trajectory arc and the piece of segment between the first two crossings is a Jordan curve the trajectory can never re-enter. That one-dimensional monotonicity is what forbids a planar trajectory from wandering forever, and it is exactly what fails in three dimensions. Given it, if $Y$ lies in a limit set then the trajectory of $Y$ can meet a transversal only once; but if some $Z$ lies in the limit set of $Y$ then the trajectory of $Y$ returns to a transversal at $Z$ again and again, so two of those returns must be the same point and $Y$ is periodic.
:::

:::proof[Gradient systems]{provenance=adapted src="strogatz-1994:§7.2, proof of Thm 7.2.1, pp. 199-200"}
Suppose $x(t)$ traversed a closed orbit, with period $T > 0$.

1. *Round trip.* $x(T) = x(0)$, so $V(x(T)) - V(x(0)) = 0$. **This is where $V$ is required to be single-valued**: a multivalued potential, such as the polar angle, may return to a different branch.
2. *The same difference as an integral.* By the chain rule and the equation of motion,
$$
V(x(T)) - V(x(0)) = \int_0^T \nabla V \cdot \dot x \ \mathrm{d}t = \int_0^T (-\dot x)\cdot \dot x\ \mathrm{d}t = -\int_0^T |\dot x|^2\,\mathrm{d}t .
$$
3. *Strict sign.* The integrand is continuous and nonnegative, so the integral vanishes only if $\dot x \equiv 0$, that is only if the orbit is a single fixed point. A closed orbit is by definition the image of a **nonconstant** periodic solution, so the integral is strictly positive and the difference strictly negative, contradicting step 1. $\square$
:::

:::proof[Dulac's criterion]{provenance=adapted src="strogatz-1994:§7.2, proof of Dulac's criterion, p. 202"}
Suppose a closed orbit $C$ lay entirely in $R$.

1. *The inside is available.* $C$ is a simple closed curve, so by the Jordan curve theorem it bounds a region $A$. Because **$R$ is simply connected** and $C \subset R$, the whole of $A$ lies in $R$ as well; this is the only use of simple connectivity, and the remark below shows it cannot be dropped.
2. *Green's theorem.* $C$ is a smooth closed curve, $gf$ is continuously differentiable on a neighbourhood of $\overline A$, so by :ref[the divergence form of Green's theorem in the plane]{to=vcalc.stokes-theorem}
$$
\iint_A \nabla\cdot(g f)\ \mathrm{d}A \;=\; \oint_C g\,f\cdot n\ \mathrm{d}\ell ,
$$
with $n$ the outward unit normal.
3. *The flux vanishes.* On a closed orbit the field is tangent to the curve: $f(x)$ is the velocity of the solution tracing $C$. **This is the step that uses the assumption that $C$ is an orbit** and not merely a curve. Hence $f\cdot n = 0$ at every point of $C$ and the line integral is $0$.
4. *Contradiction.* So $\iint_A \nabla\cdot(gf)\,\mathrm dA = 0$. But $A$ has positive area and $\nabla\cdot(gf)$ is continuous with one strict sign on $R \supseteq A$, so the integral is strictly positive or strictly negative. $\square$
:::

:::proof[Three lemmas on local sections]{provenance=adapted src="hirsch-smale-devaney-2013:§10.2, pp. 216-218, and §10.4, pp. 220-222"}
Throughout, $S$ is a local section at a point $X_0$ with $f(X_0) \neq 0$.

**Lemma 1 (flow box and continuous arrival time).** There are $\sigma > 0$ and an open neighbourhood $V$ of $X_0$ such that every $X \in V$ satisfies $\phi_t(X) \in S$ for exactly one $t \in (-\sigma,\sigma)$. More generally, if $\phi_{t_0}(Z_0) = X_0$ then $Z_0$ has a neighbourhood $N$ and there is a continuous $\tau : N \to \mathbb{R}$ with $\tau(Z_0) = t_0$ and $\phi_{\tau(Z)}(Z) \in S$ for every $Z \in N$.

*Proof.* Write $w = f(X_0) \neq 0$ and $G(Z,t) = \phi_t(Z)\cdot w$. The line containing $S$ is the level set $\{Y : Y\cdot w = X_0 \cdot w\}$. Now $G$ is continuously differentiable in $(Z,t)$ by :ref[smooth dependence of solutions on their data]{to=ode.continuous-dependence}, $G(Z_0,t_0) = X_0\cdot w$, and
$$
\frac{\partial G}{\partial t}(Z_0,t_0) = f(\phi_{t_0}(Z_0))\cdot w = f(X_0)\cdot w = |w|^2 \neq 0 .
$$
Apply :ref[the implicit function theorem]{to=found.implicit-inverse-function}: on some neighbourhood $N$ of $Z_0$ it produces a continuously differentiable $\tau$ with $\tau(Z_0) = t_0$ and $G(Z,\tau(Z)) \equiv X_0\cdot w$, which says that $\phi_{\tau(Z)}(Z)$ lies on the line of $S$; shrinking $N$ puts it in the segment $S$. Taking $Z_0 = X_0$, $t_0 = 0$ gives the first statement, with uniqueness in $(-\sigma,\sigma)$ because $t \mapsto G(Z,t)$ has derivative near $|w|^2 > 0$, hence is strictly increasing, for $Z$ near $X_0$ and $|t|$ small. $\square$

**Lemma 2 (monotone crossings).** The times at which a given orbit meets $S$ form a discrete set, so they can be listed in increasing order. Let $Y_0, Y_1, Y_2$ be the points of three **successive** such crossings — the orbit does not meet $S$ at any time strictly between them — and suppose they are distinct. Then $Y_1$ lies strictly between $Y_0$ and $Y_2$ in the order along the segment $S$. Consequently the whole sequence of successive crossings is monotone along $S$, and so is every subsequence of it.

*Proof.* Discreteness is Lemma 1: around any crossing point there is a flow box in which the orbit meets $S$ at exactly one time of $(-\sigma,\sigma)$.

1. *$\Sigma$ is a Jordan curve.* Let $\mathcal A$ be the trajectory arc from $Y_0$ to $Y_1$ and let $T \subseteq S$ be the closed subsegment between $Y_0$ and $Y_1$. By uniqueness of solutions $\mathcal A$ meets itself nowhere, and **because the two crossings are successive** $\mathcal A \cap S = \{Y_0,Y_1\}$, so $\mathcal A$ meets $T$ only at the two shared endpoints. Hence $\Sigma = \mathcal A \cup T$ is a simple closed curve; let $D$ be the bounded open region it encloses (Jordan curve theorem). Without successiveness $\mathcal A$ could re-cross the interior of $T$ and $\Sigma$ would not be simple; the general monotonicity statement is then recovered by induction over consecutive triples.

2. *The two leftover pieces of $S$.* Since $\Sigma \cap S = T$, the set $S \setminus T$ is the union of two connected pieces: $I_0$, beyond $Y_0$, and $I_1$, beyond $Y_1$. Neither meets $\Sigma$, so each lies **entirely** inside $D$ or entirely outside $\overline D$.

3. *One-way crossing.* Every trajectory crosses $S$ in the same direction, so either all of them leave $D$ across the relative interior of $T$, or all of them enter. Take the first case; the second is the mirror image, obtained by exchanging the words "inside" and "outside" throughout.

4. *The complement of $D$ is positively invariant.* A forward trajectory outside $\overline D$ cannot enter $D$ through $T$, by the choice of case in step 3, and cannot cross $\mathcal A$, by uniqueness of solutions.

5. *Four rays at $Y_1$.* Take the flow-box coordinates $(s,u)$ of Lemma 1 near $Y_1$, in which the flow is $\partial/\partial s$, $S$ is $\{s = 0\}$, $Y_1$ is the origin and $T$ is locally $\{s=0,\ u \le 0\}$. Near $Y_1$ the curve $\Sigma$ is exactly two rays out of the origin: the incoming orbit arc $\{u = 0,\ s \le 0\}$ and the segment $\{s = 0,\ u \le 0\}$. They cut a small disc about $Y_1$ into two pieces, the quadrant $\{s<0,\,u<0\}$ and the three-quadrant sector containing both the **outgoing** orbit $\{u = 0,\ s>0\}$ and the piece $I_1 = \{s = 0,\ u>0\}$. So the forward orbit just after $Y_1$ and the piece $I_1$ lie in the same component of the disc minus $\Sigma$. In the case of step 3 the forward orbit leaves $D$ at $Y_1$, so that component is outside $\overline D$; hence $I_1$ lies outside $\overline D$ too.

6. *Four rays at $Y_0$.* The same picture at $Y_0$, where $T$ is locally $\{s=0,\ u \ge 0\}$ and $\mathcal A$ is the **outgoing** ray $\{u=0,\ s>0\}$: the two rays cut the disc into the quadrant $\{s>0,\,u>0\}$ and a three-quadrant sector containing $I_0 = \{s=0,\ u<0\}$. In the case of step 3 trajectories cross $T$ out of $D$, that is, in the direction of increasing $s$, so $D$ lies locally on the side $s<0$ of $T$ and the quadrant $\{s>0,\,u>0\}$ is not in $D$. Therefore $D$ is locally the other sector, and $I_0 \subset D$ by step 2.

7. *Conclusion.* By step 4 the forward orbit from $Y_1$ never meets $\overline D$ again, and $T \cup D \subseteq \overline D$, so $Y_2 \notin T$ and $Y_2 \notin D$. Thus $Y_2 \in S\setminus T = I_0 \cup I_1$ with $Y_2 \notin D \supseteq I_0$, which leaves $Y_2 \in I_1$: beyond $Y_1$ as seen from $Y_0$. In the mirror case of step 3 steps 5 and 6 give $I_1 \subset D$ and $I_0$ outside $\overline D$, while $D$ is now positively invariant, so again $Y_2 \in I_1$.

Finally, a sequence in which every consecutive triple is monotone is monotone. $\square$

**Lemma 3 (one crossing).** If $Y \in \omega(X)$, then the orbit of $Y$ meets any local section in at most one point. The same holds for $Y \in \alpha(X)$.

*Proof.* Suppose $Y_1 \neq Y_2$ were two points of $S$ on the orbit of $Y$. Both lie in $\omega(X)$, since $\omega(X)$ is invariant: if $\phi_{t_n}(X) \to Y$ then $\phi_{t_n + s}(X) \to \phi_s(Y)$ by continuity of the flow. Take disjoint subsegments $J_1 \ni Y_1$ and $J_2 \ni Y_2$ of $S$ and flow boxes around them from Lemma 1. Because $Y_1, Y_2 \in \omega(X)$, the trajectory of $X$ enters each flow box at arbitrarily large times, hence crosses $J_1$ and $J_2$ infinitely often. Choose crossings alternately, $a_1 \in J_1$, $b_1 \in J_2$, $a_2 \in J_1$, $b_2 \in J_2, \dots$, in increasing time. These points form a subsequence of the sequence of successive crossings of $S$ by the orbit of $X$, which Lemma 2 says is monotone along $S$; a subsequence of a monotone sequence is monotone. But this one alternates between two disjoint subsegments, which no monotone sequence can do. $\square$
:::

:::proof[Poincare-Bendixson, limit-set form]{provenance=adapted src="hirsch-smale-devaney-2013:§10.5, pp. 222-224"}
Let $\Lambda = \omega(X)$ be nonempty, closed, bounded and free of fixed points (the case $\Lambda = \alpha(X)$ follows by reversing time).

**Part 1: $\Lambda$ contains a closed orbit.** Pick $Y \in \Lambda$. The forward orbit of $Y$ stays in the compact set $\Lambda$, because $\Lambda$ is closed and invariant, so $\omega(Y)$ is nonempty: it is an intersection of a nested family of nonempty compact sets (:ref[]{to=found.compactness}). Moreover $\omega(Y) \subseteq \omega(X) = \Lambda$. Pick $Z \in \omega(Y)$. Then $f(Z) \neq 0$, since $\Lambda$ **contains no fixed point**, so there is a local section $S$ at $Z$, with a flow box $V$ as in Lemma 1.

Since $Z \in \omega(Y)$, there are times $t_n \to \infty$ with $\phi_{t_n}(Y) \to Z$, so $\phi_{t_n}(Y) \in V$ for all large $n$; by Lemma 1 each such point reaches $S$ after a time of modulus less than $\sigma$. So the orbit of $Y$ meets $S$ at two different times $s < r$. But $Y \in \omega(X)$, so Lemma 3 says the orbit of $Y$ meets $S$ at most once: therefore $\phi_r(Y) = \phi_s(Y)$, and by uniqueness $\phi_{r-s}(Y) = Y$ with $r - s > 0$. As $Y$ is not a fixed point, $Y$ lies on a closed orbit $\gamma \subseteq \Lambda$, of some least period $\tau > 0$.

**Part 2: $\Lambda = \gamma$.** It suffices to show $d(\phi_t(X),\gamma) \to 0$ as $t \to \infty$, since then every point of $\omega(X)$ is a limit of points at distance $\to 0$ from the compact set $\gamma$, hence lies in $\gamma$; the reverse inclusion is Part 1.

Fix $Y \in \gamma$, a local section $S$ at $Y$ and a flow box as in Lemma 1, with parameter $\epsilon > 0$ chosen so that every point of the box reaches $S$ within time $\epsilon$.

1. *A monotone sequence of crossings.* Since $Y \in \omega(X)$, the trajectory of $X$ enters the flow box at arbitrarily large times, so there are $t_0 < t_1 < \cdots \to \infty$ listing the successive times at which $\phi_t(X) \in S$ near $Y$. Put $X_n = \phi_{t_n}(X)$. By Lemma 2 the $X_n$ are monotone along $S$, and since $Y$ is a limit of them, $X_n \to Y$.
2. *The gaps are bounded.* Let $\tau$ be the period of $\gamma$, so $\phi_\tau(Y) = Y$. By continuity of the flow, for $X_n$ close enough to $Y$ the point $\phi_\tau(X_n)$ lies in the flow box, hence meets $S$ after a further time of modulus at most $\epsilon$. Therefore $t_{n+1} - t_n \le \tau + \epsilon$ for all large $n$.
3. *Uniform closeness.* Let $\beta > 0$. By **continuous dependence on initial conditions** (:ref[]{to=ode.continuous-dependence}) on the compact time interval $[-(\tau+\epsilon),\tau+\epsilon]$, there is $\delta > 0$ such that $|W - Y| < \delta$ implies $|\phi_s(W) - \phi_s(Y)| < \beta$ for all $|s| \le \tau+\epsilon$. Choose $n_0$ with $|X_n - Y| < \delta$ for $n \ge n_0$.
4. *Conclusion.* Let $t \ge t_{n_0}$ and pick $n \ge n_0$ with $t_n \le t \le t_{n+1}$, so $0 \le t - t_n \le \tau+\epsilon$ by step 2. Then
$$
d\bigl(\phi_t(X),\gamma\bigr) \;\le\; \bigl|\phi_{t-t_n}(X_n) - \phi_{t-t_n}(Y)\bigr| \;<\; \beta ,
$$
because $\phi_{t-t_n}(Y) \in \gamma$. As $\beta$ was arbitrary, $d(\phi_t(X),\gamma)\to0$. $\square$
:::

:::proof[The trapping-region form follows]{provenance=adapted src="strogatz-1994:§7.3, p. 203; hirsch-smale-devaney-2013:§10.1, Proposition (2), p. 215"}
Assume (1)-(4) and let $X$ be a point of the confined trajectory $C$.

1. *The forward orbit exists for all time and is bounded*, since it stays in the compact set $R$.
2. *$\omega(X)$ is nonempty and compact*: it is the intersection of the nested nonempty compact sets $\overline{\{\phi_t(X): t\ge T\}} \subseteq R$ (:ref[]{to=found.compactness}).
3. *$\omega(X) \subseteq R$*, because $R$ is closed and the forward orbit lies in it.
4. *$\omega(X)$ contains no fixed point*, by hypothesis (3).
5. By the limit-set form, $\omega(X)$ is a closed orbit $\gamma \subseteq R$. If $X \in \gamma$ then $C = \gamma$ is itself closed; otherwise Part 2 of the previous proof says $d(\phi_t(X),\gamma)\to0$, which is the spiralling alternative. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **Planarity.** Lemma 2 is the only place dimension two is used, through the Jordan curve theorem, and it is indispensable. In $\mathbb{R}^3$ a trajectory may be confined to a compact fixed-point-free region forever without approaching any closed orbit. The simplest witness is the linear flow on an invariant $2$-torus: embed the torus in $\mathbb R^3$ with angle coordinates $(\alpha,\beta)$ and let $\dot\alpha = 1$, $\dot\beta = \varrho$ with $\varrho$ irrational, extending the field smoothly off the torus. The torus is compact, invariant and carries no fixed point, every orbit on it is dense in it, and none is closed. Everything else in the proof works in any dimension.
  Aperiodic bounded motion in three dimensions is of course also what :ref[the Lorenz system]{to=dyn.lorenz-equations} displays, and that is the example Strogatz gives on p. 210; but it is not a witness for the sharper statement above, because the Lorenz flow has an equilibrium at the origin which lies on the attractor, so no bounded absorbing region of that flow is free of fixed points.
- **No fixed point in $\Lambda$.** Without it the conclusion is false: the limit set may be a fixed point together with one or more homoclinic orbits returning to it, which Hirsch, Smale and Devaney illustrate on pp. 224-225, or a cycle of heteroclinic connections joining several saddles, as on their p. 215. This is why trapping regions in practice are drawn as annuli, or as a region with the fixed point punctured out.
- **$R$ compact in the trapping-region form.** Compactness is what makes $\omega(X)$ nonempty in step 2, and it is boundedness that is doing the work, not closedness. On the closed but unbounded region $R = \{y \ge 1\}$ the system $\dot x = 1$, $\dot y = 0$ satisfies every other hypothesis — $R$ is closed, the field is smooth and nowhere zero, and the trajectory through $(0,1)$ never leaves $R$ — yet its $\omega$-limit set is empty and the system has no closed orbit anywhere.
- **Simple connectivity in Dulac's criterion.** It was used to put the inside of the orbit into $R$, and it cannot be dropped. In polar coordinates let $\dot r = r - 1$, $\dot\theta = 1$, that is
$$
\dot x = x - y - \frac{x}{r},\qquad \dot y = x + y - \frac{y}{r}, \qquad r = \sqrt{x^2+y^2}.
$$
Then $\nabla\cdot f = 2 - 1/r$, which is strictly positive on the annulus $R = \{0.6 < r < 2\}$ with the weight $g \equiv 1$; yet the unit circle $r = 1$ is a closed orbit lying in $R$. The annulus is not simply connected, and the disc inside the orbit leaves $R$.
- **Single-valued $V$ for gradient systems.** Step 1 fails otherwise. Taking $V = -\theta$, the polar angle, the "gradient system" $\dot x = -\nabla V$ is the rotation field $(-y,x)/r^2$, every orbit of which is closed.
- **Two definitions of "limit cycle".** We follow Strogatz: a limit cycle is an **isolated** closed orbit. Hirsch, Smale and Devaney instead call $\gamma$ a limit cycle when $\gamma \subseteq \omega(X)$ or $\gamma \subseteq \alpha(X)$ for some $X \notin \gamma$, that is, when some other trajectory spirals onto it. These are genuinely different conditions. Take the field given in polar coordinates by $\dot\theta = 1$ together with $\dot r = 0$ for $r \le 1$ and $\dot r = -(r-1)^2$ for $r > 1$, which is continuously differentiable (in Cartesian form it is $(-y,x) + a(r)(x,y)/r$ with $a(r) = -\max(r-1,0)^2$, smooth near the origin because $a$ vanishes there, and $C^1$ across $r=1$ because $a(1) = a'(1) = 0$). Outside the unit circle $r-1$ decays like $1/t$, so every such trajectory spirals onto $r=1$ and that circle is a limit cycle in the Hirsch-Smale-Devaney sense; but every circle of radius $r \le 1$ is also a closed orbit, so $r=1$ is not isolated and is **not** a limit cycle in Strogatz's sense. Both books agree on the statement that matters here, that a nonconstant trajectory confined in a compact fixed-point-free planar region approaches a closed orbit, and the theorem proved above does not depend on the choice. Where this unit says "limit cycle" without qualification, Strogatz's meaning is intended.
- **The test is one-way.** Dulac's criterion and the gradient test can only rule orbits out; failing to find $g$ proves nothing. Likewise Poincare-Bendixson produces a closed orbit but says nothing about how many there are or whether any is attracting.
:::

:::method[Deciding whether a planar system oscillates]{provenance=original}
**To rule closed orbits out**, in increasing order of effort:

1. **No fixed points?** By :ref[index theory]{to=dyn.index-theory} a closed orbit must enclose fixed points of index sum $+1$; a system with no fixed points in a simply connected region has no closed orbit there, and one whose only enclosed fixed point is a saddle has none either.
2. **Gradient?** Check whether $\partial f_1/\partial y = \partial f_2/\partial x$ on a simply connected domain. If it holds, $f = -\nabla V$ for a single-valued $V$, and there are no closed orbits. On a star-shaped domain a potential is given outright by
$$
V(p) \;=\; -\int_0^1 f(sp)\cdot p \ \mathrm d s ,
$$
or in practice: integrate $V_x = -f_1$ in $x$, then fix the remaining function of $y$ from $V_y = -f_2$.
3. **A Liapunov function?** See :ref[Lyapunov functions]{to=dyn.lyapunov-functions}; a strict one forbids closed orbits in its domain.
4. **Dulac.** Try $g = 1$ first; then $g = x^{a}y^{b}$ on a quadrant, $e^{ax}$ or $e^{ay}$. Compute $\nabla\cdot(gf)$ and look for one strict sign on a simply connected region.

**To prove a closed orbit exists:**

5. **Build a compact region $R$ with piecewise smooth boundary and check $f\cdot n < 0$ on every edge.** Useful boundary pieces: the coordinate axes or lines $x = \delta$, $y = \delta$ near them; horizontal or vertical lines far out, where one component of $f$ has a definite sign; and a **line of constant $x+y$**, which works whenever $\dot x + \dot y$ has a sign there, because $\frac{\mathrm d}{\mathrm dt}(x+y) = f_1 + f_2$. Sketching the nullclines $f_1 = 0$ and $f_2 = 0$ first shows which sign each component has in which region.
6. **Locate the fixed points in $R$.** If there are none, Poincare-Bendixson applies at once.
7. **If the only fixed point $p$ in $R$ is a repeller, puncture $R$ with a Lyapunov ellipse.** What is needed is a small open set $B \ni p$ on whose boundary the field points strictly **out of $B$**, for then no forward trajectory can enter $B$ and $R \setminus B$ is again compact and positively invariant, now with no fixed point in it. It is not enough that every trajectory *eventually* leaves $B$, and a round disc will not do in general: a repeller can have the field pointing into a circle around it over part of that circle. Build $B$ as a level set of a quadratic form instead. Let $J = Df(p)$ have both eigenvalues with positive real part, so that $-J$ has both in the left half-plane and
$$
P \;=\; \int_0^\infty e^{-J^{\mathsf T}s}\,e^{-Js}\,\mathrm d s
$$
converges; $P$ is symmetric positive definite, and integrating $\frac{\mathrm d}{\mathrm ds}\bigl(e^{-J^{\mathsf T}s}e^{-Js}\bigr)$ from $0$ to $\infty$ gives the **Lyapunov equation** $J^{\mathsf T}P + PJ = I$ (see :ref[Lyapunov functions]{to=dyn.lyapunov-functions}). Put $W(X) = (X-p)^{\mathsf T}P\,(X-p)$. Along the flow, with $U = X - p$ and $f(X) = JU + O(|U|^2)$,
$$
\dot W \;=\; U^{\mathsf T}\bigl(J^{\mathsf T}P + PJ\bigr)U + O(|U|^3) \;=\; |U|^2 + O(|U|^3),
$$
so $\dot W > 0$ on some punctured neighbourhood of $p$. Choose $c > 0$ small enough that $\{W \le c\}$ lies in that neighbourhood and inside $R$, and take $B = \{W < c\}$. On $\partial B$ the outward normal is parallel to $\nabla W$ and $f\cdot\nabla W = \dot W > 0$, so the field points strictly out of $B$. Then $R \setminus B$ contains a closed orbit.
8. **Report what has been proved.** The theorem gives existence, not uniqueness or stability; those need a Poincare map or :ref[a Hopf-bifurcation analysis]{to=dyn.hopf-bifurcation}.
:::

:::example[A trapping region for an autocatalytic reaction]{provenance=original}
Consider the two-species kinetic system (the Brusselator, with rate constants $a = 1$, $b = 3$)

$$
\dot x = 1 - 4x + x^2 y , \qquad \dot y = 3x - x^2 y , \qquad x,y > 0 .
$$

**Step 1: the fixed point.** Adding the two equations gives the identity used throughout,

$$
\frac{\mathrm d}{\mathrm dt}(x+y) \;=\; 1 - x .
$$

A fixed point needs $\dot x + \dot y = 0$, hence $x = 1$, and then $\dot y = 3 - y = 0$ gives $y = 3$. So $(1,3)$ is the only fixed point. Its Jacobian is

$$
J = \begin{pmatrix} -4 + 2xy & x^2 \\ 3 - 2xy & -x^2 \end{pmatrix}_{(1,3)} = \begin{pmatrix} 2 & 1\\ -3 & -1\end{pmatrix},
\qquad \operatorname{tr}J = 1,\quad \det J = 1 .
$$

Since $(\operatorname{tr}J)^2 - 4\det J = -3 < 0$ and $\operatorname{tr}J > 0$, the eigenvalues are $\tfrac12(1 \pm i\sqrt3)$: an **unstable spiral**, by :ref[the trace-determinant classification]{to=dyn.linear-planar-classification}.

**Step 2: the trapping region.** Let $Q$ be the quadrilateral with vertices

$$
\bigl(\tfrac18,0\bigr),\quad \bigl(\tfrac18,25\bigr),\quad (2,25),\quad (27,0),
$$

and check the four edges in turn.

| edge | field there | inward? |
|---|---|---|
| $x = \tfrac18$, $0\le y\le 25$ | $\dot x = 1 - \tfrac12 + \tfrac{y}{64} \ge \tfrac12$ | yes, $\dot x>0$ points right |
| $y = 0$, $\tfrac18\le x\le 27$ | $\dot y = 3x \ge \tfrac38$ | yes, $\dot y>0$ points up |
| $y = 25$, $\tfrac18 \le x \le 2$ | $\dot y = 3x - 25x^2 = x(3-25x) \le -\tfrac{1}{64}$ | yes, $\dot y<0$ points down |
| $x+y = 27$, $2 \le x \le 27$ | $\tfrac{\mathrm d}{\mathrm dt}(x+y) = 1 - x \le -1$ | yes, $x+y$ decreases |

The worst case on the third edge is $x = \tfrac18$, where $x(3-25x) = \tfrac18\bigl(3-\tfrac{25}{8}\bigr) = -\tfrac{1}{64} < 0$, and on the fourth edge $x \ge 2$ throughout, so $1 - x \le -1$. Every edge is entered strictly, so $Q$ is **positively invariant**. (A numerical sweep of 20001 points per edge returns the minimum inward components $\tfrac12$, $\tfrac38$, $\tfrac1{64}$ and $1$, matching the table.)

**Step 3: puncture with a Lyapunov ellipse.** The fixed point $(1,3)$ lies inside $Q$, so hypothesis (3) fails as it stands, and it must be cut out by a set the field cannot be entering. A round disc will not serve here: at the point $(1, 3+\rho)$ of the circle of radius $\rho$ about $(1,3)$ the field is $(\rho,-\rho)$, whose component along the outward radius $(0,1)$ is $-\rho < 0$, so on every such circle there are points where the field points **inward**. Step 7 of the method supplies the right set. Writing $u = x-1$, $v = y-3$, the Lyapunov equation $J^{\mathsf T}P + PJ = I$ for $J = \begin{pmatrix}2&1\\-3&-1\end{pmatrix}$ has the unique solution $P = \tfrac12\begin{pmatrix}11 & 7\\ 7& 6\end{pmatrix}$, so with
$$
W \;=\; 2\,(u,v)P(u,v)^{\mathsf T} \;=\; 11u^2 + 14uv + 6v^2
$$
(positive definite: $11 > 0$ and $11\cdot6 - 7^2 = 17 > 0$, with eigenvalues $\lambda_\pm = \tfrac12(17\pm\sqrt{221})$, so $\lambda_- = 1.0669\ldots$) one computes exactly, substituting $\dot u = 2u+v+3u^2+2uv+u^2v$ and $\dot v = -3u-v-3u^2-2uv-u^2v$,
$$
\dot W \;=\; 2(u^2+v^2) \;+\; \bigl(24u^3 + 22u^2v + 4uv^2\bigr) \;+\; \bigl(8u^3v + 2u^2v^2\bigr).
$$
Each monomial of degree $d$ is at most $|U|^{d}$ in modulus, where $|U|^2 = u^2+v^2$, so
$$
\dot W \;\ge\; |U|^2\bigl(2 - 50|U| - 10|U|^2\bigr),
$$
the coefficient sums being $24+22+4 = 50$ and $8+2 = 10$. This is positive whenever $|U| \le \tfrac1{30}$, since $2 - \tfrac{50}{30} - \tfrac{10}{900} = 0.3222\ldots > 0$. Now $W \le c$ forces $|U| \le \sqrt{c/\lambda_-}$, so $c = 10^{-3}$ gives $|U| \le 0.030615 < \tfrac1{30}$. Take
$$
B \;=\; \{\,11u^2+14uv+6v^2 < 10^{-3}\,\}.
$$
Then $\dot W > 0$ on $\partial B$ — a direct numerical minimisation over $\partial B$ gives $\min \dot W = 1.139\times10^{-4}$, comfortably above zero and consistent with the crude bound — so the field points strictly out of $B$ at every boundary point. The ellipse is tiny, $|x-1| \le 0.0188$ and $|y-3| \le 0.0255$, hence well inside $Q$.

The set $Q^\ast = Q \setminus B$ is therefore compact, positively invariant (nothing leaves $Q$ across $\partial Q$ by step 2, and nothing enters $B$ across $\partial B$) and contains **no** fixed point. By the Poincare-Bendixson theorem, $Q^\ast$ contains a closed orbit.

**Step 4: what it looks like.** Integrating the system numerically from $(1.1,3)$ with absolute and relative tolerances $10^{-14}$ and $10^{-12}$, the solution settles onto a cycle on which successive upward crossings of the line $x = 1$ are separated by

$$
T \;=\; 7.156920\ \ (\text{six decimal places; the five successive gaps agree to } 10^{-12}),
$$

and the cycle occupies $0.3706 \le x \le 3.7518$, $0.8523 \le y \le 4.7221$ — comfortably inside $Q$, as it must be. The existence of the orbit was proved before any of these numbers were computed; the numbers only say where it is.
:::

:::example[Dulac rules out oscillation in a competition model]{provenance=original}
Two competing populations obey

$$
\dot x = x\,(4 - x - 3y), \qquad \dot y = y\,(3 - 2x - y), \qquad x,y>0 .
$$

Take $R$ to be the open first quadrant, which is simply connected, and the weight $g(x,y) = 1/(xy)$, continuously differentiable and nonzero there. Then

$$
g\dot x = \frac{4-x-3y}{y}, \qquad g\dot y = \frac{3-2x-y}{x},
$$

so

$$
\nabla\cdot(g f) = \frac{\partial}{\partial x}\!\left(\frac{4-x-3y}{y}\right) + \frac{\partial}{\partial y}\!\left(\frac{3-2x-y}{x}\right)
= -\frac1y - \frac1x \;<\; 0
$$

throughout the quadrant. By Dulac's criterion **there is no closed orbit in the open first quadrant**. (The interior fixed point is $(1,1)$, where the Jacobian is $\begin{pmatrix}-1 & -3\\ -2 & -1\end{pmatrix}$ with $\det = -5 < 0$: a saddle. Index theory gives the same conclusion for any orbit enclosing only that point, but Dulac's computation excludes every closed orbit in the quadrant at once.)
:::

:::example[A gradient system]{provenance=original}
For

$$
\dot x = 3x^2 - 3y, \qquad \dot y = -3x + 3y^2 ,
$$

we have $\partial f_1/\partial y = -3 = \partial f_2/\partial x$, so on the plane, which is simply connected, the field is a gradient:

$$
f = -\nabla V, \qquad V(x,y) = -x^3 + 3xy - y^3 ,
$$

as one checks by differentiating. Hence the system has **no closed orbits**, although it has two fixed points, $(0,0)$ and $(1,1)$ (solve $y = x^2$ and $x = y^2$). No trapping-region argument is needed and no index is computed.
:::

:::application[Chemical clocks, and why chaos needs a third dimension]{provenance=adapted src="strogatz-1994:§7.3, No Chaos in the Phase Plane, p. 210; hirsch-smale-devaney-2013:§10.7, pp. 228-229"}
**Self-sustained oscillation.** A system that returns to the same cycle after being disturbed, with an amplitude and period set by the equations rather than by the initial data, is a limit cycle; a closed orbit that is not isolated will not do, because a perturbation moves the system permanently to a neighbouring orbit. Poincare-Bendixson is the standard way to prove that a two-variable model has such a cycle without solving it: build a trapping region from the nullclines, check that the single interior fixed point is a repeller, puncture, conclude. This is how oscillation is established in models of glycolysis, in the two-variable reductions of the Belousov-Zhabotinsky and chlorine dioxide-iodine-malonic acid reactions discussed by Hirsch, Smale and Devaney, and in two-variable caricatures of pacemaker cells. The bonus in applications is that the construction gives **where** the oscillation lives: in the worked example the orbit was confined to a specific quadrilateral before any integration was performed, which is the kind of bound a numerical study cannot supply by itself.

**A sharp limit on two-variable models.** The theorem also says what a planar model can never do. Suppose the system has only **finitely many** equilibria, and consider a trajectory that stays in a bounded set. Its $\omega$-limit set is then nonempty, closed and bounded, and it is either a closed orbit, by the theorem proved above, or it contains an equilibrium; in the latter case Hirsch, Smale and Devaney record (p. 215) that such a limit set is made up of equilibria together with the orbits joining them, so the trajectory converges to a fixed point, to a homoclinic loop, or to a cycle of heteroclinic connections. The hypothesis of finitely many equilibria is needed: a planar system whose fixed-point set is a whole curve can have a bounded trajectory whose limit set is an arc of that curve, which is none of the three. With it, there is no room for aperiodic bounded motion that settles to nothing. So no two-variable deterministic model, however nonlinear, can produce the irregular, sensitively dependent time series that turbulence, chemical chaos and simple nonlinear circuits display. Three dimensions are the minimum, and :ref[the Lorenz equations]{to=dyn.lorenz-equations} are the standard demonstration that three suffice. When a planar model of a real system fails to reproduce observed irregularity, this theorem says the fault is structural: another degree of freedom, a delay, forcing or noise must be added, and no amount of tuning the two-variable model will do instead.
:::
