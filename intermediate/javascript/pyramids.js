function pyramid(n) {
  const colCount = 2 * n - 1;
  const midpoint = Math.floor(colCount / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < colCount; col++) {
      let range = (midpoint - row <= col) &&  (midpoint + row >= col);
      if (range) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level)
  }
}

function pyramidRecursive(n, row = 0, level = '') {
  const colCount = n * 2 - 1;
  const midpoint = Math.floor(colCount / 2);
  const pyramidRange = (midpoint - row <= level.length) && (midpoint + row >= level.length);
  if (row === n) {
    return;
  }

  if (level.length === colCount) {
    console.log(level)
    return pyramidRecursive(n, row + 1)
  }

  if (pyramidRange) {
    level += '#'
  } else {
    level += ' '
  }
  return pyramidRecursive(n, row, level)
}

pyramidRecursive(9)