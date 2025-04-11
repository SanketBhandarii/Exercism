class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor(arr = []) {
    this.head = null;
    arr.forEach((el) => this.add(new Element(el)));
  }

  get length() {
    return this.countNodes();
  }

  add(el) {
    this.head = { ...el, next: this.head };
  }

  countNodes(node = this.head, count = 0) {
    return node ? this.countNodes(node.next, ++count) : count;
  }

  toArray(node = this.head, arr = []) {
    arr.push(node.value);
    if (node.next) {
      node = node.next;
      return this.toArray(node, arr);
    }
    return arr;
  }

  reverse(prev = null) {
    if (this.head.next) {
      const current = this.head;
      this.head = this.head.next;
      current.next = prev;
      return this.reverse(current);
    }
    this.head.next = prev;
    return this;
  }
}

export { Element, List };
