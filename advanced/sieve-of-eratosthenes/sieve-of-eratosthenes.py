import math

def sieveOfEratosthenes(n):
  result = []
  primes = [True for x in range(n + 1)]
  primes[0] = False
  primes[1] = False

  startIndex = 2
  while startIndex <= math.sqrt(n):
    if (primes[startIndex]):
      multiplesOfStart = startIndex ** 2
      startIndex2 = multiplesOfStart

      while (startIndex2 <= n):
        primes[startIndex2] = False
        startIndex2 += startIndex
    startIndex += 1

  for ind in range(2, n):
    if primes[ind]:
      result.append(ind)

  return result

print(sieveOfEratosthenes(20))