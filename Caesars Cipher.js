function rot13(str) { // LBH QVQ VG!
  var result = [];
  var letnum = "";
  //A = 65, Z = 90
  for (var x = 0; x < str.length; x++) {
    if (str.charCodeAt(x) >= 65 && str.charCodeAt(x) <= 90) {
      if (str.charCodeAt(x) < 78) {
        letnum = str.charCodeAt(x) + 13;
        letter = String.fromCharCode(letnum);
        result.push(letter);
      }
      else {
        letnum = str.charCodeAt(x) - 13;
        letter = String.fromCharCode(letnum);
        result.push(letter);
      }
    }
    else {
      result.push(str[x]);
    }
  }
  return result.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");