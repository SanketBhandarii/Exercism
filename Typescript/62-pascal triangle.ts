export class Triangle {
  rows: number[][];

  constructor(n: number) {
    this.rows = [];
    for (let i = 0; i < n; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row[j] = this.rows[i - 1][j - 1] + this.rows[i - 1][j];
      }
      if (i > 0) row.push(1);
      this.rows.push(row);
    }
  }

  get lastRow(): number[] {
    return this.rows[this.rows.length - 1];
  }
}
