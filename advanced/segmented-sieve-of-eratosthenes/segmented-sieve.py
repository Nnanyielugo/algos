import math

def simpleSieve(n):
  result = []
  primes = [True for _ in range(n + 1)]
  primes[0] = False
  primes[1] = False

  indexI = 2

  while indexI <= math.sqrt(n):
    if primes[indexI]:
      multiplesOfIndexI = indexI ** 2
      indexJ = multiplesOfIndexI

      while indexJ <= n:
        primes[indexJ] = False
        indexJ += indexI
    indexI += 1

  for ind in range(2, n):
    if primes[ind]:
      result.append(ind)

  return result

def segmentedSieve(n):

  # add 1 to range so that very small numbers <= 10 would play nicely
  # for the first prime
  segmentRange = math.floor(math.sqrt(n)) + 1

  firstPrimeSlice = simpleSieve(segmentRange)
  primes = [p for p in firstPrimeSlice]
  result = [p for p in firstPrimeSlice]

  lowerLimit = segmentRange
  upperLimit = segmentRange * 2

  while lowerLimit < n:
    if upperLimit > n:
      upperLimit = n

    currentArray = [True for _ in range(segmentRange)]
    for indI in range(len(primes)):
      prime = primes[indI]

      # find minimum multiple of prime (aka, divisible by prime) in current range
      minMulOfPrime = int(math.floor(lowerLimit / prime) * prime)

      if minMulOfPrime < lowerLimit:
        # keep minimum multiple in current range by shifting to the next multiple in range
        minMulOfPrime += prime

      # mark multiples of prime in range

      for indJ in range(minMulOfPrime, upperLimit, prime):
        indexInRange = indJ - lowerLimit
        currentArray[indexInRange] = False

    for ind in range(lowerLimit, upperLimit):
      # since currentArray is a slice of length low - high,
      # get number index in range by subtractinng index from low
      numIndexInRange = ind - lowerLimit
      if currentArray[numIndexInRange] == True:
        result.append(ind)
      
    # update upper and lower limits for next segment
    lowerLimit += segmentRange
    upperLimit += segmentRange

  return result


print(segmentedSieve(30))