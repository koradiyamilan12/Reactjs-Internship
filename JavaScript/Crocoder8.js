// Count elements in array of arrays
// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

// Array.prototype.reduce()
// Array.prototype.flat()

const countElements = (arr) =>
  arr.flat().reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

const input = [
  ["apple", "banana", "apple"],
  ["orange", "banana", "apple"],
  ["banana", "orange"]
];

console.log(countElements(input));