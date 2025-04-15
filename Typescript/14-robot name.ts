const usedNames: Set<string> = new Set();

export class Robot {
  private _name: string;

  constructor() {
    this._name = this.generateName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateName();
  }

  public static releaseNames(): void {
    usedNames.clear();
  }

  private generateName(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result: string;

    do {
      result = "";
      for (let i = 0; i < 2; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      for (let i = 0; i < 3; i++) {
        result += Math.floor(Math.random() * 10);
      }
    } while (usedNames.has(result));

    usedNames.add(result);
    return result;
  }
}
