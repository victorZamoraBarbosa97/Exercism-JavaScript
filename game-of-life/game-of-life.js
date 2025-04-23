const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export class GameOfLife {
  constructor(matrix) {
    this.matrix = matrix;
  }

  // funcion con la logica
  countLiveNeighbors = (i, j) => {
    const rows = this.matrix.length;
    const cols = this.matrix[0].length;
    let liveNeighbors = 0;

    // bucle para recorrer direcciones
    for (const [dx, dy] of directions) {
      let x = i + dx;
      let y = j + dy;
      // evitar desborde  de matrix
      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        if (this.matrix[x][y] === 1) liveNeighbors++;
      }
    }
    return liveNeighbors;
  };

  tick() {
    if (this.matrix.length === 0) return this.matrix;

    // para guardar los cambios sin alterar la matriz original.
    let nextGen = this.matrix.map((row) => [...row]);

    // recorrer matrix
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        let liveNeighbors = this.countLiveNeighbors(i, j);

        if (this.matrix[i][j] === 1) {
          // viva
          if (liveNeighbors < 2 || liveNeighbors > 3) {
            nextGen[i][j] = 0;
          } else {
            nextGen[i][j] = 1;
          }
        } else {
          // muerta
          if (liveNeighbors === 3) {
            nextGen[i][j] = 1;
          } else nextGen[i][j] = 0;
        }
      }
    }

    this.matrix = nextGen;
  }

  state() {
    return this.matrix;
  }
}
