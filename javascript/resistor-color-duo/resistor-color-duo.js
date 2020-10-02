//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let colorMap = new Map();

colorMap.set('black','0')
         .set('brown','1')
         .set('red','2')
         .set('orange','3')
         .set('yellow','4')
         .set('green','5')
         .set('blue','6')
         .set('violet','7')
         .set('grey','8')
         .set('white','9')


export const decodedValue = (colorArray) => Number(colorMap.get(colorArray[0]) + colorMap.get(colorArray[1]));