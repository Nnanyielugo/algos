// Given a list of lists, write a program to find the list with maximum length. The output should be in the form (list, list_length).
function maxLengthSublist(list) {
  let maxSubList = list.reduce((acc, curr) => {
    if (acc.length > curr.length) {
      return acc
    }
    return curr
  }, [])
  return [maxSubList, maxSubList.length]
}

console.log(maxLengthSublist([['A'], ['A', 'B'], ['A', 'B', 'C']]))
console.log(maxLengthSublist([[1, 2, 3, 9, 4], [5], [3, 8], [2]]))