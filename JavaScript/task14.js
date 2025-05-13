// 14. Return the length of the longest word in the provided sentence. Your response should be a number.

const longestWordLength = (str) => {
  return Math.max(...str.split(" ").map(word => word.length));
}

console.log(longestWordLength("Return the length of the longest word in the provided sentence."));