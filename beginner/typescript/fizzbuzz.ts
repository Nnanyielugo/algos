function fizzbuzz(n: number): void {
  for (let i = 1; i <= n; i++) {
    let output: string | number;
    if (i % 15 === 0) {
      output = 'fizzbuzz';
    } else if (i % 3 === 0) {
      output = 'fizz';
    } else if (i % 5 === 0) {
      output = 'buzz';
    } else {
      output = i;
    }
    console.log(output);
  }
}

fizzbuzz(31);
