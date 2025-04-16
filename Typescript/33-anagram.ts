export class Anagram {
  private readonly target: string;
  private readonly sortedTarget: string;

  constructor(input: string) {
    this.target = input.toLowerCase();
    this.sortedTarget = Anagram.sortLetters(this.target);
  }

  public matches(...potentials: string[] | string[][]): string[] {
    const candidates = potentials.flat();

    return candidates.filter((word) => {
      const wordLower = word.toLowerCase();
      if (wordLower === this.target) return false;
      return Anagram.sortLetters(wordLower) === this.sortedTarget;
    });
  }

  private static sortLetters(word: string): string {
    return word.toLowerCase().split("").sort().join("");
  }
}
