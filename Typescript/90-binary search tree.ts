export class BinarySearchTree {
  private _data: number;
  private _left?: BinarySearchTree;
  private _right?: BinarySearchTree;

  constructor(data: unknown) {
    if (typeof data !== "number") {
      throw new Error("BinarySearchTree only supports numbers");
    }
    this._data = data;
  }

  public get data(): number {
    return this._data;
  }

  public get left(): BinarySearchTree | undefined {
    return this._left;
  }

  public get right(): BinarySearchTree | undefined {
    return this._right;
  }

  public insert(item: unknown): void {
    if (typeof item !== "number") {
      throw new Error("Only numbers can be inserted");
    }

    if (item <= this._data) {
      if (this._left) {
        this._left.insert(item);
      } else {
        this._left = new BinarySearchTree(item);
      }
    } else {
      if (this._right) {
        this._right.insert(item);
      } else {
        this._right = new BinarySearchTree(item);
      }
    }
  }

  public each(callback: (data: number) => void): void {
    if (this._left) {
      this._left.each(callback);
    }
    callback(this._data);
    if (this._right) {
      this._right.each(callback);
    }
  }
}
