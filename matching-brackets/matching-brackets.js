const pares = {
  ")": "(",
  "]": "[",
  "}": "{",
};

export const isPaired = (cadena = "") => {
  let stack = [];
  for (const char of cadena) {
    if ("([{".includes(char)) {
      // Si es un símbolo de apertura, lo agregas al stack
      stack.push(char);
    } else if (")]}".includes(char)) {
      // Si es un símbolo de cierre:
      const last = stack.pop();
      if (last !== pares[char]) {
        return false; // No coincide el cierre con el último abierto
      }
    }
  }
  return stack.length === 0;
};
