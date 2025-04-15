export const primeFactors = (n) => {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }

  let factor = 3;
  while (factor * factor <= n) {
    while (n % factor === 0) {
      factors.push(factor);
      n /= factor;
    }
    factor += 2;
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
};
