type Options = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

class Triplet {
  constructor(public a: number, public b: number, public c: number) {}
  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}

export function triplets({ minFactor, maxFactor, sum }: Options): Triplet[] {
  const triplets: Triplet[] = [];

  minFactor = minFactor || 1;
  maxFactor = maxFactor || sum - 1;

  for (let a = minFactor; a < maxFactor; a++) {
    for (let b = a; b < maxFactor; b++) {
      const c = sum - a - b;
      if (c < b || c < a || c > maxFactor) continue;
      if (a * a + b * b !== c * c) continue;

      triplets.push(new Triplet(a, b, c));
    }
  }

  return triplets;
}
