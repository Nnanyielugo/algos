/**
 Define a function called count that has two arguments called sequence and item.

  Return the number of times the item occurs in the list.

  For example: count([1, 2, 1, 1], 1) should return 3 (because 1 appears 3 times in the list).
 */

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
