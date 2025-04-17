export function sum(mutiples: number[], num: number): number {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (mutiples.some((mul) => i % mul === 0)) sum += i;
  }

  return sum;
}
