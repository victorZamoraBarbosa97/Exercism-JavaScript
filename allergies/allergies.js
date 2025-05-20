const allergens = [
  "eggs", // 1
  "peanuts", // 2
  "shellfish", // 4
  "strawberries", // 8
  "tomatoes", // 16
  "chocolate", // 32
  "pollen", // 64
  "cats", // 128
];

export class Allergies {
  constructor(score = 0) {
    this.score = score & 255; // ⬅️ Limita a 8 bits (0–255)
  }

  list() {
    const result = [];

    for (let i = 0; i < allergens.length; i++) {
      const value = 1 << i;
      if ((this.score & value) !== 0) {
        result.push(allergens[i]);
      }
    }

    return result;
  }

  allergicTo(item = "") {
    return this.list().includes(item);
  }
}
