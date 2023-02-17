//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  // * eliminar espacios y comprobar la longitud.
  message = message.trim();
  if ( message.length === 0 ) return  'Fine. Be that way!'

  let lettersExist = true;
  let isUpperCase = true;

  //* Comprobar que existan letras
  if( message.search( /([A-Z][a-z])/gi) === -1 ) lettersExist = false;

  //* conmprobar si todas las letras estan en mayusculas 
  for( let i = 0; i < message.length; i++){
   if ( message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122 ) {
     isUpperCase = false
     break;
   }
  }
  if( isUpperCase === true && message.endsWith('?') && lettersExist === true)  return "Calm down, I know what I'm doing!"
  else if (isUpperCase === true && lettersExist === true ) return  'Whoa, chill out!' 
  else if ( message.endsWith('?') ) return 'Sure.'
  else return 'Whatever.' 
};
