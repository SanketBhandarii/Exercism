export class Clock {
  constructor(hour, minute = 0) {
    const total = (((hour * 60 + minute) % 1440) + 1440) % 1440;
    this.hour = Math.floor(total / 60);
    this.minute = total % 60;
  }

  toString() {
    return `${String(this.hour).padStart(2, "0")}:${String(
      this.minute
    ).padStart(2, "0")}`;
  }

  plus(mins) {
    return new Clock(this.hour, this.minute + mins);
  }

  minus(mins) {
    return new Clock(this.hour, this.minute - mins);
  }

  equals(other) {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
