let score = "33"
let score2 = "33abc"
let score3 = null
let score4 = undefined
let score5 = true

// Two ways of getting type of variable
// console.log(typeof score)
// console.log(typeof (score))

// Converting score string to number
let valueInNumber = Number(score)
// console.log(typeof valueInNumber)

// Converting score2 string to number
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber) // o/p => number
// console.log(valueInNumber2) // o/p => NaN (a special data type)

// Converting null to number
let nullInNumber = Number(score3)
// console.log(typeof nullInNumber) // o/p => number
// console.log(nullInNumber) // o/p => 0

// Converting null to number
let undefinedInNumber = Number(score4)
// console.log(typeof undefinedInNumber) // o/p => number
// console.log(undefinedInNumber) // o/p => NaN

// Converting boolean to number
let booleanInNumber = Number(score5)
// console.log(typeof booleanInNumber) // o/p => number
// console.log(booleanInNumber) // o/p => 1

// TAKEAWAY (conversion to number):
    // "33" => 33
    // "33abc" => NaN
    // "null" => 0
    // "undefined" => NaN
    // "true" => 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn) // o/ => boolean
// console.log(booleanIsLoggedIn) // o/p => true

let isLoggedIn2 = "yes"
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(typeof booleanIsLoggedIn2) // o/ => boolean
// console.log(booleanIsLoggedIn2) // o/p => true

let isLoggedIn3 = ""
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(typeof booleanIsLoggedIn3) // o/ => boolean
console.log(booleanIsLoggedIn3) // o/p => false

// TAKEAWAY (conversion to boolean):
    // 1 => true
    // 0 => true
    // "yes" => true
    // "" => false