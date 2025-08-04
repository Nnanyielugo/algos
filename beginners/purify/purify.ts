function purify(numbers: number[]): number[] {
  const result: number[] = [];
  for (let num of numbers) {
    if (num % 2 === 0) result.push(num);
  }
  return result;
}
