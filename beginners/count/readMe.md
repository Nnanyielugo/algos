### Count

##### Question:

Define a function called count that has two arguments called sequence and item.

Return the number of times the item occurs in the list.

For example: `count([1, 2, 1, 1], 1)` should return `3` (because `1` appears `3` times in the list).

Your function should return an integer.

##### Solution:

- create a `times` variable and initialize it as `0`. This will hold the number of times our target item appeared in the list.
- loop through each `item` in the list
- for each `item`:
  - if `item` is equal to target, incremennt `times` by one
- return `times`
