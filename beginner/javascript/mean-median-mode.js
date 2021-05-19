/**
  write an algorithm that takes an array a parameter, and returns an object that has the following properties:
  mean - the mean of all the numbers in the array
  median - the median of all the numbers in the array
  mode - the mode of all the numbers in the array
 */

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr),
  };
}

function getMean(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  const average = total / arr.length;
  return +average.toFixed(2);
}

function getMedian(arr) {
  const sortedArr = arr.sort();
  const medianIndex = arr.length / 2;
  let median;

  if (arr.length % 2 === 0) {
    median = (sortedArr[medianIndex] + sortedArr[medianIndex - 1]) / 2;
  } else {
    median = sortedArr[Math.floor(medianIndex)];
  }

  return median;
}

function getMode(arr) {
  const hashTable = {};
  let maxFrequency = 0;
  let modes = [];

  for (let num of arr) {
    if (!hashTable[num]) {
      hashTable[num] = 1;
    } else {
      hashTable[num]++;
    }

    if (hashTable[num] > maxFrequency) {
      maxFrequency = hashTable[num];
      modes = [num];
    } else if (hashTable[num] === maxFrequency) {
      modes.push(num);
    }
  }

  // case: all items occur at the same frequency
  if (modes.length === Object.keys(hashTable).length) {
    modes = [];
  }

  return modes;
}

console.log(meanMedianMode([1, 4, 5, 3, 8, 7, 5, 7, 9]));
console.log(meanMedianMode([4, 6, 7, 9, 1, 5]));
