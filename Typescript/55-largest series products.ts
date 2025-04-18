export const largestProduct = (input: string, span: number) => {
  if (span < 1) {
    throw new Error("Span must not be negative");
  }
  const digits = input.split("").map((char) => {
    const digit = Number(char);
    if (isNaN(digit)) {
      throw new Error("Digits input must only contain digits");
    }
    return digit;
  });

  if (span > digits.length)
    throw new Error("Span must be smaller than string length");

  let largest = 0;
  for (let start = 0; start <= digits.length - span; start++) {
    const serie = digits.slice(start, start + span);
    const product = serie.reduce((acc, current) => acc * current, 1);
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
};
