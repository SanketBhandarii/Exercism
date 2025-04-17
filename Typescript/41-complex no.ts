export class ComplexNumber {
  private readonly a: number;
  private readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public get real(): number {
    return this.a;
  }

  public get imag(): number {
    return this.b;
  }

  public add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a + other.a, this.b + other.b);
  }

  public sub(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.a - other.a, this.b - other.b);
  }

  public mul(other: ComplexNumber): ComplexNumber {
    const realPart = this.a * other.real - this.b * other.imag;
    const imaginaryPart = this.a * other.imag + this.b * other.real;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  public div(other: ComplexNumber): ComplexNumber {
    const denominator = other.real * other.real + other.imag * other.imag;
    const realPart = (this.a * other.real + this.b * other.imag) / denominator;
    const imaginaryPart =
      (this.b * other.real - this.a * other.imag) / denominator;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  public get abs(): number {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  public get conj(): ComplexNumber {
    return new ComplexNumber(this.real, this.imag ? this.imag * -1 : 0);
  }

  public get exp(): ComplexNumber {
    const realPart = Math.exp(this.a) * Math.cos(this.b);
    const imaginaryPart = Math.exp(this.a) * Math.sin(this.b);
    return new ComplexNumber(realPart, imaginaryPart);
  }
}
