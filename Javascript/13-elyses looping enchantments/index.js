export const cardTypeCheck = (deck, cardType) => {
  let count = 0;
  deck.forEach((card) => {
    if (card === cardType) {
      count++;
    }
  });
  return count;
};

export const determineOddEvenCards = (deck, isEven) => {
  let count = 0;
  for (const card of deck) {
    if (isEven && card % 2 === 0) {
      count++;
    }
    if (!isEven && card % 2 !== 0) {
      count++;
    }
  }
  return count;
};
