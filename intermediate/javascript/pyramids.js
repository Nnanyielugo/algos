function pyramids(n) {
  for (let row = 0; row < n; row++) {
    let level = '';
    let colCount = 2 * n - 1;
    for (let col = 0; col < colCount; col++) {
      let midpoint = Math.floor(colCount / 2);
      let range = (midpoint + row >= col) &&  (midpoint - row <= col);
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