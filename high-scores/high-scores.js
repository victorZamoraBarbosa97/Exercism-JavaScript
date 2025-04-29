export class HighScores {
  constructor(input) {
    if (!Array.isArray(input)) {
      throw new Error("HighScores must be initialized with an array");
    }
    this._scores = input;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    return this._scores.sort((a, b) => b - a).slice(0, 3);
  }
}
