VERDICT: PASS
UNIT: ode.linear-systems
VERIFIER: B

## Findings
1. [minor] :::definition[The system, its fundamental matrices and its propagator] (line 23): the
   `src` is `dummit-foote-2004:§12.3, the discussion between Exercises 52 and 53, pp. 505-506`, but
   that discussion defines a fundamental matrix only for the *constant-coefficient* system (*),
   whereas the block defines it for $A(t)$; and "principal fundamental matrix" and "propagator"
   appear nowhere on those pages. Nothing false is attributed to the book — the term and the
   $n$-dimensionality are there — but the generality and the two extra names are ours. Fix: add
   that the variable-coefficient version and the two names are our extension, or move those
   sentences to an `original` block.
2. [minor] :::method step 4 (line ~250): "take an eigenvector $v = p+iq$ for $\alpha+i\beta$ only"
   gives one real pair per conjugate pair of eigenvalues, where step 3 correctly says "each basis
   vector $v$ of its eigenspace". For a repeated complex eigenvalue with a two-dimensional
   eigenspace (possible for a real $A$, e.g. $\operatorname{diag}(B,B)$ with
   $B=\begin{pmatrix}0&2\\-2&0\end{pmatrix}$) step 4 as written produces only two of the four
   solutions. Fix: "each basis vector $v=p+iq$ of the $\alpha+i\beta$ eigenspace".
3. [minor] :::application, first bullet (line ~286): "$\omega^2<0$ gives the *real* pair
   $\lambda = \pm|\omega|$" — if $\omega^2<0$ then $\omega$ is not real, so $|\omega|$ is only
   meaningful by reading $\omega=i\sqrt{-\omega^2}$. Fix: write $\lambda=\pm\sqrt{-\omega^2}$.

## Checked
- Counterexample search: tried the statements at their hypotheses.
  - Part 2 of the existence statement needs $\Phi$ to solve the equation, as the last remark bullet
    says; checked that an arbitrary matrix function can be singular at isolated points, so the
    hypothesis is doing work.
  - Part 3 of the spectral statement at $\beta=0$: $x_{\mathrm{re}},x_{\mathrm{im}}$ collapse to
    $e^{\alpha t}p$, $e^{\alpha t}q$, dependent when $q=0$ — the remark's account is right, and the
    independence proof does use $\beta\ne0$ exactly once (to divide out $\beta$).
  - Part 2 vs. part 4: verified that $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ has
    $\exp(tA)=\begin{pmatrix}1&t\\0&1\end{pmatrix}$ and that its second column $(t,1)^{\mathsf T}$
    does solve $x'=Ax$ while not being of the form $e^{\lambda t}v$ — so part 4 is genuinely needed,
    as the remark claims. $A=I_2$ is diagonalizable with a repeated eigenvalue, so "distinct" is
    strictly stronger than "diagonalizable", also as claimed.
  - Non-locality: $x'=x/(1-t)$, $x(0)=1$ gives $x=(1-t)^{-1}$ on $(-\infty,1)$, and $x'=x^2$,
    $x(0)=1$ gives the same function with a continuous right-hand side — both re-solved, so both
    remark bullets are right.
  - Checked the unit's own claim about companion matrices: deleting the first column and the last
    row of $A-\lambda I_n$ leaves a matrix with $1$s on the diagonal and $-\lambda$ below it,
    determinant $1$, so $\operatorname{rank}(A-\lambda I_n)\ge n-1$ and every eigenspace is
    one-dimensional. The conclusion "a root of multiplicity $m$ gives a single Jordan block of size
    $m$" is correct, and the unit flags it as ours rather than the sources'.
  - Checked the generalized-eigenvector formula of method step 5 by substitution for $k=2$:
    $x=e^{\lambda t}(v_2+tv_1)$ gives $x'=e^{\lambda t}(\lambda v_2+v_1+\lambda t v_1)$ and
    $Ax=e^{\lambda t}(\lambda v_2+v_1+\lambda t v_1)$ — equal, as the chain condition requires.
- Calculations (sympy, `.venv/bin/python`), the three-dimensional example:
  - $\det(\lambda I-A)$ factors as $(\lambda+1)(\lambda^2+2\lambda+5)$ and the eigenvalues are
    $\{-1,\,-1\pm2i\}$, each simple — exactly as printed.
  - $\Phi$ as displayed satisfies $\Phi'-A\Phi=0$ identically (zero matrix), so all three columns,
    including both real forms, are solutions.
  - $\Phi(0)=\begin{pmatrix}1&1&0\\-1&-1&2\\4&0&0\end{pmatrix}$ with $\det=8$, and
    $8\,\Phi(0)^{-1}=\begin{pmatrix}0&0&2\\8&0&-2\\4&4&0\end{pmatrix}$ — so the unit's $\Phi(0)^{-1}$
    in step 7 is right.
  - $\det\Phi(t)=8e^{-3t}$ symbolically, confirming both $\operatorname{tr}A=-3$ and the step-8
    identity $\det\Phi(t)=\det\Phi(0)e^{t\operatorname{tr}A}$.
  - $x(t)=e^{-t}(1-\cos2t,\ \cos2t+2\sin2t-1,\ 4)^{\mathsf T}$ has $x'-Ax=0$ identically and
    $x(0)=(0,0,4)^{\mathsf T}$; $c=(1,-1,0)^{\mathsf T}$ reproduced by solving $\Phi(0)c=x_0$ by hand.
  - $x(\pi/4)=e^{-\pi/4}(1,1,4)^{\mathsf T}=(0.4559381278,\ 0.4559381278,\ 1.823752511)$, so the
    printed $(0.4559381,\ 0.4559381,\ 1.8237525)$ is right to every digit shown.
  - $\Phi(t)\Phi(0)^{-1}-\exp(tA)=0$ symbolically, so step 7's claim that
    $\exp(tA)=\Phi\Phi(0)^{-1}$ holds for this matrix.
  - Re-derived by hand: the real-form expansion of $e^{\lambda t}v$; $x_{\mathrm{re}}'(0)=\alpha p-\beta q$
    and $x_{\mathrm{im}}'(0)=\alpha q+\beta p$; and the two combinations
    $a(ap+bq)+b(bp-aq)=(a^2+b^2)p$, $b(ap+bq)-a(bp-aq)=(a^2+b^2)q$ of the independence argument.
    All correct. Also checked the application's claim that $M^{-1}K$ is self-adjoint for
    $\langle u,v\rangle_M=u^{\mathsf T}Mv$ (both sides equal $u^{\mathsf T}Kv$), hence $\omega^2$ real,
    and that $\omega^2=0$ really gives a size-2 Jordan block (since $A(0,u)=(u,0)$ and $A(u,0)=0$).
- Citations:
  - coddington-1989 p. 256: Theorem 6 is the linear-system existence-and-uniqueness theorem with
    $a_{jk},b_j$ continuous on an interval $I$ containing $x_0$ and a unique solution *on $I$*; the
    paragraph after it says the successive-approximation proof of Theorem 4 applies with
    $|x-x_0|\le a$ replaced by any $\alpha\le x\le\beta$ containing $x_0$, and that "the interval $I$
    may be infinite in length". The unit's report of this, including the "$I$ may even be infinitely
    long" clause, is faithful. pp. 258-259 §8 set up $y_1=y,\dots,y_n=y^{(n-1)}$ and the system
    (8.2)-(8.3); Theorem 7 is on p. 259 and Theorem 8 (non-local existence for the $n$-th order
    linear equation) on p. 260 — the locator "Theorems 7 and 8, pp. 259-260" is right.
  - dummit-foote-2004 pp. 505-507: the system (*) is set up at the foot of p. 505; p. 506 defines a
    fundamental matrix as "an $n\times n$ matrix whose entries are functions of $t$ and whose
    columns are independent solutions" and states that the solutions "form an $n$-dimensional vector
    space"; Exercise 53 is $\exp(At)$ being a fundamental matrix with $y(t)=\exp(At)C$ solving the
    IVP; Exercise 54 is $MQ$ for nonsingular $Q$; p. 507 says "the $n$ functions in the first row of
    the fundamental matrix for the system form a basis for the solutions to (**)" and Exercise 57 is
    the transpose-of-the-companion-matrix statement. Every locator matched, including the two
    exercise numbers cited inline.
  - hirsch-smale-devaney-2013: p. 129 Theorem — "the solution of the initial value problem
    $X'=AX$ with $X(0)=X_0$ is $X(t)=\exp(tA)X_0$. Moreover, this is the only such solution" — and
    its proof does set $Z(t)=\exp(-tA)Y(t)$ and get $Z'\equiv0$, exactly as the unit's proof step 2
    reports. p. 108 gives the general solution $\sum c_je^{\lambda_jt}V_j$ by diagonalizing and
    solving the decoupled system, as cited. p. 111 Theorem assumes *distinct* eigenvalues, $k_1$
    real and $k_2$ complex, and its blocks are $B_j=\begin{pmatrix}\alpha_j&\beta_j\\-\beta_j&\alpha_j\end{pmatrix}$ —
    matching the unit's transcription sign for sign, and the unit is right that this theorem does not
    cover a diagonalizable matrix with repeated eigenvalues. §3.2 pp. 44-47 is the complex-eigenvalue
    device: p. 45 writes $X(t)=X_{\mathrm{re}}(t)+iX_{\mathrm{im}}(t)$, shows both are real solutions
    by equating real and imaginary parts, and gives $c_1X_{\mathrm{re}}+c_2X_{\mathrm{im}}$ as the
    general solution. Matched.
- Provenance: `npm run check` flags one line — `:::remark (line 195): 9-word run shared with
  dummit-foote-2004 p. 507: "is the transpose of the companion matrix of the"`. Judged standard
  wording, no finding: the run is a fixed technical phrase ("the transpose of the companion matrix")
  with no expressive choice available, it sits inside a sentence that names the authors and carries
  an inline `:cite` to Exercise 57 on p. 507, and the remaining clause departs from the book (we say
  "of the characteristic polynomial", the book writes the polynomial out). Nothing else on p. 507 is
  reproduced; the book's own sentence is an exercise instruction ("Prove that the matrix, A, of
  coefficients of the system of $n$ first order equations obtained from (**) is ..."), and our
  sentence is a report of the result. Other blocks compared by hand: the exponential proof against
  HSD p. 129 (we reorganise it as a corollary of the fundamental-matrix statement and then *describe*
  the book's self-contained route in one sentence, rather than reproducing it — `adapted` with the
  page cited is right); the spectral proof against HSD pp. 45-47 and p. 108 (our route is
  conjugation plus a dimension count, the book's is equating real and imaginary parts and
  diagonalizing, and the independence computation is not in the book at all — `original` is
  defensible); the existence proof is labelled `original` and is indeed our own derivation of parts
  1-3 from a quoted theorem. See also finding 1 on the one place where the `src` is wider than the
  source.
- Style: three idea blocks, each before the proof it describes and describing that proof; no
  "clearly"/"obviously" (grep); one fully worked example carried through all eight method steps with
  checkable numbers and three independent checks; hypotheses collected in their own remark; the
  `prereqs` are all actually used ($\exp$ rule, Jordan form in part 4, determinants and linear
  systems in the method, normal modes in the application, `ode.linear-ode-theory` in the scalar
  remark).
