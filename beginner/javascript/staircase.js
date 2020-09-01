// function staircase(n, reverse=false) {
//   for (let i = 0; i < n; i++) {
//     let output = ''
//     for (let j = n; j > 0; j--) {
//       if (i < (j-1)) {
//         output += reverse ? ' ' : ''
//       } else {
//         output += '#'
//       }
//     }
//     console.log(output)
//   }
// }


function staircase(reverse=false, n, row=reverse ? n-1 : 0, stair='') {
  // exit clause
  const exitClause = reverse ? row < 0: row === n;
  if (exitClause) return;

  // row clause - increment row - fresh stair
  if (stair.length === n) {
    console.log(stair);
    return staircase(reverse, n, reverse ? row-1 : row+1);
  }

  // stair clause
  if (stair.length <= (reverse ? row-1 : row)) {
    stair += (reverse ? ' ' : '#');
  } else {
    stair += reverse ? '#' : ' ';
  }

  return staircase(reverse, n, row, stair);
}

staircase(false, 9)
