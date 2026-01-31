// Step 1: Select the outer div using its ID
const outerDivEl = document.getElementById("outerDiv");

// Step 2: Navigate t the first child, which is a text node
const firstChildEl = outerDivEl.childNodes[0];

// Step 3: Navigate to the second child, which is the innerDiv
const innerDivEl = outerDivEl.childNodes[1];

// Step 4: Select the first child of the inner div
const innerDivFirstChildEl = innerDivEl.childNodes[0];

// Step 5: Select the second child of the inner div
const nestedListEl = innerDivEl.childNodes[1];
console.log(nestedListEl);
