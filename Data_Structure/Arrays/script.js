// How to create an array
let fruits = ["apple", "banana", "mango", "kiwi"]; // array

// push
fruits.push("pineapple");

// How top access array data
let accessApple = fruits[0];
let accessBanana = fruits[1];
let accessMango = fruits[2];

// pop
let books = ["The Hobbit", "NodeJS", "HTML"];
// books.pop();
// console.log(books);

// shift
// books.shift();
// console.log(books);

// unshift
books.unshift("MERN Stack");
// console.log(books);

// concat
const colors1 = ["red", "blue"];
const colors2 = ["green", "yellow"];

const allColors = colors1.concat(colors2);

// slice
const techCompanies = ["Google", "Amazon", "Facebook", "Apple", "Netflix"];

const selectedCompanies = techCompanies.slice(1, 4);
// console.log(selectedCompanies);

// .length
const totalCompanies = techCompanies.length;
console.log(totalCompanies);
