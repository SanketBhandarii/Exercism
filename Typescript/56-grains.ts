export const square = (n: number): bigint => {
  if (n < 1 || n > 64) {
    throw new Error("Square must be between 1 and 64");
  }
  return BigInt(2) ** BigInt(n - 1);
};

export const total = (): bigint => {
  return BigInt(2) ** BigInt(64) - BigInt(1);
};
