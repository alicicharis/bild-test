function ex(num) {
  let total = 0;
  let fives = [];
  let threes = [];
  let ones = [];

  while (total < num) {
    total += 5;
    if (total > num) {
      total -= 5;
      break;
    }
    fives.push(5);
  }

  while (total < num) {
    total += 3;
    if (total > num) {
      total -= 3;
      break;
    }
    threes.push(3);
  }

  while (total < num) {
    total += 1;
    if (total > num) {
      total -= 1;
      break;
    }
    ones.push(1);
  }

  length = fives.length + threes.length + ones.length;

  let elements = [];
  for (let i = 0; i < fives.length; i++) {
    elements.push(fives[i]);
  }

  for (let i = 0; i < threes.length; i++) {
    elements.push(threes[i]);
  }

  for (let i = 0; i < ones.length; i++) {
    elements.push(ones[i]);
  }
  return `${length} (${elements})`;
}

console.log(ex(20));
