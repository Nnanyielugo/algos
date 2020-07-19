/**
 * Given two or more arrays, write a function that combines their elements into one array without any repetition
 */
function mergeArray(...args) {
  let mergedArray = []
  args.forEach(argArray => {
    mergedArray = [...mergedArray, ...argArray]
  })

  return mergedArray.reduce((acc, curr) => {
    if (acc.includes(curr)) {
      return acc
    }
    return [...acc, curr]
  }, [])

  // return mergedArray.filter((item, index) => mergedArray.indexOf(item) === index)

  // return [...new Set([...mergedArray])]

}

console.log(mergeArray([1,2,3,3,3], [1,4,5,2]))