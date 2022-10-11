function factorial(x) {
  let total = 1;
  if (x <= 1) {
    return total;
  }

  for (let i = 1; i <= x; i++) {
    total *= i;
  }

  return total;
}
