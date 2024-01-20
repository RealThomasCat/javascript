// DECLARATION
const score = 400
// console.log(score) // o/p => 400
const balance = new Number(100)
// console.log(balance) // o/p => [Number: 100]

// TO STRING & TO FIXED
// console.log(balance.toString()) // o/p => 100
// console.log(balance.toFixed(2)) // o/p => 100.00

// PRECISION
const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)) // o/p => 23.9 (round off and return a string)

// TO LOCALE STRING
const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // o/p => 1,000,000
// console.log(hundreds.toLocaleString('en-IN')) // o/p => 10,00,000

// MAX_VALUE
// console.log(Number.MAX_VALUE) // o/p => 1.7976931348623157e+308

// ********** MATHS **********

// BASIC MATH METHODS
// console.log(Math.abs(-4)); // o/p => 4
// console.log(Math.round(4.6)); // o/p => 5
// console.log(Math.ceil(4.2)); // o/p => 5
// console.log(Math.floor(4.8)); // o/p => 4
// console.log(Math.min(4 , 5, 7, 8)); // o/p => 4
// console.log(Math.max(4 , 5, 7, 8)); // o/p => 8

// MATH.RANDOM
console.log(Math.random()); // o/p => value between 0-1
console.log((Math.random()*10) + 1); // o/p => value between 1-10
console.log(Math.floor(Math.random()*10) + 1); // o/p => value between 1-10

const min = 10
const max = 20
// Want a random value between 10 and 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)