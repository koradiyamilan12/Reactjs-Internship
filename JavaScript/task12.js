// 12. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));