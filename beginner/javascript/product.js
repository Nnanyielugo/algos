/**
 * Define a function called product that takes a list of integers as input and returns the product of all of the elements in the list. 
  For example: product([4, 5, 5]) should return 100 (because 4 * 5 * 5 is 100).

  Don’t worry about the list being empty.
  Your function should return an integer.
 */

function product(ints) {
  let result = 1;
  for (let i of ints)
    result *= i;
  return result;
}
