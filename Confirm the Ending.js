function confirmEnding(str, target) {
  let reg = new RegExp(target + "$");
  return reg.test(str);
}

confirmEnding("Bastian", "n");