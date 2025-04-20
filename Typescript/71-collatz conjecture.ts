export function steps(n: number): number {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error("Only positive integers are allowed");
  }

  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }

  return steps;
}
