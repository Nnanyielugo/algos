function removeHalfDuplicates(arr) {
  return arr.sort().reduce((acc, curr, index) => {
    if (index % 2) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

function removeHalfDuplicatesKeepOrder(arr) {
  const count = {};
  const res = [];
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
