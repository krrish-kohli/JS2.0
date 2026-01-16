// ! Steps of creating and using a function

// // ! Define the function (declared)
// function addNumbers() {
//   // ! Write our code in the function
//   // write our code
//   let a = 10;
//   let b = 20;
//   let results = a + b;
//   console.log(results);
// }
// // ! Call/use the function (function invocation)
// addNumbers();

// Function parameters (inputs)
// function addNumbers(a, b) {
//   let results = a + b;
//   console.log(results);
// }

// addNumbers(10, 30);
// addNumbers(100, 400);

// // ! ===RETURN KEYWORD===
// function addNumbers(a, b) {
//   let results = a + b;
//   return results;
// }

// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans);

// // ! Function Expression
// const addNumbers = function (a, b) {
//   let results = a + b;
//   return results;
// };

// let ans = addNumbers(10, 30);
// console.log(ans);
// alert(ans);

// ! Arrow Function
// const addNumbers = (a, b) => {
//   let results = a + b;
//   return results;
// };

// const addNumbers = (a, b) => a + b;

// let ans = addNumbers(10, 30);
// console.log(ans);

// ! Anonymous Function
// IIF

// declared
// (function () {
//   console.log("Hello");
// })();

// (function (a, b) {
//   let results = a + b;
//   console.log(results);
// })(2, 3);

// ((a, b) => {
//   let results = a + b;
//   console.log(results);
// })(10, 20);

// Default parameters

const multiply = function (a = 1, b = 2) {
  const results = a * b;
  console.log(results);
};

multiply(10);
