const phrases = [
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming",
];
const cardinals = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];

const line = (startAt: number): string => {
  const firstPart = `On the ${
    cardinals[startAt - 1]
  } day of Christmas my true love gave to me`;
  if (startAt === 1) {
    return `${firstPart}: ${phrases[0]}.`;
  }
  let lastItem = `and ${phrases[0]}`;
  const secondPart = phrases.slice(1, startAt).reverse().join(", ");
  return `${firstPart}: ${secondPart}, ${lastItem}.`;
};

export function recite(startAt: number, endAt: number): string {
  let verse = "";
  for (let index = startAt; index <= endAt; index++) {
    verse += line(index) + "\n";
  }
  return verse;
}
