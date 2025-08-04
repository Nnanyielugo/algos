function chunk(arr: number[], size: number): number[][] {
  const results: number[][] = [];

  for (let num of arr) {
    const chunk = results[results.length - 1];
    if (!chunk || chunk.length === size) {
      results.push([num]);
    } else {
      chunk.push(num);
    }
  }

  return results;
}

// console.log(chunk([1, 2, 3, 4], 2));
// console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(chunk([1, 2, 3, 4, 5], 10));
