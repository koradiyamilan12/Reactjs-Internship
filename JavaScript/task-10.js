// Q - 10 Write a JavaScript function that returns a string that has letters in alphabetical order.

let favLang = (name) => {
  return name.split('').sort().join('');
}

console.log(favLang('javascript'));
