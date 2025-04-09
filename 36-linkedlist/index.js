class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  pop() {
    if (!this.tail) return;
    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return value;
  }

  shift() {
    if (!this.head) return;
    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    return value;
  }

  delete(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.shift();
        } else if (current === this.tail) {
          this.pop();
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        break;
      }
      current = current.next;
    }
  }

  count() {
    let total = 0;
    let current = this.head;
    while (current) {
      total++;
      current = current.next;
    }
    return total;
  }
}
