const allergenList = [
  "eggs", 
  "peanuts", 
  "shellfish", 
  "strawberries", 
  "tomatoes", 
  "chocolate", 
  "pollen", 
  "cats", 
];

export class Allergies {
  private score: number;

  constructor(allergenIndex: number) {
    this.score = allergenIndex & 255;
  }

  public list(): string[] {
    return allergenList.filter((item, i) => (this.score & (1 << i)) !== 0);
  }

  public allergicTo(allergen: string): boolean {
    const index = allergenList.indexOf(allergen);
    if (index === -1) return false;
    return (this.score & (1 << index)) !== 0;
  }
}
