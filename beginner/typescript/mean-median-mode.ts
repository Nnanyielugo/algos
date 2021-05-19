/**
  write an algorithm that takes an array a parameter, and returns an object that has the following properties:
  mean - the mean of all the numbers in the array
  median - the median of all the numbers in the array
  mode - the mode of all the numbers in the array
 */

interface Result {
  mean: number;
  median: number;
  mode: number[];
}

class MeanMedianMode {
  constructor(private arr: number[]) {}

  getMean(): number {
    const total = this.arr.reduce((acc, curr) => acc + curr, 0);
    const average = total / this.arr.length;
    return +average.toFixed(2);
  }

  getMedian(): number {
    const sortedArr = this.arr.sort();
    const medianIndex = this.arr.length / 2;
    let median: number;
    if (this.arr.length % 2 === 0) {
      median = (sortedArr[medianIndex] + sortedArr[medianIndex - 1]) / 2;
    } else {
      median = sortedArr[Math.floor(medianIndex)];
    }

    return median;
  }

  getMode(): number[] {
    const hashTable = {};
    let modes: number[] = [];
    let maxFrequency = 0;
    for (let num of this.arr) {
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
    if (modes.length == Object.keys(hashTable).length) {
      modes = [];
    }

    return modes;
  }

  result: Result = {
    mean: this.getMean(),
    median: this.getMedian(),
    mode: this.getMode(),
  };
}

const meanMedianMode = new MeanMedianMode([1, 4, 5, 3, 8, 7, 5, 7, 9]);
const meanMedianMode2 = new MeanMedianMode([4, 6, 7, 9, 1, 5]);

console.log(meanMedianMode.result);
console.log(meanMedianMode2.result);
