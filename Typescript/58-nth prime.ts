export function nth(n: number): number {
  if (n === 0) {
    throw new Error("Prime is not possible");
  }

  let count = 0;
  let candidate = 2;

  while (true) {
    if (isPrime(candidate)) {
      count++;
      if (count === n) {
        return candidate;
      }
    }
    candidate++;
  }
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
