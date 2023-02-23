export const rows = ( filas ) => {
  let retorno = []
  if ( filas === 0 ) return retorno
  else {
    retorno.push([1]);
    while( retorno.length !== filas ) {
      let arrayAUX = [1];
      for(let i = 1; i < retorno[retorno.length -1].length+1; i++) {
        if (retorno[retorno.length -1][i]  === undefined ) arrayAUX.push( retorno[retorno.length -1][i-1] )
        else {
          let num = retorno[retorno.length -1][i-1] +  retorno[retorno.length -1][i]
          if ( isNaN(num) ) arrayAUX.push( retorno[retorno.length -1][i] )
          else arrayAUX.push(num)
        }
      }
      retorno.push(arrayAUX)
    }
  }
  return retorno;
};

