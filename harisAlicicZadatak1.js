function getUniqueNumbers(arr) {
  const tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (tempArr.includes(arr[i])) continue;

    tempArr.push(arr[i]);
  }

  return tempArr;
}

console.log(getUniqueNumbers([4, 3, 1, 5, 6, 8, 4, 2, 1, 4, 3, 5, 6, 1]));
