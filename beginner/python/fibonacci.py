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

print(fib_loop_multiple_assign(10))