export function isArmstrongNumber(testNumber: number | bigint): boolean {
  if (typeof testNumber !== "bigint") {
    testNumber = BigInt(testNumber);
  }
  const len: bigint = BigInt(testNumber.toString().length);
  return (
    testNumber
      .toString()
      .split("")
      .map((val) => BigInt(val))
      .reduce(
        (prev: bigint, current: bigint) => prev + current ** len,
        BigInt(0)
      ) === testNumber
  );
}
