//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotides) => {

  let nucleotidesArray = [...nucleotides];
  console.log(nucleotidesArray);

  for (let i = 0; i < nucleotidesArray.length; i++) {
    switch (nucleotidesArray[i]) {
      case "G":
        nucleotidesArray[i] = "C";
        break;
      case "C":
        nucleotidesArray[i] = "G";
        break;
      case "T":
        nucleotidesArray[i] = "A";
        break;
      case "A":
        nucleotidesArray[i] = "U";
        break;
      default:
        nucleotides = ""
    }
  }

  nucleotides = nucleotidesArray.join("");
  return nucleotides

};
