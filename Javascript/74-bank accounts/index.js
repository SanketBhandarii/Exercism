export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

export class BankAccount {
  constructor() {
    this._isOpen = false;
    this._balance = 0;
  }

  open() {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = true;
    this._balance = 0;
  }

  close() {
    this._ensureOpen();
    this._isOpen = false;
  }

  deposit(amount) {
    this._ensureOpen();
    if (amount < 0) throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    this._ensureOpen();
    if (amount < 0 || amount > this._balance) throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    this._ensureOpen();
    return this._balance;
  }

  _ensureOpen() {
    if (!this._isOpen) throw new ValueError();
  }
}
