function findLongestWordLength(str) {
  var arr = str.split(" ");
  var len = [];
  for (var x = 0; x < arr.length; x++) {
    len.push(arr[x].length);
  }
  return len.sort(function(a, b) {return b - a})[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");