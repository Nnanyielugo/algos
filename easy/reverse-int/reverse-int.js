function reverseInt(nums) {
  const sign = nums > 0 ? 1 : -1; // alternatively can use Math.sign(nums)
  const int = Math.abs(nums);
  const reversed = int.toString().split('').reverse().join('');

  return +reversed * sign;
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
