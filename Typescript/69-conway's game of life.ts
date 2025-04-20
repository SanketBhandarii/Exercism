export class GameOfLife {
  constructor(private board: number[][]) {}

  tick(): void {
    if (this.board.length === 0 || this.board[0].length === 0) return;

    const newBoard = this.board.map((row, r) =>
      row.map((cell, c) => {
        const liveNeighbors = this.countLiveNeighbors(r, c);
        return (
          cell
            ? liveNeighbors === 2 || liveNeighbors === 3
            : liveNeighbors === 3
        )
          ? 1
          : 0;
      })
    );
    this.board = newBoard;
  }

  state(): number[][] {
    return this.board;
  }

  private countLiveNeighbors(r: number, c: number): number {
    let count = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr || dc) {
          const nr = r + dr,
            nc = c + dc;
          if (this.board[nr]?.[nc]) count++;
        }
      }
    }
    return count;
  }
}
