export function annotate(field: string[]): string[] {
  if (!field.length) return [];

  const height = field.length;
  const width = field[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const countMines = (x: number, y: number): number => {
    return directions.reduce((count, [dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      return nx >= 0 &&
        nx < width &&
        ny >= 0 &&
        ny < height &&
        field[ny][nx] === "*"
        ? count + 1
        : count;
    }, 0);
  };

  return field.map((row, y) =>
    row
      .split("")
      .map((cell, x) => {
        if (cell === "*") return "*";
        const count = countMines(x, y);
        return count === 0 ? " " : String(count);
      })
      .join("")
  );
}
