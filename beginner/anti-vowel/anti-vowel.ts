function antiVowel(text: string): string {
  const vowels = 'aeiou';
  let result = '';

  for (let char of text) {
    if (vowels.indexOf(char.toLowerCase()) === -1) {
      result += char;
    }
  }

  return result;
}

console.log(antiVowel('Hey You!'));
