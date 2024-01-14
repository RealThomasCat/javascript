// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 != 1)

// console.log("2" > 1) // true
// console.log("02" > 1) // true

// Equality check (==) and comparisons (> < >= <=) work differently
// Comparisons convert null to a number, treating it as 0
// console.log(null > 0) // false (0 > 0)
// console.log(null == 0) // false (null == 0)
// console.log(null >= 0) // ***** true ***** (0 >= 0)

// Always false with undefined
// console.log(undefined == 0) // false
// console.log(undefined > 0) // false
// console.log(undefined < 0) // false
// console.log(undefined <= 0) // false
// console.log(undefined >= 0) // false

// TAKEAWAY -> conversion and equality works differently
// We should avoid these confusing comparisions

// Strict check :-
// console.log("2" === 2) // false