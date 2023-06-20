// Iterativ

function Iterativ(n, wo, mitte, wohin) {
    const SchritteGes = Math.pow(2, n) - 1;

  for (let i = 1; i <= SchritteGes; i++) {
    if (i % 2 !== 0) {
      Scheiben(wo, wohin);
    } else {
      if (n % 2 === 0) {
        Scheiben(wo, mitte);
      } else {
        Scheiben(mitte, wohin);
      }
    }
  }
}
