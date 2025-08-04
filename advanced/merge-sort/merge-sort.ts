function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midIndex);
  const secondHalf = arr.slice(midIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  while (arr1.length && arr2.length) {
    let minElem;
    if (arr1[0] < arr2[0]) minElem = arr1.shift();
    else minElem = arr2.shift();
    result.push(minElem);
  }
  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
  return result;
}

console.log(mergeSort([5, 3, 8, 2, 1, 4]));
