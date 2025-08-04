function maximumUniqueSubarray(nums) {
  const charMap = {};
  let total = 0;
  let highest = 0;
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    if (!charMap[num]) {
      charMap[num] = 0;
    }
    charMap[num]++;
    total += num;

    while (charMap[num] > 1) {
      const leftNum = nums[i];
      charMap[leftNum]--;
      total -= leftNum;
      i++;
    }

    highest = Math.max(total, highest);
  }

  return highest;
}

console.log(maximumUniqueSubarray([5, 5, 9, 18, 7, 9, 16, 13, 11, 14, 2]));
console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
