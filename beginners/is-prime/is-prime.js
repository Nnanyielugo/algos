/**
  Define a function called is_prime that takes a number x as input.

  For each number n from 2 to x - 1, test if x is evenly divisible by n.

  If it is, return False.

  If none of them are, then return True.
 */

 function is_prime(x) {
   if (x === 0 || x === 1)
     return false;

   if (x < 0)
    return false;

   for (let i = 2; i < x; i++) {
     if (x % i === 0)
      return false;
   }
   return true;
 }
