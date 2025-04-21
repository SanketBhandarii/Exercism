export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  if (inputBase < 2 || !Number.isInteger(inputBase)) {
    throw new Error("Wrong input base");
  }

  if (outputBase < 2 || !Number.isInteger(outputBase)) {
    throw new Error("Wrong output base");
  }

  if (
    !Array.isArray(digits) ||
    digits.length === 0 ||
    (digits.length > 1 && digits[0] === 0) ||
    digits.some((d) => d < 0 || d >= inputBase || !Number.isInteger(d))
  ) {
    throw new Error("Input has wrong format");
  }

  let base10 = digits.reduce((acc, digit) => acc * inputBase + digit, 0);

  if (base10 === 0) return [0];

  const result: number[] = [];
  while (base10 > 0) {
    result.unshift(base10 % outputBase);
    base10 = Math.floor(base10 / outputBase);
  }

  return result;
}
