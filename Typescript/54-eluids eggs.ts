export const eggCount = (displayValue: number): number => {
  if (
    typeof displayValue !== "number" ||
    displayValue < 0 ||
    !Number.isInteger(displayValue)
  ) {
    throw new Error("Invalid input: must be a non-negative integer");
  }

  let count = 0;
  let value = displayValue;

  while (value > 0) {
    count += value & 1;
    value = value >> 1;
  }

  return count;
};
    