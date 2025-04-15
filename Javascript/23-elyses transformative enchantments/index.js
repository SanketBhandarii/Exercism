export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

export function threeOfEachThree(deck) {
  return deck.flatMap((card) => (card === 3 ? [3, 3, 3] : [card]));
}

export function middleTwo(deck) {
  const middle = Math.floor(deck.length / 2) - 1;
  return deck.slice(middle, middle + 2);
}

export function sandwichTrick(deck) {
  const first = deck[0];
  const last = deck[deck.length - 1];
  const middle = deck.length / 2;

  const result = deck.slice(1, deck.length - 1);
  result.splice(middle - 1, 0, last, first);

  return result;
}

export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

export function perfectlyOrdered(deck) {
  return [...deck].sort((a, b) => a - b);
}

export function reorder(deck) {
  deck.reverse();
  return deck;
}
