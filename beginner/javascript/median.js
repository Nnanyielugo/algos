/**
 * Write a function called median that takes a list as an input and returns the median value of the list. 
  For example: median([1, 1, 2]) should return 1.

  The list can be of any size and the numbers are not guaranteed to be in any particular order. Make sure to sort it!
  If the list contains an even number of elements, your function should return the average of the middle two.
 */

function median(nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  }

  const sorted_nums = nums.sort();
  if (length % 2 === 0) {
    const mid = length / 2;
    const upper = sorted_nums[mid];
    const lower = sorted_nums[mid - 1];
    const med = (upper + lower) / 2;
    return med;
  } else {
    const mid = Math.floor(length / 2);
    const med = sorted_nums[mid];
    return med;
  }
}
