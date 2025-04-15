export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c];
  }

  isValidTriangle() {
    const [a, b, c] = this.sides;
    return a > 0 && b > 0 && c > 0 && a + b >= c && b + c >= a && a + c >= b;
  }

  get isEquilateral() {
    if (!this.isValidTriangle()) return false;
    const [a, b, c] = this.sides;
    return a === b && b === c;
  }

  get isIsosceles() {
    if (!this.isValidTriangle()) return false;
    const [a, b, c] = this.sides;
    return a === b || b === c || a === c;
  }

  get isScalene() {
    if (!this.isValidTriangle()) return false;
    const [a, b, c] = this.sides;
    return a !== b && b !== c && a !== c;
  }
}

