//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EarthYear = 31557600 // seconds 

export const age = (planet, AgeInSeconds) => {
  let answer = undefined;
  switch (planet) {
    case 'mercury':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 0.2408467) ).toFixed(2));
      break;
    case 'venus':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 0.61519726) ).toFixed(2));
      break;
    case 'earth':
      answer = parseFloat( (AgeInSeconds/EarthYear).toFixed(2));
      break;
    case 'mars':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 1.8808158) ).toFixed(2));
      break;
    case 'jupiter':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 11.862615) ).toFixed(2));
      break;
    case 'saturn':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 29.447498) ).toFixed(2));
      break;
    case 'uranus':
      answer = parseFloat( (AgeInSeconds/(EarthYear *  84.016846) ).toFixed(2));
      break;
    case 'neptune':
      answer = parseFloat( (AgeInSeconds/(EarthYear * 164.79132) ).toFixed(2));
      break;
  }

  return answer
};
