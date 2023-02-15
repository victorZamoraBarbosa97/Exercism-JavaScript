//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
export const decodedValue = (secuencia) => {
  let numeros = secuencia.map(color => getColorValue(color) )
  return parseInt(numeros.slice(0,2).toString().replace(',',''))
};


const getColorValue = (color) => {
  return COLORS.indexOf(color)
}


