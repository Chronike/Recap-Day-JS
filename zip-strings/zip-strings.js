function zipStrings(strA, strB) {
  const maxLength = Math.max(strA.length, strB.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < strA.length) {
      result += strA[i];
    }
    if (i < strB.length) {
      result += strB[i];
    }
  }

  return result;
}
