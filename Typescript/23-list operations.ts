export class List {
  public static create(...values: any[]): List {
    return new List(values);
  }
  constructor(private store: any[]) {}

  append(list: List) {
    const newItems = [...this.store];
    list.forEach((v) => newItems.push(v));
    return List.create(...newItems);
  }

  concat(list: List) {
    const newItems = [...this.store];
    list.forEach((l) => l.forEach((v: any) => newItems.push(v)));
    return List.create(...newItems);
  }

  filter(fn: (v: any) => boolean) {
    const newItems: any[] = [];
    this.forEach((v) => fn(v) && newItems.push(v));
    return List.create(...newItems);
  }

  length() {
    let count = 0;
    this.forEach((v) => count++);
    return count;
  }

  map(fn: (v: any, i?: number) => any) {
    const newItems: any[] = [];
    this.forEach((v, i) => newItems.push(fn(v, i)));
    return newItems;
  }

  foldl(fn: (acc: any, el: any) => any, start: any) {
    let a = start;
    this.forEach((v) => (a = fn(a, v)));
    return a;
  }

  foldr(fn: (acc: any, el: any) => any, start: any) {
    return this.reverse().foldl(fn, start);
  }

  reverse() {
    const newItems: any[] = [];
    this.forEach((v) => newItems.unshift(v));
    return List.create(...newItems);
  }

  forEach(fn: (v: any, i?: number) => any) {
    this.store.forEach(fn);
  }
}
