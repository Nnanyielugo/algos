function staircase(n, reverse=false) {
  for (let i = 0; i < n; i++) {
    let output = ''
    for (let j = n; j > 0; j--) {
      if (i < (j-1)) {
        output += reverse ? ' ' : ''
      } else {
        output += '#'
      }
    }
    console.log(output)
  }
}


function staircase(n, row=0, stair='') {
  // exit clause
  if (row === n) return;

  // row clause - increment row - fresh stair
  if (stair.length === n) {
    console.log(stair);
    return staircase(n, row+1);
  }

  // stair clause
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  return staircase(n, row, stair);
}

staircase(9)
