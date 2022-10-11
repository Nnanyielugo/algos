### Anagrams

##### Question:

Given two strings S1 and S2 of size m and n respectively, you need to check whether the two strings are an anagram of each other or not. S1 is an anagram of S2 if the characters of S1 can be rearranged to form S2.

For example:
Input: S1 = “admirer” , S2 = “married”
Output: True

Input: S1 = "two", S2 = "far"
Output: False

#### Solution

We can solve this in two ways: the first and easier way involves converting the strings into an array, sorting them, and converting them back into strings before doing a string comparison, while the other solution involves using a `character map`

##### Naive Solution

- remove all non-word characters (including empty spaces)
- convert words to lower case. This is because we will be using strict equality to determine sameness and we do not want case discrepancies to affect that outcome
- convert words into their respective array
- sort arrays
- join arrays back to their respective string
- compare the sorted strings

##### Solution with Charcter Map

- remove all non-word characters (including empty spaces) and convert to lower case
- return false if cleaned strings do not have the same length (means they cannot be anagrams of each other)
- create `character maps` of each word with the keys being the letters in the word and the value being the number of times that letter occurs
- pick any character map and loop over its properties
- for each character key:
  - if the character does not occur in the other string, return `false`
  - if the character does occur, but the number of occurence is unequal, return `false`
- return `true` (assuming none of the conditions to return false are met, meaning both words are anagrams of each other)
