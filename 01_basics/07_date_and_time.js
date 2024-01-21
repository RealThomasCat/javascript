let myDate = new Date()
// console.log(myDate) // o/p => 2024-01-21T17:27:58.700Z
// console.log(myDate.toString()) // o/p => Sun Jan 21 2024 17:28:36 GMT+0000 (GMT)
// console.log(myDate.toDateString()) // o/p => Sun Jan 21 2024
// console.log(myDate.toLocaleString()) // o/p => 1/21/2024, 5:29:25 PM
// console.log(typeof(myDate)) // o/p => object

let myCreatedDate = new Date(2023, 0, 23, 5, 3) // Months start from 0-index
// console.log(myCreatedDate.toLocaleString()) // o/p => 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14") // YY-MM-DD
let myCreatedDate3 = new Date("01-14-2023") // MM-DD-YY
// console.log(myCreatedDate2.toLocaleString()) // o/p => 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate3.toLocaleString()) // o/p => 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate3.getTime()) // o/p => 1673654400000 (in milli sec)

// let myTimeStamp = Date.now() // Can also declare with new
// console.log(myTimeStamp) // o/p => 1705858787255 (in milli sec)

// console.log(Math.floor(Date.now()/1000)) // o/p => 1705858987 (in sec)

let newDate = new Date()
// console.log(newDate.getMonth()) // o/p => zero indexing based month
// console.log(newDate.getDay()) // o/p => zero indexing based day (sunday = 0)

// INTERNATIONALIZATION
console.log(newDate.toLocaleString('default', { // default internationalization
    weekday: "long" // mon -> monday
})) // o/p => sunday
