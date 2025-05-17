// Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren’t any positive numbers, return 0.

// Array.prototype.filter()
// Array.prototype.reduce()

const input = [1, -4, 12, 0, -3, 29, -150];

const ans = input.filter((val) => {
  return val > 0;
}, 0);

// console.log(ans);

const res = ans.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(res);