/**
 * Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. 
 */

 function vowelCounter(string) {
   let vowelCount = 0;
   const vowels = 'aeiou'
   
   string.toLowerCase().split('').forEach(char => {
    if (vowels.indexOf(char) !== -1) {
      vowelCount++
    }
   });

   return vowelCount;
 }

 console.log(vowelCounter('anehizxcv'))
