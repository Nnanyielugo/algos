function count(sequence: number[], item: any): number {
  let times = 0;

  for (let seq of sequence) {
    if (seq === item) {
      times++;
    }
  }
  return times;
}

console.log(count([1, 2, 4, 4, 1, 1, 2, 1], 1));
