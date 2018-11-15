function convertToRoman(num) {
var output = []; //ones = output[0]
var arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var result = "";
  
for (var x = 0; x <= arabicNum.length; x++) {
  while (num >= arabicNum[x]){
    result += romanNum[x];
    num -= arabicNum[x];
  }
}
return result;
}

convertToRoman(3999);