// const tinderUser = {} // non singleton
const tinderUser = new Object(); // Singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// Objects in objects
const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstName: "Yashveer",
      lastName: "Singh",
    },
  },
};

// console.log(regularUser.fullName.userfullname) // o/p => { firstName: 'Yashveer', lastName: 'Singh' }
// console.log(regularUser.fullName.userfullname.firstName) // o/p => Yashveer

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// COMBINING OBJECTS

// USING ASSIGN (Less used)
// const obj3 = {obj1, obj2} // wrong
// console.log(obj3) // o/p => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign(obj1, obj2); // {} is a good practice
// const obj3 = Object.assign({}, obj1, obj2) // {} is a good practice
// Note: All obj will be merged in first given obj i.e. (empty object -> {})
// console.log(obj3) // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1) // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// USING SPREAD OPERATOR
const obj4 = { ...obj1, ...obj2 };
// console.log(obj4) // o/p => { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// ARRAY OF OBJECTS
const users = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
  {
    id: 3,
    email: "c@gmail.com",
  },
];

// console.log(users[1].email)

// OBJECT METHODS
console.log(Object.keys(tinderUser)); // Returns array of keys => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // Returns array of values => [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // Returns array of arrays => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// hasOwnProperty (check if object contains a key)
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // o/p => true

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// DESTRUCTURING
const {courseInstructor} = course
// destructuring with different name
const {courseName: cName} = course

console.log(courseInstructor)
console.log(cName)

// destructuring in props in react
// const navbar = ({company}) => {}

// JSON
// {
//     "name": "yashveer",
//     "college": "iiitm",
//     "age": "21"
// }