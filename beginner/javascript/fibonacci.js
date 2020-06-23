function fibonacci(n){
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp
    console.log(a)
  }
  return a
}

console.log(fibonacci(10))