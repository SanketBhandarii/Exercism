export function decodedValue([first, second]) {
  const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  return COLORS.indexOf(first) * 10 + COLORS.indexOf(second);
}
