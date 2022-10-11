function vowelCounter(word) {
  let vowelCount = 0;
  const vowels = 'aeiou';

  word
    .toLowerCase()
    .split('')
    .forEach((char) => {
      if (vowels.indexOf(char) !== -1) {
        vowelCount++;
      }
    });

  return vowelCount;
}

console.log(vowelCounter('anehizxcv'));
