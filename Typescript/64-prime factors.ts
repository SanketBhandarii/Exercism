export function calculatePrimeFactors(n: number): number[] {
  if (n < 2) return [];

  const factors: number[] = [];
  let divisor = 2;

  while (n >= divisor * divisor) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  if (n > 1) factors.push(n);
  return factors;
}
