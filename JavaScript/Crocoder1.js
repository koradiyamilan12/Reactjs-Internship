// Array squared
// Square the value of every element in the array. Presume that you will only get numbers in the input array.

// Array.prototype.map()
// Math.pow()

const input = [1, 2, 3, 4, 5];

const ans = input.map((num) => {
  return Math.pow(num, 2);
});

ans.map((num) => {
  return Math.pow(num);
});

console.log(ans);