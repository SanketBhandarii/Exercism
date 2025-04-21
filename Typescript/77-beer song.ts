export function verse(index: number): string {
  if (index === 0)
    return `No more bottles of beer on the wall, no more bottles of beer.
  Go to the store and buy some more, 99 bottles of beer on the wall.
  `;
  const s = index === 1 ? "" : "s";
  return `${index} bottle${s} of beer on the wall, ${index} bottle${s} of beer.
  Take ${index === 1 ? "it" : "one"} down and pass it around, ${
    index - 1 === 0
      ? "no more bottles"
      : index - 1 + ` bottle${index - 1 === 1 ? "" : "s"}`
  } of beer on the wall.
  `;
}

export function sing(
  initialBottlesCount: number = 99,
  takeDownCount: number = 0
): string {
  let ans = "";
  for (let i: number = initialBottlesCount; i >= takeDownCount; i--) {
    ans +=
      verse(i) +
      `
  `;
  }
  return (
    ans.trim() +
    `
  `
  );
}
