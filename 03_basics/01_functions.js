function sayMyName() {
  console.log("T");
  console.log("O");
  console.log("M");
}

// sayMyName // Function reference
// sayMyName() // Function execution

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3,5)
// addTwoNumbers(3,"5") // o/p => 35
// addTwoNumbers("3",5) // o/p => 35
// addTwoNumbers(3,"a") // o/p => 3a
// addTwoNumbers("a",3) // o/p => a3
// addTwoNumbers("a","b") // o/p => a3

// PARAMETERS : variables in () when defining a function
// ARGUMENTS : variables in () when calling a function

// const result = addTwoNumbers(3,5) // o/p => 8
// console.log(result) // o/p => undefined
// NOTE: console log is undefined because function is not returning anything

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log("Line after return"); // Will not be executed
}

const result = addTwoNumbers(3, 5); // no o/p
// console.log(result) // o/p => 8

function loginUserMessage(username = "sam") {
  // default value = sam
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in!`;
}

loginUserMessage("Yashveer"); // no output
// console.log(loginUserMessage("Yashveer")) // o/p => Yashveer just logged in!
console.log(loginUserMessage()); // o/p -> undefined just logged in!
