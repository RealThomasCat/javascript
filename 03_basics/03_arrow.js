// THIS : used to refer current context
const user = {
    username: "yashveer",
    price: 999,

    // welcomeMessage: function() {
    //     console.log(`${this.username}, welcome to website`)
    // }

    consoleLogThis: function() {
        console.log(this)
    }
}

// user.welcomeMessage() // o/p => yashveer, welcome to website

user.username = "sam" // changed context
// user.welcomeMessage() // o/p => sam, welcome to website

// user.consoleLogThis() // o/p => { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }
// console.log(this) // o/p => {} (In node environment)
// console.log(this) // o/p => window (In browser)

// NOTE: Global object in browser is window object

// THIS inside a function
function regularFun() {
    console.log(this)
}

// regularFun() // o/p => big output

// INTERESTING CASE
function fun() {
    let username = "yashveer"
    console.log(this.username)
}

// fun() // o/p => undefined (THIS is not defined in functions unlike objects)

// ARROW FUNCTION : concise way of writing JavaScript functions in shorter way
const arrowFun = () => {
    console.log(this)
}

// arrowFun() // o/p => {} (no big output)

// EXPLICIT RETURN
const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,4))

// IMPLICIT RETURN
const addTwo2 = (num1, num2, num3) => num1 + num2 + num3
const addTwo3 = (num1, num2, num3) => (num1 + num2 + num3)
// return not required if wrapped in parenthesis instead of curly braces

// console.log(addTwo2(3,4,5))

// USE OF PARENTHESIS IN IMPLICIT RETURN
const returnObject = () => ({name: "yashveer", age: 21})

// console.log(returnObject());