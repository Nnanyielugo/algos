### Remove Half Duplicates

#### Question

Write a function that removes only half of the duplicate numbers in an array.
If I have a list say l=[1,8,8,8,1,3,3,8] and it's guaranteed that every element occurs an even number of times,
how do I make a list with all elements of l now occurring n/2 times.
So since 1 occurred 2 times, it should now occur once.
Since 8 occurs 4 times, it should now occur twice. Since 3 occurred twice, it should occur once.

So the new list will be something like k=[1,8,8,3]

#### Solution

We can solve this in two ways: the first and easier way involves sorting the array and looping over its items, while the second does not involve sorting.

##### Sort first, ask questions later:

In this approach, we're going to use the position of the items in the array to arrive at our solution. This involves taking the following steps:

- create a new empty `results` array
- sort the items in the array passed in
- loop over all the items in the sorted array
- select all items positioned at an even index in the array.
- push those even-indexed items into `results`
- return results

##### Maps make the world go round

This approach involves something called a `character map`, otherwise called a `hash table`. Its [**`run time`**](https://en.wikipedia.org/wiki/Big_O_notation) is faster than the solution that involves sorting first (`O(n log n)` vs `O(n)`), and it involves taking the following steps:

- create a `count` character map whose key will be each item and whose value will bbe the number of times each item occurs in the array
- create a `results` empty array
- loop over all the items of our originnal array
- for each item:
  - if the item does not exist in `count`, set the value of the item's occurence to 1
  - if the item exists in `count` increase the value of the item's occurence by 1
  - if the number of occurence of the current item is an even number, add the item to `results`.
- return `results`
