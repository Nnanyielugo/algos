/**
 The hamming distance between two strings of equal length is the number of positions at which these strings vary. 
  In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.
  
  Given two strings of equal length, calculate and return the the hamming distance.
 */

function hammingDistance(str1: string, str2: string): number {
  if (str1.length !== str2.length) {
    throw new Error('Both strings must be of equal length');
  }

  let diff = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      diff++;
    }
  }

  return diff;
}

console.log(hammingDistance('rover', 'river'));
