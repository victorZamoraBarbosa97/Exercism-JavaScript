//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor( matrix ) {
    this. matrix = matrix;
  }

  get rows() {
    return this.matrix.split("\n")
          .map( row => row.split(" ")
          .map( num => parseInt(num) ) 
        )
  }

  get columns() {
    let rows = this.rows
    let colums =  new Array(rows[0].length)
    for(let i = 0; i < rows[0].length; i++){
      colums[i] = []
      for(let j = 0; j < rows.length; j++){
        colums[i].push(rows[j][i])
      }
    }
    return colums
  }
}
