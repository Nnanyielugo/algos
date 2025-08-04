/**
  write an algorithm that searches for a given value inside a list
  this algorighm should run in O(log n)
 */

function IBinarySearch(numArray: number[], key: number): boolean {
  let start = 0;
  let end = numArray.length - 1;
  while (start <= end) {
    let midpoint = Math.floor((start + end) / 2);

    if (numArray[midpoint] === key) {
      return true;
    } else if (numArray[midpoint] < key) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }
  return false;
}

function RBinarySearch(numArray: number[], key: number): boolean {
  const midpoint = Math.floor(numArray.length / 2);
  if (numArray[midpoint] === key) {
    return true;
  } else if (numArray[midpoint] < key && numArray.length > 1) {
    return RBinarySearch(numArray.splice(midpoint), key);
  } else if (numArray[midpoint] > key && numArray.length > 1) {
    return RBinarySearch(numArray.splice(0, midpoint), key);
  } else {
    return false;
  }
}

console.log(RBinarySearch([5, 7, 12, 16, 36, 39, 42, 56, 72], 16));
