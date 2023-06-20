Rekursiv

function Rekursiv(n, wo, mitte, wohin) {
  if (n === 1) {
    Scheibe(wo, wohin);
    return;
  }
  Rekursiv(n - 1, wo, wohin, mitte);
  Scheibe(wo, wohin);
  Rekursiv(n - 1, mitte, wo, wohin);
}
