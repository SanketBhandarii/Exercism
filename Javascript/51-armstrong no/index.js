export const isArmstrongNumber = (number) => {
  const digits = number.toString();
  const power = BigInt(digits.length);

  const sum = digits
    .split("")
    .reduce((acc, digit) => acc + BigInt(digit) ** power, 0n);

  return sum === BigInt(number);
};
