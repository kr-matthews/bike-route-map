export function parse(str) {
  const noPrefix = str.substring(123);
  const noPrefixOrSuffix = noPrefix.substring(0, noPrefix.length - 28);
  const endsDone = "[" + noPrefixOrSuffix + "]";
  let result = endsDone;
  while (hasParens(result)) {
    result = removeParenPair(result);
  }
  return result;
}

function hasParens(str) {
  return str.indexOf(")") > -1 && str.indexOf("(") > -1;
}

function removeParenPair(str) {
  const firstIndex = str.indexOf(")");
  const secondIndex = str.indexOf("(");
  return str.substring(0, firstIndex) + "], [" + str.substring(secondIndex + 1);
}
