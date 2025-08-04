/**
 Write a python program to get the first n Fibonacci numbers. 
  Note: The Fibonacci Sequence is the series of numbers:
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
  Each subsequent number is the sum of the previous two
 */

function fib_loop(n: number): number {
  let a = 0;
  let b = 1;

  for (let i = n; i > 0; i--) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return a;
}

fib_loop(10);

function fib_recursive_naive(n: number): number {
  if (n < 2) {
    return n;
  }

  return fib_recursive_naive(n - 1) + fib_recursive_naive(n - 2);
}

function fibonacci(n: number, cache: object): number {
  if (n < 2) {
    return n;
  }
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

  return cache[n];
}

console.log(fibonacci(100, {}));
