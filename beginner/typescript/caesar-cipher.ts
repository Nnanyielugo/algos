// write out an algorithm that shifts every letter of a given string
// by the number that was passed in.
// the algorithm should account for nagative numbers
// example caesarCipher('zoo keeper', 2), should output 'bqq mggrgt'

function caesarCipher(str: string, num: number): string {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();
  let output = '';

  for (let char of lowerStr) {
    if (char === ' ') {
      output += char;
      continue;
    }

    const originIndex = alphabets.indexOf(char);
    let destinationIndex = originIndex + num;

    if (destinationIndex > alphabets.length - 1) {
      // case: positve num where additon might be greater than alphabets index
      destinationIndex = destinationIndex - alphabets.length;
    } else if (destinationIndex < 0) {
      // case: negative num where addition(subtraction really) might be less than zero
      destinationIndex = alphabets.length + destinationIndex;
    }

    const destinationChar = alphabets[destinationIndex];
    output += destinationChar;
  }

  return output;
}

console.log(caesarCipher('zoo keeper', 9));
console.log(caesarCipher('app developer', -2));
