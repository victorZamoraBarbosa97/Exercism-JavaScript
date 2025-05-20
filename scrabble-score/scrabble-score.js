const values = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

export const score = (word = "") => {
  word = word.toUpperCase();
  let points = 0;
  for (let char of word) {
    for (let [key, v_array] of Object.entries(values)) {
      if (v_array.includes(char)) {
        points = points + parseInt(key);
      }
    }
  }
  return points;
};
