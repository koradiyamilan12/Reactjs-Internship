// Calculate median and mean
// Calculate the mean and median values of the number elements from the input array.

// Array.prototype.reduce()
// Array.prototype.sort()
// Math.abs()

const input = [12, 46, 32, 64];

input.sort((a, b) => a - b);

const mean = input.reduce((sum, num) => sum + num, 0) / input.length;

const median = input.length % 2 === 0
  ? (input[input.length / 2 - 1] + input[input.length / 2]) / 2
  : input[Math.floor(input.length / 2)];

console.log({ mean, median });
