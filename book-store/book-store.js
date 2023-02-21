const BOOK_PRICE = 800;

const arrange = ( canastas ) => {
  for (let i = 0; i < canastas.length-1; i++) {

    // detectar discrepancias    
    if( canastas[i].length - canastas[i+1].length < 3  && canastas[i].length !== 4 ) {
      console.log('entro con ' + canastas[i])
        // buscar el libro y cambiar de canasta
        for (const libro of  canastas[i]) {
            if ( !canastas[i+1].includes(libro)) {
              console.log(canastas[i].findIndex(elemento => elemento === libro ), canastas[i+1])
                canastas[i+1].push(libro);
                canastas[i].splice(canastas[i].findIndex(elemento => elemento === libro ),1);
                console.log('cambio ' + libro)
            }
        }
    }
  }
  return canastas;
}

export const cost = ( books ) => {
  let canastas = []; // aqui se guardaran los arreglos

  while (books.length > 0) {
    // crear un nuevo set con los elementos del arreglo de libros
    let setIterator = new Set(books)
    // por cada libro en el set eliminarlo de mi arreglo de libros y guardar los valores del set en un nuevo arreglo
   let arrayAux = new Array();

   for (let entry of setIterator.entries() ){
    let index = books.findIndex( element => element === entry[1])
    arrayAux.push(books.splice(index,1)[0]);
  }
  canastas.push(arrayAux)
}

// acomodarlos de la manera mas optima
do {
  canastas = arrange(canastas)
} while (arrange(canastas) !== canastas);

  let precio = 0
  // calcular precio 
  canastas.forEach( canasta => {
    switch (canasta.length) {
      case 1:
        precio += BOOK_PRICE;
        break;
      case 2:
        precio += 2 * ( BOOK_PRICE  -  BOOK_PRICE * .05)
        break;
      case 3:
        precio += 3 * ( BOOK_PRICE  -  BOOK_PRICE * .10)
        break;
      case 4:
        precio += 4 * ( BOOK_PRICE  -  BOOK_PRICE * .20)
        break;
      case 5:
        precio += 5  *( BOOK_PRICE  -  BOOK_PRICE * .25)
        break;
    }
  })

  return precio;
};
