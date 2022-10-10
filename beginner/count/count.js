function count(sequence, item) {
  let times = 0;

  for (let char of sequence) {
    if (char === item) times++;
  }

  return times;
}
