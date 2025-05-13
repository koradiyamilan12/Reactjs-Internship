/* Q - 11 const lang = ["html","css","js","java"];
  add "react js" element to the lang array
  remove "java" and add "node js" at the index of "java"
  copy lang array to other array named langCopy using slice */

const lang = ["html", "css", "js", "java"];

// add react js

lang.push("react js");
// console.log(lang);

// remove "java" and "node js" at the index of "java"

lang.splice(3, 3, "node js");
// console.log(lang);

// copy lang array

let langCopy = lang.slice()
console.log(langCopy);