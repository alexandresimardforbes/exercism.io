//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSecond) => {
  let age;
  const earthConversion = 31557600;
  switch (planet) {
    case "earth":
      age = parseFloat(((ageInSecond / 1) / earthConversion).toFixed(2));
      break;
    case "mercury":
      age = parseFloat(((ageInSecond / 0.2408467) / earthConversion).toFixed(2));
      break;
    case "venus":
      age = parseFloat(((ageInSecond / 0.61519726) / earthConversion).toFixed(2));
      break;
    case "mars":
      age = parseFloat(((ageInSecond /  1.8808158) / earthConversion).toFixed(2));
      break;
    case "jupiter":
      age = parseFloat(((ageInSecond / 11.862615) / earthConversion).toFixed(2));
      break;
    case "saturn":
      age = parseFloat(((ageInSecond /  29.447498) / earthConversion).toFixed(2));
      break;
    case "uranus":
      age = parseFloat(((ageInSecond /84.016846) / earthConversion).toFixed(2));
      break;
    case "neptune":
      age = parseFloat(((ageInSecond / 164.79132) / earthConversion).toFixed(2));
      break;
    default:
      break;
  }

  return age;


};
