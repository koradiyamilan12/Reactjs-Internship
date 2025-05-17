// Age difference from the youngest and oldest
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// Array.prototype.map()
// Math.min()
// Math.max()

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ages = input.map((member) => member.age);

const oldest = Math.max(...ages);
const youngest = Math.min(...ages);
const difference = oldest - youngest;

console.log(oldest, youngest, difference);