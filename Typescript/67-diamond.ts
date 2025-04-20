const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function makeDiamond(char: string = "A"): string {
  const size = ABC.indexOf(char) + 1;
  const res: string[] = [];
  for (let i = 0; i < size; i++) {
    const row = new Array(size * 2 - 1);
    for (let j = 0; j < size; j++) {
      if (i === j) {
        row[size - j] = ABC[i];
        row[size + j] = ABC[i];
      } else {
        row[size - j] = " ";
        row[size + j] = " ";
      }
    }
    const line = row.join("");
    res[i] = line;
    res[size * 2 - i - 2] = line;
  }
  res[size * 2 - 1] = "";
  return res.join("\n");
}
