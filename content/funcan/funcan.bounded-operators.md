---
id: funcan.bounded-operators
title: Bounded linear operators
kind: definition
level: core
summary: Defines the operator norm, proves that a linear map between normed spaces is continuous exactly when it is bounded, collects the algebra of the norm (submultiplicativity, completeness of $\mathcal{B}(X,Y)$, extension from a dense domain), and computes the norm of the Volterra integral operator exactly.
prereqs: [funcan.normed-banach-spaces, funcan.hilbert-spaces, funcan.orthonormal-bases, measure.lp-spaces, ode.sturm-liouville-theory]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§2.7, pp. 91–101: Def. 2.7-1 (bounded operator) and the operator norm (2), pp. 91–92; Lemma 2.7-2 (the supremum over the unit sphere, and that $\\|\\cdot\\|$ is a norm), pp. 92–93; Examples 2.7-3 to 2.7-7 (identity, zero, differentiation, integral operator with continuous kernel, matrix), pp. 93–95; Thm 2.7-8 (finite dimension), p. 96; Thm 2.7-9 (continuity and boundedness, and continuity at one point), pp. 96–98; Cor. 2.7-10 (closed null space) and the submultiplicative bound (7), p. 98; Thm 2.7-11 (bounded linear extension), pp. 100–101"
    pages: "91-101"
    role: the definition, the three equivalent formulas for the norm, the equivalence of boundedness and continuity and its proof route, the finite-dimensional and differentiation examples, and the extension theorem
  - work: stakgold-holst-2011
    loc: "§5.1, pp. 299–306: the definition of a bounded transformation and the two formulas (5.1.2) for $\\|A\\|$, p. 300, with the recipe for proving that a number *is* the norm; Example 4 (multiplication by $x$ on $L_2(0,1)$, where the supremum is not attained), p. 303; Example 5 (multiplication by $1/x$, unbounded on a dense domain), p. 304; Example 6 and the bound (5.1.9) for a Hilbert-Schmidt kernel, p. 304; Example 7 (the operator $u \\mapsto \\int_0^x u$ and its norm $2/\\pi$), p. 305; Example 9 (right shift), pp. 305–306; Exercise 5.1.3 (Holmgren kernels), p. 306; Exercise 5.1.4 (the orthonormal family $\\sqrt2\\cos((2n-1)\\pi x/2)$ and the route to $\\|A\\| = 2/\\pi$), parts (a)–(c) on pp. 306–307"
    pages: "299-307"
    role: the Hilbert-Schmidt bound for integral operators, the multiplication operators that show the supremum need not be attained, the model for both worked examples — Example 4 for the multiplication operator and Example 7 with Exercise 5.1.4 for the Volterra operator, including the adapted orthonormal family and the value $2/\\pi$ — and the criterion for proving a number is the operator norm
  - work: hassani-2013
    loc: "§17.2, pp. 513–516: Def. 17.2.2 (operator norm, bounded operator, $\\mathcal{B}(H_1,H_2)$) and the equivalent forms (17.3), pp. 513–514; the inequality (17.4) and Prop. 17.2.4 (bounded operators are continuous), p. 514; Example 17.2.6 ($\\|f_x\\| = \\|x\\|$ for the functional $f_x(y) = \\langle x\\mid y\\rangle$), p. 515; Example 17.2.7 ($d/dx$ unbounded on $L^2(a,b)$), p. 515; Prop. 17.2.8 with (17.5), $\\|ST\\| \\le \\|S\\|\\,\\|T\\|$ and $\\|T^n\\| \\le \\|T\\|^n$, pp. 515–516"
    pages: "513-516"
    role: the Hilbert-space phrasing of the definition, the submultiplicative inequality and its proof route, and the explicit unbounded derivative on $L^2(a,b)$
  - work: reed-simon-1980
    loc: "§III.1, Example 4 (the operator norm on $\\mathcal{B}(X,Y)$), p. 69, and Thm III.2 ($\\mathcal{B}(X,Y)$ is a Banach space when $Y$ is complete), p. 70; §VI.1, the kernel and range of a bounded operator and the remark that the range need not be closed, p. 185"
    pages: "69-70, 185"
    role: the completeness of $\\mathcal{B}(X,Y)$ and its proof route, and the closedness of the kernel against the non-closedness of the range
  - work: evans-2010
    loc: "Appendix D.3a, pp. 676–677: the definition of a linear operator, its range and null space, the definition of boundedness as $\\|A\\| = \\sup\\{\\|Au\\|_Y : \\|u\\|_X \\le 1\\} < \\infty$, and the remark that a bounded operator is continuous, p. 676"
    pages: "676-677"
    role: the real-Banach-space phrasing of the definition used throughout partial differential equations, and the unit-ball form of the norm
---

:::definition[Bounded operator and operator norm]{provenance=adapted src="kreyszig-1978:§2.7, Def. 2.7-1 and (2), pp. 91–92; evans-2010:Appendix D.3a, p. 676; hassani-2013:Def. 17.2.2 and (17.3), pp. 513–514"}
Let $X$ and $Y$ be normed spaces over the same field ($\mathbb{R}$ or $\mathbb{C}$) and let $T : \mathcal{D}(T) \to Y$ be linear on a subspace $\mathcal{D}(T) \subseteq X$. Both norms are written $\|\cdot\|$; which one is meant is fixed by what stands inside.

$T$ is **bounded** if there is a real $c$ with

$$
\|Tx\| \le c\,\|x\| \qquad \text{for every } x \in \mathcal{D}(T).
$$

Equivalently, $T$ carries bounded subsets of $\mathcal{D}(T)$ to bounded subsets of $Y$; this is the reason for the word, and it is *not* the calculus sense, in which a bounded function has bounded range. A non-zero bounded operator never has bounded range, precisely because its domain is a *subspace*: if $Tx \neq 0$ then $\lambda x \in \mathcal{D}(T)$ for every scalar $\lambda$ and $\|T(\lambda x)\| = |\lambda|\,\|Tx\| \to \infty$.

The smallest admissible $c$ is the **operator norm**

$$
\|T\| \;=\; \sup_{\substack{x \in \mathcal{D}(T) \\ x \ne 0}} \frac{\|Tx\|}{\|x\|}
\;=\; \sup_{\substack{x \in \mathcal{D}(T)\\ \|x\| = 1}} \|Tx\|
\;=\; \sup_{\substack{x \in \mathcal{D}(T)\\ \|x\| \le 1}} \|Tx\| ,
$$

with $\|T\| = 0$ when $\mathcal{D}(T) = \{0\}$. The three expressions agree by homogeneity (part 1 of the statement below). By construction

$$
\|Tx\| \le \|T\|\,\|x\| \qquad (x \in \mathcal{D}(T)),
$$

and this inequality is the one actually used in computations.

When $\mathcal{D}(T) = X$ we write $T \in \mathcal{B}(X,Y)$, where $\mathcal{B}(X,Y)$ collects every bounded linear $X \to Y$; and $\mathcal{B}(X) = \mathcal{B}(X,X)$. Following :cite[Evans]{work=evans-2010 loc="Appendix D.3a, p. 676"}, the **null space** is $N(T) = \{x : Tx = 0\}$ and the **range** is $R(T) = \{Tx : x \in X\}$; both are subspaces.

The supremum defining $\|T\|$ **need not be attained**: :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.1, Example 4, p. 303"} give multiplication by $x$ on $L^2(0,1)$, for which $\|A\| = 1$ but $\|Au\| < \|u\|$ for every $u \ne 0$. Accordingly, to prove that a number $m$ *is* $\|A\|$ one shows both that $\|Au\| \le m\|u\|$ for all $u$ and that some sequence of unit vectors $u_n$ has $\|Au_n\| \to m$.
:::

:::statement[The operator norm and continuity]{provenance=adapted src="kreyszig-1978:Lemma 2.7-2, pp. 92–93, Thm 2.7-8, p. 96, Thm 2.7-9, pp. 96–98, Cor. 2.7-10 and (7), p. 98, Thm 2.7-11, pp. 100–101; hassani-2013:Prop. 17.2.8 and (17.5), pp. 515–516; reed-simon-1980:Thm III.2, p. 70"}
Let $X$, $Y$, $Z$ be normed spaces and $T : \mathcal{D}(T) \to Y$ linear, $\mathcal{D}(T) \subseteq X$.

1. **The three formulas agree, and $\|\cdot\|$ is a norm.** The quotient, unit-sphere and unit-ball suprema above are equal, and $T \mapsto \|T\|$ is a norm on $\mathcal{B}(X,Y)$, which is therefore a normed space.
2. **Boundedness equals continuity.** $T$ is bounded exactly when it is continuous; and continuity at one single point of $\mathcal{D}(T)$ already forces continuity everywhere on $\mathcal{D}(T)$.
3. **Consequences.** If $T$ is bounded then $x_n \to x$ in $\mathcal{D}(T)$ implies $Tx_n \to Tx$. If moreover $\mathcal{D}(T) = X$, that is $T \in \mathcal{B}(X,Y)$, the null space $N(T)$ is closed in $X$; on a proper domain it need not be, as the remark below shows. The range need not be closed even for $T \in \mathcal{B}(X,Y)$ (:cite[Reed and Simon]{work=reed-simon-1980 loc="§VI.1, p. 185"}).
4. **Finite dimension.** If $\dim X < \infty$, every linear operator on $X$ is bounded.
5. **Submultiplicativity.** For $S \in \mathcal{B}(Y,Z)$ and $T \in \mathcal{B}(X,Y)$, $ST \in \mathcal{B}(X,Z)$ with $\|ST\| \le \|S\|\,\|T\|$; in particular $\|T^n\| \le \|T\|^n$ for $T \in \mathcal{B}(X)$ and $n \in \mathbb{N}$.
6. **Completeness.** If $Y$ is a Banach space, so is $\mathcal{B}(X,Y)$, for any normed $X$. (Completeness of $X$ is not required.)
7. **Extension from a dense domain.** If $Y$ is a Banach space, a bounded linear $T : \mathcal{D}(T) \to Y$ has a unique bounded linear extension $\tilde T : \overline{\mathcal{D}(T)} \to Y$, and $\|\tilde T\| = \|T\|$. In particular an operator defined on a dense subspace of $X$ extends to all of $X$ with the same norm.
:::

:::note[Examples to keep in mind]{provenance=adapted src="kreyszig-1978:Examples 2.7-3 to 2.7-7, pp. 93–95; stakgold-holst-2011:§5.1, Examples 4, 5, 6 and 9 with (5.1.9), pp. 303–306; hassani-2013:Example 17.2.7, p. 515"}
- **Identity and zero.** $\|I\| = 1$ on any $X \ne \{0\}$, and $\|0\| = 0$.
- **Matrices.** A real $r \times n$ matrix acting on $\mathbb{R}^n$ with the Euclidean norm is bounded, and :cite[Kreyszig]{work=kreyszig-1978 loc="Example 2.7-7, p. 95"} gets $\|T\| \le \bigl(\sum_{j,k} a_{jk}^2\bigr)^{1/2}$ from the Cauchy-Schwarz inequality. The bound is usually not sharp; see :ref[matrix norms and condition numbers]{to=linalg.matrix-norms-conditioning}.
- **Integral operator, continuous kernel.** On $C[0,1]$ with the supremum norm, $(Tu)(t) = \int_0^1 k(t,\tau)u(\tau)\,d\tau$ with $k$ continuous on the square satisfies $\|T\| \le \max|k|$.
- **Integral operator, square-integrable kernel.** On $L^2(a,b)$, if $\int_a^b\!\!\int_a^b |k(x,y)|^2dx\,dy < \infty$ — a **Hilbert-Schmidt kernel** — then Cauchy-Schwarz applied in the $y$ variable gives
  $$
  \|K\| \;\le\; \Bigl[\int_a^b\!\!\int_a^b |k(x,y)|^2\,dx\,dy\Bigr]^{1/2} ,
  $$
  which is :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§5.1, (5.1.9), p. 304"} estimate (5.1.9). Their Exercise 5.1.3 notes that *Holmgren* kernels, satisfying $\max_z \int\!\!\int |k(x,y)k(x,z)|\,dx\,dy = M < \infty$, are also bounded, with $\|K\| \le M^{1/2}$, and that on $L^2(-\infty,\infty)$ a convolution kernel $k(x,y) = h(x-y)$ with $h$ integrable is Holmgren without being Hilbert-Schmidt. Compactness of these operators is a separate matter, taken up in :ref[compact operators]{to=funcan.compact-operators} and :ref[Hilbert-Schmidt theory]{to=green.hilbert-schmidt}.
- **Right shift.** On a separable Hilbert space with orthonormal basis $(e_j)$, $Ae_j = e_{j+1}$ gives $\|Au\| = \|u\|$, so $\|A\| = 1$; the range is the closed subspace $\{u : (u,e_1) = 0\}$, which is not dense.
- **Differentiation is unbounded.** On the polynomials in $C[0,1]$, $x_n(t) = t^n$ has $\|x_n\| = 1$ and $\|x_n'\| = n$. On $L^2(a,b)$, :cite[Hassani]{work=hassani-2013 loc="Example 17.2.7, p. 515"} uses $f(x) = \sqrt{x-a}$, which lies in $L^2$ while $f' = \tfrac12 (x-a)^{-1/2}$ does not. Unbounded operators are the subject of :ref[unbounded and closed operators]{to=funcan.unbounded-operators}.
- **Unbounded on a dense domain.** Multiplication by $1/x$ on $L^2(0,1)$ is defined on the dense subspace of $u$ with $u/x \in L^2$, and the unit vectors supported on $(\varepsilon,1)$ show it is unbounded there. So part 7 above really does need boundedness: a merely densely defined linear operator has no continuous extension.
:::

:::idea{provenance=original}
Everything here rests on one observation: a linear map is determined by what it does to the unit sphere, because $T(\lambda x) = \lambda\,Tx$ transports the behaviour at one scale to every other scale.

That is why the three formulas for $\|T\|$ agree, and it is why continuity at a single point spreads to the whole domain: a linear map commits the same error near every point that it commits near $0$, since $Tx - Tx_0 = T(x-x_0)$. Continuity at $0$ gives a $\delta$-ball mapped into an $\varepsilon$-ball; scaling that one statement by $\|y\|/\delta$ turns it into the inequality $\|Ty\| \le (\varepsilon/\delta)\|y\|$ valid for every $y$. The converse direction is the displayed inequality $\|Tx\| \le \|T\|\,\|x\|$ read as a Lipschitz estimate with constant $\|T\|$.

Completeness of $\mathcal{B}(X,Y)$ and the extension theorem are the same argument twice: a Cauchy sequence in the operator norm is Cauchy at each point $x$ uniformly in $\|x\| \le 1$, so the pointwise limits exist in the complete space $Y$ and assemble into a linear map, and uniformity turns pointwise convergence into norm convergence.
:::

:::proof[Parts 1 to 5]{provenance=adapted src="kreyszig-1978:Lemma 2.7-2, pp. 92–93, Thm 2.7-8, p. 96, Thm 2.7-9, pp. 96–98, Cor. 2.7-10, p. 98; hassani-2013:Prop. 17.2.8, pp. 515–516"}
**Part 1.** For $x \ne 0$ put $y = x/\|x\|$, so $\|y\| = 1$ and, by homogeneity of $T$ and of the norm, $\|Tx\|/\|x\| = \|Ty\|$. As $x$ runs over the non-zero vectors of $\mathcal{D}(T)$, $y$ runs over its unit vectors, so the quotient and unit-sphere suprema are equal. The unit-ball supremum is at least the unit-sphere one, since the sphere sits inside the ball; and it is at most the unit-sphere one, because for $0 < \|z\| \le 1$ the unit vector $w = z/\|z\|$ satisfies $\|Tz\| = \|z\|\,\|Tw\| \le \|Tw\|$, while $z = 0$ contributes $\|T0\| = 0$. For the norm axioms: $\|T\| \ge 0$ always; $\|T\| = 0$ forces $Tx = 0$ for all $x$, that is $T = 0$; and taking suprema over the unit sphere in $\|(\alpha T)x\| = |\alpha|\,\|Tx\|$ and in $\|(S+T)x\| \le \|Sx\| + \|Tx\|$ gives homogeneity and the triangle inequality.

**Part 2, bounded $\Rightarrow$ continuous.** Let $x_0 \in \mathcal{D}(T)$ and $\varepsilon > 0$. If $T = 0$ there is nothing to prove, so let $\|T\| > 0$ and set $\delta = \varepsilon/\|T\|$. For $\|x - x_0\| < \delta$, linearity and the displayed inequality give
$$
\|Tx - Tx_0\| = \|T(x-x_0)\| \le \|T\|\,\|x - x_0\| < \|T\|\,\delta = \varepsilon .
$$
**Boundedness is what supplies the single Lipschitz constant** valid at every $x_0$ at once.

**Part 2, continuous at one point $\Rightarrow$ bounded.** Suppose $T$ is continuous at some $x_0 \in \mathcal{D}(T)$. Take $\varepsilon = 1$ and get $\delta > 0$ with $\|Tx - Tx_0\| \le 1$ whenever $x \in \mathcal{D}(T)$ and $\|x - x_0\| \le \delta$. Given any $y \in \mathcal{D}(T)$ with $y \ne 0$, the vector $x = x_0 + \delta y/\|y\|$ lies in $\mathcal{D}(T)$ (a subspace) and satisfies $\|x - x_0\| = \delta$. Hence, using linearity twice,
$$
1 \;\ge\; \|Tx - Tx_0\| \;=\; \Bigl\|T\Bigl(\frac{\delta}{\|y\|}y\Bigr)\Bigr\| \;=\; \frac{\delta}{\|y\|}\,\|Ty\| ,
$$
so $\|Ty\| \le \delta^{-1}\|y\|$, and $T$ is bounded with $\|T\| \le 1/\delta$. **Linearity is used twice here** — once to say that $x$ is again in the domain, and once to pull the scalar out of $T$ — and the implication is false for non-linear maps. Combining the two halves also proves the second sentence of part 2: continuity at one point gives boundedness, which gives continuity everywhere.

**Part 3.** If $x_n \to x$ with all terms and the limit in $\mathcal{D}(T)$, then $\|Tx_n - Tx\| \le \|T\|\,\|x_n - x\| \to 0$. For the null space let $T \in \mathcal{B}(X,Y)$, let $x \in \overline{N(T)}$ and choose $x_n \in N(T)$ with $x_n \to x$. **Here $\mathcal{D}(T) = X$ is what is used**: it places the limit $x$ in the domain, so $Tx$ is defined and the first sentence applies, giving $Tx = \lim_n Tx_n = 0$. Hence $x \in N(T)$ and $N(T)$ is closed.

**Part 4.** Let $\{e_1,\dots,e_n\}$ be a basis of $X$ and $x = \sum_j \xi_j e_j$. Then $\|Tx\| \le \sum_j |\xi_j|\,\|Te_j\| \le \bigl(\max_j \|Te_j\|\bigr)\sum_j|\xi_j|$. On a finite-dimensional space the map $x \mapsto \sum_j|\xi_j|$ is a norm, and all norms on a finite-dimensional space are equivalent (:ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}), so $\sum_j |\xi_j| \le \gamma\|x\|$ for some $\gamma$ independent of $x$. Hence $\|Tx\| \le \gamma\bigl(\max_j\|Te_j\|\bigr)\|x\|$. **Equivalence of norms is exactly the finite-dimensional input**, and it is what fails in infinite dimensions.

**Part 5.** For $\|x\| \le 1$, $\|STx\| \le \|S\|\,\|Tx\| \le \|S\|\,\|T\|$; take the supremum over the unit ball. Iterating gives $\|T^n\| \le \|T\|^n$. $\square$
:::

:::proof[Parts 6 and 7: completeness and extension]{provenance=adapted src="reed-simon-1980:Thm III.2, p. 70; kreyszig-1978:Thm 2.7-11, pp. 100–101"}
**Part 6.** Let $Y$ be complete and let $(T_n)$ be Cauchy in $\mathcal{B}(X,Y)$.

*Step 1: a candidate limit.* For each fixed $x$, $\|T_nx - T_mx\| \le \|T_n - T_m\|\,\|x\|$, so $(T_nx)$ is Cauchy in $Y$ and converges, **because $Y$ is complete**; call the limit $Tx$. Linearity of $T$ follows by passing to the limit in $T_n(\alpha x + \beta y) = \alpha T_nx + \beta T_ny$, the algebraic operations being continuous.

*Step 2: $T$ is bounded.* A Cauchy sequence is bounded, say $\|T_n\| \le M$ for all $n$. Then $\|Tx\| = \lim_n\|T_nx\| \le M\|x\|$, using continuity of the norm.

*Step 3: convergence in the operator norm, not merely pointwise.* Let $\varepsilon > 0$ and pick $N$ with $\|T_n - T_m\| \le \varepsilon$ for $n,m \ge N$. For $\|x\| \le 1$ and $n \ge N$, $\|T_nx - T_mx\| \le \varepsilon$ for every $m \ge N$; letting $m \to \infty$ gives $\|T_nx - Tx\| \le \varepsilon$. The bound is uniform in $x$, so $\|T_n - T\| \le \varepsilon$. **The uniformity is the whole point**: pointwise limits of bounded operators need not converge in norm.

**Part 7.** Let $T : \mathcal{D}(T) \to Y$ be bounded and $Y$ complete, and let $x \in \overline{\mathcal{D}(T)}$.

*Step 1: define $\tilde Tx$.* Choose $x_n \in \mathcal{D}(T)$ with $x_n \to x$. Then $\|Tx_n - Tx_m\| \le \|T\|\,\|x_n - x_m\|$, so $(Tx_n)$ is Cauchy and converges in $Y$; set $\tilde Tx = \lim_n Tx_n$.

*Step 2: the value does not depend on the sequence.* If also $z_n \to x$ with $z_n \in \mathcal{D}(T)$, interleave the two sequences into $x_1, z_1, x_2, z_2,\dots$, which still converges to $x$. By step 1 its image converges, and the images of the two subsequences, being subsequences of a convergent sequence, have that same limit.

*Step 3: $\tilde T$ extends $T$, is linear, and is bounded.* Taking the constant sequence $x_n = x$ for $x \in \mathcal{D}(T)$ gives $\tilde Tx = Tx$. Linearity passes to the limit as in part 6. From $\|Tx_n\| \le \|T\|\,\|x_n\|$ and continuity of both norms, $\|\tilde Tx\| \le \|T\|\,\|x\|$, so $\|\tilde T\| \le \|T\|$; and $\|\tilde T\| \ge \|T\|$ because the supremum defining $\|\tilde T\|$ runs over a larger set. Hence $\|\tilde T\| = \|T\|$.

*Step 4: uniqueness.* Two continuous maps agreeing on a dense subset of $\overline{\mathcal{D}(T)}$ agree everywhere on it. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Linearity is indispensable in part 2.** For a non-linear map, continuity at a point says nothing about the rest of the domain, and "bounded" reverts to its calculus meaning. Take $f(t) = \sqrt{|t|}$ on $\mathbb{R}$: it is continuous everywhere, yet no constant $c$ satisfies $|f(t)| \le c|t|$ for all $t$, since $\sqrt{|t|}\,/\,|t| \to \infty$ as $t \to 0$. Conversely $f(t) = t^2$ obeys no such inequality either, this time because of large $t$. Only for linear maps do "continuous", "Lipschitz" and "bounded on the unit ball" collapse into one condition.
- **Completeness of $Y$, not of $X$, is what parts 6 and 7 need.** In both proofs the only limit taken in a possibly incomplete space is a limit of images, and that is where $Y$ must be complete. This is why $\mathcal{B}(X,\mathbb{C})$ — the dual space of :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach} — is a Banach space for every normed $X$ whatever.
- **Density, in part 7, is what makes the extension unique.** Without it there are many bounded extensions; producing one at all on a non-dense domain, with the same norm and over a general Banach space, is the content of :ref[the Hahn-Banach theorem]{to=funcan.hahn-banach}, which is a genuinely harder statement.
- **Part 4 fails without finite dimension**, and the failure is not marginal: differentiation is unbounded on every reasonable infinite-dimensional function space, and multiplication by $1/x$ is unbounded on its natural dense domain in $L^2(0,1)$. The underlying reason is that the unit ball of an infinite-dimensional normed space is not compact.
- **The null space is closed but the range need not be.** The null space is the preimage of the closed set $\{0\}$ under a continuous map; the range is a forward image, and forward images of closed sets under continuous maps are not closed in general. The operator $(Tu)_j = u_j/j$ on $\ell^2$ is bounded with dense, non-closed range: $(1/j)_j$ is not of the form $(u_j/j)_j$ with $u \in \ell^2$, since that would need $u_j = 1$ for all $j$. Closedness of the null space, on the other hand, needs the domain to be all of $X$ (or at least closed), because the proof evaluates $T$ at a limit of points of $N(T)$. On the subspace $\mathcal{D}(T) \subset \ell^2$ of finitely supported sequences, the functional $Tu = \sum_j u_j/j$ is bounded, with $|Tu| \le (\pi/\sqrt6)\|u\|$ by Cauchy-Schwarz, and its null space is dense in a closed hyperplane of $\ell^2$ without being equal to it, so $N(T)$ is not closed in $\ell^2$. (:cite[Kreyszig]{work=kreyszig-1978 loc="Cor. 2.7-10(b), p. 98"} states the closedness for an arbitrary domain $\mathcal{D}(T)$; we state it for $T \in \mathcal{B}(X,Y)$, which is the case he uses everywhere afterwards.) The consequences of a *closed* range are drawn in :ref[the uniform boundedness and open mapping theorems]{to=funcan.uniform-boundedness-open-mapping}.
- **Submultiplicativity is an inequality, not an identity.** On $\mathbb{C}^2$, the matrices $S = \begin{pmatrix}0&0\\0&1\end{pmatrix}$ and $T = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ have $\|S\| = \|T\| = 1$ while $ST = 0$, so the inequality can be as slack as it gets. The order matters: the same two matrices give $TS = T$, with $\|TS\| = 1 = \|T\|\,\|S\|$, so equality occurs too. Equality in $\|ST\| \le \|S\|\,\|T\|$ requires the near-maximisers of $T$ to be near-maximisers of $S$ as well.
:::

:::method[Finding an operator norm]{provenance=original}
To evaluate, or at least bracket, $\|T\|$:

1. **Get an upper bound** by estimating $\|Tx\|$ with the inequality natural to the space: Cauchy-Schwarz for integral and matrix operators on $L^2$ and $\mathbb{R}^n$, the triangle inequality and $\sup|k|$ for the supremum norm, Hölder's inequality on $L^p$ (:ref[$L^p$ spaces]{to=measure.lp-spaces}). Any $c$ with $\|Tx\| \le c\|x\|$ for all $x$ gives $\|T\| \le c$.
2. **Get a matching lower bound** by exhibiting one vector, or a sequence of unit vectors $u_n$, with $\|Tu_n\| \to c$. If $\|Tu\| = c\|u\|$ for a single $u \ne 0$, the supremum is attained and $\|T\| = c$ exactly. This two-sided procedure is the one :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.1, p. 300"} prescribe.
3. **If the two bounds do not meet**, diagonalise instead. When $T$ maps an orthonormal basis $(e_n)$ to mutually orthogonal vectors, $Te_n = s_n f_n$ with $(f_n)$ orthonormal, then $\|T\| = \sup_n |s_n|$: Parseval's identity (:ref[orthonormal bases]{to=funcan.orthonormal-bases}) turns the supremum over the unit sphere into a supremum over a sequence of numbers. This is the route used in the example below, and it is the infinite-dimensional form of the singular value decomposition (:ref[SVD]{to=linalg.svd}).
4. **To prove unboundedness**, exhibit $u_n \ne 0$ with $\|Tu_n\|/\|u_n\| \to \infty$. Monomials of rising degree work for differentiation; indicator functions shrinking onto a singularity work for multiplication by an unbounded function.
5. **To define an operator you only know on nice functions** — polynomials, step functions, $C_c^\infty$ — check boundedness there, then invoke part 7 to extend. This is how the Fourier transform is defined on all of $L^2$ (:ref[Plancherel's theorem]{to=fourier.plancherel}).
:::

:::example[The Volterra operator: Hilbert-Schmidt bound against the exact norm]{provenance=adapted src="stakgold-holst-2011:§5.1, Example 7, p. 305, and Exercise 5.1.4(a)–(c), pp. 306–307"}
On $H = L^2(0,1)$ define

$$
(Au)(x) = \int_0^x u(y)\,dy .
$$

This is the integral operator with kernel $k(x,y) = 1$ for $y < x$ and $0$ otherwise.

**Step 1: the Hilbert-Schmidt bound.** The kernel is square-integrable, with

$$
\int_0^1\!\!\int_0^1 |k(x,y)|^2\,dy\,dx = \int_0^1 x\,dx = \tfrac12 ,
$$

so by the estimate of the note above, $\|A\| \le 1/\sqrt{2} = 0.7071068$.

**Step 2: a basis adapted to $A$.** The family that diagonalises $A$ is the one :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.1, Exercise 5.1.4(a), pp. 306–307"} single out for this operator; they obtain it by reflecting functions on $(0,1)$ into $(0,2)$, while we get it, together with its partner family, from a pair of Sturm-Liouville problems. Put $\omega_n = (2n-1)\pi/2$ for $n \in \mathbb{N}$ and

$$
e_n(x) = \sqrt{2}\cos(\omega_n x), \qquad f_n(x) = \sqrt{2}\sin(\omega_n x) .
$$

These are the eigenfunctions of $-v'' = \lambda v$ on $(0,1)$ with $v'(0) = 0,\ v(1) = 0$ and with $v(0) = 0,\ v'(1) = 0$ respectively, so each family is an orthonormal basis of $L^2(0,1)$ by :ref[Sturm-Liouville theory]{to=ode.sturm-liouville-theory}. (Orthonormality is also a two-line computation: $2\int_0^1\cos(\omega_n x)\cos(\omega_m x)dx = \delta_{nm}$ because $\omega_n \pm \omega_m$ is an integer multiple of $\pi$ for $n \ne m$, and $\sin(2\omega_n) = \sin((2n-1)\pi) = 0$.)

**Step 3: $A$ is diagonal in this pair of bases.** Integrating,

$$
(Ae_n)(x) = \sqrt{2}\int_0^x \cos(\omega_n y)\,dy = \frac{\sqrt{2}}{\omega_n}\sin(\omega_n x) = \frac{1}{\omega_n}f_n(x) .
$$

So $A$ sends the orthonormal basis $(e_n)$ to the mutually orthogonal vectors $f_n/\omega_n$, with

$$
s_n = \frac{1}{\omega_n} = \frac{2}{(2n-1)\pi} : \qquad s_1 = \frac{2}{\pi},\quad s_2 = \frac{2}{3\pi},\quad s_3 = \frac{2}{5\pi},\ \dots
$$

**Step 4: the exact norm.** Write $u = \sum_n c_n e_n$ with $\sum_n |c_n|^2 = \|u\|^2$ (Parseval). By continuity of $A$, $Au = \sum_n c_n s_n f_n$, and since $(f_n)$ is orthonormal, Parseval again gives

$$
\|Au\|^2 = \sum_{n=1}^{\infty} s_n^2 |c_n|^2 \;\le\; s_1^2 \sum_{n=1}^{\infty}|c_n|^2 = \frac{4}{\pi^2}\,\|u\|^2 ,
$$

with equality for $u = e_1$. Hence

$$
\|A\| = \frac{2}{\pi} = 0.6366198 .
$$

**Step 5: check.** Directly, $u = e_1 = \sqrt{2}\cos(\pi x/2)$ has $\|u\| = 1$ and $Au = (2/\pi)\sqrt{2}\sin(\pi x /2)$, whose norm is $2/\pi$; so the supremum really is attained here, unlike for multiplication by $x$. Discretising $A$ by the **midpoint rule** on a uniform grid of $N = 4000$ points, $h = 1/N$ — the matrix with entries $h$ strictly below the diagonal and $h/2$ on it — and computing its largest singular value numerically returns $0.63661976$, against $2/\pi = 0.63661977$. (The quadrature matters at this precision: the cruder left-endpoint matrix, with $h$ below the diagonal and $0$ on it, gives $0.6365402$ on the same grid, an $O(h)$ error rather than an $O(h^2)$ one.) The value $2/\pi$ agrees with the one :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§5.1, Example 7, p. 305, and Exercise 5.1.4(c), p. 307"} record for this operator.

**What the example shows.** The Hilbert-Schmidt bound overshoots by the factor $(1/\sqrt2)/(2/\pi) = \pi/(2\sqrt2) = 1.1107$, about $11\%$. That is typical: the bound adds the squares of *all* the numbers $s_n$, since $\sum_n s_n^2 = (4/\pi^2)\sum_n (2n-1)^{-2} = (4/\pi^2)(\pi^2/8) = 1/2$, exactly the kernel integral of step 1 — whereas the norm only sees the largest. The bound is sharp precisely when the operator has a single non-zero $s_n$, that is when it has rank one.
:::

:::example[An operator norm that is a supremum and not a maximum]{provenance=adapted src="stakgold-holst-2011:§5.1, Example 4, p. 303"}
On $L^2(0,1)$ let $(Mu)(x) = x\,u(x)$.

**Upper bound.** $\|Mu\|^2 = \int_0^1 x^2|u|^2dx \le \int_0^1 |u|^2dx = \|u\|^2$, so $\|M\| \le 1$.

**Lower bound.** For $0 < \varepsilon < 1$ let $u_\varepsilon = \varepsilon^{-1/2}\chi_{(1-\varepsilon,1)}$, a unit vector. Then

$$
\|Mu_\varepsilon\|^2 = \frac{1}{\varepsilon}\int_{1-\varepsilon}^1 x^2dx = \frac{1 - (1-\varepsilon)^3}{3\varepsilon} = 1 - \varepsilon + \frac{\varepsilon^2}{3} .
$$

At $\varepsilon = 10^{-2}$ the squared norm is $0.99003\overline{3}$ and the norm itself is $\|Mu_\varepsilon\| = 0.9950042$; at $\varepsilon = 10^{-4}$ the squared norm is $0.9999000$ and the norm is $0.9999500$. Letting $\varepsilon \to 0$ gives $\|M\| \ge 1$, hence $\|M\| = 1$.

**Not attained.** If $\|Mu\| = \|u\|$ for some $u$, then $\int_0^1(1-x^2)|u(x)|^2dx = 0$ with a strictly positive integrand off $x = 1$, forcing $u = 0$ almost everywhere. So no unit vector achieves the supremum — which is why the recipe of the method asks for a *sequence*. The operator, the bound and the approximating family supported on $(1-\varepsilon,1)$ are :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§5.1, Example 4, p. 303"}; what we add is the normalisation that makes $u_\varepsilon$ a unit vector, the arithmetic carried out explicitly, and a proof of the non-attainment that they state without one; the spectrum of this operator is computed in :ref[spectrum and resolvent]{to=funcan.spectrum}.
:::

:::application{provenance=original}
**Quantum mechanics.** Observables are operators on $L^2$, and the bounded ones — projections onto subspaces, spin matrices, bounded potentials acting by multiplication — are the ones for which no domain question arises. Position and momentum are not among them, and both live on $L^2(\mathbb{R})$, not on a bounded interval; that distinction is the whole point, so it is worth saying exactly where the unboundedness comes from.

*Position.* The example above computes the multiplication operator $u \mapsto xu$ on $L^2(0,1)$ and finds $\|M\| = 1$: on a **bounded** interval the multiplier is a bounded function and the operator is bounded, supremum not attained. The position observable $\hat x$ is the same formula on $L^2(\mathbb{R})$, where the multiplier is unbounded, and there the operator is too: the unit vectors $u_n = \chi_{(n,\,n+1)}$ give $\|\hat x\,u_n\|^2 = \int_n^{n+1}x^2dx \ge n^2$, so $\|\hat x\,u_n\| \ge n$. The mechanism is the one in the last bullet of the note above, multiplication by $1/x$ on a dense domain: what decides a multiplication operator is whether the *multiplier* is a bounded function. On $(0,1)$ the multiplier $x$ is bounded by $1$; on $\mathbb{R}$ it is not.

*Momentum.* Differentiation is unbounded for a different reason — it amplifies oscillation without limit — and the two bullets above display that on $C[0,1]$ (where $t^n$ has derivative of norm $n$) and on $L^2(a,b)$ (Hassani's $\sqrt{x-a}$, whose derivative leaves the space). On $L^2(\mathbb{R})$, where $\hat p = -i\hbar\,d/dx$ lives, take $\phi$ smooth, compactly supported, of norm $1$, and $u_n(x) = e^{inx}\phi(x)$, again of norm $1$; then $\hat p\,u_n = \hbar\,e^{inx}(n\phi - i\phi')$, so $\|\hat p\,u_n\| \ge \hbar\,(n - \|\phi'\|) \to \infty$.

Both operators are therefore only densely defined, which is why quantum mechanics needs :ref[unbounded and closed operators]{to=funcan.unbounded-operators}. Time evolution $e^{-iHt/\hbar}$ is bounded with norm $1$; see :ref[adjoints, self-adjoint and unitary operators]{to=funcan.adjoint-operators}.

**Integral equations.** Whether $u - \lambda Ku = f$ can be solved by iterating $u_{n+1} = f + \lambda K u_n$ depends on $|\lambda|\,\|K\| < 1$, so the operator norm is the convergence criterion of the Neumann series (:ref[Neumann series]{to=green.neumann-series}). The Hilbert-Schmidt bound is the usual way to check it in practice, and the Volterra example above shows how much margin that bound throws away.

**Numerical analysis.** The condition number $\|A\|\,\|A^{-1}\|$ of a linear solve, the stability constant of a finite-difference scheme, and the error amplification of a quadrature rule are all operator norms; see :ref[matrix norms and condition numbers]{to=linalg.matrix-norms-conditioning} and :ref[numerical linear systems]{to=num.linear-systems-numerics}. Stability of a time-stepping scheme is the statement that the norms of the powers $\|T^n\|$ stay bounded, and submultiplicativity is why $\|T\| \le 1$ suffices.

**Partial differential equations.** Solution operators, trace operators and embeddings between Sobolev spaces are bounded operators, and the constants in the energy estimates are their norms; see :ref[energy estimates]{to=pde.energy-estimates} and :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}. The extension theorem (part 7) is used constantly: an operator is first constructed on smooth compactly supported functions, where integration by parts is legitimate, and then extended by density to the whole space.

**Signal processing.** A linear time-invariant filter is convolution by its impulse response, and its operator norm on $L^2$ is the supremum of the modulus of its transfer function, by :ref[Plancherel's theorem]{to=fourier.plancherel}. "Gain" in engineering is the operator norm.
:::
