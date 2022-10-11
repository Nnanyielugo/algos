function digit_sum(n: number): number {
  const stringified_num = n.toString();
  let total = 0;
  for (let char of stringified_num) {
    total += parseInt(char);
  }
  return total;
}
