export const valid = (number) => {
  number = number.replace(/\s/g, "");

  if (number.length <= 1 || !/^\d+$/.test(number)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
