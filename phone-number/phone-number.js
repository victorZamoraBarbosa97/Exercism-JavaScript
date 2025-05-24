export const clean = (numero = "") => {
  if (/[a-zA-Z]/.test(numero)) {
    throw new Error("Letters not permitted");
  }

  if (/[^0-9\s().+-]/.test(numero)) {
    throw new Error("Punctuations not permitted");
  }

  const numerosLimpios = numero.replace(/[^\d]/g, "");

  if (numerosLimpios.length < 10) {
    throw new Error("Incorrect number of digits");
  }
  if (numerosLimpios.length > 11) {
    throw new Error("More than 11 digits");
  }
  if (numerosLimpios.length === 11 && numerosLimpios[0] !== "1") {
    throw new Error("11 digits must start with 1");
  }

  const number =
    numerosLimpios.length === 11 ? numerosLimpios.slice(1) : numerosLimpios;

  const area = number.slice(0, 3);
  const exchange = number.slice(3, 6);

  if (area[0] === "0") {
    throw new Error("Area code cannot start with zero");
  }
  if (area[0] === "1") {
    throw new Error("Area code cannot start with one");
  }
  if (exchange[0] === "0") {
    throw new Error("Exchange code cannot start with zero");
  }
  if (exchange[0] === "1") {
    throw new Error("Exchange code cannot start with one");
  }

  return number;
};
