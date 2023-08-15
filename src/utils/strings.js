export function isSubsequence(str1, str2) {
  let ind1 = 0;
  let ind2 = 0;
  while (ind1 < str1.length) {
    if (ind2 === str2.length) {
      return false;
    }
    if (str1[ind1] === str2[ind2]) {
      ind1 = ind1 + 1;
    }
    ind2 = ind2 + 1;
  }
  return true;
}

export function removeWhiteSpaces(str) {
  return str.replace(/\s+/g, "");
}
