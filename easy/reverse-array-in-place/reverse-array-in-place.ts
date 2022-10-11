function reverseArrayInPlace(arr: any[]): any[] {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    const swapIndex = arr.length - 1 - i;
    arr[i] = arr[swapIndex];
    arr[swapIndex] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 3, 5, 7, 9]));
console.log(reverseArrayInPlace([1, 3, 5, 7, 9, 11]));
