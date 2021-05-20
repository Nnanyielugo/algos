/*
  Write a JavaScript program to get the first n Fibonacci numbers. 
  Note: The Fibonacci Sequence is the series of numbers: 
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
  Each subsequent number is the sum of the previous two
*/

function fib_loop(n){
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

function fib_rcursive_naive(n) {
  if (n < 2) return n;
  return fib_rcursive_naive(n - 1) + fib_rcursive_naive(n - 2)
}

function fib_recursive_memo(n, cache) {
  if (n < 2) return n;
  if (cache[n]) {
    return cache[n];
  }
  return cache[n] = fib_recursive_memo(n-1, cache) + fib_recursive_memo(n-2, cache)
}
console.log(fib_recursive_memo(10, {}))
