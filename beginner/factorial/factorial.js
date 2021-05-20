/**
  Define a function factorial that takes an integer x as input.

  Calculate and return the factorial of that number.
 */

 function factorial(x) {
   let total = 1;
   if (x === 0 || x === 1){
     return total;
   }

   for (let i = 1; i <= x; i++) {
     total *= i;
   }

   return total;
 }
