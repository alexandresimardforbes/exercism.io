//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let rowArray;
let coloumnArray;

export class Matrix {

  constructor(matrixString) {
    
    rowArray = [];
    coloumnArray = [];

    rowArray = matrixString.split(/\n/).map(el => el.split(" ")).map(el => el.map(str => parseInt(str)));
    let [row] = rowArray;
    coloumnArray = row.map((value, column) => rowArray.map(row => row[column]));
    //console.log(rowArray); 
    console.log(coloumnArray);  
  }

  /*transpose = (matrix) => {
    let [row] = matrix
    return row.map((value, column) => value)
  }*/
  

  get rows() {
    return rowArray;
  }

  get columns() {
    return coloumnArray;
  }
}
