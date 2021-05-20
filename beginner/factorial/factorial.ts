/**
 Define a function factorial that takes an integer x as input.

  Calculate and return the factorial of that number.
 */

function factorial(x: number): number {
  let total = 1;
  if (x <= 1) {
    return total;
  }

  for (let i = 1; i <= x; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(7));
