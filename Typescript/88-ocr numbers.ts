export function convert(input: string): string {
  const digits = [
    " _ | ||_|",
    "     |  |",
    " _  _||_ ",
    " _  _| _|",
    "   |_|  |",
    " _ |_  _|",
    " _ |_ |_|",
    " _   |  |",
    " _ |_||_|",
    " _ |_| _|",
  ];

  const lines = input.split("\n").filter((line) => line !== "");

  const chunks: string[][][] = [];
  for (let j = 0; j < lines.length; j += 4) {
    const chunkSet: string[][] = [];
    for (let i = 0; i < lines[j].length; i += 3) {
      chunkSet.push([
        lines[j].substring(i, i + 3),
        lines[j + 1].substring(i, i + 3),
        lines[j + 2].substring(i, i + 3),
      ]);
    }
    chunks.push(chunkSet);
  }

  const outputDigits = [] as string[];
  for (let chunkSet of chunks) {
    const digitsForSet = [] as string[];
    for (let chunk of chunkSet) {
      const index = digits.findIndex((digit) => digit === chunk.join(""));
      digitsForSet.push(index >= 0 ? index.toString() : "?");
    }
    outputDigits.push(digitsForSet.join(""));
  }

  return outputDigits.join(",");
}
