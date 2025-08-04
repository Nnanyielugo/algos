function anti_vowel(text) {
  const vowels = 'aeiou';
  let result = '';

  for (let char of text) {
    let charIndex = vowels.indexOf(char.toLowerCase());
    if (charIndex === -1) result += char;
  }

  return result;
}

console.log(anti_vowel('La OrangE'));
