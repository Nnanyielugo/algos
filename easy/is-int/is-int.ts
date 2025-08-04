/**
 Define a function is_int that takes a number x as an input.

  Have it return True if the number is an integer (as defined above) and False otherwise.

  For example:

  is_int(7.0)   # True    
  is_int(7.5)   # False    
  is_int(-1)    # True   
 */

function isInt(x: number): boolean {
  // need target lib set to ES6 to use Number.isInteger so polyfill is used instead
  // also eliminates need for further checking
  if (isFinite(x) && Math.floor(x) === x) {
    return true;
  }

  return false;
}

console.log(isInt(4.00001));
