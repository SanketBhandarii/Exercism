export class Clock {
  private minutesSinceMidnight: number;

  constructor(hour: number, minute: number = 0) {
    this.minutesSinceMidnight = Clock.normalize(hour * 60 + minute);
  }

  private static normalize(minutes: number): number {
    return ((minutes % 1440) + 1440) % 1440;
  }

  public toString(): string {
    const hours = Math.floor(this.minutesSinceMidnight / 60);
    const minutes = this.minutesSinceMidnight % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutesSinceMidnight + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutesSinceMidnight - minutes);
  }

  public equals(other: unknown): boolean {
    return (
      other instanceof Clock &&
      this.minutesSinceMidnight === other.minutesSinceMidnight
    );
  }
}
