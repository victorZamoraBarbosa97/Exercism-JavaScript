export const classify = (n) => {
  let sum = 0;
  if (n <= 0)
    throw new Error("Classification is only possible for natural numbers.");
  for (let indice = 1; indice < n; indice++) {
    if (n % indice === 0) sum += indice;
  }
  if (sum === n) return "perfect";
  if (sum > n) return "abundant";
  else return "deficient";
};
