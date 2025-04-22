export class Triangle {
  constructor(...sides) {
    if (sides.length !== 3) {
      throw new Error("TUn triangulo debe tener 3 lados");
    }
    this.sides = [...sides];
  }

  // funcion para validar que es un triangulo
  get isTriangle() {
    let [a, b, c] = this.sides;
    return a + b > c && b + c > a && a + c > b;
  }

  get isEquilateral() {
    if (this.isTriangle) {
      let [a, b, c] = this.sides;
      return a === b && b === c;
    } else return false;
  }

  get isIsosceles() {
    if (this.isTriangle) {
      let [a, b, c] = this.sides;
      return a === b || b === c || a === c;
    } else return false;
  }

  get isScalene() {
    if (this.isTriangle) {
      let [a, b, c] = this.sides;
      return a !== b && b !== c && a !== c;
    } else return false;
  }
}
