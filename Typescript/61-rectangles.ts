export function count(diagram: string[]): number {
  const rows = diagram.length;
  const cols = diagram[0]?.length || 0;
  let rectangles = 0;

  function isCorner(r: number, c: number): boolean {
    return diagram[r][c] === "+";
  }

  function isHorizontalLine(r: number, c1: number, c2: number): boolean {
    for (let c = c1 + 1; c < c2; c++) {
      const ch = diagram[r][c];
      if (ch !== "-" && ch !== "+") return false;
    }
    return true;
  }

  function isVerticalLine(c: number, r1: number, r2: number): boolean {
    for (let r = r1 + 1; r < r2; r++) {
      const ch = diagram[r][c];
      if (ch !== "|" && ch !== "+") return false;
    }
    return true;
  }

  for (let r1 = 0; r1 < rows; r1++) {
    for (let c1 = 0; c1 < cols; c1++) {
      if (!isCorner(r1, c1)) continue;

      for (let c2 = c1 + 1; c2 < cols; c2++) {
        if (!isCorner(r1, c2) || !isHorizontalLine(r1, c1, c2)) continue;

        for (let r2 = r1 + 1; r2 < rows; r2++) {
          if (!isCorner(r2, c1) || !isVerticalLine(c1, r1, r2)) continue;
          if (!isCorner(r2, c2) || !isHorizontalLine(r2, c1, c2)) continue;
          if (!isVerticalLine(c2, r1, r2)) continue;

          rectangles++;
        }
      }
    }
  }

  return rectangles;
}
