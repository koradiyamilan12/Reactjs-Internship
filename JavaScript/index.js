// JavaScript Syntax

// let x, y, z;
// x = 5;
// y = 6;
// z = x + y;

// console.log(z);

// Comments

// Single Line Comments
//

/* Multi-line Comments */
/* */


// variables

// 1. var
// 2. let
// 3. const


// String Methods in JS

// String length

// let text = "abc";
// let totalValue = text.length;
// console.log(totalValue);

// charAt()

// let text = "abc";
// let totalValue = text.charAt(2);
// console.log(totalValue);

// charCodeAt()

// let text = "abc";
// let totalValue = text.charCodeAt();
// console.log(totalValue);


// const name = "W3Schools";
// let letter = name.at(2);

// String concat()


// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);


// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded);

// let text = "abc";
// let value = text.split(",")
// console.log(value);



// JavaScript Array Methods


// .length

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

// .toString

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let str = fruits.toString();

// console.log(str);

// .at

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);

// []

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[2];
// console.log(fruit);

// join()

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.join("*");
// console.log(fruit);

// pop() -> removes the last element from an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruits);

// push() -> adds a new element to an array (at the end):

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.push("Kiwi");
// console.log(fruits);

// shift() -> removes the first array element:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruits);

// unshift() -> adds a new element to an array (at the start):

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.unshift("Kiwi");
// console.log(fruits);

// length ->The length property provides an easy way to append a new element to an array:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// console.log(fruits);

// delete() -> Using delete() leaves undefined holes in the array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);


// concat() -> creates a new array by merging (concatenating) existing arrays:
// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments.
// The concat() method can also take strings as arguments:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const vegetables = ["Carrot", "Broccoli", "Spinach", "Tomato", "Cucumber"];

// const fruitsAndVegetables = fruits.concat(vegetables);

// console.log(fruitsAndVegetables);


// copyWithin() -> copies array elements to another position in an array:
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 0);
// console.log(fruits);


// flat() -> creates a new array with sub-array elements concatenated to a specified depth.

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

// flatMap() -> first maps all elements of an array and then creates a new array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);

// splice() -> adds new items to an array.
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// slice() -> method slices out a piece of an array into a new array:
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
// The slice() method can take two arguments like slice(1, 3).
// The method then selects elements from the start argument, and up to (but not including) the end argument.


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

// indexOf() -> searches an array for an element value and returns its position.
// returns -1 if the item is not found.

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Orange");
// console.log(position);

// function sum(a, b) {
//   //logic
//   console.log(a + b)
//   return 5 + 10
//   // console.log("after return")
// }
// const result = sum()
// console.log(result)
// sum(1, 3)
// sum(2, 2)
// sum(5, 5)
// sum(10, 5)
// sum(4, 4)

// arrow function
// const sum = () => { }

// normal function
// function name(parameter1, parameter2) {
//   // logic code
//   console.log();
// }

// // function call
// name()

// arrow Function

// let name = ()=>{
//   console.log("Milan");
// }
// name()




// Arrow Functions

// const hello = ()=> {
//   return "Hello World!"
// }

// console.log(hello());


// // Destructuring


// // Array
// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;

// let arr = [1, 2, 3, 4, 5, 0, -3, -5, -4];

// // map (for loop)
// const result = arr.map((item) => {
//   return item * 5;
// });

// // console.log({ result })

// // filter (for loop + condition)
// const res = arr.filter((element) => {
//   return element < 0;
// });

// // console.log(res)

// // reduce
// const res1 = arr.reduce((acc, curr) => {
//   return acc = acc + curr;
// }, 0);

// // console.log({ res1 })


// let array = [1, 2, 3, 4, 5];

// // map method
// let ans = array.map((val) => {
//   return val + 1;
// });

// console.log(ans);

// // filter method
// let results = array.filter((elem) => {
//   return elem < 3;
// });
// console.log(results);

// // reduce method
// let results2 = array.reduce((eccu, el) => {
//   return eccu * el;
// }, 1);
// console.log(results2);


// JavaScript (ES6+)✅
// Variable (let, const)✅
// Arrow function✅
// Template literals✅
// Destructuring✅
// import & export✅
// Spread / rest operators✅
// Array methods (map, filter, reduce)✅































