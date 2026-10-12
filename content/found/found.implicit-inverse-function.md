---
id: found.implicit-inverse-function
title: Implicit and inverse function theorems
kind: theorem
level: core
summary: A map of class $C^k$ between open subsets of $\mathbb{R}^n$ whose Jacobian determinant is non-zero at a point is a $C^k$ diffeomorphism of some neighbourhood of that point onto an open set, and an equation $\Phi(x,y) = c$ whose partial Jacobian in $y$ is invertible at a solution determines $y$ locally as a $C^k$ function $g$ of $x$, with $Dg(x) = -(\partial\Phi/\partial y)^{-1}(\partial\Phi/\partial x)$ evaluated at $(x, g(x))$.
prereqs: [found.partial-derivatives-chain-rule, found.limits-of-sequences, found.connectedness-homotopy]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. C: Prop. C.4, p. 645 (derivative of an inverse); Lemma C.35 (contraction lemma), p. 657; Thm C.34 with its proof, pp. 657–660 (inverse function theorem); Cor. C.36 with its proof, p. 660 (open map and global diffeomorphism); Thm C.40 with its proof, pp. 661–662 (implicit function theorem)"
    pages: "645, 657-662"
    role: statements of both theorems, the derivative formula for the inverse (Prop. C.4 — the only derivative formula Lee supplies; the one for the implicit function is ours), the local-diffeomorphism corollary, and the proof route for all three
  - work: folland-1999
    loc: "§2.6, p. 74: definition of a $C^1$ diffeomorphism and the $C^1$ inverse function theorem with $D_x(G^{-1}) = [D_{G^{-1}(x)}G]^{-1}$, as used for Thm 2.47"
    pages: "74"
    role: the $C^1$ (rather than smooth) version and the definition of diffeomorphism used in the change-of-variables theorem
  - work: arfken-2013
    loc: "§1.10, p. 73 (the Jacobian $\\partial(x,y)/\\partial(u,v)$ of a change of variables in a double integral); §4.4, Eqs. (4.74)–(4.75), pp. 229–230 (Jacobian matrix and determinant, and the reciprocal relation $J^{-1} = \\partial(u_1,u_2,\\dots)/\\partial(x_1,x_2,\\dots)$)"
    pages: "73, 229-230"
    role: the Jacobian-determinant notation and the reciprocal relation between the Jacobian of a transformation and that of its inverse
---

:::definition[Diffeomorphism and regular point]{provenance=adapted src="folland-1999:§2.6, p. 74; lee-2013:App. C, p. 645"}
Let $\Omega, \Omega' \subseteq \mathbb{R}^n$ be open and let $k \in \{1, 2, \dots\} \cup \{\infty\}$.

- A map $F : \Omega \to \Omega'$ is a **$C^k$ diffeomorphism** if $F$ is bijective, $F$ is of class $C^k$ on $\Omega$, and $F^{-1}$ is of class $C^k$ on $\Omega'$. For $k = \infty$ this is simply a *diffeomorphism*.
- A point $a \in \Omega$ is a **regular point** of a $C^1$ map $F : \Omega \to \mathbb{R}^n$ if $DF(a)$ is invertible, equivalently if the Jacobian determinant $\det J_F(a)$ is non-zero.
- Following Folland, a $C^1$ map $G$ on an open $\Omega \subseteq \mathbb{R}^n$ is called a $C^1$ diffeomorphism when $G$ is injective on $\Omega$ and $D_xG$ is invertible at every $x \in \Omega$; by the second statement below this agrees with the definition above, with $\Omega' = G(\Omega)$.
:::

:::statement[Inverse function theorem]{provenance=adapted src="lee-2013:App. C, Thm C.34, p. 657 and Prop. C.4, p. 645; folland-1999:§2.6, p. 74"}
Let $\Omega \subseteq \mathbb{R}^n$ be open, let $F : \Omega \to \mathbb{R}^n$ be of class $C^k$ for some $k$ with $1 \le k \le \infty$, and let $a \in \Omega$ be a regular point of $F$, that is $\det J_F(a) \neq 0$. Then there exist open sets $\Omega_0$ and $V_0$ with $a \in \Omega_0 \subseteq \Omega$ and $F(a) \in V_0$ such that

1. $F$ restricted to $\Omega_0$ is a bijection onto $V_0$ whose inverse $G = (F|_{\Omega_0})^{-1} : V_0 \to \Omega_0$ is of class $C^k$; that is, $F|_{\Omega_0} : \Omega_0 \to V_0$ is a $C^k$ diffeomorphism, and $\Omega_0$ may be taken connected;
2. for every $y \in V_0$, writing $x = G(y)$,
   $$
   DG(y) = \bigl[DF(x)\bigr]^{-1}, \qquad\text{so}\qquad \det J_{G}(y) = \frac{1}{\det J_F(x)} .
   $$

The map $F$ need not be injective on the whole of $\Omega$, and $\Omega_0$ cannot in general be taken to be $\Omega$ (see the remark).
:::

:::idea[Inverse function theorem]{provenance=adapted src="lee-2013:App. C, proof of Thm C.34, pp. 657–659"}
Normalise so that the point is the origin and the derivative there is the identity. Then $F$ differs from the identity by a map $\varphi$ whose derivative vanishes at the origin, so $\varphi$ moves points by at most half their separation on a small ball. Solving $F(x) = y$ is the same as finding a fixed point of $x \mapsto y + \varphi(x)$, which that bound makes a contraction of a closed ball into itself, so the contraction mapping theorem supplies exactly one solution for each small $y$ — existence and uniqueness of the inverse at one stroke. The same bound shows that $F$ can shrink a distance by no more than a factor of two, $\lvert F(x') - F(x)\rvert \ge \tfrac12\lvert x' - x\rvert$, which makes the inverse Lipschitz with constant $2$; the derivative of the inverse is then read off the difference quotient, and its smoothness class follows from $DG = (DF\circ G)^{-1}$, matrix inversion being smooth.
:::

:::proof[Inverse function theorem]{provenance=adapted src="lee-2013:App. C, Lemma C.35 and the proof of Thm C.34, pp. 657–660"}
**Normalisation.** Let $A = DF(a)$, invertible by hypothesis, and set
$$
\tilde F(v) = A^{-1}\bigl(F(a+v) - F(a)\bigr), \qquad v \in \tilde\Omega = \{v \in \mathbb{R}^n : a + v \in \Omega\} .
$$
$\tilde\Omega$ is open and contains $0$; $\tilde F$ is $C^k$ on it, being $F$ composed on both sides with affine maps; $\tilde F(0) = 0$; and $D\tilde F(0) = A^{-1}A = I$ by the chain rule. The maps $v \mapsto a+v$ and $w \mapsto F(a) + Aw$ are $C^\infty$ bijections of $\mathbb{R}^n$ with $C^\infty$ inverses, so if $\tilde F$ restricted to an open connected $\tilde\Omega_0 \ni 0$ is a $C^k$ diffeomorphism onto an open $\tilde V_0 \ni 0$, then $F$ restricted to $\Omega_0 = a + \tilde\Omega_0$ is a $C^k$ diffeomorphism onto $V_0 = F(a) + A\tilde V_0$, and $\Omega_0$, $V_0$ are open with $\Omega_0$ connected. Part 1 for $F$ therefore follows from part 1 for $\tilde F$, and we may assume $a = 0$, $F(0) = 0$, $DF(0) = I$.

**Step 1: $F$ differs from the identity by a $\tfrac12$-contraction.** Put $\varphi(x) = x - F(x)$ on $\Omega$, so that $\varphi$ is $C^k$ with $D\varphi(0) = I - I = 0$. Because $F$ is of class $C^1$ — this is where continuity of the derivative, and not merely its existence, is used — the partial derivatives of $\varphi$ are continuous, so there is $r > 0$ with $\overline{B_r(0)} \subseteq \Omega$ and
$$
\Bigl\lvert \frac{\partial \varphi_j}{\partial x_k}(x) \Bigr\rvert \le \frac{1}{2n} \quad \text{for all } j,k \text{ and all } \lvert x \rvert \le r .
$$
The closed ball is convex, so for $x, x' \in \overline{B_r(0)}$ the fundamental theorem of calculus along the segment between them gives, for each component,
$$
\varphi_j(x') - \varphi_j(x) = \int_0^1 \sum_{k=1}^n \frac{\partial \varphi_j}{\partial x_k}\bigl(x + t(x'-x)\bigr)\,(x'_k - x_k)\, dt ,
$$
whence $\lvert \varphi_j(x') - \varphi_j(x)\rvert \le \frac{1}{2n}\sum_k \lvert x'_k - x_k\rvert \le \frac{1}{2\sqrt n}\lvert x' - x\rvert$ by the Cauchy–Schwarz inequality. Squaring and summing over the $n$ components,
$$
\lvert \varphi(x') - \varphi(x) \rvert \le \tfrac12 \lvert x' - x\rvert \qquad (x, x' \in \overline{B_r(0)}). \tag{1}
$$

**Step 2: $F$ expands distances, so it is injective there.** For $x, x' \in \overline{B_r(0)}$ write $x' - x = \bigl(F(x') - F(x)\bigr) + \bigl(\varphi(x') - \varphi(x)\bigr)$. The triangle inequality and $(1)$ give $\lvert x'-x\rvert \le \lvert F(x')-F(x)\rvert + \tfrac12\lvert x'-x\rvert$, that is
$$
\lvert F(x') - F(x)\rvert \ge \tfrac12 \lvert x' - x\rvert . \tag{2}
$$
In particular $F(x') = F(x)$ forces $x' = x$.

**Step 3: each $y$ with $\lvert y \rvert < r/2$ has exactly one preimage.** Fix such a $y$ and put $T_y(x) = y + \varphi(x)$ on $K = \overline{B_r(0)}$; then $T_y(x) = x$ if and only if $F(x) = y$. Taking $x = 0$ in $(1)$ and using $\varphi(0) = 0$ gives $\lvert \varphi(x)\rvert \le \tfrac12\lvert x\rvert$, so for $x \in K$
$$
\lvert T_y(x) \rvert \le \lvert y \rvert + \tfrac12\lvert x \rvert < \tfrac{r}{2} + \tfrac{r}{2} = r ,
$$
and $T_y$ maps $K$ into $B_r(0) \subseteq K$. By $(1)$, $\lvert T_y(x') - T_y(x)\rvert = \lvert \varphi(x') - \varphi(x)\rvert \le \tfrac12 \lvert x' - x\rvert$ for $x, x' \in K$, so $T_y$ is a contraction of constant $\tfrac12$ on the non-empty closed bounded set $K$. That such a map has exactly one fixed point is the :ref[contraction mapping theorem]{to=funcan.banach-fixed-point}; since that unit comes later in the handbook, here is the one instance needed. Set $x_0 = 0$ and $x_{m+1} = T_y(x_m)$, all in $K$. The contraction bound gives $\lvert x_{m+1} - x_m \rvert \le 2^{-m}\lvert x_1 - x_0\rvert$ by induction on $m$, so $\sum_{m \ge 0}\lvert x_{m+1}-x_m\rvert$ converges and the sequence is Cauchy. It therefore converges in $\mathbb{R}^n$, one coordinate at a time: $\lvert (x_m)_j - (x_{m'})_j\rvert \le \lvert x_m - x_{m'}\rvert$ makes each coordinate sequence Cauchy in $\mathbb{R}$, hence convergent by the Cauchy criterion of :ref[limits of sequences]{to=found.limits-of-sequences}, and if $x$ is the vector of the $n$ limits then $\lvert x_m - x\rvert \le \sum_{j}\lvert (x_m)_j - x_j\rvert \to 0$. The limit lies in $K$ because $K$ is closed; boundedness of $K$ plays no part in this step. Letting $m \to \infty$ in $x_{m+1} = T_y(x_m)$, with $T_y$ continuous by the same bound, gives $T_y(x) = x$. If $x' \in K$ also satisfies $T_y(x') = x'$ then $\lvert x - x'\rvert \le \tfrac12\lvert x - x'\rvert$, forcing $x = x'$. Finally the displayed inequality shows $\lvert x \rvert = \lvert T_y(x)\rvert < r$, so $x \in B_r(0)$.

**Step 4: the neighbourhoods, and continuity of the inverse.** Put
$$
V_0 = B_{r/2}(0), \qquad \Omega_0 = B_r(0) \cap F^{-1}(V_0),
$$
the latter open because $F$ is continuous, and both containing $0$ because $F(0) = 0$. By step 3, $F$ maps $\Omega_0$ onto $V_0$ (every $y \in V_0$ has a preimage in $B_r(0)$, which then lies in $\Omega_0$), and by step 2 it does so injectively. Let $G : V_0 \to \Omega_0$ be the inverse. Substituting $x = G(y)$ and $x' = G(y')$ in $(2)$,
$$
\lvert G(y') - G(y) \rvert \le 2 \lvert y' - y \rvert , \tag{3}
$$
so $G$ is continuous and $F|_{\Omega_0}$ is a homeomorphism onto $V_0$. Finally $\Omega_0$ is connected. The ball $V_0$ is: it is the union of the segments joining its centre to its points; each such segment is the image of an interval under a continuous map, so it is connected by items 1 and 2 of "Properties of connected spaces" in :ref[connectedness and simple connectivity]{to=found.connectedness-homotopy}; and they all contain the centre, so item 4 of that statement glues them into one connected set. Item 2 of the same statement — connectedness transported through a continuous map — then makes the image $\Omega_0 = G(V_0)$ connected.

**Step 5: $G$ is differentiable, with $DG(y) = [DF(G(y))]^{-1}$.** First, $DF(x)$ is invertible at every $x \in \overline{B_r(0)}$: if $DF(x)v = 0$ then $v = D\varphi(x)v$, and the bound of step 1 with the same two inequalities as in $(1)$ gives $\lvert D\varphi(x)v\rvert \le \tfrac12 \lvert v\rvert$, so $\lvert v \rvert \le \tfrac12\lvert v\rvert$ and $v = 0$. Now fix $y \in V_0$, put $x = G(y)$ and $L = DF(x)$. For $y' \in V_0$ with $y' \neq y$, put $x' = G(y')$, which differs from $x$ because $G$ is injective; using $y' - y = F(x') - F(x)$,
$$
\frac{G(y') - G(y) - L^{-1}(y'-y)}{\lvert y' - y\rvert} = - L^{-1}\!\left( \frac{F(x') - F(x) - L(x'-x)}{\lvert x' - x\rvert} \right) \frac{\lvert x' - x\rvert}{\lvert y' - y\rvert} .
$$
The last factor is at most $2$, by $(3)$. The vector in brackets tends to $0$ as $x' \to x$, because $F$ is differentiable at $x$ with derivative $L$; and $x' \to x$ as $y' \to y$, again by $(3)$. Since the linear map $L^{-1}$ is bounded, the whole right-hand side tends to $0$ as $y' \to y$. So $G$ is differentiable at $y$ with $DG(y) = L^{-1}$.

**Step 6: $G$ is of class $C^k$.** By step 5, $DG = \iota \circ DF \circ G$, where $\iota(B) = B^{-1}$ on the open set of invertible matrices. Cramer's rule expresses each entry of $B^{-1}$ as a polynomial in the entries of $B$ divided by $\det B \neq 0$, so $\iota$ is $C^\infty$. Now induct on the order. $G$ is continuous (step 4) and $DF$ is continuous ($F$ is $C^1$), so $DG$ is continuous, that is $G$ is $C^1$. Suppose $G$ is $C^j$ with $1 \le j \le k-1$; then $DF$ is $C^{k-1}$ and hence $C^j$, so the composition $DG = \iota\circ DF\circ G$ is $C^j$, which says that $G$ is $C^{j+1}$. For finite $k$ this ends at $G \in C^k$; for $k = \infty$ it gives $G \in C^j$ for every finite $j$, that is $G \in C^\infty$. This proves part 1.

**Part 2.** On $\Omega_0$ we have $G \circ F = \operatorname{id}$ with both maps differentiable, so the :ref[chain rule]{to=found.partial-derivatives-chain-rule} gives $DG(F(x))\,DF(x) = I$ for every $x \in \Omega_0$. Hence $DF(x)$ is invertible and $DG(y) = [DF(x)]^{-1}$ at $y = F(x)$; taking determinants, $\det J_G(y)\,\det J_F(x) = 1$. $\square$

Lee's proof is the model for steps 1–6. He states the theorem for smooth maps, normalises in two stages and quotes a general Lipschitz estimate for the bound $(1)$; here the normalisation is a single composition, $(1)$ is derived on the spot, the one instance of his contraction lemma (Lemma C.35) that is needed is proved in place rather than quoted, and step 6 keeps track of a finite differentiability class.
:::

:::statement[Local diffeomorphism and openness]{provenance=adapted src="lee-2013:App. C, Cor. C.36, p. 660"}
Let $\Omega \subseteq \mathbb{R}^n$ be open and let $F : \Omega \to \mathbb{R}^n$ be of class $C^k$, $1 \le k \le \infty$, with $\det J_F(x) \neq 0$ for **every** $x \in \Omega$. Then

1. $F$ is an open map: $F(W)$ is open in $\mathbb{R}^n$ for every open $W \subseteq \Omega$; in particular $F(\Omega)$ is open;
2. if in addition $F$ is injective on $\Omega$, then $F : \Omega \to F(\Omega)$ is a $C^k$ diffeomorphism.
:::

:::idea[Local diffeomorphism and openness]{provenance=original}
The hypothesis is the one of the inverse function theorem, holding at every point at once. So around the image of each point there is a whole open set of image points, which is openness; and smoothness of an inverse is a local property, so once injectivity makes the local inverses fit together into one map, that map inherits their smoothness.
:::

:::proof[Local diffeomorphism and openness]{provenance=adapted src="lee-2013:App. C, Cor. C.36 and its proof, p. 660"}
1. *Openness.* Let $W \subseteq \Omega$ be open and let $y \in F(W)$, say $y = F(x)$ with $x \in W$. The restriction $F|_W$ is $C^k$ on the open set $W$ and $\det J_F(x) \ne 0$, so the inverse function theorem applied to $F|_W$ at $x$ produces open sets $\Omega_0 \subseteq W$ containing $x$ and $V_0$ containing $y$ with $F(\Omega_0) = V_0$. Then $y \in V_0 \subseteq F(W)$ with $V_0$ open, and as $y$ was arbitrary, $F(W)$ is open. Taking $W = \Omega$ gives the last clause.
2. *Global inverse.* Suppose $F$ is also injective on $\Omega$. Then $F : \Omega \to F(\Omega)$ is a bijection, so a map $G : F(\Omega) \to \Omega$ inverting it exists for set-theoretic reasons, and $F(\Omega)$ is open by part 1. Fix $y = F(x) \in F(\Omega)$ and take $\Omega_0 \ni x$, $V_0 \ni y$ from the inverse function theorem at $x$, with $(F|_{\Omega_0})^{-1} : V_0 \to \Omega_0$ of class $C^k$. For $z \in V_0$, both $G(z)$ and $(F|_{\Omega_0})^{-1}(z)$ are preimages of $z$ under $F$, and $F$ is injective on all of $\Omega$, so the two agree. Hence $G$ coincides with a $C^k$ map on a neighbourhood of each point of $F(\Omega)$, so $G$ is $C^k$, and $F : \Omega \to F(\Omega)$ is a $C^k$ diffeomorphism. $\square$

Injectivity is used only in part 2, and only to identify the local inverses with each other; nothing in part 1 needs it.
:::

:::statement[Implicit function theorem]{provenance=adapted src="lee-2013:App. C, Thm C.40, pp. 661–662"}
Write points of $\mathbb{R}^n \times \mathbb{R}^p$ as $(x,y)$ with $x = (x_1, \dots, x_n)$ and $y = (y_1, \dots, y_p)$. Let $U \subseteq \mathbb{R}^n \times \mathbb{R}^p$ be open, let $\Phi : U \to \mathbb{R}^p$ be of class $C^k$ for some $k$ with $1 \le k \le \infty$, let $(a,b) \in U$ and put $c = \Phi(a,b)$. Suppose the $p \times p$ partial Jacobian in the $y$ variables,

$$
\frac{\partial \Phi}{\partial y}(a,b) = \left( \frac{\partial \Phi_i}{\partial y_j}(a,b) \right)_{i,j \le p},
$$

is invertible. Then there exist open sets $V_0 \subseteq \mathbb{R}^n$ with $a \in V_0$ and $W_0 \subseteq \mathbb{R}^p$ with $b \in W_0$, with $V_0 \times W_0 \subseteq U$, and a map $g : V_0 \to W_0$ of class $C^k$, such that

$$
\bigl\{ (x,y) \in V_0 \times W_0 \;:\; \Phi(x,y) = c \bigr\} = \bigl\{ (x, g(x)) \;:\; x \in V_0 \bigr\} ;
$$

that is, for $(x,y) \in V_0 \times W_0$ one has $\Phi(x,y) = c$ if and only if $y = g(x)$. In particular $g(a) = b$, and $g$ is the only map $V_0 \to W_0$ with this property.

Moreover $V_0$ may be taken small enough that $\partial\Phi/\partial y\bigl(x, g(x)\bigr)$ is invertible at every $x \in V_0$ — replacing $V_0$ by a smaller open set containing $a$ leaves the displayed equality of sets intact, since it merely restricts both sides. With $V_0$ so chosen, for every $x \in V_0$

$$
\frac{\partial \Phi}{\partial x}\bigl(x, g(x)\bigr) + \frac{\partial \Phi}{\partial y}\bigl(x, g(x)\bigr)\, Dg(x) = 0,
\qquad
Dg(x) = - \left[ \frac{\partial \Phi}{\partial y}\bigl(x, g(x)\bigr) \right]^{-1} \frac{\partial \Phi}{\partial x}\bigl(x, g(x)\bigr),
$$

where $\partial \Phi/\partial x$ is the $p \times n$ block of derivatives in the $x$ variables. For $n = p = 1$ this is the familiar $g'(x) = -\Phi_x/\Phi_y$, both evaluated at $(x, g(x))$. What is asserted is invertibility *along the graph* of $g$, which is all that is used; invertibility throughout $V_0 \times W_0$ is not claimed.

Of this, Lee's Thm C.40 supplies the two neighbourhoods, the $C^k$ map $g$ and the equality of the level set with its graph. The uniqueness of $g$, the refinement of $V_0$ just described and the derivative formula are ours, obtained from the chain rule in steps 6–8 of the proof below.
:::

:::idea[Implicit function theorem]{provenance=adapted src="lee-2013:App. C, proof of Thm C.40, pp. 661–662"}
Make the equation part of a change of variables. The map $\Psi(x,y) = (x, \Phi(x,y))$ leaves the $x$ coordinates untouched and replaces $y$ by the value of $\Phi$, so its derivative is block triangular with diagonal blocks $I_n$ and $\partial\Phi/\partial y$ — invertible exactly under the hypothesis. The inverse function theorem then makes $\Psi$ a $C^k$ diffeomorphism of a neighbourhood of $(a,b)$. Its inverse must return $x$ in the first slot, so it has the form $(x,z) \mapsto (x, \beta(x,z))$; freezing the second argument at the level $c$ turns $\beta$ into the wanted function $g$, and the level set becomes its graph.
:::

:::proof[Implicit function theorem]{provenance=adapted src="lee-2013:App. C, proof of Thm C.40, pp. 661–662"}
1. *A map with invertible derivative.* Define $\Psi : U \to \mathbb{R}^n\times\mathbb{R}^p$ by $\Psi(x,y) = \bigl(x, \Phi(x,y)\bigr)$. It is of class $C^k$, since $\Phi$ is and the first block is the identity, and in the splitting of the coordinates its derivative is
   $$
   D\Psi(x,y) = \begin{pmatrix} I_n & 0 \\ \partial\Phi/\partial x & \partial\Phi/\partial y \end{pmatrix} ,
   $$
   block lower triangular, so $\det D\Psi(x,y) = \det\bigl(\partial\Phi/\partial y\,(x,y)\bigr)$. At $(a,b)$ that determinant is non-zero: this is the hypothesis, and it is the only place it is used.
2. *Invert it locally, on a product.* By the inverse function theorem there are open sets $\Omega_1 \subseteq U$ containing $(a,b)$ and $Y_1$ containing $\Psi(a,b) = (a,c)$ with $\Psi|_{\Omega_1} : \Omega_1 \to Y_1$ a $C^k$ diffeomorphism. Choose open $V \ni a$ in $\mathbb{R}^n$ and $W_0 \ni b$ in $\mathbb{R}^p$ with $V\times W_0 \subseteq \Omega_1$, and set $\Omega_0 = V\times W_0$ and $Y_0 = \Psi(\Omega_0)$. Since $\Psi|_{\Omega_1}$ is a homeomorphism onto the open set $Y_1$, the set $Y_0$ is open, it contains $(a,c)$, and $\Psi|_{\Omega_0} : \Omega_0 \to Y_0$ is a $C^k$ diffeomorphism. Write its inverse as
   $$
   \bigl(\Psi|_{\Omega_0}\bigr)^{-1}(x,z) = \bigl(\alpha(x,z),\, \beta(x,z)\bigr), \qquad (x,z) \in Y_0,
   $$
   with $\alpha$ and $\beta$ of class $C^k$ (they are the two blocks of components of a $C^k$ map).
3. *The inverse returns $x$ unchanged.* For $(x,z) \in Y_0$,
   $$
   (x,z) = \Psi\bigl(\alpha(x,z), \beta(x,z)\bigr) = \bigl(\alpha(x,z),\, \Phi(\alpha(x,z), \beta(x,z))\bigr) .
   $$
   Comparing first components gives $\alpha(x,z) = x$; substituting that and comparing second components gives
   $$
   \Phi\bigl(x, \beta(x,z)\bigr) = z \qquad \text{for all } (x,z) \in Y_0. \tag{$*$}
   $$
4. *Definition of $g$.* Put $V_0 = \{x \in V : (x,c) \in Y_0\}$, which is open because $x \mapsto (x,c)$ is continuous and $Y_0$ is open, and which contains $a$ because $(a,c) \in Y_0$. Define $g : V_0 \to \mathbb{R}^p$ by $g(x) = \beta(x,c)$; it is $C^k$, being $\beta$ composed with an affine map. For $x \in V_0$ the point $(x, g(x))$ is $(\Psi|_{\Omega_0})^{-1}(x,c) \in \Omega_0 = V\times W_0$, so $g(x) \in W_0$: thus $g$ maps $V_0$ into $W_0$, as claimed. Also $V_0\times W_0 \subseteq V\times W_0 \subseteq U$, and $g(a) = b$ because $(\Psi|_{\Omega_0})^{-1}(a,c) = (a,b)$.
5. *The level set is the graph of $g$.* Let $(x,y) \in V_0\times W_0$. If $y = g(x)$ then $\Phi(x,y) = \Phi(x,\beta(x,c)) = c$ by $(*)$. Conversely, suppose $\Phi(x,y) = c$. Then $\Psi(x,y) = (x,c)$, and $(x,y) \in \Omega_0$, so applying $(\Psi|_{\Omega_0})^{-1}$ to both sides gives $(x,y) = (x, \beta(x,c)) = (x, g(x))$, that is $y = g(x)$. The two sets displayed in the statement are therefore equal.
6. *Uniqueness.* Any $\tilde g : V_0 \to W_0$ whose graph is that same set has $\tilde g(x) = g(x)$ for every $x \in V_0$, since the set meets each $\{x\}\times W_0$ in the single point $(x,g(x))$.
7. *Shrinking $V_0$ to make $\partial\Phi/\partial y$ invertible along the graph.* Consider $d(x) = \det\bigl(\partial\Phi/\partial y(x, g(x))\bigr)$ on $V_0$. Each entry of $\partial\Phi/\partial y$ is continuous, because $\Phi$ is of class $C^k$ with $k \ge 1$; $g$ is continuous by step 4; and the determinant is a polynomial in the entries. So $d$ is continuous. Its value at $x = a$ is $\det\bigl(\partial\Phi/\partial y(a,b)\bigr) \neq 0$ — the hypothesis again. Hence $V_0' = \{x \in V_0 : d(x) \neq 0\} = d^{-1}\bigl(\mathbb{R}\setminus\{0\}\bigr)$ is open and contains $a$. Replace $V_0$ by $V_0'$: the set equality of step 5 restricts to both sides, $g$ restricted to $V_0'$ is still $C^k$ with values in $W_0$, and step 6 applies verbatim. This secures invertibility only *along the graph*; to have it at every point of a product neighbourhood one would have to shrink $W_0$ as well and then re-shrink $V_0$ to keep $g$ inside the smaller $W_0$, and nothing below needs that.
8. *The derivative of $g$.* On $V_0$ the identity $\Phi\bigl(x, g(x)\bigr) = c$ holds, by step 5, with $\Phi$ and $g$ both of class $C^k$, $k \ge 1$. The map $x \mapsto (x, g(x))$ has for derivative the $(n+p)\times n$ matrix whose top block is $I_n$ and whose bottom block is $Dg(x)$. The composite $x \mapsto \Phi(x, g(x))$ is constant, so its derivative vanishes, and the :ref[chain rule]{to=found.partial-derivatives-chain-rule} computes that derivative as $\partial\Phi/\partial x$ times the top block plus $\partial\Phi/\partial y$ times the bottom block:
   $$
   \frac{\partial \Phi}{\partial x}\bigl(x, g(x)\bigr) + \frac{\partial \Phi}{\partial y}\bigl(x, g(x)\bigr)\, Dg(x) = 0 .
   $$
   By step 7 the $p \times p$ matrix $\partial\Phi/\partial y(x,g(x))$ is invertible for every $x \in V_0$, so multiplying on the left by its inverse and rearranging gives $Dg(x) = -\bigl[\partial\Phi/\partial y(x,g(x))\bigr]^{-1}\,\partial\Phi/\partial x(x,g(x))$, the formula of the statement. $\square$

Steps 1–5 are Lee's route: the map $\Psi$, its block-triangular derivative, the local inverse and the identification of the level set with a graph. Steps 6–8 are ours; Thm C.40 states none of the uniqueness of $g$, the refinement of $V_0$, or the derivative formula.
:::

:::note{provenance=original}
**What it means.** Both theorems say the same thing twice: where the linear approximation of a map is invertible, the map itself behaves like that linear approximation — but only nearby. The inverse function theorem reads this as "$F$ can be undone locally"; the implicit function theorem reads it as "the equation $\Phi(x,y) = c$ can be solved locally for $y$, and the solution inherits the smoothness of $\Phi$". Neither gives a formula for the solution, only its existence, its uniqueness in a box, and its derivative. Each follows from the other: Lee's route to the implicit function theorem applies the inverse function theorem to $(x,y) \mapsto (x, \Phi(x,y))$, whose Jacobian is block triangular with diagonal blocks $I_n$ and $\partial \Phi/\partial y$, and the inverse function theorem itself is usually proved by a contraction-mapping argument.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *Local, never global.* Let $F(x,y) = (e^x \cos y,\; e^x \sin y)$ on $\Omega = \mathbb{R}^2$. Its Jacobian determinant is $e^{2x}$, non-zero everywhere, so $F$ is a local diffeomorphism at every point and an open map; but $F(x, y + 2\pi) = F(x,y)$, so $F$ is not injective. A non-vanishing Jacobian determinant on a connected open set therefore does not give global invertibility; injectivity is an extra hypothesis, as in part 2 of the local-diffeomorphism statement.
- *Class $C^1$ cannot be weakened to differentiability.* Let $f(0) = 0$ and $f(x) = x + 2x^2 \sin(1/x)$ for $x \neq 0$. Then $f$ is differentiable on $\mathbb{R}$ with $f'(0) = \lim_{h\to 0}(1 + 2h\sin(1/h)) = 1 \ne 0$, while for $x \neq 0$
  $$
  f'(x) = 1 + 4x \sin(1/x) - 2 \cos(1/x),
  $$
  which equals $-1$ at every $x = 1/(2\pi j)$ and $3$ at every $x = 1/((2j+1)\pi)$, $j \in \mathbb{N}$. So $f'$ takes both signs in every neighbourhood of $0$. That destroys injectivity near $0$, by the following argument. Given a neighbourhood of $0$, choose $j$ so large that it contains the interval $I = [l, r]$ with $l = 1/((2j+1)\pi)$ and $r = 1/(2\pi j)$, where indeed $l < r$ because $2j+1 > 2j$. Then $f'(l) = 3 > 0$ and $f'(r) = -1 < 0$, so $f$ exceeds $f(l)$ just to the right of $l$ and exceeds $f(r)$ just to the left of $r$: neither endpoint is where $f$ attains its maximum over the compact interval $I$. That maximum is therefore attained at an interior point $\xi$, with $f(\xi) > f(l)$ and $f(\xi) > f(r)$. Pick $v$ with $\max\{f(l), f(r)\} < v < f(\xi)$. The intermediate value theorem, applied to the continuous $f$ on $[l,\xi]$ and then on $[\xi, r]$, produces one point of each interval at which $f = v$; neither of them is $\xi$, since $f(\xi) > v$, so one lies strictly left of $\xi$ and the other strictly right of it, and the two are distinct. So $f$ is injective on no neighbourhood of $0$: the conclusion fails although $Df(0)$ is invertible. What is missing is the continuity of $f'$ at $0$.
- *The invertible block decides which variables are solved for.* For $\Phi(x,y) = x^2 + y^2 - 1$ on $\mathbb{R}^2$, $\partial \Phi/\partial y = 2y$ is invertible at every point of the unit circle except $(\pm 1, 0)$; near those two points the circle is not the graph of a function of $x$, but $\partial \Phi/\partial x = 2x$ is invertible there, so it is the graph of a function of $y$. The hypothesis is on one block of the Jacobian, not on the whole of it.
- *Existence is not a formula.* For $\Phi(x,y) = y^5 + y - x$ one has $\partial \Phi/\partial y = 5y^4 + 1 \ge 1$ everywhere, so near each solution the theorem gives $y$ as a smooth function of $x$, with $g'(x) = 1/(5g(x)^4+1)$. That these local solutions are pieces of a single smooth function on the whole of $\mathbb{R}$ is a further, non-local fact, which the theorem cannot supply: it holds because $y \mapsto y^5+y$ has derivative $\ge 1$, so is strictly increasing, and tends to $\pm\infty$, so is a bijection of $\mathbb{R}$ onto $\mathbb{R}$ — whence every $x$ has exactly one solution $g(x)$, and the local solutions, being solutions, agree with it. But $g$ is given by no formula in radicals, since $y^5 + y - x$ has Galois group $S_5$ over $\mathbb{Q}(x)$ and so is not solvable by radicals. The derivative formula is still fully usable, which is the normal way these theorems are applied.
- *Smoothness class in the sources.* Lee states both theorems for smooth maps; Folland uses and states the $C^1$ version, since that is what the :ref[change-of-variables theorem]{to=found.change-of-variables} needs. The versions above are for $C^k$ with $1 \le k \le \infty$, covering both: the inverse is obtained first as a continuous map, then shown differentiable, and its derivative is a composition of $F^{-1}$, $x \mapsto DF(x)$ and matrix inversion, so each extra degree of smoothness of $F$ gives one more for $F^{-1}$.
- *Why the Jacobian determinant.* The hypothesis is the invertibility of the linear map $DF(a)$, which exists as a total derivative because $F$ is $C^1$ (:ref[partial derivatives and the chain rule]{to=found.partial-derivatives-chain-rule}). Arfken's reciprocal relation $\partial(x_1,x_2,\dots)/\partial(u_1,u_2,\dots) = [\partial(u_1,u_2,\dots)/\partial(x_1,x_2,\dots)]^{-1}$ between the Jacobian of a change of variables and that of its inverse (Eq. (4.75), p. 230) is exactly the determinant identity of part 2 of the inverse function theorem.
:::

:::example[Solving a system implicitly, and inverting a map locally]{provenance=original}
**(a) Two equations, two unknowns, one parameter.** Take $n = 1$, $p = 2$ and
$$
\Phi(x, y_1, y_2) = \bigl( y_1^3 + y_2 - 2x, \;\; y_1 + y_2^2 - 2x \bigr)
$$
on $U = \mathbb{R}^3$, a polynomial map and so of class $C^\infty$. At $(a,b) = \bigl(1,(1,1)\bigr)$ both components vanish: $1 + 1 - 2 = 0$ twice. So $c = \Phi(a,b) = (0,0)$.

*Check the hypothesis.*
$$
\frac{\partial\Phi}{\partial y} = \begin{pmatrix} 3y_1^2 & 1 \\ 1 & 2y_2 \end{pmatrix}
\quad\Longrightarrow\quad
\frac{\partial\Phi}{\partial y}(a,b) = \begin{pmatrix} 3 & 1 \\ 1 & 2\end{pmatrix}, \qquad \det = 6 - 1 = 5 \neq 0 .
$$
The theorem therefore gives a neighbourhood $V_0$ of $x = 1$ and a $C^\infty$ map $g = (g_1,g_2)$ on it with $g(1) = (1,1)$, such that for $(x,y)$ in a box about $\bigl(1,(1,1)\bigr)$ the system $y_1^3 + y_2 = 2x$, $y_1 + y_2^2 = 2x$ holds exactly when $y = g(x)$.

*Its derivative.* With $\partial\Phi/\partial x = (-2,-2)^{\mathsf T}$ and
$$
\begin{pmatrix} 3 & 1\\ 1 & 2\end{pmatrix}^{-1} = \frac{1}{5}\begin{pmatrix} 2 & -1 \\ -1 & 3\end{pmatrix},
$$
the formula $Dg = -[\partial\Phi/\partial y]^{-1}\,[\partial\Phi/\partial x]$ gives
$$
Dg(1) = -\frac{1}{5}\begin{pmatrix} 2 & -1\\ -1 & 3\end{pmatrix}\begin{pmatrix}-2\\-2\end{pmatrix} = \frac{1}{5}\begin{pmatrix}2\\4\end{pmatrix} = \begin{pmatrix} 2/5 \\ 4/5\end{pmatrix},
$$
so $g_1'(1) = 0.4$ and $g_2'(1) = 0.8$.

*Numerical check.* Solving the system at $x = 1.01$ by Newton's method from $(1,1)$ gives $y \approx (1.0039935, 1.0079715)$, and the difference quotients $(y_i - 1)/0.01$ are $0.39935$ and $0.79715$ — the predicted slopes $0.4$ and $0.8$ to the accuracy expected of a first-order approximation over a step of $0.01$.

**(b) A map that is locally but not globally invertible.** Let
$$
F(x,y) = \bigl(x^2 - y^2,\; xy\bigr), \qquad
J_F(x,y) = \begin{pmatrix} 2x & -2y \\ y & x\end{pmatrix}, \qquad \det J_F = 2x^2 + 2y^2 .
$$
The determinant is non-zero except at the origin, so on $\Omega = \mathbb{R}^2\setminus\{(0,0)\}$ the local-diffeomorphism statement applies: $F$ is an open map there and a $C^\infty$ diffeomorphism of any open set on which it happens to be injective. It is not injective on $\Omega$, because $F(-x,-y) = F(x,y)$.

At $(2,1)$: $F(2,1) = (3,2)$ and $\det J_F = 10$, so there are neighbourhoods $\Omega_0 \ni (2,1)$ and $V_0 \ni (3,2)$ with $F|_{\Omega_0}$ a diffeomorphism onto $V_0$, and its inverse $G$ has
$$
DG(3,2) = \begin{pmatrix} 4 & -2 \\ 1 & 2\end{pmatrix}^{-1} = \frac{1}{10}\begin{pmatrix}2 & 2\\ -1 & 4\end{pmatrix} = \begin{pmatrix} 0.2 & 0.2 \\ -0.1 & 0.4 \end{pmatrix},
$$
and $\det J_G(3,2) = 1/10$. Solving $F(x,y) = (3.1, 2)$ numerically from $(2,1)$ gives $(2.019979, 0.990109)$: the increments divided by $0.1$ are $0.19979$ and $-0.09891$, against the first column $(0.2, -0.1)$ of $DG(3,2)$.
:::

:::application[Thermodynamic derivatives and the cyclic relation]{provenance=original}
An equation of state ties the state variables of a fluid together by one equation, $\Phi(p, V, T) = 0$ — for one mole of a van der Waals gas,
$$
\Phi(p,V,T) = \Bigl(p + \frac{a}{V^2}\Bigr)(V - b) - RT .
$$
Thermodynamics then treats any two of $p, V, T$ as independent and the third as a function of them, and writes partial derivatives such as $(\partial p/\partial V)_T$. The implicit function theorem is what licenses this: wherever $\Phi$ is $C^1$ and $\partial\Phi/\partial p \neq 0$, the equation determines $p$ locally as a $C^1$ function of $(V,T)$, and
$$
\Bigl(\frac{\partial p}{\partial V}\Bigr)_T = -\frac{\Phi_V}{\Phi_p}, \qquad
\Bigl(\frac{\partial V}{\partial T}\Bigr)_p = -\frac{\Phi_T}{\Phi_V}, \qquad
\Bigl(\frac{\partial T}{\partial p}\Bigr)_V = -\frac{\Phi_p}{\Phi_T},
$$
each from the one-dimensional derivative formula with the other two variables playing the role of parameters. Two consequences used constantly in the subject come out at once. Solving instead for $V$ as a function of $(p,T)$ gives $(\partial V/\partial p)_T = -\Phi_p/\Phi_V$, the reciprocal of the first expression above: this is the **reciprocal relation** $(\partial p/\partial V)_T = 1/(\partial V/\partial p)_T$, the one-dimensional case of the determinant identity of the inverse function theorem. Multiplying the three displayed expressions, every factor cancels against another while all three minus signs survive, giving the **cyclic relation**
$$
\Bigl(\frac{\partial p}{\partial V}\Bigr)_T \Bigl(\frac{\partial V}{\partial T}\Bigr)_p \Bigl(\frac{\partial T}{\partial p}\Bigr)_V = -1 .
$$
It holds for any equation of state whose three partial derivatives are non-zero at the state in question; the minus sign, which surprises people who expect the three factors to cancel to $+1$, is simply the product of the three minus signs in the derivative formula.

For the van der Waals gas, $\Phi_p = V - b$, $\Phi_T = -R$ and $\Phi_V = p - a/V^2 + 2ab/V^3$, so for instance
$$
\Bigl(\frac{\partial p}{\partial T}\Bigr)_V = -\frac{\Phi_T}{\Phi_p} = \frac{R}{V-b} ,
$$
with no need to solve the equation of state for anything. Where the hypothesis fails, the physics changes. Since $\Phi_p = V - b \neq 0$, the first of the two conditions that fix the critical point, $(\partial p/\partial V)_T = -\Phi_V/\Phi_p = 0$, says exactly that $\Phi_V = 0$; and that is the failure of the hypothesis under which $V$ is a function of $p$ at fixed $T$. So wherever $\Phi_V = 0$ the isotherm is flat and the isothermal compressibility $-V^{-1}(\partial V/\partial p)_T$ is infinite: the single-phase description has lost its local mechanical stability. That locus is the **spinodal**, and it is not where the two-phase region begins. The boundary of the two-phase region is the **binodal**, fixed by the Maxwell equal-area construction — a global condition on the isotherm, which no derivative of $\Phi$ and no local theorem can deliver. For every $T < T_c$ the spinodal lies strictly inside the binodal; between the two the homogeneous states are metastable rather than absent, with $(\partial p/\partial V)_T < 0$ and so $\Phi_V > 0$, and the phases have in fact already separated there. The two loci meet only at the critical point, which is why $\Phi_V = 0$ is nevertheless exactly the right condition for the computation that follows. The second condition, $(\partial^2 p/\partial V^2)_T = 0$, is a genuinely further one, not a restatement of the first; both are needed, and solving the pair for the van der Waals gas gives the familiar
$$
V_c = 3b, \qquad T_c = \frac{8a}{27Rb}, \qquad p_c = \frac{a}{27b^2}, \qquad \frac{p_cV_c}{RT_c} = \frac{3}{8},
$$
the last number being the same for every van der Waals fluid, which is why it is a test of the model.
:::
