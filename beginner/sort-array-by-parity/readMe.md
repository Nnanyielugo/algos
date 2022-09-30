### Sort Array By Parity

#### Question

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

Example 1:

Input: nums = `[4,2,5,7]`
Output: `[4,5,2,7]`
Explanation: `[4,7,2,5], [2,5,4,7], [2,7,4,5]` would also have been accepted.
Example 2:

Input: nums = `[2,3]`
Output: `[2,3]`

[leetcode](https://leetcode.com/problems/sort-array-by-parity-ii/)

#### Explanation

What we're tryinng to achieve here is to take the input array and arrange in a way that odd numbers will be in odd number positions (1, 3, 5, ...) and even numbers will appear in even number positions (0, 2, 4, ...). Remember that arrays/lists are zero indexed.

#### Solution

- create an empty `result` array
- create a variable `even`. Initialize to 0.
- create a variable `odd`. Initialize to 1.
- create a loop from 0 to the length of the array (last count exclusive)
- for each number at position 0 to input lenth (less one),
- if the number is a even number, place the number at position `even` in `result`. Increase `even` by 2.
- if the number is a odd number, place the number at position `odd` in `result`. Increase `odd` by 2.
- return `result`.
