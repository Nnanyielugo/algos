/**
 Define a function called is_prime that takes a number x as input.

  For each number n from 2 to x - 1, test if x is evenly divisible by n.

  If it is, return False.

  If none of them are, then return True.
 */

function isPrime(x: number): boolean {
  // handle negative numbers, 0 and 1
  if (x < 2) {
    return false;
  }

  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }

  return true;
}
