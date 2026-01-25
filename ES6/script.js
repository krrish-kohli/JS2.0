// ! ---
// ! ARROW FUNCTION
// ! ---

// ? Basic Syntax

// function multiply(a, b) {
//   return a * b;
// }

const multiply = (a, b) => a * b;

const result = multiply(2, 3);

// ? Block Body Syntax

const greet = (name) => `Hello, ${name}`;

const greetFn = greet("Krrish");

// ? Single Parameter, No Parentheses
const square = (x) => x * x;

const squareFn = square(5);

// ? No Parameters

const random = () => Math.random();
// console.log(random());

// ? Object Literal Return

// const getUser = () => {
//   return {
//     name: "Krrish",
//     age: 20,
//   };
// };

const getUser = () => ({ name: "Krrish", age: 20 });
const getUserFn = getUser();

// ! ---
// ! "let" and "const" in JavaScript
// ! ---

// ? Hoisting
// using var

// function hoistingIssue() {
//   console.log(a);
//   var a = 10;
//   //   console.log(a);
// }

// hoistingIssue();

// using let

// function hoistingIssue() {
//   console.log(a);
//   let a = 10;
//   console.log(a);
// }

// hoistingIssue();

// ? Block Scope

// // using var

// for(var i =0; i<3; i++){
//     console.log(i);
// }
// console.log(i);

// using let

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

// ? Immutability

// using var and let

// var x = 10;
// x = 20;
// console.log(x);

// let x = 10;
// x = 20;
// console.log(x);

// const x = 10;
// x = 20;
// console.log(x);

// ! ---
// ! Destructuring in Javascript ES6
// ! ---

// ? basic
const numbers = [1, 2, 3, 4];

const [first, second, third, fourth] = numbers;

// console.log(second);
// console.log(numbers[1]);

// ? Swap variables
let a = 1;
let b = 2;

[a, b] = [b, a];

// console.log(a, b);

// ? Object Destructuring

// Extract user data

// const { name, age, email } = {
//   name: "Krrish",
//   age: 20,
//   email: "xyz@gmail.com",
// };

// console.log(name);
// console.log(age);
// console.log(email);

// ? Destructuring in Function Parameters

function greet2({ name, age }) {
  console.log(`Hello, ${name}, your age is ${age}`);
}

const myUser = {
  name: "John",
  age: 30,
};
// greet2(myUser);

// ? Nested Destructuring

const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "Krrish",
    age: 20,
  },
};

console.log(name);
