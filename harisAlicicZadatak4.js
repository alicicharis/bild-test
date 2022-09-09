function removeSpecificChars(string, chars) {
  let charsArr = [];
  let finalString = "";

  for (let i = 0; i < chars.length; i++) {
    charsArr.push(chars[i]);
  }

  for (let i = 0; i < string.length; i++) {
    if (charsArr.includes(string[i])) continue;

    finalString += string[i];
  }

  return finalString;
}

console.log(removeSpecificChars("hello world", "def"));
