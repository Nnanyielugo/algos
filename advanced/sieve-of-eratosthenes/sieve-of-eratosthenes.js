function sieveOfEratosthenes(n) {
  const primes = new Int8Array(n);
  const result = [];
  primes[0] = 1;
  primes[1] = 1;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i] === 0) {
      const multiplesOfI = i * i;
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

console.log(sieveOfEratosthenes(20));
