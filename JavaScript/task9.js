// Q - 9 Write a function to Reverse the given string

let username = (str) => {
  return str.split('').reverse().join('')
}

let result = username("abc")
console.log(result);