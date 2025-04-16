export class Squares {
  private count: number;

  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    const n = this.count;
    return (n * (n + 1) * (2 * n + 1)) / 6;
  }

  get squareOfSum(): number {
    const n = this.count;
    const sum = (n * (n + 1)) / 2;
    return sum * sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
