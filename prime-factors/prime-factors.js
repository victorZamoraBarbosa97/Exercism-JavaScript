export const primeFactors = (numero = 2) => {
  const result = [];
  if (numero === 1) return result;
  let divisor = 2;
  while (numero > 1) {
    if (numero % divisor === 0) {
      numero /= divisor;
      result.push(divisor);
    } else {
      divisor++;
    }
  }

  return result;
};
