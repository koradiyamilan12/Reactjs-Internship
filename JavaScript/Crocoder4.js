// Get name initials
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// Array.prototype.map()
// String.prototype.split()
// String.prototype.join()

const input = "George Raymond Richard Martin";

let res = input.split(" ")
const ans = res.map((word) => {
  return word[0]
}).join("");

console.log(ans);
