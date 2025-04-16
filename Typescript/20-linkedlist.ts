class Node<T> {
  constructor(
    public value: T,
    public prev: Node<T> | null = null,
    public next: Node<T> | null = null
  ) {}
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  public push(element: T): void {
    const node = new Node(element, this.tail, null);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
    this.length++;
  }

  public pop(): T | undefined {
    if (!this.tail) return undefined;
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return val;
  }

  public shift(): T | undefined {
    if (!this.head) return undefined;
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return val;
  }

  public unshift(element: T): void {
    const node = new Node(element, null, this.head);
    if (this.head) this.head.prev = node;
    else this.tail = node;
    this.head = node;
    this.length++;
  }

  public delete(element: T): void {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;
        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  public count(): number {
    return this.length;
  }
}
