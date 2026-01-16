// Accessing Parent Elements

const parentEl = document.getElementById("parent");
// Accessing the grandparent element
const grandParentEl = parentEl.parentNode;

// Accessing Child Elements
const firstChildEl = parentEl.firstChild;
const lastChildEl = parentEl.lastChild;

// console.log(lastChildEl);
// console.log(firstChildEl);

// Accessing Element Children Only
const firstElementChild = parentEl.firstElementChild;
const lastElementChild = parentEl.lastElementChild;

console.log(lastElementChild);
console.log(firstElementChild);
