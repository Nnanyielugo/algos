/**
 Write a function called censor that takes two strings, text and word, as input. 
  It should return the text with the word you chose replaced with asterisks. For example:

  censor("this hack is wack hack", "hack") ```

  should return: 

  "this **** is wack ****"
  Assume your input strings won’t contain punctuation or upper case letters.
  The number of asterisks you put should correspond to the number of letters in the censored word.
 */

function censor(text: string, word: string): string {
  const result: string[] = [];
  for (let str of text.split(' ')) {
    if (str === word) {
      // TS requires lib set to ES6 and above for this to work
      // result.push('*'.repeat(word.length));
      let censortext = '';
      for (let _char of str) {
        censortext += '*';
      }
      result.push(censortext);
    } else {
      result.push(str);
    }
  }

  return result.join(' ');
}

console.log(censor('this hack is wack hack', 'hack'));
