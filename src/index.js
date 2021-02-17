
exports.min = function min (array) {

let minNumber = (a, b) => {
  return a < b ? a : b
};
if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
return array.reduce(minNumber);
}
return 0;
}

exports.max = function max (array) {
  let maxNumber = (a, b) => {
    return a > b ? a : b
  };
  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
  return array.reduce(maxNumber);
  }
  return 0;
}

exports.avg = function avg (array) {
  

  if (typeof array != "undefined" && array != null && array.length != null && array.length > 0){
 
      let sum = 0;
      for (let number of array) {
      sum += number;
      }
    return sum/(array.length);
  
  }
    return 0;
  }
