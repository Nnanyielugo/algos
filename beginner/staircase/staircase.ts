function staircase(n: number): void {
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

function staircaseRecursive(
  n: number,
  row: number = n,
  stair: string = ''
): typeof staircaseRecursive | void {
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

staircaseRecursive(7);
