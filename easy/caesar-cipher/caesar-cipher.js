function caesarCipher(str, num) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  // cover edge case where num is greater than the length of the alphabets
  let shiftingNum = num % alphabets.length;

  const lowerStr = str.toLowerCase();
  let output = '';

  for (let char of lowerStr) {
    if (char === ' ') {
      output += char;
      continue;
    }

    const originIndex = alphabets.indexOf(char);
    let destinationIndex = originIndex + shiftingNum;

    if (destinationIndex > alphabets.length - 1) {
      // case: positve num where additon might be greater than alphabets index
      destinationIndex = destinationIndex - alphabets.length;
    } else if (destinationIndex < 0) {
      // case: negative num where addition(subtraction really) might be less than zero
      destinationIndex = alphabets.length + destinationIndex;
    }

    let destinationChar = alphabets[destinationIndex];

    // case: return uppercase letters to their original cases
    const originalChar = str[lowerStr.indexOf(char)];
    if (originalChar === char.toUpperCase()) {
      destinationChar = alphabets[destinationIndex].toUpperCase();
    }

    output += destinationChar;
  }

  return output;
}

console.log(caesarCipher('Zoo keeper', 90));
console.log(caesarCipher('app developer', -27));
