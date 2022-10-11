function removeHalfDuplicates(arr: number[]): number[] {
  return arr.sort().reduce((acc: number[], curr: number, index: number) => {
    if (index % 2) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

interface Count {
  [index: number]: number;
}

function removeHalfDuplicatesKeepOrder(arr: number[]): number[] {
  const count: Count = {};
  const res: number[] = [];
  for (let num of arr) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    if (count[num] % 2) {
      res.push(num);
    }
  }
  return res;
}

console.log(removeHalfDuplicatesKeepOrder([1, 8, 8, 8, 1, 3, 3, 8]));
