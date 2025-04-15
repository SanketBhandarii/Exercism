export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(otherList) {
    const result = [];
    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = this.values[i];
    }
    for (let i = 0; i < otherList.values.length; i++) {
      result[result.length] = otherList.values[i];
    }
    return new List(result);
  }

  concat(lists) {
    let result = [];
    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = this.values[i];
    }
    for (let i = 0; i < lists.values.length; i++) {
      const current = lists.values[i];
      for (let j = 0; j < current.values.length; j++) {
        result[result.length] = current.values[j];
      }
    }
    return new List(result);
  }

  filter(fn) {
    const result = [];
    for (let i = 0; i < this.values.length; i++) {
      if (fn(this.values[i])) {
        result[result.length] = this.values[i];
      }
    }
    return new List(result);
  }

  map(fn) {
    const result = [];
    for (let i = 0; i < this.values.length; i++) {
      result[result.length] = fn(this.values[i]);
    }
    return new List(result);
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.values.length; i++) {
      count++;
    }
    return count;
  }

  foldl(fn, acc) {
    for (let i = 0; i < this.values.length; i++) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(fn, acc) {
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const result = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      result[result.length] = this.values[i];
    }
    return new List(result);
  }
}
