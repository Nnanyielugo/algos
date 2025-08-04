function simpleSieve(n) {
  const primes = new Int8Array(n);
  const result = [];
  primes[0] = 1;
  primes[1] = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i] === 0) {
      const multiplesOfI = i ** 2;

      for (let j = multiplesOfI; j <= n; j += i) {
        primes[j] = 1;
      }
    }
  }

  for (let i = 2; i <= primes.length; i++) {
    if (primes[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

function segmentedSieve(n) {
  const primes = [];
  const result = [];

  // add 1 to range so that very small numbers <= 10 would play nicely
  // for the first prime
  const range = Math.floor(Math.sqrt(n)) + 1;

  const firstPrimesSlice = simpleSieve(range);

  primes.push(...firstPrimesSlice);
  result.push(...firstPrimesSlice);

  let lowerLimit = range;
  let upperLimit = range * 2;

  while (lowerLimit < n) {
    if (upperLimit > n) {
      upperLimit = n;
    }

    const currentArray = new Int8Array(range);

    for (let i = 0; i < primes.length; i++) {
      const prime = primes[i];

      // find minimum multiple of prime (aka, divisible by prime) in current range
      let minMulOfPrime = Math.floor(lowerLimit / prime) * prime;

      if (minMulOfPrime < lowerLimit) {
        // keep minimum multiple in current range by shifting to the next multiple in range
        minMulOfPrime += prime;
      }

      // mark multiples of prime in range
      for (let j = minMulOfPrime; j <= upperLimit; j += prime) {
        const indexInRange = j - lowerLimit;
        currentArray[indexInRange] = 1;
      }
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      // since currentArray is a slice of length low - high,
      // get number index in range by subtractinng index from low
      const numIndexInRange = i - lowerLimit;
      if (currentArray[numIndexInRange] === 0) {
        result.push(i);
      }
    }

    // update upper and lower limits for next segment
    lowerLimit += range;
    upperLimit += range;
  }

  return result;
}

console.log(segmentedSieve(30));
