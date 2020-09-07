function pyramids(n) {
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < (2 * n - 1); col++) {
      let midpoint = Math.floor((2 * n-1) / 2);
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