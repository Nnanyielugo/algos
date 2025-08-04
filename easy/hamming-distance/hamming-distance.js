/**
 * The hamming distance between two strings of equal length is the number of positions at which these strings vary. 
 * In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.
 * 
 * Given two strings of equal length, calculate and return the the hamming distance.
 */

 function hammingDistance(str1, str2) {
   if (str1.length !== str2.length) {
     throw new Error('Both strings must be of equivalent length')
   }
   let diff = 0;
   
   for (let i = 0; i < str1.length; i++) {
     let letter1Index = str1[i]
     let letter2Index = str2[i]
     if (letter1Index !== letter2Index) {
       diff++
     }
   }
   return diff
 }

console.log(hammingDistance('rover', 'river'))
