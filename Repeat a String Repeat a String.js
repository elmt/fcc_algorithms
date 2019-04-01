function repeatStringNumTimes(str, num) {
  var result = "";
  for (var x = 1; x <= num; x++){
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);