export class Clock {
  constructor(h, m = 0) {
    // calcular el total de minutos / total de minutos x dia
    this.totalMinutes = (h * 60 + m) % (24 * 60);
    if (this.totalMinutes < 0) {
      this.totalMinutes += 24 * 60; // garantizar que siempre sea positivo
    }
  }

  toString() {
    const hours = Math.floor(this.totalMinutes / 60)
      .toString()
      .padStart(2, "0");
    const minutes = (this.totalMinutes % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  plus(minutesToAdd) {
    return new Clock(0, this.totalMinutes + minutesToAdd);
  }

  minus(minutesToSubtract) {
    return new Clock(0, this.totalMinutes - minutesToSubtract);
  }

  equals(otherClock) {
    return this.totalMinutes === otherClock.totalMinutes;
  }
}
