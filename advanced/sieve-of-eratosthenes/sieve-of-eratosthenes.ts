function sieveOfEratosthenes(n: number): number[] {
  // make an array from 0 to an,
  // and make each element of that array the value true
  const primes: boolean[] = [];
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }
  primes[0] = false;
  primes[1] = false;

  // loop through the square roots of n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // console.log(i);
    // loop through the multiples of i
    for (let j = 2; j * i <= n; j++) {
      const multiplesOfI = i * j;
      // mark all multiples of i as false
      primes[multiplesOfI] = false;
    }
  }
  console.log(primes);
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }

  return result;
}

console.log(sieveOfEratosthenes(20));
