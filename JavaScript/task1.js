// 1. write a function and pass user age as a parameter if user is 18 or older, give feedback "You are old enough to drive" but if user if not give another feedback "You are left with {defference} years to drive"

const drivingEligibility = (age) => {
  if (age >= 18) {
    console.log("You are old enough to drive");
  } else {
    let defference = 18 - age;
    console.log(`You are left with ${defference} years to drive`);
  }
}

drivingEligibility(12);


// extra
function drivingEligibility1(ages) {
  let defference1 = 18 - ages;
  console.log(ages >= 18 ? "You are old enough to drive" : `You are left with ${defference1} years to drive`);
}

drivingEligibility1(20);