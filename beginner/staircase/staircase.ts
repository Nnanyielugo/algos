function staircaseIter(num: number) {
  for (let rowInd = 0; rowInd <= num; rowInd++) {
    let steps = '';
    for (let colInd = 0; colInd <= num; colInd++) {
      if (rowInd >= colInd) {
        steps += '#';
      } else {
        steps += ' ';
      }
    }
    console.log(steps);
  }
}

staircaseIter(7);

function staircaseRecur(
  num: number,
  row = 0,
  spaces = ''
): typeof staircaseRecur | void {
  if (num === row) return;

  if (num === spaces.length) {
    console.log(spaces);
    return staircaseRecur(num, row + 1);
  }

  if (row >= spaces.length) {
    spaces += '#';
  } else {
    spaces += ' ';
  }

  return staircaseRecur(num, row, spaces);
}

staircaseRecur(7);
