/**
 * A falsy value is a value that is considered false when examined as a Boolean. 
 * Recall that a Boolean value could either be true or false. 
 * JavaScript uses type conversion to translate any value to true or false when required. 
 * Examples of falsy values are: false, null, undefined, 0, NaN, and "".
 * 
 * Given an array, remove all falsy values from the array and return an array of only truthy values.
 */

function falsyBouncer(values) {
  const outputValues = []
  values.forEach(value => {
    if (Boolean(value)) {
      outputValues.push(value)
    }
  })
  return outputValues
}

function falsyBouncerWReduce(values) {
  return values.reduce((acc, curr) => {
    if (!!curr) { // can just use if (curr), but i prefer explicit boolean coercions on this one
      acc.push(curr)
    }
    return acc
  }, [])
}

console.log(falsyBouncerWReduce([1, 0, null, '', 5]))