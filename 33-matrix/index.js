export class Matrix {
  constructor(str) {
    this.rows = str
      .split("\n")
      .map((row) => row.trim().split(/\s+/).map(Number));

    this.columns = this.rows[0].map((_, colIndex) =>
      this.rows.map((row) => row[colIndex])
    );
  }
}
