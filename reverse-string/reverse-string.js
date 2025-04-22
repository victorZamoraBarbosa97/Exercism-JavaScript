//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (palabra) => {
  let palabra_arr = [...palabra];
  let result = [];
  for (let i = palabra.length - 1; i >= 0; i--) {
    result.push(palabra_arr[i]);
  }
  return result.join("");
};
