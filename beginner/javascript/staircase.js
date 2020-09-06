function staircase(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (row >= col) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
    console.log(stair)
  }
}

function staircaseRev(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = n-1; col >= 0; col--) {
      if (row < col) {
        stair += ' '
      } else {
        stair += '#'
      }
    }
    console.log(stair)
  }
}

// recursive staircase function, with reverse option
// function staircase(reverse=false, n, row=reverse ? n-1 : 0, stair='') {
//   // exit clause
//   const exitClause = reverse ? row < 0: row === n;
//   if (exitClause) return;

//   // row clause - increment row - fresh stair
//   if (stair.length === n) {
//     console.log(stair);
//     return staircase(reverse, n, reverse ? row-1 : row+1);
//   }

//   // stair clause
//   if (stair.length <= (reverse ? row-1 : row)) {
//     stair += (reverse ? ' ' : '#');
//   } else {
//     stair += reverse ? '#' : ' ';
//   }

//   return staircase(reverse, n, row, stair);
// }

staircaseRev(9)
