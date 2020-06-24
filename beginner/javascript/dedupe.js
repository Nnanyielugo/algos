/**
 * Write a function remove_duplicates that takes in a list and removes elements of the list that are the same.

  For example: remove_duplicates([1, 1, 2, 2]) should return [1, 2].

  Don’t remove every occurrence, since you need to keep a single occurrence of a number.
  The order in which you present your output does not matter. So returning [1, 2, 3] is the same as returning [3, 1, 2].
  Do not modify the list you take as input! Instead, return a new list.
 */

function dedupe(nums) {
  const result = [];
  for (let num of nums) {
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }
  return result;
}
