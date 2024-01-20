const name = "yashveer"
const repoCount = 50

// console.log(name + repoCount + "Value") // Works but outdated

// BACKTICKS
// String interpolation using backticks
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// Another way of declaring string
const gameName = new String('rdr')

// COMMON STRING FUNCTIONS
// console.log(gameName.length)
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.toUpperCase()) // Original string will not be changed to upper case because it is primitive
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('d')) // Returns index of 'd'

// SUBSTRING AND SLICE
const newString = name.substring(0,4) // 4th will not be included
// console.log(newString) // o/p => yash
const anotherString = name.slice(-7,2) // Same as substring but -ve indexes can be used
// console.log(anotherString) // o/p => ash

// TRIM
const newString1 = "   thomas   "
// console.log(newString1)
// console.log(newString1.trim()) // Removes starting and ending spaces

// REPLACE AND INCLUDES
const url = "https://yashveer.com/yashveer%20singh" // Space converted to %20 by browser's url encoding
// console.log(url.replace('%20', '-'))
// console.log(url.includes('tom', '-'))

// SPLIT
const newString2 = "thomas-the-cat"
// split(seperator, limit)
console.log(newString2.split('-')) // o/p => [ 'thomas', 'the', 'cat' ]
console.log(newString2.split('-', 2)) // o/p => [ 'thomas', 'the' ]