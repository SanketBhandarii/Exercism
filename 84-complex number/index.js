export class ComplexNumber {
  constructor(a, b) {
    [this.a, this.b] = [a, b];
  }

  get real() {
    return this.a;
  }

  get imag() {
    return this.b;
  }

  get abs() {
    return (this.a ** 2 + this.b ** 2) ** 0.5;
  }

  get conj() {
    return new ComplexNumber(this.a, 0 - this.b);
  }

  get exp() {
    return new ComplexNumber(
      Math.E ** this.a * Math.cos(this.b),
      Math.E ** this.a * Math.sin(this.b)
    );
  }

  add(cn) {
    return new ComplexNumber(this.a + cn.a, this.b + cn.b);
  }

  sub(cn) {
    return new ComplexNumber(this.a - cn.a, this.b - cn.b);
  }

  mul(cn) {
    return new ComplexNumber(
      this.a * cn.a - this.b * cn.b,
      this.b * cn.a + this.a * cn.b
    );
  }

  div(cn) {
    return new ComplexNumber(
      (this.a * cn.a + this.b * cn.b) / (cn.a ** 2 + cn.b ** 2),
      (this.b * cn.a - this.a * cn.b) / (cn.a ** 2 + cn.b ** 2)
    );
  }
}
