function truncateString(str, num) {
  var arr = str.split("");
  var result = arr.slice(0, num).join("");
  if (str.length <= num) {
    return result;
  }
  else {
    return result + "...";
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);