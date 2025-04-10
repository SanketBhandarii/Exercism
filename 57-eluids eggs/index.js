export const eggCount = (displayValue) => {
  let count = 0;
  while (displayValue > 0) {
    if (displayValue % 2 === 1) count++;
    displayValue = Math.floor(displayValue / 2);
  }
  return count;
};
