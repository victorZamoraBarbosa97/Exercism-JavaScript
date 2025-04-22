export const steps = (number) => {
  if (number <= 0) throw new Error("Only positive integers are allowed");

  // con recursividad
  const collatz_conjeture = (n, contador = 0) => {
    if (n === 1) return contador;
    return collatz_conjeture(n % 2 === 0 ? n / 2 : n * 3 + 1, contador + 1);
  };

  // sin recursividad
  /*   while (number !== 1) {
    number = number % 2 === 0 ? number / 2 : number * 3 + 1;
    contador++;
  } */

  return collatz_conjeture(number);
};
