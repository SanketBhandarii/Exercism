export function transform(
  oldData: Record<number, string[]>
): Record<string, number> {
  const newData: Record<string, number> = {};

  for (const [scoreStr, letters] of Object.entries(oldData)) {
    const score = Number(scoreStr);
    for (const letter of letters) {
      newData[letter.toLowerCase()] = score;
    }
  }

  return newData;
}
