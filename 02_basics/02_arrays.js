const marvelHeroes = ["Thor", "Ironman", "Hulk"]
const dcHeroes = ["Batman", "Superman", "Flash"]

// Pushing array into another array as element
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) // o/p => [ 'Thor', 'Ironman', 'Hulk', [ 'Batman', 'Superman', 'Flash' ] ]

// Circular
// dcHeroes.push(dcHeroes)
// console.log(dcHeroes) // o/p => [ 'Batman', 'Superman', 'Flash', [Circular] ]
// console.log(dcHeroes[3]) // o/p => [ 'Batman', 'Superman', 'Flash', [Circular] ]
// console.log(dcHeroes[3][2]) // o/p => Flash

// CONCAT : returns new array with combined elements
const marvelDc = marvelHeroes.concat(dcHeroes)
// console.log(marvelDc) // o/p => [ 'Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash' ]

// SPREAD : works like concat
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes) // o/p => [ 'Thor', 'Ironman', 'Hulk', 'Batman', 'Superman', 'Flash' ]

// FLAT
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usableAnotherArray = anotherArray.flat(Infinity) // Depth = Infinity
// console.log(usableAnotherArray)

// IS ARRAY
console.log(Array.isArray("Yashveer")) // o/p => false

// FROM : Converts to array
// console.log(Array.from("Yashveer")) // o/p => [ 'Y', 'a', 's', 'h', 'v', 'e', 'e', 'r' ]
// Converting object to array, returns empty array
// console.log(Array.from({name: "Yashveer", age: 21})) // o/p => []

let score1 = 100
let score2 = 200
let score3 = 300

// OF : Returns a new array from a set of elements
console.log(Array.of(score1, score2, score3)) // o/p => [ 100, 200, 300 ]
console.log([score1, score2, score3]) // o/p = [ 100, 200, 300 ]

