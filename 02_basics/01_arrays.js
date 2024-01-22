// Arrays in JS are resizable
const myArr = [0, 1, 2, 3, 4, 5]

// There can be mix of dataypes in arrays in js
const mixedArr = [0, 1, 2, 3, 4, 5, true, "Yashveer"]

// console.log(myArr[0])

const myHeroes = ["Homelander", "The Deep", "Blacknoir"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myHeroes.length)

// PUSH
myArr.push(6)
myArr.push(7)
// console.log(myArr)

// POP
myArr.pop()
// console.log(myArr)

// UNSHIFT : Adds element at 0th index, shifts all other elements so costly operation
myArr.unshift(10) 
// console.log(myArr) // o/p => [ 10, 0, 1, 2, 3, 4, 5, 6 ]
// SHIFT : Removes element from 0th index, shifts all other elements so costly operation
myArr.shift() 
// console.log(myArr) // o/p => [ 0, 1, 2, 3, 4, 5, 6 ]
// Unoptimized dosen't mean that we will never use it.
// If necessary then we should definitely use it.

// INCLUDES AND INDEX OF
// console.log(myArr.includes(3)) // o/p => true
// console.log(myArr.indexOf(3)) // o/p => 3
// console.log(myArr.indexOf(7)) // o/p => -1

// JOIN : Converts array to strings
const newArr = myArr.join()
// console.log(myArr) // o/p => [ 0, 1, 2, 3, 4, 5, 6 ]
// console.log(typeof(myArr)) //o/p => object
// console.log(newArr) // o/p => 0,1,2,3,4,5,6
// console.log(typeof(newArr)) // o/p => string

//SLICE & SPLICE
// console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // 3 not included
// console.log("B ", myn1); // o/p => B [ 1, 2 ]
// console.log("C ", myArr); // not changed

const myn2 = myArr.splice(1,3) // 3 included
console.log("D ", myn2) // o/p => D  [ 1, 2, 3 ]
console.log("E ", myArr); // o/p => E  [ 0, 4, 5, 6 ] (changed)

