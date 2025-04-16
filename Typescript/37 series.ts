export class Series {
  constructor(private readonly series: string) {}

  slices(sliceLength: number): number[][] {
    if (this.series.length === 0) throw new Error("series cannot be empty");
    if (this.series.length < sliceLength)
      throw new Error("slice length cannot be greater than series length");
    if (sliceLength === 0) throw new Error("slice length cannot be zero");
    if (sliceLength < 0) throw new Error("slice length cannot be negative");

    return Array.from(Array(this.series.length - sliceLength + 1)).reduce(
      (acc, _, i) => [
        ...acc,
        [...this.series.substring(i, i + sliceLength)].map(Number),
      ],
      []
    );
  }
}
