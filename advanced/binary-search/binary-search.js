/**
  write an algorithm that searches for a given value inside a list
  this algorighm should run in O(log n)
 */

function IBinarySearch(numArray, key) {
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

function RBinarySearch(numArr, key) {
  const midpoint = Math.floor(numArr.length / 2);
  if (numArr[midpoint] === key) {
    return true;
  } else if (numArr[midpoint] < key && numArr.length > 1) {
    return RBinarySearch(numArr.splice(midpoint), key);
  } else if (numArr[midpoint] > key && numArr.length > 1) {
    return RBinarySearch(numArr.splice(0, midpoint), key);
  } else {
    return false;
  }
}

console.log(RBinarySearch([5, 7, 12, 16, 36, 39, 42, 56, 72], 56));
