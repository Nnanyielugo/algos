function dedupe(nums: number[]): number[] {
  const result: number[] = [];

  for (let num of nums) {
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }

  return result;
}

console.log(dedupe([1, 2, 2, 2, 1, 3, 4, 3, 3, 1]));
