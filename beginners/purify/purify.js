function purify(numbers) {
  const result = [];
  for (let num of numbers) {
    if (num % 2 === 0) result.push(num);
  }
  return result;
}
