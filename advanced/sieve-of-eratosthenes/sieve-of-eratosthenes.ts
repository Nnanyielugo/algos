function sieveOfEratosthenes(n: number): number[] {
  // use int8 arrays to create and initialize array with values of 0
  const primes = new Int8Array(n);
  const result: number[] = [];

  primes[0] = 1;
  primes[1] = 1;

  // loop through the square roots of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // only make inner loop if number isn't marked as prime
    if (primes[i] === 0) {
      const multiplesOfI = i * i;
      // loop through the multiples of i
      for (let j = multiplesOfI; j <= n; j += i) {
        // mark all multiples of i as false
        primes[j] = 1;
      }
    }
  }
  for (let i = 0; i < primes.length; i++) {
    if (primes[i] === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(sieveOfEratosthenes(20));
