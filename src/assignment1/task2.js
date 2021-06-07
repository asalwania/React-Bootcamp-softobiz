// // Task 2: replace duplicate with 0
const a = [10, 12, 2, 6, 2, 4, 3, 10, 13, 15, 12, 6, 4];
// // output will be:
// // const b = [10, 12, 2, 6, 0, 4, 3, 0, 13, 15, 0, 0, 0];

function replaceDuplicateWithZero(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array[j] = 0;
      }
    }
  }
  return array;
}
const b = replaceDuplicateWithZero(a);
console.log(b);
