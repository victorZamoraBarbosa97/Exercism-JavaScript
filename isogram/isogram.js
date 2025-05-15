export const isIsogram = (word = "") => {
  word = word.toLowerCase();
  for (let index = 0; index < word.length; index++) {
    if (word.charCodeAt(index) >= 97 && word.charCodeAt(index) <= 122) {
      if (word.includes(word[index], index + 1)) {
        // si incluye nuevamente la letra
        return false;
      }
    }
  }
  return true;
};
