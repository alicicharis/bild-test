function removeRepeating(string) {
  const letterPosition = [];
  let final = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === string[i + 1]) letterPosition.push(i + 1);
  }

  console.log(letterPosition);

  for (let i = 0; i < string.length; i++) {
    if (letterPosition.includes(i)) continue;

    final += string[i];
  }

  console.log(final);
}

removeRepeating(
  "Shelles mollusk lives in wallless house in wellness. Aaaarrgghh!"
);
