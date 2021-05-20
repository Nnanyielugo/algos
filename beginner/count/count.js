/**
 * Define a function called count that has two arguments called sequence and item.

  Return the number of times the item occurs in the list.

  For example: count([1, 2, 1, 1], 1) should return 3 (because 1 appears 3 times in the list).

  Your function should return an integer.
  The item you input may be an integer, string, float, or even another list!
 */

 function count(sequence, item) {
   let times = 0;

   for (let char of sequence) {
     if (char === item)
       times ++;
   }

   return times;
 }
 