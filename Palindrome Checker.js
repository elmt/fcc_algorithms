function palindrome(str) {
  //make lowercase
  var lwr = str.toLowerCase();
  //remove non-alphanumeric characters
  var rgx = /[^a-z0-9]/g;
  var alphNum = lwr.replace(rgx,'');
  //split, reverse, and join
  var arr = [];
  arr = alphNum.split('');
  var rev = arr.reverse().join('');
 
  //compare with alphNum
  if (rev == alphNum) {  
    return true;}
  else return false;
}