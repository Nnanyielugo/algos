/**
 * Define a function is_int that takes a number x as an input.

  Have it return True if the number is an integer (as defined above) and False otherwise.

  For example:

  is_int(7.0)   // True    
  is_int(7.5)   // False    
  is_int(-1)    // True   
 */

 function is_int(x) {
    
    if (typeof x === 'number') {
      if (Number.isInteger(x)) {
        return true;
      }
      //  get decimal part, and round to 1 floating point
      const decimal = (x - Math.floor(x)).toFixed(1);
      // check if decimal part is 0 and return boolean
      return parseFloat(decimal) === parseFloat(0.0);
    }
    
   return false;
 }
