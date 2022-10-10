function dedupe(nums) {
  const result = [];
  for (let num of nums) {
    if (result.indexOf(num) === -1) {
      result.push(num);
    }
  }
  return result;
}
