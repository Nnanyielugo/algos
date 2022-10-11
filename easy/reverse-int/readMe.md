### Reverse Integer

#### Question

Given an integer, reverse it while preserving the sign if it is a negative integer.

For example `reverseInt(981)` will be `189`, `reverseInt(500)` will be `5`, and `reverseInt(-15)` will be `-51`,

#### Solution

Solving this problem requires some knowledge of string and integer manipulation, and involves the following steps:

- extract and store an indication of whether the integer is negative or positive. Maybe name this variable `sign`. (eg if integer is positive, give `sign` value of `1`, else give `sign` value of `0`)
- store an absolute version (with possible negative indicators stripped out) of the integer. Maybe name it `absolute_num`
- convert `absolute_num` to a string.
- convert the now stringified `absolute_num` to an array.
- using an arry builtIn method, reverse the array of stringified `absolute_num` chars.
- convert back to a string.
- connvert back to an integer.
- multiply the reversed `absolute_num` with the stored sign symbol.
- return the result of the multiplication.
