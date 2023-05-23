// // brute force
// function twoSum(nums: number[], target: number): number[] | void {
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let diff = target - num;
//     // find diff in nums, starting from i + 1,
//     // so we don't have dupes of the same num
//     let diffIndex = nums.indexOf(diff, i + 1);
//     if (diffIndex !== -1) {
//       return [i, diffIndex];
//     }
//   }
// }

// Solution with CharMap. O(n)
function twoSum(nums: number[], target: number): number[] | void {
  const holdingMap: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    // simple truthy check won't work because we have number as key and index as value
    // and 0 evaluates to false
    if (holdingMap[diff] !== undefined) {
      return [holdingMap[diff], i];
    }

    holdingMap[num] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
