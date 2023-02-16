//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {

  return DNA.split("").map( letter => {
    switch (letter) {
      case 'G':
        return 'C'
      case 'C':
        return 'G'
      case 'T':
        return 'A'
      case 'A':
        return 'U'
      default:
        return ""
    }
  }).toString().replaceAll(",", "");

};
