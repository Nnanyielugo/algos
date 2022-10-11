function factorial(x: number): number {
  let total = 1;
  if (x <= 1) {
    return total;
  }

  for (let i = 1; i <= x; i++) {
    console.log('to', total, i);
    total *= i;
  }
  return total;
}

console.log(factorial(7));
