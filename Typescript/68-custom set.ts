export class CustomSet {
  public values: number[];

  constructor(initial?: number[]) {
    this.values = initial || [];
  }

  empty(): boolean {
    return this.values.length === 0;
  }

  contains(element: number): boolean {
    if (this.values.includes(element)) {
      return true;
    }
    return false;
  }

  add(element: number): CustomSet {
    if (!this.contains(element)) {
      this.values.push(element);
    }
    return this;
  }

  subset(other: CustomSet): boolean {
    return this.values.every((val) => other.values.includes(val));
  }
  disjoint(other: CustomSet): boolean {
    return this.values.every((val) => !other.values.includes(val));
  }

  eql(other: CustomSet): boolean {
    if (this.empty() === other.empty()) {
      return this.values.every((val) => other.values.includes(val));
    }
    return false;
  }

  union(other: CustomSet): CustomSet {
    return new CustomSet([...this.values, ...other.values]);
  }

  intersection(other: CustomSet): CustomSet {
    return new CustomSet(this.values.filter((val) => other.contains(val)));
  }

  difference(other: CustomSet): CustomSet {
    return new CustomSet(this.values.filter((val) => !other.contains(val)));
  }
}
