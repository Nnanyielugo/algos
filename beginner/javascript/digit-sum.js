/**
  Write a function called digit_sum that takes a positive integer n as input and returns the sum of all that number’s digits. 
  For example: digit_sum(1234) should return 10 which is 1 + 2 + 3 + 4. 
  (Assume that the number you are given will always be positive.)
 */

 function digit_sum(n){
   const copy_n = n.toString();
   let total = 0;

   for (let str of copy_n) {
     const num_str = parseInt(str);
     total += num_str;
   }

   return total
 }
