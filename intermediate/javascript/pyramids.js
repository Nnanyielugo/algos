function pyramids(n) {
  const colCount = 2 * n - 1;
  const midpoint = Math.floor(colCount / 2);
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < colCount; col++) {
      let range = (midpoint - row >= col) &&  (midpoint + row <= col);
      if (range) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level)
  }
}

pyramids(9)