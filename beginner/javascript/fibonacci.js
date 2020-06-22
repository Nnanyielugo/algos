function fibonacci(n){
  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp
    console.log(b)
  }
  return b
}

console.log(fibonacci(10))

// function fibonacci(n){
//   let a = 0;
//   let b = 1;

//   while (n >= 0){
//     let temp = a + b;
//     a = b;
//     b = temp;
//     n--;
//     console.log(a)
//   }
//   return a
// }