### Reverse

#### Question

Define a function called reverse that takes a string text and returns that string in reverse.

For example: reverse("abcd") should return "dcba".

You may get a string containing special characters (!, @, or #).

#### Solution

This is a pretty straightforward problem that can be solved with the following steps:

- create a `result` variable and set it to an empty string
- loop over each character in the string
- for each character:
  - add the character to the start of the `result` string instead of the end.
- return `result`
