// Step 1: Select a list item using data attribute
const selectedItemEl = document.querySelector('[data-item="fruit"');

// Step 2: Navigate to the parent <ul> element
const parentListEl = selectedItemEl.parentNode;

// Step 3: Navigate to the grandparent
const grandparentEl = parentListEl.parentNode;

// Step 3: Navigate to the great-grandparent
const greatGrandParentEl = grandparentEl.parentNode;
console.log(greatGrandParentEl);
