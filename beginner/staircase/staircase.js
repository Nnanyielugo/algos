function staircase(n) {
  for (let row = 0; row <= n - 1; row++) {
    let stair = '';
    for (let col = n - 1; col >= 0; col--) {
      if (row >= col) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

function staircaseRecursive(n, row = n, stair = '') {
  // exit clause
  if (row === 0) {
    return;
  }

  // step clause
  if (stair.length === n) {
    console.log(stair);
    return staircaseRecursive(n, row - 1);
  }

  // stair concatenation clause
  if (stair.length >= row - 1) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return staircaseRecursive(n, row, stair);
}

// staircase(9)
staircaseRecursive(5);
