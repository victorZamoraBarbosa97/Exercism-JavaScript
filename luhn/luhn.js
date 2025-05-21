export const valid = (text = "") => {
  const digits = text.replace(/\s+/g, "");
  if (!/^\d+$/.test(digits) || digits.length <= 1) return false;
  const reversed = digits.split("").reverse().map(Number);

  const suma = reversed.reduce((acc, digito, index) => {
    if (index % 2 === 1) {
      digito *= 2;
      if (digito > 9) digito -= 9;
    }
    return acc + digito;
  }, 0);

  return suma % 10 === 0;
};
