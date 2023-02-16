//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

export const isPangram = (sentence) => {
  sentence = sentence.toLowerCase();
  let flag = true
  for(let i = 0; i < ALPHABET.length; i++ ){
    if ( !sentence.includes(ALPHABET[i]) ){
      flag = false
      break;
    }
  }
  return flag;
};
