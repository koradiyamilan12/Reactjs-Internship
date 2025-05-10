// Write a function to print array elements in reverse order using for loop

const numbers = [1, 2, 3, 4, 5];

function printReverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseArray(numbers);