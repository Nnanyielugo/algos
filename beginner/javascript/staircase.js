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

staircase(9)