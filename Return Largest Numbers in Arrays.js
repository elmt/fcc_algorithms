function largestOfFour(arr) {
  var result = [];
  for (var x = 0; x < arr.length; x++) {
    result[x] = arr[x].sort(function(a, b) {return b - a})[0];
  } 
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);