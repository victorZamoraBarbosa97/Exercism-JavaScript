// Robot.js
// Implementación de la clase Robot para generar nombres aleatorios y únicos

export class Robot {
  // Conjunto para rastrear nombres usados y asegurar unicidad
  static usedNames = new Set();

  constructor() {
    this.reset();
  }

  // Genera un nombre aleatorio en formato LLDDD (letra, letra, dígito x3)
  static generateName() {
    const letters = () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const digits = () => Math.floor(Math.random() * 10);

    let name;
    do {
      name = letters() + letters() + digits() + digits() + digits();
    } while (Robot.usedNames.has(name));

    Robot.usedNames.add(name);
    return name;
  }

  // Obtiene el nombre del robot, generándolo si no existe
  get name() {
    if (!this._name) {
      this._name = Robot.generateName();
    }
    return this._name;
  }

  // Reinicia a configuración de fábrica, eliminando el nombre actual
  reset() {
    // Si el robot ya tenía nombre, no se borra de usedNames para evitar reutilizarlo
    this._name = null;
  }
}

Robot.releaseNames = () => {};
