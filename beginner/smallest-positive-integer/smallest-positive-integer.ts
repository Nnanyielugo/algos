function smallestPositiveInteger(A: number[]): number {
  let result: number;

  for (let i = 1; i < Infinity; i++) {
    // find number in array
    // using filter and shift because Array.prototype.find() is an ES6 feature
    const found = A.filter((num) => num === i).shift();
    if (!found) {
      result = i;
      break;
    }
  }

  return result;
}

console.log(smallestPositiveInteger([1, 3, 6, 4, 1, 2]));
console.log(smallestPositiveInteger([1, 2, 3]));
console.log(smallestPositiveInteger([-1, -3]));
