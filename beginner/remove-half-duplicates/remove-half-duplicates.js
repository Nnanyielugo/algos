/*
  If I have a list say l=[1,8,8,8,1,3,3,8] and it's guaranteed that every element occurs an even number of times, 
  how do I make a list with all elements of l now occurring n/2 times. 
  So since 1 occurred 2 times, it should now occur once. 
  Since 8 occurs 4 times, it should now occur twice. Since 3 occurred twice, it should occur once.

  So the new list will be something like k=[1,8,8,3]
*/

function removeHalfDuplicates(arr) {
  return arr.sort().reduce((acc, curr, index) => {
    if (index % 2) {
      acc.push(curr)
    }
    return acc
  }, [])
}

function removeHalfDuplicatesKeepOrder(arr) {
  const count = {}
  const res = []
  for (let num of arr) {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1
    }
    if (count[num] % 2) {
      res.push(num)
    }
  }
  return res
}

console.log(removeHalfDuplicatesKeepOrder([1, 8, 8, 8, 1, 3, 3, 8]))