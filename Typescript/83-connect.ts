const neighbours = [
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
];

export class Board {
  private board: string[][];
  private _winner: "X" | "O" | "";

  constructor(b: string[]) {
    this.board = b.map((line) => line.trim().split(" "));

    const arrX = Array.from(Array(b.length).keys());
    const arrO = Array.from(Array(this.board[0].length).keys());
    this._winner = arrX.some((i) => this.hasPath("X", i, 0))
      ? "X"
      : arrO.some((i) => this.hasPath("O", 0, i))
      ? "O"
      : "";
  }

  public winner(): "X" | "O" | "" {
    return this._winner;
  }

  public hasPath(symbol: "X" | "O", x: number, y: number): boolean {
    console.log(this.board, x, y);
    if (this.board[x][y] !== symbol) return false;
    if (symbol === "X" && y === this.board[0].length - 1) return true;
    if (symbol === "O" && x === this.board.length - 1) return true;

    this.board[x][y] = ".";

    return neighbours.some(
      ([x2, y2]) =>
        this.board[x + x2] &&
        this.board[0][y + y2] &&
        this.hasPath(symbol, x + x2, y + y2)
    );
  }
}
