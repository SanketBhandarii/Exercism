export class Gigasecond {
  private startDate: Date;

  constructor(startDate: Date) {
    this.startDate = startDate;
  }

  public date(): Date {
    const GIGASECOND_IN_MS = 1_000_000_000 * 1000;
    return new Date(this.startDate.getTime() + GIGASECOND_IN_MS);
  }
}
