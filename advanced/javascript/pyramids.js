function pyramid(n) {
  const colNum = (2 * n) - 1;
  const midpoint = Math.floor(colNum/2);

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < colNum; col++) {
      if (midpoint + row >= col && midpoint - row <= col) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }

}

function pyramidRecursive(n, row = 0, level = '') {
  if (row === n) {
    return
  }

  const colNum = (n * 2) - 1;
  const midpoint = Math.floor(colNum/2)

  if (level.length === colNum) {
    console.log(level)
    return pyramidRecursive(n, row+1)
  }

  if (midpoint + row >= level.length && midpoint - row <= level.length) {
    level += '#'
  }  else {
    level += ' '
  }

  return pyramidRecursive(n, row, level)

}

pyramidRecursive(9)
// pyramid(3)