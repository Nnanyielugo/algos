function spiral_matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let start_row = 0;
  let start_col = 0;
  let end_row = n-1;
  let end_col = n-1;
  let counter = 1;
  while ((start_row <= end_row) && (start_col <= end_col)) {
    for (let i = start_col; i <= end_col; i++) {
      results[start_row][i] = counter;
      counter++;
    }
    start_row++;
    for (let i = start_row; i <= end_row; i++) {
      results[i][end_col] = counter;
      counter++;
    }
    end_col--;
    for (let i = end_col; i >= start_col; i--) {
      results[end_row][i] = counter;
      counter++
    }
    end_row--;
    for (let i = end_row; i >= start_row; i--) {
      results[i][start_col] = counter;
      counter++;
    }
    start_col++;
  }
  return results;
}

const mat = spiral_matrix(3)
mat.forEach(m => console.log(m))
