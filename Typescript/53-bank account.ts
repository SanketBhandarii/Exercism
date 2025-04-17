export class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }
  
  export class BankAccount {
    private balanceValue: number | null = null;
  
    open(): void {
      if (this.balanceValue !== null) {
        throw new ValueError();
      }
      this.balanceValue = 0;
    }
  
    close(): void {
      if (this.balanceValue === null) {
        throw new ValueError();
      }
      this.balanceValue = null;
    }
  
    deposit(amount: number): void {
      if (this.balanceValue === null) {
        throw new ValueError();
      }
      if (amount < 0) {
        throw new ValueError();
      }
      this.balanceValue += amount;
    }
  
    withdraw(amount: number): void {
      if (this.balanceValue === null) {
        throw new ValueError();
      }
      if (amount < 0) {
        throw new ValueError();
      }
      if (this.balanceValue < amount) {
        throw new ValueError();
      }
      this.balanceValue -= amount;
    }
  
    get balance(): number {
      if (this.balanceValue === null) {
        throw new ValueError();
      }
      return this.balanceValue;
    }
  }