export function primes(limit: number): number[] {
  if (limit < 2) return [];

  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let num = 2; num * num <= limit; num++) {
    if (isPrime[num]) {
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        isPrime[multiple] = false;
      }
    }
  }

  const result: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }

  return result;
}
