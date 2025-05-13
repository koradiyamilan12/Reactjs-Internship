// 13. Find Longest Word in a String

const longestWord = (str) => {
  return str
    .split(" ")
    .reduce((longest, current) => {
      return current.length > longest.length ? current : longest
    }, "");
}

console.log(longestWord("Find Longest Word in a String"));