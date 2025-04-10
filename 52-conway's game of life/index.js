export class GameOfLife {
  constructor(cells = []) {
    this.cells = JSON.parse(JSON.stringify(cells));
  }

  tick() {
    if (!this.cells || this.cells.length === 0) {
      return;
    }

    const rows = this.cells.length;
    const cols = this.cells[0].length;
    const nextGen = Array(rows)
      .fill()
      .map(() => Array(cols).fill(0));

    const countLiveNeighbors = (r, c) => {
      let count = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;

          const nr = r + i;
          const nc = c + j;

          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            this.cells[nr][nc] === 1
          ) {
            count++;
          }
        }
      }

      return count;
    };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const liveNeighbors = countLiveNeighbors(r, c);
        const isAlive = this.cells[r][c] === 1;

        if (isAlive && (liveNeighbors === 2 || liveNeighbors === 3)) {
          nextGen[r][c] = 1;
        } else if (!isAlive && liveNeighbors === 3) {
          nextGen[r][c] = 1;
        }
      }
    }

    this.cells = nextGen;
  }

  state() {
    return this.cells;
  }
}
