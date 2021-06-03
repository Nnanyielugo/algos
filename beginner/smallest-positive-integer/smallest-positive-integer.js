function smallestPositiveInteger(A) {
  let result;

  for (let i = 1; i < Infinity; i++) {
    // find number in array
    const found = A.find((num) => num === i);
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
