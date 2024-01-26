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

// REST OPERATOR
function calculateCartPrice(...num1) {
    return num1
}
function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 400)) // o/p => [ 200, 300, 400 ]
// console.log(calculateCartPrice2(200, 300, 400, 500)) // o/p => [ 400, 500 ]

const user = {
    username: "yashveer",
    price: 199
}

// FUNCTIONS WITH OBJECTS
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user) // o/p => Username is yashveer and price is 199

// handleObject({
//     username: "tom",
//     price: 99999
// }) // o/p =>Username is tom and price is 99999

const myNewArray = [200, 400, 100, 500]

// FUNCTIONS WITH ARRAYS
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // o/p => 400
console.log(returnSecondValue([100, 200, 300, 400])) // o/p => 200

