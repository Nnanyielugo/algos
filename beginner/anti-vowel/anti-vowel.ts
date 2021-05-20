/*
  Define a function called anti_vowel that takes one string, text, as input and returns the text with all of the vowels removed.
  For example: anti_vowel("Hey You!") should return "Hy Y!". Don’t count Y as a vowel.
  Make sure to remove lowercase and uppercase vowels.
*/
function antiVowel(text: string): string {
  const vowels = 'aeiouAEIOU';
  let result = '';

  for (let char of text) {
    if (vowels.indexOf(char) === -1) {
      result += char;
    }
  }

  return result;
}

console.log(antiVowel('Hey You!'));
