const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function meetup(year, month, descriptor, day) {
  const fd = new Date(year, month - 1, 1).getDay(),
    d = days.indexOf(day),
    dayNo = new Date(year, month, 0).getDate(),
    possibles = [...Array(dayNo).keys()]
      .map((i) => i + 1)
      .filter((i) => (i - 1 + fd) % 7 === d),
    newDay =
      descriptor === "first"
        ? possibles[0]
        : descriptor === "second"
        ? possibles[1]
        : descriptor === "third"
        ? possibles[2]
        : descriptor === "fourth"
        ? possibles[3]
        : descriptor === "fifth"
        ? possibles[4]
        : descriptor === "teenth"
        ? possibles.find((i) => i > 12)
        : descriptor === "last"
        ? possibles[possibles.length - 1]
        : 0;

  if (!newDay) throw "Error";

  return new Date(year, month - 1, newDay);
}
