export const steps = (n) => {
  if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    throw new Error("Only positive integers are allowed");
  }

  let count = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }

  return count;
};
