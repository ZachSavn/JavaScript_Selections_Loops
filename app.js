console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let isOdd = 0;

for (isOdd == 0; isOdd < 100; isOdd++) {
  // Checking if the number is odd.
  if (isOdd % 2 == 1) {
    console.log(isOdd);
  } else {
    continue;
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let fizzBuzz = 0;

for (fizzBuzz = 0; fizzBuzz < 100; fizzBuzz++) {
  //checking divisibility of number
  if (fizzBuzz % 3 == 0 && fizzBuzz % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (fizzBuzz % 3 == 0) {
    console.log("FIZZ");
  } else if (fizzBuzz % 5 == 0) {
    console.log("BUZZ");
  }
}
