def fib_loop(n):
  a = 0
  b = 1

  while n > 0:
    temp = a + b
    a = b
    b = temp
    print(a)
    n -= 1
  return a

def fib_loop_multiple_assign(n):
  a, b = 0, 1

  while n > 0:
    # use tuple packing and unpacking to simulteneously swap values 
    # and avoid using a temp variable for 'a + b'
    a, b = b, a + b
    print(a)
    n -= 1
  return a

def fib_recursive_naive(n):
  if n < 2:
    return n
  return fib_recursive_naive(n - 1) + fib_recursive_naive(n - 2)

def fib_recursive_memo(n, cache):
  if n < 2:
    return n
  if cache.get(n):
    return cache.get(n)
  else:
    cache[n] = fib_recursive_memo(n - 1, cache) + fib_recursive_memo(n - 2, cache)
    return cache[n]

print(fib_recursive_memo(10, {}))
