export const largestProduct = (input, span) => {
  if (/[^0-9]/.test(input)) {
    throw new Error("digits input must only contain digits");
  }

  if (span < 0) {
    throw new Error("span must not be negative");
  }

  if (input.length < span) {
    throw new Error("span must be smaller than string length");
  }

  let maxProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    const series = input.slice(i, i + span);
    const product = series
      .split("")
      .reduce((acc, digit) => acc * parseInt(digit), 1);
    maxProduct = Math.max(maxProduct, product);
  }

  return maxProduct;
};
