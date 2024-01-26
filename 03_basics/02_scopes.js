var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // or => c = 30
}

// console.log(a) // Error : a not defined
// console.log(b) // Error : b not defined
// console.log(c) // o/p => 30 {Problem}

// NESTED SCOPE
function one() {
  const username = "yashveer";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  // console.log(website) // ERROR

  two();
}

// one() // o/p => yashveer

if (true) {
  const username = "yashveer";
  if (username === "yashveer") {
    const website = " youtube";
    // console.log(username + website) // o/p => yashveer youtube
  }

  // console.log(website) // ERROR
}

// console.log(username) // ERROR

// ********** INTERESTING EXAMPLE **********

console.log(addOne(5)); // Can be accessed before declaring function

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)) // ERROR : Can't be accessed before declaring expression

// EXPRESSION (FUNCTION)
const addTwo = function (num) {
  return num + 2;
};
