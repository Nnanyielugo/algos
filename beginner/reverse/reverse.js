/**
 * Define a function called reverse that takes a string textand returns that string in reverse. For example: reverse("abcd") should return "dcba".

  You may get a string containing special characters (for example, !, @, or #).
 */

function reverse(text) {
  let result = '';

  for (let char of text) {
    result = char + result;
  }
  return result;
}
