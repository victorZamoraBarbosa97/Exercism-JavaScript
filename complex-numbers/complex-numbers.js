export class ComplexNumber {
  constructor(real = 0, imaginario = 0) {
    this._real = real;
    this._imaginario = imaginario;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginario;
  }

  add(otro) {
    return new ComplexNumber(
      this._real + otro.real,
      this._imaginario + otro.imag
    );
  }

  sub(otro) {
    return new ComplexNumber(
      this._real - otro.real,
      this._imaginario - otro.imag
    );
  }

  mul(otro) {
    return new ComplexNumber(
      this._real * otro.real - this._imaginario * otro.imag,
      this._imaginario * otro.real + this._real * otro.imag
    );
  }

  div(otro) {
    const a = this._real;
    const b = this._imaginario;
    const c = otro.real;
    const d = otro.imag;
    const denominador = c * c + d * d;

    const real = (a * c + b * d) / denominador;
    const imag = (b * c - a * d) / denominador;

    return new ComplexNumber(real, imag);
  }

  get abs() {
    return Math.sqrt(this._real ** 2 + this._imaginario ** 2);
  }

  get conj() {
    const imag = this._imaginario === 0 ? 0 : -this._imaginario;
    return new ComplexNumber(this._real, imag);
  }

  get exp() {
    const e = Math.exp(this._real);
    return new ComplexNumber(
      e * Math.cos(this._imaginario),
      e * Math.sin(this._imaginario)
    );
  }
}
