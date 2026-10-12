---
id: found.partial-derivatives-chain-rule
title: Partial derivatives and the chain rule
kind: method
level: core
summary: Defines partial derivatives and the total derivative of a map between Euclidean spaces, identifies the total derivative with the Jacobian matrix, and gives the chain rule as a matrix product together with the $C^2$ condition under which mixed partials commute.
prereqs: []
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. C, pp. 642–647: total derivative (C.1)–(C.2) and Exercise C.1, p. 642; Exercise C.2(a) (continuity), p. 643; Prop. C.3 (chain rule) with its proof, pp. 643–644; partial derivatives and $C^k$, p. 644; Prop. C.6 and Cor. C.7 (mixed partials), Prop. C.8 (Jacobian) with its proof and Exercise C.9 (components), p. 646; Prop. C.10, Cor. C.11 with the paragraph following it, and Eq. (C.6) with the display following it, p. 647"
    pages: "642-647"
    role: definitions of the total and partial derivatives; the four statements and their hypotheses
  - work: rhb-2006
    loc: "§5.1, Eqs. (5.1)–(5.2) and the second-derivative notation, p. 152; equality of mixed partials under continuity at the point, p. 153; §5.2, the total differential (5.5)–(5.6) and the total derivative (5.8), p. 154; §6.4.3, p. 205 (Jacobian-determinant notation)"
    pages: "152-154, 205"
    role: the total differential and total derivative as physicists write them; notation conventions; the weaker hypothesis for mixed partials
  - work: docarmo-2016
    loc: "Appendix on continuity and differentiability, p. 127: second partial derivatives and the subscript notation $\\partial^2 f/\\partial x\\,\\partial y = f_{xy}$"
    pages: "127"
    role: a second book for the subscript convention
---

:::definition[Partial derivative]{provenance=adapted src="lee-2013:App. C, p. 644; rhb-2006:§5.1, Eqs. (5.1)–(5.2) and p. 152; docarmo-2016:Appendix, p. 127"}
Let $U \subseteq \mathbb{R}^n$ be open, let $f : U \to \mathbb{R}$, let $a \in U$ and let $e_j$ be the $j$th standard basis vector. The **$j$th partial derivative of $f$ at $a$** is

$$
\frac{\partial f}{\partial x_j}(a) \;=\; \lim_{h \to 0} \frac{f(a + h e_j) - f(a)}{h} \in \mathbb{R},
$$

whenever that limit exists, $h$ ranging over the real numbers with $a + he_j \in U$. It is also written $\partial_j f(a)$ or $f_{x_j}(a)$. For a map $F = (F_1,\dots,F_m) : U \to \mathbb{R}^m$, the partial derivatives of $F$ are those of its components, $\partial F_i/\partial x_j$.

Higher partial derivatives are the partial derivatives of partial derivatives, with
$$
\frac{\partial^2 f}{\partial x_j \partial x_k}(a) = \frac{\partial}{\partial x_j}\!\left(\frac{\partial f}{\partial x_k}\right)\!(a) :
$$
the **rightmost** index is differentiated first. We read the subscript notation the same way round, $f_{x_j x_k} = \partial^2 f/\partial x_j \partial x_k$, which is the convention of Riley, Hobson and Bence (p. 152) and of do Carmo (p. 127): both write $f_{xy} = \partial^2 f/\partial x\,\partial y = \partial_x(\partial_y f)$. Other texts read the subscripts in the order of differentiation instead, so that $f_{xy}$ means $\partial_y(\partial_x f) = \partial^2 f/\partial y\, \partial x$. The two readings agree whenever $f$ is $C^2$, which is why the difference is usually passed over; for a function that is not $C^2$ they can disagree (see the remark).

$F$ is of class $C^k$ on $U$ ($k \ge 1$) if every partial derivative of $F$ of order at most $k$ exists at every point of $U$ and is continuous on $U$; $C^0$ means continuous, and $C^\infty$ (**smooth**) means $C^k$ for every $k$.
:::

:::definition[Differentiability and the total derivative]{provenance=adapted src="lee-2013:App. C, Eqs. (C.1)–(C.2) and Exercise C.1, p. 642"}
With $U \subseteq \mathbb{R}^n$ open and $a \in U$, a map $F : U \to \mathbb{R}^m$ is **differentiable at $a$** if there is a linear map $L : \mathbb{R}^n \to \mathbb{R}^m$ with

$$
\lim_{v \to 0} \frac{\lvert F(a + v) - F(a) - Lv \rvert}{\lvert v \rvert} = 0 ,
$$

the norms being Euclidean and $v$ ranging over $\mathbb{R}^n \setminus \{0\}$ with $a + v \in U$. Such an $L$ is unique; it is written $DF(a)$ and called the **total derivative** of $F$ at $a$. Equivalently $F(a+v) = F(a) + DF(a)v + R(v)$ with $\lvert R(v)\rvert / \lvert v \rvert \to 0$ as $v \to 0$, so $DF(a)$ is the linear map that approximates the increment of $F$ to first order.
:::

:::definition[Jacobian matrix, total differential, directional derivative]{provenance=adapted src="lee-2013:App. C, p. 644 and Eq. (C.6), p. 647; rhb-2006:§5.2, Eqs. (5.5)–(5.6), p. 154 and §6.4.3, p. 205"}
Let $U \subseteq \mathbb{R}^n$ be open and $F : U \to \mathbb{R}^m$.

- The **Jacobian matrix** of $F$ at $a \in U$ is the $m \times n$ matrix $J_F(a) = \bigl(\partial F_i/\partial x_j (a)\bigr)_{i \le m,\ j \le n}$, whenever these partial derivatives exist. If $m = n$, its determinant is the **Jacobian determinant**, also written $\partial(F_1,\dots,F_n)/\partial(x_1,\dots,x_n)$.
- For real-valued $f$ differentiable at $a$, the linear form $Df(a)$ written in the coordinate differentials $dx_j$ (the linear forms $v \mapsto v_j$) is the **total differential** $df = \sum_{j=1}^{n} (\partial f/\partial x_j)\, dx_j$.
- For $v \in \mathbb{R}^n$, the **directional derivative** of $f$ at $a$ along $v$ is $D_v f(a) = \frac{d}{dt} f(a + tv)\big|_{t=0}$, when that one-variable derivative exists. No normalisation of $v$ is assumed.
:::

:::statement[Partial derivatives, continuity and the total derivative]{provenance=adapted src="lee-2013:App. C, Exercise C.1 (p. 642), Exercise C.2(a) (p. 643), Prop. C.8 and Exercise C.9 (p. 646), Prop. C.10 and the display after Eq. (C.6) (p. 647)"}
Let $U \subseteq \mathbb{R}^n$ be open, $F : U \to \mathbb{R}^m$ and $a \in U$.

1. If $F$ is differentiable at $a$, then $DF(a)$ is unique, $F$ is continuous at $a$, every partial derivative $\partial F_i/\partial x_j(a)$ exists, and the matrix of $DF(a)$ in the standard bases is the Jacobian matrix: $DF(a)\,v = J_F(a)\,v$ for all $v \in \mathbb{R}^n$. In particular $D_v f(a) = \sum_{j} v_j\, \partial f/\partial x_j (a)$ for real-valued $f$ differentiable at $a$.
2. If $F$ is of class $C^1$ on $U$ — every $\partial F_i/\partial x_j$ exists at every point of $U$ and is continuous on $U$ — then $F$ is differentiable at every point of $U$.
3. $F$ is differentiable at $a$ if and only if each component $F_1, \dots, F_m$ is differentiable at $a$, and then the rows of $J_F(a)$ are the $J_{F_i}(a)$.

Neither of the following converses holds: existence of all partial derivatives at $a$ does not give differentiability at $a$, and differentiability at every point of $U$ does not give $C^1$ (see the remark).
:::

:::idea{provenance=adapted src="lee-2013:App. C, Prop. C.8, p. 646"}
Everything in part 1 comes from testing the definition of differentiability along a single direction: put $v = te_j$, divide by $t$, and the remainder term dies because it is small compared with $\lvert v\rvert = \lvert t\rvert$. That one substitution gives uniqueness, the existence of the partials and the identification of the matrix at once. Part 2 goes the other way and is the only part that needs work: the increment is split into $n$ steps, each changing one coordinate, so that the one-variable mean value theorem applies to each; continuity of the partials at $a$ is then exactly what makes the $n$ intermediate values collapse onto their values at $a$.
:::

:::proof{provenance=adapted src="lee-2013:App. C, Prop. C.8, p. 646"}
**Part 1.** Let $F$ be differentiable at $a$ with $F(a+v) = F(a) + Lv + R(v)$, $\lvert R(v)\rvert/\lvert v\rvert \to 0$.

*Uniqueness.* Suppose $L$ and $L'$ both satisfy the definition. Fix $u \in \mathbb{R}^n$ with $\lvert u \rvert = 1$ and put $v = tu$ with $t \to 0$. Subtracting the two expansions, $\lvert (L - L')(tu)\rvert/\lvert tu\rvert \to 0$; but by linearity that quotient equals $\lvert (L-L')u \rvert$, a number independent of $t$. So $(L - L')u = 0$ for every unit $u$, hence $L = L'$.

*Continuity.* A linear map between Euclidean spaces satisfies $\lvert Lv\rvert \le C\lvert v\rvert$ for some constant $C$ (take $C$ to be the square root of the sum of the squares of the matrix entries, by the Cauchy-Schwarz inequality). Then $\lvert F(a+v) - F(a)\rvert \le C\lvert v\rvert + \lvert R(v)\rvert \to 0$ as $v \to 0$, which is continuity at $a$.

*The partial derivatives and the matrix.* Put $v = he_j$ with $h$ real and small, so that $\lvert v\rvert = \lvert h\rvert$. Then

$$
\frac{F(a + he_j) - F(a)}{h} = Le_j + \frac{R(he_j)}{h},
\qquad
\left\lvert \frac{R(he_j)}{h}\right\rvert = \frac{\lvert R(he_j)\rvert}{\lvert he_j\rvert} \longrightarrow 0 .
$$

So the difference quotient converges, which means each component limit exists: $\partial F_i/\partial x_j(a)$ exists and equals the $i$th component of $Le_j$. Since $Le_j$ is the $j$th column of the matrix of $L$ in the standard bases, that matrix is $\bigl(\partial F_i/\partial x_j(a)\bigr) = J_F(a)$.

*The directional derivative.* For real-valued $f$ differentiable at $a$ and $v \ne 0$, the same substitution with $v$ in place of $e_j$ gives $\bigl(f(a+tv) - f(a)\bigr)/t = Df(a)v + R(tv)/t$, and $\lvert R(tv)/t\rvert = \lvert v\rvert\,\lvert R(tv)\rvert/\lvert tv\rvert \to 0$. Hence $D_vf(a)$ exists and equals $Df(a)v = \sum_j v_j\,\partial f/\partial x_j(a)$, the last step by the matrix identification. For $v = 0$ both sides are $0$.

**Part 2.** By part 3, proved below, it is enough to treat a real-valued $f$ of class $C^1$. Fix $a \in U$ and $r > 0$ with the closed ball $\lvert v\rvert \le r$ contained in $U$. For $\lvert v \rvert < r$ set $v^{(0)} = 0$ and $v^{(k)} = (v_1,\dots,v_k,0,\dots,0)$, and telescope the increment one coordinate at a time:

$$
f(a+v) - f(a) = \sum_{k=1}^{n}\Bigl[ f\bigl(a + v^{(k)}\bigr) - f\bigl(a + v^{(k-1)}\bigr) \Bigr].
$$

The $k$th bracket changes only the $k$th coordinate, so it is the increment of the one-variable function $t \mapsto f\bigl(a + v^{(k-1)} + te_k\bigr)$ over $0 \le t \le v_k$ (or $v_k \le t \le 0$). That function is differentiable, because $\partial f/\partial x_k$ exists at every point of $U$ — this is where the existence half of the $C^1$ hypothesis is used — so the mean value theorem gives a point $c_k$ on the segment from $a + v^{(k-1)}$ to $a + v^{(k)}$ with

$$
f\bigl(a+v^{(k)}\bigr) - f\bigl(a+v^{(k-1)}\bigr) = v_k\,\frac{\partial f}{\partial x_k}(c_k) .
$$

Every point of that segment has the form $a + (v_1,\dots,v_{k-1},s,0,\dots,0)$ with $\lvert s\rvert \le \lvert v_k\rvert$, so $\lvert c_k - a\rvert \le \lvert v\rvert$ and $c_k$ lies in the ball. Subtracting the candidate linear map,

$$
\Bigl\lvert f(a+v) - f(a) - \sum_{k=1}^{n} v_k \frac{\partial f}{\partial x_k}(a)\Bigr\rvert
= \Bigl\lvert \sum_{k=1}^{n} v_k\Bigl(\frac{\partial f}{\partial x_k}(c_k) - \frac{\partial f}{\partial x_k}(a)\Bigr)\Bigr\rvert
\le \lvert v\rvert \sum_{k=1}^{n}\Bigl\lvert \frac{\partial f}{\partial x_k}(c_k) - \frac{\partial f}{\partial x_k}(a)\Bigr\rvert ,
$$

using $\lvert v_k\rvert \le \lvert v\rvert$. Divide by $\lvert v\rvert$ and let $v \to 0$: each $c_k \to a$ because $\lvert c_k - a\rvert \le \lvert v\rvert$, and each $\partial f/\partial x_k$ is continuous at $a$ — this is where continuity, as opposed to mere existence, is used, and it is the only place — so the sum tends to $0$. Hence $f$ is differentiable at $a$ with $Df(a)v = \sum_k v_k\,\partial f/\partial x_k(a)$.

**Part 3.** The Euclidean norm of a vector dominates the modulus of each of its components and is dominated by their sum. So if $F$ is differentiable at $a$ with remainder $R$, then each component remainder satisfies $\lvert R_i(v)\rvert \le \lvert R(v)\rvert = o(\lvert v\rvert)$, and $F_i$ is differentiable with $DF_i(a)$ the $i$th row. Conversely, if each $F_i$ is differentiable at $a$ with linear map $L_i$ and remainder $R_i$, let $L$ be the linear map whose $i$th row is the matrix of $L_i$; then $\lvert R(v)\rvert \le \sum_i \lvert R_i(v)\rvert$, a sum of $m$ terms each $o(\lvert v\rvert)$, so $F$ is differentiable at $a$ with $DF(a) = L$. In either direction the rows of $J_F(a)$ are the $J_{F_i}(a)$, by the matrix identification in part 1. $\square$
:::

:::statement[Chain rule]{provenance=adapted src="lee-2013:App. C, Prop. C.3, p. 643; lee-2013:App. C, Cor. C.11, p. 647"}
Let $V \subseteq \mathbb{R}^n$ and $W \subseteq \mathbb{R}^m$ be open, $F : V \to W$ and $G : W \to \mathbb{R}^p$.

1. **Total-derivative form.** If $F$ is differentiable at $a \in V$ and $G$ is differentiable at $F(a)$, then $G \circ F$ is differentiable at $a$ and $D(G \circ F)(a) = DG(F(a)) \circ DF(a)$, which in matrices is the product of a $p \times m$ with an $m \times n$ matrix,
   $$
   J_{G \circ F}(a) = J_G\bigl(F(a)\bigr)\, J_F(a).
   $$
2. **Partial-derivative form.** If $F$ is of class $C^1$ on $V$ and $G$ is of class $C^1$ on $W$, then $G \circ F$ is of class $C^1$ on $V$ and, writing $y = F(x)$ for the intermediate variables,
   $$
   \frac{\partial (G_i \circ F)}{\partial x_j}(x) = \sum_{k=1}^{m} \frac{\partial G_i}{\partial y_k}\bigl(F(x)\bigr)\, \frac{\partial F_k}{\partial x_j}(x) \qquad (1 \le i \le p,\ 1 \le j \le n).
   $$
   If $F$ and $G$ are both of class $C^k$ for some $k \ge 1$, or both smooth, so is $G \circ F$. (Lee's Cor. C.11 states the two ends of this, parts (a) and (b): the cases $k = 1$ and smooth. The paragraph after it, p. 647, goes no further than to observe that, where there is differentiability enough to support it, induction on the chain rule yields whatever second- and higher-order formulas one needs; it does not assert that a composite of $C^k$ maps is again $C^k$. The intermediate $k$ is therefore ours, and the proof below establishes it.)
:::

:::idea{provenance=adapted src="lee-2013:App. C, Prop. C.3, pp. 643-644"}
Composing the two first-order expansions is almost the whole proof: substituting the increment of $F$ into the expansion of $G$ produces the wanted linear term $DG(F(a))\,DF(a)\,v$ plus two errors. One is the linear map $DG(F(a))$ applied to the error of $F$, which is small because a linear map cannot inflate a vector by more than a fixed factor. The other is the error of $G$ evaluated at an increment that is itself at most a constant times $\lvert v\rvert$, so it too is small compared with $\lvert v\rvert$. The partial-derivative form is then the matrix product written out entry by entry.
:::

:::proof{provenance=adapted src="lee-2013:App. C, Prop. C.3, pp. 643-644; lee-2013:App. C, Cor. C.11, p. 647"}
**Part 1.** Put $b = F(a)$, $A = DF(a)$ and $B = DG(b)$, and name the two remainders:

$$
F(a+v) = b + Av + r(v), \qquad G(b+w) = G(b) + Bw + s(w),
$$

with $\lvert r(v)\rvert/\lvert v\rvert \to 0$ and $\lvert s(w)\rvert/\lvert w\rvert \to 0$; set $s(0) = 0$, consistent with the definition. Let $w(v) = F(a+v) - b = Av + r(v)$, which is the increment at which $G$ is evaluated. Substituting,

$$
G\bigl(F(a+v)\bigr) - G\bigl(F(a)\bigr) - BAv \;=\; B\,r(v) \; + \; s\bigl(w(v)\bigr) .
$$

*The first error.* As in part 1 of the previous statement, $\lvert By\rvert \le C'\lvert y\rvert$ for a constant $C'$, so $\lvert B\,r(v)\rvert \le C'\lvert r(v)\rvert$, which is $o(\lvert v\rvert)$ because $F$ is differentiable at $a$ — the first hypothesis.

*The second error.* Likewise $\lvert Av\rvert \le C\lvert v\rvert$, and $\lvert r(v)\rvert \le \lvert v\rvert$ once $\lvert v\rvert$ is small enough, so $\lvert w(v)\rvert \le (C+1)\lvert v\rvert$ for small $\lvert v\rvert$. Let $\varepsilon > 0$. Because $G$ is differentiable at $b$ — the second hypothesis — there is $\delta > 0$ with $\lvert s(w)\rvert \le \varepsilon\lvert w\rvert$ whenever $\lvert w\rvert \le \delta$. For $\lvert v\rvert$ small enough that $\lvert w(v)\rvert \le \delta$ we then have $\lvert s(w(v))\rvert \le \varepsilon(C+1)\lvert v\rvert$. Since $\varepsilon$ was arbitrary, $\lvert s(w(v))\rvert/\lvert v\rvert \to 0$.

*Conclusion.* The right-hand side of the display is therefore $o(\lvert v\rvert)$, so $G \circ F$ is differentiable at $a$ with total derivative the composite linear map $BA = DG(F(a)) \circ DF(a)$. Passing to matrices in the standard bases, where composition of linear maps is matrix multiplication, gives $J_{G\circ F}(a) = J_G(F(a))\,J_F(a)$, a $p \times m$ matrix times an $m \times n$ one.

**Part 2.** If $F$ and $G$ are $C^1$, then by part 2 of the previous statement each is differentiable at every point, so part 1 applies at every $x \in V$. Reading off the $(i,j)$ entry of the matrix product, and using part 1 of the previous statement to identify entries of a Jacobian with partial derivatives,

$$
\frac{\partial (G_i\circ F)}{\partial x_j}(x) = \sum_{k=1}^{m}\frac{\partial G_i}{\partial y_k}\bigl(F(x)\bigr)\,\frac{\partial F_k}{\partial x_j}(x) .
$$

Each summand is a product of $\partial G_i/\partial y_k \circ F$, continuous as a composite of continuous maps, with $\partial F_k/\partial x_j$, continuous by hypothesis; a finite sum of products of continuous functions is continuous, so every first partial derivative of $G \circ F$ is continuous and $G\circ F$ is $C^1$.

For higher orders, argue by induction on the order $k$, writing the summation index over the intermediate variables as $\ell$ to keep the two uses of the letter apart. The displayed formula writes each first partial derivative of $G\circ F$ as a sum of products of (i) first partial derivatives $\partial G_i/\partial y_\ell$ of $G$ composed with $F$ and (ii) first partial derivatives $\partial F_\ell/\partial x_j$ of $F$. If $F$ and $G$ are $C^k$ with $k \ge 2$, those factors are $C^{k-1}$ maps — the composite $(\partial G_i/\partial y_\ell)\circ F$ by the induction hypothesis, applied to the $C^{k-1}$ maps $\partial G_i/\partial y_\ell$ and $F$ — and sums and products of $C^{k-1}$ functions are $C^{k-1}$. So the first partial derivatives of $G\circ F$ are $C^{k-1}$, which says that $G\circ F$ is $C^k$. The smooth case is the case of every $k$. $\square$
:::

:::statement[Equality of mixed partial derivatives]{provenance=adapted src="lee-2013:App. C, Prop. C.6 and Cor. C.7, p. 646"}
Let $U \subseteq \mathbb{R}^n$ be open and let $F : U \to \mathbb{R}^m$ be of class $C^2$. Then

$$
\frac{\partial^2 F_i}{\partial x_j \, \partial x_k}(x) = \frac{\partial^2 F_i}{\partial x_k \, \partial x_j}(x)
\qquad (i \le m,\ j, k \le n,\ x \in U).
$$

Lee's Cor. C.7 draws the consequence for smooth $F$. By the same argument a function of class $C^r$ has all its mixed partial derivatives of order at most $r$ independent of the order of differentiation, and a smooth function has this at every order; the extension to finite $r$ is ours, and the proof below gives it. For $n = 2$ this leaves three independent second derivatives: $f_{xx}$, $f_{yy}$ and the common value $f_{xy} = f_{yx}$.
:::

:::idea{provenance=original}
The two mixed partials are two ways of evaluating one object: the second difference of $F$ over a small coordinate rectangle, $\Delta = F(a + se_j + te_k) - F(a+se_j) - F(a+te_k) + F(a)$. Applying the one-variable mean value theorem first in one direction and then in the other turns $\Delta/st$ into a second partial derivative at some interior point of the rectangle, and doing the two directions in the opposite order turns it into the other second partial derivative at another interior point. Shrinking the rectangle sends both interior points to $a$, and continuity of the second partials — the $C^2$ hypothesis — forces the two limits to agree.
:::

:::proof{provenance=original}
It is enough to prove the identity for a real-valued function of two variables. The assertion involves only the component $F_i$ and only the two coordinates $x_j$, $x_k$, so fix $i$ and fix the remaining $n-2$ coordinates at their values at the point $x$; write $f$ for the resulting function of the two free coordinates, which is $C^2$ on an open set because $F$ is, and write $\partial_1$, $\partial_2$ for the two partial derivatives, with $\partial_2\partial_1 f$ meaning $\partial_2(\partial_1 f)$, so that no convention about the order of the indices is needed. The claim is $\partial_1\partial_2 f = \partial_2\partial_1 f$ at the point in question, which we take to be $a$.

Fix $r > 0$ with the square $\lvert s\rvert, \lvert t\rvert \le r$ about $a$ inside the open set, and for $0 < \lvert s\rvert, \lvert t\rvert \le r$ define the second difference

$$
\Delta(s,t) = f(a + se_1 + te_2) - f(a + se_1) - f(a + te_2) + f(a) .
$$

**First order of differentiation.** Put $\varphi(u) = f(a + ue_1 + te_2) - f(a + ue_1)$, so that $\Delta(s,t) = \varphi(s) - \varphi(0)$. Since $\partial_1 f$ exists on the square, $\varphi$ is differentiable with $\varphi'(u) = \partial_1 f(a+ue_1+te_2) - \partial_1 f(a+ue_1)$, and the mean value theorem gives a $\sigma$ between $0$ and $s$ with $\Delta(s,t) = s\,\varphi'(\sigma)$. Now apply the mean value theorem again, to the function $\tau \mapsto \partial_1 f(a + \sigma e_1 + \tau e_2)$, which is differentiable because $\partial_2\partial_1 f$ exists on the square: there is a $\tau$ between $0$ and $t$ with $\varphi'(\sigma) = t\,\partial_2\partial_1 f(a + \sigma e_1 + \tau e_2)$. Hence

$$
\frac{\Delta(s,t)}{st} = \partial_2\partial_1 f(a + \sigma e_1 + \tau e_2), \qquad \lvert \sigma\rvert \le \lvert s\rvert,\ \lvert\tau\rvert \le \lvert t\rvert .
$$

**The other order.** $\Delta(s,t)$ is symmetric under exchanging the roles of the two coordinates together with $s$ and $t$: grouping its four terms the other way, $\Delta(s,t) = \psi(t) - \psi(0)$ with $\psi(u) = f(a + se_1 + ue_2) - f(a + ue_2)$. The same two applications of the mean value theorem, in the reverse order, give points $\sigma'$ between $0$ and $s$ and $\tau'$ between $0$ and $t$ with

$$
\frac{\Delta(s,t)}{st} = \partial_1\partial_2 f(a + \sigma' e_1 + \tau' e_2) .
$$

**Let the rectangle shrink.** Equating the two expressions and letting $(s,t) \to (0,0)$: both arguments converge to $a$, since $\lvert\sigma\rvert,\lvert\sigma'\rvert \le \lvert s\rvert$ and $\lvert\tau\rvert,\lvert\tau'\rvert \le \lvert t\rvert$, and both $\partial_2\partial_1 f$ and $\partial_1\partial_2 f$ are continuous at $a$ by the $C^2$ hypothesis. Therefore $\partial_2\partial_1 f(a) = \partial_1\partial_2 f(a)$. This is the only step that uses continuity, and the remark below shows that the conclusion fails without it.

**Higher orders for a $C^r$ function.** Let $F$ be $C^r$ and consider a mixed partial derivative of order $m \le r$, taken in some order of the indices. Any permutation of $m$ symbols is a product of transpositions of adjacent symbols, so it suffices to show that exchanging two consecutive differentiations leaves the result unchanged. Those two act on a partial derivative of $F$ of order $m - 2 \le r-2$, which is a $C^2$ function because $F$ is $C^r$; the case already proved applies to it, and the exchange is legitimate. The smooth case is the case of every $r$. $\square$
:::

:::note{provenance=original}
**What it means.** Differentiability in several variables is the existence of a *linear* approximation, not the existence of the partial derivatives, which record only what $F$ does along the $n$ coordinate directions. Class $C^1$ is the practical bridge between the two, and it is the hypothesis almost every later theorem uses. Once $F$ is differentiable, everything first-order about it sits in one matrix, and the chain rule is matrix multiplication in the order "outer map first, evaluated at the image point".
:::

:::method[Differentiating a composite map]{provenance=adapted src="lee-2013:App. C, Cor. C.11, p. 647; rhb-2006:§5.2, Eq. (5.8), p. 154"}
To differentiate $x \mapsto G(F(x))$:

1. **Name the stages:** $y = F(x)$ with $x \in V \subseteq \mathbb{R}^n$, $y \in W \subseteq \mathbb{R}^m$, and $z = G(y) \in \mathbb{R}^p$, recording which letters are independent at each stage.
2. **Check that $F$ is $C^1$ near $x$ and $G$ is $C^1$ near $F(x)$**, or at least that each is differentiable at the relevant point.
3. **Multiply in the right order and at the right point:** $J_{G\circ F}(x) = J_G(F(x))\,J_F(x)$, the outer factor evaluated at $y = F(x)$. The $(i,j)$ entry is the sum over intermediate variables of part 2 of the chain rule, one term per path from $x_j$ to $z_i$.
4. **Specialise if the chain is a curve.** With $F = \gamma$ a differentiable curve, $\frac{d}{dt}G(\gamma(t)) = J_G(\gamma(t))\,\gamma'(t)$, and $\gamma(t) = a + tv$ recovers $D_v G(a)$.
5. **Iterate for higher derivatives,** applying step 3 to each first-order expression together with the product rule; once both maps are $C^2$ the order of differentiation does not matter.

**When it fails.** Step 3 needs differentiability, not just the existence of partial derivatives (see the remark). It also fails silently if the outer Jacobian is evaluated at the wrong point, or if a variable is held fixed at one stage and varied at another.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Partial derivatives alone do not give continuity.* Put $f(x,y) = xy/(x^2+y^2)$ for $(x,y) \ne (0,0)$ and $f(0,0) = 0$. Then $f(x,0) = f(0,y) = 0$, so $f_x(0,0) = f_y(0,0) = 0$ exist; but $f = \tfrac12$ on the line $y = x$ away from the origin, so $f$ is not continuous there, hence not differentiable, and any first-order formula built from the two partials alone — the chain rule included — is false for it at the origin.
- *Continuity of the partials in part 2 is sufficient, not necessary.* Let $f(x,y) = (x^2+y^2)\sin(1/(x^2+y^2))$ with $f(0,0) = 0$. Since $\lvert f(v)\rvert \le \lvert v\rvert^2$, $f$ is differentiable at the origin with $Df(0,0) = 0$; but $f_x$ contains $-2x\cos(1/(x^2+y^2))/(x^2+y^2)$, unbounded near the origin, so $f$ is differentiable everywhere without being $C^1$.
- *$C^2$ cannot be weakened to mere existence of the mixed partials.* Let $f(x,y) = xy(x^2-y^2)/(x^2+y^2)$ away from the origin, $f(0,0) = 0$. From the definition $f_x(0,y) = -y$ and $f_y(x,0) = x$, so both mixed second partials exist at the origin yet $\partial^2 f/\partial y\,\partial x(0,0) = -1 \ne 1 = \partial^2 f/\partial x\,\partial y(0,0)$; what fails is their continuity. For such an $f$ the two readings of $f_{xy}$ named in the first definition also disagree.
- *A weaker hypothesis in one source.* Riley, Hobson and Bence (p. 153) assert the equality of mixed partials under a weaker condition than the $C^2$ hypothesis of Lee's Prop. C.6 used above: they ask only for continuity of the second partials at the point concerned. The statement here follows Lee.
- *Notation that differs between fields.* Physics and thermodynamics texts write $(\partial f/\partial x)_y$, listing the held variables as subscripts (Riley, Hobson and Bence, §5.1, p. 152), because one symbol often denotes different functions of different variable sets. Those books call $df = \sum_j (\partial f/\partial x_j)dx_j$ the total differential and $df/dx_1$ along a curve the total derivative; here these are $Df(a)$ in coordinate differentials and the case $n=1$ of the chain rule. The symbol $\partial(x,y,z)/\partial(u,v,w)$ is standard in both fields and returns in :ref[the change-of-variables formula]{to=found.change-of-variables}. A reader turning to Riley, Hobson and Bence (p. 205) should note that they write that determinant with the array transposed relative to the Jacobian matrix defined above: their rows are indexed by $u$, $v$, $w$ and their columns by $x$, $y$, $z$, so their first row is $\partial x/\partial u$, $\partial y/\partial u$, $\partial z/\partial u$, whereas the first row of $J_F$ here is $\partial x/\partial u$, $\partial x/\partial v$, $\partial x/\partial w$. Transposition leaves the determinant unchanged but not the matrix.
- *Smoothness assumed by the source.* Lee's Eq. (C.6) defines the directional derivative for smooth $f$, and the identity $D_v f(a) = \sum_j v_j \partial f/\partial x_j(a) = Df(a)v$ is the display just after it (p. 647). Differentiability of $f$ at the single point $a$ already implies it, by the chain rule applied to $t \mapsto f(a+tv)$, which is the form stated in part 1; the implication does not reverse, since all directional derivatives at $a$ can exist without $f$ being differentiable there.
:::

:::example[A chain rule computed both ways]{provenance=original}
Take

$$
F : \mathbb{R}^2 \to \mathbb{R}^3, \quad F(u,v) = \bigl(u + v^2,\; uv,\; e^{\,u-v}\bigr),
\qquad
G : \mathbb{R}^3 \to \mathbb{R}^2, \quad G(x,y,z) = \bigl(x^2y,\; y + xz\bigr),
$$

and compute $J_{G\circ F}$ at $(u,v) = (1,2)$, following the method.

1. *Stages.* $(u,v) \mapsto (x,y,z) = F(u,v) \mapsto G(x,y,z)$, with $n = 2$, $m = 3$, $p = 2$. At the point, $F(1,2) = (1 + 4,\; 2,\; e^{-1}) = (5,\, 2,\, e^{-1})$, so the outer factor must be evaluated at $(x,y,z) = (5, 2, e^{-1})$ and nowhere else.

2. *Hypotheses.* Every component of $F$ and of $G$ is a polynomial in the coordinates and the exponential, so all partial derivatives of all orders exist and are continuous: both maps are smooth, hence $C^1$, hence differentiable, and part 2 of the chain rule applies.

3. *The two Jacobians.*
   $$
   J_F(u,v) = \begin{pmatrix} 1 & 2v \\ v & u \\ e^{\,u-v} & -e^{\,u-v}\end{pmatrix}
   \ \xrightarrow{(1,2)}\
   \begin{pmatrix} 1 & 4 \\ 2 & 1 \\ e^{-1} & -e^{-1}\end{pmatrix},
   \qquad
   J_G(x,y,z) = \begin{pmatrix} 2xy & x^2 & 0 \\ z & 1 & x \end{pmatrix}
   \ \xrightarrow{(5,2,e^{-1})}\
   \begin{pmatrix} 20 & 25 & 0 \\ e^{-1} & 1 & 5\end{pmatrix}.
   $$

4. *Multiply, outer factor first.*
   $$
   J_{G\circ F}(1,2) = \begin{pmatrix} 20 & 25 & 0 \\ e^{-1} & 1 & 5\end{pmatrix}
   \begin{pmatrix} 1 & 4 \\ 2 & 1 \\ e^{-1} & -e^{-1}\end{pmatrix}
   = \begin{pmatrix} 70 & 105 \\ 2 + 6e^{-1} & 1 - e^{-1} \end{pmatrix}
   = \begin{pmatrix} 70 & 105 \\ 4.207277 & 0.632121\end{pmatrix}.
   $$
   For instance the $(1,1)$ entry is $20\cdot1 + 25\cdot2 + 0\cdot e^{-1} = 70$: one term for each intermediate variable, and the term through $z$ drops out because $\partial G_1/\partial z = 0$.

5. *Check by composing first.* Writing $H = G \circ F$ out,
   $$
   H_1(u,v) = (u+v^2)^2\,uv, \qquad H_2(u,v) = uv + (u+v^2)\,e^{\,u-v},
   $$
   and differentiating directly: $\partial H_1/\partial u = 2(u+v^2)uv + (u+v^2)^2v$, which at $(1,2)$ is $2\cdot5\cdot2 + 25\cdot2 = 70$; $\partial H_1/\partial v = 4v(u+v^2)uv + (u+v^2)^2u = 4\cdot2\cdot5\cdot2 + 25 = 105$; $\partial H_2/\partial u = v + (1 + u + v^2)e^{u-v} = 2 + 6e^{-1}$; and $\partial H_2/\partial v = u + (2v - u - v^2)e^{u-v} = 1 + (4-5)e^{-1} = 1 - e^{-1}$. All four entries agree.

6. *A directional derivative.* By part 1 of the first statement, the derivative of $H_1$ at $(1,2)$ along $w = (1,-1)$ is $J_{H_1}(1,2)\,w = 70 - 105 = -35$. Equivalently $\frac{d}{dt}H_1(1+t, 2-t)\big|_{t=0} = -35$, which is step 4 of the method with the curve $\gamma(t) = (1,2) + t(1,-1)$.

7. *Mixed partials.* $H_2$ is smooth, so the equality of mixed partials applies. Differentiating the expressions in step 5 once more, $\partial^2H_2/\partial u\,\partial v = \partial_u\bigl(u + (2v-u-v^2)e^{u-v}\bigr) = 1 + (2v - u - v^2 - 1)e^{u-v}$, which is $1 - 2e^{-1} = 0.264241$ at $(1,2)$; and $\partial^2H_2/\partial v\,\partial u = \partial_v\bigl(v + (1+u+v^2)e^{u-v}\bigr) = 1 + (2v - 1 - u - v^2)e^{u-v}$, the same expression and the same value $1 - 2e^{-1}$. For a function that is not $C^2$ this agreement fails, as the third bullet of the remark shows.
:::

:::application{provenance=original}
**Maxwell relations in thermodynamics.** The equality of mixed partials is the whole content of the Maxwell relations. The Helmholtz free energy $A(T,V)$ satisfies $dA = -S\,dT - p\,dV$, so $\partial A/\partial T = -S$ and $\partial A/\partial V = -p$ as functions of $(T,V)$. If $A$ is $C^2$ on the region of the phase diagram concerned, then $\partial^2A/\partial T\,\partial V = \partial^2A/\partial V\,\partial T$, that is

$$
\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial p}{\partial T}\right)_V ,
$$

which converts a quantity that cannot be measured directly (the volume dependence of the entropy) into one that can (the pressure rise at fixed volume). Each thermodynamic potential gives one such relation the same way. The $C^2$ hypothesis is not idle: it fails at a phase boundary, where second derivatives of the potential jump or diverge, and the classification of transitions into first and second order is precisely a statement about which derivative of the potential first misbehaves.

**Changing coordinates.** Every curvilinear calculation is the chain rule with $F$ the coordinate map. For plane polars, $F(r,\theta) = (r\cos\theta, r\sin\theta)$ has $J_F = \begin{pmatrix} \cos\theta & -r\sin\theta\\ \sin\theta & r\cos\theta\end{pmatrix}$ with determinant $r$; the chain rule then expresses $\partial/\partial r$ and $\partial/\partial\theta$ in terms of $\partial/\partial x$ and $\partial/\partial y$, and inverting that relation (possible exactly where the Jacobian determinant is non-zero, so not at the origin) is how the Laplacian is transformed. The determinant $r$ reappears as the area element, which is the subject of :ref[the change-of-variables formula]{to=found.change-of-variables}.

**Material derivatives in continuum mechanics.** A quantity $\phi$ carried by a moving fluid is observed along a particle path $t \mapsto x(t)$, so the rate of change seen by the particle is the chain rule applied to $t \mapsto \phi(x(t), t)$: $\frac{D\phi}{Dt} = \partial\phi/\partial t + \sum_j \dot x_j\,\partial\phi/\partial x_j = \phi_t + v\cdot\nabla\phi$. Step 4 of the method, the case of a curve, is exactly this computation, and the warning in the method about which variables are held fixed at which stage is the reason the convective term is so often dropped by mistake: $\partial\phi/\partial t$ at fixed position and $D\phi/Dt$ following the fluid are different functions written with similar symbols.
:::
