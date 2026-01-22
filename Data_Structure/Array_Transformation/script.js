// ! ForEach()
// let numbers = [1, 2, 3, 4];

// const newNumbers = numbers.forEach(function (num) {
//   const doubled = num * 2;
// //   console.log(doubled);
// });

// // Array of objects
// const products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 10 },
//   { name: "Tablet", stock: 3 },
// ];

// products.forEach((individualProduct)=>{
//     console.log(`Product: ${individualProduct.name}, stock: ${individualProduct.stock}`);
// })

// ! map()
// creates a new array
// transform the elements
let numbers = [1, 2, 3, 4];

const doubledArray = numbers.map(function (num) {
  return num * 2;
});
// console.log("doubled", doubledArray);
// console.log("original array", numbers);

const products = [
  { name: "Laptop", stock: 5, price: 1000 },
  { name: "Phone", stock: 10, price: 500 },
  { name: "Tablet", stock: 3, price: 300 },
];
// Apply 10% discount on the price

const discountedPrices = products.map((product) => {
  return {
    name: product.name,
    stock: product.stock,
    price: product.price * 0.9,
  };
});

// !====reduce()====
const numbers1 = [1, 2, 3, 4, 5, 6];
const totalSum = numbers1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// console.log(totalSum);

// calculate total inventory value
const products2 = [
  { name: "Laptop", stock: 5, price: 1000, isOutOfStock: false },
  { name: "Phone", stock: 10, price: 500, isOutOfStock: true },
  { name: "Tablet", stock: 3, price: 300, isOutOfStock: true },
];

const totalValue = products2.reduce(function (acc, product) {
  return acc + product.stock * product.price;
}, 0);

// console.log(totalValue);

// !====find()====
const numbers2 = [1, 2, 3, 4, 5, 6];
const foundNumber = numbers2.find(function (num) {
  return num > 3;
});
console.log(foundNumber);
