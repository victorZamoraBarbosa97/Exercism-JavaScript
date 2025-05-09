export function answer(question) {
  // Solo preguntas que empiecen con "What is" y terminen con "?"
  if (!question.startsWith("What is") || !question.endsWith("?")) {
    throw new Error("Unknown operation");
  }

  // Extraer el contenido interno entre "What is" y "?"
  let cleaned = question.slice(7, -1).trim();
  if (cleaned === "") throw new Error("Syntax error");

  // Unir operadores de dos palabras en uno solo
  cleaned = cleaned
    .replace(/multiplied by/g, "multiplied_by")
    .replace(/divided by/g, "divided_by");

  const tokens = cleaned.split(/\s+/);

  // Caso especial: dos tokens (número + operador)
  if (tokens.length === 2) {
    const op = tokens[1];
    const validOps = ["plus", "minus", "multiplied_by", "divided_by"];
    if (validOps.includes(op)) {
      // Operador conocido pero falta segundo operando
      throw new Error("Syntax error");
    } else {
      // Operador no reconocido
      throw new Error("Unknown operation");
    }
  }

  // Debe haber número inicial y luego pares (operador, número)
  if (tokens.length % 2 === 0) throw new Error("Syntax error");

  // Parsear el primer número
  let result = parseInt(tokens[0], 10);
  if (isNaN(result)) throw new Error("Syntax error");

  // Procesar las operaciones secuencialmente
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const num = parseInt(tokens[i + 1], 10);
    if (isNaN(num)) throw new Error("Syntax error");

    switch (operator) {
      case "plus":
        result += num;
        break;
      case "minus":
        result -= num;
        break;
      case "multiplied_by":
        result *= num;
        break;
      case "divided_by":
        result /= num;
        break;
      default:
        throw new Error("Unknown operation");
    }
  }

  return result;
}
