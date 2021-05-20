/**
 * Define a function called anti_vowel that takes one string, text, as input and returns the text with all of the vowels removed.
 * For example: anti_vowel("Hey You!") should return "Hy Y!". Don’t count Y as a vowel. Make sure to remove lowercase and uppercase vowels.
 */

 function anti_vowel(text){
   const vowels = 'aeiouAEIOU';
    let result = '';

    for (let char of text) {
      let charIndex = vowels.indexOf(char);
      // check that char is not in vowels
      if(charIndex === -1) 
        result += char
    }

    return result
 }
 