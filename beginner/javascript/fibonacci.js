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

let function_calls = 0
function fib_recursive_memo(n, cache) {
  function_calls ++
  if (n < 2) return n
  return (cache[n] || (cache[n] = (fib_recursive_memo(n -1, cache) + fib_recursive_memo(n - 2, cache))))
}
console.log(fib_recursive_memo(10, {}))
console.log('function calls', function_calls)
