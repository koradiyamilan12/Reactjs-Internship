// 15. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// · function truncateString(str, num) {}
// · truncateString("Peter Piper picked a peck of pickled peppers", 8);
// · Output: Peter Pi...

const truncateString = (str, num) => {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 8));