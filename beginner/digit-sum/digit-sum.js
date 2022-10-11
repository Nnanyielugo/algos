function digit_sum(n) {
  const copy_n = n.toString();
  let total = 0;

  for (let str of copy_n) {
    const num_str = parseInt(str);
    total += num_str;
  }

  return total;
}
