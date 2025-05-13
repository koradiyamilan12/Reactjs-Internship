// Q - 8 Write a function to convert string into an array ex : input "Hello", Output : ['H''e''l''l''o'].

let stringToArray = (str) => {
  return str.split('');
}

let result = stringToArray('Hello')
console.log(result);