// PRIMITIVE : Call by value, original data not given
// -> copy given and changes are made in copies
// -> 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// REFERENCE / NON-PRIMITIVE : Their memory reference can be directly allocated
// -> types : Array, Objects, Functions

// JavaScript is a DYNAMICALLY typed language.
// This means that variable types are determined at runtime,
// and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.

// SYMBOL USAGE
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) // false {even though value is same}

// Array, Objects, functions

const heroes = ["homelander", "soilder boy", "deep"]

let myObj = {
    name: "yashveer",
    age: 21
}

// functions can be stored in variables in JS
const myFunction = function (){
    console.log("Hello world")
}

console.log(typeof myFunction) // function (object)

// *** IMPORTANT ***
// typeof null => object
// typeof undefined => undefined
// typeof function => object function
// typeof symbol => symbol