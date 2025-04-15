export class Allergies {
  static allergenScores = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(score) {
    this.score = score;
  }

  list() {
    return Object.keys(Allergies.allergenScores).filter(
      (allergen) => (this.score & Allergies.allergenScores[allergen]) !== 0
    );
  }

  allergicTo(item) {
    return (this.score & Allergies.allergenScores[item]) !== 0;
  }
}
