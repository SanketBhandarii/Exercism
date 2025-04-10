export const classify = (number) => {
  if (number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  if (sum === number) {
    return "perfect";
  } else if (sum > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};
