export const getFirstCard = ([first]) => first;

export const getSecondCard = ([, second]) => second;

export const swapTopTwoCards = ([first, second, ...rest]) => [
  second,
  first,
  ...rest,
];

export const discardTopCard = ([first, ...rest]) => [first, rest];

export const insertFaceCards = ([first, ...rest]) => [
  first,
  "jack",
  "queen",
  "king",
  ...rest,
];
