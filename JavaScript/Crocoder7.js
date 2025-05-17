// n! with Map and Reduce
// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// Array.prototype.map()
// Array.prototype.fill()
// Array.prototype.reduce()

const input = 6;

const factorial = (n) =>
  Array(n).fill(0).map((_, i) => i + 1).reduce((acc, num) => acc * num, 1);

console.log(factorial(4));