const COLORS: string[] = [
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

export function decodedResistorValue(colors: string[]): string {
  const [first, second, multiplier] = colors.map((color) =>
    COLORS.indexOf(color)
  );
  const value = (first * 10 + second) * Math.pow(10, multiplier);

  if (value >= 1_000_000_000) {
    return `${value / 1_000_000_000} gigaohms`;
  } else if (value >= 1_000_000) {
    return `${value / 1_000_000} megaohms`;
  } else if (value >= 1_000) {
    return `${value / 1_000} kiloohms`;
  } else {
    return `${value} ohms`;
  }
}
