/**
  Write a function called censor that takes two strings, text and word, as input. 
  It should return the text with the word you chose replaced with asterisks. For example:

  censor("this hack is wack hack", "hack") ```

  should return: 

  ```js
  "this **** is wack ****"
  Assume your input strings won’t contain punctuation or upper case letters.
  The number of asterisks you put should correspond to the number of letters in the censored word.
 */

 function censor(text, word) {
   const result = [];
   const str_array = text.split(' ');

   for (let char of str_array) {
    if (char === word) {
      const censor_char = '*'.repeat(word.length);
      result.push(censor_char);
    } else {
      result.push(char)
    }
   }
   return result.join(' ')
 }
