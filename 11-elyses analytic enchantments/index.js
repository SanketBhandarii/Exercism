export const getCardPosition = (stack, card) => stack.indexOf(card);

export const doesStackIncludeCard = (stack, card) => stack.includes(card);

export const isEachCardEven = (stack) => stack.every((card) => card % 2 === 0);

export const doesStackIncludeOddCard = (stack) =>
  stack.some((card) => card % 2 !== 0);

export const getFirstOddCard = (stack) => stack.find((card) => card % 2 !== 0);

export const getFirstEvenCardPosition = (stack) =>
  stack.findIndex((card) => card % 2 === 0);
