def fib_loop(n):
  a = 0
  b = 1

  while n >= 0:
    temp = a + b
    a = b
    b = temp
    n -= 1
    print(a)
  return a

print(fib_loop(10))