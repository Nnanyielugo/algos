function matrix(n) {
  const result = [];
  // create n numbber of arrays in result
  for (let _ = 0; _ < n; _++) {
    result.push([]);
  }

  let counter = 1;
  let start_row = 0;
  let start_col = 0;
  let end_row = n-1;
  let end_col = n-1;

  while ((start_row <= end_row) && (start_col <= end_col)) {
    // top row
    for (let i = start_col; i <= end_col; i++) {
      result[start_row][i] = counter;
      counter++;
    }
    start_row++;

    // right col
    for (let i = start_row; i <= end_row; i++) {
      result[i][end_col] = counter;
      counter++;
    }
    end_col--;

    // bottom row
    for (let i = end_col; i >= start_col; i--) {
      result[end_row][i] = counter;
      counter++;
    }
    end_row--;

    // left col
    for (let i = end_row; i >= start_row; i--) {
      result[i][start_col] = counter;
      counter++
    }
    start_col++;
  }
  

  return result;
}

const mat = matrix(3)
mat.forEach(m => console.log(m))
