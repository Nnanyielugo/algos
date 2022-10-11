function sortArrayByParity(nums) {
  const result = [];
  let even = 0;
  let odd = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 === 0) {
      result[even] = num;
      even += 2;
    } else {
      result[odd] = num;
      odd += 2;
    }
  }
  return result;
}

console.log(sortArrayByParity([4, 2, 5, 7]));
console.log(sortArrayByParity([888, 505, 627, 846]));
console.log(sortArrayByParity([3, 1, 4, 2]));
console.log(sortArrayByParity([1, 1, 0, 4]));
console.log(sortArrayByParity([2, 3]));
