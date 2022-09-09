function notRepeating(string) {
  for (let i = 0; i < string.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        count++;
      }
    }
    if (count === 1) return string[i];
  }
}

console.log(notRepeating("tooth"));
