export class Squares {
  constructor(numero) {
    this.number = numero;
  }

  get sumOfSquares() {
    let result = 0;
    for (let index = 1; index <= this.number; index++) {
      result += Math.pow(index, 2);
    }
    return result;
  }

  get squareOfSum() {
    let result = 0;
    for (let index = 1; index <= this.number; index++) {
      result += index;
    }
    return Math.pow(result, 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
