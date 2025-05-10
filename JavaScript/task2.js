// 2. Create function that will take two arguments a and b. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// #1 way
function compersion(a, b) {
  if (a > b) {
    console.log("a is greater than b");
  } else {
    console.log("a is less than b");
  }
}

compersion(10, 20);

// #2 way
function compersion1(c, d) {
  console.log(c > d ? 'c is greater than d' : 'c is less than d');
}

compersion1(20, 10);