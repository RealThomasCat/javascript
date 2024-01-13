"use strict" // Treat all js code as newer version (works automatially btw)

// alert(3 + 3) // Won't work because are using nodejs, not browser

let name = "Yashveer"
let age = 21
let isLoggedIn = false
let undefinedValue
let emptyValue = null

// number
// bigint => larger range number
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value not empty but also not assigned (different from null)
// symbol => represents a unique identifier
// object

console.log(typeof "Yashveer") // o/p => string
console.log(typeof age) // o/p => number
console.log(typeof null) // o/p => object
console.log(typeof undefined) // o/p => undefined