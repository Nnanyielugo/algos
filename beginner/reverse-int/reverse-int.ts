function reverseInt(input: number): number {
  const sign = Math.sign(input);
  const reversed = String(Math.abs(input)).split('').reverse().join('');
  // Math.abs(input).toString().split...
  return sign * +reversed;
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
