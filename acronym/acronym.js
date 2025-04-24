export const parse = (frase = "") => {
  return frase
    .split(/[-_ ]/)
    .filter((word) => word.length > 0)
    .map((palabra) => {
      return palabra[0].toUpperCase();
    })
    .join("");
};
