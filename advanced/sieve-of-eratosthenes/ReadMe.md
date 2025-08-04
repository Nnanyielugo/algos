## Sieve of Eratosthenes

The purpose of this algorithm is to find all the prime numbers up to a given number (n), and return these prime numbers in an array. For example `sieveOfEratosthenes(20)` will return `[2, 3, 5, 7, 11, 13, 17, 19]`.

While there are multiple ways of solving this problem, the sieve of eratosthenes is one of the performant ways of doing this.

This algorithm works by marking all the numbers as prime, then unmarking the numbers that do not satisfy the criteria it lists.

### Steps:

- create a `primes` array and mark all as true
- unmark 0 and 1 as they cannot be divisible by any number
- loop through numbers whose square roots are less than or equal to the input number (n)
- loop through the multiples of those numbers up to the value of the input number (n), and mark those numbers in `primes` as false
- push numbers left as `true` into a `results` array
- return result
