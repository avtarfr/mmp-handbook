---
id: linalg.matrix-exponential
title: Functions of matrices and the matrix exponential
kind: method
level: core
summary: Defines a function of a matrix by its power series, states when the series converges, collects the properties of exp(A) including the exact condition — that A and B commute — for exp(sA+tB) = exp(sA)exp(tB) to hold for all s and t near 0, which is more than the single identity exp(A+B) = exp(A)exp(B) requires, and gives the recipes for computing exp(tA) by diagonalization and for defective matrices.
prereqs: [linalg.eigenvalues-eigenvectors, found.power-series, linalg.normal-matrices, linalg.jordan-form, found.absolute-convergence, found.series-convergence-tests, linalg.determinants]
provenance: adapted
sources:
  - work: hirsch-smale-devaney-2013
    loc: "§6.4, the definition of exp(A) p. 123, the entrywise bound |(A^k)_ij| <= n^(k-1) a^k with a = max|A_ij| and the comparison with the scalar series for exp(na) proving absolute convergence of exp(A) for every A, p. 125, the Proposition on exp(T^-1 A T), exp(A+B) for commuting A, B and exp(-A) p. 126, the Proposition on eigenvectors and the derivative of exp(tA) p. 128, and the Theorem (existence and uniqueness of the solution of X' = AX, X(0) = X_0) p. 129"
    pages: "123-129"
    role: definition of the matrix exponential; the elementary entrywise bound on the powers and the comparison argument for convergence of the exponential series; the algebraic and differential properties; the commuting hypothesis in the product rule; existence and uniqueness for the linear initial-value problem
  - work: rhb-2006
    loc: "§8.5, Eq. (8.38) (functions of a matrix as power series; exp A) p. 255; §8.16, Eq. (8.104) and its proof (the trace formula |exp A| = exp(Tr A)) pp. 287-288"
    pages: "255, 287-288"
    role: the power-series definition of a function of a matrix; the determinant-trace identity
  - work: arfken-2013
    loc: "§6.4, Exercise 6.4.1, the Note stating the Cayley-Hamilton theorem (a matrix satisfies its own characteristic equation), p. 317"
    pages: "317"
    role: the statement of the Cayley-Hamilton theorem used by step 4 of the method
---

:::definition[Power series in a matrix]{provenance=adapted src="rhb-2006:§8.5, Eq. (8.38), p. 255; hirsch-smale-devaney-2013:§6.4, p. 123"}
Powers of a square matrix are defined by $A^0 = I$ and $A^k = A A^{k-1}$, so for scalars $c_0, c_1, \dots$ one can form

$$
f(A) = \sum_{k=0}^{\infty} c_k A^k ,
$$

a matrix of the same size as $A$, provided the series converges. Convergence means entrywise convergence, which is the same as convergence in any norm on the space of matrices. The **matrix exponential** is the case $c_k = 1/k!$:

$$
\exp A = e^{A} = \sum_{k=0}^{\infty} \frac{A^k}{k!} .
$$

The same construction defines $\sin A$ and $\cos A$, which converge for every $A$, and the geometric (Neumann) series $\sum_k A^k$, which converges to $(I - A)^{-1}$ when $\rho(A) < 1$ and diverges when $\rho(A) > 1$. Here the **spectral radius** of $A$ is $\rho(A) = \max\{|\lambda| : \lambda \in \sigma(A)\}$, and the convergence statement below is what supplies these conditions.
:::

:::statement[Convergence]{provenance=original}
Let $\sum_k c_k z^k$ have radius of convergence $R \in (0, \infty]$ and let $A$ be an $n \times n$ complex matrix.

1. If $\rho(A) < R$, then $\sum_k c_k A^k$ converges absolutely, entry by entry. If $\rho(A) > R$, it diverges.
2. The boundary case $\rho(A) = R$ may go either way, and is not decided by $\rho(A)$ alone. At $A = I$, where $\rho(A) = 1$, both the coefficient sequence $c_k = 1$ and the coefficient sequence $c_0 = 0$, $c_k = 1/k^2$ for $k \ge 1$, have $R = 1$; the first matrix series diverges and the second converges.

The exponential has $R = \infty$, so part 1 covers it for every $A$. The next statement covers it again with an explicit bound and no reference to the spectrum.
:::

:::idea{provenance=original}
A matrix power series can only do to $A$ what the scalar series does to each of its eigenvalues, so what matters is how fast the entries of $A^k$ can grow. The Jordan form answers that: they grow like a polynomial in $k$ times $\rho(A)^k$, and a polynomial factor cannot defeat the geometric margin available strictly inside the disc of convergence. Outside the disc a single eigenvector is enough to wreck everything, because on that vector the matrix series *is* the scalar series evaluated at $z = \lambda$. On the circle the geometric margin is gone, and the polynomial factor that it used to absorb becomes decisive instead: at $\rho(A) = R$ the answer depends on the Jordan structure of $A$ and not on the spectrum or the coefficients alone, so no condition on $\rho(A)$ can settle it. The degenerate case $A = I$, where that structure drops out entirely and the matrix series is just $\bigl(\sum_k c_k\bigr) I$, is therefore the place to look when one wants two coefficient sequences of the same radius to behave differently at the same $A$.
:::

:::proof{provenance=original}
1. **Entrywise growth of the powers.** *Claim: for every $r > \rho(A)$ there is a constant $C$, depending on $A$ and $r$ only, with $|(A^k)_{il}| \le C r^k$ for all $k \ge 0$ and all $i, l$.* Write $A = T J T^{-1}$ with $J$ the :ref[Jordan normal form]{to=linalg.jordan-form} of $A$, so $A^k = T J^k T^{-1}$; since $T$ and $T^{-1}$ are fixed, each entry of $A^k$ is a fixed finite combination of entries of $J^k$, and it is enough to bound those. $J$ is a direct sum of blocks $\lambda I_q + N_q$ with $q \le n$, $N_q$ the nilpotent shift ($N_q^q = 0$, entries $0$ or $1$) and $\lambda$ an eigenvalue, so $|\lambda| \le \rho(A) < r$. As $\lambda I_q$ commutes with $N_q$, the binomial theorem gives
$$
(\lambda I_q + N_q)^k = \sum_{j=0}^{\min(k,\, q-1)} \binom{k}{j} \lambda^{k-j} N_q^{\,j} ,
$$
so every entry of the block of $J^k$ is $\binom{k}{j}\lambda^{k-j}$ for some $j \le q-1$, or $0$. If $\lambda = 0$ only $j = k$ survives, which needs $k \le q - 1$: finitely many $k$, absorbed into $C$. If $\lambda \neq 0$ then $|\lambda^{k-j}| \le \max(1, |\lambda|^{-(n-1)})\, |\lambda|^k$ and $\binom{k}{j} \le k^{\,n-1}$ for $k \ge 1$, so the entry is at most a constant times $k^{\,n-1} |\lambda|^k \le k^{\,n-1} \rho(A)^k$. Finally $k^{\,n-1}\rho(A)^k / r^k \to 0$ as $k \to \infty$, because $\rho(A) < r$ makes the geometric factor win, so that sequence is bounded and the claim follows.

2. **Part 1, convergence.** Suppose $\rho(A) < R$ and choose $r$ with $\rho(A) < r < R$. A power series converges absolutely at every point strictly inside its disc of convergence (:ref[power series]{to=found.power-series}), so $\sum_k |c_k| r^k < \infty$. By step 1,
$$
\sum_{k=0}^{\infty} |c_k|\, |(A^k)_{il}| \ \le\ C \sum_{k=0}^{\infty} |c_k| r^k \ <\ \infty
$$
for every $i, l$: the matrix series converges absolutely, entry by entry.

3. **Part 1, divergence.** Suppose $\rho(A) > R$ and pick an eigenvalue $\lambda$ with $|\lambda| = \rho(A)$ and an eigenvector $v \neq 0$. Then $A^k v = \lambda^k v$ by induction, so the partial sums $P_K = \sum_{k \le K} c_k A^k$ satisfy $P_K v = \bigl(\sum_{k \le K} c_k \lambda^k\bigr) v$. If the matrix series converged entrywise then each $(P_K v)_i$, a fixed linear combination of entries of $P_K$, would converge; choosing $i$ with $v_i \neq 0$ makes $\sum_{k \le K} c_k \lambda^k = (P_K v)_i / v_i$ a convergent scalar sequence. But $|\lambda| > R$, and a power series diverges at every point outside its disc of convergence. So the matrix series diverges.

4. **Part 2, the boundary.** For $A = I$ every power is $I$, so $\sum_k c_k A^k = \bigl(\sum_k c_k\bigr) I$ converges exactly when the scalar series $\sum_k c_k$ does, while $\rho(I) = 1$. Taking $c_k = 1$ gives $R = 1$ (the coefficients have $|c_k|^{1/k} = 1$) and a divergent $\sum_k 1$. Taking $c_0 = 0$ and $c_k = 1/k^2$ gives $R = 1$ as well, since $(1/k^2)^{1/k} \to 1$, and $\sum_{k \ge 1} 1/k^2$ converges. So $\rho(A) = R$ decides nothing.

5. **The Neumann series.** For $\sum_k z^k$ we have $R = 1$, so by part 1 the series $\sum_k A^k$ converges when $\rho(A) < 1$ and diverges when $\rho(A) > 1$. In the convergent case, telescoping gives $(I - A)\sum_{k \le K} A^k = I - A^{K+1}$, and by step 1 with any $r \in (\rho(A), 1)$ the entries of $A^{K+1}$ are at most $C r^{K+1} \to 0$. Letting $K \to \infty$ gives $(I-A)\sum_k A^k = I$, and the same computation on the other side gives $\sum_k A^k (I - A) = I$, so the sum is $(I-A)^{-1}$. $\square$
:::

:::statement[The exponential converges for every matrix]{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, p. 125"}
Let $A$ be an $n \times n$ complex matrix and put $a = \max_{i,j}|A_{ij}|$. Then

$$
\bigl| (A^k)_{ij} \bigr| \ \le\ n^{\,k-1} a^k \qquad (k \ge 1) ,
$$

and consequently every entry of $\sum_k A^k/k!$ is an absolutely convergent scalar series, with

$$
\sum_{k=0}^{\infty} \frac{|(A^k)_{ij}|}{k!} \ \le\ 1 + \frac{e^{na} - 1}{n} .
$$

So $\exp A$ is defined for every $A$, under no hypothesis at all. The same bound makes $\sum_k c_k A^k$ converge absolutely whenever $n a < R$: a crude but spectrum-free test, which needs no eigenvalue of $A$ to be known. A sharp test of that kind uses a *submultiplicative* norm — one with $\|XY\| \le \|X\|\,\|Y\|$, so that $\|A^k\| \le \|A\|^k$ — together with the fact that $\rho(A) \le \|A\|$; such norms are the subject of a later unit, :ref[matrix norms and conditioning]{to=linalg.matrix-norms-conditioning}, and nothing below depends on them.
:::

:::idea{provenance=original}
Each entry of $A^{k+1}$ is a sum of $n$ products of an entry of $A^k$ with an entry of $A$, so passing from one power to the next costs at most one factor $n$ and one factor $a$; iterating that is the bound. Dividing by $k!$ then leaves, up to the factor $1/n$, a term of the scalar series for $e^{na}$, and the comparison test finishes the job. Nothing about the spectrum of $A$ is used anywhere, which is what makes the resulting test crude but usable with the entries of $A$ alone.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, p. 125"}
1. **The bound on the powers.** Induction on $k$. For $k = 1$ the claim reads $|A_{il}| \le a$, which is the definition of $a$. Assume it for $k$. Each entry of $A^{k+1}$ is $\sum_{q=1}^{n} (A^k)_{iq} A_{ql}$, a sum of $n$ terms, so by the triangle inequality, the inductive hypothesis and $|A_{ql}| \le a$,
$$
|(A^{k+1})_{il}| \ \le\ \sum_{q=1}^{n} n^{\,k-1} a^k \cdot a \ =\ n^{\,k} a^{k+1} .
$$

2. **Comparison with the scalar exponential series.** Split off the term $k = 0$, where $(A^0)_{il} = \delta_{il}$ has modulus at most $1$. For $k \ge 1$ step 1 gives $|(A^k)_{il}|/k! \le (na)^k/(n\,k!)$, so
$$
\sum_{k=0}^{\infty} \frac{|(A^k)_{il}|}{k!} \ \le\ 1 + \frac{1}{n} \sum_{k=1}^{\infty} \frac{(na)^k}{k!} \ =\ 1 + \frac{e^{na} - 1}{n} \ <\ \infty ,
$$
the middle equality because $\sum_{k \ge 1}(na)^k/k! = e^{na} - 1$. Each entry series is therefore dominated by a convergent series of non-negative numbers, hence absolutely convergent by the comparison test (:ref[convergence tests]{to=found.series-convergence-tests}). This is the route of :cite{work=hirsch-smale-devaney-2013 loc="§6.4, p. 125"}, which bounds the entry by $e^{na}$ without separating the $k = 0$ term.

3. **The spectrum-free test.** Run the same chain with the coefficients in place: $\sum_{k \ge 1} |c_k|\,|(A^k)_{il}| \le \frac{1}{n}\sum_{k \ge 1} |c_k| (na)^k$ by step 1. If $na < R$ then $na$ lies strictly inside the disc of convergence of $\sum_k c_k z^k$, where a power series converges absolutely (:ref[power series]{to=found.power-series}), so the right-hand side is finite and $\sum_k c_k A^k$ converges absolutely entry by entry.

4. **Relation to the previous statement.** The conclusion for $\exp A$ is also the case $R = \infty$ of part 1 above. The bound just proved is nevertheless the one used in the rest of this unit, because it is explicit in the entries of $A$ and survives being applied to $sA + tB$ with unknown spectrum. $\square$
:::

:::statement[Properties of the exponential]{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, the Propositions on pp. 126 and 128 and the Theorem on p. 129; rhb-2006:§8.16, Eq. (8.104), pp. 287-288"}
Let $A, B$ be $n \times n$ complex matrices and $T$ invertible. Then:

1. $\exp(T^{-1} A T) = T^{-1} (\exp A) T$.
2. If $A B = B A$, then $\exp(A + B) = (\exp A)(\exp B)$.
3. $\exp(-A) = (\exp A)^{-1}$; in particular $\exp A$ is invertible for every $A$.
4. If $A v = \lambda v$ with $v \neq 0$, then $(\exp A) v = e^{\lambda} v$.
5. $\dfrac{d}{dt} \exp(tA) = A \exp(tA) = \exp(tA)\, A$, and $x(t) = \exp(tA)\, x_0$ is a solution of $\dot x = A x$ with $x(0) = x_0$ and is the only one (:cite{work=hirsch-smale-devaney-2013 loc="§6.4, Theorem, p. 129"}).
6. $\det(\exp A) = e^{\operatorname{tr} A}$.

The commuting hypothesis is what makes the proof of property 2 work: that proof goes through the binomial theorem for $(A+B)^k$, which is valid only when $AB = BA$. It is not necessary for the identity itself — see part 3 of the statement "When the product rule holds" below, where a non-commuting pair satisfying $\exp(A+B) = \exp(A)\exp(B)$ is exhibited.
:::

:::idea{provenance=original}
Each property is a scalar identity about $e^x$ transplanted to matrices, and the transplant is always the same two moves: do the algebra on the partial sums, where everything is a finite sum, then pass to the limit, which is legitimate because multiplying by a fixed matrix, or applying a fixed linear functional, is continuous entrywise. Two of them need more than that. The product rule has two infinite series to multiply, which is the Cauchy product, available because the exponential series converges absolutely; it is the binomial theorem afterwards that insists on $AB = BA$. And the derivative in property 5 needs an estimate rather than a limit: a difference quotient has to be controlled as $h \to 0$, and what controls it is the quantitative entrywise tail bound of the previous statement applied to $\bigl(\exp(hA) - I\bigr)/h - A$. The determinant identity is of a different kind: put $A$ into triangular form and both sides can be read off the diagonal.
:::

:::proof{provenance=adapted src="hirsch-smale-devaney-2013:§6.4, the Propositions on pp. 126 and 128, the Lemma on pp. 126-127 and the Theorem on p. 129; rhb-2006:§8.16, Eq. (8.104), pp. 287-288"}
1. **Property 1.** $(T^{-1} A T)^k = T^{-1} A^k T$, by induction: the inductive step cancels the adjacent $T T^{-1}$ in $(T^{-1}A^kT)(T^{-1}AT)$. Hence the partial sums satisfy $\sum_{k \le K} (T^{-1}AT)^k/k! = T^{-1}\bigl(\sum_{k \le K} A^k/k!\bigr) T$. Every entry of the right-hand side is one fixed linear combination of the entries of $\sum_{k\le K}A^k/k!$, with coefficients built from $T$ and $T^{-1}$, so it converges to the same combination of the entries of $\exp A$. Letting $K \to \infty$ gives $\exp(T^{-1}AT) = T^{-1}(\exp A)T$.

2. **Property 2.** Fix entries $i, l$. By the statement "The exponential converges for every matrix" each scalar series $\sum_j (A^j)_{iq}/j!$ and $\sum_k (B^k)_{ql}/k!$ converges absolutely, so the Cauchy product of two absolutely convergent series (:ref[absolute convergence]{to=found.absolute-convergence}) applies to each of the $n$ pairs indexed by $q$; summing the $n$ resulting identities,
$$
(\exp A \, \exp B)_{il} = \sum_{q=1}^{n} \Bigl( \sum_{j} \frac{(A^j)_{iq}}{j!} \Bigr) \Bigl( \sum_{k} \frac{(B^k)_{ql}}{k!} \Bigr) = \sum_{N=0}^{\infty} \ \sum_{j+k=N} \frac{(A^j B^k)_{il}}{j!\, k!} ,
$$
with no hypothesis on $A$ and $B$ so far. Now the hypothesis enters: since $AB = BA$, also $B A^j = A^j B$ for every $j$, and the binomial theorem holds in the form $(A+B)^N = \sum_{j+k=N} \frac{N!}{j!\,k!} A^j B^k$ (induction on $N$, the step using $B A^j = A^j B$ to move every $B$ past every $A$). So the inner sum is $(A+B)^N/N!$ and the right-hand side is $\exp(A+B)$.

3. **Property 3.** $A$ and $-A$ commute, so property 2 gives $(\exp A)(\exp(-A)) = \exp(A - A) = \exp 0 = I$, and with the roles exchanged $(\exp(-A))(\exp A) = I$. Hence $\exp A$ is invertible with inverse $\exp(-A)$.

4. **Property 4.** From $Av = \lambda v$ we get $A^k v = \lambda^k v$ by induction, so $\bigl(\sum_{k \le K} A^k/k!\bigr) v = \bigl(\sum_{k \le K}\lambda^k/k!\bigr) v$. The left side converges to $(\exp A)v$ because $\exp A$ converges entrywise, the right to $e^\lambda v$ because the scalar exponential series converges. Hence $(\exp A)v = e^{\lambda} v$.

5. **Property 5.** For fixed $t$ and $h$ the matrices $tA$ and $hA$ commute, so property 2 gives $\exp((t+h)A) = \exp(tA)\exp(hA)$ and therefore
$$
\frac{\exp((t+h)A) - \exp(tA)}{h} = \exp(tA) \cdot \frac{\exp(hA) - I}{h} .
$$
Now $\frac{\exp(hA)-I}{h} - A = \sum_{k \ge 2} h^{k-1}A^k/k!$, whose entries are bounded, for $0 < |h| \le 1$, using the entrywise bound $|(A^k)_{il}| \le n^{k-1}a^k$ with $a = \max_{i,l}|A_{il}|$, by
$$
\sum_{k \ge 2} \frac{|h|^{k-1} n^{k-1} a^k}{k!} = a \sum_{k \ge 2} \frac{(na|h|)^{k-1}}{k!} \ \le\ a \cdot n a |h| \sum_{j \ge 0} \frac{(na|h|)^{j}}{j!} \ \le\ n a^2 e^{na}\, |h| ,
$$
which tends to $0$ with $h$. So $\frac{\exp(hA)-I}{h} \to A$ entrywise, and the difference quotient converges to $\exp(tA)\,A$: that is the derivative. Moreover $A$ commutes with every $A^k$, hence with every partial sum of the series, hence with $\exp(tA)$ in the limit, so the derivative equals $A\exp(tA)$ too. Consequently $x(t) = \exp(tA)x_0$ satisfies $\dot x = A\exp(tA)x_0 = Ax(t)$ and $x(0) = x_0$. For uniqueness, let $y$ be any solution with $y(0) = x_0$ and set $z(t) = \exp(-tA)y(t)$. By the product rule and the derivative just computed, applied with $-A$,
$$
\dot z = -A \exp(-tA) y + \exp(-tA) \dot y = \exp(-tA)\bigl(-A y + A y\bigr) = 0 ,
$$
where the commuting of $A$ with $\exp(-tA)$ was used to move $-A$ across. So $z$ is constant, $z(t) = z(0) = x_0$, and multiplying by $\exp(tA)$ — invertible by property 3, with inverse $\exp(-tA)$ — gives $y(t) = \exp(tA)x_0$. This is the existence-and-uniqueness theorem cited in the statement.

6. **Property 6.** Let $A = TJT^{-1}$ with $J$ the Jordan form, which is upper triangular with the eigenvalues $\lambda_1, \dots, \lambda_n$ of $A$ on its diagonal (listed with algebraic multiplicity). Multiplying two upper triangular matrices $X, Y$ leaves the result upper triangular and multiplies the diagonals entrywise, as $(XY)_{ii} = \sum_q X_{iq}Y_{qi} = X_{ii}Y_{ii}$ shows — only $q = i$ survives, since $X_{iq} = 0$ for $q < i$ and $Y_{qi} = 0$ for $q > i$. So $J^k$ is upper triangular with $(J^k)_{ii} = \lambda_i^k$. Each partial sum of $\exp J$ is therefore upper triangular with $(i,i)$ entry $\sum_{k \le K}\lambda_i^k/k!$, and these properties survive the entrywise limit: $\exp J$ is upper triangular with diagonal entries $e^{\lambda_i}$. The :ref[determinant]{to=linalg.determinants} of a triangular matrix is the product of its diagonal entries, so
$$
\det \exp J = \prod_{i=1}^{n} e^{\lambda_i} = e^{\sum_i \lambda_i} = e^{\operatorname{tr} A} ,
$$
the last step because $\operatorname{tr} A = \operatorname{tr} J$ is the sum of the eigenvalues. By property 1, $\exp A = T (\exp J) T^{-1}$, whence $\det \exp A = \det T \cdot \det \exp J \cdot (\det T)^{-1} = \det \exp J$ by the product rule for determinants. This is the route of :cite{work=rhb-2006 loc="§8.16, Eq. (8.104), pp. 287-288"}, which runs it with a diagonalising similarity; the triangular form is what covers defective $A$ as well. $\square$
:::

:::statement[Adjoints, unitarity and positivity]{provenance=original}
For every $n \times n$ complex $A$, $\exp(A^\dagger) = (\exp A)^\dagger$. Consequently:

- if $A$ is anti-Hermitian ($A^\dagger = -A$) then $\exp A$ is unitary;
- if $A$ is Hermitian then $\exp A$ is Hermitian, and it is positive definite: $x^\dagger (\exp A) x > 0$ for every $x \neq 0$.

Neither cited source states these; they are ours.
:::

:::idea{provenance=original}
Conjugate transposition does two convenient things at once: it is continuous entrywise, being conjugation composed with a relabelling of indices, and it turns $A^k$ into $(A^\dagger)^k$. So it slides through the partial sums and hence through the limit, which is the whole of the first claim. The two consequences are then bookkeeping with the properties already proved: an anti-Hermitian exponent makes the adjoint equal to the inverse, and a Hermitian exponent lets the exponential be split as $B^\dagger B$ with $B$ invertible, which is what positive definiteness asks for.
:::

:::proof{provenance=original}
1. **Powers and the adjoint.** $(A^k)^\dagger = (A^\dagger)^k$ for every $k \ge 0$, by induction: the case $k = 0$ is $I^\dagger = I$, and $(A^{k+1})^\dagger = (A\,A^k)^\dagger = (A^k)^\dagger A^\dagger = (A^\dagger)^k A^\dagger = (A^\dagger)^{k+1}$, using $(XY)^\dagger = Y^\dagger X^\dagger$ and then the inductive hypothesis.

2. **The adjoint passes to the limit.** Fix $i, l$. By definition $\bigl( X^\dagger \bigr)_{il} = \overline{X_{li}}$, so
$$
\Bigl( \Bigl( \sum_{k \le K} \frac{A^k}{k!} \Bigr)^{\!\dagger} \Bigr)_{il} = \overline{ \sum_{k \le K} \frac{(A^k)_{li}}{k!} } = \sum_{k \le K} \frac{\overline{(A^k)_{li}}}{k!} = \sum_{k \le K} \frac{\bigl((A^\dagger)^k\bigr)_{il}}{k!}
$$
by step 1. The outer series on the left converges to $\overline{(\exp A)_{li}} = \bigl((\exp A)^\dagger\bigr)_{il}$, because complex conjugation is continuous, and the right-hand side converges to $(\exp(A^\dagger))_{il}$. Hence $\exp(A^\dagger) = (\exp A)^\dagger$.

3. **Anti-Hermitian exponent.** If $A^\dagger = -A$, then by step 2 and property 3,
$$
(\exp A)^\dagger (\exp A) = \exp(A^\dagger)\exp(A) = \exp(-A)\exp(A) = I ,
$$
and exchanging the two factors gives $(\exp A)(\exp A)^\dagger = I$ in the same way. So $\exp A$ is unitary.

4. **Hermitian exponent.** If $A^\dagger = A$ then $(\exp A)^\dagger = \exp(A^\dagger) = \exp A$ by step 2, so $\exp A$ is Hermitian. Also $\tfrac12 A$ is Hermitian, so $B = \exp\bigl(\tfrac12 A\bigr)$ satisfies $B^\dagger = B$ by the same step, and $B$ is invertible by property 3. Since $\tfrac12 A$ commutes with itself, property 2 gives
$$
\exp A = \exp\bigl(\tfrac12 A + \tfrac12 A\bigr) = B^2 = B^\dagger B .
$$
Therefore $x^\dagger (\exp A) x = x^\dagger B^\dagger B x = \|Bx\|_2^2$ for every $x$, and for $x \neq 0$ invertibility of $B$ gives $Bx \neq 0$, so the value is strictly positive: $\exp A$ is positive definite. $\square$
:::

:::statement[When the product rule holds]{provenance=original}
For $n \times n$ complex $A, B$:

1. $A B = B A$ implies $\exp(sA + tB) = \exp(sA)\exp(tB)$ for all $s, t \in \mathbb{C}$.
2. Conversely, if $\exp(sA + tB) = \exp(sA)\exp(tB)$ holds for all $s, t$ in a neighbourhood of $0$ in $\mathbb{R}^2$, then $AB = BA$.
3. Commuting is **not** necessary for the single identity $\exp(A + B) = \exp(A)\exp(B)$. For
$$
A = \begin{pmatrix} 0 & 0 \\ 0 & 2\pi i \end{pmatrix} , \qquad B = \begin{pmatrix} 0 & 1 \\ 0 & 2\pi i \end{pmatrix}
$$
one has $\exp(A+B) = I = \exp(A)\exp(B)$ while $[A, B] = \begin{pmatrix} 0 & -2\pi i \\ 0 & 0 \end{pmatrix} \neq 0$. Consistently with part 2, the identity fails for this pair at other values of $s, t$, for instance at $s = 1$, $t = \tfrac12$.
4. For $A$ and $B$ small enough, $\exp(A)\exp(B) = \exp\bigl(A + B + \tfrac12 [A,B] + \cdots\bigr)$, the Baker-Campbell-Hausdorff series, whose further terms are iterated commutators. The series converges only under such a smallness condition — and the matrix logarithm is not single-valued, as the remark below records — so for general $A, B$ it is to be read as a formal expansion. What does hold for all $A, B$ is its leading content: the discrepancy between the two sides is of second order in the size of $A$ and $B$, with $\tfrac12[A,B]$ as the second-order term, which is the error committed by operator-splitting schemes.
:::

:::idea{provenance=original}
One direction is property 2 applied to the pair $sA$, $tB$, which commute as soon as $A$ and $B$ do. The converse is a matter of reading off coefficients: expand both sides to second order in $(s, t)$ and the terms of order $st$ differ by exactly $\tfrac12[A,B]$, so an identity holding on a whole neighbourhood of the origin forces the commutator to vanish. The counterexample shows why "for all $s, t$" is not decoration: at one isolated pair of values the identity can hold by accident, because the scalar exponential is periodic along the imaginary axis and can hide a non-zero commutator.
:::

:::proof{provenance=original}
1. **Part 1.** If $AB = BA$ then $(sA)(tB) = st\,AB = st\,BA = (tB)(sA)$ for all scalars $s, t$, so property 2 of the previous statement applies to the commuting pair $sA$, $tB$ and gives $\exp(sA + tB) = \exp(sA)\exp(tB)$.

2. **A second-order expansion.** Let $c = \max_{i,l} \max(|A_{il}|, |B_{il}|)$ and $\sigma = |s| + |t|$, and put $X = sA + tB$, so $\max_{i,l}|X_{il}| \le \sigma c$. By the entrywise bound, applied to $X$, the entries of the tail $\exp X - I - X - \tfrac12 X^2 = \sum_{k \ge 3} X^k/k!$ are bounded in modulus by
$$
\sum_{k \ge 3} \frac{n^{k-1}(\sigma c)^k}{k!} \ \le\ \frac{(n \sigma c)^3}{6n} \sum_{j \ge 0} \frac{(n\sigma c)^j}{j!} \ \le\ K_1 \sigma^3 \qquad (\sigma \le 1)
$$
for a constant $K_1$ depending only on $n$ and $c$. Expanding $X^2 = s^2A^2 + st(AB + BA) + t^2B^2$,
$$
\exp(sA + tB) = I + sA + tB + \tfrac12 s^2 A^2 + \tfrac12 st (AB+BA) + \tfrac12 t^2 B^2 + O(\sigma^3) ,
$$
where $O(\sigma^3)$ means entries bounded by a constant times $\sigma^3$ for $\sigma \le 1$. Applying the same bound to $\exp(sA)$ and to $\exp(tB)$ separately and multiplying the two expansions — all discarded terms have total degree at least $3$ in $(s,t)$, and each factor has entries bounded by a constant for $\sigma \le 1$, so they too are $O(\sigma^3)$ —
$$
\exp(sA)\exp(tB) = I + sA + tB + \tfrac12 s^2 A^2 + st\, AB + \tfrac12 t^2 B^2 + O(\sigma^3) .
$$

3. **Part 2.** Assume the identity holds for all $(s,t)$ in a neighbourhood of the origin in $\mathbb{R}^2$. Subtracting the two displays of step 2, for all small $(s,t)$
$$
0 = st \bigl( \tfrac12(AB + BA) - AB \bigr) + O(\sigma^3) = -\tfrac12 st\, [A, B] + O(\sigma^3) .
$$
Take $s = t = h$ with $h$ real and small, divide by $h^2$ (so $\sigma^3/h^2 = 8|h| \to 0$), and let $h \to 0$: every entry of $[A,B]$ vanishes, that is $AB = BA$.

4. **Part 3, the counterexample.** For $M = \begin{pmatrix} 0 & \beta \\ 0 & d \end{pmatrix}$ with $d \neq 0$, induction gives $M^k = \begin{pmatrix} 0 & \beta d^{\,k-1} \\ 0 & d^{\,k} \end{pmatrix}$ for $k \ge 1$, so summing the series termwise (legitimate because the exponential series converges absolutely entry by entry),
$$
\exp M = \begin{pmatrix} 1 & \beta\,(e^{d} - 1)/d \\ 0 & e^{d} \end{pmatrix} .
$$
With $d = 2\pi i$ we have $e^d = 1$, so this is $I$: that covers $B$ (take $\beta = 1$, $d = 2\pi i$) and $A + B = \begin{pmatrix} 0 & 1 \\ 0 & 4\pi i\end{pmatrix}$ (take $\beta = 1$, $d = 4\pi i$, again $e^d = 1$), while $A$ is diagonal with $\exp A = \operatorname{diag}(1, e^{2\pi i}) = I$. Hence $\exp(A+B) = I = (\exp A)(\exp B)$. The commutator does not vanish:
$$
AB = \begin{pmatrix} 0 & 0 \\ 0 & (2\pi i)^2 \end{pmatrix}, \qquad BA = \begin{pmatrix} 0 & 2\pi i \\ 0 & (2\pi i)^2 \end{pmatrix}, \qquad [A,B] = \begin{pmatrix} 0 & -2\pi i \\ 0 & 0 \end{pmatrix} .
$$
At $s = 1$, $t = \tfrac12$ the formula with $\beta = \tfrac12$ and $d = 3\pi i$ (so $e^d = -1$) gives $\exp(A + \tfrac12 B) = \begin{pmatrix} 1 & i/(3\pi) \\ 0 & -1\end{pmatrix}$, using $-1/(3\pi i) = i/(3\pi)$, while $\exp(A)\exp(\tfrac12 B) = \exp(\tfrac12 B) = \begin{pmatrix} 1 & i/\pi \\ 0 & -1 \end{pmatrix}$ by the same formula with $d = \pi i$. The two differ, so for this pair $\exp(sA+tB) = \exp(sA)\exp(tB)$ is not an identity in $s$ and $t$: the coincidence at $(s,t) = (1,1)$ is isolated. Part 2 says more than this one computation does — it forces failure at points arbitrarily close to the origin, which $(1, \tfrac12)$ is not — but a single explicit pair of values is the cheapest way to see that the identity does not persist.

5. **Part 4 is not proved here.** The expansion of step 2 does give its leading content: replacing $A$ by $\epsilon A$ and $B$ by $\epsilon B$ and setting $s = t = 1$,
$$
\exp(\epsilon A)\exp(\epsilon B) - \exp(\epsilon A + \epsilon B) = \tfrac12 \epsilon^2 [A, B] + O(\epsilon^3) ,
$$
which is the quantitative statement that the error of operator splitting is second order in the step size. The full Baker-Campbell-Hausdorff series, and the proof that all of its terms are iterated commutators, is beyond the scope of this unit; the standard reference is the theory of Lie algebras and the Lie group-Lie algebra correspondence. $\square$
:::

:::method[Computing exp(tA)]{provenance=original}
1. **If $A$ is diagonalizable**, $A = S \Lambda S^{-1}$ with $\Lambda = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$ and the columns of $S$ an eigenbasis. Then by property 1,
$$
\exp(tA) = S \exp(t\Lambda) S^{-1} = S \operatorname{diag}\bigl(e^{\lambda_1 t}, \dots, e^{\lambda_n t}\bigr) S^{-1} .
$$
The same formula computes any $f(A)$ with $f(A) = S \operatorname{diag}(f(\lambda_k)) S^{-1}$, provided every $\lambda_k$ lies inside the disc of convergence.
2. **If $A$ is normal**, $S$ may be taken unitary (see :ref[normal matrices]{to=linalg.normal-matrices}), so $S^{-1} = S^\dagger$ and no inverse has to be computed; this is also the numerically stable case.
3. **If $A$ is defective**, split it as $A = D + N$ with $DN = ND$, $D$ diagonalizable and $N$ nilpotent ($N^q = 0$ for some $q \le n$). Those three properties of $D$ and $N$ are all the step uses, however the splitting was obtained. One source of it is the Jordan normal form: if $S^{-1} A S = \Lambda + \widehat N$ with $\Lambda$ its diagonal part and $\widehat N$ its superdiagonal nilpotent part, then in the original basis $D = S \Lambda S^{-1}$ and $N = S \widehat N S^{-1}$, so $D$ is diagonalizable but not in general diagonal. Then by property 2
$$
\exp(tA) = \exp(tD) \exp(tN) = \exp(tD) \sum_{k=0}^{q-1} \frac{t^k N^k}{k!} ,
$$
a finite sum, with $\exp(tD)$ computed by step 1. The entries of $\exp(tA)$ are then sums of terms (polynomial in $t$) $\times\, e^{\lambda t}$ over the eigenvalues $\lambda$, the degree of the polynomial multiplying $e^{\lambda t}$ being at most one less than the size of the largest Jordan block for $\lambda$ — at most, because cancellation in the particular entry can lower it, and the degree is exactly that only for the entries where the top power of $\widehat N$ survives.
4. **For $n$ small, or to avoid eigenvectors altogether**, use that $A^n$ is a combination of $I, A, \dots, A^{n-1}$ by the Cayley-Hamilton theorem — a matrix satisfies its own characteristic equation, that is, the characteristic polynomial $p(\lambda) = \det(\lambda I - A)$ of :ref[the eigenvalue problem]{to=linalg.eigenvalues-eigenvectors} satisfies $p(A) = 0$ (:cite{work=arfken-2013 loc="§6.4, Exercise 6.4.1, Note, p. 317"}) — so $\exp(tA) = \sum_{j=0}^{n-1} \alpha_j(t) A^j$ for scalar functions $\alpha_j$. Determine the $\alpha_j$ by requiring $e^{\lambda t} = \sum_{j} \alpha_j(t) \lambda^j$ at each distinct eigenvalue, together with its first $m - 1$ derivatives with respect to $\lambda$ there when that eigenvalue has algebraic multiplicity $m$. That is $n$ linear conditions on the $n$ unknowns $\alpha_0(t), \dots, \alpha_{n-1}(t)$, and what makes them determine the $\alpha_j$ is that the coefficient matrix — a confluent Vandermonde matrix in the distinct eigenvalues — is nonsingular: if $\sum_j \alpha_j \lambda^j$ and its first $m-1$ derivatives vanish at an eigenvalue of multiplicity $m$, then the characteristic polynomial divides this polynomial of degree $< n$, which forces it to be $0$, so the homogeneous system has only the zero solution.
5. **Numerically**, call a library routine (`scipy.linalg.expm`), which uses scaling and squaring with a rational approximation. Verify with property 6: $\det \exp(tA)$ should equal $e^{t \operatorname{tr} A}$.

**How each route fails.** Summing the defining series directly loses accuracy badly when $\|tA\|$ is large, because the terms grow before they decay (and catastrophically for $A$ with eigenvalues of both signs). Route 1 is useless for a defective $A$ and unreliable for a *nearly* defective one, since $S$ is then ill-conditioned and $S^{-1}$ amplifies the error; see the later unit on :ref[condition numbers]{to=linalg.matrix-norms-conditioning}. Route 3 requires the Jordan structure, which is itself not computable stably. Never use $\exp(A)\exp(B)$ in place of $\exp(A+B)$ unless $[A, B] = 0$.
:::

:::note{provenance=original}
$\exp(tA)$ is the propagator of the linear system $\dot x = Ax$: it carries the state at time $0$ to the state at time $t$. When $A$ is diagonalizable it does so by multiplying each eigendirection by $e^{\lambda t}$, so the eigenvalues alone read off the dynamics — decay for $\operatorname{Re}\lambda < 0$, growth for $\operatorname{Re}\lambda > 0$, oscillation at frequency $\operatorname{Im}\lambda$. When $A$ is defective that picture is incomplete: each Jordan block of size $m$ contributes $e^{\lambda t}$ times a polynomial in $t$ of degree $m-1$, which is why $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has $\exp(tA) = \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$ and grows without bound although its only eigenvalue is $0$. The Traps below say what survives of the eigenvalue reading in that case. The same object appears as the time evolution $e^{-iHt/\hbar}$ of quantum mechanics and as the transition matrix of a continuous-time Markov chain.
:::

:::remark[Traps]{provenance=original}
**$\exp A$ is not the matrix of entrywise exponentials.** For $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $\exp A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, not $\begin{pmatrix} 1 & e \\ 1 & 1 \end{pmatrix}$.

**$\exp$ is not surjective onto invertible matrices over $\mathbb{R}$.** $\det \exp A = e^{\operatorname{tr} A} > 0$ for real $A$, so no real matrix of negative determinant, such as $\operatorname{diag}(1,-1)$, is a real exponential. Over $\mathbb{C}$ every invertible matrix is an exponential.

**Eigenvalues, not the spectral radius, govern growth.** $\|\exp(tA)\|$ is bounded as $t \to +\infty$ only if $\operatorname{Re}\lambda \le 0$ for every eigenvalue *and* every eigenvalue with $\operatorname{Re}\lambda = 0$ has equal algebraic and geometric multiplicity: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ has $\rho(A) = 0$ yet $\exp(tA) = \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$ grows.

**The eigenvalues of $\exp A$ are the $e^{\lambda}$, but the map on eigenvalues is not injective.** $\lambda$ and $\lambda + 2\pi i$ give the same $e^\lambda$, which is why there is no single-valued matrix logarithm and why the counterexample in part 3 of the product-rule statement exists at all.

**Conventions.** Physics writes $e^{-iHt/\hbar}$ and mathematics $\exp(tA)$; both are this object. A few texts define $f(A)$ for non-diagonalizable $A$ by the Jordan form or by a Cauchy integral rather than by a power series. The three definitions agree wherever more than one applies, but only the series version is used above.
:::

:::example[exp(tA) for a defective 3 x 3 matrix]{provenance=original}
Take

$$
A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & -3 & 3 \end{pmatrix} .
$$

**1. Eigenvalues.** $A$ is the companion matrix of the polynomial whose coefficients stand in its last row, so

$$
\det(\lambda I - A) = \lambda^3 - 3\lambda^2 + 3\lambda - 1 = (\lambda - 1)^3 ,
$$

one eigenvalue $\lambda = 1$ of algebraic multiplicity $3$.

**2. $A$ is defective, so route 1 is unavailable.** Put

$$
N = A - I = \begin{pmatrix} -1 & 1 & 0 \\ 0 & -1 & 1 \\ 1 & -3 & 2 \end{pmatrix} .
$$

Its third row is $-1$ times the first plus $2$ times the second, and its first two rows are independent, so $\operatorname{rank} N = 2$ and $\dim \ker N = 1$. The eigenvalue $1$ therefore has geometric multiplicity $1$ against algebraic multiplicity $3$: there is no eigenbasis, and $A$ has a single Jordan block of size $3$.

**3. The splitting of step 3 of the method.** Take $D = I$ and $N = A - I$. Then $D$ is diagonalizable, $DN = ND$ because $D = I$, and $N$ is nilpotent:

$$
N^2 = \begin{pmatrix} 1 & -2 & 1 \\ 1 & -2 & 1 \\ 1 & -2 & 1 \end{pmatrix} , \qquad N^3 = 0 ,
$$

all three rows of $N^2$ being equal, every column of $N^2$ is a multiple of $(1,1,1)^{\mathsf T}$, and $N(1,1,1)^{\mathsf T} = (-1+1+0,\ 0-1+1,\ 1-3+2)^{\mathsf T} = 0$, so $N^3 = N \cdot N^2 = 0$.

**4. Assemble.** Since $tD = tI$ commutes with $tN$, property 2 gives $\exp(tA) = e^{t}\bigl(I + tN + \tfrac12 t^2 N^2\bigr)$, a finite sum:

$$
\exp(tA) = e^{t} \begin{pmatrix}
1 - t + \tfrac12 t^2 & t - t^2 & \tfrac12 t^2 \\[2pt]
\tfrac12 t^2 & 1 - t - t^2 & t + \tfrac12 t^2 \\[2pt]
t + \tfrac12 t^2 & -3t - t^2 & 1 + 2t + \tfrac12 t^2
\end{pmatrix} .
$$

Every entry is a quadratic polynomial times $e^{t}$, the degree being one less than the size of the Jordan block, exactly as step 3 of the method predicts.

**5. Two checks.** At $t = 0$ the matrix is $I$. Differentiating, the derivative of $e^t\bigl(I + tN + \tfrac12 t^2 N^2\bigr)$ is $e^t\bigl(I + tN + \tfrac12 t^2N^2\bigr) + e^t\bigl(N + tN^2\bigr)$, which at $t = 0$ is $I + N = A$, as property 5 requires.

**6. A number.** At $t = 1$,

$$
\exp A = \frac{e}{2}\begin{pmatrix} 1 & 0 & 1 \\ 1 & -2 & 3 \\ 3 & -8 & 7 \end{pmatrix}
\approx \begin{pmatrix} 1.359141 & 0 & 1.359141 \\ 1.359141 & -2.718282 & 4.077423 \\ 4.077423 & -10.873127 & 9.513986 \end{pmatrix} .
$$

Pulling the factor $e/2$ out of all three rows multiplies the determinant by $(e/2)^3$, and expanding the integer matrix along its first row,

$$
\det \begin{pmatrix} 1 & 0 & 1 \\ 1 & -2 & 3 \\ 3 & -8 & 7\end{pmatrix} = 1\cdot(-14 + 24) - 0 + 1\cdot(-8 + 6) = 10 - 2 = 8 ,
$$

so $\det \exp A = (e/2)^3 \cdot 8 = e^3 = 20.085537$, which is $e^{\operatorname{tr} A}$ with $\operatorname{tr} A = 0 + 0 + 3 = 3$: property 6 confirmed. Note in passing that $(\exp A)_{12} = 0$ although $A_{12} = 1$, and that the entrywise exponential of $A$ would have no zero entry at all: the exponential redistributes the entries completely.

**7. What it solves.** $\dot x = Ax$ for this companion matrix is the scalar equation $y''' - 3y'' + 3y' - y = 0$ written for $x = (y, y', y'')^{\mathsf T}$, whose general solution is $(c_0 + c_1 t + c_2 t^2)e^{t}$. The first column of $\exp(tA)$ must therefore be the solution with $y(0) = 1$, $y'(0) = y''(0) = 0$, namely $y(t) = e^t\bigl(1 - t + \tfrac12 t^2\bigr)$; differentiating gives $y'(t) = \tfrac12 t^2 e^t$ and $y''(t) = (t + \tfrac12 t^2)e^t$, which are precisely the second and third entries of that column. The matrix exponential has solved the third-order equation without any eigenvector being computed.
:::

:::application{provenance=original}
- **Unitarity of quantum time evolution.** For a time-independent Hamiltonian, the state obeys $i\hbar\, \dot\psi = H\psi$, so $\psi(t) = \exp(-iHt/\hbar)\,\psi(0)$ by property 5. If $H$ is Hermitian then $(-iHt/\hbar)^\dagger = +iHt/\hbar = -(-iHt/\hbar)$ for real $t$, so the exponent is anti-Hermitian and the adjoints statement makes the propagator unitary. That is exactly the conservation of total probability, $\|\psi(t)\| = \|\psi(0)\|$, and it is a consequence of the algebra of the exponential rather than of anything about the particular $H$. The eigenvalue property 4 then says that an energy eigenstate only picks up the phase $e^{-iE t/\hbar}$, which is why stationary states are stationary.

- **Stability of a linear system, read off the spectrum.** For $\dot x = Ax$ the solution is $x(t) = \exp(tA)x_0$, and property 1 together with step 3 of the method says that every entry of $\exp(tA)$ is a sum of terms, each a polynomial in $t$ times $e^{\lambda t}$, one group of terms for each eigenvalue $\lambda$. So all solutions decay when every eigenvalue has $\operatorname{Re}\lambda < 0$, and the trap noted above — a purely imaginary eigenvalue whose Jordan block is larger than $1 \times 1$ produces secular growth like $t\,e^{i\omega t}$ — is the mathematics behind resonance in a driven oscillator and behind the marginal cases in the stability analysis of a steady state.

- **Operator splitting in numerical simulation.** Split the generator of an evolution equation into parts that can each be exponentiated exactly: a Laplacian handled in Fourier space and a nonlinear or reaction term handled pointwise, or the kinetic and potential parts of a Hamiltonian. The scheme advances by $\exp(hA)\exp(hB)$ in place of $\exp(h(A+B))$, and part 5 of the product-rule proof shows the error per step is $\tfrac12 h^2[A, B] + O(h^3)$. This is the error estimate behind the split-step Fourier method for the nonlinear Schrodinger equation, Strang splitting in atmosphere and ocean models, and the leapfrog and higher-order symplectic integrators of molecular dynamics, where symmetrising the composition as $\exp(\tfrac12 hA)\exp(hB)\exp(\tfrac12 hA)$ cancels the commutator term and leaves an $O(h^3)$ error per step.

- **Rotations from angular velocity.** A real antisymmetric $3 \times 3$ matrix $\Omega$ with $\Omega x = \omega \times x$ satisfies $\Omega^{\mathsf T} = -\Omega$, so $\exp(t\Omega)$ is real orthogonal by the adjoints statement, and $\det \exp(t\Omega) = e^{t \operatorname{tr}\Omega} = 1$ by property 6: it is a rotation, through angle $|\omega| t$ about $\omega$. Rigid-body kinematics is the statement $\dot R = \Omega R$, solved by this exponential, and the failure of $\exp(A)\exp(B) = \exp(A+B)$ for non-commuting $A, B$ is the familiar fact that rotations about different axes do not commute.

- **Continuous-time Markov chains.** A generator $Q$ has non-negative off-diagonal entries and rows summing to zero, and the transition matrix over time $t$ is $P(t) = \exp(tQ)$. Both defining properties of a stochastic matrix come straight out of this unit: $Q\mathbf{1} = 0$ gives $Q^k \mathbf{1} = 0$ for $k \ge 1$ and hence $P(t)\mathbf{1} = \mathbf{1}$, so the rows sum to one; and writing $\exp(tQ) = e^{-ct}\exp\bigl(t(Q + cI)\bigr)$ with $c = \max_i |Q_{ii}|$, permitted by property 2 because $cI$ commutes with everything, exhibits $P(t)$ as a positive multiple of the exponential of a matrix with non-negative entries. For $t \ge 0$ — the only range in which a transition matrix is asked for — every term $t^k(Q+cI)^k/k!$ of that exponential series is then entrywise non-negative, and so is $P(t)$. The Chapman-Kolmogorov relation $P(s+t) = P(s)P(t)$ is property 2 again.
:::
