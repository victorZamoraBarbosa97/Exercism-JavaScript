export function triplets({ minFactor = 1, maxFactor = Infinity, sum }) {
  const result = [];

  // Limitar el máximo posible de 'a' y 'b' en función del sum
  for (let a = minFactor; a <= sum / 3 && a <= maxFactor; a++) {
    for (let b = a + 1; b <= sum / 2 && b <= maxFactor; b++) {
      const c = sum - a - b;
      if (c <= b || c > maxFactor) continue;
      if (a < minFactor || b < minFactor || c < minFactor) continue;

      if (a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
