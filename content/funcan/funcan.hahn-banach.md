---
id: funcan.hahn-banach
title: The Hahn-Banach theorem
kind: theorem
level: advanced
summary: "Extends a linear functional from a subspace to the whole space without increasing the bound that controls it, and draws the consequences that make the dual space useful: a normed space always carries enough bounded functionals to reproduce its norm, to separate its points, to detect the distance to a closed subspace, and to embed the space isometrically in its bidual."
prereqs: [funcan.normed-banach-spaces, linalg.vector-spaces-bases, funcan.riesz-representation, measure.lp-spaces]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§4.2, pp. 213–218: sublinear functionals (subadditive and positive-homogeneous), Thm 4.2-1 (the real extension theorem) and its three-part proof by Zorn's lemma, including the auxiliary inequality $-p(-y_1-z)-f(z) \\le p(y+y_1)-f(y)$ and the choice of the constant $c$ between $m_0$ and $m_1$; the remark on pp. 217–218 that Zorn's lemma can be avoided when $X$ is exhausted by countably many one-dimensional steps. §4.3, pp. 219–223: Thm 4.3-1 (the version with $p(\\alpha x)=|\\alpha|p(x)$, covering complex spaces, with the decomposition $f=f_1+if_2$ and the formula $\\tilde f(x)=\\tilde f_1(x)-i\\tilde f_1(ix)$); Thm 4.3-2 (norm-preserving extension in a normed space, via $p(x)=\\|f\\|_Z\\|x\\|$) and the remark that in a Hilbert space the Riesz representation gives the extension at once; Thm 4.3-3 and Cor. 4.3-4 ($\\|x\\| = \\sup_{f \\ne 0}|f(x)|/\\|f\\|$, and $f(x_0)=0$ for all $f$ forces $x_0=0$)"
    pages: "213-223"
    role: the definition of a sublinear functional; the statement and full proof route of the real extension theorem; the complex version and the norm-preserving version in a normed space; the norming functional and the recovery of the norm from the dual; the observation that Hilbert spaces need no Zorn's lemma
  - work: folland-1999
    loc: "§5.2, pp. 157–159: the dual space $X^*$ and the correspondence $f(x)=u(x)-iu(ix)$ between real and complex functionals with $\\|u\\|=\\|f\\|$ (Prop. 5.5); Thm 5.6 (Hahn-Banach for a real sublinear $p$) and the one-dimensional step of its proof, with the two-sided bound $\\sup_{y\\in M}[f(y)-p(y-x)] \\le \\inf_{y\\in M}[p(x+y)-f(y)]$; Thm 5.7 (the complex version for a seminorm $p$); Thm 5.8(a)-(d) (a functional vanishing on a closed subspace $M$ with $\\|f\\|=1$ and $f(x)=\\operatorname{dist}(x,M)$; the norming functional; separation of points; the isometric embedding $x \\mapsto \\hat x$ into $X^{**}$) with their proofs, and the definitions of the completion and of reflexivity. §6.4, p. 191: the functional on $L^\\infty[0,1]$ extending $f \\mapsto f(0)$ from $C[0,1]$, and the argument with $f_n(x)=\\max(1-nx,0)$ showing it is not given by integration against any $L^1$ function"
    pages: "157-159, 191"
    role: the real-to-complex correspondence for functionals; the sublinear statement and the sharp two-sided bound in the one-dimensional step; the four separation corollaries and the embedding in the bidual; the $L^\infty$ example used in the application
  - work: reed-simon-1980
    loc: "§III.2, pp. 72–74: the dual space as $\\mathcal{L}(X,\\mathbb{C})$ and its norm; Examples 1-3 ($L^q$ as the dual of $L^p$, Hilbert spaces as their own duals, $\\ell_1 = c_0^*$ and $\\ell_\\infty = \\ell_1^*$); Thm III.4 (the canonical map $J$ into $X^{**}$ is an isometry) and the definition of reflexivity. §III.3, pp. 75–77: Thm III.5, stated for a $p$ assumed only convex, with the one-dimensional extension and the Zorn's lemma argument; the complex version; Corollaries 1-3 (norm-preserving extension, a functional with $\\Lambda(y)=\\|\\Lambda\\|\\,\\|y\\|$, and a functional of norm at most $1$ vanishing on a subspace $Z$ with $\\Lambda(y)=\\operatorname{dist}(y,Z)$); Thm III.7 (separability of $X^*$ forces separability of $X$). Problem 8(b), p. 84 (a bounded functional on $L^\\infty(\\mathbb{R})$ that evaluates continuous functions at the origin)"
    pages: "72-77, 84"
    role: the convexity form of the hypothesis on $p$; the duals of the standard sequence and function spaces; the canonical embedding; the three corollaries, in particular the distance functional; the two-step description of how functionals are built in practice
  - work: stakgold-holst-2011
    loc: "§4.8, pp. 292–295: the dual space of a real Banach space with the norm (4.8.1); the three basic principles of linear analysis; the definition of a sublinear functional and Thm 4.8.1 (the extension theorem, quoted without proof); Thms 4.8.2-4.8.4 (the norming functional, the statement that $f(u)=0$ for every $f \\in X'$ forces $u=0$, and the completeness of $X'$ even when $X$ is not complete); the map $J : X \\to X''$, $J_u(f)=f(u)$, and the definition of a reflexive space; the list of standard facts (1)-(9) about reflexive and finite-dimensional spaces; the remark that Thm 4.8.3 is what connects weak and strong formulations of operator equations"
    pages: "292-295"
    role: the statement in the form used in applied analysis; the completeness of the dual of any normed space; the reading of the separation corollary as the bridge between weak and strong formulations; the list of reflexive spaces
---

:::definition[Sublinear functionals and the dual space]{provenance=adapted src="kreyszig-1978:§4.2, eqs. (1)–(2), p. 214, and §4.3, eqs. (1)–(2), p. 219; folland-1999:§5.2, p. 157; stakgold-holst-2011:§4.8, eq. (4.8.1), pp. 292–293"}
Let $X$ be a vector space over $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$. A **linear functional** on $X$ is a linear map $f : X \to \mathbb{K}$.

A **sublinear functional** on a real vector space $X$ is a map $p : X \to \mathbb{R}$ that is

- *subadditive*: $p(x+y) \le p(x) + p(y)$ for all $x, y \in X$, and
- *positively homogeneous*: $p(\lambda x) = \lambda\, p(x)$ for all $x \in X$ and all real $\lambda > 0$.

Nothing is assumed about $p(-x)$, and $p$ may take negative values. A **seminorm** is a map $p : X \to \mathbb{R}$ that is subadditive and satisfies $p(\alpha x) = |\alpha|\,p(x)$ for every scalar $\alpha$; every norm is a seminorm, and every seminorm on a real space is a sublinear functional.

If $X$ is a normed space (see :ref[]{to=funcan.normed-banach-spaces}), its **dual space** is the set

$$
X^{*} = \{\, f : X \to \mathbb{K} \ \text{linear with}\ \|f\| < \infty \,\},
\qquad
\|f\| = \sup_{\|x\| \le 1} |f(x)| ,
$$

with the operator norm. Since the scalar field is complete, $X^{*}$ is a Banach space whether or not $X$ is one; :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 4.8.4, p. 294"} record this as one of the standard facts. Writers differ over the symbol: :cite[Kreyszig]{work=kreyszig-1978 loc="§2.10, and §4.3, p. 223"} and Stakgold and Holst write $X'$, while :cite[Folland]{work=folland-1999 loc="§5.2, p. 157"} and :cite[Reed and Simon]{work=reed-simon-1980 loc="§III.2, p. 72"} write $X^{*}$; we use $X^{*}$.

On a complex space the real and complex functionals determine each other. If $f$ is complex linear and $u = \operatorname{Re} f$, then $u$ is real linear and
$$
f(x) = u(x) - i\,u(ix) ;
$$
conversely this formula turns any real-linear $u$ into a complex-linear $f$, and on a normed space $\|u\| = \|f\|$. This is :cite[Folland's Prop. 5.5]{work=folland-1999 loc="Prop. 5.5, p. 157"}, and it is the device by which every complex statement below is reduced to a real one.
:::

:::statement[Hahn-Banach: dominated extension]{provenance=adapted src="kreyszig-1978:Thm 4.2-1, p. 214, Thm 4.3-1, p. 219, and Thm 4.3-2, pp. 221–222; folland-1999:Thm 5.6, p. 157, and Thm 5.7, p. 158; reed-simon-1980:Thm III.5 and Corollary 1, pp. 75–77"}
**(a) Real form.** Let $X$ be a real vector space, $p$ a sublinear functional on $X$, $M \subseteq X$ a subspace, and $f$ a linear functional on $M$ with
$$
f(y) \le p(y) \qquad \text{for all } y \in M .
$$
Then there is a linear functional $F$ on all of $X$ with $F|_M = f$ and $F(x) \le p(x)$ for every $x \in X$.

**(b) Seminorm form, real or complex.** Let $X$ be a real or complex vector space, $p$ a seminorm on $X$, $M \subseteq X$ a subspace, and $f$ a linear functional on $M$ with $|f(y)| \le p(y)$ for all $y \in M$. Then there is a linear functional $F$ on $X$ with $F|_M = f$ and $|F(x)| \le p(x)$ for every $x \in X$.

**(c) Normed form.** Let $X$ be a normed space, $M \subseteq X$ a subspace, and $f \in M^{*}$. Then there is $F \in X^{*}$ with
$$
F|_M = f , \qquad \|F\|_{X^{*}} = \|f\|_{M^{*}} .
$$

No completeness, separability or closedness is assumed anywhere: $X$ need not be a Banach space and $M$ need not be closed.
:::

:::statement[Consequences: the dual space is large]{provenance=adapted src="folland-1999:Thm 5.8(a)–(d), p. 159; kreyszig-1978:Thm 4.3-3 and Cor. 4.3-4, p. 223; reed-simon-1980:Corollaries 2 and 3, p. 77, and Thm III.4, p. 74; stakgold-holst-2011:Thms 4.8.2 and 4.8.3, p. 294"}
Let $X$ be a normed space.

1. **Norming functional.** For every $x \ne 0$ in $X$ there is $f \in X^{*}$ with $\|f\| = 1$ and $f(x) = \|x\|$. Consequently
   $$
   \|x\| = \max_{f \in X^{*},\, f \ne 0} \frac{|f(x)|}{\|f\|} ,
   $$
   the maximum being attained, and the dual norm determines the original norm.
2. **Distance functional.** If $M \subseteq X$ is a closed subspace and $x \in X \setminus M$, put $\delta = \inf_{y \in M}\|x - y\| > 0$. Then there is $f \in X^{*}$ with
   $$
   \|f\| = 1 , \qquad f|_{M} = 0 , \qquad f(x) = \delta .
   $$
3. **Separation of points.** If $x \ne y$ in $X$ there is $f \in X^{*}$ with $f(x) \ne f(y)$. Equivalently, if $f(x) = 0$ for every $f \in X^{*}$ then $x = 0$.
4. **Embedding in the bidual.** For $x \in X$ define $\hat{x} : X^{*} \to \mathbb{K}$ by $\hat{x}(f) = f(x)$. Then $\hat{x} \in X^{**}$ and the map $x \mapsto \hat{x}$ is a linear isometry of $X$ into $X^{**}$. A space for which this map is onto is called **reflexive**; every Hilbert space and every $L^{p}$ with $1 < p < \infty$ is reflexive, while $L^{1}$ and $c_{0}$ are not.

Part 1 is :cite[Kreyszig's Thm 4.3-3]{work=kreyszig-1978 loc="Thm 4.3-3, p. 223"} and :cite[Folland's Thm 5.8(b)]{work=folland-1999 loc="Thm 5.8(b), p. 159"}; part 2 is :cite[Folland's Thm 5.8(a)]{work=folland-1999 loc="Thm 5.8(a), p. 159"}, which :cite[Reed and Simon]{work=reed-simon-1980 loc="Corollary 3, p. 77"} state with the weaker normalisation $\|f\| \le 1$; part 4 is :cite[Reed and Simon's Thm III.4]{work=reed-simon-1980 loc="Thm III.4, p. 74"}, whose list of reflexive and non-reflexive examples we quote in Examples 1-3 of their §III.2.
:::

:::note[The hypothesis on $p$ differs between our sources]{provenance=adapted src="reed-simon-1980:Thm III.5, p. 75; kreyszig-1978:Thm 4.2-1, p. 214, and Thm 4.3-1, p. 219; folland-1999:Thm 5.6, p. 157; stakgold-holst-2011:Thm 4.8.1, p. 293"}
The four books in the library state the extension theorem with four different hypotheses on the dominating function, and it is worth knowing which is which before comparing statements.

- :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 4.2-1, p. 214"}, :cite[Folland]{work=folland-1999 loc="Thm 5.6, p. 157"} and :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 4.8.1, p. 293"} all take $p$ **sublinear** on a real space. That is the version stated in (a) above and proved below.
- :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm III.5, p. 75"} assume only that $p$ is **convex**, $p(\alpha x + (1-\alpha)y) \le \alpha p(x) + (1-\alpha)p(y)$ for $\alpha \in [0,1]$. A sublinear $p$ is convex, since for $0 < \alpha < 1$ subadditivity and positive homogeneity give $p(\alpha x + (1-\alpha)y) \le p(\alpha x) + p((1-\alpha)y) = \alpha p(x) + (1-\alpha)p(y)$; so their hypothesis is the weaker one and their theorem contains the other three. Their proof uses only convexity.
- For the complex case :cite[Kreyszig]{work=kreyszig-1978 loc="Thm 4.3-1, p. 219"} assumes $p$ subadditive with $p(\alpha x) = |\alpha| p(x)$, and :cite[Folland]{work=folland-1999 loc="Thm 5.7, p. 158"} assumes $p$ is a seminorm; these are the same condition.

Stakgold and Holst state the theorem for a real space only and refer the proof to books outside this library.
:::

:::idea{provenance=original}
Everything rests on one observation about a single extra dimension. Suppose $f \le p$ on a subspace $M$ and we want to extend $f$ to $M + \mathbb{R}x$ for one new vector $x$. The extension is determined by the single number $a = F(x)$, and the requirement $F \le p$ on the larger space is a family of inequalities, one for each $y \in M$ and each sign of the coefficient of $x$. Those inequalities say exactly that $a$ lies above a certain set of numbers built from $p$ and below another. Subadditivity of $p$ is precisely what makes the first set lie entirely below the second, so an admissible $a$ exists, and we have gained a dimension.

The rest is bookkeeping: the one-dimensional step can be repeated, and Zorn's lemma turns "can always be repeated" into "has a maximal element", whose domain must then be all of $X$.

The complex case is not a separate argument. A complex functional is reconstructed from its real part, so one extends the real part by the real theorem and reassembles; the only point needing care is that the bound $|F| \le p$ is recovered from $\operatorname{Re} F \le p$ by rotating $x$ through the phase of $F(x)$, which is where $p(\alpha x) = |\alpha| p(x)$ is used.

The corollaries all follow one pattern, which is worth naming because it is how the theorem is used: define the functional you want on the smallest subspace where its value is forced, check that the norm you want is correct there, then extend.
:::

:::proof[The real form, one dimension at a time]{provenance=adapted src="kreyszig-1978:Thm 4.2-1, parts (a)–(c), pp. 214–217; folland-1999:Thm 5.6, p. 158; reed-simon-1980:Thm III.5, pp. 75–76"}
**Step 1: the inequality that creates room.** Let $N$ be a subspace of $X$, let $g$ be linear on $N$ with $g \le p$ there, and let $x \in X \setminus N$. For any $y_1, y_2 \in N$,
$$
g(y_1) + g(y_2) = g(y_1 + y_2) \le p(y_1 + y_2) = p\bigl((y_1 - x) + (y_2 + x)\bigr) \le p(y_1 - x) + p(y_2 + x) ,
$$
using linearity of $g$, the bound $g \le p$ on $N$, and subadditivity of $p$. Rearranging so that $y_1$ appears only on the left and $y_2$ only on the right,
$$
g(y_1) - p(y_1 - x) \;\le\; p(y_2 + x) - g(y_2) .
$$

**Step 2: choose the value at $x$.** Since the left side does not involve $y_2$ and the right side does not involve $y_1$, we may take the supremum over $y_1 \in N$ on the left and the infimum over $y_2 \in N$ on the right and keep the inequality. Hence
$$
m_{0} = \sup_{y \in N}\bigl[g(y) - p(y - x)\bigr] \;\le\; \inf_{y \in N}\bigl[p(y + x) - g(y)\bigr] = m_{1} ,
$$
and both are finite (take $y = 0$ to see $m_0 \ge -p(-x)$ and $m_1 \le p(x)$). Pick any real $a$ with $m_{0} \le a \le m_{1}$ and define, on $N + \mathbb{R}x$,
$$
G(y + \lambda x) = g(y) + \lambda a \qquad (y \in N,\ \lambda \in \mathbb{R}) .
$$
This is well defined because $x \notin N$ makes the decomposition $y + \lambda x$ unique, and it is linear and agrees with $g$ on $N$.

**Step 3: check $G \le p$, separately for each sign of $\lambda$.** For $\lambda = 0$ the claim is $g \le p$, which holds. For $\lambda > 0$, use $a \le m_{1} \le p(y/\lambda + x) - g(y/\lambda)$ and multiply by $\lambda > 0$, which is where positive homogeneity of $p$ enters:
$$
G(y + \lambda x) = \lambda\Bigl[g(y/\lambda) + a\Bigr] \le \lambda\, p(y/\lambda + x) = p(y + \lambda x) .
$$
For $\lambda = -\mu$ with $\mu > 0$, use $a \ge m_{0} \ge g(y/\mu) - p(y/\mu - x)$ and multiply by $\mu > 0$:
$$
G(y - \mu x) = \mu\Bigl[g(y/\mu) - a\Bigr] \le \mu\, p(y/\mu - x) = p(y - \mu x) .
$$
So $G \le p$ on $N + \mathbb{R}x$, and we have extended $g$ by one dimension.

**Step 4: Zorn's lemma.** Let $\mathcal{E}$ be the set of all pairs $(N, g)$ with $M \subseteq N \subseteq X$ a subspace, $g$ linear on $N$, $g|_{M} = f$ and $g \le p$ on $N$. Order $\mathcal{E}$ by extension: $(N_1, g_1) \preceq (N_2, g_2)$ when $N_1 \subseteq N_2$ and $g_2|_{N_1} = g_1$. The set is non-empty, since $(M, f) \in \mathcal{E}$. If $\mathcal{C} \subseteq \mathcal{E}$ is a chain, the union of its domains is a subspace — any two elements of the union lie in a common member of the chain, because the chain is totally ordered — and the common value of the $g$'s on it is unambiguous for the same reason; this gives an upper bound for $\mathcal{C}$ in $\mathcal{E}$. By Zorn's lemma $\mathcal{E}$ has a maximal element $(N_{\max}, F)$.

**Step 5: the maximal domain is everything.** If $N_{\max} \ne X$, pick $x \in X \setminus N_{\max}$; Steps 1-3 produce a strictly larger member of $\mathcal{E}$, contradicting maximality. Hence $N_{\max} = X$, and $F$ is the required extension. $\square$
:::

:::proof[The seminorm form and the normed form]{provenance=adapted src="kreyszig-1978:Thm 4.3-1, pp. 219–221, and Thm 4.3-2, pp. 221–222; folland-1999:Thm 5.7, p. 158; reed-simon-1980:Corollary 1, p. 77"}
**Real scalars.** Let $p$ be a seminorm and $|f| \le p$ on $M$. In particular $f \le p$ on $M$, so part (a) gives a linear $F$ on $X$ with $F|_M = f$ and $F \le p$. Then also $-F(x) = F(-x) \le p(-x) = p(x)$, so $|F| \le p$ everywhere, using $p(-x) = p(x)$.

**Complex scalars.** Write $u = \operatorname{Re} f$ on $M$. Regard $X$ and $M$ as real vector spaces; $u$ is real linear and $u \le |f| \le p$ on $M$. By part (a) there is a real-linear $U$ on $X$ with $U|_{M} = u$ and $U \le p$, hence $|U| \le p$ as above. Define
$$
F(x) = U(x) - i\,U(ix) .
$$
By the correspondence recorded in the definition block, $F$ is complex linear; and on $M$ it agrees with $f$, because $u = \operatorname{Re} f$ there and $f$ is determined by its real part.

It remains to bound $|F|$. Fix $x$ with $F(x) \ne 0$ and write $F(x) = |F(x)|e^{i\theta}$, so that $\alpha = e^{-i\theta}$ has modulus $1$. Then
$$
|F(x)| = \alpha F(x) = F(\alpha x) ,
$$
which is real and therefore equals its own real part $U(\alpha x)$. Hence
$$
|F(x)| = U(\alpha x) \le p(\alpha x) = |\alpha|\,p(x) = p(x) ,
$$
the last two steps using the homogeneity of the seminorm. (If $F(x) = 0$ the bound is immediate, since $p \ge 0$: indeed $0 = p(0) \le p(x) + p(-x) = 2p(x)$.)

**Normed form.** Let $f \in M^{*}$ and set $p(x) = \|f\|_{M^{*}}\,\|x\|$, a seminorm on all of $X$ by the triangle inequality and absolute homogeneity of the norm. On $M$ we have $|f(y)| \le \|f\|_{M^{*}}\|y\| = p(y)$, so the seminorm form gives a linear $F$ on $X$ with $F|_M = f$ and $|F(x)| \le \|f\|_{M^{*}}\|x\|$ for all $x$; thus $F \in X^{*}$ with $\|F\| \le \|f\|_{M^{*}}$. The reverse inequality needs no theorem: the supremum defining $\|F\|$ runs over a larger set of vectors than the one defining $\|f\|_{M^{*}}$, so $\|F\| \ge \|f\|_{M^{*}}$. Hence the two norms are equal. $\square$
:::

:::proof[The consequences]{provenance=adapted src="folland-1999:Thm 5.8, p. 159; kreyszig-1978:Thm 4.3-3 and Cor. 4.3-4, p. 223; reed-simon-1980:Corollary 2, p. 77, and Thm III.4, p. 74"}
**Part 2 first, since part 1 is its special case.** Let $M$ be a closed subspace and $x \notin M$, and let $\delta = \inf_{y \in M}\|x-y\|$; this is strictly positive because $M$ is closed, for $\delta = 0$ would exhibit $x$ as a limit of points of $M$. On the subspace $M + \mathbb{K}x$ define
$$
f_{0}(y + \lambda x) = \lambda\,\delta \qquad (y \in M,\ \lambda \in \mathbb{K}) .
$$
The decomposition is unique because $x \notin M$, so $f_{0}$ is a well-defined linear functional; it vanishes on $M$ and $f_{0}(x) = \delta$.

Its norm on $M + \mathbb{K}x$ is exactly $1$. For $\lambda \ne 0$,
$$
|f_{0}(y + \lambda x)| = |\lambda|\,\delta \le |\lambda|\,\bigl\|x + \lambda^{-1}y\bigr\| = \|\lambda x + y\| ,
$$
where the inequality is the definition of $\delta$ as an infimum over $M$, applied to the element $-\lambda^{-1}y \in M$; for $\lambda = 0$ the left side is $0$. Hence $\|f_{0}\| \le 1$. Conversely, choose $y_{n} \in M$ with $\|x - y_{n}\| \to \delta$; then $f_{0}(x - y_{n}) = \delta$ while $\|x-y_{n}\| \to \delta$, so $\|f_{0}\| \ge \delta/\|x-y_n\| \to 1$. Thus $\|f_{0}\| = 1$, and the normed form of the theorem extends $f_{0}$ to $f \in X^{*}$ with $\|f\| = 1$, $f|_{M} = 0$ and $f(x) = \delta$.

**Part 1.** Take $M = \{0\}$, which is closed, and $x \ne 0$: then $\delta = \|x\|$ and part 2 gives $f$ with $\|f\|=1$ and $f(x) = \|x\|$. For the formula for $\|x\|$: every $f \ne 0$ satisfies $|f(x)| \le \|f\|\,\|x\|$, so the quotient $|f(x)|/\|f\|$ never exceeds $\|x\|$, and the functional just constructed attains it.

**Part 3.** If $x \ne y$, apply part 1 to $x - y \ne 0$ to get $f$ with $f(x-y) = \|x-y\| \ne 0$, that is $f(x) \ne f(y)$. Taking $y = 0$ gives the second formulation: if every $f \in X^{*}$ kills $x$ then $\|x\| = 0$.

**Part 4.** Linearity of $x \mapsto \hat{x}$ and of each $\hat{x}$ is immediate from the definitions. The estimate $|\hat{x}(f)| = |f(x)| \le \|x\|\,\|f\|$ shows $\hat{x} \in X^{**}$ with $\|\hat{x}\| \le \|x\|$. For the opposite inequality take the $f$ of part 1: $\|\hat{x}\| \ge |\hat{x}(f)| = |f(x)| = \|x\|$ since $\|f\|=1$. So $\|\hat{x}\| = \|x\|$ and the map is an isometry. $\square$
:::

:::remark[Where the hypotheses are used, and what the theorem does not give]{provenance=original}
- **Subadditivity of $p$** is used exactly once, in Step 1, to split $p(y_1+y_2)$ across the inserted pair $-x$ and $+x$. It is what forces $m_{0} \le m_{1}$; without it the two sets could be in the wrong order and no admissible value $a$ would exist.
- **Positive homogeneity of $p$** is used only in Step 3, to rescale by $|\lambda|$. Note that the two sign cases are genuinely different computations: the case $\lambda>0$ uses the upper bound $a \le m_1$ and the case $\lambda<0$ the lower bound $a \ge m_0$. A one-sided choice of $a$ would not do.
- **Absolute homogeneity $p(\alpha x) = |\alpha| p(x)$** is needed only for the seminorm form; the real form (a) is false as stated if one tries to conclude $|F| \le p$ from $F \le p$ for a merely sublinear $p$. For example, on $X = \mathbb{R}$ with $p(t) = t$ (sublinear but not a seminorm) the functional $F(t) = t$ satisfies $F \le p$ while $|F(-1)| = 1 > -1 = p(-1)$.
- **Closedness of $M$** is used only in part 2 of the consequences, to guarantee $\delta > 0$. If $M$ is a dense proper subspace then $\delta = 0$ for every $x$, and the only $f \in X^{*}$ vanishing on $M$ is $f = 0$ by continuity.
- **Completeness is never used.** The theorem and all four consequences hold in any normed space. What completeness buys is elsewhere: the other two basic principles of linear analysis, the uniform boundedness and open mapping theorems of :ref[]{to=funcan.uniform-boundedness-open-mapping}, both need a Baire category argument and therefore a complete space.
- **No uniqueness.** The theorem produces an extension, never *the* extension. In $\mathbb{R}^{2}$ with $\|y\|_{1} = |y_1| + |y_2|$, let $Z = \{(t,0)\}$ and $f(t,0) = t$, so $\|f\|_{Z^{*}} = 1$. Every linear extension has the form $F_{c}(y) = y_{1} + c\,y_{2}$, and the dual norm of $\|\cdot\|_1$ is $\|\cdot\|_\infty$, so $\|F_{c}\| = \max(1, |c|)$. Thus *every* $c \in [-1,1]$ gives a norm-preserving extension: a whole interval of them. In a Hilbert space this cannot happen: by :ref[]{to=funcan.riesz-representation} a bounded functional on a subspace $Z$ is $(\,\cdot\,, z)$ for a unique $z \in \overline{Z}$, and the same formula read on the whole space is the unique norm-preserving extension. :cite[Kreyszig]{work=kreyszig-1978 loc="§4.3, p. 222"} makes the same point: in Hilbert space the extension is immediate and no Zorn's lemma is needed.
- **The axiom of choice.** Zorn's lemma enters only in Step 4. :cite[Kreyszig]{work=kreyszig-1978 loc="§4.2, pp. 217–218"} notes that if $X$ is exhausted by an increasing sequence of subspaces obtained by adjoining one vector at a time — in particular if $X$ is separable, where one can adjoin the elements of a countable dense set — then ordinary induction replaces it. The price of Zorn's lemma is that the proof is not a construction: it does not tell you what $F$ is.
:::

:::method[Building a bounded functional with prescribed behaviour]{provenance=adapted src="reed-simon-1980:§III.3, p. 75"}
:cite[Reed and Simon]{work=reed-simon-1980 loc="§III.3, p. 75"} describe the standard two-step use of the theorem; written out as a recipe it is:

1. **Identify the smallest subspace on which the functional is forced.** If the requirements are "$f$ vanishes on $M$" and "$f(x) = c$", that subspace is $M + \mathbb{K}x$; if the requirement is "$f(x) = \|x\|$", it is the line $\mathbb{K}x$.
2. **Write the functional there.** On $M + \mathbb{K}x$ there is only one choice, $f_{0}(y + \lambda x) = \lambda c$; the decomposition is unique provided $x \notin M$.
3. **Compute $\|f_{0}\|$ on that subspace,** and find the dominating function. For a norm bound take $p(\cdot) = \|f_{0}\|\,\|\cdot\|$; the point of the step is that on a one- or two-dimensional problem the norm is an explicit minimisation that can be done by hand.
4. **Extend.** Part (c) of the theorem delivers $F \in X^{*}$ with the same norm, still satisfying the prescriptions of step 1, since they were imposed on the subspace.
5. **Check what you actually need.** Only the properties imposed in step 1 and the norm survive; nothing else about $F$ is determined, so any further claim about it must be proved from those.
:::

:::example[A distance, and the functional that detects it]{provenance=original}
Work in $X = \mathbb{R}^{3}$ with the norm $\|y\|_{1} = |y_{1}| + |y_{2}| + |y_{3}|$. Let
$$
u = (1, 2, -1), \qquad M = \operatorname{span}\{u\}, \qquad x = (3, 1, 0) .
$$
$M$ is finite-dimensional, hence closed. We compute $\delta = \operatorname{dist}(x, M)$ and exhibit the functional of part 2.

**Step 1: the distance.** For $t \in \mathbb{R}$,
$$
\varphi(t) = \|x - t u\|_{1} = |3 - t| + |1 - 2t| + |t| .
$$
This is piecewise linear with corners at $t = 0, \tfrac12, 3$. On $[0, \tfrac12]$ all three expressions inside the absolute values are non-negative in the order written, giving $\varphi(t) = (3-t) + (1-2t) + t = 4 - 2t$, decreasing. On $[\tfrac12, 3]$ we get $\varphi(t) = (3-t) + (2t-1) + t = 2 + 2t$, increasing. Outside $[0,3]$ the function only grows further. So the minimum is at the corner $t = \tfrac12$:
$$
\delta = \varphi(\tfrac12) = 4 - 1 = 3 .
$$

**Step 2: the dual norm.** For $f(y) = a y_{1} + b y_{2} + c y_{3}$ we have $|f(y)| \le \max(|a|,|b|,|c|)\,\|y\|_{1}$, with equality at the standard basis vector belonging to the largest of $|a|,|b|,|c|$. Hence $\|f\| = \max(|a|,|b|,|c|)$: the dual of the $\ell^{1}$ norm is the $\ell^{\infty}$ norm.

**Step 3: the functional.** Part 2 of the consequences asserts the existence of $f$ with $\|f\| = 1$, $f(u) = 0$ and $f(x) = 3$. Take
$$
f(y) = y_{1} + y_{3}, \qquad\text{that is}\qquad (a,b,c) = (1,0,1) .
$$
Then $\|f\| = \max(1,0,1) = 1$; $f(u) = 1 + (-1) = 0$, so $f$ vanishes on all of $M$; and $f(x) = 3 + 0 = 3 = \delta$. All three requirements hold, and the two computations agree:
$$
\operatorname{dist}(x, M) = 3 = \max\{\, f(x) : \|f\|_{\infty} \le 1,\ f(u) = 0 \,\} .
$$

**Step 4: the maximum really is $3$.** The right-hand side is the linear program "maximise $3a + b$ subject to $a + 2b - c = 0$ and $|a|,|b|,|c| \le 1$". If $3a + b = 3$ with $b = 3 - 3a$, the constraint gives $c = a + 2b = 6 - 5a$, and $|c| \le 1$ forces $a \ge 1$, hence $a = 1$, $b = 0$, $c = 1$. So the value $3$ is attained, only by the $f$ above, and no larger value is possible. The duality is exact, not merely an inequality.

Note what this example shows about the recipe: the extension step was invisible because $M + \mathbb{R}x$ was already two-dimensional inside a three-dimensional space, so one extra dimension sufficed. In infinite dimensions the same two computations are made on the small subspace and the theorem supplies the rest.
:::

:::application[Weak formulations, and functionals that are not integrals]{provenance=original}
**Testing against functionals.** The most-used consequence in applied analysis is the weakest-looking one, part 3: if $f(v) = 0$ for every $f \in X^{*}$, then $v = 0$. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="Thm 4.8.3 and the remark following it, p. 294"} single it out as the bridge between the weak form of an operator equation and its strong form, and use it repeatedly for boundary-value problems. The pattern is this. A weak formulation of $Au = g$ asks that
$$
f(Au - g) = 0 \qquad \text{for every } f \text{ in a suitable dual space,}
$$
which in a function space means testing against all $L^{q}$ functions, or all test functions, or all elements of $H^{1}_{0}$. Part 3 says that this family of scalar equations is not weaker than the original one: if $Au - g$ lies in a space whose dual separates points, the weak equations force $Au = g$ exactly. Without the Hahn-Banach theorem one would not know that there are enough functionals for this, and the whole variational strategy of :ref[]{to=pde.weak-solutions-sobolev} and :ref[]{to=pde.lax-milgram} would rest on nothing. The same remark explains why a weak limit is unique, which is the starting point of :ref[]{to=funcan.weak-convergence}.

**A state that is not a density.** The theorem also produces objects that no formula can write down, and these are not pathologies: they are the reason the dual of $L^{\infty}$ is bigger than $L^{1}$. On $X = L^{\infty}[0,1]$ consider the subspace $C[0,1]$ and the evaluation $f \mapsto f(0)$, which is bounded with norm $1$ there because $|f(0)| \le \|f\|_{\infty}$. Extend it to $\phi \in (L^{\infty})^{*}$ with $\|\phi\| = 1$. :cite[Folland]{work=folland-1999 loc="§6.4, p. 191"} observes that $\phi$ cannot be integration against any $g \in L^{1}$: the continuous functions $f_{n}(x) = \max(1 - nx, 0)$ have $\phi(f_{n}) = f_{n}(0) = 1$ for every $n$, while $f_{n} \to 0$ pointwise on $(0,1]$ with $|f_n| \le 1$, so dominated convergence (:ref[]{to=measure.dominated-convergence}) gives $\int f_{n} g \to 0$ for every $g \in L^{1}$. :cite[Reed and Simon]{work=reed-simon-1980 loc="Problem 8(b), p. 84"} set the same construction as an exercise on $L^{\infty}(\mathbb{R})$.

In physics this is the standard way to make sense of an idealised measurement, or of an equilibrium state, that is specified only on a subalgebra of observables where its value is forced by symmetry or by a conservation law: one defines the state where it is determined, checks the normalisation there, and extends. The extension is not unique, and the non-uniqueness is physically meaningful — it is the freedom left over once the prescribed data are imposed.

**Where the dual spaces themselves come from.** The theorem says the dual is large, not what it is. Identifying it is separate work, done space by space: $(L^{p})^{*} = L^{q}$ for $1 \le p < \infty$ with $p^{-1} + q^{-1} = 1$ (see :ref[]{to=measure.lp-spaces}), $c_{0}^{*} = \ell^{1}$ and $(\ell^{1})^{*} = \ell^{\infty}$, and a Hilbert space is its own dual by :ref[]{to=funcan.riesz-representation}; these are Examples 1-3 of :cite[Reed and Simon]{work=reed-simon-1980 loc="§III.2, pp. 72–74"}. Their Thm III.7 adds a useful one-way test: if $X^{*}$ is separable then so is $X$, which is how one shows that $\ell^{1}$ is not the dual of $\ell^{\infty}$.
:::
