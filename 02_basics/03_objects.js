// Objects can be declared by twy types
// 1. Literal
// 2. Constructor (Object.create)

// Singleton : When created using constructor

const mySym = Symbol("Key1") // Symbol as a key in objects

const jsUser = {
    name: "Yashveer",
    "full name" : "Yashveer Singh", // Can't be accessed by first way
    [mySym] : "myKey1", // Using symbol as key without converting it into string type key
    age: 21,
    location: "Gwalior",
    email: "yashveer@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ACCESS IN OBJECTS
// console.log(jsUser.email) // One way
// console.log(jsUser["email"]) // Second way

// console.log(jsUser.full name) // Error
// console.log(jsUser["full name"]) // Correct

console.log(jsUser.mySym) // undefined
console.log(jsUser[mySym]) // myKey1

// Changing key value
jsUser.email = "Yashveer4@gmail.com"
// console.log(jsUser.email)

// FREESE OBJECT : key values can't be changed
// Object.freeze(jsUser)
jsUser.email = "Yashveer7@gmail.com"
// console.log(jsUser.email) // o/p => Yashveer4@gmail.com

jsUser.greeting = function(){
    console.log("Hello jsUser")
}

// console.log(jsUser.greeting()) // o/p => Hello jsUser {function executed}
// console.log(jsUser.greeting) // o/p => [Function] {function not executed, it's reference is returned}

// THIS : reference to same object
jsUser.greetingTwo = function(){
    console.log(`Hello jsUser, ${this.name}`)
}

// console.log(jsUser.greetingTwo()) // o/p => Hello jsUser, Yashveer