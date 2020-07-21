// Given two lists list1 and list2, check if list2 is a subset of list1 and return True or False accordingly.
function checkNestedSubsets(list1, list2) {
  let tempList2 = [...list2]
  let count = 0;
  for (let i = list1.length - 1; i >= 0; i--) { // loop in the reverse direction of the spicing
    let list1Arr = list1[i]
    for (let j = tempList2.length - 1; j >= 0; j--) {
      let list2Arr = tempList2[j]
      let bool = list2Arr.every(num => {
        let equalLengths = list1Arr.length === list2Arr.length;
        return equalLengths && list1Arr.includes(num)
      })
      if (bool) count++
    }
  }
  return count === list2.length
}

console.log(checkNestedSubsets([[2, 3, 1], [4, 5], [6, 8]], [[4, 5], [6, 8]]))
console.log(checkNestedSubsets([[2, 3, 1], [4, 5], [6, 8]], [[4, 5], [6, 8], [2, 3, 1]]))
console.log(checkNestedSubsets([['a', 'b'], ['e'], ['c', 'd']], [['g']]))
console.log(checkNestedSubsets([[2, 3, 1], [4, 5], [6, 8]], [[6, 8], [4, 5]]))
console.log(checkNestedSubsets([['a', 'b'], ['e'], ['c', 'd']], [['e']]))
console.log(checkNestedSubsets([['a', 'b'], ['e'], ['c', 'd']], [['b', 'a'], ['e']]))
console.log(checkNestedSubsets([['a', 'b'], ['e'], ['c', 'd']], [['b', 'a'], ['c']]))
